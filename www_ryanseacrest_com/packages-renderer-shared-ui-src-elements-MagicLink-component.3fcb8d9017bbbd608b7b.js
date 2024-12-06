"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([["packages-renderer-shared-ui-src-elements-MagicLink-component"],{"../../../packages/renderer/shared/core/src/utilities/live-station.ts":(e,t,n)=>{n.d(t,{c:()=>o});var r=n("../../../packages/shared/core/src/utils/slugify.ts");function o(e,t){const n=e.sections.general?.name?(0,r.lV)(e.sections.general.name):"",o=e.getStreamId(),i=e.index.slug.toUpperCase();return o?`${t.NATIONAL_SITE_URL}/live/${n}-${o}/?sc=inferno&pname=${i}`:null}},"../../../packages/renderer/shared/ui/src/elements/MagicLink.component.tsx":(e,t,n)=>{n.r(t),n.d(t,{MagicLink:()=>q,default:()=>V});var r=n("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),o=n("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),i=n("../../../node_modules/.pnpm/react-router@5.2.0_react@17.0.2/node_modules/react-router/esm/react-router.js"),a=n("../../../node_modules/.pnpm/@babel+runtime@7.25.4/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),s=n("../../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js"),c=n("../../../node_modules/.pnpm/@babel+runtime@7.25.4/node_modules/@babel/runtime/helpers/esm/extends.js"),l=n("../../../node_modules/.pnpm/@babel+runtime@7.25.4/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),u=n("../../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js");o.Component;o.Component;var d=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?(0,s.ob)(e,null,null,t):e},p=function(e){return e},f=o.forwardRef;void 0===f&&(f=p);var h=f((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,a=(0,l.Z)(e,["innerRef","navigate","onClick"]),s=a.target,u=(0,c.Z)({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return u.ref=p!==f&&t||n,o.createElement("a",u)}));var g=f((function(e,t){var n=e.component,r=void 0===n?h:n,a=e.replace,s=e.to,g=e.innerRef,v=(0,l.Z)(e,["component","replace","to","innerRef"]);return o.createElement(i.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=e.history,i=m(d(s,e.location),e.location),l=i?n.createHref(i):"",h=(0,c.Z)({},v,{href:l,navigate:function(){var t=d(s,e.location);(a?n.replace:n.push)(t)}});return p!==f?h.ref=t||g:h.innerRef=g,o.createElement(r,h)}))})),v=function(e){return e},b=o.forwardRef;void 0===b&&(b=v);var y=b((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,a=e.activeClassName,s=void 0===a?"active":a,p=e.activeStyle,f=e.className,h=e.exact,y=e.isActive,_=e.location,x=e.sensitive,w=e.strict,C=e.style,j=e.to,k=e.innerRef,A=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(i.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=_||e.location,a=m(d(j,n),n),l=a.pathname,L=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=L?(0,i.LX)(n.pathname,{path:L,exact:h,sensitive:x,strict:w}):null,R=!!(y?y(O,n):O),E=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(f,s):f,S=R?(0,c.Z)({},C,{},p):C,$=(0,c.Z)({"aria-current":R&&r||null,className:E,style:S,to:a},A);return v!==b?$.ref=t||k:$.innerRef=k,o.createElement(g,$)}))})),_=function(){return _=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_.apply(this,arguments)};var x="",w=null,C=null,j=null;function k(){x="",null!==w&&w.disconnect(),null!==C&&(window.clearTimeout(C),C=null)}function A(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function L(){var e=null;if("#"===x)e=document.body;else{var t=x.replace("#","");null===(e=document.getElementById(t))&&"#top"===x&&(e=document.body)}if(null!==e){j(e);var n=e.getAttribute("tabindex");return null!==n||A(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||A(e)||(e.blur(),e.removeAttribute("tabindex")),k(),!0}return!1}function O(e){return o.forwardRef((function(t,n){var r="";"string"==typeof t.to&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):"object"==typeof t.to&&"string"==typeof t.to.hash&&(r=t.to.hash);var i={};e===y&&(i.isActive=function(e,t){return e&&e.isExact&&t.hash===r});var a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["scroll","smooth","timeout","elementId"]);return o.createElement(e,_({},i,a,{onClick:function(e){var n;k(),x=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(e),""===x||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(j=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},n=t.timeout,window.setTimeout((function(){!1===L()&&(null===w&&(w=new MutationObserver(L)),w.observe(document,{attributes:!0,childList:!0,subtree:!0}),C=window.setTimeout((function(){k()}),n||1e4))}),0))},ref:n}),t.children)}))}var R=O(g),E=(O(y),n("../../../packages/shared/core/src/lib/logging.ts")),S=n("../../../packages/shared/core/src/services/Sites.ts"),$=n("../../../packages/shared/webapi/src/generated/webapi.g.ts"),P=n("../../../packages/renderer/shared/core/src/utilities/live-station.ts");const U=E.b9.logger("redirects");const N=(e,t,n)=>{if(function(e){return e.hasOwnProperty("regex")}(e)){const[,r]=t.split("?");let o=e.regex?t.replace(n,e.destination.value.replace(/\\/g,"$")):e.destination.value;if(e.queryParamsHandling===$.rCU.Discard);else if(e.queryParamsHandling===$.rCU.Original)o=o.split("?")[0]+(r?`?${r}`:"");else if(e.queryParamsHandling===$.rCU.Merge){const e=new URLSearchParams(o.split("?")[1]),n=new URLSearchParams(t.split("?")[1]),r={};Array.from(n.entries()).forEach((e=>{let[t,n]=e;return r[t]=n})),Array.from(e.entries()).forEach((e=>{let[t,n]=e;return r[t]=n}));const i=Object.entries(r).map((e=>{let[t,n]=e;return`${t}=${n}`})).join("&");i&&(o=`${o.split("?")[0]}?${i}`)}return o||null}return e.destination.value||null};$.Ypv.Url,$.Ypv.Brand;function T(e){const[t,n=""]=e.split("?");return n?t.endsWith("/")?[t.toLowerCase(),n].join("?"):[`${t}/`.toLowerCase(),n].join("?"):t.endsWith("/")?t.toLowerCase():`${t}/`.toLowerCase()}function I(e,t){const n=T(t);return T(e)===n?n:void 0}function D(e,t){const n=new RegExp(e,"i");return T(t).match(n)?n:void 0}const K=e=>{const t=[],n=[];return e.map((e=>{e&&(e.regex?n.push(e):t.push(e))})),[...t,...n.sort(((e,t)=>e.priority-t.priority))]},Z=(e,t)=>{const n=Date.now();for(const r of t){if(!r.source||r.disabled||r.schedule&&(r.schedule.begin>n||r.schedule.end<n))continue;const t=r.matchQueryString?e:e.split("?")[0],o=r.regex?D(r.source,t):I(r.source,t);if(o)return{redirect:r,match:o}}},H=(e,t)=>{const n=Date.now();for(const r of t)if(!r.disabled&&(!r.schedule||r.schedule.begin<=n&&r.schedule.end>n))for(const t of r.keywords){const n=I(`/search/${encodeURIComponent(t.toLowerCase().trim())}`,e);if(n)return U.debug("Search override match found:",r),{redirect:r,match:n}}};var W=n("../../../packages/renderer/shared/core/src/lib/clickSection.tsx"),B=n("../../../packages/renderer/shared/core/src/utilities/window.ts"),M=n("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const Y=E.b9.logger("MagicLink"),q=(0,r.f3)("store")((0,r.Pi)((e=>{const{store:t,external:n,label:r="",tabbable:i=!0,sectionName:a,to:s,action:c,children:l,...u}=e;if(!t)return null;const d=(0,o.useRef)(e.context),m="string"==typeof s?s.trim():s,p=(0,o.useCallback)(((e,n)=>{const o=t.page.currentPage,i=o?`${t.microsite?"microsite_":""}${o.name}`:"";d.current||(d.current=r||("string"==typeof l?l.toString():"string"==typeof n?n:"")),a&&(e=a);let s="";(0,B.Ax)()&&(s=window.location.href),t.onAnalyticsAction.dispatch({sectionName:e,pageName:i,context:d.current,action:c||"click",url:n,referrer:s})}),[t,a,d,c,r,l]),{site:f,env:h}=t,{innerRef:g,replace:v,...b}=u;let y=m;if(f&&h){const e=f.getPrimaryDomain();if(e&&"string"==typeof m&&m.includes(e)){const e=m.startsWith("//")?`${h.PROTOCOL}:${m}`:m;try{const t=new URL(e);y=t.toString().replace(t.origin,"")}catch(e){Y.error("Could not parse url",e)}}}let _=void 0!==n;if(("string"==typeof m&&m.startsWith("//")||"#"===m)&&(_=!0),t&&y){const e=((e,t,n)=>{const{config:r}=e,o=(0,P.c)(e,t),i=o?{source:"/listen/",destination:{value:o,type:$.Ypv.Url},permanent:!0,id:"",disabled:!1,regex:!1,priority:0,queryParamsHandling:$.rCU.Original,matchQueryString:!1}:null;return Z(n,K([...r.redirects,i]))||H(n,r.searchOverrides)})(f,h,y.toString());if(e){const{redirect:t,match:n}=e;t&&(t.destination.type===$.Ypv.Url&&t.destination.value?y=N(t,y.toString(),n)||y:t.destination.type===$.Ypv.Brand&&(_=!0))}}if("string"==typeof y&&y.startsWith("http")&&(_=!0),!_&&y)try{const e=new URL(`https://example.com${y}`);e.pathname.endsWith("/")||(e.pathname+="/",y=e.toString().replace(e.origin,""))}catch(e){}const x={};return r&&(x["aria-label"]=r),y&&_?(b.target||(b.target="_blank"),"_blank"===b.target&&(b.rel="noopener"),b.context&&delete b.context,(0,M.jsx)(W.G.Consumer,{children:e=>(0,M.jsx)("a",{href:y,...b,...x,onClick:()=>p(e,y),children:l})})):(u.target=void 0,u.context&&delete u.context,(0,M.jsx)(W.G.Consumer,{children:e=>(0,M.jsx)(R,{to:y,...u,...x,tabIndex:i?0:-1,onClick:()=>p(e,y),children:l})}))}))),V=q}}]);
//# sourceMappingURL=packages-renderer-shared-ui-src-elements-MagicLink-component.3fcb8d9017bbbd608b7b.js.map