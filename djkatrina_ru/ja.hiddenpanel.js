
function jaHiddenPanelInit() {
	jaHP.hp = document.getElementById("ja-hpwrap");
	if (!jaHP.hp) return;
	jaHP.ani = new jaHP.effect(jaHP.hp, {duration: 300, opacity: true});
	jaHP.hpswitcher = document.getElementById("ja-hp-switch");
	jaHP.hpswitcher.style.display = "block";
	//jaAddEvent( jaHP.hpswitcher, 'click', jaHPToggle );
	jaHP.hpswitcher.onclick = function () {
    this.className = (this.className)? "" : "ja-hp-active";
    jaHP.ani.toggle();
  };
}


if (window.ActiveXObject) window.ie = window[window.XMLHttpRequest ? 'ie7' : 'ie6'] = true;
else if (document.childNodes && !document.all && !navigator.taintEnabled) window.khtml = true;
else if (document.getBoxObjectFor != null) window.gecko = true;

var jaHP = Object;

Function.prototype.jahpbind = function(object) {
	var __method = this;
	return function() {
		return __method.apply(object, arguments);
	}
};

Object.extend = function(){
	var args = arguments;
	args = (args[1]) ? [args[0], args[1]] : [this, args[0]];
	for (var property in args[1]) args[0][property] = args[1][property];
	return args[0];
};

jaHP.effect = new Object();
jaHP.effect = function(p, options) {
	this.p = p;
	this.p.style.visibility = "hidden";
	this.options = Object.extend({ height: true, width: false, opacity: false, duration: 400}, options || {});
	this.timer = null;
	
	this.p.setOpacity = function(opacity){
		if (opacity == 0){
			if(this.style.visibility != "hidden") this.style.visibility = "hidden";
		} else {
			if(this.style.visibility != "visible") this.style.visibility = "visible";
		}
		if (window.ie) {
			this.style.zoom = 1;
			this.style.filter = "alpha(opacity=" + opacity*100 + ")";
		}
		this.style.opacity = opacity;
	};

	this.step = function() {
		var time = (new Date).getTime();
		if (time > this.options.duration + this.startTime) {
			this.hnow = this.hto;
			this.wnow = this.wto;
			this.onow = this.oto;
			clearInterval(this.timer);
			this.timer = null;
		} else {
			var Tpos = (time - this.startTime) / (this.options.duration);
			this.hnow = Tpos*(this.hto-this.hfrom) + this.hfrom;
			this.wnow = Tpos*(this.wto-this.wfrom) + this.wfrom;
			this.onow = Tpos*(this.oto-this.ofrom) + this.ofrom;
		}
		this.change();
	};

	this.custom = function(action) {
		if (this.timer != null) return;
		if (action == "open") {
			this.hfrom = 0;
			this.hto = this.p.scrollHeight;
			this.wfrom = 0;
			this.wto = this.p.scrollWidth;
			this.ofrom = 0;
			this.oto = 1;
		} else if (action == "close") {
			this.hto = 0;
			this.hfrom = this.p.scrollHeight;
			this.wto = 0;
			this.wfrom = this.p.scrollWidth;
			this.oto = 0;
			this.ofrom = 1;
		}
		this.startTime = (new Date).getTime();
		this.timer = setInterval(this.step.jahpbind(this), 13);
	};

	this.change = function() {
		if (this.options.height) this.p.style.height = this.hnow + "px";
		if (this.options.width) this.p.style.width = this.wnow + "px";
		if (this.options.opacity) this.p.setOpacity(this.onow);
	};
	
	this.toggle = function() {
		if (this.p.offsetHeight == 0 || this.p.offsetWidth == 0) this.custom("open");
		else this.custom("close");
	}
}

jaAddEvent( window, 'load', jaHiddenPanelInit );
