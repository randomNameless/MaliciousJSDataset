/*! For license information please see utils.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hc=t():(e.hc=e.hc||{},e.hc.utils=t())}(self,(function(){return(()=>{var e={993:function(e){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.checkEmpty=function(e){if(null==e||""===e)throw new Error("The key provided can not be empty")},t.setProperty=function(e,t,n){var r={configurable:!1,enumerable:!1,writable:!1};void 0!==n&&(r.value=n),Object.defineProperty(e,t,r)},t.tryParse=function(e){var t=void 0;try{t=JSON.parse(e)}catch(n){t=e}return t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAvailable={localStorage:!1,cookieStorage:!1,sessionStorage:!1,memoryStorage:!0}},function(e,t,n){"use strict";function r(e){var t=o.proxy[e],n="__proxy-storage__";try{t.setItem(n,n),t.removeItem(n)}catch(e){return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.isAvailable=t.configStorage=t.WebStorage=t.default=void 0;var o=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(o),s=n(1),i=null,u={get:function(){return i.__storage__},set:function(e){t.default=i=new a.default(e)}};s.isAvailable.localStorage=r("localStorage"),s.isAvailable.cookieStorage=r("cookieStorage"),s.isAvailable.sessionStorage=r("sessionStorage"),o.webStorageSettings.isAvailable=s.isAvailable,Object.keys(s.isAvailable).some((function(e){return s.isAvailable[e]&&(o.webStorageSettings.default=e,u.set(e)),s.isAvailable[e]})),t.default=i,t.WebStorage=a.default,t.configStorage=u,t.isAvailable=s.isAvailable},function(e,t,n){"use strict";function r(e,t){return Object.keys(t).forEach((function(n){e[n]=(0,i.tryParse)(t[n])})),e}Object.defineProperty(t,"__esModule",{value:!0}),t.proxy=t.webStorageSettings=t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(4),s=function(e){return e&&e.__esModule?e:{default:e}}(a),i=n(0),u=n(1),c=n(5),l={},f=/^(?:expires|max-age|path|domain|secure)$/i,d={default:null,isAvailable:u.isAvailable},p=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!Object.prototype.hasOwnProperty.call(c.proxy,t))throw new Error('Storage type "'+t+'" is not valid');var n=c.proxy[t];t=function(e){if(d.isAvailable[e])return e;var t="sessionStorage"===e?"memoryStorage":d.default,n=e+" is not available. Falling back to "+t;return console.warn(n),t}(t);var o=l[t];if(o)return r(o,n);(0,i.setProperty)(this,"__storage__",t),l[t]=r(this,n)}return o(e,[{key:"setItem",value:function(e,t,n){(0,i.checkEmpty)(e);var r=this.__storage__;if("cookieStorage"===r&&f.test(e))throw new Error("The key is a reserved word, therefore not allowed");var o=(0,s.default)("setItem",e,t,n);void 0!==o&&(t=o),this[e]=t,"string"!=typeof t&&(t=JSON.stringify(t)),c.proxy[r].setItem(e,t,n),"cookieStorage"===r&&null===c.proxy[r].getItem(e)&&delete this[e]}},{key:"getItem",value:function(e,t){(0,i.checkEmpty)(e);var n=c.proxy[this.__storage__].getItem(e);null==n?(delete this[e],n=null):(!0!==t&&(n=(0,i.tryParse)(n)),this[e]=n);var r=(0,s.default)("getItem",e,n);return void 0!==r&&(n=r),n}},{key:"removeItem",value:function(e,t){(0,i.checkEmpty)(e),(0,s.default)("removeItem",e,t),delete this[e],c.proxy[this.__storage__].removeItem(e,t)}},{key:"clear",value:function(){var e=this;(0,s.default)("clear"),Object.keys(this).forEach((function(t){delete e[t]}),this),c.proxy[this.__storage__].clear()}},{key:"length",get:function(){return Object.keys(this).length}}],[{key:"interceptors",value:function(e,t){e in a.INTERCEPTORS&&"function"==typeof t&&a.INTERCEPTORS[e].push(t)}}]),e}();t.default=p,t.webStorageSettings=d,t.proxy=c.proxy},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var s=n.shift(),i=n.shift();return i&&"object"===(void 0===i?"undefined":r(i))&&(i=JSON.parse(JSON.stringify(i))),o[e].reduce((function(e,t){var r=t.apply(void 0,[s,e].concat(n));return null==r?e:r}),i)};var o=t.INTERCEPTORS={setItem:[],getItem:[],removeItem:[],clear:[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.proxy=void 0;var o=r(n(6)),a=r(n(9));t.proxy={localStorage:window.localStorage,sessionStorage:window.sessionStorage,cookieStorage:(0,o.default)(),memoryStorage:(0,a.default)()}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=this.toString();return 0===e.trim().indexOf(t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=r(n(7)),i=r(n(8)),u={get:function(){return document.cookie},set:function(e){document.cookie=e},data:{}};t.default=function(){var e={setItem:function(e,t,n){n=Object.assign({path:"/"},n),u.data[e]={path:n.path};var r=u.data[e];((0,a.isObject)(n.expires)||n.expires instanceof Date)&&(r.expires=(0,i.default)(n.expires)),n.domain&&"string"==typeof n.domain&&(r.domain=n.domain.trim()),!0===n.secure&&(r.secure=!0);var o=e+"="+encodeURIComponent(t)+(0,s.default)(r);u.set(o)},getItem:function(e){var t=null,n=e+"=",r=u.get().split(";").find(o,n);return r&&(t=r.trim().substring(n.length,r.length),t=decodeURIComponent(t)),null===t&&delete u.data[e],t},removeItem:function(t,n){var r=Object.assign({},u.data[t],n);r.expires={days:-1},e.setItem(t,"",r),delete u.data[t]},clear:function(){var t=void 0,n=void 0;u.get().split(";").forEach((function(r){(n=r.indexOf("="))>-1&&(t=r.substring(0,n),e.removeItem(t.trim()))}))}};return function(e){for(var t in e)(0,a.setProperty)(e,t);return u.get().split(";").forEach((function(t){var n=t.indexOf("="),r=t.substring(0,n).trim(),o=t.substring(n+1).trim();r&&(e[r]=decodeURIComponent(o))})),e}(e)}},function(e,t,n){"use strict";function r(e,t){return t[e]?";"+e+"="+t[e]:""}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return""+r("expires",e)+r("domain",e)+r("path",e)+(e.secure?";secure":"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},e),n=t.date instanceof Date?t.date:new Date;return+t.minutes&&n.setMinutes(n.getMinutes()+t.minutes),+t.hours&&n.setHours(n.getHours()+t.hours),+t.days&&n.setDate(n.getDate()+t.days),+t.months&&n.setMonth(n.getMonth()+t.months),+t.years&&n.setFullYear(n.getFullYear()+t.years),n}(e instanceof Date?{date:e}:e).toUTCString()}},function(e,t,n){"use strict";function r(e){var t=JSON.stringify(e);window.self.name=t}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e=function(){var e=void 0;try{e=JSON.parse(window.self.name)}catch(e){return{}}return e&&"object"===(void 0===e?"undefined":o(e))?e:{}}();return function(e,t){for(var n in e)(0,a.setProperty)(e,n);return Object.assign(e,t),e}({setItem:function(t,n){e[t]=n,r(e)},getItem:function(t){var n=e[t];return void 0===n?null:n},removeItem:function(t){delete e[t],r(e)},clear:function(){Object.keys(e).forEach((function(t){return delete e[t]})),r(e)}},e)};var a=n(0)}])}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{addStyleToHead:()=>S,ajax:()=>v,alterDate:()=>N,fetch:()=>h,fetchJSON:()=>b,loadScript:()=>t,setHCStorage:()=>R,toUrlParams:()=>s,urlParamsToObject:()=>w,waitFor:()=>P,when:()=>k});const e=()=>{};function t(t,n=!1,r){const o=document.createElement("script");o.type="text/javascript",n&&(o.async=!0),r&&(o.readyState?o.onreadystatechange=()=>{"loaded"!==o.readyState&&"complete"!==o.readyState||(o.onreadystatechange=null,function(t){return"function"!=typeof t?e:t}(r)())}:o.onload=()=>{r()}),o.src=t,document.getElementsByTagName("head")[0].appendChild(o)}function o(e){let[t,n]=e;return n="string"==typeof t?Object.assign({url:t},n):t,n}function a(e,t){for(const n in t)e.setRequestHeader(n,t[n])}function s(e){let t;return e?`?${Object.keys(e).reduce(((n,r)=>(t=e[r],"function"==typeof t||("object"==typeof t&&(t=JSON.stringify(t)),n.push(`${r}=${encodeURIComponent(t)}`)),n)),[]).join("&")}`:""}const i={fromUrl:/GET|HEAD/i,hasBody:/POST|OPTIONS|PUT|PATCH|DELETE/i},u={Accept:"application/json"};function c(e){const t=i.fromUrl.test(e.method),n=/json/.test(e.headers["Content-Type"]);e.method=e.method.toUpperCase(),null!=e.body&&(e.data=e.body),null!=e.data&&e.processData&&(t?e.url+=s(e.data):n&&(e.data=JSON.stringify(e.data)));for(const t in u)t in e.headers||(e.headers[t]=u[t]);return e}const l=/\r?\n[\t ]+/,f=/\r?\n/,d=/json/,p={parse:function(e){return e.trim().replace(l," ").split(f)},hasJSON:function(e){return e.some((e=>d.test(e)))},from:function(e){return this.parse(e.getAllResponseHeaders())}};function y(e){const t=Object.assign({headers:{"Content-Type":"application/json"},method:"POST",processData:!0},e);return i.fromUrl.test(t.method)&&delete t.headers["Content-Type"],t}function m(e){return Object.assign({url:null,method:"GET",headers:{},data:null,credentials:"omit"},e)}function g(e,t){const n="function"==typeof t;return r=>{const o=r||new Error;if(o.message=`Request failed: ${e.url}`,n)return t(o);throw o}}function v(...e){const t=new XMLHttpRequest,n=y(o(e)),r=m(n);return c(r),t.onerror=g(r),t.ontimeout=g(r),t.onreadystatechange=()=>{if(4===t.readyState){let e="response"in t?t.response:t.responseText;return p.hasJSON(p.from(t))&&(e=e&&JSON.parse(e)),[].concat(r.onload).reduce(((n,r)=>"function"==typeof r&&(e=r.call(t,n),null!=e)?e:n),e)}return null},"boolean"!=typeof r.async&&(r.async=!0),t.open(r.method,r.url,r.async),"include"===r.credentials&&(t.withCredentials=!0),null==n.data&&(r.data=null),a(t,r.headers),t.send(r.data),t}function h(...e){const t=m(o(e));return new Promise(((e,n)=>{const r=new XMLHttpRequest;c(t),r.onload=()=>{e({status:r.status,statusText:r.statusText,headers:p.parse(r.getAllResponseHeaders()),response:"response"in r?r.response:r.responseText,url:t.url})},r.onerror=g(t,n),r.ontimeout=r.onerror,r.open(t.method,t.url,!0),"include"===t.credentials&&(r.withCredentials=!0),void 0===t.data&&(t.data=null),a(r,t.headers),r.send(t.data)}))}function b(...e){return h(y(o(e))).then((e=>{let t=e.response;return p.hasJSON(e.headers)&&(t=t&&JSON.parse(t)),t}))}const S=function(e,t){if(!e)return;if(t&&document.getElementById(t))return;const n=document.createElement("style");n.setAttribute("ref","stylesheet"),n.setAttribute("type","text/css"),t&&n.setAttribute("id",t),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)},_={_true:/true/i,_false:/false/i,_null:/null/i,_undefined:/undefined/i,_number:/^[0-9]+$/,_object:/^[{[].*[}\]]$/};const O=window,j=/(.+)=([^&]+)/;function w(e=O.location.href,t){let n;const r={};return(e=e.split("?")[1])&&e.split(/[?&]/g).forEach((e=>{if(n=e.match(j),!e||!n)return!0;t&&t!==n[1]||(r[n[1].trim()]=function(e){let t=function(e){if(_._true.test(e))return!0;if(_._false.test(e))return!1;if(_._null.test(e))return null;if(!_._undefined.test(e)){if(_._number.test(e))return+e;if(_._object.test(e))try{e=JSON.parse(e)}catch(t){return e}return e}}(decodeURIComponent(e));return"number"==typeof t&&String(t).length!==e.length&&(t=e),t}(function(e=""){return"address"===(e=e.toLowerCase())||"p.address"===e}(n[1])?n[2]:n[2].split("#")[0]))})),r}function x(e,...t){let n,r,o,a;"object"==typeof e?({querySelector:n,timeOutInMilliseconds:r,sleepInMillis:o,callBack:a}=e):(n=e,[r,o,a]=t);const s=performance.now(),i=setInterval((function(){if(performance.now()-s<=r){const e=document.querySelectorAll(n);e.length>0&&(clearInterval(i),a(e))}else clearInterval(i)}),o)}function I({cookieName:e,timeout:t,frecuencyCheck:n,callback:r,returnAnyway:o=!1}){"string"==typeof e&&function(e,t,n,r){const o=performance.now(),a=setInterval((function(){if(performance.now()-o<=t){const t=new window.proxyStorage.WebStorage("cookieStorage").getItem(e);null!==t&&(clearInterval(a),r(t))}else clearInterval(a)}),n)}(e,t,n,r),Array.isArray(e)&&function(e,t,n,r=!1,o){const a=[].concat(e),s={},i=performance.now(),u=setInterval((function(){if(performance.now()-i<=t){const t=new window.proxyStorage.WebStorage("cookieStorage");for(let n=0;n<a.length;n+=1){const r=a[n],i=t.getItem(r);null!==i&&(s[r]=i),Object.keys(s).length===e.length&&(clearInterval(u),o(s))}}else clearInterval(u),r&&Object.keys(s).length>0&&o(s)}),n)}(e,t,n,o,r)}function P(e,...t){const n={cookie:I,element:x};"string"==typeof e&&n[e]&&n[e](...t)}const k=function(e){const t={};return function(...e){const n=JSON.stringify(e);return n in t||(t[n]=function(e){let t=0;return new Promise(((n,r)=>{const o=O.setInterval((()=>{t+=1,Object.prototype.hasOwnProperty.call(O,e)?(O.clearInterval(o),n(O[e])):300===t&&(O.clearInterval(o),r(Error(`Failed to get "${e}"`)))}),30)}))}(...e)),t[n]}}();var E=n(993),M=n.n(E);const T=/true/,A={version:"#{version}",isProd:T.test("true"),isStg:T.test("#{isStg}"),isDev:T.test("#{isDev}"),isQa:T.test("false"),defaults:{timeFormat:"HH:mm",dateFormat:"MM/dd/yyyy"}};function N(e={}){const t=e.date instanceof Date?e.date:new Date;return+e.minutes&&t.setMinutes(t.getMinutes()+e.minutes),+e.hours&&t.setHours(t.getHours()+e.hours),+e.days&&t.setDate(t.getDate()+e.days),+e.months&&t.setMonth(t.getMonth()+e.months),+e.years&&t.setFullYear(t.getFullYear()+e.years),t}T.test("false")&&(A.isProd=!1,A.isStg=!0),T.test("#{IS_QA}")&&(A.isQa=!0),A.subDomain=A.isProd?"":".stg",A.subDomainWithQA=A.isDev||A.isQa?".qa":A.subDomain,A.version,function(){const e=N({days:1}),t=`${e.getMonth()+1}`;`0${t}`.substring(t.length-1),e.getDate(),e.getFullYear()}(),Object.prototype.toString;const D=[Date,RegExp,Function,String,Number,Boolean];var C;["Map","Set"].forEach((e=>{e in O&&D.push(O[e])}));var R=function(e){C=e,M().setItem("hc",C)}})(),r})()}));
//# sourceMappingURL=utils.js.map