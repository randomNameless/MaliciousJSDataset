function _superPropGet(t,e,n,r){var o=_get(_getPrototypeOf(1&r?t.prototype:t),e,n);return 2&r&&"function"==typeof o?function(t){return o.apply(n,t)}:o}function _get(){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=_superPropBase(t,e);if(r)return(r=Object.getOwnPropertyDescriptor(r,e)).get?r.get.call(arguments.length<3?t:n):r.value}).apply(null,arguments)}function _superPropBase(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var c,i={},t=Object.prototype,u=t.hasOwnProperty,l=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(c){a=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o,a,i,s,e=e&&e.prototype instanceof _?e:_,e=Object.create(e.prototype),r=new T(r||[]);return l(e,"_invoke",{value:(o=t,a=n,i=r,s=d,function(t,e){if(s===p)throw Error("Generator is already running");if(s===y){if("throw"===t)throw e;return{value:c,done:!0}}for(i.method=t,i.arg=e;;){var n=i.delegate;if(n){n=function t(e,n){var r=n.method,o=e.iterator[r];if(o===c)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=c,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;r=f(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,v;o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=c),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}(n,i);if(n){if(n===v)continue;return n}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(s===d)throw s=y,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);s=p;n=f(o,a,i);if("normal"===n.type){if(s=i.done?y:h,n.arg===v)continue;return{value:n.arg,done:i.done}}"throw"===n.type&&(s=y,i.method="throw",i.arg=n.arg)}})}),e}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}i.wrap=s;var d="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function _(){}function m(){}function b(){}var e={},g=(a(e,r,function(){return this}),Object.getPrototypeOf),g=g&&g(g(C([]))),w=(g&&g!==t&&u.call(g,r)&&(e=g),b.prototype=_.prototype=Object.create(e));function E(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function A(i,s){var e;l(this,"_invoke",{value:function(n,r){function t(){return new s(function(t,e){!function e(t,n,r,o){var a,t=f(i[t],i,n);if("throw"!==t.type)return(n=(a=t.arg).value)&&"object"==_typeof(n)&&u.call(n,"__await")?s.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):s.resolve(n).then(function(t){a.value=t,r(a)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(e){if(e||""===e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(u.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=c,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return l(w,"constructor",{value:m.prototype=b,configurable:!0}),l(b,"constructor",{value:m,configurable:!0}),m.displayName=a(b,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,a(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},i.awrap=function(t){return{__await:t}},E(A.prototype),a(A.prototype,n,function(){return this}),i.AsyncIterator=A,i.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var a=new A(s(t,e,n,r),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(w),a(w,o,"Generator"),a(w,r,function(){return this}),a(w,"toString",function(){return"[object Generator]"}),i.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),s=u.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,S(o)),r}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=c),v}},i}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,s=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function asyncGeneratorStep(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(s){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=s.apply(t,i);function o(t){asyncGeneratorStep(r,e,n,o,a,"next",t)}function a(t){asyncGeneratorStep(r,e,n,o,a,"throw",t)}o(void 0)})}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function _callSuper(t,e,n){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,n||[],_getPrototypeOf(t).constructor):e.apply(t,n))}function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,n){var r;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((r=[null]).push.apply(r,e),e=new(t.bind.apply(t,r)),n&&_setPrototypeOf(e,n.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!=_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(()=>{var t;window.__RT__.cookie||(t=(()=>_createClass(function t(){_classCallCheck(this,t)},[{key:"delete",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";t&&(e=e&&"domain=".concat(e," ;"),document.cookie="".concat(t,"=; ").concat(e,"path=/; Max-Age=-99999999;"))}},{key:"get",value:function(t){return t&&2===(t="; ".concat(document.cookie).split("; ".concat(t,"="))).length?t[1].split(";")[0]:void 0}},{key:"set",value:function(t){var e,n,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";t&&(e=24*(2<arguments.length&&void 0!==arguments[2]?arguments[2]:365)*60*60*1e3,(n=new Date).setTime(n.getTime()+e),document.cookie="".concat(t,"=").concat(r,"; expires=").concat(n.toUTCString(),"; path=/"))}}]))(),"undefined"!=typeof module?module.exports=t:(t=new t,window.__RT__=window.__RT__||{},window.__RT__.cookie=t))})(),(()=>{var t;window.__RT__.countryCode||(t=(()=>_createClass(function t(){_classCallCheck(this,t)},[{key:"_parseCountryCode",value:function(t){return t=t.replace(/""""/g,'""'),(null==(t=JSON.parse(t))?void 0:t.countrycode)||""}},{key:"get",value:function(){try{var e,t=window.__RT__.cookie.get("akamai_generated_location");2!==(e=this._parseCountryCode(t)).length&&(e="")}catch(t){e=""}return e}}]))(),"undefined"!=typeof module?module.exports=t:(t=new t,window.__RT__=window.__RT__||{},window.__RT__.countryCode=t))})(),(()=>{var n,t;window.Component||(n=window.matchMedia("(max-width: 767px)"),t=(()=>{function e(){var t;if(_classCallCheck(this,e),(t=_callSuper(this,e)).attachShadow({mode:"open",delegatesFocus:!0}),"function"!=typeof t.template)throw new Error(t._errorMessage("TEMPLATE_METHOD"));return t.shadowRoot.appendChild(t.template().content.cloneNode(!0)),t.attachedEvents=[],t._bindHandlers(),t._shorthandEvents(t.selectAll("*")),t._autoReflect(),t.rexWCTag=/<(\w+-[\w-]+)/g,t}return _inherits(e,_wrapNativeSuper(HTMLElement)),_createClass(e,[{key:"disconnectedCallback",value:function(){this.detachAllEvents()}},{key:"attributeChangedCallback",value:function(t,e,n){var r;e!==n&&("function"==typeof this[r="attribute".concat(t[0].toUpperCase()).concat(t.slice(1))]&&this[r](n,e),"function"==typeof this[r="_attribute".concat(t[0].toUpperCase()).concat(t.slice(1))])&&this[r](n,e)}},{key:"attachEvent",value:function(t,e,n){var r=this;t instanceof NodeList&&(t=Array.from(t)),(t=Array.isArray(t)?t:[t]).forEach(function(t){t&&t.addEventListener&&(t.addEventListener(e,n),r.attachedEvents.push({el:t,eventType:e,fn:n}))})}},{key:"attachEvents",value:function(t){var n=this;t.forEach(function(t){var e=t.el;return n.attachEvent(e,t.eventType,t.fn)})}},{key:"detachAllEvents",value:function(){this.attachedEvents.forEach(function(t){return t.el.removeEventListener(t.eventType,t.fn)}),this.attachedEvents=[]}},{key:"detachEvent",value:function(e,n,r){function t(t){return e===t.el&&n===t.eventType&&r===t.fn}var o=this.attachedEvents.findIndex(t),a=this.attachedEvents.find(t);a&&(a.el.removeEventListener(a.eventType,a.fn),this.attachedEvents.splice(o,1))}},{key:"detachEvents",value:function(t){var n=this;t.forEach(function(t){var e=t.el;return n.detachEvent(e,t.eventType,t.fn)})}},{key:"domJson",value:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return document.querySelector('[type="application/json"]'.concat(t))}).concat(_toConsumableArray(this.querySelectorAll('[type="application/json"]'))).filter(Boolean).reduce(function(t,e){var n=JSON.parse(e.textContent),e=e.getAttribute("data-json")||e.id||"unnamed";return t[e]||(t[e]=[]),t[e].push(n),t},{})}},{key:"elementsDefined",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n,r=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<r.length&&void 0!==r[0]?r[0]:[],Array.isArray(e)||(e=[e]),n=Array.from(this.template().innerHTML.matchAll(this.rexWCTag)).map(function(t){t=_slicedToArray(t,2);t[0];return t[1]}),n=_toConsumableArray(new Set(n.concat(e))),t.prev=4,t.next=7,Promise.all(n.map(function(t){return customElements.whenDefined(t)}));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(4),t.abrupt("return");case 13:case"end":return t.stop()}},t,this,[[4,9]])})),function(){return t.apply(this,arguments)})},{key:"initBool",value:function(t){this.booleans=t}},{key:"initSlotted",value:function(){var e=this,n=[];this.slotted={unnamed:[]},this.selectAll("slot").forEach(function(t){t.name?(e.slotted[t.name]=t.assignedNodes(),n.push(t)):e.slotted.unnamed=[].concat(_toConsumableArray(e.slotted.unnamed),_toConsumableArray(t.assignedNodes()))}),this._shorthandEvents(n)}},{key:"ready",value:function(){this.removeAttribute("skeleton"),this.isReady=!0}},{key:"responsiveAttribute",value:function(t){var e=_slicedToArray(String(t).split(","),2),n=e[0],e=e[1],n=n.trim(),e=e?e.trim():n;return t=this._isMobile?n:e}},{key:"select",value:function(t){return this.shadowRoot.querySelector(t)}},{key:"selectAll",value:function(t){return this.shadowRoot.querySelectorAll(t)}},{key:"slotEmpty",value:function(t){var e;switch(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"element"){case"textContent":return!(null!=(e=this.slotted)&&null!=(e=e[t])&&null!=(e=e[0])&&e.textContent.trim());case"childNodes":return!(null!=(e=this.slotted)&&null!=(e=e[t])&&null!=(e=e[0])&&e.hasChildNodes());default:return!(null!=(e=this.slotted)&&null!=(e=e[t])&&e[0])}}},{key:"_autoReflect",value:function(){var n,r=this,t=this.constructor.observedAttributes;Array.isArray(t)&&(n=function(t){return Array.isArray(r.booleans)&&r.booleans.includes(t)},t.forEach(function(e){Object.defineProperty(r,e,{set:function(t){return"true"===String(t)&&n(e)?r.setAttribute(e,""):"false"===String(t)&&n(e)||n(e)?r.removeAttribute(e):void r.setAttribute(e,t)},get:function(){var t=r.getAttribute(e);return null!==(t=""!==t&&"true"!==t||!n(e)?t:!0)&&"false"!==t||!n(e)||(t=!1),t=n(e)&&"boolean"!=typeof t?!1:t}})}))}},{key:"_bindHandlers",value:function(){var e=this;Object.getOwnPropertyNames(this.constructor.prototype).filter(function(t){return t.startsWith("_on")}).forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_errorMessage",value:function(t){return{TEMPLATE_METHOD:'To extend "Component", a `template()` method is required'}[t]}},{key:"_isMobile",get:function(){return n.matches}},{key:"_shorthandEvents",value:function(t){var o=this;t.forEach(function(r){Array.from(r.attributes).filter(function(t){return"@"===t.name[0]}).filter(function(t){return"function"==typeof o[t.value]}).forEach(function(t){var e=t.name.slice(1),n=o[t.value].bind(o);o.attachedEvents.push({el:r,eventType:e,fn:n}),r.addEventListener(e,n),r.removeAttribute(t.name)})})}}]);var t})(),window.Component=t,"undefined"!=typeof module&&(module.exports=t))})(),(()=>{var o,a,i,s,t;window.Manager||(o="color:#558ada",a="color:#bada55",i=window.matchMedia("(max-width: 767px)"),s=function(t){return"".concat(t.slice(0,1).toUpperCase()).concat(t.slice(1))},t=(()=>{function t(){var e;return _classCallCheck(this,t),(e=_callSuper(this,t)).readyPromise=new Promise(function(t){return e.readyResolve=t}),e.console=window.console,e.attachedEvents=[],e.enforceActions=!1,e.stateHistory={begin:{},changes:[],end:{}},e._bindHandlers(),e}return _inherits(t,_wrapNativeSuper(HTMLElement)),_createClass(t,[{key:"connectedCallback",value:function(){this.stateHistory.begin=_objectSpread({},this.state);var t="local"===location.hostname.split(".")[0]||"localhost"===location.hostname,e=(null==(e=window.__RT__)||null==(e=e.cookie)?void 0:e.get("trace_manager"))||"",n="*"===e||e.split(",").includes(this.traceName);this.traceEnabled=n||!e&&t,this.traceEnabled&&(this.state||this._errorMessage("INITIAL_STATE_UNDEFINED"),"object"!==_typeof(this.state)&&this._errorMessage("INITIAL_STATE_TYPE_ERROR"),"function"!=typeof this.stateUpdated)&&this._errorMessage("STATE_UPDATED_TYPE_ERROR",!0)}},{key:"ready",value:function(){return this.readyPromise}},{key:"disconnectedCallback",value:function(){this.detachAllEvents()}},{key:"attachEvent",value:function(t,e,n){var r=this;t instanceof NodeList&&(t=_toConsumableArray(t)),(t=Array.isArray(t)?t:[t]).forEach(function(t){t&&t.addEventListener&&(t.addEventListener(e,n),r.attachedEvents.push({el:t,eventType:e,fn:n}))})}},{key:"attachEvents",value:function(t){var n=this;t.forEach(function(t){var e=t.el;return n.attachEvent(e,t.eventType,t.fn)})}},{key:"attachMultiple",value:function(t,e){var r=this;(t=Array.isArray(t)?t:[t]).forEach(function(n){return e.forEach(function(t){var e=t.eventType;return r.attachEvent(n,e,t.fn)})})}},{key:"dispatch",value:(r=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n,r,o,a,i,s,c=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n=0<c.length&&void 0!==c[0]?c[0]:{}).nextState,n=void 0===(n=n.nextAction)?{}:n,r=[],o=["  1. 'undefined' will set options.nextAction.abort","  2. Error object will set options.nextAction.fail","  3. Object with 'isFail:true' prop will set options.nextAction.fail","  4. Object representing a state update will set options.nextAction.success","  5. Boolean true will set options.nextAction.success; no state update","  6. Boolean false will set options.nextAction.fail; no state update","If options.nextAction.abort or options.nextAction.fail are not defined, options.nextAction.success is used","as the fallback for the state action."],"function"!=typeof e&&(r=this.traceEnabled?[].concat(_toConsumableArray(r),["","When calling this.dispatch(options), a callback function must be assigned to the","options.nextState property. This function should return one of the following values:"],o,[""]):r).push('ERROR: Expected options.nextState to be a function but got "'.concat(e,'" (').concat(_typeof(e),")")),"string"!=typeof n.success&&(r=this.traceEnabled?[].concat(_toConsumableArray(r),["","When calling this.dispatch(options), the options object must have a string assigned to the","options.nextAction.success property. The value assigned to this property represents the action","to set on the state when options.nextState callback completes.","","All available actions that can be specified on options.nextAction: { abort, fail, success }","These values are applied to this.state.action when options.nextState returns one of the following values:"],o,[""]):r).push('ERROR: Expected options.nextAction.success to be a string but got "'.concat(n.success,'" (').concat(_typeof(n.success),")")),r.length)return t.abrupt("return",this._errorMessage(r.join("\n")));t.next=8;break;case 8:return i=!1,t.prev=9,t.next=12,e();case 12:a=t.sent,t.next=19;break;case 15:t.prev=15,t.t0=t.catch(9),i=!0,a=t.t0;case 19:if(a instanceof Error&&(i=!0),!0===(null==(o=a)?void 0:o.isFail)&&n.fail)return delete a.isFail,t.abrupt("return",this.setState(_objectSpread(_objectSpread({},a),{},{action:n.fail})));t.next=23;break;case 23:if(Array.isArray(this.state.errors)||(this.state.errors=[]),s=_toConsumableArray(this.state.errors),i&&s.push(a),i&&n.fail)return t.abrupt("return",this.setState({action:n.fail,errors:s}));t.next=28;break;case 28:if(void 0===a&&n.abort)return t.abrupt("return",this.setState({action:n.abort}));t.next=30;break;case 30:if(!0===a)return t.abrupt("return",this.setState({action:n.success}));t.next=32;break;case 32:if(!1===a&&n.fail)return t.abrupt("return",this.setState({action:n.fail}));t.next=34;break;case 34:if(!i&&a&&"object"===_typeof(a))return t.abrupt("return",this.setState(_objectSpread(_objectSpread({},a),{},{action:n.success})));t.next=36;break;case 36:this.traceEnabled&&this._errorMessage('Could not determine result as state in this.dispatch: "'.concat(a,'" (').concat(_typeof(a),")")),this.setState({action:n.success,errors:s});case 38:case"end":return t.stop()}},t,this,[[9,15]])})),function(){return r.apply(this,arguments)})},{key:"detachAllEvents",value:function(){this.attachedEvents.forEach(function(t){return t.el.removeEventListener(t.eventType,t.fn)}),this.attachedEvents=[]}},{key:"detachEvent",value:function(e,n,r){function t(t){return e===t.el&&n===t.eventType&&r===t.fn}var o=this.attachedEvents.findIndex(t),a=this.attachedEvents.find(t);a&&(a.el.removeEventListener(a.eventType,a.fn),this.attachedEvents=this.attachedEvents.splice(o,1))}},{key:"didStateChange",value:function(t){var e;return Object.keys(this.state).includes(t)?!this._deepEqual(null==(e=this.prevState)?void 0:e[t],null==(e=this.state)?void 0:e[t]):this.traceEnabled&&this._errorMessage("STATE_KEY_INVALID")}},{key:"domAction",value:function(t,e){this._onDomAction(t,e)}},{key:"domActions",value:function(){var a=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=("object"!==_typeof(this.state.domEvent)&&(this.state.domEvent={}),0!==this.state.domEventCount&&(this.state.domEventCount=0),t.forEach(function(t){var t=_slicedToArray(t.split(":"),2),o=t[0],e=t[1],t=a.dom[o];e&&t&&("function"==typeof t[Symbol.iterator]?_toConsumableArray(t):[t]).forEach(function(t){e.split(",").forEach(function(r){t.addEventListener(r,function(t){var e=a.state.domEventCount+1,n="on".concat(s(o)).concat(s(r));a.setState({action:n,domEvent:t,domEventCount:e})})})})}),this.domElements());Object.keys(e).forEach(function(t){e[t].forEach(function(e){var t=_slicedToArray(e.dataset[a.traceName.toLowerCase()].split(":"),2)[1];t&&t.split(",").forEach(function(t){e.addEventListener(t,a._onDomAction),a.attachedEvents.push({el:e,eventType:t,fn:a._onDomAction})})})})}},{key:"domElements",value:function(){var r=this;return _toConsumableArray(document.querySelectorAll("[data-".concat(this.traceName,"]"))).reduce(function(t,e){var n=_slicedToArray(e.dataset[r.traceName.toLowerCase()].split(":"),1)[0];return t[n]||(t[n]=[]),t[n].push(e),t},{})}},{key:"domJson",value:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return document.querySelector('[type="application/json"]'.concat(t))}).concat(_toConsumableArray(this.querySelectorAll('[type="application/json"]'))).filter(Boolean).reduce(function(t,e){var n=JSON.parse(e.textContent),e=e.getAttribute("data-json")||e.id||"unnamed";return t[e]||(t[e]=[]),t[e].push(n),t},{})}},{key:"domRefresh",value:function(){this.detachAllEvents(),this.dom=_objectSpread(_objectSpread({},this.dom),this.domElements()),this.domActions()}},{key:"elementsDefined",value:(n=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=0<n.length&&void 0!==n[0]?n[0]:[],Array.isArray(e)||(e=[e]),t.prev=2,t.next=5,Promise.all(e.map(function(t){return customElements.whenDefined(t)}));case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(2),t.abrupt("return");case 11:case"end":return t.stop()}},t,null,[[2,7]])})),function(){return n.apply(this,arguments)})},{key:"logError",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function t(n){var e;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=(n=n||(null==(e=this.state)||null==(e=e.errors)?void 0:e[0]))instanceof Error?n:new Error("Error unavailable")).message="MANAGER_".concat(this.traceName.toUpperCase()," ").concat(n.message),n=Object.getOwnPropertyNames(n).reduce(function(t,e){return _objectSpread(_objectSpread({},t),{},_defineProperty({},e,n[e]))},{}),this.stateHistory.end=_objectSpread({},this.state),e={err:n,stateHistory:this.stateHistory},t.next=8,window.__RT__.fetcher.fetchOK("/napi/log-error",{body:e,method:"POST"});case 8:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})},{key:"setState",value:function(t){function e(){var t;if(r.prevState=_objectSpread({},r.state),r._deepEqual(r.prevState,r.nextState))return n();r.state=r.nextState,delete r.nextState,null!=(t=r.silentActions)&&t.includes(null==(t=r.state)?void 0:t.action)||(r._traceAction(),r._traceState(),r._traceStateDiff(),r.stateHistory.changes.push(_objectSpread({action:null==(t=r.state)?void 0:t.action},r._diff(r.prevState,r.state)))),r.dispatchEvent(new CustomEvent("state",{detail:{state:_objectSpread({},r.state),prevState:_objectSpread({},r.prevState)}})),r.stateUpdated(),n()}var n,r=this,o=(this.enforceActions&&"string"!=typeof t.action&&this._errorMessage("ENFORCE_ACTION",!0),new Promise(function(t){return n=t}));this.nextState=_objectSpread(_objectSpread(_objectSpread({},this.state),this.nextState),t);return this.enforceActions?e():(clearTimeout(this.waitState),this.waitState=setTimeout(e,5)),o}},{key:"_bindHandlers",value:function(){var e=this;this._onDomAction=this._onDomAction.bind(this),Object.getOwnPropertyNames(this.constructor.prototype).filter(function(t){return t.startsWith("_on")||t.startsWith("_dispatch")}).forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_deepEqual",value:function(t,e){return JSON.stringify(t)===JSON.stringify(e)}},{key:"_diff",value:function(r,o){var a,t,i=this;return r===o?{}:(a=function(t){return null!==t&&"object"===_typeof(t)})(r)&&a(o)?(t=Object.keys(r).reduce(function(t,e){return o.hasOwnProperty(e)?t:_objectSpread(_objectSpread({},t),{},_defineProperty({},e,void 0))},{}),Object.keys(o).reduce(function(t,e){var n;return r.hasOwnProperty(e)?(n=i._diff(r[e],o[e]),a(n)&&0===Object.keys(n).length?t:_objectSpread(_objectSpread({},t),{},_defineProperty({},e,n))):_objectSpread(_objectSpread({},t),{},_defineProperty({},e,o[e]))},t)):o}},{key:"_errorMessage",value:function(t,e){t={ENFORCE_ACTION:"Every state update must define an `action` string: `this.state.action`",INITIAL_STATE_UNDEFINED:"`this.state` should be initialized in constructor()",INITIAL_STATE_TYPE_ERROR:"`this.state` must be an object.",STATE_KEY_INVALID:"Invalid state key provided.",STATE_UPDATED_TYPE_ERROR:"`this.stateUpdated` must be a function."}[t]||t;if(e)throw new Error(t);this.console.warn(t)}},{key:"_onDomAction",value:function(t,e){null==e&&(e=t.currentTarget.dataset[this.traceName.toLowerCase()].split(":")[0]);var n=this.state.domEventCount+1,e="on".concat(s(e)).concat(s(t.type));this.setState({action:e,domEvent:t,domEventCount:n})}},{key:"_traceAction",value:function(){this.traceEnabled&&this.enforceActions&&this._traceItem("".concat(this.traceName," action"),"".concat(this.state.action," - ").concat(Date.now()/1e3))}},{key:"_traceItem",value:function(e,t){function n(t){return o.console.log("%c".concat(e,": ").concat(t),a)}var r,o=this;return"object"!==_typeof(t)?n(t):(r=JSON.stringify(t)).length<=30?n(r):(this.console.groupCollapsed("%c".concat(e,": ").concat(r.slice(0,30),"..."),a),this.console.log(t),void this.console.groupEnd())}},{key:"_traceState",value:function(){var e=this;this.traceEnabled&&(this.console.groupCollapsed("%c".concat(this.traceName," state:"),o),Object.keys(this.state).forEach(function(t){return e._traceItem(t,e.state[t])}),this.console.groupCollapsed("Stack:"),this.console.trace(),this.console.groupEnd(),this.console.groupEnd())}},{key:"_traceStateDiff",value:function(){var t,e;this.traceEnabled&&(t=this._diff(this.state,this.prevState),e=this._diff(this.prevState,this.state),this.console.groupCollapsed("%c".concat(this.traceName," state DIFF:"),o),this._traceItem("PREV",t),this._traceItem("CURR",e),this.console.groupEnd())}},{key:"_isMobile",get:function(){return i.matches}}]);var e,n,r})(),window.Manager=t,"undefined"!=typeof module&&(module.exports=t))})(),(()=>{var e,r,o,t;window.customElements.get("ad-unit")||(t=window,e=t.Component,r=t.mps,(o=document.createElement("template")).innerHTML="\n    <style>".concat("\n    :host { display: block; }\n    :host([hidden]), .hide { display: none; }\n    :host {\n      overflow: hidden;\n    }\n    a {\n      color: var(--grayDark1, #505257);\n      display: block;\n      font-family: 'Franklin Gothic';\n      font-size: 0.75rem;\n      line-height: 1.33;\n      text-align: center;\n      text-decoration: underline;\n    }\n  ",'</style>\n    <div>\n      <slot name="adInject"></slot>\n      <a\n        class="hide"\n        rel="noopener"\n        target="_blank"\n        data-qa="header:link-ads" >\n          Advertise With Us\n      </a>\n      <slot name="afterContent"></slot>\n    </div>\n  '),t=(()=>{function n(){_classCallCheck(this,n),(t=_callSuper(this,n)).initBool(["adjustheight","showadlink","hidden","noretry"]),t.initSlotted();var t,e=_toConsumableArray(document.querySelectorAll("ad-unit")).indexOf(t);return t.unitId="ad-unit_".concat(e),t.retryCount=0,t}return _inherits(n,e),_createClass(n,[{key:"connectedCallback",value:(t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&RottenTomatoes.context.gptSite){t.next=2;break}return t.abrupt("return");case 2:if(this.unitdisplay||this.unittype){t.next=4;break}return t.abrupt("return");case 4:this.slotted.adInject[0].id=this.unitId,this._registerAdCallback(),this._fetchAd();case 7:case"end":return t.stop()}},t,this)})),function(){return t.apply(this,arguments)})},{key:"template",value:function(){return o}},{key:"_attributeShowadlink",value:function(){var t;this.showadlink&&((t=this.select("a")).classList.remove("hide"),t.href="https://together.nbcuni.com/advertise/?utm_source=rotten_tomatoes&utm_medium=referral&utm_campaign=property_ad_pages&utm_content=header")}},{key:"_fetchAd",value:function(){var t,e=this;null==r._queue&&(r._queue={}),null==(t=r._queue).gptloaded&&(t.gptloaded=[]),r._queue.gptloaded.push(function(){("0"!==r.getResponsiveSet()&&e.unitdisplay.toLowerCase().includes("desktop")||"0"===r.getResponsiveSet()&&e.unitdisplay.toLowerCase().includes("mobile"))&&r.cloneAd("#".concat(e.unitId),e.unittype,e.unittargeting)})}},{key:"_registerAdCallback",value:function(){var t,n=this;null==r._queue&&(r._queue={}),null==(t=r._queue).adrender&&(t.adrender=[]),r._queue.adrender.push(function(t){var e;n.unittype===t._mps._slot&&("1,1"!==String(t.size)||n.noretry?(n.hidden=!1,n.dispatchEvent(new CustomEvent("instantiated",{detail:t})),n.adjustheight&&50<t.size[1]&&(n.parentElement.style.cssText="height: ".concat(t.size[1]+10,"px")),"trendinggraphic"===n.unittype&&(null!=(e=document.querySelector(".trending-bar__social"))&&e.classList.add("hide"),document.querySelectorAll(".trending-bar__link").forEach(function(t){return t.classList.add("trending-link--truncate")})),"interscroller"===n.unittype&&n.dispatchEvent(new CustomEvent("interscrollerinstantiated",{detail:n}))):n._retryFailedAd(t))})}},{key:"_retryFailedAd",value:function(){var t=this;this.retryCount++,2<this.retryCount||setTimeout(function(){t.slotted.adInject[0].innerHTML="",t._fetchAd()},1500)}}],[{key:"observedAttributes",get:function(){return["adjustheight","hidden","noretry","showadlink","unitdisplay","unittype","unittargeting"]}}]);var t})(),window.customElements.get("ad-unit")||window.customElements.define("ad-unit",t),"undefined"!=typeof module&&(module.exports=t))})(),(()=>{var t,e;window.customElements.get("ad-unit-manager")||(t=window.Manager,e=(()=>{function e(){var t;return _classCallCheck(this,e),(t=_callSuper(this,e)).traceName="AdUnitManager",t.enforceActions=!0,t.state={action:"constructor",domEventCount:0,domEvent:{},errors:[]},t}return _inherits(e,t),_createClass(e,[{key:"connectedCallback",value:function(){var t=this;_superPropGet(e,"connectedCallback",this,3)([]),this.dom=_objectSpread({},this.domElements()),this.domActions(),this.attachEvents([{el:document,eventType:"io",fn:function(){return t.setState({action:"onAdUnitInterscrollerinstantiated"})}}])}},{key:"stateUpdated",value:function(){var n,t,r,o,a,i;"onAdUnitInterscrollerinstantiated"===this.state.action&&(n=_slicedToArray(this.dom.heroWrap,1)[0],(t=this.state.domEvent.detail).style.cssText="position: relative; z-index: 5;",o=r=0,a="scrolling down enter",new IntersectionObserver(function(t){t.forEach(function(t){var e=t.boundingClientRect.y,t=t.intersectionRatio;e<r?a=o<t?(.85<=t&&n.classList.add("hide"),"scrolling down enter"):(t<=.25&&"scrolling down leave"===a&&n.classList.remove("hide"),"scrolling down leave"):r<e&&(a=t<o?(t<=.85&&n.classList.remove("hide"),"scrolling up leave"):(.25<=t&&"scrolling up enter"===a&&n.classList.add("hide"),"scrolling up enter")),r=e,o=t})},{threshold:(i=20,Array(i+1).fill(0).map(function(t,e){return e/i||0}))}).observe(t))}}])})(),window.customElements.get("ad-unit-manager")||window.customElements.define("ad-unit-manager",e),"undefined"!=typeof module&&(module.exports=e))})();