if (typeof(BS) == 'undefined') {
	BS = {};
	BS.com = {};
	BS.utl = {};

	function is_array(v)
	{
		if (!isset(v) || v === null) return false;
		return v.constructor == Array;
	}
	function isset(v) { return (typeof v == 'undefined') ? false : true; }

	function empty (obj)
	{
		if (obj === null) return true;

		switch (typeof obj) {
		case 'number': return (obj == 0);
		case 'string': return (!obj || obj== '');
		case 'boolean': return obj !== true;
		case 'undefined': return true;
		case 'object':
			if (is_array(obj)) {
				for (var i in obj) {
					if (obj.hasOwnProperty(i)) return false;
				}
				return true;
			}
		case 'function':
		default: return false;
		}
	}
}

/*!\brief	Callback class that represents a callback function, optional
 *		data object, and optional bind to data scope.
 * \param	f		function
 * \param	bind		bind scope (optional)
 * \param	d		data (optional)
 */
BS.com.Callback = function (f, bind, d)
{
	this.f = f;
	this.bind = bind;
	this.d = d;
};

BS.com.Browser = function ()
{
	this.agent = this._getAgent(this.dataBrowser) || 'unknown';
	this.version = this._getVersion(navigator.userAgent)
			|| this._getVersion(navigator.appVersion)
			|| 'unknown';
	this.OS = this._getAgent(this.dataOS) || 'an unknown OS';
	
	this.isIE = (this.agent == 'Explorer');
	this.isSafari = (this.agent == 'Safari' || this.agent == 'Konqueror');
	this.isOpera = (this.agent == 'Opera');
	this.isChrome = (this.agent == 'Chrome');
};

BS.com.Browser.prototype = {
	_getAgent: function (data)
	{
		for (var i=0; i<data.length; i++) {
			var dataStr = data[i].str;
			var dataProp = data[i].prop;
			this.verSrchStr = data[i].verSrch || data[i].id;
			if (dataStr) {
				if (dataStr.indexOf(data[i].substr) != -1)
					return data[i].id;
			}
			else if (dataProp) return data[i].id;
		}
	},

	_getVersion: function (dataStr)
	{
		var index = dataStr.indexOf(this.verSrchStr);
		if (index == -1) return;
		return parseFloat(dataStr.substring(index+this.verSrchStr.length+1));
	},

	isValid: function (mode)
	{
		if (mode == 'Java' && this.OS == 'Mac') {
			switch (this.agent) {
			case 'Chrome': return true;
			case 'Safari': return (this.version > 400);
			case 'Firefox': return (this.version >= 1.5);
			default: return false;
			}
		}

		switch (this.agent) {
		case 'Safari': return (this.version > 300);
		case 'Chrome': return (this.version >= 0.2);
		case 'Mozilla': return (this.version > 1.6);
		case 'Firefox': return (this.version >= 1);
		case 'Explorer': return (this.version > 5);
		case 'Opera': return (this.version >= 9);
		default: return false;
		}
	},

	dataBrowser: [
		{
			str: navigator.vendor,
			substr: 'Apple',
			id: 'Safari'
		},
		{
			str: navigator.vendor,
			substr: 'Google',
			id: 'Chrome'
		},
		{
			prop: window.opera,
			id: 'Opera'
		},
		{
			str: navigator.vendor,
			substr: 'iCab',
			id: 'iCab'
		},
		{
			str: navigator.vendor,
			substr: 'KDE',
			id: 'Konqueror'
		},
		{
			str: navigator.userAgent,
			substr: 'Firefox',
			id: 'Firefox'
		},
		{	// for newer Netscapes (6+)
			str: navigator.userAgent,
			substr: 'Netscape',
			id: 'Netscape'
		},
		{
			str: navigator.userAgent,
			substr: 'MSIE',
			id: 'Explorer',
			verSrch: 'MSIE'
		},
		{
			str: navigator.userAgent,
			substr: 'Gecko',
			id: 'Mozilla',
			verSrch: 'rv'
		},
		{ 	// for older Netscapes (4-)
			str: navigator.userAgent,
			substr: 'Mozilla',
			id: 'Netscape',
			verSrch: 'Mozilla'
		}
	],

	dataOS : [
		{
			str: navigator.platform,
			substr: 'Win',
			id: 'Windows'
		},
		{
			str: navigator.platform,
			substr: 'Mac',
			id: 'Mac'
		},
		{
			str: navigator.platform,
			substr: 'Linux',
			id: 'Linux'
		}
	]
};

BS.com.Dom = function () 
{
	BS.utl.globalEvent.addCB('load', this._onLoad, this);
};

BS.com.Dom.mkidCnt = 0;

BS.com.Dom.prototype = {
	isLoaded:		false,

	_onLoad: function () { this.isLoaded = true; },

	mkid: function () { return 'BSDomID' + BS.com.Dom.mkidCnt++; },

	get: function (id, doc)
	{
		if (id.nodeName) return id;

		if (!doc) doc = document;

		if (!doc.all && !document.getElementById)
			throw 'AssertErr Dom.get';

		if (doc.getElementById) return doc.getElementById(id);
		else if (doc.all && doc.all[id]) return doc.all[id];
		else return null;
	},

	textNode: function (obj, str)
	{
		var node = document.createTextNode(str);
		obj.appendChild(node);
		return node;
	},

	parentByNodeName: function (node, name)
	{
		name = name.toUpperCase();
		for (; node && (node.nodeName != name); node=node.parentNode);
		return node;
	},

	size: function (obj)
	{
		switch (this.getStyle(obj, 'overflow')) {
		case 'scroll': return [obj.scrollWidth, obj.scrollHeight];
		default: return [obj.offsetWidth, obj.offsetHeight];
		}
	},

	//returns size, ignoring scroll attributes ... should probably
	// be folded into size()
	fullsize: function (obj)
	{
		return [obj.offsetWidth, obj.offsetHeight];
	},

	setSize: function (obj, dim)
	{
		_bsDom.setStyle(obj, 'width', dim[0] + 'px');
		_bsDom.setStyle(obj, 'height', dim[1] + 'px');
	},
	
	ofs: function (obj) { return [obj.offsetLeft, obj.offsetTop]; },

	outerOfs: function (obj)
	{
		var			t = this.ofs(obj);
		return BS.utl.xy.add(t, this.size(obj));
	},

	pos: function (obj)
	{
		var left = parseInt(this.getStyle(obj, 'left'));
		var top = parseInt(this.getStyle(obj, 'top'));
		var isRel = (this.getStyle(obj, 'position') == 'relative');

		if (isNaN(left)) left = (isRel) ? 0 : obj.offsetLeft;
		if (isNaN(top)) top = (isRel) ? 0 : obj.offsetTop;

		var r = [left, top];

		/*
		if (BS.utl.browser.isIE &&
		    this.getStyle(obj, 'position') == 'absolute')
			BS.utl.xy.add(r, this.scrollOfs());
		*/

		return r;
	},

	outerPos: function (obj)
	{
		var			t = this.pos(obj);
		return BS.utl.xy.add(t, this.size(obj));
	},

	objOfs: function (obj, top)
	{
		var			ofs = this.ofs(obj);
		var			parent;

		for (parent = obj.offsetParent; parent && parent != top;
		     parent = parent.offsetParent)
			BS.utl.xy.add(ofs, this.ofs(parent));

		return ofs;
	},

	docOfs: function (obj, top)
	{
		var			ofs = this.ofs(obj);
		var			parent;

		for (parent = obj.offsetParent; parent && parent != top;
		     parent = parent.offsetParent)
			BS.utl.xy.add(ofs, this.ofs(parent));

		return ofs;
	},

	outerDocOfs: function (obj)
	{
		var			t = this.pageOfs(obj);
		return BS.utl.xy.add(t, this.size(obj));
	},
	
	pageOfs: function (obj)
	{
		// must be part of document object
		if (obj.parentNode === null ||
		    this.getStyle(obj, 'display') == 'none')
			return false;
		
		var		parent;
		var		pos = [];
		var		box;
		
		if (obj.getBoundingClientRect) {
			// IE
			box = obj.getBoundingClientRect();
			pos = [box.left, box.top];
			var scroll = [Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
				      Math.max(document.documentElement.scrollTop, document.body.scrollTop)];
			return BS.utl.xy.add(pos, scroll);
		}
		else if (document.getBoxObjectFor) {
			// gecko
			box = document.getBoxObjectFor(obj);
			pos = [box.x, box.y];
			var border = [parseInt(this.getStyle(obj, 'borderLeftWidth')),
				      parseInt(this.getStyle(obj, 'borderTopWidth'))];
			BS.utl.xy.add(pos, border);
		}
		else { 
			// safari & opera
			pos = [obj.offsetLeft, obj.offsetTop];
			if ((parent = obj.offsetParent) != obj) {
				for (; parent; parent = parent.offsetParent) {
					pos[0] += parent.offsetLeft;
					pos[1] += parent.offsetTop;
				}
			}
			if (BS.utl.browser.isOpera || 
			    (BS.utl.browser.isSafari &&
			     this.getStyle(obj, 'position') == 'absolute')) {
				pos[0] -= document.body.offsetLeft;
				pos[1] -= document.body.offsetTop;
			} 
		}

		for (parent = obj.parentNode;
		     parent && parent.nodeName != 'BODY' &&
			     parent.nodeName != 'HTML';
		     parent = parent.parentNode) {
			pos[0] -= parent.scrollLeft;
			pos[1] -= parent.scrollTop;
		}

		return pos;
	},

	outerPageOfs: function (obj)
	{
		var			t = this.pageOfs(obj);
		return BS.utl.xy.add(t, this.size(obj));
	},

	isInside: function (a, b, p, ofs)
	{
		var pt = (ofs) ? BS.utl.xy.add(p, ofs) : p;

		if (pt[0] < a[0] || pt[1] < a[1]) return false;
		if (pt[0] > b[0] || pt[1] > b[1]) return false;

		return true;
	},

	scrollOfs: function ()
	{
		if (window.pageXOffset)
			return [window.pageXOffset, window.pageYOffset];
		else if (document.documentElement)
			return [document.body.scrollLeft +
				document.documentElement.scrollLeft, 
				document.body.scrollTop +
				document.documentElement.scrollTop];
		else if (document.body.scrollLeft >= 0)
			return [document.body.scrollLeft,
				document.body.scrollTop];
		else return [0, 0];
	},

	clientSize: function ()
	{
		if (window.innerHeight >= 0)
			return [window.innerWidth, window.innerHeight];
		else if (document.documentElement && document.documentElement.clientHeight)
			return [document.documentElement.clientWidth,
				document.documentElement.clientHeight];
		else if (document.body.clientHeight >= 0)
			return [document.body.clientWidth,
				document.body.clientHeight];
		else return [0, 0];
	},

	docSize: function ()
	{
		if (!document.body) return [0, 0];

		var scrollH = -1, winH = -1, bodyH = -1;
		var marginTop = parseInt(this.getStyle(document.body,
						       'marginTop'), 10);
		var marginBot = parseInt(this.getStyle(document.body,
						       'marginBottom'), 10);
		var docW = -1, bodyW = -1, winW = -1;
		var marginR = parseInt(this.getStyle(document.body,
						     'marginRight'), 10);
		var marginL = parseInt(this.getStyle(document.body,
						     'marginLeft'), 10);
		
		var mode = document.compatMode;

		if ((mode || BS.utl.browser.isIE) && !BS.utl.browser.isOpera ) {
			// (IE, Gecko)
			switch (mode) {
			case 'CSS1Compat':
				// Standards mode
				scrollH = ((window.innerHeight && window.scrollMaxY) ? window.innerHeight+window.scrollMaxY : -1);
				winH = Math.max(document.documentElement.clientHeight, self.innerHeight||-1);
				bodyH = document.body.offsetHeight + marginTop + marginBot;

				docW = document.documentElement.clientWidth;
				bodyW = document.body.offsetWidth + marginL + marginR;
				winW = self.innerWidth || -1;
				break;
			
			default:
				// Quirks mode
				scrollH = document.body.scrollHeight;
				bodyH = document.body.clientHeight;

				bodyW = document.body.clientWidth;
				winWidth = document.body.scrollWidth;
			}
		}
		else {
			// Safari & Opera
			scrollH = document.documentElement.scrollHeight;
			winH = self.innerHeight;
			bodyH = document.documentElement.clientHeight;
			docW = document.documentElement.clientWidth;
			bodyW = document.body.offsetWidth + marginL + marginR;
			winW = self.innerWidth;
		}
	
		return [Math.max(bodyW, docW, winW),
			Math.max(bodyH, scrollH, winH)];
	},

	setPos: function (obj, pt)
	{
		this.setStyle(obj, 'left', pt[0] + 'px');
		this.setStyle(obj, 'top', pt[1] + 'px');
	},

	clrPos: function (obj)
	{
		this.setStyle(obj, 'position', 'static');
		this.setStyle(obj, 'left', 'auto');
		this.setStyle(obj, 'top', 'auto');
	},

	setPageOfs: function (obj, pos, flag)
	{
		// change static to relative positioning
		if (this.getStyle(obj, 'position') == 'static')
			this.setStyle(obj, 'position', 'relative');
		
		var curPos = this.pageOfs(obj);
		if (curPos === false) return false;
		
		var cssPos = this.pos(obj);

		if (pos[0] !== null)
			this.setStyle(obj, 'left',
				      pos[0] - curPos[0] + cssPos[0] + 'px');
		if (pos[1] !== null)
			this.setStyle(obj, 'top',
				      pos[1] - curPos[1] + cssPos[1] + 'px');
	},
	
	clientCenter: function (obj, min, f_no_ofs)
	{
		min = (min) ? min : [10,10];
		var size = this.size(obj);
		var client = this.clientSize();
		var scroll = this.scrollOfs();
		var pos = [0, 0];

		pos[0] = Math.round((client[0] - size[0])/2) + scroll[0];
		pos[1] = Math.round((client[1] - size[1])/2);

 		pos[1] += scroll[1];

		if (!f_no_ofs) pos[1] -= Math.round(client[1]/20);

		if (pos[0] < min[0]) pos[0] = min[0];
		if (pos[1] < min[1]) pos[1] = min[1];

		this.setPageOfs(obj, pos);
	},

	/*!\brief	Executes function on the argument.  Supports array of
	 *		arguments or single argument.
	 * \param	a		argument (can be array of arguments)
	 * \param	f		function
	 * \param	bind		bind scope (optional)
	 */
	_batch: function (a, f, bind)
	{
		if (is_array(a)) return BS.utl.array.foreach(a, f, bind);
		else return f.call(bind, a);
	},

	/*!\brief	Get style.
	 * \param	obj		object
	 * \param	property	property
	 */
	getStyle: function (obj, property)
	{
		var		val = null;
		var		dv = document.defaultView;
	
		if (property == 'opacity' && obj.filters) {
			// IE opacity
			val = 1;
			try {
				val = obj.filters.item('DXImageTransform.Microsoft.Alpha').opacity / 100;
			}
			catch(e) {
				try { val = obj.filters.item('alpha').opacity / 100; }
				catch(e) {}
			}
		}
		else if (obj.style[property]) val = obj.style[property];
		else if (obj.currentStyle && obj.currentStyle[property])
			val = obj.currentStyle[property];
		else if (dv && dv.getComputedStyle) {
			// convert camelCase to hyphen-case
			var str = '';
			for (var i=0, l=property.length; i < l; i++) {
				if (property.charAt(i) == property.charAt(i).toUpperCase()) 
					str += '-' + property.charAt(i).toLowerCase();
				else str += property.charAt(i);
			}

			if (dv.getComputedStyle(obj, '') &&
			    dv.getComputedStyle(obj, '').getPropertyValue(str))
				val = dv.getComputedStyle(obj, '').getPropertyValue(str);
		}

		return val;
	},

	/*!\brief	Set style.
	 * \param	obj		object
	 * \param	property	property
	 * \param	val		value
	 */
	setStyle: function (obj, property, val)
	{
		if (!obj) throw 'BS.com.setStyle: null object';

		switch (property) {
		case 'opacity':
			if (BS.utl.browser.isIE &&
			    typeof obj.style.filter == 'string') {
				obj.style.filter = 'alpha(opacity=' +
					(val * 100) + ')';
				if (!obj.currentStyle ||
				    !obj.currentStyle.hasLayout)
					obj.style.zoom = 1;
			}
			else {
				obj.style.opacity = val;
				obj.style['-moz-opacity'] = val;
				obj.style['-khtml-opacity'] = val;
			}
			break;
		// IE scroll compatibility
		case 'position': if (BS.utl.browser.isIE) obj.style.zoom = 1;
		default: try { obj.style[property] = val } catch (e) { };
		}
	},

	setDisplay: function (obj, f)
	{
		BS.utl.dom.setStyle(obj, 'display', (f) ? 'block' : 'none');
	},

	setVis: function (obj, f)
	{
		BS.utl.dom.setStyle(obj, 'visibility', (f) ?
				    'visible' : 'hidden');
	},

	toggleDisplay: function (obj)
	{
		obj = _bsDom.get(obj);
		var f = (_bsDom.getStyle(obj, 'display') == 'none');
		this.setDisplay(obj, f);
	},

	/*!\brief	Returns true if DOM object contains class name.
	 * \param	obj		object
	 * \param	cnm		class name
	 * \return	boolean
	 */
	hasClass: function (obj, cnm)
	{
		var f = function (obj)
		{
			var re = new RegExp('(?:^|\\s+)' + cnm + '(?:\\s+|$)');
			return re.test(obj['className']);
		};

		return this._batch(obj, f, this);
	},
   
	/*!\brief	Adds class name to DOM object if it does not exist.
	 * \param	obj		object
	 * \param	cnm		class name
	 */
	addClass: function (obj, cnm)
	{
		var f = function (obj)
		{
			if (this.hasClass(obj, cnm)) return;
			if (!empty(obj['className'])) cnm = ' ' + cnm;
			obj['className'] += cnm;
		};
	 
		this._batch(obj, f, this);
	},

	/*!\brief	Adds class name array to DOM object (wrapper).
	 * \param	obj		object
	 * \param	cnmA		class name array
	 */
	addClassArr: function (obj, cnmA)
	{
		for (var i=0, l=cnmA.length; i<l; i++)
			this.addClass(obj, cnmA[i]);
	},

	/*!\brief	Delete class name from DOM object if it exists.
	 * \param	obj		object
	 * \param	cnm		class name
	 */
	delClass: function (obj, cnm)
	{
		var f = function (obj)
		{
			if (!this.hasClass(obj, cnm)) return;
			var a = obj['className'].split(' ');
			var str = '';
			for (var i = 0; i < a.length; i++) {
				if (a[i] == cnm) continue;
				if (!empty(str)) str += ' ';
				str += a[i];
			}
			obj['className'] = str;
		};
	 
		this._batch(obj, f, this);
	},

	setClass: function (obj, cnm, f)
	{
		if (f) this.addClass(obj, cnm);
		else this.delClass(obj, cnm);
	},
	
	/*!\brief	Checks whether p is inside of the area of the node
	 * \param	p		point
	 * \param	node		dom object
	 */
	inNode: function (p, node)
	{
		var pos = this.pageOfs(node);
		var size = this.size(node);
		
		return pos[0] <= p[0] && p[0] <= pos[0] + size[0] && 
			pos[1] <= p[1] && p[1] <= pos[1] + size[1];
	}
};

/*!\brief	Event class that provides a portability layer.
 * \note	single instantiation only
 */
BS.com.Event = function ()
{
	// function array for attach/detach
	this.fA = [];
};

BS.com.Event.prototype = {
	/*!\brief	Destructor (pseudo) */
	_delete: function ()
	{
		this.detachAll();
		delete this.fA;
	},

	/*!\brief	Attach an event handler to an object.  A caching layer
	 *		is in place for the detach method (to locate funcT).
	 * \param	obj		DOM object
	 * \param	type		event type
	 * \param	func		function to attach
	 * \param	bind		bind scope (optional)
	 * \param	d		data (optional)
	 */
	attach: function (obj, type, func, bind, d)
	{
		var scope = bind ? bind : obj;
		var funcT = function (e)
		{
			return func.call(scope, BS.com.Event.getEvent(e), d);
		};

		this.fA[this.fA.length] = [obj, type, func, funcT, scope, d];

		// HACK: fix for stupid IE; there's probably a loop
		// using the "for i in" syntax somewhere upstream
		if (!obj) return;

		if (obj.addEventListener)
			obj.addEventListener(type, funcT, false);
		else if (obj.attachEvent) obj.attachEvent('on' + type, funcT);
		else throw 'AssertErr Event.attach';
	},

	/*!\brief	Detach event handler based on offset.
	 * \param	i		offset
	 */
	_detach: function (i)
	{
		var			obj = this.fA[i][0];

		// HACK: fix for stupid IE; there's probably a loop
		// using the "for i in" syntax somewhere upstream
		if (!obj) return;

		if (obj.removeEventListener)
			obj.removeEventListener(this.fA[i][1], this.fA[i][3],
						false);
		else if (obj.detachEvent)
			obj.detachEvent('on' + this.fA[i][1], this.fA[i][3]);
		else throw 'AssertErr Event.detach';

		this.fA[i][0] = this.fA[i][3] = this.fA[i][4] = null;
		this.fA.splice(i, 1);
	},

	/*!\brief	Detach an event handler from an object.
	 * \param	obj		DOM object
	 * \param	type		event type
	 * \param	func		function to detach
	 */
	detach: function (obj, type, func)
	{
		var			t;
		for (i=0, l=this.fA.length; i<l; i++) {
			t = this.fA[i];
			if (t[0] != obj || t[1] != type || t[2] != func)
				continue;
			break;
		}

		if (i == l) return false;

		this._detach(i);

		return true;
	},

	/*!\brief	Detach all event handlers. */
	detachAll: function ()
	{
		var			t;
		for (var i=0, l=this.fA.length; i<l; i++) {
			t = this.fA[i];

			// HACK: for stupid IE
			if (!t[0]) continue;

			if (t[0].removeEventListener)
				t[0].removeEventListener(t[1], t[3], false);
			else if (t[0].detachEvent)
				t[0].detachEvent('on' + t[1], t[3]);
			else throw 'AssertErr Event.detachAll';

			delete this.fA[i][3];
		}
		delete this.fA;
		this.fA = [];
	},

	/*!\brief	Detach multiple event handlers based on matching data.
	 * \param	data		data
	 */
	detachData: function (data)
	{
		var			i, l, t = [];

		for (i=0, l=this.fA.length; i<l; i++) {
			if (this.fA[i][4] != data) continue;
			t.push(i);
		}

		for (i=0, l=t.length; i<l; i++) this._detach(t[i] - i);
	},

	/*!\brief	Executes setInterval() with object support.
	 * \param	ms		milliseconds
	 * \param	func		function
	 * \param	bind		bind scope (optional)
	 * \param	d		data (optional)
	 */
	setInterval: function (ms, func, bind, d)
	{
		var t = function () { return func.call(bind, d); };
		return setInterval(t, ms);
	},
	
	/*!\brief	Executes setTimeout() with object support.
	 * \param	ms		milliseconds
	 * \param	func		function
	 * \param	bind		bind scope (optional)
	 * \param	d		data (optional)
	 */
	setTimeout: function (ms, func, bind, d)
	{
		var t = function () { return func.call(bind, d); };
		return setTimeout(t, ms);
	},
	
	/*!\brief	Returns KEY code for a key press event.
	 * \param	e		event
	 * \return	key code
	 */
	getKeyCode: function (e)
	{
		var code = e.keyCode || e.which;

		// map unicode cursor codes in safari
		if (e.type == 'keypress' && BS.utl.browser.isSafari) {
			switch (code) {
			case 63232:  return 38;
			case 63233:  return 40;
			case 63234:  return 37;
			case 63235:  return 39;
			}
		}

		// ignore function keys
		if ((code >= 112 && code <= 123) && !e.charCode)
			return null;

		return code;
	},

	/*!\brief	Returns CHARACTER code for a key press event.
	 * \param	e		event
	 * \return	character code
	 */
	getCharCode: function (e)
	{
		return e.charCode ||
		       ((e.type == 'keypress' || e.type == 'keydown' ||
			 e.type == 'keyup') ? e.keyCode : 0) ||
			e.which;
	},

	/*!\brief	Returns scroll position as an array.
	 * \return	[ scrollLeft, scrollTop ]
	 */
	_getScroll: function ()
	{
		var dd = document.documentElement, db = document.body;
		if (dd && dd.scrollTop) return [dd.scrollLeft, dd.scrollTop];
		else if (db) return [db.scrollLeft, db.scrollTop];
		else return [0, 0];
	},

	/*!\brief	Returns page X coordinate for event.
	 * \param	e		event
	 */
	getX: function (e)
	{
		var			x = e.pageX;

		if (!x && x !== 0) {
			x = e.clientX || 0;
		}

		return x;
	},

	/*!\brief	Returns page Y coordinate for event.
	 * \param	e		event
	 */
	getY: function (e)
	{
		var			y = e.pageY;

		if (!y && y !== 0) {
			y = e.clientY || 0;
		}

		return y;
	},

	/*!\brief	Return page X, Y cordinates for an event.
	 * \param	e		event
	 */
	getXY: function (e)
	{
		return [this.getX(e), this.getY(e)];
	},

	/*!\brief	Returns event target.
	 * \param	e		event
	 * \param	textParent	parent if text (default false)
	 * \return	element
	 */
	getTarget: function (e, textParent)
	{
		var			t = e.target || e.srcElement;
		if (textParent && t && t.nodeName == '#text')
			return t.parentNode;
		return t;
	},

	/*!\brief	Return event related target.
	 * \param	e		event
	 * \return	element (related target)
	 */
	getRelatedTarget: function (e)
	{
		var			t = e.relatedTarget;

		if (!t) {
			if (e.type == 'mouseout') t = e.toElement;
			else if (e.type == 'mouseover') t = e.fromElement;
		}

		return t;
	},

	/*!\brief	Prevent default action of browser for event.
	 * \param	e		event
	 */
	preventDefault: function (e)
	{
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
	},

	/*!\brief	Stop bubble phase for event.
	 * \param	e		event
	 */
	stopPropagation: function (e)
	{
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	},

	disableSelect: function (obj)
	{
		if (BS.utl.browser.isIE || _bsBrowser.isSafari)
			obj.onselectstart=function(){return false};
		else if (BS.utl.browser.agent == 'Firefox') 
			BS.utl.dom.setStyle(obj, 'MozUserSelect', 'none');
		else 
			obj.onmousedown=function(){return false};

		BS.utl.dom.setStyle(obj, 'cursor', 'default');
	}
};

/*!\brief	Returns event in a consistent manner.
 * \param	e		event
 * \return	event
 */
BS.com.Event.getEvent = function (e)
{
	if (!e) e = window.event;

	if (e.target) {
		if (e.target.nodeType == 3) e.target = e.target.parentNode;
	}
	else if (e.srcElement) e.target = e.srcElement;

	return e;
};

/*!\brief	CustomEvent class that represents a custom event type and can
 *		be associated with one or more Callback.
 * \param	type		event type
 * \param	bind		bind scope (default window)
 */
BS.com.CustomEvent = function (type, bind)
{
	this.type = type;
	this.scope = bind || window;
	this.cbA = [];
};

BS.com.CustomEvent.prototype = {
	intvlID:		null,

	/*!\brief	Add callback function.
	 * \param	f		function
	 * \param	bind		bind scope (optional)
	 * \param	d		data (optional)
	 */
	addCB: function (f, bind, d)
	{
		this.cbA.push(new BS.com.Callback(f, bind, d));
	},

	/*!\brief	Delete callback function based on function and data.
	 * \param	f		function
	 * \param	bind		bind scope (optional)
	 * \param	d		data (optional)
	 */
	delCB: function (f, bind, d)
	{
		var			cb, found = false;

		for (var i=0, l=this.cbA.length; i<l; i++) {
			cb = this.cbA[i];
			if (cb.f != f || cb.bind != bind || cb.d != d)
				continue;

			cb.bind = cb.d = cb.f = null;
			this.cbA.splice(i, 1);
			found = true;
			i--;
			l--;
		}

		return found;
	},

	/*!\brief	Delete all callback functions. */
	delCBAll: function ()
	{
		BS.utl.event.detachData(this);

		var			t;
		for (var i=0, l=this.cbA.length; i<l; i++) {
			t = this.cbA[i];
			t.bind = t.d = t.f = null;
			delete this.cbA[i];
		}
		this.cbA = [];
	},

	/*!\brief	Destructor (pseudo) */
	_delete: function () { this.delCBAll(); },

	/*!\brief	Execute callback functions.  The callback is executed
	 *		in the Callback::bind scope if not null otherwise, the
	 *		scope is CustomEvent::scope.  The callback function is
	 *		effectively called as follows:
	 *
	 *			cb(CustomEvent::type, Callback::d, arguments)
	 *			arguments[0]		target
	 *			arguments[1]		attach data (optional)
	 */
	exec: function ()
	{
		var			cb, r, scope;
		for (var i=0, l=this.cbA.length; i<l; i++) {
			cb = this.cbA[i];
			scope = cb.bind ? cb.bind : this.scope;
			r = cb.f.call(scope, this.type, cb.d, arguments);
		}

		return r;
	},

	/*!\brief	Attach to an event handler of an object.
	 * \param	obj		DOM object
	 * \param	type		event type
	 * \param	d		data (optional)
	 */
	attach: function (obj, type, d)
	{
		return BS.utl.event.attach(obj, type, this.exec, this, d);
	},

	/*!\brief	Detach from an event handler of an object.
	 * \param	obj		DOM object
	 * \param	type		event type
	 */
	detach: function (obj, type)
	{
		return BS.utl.event.detach(obj, type, this.exec);
	},

	/*!\brief	Attach to setInterval().
	 * \param	ms		milliseconds
	 * \param	d		data (optional)
	 */
	setInterval: function (ms, d)
	{
		this.clearInterval();
		this.intID = BS.utl.event.setInterval(ms, this.exec, this, d);
		return this.intID;
	},

	/*!\brief	Attach to setTimeout().
	 * \param	ms		milliseconds
	 * \param	d		data (optional)
	 */
	setTimeout: function (ms, d)
	{
		return BS.utl.event.setTimeout(ms, this.exec, this, d);
	},

	/*!\brief	Detach from setInterval(). */
	clearInterval: function () 
	{
		if (!this.intID) return;
		window.clearInterval(this.intID);
		this.intID = null;
	},

	toString: function () { return 'CustomEvent: ' + this.type; }
};

BS.com.Debug = function () {};

BS.com.Debug.prototype = {
	_logOpt: function (opt, c)
	{
		if (!opt || typeof(opt) != 'string') return false;
		return (opt.indexOf(c) != -1)
	},

	/*!\brief	Log message if textarea is set.
	 * \param	s		message
	 * \param	opt		option string
	 *				c: clear textarea
	 *				n: no newline
	 */
	log: function (s, opt)
	{
		if (!this._ta) this.setTextarea();

		var			t;

		if (s && typeof s == 'object') t = BS.utl.array.toString(s);
		else t = s;

		if (this._logOpt(opt, 'c')) this._ta.value = '';

		if (typeof(t) != 'undefined') {
			this._ta.value += t;
			if (!this._logOpt(opt, 'n')) this._ta.value += '\n';
		}
	},

	/*!\brief	Set textarea.  If null, create textarea.
	 * \param	taID		textarea ID
	 * \note	requires document.body
	 */
	setTextarea: function (taID)
	{
		if (taID) this._ta = BS.utl.dom.get(taID);
		else {
			this._ta = BS.utl.mm.domNew(document.body, 'form');
			this._ta.innerHTML = '<input type=reset><br>' +
				'<textarea id=' +
				(this._ta = BS.utl.dom.mkid()) +
				' cols=80 rows=20></textarea>';
			this._ta = BS.utl.dom.get(this._ta);
		}
		this._ta.value = '';
	}
};

/*!\brief	Memory management class that implements a pseudo destructor
 *		mechanism.  If the object is a DOM node, it is automatically
 *		removed from the parentNode.  Precedence is given to non DOM
 *		node objects in the delete phase.
 * \param	cnm		CSS class name
 */
BS.com.Delete = function (cnm)
{
	this._cnm = cnm;
	this._delA = [];
	this._param = [];
};

/*!\brief	Hover compatibility callback. */
BS.com.Delete._hoverCB = function ()
{
	var			t = BS.utl.event.getTarget(arguments[0]);
	if (arguments[0].type == 'mouseover')
		BS.utl.dom.addClass(t, 'bsHover');
	else BS.utl.dom.delClass(t, 'bsHover');
};

BS.com.Delete.prototype = {
	/*!\brief	Add item for later cleanup.
	 * \param	i		item
	 */
	add: function (i) { this._delA.push(i); },

	_del: function (i)
	{
		if (!i || !i._delete) return;

		i._delete();
		i._delete = null;

		delete i;
	},

	/*!\brief	Execute pseudo-destructor and delete for item.
	 * \param	obj		item
	 */
	del: function (obj)
	{
		var			i, l;

		this._del(obj);

		for (i=0, l=this._delA.length; i<l; i++) {
			if (this._delA[i] != obj) continue;
			this._delA.splice(i, 1);
			return;
		}

		for (i=0, l=this._domA.length; i<l; i++) {
			if (this._domA[i] != obj) continue;
			this._domA.splice(i, 1);
			return;
		}
	},

	/*!\brief	Execute pseudo-destructor and delete for
	 *		all items in the specified array.
	 * \param	iA		item array
	 */
	delArr: function (iA)
	{
                if (iA)
		    for (var i=0, l=iA.length; i<l; i++) this._del(iA[i]);
	             //for (var i in iA) this._del(iA[i]);

		delete iA;
	},

	/*!\brief	Returns object for specified object type (variable
	 *		arguments) and caches in this._delA.
	 * \param	obj		object constructor
	 * \return	object
	 */
	oNew: function (obj)
	{
		var t = [];
		for (var i=1, l=arguments.length; i<l; i++)
			t.push(arguments[i]);
		t = BS.utl.object.create(obj, t);
		this.add(t);
		return t;
	},

	/*!\brief	Returns new CustomEvent and caches the object in
	 *		this._delA.
	 * \param	type		event type
	 * \param	oScope		object scope (default window)
	 */
	ceNew: function ()
	{
		var t = BS.utl.object.create(BS.com.CustomEvent, arguments);
		this.add(t);
		return t;
	},

	/*!\brief	Returns DOM object for specified object id, sets
	 *		primary class name and appends optional class name.
	 * \param	e		object or object id
	 * \param	cnm		class name (optional)
	 * \return	DOM object
	 */
	domGet: function (e, cnm)
	{
		e = BS.utl.dom.get(e);

		if (!e.nodeName) throw 'AssertErr BS.com.Delete.domGet';

		if (this._cnm) BS.utl.dom.addClass(e, this._cnm);

		if (this._param['className'])
			BS.utl.dom.addClass(e, this._param['className']);

		if (cnm) BS.utl.dom.addClass(e, cnm);

		return e;
	},

	/*!\brief	Appends DOM object for specified node name, sets
	 *		primary class name and appends optional class name.
	 * \param	node		append node
	 * \param	name		node name
	 * \param	cnm		class name (optional)
	 * \return	DOM object
	 */
	domNew: function (node, name, cnm)
	{
		var e = document.createElement(name);

		if (this._cnm) BS.utl.dom.addClass(e, this._cnm);

		if (this._param['className'])
			BS.utl.dom.addClass(e, this._param['className']);

		if (cnm) BS.utl.dom.addClass(e, cnm);

		if (node) node.appendChild(e);

		return e;
	},

	/*!\brief	Hover wrapper for this.domNew(). */
	domNewHover: function (node, name, cnm)
	{
		var			e = this.domNew(node, name, cnm);
		BS.utl.event.attach(e, 'mouseover', BS.com.Delete._hoverCB);
		BS.utl.event.attach(e, 'mouseout', BS.com.Delete._hoverCB);
		return e;
	},

	/*!\brief	Sets parameter value for specified name.
	 *		className	CSS class name
	 * \param	name		name
	 * \param	value		value
	 */
	setParam: function (name, value)
	{
		this._param[name] = value;
	},

	/*!\brief	Pseudo destructor. */
	_delete: function ()
	{
		this._delA.reverse();
		this.delArr(this._delA);
		delete this._param;
	}
};

/*!\brief	Global event handler that attaches to root-most elements.
 * \note	single instantiation only
 */
BS.com.GlobalEvent = function () { this.ceA = []; };

BS.com.GlobalEvent.prototype = {
	_delete: function ()
	{
		//for (var i in this.ceA) {
		for (var i=0, l=this.ceA.length; i<l; i++) {
			if (this.ceA[i]._delete)
				this.ceA[i]._delete();
			delete this.ceA[i];
		}
	},

	/*!\brief	Returns cached CustomEvent for specified type.
	 * \param	type		event type
	 * \return	CustomEvent
	 */
	_getCE: function (type)
	{
		if (!this.ceA[type]) {
			this.ceA[type] = new BS.com.CustomEvent(type + 'Evt');

			var			obj;
			switch (type) {
			case 'load':
			case 'resize':
			case 'unload': obj = window; break;
			case 'keydown':
			case 'keyup':
			case 'keypress':
				obj = document; break;
			default: obj = document.body; break;
			}

			this.ceA[type].attach(obj, type);
		}

		return this.ceA[type];
	},

	/*!\brief	Adds callback for specified type.
	 * \param	type		event type
	 * \param	f		function
	 * \param	bind		bind scope (optional)
	 * \param	data		data (optional)
	 */
	addCB: function (type, f, bind, d)
	{
		this._getCE(type).addCB(f, bind, d);
	},

	/*!\brief	Deletes callback for specified type.
	 * \param	type		event type
	 * \param	f		function
	 * \param	data		data (optional)
	 */
	delCB: function (type, f, d)
	{
		this._getCE(type).delCB(f, d);
	}
};

BS.com.Location = function () { this.location = document.location; };

BS.com.Location.prototype = {
	/*!\brief	Returns array of the location path components. */
	getPathnameArr: function ()
	{
		if (!this.pathnameA) {
			this.pathnameA = this.location.pathname.split('/');
			this.pathnameA.shift();
		}

		return this.pathnameA;
	},

	/*!\brief	Returns the location search string. */
	getSearch: function ()
	{
		return (this.location.search) ?
			this.location.search.substr(1) : null;
	},

	/*!\brief	Returns array of the location search string components
	 *		URL decoded.
	 * \note	no array support for multi form vars
	 */
	getSearchArr: function ()
	{
		var			s;
		if (!(s = this.getSearch())) return null;
		return BS.utl.array.urldecode(s);
	},
	
	getHash: function ()
	{
		return (this.location.hash) ?
			this.location.hash.substr(1) : null;
	},
	
	getHashArr: function ()
	{
		var			s;
		if (!(s = this.getHash())) return null;
		return BS.utl.array.urldecode(s);
	}
};

BS.com.Window = function () {};

BS.com.Window.prototype = {
	open: function (url, dim, attr, name)
	{
		var args = "width=" + dim[0] + ",height=" + dim[1];

		if (attr && ((typeof attr) == "string")) {
			args += (attr.indexOf("menubar") != -1 ) ?
				",menubar=yes" : ",menubar=no";
			args += (attr.indexOf("noscroll") != -1 ) ?
				",scrollbars=no" : ",scrollbars=yes";
			args += (attr.indexOf("resize") != -1) ?
				",resizable=yes" : ",resizeable=no";
			args += (attr.indexOf("tool") != -1) ?
				",toolbar=yes" : ",toolbar=no";
			args += (attr.indexOf("loc") != -1) ?
				",location=yes" : ",location=no";
			args += (attr.indexOf("status") != -1) ?
				",status=yes" : ",status=no";
		}
		else args += ",menubar=no,scrollbars=yes,resizeable=no,toolbar=no,location=no,status=no";

		if (name === true)
			name = 'Window' + Math.floor(100000*Math.random());
		else if (!name) name = 'Window';

		var w =  window.open(url, name, args);
		w.focus();
		return w;
	},
	
	openLink: function(url, dim, attr, name)
	{
		this.open(url, dim, attr, name);
	}
};

BS.com.Form = {};

BS.com.Form.Select = function (obj, name, first, className)
{
	if (!obj) obj = null;

	if (!className) className = null;
	
	this.mm = new BS.com.Delete();
	this.sel = this.mm.domNew(obj, 'select', className);
	this.sel.setAttribute('name', name);

	if (first) {
		this.optMM = new BS.com.Delete();
		tmp  = this.optMM.domNew(this.sel, 'option');
		tmp.value = first[0]; tmp.text = first[1];
	}
};

BS.com.Form.Select.prototype = {
	_delete: function () { this.mm._delete(); },

	clear: function ()
	{
		if (this.optMM) {
			for (var t=this.sel; t.hasChildNodes();
			     t.removeChild(t.firstChild));
			this.optMM._delete();
			delete this.optMM;
		}

		this.optMM = new BS.com.Delete();
	},
	
	load: function (arr, f_concat)
	{
		var tmp;

		if (!this.optMM || !f_concat) {
			this.clear();
		}

		for (var i = 0, l = arr.length; i<l; i++) {
			tmp = this.optMM.domNew(this.sel, 'option', (arr[i][2] ? arr[i][2] : null));
			tmp.value = arr[i][0];
			tmp.text = arr[i][1];
		}

		this.sel.selectedIndex = 0;
	},
	
	setVal: function (val) { BS.utl.form.setValue(this.sel, val); },

	getVal: function () { return BS.utl.form.getValue(this.sel); },
	getText: function ()
	{
	 	return this.sel.options[this.sel.selectedIndex].text;
	},
	
	setStyle: function (prop, val)
	{
		BS.utl.dom.setStyle(this.sel, prop, val);
	},

	addClass: function (cn) { BS.utl.dom.addClass(this.sel, cn); },

	disable: function (flag) { this.sel.disabled = flag; },
	
	reset: function () { this.sel.selectedIndex = 0; }
};

BS.com.Button = function (rootObj, cls, txt)
{
	this.obj = _bsMm.domNew(null, "input", cls);
	this.obj.setAttribute('type', 'button');
	this.obj.setAttribute('value', txt);
	rootObj.appendChild(this.obj);
	this.ceA = [];
}

BS.com.Button.prototype = {
	_delete: function ()
	{
		_bsMm.delArr(this.ceA);
	},

	attach: function (type, func, scope, data)
	{
		var ce = _bsMm.ceNew();
		ce.addCB(func, scope, data);
		ce.attach(this.obj, type);
		this.ceA.push({ce:ce, type:type});
	},

	disable: function (val)
	{
		if (val) this.obj.setAttribute('disabled', true);
		else this.obj.removeAttribute('disabled');
	},

	setLabel: function (str)
	{
		this.obj.setAttribute('value', str);
	}
};

BS.utl.gvA = [];
BS.utl.gvAi = 0;
BS.utl.mkGvId = function () { return BS.utl.gvAi++; };

BS.utl.mkGvStr = function (obj)
{
	var gvid = BS.utl.mkGvId();
	BS.utl.gvA[gvid] = obj;
	return 'BS.utl.gvA[' + gvid + ']';
}

BS.utl.object = {};

BS.utl.object.clone = function (obj, noRecursion)
{
	if (!obj || typeof obj != 'object') return obj;

	var newObj = (obj.constructor == Array) ? [] : {};

	for (var i in obj)
		newObj[i] = noRecursion ? obj[i] : BS.utl.object.clone(obj[i]);

	return newObj;
};

/*!\brief	New object creation using argument array.
 * \param	obj		object
 * \param	argA		argument array
 */
BS.utl.object.create = function (obj, argA)
{
	var t = function (tA) { obj.apply(this, tA); };
	t.prototype = obj.prototype;
	return new t(argA);
};

/*!\brief	Inherit class definition.  This function must be run after the
 *		definition of the parent/child constructors and prototypes.
 *		The child constructor uses the Function.call(this, ...)
 *		method to call the parent constructor.
 * \param	parent		parent class
 * \param	child		child class
 */
BS.utl.object.inherit = function (parent, child)
{
	if (!parent) throw 'BS.utl.object.inherit missing parent class';
	var tmp = function () {};
	tmp.prototype = parent.prototype;
	var old = function () {};
	old.prototype = child.prototype;
	child.prototype = new tmp;
	old.prototype = new old;
	for (var i in old.prototype) child.prototype[i] = old.prototype[i];
};

BS.utl.object._cacheA = [];
BS.utl.object.cache = function (oName)
{
	var			a = BS.utl.object._cacheA;

	if (!isset(a[oName])) 
		a[oName] = BS.utl.mm.oNew(eval(oName));

	return a[oName];
}

BS.utl.mm = new BS.com.Delete;
BS.utl.event = BS.utl.mm.oNew(BS.com.Event);
BS.utl.browser = BS.utl.mm.oNew(BS.com.Browser);

BS.utl.array = {};

/*!\brief	Copy array.
 * \param	a		Array
 */
BS.utl.array.copy = function (a)
{
	var			r = [];

	if (a.constructor == arguments.constructor)
		a = Array.prototype.slice.call(a);

	for (var i in a) r[i] = a[i];

	return r;
};

/*!\brief	Calls callback function for each member of the array with an
 *		optional data variable.  The callback is called with a single
 *		element of the array and the optional data.
 * \param	a		Array
 * \param	cb		callback
 * \param	d		data (optional)
 * \param	bind		bind scope (optional)
 */
BS.utl.array.foreach = function (a, cb, bind)
{
	if (bind) f = function (aT, dT) { cb.call(bind, aT, dT); };
	else f = cb;

	for (var d=null, i=0, l=a.length; i<l; i++) d = f(a[i], d);

	if (bind) delete f;

	return d;
};

/*!\brief	Returns length of associative array or object
 * \param	a		Array
 */
BS.utl.array.length = function (a)
{
	var n = 0;
	for (var i in a) n++;
	return n;
};

/*!\brief	Reduces Array by removing [0] only elements.  Accepts an
 *		optional max depth parameter.
 * \param	arr		Array
 * \param	d		max depth (optional)
 * \return	Array
 */
BS.utl.array.reduce = function (arr, d)
{
	var			arF = BS.utl.array.reduce, i;

	if (typeof d == 'undefined') d = -1;

	if (!d) return arr;
	else if (d > 0) d--;

	if (typeof arr != 'object') return arr;
	if (arr.length == 1) return arr = arF(arr[0], d);

	for (i in arr) arr[i] = arF(arr[i], d);

	return arr;
};

/*!\brief	Calls BS.utl.array.reduce() for every member of array.
 * \param	arr		Array
 * \return	Array
 */
BS.utl.array.reduceArr = function (arr)
{
	for (var i in arr) arr[i] = BS.utl.array.reduce(arr[i]);
	return arr;
};

/*!\brief	Converts Array to a String.
 * \param	arr		Array
 * \param	d		depth (internal)
 * \return	String
 */
BS.utl.array.toString = function (arr, d)
{
	var			i, j = 0, s = '', t;

	if (typeof d == 'undefined') d = 0;

	if (arr === null || arr.constructor == String)
		return (arr === null ? 'null' : '"' + arr + '"') + '\n';

	for (i in arr) j++;
	if (!j && arr.length) arr = Array.prototype.slice.call(arr);

	if (d && arr.constructor != Array) return arr.constructor.toString();

	for (i in arr) {
		for (j=0; j<d; j++) s += '.       ';
		s += '[' + i + ']';
		t = arr[i];
		if (t !== null && typeof t == 'object')
			s += '\n' + BS.utl.array.toString(t, d+1);
		else {
			s += ' ';
			if (t === null) s += 'null\n';
			else if (typeof(t) == 'string') s += '"' + t + '"\n';
			else s += t + '\n';
		}
	}

	return s;
};

/*!\brief	Deletes empty members.
 * \param	a		Array
 */		
BS.utl.array.trim = function (a)
{
	for (var i in a) { if (empty(a[i])) delete a[i]; }
	return a;
};

/*!\brief	Returns an array representation of the URL encoded string of
 *		name/value pairs.  The form variable array representation
 *		is based on the PHP interpretation.
 * \param	s		URL string
 * \return	array
 */
BS.utl.array.urldecode = function (s)
{
	var			a = s.split('&'), r = [], t = [];
	var			i, l, nA, nI, nL;
	var			de = BS.utl.string.urldecode;
	var			na = BS.utl.form._getNameArr;

	for (i=0, l=a.length; i<l; i++) {
		t = a[i].split('=', 2);
		for (nA=na(de(t[0])), nI=0, nL=nA.length, nT=r; nI<nL-1;
		     nI++) {
			if (typeof(nT[nA[nI]]) == 'undefined' ||
			    nT[nA[nI]].constructor != Array)
				nT[nA[nI]] = [];
			nT = nT[nA[nI]];
		}

		nT[nA[nI]] = de(t[1]);
	}

	return r;
};

/*!\brief	Returns a string representing the specified array as a form
 *		URL encoded string.  The form variable array representation
 *		is based on the PHP interpretation.
 * \param	arr		array
 * \param	name		name (optional for array recursion)
 * \return	URL string
 */
BS.utl.array.urlencode = function (arr, name)
{
	var			s = null, t;
	var			aeF = BS.utl.array.urlencode;
	var			seF = BS.utl.string.urlencode;

	for (var i in arr) {
		if (s) s += '&';
		else s = '';

		t = name ? (name + '[' + i + ']') : i;

		if (typeof arr[i] == 'object')
			s += !empty(arr[i]) ? aeF(arr[i], t) : (seF(t) + '=');
		else s += (seF(t) + '=' + seF(arr[i]));
	}

	return s;
};

/*!\brief	Tests if array contains specified element
 * \param	array		array
 * \param	obj		element
 * \return	boolean
 */
BS.utl.array.inArray = function (arr, obj)
{
	if (empty(arr)) return false;

	for (var i=0, l=arr.length; i < l; i++) if (arr[i] == obj) return true;
	return false;
};

BS.utl.debug = new BS.com.Debug;
var log = function (a, b) { BS.utl.debug.log(a, b); };

BS.utl.globalEvent = BS.utl.mm.oNew(BS.com.GlobalEvent);
BS.utl.globalEvent.addCB('unload', BS.utl.mm._delete, BS.utl.mm);

BS.utl.dom = new BS.com.Dom;

BS.utl.cookie = {};

BS.utl.cookie.get = function (n)
{
	var			c = document.cookie, i, j;
	n = escape(n);

	if ((i = c.indexOf(n + '=')) < 0) return null;
	
	i += n.length + 1;

	if ((j = c.indexOf(';', i)) < 0) j = c.length;

	return unescape(c.substring(i, j));
};

BS.utl.form = {};

/*!\brief	Return the form element of the specified name. Needed to get
 *		around a stupid IE problem with dynamically-generated form
 *		elements.
 * \param	fObj		form object
 * \param	n		element name
 */
BS.utl.form.getElem = function (fObj, n)
{
	if (BS.utl.browser.isIE) {
		var el = [];
		for (var e, i=0, l=fObj.elements.length; i<l; i++) {
			e = fObj.elements[i];
			if (e.name == n) el.push(e);
		}
		switch (el.length) {
		case 0: return null;
		case 1: return el[0];
		default: return el;
		}		
	}
	else {
		if (isset(fObj.elements[n])) return fObj.elements[n];
		return null;
	}
};

/*!\brief	Return the value of the specified form element.
 * \param	fe		form element
 */
BS.utl.form.getValue = function (fe)
{
	switch (fe.type) {
	case 'hidden':
	case 'text':
	case 'password':
	case 'file':
	case 'textarea': return fe.value;
	case 'checkbox':
	case 'radio':
		if (fe.checked) return fe.value;
		break;
	case 'select-one':
		if (fe.selectedIndex < 0) fe.selectedIndex = 0;
		if (fe.length) return fe[fe.selectedIndex].value;
		break;
	case 'select-multiple':
		var			r = null;
		for (var i=0, l=fe.length; i<l; i++) {
			if (!fe[i].selected) continue;
			if (!r) r = [];
			r.push(fe[i].value);
		}
		return r;
	case 'button':
	case 'submit':
		break;
	default: throw 'AssertErr: unimplemented form element: ' + fe.type;
	}

	return null;
};

/*!\brief	Set the value of the specified form element.
 * \param	fe		form element
 * \param	v		value
 * \param	s		skip IE setTimeout() workaround (default false)
 */
BS.utl.form.setValue = function (fe, v, s)
{
	var			i, l, t;

	try {
		t = fe.type;
		if (!isset(t) && isset(fe.length)) t = fe[0].type;

		switch (t) {
		case 'checkbox':
			if (v.constructor == Array) {
				fe.checked = false;
				for (i in v) {
					if (fe.value == v[i]) {
						fe.checked = true;
						break;
					}
				}
			}
			else fe.checked = (fe.value == v);
			break;
		case 'hidden':
		case 'text':
		case 'textarea':
			fe.value = v;
			break;
		case 'radio':
			if (fe.length) {
				for (i=0, l=fe.length; i<l; i++)
					fe[i].checked = (fe[i].value == v);
			}
			else fe.checked = (fe.value == v);
			break;
		case 'select-one':
		case 'select-multiple':
			for (i=0, l=fe.length; i<l; i++) {
				if (fe[i].value != v) {
					if (fe.type ==  'select-one')
						fe[i].selected = false;
					continue;
				}
				fe[i].selected = true;
				break;
			}
			break;
		default: throw 'AssertErr: unimplemented form element';
		}
	}
	catch (e) {
		if (!s)	BS.utl.event.setTimeout(0,
			function () { BS.utl.form.setValue(fe, v, true); });
	}
};

/*!\brief	Returns an array representing the array components in the
 *		string representation of an array.
 * \param	s		string array representation
 */
BS.utl.form._getNameArr = function (s)
{
	for (var a = s.split('['), i=0, l=a.length, n, t; i<l; i++) {
		n = a[i];
		t = n.indexOf(']');

		if ((!i && (!n.length || t != -1)) ||
		    (i && (t == -1 || t != n.lastIndexOf(']'))))
			throw 'AssertErr: invalid name format';

		if (i) a[i] = n.substr(0, n.length - 1);
	}

	return a;
}

/*!\brief	Sets form to match any existing members in the specified
 *		array.
 * \param	f		form object
 * \param	a		array
 * \param	s		skip IE setTimeout() workaround (default false)
 */
BS.utl.form.fromArray = function (f, a, s)
{
	var			sF = BS.utl.form.setValue;
	var			vF = BS.utl.form.fromArray._g;

	for (var i=0, t=f.elements, l=t.length, v; i<l; i++) {
		if (!t[i].name) continue;

		if ((v = vF(t[i].name, a)) === null) continue;

		sF(t[i], v, s);
	}
}

/*!\brief	Returns value from array based on string representation of the
 *		desired array value.
 * \param	s		string array representation
 * \param	dA		array
 */
BS.utl.form.fromArray._g = function (s, dA)
{
	var			a = BS.utl.form._getNameArr(s);

	for (var i=0, l=a.length, n, tA = dA; i<l; i++) {
		n = a[i];

		if (!isset(tA[n])) return null;
		else if (tA[n].constructor != Array &&
			 tA[n].constructor != Object) {
			if (i == l - 1) return tA[n];
			return null;
		}
		else if (i == l - 2 && a[i+1] === '' &&
			 (tA[n].constructor == Array ||
			  tA[n].constructor == Object))
			return tA[n];

		tA = tA[n];
	}
	return null;
}

/*!\brief	Returns an array representing the elements in the form object
 *		optionally skipping blank entries.
 * \param	f		form object
 * \param	s		skip blank (default false)
 * \return	array
 */
BS.utl.form.toArray = function (f, s)
{
	var			sF = BS.utl.form.toArray._s;
	var			vF = BS.utl.form.getValue;

	for (var i=0, t=f.elements, l=t.length, rA=[], v; i<l; i++) {
		if (!t[i].name) continue;

		if ((v = vF(t[i])) === null || (s && !v)) continue;

		sF(t[i].name, v, rA);
	}
	return rA;
};

/*!\brief	Sets value into array creating all necessary elements in the
 *		string representation of the destination in the array.
 * \param	s		string array represenation
 * \param	v		value
 * \param	rA		array (return)
 */
BS.utl.form.toArray._s = function (s, v, rA)
{
	var			a = BS.utl.form._getNameArr(s);

	for (var i=0, l=a.length-1, n, t, tA=rA; i<l; i++) {
		n = a[i];

		if (!n.length) {
			tA.push(t = []);
			tA = t;
			continue;
		}

		if (!isset(tA[n]) || tA[n].constructor != Array) tA[n] = [];

		tA = tA[n];
	}

	n = a[a.length - 1];

	if (!n.length) tA.push(v);
	else if (typeof(tA[n]) == 'undefined') tA[n] = v;
	else if (tA[n].constructor == Array) tA[n].push(v);
	else tA[n] = [tA[n], v];

	return rA;
}

BS.utl.form.post = function (d, action)
{
	var f = BS.utl.mm.domNew(null, 'form');
	f.setAttribute('method', 'post');
	if (action) f.setAttribute('action', action);

	var str = '';
	for (var k in d) {
		str += '<input type="hidden" name="' + k + '" value="' + d[k] + '">';
	}

	f.innerHTML = str;
	document.body.appendChild(f);
	f.submit();
}

BS.utl.func = {};

BS.utl.func.bind = function (f, scope)
{
	return function () { return f.apply(scope, arguments); };
};

BS.utl.img = {};

/*!\brief	Returns a single Image or an array of Images based on the
 *		number of image src strings supplied to the function.
 * \param	variable arguments	image src string(s)
 * \return	Image or array of Image
 */
BS.utl.img.create = function()
{
	var			r;

	if (arguments.length == 1) {
		r = new Image;
		r.src = arguments[0];
		return r;
	}
	
	r = [];
	for (var i=0, l=arguments.length; i<l; i++) {
		r[i] = new Image;
		r[i].src = arguments[i];
	}
	
	return r;
};

BS.utl.location = new BS.com.Location;

BS.utl.mouse = {};

/*!\brief	Return offset of mouse based on event.
 * \param	evt		event
 */
BS.utl.mouse.ofs = function (evt)
{
	var r = BS.utl.event.getXY(BS.com.Event.getEvent(evt));
	if (BS.utl.browser.isIE) BS.utl.xy.add(r, BS.utl.dom.scrollOfs());
	return r;
};

/*!\brief	Return position of mouse based on event.
 * \param	evt		event
 */
BS.utl.mouse.pos = function (evt)
{
	evt = BS.com.Event.getEvent(evt);
	return [evt.clientX, evt.clientY];
};

BS.utl.string = {};

/*!\brief	Returns a URL decoded string based on the provided string.
 * \param	s		string
 * \return	URL encoded string
 */
BS.utl.string.urldecode = function (s) { return decodeURIComponent(s); };

/*!\brief	Returns a URL encoded string based on the provided string.
 * \param	s		string
 * \return	URL encoded string
 */
BS.utl.string.urlencode = function (s) { return encodeURIComponent(s); };

BS.utl.string.fmtBytes = function (bytes) 
{
	var			unit;
	var			n;
	
	bytes = parseInt(bytes);
	if (isNaN(bytes)) return '-';
	
	if (bytes/(1024) < 1) {
		unit = 'bytes';
		n = Math.floor(bytes);
	}
	else if (bytes/(1024*1024) < 1) {
		unit = 'KB';
		n = Math.floor(10*bytes/(1024))/10;
	}
	else if (bytes/(1024*1024*1024) < 1) {
		unit = 'MB';
		n = Math.floor(10*bytes/(1024*1024))/10;
	}
	else {
		unit = 'GB';
		n = Math.floor(10*bytes/(1024*1024*1024))/10;
	}
	
	n = n.toString();
	if (n.indexOf('.') < 0) n += '.0';

	return n + unit;
};

BS.utl.string.truncate = function (str, n)
{
	if (str.length >= n) return (str.substr(0, n-3) + '...');
	else return str;
};

BS.utl.string.fmtMoney = function (mnt)
{
	mnt -= 0;
	mnt = (Math.round(mnt*100))/100;
	return (mnt == Math.floor(mnt)) ? mnt + '.00'
		: ( (mnt*10 == Math.floor(mnt*10)) ?
		mnt + '0' : mnt);
} 

BS.utl.xy = {};

/*!\brief	Add source XY to destination XY (destructive).
 * \param	d		destination XY
 * \param	s		source XY
 */
BS.utl.xy.add = function (d, s)
{
	d[0] += s[0];
	d[1] += s[1];
	return d;
};

/*!\brief	Subtract source XY from destination XY (destructive).
 * \param	d		destination XY
 * \param	s		source XY
 */
BS.utl.xy.sub = function (d, s)
{
	d[0] -= s[0];
	d[1] -= s[1];
	return d;
};

/*!\brief	Return distance between two XY points.
 * \param	p0		point XY
 * \param	p1		point XY
 */
BS.utl.xy.distance = function (p0, p1)
{
	return Math.sqrt(Math.pow(p0[0] - p1[0], 2) +
			 Math.pow(p0[1] - p1[1], 2));
};

/*!\brief	Constrain point XY in bounding box.
 * \param	p		point XY
 * \param	b0		bounding box XY
 * \param	b1		bounding box XY
 */
BS.utl.xy.constrain = function (p, b0, b1)
{
	var			t;

	if (p[0] > (t = Math.max(b0[0], b1[0]))) p[0] = t;
	else if (p[0] < (t = Math.min(b0[0], b1[0]))) p[0] = t;

	if (p[1] > (t = Math.max(b0[1], b1[1]))) p[1] = t;
	else if (p[1] < (t = Math.min(b0[1], b1[1]))) p[1] = t;

	return p;
};

BS.utl.ieHoverNav = function (id) 
{
	if (!_bsBrowser.isIE) return;
	_bsMm.oNew(BS.com.HoverMenuUplifter, id);
};

BS.com.HoverMenuUplifter = function (id)
{
	this.mm = new BS.com.Delete();

	this.rootUL = _bsDom.get(id);

	if (!this.rootUL) return;

	this.mEvt = this.mm.ceNew('mouse', this);
	this.mEvt.addCB(this._mouseCB);
	this.uplift();
};

BS.com.HoverMenuUplifter.prototype = {
	HOVER_CLASS: 'ieHover',
	
	_delete: function ()
	{
		this.rootUL = null;
		this.mm._delete();
	},

	uplift: function ()
	{
		var el = this.rootUL.getElementsByTagName('li');
		delete this.cArr; this.cArr = [];

		for (var i=0, l=el.length; i<l; i++) {
			this.cArr[i] = '';
			if (empty(el[i].className)) continue;

			if (el[i].className != '')
				this.cArr[i] = '_' + el[i].className;
			this.mEvt.attach(el[i], 'mouseover', i);
			this.mEvt.attach(el[i], 'mouseout', i);
		}
	},

	_mouseCB: function (type, data, args)
	{
		var e = args[0];
		var elindx = args[1];
		var type = e.type;
		var target = _bsEvt.getTarget(e);
		var hc = this.HOVER_CLASS;

		var node = _bsDom.parentByNodeName(target, 'LI');

		switch(type) {
		case 'mouseover':
			if (node.className == '' /*!_bsDom.hasClass(node, hc)*/) {
				var pNode = _bsDom.parentByNodeName(node.parentNode, 'LI');
				//log(node.className + ' ' + node.tagName);
				_bsDom.addClass(pNode, hc);
			} else
				_bsDom.addClass(node, hc + this.cArr[elindx]);
			_bsDom.addClass(node, hc);
			break;
		case 'mouseout':
			_bsDom.delClass(node, hc + this.cArr[elindx]);
			_bsDom.delClass(node, hc);
			if (node.className == '' /*!_bsDom.hasClass(node, hc)*/) {
				node = _bsDom.parentByNodeName(node.parentNode, 'LI');
				_bsDom.delClass(node,  hc);
			}
			break;		
		}

		_bsEvt.stopPropagation(e);
	}
};

BS.utl.window = new BS.com.Window;

// shortcuts
_bsArr = BS.utl.array;
_bsBrowser = BS.utl.browser;
_bsCookie = BS.utl.cookie;
_bsDom = BS.utl.dom;
_bsEvt = BS.utl.event;
_bsForm = BS.utl.form;
_bsGlobalEvt = BS.utl.globalEvent;
_bsMm = BS.utl.mm;
_bsMouse = BS.utl.mouse;
_bsObj = BS.utl.object;
_bsStr = BS.utl.string;
_bsWin = BS.utl.window;
_bsXy = BS.utl.xy;
BS.com.Prompt = function (obj, parent, className, zindex)
{
	this.mm = new BS.com.Delete;

	this.parent = (parent) ? parent : document.body;
	this.wobj = (obj) ?
		obj : this.mm.domNew(this.parent, 'div', 'BsPrompt');

	this.obj =  this.mm.domNew(this.wobj, 'div', null);

	if (className) _bsDom.addClass(this.wobj, className);

	_bsDom.setStyle(this.wobj, 'position', 'absolute');
	_bsDom.setStyle(this.wobj, 'visibility', 'hidden');
	_bsDom.setStyle(this.wobj, 'zIndex', (zindex) ? zindex : '5000');
	_bsDom.setStyle(this.wobj, 'display', 'block');
	_bsDom.setStyle(this.obj, 'overflow', 'auto');
};

BS.com.Prompt.prototype = {
	_delete: function () { this.mm._delete(); },

	setPageOfs: function (pos)
	{
		_bsDom.setPageOfs(this.wobj, pos);
	},

	setObjOfs: function (obj, ofs)
	{
		if (!obj) return;
		var pos = _bsDom.pageOfs(obj);
		_bsDom.setPageOfs(this.wobj, _bsXy.add(pos, ofs));
	},

	clientCenter: function (min) { _bsDom.clientCenter(this.wobj, min); },

	_resize: function () { this.clientCenter([25,25]); },

	show: function (mode)
	{
		_bsDom.setVis(this.wobj, mode);
		_bsDom.setDisplay(this.wobj, mode);
		if (mode) {
			this._resize();
			_bsGlobalEvt.addCB('resize', this._resize, this);
		} else {
			_bsGlobalEvt.delCB('resize', this._resize, this);
		}
	}
};

BS.com.BusyPrompt = function (title, msg, mask)
{
	BS.com.Prompt.call(this, null, null, 'BsBusyPrompt', '8000');
	this.mask = (mask) ? mask : this.mm.oNew(BS.com.Mask, null, 0.25, '7999');

	this.titleH = this.mm.domNew(this.obj, 'h1');
	this.msgDIV = this.mm.domNew(this.obj, 'div', 'bsBpMsg');
	this.titleH.innerHTML = title;
	this.msgDIV.innerHTML = msg;
};

BS.com.BusyPrompt.prototype = {
	_delete: function ()
	{
		BS.com.Prompt.prototype._delete.call(this);
		this.mask = null;
	},

	show: function (mode)
	{
		this.mask.show(mode);
		BS.com.Prompt.prototype.show.call(this, mode);

		if (mode) 
			_bsDom.clientCenter(this.wobj);
	}
};

if (BS.com.Prompt) _bsObj.inherit(BS.com.Prompt, BS.com.BusyPrompt);

BS.com.Balloon = function (delay, fade)
{
	this.mm = new BS.com.Delete('BsBalloon');
	this.delay = isset(delay) ? delay : 500;

	this.f_fade = fade ? true : false;

	this.obj = this.mm.domNew(document.body, 'div');
	with (_bsDom) {
		setPageOfs(this.obj, [0,0]);
		setStyle(this.obj, 'visibility', 'hidden');
	}

	this.tailTopDIV = this.mm.domNew(this.obj, 'div');
	_bsDom.setStyle(this.tailTopDIV, 'display', 'none');

	this.bodyDIV = this.mm.domNew(this.obj, 'div', 'bsbBody');

	this.tailBottomDIV = this.mm.domNew(this.obj, 'div', 'downleft');

	this.stayE = this.mm.ceNew('stay', this);
	this.stayE.addCB(this.hoverE);
	this.stayE.attach(this.obj, 'mouseover');
	this.stayE.attach(this.obj, 'mouseout');

	this.hovE = this.mm.ceNew('hov', this);
	this.hovE.addCB(this.hoverE);

	if (this.f_fade) {
		this.fxCE = this.mm.ceNew('animate', this);
		this.fxCE.addCB(this._setVis);
		
		this.fx = this.mm.oNew(BS.com.Animate, this.obj);
		this.fx.setCE(this.fxCE);

		_bsDom.setStyle(this.obj, 'opacity', 0);
	}

	this.htmlA = [];
	this.relObjA = [];
	this.widthA = [];
	this.objA = [];
};

BS.com.Balloon.prototype = {
	f_show: 	false,
	f_stat:		false,
	f_fade:		false,
	f_enabled:	true,

	_delete: function ()
	{
		this.stayE.detach(this.obj, 'mouseover');
		this.stayE.detach(this.obj, 'mouseout');
		
		for (var i in this.objA) {
			this.hovE.detach(this.objA[i], 'mouseover');
			this.hovE.detach(this.objA[i], 'mouseout');
			// this.hovE.detach(this.objA[i], 'mousedown');
		}
		
		delete this.relObjA;
		delete this.htmlA;
		delete this.widthA;
		delete this.objA;
		this.mm._delete();
	},

	hoverE: function (type, data, args)
	{
		var evt = args[0];

		switch (evt.type) {
		case 'mouseover':			
			if (!this.f_enabled) {
				if (this.f_show) {
					this.f_show = false;
					this._show();
				}
				return;
			}
			this.f_show = true;
			var caller = _bsEvt.getTarget(evt);
			
			if (type == 'hov' && 
			   (!this.lastPos || this.bodyDIV.innerHTML != this.htmlA[caller.id])) {
				if (this.lastPos) this.f_stat = false;
				_bsDom.setStyle(this.obj, 'width', this.widthA[caller.id] + 'px');
				this.bodyDIV.innerHTML = this.htmlA[caller.id];
				this.lastPos = this.relObjA[caller.id] ? 
				   _bsDom.pageOfs(caller) : BS.utl.mouse.ofs(evt);

				var mult = this.relObjA[caller.id] ? .5 : 0;

				this.lastPos[0] += mult*caller.offsetWidth;

				this._setArrow('down');
				this._setArrow('left');

				if (this.lastPos[1] - _bsDom.scrollOfs()[1]
					- this.obj.offsetHeight > 0) {
					this.lastPos[1] -= this.obj.offsetHeight;
				} else {
					if (this.relObjA[caller.id])
						this.lastPos[1] += caller.offsetHeight;
					this._setArrow('up');
				}				

				if (_bsDom.clientSize()[0] +
				    _bsDom.scrollOfs()[0] - 
				    this.lastPos[0] - this.obj.offsetWidth < 0) {
					if (this.lastPos[0] - this.obj.offsetWidth >= 0) {
						this.lastPos[0] -= this.obj.offsetWidth;
						this._setArrow('right');
					}
				}				
			}
			_bsEvt.setTimeout(this.delay, this._show, this);
			break;
		case 'mouseout':
			this.f_show = false;
			_bsEvt.setTimeout(50, this._show, this);
			break;
		case 'mousedown':
			this.f_show = false;
			this._show();
			break;
		}
	},

	attach: function (obj, html, width, f_relObj)
	{
		if (!obj) return;
		if (!obj.id) obj.id = _bsDom.mkid();
		
		this.relObjA[obj.id] = f_relObj; 
		this.htmlA[obj.id] = html;
		this.widthA[obj.id] = isset(width) ? width : 158;
		this.objA[obj.id] = obj;
		
		this.hovE.attach(obj, 'mouseover');
		this.hovE.attach(obj, 'mouseout');
		// this.hovE.attach(obj, 'mousedown');
	},

	setEnabled: function (enabled) { this.f_enabled = enabled; },

	setStyle: function (prop, val) { _bsDom.setStyle(this.obj, prop, val); },

	setContent: function (html, id) { this.htmlA[id] = html; },

	_setArrow: function (direction)
	{
		switch (direction) {
		case 'left':
			_bsDom.delClass(this.tailTopDIV, 'upright');
			_bsDom.delClass(this.tailBottomDIV, 'downright');
			_bsDom.addClass(this.tailTopDIV, 'upleft');
			_bsDom.addClass(this.tailBottomDIV, 'downleft');
			break;
		case 'right':
			_bsDom.delClass(this.tailTopDIV, 'upleft');
			_bsDom.delClass(this.tailBottomDIV, 'downleft');
			_bsDom.addClass(this.tailTopDIV, 'upright');
			_bsDom.addClass(this.tailBottomDIV, 'downright');
			break;
		case 'down':
			_bsDom.setStyle(this.tailTopDIV, 'display', 'none');
			_bsDom.setStyle(this.tailBottomDIV, 'display', 'block');
			break;
		case 'up':
			_bsDom.setStyle(this.tailBottomDIV, 'display', 'none');
			_bsDom.setStyle(this.tailTopDIV, 'display', 'block');
			break;
		}
	},

	_show: function ()
	{
		if (this.f_show) {
			if (this.f_stat) return;
			_bsDom.setPageOfs(this.obj, this.lastPos);
			if (this.f_fade) this.fx.fadein(50);
			else this._setVis(null, null, ['start', 'fadein']);
			this.f_stat = true;
		} else {
			if (!this.f_stat) return;
			if (this.f_fade) this.fx.fadeout(200);
			else this._setVis(null, null, ['end', 'fadeout']);
			this.lastPos = null;
			this.orgiPos = null;
			this.f_stat = false;
		}
	},

	_setVis: function (type, data, args)
	{
		var state = args[0];
		var effect = args[1];
		
		if (state == 'start' && effect == 'fadein')
			_bsDom.setStyle(this.obj, 'visibility', 'visible');
		else if (state == 'end' && effect == 'fadeout')
			_bsDom.setStyle(this.obj, 'visibility', 'hidden');
	}
};

BS.com.Mask = function (parent, opacity, zindex, color)
{
	var		isIE = _bsBrowser.isIE;

	if (!zindex) zindex = '1000';
	if (!color) color = '#000';
	if (!opacity) opacity = 0.4;

	this.mm = new BS.com.Delete('Mask');
	this.parent = (parent) ? parent : document.body;

	if (isIE) {
		this.obj = this.mm.domNew(null, 'iframe', 'BsMask');
		this.obj.src = '/com/mask?color=' + _bsStr.urlencode(color);
		document.body.appendChild(this.obj);
	} else this.obj = this.mm.domNew(document.body, 'div', 'BsMask');

	_bsDom.setStyle(this.obj, 'position', 'absolute');
	_bsDom.setStyle(this.obj, 'visibility', 'hidden');
	_bsDom.setStyle(this.obj, 'zIndex', zindex);
	_bsDom.setStyle(this.obj, 'opacity', opacity);

	if (!isIE) {
		_bsDom.setStyle(this.obj, 'backgroundColor', color);
		this.obj.innerHTML = '&nbsp;';
	}

	// weird firefox bug! setting the 'height' style in _resize()
	// causes excessive CPU usage in firefox... should not call
	// _resize() in the constructor.
	// this._resize();
};

BS.com.Mask.prototype = {
	f_show: 	false,	

	_delete: function ()
	{
		this.mm._delete();
		this.parent = null;
	},

	_resize: function ()
	{
		var		pos, size;

		if (this.parent == document.body) {
			size = _bsDom.docSize();
			pos = [0,0];
		}
		else {
			size = _bsDom.size(this.parent);
			pos = _bsDom.pageOfs(this.parent);
			
		}

		if (isNaN(size[0]) || isNaN(size[1]) || !pos) return;

		_bsDom.setPageOfs(this.obj, pos);
		_bsDom.setSize(this.obj, size);
	},

	show: function (mode)
	{
		if (mode == this.f_show) return;
		this.f_show = mode;

		if (mode) {
			this._resize();
			_bsGlobalEvt.addCB('resize', this._resize, this,
						 true);
		}
		else {
			_bsDom.setStyle(this.obj, 'height', '1px');
			_bsGlobalEvt.delCB('resize', this._resize, this);
		}

		_bsDom.setStyle(this.obj, 'visibility',
				    mode ? 'visible' : 'hidden');
	}
};

BS.com.Alert = function ()
{
	BS.com.Prompt.call(this, null, null, 'BsAlert', '9999');

	this.mask = _bsMm.oNew(BS.com.Mask, null, 0.3, '9998');

	this.msgA = [];

	this.titleH = this.mm.domNew(this.obj, 'h1');
	this.bodyDIV = this.mm.domNew(this.obj, 'div', 'body');
	this.footerDIV = this.mm.domNew(this.obj, 'div', 'footer')
	this.okINP = this.mm.domNew(null, 'input', 'button')
	this.okINP.setAttribute('type', 'button');
	this.okINP.value = "   OK   ";
	this.footerDIV.appendChild(this.okINP);

	this.okE = _bsMm.ceNew('ok', this);
	this.okE.addCB(this._clear, this);
	this.okE.attach(this.okINP, 'click');
};

BS.com.Alert.prototype = {
	f_show:		false,
	msgA:		null,
	ce:		null,
	DEBUG:		false,

	_delete: function ()
	{
		BS.com.Prompt.prototype._delete.call(this);
		this.ce = null;
		delete this.msgA;
	},

	_closeWin: function (type, data, args)
	{
		window.close();
	},

	_clear: function (type, data, args)
	{
		if (!this.f_show) return;
		this.f_show = false;
		
		_bsGlobalEvt.delCB('resize', this._resize, this);
		this.bodyDIV.innerHTML = this.titleH.innerHTML = '';
		BS.com.Prompt.prototype.show.call(this, false);
		
		if (this.msgA.length) {
			_bsEvt.setTimeout(100, this._showA, this);
			return;
		}

		if (this.ce)
			if (!this.ce.exec()) return;

		this.ce = null;
		this.mask.show(false);
	},

	_showA: function (type, data, args)
	{
		if (!this.msgA.length) return;
		var msg = this.msgA.shift();
		this.show(msg[0], msg[1], msg[2])
	},

	_focus: function () { this.okINP.focus(); },

	close: function (clearCe)
	{
		if (clearCe) this.ce = null;
		this._clear();
	},

	setCloseWin: function (flag)
	{
		if (flag) this.okE.addCB(this._closeWin, this);
		else this.okE.delCB(this._closeWin);
	},

	show: function (title, html, ce)
	{
		// check if a "false" error was thrown - 
		// e.g. used by PS.utl.responseErr()
		if (html === false) return;

		if (this.f_show) {
			this.msgA.push([title, html, ce]);
			_bsEvt.setTimeout(0, this._focus, this);
			return;
		}
		this.f_show = true;

		if (ce) this.ce = ce;
		this.mask.show(true);
		if (title) this.titleH.innerHTML = title;
		if (html) {
			if (typeof(html) == 'object' && html.length) {
				var str = '<ul>';
				for (var i = 0; i < html.length; i++)
					str += '<li>' + html[i] + '</li>';
				str += '</ul>';
				this.bodyDIV.innerHTML = str;
			
			}
			else this.bodyDIV.innerHTML = html;

			if (this.DEBUG && html.stack)
				this.bodyDIV.innerHTML += '\n' + html.stack;
		}

		BS.com.Prompt.prototype.show.call(this, true);
		_bsEvt.setTimeout(0, this._focus, this);
	}
};

_bsObj.inherit(BS.com.Prompt, BS.com.Alert);

_bsGlobalEvt.addCB('load',
	function () { _bsAlert = BS.utl.alert = _bsMm.oNew(BS.com.Alert); });

// shortcuts
var _bsAlert;
