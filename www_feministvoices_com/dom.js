//@ts-check

/**
 * document.getElementById helper
 * @param {string} id
 * @returns {HTMLElement | SVGElement}
 */
export function $id (id) {
	return document.getElementById(id)
}

/**
 * querySelector Helper
 * @param {string} selector Selector string
 * @param {Element | Document} [element] Optional root element
 * @returns {HTMLElement | SVGElement}
 */
export function $q (selector, element = document) {
	return element.querySelector(selector)
}

/**
 * querySelectorAll Helper that returns an array rather than a NodeList.
 * @param {string} selector Selector string
 * @param {Element | Document} [element] Optional root element
 * @returns {(HTMLElement | SVGElement)[]} An array of nodes rather than a NodeList
 */
export function $qa (selector, element = document) {
	return Array.from(element.querySelectorAll(selector))
}

/**
 * querySelector Helper - callback is invoked once for the first element if found
 * @param {string} selector Selector string
 * @param {(el: HTMLElement | SVGElement) => void} f
 * @param {Element | Document} [element] Optional root element
 * @returns {boolean} True if an element was found
 */
export function $qo (selector, f, element = document) {
	/** @type {HTMLElement | SVGElement} */
	const el = element.querySelector(selector)
	if (el == null) {
		return false
	}
	f(el)
	return true
}

/**
 * @returns {Element | undefined} The currently focused element, otherwise undefined
 */
export function getFocusedElement() {
	if (!document.hasFocus()) {
		return undefined
	}
	const el = document.activeElement
	return el !== document.body && el !== document.documentElement
		? el : undefined
}

/**
 * Forces DOM layout for this element so that toggled
 * classes/styles will trigger transitions.
 * @param {Element} element
 */
export function readyDom (element) {
	const rc = element.getBoundingClientRect() // eslint-disable-line no-unused-vars
}

/**
 * Assuming the supplied class name or style properties trigger a
 * transition, this prepares the element then toggles the class or
 * applies the style(s) to initiate the transition.
 * @param {HTMLElement | SVGElement} element
 * @param {string | Record<string, string | null>} toggle
 */
export function triggerTransition (element, toggle) {
	readyDom(element)
	if (typeof toggle === 'string') {
		element.classList.toggle(toggle)
	} else {
		Object.assign(element.style, toggle)
	}
}

/**
 * @param {HTMLElement | SVGElement} element The element that is transitioning.
 * @param {string | Record<string, string | null>} [toggle]
 * If supplied, this function will toggle this class or
 * apply the style properties to trigger the transition. Otherwise
 * it is assumed the application has already done so.
 * @returns {Promise<Event>} A promise that resolves when the transition ends.
 */
export function transitionPromise (element, toggle) {
	if (typeof toggle === 'string') {
		element.classList.toggle(toggle)
	} else if (toggle != null) {
		Object.assign(element.style, toggle)
	}
	return new Promise(r => {
		element.addEventListener('transitionend', r)
	})
}

/**
 * Constrains keyboard navigation to children of the supplied element.
 * Useful for modal/dialogs.
 * @param {Element} element
 * @returns {{elements: HTMLElement[]; tabIndices: number[]}} A lock object that can then be used to restore full keyboard nav.
 */
export function lockKeyNav (element) {
	return $qa(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
	).filter(
		el => el.tabIndex != null && el.tabIndex >= 0 && !element.contains(el)
	).reduce((lock, el) => {
		// Remember previous setting
		lock.elements.push(el)
		lock.tabIndices.push(el.tabIndex)
		// Set to -1
		el.tabIndex = -1
		return lock
	}, {elements: [], tabIndices: []})
}

/**
 * Given a lock object returned by lockKeyNav, this will restore
 * tab indices to all elements that were temporarily disabled.
 * @param {{elements: HTMLElement[]; tabIndices: number[]}} lock
 */
export function unlockKeyNav (lock) {
	for (let i = 0; i < lock.elements.length; ++i) {
		lock.elements[i].tabIndex = lock.tabIndices[i]
	}
	lock.elements = []
	lock.tabIndices = []
}

/**
 * Promisified timeout
 * @param {number} ms Time in milliseconds
 * @returns {Promise<void>}
 */
export function delay (ms) {
	return new Promise(r => {setTimeout(() => {r()}, ms)})
}
