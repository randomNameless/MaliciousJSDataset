"use strict";var bodlEvents=(()=>{var ne=Object.create;var E=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var ae=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),I=(t,e)=>{for(var n in e)E(t,n,{get:e[n],enumerable:!0})},N=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of oe(e))!se.call(t,o)&&o!==n&&E(t,o,{get:()=>e[o],enumerable:!(r=re(e,o))||r.enumerable});return t};var de=(t,e,n)=>(n=t!=null?ne(ie(t)):{},N(e||!t||!t.__esModule?E(n,"default",{value:t,enumerable:!0}):n,t)),le=t=>N(E({},"__esModule",{value:!0}),t);var G=ae((we,L)=>{"use strict";var u=typeof Reflect=="object"?Reflect:null,S=u&&typeof u.apply=="function"?u.apply:function(e,n,r){return Function.prototype.apply.call(e,n,r)},p;u&&typeof u.ownKeys=="function"?p=u.ownKeys:Object.getOwnPropertySymbols?p=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:p=function(e){return Object.getOwnPropertyNames(e)};function ue(t){console&&console.warn&&console.warn(t)}var F=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}L.exports=s;L.exports.once=Ee;s.EventEmitter=s;s.prototype._events=void 0;s.prototype._eventsCount=0;s.prototype._maxListeners=void 0;var D=10;function m(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return D},set:function(t){if(typeof t!="number"||t<0||F(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");D=t}});s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};s.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||F(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function K(t){return t._maxListeners===void 0?s.defaultMaxListeners:t._maxListeners}s.prototype.getMaxListeners=function(){return K(this)};s.prototype.emit=function(e){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var o=e==="error",a=this._events;if(a!==void 0)o=o&&a.error===void 0;else if(!o)return!1;if(o){var i;if(n.length>0&&(i=n[0]),i instanceof Error)throw i;var l=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw l.context=i,l}var c=a[e];if(c===void 0)return!1;if(typeof c=="function")S(c,this,n);else for(var H=c.length,te=q(c,H),r=0;r<H;++r)S(te[r],this,n);return!0};function $(t,e,n,r){var o,a,i;if(m(n),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),a=t._events),i=a[e]),i===void 0)i=a[e]=n,++t._eventsCount;else if(typeof i=="function"?i=a[e]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),o=K(t),o>0&&i.length>o&&!i.warned){i.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=i.length,ue(l)}return t}s.prototype.addListener=function(e,n){return $(this,e,n,!1)};s.prototype.on=s.prototype.addListener;s.prototype.prependListener=function(e,n){return $(this,e,n,!0)};function ve(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function U(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=ve.bind(r);return o.listener=n,r.wrapFn=o,o}s.prototype.once=function(e,n){return m(n),this.on(e,U(this,e,n)),this};s.prototype.prependOnceListener=function(e,n){return m(n),this.prependListener(e,U(this,e,n)),this};s.prototype.removeListener=function(e,n){var r,o,a,i,l;if(m(n),o=this._events,o===void 0)return this;if(r=o[e],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,r.listener||n));else if(typeof r!="function"){for(a=-1,i=r.length-1;i>=0;i--)if(r[i]===n||r[i].listener===n){l=r[i].listener,a=i;break}if(a<0)return this;a===0?r.shift():fe(r,a),r.length===1&&(o[e]=r[0]),o.removeListener!==void 0&&this.emit("removeListener",e,l||n)}return this};s.prototype.off=s.prototype.removeListener;s.prototype.removeAllListeners=function(e){var n,r,o;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[e]),this;if(arguments.length===0){var a=Object.keys(r),i;for(o=0;o<a.length;++o)i=a[o],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(o=n.length-1;o>=0;o--)this.removeListener(e,n[o]);return this};function W(t,e,n){var r=t._events;if(r===void 0)return[];var o=r[e];return o===void 0?[]:typeof o=="function"?n?[o.listener||o]:[o]:n?ce(o):q(o,o.length)}s.prototype.listeners=function(e){return W(this,e,!0)};s.prototype.rawListeners=function(e){return W(this,e,!1)};s.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):V.call(t,e)};s.prototype.listenerCount=V;function V(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?p(this._events):[]};function q(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function fe(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function ce(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function Ee(t,e){return new Promise(function(n,r){function o(i){t.removeListener(e,a),r(i)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",o),n([].slice.call(arguments))}z(t,e,a,{once:!0}),e!=="error"&&pe(t,o,{once:!0})})}function pe(t,e,n){typeof t.on=="function"&&z(t,"error",e,n)}function z(t,e,n,r){if(typeof t.on=="function")r.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function o(a){r.once&&t.removeEventListener(e,o),n(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}});var ge={};I(ge,{AddCartItemEvent:()=>k,CheckoutBeginEvent:()=>M,OrderPurchasedEvent:()=>j,RemoveCartItemEvent:()=>O,banner:()=>Z,bodl:()=>P,cart:()=>Q,checkout:()=>X,consent:()=>ee,default:()=>be,product:()=>Y});var J=de(G());var P={};I(P,{addBodlEvent:()=>A,getBodl:()=>R,isBodlEnabled:()=>h});var h=()=>window&&typeof window.bodl<"u",R=()=>h()?window.bodl:null,A=(t,e)=>{window.bodlEvents&&(window.bodlEvents.events||(window.bodlEvents.events=[]),window.bodlEvents.events.push({event:t,...e}))};var y=class{constructor(e){this.eventEmitter=e}async run(){await this.wait(),this.process()}wait(){return new Promise(e=>{window.addEventListener("load",()=>{e()},!1)})}process(){this.getEvents().forEach(n=>{let r=Object.keys(n)[0],o=n[r];this.eventEmitter.emit(r,o)})}getEvents(){if(!h())return[];let e=R();return e!=null&&e.events.length?e.events:[]}};var T=class{isEnabled(){var e;return Boolean(window.bodlEvents)&&((e=window.bodlEvents)==null?void 0:e.debug)===!0}debug(e,...n){this.isEnabled()&&console.debug(e,n)}},me=new T,b=me;var d=class{constructor(e,n){this.eventEmitter=e;this.historyManager=n}emit(e,n){var o;b.debug(`Emit event ${e} with data: `,n);let r=this.eventEmitter.emit(e,n);return r&&this.updateBodl(e.toString(),n),(o=this.historyManager)==null||o.addEvent(e,n),r}on(e,n){if(this.eventEmitter.on(e,n),b.debug(`Attached callback ${n.toString()} on: ${e}`),this.historyManager){let r=this.historyManager.getHistory(e);r.length>0&&this.replayEvents(r,n)}return this}off(e,n){return this.eventEmitter.off(e,n),b.debug(`Detached callback ${n.toString()} on: ${e}`),this}replayEvents(e,n){e.forEach(r=>{n(r.payload)})}updateBodl(e,n){A(e,n)}};var g=class extends d{emitConsentLoadedEvent(e){return this.emit("bodl_v1_consent_loaded",e)}emitConsentUpdatedEvent(e){return this.emit("bodl_v1_consent_updated",e)}loaded(e){return this.on("bodl_v1_consent_loaded",e)}updated(e){return this.on("bodl_v1_consent_updated",e)}};var _=class extends d{viewed(e){return this.on("bodl_v1_view_banner",e)}};var k=(e=>(e.CREATE="bodl_v1_cart_product_added",e))(k||{}),O=(e=>(e.CREATE="bodl_v1_cart_product_removed",e))(O||{});var w=class extends d{addItem(e){return this.on("bodl_v1_cart_product_added",e)}removeItem(e){return this.on("bodl_v1_cart_product_removed",e)}viewed(e){return this.on("bodl_v1_cart_viewed",e)}};var M=(e=>(e.CREATE="bodl_v1_begin_checkout",e))(M||{}),j=(e=>(e.CREATE="bodl_v1_order_purchased",e))(j||{});var C=class extends d{emitCheckoutBeginEvent(e){return this.emit("bodl_v1_begin_checkout",e)}emitOrderPurchasedEvent(e){return this.emit("bodl_v1_order_purchased",e)}emitShippingDetailsProvidedEvent(e){return this.emit("bodl_v1_shipping_information_added",e)}emitPaymentDetailsProvidedEvent(e){return this.emit("bodl_v1_payment_information_added",e)}shippingDetailsProvided(e){return this.on("bodl_v1_shipping_information_added",e)}paymentDetailsProvided(e){return this.on("bodl_v1_payment_information_added",e)}checkoutBegin(e){return this.on("bodl_v1_begin_checkout",e)}orderPurchased(e){return this.on("bodl_v1_order_purchased",e)}};var x=class extends d{pageViewed(e){return this.on("bodl_v1_product_page_viewed",e)}categoryViewed(e){return this.on("bodl_v1_product_category_viewed",e)}searchPerformed(e){return this.on("bodl_v1_keyword_search",e)}};var B=class{constructor(){this.events=[]}getHistory(e){return this.events.filter(n=>n.name===e)}getFullHistory(){return this.events}addEvent(e,n){let r={name:e,payload:n};this.events.push(r)}};var v=new B,f=new J.EventEmitter,he=new d(f,v),Q=new w(f,v),X=new C(f,v),Y=new x(f,v),Z=new _(f,v),ee=new g(f,v),ye=new y(he);ye.run();var be={cart:Q,checkout:X,product:Y,banner:Z,consent:ee,version:"161960838244645165d55f7b88f7f6fb9fb26557"};return le(ge);})();
//# sourceMappingURL=index.js.map