"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([["premiere"],{"./src/app/sites/premiere/chrome/Footer.component.tsx":(e,s,t)=>{t.d(s,{$:()=>j});var n=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),o=t("../../../node_modules/.pnpm/react-i18next@11.10.0_i18next@20.3.3_react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js"),i=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),a=t.n(i),c=t("../../../packages/renderer/shared/ui/src/chrome/Footer.component.tsx"),l=t("../../../packages/renderer/shared/ui/src/icons/SocialIcons.component.tsx"),d=t("../../../packages/renderer/shared/core/src/lib/clickSection.tsx"),m=t("../../../packages/shared/core/src/lib/image-asset.ts"),p=t("../../../packages/shared/core/src/lib/locale.ts"),h=t("../../../packages/renderer/shared/core/src/utilities/route.ts"),u=t("../../../packages/renderer/shared/core/src/lib/social.ts"),x=t("./src/app/core/ui/index.ts"),g=t("./src/app/core/chrome/StationLogo.component.tsx"),_=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const j=(0,n.f3)("store")((0,n.Pi)((e=>{let{store:s,amp:t}=e;if(!s)return null;const{site:n,env:i,page:j}=s,{sections:v,integration:b}=n,{t:f}=(0,o.$)(),N=n.index?.ownership?.id||"",k="aloha trust"!==N&&v.navigation?.enable_podcasts_links_switch,y=(0,u.i)(v.social),w=(0,c.tp)(n,v.navigation?.menu_footer),$=w?w.map(((e,s)=>(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:e.href||e.ref||"",target:e.target||"",children:e.label},s)},s))):null,[A]=(0,p.Kd)(n).split("-"),L=v.contact?.public_file_assistance_link_override?v.contact?.public_file_assistance_link_override:`/assistance/${A}/`,S=N?.includes("providers/")||!1,I=k?"footer-iheart":"footer-aloha",P=N?N.replace("providers/",""):"",C=a()("component-Site-Footer",{"page-loading":!j.currentPage});return(0,_.jsx)(d.G.Provider,{value:"footer",children:(0,_.jsx)("footer",{className:C,children:(0,_.jsxs)("section",{children:[(0,_.jsx)("div",{className:"top-footer",children:(0,_.jsxs)("div",{className:"footer-row footer-links",children:[y?(0,_.jsx)("div",{className:"social-network-icons",children:(0,_.jsx)(l.H,{networks:y})}):null,v.general?.description?(0,_.jsx)("div",{className:"description",children:v.general.description}):null,v.navigation?.menu_footer?.length?(0,_.jsx)("ul",{className:"footer-station-links",children:$}):null,(0,_.jsxs)("ul",{className:"footer-national-links",children:[v.navigation?.contact_menu_switch?(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:(0,h.ab)(n,"contact")||"",children:f("footer-contact")})}):null,v.navigation?.advertise_switch?(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:(0,h.ab)(n,"advertise")||"",children:f("footer-advertise",{station:`${v.general?.name}`})})}):null,k?(0,_.jsxs)(r.Fragment,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:`${i.NATIONAL_SITE_URL}/apps/`,target:"_blank",children:f("footer-app")})}),(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:`${i.NATIONAL_SITE_URL}/podcast/`,target:"_blank",children:f("footer-podcast")})})]}):null]})]})}),(0,_.jsxs)("div",{className:"lower-footer",children:[(0,_.jsx)("div",{className:"footer-logo",children:n.sections.design?.logo_footer?.id&&(0,_.jsx)(g.F,{imgUrl:(0,m.Co)(n.sections.design?.logo_footer?.id,i.IMAGE_HOST),width:128,height:44,stationUrl:"/",alt:`${n.sections.general?.name} - ${n.sections.general?.positioner}`})}),(0,_.jsxs)("ul",{className:"lower-footer-national-links",children:[(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:"/sitemap/",children:f("footer-sitemap")})}),v.navigation?.contest_nav_switch?(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:(0,h.ab)(n,"rules")||"",children:f("footer-contest")})}):null,(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:"https://www.iheart.com/privacy/",children:f("footer-privacy")})}),(0,_.jsx)("li",{children:(0,_.jsxs)(x.Bn,{to:"https://privacy.iheart.com/",children:[f("your_privacy_choices"),i.YOURCHOICE_ICON&&!t?(0,_.jsx)("img",{"data-src":i.YOURCHOICE_ICON,alt:"Your privacy Logo",className:"lazyload",width:13,height:14}):null]})}),(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:"https://www.iheart.com/terms/",children:f("footer-terms")})}),(0,_.jsx)("li",{children:(0,_.jsxs)(x.Bn,{to:"https://www.iheart.com/adchoices/",children:["AdChoices",i.AD_ICON&&!t?(0,_.jsx)("img",{"data-src":i.AD_ICON,alt:"AdChoices Logo",className:"lazyload",width:13,height:14}):null]})}),(0,_.jsx)(c.cB,{t:f,broadcastFacilities:b}),v.contact?.eeo_report_asset?.id?(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:`${(0,m.Co)(v.contact?.eeo_report_asset?.id,i.IMAGE_HOST)}?passthrough=1`,target:"_blank",children:f("footer-eeo")})}):null,b?.plugin?.broadcastFacilities?.length?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:L,children:f("footer-assistance")})}),(0,_.jsx)("li",{children:(0,_.jsx)(x.Bn,{to:"/fcc-applications",target:"_blank",children:f("fcc_applications")})})]}):null]}),S?(0,_.jsx)(c.Ip,{providerName:n.index?.ownership?.taxo?.source?.display_name||P,additionalCopyright:v.general?.additional_copyright||""}):(0,_.jsx)(c.Ip,{providerName:f(I),additionalCopyright:v.general?.additional_copyright||""})]})]})})})})))},"./src/app/sites/premiere/chrome/Header.component.tsx":(e,s,t)=>{t.d(s,{h:()=>Z});var n=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),o=t("./src/app/core/lib/utilities.ts"),i=t("../../../packages/renderer/shared/core/src/utilities/window.ts"),a=t("../../../packages/renderer/shared/core/src/lib/resize-watcher.ts"),c=t("./src/app/core/ui/index.ts"),l=t("../../../packages/renderer/shared/core/src/lib/clickSection.tsx"),d=t("../../../packages/renderer/shared/core/src/lib/social.ts");let m;!function(e){e.UP="up",e.DOWN="down"}(m||(m={}));var p=t("../../../packages/renderer/shared/ui/src/icons/SocialIcons.component.tsx"),h=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const u=e=>{let{width:s=21,height:t=19}=e;return(0,h.jsx)("svg",{className:"svg-icon icon-call",focusable:"false",tabIndex:-1,width:s,height:t,viewBox:"0 0 21 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{className:"primary-path",d:"M4.34 0c.683 0 .853.114 1.213.792.037.235 1.281 2.375 1.708 3.166.27.501.277.918.068 1.188-.922 1.187-2.135.792-2.136 1.979 0 1.188.629 2.133 2.563 4.354 2.068 2.375 4.204 3.167 5.126 3.167.604 0 2.135-1.98 2.562-2.771.427-.792 1.709.396 2.99 1.188 1.282.791 2.282 1.187 2.496 1.583.317.588-.495 1.583-1.282 2.375-.647.65-2.495 1.979-3.777 1.979-1.28 0-4.698 0-9.396-4.354C1.776 10.292.495 7.125.068 4.75-.359 2.375 1.349 1.187 1.777.792 2.204.396 3.485 0 4.339 0z",fill:"#000"})})};var x=t("./src/app/core/chrome/HeaderSearch.component.tsx"),g=t("./src/app/core/chrome/HeaderUser.component.tsx"),_=t("./src/app/core/chrome/StationLogo.component.tsx"),j=t("../../../packages/shared/core/src/lib/image-asset.ts"),v=t("./src/app/core/ui/constants.ts");const b=(0,n.f3)("store")((e=>{let{store:s,location:t}=e;if(!s)return null;const{site:n,env:o}=s;if(!n.sections.design?.station_logo?.id||!n.sections.general)return null;const[c,l]=(0,r.useState)(!1),d=()=>{window.innerWidth>v.qu.mobileBreakpoint?l(!0):l(!1)};(0,r.useEffect)((()=>{if((0,i.Ax)())return d(),a.n.onWidthChange.subscribe(d),()=>a.n.onWidthChange.unsubscribe(d)}),[]);let m=v.rY.premiereLogoMobileWidth,p=v.rY.premiereLogoMobileHeight;if(c&&(m=v.rY.premiereLogoDesktopWidth,p=v.rY.premiereLogoDesktopHeight),"header-block"===t){let e=!1;m=v.rY.premiereLogoDesktopWidth,p=v.rY.premiereLogoDesktopHeight,n.sections.design?.thumbnail_image?.id&&(e=!0),e&&c?(m=v.rY.premiereLogoWithHostDesktopWidth,p=v.rY.premiereLogoWithHostDesktopHeight):e&&!c&&(m=v.rY.premiereLogoWithHostMobileWidth,p=v.rY.premiereLogoWithHostMobileHeight)}return(0,h.jsx)("div",{className:"station-logo",children:n.sections.design?.station_logo?.id&&(0,h.jsx)(_.F,{imgUrl:(0,j.Co)(n.sections.design?.station_logo?.id,o.IMAGE_HOST),width:m,height:p,stationUrl:"/",alt:`${n.sections.general?.name} - ${n.sections.general?.positioner}`})})}));var f=t("../../../packages/shared/core/src/utils/slugify.ts"),N=t("../../../node_modules/.pnpm/react-i18next@11.10.0_i18next@20.3.3_react@17.0.2/node_modules/react-i18next/dist/es/Translation.js"),k=t("../../../node_modules/.pnpm/react-router@5.2.0_react@17.0.2/node_modules/react-router/esm/react-router.js"),y=t("./src/app/core/lib/menu.ts"),w=t("../../../packages/renderer/shared/core/src/utilities/route.ts"),$=t("./src/app/core/components/icons/ArrowIcon.component.tsx");const A=e=>{let{direction:s="down"}=e;return(0,h.jsx)("svg",{tabIndex:-1,focusable:"false",className:`svg-icon icon-dropdown direction-${s}`,width:"8",height:"6",fill:"none",viewBox:"0 0 8 6",children:(0,h.jsx)("path",{fill:"#3F4447",className:"primary-path",d:"M.71 2.41 3.3 5c.39.39 1.02.39 1.41 0L7.3 2.41C7.93 1.78 7.48.7 6.59.7H1.41C.52.7.08 1.78.71 2.41Z"})})};var L=t("./src/app/core/components/remote/Remote.component.tsx"),S=t("../../../packages/shared/core/src/services/Aptivada.ts");const I="PremiereNav-module_horizontal-nav_ViWY1",P="PremiereNav-module_outer-wrap_Kwl90",C="PremiereNav-module_main-nav_TIUmY",R="PremiereNav-module_top-label_lGBVx",B="PremiereNav-module_menu-label_ffXvV",H="PremiereNav-module_more-trigger_VtseU",W="PremiereNav-module_dropdown-overlay_KZYtV",O="PremiereNav-module_submenu_1kKKS",T="PremiereNav-module_icon_4ZRzN",M=(0,n.f3)("store")((e=>{let{store:s,callback:t,forceOpen:n=!1,top:o=0}=e;if(!s)return null;const i=(0,r.useMemo)((()=>{const e={};return s.site.micrositeReferences.forEach((s=>e[`/index${s._id}`]=s.slug)),e}),[s.site.micrositeReferences]),{navigation:a}=s.site.sections??{},{slug:l}=s.site.index,d=`contestsloader-${l}`,m=(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{type:"link",className:B,to:(0,w.ab)(s.site,"rules")??"",label:e("contest_rules"),children:e("contest_rules")})});return(0,h.jsxs)("li",{className:R,children:[(0,h.jsx)(N.W,{children:e=>(0,h.jsxs)("button",{className:B,onClick:()=>t?.(e("promotions")),children:[e("promotions"),(0,h.jsx)("span",{className:T,children:n?(0,h.jsx)(A,{direction:"up"}):(0,h.jsx)(A,{direction:"down"})})]})}),(0,h.jsx)("div",{className:W,children:(0,h.jsxs)("ul",{className:`${O} ${n?"visible":""}`,"aria-hidden":!!n,style:{maxHeight:`calc(100vh - ${o+100}px)`},children:[(0,h.jsx)(L.N,{loader:()=>(0,S.T)({accountId:l},s.tags.surrogateKeys,s.getSdkOpts()),cacheKey:d,fallback:m,showLoading:!1,children:e=>{let{data:t}=e;if(t?.length){const e=t.slice(0,5).map(((e,t)=>{const n={type:"link",label:e.title.trim(),href:s?.site?e.gridRedirect||(0,w.ab)(s?.site,"promotion",{slug:`${(0,f.lV)(e.title.trim(),6)}-${e.appId}`}):"#",context:`contest_${t}`};return(0,h.jsx)("li",{children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{className:B,to:n.href||"",label:n.label||"",target:n.target||"",context:n.context,children:e(`${n.label}`)})})},`contest_${t}`)}));return(0,h.jsxs)(h.Fragment,{children:[e,(0,h.jsx)("li",{children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{type:"link",className:B,to:(0,w.ab)(s.site,"promotions")??"",label:e("all_promotions"),children:e("all_promotions")})})})]})}return null}}),a?.national_promotions?a.national_promotions.map(((e,t)=>{const n=(0,y.S)(e,s.env.MICROSITE_ROOT,null,s.site,i);return(0,h.jsx)("li",{children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{type:"link",className:B,to:n.href??"",label:n.label??"",context:n.label?`${(0,f.lV)(n.label)}_${t}`:void 0,children:e(`${n.label}`)})})},`np_${t}`)})):null,(0,h.jsx)("li",{children:m})]})})]})}));var E=t("./src/app/core/components/icons/ExternalLinkIcon.component.tsx");const q=(0,n.f3)("store")((e=>{let{label:s,url:t,context:n,type:o,store:a}=e;if(!o||!a)return null;const c=(0,r.useRef)(n),d=(0,r.useCallback)(((e,t)=>{const n=a.page.currentPage,r=n?`${a.microsite?"microsite_":""}${n.name}`:"";c.current||(c.current=s||("string"==typeof t?t:""));let l="";(0,i.Ax)()&&(l=window.location.href),a.onAnalyticsAction.dispatch({sectionName:e,pageName:r,context:c.current,action:"click",url:t,referrer:l,type:o})}),[a,s,o]);return(0,h.jsx)(l.G.Consumer,{children:e=>(0,h.jsxs)("button",{"aria-label":`${s||"menu item"}`,className:B,onClick:()=>d(e,t),children:[s,(0,h.jsx)("span",{className:T,children:(0,h.jsx)(E.h,{})})]})})}));var F=t("../../../node_modules/.pnpm/react-i18next@11.10.0_i18next@20.3.3_react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js");const Y=e=>{let{menu:s,context:t}=e;return s.type&&"link_warning"===s.type?(0,h.jsx)(q,{url:s.href??"",label:s.label??"",type:s.type??""}):(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{className:B,to:s.href||"",label:s.label||"",target:s.target||"",context:t||s.context,children:e(`${s.label}`)})})},D=(0,n.f3)("store")((e=>{let{store:s,sections:t,menus:n}=e;if(!s||!n)return null;const o=t.design?.navigation_color,l=t.design?.navigation_links_color,d=`\n        :root {\n            ${o?` --premiere-navigation-background-color: ${o};`:""}\n            ${l?` --premiere-navigation-links-color: ${l};`:""}\n        }`,m=(0,k.k6)(),p=(0,r.useRef)(null),u=(0,r.useMemo)((()=>{const e={};return s?.site.micrositeReferences.forEach((s=>e[`/index${s._id}`]=s.slug)),e}),[s?.site.micrositeReferences]),x=(0,r.useMemo)((()=>n?.map((e=>(0,y.S)(e,s?.env.MICROSITE_ROOT,null,s?.site,u)))),[n,s?.env.MICROSITE_ROOT,s?.site,u]),[g,_]=(0,r.useState)(0),[j,v]=(0,r.useState)(!1),[b,L]=(0,r.useState)(""),[S,E]=(0,r.useState)(s.stackedNavState),{t:q}=(0,F.$)(),D=e=>{L(b&&b===e?"":e)},U=()=>{const e=p?.current?.getBoundingClientRect();e&&_(Math.floor(e.top));let s=0;const t=p?.current?.offsetWidth;t&&(s=Object.values(p?.current.childNodes).reduce(((e,s)=>e+s.offsetWidth),-2)),v(t<s)},z=(0,r.useCallback)((()=>{s.storeStackedNavState(!1),E(!1),L("")}),[s]);return(0,r.useEffect)((()=>{if((0,i.Ax)())return U(),a.n.onWidthChange.subscribe(U),()=>a.n.onWidthChange.unsubscribe(U)}),[]),(0,r.useEffect)((()=>{m.listen(z)}),[m,z]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("style",{dangerouslySetInnerHTML:{__html:d}}),x.length?(0,h.jsx)("nav",{"data-cy":"pn-nav",className:`${I} ${S?"stacked":""}`,children:(0,h.jsxs)("div",{className:`${P} ${b?"visible":""}`,children:[(0,h.jsxs)("ul",{"data-cy":"menuLabel",className:C,ref:p,style:{maxHeight:`calc(100vh - ${g}px)`},children:[x.map(((e,s)=>(0,h.jsx)("li",{className:R,children:e.children?.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N.W,{children:s=>(0,h.jsxs)("button",{"data-cy":"menuitem",className:B,onClick:()=>D(e.label),children:[s(`${e.label}`),(0,h.jsx)("span",{className:T,children:b===e.label?(0,h.jsx)(A,{direction:"up"}):(0,h.jsx)(A,{direction:"down"})})]})}),(0,h.jsx)("div",{className:W,children:(0,h.jsx)("ul",{"data-cy":"list-submenu",className:`${O} ${b===e.label?"visible":""}`,"aria-hidden":!!b,style:{maxHeight:`calc(100vh - ${g+100}px)`},children:e.children?.map((e=>(0,h.jsx)("li",{children:(0,h.jsx)(Y,{menu:e,context:e.label?`${(0,f.lV)(e.label)}_${s}`:void 0})},`${e.label}_${e.id}`)))})})]}):(0,h.jsx)(Y,{menu:e,context:e.label?`${(0,f.lV)(e.label)}_${s}`:void 0})},`${e.label}_${e.id}`))),s?.site.sections.navigation?.contest_nav_switch?(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(M,{store:s,forceOpen:b===e("promotions"),top:g,callback:D})}):null,t.navigation?.contact_menu_switch?(0,h.jsx)("li",{className:R,children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{className:B,to:(0,w.ab)(s.site,"contact")||"",context:"contact",children:e("contact")})})}):null,t.partners?.postup_switch?(0,h.jsx)("li",{className:R,children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{className:B,to:(0,w.ab)(s.site,"newsletter")||"",context:"newsletter",children:e("newsletter")})})}):null,t.navigation?.advertise_switch?(0,h.jsx)("li",{className:R,children:(0,h.jsx)(N.W,{children:e=>(0,h.jsx)(c.Bn,{className:B,to:(0,w.ab)(s.site,"advertise")||"",context:"advertise",children:e("advertise_with_us",{name:s.site.sections.general?.name})})})}):null,j?(0,h.jsx)("li",{"aria-hidden":"true",children:(0,h.jsx)("span",{style:{display:"inline-block",width:"100px",border:"solid 1px transparent"},children:(0,h.jsx)("p",{style:{width:0,height:0,fontSize:0,color:"transparent"},"aria-hidden":"true",children:'This is a spacer to push nav content over when part of the nav is hidden behind the "MORE" button'})})}):null]}),j?(0,h.jsx)("button",{"data-cy":"more-trigger",className:`${B} ${H}`,onClick:()=>{s.storeStackedNavState(!S),E(!S),b&&L("")},children:S?(0,h.jsxs)("span",{className:T,children:[q("less")," ",(0,h.jsx)($.ArrowIcon,{direction:"up"})]}):(0,h.jsxs)("span",{className:T,children:[q("more")," ",(0,h.jsx)($.ArrowIcon,{direction:"down"})]})}):null]})}):null]})}));var U=t("./src/app/core/components/ResponsiveImage.component.tsx");const z="HostImage-module_host-image_AwW1z",G=(0,n.f3)("store")((e=>{const{store:s}=e;if(!s)return null;const{site:t,env:n}=s;let r=[];if(!t.sections.design?.thumbnail_image?.id)return null;const o=133,i=(0,j.Co)(t.sections.design?.thumbnail_image?.id,n.IMAGE_HOST);return r=[{url:`${i}?ops=gravity(%22center%22),contain(133,133)&quality=80`,descriptor:"1x"},{descriptor:"2x",url:`${i}?ops=gravity(%22center%22),contain(266,266)&quality=80`}],(0,h.jsx)("div",{className:z,children:(0,h.jsx)(U.t,{src:i,srcset:r,initialWidth:o,initialHeight:o,alt:`${t.sections.general?.name} - ${t.sections.general?.positioner}`})})})),Z=(0,n.f3)("store")((0,n.Pi)((e=>{const{store:s,content:t}=e;if(!s)return null;const{site:n}=s,{sections:_}=n,[j,f]=(0,r.useState)(!1),[N,k]=(0,r.useState)(!1),{t:y}=(0,F.$)(),w=()=>{window.innerWidth>v.qu.mediumScreenBreakpoint?k(!0):k(!1)};(0,r.useEffect)((()=>{if((0,i.Ax)())return w(),a.n.onWidthChange.subscribe(w),()=>a.n.onWidthChange.unsubscribe(w)}),[]);const $=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body";const[t,n]=(0,r.useState)(m.UP);return(0,r.useEffect)((()=>{if((0,i.Ax)()){let t=document.querySelector(`${s}`).scrollTop;const r=s=>Math.abs(s-t)>e,o=e=>e>t&&!(t>0&&0===e)&&!(e>0&&0===t),i=e=>{const s=e.scrollTop;if(r(s)){const e=o(s)?m.DOWN:m.UP;n(e),t=s>0?s:0}},a=e=>{const t=e.target;if("body"!==s&&t&&!t.matches(`${s}`))return null;window.requestAnimationFrame((()=>i(t)))};return window.addEventListener("scroll",a,!0),()=>window.removeEventListener("scroll",a)}})),t}(150,".component-routes"),A=(0,r.useCallback)((()=>{f("down"===$)}),[$]);(0,r.useEffect)((()=>{(0,i.Ax)()&&A()}),[A]);const L=(0,d.i)(_.social),S=_.contact?.request_phone_number,I=y(t?.link?.name||N?"find_your_station":"find_station"),P=_.design?.header_color,C=_.design?.navigation_color,R=`\n            :root {\n                ${P?` --premiere-header-background-color: ${P};`:""}\n                ${C?` --premiere-navigation-background-color: ${C};`:""}\n            }\n        `,B=(0,o.l0)(s,"home")&&"microhome"!==s?.page.currentPage?.layoutId;return(0,h.jsxs)("header",{className:"component-premiere-site-header",children:[(0,h.jsx)("style",{dangerouslySetInnerHTML:{__html:R}}),(0,h.jsx)("section",{className:"wrapper--header",children:(0,h.jsxs)(l.G.Provider,{value:"header",children:[(0,h.jsxs)("section",{className:"search-user-container",children:[(0,h.jsx)(g.F,{location:"header",showMenu:!1}),_.navigation?.search_switch?(0,h.jsx)(x.w,{location:"premiere-header"}):null]}),(0,h.jsx)("section",{className:"branding "+(B&&!j?"homepage":"header--slim"),children:B&&!j?(0,h.jsxs)(h.Fragment,{children:[n.sections.design?.thumbnail_image?.id&&(0,h.jsx)(G,{}),(0,h.jsx)(b,{location:j?"header":"header-block"})]}):(0,h.jsx)(b,{location:"header"})}),(0,h.jsx)("section",{className:"find-your-station",children:_.navigation?.find_your_station_switch?(0,h.jsx)(c.D2,{kind:c.Lv.PRIMARY,size:"small",target:t?.link?.target||"_self",to:t?.link?.urls?.web||t?.link?.urls?.device||"/howtolisten/",className:"listen-button",children:I}):null})]})}),B&&!j?(0,h.jsxs)("section",{className:"wrapper--social",children:[(0,h.jsx)(c.zx,{kind:c.Lv.PRIMARY,size:"small",className:"social-icons-button",label:"socialIcons",children:(0,h.jsx)(p.H,{networks:L})}),S?(0,h.jsx)(c.zx,{kind:c.Lv.PRIMARY,size:"small",className:"call-button",label:"callIcon",children:(0,h.jsxs)("a",{href:`tel:${S}`,children:[(0,h.jsx)(u,{}),(0,h.jsx)("span",{className:"text",children:y("call_in")})]})}):null]}):null,(0,h.jsx)("section",{className:"wrapper--header-nav",children:(0,h.jsx)(l.G.Provider,{value:"nav",children:(0,h.jsx)(D,{sections:_,menus:_.navigation.menu,social:null})})})]})})))},"./src/app/sites/premiere/chrome/PremierePushdownAd.component.tsx":(e,s,t)=>{t.d(s,{Z:()=>d});var n=t("../../../node_modules/.pnpm/@loadable+component@5.15.3_react@17.0.2/node_modules/@loadable/component/dist/loadable.esm.js"),r=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=t.n(r),i=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),a=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const c=(0,n.ZP)({resolved:{},chunkName:()=>"core-page-blocks-Ad-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>Promise.resolve().then(t.bind(t,"./src/app/core/page-blocks/Ad.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/page-blocks/Ad.component.tsx"}}),l=(0,i.f3)("store")((0,i.Pi)((e=>{let{store:s}=e;if(!s||!s.page.currentPage)return null;const t=s.page.currentPage.blocks.find((e=>"ad:top-leaderboard"===e.region));if(!t||"0"===t?.value?.position)return null;const n=o()("component-pushdown",{"sticky-ad-mobile":t?.tags?.includes("display-hints/sticky-ad-mobile")&&"3332"===t.value.position});return(0,a.jsx)("div",{className:n,children:(0,a.jsx)(c,{block:t,isPrimary:t.id===s.primaryBlockId})})}))),d=l},"./src/app/sites/premiere/index.tsx":(e,s,t)=>{t.r(s),t.d(s,{PremiereSiteTheme:()=>_,default:()=>j});var n=t("../../../node_modules/.pnpm/@loadable+component@5.15.3_react@17.0.2/node_modules/@loadable/component/dist/loadable.esm.js"),r=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),o=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),i=t("./src/app/core/chrome/AppTray.component.tsx"),a=t("./src/app/sites/Routes.tsx"),c=t("./src/app/sites/TemplateComponent.component.tsx"),l=t("./src/app/sites/premiere/chrome/Footer.component.tsx"),d=t("./src/app/sites/premiere/chrome/Header.component.tsx"),m=t("./src/app/sites/premiere/chrome/PremierePushdownAd.component.tsx"),p=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const h=(0,n.ZP)({resolved:{},chunkName:()=>"core-page-blocks-legalnotice-LegalNoticeLoader-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("core-page-blocks-legalnotice-LegalNoticeLoader-component").then(t.bind(t,"./src/app/core/page-blocks/legalnotice/LegalNoticeLoader.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/page-blocks/legalnotice/LegalNoticeLoader.component.tsx"}},{ssr:!1}),u=(0,n.ZP)({resolved:{},chunkName:()=>"core-components-leaving-site-LeavingSiteLoader-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("core-components-leaving-site-LeavingSiteLoader-component").then(t.bind(t,"./src/app/core/components/leaving-site/LeavingSiteLoader.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/components/leaving-site/LeavingSiteLoader.component.tsx"}},{ssr:!1}),x=(0,n.ZP)({resolved:{},chunkName:()=>"core-chrome-IHRPlayerBar-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("core-chrome-IHRPlayerBar-component").then(t.bind(t,"./src/app/core/chrome/IHRPlayerBar.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/chrome/IHRPlayerBar.component.tsx"}},{ssr:!1}),g=(0,n.ZP)({resolved:{},chunkName:()=>"core-components-AuthModal-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("core-components-AuthModal-component").then(t.bind(t,"./src/app/core/components/AuthModal.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/components/AuthModal.component.tsx"}},{ssr:!1}),_=(0,r.f3)("store")((0,r.Pi)((e=>{let{store:s,siteTheme:t}=e;if(!s)return null;const{request:n}=s,r=!!n.query?.inapp;return(0,p.jsxs)(c.M,{display:"grid",children:[(0,p.jsx)(a.Z5,{siteTheme:t,headerGroup:(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(m.Z,{}),r?null:(0,p.jsx)(d.h,{})]}),footerGroup:(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(u,{}),(0,p.jsx)(l.$,{}),(0,p.jsx)(i.s,{}),(0,p.jsx)(h,{}),(0,p.jsx)(g,{})]})}),r?null:(0,p.jsx)(x,{})]})}))),j=_}}]);
//# sourceMappingURL=premiere.cf2c8e62acbdaaf1bb14.js.map