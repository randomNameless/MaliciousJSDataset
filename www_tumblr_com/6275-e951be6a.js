!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="377665eb-396a-4023-9430-9f14e0262d2d",e._sentryDebugIdIdentifier="sentry-dbid-377665eb-396a-4023-9430-9f14e0262d2d")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[6275],{9930:(e,t,n)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(36665),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,l=r.useEffect,i=r.useLayoutEffect,a=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,d=r[1];return i(function(){u.value=n,u.getSnapshot=t,s(u)&&d({inst:u})},[e,n,t]),l(function(){return s(u)&&d({inst:u}),e(function(){s(u)&&d({inst:u})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},13563:(e,t,n)=>{e.exports=n(9930)},63130:(e,t,n)=>{n.d(t,{B1:()=>s,OH:()=>d,Ts:()=>a,UE:()=>p,Up:()=>m,cJ:()=>f,mj:()=>i,od:()=>v,vA:()=>c,y$:()=>l});var r=n(96723),u=n(90732);function o(e,t){let n=e.__unstableInternals;return(0,r.V1)(n,"Invalid store"),n[t]}function l(e,...t){let n=e,o=n,i=Symbol(),s=r.lQ,c=/* @__PURE__ */new Set,f=/* @__PURE__ */new Set,m=/* @__PURE__ */new Set,v=/* @__PURE__ */new Set,p=/* @__PURE__ */new Set,S=/* @__PURE__ */new WeakMap,b=/* @__PURE__ */new WeakMap,g=(e,t,n=v)=>(n.add(t),b.set(t,e),()=>{var e;null==(e=S.get(t))||e(),S.delete(t),b.delete(t),n.delete(t)}),y=(e,l,a=!1)=>{var s;if(!(0,r.mQ)(n,e))return;let d=(0,r.Qh)(l,n[e]);if(d===n[e])return;if(!a)for(let n of t)null==(s=null==n?void 0:n.setState)||s.call(n,e,d);let c=n;n=(0,u.ko)((0,u.IA)({},n),{[e]:d});let m=Symbol();i=m,f.add(e);let g=(t,r,u)=>{var o;let l=b.get(t);(!l||l.some(t=>u?u.has(t):t===e))&&(null==(o=S.get(t))||o(),S.set(t,t(n,r)))};for(let e of v)g(e,c);queueMicrotask(()=>{if(i!==m)return;let e=n;for(let e of p)g(e,o,f);o=e,f.clear()})},w={getState:()=>n,setState:y,__unstableInternals:{setup:e=>(m.add(e),()=>m.delete(e)),init:()=>{let e=c.size,u=Symbol();c.add(u);let o=()=>{c.delete(u),c.size||s()};if(e)return o;let l=(0,r.xD)(n).map(e=>(0,r.cy)(...t.map(t=>{var n;let u=null==(n=null==t?void 0:t.getState)?void 0:n.call(t);if(u&&(0,r.mQ)(u,e))return d(t,[e],t=>{y(e,t[e],!0)})}))),i=[];for(let e of m)i.push(e());let f=t.map(a);return s=(0,r.cy)(...l,...i,...f),o},subscribe:(e,t)=>g(e,t),sync:(e,t)=>(S.set(t,t(n,n)),g(e,t)),batch:(e,t)=>(S.set(t,t(n,o)),g(e,t,p)),pick:e=>l((0,r.Up)(n,e),w),omit:e=>l((0,r.cJ)(n,e),w)}};return w}function i(e,...t){if(e)return o(e,"setup")(...t)}function a(e,...t){if(e)return o(e,"init")(...t)}function s(e,...t){if(e)return o(e,"subscribe")(...t)}function d(e,...t){if(e)return o(e,"sync")(...t)}function c(e,...t){if(e)return o(e,"batch")(...t)}function f(e,...t){if(e)return o(e,"omit")(...t)}function m(e,...t){if(e)return o(e,"pick")(...t)}function v(...e){let t=l(e.reduce((e,t)=>{var n;let r=null==(n=null==t?void 0:t.getState)?void 0:n.call(t);return r?Object.assign(e,r):e},{}),...e);return Object.assign({},...e,t)}function p(e,t){}},23834:(e,t,n)=>{n.d(t,{h:()=>l});var r=n(63130),u=n(96723),o=n(90732);function l(e={}){let t=(0,r.od)(e.store,(0,r.cJ)(e.disclosure,["contentElement","disclosureElement"]));(0,r.UE)(e,t);let n=null==t?void 0:t.getState(),i=(0,u.Jh)(e.open,null==n?void 0:n.open,e.defaultOpen,!1),a=(0,u.Jh)(e.animated,null==n?void 0:n.animated,!1),s={open:i,animated:a,animating:!!a&&i,mounted:i,contentElement:(0,u.Jh)(null==n?void 0:n.contentElement,null),disclosureElement:(0,u.Jh)(null==n?void 0:n.disclosureElement,null)},d=(0,r.y$)(s,t);return(0,r.mj)(d,()=>(0,r.OH)(d,["animated","animating"],e=>{e.animated||d.setState("animating",!1)})),(0,r.mj)(d,()=>(0,r.B1)(d,["open"],()=>{d.getState().animated&&d.setState("animating",!0)})),(0,r.mj)(d,()=>(0,r.OH)(d,["open","animating"],e=>{d.setState("mounted",e.open||e.animating)})),(0,o.ko)((0,o.IA)({},d),{disclosure:e.disclosure,setOpen:e=>d.setState("open",e),show:()=>d.setState("open",!0),hide:()=>d.setState("open",!1),toggle:()=>d.setState("open",e=>!e),stopAnimation:()=>d.setState("animating",!1),setContentElement:e=>d.setState("contentElement",e),setDisclosureElement:e=>d.setState("disclosureElement",e)})}},20311:(e,t,n)=>{n.d(t,{XP:()=>d,YH:()=>c,Zg:()=>s,cH:()=>a,fm:()=>i,oL:()=>f});var r=n(43726),u=n(66034),o=n(36665),l=(0,u.B0)([r.sI],[r.WT]);l.useContext;var i=l.useScopedContext,a=l.useProviderContext,s=l.ContextProvider,d=l.ScopedContextProvider,c=(0,o.createContext)(void 0),f=(0,o.createContext)(void 0)},43726:(e,t,n)=>{n.d(t,{WT:()=>l,sI:()=>o,vO:()=>u});var r=(0,n(66034).B0)();r.useContext,r.useScopedContext;var u=r.useProviderContext,o=r.ContextProvider,l=r.ScopedContextProvider},37308:(e,t,n)=>{n.d(t,{aT:()=>S,dK:()=>p});var r=n(20311),u=n(43726),o=n(66034),l=n(48277),i=n(21368),a=n(47766),s=n(96723),d=n(36665),c=n(33672),f=n(60397);function m(e,t){let n=setTimeout(t,e);return()=>clearTimeout(n)}function v(...e){return e.join(", ").split(", ").reduce((e,t)=>{let n=t.endsWith("ms")?1:1e3,r=Number.parseFloat(t||"0s")*n;return r>e?r:e},0)}function p(e,t,n){return!n&&!1!==t&&(!e||!!t)}var S=(0,o.ab)(function(e){var{store:t,alwaysVisible:n}=e,o=(0,a.YG)(e,["store","alwaysVisible"]);let S=(0,u.vO)();t=t||S,(0,s.V1)(t,!1);let b=(0,d.useRef)(null),g=(0,i.Bi)(o.id),[y,w]=(0,d.useState)(null),E=t.useState("open"),h=t.useState("mounted"),C=t.useState("animated"),x=t.useState("contentElement"),I=(0,l.O$)(t.disclosure,"contentElement");(0,i.UQ)(()=>{b.current&&(null==t||t.setContentElement(b.current))},[t]),(0,i.UQ)(()=>{let e;return null==t||t.setState("animated",t=>(e=t,!0)),()=>{void 0!==e&&(null==t||t.setState("animated",e))}},[t]),(0,i.UQ)(()=>{if(C){var e;let t;if(!(null==x?void 0:x.isConnected)){w(null);return}return e=()=>{w(E?"enter":h?"leave":null)},t=requestAnimationFrame(()=>{t=requestAnimationFrame(e)}),()=>cancelAnimationFrame(t)}},[C,x,E,h]),(0,i.UQ)(()=>{if(!t||!C||!y||!x)return;let e=()=>null==t?void 0:t.setState("animating",!1),n=()=>(0,c.flushSync)(e);if("leave"===y&&E||"enter"===y&&!E)return;if("number"==typeof C)return m(C,n);let{transitionDuration:r,animationDuration:u,transitionDelay:o,animationDelay:l}=getComputedStyle(x),{transitionDuration:i="0",animationDuration:a="0",transitionDelay:s="0",animationDelay:d="0"}=I?getComputedStyle(I):{},f=v(o,l,s,d)+v(r,u,i,a);if(!f){"enter"===y&&t.setState("animated",!1),e();return}return m(Math.max(f-1e3/60,0),n)},[t,C,x,I,E,y]);let O=p(h,(o=(0,i.w7)(o,e=>/* @__PURE__ */(0,f.jsx)(r.XP,{value:t,children:e}),[t])).hidden,n),k=o.style,_=(0,d.useMemo)(()=>O?(0,a.ko)((0,a.IA)({},k),{display:"none"}):k,[O,k]);return o=(0,a.ko)((0,a.IA)({id:g,"data-open":E||void 0,"data-enter":"enter"===y||void 0,"data-leave":"leave"===y||void 0,hidden:O},o),{ref:(0,i.SV)(g?t.setContentElement:null,b,o.ref),style:_}),(0,s.HR)(o)}),b=(0,o.Rf)(function(e){let t=S(e);return(0,o.n)("div",t)});(0,o.Rf)(function(e){var{unmountOnHide:t}=e,n=(0,a.YG)(e,["unmountOnHide"]);let r=(0,u.vO)(),o=n.store||r;return!1===(0,l.O$)(o,e=>!t||(null==e?void 0:e.mounted))?null:/* @__PURE__ */(0,f.jsx)(b,(0,a.IA)({},n))})},33974:(e,t,n)=>{n.d(t,{E:()=>i,W:()=>l});var r=n(48277),u=n(21368),o=n(23834);function l(e,t,n){return(0,u.w5)(t,[n.store,n.disclosure]),(0,r.Tz)(e,n,"open","setOpen"),(0,r.Tz)(e,n,"mounted","setMounted"),(0,r.Tz)(e,n,"animated"),Object.assign(e,{disclosure:n.disclosure})}function i(e={}){let[t,n]=(0,r.Pj)(o.h,e);return l(t,n,e)}},48277:(e,t,n)=>{n.d(t,{O$:()=>d,PX:()=>c,Pj:()=>m,Tz:()=>f});var r=n(21368),u=n(47766),o=n(96723),l=n(63130),i=n(36665),{useSyncExternalStore:a}=n(13563),s=()=>()=>{};function d(e,t=o.D_){let n=i.useCallback(t=>e?(0,l.B1)(e,null,t):s(),[e]),r=()=>{let n="string"==typeof t?t:null,r="function"==typeof t?t:null,u=null==e?void 0:e.getState();return r?r(u):u&&n&&(0,o.mQ)(u,n)?u[n]:void 0};return a(n,r,r)}function c(e,t){let n=i.useRef({}),r=i.useCallback(t=>e?(0,l.B1)(e,null,t):s(),[e]),d=()=>{let r=null==e?void 0:e.getState(),l=!1,i=n.current;for(let e in t){let n=t[e];if("function"==typeof n){let t=n(r);t!==i[e]&&(i[e]=t,l=!0)}if("string"==typeof n){if(!r||!(0,o.mQ)(r,n))continue;let t=r[n];t!==i[e]&&(i[e]=t,l=!0)}}return l&&(n.current=(0,u.IA)({},i)),n.current};return a(r,d,d)}function f(e,t,n,u){let i=(0,o.mQ)(t,n)?t[n]:void 0,a=u?t[u]:void 0,s=(0,r.hX)({value:i,setValue:a});(0,r.UQ)(()=>(0,l.OH)(e,[n],(e,t)=>{let{value:r,setValue:u}=s.current;u&&e[n]!==t[n]&&e[n]!==r&&u(e[n])}),[e,n]),(0,r.UQ)(()=>{if(void 0!==i)return e.setState(n,i),(0,l.vA)(e,[n],()=>{void 0!==i&&e.setState(n,i)})})}function m(e,t){let[n,o]=i.useState(()=>e(t));(0,r.UQ)(()=>(0,l.Ts)(n),[n]);let a=i.useCallback(e=>d(n,e),[n]);return[i.useMemo(()=>(0,u.ko)((0,u.IA)({},n),{useState:a}),[n,a]),(0,r._q)(()=>{o(n=>e((0,u.IA)((0,u.IA)({},t),n.getState())))})]}}}]);