/*! For license information please see 2343.51679adc8fcc8118f8ed.js.LICENSE.txt */
!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="73eb8186-86ef-44c3-8cd0-3be9a93490d0",t._sentryDebugIdIdentifier="sentry-dbid-73eb8186-86ef-44c3-8cd0-3be9a93490d0")}catch(t){}}();var _sentryModuleMetadataGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack],{"_sentryBundlerPluginAppKey:gemini-web":!0});var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6.77.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2343],{75617:function(t,e,n){t.exports=n(58303)},58303:function(t,e,n){var r=n(93961);e.operation=function(t){var n=e.timeouts(t);return new r(n,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},e.timeouts=function(t){if(t instanceof Array)return[].concat(t);var e={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var n in t)e[n]=t[n];if(e.minTimeout>e.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var r=[],i=0;i<e.retries;i++)r.push(this.createTimeout(i,e));return t&&t.forever&&!r.length&&r.push(this.createTimeout(i,e)),r.sort((function(t,e){return t-e})),r},e.createTimeout=function(t,e){var n=e.randomize?Math.random()+1:1,r=Math.round(n*Math.max(e.minTimeout,1)*Math.pow(e.factor,t));return Math.min(r,e.maxTimeout)},e.wrap=function(t,n,r){if(n instanceof Array&&(r=n,n=null),!r)for(var i in r=[],t)"function"==typeof t[i]&&r.push(i);for(var o=0;o<r.length;o++){var s=r[o],a=t[s];t[s]=function(r){var i=e.operation(n),o=Array.prototype.slice.call(arguments,1),s=o.pop();o.push((function(t){i.retry(t)||(t&&(arguments[0]=i.mainError()),s.apply(this,arguments))})),i.attempt((function(){r.apply(t,o)}))}.bind(t,a),t[s].options=n}}},93961:function(t){function e(t,e){"boolean"==typeof e&&(e={forever:e}),this._originalTimeouts=JSON.parse(JSON.stringify(t)),this._timeouts=t,this._options=e||{},this._maxRetryTime=e&&e.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}t.exports=e,e.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},e.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},e.prototype.retry=function(t){if(this._timeout&&clearTimeout(this._timeout),!t)return!1;var e=(new Date).getTime();if(t&&e-this._operationStart>=this._maxRetryTime)return this._errors.push(t),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(t);var n=this._timeouts.shift();if(void 0===n){if(!this._cachedTimeouts)return!1;this._errors.splice(0,this._errors.length-1),n=this._cachedTimeouts.slice(-1)}var r=this;return this._timer=setTimeout((function(){r._attempts++,r._operationTimeoutCb&&(r._timeout=setTimeout((function(){r._operationTimeoutCb(r._attempts)}),r._operationTimeout),r._options.unref&&r._timeout.unref()),r._fn(r._attempts)}),n),this._options.unref&&this._timer.unref(),!0},e.prototype.attempt=function(t,e){this._fn=t,e&&(e.timeout&&(this._operationTimeout=e.timeout),e.cb&&(this._operationTimeoutCb=e.cb));var n=this;this._operationTimeoutCb&&(this._timeout=setTimeout((function(){n._operationTimeoutCb()}),n._operationTimeout)),this._operationStart=(new Date).getTime(),this._fn(this._attempts)},e.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated"),this.attempt(t)},e.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated"),this.attempt(t)},e.prototype.start=e.prototype.try,e.prototype.errors=function(){return this._errors},e.prototype.attempts=function(){return this._attempts},e.prototype.mainError=function(){if(0===this._errors.length)return null;for(var t={},e=null,n=0,r=0;r<this._errors.length;r++){var i=this._errors[r],o=i.message,s=(t[o]||0)+1;t[o]=s,s>=n&&(e=i,n=s)}return e}},7463:function(t,e){"use strict";function n(t,e){var n=t.length;t.push(e);t:for(;0<n;){var r=n-1>>>1,i=t[r];if(!(0<o(i,e)))break t;t[r]=e,t[n]=i,n=r}}function r(t){return 0===t.length?null:t[0]}function i(t){if(0===t.length)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;t:for(var r=0,i=t.length,s=i>>>1;r<s;){var a=2*(r+1)-1,u=t[a],c=a+1,l=t[c];if(0>o(u,n))c<i&&0>o(l,u)?(t[r]=l,t[c]=n,r=c):(t[r]=u,t[a]=n,r=a);else{if(!(c<i&&0>o(l,n)))break t;t[r]=l,t[c]=n,r=c}}}return e}function o(t,e){var n=t.sortIndex-e.sortIndex;return 0!==n?n:t.id-e.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var c=[],l=[],d=1,f=null,p=3,m=!1,h=!1,v=!1,y="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,_="undefined"!=typeof setImmediate?setImmediate:null;function b(t){for(var e=r(l);null!==e;){if(null===e.callback)i(l);else{if(!(e.startTime<=t))break;i(l),e.sortIndex=e.expirationTime,n(c,e)}e=r(l)}}function T(t){if(v=!1,b(t),!h)if(null!==r(c))h=!0,L(k);else{var e=r(l);null!==e&&P(T,e.startTime-t)}}function k(t,n){h=!1,v&&(v=!1,g(C),C=-1),m=!0;var o=p;try{for(b(n),f=r(c);null!==f&&(!(f.expirationTime>n)||t&&!A());){var s=f.callback;if("function"==typeof s){f.callback=null,p=f.priorityLevel;var a=s(f.expirationTime<=n);n=e.unstable_now(),"function"==typeof a?f.callback=a:f===r(c)&&i(c),b(n)}else i(c);f=r(c)}if(null!==f)var u=!0;else{var d=r(l);null!==d&&P(T,d.startTime-n),u=!1}return u}finally{f=null,p=o,m=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var w,E=!1,S=null,C=-1,M=5,j=-1;function A(){return!(e.unstable_now()-j<M)}function x(){if(null!==S){var t=e.unstable_now();j=t;var n=!0;try{n=S(!0,t)}finally{n?w():(E=!1,S=null)}}else E=!1}if("function"==typeof _)w=function(){_(x)};else if("undefined"!=typeof MessageChannel){var I=new MessageChannel,D=I.port2;I.port1.onmessage=x,w=function(){D.postMessage(null)}}else w=function(){y(x,0)};function L(t){S=t,E||(E=!0,w())}function P(t,n){C=y((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,L(k))},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<t?Math.floor(1e3/t):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(t){switch(p){case 1:case 2:case 3:var e=3;break;default:e=p}var n=p;p=e;try{return t()}finally{p=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=p;p=t;try{return e()}finally{p=n}},e.unstable_scheduleCallback=function(t,i,o){var s=e.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?s+o:s,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return t={id:d++,callback:i,priorityLevel:t,startTime:o,expirationTime:a=o+a,sortIndex:-1},o>s?(t.sortIndex=o,n(l,t),null===r(c)&&t===r(l)&&(v?(g(C),C=-1):v=!0,P(T,o-s))):(t.sortIndex=a,n(c,t),h||m||(h=!0,L(k))),t},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(t){var e=p;return function(){var n=p;p=e;try{return t.apply(this,arguments)}finally{p=n}}}},69982:function(t,e,n){"use strict";t.exports=n(7463)},3:function(t,e,n){"use strict";n.d(e,{T:function(){return r}});const r=!1},59532:function(t,e,n){"use strict";n.d(e,{qd:function(){return u},y7:function(){return c}});var r=n(36064),i=n(77164),o=n(3),s=n(69428);const a={};function u(t){const e=a[t];if(e)return e;let n=s.j[t];if((0,r.a3)(n))return a[t]=n.bind(s.j);const u=s.j.document;if(u&&"function"==typeof u.createElement)try{const e=u.createElement("iframe");e.hidden=!0,u.head.appendChild(e);const r=e.contentWindow;r&&r[t]&&(n=r[t]),u.head.removeChild(e)}catch(e){o.T&&i.vF.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,e)}return n?a[t]=n.bind(s.j):n}function c(t){a[t]=void 0}},45795:function(t,e,n){"use strict";n.d(e,{i:function(){return d}});var r=n(6609),i=n(93187),o=n(8320),s=n(69428);const a=1e3;let u,c,l;function d(t){(0,r.s5)("dom",t),(0,r.AS)("dom",f)}function f(){if(!s.j.document)return;const t=r.aj.bind(null,"dom"),e=p(t,!0);s.j.document.addEventListener("click",e,!1),s.j.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach((e=>{const n=s.j[e]&&s.j[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&((0,i.GS)(n,"addEventListener",(function(e){return function(n,r,i){if("click"===n||"keypress"==n)try{const r=this,o=r.__sentry_instrumentation_handlers__=r.__sentry_instrumentation_handlers__||{},s=o[n]=o[n]||{refCount:0};if(!s.handler){const r=p(t);s.handler=r,e.call(this,n,r,i)}s.refCount++}catch(t){}return e.call(this,n,r,i)}})),(0,i.GS)(n,"removeEventListener",(function(t){return function(e,n,r){if("click"===e||"keypress"==e)try{const n=this,i=n.__sentry_instrumentation_handlers__||{},o=i[e];o&&(o.refCount--,o.refCount<=0&&(t.call(this,e,o.handler,r),o.handler=void 0,delete i[e]),0===Object.keys(i).length&&delete n.__sentry_instrumentation_handlers__)}catch(t){}return t.call(this,e,n,r)}})))}))}function p(t,e=!1){return n=>{if(!n||n._sentryCaptured)return;const r=function(t){try{return t.target}catch(t){return null}}(n);if(function(t,e){return"keypress"===t&&(!e||!e.tagName||"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&!e.isContentEditable)}(n.type,r))return;(0,i.my)(n,"_sentryCaptured",!0),r&&!r._sentryId&&(0,i.my)(r,"_sentryId",(0,o.eJ)());const d="keypress"===n.type?"input":n.type;(function(t){if(t.type!==c)return!1;try{if(!t.target||t.target._sentryId!==l)return!1}catch(t){}return!0})(n)||(t({event:n,name:d,global:e}),c=n.type,l=r?r._sentryId:void 0),clearTimeout(u),u=s.j.setTimeout((()=>{l=void 0,c=void 0}),a)}}},11375:function(t,e,n){"use strict";n.d(e,{_:function(){return u}});var r=n(6609),i=n(525),o=n(93187),s=n(69428);let a;function u(t){const e="history";(0,r.s5)(e,t),(0,r.AS)(e,c)}function c(){if(!(0,i.N)())return;const t=s.j.onpopstate;function e(t){return function(...e){const n=e.length>2?e[2]:void 0;if(n){const t=a,e=String(n);a=e;const i={from:t,to:e};(0,r.aj)("history",i)}return t.apply(this,e)}}s.j.onpopstate=function(...e){const n=s.j.location.href,i=a;a=n;const o={from:i,to:n};if((0,r.aj)("history",o),t)try{return t.apply(this,e)}catch(t){}},(0,o.GS)(s.j.history,"pushState",e),(0,o.GS)(s.j.history,"replaceState",e)}},40217:function(t,e,n){"use strict";n.d(e,{Er:function(){return a},Mn:function(){return u}});var r=n(6609),i=n(3673),o=n(85616),s=n(69428);const a="__sentry_xhr_v3__";function u(t){(0,r.s5)("xhr",t),(0,r.AS)("xhr",c)}function c(){if(!s.j.XMLHttpRequest)return;const t=XMLHttpRequest.prototype;t.open=new Proxy(t.open,{apply(t,e,n){const s=1e3*(0,i.zf)(),u=(0,o.Kg)(n[0])?n[0].toUpperCase():void 0,c=function(t){if((0,o.Kg)(t))return t;try{return t.toString()}catch(t){}}(n[1]);if(!u||!c)return t.apply(e,n);e[a]={method:u,url:c,request_headers:{}},"POST"===u&&c.match(/sentry_key/)&&(e.__sentry_own_request__=!0);const l=()=>{const t=e[a];if(t&&4===e.readyState){try{t.status_code=e.status}catch(t){}const n={endTimestamp:1e3*(0,i.zf)(),startTimestamp:s,xhr:e};(0,r.aj)("xhr",n)}};return"onreadystatechange"in e&&"function"==typeof e.onreadystatechange?e.onreadystatechange=new Proxy(e.onreadystatechange,{apply(t,e,n){return l(),t.apply(e,n)}}):e.addEventListener("readystatechange",l),e.setRequestHeader=new Proxy(e.setRequestHeader,{apply(t,e,n){const[r,i]=n,s=e[a];return s&&(0,o.Kg)(r)&&(0,o.Kg)(i)&&(s.request_headers[r.toLowerCase()]=i),t.apply(e,n)}}),t.apply(e,n)}}),t.send=new Proxy(t.send,{apply(t,e,n){const o=e[a];if(!o)return t.apply(e,n);void 0!==n[0]&&(o.body=n[0]);const s={startTimestamp:1e3*(0,i.zf)(),xhr:e};return(0,r.aj)("xhr",s),t.apply(e,n)}})}},986:function(t,e,n){"use strict";n.d(e,{DI:function(){return C},QU:function(){return M},U$:function(){return S},bk:function(){return w},c8:function(){return E}}),n(9920),n(98992),n(3949);var r=n(3673),i=n(84365),o=n(20213),s=n(53758),a=n(77164),u=n(73803),c=n(6167),l=n(3),d=n(69428),f=n(12039),p=n(55766),m=n(21034),h=n(18304),v=n(26170),y=n(17432);const g=2147483647;let _,b,T=0,k={};function w({recordClsStandaloneSpans:t}){const e=(0,m.D)();if(e&&r.k3){e.mark&&d.j.performance.mark("sentry-tracing-init");const n=(0,p.T5)((({metric:t})=>{const e=t.entries[t.entries.length-1];if(!e)return;const n=(0,m.rv)(r.k3),i=(0,m.rv)(e.startTime);l.T&&a.vF.log("[Measurements] Adding FID"),k.fid={value:t.value,unit:"millisecond"},k["mark.fid"]={value:n+i,unit:"second"}})),i=(0,p.Pt)((({metric:t})=>{const e=t.entries[t.entries.length-1];e&&(l.T&&a.vF.log("[Measurements] Adding LCP"),k.lcp={value:t.value,unit:"millisecond"},_=e)}),!0),o=(0,p.YG)((({metric:t})=>{t.entries[t.entries.length-1]&&(l.T&&a.vF.log("[Measurements] Adding TTFB"),k.ttfb={value:t.value,unit:"millisecond"})})),s=t?(0,f.D)():(0,p.a9)((({metric:t})=>{const e=t.entries[t.entries.length-1];e&&(l.T&&a.vF.log(`[Measurements] Adding CLS ${t.value}`),k.cls={value:t.value,unit:""},b=e)}),!0);return()=>{n(),i(),o(),s&&s()}}return()=>{}}function E(){(0,p.wv)("longtask",(({entries:t})=>{const e=(0,i.Bk)();if(!e)return;const{op:n,start_timestamp:s}=(0,i.et)(e);for(const i of t){const t=(0,m.rv)(r.k3+i.startTime),a=(0,m.rv)(i.duration);"navigation"===n&&s&&t<s||(0,m.Tn)(e,t,t+a,{name:"Main UI thread blocked",op:"ui.long-task",attributes:{[o.JD]:"auto.ui.browser.metrics"}})}}))}function S(){new PerformanceObserver((t=>{const e=(0,i.Bk)();if(e)for(const n of t.getEntries()){if(!n.scripts[0])continue;const t=(0,m.rv)(r.k3+n.startTime),{start_timestamp:s,op:a}=(0,i.et)(e);if("navigation"===a&&s&&t<s)continue;const u=(0,m.rv)(n.duration),c={[o.JD]:"auto.ui.browser.metrics"},l=n.scripts[0],{invoker:d,invokerType:f,sourceURL:p,sourceFunctionName:h,sourceCharPosition:v}=l;c["browser.script.invoker"]=d,c["browser.script.invoker_type"]=f,p&&(c["code.filepath"]=p),h&&(c["code.function"]=h),-1!==v&&(c["browser.script.source_char_position"]=v),(0,m.Tn)(e,t,t+u,{name:"Main UI thread blocked",op:"ui.long-animation-frame",attributes:c})}})).observe({type:"long-animation-frame",buffered:!0})}function C(){(0,p.wv)("event",(({entries:t})=>{const e=(0,i.Bk)();if(e)for(const n of t)if("click"===n.name){const t=(0,m.rv)(r.k3+n.startTime),i=(0,m.rv)(n.duration),a={name:(0,s.Hd)(n.target),op:`ui.interaction.${n.name}`,startTime:t,attributes:{[o.JD]:"auto.ui.browser.metrics"}},u=(0,s.xE)(n.target);u&&(a.attributes["ui.component_name"]=u),(0,m.Tn)(e,t,t+i,a)}}))}function M(t,e){const n=(0,m.D)();if(!n||!d.j.performance.getEntries||!r.k3)return;l.T&&a.vF.log("[Tracing] Adding & adjusting spans using Performance API");const f=(0,m.rv)(r.k3),p=n.getEntries(),{op:g,start_timestamp:w}=(0,i.et)(t);if(p.slice(T).forEach((e=>{const n=(0,m.rv)(e.startTime),r=(0,m.rv)(Math.max(0,e.duration));if(!("navigation"===g&&w&&f+n<w))switch(e.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((r=>{j(t,e,r,n)})),j(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),j(t,e,"fetch",n,"cache","domainLookupStart"),j(t,e,"domainLookup",n,"DNS"),function(t,e,n){const r=n+(0,m.rv)(e.requestStart),i=n+(0,m.rv)(e.responseEnd),s=n+(0,m.rv)(e.responseStart);e.responseEnd&&((0,m.Tn)(t,r,i,{op:"browser.request",name:e.name,attributes:{[o.JD]:"auto.ui.browser.metrics"}}),(0,m.Tn)(t,s,i,{op:"browser.response",name:e.name,attributes:{[o.JD]:"auto.ui.browser.metrics"}}))}(t,e,n)}(t,e,f);break;case"mark":case"paint":case"measure":{!function(t,e,n,r,i){const s=(0,v.z)(),a=(0,m.rv)(s?s.requestStart:0),u=i+Math.max(n,a),c=i+n,l=c+r,d={[o.JD]:"auto.resource.browser.metrics"};u!==c&&(d["sentry.browser.measure_happened_before_request"]=!0,d["sentry.browser.measure_start_time"]=u),(0,m.Tn)(t,u,l,{name:e.name,op:e.entryType,attributes:d})}(t,e,n,r,f);const i=(0,y.N)(),s=e.startTime<i.firstHiddenTime;"first-paint"===e.name&&s&&(l.T&&a.vF.log("[Measurements] Adding FP"),k.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&s&&(l.T&&a.vF.log("[Measurements] Adding FCP"),k.fcp={value:e.startTime,unit:"millisecond"});break}case"resource":!function(t,e,n,r,i,s){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return;const a=(0,c.Dl)(n),u={[o.JD]:"auto.resource.browser.metrics"};A(u,e,"transferSize","http.response_transfer_size"),A(u,e,"encodedBodySize","http.response_content_length"),A(u,e,"decodedBodySize","http.decoded_response_content_length"),null!=e.deliveryType&&(u["http.response_delivery_type"]=e.deliveryType),"renderBlockingStatus"in e&&(u["resource.render_blocking_status"]=e.renderBlockingStatus),a.protocol&&(u["url.scheme"]=a.protocol.split(":").pop()),a.host&&(u["server.address"]=a.host),u["url.same_origin"]=n.includes(d.j.location.origin);const l=s+r,f=l+i;(0,m.Tn)(t,l,f,{name:n.replace(d.j.location.origin,""),op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",attributes:u})}(t,e,e.name,n,r,f)}})),T=Math.max(p.length-1,0),function(t){const e=d.j.navigator;if(!e)return;const n=e.connection;n&&(n.effectiveType&&t.setAttribute("effectiveConnectionType",n.effectiveType),n.type&&t.setAttribute("connectionType",n.type),(0,m.Kk)(n.rtt)&&(k["connection.rtt"]={value:n.rtt,unit:"millisecond"})),(0,m.Kk)(e.deviceMemory)&&t.setAttribute("deviceMemory",`${e.deviceMemory} GB`),(0,m.Kk)(e.hardwareConcurrency)&&t.setAttribute("hardwareConcurrency",String(e.hardwareConcurrency))}(t),"pageload"===g){!function(t){const e=(0,v.z)();if(!e)return;const{responseStart:n,requestStart:r}=e;r<=n&&(l.T&&a.vF.log("[Measurements] Adding TTFB Request Time"),t["ttfb.requestTime"]={value:n-r,unit:"millisecond"})}(k);const n=k["mark.fid"];n&&k.fid&&((0,m.Tn)(t,n.value,n.value+(0,m.rv)(k.fid.value),{name:"first input delay",op:"ui.action",attributes:{[o.JD]:"auto.ui.browser.metrics"}}),delete k["mark.fid"]),"fcp"in k&&e.recordClsOnPageloadSpan||delete k.cls,Object.entries(k).forEach((([t,e])=>{(0,u.X)(t,e.value,e.unit)})),t.setAttribute("performance.timeOrigin",f),t.setAttribute("performance.activationStart",(0,h.b)()),function(t){_&&(l.T&&a.vF.log("[Measurements] Adding LCP Data"),_.element&&t.setAttribute("lcp.element",(0,s.Hd)(_.element)),_.id&&t.setAttribute("lcp.id",_.id),_.url&&t.setAttribute("lcp.url",_.url.trim().slice(0,200)),null!=_.loadTime&&t.setAttribute("lcp.loadTime",_.loadTime),null!=_.renderTime&&t.setAttribute("lcp.renderTime",_.renderTime),t.setAttribute("lcp.size",_.size)),b&&b.sources&&(l.T&&a.vF.log("[Measurements] Adding CLS Data"),b.sources.forEach(((e,n)=>t.setAttribute(`cls.source.${n+1}`,(0,s.Hd)(e.node)))))}(t)}_=void 0,b=void 0,k={}}function j(t,e,n,r,i,s){const a=s?e[s]:e[`${n}End`],u=e[`${n}Start`];u&&a&&(0,m.Tn)(t,r+(0,m.rv)(u),r+(0,m.rv)(a),{op:`browser.${i||n}`,name:e.name,attributes:{[o.JD]:"auto.ui.browser.metrics"}})}function A(t,e,n,r){const i=e[n];null!=i&&i<g&&(t[r]=i)}},12039:function(t,e,n){"use strict";n.d(e,{D:function(){return h}});var r=n(41501),i=n(69222),o=n(84365),s=n(77164),a=n(3673),u=n(53758),c=n(93187),l=n(20213),d=n(3),f=n(55766),p=n(21034),m=n(73973);function h(){let t,e,n=0;if(!function(){try{return(0,r.z)([PerformanceObserver,"access",t=>t.supportedEntryTypes,"optionalAccess",t=>t.includes,"call",t=>t("layout-shift")])}catch(t){return!1}}())return;let h=!1;function v(){h||(h=!0,e&&function(t,e,n){d.T&&s.vF.log(`Sending CLS span (${t})`);const o=(0,p.rv)((a.k3||0)+((0,r.z)([e,"optionalAccess",t=>t.startTime])||0)),f=(0,i.o5)().getScopeData().transactionName,m=e?(0,u.Hd)((0,r.z)([e,"access",t=>t.sources,"access",t=>t[0],"optionalAccess",t=>t.node])):"Layout shift",h=(0,c.Ce)({[l.JD]:"auto.http.browser.cls",[l.uT]:"ui.webvital.cls",[l.jG]:(0,r.z)([e,"optionalAccess",t=>t.duration])||0,"sentry.pageload.span_id":n}),v=(0,p.kD)({name:m,transaction:f,attributes:h,startTime:o});(0,r.z)([v,"optionalAccess",t=>t.addEvent,"call",e=>e("cls",{[l.Sn]:"",[l.xc]:t})]),(0,r.z)([v,"optionalAccess",t=>t.end,"call",t=>t(o)])}(n,t,e),y())}const y=(0,f.a9)((({metric:e})=>{const r=e.entries[e.entries.length-1];r&&(n=e.value,t=r)}),!0);(0,m.Q)((()=>{v()})),setTimeout((()=>{const t=(0,i.KU)(),n=(0,r.z)([t,"optionalAccess",t=>t.on,"call",t=>t("startNavigationSpan",(()=>{v(),n&&n()}))]),s=(0,o.Bk)(),a=s&&(0,o.zU)(s),u=a&&(0,o.et)(a);u&&"pageload"===u.op&&(e=a.spanContext().spanId)}),0)}},60970:function(t,e,n){"use strict";n.d(e,{B:function(){return v},Z:function(){return m}}),n(89463),n(44114),n(3064),n(9920),n(98992),n(72577),n(3949),n(71517),n(11379),n(93777),n(14190),n(12359),n(86097),n(17273),n(27415),n(19929),n(37583),n(55122),n(20230),n(57268),n(79733);var r=n(41501),i=n(3673),o=n(84365),s=n(69222),a=n(53758),u=n(93187),c=n(20213),l=n(55766),d=n(21034);const f=[],p=new Map;function m(){if((0,d.D)()&&i.k3){const t=(0,l.hT)((({metric:t})=>{if(null==t.value)return;const e=t.entries.find((e=>e.duration===t.value&&h[e.name]));if(!e)return;const{interactionId:n}=e,l=h[e.name],f=(0,d.rv)(i.k3+e.startTime),m=(0,d.rv)(t.value),v=(0,o.Bk)(),y=v?(0,o.zU)(v):void 0,g=(null!=n?p.get(n):void 0)||y,_=g?(0,o.et)(g).description:(0,s.o5)().getScopeData().transactionName,b=(0,a.Hd)(e.target),T=(0,u.Ce)({[c.JD]:"auto.http.browser.inp",[c.uT]:`ui.interaction.${l}`,[c.jG]:e.duration}),k=(0,d.kD)({name:b,transaction:_,attributes:T,startTime:f});(0,r.z)([k,"optionalAccess",t=>t.addEvent,"call",e=>e("inp",{[c.Sn]:"millisecond",[c.xc]:t.value})]),(0,r.z)([k,"optionalAccess",t=>t.end,"call",t=>t(f+m)])}));return()=>{t()}}return()=>{}}const h={click:"click",pointerdown:"click",pointerup:"click",mousedown:"click",mouseup:"click",touchstart:"click",touchend:"click",mouseover:"hover",mouseout:"hover",mouseenter:"hover",mouseleave:"hover",pointerover:"hover",pointerout:"hover",pointerenter:"hover",pointerleave:"hover",dragstart:"drag",dragend:"drag",drag:"drag",dragenter:"drag",dragleave:"drag",dragover:"drag",drop:"drag",keydown:"press",keyup:"press",keypress:"press",input:"press"};function v(t){const e=({entries:t})=>{const e=(0,o.Bk)(),n=e&&(0,o.zU)(e);t.forEach((t=>{if(!(0,l.tC)(t)||!n)return;const e=t.interactionId;if(null!=e&&!p.has(e)){if(f.length>10){const t=f.shift();p.delete(t)}f.push(e),p.set(e,n)}}))};(0,l.wv)("event",e),(0,l.wv)("first-input",e)}},55766:function(t,e,n){"use strict";n.d(e,{Pt:function(){return b},T5:function(){return T},YG:function(){return k},a9:function(){return _},hT:function(){return w},tC:function(){return P},wv:function(){return E}}),n(44114);var r=n(77164),i=n(53765),o=n(3),s=n(1096),a=n(27971),u=n(55685),c=n(62815),l=n(30490),d=n(81601);const f={},p={};let m,h,v,y,g;function _(t,e=!1){return I("cls",t,C,m,e)}function b(t,e=!1){return I("lcp",t,j,v,e)}function T(t){return I("fid",t,M,h)}function k(t){return I("ttfb",t,A,y)}function w(t){return I("inp",t,x,g)}function E(t,e){return D(t,e),p[t]||(function(t){const e={};"event"===t&&(e.durationThreshold=0),(0,l.l)(t,(e=>{S(t,{entries:e})}),e)}(t),p[t]=!0),L(t,e)}function S(t,e){const n=f[t];if(n&&n.length)for(const s of n)try{s(e)}catch(e){o.T&&r.vF.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0,i.qQ)(s)}\nError:`,e)}}function C(){return(0,s.I)((t=>{S("cls",{metric:t}),m=t}),{reportAllChanges:!0})}function M(){return(0,a.l)((t=>{S("fid",{metric:t}),h=t}))}function j(){return(0,c.f)((t=>{S("lcp",{metric:t}),v=t}),{reportAllChanges:!0})}function A(){return(0,d.C)((t=>{S("ttfb",{metric:t}),y=t}))}function x(){return(0,u.r)((t=>{S("inp",{metric:t}),g=t}))}function I(t,e,n,r,i=!1){let o;return D(t,e),p[t]||(o=n(),p[t]=!0),r&&e({metric:r}),L(t,e,i?o:void 0)}function D(t,e){f[t]=f[t]||[],f[t].push(e)}function L(t,e,n){return()=>{n&&n();const r=f[t];if(!r)return;const i=r.indexOf(e);-1!==i&&r.splice(i,1)}}function P(t){return"duration"in t}},21034:function(t,e,n){"use strict";n.d(e,{D:function(){return l},Kk:function(){return a},Tn:function(){return u},kD:function(){return c},rv:function(){return d}});var r=n(84365),i=n(26562),o=n(69222),s=n(69428);function a(t){return"number"==typeof t&&isFinite(t)}function u(t,e,n,{...o}){const s=(0,r.et)(t).start_timestamp;return s&&s>e&&"function"==typeof t.updateStartTime&&t.updateStartTime(e),(0,i.hb)(t,(()=>{const t=(0,i.Uk)({startTime:e,...o});return t&&t.end(n),t}))}function c(t){const e=(0,o.KU)();if(!e)return;const{name:n,transaction:r,attributes:a,startTime:u}=t,{release:c,environment:l}=e.getOptions(),d=e.getIntegrationByName("Replay"),f=d&&d.getReplayId(),p=(0,o.o5)(),m=p.getUser(),h=void 0!==m?m.email||m.id||m.ip_address:void 0;let v;try{v=p.getScopeData().contexts.profile.profile_id}catch(t){}const y={release:c,environment:l,user:h||void 0,profile_id:v||void 0,replay_id:f||void 0,transaction:r,"user_agent.original":s.j.navigator&&s.j.navigator.userAgent,...a};return(0,i.Uk)({name:n,attributes:y,startTime:u,experimental:{standalone:!0}})}function l(){return s.j&&s.j.addEventListener&&s.j.performance}function d(t){return t/1e3}},1096:function(t,e,n){"use strict";n.d(e,{I:function(){return l}}),n(44114),n(9920),n(98992),n(3949);var r=n(16374),i=n(68838),o=n(30490),s=n(73973),a=n(10818),u=n(9272);const c=[.1,.25],l=(t,e={})=>{(0,u.z)((0,a.J)((()=>{const n=(0,i.X)("CLS",0);let a,u=0,l=[];const d=t=>{t.forEach((t=>{if(!t.hadRecentInput){const e=l[0],n=l[l.length-1];u&&e&&n&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(u+=t.value,l.push(t)):(u=t.value,l=[t])}})),u>n.value&&(n.value=u,n.entries=l,a())},f=(0,o.l)("layout-shift",d);f&&(a=(0,r.R)(t,n,c,e.reportAllChanges),(0,s.Q)((()=>{d(f.takeRecords()),a(!0)})),setTimeout(a,0))})))}},27971:function(t,e,n){"use strict";n.d(e,{l:function(){return d}}),n(44114),n(9920),n(98992),n(3949);var r=n(16374),i=n(17432),o=n(68838),s=n(30490),a=n(73973),u=n(10818),c=n(94129);const l=[100,300],d=(t,e={})=>{(0,c.I)((()=>{const n=(0,i.N)(),c=(0,o.X)("FID");let d;const f=t=>{t.startTime<n.firstHiddenTime&&(c.value=t.processingStart-t.startTime,c.entries.push(t),d(!0))},p=t=>{t.forEach(f)},m=(0,s.l)("first-input",p);d=(0,r.R)(t,c,l,e.reportAllChanges),m&&(0,a.Q)((0,u.J)((()=>{p(m.takeRecords()),m.disconnect()})))}))}},55685:function(t,e,n){"use strict";n.d(e,{r:function(){return h}}),n(44114),n(26910),n(9920),n(8159),n(98992),n(3949),n(37550);var r=n(69428),i=n(16374),o=n(68838),s=n(30490),a=n(73973),u=n(78189),c=n(94129);const l=[200,500],d=()=>(0,u.O)()-0,f=[],p={},m=t=>{const e=f[f.length-1],n=p[t.interactionId];if(n||f.length<10||e&&t.duration>e.latency){if(n)n.entries.push(t),n.latency=Math.max(n.latency,t.duration);else{const e={id:t.interactionId,latency:t.duration,entries:[t]};p[e.id]=e,f.push(e)}f.sort(((t,e)=>e.latency-t.latency)),f.splice(10).forEach((t=>{delete p[t.id]}))}},h=(t,e={})=>{(0,c.I)((()=>{(0,u.D)();const n=(0,o.X)("INP");let c;const p=t=>{t.forEach((t=>{t.interactionId&&m(t),"first-input"===t.entryType&&!f.some((e=>e.entries.some((e=>t.duration===e.duration&&t.startTime===e.startTime))))&&m(t)}));const e=(()=>{const t=Math.min(f.length-1,Math.floor(d()/50));return f[t]})();e&&e.latency!==n.value&&(n.value=e.latency,n.entries=e.entries,c())},h=(0,s.l)("event",p,{durationThreshold:null!=e.durationThreshold?e.durationThreshold:40});c=(0,i.R)(t,n,l,e.reportAllChanges),h&&("PerformanceEventTiming"in r.j&&"interactionId"in PerformanceEventTiming.prototype&&h.observe({type:"first-input",buffered:!0}),(0,a.Q)((()=>{p(h.takeRecords()),n.value<0&&d()>0&&(n.value=0,n.entries=[]),c(!0)})))}))}},62815:function(t,e,n){"use strict";n.d(e,{f:function(){return m}});var r=n(69428),i=n(16374),o=n(18304),s=n(17432),a=n(68838),u=n(30490),c=n(73973),l=n(10818),d=n(94129);const f=[2500,4e3],p={},m=(t,e={})=>{(0,d.I)((()=>{const n=(0,s.N)(),d=(0,a.X)("LCP");let m;const h=t=>{const e=t[t.length-1];e&&e.startTime<n.firstHiddenTime&&(d.value=Math.max(e.startTime-(0,o.b)(),0),d.entries=[e],m())},v=(0,u.l)("largest-contentful-paint",h);if(v){m=(0,i.R)(t,d,f,e.reportAllChanges);const n=(0,l.J)((()=>{p[d.id]||(h(v.takeRecords()),v.disconnect(),p[d.id]=!0,m(!0))}));["keydown","click"].forEach((t=>{r.j.document&&addEventListener(t,(()=>setTimeout(n,0)),!0)})),(0,c.Q)(n)}}))}},16374:function(t,e,n){"use strict";n.d(e,{R:function(){return r}});const r=(t,e,n,r)=>{let i,o;return s=>{e.value>=0&&(s||r)&&(o=e.value-(i||0),(o||void 0===i)&&(i=e.value,e.delta=o,e.rating=((t,e)=>t>e[1]?"poor":t>e[0]?"needs-improvement":"good")(e.value,n),t(e)))}}},66893:function(t,e,n){"use strict";n.d(e,{W:function(){return r}});const r=()=>`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`},18304:function(t,e,n){"use strict";n.d(e,{b:function(){return i}});var r=n(26170);const i=()=>{const t=(0,r.z)();return t&&t.activationStart||0}},26170:function(t,e,n){"use strict";n.d(e,{z:function(){return i}});var r=n(69428);const i=()=>r.j.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},17432:function(t,e,n){"use strict";n.d(e,{N:function(){return s}});var r=n(69428);let i=-1;const o=t=>{"hidden"===r.j.document.visibilityState&&i>-1&&(i="visibilitychange"===t.type?t.timeStamp:0,removeEventListener("visibilitychange",o,!0),removeEventListener("prerenderingchange",o,!0))},s=()=>(r.j.document&&i<0&&(i="hidden"!==r.j.document.visibilityState||r.j.document.prerendering?1/0:0,addEventListener("visibilitychange",o,!0),addEventListener("prerenderingchange",o,!0)),{get firstHiddenTime(){return i}})},68838:function(t,e,n){"use strict";n.d(e,{X:function(){return a}});var r=n(69428),i=n(66893),o=n(18304),s=n(26170);const a=(t,e)=>{const n=(0,s.z)();let a="navigate";return n&&(r.j.document&&r.j.document.prerendering||(0,o.b)()>0?a="prerender":r.j.document&&r.j.document.wasDiscarded?a="restore":n.type&&(a=n.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:(0,i.W)(),navigationType:a}}},30490:function(t,e,n){"use strict";n.d(e,{l:function(){return r}});const r=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const r=new PerformanceObserver((t=>{Promise.resolve().then((()=>{e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}}},73973:function(t,e,n){"use strict";n.d(e,{Q:function(){return i}});var r=n(69428);const i=t=>{const e=e=>{("pagehide"===e.type||r.j.document&&"hidden"===r.j.document.visibilityState)&&t(e)};r.j.document&&(addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0))}},78189:function(t,e,n){"use strict";n.d(e,{D:function(){return l},O:function(){return c}}),n(9920),n(98992),n(3949);var r=n(30490);let i=0,o=1/0,s=0;const a=t=>{t.forEach((t=>{t.interactionId&&(o=Math.min(o,t.interactionId),s=Math.max(s,t.interactionId),i=s?(s-o)/7+1:0)}))};let u;const c=()=>u?i:performance.interactionCount||0,l=()=>{"interactionCount"in performance||u||(u=(0,r.l)("event",a,{type:"event",buffered:!0,durationThreshold:0}))}},10818:function(t,e,n){"use strict";n.d(e,{J:function(){return r}});const r=t=>{let e=!1;return n=>{e||(t(n),e=!0)}}},94129:function(t,e,n){"use strict";n.d(e,{I:function(){return i}});var r=n(69428);const i=t=>{r.j.document&&r.j.document.prerendering?addEventListener("prerenderingchange",(()=>t()),!0):t()}},9272:function(t,e,n){"use strict";n.d(e,{z:function(){return l}}),n(44114),n(9920),n(98992),n(3949);var r=n(16374),i=n(18304),o=n(17432),s=n(68838),a=n(30490),u=n(94129);const c=[1800,3e3],l=(t,e={})=>{(0,u.I)((()=>{const n=(0,o.N)(),u=(0,s.X)("FCP");let l;const d=(0,a.l)("paint",(t=>{t.forEach((t=>{"first-contentful-paint"===t.name&&(d.disconnect(),t.startTime<n.firstHiddenTime&&(u.value=Math.max(t.startTime-(0,i.b)(),0),u.entries.push(t),l(!0)))}))}));d&&(l=(0,r.R)(t,u,c,e.reportAllChanges))}))}},81601:function(t,e,n){"use strict";n.d(e,{C:function(){return d}});var r=n(69428),i=n(16374),o=n(18304),s=n(26170),a=n(68838),u=n(94129);const c=[800,1800],l=t=>{r.j.document&&r.j.document.prerendering?(0,u.I)((()=>l(t))):r.j.document&&"complete"!==r.j.document.readyState?addEventListener("load",(()=>l(t)),!0):setTimeout(t,0)},d=(t,e={})=>{const n=(0,a.X)("TTFB"),r=(0,i.R)(t,n,c,e.reportAllChanges);l((()=>{const t=(0,s.z)();if(t){const e=t.responseStart;if(e<=0||e>performance.now())return;n.value=Math.max(e-(0,o.b)(),0),n.entries=[t],r(!0)}}))}},69428:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});const r=n(79549).O}}]);
//# sourceMappingURL=2343.51679adc8fcc8118f8ed.js.map