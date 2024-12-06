/*! v:1168819 b:default c:927 */
try{var cnc=function(e){if(!e||!e.toString)return!1;const r=e.toString();return/\[native code\]/.test(r)||/\/\* source code not available \*\//.test(r)};cnc(Function.prototype.bind)?Function.prototype.__pbind=Function.prototype.bind:Function.prototype.__pbind=function(e,...r){let t=this;return function(...n){return t.apply(e,[...r,...n])}},cnc(Array.prototype.reduce)?Object.defineProperty&&Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:Array.prototype.reduce}):Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:function(e){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var r,t=Object(this),n=t.length>>>0,o=0;if(arguments.length>=2)r=arguments[1];else{for(;o<n&&!(o in t);)o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");r=t[o++]}for(;o<n;o++)o in t&&(r=e(r,t[o],o,t));return r}})}catch(e){}(self["pcode_1168819_default_yTemud3K84"]=self["pcode_1168819_default_yTemud3K84"]||[]).push([[927],{12934:function(e,r,t){function n(){var e;this.getSetting=function(e){var r=this._errorSettings[e];return null===r?null:r||""},function(e,r){var n={client:["690.2354",1e3,100,0],uncaught:["690.2361",100,10,0],external:["690.2854",100,10,0],script:["690.2609",100,10,0]},o={};r.ERROR_LEVEL={INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error",FATAL:"fatal"},r._errorSettings={clck:"https://yandex.ru/clck/click",beacon:!0,project:"unknown",page:"",env:"",experiments:[],additional:{},platform:"",region:"",dc:"",host:"",service:"",level:"",version:"",yandexuid:"",loggedin:!1,coordinates_gp:"",referrer:!0,preventError:!1,unhandledRejection:!1,traceUnhandledRejection:!1,uncaughtException:!0,debug:!1,limits:{},silent:{},filters:{},pageMaxAge:864e6,initTimestamp:+new Date};var i=!1;function a(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);return e}function s(e){return"boolean"==typeof e&&(e=+e),"number"==typeof e?e+"":null}r.initErrors=function(t){var n=a(r._errorSettings,t);i||(n.uncaughtException&&function(){var t=r._errorSettings;if(e.addEventListener)e.addEventListener("error",c),t.resourceFails&&e.addEventListener("error",l,!0),"Promise"in e&&t.unhandledRejection&&e.addEventListener("unhandledrejection",(function(e){var t,n,o=e.reason,i={};o&&(o.stack&&o.message?(t=o.message,n=o.stack):(t=String(o),n=r._parseTraceablePromiseStack(e.promise),"[object Event]"===t?t="event.type: "+o.type:"[object Object]"===t&&(i.unhandledObject=o)),o.target&&o.target.src&&(i.src=o.target.src),c({message:"Unhandled rejection: "+t,stack:n,additional:i}))}));else{var n=e.onerror;e.onerror=function(e,r,t,o,i){c({error:i||new Error(e||"Empty error"),message:e,lineno:t,colno:o,filename:r}),n&&n.apply(this,arguments)}}}(),n.unhandledRejection&&n.traceUnhandledRejection&&r._traceUnhandledRejection&&r._traceUnhandledRejection(),i=!0)},r.updateErrors=function(e){a(r._errorSettings,e)},r.updateAdditional=function(e){r._errorSettings.additional=a(r._errorSettings.additional||{},e)},r._handleError=function(e,t,i){var s,c,l=r._errorSettings;if(l.preventError&&e.preventDefault&&e.preventDefault(),t)s=e,c="client";else{s=r._normalizeError(e),c=s.type;var u=l.onError;"function"==typeof u&&u(s);var d=l.transform;if("function"==typeof d&&(s=d(s)),!s)return;s.settings&&(i=s.settings)}var f=+new Date,p=l.initTimestamp,g=l.pageMaxAge;if(!(-1!==g&&p&&p+g<f)){var m=n[c][1];"number"==typeof l.limits[c]&&(m=l.limits[c]);var v=n[c][2];"number"==typeof l.silent[c]&&(v=l.silent[c]);var h=n[c][3];if(h<m||-1===m){s.path=n[c][0];var _=r._getErrorData(s,{silent:h<v||-1===v?"no":"yes",isCustom:Boolean(t)},a(a({},l),i)),y=function(e){o[s.message]=!1,r._sendError(e.path,e.vars),n[c][3]++}.__pbind(this,_);if(void 0===l.throttleSend)y();else{if(o[s.message])return;o[s.message]=!0,setTimeout(y,l.throttleSend)}}}},r._getReferrer=function(r){var t=r.referrer,n=typeof t;return"function"===n?t():"string"===n&&t?t:!1!==t&&e.location?e.location.href:void 0},r.getErrorSetting=function(e){return r._errorSettings[e]},r._buildExperiments=function(e){return e instanceof Array?e.join(";"):""},r._buildAdditional=function(e,r){var n="";try{var o=a(a({},e),r);0!==Object.keys(o).length&&(n=t.lv["json"].stringify(o))}catch(e){}return n},r._getErrorData=function(t,n,o){n=n||{};var i=r._buildExperiments(o.experiments),a=r._buildAdditional(o.additional,t.additional),c={"-stack":t.stack,"-url":t.file,"-line":t.line,"-col":t.col,"-block":t.block,"-method":t.method,"-msg":t.message,"-env":o.env,"-external":t.external,"-externalCustom":t.externalCustom,"-project":o.project,"-service":t.service||o.service,"-page":t.page||o.page,"-platform":o.platform,"-level":t.level,"-experiments":i,"-version":o.version,"-region":o.region,"-dc":o.dc,"-host":o.host,"-yandexuid":o.yandexuid,"-loggedin":o.loggedin,"-coordinates_gp":t.coordinates_gp||o.coordinates_gp,"-referrer":r._getReferrer(o),"-source":t.source,"-sourceMethod":t.sourceMethod,"-type":n.isCustom?t.type:"","-additional":a,"-adb":s(Ya.blocker)||s(o.blocker),"-cdn":e.YaStaticRegion,"-ua":navigator.userAgent,"-silent":n.silent,"-ts":+new Date,"-init-ts":o.initTimestamp};return o.debug&&e.console&&console[console[t.level]?t.level:"error"]("[error-counter] "+t.message,c,t.stack),{path:t.path,vars:c}},r._baseNormalizeError=function(e){var r=(e=e||{}).error,t=e.filename||e.fileName||"",n=r&&r.stack||e.stack||"",o=e.message||"",i=r&&r.additional||e.additional;return{file:t,line:e.lineno||e.lineNumber,col:e.colno||e.colNumber,stack:n,message:o,additional:i}},r._normalizeError=function(e){var t=r._baseNormalizeError(e),n="uncaught",o=r._isExternalError(t.file,t.message,t.stack),i="",a="";return o.hasExternal?(n="external",i=o.common,a=o.custom):/^Script error\.?$/.test(t.message)&&(n="script"),t.external=i,t.externalCustom=a,t.type=n,t},r._createVarsString=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&(e[t]||0===e[t])&&r.push(t+"="+encodeURIComponent(e[t]).replace(/\*/g,"%2A"));return r.join(",")},r._sendError=function(e,t){r.send(null,e,r._createVarsString(t),null,null,null,null)};var c=function(e){r._handleError(e,!1)},l=function(e){var t=e.target;if(t){var n=t.srcset||t.src;if(n||(n=t.href),n){var o=t.tagName||"UNKNOWN";r.logError({message:o+" load error",additional:{src:n}})}}};r._parseTraceablePromiseStack=function(){}}("undefined"!=typeof self?self:window,this),(e=this).logError=function(r,t,n){r=r||{},"string"!=typeof t&&void 0!==t||((t=new Error(t)).justCreated=!0);var o=r.message||"",i=e._baseNormalizeError(t);i.message&&!r.ignoreErrorMessage&&(o&&(o+="; "),o+=i.message),i.message=o||"Empty error";for(var a=["service","source","type","block","additional","level","page","method","sourceMethod","coordinates_gp"],s=0;s<a.length;s++){var c=a[s];r[c]?i[c]=r[c]:t&&t[c]&&(i[c]=t[c])}e._handleError(i,!0,n)},function(e){function r(){var r=e.getSetting("clck"),t=e.countersBatchData.join("\r\n");if(e.countersBatchData=[],e.counterTimerId=null,r&&!(navigator.sendBeacon&&e.getSetting("beacon")&&navigator.sendBeacon(r,t)))if("undefined"!=typeof self&&self.fetch)fetch(r,{method:"POST",body:t}).catch((function(){}));else{var n=new XMLHttpRequest;n.open("POST",r),n.send(t)}}e.countersBatchData=[],e.counterTimerId,e.send=function(t,n,o,i,a,s,c){clearTimeout(e.counterTimerId);var l=function(r,t,n,o,i,a){var s=e.getSetting("slots");return[a?"/"+a.join("/"):"","/path="+t,s?"/slots="+s.join(";"):"",n?"/vars="+n:"","/cts="+(new Date).getTime(),"/*"]}(0,n,o,0,0,c);e.countersBatchData.push("/reqid="+e.getSetting("reqid")+l.join("")),e.countersBatchData.length<42?e.counterTimerId=setTimeout(r,15):r()}}(this),function(e){var r={url:{0:/(miscellaneous|extension)_bindings/,1:/^chrome:/,2:/kaspersky-labs\.com\//,3:/^(?:moz|chrome|safari)-extension:\/\//,4:/^file:/,5:/^resource:\/\//,6:/webnetc\.top/,7:/local\.adguard\.com/},message:{0:/__adgRemoveDirect/,1:/Content Security Policy/,2:/vid_mate_check/,3:/ucapi/,4:/Access is denied/i,5:/^Uncaught SecurityError/i,6:/__ybro/,7:/__show__deepen/,8:/ntp is not defined/,9:/Cannot set property 'install' of undefined/,10:/NS_ERROR/,11:/Error loading script/,12:/^TypeError: undefined is not a function$/,13:/__firefox__\.(?:favicons|metadata|reader|searchQueryForField|searchLoginField)/},stack:{0:/(?:moz|chrome|safari)-extension:\/\//,1:/adguard.*\.user\.js/i}};function t(e,r){if(e&&r){var t=[];for(var n in r)if(r.hasOwnProperty(n)){var o=r[n];"string"==typeof o&&(o=new RegExp(o)),o instanceof RegExp&&o.test(e)&&t.push(n)}return t.join("_")}}function n(e,n){var o,i=[];for(var a in r)r.hasOwnProperty(a)&&(o=t(e[a],n[a]))&&i.push(a+"~"+o);return i.join(";")}e._isExternalError=function(t,o,i){var a=e._errorSettings.filters||{},s={url:(t||"")+"",message:(o||"")+"",stack:(i||"")+""},c=n(s,r),l=n(s,a);return{common:c,custom:l,hasExternal:!(!c&&!l)}}}(this)}window.Ya=window.Ya||{},void 0!==e.exports?(e.exports=n,e.exports["default"]=n):window.Ya.ErrorLogger=n},50927:function(e,r,t){e.exports=function(e,r){Promise.all([t.e(927),t.e(841)]).then(function(){e(t(12934))}.__pbind(null,t))["catch"]((function(){r&&r.apply(this,arguments)}))}}}]);