import {
	getFocusedElement, readyDom, transitionPromise, lockKeyNav, unlockKeyNav, delay
} from './dom.js'

/** @type {HTMLElement | undefined} */
let root

/** @type {HTMLElement | undefined} */
let focusedElement

/** @type {{() => any} | undefined} */
let render

/** @type {{() => any} | undefined} */
let onClose

/**
 * Open a Modal
 * @param {{
 *   onClose?: () => void
 *   render: () => any
 * }} options
 */
export function openModal (options) {
	if (root != null) {
		console.warn('Modal already open')
		return false
	}
	focusedElement = getFocusedElement()
	root = document.createElement('div')
	root.classList.add('modal-background')
	document.body.appendChild(root)
	render = options.render
	onClose = options.onClose
	m.mount(root, Modal)
	delay(10).then(() => {
		if (focusedElement != null) {
			focusedElement.blur()
		}
		readyDom(root)
		root.classList.add('show')
	})
	return true
}

/**
 * Close the currently open Modal
 * @returns {Promise<boolean>} A promise that resolves when closed
 */
export async function closeModal() {
	if (root == null) {
		console.warn('Modal not open')
		return false
	}
	// Fade out first
	await transitionPromise(root, 'show')
	m.mount(root, null)
	root.remove()
	await delay(10)
	// Restore original focus
	focusedElement && focusedElement.focus()
	focusedElement = undefined
	render = undefined
	onClose = undefined
	root = undefined
	return true
}

/** Returns true if Modal is currently open */
export function modalIsOpen() {
	return root != null
}

/** Modal Mithril component */
function Modal() {
	/** @type {elements: HTMLElement[]; tabIndices: number[]} */
	let lock
	return {
		oncreate: v => {
			lock = lockKeyNav(v.dom)
		},
		onremove: () => {
			unlockKeyNav(lock)
		},
		view: () => m('.modal',
			// Default modal elements
			m('.modal-inner-wrapper',
				m('button.btn-close',
					{
						onclick: () => {
							closeModal()
						}
					},
					// '×'
				),
				// Render app content
				render()
			)
		)
	}
}
