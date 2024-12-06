(()=>{var e={999:e=>{e.exports={env:"production",lang:"en",baseUrl:"https://app.ybug.io",apiVersion:"v1",launcherBundle:"/api/v1/button/{ID}.js",appBundle:"/api/v1/app/{ID}.js",feedbackEndpoint:"/api/v1/report/post",snapshotEndpoint:"/api/v1/report/snapshot"}},176:e=>{e.exports="body,html{margin:0;padding:0}[class^=ybug-]{box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;outline:none;transition:none;vertical-align:baseline}.ybug-button{background-color:#3023ae;height:34px;border-radius:5px 5px 0 0;box-shadow:0 0 3px #9b9b9b;cursor:pointer;color:#fff;display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;text-align:center;-webkit-appearance:none;transition:transform .15s ease-in-out;padding:0 15px;margin:0 10px;font-size:16px;font-weight:600;line-height:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;bottom:0}.ybug-button:focus,.ybug-button:hover{transform:scale(1.05)}.ybug-button>img{vertical-align:middle}.ybug-button.is-top-middle{top:0;border-radius:0 0 5px 5px}"},992:e=>{e.exports="#__ybug-launcher{border:none;height:40px;position:fixed;bottom:0;opacity:0;right:15px;width:0;z-index:2147483647;color-scheme:light!important}#__ybug-launcher.ybug-launcher--active{opacity:1;transform:scaleX(1) scaleY(1) scaleZ(1)}#__ybug-launcher.ybug-launcher--bottom-left{left:15px}#__ybug-launcher.ybug-launcher--right-middle{right:0;top:50%;transform-origin:center;transform:translate3d(50%,-50%,0) rotate(270deg) translateY(-50%)}#__ybug-launcher.ybug-launcher--left-middle{left:0;top:50%;transform-origin:center;transform:translate3d(-50%,-50%,0) rotate(90deg) translateY(-50%)}#__ybug-launcher.ybug-launcher--top-middle{top:0;left:50%;transform-origin:center;transform:translateX(-50%)}#__ybug-app{width:100%!important;position:fixed;top:0;right:0;bottom:0;left:0;height:100%!important;z-index:2147483644;border:none;background:hsla(0,0%,4%,.5);color-scheme:light!important}"},225:e=>{e.exports='.loader-container{position:absolute;bottom:0;right:0;width:100px;height:55px}.loader-container.is-bottom-left,.loader-container.is-left-middle{left:0}.loader-container.is-top-middle{top:45%;left:50%;transform:translateX(-50%)}.loader,.loader:after,.loader:before{border-radius:50%;width:2.5em;height:2.5em;animation:a 1s infinite ease-in-out;animation-fill-mode:both}.loader{color:#fff;font-size:6px;position:relative;text-indent:-9999em;transform:translateZ(0);animation-delay:-.16s;margin:1em auto}.loader:after,.loader:before{content:"";position:absolute;top:0}.loader:before{left:-3.5em;animation-delay:-.32s}.loader:after{left:3.5em}@keyframes a{0%,80%,to{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}'}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t(this,"_env",void 0),t(this,"_config",void 0),this._config=n(999),this._env=this._config.env}var i,r;return i=o,(r=[{key:"getEnv",value:function(){return this._env}},{key:"get",value:function(e){return this._config[e]}}])&&e(i.prototype,r),o}();function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e&&e.length>t?e.replace(new RegExp("^(.{"+t+"}[^\\s\",'\\.:_-]*).*"),"$1"+n):e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){if(!Array.isArray(e))return"";for(var o,r=[],a={}.constructor,s=[].constructor,l=function(e,t){return!t||t.constructor!==a&&t.constructor!==s?"number"==typeof t&&Number.isFinite(t)?t:String(t):t},c=0;c<e.length;c++)try{var u=(((o=JSON.stringify(e[c],l)).startsWith("'")||o.startsWith('"'))&&(o=o.substring(1)),(o.endsWith("'")||o.endsWith('"'))&&(o=o.slice(0,-1)),o);r.push(i(u,n,"...(truncated)"))}catch(e){r.push("[value cannot be serialized]")}return r.join(t)}function l(e){try{var t=e.match(/([\w\/.:_?=#&<>-]+:\d+:\d+)/);if(t&&t.length>0)return t[0]}catch(e){}return null}Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});const c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_maxLength",0),a(this,"_maxJsonArgumentLength",2e4),a(this,"_consoleLog",[]),a(this,"_lastItem",void 0),a(this,"_levels",["debug","info","warn","error","log"]),a(this,"_debug",!1),a(this,"_originalConsole",void 0),a(this,"_originalConsoleMethods",{}),a(this,"_onerrorListener",void 0),this._maxLength=t||this._maxLength,this._originalConsole=window.console||{},this._originalConsole)this._originalConsoleMethods[n]=this._originalConsole[n]}var t,n;return t=e,n=[{key:"_isSameItem",value:function(e,t){return!(!e||!t)&&e.message==t.message&&e.level==t.level&&e.stack==t.stack&&e.file==t.file}},{key:"_addItem",value:function(e,t){var n={message:e,logger:t.logger,level:t.level,stack:t.stack,file:t.file,repeatCount:1};this._isSameItem(this._lastItem,n)?this._lastItem.repeatCount++:(this._consoleLog.length>=this._maxLength&&this._consoleLog.shift(),this._consoleLog.push(n),this._lastItem=n)}},{key:"install",value:function(){this._installOnerrorListener(),this._installConsoleListener()}},{key:"_installOnerrorListener",value:function(){var e=this;this._onerrorListener=function(t){var n={logger:"onerror",level:"error"};t.error&&(n.stack=t.error.stack,n.file=l(n.stack)),e._addItem(t.message,n)},window.addEventListener("error",this._onerrorListener)}},{key:"_uninstallOnerrorListener",value:function(){this._onerrorListener&&window.removeEventListener("error",this._onerrorListener)}},{key:"_installConsoleListener",value:function(){if("console"in window&&console.log)for(var e=0;e<this._levels.length;e++)this._wrap(console,this._levels[e],this._addItem.bind(this))}},{key:"_wrap",value:function(e,t,n){var o=e[t],i=e;if(t in e){var r=this;e[t]=function(){var e=[].slice.call(arguments),a=s(e," ",r._maxJsonArgumentLength),c={logger:"console",level:t,arguments:e};c.file=l(r._generateSyntheticStackTrace()),"error"!==t&&"warn"!==t||(c.stack=r._generateSyntheticStackTrace(a)),n&&n(a,c),o&&Function.prototype.apply.call(o,i,e)}}}},{key:"getConsoleLog",value:function(){return this._consoleLog}},{key:"_generateSyntheticStackTrace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o="Synthetic stack trace";try{throw new Error(o)}catch(i){try{(n=i.stack.split("\n"))[0].indexOf(o)>=0?t+=2:t+=1,n.splice(0,t),e&&n.unshift(e)}catch(e){this._logDebug("error",e)}}return n.join("\n")}},{key:"log",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(this._levels.indexOf(e)<0)this._logDebug("error","Incorrect log level or empty error");else{var o={message:s([t=t||""]," ",this._maxJsonArgumentLength),logger:"custom",level:e};o.file=l(t.stack||this._generateSyntheticStackTrace(null,n)),(t.stack||"error"===e||"warn"===e)&&(o.stack=t.stack||this._generateSyntheticStackTrace(o.message,n)),this._addItem(o.message,o)}}},{key:"uninstall",value:function(){this._uninstallOnerrorListener(),this._restoreConsole()}},{key:"_logDebug",value:function(e){this._originalConsoleMethods[e]&&this._debug&&Function.prototype.apply.call(this._originalConsoleMethods[e],this._originalConsole,[].slice.call(arguments,1))}},{key:"_restoreConsole",value:function(){for(var e in this._originalConsoleMethods)this._originalConsole[e]=this._originalConsoleMethods[e]}}],n&&r(t.prototype,n),e}();function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_lang","en"),this.setLang(t),this._dictionary=e._translations[this.getLang()],this._dictionary=h(h(h({},e._translations[this.getLang()]),o[this.getLang()]||{}),n)}var t,n,o;return t=e,n=[{key:"getLang",value:function(){return this._lang}},{key:"getLanguageChunk",value:function(){return e._langChunks[this._lang]||this._lang}},{key:"setLang",value:function(t){var n=e.getLanguageFromLocale(t);e.isSupported(n)>=0?this._lang=n:console.error("Language ".concat(n," is not supported"))}},{key:"__",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._dictionary[e];return t.length,n}}],o=[{key:"getLanguageFromLocale",value:function(e){return!!e&&e.split("-")[0]}},{key:"autodetect",value:function(){try{var t=window.navigator.language||window.navigator.userLanguage,n=e.getLanguageFromLocale(t);if(e.isSupported(n))return n}catch(e){}return!1}},{key:"isSupported",value:function(t){return t=e.getLanguageFromLocale(t),void 0!==e._translations[t]}}],n&&g(t.prototype,n),o&&g(t,o),e}();d(f,"_langChunks",{pt:"pt-BR",nb:"no",nn:"no"}),d(f,"_translations",{cs:{"launcherButton.Title":"Zpětná vazba"},de:{"launcherButton.Title":"Feedback"},en:{"launcherButton.Title":"Feedback"},es:{"launcherButton.Title":"Feedback"},fr:{"launcherButton.Title":"Feedback"},hr:{"launcherButton.Title":"Povratna veza"},hu:{"launcherButton.Title":"Visszajelzés"},it:{"launcherButton.Title":"Feedback"},pl:{"launcherButton.Title":"Wyślij opinię"},sk:{"launcherButton.Title":"Spätná väzba"},nl:{"launcherButton.Title":"Feedback"},ru:{"launcherButton.Title":"Feedback"},uk:{"launcherButton.Title":"Зворотній зв'язок"},pt:{"launcherButton.Title":"Feedback"},tr:{"launcherButton.Title":"Geri Bildirim"},ro:{"launcherButton.Title":"Feedback"},no:{"launcherButton.Title":"Tilbakemelding"},nb:{"launcherButton.Title":"Tilbakemelding"},nn:{"launcherButton.Title":"Tilbakemelding"},sv:{"launcherButton.Title":"Feedback"},zh:{"launcherButton.Title":"反馈信息"},ja:{"launcherButton.Title":"フィードバック"},bg:{"launcherButton.Title":"Обратна връзка"},da:{"launcherButton.Title":"Feedback"},el:{"launcherButton.Title":"Ανατροφοδότηση"},et:{"launcherButton.Title":"Tagasiside"},fi:{"launcherButton.Title":"Palaute"},lt:{"launcherButton.Title":"Atsiliepimai"},lv:{"launcherButton.Title":"Atsauksmes"},sl:{"launcherButton.Title":"Povratne informacije"}});var _=setTimeout;function p(e){return Boolean(e&&void 0!==e.length)}function v(){}function y(e){if(!(this instanceof y))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],T(e,this)}function b(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,y._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void w(t.promise,e)}m(t.promise,o)}else(1===e._state?m:w)(t.promise,e._value)}))):e._deferreds.push(t)}function m(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof y)return e._state=3,e._value=t,void k(e);if("function"==typeof n)return void T((o=n,i=t,function(){o.apply(i,arguments)}),e)}e._state=1,e._value=t,k(e)}catch(t){w(e,t)}var o,i}function w(e,t){e._state=2,e._value=t,k(e)}function k(e){2===e._state&&0===e._deferreds.length&&y._immediateFn((function(){e._handled||y._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)b(e,e._deferreds[t]);e._deferreds=null}function L(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function T(e,t){var n=!1;try{e((function(e){n||(n=!0,m(t,e))}),(function(e){n||(n=!0,w(t,e))}))}catch(e){if(n)return;n=!0,w(t,e)}}y.prototype.catch=function(e){return this.then(null,e)},y.prototype.then=function(e,t){var n=new this.constructor(v);return b(this,new L(e,t,n)),n},y.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},y.all=function(e){return new y((function(t,n){if(!p(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var i=o.length;function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){r(e,t)}),n)}o[e]=a,0==--i&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)r(a,o[a])}))},y.resolve=function(e){return e&&"object"==typeof e&&e.constructor===y?e:new y((function(t){t(e)}))},y.reject=function(e){return new y((function(t,n){n(e)}))},y.race=function(e){return new y((function(t,n){if(!p(e))return n(new TypeError("Promise.race accepts an array"));for(var o=0,i=e.length;o<i;o++)y.resolve(e[o]).then(t,n)}))},y._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){_(e,0)},y._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};const O=y;function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"_eventSource",void 0),j(this,"_eventOrigin",void 0),j(this,"_report",void 0),j(this,"_ybugTarget","intercom-plugin@ybug"),j(this,"_intercomTarget","ybug-sheet@intercom"),j(this,"_isOpened",!1)}var t,n;return t=e,n=[{key:"_postMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._eventSource.postMessage({target:this._intercomTarget,source:this._ybugTarget,action:e,data:t},this._eventOrigin)}},{key:"install",value:function(e){var t=this;window.parent.addEventListener("message",(function(n){if(n.data.target===t._ybugTarget&&n.data.source===t._intercomTarget&&"open"===n.data.action&&(t._eventSource=n.source,t._eventOrigin=n.origin,t._postMessage("ping"),!t._isOpened)){t._isOpened=!0,window.parent.Intercom("hide");var o=function(e){return e.intercom={conversationId:n.data.conversationId}},i=function(e){t._report=e};e.on("beforesend",o),e.on("aftersend",i),e.on("close",(function n(){var r,a;e.off("beforesend",o),e.off("aftersend",i),e.off("close",n),window.parent.Intercom("show"),t._postMessage("close",{id:null===(r=t._report)||void 0===r?void 0:r.id,url:null===(a=t._report)||void 0===a?void 0:a.url}),t._eventSource=null,t._eventOrigin=null,t._isOpened=!1})),e.open()}}))}}],n&&x(t.prototype,n),e}();function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=window.Promise||O,I=n(992),D=n(176),F=n(225),M=["bottom-left","bottom-right","top-middle","left-middle","right-middle","middle-right"];!function(e,t){function n(t,n){var o=e.createElement("style");o.type="text/css",o.id="__ybug-injected-css",o.styleSheet?o.styleSheet.cssText=n:o.appendChild(e.createTextNode(n)),t.appendChild(o)}function i(t){var n=e.createElement("iframe");return n.setAttribute("id",t),n.setAttribute("border","0"),n.setAttribute("scrolling","no"),n.setAttribute("allowtransparency","true"),n.setAttribute("title","Ybug feedback widget"),n}function r(e,t){e.setAttribute("class",e.getAttribute("class")+" "+t)}if(!t.ybug_settings)return console.error("Ybug error: no global ybug_settings found..."),!1;if(!t.ybug_settings.id)return console.error("Ybug error: no account id given..."),!1;var a={"launcher_position":"bottom-right","hide_launcher":false,"language_override":"auto","shortcut":false,"primary_color":"#3023AE","secondary_color":"#FFFFFF","console_log":true,"translate":[],"font_family":"Mukta"},s={"plan":4,"max_console_size":500},l=1723849417;try{var u=function(){function a(e,t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),P(this,"_isOpen",!1),P(this,"_isBooted",!1),P(this,"_position","bottom-right"),P(this,"_listeners",[]),P(this,"_translate",void 0),P(this,"_config",void 0),P(this,"_settings",void 0),P(this,"_account",void 0),P(this,"_consoleLogger",void 0),P(this,"_launcher",void 0),P(this,"_widget",void 0),P(this,"_shortcutListener",(function(e){e.altKey&&89==(e.which||e.keyCode)&&i.open()})),this._config=new o,this._account=n;var r=E(E({},t.translate||{}),e.translate||{});for(var s in t)t.hasOwnProperty(s)&&void 0===e[s]&&(e[s]=t[s]);var l=e.language_override&&f.isSupported(e.language_override)?e.language_override:f.autodetect()||this._config.get("lang");this._translate=new f(l,r,e.translations),this._account.plan<3&&(e.console_log=!1),this._settings=e}var s,u;return s=a,u=[{key:"_installConsoleLogger",value:function(){this._consoleLogger=new c(this._account.max_console_size),(void 0===this._settings.console_log||this._settings.console_log)&&this._consoleLogger.install()}},{key:"getConsoleLog",value:function(){return this._consoleLogger?this._consoleLogger.getConsoleLog():[]}},{key:"on",value:function(e,t){if("function"!=typeof t)return!1;this._listeners.push({type:e,callback:t})}},{key:"off",value:function(e,t){for(var n=this._listeners.length-1;n>=0;n--)this._listeners[n].type!==e||void 0!==t&&this._listeners[n].callback!==t||this._listeners.splice(n,1)}},{key:"_emit",value:function(e,n){for(var o=this,i=A.resolve(),r=function(r){if(o._listeners[r].type===e)try{i=i.then((function(e){return!1===e?A.resolve(!1):A.resolve(o._listeners[r].callback.call(t.Ybug,n))}))}catch(e){console.error(e)}},a=0;a<this._listeners.length;a++)r(a);return i}},{key:"_pingExtension",value:function(){t.parent.postMessage({type:"ybug:ping"},t.origin)}},{key:"open",value:function(t){var o=this;if(!this._isOpen&&this._isBooted){this._isOpen=!0,this._skipTo=t,this._launcher.style.display="none",this._pingExtension();var r=i("__ybug-app");r.onload=function(){var e;r.contentDocument.innerHTML="<!DOCTYPE html><html><head></head><body></body></html>";var t=r.contentDocument,i=r.contentDocument.getElementsByTagName("head")[0],a=r.contentDocument.getElementsByTagName("body")[0];n(i,F);var s=t.createElement("div");s.innerHTML='<div class="loader">Loading...</div>',s.setAttribute("class","loader-container is-".concat(o._position));var c=t.createElement("div");c.setAttribute("id","app"),a.appendChild(c);var u=null!==(e=o._settings.font_family)&&void 0!==e?e:"Mukta";if(u){var h=t.createElement("link");!function(e,t){for(var n in t)t.hasOwnProperty(n)&&e.setAttribute(n,t[n])}(h,{type:"text/css",rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=".concat(u,":400,600&subset=latin-ext")}),i.appendChild(h)}if("en"!==o._translate.getLang()){var g=t.createElement("script");g.setAttribute("src","".concat(o._config.get("baseUrl"),"/assets/widget/js/lang/").concat(o._translate.getLanguageChunk(),"-json.js?v=").concat(l)),o._settings.nonce&&(g.nonce=o._settings.nonce),a.appendChild(g)}var d=t.createElement("script");d.setAttribute("src","".concat(o._config.get("baseUrl"),"/api/v1/widget/").concat(o._settings.id,".js?v=").concat(l)),o._settings.nonce&&(d.nonce=o._settings.nonce),a.appendChild(d),c.appendChild(s),s.onclick=function(e){r.parentNode.removeChild(r),o._isOpen=!1,o.show("launcher")},r.focus()},e.body.appendChild(r),this._widget=r}}},{key:"close",value:function(){this._widget&&(this._widget.parentNode.removeChild(this._widget),this._widget=null),this._isOpen=!1,this._launcher&&!this._settings.hide_launcher&&this.show("launcher"),this.off("user:changed"),this.off("settings:changed")}},{key:"_toggleWidget",value:function(e,t){t=t||"everything";var n=e?"":"none",o=this._isOpen&&this._widget;switch(t){case"everything":o&&(this._widget.style.display=n);case"launcher":if(o||!this._launcher)return;this._launcher.style.display=n}}},{key:"hide",value:function(e){this._toggleWidget(!1,e)}},{key:"show",value:function(e){this._toggleWidget(!0,e)}},{key:"boot",value:function(){var n=this;this.destroy(),this._installConsoleLogger();var o=function(){for(var e=["load","open","beforesend","aftersend","cancel","close"],t=0;t<e.length;t++)"function"==typeof n._settings["on"+e[t]]&&n.on(e[t],n._settings["on"+e[t]]);n._mountLauncher(),n._addOpenListeners(),n._addShortcutListener(),n._isBooted=!0};e.body?o():t.addEventListener("DOMContentLoaded",o.bind(this))}},{key:"_addOpenListeners",value:function(){if(e.querySelectorAll)for(var t=e.querySelectorAll("[data-ybug=open]"),n=this,o=0;o<t.length;o++)t[o].addEventListener("click",(function(e){this.className=this.className+" __ybug-is-hidden",n.open(),e.preventDefault()}))}},{key:"_addShortcutListener",value:function(){this._settings.shortcut&&e.addEventListener("keyup",this._shortcutListener)}},{key:"_removeShortcutListener",value:function(){e.removeEventListener("keyup",this._shortcutListener)}},{key:"_mountLauncher",value:function(){var t=this,o=i("__ybug-launcher");(this._settings.hide_launcher||this._settings.hide)&&(o.style.display="none"),this._settings.launcher_position&&-1!==M.indexOf(this._settings.launcher_position)&&(this._position=this._settings.launcher_position,this._position="middle-right"===this._position?"right-middle":this._position,r(o,"ybug-launcher--"+this._position)),o.onload=function(){o.contentDocument.innerHTML='<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body></body></html>';var e=o.contentDocument.getElementsByTagName("head")[0],i=o.contentDocument.getElementsByTagName("body")[0];i.innerHTML="<button type='button' class='ybug-button is-".concat(t._position,"' title='").concat(t._translate.__("launcherButton.Title"),"' tabindex='0'>").concat(t._translate.__("launcherButton.Title"),"</button>"),n(e,D);var a=i.getElementsByTagName("button")[0];t._settings.primary_color&&(a.style.backgroundColor=t._settings.primary_color),t._settings.secondary_color&&(a.style.color=t._settings.secondary_color);var s=a.offsetWidth>0?a.offsetWidth+20:0;o.style.setProperty("width","".concat(s,"px"),"important"),a.addEventListener("click",(function(){t.open()})),setTimeout((function(){r(o,"ybug-launcher--active")}),100),t._emit("load",t)},n(e.getElementsByTagName("head")[0],I),e.body.appendChild(o),this._launcher=o}},{key:"destroy",value:function(){this.close(),this._launcher&&(this._launcher.parentNode.removeChild(this._launcher),this._launcher=null),this._consoleLogger&&(this._consoleLogger.uninstall(),this._consoleLogger=null),this._removeShortcutListener(),this._listeners=[],this._isBooted=!1}},{key:"setUser",value:function(e){this._settings.user=e,this._emit("user:changed",e)}},{key:"setExtensionId",value:function(e){this._settings.extension_id=e,this._emit("settings:changed",{extension_id:e})}},{key:"log",value:function(e,t){this._consoleLogger&&this._consoleLogger.log(e,t,2)}}],u&&S(s.prototype,u),a}();if(t.Ybug)return;t.Ybug=new u(t.ybug_settings,a,s),t.Ybug.boot(),(new B).install(t.Ybug)}catch(e){console.error(e)}}(document,window)})()})();