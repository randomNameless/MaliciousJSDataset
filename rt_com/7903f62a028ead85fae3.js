/*! v:1166802 b:default c:2512 */
try{var cnc=function(e){if(!e||!e.toString)return!1;const t=e.toString();return/\[native code\]/.test(t)||/\/\* source code not available \*\//.test(t)};cnc(Function.prototype.bind)?Function.prototype.__pbind=Function.prototype.bind:Function.prototype.__pbind=function(e,...t){let n=this;return function(...r){return n.apply(e,[...t,...r])}},cnc(Array.prototype.reduce)?Object.defineProperty&&Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:Array.prototype.reduce}):Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:function(e){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var t,n=Object(this),r=n.length>>>0,o=0;if(arguments.length>=2)t=arguments[1];else{for(;o<r&&!(o in n);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");t=n[o++]}for(;o<r;o++)o in n&&(t=e(t,n[o],o,n));return t}})}catch(e){}(self["pcode_1166802_default_Z8K04FRt7g"]=self["pcode_1166802_default_Z8K04FRt7g"]||[]).push([[2512],{25516:function(e,t,n){n.d(t,{m:function(){return o}});var r=n(94066);function o(e){if(void 0!==e){if(!(0,r.H)(e))throw new Error(`testIdsString is not a string or undefined [${e}]`);if(0!==e.length){for(const t of e.split(";")){const n=t.split(",");if(3!==n.length)throw new Error(`testIdParts length error [${e}]`);const[r,,o]=n;if(0===r.trim().length)throw new Error(`testId length error [${e}]`);if(0===o.trim().length)throw new Error(`testId bucket length error [${e}]`)}return e}}}},12877:function(e,t,n){n.r(t),n.d(t,{loadVasModule:function(){return Y}});var r=n(47435),o=n(61175);function i(...e){const t=(0,o.h)(e,Boolean);if(0!==t.length)return t.join(";")}var a=n(25516),s=n(14514),c=n(99418),u=n(41144),l=n(94093),d=n(11358);class f{constructor(e){Object.defineProperty(this,"dispatch",{enumerable:!0,configurable:!0,writable:!0,value:(0,d.I)((e=>{this.value=e,this._isDispatched=!0,(0,c.p)(this.callbacks,e),this.callbacks.length=0}))}),Object.defineProperty(this,"callbacks",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_isDispatched",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,u.m)(e)&&this.callbacks.push(e)}subscribe(e){return this._isDispatched?(e(this.value),l.Z):(this.callbacks.push(e),()=>{this.callbacks=(0,o.h)(this.callbacks,(t=>t!==e))})}getDispatched(){return this._isDispatched}getValue(){return this.value}wait(){return new Promise((e=>{this.subscribe(e)}))}}var v=n(10145),p=n(24132),g=n(23888),h=n(56347);class b{constructor({defaultProbability:e,rnd:t,vsid:n,serviceName:r,serviceVersion:o}){Object.defineProperty(this,"rnd",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"vsid",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"defaultProbability",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"serviceName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"serviceVersion",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"error",{enumerable:!0,configurable:!0,writable:!0,value:({error:e})=>{this.push({eventName:String(e.code),eventType:"error",eventData:e,probability:1})}}),this.rnd=t,this.vsid=n,this.defaultProbability=e,this.serviceName=r,this.serviceVersion=o}log({name:e,probability:t,data:n}){this.push({eventType:"event",eventName:e,probability:t,eventData:n})}push({eventType:e,eventName:t,probability:r=this.defaultProbability,eventData:o}){if(this.rnd<r){const r=`https://log.strm.yandex.ru/log?${e}=${t}`,i=n.lv["json"].stringify({service:"VAS",eventType:e,eventName:t,rnd:this.rnd,vsid:this.vsid,data:o,topLocation:(0,p.w)(document).location,version:`loadVasModule_${this.serviceName||"unknown"}_${this.serviceVersion||"unknown"}`,timestamp:Date.now()});if((0,h.P)(r,i))return;(0,g.W)({url:r,data:i,method:"POST"})}}}var m=n(77599),_=n(82667);function S(e,t){var n,r,o;return null!==(o=null!==(r=null!==(n=_.J.getItem(e,t))&&void 0!==n?n:function(e,t){const n=function(e){var t,n;const r=[e.document];let o=e.document;for(;o;)o=null===(n=null===(t=o.defaultView)||void 0===t?void 0:t.frameElement)||void 0===n?void 0:n.ownerDocument,o&&r.push(o);return r}(e);for(let e=0;e<n.length;e++){const r=new URLSearchParams(n[e].location.search).get(t);if(null!==r)return r}}(e,t))&&void 0!==r?r:(0,m.$)(e,t))&&void 0!==o?o:void 0}const y=function(e){let t,n,r=!1,o=!1,i=!1;return(0,v.Y)((()=>{t=function(e){const t=S(e,"adsdkecmaver");if("ES2017"===t||"ES5"===t)return t}(e)})),(0,v.Y)((()=>{i=Boolean(S(e,"adsdkdebug"))})),(0,v.Y)((()=>{n=S(e,"adsdkver")})),(0,v.Y)((()=>{r=Boolean(S(e,"vasnetworklogs"))})),(0,v.Y)((()=>{o=((e,t)=>{const n=S(e,t);return"false"!==n&&Boolean(n)})(e,"vasfulldebug")})),i&&(console.warn("adsdkdebug is deprecated, use vasfulldebug instead"),o=!0),o&&(r=!0),{adsdkecmaver:t,vasfulldebug:o,vasnetworklogs:r,adsdkver:n,adsdkdebug:i}}(window),E=y.vasnetworklogs?1:.05,w=(0,n(29656).M)();var A=n(12589);const O=e=>{var t;const{error:n,config:o}=(0,A.vn)(e);if(!n){const e=o.flags,n=null!==(t=e["ADSDKVER"])&&void 0!==t?t:e["VAS_STABLE_VERSION"],i=(0,r.isNonEmptyString)(n)?n:void 0;if((0,r.isNonEmptyString)(i))return{version:i,parsedUaasConfig:o,parseUaasConfigError:void 0}}return{version:void 0,parsedUaasConfig:void 0,parseUaasConfigError:n}},I=n(72037).k?"ES2017":"ES5";function N(e,t){var n,r,o;return null===(o=null===(r=null===(n=t.ya)||void 0===n?void 0:n.videoAd)||void 0===r?void 0:r.loadedModules)||void 0===o?void 0:o[e]}const P=new Set(["AdLoader"]),L={ES5:"bundles",ES2017:"bundles-es2017"};var T=n(70180),D=n(72999);const j=(e,t)=>{for(const n of t.split(".")){if(!(0,D.K)(e)){e=void 0;break}e=e[n]}return e},C="__ADB_CONFIG__";var U=n(45589);const V=(0,D.K)(C)&&(0,D.K)(C.fn)?C.fn:void 0,R=["encodeUrl","decodeUrl","encodeCSS","isEncodedUrl"],k=Object.assign(Object.assign({},{InPage:"inpage",AdLoader:"loader",Multiroll:"multiroll",YaMusicAPI:"ya-music-api",VpaidPlayer:"vpaid_player",Rum:"rum"}),{MotionTailor:"motion_ad_creative",Survey:"survey"});var M=n(59414);const F=`https://${n(91761).N9}/vas-bundles/`;const B=({bundleName:e,win:t,ecmaVersion:n,version:r,preferLightBundle:o})=>{const i=L[n],a=(e=>(e=>{if(V)return V;const t={},n=(0,T.T)(e);for(;n.length;){const e=n.pop();e&&(0,U.E)(R,(n=>{if((0,u.m)(t[n]))return;const r=j(e,`ya.videoAd.${n}`);(0,u.m)(r)&&(t[n]=r)}))}return t})(e).encodeUrl)(t),s=(c=e,l=o&&(e=>P.has(e))(e),`${k[c]}${l?".light":""}.bundle.js`);var c,l;const d=`${function(e){return M.m1?new URL(M.m1,location.origin).href:function(e){return`${F}${e}/`}(e)}(r)}${i}/${s}`;return(0,u.m)(a)?a(d):d};var $=n(40003),x=n(71478),K=n(31310);const J=e=>new Promise(((t,n)=>{(0,g.W)({method:"GET",url:"https://yandex.ru/ads/system/video-ads-sdk/vas_uaas",responseType:"json",retries:2,withCredentials:Boolean(e),onSuccess:e=>{t(e.response)},onError:()=>{n(new Error("Cannot load uaas"))}})})),G=(0,n(64605).QC)("1"),Y=e=>{var t;const{win:n,config:{vasUaasConfig:o,activeTestIds:c,additionalCustomRootFields:u,vh_sid:d,withCredentials:p},moduleName:g,serviceName:h,serviceVersion:m,productTheme:_,actualFormat:S,pageId:A,impId:P,preferLightBundle:L}=e,T=null!==(t=null==u?void 0:u.vsid)&&void 0!==t?t:G,D=(({serviceName:e,serviceVersion:t,vsid:n})=>{const r=new b({rnd:w,vsid:n,defaultProbability:E,serviceName:e,serviceVersion:t});return{event:e=>r.log(e),error:e=>r.error(e)}})({serviceName:h,serviceVersion:m,vsid:T}),j=Object.assign({},u),C=(0,r.isNonEmptyString)(d)?d:void 0;!(0,r.isNonEmptyString)(j.vh_sid)&&C&&(j.vh_sid=C);const U=(0,v.Y)((()=>(0,a.m)(null==j?void 0:j.testIds)),(e=>{D.error({error:new s.J({code:"LOAD_VAS_MODULE_INVALID_TEST_IDS",details:{message:e.message}})})}));return(e=>{const t=new f;return{promise:new Promise(((e,r)=>{(({resolve:e,reject:t,subscribeForTeardown:r})=>{let a=!1;r((()=>{a=!0,t(new Error("Teardown called"))})),(({externalUaasConfig:e,loaderFunctionsStatsWrapper:t,withCredentials:n})=>new Promise(((r,o)=>{var i,a;const c=O(e);e?c.parseUaasConfigError?t.error({error:new s.J({code:"LOAD_VAS_MODULE_PARSE_EXTERNAL_UAAS_CONFIG_ERROR",details:{message:c.parseUaasConfigError.message,vasUaasConfig:e}})}):void 0===(null===(a=null===(i=c.parsedUaasConfig)||void 0===i?void 0:i.flags)||void 0===a?void 0:a.VAS_STABLE_VERSION)&&t.error({error:new s.J({code:"LOAD_VAS_MODULE_NO_VAS_STABLE_VERSION_IN_EXTERNAL_AB_FLAGS",details:{vasUaasConfig:e}})}):t.event({name:"LoadVasModule_NoUAAS",data:{}}),c.version?r({uaasConfig:c.parsedUaasConfig,rawUaasConfig:e,version:c.version}):J(n).then((e=>{var n,o,i;const a=O(e);a.parseUaasConfigError?t.error({error:new s.J({code:"LOAD_VAS_MODULE_PARSE_LOADED_UAAS_CONFIG_ERROR",details:{message:a.parseUaasConfigError.message,vasUaasConfig:e}})}):void 0===(null===(o=null===(n=a.parsedUaasConfig)||void 0===n?void 0:n.flags)||void 0===o?void 0:o.VAS_STABLE_VERSION)&&t.error({error:new s.J({code:"LOAD_VAS_MODULE_NO_VAS_STABLE_VERSION_IN_LOADED_AB_FLAGS",details:{vasUaasConfig:e}})}),r({uaasConfig:a.parsedUaasConfig,rawUaasConfig:e,version:null!==(i=a.version)&&void 0!==i?i:String(e.stableVersion),stableVersion:e.stableVersion})})).catch(o)})))({externalUaasConfig:o,loaderFunctionsStatsWrapper:D,withCredentials:p}).then((({uaasConfig:o,rawUaasConfig:u,version:d,stableVersion:f})=>{var v,p;if(a)return;if((e=>!(!(e=>{const t=e.document;return"documentMode"in t&&void 0!==t["documentMode"]})(e)&&!(e=>{const t=e.navigator.userAgent;return t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0})(e)))(n))return D.event({name:"LoadVasModule_brokeInIE11",probability:E,data:{bundleName:g}}),e(void 0);const h={AB_FLAGS_STORE:void 0,AB_FLAGS:null!==(v=null==o?void 0:o.flags)&&void 0!==v?v:{},ICOOKIE:null==o?void 0:o.iCookie,TEST_IDS:i(U,null==o?void 0:o.testIds),VAS_UAAS_CONFIG:o,ActiveTestIds:c,AdditionalStatsRootFields:j,VSID:T,VAS_USER_SESSION_RANDOM:w,STATS_ROOT_PARAMS:{},loaderLoadedFromAnYandexRu:void 0,loaderLoadedFromYaRu:void 0,grWasSent:void 0,productTheme:_,actualFormat:S,pageId:A,impId:P},b=e=>{const{promise:t,teardown:o}=(({moduleName:e,version:t,win:n,scriptSessionParams:r,preferLightBundle:o})=>{var i;const a=N(e,n);if(a)return{promise:Promise.resolve(a),teardown:l.Z};const c=B({version:t,bundleName:e,win:n,ecmaVersion:null!==(i=y.adsdkecmaver)&&void 0!==i?i:I,preferLightBundle:o}),{promise:u,teardown:d}=function(e){return function(e){const{src:t,win:n,onBeforeLoad:r=l.Z}=e,o=new s.J(new Error,{});let i=l.Z;return{promise:new Promise(((e,a)=>{const c=n.document.createElement("script");let u=!1;i=()=>{u=!0,(0,K.L)(c)},c.type="text/javascript",c.async=!0,c.onload=()=>{u||e()},c.onerror=e=>{u||(a(new s.J(o,{message:`Failed to load script [${t}]`,details:{src:t,isSelfWindow:n===window,event:e}})),i())},c.src=t,c.charset="utf-8",r(c),(0,x.c)(n).appendChild(c)})),teardown:i}}(e)}({src:c,win:n,onBeforeLoad:e=>{(e=>{e.crossOrigin="anonymous"})(e),(0,$.O4)(e,r)}});return{promise:u.then((()=>N(e,n))),teardown:d}})({moduleName:g,scriptSessionParams:h,version:e,win:n,preferLightBundle:L});return r(o),t},m=t=>{D.event({name:"LoadVasModule_ModuleLoaded",probability:E,data:{bundleName:g}}),e(t)},O=null!==(p=y.adsdkver)&&void 0!==p?p:d;b(O).then(m).catch((e=>{if(O===String(f))throw e;return D.error({error:new s.J({code:"LOAD_VAS_MODULE_CANNOT_LOAD_MODULE_WITH_UAAS_VERSION",details:{vasUaasConfig:u}})}),f?b(String(f)).then(m):J().then((e=>String(e.stableVersion))).then(b).then(m)})).catch(t)})).catch(t)})({resolve:e,reject:r,subscribeForTeardown:e=>{t.subscribe(e)}})})),teardown:()=>t.dispatch(void 0)}})()}},40003:function(e,t,n){n.d(t,{H4:function(){return o},NQ:function(){return a},O4:function(){return i},dm:function(){return s}});var r=n(72999);const o=e=>(0,r.K)(e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__),i=(e,t)=>{e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__=t},a=e=>e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__,s=e=>{delete e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__}},77599:function(e,t,n){n.d(t,{$:function(){return o}});var r=n(70180);const o=(e,t)=>{var n,o;for(const i of(0,r.T)(e)){const e=null===(o=null===(n=i.Ya)||void 0===n?void 0:n.hardcodedParams)||void 0===o?void 0:o[t];if(e)return String(e)}}},91761:function(e,t,n){n.d(t,{HO:function(){return o},N9:function(){return i},l3:function(){return r}});const r=["a","n.ya","nd","ex.ru"].join(""),o=(["y","a","nde","x.ru"].join(""),["y","a",".r","u"].join("")),i=["ya","sta","tic.net"].join("");["ver","ify.y","a","nde","x.ru"].join("")},14514:function(e,t,n){n.d(t,{J:function(){return p}});var r=n(76377),o=n(94066),i=n(47435),a=n(72999),s=n(92800);var c=n(41144);function u(e){return n.lv["json"].stringify(e,function(){const e=[],t=function(){const e="undefined"==typeof WeakMap?void 0:new WeakMap,t=[];return{set:(n,r)=>{if(void 0!==e)try{e.set(n,r)}catch(e){t.push({path:r,value:n})}else t.push({path:r,value:n})},get:n=>{const r=(0,s.s)(t,(e=>e.value===n));return void 0!==e&&void 0===r?e.get(n):r?r.path:void 0}}}();return(n,s)=>{if((0,c.m)(s))return(0,o.H)(s.name)?s.name:"[Function]";if((0,r.V)(s))return{name:(u=s).name,message:u.message,stack:u.stack};var u,l;if(!(0,a.K)(s))return s;if((e=>{try{return"display"in function(e,t=window){return("function"==typeof t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle)||{}}(e)}catch(e){return!1}})(s))return(l=s).id?l.id:l.className?l.className:"HTML Element";const d=t.get(s);if((0,i.isNonEmptyString)(d))return`[Circular ${d}]`;for(;e.length>0&&e[e.length-1].value[n]!==s;)e.pop();const f=(e.length>0?e[e.length-1].path:"")+(n?`/${n}`:"~");return e.push({path:f,value:s}),t.set(s,f),s}}())}var l=n(56026),d=n.n(l);const f="DEFAULT_ERROR_MESSAGE",v="?:?:?";class p extends Error{constructor(...e){const t=2===e.length?e[0]:void 0,n=2===e.length?e[1]:e[0],r=(i=t,(0,a.K)(i)&&(0,o.H)(i.name)&&(0,o.H)(i.message)||"object"==typeof t&&t&&"code"in t&&"details"in t?t:{message:String(t||f)});var i;super(),Object.defineProperty(this,"originalError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"message",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stack",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"toString",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"toJSON",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.originalError="object"==typeof t&&t?t:{unknown:t,unknownStr:String(t)},d()(this,p.prototype);const s=n.code||r.code||r.id||"0",c=n.message||r.message||f;this.message=`VAS Error [${s}]`+(c?`[${c}]`:""),this.code=s,this.details=n.details||r.details||"";const l=r.stack||function(e){const{url:t,line:n,col:r,fileName:o,columnNumber:i,lineNumber:a}=e;return`${t||o||"?"}:${n||a||"?"}:${r||i||"?"}`}(r);let g=l===v?this.stack:l;if(g&&g!==v)this.stack=g;else if(!this.stack)try{throw new Error(this.message)}catch(e){this.stack=g=e.stack||v}this.toString=()=>u(this.toJSON()),this.toJSON=()=>({originalError:this.originalError,message:this.message,code:this.code,details:this.details,stack:g})}}},82667:function(e,t,n){n.d(t,{J:function(){return r}});const r={getItem:(e,t)=>{try{return e.localStorage.getItem(t)}catch(e){return null}},setItem:(e,t,n)=>{try{e.localStorage.setItem(t,n)}catch(e){return}},removeItem:(e,t)=>{try{e.localStorage.removeItem(t)}catch(e){return}}}},59414:function(e,t,n){n.d(t,{R0:function(){return o},m1:function(){return r}});const r="undefined"==typeof BUNDLES_PATH?"":BUNDLES_PATH,o="undefined"==typeof BUNDLE_NAME?"Test":BUNDLE_NAME;"undefined"==typeof BUILD_TIME||BUILD_TIME},61175:function(e,t,n){n.d(t,{h:function(){return r}});const r=(e,t,n)=>{const r=[];for(let o=0;o<e.length;o++){const i=e[o];t.call(n,i,o,e)&&r.push(i)}return r}},92800:function(e,t,n){n.d(t,{s:function(){return i}});var r=n(39118);const o=[].find,i=(0,r.E)(o)?(e,t)=>o.call(e,t):(e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(t(r,n,e))return r}}},45589:function(e,t,n){n.d(t,{E:function(){return r}});const r=(e,t,n)=>{for(let r=0;r<e.length;r++)t.call(n,e[r],r,e)}},31310:function(e,t,n){function r(e){if(!e)return;const{parentElement:t}=e;t&&t.removeChild(e)}n.d(t,{L:function(){return r}})},39118:function(e,t,n){function r(e){if(!Boolean(null==e?void 0:e.toString))return!1;try{const t=e.toString();return/\[native code\]/.test(t)||/\/\* source code not available \*\//.test(t)}catch(e){return!1}}n.d(t,{E:function(){return r}})},94093:function(e,t,n){function r(...e){}n.d(t,{Z:function(){return r}})},11358:function(e,t,n){function r(e){let t=function(){let n;return t=()=>n,n=e.apply(this,arguments),n};return function(){return t.apply(this,arguments)}}n.d(t,{I:function(){return r}})},10145:function(e,t,n){function r(e,t){try{return e()}catch(e){"function"==typeof t&&t(e)}}n.d(t,{Y:function(){return r}})},36526:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(50498);function o(e){if("function"==typeof Object.keys)return Object.keys(e);const t=[];for(const n in e)(0,r.n)(e,n)&&t.push(n);return t}},50498:function(e,t,n){function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}n.d(t,{n:function(){return r}})},72999:function(e,t,n){function r(e){const t=typeof e;return Boolean(e)&&("object"===t||"function"===t)}n.d(t,{K:function(){return r}})},5747:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(45589),o=n(36526);function i(e,t){const n={};return(0,r.E)((0,o.Z)(e),(r=>{n[r]=t(e[r],r)})),n}},12589:function(e,t,n){n.d(t,{Lh:function(){return g},Ou:function(){return h},vn:function(){return b}});var r=n(76377),o=n(25516),i=n(45589),a=n(86153),s=n(39118);const c=function(e,t){let n=e[t];if(!(0,s.E)(n)){const r=n;try{delete e[t];const o=e[t];"function"==typeof o&&(n=o),e[t]=r}catch(e){}}return n}(Array,"isArray"),u=Boolean(c)?e=>c.call(Array,e):e=>"Array"===(0,a.M)(e);var l=n(11358),d=n(36526),f=n(72999);function v(e){return!(0,d.Z)(e).length}var p=n(50498);const g={testIds:"",flags:{}},h=(0,l.I)((()=>{try{return __UAAS_CFG__}catch(e){return e}})),b=e=>{if((0,r.V)(e))return{error:e,config:g};try{const t=(0,f.K)(e)?e:n.lv["json"].parse(`${e||""}`),r=(e=>!!(0,f.K)(e)&&!(!("expFlags"in e)||!u(e.expFlags)))(t)?(e=>{const{expFlags:t}=e,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["expFlags"]),r={},o={};return(0,i.E)(e.expFlags,(e=>{(0,i.E)(e,(({CONTEXT:{FLAGS:e},TESTID:t})=>{(0,f.K)(e)&&(0,i.E)((0,d.Z)(e),(n=>{var i;const a=e[n];r[n]=a,o[n]=null!==(i=o[n])&&void 0!==i?i:[],o[n].push({value:a,testId:t[0]})}))}))})),Object.assign({flags:r,flagsMap:o},n)})(t):t;if(!r.flags||v(r.flags)){const e=function(e={}){const t={};return function(e,t,n){for(const n in e)(0,p.n)(e,n)&&t.call(undefined,e[n],n,e)}(e,((e,n)=>{(0,i.E)(e,(({value:e})=>{t[n]=e}))})),t}(r.flagsMap);v(e)||(r.flags=e)}if(!((e,t)=>{if(!(0,f.K)(t))throw new Error(`Parsed replaced macro is not an object: ${e}`);if((0,o.m)(t.testIds),!("flags"in t)||!(0,f.K)(t.flags))throw new Error(`Parsed replaced macro has no flags field: ${e}`);return!0})(String(e),r))throw new Error(`UAAS config is not valid: ${e}`);return{error:void 0,config:r}}catch(e){return{error:e,config:g}}}},64605:function(e,t,n){n.d(t,{QC:function(){return u}});var r=n(62301),o=n(26245);let i;try{i=BUILD_VERSION}catch(e){i="INVALID_BUILD_VERSION"}const a=i,s="VAS",c=e=>(0,o.Q)(e.substr(-4),4,"0"),u=(e=a)=>[(0,r.a)(44),s,c(e),(0,o.Q)(Date.now().toString().slice(0,10),10,"0")].join("x")},56026:function(e){e.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){return e.__proto__=t,e}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n]);return e})}}]);