/*! For license information please see 1031-2ea1a860b0e50861d71e-1009.js.LICENSE.txt */
"use strict";(self.webpackChunkodysee_com=self.webpackChunkodysee_com||[]).push([[1031],{51635:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(88441),a=r(66598),i=r.n(a),o=r(96284),l=r(44908),c=r(77369),s=r(35080),u=r(71036).__;function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){var t=e.singlePane,r=e.children;return t?r:n.createElement("div",{className:"card__first-pane"},r)},h=function(e){var t=e.isPageTitle,r=e.smallTitle,a=e.children,l=e.accessStatus,d=function(e){return n.createElement(s.Z,{title:u("This is a members-only content")},n.createElement("div",{className:i()("content-access-indicator",{locked:"locked"===e.status,unlocked:"unlocked"===e.status,purchased:"purchased"===e.status})},n.createElement(o.default,{icon:"locked"===e.status?c.LOCK:c.UNLOCK})))};return t?n.createElement("h1",{className:"card__title"},l&&n.createElement(d,{status:l}),n.createElement("font",{dangerouslySetInnerHTML:{__html:function(e){for(var t in null==e||null===(r=e.props)||void 0===r?void 0:r.children){var r,n,a;if("string"==typeof(null==e||null===(n=e.props)||void 0===n?void 0:n.children[t]))return null==e||null===(a=e.props)||void 0===a?void 0:a.children[t]}return e}(a)}})):n.createElement("h2",{className:i()("card__title",{"card__title--small":r})},a)};const p=function(e){var t=e.title,r=e.subtitle,a=e.titleActions,s=e.id,f=e.body,p=e.actions,v=e.icon,y=e.className,g=e.isPageTitle,b=void 0!==g&&g,_=e.isBodyList,E=void 0!==_&&_,w=e.smallTitle,N=void 0!==w&&w,k=e.defaultExpand,L=e.nag,x=e.onClick,S=e.children,C=e.secondPane,O=e.slimHeader,A=e.background,j=e.backgroundImage,I=e.singlePane,P=e.headerActions,T=e.accessStatus,R=e.gridHeader,B=d((0,n.useState)(k),2),F=B[0],U=B[1],M=void 0!==k;return n.createElement("section",{role:x?"button":void 0,className:i()(y,"card",{"card__multi-pane":Boolean(C),"card--background":A}),id:s,onClick:function(e){x&&(x(),e.stopPropagation())}},j&&n.createElement("div",{className:"background",style:{backgroundImage:"url(https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/"+j+")"}}),n.createElement(m,{singlePane:I},(t||r)&&n.createElement("div",{className:i()("card__header--between",{"card__header--slim":O,"card__header--grid":R})},n.createElement("div",{className:i()("card__title-section",{"card__title-section--body-list":E})},v&&n.createElement(o.default,{sectionIcon:!0,icon:v}),n.createElement("div",{className:"card__title-text"},n.createElement(h,{isPageTitle:b,smallTitle:N,accessStatus:T},t),r&&n.createElement("div",{className:i()("card__subtitle",{"card__subtitle--small":N})},r))),(a||M)&&n.createElement("div",{className:"card__title-actions-container"},a&&n.createElement("div",{className:i()("card__title-actions",{"card__title-actions--small":N})},a),M&&n.createElement("div",{className:"card__title-actions"},n.createElement(l.default,{button:"alt","aria-expanded":F,"aria-label":u(F?"Less":"More"),icon:F?c.SUBTRACT:c.ADD,onClick:function(){return U(!F)}}))),P),(!M||M&&F)&&n.createElement(n.Fragment,null,f&&n.createElement("div",{className:i()("card__body",{"card__body--no-title":!t&&!r,"card__body--list":E})},f),p&&n.createElement("div",{className:"card__main-actions"},p),S&&n.createElement("div",{className:"card__main-actions"},S)),L),C&&n.createElement("div",{className:"card__second-pane"},C))}},51031:(e,t,r)=>{r.d(t,{Z:()=>U});var n=r(3658),a=r(71969),i=r(88441),o=r(60732),l=r(44908),c=r(51635),s=r(16062),u=r(53389),d=r(17526),f=r(65549),m=r(16643),h=r(1987),p=r(58210);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),l=new S(a||[]);return n(o,"_invoke",{value:N(e,r,l)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function f(){}function m(){}function h(){}var p={};c(p,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==t&&r.call(b,i)&&(p=b);var _=h.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(n,i,o,l){var c=u(e[n],e,i);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==v(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function N(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return O()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var l=k(o,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=h,n(_,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:m,configurable:!0}),m.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},E(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new w(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(_),c(_,l,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function g(e,t,r,n,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t,r,n,a){var o,l=b(i.useState(void 0),2),c=l[0],s=l[1],u=(0,m.TH)();if(n)o=n;else{var d=new URLSearchParams(u.search);d&&d.get("signature")&&d.get("signature_ts")&&(o={signature:d.get("signature"),signature_ts:d.get("signature_ts")})}return i.useEffect((function(){var i=function(){var t,r=(t=y().mark((function t(){var r;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}if(!(r=(0,p.Tw)(e))||!r.includes(h.Nt.UNLISTED)){t.next=10;break}if(!o){t.next=7;break}return t.abrupt("return",a({channel_id:(0,p._I)(e)||e.claim_id,claim_id:e.claim_id,signature:o.signature,signing_ts:o.signature_ts}).then((function(e){return!e.is_valid})).catch((function(){return!0})));case 7:return t.abrupt("return",!0);case 8:t.next=11;break;case 10:return t.abrupt("return",!1);case 11:t.next=14;break;case 13:return t.abrupt("return",null!==e&&void 0);case 14:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(e){g(i,n,a,o,l,"next",e)}function l(e){g(i,n,a,o,l,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();t||n||r?s(!1):i().then((function(e){return s(e)}))}),[o,e,t,r,n,a]),c}var w=r(71036).__,N=["uri","delayed","Wrapper","ClaimRenderWrapper","claim","hasClaim","isClaimBlackListed","isClaimFiltered","claimIsMine","isUnlisted","isGlobalMod","isAuthenticated","uriAccessKey","geoRestriction","gblAvailable","preferEmbed","verifyClaimSignature","doResolveUri","doBeginPublish","doOpenModal"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x={GBL_NA_LINE_1:"It looks like there was a problem with the network connection or one of your extensions is blocking the request.",GBL_NA_LINE_2:"Please check your internet connection and try again. If the problem persists, email help@odysee.com."};const S=function(e){return function(t){var r,n=t.uri,a=t.delayed,m=t.Wrapper,h=void 0===m?i.Fragment:m,p=t.ClaimRenderWrapper,v=void 0===p?i.Fragment:p,y=t.claim,g=t.hasClaim,b=t.isClaimBlackListed,_=t.isClaimFiltered,S=t.claimIsMine,C=(t.isUnlisted,t.isGlobalMod),O=t.isAuthenticated,A=t.uriAccessKey,j=t.geoRestriction,I=t.gblAvailable,P=t.preferEmbed,T=t.verifyClaimSignature,R=t.doResolveUri,B=t.doBeginPublish,F=t.doOpenModal,U=L(t,N),M=(0,u.parseURI)(n),G=M.streamName,Z=M.isChannel,D=!S&&(null!==j||b||_&&!P),K=void 0===y||y&&(null===(r=y.value)||void 0===r?void 0:r.fee)&&void 0===y.purchase_receipt&&O,H=E(y,S,C,A,T),W=i.useMemo((function(){return function(e){var t=e.text;return i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(o.Z,{delayed:a,text:t})))}}),[a]),Y=i.useCallback((function(){return R(n,!1,!0,O?{include_is_my_output:!0,include_purchase_receipt:!0}:{})}),[R,O,n]);if(i.useEffect((function(){K&&Y()}),[K,Y]),!g)return void 0===g?i.createElement(W,{text:w("Resolving...")}):i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(s.Z,{title:w(Z?"Channel Not Found":"No Content Found"),subtitle:i.createElement("div",{className:"section__actions"},!Z&&i.createElement(l.default,{button:"primary",label:w("Publish Something"),onClick:function(){return B(f.HB,G)}}),!Z&&i.createElement(l.default,{button:"secondary",label:w("Repost Something"),onClick:function(){return F(d.QA,{streamName:G})}}))})));if(D&&void 0===j)return I?i.createElement(W,{text:w("Resolving...")}):i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(s.Z,{title:w("Oops! Something went wrong."),subtitle:i.createElement(i.Fragment,null,i.createElement("p",null,w(x.GBL_NA_LINE_1)),i.createElement("p",null,w(x.GBL_NA_LINE_2))),type:"sad",alwaysShow:!0})));if(!1!==H)return void 0===H?i.createElement(W,{text:w("Resolving...")}):i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(s.Z,{title:w(Z?"Channel unavailable":"Content unavailable"),subtitle:w("Reach out to the creator to obtain the full URL for access."),type:"sad",alwaysShow:!0})));if(D&&Z&&j)return i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(s.Z,{title:w(Z?"Channel unavailable":"Content unavailable"),subtitle:j.message?w(j.message):"",type:"sad",alwaysShow:!0})));if(D&&!Z){if(j)return i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(s.Z,{title:w(Z?"Channel unavailable":"Content unavailable"),subtitle:j.message?w(j.message):"",type:"sad",alwaysShow:!0})));if(b)return i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(c.Z,{title:n,subtitle:w("In response to a complaint we received under the US Digital Millennium Copyright Act, we have blocked access to this content from our applications. Content may also be blocked due to DMCA Red Flag rules which are obvious copyright violations we come across, are discussed in public channels, or reported to us."),actions:i.createElement("div",{className:"section__actions"},i.createElement(l.default,{button:"link",href:"https://help.odysee.tv/copyright/",label:w("Read More")}))})));if(_&&!P)return i.createElement(h,null,i.createElement("div",{className:"main--empty"},i.createElement(c.Z,{title:n,subtitle:w("This content violates the terms and conditions of Odysee and has been filtered.")})))}return i.createElement(i.Suspense,{fallback:i.createElement(W,{text:w("Loading...")})},i.createElement(v,null,i.createElement(e,k({uri:n},U))))}};var C=r(15244),O=r(72408),A=r(7920),j=r(31391),I=r(9767),P=r(52705),T=r(18264),R=r(15927),B=function(e,t){var r,n=t.uri,i=(0,A.B0y)(e,n),o=(0,A.YU7)(n,h.K0)(e);return{uri:n,claim:i,hasClaim:(0,A.xPQ)(e,n),isClaimBlackListed:(0,C.selectIsClaimBlackListedForUri)(e,n),isClaimFiltered:(0,C.selectIsClaimFilteredForUri)(e,n),claimIsMine:(0,A.pDP)(e,i),isUnlisted:(0,A.iWk)(e,n),isAuthenticated:(0,I.ge)(e),isGlobalMod:Boolean(null===(r=(0,I.dy)(e))||void 0===r?void 0:r.global_mod),uriAccessKey:(0,j.BJ)(e).uriAccessKeys[n],geoRestriction:(0,A.onN)(e,n),gblAvailable:(0,O.d9)(e),preferEmbed:o,verifyClaimSignature:a.Z.verify_claim_signature}},F={doResolveUri:P.nt,doBeginPublish:T.T2,doOpenModal:R.DG};const U=function(e){return(0,n.$j)(B,F)(S(e))}}}]);
//# sourceMappingURL=1031-2ea1a860b0e50861d71e-1009.js.map