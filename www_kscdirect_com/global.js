
function popup_window(url) {
	var newwin_opts = "width=750,height=600,toolbar=0,directories=0,menubar=0," +
					  "status=0,resizable=1,location=0,scrollbars=1,copyhistory=0";

	var popup_window = window.open(url, "ecomm_newwin", newwin_opts);
	popup_window.focus();
}

// Open a supplier pop-up window
function popup_supplier_window(vendor_code) {
	var url = "/get_vendor_info.php?vc="+ escape(vendor_code);
	var newwin_opts = "width=800,height=700,toolbar=0,directories=0,menubar=0,"
					  + "status=0,resizable=1,location=0,scrollbars=1,copyhistory=0"

	var popup_window = window.open(url, "ecomm_supplier_win", newwin_opts);
	if ( hasPopupBlocker(popup_window) ) {
		alert( "You must enable pop-up windows to use this feature." );
	}
	else {
		popup_window.focus();
	}
}


function parseDec(val, places) {
	var normalized = false;

	val = parseFloat(val);
	if (isNaN(val)) {
		return(false);
	}

	// See if we need to normalize number
	if (val < 0) {
		val = -(val);
		normalized = true;
	}

	var newnumber = Math.round(val*Math.pow(10,places))/Math.pow(10,places);

	if (normalized) {
	  newnumber = -(newnumber);
	}

	// Convert to string
	newnumber += '';

	var decimalIndex = newnumber.indexOf('.');
	if (decimalIndex == -1) {
		newnumber += '.0';
		decimalIndex = newnumber.indexOf('.');
	}

	// See if we need to pad string
	if (((newnumber.length - 1) - decimalIndex) < places) {
		newnumber += '0000000000000000';
	}

	// Split up the number
	integerPart = newnumber.slice(0, decimalIndex);
	decimalPart = newnumber.slice(decimalIndex + 1, newnumber.length);

	// Split up decimal part
	var decimalAlpha = decimalPart.slice(0, places);

	if (places != 0) {
		return(integerPart + '.' + decimalAlpha);
	}
	else {
		return(integerPart);
	}
}

function isEmail(s) {
	return new RegExp('^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$').test(s);
}

/* ======================================================================
	FUNCTION:	isNull

	INPUT:		val - the value to be tested

	RETURN:		true, if the value is null;
				false, otherwise.
====================================================================== */
function isNull( val ) {
	var isValid = false;

	if (val+"" == "null")
	isValid = true;

	return isValid;
}	// end isNull

/* ======================================================================
	FUNCTION:	isUndef

	INPUT:		val - the value to be tested

	RETURN:		true, if the value is undefined
				false, otherwise.
====================================================================== */
function isUndef( val ) {
	var isValid = false;

	if (val+"" == "undefined")
	isValid = true;

	return isValid;
}	// end isUndef

/* ======================================================================
	FUNCTION:	isBlank

	INPUT:		val - the value to be tested

	RETURN:		true, if the string is null, undefined or an empty string
				false, otherwise.

	CALLS:		isNull(), isUndef() which are defined elsewhere in the
				Script Library
====================================================================== */
function isBlank( str ) {
	var isValid = false;

	if ( isNull(str) || isUndef(str) || (str+"" == "") )
	isValid = true;

	return isValid;
}	// end isBlank

/* ======================================================================
	FUNCTION:	isInt

	INPUT:		numstr (string/number)	 - the string that will be tested
					to ensure that each character is a digit
				allowNegatives (boolean) - (optional) when true, allows
					numstr to be negative (contain a '-').	When false,
					any negative number or a string starting with a '-'
					will be considered invalid.

	RETURN:		true, if all characters in the string are a character from
					0-9, regardless of value for allowNegatives
				true, if allowNegatives is true and the string starts
					with a '-', and all other characters are 0-9.
				false, otherwise.
====================================================================== */
function isInt( numstr, allowNegatives ) {
	// Return immediately if an invalid value was passed in
	if (numstr+"" == "undefined" || numstr+"" == "null" || numstr+"" == "")
		return false;

	// Default allowNegatives to true when undefined or null
	if (allowNegatives+"" == "undefined" || allowNegatives+"" == "null")
		allowNegatives = true;

	var isValid = true;

	// convert to a string for performing string comparisons.
	numstr += "";

	// Loop through string and test each character. If any
	// character is not a number, return a false result.
	// Include special case for negative numbers (first char == '-').
	for (i = 0; i < numstr.length; i++) {
		if (!((numstr.charAt(i) >= "0") && (numstr.charAt(i) <= "9") || (numstr.charAt(i) == "-"))) {
			isValid = false;
			break;
		}
		else if ((numstr.charAt(i) == "-" && i != 0) || (numstr.charAt(i) == "-" && !allowNegatives)) {
			isValid = false;
			break;
		}
	} // END for

	return isValid;
}	// end isInt

function hasPopupBlocker(poppedWindow) {
	var result = false;

	try {
		if (typeof poppedWindow == 'undefined') {
			// Safari with popup blocker... leaves the popup window handle undefined
			result = true;
		}
		else if (poppedWindow == null) {
			// ... also Safari with popup blocker...
			result = true;
		}
		else if (poppedWindow && poppedWindow.closed) {
			// This happens if the user opens and closes the client window...
			// Confusing because the handle is still available, but it's in a "closed" state.
			// We're not saying that the window is not being blocked, we're just saying
			// that the window has been closed before the test could be run.
			result = false;
		}
		else if (poppedWindow && poppedWindow.name) {
			// This is the actual test. The client window should be fine.
			result = false;
		}
		else {
			// Else we'll assume the window is not OK
			result = true;
		}
	}
	catch (err) {
		//if (console) {
		//    console.warn("Could not access popup window", err);
		//}
	}

	return result;
}
