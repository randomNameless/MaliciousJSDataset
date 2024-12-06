/*! For license information please see newsletter_signup.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CAAS_AOLCOM",[],e):"object"==typeof exports?exports.CAAS_AOLCOM=e():t.CAAS_AOLCOM=e()}(self,(function(){return function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t){if("object"!=r(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}function u(){u=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function y(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),u=new T(n||[]);return i(a,"_invoke",{value:k(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=y;var p="suspendedStart",m="suspendedYield",v="executing",d="completed",g={};function b(){}function w(){}function L(){}var S={};f(S,s,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(N([])));j&&j!==n&&o.call(j,s)&&(S=j);var A=L.prototype=b.prototype=Object.create(S);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,a,u,s){var c=h(t[i],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==r(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var s=C(u,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var c=h(e,r,n);if("normal"===c.type){if(o=n.done?d:m,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=d,n.method="throw",n.arg=c.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(o.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=L,i(A,"constructor",{value:L,configurable:!0}),i(L,"constructor",{value:w,configurable:!0}),w.displayName=f(L,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},x(O.prototype),f(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(y(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(A),f(A,l,"Generator"),f(A,s,(function(){return this})),f(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}t.r(e),t.d(e,{default:function(){return _}});var c,l=(new Date).getTime(),f="sign-up-form",y="newsletter-message",h="isNewsLetterEnable",p=window.NEXUtils.getCookie(h),m=function(){var t,e=(t=u().mark((function t(){var e,r,n,o=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:{},t.next=4,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),v=(c=function(){return t=function t(e){var r=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elems=function(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var n=e.length;return o(e,n)}return t(e,r)}(n,document.querySelectorAll(r)),this.elems.length&&(this.newsLetter=document.getElementById("aol-newsletter"),this.newsLetterAlert=document.getElementById("newsletter-alert"),this.newsLetterBanner=document.getElementById("newsletter-banner"),this.newsLetterForm=document.getElementById(f),this.newsLetter&&this.newsLetterAlert&&this.init())},e=[{key:"init",value:function(){this.CheckNewsLetterCookie(),this.signUp()}},{key:"signUp",value:function(){var t=this;document.getElementById(f).addEventListener("submit",(function(e){return t.signUpHandler(e)}))}},{key:"signUpHandler",value:function(t){var e=this;t.preventDefault();var r=document.getElementById("signup-email").value;m("/nex/modules/newsletter_signup/v1?domain=wwwaolcom&isXHR=true&m_mode=json",{email:r}).then((function(t){return t.json()})).then((function(t){t.data.response.success?(e.responseMessage(!0),e.SetNewsletterCookie(),document.getElementById(f).remove()):e.responseMessage(!1)}))}},{key:"responseMessage",value:function(t){document.getElementById(y)&&document.getElementById(y).remove();var e=!0===t,r={text:e?"Thank you for signing up to the AOL newsletter":"Registration failed, please try again.",isSuccess:e};this.newsLetterAlert.appendChild(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=document.createElement("div");e.setAttribute("id",y),e.setAttribute("class",y);var r=document.createElement("span");r.setAttribute("class",t.isSuccess?"success":"error"),r.textContent=t.isSuccess?"Success!":"Error.";var n=document.createTextNode(" ".concat(t.text)||0);return e.appendChild(r),e.appendChild(n),e}(r))}},{key:"SetNewsletterCookie",value:function(){window.NEXUtils.setCookie(h,l,3)}},{key:"CheckNewsLetterCookie",value:function(){p&&!this.newsLetterBanner?this.newsLetter.style.display="none":p&&this.newsLetterBanner?(this.responseMessage(!0),this.newsLetterForm&&this.newsLetterForm.parentNode.removeChild(this.newsLetterForm)):this.newsLetter.style.display="block"}}],e&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function g(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function L(t){var e=function(t){if("object"!=d(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}var S="m-newsletter--success",E="m-newsletter--error",j="m-newsletter--signed-up",A=function(){return t=function t(e){var r=this,n=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elems=function(t,e,r){if(e&&!Array.isArray(e)&&"number"==typeof e.length){var n=e.length;return b(e,n)}return t(e,r)}(g,document.querySelectorAll(n)),this.elems.length&&(this.utils=window.NEXUtils||{},this.elems.forEach((function(t){r.init(t)})))},e=[{key:"init",value:function(t){var e=this;t.classList.contains(j)?this.updateContainerClass(t):t.querySelector(".".concat("m-newsletter__form")).addEventListener("submit",(function(r){return e.submitHandler(r,t)}))}},{key:"updateContainerClass",value:function(t){var e=t.closest(".".concat("m-newsletter__container"));null==e||e.classList.add(j)}},{key:"submitHandler",value:function(t,e){var r,n=this;t.preventDefault();var o=t.currentTarget,i={method:o.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:null===(r=o["newsletter-email"])||void 0===r?void 0:r.value})};fetch("/nex/modules/newsletter_signup/v1?isXHR=true&m_mode=json",i).then((function(t){return t.json()})).then((function(t){t.data.response.success?(n.setResponseUI(e,!0),n.setNewsletterCookie()):n.setResponseUI(e,!1)})).catch((function(t){n.setResponseUI(e,!1)}))}},{key:"setResponseUI",value:function(t,e){e?(t.classList.remove(E),t.classList.add(S)):(t.classList.remove(S),t.classList.add(E))}},{key:"setNewsletterCookie",value:function(){var t=(new Date).getTime();this.utils.setCookie("isNewsLetterEnable",t,3)}}],e&&w(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function k(t,e,r){return e&&O(t.prototype,e),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t){var e=function(t){if("object"!=x(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==x(e)?e:e+""}var _=new(k((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.legacyController=new v({selector:".m-newsletter-signup"}),this.controller=new A({selector:".m-newsletter"})})));return e}()}));
//# sourceMappingURL=newsletter_signup.js.map