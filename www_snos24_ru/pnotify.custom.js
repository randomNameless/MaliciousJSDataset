!function(t,i){"function"==typeof define&&define.amd?define("pnotify",["jquery"],function(o){return i(o,t)}):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),global||t):t.PNotify=i(t.jQuery,t)}("undefined"!=typeof window?window:this,function(t,i){var o=function(i){var e,n,s={dir1:"down",dir2:"left",push:"bottom",spacing1:36,spacing2:36,context:t("body"),modal:!1},a=t(i),c=function(){n=t("body"),r.prototype.options.stack.context=n,(a=t(i)).bind("resize",function(){e&&clearTimeout(e),e=setTimeout(function(){r.positionAll(!0)},10)})},r=function(t){this.state="initializing",this.timer=null,this.animTimer=null,this.styles=null,this.elem=null,this.container=null,this.title_container=null,this.text_container=null,this.animating=!1,this.timerHide=!1,this.parseOptions(t),this.init()};return t.extend(r.prototype,{version:"3.2.0",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,animation:"fade",animate_speed:"normal",shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:s},modules:{},runModules:function(t,i){var o;for(var e in this.modules)o="object"==typeof i&&e in i?i[e]:i,"function"==typeof this.modules[e][t]&&(this.modules[e].notice=this,this.modules[e].options="object"==typeof this.options[e]?this.options[e]:{},this.modules[e][t](this,"object"==typeof this.options[e]?this.options[e]:{},o))},init:function(){var i=this;return this.modules={},t.extend(!0,this.modules,r.prototype.modules),"object"==typeof this.options.styling?this.styles=this.options.styling:this.styles=r.styling[this.options.styling],this.elem=t("<div />",{class:"ui-pnotify "+this.options.addclass,css:{display:"none"},"aria-live":"assertive","aria-role":"alertdialog",mouseenter:function(t){if(i.options.mouse_reset&&"out"===i.animating){if(!i.timerHide)return;i.cancelRemove()}i.options.hide&&i.options.mouse_reset&&i.cancelRemove()},mouseleave:function(t){i.options.hide&&i.options.mouse_reset&&"out"!==i.animating&&i.queueRemove(),r.positionAll()}}),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed),this.container=t("<div />",{class:this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),role:"alert"}).appendTo(this.elem),""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass),this.options.shadow&&this.container.addClass("ui-pnotify-shadow"),!1!==this.options.icon&&t("<div />",{class:"ui-pnotify-icon"}).append(t("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container),this.title_container=t("<h4 />",{class:"ui-pnotify-title"}).appendTo(this.container),!1===this.options.title?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),this.text_container=t("<div />",{class:"ui-pnotify-text","aria-role":"alert"}).appendTo(this.container),!1===this.options.text?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),"string"==typeof this.options.width&&this.elem.css("width",this.options.width),"string"==typeof this.options.min_height&&this.container.css("min-height",this.options.min_height),"top"===this.options.stack.push?r.notices=t.merge([this],r.notices):r.notices=t.merge(r.notices,[this]),"top"===this.options.stack.push&&this.queuePosition(!1,1),this.options.stack.animation=!1,this.runModules("init"),this.state="closed",this.options.auto_display&&this.open(),this},update:function(i){var o=this.options;return this.parseOptions(o,i),this.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-"+this.options.animate_speed),this.options.cornerclass!==o.cornerclass&&this.container.removeClass("ui-corner-all "+o.cornerclass).addClass(this.options.cornerclass),this.options.shadow!==o.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow")),!1===this.options.addclass?this.elem.removeClass(o.addclass):this.options.addclass!==o.addclass&&this.elem.removeClass(o.addclass).addClass(this.options.addclass),!1===this.options.title?this.title_container.slideUp("fast"):this.options.title!==o.title&&(this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),!1===o.title&&this.title_container.slideDown(200)),!1===this.options.text?this.text_container.slideUp("fast"):this.options.text!==o.text&&(this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),!1===o.text&&this.text_container.slideDown(200)),this.options.type!==o.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),(this.options.icon!==o.icon||!0===this.options.icon&&this.options.type!==o.type)&&(this.container.find("div.ui-pnotify-icon").remove(),!1!==this.options.icon&&t("<div />",{class:"ui-pnotify-icon"}).append(t("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container)),this.options.width!==o.width&&this.elem.animate({width:this.options.width}),this.options.min_height!==o.min_height&&this.container.animate({minHeight:this.options.min_height}),this.options.hide?o.hide||this.queueRemove():this.cancelRemove(),this.queuePosition(!0),this.runModules("update",o),this},open:function(){this.state="opening",this.runModules("beforeOpen");var t=this;return this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:n),"top"!==this.options.stack.push&&this.position(!0),this.animateIn(function(){t.queuePosition(!0),t.options.hide&&t.queueRemove(),t.state="open",t.runModules("afterOpen")}),this},remove:function(o){this.state="closing",this.timerHide=!!o,this.runModules("beforeClose");var e=this;return this.timer&&(i.clearTimeout(this.timer),this.timer=null),this.animateOut(function(){if(e.state="closed",e.runModules("afterClose"),e.queuePosition(!0),e.options.remove&&e.elem.detach(),e.runModules("beforeDestroy"),e.options.destroy&&null!==r.notices){var i=t.inArray(e,r.notices);-1!==i&&r.notices.splice(i,1)}e.runModules("afterDestroy")}),this},get:function(){return this.elem},parseOptions:function(i,o){this.options=t.extend(!0,{},r.prototype.options),this.options.stack=r.prototype.options.stack;for(var e,n=[i,o],s=0;s<n.length&&void 0!==(e=n[s]);s++)if("object"!=typeof e)this.options.text=e;else for(var a in e)this.modules[a]?t.extend(!0,this.options[a],e[a]):this.options[a]=e[a]},animateIn:function(t){this.animating="in";var i=this,o=function(){i.animTimer&&clearTimeout(i.animTimer),"in"===i.animating&&(i.elem.is(":visible")?(t&&t.call(),i.animating=!1):i.animTimer=setTimeout(o,40))};"fade"===this.options.animation?(this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend",o).addClass("ui-pnotify-in"),this.elem.css("opacity"),this.elem.addClass("ui-pnotify-fade-in"),this.animTimer=setTimeout(o,650)):(this.elem.addClass("ui-pnotify-in"),o())},animateOut:function(i){this.animating="out";var o=this,e=function(){if(o.animTimer&&clearTimeout(o.animTimer),"out"===o.animating)if("0"!=o.elem.css("opacity")&&o.elem.is(":visible"))o.animTimer=setTimeout(e,40);else{if(o.elem.removeClass("ui-pnotify-in"),o.options.stack.overlay){var n=!1;t.each(r.notices,function(t,i){i!=o&&i.options.stack===o.options.stack&&"closed"!=i.state&&(n=!0)}),n||o.options.stack.overlay.hide()}i&&i.call(),o.animating=!1}};"fade"===this.options.animation?(this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend",e).removeClass("ui-pnotify-fade-in"),this.animTimer=setTimeout(e,650)):(this.elem.removeClass("ui-pnotify-in"),e())},position:function(i){var o=this.options.stack,e=this.elem;if(void 0===o.context&&(o.context=n),o){"number"!=typeof o.nextpos1&&(o.nextpos1=o.firstpos1),"number"!=typeof o.nextpos2&&(o.nextpos2=o.firstpos2),"number"!=typeof o.addpos2&&(o.addpos2=0);var s=!e.hasClass("ui-pnotify-in");if(!s||i){var c,l,p,u;switch(o.modal&&(o.overlay?o.overlay.show():o.overlay=function(i){var o=t("<div />",{class:"ui-pnotify-modal-overlay"});return o.prependTo(i.context),i.overlay_close&&o.click(function(){r.removeStack(i)}),o}(o)),e.addClass("ui-pnotify-move"),o.dir1){case"down":p="top";break;case"up":p="bottom";break;case"left":p="right";break;case"right":p="left"}switch(c=parseInt(e.css(p).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(c)&&(c=0),void 0!==o.firstpos1||s||(o.firstpos1=c,o.nextpos1=o.firstpos1),o.dir2){case"down":u="top";break;case"up":u="bottom";break;case"left":u="right";break;case"right":u="left"}switch(l=parseInt(e.css(u).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(l)&&(l=0),void 0!==o.firstpos2||s||(o.firstpos2=l,o.nextpos2=o.firstpos2),("down"===o.dir1&&o.nextpos1+e.height()>(o.context.is(n)?a.height():o.context.prop("scrollHeight"))||"up"===o.dir1&&o.nextpos1+e.height()>(o.context.is(n)?a.height():o.context.prop("scrollHeight"))||"left"===o.dir1&&o.nextpos1+e.width()>(o.context.is(n)?a.width():o.context.prop("scrollWidth"))||"right"===o.dir1&&o.nextpos1+e.width()>(o.context.is(n)?a.width():o.context.prop("scrollWidth")))&&(o.nextpos1=o.firstpos1,o.nextpos2+=o.addpos2+(void 0===o.spacing2?25:o.spacing2),o.addpos2=0),"number"==typeof o.nextpos2&&(o.animation?e.css(u,o.nextpos2+"px"):(e.removeClass("ui-pnotify-move"),e.css(u,o.nextpos2+"px"),e.css(u),e.addClass("ui-pnotify-move"))),o.dir2){case"down":case"up":e.outerHeight(!0)>o.addpos2&&(o.addpos2=e.height());break;case"left":case"right":e.outerWidth(!0)>o.addpos2&&(o.addpos2=e.width())}switch("number"==typeof o.nextpos1&&(o.animation?e.css(p,o.nextpos1+"px"):(e.removeClass("ui-pnotify-move"),e.css(p,o.nextpos1+"px"),e.css(p),e.addClass("ui-pnotify-move"))),o.dir1){case"down":case"up":o.nextpos1+=e.height()+(void 0===o.spacing1?25:o.spacing1);break;case"left":case"right":o.nextpos1+=e.width()+(void 0===o.spacing1?25:o.spacing1)}}return this}},queuePosition:function(t,i){return e&&clearTimeout(e),i||(i=10),e=setTimeout(function(){r.positionAll(t)},i),this},cancelRemove:function(){return this.timer&&i.clearTimeout(this.timer),this.animTimer&&i.clearTimeout(this.animTimer),"closing"===this.state&&(this.state="open",this.animating=!1,this.elem.addClass("ui-pnotify-in"),"fade"===this.options.animation&&this.elem.addClass("ui-pnotify-fade-in")),this},queueRemove:function(){var t=this;return this.cancelRemove(),this.timer=i.setTimeout(function(){t.remove(!0)},isNaN(this.options.delay)?0:this.options.delay),this}}),t.extend(r,{notices:[],reload:o,removeAll:function(){t.each(r.notices,function(t,i){i.remove&&i.remove(!1)})},removeStack:function(i){t.each(r.notices,function(t,o){o.remove&&o.options.stack===i&&o.remove(!1)})},positionAll:function(i){if(e&&clearTimeout(e),e=null,r.notices&&r.notices.length)t.each(r.notices,function(t,o){var e=o.options.stack;e&&(e.overlay&&e.overlay.hide(),e.nextpos1=e.firstpos1,e.nextpos2=e.firstpos2,e.addpos2=0,e.animation=i)}),t.each(r.notices,function(t,i){i.position()});else{var o=r.prototype.options.stack;o&&(delete o.nextpos1,delete o.nextpos2)}},styling:{brighttheme:{container:"brighttheme",notice:"brighttheme-notice",notice_icon:"brighttheme-icon-notice",info:"brighttheme-info",info_icon:"brighttheme-icon-info",success:"brighttheme-success",success_icon:"brighttheme-icon-success",error:"brighttheme-error",error_icon:"brighttheme-icon-error"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}}),r.styling.fontawesome=t.extend({},r.styling.bootstrap3),t.extend(r.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"}),i.document.body?c():t(c),r};return o(i)}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.animate",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i.prototype.options.animate={animate:!1,in_class:"",out_class:""},i.prototype.modules.animate={init:function(t,i){this.setUpAnimations(t,i),t.attention=function(i,o){t.elem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.elem.removeClass(i),o&&o.call(t)}).addClass("animated "+i)}},update:function(t,i,o){i.animate!=o.animate&&this.setUpAnimations(t,i)},setUpAnimations:function(t,i){if(i.animate){t.options.animation="none",t.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"),t._animateIn||(t._animateIn=t.animateIn),t._animateOut||(t._animateOut=t.animateOut),t.animateIn=this.animateIn.bind(this),t.animateOut=this.animateOut.bind(this);var o=400;"slow"===t.options.animate_speed?o=600:"fast"===t.options.animate_speed?o=200:t.options.animate_speed>0&&(o=t.options.animate_speed),o/=1e3,t.elem.addClass("animated").css({"-webkit-animation-duration":o+"s","-moz-animation-duration":o+"s","animation-duration":o+"s"})}else t._animateIn&&t._animateOut&&(t.animateIn=t._animateIn,delete t._animateIn,t.animateOut=t._animateOut,delete t._animateOut,t.elem.addClass("animated"))},animateIn:function(t){this.notice.animating="in";var i=this;t=function(){i.notice.elem.removeClass(i.options.in_class),this&&this.call(),i.notice.animating=!1}.bind(t),this.notice.elem.show().one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t).removeClass(this.options.out_class).addClass("ui-pnotify-in").addClass(this.options.in_class)},animateOut:function(t){this.notice.animating="out";var i=this;t=function(){i.notice.elem.removeClass("ui-pnotify-in "+i.options.out_class),this&&this.call(),i.notice.animating=!1}.bind(t),this.notice.elem.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t).removeClass(this.options.in_class).addClass(this.options.out_class)}},i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,show_on_nonblock:!1,labels:{close:"Close",stick:"Stick",unstick:"Unstick"},classes:{closer:null,pin_up:null,pin_down:null}},i.prototype.modules.buttons={init:function(i,o){var e=this;i.elem.on({mouseenter:function(t){!e.options.sticker||i.options.nonblock&&i.options.nonblock.nonblock&&!e.options.show_on_nonblock||e.sticker.trigger("pnotify:buttons:toggleStick").css("visibility","visible"),!e.options.closer||i.options.nonblock&&i.options.nonblock.nonblock&&!e.options.show_on_nonblock||e.closer.css("visibility","visible")},mouseleave:function(t){e.options.sticker_hover&&e.sticker.css("visibility","hidden"),e.options.closer_hover&&e.closer.css("visibility","hidden")}}),this.sticker=t("<div />",{class:"ui-pnotify-sticker","aria-role":"button","aria-pressed":i.options.hide?"false":"true",tabindex:"0",title:i.options.hide?o.labels.stick:o.labels.unstick,css:{cursor:"pointer",visibility:o.sticker_hover?"hidden":"visible"},click:function(){i.options.hide=!i.options.hide,i.options.hide?i.queueRemove():i.cancelRemove(),t(this).trigger("pnotify:buttons:toggleStick")}}).bind("pnotify:buttons:toggleStick",function(){var o=null===e.options.classes.pin_up?i.styles.pin_up:e.options.classes.pin_up,n=null===e.options.classes.pin_down?i.styles.pin_down:e.options.classes.pin_down;t(this).attr("title",i.options.hide?e.options.labels.stick:e.options.labels.unstick).children().attr("class","").addClass(i.options.hide?o:n).attr("aria-pressed",i.options.hide?"false":"true")}).append("<span />").trigger("pnotify:buttons:toggleStick").prependTo(i.container),(!o.sticker||i.options.nonblock&&i.options.nonblock.nonblock&&!o.show_on_nonblock)&&this.sticker.css("display","none"),this.closer=t("<div />",{class:"ui-pnotify-closer","aria-role":"button",tabindex:"0",title:o.labels.close,css:{cursor:"pointer",visibility:o.closer_hover?"hidden":"visible"},click:function(){i.remove(!1),e.sticker.css("visibility","hidden"),e.closer.css("visibility","hidden")}}).append(t("<span />",{class:null===o.classes.closer?i.styles.closer:o.classes.closer})).prependTo(i.container),(!o.closer||i.options.nonblock&&i.options.nonblock.nonblock&&!o.show_on_nonblock)&&this.closer.css("display","none")},update:function(t,i){!i.closer||t.options.nonblock&&t.options.nonblock.nonblock&&!i.show_on_nonblock?this.closer.css("display","none"):i.closer&&this.closer.css("display","block"),!i.sticker||t.options.nonblock&&t.options.nonblock.nonblock&&!i.show_on_nonblock?this.sticker.css("display","none"):i.sticker&&this.sticker.css("display","block"),this.sticker.trigger("pnotify:buttons:toggleStick"),this.closer.find("span").attr("class","").addClass(null===i.classes.closer?t.styles.closer:i.classes.closer),i.sticker_hover?this.sticker.css("visibility","hidden"):t.options.nonblock&&t.options.nonblock.nonblock&&!i.show_on_nonblock||this.sticker.css("visibility","visible"),i.closer_hover?this.closer.css("visibility","hidden"):t.options.nonblock&&t.options.nonblock.nonblock&&!i.show_on_nonblock||this.closer.css("visibility","visible")}},t.extend(i.styling.brighttheme,{closer:"brighttheme-icon-closer",pin_up:"brighttheme-icon-sticker",pin_down:"brighttheme-icon-sticker brighttheme-icon-stuck"}),t.extend(i.styling.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),t.extend(i.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"}),i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.callbacks",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){var o=i.prototype.init,e=i.prototype.open,n=i.prototype.remove;return i.prototype.init=function(){this.options.before_init&&this.options.before_init(this.options),o.apply(this,arguments),this.options.after_init&&this.options.after_init(this)},i.prototype.open=function(){var t;this.options.before_open&&(t=this.options.before_open(this)),!1!==t&&(e.apply(this,arguments),this.options.after_open&&this.options.after_open(this))},i.prototype.remove=function(t){var i;this.options.before_close&&(i=this.options.before_close(this,t)),!1!==i&&(n.apply(this,arguments),this.options.after_close&&this.options.after_close(this,t))},i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.confirm",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i.prototype.options.confirm={confirm:!1,prompt:!1,prompt_class:"",prompt_default:"",prompt_multi_line:!1,align:"right",buttons:[{text:"Ok",addClass:"",promptTrigger:!0,click:function(t,i){t.remove(),t.get().trigger("pnotify.confirm",[t,i])}},{text:"Cancel",addClass:"",click:function(t){t.remove(),t.get().trigger("pnotify.cancel",t)}}]},i.prototype.modules.confirm={init:function(i,o){this.container=t('<div class="ui-pnotify-action-bar" style="margin-top:5px;clear:both;" />').css("text-align",o.align).appendTo(i.container),o.confirm||o.prompt?this.makeDialog(i,o):this.container.hide()},update:function(t,i){i.confirm?(this.makeDialog(t,i),this.container.show()):this.container.hide().empty()},afterOpen:function(t,i){i.prompt&&this.prompt.focus()},makeDialog:function(o,e){var n,s,a=!1,c=this;this.container.empty(),e.prompt&&(this.prompt=t("<"+(e.prompt_multi_line?'textarea rows="5"':'input type="text"')+' style="margin-bottom:5px;clear:both;" />').addClass((void 0===o.styles.input?"":o.styles.input)+" "+(void 0===e.prompt_class?"":e.prompt_class)).val(e.prompt_default).appendTo(this.container));for(var r=e.buttons[0]&&e.buttons[0]!==i.prototype.options.confirm.buttons[0],l=0;l<e.buttons.length;l++)null===e.buttons[l]||r&&i.prototype.options.confirm.buttons[l]&&i.prototype.options.confirm.buttons[l]===e.buttons[l]||(n=e.buttons[l],a?this.container.append(" "):a=!0,s=t('<button type="button" class="ui-pnotify-action-button" />').addClass((void 0===o.styles.btn?"":o.styles.btn)+" "+(void 0===n.addClass?"":n.addClass)).text(n.text).appendTo(this.container).on("click",function(t){return function(){"function"==typeof t.click&&t.click(o,e.prompt?c.prompt.val():null)}}(n)),e.prompt&&!e.prompt_multi_line&&n.promptTrigger&&this.prompt.keypress(function(t){return function(i){13==i.keyCode&&t.click()}}(s)),o.styles.text&&s.wrapInner('<span class="'+o.styles.text+'"></span>'),o.styles.btnhover&&s.hover(function(t){return function(){t.addClass(o.styles.btnhover)}}(s),function(t){return function(){t.removeClass(o.styles.btnhover)}}(s)),o.styles.btnactive&&s.on("mousedown",function(t){return function(){t.addClass(o.styles.btnactive)}}(s)).on("mouseup",function(t){return function(){t.removeClass(o.styles.btnactive)}}(s)),o.styles.btnfocus&&s.on("focus",function(t){return function(){t.addClass(o.styles.btnfocus)}}(s)).on("blur",function(t){return function(){t.removeClass(o.styles.btnfocus)}}(s)))}},t.extend(i.styling.bootstrap3,{btn:"btn btn-default",input:"form-control"}),t.extend(i.styling.fontawesome,{btn:"btn btn-default",input:"form-control"}),i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){var o,e=function(t,i){return(e="Notification"in window?function(t,i){return new Notification(t,i)}:"mozNotification"in navigator?function(t,i){return navigator.mozNotification.createNotification(t,i.body,i.icon).show()}:"webkitNotifications"in window?function(t,i){return window.webkitNotifications.createNotification(i.icon,t,i.body)}:function(t,i){return null})(t,i)};return i.prototype.options.desktop={desktop:!1,fallback:!0,icon:null,tag:null,title:null,text:null},i.prototype.modules.desktop={genNotice:function(t,i){null===i.icon?this.icon="http://sciactive.com/pnotify/includes/desktop/"+t.options.type+".png":!1===i.icon?this.icon=null:this.icon=i.icon,null!==this.tag&&null===i.tag||(this.tag=null===i.tag?"PNotify-"+Math.round(1e6*Math.random()):i.tag),t.desktop=e(i.title||t.options.title,{icon:this.icon,body:i.text||t.options.text,tag:this.tag}),!("close"in t.desktop)&&"cancel"in t.desktop&&(t.desktop.close=function(){t.desktop.cancel()}),t.desktop.onclick=function(){t.elem.trigger("click")},t.desktop.onclose=function(){"closing"!==t.state&&"closed"!==t.state&&t.remove()}},init:function(t,e){e.desktop&&(0===(o=i.desktop.checkPermission())?this.genNotice(t,e):e.fallback||(t.options.auto_display=!1))},update:function(t,i,e){0!==o&&i.fallback||!i.desktop||this.genNotice(t,i)},beforeOpen:function(t,i){0!==o&&i.fallback||!i.desktop||t.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in")},afterOpen:function(t,i){0!==o&&i.fallback||!i.desktop||(t.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in"),"show"in t.desktop&&t.desktop.show())},beforeClose:function(t,i){0!==o&&i.fallback||!i.desktop||t.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in")},afterClose:function(t,i){0!==o&&i.fallback||!i.desktop||(t.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in"),"close"in t.desktop&&t.desktop.close())}},i.desktop={permission:function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"===Notification.permission?0:1:"webkitNotifications"in window&&0==window.webkitNotifications.checkPermission()?0:1}},o=i.desktop.checkPermission(),i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.history",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){var o,e;return t(function(){t("body").on("pnotify.history-all",function(){t.each(i.notices,function(){this.modules.history.inHistory&&(this.elem.is(":visible")?this.options.hide&&this.queueRemove():this.open&&this.open())})}).on("pnotify.history-last",function(){var t,o="top"===i.prototype.options.stack.push,e=o?0:-1;do{if(!(t=-1===e?i.notices.slice(e):i.notices.slice(e,e+1))[0])return!1;e=o?e+1:e-1}while(!t[0].modules.history.inHistory||t[0].elem.is(":visible"));t[0].open&&t[0].open()})}),i.prototype.options.history={history:!0,menu:!1,fixed:!0,maxonscreen:1/0,labels:{redisplay:"Redisplay",all:"All",last:"Last"}},i.prototype.modules.history={init:function(i,n){if(i.options.destroy=!1,this.inHistory=n.history,n.menu&&void 0===o){o=t("<div />",{class:"ui-pnotify-history-container "+i.styles.hi_menu,mouseleave:function(){o.css("top","-"+e+"px")}}).append(t("<div />",{class:"ui-pnotify-history-header",text:n.labels.redisplay})).append(t("<button />",{class:"ui-pnotify-history-all "+i.styles.hi_btn,text:n.labels.all,mouseenter:function(){t(this).addClass(i.styles.hi_btnhov)},mouseleave:function(){t(this).removeClass(i.styles.hi_btnhov)},click:function(){return t(this).trigger("pnotify.history-all"),!1}})).append(t("<button />",{class:"ui-pnotify-history-last "+i.styles.hi_btn,text:n.labels.last,mouseenter:function(){t(this).addClass(i.styles.hi_btnhov)},mouseleave:function(){t(this).removeClass(i.styles.hi_btnhov)},click:function(){return t(this).trigger("pnotify.history-last"),!1}})).appendTo("body");var s=t("<span />",{class:"ui-pnotify-history-pulldown "+i.styles.hi_hnd,mouseenter:function(){o.css("top","0")}}).appendTo(o);e=s.offset().top+2,o.css("top","-"+e+"px"),n.fixed&&o.addClass("ui-pnotify-history-fixed")}},update:function(t,i){this.inHistory=i.history,i.fixed&&o?o.addClass("ui-pnotify-history-fixed"):o&&o.removeClass("ui-pnotify-history-fixed")},beforeOpen:function(o,e){var n;i.notices&&i.notices.length>e.maxonscreen&&(n="top"!==o.options.stack.push?i.notices.slice(0,i.notices.length-e.maxonscreen):i.notices.slice(e.maxonscreen,i.notices.length),t.each(n,function(){this.remove&&this.remove()}))}},t.extend(i.styling.brighttheme,{hi_menu:"ui-pnotify-history-brighttheme",hi_btn:"",hi_btnhov:"",hi_hnd:""}),t.extend(i.styling.bootstrap3,{hi_menu:"well",hi_btn:"btn btn-default",hi_btnhov:"",hi_hnd:"glyphicon glyphicon-chevron-down"}),t.extend(i.styling.fontawesome,{hi_menu:"well",hi_btn:"btn btn-default",hi_btnhov:"",hi_hnd:"fa fa-chevron-down"}),i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.mobile",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i.prototype.options.mobile={swipe_dismiss:!0,styling:!0},i.prototype.modules.mobile={init:function(t,i){var o=this,e=null,n=null,s=null;this.swipe_dismiss=i.swipe_dismiss,this.doMobileStyling(t,i),t.elem.on({touchstart:function(i){o.swipe_dismiss&&(e=i.originalEvent.touches[0].screenX,s=t.elem.width(),t.container.css("left","0"))},touchmove:function(i){if(e&&o.swipe_dismiss){var a=i.originalEvent.touches[0].screenX;n=a-e;var c=(1-Math.abs(n)/s)*t.options.opacity;t.elem.css("opacity",c),t.container.css("left",n)}},touchend:function(){if(e&&o.swipe_dismiss){if(Math.abs(n)>40){var i=n<0?-2*s:2*s;t.elem.animate({opacity:0},100),t.container.animate({left:i},100),t.remove()}else t.elem.animate({opacity:t.options.opacity},100),t.container.animate({left:0},100);e=null,n=null,s=null}},touchcancel:function(){e&&o.swipe_dismiss&&(t.elem.animate({opacity:t.options.opacity},100),t.container.animate({left:0},100),e=null,n=null,s=null)}})},update:function(t,i){this.swipe_dismiss=i.swipe_dismiss,this.doMobileStyling(t,i)},doMobileStyling:function(i,o){o.styling?(i.elem.addClass("ui-pnotify-mobile-able"),t(window).width()<=480?(i.options.stack.mobileOrigSpacing1||(i.options.stack.mobileOrigSpacing1=i.options.stack.spacing1,i.options.stack.mobileOrigSpacing2=i.options.stack.spacing2),i.options.stack.spacing1=0,i.options.stack.spacing2=0):(i.options.stack.mobileOrigSpacing1||i.options.stack.mobileOrigSpacing2)&&(i.options.stack.spacing1=i.options.stack.mobileOrigSpacing1,delete i.options.stack.mobileOrigSpacing1,i.options.stack.spacing2=i.options.stack.mobileOrigSpacing2,delete i.options.stack.mobileOrigSpacing2)):(i.elem.removeClass("ui-pnotify-mobile-able"),i.options.stack.mobileOrigSpacing1&&(i.options.stack.spacing1=i.options.stack.mobileOrigSpacing1,delete i.options.stack.mobileOrigSpacing1),i.options.stack.mobileOrigSpacing2&&(i.options.stack.spacing2=i.options.stack.mobileOrigSpacing2,delete i.options.stack.mobileOrigSpacing2))}},i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.nonblock",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){var o,e=/^on/,n=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,s=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,a=/^(scroll|resize|(un)?load|abort|error)$/,c=function(i,o){var c;if(i=i.toLowerCase(),document.createEvent&&this.dispatchEvent){if((i=i.replace(e,"")).match(n)?(t(this).offset(),(c=document.createEvent("MouseEvents")).initMouseEvent(i,o.bubbles,o.cancelable,o.view,o.detail,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.button,o.relatedTarget)):i.match(s)?(c=document.createEvent("UIEvents")).initUIEvent(i,o.bubbles,o.cancelable,o.view,o.detail):i.match(a)&&(c=document.createEvent("HTMLEvents")).initEvent(i,o.bubbles,o.cancelable),!c)return;this.dispatchEvent(c)}else i.match(e)||(i="on"+i),c=document.createEventObject(o),this.fireEvent(i,c)},r=function(i,e,n){i.elem.addClass("ui-pnotify-nonblock-hide");var s=document.elementFromPoint(e.clientX,e.clientY);i.elem.removeClass("ui-pnotify-nonblock-hide");var a=t(s),r=a.css("cursor");"auto"===r&&"A"===s.tagName&&(r="pointer"),i.elem.css("cursor","auto"!==r?r:"default"),o&&o.get(0)==s||(o&&(c.call(o.get(0),"mouseleave",e.originalEvent),c.call(o.get(0),"mouseout",e.originalEvent)),c.call(s,"mouseenter",e.originalEvent),c.call(s,"mouseover",e.originalEvent)),c.call(s,n,e.originalEvent),o=a};return i.prototype.options.nonblock={nonblock:!1},i.prototype.modules.nonblock={init:function(t,i){var e=this;t.elem.on({mouseenter:function(i){e.options.nonblock&&i.stopPropagation(),e.options.nonblock&&t.elem.addClass("ui-pnotify-nonblock-fade")},mouseleave:function(i){e.options.nonblock&&i.stopPropagation(),o=null,t.elem.css("cursor","auto"),e.options.nonblock&&"out"!==t.animating&&t.elem.removeClass("ui-pnotify-nonblock-fade")},mouseover:function(t){e.options.nonblock&&t.stopPropagation()},mouseout:function(t){e.options.nonblock&&t.stopPropagation()},mousemove:function(i){e.options.nonblock&&(i.stopPropagation(),r(t,i,"onmousemove"))},mousedown:function(i){e.options.nonblock&&(i.stopPropagation(),i.preventDefault(),r(t,i,"onmousedown"))},mouseup:function(i){e.options.nonblock&&(i.stopPropagation(),i.preventDefault(),r(t,i,"onmouseup"))},click:function(i){e.options.nonblock&&(i.stopPropagation(),r(t,i,"onclick"))},dblclick:function(i){e.options.nonblock&&(i.stopPropagation(),r(t,i,"ondblclick"))}})}},i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.reference",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i.prototype.options.reference={put_thing:!1,labels:{text:"Spin Around"}},i.prototype.modules.reference={init:function(i,o){var e=this;this.notice,this.options,o.put_thing&&(this.thingElem=t('<button style="float:right;" class="btn btn-default" type="button" disabled><i class="'+i.styles.athing+'" />&nbsp;'+o.labels.text+"</button>").appendTo(i.container),i.container.append('<div style="clear: right; line-height: 0;" />'),i.elem.on({mouseenter:function(t){e.thingElem.prop("disabled",!1)},mouseleave:function(t){e.thingElem.prop("disabled",!0)}}),this.thingElem.on("click",function(){var t=0,o=setInterval(function(){360==(t+=10)&&(t=0,clearInterval(o)),i.elem.css({"-moz-transform":"rotate("+t+"deg)","-webkit-transform":"rotate("+t+"deg)","-o-transform":"rotate("+t+"deg)","-ms-transform":"rotate("+t+"deg)",filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation="+t/360*4+")"})},20)}))},update:function(t,i,o){this.notice,this.options,i.put_thing&&this.thingElem?this.thingElem.show():!i.put_thing&&this.thingElem&&this.thingElem.hide(),this.thingElem&&this.thingElem.find("i").attr("class",t.styles.athing)},beforeOpen:function(t,i){},afterOpen:function(t,i){},beforeClose:function(t,i){},afterClose:function(t,i){},beforeDestroy:function(t,i){},afterDestroy:function(t,i){}},t.extend(i.styling.brighttheme,{athing:"bt-icon bt-icon-refresh"}),t.extend(i.styling.bootstrap3,{athing:"glyphicon glyphicon-refresh"}),t.extend(i.styling.fontawesome,{athing:"fa fa-refresh"}),i}),function(t,i){"function"==typeof define&&define.amd?define("pnotify.tooltip",["jquery","pnotify"],i):"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("jquery"),require("./pnotify")):i(t.jQuery,t.PNotify)}("undefined"!=typeof window?window:this,function(t,i){return i});