/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=e8b369528660ed370696)
 * Config saved to config.json and https://gist.github.com/e8b369528660ed370696
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i='[data-dismiss="alert"]',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.2",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t(s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.2",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var o=t(i.target);o.hasClass("btn")||(o=o.closest(".btn")),e.call(o,"toggle"),i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;n||o.data("bs.carousel",n=new i(this,s)),"number"==typeof e?n.to(e):a?n[a]():s.interval&&n.pause().cycle()})}var i=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.3.2",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},i.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,o){var n=this.$element.find(".item.active"),s=o||this.getItemForDirection(e,n),a=this.interval,r="next"==e?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var h=s[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:r});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(s)]);p&&p.addClass("active")}var c=t.Event("slid.bs.carousel",{relatedTarget:h,direction:r});return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,n.addClass(r),s.addClass(r),n.one("bsTransitionEnd",function(){s.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(c)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(c)),a&&this.cycle(),this}};var o=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=o,this};var n=function(i){var o,n=t(this),s=t(n.attr("data-target")||(o=n.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),n.data()),r=n.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",n).on("click.bs.carousel.data-api","[data-slide-to]",n),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=i(o),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.2",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var n=i(o),a=n.hasClass("open");if(!a&&27!=e.which||a&&27==e.which)return 27==e.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(e.target);38==e.which&&h>0&&h--,40==e.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.2",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i&&i.$tip&&i.$tip.is(":visible")?void(i.hoverState="in"):(i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(u);r="bottom"==r&&d.bottom+c>g.bottom?"top":"top"==r&&d.top-c<g.top?"bottom":"right"==r&&d.right+p>g.width?"left":"left"==r&&d.left-p<g.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(m,r);var v=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(i.TRANSITION_DURATION):v()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},r=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,r,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.width&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.2",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.2",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.2",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=t(document.body).height();"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.2",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var n=t(o);
this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(i,o){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})}e.VERSION="3.3.2",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[i]().top+o,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<=n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);;
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});;
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?module.exports=b(a,require("jquery")):b(a,jQuery)}(this,function(a,b){"use strict";var c=function(c,d){return c.each(function(){var c,e,f,g,h,i,j,k;if(j={width:null,height:null,step_size:1,step_limit:200,align_middle:!0,align_center:!0,multiline:!1,minimum_font_size:5,maximum_font_size:null,line_height:"100%"},b.extend(j,d),j.width?(i=j.width,b(this).width(i+"px")):i=b(this).width(),j.height?(g=j.height,b(this).height(g+"px")):g=b(this).height(),i&&g){for(j.multiline||b(this).css("white-space","nowrap"),h=b(this).html(),0===b("<div>"+h+"</div>").find("span.boxfitted").length?(k=b(b("<span></span>").addClass("boxfitted").html(h)),b(this).html(k)):k=b(b(this).find("span.boxfitted")[0]),c=0,e=k,b(this).css("display","table"),e.css("display","table-cell"),j.align_middle&&e.css("vertical-align","middle"),j.align_center&&(b(this).css("text-align","center"),e.css("text-align","center")),e.css("line-height",j.line_height),e.css("font-size",j.minimum_font_size);b(this).width()<=i&&b(this).height()<=g&&!(c++>j.step_limit)&&(f=parseInt(e.css("font-size"),10),!(j.maximum_font_size&&f>j.maximum_font_size));)e.css("font-size",f+j.step_size);return e.css("font-size",parseInt(e.css("font-size"),10)-j.step_size),b(this)}return null!==a.console?console.info("Set static height/width on target DIV before using boxfit! Detected width: "+i+" height: "+g):void 0})};return b.fn.boxfit=function(a){return c(this,a)},c});;
/*
 * VenoBox - jQuery Plugin
 * version: 1.6.0
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2015 Nicola Franchini - @nicolafranchini
 *
 */
(function($){

    var autoplay, bgcolor, blocknum, blocktitle, border, core, container, content, dest, 
        evitacontent, evitanext, evitaprev, extraCss, figliall, framewidth, frameheight, 
        infinigall, items, keyNavigationDisabled, margine, numeratio, overlayColor, overlay, 
        prima, title, thisgall, thenext, theprev, type, 
        finH, sonH, nextok, prevok;

    $.fn.extend({
        //plugin name - venobox
        venobox: function(options) {

          // default option
          var defaults = {
              framewidth: '',
              frameheight: '',
              border: '0',
              bgcolor: '#fff',
              titleattr: 'title', // specific attribute to get a title (e.g. [data-title]) - thanx @mendezcode
              numeratio: false,
              infinigall: false,
              overlayclose: true // disable overlay click-close - thanx @martybalandis 
          };

          var option = $.extend(defaults, options);

            return this.each(function() {
                  var obj = $(this);

                  // Prevent double initialization - thanx @matthistuff
                  if(obj.data('venobox')) {
                    return true;
                  }

                  obj.addClass('vbox-item');
                  obj.data('framewidth', option.framewidth);
                  obj.data('frameheight', option.frameheight);
                  obj.data('border', option.border);
                  obj.data('bgcolor', option.bgcolor);
                  obj.data('numeratio', option.numeratio);
                  obj.data('infinigall', option.infinigall);
                  obj.data('overlayclose', option.overlayclose);
                  obj.data('venobox', true);

                  obj.click(function(e){
                    e.stopPropagation();
                    e.preventDefault();
                    obj = $(this);
                    overlayColor = obj.data('overlay');
                    framewidth = obj.data('framewidth');
                    frameheight = obj.data('frameheight');
                    // set data-autoplay="true" for vimeo and youtube videos - thanx @zehfernandes
                    autoplay = obj.data('autoplay') || false; 
                    border = obj.data('border');
                    bgcolor = obj.data('bgcolor');
                    nextok = false;
                    prevok = false;
                    keyNavigationDisabled = false;

                    // set a different url to be loaded via ajax using data-href="" - thanx @pixeline
                    dest = obj.data('href') || obj.attr('href');
                    extraCss = obj.data( 'css' ) || "";

                    $('body').addClass('vbox-open');
                    core = '<div class="vbox-overlay ' + extraCss + '" style="background:'+ overlayColor +'"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>';

                    $('body').append(core);

                    overlay = $('.vbox-overlay');
                    container = $('.vbox-container');
                    content = $('.vbox-content');
                    blocknum = $('.vbox-num');
                    blocktitle = $('.vbox-title');

                    content.html('');
                    content.css('opacity', '0');

                    checknav();

                    overlay.css('min-height', $(window).outerHeight());

                    // fade in overlay
                    overlay.animate({opacity:1}, 100, function(){
    
                      if(obj.data('type') == 'iframe'){
                        loadIframe();
                      }else if (obj.data('type') == 'inline'){
                        loadInline();
                      }else if (obj.data('type') == 'ajax'){
                        loadAjax();
                      }else if (obj.data('type') == 'vimeo'){
                        loadVimeo(autoplay);
                      }else if (obj.data('type') == 'youtube'){
                        loadYoutube(autoplay);
                      } else {
                        content.html('<img src="'+dest+'">');
                        preloadFirst();
                      }
                    });

                    /* -------- CHECK NEXT / PREV -------- */
                    function checknav(){

                      thisgall = obj.data('gall');
                      numeratio = obj.data('numeratio');
                      infinigall = obj.data('infinigall');

                      items = $('.vbox-item[data-gall="' + thisgall + '"]');

                      if(items.length > 1 && numeratio === true){
                        blocknum.html(items.index(obj)+1 + ' / ' + items.length);
                        blocknum.show();
                      }else{
                        blocknum.hide();
                      }

                      thenext = items.eq( items.index(obj) + 1 );
                      theprev = items.eq( items.index(obj) - 1 );

                      if(obj.attr(option.titleattr)){
                        title = obj.attr(option.titleattr);
                        blocktitle.show();
                      }else{
                        title = '';
                        blocktitle.hide();
                      }

                      if (items.length > 1 && infinigall === true) {

                        nextok = true;
                        prevok = true;

                        if(thenext.length < 1 ){
                          thenext = items.eq(0);
                        }
                        if(items.index(obj) < 1 ){
                          theprev = items.eq( items.index(items.length) );
                        }

                      } else {

                        if(thenext.length > 0 ){
                          $('.vbox-next').css('display', 'block');
                          nextok = true;
                        }else{
                          $('.vbox-next').css('display', 'none');
                          nextok = false;
                        }
                        if(items.index(obj) > 0 ){
                          $('.vbox-prev').css('display', 'block');
                          prevok = true;
                        }else{
                          $('.vbox-prev').css('display', 'none');
                          prevok = false;
                        }
                      }
                    }
                    
                     /* -------- NAVIGATION CODE -------- */
                    var gallnav = {
                      
                      prev: function() {

                        if (keyNavigationDisabled) {
                          return;
                        } else {
                          keyNavigationDisabled = true;
                        }

                        overlayColor = theprev.data('overlay');

                        framewidth = theprev.data('framewidth');
                        frameheight = theprev.data('frameheight');
                        border = theprev.data('border');
                        bgcolor = theprev.data('bgcolor');
                        dest = theprev.data('href') || theprev.attr('href');

                        autoplay = theprev.data('autoplay');

                        if(theprev.attr(option.titleattr)){
                          title = theprev.attr(option.titleattr);
                        }else{
                          title = '';
                        }

                        if (overlayColor === undefined ) {
                          overlayColor = "";
                        }

                        content.animate({ opacity:0}, 200, function(){
                          
                          overlay.css('background',overlayColor);

                          if (theprev.data('type') == 'iframe') {
                            loadIframe();
                          } else if (theprev.data('type') == 'inline'){
                            loadInline();
                          } else if (theprev.data('type') == 'ajax'){
                            loadAjax();
                          } else if (theprev.data('type') == 'youtube'){
                            loadYoutube(autoplay);
                          } else if (theprev.data('type') == 'vimeo'){
                            loadVimeo(autoplay);
                          }else{
                            content.html('<img src="'+dest+'">');
                            preloadFirst();
                          }
                          obj = theprev;
                          checknav();
                          keyNavigationDisabled = false;
                        });

                      },

                      next: function() {
                        
                        if (keyNavigationDisabled) {
                          return;
                        } else {
                          keyNavigationDisabled = true;
                        }

                        overlayColor = thenext.data('overlay');

                        framewidth = thenext.data('framewidth');
                        frameheight = thenext.data('frameheight');
                        border = thenext.data('border');
                        bgcolor = thenext.data('bgcolor');
                        dest = thenext.data('href') || thenext.attr('href');
                        autoplay = thenext.data('autoplay');

                        if(thenext.attr(option.titleattr)){
                          title = thenext.attr(option.titleattr);
                        }else{
                          title = '';
                        }

                        if (overlayColor === undefined ) {
                          overlayColor = "";
                        }

                        content.animate({ opacity:0}, 200, function(){
                          
                          overlay.css('background',overlayColor);

                          if (thenext.data('type') == 'iframe') {
                            loadIframe();
                          } else if (thenext.data('type') == 'inline'){
                            loadInline();
                          } else if (thenext.data('type') == 'ajax'){
                            loadAjax();
                          } else if (thenext.data('type') == 'youtube'){
                            loadYoutube(autoplay);
                          } else if (thenext.data('type') == 'vimeo'){
                            loadVimeo(autoplay);
                          }else{
                            content.html('<img src="'+dest+'">');
                            preloadFirst();
                          }
                          obj = thenext;
                          checknav();
                          keyNavigationDisabled = false;
                        });

                      }

                    };

                    /* -------- NAVIGATE WITH ARROW KEYS -------- */
                    $('body').keydown(function(e) {

                      if(e.keyCode == 37 && prevok == true) { // left
                        gallnav.prev();
                      }

                      if(e.keyCode == 39 && nextok == true) { // right
                        gallnav.next();
                      }

                    });

                    /* -------- PREVGALL -------- */
                    $('.vbox-prev').click(function(){
                      gallnav.prev();
                    });
                    
                    /* -------- NEXTGALL -------- */
                    $('.vbox-next').click(function(){
                      gallnav.next();
                    });
                    
                    /* -------- ESCAPE HANDLER -------- */
                    function escapeHandler(e) {
                      if(e.keyCode === 27) {
                        closeVbox();
                      }
                    }

                    /* -------- CLOSE VBOX -------- */

                    function closeVbox(){
                      
                      $('body').removeClass('vbox-open');
                      $('body').unbind('keydown', escapeHandler);

                        overlay.animate({opacity:0}, 200, function(){
                          overlay.remove();
                          keyNavigationDisabled = false;
                          obj.focus();
                        });
                    }

                    /* -------- CLOSE CLICK -------- */
                    var closeclickclass = '.vbox-close, .vbox-overlay';
                    if(!obj.data('overlayclose')){
                        closeclickclass = '.vbox-close';    // close only on X
                    }

                    $(closeclickclass).click(function(e){
                      evitacontent = '.figlio';
                      evitaprev = '.vbox-prev';
                      evitanext = '.vbox-next';
                      figliall = '.figlio *';
                      if(!$(e.target).is(evitacontent) && !$(e.target).is(evitanext) && !$(e.target).is(evitaprev)&& !$(e.target).is(figliall)){
                        closeVbox();
                      }
                    });
                    $('body').keydown(escapeHandler);
                    return false;
                  });
            });
        }
    });

    /* -------- LOAD AJAX -------- */
    function loadAjax(){
      $.ajax({
      url: dest,
      cache: false
      }).done(function( msg ) {
          content.html('<div class="vbox-inline">'+ msg +'</div>');
          updateoverlay(true);

      }).fail(function() {
          content.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');
          updateoverlay(true);
      })
    }

    /* -------- LOAD IFRAME -------- */
    function loadIframe(){
      content.html('<iframe class="venoframe" src="'+dest+'"></iframe>');
    //  $('.venoframe').load(function(){ // valid only for iFrames in same domain
      updateoverlay();
    //  });
    }

    /* -------- LOAD VIMEO -------- */
    function loadVimeo(autoplay){
      var pezzi = dest.split('/');
      var videoid = pezzi[pezzi.length-1];
      var stringAutoplay = autoplay ? "?autoplay=1" : "";
      content.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="//player.vimeo.com/video/'+videoid+stringAutoplay+'"></iframe>');
      updateoverlay();
    }

    /* -------- LOAD YOUTUBE -------- */
    function loadYoutube(autoplay){
      var pezzi = dest.split('/');
      var videoid = pezzi[pezzi.length-1];
      var stringAutoplay = autoplay ? "?autoplay=1" : "";
      content.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen src="//www.youtube.com/embed/'+videoid+stringAutoplay+'"></iframe>');
      updateoverlay();
    }

    /* -------- LOAD INLINE -------- */
    function loadInline(){
      content.html('<div class="vbox-inline">'+$(dest).html()+'</div>');
      updateoverlay();
    }

    /* -------- PRELOAD IMAGE -------- */
    function preloadFirst(){
        prima = $('.vbox-content').find('img');
        prima.one('load', function() {
          updateoverlay();
        }).each(function() {
          if(this.complete) $(this).load();
        });
    }

    /* -------- CENTER ON LOAD -------- */
    function updateoverlay(){

      blocktitle.html(title);
      content.find(">:first-child").addClass('figlio');
      $('.figlio').css('width', framewidth).css('height', frameheight).css('padding', border).css('background', bgcolor);

      sonH = content.outerHeight();
      finH = $(window).height();

      if(sonH+80 < finH){
        margine = (finH - sonH)/2;
        content.css('margin-top', margine);
        content.css('margin-bottom', margine);

      }else{
        content.css('margin-top', '40px');
        content.css('margin-bottom', '40px');
      }
      content.animate({
        'opacity': '1'
      },'slow');
    }

    /* -------- CENTER ON RESIZE -------- */
    function updateoverlayresize(){
      if($('.vbox-content').length){
        sonH = content.height();
        finH = $(window).height();

        if(sonH+80 < finH){
          margine = (finH - sonH)/2;
          content.css('margin-top', margine);
          content.css('margin-bottom', margine);
        }else{
          content.css('margin-top', '40px');
          content.css('margin-bottom', '40px');
        }
      }
    }

    $(window).resize(function(){
      updateoverlayresize();
    });

})(jQuery);;
// https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
var vishidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  vishidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  vishidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  vishidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  vishidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

(function($){
  function isElementInViewport(element, tolerance) {
    var tol = tolerance || 10;
    return (
      element.offset().top + element.height() - tol >= ($('html').scrollTop() || $('body').scrollTop())
      &&
      element.offset().top + element.height() - tol <= ($('html').scrollTop() || $('body').scrollTop()) + $(window).height()
    );
  }

  // i love internet explorer

  if ("log10" in Math) {} else {
    Math.log10 = function(val) {
      return Math.log(val) / Math.LN10;
    };
  }

  var carousel_switch = 990,
    menu_switch = 768,
    eqheight_switch = menu_switch,
    // carousel_switch_alt = 880,
    carousel_switch_alt = menu_switch,
    bgperf;

  function getImgSrcFromCSS(css) {
    return css.replace(/url\((?:"|')?([^"']+)(?:"|')?\)/gi, "$1");
  }

  function slideAdjustBackground(targetElement, image) {
    var rh = targetElement.prop('scrollHeight'),
      rw = targetElement.prop('scrollWidth'),
      rs_ratio = rw / rh,

      nw = image.prop('naturalWidth'),
      nh = image.prop('naturalHeight'),
      ratio = nw / nh;

    if (ratio > rs_ratio) {
      targetElement.css('background-size', (rh * ratio) + 'px ' + rh + 'px');
    }
    else {
      targetElement.css('background-size', rw + 'px ' + (rw / ratio) + 'px');
    }
  }

  function setBackgroundImageFromImage(targetElement, image) {
    targetElement.css('background-image', 'url(' + image.attr('src') + ')');
  }

  $(function() {
    $('html').removeClass('nojs').addClass('js');

    var win = $(window),
      doc = $(document),
      body = $('body'),
      elhtml = $('html'),
      sliderperf;

    // prepare responsive carousels

    win.on('resize.slideritembg', function() {
      clearTimeout(sliderperf);
      sliderperf = setTimeout(function() {
        $('.carousel.view-id-slider .item').each(function() {
          var el = $(this),
            img = el.children('img').filter(':first');

          if (win.width() >= 300) {
            setBackgroundImageFromImage(el, img);
            slideAdjustBackground(el, img);
          }
          else {
            el.css('background-image', 'none');
          }
        });
      }, 30);
    });
    win.trigger('resize.slideritembg').on('load', function() { win.trigger('resize.slideritembg') });

    $('.carousel').carousel({interval: 8000}).on('slide.bs.carousel', function(event){
      var el = $(this),
        items = el.find('.item'),
        inner = el.find('.carousel-inner');

      if (items.length > 1 && isElementInViewport(el) /* && $(window).width() >= carousel_switch */ ) {
        setTimeout(function() {
          var  active = el.find('.active.item'),
            next = $(event.relatedTarget),
            nextH = next.height() + parseInt(next.css('padding-top')) + parseInt(next.css('padding-bottom'));

          win.trigger('resize.slideritembg');
          inner.stop().animate({ height: nextH + 'px' }, 250, function() {

          });
        }, 50);
      }
      else {
        inner.css('height', inner.height() + 'px');
      }

      win.trigger('resize.slideritembg');
    });

    if ("swiperight" in $.fn && "swipeleft" in $.fn) {
      $(".carousel").swiperight(function() {
        $(this).carousel('prev');
      });
     $(".carousel").swipeleft(function() {
        $(this).carousel('next');
     });
    }

    var carouselpauseperf;

    win.on('scroll.carouselpause', function() {
      clearTimeout(carouselpauseperf);
      carouselpauseperf = setTimeout(function() {
        $('.carousel').each(function() {
          var el = $(this);

          if (isElementInViewport(el)) {
            el.carousel('cycle');
          }
          else {
            el.carousel('pause');
          }
        });
      }, 50);
    }).trigger('scroll.carouselpause');

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // background adjust
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    if ($('#region-action_bottom').length && '' !== $('#region-action_bottom').css('background-image')) {
      var ab = $('#region-action_bottom'),
        abImg = new Image();

      abImg.onload = function() {
        slideAdjustBackground(ab, $(abImg));
      };

      abImg.src = getImgSrcFromCSS(ab.css('background-image'));

    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // header configuration
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    // var scroll_min = 30;

    // win.on('scroll.nav', function(){
    //   var stop = Math.round(win.scrollTop());
    //   if (stop > scroll_min) {
    //     body.addClass('scroll-state');
    //   }
    //   else {
    //     body.removeClass('scroll-state');
    //   }
    // }).trigger('scroll.nav');

    // header ratio =/= background ratio fix
    if ($('#region-slider').length && $('.view-id-slider_simple.view-display-id-block_1.carousel').length) {
      (function() {
        var rs = $('#region-slider'),
          bg_img_src = getImgSrcFromCSS(rs.css('background-image'));

        if (bg_img_src !== '') {
          var img = new Image();

          img.onload = function() {
            var nh = $(this).prop('naturalHeight'),
              nw = $(this).prop('naturalWidth'),
              ratio = nw / nh,
              perf;

            win.on('resize.simplesliderbg', function() {
              clearTimeout(perf);
              perf = setTimeout(function() {
                slideAdjustBackground(rs, $(img));
                // var rs_ratio = rs.width() / rs.height(),
                //   rh = rs.height(),
                //   rw = rs.width();

                // if (ratio > rs_ratio) {
                //   rs.css('background-size', (rh * ratio) + 'px ' + rh + 'px');
                // }
                // else {
                //   rs.css('background-size', rw + 'px ' + (rw / ratio) + 'px');
                // }
              }, 50);
            }).trigger('resize.simplesliderbg');
          };

          img.src = bg_img_src;
        }
      })();
    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // news configuration
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    $('.view-news .collapse, .view-newscols .collapse').each(function() {
      var el = $(this),
        row = el.closest('.views-row');

      el.on('show.bs.collapse', function() {
        row.addClass('open');
        window.location.hash = '#_' + el.attr('id');
      });

      el.on('hide.bs.collapse', function() {
        row.removeClass('open');
        if (window.location.hash.indexOf('#_') === 0) {
          // window.location.hash = '';
        }
      });
    });

    $('.view-news .list-group > .list-group-item, .view-newscols .list-group > .list-group-item').each(function() {
      var el = $(this);

      el.children().not('div:has(".list-group-item-heading")').click(function() {
        if (!el.hasClass('open')) {
          el.find('.list-group-item-heading a').click();
        }
      });
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // general
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    $('.nav-tabs li > a[role="tab"]').click(function() {
      window.location.hash = $(this).attr('href');
    });


    $('a:not([data-toggle], [data-slide], [class*="carousel-"])[href^="#"]').filter(function() {
      return !!($( $(this).attr('href') ).length);
    }).click(function(event) {
      event.preventDefault();
      var href = $(this).attr('href'),
        _href = $(href),
        scrollTo = parseInt( _href.offset().top ) - 20;

      $('html,body').stop().animate({
        scrollTop: scrollTo
      }, 1000, function() {
        setTimeout(function() {
          window.location.hash = href.replace('#', '');
          $('html,body').scrollTop(scrollTo);
        }, 200);

        if (
          ( _href.hasClass('collapse') || _href.hasClass('bscollapse') )
          &&  _href.find('a[data-toggle="collapse"].collapsed').length
        ) {
          _href.find('a[data-toggle="collapse"].collapsed').click();
        }
      });
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // news | general
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    $('.view-news, .view-newscols').on('click', '.click-to-share', function() {
      var btn = $(this);
      if (!window["FB"]) {
        (function($) {Drupal.behaviors.ws_fs = {scriptadded: false,attach: function (context, settings) {if (!this.scriptadded) {var fdiv_root, js, div_root ;var fjs = document.getElementsByTagName('script')[0];if (!document.getElementById('fb-root')) {div_root = document.createElement('div');div_root.id = 'fb-root';document.body.appendChild(div_root);}if (!document.getElementById('facebook-jssdk')) {js = document.createElement('script'); js.id = 'facebook-jssdk';js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&type=button" + Drupal.settings.ws_fs.app_id;fjs.parentNode.insertBefore(js, fjs);this.scriptadded = true;}}$('a.service-links-facebook-share', context).once(function(){var f_text = document.createElement('fb:share-button');var css = Drupal.settings.ws_fs.css.split(';');var key_value = new Array();f_text.setAttribute('type', Drupal.settings.ws_fs.type);f_text.setAttribute('href', $(this).attr('rel'));for (i = 0; i < css.length; i++){key_value = css[i].split(':');$(f_text).css(key_value[0], key_value[1]);}$(this).replaceWith(f_text);});}}})(jQuery);
        Drupal.settings.ws_fs.type = 'button';
        Drupal.behaviors.ws_fs.attach();
      }

      if (!window["twttr"]) {
        (function ($) {Drupal.behaviors.ws_tb ={scriptadded: false,attach: function(context, settings) {if (this.scriptadded) {twttr.widgets.load();} else {$('a.service-links-twitter-widget', context).each(function(){$(this).attr('href', $(this).attr('href').replace(/((?:counturl\=|^))http[s]*\%3A\/\//g, "$1"));});$.getScript('http://platform.twitter.com/widgets.js', function () {this.scriptadded = true;});}}}})(jQuery);
        Drupal.behaviors.ws_tb.attach();
      }
      btn.hide();
      btn.siblings().removeClass('hidden');
    });

    body.on('hide.bs.modal', '.modal', function() {
      var modal = $(this).find('.modal-dialog');

      if (modal.find('iframe').length) {
        modal.find('iframe').each(function() {
          var frame = $(this),
            src = frame.attr('src');

          frame.attr('src', '/').hide().attr('src', src).show();
        });
      }
    });

    $('table span.glyphicon-minus').each(function() {
      var tr = $(this).closest('tr'),
        index = $('table').find('tr').index(tr.get(0)),
        collapsed = tr.nextUntil('tr:not(.collapse)');

      tr.addClass('has-collapsibles');

      collapsed.collapse({toggle: false});

      tr.click(function() {
        collapsed.collapse('toggle');
      });

      collapsed.eq(0).on('show.bs.collapse', function() {
        tr.addClass('open');
      });

      collapsed.eq(0).on('hidden.bs.collapse', function() {
        tr.removeClass('open');
      });
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // mobile menu
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    var mobileEvent = 'click';

    if ('ontouchstart' in window) {
        mobileEvent = 'touchstart';
    }
    else if (window.navigator.pointerEnabled) {
      mobileEvent = 'pointerdown';
    }
    else if (window.navigator.msPointerEnabled) {
      mobileEvent = 'MSPointerDown';
    }
    else {
      mobileEvent = 'click';
    }

    $('li.dropdown-submenu > a').on(mobileEvent, function(event){
      var el = $(this),
        p = el.parent();

      if (p.hasClass('open')) {

      }
      else if (
        el.siblings('ul').length
        && ( win.width() < menu_switch )
      ) {
        event.preventDefault();
        p.addClass('open');
        return false;
      }
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // boxfit | auto size
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    if (false && win.width() < 500) {
      $('h1:visible').each(function() {
        $(this).boxfit({
          maximum_font_size: parseInt( $(this).css('font-size') ),
          minimum_font_size: 20,
          multiline: true,
          align_center: false
        });
      });
    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // language switch
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    if ($('#block-locale-language').length && $('.language-switcher-locale-url').length) {
      // es6 please
      (function() {
        var la = $('.language-switcher-locale-url > li > a');

        if (la.length <= 1) {
          $('#block-locale-language').hide();
        }
      })();
    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // ajax sweetener | ajax fade
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    // function to determine if the just occured ajax event
    // relates to a block with ajax-fade class
    function handleAjaxGlobalEvent(event, xhr, settings) {
      if (settings.url && settings.url.indexOf('views/ajax') > -1 && settings.data && settings.data.length) {
        var data = getAjaxEventSettingsData(settings),
            view = $('.view').filter(function() {
              return !!( $(this).hasClass('view-id-' + data.view_name) && $(this).hasClass('view-display-id-' + data.view_display_id) );
            }),
            block = view.closest('.block-views');

        if (block.length && block.hasClass('ajax-fade')) {
          ajaxHandleFade(event, xhr, data);
        }
      }
    }

    // helper function to turn url params to object
    function getAjaxEventSettingsData(settings) {
      var _data = settings.data.split('&'),
        data = {};

      for (var i = 0; i < _data.length; i++) {
        var tmp = _data[i].split('=');
        if (tmp[0].indexOf('%') < 0) {
          data[tmp[0]] = tmp[1];
        }
      };

      return data;
    }

    // apply the fading
    function ajaxHandleFade(event, xhr, data) {
      if ('ajaxSend' == event.type) {
        var view = $('.view').filter(function() {
            return !!( $(this).hasClass('view-id-' + data.view_name) && $(this).hasClass('view-display-id-' + data.view_display_id) );
          }),
          block = view.closest('.block-views'),
          clone = view.clone();

        block.addClass('ajax-send');
        clone.removeClass(function() {
          var classes = $(this).attr('class').split(' '),
            domid;

          for (var i = 0; i < classes.length; i++) {
            if (classes[i].indexOf('view-dom-id-') > -1) {
              domid = classes[i];
              $(this).data('domid', domid);
              break;
            }
          }

          return domid;
        });

        var wrap = clone.wrap('<div class="cloned"></div>').parent().hide().insertAfter(view);

        wrap.show();
        view.hide();
      }

      if ('ajaxSuccess' == event.type) {
        setTimeout(function() {
          $('body, html').stop();
          var view = $('.view').filter(function() {
              return !!( $(this).hasClass('view-id-' + data.view_name) && $(this).hasClass('view-display-id-' + data.view_display_id) );
            }),
            block = view.closest('.block-views'),
            wrap = view.siblings('.cloned'),
            clone = wrap.children();

          wrap.stop().fadeTo(500, 0, function() {
            wrap.remove();
            view.stop().fadeTo(0, 0);
            block.removeClass('ajax-send');
            view.stop().show().fadeTo(500, 1);
          });
        }, 50);
      }
    }

    doc.ajaxSend(function(event, xhr, settings) {
      handleAjaxGlobalEvent(event, xhr, settings);
    });

    doc.ajaxSuccess(function(event, xhr, settings) {
      handleAjaxGlobalEvent(event, xhr, settings);
      win.trigger('resize.slideritembg');
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // ajax refresh
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    var ajaxAutoRefreshInterval = 10 * 1000;

    if ($('.block-views.ajax-auto-refresh').length) {

      $('.block-views.ajax-auto-refresh').on('click', '.pager li a', function(event) {
        event.preventDefault();
      });

      function ajaxAutoRefresh(block, indicator) {
        block.find('.ajax-refresh-indicator').stop();
        var remainingTime = ajaxAutoRefreshInterval - (indicator.width() / block.width() * ajaxAutoRefreshInterval);
        indicator.stop(true).animate({
          width: block.width() + 'px'
        }, remainingTime, 'linear', function() {
          if (block.data('hovered') !== true && win.width() >= menu_switch) {
            var pager = block.find('ul.pager'),
              prev = pager.find('.pager-previous'),
              next = pager.find('.pager-next');

            if (prev.find('a').length < 1 && next.find('a').length > 0) {
              block.data('target', '.pager-next a');
            }

            if (prev.find('a').length > 0 && next.find('a').length < 1) {
              block.data('target', '.pager-previous a');
            }

            if (undefined === block.data('target')) {
              if (next.find('a').length > 0) {
                block.data('target', '.pager-next a');
              }
            }
            pager.find(block.data('target')).click();
            indicator.css('width', '0%');
          }
        });
      }

      $('.block-views.ajax-auto-refresh').each(function() {
        var block = $(this),
          view = block.children('.view');


        if (!view.children('.ajax-refresh-indicator').length) {
          $('<div class="ajax-refresh-indicator"></div>').appendTo(view);
        }
        var indicator = view.children('.ajax-refresh-indicator');

        block.on('mouseenter.ajaxautorefresh', function() {
          $(this).data('hovered', true);
          block.find('.ajax-refresh-indicator').stop();
        }).on('mouseleave.ajaxautorefresh', function() {
          $(this).data('hovered', false);
          ajaxAutoRefresh(block, block.find('.ajax-refresh-indicator').filter(':visible').filter(':first'));
        });

        if (block.data('hovered') !== true && win.width() >= menu_switch) {
          ajaxAutoRefresh(block, indicator);
        }

        $(document).on('ajaxSuccess.ajaxautorefresh', function(event, xhr, settings) {
          setTimeout(function() {
            var view = block.children('.view');
            if (!view.children('.ajax-refresh-indicator').length) {
              $('<div class="ajax-refresh-indicator"></div>').appendTo(view);
            }
            var indicator = view.children('.ajax-refresh-indicator');
            ajaxAutoRefresh(block, indicator);
          }, 550);
        });
      });

      if (vishidden && typeof document[vishidden] !== "undefined") {
        $(document).on(visibilityChange + '.ajaxautorefresh', function() {
          if (document[vishidden]) {
            $('.block-views.ajax-auto-refresh-indicator').trigger('mouseenter.ajaxautorefresh');
          }
          else {
            $('.block-views.ajax-auto-refresh-indicator').trigger('mouseleave.ajaxautorefresh');
          }
        });
      }
    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // trifold
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    $('.row.trifold > div[class*="col"]').each(function() {
      var col = $(this),
        link = col.find('a');

      if (!link.filter('.overlay').length) {
        if (link.length > 1) {
          if (link.filter('.btn').length) {
            link = link.filter('.btn').eq(0);
          }
          else {
            link = link.eq(0);
          }
        }

        link.clone().removeAttr('class').addClass('overlay').html('').appendTo(col);
      }
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // equal heights
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    var eq_perf;

    function adjustEqualHeights() {
      $('.eq-height').each(function() {
        var row = $(this),
          cols = row.children(),
          colHeights = new Array(cols.length);

        cols.each(function(colIndex) {
          var col = $(this);

          if (row.hasClass('eq-height-sub')) {
            col.children().css('height', 'auto');
          }
          colHeights[colIndex] = col.css('height', 'auto').height();
        });

        if (Math.min.apply(null, colHeights) !== Math.max.apply(null, colHeights)) {
          var max = Math.max.apply(null, colHeights);

          cols.each(function() {
            var col = $(this);
            col.css('height', max + 'px');

            if (row.hasClass('eq-height-sub')) {
              col.children()
              .css({
                'height': max + 'px',
                'display': 'block'
              });
            }
          });
        }
      });
    }

    win.on('resize.eq', function() {
      clearTimeout(eq_perf);
      eq_perf = setTimeout(function() {
        if (win.width() >= eqheight_switch) {
          adjustEqualHeights();
        }
      }, 100);
    }).trigger('resize.eq');

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // light box
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    if ($('.view-content .gallery-item').length) {
      var items = $('.view-content .gallery-item');

      items.venobox({
        infinigall: true
      });
    }

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // search
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    if ($('#search-block-form input:not([type="hidden"])').length && $('#search-block-form').length) {
      (function() {
        function searchInputFadeIn(focus) {
          ancest.addClass('opening').removeClass('closing');
          searchInput.stop().animate({
            'opacity': 1,
            'width': '200px',
            'padding-right': '40px'
          }, 300, function() {
            ancest.addClass('open').removeClass('closing').removeClass('opening');
            if (focus) {
              searchInput.focus();
            }
          });
        }

        function searchInputFadeOut() {
          ancest.addClass('closing').removeClass('opening').removeClass('open');
          searchInput.stop().animate({
            'opacity': 0,
            'width': '40px',
            'padding-right': '12px'
          }, 300, function() {
             ancest.removeClass('closing').removeClass('opening').removeClass('open');
          });
        }

        var ancest = $('#search-block-form'),
          searchInput = ancest.find('input[type="text"]').first(),
          submit = ancest.find('button[type="submit"]').first(),
          blurT;

        searchInput.css({
          'display': 'block',
          'visibility': 'visible',
          'opacity': 0
        });

        searchInput.on('blur', function() {
          blurT = setTimeout(function() {
            searchInputFadeOut();
          }, 150);
        });

        ancest.on('submit', function() {
          if ('' == searchInput.val()) {
            return false;
          }
        });

        submit.on('click touch', function(event) {
          event.preventDefault();
          clearTimeout(blurT);

          if (ancest.hasClass('opening')) {
            // searchInputFadeOut();
          }
          else if (ancest.hasClass('open')) {
            ancest.submit();
          }
          else {
            searchInputFadeIn(true);
          }
        });


      })();
    }

  });

  $(window).load(function() {
    var win = $(window);

    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // news configuration
    //
    // ++++++++++++++++++++++++++++++++++++++++++

    $('.view-news.view-display-id-attachment_1 .views-field-body').each(function() {
      var el = $(this),
        expbr = el.find('.expand-break'),
        inner = el.find('.field-content'),
        height_slave = inner.children(),
        pgrph = inner.find('p').filter(':first'),
        heading = el.closest('.views-row').find('.list-group-item-heading').filter(':first').find('span'),
        title = heading.attr('data-title'),
        exp = $('<a href="" class="more-link">&raquo;</a>');

      if (el.find('.expand-break').length) {
        expbr.html(' ... ');
        expbr.append(exp);
        expbr.append('<br />');

        inner.css({
          height: (expbr.position().top + parseInt(pgrph.css('line-height'))) + 'px'
        });

        if (exp.offset().top + 3 >= inner.offset().top + inner.height()) {
          inner.css({
            height: '+=20px'
          });
        }

        inner.data('height', inner.height());

        exp.click(function(event) {
          event.preventDefault();

          expbr.hide();

          setTimeout(function() {
            inner.stop().animate({"height": (height_slave.prop('scrollHeight') ) + 'px'}, 400, function() {
              // inner.data('state', 'open');
              inner.addClass('open');
              window.location.hash = '#_' + title;
            });
          }, 80);
        });

        heading.click(function() {
          if (inner.hasClass('open')) {
            setTimeout(function() {
              inner.stop().animate({"height": inner.data('height') + 'px'}, 400, function() {
              expbr.show(300);
                inner.removeClass('open');
              });
            }, 80);
          }
          else {
            exp.click();
          }
        });
      }
      else {
        inner.css({
          height: 'auto'
        });
      }
    });

    if (window.location.hash) {
      if (window.location.hash.indexOf('#_') > -1 && $(window.location.hash.replace('#_', '#')).length) {
        setTimeout(function() {
          var id = window.location.hash.replace('#_', '#'),
            content = $(id),
            headline = content.closest('.views-row'),
            x = parseInt(headline.offset().top) - $('#navbar').height() - 20;

          if ($(id).hasClass('collapse')) {
            $(id).collapse('show');
          }
          else if ($(id).find('.expand-break').length && $(id).find('.more-link').length) {
            $(id).find('.more-link').click();
          }
          $('html, body').stop().animate({scrollTop: x}, 300);
        }, 150);
      }

      if ($('a.show-tab[href="' + window.location.hash + '"]').length) {
        setTimeout(function() {
          $('a.show-tab[href="' + window.location.hash + '"]').click();
        }, 50);
      }
      else if ($('a[href="' + window.location.hash + '"]').filter('[role="tab"]').length) {
        $('a[href="' + window.location.hash + '"]').filter('[role="tab"]').click();
      }
    }

  });

	/*----------------------------------------------------*/
	/*	customer pager / mecca_tweets pager
	/*----------------------------------------------------*/
  setTimeout(function() {
	if ($('#block-views-inhalts-teaser-block').length) {
		$(document).ajaxSuccess(function(event, xhr, settings) {

			if (settings && settings.url && settings.url.indexOf("views/ajax") > -1) {


				var data = settings.data,
					_d = data.split("&"),
					o = {};

				for (i = 0; i < _d.length; i++) {
					var e = _d[i].split("=");
						o[""+e[0]] = e[1];
				};

        var block = $('#block-block-39');
        block.addClass('ajax');
				if (o.page && o.page == "3" && o.view_name == 'inhalts_teaser') {
					// block.find('.pager-next').html('<a href="kunden">noch mehr Kunden anzeigen</a>');
          block.find('.pager-next').hide();
				}
        else if (typeof o.page == 'undefined' && o.view_name == 'inhalts_teaser') {
          block.find('.pager-previous').hide();
        }
			}
		});
	}
  }, 1000);

})(jQuery);
;
