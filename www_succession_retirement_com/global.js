// global.js
function getElementById(id) {
	return $G.id(id);
}
function open_window(url) {
	mywin = new_win(url, 400, 335, 0, 0);
}
function new_window(url, w, h) {
	newwin = new_win(url, w, h);
}
function new_win(url, w, h, r, s) {
	w = w ? String(w) : '800';
	h = h ? String(h) : '600';
	r = r == 0 ? '0' : '1';
	s = s == 0 ? '0' : '1';
	return window.open(url, 'win', 'toolbar=0,location=0,directories=0,scrollbars=1,resizable=' + r + ',status=' + s + ',menubar=0,width=' + w + ',height=' + h);
}
var NewBox = null;
function infobox(url, w, h) {
	if (url) {
		try {
			w = w ? w : '600';
			h = h ? h : '450';
			var name = 'NewBox';
			var options = 'toolbar=0,directories=0,status=1,menubar=0,resizable=1,scrollbars=1,location=0,height=' + h + ',width=' + w;
			if (NewBox) {
				if (!NewBox.closed) {
					NewBox.close();
				}
			}
			NewBox = window.open(url, name, options);
			if (NewBox) {
				NewBox.focus();
			}
		}
		catch (e) {
			window.open(url);
		}
	}
}
function open_windowMainNav(url) {
	myMainNavwin = window.open(url, 'win', 'toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1,width=600,height=450,left=1,top=1');
}
function infoLink(theId, which, event) {
	var box = document.getElementById(theId);
	if (box) {
		box.parentNode.title = '';
		if (box.innerHTML.trim() != '') {
			var _box = document.getElementById('infoLinkBox');
			if (!_box) {
				_box = document.createElement('span');
				_box.style.display = 'none';
				_box.setAttribute('id', 'infoLinkBox');
				document.getElementsByTagName('body')[0].appendChild(_box);
			}
			_box.innerHTML = box.innerHTML;
			if (which == 'over') {
				_box.style.display = '';
				_box.style.position = 'absolute';
				_box.style.zIndex = '500';
				_box.style.backgroundColor = '#FFFDCC';
				_box.style.border = '1px solid #E5E3B0';
				_box.style.padding = '6px 8px';
				showBox(event, _box);
			}
			else {
				_box.style.display = 'none';
			}
		}
	}
}
function showBox(event, target) {
	var y = event.clientY;
	var scrollY = (window.pageYOffset) ? window.pageYOffset : document.body.scrollTop;
	target.style.top = y + scrollY + 15 + "px";
	var offset = $G.offset(target.id, true);
	var w = target.offsetWidth;
	var x = Number(event.clientX) - Math.round(w / 2 + offset[0]);
	target.style.left = x + "px";
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
function checkBodyWidth() {
	if ($G.isIE()) {
		$G.body().onresize = function () { shiftContainer() };
		shiftContainer();
	}
}
function shiftContainer() {
	if (document.body.clientWidth || document.documentElement.clientWidth) {
		if ((document.body.clientWidth) % 2 == 1 || (document.documentElement.clientWidth) % 2 == 1) {
			$G.id('container').style.left = '1px';
		}
		else {
			$G.id('container').style.left = '0';
		}
	}
}
var fixScreenShot = function () {
	var container = $G.id('container');
	var contentBody = $G.id('contentBody');
	if (container && contentBody) {
		var h = container.getHeight();
		if (h < 300) {
			var contentHeight = Number(contentBody.getHeight());
			var contentTop = Number(contentBody.getStyle('top').replace('px', ''));
			contentTop = contentTop ? contentTop : 0;
			contentHeight = contentHeight ? contentHeight : 300;
			container.style.height = (contentTop + contentHeight) + 'px';
			container.style.backgroundColor = 'transparent';
		}
	}
};


// $G - Emerald 'Get' Helper Class
// for use in core application functionality
// not recommended for use in custom development.
// to make functions accessible to designers,
// add overload to "Global" class
var $G = {
	navigation_menu: function () {
		return $G.id('navigation_menu');
	},
	isIE: function () {
		return navigator.appVersion.match('MSIE');
	},
	ieVersion: function () {
		var rv = -1; // Return value assumes failure.
		if ($G.isIE()) {
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(navigator.userAgent) != null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	},
	applicationRoot: '/',
	cookie: function (c_name) {
		c_name = c_name.trim();
		var value = '';
		var c = document.cookie.split(';');
		for (var i = 0; i < c.length; i++) {
			var _c = c[i];
			if (_c) {
				if (_c.split('=')[0].trim() == c_name) {
					if (_c.split('=')[1]) {
						value = _c.split('=')[1].trim();
					}
				}
			}
		}
		return value;
	},
	body: function () {
		var body = document.getElementsByTagName('body')[0];
		return body;
	},
	id: function (id) {
		if (typeof id == 'string') {
			return document.getElementById(id);
		}
		else {
			var e = id;
			return document.getElementById(e.id);
		}
	},
	cls: function (className, container) {
		container = container || $G.body();
		var elements = container.getElementsByTagName('*');
		var matchingElements = [];
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			if (String(' ' + element.className + ' ').match(' ' + className + ' ')) {
				matchingElements.push(element);
			}
		}
		return matchingElements;
	},
	hasClass: function (element, className) {
		return String(' ' + element.className + ' ').match(' ' + className + ' ');
	},
	offset: function (element, cumulative) {
		var top = 0;
		var left = 0;
		var rel = false;
		while (element.offsetParent && element.tagName.toLowerCase() != 'body' && rel == false) {
			top = top + element.offsetTop;
			left = left + element.offsetLeft;
			element = element.offsetParent;
			// if not getting cumulative offset, check to see if
			// next element is relatively positioned if so, stop
			if (!cumulative) {
				if ($G.isIE()) {
					rel = element.currentStyle.position == 'relative';
				}
				else {
					rel = window.getComputedStyle(element, null).position == 'relative';
				}
			}
		}
		return [left, top];
	},
	scrollX: function () {
		return (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	},
	scrollY: function () {
		return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	},
	windowWidth: function () {
		return $G.windowDimensions()[0];
	},
	windowHeight: function () {
		return $G.windowDimensions()[1];
	},
	windowDimensions: function () {
		var h1 = window.innerHeight;
		var w1 = window.innerWidth;
		var h2 = document.documentElement.clientHeight;
		var w2 = document.documentElement.clientWidth;
		var h3 = document.body.clientHeight;
		var w3 = document.body.clientWidth;
		if (typeof h1 != 'undefined') {
			return [w1, h1];
		}
		else if (typeof h2 != 'undefined' && h2 > 0) {
			return [w2, h2];
		}
		else {
			return [w3, h3];
		}
	},
	onloads: [],
	onloads_fired: false,
	onload: function (callback) {
		$G.onloads.push(callback);
		var fire_onloads = function () {
			if (!$G.onloads_fired) {
				var onloads = $G.onloads;
				for (onload_i = 0; onload_i < onloads.length; onload_i++) {
					onloads[onload_i]();
				}
				$G.onloads_fired = true;
			}
		}

		var ie_onload = false;
		/*@cc_on
		@if (@_win32 || @_win64)
		// IE
		ie_onload = true;
		document.write('<script id="ieScriptLoad" defer src="//:"><\/script>');
		$G.id('ieScriptLoad').onreadystatechange = function () {
			if (this.readyState == 'complete') {
				setTimeout(function () {
					fire_onloads();
				}, 250);
			}
		};
		@end@*/
		if (!ie_onload) {
			if (document.addEventListener) {
				//Mozilla, Chrome, Opera
				document.addEventListener('DOMContentLoaded', function () { fire_onloads() }, false);
			}
			else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
				//Safari, iCab, Konqueror
				var DOMLoadTimer = setInterval(function () {
					if (/loaded|complete/i.test(document.readyState)) {
						fire_onloads();
						clearInterval(DOMLoadTimer);
					}
				}, 10);
			}
			else {// other
				window.onload = function () { fire_onloads() };
			}
		}
	}
};

// $S - Emerald 'Set' Helper Class
// for use in core application functionality
// not recommended for use in custom development.
// to make functions accessible to designers,
// add overload to "Global" class
var $S = {
	cookie: function (c_name, c_value, c_exp) {
		if (c_name) {
			if (c_name.trim() != '') {
				var c_exp_str = c_exp ? '; expires=' + c_exp : '';
				document.cookie = c_name + '=' + c_value + c_exp_str;
			}
		}
	},
	opacity: function (element, opacity) {
		if (element) {
			if ($G.isIE()) {
				opacity = Math.round(Math.round(opacity) * 10);
				opacity = Math.max(0, opacity);
				opacity = Math.min(100, opacity);
				if (opacity > 90) {
					element.style.filter = "";
				}
				else {
					element.style.filter = 'alpha(opacity=' + opacity + ')';
				}
			}
			else {
				opacity = opacity > 9 ? 10 : opacity;
				opacity = opacity < 1 ? 0 : opacity / 10;
				element.style.opacity = opacity;
			}
		}
	}
};

var Global = {
	applicationRoot: '/',
	alert: function (options) {
		EmeraldModal.alert(options);
	},
	confirm: function (options) {
		EmeraldModal.confirm(options);
	},
	imageInModal: function (src, w, h) {
		w = typeof w == 'number' ? w : 800;
		h = typeof h == 'number' ? h + 15 : 600;
		var options = { message: src, width: w, height: h };
		EmeraldModal.image(options);
	},
	openModalWindow: function (url, w, h, f, c) {
		var d_w = typeof modal_width != 'undefined' ? modal_width : 800;
		var d_h = typeof modal_height != 'undefined' ? modal_height : 600;
		if (url) {
			w = typeof w == 'number' ? w : d_w;
			h = typeof h == 'number' ? h : d_h;
			f = f == 0 ? 0 : 1;
			c = c ? c : 'white';
			if ($G.windowWidth() < w + 40 || $G.windowHeight() < h + 40) {
				// modal width doesn't fit
				// open in new window
				window.open(url + String(url.match('http') ? '' : '&intendedmodal=1'));
			}
			else {
				// modal width fits
				// open modal
				EmeraldModal.info({
					message: url,
					width: w,
					height: h,
					fade: f,
					color: c,
					iframe: true,
					controls: ['close']
				});
			}
		}
	},
	openNewTab: function (url) {
		window.open(url,'_blank');
	},
	openSmallWindow: function (url, w, h) {
		if (url) {
			w = typeof w == 'number' ? w : 800;
			h = typeof h == 'number' ? h : 600;
			if ($G.windowWidth() < w + 40 || $G.windowHeight() < h + 40) {
				// modal width doesn't fit
				// open in new window
				window.open(url);
			}
			else {
				// modal width fits
				// open popup
				window.open(url, 'small_win', 'width=' + w + ',height=' + h + ',toolbar=0,status=0,scrollbars=1');
			}
		}
	},
	onload: function (callback) {
		$G.onload(callback);
	},
	bookmarkPage: function () {
		if (window.sidebar) { // FF
			window.sidebar.addPanel(document.title, window.location.href, "");
		}
		else if (window.external) { // IE
			window.external.AddFavorite(window.location.href, document.title);
		}
	},
	getMap: function (srcID) {
		var e = $G.id(srcID);
		if (e) {
			var addressStr = e.innerHTML.replace(' ', '+');
			var urlStr = 'http://www.google.com/maps?f=q&hl=en&geocode=&q=' + addressStr + '&ie=UTF8&z=16&iwloc=addr&om=1'
			window.open(urlStr);
		}
		else {
			alert('error: no address available');
		}
	},
	OpenFlipbookModal: function (element) {
		if (element) {
			if (element.attr('href') != undefined || element.attr('href') != '') {
				EmeraldModal.info({
					message: element.attr('href'),
					width: 727,
					height: 500,
					controls: ['close'],
					iframe: true,
					color: black
				});
			}
		}
	},
	GetParameterStringValue: function (string, param) {
		var arrScript = string.split('?');
		var value;
		if (arrScript.length > 1) {
			var arrQuerystringParameters = arrScript[1].split('&');
			for (i = 0; i < arrQuerystringParameters.length; i++) {
				var arrParams = arrQuerystringParameters[i].split('=');
				if (arrParams[0] == param)
					value = arrParams[1];
			}
		}
		return value;
	},
	GetQuerystringValue: function (param) {
		var arrUrl = Global.url().split('/');
		var urlHash = Global.urlHash();
		var string = arrUrl[arrUrl.length - 1].replace(urlHash, '');
		return Global.GetParameterStringValue(string, param);
	},
	SetQuerystringValue: function (param, value, url) {
		var arrUrl = Global.url(url).split('/');
		var found = 0;
		var arrScript = arrUrl[arrUrl.length - 1].split('?');
		if (arrScript.length > 1) {
			var arrQuerystringParameters = arrScript[1].split('&');
			for (i = 0; i < arrQuerystringParameters.length; i++) {
				var arrParams = arrQuerystringParameters[i].split('=');
				if (arrParams[0] == param) {
					arrParams[1] = value;
					arrQuerystringParameters[i] = arrParams.join('=');
					found = 1;
				}
			}
		}
		if (found == 1) {
			return arrScript[0] + '?' + arrQuerystringParameters.join('&');
		}
		else {
			if (arrScript.length > 1)
				return arrScript.join('?') + '&' + param + '=' + value;
			else
				return arrScript[0] + '?' + param + '=' + value;
		}
	},
	DeleteQuerystringValue: function (param, url) {
		var arrUrl = Global.url(url).split('/');
		var found = 0;
		var arrScript = arrUrl[arrUrl.length - 1].split('?');
		if (arrScript.length > 1) {
			var arrQuerystringParameters = arrScript[1].split('&');
			var arrNewQuerystringParameters = new Array();
			var j = 0;
			for (i = 0; i < arrQuerystringParameters.length; i++) {
				var arrParams = arrQuerystringParameters[i].split('=');
				if (arrParams[0] != param) {
					arrNewQuerystringParameters[j] = arrQuerystringParameters[i];
					j++;
				}
			}
			return arrScript[0] + '?' + arrNewQuerystringParameters.join('&');
		}
		else {
			return arrScript[0];
		}
	},
	GetScript: function () {
		var url = location.href;
		var arrUrl = url.split('/');
		var arrScript = arrUrl[arrUrl.length - 1].split('?');
		if (arrScript[0] != '')
			return arrScript[0];
		else
			return 'index.aspx';
	},
	url: function (url) {
		if (!url)
			url = location.href;
		return url;
	},
	urlHash: function (urlHash) {
		if (!urlHash)
			urlHash = location.hash;
		return urlHash;
	},
	toggleDiv: function (element) {
		if (element.parentNode.parentNode.className == 'open') {
			element.parentNode.parentNode.className = 'closed';
		}
		else {
			element.parentNode.parentNode.className = 'open';
		}
	},
	target_blank: function (element) {
		var loc = element.attr('href').trim();
		if (loc != '' && loc != '#' && !loc.match('javascript:')) {
			window.open(loc);
			return false;
		}
		else {
			return true;
		}
	},
	setLanguage: function (language) {
		var body = $G.body();
		body.className = body.className.replace(/english|spanish/g, '');
		body.className += ' ' + language;
		$S.cookie('language', language);
	},
	checkLanguage: function () {
		var language = $G.cookie('language');
		if (language) {
			if (language.trim() != '') {
				Global.setLanguage(language);
			}
		}
	},
	leavingWebsite: function (element) {
		var str = typeof leavingText != 'undefined' ? leavingText.text : '';
		var $this = element;
		if (str != '') {
			EmeraldModal.confirm({
				message: str,
				width: 400,
				height: 325,
				controls: ['close'],
				okLabel: 'Proceed',
				okCallback: function () {
					if (element.attr('target') == '_blank' || element.is('.target_blank')) {
						EmeraldModal.closeAll();
						window.open(element.attr('href'));
					}
					else {
						document.location = element.attr('href');
					}
				}
			});
			var offset = $('#EmeraldModal').offset();
			$('html, body').animate({
					scrollTop: offset.top,
			});
			return false;
		}
		else {
			if ($this.attr('target') == '_blank' || $this.hasClass('target_blank')) {
				window.open($this.attr('href'));
				return false;
			}
			else {
				window.location.href = $this.attr('href');
				return true;
			}
		}
	},
	clickThroughDisclaimer: function (e, url) {
		EmeraldModal.getModal({
			message: url,
			width: 500,
			height: 320,
			iframe: true,
			okCallback: function () {
				location = e.href;
			}
		}, 'alert', ['ok']);
	},
	showContentNavList: function (e) {
		if (e) {
			var e_parent = e.parentNode;
			if (e_parent) {
				var current_lis = $G.cls('current', e_parent.parentNode);
				for (var i = 0; i < current_lis.length; i++) {
					current_lis[i].className = String(' ' + current_lis[i].className + ' ').replace(/ current /g, '');
				}
				e_parent.className += ' current';
				// scroll window to the top
				// of the just clicked button
				if ($G.windowWidth() < 500 || $G.windowHeight < 500) {
					var offset = $G.offset(e_parent, true);
					scrollTo(0, offset[1]);
				}
				var n_list = e_parent.getElementsByTagName('ul')[0];
				if (n_list) {
					var contentElement = $G.id('content');
					if (contentElement) {
						var c_list = n_list.cloneNode(true);
						var c_h1 = document.createElement('h1');
						c_h1.innerHTML = e.innerHTML;
						c_list.className = c_list.className + ' content_list_plain';
						var content_children = contentElement.getElementsByTagName('*');
						for (i = 0; i < content_children.length; i++) {
							var content_child = content_children[i];
							content_child.style.display = 'none';
						}
						contentElement.appendChild(c_h1);
						contentElement.appendChild(c_list);
						if (typeof initGlobalEventHandlers != 'undefined') {
							initGlobalEventHandlers();
						}
					}
				}
			}	
		}
	},
	matchHeight: function (elements) {
		var $elements = elements;
		var maxHeight = Math.max.apply(null, $elements.map(function (element)	{
			return $(this).height();
		}).get());

		$elements.css('height',maxHeight);
	},
	isElementInViewport: function(el){
		let rect = el.getBoundingClientRect();
		return (rect.top>-1 && rect.bottom <= window.innerHeight);
	}
};         // end Global

var initGlobalEventHandlers = function () {
	if (typeof window.handlersSet === 'boolean' && window.handlersSet)
		return false

	if (window.handlersSet != true) {
		window.handlersSet = true
		jQuery('.dynamic_list').on('click touchend', function () {
			if (jQuery('body').hasClass('navON')) {
				return false;
			} else {
				if (!$(this).parent().hasClass('slicknav_item')) {
					Global.showContentNavList(this);
				}
			}
		});

		jQuery('a').on('click touchend', function (event) {
			var $a = jQuery(this);
			if ($a.attr('href') != undefined) {
				try {
					if ($a.hasClass('leavingWebsite') && !( jQuery('body').hasClass('editON') || jQuery('body').hasClass('modularON')) ) {
						event.preventDefault();
						return Global.leavingWebsite(jQuery(this));
					}
					else if ($a.hasClass('target_blank_small')) {
						event.preventDefault();
						return Global.openSmallWindow(jQuery(this).attr('href'));
					}
					else if ($a.hasClass('target_blank')) {
						event.preventDefault();
						return Global.target_blank(jQuery(this));
					}
					else {
						return true;
					}
				} catch (e) {
					return true;
				}
			}
		});

		jQuery('.flipbookModal').on('click touchend', function () {
			Global.OpenFlipbookModal(jQuery(this));
			return false;
		});

		jQuery('.toggleDiv').on('click touchend', function () {
			jQuery(this).attr('title','expand/collapse');
			Global.toggleDiv(this);
		});

		jQuery('.infoLinks').on({
			mouseenter: function () {
				infoLink('domain_departure_text', 'over', event);
			},
			mouseout: function () {
				infoLink('domain_departure_text', 'out', event);
			}
		});

		jQuery(window).resize(function(){
			flipbooksIsDesktop();
		});

		if (jQuery('body').is('.home,.index')) {
			if (jQuery('.home_page_image').length > 0) {

				// SET DATA ATTR FOR INITIAL FLOAT OF HOME PAGE IMAGE
				var initFloat = jQuery('.home_page_image').css('float');
				jQuery('.home_page_image').data('initfloat',initFloat);

				jQuery(window).resize(function() { 
					var imageW = $('.home_page_image').width(); 
					var windowW = $(window).width(); 
					var relativePercentage = (imageW/windowW)*100; 

					if(relativePercentage >= 70.0 && relativePercentage <= 100.0){
						jQuery('.home_page_image').css('float','none');
					} 
					else{
						jQuery('.home_page_image').css('float',jQuery(this).data('initfloat')); 
					} 
				}).resize(); 

			}
		}
	}

	var fol =  document.querySelector('.focus-on-load')
	if (fol)
		fol.focus()

	var _sticky = document.querySelectorAll('.bas-sticky')
	_sticky.forEach(function(el){
		let h = el.offsetHeight
		if (el.classList.contains('bas-sticky-bottom')){
			document.body.style.marginBottom = h+'px'
		}
		else if (el.classList.contains('bas-sticky-top')){
			document.body.style.marginTop = h+'px'
		}
	})

	try {
		var evs = document.querySelectorAll('.custEmbedVideo')
		evs.forEach(function(el){
			const p = el.parentElement,
						pd = p.dataset,
						root = location.href.includes('uat') && !location.href.includes('preview') ? '/uat' : '',
						type = pd.url.includes('.mp4')?'video/mp4':'video/webm',
						autoplay = pd.autostart === 'true'?'autoplay muted="true"':'',
						poster = pd.image != ''?`poster="${root+pd.image}"`:'',
						_v_ = `<video src="${root+pd.url}" type="${type}" controls ${autoplay} ${poster} class="generated-video-element" style="width:100%;"></video>`

			el.style.maxWidth = pd.width
			if (pd.alignment == 'Center'){
				el.style.margin = 'auto'
				p.style.removeProperty('margin')
				p.style.removeProperty('padding-bottom')
			}
			el.insertAdjacentHTML('beforeend', _v_)
		})

	}
	catch(e){
		console.error(e)
	}
	
}

var fsize = function (size) {
	var body = $G.body();
	if (body) {
		body.className = body.className.replace(/defaultText|mediumText|largeText/g, '');
		body.className += String(' ' + size + 'Text');
	}
	
	try { document.cookie = 'fontSize=' + size + ';path=' + Global.applicationRoot } catch (e) { /*do nothing*/ }
};

var fsize_init = function () {
	// font resize based on cookie
	try {
		var fontSize = $G.cookie('fontSize');
		if (fontSize) {
			fsize(fontSize);
		}
	}
	catch (e) {
		// do nothing
	}
};

function checkEmailForResize() {
/*	function checks to see if the sidebar email address is wrapping. If it is, it loops through and reduces the font size until it no longer wraps.
	If the font size reaches 12px and is still wrapping, font is set back to it's initial value and wrapping is left in.*/
	
	var emailElementList = document.querySelectorAll('#sidebar .email a');
	
	if(emailElementList){
		for(var i = 0; i<emailElementList.length; i++){
			var emailElement = emailElementList[i]
			var parentContainer = emailElement.parentNode;
			
			emailElement.style.wordWrap = 'normal';	
			emailElement.style.display = 'block';	

			var containerWidth = parentContainer.clientWidth;
			var emailWidth = parentContainer.scrollWidth;

			var currentFontSize = window.getComputedStyle(emailElement).fontSize;
			var initialFontSize = currentFontSize;

			while(containerWidth < emailWidth){
				emailElement.style.fontSize = reduceFontSize1(currentFontSize);
				emailWidth = parentContainer.scrollWidth;
				currentFontSize = window.getComputedStyle(emailElement).fontSize;
				if(currentFontSize === '11px'){
					emailElement.style.wordWrap = 'break-word';
					emailElement.style.fontSize = initialFontSize;
					break
				}
			}
		}
	}
}

function reduceFontSize1 (currentFontSize) {
	//function takes a font size input in px, reduces it by 1, and returns the value.
	var newFontSize;
	if(currentFontSize.search('px') > 0){
		newFontSize = (currentFontSize.slice(0, currentFontSize.search('px')) - 1) + 'px';
/*	Logic for rems and ems. Currently uneccessary as font is handled in px.
	Logic would need to be reworked to change font size by an appropriate amount for rem or em (1 point difference too much for these types)*/
	// }else if(currentFontSize.search('rem') > 0){
	// 	newFontSize = (currentFontSize.slice(0, currentFontSize.search('rem')) - 1) + 'rem';
	// }else if(currentFontSize.search('em') > 0){
	// 	newFontSize = (currentFontSize.slice(0, currentFontSize.search('em')) - 1) + 'em';
	}
	return newFontSize;
}

function addFBDesktopLink(e){
	e.preventDefault();
	var _newURL;
	if(this.hasAttributes()){
		//desktop link is set on the element in a data attribute
		for(var _j = 0, _attributes = this.attributes; _j < _attributes.length; _j++ ) {
			if (_attributes[_j].name === 'data-link'){
				_newURL = _attributes[_j].value;
			}
		}
	}
	if(_newURL){
		window.open(_newURL);
	}
}

// determines if the page is being viewed in a window wider than 1024. If so, changes flipbook links to show the flipbook in a standard webpage
function flipbooksIsDesktop() {

	// check width of window. 1024 width based on ipad pro size
	var _windowWidth = window.innerWidth;
		//select all flipbook links on the page
		var flipbookLinks = document.querySelectorAll('.flipbook a');
		if(flipbookLinks) {
			for(var _i = 0; _i < flipbookLinks.length; _i++) {
				flipbookLinks[_i].removeEventListener('click', addFBDesktopLink)
			}
			if(_windowWidth < 1024)
			// loop through all the links and change the click event to the new link
			for(var _i = 0; _i < flipbookLinks.length; _i++) {
				flipbookLinks[_i].addEventListener('click', addFBDesktopLink)
			}
		}
}


$G.onload(function () {
	if (location.href.match('/uat/')) {
		$G.applicationRoot = '/uat/';
	} else if (location.href.match('/preview/')) {
		Global.applicationRoot = '/preview/'
	}
	initGlobalEventHandlers();
	fsize_init();
	checkEmailForResize();
	flipbooksIsDesktop();
});