/* 
 * =================================================================
 * BEGIN /fluid/utils.js  
 * =================================================================
 */


/*
 * =================================================================
 * Gossamer Links - enhanced directory management system
 *
 *   Website  : http://gossamer-threads.com/
 *   Support  : http://gossamer-threads.com/scripts/support/
 *   Revision : $Id: utils.js,v 1.3 2006/07/18 03:32:55 brewt Exp $
 *
 * Copyright (c) 2005 Gossamer Threads Inc.  All Rights Reserved.
 * Redistribution in part or in whole strictly prohibited. Please
 * see LICENSE file for full details.
 * =================================================================
 */

/*
Event Handler
=============
Description:
    A simple cross-browser event handler replacement.
Usage:
    registerEvent(<html_object>, <event>, <handler>);
    unregisterEvent(<html_object>, <event>, <handler>);
Example:
    registerEvent(window, 'onload', myhandler);
Notes:
    html_object is a html object that you wish to register the event on.
    event is a string containing the event you wish to register, eg. 'onload'.
    handler is a function reference for the code you wish to run when the
        event is fired.
*/

function registerEvent(object, event, handler) {
    if (!(object && event && handler))
        return;

    var events = object[event + 'Events'];
    if (!events) {
        object[event + 'Events'] = object[event] ? [object[event], handler] : [handler];
        object[event] = _eventHandler;
    }
    else
        object[event + 'Events'][events.length] = handler;
}

function unregisterEvent(object, event, handler) {
    if (!(object && event && handler))
        return;

    var events = object[event + 'Events'];
    if (!events)
        return;

    for (var i = 0; i < events.length; i++)
        if (object[event + 'Events'][i] == handler)
            return object[event + 'Events'].splice(i, 1);
}

function _eventHandler(event) {
    if (!event) event = window.event;

    var events = this['on' + event.type + 'Events'];
    if (!events)
        return;

    for (var i = 0; i < events.length; i++) {
        this.eventMethod = events[i];
        if (this.eventMethod(event) == false) {
            this.eventMethod = null;
            return false;
        }
        this.eventMethod = null;
    }
}

/*
Check All Checkbox
==================
Description:
    Code to implement a check all checkbox.
Usage:
    checkAllInit(<form_id>, <checkbox_name>, <checkall_id>);
Example:
    registerEvent(window, 'onload', function () { checkAllInit('my_form', 'ID', 'checkall') });
*/

function checkAllInit(form, checkBoxes, checkAllBox) {
    var oForm, oCheckBoxes, oCheckAllBox;
    if (!(form && checkBoxes && checkAllBox &&
        (oForm = document.getElementById(form)) &&
        (oCheckBoxes = oForm.elements[checkBoxes]) &&
        (oCheckAllBox = document.getElementById(checkAllBox))))
        return;

    oCheckAllBox.checkBoxes = oCheckBoxes;
    registerEvent(oCheckAllBox, 'onclick', _checkAllBoxes);
    for (var i = 0; i < oCheckBoxes.length; i++) {
        oCheckBoxes[i].checkAllBox = oCheckAllBox;
        registerEvent(oCheckBoxes[i], 'onclick', _updateAllBoxes);
    }
}

function _checkAllBoxes() {
    var checkBoxes = this.checkBoxes;
    for (var i = 0; i < checkBoxes.length; i++)
        checkBoxes[i].checked = this.checked;
}

function _updateAllBoxes() {
    var checkBoxes = this.form.elements[this.name];
    var allChecked = true;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (!checkBoxes[i].checked) {
            allChecked = false;
            break;
        }
    }
    this.checkAllBox.checked = allChecked;
}

/*
Hide Objects
============
Description:
    Hide a list of html objects using the display = 'none' style.
Usage:
    hideObjects(<id>[, <id>]*);
Example:
    hideObjects('foo', 'bar', 'baz');
Notes:
    id is the id of the html object you want to hide.
*/

function hideObjects() {
    var args = hideObjects.arguments;
    for (var i = 0; i < args.length; i++) {
        var obj = document.getElementById(args[i]);
        if (obj)
            obj.style.display = 'none';
    }
}


/* 
 * =================================================================
 * END /fluid/utils.js  
 * =================================================================
 */



/* 
 * =================================================================
 * BEGIN  /fluid/js/responsive-nav.min.js
 * =================================================================
 */


!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick&&"querySelectorAll"in a){var b=g.querySelectorAll("a"),c=this;s(b,function(a){m(b[a],"click",function(){k&&c.toggle()},!1)})}},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onTouchStart:function(b){b.stopPropagation(),"after"===h.insert&&q(a.body,"disable-pointer-events"),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(c){if(this._preventDefault(c),!this.touchHasMoved){if("touchend"===c.type)return this.toggle(),"after"===h.insert&&setTimeout(function(){r(a.body,"disable-pointer-events")},h.transition+300),void 0;var d=c||b.event;3!==d.which&&2!==d.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};b.responsiveNav=d}(document,window,0);


/* 
 * =================================================================
 * END /fluid/js/responsive-nav.min.js 
 * =================================================================
 */



/* 
 * =================================================================
 * BEGIN  /fluid/js/superfish.min.js 
 * =================================================================
 */

/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function(e){"use strict";var s=function(){var s={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var s=/iPhone|iPad|iPod/i.test(navigator.userAgent);return s&&e(window).load(function(){e("body").children().on("click",e.noop)}),s}(),n=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),t=function(e,o){var n=s.menuClass;o.cssArrows&&(n+=" "+s.menuArrowClass),e.toggleClass(n)},i=function(o,n){return o.find("li."+n.pathClass).slice(0,n.pathLevels).addClass(n.hoverClass+" "+s.bcClass).filter(function(){return e(this).children(n.popUpSelector).hide().show().length}).removeClass(n.pathClass)},r=function(e){e.children("a").toggleClass(s.anchorClass)},a=function(e){var s=e.css("ms-touch-action");s="pan-y"===s?"auto":"pan-y",e.css("ms-touch-action",s)},l=function(s,t){var i="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(u,p,i):s.on("mouseenter.superfish",i,u).on("mouseleave.superfish",i,p);var r="MSPointerDown.superfish";o||(r+=" touchend.superfish"),n&&(r+=" mousedown.superfish"),s.on("focusin.superfish","li",u).on("focusout.superfish","li",p).on(r,"a",t,h)},h=function(s){var o=e(this),n=o.siblings(s.data.popUpSelector);n.length>0&&n.is(":hidden")&&(o.one("click.superfish",!1),"MSPointerDown"===s.type?o.trigger("focus"):e.proxy(u,o.parent("li"))())},u=function(){var s=e(this),o=d(s);clearTimeout(o.sfTimer),s.siblings().superfish("hide").end().superfish("show")},p=function(){var s=e(this),n=d(s);o?e.proxy(f,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(f,s,n),n.delay))},f=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(c(this)),s.$path.length&&e.proxy(u,s.$path)())},c=function(e){return e.closest("."+s.menuClass)},d=function(e){return c(e).data("sf-options")};return{hide:function(s){if(this.length){var o=this,n=d(o);if(!n)return this;var t=n.retainPath===!0?n.$path:"",i=o.find("li."+n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),r=n.speedOut;s&&(i.show(),r=0),n.retainPath=!1,n.onBeforeHide.call(i),i.stop(!0,!0).animate(n.animationOut,r,function(){var s=e(this);n.onHide.call(s)})}return this},show:function(){var e=d(this);if(!e)return this;var s=this.addClass(e.hoverClass),o=s.children(e.popUpSelector);return e.onBeforeShow.call(o),o.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(o)}),this},destroy:function(){return this.each(function(){var o,n=e(this),i=n.data("sf-options");return i?(o=n.find(i.popUpSelector).parent("li"),clearTimeout(i.sfTimer),t(n,i),r(o),a(n),n.off(".superfish").off(".hoverIntent"),o.children(i.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),i.$path.removeClass(i.hoverClass+" "+s.bcClass).addClass(i.pathClass),n.find("."+i.hoverClass).removeClass(i.hoverClass),i.onDestroy.call(n),n.removeData("sf-options"),void 0):!1})},init:function(o){return this.each(function(){var n=e(this);if(n.data("sf-options"))return!1;var h=e.extend({},e.fn.superfish.defaults,o),u=n.find(h.popUpSelector).parent("li");h.$path=i(n,h),n.data("sf-options",h),t(n,h),r(u),a(n),l(n,h),u.not("."+s.bcClass).superfish("hide",!0),h.onInit.call(this)})}}}();e.fn.superfish=function(o){return s[o]?s[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof o&&o?e.error("Method "+o+" does not exist on jQuery.fn.superfish"):s.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop},e.fn.extend({hideSuperfishUl:s.hide,showSuperfishUl:s.show})})(jQuery);


/* 
 * =================================================================
 * END /fluid/js/superfish.min.js
 * =================================================================
 */


/* 
 * =================================================================
 * BEGIN  /fluid/js/hoverIntent.js
 * =================================================================
 */

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);


/* 
 * =================================================================
 * END /fluid/js/hoverIntent.js
 * =================================================================
 */




/* 
 * =================================================================
 * BEGIN  /fluid/js/delphi.js (BlockAdblock_)
 * =================================================================
 */


/*
 * BlockAdBlock 3.2.0
 * Copyright (c) 2015 Valentin Allaire <valentin.allaire@sitexw.fr>
 * Released under the MIT license
 * https://github.com/sitexw/BlockAdBlock
  * https://github.com/sitexw/BlockAdBlock
 */

(function(window) {
	var BlockAdBlock = function(options) {
		this._options = {
			checkOnLoad:		false,
			resetOnEnd:			false,
			loopCheckTime:		50,
			loopMaxNumber:		5,
			baitClass:			'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
			baitStyle:			'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;',
			debug:				false
		};
		this._var = {
			version:			'3.2.0',
			bait:				null,
			checking:			false,
			loop:				null,
			loopNumber:			0,
			event:				{ detected: [], notDetected: [] }
		};
		if(options !== undefined) {
			this.setOption(options);
		}
		var self = this;
		var eventCallback = function() {
			setTimeout(function() {
				if(self._options.checkOnLoad === true) {
					if(self._options.debug === true) {
						self._log('onload->eventCallback', 'A check loading is launched');
					}
					if(self._var.bait === null) {
						self._creatBait();
					}
					setTimeout(function() {
						self.check();
					}, 1);
				}
			}, 1);
		};
		if(window.addEventListener !== undefined) {
			window.addEventListener('load', eventCallback, false);
		} else {
			window.attachEvent('onload', eventCallback);
		}
	};
	BlockAdBlock.prototype._options = null;
	BlockAdBlock.prototype._var = null;
	BlockAdBlock.prototype._bait = null;
	
	BlockAdBlock.prototype._log = function(method, message) {
		console.log('[BlockAdBlock]['+method+'] '+message);
	};
	
	BlockAdBlock.prototype.setOption = function(options, value) {
		if(value !== undefined) {
			var key = options;
			options = {};
			options[key] = value;
		}
		for(var option in options) {
			this._options[option] = options[option];
			if(this._options.debug === true) {
				this._log('setOption', 'The option "'+option+'" he was assigned to "'+options[option]+'"');
			}
		}
		return this;
	};
	
	BlockAdBlock.prototype._creatBait = function() {
		var bait = document.createElement('div');
			bait.setAttribute('class', this._options.baitClass);
			bait.setAttribute('style', this._options.baitStyle);
		this._var.bait = window.document.body.appendChild(bait);
		
		this._var.bait.offsetParent;
		this._var.bait.offsetHeight;
		this._var.bait.offsetLeft;
		this._var.bait.offsetTop;
		this._var.bait.offsetWidth;
		this._var.bait.clientHeight;
		this._var.bait.clientWidth;
		
		if(this._options.debug === true) {
			this._log('_creatBait', 'Bait has been created');
		}
	};
	BlockAdBlock.prototype._destroyBait = function() {
		window.document.body.removeChild(this._var.bait);
		this._var.bait = null;
		
		if(this._options.debug === true) {
			this._log('_destroyBait', 'Bait has been removed');
		}
	};
	
	BlockAdBlock.prototype.check = function(loop) {
		if(loop === undefined) {
			loop = true;
		}
		
		if(this._options.debug === true) {
			this._log('check', 'An audit was requested '+(loop===true?'with a':'without')+' loop');
		}
		
		if(this._var.checking === true) {
			if(this._options.debug === true) {
				this._log('check', 'A check was canceled because there is already an ongoing');
			}
			return false;
		}
		this._var.checking = true;
		
		if(this._var.bait === null) {
			this._creatBait();
		}
		
		var self = this;
		this._var.loopNumber = 0;
		if(loop === true) {
			this._var.loop = setInterval(function() {
				self._checkBait(loop);
			}, this._options.loopCheckTime);
		}
		setTimeout(function() {
			self._checkBait(loop);
		}, 1);
		if(this._options.debug === true) {
			this._log('check', 'A check is in progress ...');
		}
		
		return true;
	};
	BlockAdBlock.prototype._checkBait = function(loop) {
		var detected = false;
		
		if(this._var.bait === null) {
			this._creatBait();
		}
		
		if(window.document.body.getAttribute('abp') !== null
		|| this._var.bait.offsetParent === null
		|| this._var.bait.offsetHeight == 0
		|| this._var.bait.offsetLeft == 0
		|| this._var.bait.offsetTop == 0
		|| this._var.bait.offsetWidth == 0
		|| this._var.bait.clientHeight == 0
		|| this._var.bait.clientWidth == 0) {
			detected = true;
		}
		if(window.getComputedStyle !== undefined) {
			var baitTemp = window.getComputedStyle(this._var.bait, null);
			if(baitTemp.getPropertyValue('display') == 'none'
			|| baitTemp.getPropertyValue('visibility') == 'hidden') {
				detected = true;
			}
		}
		
		if(this._options.debug === true) {
			this._log('_checkBait', 'A check ('+(this._var.loopNumber+1)+'/'+this._options.loopMaxNumber+' ~'+(1+this._var.loopNumber*this._options.loopCheckTime)+'ms) was conducted and detection is '+(detected===true?'positive':'negative'));
		}
		
		if(loop === true) {
			this._var.loopNumber++;
			if(this._var.loopNumber >= this._options.loopMaxNumber) {
				this._stopLoop();
			}
		}
		
		if(detected === true) {
			this._stopLoop();
			this._destroyBait();
			this.emitEvent(true);
			if(loop === true) {
				this._var.checking = false;
			}
		} else if(this._var.loop === null || loop === false) {
			this._destroyBait();
			this.emitEvent(false);
			if(loop === true) {
				this._var.checking = false;
			}
		}
	};
	BlockAdBlock.prototype._stopLoop = function(detected) {
		clearInterval(this._var.loop);
		this._var.loop = null;
		this._var.loopNumber = 0;
		
		if(this._options.debug === true) {
			this._log('_stopLoop', 'A loop has been stopped');
		}
	};
	
	BlockAdBlock.prototype.emitEvent = function(detected) {
		if(this._options.debug === true) {
			this._log('emitEvent', 'An event with a '+(detected===true?'positive':'negative')+' detection was called');
		}
		
		var fns = this._var.event[(detected===true?'detected':'notDetected')];
		for(var i in fns) {
			if(this._options.debug === true) {
				this._log('emitEvent', 'Call function '+(parseInt(i)+1)+'/'+fns.length);
			}
			if(fns.hasOwnProperty(i)) {
				fns[i]();
			}
		}
		if(this._options.resetOnEnd === true) {
			this.clearEvent();
		}
		return this;
	};
	BlockAdBlock.prototype.clearEvent = function() {
		this._var.event.detected = [];
		this._var.event.notDetected = [];
		
		if(this._options.debug === true) {
			this._log('clearEvent', 'The event list has been cleared');
		}
	};
	
	BlockAdBlock.prototype.on = function(detected, fn) {
		this._var.event[(detected===true?'detected':'notDetected')].push(fn);
		if(this._options.debug === true) {
			this._log('on', 'A type of event "'+(detected===true?'detected':'notDetected')+'" was added');
		}
		
		return this;
	};
	BlockAdBlock.prototype.onDetected = function(fn) {
		return this.on(true, fn);
	};
	BlockAdBlock.prototype.onNotDetected = function(fn) {
		return this.on(false, fn);
	};
	
	window.BlockAdBlock = BlockAdBlock;
	
	if(window.blockAdBlock === undefined) {
		window.blockAdBlock = new BlockAdBlock({
			checkOnLoad: true,
			resetOnEnd: true
		});
	}
})(window);



/* 
 * =================================================================
 * END /fluid/delphi.js  
 * =================================================================
 */


