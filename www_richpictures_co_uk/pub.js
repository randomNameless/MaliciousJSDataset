// ### utilities ###

function getResponsiveState() {
	try {
		return window.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/"/g,'');
	} catch (e) {
		var wWidth = ps$(window).width(),
			responses = ['handhelds','tablets','medium-screens','wide-screens','mega-screens'],
			stops = [568,1024,1365,1800],
			isLtIe9 = $('body').hasClass('lt-ie9'); //Set to a global signifier?
		if(wWidth<=stops[0] && !isLtIe9) {
			return responses[0];
		} else if (wWidth<stops[1] || isLtIe9) {
			return responses[1];
		} else if (wWidth<=stops[2] && !isLtIe9) {
			return responses[2];
		} else if (wWidth<=stops[3] && !isLtIe9) {
			return responses[3];
		} else {
			return responses[4];
		}
	}
}

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
function debounce(func, threshold, execAsap) {
	var timeout;

	return function debounced () {
		var obj = this, args = arguments;
		function delayed () {
			if (!execAsap)
			func.apply(obj, args);
			timeout = null;
		};

		if (timeout)
			clearTimeout(timeout);
		else if (execAsap)
			func.apply(obj, args);

		timeout = setTimeout(delayed, threshold || 100);
	};
}

// ### misc old stuff ###

function catKeywords(fObj)
{
	var kw = fObj.KW;
	var dsc = '';

	if ((getElementLength(kw) == 1) && kw.checked) {
		dsc += kw.value;
	} else {
		for (i = 0; i < kw.length; i++) {
			if (kw[i].checked)
				dsc += kw[i].value + ' ';
		}
	}

	if (dsc == '') {
		alert("You must select at least one keyword to perform a search.");
		return false;
	}

	fObj.I_DSC.value = dsc;
	return true;
}

function imgUpdShow(id)
{
	if (empty(id)) return;

	ps$.ajax({
		url: '/ajax/imgUpdShow/' + id,
		type: 'GET'
	});
}

/*
	duplicated from imgUpdShow
	renamed to avoid race condition with identically named func
	in imgShow.js
*/
function imgUpdShow2(id)
{
        if (empty(id)) return;

        ps$.ajax({
                url: '/ajax/imgUpdShow/' + id,
                type: 'GET'
        });
}

var IMG_SHOW_LBX = null;

function lightboxAdd(id)
{
	try {
		if (!BS.utl.dom.isLoaded) {
			alert("Please wait until the page has finished loading.");
			return
		}
		if (!IMG_SHOW_LBX)
			IMG_SHOW_LBX = BS.utl.mm.oNew(PS.com.Lightbox.AddPrompt, true);

		IMG_SHOW_LBX.show(true, id);
	} catch (e) { alert(e); }
}

// ######## thmOpt ########

var	THM_OPT_COOKIE_NAME = 'thmOpt';
var 	THM_OPT_PPG, THM_OPT_F_PREVIEW;

function thmOptCookieSet(ppg, opt)
{
	var t = [];
	t[0] = (!empty(ppg)) ? ppg : '0';
	t[1] = (!empty(opt)) ? opt : '0';

	var exp = new Date();
	exp.setDate(exp.getDate()+30);
	document.cookie = THM_OPT_COOKIE_NAME + '=' + escape(t.join('|')) + '; expires=' + exp.toGMTString() + '; path=/';
}

function thmOptSetPpg(ppg, url)
{
	thmOptCookieSet(ppg);
	location = url;
}

// ######## PS.com.ThmOptBalloon ########

PS.com.ThmOptBalloon = function (qry)
{
	this.mm = new BS.com.Delete;
	var mm = this.mm;
	this.gvStr = BS.utl.mkGvStr(this);
	this.qry = qry;

	this.balloon = this.mm.oNew(PS.com.Balloon);
	this.mask = mm.oNew(BS.com.Mask, null, 0.1, '5999');
	_bsEvt.attach(this.mask.obj, 'click', this._clickCB, this);

	this.balloon.setHeader('<h3>Display Options</h3>');
	this.form = mm.domNew(this.balloon.content, 'form', 'thmOptForm');

	var t, div;
	div = mm.domNew(this.form, 'div', 'thmOptBlock');
	div.innerHTML = '<b>Thumbnails per page:</b>';

	t = mm.oNew(BS.com.Form.Select, div, 'ppg');
	t.load(this.PPG_A);

	t = '<div class="thmOptFooter">' +
		'<a href="javascript:' + this.gvStr + '._submit();">' +
		'<img src="/img/button/save.gif" border="0" width="68" height="23" alt="Save Settings"></a>' +
		'<a href="javascript:' + this.gvStr + '.show(0);">' +
		'<img src="/img/button/close.gif" border="0" width="68" height="23" alt="Close"></a>' +
		'</div>';
	this.balloon.setFooter(t);

	this.form.onsubmit = function () { return false; };
};

PS.com.ThmOptBalloon.prototype = {
	PPG_A:	[
		[10,'10 Images'],
		[25,'25 Images'],
		[50,'50 Images'],
		[100,'100 Images']
	],

	_delete: function ()
	{
		_bsEvt.detach(this.mask.obj, 'click', this._clickCB);
		this.mm._delete();
	},

	_clickCB: function (type, data, args)
	{
		this.show(false);
	},

	_cookieGet: function ()
	{
		var t = _bsCookie.get(THM_OPT_COOKIE_NAME);
		if (!empty(t)) return t.split('|');
	},

	_submit: function ()
	{
		var p = _bsForm.toArray(this.form);
		//thmOptCookieSet(p.ppg, p.F_PREVIEW);
		thmOptCookieSet(p.ppg, 1);
		location = this.qry;
	},

	show: function (f, obj)
	{
		if (f) {
			var t = this._cookieGet();
			var ppg, f_preview;
			ppg = (t && !empty(t[0])) ? t[0] : THM_OPT_PPG;
			//f_preview = (t && !empty(t[1])) ? t[1] : THM_OPT_F_PREVIEW;

			_bsForm.setValue(this.form.ppg, ppg);
			//this.form.F_PREVIEW.checked = parseInt(f_preview);
		}

		this.mask.show(f);
		this.balloon.show(f, obj);
	}
};

var _thmOptBalloon = null;

function thmOptBalloon (qry, obj)
{
	if (!_thmOptBalloon)
		_thmOptBalloon = _bsMm.oNew(PS.com.ThmOptBalloon, qry);

	// a3 doesn't want the tail
	obj = null;

	_thmOptBalloon.show(true, obj);
};

// ######## Logo widget ########

var $_logo, _logoConfig;

function logoType() {
	var logoType = _logoConfig.type;
	if (logoType !== 'text') {
		if ((Array.isArray(_logoConfig.image) && !_logoConfig.image.length) ||
		 		(Array.isArray(_logoConfig.asset) && !_logoConfig.asset.length)) {
			logoType = 'text';
		}
	}
	return logoType;
}

function logoInit (cfg) {
	_logoConfig = cfg;
	$_logo = ps$('.Logo, .AssetLogo');


	var measure = logoType() === 'text' ? {} : logoMeasure();
	_logoConfig.f_max_size = measure.maxSize;

	logoCheckDelivery(measure);
}
function logoCheckDelivery (measure) {
	if (typeof _logoConfig === 'undefined' ||
		((typeof _logoConfig.f_force_menu_button === 'undefined' ||
		_logoConfig.f_force_menu_button === 'f') &&
		(typeof _logoConfig.f_max_size === 'undefined' ||
		_logoConfig.f_max_size === false))) return;

	var width, height,
		type = logoType(),
		$c1 = ps$('#c1')
		$display = $_logo.parent();

	if (type === 'image' || type === 'asset') {
		measure = (typeof measure.width === 'undefined') ? logoMeasure() : measure;
		width = measure.width;
		height = measure.height;
	}
	else if (type === 'text') {
		var $a = ps$('.Logo, .AssetLogo').find('a');
		width = $a.width();
		height = $a.height();
	}
	if (getResponsiveState() !== 'handhelds') {
		if (_logoConfig.f_force_menu_button === 'h') {
			logoCheckHorizontal($c1, $display, width);
		} else if (_logoConfig.f_force_menu_button === 'v') {
			logoCheckVertical($c1, $display, height);
		}
	}
	ps$('#c1').removeClass('nav-logo-prep');
}
function logoMeasure () {
	ps$('#c1').addClass('measure');

	var startW = $_logo.find('a').data('width'),
		startH = $_logo.find('a').data('height'),
		width = startW,
		height = startH,
		maxH = $_logo.css('max-height'),
		maxW = $_logo.css('max-width'),
		maxSize = false;

	if (_logoConfig.image_f_retina == 't') {
		width /= 2;
		height /= 2;
	}

	if (maxH.search('px') === -1 || maxW.search('px') === -1) {
		if (maxH.search('vh') !== -1)
			maxH = ps$('body').height() * (parseFloat(maxH) / 100) + 'px';
		else if (maxH.search('%') !== -1)
			maxH = $_logo.parent().height() * (parseFloat(maxH) / 100) + 'px';
		if (maxW.search('vw') !== -1)
			maxW = ps$('body').width() * (parseFloat(maxW) / 100) + 'px';
		else if (maxW.search('%') !== -1)
			maxW = $_logo.parent().width() * (parseFloat(maxW) / 100) + 'px';
	}
	ps$('#c1').removeClass('measure');

	if (maxH.search('px') !== -1) {
		maxSize = true;
		width = Math.min(width, width / height * parseFloat(maxH));
		height = startH / startW * width;
	}
	if (maxW.search('px') !== -1) {
		maxSize = true;
		height = Math.min(height, height / width * parseFloat(maxW));
		width = startW / startH * height;
	}

	width = Math.floor(width);
	height = Math.floor(height);

	$_logo.find('a').css({
		width: width + 'px',
		height: height + 'px'
	})

	return {width: width, height: height, maxSize: maxSize};
}
function logoCheckHorizontal($c1, $display, width) {
	var bodyW = $display.width(),
		otherW = logoSiblingOffset($_logo.siblings(':not(.show-nav,script)'), 'outerWidth'),
		logoW = width;

	if ((otherW !== 0 && bodyW - logoW - otherW < 25) ||
		(otherW === 0 && logoW > bodyW)) {
		logoToggleMenuButton($c1, true);
	} else {
		logoToggleMenuButton($c1, false);
	}
}
function logoCheckVertical($c1, $display, height) {
	var bodyH = $display.height(),
		otherH = logoSiblingOffset(this.$elem.siblings(':not(.Logo, .AssetLogo, .show-nav)'), 'outerHeight'),
		logoH = height;

	if ((otherH !== 0 && bodyH - logoH - otherH < 25) ||
		(otherH === 0 && logoH > bodyH)) {
		logoToggleMenuButton($c1, true);
	} else {
		logoToggleMenuButton($c1, false);
	}
}
function logoSiblingOffset(siblings, dimension, offset) {
	offset = 0;
	for (var i = 0, ct = siblings.length; i < ct; i++) {
		offset += ps$(siblings[i])[dimension]();
		offset += (dimension.search('width') !== -1 ||
					dimension.search('Width') !== -1) ? 4 : 0;
	}
	return offset;
}
function logoToggleMenuButton($c2, f) {
	$c2.toggleClass('menu-button', f);
}

// ######## plugins ########

(function($) {
var _imgSwipe = {
	d: {},
	next: null,
	prev: null,
	$swiper: null,

	swipeStartCb: function(e)
	{
		var $el = _imgSwipe.$swiper;

		_imgSwipe.d._startT = (new Date()).getTime();
		_imgSwipe.d._startX = e.originalEvent.changedTouches[0].pageX;
		_imgSwipe.d._startY = e.originalEvent.changedTouches[0].pageY;
		_imgSwipe.d._elWidth = $el.children(':first').outerWidth();
		_imgSwipe.d._curX = 0;
		_imgSwipe.d._rawX = 0;
		_imgSwipe.d.ratio = ($(window).width() > 600) ? 0.5 : 1;

		$el.addClass('no-transition');
	},

	swipeCb: function(e)
	{
		var $el = _imgSwipe.$swiper;
		var threshold = 30;
		var ratio = _imgSwipe.d.ratio;

		// swipe displacement
		var x = e.originalEvent.changedTouches[0].pageX - _imgSwipe.d._startX;
		var y = e.originalEvent.changedTouches[0].pageY - _imgSwipe.d._startY;
		var xAbs = Math.abs(x);
		var yAbs = Math.abs(y);

		if (yAbs < 5)
			e.preventDefault();

		// threshold check
		if (xAbs < threshold) return;

		xAbs -= threshold;
		_imgSwipe.d._rawX = x;

		// lock out directions that are unavailable
		if (x < 0 && !_imgSwipe.next) return;
		if (x > 0 && !_imgSwipe.prev) return;

		// adjust for ratio, threshold
		if (x < 0) x += threshold;
		else x -= threshold;
		x *= ratio;

		// upper bounds check
		xAbs = Math.abs(x);
		if (xAbs > _imgSwipe.d._elWidth) return;

		_imgSwipe.d._curX = x;

		var str = 'translate3d(' + x + 'px,0,0)';
		$el.css('-webkit-transform', str)
		   .css('transform', str);
	},

	swipeEndCb: function(e)
	{
		var $el = _imgSwipe.$swiper;
		var ct = (new Date()).getTime();
		var t = ct - _imgSwipe.d._startT;
		var str, left, pct, velocity;

		left = _imgSwipe.d._curX;

		pct = left/_imgSwipe.d._elWidth;
		velocity = 100 * Math.abs(_imgSwipe.d._rawX/t);

		if (Math.abs(pct) > 0.8 || velocity > 50) {
			if (_imgSwipe.d._rawX < 0 && _imgSwipe.next) {
				str = 'translate3d(-' + _imgSwipe.d._elWidth + 'px,0,0)';
				$el.css('-webkit-transform', str)
				   .css('-transform', str);
				setTimeout(function() {location = _imgSwipe.next.url}, 10);
				return;
			}
			else if (_imgSwipe.d._rawX > 0 && _imgSwipe.prev) {
				str = 'translate3d(' + _imgSwipe.d._elWidth + 'px,0,0)';
				$el.css('-webkit-transform', str)
				   .css('-transform', str);
				setTimeout(function() {location = _imgSwipe.prev.url}, 10);
				return;
			}
		}

		str = 'translate3d(0,0,0)';
		$el.removeClass('no-transition')
		   .css('-webkit-transform', str)
		   .css('-transform', str);
	}
};


$.fn.imgSwipe = function (next, prev) {
	_imgSwipe.next = next;
	_imgSwipe.prev = prev;

	_imgSwipe.$swiper = $('<div class="swiper"><div class="swipePrev" /><div class="swipeNext" /></div>')
		.appendTo(this);

	$(this).on('touchstart', _imgSwipe.swipeStartCb)
		.on('touchmove', _imgSwipe.swipeCb)
		.on('touchend', _imgSwipe.swipeEndCb);
}

$.fn.psImgLoad = function(opt)
{
	if (!this.length) return;

	var	n = this.length, cnt = 0,
		$img;

	// no IE!
	if (!n || _bsBrowser.isIE) {
		if (isset(opt.done))
			opt.done();
		return;
	}

	/**
	 * Dynamically set timeout for use in setTimeout on line 508 to delay paint.
	 * Solution for TEM-474 - Images not completely painting in Safari.
	 *
	 * Sets timeout to 200ms on archive single image views (or I guess if there
	 * are two thumbnails in a gallery or collection thumbnail view).
	 *
	 * WS - 01/26/2018
	 */
	var timeout = _bsBrowser.isSafari && n <= 2 ? 200 : 0;

	var progressCb = function($obj) {
		cnt++;
		setTimeout(function() {
			if (isset(opt.cnStart)) $obj.removeClass(opt.cnStart)
			if (isset(opt.cnEnd)) $obj.addClass(opt.cnEnd);
		}, timeout);

		if (isset(opt.done) && cnt >= n)
			opt.done();
		else if (isset(opt.progress))
			opt.progress(cnt, n);
	};

	$(this).addClass('psImgLoad');

	for (var i=0; i<n; i++) {
		$img = $(this[i]);

		// skip if loaded
		if (this[i].complete) {
			progressCb($img);
			continue;
		}

		if (isset(opt.cnStart)) $img.addClass(opt.cnStart)
		$img.on('error load', function() {
			progressCb($(this));
		});
	}
}

})(ps$);
