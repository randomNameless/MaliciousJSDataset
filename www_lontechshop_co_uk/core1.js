/* MIT https://github.com/fabiospampinato/cash */
(function(){
var aa={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function ba(a,b){try{return a(b)}catch(c){return b}}
var e=document,k=window,ca=e.documentElement,p=e.createElement.bind(e),da=p("div"),q=p("table"),ea=p("tbody"),ha=p("tr"),v=Array.isArray,x=Array.prototype,ia=x.concat,y=x.filter,ja=x.indexOf,ka=x.map,la=x.push,ma=x.slice,z=x.some,na=x.splice,oa=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,pa=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,qa=/<.+>/,ra=/^\w+$/;
function A(a,b){var c=!!b&&11===b.nodeType;return a&&(c||B(b)||C(b))?!c&&pa.test(a)?b.getElementsByClassName(a.slice(1).replace(/\\/g,"")):!c&&ra.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}
var D=function(){function a(b,c){if(b){if(b instanceof D)return b;var d=b;if(G(b)){if(d=(c instanceof D?c[0]:c)||e,d=oa.test(b)&&"getElementById"in d?d.getElementById(b.slice(1).replace(/\\/g,"")):qa.test(b)?sa(b):A(b,d),!d)return}else if(H(b))return this.ready(b);if(d.nodeType||d===k)d=[d];this.length=d.length;b=0;for(c=this.length;b<c;b++)this[b]=d[b]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),I=D.prototype,J=I.init;J.fn=J.prototype=I;I.length=0;I.splice=na;
"function"===typeof Symbol&&(I[Symbol.iterator]=x[Symbol.iterator]);I.map=function(a){return J(ia.apply([],ka.call(this,function(b,c){return a.call(b,c,b)})))};I.slice=function(a,b){return J(ma.call(this,a,b))};var ta=/-([a-z])/g;function K(a){return a.replace(ta,function(b,c){return c.toUpperCase()})}J.guid=1;function ua(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function L(a){return!!a&&a===a.window}
function B(a){return!!a&&9===a.nodeType}function C(a){return!!a&&1===a.nodeType}function H(a){return"function"===typeof a}function G(a){return"string"===typeof a}function va(a){return!isNaN(parseFloat(a))&&isFinite(a)}function wa(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}J.isWindow=L;J.isFunction=H;J.isArray=v;J.isNumeric=va;J.isPlainObject=wa;
I.get=function(a){if(void 0===a)return ma.call(this);a=Number(a);return this[0>a?a+this.length:a]};I.eq=function(a){return J(this.get(a))};I.first=function(){return this.eq(0)};I.last=function(){return this.eq(-1)};function M(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(wa(a)){var d=Object.keys(a);c=0;for(var f=d.length;c<f;c++){var g=d[c];if(!1===b.call(a[g],g,a[g]))break}}else for(c=0,f=a.length;c<f&&!1!==b.call(a[c],c,a[c]);c++);return a}J.each=M;
I.each=function(a){return M(this,a)};I.prop=function(a,b){if(a){if(G(a))return a=aa[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(d,f){f[a]=b});for(var c in a)this.prop(c,a[c]);return this}};I.removeProp=function(a){return this.each(function(b,c){delete c[aa[a]||a]})};
function N(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return N(b,J,c);for(var f=0;f<d;f++){var g=a[f],h;for(h in g)b&&(v(g[h])||wa(g[h]))?(c[h]&&c[h].constructor===g[h].constructor||(c[h]=new g[h].constructor),N(b,c[h],g[h])):c[h]=g[h]}return c}J.extend=N;I.extend=function(a){return N(I,a)};
function O(a){return G(a)?function(b,c){return ua(c,a)}:H(a)?a:a instanceof D?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}I.filter=function(a){var b=O(a);return J(y.call(this,function(c,d){return b.call(c,d,c)}))};function P(a,b){return b?a.filter(b):a}var xa=/\S+/g;function Q(a){return G(a)?a.match(xa)||[]:[]}I.hasClass=function(a){return!!a&&z.call(this,function(b){return C(b)&&b.classList.contains(a)})};
I.removeAttr=function(a){var b=Q(a);return this.each(function(c,d){C(d)&&M(b,function(f,g){d.removeAttribute(g)})})};I.attr=function(a,b){if(a){if(G(a)){if(2>arguments.length){if(!this[0]||!C(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(d,f){C(f)&&f.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};
I.toggleClass=function(a,b){var c=Q(a),d=void 0!==b;return this.each(function(f,g){C(g)&&M(c,function(h,m){d?b?g.classList.add(m):g.classList.remove(m):g.classList.toggle(m)})})};I.addClass=function(a){return this.toggleClass(a,!0)};I.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};
function R(a,b,c,d){for(var f=[],g=H(b),h=d&&O(d),m=0,l=a.length;m<l;m++)if(g){var u=b(a[m]);u.length&&la.apply(f,u)}else for(u=a[m][b];!(null==u||d&&h(-1,u));)f.push(u),u=c?u[b]:null;return f}function S(a){return 1<a.length?y.call(a,function(b,c,d){return ja.call(d,b)===c}):a}J.unique=S;I.add=function(a,b){return J(S(this.get().concat(J(a,b).get())))};function T(a,b,c){if(C(a)){var d=k.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}
function V(a,b){return parseInt(T(a,b),10)||0}var ya=/^--/,za={},Aa=da.style,Ba=["webkit","moz","ms"];function Ca(a,b){void 0===b&&(b=ya.test(a));if(b)return a;if(!za[a]){b=K(a);var c="".concat(b[0].toUpperCase()).concat(b.slice(1));b="".concat(b," ").concat(Ba.join("".concat(c," "))).concat(c).split(" ");M(b,function(d,f){if(f in Aa)return za[a]=f,!1})}return za[a]}
var Da={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function Ea(a,b,c){void 0===c&&(c=ya.test(a));return c||Da[a]||!va(b)?b:"".concat(b,"px")}
I.css=function(a,b){if(G(a)){var c=ya.test(a);a=Ca(a,c);if(2>arguments.length)return this[0]&&T(this[0],a,c);if(!a)return this;b=Ea(a,b,c);return this.each(function(f,g){C(g)&&(c?g.style.setProperty(a,b):g.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Fa=/^\s+|\s+$/;function Ga(a,b){a=a.dataset[b]||a.dataset[K(b)];return Fa.test(a)?a:ba(JSON.parse,a)}
I.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ga(this[0],d);return c}if(G(a))return 2>arguments.length?this[0]&&Ga(this[0],a):void 0===b?this:this.each(function(f,g){f=b;f=ba(JSON.stringify,f);g.dataset[K(a)]=f});for(d in a)this.data(d,a[d]);return this};function Ha(a,b){var c=a.documentElement;return Math.max(a.body["scroll".concat(b)],c["scroll".concat(b)],a.body["offset".concat(b)],c["offset".concat(b)],c["client".concat(b)])}
function Ia(a,b){return V(a,"border".concat(b?"Left":"Top","Width"))+V(a,"padding".concat(b?"Left":"Top"))+V(a,"padding".concat(b?"Right":"Bottom"))+V(a,"border".concat(b?"Right":"Bottom","Width"))}
M([!0,!1],function(a,b){M(["Width","Height"],function(c,d){var f="".concat(b?"outer":"inner").concat(d);I[f]=function(g){if(this[0])return L(this[0])?b?this[0]["inner".concat(d)]:this[0].document.documentElement["client".concat(d)]:B(this[0])?Ha(this[0],d):this[0]["".concat(b?"offset":"client").concat(d)]+(g&&b?V(this[0],"margin".concat(c?"Top":"Left"))+V(this[0],"margin".concat(c?"Bottom":"Right")):0)}})});
M(["Width","Height"],function(a,b){var c=b.toLowerCase();I[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return L(this[0])?this[0].document.documentElement["client".concat(b)]:B(this[0])?Ha(this[0],b):this[0].getBoundingClientRect()[c]-Ia(this[0],!a);var f=parseInt(d,10);return this.each(function(g,h){C(h)&&(g=T(h,"boxSizing"),h.style[c]=Ea(c,f+("border-box"===g?Ia(h,!a):0)))})}});var Ja={};
I.toggle=function(a){return this.each(function(b,c){if(C(c))if(void 0===a?"none"===T(c,"display"):a){if(c.style.display=c.___cd||"","none"===T(c,"display")){b=c.style;c=c.tagName;if(Ja[c])c=Ja[c];else{var d=p(c);e.body.insertBefore(d,null);var f=T(d,"display");e.body.removeChild(d);c=Ja[c]="none"!==f?f:"block"}b.display=c}}else c.___cd=T(c,"display"),c.style.display="none"})};I.hide=function(){return this.toggle(!1)};I.show=function(){return this.toggle(!0)};
function Ka(a,b){return!b||!z.call(b,function(c){return 0>a.indexOf(c)})}var W={focus:"focusin",blur:"focusout"},X={mouseenter:"mouseover",mouseleave:"mouseout"},La=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ma(a,b,c,d,f){var g=a.___ce=a.___ce||{};g[b]=g[b]||[];g[b].push([c,d,f]);a.addEventListener(b,f)}function Na(a){a=a.split(".");return[a[0],a.slice(1).sort()]}
function Y(a,b,c,d,f){var g=a.___ce=a.___ce||{};if(b)g[b]&&(g[b]=g[b].filter(function(h){var m=h[0],l=h[1];h=h[2];if(f&&h.guid!==f.guid||!Ka(m,c)||d&&d!==l)return!0;a.removeEventListener(b,h)}));else for(b in g)Y(a,b,c,d,f)}
I.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(g,h){(C(h)||B(h)||L(h))&&Y(h)});else if(G(a))H(b)&&(c=b,b=""),M(Q(a),function(g,h){g=Na(h);h=g[0];var m=g[1],l=X[h]||W[h]||h;d.each(function(u,w){(C(w)||B(w)||L(w))&&Y(w,l,m,b,c)})});else for(var f in a)this.off(f,a[f]);return this};
I.on=function(a,b,c,d,f){var g=this;if(!G(a)){for(var h in a)this.on(h,b,c,a[h],f);return this}G(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");H(d)||(d=c,c=void 0);if(!d)return this;M(Q(a),function(m,l){m=Na(l);l=m[0];var u=m[1],w=X[l]||W[l]||l,U=l in X,E=l in W;w&&g.each(function(t,n){if(C(n)||B(n)||L(n))t=function Ra(r){if(r.target["___i".concat(r.type)])return r.stopImmediatePropagation();if(!r.namespace||Ka(u,r.namespace.split(".")))if(b||!(E&&(r.target!==n||r.___ot===w)||U&&r.relatedTarget&&
n.contains(r.relatedTarget))){var fa=n;if(b){for(var F=r.target;!ua(F,b);){if(F===n)return;F=F.parentNode;if(!F)return}fa=F}Object.defineProperty(r,"currentTarget",{configurable:!0,get:function(){return fa}});Object.defineProperty(r,"delegateTarget",{configurable:!0,get:function(){return n}});Object.defineProperty(r,"data",{configurable:!0,get:function(){return c}});F=d.call(fa,r,r.___td);f&&Y(n,w,u,b,Ra);!1===F&&(r.preventDefault(),r.stopPropagation())}},t.guid=d.guid=d.guid||J.guid++,Ma(n,w,u,b,
t)})});return this};I.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};I.ready=function(a){function b(){return setTimeout(a,0,J)}"loading"!==e.readyState?b():e.addEventListener("DOMContentLoaded",b);return this};
I.trigger=function(a,b){if(G(a)){var c=Na(a),d=c[0];c=c[1];var f=X[d]||W[d]||d;if(!f)return this;var g=La.test(f)?"MouseEvents":"HTMLEvents";a=e.createEvent(g);a.initEvent(f,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var h=a.___ot in W;return this.each(function(m,l){h&&H(l[a.___ot])&&(l["___i".concat(a.type)]=!0,l[a.___ot](),l["___i".concat(a.type)]=!1);l.dispatchEvent(a)})};
function Oa(a){return a.multiple&&a.options?R(y.call(a.options,function(b){return b.selected&&!b.disabled&&!b.parentNode.disabled}),"value"):a.value||""}var Pa=/\r?\n/g,Qa=/file|reset|submit|button|image/i,Sa=/radio|checkbox/i;
I.serialize=function(){var a="";this.each(function(b,c){M(c.elements||[c],function(d,f){f.disabled||!f.name||"FIELDSET"===f.tagName||Qa.test(f.type)||Sa.test(f.type)&&!f.checked||(d=Oa(f),void 0!==d&&(d=v(d)?d:[d],M(d,function(g,h){g=a;h="&".concat(encodeURIComponent(f.name),"=").concat(encodeURIComponent(h.replace(Pa,"\r\n")));a=g+h})))})});return a.slice(1)};
I.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Sa.test(c.type)){var d=v(a)?ka.call(a,String):null===a?[]:[String(a)];b?M(c.options,function(f,g){g.selected=0<=d.indexOf(g.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Oa(this[0])};I.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};I.detach=function(a){P(this,a).each(function(b,c){c.parentNode&&c.parentNode.removeChild(c)});return this};
var Ta=/^\s*<(\w+)[^>]*>/,Ua=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Va={"*":da,tr:ea,td:ha,th:ha,thead:q,tbody:q,tfoot:q};function sa(a){if(!G(a))return[];if(Ua.test(a))return[p(RegExp.$1)];var b=Ta.test(a)&&RegExp.$1;b=Va[b]||Va["*"];b.innerHTML=a;return J(b.childNodes).detach().get()}J.parseHTML=sa;I.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};I.remove=function(a){P(this,a).detach().off();return this};
I.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){C(c)&&(c.textContent=a)})};I.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=J(b),a.replaceWith(a.children()))});return this};I.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+k.pageYOffset,left:a.left+k.pageXOffset}};
I.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===T(a,"position");)a=a.offsetParent;return a||ca})};
I.position=function(){var a=this[0];if(a){var b="fixed"===T(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===T(b,"position");)b=b.parentNode;b!==a&&C(b)&&(d=J(b).offset(),c.top-=d.top+V(b,"borderTopWidth"),c.left-=d.left+V(b,"borderLeftWidth"))}return{top:c.top-V(a,"marginTop"),left:c.left-V(a,"marginLeft")}}};
I.children=function(a){return P(J(S(R(this,function(b){return b.children}))),a)};I.contents=function(){return J(S(R(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};I.find=function(a){return J(S(R(this,function(b){return A(a,b)})))};var Wa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Xa=/^$|^module$|\/(java|ecma)script/i,Ya=["type","src","nonce","noModule"];
function Za(a,b){a=J(a);a.filter("script").add(a.find("script")).each(function(c,d){if(Xa.test(d.type)&&ca.contains(d)){var f=p("script");f.text=d.textContent.replace(Wa,"");M(Ya,function(g,h){d[h]&&(f[h]=d[h])});b.head.insertBefore(f,null);b.head.removeChild(f)}})}
function Z(a,b,c,d,f,g,h,m){M(a,function(l,u){M(J(u),function(w,U){M(J(b),function(E,t){var n=c?t:U;E=c?w:E;t=c?U:t;n=E?n.cloneNode(!0):n;E=!E;f?t.insertBefore(n,d?t.firstChild:null):"HTML"===t.nodeName?t.parentNode.replaceChild(n,t):t.parentNode.insertBefore(n,d?t:t.nextSibling);E&&Za(n,t.ownerDocument)},m)},h)},g);return b}I.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};I.append=function(){return Z(arguments,this,!1,!1,!0)};I.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};
I.before=function(){return Z(arguments,this,!1,!0)};I.html=function(a){if(!arguments.length)return this[0]&&this[0].innerHTML;if(void 0===a)return this;var b=/<script/.test(a);return this.each(function(c,d){C(d)&&(b?J(d).empty().append(a):d.innerHTML=a)})};I.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};I.insertBefore=function(a){return Z(arguments,this,!0,!0)};I.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};
I.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};I.replaceWith=function(a){return this.before(a).remove()};I.replaceAll=function(a){J(a).replaceWith(this);return this};I.wrapAll=function(a){a=J(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};I.wrap=function(a){return this.each(function(b,c){var d=J(a)[0];J(c).wrapAll(b?d.cloneNode(!0):d)})};
I.wrapInner=function(a){return this.each(function(b,c){b=J(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};I.has=function(a){var b=G(a)?function(c,d){return A(a,d).length}:function(c,d){return d.contains(a)};return this.filter(b)};I.is=function(a){var b=O(a);return z.call(this,function(c,d){return b.call(c,d,c)})};I.next=function(a,b,c){return P(J(S(R(this,"nextElementSibling",b,c))),a)};I.nextAll=function(a){return this.next(a,!0)};I.nextUntil=function(a,b){return this.next(b,!0,a)};
I.not=function(a){var b=O(a);return this.filter(function(c,d){return(!G(a)||C(d))&&!b.call(d,c,d)})};I.parent=function(a){return P(J(S(R(this,"parentNode"))),a)};I.index=function(a){var b=a?J(a)[0]:this[0];a=a?this:J(b).parent().children();return ja.call(a,b)};I.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};I.parents=function(a,b){return P(J(S(R(this,"parentElement",!0,b))),a)};I.parentsUntil=function(a,b){return this.parents(b,a)};
I.prev=function(a,b,c){return P(J(S(R(this,"previousElementSibling",b,c))),a)};I.prevAll=function(a){return this.prev(a,!0)};I.prevUntil=function(a,b){return this.prev(b,!0,a)};I.siblings=function(a){return P(J(S(R(this,function(b){return J(b).parent().children().not(b)}))),a)};"undefined"!==typeof exports?module.exports=J:k.cash=k.$=J;
})();
/* global ko _ focusTrap */
(function () {
    'use strict';

    var methods = [
        'click',
        'select',
        'submit',
        'blur',
        'focus'
    ];

    $.each(methods, function () {
        var method = this;

        /** Native methods proxy */
        $.fn[method] = function (callback) {
            if (callback) {
                return this.on(method, callback);
            }

            return this.each(function () {
                var event = document.createEvent('Event');

                event.initEvent(method, true, true);

                $(this).trigger(event);

                if (!event.defaultPrevented && method !== 'click' && this[method]) {
                    this[method]();
                }
            });
        };
    });

    /** [isVisible description] */
    function isVisible(i, el) {
        return el.offsetWidth || el.offsetHeight || el.getClientRects().length;
    }

    /** [isVisible description] */
    function isHidden(i, el) {
        return !isVisible(i, el);
    }

    /** Return visible elements */
    $.fn.visible = function () {
        return this.filter(isVisible);
    };

    /** Checks if element is visible */
    $.fn.isVisible = function () {
        return this.visible().length > 0;
    };

    /** Return hidden elements */
    $.fn.hidden = function () {
        return this.filter(isHidden);
    };

    /** Checks if element is hidden */
    $.fn.isHidden = function () {
        return this.hidden().length > 0;
    };

    /** [inViewport description] */
    function inViewport(i, el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()
        );
    }

    /** Return elements that are inside viewport */
    $.fn.inViewport = function () {
        return this.filter(inViewport);
    };

    /** Checks if element is inside viewport */
    $.fn.isInViewport = function () {
        return this.inViewport().length > 0;
    };

    /** Toggle block loader on the element */
    $.fn.spinner = function (flag, settings) {
        return this.each(function () {
            if (flag) {
                $.fn.blockLoader().show($(this), settings);
            } else {
                $.fn.blockLoader().hide($(this));
            }
        });
    };

    $.fn.fadeIn = $.fn.show;
    $.fn.fadeOut = $.fn.hide;

    /** Get/Set scroll top position */
    $.fn.scrollTop = function (val) {
        var el = this.get(0),
            isWindow = el === window,
            prop = isWindow ? 'pageYOffset' : 'scrollTop';

        if (val === undefined) {
            return el ? el[prop] : null;
        }

        if (el) {
            if (isWindow) {
                el.scroll({
                    top: val
                });
            } else {
                el[prop] = val;
            }
        }

        return this;
    };

    /** Evaluates bindings specified in each DOM element of collection. */
    $.fn.applyBindings = function () {
        return this.each(function () {
            ko.applyBindings(ko.contextFor(this), this);
        });
    };

    $.fn.is = _.wrap($.fn.is, function (original, selector) {
        switch (selector) {
            case ':visible':
                return this.isVisible();

            case ':hidden':
                return this.isHidden();

            case ':selected':
                return this.filter(function () {
                    return this.selected;
                }).length > 0;

            case ':checked':
                return this.filter(function () {
                    return this.checked;
                }).length > 0;
        }

        return original.bind(this)(selector);
    });

    $.fn.data = _.wrap($.fn.data, function (original, key, value) {
        var collection = this,
            result,
            cleanKey,
            keys = [];

        if (value === undefined) {
            this.each(function () {
                if (this.__breeze && this.__breeze[key]) {
                    result = this.__breeze[key];

                    return false;
                }
            });

            if (result !== undefined) {
                return result;
            }
        } else if (value instanceof Node || value instanceof $) {
            return this.each(function () {
                this.__breeze = this.__breeze || {};
                this.__breeze[key] = value;
            });
        }

        result = original.apply(
            this,
            Array.prototype.slice.call(arguments, 1)
        );

        if (result === undefined) {
            cleanKey = key.replace(/^[^A-Z]+/, ''); // mageSwatchRenderer => SwatchRenderer
            keys = [
                key,
                cleanKey,
                cleanKey.charAt(0).toLowerCase() + cleanKey.slice(1)
            ];

            $.each(keys, function (i, widgetName) {
                if (typeof collection[widgetName] !== 'function') {
                    return;
                }

                result = collection[widgetName]('instance');

                return false;
            });
        }

        return result;
    });

    /** Hover implementation */
    $.fn.hover = function (mouseenter, mouseleave) {
        this.on('mouseenter', mouseenter).on('mouseleave', mouseleave);
    };

    /** Copy of magento's zIndex function */
    $.fn.zIndex = function (zIndex) {
        var elem = $(this[0]),
            position,
            value;

        if (zIndex !== undefined) {
            return this.css('zIndex', zIndex);
        }

        if (!this.length) {
            return 0;
        }

        while (elem.length && elem[0] !== document) {
            position = elem.css('position');
            value = parseInt(elem.css('zIndex'), 10);
            elem = elem.parent();

            if (position === 'static') {
                continue;
            }

            if (!isNaN(value) && value !== 0) {
                return value;
            }
        }

        return 0;
    };

    /**
     * Constraint element inside visible viewport
     * @return {Cash}
     */
    $.fn.contstraint = function () {
        var viewportWidth = $(window).width(),
            width = this.outerWidth(),
            left,
            right;

        if (!this.length) {
            return this;
        }

        left = Math.round(this.offset().left);
        right = left + width;

        if (left < 0) {
            this.css({
                left: 'auto',
                right: parseFloat(this.css('right')) + (left - 10)
            });
        } else if (left > 0 && right > viewportWidth) {
            this.css({
                left: 'auto',
                right: Math.min(parseFloat(this.css('right')) + left, 0)
            });
        }

        return this;
    };

    $.fn.var = function (name, value) {
        var el = this[0];

        if (value !== undefined) {
            el.style.setProperty(name, value);

            return this;
        }

        return getComputedStyle(el).getPropertyValue(name);
    };

    /** Proxy implementation */
    $.proxy = _.bind;

    /** Serialize object to query string */
    $.params = function (params, prefix) {
        if (params instanceof FormData) {
            return new URLSearchParams(params).toString();
        }

        var query = Object.keys(params).map(function (key) {
            var value = params[key];

            if (params.constructor === Array) {
                key = `${prefix}[]`;
            } else if (params.constructor === Object) {
                key = (prefix ? `${prefix}[${key}]` : key);
            }

            if (typeof value === 'object') {
                return $.params(value, key);
            } else {
                return `${key}=${encodeURIComponent(value)}`;
            }
        });

        return [].concat.apply([], query).join('&');
    };
    $.param = $.params;

    /** Parse url query params */
    $.parseQuery = function (query) {
        var result = {};

        query = query || window.location.search;
        query = query.replace(/^\?/, '');

        $.each(query.split('&'), function (i, param) {
            var pair = param.split('='),
                key = decodeURIComponent(pair.shift().replace('+', ' ')).toString(),
                value = decodeURIComponent(pair.length ? pair.join('=').replace('+', ' ') : null);

            result[key] = value;
        });

        return result;
    };

    /** The main difference with .extend is that arrays are overriden instead of inherited */
    $.extendProps = function (own, inherited) {
        var destination = {};

        $.each(own, function (key, value) {
            if ($.isPlainObject(value)) {
                destination[key] = $.extendProps(own[key], inherited[key] || {});
            } else {
                destination[key] = value;
            }
        });

        $.each(inherited, function (key, value) {
            if (typeof own[key] !== 'undefined') {
                return;
            }

            if ($.isPlainObject(value)) {
                destination[key] = $.extendProps(own[key] || {}, inherited[key]);
            } else {
                destination[key] = value;
            }
        });

        return destination;
    };

    $.focusTrap = focusTrap;
})();

/*!
 * swiped-events.js - v1.1.4
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

/* Simple JavaScript Inheritance
 * By John Resig https://johnresig.com/
 * Inspired by base2 and Prototype
 * MIT Licensed.
 */
// eslint-disable-next-line strict
(function () {
    var initializing = false,
        // eslint-disable-next-line no-undef
        fnTest = /xyz/.test(function () {xyz;}) ? /\b_super\b/ : /.*/;

    this.Class = function () {};

    Class.extend = function (prop) {
        var _super = this.prototype,
            prototype,
            name,
            superPropType,
            propType;

        initializing = true;
        prototype = new this();
        initializing = false;

        // eslint-disable-next-line guard-for-in
        for (name in prop) {
            propType = typeof prop[name];
            superPropType = typeof _super[name];

            if (propType === 'function' && superPropType === 'function' && fnTest.test(prop[name])) {
                prototype[name] = (function (key, fn) {
                    return function () {
                        var tmp = this._super,
                            ret;

                        // Add a new ._super() method that is the same method
                        // but on the super-class
                        this._super = _super[key];

                        // The method only need to be bound temporarily, so we
                        // remove it when we're done executing
                        ret = fn.apply(this, arguments);

                        this._super = tmp;

                        return ret;
                    };
                })(name, prop[name]);
            } else if (propType === 'object' && superPropType === 'object') {
                prototype[name] = $.extendProps(prop[name], _super[name]);
            } else {
                prototype[name] = prop[name];
            }
        }

        /** The dummy class constructor */
        function Class() {
            if (!initializing && this._initialize) {
                this._initialize.apply(this, arguments);
            }
        }

        Class.prototype = prototype;
        Class.prototype.constructor = Class;
        // eslint-disable-next-line no-caller
        Class.extend = arguments.callee;

        return Class;
    };
})();

(function () {
    'use strict';

    var lastTime = 0;

    document.body.addEventListener('touchstart', (e) => {
        var curTime = new Date().getTime(),
            duration = curTime - lastTime;

        if (e.touches.length === 1 && duration < 300) {
            e.target.dispatchEvent(new PointerEvent('dbltap', {
                bubbles: true,
                cancelable: true,
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            }));
        }

        lastTime = curTime;
    });
})();

(function () {
    'use strict';

    window.breeze = $.breeze = {};
    window.mage = $.mage = {};

    $.breeze.loadedScripts = {};
})();

(function () {
    'use strict';

    $.loadScript = function (src, callback) {
        return new Promise((resolve, reject) => {
            var script = document.createElement('script');

            script.onload = resolve;
            script.onerror = reject;
            script.src = src;

            document.head.appendChild(script);
        }).then(() => {
            if (callback) {
                callback();
            }
        });
    };
})();

/* global _ */
(function () {
    'use strict';

    var observer,
        counter = 1,
        mapping = {};

    /**
     * @param {Element} node
     * @returns {Number}
     */
    function getNodeId(node) {
        var id = node._observeId;

        if (!id) {
            id = node._observeId = counter++;
        }

        return id;
    }

    /**
     * @param {Element} node
     * @param {Object} data
     */
    function trigger(node, data) {
        var id = getNodeId(node),
            ids = data.invoked;

        if (ids.indexOf(id) > -1) {
            return;
        }

        data.callback(node);
        data.invoked.push(id);
    }

    /**
     * @param {Element} node
     */
    function processAdded(node) {
        _.each(mapping, function (listeners, selector) {
            if (!$(node).is(selector)) {
                return;
            }

            _.each(listeners, function (data) {
                if (!data.ctx.contains(node) || !$(node, data.ctx).is(selector)) {
                    return;
                }

                trigger(node, data);
            });
        });
    }

    /**
     * @param {Array|NodeList} nodes
     * @return {Array}
     */
    function collectNodes(nodes) {
        var result = [];

        _.toArray(nodes).forEach(function (node) {
            if (node.nodeType !== 1) {
                return;
            }

            result.push(node);
            result = result.concat(_.toArray(node.querySelectorAll('*')));
        });

        return result;
    }

    observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            collectNodes(mutation.addedNodes).forEach(processAdded);
        });
    });

    $(document).on('breeze:load', function () {
        mapping = {};
        counter = 1;

        observer.disconnect();
        observer.observe(document.body, {
            subtree: true,
            childList: true
        });
    });

    /**
     * @param {String|Object} selector
     * @param {HTMLElement|Function} ctx
     * @param {Function} callback
     */
    $.async = function (selector, ctx, callback) {
        var data;

        if (_.isObject(selector)) {
            callback = ctx;
            ctx = selector.ctx || document.body;
            selector = selector.selector;
        } else if (!callback) {
            callback = ctx;
            ctx = document.body;
        }

        data = {
            ctx: ctx,
            callback: callback,
            invoked: []
        };

        $(selector, data.ctx).each(function () {
            trigger(this, data);
        });

        (mapping[selector] = mapping[selector] || []).push(data);
    };
})();

(function () {
    'use strict';

    $.active = 0;

    /**
     * @param {Object} response
     * @param {Object} params
     */
    function onResponse(response, params) {
        if (params.global === false) {
            return;
        }

        $(document).trigger('ajaxComplete', {
            response: response
        });
    }

    /**
     * @param {Object} error
     * @throws {Exception}
     */
    function onError(error, params) {
        if (params.error) {
            params.error(error.response || error.original.response, error);
        }

        if (params.complete) {
            params.complete(error.response || error.original.response);
        }
    }

    /**
     * @param {Object} response
     * @return {Object}
     */
    function onSuccess(response, params) {
        if (params.success) {
            params.success(response.body || response.text, response);
        }

        if (params.complete) {
            params.complete(response);
        }

        return response;
    }

    /**
     * @param {Object} params
     * @return {Object}
     */
    function prepareParams(url, params) {
        if (typeof url === 'object') {
            params = url;
        } else if (!params) {
            params = {};
        }

        if (params.each || params instanceof Element) {
            params = {
                form: params
            };
        }

        if (params.form) {
            params.url = params.url || $(params.form).attr('action');
            params.data = params.form;
        }

        if (typeof url === 'string') {
            params.url = url;
        }

        if (params.type && ['post', 'get', 'put', 'delete', 'head'].indexOf(params.type.toLowerCase()) > -1) {
            params.method = params.type.toLowerCase();
        }

        params.headers = Object.assign({
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded'
        }, params.headers || {});

        if (params.type === 'json') {
            params.headers['Content-Type'] = 'application/json';
        }

        if (params.contentType) {
            params.headers['Content-Type'] = params.contentType;
        } else if (params.contentType === false) {
            delete params.headers['Content-Type'];
        }

        return params;
    }

    /**
     * @param {Object} data
     * @return {FormData}
     */
    function toFormData(data) {
        var formData,
            formKey = $.cookies.get('form_key');

        if (data.each && data.get) {
            data = data.get(0);
        }

        if (data instanceof Element) {
            formData = new FormData(data);
        } else {
            formData = new FormData();

            if (typeof data === 'string') {
                data = $.parseQuery(data);
            }

            _.each(data, function (value, key) {
                if (_.isArray(value)) {
                    key = key.includes('[') ? key : key + '[]';
                    value.map((val) => formData.append(key, val));
                } else {
                    formData.set(key, value);
                }
            });
        }

        if (!formData.has('form_key')) {
            formData.set('form_key', formKey);
        }

        return formData;
    }

    function toJsonData(formData) {
        var object = {};

        formData.forEach((value, key) => {
            if (!Reflect.has(object, key)) {
                object[key] = value;
                return;
            }

            if (!Array.isArray(object[key])) {
                object[key] = [object[key]];
            }

            object[key].push(value);
        });

        return object;
    }

    function send(params) {
        if (params.method === 'get' && params.data) {
            params.url += params.url.indexOf('?') === -1 ? '?' : '&';

            if (typeof params.data !== 'string') {
                params.data = $.params(params.data);
            }

            params.url += params.data;
        } else if (params.method === 'post' && params.data) {
            if (typeof params.data !== 'string') {
                params.body = toFormData(params.data);
                delete params.headers['Content-Type'];
            } else {
                params.body = params.data;
            }
        }

        if (params.context) {
            ['success', 'complete', 'error', 'beforeSend'].forEach(function (fn) {
                if (params[fn]) {
                    params[fn] = params[fn].bind(params.context);
                }
            });
        }

        if (params.beforeSend) {
            params.beforeSend(params);
        }

        $.active++;

        return fetch(params.url, params)
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                var response = {
                    text: text,
                    req: params
                };

                $.active--;

                response.body = (function () {
                    try {
                        return JSON.parse(text);
                    } catch (e) {
                        if (!params.dataType && !params.type ||
                            params.dataType && params.dataType !== 'json' ||
                            params.type && params.type !== 'json'
                        ) {
                            return text;
                        }

                        e.response = response;

                        throw e;
                    }
                })();

                onResponse(response, params);

                return response;
            })
            .then(function (response) {
                try {
                    return onSuccess(response, params);
                } catch (e) {
                    console.error(e);
                }
            })
            .catch(function (error) {
                return onError(error, params);
            });
    }

    $.request = {
        /**
         * @param {Object} params
         * @return {Promise}
         */
        send: function (url, params) {
            params = prepareParams(url, params);

            return this[params.method || 'get'](params);
        },

        /**
         * @param {Object} params
         * @return {Promise}
         */
        post: function (url, params) {
            params = prepareParams(url, params);
            params.method = 'post';

            return send(params);
        },

        /**
         * @param {Object} params
         * @return {Promise}
         */
        get: function (url, params) {
            params = prepareParams(url, params);
            params.method = 'get';

            return send(params);
        }
    };

    /** [get description] */
    $.ajax = function (url, params) {
        return $.request.send(url, params);
    };

    /** [get description] */
    $.get = function (url, params) {
        return $.request.get(url, params);
    };

    /** [get description] */
    $.post = function (url, params) {
        return $.request.post(url, params);
    };
})();

(function () {
    'use strict';

    var data = window.translations || {};

    $.translation = $.breeze.translation = {
        /** Add translation phrase|phrases */
        add: function () {
            if (arguments.length > 1) {
                data[arguments[0]] = arguments[1];
            } else if (typeof arguments[0] === 'object') {
                $.extend(data, arguments[0]);
            }
        },

        /** Translate the phrase */
        translate: function (text) {
            return typeof data[text] !== 'undefined' ? data[text] : text;
        }
    };

    $.mage.__ = $.__ = window.$t = window.__ = $.translation.translate;
})();

(function () {
    'use strict';

    /** Contructor */
    var Validator = function (form, options) {
        this.form = form;
        this.options = $.extend({
            errorClass: 'mage-error',
            errorTextTag: '<div>',
            errorTextClass: 'mage-error'
        }, options || {});

        $(form).attr('novalidate', true);
    };

    Validator.prototype = {
        /**
         * @param {Array|Element|null} elements
         * @param {Boolean} silent
         * @return {Boolean}
         */
        isValid: function (elements, silent) {
            return this.validate(elements, silent).valid;
        },

        /**
         * Validate input(s) or whole form and return validation object
         *
         * @param {Array|Element|null} elements
         * @param {Boolean} silent
         * @return {Object}
         */
        validate: function (elements, silent) {
            var self = this,
                result = {
                    valid: true,
                    errors: []
                };

            if (elements === true) {
                silent = true;
                elements = false;
            }

            elements = this._elements(elements);

            this.reset(elements);

            $(elements).each(function () {
                var res = self._validateElement(this);

                if (res.valid) {
                    return;
                }

                result.valid = false;
                result.errors.push(res);

                if (!silent) {
                    self._showErrors(res.field, res.errors);
                }
            });

            if (result.errors.length) {
                result.errors[0].field.focus();
            }

            if (result.valid && this.options.onValid) {
                this.options.onValid.call(this, result);
            } else if (!result.valid && this.options.onInvalid) {
                this.options.onInvalid.call(this, result);
            }

            $(this.form).trigger('validateAfter', {
                result: result
            });

            return result;
        },

        /**
         * @param {Array|Element|null} elements
         */
        reset: function (elements) {
            var self = this;

            elements = this._elements(elements);

            $(elements).each(function () {
                self.removeErrorClass(this);
                self._overridable('removeErrorNodes', [this]);
            });
        },

        /**
         * @param {Element} element
         * @return {Object}
         */
        _validateElement: function (element) {
            var self = this,
                value = this._getElementValue(element),
                result = {
                    valid: true,
                    field: element,
                    errors: []
                };

            this._validators(element).some(function (validator) {
                var message = validator.message;

                if (validator.fn.call(self, value, element, validator.settings)) {
                    return false;
                }

                if (typeof message === 'function') {
                    message = message.call(self, value, element, validator.settings);
                }

                result.valid = false;
                result.errors.push(message);

                return true;
            });

            return result;
        },

        /**
         * @param {Element} element
         * @return {String}
         */
        _getElementValue: function (element) {
            var type = $(element).attr('type'),
                value = $(element).val(),
                elements;

            if (type === 'radio' || type === 'checkbox') {
                elements = $('input[name="' + $(element).attr('name') + '"]:checked');
                value = elements.val();

                // checkbox without a value
                if (elements.length && !value) {
                    return '*';
                }

                return value;
            }

            if (typeof value === 'string') {
                return value.replace(/\r/g, '');
            }

            return value;
        },

        /**
         * @param {Element} element
         * @return {Array}
         */
        _validators: function (element) {
            var result = [],
                validators = $.validator.validators,
                native = ['required', 'minlength', 'maxlength', 'min', 'max', 'pattern'],
                data = $(element).data('validate') || {};

            if (typeof data === 'string') {
                try {
                    data = eval('(' + data + ')'); // eslint-disable-line
                } catch (e) {
                    console.error('Cannot read validation rules: ' + data);
                    data = {};
                }
            }

            $.each(native, function (i, attr) {
                var value = $(element).attr(attr);

                if (value !== undefined && !data[attr]) {
                    data[attr] = value;
                }
            });

            element.classList.forEach(function (name) {
                if (!validators[name]) {
                    return;
                }
                data[name] = true;
            });

            $.each(data, function (name, settings) {
                var validator = validators[name];

                while (typeof validator === 'string') {
                    validator = validators[validator];
                }

                if (settings === false || !validator) {
                    return;
                }

                result.push({
                    fn: validator[0],
                    message: validator[1],
                    settings: settings
                });
            });

            return result;
        },

        /**
         * @param {Array|Element|null} elements
         * @return {Array}
         */
        _elements: function (elements) {
            var added = {};

            elements = elements || this.form;
            elements = $(elements);

            if ($(elements[0]).is('form')) {
                elements = $(elements[0])
                    .find('input:not([type=hidden]):not([type=submit]), select, textarea')
                    .not('[disabled]')
                    .filter(function () {
                        if (!this.name ||
                            this.name in added ||
                            $(this).width() <= 0 ||
                            $(this).height() <= 0
                        ) {
                            return false;
                        }

                        added[this.name] = true;

                        return true;
                    });
            }

            return elements;
        },

        /**
         * @param {Element} element
         * @param {Array} errors
         */
        _showErrors: function (element, errors) {
            this.addErrorClass(element);
            this._overridable('addErrorNodes', [element, this.createErrorNodes(element, errors)]);
        },

        /**
         * @param {String} methodName
         * @param {Array} args
         */
        _overridable: function (methodName, args) {
            if (this.options[methodName]) {
                this.options[methodName].apply(this, args);
            } else {
                this[methodName].apply(this, args);
            }
        },

        /**
         * @param {Element} element
         */
        addErrorClass: function (element) {
            $(element).addClass(this.options.errorClass);
        },

        /**
         * @param {Element} element
         */
        removeErrorClass: function (element) {
            $(element).removeClass(this.options.errorClass);
        },

        /**
         * @param {Element} element
         * @param {Array} errors
         * @return {Array}
         */
        createErrorNodes: function (element, errors) {
            var self = this,
                nodes = $([]);

            $.each(errors, function () {
                var node = $(self.options.errorTextTag);

                if (element.id) {
                    node.attr('for', element.id);
                    node.attr('id', element.id + '-error');
                }

                node.text(this)
                    .attr('generated', true)
                    .addClass([
                        'error-text',
                        self.options.errorClass,
                        self.options.errorTextClass
                    ].join(' '));

                nodes = nodes.add(node.get(0));
            });

            return nodes;
        },

        /**
         * @param {Element} element
         * @param {Collection} errorNodes
         */
        addErrorNodes: function (element, errorNodes) {
            var anchor = $(element),
                next = $(element).nextAll().last();

            if (next.length) {
                anchor = next;
            }

            anchor.after(errorNodes);
        },

        /**
         * @param {Element} element
         */
        removeErrorNodes: function (element) {
            $(element).parent().find('.error-text[generated]').remove();
        }
    };

    /** [validation description] */
    $.validator = function (element, options) {
        return new Validator(element, options);
    };
    $.validator.validators = {};
})();

/* global WeakMap ko _ */
$.registry = (function () {
    'use strict';

    var data = {};

    return {
        /**
         * @param {String} name
         * @param {Element} element
         * @return {Mixed}
         */
        get: function (name, element) {
            var result = [];

            if (!data[name] || !data[name].objects) {
                return data[name];
            }

            if (element) {
                return data[name].objects.get(element);
            }

            $.each(data[name].elements, function (index, el) {
                var instance = $.registry.get(name, el);

                if (!instance) {
                    return;
                }

                result.push(instance);
            });

            return result;
        },

        /**
         * @param {String} name
         * @param {Element} element
         * @param {Object} component
         */
        set: function (name, element, component) {
            if (!data[name] && component) {
                data[name] = {
                    objects: new WeakMap(),
                    elements: []
                };
            }

            if (!component) {
                data[name] = element; // element is a component here
            } else {
                data[name].objects.set(element, component);
                data[name].elements.push(element);
            }
        },

        /**
         * @param {String} name
         * @param {Element} element
         */
        delete: function (name, element) {
            var instance, index;

            if (name && element) {
                instance = data[name].objects.get(element);
                index = data[name].elements.indexOf(element);

                if (index !== -1) {
                    data[name].elements.splice(index, 1);
                }

                if (instance && instance.destroy) {
                    instance.destroy();
                }

                return data[name].objects.delete(element);
            }

            if (name) {
                return $.each(data[name].elements, function (i, el) {
                    $.registry.delete(name, el);
                });
            }

            $.each(data, function (t) {
                $.each(data[t].elements || [], function (i, el) {
                    $.registry.delete(t, el);
                });
            });
        }
    };
})();

(function () {
    'use strict';

    var Base, Widget, View,
        mapping = {},
        prototypes = {},
        pending = {
            mixins: {},
            components: {}
        };

    /** Class factory */
    function createFactory(Root) {
        return {
            /** Extends Base prototype with Parent or Root */
            extend: function (BasePrototype, Parent) {
                return (Parent || Root).extend(BasePrototype);
            },

            /** Creates a new instance of Base prototype */
            create: function (name, BasePrototype, settings, el) {
                return new BasePrototype(name, settings || {}, el);
            }
        };
    }

    /** [registerComponent description] */
    function registerComponent(factory, fullname, prototype) {
        var name = fullname.split('.').pop();

        /** @param {Object|Function|String} settings */
        $.fn[name] = function (settings) {
            var result = this,
                args = arguments;

            if ($.isPlainObject(this)) {
                // object without element: $.fn.dataPost().send()
                result = factory.create(name, prototype, settings, window);
            } else if (typeof settings === 'string') {
                // object instance or method: $(el).dropdown('open')
                args = Array.prototype.slice.call(args, 1);

                if (settings === 'instance') {
                    result = undefined;
                }

                this.each(function () {
                    var tmp,
                        instance = $.registry.get(name, this);

                    if (settings === 'instance') {
                        if (!instance) {
                            return;
                        }

                        result = instance;

                        return false;
                    }

                    if (!instance) {
                        return;
                    }

                    tmp = instance[settings].apply(instance, args);

                    if (tmp !== instance && tmp !== undefined) {
                        result = tmp;

                        return false;
                    }
                });
            } else {
                // object initialization: $(el).dropdown({...})
                this.each(function () {
                    var el = this,
                        instance = $.registry.get(name, el);

                    if (!instance) {
                        instance = factory.create(name, prototype, settings, el);
                    } else {
                        instance._options(settings).init();
                    }
                });
            }

            return result;
        };

        /**
         * Alternative widget access. Example:
         *
         * $.widget('mage.tabs') accessible via $(selector).tabs and $.mage.tabs
         * $.widget('argento.argentoTabs') accessible via $(selector).argentoTabs and $.argento.argentoTabs
         */
        (function () {
            var parts = fullname.split('.'),
                ns = parts.shift(),
                fn = parts.pop();

            if (!ns || !fn) {
                return;
            }

            $[ns] = $[ns] || {};

            /** Alternative widget access. Example: $.mage.tabs */
            $[ns][fn] = function (settings, element) {
                return factory.create(name, prototypes[name], settings, element);
            };
        })();

        if (prototype.prototype.hasOwnProperty('component') && prototype.prototype.component) {
            mapping[prototype.prototype.component] = name;
        }

        return $.fn[name];
    }

    // automatically mount components
    $(document).on('breeze:mount', function (event, data) {
        var alias = mapping[data.__component],
            component;

        if (!alias) {
            return;
        }

        component = prototypes[alias].prototype.component;

        if (component === false) {
            return;
        }

        if (!data.el) {
            $.fn[alias](data.settings);
        } else {
            $(data.el)[alias](data.settings);
            $(data.el).get(0)['breeze:' + component] = $(data.el)[alias]('instance');
        }
    });

    /** Abstract function to create components */
    function createComponent(factory) {
        /**
         * @param {String} fullname
         * @param {String} parent
         * @param {Object} prototype
         * @return {Object}
         */
        function invoke(fullname, parent, prototype) {
            var name = fullname.split('.').pop();

            if (!prototype) {
                prototype = parent;
                parent = undefined;
            }

            if (typeof prototype === 'undefined') {
                return {
                    /**
                     * @param {Function} callback
                     */
                    each: function (callback) {
                        var collection = $.registry.get(name);

                        if (!collection) {
                            return;
                        }

                        collection.forEach(callback);
                    },

                    /**
                     * Example:
                     *
                     *     $.view('messages').invoke('removeCookieMessages');
                     *     $.widget('dropdown').invoke('close');
                     *
                     * @param {String} method
                     */
                    invoke: function (method) {
                        var collection = $.registry.get(name);

                        if (!collection) {
                            return;
                        }

                        collection.forEach(function (instance) {
                            if (instance[method]) {
                                instance[method]();
                            }
                        });
                    },

                    /**
                     * Example:
                     *
                     *     $.view('messages').destroy();
                     *     $.widget('dropdown').destroy();
                     *
                     * Destroy objects
                     */
                    destroy: function () {
                        $.registry.delete(name);
                    }
                };
            }

            if (parent) {
                if (!prototypes[parent]) {
                    // eslint-disable-next-line max-depth
                    if (!pending.components[parent]) {
                        pending.components[parent] = [];
                    }

                    // delay component creation until parent will be created too
                    pending.components[parent].push({
                        fullname: fullname,
                        parent: parent,
                        prototype: prototype
                    });

                    return;
                }

                parent = prototypes[parent];
            }

            prototype = factory.extend(prototype, parent);
            prototypes[name] = prototype;

            // apply pending mixins
            if (pending.mixins[name]) {
                $.each(pending.mixins[name], function () {
                    $.mixin(name, this);
                });
                delete pending.mixins[name];
            }

            // create pending components
            if (pending.components[name]) {
                $.each(pending.components[name], function () {
                    invoke(this.fullname, this.parent, this.prototype);
                });
                delete pending.components[name];
            }

            return registerComponent(factory, fullname, prototype);
        }

        return invoke;
    }

    Base = Class.extend({
        initialize: _.noop,
        create: _.noop,
        init: _.noop,
        destroy: _.noop,
        _create: _.noop,
        _init: _.noop,
        _trigger: _.noop,

        /**
         * @param {Object} options
         * @return {Base}
         */
        _initialize: function (options) {
            this._options(options);
            this._defaults(this.options);
            this._trigger('beforeCreate');
            this.initialize();
            this.create();
            this._create();
            this.init();
            this._init();
            this._trigger('afterCreate');

            return this;
        },

        /**
         * @param {Object} values
         */
        _defaults: function (values) {
            var self = this;

            _.each(this.defaults || {}, function (value, key) {
                self[key] = _.has(values, key) ? values[key] : value;
            });
        },

        /**
         * @param {Object} options
         */
        _options: function (options) {
            if (typeof options === 'string') {
                this.options = options;
            } else {
                this.options = $.extendProps(options || {}, this.options || {});
                this.options = $.extendProps(this.options.config || {}, this.options);
            }

            return this;
        },

        /**
         * @param {String} path
         * @return {Mixed}
         */
        _option: function (path, defaults) {
            return _.get(this.options, path.split('/'), defaults);
        },

        /**
         * @param {String|Object} key
         * @return {Mixed}
         */
        option: function (key, defaults) {
            if (!key) {
                return $.extend(true, {}, this.options);
            }

            return this._option(key.replace(/\./g, '/'), defaults);
        },

        /**
         * @param {String} key
         * @param {Mixed} value
         */
        _setOption: function (key, value) {
            this.options[key] = value;

            return this;
        }
    });

    Widget = Base.extend({
        /**
         * @param {String} name
         * @param {Object} options
         * @param {Element} element
         * @return {WidgetModel}
         */
        _initialize: function (name, options, element) {
            this.__name = name;
            this.__uuid = $.guid++;
            this.__eventNamespace = '.' + name + this.__uuid;
            this.__bindings = $();
            this.element = $(element);

            $.registry.set(name, element, this);

            return this._super(options);
        },

        /**
         * @param {Cash} element
         * @param {Object} options
         * @return {Object} https://github.com/focus-trap/focus-trap
         */
        createFocusTrap: function (element, options) {
            if (!element) {
                element = this.element;
            }

            return $.focusTrap.createFocusTrap(element.get(0), $.extend({
                allowOutsideClick: true,
                escapeDeactivates: false
            }, options || {}));
        },

        /**
         * @param {String} event
         * @param {Object} data
         */
        _trigger: function (event, data) {
            data = data || {};
            data.instance = this;
            this.element.trigger(this.__name + ':' + event, data);
        },

        /**
         * @param {Element|Object|String} element
         * @param {Object|Function} handlers
         */
        _on: function (element, handlers) {
            var self = this,
                callback;

            if (_.isString(element)) {
                callback = handlers;
                handlers = {};
                handlers[element] = callback;
                element = this.element;
            } else if (!handlers) {
                handlers = element;
                element = this.element;
            } else {
                element = $(element);
                this.__bindings = this.__bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + self.__eventNamespace,
                    selector = match[2];

                if (typeof handler === 'string') {
                    handler = self[handler];
                }

                handler = handler.bind(self);

                if (selector) {
                    element.on(eventName, selector, function (e) {
                        e.handleObj = {
                            selector: selector
                        };

                        handler(e);
                    });
                } else {
                    element.on(eventName, handler);
                }
            });
        },

        /**
         * @param {Element} element
         * @param {String} eventName
         */
        _off: function (element, eventName) {
            if (!eventName) {
                eventName = element;
                element = this.element;
            }

            eventName =
                (eventName || '').split(' ').join(this.__eventNamespace + ' ') +
                this.__eventNamespace;

            element.off(eventName);
        },

        /** Destroy all event listeners */
        destroy: function () {
            if (this.focusTrap) {
                this.focusTrap.deactivate();
            }

            this.element.off(this.__eventNamespace);
            this.__bindings.off(this.__eventNamespace);
            this._super();
        }
    });

    View = Widget.extend({
        beforeRender: _.noop,
        afterRender: _.noop,

        /** [initialize description] */
        _initialize: function (name, options, element) {
            this._regions = {};
            this._markup = $(element).html();
            this._super(name, options, element);

            if (window.requestIdleCallback) {
                window.requestIdleCallback(this._applyBindings.bind(this, element));
            } else {
                window.setTimeout(this._applyBindings.bind(this, element), 1);
            }
        },

        /** [applyBindings description] */
        _applyBindings: function (element) {
            if (!element.children.length || !ko.dataFor(element.children[0])) {
                if (this.beforeRender() === false) {
                    return;
                }

                ko.applyBindingsToDescendants(this, element);
                $(element).trigger('contentUpdated');
                this.afterRender();
            }
        },

        /** destroy implementation */
        destroy: function () {
            // Restore initial markup that is used as a template in knockout
            this.element.html(this._markup);
            this._super();
        },

        /**
         * @param {Object} values
         */
        _defaults: function (values) {
            var self = this;

            this._super(values);

            _.each(values, function (value, key) {
                self[key] = value;
            });
        },

        /** [getTemplate description] */
        getTemplate: function () {
            return (this.template || this.options.template).replace(/\//g, '_');
        },

        /** [getRegion description] */
        getRegion: function (code) {
            var self = this,
                result = ko.observableArray();

            if (this._regions[code]) {
                return this._regions[code];
            }

            _.each(this.options.children, function (config) {
                var cmp;

                if (config.displayArea !== code) {
                    return;
                }

                cmp = self.mount(config);

                if (cmp) {
                    result.push(cmp);
                }
            });

            this._regions[code] = result;

            return result;
        },

        /** [mount description] */
        mount: function (config) {
            // @see main.js
            $.breeze.mount(config.component, {
                el: this.element,
                settings: config
            }, true);

            return this.element.get(0)['breeze:' + config.component];
        }
    });

    $.Base = Base;
    $.widget = createComponent(createFactory(Widget));
    $.view = createComponent(createFactory(View));
    $.uiComponent = {
        counter: 1,
        extend: function (proto) {
            $.view('uiComponent' + this.counter++, proto);
        }
    }

    /** Wrap prototype with mixins */
    $.mixin = function (name, mixins) {
        if (!prototypes[name]) {
            if (!pending.mixins[name]) {
                pending.mixins[name] = [];
            }

            return pending.mixins[name].push(mixins);
        }

        _.each(mixins, function (mixin, key) {
            var proto = prototypes[name].prototype,
                mixinType = typeof mixin,
                originalType = typeof proto[key];

            if (mixinType === 'function' && originalType === 'function') {
                proto[key] = _.wrap(proto[key], function () {
                    arguments[0] = arguments[0].bind(this);

                    return mixin.apply(this, _.toArray(arguments));
                });
            } else if (mixinType === 'object' && originalType === 'object') {
                proto[key] = _.extend({}, proto[key], mixin);
            } else {
                proto[key] = mixin;
            }
        });
    };
})();

/* global Cookies */
(function () {
    'use strict';

    var defaults = {
            path: '/',
            domain: null,
            secure: true,
            expires: null,
            samesite: 'strict'
        },
        settings = window.cookiesConfig || {};

    if (settings.lifetime) {
        settings.expires = new Date();
        settings.expires = new Date(settings.expires.getTime() + settings.lifetime * 1000);
        delete settings.lifetime;
    }

    $.cookies = $.cookieStorage = (function () {
        var cookies = Cookies.withAttributes($.extend(defaults, settings));

        return {
            /**
             * @param {String} name
             * @return {String}
             */
            get: function (name) {
                return cookies.get(name);
            },

            /**
             * @param {String} name
             * @param {String} value
             * @param {Object} attributes
             */
            set: function (name, value, attributes) {
                cookies.set(name, value, attributes);
            },

            /**
             * @param {String} name
             * @param {Object} attributes
             */
            remove: function (name, attributes) {
                cookies.remove(name, attributes);
            },

            /**
             * @param {String} name
             * @return {Mixed}
             */
            getJson: function (name) {
                var value = this.get(name);

                if (value) {
                    try {
                        value = JSON.parse(value);
                    } catch (e) {
                        console.error(e);
                        value = {};
                    }
                }

                return value;
            },

            /**
             * @param {String} name
             * @param {Object} value
             * @param {Object} attributes
             */
            setJson: function (name, value, attributes) {
                this.set(name, JSON.stringify(value), attributes);
            }
        };
    })();

    $.mage = $.mage || {};
    $.mage.cookies = $.cookies;
})();

$.storage = $.localStorage = (function () {
    'use strict';

    var storage = window.localStorage || window.sessionStorage,
        data = {};

    return {
        /**
         * @param {String} key
         * @return {String}
         */
        get: function (key) {
            return storage.getItem(key);
        },

        /**
         * @param {String} key
         * @param {String} value
         */
        set: function (key, value) {
            storage.setItem(key, value);
        },

        /**
         * @param {Mixed} keys
         */
        remove: function (keys) {
            if (typeof keys === 'string') {
                keys = [keys];
            }

            keys.forEach(function (key) {
                storage.removeItem(key);
            });
        },

        /**
         * @param {String} namespace
         * @return {Object}
         */
        ns: function (namespace) {
            if (!data[namespace]) {
                data[namespace] = {};
            }

            if (storage.getItem(namespace)) {
                try {
                    data[namespace] = JSON.parse(storage.getItem(namespace));
                } catch (e) {
                    console.error(e);
                }
            }

            return {
                /**
                 * @param {String} key
                 * @return {Mixed}
                 */
                get: function (key) {
                    if (!key) {
                        return data[namespace];
                    }

                    return data[namespace][key];
                },

                /**
                 * @param {String} key
                 * @param {Mixed} value
                 */
                set: function (key, value) {
                    data[namespace][key] = value;

                    storage.setItem(namespace, JSON.stringify(data[namespace]));
                },

                /**
                 * @return {Array}
                 */
                keys: function () {
                    return Object.keys(data[namespace]);
                },

                /**
                 * @param {Mixed} keys
                 */
                remove: function (keys) {
                    if (typeof keys === 'string') {
                        keys = [keys];
                    }

                    keys.forEach(function (key) {
                        delete data[namespace][key];
                    });

                    storage.setItem(namespace, JSON.stringify(data[namespace]));
                },

                /** Remove all data */
                removeAll: function () {
                    data[namespace] = {};
                    storage.removeItem(namespace);
                }
            };
        }
    };
})();

/** Emulate jquery plugin for easier integrations */
$.initNamespaceStorage = function (ns) {
    'use strict';

    return {
        localStorage: $.storage.ns(ns)
    };
};
