/*
The following errors were found when attempting to minify this file:
- Line 1699: Parse error. syntax error
- Line 1704: Parse error. syntax error
- Line 1705: Parse error. syntax error
- Line 1706: Parse error. 'try' without 'catch' or 'finally'
- Line 1708: Parse error. syntax error
- Line 1710: Parse error. syntax error
- Line 1712: Parse error. syntax error
- Line 1713: Parse error. missing ; before statement
- Line 1716: Parse error. syntax error
- Line 1718: Parse error. syntax error
- Line 1719: Parse error. syntax error
- Line 1720: Parse error. invalid return
- Line 1721: Parse error. syntax error
- Line 5029: Parse error. illegal character
- Line 5029: Parse error. missing ; before statement
- Line 5029: Parse error. missing ; before statement
- Line 5029: Parse error. unterminated regular expression literal
- Line 5031: Parse error. missing ; before statement
- Line 5032: Parse error. syntax error
- Line 5036: Parse error. syntax error
- Line 5038: Parse error. missing ; before statement
- Line 5041: Parse error. syntax error
- Line 5042: Parse error. syntax error
- Line 5048: Parse error. syntax error
- Line 5050: Parse error. missing ; before statement
- Line 5053: Parse error. syntax error
- Line 5054: Parse error. syntax error
- Line 5060: Parse error. syntax error
- Line 5062: Parse error. missing ; before statement
- Line 5065: Parse error. syntax error
- Line 5066: Parse error. syntax error
- Line 5069: Parse error. syntax error
- Line 5072: Parse error. missing ; before statement
- Line 5078: Parse error. syntax error
- Line 5080: Parse error. missing ; before statement
- Line 5085: Parse error. syntax error
- Line 5087: Parse error. missing ; before statement
- Line 5088: Parse error. missing ; before statement
- Line 5090: Parse error. syntax error
- Line 5092: Parse error. syntax error
- Line 5103: Parse error. invalid return
- Line 5104: Parse error. syntax error
- Line 5107: Parse error. missing ; before statement
- Line 5108: Parse error. syntax error
- Line 5127: Parse error. syntax error
- Line 5129: Parse error. missing ; before statement
- Line 5130: Parse error. missing ; before statement
- Line 5131: Parse error. syntax error
- Line 5132: Parse error. syntax error
- Line 5134: Parse error. missing ; before statement
- Line 5138: Parse error. syntax error
- Line 5144: Parse error. syntax error
- Line 5146: Parse error. missing ; before statement
- Line 5154: Parse error. invalid return
- Line 5180: Parse error. syntax error
- Line 5945: Parse error. missing ; before statement
- Line 5946: Parse error. missing ; before statement
- Line 5947: Parse error. missing ; before statement
- Line 5948: Parse error. missing ; before statement
- Line 5949: Parse error. missing ; before statement
- Line 5950: Parse error. missing ; before statement
- Line 6997: Parse error. missing ; before statement
- Line 7004: Parse error. syntax error
- Line 7027: Parse error. illegal character
- Line 7027: Parse error. illegal character
- Line 7027: Parse error. missing ) after argument list
- Line 7027: Parse error. missing ; before statement
- Line 7027: Parse error. illegal character
- Line 7027: Parse error. syntax error
- Line 7029: Parse error. syntax error
- Line 9483: Parse error. syntax error
- Line 9493: Parse error. missing ) in parenthetical
- Line 9495: Parse error. syntax error
- Line 9498: Parse error. invalid return
- Line 9503: Parse error. invalid return
- Line 9516: Parse error. illegal character
- Line 9516: Parse error. missing ; before statement
- Line 9516: Parse error. illegal character
- Line 9519: Parse error. illegal character
- Line 9519: Parse error. missing ; before statement
- Line 9519: Parse error. illegal character
- Line 9524: Parse error. illegal character
- Line 9524: Parse error. missing ; before statement
- Line 9524: Parse error. illegal character
- Line 9526: Parse error. syntax error
- Line 9528: Parse error. syntax error
- Line 9529: Parse error. missing ; before statement
- Line 9531: Parse error. syntax error
- Line 9533: Parse error. syntax error
- Line 9534: Parse error. missing ; before statement
- Line 9571: Parse error. syntax error
- Line 9573: Parse error. syntax error
- Line 9586: Parse error. invalid return
- Line 9592: Parse error. invalid return
- Line 9606: Parse error. syntax error
- Line 9610: Parse error. invalid return
- Line 9611: Parse error. syntax error
- Line 9614: Parse error. invalid return
- Line 9620: Parse error. invalid return
- Line 9621: Parse error. syntax error
- Line 9623: Parse error. syntax error
- Line 9626: Parse error. invalid return
- Line 9631: Parse error. invalid return
- Line 9636: Parse error. syntax error
- Line 9637: Parse error. missing ; before statement
- Line 9639: Parse error. syntax error
- Line 9641: Parse error. missing ; before statement
- Line 9646: Parse error. syntax error
- Line 9649: Parse error. syntax error
- Line 9660: Parse error. invalid return
- Line 9663: Parse error. syntax error
- Line 9664: Parse error. missing ; before statement
- Line 9665: Parse error. syntax error
- Line 9668: Parse error. syntax error
- Line 9677: Parse error. invalid return
- Line 9678: Parse error. syntax error
- Line 9680: Parse error. syntax error
- Line 9683: Parse error. invalid return
- Line 9687: Parse error. invalid return
- Line 9689: Parse error. syntax error
- Line 9690: Parse error. syntax error
- Line 9691: Parse error. syntax error
- Line 9694: Parse error. syntax error
- Line 9695: Parse error. missing ; before statement
- Line 9698: Parse error. syntax error
- Line 9699: Parse error. syntax error
- Line 9701: Parse error. syntax error
- Line 9702: Parse error. syntax error
- Line 9705: Parse error. syntax error
- Line 9707: Parse error. syntax error
- Line 9709: Parse error. syntax error
- Line 9711: Parse error. syntax error
- Line 9713: Parse error. syntax error
- Line 9716: Parse error. syntax error
- Line 9722: Parse error. syntax error
- Line 9725: Parse error. missing ; before statement
- Line 9726: Parse error. missing ; before statement
- Line 9727: Parse error. syntax error
- Line 9731: Parse error. continue must be inside loop
- Line 9736: Parse error. invalid return
- Line 9737: Parse error. syntax error
- Line 9743: Parse error. syntax error
- Line 9744: Parse error. syntax error
- Line 9745: Parse error. invalid return
- Line 9745: Parse error. illegal character
*/
/// <reference name="MicrosoftAjax.js" />
/// <reference name="Util.js" />
/// <reference path="GlobalJSFunctionsDetail.js" />
/// <reference path="/Scripts/jquery-1.4.4-vsdoc.js"/>

//Callback global variables for Slideshow.
var callbackfnDocumentCenter = null;
var callbackfnSlideshowSave = null;
var $popUp_Slideshow = null;
var parentID_Slideshow = null;
var slideshowFolderDefault = '';
var numbersOnly = new RegExp('^[0-9]*$');
//Global variable for ThemeProperties modal
var $popup_ThemeProperties = null;
//Callback variables for Slideshow.
var SetCursorPosition = null;

// Prevents errors for Internet Explorer (modes prior to 9).
// They will occur unless the developer tools are open.
if (!window.console) {
	var noop = function () { };

	// Note: MSIE will override this once the dev. tools are open.
	window.console = {
		log: noop, clear: noop, warn: noop, error: noop, assert: noop,
		dir: noop, count: noop, profile: noop, profileEnd: noop,
		trace: noop, info: noop, memoryProfile: noop, memoryProfileEnd: noop,
		exception: noop, debug: noop, dirxml: noop, group: noop, groupEnd: noop,
		markTimeline: noop, time: noop, timeEnd: noop, groupCollapsed: noop
	};
}

// User-agent sniffing for functions that rely on the user-agent
// to determine version of Safari. Avoid using this variable and
// check for the presence of features instead (best-practice).
var isWebKit = (navigator.userAgent.toLowerCase().indexOf('webkit') > -1);

// Determines if an array contains an object.
// Uses == equality, case-sensitive. a containsExact() could do === equality.
if (!Array.prototype.contains) {
	Array.prototype.contains = function (item) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == item)
				return true;
		}
		return false;
	}
}

// Gets index of an item if it is present in the array, else returns -1.
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (item) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == item)
				return i;
		}
		return -1;
	}
}

// Implement ECMAScript 5 String.trim() and friends for browsers that
// don't have it (e.g. Firefox prior to 3.5, Internet Explorer 6, 7, 8).
if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+/g, "").replace(/\s+$/g, "");
	}
	String.prototype.trimLeft = function () {
		return this.replace(/^\s+/g, "");
	}
	String.prototype.trimRight = function () {
		return this.replace(/\s+$/g, "");
	}
}

// Implement .NET-style left-padding method.
String.prototype.padLeft = function (desiredLength, paddingChar) {
	paddingChar += '';
	desiredLength = parseInt(desiredLength);

	if (paddingChar.length > 1)
		paddingChar = paddingChar.charAt(0);
	else if (paddingChar.length < 1)
		return this;

	if (this.length >= desiredLength)
		return this;
	else {
		var arr = new Array();
		var padNum = desiredLength - this.length;

		for (var i = 0; i < padNum; i++)
			arr.push(paddingChar);

		return arr.join('') + this;
	}
}

// Implement .NET-style right-padding method.
String.prototype.padRight = function (desiredLength, paddingChar) {
	paddingChar += '';
	desiredLength = parseInt(desiredLength);

	if (paddingChar.length > 1)
		paddingChar = paddingChar.charAt(0);
	else if (paddingChar.length < 1)
		return this;

	if (this.length >= desiredLength)
		return this;
	else {
		var arr = new Array();
		var padNum = desiredLength - this.length;

		for (var i = 0; i < padNum; i++)
			arr.push(paddingChar);

		return this + arr.join('');
	}
}

String.isNullOrEmpty = function (text) {
	return (text == null || text == '');
}

// Adds static method to regular expressions that escapes meta-characters.
if (!RegExp.metaEscape) {
	RegExp.metaEscape = function (text) {
		if (text == null)
			return null;
		else if (typeof (text) != "string")
			text += '';

		return text.replace(/(\\|\/|\<|\>|\:|\.|\*|\+|\?|\$|\[|\]|\(|\)|\{|\}|\||\&)/g, '\\$1');
	};
}

// Copies text data to clipboard in WebKit browsers (Chrome/Safari).
function toWebkitClipboard(text) {
	// Create element in DOM with text to copy.
	var tmp = document.createElement('div');
	tmp.textContent = text;
	document.body.appendChild(tmp);

	// Get current user selection, and remove selection current ranges.
	var curSelection = window.getSelection();
	curSelection.removeAllRanges();

	// Create new selection range with DOM element containing text to copy.
	var textRange = document.createRange();
	textRange.selectNode(tmp);
	curSelection.addRange(textRange);

	// Execute COPY DHTML command.
	document.execCommand("Copy");

	// Clean-up.
	document.body.removeChild(tmp);
}

// Copies value in stringVal to the clipboard, displaying the successMessage if hideAlert is false.
// NOTE: Replace this with something like toWebkitClipboard() at some point.
function toClipboardEx(stringVal, hideAlert, successMessage) {
	if (window.clipboardData) {		// Internet Explorer
		if (!window.clipboardData.setData("Text", stringVal) && !hideAlert)
			hideAlert = true;
	}
	else if ((window.WebKitPoint || !window.netscape) && !window.opera) {
		toWebkitClipboard(stringVal);
	}
	else if (window.netscape) {	// Mozilla Firefox and derivitives (Netscape, Seamonkey)...
		try {
			// Request full access to the XPCOM (Cross-Platform COM) API.
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		}
		catch (e) {
			// Unable to obtain access, user rejected or setting in about:config not set right.
			alert('Please type "about:config" in your browser and press enter. Type "signed.applets.codebase_principal_support" in Filter. Double click to change the value to "true". Then come back and click on the link again.\n\nIf you have already performed this action, make sure when you are asked whether to allow or deny the browser permission, that you are allowing it.');
			return;
		}

		// Create an instance of the clipboard class.
		var clipBoard = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

		// Create an instance of the Transferable class (used to talk to the clipboard).
		var clipTrans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

		// Set clipboard format for text only.
		clipTrans.addDataFlavor('text/unicode');

		// Create XPCOM string, set data to copy of stringVal.
		var clipString = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copyText = stringVal;
		clipString.data = copyText;

		// Note: This code may be bugged in some scenarios! 1 char does not always equal 2 bytes in UTF-16!
		// Set data to transfer to the clipboard (length * 2, since 1 char is usually 2 bytes in UTF-16).
		clipTrans.setTransferData("text/unicode", clipString, copyText.length * 2);

		// Transfer data to the global clipboard.
		clipBoard.setData(clipTrans, null, clipBoard.kGlobalClipboard);
	}

	if (!hideAlert)
		alert(successMessage);

	return true;
}

function toClipboard(stringVal, hideAlert) {
	return toClipboardEx(stringVal, hideAlert, "The link has been copied to your clipboard.");
}

function getClipboard() {
	if (window.clipboardData) {
		return window.clipboardData.getData('Text');
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
		}
		catch (e) {
			alert('Please type "about:config" in your browser and press enter. Type "signed.applets.codebase_principal_support" in Filter. Double click to change the value to "true". Then come back and click on the link again.\n\nIf you have already performed this action, make sure when you are asked whether to allow or deny the browser permission, that you are allowing it.');
			return;
		}

		// Create instances of the Clipboard and Transferable objects.
		var clipBoard = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		var clipTrans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);

		// Get data from global clipboard, place in clipTrans object.
		clipTrans.addDataFlavor('text/unicode');
		clipBoard.getData(clipTrans, clipBoard.kGlobalClipboard);

		// Create objects to pass to getTransferData, which uses XPCOM String
		// and Integer classes instead of those normally used by JavaScript.
		var objStr = new Object(); var objNumBytes = new Object();
		try {
			clipTrans.getTransferData('text/unicode', objStr, objNumBytes);
		}
		catch (error) {
			return '';
		}

		// Query whichever interface is available, opting to use nsISupportsWString.
		if (objStr) {
			if (Components.interfaces.nsISupportsWString)
				objStr = objStr.value.QueryInterface(Components.interfaces.nsISupportsWString);
			else if (Components.interfaces.nsISupportsString)
				objStr = objStr.value.QueryInterface(Components.interfaces.nsISupportsString);
			else
				objStr = null;
		}

		// Note: This code may be bugged in some scenarios! 1 char does not always equal 2 bytes in UTF-16!
		// Get data out of the XPCOM string and into a normal JS string.
		if (objStr)
			return (objStr.data.substring(0, objNumBytes.value / 2));
	}
	return;
}

// Gets the computed style of an element (browser-independent).
var getCurrentStyle = (document.defaultView ?
	function (elem) {
		return document.defaultView.getComputedStyle(elem, '');
	} :
	function (elem) {
		return elem.currentStyle;
	}
);

// Gets children nodes of an HTML DOM element matching the tag name specified.
function getChildNodesByTag(domElement, tagName) {
	var cn = domElement.childNodes;
	var nodesPresent = 0, retVal = new Array();
	retVal.length = cn.length;

	tagName = tagName.toUpperCase();
	for (var cv = 0; cv < cn.length; cv++) {
		if (cn[cv].nodeType == 1 && cn[cv].nodeName == tagName)
			retVal[nodesPresent++] = cn[cv];
	}

	return retVal.slice(0, nodesPresent);
}

// Returns true on Safari browsers 1.3.4 and older (bad date object behavior in old Safari).
// Check does not work properly if user-agent has been modified by user.
var isSafariVersion13OrOlder = (isWebKit ?
	function () {
		var navAppVersion = navigator.appVersion;
		var phraseToFind = 'AppleWebKit/';
		var foundStartAt = navAppVersion.indexOf(phraseToFind) + phraseToFind.length;
		var foundEndAt = navAppVersion.indexOf(' ', foundStartAt + 1);
		return (parseInt(navAppVersion.substring(foundStartAt, foundEndAt)) < 320);
	} :
	function () {
		return false;
	}
);

// Returns true on Safari browsers 2.0.4 and older (textbox/button not stylable before 3.x).
// Check does not work properly if user-agent has been modified by user.
var isSafariVersion20OrOlder = (isWebKit ?
	function () {
		var navAppVersion = navigator.appVersion;
		var phraseToFind = 'AppleWebKit/';
		var foundStartAt = navAppVersion.indexOf(phraseToFind) + phraseToFind.length;
		var foundEndAt = navAppVersion.indexOf(' ', foundStartAt + 1);
		return (parseInt(navAppVersion.substring(foundStartAt, foundEndAt)) < 525);
	} :
	function () {
		return false;
	}
);

// Returns true if an event fired too soon after another event.
// Mechanism used on older Safari browsers to prevent
// double-fire problems (especially with key presses).
function safariEventRateLimitBlock() {
	if (isWebKit && isSafariVersion13OrOlder()) {
		if (safariRateLimited != 0)
			return true;
		else {
			safariRateLimited = setTimeout('safariRateLimited = 0;', 10);
			return false;
		}
	}
}

// Get coordinates relative to document (works out container issues).
// Wrote this so it works in quirks or standards mode.
function getDocumentCoordinates(element) {
	var htmlElem = document.body.parentNode;
	var bodyElem = document.body;
	var pos = { "x": 0, "y": 0 };
	pos.toString = function () { return this.x + ', ' + this.y; }
	while (element != null) {
		pos.x += element.offsetLeft;
		pos.y += element.offsetTop;
		switch (element.offsetParent) {
			case htmlElem:
			case bodyElem:
			case null:
				return pos;
		}
		element = element.offsetParent;
	}
}

// Attach an event handler to an object (browser-independent).
// First clause is W3C DOM method, second is DHTML (IE).
var addEvent = (window.addEventListener ?
	function (obj, evType, fn, useCapture) {
		try {
			obj.addEventListener(evType, fn, useCapture);
		} catch (e) { }
		return true;
	} :
	function (obj, evType, fn, useCapture) {
		try {
			return obj.attachEvent('on' + evType, fn);
		} catch (e) { }
	}
);

// Release an event handler from an object (browser-independent).
// First clause is W3C DOM method, second is DHTML (IE).
var removeEvent = (window.removeEventListener ?
	function (obj, evType, fn, useCapture) {
		try {
			obj.removeEventListener(evType, fn, useCapture);
		} catch (e) { }
		return true;
	} :
	function (obj, evType, fn, useCapture) {
		try {
			obj.detachEvent('on' + evType, fn);
		} catch (e) { }
		return true;
	}
);

// Stops a DOM event from propagating further than the current handler.
// Note: Returning false from event handlers in IE 6/7/8 does the same thing.
function stopEventPropagation(evObj) {
	if (evObj.preventDefault)
		evObj.preventDefault();

	// Calling cancelButton after stopPropagation
	// may negate the stopPropagation so do not do it. -KB
	if (evObj.stopPropagation)
		evObj.stopPropagation();
	else if (evObj.cancelBubble)
		evObj.cancelBubble();
}

// These functions assists in obscuring email addresses:
function mailTo(obj) {
	//alert('mailto:'+eval(obj.getAttribute('id')));
	obj.setAttribute('href', 'mailto:' + eval(obj.getAttribute('id')));
}

function js_mail(obj, Emails) {
	var mail_link = Emails[0];
	for (var email = 1; email < Emails.length; email++)
		if (Emails[email] != null && Emails[email] != '' && Emails[email].substr(1, 4) != 'href') mail_link = mail_link + Emails[email];

	obj.setAttribute('href', 'mailto:' + mail_link);
}

// Used to prevent right-click menu from appearing for some clients that wanted this ability.
function antiContextMenuHook() {
	// Note: Opera is not hookable.
	var showAlert = function () { alert('All images are protected by Copyright. Do not use without permission.'); }
	var mdClick = function (e) {
		if (!document.all) {
			if (e.button == 2 || e.button == 3)
				showAlert();
		}
		else if (event && event.button == 2)
			showAlert();
	}
	var cmClick = function (e) {
		if (navigator.userAgent.toLowerCase().indexOf('khtml') > -1) {
			// Safari, Konquerer
			if (e.preventDefault)
				e.preventDefault();
			showAlert();
		}
		if (e.stopPropagation)
			e.stopPropagation(); // Mozilla Firefox 2.0
		return false; // IE 6.0 and 7.0
	}
	document.onmousedown = mdClick;
	document.oncontextmenu = cmClick;
}

// Form validation functions:
function RegExValidate(expression, value, param) {
    var re = new RegExp(expression, param);
    if (value != '' && value != undefined) {
        if (value.match(re)) return true;
        else return false;
    }
    else return true;
}

// Used for validating emailaddress for special scenarios like continuous periods. - VB
function checkSpecialScenarios(s) {
    var bugchars = '!#$^&*()|}{[]?><~%:;/,=`"'; 
	var i;
	var lchar = "";
	// Search through string's characters one by one.
	// If character is not in bag.
	for (i = 0; i < s.length; i++) {
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (i > 0) lchar = s.charAt(i - 1)
		if (bugchars.indexOf(c) != -1 || (lchar == "." && c == ".")) return false;
	}
	return true;
}

// JavaScript version of CivicPlus.CMS.Site.Validation.IsValidEmailAddress();
function emailValidate(emailAddress) {
	var emailAddressTrimmed = TrimString(emailAddress + "");
	if (emailAddressTrimmed != "") {
		if (checkSpecialScenarios(emailAddressTrimmed) == false)
			return false;
		if (emailAddressTrimmed.replace(/[^@]/g, '').length > 1)
			return false;
		var parts = emailAddressTrimmed.splitRemoveEmpties('@');
		if (emailAddressTrimmed.substr(emailAddressTrimmed.length - 1) == '@')
			return false;
		if (parts.length == 2) {
			for (var i = 0; i < parts.length; i++) {
				if (((!RegExValidate('^[A-Z0-9]$', parts[i].substr(0, 1), 'i') || !RegExValidate('^[A-Z0-9]$', parts[i].substr(parts[i].length - 1), 'i')) && i == 1) || (!RegExValidate('^[A-Z0-9_%-\\.]+$', parts[i].substr(0, parts[i].length - 1), 'i')))
					return false;
			}
			var lastDotPos = parts[1].lastIndexOf('.');
			if (lastDotPos < 0 || parts[1].substr(lastDotPos).length < 3 || (!RegExValidate('^[A-Z]+$', parts[1].substr(lastDotPos + 1), 'i')))
				return false;
			else
				return true;
		}
		else
			return false;
	}
	else
		return false;
}

// Returns: 0 - success, 1 - illegal value, 2 - too large, 3 - too small, 4 - blank.
function intValidateWithRange(value, min, max) {
	if (value == '' || value == null) return 4;
	if (RegExValidate('^(-|)[0-9]*$', value, 'i')) {
		try { var pint = parseInt(value); } catch (ex) { return 1; }
		if (pint < min) return 3; else if (pint > max) return 2; return 0;
	} else
		return 1;
}

// Split function that remotes empty entries.
String.prototype.splitRemoveEmpties = function (separator, howmany) {
	var splitArr;
	var returnArr = new Array();

	if (arguments.length == 2)
		splitArr = this.split(separator, howmany);
	else
		splitArr = this.split(separator);

	for (var i = 0; i < splitArr.length; i++) {
		if (splitArr[i] != '')
			returnArr.push(splitArr[i]);
	}

	return returnArr;
}

// JavaScript equivalent of a function in GlobalFunctionsDetail.aspx.
// Do not use this function unless you have a good reason (e.g. textarea length on client must match size on server).
// KNOWN: Does not do entities properly, matches server behavior (where's the semi-colon?).
function SQLSafe(strInput) {
	return strInput.replace(/\'/g, "&#39").replace(/\"/g, "&#34");
}

// Returns true if the string is empty. Will blow up on NULLs.
function FieldIsEmpty(strInput) {
	if (strInput == undefined)
		return true;
	return TrimString(strInput).length == 0;
}

// Removes leading and trailing white space from a string. Will blow up on NULLs.
function TrimString(strInput) {
	return strInput.replace(/^\s+/g, "").replace(/\s+$/g, "");
}

// Returns true if the value is an integer value.
function isInteger(strInput) {
	var leadingZeros = calculateLeadingZeroStrings(strInput);

	return leadingZeros == strInput || (strInput == leadingZeros + parseInt(strInput).toString());
}

// Returns true if the value is a real number.
function isRealNumber(strInput) {
	var leadingZeros = calculateLeadingZeroStrings(strInput);

	return leadingZeros == strInput || (strInput == leadingZeros + parseFloat(strInput));
}

function calculateLeadingZeroStrings(strInput) {
	var leadingZeros = "";

	if (strInput != null) {
	for (var i = 0; i < strInput.length; i++) {
		if (strInput[i] == "0") {
			leadingZeros += "0";
		}
		else {
			break;
		}
	}
	}

	return leadingZeros;
}

// Date validator class.
function dateValidator() {
	this.firstValidDate = new Date('01/01/1753');
	this.lastValidDate = new Date('01/01/3000');
	this.strStartDateID = 'Start/Begin Date';
	this.strEndDateID = 'End/Stop/Expiration Date';
	this.strStartTimeID = 'Start Time';
	this.strEndTimeID = 'End Time';
	this.ysnRequireStartDateIfEndSpecified = false;
	this.ysnStartDateRequired = false;
	this.ysnEndDateRequired = false;
	this.ysnStartTimeRequired = false;
	this.ysnEndTimeRequired = false;
	this.ysnAllowEqualDates = false;
	this.ysnAllowTimeOnly = false;
	this.ysnCent = false; //Allow only four digit years
	var dtiEndDate;
	var dtiStartDate;
	var dtiStartTime;
	var dtiEndTime;
	this.timesAlreadyValidated = false;
	this.datesAlreadyValidated = false;

	this.setStartDate = function (date) {
		dtiStartDate = this.cleanDate(date);
	}

	this.setEndDate = function (date) {
		dtiEndDate = this.cleanDate(date);
	}

	this.setStartDateRequired = function (required) {
		this.ysnStartDateRequired = required;
	}

	this.setEndDateRequired = function (required) {
		this.ysnEndDateRequired = required;
	}

	this.setRequireStartDateIfEndSpecified = function (required) {
		this.ysnRequireStartDateIfEndSpecified = required;
	}

	this.cleanDate = function (date) {
		if (date) {
			if (typeof isMobileView != 'undefined' && isMobileView) {
				date = this.ChangeDateFormatForMobileView(date);
			}
			else if (RegExValidate('^([0-9\-\\\/]*?)([0-9]{2,4})$', date, 'i')) {
				var year = RegExp.$2;
				if (year.length == 2) {
					if (year >= 50) date = RegExp.$1 + "19" + year;
					else date = RegExp.$1 + "20" + year;
				}
				date = date.replace('\-', '/', 'g');
			}
		}
		return date;
	}

	this.ChangeDateFormatForMobileView = function (date) {
		var rxDatePattern = /^\d{4}\-\d{1,2}\-\d{1,2}$/; //Regex for yyyy-mm-dd format
		var match = date.match(rxDatePattern);
		if (match != null) {
			var dateArray = date.split('-');
			var dateFormat = getDateFormat().toLowerCase();
			if (dateFormat == "mm/dd/yyyy")
				date = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
			else if (dateFormat == "dd/mm/yyyy")
				date = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
		}
		return date;
	}

	this.dateValidate = function (dtiDate, ysnRequired, strID) {
		if (!ysnRequired && (dtiDate == null || dtiDate == '')) return true;
		else if (ysnRequired && (dtiDate == null || dtiDate == '')) {
			if (strID) this.error = strID + ' cannot be blank.';
			else this.error = ' cannot be blank';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^(1[0-2]|0?[1-9])(\/|\-)(0?[1-9]|[1-2][0-9]|3[0-1])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i')) {
			var month = RegExp.$1;
			var day = RegExp.$3;
			var year = RegExp.$4;

			if (year.length == 2 && this.ysnCent == true) {
				if (strID) this.error = strID + ' requires a four digit year';
				else this.error = 'Please use a four digit year';
				return false;
			}
			if (year.length == 4 && (year > 3000 || year < 1753)) {
				this.error = dtiDate + '\nis outside of the date range.';
				this.errorNumber = 2;
				return false;
			}
			if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
				this.error = 'This month doesn\'t have 31 days';
				this.errorNumber = 3;
				return false;
			}
			if (day >= 30 && month == 2) {
				this.error = 'February doesn\'t have ' + day + ' days';
				this.errorNumber = 4;
				return false;
			}
			if (month == 2 && day == 29 && !(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
				this.error = 'This is not a leap year\nFebruary doesn\'t have 29 days.';
				this.errorNumber = 5;
				return false;
			}
			return true;
		} else {
			if (strID) this.error = strID + ' is not a valid date format.\nPlease use ' + getDateFormat().toUpperCase() + '.';
			else this.error = dtiDate + '\n is an invalid date format.\nPlease use ' + getDateFormat().toUpperCase() + '.';
			this.errorNumber = 6;
			return false;
		}
		return false;
	}

	this.dateOrderValidate = function () {
		if (this.dateValidate(dtiStartDate, this.ysnStartDateRequired, this.strStartDateID) && this.dateValidate(dtiEndDate, this.ysnEndDateRequired, this.strEndDateID)) {
			if (this.ysnRequireStartDateIfEndSpecified && !dtiStartDate && dtiEndDate) {
				this.error = 'A Start Date must be specified if an End Date was entered.';
				this.errorNumber = 9;
				return false;
			}
			if (!dtiStartDate || !dtiEndDate) return true;
			else {
				var StartDate = new Date(dtiStartDate);
				var EndDate = new Date(dtiEndDate);
			}
			if (StartDate.getTime() < EndDate.getTime()) return true;
			else if (StartDate.getTime() == EndDate.getTime() && this.ysnAllowEqualDates == true) {
				this.ysnDatesAreEqual = true;
				return true;
			} else {
				this.error = 'The End Date must be after the Start Date.';
				this.errorNumber = 7;
				return false;
			}
		}
		else return false;
	}

	this.dateValidateNew = function (dtiDate, ysnRequired, strID) {
		var month;
		var day;
		var year;
		if (dtiDate === undefined)
			dtiDate = '';

        if (!ysnRequired && (dtiDate == '' || !dtiDate)) return true;

		if (ysnRequired && dtiDate == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = ' is required';
			this.errorNumber = 1;
			return false;
		}

		var dateFormat = getDateFormat().toLowerCase();

		if (typeof isMobileView != 'undefined' && isMobileView) {
			dtiDate = this.ChangeDateFormatForMobileView(dtiDate);
		}

		if ((dateFormat == "mm/dd/yyyy") && (RegExValidate('^(1[0-2]|0?[1-9])(\/|\-)(0?[1-9]|[1-2][0-9]|3[0-1])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i'))) {
			month = RegExp.$1;
			day = RegExp.$3;
			year = RegExp.$4;

			return this.validDateParts(month, day, year);
		}

		if ((dateFormat == "dd/mm/yyyy") && (RegExValidate('^(0?[1-9]|[1-2][0-9]|3[0-1])(\/|\-)(1[0-2]|0?[1-9])\\2([0-9]{4}|[0-9]{2})$', dtiDate, 'i'))) {
			month = RegExp.$3;
			day = RegExp.$1;
			year = RegExp.$4;

			return this.validDateParts(month, day, year);
		}

		if (strID) this.error = strID + ' is not a valid date format.\nPlease use ' + dateFormat.toUpperCase() + '.';
		else this.error = dtiDate + '\n is an invalid date format.\nPlease use ' + dateFormat.toUpperCase() + '.';
		this.errorNumber = 6;

		return false;
	}

	this.validDateParts = function (month, day, year) {
		if (year.length == 2 && this.ysnCent == true) {
			if (strID) this.error = strID + ' requires a four digit year';
			else this.error = 'Please use a four digit year';
			return false;
		}
		if (year.length == 4 && (year > 3000 || year < 1753)) {
			this.error = dtiDate + '\nis outside of the date range.';
			this.errorNumber = 2;
			return false;
		}
		if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
			this.error = 'This month doesn\'t have 31 days';
			this.errorNumber = 3;
			return false;
		}
		if (day >= 30 && month == 2) {
			this.error = 'February doesn\'t have ' + day + ' days';
			this.errorNumber = 4;
			return false;
		}
		if (month == 2 && day == 29 && !(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
			this.error = 'This is not a leap year\nFebruary doesn\'t have 29 days.';
			this.errorNumber = 5;
			return false;
		}
		return true;
	}

	this.dateOrderValidateNew = function () {
		//If sending in US format run dateValidateNew first becuase it expects dates in daybeforemonth format
		if (this.datesAlreadyValidated || (this.dateValidateNew(dtiStartDate, this.ysnStartDateRequired, this.strStartDateID) && this.dateValidateNew(dtiEndDate, this.ysnEndDateRequired, this.strEndDateID))) {
			if (this.ysnRequireStartDateIfEndSpecified && !dtiStartDate && dtiEndDate) {
				this.error = 'A Start Date must be specified if an End Date was entered.'
				this.errorNumber = 9; return false;
			}
			if (!dtiStartDate || !dtiEndDate || dtiEndDate == "NaN/NaN/NaN" || dtiStartDate == "NaN/NaN/NaN") return true;
			else {
				//Expects dates in US format 
				var StartDate = new Date(dtiStartDate);
				var EndDate = new Date(dtiEndDate);
			}
			if (StartDate.getTime() < EndDate.getTime()) return true;
			else if (StartDate.getTime() == EndDate.getTime() && this.ysnAllowEqualDates == true) {
				this.ysnDatesAreEqual = true;
				return true;
			}
			else {
				this.error = 'The End Date must be after the Start Date.';
				this.errorNumber = 7; return false;
			}
		}
		else return false;
	}

	this.getStandardDate = function (dateText) {
		$.ajax({
			url: '/Utility/GetDate?dateText=' + dateText,
			async: false,
			type: 'GET',
			dataType: 'json',
			success: function (data) {
				dateText = data.date;
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});

		return dateText;
	}

	this.smallDateTimeMaxValueValidate = function () {
		var StartDate = new Date(dtiStartDate);
		var EndDate = new Date(dtiEndDate);
		var MaxDate = new Date('05/06/2079 23:59:59');
		var result = true;
		if (StartDate <= MaxDate && EndDate <= MaxDate) {
			result = true;
		}
		else if (StartDate > MaxDate) {
			this.error = "The Start Date must be less than '5/6/2079'.";
			this.errorNumber = 2;
			result = false;
		}
		else if (EndDate > MaxDate) {
			this.error = "The End Date must be less than '5/6/2079'.";
			this.errorNumber = 3;
			result = false;
		}
		return result;
	}

	this.format = function (format, date) {
		if (!date) date = new Date();
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		return format.toLowerCase().replace(/dd/g, day).replace(/mm/g, month).replace(/y{1,4}/g, year)
	}

	this.timeValidate = function (ditTime, ysnRequired, strID) {
		if (!ysnRequired && ditTime == '') return true;
		else if (ysnRequired && ditTime == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = 'Time is required';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^(1[0-2]|0?[1-9]):([0-5]?[0-9])(:([0-5][0-9]))?$', ditTime, 'i')) return true;
		else {
			if (strID) this.error = strID + ' is not a valid time format. Please use HH:MM.';
			else this.error = ' is not a valid time format. Please use HH:MM.';
			this.errorNumber = 8;
			return false;
		}
	}

	this.timeValidate24Hour = function (ditTime, ysnRequired, strID) {
		if (!ysnRequired && ditTime == '') return true;
		else if (ysnRequired && ditTime == '') {
			if (strID) this.error = strID + ' is required';
			else this.error = 'Time is required';
			this.errorNumber = 1;
			return false;
		}
		else if (RegExValidate('^([01]?[0-9]|2[0-3]):([0-5]?[0-9])(:([0-5][0-9]))?$', ditTime, 'i')) return true;
		else {
			if (strID) this.error = strID + ' is not valid.';
			else this.error = ' is not valid.';
			this.errorNumber = 8;
			return false;
		}
	}
	this.timeOrderValidate = function () {
		if (!this.ysnAllowTimeOnly && ((!dtiStartDate && this.dtiStartTime) || (!dtiEndDate && this.dtiEndTime))) {
			this.error = 'You only submited a time.\nPlease provide a day as well.';
			this.errorNumber = 10;
			this.startDateBlank = (!dtiStartDate && this.dtiStartTime);
			this.endDateBlank = (!dtiEndDate && this.dtiEndTime);
			return false;
		}
		if (this.timesAlreadyValidated || (this.timeValidate(this.dtiStartTime, this.ysnStartTimeRequired, this.strStartTimeID) && this.timeValidate(this.dtiEndTime, this.ysnEndTimeRequired, this.strEndTimeID))) {
			if (!this.ysnDatesAreEqual) return true;

			if (!this.dtiStartTime && !this.ysnStartTimeRequired) return true;
			if (!this.dtiEndTime && !this.ysnEndTimeRequired) return true;
			
			var dtiStartTime = this.convertTo24Hour(this.dtiStartTime, this.strStartAMPM, dtiStartDate);
			var dtiEndTime = this.convertTo24Hour(this.dtiEndTime, this.strEndAMPM, dtiEndDate);

			if (dtiStartTime.getTime() < dtiEndTime.getTime()) return true;
			else if (dtiStartTime.getTime() == dtiEndTime.getTime() && this.ysnAllowEqualTimes == true) {
				this.ysnTimesAreEqual = true;
				return true;
			}
			else {
				this.error = 'The End Time must be after the Start Time if the Start and End Dates are the same.'
				this.errorNumber = 9;
				return false;
			}
		}
		return false;
	}

	this.convertTo24Hour = function (time, AMPM, date) {
		if (!date) date = "1/1/70";

		var dtTime = time.indexOf(AMPM) == -1 ? new Date(date + " " + time + " " + AMPM) : new Date(date + " " + time);
		if (dtTime == 'Invalid Date') {
			var dayBeforeMonthOn = getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy" ? true : false;
			if (dayBeforeMonthOn) {
				var dateArray = date.split('/');
				date = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2];
				dtTime = time.indexOf(AMPM) == -1 ? new Date(date + " " + time + " " + AMPM) : new Date(date + " " + time);
			}
		}
		return dtTime;
	}
}

// Helper function for inputAlert().
function inputEmailValidate(obj, required) {
	if (required == null || required == false)
		return (obj.value == '' || emailValidate(obj.value) == true)
	else
		return (obj.value != '' && emailValidate(obj.value) == true)
}

// Note: This function does not match standard validation behavior! Users are supposed to see
// a summary of problems with their inputs and not be alerted multiple times!
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Calls another validation routine, and determines success/failure on result of call (true/false).
// Displays error message on validation failure. Returns result of call.
function inputAlert(call, obj, required, errorMessage) {
	call = eval('input' + call + 'Validate');
	if (call(obj, required) == false) {
		if (errorMessage == null)
			errorMessage = 'Please enter a single valid email address without any extra body, subject, etc. information (ie user@domain.com).';
		obj.setAttribute('autocomplete', 'off');
		obj.focus();
		obj.setAttribute('autocomplete', 'on');
		alert(errorMessage);
		return false;
	}
	else
		return true;
}

// Takes array of required fields and checks whether they have a value or not
// If empty fields found, formats a javascript alert to inform the user and returns true
function checkRequiredFieldsEmpty(requiredFieldList) {
	var badList = new Array();
	for (var i = 0, len = requiredFieldList.length; i < len; i++) {
		var $this = requiredFieldList[i];
		var $fieldId = $('#' + $this);
		if (($fieldId.length > 0) && (FieldIsEmpty($fieldId.val()))) {
			var $label = $('label[for=' + $this + ']');
			if ($label.length > 0)
				badList.push($label.text().trim());
			else
				badList.push($this);
		}
	}
	if (badList.length > 0) {
		var msg = badList.join(" cannot be blank.\r\n");
		msg += " cannot be blank.";
		msg = msg.replace(/\*/g, '');
		alert(msg);
		return true;
	}
	return false;
}
// End Form Validation functions.

// Begin AJAX functions:
// See http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
// If you are curious why the XMLHTTP versions specified are and why others are not.
function makeErrorRequest(url, status) {
	var http_error_request = false;
	var origin = location.pathname;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_error_request = new XMLHttpRequest();
		if (http_error_request.overrideMimeType)
			http_error_request.overrideMimeType("text/html");
	} else if (window.ActiveXObject) { // IE6
		try {
			http_error_request = new ActiveXObject("Msxml2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_error_request = new ActiveXObject("Msxml2.XMLHTTP"); // Version 3.0
			} catch (e) { }
		}
	}

	http_error_request.onreadystatechange = function () { }
	http_error_request.open("GET", "/AJAX-error.ashx?url=" + escape(url) + "&status=" + status + "&origin=" + escape(origin), true);
	http_error_request.send(null);
	//if(status == 403)
	//window.location = '/admin/AccessDenied.aspx?fromURL=' + window.location.pathname.substr(7);
}

// Makes AJAX request, additionally supporting POST data (makeHttpRequest doesn't).
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Note: It's YOUR responsibility as a developer to make sure data
// placed in formData is formatted as it should be. Form data should be
// in Query String format with the value portions escape()'d. -KB
function makeHttpRequestEx(URL, formData, callbackFunc, ysnReturnXML) {

	URL = window.location.origin + URL;

	if (formData != null) {
		$.ajax({
			type: 'POST',
			url: URL,
			data: formData,
			success: callbackFunc
		});
	}
	else {
		$.ajax({
			type: 'GET',
			url: URL,
			success: callbackFunc
		});
}
}

// NOTE: Do not use this in new code, use $.ajax() instead.
// Makes AJAX request. Used in n-menu code.
function makeHttpRequest(url, callback_function, return_xml) {
	var http_request = false;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType && !return_xml)
			http_request.overrideMimeType("text/html");
	} else if (window.ActiveXObject) { // IE6
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_request = new ActiveXObject("MSxml2.XMLHTTP"); // Version 3
			} catch (e) { }
		}
	}

	if (!http_request) {
		alert("Unfortunately, your browser doesn't support this feature.");
		return false;
	}

	http_request.onreadystatechange = function () {
		if (http_request.readyState == 4) {
			--ajax_call_counter;

			//try {
			if (http_request.status == 200) {
				if (return_xml)
					eval(callback_function + ', http_request.responseXML)');
				else {
					if (http_request.responseText.search(/<form action='error.asp' method=post>/i) < 0)
						eval(callback_function + ', http_request.responseText)');
					else
						makeErrorRequest(url, http_request.status);
				}
			}
			else if (http_request.status)
				makeErrorRequest(url, http_request.status);
			//} catch (e) {
			// If this happens, there is no way to notify anyone
			// of the previous error. It might be their connection died,
			// or failed in some other way.

			//alert('An error occured while reporting the previous error.');
			//var USER_EXPLAIN_ERR_EN = '\n\nTechnical Details:\n' + e.name + ' - ';
			// IE 6 & 7: No Line Number, No Filename
			//if (document.all && !window.opera) {
			//	alert(USER_EXPLAIN_ERR_EN + e.description + ' (line unavailable, code: ' + e.number + ')' + '\n\nJavaScript Callback:\n' + callback_function + ', <responseData>);');
			//}
			// Opera and Firefox 1.5+: Line Number + Filename
			//else {
			//	alert(USER_EXPLAIN_ERR_EN + e.message + '\n' + e.fileName + ', line ' + e.lineNumber + '\n\nJavaScript Callback:\n' + callback_function + ', <responseData>);');
			//}
			//}

			http_request = null;
		}
	}

	http_request.open("GET", url, true);
	http_request.send(null);
}
// Invoked on window.onunload for pages using synchronous AHAH.
// Catches switches to different pages and window closes.
// -=-=-=-=-
// Note: It is synchronous instead of asynchronous to ensure
// the operation completes before a close. This is SHAH.
//
function destroyAHAH(e) {
	var http_request;

	if (window.XMLHttpRequest) { // Mozilla, Safari, IE7
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType("text/html");
		}
	} else if (window.ActiveXObject) { // IE6
		try {
			http_request = new ActiveXObject("MSXML2.XMLHTTP.6.0");
		} catch (e) {
			try {
				http_request = new ActiveXObject("MSXML2.XMLHTTP"); // Version 3
			} catch (e) { }
		}
	}

	if (!http_request) return;
	http_request.open("GET", 'http://' + window.location.host + '/AJAX-NMenuLoader.ashx?clearCache=1', false);
	http_request.send(null);
	//alert(http_request.status + ': if 200, the session cache object was term\'d where needed be.');
}
// End AJAX functions.

//
//  slideShow class
//  vars:
//  slideShowId						constructor param for the id of the image that will have the Slide Show
//  slideShowLink					constructor param for the id of the link that will be around the image that has Slide Show, use '' for no link
//  slideShowSpeed					optional constructor param for the speed of the slide show, default = 5000
//  filterName						optional constructor param for the IE filter, default = blendTrans
//  filterAttr1						optional constructor param for the IE filter, default = duration=3
//  filterAttr2						optional constructor param for the IE filter
//  filterAttr3						optional constructor param for the IE filter
//  j								counter for the object
//  picArr							array of pictures
//  altArr							array of alt text
//  linkArr							array of links
//  methods:
//  addImage(n, img, alt, caption, lngCaption, link)	add an image with alt text and a link, n specifies which postion in the arrays
//  runSlideShow()					continually calls nextSlide to run the Slide Show
//  nextSlide()						applies the transition and advances the Slide Show image 1 spot in the arrays
//  mouseOver()						detects and loads that image to the Main Image Display & draws border around the slected image & removed border from the Other small image icons
function slideShow(slideShowId, slideShowLink, slideShowSpeed, filterName, filterAttr1, filterAttr2, filterAttr3, slideShowLinkTarget, layout, externalLink) {
	if (!slideShowLinkTarget || slideShowLinkTarget == null || slideShowLinkTarget == "undefined" || slideShowLinkTarget == "")
		slideShowLinkTarget = "_self";
	if (!layout || layout == null || layout == "undefined")
		layout = 1;

	this.slideShowId = document.getElementById(slideShowId);

	this.picArr = new Array();
	this.altArr = new Array();
	this.captionArr = new Array();
	this.lngCaptionArr = new Array();
	this.linkArr = new Array();
	this.linkTargetArr = new Array();
	this.showExternalLinkPrompts = new Array();
	var useStyle = false;
	var captionFilter = "";
	var cssRule = false;
	var pos = 0;

	//Get The filter for IE.//
	for (i = 0; i < document.styleSheets.length; i++) {
		var styles = document.styleSheets[i];
		do {
			if (styles.href && styles.href.indexOf("style.css") > -1) {
				if (styles.cssRules) {
					cssRule = styles.cssRules[pos];
				}
				else if (styles.rules) {
					cssRule = styles.rules[pos];
				}
			}
			if (cssRule && cssRule.selectorText != undefined && cssRule.selectorText.indexOf('slideCaption') != -1) {
				useStyle = true;
				captionFilter = cssRule.style.filter;
				break;
			}
			pos++;
		} while (cssRule && !useStyle)
		if (useStyle) break;
	}
	var useStyle = $('.slideCaption').attr('class') == 'slideCaption';

	// If junk data causes one slideshow to fail the others should not.
	if (this.slideShowId == null) {
		this.addImage = function (n, img, alt, link, linkTarget, caption, lngCaption, externalLink) { }
		this.runSlideShow = function () { }
		this.nextSlide = function () { }
		this.mouseOver = function (elem, imgPath, altText) { }
		return;
	}

	var tmpElem = document.createElement('a');
	if (slideShowLink && slideShowLink != '') {
		do {
			slideShowLink = (slideShowLink).replace("%38", "&");
		} while ((slideShowLink).indexOf("%38") != -1)
		tmpElem.href = slideShowLink;
		if (slideShowLinkTarget && slideShowLinkTarget != '')
			tmpElem.target = slideShowLinkTarget;

		var ssID = this.slideShowId.id.replace("cvpSlideShowImage", "");
		var capt = document.getElementById('slideCaption' + ssID);
		if (externalLink == "True" && $('#ShowLeavingPageForExternalLinks') == "True") {
			tmpElem.setAttribute("onclick", "return showExternalSiteDialog(this);");
			tmpElem.onclick = function () { return showExternalSiteDialog(this); };
			if (capt) {
				capt.children[0].setAttribute("onclick", "return showExternalSiteDialog(this);");
			}
		}
		else {
			tmpElem.onclick = "";
			if (capt)
				capt.children[0].removeAttribute("onclick");
		}
	}
	else
		tmpElem.removeAttribute('href');

	this.j = 1;
	if (slideShowSpeed == null || slideShowSpeed == '')
		this.slideShowSpeed = 4000;
	else
		this.slideShowSpeed = slideShowSpeed * 1000;
	if (filterAttr1 == null || filterAttr1 == '')
		filterAttr1 = 2;
	if (filterName == null || filterName == '' || filterName.toLowerCase() == 'blendtrans')
		this.filterName = 'BlendTrans(duration=' + filterAttr1;
	else if (filterName.toLowerCase() != 'none')
		this.filterName = 'progid:DXImageTransform.Microsoft.' + filterName + ', duration=' + filterAttr1;
	if (filterAttr2 != null && filterAttr2 != '' && filterAttr2 != 'null')
		this.filterName = this.filterName + ',' + filterAttr2;
	if (filterAttr3 != null && filterAttr3 != '' && filterAttr3 != 'null')
		this.filterName = this.filterName + ',' + filterAttr3;
	if (filterName.toLowerCase() == 'none')
		this.filterName = filterName;
	else
		this.filterName = this.filterName + ')';

	switch (layout) {
		case 1: // Standard
			tmpElem.style.border = 'none';
			tmpElem.style.background = 'transparent';
			//tmpElem.style.border = 'medium none';
			//tmpElem.style.background = 'transparent none repeat scroll 0% 0%';
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			this.slideShowId.parentNode.removeChild(this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			break;
		case 5: // StandardFiveBottom
			//DO NOT COPY for this case - follow 12 for a better code.
			//tmpElem.style.border = 'none';
			//tmpElem.style.background = 'transparent';
			tmpElem.style.border = 'medium none';
			tmpElem.style.background = 'transparent none repeat scroll 0% 0%';
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			//this.slideShowId.parentNode.removeChild(this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			var tmpElemHTML = this.slideShowLink.innerHTML;

			var td = this.slideShowId.parentNode.parentNode;
			this.slideShowId.parentNode.parentNode.removeChild(this.slideShowId.parentNode);

			var newSection = document.createElement("div");
			newSection.setAttribute("id", "SubSection1");

			var cpSlideShowWrapper1 = document.createElement("div");
			cpSlideShowWrapper1.setAttribute("id", "cpSlideShowWrapper1");
			cpSlideShowWrapper1.style.padding = "5px";
			cpSlideShowWrapper1.style.background = "rgb(70, 43, 16) none repeat scroll 0% 0%";
			cpSlideShowWrapper1.style.position = "relative";
			cpSlideShowWrapper1.style.width = "416px";
			//cpSlideShowWrapper1.style.-moz-background-clip = "border";
			//cpSlideShowWrapper1.style.-moz-background-origin = "padding";
			//cpSlideShowWrapper1.style.-moz-background-inline-policy = "continuous";
			cpSlideShowWrapper1.style.height = "254px";

			var imageHead = document.createElement("div");
			imageHead.style.padding = "4px";
			imageHead.style.background = "rgb(241, 239, 234) none repeat scroll 0% 0%";
			imageHead.style.align = "left";
			imageHead.style.width = "406px";
			//-moz-background-clip: border;
			//-moz-background-origin: padding;
			//-moz-background-inline-policy: continuous;
			imageHead.style.float = "left";
			imageHead.style.height = "198px";
			imageHead.style.align = "left";

			imageHead.innerHTML = tmpElemHTML;
			cpSlideShowWrapper1.appendChild(imageHead);

			var imageRows = document.createElement("div");
			imageRows.setAttribute("id", "imageRows");
			imageRows.style.position = "relative";
			imageRows.style.align = "left";
			imageRows.style.margin = "5px 0px 0px 0px";
			imageRows.style.width = "416px";
			imageRows.style.float = "left";
			imageRows.style.height = "42px";
			imageRows.style.clear = "both";

			cpSlideShowWrapper1.appendChild(imageRows);
			newSection.appendChild(cpSlideShowWrapper1);
			td.appendChild(newSection);

			this.slideShowId = document.getElementById(slideShowId);
			if (isie) {
				this.slideShowId.style.height = "100%";
				this.slideShowId.style.width = "100%";
			}
			else {
				this.slideShowId.setAttribute("height", "100%");
				this.slideShowId.setAttribute("width", "100%");
			}
			break;
		case 12: //This case would handle the new 12 image slideshow without Rotation. & with mouseover
			tmpElem.id = slideShowId + '_link';
			this.slideShowLink = tmpElem;
			this.slideShowId.parentNode.insertBefore(tmpElem, this.slideShowId);
			this.slideShowLink.appendChild(this.slideShowId);
			var tmpElemHTML = this.slideShowLink.innerHTML;

			var td = this.slideShowId.parentNode.parentNode;

			// If the slideshow is in the middle of the page's content, we
			// have to keep track of its next sibling, so we put the 12-thumbnail
			// content in the new location.
			var nextSibling = this.slideShowLink.nextSibling;

			this.slideShowId.parentNode.parentNode.removeChild(this.slideShowId.parentNode);

			var newSection = document.createElement("div");
			newSection.setAttribute("id", "SubSectionFor" + slideShowId);

			var cpSlideShowWrapper1 = document.createElement("div");
			cpSlideShowWrapper1.setAttribute("id", "cpSlideShowWrapper" + slideShowId);

			//Remove these in-line style Height and Width after CSS changes
			cpSlideShowWrapper1.style.width = "441px";
			cpSlideShowWrapper1.style.height = "190px";
			cpSlideShowWrapper1.style.padding = "5px";
			cpSlideShowWrapper1.style.position = "relative";
			cpSlideShowWrapper1.style.clear = "both";

			var imageHead = document.createElement("div");
			imageHead.setAttribute("id", "imageHead");
			//Remove these in-line style Height and Width after CSS changes
			imageHead.style.width = "201px"; //185 px
			imageHead.style.height = "168px";
			imageHead.style.padding = "8px";
			imageHead.style.align = "left";
			imageHead.style.styleFloat = "left";
			imageHead.style.cssFloat = "left";
			imageHead.innerHTML = tmpElemHTML;
			cpSlideShowWrapper1.appendChild(imageHead);

			var imageRowsHeader = document.createElement("div");
			imageRowsHeader.setAttribute("id", "imageRowsHeader");
			imageRowsHeader.style.position = "relative";
			imageRowsHeader.style.align = "right";
			imageRowsHeader.style.styleFloat = "right";
			imageRowsHeader.style.cssFloat = "right";
			imageRowsHeader.style.width = "216px"; //247px
			imageRowsHeader.style.height = "18px";

			//Image Link
			var slideImageHeaderLink = document.createElement("a");
			slideImageHeaderLink.setAttribute("href", "/gallery.aspx");

			//Image Header
			var slideImageHeader = document.createElement("img");
			slideImageHeader.setAttribute("id", slideShowId + "Header");
			slideImageHeader.setAttribute("src", "/images/pages/ImageHeader.jpg");
			slideImageHeader.setAttribute("target", "_blank");
			slideImageHeader.style.width = "198px"; //247px
			slideImageHeader.style.height = "18px";
			slideImageHeader.setAttribute("border", "0");

			slideImageHeaderLink.appendChild(slideImageHeader);
			imageRowsHeader.appendChild(slideImageHeaderLink);

			cpSlideShowWrapper1.appendChild(imageRowsHeader);

			var imageRows = document.createElement("div");
			imageRows.setAttribute("id", "imageRows");
			imageRows.style.position = "relative";
			imageRows.style.align = "right";
			//imageRows.style.margin = "28px 0px 0px 0px";
			imageRows.style.styleFloat = "right";
			imageRows.style.cssFloat = "right";
			imageRows.style.width = "216px"; //247px
			imageRows.style.height = "145px";
			imageRows.style.padding = "4px";

			cpSlideShowWrapper1.appendChild(imageRows);
			newSection.appendChild(cpSlideShowWrapper1);

			var scriptTag = td.firstChild;
			while (scriptTag) {
				if (scriptTag.nodeType == 1 && scriptTag.tagName == 'SCRIPT')
					break;
				scriptTag = scriptTag.nextSibling;
			}
			if (nextSibling != null)
				td.insertBefore(newSection, nextSibling);
			else
				td.insertBefore(newSection, scriptTag);

			this.slideShowId = document.getElementById(slideShowId);
			//Remove these in-line style Height and Width after CSS changes
			if (isie) {
				this.slideShowId.style.height = "100%";
				this.slideShowId.style.width = "100%";
			}
			else {
				this.slideShowId.setAttribute("height", "100%");
				this.slideShowId.setAttribute("width", "100%");
			}
			break;
		default:
			break;
	}

	this.addImage = function (n, img, alt, link, linkTarget, caption, lngCaption, isExternal) {
		if (layout == 12 && n > 11)
			return; // Allow only upto 12 thumbnail images for Standard 12 Bottom layout

		if (!linkTarget || linkTarget == null || linkTarget == "undefined" || linkTarget == "")
			linkTarget = "_self";

		this.picArr[n] = new Image();
		this.picArr[n].src = img;
		this.showExternalLinkPrompts[n] = (isExternal == "True" && $('#ShowLeavingPageForExternalLinks').val() == "True");
		do {
			alt = (alt).replace("%39", "'");
		} while ((alt).indexOf("%39") != -1)
		this.altArr[n] = alt;
		this.captionArr[n] = caption;
		this.lngCaptionArr[n] = lngCaption;

		do {
			link = (link).replace("%38", "&");
		} while ((link).indexOf("%38") != -1)
		this.linkArr[n] = link;

		this.linkTargetArr[n] = linkTarget;

		switch (layout) {
			case 5:
				var slideImage = document.createElement("img");
				slideImage.setAttribute("id", slideShowId + n);
				if (isie) {
					slideImage.style.height = "40";
					slideImage.style.width = "40";
				}
				else {
					slideImage.setAttribute("height", "40");
					slideImage.setAttribute("width", "40");
				}
				if (n == 0)
					slideImage.setAttribute("border", "1");
				else
					slideImage.setAttribute("border", "0");
				slideImage.style.borderStyle = "solid";
				slideImage.style.borderColor = "#FFFF00";
				slideImage.setAttribute("src", img);
				slideImage.setAttribute("alt", alt);
				slideImage.setAttribute("link", link);
				slideImage.setAttribute("target", linkTarget);
				slideImage.setAttribute("class", "photoGalleryImgArray");

				if (n == 0)
					slideImage.style.margin = "0px 0px 0px 0px";
				else
					slideImage.style.margin = "0px 0px 0px 6px";
				this.imageRows = document.getElementById("imageRows");
				this.imageRows.appendChild(slideImage);
				break;
			case 12: //This case would handle the new 12 image slideshow without Rotation. & with mouseover
				var slideImage = document.createElement("img");
				slideImage.setAttribute("id", slideShowId + n);
				//Remove these in-line style 'Padding' after CSS changes
				if (n == 0) {
					if (isie)
						slideImage.style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;";
					else
						slideImage.setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;');
				}
				else {
					if (isie)
						slideImage.style.cssText = "margin:6px 6px; border: 2px solid transparent ; background-color: white; padding: 3px; height:30px; width:30px;";
					else
						slideImage.setAttribute('style', 'margin:6px 6px; border: 2px solid transparent ; background-color: white; padding: 3px;height:30px; width:30px;');
				}
				slideImage.setAttribute("src", img);
				slideImage.setAttribute("alt", alt);
				slideImage.setAttribute("link", link);
				slideImage.setAttribute("target", linkTarget);
				slideImage.setAttribute("class", "photoGalleryImgArray");
				var siObj = eval(slideShowId.replace("Image", ""));
				slideImage.onmouseover = function () { siObj.mouseOver(slideShowId + n, img, alt); };

				this.imageRows = document.getElementById("imageRows");
				this.imageRows.appendChild(slideImage);
				break;
			default:
				break;
		}
	}

	this.mouseOver = function (elem, imgPath, altText) {
		//Set the Main Display image to mouseOver Image
		this.slideShowId.setAttribute("src", imgPath);
		this.slideShowId.alt = altText;

		//Loop through all other images and set the border to 1
		this.ImageRows = document.getElementById("imageRows");
		this.ImageRows.Images = this.ImageRows.getElementsByTagName("img");
		var j = 0;
		while (j < this.ImageRows.Images.length) {
			if (this.ImageRows.Images[j] == document.getElementById(elem)) {
				if (isie)
					this.ImageRows.Images[j].style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px; height:30px; width:30px;";
				else
					this.ImageRows.Images[j].setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color: lightblue; padding: 3px;height:30px; width:30px;');
			}
			else {
				if (isie)
					this.ImageRows.Images[j].style.cssText = "margin:6px 6px; border: 2px solid transparent; background-color:white; padding: 3px;height:30px; width:30px;";
				else
					this.ImageRows.Images[j].setAttribute('style', 'margin:6px 6px; border: 2px solid transparent; background-color:white; padding: 3px;height:30px; width:30px;');
			}
			j++;
		}
	}

	this.runSlideShow = function () {
		switch (layout) {
			case 12:
			case 5:
				//Do nothing, do not run a slideshow
				break;
			default:
				if (this.picArr.length > 1) {
					var self = this; 					//  reference to get around context loss of this during setTimeout()
					this.timeoutId = setTimeout(function () { self.nextSlide(); self.runSlideShow(); }, this.slideShowSpeed);
				}
				break;
		}
	}

	this.nextSlide = function () {
		var ssID = this.slideShowId.id.replace("cvpSlideShowImage", "");
		var capt = document.getElementById('slideCaption' + ssID);
		var lngCapt = document.getElementById('slideCaptionLng' + ssID);
		if (document.all && this.slideShowId.filters && this.slideShowId.filters.length > 0 && this.filterName.toLowerCase() != 'none') {
			this.slideShowId.style.filter = this.filterName;
			this.slideShowId.filters.item(0).apply();
			if (capt) {
				capt.style.filter = captionFilter + " " + this.filterName;
				capt.filters.item(capt.filters.length - 1).apply();
				if (lngCapt) {
					lngCapt.style.filter = captionFilter + " " + this.filterName;
					lngCapt.filters.item(lngCapt.filters.length - 1).apply();
				}
			}
		}
		this.slideShowId.setAttribute('src', this.picArr[this.j].src);
		this.slideShowId.setAttribute('alt', this.altArr[this.j]);
		this.slideShowId.setAttribute('title', this.altArr[this.j]);

		var height = '';
		var marginTop = useStyle ? "-61px" : "0px";
		var paddingTop = "3px";
		if (this.captionArr[this.j] == "") {
			height = "0px";
		}
		else if (this.lngCaptionArr[this.j] == "") {
			height = "31px";
			marginTop = useStyle ? "-35px" : "0px";
			paddingTop = useStyle ? "-4px" : "0px";
		}
		else
			height = useStyle ? "55px" : "";

		if (capt) {
			capt.innerHTML = useStyle ? this.captionArr[this.j] : "<strong>" + this.captionArr[this.j] + "</strong>";
			capt.style.marginTop = marginTop;
			capt.style.height = height;
			capt.style.paddingLeft = useStyle ? "15px" : "5px";
			capt.style.paddingRight = useStyle ? "10px" : "5px";
			capt.style.paddingTop = paddingTop;

			if (height != "0px" && lngCapt != null) {
				lngCapt.innerHTML = this.lngCaptionArr[this.j];
				lngCapt.style.marginTop = useStyle ? "-38px" : "0px";
				lngCapt.style.paddingLeft = useStyle ? "15px" : "5px";
				lngCapt.style.paddingRight = useStyle ? "10px" : "5px";
				lngCapt.style.paddingTop = paddingTop;
				lngCapt.style.overflow = 'hidden';
			}
			else if (lngCapt != null) {
				lngCapt.style.marginTop = "0px";
				lngCapt.innerHTML = "";
				lngCapt.height = "0px";
			}
		}

		var slideLink = this.linkArr[this.j]
		var slideLinkTarget = this.linkTargetArr[this.j]
		if (slideLink && slideLink != '') {
			tmpElem.href = slideLink;
			if (this.showExternalLinkPrompts[this.j] == true) {
				this.slideShowLink.setAttribute("onclick", "return showExternalSiteDialog(this);");
				tmpElem.onclick = function () { return showExternalSiteDialog(this); };
			}
			else {
				this.slideShowLink.removeAttribute("onclick");
				tmpElem.onclick = "";
			}
			if (capt)
				if (this.showExternalLinkPrompts[this.j] == true) {
					capt.innerHTML = useStyle ? "<a class = 'slideCaptionHyperlink' onclick=\"return showExternalSiteDialog(this);\" href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>" :
                                             "<a class = 'Hyperlink' onclick=\"return showExternalSiteDialog(this);\" href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>";
				}
				else {
					capt.innerHTML = useStyle ? "<a class = 'slideCaptionHyperlink' href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>" :
                                             "<a class = 'Hyperlink' href=" + slideLink + " target = " + slideLinkTarget + ">" + this.captionArr[this.j] + "</a>";
				}
			if (slideLinkTarget && slideLinkTarget != '')
				tmpElem.target = slideLinkTarget;
		}
		else {
			tmpElem.removeAttribute('href');
			if (capt)
				capt.removeAttribute('href');
		}
		if (document.all && this.slideShowId.filters && this.slideShowId.filters.length > 0 && filterName.toLowerCase() != 'none') {
			this.slideShowId.filters.item(0).play();
			if (capt) {
				capt.filters.item(capt.filters.length - 1).play();
				lngCapt.filters.item(lngCapt.filters.length - 1).play();
			}
		}

		var slideImageId, slideImage;
		if (layout == 5) {
			// Set the selected image's border
			if (this.j == 0)
				slideImageId = slideShowId + (this.picArr.length - 1);
			else
				slideImageId = slideShowId + (this.j - 1);
			slideImage = document.getElementById(slideImageId);
			slideImage.setAttribute("border", "0");

			slideImageId = slideShowId + this.j;
			slideImage = document.getElementById(slideImageId);
			slideImage.setAttribute("border", "1");
		}

		this.j++;
		if (this.j >= this.picArr.length)
			this.j = 0;
	}
}

function validateMultiFileUpload(el, useWhiteList) {
	try {
		const fileNames = [...el.files].map(file => file.name);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', '/Utility/AreValidFileNames', false);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		const data = new FormData();
		fileNames.forEach(fileName => {
			data.append("paths[]", fileName);
		})

		xhr.send(data);
		const response = JSON.parse(xhr.responseText);
		const isValid = response.every(x => x === true);

		for (const fileName of fileNames) {
			if (!isAllowedFileExtension(fileName, useWhiteList) || !isValid) {
				return false;
			}
		}
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
}

//el is the pointer to the input type="file"
//example usage: <input type="file" size="38" name="txtFile" onChange="validateFileUpload(this);">
function validateFileUpload(el, useWhiteList) {
	var val = el.value;
	var cbox = document.getElementById(el.name + "_pdf");
	if (cbox) {
		cbox.disabled = true;
		cbox.checked = false;
	}
	if (val.length > 0) {
		var isValid = false;
		if (val.indexOf(':\\fakepath\\') > -1)
			val = val.substring(12);
		$.ajax({
			async: false,
			type: "POST",
			url: '/Utility/IsValidFileName',
			data: { path: val },
			dataType: "json",
			success: function (response) {
				if (typeof (response.d) != "undefined") {
					response = response.d;
				}
				if (response.result == "True")
					isValid = true;
			}
		});
		if (!isAllowedFileExtension(val, useWhiteList) || !isValid) {
			alert("The file you are trying to upload is not an allowed file type or has an invalid file name. These are the accepted characters: A-z 0-9 ~ ! ( ) - + = [ ] { } , . _");
			var tempElem = el.cloneNode(false);
			tempElem.value = "";
			el.parentNode.replaceChild(tempElem, el);
			el.focus();
			return false;
		}
		if (cbox) {
			cbox.disabled = !isAllowedFileExtensionPDF(val);
			if (cbox.disabled) cbox.checked = false;
		}
	}
	return true;
}

// Recommended you use isAllowedFileExtensionWhiteList() instead. Do not use this method
// where useWhiteList is false or null, that is not secure (uses blacklist rather than whitelist).
function isAllowedFileExtension(filename, useWhiteList) {
	if (filename + '' == '')
		return true;

	// Cut out the path portion (why not use lastIndexOf()?).
	while (filename.indexOf("/", 0) > 0)
		filename = filename.substr(filename.indexOf("/", 0) + 1, filename.length - filename.indexOf("/", 0))
	while (filename.indexOf("\\", 0) > 0)
		filename = filename.substr(filename.indexOf("\\", 0) + 1, filename.length - filename.indexOf("\\", 0))

	var lastPeriod = filename.indexOf(".", 0);
	var i = lastPeriod;

	while (lastPeriod > 0) {
		i = lastPeriod;
		lastPeriod = filename.indexOf(".", i + 1);
	}

	var fileExtension = (i > 0 ? filename.substr(i + 1, filename.length - i) : "");

	if (useWhiteList)
		return isAllowedFileExtensionWhiteList('.' + fileExtension)
	else {
		switch (fileExtension.toUpperCase()) {
			case "ASA":
			case "ASAX":
			case "ASBX":
			case "ASCX":
			case "ASP":
			case "ASPX":
			case "BAT":
			case "CAB":
			case "CF":
			case "CFM":
			case "CGI":
			case "COM":
			case "CONFIG":
			case "DLL":
			case "EXE":
			case "HTA":
			case "LHA":
			case "LHZ":
			case "MIM":
			case "PIF":
			case "PL":
			case "SYS":
			case "UUE":
			case "VBS":
			case "VXD":
			case "WEBINFO":
			case "WIZ":
			case "WSH":
				{
					return false;
					break;
				}
			default:
				{
					return true;
					break;
				}
		}
	}
}

// Makes sure a file being uploaded for PDF conversion is supported.
// Note: Server logic should additionally chop out paths and other evil things (e.g. Windows Device Names like 'CON', 'AUX', etc).
function isAllowedFileExtensionPDF(filename) {
	//cut out the path portion
	while (filename.indexOf("/", 0) > 0)
		filename = filename.substr(filename.indexOf("/", 0) + 1, filename.length - filename.indexOf("/", 0))
	while (filename.indexOf("\\", 0) > 0)
		filename = filename.substr(filename.indexOf("\\", 0) + 1, filename.length - filename.indexOf("\\", 0))

	var lastPeriod, i, fileExtension;
	lastPeriod = filename.indexOf(".", 0);
	i = lastPeriod;
	while (lastPeriod > 0) {
		i = lastPeriod;
		lastPeriod = filename.indexOf(".", i + 1);
	}

	if (i > 0)
		fileExtension = filename.substr(i + 1, filename.length - i).toUpperCase();
	else
		fileExtension = "";

	switch (fileExtension) {
		case "HTM":
		case "HTML":
		case "DOC":
		case "DOCX":
		case "XLS":
		case "XLSX":
		case "TXT":
			{
				return true;
				break;
			}
		default:
			{
				return false;
				break;
			}
	}
}

// returns true if it is a valid US or Canadian zip code.
// supports ZIP, ZIP+4 and Canadian zip code format
// * intCountryCode is a ISO 3166-1 numeric value.
function isZipCode(strInput, intCountryCode) {
	var countryCodeRe = {
		840: /^\d{5}([\-]\d{4})?$/, // USA
		124: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i, //Canada
		36: /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/ //Australia
	};
	if (intCountryCode in countryCodeRe) {
		return countryCodeRe[intCountryCode].test(strInput);
	}
	return strInput.length > 0;
}

// returns name to assign postal/zip code.
function getZipCodeName(intCountryCode) {
	if (intCountryCode == 840) // USA
		return 'Zip';
	else// if (intCountryCode == 124) // Canada
		return 'Postal';
}

function updateAddressPlaceholdersForCanadinaClients(zipElementId, stateElementId) {
	document.getElementById(stateElementId).setAttribute('placeholder', 'Province');
	document.getElementById(stateElementId).style.width = '5em';
	document.getElementById(zipElementId).setAttribute('placeholder', 'Postal Code');
}

function getLowerCaseStateString() {
	if (intCountryCode == 124)
		return "province";
	else// if (intCountryCode == 840) <- neutral setting (en-US).
		return "state";
}

// Gets card type. Will return one of the following values (or an empty string for unknown/invalid cards):
// * Master = M
// * Visa = V
// * Discover = D
// * American Express = A
function getCreditCardType(cardNumber) {
	switch (cardNumber.substr(0, 2)) {
		case "50":
		case "51":
		case "52":
		case "53":
		case "54":
		case "55":
			return "M";
		case "65":
			return "D";
	}
	switch (cardNumber.substr(0, 1)) {
		case "4":
			return "V";
	}
	switch (cardNumber.substr(0, 4)) {
		case "6011":
			return "D";
	}
	switch (cardNumber.substr(0, 2)) {
		case "34":
		case "37":
			return "A";
	}

	// Card unknown/invalid.
	return '';
}

// Validates credit card numbers. cardType is an optional argument.
function isValidCreditCardNumber(cardNumber, cardType) {
	var isValid = false;
	var ccCheckRegExp = /[^\d ]/;

	isValid = !ccCheckRegExp.test(cardNumber);

	if (isValid) {
		// Get card type if not explicitly specified.
		if (cardType == null)
			cardType = getCreditCardType(cardNumber);

		// If unknown/unsupported/invalid card type, abort/fail.
		if (cardType == '')
			return false;

		var cardNumbersOnly = cardNumber.replace(/ /g, "");
		var cardNumberLength = cardNumbersOnly.length;
		var lengthIsValid = false;
		var patternIsValid = false;
		var patternRegExp;

		switch (cardType) {
			case "V":
				{ // visa
					lengthIsValid = (cardNumberLength == 13 || cardNumberLength == 16);
					patternRegExp = /^4/;
					break;
				}
			case "M":
				{ // mastercard
					lengthIsValid = (cardNumberLength == 16);
					patternRegExp = /^5[0-5]/;
					break;
				}
			case "A":
				{ // amercian express
					lengthIsValid = (cardNumberLength == 15);
					patternRegExp = /^3[4,7]/;
					break;
				}
			case "D":
				{ // discover
					lengthIsValid = (cardNumberLength == 16);
					patternRegExp = /^6011/;
					break;
				}
				/*case "J":
				{ // jcb
				lengthIsValid = (cardNumberLength == 15) || (cardNumberLength == 16);
				patternRegExp = /^[3,1800,2131]/;
				break;
				}
				case "C":
				{ // diner's club
				lengthIsValid = (cardNumberLength == 14);
				patternRegExp = /^3[0,6,8]/;
				break;
				}*/
			default:
				patternRegExp = /^$/;
		}

		patternIsValid = patternRegExp.test(cardNumbersOnly);
		isValid = patternIsValid && lengthIsValid;
	}

	if (isValid) {
		var numberProduct;
		var numberProductDigitIndex;
		var checkSumTotal = 0;

		for (digitCounter = cardNumberLength - 1; digitCounter >= 0; digitCounter--) {
			checkSumTotal += parseInt(cardNumbersOnly.charAt(digitCounter));
			digitCounter--;
			numberProduct = String((cardNumbersOnly.charAt(digitCounter) * 2));
			for (var productDigitCounter = 0; productDigitCounter < numberProduct.length; productDigitCounter++)
				checkSumTotal += parseInt(numberProduct.charAt(productDigitCounter));
		}

		isValid = (checkSumTotal % 10 == 0);
	}

	return isValid;
}

// Confirms data given is legal.
function isDate(varDateToCheck) {
	var objDate = new dateValidator();
	return objDate.dateValidate(varDateToCheck, true, 'Date');
}

// Confirms data given is legal.
function isDateNew(varDateToCheck) {
	var objDate = new dateValidator();
	return objDate.dateValidateNew(varDateToCheck, true, 'Date');
}

// TODO: JavaScript - Remove this function. Better ways to handle this.
// Date comparison function.
function dateDiff(dtiDateEntered, dtiDateToday) {
	var date1 = new Date();
	var date2 = new Date();
	var diff = new Date();
	// Initialize the first date
	var date1temp = new Date(dtiDateEntered);
	date1.setTime(date1temp.getTime());
	// Initialize the second date
	var date2temp = new Date(dtiDateToday);
	date2.setTime(date2temp.getTime());
	// sets difference date to difference of first date and second date
	diff.setTime(date1.getTime() - date2.getTime());
	timediff = diff.getTime();
	days = Math.floor(timediff / (86400000)); // 1000 * 60 * 60 * 24
	timediff -= days * (86400000);
	return days;
}

// .NET JavaScript debugging function.
// TO-DO: Add sections for 'add_' and 'remove_' event prefixes.
function debugDisplayMembers(obj) {
	var getters = new Array();
	var setters = new Array();
	var others = new Array();
	var sKey;

	for (var key in obj) {
		sKey = key + "";
		if (!((sKey.length > 0) && (sKey[0] == '_'))) {
			switch (sKey.substr(0, 4)) {
				case 'get_':
					getters.push(key);
					break;
				case 'set_':
					setters.push(key);
					break;
				default:
					others.push(key);
			}
		}
	}

	getters.sort();
	setters.sort();
	others.sort();

	alert(others.join(", ") + "\r\n\r\n" +
		getters.join(", ") + "\r\n\r\n" +
		setters.join(", "));
}

// BEGIN PSEUDO-FORMS CODE
// Do not call any of these methods directly in your application code.
// Pseudo-forms are transparent, you shouldn't need to use these methods.
addEvent(window, 'load', initializePseudoForms, false);

// Allows IE to recognize tag "subform". You cannot legally nest
// FORM tags inside FORM tags and at least Firefox pretends they're not
// in the DOM period. This is problematic, so the tag was renamed.
// Done for FORMS inside of FORMs trick to get around ASP.NET form limitations
// for content we cannot control (User Pages, Info Advanced HTML, etc).
document.createElement('subform');

// Initialize pseudo-forms. Called on window load.
function initializePseudoForms() {
	// Make sure we're in an HTML document (not XUL).
	if (document.body) {
		var subForms = document.body.getElementsByTagName('subform');
		for (var i = 0; i < subForms.length; i++)
			setupPseudoForm(subForms[i]);
	}
}

// Sets up pseudo-form.
function setupPseudoForm(pseudoFormElement) {
	// Re-routes form submission elements (no javascript used/necessary).
	// (those being input.type=submit, button.type=submit, and input.type=image)
	var rerouteElement = function (input, pseudoFormElement, newTagName, newType, copyInnerHTML) {
		var replacement = document.createElement(newTagName);
		replacement.setAttribute('type', newType);
		var onClickDest, onClickSrc = replacement.getAttribute('onclick');
		if (onClickSrc != null)
			replacement.removeAttribute('onclick');
		cloneAttributes(input, replacement);
		if (onClickSrc != null) {
			eval("window.tmp = function(event) { " + onClick + " }");
			onClickSrc = window.tmp;
			window.tmp = null;
			onClickDest = function (ev) {
				ev = (window.event ? window.event : ev);
				if (onClickSrc(ev) == false)
					return;
				pseudoFormElement._submitter = replacement;
				pseudoFormElement._submevent = ev;
				pseudoFormElement.submit();
			}
		}
		else {
			onClickDest = function (ev) {
				ev = (window.event ? window.event : ev);
				pseudoFormElement._submitter = replacement;
				pseudoFormElement._submevent = ev;
				pseudoFormElement.submit();
			}
		}

		// Return replacement routine.
		var fn = function () {
			var inputParent = input.parentNode;
			var inputRightAfter = input.nextSibling;
			var inputDisabled = input.disabled; // For Internet Explorer (it forgets).
			var inputHTML = (copyInnerHTML ? input.innerHTML : null);
			inputParent.removeChild(input); input = null;
			if (copyInnerHTML)
				replacement.innerHTML = inputHTML;
			inputParent.insertBefore(replacement, inputRightAfter);
			replacement.disabled = inputDisabled;
			addEvent(replacement, 'click', onClickDest, false);
		}
		return fn;
	}

	// Re-route submits (needs to be done early on).
	var inputs, input, inc, repls;
	repls = new Array();
	inputs = pseudoFormElement.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'submit':
				repls.push(rerouteElement(input, pseudoFormElement, 'input', 'button', false));
				break;
			case 'image':
				repls.push(rerouteElement(input, pseudoFormElement, 'img', 'image', false));
				break;
		}
	}
	inputs = pseudoFormElement.getElementsByTagName('button');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'submit':
				repls.push(rerouteElement(input, pseudoFormElement, 'button', 'button', true));
				break;
		}
	}
	for (var i = 0; i < repls.length; i++)
		repls[i]();

	// Implement properties for pseudo-form.
	var name = pseudoFormElement.getAttribute('name');
	if (name && name != '') {
		document[name] = pseudoFormElement;
		document.forms[name] = pseudoFormElement;
	}
	pseudoFormElement.method = pseudoFormElement.getAttribute('method');
	if (pseudoFormElement.method == null || pseudoFormElement.method == '')
		pseudoFormElement.method = 'get';
	pseudoFormElement.enctype = pseudoFormElement.getAttribute('enctype');
	if (pseudoFormElement.enctype == null || pseudoFormElement.enctype == '')
		pseudoFormElement.enctype = 'application/x-www-form-urlencoded';
	pseudoFormElement.target = pseudoFormElement.getAttribute('target');
	pseudoFormElement.action = pseudoFormElement.getAttribute('action');
	pseudoFormElement.acceptCharset = pseudoFormElement.getAttribute('accept-charset');

	// Initialize.
	var elements = new Array(); // elements in pseudo-form (for form.elements).
	var simpleInputs = new Array(); // simple value inputs and textareas, no additional logic.
	var stateInputs = new Array(); // checkboxes and radiobuttons.
	var dropdowns = new Array(); // drop-downs and lists.
	pseudoFormElement.elements = elements;
	pseudoFormElement._simple = simpleInputs;
	pseudoFormElement._state = stateInputs;
	pseudoFormElement._dropdown = dropdowns;

	// Registers element for the pseudo-form.
	var registerElement = function (input) {
		// Add to elements array.
		elements.push(input);
		// Add as property.
		if (input.name != '' && input.name != null) {
			obj = pseudoFormElement[input.name];
			if (obj == null)
				pseudoFormElement[input.name] = input;
			else if (obj instanceof Array)
				obj.push(input);
			else {
				var arr = new Array();
				arr.push(obj);
				arr.push(input);
				pseudoFormElement[input.name] = arr;
			}
		}
	}

	// Add methods (can be overridden by form elements /w same names, just like real forms).
	pseudoFormElement.submit = function () { submitPseudoForm(this, false); }
	pseudoFormElement.reset = document.aspnetForm.reset; // HACK (we'll fix it if someone complains)

	// Register elements, and categorize them for form submission.
	inputs = pseudoFormElement.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		switch (input.type.toLowerCase()) {
			case 'checkbox':
			case 'radio':
				stateInputs.push(input);
				registerElement(input);
				break;
			case 'text':
			case 'hidden':
			case 'password':
				simpleInputs.push(input);
				registerElement(input);
				break;
			default:
				registerElement(input);
		}
	}
	inputs = pseudoFormElement.getElementsByTagName('textarea');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		simpleInputs.push(input);
		registerElement(input);
	}
	inputs = pseudoFormElement.getElementsByTagName('select');
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		dropdowns.push(input);
		registerElement(input);
	}
	inputs = pseudoFormElement.getElementsByTagName('button');
	for (var i = 0; i < inputs.length; i++)
		registerElement(inputs[i]);
}

// Copies attributes from one element to another. Copy should occur
// before destElement is added to the DOM, as some things become read-only.
// ID and CLASS need to be handled specially for compatiblity reasons.
// Warning: TYPE is not supported (blame IE)!
function cloneAttributes(srcElement, destElement) {
	var attr;
	for (var i = 0; i < srcElement.attributes.length; i++) {
		attr = srcElement.attributes[i];
		switch (attr.name.toLowerCase()) {
			case 'name':
				if ((attr.value + '').toLowerCase() == 'submit')
					destElement.setAttribute('name', 'submit_button');
				else
					destElement.setAttribute('name', attr.value);
				break;
			case 'class':
				destElement.className = attr.value;
				break;
			case 'id':
				destElement.id = attr.value;
				break;
			case 'type':
			case 'form':
				break;
			default:
						try { destElement.setAttribute(attr.name, attr.value); }
						catch (e) { }
		}
	}
}

// Called by pseudo-form when submit() is invoked.
function submitPseudoForm(pseudoFormElement, debugMode) {
	var inputs, input;
	var spawner = pseudoFormElement._submitter;
	var spawnerEvent = pseudoFormElement._submevent;
	pseudoFormElement._submitter = null;
	pseudoFormElement._submevent = null;

	// Destroy form if it already exists (possible if target not implicit/explicit "_self").
	if (pseudoFormElement._form != null)
		document.body.removeChild(pseudoFormElement._form);
	pseudoFormElement._form = null;

	// Fire pseudo-onsubmit event (remember that just like in real forms, only fires on non-J/S submits).
	var onsubmit = pseudoFormElement.getAttribute('onsubmit');
	if (onsubmit != null && onsubmit != '' && spawnerEvent) {
		eval("window.tmp = function(event) { " + onsubmit + " }");
		onsubmit = window.tmp;
		window.tmp = null;
		if (onsubmit(spawnerEvent) == false)
			return false;
	}

	// Create actual form to forward submission to.
	var newForm = document.createElement('form');
	pseudoFormElement._form = newForm;

	// Transfer some standard HTML/XHTML attributes.
	newForm.dir = pseudoFormElement.dir;
	newForm.lang = pseudoFormElement.lang;
	newForm.title = pseudoFormElement.title;

	// Setup actual form action, accept, accept-charset, encoding, method, and target.
	var action = pseudoFormElement.getAttribute('action');
	var method = pseudoFormElement.getAttribute('method');
	var target = pseudoFormElement.getAttribute('target');
	var enctype = pseudoFormElement.getAttribute('enctype');
	var accept = pseudoFormElement.getAttribute('accept');
	var acceptCharset = pseudoFormElement.getAttribute('accept-charset');
	if (action)
		newForm.action = action;
	if (method)
		newForm.method = method;
	if (target)
		newForm.target = target;
	if (enctype)
		newForm.enctype = enctype;
	if (accept)
		newForm.accept = accept;
	if (acceptCharset)
		newForm.acceptCharset = acceptCharset;

	// Method used to create hidden input copies.
	var newHiddenInput = function (name, value) {
		var ret = document.createElement('input');
		ret.type = 'hidden';
		ret.value = value;
		ret.name = name;
		newForm.appendChild(ret);
	}

	// Create element for spawner if one exists (submitted w/o JS, e.g. input.type=submit).
	if (spawner && spawner.name != null && spawner.name != '')
		newHiddenInput(spawner.name, spawner.value);

	// Forward text, textarea, hidden, and password input values.
	inputs = pseudoFormElement._simple;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none'))
			newHiddenInput(input.name, input.value);
	}

	// Forward checkbox and radio-button values.
	inputs = pseudoFormElement._state;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none')) {
			if (input.checked)
				newHiddenInput(input.name, input.value);
		}
	}

	// Forward drop-down/list selections.
	// Blame for text/value condition and necessity of options loop lies with IE.
	// 1) Specifically, IE 7  and IE 7 mode don't give the implicit value if it's left off.
	// 2) IE 8 should support retrieval of all values from the select.value prop, but doesn't.
	inputs = pseudoFormElement._dropdown;
	for (var i = 0; i < inputs.length; i++) {
		input = inputs[i];
		if ((!input.disabled) && (input.style.display != 'none')) {
			for (var j = 0; j < input.options.length; j++) {
				if (input.options[j].selected) {
					if (input.options[j].value == '')
						newHiddenInput(input.name, input.options[j].text);
					else
						newHiddenInput(input.name, input.options[j].value);
				}
			}
		}
	}

	document.body.appendChild(newForm);
	if (debugMode)
		alert(newForm.innerHTML);
	newForm.submit();
}
// END PSEUDO-FORMS CODE

function phoneStripFormatting(value) {
	/// <summary>Strips formatting characters (for display purposes only) from the NANP phone number given.</summary>
	/// <param name="value" type="String">Phone number.</summary>
	/// <returns type="String">Phone number with formatting cahracter removed.</returns>
	return (value + '').replace(/\(/g, '').replace(/\)/g, '').replace(/\s/g, '').replace(/\-/g, '');
}

function phoneReformat(value, delim) {
	/// <summary>Reformats a number for display purposes using delimiter specified.</summary>
	/// <param name="value" type="String">The phone number.</summary>
	/// <param name="delim" type="String">The delimiter used. If argument is not passed, a hyphen is used.</summary>
	/// <returns type="String">Reformatted phone number.</returns>
	value = phoneStripFormatting(value);

	if (delim == null)
		delim = '-';

	return value.substr(0, 3) + delim + value.substr(3, 3) + delim + value.substr(6)
}

function phoneObfuscate(value, secret, delim) {
	/// <summary>Reformats a number for display purposes, obfuscating the first 6 digits.</summary>
	/// <param name="value" type="String">The phone number.</summary>
	/// <param name="secret" type="String">The obfuscation character or string to use in place of a digit in the number. If argument is not pased, a asterisk is used.</summary>
	/// <param name="delim" type="String">The delimiter used. If argument is not passed, a hyphen is used.</summary>
	/// <returns type="String">Reformatted, obfuscated phone number.</returns>
	value = phoneStripFormatting(value);

	if (secret == null)
		secret = '*';

	if (delim == null)
		delim = '-';

	secret = secret + secret + secret + delim;
	return secret + secret + value.substr(6);
}

function phoneValidate(value, intCountryCode) {
	/// <summary>Validates that phone numbers appear to adhere to the NANP format (North American Numbering Plan).</summary>
	/// <remarks>
	/// Expects area code to be present, and no country code (e.g. 555-555-0123 is valid, 1-555-555-0123 is not).
	/// Does not validate that numbers are legal (e.g. area code 123 is invalid, area codes cannot begin with 1).
	/// </remarks>
	/// <param name="value" type="String">Phone number.</summary>
	/// <returns type="Boolean">Whether or not number passed a basic format validation.</returns>
	value = phoneStripFormatting(value);
	if (value.length == 10)
		return numbersOnly.test(value);
	else if (value.length == 8 && intCountryCode == 36) //For Australia
		return numbersOnly.test(value);
	else
		return false;
}

//gets the cookie, if it exists
function getCookieValue(cookiename) {
	var ck = document.cookie;
	var cn = cookiename + "=";
	var pos = ck.indexOf(cn);

	if (pos != -1) {
		var start = pos + cn.length;
		var end = ck.indexOf(";", start);
		if (end == -1) end = ck.length;
		var cookieValue = ck.substring(start, end);
		return (cookieValue);
	}

	return (null);
}

window['getCookieValue'] = getCookieValue;

function setCookieValue(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

//Gets no of days between 2 dates provided in a string format('mm/dd/yyyy')
function dayDifference(first, second) {
	return Math.floor((Date.parse(first) - Date.parse(second)) / 86400000);
}

// Returns whether or not file extension given is acceptable.
// Client-side version of FileSystemSafety.IsAllowedFileExtension().
function isAllowedFileExtensionWhiteList(ext) {

	// Check if the URL contains the string "Admin"
	const allowed = window.location.pathname.toLowerCase().startsWith("/admin") ? 1 : 0;

	if (!window.acceptedFileExtensions) {
		window.acceptedFileExtensions =
		{
			'.123': 1, '.3g2': 1, '.3gp': 1, '.3gp2': 1, '.7z': allowed, '.aac': 1, '.abw': 1, '.abx': 1, '.accdb': 1, '.accde': 1,
			'.accdr': 1, '.accdt': 1, '.accfl': 1, '.ace': allowed, '.ade': 1, '.adp': 1, '.aeh': 1, '.ai': 1, '.aif': 1, '.aiff': 1,
			'.amr': 1, '.apng': 1, '.arc': allowed, '.art': 1, '.asc': 1, '.asf': 1, '.asx': 1, '.atom': 1, '.au': 1, '.avi': 1,
			'.awt': 1, '.azw': 1, '.azw1': 1, '.b64': 1, '.backup': 1, '.bin': 1, '.bmp': 1, '.bz': 1, '.bz2': 1, '.bzip': 1,
			'.bzip2': allowed, '.cab': allowed, '.cad': 1, '.caf': 1, '.cal': 1, '.cgm': 1, '.crtx': 1, '.css': 1, '.csv': 1, '.cwk': 1, '.dap': 1, '.db': 1,
			'.dbf': 1, '.dcr': 1, '.dds': 1, '.dex': 1, '.dib': 1, '.dif': 1, '.diz': 1, '.dmg': 1, '.doc': 1, '.docm': 1,
			'.docx': 1, '.dot': 1, '.dotm': 1, '.dotx': 1, '.drw': 1, '.ds_store': 1, '.dv': 1, '.dvr-ms': 1, '.dwf': 1, '.dwg': 1,
			'.dxf': 1, '.emf': 1, '.eml': 1, '.emlx': 1, '.emz': 1, '.eot': 1, '.eps': 1, '.fbp': 1, '.fdp': 1, '.fhtml': 1,
			'.file': 1, '.flac': 1, '.flc': 1, '.fli': 1, '.flp': 1, '.flv': 1, '.fm': 1, '.fm2': 1, '.fm3': 1, '.fm5': 1,
			'.fmp': 1, '.fnt': 1, '.fon': 1, '.fp': 1, '.fp3': 1, '.fp5': 1, '.fp7': 1, '.fphtml': 1, '.fpt': 1, '.fpweb': 1,
			'.fpx': 1, '.gg': 1, '.gif': 1, '.gnumeric': 1, '.gra': 1, '.gsm': 1, '.gz': allowed, '.hdmov': 1, '.hdp': 1, '.hqx': 1,
			'.htm': 1, '.html': 1, '.ical': 1, '.icns': 1, '.ico': 1, '.ics': 1, '.ifo': 1, '.indd': 1, '.isf': 1, '.isu': 1,
			'.ivs': 1, '.jbf': 1, '.jfif': 1, '.jpe': 1, '.jpeg': 1, '.jpf': 1, '.jpg': 1, '.jxr': 1, '.key': 1, '.kml': 1, '.kmz': 1,
			'.knt': 1, '.kth': 1, '.lhz': 1, '.lit': 1, '.log': 1, '.lrc': 1, '.lrf': 1, '.lrx': 1, '.lst': 1, '.lyr': 1,
			'.m4a': 1, '.m4b': 1, '.m4p': 1, '.m4r': 1, '.mdb': 1, '.mde': 1, '.mht': 1, '.mhtml': 1, '.mid': 1, '.midi': 1,
			'.mim': 1, '.mix': 1, '.mng': 1, '.mobi': 1, '.mod': 1, '.moi': 1, '.mov': 1, '.movie': 1, '.mp3': 1, '.mp4': 1,
			'.mpa': 1, '.mpc': 1, '.mpe': 1, '.mpeg': 1, '.mpg': 1, '.mpv2': 1, '.msg': 1, '.mswmm': 1, '.mxd': 1, '.numbers': 1,
			'.odb': 1, '.odf': 1, '.odg': 1, '.ods': 1, '.odx': 1, '.ofm': 1, '.oft': 1, '.ogg': 1, '.ogm': 1, '.ogv': 1,
			'.one': 1, '.onepkg': 1, '.opx': 1, '.osis': 1, '.ost': 1, '.otf': 1, '.oth': 1, '.p65': 1, '.p7b': 1, '.pages': 1,
			'.pbm': 1, '.pcast': 1, '.pcf': 1, '.pcm': 1, '.pct': 1, '.pcx': 1, '.pdc': 1, '.pdd': 1, '.pdf': 1, '.pdp': 1,
			'.pfx': 1, '.pgf': 1, '.pic': 1, '.pict': 1, '.pkg': 1, '.pmd': 1, '.pmf': 1, '.png': 1, '.pot': 1, '.pothtml': 1,
			'.potm': 1, '.potx': 1, '.ppam': 1, '.pps': 1, '.ppsm': 1, '.ppsx': 1, '.ppt': 1, '.ppthtml': 1, '.pptm': 1, '.pptx': 1,
			'.prc': 1, '.ps': 1, '.psd': 1, '.psp': 1, '.pspimage': 1, '.pst': 1, '.pub': 1, '.pubhtml': 1, '.pubmhtml': 1, '.qbb': 1,
			'.qcp': 1, '.qt': 1, '.qxd': 1, '.qxp': 1, '.ra': 1, '.ram': 1, '.ramm': 1, '.rar': allowed, '.raw': 1, '.rax': 1,
			'.rm': 1, '.rmh': 1, '.rmi': 1, '.rmm': 1, '.rmvb': 1, '.rmx': 1, '.rp': 1, '.rss': 1, '.rt': 1, '.rtf': 1,
			'.rts': 1, '.rv': 1, '.sbx': 1, '.sdf': 1, '.sea': 1, '.shs': 1, '.sit': 1, '.sitx': 1, '.smil': 1, '.snapfireshow': 1,
			'.snp': 1, '.stc': 1, '.svg': 1, '.svgz': 1, '.swf': 1, '.sxc': 1, '.sxi': 1, '.tab': 1, '.tar': allowed, '.tex': 1,
			'.tga': 1, '.thmx': 1, '.tif': 1, '.tiff': 1, '.tpz': 1, '.tr': 1, '.trm': 1, '.tsv': 1, '.ttf': 1, '.txt': 1,
			'.uue': 1, '.vcf': 1, '.vob': 1, '.vrml': 1, '.vsc': 1, '.vsd': 1, '.wab': 1, '.wav': 1, '.wax': 1, '.wbk': 1,
			'.wbmp': 1, '.wdp': 1, '.webarchive': 1, '.webloc': 1, '.wk1': 1, '.wk3': 1, '.wm': 1, '.wma': 1, '.wmf': 1, '.wmmp': 1,
			'.wmv': 1, '.wmx': 1, '.wpd': 1, '.wps': 1, '.wri': 1, '.wvx': 1, '.xbm': 1, '.xcf': 1, '.xg0': 1, '.xg1': 1,
			'.xg2': 1, '.xg3': 1, '.xg4': 1, '.xht': 1, '.xhtm': 1, '.xhtml': 1, '.xif': 1, '.xlam': 1, '.xlb': 1, '.xlc': 1,
			'.xld': 1, '.xlk': 1, '.xlm': 1, '.xls': 1, '.xlsb': 1, '.xlshtml': 1, '.xlsm': 1, '.xlsmhtml': 1, '.xlsx': 1, '.xlt': 1,
			'.xlthtml': 1, '.xltm': 1, '.xltx': 1, '.xlv': 1, '.xlw': 1, '.xml': 1, '.xpi': 1, '.xps': 1, '.xsf': 1, '.xsn': 1,
			'.xtp': 1, '.zabw': 1, '.zip': allowed, '.zipx': allowed
		};
	}

	return (window.acceptedFileExtensions[(ext + '').toLowerCase()] === 1);
}

function handleServiceMethodError(error) {
	throw new Error('A server-side error occurred during the execution of an AJAX request (' +
		error.get_exceptionType() +
		')!\r\n\r\nAdditional Information:\r\n' +
		error.get_message() +
		'\r\n\r\nStack Trace:\r\n' +
		error.get_stackTrace().trim());
}

function toggleDisplay(elem) {
	elem.style.display =
		(elem.style.display == 'none' ? '' : 'none');
}

// BEGIN Old Character Counter
var APENDED_TEXT_LEN = typeof intCountryCode !== 'undefined' && intCountryCode === 840 && typeof FeatureToggles !== 'undefined' && FeatureToggles.isActive("CivicPlus.SendNotificationSmsViaCPNotify") ? 9 : 0;
var MAX_MESSAGE_SIZE_SMS = 160 - APENDED_TEXT_LEN;
var trackLengths = new Array();

function registerCharCounter(input, outputElemID, maxMessageSize) {
	var outputElem = document.getElementById(outputElemID);
	var id = input.id;
	var tracker;

	tracker = new Object();
	tracker.oldLength = -1;
	tracker.outputElem = outputElem;
	tracker.input = input;
	trackLengths[id] = tracker;

	setInterval(
		'var tracker = trackLengths[\'' + id + '\'];\r\n' +
		'var newLength = (tracker.input.value + \'\').length;\r\n' +
		'if (newLength != tracker.oldLength) {\r\n' +
		'	if (newLength > ' + maxMessageSize + ')' +
		'		tracker.outputElem.innerHTML = (newLength - ' + maxMessageSize + ') + " Characters Over";\r\n' +
		'	else\r\n' +
		'		tracker.outputElem.innerHTML = (' + maxMessageSize + ' - newLength) + " Characters Remaining";\r\n' +
		'	\r\n' +
		'	tracker.oldLength = newLength;\r\n' +
		'}\r\n', 100);
}
// END Old Character Counter

function elemInsideOrEq(elemFirst, elemSecond) {
	/// <summary>Gets whether or not second element specified is inside or is equal to first element.</summary>
	/// <param name="elemFirst" type="domElement">First element.</param>
	/// <param name="elemSecond" type="domElement">Second element.</param>
	if (elemFirst == elemSecond)
		return true;

	if (elemFirst && elemSecond) {
		elemSecond = elemSecond.parentNode;

		while (elemSecond != null) {
			if (elemSecond == elemFirst)
				return true;

			elemSecond = elemSecond.parentNode;
		}
	}

	return false;
}

// Do not use in new code. Use jQuery with event.preventDefault().
function hookAnchorClick(anchor, fn) {
	/// <summary>Hooks an anchor onclick and prevents default HREF behavior.</summary>
	/// <param name="anchor" type="domElement">The DOM element to attach the event handler for.</param>
	/// <param name="fn" type="Function">Function to be called when anchor is clicked. Should have sender and event argument, in that order.</param>
	var clickHandler = function (event) {
		var sender;

		if (window.event) {
			event = window.event;
			sender = event.srcElement;
		}
		else
			sender = event.target;

		fn(sender, event);

		if (event.stopPropagation)
			event.stopPropagation();
		else
			event.cancelBubble = true;

		return false;
	}

	// HACK: MSIE/Opera onclick fails to operate correctly.
	if (isie || isie8 || isie7 || isie6 || (document.documentMode < 8) || window.opera)
		anchor.onmousedown = clickHandler;
	else
		anchor.onclick = clickHandler;
}

// For ClientCharacterCounter control.
var registeredCounters = null;
function registerCounter(assocElem, counterElem, fmtStandard, fmtOver, maxChars) {
	if (assocElem == null || counterElem == null || maxChars == null || fmtStandard == null || fmtOver == null)
		return;

	if (registeredCounters == null) {
		registeredCounters = [];

		setInterval(function () {
			for (var i = 0, l = registeredCounters.length; i < l; i++) {
				if (registeredCounters[i].counter && registeredCounters[i].input) {
					var len;
					if (typeof registeredCounters[i].input.value === 'undefined')
						len = registeredCounters[i].input.val().length;
					else
						len = registeredCounters[i].input.value.length;
					var prevLen = registeredCounters[i].prevLen;

					if (len == prevLen)
						continue;
					else {
						registeredCounters[i].prevLen = len;

						var max = registeredCounters[i].maxChars;
						var numToDisplay = max - len;

						var fmtToUse = (numToDisplay >= 0
							? registeredCounters[i].fmtStandard
							: registeredCounters[i].fmtOver);

						if (numToDisplay >= 0)
							registeredCounters[i].counter.className = 'counterUnderLimit';
						else
							registeredCounters[i].counter.className = 'counterOverLimit';

						numToDisplay = Math.abs(numToDisplay);

						registeredCounters[i].counter.innerHTML = fmtToUse
							.replace(/\{0\}/g, numToDisplay)
							.replace(/\{1\}/g, (numToDisplay == 1 ? '' : 's'));
					}
				}
			}
		}, 100);
	}

	registeredCounters.push({
		"fmtStandard": fmtStandard,
		"fmtOver": fmtOver,
		"counter": counterElem,
		"input": assocElem,
		"prevLen": -1,
		"maxChars": maxChars
	});
}

// Detects if nextElementSibling/previousElementSibling are present.
function detectElementSiblingSupport() {
	var p = document.createElement('div');
	var c1 = document.createElement('div');
	var c2 = document.createElement('div');

	p.appendChild(c1);
	p.appendChild(c2);

	return (c1.nextElementSibling != null);
}

// Gets next sibling element. Version for browsers missing nextElementSibling DOM property.
function nextElementSibling(elem) {
	elem = elem.nextSibling;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.nextSibling;
	}

	return null;
}

// Gets previous sibling element. Version for browsers missing previousElementSibling DOM property.
function previousElementSibling(elem) {
	elem = elem.previousSibling;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.previousSibling;
	}

	return null;
}

// Gets first child element. Version for browsers missing firstElementChild DOM property.
function firstElementChild(elem) {
	elem = elem.firstChild;

	while (elem != null) {
		if (elem.nodeType == 1)
			return elem;

		elem = elem.nextSibling;
	}

	return null;
}

if (detectElementSiblingSupport()) {
	// If browsers support built-in DOM properties, just use those.
	nextElementSibling = function (elem) { return elem.nextElementSibling; }
	previousElementSibling = function (elem) { return elem.previousElementSibling; }
	firstElementChild = function (elem) { return elem.firstElementChild; }
}

function haltEvent(event, windowEvent) {
	if (windowEvent & !window.opera)
		windowEvent.cancelBubble();
	else {
		if (event.stopPropagation)
			event.stopPropagation();

		if (event.preventDefault)
			event.preventDefault();
	}
}

// Gets absolute left offset.
function absoluteOffsetLeft(oElem) {
	var oLeft = 0;

	while (oElem != null) {
		oLeft += oElem.offsetLeft;
		oElem = oElem.offsetParent;
	}

	return oLeft;
}

function imposeMaxLength(e, Object, MaxLen) {
	//Truncate to maximum length
	if (Object.value.length > MaxLen)
		Object.value = Object.value.substring(0, MaxLen);

	//ALLOW:        BACKSPACE           DELETE                  LEFT ARROW              UP ARROW            RIGHT ARROW             DOWN ARROW
	if ((e.keyCode == '8') || (e.keyCode == '46') || (e.keyCode == '37') || (e.keyCode == '38') || (e.keyCode == '39') || (e.keyCode == '40'))
		return true;

	return (Object.value.length <= MaxLen);
}

function checkURL(val, showAlert) {
	val = TrimString(val);
	if (val != '' && (val.substr(0, 7) != 'http://' && val.substr(0, 8) != 'https://' && val.substr(0, 6) != 'ftp://' && val.substr(0, 1) != '/')) {
		if (arguments.length == 1 || showAlert)
			alert('All URLs must begin with http:// or https:// or ftp://.\nAll internal links must start with a /.');

		return false;
	}
	return true;
}

function toSQLSafe(formvar) {
	var s = String(formvar);
	s = (s.replace(/'/gi, "&#39")).replace(/"/gi, "&#34");
	return s;
}

function cancelFE(needsConfirm) {
	if (needsConfirm) {
		if (!confirm("You will discard any unsaved changes. Do you want to proceed?"))
			return;
	}
	window.parent.closeModalDialog('editItemBehavior');
	return false;
}

function getThumbNailPath(path, width, height) {
	var lastSlashPos = path.lastIndexOf('/');
	var filename = path.substr(lastSlashPos + 1);
	var directory = path.substr(0, lastSlashPos);
	var lastDotPos = filename.lastIndexOf('.');
	var filenameWithOutExtension = filename.substr(0, lastDotPos)
	var fileExtension = filename.substr(lastDotPos)
	return directory + "/ThumbNails/" + filenameWithOutExtension + "_" + width + "x" + height + "_thumb" + fileExtension;
}

function measureHtml(html, fontStyle) {
	var tmp = document.createElement('span');
	tmp.style.display = 'inline';
	tmp.style.position = 'absolute';
	tmp.style.top = '-1000px';
	tmp.style.left = '-1000px';
	tmp.style.font = fontStyle;
	tmp.innerHTML = html;

	document.body.appendChild(tmp);
	var retVal = { width: tmp.clientWidth, height: tmp.clientHeight };
	document.body.removeChild(tmp);

	return retVal;
}

function fileValidateError(errorType) {
	if (errorType == 1)
		alert("A file you tried to upload was not of a permitted type. Only *.jpeg, *.jpg, *.gif, *.png, *.bmp are allowed");
	else
		alert("You have an invalid character in your filename. These are the accepted characters: a-z 0-9 ~ !( ) - + = [ ] { } , . $");
}

function getNumericThousandsSeparator() {
	var dummy = new Number(11111111);
	var thousandSep = dummy.toLocaleString().replace(/1/g, '');
	return (thousandSep.length > 0 ? thousandSep.charAt(0) : ',');
}

function getNumericDecimalSeparator() {
	var dummy = new Number(1.1);
	var thousandSep = dummy.toLocaleString().replace(/1/g, '');
	return (thousandSep.length > 0 ? thousandSep.charAt(0) : '.');
}

function JSSafe(txtString) {
	var myRegExp = new RegExp("'", "g");
	return (txtString).replace(myRegExp, "\\'");
}


function ChangeDateFormat(elem) {
	if (elem.value != "") {
		var Error = false;
		var dateSplit = (elem.value).split("/");

		if (dateSplit.length == 3) {
			if (dateSplit[0] <= 12 && dateSplit[1] <= 31) {
				var d = new Date(elem.value);
				var currentDate = new Date();

				var selectedDate = d.getDate();
				var selectedMonth = d.getMonth();
				var SelectedYear = d.getFullYear();

				if (isNaN(selectedDate))
					Error = true;
				else if (isNaN(selectedDate))
					Error = true;
				else if (isNaN(selectedDate))
					Error = true;
				if (Error == false) {
					if (selectedDate.toString().length == 1)
						selectedDate = '0' + selectedDate;

					selectedMonth++;

					if (selectedMonth.toString().length == 1)
						selectedMonth = '0' + selectedMonth;

					currentYear = currentDate.getFullYear();

					if (SelectedYear.toString().substr(0, 2) < 20)
						SelectedYear = currentYear;
					elem.value = selectedMonth + '/' + selectedDate + '/' + SelectedYear;
				}
			}
			else
				Error = true;
		}
		else
			Error = true;

		if (Error == true) {
			alert('Date should be in the format MM/DD/YYY');
			elem.value = "";
		}
	}
}

function ChangeDateFormatNew(elem) {
	return isDateNew(elem.value);
}

function isSilverlightInstalled() {
	var isSilverlightInstalled = false;
	try {
		//check on IE
		try {
			var slControl = new ActiveXObject('AgControl.AgControl');
			isSilverlightInstalled = true;
			isSilverlightInstalled = true;
		}
		catch (e) {
			//either not installed or not IE. Check Firefox.
			if (navigator.plugins["Silverlight Plug-In"]) {
				isSilverlightInstalled = true;
			}
		}
	}
	catch (e) {
		//we don't want to leak exceptions. However, you may want
		//to add exception tracking code here.
	}
	return isSilverlightInstalled;
}

function setModalClass(cssClass, behaviorID) {
	var modalContainer = document.getElementById(behaviorID._PopupControlID);

	if (modalContainer)
		modalContainer.className = 'modalContainer modalContainerCP ' + cssClass;
}

function setModalClassFE(cssClass, behaviorID) {
	var modalContainer = document.getElementById(behaviorID._PopupControlID);

	if (modalContainer)
		modalContainer.className = 'modalContainer ' + cssClass;
}

//------------------- Copy Link ---------------------//
function showCopyLinkWindow(relatedLink, absoluteAddress, behavior, ifrID) {
	if (behavior) {
		setModalClass('modalCopyLink', behavior);
		var iFrame = document.getElementById(ifrID);
		iFrame.src = '/common/admin/CopyLink.aspx?relatedLink=' + encodeURIComponent(relatedLink) + '&absoluteAddress=' + encodeURIComponent(absoluteAddress);
		iFrame.style.display = 'block';
		behavior.show();
	} else {
		openCpModal({
			title: 'Copy Link',
			className: 'modalCopyLink',
			isFrontEnd: false,
			useIframe: true,
			url: '/common/admin/CopyLink.aspx?relatedLink=' + encodeURIComponent(relatedLink) + '&absoluteAddress=' + encodeURIComponent(absoluteAddress)
		});
	}
}

function showCopyLinkWindowUsingAddress(absoluteAddress) {
	var relatedUrl = absoluteAddress.replace(window.location.host, '');
	relatedUrl = relatedUrl.replace(window.location.protocol + '//', '');

	var behavior = $find('copyLinkBehavior');
	if (behavior)
		showCopyLinkWindow(relatedUrl, absoluteAddress, behavior, 'copyLinkDialog');
	else
		showCopyLinkWindow(relatedUrl, absoluteAddress, $find('editItemBehavior'), 'liveEditDialog');
}

function showCopyLinkWindowUsingRelatedLink(relatedUrl) {
	var absoluteUrl = window.location.protocol + '//' + window.location.host + relatedUrl;

	var behavior = $find('copyLinkBehavior');
	if (behavior)
		showCopyLinkWindow(relatedUrl, absoluteUrl, behavior, 'copyLinkDialog');
	else
		showCopyLinkWindow(relatedUrl, absoluteUrl, $find('editItemBehavior'), 'liveEditDialog');
}

function closeCopyModal() {
	var behavior = $find('copyLinkBehavior');
	if (behavior)
		behavior.hide();
	else {
		behavior = $find('editItemBehavior');
		if (behavior)
			behavior.hide();
		else
			closeCpModal();
	}
}
//------------------- Copy Link End---------------------//

//Parses the query string for the specified paramter and returns the value
//Returns "" if the parameter is not found
function GetQueryStringParameter(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

function setModalTitle(title, behaviorID) {
	if (behaviorID) {
		$('#' + behaviorID._PopupControlID).find('.modalTitle').text(title);
	}
	else {
		//if behaviorID is not provided, do the same as setModalTitle on FrontEnd.js
		var titleElem = document.getElementById('ctl00_LiveEditModalTitle');

		if (titleElem == null)
			titleElem = document.getElementById('ctl00_ct100_LiveEditModalTitle');

		if (titleElem == null)
			titleElem = document.getElementById('ctl00_ctl00_NotifyMeModalTitle');

		if (titleElem)
			titleElem.innerHTML = title;
	}
}

//------------------- Copy Link End---------------------//

function isNull(object, replacement) {
	return object == null ? replacement : object;
}

// Validates domain of email with service (ensures MX record present, DNS name valid, acceptable format).
// The callbacks object should contain the following methods:
// * badFormat - Email format invalid. Will also be thrown for null/empty email addresses.
// * mxMissing - MX record missing for the domain.
// * dnsError - A DNS error occurred (domain invalid, invalid characters in domain, etc).
// * success - The email appears to be valid.
function validateEmailDomain(emailAddress, callbacks) {
	$.ajax({
		type: "POST",
		url: "/Services/ValidateEmail.ashx",
		data: { email: emailAddress },
		success: function (data, textStatus, jqXHR) {
			switch (data.d) {
				case 1:
					callbacks.badFormat(emailAddress);
					break;
				case 2:
					callbacks.mxMissing(emailAddress);
					break;
				case 3:
					callbacks.dnsError(emailAddress);
					break;
				case 0:
				default:
					callbacks.success(emailAddress);
					break;
			}
		}
	});
}

//Called when opening action menu.
function openPopUp(id, event) {
	var $popUp = $(document.getElementById(id));

	if ($popUp.hasClass('popped')) {
		//do not do anything if popup is already open.
		return false;
	}

	//Hide all popups already open if nesessary.
	$('.popUp').fadeOut(200).removeClass('popped');
	$('.popUpParent').removeClass('popped');

	//Open popup
	$popUp.fadeIn(200);
	$popUp.addClass('popped');
	$popUp.parents('.popUpParent').addClass('popped');

	//prevent triggering any other event.
	if (window.event)
		window.event.cancelBubble = true;
	else
		event.stopPropagation();
}

function SignIn() {
	window.location.href = '/MyAccount?from=url&url=' + window.location.pathname + window.location.search;
}

function SignOut() {
	window.location.href = '/publiclogin.aspx?out=true&txtRedirect=' + window.location.pathname.substring(1) + window.location.search;
}

function removeIEParagraphs(editor) {
	editor.attachEventHandler("onkeyup", function (e) {
		if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 13) {
			var result = '';
			var re = new RegExp("<[P]>&nbsp;<\\/[P]>", "gi");

			var m = re.exec(editor.get_html(true));

			if (m == null) {
				return;
			} else {
				result = editor.get_html(true).replace(re, '<BR>');
				editor.set_html(result);
			}
		}
	});
}

//To toggle the slide show and image manger menu items based on if the img is a from a slide show or not.
function setMenuItems(editor) {
	var contextMenu = editor.getContextMenuByTagName("IMG");
	if (!contextMenu) return;

	//Attach to the context menu show event, obtain editor selection and determine which tools to show
	contextMenu.add_show(function () {
		//Must be an image, the context menu would not fire
		var sel = editor.getSelectedElement();

		//An array of menu item objects
		var menuItems = contextMenu.get_items();
		var menuItem = null;

		//reset to show all and then disable the menu item based on currently selection
		for (i = 0; i < menuItems.length; i++) {
			menuItems[i].get_element().style.display = "";
			menuItems[i].get_element().parentNode.style.display = "";
		} //end for

		if (sel.getAttribute("slideshowimage")) {
			menuItem = menuItems[menuItems.length - 3];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";

			menuItem = menuItems[menuItems.length - 2];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";
		} else {
			menuItem = menuItems[menuItems.length - 1];
			menuItem.get_element().style.display = "none";
			menuItem.get_element().parentNode.style.display = "none";
		}
	});
}

function integersOnly(e, input) {
	var charCode = (e.which) ? e.which : e.keyCode;

	var keyChar = String.fromCharCode(charCode);
	var currentValue = $(input).val();
	var allowNegativeSign = !$(input).hasClass("positive") && currentValue.indexOf('-') == -1 && (currentValue.length == 0 || currentValue == window.getSelection().toString());
	if (keyChar == '-' && allowNegativeSign)
		return true;

	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}

function decimalOnly(e, input, skipSelected) {
	skipSelected = (skipSelected == undefined || skipSelected == null) ? false : skipSelected;

	var charCode = (e.which) ? e.which : e.keyCode;

	var keyChar = String.fromCharCode(charCode);
	var currentValue = $(input).val();
	var hasDecimalPoint = currentValue.indexOf('.') != -1;
	if ((keyChar == '.' && !hasDecimalPoint))
		return true;

	if (!skipSelected && isTextSelected(input))
		return true;

	return integersOnly(e, input);
}

function isTextSelected(input) {
	if (typeof input.selectionStart == "number") {
		return input.selectionStart == 0 && input.selectionEnd == input.value.length;
	} else if (typeof document.selection != "undefined") {
		input.focus();
		return document.selection.createRange().text == input.value;
	}
}

function validFileName(e) {
	var charCode = (e.which) ? e.which : e.keyCode;
	var keyChar = String.fromCharCode(charCode);
	var invalidCharacters = "\\/:*?\"<>|',";

	return invalidCharacters.indexOf(keyChar) < 0;
}

function isValidURL(value) {
	return /^(https?:\/\/|ftp:\/\/|\/).+/i.test(value);
}
function isValidAbsoluteURL(value) {
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

function validateLink(link) {
	if (link != '') {
		if ((link.indexOf('http://') == -1) &&
		 (link.indexOf('https://') == -1) &&
		 (link.substr(0, 1) != '/')) {
			return false;
		}
	}
	return true;
}

// Check if string is a whole number(digits only).
function isWholeNumber(val) {
	return String(val).search(/^(([1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))$/) != -1;
}

// Checks that an input string is a decimal number
function isDecimalOrZero(val) {
	isDecimal_re = /^\d{1,5}(\.\d{1,2})?$/;
	return String(val).search(isDecimal_re) != -1;
}

//Allows login to CPC
function RebuildCSS(menu) {
	if (confirm('This will take some time\nand the site may look funny during the process.\nAre you sure?')) {
		var frmARC = document.forms.frmAdminRebuldCSS;
		frmARC.ysnNeedInclude.value = '1';
		frmARC.intMenu.value = menu;
		frmARC.submit();
	}
}

//Allows login to CPC
function adminGetHelp(helpUrl, newWindow) {
	var cpcDomain = $('#cpcDomain').val();
	if (cpcDomain.indexOf('https://') == -1)
		cpcDomain = 'https://' + cpcDomain
	document.cpconnect.action = cpcDomain + '/MyAccount?from=url&url=' + helpUrl;
	cpconnecttLogin();
}

function connectCPC() {
	var cpcDomain = $('#cpcDomain').val();
	if (cpcDomain.indexOf('https://') == -1)
		cpcDomain = 'https://' + cpcDomain
	document.cpconnect.action = cpcDomain + '/MyAccount';
	var ifr = document.createElement('iframe');
	ifr.name = "submitCPCFrame";
	ifr.id = "submitCPCFrame";
	ifr.style.display = 'none';
	var frm = $(document.cpconnect).clone().get(0);
	frm.name = "iframeCPCConnect"
	frm.target = 'submitCPCFrame';
	ifr.appendChild(frm);
	document.body.appendChild(ifr);
	frm.submit();
}

function showFeatureNotAvailablePopup(hypothesisID) {
	var data = {
		id: hypothesisID
	};

	$('.emailPage').removeClass('emailPage');

	$.ajax({
		url: '/FeatureNotAvailable/Popup',
		type: 'GET',
		data: {
			hypothesisID: hypothesisID
		},
		cache: false,
		success: function (response) {
			if (response.action == 'modal') {
				openCpModal({
					title: 'Feature Not Yet Available',
					className: 'featureNotAvailableModal moduleContentNew modalContainer',
					htmlContent: response.html,
					autoAdjust: true,
					isFrontEnd: true,
					elementID: 'featureNotAvailableModal'
				});
			} else {
				window.location = '/FeatureNotAvailable?hypothesisID='
                    + hypothesisID
                    + '&referrerUrl=' + window.location;
			}
		},
		beforeSend: function () {
			ajaxPostBackStart('Loading');
		},
		complete: function () {
			ajaxPostBackEnd();
		}
	});
}

function getDateFormat() {
	if (!gDateFormat) {
		$.ajax({
			url: "/GetDateFormat",
			type: "GET",
			success: function (response) {
				if (response.DateFormat)
					gDateFormat = response.DateFormat;
			},
			error: function (xhr, textStatus, exception) {
				gDateFormat = "MM/dd/yyyy";
			},
			async: false
		});
	}

	return gDateFormat == null ? "MM/dd/yyyy" : gDateFormat;	

}

function getdDateFormat() {
	var dateFormat;

	$.ajax({
		url: '/Utility/GetdDateFormat',
		async: false,
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			dateFormat = data.dateFormat;
		},
		error: function (jqXHR, textStatus, errorThrown) {
			dateFormat = "mm/dd/yyyy";
		}
	});

	return dateFormat;
}

function getDateFromInput(datePickerID, keepDayBeforeMonth) {
	var datePicker = $(datePickerID);
	var date;
	var dateFormat = keepDayBeforeMonth ? getDateFormat() : "mm/dd/yyyy";
	//See if datepicker if so becuase of UK format we cannot just grab the value
	if (!isNaN(datePicker.data('tDatePicker')) && datePicker.data('tDatePicker') && datePicker.data('tDatePicker').value()) {
	    var dateValTmp = new dateValidator();
		date = dateValTmp.format(dateFormat,new Date(datePicker.data('tDatePicker').value()));
	} else {
		if (datePicker.val()) {
			var dayBeforeMonthOn = getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy" ? true : false;
			//Check if valid date before trying to format            			
			var dateString = checkDateFormatReturnUSString(datePicker.val(), dayBeforeMonthOn);
			var dateVal = new dateValidator();
			if (dateVal.dateValidateNew(dateString, false)) {
				date = dateVal.format(dateFormat,new Date(checkDateFormatReturnUSString(dateString, false)));
			} else {
				//Send the date string formatted eventhough invalid date. Allow date validation to return approiate error
				if (keepDayBeforeMonth) {
					date = dateString;
				} else {
					date = checkDateFormatReturnUSString(dateString, true);
				}
			}
		}
	}
	return date;
}

function formatUkDateReturnUSString(dateStr, isForce) {
	var retVal;
	if (isForce || getDateFormat().toLocaleLowerCase() == "dd/mm/yyyy") {
		dateStr = dateStr.replace(/\-/g, '/');
		dateStr = dateStr.split("/");
		retVal = dateStr[1] + "/" + dateStr[0] + "/" + dateStr[2];
	} else {
		retVal = dateStr;
	}
	return retVal;
}

function formatRFC3339DateReturnString(dateStr, keepDayBeforeMonth) {
	var retVal;
	var dateStrMod = dateStr.replace(/\-/g, '/');
	dateStrMod = dateStr.split("/");
	if (dateStrMod.length == 3 && dateStrMod[0].length == 4) {
		if (keepDayBeforeMonth && getDateFormat().toLowerCase() == "dd/mm/yyyy") {
			retVal = dateStrMod[2] + "/" + dateStrMod[1] + "/" + dateStrMod[0];
        } else {
			retVal = dateStrMod[1] + "/" + dateStrMod[2] + "/" + dateStrMod[0];
		}
	} else {
		retVal = dateStr;
	}
	return retVal;
}

function checkDateFormatReturnUSString(dateStr, keepDayBeforeMonth) {
	var retVal;
	if (dateStr) {
		var splitDate = dateStr;
		dateStr = dateStr.replace(/\-/g, '/');
		splitDate = dateStr.split("/");
		if (splitDate.length == 3) {
			if (splitDate[0].length == 4) {
				retVal = formatRFC3339DateReturnString(dateStr, keepDayBeforeMonth);
			} else if (keepDayBeforeMonth) {
				retVal = dateStr;
			} else {
				var dateVal = new dateValidator();
				retVal = formatUkDateReturnUSString(dateVal.cleanDate(dateStr));
			}
		} else {
			retVal = dateStr;
		}
	}
	return retVal;
}

//IE no longer displays as IE by design code to determin if it is IE11
function isIE11() {
	var trident = !!navigator.userAgent.match(/Trident\/7.0/);
	var net = !!navigator.userAgent.match(/.NET4.0E/);
	return trident && net;
}

function isValidUrl(url) {
	return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

function isValidAbsoluteUrl(value) {
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}

//Replaces the given tag with the tag to replace inside the element for all occurences of the tag within the element.
//$element - The element to perform the replace to
//tagToReplace - Tag to be replaced replace provided as string, ex: "i", "b", "strong" etc
//tagToReplaceWith - Tag to replace with, provided as string, ex: "i", "b", "strong" etc
function replaceTag($element, tagToReplace, tagToReplaceWith) {
    var $tagElemsToReplace = $element.find(tagToReplace);
    $tagElemsToReplace.each(function () {
        var $tagElem = $(this);
        var tagElemeHtml = $tagElem.html();
        $tagElem.replaceWith('<' + tagToReplaceWith + '>' + tagElemeHtml + '</' + tagToReplaceWith + '>');        
    });
}

window.addEventListener("load", function () {
	if (MutationObserver != null) {
		if ($('.contentContainerOld').length > 0 && ($('.spellchecker').length > 0 || $('[id^="DialogOpener"]').length > 0)) {
			var observer = new MutationObserver(function moveTelerikModalOverlay(mutations) {
				mutations.forEach(function (mutation) {
					if (!mutation.addedNodes) return;

					for (var i = 0; i < mutation.addedNodes.length; i++) {
						// do things to your newly added nodes here
						var node = mutation.addedNodes[i];

						if (node.classList != null && node.classList.contains("TelerikModalOverlay")) {
							$('.contentContainerOld').after(node);
						}
					}
				});
			});

			observer.observe(document.getElementsByClassName('contentContainerOld')[0], {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
		}
	}
});

if (!Array.prototype.includes) {
	Array.prototype.includes = function (searchElement) {
		'use strict';
		if (this == null) {
			throw new TypeError('Array.prototype.includes called on null or undefined');
		}

		var O = Object(this);
		var len = parseInt(O.length, 10) || 0;
		if (len === 0) {
			return false;
		}
		var n = parseInt(arguments[1], 10) || 0;
		var k;
		if (n >= 0) {
			k = n;
		} else {
			k = len + n;
			if (k < 0) { k = 0; }
		}
		var currentElement;
		while (k < len) {
			currentElement = O[k];
			if (searchElement === currentElement ||
			   (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
				return true;
			}
			k++;
		}
		return false;
	};
}

function isMsie() {
	ua = navigator.userAgent;
	/* MSIE used to detect old browsers and Trident used to newer ones*/
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

	return is_ie;
}

function isMozilla() {
	return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

function browserVersion() {
	ua = navigator.userAgent;
	var browserVersion = null;
	var verOffset = null;
	if (isMsie()) {
		verOffset = ua.indexOf("rv:");
		browserVersion = ua.slice(verOffset + 3).slice(0, 4);
	}
	else if (isMozilla()) {
		verOffset = ua.indexOf("Firefox")
		browserVersion=  ua.substring(verOffset + 8)
	}
	return browserVersion;
}

function setDatepickerHighlightedDate(date, datePickerId) {
	var dateFormat = getdDateFormat();
	var momentDate = moment(date, dateFormat.toUpperCase()).format('MM/DD/YYYY');
	if (momentDate.toLowerCase() !== "invalid date") {
		$('#' + datePickerId).pickadate('picker').set('highlight', date, { format: dateFormat });
	}
}
;
/// <reference path="../../Common/Controls/jquery-ui/js/jquery.ui.core.js" />
if (!window.Core) {
	window.Core = new CoreNamespace();
}

function AJAX(url, type, json, callBack, showLoadingMessage, contentType, forceCallBack, suppressErrorMessage) {
	contentType = contentType || 'application/x-www-form-urlencoded; charset=UTF-8';
	showLoadingMessage = showLoadingMessage == null ? true : showLoadingMessage;
	forceCallBack = forceCallBack == null ? false : forceCallBack;
	if (typeof (suppressErrorMessage) === 'undefined') suppressErrorMessage = false;
	$.ajax({
		url: url,
		type: type,
		contentType: contentType,
		data: json,
		success: function (response) {
			if (response.ErrorMessage && !forceCallBack) {
				if (response.ErrorMessage.indexOf('You do not have permission to perform this action.') != -1 && !isUserLoggedIn()) { // 079B4F43 
					alert('You are not logged in. Please login to continue.');
					location.href = '/myaccount?from=url&url=' + window.location.pathname;
				} else {
					alert(response.ErrorMessage);
				}
			}
			else if (response.RedirectURL && !forceCallBack)
				window.location.href = response.RedirectURL;
			else if (callBack)
				callBack(response);
		},
		beforeSend: function () {
			if (showLoadingMessage) {
				ajaxPostBackStart('Loading');
			}
		},
		complete: function () {
			if (showLoadingMessage) {
				ajaxPostBackEnd();
			}
		},
		error: function (xhr, textStatus, exception) {
			if (!suppressErrorMessage) {
				alert('Error: ' + xhr.statusText + '\nStatus: ' + xhr.status);
			}
		}
	});
}

function isUserLoggedIn() {
	var result = true; // if there is an error lets not show the login message.
	$.ajaxSetup({ async: false, ignoreEditor: true });
	$.post('/Utility/IsUserLoggedIn', function (data) {
		result = data;
	});
	$.ajaxSetup({ async: true, ignoreEditor: false });
	return result;
}

///Method to pause a javascript execution for x seconds, works like sleep(). VB
function sleep(seconds) {
	var max_sec = new Date().getTime();
	while (new Date() < max_sec + seconds * 1000) { }
	return true;
}

if (!String.prototype.format) {
	String.prototype.format = function () {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function (match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

if (!String.prototype.isNullOrWhiteSpace) {
	String.prototype.isNullOrWhiteSpace = function () {
		return this == null || this.trim() == '';
	};
}

function isValidMoney(value) {
	var isValid = false;
	if (value && value != '')
		isValid = /^\$?\s*\d+(,\d{3})*(\.\d{1,2})?$/.test(value);
	return isValid;
};

if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) == str;
	};
}

String.prototype.format = String.prototype.f = function () {
	var s = this,
		i = arguments.length;

	while (i--) {
		s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
	}
	return s;
};

//Creates a javascript namespace, if one already exists, just returns that namespace.
function createNamespace(namespaceString) {
	var parts = namespaceString.split('.'),
		parent = window,
		currentPart = '',
		nsLength = parts.length;

	for (var i = 0, length = nsLength; i < length; i++) {
		currentPart = parts[i];
		parent[currentPart] = parent[currentPart] || {};
		parent = parent[currentPart];
	}
	return parent;
}
$(function () {

	// Ensures a dependency exists. If it doesn't acquire it.
	function ensure(dependencyExists, dependencyUrl, onceItExistsCallback) {
		if (dependencyExists) {
			onceItExistsCallback();
			return;
		}
		$.getScript(dependencyUrl, onceItExistsCallback);
	}

	var ajaxControlToolkit = window.AjaxControlToolkit;
	// This is hack override in order to fix problems with Ajax Toolkit Drag and Drop in newer browsers. It substitutes in jQuery Draggable if it is available.
	// A more proper fix is ideal, but extremely expensive as it would require replacing over a hundred instances of invocations of the old modal.
	// There isn't a clean way to integrate in the new modal system. JE
	// https://system.netsuite.com/app/crm/support/issuedb/issue.nl?id=3809568&l=T
	if (ajaxControlToolkit && ajaxControlToolkit.ModalPopupBehavior) {
		ajaxControlToolkit.ModalPopupBehavior.prototype._attachPopup = function () {
			/// <summary>
			/// Attach the event handlers for the popup
			/// </summary>

			if (this._DropShadow && !this._dropShadowBehavior) {
				this._dropShadowBehavior = $create(ajaxControlToolkit.DropShadowBehavior, {}, null, null, this._popupElement);
			}

			var _this = this;
			// Drag and Drop Replacement. Acquire any dependencies on the fly.
			ensure($.ui, "/Common/Controls/jquery-ui/js/jquery.ui.core.min.js", function () { // I
				ensure($.widget, "/Common/Controls/jquery-ui/js/jquery.ui.widget.min.js", function () { // callbacks
					ensure($.ui.mouse, "/Common/Controls/jquery-ui/js/jquery.ui.mouse.min.js", function () { // love
						ensure($.fn.draggable, '/Common/Controls/jquery-ui/js/jquery.ui.draggable.min.js', function () {
							$("#" + _this._PopupControlID).draggable({ handle: '#' + _this._PopupDragHandleControlID }); // Subsitution over original Ajax Toolkit Drag and Drop code.
							$("#" + _this._PopupDragHandleControlID).css('cursor', 'move'); // Let's go ahead and fix the move handle while we are at it.
						});
					});
				});
			});

			$addHandler(window, 'resize', this._resizeHandler);
			$addHandler(window, 'scroll', this._scrollHandler);
			this._windowHandlersAttached = true;
		}
	}
});

String.prototype.replaceAll = function (search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

function executeViewMapPostClickActions($element) {
	//Hide the view map element post click(to avoid clicking repeatedly)
	$element.hide('fast');
	
	//Collect analytics around map clicks
	var url = '/CollectGoogleMapClicks/Execute';
	var moduleId = $element.data('moduleid');
	$.ajax({
		url: url,
		type: 'POST',
		data: {
			url: window.location.href,
			moduleId: moduleId
		},
		success: function (json) {
			//send data to telemetry
			appInsights.trackEvent("googlemapclicked", json);
		},
		error: function (xhr, textStatus, exception) {
			alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
		}
	});
}

function importModal(options) {
	if (window.ImportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ImportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ImportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ImportModalInstance.init(options);
}

function exportModal(options) {
	if (window.ExportModalInstance === undefined) {
		var script = document.createElement("script");
		script.onload = function () {
			window.ExportModalInstance.init(options);
		};
		script.src = "/Assets/Scripts/ExportModal.js";
		document.head.appendChild(script);
	}
	else
		window.ExportModalInstance.init(options);
}

document.addEventListener("DOMContentLoaded", function () {
	var modal = document.querySelector(".importModal");
	if (modal !== null) {
		try {
			if (!modal.classList.contains("processed")) {
				var options = modal.dataset.importconfig;
				if (options) {
					modal.addEventListener("click",
						function (e) {
							e.preventDefault();
							importModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modal.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize import modal");
		}
	}
	var modalExport = document.querySelector(".exportModal");
	if (modalExport !== null) {
		try {
			if (!modalExport.classList.contains("processed")) {
				var options = modalExport.dataset.exportconfig;
				if (options) {
					modalExport.addEventListener("click",
						function (e) {
							e.preventDefault();
							exportModal(JSON.parse(options));
						});
					//Avoid further processing if the event gets triggered multiple times during page load
					modalExport.classList.add("processed");
				}
			}
		} catch (err) {
			console.error("Unable to initialize export modal");
		}
	}
});


;
$(document).ready(function () {
	if (window.isResponsiveEnabled && !window.pageHandleResponsive) {
		function executeRWDResizeEvents(event) {
			var listener = function (e) {
				if ($('#hdnPageID').length == 0) {
					var breakpointWidth = 600,
					viewportWidth = $(window).width(),
					currentCookieValue = getCookieValue('viewportWidth');
					currentCookieValue = currentCookieValue == null || currentCookieValue == '' ? 0 : Number(currentCookieValue);
					document.cookie = 'viewportWidth=' + viewportWidth + '; path=/';
					if ((viewportWidth < breakpointWidth && currentCookieValue >= breakpointWidth) ||
					(viewportWidth >= breakpointWidth && currentCookieValue < breakpointWidth)) {
						window.location.reload();
					}
				}
			};

			if (window.addEventListener) {
				window.addEventListener(event, listener, false);
			} else if (window.attachEvent) {
				window.attachEvent("on" + event, listener);
			}
		}

		executeRWDResizeEvents('resize');
	}
	
	// Always reset the viewport width now that the document is fully loaded and we can make it more accurate.
	// (Sometimes on load it comes back much wider than it should)	
	document.cookie = 'viewportWidth=' + $(window).width() + '; path=/';
});
;
function Animations() {
	const animationsJsonEl = $('.activeWidgetSkinComponentsOnPageJson');
	const animationsJson = animationsJsonEl.html();
	if (animationsJson)
		this.components = JSON.parse(animationsJson);
	this.selectors = [
		'', '.widgetHeader', '.widgetBody', '.widgetItem', '.widgetTitle', '.widgetMeta', '.widgetBody .bullets',
		'a:link', '.readOn:link', '.widgetViewAll:link', '.widgetRSS:link', '.widgetFooter', '.cpTabs',
		'.cpTabs > li > a:link', '.cpTabPanel',
		'.separated .half:after, .separated .third:after, .separated .fourth:after, .separated .fifth:after, .separated.cpGrid .col:after ', '.miniCalendarHeader', '.miniCalendar > table', '.miniCalendar th', '.miniCalendar td > span', '.miniCalendar td > a', '.miniCalendar .today > span', '.miniCalendar .not > span', '.miniCalendar'
	];
	animationsJsonEl.remove();
}

Animations.prototype.Apply = function () {
	var self = this;
	self.addClassToContainers();
	self.bindContainerTriggers();
	self.addClassAndTriggerToSkinComponents();
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Container(Structural/Content)
Animations.prototype.addClassToContainers = function () {
	var $hiddenAnimationElements = $('.hiddenAnimations');
	if ($hiddenAnimationElements != null) {
		$hiddenAnimationElements.each(function () {
			//Get hidden element
			var $hiddenAnimationElement = $(this);
			//Get css class from it
			var cssClass = $hiddenAnimationElement.data('animationclass');
			var startCssClass = cssClass + '_Start';
			var triggerData = $hiddenAnimationElement.data('trigger');
			//Apply that class to parent container, depending on container type
			//For Strctural container
			if ($hiddenAnimationElement.parent('[data-cprole=structuralContainer]') != null) {
				$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(startCssClass);
				$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(triggerData);
				setTimeout(function () {
						$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').addClass(cssClass);
						$hiddenAnimationElement.parent('[data-cprole=structuralContainer]').removeClass(startCssClass);
					},
					10);
			}
			//For Content Container
			if ($hiddenAnimationElement.parent('[data-cprole=contentContainer]') != null) {
				$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(startCssClass);
				$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(triggerData);
				setTimeout(function () {
						$hiddenAnimationElement.parent('[data-cprole=contentContainer]').addClass(cssClass);
						$hiddenAnimationElement.parent('[data-cprole=contentContainer]').removeClass(startCssClass);
					},
					10);
			}
		});
	}
};

//Apply animation class to widget skin components on page
Animations.prototype.addClassAndTriggerToSkinComponents = function () {
	var self = this;
	var $widgetsHavingSkinsApplied = $("[class*='skin']");

	if ($widgetsHavingSkinsApplied != null) {
		//array of unique skin ids
		var $uniqueSkinIds = [];
		$widgetsHavingSkinsApplied.each(function () {
			//Get skin class
			var skinClass = $(this).attr('class').match(/.skin\d+/g)[0];
			//Parse skinId off of skin class
			var skinId = parseInt(skinClass.match(/\d+/)[0]);
			//Insert if not there in array
			if ($.inArray(skinId, $uniqueSkinIds) === -1)
				$uniqueSkinIds.push(skinId);
		});

		$.each($uniqueSkinIds, function (index, value) {
			var skinId = value;
			for (var i = 0; i < self.selectors.length; i++) {
				//Find all widget skincomponents on the page using this skin.
				var $skinComponentsOnPageUsingThisSkin = $('.skin' + skinId + ' ' + self.selectors[i] + '');
				var animationClass = self.classAndTrigger(skinId, i).className;
				var animationTrigger = self.classAndTrigger(skinId, i).triggerName;
				var scrollOffset = self.classAndTrigger(skinId, i).scrollOffset;
				if (animationClass !== undefined) {
					//Apply animation class
					$skinComponentsOnPageUsingThisSkin.addClass(animationClass + '_Start').addClass(animationClass).removeClass(animationClass + '_Start');
				}
				if (animationTrigger !== undefined && animationTrigger !== 'hover') {
					//Apply animation trigger
					$skinComponentsOnPageUsingThisSkin.addClass(animationTrigger + 'AnimationTrigger');
					$skinComponentsOnPageUsingThisSkin.data("scrolloffset", scrollOffset);
				}
			}
		});
	}
};

///Get animation class given the component and skin Id
Animations.prototype.classAndTrigger = function (skinId, componentTypeId) {
	var self = this;
	var components = self.components;
	var classAndTrigger = {};
	if (components && components.length > 0) {
		for (var i = 0; i < components.length; i++) {
			if (components[i].WidgetSkinID === skinId && components[i].ComponentType === componentTypeId) {
				classAndTrigger.className = components[i].AnimationClass;
				classAndTrigger.triggerName = components[i].TriggerNameLowerCase;
				classAndTrigger.scrollOffset = components[i].ScrollOffset;
				return classAndTrigger;
			}
		}
	}
	return classAndTrigger;
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Nav container(Main/Side)
Animations.prototype.applyAnimationClassToNavContainers = function ($olSubMenu, menuType) {
	var mainMenu = 2;
	var sideMenu = 1;
	var cssClass;
	var triggerData;
	var $mainNavHiddenElement = $('#mainNav').children('[class*="hiddenAnimations"]');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');

	if ($('#mainNav').length > 0 && menuType === mainMenu) {
		cssClass = $mainNavHiddenElement.data('animationclass');
		triggerData = $mainNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass);
		setTimeout(function () {
				$olSubMenu.addClass(cssClass);
				$olSubMenu.addClass('animation-triggered');
				$olSubMenu.removeClass(cssClass + '_Start');
			},
			10);
	};
	if ($('#secondaryNav').length > 0 && menuType === sideMenu) {
		cssClass = $secondaryNavHiddenElement.data('animationclass');
		triggerData = $secondaryNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass);
		setTimeout(function () {
			$olSubMenu.addClass(cssClass);
			$olSubMenu.addClass('animation-triggered');
			$olSubMenu.removeClass(cssClass + '_Start');
		},
			10);
	};
};

Animations.prototype.applyAnimationClassToMegaMenuContainer = function ($megaMenuContainer, timeOut) {
	var cssClass;
	var $megaMenuHiddenElement = $('.megaMenuContainer').children('[class*="hiddenAnimations"]');

	$megaMenuContainer.mouseleave(function () {
		if (!$('.megaMenuContainer').children('.pinned').length > 0) {
			$(this).removeClass('animation-triggered');
		}
	});

	if ($('.megaMenuContainer').length > 0) {
		cssClass = $megaMenuHiddenElement.data('animationclass');
		setTimeout(function () {
				$megaMenuContainer.addClass('animation-triggered');
				$megaMenuContainer.removeClass(cssClass + '_Start');
			},
			timeOut);
	};
};

/// Gets the css class to be applied from the hidden element already present on the page and applies the css class to the Nav container(Main/Side)
Animations.prototype.applyInitial = function ($olSubMenu, menuType) {
	var mainMenu = 2;
	var sideMenu = 1;
	var cssClass;
	var triggerData;
	var $mainNavHiddenElement = $('#mainNav').children('[class*="hiddenAnimations"]');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');
	if ($('#mainNav').length > 0 && menuType === mainMenu) {
		cssClass = $mainNavHiddenElement.data('animationclass');
		triggerData = $mainNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass + '_Start').addClass(triggerData);
	};
	if ($('#secondaryNav').length > 0 && menuType === sideMenu) {
		cssClass = $secondaryNavHiddenElement.data('animationclass');
		triggerData = $secondaryNavHiddenElement.data('trigger');
		$olSubMenu.addClass(cssClass + '_Start').addClass(triggerData);
	};
};

Animations.prototype.bindContainerTriggers = function () {
	$(document)
		.delegate('[class*="clickAnimationTrigger"]',
			'click',
			function () {
				$(this).addClass('animation-triggered');
			});

	$(window).scroll(function () {
		$('.scrollAnimationTrigger').not('.cpCarousel .widgetItem.scrollAnimationTrigger').each(function () {
			var scrollOffsetPercentage = $(this).data('scrolloffset') / 100;
			if (isNaN(scrollOffsetPercentage))
				scrollOffsetPercentage = $(this).children().first().data('scrolloffset') / 100;
			if (scrollOffsetPercentage != 0 && ($(window).scrollTop() + ($(window).height() * (1 - scrollOffsetPercentage))) >
				$(this).offset().top && ($(this).offset().top + $(this).height()) > $(window).scrollTop())
				$(this).addClass('animation-triggered');
		});

		$('.cpCarousel .widgetItem.scrollAnimationTrigger').each(
			function () {
				$(this).addClass('animation-triggered');
			}
		);
	});
};
function StickyStructuralContainers() {
	//Add sticky class to structuralStructuralContainer
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	if (stickyContainers.length > 0) {
		stickyContainers.each(function () {
			$(this).parent().addClass('stickyStructuralContainer stickySticky');
		});
		if ($("#divToolbars")[0]) {
			$(".stickyStructuralContainer.stickySticky").css('top',
				($("#divToolbars")[0].getBoundingClientRect().height + parseInt($('#divToolbars').css('margin-top'))) + "px");
		}
	}

	//Add sticky class to structural container inside of stickyStructualContainer
	var structuralContainersUnderSticky = $('div.structuralUnderStickyInnerDiv');
	if (structuralContainersUnderSticky.length > 0) {
		structuralContainersUnderSticky.each(function () {
			$(this).parent().addClass($(this).attr('class'));
		});
	}
}

StickyStructuralContainers.prototype.init = function () {
	var self = this;
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	var paddingCalc = $("#divToolbars").outerHeight() - parseInt($("#divToolbars").css('padding-top'));
	if (stickyContainers.length > 0) {
		var bottomOfSticky = $('.stickyStructuralContainer.stickySticky').outerHeight();
		$('#bodyWrapper').addClass('noTransition');
		$('.stickyStructuralContainer.stickySticky').next().css('padding-top', bottomOfSticky + 'px');
	}

	//Adjusted / re - calculate the padding for sibling of sticky structural container.
	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		$('.stickySticky').each(function () {
			var padding = $(this).outerHeight() - 1 + 'px';
			var self = this;
			if ($('.stickySticky').next().attr('data-cprole') == "banner") {
				$('.stickySticky').next().find('[id^="structuralContainer"]').first().css('padding-top', padding);
			} else {
				window.setTimeout(function () {
					$(self).next().css('padding-top', padding);
				}, 500);
			}
		});
	});

	//set up scroll events
	var stickyCollapsedContainers = $('div.stickyInnerDiv.stickyCollapsedWhenScrolled');
	if (stickyCollapsedContainers.length > 0 && !window.isMobileBrowserIncludingTablets) {
		stickyCollapsedContainers.each(function () {
			$(this).parent().addClass('stickyStructuralContainer stickyStickyCollapsedWhenScrolled');
			if ($(this).hasClass('stickyFadeAnimation')) {
				$(this).parent().addClass('stickyStickyFadeAnimation');
			} else if ($(this).hasClass('stickySlideDownAnimation')) {
				$(this).parent().addClass('stickyStickySlideDownAnimation');
			}
		});

		var bottomOfStickyCollapsed = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled').offset().top +
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled').outerHeight() -
			$("#divToolbars").height();
		var hideWhenExpandedHeights = self.getAllHeights($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded'));
		var hideWhenCollapsedHeights = self.getAllHeights($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed'));

		var scrollDownTrigger = self.getStickyScrollBreakpoint(bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights);

		self.showHideStickyContainers(true, scrollDownTrigger, paddingCalc);

		self.bindScrollForSticky(bottomOfStickyCollapsed,
			hideWhenExpandedHeights,
			hideWhenCollapsedHeights);
	}
	else {
		stickyContainers = $('div.stickyInnerDiv');
		if (stickyContainers.length > 0 && stickyContainers.find('.structuralUnderStickyInnerDiv.showInMobile').length > 0) {
			stickyContainers.find('.structuralUnderStickyInnerDiv').not('.showInMobile')
				.each(function () {
					$(this).hide();
				});
		}
	}
}

StickyStructuralContainers.prototype.bindScrollForSticky = function (bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights) {
	var self = this;
	var scrollDownTrigger = self.getStickyScrollBreakpoint(bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights);
	var paddingCalc = $("#divToolbars").outerHeight() - parseInt($("#divToolbars").css('padding-top'));

	$(window)
		.scroll(function () {
			self.showHideStickyContainers(false, scrollDownTrigger, paddingCalc);
		});
}

StickyStructuralContainers.prototype.showHideStickyContainers = function (initialLoad, scrollDownTrigger, paddingCalc) {
	var $stickyStructuralContainer = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled');
	var wS = $(window).scrollTop();

	if (wS >= scrollDownTrigger + paddingCalc) {
		$stickyStructuralContainer.addClass('stickyCollapsed');

		$(".stickyStructuralContainer.stickyStickyCollapsedWhenScrolled")
			.css('top', $("#divToolbars").outerHeight() + "px");

		//Structrual overrides content container so show/hide if content container doesn't have a structural container around it
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded')
			.each(function () {
				if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
					$(this).show();
				}
			});

		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed')
			.each(function () {
				if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
					$(this).hide();
				}
			});

		//Structrual overrides content container so show/hide structural containers and any content containers under it that would be opposite behavior
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').hide();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').show();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').find('.hideWhenCollapsed').show();
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').find('.hideWhenExpanded').hide();

		//Animate the slide down
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickyFadeAnimation.stickyCollapsed')
			.addClass('stickyAnimFade');
		$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickySlideDownAnimation.stickyCollapsed')
			.addClass('stickyAnimSlideDown');

		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').length > 0 &&
			!$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').hasClass('stickyAnimComplete')
		) {
			setTimeout(function () {
				$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed')
					.addClass('stickyAnimComplete');
			},
				0);

			$('#stickyPlaceholder').css('height', scrollDownTrigger + paddingCalc + 'px');
			if (!window.isRemoveSetHeights)
				SetHeights();
		}

	} else {
		if (($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed').hasClass('stickyAnimComplete'))
			|| initialLoad) {
			$(".stickyStructuralContainer.stickyStickyCollapsedWhenScrolled").css('top', 'auto');

			//Structrual overrides content container so show/hide if content container doesn't have a structural container around it
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded')
				.each(function () {
					if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
						$(this).hide();
					}
				});

			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed')
				.each(function () {
					if ($(this).parents('.structuralUnderStickyInnerDiv') === 0) {
						$(this).show();
					}
				});

			//Structrual overrides content container so show/hide structural containers and any content containers under it that would be opposite behavior
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').hide();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').show();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').find('.hideWhenCollapsed').hide();
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').find('.hideWhenExpanded').show();

			$('#stickyPlaceholder').css('height', '0');

			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickyFadeAnimation.stickyCollapsed')
				.removeClass('stickyAnimFade');
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyStickySlideDownAnimation.stickyCollapsed')
				.removeClass('stickyAnimSlideDown');
			$stickyStructuralContainer.removeClass('stickyCollapsed stickyAnimComplete');
			if (!window.isRemoveSetHeights)
				SetHeights();
		}
	}
}

StickyStructuralContainers.prototype.getAllHeights = function (elements) {
	var heights = 0;
	if (elements && elements.length > 0) {
		elements.each(function () {
			if ($(this).parents('.structuralUnderStickyInnerDiv.hideWhenExpanded').length === 0
				&& $(this).parents('.structuralUnderStickyInnerDiv.hideWhenCollapsed').length === 0)
				heights += $(this).height();
		});
	}
	return heights;
}


StickyStructuralContainers.prototype.getStickyScrollBreakpoint = function (bottomOfStickyCollapsed, hideWhenExpandedHeights, hideWhenCollapsedHeights) {
	var scrollDownTrigger;
	var $stickyStructuralContainer = $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled');
	var toolBarAndStickyHeight = $stickyStructuralContainer.outerHeight() -
		$("#divToolbars").height();

	//Logic for when there are structural containers
	if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0
		|| $('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
		//If page loaded and already collapsed and has both show and hide containers
		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight - hideWhenExpandedHeights;
			//If page loaded and NOT collapsed and has both show and hide containers
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
			//If page loaded and collapsed and has only visible containers when collapsed
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight - hideWhenExpandedHeights;
			//If page loaded and collapsed and has only visible containers when expanded
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight;
			//If page loaded and NOT collapsed and has only one style of visible container (collapsed or non)
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenCollapsed').length > 0 ||
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .structuralUnderStickyInnerDiv.hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else {
			scrollDownTrigger = toolBarAndStickyHeight;
		}
		//Logic for when there are only content containers. Same scenarios as strucrual
	} else {
		if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenExpanded').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight - hideWhenExpandedHeights;
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').length > 0 &&
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight - hideWhenExpandedHeights;
		} else if (
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled.stickyCollapsed .hideWhenCollapsed').length > 0) {
			scrollDownTrigger = hideWhenCollapsedHeights + toolBarAndStickyHeight;
		} else if ($('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenCollapsed').length > 0 ||
			$('.stickyStructuralContainer.stickyStickyCollapsedWhenScrolled .hideWhenExpanded').length > 0) {
			scrollDownTrigger = toolBarAndStickyHeight;
		} else {
			scrollDownTrigger = toolBarAndStickyHeight;
		}
	}

	return scrollDownTrigger;
};
var commonLocalization = null;
var userAgent = window.navigator.userAgent;
var iOSSafari = userAgent.match(/iP(ad|hone)/i) && userAgent.match(/WebKit/i) && !userAgent.match(/CriOS/i);
var hashRegex = /^(#cc[A-z0-9]{8}-[A-z0-9]{4}-[A-z0-9]{4}-[A-z0-9]{4}-[A-z0-9]{12})$/;
var stickyStructuralContainers = null;

if (window.location.hash && hashRegex.test(window.location.hash)) {
	var targetHash = window.location.hash;
	window.location.hash = '';
	scroll(0, 0);
	setTimeout(function () {
		scroll(0, 0);
	}, 1);
}

if (window.isResponsiveEnabled) {
	loadMediaFramework();
}

function loadMediaFramework() {
	Modernizr.load([
		//test old browsers to use polyfills
		{
			test: window.addEventListener,
			nope: "/Assets/Scripts/RWD/eventListener.js"
		},
		{
			test: window.matchMedia,
			nope: "/Assets/Scripts/RWD/media.match.js"
		},
		{
			test: Modernizr.touch,
			yep: "/Assets/Scripts/RWD/quo.debug.js"
		},
		//Load Media Framework after polyfills if needed
		getAbsoluteUrl("/Assets/Scripts/RWD/MediaFramework.js")
	]);
}

(function () {
	var timer = 4000;
	var incrementTimer = function () { timer = timer * 1.25; };

	var timeOutFunction = function () {
		setTimeout(timeOutFunction, timer);
		setBannerHeights();
		incrementTimer();
	};
	timeOutFunction();
}());

$(document).ready(function () {

	if (!window.isResponsiveEnabled) {
		//Setup execution of events when resizing
		var timeout = 250; //time out to debounce event
		window.Pages = window.Pages || {};
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];

		if (typeof updateMegaMenusOnBrowserResize === 'function')
			window.Pages.onResizeHandlers.push(updateMegaMenusOnBrowserResize);

		if ($('#hdnWidgetManager').length == 0 && typeof rearrangeFlyoutsOnResizeEvents === 'function')
			window.Pages.onResizeHandlers.push(rearrangeFlyoutsOnResizeEvents);

		function executeResizeEvents(event) {
			var timer;
			var listener = function (e) {
				//Execute the handlers for resize events.
				timer && clearTimeout(timer);
				timer = setTimeout(function () {
					for (var i = 0; i < window.Pages.onResizeHandlers.length; i++) {
						if (typeof (window.Pages.onResizeHandlers[i]) === 'function') {
							window.Pages.onResizeHandlers[i]();
						}
					}
				}, timeout);
			};

			if (window.addEventListener) {
				window.addEventListener(event, listener, false);
			} else if (window.attachEvent) {
				window.attachEvent("on" + event, listener);
			}
		}

		executeResizeEvents('resize');
		executeResizeEvents('orientationChange');
	}

	if (window.isResponsiveEnabled) {
		//Inserts data-label on each table cell in froala editor. Needed for responsive view
		$.each($.find('.fr-view table'), function (tableIndex, tableValue) {
			$(tableValue).parent().addClass('responsiveEditor');
			$.each($(tableValue).find('thead th'), function (headerIndex, headerValue) {
				$.each($(tableValue).find('tbody tr'), function (rowIndex, rowValue) {
					$($(rowValue).find('td')[headerIndex]).attr('data-label', headerValue.textContent);
				});
			});
		});
	}

	$('#divToolbars').css('overflow-x', 'visible');
	$('#divToolbars').css('overflow-y', 'visible');

	browserFailOvers();

	var GetCookie = function (cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	var IsLiveEditOn = function () {
		return GetCookie("enableLiveEdit") === "true";
	};

	if (IsLiveEditOn() && isUserLoggedIn()) {
		$('body').addClass('liveEditOn');
	}

	setTimeout(function () {
		$('.mobile.header .mobileMenu').css('top', $('#divToolbars .mobileAlertBar').outerHeight(true));
	}, 10);

	$('div.mobile.header > a.mobileMenu').unbind().click(function (e) {
		e.preventDefault();
		$('#menuPanel').css('top', $('#divToolbars').outerHeight(true));
		$('#menuPanel').toggle('slide');
		window.scrollTo(0, 0);
	});

	// Set Heights really fast at first then after 4 seconds slow it down.
	if (typeof SetHeights === 'function') {

		var stretchContainers = (typeof window.dynamicStretchContainers === 'function');
		var setHeightInterval = setInterval(function () {
			if (!window.isRemoveSetHeights)
				SetHeights();
			if (stretchContainers) window.dynamicStretchContainers();
		}, 50);

		setTimeout(function () {
			clearInterval(setHeightInterval);
			if (IsLiveEditOn()) {
				setInterval(function () {
					if (!window.isRemoveSetHeights)
						SetHeights();
					if (stretchContainers) window.dynamicStretchContainers();
				}, 2000);
			}
		}, 4000);

	}

	//Do not execute for WidgetManager, it has a slightly different logic thats handled in WidgetManager code itself.
	if ($('#hdnWidgetManager').length == 0) {
		if (typeof rearrangeFlyouts === 'function') {
			setTimeout(function () {
				setInterval(function () {
					rearrangeFlyouts(false);
				}, 2000);
			}, 2000);
		}
	}

	window.setTimeout(function () { moveMegaMenusInDOM({ direction: $('#megaMenuPopupDirection').val() }); }, 50);

	frontEnd_removeAttributesFromGraphicLinks();

	if ($('.viewArchiveLink').length > 0) {
		$('body').addClass('cpViewArchiveOn');
	}

	//workaround to make legacy LE modal to be centered correctly
	$("body").append($("#ctl00_ctl00_MainContent_ctl00_liveEditPopupWindow")).append($("#editItemBehavior_backgroundElement"));

	//Workaround to adjust the toolbar dropdowns dynamically based on the .cpToolbar height + some other initialization stuff for Layout.
	Core.Layout.toggleFeatureColumn();

	Core.Layout.attachTabbedWidgetTabHandlers();

	//when clicking on error details links
	$("a.errorDetails").on("click.errorDetails", function (e) {
		e.preventDefault();
		$(this).next("div").slideToggle('fast');
	});

	$("img.imageHover").on("mouseenter.imageHover", function () {
		$(this).attr('src', $(this).data("hover"));
	}).on("mouseleave.imageHover", function () {
		$(this).attr('src', $(this).data("image"));
	});

	// Setup handlers for My Account toolbar
	var $Favorites = $('#favoritesList');
	var $UserMenu = $('.cpToolbar .userMenu .popOut');
	$Favorites.hide();
	$UserMenu.hide();

	$('a[href="#favoritesList"]').click(function (e) {
		e.preventDefault();
		if ($Favorites.hasClass('open')) {
			$Favorites.slideUp(200);
		} else {
			slideToggle($Favorites, true, 200);
		}
		$Favorites.toggleClass('open');
	});

	$('.cpToolbar .popOutContainer > a').click(function (e) {
		if ($UserMenu.hasClass('open')) {
			$UserMenu.slideUp(200);
		} else {
			$UserMenu.slideDown(200);
		}
		$UserMenu.toggleClass('open');
	});

	//Authentication
	$('.requireSignIn').on("keypress", function () {
		$(this).click();
	});

	$('.requireSignIn').on("mouseup", function (event) {
		event.preventDefault();
		$(this).click(function (event) { event.preventDefault(); });
		var $self = $(this);
		$.ajax({
			url: '/Saml/IsSamlLoginEnabled?loginPage=LoginPageMyAccount',
			type: 'GET',
			success: function (response) { RequireSignInSuccess(response, $self) },
			async: false
		});
	});

	function RequireSignInSuccess(response, $elem) {
		if (response.IsSamlLoginEnabled) {
			window.location = '/Admin/Saml/LogonRequest?RelayState=' + window.location.pathname.substring(1);
		}
		else {
			var popupBasedAuthenticationJs = new PopupBasedAuthentication();
			popupBasedAuthenticationJs.requireLoggedIn($elem.attr('href'), '');
		}
	}

	flipHandlesIfNecessary();
	$(window).scroll(function () {
		$('.flipHandles').removeClass('flipHandles');
	});

	if (location.search.toLowerCase().indexOf('preview=yes') > -1 || location.search.toLowerCase().indexOf('print=yes') > -1) {
		$('body').addClass('printPreview');
	}
	else {
		$('body').removeClass('printPreview');
	}

	$('#viewFullWebsiteOnMobile').unbind('click').click(function () {
		var curDate = new Date();
		curDate.setHours(curDate.getHours() + 2);
		var curDateInUTCStringFormat = curDate.toUTCString();
		document.cookie = "forceMobileOff=true; expires=" + curDateInUTCStringFormat + "; path=/";
	});

	$('#backToMobileView').unbind('click').click(function () {
		//expire the cookie
		document.cookie = "forceMobileOff=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	});

	if ($("iframe").length > 0) {
		$.getScript('/Assets/Scripts/attrchange.js', function () {
			$.getScript('/Assets/Scripts/attrchange_ext.js', function () {
				$("iframe").attrchange({ callback: function (event) { if (!window.isRemoveSetHeights) SetHeights(); } });
			});
		});
	}

	//Apply classes to parent containers and initialize the stickyStructuralContainers class
	if (typeof (StickyStructuralContainers) === 'function') {
		stickyStructuralContainers = new StickyStructuralContainers();
	}

	var liveEditEnabled = getCookieValue("enableLiveEdit") === "true";
	if (typeof (Animations) === 'function') {
		var animations = new Animations();
		//If live edit enabled, give it a delay for animation classes to apply properly.
		if (liveEditEnabled) {
			setTimeout(function () {
				animations.Apply();
			},
				100);
		} else {
			//Apply animation classes and triggers
			animations.Apply();
		}
	}

	//Fixes image cache problem on iOS safari
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		$(".graphicButtonLink").removeAttr("onmouseover");
	}

	$('.cp-modificationProhibited').on("click", function () {
		if ($(this).hasClass('cp-modificationProhibited')) {
			showWidgetDisabledPopUp();
		}
	});

	$('.pageCopyEditWidgetModal').on("click", function () {
		savePageCopy();
	});

	$('.closeEditWidgetModal').on("click", function () {
		closeModal();
	});

	$('.viewMap, .viewMapAsLink').on("click", function () {
		executeViewMapPostClickActions($(this));
	});
});

$(window).on("load", function () {
	if (stickyStructuralContainers) {
		stickyStructuralContainers.init();
		// Fire resize handlers to recalculate any height adjustments required after sticky container setup.
		var resizeHandlers = window.Pages && window.Pages.onResizeHandlers || [];
		resizeHandlers.forEach(function (handler) { handler(); });
	}
	$('[class*="pageloadAnimationTrigger"]').each(
		function () {
			$(this).addClass('animation-triggered');
		});

	setTimeout(function () {
		//Fix for blank target elements with rel attributes to avoid phishing attack.
		var blankTargetElements = $("[target='_blank']");
		$.each(blankTargetElements, function (index, element) {
			$(element).attr("rel", "noopener");
		});
	}, 175);

	$('body').find('table').removeAttr('border');
	$('body').find('table').removeAttr('cellspacing');
	$('body').find('table').removeAttr('cellpadding');
});

function flipHandlesIfNecessary() {
	$('.widget').unbind('mouseover').mouseover(function (e) {
		var $this = $(this);
		var $innerCol = $this.parents('div.inner.col');
		if ($innerCol != null && !$innerCol.hasClass('flipHandles') && $('#ysnEnableLiveEdit').is(':checked')) {
			var $removeHandle = $innerCol.find('.handle.remove');
			var $toolbarHeight = $('.cpToolbars').outerHeight(true);
			var $removeHandleHeight = $removeHandle.outerHeight();
			if ($removeHandle.length > 0) {
				var $removeHandleTop = $removeHandle.offset().top - $(document).scrollTop();
				if (parseFloat($toolbarHeight - $removeHandleTop) >= parseFloat($removeHandleHeight / 3))
					$innerCol.addClass('flipHandles');
				else
					$innerCol.removeClass('flipHandles');
			}
		}
	});
}

function reinitCarousels() {
	if (window.carouselsToInit && window.carouselsToInit != undefined) {
		for (var i = 0; i < window.carouselsToInit.length; i++) {
			carouselsToInit[i]();
		}
	}
}

function SetHeights() {
	if ($('body').hasClass('mobile') || $('.pageContent.dragging').length > 1 || !window.Core.performSetHeights) {
		return;
	}

	var originalScrollPosition = $('body').scrollTop();
	if (!originalScrollPosition) {
		originalScrollPosition = $('html').scrollTop();
	}

	// Grow the heights and set them in place.
	$('.inner.col, .outer.col, .resize, .indicator.vertical, div.widgetSpacer').css('height', 'auto');

	var adjustColumnHeights = function () {
		if (typeof CustomAdjustHeights === 'function') {
			CustomAdjustHeights();
			return;
		}
		$('.row.nest.wide').each(function () {
			var height = $(this).outerHeight();
			if (height < 15) {
				height = 15;
			}
			$(this).children('.inner.col, .resize, .indicator.vertical').css('height', height + "px");
		});

		$('.row.outer.wide:not(.autoWidths)').each(function () {
			var height = $(this).outerHeight();
			if (height < 15) {
				height = 15;
			}
			$(this).children('.outer.col, .resize, .indicator.vertical, .row.nest.first.last > .inner.col')
				.css('height', height + "px");
			$(this).find('.outer.col > .row.nest.first.last > .inner.col').css('height', height + "px");

		});
	};

	adjustColumnHeights();

	var autoWidthRowsHandler = function ($this) {
		var height = 15;
		$this.children('.col').each(function () {
			var columnHeight = $(this).outerHeight();
			if (columnHeight > height) {
				height = columnHeight;
			}
		});
		$this.find('.indicator.vertical').height(height);
	};

	$('.outer.row.autoWidths.wide').each(function () {
		autoWidthRowsHandler($(this));

		$(this).find('.row').each(function () {
			autoWidthRowsHandler($(this));
		});
	});

	if (!window.isResponsiveEnabled || getCookieValue("enableLiveEdit") === "true") {
		$('div.widgetSpacer').each(function () {
			var $spacer = $(this);
			var $innerCol = $spacer.parent(),
				$innerRow = $innerCol.parent();

			if ($innerRow.hasClass("first") && $innerRow.hasClass("last")) {
				var outerRowHeight = $innerRow.parent().parent().height(),
					innerColPadding = $innerCol.css("padding-top").replace("px", ""),
					spacerHeight = outerRowHeight - (2 * parseInt(innerColPadding, 10));
				$spacer.height(spacerHeight);
				$innerCol.height(spacerHeight);
			} else {
				var innerColHeight = $innerCol.innerHeight();
				if (innerColHeight > 30)
					$spacer.height(innerColHeight);
				else
					$spacer.height(30); //default spacer height
			}
		});
	}

	adjustColumnHeights();

	$('.outer.col').height('auto');
	if (!iOSSafari) {
		$('html,body').scrollTop(originalScrollPosition);
	}
	setBannerHeights();
	reinitCarousels();
}

function frontEnd_removeAttributesFromGraphicLinks() {
	$('.widgetGraphicLinks li.GraphicLinks > a > img').removeAttr('height').removeAttr('width');
}

function closeModalDialog(behaviourID) {
	var behavior = $find(behaviourID);

	if (behavior)
		behavior.hide();
	else
		closeCpModal();
}

function SetMegaMenuToOpenAbove() {
	moveMegaMenusInDOM({ direction: '1' });
}
function SetMegaMenuToOpenBelow() {
	moveMegaMenusInDOM({ direction: '0' });
}

function changeModalDialogHeight(height, showDetails) {
	var ifr = document.getElementById('liveEditDialog');
	if (ifr)
		ifr.style.height = height + 'px';
	if (showDetails != '')
		document.cookie = "showAddDetails=" + showDetails + ";";
}

function setModalClassForEditItemBehavior(cssClass, showDetails) {
	var behaviorID = $find('editItemBehavior');
	var modalContainer = document.getElementById(behaviorID._PopupControlID);
	if (modalContainer)
		modalContainer.className = 'modalContainer modalContainerCP ' + cssClass;
	if (showDetails != '')
		document.cookie = "showAddDetails=" + showDetails + ";";
}

function loadStyleSheet(href, id) {
	var styleSheet = document.createElement('link');
	styleSheet.type = 'text/css';
	styleSheet.rel = 'stylesheet';
	styleSheet.setAttribute('href', href);
	if (id) {
		styleSheet.setAttribute('id', id);
	}
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(styleSheet);
}

function enableLiveEdit(checked) {

	var $liveEditTabs = $('#liveEditTabs');
	if (checked) {
		document.cookie = "enableLiveEdit=true; expires=12/31/2999; path=/";
		$('.handle').show();
		$('#bodyWrapper').removeClass('noTransition');
		$('#LiveEditCSS').prop('disabled', false);
		var versionTitle = $('#versionHeadLine').text();
		$('#versionHeadLine').html('<a id="versionHeadLineOptionsHandle" href="#" class="handle options" title="Version Options">Version Options</a>');
		$('#versionHeadLine').append('<span contenteditable="true" data-versiontitle="' + versionTitle + '">' + versionTitle + '</span>');
		$('#versionHeadLineOptionsHandle').unbind().click(function () {
			versionActions(ContentCollectionInstance.VersionID, 'edit', { "pageID": ContentCollectionInstance.PageID, "versionID": ContentCollectionInstance.VersionID });
		});
		if ($('#404Content').length > 0 || $('#pagePageID').val() === '') {
			location.reload();
		} else if ($liveEditTabs.length > 0) {
			redrawContextualInnerToolbar(window.ContentCollectionInstance.PageID, window.ContentCollectionInstance.VersionID);
			window.ContentCollectionInstance.reloadContent();
			InitializeContainers();
			setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
			refreshMegaMenusForLiveEdit();
			showLiveEditElement($liveEditTabs);
			if (liveEditTabs.currentState !== 'closed') {
				liveEditTabs.setBodyPadding();
			}
		} else {
			$.ajax({
				url: '/LiveEditMarkup',
				type: 'GET',
				cache: false,
				async: false,
				success: function (response) {
					var $body = $('body');
					$body.append(response).addClass('liveEditOn');
					loadStyleSheet('/Areas/Pages/Assets/Styles/Home.css');
					loadStyleSheet('/Assets/AdminRefresh/LiveEdit/Styles/LiveEdit.css', 'LiveEditCSS');
					if (!window.ContentCollectionInstance) {
						window.ContentCollectionInstance = new ContentCollectionClass();
						window.ContentCollectionInstance.init();
					}

					if (!window.ResizeData) {
						window.ResizeData = new ResizeClass();
					}
					redrawContextualInnerToolbar(window.ContentCollectionInstance.PageID, window.ContentCollectionInstance.VersionID);
					var moduleID = $('#pageModuleID').val();
					if (moduleID == '') {
						moduleID = 76;
					} else {
						moduleID = Number(moduleID);
					}
					renderLiveEditTabs(moduleID);

					window.ContentCollectionInstance.reloadContent();
					InitializeContainers();
					setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
					refreshMegaMenusForLiveEdit();
				},
				error: function (xhr, textStatus, exception) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
				}
			});
		}
		triggerStickyStructuralInitLogic();
		//no responsive when live edit enabled, so default to wide view
		$('.widget.narrow').each(function () {
			var $this = $(this);
			$this.removeClass('narrow').addClass('wide');
		});
		$('.tabbedWidgetNarrow.cpTabs:not(.accordion)').hide();
		$('.tabbedWidget.cpTabs').show();
		Core.Layout.attachTabbedWidgetTabHandlers();
		if ($('script:contains("audioeye.com")').length >= 1) {
			$('script:contains("audioeye.com")').remove();
		}
	}
	else {
		document.cookie = "enableLiveEdit=false; expires=12/31/2999; path=/";
		$('#liveEditMenu').hide();
		setTimeout(window.ContentCollectionInstance.refreshNavContainers, 10);
		refreshMegaMenusForLiveEdit();
		var publishedVersion = $liveEditTabs.length > 0 && $('#hdnVersionStatus').val() === '40';
		var isPublishedVersionAndContainsTabbedWidget = publishedVersion && $('.widgetTabbed').length > 0;
		if (!publishedVersion || isPublishedVersionAndContainsTabbedWidget)
			location.reload();

		$('body.liveEditOn').removeClass('liveEditOn').addClass('liveEditOff');
		window.ContentCollectionInstance.reloadContent(null, null, true);
		loadMediaFramework();
		$('#bodyWrapper').attr('style', '');
		$('#versionHeadLineOptionsHandle').remove();
		$('#versionHeadLine').html($('#versionHeadLine').text());
		$('a.editCustomHtml').hide();
		hideLiveEditElement($liveEditTabs);
		hideLiveEditElement($('#innerToolbar'));
		triggerStickyStructuralInitLogic();
		setTimeout(function () {
			$('#LiveEditCSS').prop('disabled', true);
		}, 666);
		//For some reason, loadMediaFramework doesnt load MediaFramework.js on disabling live edit, this forces it to download it again hence fixing a responsive issue.
		if (window.cpMedia) {
			window.cpMedia = undefined;
			var scriptSrc = '';
			var script = document.createElement('script');
			script.async = false;
			script.type = 'text/javascript';
			scriptSrc = '/Assets/Scripts/RWD/MediaFramework.js';
			script.src = scriptSrc;
			document.body.appendChild(script);
		}
		Core.Layout.attachTabbedWidgetTabHandlers();
		$.ajax({
			url: '/IncludeScript/AudioEyeScript/',
			type: 'GET',
			cache: false,
			async: false,
			success: function (response) {
				if (response) {
					var scriptText = $(response)[2].innerText;
					var s = document.createElement("script");
					s.type = "text/javascript";
					s.text = scriptText;
					document.body.appendChild(s);
				}
			},
			error: function (xhr, textStatus, exception) {
				alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
			}
		});
	}

	//If IE, simply perform location.reload in order to execute _rootfrontend file again to render the IE meta tag according to settings. This tag cannot be 
	//added dynamically, so a reload is required for (https://civicplus.tpondemand.com/entity/29964).
	if (window.isie) {
		location.reload();
		return;
	}

}

function refreshMegaMenusForLiveEdit() {
	setTimeout(function () {
		var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
			.map(function () {
				$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
				return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
			}).toArray();
		window.Pages.megaMenuLoaded.resolve();
		reloadSharedContentContainers(megaMenuContentContainers);
	}, 200);
}

function showHideUnpublishedItems(checked) {
	if (checked) {
		document.cookie = "showAll=true; expires=12/31/2999 23:59:59; path=/";
		document.getElementById('ysnLiveEditShowMyActionItems').checked = true;
		document.getElementById('ysnLiveEditShowMyActionItems').disabled = true;
	}
}

function showHideUnpublishedItems(checked) {
	var actionItemsCheckbox = document.getElementById('ysnLiveEditShowMyActionItems');
	document.cookie = `showAll=${checked}; expires=12/31/2999 23:59:59; path=/`;

	if (actionItemsCheckbox) {
		actionItemsCheckbox.checked = checked;
		actionItemsCheckbox.disabled = checked;
		showHideActionItems(checked);
	}
}

function showHideActionItems(checked) {
	if (checked)
		document.cookie = "showActionItems=true; expires=12/31/2999 23:59:59; path=/";
	else
		document.cookie = "showActionItems=false; expires=12/31/2999 23:59:59; path=/";

	if (typeof redrawContent == 'function')
		redrawContent();
	else
		location.reload(true);
}

function showHideLiveEditControl(checked) {
	if (checked)
		document.cookie = "showLiveEditControls=true; expires=12/31/2999 23:59:59;";
	else
		document.cookie = "showLiveEditControls=false; expires=12/31/2999 23:59:59;";

	//if (typeof redrawContent == 'function' && !$.browser.msie)
	//	redrawContent();
	//else
	location.reload(true);
}

function disableCustomHtmlRendering(checked) {
	if (checked)
		document.cookie = "disableCustomHtmlRendering=true; expires=12/31/2999 23:59:59; path=/";
	else
		document.cookie = "disableCustomHtmlRendering=false; expires=12/31/2999 23:59:59; path=/";

	location.reload(true);
}

// Print preview.
function pPreview(mode) {
	var printStr = 'PREVIEW=YES';
	if (mode == 1)
		printStr = 'PRINT=YES';
	var url = document.URL.split("#")[0];
	window.open(url + (url.indexOf("?") == -1 ? '?' : '&') + printStr, '_blank');
}

function Navigate(txtAction) {
	if (txtAction.lastIndexOf("&") == txtAction.length - 1)
		txtAction = txtAction.slice(0, -1);
	document.frmNavigate.action = txtAction;
	location.href = txtAction;
}

function showExternalSiteDialog(anchor) {
	if ($(anchor).closest('[contenteditable=true]').length) { // Don't do anything for content editables
		return false;
	}

	window.externalUrl = anchor.href;
	window.externalTarget = anchor.target;

	openCpModal({
		title: 'Leaving Site',
		className: 'externalLinkDialog',
		url: '/Common/Modules/LeavingSite/Dialog.aspx',
		useIframe: true,
		iframeHeight: '370px',
		scrolling: true
	});
	return false;
}

// todo: rename to openModalDialog, to match closeModalDialog
function openGenericModalDialog(height, className, title, src) {
	document.getElementById('ctl00_LiveEditModalTitle').innerHTML = title;

	behavior = $find('editItemBehavior');

	if (behavior) {
		var ifr = document.getElementById('liveEditDialog');
		var target = document.getElementById('ctl00_ctl00_MainContent_ctl00_liveEditPopupWindow');

		ifr.src = src;

		if (className)
			target.className = 'modalContainer ' + className;
		if (height)
			ifr.style.height = height;

		ifr.style.display = 'block';

		behavior.show();
	}
}

function expandCollapseCategory(catID) {
	if (commonLocalization == null) {
		commonLocalization = GetJson('/Localization/Index');
	}

	if (document.getElementById(catID).style.display == 'none') {
		$('#cat' + catID + ' > a').attr('title', commonLocalization.CollapseThisCategory);
		document.getElementById(catID).style.display = 'block';
		document.getElementById('a_' + catID).innerHTML = '&#9660;';
	}
	else {
		$('#cat' + catID + ' > a').attr('title', commonLocalization.ExpandThisCategory);
		document.getElementById(catID).style.display = 'none';
		document.getElementById('a_' + catID).innerHTML = '&#9658;';
	}
}

function slideToggle(element, bShow, duration) {
	var $el = $(element)
		, visible = $el.is(":visible");

	// if the bShow isn't present, get the current visibility and reverse it
	if (arguments.length == 1) bShow = !visible;

	// if the current visiblilty is the same as the requested state, cancel
	if (bShow == visible) return false;

	$.each($el, function (i, e) {
		var $e = $(e);
		var visible = $e.is(":visible");
		var height = $e.show().height();
		if (!$e.data("originalHeight")) {
			$e.data("originalHeight", height);
		};
		if (!visible) $e.hide().css({ height: 0 });
	});

	// expand the knowledge (instead of slideDown/Up, use custom animation which applies fix)
	if (bShow) {
		$.each($el, function (i, e) {
			$e = $(e);
			$e.show().animate({ height: $e.data("originalHeight") }, { duration: duration });
		});
	} else {
		$el.animate({ height: 0 }, {
			duration: duration, complete: function () {
				$el.hide();
			}
		});
	}
	$el.queue(function () { $el.height('auto'); $(this).dequeue(); });
}


$(window).on("load", function () {
	removeEmptyFeaturedAreas();
	//Run these once here since window.load invokes after images are loaded as well in the DOM. This fixes one of the issues where the landscape version of the page on ipad etc has images all messed up
	//since SetHeights run before the images are loaded in the DOM
	if (window.isResponsiveEnabled) {
		if (typeof SetHeights === 'function' && !window.isRemoveSetHeights)
			SetHeights();
		if (typeof dynamicStretchContainers === 'function')
			dynamicStretchContainers();
	}
});

function GetSignIn() {
	$.get('Services/ForgotPassword.ashx?Username=' + encodeURIComponent(userName), function (data) {
		if (data == -1)
			alert($("#Localization_AccountDoesNotExist").val());
		else
			alert($("#Localization_PasswordReminder").val());
	});
}

function PerformSignIn() {
	var userName = $('#UserName').val();
	var password = $('#Password').val();
	var rememberMe = $('#RememberMe').val();
	var emailAddress = $('#UserName').val();
	var url;
	$.post('/MyAccount/SignInJson?' +
		'UserName=' + userName +
		'&Password=' + password +
		'&RememberMe=' + rememberMe +
		'&EmailAddress=' + emailAddress
		, function (data) {
			if (data.status != 1)
				alert(data.msg);
			else {
				if (data.HasAcceptedTerms == true) {
					url = getParameterByName('url');
					url = url == '' ? window.location.href : url;
					window.location.href = url;
				}
				else {
					window.location.href = '/MyAccount/Terms';
				}
			}
		});
}

function SignIn() {
	window.location.href = '/MyAccount?from=url&url=' + window.location.pathname + window.location.search;
}

function SignOut() {
	(function ($) {
		$.QueryString = (function (a) {
			if (a == "") return {};
			var b = {};
			for (var i = 0; i < a.length; ++i) {
				var p = a[i].split('=');
				if (p.length != 2) continue;
				b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
			return b;
		})(window.location.search.substr(1).split('&'))
	})(jQuery);

	var url = '/publiclogin.aspx?out=true&txtRedirect=' + window.location.pathname.substring(1) + window.location.search;
	var dn = $.QueryString['dn'];
	if (dn != undefined) {
		if (!dn.toLowerCase().startsWith('http'))
			dn = 'http://' + dn;
		url = dn + url;
	}

	window.location.href = url;
}

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

//Share current page url using common mvc modal (only for mvc modules)
function openShareEmailPageModal(subject) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	openCpModal({
		type: 'POST',
		data: {
			subject: emailSubject
		},
		title: 'Email This Page',
		className: 'emailPage',
		url: '/EmailPage/Home/EmailPageModal'
	});
}

function openShareEmailPageModalWithReferrel(subject, urlReferrer) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	openCpModal({
		type: 'POST',
		data: {
			subject: emailSubject,
			specificUrlReferrer: urlReferrer
		},
		title: 'Email This Page',
		className: 'emailPage',
		url: '/EmailPage/Home/EmailPageModalWithSpecificUrl',
		elementID: 'mvcModal'
	});
}

//Share current page url redirecting to email page (for legacy pages do not support new mvc modal)
function openShareEmailPage(subject) {
	var emailSubject = (subject && subject != '') ? subject : document.title;
	window.location.href = '/EmailPage/?subject=' + escape(emailSubject);
}

//Layout Banners
function renderBanner(bannerPlaceHolderID, bannerSlotID, bannerOption, bannerImage, imageFolder, imageTag) {
	var $bannerSlot = $('#' + bannerSlotID);
	var $bannerPlaceHolder = $('#' + bannerPlaceHolderID);
	//render external banner
	$bannerPlaceHolder.replaceWith(createBannerExternalMarkup($bannerSlot, bannerOption, bannerImage, imageFolder, imageTag));
	var stickyContainers = $('div.stickyInnerDiv.sticky');
	if (stickyContainers.length > 0) {
		$('#bodyWrapper .bannerObject.external').css('top', '0');
	}
	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 5500);
}

function centerImage(parentWidth, parentHeight, imageWidth, imageHeight) {
	var left = 0;
	//Adjust width to view port proportionally
	var proportionRatio = 1;
	if (imageWidth > parentWidth) {
		proportionRatio = (imageWidth - parentWidth) / imageWidth;
		imageHeight -= imageHeight * proportionRatio;
	} else if (imageWidth < parentWidth) {
		proportionRatio = (parentWidth - imageWidth) / imageWidth;
		imageHeight += imageHeight * proportionRatio;
	}
	imageWidth = parentWidth;

	if (imageHeight < parentHeight) {
		//Readjust Height to view port proportionally
		proportionRatio = (parentHeight - imageHeight) / imageHeight;
		imageWidth += imageWidth * proportionRatio; imageHeight = parentHeight;
		left = -1 * (imageWidth - parentWidth) / 2; //move left to center image
	}

	return { imageWidth: imageWidth, imageHeight: imageHeight, left: left };
}

function createBannerExternalMarkup($bannerSlot, bannerOption, bannerImage, imageFolder, imageTag) {
	if (!window.isRemoveSetHeights)
		SetHeights();
	if (typeof window.dynamicStretchContainers === 'function') window.dynamicStretchContainers();

	var parentHeight = $bannerSlot.parent().outerHeight(true);
	var windowHeight = $(window).height();
	var imageHeight = bannerImage.Height;
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";
	var left = 0;

	if (isBackgroundBanner && windowHeight > parentHeight) {
		parentHeight = windowHeight;
	}

	var imageWidth = bannerImage.Width;
	if (bannerOption.ImageScale) {
		var parentWidth = $bannerSlot.outerWidth(true);
		if (isBackgroundBanner) {
			parentHeight = windowHeight;
		}
		var centerValues = centerImage(parentWidth, parentHeight, imageWidth, imageHeight);
		imageWidth = centerValues.imageWidth;
		parentHeight = centerValues.imageHeight;
		left = centerValues.left;
	}

	if (bannerImage.FileName.startsWith('/')) {
		imageFolder = '';
	}

	var $img = (!imageTag)
		? $('<img class="bannerObject" src="' + imageFolder + bannerImage.FileName + '" alt="">')
		: $(imageTag);
	$img.attr("width", imageWidth + "px");
	$img.css("position", "absolute");

	switch (bannerOption.ImageAlignment) {
		case 1:
		case "Left":
			$img.css("left", "0");
			$img.css("margin", "0");
			break;
		case 2:
		case "Center":
			$img.css("left", "50%");
			$img.css("margin", "0 0 0 -" + Math.round(bannerImage.Width / 2) + "px");
			break;
		case 3:
		case "Right":
			$img.css("right", "0px");
			$img.css("margin", "0");
			break;
	}

	var position = 'position: ' + (bannerOption.ImageScroll ? 'absolute;' : 'fixed;');
	var $bodyWrapper = $("#bodyWrapper");
	if (!bannerOption.ImageScroll) {
		left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
	}

	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="min-height: ' + parentHeight + 'px ;top: 0px; left: ' + left + 'px; right: 0; ' + position + ' overflow: hidden; z-index: -999999; padding: 0px;"></div>';

	var $html = $(html).append($img);
	$html.attr('data-image-scale', bannerOption.ImageScale);

	var oldScreenHeight = screen.height;
	var oldScreenWidth = screen.width;
	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerOption.SlotName);
	if (bannerOption.ImageScale) {
		$(window).bind('resize.banner' + bannerOption.SlotName, function () {
			if (screen.height !== oldScreenHeight && screen.width !== oldScreenWidth) {
				oldScreenHeight = screen.height;
				oldScreenWidth = screen.width;
				resize($bannerSlot);
			}
		});
	}
	///private function that takes care of resizing when image scale
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var imageWidth = bannerImage.Width;
		if (bannerOption.ImageScale) {
			var parentWidth = $bannerSlotContainer.outerWidth(true);
			if (isBackgroundBanner) {
				parentHeight = windowHeight;
			}
			var centerValues = centerImage(parentWidth, parentHeight, imageWidth, imageHeight);
			imageWidth = centerValues.imageWidth;
			parentHeight = centerValues.imageHeight;
			left = centerValues.left;
		}

		if (!bannerOption.ImageScroll) {
			left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
		}

		$html.css("left", left);
		$html.find('img.bannerObject').width(imageWidth);
		$html.css("min-height", parentHeight + "px");
	};

	window.Pages = window.Pages || {};
	window.Pages.Banners = window.Pages.Banners || {};
	$(window.Pages.Banners).bind('ExternalBannersResize', function () { resize($bannerSlot); }); // resize external banners

	if (jQuery.resize) {
		$bannerSlot.children(":not(.bannerObject, script)").unbind("resize").bind("resize", function () { $(window.Pages.Banners).trigger('ExternalBannersResize'); });
	}

	if (bannerOption.ImageScale) {
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
		window.Pages.onResizeHandlers.push(function () {
			$(window.Pages.Banners).trigger('ExternalBannersResize');
		});
	}

	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 8000);
	return $html;
};

function setBannerHeights() {
	$('div.bannerObject.external').each(function () {
		var $this = $(this);
		var isBackgroundBanner = $this.parent().attr("id") == "bodyWrapper" || $this.parent().parent().attr("id") == "bodyWrapper";
		var parentHeight = parentHeight = $this.parent().outerHeight(true);
		var windowHeight = $(window).height();

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		if ($this.attr('data-image-scale') === "true") {
			$this.css('min-height', $this.find('img').height());
		} else {
			$this.css('min-height', parentHeight);
		}
	});
}

//Creates slideshow markup for external banners.
function createBannerExternalMarkupForSlideshow($bannerSlot, bannerOption, imageFolder, bannerImagesJSON, bannerMode, rotatingSequence) {
	if (!window.isRemoveSetHeights)
		SetHeights();
	if (typeof window.dynamicStretchContainers === 'function') window.dynamicStretchContainers();

	var parentHeight = $bannerSlot.parent().outerHeight(true);
	var parentWidth = $bannerSlot.outerWidth(true);
	var windowHeight = $(window).height();
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";
	var greaterImageWidth = 0, greaterImageHeight = 0;
	var left = 0;

	if (isBackgroundBanner && windowHeight > parentHeight) {
		parentHeight = windowHeight;
	}

	var img = '';
	for (var i = 0; i < bannerImagesJSON.length; i++) {
		var bannerImage = bannerImagesJSON[i];
		var imageWidth = bannerImagesJSON[i].Width;
		if (imageWidth > greaterImageWidth)
			greaterImageWidth = imageWidth;
		if (bannerImagesJSON[i].Height > greaterImageHeight)
			greaterImageHeight = bannerImagesJSON[i].Height;
		var alignmentCss = "";
		switch (bannerOption.ImageAlignment) {
			case 1:
			case "Left":
				alignmentCss += 'left: 0;  margin: 0;';
				break;
			case 2:
			case "Center":
				alignmentCss += ' left: 50%; margin: 0 0 0 -' + Math.round(bannerImage.Width / 2) + 'px;';
				break;
			case 3:
			case "Right":
				alignmentCss += ' right: 0px; margin: 0;';
				break;
		}
		if (bannerOption.ImageScale) {
			imageWidth = parentWidth;
		}

		var tempImageFolder = imageFolder;
		if (bannerImagesJSON[i].FileName.startsWith('/')) {
			tempImageFolder = '';
		}

		if (bannerMode === 'Slideshow') {
			if (i > 0) {
				img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute; display: none;' + alignmentCss + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-delayed="true" data-delayed-image="' + tempImageFolder + bannerImagesJSON[i].FileName + '" alt="">';
			} else {
				img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
			}
		}
		else if (bannerMode === 'Rotating') {
			if (rotatingSequence < 0) {
				rotatingSequence = 0;
			}
			var rotSeqLessOne = rotatingSequence === 0 ? bannerImagesJSON.length - 1 : rotatingSequence - 1;
			var rotSeqPlusOne = rotatingSequence === bannerImagesJSON.length - 1 ? 0 : rotatingSequence + 1;
			if (bannerOption.SlideshowControlsPosition === 0 || bannerOption.SlideshowControlsPosition === 'None') {
				if (i === rotatingSequence) {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
				}
			} else {
				if (i === rotSeqLessOne || i === rotatingSequence || i === rotSeqPlusOne) {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="' + tempImageFolder + bannerImagesJSON[i].FileName + '" data-is-delayed="false" alt="">';
				} else {
					img += '<img class="bannerObject" width="' + imageWidth + 'px" style="position: absolute;' + alignmentCss + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-is-delayed="true" data-delayed-image="' + tempImageFolder + bannerImagesJSON[i].FileName + '" alt="">';
				}
			}
		}

	}

	var position = 'position: ' + (bannerOption.ImageScroll ? 'absolute;' : 'fixed;');
	var $bodyWrapper = $("#bodyWrapper");
	if (!bannerOption.ImageScroll) {
		left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
	}
	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="min-height: ' + parentHeight + 'px ;top: 0; left: ' + left + 'px; right: 0; ' + position + ' overflow: hidden; z-index: -999999; padding: 0px;">'
		+ img + '</div>';

	var $html = $(html);
	$html.attr('data-image-scale', bannerOption.ImageScale);

	///private function that takes care of resizing when image scale
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var imageWidth = greaterImageWidth;
		if (bannerOption.ImageScale) {
			var parentWidth = $bannerSlotContainer.outerWidth(true);
			if (isBackgroundBanner) {
				parentHeight = windowHeight;
			}
			var centerValues = centerImage(parentWidth, parentHeight, imageWidth, greaterImageHeight);
			imageWidth = centerValues.imageWidth;
			parentHeight = centerValues.imageHeight;
			left = centerValues.left;
		}

		if (!bannerOption.ImageScroll) {
			left += parseInt($bodyWrapper.css("padding-left"), 10); //workaround for fixed position
		}

		$html.css("left", left);
		$html.find('img.bannerObject').width(imageWidth);
		$html.css("min-height", parentHeight + "px");
	};

	var displayArrows = function ($bannerSlotContainer) {
		var $bannerSlideshowControls = $('#bannerSlideshowControls_' + $bannerSlotContainer[0].id);
		var windowWidth = $(window).width();
		if ($bannerSlideshowControls.length > 0 && windowWidth < 416) {
			$bannerSlideshowControls.hide();
			$html.removeClass('fixedBanner');
		} else if ($bannerSlideshowControls.length > 0 && windowWidth >= 416 && !$bannerSlideshowControls.hasClass("none")) {
			$bannerSlideshowControls.show().removeAttr('style');
			$html.addClass('fixedBanner');
		}
	}

	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerOption.SlotName);
	if (bannerOption.ImageScale) {
		window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
		window.Pages.onResizeHandlers.push(function () {
			resize($bannerSlot);
		});
		resize($bannerSlot);
	}

	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		displayArrows($bannerSlot);
	});

	var $bannerSlideshowControls = $('#bannerSlideshowControls_' + $bannerSlot[0].id);
	if ($bannerSlideshowControls.length > 0) {
		$html.addClass('fixedBanner');
	}

	return $html;
};

//Render Slideshow for External banners.
function renderExternalBannerSlideshow(bannerSlotID, bannerOption, imageFolder, bannerMode, rotatingSequence) {
	var bannerImagesJSON = bannerOption.BannerImages;

	if (!bannerOption.SlideShowSlideTiming) {
		bannerOption.SlideShowSlideTiming = 1;
	}
	if (!bannerOption.SlideShowTransitionTiming) {
		bannerOption.SlideShowTransitionTiming = 1;
	}

	var slideTransitionTiming = parseFloat(bannerOption.SlideShowSlideTiming) * 1000;
	var transitionTiming = parseFloat(bannerOption.SlideShowTransitionTiming) * 1000;

	var $bannerSlot = $('#' + bannerSlotID);
	var imagesHtml = createBannerExternalMarkupForSlideshow($bannerSlot, bannerOption, imageFolder, bannerImagesJSON, bannerMode, parseInt(rotatingSequence));

	var $imagesHtml = $(imagesHtml);
	$imagesHtml.insertAfter($('#bannerImagesJSON' + bannerOption.BannerOptionID));

	var images = null;
	images = $('div#bannerDiv' + bannerSlotID).find('img.bannerObject');

	if (bannerOption.SlideshowTransition == '1') // 1 corresponds to "none"
	{
		transitionTiming = 0; // A 0 transition time is the same as no transition.
	}

	//Moves banner controls to the body level of the DOM to avoid layout issues with z-index
	if ($('.bannerSlideshowControlsNew.centered.container').length > 0) {
		var $banner = $('#' + bannerSlotID);
		$banner.prepend($('#bannerSlideshowControls_' + bannerSlotID));
	}
	else {
		$(document.body).append($('#bannerSlideshowControls_' + bannerSlotID));
	}

	var ss = new SimpleSlideshow(images, transitionTiming, slideTransitionTiming, bannerMode, parseInt(rotatingSequence));

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerSlideshow")) {
		$('#bannerSlideshowPlayPauseBtn_' + bannerSlotID).click(function () {
			ss.togglePause();
		});
	}
}

function SimpleSlideshow($images, transitionTime, slideTime, bannerMode, rotatingSequence) {
	"use strict";
	var slideshowRef = this;
	var $imageToBeShown = null;
	var $currentImage = null;
	var $nextImage = null;
	var $previousImage = null;
	//Setting the imageToShowIndex = -1 make sure that the 1st image showing in the slideshow is the 1st image in the slideshow.
	var imageToShowIndex = -1;
	var nextImageIndex = -1;
	var previousImageIndex = 0;
	var paused = false;
	var numberOfImages = $images.length;
	var onLoad = false;
	//Setting imageToShowIndex as the next rotating sequence if slideshow enhancements are enabled and option is refreshing
	if (bannerMode === 'Rotating' && numberOfImages > 1) {
		imageToShowIndex = rotatingSequence - 1;
		onLoad = true;
	}

	var DEBUG = false;
	var diag = function (msg) {
		if (DEBUG) {
			console.log('[Simple Slideshow] ' + msg);
		}
	};

	slideshowRef.autoFadeNext = function () {
		if (!paused && bannerMode == 'Slideshow') {
			slideshowRef.goToNext();
		}
	};

	slideshowRef.goToNext = function () {
		imageToShowIndex = imageToShowIndex >= (numberOfImages - 1) ? 0 : imageToShowIndex + 1;
		previousImageIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		nextImageIndex = imageToShowIndex < numberOfImages - 1 ? imageToShowIndex + 1 : 0;

		$imageToBeShown = $($images[imageToShowIndex]);
		$nextImage = $($images[nextImageIndex]);
		if ($nextImage.data('is-delayed') == true) {
			$nextImage.attr('src', $nextImage.data('delayed-image'));
			(new Image()).src = $nextImage.data('delayed-image');
			$nextImage.data('is-delayed', 'false');
			$nextImage.data('delayed-image', '');
		}
		$currentImage = $($images[previousImageIndex]);
		diag('Automatic transition next. Image To Show Index: ' +
			imageToShowIndex +
			', Previous Image Index: ' +
			previousImageIndex);
		slideshowRef.sendBehindFront($imageToBeShown).show();

		if (!onLoad) {

			if (numberOfImages == 1) {
				slideshowRef.sendToFront($currentImage).show();
			}
			else if (numberOfImages > 1) {
				slideshowRef.sendToFront($currentImage)
					.show()
					.fadeOut(transitionTime,
						function () {
							diag('Fade out.');
							setTimeout(slideshowRef.autoFadeNext, slideTime);
						});
			}
		}
	};

	slideshowRef.goToPrevious = function () {
		imageToShowIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		previousImageIndex = imageToShowIndex == 0 ? numberOfImages - 1 : imageToShowIndex - 1;
		nextImageIndex = imageToShowIndex < numberOfImages - 1 ? imageToShowIndex + 1 : 0;

		$imageToBeShown = $($images[imageToShowIndex]);
		$previousImage = $($images[previousImageIndex]);
		if ($previousImage.data('is-delayed') == true) {
			$previousImage.attr('src', $previousImage.data('delayed-image'));
			(new Image()).src = $previousImage.data('delayed-image');
			$previousImage.data('is-delayed', 'false');
			$previousImage.data('delayed-image', '');
		}
		$currentImage = $($images[nextImageIndex]);

		diag('Automatic transition next. Image To Show Index: ' +
			imageToShowIndex +
			', Previous Image Index: ' +
			nextImageIndex);
		slideshowRef.sendBehindFront($imageToBeShown).show();
		slideshowRef.sendToFront($currentImage)
			.show()
			.fadeOut(transitionTime,
				function () {
					diag('Fade out.');
					setTimeout(slideshowRef.autoFadeNext, slideTime);
				});

	};

	this.pause = function () {
		paused = true;
		togglePlayPauseButton();
	}

	this.play = function () {
		paused = false;
		togglePlayPauseButton();
		slideshowRef.autoFadeNext();
	};

	this.togglePause = function () {
		if (paused) {
			this.play();
		} else {
			this.pause();
		}
	};

	function togglePlayPauseButton() {
		if (paused) {
			$('#slideshowPlayIcon').show();
			$('#slideshowPauseIcon').hide();
			$('.bannerSlideshowPlayPause-btn').attr('aria-label', 'Play Slideshow');
		} else {
			$('#slideshowPlayIcon').hide();
			$('#slideshowPauseIcon').show();
			$('.bannerSlideshowPlayPause-btn').attr('aria-label', 'Pause Slideshow');
		}
	}

	this.sendToFront = function ($image) {
		$image.css('z-index', '3');
		return $image;
	};

	this.sendBehindFront = function ($image) {
		$image.css('z-index', '2');
		return $image;
	};

	window.setTimeout(function () {
		slideshowRef.autoFadeNext();
	}, 500);

	if (bannerMode == 'Rotating' && numberOfImages > 1) {
		this.goToNext();
	}

	var disabledNext = false;
	var disabledPrevious = false;
	$('a[id*="arrowNext_"],button[id*="arrowNext_"]').click(function (e) {
		if (disabledNext) {
			e.preventDefault();
			return false;
		}
		slideshowRef.pause();
		slideshowRef.goToNext();
		disabledNext = true;
		setTimeout(function () {
			disabledNext = false;
		}, 1000);
		e.preventDefault();
	});

	$('a[id*="arrowPrev_"],button[id*="arrowPrev_"]').click(function (e) {
		if (disabledPrevious) {
			e.preventDefault();
			return false;
		}
		slideshowRef.pause();
		slideshowRef.goToPrevious();
		disabledPrevious = true;
		setTimeout(function () {
			disabledPrevious = false;
		}, 1000);
		e.preventDefault();
	});
	onLoad = false;
}

//External banner for videos
function renderBannerVideo(bannerPlaceHolderID, bannerSlotID, bannerVideo, videoTag) {
	if (bannerVideo == null)
		return;
	var $bannerSlot = $('#' + bannerSlotID);
	var $bannerPlaceHolder = $('#' + bannerPlaceHolderID);
	var isBackgroundBanner = $bannerSlot.parent().attr("id") == "bodyWrapper" || $bannerSlot.parent().parent().attr("id") == "bodyWrapper";

	var html = '<div class="bannerObject external" id="bannerDiv' + $bannerSlot.attr('id') + '" style="top: 0; left: 0px; right: 0; position: absolute; overflow: hidden; z-index: -999999; padding: 0px;"></div>';
	var $html = $(html);

	// Inserting html elements before resizing because they need to be on DOM beforehand.
	$bannerPlaceHolder.after($html);
	// Workaround. videotag needs to be added with jquery html() function in order to prevent issues with cache JQuery version has
	$bannerPlaceHolder.next().html(videoTag);

	///private function that takes care of resizing for video
	var resize = function ($bannerSlotContainer) {
		var parentHeight = $bannerSlotContainer.parent().outerHeight(true);
		var windowHeight = $(window).height();
		var left = 0;

		if (isBackgroundBanner && windowHeight > parentHeight) {
			parentHeight = windowHeight;
		}

		var videoHeight = bannerVideo.VideoHeight;
		var videoWidth = bannerVideo.VideoWidth;
		//by default video will always scale
		var parentWidth = $bannerSlotContainer.outerWidth(true);
		if (isBackgroundBanner) {
			parentHeight = windowHeight;
		}
		var centerValues = centerImage(parentWidth, parentHeight, videoWidth, videoHeight);
		videoWidth = centerValues.imageWidth;
		parentHeight = centerValues.imageHeight;
		left = centerValues.left;

		var $html = $bannerPlaceHolder.next();
		$html.css("left", left);
		$html.find('video').css("width", videoWidth + "px");
		$html.find('img').css("width", videoWidth + "px");
		$html.css("min-height", parentHeight + "px");
	};

	//bind windows resize event if needed
	$(window).unbind('resize.banner' + bannerSlotID);
	window.Pages.onResizeHandlers = window.Pages.onResizeHandlers || [];
	window.Pages.onResizeHandlers.push(function () {
		resize($bannerSlot);
	});
	//adjust resize first time
	resize($bannerSlot);

	// Pause/Play button event binding

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerVideo") && $('button[id*="bannerVideoToggleBtn_"]').length) {
		$('button[id*="bannerVideoToggleBtn_"]').click(function (e) {
			e.preventDefault();
			toggleVideoPlayPause($bannerSlot)
		});
	}

	if (window.FeatureToggles.isActive("CMS.DesignCenter.EnablePauseAndPlayForBannerVideo")){
		$(document).on('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleVideoPlayPause($bannerSlot);
			}
		});
	}
}

function toggleVideoPlayPause($bannerSlot) {
	let playIcon = $("#videoPlayIcon");
	let pauseIcon = $("#videoPauseIcon");
	let iconTitle = $("#videoIconTitle");
	let button = $(".bannerVideoToggle-btn");
	let $bannerObject = $bannerSlot.children('.bannerObject');
	let video = $bannerObject.find('video')[0];
	if (video) {
		if (video.paused) {
			video.play();
			playIcon.hide();
			pauseIcon.show();
			button.attr("aria-label", "Pause Video");
			iconTitle.text("Pause Video");
		} 
		else {
			video.pause();
			playIcon.show();
			pauseIcon.hide();
			button.attr("aria-label", "Play Video");
			iconTitle.text("Play Video");
		}
	}
}

//removes empty feature areas
function removeEmptyFeaturedAreas() {
	$('div[id^="featureArea"]').each(function () {
		if ($(this).html().trim() == "") {
			$(this).parent().css("display", "none");
		}
	});

	$('div[id^="featureContent"]').each(function () {
		if ($(this).html().trim() == "") {
			$(this).css("display", "none");
		}
	});
}

function setWidgetServiceHovering($widgetHeader, bindKeyPress, additionalLogic) {
	if (window.isMobileBrowserIncludingTablets) {
		setWidgetServiceClicking($widgetHeader, bindKeyPress, additionalLogic);
		return;
	}
	var $widgetBody = $widgetHeader.next();
	var $parent = $widgetHeader.parent();
	var timeOutID = null;
	var hideDelay = 400;
	var showDelay = 300;
	$widgetHeader.bind("mouseenter.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			if (!$widgetBody.is(':visible'))
				adjustFlyoutPosition($parent, $widgetBody);
			$widgetBody.show();
			additionalLogic();
		}, showDelay);
	});
	$widgetHeader.bind("mouseleave.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			$widgetBody.hide();
			additionalLogic();
		}, hideDelay);
	});
	$widgetBody.children().bind("mouseenter.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			if (!$widgetBody.is(':visible'))
				adjustFlyoutPosition($parent, $widgetBody);
			$widgetBody.show();
			additionalLogic();
		}, showDelay);
	});
	$widgetBody.children().bind("mouseleave.services", function () {
		clearTimeout(timeOutID);
		timeOutID = setTimeout(function () {
			$widgetBody.hide();
			additionalLogic();
		}, hideDelay);
	});

	if (bindKeyPress) {
		$widgetHeader.unbind("keypress").bind("keypress", function (e) {
			if (e.which === 13) {
				$widgetHeader.trigger("mouseenter.services");
			}
		});
	}
}

function setWidgetServiceClicking($widgetHeader, bindKeyPress, additionalLogic) {
	var $widgetBody = $widgetHeader.next();
	var $parent = $widgetHeader.parent();

	var click = function (e) {
		e.stopPropagation();
		e.preventDefault();
		//If the Flyout is for a megamenu, add a class of forMegaMenu.
		if ($widgetHeader.parents('.megaMenu').length > 0)
			$widgetBody.addClass('forMegaMenu');
		if (!$widgetBody.is(':visible'))
			adjustFlyoutPosition($parent, $widgetBody);
		$widgetBody.toggle();
		if (!window.isRemoveSetHeights)
			SetHeights();

		additionalLogic();
	};

	$widgetHeader.unbind("click").bind("click", click);

	if (bindKeyPress) {
		$widgetHeader.unbind("keypress").bind("keypress", function (e) {
			if (e.which === 13) {
				click(e);
			}
		});
	}
}

function setWidgetSearchClicking($widgetHeader) {
	var $widgetBody = $widgetHeader.next();
	$widgetHeader.unbind("click").bind("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$widgetBody.toggle();
		if (!window.isRemoveSetHeights)
			SetHeights()
	});
}

//removes empty feature content areas for IE7
function removeEmptyFeaturedAreas() {
	$('div[class^="html5aside"]').each(function () {
		if ($(this).html().trim() === "") {
			$(this).remove();
		}
	});
}

//Usage:  Core.Layout.attachTabbedWidgetTabHandlers();
LayoutClass.prototype.attachTabbedWidgetTabHandlers = function () {
	window.Pages.tabChangeHandlers = window.Pages.tabChangeHandlers || [];

	// Hiding all panels, then showing the first one
	$('.tabbedWidget.cpTabPanel').hide();
	$('.tabbedWidget.cpTabPanel.showing').show();

	$('.tabbedWidget.cpTabs, .tabbedWidgetNarrow.cpTabs').each(function (e) {
		var $tabs = $(this);

		// When a tab is clicked
		$tabs.find('li:not(.newTab) > a').unbind('click').click(function (e) {
			e.preventDefault();
			var $selectedTab = $(this);
			var selectedTabHref = attrOrProps($selectedTab, 'href');
			var hashTabOffset = selectedTabHref.indexOf('#');
			var target = selectedTabHref.slice(hashTabOffset);
			var anchor = this;
			var $target = $('div' + target);
			var $targetli = $selectedTab.parent();
			var isNarrow = $selectedTab.parent().parent().hasClass('tabbedWidgetNarrow');
			var isAccordion = $selectedTab.parent().parent().hasClass('accordion');
			var $parentTab = $selectedTab.parent().parent().parent();
			var tabAriaAttribute = isAccordion ? "aria-expanded" : "aria-selected";

			var showTab = function () {
				$target.addClass('showing').slideDown(function () {
					doAfterSwitchingTabs($target);
					if (document.body.classList.contains("narrow")) {
						anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
					}
				}).css({'overflow': ''});
			}
			// Checking to see if it's showing already
			if (!$target.hasClass('showing') || isAccordion === true) {
				// Making the current tab inactive, and the new one active
				var $widget = $selectedTab.parents('.widget.widgetTabbed');
				
				if(isAccordion === false)
				{
					if ($widget.hasClass('narrow')) {
						$selectedTab.parent().parent().siblings('ol').find('li.active').removeClass('active');
						$selectedTab.parent().parent().siblings('ol').find('a[' + tabAriaAttribute + '="true"]').attr(tabAriaAttribute, "false")
					} else {
						$parentTab.children().first().find('li.active').removeClass('active');
						$parentTab.children().first().find('a[' + tabAriaAttribute + '="true"]').attr(tabAriaAttribute, "false")
					}
				}

				var tabButton = $widget.find('a[href="' + target + '"]');

				if (isNarrow && isAccordion === false) {
					tabButton.attr(tabAriaAttribute, "true");
					tabButton.parent().addClass('active');
				}
				// Hiding the current panel, showing the new one
				if (!isNarrow) {
					tabButton.attr(tabAriaAttribute, "true");
					tabButton.parent().addClass('active');
					$target.siblings('.showing').removeClass('showing').hide();
					$target.addClass('showing').show();
					doAfterSwitchingTabs($target);
				} else {
					if(isAccordion === false)
					{
						$target.siblings('.showing').removeClass('showing').slideUp();
						
						showTab();
					}
					else
					{
						if ($targetli.hasClass('active')) { 
							$targetli.removeClass('active');
							$targetli.find("a").attr(tabAriaAttribute, "false");
						} else {
							$targetli.addClass('active');
							$targetli.find("a").attr(tabAriaAttribute, "true");
						}
						$target.hasClass('showing') ? $target.removeClass('showing').slideUp() : showTab();
					}
				}

				var $arr = ($target).contents().find('.videoPlayer');
				if ($arr.length > 0) {
					($target).contents().find('.videoPlayer').children('iframe').trigger('onload');
				}
			}
			//Checking any on tab change handlers were added
			if (window.Pages.tabChangeHandlers.length > 0) {
				window.Pages.tabChangeHandlers.forEach(function (car) { car(); });
			}
		});
	});

	$('.nextAction.tabName').unbind('click').click(function (e) {
		e.preventDefault();
	});

	$.fn.hasData = function (prop) {
		return this.filter(
			function () { return $(this).data(prop) != null; }
		);
	};

	var doAfterSwitchingTabs = function ($target) {
		fireMediaQueriesIfNeeded($target);
		if (!window.isRemoveSetHeights)
			SetHeights();
	};
};


LayoutClass.prototype.debouncedStyleSheetUpdate = (function () {
	var writeStylesTimeouts = {};
	var DEBUG = false;

	var diag = DEBUG && console && console.log ?
		function (msg) {
			console.log('[Debounced Stylesheet Update] ' + msg);
		}
		: function () { };


	// Original Function We are Debouncing to update stylesheet.
	var updateStylesheet = function (styleSheetID, styles, isEditor) {
		diag('Debounced Call');
		var styleSheet = document.getElementById(styleSheetID);
		isEditor = isEditor === undefined ? false : isEditor;
		if (!isEditor) {
			//Include misc styles from Theme properties.
			if ($('#hdnThemePropertiesMiscStyles').length > 0 && $('#hdnThemePropertiesMiscStyles').html() != '')
				styles += $('#hdnThemePropertiesMiscStyles').html();
		}
		if (styleSheet == null) {
			styleSheet = document.createElement('style');
			styleSheet.id = styleSheetID;
			styleSheet.setAttribute('type', 'text/css');
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(styleSheet);
		}
		if (styleSheet.styleSheet) {
			styleSheet.styleSheet.cssText = styles; //IE only
		} else {
			styleSheet.innerHTML = styles;
		}
	};

	return function (styleSheetID, styles) {
		diag('Bounce Call');
		if (writeStylesTimeouts[styleSheetID]) {
			clearTimeout(writeStylesTimeouts[styleSheetID]);
		}
		writeStylesTimeouts[styleSheetID] = setTimeout(function () { updateStylesheet(styleSheetID, styles); }, 100);
	};
}());

LayoutClass.prototype.updateStylesheet = function (styleSheetID, styles) {
	this.debouncedStyleSheetUpdate(styleSheetID, styles);
};

//Usage:  Core.Layout.toggleFeatureColumn();
LayoutClass.prototype.toggleFeatureColumn = function () {
	if ($('#pageShowFeatureColumn').val() == 'True') {
		$('body').addClass('withFeatureColumn');
		$('#featureColumn').show();
	} else {
		$('body').removeClass('withFeatureColumn');
		$('#featureColumn').hide();
	}

	if (typeof SetHeights == 'function' && !window.isRemoveSetHeights) {
		SetHeights();
	}
};

//Usage:  Core.Layout.stretchContainers(containerSelectors);
LayoutClass.prototype.stretchContainers = function (containerSelectors) {
	this.unstretchContainers(containerSelectors);
	$(containerSelectors).each(function () {
		var $container = $(this);
		var height = $container.outerHeight();
		$container.siblings().each(function () {
			var $sibling = $(this);
			if ($sibling.css('float') != 'none') {
				var siblingHeight = $sibling.outerHeight();
				height = siblingHeight > height ? siblingHeight : height;
			}
		});
		if (height >= ($container.outerHeight())) {

			var desiredContainerHeight = height;
			var $innermostWrapper = $container;

			//The paddings of the container itself needs to be considered as well since we allow for paddings on the structural containers too. 
			//This fixes the height issues we have been having with several sites(neighboring containers dont match height) Vishal
			var $wrappers = $innermostWrapper;

			while ($innermostWrapper.children('.inner').length) {
				$wrappers = $wrappers.add($innermostWrapper.children('.inner'));
				$innermostWrapper = $innermostWrapper.children('.inner');
			}

			var paddingHeight = 0;

			$wrappers.each(function () {
				$this = $(this);
				paddingHeight += parseFloat($this.css('paddingTop')) + parseFloat($this.css('paddingBottom')) + parseFloat($this.css('borderBottomWidth')) + parseFloat($this.css('borderTopWidth'));
			});

			var calculatedHeight = desiredContainerHeight - paddingHeight;
			var heightString = calculatedHeight.toString() + 'px';
			$innermostWrapper.css('min-height', heightString);
		}
	});

	setTimeout(function () {
		if (!window.isRemoveSetHeights)
			SetHeights();
	}, 8000);
};

//Usage:  Core.Layout.unstretchContainers(containerSelectors);
LayoutClass.prototype.unstretchContainers = function (containerSelectors) {
	$(containerSelectors).each(function () {
		var $container = $(this);
		$container.css('min-height', '0');
		$('.inner', $container).css('min-height', '0');
	});
};

//Usage:  Core.Layout.dynamicJavascript(javaScriptCode);
LayoutClass.prototype.dynamicJavascript = function (javaScriptCode) {
	var code = javaScriptCode.replace(/\\'/g, "'").replace(/\\\"/g, "\"").replace(/\\\t/g, "\t").replace(/\\\r/g, "\r").replace(/\\\n/g, "\n").replace(/\\\f/g, "\f").replace(/\\\\/g, "\\");
	var myFucn = new Function(code);
	myFucn();
};

//Usage:  Core.Layout.setColumnWidth($widget);
LayoutClass.prototype.setColumnWidth = function ($widget) {
	var width = $('input.auto.update.widgetOption.common[name=WidgetWidth]').val();
	$widget.closest('div.outer.col').css('width', width ? width + '%' : "");
};

function LayoutClass() {
	this.filter = null;
}

if (!window.Core.Layout) {
	window.Core.Layout = new LayoutClass();
}
// Handles polling login status after ajax requests lazily, and notifying the user if they should be notified.
//  The whole intention of this block of code is to alert the user they aren't logged in after executing an AJAX request 
//  without colliding with other AJAX requests or affecting user experience. This is only done if the user is initially logged in.
$(function () {
	var DEBUG = false;

	var diag = function (msg) {
		if (DEBUG) {
			console.log("[Send User Home If Logged Out] " + msg);
		}
	};

	// We want to be able to start/load this at a specific time (after all of the initial ajax calls complete) so I wrapped it in a function.
	var isLoggedInModule = function () {
		"use strict";
		diag('Initializing Send User Home If Logged Out module.');
		var ns = this;
		var notLoggedInMessage = 'You are no longer logged in. Please login to continue.';
		var loginCheckPending = false;

		ns.initiallyLoggedInWithLiveEdit = $('[href="#liveEditMenu"]').hasClass('on');

		if (!ns.initiallyLoggedInWithLiveEdit) {
			diag('Initialization Stopped - Not initially logged in with Live Edit On.');
			return; // We don't need to notify them they aren't logged in, if they aren't logged in initially.
		}

		$.ajaxSetup({
			beforeSend: function () {
				ns.isAjaxOccuring = true;
			},
			complete: function () {
				diag('Ajax Call Completed (hook) - ' + (loginCheckPending ? 'Login Check is Pending.' : 'Login Check is not already Pending.'));
				ns.isAjaxOccuring = false;
				// If an ajax call is already occuring wait until it is finished. We don't want to affect the user experience with normal AJAX calls.
				if (!loginCheckPending) {
					lazyExecute(
						alertIfUserNotLoggedIn,
						function () { return !ns.isAjaxOccuring; },
						2000
					);
				}
			}
		});

		// Executes a function based on a condition lazily, checking a given predicate at a set interval. 
		var lazyExecute = function (fn, executeWhenPredicate, pollingTime) {
			diag('Lazy Execution Triggered.');
			loginCheckPending = true;
			var intervalExecuter = null;
			var internalHandler = function () {
				diag('Attempting to execute login check.');
				if (executeWhenPredicate()) {
					fn();
					clearInterval(intervalExecuter);
					diag('Login check is no longer pending. Login check invoked.');
					loginCheckPending = false;
				} else {
					diag('AJAX request in progress. Trying again in a short bit.');
				}
			};

			intervalExecuter = setInterval(internalHandler, pollingTime);
		}

		var alertIfUserNotLoggedIn = function () {
			if (!isUserLoggedIn()) {
				alert('You are no longer logged in. Please login to continue.');
				location.href = '/myaccount?from=url&url=' + window.location.pathname;
			}
		}
	}

	// We don't need to start checking if the user is logged in until after everything is probably loaded. I went with 10 seconds
	setTimeout(isLoggedInModule, 6000);
});

//Begin Authentication
if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.host;
}

function popupSignIn(redirectUrl, parameterSet, jsCallback) {
	var popupBasedAuthenticationJs = new PopupBasedAuthentication();

	popupBasedAuthenticationJs.setupJsCallback(jsCallback);
	popupBasedAuthenticationJs.requireLoggedIn(redirectUrl, parameterSet);
};

function internetExplorerMessagingHandlerForPopup(data) {
	var popupBasedAuthenticationJs = new PopupBasedAuthentication();
	popupBasedAuthenticationJs.internetExplorerMessageHandling(data);
};

///Matches the rest of the tab's height with the highest tab in a tabbed widget.
function setTabbedWidgetsTabHeight(tabWrapperID) {
	if (tabWrapperID == null || typeof tabWrapperID == 'undefined') {
		$('.tabbedWidget.cpTabs').not('.left,.right').each(function (e) {
			var $this = $(this);
			$this.find('li').each(function () {
				var $thisLi = $(this);
				if ($thisLi.css('height') != '0px')
					$thisLi.find('a').css('height', $thisLi.css('height'));
			})
		});
	}
	else {
		var $wrapper = $('#' + tabWrapperID);
		$wrapper.find('ol.tabbedWidget.cpTabs').not('.left,.right').find('li').each(function () {
			var $thisLi = $(this);
			if (!$thisLi.is(':hidden')) {
				if ($thisLi.css('height') != '0px')
					$thisLi.find('a').css('height', $thisLi.css('height'));
			}
		});
	}
}

var internetExplorerVersion = (function () {
	var undef;

	var agent = navigator.userAgent;
	var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
	var matches = agent.match(reg);
	if (matches != null) {
		return matches[1];
	}
	return undef;
}());
//End authentication

/********************************************************************************
Logic for moving mega menus in DOM and updating their attributes.
/*******************************************************************************/
function moveMegaMenusInDOM(data) {
	//Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
	var $megaMenus = $('.megaMenuContainer').not('.moved');
	var $megaMenusAlreadyMoved = $('.megaMenuContainer.moved');

	var parentID;
	var marginLeft, marginTop;
	$megaMenus.each(function (e) {
		$(this).appendTo('body');
		$(this).addClass('moved').addClass('megaMenu');
		$(this).css('position', 'absolute');
		$(this).css('z-index', '100');
		updateMegaMenuAttributes($(this), data);
	});
	$megaMenusAlreadyMoved.each(function (e) {
		updateMegaMenuAttributes($(this), data);
	});
}

function updateMegaMenusOnBrowserResize() {
	var $megaMenus = $('.megaMenuContainer');
	$megaMenus.each(function () {
		updateMegaMenuAttributes($(this));
	});
}

function updateMegaMenuAttributes($this, data) {
	//Enums
	var MegaMenuWidthReferenceEnum = { MainNavigation: 0, SitesContent: 1 };
	var MegaMenuPopupDirectionEnum = { Below: 0, Above: 1 };
	var widthReference = $('#megaMenuWidthReference').val();
	var direction = $('#megaMenuPopupDirection').val();

	//If data has been provded, use it!.
	if (data != null) {
		if (data.widthReference != null)
			widthReference = data.widthReference;
		if (data.direction != null)
			direction = data.direction;
	}

	//Get the main nav.
	var $mainNav = $('.siteNav.mainNav');
	//Get the closest parent having a siteWrap class.
	var $siteWrap = $mainNav.closest('.siteWrap');

	var $referenceElem = null;
	if (widthReference == MegaMenuWidthReferenceEnum.MainNavigation)
		$referenceElem = $mainNav;
	else
		$referenceElem = $siteWrap;

	if ($referenceElem != null && $referenceElem.length > 0) {
		//Set left position of megamenu
		$this.css('left', $referenceElem.offset().left + parseFloat($referenceElem.css('padding-left')));
		//Set width of megamenu
		$this.css('width', $referenceElem.width());
	}
	if (direction == null || direction == MegaMenuPopupDirectionEnum.Below) {
		//Set top position of megamenu. 
		//NOTE: Even if the widthReference is set to SitesContent, the top position is calculated always using siteNav.mainNav since thats where the megamenu needs to be displayed. 
		//The siteWrap is some scenarios contains all the content pushing the megamnus to show even below the footer. Vishal
		$this.css('top', $mainNav.offset().top + $mainNav.height());
	}
	else {
		//Set top position of megamenu
		$this.css('top', '-' + ($this.height() - $('#divToolbars').height()) + 'px');
	}
}

function adjustMegaMenuDisplay(widthReference, direction) {
	var $megaMenu = $('#sampleMegaMenu');
	updateMegaMenuAttributes($megaMenu, { widthReference: widthReference, direction: direction });
}
/********************************************************************************
Logic for moving mega menus in DOM and updating their attributes.
/*******************************************************************************/

/***********************************************************************************************************
Common editor rendering functions used in multiple widgets(editor and InfoAdvanced so far)
/**********************************************************************************************************/
function renderSlideshowIfApplicable($element) {
	var $slideshow = $element.find('.cpSlideshowImages');
	$slideshow.each(function (e) {
		var $this = $(this);
		var imgWidth = $this.attr('data-width');
		var className = $this.attr('class');
		var id = $this.attr('id');
		var html = getSlideshowContent(id);

		$this.replaceWith(html);

		// Froala specific data
		//Add froala related classes and image attributes only after html is replaced.
		if (className.indexOf('fr-') > -1) {
			var inlineStyles = $this.attr("style");
			var $images = $('.cpSlideshowJS' + id + ' img[data-delayed-image]');
			$images.each(function (index) {
				var $image = $(this);
				$image.attr("style", inlineStyles);
			});

			// In-line and block classes
			if (this.classList.contains('fr-dib'))
				$('.cpSlideshowJS' + id).addClass('fr-dib');
			else if (this.classList.contains('fr-dii'))
				$('.cpSlideshowJS' + id).addClass('fr-dii');
			// Alignment classes
			if (this.classList.contains('fr-fil'))
				$('.cpSlideshowJS' + id).addClass('fr-fil');
			else if (this.classList.contains('fr-fir'))
				$('.cpSlideshowJS' + id).addClass('fr-fir');
		}

		//If the slideshow has an alignment set in the editor, that alignment needs to be applied to the ol surrounding the images in slideshow.
		if (className.indexOf('float') > 0) {
			var applyClass = '';
			switch (className) {
				case 'cpSlideshowImages floatRight':
					applyClass = 'floatRight';
					break;
				case 'cpSlideshowImages floatLeft':
					applyClass = 'floatLeft';
					break;
				case 'cpSlideshowImages floatCenter':
					applyClass = 'floatCenter';
					break;
				case 'cpSlideshowImages floatJustify':
					applyClass = 'floatJustify';
					break;
			}
			$('.cpSlideshowJS' + id).addClass(applyClass);
		}
	});
}

function getSlideshowContent(slideshowID) {
	var slideshowHtml = '';
	$.ajax({
		url: location.protocol + '//' + window.location.hostname + '/Slideshow/Render/' + slideshowID,
		type: 'POST',
		cache: false,
		async: false,
		success: function (response) {
			slideshowHtml = response;
		},
		error: function (xhr, textStatus, exception) {
			alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
		}
	});
	return slideshowHtml;
}
/*****************************************************************************************************************
Common editor rendering functions used in multiple widgets(editor and InfoAdvanced so far) Ends
/****************************************************************************************************************/

///Gets absolute Url when given a relative Url. Useful for certain scenarios where http call is made under https hood and it fails.
function getAbsoluteUrl(relativeUrl) {
	var myAccount = $('#MyAccountLoginPage').val();

	if (myAccount != null && myAccount.toLowerCase() == "true") {
		var basePath = location.protocol + '//' + location.hostname + (typeof (location.port) !== 'undefined' && location.port != '' && location.port != '80' ? ':' + location.port : '');
		return basePath + relativeUrl;
	}

	return relativeUrl;
}

function fireMediaQueriesIfNeeded($parent) {
	if (window.cpMedia) {
		fireMediaElementQueriesOfChildren($parent);
	}
}

function loadMaps() {
	downloadGoogleMapsCustomScript();
}

function googleMapsCustomScriptDownloaded() {
	$('.googleMap').each(function (index, item) {
		new CivicPlus.Maps().LoadMap(item);
	});
}

function downloadGoogleMapsCustomScript() {
	if (typeof (CivicPlus) !== 'undefined')
		CivicPlus.Maps = {};
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (script.readyState) {  //IE
		script.onreadystatechange = function () {
			if (script.readyState === "loaded" || script.readyState === "complete") {
				script.onreadystatechange = null;
				if (window.googleMapsMode !== 2)//dynamic but lazy loaded
					googleMapsCustomScriptDownloaded();
			}
		};
	} else {  //Others
		script.onload = function () {
			if (window.googleMapsMode !== 2)//dynamic but lazy loaded
				googleMapsCustomScriptDownloaded();
		};
	}

	script.src = '/Assets/Scripts/GoogleMaps.js';
	document.getElementsByTagName("head")[0].appendChild(script);
}

function loadGoogleMapsScript(mode, callback) {
	var script;
	window.googleMapsMode = mode;
	if ($('div.widgetStaffDirectory').length > 0 || $('.DirectoryNormalText .mapWrap .googleMap').length > 0) {
		if ($('#GoogleMapsJS').length == 0) {
			script = document.createElement('script');
			var key = document.getElementById('GoogleMapsKey').value;
			script.id = 'GoogleMapsJS';
			script.type = 'text/javascript';
			if (key != null) {
				script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=' + key + '&callback=';
			}
			else {
				script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=';
			}
			script.src += mode !== 2 ? callback : 'downloadGoogleMapsCustomScript';
			document.body.appendChild(script);
		} else {
			if (window.google && window.google.maps) {
				loadMaps();
			}
		}
	}
}
$(window).on("load", function () {
	if (typeof targetHash !== "undefined" && targetHash) {
		smoothScroll(targetHash);
	}

	$("a[href*='#']:not(a[href^='/#'], [href='#'])").click(function () {
		var $this = $(this)[0];
		if (hashRegex.test($this.hash)) {
			if ($this.target !== '_blank') {
				if (location.pathname
					.replace(/^\//, '') ===
					this.pathname.replace(/^\//, '') &&
					location.hostname === this.hostname) {
					return smoothScroll(this.hash);
				}
			}
		}
	});
	if (window.location && window.location.hash && $(window.location.hash.replace('/', '\\/')).offset()) {
		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - calculateTotalFixedHeight()
			}, 300);
		}, 2000);
	}
});
//Calculates the total fixed length
function calculateTotalFixedHeight() {
	var totalHeight = 0;

	if ($('.fixedTop_ts').height()) {
		totalHeight += $('.fixedTop_ts').height();
	}
	if ($('#divToolbars').height()) {
		totalHeight += $('#divToolbars').height();
	}
	if ($('div.cp-Toolbars').height()) {
		totalHeight += $('div.cp-Toolbars').height();
	}
	if ($('.stickyStructuralContainer').height()) {
		totalHeight += $('.stickyStructuralContainer').height();
	}

	return totalHeight;
}

function smoothScroll(hash) {
	var target = $(hash);
	target = target.length ? target : $('[name=' + hash.slice(1) + ']');
	if (!target.length) {
		return false;
	}
	var speed = target[0].getAttribute('data-smoothscrolling') ? 1333 : 1;
	$('html, body').animate({
		scrollTop: target.offset().top - ($('#divToolbars').height() + $('div.cp-Toolbars').height())
	}, speed);
	window.location.hash = ''; // Fixes chrome focus bug
	window.location.hash = hash;
	return false;
}

function hideLiveEditElement(target) {
	target.addClass('hide');
	setTimeout(function () {
		target.hide();
	}, 666);
}

function showLiveEditElement(target) {
	target.show();
	setTimeout(function () {
		target.removeClass('hide');
	}, 1);
}

function redrawContextualInnerToolbar(pageID, versionID) {
	if (versionID > 0) {
		var url = '/Pages/Toolbar/Contextual?pageID=' + pageID + '&versionID=' + versionID;
		$.ajax({
			url: url,
			type: 'GET',
			cache: false,
			success: function (response) {
				$('#informativeToolBar').remove();
				var $toolbar = $('#innerToolbar');
				if ($toolbar.length > 0) {
					$toolbar.replaceWith(response);
				} else {
					$('#divToolbars').append(response);
				}
				var toolbarHeight = $('#divToolbars').height() + 'px';
				$('#bodyWrapper').css('padding-top', toolbarHeight);
				if (window.liveEditTabs != null && typeof (window.liveEditTabs.updateMaxHeightTabs) == "function")
					window.liveEditTabs.updateMaxHeightTabs();
				InitializeToolbar();
				if (window.Toolbars && window.Toolbars.ContextualToolbar) {
					$(window.Toolbars.ContextualToolbar).trigger('Loaded');
				}
				$('.widgetSpacer').each(function () {
					var $this = $(this);
					if (!$this.hasClass('adminWrap')) {
						$this.addClass('adminWrap');
					}
				});
			},
			error: function (xhr, textStatus, exception) {
				if (xhr.status !== 0 && xhr.readyState !== 0)
					alert('Error: ' + xhr.statusText + '\nStatus: ' + xhr.status);
			}
		});
	}
}

function InitializeToolbar() {
	$('#lnkVersionSaveAsCopy', '#ulVersionToolBar').unbind('click').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('inactive')) {
			SaveAsCopy();
		}
	});
	$('#lnkVersionCancel', '#ulVersionToolBar').unbind('click').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('inactive')) {
			AbandonWorkingCopy();
		}
	});
	$('#layoutPageSelector', "#LayoutToolBar").unbind('change').change(function () {
		window.location.href = "/" + $(this).val();
	});
}

function triggerStickyStructuralInitLogic() {
	setTimeout(function () {
		new StickyStructuralContainers().init();
	}, 666);
}

//Function to toggle for widget link.
function toggleWidgetsLink(isEnabled) {
	var widgetLink = $('#innerLnkwidgets');

	if (widgetLink) {
		if (isEnabled) {
			widgetLink.prop('disabled', false).removeClass('cp-modificationProhibited');
			widgetLink[0].href = '#liveEditTab_widgets';
			addClassToWidgets(true);
		}
		else {
			widgetLink.prop('disabled', true).addClass('cp-modificationProhibited');
			widgetLink[0].href = '#';
			addClassToWidgets(false);
		}
	}
}

//Function to show/hide widget disabled popup.
function showWidgetDisabledPopUp() {
	var options = {
		title: 'Widget Edit',
		elementID: 'widgetDisabledPopup',
		autoAdjust: false,
		className: 'adminWrap accountActivation widgetPopUp popup-position',
		isFrontEnd: false,
		htmlContent: '<div class="modalScreen socialSignIn"><p>To modify this content, you\'ll have to create a copy of the page first.</p><p><a class="widget-disable socialButton twitter toTwitterPageSelect pageCopyEditWidgetModal cursor-pointer"><span class="socialButton-override">Copy Page</span></a><a class="widget-disable socialButton twitter toTwitterPageSelect closeEditWidgetModal cursor-pointer" style="padding-left:20px;"><span class="socialButton-override">Cancel</span></a></p></div>',
		draggable: true
	}

	openCpModal(options);
}

//Function to save page copy.
function savePageCopy() {
	SaveAsCopy();
	closeModal();
}

//Function to close the modal
function closeModal() {
	hideModal('.modalContainer.modalContainerCP');
}

//Function to add class to widgets
function addClassToWidgets(isEnabled) {
	var pageContent = $('.pageContent div');
	$.each(pageContent, function (index, item) {
		if (isEnabled) {
			$(item).removeClass('cp-modificationProhibited');
		}
		else {
			$(item).addClass('cp-modificationProhibited');
		}
	});
};
/**** Functions to handle Main/Left Menu on Front-end. *****/
//Global variables
var MAIN_MENU = 2;
var SIDE_MENU = 1;
var menuManager = new MenuManager();

//setup RWD menu
window.Pages = window.Pages || {};
$.when(window.Pages.rwdReady, menuManager.mainMenuReady).done(function () {
	menuManager.initRWD();
	var isLoggedBackendUser = $('#helpMenu').length == 1;
	var mql = matchMedia(window.mainMenuMediaQuery);
	var isFirstTimeRun = true;
	var executeOnce = function () {
		fireAllMediaElementQueries();
		if (typeof rearrangeFlyouts === 'function')
			rearrangeFlyouts(false);
		window.Pages.onResizeHandlersExecute();
		window.Pages.toolBarDeferred.resolve();
	};
	if (!mql.matches) {
		executeOnce();
		isFirstTimeRun = false;
	}
	cpMedia.register(window.mainMenuMediaQuery, {
		setup: function () {
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('public').addClass('admin adminWrap');
		},
		match: function () {
			$('body').addClass('narrow').removeClass('wide');
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('admin adminWrap').addClass('public');
			menuManager.moveToMobile();
			resetBodyPadding && resetBodyPadding();
			if (isFirstTimeRun) {
				executeOnce();
			}
			isFirstTimeRun = false;
		},
		unmatch: function () {
			$('body').addClass('wide').removeClass('narrow');
			if (isLoggedBackendUser)
				$('div.cpToolbar.user').removeClass('public').addClass('admin adminWrap');
			menuManager.moveToDesktop();
		}
	});
});

//Defines menu class to handle Main/Left Menu on Front-end.
function MenuManager() {
	//object variables
	this.$divListSubMenus = null; //hide div where submenus are be placed.
	//this.$containerSubMenus = $('#containerSubMenus'); ; //no hidden div to hold the submenus of main menu being displayed. Workaround to solve z-index issues. could be removed along with its related code after redo layout project!
	this.menuTimeoutID = null;
	this.mainMenuMaxSubMenuLevels = 0;
	this.sideMenuMaxSubMenuLevels = 0;
	this.popdownDelaySideMenu = 500;
	this.popdownDelayTopMenu = 500;
	this.popupDelaySideMenu = 300;
	this.popupDelayTopMenu = 300;
	this.isMainMenuEditable = false;
	this.isMainMenuBeingDragged = false;
	this.isSideMenuEditable = false;
	this.isSideMenuBeingDragged = false;
	this.sideMenuHasCustomLinks = false;
	this.bouncing = true;
	this.initialized = false;
	this.setupDraggable = false;
	this.mobileMainNav = false;
	this.mainMenuInit = false;
	this.mainMenuReady = $.Deferred();
	this.$mainNavHolderMobile = null;
	this.$mainNav = null;
	this.$mainNavMenu = null;
	this.rwdInitNavOpenButton = false;
	this.mainMenuTextResizer = false;
	this.mainMenuTextResizerRatio = 0.5;
	this.isAdjustingMainMenuItemsWidth = false;

	//Initialize menu manger after document was load
	this.init = function () {
		var self = this; // Reference to current object
		if (!self.initialized) {
			self.initialized = true;
			this.resetSubMenus();

			// Hide all submenus after clicking any menu item
			$('li.subMenuItem > a.navMenuItem, li.topMenuItem > a.navMainItem').on("click", function () {
				menuManager.hideAllSubMenus(MAIN_MENU);
				menuManager.hideAllSubMenus(SIDE_MENU);
			});

			// Hide all submenus when the Escape key is pressed
			document.addEventListener('keydown', function(event) {
				if (event.key === "Escape") {
					if (!document.activeElement.closest('#secondaryNav, #mainNav, .mainNavMegaMenu, .secondarySubMenu')) {
						return;
					}

					// Keep track of the previously focused element
					let menuButton = null;
					const previouslyFocusedElement = document.activeElement;

					// If the previously focused element happens to be a menu item within the menu that is about to be closed,
					// then find its corresponding main-nav menu-button
					const menuContainer = previouslyFocusedElement.closest("aside[id^='mainNavMegaMenu'], ol[id^='ParentMainItem']");
					if (menuContainer) {
						const itemID = menuContainer.id.match(/\d+$/)?.[0];
						menuButton = findMainNavButton(itemID);
					}

					// Hide the mega menus
					menuManager.hideAllSubMenus(MAIN_MENU);
					menuManager.hideAllSubMenus(SIDE_MENU);

					// Return focus to the button that opened the closed menu, if applicable
					if (menuButton) {
						menuButton.focus();
						return;
					}
				}
			});

			/*
				Recursively traverses the menu hierarchy to find the main navigation button corresponding to a given menu item ID.

				@param {string} itemID - The ID of the menu item to find the button for.
				@returns {HTMLElement|null} - The main navigation button element, or null if not found.
			*/
			function findMainNavButton(itemID) {
				const menuItem = document.querySelector(`#MainItem${itemID}`);
				const parent = menuItem && menuItem.closest("ol[id^='ParentMainItem']");
				const parentID = parent && parent.id.match(/\d+$/)?.[0];

				if (parentID) {
					return findMainNavButton(parentID);
				} else {
					return menuItem.querySelector('a');
				}
			}
		}
		if (self.setupDraggable)
			self.attachDragAndDropHandlers();
	};

	this.initRWD = function () {
		var self = this; // Reference to current object
		self.$mainNavHolderMobile = $("#mainNavHolderMobile");
		self.$mainNav = $("#mainNav");
		self.$mainNavMenu = $("#mainNavMenu");
		if (self.isAdjustingMainMenuItemsWidth) {
			self.resetMainItemsWidth("#mainNavMenu");
			self.adjustMainItemsWidth("#mainNavMenu");
		}
		if (self.mainMenuTextResizer)
			self.$mainNavMenu.responsiveMenuText({ ratio: self.mainMenuTextResizerRatio });
	};

	this.resetSubMenus = function () {
		var self = this; // Reference to current object
		if (self.$divListSubMenus != null)
			self.$divListSubMenus.remove();
		var $divListSubMenus = $('<div id="divListSubMenus" style="display:block; visibility:hidden; position:absolute; left:-9999px; top:-9999px;" class="siteNav"></div>');
		//Trick to get width from hidden elements needed to calculate bouncing. If above styles creates problems use hack from http://stackoverflow.com/questions/1472303/jquery-get-width-of-element-when-not-visible-display-none
		var docFrag = $(document.createDocumentFragment());
		docFrag[0].appendChild($divListSubMenus[0].cloneNode(true));
		self.$divListSubMenus = docFrag.children();
		$divListSubMenus.remove();
	};

	/*var $body = $("body");
	this.isNarrowSite = function () {
		//return $body.hasClass("narrow");
		return true;
	};*/
}

MenuManager.prototype.moveToMobile = function () {
	var menusToClose = document.getElementsByClassName("megaMenuContainer");
	for (i = 0; i < menusToClose.length; i++) {
		menusToClose[i].style.display = "none";
	}

	var self = this; // Reference to current object
	if (!self.mobileMainNav) {
		self.mobileMainNav = true;
		if (self.mainMenuTextResizer && self.$mainNavMenu.data('responsiveMenuText'))
			self.$mainNavMenu.responsiveMenuText('dispose');
		if ($("#nav-open-btn").length === 0) {
			$('#divToolbars').append($('<a class="nav-btn" id="nav-open-btn" href="#nav" aria-haspopup="true" role="menu">Menu</a>'));
			self.applyResponsiveMenuSettings();
			self.initNavOpenButton();
		}
		self.$mainNav.before($('<div id="mainNavOriginalPosition" style="display:none;"></div>'));
		self.$mainNavHolderMobile.append(self.$mainNav);
		self.$mainNavMenu.wrap('<div id="rwd-menu" class="rwd-menuwrapper">');
		self.$mainNavMenu.attr('aria-hidden', 'true');
		var $menu = $('#rwd-menu');

		$menu.rwdmenu();

		$menu.onclick = function () { };

		if (self.isAdjustingMainMenuItemsWidth)
			self.resetMainItemsWidth("#mainNavMenu");
	}
};

MenuManager.prototype.applyResponsiveMenuSettings = function () {
	var signInBar = $('.cpToolbar.user.public');
	var alertBar = $('.alertToolbar');
	var navButton = $("#nav-open-btn");
	var fullWidth = window.fullWidthResponsiveMenu;
	var fixedMenu = window.fixedResponsiveMenu;

	var responsiveMenuButtonHeight = window.responsiveMenuHeight !== '' ? window.responsiveMenuHeight : "34";
	var responsiveMenuButtonHeightWithPx = "";
	if (responsiveMenuButtonHeight.indexOf('px') === -1) responsiveMenuButtonHeightWithPx = responsiveMenuButtonHeight + 'px';

	if (responsiveMenuButtonHeight > 34) //dont assign any inline styles if height < 34
	{
		responsiveMenuButtonHeight -= (signInBar.length && 8);
		var responsiveMenuButtonHeightNavbtnWithpx = "";
		if (responsiveMenuButtonHeight.toString().indexOf('px') === -1) responsiveMenuButtonHeightNavbtnWithpx = responsiveMenuButtonHeight + 'px';

		// Set the button height
		if (responsiveMenuButtonHeight !== "px") navButton.css("height", responsiveMenuButtonHeightNavbtnWithpx).css("line-height", responsiveMenuButtonHeightNavbtnWithpx);
	}

	var responsiveMenuFontSize = window.responsiveMenuFontSize;
	if (responsiveMenuFontSize.indexOf('px') === -1) responsiveMenuFontSize += 'px';
	// Set the button font-size
	if (responsiveMenuFontSize !== 'px') navButton.css('font-size', responsiveMenuFontSize);

	if ((fullWidth || alertBar.length) && !signInBar.length) {
		// Apply styles for the full-width button
		navButton.css("right", "0");
		navButton.css("bottom", "auto");
	}

	// Special case: Forces full-width in order to avoid empty gap on right side of hamburger menu - see bug https://civicplus.tpondemand.com/entity/77390-an-extra-spacing-appears-below-the
	if (!fixedMenu && !fullWidth && !alertBar.length && !signInBar.length) {
		// Apply styles for the full-width button
		navButton.css("right", "0");
		navButton.css("bottom", "auto");
	}

	if (signInBar.length) {
		// Fix sign in bar height
		signInBar.css("height", responsiveMenuButtonHeightWithPx);

		// Fix sign in button height
		signInBar.find(".button").css("height", responsiveMenuButtonHeightWithPx).css("line-height", responsiveMenuButtonHeightWithPx);

		if (window.fixedResponsiveMenu && $('#nav-open-btn').length) {
			$('.cpToolbar.user.public').css("z-index" , "101");
		}
	}

	if (fixedMenu) {
		// Move the menu button and menu to #outer-wrap (outside of transform)
		$("#nav-open-btn, #mainNavHolderMobile").appendTo("#outer-wrap");

		// Make fixed
		navButton.css("position", "fixed");

		// Prevent overlapping in the menu
		$("#mainNavHolderMobile").css("position", "fixed").css("top", responsiveMenuButtonHeightWithPx).css("left", "0").css("right", "0").css("bottom", "0");

		// Remove main nav transform, fix z-index issues
		$("<style>.js-navopen #mainNav { transform: none; } .mainNavHolderMobile{ z-index: -1;}.js-navopen .mainNavHolderMobile{z-index: 1;}</style>").appendTo("body");

		// Prevent overflow of the menu
		$("#mainNav").css("overflow-y", "auto");

		if (signInBar.length) {
			// Move the sign in bar to #outer-wrap (outside of transform)
			signInBar.appendTo("#outer-wrap");
			signInBar.css("top", "0").css("left", "0").css("right", "0").css("position", "fixed");
		}

		if (fullWidth || signInBar.length || alertBar.length) {
			// Add padding-top to #outer-wrap (prevent the button/sign in bar from overlapping stuff)
			$("#outer-wrap").css("padding-top", responsiveMenuButtonHeightWithPx);
		}
	}
};

MenuManager.prototype.moveToDesktop = function () {
	var self = this; // Reference to current object
	if (self.mobileMainNav) {
		self.mobileMainNav = false;
		$("#mainNavOriginalPosition").replaceWith(self.$mainNav);
		self.$mainNavMenu.unwrap().rwdmenu('destroy');
		if (self.isAdjustingMainMenuItemsWidth)
			self.adjustMainItemsWidth("#mainNavMenu");
		if (self.mainMenuTextResizer)
			self.$mainNavMenu.responsiveMenuText({ ratio: self.mainMenuTextResizerRatio });
		self.$mainNavMenu.attr('aria-hidden', 'false');
		self.$mainNav.css("overflow-y", "");
	}
};

MenuManager.prototype.initNavOpenButton = function () {
	var self = this; // Reference to current object
	if (self.rwdInitNavOpenButton)
		return;
	self.rwdInitNavOpenButton = true;

	var trim = function (str) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	};

	var hasClass = function (el, cn) {
		return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
	};

	var addClass = function (el, cn) {
		if (!hasClass(el, cn)) {
			el.className = (el.className === '') ? cn : el.className + ' ' + cn;
		}
	};

	var removeClass = function (el, cn) {
		el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
	};

	var hasParent = function (el, id) {
		if (el) {
			do {
				if (el.id === id) {
					return true;
				}
				if (el.nodeType === 9) {
					break;
				}
			}
			while ((el = el.parentNode));
		}
		return false;
	};

	var doc = document.documentElement;

	var transform_prop = window.Modernizr.prefixed('transform'),
		transition_prop = window.Modernizr.prefixed('transition'),
		transition_end = (function () {
			var props = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd otransitionend',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
		})();

	var inner = $("#inner-wrap")[0];
	var nav_open = false;
	var nav_class = 'js-navopen';

	var closeNavEnd = function (e) {
		if (e && e.target === inner) {
			document.removeEventListener(transition_end, closeNavEnd, false);
		}
		nav_open = false;
	};

	var closeNav = function () {
		if (nav_open) {
			// close navigation after transition or immediately
			var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
			if (duration > 0) {
				document.addEventListener(transition_end, closeNavEnd, false);
			} else {
				closeNavEnd(null);
			}
		}
		removeClass(doc, nav_class);
		$('ol#mainNavMenu').find('li.rwd-close').remove();
		$('ol#mainNavMenu').attr('aria-hidden', 'true');
	};

	var openNav = function () {
		if (nav_open) {
			return;
		}
		addClass(doc, nav_class);
		$('ol#mainNavMenu').attr('aria-hidden', 'false');
		var $firstItem = $('ol#mainNavMenu').find('li > a').first();
		if (!$firstItem.hasClass('backMenuLink') && !$firstItem.hasClass('closeMenuLink')) {
			var $close = $('<li class="rwd-close"><a href="#" style="z-index:2;" class="navMenuItem closeMenuLink" aria-haspopup="false" role="menuitem">Close Menu</a></li>');
			$('#mainNavMenu').prepend($close);
			$firstItem = $('ol#mainNavMenu').find('li > a').first();
			$firstItem.bind('click', function (e) {
				e.preventDefault();
				closeNav();
			});
		}
		$firstItem.focus();
		nav_open = true;
	};

	var toggleNav = function (e) {
		if (nav_open && hasClass(doc, nav_class)) {
			closeNav();
		} else {
			openNav();
		}
		if (e) {
			e.preventDefault();
		}
	};

	// open nav with main "nav" button
	document.getElementById('nav-open-btn').addEventListener('click', toggleNav, false);

	/* close nav with main "close" button
	document.getElementById('nav-close-btn').addEventListener('click', toggleNav, false);
	*/

	// close nav by touching the partial off-screen content
	document.addEventListener('click', function (e) {
			if (nav_open && !hasParent(e.target, 'mainNav') && !hasClass(e.target, 'nav-btn')) {
				e.preventDefault();
				closeNav();
			}
		},
		true);
};

//Configure a menu. This function should be call only inside $(document).ready
MenuManager.prototype.setupMenu = function (menuID, menuContainerID, menuType, setupDraggable, urlToGetHiddenMenus) {
	var self = this; // Reference to current object
	self.setupDraggable = setupDraggable;

	//Initialize menu manger after DOM elements are loaded
	self.init();

	$('#' + menuID).data('menu', { type: menuType, level: 1, parentID: null });

	//mouse over on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseover(function (e) {
		e.stopPropagation();
	});

	//mouse enter on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseenter(function () {
		var $li = $(this);
		self.menuMouseOver($li);
		//return false; //do not bubble mouse over events on other nested li tags
	});



	//mouse out on menu items from first level
	$("li.topMenuItem", '#' + menuID).mouseleave(function () {
		var $li = $(this);
		self.menuMouseOut($li);
	});

	$.ajax({
		url: urlToGetHiddenMenus,
		type: 'get',
		async: true, //let the page continue loading/processing meanwhile submenus are loaded
		cache: false,
		dataType: 'html',
		success: function (response) {
			if (response.ErrorMessage)
				alert(response.ErrorMessage);
			else {
				//Append submenus into divListSubMenus and bind menuMouseOut function on mouseleave event for all <li>.
				//create temporary container.
				var tempContainerID = 'dummyDivTemp' + menuID;
				var $tempContainer = $('<div id="' + tempContainerID + '" style="display:block;"></div>').append(response);

				//set up hasChildren class on top level items
				$('#' + menuID + ' li').each(function () {
					var $this = $(this);
					var id = $this.attr('id'); //.replace(/item|leftItem/i, '');
					if (id != null) {
						var $olSubMenu = $tempContainer.find('#Parent' + id).find('li').not(".addPage");
						if ($olSubMenu.length > 0) {
							var $targetElement = $this.children('a').length ? $this.children('a') : $this;
							$targetElement.attr('aria-haspopup', 'true');
							$targetElement.attr('aria-expanded', 'false');
							//for secondary menus, set up withChildren class on top level items
							if (menuType === SIDE_MENU && $this.data("displayMainItemSubMenuIndicators") == "True") {
								$this.children('a.secondaryNavItem').addClass('withChildren');
							}
						}
					}
				});

				//This needs to be executed once to bind draggable to main and side menu's root elements.
				if (setupDraggable) {
					//init drag and drop for menu items
					$('#' + menuID).find("li").each(function () {
						//set as droppable all submenu items on main menu
						self.setupDroppableElement($(this), menuType);
					});

					$('#' + menuID).find(".grippy").each(function () {
						//setup grip icons as draggable elements for main menu sub items.
						self.setupDraggableElement($(this), menuType, '#' + menuContainerID);
					});
				}

				//move submenus to main submenus container.
				self.$divListSubMenus.append($tempContainer.children()/*$('#' + tempContainerID + ' ol')*/);
				$tempContainer.remove();
			}
		},
		error: function (xhr, textStatus, exception) {
			if (xhr.status != 0)
				alert("Error retrieving sub-menus for menuID '" + menuID + "' : " + xhr.statusText + "\ntextStatus: " + xhr.status);
		}
	});
};

//Handles mouse over event on menu items
MenuManager.prototype.menuMouseOver = function ($li) {
	var self = this; // Reference to current object
	if (self.mobileMainNav || ($('.pageContent.cpGrid.dragging').length > 0) || ($('.pageContent.cpGrid.pinned').length > 0)) {
		return;
	}
	this.resetMouseOvers();
	$li.addClass('mouseover');
	$li.parentsUntil('#mainNavMenu').children('a').addClass('mouseover');
	clearTimeout(self.menuTimeoutID);

	var $parent = $li.parent();
	var menuData = $parent.data('menu');

	
	//bail when is currently dragging an item to a different type of menu only if there is not custom links on side menu
	if (!self.sideMenuHasCustomLinks && self.isMainMenuBeingDragged && menuData.type === SIDE_MENU)
		return;
	if (!self.sideMenuHasCustomLinks && self.isSideMenuBeingDragged && menuData.type === MAIN_MENU)
		return;

	if ((menuData.type === MAIN_MENU && self.isMainMenuEditable && (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) && $li.hasClass('liDropabble') && !$li.hasClass('beingDragged'))
		|| (menuData.type === SIDE_MENU && self.isSideMenuEditable && (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) && $li.hasClass('liDropabble') && !$li.hasClass('beingDragged'))) {
		//set elements settings when element is over
		$li.addClass('hover');
	}

	$('#mainNav').css('z-index', '10');

	//hide if needed submenus from siblings
	if ($li.hasClass('topMenuItem')) {
		//for top level menu items hide all the submenus before displaying another level
		self.hideAllSubMenus(menuData.type, $li);
	} else {
		//for all other submenus which are naturally inside DOM elements
		$parent.children().each(function () {
			if ($(this) != $li)
				self.hideSubMenu($(this));
		});
	}

	//When opening different type of menu, hide submenus from the other types menu
	if (menuData.type === MAIN_MENU) {
		self.hideAllSubMenus(SIDE_MENU);
	} else if (menuData.type === SIDE_MENU) {
		self.hideAllSubMenus(MAIN_MENU);
	}

	// As the sub-menu is displayed, we let the screen reader know the menu has expanded.
	var $anchor = $li.find('a');
	if ($anchor.length && $anchor.attr('aria-haspopup') === 'true') {
		$anchor.attr('aria-expanded', 'true');
	}
	else if ($anchor.length && $anchor.attr('aria-haspopup') != 'true') {
		return;
	}
	

	if (!$li.hasClass('beingDragged')) {
		var id = $li.attr('id'); //.replace(/item|leftItem/i, '');
		var pageID = $li.data('pageid');
		var displayMegaMenu = $li.data('displaymegamenu');
		var delay = $li.hasClass('topMenuItem') ? self.popupDelayTopMenu : self.popupDelaySideMenu;

		//This is to pick the list with with the most sub menus and remove the rest. Prevents issue with not displaying all submenus when there is more than one of the same
		//submenu being rendered, since the first rendered sub menu will be used for all submenu duplicates even though it may not have all the submenus included.
		//https://civicplus.tpondemand.com/entity/22126
		var maxSubMenus = 0;
		var maxResult;
		if (self.$divListSubMenus.find('#Parent' + id).length > 1) {
			$(self.$divListSubMenus.find('#Parent' + id)).each(function () {
				if ($(this).children().length > maxSubMenus) {
					maxSubMenus = $(this).children().length;
					maxResult = this;
				}
				$(this).addClass('removal');
			});
		}
		$(maxResult).removeClass('removal');
		self.$divListSubMenus.remove(".removal");
		self.$divListSubMenus.children().append(maxResult);

		var $olSubMenu = self.$divListSubMenus.find('#Parent' + id);
		$('.megaMenuContainer.hover').hide().removeClass('hover');
		if (displayMegaMenu == 'True') {
			if (menuData.type === MAIN_MENU) {
				//Hack to get the heights of the megaMenu elements correctly, in state of display none, incorrect height is being returned. Vishal
				var $megaMenuContainer = $('.mainNavMegaMenu.megaMenuContainer.pageID_' + pageID);
				$megaMenuContainer.css('visibility', 'hidden');
				$megaMenuContainer.css("overflow", "hidden");
				$megaMenuContainer.css("height", "0");
				$megaMenuContainer.css("padding", "0");
				$megaMenuContainer.show();


				//Apply menu animation's start state
				var applyAnimation = function ($megaMenuContainer, timeout) {
					if (typeof (Animations) === 'function') {
						var animations = new Animations();
						animations.applyAnimationClassToMegaMenuContainer($megaMenuContainer, timeout);
					}
				}

				var timeout = delay ? delay : 0;
				self.menuTimeoutID = window.setTimeout(function () {
					updateMegaMenuAttributes($megaMenuContainer);
					fireMediaQueriesIfNeeded($megaMenuContainer);
					$megaMenuContainer.show();
					$megaMenuContainer.css("visibility", "");
					$megaMenuContainer.css("overflow", "");
					$megaMenuContainer.css("height", "");
					$megaMenuContainer.css("padding", "");
					applyAnimation($megaMenuContainer, timeout);
					if (!window.isRemoveSetHeights)
						SetHeights();
				}, timeout);
			}
			else {
				delay ? self.menuTimeoutID = setTimeout(function () {
					$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).show();
					if (!window.isRemoveSetHeights)
						SetHeights();
				}, delay) : $('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).show();
			}
		}

		//For side menu, there isnt a mega menu, so render regular sub menu irrespective of displayMegaMenu setting.
		if (displayMegaMenu != 'True' || menuData.type === SIDE_MENU) {
			if ($olSubMenu.length > 1) {
				//remove duplicates. they might have been added by different menu (main/side)
				$olSubMenu.slice(1).remove();
				$olSubMenu = self.$divListSubMenus.find('#Parent' + id);
				$olSubMenu.removeClass('takenIntoAccount');
			}
			if ($olSubMenu.length == 1) {
				$olSubMenu.removeClass('takenIntoAccount');
				$olSubMenu.data('menu', { type: menuData.type, level: menuData.level + 1, parentID: $parent.attr('id') });
				var allowedToShow = ($olSubMenu.data('menu').type === MAIN_MENU) ? $olSubMenu.data('menu').level <= self.mainMenuMaxSubMenuLevels : $olSubMenu.data('menu').level <= self.sideMenuMaxSubMenuLevels;
				if (allowedToShow) {
					delay ? self.menuTimeoutID = setTimeout(function () { self.showSubMenu($li, $olSubMenu); }, delay) : self.showSubMenu($li, $olSubMenu);
				}
			}
		}

		if (displayMegaMenu == 'True' && !window.isRemoveSetHeights) {
			SetHeights();
		}
	}
};

//Display submenu items
MenuManager.prototype.showSubMenu = function ($li, $olSubMenu) {
	var self = this; // Reference to current object
	var menuType = $olSubMenu.data('menu').type;
	var animations = null;

	//Apply menu animation's start state
	if (typeof (Animations) === 'function') {
		animations = new Animations();
		animations.applyInitial($olSubMenu, menuType);
	}

	//Bind mouseenter for second level submenus
	//Also set the tab index for each <li>
	$olSubMenu.children().each(function () {
		if (self.type != "hidden") {
			var $input = $(this);
		}
		//mouse over on menu items from second and subsequent levels.
		$(this).bind("mouseenter.menu", function () {
			var $li = $(this);
			self.menuMouseOver($li);
			return false; //do not bubble mouse over events on other nested li tags
		});
	});

	//Bind mouseleave for second level submenus
	$olSubMenu.children().each(function () {
		//mouse over on menu items from second and subsequent levels.
		$(this).bind("mouseleave.menu", function () {
			var $li = $(this);
			self.menuMouseOut($li);
			//self.hideAllSubMenus(menuType, $li);
		});
	});

	var bouncing = self.bouncing &&
		((menuType === MAIN_MENU && $olSubMenu.data('menu').level > 2)
			|| (menuType === SIDE_MENU));

	var $parentOl = $li.parent();
	var parentLeftLi = $li.offset().left;

	self.moveSubMenuInDOM($olSubMenu, menuType);

	if (bouncing) {
		//logic to bounce submenu to be opened if needed.
		var subMenuWidth = $olSubMenu.outerWidth(); //get width from submenu which is hidden (required to add extra styles on divListSubMenus)

		var isOpeningToRight = !$parentOl.hasClass('flipLeft');
		if (isOpeningToRight) {
			var winWidth = $(window).width();
			var parentWidthLi = $parentOl.outerWidth();

			if ((winWidth - parentLeftLi - parentWidthLi) <= (subMenuWidth + 3)) {
				$olSubMenu.addClass('flipLeft');
			}
		} else {
			if ((parentLeftLi) <= (subMenuWidth + 3)) {
				$olSubMenu.addClass('flipRight');
			} else {
				$olSubMenu.addClass('flipLeft');
			}
		}
	}
	self.positionSubMenuInDOM($olSubMenu, $li, menuType);

	if (self.setupDraggable) {
		//init drag and drop for menu items
		$olSubMenu.find("li").each(function () {
			//set as droppable all submenu items on main menu
			self.setupDroppableElement($(this), menuType);
		});

		$olSubMenu.find(".grippy").each(function () {
			//setup grip icons as draggable elements for main menu sub items.
			self.setupDraggableElement($(this), menuType, menuType == MAIN_MENU ? '#mainNav' : '#secondaryNav');
		});
	}

	//If Animation manager toggled on, implement the menu animations
	if (animations != null) {
		animations.applyAnimationClassToNavContainers($olSubMenu, menuType);
	}
};

//Handles mouse out event on menu items
MenuManager.prototype.menuMouseOut = function ($li) {
	var self = this; // Reference to current object
	var menuType = $li.attr('id') != null ? ($li.attr('id').match(/MainItem/) != null ? MAIN_MENU : SIDE_MENU) : (($li.hasClass('secondaryNavItem') || $li.parents('ol').attr('id').match(/SideItem/) != null) ? SIDE_MENU : MAIN_MENU);

	if (self.mobileMainNav) return;
	//log("popdownDelaySideMenu" + popdownDelaySideMenu);
	var delay = $li.hasClass('topMenuItem') ? self.popdownDelayTopMenu : self.popdownDelaySideMenu;
	if (self.isMainMenuBeingDragged || self.isSideMenuBeingDragged) {
		//reset elements settings
		$li.removeClass('hover');
	}

	$('#mainNav').css('z-index', '');

	clearTimeout(self.menuTimeoutID);
	self.menuTimeoutID = setTimeout(function () {
		/*if ($li.parent().data('menu').type == MAIN_MENU)
		self.hideAllSubMenus(MAIN_MENU); //workaround related with containerSubMenus
		else*/
		$('#bodyWrapper').animate({ 'padding-bottom': 0 }, 'fast');
		$('#bodyWrapper').data('maxPaddingBottom', '0');
		$('.takenIntoAccount').removeClass('takenIntoAccount');
		if (!$li.hasClass('topMenuItem'))
			self.hideAllSubMenus(menuType, $li);
		else
			self.hideSubMenu($li);
	}, delay);
};

MenuManager.prototype.hideAllSubMenus = function (menuType, $currentLi) {
	var self = this; // Reference to current object
	switch (menuType) {
		case SIDE_MENU: //hide sub menus for left menu
			$("li.topMenuItem", ".secondaryNav ol.rootNavMenu").each(function () {
				if ($currentLi && $(this).attr('id') === $currentLi.attr('id'))
					return true; //continue. don't hide current top menu item opened if provided
				self.hideSubMenu($(this));
			});
			break;
		case MAIN_MENU: //hide sub menus for main menu
			/*var openMenuID = self.$containerSubMenus.find('ol:first').attr('id');
			if ($currentLi && openMenuID === ('Parent' + $currentLi.attr('id')))
			return true; //continue. don't hide current top menu item opened if provided
			self.hideSubMenu(self.$containerSubMenus);*/
			$("li.topMenuItem", "#mainNavMenu").each(function () {
				if ($currentLi && $(this).attr('id') === $currentLi.attr('id'))
					return true; //continue. don't hide current top menu item opened if provided
				self.hideSubMenu($(this));
			});
			break;
		default: //hide submenus for all type of menus
			//self.hideSubMenu(self.$containerSubMenus);
			$("li.topMenuItem", "#mainNavMenu").each(function () {
				self.hideSubMenu($(this));
			});
			$("li.topMenuItem", "#sideNavMenu").each(function () {
				self.hideSubMenu($(this));
			});
			break;
	}
};

MenuManager.prototype.hideSubMenu = function ($li) {
	var self = this; // Reference to current object

	// As the sub-menu is closed, we let the screen reader know that the menu is no longer expanded.
	var $anchor = $li.find('a');
		if ($anchor.length && $anchor.attr('aria-haspopup') === 'true') {
		$anchor.attr('aria-expanded', 'false');
	}

	var displayMegaMenu = $li.data('displaymegamenu');
	var mainMenu = $li.parents('nav').hasClass('mainNav') | $li.parents('ol').hasClass('mainSubMenu');
	//When a menu item is set to display as mega menu, we still display regular sub menu for secondary nav, since it doesnt have a megamenu. So while hiding, hide the regular submenu for side navigation.
	if (displayMegaMenu != 'True' || !mainMenu) {
		if ($('#mainNavMenu').find('.navMenu').length == 0) {
			$('#mainNavMenu li a.mouseover').removeClass('mouseover');
		}
		var id = $li.attr('id');
		var $olSubMenu = $('#Parent' + id);
		if ($olSubMenu.length == 1) {
			//moves sub menu to hidden div
			$olSubMenu.appendTo(self.$divListSubMenus);
			//reset data of the menu
			$olSubMenu.removeData('menu');
			if (self.bouncing) {
				//remove bouncing classes
				$olSubMenu.removeClass('flipLeft flipRight');
			}
			$olSubMenu.css({ position: '', top: '', left: '', zIndex: '' });
			//moves recursively its children if needed
			$olSubMenu.children().each(function () {
				self.hideSubMenu($(this));
				$(this).unbind("mouseenter.menu");
			});

			//Remove animation trigger class
			$olSubMenu.removeClass('animation-triggered');
		}
	} else {
		var pageID = $li.data('pageid');
		var megaMenuContainer = $('.mainNavMegaMenu.megaMenuContainer.pageID_' + pageID);
		if (!megaMenuContainer.hasClass('hover') && $('.megaMenuContainer .handle.pin.pinned').length === 0) {
			//$('#megaMenu').hide();
			megaMenuContainer.hide();
			$('#mainNav').css('z-index', '');
			$('.megaMenuContainer').css("display", "none");
			$('.megaMenuContainer').removeClass('animation-triggered');
		}
		if (!$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).hasClass('hover')) {
			$('.secondaryNavMegaMenu.megaMenuContainer.pageID_' + pageID).hide();
		}
	}
};

//Supports legacy code to set delays when opening/close submenus
MenuManager.prototype.setMOMMode = function (mommode, menuType) {
	//support legacy code
	if (menuType === MAIN_MENU) {
		switch (mommode) {
			case 0:
				self.popdownDelayTopMenu = 3;
				self.popupDelayTopMenu = false;
				self.mainMenuMaxSubMenuLevels = 0;
				break;
			case 2:
				self.popdownDelayTopMenu = 500;
				self.popupDelayTopMenu = 500;
				break;
			case 3:
				self.popdownDelayTopMenu = 500;
				self.popupDelayTopMenu = false;
				break;
		}
	} else if (menuType === SIDE_MENU) {
		switch (mommode) {
			case 0:
				self.popdownDelaySideMenu = 3;
				self.popupDelaySideMenu = false;
				self.sideMenuMaxSubMenuLevels = 0;
				break;
			case 2:
				self.popdownDelaySideMenu = 500;
				self.popupDelaySideMenu = 500;
				break;
			case 3:
				self.popdownDelaySideMenu = 500;
				self.popupDelaySideMenu = false;
				break;
		}
	}
};

MenuManager.prototype.adjustMainItemsWidth = function (menuSelector) {
	this.isAdjustingMainMenuItemsWidth = true;
	return adjustMainItemsWidth(menuSelector);
};

function adjustMainItemsWidth(menuSelector) {
	var widths = [];
	var $items = [];
	$(menuSelector).data('autowidth', true).find(".topMenuItem").each(function () {
		widths.push($(this).outerWidth());
		$items.push($(this));
	});
	if (widths.length > 0) {
		var totalWidth = 0;
		var i;
		for (i = 0; i < widths.length; i++) {
			totalWidth += widths[i];
		}
		var menuWidth = $(menuSelector).outerWidth();
		var availableWidth = menuWidth - totalWidth;
		var paddingPerItem = availableWidth / $items.length;
		for (i = 0; i < $items.length; i++) {
			var width = (100 * (widths[i] + paddingPerItem) / menuWidth);
			//This is to account for the anomoly of the last menu item wrapping for one client (Anoka County) only in Mac Safari
			//A site-specific solution was sought but none found that was acceptable
			if (navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf('Chrome') == -1 && i == $items.length - 1) {
				width = width - 1;
			}
			$items[i].outerWidth(width + "%");
		}
	}
}

MenuManager.prototype.resetMainItemsWidth = function (menuSelector) {
	$(menuSelector).find(".topMenuItem").each(function () {
		$(this).css("width", "auto");
	});
};

function log(text) {
	console.log(text);
}

/**** End-Functions to handle Main/Left Menu on Front-end. *****/

/***** Drag and Drop functions to handle main/side menus  ********/

//Handles when an element was dropped
MenuManager.prototype.dragHandler = function ($element, dragInfo) {
	var self = this; // Reference to current object

	//var miLeave = 0;
	var menuItemLeave = function ($menuItemOver) {
		$menuItemOver.removeClass('hover');
		//miLeave++;
		//log("Leave event " + (miLeave) + ", liID=" + $menuItemOver.attr('id') + ", class=" + $menuItemOver.attr('class'));
		//$('#log3').val("Leave event " + (miLeave) + ", liID=" + $menuItemOver.attr('id') + ", class=" + $menuItemOver.attr('class'));
	};

	if ($element.length != 0 && !$element.hasClass('thingToDrag')) { //workaround to avoid executing drag handler when mouse pointer is over drag helper
		//resetElementOver();
		//dragInfo.currentElementOver = { $element: null, $li: null, isAddPage: null, $ol: null };
		dragInfo.resetCurrentElementOver();
		// This element will hold info to keep track of the current element that the mouse pointer is over.
		dragInfo.currentElementOver.$element = $element;
		//$('#log1').val('element  ID:' + $element.attr('id') + ', class=' + $element.attr('class') + ", tag=" + $element.get(0).nodeName + "html=" + $element.html());

		if ($element.hasClass('inside')) {
			//when mouse is over any DOM element inside an LI MenuItem
			var $li = $element.closest('li');

			dragInfo.currentElementOver.$li = $li;
		} else if ($element.hasClass('liDropabble')) {
			//when mouse is over LI form field element
			dragInfo.currentElementOver.$li = $element;
		}

		if (dragInfo.currentElementOver.$li != null && dragInfo.currentElementOver.$li.hasClass('liDropabble')) {
			//Over a valid droppable li
			dragInfo.currentElementOver.$ol = dragInfo.currentElementOver.$li.parent();
			//$('#log2').val("inside.. . currentLI=" + dragInfo.currentElementOver.$li.attr('id'));
		}

		// Logic to determines if mouse pointer is out of a menu item.
		if (dragInfo.$prevMenuItemOver != null && (dragInfo.currentElementOver.$li == null || dragInfo.currentElementOver.$li[0] != dragInfo.$prevMenuItemOver[0])) {
			//fire menu item leave event
			menuItemLeave(dragInfo.$prevMenuItemOver);
		}
		dragInfo.$prevMenuItemOver = dragInfo.currentElementOver.$li;

		//mouse is over a valid form field to resize.??
	}
};

///Handles when an element was dropped
MenuManager.prototype.dropHandler = function (dragInfo) {
	var self = this; // Reference to current object

	var validPosition = false;
	if (dragInfo.currentElementOver != null && dragInfo.currentElementOver.$li != null && dragInfo.currentElementOver.$li.hasClass('liDropabble') && !dragInfo.currentElementOver.$li.hasClass('beingDragged')) {
		var $liTarget = dragInfo.currentElementOver.$li;
		$liTarget.removeClass('hover');

		if (self.sideMenuHasCustomLinks || dragInfo.$draggedElement.data('drag').menuType === $liTarget.data('drag').menuType) {
			validPosition = true;
			//var msgSource = "ID=" + dragInfo.$draggedElement.data('drag').itemID + ",parentID=" + dragInfo.$draggedElement.data('drag').parentID + ",prevItemID=" + dragInfo.$draggedElement.data('drag').prevItemID + ",isAddPage=" + dragInfo.$draggedElement.data('drag').isAddPage;
			//var msgTarget = "ID=" + $liTarget.data('drag').itemID + ",parentID=" + $liTarget.data('drag').parentID + ",prevItemID=" + $liTarget.data('drag').prevItemID + ",isAddPage=" + $liTarget.data('drag').isAddPage;
			//alert("dropped source=" + msgSource + "\nOn target=" + msgTarget);
			var url = '';
			var addingPage = false;
			if (dragInfo.$draggedElement.data('drag').isAddPage) {
				//Creating a new page in a specific menu position
				addingPage = true;
				url = "/Pages/Page/Add";
			} else {
				//Moving an existing menu item on different position
				url = "/Pages/PageStatus/Move/" + dragInfo.$draggedElement.data('drag').itemID;
			}
			//logic to build position where menu item was dropped
			url += "?parentID=" + $liTarget.data('drag').parentID;
			if ($liTarget.data('drag').isAddPage) {
				if ($liTarget.data('drag').prevItemID != null)
					url += "&refPageID={1}&position=Next".replace("{1}", $liTarget.data('drag').prevItemID);
				else
					url += "&position=Child";
			} else {
				url += "&refPageID={1}&position=Previous".replace("{1}", $liTarget.data('drag').itemID);
				if ($liTarget.hasClass('topMenuItem') && $liTarget.data('drag').menuType == MAIN_MENU) {
					//Check whether or not is possible to copy layout from top sibling page
					var message = '';
					$.ajax({
						url: '/Layout/CopyAssociation/CheckTopPages?copyLayoutFrom={0}'
							.replace('{0}', $liTarget.data('drag').itemID),
						type: 'POST',
						async: false, //Needs to be a sync request
						success: function (response) {
							if (response.ErrorMessage) {
								alert(response.ErrorMessage);
							} else if (response.Message) {
								message = response.Message;
							}
						},
						error: function (xhr, textStatus, exception) {
							alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
						}
					});
					if (message.length > 0 && confirm(message)) {
						url += "&copyLayoutFrom=" + $liTarget.data('drag').itemID;
					}
				}
			}

			if (addingPage) {
				window.location.href = url;
			} else {
				$.ajax({
					url: url,
					type: 'POST',
					success: function (response) {
						if (response.ErrorMessage) {
							alert(response.ErrorMessage);
							ajaxPostBackEnd();
						} else if (response.RedirectURL && response.RedirectURL !== location.href) {
							location.href = response.RedirectURL;
						} else {
							location.reload(true);
						}
					},
					beforeSend: function () {
						ajaxPostBackStart('Loading');
					},
					error: function (xhr, textStatus, exception) {
						alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
						ajaxPostBackEnd();
					}
				});
			}
		}
	}
};

MenuManager.prototype.setupDraggableElement = function ($element, menuType, containerSelectorToAppend) {
	var self = this; // Reference to current object

	//Unbind the event before binding it again. Both solutions below work.
	$element.unbind('draginit dragstart drag dragend');
	//$element.drag('destroy');
	// Prevents IE from selecting text while starting a drag.
	$element.bind('selectstart', function (event) {
		event.preventDefault();
		return false;
	});

	var dragInfo = null;

	var relativeContainerOffSet = { top: 0, left: 0 };
	var draggedRelativeElementOffset = { top: 0, left: 0 };
	var isAddPageElem = $element.hasClass('addPage');

	//jquery event drag 2.0 plugin.
	$element.drag("start", function () {
		if (self.mobileMainNav) return false;
		self.isMainMenuBeingDragged = (menuType == MAIN_MENU);
		self.isSideMenuBeingDragged = (menuType == SIDE_MENU);

		var $draggedElement = null;
		if ($(this).hasClass('grippy'))
			$draggedElement = $(this).parent('li'); //page menu items
		else if ($(this).hasClass('addPage'))
			$draggedElement = $(this); //Add Page menu items

		$draggedElement.addClass('beingDragged');

		/*if ($draggedElement.hasClass('topMenuItem') && (menuType == MAIN_MENU)) {
		//workaround to hide top level menu items on main menu. (hideMenu don't work since submenus are not naturally on DOM)
		self.hideAllSubMenus(MAIN_MENU);
		}
		else*/
		self.hideSubMenu($draggedElement);

		dragInfo = {
			$draggedElement: $draggedElement,
			currentElementOver: { $element: null, $li: null, isAddPage: null, $ol: null },
			$prevMenuItemOver: null,
			resetCurrentElementOver: function () {
				this.currentElementOver.$element = null;
				this.currentElementOver.$li = null;
				this.currentElementOver.$ol = null;
				this.currentElementOver.isAddPage = null;
			}
		};

		//If container for thing to drag has relative position, gets its offset to subtract coordinates while dragging.
		relativeContainerOffSet = ($(containerSelectorToAppend).css("position") == "relative") ? $(containerSelectorToAppend).offset() : { top: 0, left: 0 };

		var hasChildren = $draggedElement.hasClass('hasChildren');
		var menuText = $draggedElement.children('a.navMenuItem, a.navMainItem').text();
		if (menuText == '') {
			menuText = $draggedElement.children('div.accordionNavItem').children('a.navMenuItem').text();
		}
		var html = '<a style="z-index:1002;" class="thingToDrag navMenuItem' + (hasChildren ? ' withChildren' : '') + '">' + menuText + '</a>';
		var $dragHelper = $(html);
		return $dragHelper.appendTo(containerSelectorToAppend);
	}).drag(function (e, dd) {
		//if draggable element has relative position, gets the offset where the mouse was clicked to add coordinates while dragging.
		draggedRelativeElementOffset = (isAddPageElem) ? { top: dd.startY - dd.originalY, left: dd.startX - dd.originalX } : { top: 0, left: 0 };

		$(dd.proxy).css({
			top: (dd.offsetY + draggedRelativeElementOffset.top - relativeContainerOffSet.top) + 15,
			left: (dd.offsetX + draggedRelativeElementOffset.left - relativeContainerOffSet.left) - 10
		});
		//$('#log4').val('dd.offsetX=' + dd.offsetX + ',dd.offsetY=' + dd.offsetY + ',e.clientX=' + e.clientX + ',e.clientY=' + e.clientY + ',e.pageX=' + e.pageX + ',e.pageY=' + e.pageY);
		var $elementOver = $(document.elementFromPoint(e.clientX, e.clientY));
		// Execute drag handler
		if (dragInfo != null)
			self.dragHandler($elementOver, dragInfo);
	}, { relative: false })
		.drag("end", function (ev, dd) {
			if (self.mobileMainNav) return false;
			$(dd.proxy).remove();

			if (dragInfo != null) {
				self.dropHandler(dragInfo);
				dragInfo.$draggedElement.removeClass('beingDragged');
				dragInfo.$draggedElement = null;
				dragInfo.$prevMenuItemOver = null;
				dragInfo = null;
			}
			self.isMainMenuBeingDragged = false;
			self.isSideMenuBeingDragged = false;
		});
};

MenuManager.prototype.setupDroppableElement = function ($element, menuType) {
	var self = this; // Reference to current object
	if (!self.mobileMainNav && $element.find('div.indicator').length == 1 && !$element.hasClass('liDropabble')) {
		$element.addClass('liDropabble');

		//initialize drag jquery data for droppable elements
		var isAddPage = $element.hasClass('addPage');
		var itemID = !isAddPage ? $element.attr('id').replace(/MainItem|SideItem/i, '') : '';
		var prevItemID = ($element.prev().length == 1) ? $element.prev().attr('id').replace(/MainItem|SideItem/i, '') : null;
		var parentID = $element.parent().attr('id').replace(/ParentMainItem|ParentSideItem/i, '');
		if (isNaN(parentID)) //for top level menu items
			parentID = $element.parent().data('parent');

		$element.data('drag', { itemID: itemID, parentID: parentID, prevItemID: prevItemID, isAddPage: isAddPage, menuType: menuType });

		/// Setups recursively all children DOM elements with class needed by drag algorithm to recognize which element mouse pointer is
		var setUpChildren = function ($children) {
			if ($children.length > 0) {
				$children.each(function () {
					$children.addClass('inside');
					setUpChildren($(this).children());
				});
			}
		};

		setUpChildren($element.children());
	}
};

MenuManager.prototype.setupDroppableAccordionElement = function ($element) {
	var self = this;
	if (!self.mobileMainNav && $element.find('div.indicator').length > 0 && !$element.hasClass('liDropabble')) {
		$element.addClass('liDropabble');

		//initialize drag jquery data for droppable elements
		var isAddPage = $element.hasClass('addPage');
		var itemID = !isAddPage ? $element.attr('id').replace(/MainItem|SideItem/i, '') : '';
		var prevItemID = ($element.prev().length == 1) ? $element.prev().attr('id').replace(/MainItem|SideItem/i, '') : null;
		var $parent = $element.parents('li:first');
		if ($parent.length == 0) {
			$parent = $element.parents('ol:first');
		}
		var parentID = $parent.attr('id').replace(/ParentMainItem|ParentSideItem/i, '');
		if (isNaN(parentID)) //for top level menu items
			parentID = $element.parent().data('parent');

		$element.data('drag', { itemID: itemID, parentID: parentID, prevItemID: prevItemID, isAddPage: isAddPage, menuType: SIDE_MENU });

		/// Setups recursively all children DOM elements with class needed by drag algorithm to recognize which element mouse pointer is
		var setUpChildren = function ($children) {
			$children.each(function () {
				$children.addClass('inside');
				setUpChildren($(this).children());
			});
		};

		setUpChildren($element.children());
	}

	$element.unbind('mouseenter').mouseenter(function (e) {
		e.stopPropagation();
		if (self.isSideMenuBeingDragged) {
			$element.addClass('hover');
		}
	});

	$element.unbind('mouseleave').mouseleave(function (e) {
		$element.removeClass('hover');
	});
};

///Moves the submenu to be displayed at the bottom of the DOM.
MenuManager.prototype.moveSubMenuInDOM = function ($submenu, menuType) {

	//Remove any old .pop elements from the DOM to reload the new one.
	if ($('body').find($submenu).length > 0)
		$('body').find($submenu).remove();

	//$submenu is the ol, $parent is the li.
	$submenu.addClass('subMenuMoved').appendTo('body');

	var className = menuType == MAIN_MENU ? 'mainSubMenu' : 'secondarySubMenu';
	$submenu.addClass(className);
	$submenu.addClass('moved');

	$submenu.css('position', 'absolute');
	$submenu.css('z-index', '100');
}

///Updates the position of submenus in the DOM.
MenuManager.prototype.positionSubMenuInDOM = function ($submenu, $li, menuType) {
	var topMainNavigationLink = menuType == MAIN_MENU && $li.hasClass('topMenuItem');
	var self = this;
	self.updateSubMenuPositionAttributes($submenu, topMainNavigationLink, menuType);
	//If after the submenu is positioned, it has a class of flipLeft, remove it since that causes some display issues on the front-end. Vishal
	if ($submenu.hasClass('flipLeft'))
		$submenu.removeClass('flipLeft').addClass('flippedLeft');
};

MenuManager.prototype.updateSubMenuPositionAttributes = function ($submenu, topMainNavigationLink, menuType) {
	//Get the main nav.
	var parentID = $submenu.attr('id').replace(/Parent/, '');
	var $parent = $('#' + parentID);

	$submenu.removeClass('flippedLeft');

	if ($('#bodyWrapper').data('maxPaddingBottom') == undefined)
		$('#bodyWrapper').data('maxPaddingBottom', 0);

	//Reset bottom-padding on body wrapper to allow accurate calculation
	$('#bodyWrapper').css('padding-bottom', $('#bodyWrapper').data('maxPaddingBottom'));

	var docHeight = $(document).height();
	var menuVisibleSpaceAvailable = docHeight - $parent.offset().top;
	var submenuHeight = $submenu.height();

	//If the parent submenu opened in towards left, let all the subsequent submenus open in the same flow.
	if ($parent.length > 0 && $parent.parents('ol.subMenuMoved').hasClass('flippedLeft'))
		$submenu.addClass('flipLeft');

	if (menuVisibleSpaceAvailable < submenuHeight && !$submenu.hasClass('takenIntoAccount')) {
		//20 is just a default safe padding apart from the calculations.
		$('#bodyWrapper').css('padding-bottom', (submenuHeight - menuVisibleSpaceAvailable + parseFloat($('#bodyWrapper').data('maxPaddingBottom')) + 20));
		$('#bodyWrapper').data('maxPaddingBottom', $('#bodyWrapper').css('padding-bottom'));
		$submenu.addClass('takenIntoAccount');
		if (!$submenu.hasClass('safePaddingApplied')) {
			//Add a padding-bottom of 10px to the submenu to be more presentable
			$submenu.css('padding-bottom', '10px');
			$submenu.addClass('safePaddingApplied');
		}
	}
	if (menuType == MAIN_MENU) {
		//Set top position of main submenu
		$submenu.css('top', $parent.offset().top + (topMainNavigationLink ? $parent.height() : 0));

		if ($submenu.hasClass('flipLeft')) {
			var width = $submenu.find('li:first').width();
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left - width);
		}
		else {
			//Set left position of main submenu
			$submenu.css('left', $parent.offset().left + (topMainNavigationLink ? 0 : $parent.width()));
		}
	}
	else {
		//Set top position of side submenu
		$submenu.css('top', $parent.offset().top);

		if ($submenu.hasClass('flipLeft')) {
			var width = $submenu.find('li:first').width();
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left - width);
		}
		else {
			//Set left position of side submenu
			$submenu.css('left', $parent.offset().left + $parent.width());
		}
	}
};
/***** End - Drag and Drop functions to handle main/side menus  ********/

/***** Start - Mega Menu methods  ********/
MenuManager.prototype.pinMegaMenuOpen = function ($this) {
	var $megaMenuGrid = $this.parents('.megaMenuContainer').children('.pageContent.cpGrid');
	if ($megaMenuGrid.is(':visible')) {
		$('#mainNav').css('z-index', '10');
		$megaMenuGrid.addClass('pinned');
		$megaMenuGrid.find('.handle.pin').addClass('pinned');
		if (typeof PageEditLocalization != 'undefined') {
			$megaMenuGrid.find('.handle.pin').attr('title', pageEditLocalization.UnpinMegaMenu);
		}
	}
};

MenuManager.prototype.resetMouseOvers = function () {
	$('#mainNav').css('z-index', '').find('*').removeClass('mouseover');
	$('#secondaryNav').find('*').removeClass('mouseover');
};

/// Setup
MenuManager.prototype.initializeMegaMenus = function () {
	var self = this;
	if (typeof window.DesignCenter === 'undefined' || typeof window.DesignCenter.themeJSON === 'undefined') { // If we aren't in design center....
		$('#megaMenu,.megaMenuContainer').unbind('mouseenter').mouseenter(function (e) {
			e.stopPropagation();
			var $megaMenuContainer = $(this).attr('id') == 'megaMenu' ? $('.megaMenuContainer:visible') : $(this);
			var pageID = $megaMenuContainer.attr('id').match(/\d+$/)[0];
			$('#mainNav [data-pageid=' + pageID + ']  a').addClass('mouseover');

			$megaMenuContainer.addClass('hover');
		});

		$('.megaMenuContainer').unbind('mouseleave').mouseleave(function (e) {
			var $megaMenuContainer = $(this);
			var visible = $(this).is(':visible');
			if (visible) {
				if ($megaMenuContainer.hasClass('optionOpen') && !$('.cpPopOver.common').is(':visible')) {
					$megaMenuContainer.removeClass('optionOpen');
				}
				if (!$megaMenuContainer.hasClass('handleHover') && !$megaMenuContainer.hasClass('optionOpen') && !$megaMenuContainer.find('.pageContent.cpGrid').hasClass('dragging') && !$megaMenuContainer.find('.pageContent.cpGrid').hasClass('pinned')) {
					$megaMenuContainer.hide().removeClass('hover');
					//$('#megaMenu').hide();
					$('.megaMenu').hide();

					//While mousing out of mega menu, if it contains any flyout widgets, hide them.
					$('.flyOut.moved.forMegaMenu').hide();

					self.resetMouseOvers();
				}
			}
		});

		$('.megaMenuContainer .handle.remove, .megaMenuContainer .handle.move, .megaMenuContainer .handle.inheritance').unbind('mouseenter').mouseenter(function (e) {
			e.stopPropagation();
			$(this).parents('.megaMenuContainer').addClass('handleHover');
		});

		$('.megaMenuContainer .handle.remove, .megaMenuContainer .handle.move, .megaMenuContainer .handle.inheritance').unbind('mouseleave').mouseleave(function (e) {
			$(this).parents('.megaMenuContainer').removeClass('handleHover');
		});

		$('.megaMenuContainer .handle.pin').unbind('click').click(function (e) {
			$(this).toggleClass('pinned');
			$(this).parent().toggleClass('pinned');
			if (typeof PageEditLocalization != 'undefined') {
				$(this).attr('title', $(this).hasClass('pinned') ? pageEditLocalization.UnpinMegaMenu : pageEditLocalization.PinMegaMenu);
			}
		});
	}
};

MenuManager.prototype.attachDragAndDropHandlers = function () {
	//Make mega menu items draggable
	var $currentDraggables = $('.megaMenuContainer').find('li.level1.ui-draggable, li.level2.ui-draggable');
	if ($currentDraggables.length) {
		$currentDraggables.draggable('destroy');
	}

	$('.megaMenuContainer').find('li.level1, li.level2').draggable({
		helper: function (event) {
			var html = '<ol class="semeanticList" style="white-space: nowrap">';
			html += $('<div>').append($(this).clone()).html() + '</ol>';
			return $(html);
		},
		start: function (event, ui) {
			$('.megaMenuContainer .pageContent').addClass('megaMenudragging');
		},
		stop: function (event, ui) {
			$('.megaMenuContainer .pageContent').removeClass('megaMenudragging');
		},
		cursorAt: { top: 5, right: 5 },
		cursor: 'move',
		handle: '.grippy'
	});

	//Attach drop target handlers
	var $currentDroppables = $('.megaMenuTarget.ui-droppable', '.megaMenuContainer.ui-droppable');
	if ($currentDroppables.length) {
		$currentDroppables.droppable('destroy');
	}
	$('.megaMenuTarget', '.megaMenuContainer').droppable({
		over: function (event, ui) {
			$(this).parent().addClass('hover');
		},
		out: function (event, ui) {
			$(this).parent().removeClass('hover');
		},
		drop: function (event, ui) {
			var $target = $(this),
				targetPageID = $target.data('pageid'),
				targetPosition = $target.data('position'),
				parentID = $target.data('parentid'),
				pageID = $(ui.helper).children('li').data('pageid');

			$target.parent().removeClass('hover');

			var url = "/Pages/PageStatus/Move/" + pageID;
			url += "?parentID=" + parentID;
			url += "&refPageID={0}&position={1}".replace("{0}", targetPageID).replace("{1}", targetPosition);

			$.ajax({
				url: url,
				type: 'POST',
				success: function (response) {
					if (response.ErrorMessage) {
						alert(response.ErrorMessage);
						ajaxPostBackEnd();
					} else {
						location.href = response.RedirectURL;
					}
				},
				beforeSend: function () {
					ajaxPostBackStart('Loading');
				},
				error: function (xhr, textStatus, exception) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
					ajaxPostBackEnd();
				}
			});
		},
		tolerance: 'pointer'
	});
};

/***** End - Mega Menu methods  ********/

/***** Start - Class/functions to handle custom links ********/
function MenuCustomLinksManager(confirmCustomLinksDeletion, pageID, moduleID) {
	this.pageID = pageID;
	this.moduleID = moduleID;
	this.checkOrphanFeatureLinks = function () {
		if (confirmCustomLinksDeletion && confirmCustomLinksDeletion.length > 0) {
			return confirm(confirmCustomLinksDeletion);
		}
		return true;
	};

	this.updateSideMenu = function (actionUrl) {
		$.ajax({
			url: actionUrl,
			type: 'post',
			cache: false,
			success: function (response) {
				if (response.ErrorMessage) {
					alert(response.ErrorMessage);
					ajaxPostBackEnd();
				} else if (response.RedirectURL)
					window.location.href = response.RedirectURL;
				else {
					//update side menu UI.
					window.location.reload(true);
				}
			},
			beforeSend: function () {
				ajaxPostBackStart('Loading');
			},
			error: function (xhr, textStatus, exception) {
				ajaxPostBackEnd();
				alert("Error choosing default side menu: " + xhr.statusText + "\nStatus: " + xhr.status);
			}
		});
	};
}

/// open modal to chose page to associate with current page/module as custom link
MenuCustomLinksManager.prototype.chosePage = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		openCpModal({
			title: 'Choose Page',
			className: 'notContent choosePageForLinks',
			isFrontEnd: false,
			url: '/Pages/CustomLinks/ChoosePage/?pageID=' + self.pageID + '&moduleID=' + self.moduleID
		});
	}
};

/// Call back to execute after choosing a page on modal.
MenuCustomLinksManager.prototype.chosePageExecute = function (chosenPageID) {
	var self = this; // Reference to current object
	closeCpModal();
	//Update side nav.
	self.updateSideMenu('/Pages/CustomLinks/ChangeSideMenu/?pageID=' + self.pageID + '&moduleID=' + self.moduleID + '&chosenPageID=' + chosenPageID);
};

/// Creates a new empty root feature link for specific page/module
MenuCustomLinksManager.prototype.createNewCustomLink = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		self.updateSideMenu('/Pages/CustomLinks/CreateCustomFeatureLinks/?pageID=' + self.pageID + '&moduleID=' + self.moduleID);
	}
};

/// Make default side menu for current page/module (remove custom link previously assigned).
MenuCustomLinksManager.prototype.choseDefaultSideMenu = function () {
	var self = this; // Reference to current object
	if (self.checkOrphanFeatureLinks()) {
		self.updateSideMenu('/Pages/CustomLinks/ChoseDefaultSideMenu/?pageID=' + self.pageID + '&moduleID=' + self.moduleID);
	}
};

/***** End - Class/functions to handle feature links on Secondary menus ********/

/***** Start - Class/functions to handle Main Menu Options ********/
function MainMenuOptions(pageID, mainMenuRootID) {
	var wasCheckBoxChanged = function ($checkbox) {
		if ($checkbox.is(":checked"))
			return $checkbox.data('original') != 'True';
		else
			return $checkbox.data('original') == 'True';
	};

	var closeMainMenuPopover = function ($handler, doNotResetCheckboxes) {
		$handler.data("cpPopover").hide();
		if (doNotResetCheckboxes)
			return;

		//reset checkbox selections
		$('div.menuOptions input[type=checkbox]').each(function () {
			if ($(this).data("original") == "True")
				$(this).prop("checked", true);
			else
				$(this).prop("checked", false);
		});
	};

	var initializeMainMenuPopup = function ($handler) {
		$('#cancelMainNavOptions', "#modalMainNavOptions")
			.unbind('click.mainMenuOptions').bind("click.mainMenuOptions", function (e) {
			e.preventDefault();
			closeMainMenuPopover($handler, false);
		});

		$('#saveMainNavOptions', "#modalMainNavOptions")
			.unbind('click.mainMenuOptions').bind("click.mainMenuOptions", function (e) {
			e.preventDefault();

			var useThisPageAsMainMenu = null;
			var displayMegaMenu = [];

			$('div.menuOptions input.DisplayMegaMenu').each(function () {
				if (wasCheckBoxChanged($(this)))
					displayMegaMenu.push({ PageID: $(this).data('pageid'), DisplayMegaMenu: $(this).is(':checked') });
			});

			if ($('#ysnUseThisPagesSubpages', 'div.menuOptions').length == 1 && wasCheckBoxChanged($('#ysnUseThisPagesSubpages'), 'div.menuOptions'))
				useThisPageAsMainMenu = $('#ysnUseThisPagesSubpages', 'div.menuOptions').is(':checked');

			var data = JSON.stringify({ pageID: pageID, versionID: $('#hdnVersionID').val(), useThisPageAsMainMenu: useThisPageAsMainMenu, displayMegaMenu: displayMegaMenu, structureID: $('#hdnStructureID').val() });

			AJAX("/Pages/Menu/MainMenuOptionsSave", 'POST', data, function (response) {
				window.location.reload(true);
			}, true, 'application/json');

			closeMainMenuPopover($handler, true);
		});
	};

	var $handlerMainMenu = $('#mainNavMenuHandleOptions');
	if ($('#hdnIsLayoutPage').val() === "True" || $('#hdnVersionID').length === 0 || $('#hdnVersionID').val() == "0") {
		$handlerMainMenu.remove();
	} else {
		$handlerMainMenu.cpPopover({
			url: '/Pages/Menu/MainMenuOptions',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ pageID: pageID, mainMenuRootID: mainMenuRootID }),
			className: 'options adminWrap admin menuOptions',
			onInit: function () {
				initializeMainMenuPopup($handlerMainMenu);
			},
			onClose: function (e) {
				e.preventDefault();
				closeMainMenuPopover($handlerMainMenu, false);
			}
		});
	}
}

/***** End - Class/functions to handle Main Menu Options ********/

function showHideAccordionMenuForSecondaryNav($elem) {
	var secondaryMenu = 1;
	var hasAccordionSubmenu = $elem.next('a.openAccordionNav').length > 0;
	if (hasAccordionSubmenu)
		$elem = $elem.next('a.openAccordionNav');
	var $container = $elem.parent().siblings('.accordionNavContainer');
	var $secondaryNavHiddenElement = $('#secondaryNav').children('[class*="hiddenAnimations"]');
	var animations = null;
	//Apply initial animation state before the sliding happens to open the accordion submenu
	if (!$elem.hasClass('accordionNavOpened')) {
		if (typeof (Animations) === 'function') {
			animations = new Animations();
			animations.applyInitial($container, secondaryMenu);
		}
	} else {//reset the container by removing animation classes.
		if ($secondaryNavHiddenElement.length > 0 && $secondaryNavHiddenElement.data('animationClass') != undefined)
			$container.removeClass($secondaryNavHiddenElement.data('animationclass'));
		$container.removeClass('animation-triggered');
	}

	$elem.toggleClass('accordionNavOpened');
	$container.css('overflow', 'hidden');
	$container.slideToggle("333ms");

	if ($container.attr('aria-hidden') == 'true') {
		$container.attr('aria-hidden', 'false');
	} else {
		$container.attr('aria-hidden', 'true');
	}

	setTimeout(function () {
		$container.css('overflow', '');
		if ($elem.hasClass('accordionNavOpened')) {
			//If Animation manager toggled on, implement the menu animations
			if (animations != null)
				animations.applyAnimationClassToNavContainers($container, 1);
		}

	}, 400);

	if (typeof dynamicStretchContainers === 'function') {
		setTimeout(dynamicStretchContainers, 400);
	}
}

$(document).ready(function () {
	//Mega menus handlers
	$('.megaMenuContainer')
		.hide()
		.removeClass('hidden')
		.find('.handle.inheritance').remove();
	menuManager.initializeMegaMenus();
});
;
/*Strategy pattern
AccessibleMenu: Abstract class with default implementation for bindHandlers, initialize
MainAccessibleMenu: Concrete implementation of Accessible menu
SecondaryAccessibleMenu: Concrete implementation of Accessible menu
AccordionAccessibleMenu: Concrete implementation of Accessible menu
accordionMenuStack: A stack to maintain hierarchy of accordion menu items so that traversing them back(Up arrow) becomes super easy*/
var stack = [];
var AccessibleMenu = function () {
	this.menuItem = "";
};

//Static field
AccessibleMenu.accordionMenuStack = [];

AccessibleMenu.prototype = {
	initialize: function (mainMenuItem, accordionMenu) {
		if (mainMenuItem)
			this.setStrategy(new MainAccessibleMenu());
		else {
			if (accordionMenu)
				this.setStrategy(new AccordionAccessibleMenu());
			else
				this.setStrategy(new SecondaryAccessibleMenu());
		}
	},
	setStrategy: function (menuItem) {
		this.menuItem = menuItem;
	},
	bindHandlers: function ($elem) {
		var self = this;
		$elem.off('keydown.Menu').on('keydown.Menu', function (e) {
			if (e.which == 37) {//left
				self.left($elem);
				e.preventDefault();
			}
			if (e.which == 38) {//up
				self.up($elem);
				e.preventDefault();
			}
			if (e.which == 39) {//right
				self.right($elem);
				e.preventDefault();
			}
			if (e.which == 40) {//down
				self.down($elem);
				e.preventDefault();
			}
			if (e.which === 13 && $elem.hasClass("mainNavItem") && $elem.closest(".rwd-menu").length === 0 && $elem.attr("aria-haspopup") === "true") {
				e.preventDefault();
				var expanded = $elem.attr("aria-expanded") === "true";
				var $li = $elem.closest("li");
				if (expanded) {
					menuManager.menuMouseOut($li);
				} else {
					menuManager.menuMouseOver($li);
				}
			}
		});
	},
	left: function ($elem) {
		this.menuItem.left($elem);
	},
	up: function ($elem) {
		this.menuItem.up($elem);
	},
	right: function ($elem) {
		this.menuItem.right($elem);
	},
	down: function ($elem) {
		this.menuItem.down($elem);
	}
};

//MainAccessibleMenu concrete class
var MainAccessibleMenu = function () {
	this.left = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//move to the next main menu item
			$elem.parent('li').prev('li').find('a:first').focus();
		}
		else {
			var parentOlId = $elem.parents('ol').attr('id');
			var parentMenuItemId = parentOlId.slice('Parent'.length);
			$('#' + parentMenuItemId).find('a:first').focus();
		}
	};

	this.up = function ($elem) {
		var $firstSubmenuItemOfMainMenuItem = $elem.parents('.mainSubMenu').find('a:first');
		var currentElemIsfirstSubmenuItemOfMainMenuItem = $firstSubmenuItemOfMainMenuItem[0] == $elem[0];
		if (currentElemIsfirstSubmenuItemOfMainMenuItem) {
			//find the top level menu item
			var $olParent = $elem.parents('.mainSubMenu');
			var parentMenuItemId = $olParent.attr('id').slice('Parent'.length);
			$('#' + parentMenuItemId).find('a:first').focus();
		}
		else {
			//find prev sibling
			var $prev = $elem.parent('li').prev('li').find('a:first');
			if ($prev != null)
				$prev.focus();
		}
	};

	this.right = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//move to the next main menu item
			$elem.parent('li').next('li').find('a:first').focus();
		}
		else {
			var $parentLi = $elem.parent('li');
			var $parentId = "Parent" + $parentLi.attr('id');
			var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
			$firstAnchorOfSubmenu.focus();
		}
	};

	this.down = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//find on basis of submenu
			var $parentLi = $elem.parent('li');
			var $parentId = "Parent" + $parentLi.attr('id');
			var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
			$firstAnchorOfSubmenu.focus();
		}
		else {
			//find on basis of sibling
			var $next = $elem.parent('li').next('li').find('a:first');
			if ($next != null)
				$next.focus();
		}
	};
};

//SecondaryAccessibleMenu concrete class
var SecondaryAccessibleMenu = function () {
	this.left = function ($elem) {
		var parentOlId = $elem.parents('ol').attr('id');
		var parentMenuItemId = parentOlId.slice('Parent'.length);
		$('#' + parentMenuItemId).find('a:first').focus();
	};

	this.up = function ($elem) {
		var $prev = $elem.parent('li').prev('li').find('a:first');
		if ($prev != null)
			$prev.focus();
	};

	this.right = function ($elem) {
		var $parentLi = $elem.parent('li');
		var $parentId = "Parent" + $parentLi.attr('id');
		var $firstAnchorOfSubmenu = $('ol[id=' + $parentId + '] a:first');
		$firstAnchorOfSubmenu.focus();
	};

	this.down = function ($elem) {
		var $next = $elem.parent('li').next('li').find('a:first');
		if ($next != null)
			$next.focus();
	};
};

//AccordionMenu concrete class
var AccordionAccessibleMenu = function () {
	this.left = function ($elem) {
		//do nothing
	};

	this.up = function ($elem) {
		var $popped = AccessibleMenu.accordionMenuStack.pop();
		if($popped != null)
			$popped.focus();
	};

	this.right = function ($elem) {
		//do nothing
	};

	this.down = function ($elem) {
		AccessibleMenu.accordionMenuStack.push($elem);
		var hasAccordionSubmenu = $elem.next('a.openAccordionNav').length > 0;
		var accordionSubmenuAlreadyOpen = $elem.next('a.openAccordionNav').hasClass('accordionNavOpened');
		var $nextElementToFocus = '';
		if (hasAccordionSubmenu && !accordionSubmenuAlreadyOpen) {
			$nextElementToFocus = $elem.parents('.topMenuItem').next('li').find('a:first');
			$nextElementToFocus.focus();
			return;
		}
		if (hasAccordionSubmenu) {
			$nextElementToFocus = $elem.parents('[role=menuitem]:first').children('ol.accordionNavContainer').find('a:first');
			$nextElementToFocus.focus();
		} else {
			var $nextSiblingLi = $elem.parents('[role=menuitem]').next('li:first');
			if ($nextSiblingLi != null && $nextSiblingLi.length > 0) {
				$nextElementToFocus = $nextSiblingLi.find('a:first');
				$nextElementToFocus.focus();
			} else {
				$nextElementToFocus = $elem.parents('.topMenuItem').next('li').find('a:first');
				$nextElementToFocus.focus();
			}
		}
	};
};

//Self invloked function
(function () {
	var isClick = false;
	$("a.navMainItem, a.navMenuItem").on("mousedown", function () {
		//Set isClick true if clicked on secondary nav menu item.
		isClick = true;
	});

	function menuHandler(e) {
		var $this = $(this);
		var accessibleMenu = new AccessibleMenu();
		var mainMenuItem = $this.parents('nav').hasClass('mainNav') | $this.parents('ol').hasClass('mainSubMenu');
		var accordionMenu = false;
		var $topmostAccordionMenuItem = $this.parents('nav').find('a:first');
		if ($this[0] === $topmostAccordionMenuItem[0]) {
			//Reset the stack
			AccessibleMenu.accordionMenuStack = [];
		}
		if (!mainMenuItem)
			accordionMenu = $this.parent('div').hasClass('accordionNavItem');
		accessibleMenu.initialize(mainMenuItem, accordionMenu);
		if (!accordionMenu)  {
			//show sub menu
			menuManager.menuMouseOver($this.parent('li'));
			window.lastMegaMenuOpen = $this.parent('li');
		}
		accessibleMenu.bindHandlers($this);
	}

	$(document).on("focusin", "a.navMainItem, a.navMenuItem", menuHandler);

	//hide last main menu item on tabbing through the menu item.
	$(".siteWrap").on("focusin", function (e) {
		menuManager.hideAllSubMenus(MAIN_MENU);
	});
}());
;
/*Strategy pattern
AccessibleMegaMenu: Abstract class with default implementation for bindHandlers, initialize
FormattedMegaMenu: Concrete implementation of Accessible mega menu*/
var AccessibleMegaMenu = function () {
	this.megaMenuItem = "";
	this.depth = 1;
	this.cols = 1;
};

AccessibleMegaMenu.prototype = {
	initialize: function (format) {
		this.setStrategy(new FormatedMegaMenu());
	},
	setStrategy: function (megaMenuItem) {
		this.megaMenuItem = megaMenuItem;
	},
	bindHandlers: function ($elem) {
		var self = this;
		var LEFT = 37;
		var UP = 38;
		var RIGHT = 39;
		var DOWN = 40;
		$elem.off('keydown.MegaMenu').on('keydown.MegaMenu', function (e) {
			if (e.which == LEFT) {
				self.left($elem);
				e.preventDefault();
			}
			if (e.which == UP) {
				self.up($elem);
				e.preventDefault();
			}
			if (e.which == RIGHT) {
				self.right($elem);
				e.preventDefault();
			}
			if (e.which == DOWN) {
				self.down($elem);
				e.preventDefault();
			}
		});
	},
	exitMegaMenu: function ($elem) {
		this.megaMenuItem.exitMegaMenu($elem);
	},
	left: function ($elem) {
		this.megaMenuItem.left($elem);
	},
	up: function ($elem) {
		this.megaMenuItem.up($elem);
	},
	right: function ($elem) {
		this.megaMenuItem.right($elem);
	},
	down: function ($elem) {
		this.megaMenuItem.down($elem);
	}
};

//Format 1,2,3,4 concrete implementation
var FormatedMegaMenu = function () {
	var self = this;
	this.left = function ($elem) {
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (rootTopLevelItem) {
			$elem.closest('li.topMenuItem').prev().find('a:first').focus();
			return;
		}
		var $prev = $elem.closest('div.col').prev().find('li.widgetItem:first').find('a:first');
		if ($prev.length === 0)
		{
			// If we are as far left as we can go, select the mega menu root item:
			var rootItem = '';
			var closestMenu = $elem.closest('.mainNavMegaMenu');
			if (closestMenu.length > 0) {
				rootItem = closestMenu.attr('id');
				if (rootItem && rootItem.startsWith('mainNavMegaMenu')) {
					rootItem = rootItem.slice('mainNavMegaMenu'.length);
					if (!isNaN(parseInt(rootItem))) {
						rootItem = $('#MainItem' + rootItem + ' a');
						rootItem && rootItem.focus();
					}
				}
			}
		}
		else
		{
			$prev.focus();
		}
	};
	this.up = function ($elem) {
		var isWidgetItemElement = $elem.closest('li').hasClass('widgetItem');
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (isWidgetItemElement)
			var topLevelMenuItem = $elem[0] == $elem.closest('li').parent('ol').children('li:first').find('a:first')[0];
		if (rootTopLevelItem) {
			var id = $elem.closest('li').attr('id');
			$('#mainNavMegaMenu' + id).removeClass('hover');
			menuManager.menuMouseOut($elem.closest('li'));
			return;
		}
		const isMegaMenuHeader = $elem.closest("header").length > 0;
		if (isMegaMenuHeader) {
			var MainItemId = '#MainItem' + $elem.closest('aside').attr('id').slice('mainNavMegaMenu'.length);
			$(MainItemId).find('a:first').focus();
			return;
		}
		if (topLevelMenuItem) {
			var $firstLink = $elem.closest('section').find("header a");
			$firstLink.focus();
			return;
		}
		var isLiHasParentOl = $elem.closest('li').parent('ol');
		if (isLiHasParentOl.length > 0 && isLiHasParentOl.children('li:first').children('a')[0] == $elem[0]) {
			isLiHasParentOl.parent('li').find('a:first').focus();
			return;
		}
		var prevLi = $elem.closest('li').prev('li');
		var $next = null;
		if (prevLi.hasClass('widgetItem')) {
			if (prevLi.children('ol').length > 0) {
				$next = $elem.closest('li').prev('li').children('ol').children('li:last').find('a:first');
			}
			else {
				$next = $elem.closest('li').prev('li').find('a:first');
			}
		}
		else
			$next = $elem.closest('li').prev('li').find('a:first');

		$next.focus();
	};
	this.right = function ($elem) {
		var rootTopLevelItem = $elem.closest('li').hasClass('topMenuItem');
		if (rootTopLevelItem) {
			$elem.closest('li.topMenuItem').next().find('a:first').focus();
			return;
		}
		var $next = $elem.closest('div.col').next().find('li.widgetItem:first').find('a:first');
		if ($next.length !== 0)
		{
			$next.focus();
		}
	};
	this.down = function ($elem) {
		var topLevelMenuItem = $elem.hasClass('navMainItem');
		if (topLevelMenuItem) {
			//find on basis of submenu
			var $parentLi = $elem.parent('li');
			var $parentId = "mainNavMegaMenu" + $parentLi.attr('data-pageid');
			var $firstLink = $('aside[id=' + $parentId + '] a[role="menuitem"]').first();
			$firstLink.focus();
			return
		}
		const isMegaMenuHeader = $elem.closest("header").length > 0;
		if (isMegaMenuHeader) {
			var $firstSubmenuLink = $elem.closest("section").find('.megaMenuItem a[role="menuitem"]').first();
			$firstSubmenuLink.focus();
			return;
		}

		//find on basis of sibling
		var isWidgetItemElement = $elem.closest('li').hasClass('widgetItem');
		var $next = null;
		if (isWidgetItemElement) {
			var isLiHasChildren = $elem.closest('li').children('ol');
			if (isLiHasChildren.length > 0)
				$next = isLiHasChildren.children('li:first').children('a');
			else
				$next = $elem.closest('li').next('li').find('a:first');
		}
		else {
			$next = $elem.closest('li').next('li').find('a:first');//.children('li:first').children('a');
			if ($next.length <= 0) {
				$next = $elem.parents('li.widgetItem').next('li').find('a:first');
			}
		}

		if ($next != null && $next.length > 0)
		{
			$next.focus();
		}

	};
	this.exitMegaMenu = function ($elem) {
		var asideContainerId = $elem.parents('.megaMenuContainer.megaMenu').attr('id').slice('mainNavMegaMenu'.length);
		var $li = $('#MainItem' + asideContainerId);
		$elem.parents('.megaMenuContainer.megaMenu').removeClass('hover');
		menuManager.menuMouseOut($li);
		$elem.focus();
	};
};

//Self invloked function
(function () {
	$(document).on('focusin', '.megaMenuContainer h4.widgetTitle, .megaMenuContainer header a, #mainNav a.navMainItem , li.megaMenuItem a', function (e) {
		var $this = $(this);
		var execute = true;
		var topMenuItem = $this.hasClass('navMainItem');
		if (topMenuItem) {
			var $parent = $this.parent('li');
			if ($parent != null) {
				//Logic for flyout menu is in AccessibleMenu.js, so do not execute the logic below for the same
				if ($parent.data('displaymegamenu') == 'False')
					execute = false;
			}
		}
		if (execute) {
			var depth = $this.parents('.widgetPages').find('.depth').html();
			var cols = $this.parents('.widgetPages').find('.cols').html();
			var accessibleMegaMenu = new AccessibleMegaMenu();
			var mainMenuItem = true;
			//If top menu item(and has megamenu which is already checked above), replicate the logic for "mouse near" to load the mega menus
			if (topMenuItem) {
				var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
					.map(function () {
						$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
						return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
					}).toArray();
				reloadSharedContentContainers(megaMenuContentContainers);
			}
			accessibleMegaMenu.initialize(depth, cols);
			accessibleMegaMenu.bindHandlers($this);
		}
	});
}());
;
var AccessibleAnchors = function () {
	
};

AccessibleAnchors.prototype =
{
	configure: function (config) {
		var self = this;
		self.OPEN_IN_NEW_WINDOW_TEXT = ' Opens in new window';
		if (config.type === 'popup') {
			this.bindPopupHandlers(self);
		}
		if (config.type === 'extend') {
			this.bindExtendHandlers(self);
		}
		if (config.type === 'both') {
			this.bindPopupHandlers(self);
			this.bindExtendHandlers(self);
		}
		$(document).ready(function () {
			var anchors_TargetBlank = $('a[target=_blank]');
			$.each(anchors_TargetBlank, function () {
				var $this = $(this);
				self.setAriaLabelAndAlt($this);
			});
		});
	},
	bindExtendHandlers: function (self) {
		$('a[target=_blank]').on("focusin mouseenter", function (e) {
			var $this = $(this);
			self.setAriaLabelAndAlt($this);
		});		
	},
	setAriaLabelAndAlt: function ($this) {
		//If anchor has an image inside it
		if (this.hasImage($this)) {
			var $img = $this.children('img');
			if ($img.length == 0)
				$img = $this.children('span').children('img');
			var alt = $img.attr('alt');
			if (alt) {
				if (alt.indexOf(this.OPEN_IN_NEW_WINDOW_TEXT) === -1)
					$img.attr('alt', alt + this.OPEN_IN_NEW_WINDOW_TEXT);
			}
			else {
				$img.attr('alt', $img.attr('title') + this.OPEN_IN_NEW_WINDOW_TEXT);
			}
			this.setAriaLabel($this, $img.attr('alt'));
		}
		else {
			this.setAriaLabel($this, $this.text() + this.OPEN_IN_NEW_WINDOW_TEXT);
		}
	},
	bindPopupHandlers: function (self) {
		$('a[target=_blank]').on("focusin mouseenter", function (e) {
			var $this = $(this);
			$this.trigger('focusout');
			$this.append($('<span aria-hidden="false" aria-label="opens in new window" title="opens in new window" class="newWindowIndicator"></span>'));
		});	

		$('a[target=_blank]').on("focusout mouseleave", function (e) {
			$('.newWindowIndicator').remove();
		});		
	},
	setAriaLabel: function($anchor, ariaLabelText){
		var ariaLabel = $anchor.attr('aria-label');
		if (ariaLabel) {
			if (ariaLabel.indexOf(this.OPEN_IN_NEW_WINDOW_TEXT) == -1)
				$anchor.attr('aria-label', ariaLabelText);
		}
		else {
			$anchor.attr('aria-label', ariaLabelText);
		}
	},
	hasImage: function ($anchor) {
		var hasImage = false;
		if ($anchor.children('img') != null && $anchor.children('img').length > 0)
			return true;
		else if ($anchor.children('span') != null && $anchor.children('span').length > 0) {
			return $anchor.children('span').children('img') != null && $anchor.children('span').children('img').length > 0;
		}
	}

};

//Self invloked function
(function () {
	//Add a warning span to body for anchors that open in new window
	$(
		new AccessibleAnchors().configure({ type: 'extend' })
	);
}());



;
/* File Created: February 11, 2013 by Vishal Bhatia*/

function rearrangeFlyouts(clearDOM) {
    if (clearDOM) {
        //Remove any old .pop elements from the DOM to reload the new one.
        $('.flyOut.moved').remove();
    }
    //Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
    var $flyOutDivs = $('.flyOut').not('.moved').not('.helpTip').not('.widgetManager');
    var parentID;
    var marginLeft, marginTop;
    $flyOutDivs.each(function (e) {
        parentID = $(this).parent('.flyOutParent').attr('id');

        //If the element does not have a flyOutParent, display it on the center of the screen.
        if (parentID == undefined) {
            marginLeft = '-' + $(this).outerWidth() / 2 + 'px';
            marginTop = '-' + $(this).outerHeight() / 2 + 'px';

            $(this).css('left', '50%');
            $(this).css('margin-left', marginLeft);
            $(this).css('top', '50%');
            $(this).css('margin-top', marginTop);

            $(this).appendTo('body');
            $(this).addClass('moved');
            //TODO: Confirm from Kyle and remove 2 lines below since they are being done through css.
            $(this).css('position', 'absolute');
            $(this).css('z-index', '100');
        }
        else {
            //Remove any pre existing copies of this element from the DOM.
        	$('[data-parentID=' + parentID + ']').remove();
			//Remove margin styles if the element has a flyOutParent.
            $(this).css({ 'margin-left': '', 'margin-top': '' });
            $(this).appendTo('body');
            $(this).addClass('moved');
            //TODO: Confirm from Kyle and remove 2 lines below since they are being done through css.
            $(this).css('position', 'absolute');
            $(this).css('z-index', '100');
            $(this).attr('data-parentID', parentID);
            adjustFlyoutPosition($('#' + parentID), $(this));
        }
    });
}

///Executes when the browser is being resized or the screen orientation changes(portrait/landscape).
function rearrangeFlyoutsOnResizeEvents() {
	//Grab all the flyouts that are not moved yet and are not tooltips and not in WidgetManager
	var $flyOutDivs = $('.flyOut').not('.helpTip').not('.widgetManager').not('.mainNavMegaMenu.megaMenuContainer');;
	var parentID;
	var marginLeft, marginTop;
	$flyOutDivs.each(function (e) {
		parentID = $(this).data('parentid');
		//If the element does not have a flyOutParent, display it on the center of the screen.
		if (parentID == undefined) {
			marginLeft = '-' + $(this).outerWidth() / 2 + 'px';
			marginTop = '-' + $(this).outerHeight() / 2 + 'px';
			$(this).css('margin-left', marginLeft);
			$(this).css('margin-top', marginTop);
		}
		else {			
			adjustFlyoutPosition($('#' + parentID), $(this));
		}
	});
}

///Checks if any ancestor of a flyout element is fixed positioned.
function anyAncestorFixedPositioned($parent) {
	var anyAncestorFixedPosition = false;
	if ($parent.css('position') === 'fixed')
		anyAncestorFixedPosition = true;
	if (!anyAncestorFixedPosition) {
		$parent.parents().each(function () {
			if (!anyAncestorFixedPosition) {
				if ($(this).css('position') === 'fixed')
					anyAncestorFixedPosition = true;
			}
		});
	}
	return anyAncestorFixedPosition;
}

function adjustFlyoutPosition($parent, $this) {
    var $parentElem = $parent;    
    if ($parentElem != null) {        
        var parentWidth = $parent.outerWidth(false);
        var parentHeight = $parent.outerHeight(false);
        var offset = $parent.offset();        
        if (offset != null) {
            var offsetLeft = offset.left;
            //Take into account scroll height if the document has been scrolled, to compute the top distance from viewport. VB
            var offsetTop = $this.css('position') === 'fixed' ? offset.top - $(document).scrollTop() : offset.top; // Take into account if the item is fixed or absolutely positioned.                        
                        
			if (anyAncestorFixedPositioned($parent))
				$this.css('position', 'fixed');

            var offsetRight;
            var offsetBottom;

            if ($this.hasClass('left') || $this.hasClass('leftCorner')) {
                offsetLeft = offsetLeft - $this.outerWidth(false);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('right') || $this.hasClass('rightCorner')) {
                offsetLeft = offsetLeft + parentWidth;
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('top') || $this.hasClass('topCorner')) {
                offsetBottom = offsetTop - $this.outerHeight(false);
                $this.css('top', offsetBottom);
            }

            if ($this.hasClass('bottom') || $this.hasClass('bottomCorner')) {
                offsetTop = offsetTop + parentHeight;
                $this.css('top', offsetTop);                
            }

            if ($this.hasClass('leftEdge')) {
                $this.css('left', offsetLeft);

                if ($this.hasClass('rightEdge')) {
                    $this.css('width', parentWidth);
                }                
            }

            if ($this.hasClass('rightEdge')) {
                offsetLeft = offsetLeft + parentWidth - $this.outerWidth(false);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('topEdge')) {
                $this.css('top', offsetTop);

                if ($this.hasClass('bottomEdge')) {
                    $this.css('height', parentHeight);
                }
            }

            if ($this.hasClass('bottomEdge')) {
                offsetTop = offsetTop + parentHeight - $this.outerHeight(false);                
                $this.css('top', offsetTop);
            }

            if ($this.hasClass('center') && ($this.hasClass('top') || $this.hasClass('bottom'))) {
                offsetLeft = offsetLeft + (parentWidth / 2) - ($this.outerWidth(false) / 2);
                $this.css('left', offsetLeft);
            }

            if ($this.hasClass('center') && ($this.hasClass('left') || $this.hasClass('right'))) {
                offsetTop = offsetTop + (parentHeight / 2) - ($this.outerHeight(false) / 2);
                $this.css('top', offsetTop);
            }
        }
    }
};
// Note some of this functionality is in Menu.js as well

// Deferred Loading for mega menus
$(function () {
	"use strict";

	var thisRef = {};

	thisRef.initialized = false;

	var LOAD_TRIGGER_DISTANCE = 200; // in px
	var $megaMenus = $('[data-displaymegamenu="True"]');
	function isNear(element, distance, event) {
		var left = element.offset().left - distance,
			top = element.offset().top - distance,
			right = left + element.width() + 2 * distance,
			bottom = top + element.height() + 2 * distance,
			x = event.pageX,
			y = event.pageY;

		return (x > left && x < right && y > top && y < bottom);
	};

	$('body:not(.mobile)').bind('mousemove.megaMenuLazyLoad', function (e) {
		$megaMenus.each(function (index) {
			var mouseIsNear = isNear($(this), LOAD_TRIGGER_DISTANCE, e);
			if (mouseIsNear) {
				if (!thisRef.initialized) {
					$('body').unbind('.megaMenuLazyLoad');
					thisRef.initialized = true;
					var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
					.map(function () {
						$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
						return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
					}).toArray();

					window.Pages.megaMenuLoaded.resolve();
					reloadSharedContentContainers(megaMenuContentContainers);
				}
			} 
		});
	});
});

var reloadSharedContentContainers = function (containerIDs) {
	if (containerIDs.length > 0) {
		// Reload all mega menus?
		var url = getAbsoluteUrl('/Content/Load?contentCollectionID=' + $('#hdnContentCollectionID').val() + "&StructureID=" + $('#hdnStructureID').val() + "&themeID=" + $('#hdnThemeID').val());
		if ($('body').hasClass('preview'))
			url += "&preview=true";
		$.ajax({
			url: url,
			type: 'POST',
			data: JSON.stringify({ "contentContainerIDs": containerIDs }),
			contentType: 'application/json',
			cache: false,
			async: true,
			ignoreEditor: true, //prevent for executing global editor event
			error: function (xhr, textStatus, exception) {
				if (xhr.status != 0) {
					alert("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
				}
			},
			success: function (response) {
				if (response.PageModified !== undefined && response.PageModified === true && response.PageModifiedMessage) {
					if (confirm(response.PageModifiedMessage)) {
						document.cookie = "refresh=true; max-age=5";
						location.reload();
					}
				}
				else if (response.ErrorMessage)
					alert(response.ErrorMessage);
				else {
					//Replace content containers HTML
					var root = document.createElement("div");
					root.innerHTML = response;
					$(root).find('#fb-root').remove();
					$('head').append($(root).find('.bundledStyles'));
					var allChilds = root.childNodes;
					for (var i = 0; i < containerIDs.length; i++) {
						var contentContainerID = containerIDs[i];
						//Grab Content Container HTML from response
						var contentContainerHtml = null;
						for (var j = 0; j < allChilds.length; j++) {
							if (allChilds[j].id && allChilds[j].id == 'cc' + contentContainerID) {
								contentContainerHtml = allChilds[j].outerHTML;
								break;
							}
						}
						if (contentContainerHtml != null) {
							var $contentContainer = $('#cc' + contentContainerID);
							$contentContainer.empty().replaceWith(contentContainerHtml);
						} else {
							//ContentContainer Html was not found. This might happen when we have a html version and switch (Refresh containers) to a linked version on the same page.
						}
					}

					if (window.cpMedia) {
						$('.mainNavMegaMenu.megaMenuContainer').each(function () {
							applyElementQueryToChildren($(this));
						});
					}

					//TODO: unbind/destroy events/drag/drop on elements before initialize containers
					if (typeof InitializeContainers == 'function' && getCookieValue("enableLiveEdit") === "true") {
						InitializeContainers({ hidePopover: false });
						$('.mainNavMegaMenu.megaMenuContainer').find('.pinned').removeClass('pinned');
						setTimeout(function () { // It is unfortunate to use  timeout here, but there is a very difficult to reproduce race condition in FF where it is still getting unpinned by something
							$('.mainNavMegaMenu.megaMenuContainer').find('.pinned').removeClass('pinned');
						},300);
					}
					if (menuManager && typeof menuManager.attachDragAndDropHandlers == 'function') {
						menuManager.attachDragAndDropHandlers();
					}

					//Execute this function or else the click event wont be registered for tabbed widgets inside megamenus.
					Core.Layout.attachTabbedWidgetTabHandlers();
				}
			}
		});
	}
};

// Handle touchstart event for touch devices. First click will load the megamenus if they haven't been loaded and show the mega menu. Second click will navigate to the menu link itself.
$('[data-displaymegamenu="True"]').bind('touchstart', function (e) {
	e.stopPropagation(); // prevent this event from bubbling up and triggering the handler on document below!
	if (($(this).closest('.mainNavHolderMobile')[0] !== undefined) || ($('body:not(.mobile)').length === 0)) { // Return if mobile menu is being shown
		return;
	}
	if (window.lastMegaMenuOpen === this) { // Used to do the second click navigation if the same menu is clicked twice.
		return;
	}
	e.preventDefault();
	if (!window.megaMenuInitializedForTouch) {
		$('body').unbind('.megaMenuLazyLoad');
		window.megaMenuInitializedForTouch = true;
		var megaMenuContentContainers = $('[data-displaymegamenu="True"]')
		.map(function () {
			$('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').html('Loading...');
			return $('#mainNavMegaMenu' + $(this).data('pageid') + ' div.pageContent').data('containerid');
		}).toArray();

		window.Pages.megaMenuLoaded.resolve();
		reloadSharedContentContainers(megaMenuContentContainers);
	}

	menuManager.menuMouseOver($(this)); 
	window.lastMegaMenuOpen = this;
});

$(document).bind('touchstart click', function (e) {
	if (window.lastMegaMenuOpen === undefined || window.lastMegaMenuOpen === this || !isResolvedOrState(window.Pages.megaMenuLoaded)) {
		return;
	}
	//Skip menumouseout method if user slide up the expanded mega menu to scroll
	if (!e.target.id.startsWith("mainNavMegaMenu")) {
		if (!$(e.target).parents("aside[id^='mainNavMegaMenu']").length) {
			menuManager.menuMouseOut($(window.lastMegaMenuOpen));
		}
	}
});
(function () {
	const focusableSelector = 'a:not([disabled]):not([aria-hidden="true"]),input:not([disabled]):not([type="hidden"])';
	const toggleEl = (target, toggleable) => {
		const display = target.getAttribute("aria-expanded") === "false";
		toggleable.style.display = display ? "block" : "none";
		target.setAttribute("aria-expanded", display);

		if (display) {
			target.classList.add("active");
		} else {
			target.classList.remove("active");
		}
	};

	const repositionPopover = (target) => {
		const elId = target.getAttribute("aria-controls");
		if (!elId) {
			return;
		}

		const popover = document.getElementById(elId);
		if (!popover) {
			return;
		}

		const popoverWidth = popover.offsetWidth;
		const rect = target.getBoundingClientRect();
		const targetHeight = target.offsetHeight;
		const distanceFromRight = window.innerWidth - rect.left;
		const parent = target.parentElement;
		const parentWidth = parent.offsetWidth;

		if (distanceFromRight < popoverWidth && parentWidth < popoverWidth) {
			popover.classList.add("flip");
			const shift = parentWidth - popoverWidth;
			popover.style.left = `${shift}px`;
		} else {
			popover.classList.remove("flip");
			popover.style.left = `0px`;
		}

		const parentRect = parent.getBoundingClientRect();
		const distanceFromParentBottom = parentRect.bottom - rect.bottom;
		popover.style.bottom = `${distanceFromParentBottom + targetHeight}px`;
		popover.style.zIndex = 1;
	};

	const handleCpNavKeydown = (event, focusables) => {
		if (focusables.length < 1) {
			return;
		}

		const currentFocusedIndex = focusables.findIndex(element => element === document.activeElement);
		let nextFocusIndex = -1;
		switch (event.key) {
			case 'ArrowLeft':
			case 'ArrowUp':
				event.preventDefault();
				if (currentFocusedIndex > 0) {
					nextFocusIndex = currentFocusedIndex - 1;
				} else {
					nextFocusIndex = focusables.length - 1;
				}
				break;
			case 'ArrowRight':
			case 'ArrowDown':
				event.preventDefault();
				if (currentFocusedIndex < focusables.length - 1) {
					nextFocusIndex = currentFocusedIndex + 1;
				} else {
					nextFocusIndex = 0;
				}
				break;
			case 'Home':
				event.preventDefault();
				nextFocusIndex = 0;
				break;
			case 'End':
				event.preventDefault();
				nextFocusIndex = focusables.length - 1;
				break;
			default:
				break;
		}

		if (nextFocusIndex > -1) {
			focusables[currentFocusedIndex].setAttribute('tabindex', '-1');
			focusables[nextFocusIndex].setAttribute('tabindex', '0');
			focusables[nextFocusIndex].focus();
		}
	};

	const handleCpNav2DKeydown = (e, focusables) => {
		const map = {
			"ArrowLeft": { pos: "left", sign: 1, finder: "findLast", ctrl: false },
			"ArrowRight": { pos: "left", sign: -1, finder: "find", ctrl: false },
			"ArrowUp": { pos: "top", sign: 1, finder: "findLast", ctrl: false },
			"ArrowDown": { pos: "top", sign: -1, finder: "find", ctrl: false },
			"Home": { pos: "left", sign: 1, finder: "find", ctrl: e.ctrlKey },
			"End": { pos: "left", sign: -1, finder: "findLast", ctrl: e.ctrlKey }
		};

		const settings = map[e.key];

		if (!settings) {
			return;
		}

		const current = e.target.closest(focusableSelector);

		if (!current) {
			return;
		}
		
		e.preventDefault();

		const pos = settings.pos;
		const offsetConst = pos === "top" ? "left" : "top";
		const sign = settings.sign;
		const ctrlKey = settings.ctrl;
		const rectCurrent = current.getBoundingClientRect();
		const tolerance = pos === "top" ? current.offsetHeight / 3 : current.offsetWidth / 3;

		const finder = settings.finder;

		const elFound = focusables[finder](el => {
			const rect = el.getBoundingClientRect();
			const currentDistance = sign * (rectCurrent[pos] - rect[pos]);
			const offset = Math.abs(rectCurrent[offsetConst] - rect[offsetConst]);
			return (offset < tolerance && currentDistance > 0) || ctrlKey;
		});

		if (!elFound) {
			return;
		}

		current.setAttribute("tabindex", "-1");
		elFound.setAttribute("tabindex", "0");
		elFound.focus();
		return elFound;
	}

	const handleEl = (target) => {
		const elId = target.getAttribute("aria-controls");
		if (!elId) {
			return;
		}

		const toggleable = document.getElementById(elId);
		if (!toggleable) {
			return;
		}
		
		toggleEl(target, toggleable);

		const handleFocusout = (e) => {
			if (toggleable.contains(e.relatedTarget) || target.getAttribute("aria-expanded") !== "true") {
				return;
			}

			if (toggleable.contains(e.currentTarget) && target.contains(e.relatedTarget)) {
				// Exclude the case where the focus is moving from popup back to button (e.g. when closing the currently focused popup with a left-mouse click on the button)
				// The popup will be closed within the keydown handleEl(); failure to exclude this case will cause a bug where toggleEl() is called twice, making it difficult to close the popup.
				// https://civicplus.tpondemand.com/entity/182413-211-calendar-month-view-remove-menu
				return;
			}

			toggleEl(target, toggleable);
		};

		if (!target["data-cp-toggle"]) {
			target["data-cp-toggle"] = true;
			toggleable.addEventListener("focusout", handleFocusout);
			target.addEventListener("focusout", handleFocusout);
		}

		const closeActionEl = toggleable.querySelector(".close");

		if (!closeActionEl) {
			return toggleable;
		}

		const handleClose = (e) => {
			if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
				e.preventDefault();
				toggleEl(target, toggleable);
				target.focus();
			}
		};

		if (!closeActionEl["data-cp-toggle"]) {
			closeActionEl["data-cp-toggle"] = true;
			closeActionEl.addEventListener("click", handleClose);
			closeActionEl.addEventListener("keydown", handleClose);
		}

		return toggleable;
	};

	const handleDropdown = (target, func) => {
		const toggleable = handleEl(target);
		if (!toggleable) {
			return;
		}
		const focusables = Array.from(toggleable.querySelectorAll(focusableSelector));
		if (focusables.length === 0) {
			return;
		}
		focusables.forEach( (item, index) => {
			item.setAttribute("tabindex", -!!index|0);
		});
		if (!target["data-cp-toggle-navkeys"]) {
			target["data-cp-toggle-navkeys"] = true;
			target.addEventListener("keydown", e => {
				if (e.key === "ArrowDown" && target.getAttribute("aria-expanded") === "true") {
					focusables[0].focus();
				}
			});
			toggleable.addEventListener("keydown", e => {
				func(e, focusables);
			});
		}
	}

	const handleDropdown1D = (target) => {
		return handleDropdown(target, handleCpNavKeydown);
	}

	const handleDropdown2D = (target) => {
		return handleDropdown(target, handleCpNav2DKeydown);
	}

	const handlePopover = (target) => {
		handleEl(target);
		repositionPopover(target);
	};

	/**
	 * From the given toggle button's aria-controls elements returns active and total panel count
	 * @target  {Element} foo [description]
	 */
	const getPanels = (target) => {
		const elIds = target.getAttribute("aria-controls");
		const panelIds = elIds.split(' ');
		let activePanels = 0;
		let totalPanels = 0;
		for (const panelId of panelIds) {
			const panel = document.getElementById(panelId);
			if (!panel) {
				continue
			}
			totalPanels += 1
			activePanels += Number(!!( panel.offsetWidth || panel.offsetHeight || panel.getClientRects().length ))
		}

		return [activePanels, totalPanels];
	}

	/**
	 * Get total height of the given element's children
	 * @collapsable  {Element} foo [description]
	 */
	const collapsableHeight = (collapsable) => {
		const totalHeight = Array.from(collapsable.children).reduce((acc, child) => acc + child.offsetHeight, 0);
		return `calc(${totalHeight}px + 2px)`
	}

	const handleCollapsar = (target) => {
		const elIds = target.getAttribute("aria-controls");
		if (!elIds) {
			return;
		}

		const collapsables = elIds.split(' ').filter(x => document.getElementById(x));

		const expand = target.getAttribute("aria-expanded") === "false";

		for (const collapsableId of collapsables) {

			const collapsable = document.getElementById(collapsableId);
			collapsable.style.overflow = "hidden";
			collapsable.style.transition = "all 300ms ease-in";

			// get all the buttons those are responsible for the given panel
			const controllers = document.querySelectorAll(`[aria-controls^="${collapsableId}"],[aria-controls*=" ${collapsableId} "],[aria-controls$="${collapsableId}"]`);

			if (expand) {
				collapsable.style.height = "0";
				collapsable.style.display = "block";
				collapsable.style.height = collapsableHeight(collapsable);
				let nextFocus = null;
				for (const controller of controllers) {
					const [activePanels, totalPanels] = getPanels(controller);
					if (activePanels !== totalPanels) {
						continue;
					}
					nextFocus = document.getElementById(controller.dataset.cpToggleFocus);
					controller.setAttribute("aria-expanded", "true");
					controller.classList.add("active");
					if (controller.dataset.cpToggleActiveTitle) {
						controller.innerHTML = controller.dataset.cpToggleActiveTitle;
					}
				}

				window.setTimeout(() => {
					collapsable.style.removeProperty("height");
					collapsable.style.removeProperty("overflow");
					nextFocus && nextFocus.focus();
				}, 300);
				continue;
			}

			collapsable.style.height = collapsableHeight(collapsable);
			collapsable.style.overflow = "hidden";
			window.setTimeout(() => {
				collapsable.style.height = "0";
			}, 0);

			window.setTimeout(function () {
				collapsable.style.display = "none";
				for (const controller of controllers) {
					const [activePanels, _] = getPanels(controller);
					if (activePanels !== 0) {
						continue;
					}
					controller.setAttribute("aria-expanded", "false");
					controller.classList.remove("active");
					if (controller.dataset.cpToggleInactiveTitle) {
						controller.innerHTML = controller.dataset.cpToggleInactiveTitle;
					}
				}
			}, 300);
		}
	};

	const handleCpToggles = (e) => {
		if (e.type === "click" || (e.type === "keydown" && (e.key === "Enter" || e.key === " "))) {
			const target = e.target.closest("[data-cp-toggle]");
			if (!target) {
				return;
			}
			e.preventDefault();
			// target.focus(); // focus element so that focusout is fired to close other open menus.

			const actionDescriptor = target.dataset.cpToggle;
			switch (actionDescriptor) {
				case "popover":
					handlePopover(target);
					break;
				case "collapse":
					handleCollapsar(target);
					break;
				case "dropdown":
					handleDropdown1D(target);
					break
				case "dropdown-2d":
					handleDropdown2D(target);
					break
				default:
					handleEl(target);
			}
		}

		const escTargets = new Set(["dropdown", "dropdown-2d"]);

		if (e.type === "keydown" && e.key === "Escape") {
			const toggles = document.querySelectorAll('[data-cp-toggle][aria-expanded="true"]');
			for (const target of toggles) {
				const toggleType = target.dataset.cpToggle;
				if (escTargets.has(toggleType)) {
					const elId = target.getAttribute("aria-controls");
					if (!elId) {
						continue;
					}

					const toggleable = document.getElementById(elId);
					if (!toggleable) {
						continue;
					}

					const refocus = toggleable.contains(document.activeElement);

					toggleEl(target, toggleable);

					if (refocus) {
						target.focus();
					}
				}
			}
		}
	};

	document.addEventListener("click", handleCpToggles);
	document.addEventListener("keydown", handleCpToggles);
})();
;
/* Responsive Menu Font Sizing
 * Joshua Enfield
 *  -------------
 * This resizes menus responsively. It takes into account the original font size.
 * If auto widths are on font sizes are adjusted based on the size left in menu items. 
 * If auto widths are off font sizes are adjusted based on the size left in the main nav.
 * ---------------
 * Common Usage: $('menuOLSelector').responsiveMenuText();
 * jQuery Usage expects markup in the form of ol > li > a
 */
(function ($, window, undefined) {

	'use strict';

	var DEBUG = false;
	var diag = function (msg) {
		if (DEBUG) {
			window.console.log('[ Responsive Menus ] ' + msg);
		}
	};
	
	$.MenuTextResizer = function (options, element) {
		this.$mainNavMenu = $(element);
		this.$topLevelMenuItems = this.$mainNavMenu.find('a');
		this._init(options);
	};

	// the options
	$.MenuTextResizer.defaults = {
		ratio: 0.5,
		timeout: 120,
		numberOfFontSizes: 20,
		tolerance: 0.00
	};

	$.MenuTextResizer.prototype = {
		_init: function (options) {
			// options
			this.options = $.extend(true, {}, $.MenuTextResizer.defaults, options);

			// local variables
			var self = this;
			this.timer = null;
			this.autoCreatedWrapper = false;
			createInnerWrappersIfWrappersDoNotExist();
			var desktopFontSize = parseFloat(this.$topLevelMenuItems.css('font-size')); // Initial Font Size. When at maximum size font-size should be this.
			var numberOfFontSizes = this.options.numberOfFontSizes;
			var fontSizes = getFontSizes();
			var currentFontIndex = fontSizes.length - 1;
			var tolerance = this.options.tolerance;
			var autoWidths = this.$mainNavMenu.data('autowidth') == true;

			var ratioToTriggerResize = autoWidths ? { menuRatio: 1.00, itemRatio: self.options.ratio } : { menuRatio: self.options.ratio, itemRatio: 1.00 };
			//var ratioToTriggerResize = { menuRatio: 0.68, itemRatio: 1.00 };
			//var ratioToTriggerResize = { menuRatio: 1.00, itemRatio: 0.70 };

			if (autoWidths)
				diag('Auto Widths Detected.');
			else {
				diag('Auto Widths Turned Off.');
			}

			diag('Font Sizes: ' + fontSizes);

			// Gets list of font sizes to resize amongst

			function getFontSizes () {
				var fontSizes = [];

				// Linear Scale
				for (var i = 0; i < numberOfFontSizes; i++) {
					fontSizes[i] = Math.floor(desktopFontSize / numberOfFontSizes * (i + 1));
				}

				// Exponential Decay
				/*
				fontSizes[numberOfFontSizes - 1] = desktopFontSize;
				for (var i = (numberOfFontSizes-2); i > 0; i--) {
					fontSizes[i] = Math.floor(0.95 * fontSizes[i+1]);
				}*/

				return fontSizes;
			}

			// Increases font size.
			var increaseFontSize = function () {
				var wasFontSizeIncreased = false;

				if (currentFontIndex < (fontSizes.length - 1)) {
					currentFontIndex++;
					wasFontSizeIncreased = true;
					// ratioToTriggerResize.itemRatio -= 0.1;
				}

				self.$topLevelMenuItems.css('font-size', fontSizes[currentFontIndex]);
				diag('INCREASE IN SIZE TRIGGERED (sizeIndex: ' + currentFontIndex + (currentFontIndex == (numberOfFontSizes - 1) ? '(MAX)' : '') + ' ,' + fontSizes[currentFontIndex] + ')');
				return wasFontSizeIncreased;
			};

			// Decreases font size.
			var decreaseFontSize = function () {
				var wasFontSizeDecreased = false;

				if (currentFontIndex > 0) {
					currentFontIndex--;
					wasFontSizeDecreased = true;
					//  ratioToTriggerResize.itemRatio += 0.1;
				}

				self.$topLevelMenuItems.css('font-size', fontSizes[currentFontIndex]);

				diag('DECREASE IN SIZE TRIGGERED (sizeIndex: ' + currentFontIndex + ',' + fontSizes[currentFontIndex] + ')');
				return wasFontSizeDecreased;
			};

			// Wraps menu Items with a span if spans are not already wrapping them.
			function createInnerWrappersIfWrappersDoNotExist () {
				if (self.$topLevelMenuItems.find('span').length === 0) {
					self.$topLevelMenuItems.removeAttr('style').wrapInner('<span/>').find('span').css('display', 'inline');
					self.autoCreatedWrapper = true;
				}
			}

			// Get the ratios of space taken to space available for menu items and the menu itself
			function getRatio () {
				var getItemRatio = function ($item) { return $item.find('span').width() / $item.width(); };
				var itemRatio = getItemRatio(self.$topLevelMenuItems.first());

				var widthConsumedByMenuItems = 0;
				self.$topLevelMenuItems.each(function () {
					widthConsumedByMenuItems += $(this).outerWidth(true);

					var currentItemRatio = getItemRatio($(this));
					if (currentItemRatio > itemRatio) {
						itemRatio = currentItemRatio;
					}

				});

				var menuRatio = widthConsumedByMenuItems / self.$mainNavMenu.width();
				var result = {
					menuRatio: menuRatio.toFixed(2),
					itemRatio: itemRatio.toFixed(2)
				};

				return result;
			}

			// Conditions
			var predicates = (function () {
				// Should return true when an increase in size should occur.
				var shouldIncreaseInSize = function () {
					var currentRatio = getRatio();
					diag(JSON.stringify(currentRatio));
					if (autoWidths) {
						return currentRatio.itemRatio < (ratioToTriggerResize.itemRatio - tolerance);
					} else {
						return currentRatio.menuRatio < (ratioToTriggerResize.menuRatio - tolerance);
					}
				};

				// Should return true when a decrease in size should occur.
				var shouldDescreaseInSize = function () {
					var currentRatio = getRatio();
					diag(JSON.stringify(currentRatio));
					if (autoWidths) {
						return currentRatio.itemRatio > (ratioToTriggerResize.itemRatio - tolerance);
					} else {
						return currentRatio.menuRatio > (ratioToTriggerResize.menuRatio - tolerance);
					}
				};

				return {
					shouldIncreaseInSize: shouldIncreaseInSize,
					shouldDescreaseInSize: shouldDescreaseInSize
				};

			}());

			// Function that actually adjusts menu font sizes.
			this.adjustMenuFontSize = function () {
				while (predicates.shouldIncreaseInSize() && increaseFontSize()) ;
				while (predicates.shouldDescreaseInSize() && decreaseFontSize()) ;
			};

			this._initDefault();
		},
		_initDefault : function () {
			// Setup and bind menu resizing logic
			var self = this;
			var timeout = self.options.timeout || 100; //debouncing
			$(window).bind('resize.responsiveMenuText', function () {
				self.timer && clearTimeout(self.timer);
				
				self.timer = setTimeout(function () {
					self.adjustMenuFontSize();
				}, timeout);
			});
			self.adjustMenuFontSize();
		},
		dispose: function () {
			var self = this;
			clearTimeout(self.timer);
			$(window).unbind('.responsiveMenuText');
			if (self.autoCreatedWrapper) {
				self.$topLevelMenuItems.find('span').contents().unwrap();
				setTimeout(function () { self.$topLevelMenuItems.removeAttr('style'); }, 200);
			}
		}
	};

	/* jQuery Plugin Support
	   Expected Markup structure: ol > li > a
	   Menu Text is dynamically wrapped by a span if it isn't already.
	*/
	$.fn.responsiveMenuText = function (options) {
		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				var instance = $.data(this, 'responsiveMenuText');
				if (!instance) {
					diag("cannot call methods on responsiveMenuText prior to initialization; " +
					"attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					diag("no such method '" + options + "' for responsiveMenuText instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		}
		else {
			this.each(function () {
				var instance = $.data(this, 'responsiveMenuText');
				if (instance) {
					instance._init(options);
				}
				else {
					instance = $.data(this, 'responsiveMenuText', new $.MenuTextResizer(options, this));
				}
			});
		}

		return this;
	};

})(jQuery, window);
/**
 * Based on  jquery.rwdmenu.js v1.0.1
 * http://www.codrops.com
 *
 */
; (function ($, window, undefined) {

	'use strict';

	// global
	var Modernizr = window.Modernizr, $body = $('body');

	$.RWDMenu = function (options, element) {
		this.$el = $(element);
		this._init(options);
	};

	// the options
	$.RWDMenu.defaults = {
		// classes for the animation effects
		animationClasses: { classin: 'rwd-animate-in', classout: 'rwd-animate-out' },
		// callback: click a link that has a sub menu
		// el is the link element (li); name is the level name
		onLevelClick: function (el, name) { return false; },
		// callback: click a link that does not have a sub menu
		// el is the link element (li); ev is the event obj
		onLinkClick: function (el, ev) { return false; }
	};

	$.RWDMenu.prototype = {
		_init: function (options) {

			// options
			this.options = $.extend(true, {}, $.RWDMenu.defaults, options);
			// cache some elements and initialize some variables
			this._config();

			var animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			},
				transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.rwdmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.rwdmenu',
			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			var self = this;
			this.clickMenuItem = function (event) {
				//if (!menuManager.mobileMainNav) return true;

				event.stopPropagation();

				var $li = $(this),
					$submenu = $li.children('ol.rwd-submenu');

				if ($submenu.length == 0) {
					var id = $li.attr('id'); //.replace(/item|leftItem/i, '');
					var $olSubMenu = menuManager.$divListSubMenus.find('#Parent' + id);
					if ($olSubMenu.length > 1) {
						//remove duplicates. they might have been added by different menu (main/side)
						$olSubMenu.slice(1).remove();
						$olSubMenu = menuManager.$divListSubMenus.find('#Parent' + id);
					}
					if ($olSubMenu.length == 1) {
						var $back = $('<li class="rwd-back"><a href="#" style="z-index:2;" class="navMenuItem backMenuLink" aria-haspopup="true" role="menuitem">Back</a></li>');
						$back.bind('click.rwdmenu', self.clickBack);
						$olSubMenu.prepend($back);
						$olSubMenu.addClass('rwd-submenu');
						$olSubMenu.find('li:not(.rwd-back)').bind('click.rwdmenu', self.clickMenuItem);
						$li.append($olSubMenu);
						$submenu = $olSubMenu;
					}
				}

				if ($submenu.length > 0) {

					var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
						onAnimationEndFn = function () {
							self.$menu.unbind(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('rwd-subview');
							$('.rwd-subviewopen').children('ol').attr('aria-hidden', 'true');
							$li.addClass('rwd-subviewopen').parents('.rwd-subviewopen:first').removeClass('rwd-subviewopen').addClass('rwd-subview');
							$li.children('ol').attr('aria-hidden', 'false');
							$flyin.remove();
							$li.find('.openThePageLink').focus();
						};

					setTimeout(function () {
						$flyin.addClass(self.options.animationClasses.classin);
						self.$menu.addClass(self.options.animationClasses.classout);
						if (self.supportAnimations) {
							self.$menu.bind(self.animEndEventName, onAnimationEndFn);
						} else {
							onAnimationEndFn.call();
						}

						self.options.onLevelClick($li, $li.children('a:first').text());
					});

					return false;

				} else {
					self.options.onLinkClick($li, event);
				}

			};

			this.clickBack = function (event) {

				var $this = $(this),
					$submenu = $this.parents('ol.rwd-submenu:first'),
					$item = $submenu.parent(),
					$flyin = $submenu.clone().insertAfter(self.$menu);

				var onAnimationEndFn = function () {
					self.$menu.unbind(self.animEndEventName).removeClass(self.options.animationClasses.classin);
					$flyin.remove();
				};

				setTimeout(function () {
					$flyin.addClass(self.options.animationClasses.classout);
					self.$menu.addClass(self.options.animationClasses.classin);
					if (self.supportAnimations) {
						self.$menu.bind(self.animEndEventName, onAnimationEndFn);
					} else {
						onAnimationEndFn.call();
					}

					$item.removeClass('rwd-subviewopen').children('ol').attr('aria-hidden', 'true');

					var $subview = $this.parents('.rwd-subview:first');
					if ($subview.is('li')) {
						$subview.addClass('rwd-subviewopen').children('ol').attr('aria-hidden', 'false');
					}
					$subview.removeClass('rwd-subview');
					$('ol#mainNavMenu').find('li > a').first().focus();
				});

				return false;
			};

			this._initEvents();

		},
		_config: function () {
			this.$menu = this.$el;// this.$el.children('ol.rwd-menu');
			this.$menuitems = this.$menu.find('li.topMenuItem');
			this.$menu.addClass('rwd-menu');
		},
		_initEvents: function () {

			var self = this;

			this.$menuitems.bind('click.rwdmenu', self.clickMenuItem);
		},
		destroy: function () {
			//Remove classes, other events, not needed lis (back, to parent) and place back into hidden div.
			this.$menu.removeClass('rwd-menu rwd-subview');
			this.$menu.find('li').removeClass('rwd-subviewopen rwd-subview').unbind('.rwdmenu');
			this.$menu.find('li.rwd-back').remove();
			this.$menu.find('li.toParent').remove();
			this.$menu.find('ol').removeClass('rwd-submenu').each(function () {
				menuManager.$divListSubMenus.append($(this));
			});
		}
	};

	var logError = function (message) {
		if (window.console) {
			window.console.error(message);
		}
	};

	$.fn.rwdmenu = function (options) {
		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				var instance = $.data(this, 'rwdmenu');
				if (!instance) {
					logError("cannot call methods on rwdmenu prior to initialization; " +
					"attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					logError("no such method '" + options + "' for rwdmenu instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		}
		else {
			this.each(function () {
				var instance = $.data(this, 'rwdmenu');
				if (instance) {
					instance._init();
				}
				else {
					instance = $.data(this, 'rwdmenu', new $.RWDMenu(options, this));
				}
			});
		}
		return this;
	};

})(jQuery, window);
/*global jQuery:false, alert:false */

/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 *
 * Copyright (c) 2010 Resopollution
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.github.com/weixiyen/jquery-filedrop
 *
 * Version:  0.1.0
 *
 * Features:
 *      Allows sending of extra parameters with file.
 *      Works with Firefox 3.6+
 *      Future-compliant with HTML5 spec (will work with Webkit browsers and IE9)
 * Usage:
 *  See README at project homepage
 *
 */
;(function($) {

  var default_opts = {
        fallback_id: '',
        fallback_dropzoneClick : true,
        url: '',
        refresh: 1000,
        paramname: 'userfile',
        requestType: 'POST',    // just in case you want to use another HTTP verb
        allowedfileextensions:[],
        allowedfiletypes:[],
        maxfiles: 25,           // Ignored if queuefiles is set > 0
        maxfilesize: 1,         // MB file size limit
        queuefiles: 0,          // Max files before queueing (for large volume uploads)
        queuewait: 200,         // Queue wait time if full
        data: {},
        headers: {},
        drop: empty,
        dragStart: empty,
        dragEnter: empty,
        dragOver: empty,
        dragLeave: empty,
        docEnter: empty,
        docOver: empty,
        docLeave: empty,
        beforeEach: empty,
        afterAll: empty,
        rename: empty,
        error: function(err, file, i, status) {
          alert(err);
        },
        uploadStarted: empty,
        uploadFinished: empty,
        progressUpdated: empty,
        globalProgressUpdated: empty,
        speedUpdated: empty
      },
      errors = ["BrowserNotSupported", "TooManyFiles", "FileTooLarge", "FileTypeNotAllowed", "NotFound", "NotReadable", "AbortError", "ReadError", "FileExtensionNotAllowed"];

  $.fn.filedrop = function(options) {
    var opts = $.extend({}, default_opts, options),
        global_progress = [],
        doc_leave_timer, stop_loop = false,
        files_count = 0,
        files;

    if ( opts.fallback_id )
    {
      if ( opts.fallback_dropzoneClick === true )
      {
        $('#' + opts.fallback_id).css({
          display: 'none',
          width: 0,
          height: 0
        });
      }




      if ( opts.fallback_dropzoneClick === true )
      {
        if ( this.find('#' + opts.fallback_id).length > 0 )
        {
          throw "Fallback element ["+opts.fallback_id+"] cannot be inside dropzone, unless option fallback_dropzoneClick is false";
        }
        else
        {
          this.on('click', function(e){
            $('#' + opts.fallback_id).trigger(e);
          });
        }
      }

      $('#' + opts.fallback_id).change(function(e) {
        opts.drop(e);
        files = e.target.files;
        files_count = files.length;
        upload();
      });
    }

    this.on('drop', drop).on('dragstart', opts.dragStart).on('dragenter', dragEnter).on('dragover', dragOver).on('dragleave', dragLeave);
    $(document).on('drop', docDrop).on('dragenter', docEnter).on('dragover', docOver).on('dragleave', docLeave);

    function drop(e) {
      if( opts.drop.call(this, e) === false ) return false;
      if(!e.originalEvent.dataTransfer)
        return;
      files = e.originalEvent.dataTransfer.files;
      if (files === null || files === undefined || files.length === 0) {
        opts.error(errors[0]);
        return false;
      }
      files_count = files.length;
      upload();
      e.preventDefault();
      return false;
    }

    function getBuilder(filename, filedata, mime, boundary) {
      var dashdash = '--',
          crlf = '\r\n',
          builder = '',
          paramname = opts.paramname;

      if (opts.data) {
        var params = $.param(opts.data).replace(/\+/g, '%20').split(/&/);

        $.each(params, function() {
          var pair = this.split("=", 2),
              name = decodeURIComponent(pair[0]),
              val  = decodeURIComponent(pair[1]);

          if (pair.length !== 2) {
            return;
          }

          builder += dashdash;
          builder += boundary;
          builder += crlf;
          builder += 'Content-Disposition: form-data; name="' + name + '"';
          builder += crlf;
          builder += crlf;
          builder += val;
          builder += crlf;
        });
      }

      if (jQuery.isFunction(paramname)){
        paramname = paramname(filename);
      }

      builder += dashdash;
      builder += boundary;
      builder += crlf;
      builder += 'Content-Disposition: form-data; name="' + (paramname||"") + '"';
      builder += '; filename="' + encodeURIComponent(filename) + '"';
      builder += crlf;

      builder += 'Content-Type: ' + mime;
      builder += crlf;
      builder += crlf;

      builder += filedata;
      builder += crlf;

      builder += dashdash;
      builder += boundary;
      builder += dashdash;
      builder += crlf;
      return builder;
    }

    function progress(e) {
      if (e.lengthComputable) {
        var percentage = Math.round((e.loaded * 100) / e.total);
        if (this.currentProgress !== percentage) {

          this.currentProgress = percentage;
          opts.progressUpdated(this.index, this.file, this.currentProgress);

          global_progress[this.global_progress_index] = this.currentProgress;
          globalProgress();

          var elapsed = new Date().getTime();
          var diffTime = elapsed - this.currentStart;
          if (diffTime >= opts.refresh) {
            var diffData = e.loaded - this.startData;
            var speed = diffData / diffTime; // KB per second
            opts.speedUpdated(this.index, this.file, speed);
            this.startData = e.loaded;
            this.currentStart = elapsed;
          }
        }
      }
    }

    function globalProgress() {
      if (global_progress.length === 0) {
        return;
      }

      var total = 0, index;
      for (index in global_progress) {
        if(global_progress.hasOwnProperty(index)) {
          total = total + global_progress[index];
        }
      }

      opts.globalProgressUpdated(Math.round(total / global_progress.length));
    }

    // Respond to an upload
    function upload() {
      stop_loop = false;

      if (!files) {
        opts.error(errors[0]);
        return false;
      }

      if (opts.allowedfiletypes.push && opts.allowedfiletypes.length) {
        for(var fileIndex = files.length;fileIndex--;) {
          if(!files[fileIndex].type || $.inArray(files[fileIndex].type, opts.allowedfiletypes) < 0) {
            opts.error(errors[3], files[fileIndex]);
            return false;
          }
        }
      }

      if (opts.allowedfileextensions.push && opts.allowedfileextensions.length) {
        for(var fileIndex = files.length;fileIndex--;) {
          var allowedextension = false;
          for (i=0;i<opts.allowedfileextensions.length;i++){
            if (files[fileIndex].name.substr(files[fileIndex].name.length-opts.allowedfileextensions[i].length).toLowerCase()
                == opts.allowedfileextensions[i].toLowerCase()
            ) {
              allowedextension = true;
            }
          }
          if (!allowedextension){
            opts.error(errors[8], files[fileIndex]);
            return false;
          }
        }
      }

      var filesDone = 0,
          filesRejected = 0;

      if (files_count > opts.maxfiles && opts.queuefiles === 0) {
        opts.error(errors[1]);
        return false;
      }

      // Define queues to manage upload process
      var workQueue = [];
      var processingQueue = [];
      var doneQueue = [];

      // Add everything to the workQueue
      for (var i = 0; i < files_count; i++) {
        workQueue.push(i);
      }

      // Helper function to enable pause of processing to wait
      // for in process queue to complete
      var pause = function(timeout) {
        setTimeout(process, timeout);
        return;
      };

      // Process an upload, recursive
      var process = function() {

        var fileIndex;

        if (stop_loop) {
          return false;
        }

        // Check to see if are in queue mode
        if (opts.queuefiles > 0 && processingQueue.length >= opts.queuefiles) {
          return pause(opts.queuewait);
        } else {
          // Take first thing off work queue
          fileIndex = workQueue[0];
          workQueue.splice(0, 1);

          // Add to processing queue
          processingQueue.push(fileIndex);
        }

        try {
          if (beforeEach(files[fileIndex]) !== false) {
            if (fileIndex === files_count) {
              return;
            }
            var reader = new FileReader(),
                max_file_size = 1048576 * opts.maxfilesize;

            reader.index = fileIndex;
            if (files[fileIndex].size > max_file_size) {
              opts.error(errors[2], files[fileIndex], fileIndex);
              // Remove from queue
              processingQueue.forEach(function(value, key) {
                if (value === fileIndex) {
                  processingQueue.splice(key, 1);
                }
              });
              filesRejected++;
              return true;
            }

            reader.onerror = function(e) {
              switch(e.target.error.code) {
                case e.target.error.NOT_FOUND_ERR:
                  opts.error(errors[4]);
                  return false;
                case e.target.error.NOT_READABLE_ERR:
                  opts.error(errors[5]);
                  return false;
                case e.target.error.ABORT_ERR:
                  opts.error(errors[6]);
                  return false;
                default:
                  opts.error(errors[7]);
                  return false;
              };
            };

            reader.onloadend = !opts.beforeSend ? send : function (e) {
              opts.beforeSend(files[fileIndex], fileIndex, function () { send(e); });
            };

            reader.readAsDataURL(files[fileIndex]);

          } else {
            filesRejected++;
          }
        } catch (err) {
          // Remove from queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });
          opts.error(errors[0]);
          return false;
        }

        // If we still have work to do,
        if (workQueue.length > 0) {
          process();
        }
      };

      var send = function(e) {

        var fileIndex = (e.srcElement || e.target).index;

        // Sometimes the index is not attached to the
        // event object. Find it by size. Hack for sure.
        if (e.target.index === undefined) {
          e.target.index = getIndexBySize(e.total);
        }

        var xhr = new XMLHttpRequest(),
            upload = xhr.upload,
            file = files[e.target.index],
            index = e.target.index,
            start_time = new Date().getTime(),
            boundary = '------multipartformboundary' + (new Date()).getTime(),
            global_progress_index = global_progress.length,
            builder,
            newName = rename(file.name),
            mime = file.type;

        if (opts.withCredentials) {
          xhr.withCredentials = opts.withCredentials;
        }

        var encodedString = e.target.result.split(',')[1];
        var data = encodedString === undefined ? '' : atob(encodedString);
        if (typeof newName === "string") {
          builder = getBuilder(newName, data, mime, boundary);
        } else {
          builder = getBuilder(file.name, data, mime, boundary);
        }

        upload.index = index;
        upload.file = file;
        upload.downloadStartTime = start_time;
        upload.currentStart = start_time;
        upload.currentProgress = 0;
        upload.global_progress_index = global_progress_index;
        upload.startData = 0;
        upload.addEventListener("progress", progress, false);

        // Allow url to be a method
        if (jQuery.isFunction(opts.url)) {
          xhr.open(opts.requestType, opts.url(upload), true);
        } else {
          xhr.open(opts.requestType, opts.url, true);
        }

        xhr.setRequestHeader('content-type', 'multipart/form-data; boundary=' + boundary);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        // Add headers
        $.each(opts.headers, function(k, v) {
          xhr.setRequestHeader(k, v);
        });

        if(!xhr.sendAsBinary){
          xhr.sendAsBinary = function(datastr) {
            function byteValue(x) {
              return x.charCodeAt(0) & 0xff;
            }
            var ords = Array.prototype.map.call(datastr, byteValue);
            var ui8a = new Uint8Array(ords);
            this.send(ui8a.buffer);
          }
        }

        xhr.sendAsBinary(builder);

        global_progress[global_progress_index] = 0;
        globalProgress();

        opts.uploadStarted(index, file, files_count);

        xhr.onload = function() {
          var serverResponse = null;

          if (xhr.responseText) {
            try {
              serverResponse = jQuery.parseJSON(xhr.responseText);
            }
            catch (e) {
              serverResponse = xhr.responseText;
            }
          }

          var now = new Date().getTime(),
              timeDiff = now - start_time,
              result = opts.uploadFinished(index, file, serverResponse, timeDiff, xhr);
          filesDone++;

          // Remove from processing queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });

          // Add to donequeue
          doneQueue.push(fileIndex);

          // Make sure the global progress is updated
          global_progress[global_progress_index] = 100;
          globalProgress();

          if (filesDone === (files_count - filesRejected)) {
            afterAll();
          }
          if (result === false) {
            stop_loop = true;
          }


          // Pass any errors to the error option
          if (xhr.status < 200 || xhr.status > 299) {
            opts.error(xhr.statusText, file, fileIndex, xhr.status);
          }
        };
      };

      // Initiate the processing loop
      process();
    }

    function getIndexBySize(size) {
      for (var i = 0; i < files_count; i++) {
        if (files[i].size === size) {
          return i;
        }
      }

      return undefined;
    }

    function rename(name) {
      return opts.rename(name);
    }

    function beforeEach(file) {
      return opts.beforeEach(file);
    }

    function afterAll() {
      return opts.afterAll();
    }

    function dragEnter(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.dragEnter.call(this, e);
    }

    function dragOver(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      opts.dragOver.call(this, e);
    }

    function dragLeave(e) {
      clearTimeout(doc_leave_timer);
      opts.dragLeave.call(this, e);
      e.stopPropagation();
    }

    function docDrop(e) {
      e.preventDefault();
      opts.docLeave.call(this, e);
      return false;
    }

    function docEnter(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docEnter.call(this, e);
      return false;
    }

    function docOver(e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      return false;
    }

    function docLeave(e) {
      doc_leave_timer = setTimeout((function(_this) {
        return function() {
          opts.docLeave.call(_this, e);
        };
      })(this), 200);
    }

    return this;
  };

  function empty() {}

  try {
    if (XMLHttpRequest.prototype.sendAsBinary) {
      return;
    }
    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
      function byteValue(x) {
        return x.charCodeAt(0) & 0xff;
      }
      var ords = Array.prototype.map.call(datastr, byteValue);
      var ui8a = new Uint8Array(ords);

      // Not pretty: Chrome 22 deprecated sending ArrayBuffer, moving instead
      // to sending ArrayBufferView.  Sadly, no proper way to detect this
      // functionality has been discovered.  Happily, Chrome 22 also introduced
      // the base ArrayBufferView class, not present in Chrome 21.
      if ('ArrayBufferView' in window)
        this.send(ui8a);
      else
        this.send(ui8a.buffer);
    };
  } catch (e) {}

})(jQuery);
;
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery),function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=e.pageX,l=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,h,l,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,v=m+p.helperProportions.width,_=i.offset.top,b=_+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,h=r+p.snapElements[u].width,l=p.snapElements[u].top,c=l+p.snapElements[u].height,r-g>v||m>h+g||l-g>b||_>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(l-b),n=g>=Math.abs(c-_),o=g>=Math.abs(r-v),a=g>=Math.abs(h-m),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(l-_),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,h=a+t.helperProportions.width,l=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return a>=c&&d>=h&&r>=u&&p>=l;case"intersect":return a+t.helperProportions.width/2>c&&d>h-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>l-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||l>=u&&p>=l||u>r&&l>p)&&(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}}(jQuery),function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=Math.abs(a.parentData.left)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(p-l>0?(e.size.height=p,e.position.top=o.top-u):(e.size.height=l,e.position.top=o.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=o.left-c):(e.size.width=h,e.position.left=o.left+n.width-h))}})}(jQuery),function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||o>i.right||i.top>h||a>i.bottom):"fit"===n.tolerance&&(l=i.left>o&&r>i.right&&i.top>a&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})}(jQuery),function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),o=function(){t.each(n,function(t,i){e[i]&&a[i+"Class"](e[i])})},o(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,o,a,r){return"boolean"==typeof n||n===e?o?t.effects.animateClass.call(this,n?{add:s}:{remove:s},o,a,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,o,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,o;for(o=0;s.length>o;o++)null!==s[o]&&(n=t.data(i+s[o]),n===e&&(n=""),t.css(s[o],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):a.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,o=i.queue,a=t.effects.effect[i.effect];return t.fx.off||!a?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,o=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),o=n.attr("id");s||(s=a+"-header-"+e,i.attr("id",s)),o||(o=a+"-panel-"+e,n.attr("id",o)),i.attr("aria-controls",o),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=o.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,n){var o,a,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(a=d),a=a||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(o=t.show().outerHeight(),e.animate(i,{duration:r,easing:a,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:a,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(o-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,a,p):t.animate(s,r,a,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})}(jQuery),function(t){t.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})}(jQuery),function(t){var e,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},o=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,a=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){a.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled)return!1;t(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var e=s.element[0];o(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(t(this).addClass("ui-state-active"),e=this,s.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",a.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.element.prop("disabled",!!e),e&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?o(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(s),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,o=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(o?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(o?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},x=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},k=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?D():y=!1;else switch(i.charAt(o)){case"d":_=x("d");break;case"D":k("D",d,p);break;case"o":b=x("o");break;case"m":v=x("m");break;case"M":v=k("M",f,g);break;case"y":m=x("y");break;case"@":h=new Date(x("@")),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((x("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(v=1,_=b;;){if(a=this._getDaysInMonth(m,v-1),a>=_)break;v++,_-=a}if(h=this._daylightSavingAdjust(new Date(m,v-1,_)),h.getFullYear()!==m||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,I,P,T,M,S,z,A,E,H,N,W,O,F,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),q=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==q[0]||1!==q[1],$=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-q[0]*q[1]+1,J.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+Q,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?$:j,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;q[0]>x;x++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",P="",X){if(P+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:P+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:P+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:P+=" ui-datepicker-group-middle",I=""}P+="'>"}for(P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?Y?o:s:"")+(/all|right/.test(I)&&0===x?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,G,J,x>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,T+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(P+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((z+S)/7),E=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=E,H=this._daylightSavingAdjust(new Date(te,Z,1-z)),N=0;E>N;N++){for(P+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=m?m.apply(t.input?t.input[0]:null,[H]):[!0,""],F=H.getMonth()!==Z,R=F&&!_||!O[0]||G&&G>H||J&&H>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(H.getTime()===$.getTime()?" "+this._currentClass:"")+(H.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===j.getTime()?" ui-state-highlight":"")+(H.getTime()===$.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);P+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),P+="</tbody></table>"+(X?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=P}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"}(jQuery),function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})}(jQuery),function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var o,a,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),o=t.effects.createWrapper(h).css({overflow:"hidden"}),a=o[p](),r=parseFloat(o.css(f))||0,m[p]=v?a:0,g||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:a+r),v&&(o.css(p,0),g||o.css(f,r+a)),o.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}}(jQuery),function(t){t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=a.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),c&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,g,m)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m).animate(o,g,m),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()}}(jQuery),function(t){t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?l*v:0),top:h+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:l*v),top:h+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}}(jQuery),function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),function(t){t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})}}(jQuery),function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})}}(jQuery),function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(_=_.concat(u),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(_=_.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,u,o.from.y,i.from),i.to=t.effects.setTransition(i,u,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,g[d]=(p?"+=":"-=")+2*h,m[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery),function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,o,a,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",o=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),o===n?a=!0:o=n+o,r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=a&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(o=String.fromCharCode(e.keyCode),r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})}(jQuery),function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),o=i(k.at,p,g),v.left+=o[0],v.top+=o[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,C=d+_+s(this,"marginBottom")+w.height,I=t.extend({},v),P=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:C,offset:[o[0]+P[0],o[1]+P[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,h={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>g&&g>r(n+o)&&(h.vertical="middle"),h.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(I,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})}(jQuery),function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,o,a,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(a=this.options.step,n=o=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:o=this._valueMin();break;case t.ui.keyCode.END:o=this._valueMax();break;case t.ui.keyCode.PAGE_UP:o=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;o=this._trimAlignValue(n+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;o=this._trimAlignValue(n-a)}this._slide(i,r,o)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})}(jQuery),function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;
return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})}(jQuery);
/*!
 * Javascript Cookie v1.5.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(n){var i,r,t;if(typeof define=="function"&&define.amd)define(["jquery"],n);else if(typeof exports=="object"){try{i=require("jquery")}catch(u){}module.exports=n(i)}else r=window.Cookies,t=window.Cookies=n(window.jQuery),t.noConflict=function(){return window.Cookies=r,t}})(function(n){function i(n){return t.raw?n:encodeURIComponent(n)}function o(n){return t.raw?n:decodeURIComponent(n)}function s(n){return i(t.json?JSON.stringify(n):String(n))}function h(n){n.indexOf('"')===0&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return n=decodeURIComponent(n.replace(e," ")),t.json?JSON.parse(n):n}catch(i){}}function r(n,i){var r=t.raw?n:h(n);return f(i)?i(r):r}function u(){for(var n,t,i=0,r={};i<arguments.length;i++){t=arguments[i];for(n in t)r[n]=t[n]}return r}function f(n){return Object.prototype.toString.call(n)==="[object Function]"}var e=/\+/g,t=function(n,e,h){var y,l;if(arguments.length>1&&!f(e))return h=u(t.defaults,h),typeof h.expires=="number"&&(y=h.expires,l=h.expires=new Date,l.setMilliseconds(l.getMilliseconds()+y*864e5)),document.cookie=[i(n),"=",s(e),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("");for(var a=n?undefined:{},p=document.cookie?document.cookie.split("; "):[],v=0,k=p.length;v<k;v++){var w=p[v].split("="),b=o(w.shift()),c=w.join("=");if(n===b){a=r(c,e);break}n||(c=r(c))===undefined||(a[b]=c)}return a};return t.get=t.set=t,t.defaults={},t.remove=function(n,i){return t(n,"",u(i,{expires:-1})),!t(n)},n&&(n.cookie=t,n.removeCookie=t.remove),t});
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix||i:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),1===arguments.length)return a[i]===t?null:a[i];a[i]=s}else{if(1===arguments.length)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>b||y>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],undefined):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},e.ui.ddmanager.droppables[i.scope]=e.ui.ddmanager.droppables[i.scope]||[],e.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=(e.positionAbs||e.position.absolute).top,h=o+e.helperProportions.width,l=r+e.helperProportions.height,u=i.offset.left,c=i.offset.top,d=u+i.proportions().width,p=c+i.proportions().height;switch(s){case"fit":return o>=u&&d>=h&&r>=c&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&d>h-e.helperProportions.width/2&&r+e.helperProportions.height/2>c&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,c,i.proportions().height)&&t(n,u,i.proportions().width);case"touch":return(r>=c&&p>=r||l>=c&&p>=l||c>r&&l>p)&&(o>=u&&d>=o||h>=u&&d>=h||u>o&&h>d);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>a&&o>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(a=t(l[s]),n=a.length-1;n>=0;n--)o=t.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);
$(document).ready(function () {
    var $body = $('body');
    var expiryDate = new Date('12/31/2999');    
    var size = Math.floor($('body').css('font-size').replace('px', ''));    

    //Append a class of cpTextResizeOn on body to get right styles for text resizer.
    $body.addClass('cpTextResizeOn');

    var factor = 1;
    if ($.cookie('sizeFactor') == null || $.cookie('sizeFactor') == '0') {
        //Do nothing.
    }
    else {
        factor = parseFloat($.cookie('sizeFactor'));
        size = size + factor;
        $body.css('font-size', '' + size + 'px');
}

    $('.cpTextResizer').find('a').click(function (e) {
        e.preventDefault();
        resizePageText(size, $(this));
    });
});

//Resize the text based on cookie value set.
function resizePageText(originalFontSize, $anchor) {
    var $body = $('body');
    var expiryDate = new Date('12/31/2999');
    var currentFontSize = $body.css('font-size');
    var bigOrSmall = $anchor.attr('id');
    var multiplier = 1;
    var fontSize;
    if (bigOrSmall == "makeTextSmaller") {        
        $.cookie('sizeFactor', parseInt($.cookie('sizeFactor') == null ? 0 : $.cookie('sizeFactor')) - 1, { path: '/', expires: expiryDate });
        fontSize = parseInt(currentFontSize.replace('px', '')) - 1;
    } else if (bigOrSmall == "makeTextBigger") {        
        $.cookie('sizeFactor', parseInt($.cookie('sizeFactor') == null ? 0 : $.cookie('sizeFactor')) + 1, { path: '/', expires: expiryDate });
        fontSize = parseInt(currentFontSize.replace('px', '')) +1;
    }    
     $body.css('font-size', '' + fontSize + 'px');

     if (!window.isRemoveSetHeights)
     	SetHeights();//Adjust heights of the containers.
};
var PopupBasedAuthentication = function () {
    var self = this;
    var popupWindow;
    var url;
    var paramSet;
    var jsCallback;

    self.requireLoggedIn = function (redirectUri, parameterSet) {
        if (redirectUri == null || redirectUri == '') {
        	redirectUri =  (window.location.pathname + window.location.search).replace(new RegExp('#\[^?]*', 'gi'), '');
        }
        self.setupParameters(redirectUri, parameterSet);
        self.checkLoggedIn();
    };

    self.setupParameters = function (redirectUri, parameterSet) {
        url = redirectUri;
        paramSet = parameterSet;
    };

    self.setupJsCallback = function (callback) {
    	jsCallback = callback;
    };

    self.checkLoggedIn = function () {
        $.ajax({
            url: '/Authentication/IsLoggedIn',
            type: 'GET',
            success: self.processCheckLoggedInResponse,
            async: false
        })
    };

    self.processCheckLoggedInResponse = function (loggedInResponse) {
    	if (loggedInResponse.loggedIn == true) {
    		if (jsCallback == null) {
    			window.location.href = url;
    		}
    		else {
    			jsCallback();
    		}
    	}
    	else if (loggedInResponse.UseIdentityServer) {
    		window.location.href = '/MyAccount?from=url&url=' + encodeURIComponent(url);
	    } else {
		    self.authenticate(loggedInResponse.domain);
	    }
    };

    self.authenticate = function (domain) {
        if (internetExplorerVersion == undefined) {
            self.setupEventToListenFromChildWindow();
        }

        self.disableScreen();

        var width = 500;
        var height = 420;

        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
		
        if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
			window.location = "/MyAccount?from=url&url=" + window.location.pathname + window.location.search;
			return;
		}

        popupWindow = window.open(
				'https://' + domain + '/Authentication/Popup?'
				+ 'redirectUri=' + encodeURIComponent(url)
				+ '&parameterSet=' + paramSet
				+ self.getUsernameFromCookie()
                + '&callingHost=' + window.location.protocol + '//' + window.location.hostname,
            'SignIn',
            'height=420,width=500,toolbar=no,menubar=no,left=' + left + ',top=' + top);

        self.checkBlockedPopup(popupWindow);
        self.attachOnCloseEvent(popupWindow);
    };

    self.getUsernameFromCookie = function () {
        var usernameCookieValue = cookieGet("CP");
        if (usernameCookieValue != null && usernameCookieValue.indexOf('uname=') == 0) {
            return '&prePopulatedUsername=' + usernameCookieValue.substring(6);
        } else {
            return '';
        }
    };

    self.attachOnCloseEvent = function (win) {
        var intervalId;
        function checkWindow() {
            if (win && win.closed) {
                window.clearInterval(intervalId);
                self.enableScreen();
            }
        }
        intervalId = window.setInterval(checkWindow, 500);
    };

    self.disableScreen = function () {
        $('#editItemBehavior_backgroundElement').show();
    };

    self.enableScreen = function () {
        $('#editItemBehavior_backgroundElement').hide();
    };

    self.checkBlockedPopup = function (popup) {
        setTimeout(function () {
        	if (!popup || popup.closed || popup.closed == 'undefined' || (popup.outerHeight && popup.outerHeight === 0)) {
                alert('Popup blocked');
                self.enableScreen();
            }
        }, 25);
    };

    self.setupEventToListenFromChildWindow = function () {
        window.addEventListener('message', function (msg) {
            if (msg.data.Type == 'Redirect') {
                self.handleResponseFromChild(msg.data);
            }
        }, true);
    };

    self.internetExplorerMessageHandling = function (data) {
        self.handleResponseFromChild(data);
    };

    self.handleResponseFromChild = function (data) {
        if (data.Type = 'Redirect') {
            //For IE, there is a race condition duw to which cookies dont get set, this is a workaround to give it enough time that the cookies can be set.
            if ($.browser.msie) {
                sleep(2);
            }
            window.location.href = data.Url.replace(/&amp;/g, '&');
        }
    };
};
/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */

var pressCount = 0; //this is used to track button presses for a specific table widget IE hack

shortcut = {
	'all_shortcuts':{},//All the shortcuts are stored in this array
	'add': function(shortcut_combination,callback,opt) {
		//Provide a set of default options
		var default_options = {
			'type':'keydown',
			'propagate':false,
			'disable_in_input':false,
			'target':document,
			'keycode':false
		}
		if(!opt) opt = default_options;
		else {
			for(var dfo in default_options) {
				if(typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
			}
		}

		var ele = opt.target;
		if(typeof opt.target == 'string') ele = document.getElementById(opt.target);
		var ths = this;
		shortcut_combination = shortcut_combination.toLowerCase();

		//The function to be called at keypress
		var func = function(e) {
			e = e || window.event;
			var character = null;
			
		    //this is an IE only hack that will fix double (<p>) vs single line (<br>) breaks in the table widget (<div contenteditable=true)
			if (detectIE() && e.keyCode == 13 && e.target.tagName == 'DIV' && e.target.contentEditable == "true") {
			    if ((pressCount) % 4 == 0) {
			        var node = document.createElement('br')
			        var positionNode = document.createTextNode('\u200B'); //used as a fake node to advance the cursor
			        node.appendChild(positionNode);
			        var selection = window.getSelection();
			        var range = selection.getRangeAt(0);
			        range.insertNode(node);
			        range.setStartAfter(node);
			        range.setEndAfter(node);
			        selection.removeAllRanges();
			        selection.addRange(range);
			    }
			    else {
			        e.preventDefault();
			    }

			    pressCount++;
			    return false;
			}

			if(opt['disable_in_input']) { //Don't enable shortcut keys in Input, Textarea fields
				var element;
				if(e.target) element=e.target;
				else if(e.srcElement) element=e.srcElement;
				if(element.nodeType==3) element=element.parentNode;

				if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
			}
	
			//Find Which key is pressed
			if (e.keyCode) code = e.keyCode;
			else if (e.which) code = e.which;
			if (typeof (code) !== "undefined")
			{
				character = String.fromCharCode(code).toLowerCase();
				if (code == 188) character = ","; //If the user presses , when the type is onkeydown
				if (code == 190) character = "."; //If the user presses , when the type is onkeydown
			}

			var keys = shortcut_combination.split("+");
			//Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
			var kp = 0;
			
			//Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
			var shift_nums = {
				"`":"~",
				"1":"!",
				"2":"@",
				"3":"#",
				"4":"$",
				"5":"%",
				"6":"^",
				"7":"&",
				"8":"*",
				"9":"(",
				"0":")",
				"-":"_",
				"=":"+",
				";":":",
				"'":"\"",
				",":"<",
				".":">",
				"/":"?",
				"\\":"|"
			}
			//Special Keys - and their codes
			var special_keys = {
				'esc':27,
				'escape':27,
				'tab':9,
				'space':32,
				'return':13,
				'enter':13,
				'backspace':8,
	
				'scrolllock':145,
				'scroll_lock':145,
				'scroll':145,
				'capslock':20,
				'caps_lock':20,
				'caps':20,
				'numlock':144,
				'num_lock':144,
				'num':144,
				
				'pause':19,
				'break':19,
				
				'insert':45,
				'home':36,
				'delete':46,
				'end':35,
				
				'pageup':33,
				'page_up':33,
				'pu':33,
	
				'pagedown':34,
				'page_down':34,
				'pd':34,
	
				'left':37,
				'up':38,
				'right':39,
				'down':40,
	
				'f1':112,
				'f2':113,
				'f3':114,
				'f4':115,
				'f5':116,
				'f6':117,
				'f7':118,
				'f8':119,
				'f9':120,
				'f10':121,
				'f11':122,
				'f12':123
			}
	
			var modifiers = { 
				shift: { wanted:false, pressed:false},
				ctrl : { wanted:false, pressed:false},
				alt  : { wanted:false, pressed:false},
				meta : { wanted:false, pressed:false}	//Meta is Mac specific
			};
                        
			if(e.ctrlKey)	modifiers.ctrl.pressed = true;
			if(e.shiftKey)	modifiers.shift.pressed = true;
			if(e.altKey)	modifiers.alt.pressed = true;
			if(e.metaKey)   modifiers.meta.pressed = true;
                        
			for(var i=0; k=keys[i],i<keys.length; i++) {
				//Modifiers
				if(k == 'ctrl' || k == 'control') {
					kp++;
					modifiers.ctrl.wanted = true;

				} else if(k == 'shift') {
					kp++;
					modifiers.shift.wanted = true;

				} else if(k == 'alt') {
					kp++;
					modifiers.alt.wanted = true;
				} else if(k == 'meta') {
					kp++;
					modifiers.meta.wanted = true;
				} else if(k.length > 1) { //If it is a special key
					if(special_keys[k] == code) kp++;
					
				} else if(opt['keycode']) {
					if(opt['keycode'] == code) kp++;

				} else { //The special keys did not match
					if(character == k) kp++;
					else {
						if(shift_nums[character] && e.shiftKey) { //Stupid Shift key bug created by using lowercase
							character = shift_nums[character]; 
							if(character == k) kp++;
						}
					}
				}
			}
			
			if(kp == keys.length && 
						modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
						modifiers.shift.pressed == modifiers.shift.wanted &&
						modifiers.alt.pressed == modifiers.alt.wanted &&
						modifiers.meta.pressed == modifiers.meta.wanted) {
				callback(e);
	
				if(!opt['propagate']) { //Stop the event
					//e.cancelBubble is supported by IE - this will kill the bubbling process.
					e.cancelBubble = true;
					e.returnValue = false;
	
					//e.stopPropagation works in Firefox.
					if (e.stopPropagation) {
						e.stopPropagation();
						e.preventDefault();
					}
					return false;
				}
			}
		}
		this.all_shortcuts[shortcut_combination] = {
			'callback':func, 
			'target':ele, 
			'event': opt['type']
		};
		//Attach the function with the event
		if(ele.addEventListener) ele.addEventListener(opt['type'], func, false);
		else if(ele.attachEvent) ele.attachEvent('on'+opt['type'], func);
		else ele['on'+opt['type']] = func;
	},

	//Remove the shortcut - just specify the shortcut and I will remove the binding
	'remove':function(shortcut_combination) {
		shortcut_combination = shortcut_combination.toLowerCase();
		var binding = this.all_shortcuts[shortcut_combination];
		delete(this.all_shortcuts[shortcut_combination])
		if(!binding) return;
		var type = binding['event'];
		var ele = binding['target'];
		var callback = binding['callback'];

		if(ele.detachEvent) ele.detachEvent('on'+type, callback);
		else if(ele.removeEventListener) ele.removeEventListener(type, callback, false);
		else ele['on'+type] = false;
	}
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
;
// http://www.codinghorror.com/blog/2006/02/standard-browser-keyboard-shortcuts.html
// NOTE: Ctrl+Shift+T is used by browsers to reopen the last closed tab
// NOTE: Ctrl+Shift+B is used by several browsers for various functions

//Toggle live edit
shortcut.add("Ctrl+Shift+L", function () {
	enableLiveEdit($.cookie("enableLiveEdit") === "false");
});

//Toggle set heights
shortcut.add("Ctrl+Shift+S", function () {
	window.Core.performSetHeights = !window.Core.performSetHeights;
});

//Toggle bundling
shortcut.add("Ctrl+Shift+A", function () {
	if (window.location.href.indexOf('bundle=on') > -1) {
		window.location.href = window.location.href.replace('bundle=on', 'bundle=off');
	} else if (window.location.href.indexOf('bundle=off') > -1) {
		window.location.href = window.location.href.replace('bundle=off', 'bundle=on');
	} else {
		var value = $('script[src="/Assets/Scripts/Shared.js"]').length == 0 ? 'off' : 'on';
		var connector = window.location.href.indexOf('?') > -1 ? '&' : '?';
		window.location.href = window.location.href + connector + 'bundle=' + value;
	}
});

//Toggle mobile
shortcut.add("Ctrl+Shift+M", function () {
	if (window.location.href.indexOf('mobile=on') > -1) {
		window.location.href = window.location.href.replace('mobile=on', 'mobile=off');
	} else if (window.location.href.indexOf('mobile=off') > -1) {
		window.location.href = window.location.href.replace('mobile=off', 'mobile=on');
	} else {
		var value = $('body').hasClass('mobile') ? 'off' : 'on';
		var connector = window.location.href.indexOf('?') > -1 ? '&' : '?';
		window.location.href = window.location.href + connector + 'mobile=' + value;
	}
});
;
/// <reference path="jquery-1.3.2-vsdoc.js">
var needRegisterH5Exts = true;
var isAlreadyInitialized = false;

// Only register the placeholder attachment code once, regardless of include count.
// File shouldn't be included more than once, but it could happen.
if (needRegisterH5Exts) {
	$(document).ready(function () {
		// Register placeholder shims, if needed.
		if (needPlaceHoldersShim() && !isAlreadyInitialized) {
		    isAlreadyInitialized = true;

		    // Not all INPUTs/TEXTAREAs are automatically hooked into this,
			// since we have older implementations of placeholders and
			// overridding them would cause wierd behavior. Plus, it
			// would not make sense to hook to image/checkbox/radio/etc.

			// The attribute cp5ph (CivicPlus HTML5 PlaceHolder) is automatically placed on inputs
			// with placeholders through the CPHtml5TextInput() HTML extension.
			registerPlaceHoldersShim($('input[cp5ph]'));
			registerPlaceHoldersShim($('textarea[cp5ph]'));
		}
	});

	needRegisterH5Exts = false;
}

// Registers placeholders on fields inside a specific context.
function registerPlaceHoldersShimOnContainer($container) {
	registerPlaceHoldersShim($('input[cp5ph]', $container));
	registerPlaceHoldersShim($('textarea[cp5ph]', $container));
}

// Unregisters placeholders on fields inside a specific context.
function unregisterPlaceHoldersShimOnContainer($container) {
	unregisterPlaceHolderShim($('input[cp5ph]', $container));
	unregisterPlaceHolderShim($('textarea[cp5ph]', $container));
}

// Determines if placeholder shim is necessary.
function needPlaceHoldersShim() {
	var tmpElem = document.createElement('input');
	return !('placeholder' in tmpElem);
}

// Added due to a bug with IE 10's IE 7 document standards mode.  The elem.getAttribute('placeholder')
// always returns NULL if IE 10 in IE 7 document standards mode, but elem.attributes['placeholder'] 
// works.
function getPlaceholder(elem) {
    var placeholder = elem.getAttribute('placeholder')
    if (placeholder == null) {
        placeholder = elem.attributes['placeholder'];
        if (placeholder == null)
            return '';
        else
            return placeholder.value;
    }
    return placeholder;
}

// Unregisters placeholder shim hooks. Destroys event hooks and spawned placeholder element.
function unregisterPlaceHolderShim($elemsToHack) {
	// Get hooks.
	var hookData = $elemsToHack.data('cp5ph_hooks');

	if (hookData) {
		// Destroy all the hooks present.
		var attachedMSIE = hookData.ie == null ? [] : hookData.ie;
		var attachedSTD = hookData.std == null ? [] : hookData.std;
		var attachedJQR = hookData.jqr == null ? [] : hookData.jqr;
		var spawnedPHs = hookData.spawns == null ? [] : hookData.spawns;
		
		// Remove MSIE style events.
		for (var i = 0, len = attachedMSIE.length; i < len; i++) {
			if (attachedMSIE[i].element)
				attachedMSIE[i].element.detachEvent(attachedMSIE[i].event, attachedMSIE[i].method);
		}

		// Remove DOM standard (STD) events.
		for (var i = 0, len = attachedSTD.length; i < len; i++) {
			if (attachedSTD[i].element)
				attachedSTD[i].element.removeEventListener(attachedSTD[i].event, attachedSTD[i].method, false);
		}

		// Remove jQuery bindings.
		for (var i = 0, len = attachedJQR.length; i < len; i++) {
			if (attachedJQR[i].instance)
				attachedJQR[i].instance.unbind(attachedJQR[i].event, attachedJQR[i].method);
		}
		
		// Destroy placeholder spawned elements.
		for (var i = 0, len = spawnedPHs.length; i < len; i++) {
			if (spawnedPHs[i]) {
				spawnedPHs[i].innerHTML = "";
				spawnedPHs[i].style.display = "none";

				if (spawnedPHs[i].parentNode)
					spawnedPHs[i].parentNode.removeChild(spawnedPHs[i]);
			}
		}

		// Destroy hook data now that hooks have been cleaned.
		$elemsToHack.removeData('cp5ph_hooks');
	}
}

// Registers placeholder shims for jQuery element group specified.
// The shim is by no means perfect (won't catch things like attribute selectors causing changes).

function registerPlaceHoldersShim($elemsToHack) {
	// Track standard, MSIE, and jQuery event assignments so they can be cancelled/destroyed.
	// Also track any spawned placeholder elements since they too need to be cleaned up.
	var attachedMSIE = [];
	var attachedSTD = [];
	var attachedJQR = [];
	var spawnedPHs = [];

	// Hooks programmatic changes to the value property for browsers without 
	// placeholder support. jQuery did not seem to have a way to do this.
	var hookProgrammaticValueChange = function(elem, callback) {
		// Note: Browsers are buggy at this time with DOMControlValueChanged.

		// Handle Firefox Prior to 4 (which has built-in placeholder support).
		if (elem.__defineSetter__) {
			var oldSetter = elem.__lookupSetter__('value');

			if (oldSetter) {
				elem.__defineSetter__('value', function(v) {
					oldSetter.call(elem, v);
					callback();
				});
			}
		}

		// Handle IE, even up to IE 9.
		if (elem.attachEvent) {
			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: callback });
			elem.attachEvent('onpropertychange', callback);
		}
	};

	var displayAttrMatch = new RegExp('^(class|value|className|placeholder|id|style|style\\..*)$');

	// Hooks display changes for an element (placeholder may need to update itself).
	var hookDisplayUpdates = function(elem, callback) {
		if (elem.addEventListener) {
			var domAttrModifiedHook = function(event) {
				// Prevents an infinite loop due to bubbling.
				event.stopPropagation();

				// Another necessary escape hatch.
				if (event.target.className == '_ph_shim')
					return;

				if (displayAttrMatch.test(event.attrName))
					callback(event.attrName);
			};

			attachedSTD.push({ element: elem, event: 'DOMAttrModified', method: domAttrModifiedHook });
			elem.addEventListener('DOMAttrModified', domAttrModifiedHook, false);
		} else if (elem.attachEvent) {
			var propertyChangeHook = function(event) {
				if (displayAttrMatch.test(event.propertyName))
					callback(event.propertyName);
			};

			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: propertyChangeHook });
			elem.attachEvent('onpropertychange', propertyChangeHook);
		}
	};

	// Hooks display changes for an element or its parents.
	var hookDisplayUpdatesAndParents = function(elem, callback) {
		var node = elem;

		while (node && node != document.body) {
			hookDisplayUpdates(node, callback);

			node = node.parentNode;
		}
	};

	// Debouncer used to prevent the same placeholder updates from ocuring over and over again within a short time (30 ms).
	var debouncer = [];
	var isBouncy = function(element) {
		var now = function() {
			return new Date().getTime();
		};
		var getIndexOf = function(elem) {
			for (var i = 0; i < debouncer.length; i++) {
				if (debouncer[i].object === element) {
					return i;
				}
			}
			return -1;
		};
		var index = getIndexOf(element);
		if (index === -1) {
			var obj = { object: element, recentlyOccured: true };
			debouncer.push(obj);
			setTimeout(function () {
				obj.recentlyOccured = false;
			}
			,30);
			return false;
		} else if (debouncer[index].recentlyOccured) {
			return true;
		} else {
			debouncer[index].recentlyOccured = true;
			setTimeout(function () {
				debouncer[index].recentlyOccured = false;
			}
			, 30);
			return false;
		}
	};

	// Updates position/style of pseudo-element that acts as placeholder message.
	// Called when necessary to ensure placeholder looks right (e.g. styles changed).
	var updatePlaceHolderMessageElement = function (phElem, elem) {
		var $elem = $(elem);
		if (isBouncy(elem)) {
			return;
		}

		// TODO: Does $elem.is() not work if the element is not in the document?
		if (elem.parentNode != null && !elem._focus && $elem.is(':visible'))
			phElem.style.display = (elem.value == '' || elem.value == null ? 'block' : 'none');
		else {
			phElem.style.display = 'none';
			return;
		}

		// Determine where placeholder element should go.
		var shouldParent = $elem.offsetParent().get(0);

		// Placeholder element cannot go inside table rows, use cell instead.
		if (shouldParent.tagName == 'TR') {
			shouldParent = elem;

			while (shouldParent.tagName != 'TD')
				shouldParent = shouldParent.parentNode;
		}

		var phChanged = (phElem.getAttribute('_ph_val') != getPlaceholder(elem));

		if ((shouldParent != phElem.parentNode) || phChanged) {
			// Remove from old parent (or existing, if phChanged).
			// Necessary for phChanged since element may be inside a table,
			// and trying to set innerHTML in a table with IE causes trouble.
			phElem.parentNode.removeChild(phElem);

			// If placeholder changed, update innerHTML.
			if (phChanged)
			    phElem.innerHTML = getPlaceholder(elem);

			// Ensure pseudo-placeholder is placed in same offsetParent
			// that element resides within (positioning), and add it to
			// the end (resolves some possible z-index issues).
			shouldParent.appendChild(phElem);
		}

		phElem.style.width = elem.clientWidth + 'px';
		phElem.style.height = elem.clientHeight + 'px';
		phElem.style.verticalAlign = elem.style.verticalAlign;
		phElem.style.lineHeight = elem.style.lineHeight;
		phElem.style.textAlign = elem.style.textAlign;
		phElem.style.fontSize = elem.style.fontSize;
		phElem.style.fontFamily = elem.style.fontFamily;

		var compStyle = (window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle);
		var elemPaddingLeft = parseInt(compStyle.paddingLeft.replace(/px$/g, ''), 10);
		var elemPaddingTop = parseInt(compStyle.paddingTop.replace(/px$/g, ''), 10);
		var pos = $elem.position();

		phElem.style.top = (pos.top + elem.clientTop + elemPaddingTop - 2) + 'px';
		phElem.style.left = (pos.left + elem.clientLeft + elemPaddingLeft) + 'px';
	}

	// Creates pseudo-element that acts as placeholder message.
	var createPlaceHolderMessageElement = function(elem) {
		// Create pseudo-placeholder that will appear over the top of the control.
		var phElem = document.createElement('div');

		// Attach to element for reference.
		elem._ph_shim = phElem;

		// Ensure pseudo-placeholder is placed in same offsetParent
		// that element resides within (positioning), and add it to
		// the end (resolves some possible z-index issues).
		var phValue = getPlaceholder(elem);
		phElem.innerHTML = (phValue == null ? '' : phValue);
		phElem.setAttribute('_ph_val', 'phValue');

		phElem.setAttribute('id', 'ph_' + elem.id);
		phElem.setAttribute('name', 'ph_' + elem.id);

		var shouldParent = $(elem).offsetParent().get(0);
		shouldParent.appendChild(phElem);

		// Configure the pseudo-placeholder.
		phElem.className = '_ph_shim';
		phElem.style.position = 'absolute';
		phElem.style.color = '#aaa'; // Placeholder Text Color.
		phElem.style.backgroundColor = 'transparent';
		phElem.style.cssFloat = 'none';

		// Update appearance.
		updatePlaceHolderMessageElement(phElem, elem);

		// Set up events for pseudo-placeholder and element.
		var $phElem = $(phElem);

		var mouseDownHook = function(event) {
			phElem.style.display = 'none';

			// Mouse down is passed to the input control
			// the placeholder is shown on top of.
			$(elem).trigger('mousedown', event);

			// Hack: IE needs setTimeout to actually do this properly for TEXTAREA.
			setTimeout(function() {
				try {
					elem.focus()
				} catch(err) {
					//When the text box is readonly then the above focus code would throw error
					//so that error is only handled only for Center, if u happen to get this error please do ur implemntation below
					//NOTE: here we have checked only for /formcenter and so if there is any other place which uses readonly textbox and trys to focus also will get the same alert - This is known bug 
					//for DEtails talk to Akila or Robin - AK

					//**Please note the use of lowercase here**
					var url = (location.href).toLowerCase();

					if (url.indexOf("/admin/formcenter") > -1) {
						alert('You have selected the field input. Please select the field label or instructions.');
					}
				}
			}, 15);
		};

		$phElem.mousedown(mouseDownHook);

		attachedJQR.push({ instance: $phElem, event: 'mousedown', method: mouseDownHook });

		return phElem;
	};

	// Registers a shim placeholder for an element (private helper method).
	var registerPlaceHolder = function (elem) {
		// Create jQuery wrapper.
		var $elem = $(elem);

		// Create placeholder.
		var phElem = createPlaceHolderMessageElement(elem);

		// Track creation.
		spawnedPHs.push(phElem);

		var focusHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = true;

			phElem.style.display = 'none';
		};

		var blurHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = false;

			if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
				phElem.style.display = 'block';
		};

		$elem.focus(focusHook);
		$elem.blur(blurHook);

		attachedJQR.push({ instance: $elem, event: 'focus', method: focusHook });
		attachedJQR.push({ instance: $elem, event: 'blur', method: blurHook });

		// Ensure placeholder state is updated when the value
		// is changed programmatically.
		hookProgrammaticValueChange(elem, function () {
			if (elem._focus)
				phElem.style.display = 'none';
			else {
				if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
					phElem.style.display = 'block';
				else
					phElem.style.display = 'none';
			}
		});

		// Ensure placeholder UI updates correctly when display changes are made.
		hookDisplayUpdatesAndParents(elem, function () {
			updatePlaceHolderMessageElement(phElem, elem);
		});
	};

	// Attach shim to each wrapped element passed to the method.
	$elemsToHack.each(function () {
		registerPlaceHolder(this);
	});

	// Keep track of hooks so they can be destroyed.
	$elemsToHack.data('cp5ph_hooks', {
		ie: attachedMSIE,
		std: attachedSTD,
		jqr: attachedJQR,
		spawns: spawnedPHs 
	});
}


// Unregisters placeholder shim hooks. Destroys event hooks and spawned placeholder element.
function unregisterPlaceHoldersShimForEach($elemsToHack) {
	// Get hooks.
	$elemsToHack.each(function () {
		var hookData = $(this).data('cp5ph_hooks');

		if (hookData) {
			// Destroy all the hooks present.
			var attachedMSIE = hookData.ie == null ? [] : hookData.ie;
			var attachedSTD = hookData.std == null ? [] : hookData.std;
			var attachedJQR = hookData.jqr == null ? [] : hookData.jqr;
			var spawnedPHs = hookData.spawns == null ? [] : hookData.spawns;

			// Remove MSIE style events.
			for (var i = 0, len = attachedMSIE.length; i < len; i++) {
				if (attachedMSIE[i].element)
					attachedMSIE[i].element.detachEvent(attachedMSIE[i].event, attachedMSIE[i].method);
			}

			// Remove DOM standard (STD) events.
			for (var i = 0, len = attachedSTD.length; i < len; i++) {
				if (attachedSTD[i].element)
					attachedSTD[i].element.removeEventListener(attachedSTD[i].event, attachedSTD[i].method, false);
			}

			// Remove jQuery bindings.
			for (var i = 0, len = attachedJQR.length; i < len; i++) {
				if (attachedJQR[i].instance)
					attachedJQR[i].instance.unbind(attachedJQR[i].event, attachedJQR[i].method);
			}

			// Destroy placeholder spawned elements.
			for (var i = 0, len = spawnedPHs.length; i < len; i++) {
				if (spawnedPHs[i]) {
					spawnedPHs[i].innerHTML = "";
					spawnedPHs[i].style.display = "none";

					if (spawnedPHs[i].parentNode)
						spawnedPHs[i].parentNode.removeChild(spawnedPHs[i]);
				}
			}

			// Destroy hook data now that hooks have been cleaned.
			$(this).removeData('cp5ph_hooks');
		}
	});
}

// Registers placeholder shims for jQuery element group specified.
// The shim is by no means perfect (won't catch things like attribute selectors causing changes).
function registerPlaceHoldersShimForEach($elemsToHack) {
	// Track standard, MSIE, and jQuery event assignments so they can be cancelled/destroyed.
	// Also track any spawned placeholder elements since they too need to be cleaned up.
	var attachedMSIE = [];
	var attachedSTD = [];
	var attachedJQR = [];
	var spawnedPHs = [];

	// Hooks programmatic changes to the value property for browsers without 
	// placeholder support. jQuery did not seem to have a way to do this.
	var hookProgrammaticValueChange = function (elem, callback) {
		// Note: Browsers are buggy at this time with DOMControlValueChanged.

		// Handle Firefox Prior to 4 (which has built-in placeholder support).
		if (elem.__defineSetter__) {
			var oldSetter = elem.__lookupSetter__('value');

			if (oldSetter) {
				elem.__defineSetter__('value', function (v) {
					oldSetter.call(elem, v);
					callback();
				});
			}
		}

		// Handle IE, even up to IE 9.
		if (elem.attachEvent) {
			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: callback });
			elem.attachEvent('onpropertychange', callback);
		}
	};

	var displayAttrMatch = new RegExp('^(class|value|className|placeholder|id|style|style\\..*)$');

	// Hooks display changes for an element (placeholder may need to update itself).
	var hookDisplayUpdates = function (elem, callback) {
		if (elem.addEventListener) {
			var domAttrModifiedHook = function (event) {
				// Prevents an infinite loop due to bubbling.
				event.stopPropagation();

				// Another necessary escape hatch.
				if (event.target.className == '_ph_shim')
					return;

				if (displayAttrMatch.test(event.attrName))
					callback(event.attrName);
			};

			attachedSTD.push({ element: elem, event: 'DOMAttrModified', method: domAttrModifiedHook });
			elem.addEventListener('DOMAttrModified', domAttrModifiedHook, false);
		}
		else if (elem.attachEvent) {
			var propertyChangeHook = function (event) {
				if (displayAttrMatch.test(event.propertyName))
					callback(event.propertyName);
			};

			attachedMSIE.push({ element: elem, event: 'onpropertychange', method: propertyChangeHook });
			elem.attachEvent('onpropertychange', propertyChangeHook);
		}
	};

	// Hooks display changes for an element or its parents.
	var hookDisplayUpdatesAndParents = function (elem, callback) {
		var node = elem;

		while (node && node != document.body) {
			hookDisplayUpdates(node, callback);

			node = node.parentNode;
		}
	};

	// Updates position/style of pseudo-element that acts as placeholder message.
	// Called when necessary to ensure placeholder looks right (e.g. styles changed).
	var updatePlaceHolderMessageElement = function (phElem, elem) {
		var $elem = $(elem);

		// TODO: Does $elem.is() not work if the element is not in the document?
		if (elem.parentNode != null && !elem._focus && $elem.is(':visible'))
			phElem.style.display = (elem.value == '' || elem.value == null ? 'block' : 'none');
		else {
			phElem.style.display = 'none';
			return;
		}

		// Determine where placeholder element should go.
		var shouldParent = $elem.offsetParent().get(0);

		// Placeholder element cannot go inside table rows, use cell instead.
		if (shouldParent.tagName == 'TR') {
			shouldParent = elem;

			while (shouldParent.tagName != 'TD')
				shouldParent = shouldParent.parentNode;
		}

		var phChanged = (phElem.getAttribute('_ph_val') != getPlaceholder(elem));

		if ((shouldParent != phElem.parentNode) || phChanged) {
			// Remove from old parent (or existing, if phChanged).
			// Necessary for phChanged since element may be inside a table,
			// and trying to set innerHTML in a table with IE causes trouble.
			phElem.parentNode.removeChild(phElem);

			// If placeholder changed, update innerHTML.
			if (phChanged)
				phElem.innerHTML = getPlaceholder(elem);

			// Ensure pseudo-placeholder is placed in same offsetParent
			// that element resides within (positioning), and add it to
			// the end (resolves some possible z-index issues).
			shouldParent.appendChild(phElem);
		}

		phElem.style.width = elem.clientWidth + 'px';
		phElem.style.height = elem.clientHeight + 'px';
		phElem.style.verticalAlign = elem.style.verticalAlign;
		phElem.style.lineHeight = elem.style.lineHeight;
		phElem.style.textAlign = elem.style.textAlign;
		phElem.style.fontSize = elem.style.fontSize;
		phElem.style.fontFamily = elem.style.fontFamily;

		var compStyle = (window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle);
		var elemPaddingLeft = parseInt(compStyle.paddingLeft.replace(/px$/g, ''), 10);
		var elemPaddingTop = parseInt(compStyle.paddingTop.replace(/px$/g, ''), 10);
		var pos = $elem.position();

		phElem.style.top = (pos.top + elem.clientTop + elemPaddingTop - 2) + 'px';
		phElem.style.left = (pos.left + elem.clientLeft + elemPaddingLeft) + 'px';
	}

	// Creates pseudo-element that acts as placeholder message.
	var createPlaceHolderMessageElement = function (elem) {
		// Create pseudo-placeholder that will appear over the top of the control.
		var phElem = document.createElement('div');

		// Attach to element for reference.
		elem._ph_shim = phElem;

		// Ensure pseudo-placeholder is placed in same offsetParent
		// that element resides within (positioning), and add it to
		// the end (resolves some possible z-index issues).
		var phValue = getPlaceholder(elem);
		phElem.innerHTML = (phValue == null ? '' : phValue);
		phElem.setAttribute('_ph_val', 'phValue');

		phElem.setAttribute('id', 'ph_' + elem.id);
		phElem.setAttribute('name', 'ph_' + elem.id);

		var shouldParent = $(elem).offsetParent().get(0);
		shouldParent.appendChild(phElem);

		// Configure the pseudo-placeholder.
		phElem.className = '_ph_shim';
		phElem.style.position = 'absolute';
		phElem.style.color = '#aaa'; // Placeholder Text Color.
		phElem.style.backgroundColor = 'transparent';
		phElem.style.cssFloat = 'none';

		// Update appearance.
		updatePlaceHolderMessageElement(phElem, elem);

		// Set up events for pseudo-placeholder and element.
		var $phElem = $(phElem);

		var mouseDownHook = function (event) {
			phElem.style.display = 'none';

			// Mouse down is passed to the input control
			// the placeholder is shown on top of.
			$(elem).trigger('mousedown', event);

			// Hack: IE needs setTimeout to actually do this properly for TEXTAREA.
			setTimeout(function () {
				try { elem.focus() } catch (err) {
					//When the text box is readonly then the above focus code would throw error
					//so that error is only handled only for Center, if u happen to get this error please do ur implemntation below
					//NOTE: here we have checked only for /formcenter and so if there is any other place which uses readonly textbox and trys to focus also will get the same alert - This is known bug 
					//for DEtails talk to Akila or Robin - AK

					//**Please note the use of lowercase here**
					var url = (location.href).toLowerCase();

					if (url.indexOf("/admin/formcenter") > -1) {
						alert('You have selected the field input. Please select the field label or instructions.');
					}
				}
			}, 15);
		};

		$phElem.mousedown(mouseDownHook);

		attachedJQR.push({ instance: $phElem, event: 'mousedown', method: mouseDownHook });

		return phElem;
	}

	// Registers a shim placeholder for an element (private helper method).
	var registerPlaceHolder = function (elem) {
		// Create jQuery wrapper.
		var $elem = $(elem);

		// Create placeholder.
		var phElem = createPlaceHolderMessageElement(elem);

		// Track creation.
		spawnedPHs.push(phElem);

		var focusHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = true;

			phElem.style.display = 'none';
		};

		var blurHook = function () {
			// Older firefox does not support document.activeElement.
			elem._focus = false;

			if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
				phElem.style.display = 'block';
		};

		$elem.focus(focusHook);
		$elem.blur(blurHook);

		attachedJQR.push({ instance: $elem, event: 'focus', method: focusHook });
		attachedJQR.push({ instance: $elem, event: 'blur', method: blurHook });

		// Ensure placeholder state is updated when the value
		// is changed programmatically.
		hookProgrammaticValueChange(elem, function () {
			if (elem._focus)
				phElem.style.display = 'none';
			else {
				if ((elem.value == '' || elem.value == null) && $(elem).is(':visible'))
					phElem.style.display = 'block';
				else
					phElem.style.display = 'none';
			}
		});

		// Ensure placeholder UI updates correctly when display changes are made.
		hookDisplayUpdatesAndParents(elem, function () {
			updatePlaceHolderMessageElement(phElem, elem);
		});
	};

	// Attach shim to each wrapped element passed to the method.
	$elemsToHack.each(function () {
		registerPlaceHolder(this);
	});

	// Keep track of hooks so they can be destroyed.
	$elemsToHack.each(function() {
		$(this).data('cp5ph_hooks', {
			ie: attachedMSIE,
			std: attachedSTD,
			jqr: attachedJQR,
			spawns: spawnedPHs
			});
	});
};

