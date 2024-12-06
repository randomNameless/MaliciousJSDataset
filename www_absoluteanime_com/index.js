function setCookie(name,value,days) {
	if(!days && days!=0) days=28;
	Cookies.set(name, value, { expires: days, sameSite: 'Lax' }); //2018-12-13: changed 3rd parameter to an object
	return value;
}

function getCookie(name, defaultVal) {
	defaultVal = (typeof defaultVal == "undefined") ? '' : defaultVal;
	var value = Cookies.get(name);
	if (value === undefined) {
		return defaultVal;
	}
	if (typeof defaultVal == "number" && typeof value == "string") {
		return value.match(/^\s*[0-9]+/) ? parseInt(value) : defaultVal;
	}
	if (typeof defaultVal == "boolean" && typeof value == "string") {
		return value.match(/false|0/i) ? false : Boolean(value);
	}
	return (value);
}


function socialPopup(obj) {
	var url = '', w = 500, h = 400;
	if (typeof  obj == "string") {
		url = obj;
	}
	else if ($(obj).is('[class^="twitter"]')) {
		url = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent($('meta[property="og:title"]').attr('content') + ' ' + $('meta[property="og:url"]').attr('content'));
	}
	else if ($(obj).is('[class^="fb-"]') || $(obj).is('[class^="facebook-"]')) {
		url = 'https://www.facebook.com/sharer/sharer.php?app_id=257832210900002&kid_directed_site=0&sdk=joey&u=' + encodeURIComponent($('meta[property="og:url"]').attr('content')) + '&display=popup&ref=plugin&src=share_button';
		w = 640, h = 624;
	}
	if (url) {
		var popUp = window.open(url, 'popupwindow', 'scrollbars=yes,width=' + w + ',height=' + h);
		popUp.focus();
		return true
	}
	return false;
}