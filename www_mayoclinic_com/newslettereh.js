const formWrapper = document.querySelector('.myc-subscription-form');
const fieldsToValidate = [...formWrapper.querySelectorAll('input[type="text"][required], input[type="radio"][required], input[type="checkbox"][required], input[type="email"][required], input[type="tel"][required], textarea[required]')];
let inputValidity;
let elemErrorAttr;
let elemDescribedby;
let backdrop = document.querySelector('.myc-loading');
const errorBanner = formWrapper.querySelector('#gralError');
const happyPath = formWrapper.querySelector('#happypath');
const sadPath = formWrapper.querySelector('#sadpath');
let formObj = {};
let http;
let url;
let params;
let urlEncodedDataPairs = [];
let correctValuesForHiddenFields = [];

function slideStep(elem, isTransitioned, secondElem) {
	if (isTransitioned) {
		setTimeout(function () {
			elem.setAttribute('hidden', true);
		}, 400);
		secondElem.removeAttribute('hidden');
	} else {
		// to do after transition ends, add hidden
		formWrapper.querySelector('.myc-step-container').classList.remove('resizeWidth');
		setTimeout(function () {
			secondElem.setAttribute('hidden', true);
		}, 400);
		elem.removeAttribute('hidden');
		elem.focus();
		[...formWrapper.querySelectorAll('.myc-subscription-form-ending')].forEach(el => {
			el.setAttribute('hidden', true);
		});
	}
}

function finalStep(result) {
	if (formWrapper.dataset.lastStep === "true") {
		formWrapper.querySelector('.myc-step-container').classList.add('resizeWidth');
		// to do after transition ends, add hidden
		if (result) {
			happyPath.removeAttribute('hidden');
			[...formWrapper.querySelectorAll('input:checked + label')].forEach(inputElem => {
				[...happyPath.querySelectorAll('.myc-option-chosen')].forEach(choosenOption => {
					choosenOption.textContent = inputElem.textContent;
				});
			});
			happyPath.focus();
		} else {
			sadPath.removeAttribute('hidden');
			sadPath.focus();
		}
		slideStep(formWrapper.querySelector('#first-step'), true, formWrapper.querySelector('#second-step'));
	}
}

function sendingData(dataToSend) {
	http = new XMLHttpRequest();
	url = formWrapper.dataset.sendingUrl;
	params = dataToSend;
	http.open('POST', url, true);
	for (let nameParam in params) {
		urlEncodedDataPairs.push(encodeURIComponent(nameParam) + '=' + encodeURIComponent(params[nameParam]));
	}
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function () {
		if (http.readyState === 4) {
			switch (true) {
				case (http.status == 200):
					// success
					loadBackdrop('', false);
					finalStep(true);
					break;
				case (http.status >= 500):
					// internal server error
					loadBackdrop('', false);
					finalStep(false);
					break;
				case (http.status >= 402 && http.status <= 420):
					// error
					loadBackdrop('', false);
					finalStep(false);
					break;
				case (http.status == 400 || http.status == 401):
					// bad request & unauthorized error
					loadBackdrop('', false);
					finalStep(false);
					break;
				default:
					console.error('Error in newslettereh.js: sendingData(dataToSend) failing during http.onreadystatechange', '\n', 'HTTP Status: ' + http.status, '\n', 'Encoded Data for URL: ' + urlEncodedDataPairs.join("&"));
			}
		}
	}
	http.send(urlEncodedDataPairs.join("&"));
}

// Get all the information from the form
function createObj() {
	[...formWrapper.querySelectorAll('input')].forEach(inputElem => {
		if (inputElem.getAttribute('type') === 'radio' || inputElem.getAttribute('type') === 'checkbox') {
			if (inputElem.checked) {
				formObj[inputElem.getAttribute('name')] = inputElem.value;
			}
		} else {
			formObj[inputElem.getAttribute('name')] = inputElem.value;
		}
	});
	sendingData(formObj);
}

// Clean Error Validation
function cleanValidation(el) {
	if (el.getAttribute('type') === 'radio' || el.getAttribute('type') === 'checkbox') {
		el.parentNode.classList.remove('myc-error');
	} else {
		el.parentNode.parentNode.classList.remove('myc-error');
	}
	if (el.hasAttribute('aria-describedby')) {
		elemDescribedby = el.getAttribute('aria-describedby');
		document.querySelector('#' + elemDescribedby).setAttribute('hidden', true);
		el.removeAttribute('aria-describedby');
	}
}

// Error handling
function errorHandling(el, errorType) {
	if (el.getAttribute('type') === 'radio' || el.getAttribute('type') === 'checkbox') {
		el.parentNode.classList.add('myc-error');
	} else {
		el.parentNode.parentNode.classList.add('myc-error');
	}
	if (el.hasAttribute('data-' + errorType)) {
		elemErrorAttr = el.getAttribute('data-' + errorType);
		el.setAttribute('aria-describedby', elemErrorAttr);
		document.querySelector('#' + elemErrorAttr).removeAttribute('hidden');
	}
}

// Validate input
function validInput(field) {
	cleanValidation(field);
	if (field.classList.contains("required-group")) {
		var valid = [...document.querySelectorAll('input.required-group[type=checkbox][data-checkbox-group="' + field.dataset.checkboxGroup + '"]')].filter(check => check.checked === true).length > 0;
		if (!valid) {
			errorHandling(field, "valueMissing")
		}
		return false;
	}
	inputValidity = field.validity;
	if (!inputValidity.valid) {
		for (var prop in inputValidity) {
			if (inputValidity[prop] === true) {
				// Error Handling
				errorHandling(field, prop)
				return false;
			}
		}
	}
}

function validateForm(form) {
	[...form.querySelectorAll('input:not([type="hidden"])')].forEach(field => {
		validInput(field);
	});
	let hiddenInputsHaveChanged = false;
	[...form.querySelectorAll('input[type="hidden"]')].some((field, i) => {
		if (field.name !== 'elqFormSubmissionToken') {
			if (field.value !== correctValuesForHiddenFields[i]) {
				console.error('Hidden input received new value:', field.name, field.value, correctValuesForHiddenFields[i], i);
				hiddenInputsHaveChanged = true;
			}
		}
	});
	return hiddenInputsHaveChanged || form.querySelectorAll('.myc-error').length > 0;
}

// Function for showing backdrop
// showBackDrop is a boolean to show or hide
function loadBackdrop(msg, showBackDrop) {
	backdrop.querySelector('h2').textContent = msg;
	if (showBackDrop) {
		backdrop.removeAttribute('hidden');
		backdrop.focus();
	} else {
		backdrop.blur();
		backdrop.setAttribute('hidden', true);
	}
}

function addingInlineEvents() {
	fieldsToValidate.forEach(field => {
		if (field.getAttribute('type') === 'radio' || field.getAttribute('type') === 'checkbox') {
			field.addEventListener('change', function () {
				validInput(this);
			});
		} else {
			field.addEventListener('input', function () {
				validInput(this);
			});
		}
	});
}

// additions from subscriptionform.js
// get url label
function getUrlLabel(urlForm) {
	let urlLastPart = urlForm.substring(urlForm.lastIndexOf('/') + 1);
	for (let i = 0; i < urlList.length; i++) {
		if (urlList[i].url.indexOf(urlLastPart) !== -1) {
			return urlList[i].label;
		}
	}
}

// Populate hidden fields
function populateHiddenFields() {
	[...formWrapper.querySelectorAll('input[type="hidden"]')].forEach(hf => {
		switch (hf.name) {
			case 'page_url':
				if (hf.value !== window.location.href) {
					hf.value = window.location.href;
				}
				break;
			case 'pageTitle':
				if (hf.value !== document.querySelector('h1').textContent) {
					hf.value = document.querySelector('h1').textContent;
				}
				break;
			case 'elqFormName':
				if (hf.value !== formWrapper.getAttribute('data-name-form')) {
					hf.value = formWrapper.getAttribute('data-name-form');
				}
				break;
			case 'category':
				hf.value = getUrlLabel(window.location.pathname);
				break;
			default:
		}
		correctValuesForHiddenFields.push(hf.value);
	});
}

function enableDisableSubmit(input, submit) {
	if (input.type === 'hidden') {
		// This occurs when a spam bot has changed a single hidden field value, we don't enable the submit button in this case
		submit.setAttribute('disabled', true);
		return;
	} else {
		// Only visible inputs
		if (validateForm(formWrapper)) {
			submit.setAttribute('disabled', true);
		} else {
			submit.removeAttribute('disabled');
		}
	}
}

function loadScriptIntoForm(url, callback) {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.onload = () => {
		callback()
	};
	script.src = url;
	formWrapper.parentElement.prepend(script);
};

function getHostName(data) {
	var a = document.createElement('a');
	a.href = data;
	return a.hostname;
}

function getElqFormSubmissionToken(c) {
	var e = new XMLHttpRequest();
	var b = formWrapper;
	if (b?.querySelector('input[name="elqFormSubmissionToken"]')) {
		var f = b.dataset['sendingUrl'];
		var a = window.getHostName(f);
		a = `https://${a}/e/formsubmittoken?elqSiteID=${c}`;
		if (a) {
			e.onreadystatechange = () => {
				if (e.readyState === 4) {
					if (e.status === 200) {
						b.querySelector('[name=elqFormSubmissionToken]').value = e.responseText;
					} else {
						b.querySelector('[name=elqFormSubmissionToken').value = '';
					}
				}
			};
			e.open('GET', a, true);
			e.send();
		} else {
			b.querySelector('[name=elqFormSubmissionToken').value = '';
		}
	}
}

// ================
// Begin main logic
// ================
loadScriptIntoForm('/~/media/kcms/ux/javascript/subscriptionlist.js', () => {
	if (!!urlList && Array.isArray(urlList)) {
		populateHiddenFields();
	} else {
		console.error('Missing requirement: subscriptionlist.js is not present.');
	}

	// Eloqua necessary functionality
	getElqFormSubmissionToken('74881809');

	var lastFormField = formWrapper.querySelector("#elq-FormLastRow");
	if (lastFormField !== null) {
		lastFormField.style.display = "none";
	}

	// Newsletter Trigger
	const submitButton = formWrapper.querySelector('#newsletterTrigger') || formWrapper.querySelector('.myc-primaryBtn');

	// Disable until conditions met
	submitButton.setAttribute('disabled', 'true');
	// Validation on submit button click
	submitButton.addEventListener('click', function (e) {
		e.preventDefault();
		if (validateForm(formWrapper)) {
			errorBanner.removeAttribute('hidden');
			errorBanner.focus();
		} else {
			errorBanner.setAttribute('hidden', true);
			if (typeof rpiWebClient !== 'undefined') {
				// Redpoint Events
				rpiWebClient.queueWebEvent('FormSubmission', null, formWrapper.querySelector('input[name="elqFormName"]').value);
				rpiWebClient.queueWebEvent("Form/Newsletter", null, document.location.href, null, [{
					name: "emailNewsletterSignupForm",
					value: "successful form submission"
				}, {
					name: "formName",
					value: formWrapper.querySelector('input[name="elqFormName"]').value
				}]);
				rpiWebClient.flushPendingEvents();
				// End Redpoint Events
			}
			loadBackdrop(backdrop.querySelector('h2').dataset.msg, true);
			createObj();
		}
	}, false);

	// Validation on change to inputs
	[...formWrapper.querySelectorAll('input')].forEach((input, i) => {
		if (input.type === 'radio' || input.type === 'checkbox') {
			input.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					input.click();
				}
			});
		}
		if (input.type === 'email' || input.type === 'text') {
			input.addEventListener('keypress', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					input.reportValidity();
				}
			});
			input.addEventListener('input', (e) => {
				enableDisableSubmit(input, submitButton);
			});
			input.addEventListener('blur', (e) => {
				enableDisableSubmit(input, submitButton);
			});
		} else {
			input.addEventListener('change', (e) => {
				enableDisableSubmit(input, submitButton);
			});
		}
	});

	// Go Back To first step
	[...formWrapper.querySelectorAll('.myc-wordBtn')].forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();
			slideStep(formWrapper.querySelector('#first-step'), false, formWrapper.querySelector('#second-step'));
		});
	});

	// if the page is created using .Net form
	if (document.querySelector('#mayoform') !== null) {
		[...document.querySelectorAll('#Search, [id$=SearchMobileAzure]')].forEach(elem => {
			elem.addEventListener('click', e => {
				e.preventDefault();
				var searchBox = document.querySelector('#searchTerm');
				if (searchBox === null) {
					searchBox = document.querySelector('#azureSiteSearchTerm')
					if (searchBox !== null && searchBox.value === '') {
						searchBox = document.querySelector('#SearchMainMobile')
					}
				}
				if (searchBox !== null && searchBox.value !== "") {
					window.location = 'https://www.mayoclinic.org/search/search-results?q=' + searchBox.value;
				}
			}, false);
		});
	}
});
