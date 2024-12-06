/*jshint esversion: 6 */

// Customization
// Add code before main script
// CDC = window.CDC || {};

// Geo specific requirement
// CDC.geoLookup = function (geo) {
//     // console.log(geo.country);
// };

// CIP
// CDC.CIP_SUBMISSION = true;
// CDC.CIP_SUBMISSION_METHOD = 'newwindow';   // newwindow/samewindow

// Use .add() OR .delete() Set methods to manage consent capture.
// CDC.CONSENTS_PERMITTED = new Set();
// CDC.SNIPPET_ARTIST_MKTG = new Set();
// CDC.SNIPPET_GLOBAL_MKTG = new Set();

// Country List
// CDC.countryList = {...};

// Intl Tel Input options
// CDC.IntlTelInputOptions = {...}

(function () {

    CDC = window.CDC || {};
    CDC.Intl = CDC.Intl || {};

    if (CDC.CIP_SUBMISSION === undefined) CDC.CIP_SUBMISSION = false;
    if (CDC.CIP_SUBMISSION_METHOD === undefined) CDC.CIP_SUBMISSION_METHOD = 'newwindow';

    const EMAIL = 'email';
    const NEWSLETTER_ID = 'newsletterId';
    const DATASOURCE = 'datasource';
    const SOURCE = 'source';
    const _EXT = '_ext';
    const MOBILE = 'mobile';
    const GLOBAL_OPTIN = 'global_optin';
    const REF_URL = 'ref_url';
    const GLOBAL_MKTG_CONSENT = 'global_mktg_consent';
    const ARTIST_MKTG_CONSENT = 'artist_mktg_consent';
    const MOBILE_MKTG_CONSENT = 'mobile_mktg_consent';
    const COMMUNITY = 'mobile_leader_id';
    const SUBCOMMUNITY = 'subcommunity';
    const AGE_CONFIRM = 'Ageconfirm';
    const SWEEPS_TERMS_CONFIRM = 'Sweeps_TermsConfirm';
    const PRIVACY_POLICY_URL = 'privacy_policy_url';
    const WMX_ID = '14077858';
    const TOASTER = 'Toaster';
    const CONSENT_TXT_SUFFIX = '_txt';
    const AGESWEEPS_CHKBOX_SUFFIX = '_checkbox';
    const CONSENT_TRUE = 'true';
    const CONSENT_FALSE = 'false';

    const privacyUrlPattern = ['/privacy'];
    const EVENT_SMSSignUp = 'SMSSignUp';
    const formSubmitSelector = '.mlistSubmit';
    const countrySelector = 'select[name=country]';
    const mobileSelector = `input[name=${MOBILE}]`;
    const mobileLeaderIdSelector = `input[name=${COMMUNITY}]`;
    const intlTelInputList = [];

    const CIP_RESULT_PARAM_KEY = 'cip_result';
    const CIP_RESULT_SUCCESS_PARAM_VALUE = 'ok';
    const CIP_RESULT_FAIL_PARAM_VALUE = 'fail';
    const CIP_DATA_PARAM_KEY = 'cip_data';
    const CIP_FORM_INDEX_PARAM_KEY = 'form_index';
    const CIP_FORM_SUCCESSURL = 'successurl';
    const CIP_FORM_FAILURL = 'failurl';

    CDC.CONSENTS_PERMITTED = CDC.CONSENTS_PERMITTED || (new Set());
    CDC.SNIPPET_ARTIST_MKTG = CDC.SNIPPET_ARTIST_MKTG || (new Set());
    CDC.SNIPPET_GLOBAL_MKTG = CDC.SNIPPET_GLOBAL_MKTG || (new Set());
    CDC.CONSENTS_PERMITTED.add(GLOBAL_MKTG_CONSENT);
    CDC.CONSENTS_PERMITTED.add(ARTIST_MKTG_CONSENT);
    CDC.CONSENTS_PERMITTED.add(MOBILE_MKTG_CONSENT);
    CDC.CONSENTS_PERMITTED.add(AGE_CONFIRM);
    CDC.CONSENTS_PERMITTED.add(SWEEPS_TERMS_CONFIRM);
    CDC.SNIPPET_ARTIST_MKTG.add('I agree to receive personalized updates');
    CDC.SNIPPET_GLOBAL_MKTG.add('Sign me up to discover more artists like');
    CDC.SNIPPET_GLOBAL_MKTG.add('Sign me up for more artists like');
    CDC.SNIPPET_GLOBAL_MKTG.add('Sign me up to more artists like');

    const SIGNUP_URL = 'https://signup.wmg.com/register';
    const CIP_DOMAIN = 'https://cip.external-websites-public.data.wmg.com';
    const CIP_SIGNUP_URL = `${CIP_DOMAIN}/collect`;
    const PATH_ONETRUST_GEO = 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/mailinglistgeo';
    const PATH_INTLTELINPUT_JS = 'https://libraries.wmgartistservices.com/custom-js/mailing-list/intl-tel-input/intl-tel-input.js';
    const PATH_INTLTELINPUT_CSS = 'https://libraries.wmgartistservices.com/custom-js/mailing-list/intl-tel-input/intl-tel-input.css';
    const PATH_INTLTELINPUT_UTILS_JS = 'https://libraries.wmgartistservices.com/custom-js/mailing-list/intl-tel-input/libphonenumber.js';

    const nonArtistIds = [WMX_ID, '14075551', '14076565', '6518500', '14073863', '50', '8424432', '14074104', '6879317', '5720', '8989263', '6485737'];

    const excludedCountriesList1 = ['CU', 'IR', 'KP', 'SY', 'RU'];
    const excludedCountriesList2 = ['TR', 'UA'];
    const countryList = CDC.countryList || {
        AF: "Afghanistan", AL: "Albania", DZ: "Algeria", AS: "American Samoa", AD: "Andorra", AO: "Angola", AI: "Anguilla", AQ: "Antarctica", AG: "Antigua and Barbuda", AR: "Argentina", AM: "Armenia", AW: "Aruba", AU: "Australia", AT: "Austria", AZ: "Azerbaijan", BS: "Bahamas", BH: "Bahrain", BD: "Bangladesh", BB: "Barbados", BY: "Belarus", BE: "Belgium", BZ: "Belize", BJ: "Benin", BM: "Bermuda", BT: "Bhutan", BO: "Bolivia, Plurinational State Of", BQ: "Bonaire, Sint Eustatius and Saba", BA: "Bosnia and Herzegovina", BW: "Botswana", BV: "Bouvet Island", BR: "Brazil", IO: "British Indian Ocean Territory", BN: "Brunei Darussalam", BG: "Bulgaria", BF: "Burkina Faso", BI: "Burundi", KH: "Cambodia", CM: "Cameroon", CA: "Canada", CV: "Cape Verde", KY: "Cayman Islands", CF: "Central African Republic", TD: "Chad", CL: "Chile", CN: "China", CX: "Christmas Island", CC: "Cocos (Keeling) Islands", CO: "Colombia", KM: "Comoros", CG: "Congo", CD: "Congo, The Democratic Republic Of The", CK: "Cook Islands", CR: "Costa Rica", HR: "Croatia", CU: "Cuba", CW: "Curaçao", CY: "Cyprus", CZ: "Czech Republic", CI: "Côte D'Ivoire", DK: "Denmark", DJ: "Djibouti", DM: "Dominica", DO: "Dominican Republic", EC: "Ecuador", EG: "Egypt", SV: "El Salvador", GQ: "Equatorial Guinea", ER: "Eritrea", EE: "Estonia", ET: "Ethiopia", FK: "Falkland Islands (Malvinas)", FO: "Faroe Islands", FJ: "Fiji", FI: "Finland", FR: "France", GF: "French Guiana", PF: "French Polynesia", TF: "French Southern Territories", GA: "Gabon", GM: "Gambia", GE: "Georgia", DE: "Germany", GH: "Ghana", GI: "Gibraltar", GR: "Greece", GL: "Greenland", GD: "Grenada", GP: "Guadeloupe", GU: "Guam", GT: "Guatemala", GG: "Guernsey", GN: "Guinea", GW: "Guinea-Bissau", GY: "Guyana", HT: "Haiti", HM: "Heard Island and McDonald Islands", VA: "Holy See (Vatican City State)", HN: "Honduras", HK: "Hong Kong", HU: "Hungary", IS: "Iceland", IN: "India", ID: "Indonesia", IR: "Iran, Islamic Republic Of", IQ: "Iraq", IE: "Ireland", IM: "Isle of Man", IL: "Israel", IT: "Italy", JM: "Jamaica", JP: "Japan", JE: "Jersey", JO: "Jordan", KZ: "Kazakhstan", KE: "Kenya", KI: "Kiribati", KP: "Korea, Democratic People's Republic Of", KR: "Korea, Republic of", XK: "Kosovo", KW: "Kuwait", KG: "Kyrgyzstan", LA: "Lao People's Democratic Republic", LV: "Latvia", LB: "Lebanon", LS: "Lesotho", LR: "Liberia", LY: "Libya", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg",
        MO: "Macao", MK: "Macedonia, the Former Yugoslav Republic Of", MG: "Madagascar", MW: "Malawi", MY: "Malaysia", MV: "Maldives", ML: "Mali", MT: "Malta", MH: "Marshall Islands", MQ: "Martinique", MR: "Mauritania", MU: "Mauritius", YT: "Mayotte", MX: "Mexico", FM: "Micronesia, Federated States Of", MD: "Moldova, Republic of", MC: "Monaco", MN: "Mongolia", ME: "Montenegro", MS: "Montserrat", MA: "Morocco", MZ: "Mozambique", MM: "Myanmar", NA: "Namibia", NR: "Nauru", NP: "Nepal", NL: "Netherlands", NC: "New Caledonia", NZ: "New Zealand", NI: "Nicaragua", NE: "Niger", NG: "Nigeria", NU: "Niue", NF: "Norfolk Island", MP: "Northern Mariana Islands", NO: "Norway", OM: "Oman", PK: "Pakistan", PW: "Palau", PS: "Palestinian Territory, Occupied", PA: "Panama", PG: "Papua New Guinea", PY: "Paraguay", PE: "Peru", PH: "Philippines", PN: "Pitcairn", PL: "Poland", PT: "Portugal", PR: "Puerto Rico", QA: "Qatar", RO: "Romania", RU: "Russian Federation", RW: "Rwanda", RE: "Réunion", BL: "Saint Barthélemy", SH: "Saint Helena, Ascension and Tristan Da Cunha", KN: "Saint Kitts And Nevis", LC: "Saint Lucia", MF: "Saint Martin (French Part)", PM: "Saint Pierre And Miquelon", VC: "Saint Vincent And The Grenadines", WS: "Samoa", SM: "San Marino", ST: "Sao Tome and Principe", SA: "Saudi Arabia", SN: "Senegal", RS: "Serbia", SC: "Seychelles", SL: "Sierra Leone", SG: "Singapore", SX: "Sint Maarten (Dutch part)", SK: "Slovakia", SI: "Slovenia", SB: "Solomon Islands", SO: "Somalia", ZA: "South Africa", GS: "South Georgia and the South Sandwich Islands", SS: "South Sudan", ES: "Spain", LK: "Sri Lanka", SD: "Sudan", SR: "Suriname", SJ: "Svalbard And Jan Mayen", SZ: "Swaziland", SE: "Sweden", CH: "Switzerland", SY: "Syrian Arab Republic", TW: "Taiwan", TJ: "Tajikistan", TZ: "Tanzania, United Republic of", TH: "Thailand", TL: "Timor-Leste", TG: "Togo", TK: "Tokelau", TO: "Tonga", TT: "Trinidad and Tobago", TN: "Tunisia", TR: "Turkey", TM: "Turkmenistan", TC: "Turks and Caicos Islands", TV: "Tuvalu", UG: "Uganda", UA: "Ukraine", AE: "United Arab Emirates", GB: "United Kingdom", US: "United States", UM: "United States Minor Outlying Islands", UY: "Uruguay", UZ: "Uzbekistan", VU: "Vanuatu", VE: "Venezuela, Bolivarian Republic of", VN: "Viet Nam", VG: "Virgin Islands, British", VI: "Virgin Islands, U.S.", WF: "Wallis and Futuna", EH: "Western Sahara", YE: "Yemen", ZM: "Zambia", ZW: "Zimbabwe", AX: "Åland Islands"
    };
    [...excludedCountriesList1].forEach(exc => delete countryList[exc]);
    CDC.user_country_first = true;

    const mobileNumberType = { 0: "FIXED_LINE", 1: "MOBILE", 2: "FIXED_LINE_OR_MOBILE", 3: "TOLL_FREE", 4: "PREMIUM_RATE", 5: "SHARED_COST", 6: "VOIP", 7: "PERSONAL_NUMBER", 8: "PAGER", 9: "UAN", 10: "VOICEMAIL", 11: "UNKNOWN", };
    const mobileValidationError = { 0: "IS_POSSIBLE", 1: "INVALID_COUNTRY_CODE", 2: "TOO_SHORT", 3: "TOO_LONG", 4: "IS_POSSIBLE_LOCAL_ONLY", 5: "INVALID_LENGTH", };

    const classFadeOut = 'fadeOut';
    const classFadeIn = 'fadeIn';

    class PubSubPattern {
        constructor() {
            this.subscribers = [];
        }
        subscribe(subscriber) {
            this.subscribers.push(subscriber);
        }
        unsubscribe(subscriber) {
            this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
        }
        publish(payload) {
            this.subscribers.forEach(subscriber => subscriber(payload));
        }
        anySubscriptions() {
            return this.subscribers.length > 0;
        }
    }

    CDC.pubSubGeoLocation = new PubSubPattern();

    class MailingListForm {

        constructor(cf) {

            this.formData = {};
            this.ARTISTS_LIST = [];
            this.dtmObj = {};
            this.dispatchEventsList = [];
            this.intlTelInputInstance = intlTelInputList[[...document.querySelectorAll('form')].indexOf(cf)];

            this.customPageName = false;
            this.formOneSuccessFnFlag = false;
            this.formTwosuccessFnFlag = false;

            this.currentForm = cf;
            this.formParent = this.currentForm.parentElement;
            this.formParentParent = this.currentForm.parentElement.parentElement;

            this.variant = this.formParentParent.classList.contains('dtmtoaster') ? TOASTER : '';

            this.customPageNameVal = this.formParentParent.getAttribute('data-custom-page-name');
            if (this.customPageNameVal) {
                this.customPageName = true;
                this.dtmObj.customPageName = this.customPageNameVal;
            } else {
                this.customPageName = false;
                this.dtmObj.customPageName = '';
            }

            this.formOneSuccessFnName = this.formParentParent.getAttribute('data-success');
            if (this.formOneSuccessFnName) {
                this.formOneSuccessFnFlag = true;
            }

            this.formTwoSuccessFnName = this.formParentParent.getAttribute('data-success-formtwo');
            if (this.formTwoSuccessFnName) {
                this.formTwosuccessFnFlag = true;
            }

        }

        setupForm() {

            [...this.currentForm.querySelectorAll('input, select, textarea')].forEach((inputTag) => {
                if (inputTag.getAttribute('type') !== 'submit' && inputTag.getAttribute('type') !== 'checkbox') {
                    if (inputTag.name === MOBILE) {
                        let itiNumber = this.intlTelInputInstance.getNumber().replace(/\+/g, '');
                        this._setFormDataProperty(inputTag.name, itiNumber);
                        inputTag.setAttribute('iti-number', itiNumber);
                        inputTag.setAttribute('is-valid-number', this.intlTelInputInstance.isValidNumber());
                        inputTag.setAttribute('number-type', mobileNumberType[this.intlTelInputInstance.getNumberType()]);
                        inputTag.setAttribute('validation-error', mobileValidationError[this.intlTelInputInstance.getValidationError()]);
                    }
                    else
                        this._setFormDataProperty(inputTag.name, inputTag.value);
                }

                if (inputTag.getAttribute('type') === 'checkbox') {

                    let checkboxName = inputTag.name;
                    let checkboxValue = inputTag.value;
                    let checkboxStatus = inputTag.checked ? CONSENT_TRUE : CONSENT_FALSE;
                    let checkboxID = inputTag.getAttribute('id');
                    let correctedCheckboxID = this._isConsentPermitted(checkboxID);

                    // Handle the scenarios only when checkbox is checked
                    if (inputTag.checked) {
                        // Global Optin Checkbox - Set globoal newsletter, goptin flag and dtm object
                        if ((correctedCheckboxID === GLOBAL_MKTG_CONSENT) || (checkboxName === 'goptin')) {

                            this._setFormDataProperty(GLOBAL_OPTIN, 'TRUE');
                            this._setFormDataProperty(NEWSLETTER_ID, WMX_ID); // set WMX newsletter id
                            this.dtmObj.goptin = WMX_ID;
                            if (checkboxValue) {
                                this._setFormDataProperty(NEWSLETTER_ID, checkboxValue); // set Global newsletter id
                                this.dtmObj.goptin += `,${checkboxValue}`;
                            }
                        } else if (checkboxName !== NEWSLETTER_ID && checkboxValue) { // Non-Global Optin checkboxes, skip Artist Newsletter

                            this._setFormDataProperty(checkboxName, checkboxValue);
                            if (correctedCheckboxID === MOBILE_MKTG_CONSENT) {
                                this.dispatchEventsList.push(EVENT_SMSSignUp);
                            }
                        }
                    }

                    // Handle the Consent Checkbox irrespective of it's checked status

                    // Consent Checkbox with Text inside Label with valid ID and ID matching label-for. Artist Newsletter ID in checkbox handled here.
                    if (correctedCheckboxID) {

                        let consent = this.currentForm.querySelector(`label[for="${checkboxID}"]`);
                        if (correctedCheckboxID === ARTIST_MKTG_CONSENT && checkboxName === NEWSLETTER_ID && checkboxValue) {

                            let temp = {};
                            temp[NEWSLETTER_ID] = checkboxValue;
                            if (consent !== null) {
                                temp[correctedCheckboxID] = checkboxStatus;
                                temp[correctedCheckboxID + CONSENT_TXT_SUFFIX] = this._cleanUp(consent);
                                temp[PRIVACY_POLICY_URL] = this._setPrivacyUrlFromConsent(consent);
                            }
                            this.ARTISTS_LIST.push(Object.assign({}, temp));
                        } else {
                            if (consent !== null) {
                                this._setFormDataProperty(correctedCheckboxID, checkboxStatus);
                                this._setFormDataProperty(correctedCheckboxID + CONSENT_TXT_SUFFIX, this._cleanUp(consent));
                                if (![MOBILE_MKTG_CONSENT].includes(correctedCheckboxID)) {
                                    this._setPrivacyUrlFromConsent(consent);
                                }
                            }
                        }
                    }

                    // Handle global optin text for existing sites
                    // Assumption name=goptin checkbox is followed by label tag with consent text
                    // Exclude goptin with valid ID, to prevent from getting processed twice
                    if ((checkboxName === 'goptin' || inputTag.classList.contains('global-list-checkbox')) && !correctedCheckboxID && inputTag.nextElementSibling !== null) {
                        let consent = inputTag.nextElementSibling;
                        let consentTxt = this._cleanUp(consent);
                        if (this._isConsentTextValid(consentTxt, CDC.SNIPPET_GLOBAL_MKTG)) {
                            this._setPrivacyUrlFromConsent(consent);
                            this._setFormDataProperty(GLOBAL_MKTG_CONSENT, checkboxStatus);
                            this._setFormDataProperty(GLOBAL_MKTG_CONSENT + CONSENT_TXT_SUFFIX, consentTxt);
                        }
                    }
                }
            });
            let terms_selectors = ['#terms > :not(a.terms)', ':not(a).terms > :not(a.terms)', '.terms-view', '.termsContent', '.termsWrapper'];    // Order is important
            [...terms_selectors.map(ts => ts + ' p'), ...terms_selectors].forEach((selector) => {
                [...this.formParent.querySelectorAll(selector)].forEach((consent) => {
                    this._setDropDownTerms(consent);
                });
            });

            if (this._isCurrentFormStepOne()) {
                this.dtmObj.nListId = this._getFormDataProperty(NEWSLETTER_ID);
                this.dtmObj.dataSource = this._getFormDataProperty(DATASOURCE);
                this._setFormDataProperty('adobe_ecid', '' + s.visitor.getMarketingCloudVisitorID());
            }
            this._setFormDataProperty('jsonp', 'mlcallback');
            this._setFormDataProperty(REF_URL, encodeURIComponent(window.location.href));
        }

        // Get Form Data property
        _getFormDataProperty(key) {
            return this.formData[key];
        }

        // Setting the Form Data object properties
        _setFormDataProperty(key, value) {

            if ([AGE_CONFIRM, SWEEPS_TERMS_CONFIRM].includes(key)) {
                this.formData[key + AGESWEEPS_CHKBOX_SUFFIX] = value;
            } else if (key === NEWSLETTER_ID) {   // Artist ID in hidden field; Global ID in hidden field or checkbox
                this.formData[key] = this.formData[key] === undefined ? value : `${this.formData[key]},${value}`;
            } else {
                this.formData[key] = value;
            }
        }

        // Check if current form is step one (i.e. in case of 2 step submission)
        _isCurrentFormStepOne() {
            return (this.currentForm.id === 'mlistFormOne' || this.currentForm.classList.contains('mlistFormOne'));
        }

        // Validates checkbox ID
        _isConsentPermitted(checkboxID) {
            let r = false;
            if (checkboxID) {
                CDC.CONSENTS_PERMITTED.forEach((cp) => {
                    if ((checkboxID === cp) || (checkboxID.indexOf(cp) === 0 && !isNaN(checkboxID.replace(cp + '_', '')))) {
                        r = cp;
                    }
                });
            }
            return r;
        }

        // Validates consent text
        _isConsentTextValid(text, snippets) {
            let t = text.replace(/\s/g, '').toLowerCase();
            let ss = [...snippets].map(s => s.replace(/\s/g, '').toLowerCase());
            return true || (ss.filter(s => t.indexOf(s) > -1).length > 0);
        }

        // Cleans up consent text 
        _cleanUp(e) {
            return !e ? '' : e.innerText.replace(/^\s+|\s+$/gm, ' ').trim();
        }

        _appendParamsToURL(params) {

            let usp = new URLSearchParams(window.location.search);
            for (const key in params) {
                if (Object.hasOwn(params, key)) {
                    usp.append(key, params[key]);
                }
            }
            return `${window.location.origin}${window.location.pathname}${usp.size > 0 ? '?' : ''}${usp.toString()}${window.location.hash}`;
        }

        // Convert Form Data to Query Params
        _formDataToQueryParams(formData) {

            let paramList = [];
            for (const i in formData) {
                if (Object.hasOwn(formData, i)) {
                    paramList.push(`${i}=${formData[i]}`);
                }
            }
            return paramList.join('&');
        }

        // Sets the privacy url from the consent
        _setPrivacyUrlFromConsent(consent) {

            let pp_link;
            if (this._isCurrentFormStepOne() || true) {

                [...consent.querySelectorAll('a')].some((a) => {
                    let href = a.getAttribute('href') ? a.getAttribute('href') : '';
                    privacyUrlPattern.some((pattern) => {
                        if (href.indexOf(pattern) > -1) {
                            pp_link = href;
                            if (this._getFormDataProperty(PRIVACY_POLICY_URL) === undefined)
                                this._setFormDataProperty(PRIVACY_POLICY_URL, href);
                            return true;
                        } else
                            return false;
                    });
                });
            }
            return pp_link;
        }

        // Terms Dropdown
        _setDropDownTerms(consent) {

            let consentTxt = this._cleanUp(consent);
            if (!consent.querySelector('input[type=checkbox]') && this._isConsentTextValid(consentTxt, CDC.SNIPPET_ARTIST_MKTG)) {
                if (this._isCurrentFormStepOne()) {
                    this._setFormDataProperty(ARTIST_MKTG_CONSENT, CONSENT_TRUE);
                    this._setFormDataProperty(ARTIST_MKTG_CONSENT + CONSENT_TXT_SUFFIX, consentTxt.replace(/^(x|X)|(x|X)$/g, ''));
                }
                this._setPrivacyUrlFromConsent(consent);
            }
        }

        // Form Validation
        validateForm() {

            let fv = new FormValidator(this.currentForm);
            let submit = this.currentForm.querySelector('input[type=submit]');
            if (fv.checkForm() && submit) {
                submit.style.pointerEvents = 'none';
                submit.disabled = true;
                return true;
            }
            return false;
        }

        preSubmitForm() {

            // Multiple artist signup not supported in CIP
            if (this.ARTISTS_LIST.length > 1 && CDC.CIP_SUBMISSION_METHOD !== 'nocors') {
                CDC.CIP_SUBMISSION = false;
            }

            // Exclude subcommunity id in absence of community id
            if (Object.hasOwn(this.formData, SUBCOMMUNITY) && !Object.hasOwn(this.formData, COMMUNITY)) {
                delete this.formData[SUBCOMMUNITY];
            }

            let args = [];
            if (this.ARTISTS_LIST.filter(a => a[ARTIST_MKTG_CONSENT] === CONSENT_TRUE).length === 0) {

                args.push({ formData: this.formData, callback: this._signupFormCallback.bind(this) });
            } else {

                this.ARTISTS_LIST.filter(a => a[ARTIST_MKTG_CONSENT] === CONSENT_TRUE).forEach((obj, index) => {
                    let formDataCopy = Object.assign({}, this.formData);
                    for (const i in obj) {
                        if (i === NEWSLETTER_ID && formDataCopy[i]) {
                            formDataCopy[i] += `,${obj[i]}`;
                        } else {
                            formDataCopy[i] = obj[i];
                        }
                    }
                    // Append Artist Newsletter IDs to DTM object
                    if (this.dtmObj.nListId !== undefined && obj[NEWSLETTER_ID] !== undefined && this._isCurrentFormStepOne()) {
                        this.dtmObj.nListId += `,${obj[NEWSLETTER_ID]}`;
                    }
                    let cb = index === 0 ? this._signupFormCallback.bind(this) : this._signupFormCallback_dummy.bind(this);
                    args.push({ formData: formDataCopy, callback: cb });
                });
            }

            this.dispatchEventsList.forEach(e => document.dispatchEvent(new CustomEvent(e)));
            this.dispatchEventsList = [];

            return args;
        }

        submitForm(args) {

            CDC.MailingListFormThis = this;

            if (CDC.CIP_SUBMISSION) {

                console.table(sortObject(args.formData));
                printSubmissionSummary(args.formData);

                if (CDC.CIP_SUBMISSION_METHOD === 'nocors') {

                    fetch(
                        CIP_SIGNUP_URL,
                        {
                            method: 'POST',
                            mode: 'no-cors',
                            body: args.formData,
                        }
                    )
                        .then(r => {
                            console.info('Form has been submitted to CIP');
                            args.callback({ response: { status: 'success' } });
                        })
                        .catch(e => {
                            console.error('Form is not submitted to CIP due to some error.');
                            args.callback({ response: { status: 'error' } });
                        });

                } else {

                    if (CDC.CIP_SUBMISSION_METHOD === 'samewindow') {
                        args.formData[CIP_FORM_INDEX_PARAM_KEY] = [...document.querySelectorAll('form')].indexOf(this.currentForm);
                        args.formData[CIP_FORM_SUCCESSURL] = this._appendParamsToURL({ [CIP_RESULT_PARAM_KEY]: CIP_RESULT_SUCCESS_PARAM_VALUE, [CIP_DATA_PARAM_KEY]: encodeURIComponent(JSON.stringify(args.formData)) });
                        args.formData[CIP_FORM_FAILURL] = this._appendParamsToURL({ [CIP_RESULT_PARAM_KEY]: CIP_RESULT_FAIL_PARAM_VALUE, [CIP_DATA_PARAM_KEY]: encodeURIComponent(JSON.stringify(args.formData)) });
                    }

                    const form = document.createElement('form');
                    form.setAttribute('action', CIP_SIGNUP_URL);
                    form.setAttribute('method', 'POST');
                    form.setAttribute('target', CDC.cipSubmissionMethod);

                    const createHiddenInput = (name, value) => {
                        let input = document.createElement('input');
                        input.setAttribute('type', 'hidden');
                        input.setAttribute('name', name);
                        input.setAttribute('value', value);
                        form.append(input);
                    };

                    for (const key in args.formData) {
                        if (Object.hasOwn(args.formData, key)) {
                            createHiddenInput(key, args.formData[key]);
                        }
                    }

                    document.body.append(form);
                    form.submit();
                    form.remove();
                }

            } else {
                printSubmissionSummary(args.formData);
                fetch(
                    SIGNUP_URL,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: this._formDataToQueryParams(args.formData)
                    }
                )
                    .then((r) => r.text())
                    .then((data) => {
                        let resp = JSON.parse(data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1));
                        args.callback({ response: resp });
                        console.log(`Subscribed Lists: ${resp.lists}`)
                    })
                    .catch((e) => args.callback({ response: e }));
            }
        }

        _signupFormCallback(args) {

            if (args.response.status === 'success') {
                if (this.formParentParent) {
                    this.secondFormEmail = this.formParentParent.querySelector('#mlistFormTwo #secondFormEmail') || this.formParentParent.querySelector('.mlistFormTwo .secondFormEmail');
                    this.secondFormName = this.formParentParent.querySelector('#secondform #name') || this.formParentParent.querySelector('.secondform .name');
                    this.secondForm = this.formParentParent.querySelector('#secondform') || this.formParentParent.querySelector('.secondform');
                    this.secondFormClose = this.formParentParent.querySelector('#secondform #secondFormClose') || this.formParentParent.querySelector('.secondform .secondFormClose');
                    this.thankyouBlk = this.formParentParent.querySelector('#thankyou') || this.formParentParent.querySelector('.thankyou');
                }
                if (this.secondFormClose) {
                    this.secondFormClose.addEventListener('click', this._closeSecondForm.bind(this), false);
                }

                let dtmText = 'firstFormSubmit';
                if (this._isCurrentFormStepOne()) {

                    this.currentForm.classList.add(classFadeOut);
                    if (this.formOneSuccessFnFlag && typeof window[this.formOneSuccessFnName] === 'function')
                        window[this.formOneSuccessFnName]();

                    if (this.secondFormName)
                        this.secondFormName.innerText = this._getFormDataProperty(EMAIL).split('@')[0];

                    if (this.currentForm.previousElementSibling)
                        this.currentForm.previousElementSibling.classList.add(classFadeOut);

                    if (this.currentForm.nextElementSibling)
                        this.currentForm.nextElementSibling.classList.add(classFadeOut);

                    if (this.currentForm.classList.contains('singleform') && this.thankyouBlk) {
                        this.thankyouBlk.classList.add(classFadeIn);
                    } else {
                        if (this.secondFormEmail && this.secondForm) {
                            this.secondFormEmail.value = this._getFormDataProperty(EMAIL);
                            this.secondForm.classList.remove(classFadeOut);
                            this.secondForm.classList.add(classFadeIn);
                        }
                    }
                } else {

                    if (this.formTwosuccessFnFlag && typeof window[this.formTwoSuccessFnName] === 'function')
                        window[this.formTwoSuccessFnName]();
                    dtmText = this.dtmObj.goptin ? 'labelSubscription' : 'noLabelSubscription';
                    this._closeSecondForm();
                }
                mlistDTM.mailingListDTM(dtmText, this.variant, this.dtmObj, this.customPageName);
            } else {
                if (args.response.status === 'error') {
                    console.error(args.response.message);
                }
                let submit = this.currentForm.querySelector('input[type=submit]');
                if (submit) {
                    submit.style.pointerEvents = 'auto';
                    submit.disabled = false;
                }
            }
        }

        // dummy callback for additional artists signup
        _signupFormCallback_dummy(args) {
            if (args.response.status === 'success') {
                console.log(args.response.lists);
            } else {
                console.error('Artist signup failed');
                if (args.response.status === 'error')
                    console.error(args.response.message);
            }
        }

        _closeSecondForm() {
            if (this.secondForm && this.thankyouBlk) {
                this.secondForm.classList.remove(classFadeIn);
                this.secondForm.classList.add(classFadeOut);
                this.thankyouBlk.classList.remove(classFadeOut);
                this.thankyouBlk.classList.add(classFadeIn);
            }
        }
    }
    // End of MailingListForm Class

    // Form Validation Class
    class FormValidator {
        constructor(f) {
            this.form = f;
            this.settings = {
                messages: {
                    errored_input_classname: "errored",
                    error_text_classname: "input-error",
                    error_text_data_attribute: "data-error-text"
                },
                patterns: {}
            };
        }
        checkForm(args = {}) {
            if (args.settings_override) {
                this.settings = Object.assign(this.settings, args.settings_override);
            }
            this.resetForm();
            let errorsFound = false;
            let requiredFields = this.form.querySelectorAll("input[required], textarea[required], select[required],[validate]");
            let emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let urlre = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
            let numberre = /^[0-9]+$/;
            let textre = /.+/;

            [...requiredFields].forEach(field => {

                if ((field.hasAttribute('validate') && field.value.length > 0) || field.hasAttribute('required')) {
                    if (field.type !== 'checkbox' && !field.value) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.type == 'checkbox' && !field.checked) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.dataset.type === 'number' && !numberre.test(field.value)) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.dataset.type === 'email' && !emailre.test(field.value)) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.dataset.type === 'url' && !urlre.test(field.value)) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.dataset.type === 'text' && !textre.test(field.value)) {
                        this.createError(field);
                        errorsFound = true;
                    } else if (field.dataset.pattern) {

                        let regexPatterns = new RegExp(field.dataset.pattern);
                        if (!regexPatterns.test(field.value)) {
                            this.createError(field);
                            errorsFound = true;
                        }
                    }
                }
            });

            // Custom validations
            let mobileField = this.form.querySelector(mobileSelector);
            if (mobileField) {

                if (!mobileField.getAttribute(this.settings.messages.error_text_data_attribute)) {
                    mobileField.setAttribute(this.settings.messages.error_text_data_attribute, 'Please enter a valid mobile number');
                }

                let consent = this.form.querySelector(mobileLeaderIdSelector);
                if (!consent) {
                    console.log('Community checkbox missing on the page');
                    consent = {};
                    consent.checked = true;
                }

                let isValidNumber = (mobileField.getAttribute('is-valid-number') === 'true');
                if (!isValidNumber && (textre.test(mobileField.value) || consent.checked)) {
                    this.createError(mobileField);
                    errorsFound = true;
                }

                if (!consent.checked && textre.test(mobileField.value)) {
                    this.createError(consent);
                    errorsFound = true;
                }
            }
            // End: Custom validations

            return !errorsFound;
        }
        resetForm() {
            [...this.form.querySelectorAll(`.${this.settings.messages.errored_input_classname}`)].forEach(ei => ei.classList.remove(this.settings.messages.errored_input_classname));
            [...this.form.querySelectorAll(`.${this.settings.messages.error_text_classname}`)].forEach(et => et.parentNode.removeChild(et));
        }
        createError(field) {
            field.classList.add(this.settings.messages.errored_input_classname);

            let errorMessageNode = document.createElement("span");
            errorMessageNode.classList.add(this.settings.messages.error_text_classname);
            errorMessageNode.innerText = field.getAttribute(this.settings.messages.error_text_data_attribute) || 'Field is required';

            // Remove existing error msg if any
            [...field.parentNode.querySelectorAll(`.${this.settings.messages.error_text_classname}`)].forEach(et => et.parentNode.removeChild(et));
            // Insert error message directly after the input element
            if (field.type == 'checkbox') {
                field.parentNode.insertBefore(errorMessageNode, field.nextSibling.span);
            }
            else {
                field.parentNode.insertBefore(errorMessageNode, field.nextSibling);
            }
        }
    }
    // End of Form Validation Class

    document.addEventListener('DOMContentLoaded', function () {

        if (CDC.CIP_SUBMISSION_METHOD === 'nocors') {
            CDC.cipSubmissionMethod = 'nocors';
        } else if (CDC.CIP_SUBMISSION_METHOD === 'samewindow') {
            CDC.cipSubmissionMethod = '_self';
        } else if (CDC.CIP_SUBMISSION_METHOD === 'iframe') {
            CDC.cipSubmissionMethod = 'cip_target_iframe';
            let iframe = document.createElement('iframe');
            iframe.setAttribute('name', CDC.cipSubmissionMethod);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '300');
            iframe.setAttribute('style', 'display: none; position: absolute;');
            document.body.append(iframe);
        }
        else {
            CDC.cipSubmissionMethod = 'cip_target_frame';
        }

        // Setup country drop down
        const countrySelectList = [...document.querySelectorAll(countrySelector)];
        countrySelectList.forEach(select => {
            [...select.options].forEach(option => option.remove());
            select.add(new Option('Select a country/region', ''));
            for (const code in countryList) {
                if (Object.hasOwn(countryList, code)) {
                    select.add(new Option(countryList[code], code));
                }
            }
        });

        if (CDC.user_country_first) {
            const userCountryFirst = function (countryCode) {
                if (Object.hasOwn(countryList, countryCode)) {
                    countrySelectList.forEach(select => {
                        if (select.options[1] && select.options[1].value !== countryCode) {
                            select.add(new Option(countryList[countryCode], countryCode), select[1]);
                        }
                    });
                }
            };
            if (CDC.Intl.countryCode !== undefined) userCountryFirst(CDC.Intl.countryCode);
            else CDC.pubSubGeoLocation.subscribe(geo => userCountryFirst(geo.country));
        }

        [...document.querySelectorAll('label[for=country], label[for=Country]')].forEach((c) => {
            c.innerHTML = 'country/region';
        });

        // Mobile Input Country Code

        if (document.querySelector(mobileSelector)) {

            CDC.IP_LOOKUP = true;
            loadExtFile({ htmlTag: 'link', href: PATH_INTLTELINPUT_CSS, rel: 'stylesheet' })
                .then(() => { })
                .catch(error => console.log(error));

            loadExtFile({ htmlTag: 'script', src: PATH_INTLTELINPUT_JS, type: 'text/javascript', async: false })
                .then(() => {

                    const communityCheckboxPresent = Boolean(document.querySelector(mobileLeaderIdSelector));

                    let validateCountry = (c) => communityCheckboxPresent ? c : c || 'US';

                    [...document.querySelectorAll('form')].forEach(f => {
                        let i = null;
                        let m = f.querySelector(mobileSelector);
                        if (m) {
                            i = intlTelInput(m,
                                Object.assign({
                                    initialCountry: 'auto',
                                    geoIpLookup: function (callback) {
                                        if (CDC.Intl.countryCode !== undefined) {
                                            callback(validateCountry(CDC.Intl.countryCode));
                                        } else {
                                            CDC.pubSubGeoLocation.subscribe(geo => {
                                                callback(validateCountry(geo.country));
                                            });
                                        }
                                    },
                                    utilsScript: PATH_INTLTELINPUT_UTILS_JS,
                                    autoPlaceholder: false,
                                    excludeCountries: [...excludedCountriesList1, ...excludedCountriesList2],
                                }, CDC.IntlTelInputOptions || {})
                            );
                        }
                        intlTelInputList.push(i);
                    });
                })
                .catch(error => console.log(error));
        }

        // Start: Community fields - Restricted Countries
        if (document.querySelector(mobileSelector) || document.querySelector(mobileLeaderIdSelector)) {

            modifyCommunityFields({ action: 'hide' });

            let communityCheckboxCallback = function (countryCode) {
                if (countryCode && ![...excludedCountriesList1, ...excludedCountriesList2].includes(countryCode)) {
                    modifyCommunityFields({ action: 'show' });
                    [...document.querySelectorAll(countrySelector)].forEach(countrySelect => {
                        for (let i = countrySelect.length - 1; i >= 0; i--) {
                            if (excludedCountriesList2.includes(countrySelect.options[i].value)) {
                                countrySelect.remove(i);
                            }
                        }
                    });
                } else {
                    modifyCommunityFields({ action: 'remove' });
                }
            };

            if (CDC.Intl.countryCode !== undefined) communityCheckboxCallback(CDC.Intl.countryCode);
            else CDC.pubSubGeoLocation.subscribe(geo => communityCheckboxCallback(geo.country));
        }
        // End: Community fields - Restricted Countries

        if (typeof CDC.geoLookup === 'function') {
            CDC.pubSubGeoLocation.subscribe(CDC.geoLookup);
        }
        if (CDC.IP_LOOKUP || CDC.pubSubGeoLocation.anySubscriptions()) {
            loadExtFile({ htmlTag: 'script', type: 'text/javascript', src: PATH_ONETRUST_GEO, async: true, })
                .then(() => { })
                .catch(() => mailinglistgeo({}));
        }

    });

    window.addEventListener('load', function (event) {

        // Handle CIP callback
        if (CDC.CIP_SUBMISSION) {
            if (CDC.CIP_SUBMISSION_METHOD === 'samewindow') {

                (function () {

                    // handle cip param append issue on error
                    let s = (window.location.search).split('?');
                    let m = s.length > 2 ? decodeURIComponent(s.pop()) : '';

                    const usp = new URLSearchParams(s.join('?'));
                    if (usp.get(CIP_RESULT_PARAM_KEY)) {  // Response is from CIP

                        const cip_data = JSON.parse(decodeURIComponent(usp.get(CIP_DATA_PARAM_KEY)));
                        let tempMailingListForm = new MailingListForm(document.querySelectorAll('form')[cip_data[CIP_FORM_INDEX_PARAM_KEY]]);
                        tempMailingListForm._setFormDataProperty(EMAIL, cip_data.email);

                        if (usp.get(CIP_RESULT_PARAM_KEY) === CIP_RESULT_SUCCESS_PARAM_VALUE) { // CIP Response Success

                            tempMailingListForm._signupFormCallback({ response: { status: 'success' } });
                        } else { // CIP Response Fail

                            tempMailingListForm._signupFormCallback({ response: { status: 'error', message: usp.get('error') || m || 'There was an issue with signup.' } });
                        }

                        usp.delete(CIP_RESULT_PARAM_KEY);
                        usp.delete(CIP_DATA_PARAM_KEY);
                        let cleanedUrl = `${window.location.origin}${window.location.pathname}${usp.size > 0 ? '?' : ''}${usp.toString()}${window.location.hash}`;
                        history.pushState({}, null, cleanedUrl);
                    }
                })();

            } else if (['newwindow', 'iframe'].includes(CDC.CIP_SUBMISSION_METHOD)) {

                const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
                const event_listener = window[eventMethod];
                const messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';

                event_listener(messageEvent, function (msgEvent) {
                    if (msgEvent.origin !== CIP_DOMAIN) {
                        return;
                    }
                    if (msgEvent.data.type === 'error') {
                        CDC.MailingListFormThis._signupFormCallback({ response: { status: 'error', message: msgEvent.data.message } });
                    } else if (msgEvent.data.type === 'success') {
                        CDC.MailingListFormThis._signupFormCallback({ response: { status: 'success', message: msgEvent } });
                    }
                }, false);
            } else if (CDC.CIP_SUBMISSION_METHOD === 'nocors') {
                // callback handled in submitform()
            }
        }

        // Terms show/hide functionality
        [...document.querySelectorAll('.plain-ml-wrapper #terms a.terms, .plain-ml-wrapper .terms a.terms, .plain-ml-wrapper .termsWrapper > div.terms')].forEach((terms) => {
            terms.addEventListener('click', function (event) {
                if (event.target.nextElementSibling) {
                    if (event.target.nextElementSibling.classList.contains(classFadeOut)) {
                        event.target.nextElementSibling.classList.remove(classFadeOut);
                        event.target.nextElementSibling.classList.add(classFadeIn);
                        event.target.innerText = 'Hide';
                    } else {
                        event.target.nextElementSibling.classList.remove(classFadeIn);
                        event.target.nextElementSibling.classList.add(classFadeOut);
                        event.target.innerText = 'Terms';
                    }
                }
            }, false);
        });

        // Setup Mailing List Forms submit event
        [...document.querySelectorAll(formSubmitSelector)].forEach((submit_button) => {

            submit_button.addEventListener('click', function (event) {

                event.preventDefault();

                let mailingListForm = new MailingListForm(event.target.closest('form'));

                mailingListForm.setupForm();
                if (mailingListForm.validateForm()) {
                    mailingListForm.preSubmitForm().forEach(args => {
                        mailingListForm.submitForm(args);
                    });
                } else {
                    mailingListForm = null;
                }
            }, false);
        });

    });

    function loadExtFile(args) {

        return new Promise((resolve, reject) => {
            const element = document.createElement(args.htmlTag);
            element.onload = () => resolve();
            element.onerror = () => reject(new Error(`error loading ${args.src}`));
            delete args.htmlTag;
            Object.assign(element, args);
            document.head.append(element);
        });
    }

    function modifyCommunityFields(args) {

        let fieldsList = [];
        [...document.querySelectorAll(mobileSelector)].forEach(m => {
            fieldsList.push(m);
            let label = document.querySelector(`label[for="${m.getAttribute('id')}"]`);
            if (label) fieldsList.push(label);
            else if (args.action === 'hide') console.warn('Label for mobile field not found');
        });
        [...document.querySelectorAll(mobileLeaderIdSelector)].forEach(m => {
            fieldsList.push(m);
            let label = document.querySelector(`label[for="${m.getAttribute('id')}"]`);
            if (label) fieldsList.push(label);
            else if (args.action === 'hide') console.warn('Label for community checkbox not found');
        });
        if (args.action === 'hide') {
            fieldsList.forEach(r => r.style.visibility = 'hidden');
        } else if (args.action === 'show') {
            fieldsList.forEach(r => r.style.visibility = 'visible');
        } else if (args.action === 'remove') {
            intlTelInputList.forEach(i => { if (i) i.destroy(); });
            fieldsList.forEach(r => r.remove());
        }
    }

    function sortObject(obj) {
        let sortedObj = {};
        let sortedKeys = Object.keys(obj).sort((a, b) => (a.localeCompare(b, undefined, { sensitivity: 'base' })));
        sortedKeys.forEach(k => sortedObj[k] = obj[k]);
        return sortedObj;
    }

    // Console submission summary
    function printSubmissionSummary(paramsObj) {

        const formParamsNonEmpty = Object.keys(paramsObj).filter(k => paramsObj[k]);
        const requiredParams = [EMAIL, NEWSLETTER_ID, _EXT, DATASOURCE, SOURCE, REF_URL, PRIVACY_POLICY_URL];
        const missingRequiredParams = new Set();

        requiredParams.forEach(rp => missingRequiredParams.add(rp));

        requiredParams.forEach(rp => {

            if (formParamsNonEmpty.includes(rp)) {
                missingRequiredParams.delete(rp);
            } else {
                if (formParamsNonEmpty.map(k => k.toLowerCase()).includes(NEWSLETTER_ID.toLowerCase()) || formParamsNonEmpty.map(k => k.toLowerCase()).includes(_EXT.toLowerCase())) {
                    missingRequiredParams.delete(NEWSLETTER_ID);
                    missingRequiredParams.delete(_EXT);
                }
                if (formParamsNonEmpty.map(k => k.toLowerCase()).includes(DATASOURCE.toLowerCase()) || formParamsNonEmpty.map(k => k.toLowerCase()).includes(SOURCE.toLowerCase())) {
                    missingRequiredParams.delete(DATASOURCE);
                    missingRequiredParams.delete(SOURCE);
                }
            }
        });

        Object.keys(paramsObj).forEach(fp => {
            if (fp.toLowerCase() === NEWSLETTER_ID) {
                const artistIds = new Set();
                if (paramsObj[fp]) {
                    paramsObj[fp].split(',').forEach(nid => { if (!nonArtistIds.includes(nid)) artistIds.add(nid); });
                }
                if (artistIds.size > 0) {
                    if (paramsObj[ARTIST_MKTG_CONSENT] !== CONSENT_TRUE) missingRequiredParams.add(ARTIST_MKTG_CONSENT);
                    if (!paramsObj[`${ARTIST_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`]) missingRequiredParams.add(`${ARTIST_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`);
                    if (!paramsObj[PRIVACY_POLICY_URL]) missingRequiredParams.add(PRIVACY_POLICY_URL);
                }
            } else if (fp.toLowerCase() === GLOBAL_OPTIN) {
                if (paramsObj[GLOBAL_MKTG_CONSENT] !== CONSENT_TRUE) {
                    missingRequiredParams.add(GLOBAL_MKTG_CONSENT);
                }
                if (!paramsObj[`${GLOBAL_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`]) {
                    missingRequiredParams.add(`${GLOBAL_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`);
                }
            } else if (fp.toLowerCase() === MOBILE) {
                if (paramsObj[MOBILE_MKTG_CONSENT] === CONSENT_TRUE && !paramsObj[MOBILE]) {
                    missingRequiredParams.add(MOBILE);
                }
                if (paramsObj[MOBILE]) {
                    if (paramsObj[MOBILE_MKTG_CONSENT] !== CONSENT_TRUE) {
                        missingRequiredParams.add(MOBILE_MKTG_CONSENT);
                    }
                    if (!paramsObj[`${MOBILE_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`]) {
                        missingRequiredParams.add(`${MOBILE_MKTG_CONSENT}${CONSENT_TXT_SUFFIX}`);
                    }
                }
            }
        });

        if (missingRequiredParams.size > 0) {
            console.error(`parameters are either incorrect or not sent to CDC - "${[...missingRequiredParams].join(', ')}"`);

        }

        const consents = [...CDC.CONSENTS_PERMITTED].map(c => [AGE_CONFIRM, SWEEPS_TERMS_CONFIRM].includes(c) ? `${c}${AGESWEEPS_CHKBOX_SUFFIX}` : c);
        const consentText = [...CDC.CONSENTS_PERMITTED].map(c => `${c}${CONSENT_TXT_SUFFIX}`);
        console.log('consents agreed by user - ', JSON.stringify(consents.filter(cp => paramsObj[cp] && paramsObj[cp] === CONSENT_TRUE)));
        console.log('consents not agreed by user - ', JSON.stringify(consents.filter(cp => paramsObj[cp] && paramsObj[cp] !== CONSENT_TRUE)));
        console.log('consents & texts not sent in the request - ', JSON.stringify([...consents, ...consentText].sort().filter(cp => !paramsObj[cp])));

    }
})();

// OneTrust geo callback
function mailinglistgeo(geoLocation) {
    CDC.Intl.countryCode = geoLocation.country || '';
    CDC.pubSubGeoLocation.publish(geoLocation || { country: '' });
}
