"use strict";(self.webpackJsonpEs6=self.webpackJsonpEs6||[]).push([[6727],{70184:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var o=n(67294),r=n(45697),a=n.n(r),i=n(32384),c=n(72562),l=n(22222),s=n(28204);const d=e=>Boolean(e&&e.classList),p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];d(e)&&t.length&&t.forEach((t=>e.classList.add(t)))},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];d(e)&&t.length&&t.forEach((t=>e.classList.remove(t)))},v=(e,t)=>d(e)&&e.classList.contains(t);var m=n(25641);const w="open",f="header-close-btn",g="open",h="is-open",b="is-closed",E="more-nav-link",y="more-btn",_="primary-nav-menu-wrapper",L="more-dropdown-active",B="header-wrapper";var S=n(57733),q=n(77301);const C=e=>{let{dropdownEl:t,dropdownBtn:n,popUpContainer:o}=e;(0,c.l)((()=>{u(t,[w]),n.setAttribute("aria-label","Open editions menu"),n.setAttribute("aria-pressed","false"),o.setAttribute("aria-hidden","true")}),!0)},k=e=>{let{dropdownEl:t,dropdownBtn:n,popUpContainer:o}=e;v(t,w)?C({dropdownEl:t,dropdownBtn:n,popUpContainer:o}):(0,c.l)((()=>{p(t,[w]),n.setAttribute("aria-label","Close editions menu"),n.setAttribute("aria-pressed","true"),o.setAttribute("aria-hidden","false")}),!0)},O=(e,t)=>{let{searchContainer:n,inputEl:o,onAirBanner:r,listenLiveBtn:a,watchLiveBtn:i}=t;(0,c.l)((()=>{v(n,g)&&(v(e.target,f)||v(e.target,"header-close-btn-icon")||"path"===e.target.tagName)?(u(n,[g]),n.setAttribute("tabIndex",0),o.value="",u(r,["inactive"]),u(a,["disabled"]),u(i,["disabled"])):(p(n,[g]),n.setAttribute("tabIndex",-1),o.focus(),p(r,["inactive"]),p(a,["disabled"]),p(i,["disabled"]))}),!0)},A=(e,t)=>{let{searchContainer:n,inputEl:o,onAirBanner:r,listenLiveBtn:a,watchLiveBtn:i}=t;"Enter"!==e.key&&"Enter"!==e.code&&" "!==e.key&&"Space"!==e.code||(e.preventDefault(),e.stopPropagation(),O(e,{searchContainer:n,inputEl:o,onAirBanner:r,listenLiveBtn:a,watchLiveBtn:i}))},N=(e,t)=>{e.stopPropagation(),"Enter"!==e.key&&"Enter"!==e.code||t.submit()},W=e=>{let{moreNavWrapper:t,moreBtn:n}=e;(0,c.l)((()=>{u(t,[h]),p(t,[b]),u(n.closest("ul"),[L]),t.querySelector("a.active")||u(n,["active"])}),!0)},j=()=>{var e,t;const n=document.querySelector(".".concat(y)),o=document.querySelector(".".concat("dropdown-wrapper")),r=document.querySelector(".".concat("sub-nav-wrapper")),a=null===(e=document.querySelector(".".concat("sub-nav-item-wrapper")))||void 0===e?void 0:e.firstChild,i=null===(t=document.querySelector(".".concat("more-links-wrapper")))||void 0===t||null===(t=t.lastChild)||void 0===t?void 0:t.firstChild;n.addEventListener("click",(()=>{return v((e={moreNavWrapper:o,moreBtn:n}).moreNavWrapper,h)?W(e):(e=>{let{moreNavWrapper:t,moreBtn:n}=e;(0,c.l)((()=>{p(t,[h]),u(t,[b]),p(n.closest("ul"),[L]),p(n,["active"])}),!0)})(e);var e})),i&&i.addEventListener("blur",(e=>((e,t)=>{let{moreNavWrapper:n,subNavWrapper:o,firstSubNavEl:r}=t;e.preventDefault(),(0,c.l)((()=>{v(e.relatedTarget,E)||(u(n,[h]),p(o,["isOpen"]),r&&r.focus())}),!0)})(e,{moreNavWrapper:o,subNavWrapper:r,firstSubNavEl:a}))),n.addEventListener("mouseup",(e=>e.target.blur())),document.addEventListener("click",(e=>(e=>{let{e:t,moreNavWrapper:n,moreBtn:o}=e;const r=document.querySelector(".".concat(_));!t.target.closest(".".concat(y))&&r.classList.contains(L)&&W({moreNavWrapper:n,moreBtn:o})})({e,moreNavWrapper:o,subNavWrapper:r,moreBtn:n})))},T=e=>{e.currentTarget.classList.contains("disabled")?e.preventDefault():(e.preventDefault(),(0,q.W)(e.target.innerText.toLowerCase()),window.open(e.target.href,"uwpWindow","left=0,top=0,width=1024,height=768,popup=1"))},x=e=>{let{userLoggedIn:t}=e;return(0,o.useEffect)((()=>(()=>{const e=document.querySelector(".".concat("editions-dropdown")),t=document.querySelector(".".concat("editions-dropdown_popup-container")),n=document.querySelector(".".concat("editions-dropdown_button"));n.addEventListener("keydown",(o=>((e,t)=>{let{dropdownEl:n,dropdownBtn:o,popUpContainer:r}=t;"Enter"!==e.key&&"Enter"!==e.code&&" "!==e.key&&"Space"!==e.code||(e.preventDefault(),k({dropdownEl:n,dropdownBtn:o,popUpContainer:r}))})(o,{dropdownEl:e,dropdownBtn:n,popUpContainer:t}))),e.addEventListener("click",(()=>k({dropdownEl:e,dropdownBtn:n,popUpContainer:t}))),document.addEventListener("mousedown",(o=>((e,t)=>{let{dropdownEl:n,dropdownBtn:o,popUpContainer:r}=t;n.contains(e.target)||C({dropdownEl:n,dropdownBtn:o,popUpContainer:r})})(o,{dropdownEl:e,dropdownBtn:n,popUpContainer:t}))),t.lastChild.firstChild.addEventListener("blur",(()=>k({dropdownEl:e,dropdownBtn:n,popUpContainer:t})))})()),[]),(0,o.useEffect)((()=>(()=>{const e=document.querySelector(".".concat("header-search-container")),t=document.querySelector(".".concat("header-search-input")),n=document.querySelector(".".concat("search-form")),o=document.querySelector(".".concat("header-search-btn")),r=document.querySelector(".".concat(f)),a=document.querySelector(".top-banner-on-air"),i=document.querySelector(".top-banner-on-air-listen-live"),c=document.querySelector(".top-banner-on-air-watch-live");e.addEventListener("click",(n=>{O(n,{searchContainer:e,inputEl:t,onAirBanner:a,listenLiveBtn:i,watchLiveBtn:c})})),e.addEventListener("keydown",(n=>A(n,{searchContainer:e,inputEl:t,onAirBanner:a,listenLiveBtn:i,watchLiveBtn:c}))),r.addEventListener("keydown",(n=>A(n,{searchContainer:e,inputEl:t,onAirBanner:a,listenLiveBtn:i,watchLiveBtn:c}))),o.addEventListener("keydown",(e=>N(e,n))),t.addEventListener("keydown",(e=>N(e,n)))})()),[]),(0,o.useEffect)((()=>j()),[]),(0,o.useEffect)((()=>(()=>{const e=document.querySelector(".".concat(_)),t=document.querySelector(".".concat("more-sections-wrapper")),{offsetTop:n}=e;let o,r=!1;(0,c.l)((()=>{for(let i=e.children.length-1;i>=0;i-=1){const c=e.children[i],l=c.firstChild,s=v(c.firstChild,y);var a;c.offsetTop!==n&&!s||c.offsetTop===n&&r?(c.offsetTop===n&&r&&(r=!1),v(l,"active")&&p(null===(a=o)||void 0===a?void 0:a.firstChild,["active"]),u(c,["primary-nav-item"]),p(l,[E]),t.prepend(c)):c.offsetTop!==n&&s&&(r=!0,o=c)}}),!0)})()),[]),(0,o.useEffect)((()=>(e=>{const t=document.querySelector(".".concat("top-banner"));e&&p(t,["signed-in"])})(t)),[t]),(0,o.useEffect)((()=>{[".top-banner-on-air-listen-live",".top-banner-on-air-watch-live",".listenlivelink",".schedulelink"].forEach((e=>{const t=document.querySelector(e);t&&t.addEventListener("click",T)}))}),[]),(0,o.useEffect)((()=>(0,S.Z)()),[]),(0,o.useEffect)((()=>(0,m.Z)((e=>e.forEach((e=>e.target.classList.toggle("collapsed-header",!e.isIntersecting)))),{root:document,rootMargin:"-1px 0px 0px 0px",threshold:[1]}).observe(document.querySelector(".".concat(B)))),[]),(0,o.useEffect)((()=>p(document.querySelector(".".concat(B)),["loaded"]))),null};x.defaultProps={userLoggedIn:!1},x.propTypes={userLoggedIn:a().bool};const I=(0,l.zB)({userLoggedIn:s.nz}),P=(0,i.$j)(I)(x)},57733:(e,t,n)=>{n.d(t,{Z:()=>o});const o=()=>{const e=document.querySelector(".top-banner-on-air-metadata-title");if(e){const t=e.querySelector(".top-banner-on-air-metadata-title-container"),n=t.querySelector("p"),o=()=>{if(t.scrollWidth>t.clientWidth){t.classList.add("top-banner-on-air-flex-title"),n.classList.add("top-banner-on-air-metadata-title-animation");const e=n.cloneNode(!0);e.classList.add("cloned"),t.appendChild(e)}else t.classList.remove("top-banner-on-air-flex-title"),n.classList.remove("top-banner-on-air-metadata-title-animation"),t.querySelectorAll(".cloned").forEach((e=>t.removeChild(e)))};o(),new MutationObserver(o).observe(n,{childList:!0,characterData:!0,subtree:!0})}}},25641:(e,t,n)=>{n.d(t,{Z:()=>o});const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n="undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;return n?new window.IntersectionObserver(e,t):void 0}},72562:(e,t,n)=>{n.d(t,{l:()=>r}),n(752),n(76265);const o=function(){return window.requestAnimationFrame(...arguments)},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];"requestAnimationFrame"in window&&t?o((()=>{setTimeout(e,0)})):e()}},7870:(e,t,n)=>{n.d(t,{Z:()=>r}),n(73964);const o={};function r(e,t){return Promise.resolve(o[e]?window[t]:function(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=e;const a=document.querySelector("script");a.parentNode.insertBefore(r,a),r.addEventListener("load",(()=>{o[e]=!0,t(r)})),r.addEventListener("error",(()=>{n(new Error("".concat(e," failed to load.")))}))}))}(e).then((()=>window[t])))}},19033:(e,t,n)=>{n.d(t,{Z:()=>o});const o=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;"requestIdleCallback"in window&&t?requestIdleCallback(e,{timeout:n}):e()}},77301:(e,t,n)=>{n.d(t,{W:()=>r});var o=n(6100);const r=e=>{const t={event_navigation_action:"navigation",event_navigation_name:"header: ".concat(e),event_navigation_browsing_method:"click"};(0,o.y1)(t,!0,!0)}},6100:(e,t,n)=>{n.d(t,{D2:()=>u,aY:()=>w,y1:()=>m}),n(76801),n(752),n(85415),n(73964);var o=n(7870),r=n(61938),a=n(76693),i=n(19033),c=n(72562);const l=["page_site_name","page_site_region","article_author","article_id","article_id_type","article_kicker_name","article_name","article_name_latest","article_publish_latest","article_publish_timestamp","article_tag_name","cms_original_publishing_site","page_name","page_number","page_restrictions","page_section","page_section_2","page_site_name","page_site_region","page_tags","page_type","template_name","experimentation_data","splash_teaser_name","is_video_contains","is_registered_article"],s=["splash_teaser_name"],d=e=>{let{data:t,link:n}=e;return(0,a.Gm)((e=>{const t=window.utag_data||{};return Object.fromEntries((e=>e?l.filter((e=>!s.includes(e))):l)(e).map((e=>[e,(0,a.ve)(t[e])])))})(n),t)},p=()=>{var e;return Boolean(null===(e=window)||void 0===e||null===(e=e.appState)||void 0===e||null===(e=e.features)||void 0===e?void 0:e.performanceTealiumIdleEnabled)},u=e=>{window.utag&&window.utag.view?(0,i.Z)((()=>{window.utag.view(d({data:e}))}),p()):console.warn("ERROR tealium utg.js failed to load correctly.")},v=(e,t,n,o)=>{const r=n?"link":"view",a=()=>{e[r](d({data:t,link:n}))};var l;o?(0,c.l)(a,Boolean(null===(l=window)||void 0===l||null===(l=l.appState)||void 0===l||null===(l=l.features)||void 0===l?void 0:l.performanceTealiumRequestAnimationFrameEnabled)):(0,i.Z)(a,p())},m=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(window.utag&&window.utag.link)v(window.utag,e,t,n);else{const r=window.utag_data.url;(0,o.Z)(r,"utag").then((o=>{v(o,e,t,n)})).catch((e=>{console.warn("ERROR tealium utag.js failed to load correctly."),console.warn(e)}))}},w=(0,r.Z)((async()=>{if(!window.utag||!window.utag.link){const e=window.utag_data.url;await(0,o.Z)(e,"utag")}return window.utag_data.tealium_visitor_id}))},76693:(e,t,n)=>{n.d(t,{Gm:()=>c,OL:()=>s,Ym:()=>v,bO:()=>d,ve:()=>i,wr:()=>l,yE:()=>p});var o=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(64043),n(57267),n(28436);const i=e=>null==e?"":"string"==typeof e?e.replace("#8230;","...").replace(/("|#)/g,""):e,c=(e,t)=>a(a({},e),t),l=(e,t)=>{let n=e.parentElement;for(;n&&!n.classList.contains(t);)n=n.parentElement;return n},s=(e,t)=>{let n=e.previousSibling;for(;n&&!n.classList.contains(t);)n=n.previousSibling;return n},d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return n;const o=e.querySelector(t);let r=n;return o&&o.getAttribute("data-original-text")?r=o.getAttribute("data-original-text"):o&&o.textContent&&(r=o.textContent),r.trim()},p=e=>e.offsetY<0||e.offsetX<0,u={findAncestor:l,getElementHeight:e=>e.offsetHeight,calculateVideoOffsetTop:(e,t,n)=>e-t.offsetTop+n.getBoundingClientRect().top},v=e=>{const t=u.findAncestor(e,"article__content");if(!t)return"featured";const n=u.getElementHeight(t),o=Math.round(n/3),r=u.calculateVideoOffsetTop(document.documentElement.scrollTop,t,e);return r<=o?"article top":r<=2*o?"article middle":"article bottom"}},61938:(e,t,n)=>{n.d(t,{Z:()=>o}),n(752),n(73964),n(76265);const o=e=>async function(){try{return await e(...arguments)}catch(e){return}}}}]);