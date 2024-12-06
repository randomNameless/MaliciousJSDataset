"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3040],{"88oo":(e,t,n)=>{n.d(t,{zk:()=>ae});var r,o,i=n("Istr"),l=n("m9J1"),a="[Amplitude] Element Clicked",u="[Amplitude] Element Tag",c="[Amplitude] Element Text",s="[Amplitude] Element Selector",d="[Amplitude] Page URL",f="https://app.amplitude.com",v={US:f,EU:"https://app.eu.amplitude.com",STAGING:"https://apps.stag2.amplitude.com"},p="amp-visual-tagging-selector-highlight",g=n("1/Jp"),m=n("OkeP"),h=n("WzCG");function y(e,t){if(e.nodeType!==Node.ELEMENT_NODE)throw new Error("Can't generate CSS selector for non-element node type.");if("html"===e.tagName.toLowerCase())return"html";var n={root:document.body,idName:function(e){return!0},className:function(e){return!0},tagName:function(e){return!0},attr:function(e,t){return!1},seedMinLength:1,optimizedMinLength:2,threshold:1e3,maxNumberOfTries:1e4};r=(0,i.Cl)((0,i.Cl)({},n),t),o=function(e,t){if(e.nodeType===Node.DOCUMENT_NODE)return e;if(e===t.root)return e.ownerDocument;return e}(r.root,n);var l=b(e,"all",(function(){return b(e,"two",(function(){return b(e,"one",(function(){return b(e,"none")}))}))}));if(l){var a=j(N(l,e));return a.length>0&&(l=a[0]),A(l)}throw new Error("Selector was not found.")}function b(e,t,n){for(var o=null,l=[],a=e,u=0,c=function(){var e,c,s=C(function(e){var t=e.getAttribute("id");if(t&&r.idName(t))return{name:"#"+CSS.escape(t),penalty:0};return null}(a))||C.apply(void 0,(0,i.fX)([],(0,i.zs)(function(e){var t=Array.from(e.attributes).filter((function(e){return r.attr(e.name,e.value)}));return t.map((function(e){return{name:"[".concat(CSS.escape(e.name),'="').concat(CSS.escape(e.value),'"]'),penalty:.5}}))}(a)),!1))||C.apply(void 0,(0,i.fX)([],(0,i.zs)(function(e){var t=Array.from(e.classList).filter(r.className);return t.map((function(e){return{name:"."+CSS.escape(e),penalty:1}}))}(a)),!1))||C(function(e){var t=e.tagName.toLowerCase();if(r.tagName(t))return{name:t,penalty:2};return null}(a))||[{name:"*",penalty:3}],d=function(e){var t=e.parentNode;if(!t)return null;var n=t.firstChild;if(!n)return null;var r=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&r++,n!==e);)n=n.nextSibling;return r}(a);if("all"==t)d&&(s=s.concat(s.filter(S).map((function(e){return E(e,d)}))));else if("two"==t)s=s.slice(0,1),d&&(s=s.concat(s.filter(S).map((function(e){return E(e,d)}))));else if("one"==t){var f=(0,i.zs)(s=s.slice(0,1),1)[0];d&&S(f)&&(s=[E(f,d)])}else"none"==t&&(s=[{name:"*",penalty:3}],d&&(s=[E(s[0],d)]));try{for(var v=(e=void 0,(0,i.Ju)(s)),p=v.next();!p.done;p=v.next()){(f=p.value).level=u}}catch(t){e={error:t}}finally{try{p&&!p.done&&(c=v.return)&&c.call(v)}finally{if(e)throw e.error}}if(l.push(s),l.length>=r.seedMinLength&&(o=w(l,n)))return"break";a=a.parentElement,u++};a;){if("break"===c())break}return o||(o=w(l,n)),!o&&n?n():o}function w(e,t){var n,o;if(e.reduce((function(e,t){return e*t.length}),1)>r.threshold)return t?t():null;var l=j(P(e));try{for(var a=(0,i.Ju)(l),u=a.next();!u.done;u=a.next()){var c=u.value;if(k(c))return c}}catch(e){n={error:e}}finally{try{u&&!u.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}return null}function A(e){for(var t=e[0],n=t.name,r=1;r<e.length;r++){var o=e[r].level||0;n=t.level===o-1?"".concat(e[r].name," > ").concat(n):"".concat(e[r].name," ").concat(n),t=e[r]}return n}function O(e){return e.map((function(e){return e.penalty})).reduce((function(e,t){return e+t}),0)}function k(e){var t=A(e);switch(o.querySelectorAll(t).length){case 0:throw new Error("Can't select any node with this selector: ".concat(t));case 1:return!0;default:return!1}}function E(e,t){return{name:e.name+":nth-child(".concat(t,")"),penalty:e.penalty+1}}function S(e){return"html"!==e.name&&!e.name.startsWith("#")}function C(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.filter(T);return n.length>0?n:null}function T(e){return null!=e}function P(e,t){var n,r,o,l,a,u;return void 0===t&&(t=[]),(0,i.YH)(this,(function(c){switch(c.label){case 0:if(!(e.length>0))return[3,9];c.label=1;case 1:c.trys.push([1,6,7,8]),n=(0,i.Ju)(e[0]),r=n.next(),c.label=2;case 2:return r.done?[3,5]:(o=r.value,[5,(0,i.Ju)(P(e.slice(1,e.length),t.concat(o)))]);case 3:c.sent(),c.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return l=c.sent(),a={error:l},[3,8];case 7:try{r&&!r.done&&(u=n.return)&&u.call(n)}finally{if(a)throw a.error}return[7];case 8:return[3,11];case 9:return[4,t];case 10:c.sent(),c.label=11;case 11:return[2]}}))}function j(e){return(0,i.fX)([],(0,i.zs)(e),!1).sort((function(e,t){return O(e)-O(t)}))}function N(e,t,n){var l,a,u;return void 0===n&&(n={counter:0,visited:new Map}),(0,i.YH)(this,(function(c){switch(c.label){case 0:if(!(e.length>2&&e.length>r.optimizedMinLength))return[3,5];l=1,c.label=1;case 1:return l<e.length-1?n.counter>r.maxNumberOfTries?[2]:(n.counter+=1,(a=(0,i.fX)([],(0,i.zs)(e),!1)).splice(l,1),u=A(a),n.visited.has(u)?[2]:k(a)&&function(e,t){return o.querySelector(A(e))===t}(a,t)?[4,a]:[3,4]):[3,5];case 2:return c.sent(),n.visited.set(u,!0),[5,(0,i.Ju)(N(a,t,n))];case 3:c.sent(),c.label=4;case 4:return l++,[3,1];case 5:return[2]}}))}var L=["input","select","textarea"],x=function(e,t){return function(n,r){var o,i,l,a=e.pageUrlAllowlist,u=e.shouldTrackEventResolver,c=null===(i=null===(o=null==r?void 0:r.tagName)||void 0===o?void 0:o.toLowerCase)||void 0===i?void 0:i.call(o);if(!c)return!1;if(u)return u(n,r);if(!R(window.location.href,a))return!1;var s=String(null==r?void 0:r.getAttribute("type"))||"";if("string"==typeof s)switch(s.toLowerCase()){case"hidden":case"password":return!1}if(t){var d=t.some((function(e){var t;return!!(null===(t=null==r?void 0:r.matches)||void 0===t?void 0:t.call(r,e))}));if(!d)return!1}switch(c){case"input":case"select":case"textarea":return"change"===n||"click"===n;default:var f=null===(l=null===window||void 0===window?void 0:window.getComputedStyle)||void 0===l?void 0:l.call(window,r);return!(!f||"pointer"!==f.getPropertyValue("cursor")||"click"!==n)||"click"===n}}},_=function(e){if(null==e)return!1;if("string"==typeof e){if(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e||"").replace(/[- ]/g,"")))return!1;if(/(^\d{3}-?\d{2}-?\d{4}$)/.test(e))return!1}return!0},H=function(e){var t,n,r,o=null===(n=null===(t=null==e?void 0:e.tagName)||void 0===t?void 0:t.toLowerCase)||void 0===n?void 0:n.call(t),i=e instanceof HTMLElement&&"true"===(null===(r=e.getAttribute("contenteditable"))||void 0===r?void 0:r.toLowerCase());return!L.includes(o)&&!i},z=function(e){var t="";return H(e)&&e.childNodes&&e.childNodes.length&&e.childNodes.forEach((function(e){var n,r="";(n=e)&&3===n.nodeType?e.textContent&&(r=e.textContent):r=z(e),t+=r.split(/(\s+)/).filter(_).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)})),t},D=function(e,t){var n,r,o="";try{return o=y(e,{className:function(e){return e!==p},maxNumberOfTries:1e3})}catch(e){if(t){var i=e;t.warn("Failed to get selector with finder, use fallback strategy instead: ".concat(i.toString()))}}var l=null===(r=null===(n=null==e?void 0:e.tagName)||void 0===n?void 0:n.toLowerCase)||void 0===r?void 0:r.call(n);l&&(o=l);var a=e.getAttribute("id"),u=e.getAttribute("class");if(a)o="#".concat(a);else if(u){var c=u.split(" ").filter((function(e){return e!==p})).join(".");c&&(o="".concat(o,".").concat(c))}return o},R=function(e,t){return!t||!t.length||t.some((function(t){return"string"==typeof t?e===t:e.match(t)}))},M=function(e){return Object.keys(e).reduce((function(t,n){var r=e[n];return function(e){return null==e||"object"==typeof e&&0===Object.keys(e).length||"string"==typeof e&&0===e.trim().length}(r)||(t[n]=r),t}),{})},I=function(e){var t,n=e.parentElement;if(!n)return"";try{t=n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6")}catch(e){t=null}if(t){var r=t.textContent||"";return _(r)?r:""}return I(n)},q=function(e,t){return e?t.some((function(t){var n;return null===(n=null==e?void 0:e.matches)||void 0===n?void 0:n.call(e,t)}))?e:q(null==e?void 0:e.parentElement,t):null},X=function(e,t){var n,r,o;if(!e)return{};var i=null===(o=null===(r=null==e?void 0:e.tagName)||void 0===r?void 0:r.toLowerCase)||void 0===o?void 0:o.call(r),l=D(e,t),a=((n={})[u]=i,n[c]=z(e),n[s]=l,n[d]=window.location.href.split("?")[0],n);return M(a)};var J=function(e){return!(null===e.event.target||!e.closestTrackedAncestor)},U=function(){function e(e){var t=(void 0===e?{}:e).origin,n=void 0===t?f:t,r=this;this.endpoint=f,this.requestCallbacks={},this.onSelect=function(e){r.notify({action:"element-selected",data:e})},this.onTrack=function(e,t){"selector-mode-changed"===e?r.notify({action:"track-selector-mode-changed",data:t}):"selector-moved"===e&&r.notify({action:"track-selector-moved",data:t})},this.endpoint=n}return e.prototype.notify=function(e){var t,n,r,o;null===(n=null===(t=this.logger)||void 0===t?void 0:t.debug)||void 0===n||n.call(t,"Message sent: ",JSON.stringify(e)),null===(o=null===(r=window.opener)||void 0===r?void 0:r.postMessage)||void 0===o||o.call(r,e,this.endpoint)},e.prototype.sendRequest=function(e,t,n){var r=this;void 0===n&&(n={timeout:15e3});var o="".concat(Date.now(),"-").concat(Math.random().toString(36).substr(2,9)),i={id:o,action:e,args:t};return new Promise((function(t,l){r.requestCallbacks[o]={resolve:t,reject:l},r.notify(i),(null==n?void 0:n.timeout)>0&&setTimeout((function(){l(new Error("".concat(e," timed out (id: ").concat(o,")"))),delete r.requestCallbacks[o]}),n.timeout)}))},e.prototype.handleResponse=function(e){var t;this.requestCallbacks[e.id]?(this.requestCallbacks[e.id].resolve(e.responseData),delete this.requestCallbacks[e.id]):null===(t=this.logger)||void 0===t||t.warn("No callback found for request id: ".concat(e.id))},e.prototype.setup=function(e){var t=this,n=void 0===e?{}:e,r=n.logger,o=n.endpoint,i=n.isElementSelectable,l=n.cssSelectorAllowlist,a=n.actionClickAllowlist;this.logger=r,o&&this.endpoint===f&&(this.endpoint=o);var u=null;window.addEventListener("message",(function(e){var n,r,o,c,s;if(null===(r=null===(n=t.logger)||void 0===n?void 0:n.debug)||void 0===r||r.call(n,"Message received: ",JSON.stringify(e)),t.endpoint===e.origin){var d,f=null==e?void 0:e.data,v=null==f?void 0:f.action;if(v)if("id"in f)null===(c=null===(o=t.logger)||void 0===o?void 0:o.debug)||void 0===c||c.call(o,"Received Response to previous request: ",JSON.stringify(e)),t.handleResponse(f);else if("ping"===v)t.notify({action:"pong"});else if("initialize-visual-tagging-selector"===v){var g=null==f?void 0:f.data;(d="https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz",new Promise((function(e,t){var n;try{var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=d,r.addEventListener("load",(function(){e({status:!0})}),{once:!0}),r.addEventListener("error",(function(){t({status:!1,message:"Failed to load the script ".concat(d)})})),null===(n=document.head)||void 0===n||n.appendChild(r)}catch(e){t(e)}}))).then((function(){var e;u=null===(e=null===window||void 0===window?void 0:window.amplitudeVisualTaggingSelector)||void 0===e?void 0:e.call(window,{getEventTagProps:X,isElementSelectable:function(e){return!i||i((null==g?void 0:g.actionType)||"click",e)},onTrack:t.onTrack,onSelect:t.onSelect,visualHighlightClass:p,messenger:t,cssSelectorAllowlist:l,actionClickAllowlist:a}),t.notify({action:"selector-loaded"})})).catch((function(){var e;null===(e=t.logger)||void 0===e||e.warn("Failed to initialize visual tagging selector")}))}else"close-visual-tagging-selector"===v&&(null===(s=null==u?void 0:u.close)||void 0===s||s.call(u))}})),this.notify({action:"page-loaded"})},e}(),Y=["id","class","style","value","onclick","onchange","oninput","onblur","onsubmit","onfocus","onkeydown","onkeyup","onkeypress","data-reactid","data-react-checksum","data-reactroot"],B=["type"],W=["svg","path","g"],F=["password","hidden"];var V=function(e){var t;return e?(t=function(e,t){for(var n=0,r=0;r<e.length;r++){var o=e[r];if(null===o)n+=4;else{var i=$(o);n+=i?Array.from(i).length:4}if(n>t)return e.slice(0,r)}return e}(function(e){var t=[];if(!e)return t;t.push(e);for(var n=e.parentElement;n&&"HTML"!==n.tagName;)t.push(n),n=n.parentElement;return t}(e).map((function(e){return function(e){var t,n,r,o,l,a;if(null===e)return null;var u=String(e.tagName).toLowerCase(),c={tag:u},s=Array.from(null!==(o=null===(r=e.parentElement)||void 0===r?void 0:r.children)&&void 0!==o?o:[]);s.length&&(c.index=s.indexOf(e),c.indexOfType=s.filter((function(t){return t.tagName===e.tagName})).indexOf(e));var d=null===(a=null===(l=e.previousElementSibling)||void 0===l?void 0:l.tagName)||void 0===a?void 0:a.toLowerCase();d&&(c.prevSib=String(d));var f=e.getAttribute("id");f&&(c.id=String(f));var v=Array.from(e.classList);v.length&&(c.classes=v);var p={},g=Array.from(e.attributes).filter((function(e){return!Y.includes(e.name)})),m=!H(e);if(!F.includes(String(e.getAttribute("type")))&&!W.includes(u))try{for(var h=(0,i.Ju)(g),y=h.next();!y.done;y=h.next()){var b=y.value;m&&!B.includes(b.name)||(p[b.name]=String(b.value).substring(0,128))}}catch(e){t={error:e}}finally{try{y&&!y.done&&(n=h.return)&&n.call(h)}finally{if(t)throw t.error}}return Object.keys(p).length&&(c.attrs=p),c}(e)})),1024),t):[]};function $(e,t){void 0===t&&(t=!1);try{if(null==e)return t?"None":null;if("string"==typeof e)return t?(e=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r")).includes('"')?"'".concat(e,"'"):e.includes("'")?'"'.concat(e.replace(/'/g,"\\'"),'"'):"'".concat(e,"'"):e;if("boolean"==typeof e)return e?"True":"False";if(Array.isArray(e)){var n=e.map((function(e){return $(e,!0)}));return"[".concat(n.join(", "),"]")}if("object"==typeof e){var r=Object.entries(e).filter((function(e){return null!=(0,i.zs)(e,1)[0]})).map((function(e){var t=(0,i.zs)(e,2),n=t[0],r=t[1];return"".concat(String($(n,!0)),": ").concat(String($(r,!0)))})),o="{".concat(r.join(", "),"}");return o.includes("\\'")&&(o=o.replace(/'/g,"'").replace(/'/g,"\\'")),o}return e.toString()}catch(e){return null}}var G=n("Cpmf"),K=n("iD6u"),Q=n("Oxza"),Z=n("iAgp"),ee=n("6qng"),te=n("7FXc");var ne,re=n("ew9A"),oe=n("VQS7"),ie=n("SPzU"),le=n("NkDI");!function(e){e.ClickObservable="clickObservable",e.ChangeObservable="changeObservable",e.NavigateObservable="navigateObservable",e.MutationObservable="mutationObservable"}(ne||(ne={}));var ae=function(e){var t,n,r;void 0===e&&(e={});var o=e.dataAttributePrefix,f=void 0===o?l.PL:o,p=e.visualTaggingOptions,y=void 0===p?{enabled:!0,messenger:new U}:p;e.cssSelectorAllowlist=null!==(t=e.cssSelectorAllowlist)&&void 0!==t?t:l.sH,e.actionClickAllowlist=null!==(n=e.actionClickAllowlist)&&void 0!==n?n:l.W,e.debounceTime=null!==(r=e.debounceTime)&&void 0!==r?r:0;var b="@amplitude/plugin-autocapture-browser",w=[],A=void 0,O=function(e,t){var n,r,o,i=null===(o=null===(r=null==t?void 0:t.tagName)||void 0===r?void 0:r.toLowerCase)||void 0===o?void 0:o.call(r),l="function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{left:null,top:null},a=t.getAttribute("aria-label"),v=function(e,t){return e.getAttributeNames().reduce((function(n,r){if(r.startsWith(t)){var o=r.replace(t,""),i=e.getAttribute(r);o&&(n[o]=i||"")}return n}),{})}(t,f),p=I(t),g=D(t,A),m=((n={})["[Amplitude] Element ID"]=t.getAttribute("id")||"",n["[Amplitude] Element Class"]=t.getAttribute("class"),n["[Amplitude] Element Hierarchy"]=V(t),n[u]=i,n[c]=z(t),n["[Amplitude] Element Position Left"]=null==l.left?null:Math.round(l.left),n["[Amplitude] Element Position Top"]=null==l.top?null:Math.round(l.top),n["[Amplitude] Element Aria Label"]=a,n["[Amplitude] Element Attributes"]=v,n[s]=g,n["[Amplitude] Element Parent Label"]=p,n[d]=window.location.href.split("?")[0],n["[Amplitude] Page Title"]="undefined"!=typeof document&&document.title||"",n["[Amplitude] Viewport Height"]=window.innerHeight,n["[Amplitude] Viewport Width"]=window.innerWidth,n);return"a"===i&&"click"===e&&t instanceof HTMLAnchorElement&&(m["[Amplitude] Element Href"]=t.href),M(m)},k=function(t,n){var r={event:t,timestamp:Date.now(),type:n};if(function(e){return"click"===e.type||"change"===e.type}(r)&&null!==r.event.target){var o=q(r.event.target,e.cssSelectorAllowlist);return o&&(r.closestTrackedAncestor=o,r.targetElementProperties=O(r.type,o)),r}return r};return{name:b,type:"enrichment",setup:function(t,n){return(0,i.sH)(void 0,void 0,void 0,(function(){var r,o,l,u,c,s,d,f,p,E;return(0,i.YH)(this,(function(S){return A=t.loggerProvider,"undefined"==typeof document||(r=x(e,e.cssSelectorAllowlist),o=x(e,e.actionClickAllowlist),l=function(){var e,t,n=(0,g.R)(document,"click",{capture:!0}).pipe((0,m.T)((function(e){return k(e,"click")}))),r=(0,g.R)(document,"change",{capture:!0}).pipe((0,m.T)((function(e){return k(e,"change")})));window.navigation&&(t=(0,g.R)(window.navigation,"navigate").pipe((0,m.T)((function(e){return k(e,"navigate")}))));var o=new h.c((function(e){var t=new MutationObserver((function(t){e.next(t)}));return t.observe(document.body,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),function(){return t.disconnect()}})).pipe((0,m.T)((function(e){return k(e,"mutation")})));return(e={})[ne.ClickObservable]=n,e[ne.ChangeObservable]=r,e[ne.NavigateObservable]=t,e[ne.MutationObservable]=o,e}(),u=function(e){var t=e.amplitude,n=e.allObservables,r=e.options,o=e.shouldTrackEvent,l=n.clickObservable,u=l.pipe((0,G.J)(),(0,K.p)((function(e){var t=(0,i.zs)(e,2),n=t[0],r=t[1],o=n.event.target!==r.event.target,l=Math.abs(r.event.screenX-n.event.screenX)<=20&&Math.abs(r.event.screenY-n.event.screenY)<=20;return o&&!l}))),c=l.pipe((0,Q.B)(r.debounceTime),(0,m.T)((function(){return"timeout"}))),s=(0,Z.h)(u,c);return l.pipe((0,ee.c)(0),(0,K.p)(J),(0,K.p)((function(e){return o("click",e.closestTrackedAncestor)})),(0,te.r)(s)).subscribe((function(e){var n,r,o=(e.length,a);try{for(var l=(0,i.Ju)(e),u=l.next();!u.done;u=l.next()){var c=u.value;null==t||t.track(o,c.targetElementProperties,{time:c.timestamp})}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}}))}({allObservables:l,options:e,amplitude:n,shouldTrackEvent:r}),w.push(u),c=function(e){var t=e.amplitude,n=e.allObservables,r=e.getEventProperties,o=e.shouldTrackEvent;return n.changeObservable.pipe((0,K.p)(J),(0,K.p)((function(e){return o("change",e.closestTrackedAncestor)}))).subscribe((function(e){null==t||t.track("[Amplitude] Element Changed",r("change",e.closestTrackedAncestor))}))}({allObservables:l,getEventProperties:O,amplitude:n,shouldTrackEvent:r}),w.push(c),s=function(e){var t=e.amplitude,n=e.allObservables,r=e.options,o=e.getEventProperties,l=e.shouldTrackEvent,u=e.shouldTrackActionClick,c=n.clickObservable,s=n.mutationObservable,d=n.navigateObservable,f=c.pipe((0,K.p)((function(e){return!l("click",e.closestTrackedAncestor)})),(0,m.T)((function(e){var t=q(e.event.target,r.actionClickAllowlist);return e.closestTrackedAncestor=t,null!==e.closestTrackedAncestor&&(e.targetElementProperties=o(e.type,e.closestTrackedAncestor)),e})),(0,K.p)(J),(0,K.p)((function(e){return u("click",e.closestTrackedAncestor)}))),v=[s];d&&v.push(d);var p=Z.h.apply(void 0,(0,i.fX)([],(0,i.zs)(v),!1));return f.pipe((0,re.n)((function(e){return p.pipe((0,oe.s)(1),(0,ie.w)({first:500,with:function(){return le.w}}),(0,m.T)((function(){return e})))}))).subscribe((function(e){null==t||t.track(a,o("click",e.closestTrackedAncestor),{time:e.timestamp})}))}({allObservables:l,options:e,getEventProperties:O,amplitude:n,shouldTrackEvent:r,shouldTrackActionClick:o}),w.push(s),null===(p=null==t?void 0:t.loggerProvider)||void 0===p||p.log("".concat(b," has been successfully added.")),window.opener&&y.enabled&&(d=e.cssSelectorAllowlist,f=e.actionClickAllowlist,null===(E=y.messenger)||void 0===E||E.setup((0,i.Cl)((0,i.Cl)({logger:null==t?void 0:t.loggerProvider},(null==t?void 0:t.serverZone)&&{endpoint:v[t.serverZone]}),{isElementSelectable:x(e,(0,i.fX)((0,i.fX)([],(0,i.zs)(d),!1),(0,i.zs)(f),!1)),cssSelectorAllowlist:d,actionClickAllowlist:f})))),[2]}))}))},execute:function(e){return(0,i.sH)(void 0,void 0,void 0,(function(){return(0,i.YH)(this,(function(t){return[2,e]}))}))},teardown:function(){return(0,i.sH)(void 0,void 0,void 0,(function(){var e,t,n,r;return(0,i.YH)(this,(function(o){try{for(e=(0,i.Ju)(w),t=e.next();!t.done;t=e.next())t.value.unsubscribe()}catch(e){n={error:e}}finally{try{t&&!t.done&&(r=e.return)&&r.call(e)}finally{if(n)throw n.error}}return[2]}))}))}}}},L8z6:(e,t,n)=>{n.d(t,{Dl:()=>c});var r=n("Istr"),o=n("9S6E"),i=n("EPxo"),l=n("f3QI"),a=n("7O1w"),u=function(e){var t={};for(var n in e){var r=e[n];r&&(t[n]=r)}return t},c=function(e){var t;void 0===e&&(e={});var n,i,l=(0,o.m)(),a=void 0,u=e.trackOn,c=e.trackHistoryChanges,v=e.eventType,p=void 0===v?"[Amplitude] Page Viewed":v,g=function(e){var t=e;try{t=decodeURI(e)}catch(e){null==a||a.error("Malformed URI sequence: ",e)}return t},m=function(){return(0,r.sH)(void 0,void 0,void 0,(function(){var e,t,n;return(0,r.YH)(this,(function(o){switch(o.label){case 0:return e=g("undefined"!=typeof location&&location.href||""),n={event_type:p},t=[{}],[4,s()];case 1:return[2,(n.event_properties=r.Cl.apply(void 0,[r.Cl.apply(void 0,t.concat([o.sent()])),{"[Amplitude] Page Domain":"undefined"!=typeof location&&location.hostname||"","[Amplitude] Page Location":e,"[Amplitude] Page Path":"undefined"!=typeof location&&g(location.pathname)||"","[Amplitude] Page Title":"undefined"!=typeof document&&document.title||"","[Amplitude] Page URL":e.split("?")[0]}]),n)]}}))}))},h=function(){return void 0===u||"function"==typeof u&&u()},y="undefined"!=typeof location?location.href:null,b=function(){return(0,r.sH)(void 0,void 0,void 0,(function(){var e,n,o,i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return e=location.href,n=f(c,e,y||"")&&h(),y=e,n?(null==a||a.log("Tracking page view event"),null!=t?[3,1]:[3,3]):[3,4];case 1:return i=(o=t).track,[4,m()];case 2:i.apply(o,[r.sent()]),r.label=3;case 3:r.label=4;case 4:return[2]}}))}))},w=function(){b()},A={name:"@amplitude/plugin-page-view-tracking-browser",type:"enrichment",setup:function(e,o){return(0,r.sH)(void 0,void 0,void 0,(function(){var u,c;return(0,r.YH)(this,(function(s){switch(s.label){case 0:return t=o,i=e,(a=e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"),l&&(l.addEventListener("popstate",w),n=l.history.pushState,l.history.pushState=new Proxy(l.history.pushState,{apply:function(e,t,n){var o=(0,r.zs)(n,3),i=o[0],l=o[1],a=o[2];e.apply(t,[i,l,a]),b()}})),h()?(a.log("Tracking page view event"),c=(u=t).track,[4,m()]):[3,2];case 1:c.apply(u,[s.sent()]),s.label=2;case 2:return[2]}}))}))},execute:function(e){return(0,r.sH)(void 0,void 0,void 0,(function(){var t;return(0,r.YH)(this,(function(n){switch(n.label){case 0:return"attribution"===u&&d(e)?(null==a||a.log("Enriching campaign event to page view event with campaign parameters"),[4,m()]):[3,2];case 1:t=n.sent(),e.event_type=t.event_type,e.event_properties=(0,r.Cl)((0,r.Cl)({},e.event_properties),t.event_properties),n.label=2;case 2:return i&&e.event_type===p&&(i.pageCounter=i.pageCounter?i.pageCounter+1:1,e.event_properties=(0,r.Cl)((0,r.Cl)({},e.event_properties),{"[Amplitude] Page Counter":i.pageCounter})),[2,e]}}))}))},teardown:function(){return(0,r.sH)(void 0,void 0,void 0,(function(){return(0,r.YH)(this,(function(e){return l&&(l.removeEventListener("popstate",w),n&&(l.history.pushState=n)),[2]}))}))}};return A},s=function(){return(0,r.sH)(void 0,void 0,void 0,(function(){var e;return(0,r.YH)(this,(function(t){switch(t.label){case 0:return e=u,[4,(new i.E).parse()];case 1:return[2,e.apply(void 0,[t.sent()])]}}))}))},d=function(e){if("$identify"===e.event_type&&e.user_properties){var t=e.user_properties,n=t[l.eX.SET]||{},o=t[l.eX.UNSET]||{},i=(0,r.fX)((0,r.fX)([],(0,r.zs)(Object.keys(n)),!1),(0,r.zs)(Object.keys(o)),!1);return Object.keys(a.F3).every((function(e){return i.includes(e)}))}return!1},f=function(e,t,n){if("pathOnly"===e){if(""==n)return!0;var r=new URL(t),o=new URL(n);return r.origin+r.pathname!==o.origin+o.pathname}return t!==n}},X82u:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{A:()=>r})},Lr5L:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{A:()=>r})},k6Di:(e,t,n)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{A:()=>r})},"79Ja":(e,t,n)=>{n.d(t,{A:()=>i});var r=n("sPea");function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.A)(o.key),o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},eRlj:(e,t,n)=>{function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(o=function(){return!!e})()}n.d(t,{A:()=>a});var i=n("lIP5"),l=n("Lr5L");function a(e){var t=o();return function(){var n,o=r(e);if(t){var a=r(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===(0,i.A)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,l.A)(e)}(this,n)}}},zThL:(e,t,n)=>{n.d(t,{A:()=>o});var r=n("sPea");function o(e,t,n){return(t=(0,r.A)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"+9dH":(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:()=>r})},"5hh5":(e,t,n)=>{n.d(t,{A:()=>o});var r=n("PCpq");function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.A)(e,t)}},"+5J7":(e,t,n)=>{n.d(t,{A:()=>o});var r=n("PCpq");function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.A)(e,t)}},"77l8":(e,t,n)=>{n.d(t,{A:()=>i});var r=n("zThL");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},BkpH:(e,t,n)=>{n.d(t,{A:()=>o});var r=n("Nlia");function o(e,t){if(null==e)return{};var n,o,i=(0,r.A)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},Nlia:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{A:()=>r})},PCpq:(e,t,n)=>{function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{A:()=>r})},oYSA:(e,t,n)=>{n.d(t,{A:()=>o});var r=n("lyRn");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(e,t)||(0,r.A)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},RlfA:(e,t,n)=>{function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>r})},"+BzW":(e,t,n)=>{n.d(t,{A:()=>i});var r=n("X82u");var o=n("lyRn");function i(e){return function(e){if(Array.isArray(e))return(0,r.A)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.A)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},sPea:(e,t,n)=>{n.d(t,{A:()=>o});var r=n("lIP5");function o(e){var t=function(e,t){if("object"!=(0,r.A)(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=(0,r.A)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,r.A)(t)?t:t+""}},lIP5:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{A:()=>r})},lyRn:(e,t,n)=>{n.d(t,{A:()=>o});var r=n("X82u");function o(e,t){if(e){if("string"==typeof e)return(0,r.A)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.A)(e,t):void 0}}}}]);