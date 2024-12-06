if (typeof(PS) == 'undefined') {
	PS = {};
}

if (typeof(PS.com) == 'undefined') PS.com = {};

if (typeof(PS.utl) == 'undefined') {
	PS.utl = {};

	PS.utl._IMG = {}
	PS.utl._IMG.spinner = new Image();
	PS.utl._IMG.spinner.src = '/img/BS.com/spinner.gif';
	PS.utl._IMG.spinnerBig = new Image();
	PS.utl._IMG.spinnerBig.src = '/img/BS.com/spinner-big.gif';
};

PS.App = function ()
{
};

PS.App.prototype = {
	pv:		[],
	orgPerm:	null,

	pvSet: function (n, v) { this.pv[n] = v; },

	pvGet: function (n)
	{
		return (isset(this.pv[n])) ? this.pv[n] : null;
	},

	realmPath: function ()
	{
		var area = this.pvGet('area');

		switch (area) {
		case 'adm':
		case 'cli':
		case 'mem':
		case 'mu':
			return '/' + area;
		default:
			return '';
		}
	},

	imgGet: function (id, t, host, qry, f_auth)
	{
		if (host && (host = this.pvGet('server.' + host)));
		else host = '';

		t = (t) ? ('/' + t) : '/s';
		qry = (qry) ? '?' + qry: '';

		var iget = '/img-get';
		if (f_auth) {
				var area = this.pvGet('area');
				if (area == 'mu' || area == 'mem') {
					iget = '/' + area + iget;

					// don't use caching hostname
					// (potential security hole)
					host = '';
				}
		}

		return host + iget + '/' + id + t + qry;
	},

	videoGet: function (id, t, host, fname, qry, f_auth)
	{
		if (host && (host = this.pvGet('server.' + host)));
		else host = '';

		t = (t) ? t : 'hls'; //defaults to HLS playlist

		if (fname) {
			//HACK: remove file extension
			fnA = fname.split('.');
			fnA.pop();
			// escape string
			fname = PS.utl.tplescape(fnA.join('.'));
		} else fname = id; //default file name is id

		switch (t) {
		case 'hls':
			fname += '.m3u8';
			break;
		case 'poster':
		case 'thumb':
			fname += '.jpg';
			break;
		}

		return host + '/video-get/' + id + '/fmt=' + t + '/' + fname;
	},

	mediaGet: function (id, t, fname, qry, f_auth)
	{
		if (!id) throw new Error('Media id not set');

		// process args to for imgGet interface
		switch (id.substr(0, 5)) {
		case 'I0000':
			t = (t == 'thumb') ? 't/150' :t;
			return this.imgGet(id, t, 'img', qry, f_auth);
		case 'VD000':
			return this.videoGet(id, t, 'vid', fname);
		default:
			throw new Error('Media type not reached');
		}
	},

	imgSzCalc: function (dim, sz, f_upscale)
	{
		if (!is_array(sz)) sz = [sz, sz];

		if (!f_upscale && (dim[0] <= sz[0] && dim[1] <= sz[1]))
			return dim;
		
		var szar = sz[0]/sz[1];
		var dimarr = dim[0]/dim[1]
		if (szar > dimarr) return [Math.floor(sz[1]*dimarr), sz[1]];
		else return [sz[0], Math.floor(sz[0]/dimarr)];
	},

	orgPermLoad: function (str)
	{
		this.orgPerm = str.split(' ');
	},

	orgPermCheck: function (perm)
	{
		if (!this.orgPerm || !perm) return true;

		for (var i = 0; i < this.orgPerm.length; i++) {
			if (this.orgPerm[i] == 'F_ADM') return true;
			if (this.orgPerm[i] == perm) return true;
		}

		return false;
	},

	orgPermAlert: function (perm)
	{
		if (!this.orgPermCheck(perm)) {
			BS.utl.alert.show('Error', 'You do not have permission to perform this action.\nPlease contact your site administrator for access.');
			return false;
		}

		return true;
	},

	orgPermHref: function (perm, url)
	{
		if (this.orgPermAlert(perm)) location = url;
	}
};

PS.utl.qryData = {};

PS.utl.qryData.flatten = function (data, n, v)
{
	var arr = [];

	for (var i = 0, l = data.length; i<l; i++) {
		data[i] = BS.utl.array.reduce(data[i]);
		arr.push([data[i][n], data[i][v]]);
	}

	return arr;
};

PS.com.Keypress = function ()
{
	this.keyA = [];
};

PS.com.Keypress.prototype = {
	kp:		null,
	ce:		null,

	_ce: function (type, data, args)
	{
		var		e = args[0];
		var		code = BS.utl.event.getKeyCode(e);
		var		c = null;

		if (e.metaKey || e.altKey || e.ctrlKey)
			return false;

		try {
			switch (code) {
			case 39:			// RIGHT Arrow
			case 107:			// NUM +
				c = 'RIGHT'; break;
			case 37:			// LEFT Arrow
			case 109:			// NUM -
				c = 'LEFT'; break;
			case 33: 			// Page UP
				c = 'UP'; break;
			case 36:			// HOME
				c = 'HOME'; break;
			case 35:			// END
				c = 'END'; break;
			case 27:			// ESC
				c = 'ESC'; break;
				
			}

			if (c && e.shiftKey)
				c += '2';
			else if (!c)
				c = (String.fromCharCode(code)).toUpperCase();

			if (isset(this.keyA[c])) this.keyA[c]();
		}
		catch (e) {alert(e);}
	},

	register: function (keys, f)
	{
		if (!this.kp) {
			this.kp = BS.utl.mm.oNew(BS.com.Keypress);
			this.ce = BS.utl.mm.ceNew('Keypress', this);
			this.ce.addCB(this._ce);
			this.kp.addGlobal(this.ce);
		}

		for (var i = 0; i < keys.length; i++) {
			this.keyA[keys[i]] = f;
		}
	}
};

PS.utl.keypress = BS.utl.mm.oNew(PS.com.Keypress);

PS.com.Prompt = function (title, submitE, cname, zindex)
{
	if (!cname) cname = 'PsPrompt';	
	if (!zindex) zindex = null;

	BS.com.Prompt.call(this, null, null, cname, zindex);

	if (submitE) this.submitE = submitE;

	this.mask = _bsObj.cache('PS.com.MaskCache');
	this.xA = this.mm.domNew(this.obj, 'a', 'PsPromptClose');
	this.xA.innerHTML = 'X';
	this.xA.href = 'javascript:void(0);';
	_bsDom.setDisplay(this.xA, false);
	this.titleH = this.mm.domNew(this.obj, 'h1');
	this.bodyDIV = this.mm.domNew(this.obj, 'div', 'body');
	this.form = this.mm.domNew(this.bodyDIV, 'form');
	this.form.onsubmit = function () { return false; };

	this.footerDIV = this.mm.domNew(this.obj, 'div', 'footer');
	this.cancelINP = this.mm.domNew(null, 'input', 'button');
	this.cancelINP.setAttribute('type', 'button');
	this.cancelINP.value = "Cancel";
	this.submitINP = this.mm.domNew(null, 'input', 'button');
	this.submitINP.setAttribute('type', 'button');
	this.submitINP.value = "Submit";

	this.footerDIV.appendChild(this.submitINP);
	this.footerDIV.appendChild(this.cancelINP);

	BS.utl.dom.setStyle(this.mm.domNew(this.footerDIV, 'br'), 'clear', 'both');

	if (title) {
		this.titleH.innerHTML = title;
		this._setSubmitVal(title);
	}

	BS.utl.event.attach(this.cancelINP, 'click', this.cancel, this);
	BS.utl.event.attach(this.xA, 'click', this.cancel, this);
	BS.utl.event.attach(this.submitINP, 'click', this._submit, this);
	BS.utl.event.attach(this.form, 'submit', this._submit, this);

	BS.utl.dom.setStyle(this.bodyDIV, 'display', 'none');
};

PS.com.Prompt.prototype = {
	f_submit:	false,
	submitE: 	null,

	_delete: function ()
	{
		this.form.onsubmit = null;
		this.mask = null;
		this.submitE = null;

		BS.utl.event.detach(this.cancelINP, 'click', this.cancel);
		BS.utl.event.detach(this.submitINP, 'click', this._submit);
		BS.utl.event.detach(this.form, 'submit', this._submit);

		BS.com.Prompt.prototype._delete.call(this);
	},

	_submit: function (arr)
	{
		if (this.submitE) 
			this.submitE.exec(this.type, arr);
		else this.form.submit();
	},

	_setSubmitVal: function (val)
	{
		BS.utl.dom.setDisplay(this.submitINP, (val != null));
		if (val != null) this.submitINP.value = val;
	},

	_setCancelVal: function (val) { this.cancelINP.value = val; },

	show: function (mode)
	{
		if (mode == this.f_show)
			return false;

		this.f_show = mode;
		this.mask.show(mode);

		if (mode) {
			this.f_submit = false;

			BS.utl.dom.setStyle(this.bodyDIV, 'display', 'block');

			if (this.form) this.form.reset();
			
		} else {
			BS.utl.dom.setStyle(this.bodyDIV, 'display', 'none');
		}

		BS.com.Prompt.prototype.show.call(this, mode);
	},

	reset: function () { this.f_submit = false; },

	cancel: function () { this.show(false); }
};

BS.utl.object.inherit(BS.com.Prompt, PS.com.Prompt);

PS.com.LoginPrompt = function (extBsapiCE, bsPath, bsP)
{
	var tmp, li;

	this.gvStr = BS.utl.mkGvStr(this);
	this.URL_PATH =(PS.app.pvGet('custom_path')) ? PS.app.pvGet('custom_path') : '';

	this.extBsapiCE = extBsapiCE;
	this.bsPath = bsPath;
	this.bsP = bsP;

	BS.com.Prompt.call(this, null, null, 'PsLoginPrompt', 6000);

	if (this.extBsapiCE && this.bsPath) {
		this.bsapi = this.mm.oNew(BS.com.BSApi);
		this.bsapiE = this.mm.ceNew('bsapiE', this);
		this.bsapiE.addCB(this._bsapiCB);
	}

	this.mask = this.mm.oNew(BS.com.Mask, null, 0.5, '5999');

	this.titleH = this.mm.domNew(this.obj, 'h1');
	this.titleH.innerHTML = 'Login Required';

	this.bodyDIV = this.mm.domNew(this.obj, 'div', 'body');
	this.cntDIV = this.mm.domNew(this.bodyDIV, 'div', 'cnt')

	this.msgDIV = this.mm.domNew(this.bodyDIV, 'div');
	this.msgDIV.innerHTML = 'Please log into PhotoShelter to access this feature.';

	this.footerDIV = this.mm.domNew(this.obj, 'div', 'footer')
	this.cancelINP = this.mm.domNew(null, 'input', 'button')
	this.cancelINP.setAttribute('type', 'button');
	this.cancelINP.value = "Cancel";
	this.footerDIV.appendChild(this.cancelINP);
	BS.utl.dom.setStyle(this.mm.domNew(this.footerDIV, 'br'), 'clear', 'both');

	BS.utl.event.attach(this.cancelINP, 'click', this.cancel, this);

	// iframe
	this.iframe = this.mm.domNew(null, 'iframe', 'psLoginPromptFrame');
	this.iframe.setAttribute('frameBorder', '0');
	this.iframe.setAttribute('scrolling', 'no');
	this.bodyDIV.appendChild(this.iframe);
	this.iframe.src = PS.app.pvGet('server.sec') + this.URL_PATH + '/login/ajax/' + escape(this.gvStr);

	BS.utl.dom.setStyle(this.bodyDIV, 'display', 'none');
};

PS.com.LoginPrompt.prototype = {

	_delete: function ()
	{
		this.mask = null;
		this.extBsapiCE = this.bsPath = this.bsP = null;

		BS.utl.event.detach(this.cancelINP, 'click', this.cancel);

		BS.com.Prompt.prototype._delete.call(this);
	},

	loginCB: function ()
	{
		if (this.extBsapiCE && this.bsapi) {
			this.bsapi.post(this.bsPath, this.bsP, this.extBsapiCE);
			this.cancel();
		} else if (this.extBsapiCE) {
				this.extBsapiCE.exec();	
		} else {
			location.reload();
		}
	},

	show: function (mode)
	{
		this.f_show = mode;
		this.mask.show(mode);
		BS.utl.dom.setDisplay(this.bodyDIV, mode);
		BS.com.Prompt.prototype.show.call(this, mode);
	},

	setMsg: function (str) { this.msgDIV.innerHTML = str; },

	cancel: function (type, data, args) { this.show(false); }
};

if (BS.com.Prompt)
	BS.utl.object.inherit(BS.com.Prompt, PS.com.LoginPrompt);

PS.com.ConfPrompt = function (submitE, cname)
{
	if (!cname) cname = 'PsPrompt PsConfPrompt';	


	BS.com.Prompt.call(this, null, null, cname, '9999');

	if (submitE) this.submitE = submitE;

	this.mask = _bsObj.cache('PS.com.MaskCacheHigh');
	this.bodyDIV = this.mm.domNew(this.obj, 'div', 'body');
	this.footerDIV = this.mm.domNew(this.obj, 'div', 'footer');
	this.cancelINP = this.mm.domNew(null, 'input', 'button');
	this.cancelINP.setAttribute('type', 'button');
	this.cancelINP.value = "Cancel";
	this.footerDIV.appendChild(this.cancelINP);
	this.submitINP = this.mm.domNew(null, 'input', 'button');
	this.submitINP.setAttribute('type', 'button');
	this.submitINP.value = "Okay";
	this.footerDIV.appendChild(this.submitINP);
	_bsDom.setStyle(this.mm.domNew(this.footerDIV, 'br'), 'clear', 'both');

	_bsEvt.attach(this.cancelINP, 'click', this.cancel, this);
	_bsEvt.attach(this.submitINP, 'click', this._submit, this);
	_bsDom.setStyle(this.bodyDIV, 'display', 'none');
};

PS.com.ConfPrompt.prototype = {
	f_submit:	false,
	submitE: 	null,

	_delete: function ()
	{
		this.mask = null;
		this.submitE = null;

		_bsEvt.detach(this.cancelINP, 'click', this.cancel);
		_bsEvt.detach(this.submitINP, 'click', this._submit);

		BS.com.Prompt.prototype._delete.call(this);
	},

	show: function (mode)
	{
		if (!!mode == this.f_show)
			return false;

		this.f_show = !!mode;
		this.mask.show(!!mode);

		if (mode) {
			this.f_submit = false;

			if (typeof(mode) == 'object') this.bodyDIV.innerHTML = mode.msg;
			else this.bodyDIV.innerHTML = mode;

			this.ctype = (mode.ctype ? mode.ctype : 'conf');

			try {
				this.submitINP.value = (mode.yes ? mode.yes : 'Okay');
				this.cancelINP.value = (mode.no ? mode.no : 'Cancel');
				_bsDom.setDisplay(this.submitINP, !mode.f_cancel_only);
			} catch (e) {alert(e);} //hai IE

			_bsDom.setStyle(this.bodyDIV, 'display', 'block');
			
		} else {
			_bsDom.setStyle(this.bodyDIV, 'display', 'none');
		}

		BS.com.Prompt.prototype.show.call(this, !!mode);
	},
	
	_submit: function (arr) { this._confirm(arr, true); },
	cancel: function (arr) { this._confirm(arr, false); },

	_confirm: function (arr, f_confirm)
	{
		this.submitE.exec(arr, this.ctype, f_confirm);
		this.show(false);
	}
};

_bsObj.inherit(BS.com.Prompt, PS.com.ConfPrompt);

PS.com.DlType = function (obj, form, key, first, maxKey)
{
	var li, tmp, id;

	this.form = form;
	this.key = key;

	if (!first) first = null;

	this.mm = new BS.com.Delete('DlType');
	this.UL = this.mm.domNew(obj, 'ul');

	li = this.mm.domNew(this.UL, 'li');
	this.dlLABEL = this.mm.domNew(li, 'label', 'float');
	this.dlLABEL.innerHTML = 'Allow Download:';
	this.typeSEL = this.mm.oNew(BS.com.Form.Select, li, this.key + '_TYPE', first)
	this.typeSEL.load(this.DLTYPE_TYPE, true);

	this.sizeLI = this.mm.domNew(this.UL, 'li');
	tmp = this.mm.domNew(this.sizeLI, 'label', 'float');
	tmp.innerHTML = 'Image Size:';
	this.sizeSEL = this.mm.oNew(BS.com.Form.Select, this.sizeLI, this.key + '_SIZE')
	this.sizeSEL.load(this.DLTYPE_SIZE, true);

	this.size2LI = this.mm.domNew(this.UL, 'li', 'DlTypeSize2');
	this.size2LI.innerHTML = '<label class="float">&nbsp;</label><span><input name="' + this.key + '_SIZE2" size="5" maxlength="5"> pixels</span>';

	this.optLI = this.mm.domNew(this.UL, 'li');
	this.optLI.innerHTML = '<label class="float">&nbsp;</label><input type="checkbox" name="' + this.key + '_EMBED" value="t">Embed updated metadata';

	if (maxKey) {
		this.maxKey = maxKey;
		this.maxLI = this.mm.domNew(this.UL, 'li', 'DlTypeMax');
		this.maxLI.innerHTML = '<label class="float">Max # of downloads:</label><span><input name="' + this.maxKey + '" size="5" maxlength="5"> (leave blank for no limit)</span>';
	}

	this.selCE = this.mm.ceNew('sel', this);
	this.selCE.addCB(this._select);
	this.selCE.attach(this.typeSEL.sel, 'change');
	this.selCE.attach(this.sizeSEL.sel, 'change');
};

PS.com.DlType.prototype = {
	DLTYPE_TYPE:	[['ORIG', 'Original file format and size'],
			 ['JPG', 'JPEG file']],
	DLTYPE_SIZE:	[['', 'Original size'],
			 ['4800', '4800 pixels'],
			 ['2400', '2400 pixels'],
			 ['1200', '1200 pixels'],
			 ['600', '600 pixels'],
			 ['-', 'Custom size...']],

	maxKey:		null,
	maxLI:		null,

	_delete: function ()
	{
		this.form = null;
		this.mm._delete();
	},

	_select: function (type, data, args)
	{
		PS.com.DlType.typeSelect(this.form, this.key, null,
					 [this.sizeLI, this.size2LI,
					  this.optLI, this.maxLI]);
	},

	load: function (arr, key, feKey)
	{
		if (!key) key = this.key;
		if (!feKey) feKey = key;

		var embedINP = BS.utl.form.getElem(this.form, feKey + '_EMBED');
		var size2INP = BS.utl.form.getElem(this.form, feKey + '_SIZE2');

		if (this.maxKey)
			var maxINP = BS.utl.form.getElem(this.form, this.maxKey);

		if (arr) {
			if (isset(arr[key + '_TYPE']))
				this.typeSEL.setVal(arr[key + '_TYPE']);
			if (isset(arr[key + '_SIZE']))
				this.sizeSEL.setVal(arr[key + '_SIZE']);
			if (isset(arr[key + '_SIZE2']))
				size2INP.value = arr[key + '_SIZE2'];
			if (isset(arr[key + '_EMBED']))
				embedINP.checked = (arr[key + '_EMBED'] == 't');

			if (maxINP && isset(arr[this.maxKey]))
				maxINP.value = arr[this.maxKey];
		}
		else {
			this.typeSEL.reset();
			embedINP.checked = true;
			if (maxINP) maxINP.value = '';
		}

		this._select();
	},

	reset: function () { this.load(null); },

	setLabel: function (str)
	{
		this.dlLABEL.innerHTML = str;
	},

	disable: function (mode)
	{
		if (mode)
			this.load(null);

		this.sizeSEL.disable(mode);
	}
};

/*!\brief	static methods for handling DLTYPE;
		needed for legacy page support
*/
PS.com.DlType.typeSelect = function (fObj, key, lbl, objA)
{
	var typeSEL = BS.utl.form.getElem(fObj, key + '_TYPE');
	var sizeSEL = BS.utl.form.getElem(fObj, key + '_SIZE');
	var size2INP = BS.utl.form.getElem(fObj, key + '_SIZE2');
	var embedINP = BS.utl.form.getElem(fObj, key + '_EMBED');

	if (!typeSEL) return;

	if (!lbl) lbl = 'dltype';

	var sizeDIV, size2DIV, optDIV, maxDIV;

	if (objA) {
		sizeDIV = objA[0];
		size2DIV = objA[1];
		optDIV = objA[2];
		maxDIV = objA[3];
	}
	else {
		sizeDIV = BS.utl.dom.get(lbl + 'Size');
		size2DIV = BS.utl.dom.get(lbl + 'Size2');
		optDIV = BS.utl.dom.get(lbl + 'Opt');
	}

	BS.utl.dom.setDisplay(sizeDIV, !empty(BS.utl.form.getValue(typeSEL)));

	switch (BS.utl.form.getValue(typeSEL)) {
	case 'JPG':
		BS.utl.dom.setDisplay(sizeDIV, true);
		BS.utl.dom.setDisplay(optDIV, true);
		if (maxDIV) BS.utl.dom.setDisplay(maxDIV, true);
		break;
	case 'ORIG':
		BS.utl.dom.setDisplay(sizeDIV, false);
		BS.utl.dom.setDisplay(optDIV, true);
		if (maxDIV) BS.utl.dom.setDisplay(maxDIV, true);
		sizeSEL.selectedIndex = 0;
		break;
	default:
		BS.utl.dom.setDisplay(sizeDIV, false);
		BS.utl.dom.setDisplay(optDIV, false);
		if (maxDIV) BS.utl.dom.setDisplay(maxDIV, false);
		sizeSEL.selectedIndex = 0;
		embedINP.checked = true;
	}

	if (BS.utl.form.getValue(sizeSEL) == '-') {
		BS.utl.dom.setDisplay(size2DIV, true);
	}
	else {
		BS.utl.dom.setDisplay(size2DIV, false);
		size2INP.value = '';
	}

	if (PS.com.DlType.typeSelect.ce)
		PS.com.DlType.typeSelect.ce.exec();
};

PS.com.DlType.typeSelect.ce = null;

PS.com.DlType.typeCheck = function (fObj, key)
{
	var sizeSEL = BS.utl.form.getElem(fObj, key + '_SIZE');
	if (!sizeSEL) return true;

	if (BS.utl.form.getValue(sizeSEL) != '-') return true;

	var val = BS.utl.form.getElem(fObj, key + '_SIZE2').value;
	if (!val.match(/^[0-9]{1,5}$/)) {
		alert('Please enter a valid custom image size.');
		BS.utl.form.getElem(fObj, key + '_SIZE2').focus();
		return false;
	}
	else if (parseInt(val) < 500) {
		alert('The minimum image size is 500 pixels. Please enter a larger size.');
		BS.utl.form.getElem(fObj, key + '_SIZE2').focus();
		return false;
	}

	return true;
};


/*!\brief	error response handler; meant to be passed in as 2nd argument
		to BS.com.BSApi.responseParse()
*/
PS.utl.responseErr = function (d)
{
	for (var i=0; i < d.length; i++) {
		switch (d[i]['class']) {
		case 'SessionRequiredErr':
			location.reload();
			throw false;
		}
	}

	// signals BS.com.BSApi.responseParse() to still throw the err msg
	return true;
}

PS.utl.responseErr.login = function (d)
{
	for (var i=0; i < d.length; i++) {
		switch (d[i]['class']) {
		case 'SessionRequiredErr':
			var lp = BS.utl.mm.oNew(PS.com.LoginPrompt);
			lp.show(true);
			throw false;
		}
	}

	// signals BS.com.BSApi.responseParse() to still throw the err msg
	return true;
}

PS.com.BusyPrompt = function (parent, opacity)
{
	this.parent = parent;

	opacity = (opacity) ? opacity : 0.6;
	
	this.mm = new BS.com.Delete('PSBusyPrompt');
	this.mask = this.mm.oNew(BS.com.Mask, parent, opacity, '7999');

	this.spinnerDIV = this.mm.domNew(document.body, 'div');

	// stupid safari has issues with asynchrnous calls being interrupted
	// by user events, so best not to delay the busyPrompt too much
	if (_bsBrowser.isSafari) this.T_DELAY = 50;
};

PS.com.BusyPrompt.prototype = {
	f_show: 		false,
	T_DELAY:		200,
	
	_delete: function () 
	{
		this.parent = null;
		this.mm._delete();
	},
	
	_resize: function ()
	{
		var pos = _bsDom.pageOfs(this.parent);
		var size = _bsDom.size(this.parent);
		size[0] /= 2;
		size[1] /= 2;
		_bsXy.add(pos, size);
		
		var divsize = _bsDom.size(this.spinnerDIV);
		divsize[0] /= 2;
		divsize[1] /= 2;
		_bsXy.sub(pos, divsize);
		
		_bsDom.setPageOfs(this.spinnerDIV, pos);
	},

	_show: function ()
	{
		if (!this.f_show) return;

		this.mask.show(true);
		_bsDom.setDisplay(this.spinnerDIV, true);
		this._resize();
		_bsDom.setVis(this.spinnerDIV, true);
		BS.utl.globalEvent.addCB('resize', this._resize, this);
	},

	show: function (mode)
	{
		if (this.f_show == mode) return;
		this.f_show = mode;
				
		if (mode) {
			_bsEvt.setTimeout(this.T_DELAY, this._show, this);
		} else {
			this.mask.show(mode);
			BS.utl.globalEvent.delCB('resize', this._resize, this);
			_bsDom.setVis(this.spinnerDIV, false);
			_bsDom.setDisplay(this.spinnerDIV, false);
		}
	}
};

PS.com.Balloon = function (obj, width)
{
	var mm = this.mm = new BS.com.Delete;
	this.gvStr = BS.utl.mkGvStr(this);
	this.width = (width) ? width : 300;

	if (!obj) obj = document.body;

	var t, t2;

	this.container = mm.domNew(obj, 'div', 'PsBalloon');

	this.pad = mm.domNew(this.container, 'div', 'psbPad');

	this.tick = [];
	for (var i = 0; i < 4; i++)
		this.tick[i] = mm.domNew(this.pad, 'div', 'psbTick i'+i);

	this.header = mm.domNew(this.pad, 'div', 'psbHeader');
	this.content = mm.domNew(this.pad, 'div', 'psbContent');
	this.footer = mm.domNew(this.pad, 'div', 'psbFooter');

	//only needed for stupid IE6
	if (_bsBrowser.isIE && _bsBrowser.version < 7) {
		_bsDom.setStyle(this.content, 'width', this.width + 'px');
		var iframe = mm.domNew(this.container, 'iframe');
		_bsDom.setVis(iframe, false);
	}
	
	_bsGlobalEvt.addCB('resize', this._resizeE, this);
};

PS.com.Balloon.prototype = {
	curObj: 		null,
	f_show:			false,
	OFS_Y:			[20, 20],

	_delete: function ()
	{
		this.curObj = this.mask = null;
		this.mm._delete();
	},

	_resizeE: function ()
	{
		if (!this.f_show) return;

		this._position();
		_bsDom.setDisplay(this.container, true);
	},

	_position: function () 
	{
		_bsDom.setVis(this.container, false);
		_bsDom.setDisplay(this.container, true);

		if (!this.curObj) {
			_bsDom.clientCenter(this.container);
			_bsDom.setVis(this.container, true);
			_bsDom.setDisplay(this.container, false);
			this._setTick(-1);
			return;
		}

		var mySize = _bsDom.fullsize(this.container);
		var size = _bsDom.fullsize(this.curObj);
		var pos = _bsDom.pageOfs(this.curObj);
		var csize = _bsDom.clientSize();
		var scroll = _bsDom.scrollOfs();

		var pos2 = _bsArr.copy(pos);
		pos2 = BS.utl.xy.sub(pos2, scroll);

		// margin around curObj (CSS box format)
		var margin = [pos2[1], csize[0]-(pos2[0]+size[0]),
			      csize[1]-(pos2[1]+size[1]), pos2[0]];

		var tick = 0;
		if (margin[1] > margin[3]) {
			pos[0] += size[0];
			tick += 1;
		} else {
			pos[0] -= mySize[0];
		}

		if (margin[2] > margin[0]) {
			pos[1] -= this.OFS_Y[1];
			tick += 2;
		} else {
			pos[1] -= (mySize[1]-size[1]-this.OFS_Y[0]);
		}

		this._setTick(tick);
		_bsDom.setPos(this.container, pos);
		_bsDom.setVis(this.container, true);
		_bsDom.setDisplay(this.container, false);
	},

	_setTick: function (pos)
	{
		var ie6 = (_bsBrowser.isIE && _bsBrowser.version < 7);
		for (var i = 0; i < this.tick.length; i++)
			_bsDom.setVis(this.tick[i], (i==pos) && !ie6);
	},

	setContent: function (str) { this.content.innerHTML = str; },
	setHeader: function (str) { this.header.innerHTML = str; },
	setFooter: function (str) { this.footer.innerHTML = str; },

	defaultFooter: function (img)
	{
		var str = '<div style="text-align:center;">' + 
			  '<a href="javascript:void(0)" onClick="' + this.gvStr + '.cancel();">' + 
			  '<img src="/img/button/close.gif" border="0" alt="Close"></a></div>';

		this.setFooter(str);
	},

	show: function (mode, obj, f_mask)
	{
		if (mode) {
			this.curObj = (obj) ? obj : null;
			this._position();

			if (f_mask) {
				if (!this.mask)
					this.mask = BS.utl.object.cache('BS.com.Mask');
				this.mask.show(true);
			}
		} else if (this.mask)
			this.mask.show(false);

		_bsDom.setDisplay(this.container, mode);
		this.f_show = mode;
	},
	
	cancel: function () { this.show(false); }
};

PS.com.BalloonHover = function (rootElement, f_sticky) 
{
	PS.com.Balloon.call(this,rootElement);

	this.hoverCE = this.mm.ceNew('hover', this);
	this.hoverCE.addCB(this._hover, this);
	if (f_sticky) {
		this.f_sticky = f_sticky;
		this.hoverCE.attach(this.container, 'mouseover', 'cont');
		this.hoverCE.attach(this.container, 'mouseout', 'cont');
	}
};

PS.com.BalloonHover.prototype = {
	STICKY_DUR:250,
	F_ON_CONTENT: false,

	attach: function (obj, data)
	{
		this.hoverCE.attach(obj, 'mouseover', data);
		this.hoverCE.attach(obj, 'mouseout');
	},

	_hover: function (type, data, args) 
	{
		var e = args[0];

		switch(e.type) {
		case "mouseover":
			if (this.f_sticky && args[1] == 'cont') {
					this.F_ON_CONTENT = true;
					break;
			}
			this._setData(args[1]);
			this.show(true, e.target);
			break;
		case "mouseout":
			if (this.f_sticky && args[1] == 'cont') {
					this.F_ON_CONTENT = false;
					_bsEvt.setTimeout(this.STICKY_DUR, this._showTO, this);
					break;
			}
		default:
			if (this.f_sticky) _bsEvt.setTimeout(this.STICKY_DUR, this._showTO, this);
			else this.show(false);
			break;
		}
	},

	_setData: function (data)
	{
		this.header.innerHTML = data.header;
		this.content.innerHTML = data.content;
		this.footer.innerHTML = data.footer;
	},

	_showTO: function ()
	{
		if (this.F_ON_CONTENT) return;
		this.show(false);
	}
};

BS.utl.object.inherit(PS.com.Balloon, PS.com.BalloonHover);

PS.com.LoginBalloon = function ()
{
	var tmp, str;
	var gvStr = BS.utl.mkGvStr(this);

	PS.com.Balloon.apply(this);
	
	this.clickCE = this.mm.ceNew('click', this);
	this.clickCE.addCB(this.cancel);
	
	this.mask = this.mm.oNew(BS.com.Mask, null, 0.5, '4999');
	var maskObj = (_bsBrowser.isIE) ? this.mask.obj.contentWindow.document : this.mask.obj;
	this.clickCE.attach(maskObj, 'click');
	this.setHeader('<h3>PhotoShelter Member Login</h3>');

	this.form = this.mm.domNew(this.content, 'form')
	this.cntDIV = this.mm.domNew(this.content, 'div', 'cnt')

	this.form.action = PS.app.pvGet('server.sec') + '/login';
	this.form.method = 'post';

	str =	'<div style="text-align:center;">' +
		'<input type="button" value="   Log In   " onClick="' + gvStr + '._submit();" class="heavy">' +
		'<input type="button" value="Cancel" onClick="' + gvStr + '.cancel();" style="margin-left:5px;" class="heavy">' +
		'</div>';
	this.setFooter(str);

	BS.utl.event.attach(this.form, 'submit', this._submit, this);
	
	this.form.innerHTML = 'Please log into your PhotoShelter account below.';

	tmp = this.mm.domNew(this.form, 'fieldset');
	this.inputUL = this.mm.domNew(tmp, 'ul');

	li = this.mm.domNew(this.inputUL, 'li');
	tmp = this.mm.domNew(li, 'label', 'float');
	tmp.innerHTML = 'Email:';
	
	this.emailINP = this.mm.domNew(null, 'input');
	with (this.emailINP) {
		setAttribute('type', 'text'); setAttribute('name', 'U_EMAIL');
		setAttribute('size', 20); setAttribute('maxlength', 50);
	}
	li.appendChild(this.emailINP);

	li = this.mm.domNew(this.inputUL, 'li');
	tmp = this.mm.domNew(li, 'label', 'float');
	tmp.innerHTML = 'Password:';
	this.passINP = this.mm.domNew(null, 'input');
	with (this.passINP) {
		setAttribute('type', 'password'); setAttribute('name', 'U_PASSWORD');
		setAttribute('size', 20); setAttribute('maxlength', 35);
	}
	li.appendChild(this.passINP);

	li = this.mm.domNew(this.inputUL, 'li');

	tmp = this.mm.domNew(this.form, 'div', 'sm');
	_bsDom.setStyle(tmp, 'padding', '0 20px');
	str = 'Forget your password? <a href="';
	if (window.opener) str += 'javascript:window.opener.location=\'/usr/usr-password-reset\';window.close();';
	else str += '/usr/usr-password-reset';
	str += '" class="bold">Click here.</a><br>Not a member? ';
	str += '<a href="';
	if (window.opener) str += 'javascript:_bsWin.openLink(\'' + PS.app.pvGet('server.sec') + '/signup?ref=' + escape(location.protocol + '//' + location.host) + '/com/shared/windowOpenerRefresh.html\', [600,500]);';
	else str += '/signup';
	str += '" class="bold">Join!</a>';

	// stupid hack so return key works
	str += '<input type="submit" value="" style="display:none;">';

	tmp.innerHTML = str;

	tmp = this.mm.domNew(this.form, 'span');
	tmp.innerHTML = '<input type="hidden" name="_ACT" value="login">' + 
			'<input type="hidden" name="ref" value="">';
};

PS.com.LoginBalloon.prototype = {
	f_submit:	false,

	_delete: function ()
	{
		this.form.onsubmit = null;
		BS.utl.event.detach(this.form, 'submit', this._submit);
		PS.com.Balloon.prototype._delete.call(this);
	},

	_submit: function (arr)
	{
		var p = _bsForm.toArray(this.form);

		if (empty(p.U_EMAIL)) {
			alert('Please enter your Email Address.');
			this.form.U_EMAIL.focus();
			return;
		}
		if (empty(p.U_PASSWORD)) {
			alert('Please enter your Password.');
			this.form.U_PASSWORD.focus();
			return;
		}
		
		this.form.submit();
	},

	show: function (mode, obj, f_noref) 
	{
		this.form.ref.value = (f_noref) ? 
			'' : location.pathname + location.search + location.hash;
		this.mask.show(mode);
		PS.com.Balloon.prototype.show.call(this, mode, obj);
		if (mode) this.emailINP.focus();
	}
};

BS.utl.object.inherit(PS.com.Balloon, PS.com.LoginBalloon);

_balloon = function (obj, header, content, f_mask) 
{
	if (!PS.utl.balloon)
		PS.utl.balloon = _bsMm.oNew(PS.com.Balloon);

	PS.utl.balloon.defaultFooter();
	PS.utl.balloon.setHeader(header ? header : '')
	PS.utl.balloon.setContent(content ? content : '');
	
	PS.utl.balloon.show(true, obj, f_mask);
};

_loginBalloon = function (obj, f_noref)
{
	if (!PS.utl.LoginBalloon)
		PS.utl.LoginBalloon = _bsMm.oNew(PS.com.LoginBalloon);

	PS.utl.LoginBalloon.show(true, obj, f_noref);
};

_collapseBlock = function (id, f)
{
	_bsDom.setDisplay(_bsDom.get(id + '_show'), f);
	_bsDom.setDisplay(_bsDom.get(id + '_hide'), !f);
};

PS.com.ToolTip = function (hint_obj, tip_obj, show_mode, class_name, alignment)
{
	var mm = this.mm = new BS.com.Delete;
	
	this.hint_obj = hint_obj;
	this.tip_obj = tip_obj;
	this.show_mode = (show_mode ? show_mode : 'mouseover');
	this.class_name = (class_name ? class_name : 'psTT');
	this.alignment = (alignment ? alignment : 'top_left');

	this.mCE = mm.ceNew("mouse", this);
	this.mCE.addCB(this.mCB, this);
	this.mCE.attach(this.hint_obj, this.show_mode);
	this.mCE.attach(this.tip_obj, 'mouseout');
};

PS.com.ToolTip.prototype = {
	_delete: function ()
	{
		this.hint_obj = this.tip_obj = null;
		this.mm._delete();
	},

	mCB: function (type, data, args)
	{
		var e = args[0];
		switch(e.type) {
		case this.show_mode:
			this.show(true);
			break;
		case "mouseout":
			var r = (e.relatedTarget) ? e.relatedTarget : e.toElement;
			while (r != this.tip_obj && r.nodeName != 'BODY')
					r = r.parentNode

			if (r.nodeName != 'BODY') break;
			this.show(false);
			break;
		}
	},
	
	show: function (f_show)
	{
		_bsDom.setDisplay(this.tip_obj, f_show);
		var pos = _bsDom.pageOfs(this.hint_obj);
		var size = _bsDom.fullsize(this.hint_obj);
		var tsize = _bsDom.fullsize(this.tip_obj);
		switch (this.alignment) {
		case 'center':
			pos[0] += Math.round((size[0] - tsize[0])/2);
			pos[1] += Math.round((size[1] - tsize[1])/2);
			break;
		case 'top_right':
			pos[0] += (size[0] - tsize[0]);
			break;
		case 'top_left':
		default:
				break;
		}
		_bsDom.setPos(this.tip_obj, pos);
	}
};

//example  cfg array {hint_obj: obj, tip_msg: "Here's a tip!", tip_class: 'psTT', align: 'center'}
_addToolTip = function (cfg)
{
	if (cfg.tip_msg) {
		var tip_obj = _bsMm.domNew(document.body, "div", (cfg.tip_class ? cfg.tip_class : 'psTT'));
		tip_obj.innerHTML = cfg.tip_msg;
		_bsDom.setDisplay(tip_obj, false);
		_bsDom.setStyle(tip_obj, 'position', 'absolute');
	}
	_bsMm.oNew(PS.com.ToolTip, cfg.hint_obj, tip_obj, null, null, (cfg.align ? cfg.align : null));
};

// cached objects

PS.com.BusyPromptCache = function ()
{
	BS.com.BusyPrompt.call(this, '<img src="/img/spinner.gif" vspace="3"><br>Please wait...', '');
};

_bsObj.inherit(BS.com.BusyPrompt, PS.com.BusyPromptCache);


PS.com.MaskCache = function ()
{
	BS.com.Mask.call(this, null, 0.5);
};

_bsObj.inherit(BS.com.Mask, PS.com.MaskCache);

//for layered prompts
PS.com.MaskCacheHigh = function ()
{
	BS.com.Mask.call(this, null, 0.5, 9998);
};

_bsObj.inherit(BS.com.Mask, PS.com.MaskCacheHigh);

// to escape HTML strings
// copied from bslite, O_O
PS.utl.tplescape = function(string) {
	return ('' + string).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
};
