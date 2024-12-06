window.stConfig = {"endpointUrl":"https:\/\/a.us.silktide.com\/v1\/events","permittedUrls":["https:\/\/suny.buffalostate.edu\/"],"downloadExtensions":["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],"flushTime":30000,"updated":1733373332,"honourDoNotTrack":false,"upm":false,"propertyKey":"8e69b1f560c8015cfec875f64c3cd071"};
(()=>{"use strict";var e={313:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DeadClick=void 0;class s{constructor({doc:e}){this.resolvePromise=null,this.handleMutation=()=>{this.resolve("mutation")},this.doc=e}attach(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.doc.documentElement,s.config)}detach(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}resolve(e){this.resolvePromise&&(this.resolvePromise(e),this.resolvePromise=null,window.clearTimeout(this.promiseTimeout))}monitorEvents(e,t){this.resolve("cancel"),this.resolvePromise=t,this.promiseTimeout=window.setTimeout((()=>{this.resolve("timeout")}),e)}}t.DeadClick=s,s.config={attributes:!0,childList:!0,subtree:!0}},598:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.handleSomethingHappened=()=>{this.timeout&&clearTimeout(this.timeout),this.idle=!1,this.timeout=window.setTimeout(this.handleNothingHappened,this.config.idleTimeout)},this.handleNothingHappened=()=>{this.idle=!0,this.timeout=null},this.config=e,this.timeout=null,this.idle=!1}isIdle(){return this.idle}attach(){this.config.resetEvents.forEach((e=>{document.addEventListener(e,this.handleSomethingHappened,!0)})),this.handleSomethingHappened()}detach(){this.timeout&&clearTimeout(this.timeout),this.config.resetEvents.forEach((e=>{document.removeEventListener(e,this.handleSomethingHappened,!0)}))}}},378:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(622);t.default=class{reset(){this.lastClickTimestamp=void 0,this.lastCssSelector=void 0,this.coords=void 0}handleError(){if(this.lastClickTimestamp&&this.lastCssSelector&&this.coords){if(this.lastClickTimestamp+3e3>=Date.now()){const[e,t]=this.coords,s=document.querySelector(this.lastCssSelector);window.silktide("frustration",{description:"Dead click",selector:this.lastCssSelector,x:e,y:t,type:"deadClick",text:s?s.innerText:""})}this.reset()}}handleClick(e){e.target instanceof Element&&(this.lastClickTimestamp=Date.now(),this.coords=(0,n.getXYPerc)(e.target,e.pageX,e.pageY),this.lastCssSelector=(0,n.getCssSelector)(e.target))}attach(){window.addEventListener("click",this.handleClick),window.addEventListener("error",this.handleError)}detach(){window.removeEventListener("click",this.handleClick),window.removeEventListener("error",this.handleError)}}},44:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.maxScroll=null,this.handleScroll=()=>{const e=this.getMainScroller();e&&this.update(e)};const e=this.getMainScroller();e&&this.reset(e)}get(){return null===this.maxScroll?void 0:this.maxScroll}reset(e){this.maxScroll=e?this.getScrollPercent(e):null}attach(){window.addEventListener("scroll",this.handleScroll)}detach(){window.removeEventListener("scroll",this.handleScroll)}getMainScroller(){return document.scrollingElement||void 0}update(e){if(e){const t=this.getScrollPercent(e);this.maxScroll=Math.max(this.maxScroll||0,t)}else this.maxScroll=null}getScrollPercent(e){if(0===e.scrollHeight)return 100;const t=(e.scrollTop+e.clientHeight)/e.scrollHeight;return Math.round(100*t)}}},529:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(730),i=["Tab","Enter","Space","Escape","PageUp","PageDown","End","Home","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],o=["A","AREA","BUTTON"];t.default=class{constructor(){this.usedMouse=!1,this.usedTouch=!1,this.usedKeyboard=!1,this.handleMouseMove=()=>{"hybrid"!==n.deviceType&&"mouseOnly"!==n.deviceType||(this.usedMouse=!0,this.detachMouseMove())},this.handleTouchEvent=()=>{this.usedTouch=!0,this.detachTouchEvent()},this.handleKeyboardEvent=e=>{i.includes(e.key)&&(document.activeElement&&e.target===document.activeElement&&!o.includes(document.activeElement.tagName)||(this.usedKeyboard=!0,this.detachKeyboardEvent()))}}getUsedMouse(){return this.usedMouse}getUsedTouch(){return this.usedTouch}getUsedKeyboard(){return this.usedKeyboard}attach(){document.addEventListener("mousemove",this.handleMouseMove,{capture:!0}),document.addEventListener("touchstart",this.handleTouchEvent,{capture:!0}),document.addEventListener("touchmove",this.handleTouchEvent,{capture:!0}),document.addEventListener("keydown",this.handleKeyboardEvent,{capture:!0})}detach(){this.detachMouseMove(),this.detachTouchEvent(),this.detachKeyboardEvent()}detachMouseMove(){document.removeEventListener("mousemove",this.handleMouseMove)}detachTouchEvent(){document.removeEventListener("touchstart",this.handleTouchEvent),document.removeEventListener("touchmove",this.handleTouchEvent)}detachKeyboardEvent(){document.removeEventListener("keydown",this.handleKeyboardEvent)}}},392:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.lastTimestamp=null,this.duration=0}get(){return this.duration}startUsing(){this.duration=0,this.lastTimestamp=Date.now()}stopUsing(){this.lastTimestamp&&(this.duration=Math.round((Date.now()-this.lastTimestamp)/1e3),this.lastTimestamp=null)}}},768:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=s(622),i=["SCRIPT","STYLE"];function o(e){var t;const s=null===(t=e.parentElement)||void 0===t?void 0:t.tagName;if(!s||i.includes(s))return null;const n=e.nodeValue;if(!n)return null;const o=n.trim().replace(/\s\s+/g," ").replace(/\n/g,"");return o.length?o:null}function r(e,t=!1){const s=e.childNodes;let i=[];const{width:a,height:l}=e.getBoundingClientRect();if(a<=32&&l<=32)return i;for(let a=0;a<s.length;a++){const l=s[a],d=o(l),c=t||!(0,n.elemHasFixedParent)(e);if("#text"===l.nodeName&&d&&c&&i.push({textNode:l,parentSelector:l.parentElement?(0,n.getCssSelector)(l.parentElement):"",wordCount:d.split(/\s/g).length}),l.childNodes.length>0){let e;l.nodeType===Node.ELEMENT_NODE&&(e=r(l,t),i=[...i,...e])}}return i}t.default=class{constructor(e){this.readWords=0,this.totalWords=0,this.readElements={},this.debouncedScroll=(0,n.debounce)(this.handleScroll.bind(this),1e3),this.handleObserverIntersection=e=>{this.entries||(this.entries=e),e.forEach((e=>{if(e.isIntersecting){const t=(0,n.getCssSelector)(e.target);t&&(this.readElements[t]=e.target)}}))},this.handleDOMMutation=e=>{var t;for(let s=0;s<e.length;s++){const i=e[s].target;if((0,n.elemHasFixedParent)(i))try{const e=r(i,!0);if(null===(t=this.pageTextNodes)||void 0===t?void 0:t.some((t=>e.map((e=>e.textNode)).includes(t.textNode)))){this.attachIntersectionObserver();break}}catch(e){console.log(e)}}},this.handleLoad=()=>{this.totalWords=this.getTotalWords(),this.mutationObserver=new MutationObserver(this.handleDOMMutation),this.mutationObserver.observe(document.body,{attributes:!0,attributeFilter:["class","style"],subtree:!0}),this.attachIntersectionObserver()},this.doc=e}getAllTextNodes(e){return e.body?r(e.body):[]}getCachedTextNodes(){if(!this.pageTextNodes){const e=this.getAllTextNodes(this.doc);return this.pageTextNodes=e,e}return this.pageTextNodes}getTotalWords(){const e=this.getCachedTextNodes();return this.pageTextNodes=e,e.reduce(((e,t)=>e+t.wordCount),0)}setObserver(e){if(this.intersectionObserver){const t=document.querySelector(e.parentSelector);t&&this.intersectionObserver.observe(t)}}attachIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0,this.pageTextNodes=void 0),this.intersectionObserver=new IntersectionObserver(this.handleObserverIntersection,{rootMargin:"0px",threshold:.2});try{this.pageTextNodes=this.getAllTextNodes(this.doc),this.pageTextNodes.forEach(this.setObserver.bind(this))}catch(e){throw new Error("Failed to set up observers for text nodes")}}attach(){window.addEventListener("scroll",this.debouncedScroll),window.addEventListener("load",this.handleLoad)}detach(){var e,t;window.removeEventListener("scroll",this.debouncedScroll),window.removeEventListener("load",this.handleLoad),null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),null===(t=this.mutationObserver)||void 0===t||t.disconnect()}getReadTextNodes(){const e=[];return Object.values(this.readElements).forEach((t=>{var s;const n=null===(s=this.pageTextNodes)||void 0===s?void 0:s.find((e=>document.querySelector(e.parentSelector)===t));n&&e.push(n)})),e}getReadWords(){return this.getReadTextNodes().reduce(((e,t)=>e+t.wordCount),0)}handleScroll(){this.setTotalWords(this.getTotalWords()),this.setReadToSelector()}setReadWords(e){this.readWords=e}setTotalWords(e){e>this.totalWords&&(this.totalWords=e)}setReadToSelector(){const e=Object.values(this.readElements).sort(((e,t)=>t.getBoundingClientRect().y-e.getBoundingClientRect().y))[0];if(e){const t=(0,n.getCssSelector)(e);t?this.readToSelector=t:console.error("Error: couldnt set lowest selector")}}getReadToSelector(){return this.readToSelector?this.readToSelector:void 0}}},427:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(622),o=s(313),r=n(s(598)),a=n(s(378)),l=n(s(44)),d=n(s(529)),c=n(s(392)),h=n(s(768)),u=s(693),v=["SELECT","TEXTAREA"],m=()=>{},g=["consent","unconsent"];t.default=class{constructor(){this.flushInterval=null,this.maxScroll=new l.default,this.pageDuration=new c.default,this.deadClick=new o.DeadClick({doc:document}),this.jsErrorAfterClick=new a.default,this.initialised=!1,this.readCount=new h.default(document),this.navigationType=new d.default,this.idleTimeout=new r.default({idleTimeout:3e3,resetEvents:["mousedown","mousemove","keypress","scroll","touchstart","click"]}),this.log=m,this.handleSpecialEvent=e=>{var t,s,n,i;switch(e.event){case"consent":"true"!==(null===(t=window.localStorage)||void 0===t?void 0:t.getItem("st-consent"))?(null===(s=window.localStorage)||void 0===s||s.setItem("st-consent","true"),(0,u.doFlush)()):this.removeEvents(window.stEvents,["consent"]);break;case"unconsent":"true"===(null===(n=window.localStorage)||void 0===n?void 0:n.getItem("st-consent"))?(null===(i=window.localStorage)||void 0===i||i.removeItem("st-consent"),(0,u.doFlush)()):this.removeEvents(window.stEvents,["unconsent"])}},this.handleClick=e=>{const t=window.getSelection();if(t&&"Range"===t.type)return;if(e.button>0)return;if(!(e.target instanceof HTMLElement))return;const s=e.target,n=(0,i.getCssSelector)(s),[o,r]=(0,i.getXYPerc)(s,e.pageX,e.pageY),a=(0,i.getHref)(s);return a?(0,i.urlHasDownloadExtension)(a,window.stConfig.downloadExtensions)?(window.silktide("download",{url:a}),void(0,u.doFlush)(!0)):(window.silktide("click",{selector:n,url:a,x:o,y:r}),void(0,u.doFlush)(!0)):"string"==typeof s.getAttribute("data-is-download")&&a?(window.silktide("download",{url:a}),void(0,u.doFlush)(!0)):(a||document.activeElement&&s===document.activeElement&&(window.silktide("click",{selector:n,url:a,x:o,y:r}),(0,u.doFlush)(!1)),void((0,i.elemHasParentTags)(s,["label"])||this.deadClick.monitorEvents(1e3,(e=>{if("focus"===e||"mutation"===e||"cancel"===e)window.silktide("click",{selector:n,x:o,y:r});else if("timeout"===e){const e=(0,i.getNearestMatchingParent)(s,["a","button","input","img","figure","area"]);if(v.includes(s.tagName))return;if(e&&"INPUT"===e.tagName&&"button"!==e.getAttribute("type"))return;window.silktide("frustration",{description:"Dead click",selector:e?(0,i.getCssSelector)(e):n,x:o,y:r,type:"deadClick",text:s.innerText.slice(0,255)})}}))))},this.handleVisibilityChange=()=>{if("hidden"===document.visibilityState)this.stopFlushInterval(),this.idleTimeout.detach(),this.maxScroll.detach(),this.pageDuration.stopUsing(),window.silktide("page_update",{duration:this.pageDuration.get(),maxScroll:this.maxScroll.get(),readWords:this.readCount.getReadWords(),totalWords:this.readCount.getTotalWords(),readToSelector:this.readCount.getReadToSelector(),usedMouse:this.navigationType.getUsedMouse(),usedTouch:this.navigationType.getUsedTouch(),usedKeyboard:this.navigationType.getUsedKeyboard()}),(0,u.doFlush)(!0);else{const e=this.maxScroll.getMainScroller();e&&this.maxScroll.reset(e),this.idleTimeout.attach(),this.maxScroll.attach(),this.pageDuration.startUsing(),this.startFlushInterval()}},this.handleMutation=()=>{this.oldHref!==document.location.href&&(this.oldHref=document.location.href,(0,u.doFlush)(!0))}}initialise(){var e;window.stConfig?(this.log="function"==typeof window.stConfig.log?window.stConfig.log:m,window._phantom||window.__nightmare||window.Cypress||window.navigator.webdriver?this.log("detected automated browser"):"true"!==(null===(e=window.localStorage)||void 0===e?void 0:e.getItem("silktide_analytics_ignore"))?window.stConfig.honourDoNotTrack&&"1"===window.navigator.doNotTrack?this.log("detected do not track request"):(window.stConfig.excludedPaths||[]).some((e=>window.location.pathname.endsWith(e)))?this.log("page excluded"):(window.stEvents||(window.stEvents=[]),window.stEvents.__silktideAnalyticsFlag=!0,this.removeEvents(window.stEvents,g).forEach(this.handleSpecialEvent),window.stEvents.push=e=>(Array.prototype.push.call(window.stEvents,e),g.includes(e.event)&&this.handleSpecialEvent(e),window.stEvents.length),this.startFlushInterval(),this.attach(),this.idleTimeout.attach(),this.maxScroll.attach(),this.readCount.attach(),this.deadClick.attach(),this.jsErrorAfterClick.attach(),this.navigationType.attach(),this.pageDuration.startUsing(),this.initialised=!0):this.log("detected escape hatch")):console.error("Silktide analytics is missing configuration")}destroy(){this.flushInterval&&clearInterval(this.flushInterval),this.detach(),this.idleTimeout.detach(),this.maxScroll.detach(),this.readCount.detach(),this.deadClick.detach(),this.jsErrorAfterClick.detach(),this.navigationType.detach(),this.pageDuration.stopUsing()}attach(){document.addEventListener("click",this.handleClick,{capture:!0}),document.addEventListener("visibilitychange",this.handleVisibilityChange),this.observer=new MutationObserver(this.handleMutation),this.observer.observe(document.documentElement,{childList:!0,subtree:!0})}detach(){var e;document.removeEventListener("click",this.handleClick),document.removeEventListener("visibilitychange",this.handleVisibilityChange),null===(e=this.observer)||void 0===e||e.disconnect()}startFlushInterval(){this.flushInterval=window.setInterval((()=>{(0,u.doFlush)()}),window.stConfig.flushTime||1e4),(0,u.doFlush)()}stopFlushInterval(){this.flushInterval&&window.clearInterval(this.flushInterval)}removeEvents(e,t){const s=[];for(let n=0;n<e.length;n++)t.includes(e[n].event)&&(s.push(Object.assign({},e[n])),e.splice(n,1),n--);return s}}},730:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deviceType=void 0;const s="undefined"!=typeof window?window:{screen:{},navigator:{}},n=(s.matchMedia||(()=>({matches:!1}))).bind(s),i="ontouchstart"in s,o=i||"TouchEvent"in s&&n("(any-pointer: coarse)").matches,r=(s.navigator.maxTouchPoints||0)>0||o,a=s.navigator.userAgent||"",l=n("(pointer: coarse)").matches&&/iPad|Macintosh/.test(a)&&Math.min(s.screen.width||0,s.screen.height||0)>=768,d=(n("(pointer: coarse)").matches||!n("(pointer: fine)").matches&&i)&&!/Windows.*Firefox/.test(a),c=n("(any-pointer: fine)").matches||n("(any-hover: hover)").matches||l||!i;t.deviceType=!r||!c&&d?r?"touchOnly":"mouseOnly":"hybrid"},693:(e,t)=>{function s(){var e;if(!window.stConfig)return null;window.stEvents&&Array.isArray(window.stEvents)&&window.stEvents.__silktideAnalyticsFlag||(console.warn("Silktide analytics detects that `window.stEvents` has been modified. This is not supported. If you must, please do `window.stEvents.length = 0` instead."),window.stEvents=[]);const t=window.stConfig.propertyKey;if(window.stEvents.length>0){const s=window.stEvents.slice(0);window.stEvents.length=0;const n={propertyKey:t,url:window.stConfig.fakeUrl||window.location.href,referrer:0===document.referrer.length?void 0:document.referrer,viewWidth:window.innerWidth,events:s};return!0===window.stConfig.upm&&"true"!==(null===(e=window.localStorage)||void 0===e?void 0:e.getItem("st-consent"))&&(n.upm=!0),n}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.doFlush=t.getFlush=void 0,t.getFlush=s,t.doFlush=function(e=!1){const t=s();if(!t)return;const n=`${window.stConfig.endpointUrl.replace(/\/$/,"")}`;e&&navigator.sendBeacon?navigator.sendBeacon(`${n}/beacon`,JSON.stringify(t)):function(e,t){const s=new XMLHttpRequest;s.open("POST",e,!0),s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("Accept","application/json"),s.send(JSON.stringify(t)),s.onreadystatechange=()=>{s.readyState}}(n,t)}},783:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(s(427));window.silktideInstance=new i.default,window.silktideInstance.initialise()},622:(e,t)=>{function s(e){if(0==arguments.length)throw new TypeError("`cssEscape` requires an argument.");const t=String(e),s=t.length;let n,i=-1,o="";const r=t.charCodeAt(0);if(1==s&&45==r)return"\\"+t;for(;++i<s;)n=t.charCodeAt(i),o+=0!=n?n>=1&&n<=31||127==n||0==i&&n>=48&&n<=57||1==i&&n>=48&&n<=57&&45==r?"\\"+n.toString(16)+" ":n>=128||45==n||95==n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?t.charAt(i):"\\"+t.charAt(i):"�";return o}Object.defineProperty(t,"__esModule",{value:!0}),t.cssEscape=t.urlHasDownloadExtension=t.debounce=t.getCssSelector=t.getXYPerc=t.getHref=t.elemHasFixedParent=t.getNearestMatchingParent=t.elemHasParentTags=void 0,t.elemHasParentTags=function(e,t){if(!e)return!1;const s=t.map((e=>e.toUpperCase()));let n=e,i=!1;for(;n;){if(s.includes(n.tagName)){i=!0;break}n=n.parentElement}return i},t.getNearestMatchingParent=function(e,t){if(!e)return null;const s=t.map((e=>e.toUpperCase()));let n=e,i=null;for(;n;){if(s.includes(n.tagName)){i=n;break}n=n.parentElement}return i},t.elemHasFixedParent=function(e){if(!e)return!1;let t=e,s=!1;for(;t;){if("fixed"===getComputedStyle(t).position){s=!0;break}t=t.parentElement}return s},t.getHref=function(e){let t=e;for(;t;){if("A"===t.tagName)return t.href;if("AREA"===t.tagName)return t.href;t=t.parentElement}},t.getXYPerc=function(e,t,s){const n=e.getBoundingClientRect(),i=t-n.left-window.scrollX,o=s-n.top-window.scrollY;return[Math.round(i/n.width*100),Math.round(o/n.height*100)]},t.getCssSelector=function(e){const t=[];let n=e;for(;n;){if(n.id){const e="#"+s(n.id);if(1===document.querySelectorAll(e).length){t.unshift(e);break}}if(n&&"tagName"in n&&n.parentElement){const e=Array.from(n.parentElement.children),s="HEAD"===n.tagName||"BODY"===n.tagName||"HTML"===n.tagName,i=e.some((e=>n!==e&&e.tagName===n.tagName)),o=!s&&i;t.unshift(`${n.tagName.toLowerCase()}${o?`:nth-child(${e.indexOf(n)+1})`:""}`)}n=n.parentElement}return t.join(">")},t.debounce=function(e,t=3e3){let s;return(...n)=>{clearTimeout(s),s=setTimeout((()=>{e.apply(this,n)}),t)}},t.urlHasDownloadExtension=function(e,t){try{const s=new URL(e);return t.some((e=>s.pathname.endsWith(`.${e}`)))}catch(e){return!1}},t.cssEscape=s}},t={};!function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}(783)})();