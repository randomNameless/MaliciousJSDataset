/*! For license information please see 8068.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8068],{4332:(t,n,r)=>{"use strict";r.d(n,{U:()=>e});const e=(0,r(2325).Mz)((t=>t.analytics||{}),(t=>t.fastlyBeaconParams||{}))},3260:t=>{},8734:(t,n,r)=>{"use strict";r.d(n,{G4:()=>i,_d:()=>u,kd:()=>d});var e=r(5015),o=r.n(e),a=r(8023),c=r.n(a);const s="/110806737/Excite_2.0";function u(){return window.scrollY||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0)}function i(t){return!!t&&(!0===t?t:!(!o()(t)||"true"!==t)||!(!c()(t)||1!==t))}function l(t){return t.replace(/-/g,"_").split("_").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join("_")}function d(t){if("/"===t)return`${s}/Homepage`;const n=t.split("/"),r=l(n[1]),e=n[2]?l(n[2]):r;return`${s}/${r}/${e}`}},4709:(t,n,r)=>{"use strict";r.d(n,{Gq:()=>e,kc:()=>s,oF:()=>o.A,C2:()=>d,df:()=>f}),r(8734);const e=function(){return crypto.randomUUID()};r(8156),r(2013);var o=r(8788),a=r(2194),c=r.n(a);const s=(t,n,r,e)=>{let o={};o="mobile"===t?e:r;const a=c()(n,(t=>null==t));return{...o,...a}};var u=r(2216),i=r.n(u);function l(t){switch(t){case"pageview":return window.fbpvts||(window.fbpvts=Date.now()),window.fbpvts;case"action":return window.fbacts&&!window.forceFbacts||(window.fbacts=Date.now(),window.forceFbacts=!0),window.fbacts;default:return""}return""}r(1003);const d=(t,n,r,e)=>{const o=r,a=window.signalParameter?.requestGUID;i()(a)||(o.tmtry=!0,o.tmtryId=a);const s=c()({type:"click",link_type:n.fastlyEventName||n.event,rt:n.resultType,ps:n.providerSource,url:e,eid:l("action"),clk_target_class:t.currentTarget.className,clk_target_tag:t.target.tagName,dabuPageViewId:n.dabuPageViewId,slug:n.slug,ordinal:n.ordinal,ueid:n.ueid},i()),u=new URLSearchParams({...o,...s});window.navigator.sendBeacon(`/_action?${u.toString()}`)},f=(t,n)=>{const r={...n,...t},e=new URLSearchParams({...r});window.navigator.sendBeacon(`/_action?${e.toString()}`)};r(3260)},3945:t=>{t.exports=function(t,n,r,e){for(var o=-1,a=null==t?0:t.length;++o<a;){var c=t[o];n(e,c,r(c),t)}return e}},2429:(t,n,r)=>{var e=r(909);t.exports=function(t,n,r,o){return e(t,(function(t,e,a){n(o,t,r(t),a)})),o}},909:(t,n,r)=>{var e=r(641),o=r(8329)(e);t.exports=o},641:(t,n,r)=>{var e=r(6649),o=r(5950);t.exports=function(t,n){return t&&e(t,n,o)}},2e3:(t,n,r)=>{var e=r(3945),o=r(2429),a=r(5389),c=r(6449);t.exports=function(t,n){return function(r,s){var u=c(r)?e:o,i=n?n():{};return u(r,t,a(s,2),i)}}},8329:(t,n,r)=>{var e=r(4894);t.exports=function(t,n){return function(r,o){if(null==r)return r;if(!e(r))return t(r,o);for(var a=r.length,c=n?a:-1,s=Object(r);(n?c--:++c<a)&&!1!==o(s[c],c,s););return r}}},2013:(t,n,r)=>{var e=r(3360),o=r(2e3),a=Object.prototype.hasOwnProperty,c=o((function(t,n,r){a.call(t,r)?t[r].push(n):e(t,r,[n])}));t.exports=c},8023:(t,n,r)=>{var e=r(2552),o=r(346);t.exports=function(t){return"number"==typeof t||o(t)&&"[object Number]"==e(t)}},5015:(t,n,r)=>{var e=r(2552),o=r(6449),a=r(346);t.exports=function(t){return"string"==typeof t||!o(t)&&a(t)&&"[object String]"==e(t)}}}]);