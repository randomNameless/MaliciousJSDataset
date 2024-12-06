(()=>{var tt=Object.defineProperty,rt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var ue=(t,e,r)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,m=(t,e)=>{for(var r in e||(e={}))it.call(e,r)&&ue(t,r,e[r]);if(ae)for(var r of ae(e))nt.call(e,r)&&ue(t,r,e[r]);return t},ce=(t,e)=>rt(t,st(e));var p=(t,e)=>()=>(t&&(e=t(t=0)),e);var ot=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var l=(t,e,r)=>new Promise((s,i)=>{var o=u=>{try{a(r.next(u))}catch(c){i(c)}},n=u=>{try{a(r.throw(u))}catch(c){i(c)}},a=u=>u.done?s(u.value):Promise.resolve(u.value).then(o,n);a((r=r.apply(t,e)).next())});function he(t,e,r,s,i,o){return l(this,null,function*(){o||(_.backgroundSync=!1);let n=yield ct(t,s,e,r);i&&n&&(yield me(t,n))})}function de(t){let e=S(t),r=A.get(e)||new Set;r.add(t),A.set(e,r)}function pe(t){A.forEach(e=>e.delete(t))}function at(){C.forEach(t=>{t&&(t.state="idle",Ee(t))})}function ut(){C.forEach(t=>{t&&t.state==="idle"&&J(t)})}function fe(){return l(this,null,function*(){try{if(!g.localStorage)return;yield g.localStorage.setItem(_.cacheKey,JSON.stringify(Array.from(v.entries())))}catch(t){}})}function ct(t,e,r,s){return l(this,null,function*(){let i=S(t),o=j(t),n=new Date;yield ft();let a=v.get(o);return a&&!s&&(e||a.staleAt>n)?(a.sse&&F.add(i),a.staleAt<n?q(t):_e(t),a.data):yield lt(q(t),r)})}function S(t){let[e,r]=t.getApiInfo();return"".concat(e,"||").concat(r)}function j(t){let e=S(t);if(!t.isRemoteEval())return e;let r=t.getAttributes(),s=t.getCacheKeyAttributes()||Object.keys(t.getAttributes()),i={};s.forEach(a=>{i[a]=r[a]});let o=t.getForcedVariations(),n=t.getUrl();return"".concat(e,"||").concat(JSON.stringify({ca:i,fv:o,url:n}))}function lt(t,e){return new Promise(r=>{let s=!1,i,o=n=>{s||(s=!0,i&&clearTimeout(i),r(n||null))};e&&(i=setTimeout(()=>o(),e)),t.then(n=>o(n)).catch(()=>o())})}function ft(){return l(this,null,function*(){if(!le){le=!0;try{if(g.localStorage){let t=yield g.localStorage.getItem(_.cacheKey);if(t){let e=JSON.parse(t);e&&Array.isArray(e)&&e.forEach(r=>{let[s,i]=r;v.set(s,ce(m({},i),{staleAt:new Date(i.staleAt)}))}),ge()}}}catch(t){}if(!_.disableIdleStreams){let t=w.startIdleListener();t&&(w.stopIdleListener=t)}}})}function ge(){let t=Array.from(v.entries()).map(r=>{let[s,i]=r;return{key:s,staleAt:i.staleAt.getTime()}}).sort((r,s)=>r.staleAt-s.staleAt),e=Math.min(Math.max(0,v.size-_.maxEntries),v.size);for(let r=0;r<e;r++)v.delete(t[r].key)}function ve(t,e,r){let s=r.dateUpdated||"",i=new Date(Date.now()+_.staleTTL),o=v.get(e);if(o&&s&&o.version===s){o.staleAt=i,fe();return}v.set(e,{data:r,version:s,staleAt:i,sse:F.has(t)}),ge(),fe();let n=A.get(t);n&&n.forEach(a=>me(a,r))}function me(t,e){return l(this,null,function*(){yield e.encryptedExperiments?t.setEncryptedExperiments(e.encryptedExperiments,void 0,g.SubtleCrypto):t.setExperiments(e.experiments||t.getExperiments()),yield e.encryptedFeatures?t.setEncryptedFeatures(e.encryptedFeatures,void 0,g.SubtleCrypto):t.setFeatures(e.features||t.getFeatures())})}function q(t){return l(this,null,function*(){let{apiHost:e,apiRequestHeaders:r}=t.getApiHosts(),s=t.getClientKey(),i=t.isRemoteEval(),o=S(t),n=j(t),a=R.get(n);return a||(a=(i?w.fetchRemoteEvalCall({host:e,clientKey:s,payload:{attributes:t.getAttributes(),forcedVariations:t.getForcedVariations(),forcedFeatures:Array.from(t.getForcedFeatures().entries()),url:t.getUrl()},headers:r}):w.fetchFeaturesCall({host:e,clientKey:s,headers:r})).then(c=>(c.headers.get("x-sse-support")==="enabled"&&F.add(o),c.json())).then(c=>(ve(o,n,c),_e(t),R.delete(n),c)).catch(c=>(R.delete(n),Promise.resolve({}))),R.set(n,a)),yield a})}function _e(t){let e=S(t),r=j(t),{streamingHost:s,streamingHostRequestHeaders:i}=t.getApiHosts(),o=t.getClientKey();if(_.backgroundSync&&F.has(e)&&g.EventSource){if(C.has(e))return;let n={src:null,host:s,clientKey:o,headers:i,cb:a=>{try{if(a.type==="features-updated"){let u=A.get(e);u&&u.forEach(c=>{q(c)})}else if(a.type==="features"){let u=JSON.parse(a.data);ve(e,r,u)}n.errors=0}catch(u){ye(n)}},errors:0,state:"active"};C.set(e,n),J(n)}}function ye(t){if(t.state!=="idle"&&(t.errors++,t.errors>3||t.src&&t.src.readyState===2)){let e=Math.pow(3,t.errors-3)*(1e3+Math.random()*1e3);Ee(t),setTimeout(()=>{["idle","active"].includes(t.state)||J(t)},Math.min(e,3e5))}}function Ee(t){t.src&&(t.src.onopen=null,t.src.onerror=null,t.src.close(),t.src=null,t.state==="active"&&(t.state="disabled"))}function J(t){t.src=w.eventSourceCall({host:t.host,clientKey:t.clientKey,headers:t.headers}),t.state="active",t.src.addEventListener("features",t.cb),t.src.addEventListener("features-updated",t.cb),t.src.onerror=()=>ye(t),t.src.onopen=()=>{t.errors=0}}var _,g,w,A,le,v,R,C,F,be=p(()=>{_={staleTTL:6e4,cacheKey:"gbFeaturesCache",backgroundSync:!0,maxEntries:10,disableIdleStreams:!1,idleStreamInterval:2e4},g={fetch:globalThis.fetch?globalThis.fetch.bind(globalThis):void 0,SubtleCrypto:globalThis.crypto?globalThis.crypto.subtle:void 0,EventSource:globalThis.EventSource},w={fetchFeaturesCall:t=>{let{host:e,clientKey:r,headers:s}=t;return g.fetch("".concat(e,"/api/features/").concat(r),{headers:s})},fetchRemoteEvalCall:t=>{let{host:e,clientKey:r,payload:s,headers:i}=t,o={method:"POST",headers:m({"Content-Type":"application/json"},i),body:JSON.stringify(s)};return g.fetch("".concat(e,"/api/eval/").concat(r),o)},eventSourceCall:t=>{let{host:e,clientKey:r,headers:s}=t;return s?new g.EventSource("".concat(e,"/sub/").concat(r),{headers:s}):new g.EventSource("".concat(e,"/sub/").concat(r))},startIdleListener:()=>{let t;if(!(typeof window!="undefined"&&typeof document!="undefined"))return;let r=()=>{document.visibilityState==="visible"?(window.clearTimeout(t),ut()):document.visibilityState==="hidden"&&(t=window.setTimeout(at,_.idleStreamInterval))};return document.addEventListener("visibilitychange",r),()=>document.removeEventListener("visibilitychange",r)},stopIdleListener:()=>{}};try{globalThis.localStorage&&(g.localStorage=globalThis.localStorage)}catch(t){}A=new Map,le=!1,v=new Map,R=new Map,C=new Map,F=new Set});function dt(t){return t==="html"?{childList:!0,subtree:!0,attributes:!0,characterData:!0}:{childList:!1,subtree:!1,attributes:!0,attributeFilter:[t]}}function H(t){var e=M.get(t);return e||(e={element:t,attributes:{}},M.set(t,e)),e}function K(t,e,r,s,i){var o=r(t),n={isDirty:!1,originalValue:o,virtualValue:o,mutations:[],el:t,_positionTimeout:null,observer:new MutationObserver(function(){if(!(e==="position"&&n._positionTimeout)){e==="position"&&(n._positionTimeout=setTimeout(function(){n._positionTimeout=null},1e3));var a=r(t);e==="position"&&a.parentNode===n.virtualValue.parentNode&&a.insertBeforeNode===n.virtualValue.insertBeforeNode||a!==n.virtualValue&&(n.originalValue=a,i(n))}}),mutationRunner:i,setValue:s,getCurrentValue:r};return e==="position"&&t.parentNode?n.observer.observe(t.parentNode,{childList:!0,subtree:!0,attributes:!1,characterData:!1}):n.observer.observe(t,dt(e)),n}function I(t,e){var r=e.getCurrentValue(e.el);e.virtualValue=t,t&&typeof t!="string"?(!r||t.parentNode!==r.parentNode||t.insertBeforeNode!==r.insertBeforeNode)&&(e.isDirty=!0,we()):t!==r&&(e.isDirty=!0,we())}function pt(t){var e=t.originalValue;t.mutations.forEach(function(r){return e=r.mutate(e)}),I(xt(e),t)}function gt(t){var e=new Set(t.originalValue.split(/\s+/).filter(Boolean));t.mutations.forEach(function(r){return r.mutate(e)}),I(Array.from(e).filter(Boolean).join(" "),t)}function vt(t){var e=t.originalValue;t.mutations.forEach(function(r){return e=r.mutate(e)}),I(e,t)}function mt(t){var e=t.parentSelector,r=t.insertBeforeSelector,s=document.querySelector(e);if(!s)return null;var i=r?document.querySelector(r):null;return r&&!i?null:{parentNode:s,insertBeforeNode:i}}function _t(t){var e=t.originalValue;t.mutations.forEach(function(r){var s=r.mutate(),i=mt(s);e=i||e}),I(e,t)}function Se(t){var e=H(t);return e.html||(e.html=K(t,"html",yt,Et,pt)),e.html}function ke(t){var e=H(t);return e.position||(e.position=K(t,"position",bt,wt,_t)),e.position}function Ve(t){var e=H(t);return e.classes||(e.classes=K(t,"class",St,At,gt)),e.classes}function Ne(t,e){var r=H(t);return r.attributes[e]||(r.attributes[e]=K(t,e,kt(e),Vt(e),vt)),r.attributes[e]}function Nt(t,e){var r=M.get(t);if(r)if(e==="html"){var s,i;(s=r.html)==null||(i=s.observer)==null||i.disconnect(),delete r.html}else if(e==="class"){var o,n;(o=r.classes)==null||(n=o.observer)==null||n.disconnect(),delete r.classes}else if(e==="position"){var a,u;(a=r.position)==null||(u=a.observer)==null||u.disconnect(),delete r.position}else{var c,h,b;(c=r.attributes)==null||(h=c[e])==null||(b=h.observer)==null||b.disconnect(),delete r.attributes[e]}}function xt(t){return D||(D=document.createElement("div")),D.innerHTML=t,D.innerHTML}function T(t,e,r){if(r.isDirty){r.isDirty=!1;var s=r.virtualValue;r.mutations.length||Nt(t,e),r.setValue(t,s)}}function Ot(t,e){t.html&&T(e,"html",t.html),t.classes&&T(e,"class",t.classes),t.position&&T(e,"position",t.position),Object.keys(t.attributes).forEach(function(r){T(e,r,t.attributes[r])})}function we(){M.forEach(Ot)}function Rt(t,e){var r=null;t.kind==="html"?r=Se(e):t.kind==="class"?r=Ve(e):t.kind==="attribute"?r=Ne(e,t.attribute):t.kind==="position"&&(r=ke(e)),r&&(r.mutations.push(t),r.mutationRunner(r))}function Ct(t,e){var r=null;if(t.kind==="html"?r=Se(e):t.kind==="class"?r=Ve(e):t.kind==="attribute"?r=Ne(e,t.attribute):t.kind==="position"&&(r=ke(e)),!!r){var s=r.mutations.indexOf(t);s!==-1&&r.mutations.splice(s,1),r.mutationRunner(r)}}function xe(t){if(!(t.kind==="position"&&t.elements.size===1)){var e=new Set(t.elements),r=document.querySelectorAll(t.selector);r.forEach(function(s){e.has(s)||(t.elements.add(s),Rt(t,s))})}}function Ft(t){t.elements.forEach(function(e){return Ct(t,e)}),t.elements.clear(),W.delete(t)}function Ae(){W.forEach(xe)}function Dt(){typeof document!="undefined"&&(z||(z=new MutationObserver(function(){Ae()})),Ae(),z.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))}function L(t){return typeof document=="undefined"?G:(W.add(t),xe(t),{revert:function(){Ft(t)}})}function Q(t,e){return L({kind:"html",elements:new Set,mutate:e,selector:t})}function Oe(t,e){return L({kind:"position",elements:new Set,mutate:e,selector:t})}function k(t,e){return L({kind:"class",elements:new Set,mutate:e,selector:t})}function U(t,e,r){return ht.test(e)?e==="class"||e==="className"?k(t,function(s){var i=r(Array.from(s).join(" "));s.clear(),i&&i.split(/\s+/g).filter(Boolean).forEach(function(o){return s.add(o)})}):L({kind:"attribute",attribute:e,elements:new Set,mutate:r,selector:t}):G}function Tt(t){var e=t.selector,r=t.action,s=t.value,i=t.attribute,o=t.parentSelector,n=t.insertBeforeSelector;if(i==="html"){if(r==="append")return Q(e,function(a){return a+(s!=null?s:"")});if(r==="set")return Q(e,function(){return s!=null?s:""})}else if(i==="class"){if(r==="append")return k(e,function(a){s&&a.add(s)});if(r==="remove")return k(e,function(a){s&&a.delete(s)});if(r==="set")return k(e,function(a){a.clear(),s&&a.add(s)})}else if(i==="position"){if(r==="set"&&o)return Oe(e,function(){return{insertBeforeSelector:n,parentSelector:o}})}else{if(r==="append")return U(e,i,function(a){return a!==null?a+(s!=null?s:""):s!=null?s:""});if(r==="set")return U(e,i,function(){return s!=null?s:""});if(r==="remove")return U(e,i,function(){return null})}return G}var ht,G,M,W,yt,Et,bt,wt,At,St,kt,Vt,D,z,Ut,Re,Ce=p(()=>{ht=/^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,G={revert:function(){}},M=new Map,W=new Set;yt=function(e){return e.innerHTML},Et=function(e,r){return e.innerHTML=r};bt=function(e){return{parentNode:e.parentElement,insertBeforeNode:e.nextElementSibling}},wt=function(e,r){r.insertBeforeNode&&!r.parentNode.contains(r.insertBeforeNode)||r.parentNode.insertBefore(e,r.insertBeforeNode)};At=function(e,r){return r?e.className=r:e.removeAttribute("class")},St=function(e){return e.className};kt=function(e){return function(r){var s;return(s=r.getAttribute(e))!=null?s:null}},Vt=function(e){return function(r,s){return s!==null?r.setAttribute(e,s):r.removeAttribute(e)}};Dt();Ut={html:Q,classes:k,attribute:U,position:Oe,declarative:Tt},Re=Ut});function Z(t){let e=2166136261,r=t.length;for(let s=0;s<r;s++)e^=t.charCodeAt(s),e+=(e<<1)+(e<<4)+(e<<7)+(e<<8)+(e<<24);return e>>>0}function V(t,e,r){return r===2?Z(Z(t+e)+"")%1e4/1e4:r===1?Z(e+t)%1e3/1e3:null}function Mt(t){return t<=0?[]:new Array(t).fill(1/t)}function B(t,e){return t>=e[0]&&t<e[1]}function Fe(t,e){let r=V("__"+e[0],t,1);return r===null?!1:r>=e[1]&&r<e[2]}function De(t,e){for(let r=0;r<e.length;r++)if(B(t,e[r]))return r;return-1}function X(t){try{let e=t.replace(/([^\\])\//g,"$1\\/");return new RegExp(e)}catch(e){console.error(e);return}}function Te(t,e){if(!e.length)return!1;let r=!1,s=!1;for(let i=0;i<e.length;i++){let o=It(t,e[i].type,e[i].pattern);if(e[i].include===!1){if(o)return!1}else r=!0,o&&(s=!0)}return s||!r}function Ht(t,e,r){try{let s=e.replace(/[*.+?^${}()|[\]\\]/g,"\\$&").replace(/_____/g,".*");return r&&(s="\\/?"+s.replace(/(^\/|\/$)/g,"")+"\\/?"),new RegExp("^"+s+"$","i").test(t)}catch(s){return!1}}function Kt(t,e){try{let r=new URL(e.replace(/^([^:/?]*)\./i,"https://$1.").replace(/\*/g,"_____"),"https://_____"),s=[[t.host,r.host,!1],[t.pathname,r.pathname,!0]];return r.hash&&s.push([t.hash,r.hash,!1]),r.searchParams.forEach((i,o)=>{s.push([t.searchParams.get(o)||"",i,!1])}),!s.some(i=>!Ht(i[0],i[1],i[2]))}catch(r){return!1}}function It(t,e,r){try{let s=new URL(t,"https://_");if(e==="regex"){let i=X(r);return i?i.test(s.href)||i.test(s.href.substring(s.origin.length)):!1}else if(e==="simple")return Kt(s,r);return!1}catch(s){return!1}}function Ue(t,e,r){e=e===void 0?1:e,e<0?e=0:e>1&&(e=1);let s=Mt(t);r=r||s,r.length!==t&&(r=s);let i=r.reduce((n,a)=>a+n,0);(i<.99||i>1.01)&&(r=s);let o=0;return r.map(n=>{let a=o;return o+=n,[a,a+e*n]})}function Me(t,e,r){if(!e)return null;let s=e.split("?")[1];if(!s)return null;let i=s.replace(/#.*/,"").split("&").map(o=>o.split("=",2)).filter(o=>{let[n]=o;return n===t}).map(o=>{let[,n]=o;return parseInt(n)});return i.length>0&&i[0]>=0&&i[0]<r?i[0]:null}function He(t){try{return t()}catch(e){return console.error(e),!1}}function ee(t,e,r){return l(this,null,function*(){if(e=e||"",r=r||globalThis.crypto&&globalThis.crypto.subtle,!r)throw new Error("No SubtleCrypto implementation found");try{let s=yield r.importKey("raw",Y(e),{name:"AES-CBC",length:128},!0,["encrypt","decrypt"]),[i,o]=t.split("."),n=yield r.decrypt({name:"AES-CBC",iv:Y(i)},s,Y(o));return new TextDecoder().decode(n)}catch(s){throw new Error("Failed to decrypt")}})}function d(t){typeof t=="number"&&(t=t+""),(!t||typeof t!="string")&&(t="0");let e=t.replace(/(^v|\+.*$)/g,"").split(/[-.]/);return e.length===3&&e.push("~"),e.map(r=>r.match(/^[0-9]+$/)?r.padStart(5," "):r).join("-")}function Ke(){let t;try{t="0.30.0"}catch(e){t=""}return t}var Y,te=p(()=>{Y=t=>Uint8Array.from(atob(t),e=>e.charCodeAt(0))});function y(t,e){if("$or"in e)return Le(t,e.$or);if("$nor"in e)return!Le(t,e.$nor);if("$and"in e)return jt(t,e.$and);if("$not"in e)return!y(t,e.$not);for(let[r,s]of Object.entries(e))if(!N(s,Lt(t,r)))return!1;return!0}function Lt(t,e){let r=e.split("."),s=t;for(let i=0;i<r.length;i++)if(s&&typeof s=="object"&&r[i]in s)s=s[r[i]];else return null;return s}function Bt(t){return re[t]||(re[t]=new RegExp(t.replace(/([^\\])\//g,"$1\\/"))),re[t]}function N(t,e){if(typeof t=="string")return e+""===t;if(typeof t=="number")return e*1===t;if(typeof t=="boolean")return!!e===t;if(t===null)return e===null;if(Array.isArray(t)||!Be(t))return JSON.stringify(e)===JSON.stringify(t);for(let r in t)if(!qt(r,e,t[r]))return!1;return!0}function Be(t){let e=Object.keys(t);return e.length>0&&e.filter(r=>r[0]==="$").length===e.length}function $t(t){if(t===null)return"null";if(Array.isArray(t))return"array";let e=typeof t;return["string","number","boolean","object","undefined"].includes(e)?e:"unknown"}function Pt(t,e){if(!Array.isArray(t))return!1;let r=Be(e)?s=>N(e,s):s=>y(s,e);for(let s=0;s<t.length;s++)if(t[s]&&r(t[s]))return!0;return!1}function Ie(t,e){return Array.isArray(t)?t.some(r=>e.includes(r)):e.includes(t)}function qt(t,e,r){switch(t){case"$veq":return d(e)===d(r);case"$vne":return d(e)!==d(r);case"$vgt":return d(e)>d(r);case"$vgte":return d(e)>=d(r);case"$vlt":return d(e)<d(r);case"$vlte":return d(e)<=d(r);case"$eq":return e===r;case"$ne":return e!==r;case"$lt":return e<r;case"$lte":return e<=r;case"$gt":return e>r;case"$gte":return e>=r;case"$exists":return r?e!=null:e==null;case"$in":return Array.isArray(r)?Ie(e,r):!1;case"$nin":return Array.isArray(r)?!Ie(e,r):!1;case"$not":return!N(r,e);case"$size":return Array.isArray(e)?N(r,e.length):!1;case"$elemMatch":return Pt(e,r);case"$all":if(!Array.isArray(e))return!1;for(let s=0;s<r.length;s++){let i=!1;for(let o=0;o<e.length;o++)if(N(r[s],e[o])){i=!0;break}if(!i)return!1}return!0;case"$regex":try{return Bt(r).test(e)}catch(s){return!1}case"$type":return $t(e)===r;default:return console.error("Unknown operator: "+t),!1}}function Le(t,e){if(!e.length)return!0;for(let r=0;r<e.length;r++)if(y(t,e[r]))return!0;return!1}function jt(t,e){for(let r=0;r<e.length;r++)if(!y(t,e[r]))return!1;return!0}var re,$e=p(()=>{te();re={}});var x,Jt,O,Pe=p(()=>{Ce();te();$e();be();x=typeof window!="undefined"&&typeof document!="undefined",Jt=Ke(),O=class{constructor(e){if(e=e||{},this.version=Jt,this._ctx=this.context=e,this._renderer=null,this._trackedExperiments=new Set,this._trackedFeatures={},this.debug=!1,this._subscriptions=new Set,this._rtQueue=[],this._rtTimer=0,this.ready=!1,this._assigned=new Map,this._forcedFeatureValues=new Map,this._attributeOverrides={},this._activeAutoExperiments=new Map,this._loadFeaturesCalled=!1,e.remoteEval){if(e.decryptionKey)throw new Error("Encryption is not available for remoteEval");if(!e.clientKey)throw new Error("Missing clientKey");let r=!1;try{r=!!new URL(e.apiHost||"").hostname.match(/growthbook\.io$/i)}catch(s){}if(r)throw new Error("Cannot use remoteEval on GrowthBook Cloud")}else if(e.cacheKeyAttributes)throw new Error("cacheKeyAttributes are only used for remoteEval");e.features&&(this.ready=!0),x&&e.enableDevMode&&(window._growthbook=this,document.dispatchEvent(new Event("gbloaded"))),e.experiments&&(this.ready=!0,this._updateAllAutoExperiments()),e.clientKey&&!e.remoteEval&&this._refresh({},!0,!1)}loadFeatures(e){return l(this,null,function*(){e&&e.autoRefresh&&(this._ctx.subscribeToChanges=!0),this._loadFeaturesCalled=!0,yield this._refresh(e,!0,!0),this._canSubscribe()&&de(this)})}refreshFeatures(e){return l(this,null,function*(){yield this._refresh(e,!1,!0)})}getApiInfo(){return[this.getApiHosts().apiHost,this.getClientKey()]}getApiHosts(){let e=this._ctx.apiHost||"https://cdn.growthbook.io";return{apiHost:e.replace(/\/*$/,""),streamingHost:(this._ctx.streamingHost||e).replace(/\/*$/,""),apiRequestHeaders:this._ctx.apiHostRequestHeaders,streamingHostRequestHeaders:this._ctx.streamingHostRequestHeaders}}getClientKey(){return this._ctx.clientKey||""}isRemoteEval(){return this._ctx.remoteEval||!1}getCacheKeyAttributes(){return this._ctx.cacheKeyAttributes}_refresh(e,r,s){return l(this,null,function*(){if(e=e||{},!this._ctx.clientKey)throw new Error("Missing clientKey");yield he(this,e.timeout,e.skipCache||this._ctx.enableDevMode,r,s,this._ctx.backgroundSync!==!1)})}_render(){this._renderer&&this._renderer()}setFeatures(e){this._ctx.features=e,this.ready=!0,this._render()}setEncryptedFeatures(e,r,s){return l(this,null,function*(){let i=yield ee(e,r||this._ctx.decryptionKey,s);this.setFeatures(JSON.parse(i))})}setExperiments(e){this._ctx.experiments=e,this.ready=!0,this._updateAllAutoExperiments()}setEncryptedExperiments(e,r,s){return l(this,null,function*(){let i=yield ee(e,r||this._ctx.decryptionKey,s);this.setExperiments(JSON.parse(i))})}setAttributes(e){if(this._ctx.attributes=e,this._ctx.remoteEval){this._refreshForRemoteEval();return}this._render(),this._updateAllAutoExperiments()}setAttributeOverrides(e){if(this._attributeOverrides=e,this._ctx.remoteEval){this._refreshForRemoteEval();return}this._render(),this._updateAllAutoExperiments()}setForcedVariations(e){if(this._ctx.forcedVariations=e||{},this._ctx.remoteEval){this._refreshForRemoteEval();return}this._render(),this._updateAllAutoExperiments()}setForcedFeatures(e){this._forcedFeatureValues=e,this._render()}setURL(e){if(this._ctx.url=e,this._ctx.remoteEval){this._refreshForRemoteEval().then(()=>this._updateAllAutoExperiments(!0));return}this._updateAllAutoExperiments(!0)}getAttributes(){return m(m({},this._ctx.attributes),this._attributeOverrides)}getForcedVariations(){return this._ctx.forcedVariations||{}}getForcedFeatures(){return this._forcedFeatureValues||new Map}getUrl(){return this._ctx.url||""}getFeatures(){return this._ctx.features||{}}getExperiments(){return this._ctx.experiments||[]}subscribe(e){return this._subscriptions.add(e),()=>{this._subscriptions.delete(e)}}_canSubscribe(){return this._ctx.backgroundSync!==!1&&this._ctx.subscribeToChanges}_refreshForRemoteEval(){return l(this,null,function*(){this._ctx.remoteEval&&this._loadFeaturesCalled&&(yield this._refresh({},!1,!0).catch(()=>{}))})}getAllResults(){return new Map(this._assigned)}destroy(){this._subscriptions.clear(),this._assigned.clear(),this._trackedExperiments.clear(),this._trackedFeatures={},this._rtQueue=[],this._rtTimer&&clearTimeout(this._rtTimer),pe(this),x&&window._growthbook===this&&delete window._growthbook,this._activeAutoExperiments.forEach(e=>{e.undo()}),this._activeAutoExperiments.clear()}setRenderer(e){this._renderer=e}forceVariation(e,r){if(this._ctx.forcedVariations=this._ctx.forcedVariations||{},this._ctx.forcedVariations[e]=r,this._ctx.remoteEval){this._refreshForRemoteEval();return}this._updateAllAutoExperiments(),this._render()}run(e){let r=this._run(e,null);return this._fireSubscriptions(e,r),r}triggerExperiment(e){if(!this._ctx.experiments)return null;let r=this._ctx.experiments.find(s=>s.key===e);return!r||!r.manual?null:this._runAutoExperiment(r,!0)}_runAutoExperiment(e,r,s){let i=e.key,o=this._activeAutoExperiments.get(i);if(e.manual&&!r&&!o)return null;let n=this.run(e),a=JSON.stringify(n.value);if(!s&&n.inExperiment&&o&&o.valueHash===a)return n;if(o&&this._undoActiveAutoExperiment(i),n.inExperiment){let u=this._applyDOMChanges(n.value);u&&this._activeAutoExperiments.set(e.key,{undo:u,valueHash:a})}return n}_undoActiveAutoExperiment(e){let r=this._activeAutoExperiments.get(e);r&&(r.undo(),this._activeAutoExperiments.delete(e))}_updateAllAutoExperiments(e){let r=this._ctx.experiments||[],s=new Set(r.map(i=>i.key));this._activeAutoExperiments.forEach((i,o)=>{s.has(o)||(i.undo(),this._activeAutoExperiments.delete(o))}),r.forEach(i=>{this._runAutoExperiment(i,!1,e)})}_fireSubscriptions(e,r){let s=e.key,i=this._assigned.get(s);(!i||i.result.inExperiment!==r.inExperiment||i.result.variationId!==r.variationId)&&(this._assigned.set(s,{experiment:e,result:r}),this._subscriptions.forEach(o=>{try{o(e,r)}catch(n){console.error(n)}}))}_trackFeatureUsage(e,r){if(r.source==="override")return;let s=JSON.stringify(r.value);if(this._trackedFeatures[e]!==s){if(this._trackedFeatures[e]=s,this._ctx.onFeatureUsage)try{this._ctx.onFeatureUsage(e,r)}catch(i){}!x||!window.fetch||(this._rtQueue.push({key:e,on:r.on}),this._rtTimer||(this._rtTimer=window.setTimeout(()=>{this._rtTimer=0;let i=[...this._rtQueue];this._rtQueue=[],this._ctx.realtimeKey&&window.fetch("https://rt.growthbook.io/?key=".concat(this._ctx.realtimeKey,"&events=").concat(encodeURIComponent(JSON.stringify(i))),{cache:"no-cache",mode:"no-cors"}).catch(()=>{})},this._ctx.realtimeInterval||2e3)))}}_getFeatureResult(e,r,s,i,o,n){let a={value:r,on:!!r,off:!r,source:s,ruleId:i||""};return o&&(a.experiment=o),n&&(a.experimentResult=n),this._trackFeatureUsage(e,a),a}isOn(e){return this.evalFeature(e).on}isOff(e){return this.evalFeature(e).off}getFeatureValue(e,r){let s=this.evalFeature(e).value;return s===null?r:s}feature(e){return this.evalFeature(e)}evalFeature(e){if(this._forcedFeatureValues.has(e))return this._getFeatureResult(e,this._forcedFeatureValues.get(e),"override");if(!this._ctx.features||!this._ctx.features[e])return this._getFeatureResult(e,null,"unknownFeature");let r=this._ctx.features[e];if(r.rules)for(let s of r.rules){if(s.condition&&!this._conditionPasses(s.condition)||s.filters&&this._isFilteredOut(s.filters))continue;if("force"in s){if(!this._isIncludedInRollout(s.seed||e,s.hashAttribute,s.range,s.coverage,s.hashVersion))continue;return s.tracks&&s.tracks.forEach(n=>{this._track(n.experiment,n.result)}),this._getFeatureResult(e,s.force,"force",s.id)}if(!s.variations)continue;let i={variations:s.variations,key:s.key||e};"coverage"in s&&(i.coverage=s.coverage),s.weights&&(i.weights=s.weights),s.hashAttribute&&(i.hashAttribute=s.hashAttribute),s.namespace&&(i.namespace=s.namespace),s.meta&&(i.meta=s.meta),s.ranges&&(i.ranges=s.ranges),s.name&&(i.name=s.name),s.phase&&(i.phase=s.phase),s.seed&&(i.seed=s.seed),s.hashVersion&&(i.hashVersion=s.hashVersion),s.filters&&(i.filters=s.filters);let o=this._run(i,e);if(this._fireSubscriptions(i,o),o.inExperiment&&!o.passthrough)return this._getFeatureResult(e,o.value,"experiment",s.id,i,o)}return this._getFeatureResult(e,r.defaultValue===void 0?null:r.defaultValue,"defaultValue")}_isIncludedInRollout(e,r,s,i,o){if(!s&&i===void 0)return!0;let{hashValue:n}=this._getHashAttribute(r);if(!n)return!1;let a=V(e,n,o||1);return a===null?!1:s?B(a,s):i!==void 0?a<=i:!0}_conditionPasses(e){return y(this.getAttributes(),e)}_isFilteredOut(e){return e.some(r=>{let{hashValue:s}=this._getHashAttribute(r.attribute);if(!s)return!0;let i=V(r.seed,s,r.hashVersion||2);return i===null?!0:!r.ranges.some(o=>B(i,o))})}_run(e,r){let s=e.key,i=e.variations.length;if(i<2)return this._getResult(e,-1,!1,r);if(this._ctx.enabled===!1)return this._getResult(e,-1,!1,r);e=this._mergeOverrides(e);let o=Me(s,this._getContextUrl(),i);if(o!==null)return this._getResult(e,o,!1,r);if(this._ctx.forcedVariations&&s in this._ctx.forcedVariations){let b=this._ctx.forcedVariations[s];return this._getResult(e,b,!1,r)}if(e.status==="draft"||e.active===!1)return this._getResult(e,-1,!1,r);let{hashValue:n}=this._getHashAttribute(e.hashAttribute);if(!n)return this._getResult(e,-1,!1,r);if(e.filters){if(this._isFilteredOut(e.filters))return this._getResult(e,-1,!1,r)}else if(e.namespace&&!Fe(n,e.namespace))return this._getResult(e,-1,!1,r);if(e.include&&!He(e.include))return this._getResult(e,-1,!1,r);if(e.condition&&!this._conditionPasses(e.condition))return this._getResult(e,-1,!1,r);if(e.groups&&!this._hasGroupOverlap(e.groups))return this._getResult(e,-1,!1,r);if(e.url&&!this._urlIsValid(e.url))return this._getResult(e,-1,!1,r);if(e.urlPatterns&&!Te(this._getContextUrl(),e.urlPatterns))return this._getResult(e,-1,!1,r);let a=V(e.seed||s,n,e.hashVersion||1);if(a===null)return this._getResult(e,-1,!1,r);let u=e.ranges||Ue(i,e.coverage===void 0?1:e.coverage,e.weights),c=De(a,u);if(c<0)return this._getResult(e,-1,!1,r);if("force"in e)return this._getResult(e,e.force===void 0?-1:e.force,!1,r);if(this._ctx.qaMode)return this._getResult(e,-1,!1,r);if(e.status==="stopped")return this._getResult(e,-1,!1,r);let h=this._getResult(e,c,!0,r,a);return this._track(e,h),h}log(e,r){this.debug&&(this._ctx.log?this._ctx.log(e,r):console.log(e,r))}_track(e,r){if(!this._ctx.trackingCallback)return;let s=e.key,i=r.hashAttribute+r.hashValue+s+r.variationId;if(!this._trackedExperiments.has(i)){this._trackedExperiments.add(i);try{this._ctx.trackingCallback(e,r)}catch(o){console.error(o)}}}_mergeOverrides(e){let r=e.key,s=this._ctx.overrides;return s&&s[r]&&(e=Object.assign({},e,s[r]),typeof e.url=="string"&&(e.url=X(e.url))),e}_getHashAttribute(e){let r=e||"id",s="";return this._attributeOverrides[r]?s=this._attributeOverrides[r]:this._ctx.attributes?s=this._ctx.attributes[r]||"":this._ctx.user&&(s=this._ctx.user[r]||""),{hashAttribute:r,hashValue:s}}_getResult(e,r,s,i,o){let n=!0;(r<0||r>=e.variations.length)&&(r=0,n=!1);let{hashAttribute:a,hashValue:u}=this._getHashAttribute(e.hashAttribute),c=e.meta?e.meta[r]:{},h={key:c.key||""+r,featureId:i,inExperiment:n,hashUsed:s,variationId:r,value:e.variations[r],hashAttribute:a,hashValue:u};return c.name&&(h.name=c.name),o!==void 0&&(h.bucket=o),c.passthrough&&(h.passthrough=c.passthrough),h}_getContextUrl(){return this._ctx.url||(x?window.location.href:"")}_urlIsValid(e){let r=this._getContextUrl();if(!r)return!1;let s=r.replace(/^https?:\/\//,"").replace(/^[^/]*\//,"/");return!!(e.test(r)||e.test(s))}_hasGroupOverlap(e){let r=this._ctx.groups||{};for(let s=0;s<e.length;s++)if(r[e[s]])return!0;return!1}_applyDOMChanges(e){if(!x)return;let r=[];if(e.css){let s=document.createElement("style");s.innerHTML=e.css,document.head.appendChild(s),r.push(()=>s.remove())}if(e.js){let s=document.createElement("script");s.innerHTML=e.js,document.body.appendChild(s),r.push(()=>s.remove())}return e.domMutations&&e.domMutations.forEach(s=>{r.push(Re.declarative(s).revert)}),()=>{r.forEach(s=>s())}}}});var qe=p(()=>{Pe()});function se(){if(!$&&($=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $(zt)}var $,zt,je=p(()=>{zt=new Uint8Array(16)});function Je(t,e=0){return f[t[e+0]]+f[t[e+1]]+f[t[e+2]]+f[t[e+3]]+"-"+f[t[e+4]]+f[t[e+5]]+"-"+f[t[e+6]]+f[t[e+7]]+"-"+f[t[e+8]]+f[t[e+9]]+"-"+f[t[e+10]]+f[t[e+11]]+f[t[e+12]]+f[t[e+13]]+f[t[e+14]]+f[t[e+15]]}var f,ze=p(()=>{f=[];for(let t=0;t<256;++t)f.push((t+256).toString(16).slice(1))});var Qt,ie,Qe=p(()=>{Qt=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ie={randomUUID:Qt}});function Gt(t,e,r){if(ie.randomUUID&&!e&&!t)return ie.randomUUID();t=t||{};let s=t.random||(t.rng||se)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){r=r||0;for(let i=0;i<16;++i)e[r+i]=s[i];return e}return Je(s)}var ne,Ge=p(()=>{Qe();je();ze();ne=Gt});var We=p(()=>{Ge()});function P(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)t[s]=r[s]}return t}function oe(t,e){function r(i,o,n){if(typeof document!="undefined"){n=P({},e,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var u in n)n[u]&&(a+="; "+u,n[u]!==!0&&(a+="="+n[u].split(";")[0]));return document.cookie=i+"="+t.write(o,i)+a}}function s(i){if(!(typeof document=="undefined"||arguments.length&&!i)){for(var o=document.cookie?document.cookie.split("; "):[],n={},a=0;a<o.length;a++){var u=o[a].split("="),c=u.slice(1).join("=");try{var h=decodeURIComponent(u[0]);if(n[h]=t.read(c,h),i===h)break}catch(b){}}return i?n[i]:n}}return Object.create({set:r,get:s,remove:function(i,o){r(i,"",P({},o,{expires:-1}))},withAttributes:function(i){return oe(this.converter,P({},this.attributes,i))},withConverter:function(i){return oe(P({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var Wt,E,Ze=p(()=>{Wt={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};E=oe(Wt,{path:"/"})});var ir=ot(et=>{qe();We();Ze();var Zt=()=>{let t="bv_sess",r=()=>ne(),s=n=>E.get(n),i=(n,a)=>{E.set(n,a,{expires:400})};if(s(t))return s(t);let o=r();return i(t,o),o},Yt="production",Xt=Zt();function er(){let t={};try{let e=sessionStorage.getItem("utm_params");if(e&&(t=JSON.parse(e)),location.search){let r=new URLSearchParams(location.search),s=!1;["source","medium","campaign","term","content"].forEach(i=>{let o="utm_".concat(i),n="utm"+i[0].toUpperCase()+i.slice(1);r.has(o)&&(t[n]=r.get(o)||"",s=!0)}),s&&sessionStorage.setItem("utm_params",JSON.stringify(t))}}catch(e){}return t}function tr(){let t=navigator.userAgent,e=t.match(/Edg/)?"edge":t.match(/Chrome/)?"chrome":t.match(/Firefox/)?"firefox":t.match(/Safari/)?"safari":"unknown";return m({id:Xt,clientId:E.get("_ga"),userCode:E.get("user_code"),loggedInAs:decodeURIComponent(E.get("loggedinas")),url:location.href,path:location.pathname,host:location.host,query:location.search,deviceType:t.match(/Mobi/)?"mobile":"desktop",browser:e},er())}window.dataLayer=window.dataLayer||[];var Ye=document.currentScript,rr=Ye?Ye.dataset:{},Xe=window.growthbook_config||{};function sr(){let t=rr.noAutoAttributes?{}:tr();return Xe.attributes&&Object.assign(t,Xe.attributes),t}Promise.resolve().then(()=>l(et,null,function*(){yield new O({enableDevMode:Yt!=="production",clientKey:"sdk-w9zDVPrcDn5Qb2E",decryptionKey:"mmS7pFInJv7eZG/CfqNS8g==",apiHost:"https://gbbv.beenverified.com",streamingHost:"https://gbbv.beenverified.com",subscribeToChanges:!0,attributes:sr(),trackingCallback:function(e,r){window.dataLayer.push({event:"experiment_viewed",eventCategory:"experiment",gbeid:e.key,gbvid:r.variationId})}}).loadFeatures()}))});ir();})();
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
