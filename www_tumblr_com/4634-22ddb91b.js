!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0e854c03-d258-497c-acf3-c7a743cac7e9",e._sentryDebugIdIdentifier="sentry-dbid-0e854c03-d258-497c-acf3-c7a743cac7e9")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[4634],{84634:(e,t,r)=>{r.d(t,{W1:()=>g,Dr:()=>y,bX:()=>w});var n=r(82905),o=r(53927),l=r(66034),i=r(47766),u=(0,l.ab)(function(e){var{orientation:t="horizontal"}=e,r=(0,i.YG)(e,["orientation"]);return(0,i.IA)({role:"separator","aria-orientation":t},r)});(0,l.Rf)(function(e){let t=u(e);return(0,l.n)("hr",t)});var a=r(36023),d=r(96723),s=(0,l.ab)(function(e){var{store:t}=e,r=(0,i.YG)(e,["store"]);let n=(0,a.k)();t=t||n,(0,d.V1)(t,!1);let o=t.useState(e=>"horizontal"===e.orientation?"vertical":"horizontal");return u((0,i.ko)((0,i.IA)({},r),{orientation:o}))});(0,l.Rf)(function(e){let t=s(e);return(0,l.n)("hr",t)});var f=(0,l.ab)(function(e){var{store:t}=e,r=(0,i.YG)(e,["store"]);let n=(0,o.KZ)();return t=t||n,r=s((0,i.IA)({store:t},r))}),c=(0,l.Rf)(function(e){let t=f(e);return(0,l.n)("hr",t)}),v=r(69685),b=r(74059),m=/*#__PURE__*/r.n(b);let p={menu:"ctBr6",menuItem:"sl53I",danger:"J5P7p",separator:"zm6Y3"};var h=r(60397);let g=({width:e=160,...t})=>/*#__PURE__*/(0,h.jsx)(n.W,{className:p.menu,portal:!0,shift:t.shift??-e,style:{minWidth:e},...t}),w=e=>/*#__PURE__*/(0,h.jsx)(c,{className:p.separator,...e}),y=({danger:e,className:t,...r})=>/*#__PURE__*/(0,h.jsx)(v.D,{className:m()(p.menuItem,{[p.danger]:e},t),focusOnHover:!1,...r})},51225:(e,t,r)=>{r.d(t,{L8:()=>a,tt:()=>u});var n=r(36023),o=r(66034),l=r(36665),i=(0,o.B0)([n.ws],[n.aN]),u=i.useContext,a=i.useScopedContext;i.useProviderContext,i.ContextProvider,i.ScopedContextProvider,(0,l.createContext)(void 0)},53927:(e,t,r)=>{r.d(t,{Gq:()=>c,KZ:()=>a,Su:()=>f,jj:()=>s,lY:()=>v,wI:()=>d});var n=r(36023),o=r(90804),l=r(66034),i=r(36665),u=(0,l.B0)([n.ws,o.pR],[n.aN,o.n0]),a=u.useContext,d=u.useScopedContext,s=u.useProviderContext,f=u.ContextProvider,c=u.ScopedContextProvider,v=(0,i.createContext)(void 0)},69685:(e,t,r)=>{r.d(t,{D:()=>p,O:()=>m});var n=r(53927),o=r(51225),l=r(73125),i=r(90001),u=r(66034),a=r(48277),d=r(21368),s=r(47766),f=r(61995),c=r(41009),v=r(62990),b=r(96723),m=(0,u.ab)(function(e){var{store:t,hideOnClick:r=!0,preventScrollOnKeyDown:u=!0,focusOnHover:m,blurOnHoverEnd:p}=e,h=(0,s.YG)(e,["store","hideOnClick","preventScrollOnKeyDown","focusOnHover","blurOnHoverEnd"]);let g=(0,n.wI)(!0),w=(0,o.L8)();t=t||g||w,(0,b.V1)(t,!1);let y=h.onClick,A=(0,d.O4)(r),I="hideAll"in t?t.hideAll:void 0,k=!!I,S=(0,d._q)(e=>{null==y||y(e),!(e.defaultPrevented||(0,c.RN)(e)||(0,c.$b)(e))&&I&&"menu"!==e.currentTarget.getAttribute("aria-haspopup")&&A(e)&&I()}),x=(0,a.O$)(t,e=>"contentElement"in e?e.contentElement:null),O=(0,f.cn)(x,"menuitem");return h=(0,s.ko)((0,s.IA)({role:O},h),{onClick:S}),h=(0,i.k)((0,s.IA)({store:t,preventScrollOnKeyDown:u},h)),h=(0,l.T)((0,s.ko)((0,s.IA)({store:t},h),{focusOnHover(e){if(!t||!("function"==typeof m?m(e):null==m||m))return!1;let{baseElement:r,items:n}=t.getState();return k?(e.currentTarget.hasAttribute("aria-expanded")&&e.currentTarget.focus(),!0):!!function(e,t,r){var n;if(!e)return!1;if((0,v.oW)(e))return!0;let o=null==t?void 0:t.find(e=>{var t;return e.element!==r&&(null==(t=e.element)?void 0:t.getAttribute("aria-expanded"))==="true"}),l=null==(n=null==o?void 0:o.element)?void 0:n.getAttribute("aria-controls");if(!l)return!1;let i=(0,f.YE)(e).getElementById(l);return!!i&&(!!(0,v.oW)(i)||!!i.querySelector("[role=menuitem][aria-expanded=true]"))}(r,n,e.currentTarget)&&(e.currentTarget.focus(),!0)},blurOnHoverEnd:e=>"function"==typeof p?p(e):null!=p?p:k}))}),p=(0,u.ph)((0,u.Rf)(function(e){let t=m(e);return(0,u.n)("div",t)}))},66194:(e,t,r)=>{r.d(t,{g:()=>b});var n=r(96478),o=r(36023),l=r(66034),i=r(21368),u=r(47766),a=r(61995),d=r(41009),s=r(96723),f=r(36665),c="";function v(e,t){var r;let n=(null==(r=e.element)?void 0:r.textContent)||e.children||"value"in e&&e.value;return!!n&&(0,s.J2)(n).trim().toLowerCase().startsWith(t.toLowerCase())}var b=(0,l.ab)(function(e){var{store:t,typeahead:r=!0}=e,l=(0,u.YG)(e,["store","typeahead"]);let b=(0,o.k)();t=t||b,(0,s.V1)(t,!1);let m=l.onKeyDownCapture,p=(0,f.useRef)(0),h=(0,i._q)(e=>{if(null==m||m(e),e.defaultPrevented||!r||!t)return;if(!function(e){let t=e.target;return!(t&&(0,a.mB)(t))&&(" "===e.key&&!!c.length||1===e.key.length&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&/^[\p{Letter}\p{Number}]$/u.test(e.key))}(e))return void(c="");let{renderedItems:o,items:l,activeId:i,id:u}=t.getState(),s=(l.length>o.length?l:o).filter(e=>!e.disabled),f=(0,a.YE)(e.currentTarget),b=`[data-offscreen-id="${u}"]`,h=f.querySelectorAll(b);for(let e of h){let t="true"===e.ariaDisabled||"disabled"in e&&!!e.disabled;s.push({id:e.id,element:e,disabled:t})}if(h.length&&(s=(0,a.gH)(s,e=>e.element)),!function(e,t){if((0,d.uh)(e))return!0;let r=e.target;return!!r&&t.some(e=>e.element===r)}(e,s))return void(c="");e.preventDefault(),window.clearTimeout(p.current),p.current=window.setTimeout(()=>{c=""},500);let g=e.key.toLowerCase();c+=g;let w=(s=function(e,t,r){if(!r)return e;let o=e.find(e=>e.id===r);return!o||!v(o,t)||c!==t&&v(o,c)?e:(c=t,(0,n._d)(e.filter(e=>v(e,c)),r).filter(e=>e.id!==r))}(s,g,i)).find(e=>v(e,c));w?t.move(w.id):c=""});return l=(0,u.ko)((0,u.IA)({},l),{onKeyDownCapture:h}),(0,s.HR)(l)});(0,l.Rf)(function(e){let t=b(e);return(0,l.n)("div",t)})},82905:(e,t,r)=>{r.d(t,{W:()=>y});var n=r(53927),o=r(66194),l=r(58423),i=r(37308),u=r(66034),a=r(48277),d=r(21368),s=r(47766),f=r(96723),c=r(36665),v=r(60397),b=(0,u.ab)(function(e){var{store:t,alwaysVisible:r,composite:u}=e,b=(0,s.YG)(e,["store","alwaysVisible","composite"]);let m=(0,n.jj)();t=t||m,(0,f.V1)(t,!1);let p=t.parent,h=t.menubar,g=!!p,w=(0,d.Bi)(b.id),y=b.onKeyDown,A=t.useState(e=>e.placement.split("-")[0]),I=t.useState(e=>"both"===e.orientation?void 0:e.orientation),k="vertical"!==I,S=(0,a.O$)(h,e=>!!e&&"vertical"!==e.orientation),x=(0,d._q)(e=>{if(null==y||y(e),!e.defaultPrevented){if(g||h&&!k){let r={ArrowRight:()=>"left"===A&&!k,ArrowLeft:()=>"right"===A&&!k,ArrowUp:()=>"bottom"===A&&k,ArrowDown:()=>"top"===A&&k}[e.key];if(null==r?void 0:r())return e.stopPropagation(),e.preventDefault(),null==t?void 0:t.hide()}if(h){let t={ArrowRight:()=>{if(S)return h.next()},ArrowLeft:()=>{if(S)return h.previous()},ArrowDown:()=>{if(!S)return h.next()},ArrowUp:()=>{if(!S)return h.previous()}}[e.key],r=null==t?void 0:t();void 0!==r&&(e.stopPropagation(),e.preventDefault(),h.move(r))}}});b=(0,d.w7)(b,e=>/* @__PURE__ */(0,v.jsx)(n.Gq,{value:t,children:e}),[t]);let O=function(e){var{store:t}=e,r=(0,s.YG)(e,["store"]);let[n,o]=(0,c.useState)(void 0),l=r["aria-label"],i=(0,a.O$)(t,"disclosureElement"),u=(0,a.O$)(t,"contentElement");return(0,c.useEffect)(()=>{i&&u&&(l||u.hasAttribute("aria-label")?o(void 0):i.id&&o(i.id))},[l,i,u]),n}((0,s.IA)({store:t},b)),C=t.useState("mounted"),E=(0,i.dK)(C,b.hidden,r),R=E?(0,s.ko)((0,s.IA)({},b.style),{display:"none"}):b.style;b=(0,s.ko)((0,s.IA)({id:w,"aria-labelledby":O,hidden:E},b),{ref:(0,d.SV)(w?t.setContentElement:null,b.ref),style:R,onKeyDown:x});let D=!!t.combobox;return(u=null!=u?u:!D)&&(b=(0,s.IA)({role:"menu","aria-orientation":I},b)),b=(0,l.T)((0,s.IA)({store:t,composite:u},b)),b=(0,o.g)((0,s.IA)({store:t,typeahead:!D},b))});(0,u.Rf)(function(e){let t=b(e);return(0,u.n)("div",t)});var m=r(10246),p=r(47752),h=r(41009),g=r(62990),w=(0,u.ab)(function(e){var{store:t,modal:r=!1,portal:o=!!r,hideOnEscape:l=!0,autoFocusOnShow:i=!0,hideOnHoverOutside:u,alwaysVisible:v}=e,p=(0,s.YG)(e,["store","modal","portal","hideOnEscape","autoFocusOnShow","hideOnHoverOutside","alwaysVisible"]);let w=(0,n.jj)();t=t||w,(0,f.V1)(t,!1);let y=(0,c.useRef)(null),A=t.parent,I=t.menubar,k=!!A,S=!!I&&!k;p=(0,s.ko)((0,s.IA)({},p),{ref:(0,d.SV)(y,p.ref)});let x=b((0,s.IA)({store:t,alwaysVisible:v},p)),{"aria-labelledby":O}=x;p=(0,s.YG)(x,["aria-labelledby"]);let[C,E]=(0,c.useState)(),R=t.useState("autoFocusOnShow"),D=t.useState("initialFocus"),_=t.useState("baseElement"),Y=t.useState("renderedItems");(0,c.useEffect)(()=>{let e=!1;return E(t=>{var r,n,o;if(e||!R)return;if(null==(r=null==t?void 0:t.current)?void 0:r.isConnected)return t;let l=(0,c.createRef)();switch(D){case"first":l.current=(null==(n=Y.find(e=>!e.disabled&&e.element))?void 0:n.element)||null;break;case"last":l.current=(null==(o=[...Y].reverse().find(e=>!e.disabled&&e.element))?void 0:o.element)||null;break;default:l.current=_}return l}),()=>{e=!0}},[t,R,D,Y,_]);let P=!k&&r,j=!!i,G=!!C||!!p.initialFocus||!!P,T=(0,a.O$)(t.combobox||t,"contentElement"),V=(0,a.O$)((null==A?void 0:A.combobox)||A,"contentElement"),W=(0,c.useMemo)(()=>{if(!V||!T)return;let e=T.getAttribute("role"),t=V.getAttribute("role");if(!("menu"===t||"menubar"===t)||"menu"!==e)return V},[T,V]);return void 0!==W&&(p=(0,s.IA)({preserveTabOrderAnchor:W},p)),p=(0,m.a)((0,s.ko)((0,s.IA)({store:t,alwaysVisible:v,initialFocus:C,autoFocusOnShow:j?G&&i:R||!!P},p),{hideOnEscape:e=>!(0,f.zO)(l,e)&&(null==t||t.hideAll(),!0),hideOnHoverOutside(e){let r=null==t?void 0:t.getState().disclosureElement;return("function"==typeof u?!!u(e):null!=u?!!u:!!k||!!S&&(!r||!(0,g.oW)(r)))&&(!!e.defaultPrevented||!k||!r||((0,h.rC)(r,"mouseout",e),!(0,g.oW)(r)||(requestAnimationFrame(()=>{(0,g.oW)(r)||null==t||t.hide()}),!1)))},modal:P,portal:o,backdrop:!k&&p.backdrop})),p=(0,s.IA)({"aria-labelledby":O},p)}),y=(0,p.AV)((0,u.Rf)(function(e){let t=w(e);return(0,u.n)("div",t)}),n.jj)}}]);