!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="52caca2b-3534-4e3d-b7b4-2bc992e45d6c",e._sentryDebugIdIdentifier="sentry-dbid-52caca2b-3534-4e3d-b7b4-2bc992e45d6c")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[715],{80715:(e,t,n)=>{n.d(t,{f:()=>b,a:()=>y});var r=n(47752),i=n(21331),l=n(97792),u=n(83567),o=n(74059),a=/*#__PURE__*/n.n(o),s=n(90657),d=n(52017);n(36665);var c=n(45202),f=n(4613),p=n(75182),v=n(69998);let h={container:"fxR1V",header:"W6hAv",content:"gAJ73",footer:"KSkuV",small:"gex8i",medium:"DuRbe",large:"Q895s",pinToLeft:"SQWMC",pinToRight:"RqV78"};var m=n(60397);let b=({children:e,...t})=>{let n=(0,c.Em)();return/*#__PURE__*/(0,m.jsxs)(r.lG,{autoFocusOnShow:!1,backdrop:!0,focusable:!0,getPersistentElements:()=>{let e=p.A()?.document.getElementById("cmp-app-container");return e?[e]:[]},hideOnEscape:!n,hideOnInteractOutside:!n,modal:!0,portal:!0,preventBodyScroll:!0,...t,children:[t.open&&/*#__PURE__*/(0,m.jsx)(s.Ay,{disable:s.WC}),e]})},g=e=>{let{_c:t}=(0,f.Us)();return/*#__PURE__*/(0,m.jsxs)("div",{className:a()(h.header,e.className),children:[/*#__PURE__*/(0,m.jsx)(i.X,{children:e.headerText}),e.children,e.withCloseButton&&/*#__PURE__*/(0,m.jsxs)(l.d,{render:/*#__PURE__*/(0,m.jsx)(v.JD,{context:"content",size:"small"}),children:[/*#__PURE__*/(0,m.jsx)(u.s,{children:t("Screenreader-only label for close button in modals","Close")}),/*#__PURE__*/(0,m.jsx)(d.iRy,{})]})]})},x=e=>/*#__PURE__*/(0,m.jsx)(g,{...e}),y=({onClose:e,isOpen:t,headerText:n,size:r="s",pinToSide:i,footer:l,footerWrapperClassName:u,children:o,className:s,withCloseButton:d=!0,renderHeader:c=x,...f})=>/*#__PURE__*/(0,m.jsxs)(b,{className:a()(h.container,{[h.small]:"s"===r,[h.medium]:"m"===r,[h.large]:"l"===r,[h.pinToLeft]:"left"===i,[h.pinToRight]:"right"===i},s),onClose:t=>{e?.(t)},open:t,...f,children:[c({withCloseButton:d,headerText:n}),/*#__PURE__*/(0,m.jsx)("div",{className:h.content,children:o}),l&&/*#__PURE__*/(0,m.jsx)("div",{className:a()(h.footer,u),children:l})]});y.Header=g},1044:(e,t,n)=>{n.d(t,{Y:()=>i});var r=n(23834);function i(e={}){return(0,r.h)(e)}},22754:(e,t,n)=>{n.d(t,{N:()=>u,j:()=>o});var r=n(33974),i=n(48277),l=n(1044);function u(e,t,n){return(0,r.W)(e,t,n)}function o(e={}){let[t,n]=(0,i.Pj)(l.Y,e);return u(t,n,e)}},59649:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(36665).createContext)(0)},47752:(e,t,n)=>{function r(e,...t){if(!e)return!1;let n=e.getAttribute("data-backdrop");return null!=n&&(""===n||"true"===n||!t.length||t.some(e=>n===e))}n.d(t,{lG:()=>en,AV:()=>et,sp:()=>ee});var i=/* @__PURE__ */new WeakMap;function l(e,t,n){i.has(e)||i.set(e,/* @__PURE__ */new Map);let r=i.get(e),l=r.get(t);if(!l)return r.set(t,n()),()=>{var e;null==(e=r.get(t))||e(),r.delete(t)};let u=n(),o=()=>{u(),l(),r.delete(t)};return r.set(t,o),()=>{r.get(t)!==o||(u(),r.set(t,l))}}function u(e,t,n){return l(e,t,()=>{let r=e.getAttribute(t);return e.setAttribute(t,n),()=>{null==r?e.removeAttribute(t):e.setAttribute(t,r)}})}function o(e,t,n){return l(e,t,()=>{let r=t in e,i=e[t];return e[t]=n,()=>{r?e[t]=i:delete e[t]}})}function a(e,t){return e?l(e,"style",()=>{let n=e.style.cssText;return Object.assign(e.style,t),()=>{e.style.cssText=n}}):()=>{}}var s=n(61995),d=n(96723),c=["SCRIPT","STYLE"];function f(e){return`__ariakit-dialog-snapshot-${e}`}function p(e,t,n,r){for(let i of t){if(!(null==i?void 0:i.isConnected))continue;let l=t.some(e=>!!e&&e!==i&&e.contains(i)),u=(0,s.YE)(i),o=i;for(;i.parentElement&&i!==u.body;){if(null==r||r(i.parentElement,o),!l)for(let r of i.parentElement.children)(function(e,t,n){return!c.includes(t.tagName)&&!!function(e,t){let n=(0,s.YE)(t),r=f(e);if(!n.body[r])return!0;for(;;){if(t===n.body)return!1;if(t[r])return!0;if(!t.parentElement)return!1;t=t.parentElement}}(e,t)&&!n.some(e=>e&&(0,s.gR)(t,e))})(e,r,t)&&n(r,o);i=i.parentElement}}}function v(e="",t=!1){return`__ariakit-dialog-${t?"ancestor":"outside"}${e?`-${e}`:""}`}function h(e,t=""){return(0,d.cy)(o(e,v("",!0),!0),o(e,v(t,!0),!0))}function m(e,t){if(e[v(t,!0)])return!0;let n=v(t);for(;;){if(e[n])return!0;if(!e.parentElement)return!1;e=e.parentElement}}function b(e,t){let n=[],i=t.map(e=>null==e?void 0:e.id);return p(e,t,t=>{r(t,...i)||n.unshift(function(e,t=""){return(0,d.cy)(o(e,v(),!0),o(e,v(t),!0))}(t,e))},(t,r)=>{r.hasAttribute("data-dialog")&&r.id!==e||n.unshift(h(t,e))}),()=>{for(let e of n)e()}}var g=n(37308),x=n(30281),y=n(33974),E=n(48277),w=n(21368),A=n(47766),j=n(36665),k=n(60397);function R({store:e,backdrop:t,alwaysVisible:n,hidden:r}){let i=(0,j.useRef)(null),l=(0,y.E)({disclosure:e}),u=(0,E.O$)(e,"contentElement");(0,j.useEffect)(()=>{let e=i.current;e&&u&&(e.style.zIndex=getComputedStyle(u).zIndex)},[u]),(0,w.UQ)(()=>{let e=null==u?void 0:u.id;if(!e)return;let t=i.current;if(t)return h(t,e)},[u]);let o=(0,g.aT)({ref:i,store:l,role:"presentation","data-backdrop":(null==u?void 0:u.id)||"",alwaysVisible:n,hidden:null!=r?r:void 0,style:{position:"fixed",top:0,right:0,bottom:0,left:0}});if(!t)return null;if((0,j.isValidElement)(t))return/* @__PURE__ */(0,k.jsx)(x.X,(0,A.ko)((0,A.IA)({},o),{render:t}));let a="boolean"!=typeof t?t:"div";return/* @__PURE__ */(0,k.jsx)(x.X,(0,A.ko)((0,A.IA)({},o),{render:/* @__PURE__ */(0,k.jsx)(a,{})}))}function S(){return"inert"in HTMLElement.prototype}var O=n(62990);function I(e,t){if(!("style"in e))return d.lQ;if(S())return o(e,"inert",!0);let n=(0,O.a9)(e,!0).map(e=>{if(null==t?void 0:t.some(t=>t&&(0,s.gR)(t,e)))return d.lQ;let n=l(e,"focus",()=>(e.focus=d.lQ,()=>{delete e.focus}));return(0,d.cy)(u(e,"tabindex","-1"),n)});return(0,d.cy)(...n,u(e,"aria-hidden","true"),a(e,{pointerEvents:"none",userSelect:"none",cursor:"default"}))}var C=n(33672),Y=n(11702),L=n(63130),_=(0,j.createContext)({}),$=n(41009),F=n(87737);function P({store:e,type:t,listener:n,capture:r,domReady:i}){let l=(0,w._q)(n),u=(0,E.O$)(e,"open"),o=(0,j.useRef)(!1);(0,w.UQ)(()=>{if(!u||!i)return;let{contentElement:t}=e.getState();if(!t)return;let n=()=>{o.current=!0};return t.addEventListener("focusin",n,!0),()=>t.removeEventListener("focusin",n,!0)},[e,u,i]),(0,j.useEffect)(()=>{if(u)return(0,$.dg)(t,t=>{let{contentElement:n,disclosureElement:r}=e.getState(),i=t.target;n&&i&&!(!("HTML"===i.tagName||(0,s.gR)((0,s.YE)(i).body,i))||(0,s.gR)(n,i)||function(e,t){if(!e)return!1;if((0,s.gR)(e,t))return!0;let n=t.getAttribute("aria-activedescendant");if(n){let t=(0,s.YE)(e).getElementById(n);if(t)return(0,s.gR)(e,t)}return!1}(r,i)||i.hasAttribute("data-focus-trap")||function(e,t){if(!("clientY"in e))return!1;let n=t.getBoundingClientRect();return 0!==n.width&&0!==n.height&&n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width}(t,n))&&(!o.current||m(i,n.id))&&((0,F.Am)(i)||l(t))},r)},[u,r])}function T(e,t){return"function"==typeof e?e(t):!!e}var M=n(59443),N=n(66034),Q=(0,N.ab)(function(e){var{autoFocusOnShow:t=!0}=e,n=(0,A.YG)(e,["autoFocusOnShow"]);return(0,w.w7)(n,e=>/* @__PURE__ */(0,k.jsx)(M.g.Provider,{value:t,children:e}),[t])});(0,N.Rf)(function(e){let t=Q(e);return(0,N.n)("div",t)});var q=n(59649);function B({level:e,children:t}){let n=(0,j.useContext)(q.A),r=Math.max(Math.min(e||n+1,6),1);return/* @__PURE__ */(0,k.jsx)(q.A.Provider,{value:r,children:t})}var V=n(83567),H=(0,N.ab)(function(e){return e=(0,A.ko)((0,A.IA)({"data-focus-trap":"",tabIndex:0,"aria-hidden":!0},e),{style:(0,A.IA)({position:"fixed",top:0,left:0},e.style)}),e=(0,V.B)(e)}),D=(0,N.Rf)(function(e){let t=H(e);return(0,N.n)("span",t)}),G=(0,j.createContext)(null),U=n(87039);function X(e){queueMicrotask(()=>{null==e||e.focus()})}var z=(0,N.ab)(function(e){var{preserveTabOrder:t,preserveTabOrderAnchor:n,portalElement:r,portalRef:i,portal:l=!0}=e,u=(0,A.YG)(e,["preserveTabOrder","preserveTabOrderAnchor","portalElement","portalRef","portal"]);let o=(0,j.useRef)(null),a=(0,w.SV)(o,u.ref),d=(0,j.useContext)(G),[c,f]=(0,j.useState)(null),[p,v]=(0,j.useState)(null),h=(0,j.useRef)(null),m=(0,j.useRef)(null),b=(0,j.useRef)(null),g=(0,j.useRef)(null);return(0,w.UQ)(()=>{let e=o.current;if(!e||!l){f(null);return}let t=r?"function"==typeof r?r(e):r:(0,s.YE)(e).createElement("div");if(!t){f(null);return}let n=t.isConnected;if(n||(d||(0,s.YE)(e).body).appendChild(t),t.id||(t.id=e.id?`portal/${e.id}`:function(e="id"){return`${e?`${e}-`:""}${Math.random().toString(36).slice(2,8)}`}()),f(t),(0,U.cZ)(i,t),!n)return()=>{t.remove(),(0,U.cZ)(i,null)}},[l,r,d,i]),(0,w.UQ)(()=>{if(!l||!t||!n)return;let e=(0,s.YE)(n).createElement("span");return e.style.position="fixed",n.insertAdjacentElement("afterend",e),v(e),()=>{e.remove(),v(null)}},[l,t,n]),(0,j.useEffect)(()=>{if(!c||!t)return;let e=0,n=t=>{if(!(0,$.aG)(t))return;let n="focusin"===t.type;if(cancelAnimationFrame(e),n)return(0,O.QZ)(c);e=requestAnimationFrame(()=>{(0,O.gw)(c,!0)})};return c.addEventListener("focusin",n,!0),c.addEventListener("focusout",n,!0),()=>{cancelAnimationFrame(e),c.removeEventListener("focusin",n,!0),c.removeEventListener("focusout",n,!0)}},[c,t]),u=(0,w.w7)(u,e=>{if(e=/* @__PURE__ */(0,k.jsx)(G.Provider,{value:c||d,children:e}),!l)return e;if(!c)return/* @__PURE__ */(0,k.jsx)("span",{ref:a,id:u.id,style:{position:"fixed"},hidden:!0});e=/* @__PURE__ */(0,k.jsxs)(k.Fragment,{children:[t&&c&&/* @__PURE__ */(0,k.jsx)(D,{ref:m,"data-focus-trap":u.id,className:"__focus-trap-inner-before",onFocus:e=>{(0,$.aG)(e,c)?X((0,O.vF)()):X(h.current)}}),e,t&&c&&/* @__PURE__ */(0,k.jsx)(D,{ref:b,"data-focus-trap":u.id,className:"__focus-trap-inner-after",onFocus:e=>{(0,$.aG)(e,c)?X((0,O.XJ)()):X(g.current)}})]}),c&&(e=(0,C.createPortal)(e,c));let n=/* @__PURE__ */(0,k.jsxs)(k.Fragment,{children:[t&&c&&/* @__PURE__ */(0,k.jsx)(D,{ref:h,"data-focus-trap":u.id,className:"__focus-trap-outer-before",onFocus:e=>{e.relatedTarget!==g.current&&(0,$.aG)(e,c)?X(m.current):X((0,O.XJ)())}}),t&&/* @__PURE__ */(0,k.jsx)("span",{"aria-owns":null==c?void 0:c.id,style:{position:"fixed"}}),t&&c&&/* @__PURE__ */(0,k.jsx)(D,{ref:g,"data-focus-trap":u.id,className:"__focus-trap-outer-after",onFocus:e=>{if((0,$.aG)(e,c))X(b.current);else{let e=(0,O.vF)();if(e===m.current){requestAnimationFrame(()=>{var e;return null==(e=(0,O.vF)())?void 0:e.focus()});return}X(e)}}})]});return p&&t&&(n=(0,C.createPortal)(n,p)),/* @__PURE__ */(0,k.jsxs)(k.Fragment,{children:[n,e]})},[c,d,l,u.id,t,p]),u=(0,A.ko)((0,A.IA)({},u),{ref:a})});(0,N.Rf)(function(e){let t=z(e);return(0,N.n)("div",t)});var W=n(20311),J=n(22754),K=(0,Y.nr)();function Z(e,t=!1){if(!e)return null;let n="current"in e?e.current:e;return n?t?(0,O.tp)(n)?n:null:n:null}var ee=(0,N.ab)(function(e){var{store:t,open:n,onClose:i,focusable:c=!0,modal:v=!0,portal:h=!!v,backdrop:x=!!v,hideOnEscape:y=!0,hideOnInteractOutside:M=!0,getPersistentElements:N,preventBodyScroll:q=!!v,autoFocusOnShow:V=!0,autoFocusOnHide:H=!0,initialFocus:D,finalFocus:G,unmountOnHide:U,unstable_treeSnapshotKey:X}=e,ee=(0,A.YG)(e,["store","open","onClose","focusable","modal","portal","backdrop","hideOnEscape","hideOnInteractOutside","getPersistentElements","preventBodyScroll","autoFocusOnShow","autoFocusOnHide","initialFocus","finalFocus","unmountOnHide","unstable_treeSnapshotKey"]);let et=(0,W.cH)(),en=(0,j.useRef)(null),er=(0,J.j)({store:t||et,open:n,setOpen(e){if(e)return;let t=en.current;if(!t)return;let n=new Event("close",{bubbles:!1,cancelable:!0});i&&t.addEventListener("close",i,{once:!0}),t.dispatchEvent(n),n.defaultPrevented&&er.setOpen(!0)}}),{portalRef:ei,domReady:el}=(0,w.TE)(h,ee.portalRef),eu=ee.preserveTabOrder,eo=(0,E.O$)(er,e=>eu&&!v&&e.mounted),ea=(0,w.Bi)(ee.id),es=(0,E.O$)(er,"open"),ed=(0,E.O$)(er,"mounted"),ec=(0,E.O$)(er,"contentElement"),ef=(0,g.dK)(ed,ee.hidden,ee.alwaysVisible);!function(e,t,n){let r=function({attribute:e,contentId:t,contentElement:n,enabled:r}){let[i,l]=(0,w.CH)(),u=(0,j.useCallback)(()=>{if(!r||!n)return!1;let{body:i}=(0,s.YE)(n),l=i.getAttribute(e);return!l||l===t},[i,r,n,e,t]);return(0,j.useEffect)(()=>{if(!r||!t||!n)return;let{body:i}=(0,s.YE)(n);if(u())return i.setAttribute(e,t),()=>i.removeAttribute(e);let o=new MutationObserver(()=>(0,C.flushSync)(l));return o.observe(i,{attributeFilter:[e]}),()=>o.disconnect()},[i,r,t,n,u,e]),u}({attribute:"data-dialog-prevent-body-scroll",contentElement:e,contentId:t,enabled:n});(0,j.useEffect)(()=>{var t,n;if(!r()||!e)return;let i=(0,s.YE)(e),u=(0,s.zk)(e),{documentElement:o,body:c}=i,f=o.style.getPropertyValue("--scrollbar-width"),p=f?Number.parseInt(f):u.innerWidth-o.clientWidth,v=Math.round(o.getBoundingClientRect().left)+o.scrollLeft?"paddingLeft":"paddingRight",h=(0,Y.f8)()&&!(0,Y.cX)();return(0,d.cy)((t="--scrollbar-width",n=`${p}px`,o?l(o,t,()=>{let e=o.style.getPropertyValue(t);return o.style.setProperty(t,n),()=>{e?o.style.setProperty(t,e):o.style.removeProperty(t)}}):()=>{}),h?(()=>{var e,t;let{scrollX:n,scrollY:r,visualViewport:i}=u,l=null!=(e=null==i?void 0:i.offsetLeft)?e:0,o=null!=(t=null==i?void 0:i.offsetTop)?t:0,s=a(c,{position:"fixed",overflow:"hidden",top:`${-(r-Math.floor(o))}px`,left:`${-(n-Math.floor(l))}px`,right:"0",[v]:`${p}px`});return()=>{s(),u.scrollTo({left:n,top:r,behavior:"instant"})}})():a(c,{overflow:"hidden",[v]:`${p}px`}))},[r,e])}(ec,ea,q&&!ef),function(e,t,n){let r=function(e){let t=(0,j.useRef)();return(0,j.useEffect)(()=>{if(!e){t.current=null;return}return(0,$.dg)("mousedown",e=>{t.current=e.target},!0)},[e]),t}((0,E.O$)(e,"open")),i={store:e,domReady:n,capture:!0};P((0,A.ko)((0,A.IA)({},i),{type:"click",listener:n=>{let{contentElement:i}=e.getState(),l=r.current;l&&(0,s.zN)(l)&&m(l,null==i?void 0:i.id)&&T(t,n)&&e.hide()}})),P((0,A.ko)((0,A.IA)({},i),{type:"focusin",listener:n=>{let{contentElement:r}=e.getState();r&&n.target!==(0,s.YE)(r)&&T(t,n)&&e.hide()}})),P((0,A.ko)((0,A.IA)({},i),{type:"contextmenu",listener:n=>{T(t,n)&&e.hide()}}))}(er,M,el);let{wrapElement:ep,nestedDialogs:ev}=function(e){let t=(0,j.useContext)(_),[n,r]=(0,j.useState)([]),i=(0,j.useCallback)(e=>{var n;return r(t=>[...t,e]),(0,d.cy)(null==(n=t.add)?void 0:n.call(t,e),()=>{r(t=>t.filter(t=>t!==e))})},[t]);(0,w.UQ)(()=>(0,L.OH)(e,["open","contentElement"],n=>{var r;if(n.open&&n.contentElement)return null==(r=t.add)?void 0:r.call(t,e)}),[e,t]);let l=(0,j.useMemo)(()=>({store:e,add:i}),[e,i]);return{wrapElement:(0,j.useCallback)(e=>/* @__PURE__ */(0,k.jsx)(_.Provider,{value:l,children:e}),[l]),nestedDialogs:n}}(er);ee=(0,w.w7)(ee,ep,[ep]),(0,w.UQ)(()=>{if(!es)return;let e=en.current,t=(0,s.bq)(e,!0);t&&"BODY"!==t.tagName&&(e&&(0,s.gR)(e,t)||er.setDisclosureElement(t))},[er,es]),K&&(0,j.useEffect)(()=>{if(!ed)return;let{disclosureElement:e}=er.getState();if(!e||!(0,s.Bm)(e))return;let t=()=>{let t=!1,n=()=>{t=!0};e.addEventListener("focusin",n,{capture:!0,once:!0}),(0,$.nz)(e,"mouseup",()=>{e.removeEventListener("focusin",n,!0),t||(0,O.do)(e)})};return e.addEventListener("mousedown",t),()=>{e.removeEventListener("mousedown",t)}},[er,ed]),(0,j.useEffect)(()=>{if(!ed||!el)return;let e=en.current;if(!e)return;let t=(0,s.zk)(e),n=t.visualViewport||t,r=()=>{var n,r;let i=null!=(r=null==(n=t.visualViewport)?void 0:n.height)?r:t.innerHeight;e.style.setProperty("--dialog-viewport-height",`${i}px`)};return r(),n.addEventListener("resize",r),()=>{n.removeEventListener("resize",r)}},[ed,el]),(0,j.useEffect)(()=>{if(!v||!ed||!el)return;let e=en.current;if(e&&!e.querySelector("[data-dialog-dismiss]"))return function(e,t){let n=(0,s.YE)(e).createElement("button");return n.type="button",n.tabIndex=-1,n.textContent="Dismiss popup",Object.assign(n.style,{border:"0px",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"}),n.addEventListener("click",t),e.prepend(n),()=>{n.removeEventListener("click",t),n.remove()}}(e,er.hide)},[er,v,ed,el]),(0,w.UQ)(()=>{if(!S()||es||!ed||!el)return;let e=en.current;if(e)return I(e)},[es,ed,el]);let eh=es&&el;(0,w.UQ)(()=>{if(ea&&eh)return function(e,t){let{body:n}=(0,s.YE)(t[0]),r=[];return p(e,t,t=>{r.push(o(t,f(e),!0))}),(0,d.cy)(o(n,f(e),!0),()=>{for(let e of r)e()})}(ea,[en.current])},[ea,eh,X]);let em=(0,w._q)(N);(0,w.UQ)(()=>{if(!ea||!eh)return;let{disclosureElement:e}=er.getState(),t=[en.current,...em()||[],...ev.map(e=>e.getState().contentElement)];return v?(0,d.cy)(b(ea,t),function(e,t){let n=[],i=t.map(e=>null==e?void 0:e.id);return p(e,t,e=>{r(e,...i)||function(e,...t){if(!e)return!1;let n=e.getAttribute("data-focus-trap");return null!=n&&(!t.length||""!==n&&t.some(e=>n===e))}(e,...i)||n.unshift(I(e,t))},e=>{e.hasAttribute("role")&&(t.some(t=>t&&(0,s.gR)(t,e))||n.unshift(u(e,"role","none")))}),()=>{for(let e of n)e()}}(ea,t)):b(ea,[e,...t])},[ea,er,eh,em,ev,v,X]);let eb=!!V,eg=(0,w.O4)(V),[ex,ey]=(0,j.useState)(!1);(0,j.useEffect)(()=>{if(!es||!eb||!el||!(null==ec?void 0:ec.isConnected))return;let e=Z(D,!0)||ec.querySelector("[data-autofocus=true],[autofocus]")||(0,O.LC)(ec,!0,h&&eo)||ec;eg((0,O.tp)(e)?e:null)&&(ey(!0),queueMicrotask(()=>{e.focus(),K&&e.scrollIntoView({block:"nearest",inline:"nearest"})}))},[es,eb,el,ec,D,h,eo,eg]);let eE=!!H,ew=(0,w.O4)(H),[eA,ej]=(0,j.useState)(!1);(0,j.useEffect)(()=>{if(es)return ej(!0),()=>ej(!1)},[es]);let ek=(0,j.useCallback)((e,t=!0)=>{let{disclosureElement:n}=er.getState();if(function(e){let t=(0,s.bq)();return!(!t||e&&(0,s.gR)(e,t))&&!!(0,O.tp)(t)}(e))return;let r=Z(G)||n;if(null==r?void 0:r.id){let e=(0,s.YE)(r),t=`[aria-activedescendant="${r.id}"]`,n=e.querySelector(t);n&&(r=n)}if(r&&!(0,O.tp)(r)){let e=r.closest("[data-dialog]");if(null==e?void 0:e.id){let t=(0,s.YE)(e),n=`[aria-controls~="${e.id}"]`,i=t.querySelector(n);i&&(r=i)}}let i=r&&(0,O.tp)(r);if(!i&&t){requestAnimationFrame(()=>ek(e,!1));return}ew(i?r:null)&&i&&(null==r||r.focus())},[er,G,ew]),eR=(0,j.useRef)(!1);(0,w.UQ)(()=>{if(es||!eA||!eE)return;let e=en.current;eR.current=!0,ek(e)},[es,eA,el,eE,ek]),(0,j.useEffect)(()=>{if(!eA||!eE)return;let e=en.current;return()=>{if(eR.current){eR.current=!1;return}ek(e)}},[eA,eE,ek]);let eS=(0,w.O4)(y);(0,j.useEffect)(()=>{if(el&&ed)return(0,$.dg)("keydown",e=>{if("Escape"!==e.key||e.defaultPrevented)return;let t=en.current;if(!t||m(t))return;let n=e.target;if(!n)return;let{disclosureElement:r}=er.getState();("BODY"===n.tagName||(0,s.gR)(t,n)||!r||(0,s.gR)(r,n))&&eS(e)&&er.hide()},!0)},[er,el,ed,eS]);let eO=(ee=(0,w.w7)(ee,e=>/* @__PURE__ */(0,k.jsx)(B,{level:v?1:void 0,children:e}),[v])).hidden,eI=ee.alwaysVisible;ee=(0,w.w7)(ee,e=>x?/* @__PURE__ */(0,k.jsxs)(k.Fragment,{children:[/* @__PURE__ */(0,k.jsx)(R,{store:er,backdrop:x,hidden:eO,alwaysVisible:eI}),e]}):e,[er,x,eO,eI]);let[eC,eY]=(0,j.useState)(),[eL,e_]=(0,j.useState)();return ee=(0,w.w7)(ee,e=>/* @__PURE__ */(0,k.jsx)(W.XP,{value:er,children:/* @__PURE__ */(0,k.jsx)(W.YH.Provider,{value:eY,children:/* @__PURE__ */(0,k.jsx)(W.oL.Provider,{value:e_,children:e})})}),[er]),ee=(0,A.ko)((0,A.IA)({id:ea,"data-dialog":"",role:"dialog",tabIndex:c?-1:void 0,"aria-labelledby":eC,"aria-describedby":eL},ee),{ref:(0,w.SV)(en,ee.ref)}),ee=Q((0,A.ko)((0,A.IA)({},ee),{autoFocusOnShow:ex})),ee=(0,g.aT)((0,A.IA)({store:er},ee)),ee=(0,F.Wc)((0,A.ko)((0,A.IA)({},ee),{focusable:c})),ee=z((0,A.ko)((0,A.IA)({portal:h},ee),{portalRef:ei,preserveTabOrder:eo}))});function et(e,t=W.cH){return(0,N.Rf)(function(n){let r=t(),i=n.store||r;return(0,E.O$)(i,e=>!n.unmountOnHide||(null==e?void 0:e.mounted)||!!n.open)?/* @__PURE__ */(0,k.jsx)(e,(0,A.IA)({},n)):null})}var en=et((0,N.Rf)(function(e){let t=ee(e);return(0,N.n)("div",t)}),W.cH)},97792:(e,t,n)=>{n.d(t,{d:()=>c});var r=n(16486),i=n(20311),l=n(66034),u=n(21368),o=n(47766),a=n(36665),s=n(60397),d=(0,l.ab)(function(e){var{store:t}=e,n=(0,o.YG)(e,["store"]);let l=(0,i.fm)();t=t||l;let d=n.onClick,c=(0,u._q)(e=>{null==d||d(e),e.defaultPrevented||null==t||t.hide()}),f=(0,a.useMemo)(()=>/* @__PURE__ */(0,s.jsxs)("svg",{"aria-label":"Dismiss popup",display:"block",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,viewBox:"0 0 16 16",height:"1em",width:"1em",children:[/* @__PURE__ */(0,s.jsx)("line",{x1:"4",y1:"4",x2:"12",y2:"12"}),/* @__PURE__ */(0,s.jsx)("line",{x1:"4",y1:"12",x2:"12",y2:"4"})]}),[]);return n=(0,o.ko)((0,o.IA)({"data-dialog-dismiss":"",children:f},n),{onClick:c}),n=(0,r.s)(n)}),c=(0,l.Rf)(function(e){let t=d(e);return(0,l.n)("button",t)})},21331:(e,t,n)=>{n.d(t,{X:()=>f,c:()=>c});var r=n(59649),i=n(66034),l=n(21368),u=n(47766),o=n(36665),a=n(60397),s=(0,i.ab)(function(e){let t=(0,o.useRef)(null),n=(0,o.useContext)(r.A)||1,i=`h${n}`,s=(0,l.vO)(t,i),d=(0,o.useMemo)(()=>!!s&&/^h\d$/.test(s),[s]);return e=(0,u.ko)((0,u.IA)({render:/* @__PURE__ */(0,a.jsx)(i,{}),role:d?void 0:"heading","aria-level":d?void 0:n},e),{ref:(0,l.SV)(t,e.ref)})});(0,i.Rf)(function(e){let t=s(e);return(0,i.n)("h1",t)});var d=n(20311),c=(0,i.ab)(function(e){var{store:t}=e,n=(0,u.YG)(e,["store"]);let r=(0,o.useContext)(d.YH),i=(0,l.Bi)(n.id);return(0,l.UQ)(()=>(null==r||r(i),()=>null==r?void 0:r(void 0)),[r,i]),n=s(n=(0,u.IA)({id:i},n))}),f=(0,i.Rf)(function(e){let t=c(e);return(0,i.n)("h1",t)})},30281:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(66034);(0,r.ab)(function(e){return e});var i=(0,r.Rf)(function(e){return(0,r.n)("div",e)});Object.assign(i,["a","button","details","dialog","div","form","h1","h2","h3","h4","h5","h6","header","img","input","label","li","nav","ol","p","section","select","span","summary","textarea","ul","svg"].reduce((e,t)=>(e[t]=(0,r.Rf)(function(e){return(0,r.n)(t,e)}),e),{}))},83567:(e,t,n)=>{n.d(t,{B:()=>l,s:()=>u});var r=n(66034),i=n(47766),l=(0,r.ab)(function(e){return e=(0,i.ko)((0,i.IA)({},e),{style:(0,i.IA)({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},e.style)})}),u=(0,r.Rf)(function(e){let t=l(e);return(0,r.n)("span",t)})}}]);