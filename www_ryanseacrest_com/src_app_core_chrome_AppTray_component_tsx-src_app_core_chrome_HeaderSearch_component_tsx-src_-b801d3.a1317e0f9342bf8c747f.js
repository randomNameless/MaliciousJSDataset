"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([["src_app_core_chrome_AppTray_component_tsx-src_app_core_chrome_HeaderSearch_component_tsx-src_-b801d3"],{"./src/app/core/chrome/AppTray.component.tsx":(e,s,t)=>{t.d(s,{s:()=>o});var r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const o=()=>(0,r.jsx)("div",{className:"component-apptray",children:(0,r.jsx)("div",{id:"recaptcha-badge",className:"g-recaptcha"})})},"./src/app/core/chrome/HeaderSearch.component.tsx":(e,s,t)=>{t.d(s,{w:()=>m});var r=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),o=t.n(r),n=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),a=t("./src/app/core/components/icons/CloseIcon.component.tsx"),c=t("./src/app/core/components/icons/SearchIcon.component.tsx"),i=t("./src/app/core/ui/index.ts"),l=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),d=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const p=e=>{let{width:s=36,height:t=40}=e;return(0,d.jsx)("svg",{className:"svg-icon icon-search-without-circle",tabIndex:-1,width:s,height:t,viewBox:"0 0 40 40",focusable:"false",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{className:"primary-path",fillRule:"evenodd",clipRule:"evenodd",d:"M22.552 28.331a14.811 14.811 0 01-7.538 2.051C6.722 30.382 0 23.581 0 15.191S6.722 0 15.014 0c8.291 0 15.013 6.801 15.013 15.191 0 3.828-1.4 7.326-3.71 9.997l9.096 10.736a2.49 2.49 0 01-.265 3.482 2.42 2.42 0 01-3.441-.268L22.552 28.33zm1.618-13.14c0 5.117-4.1 9.265-9.157 9.265s-9.156-4.148-9.156-9.265c0-5.117 4.1-9.265 9.157-9.265s9.156 4.148 9.156 9.265z",fill:"#fff"})})},m=(0,l.f3)("store")((0,l.Pi)((e=>{const[s,t]=(0,n.useState)(!1),r=s?"Close Search":"Open Search",l=o()("header-search",{open:s}),m=(0,n.useCallback)((function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!s;if(r){const s=e.store?.page.currentPage;if(s){const t=s?`${e.store?.microsite?"microsite_":""}${s.name}`:"";let r="";"undefined"!=typeof window&&(r=window.location.href),e.store?.onAnalyticsAction.dispatch({sectionName:"header",pageName:t,context:"search_Icon",action:"click",url:"",referrer:r})}}t(r)}),[e.store?.microsite,e.store?.page.currentPage,e.store?.onAnalyticsAction,s]),h="premiere-header"===e.location?(0,d.jsx)(p,{}):(0,d.jsx)(c.W,{});return(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)(i.Rj,{location:"header"}),(0,d.jsx)("button",{className:"search-button search-toggle","aria-label":r,onClick:()=>m(!s),children:s?(0,d.jsx)(a.T,{}):h})]})})))},"./src/app/core/chrome/HeaderUser.component.tsx":(e,s,t)=>{t.d(s,{F:()=>i});var r=t("../../../node_modules/.pnpm/@loadable+component@5.15.3_react@17.0.2/node_modules/@loadable/component/dist/loadable.esm.js"),o=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),n=t.n(o),a=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const c=(0,r.ZP)({resolved:{},chunkName:()=>"UserProfile-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("UserProfile-component").then(t.bind(t,"./src/app/core/chrome/UserProfile.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/chrome/UserProfile.component.tsx"}},{ssr:!1}),i=e=>{const s=n()("header-user",{"show-menu":e.showMenu});return(0,a.jsx)("div",{className:s,children:(0,a.jsx)(c,{location:"header"})})}},"./src/app/core/chrome/StationLogo.component.tsx":(e,s,t)=>{t.d(s,{F:()=>m,g:()=>h});var r=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),o=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),n=t("./src/app/core/components/ResponsiveImage.component.tsx"),a=t("../../../packages/shared/core/src/lib/image-asset.ts"),c=t("../../../packages/renderer/shared/core/src/utilities/window.ts"),i=t("../../../packages/renderer/shared/core/src/lib/resize-watcher.ts"),l=t("./src/app/core/ui/index.ts"),d=t("./src/app/core/ui/constants.ts"),p=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const m=e=>{let{imgUrl:s,stationUrl:t,alt:r,width:o,height:a}=e;const[c]=s.split("?"),i=c?[{descriptor:"1x",url:`${c}?ops=gravity(%22center%22),contain(${o},${a})&quality=80`},{descriptor:"2x",url:`${c}?ops=gravity(%22center%22),contain(${2*o},${2*a})&quality=80`}]:[],d=`${c}?ops=gravity(%22center%22),contain(${o},${a})&quality=80`;return t?(0,p.jsx)(l.Bn,{to:t||"/",context:"station_link","aria-label":"Station Link",children:(0,p.jsx)(n.t,{src:d,srcset:i,alt:r,initialWidth:o,initialHeight:a,placeholder:d,placeholderSrcset:i})}):(0,p.jsx)(n.t,{src:d,srcset:i,alt:r,initialWidth:o,initialHeight:a,placeholder:d,placeholderSrcset:i})},h=(0,r.f3)("store")((e=>{let{store:s}=e;if(!s)return null;const{site:t,env:r}=s;let n=d.rY.stationLogoMobileWidth,l=d.rY.stationLogoMobileHeight;const[h,u]=(0,o.useState)(!1),C=()=>{window.innerWidth>d.qu.mobileBreakpoint?u(!0):u(!1)};if(h&&(n=d.rY.stationLogoDesktopWidth,l=d.rY.stationLogoDesktopHeight),(0,o.useEffect)((()=>{if((0,c.Ax)())return C(),i.n.onWidthChange.subscribe(C),()=>i.n.onWidthChange.unsubscribe(C)}),[]),!t.sections.design?.station_logo?.id||!t.sections.general)return null;const x=(0,a.Co)(t.sections.design?.station_logo?.id,r.IMAGE_HOST),g=`${t.sections.general?.name} - ${t.sections.general?.positioner}`;return(0,p.jsx)("figure",{className:"component-station-logo",children:(0,p.jsx)(m,{imgUrl:x,stationUrl:"/",alt:g,width:n,height:l})})}))},"./src/app/core/components/icons/ExternalLinkIcon.component.tsx":(e,s,t)=>{t.d(s,{h:()=>o});var r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const o=()=>(0,r.jsx)("svg",{tabIndex:-1,focusable:"false",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon icon-externallink",children:(0,r.jsx)("path",{tabIndex:-1,d:"M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z",fill:"#3F4447",className:"primary-path"})})},"./src/app/core/lib/menu.ts":(e,s,t)=>{t.d(s,{S:()=>c});var r=t("../../../packages/shared/core/src/decoders/Sites.types.ts"),o=t("../../../packages/shared/core/src/lib/logging.ts"),n=t("../../../packages/renderer/shared/core/src/utilities/route.ts");const a=o.b9.logger("Menu");function c(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/featured/",t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;if(!o||o instanceof r.Tt&&e.href)return e;if("brand"===e.type&&e.ref){if(!i?.[`/index${e.ref}`])return a.warn("No brand found for id: ",e.ref),e;e.href=`${s}${i?.[`/index${e.ref}`]}/`}else"page"===e.type?(e.ref&&(e.href=(0,n.ab)(o,e.ref)),o instanceof r.p0&&t?.route.name===e.ref&&(e.active="active")):e.ref&&!e.href&&(e.href=e.ref);return e.children&&(e.children=e.children.map((e=>c(e,s,null,o,i)))),e}},"./src/app/sites/TemplateComponent.component.tsx":(e,s,t)=>{t.d(s,{M:()=>d});var r,o=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js"),a=t.n(n),c=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),i=t("../../../packages/renderer/shared/core/src/lib/ads.ts"),l=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");let d=(0,c.f3)("store")(r=(0,c.Pi)(r=class extends o.Component{constructor(e){super(e),this.appHeight=()=>{document.documentElement.style.setProperty("--template-grid-height",`${window.innerHeight}px`)}}componentDidMount(){"undefined"!=typeof window&&"grid"===this.props.display&&(window.addEventListener("resize",this.appHeight),this.appHeight())}componentWillUnmount(){"grid"===this.props.display&&window.removeEventListener("resize",this.appHeight)}render(){const{store:e,display:s}=this.props,t=(0,i.B7)(e?.page?.currentPage),r=a()("component-template",{"sticky-pushdown":(0,i.J$)(t),"template-grid":"grid"===s});return(0,l.jsx)("div",{className:r,children:this.props.children})}})||r)||r},"../../../packages/renderer/shared/ui/src/chrome/Footer.component.tsx":(e,s,t)=>{t.d(s,{Ip:()=>j,$_:()=>k,cB:()=>v,tp:()=>_});var r=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),o=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),n=t("../../../node_modules/.pnpm/react-i18next@11.10.0_i18next@20.3.3_react@17.0.2/node_modules/react-i18next/dist/es/useTranslation.js"),a=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=t.n(a),i=t("../../../node_modules/.pnpm/react-router@5.2.0_react@17.0.2/node_modules/react-router/esm/react-router.js"),l=t("../../../packages/renderer/shared/ui/src/icons/SocialIcons.component.tsx"),d=t("../../../packages/shared/core/src/lib/image-asset.ts"),p=t("../../../packages/shared/core/src/lib/locale.ts"),m=t("../../../packages/renderer/shared/core/src/utilities/route.ts"),h=t("../../../packages/renderer/shared/core/src/lib/social.ts"),u=t("../../../packages/renderer/shared/core/src/lib/clickSection.tsx"),C=t("../../../packages/renderer/shared/ui/src/elements/Container.component.tsx"),x=t("../../../packages/renderer/shared/ui/src/elements/MagicLink.component.tsx"),g=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const f=(e,s,t)=>(!e.href&&e.ref&&("brand"===e.type?e.href=`/featured/${s[e.ref]}/`:"page"===e.type?e.href=(0,m.ab)(t,e.ref):e.href=e.ref),e.children&&(e.children=e.children.map((e=>e&&f(e,s,t)))),e),_=(e,s)=>{if(!s)return null;const t={};return e.micrositeReferences.forEach((e=>t[e._id]=e.slug)),s.map((s=>f(s,t,e)))},j=e=>{let{providerName:s,additionalCopyright:t}=e;if(!s)return null;const r=t?(0,g.jsx)("div",{className:"addtional-copyright",children:t}):null;return(0,g.jsxs)("div",{className:"site-ownership",children:[(0,g.jsxs)("div",{children:["© ",(new Date).getFullYear()," ",s]}),r]})},b=e=>{let{facility:s,t}=e;const r=s.broadcastCallLetters&&s.broadcastBand?`https://publicfiles.fcc.gov/${s.broadcastBand.toLowerCase()}-profile/${s.broadcastCallLetters}/`:null;return r&&s.broadcastCallLetters?(0,g.jsx)("li",{className:"public-inspection-file",children:(0,g.jsxs)(x.default,{to:`${r}`,target:"_blank",children:[s.broadcastCallLetters.toUpperCase()," ",t("footer-public")]})}):null},w=e=>{let{facility:s,t}=e;return s.broadcastCallLetters?(0,g.jsx)("li",{children:(0,g.jsxs)(x.default,{to:s.politicalLinkOverride||`https://politicalfiles.iheartmedia.com/files/location/${s.broadcastCallLetters.toUpperCase()}/`,target:"_blank",children:[s.broadcastCallLetters.toUpperCase()," ",t("footer-political")]})}):null},v=e=>{let{broadcastFacilities:s,t}=e;const r=s?.plugin?.broadcastFacilities?.map(((e,s)=>(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(b,{facility:e,t}),(0,g.jsx)(w,{facility:e,t})]},s)));return r?.length?(0,g.jsx)(o.Fragment,{children:r}):null},k=(0,r.f3)("store")((0,r.Pi)((e=>{let{store:s,amp:t}=e;if(!s)return null;const{site:r,env:a,page:f}=s,{sections:b,integration:w}=r,{t:k}=(0,n.$)(),y=r.index?.ownership?.id||"",N="aloha trust"!==y,I=(0,h.i)(b.social),L=_(r,b.navigation?.menu_footer),$=L?L.map(((e,s)=>(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:e.href||e.ref||"",target:e.target||"",children:e.label},s)},s))):null,[H]=(0,p.Kd)(r).split("-"),A=b.contact?.public_file_assistance_link_override?b.contact?.public_file_assistance_link_override:`/assistance/${H}/`,S=y?.includes("providers/")||!1,M=N?"footer-iheart":"footer-aloha",U=y?y.replace("providers/",""):"",{pathname:D}=(0,i.TH)(),O=(0,o.useMemo)((()=>{const e=(0,m.XT)((0,m.Pd)(),D);return c()("component-site-footer",{"page-loading":!e&&!f.currentPage})}),[D,f.currentPage]);return(0,g.jsx)(u.G.Provider,{value:"footer",children:(0,g.jsx)("footer",{className:O,children:(0,g.jsx)(C.W,{block:!1,children:(0,g.jsxs)("div",{className:"footer-row footer-links",children:[b.navigation?.menu_footer?.length?(0,g.jsx)("ul",{className:"footer-station-links",children:$}):null,(0,g.jsxs)("ul",{className:"footer-national-links",children:[b.navigation?.contact_menu_switch?(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:(0,m.ab)(r,"contact")||"",children:k("footer-contact")})}):null,b.navigation?.advertise_switch?(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:(0,m.ab)(r,"advertise")||"",children:k("footer-advertise",{station:`${b.general?.name}`})})}):null,N?(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:`${a.NATIONAL_SITE_URL}/apps/`,target:"_blank",children:k("footer-app")})}),(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:`${a.NATIONAL_SITE_URL}/podcast/`,target:"_blank",children:k("footer-podcast")})})]}):null]}),I?(0,g.jsx)("div",{className:"component-social-network-icons",children:(0,g.jsx)(l.H,{networks:I})}):null,b.general?.description?(0,g.jsx)("div",{className:"description",children:b.general.description}):null,(0,g.jsx)("hr",{}),(0,g.jsxs)("ul",{className:"lower-footer-national-links",children:[(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:"/sitemap/",children:k("footer-sitemap")})}),b.navigation?.contest_nav_switch?(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:(0,m.ab)(r,"rules")||"",children:k("footer-contest")})}):null,(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:"https://www.iheart.com/privacy/",children:k("footer-privacy")})}),(0,g.jsx)("li",{children:(0,g.jsxs)(x.default,{to:"https://privacy.iheart.com/",children:[k("your_privacy_choices"),a.YOURCHOICE_ICON&&!t?(0,g.jsx)("img",{"data-src":a.YOURCHOICE_ICON,alt:"Your privacy Logo",className:"lazyload",width:13,height:14}):null]})}),(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:"https://www.iheart.com/terms/",children:k("footer-terms")})}),(0,g.jsx)("li",{children:(0,g.jsxs)(x.default,{to:"https://www.iheart.com/adchoices/",children:["AdChoices",a.AD_ICON&&!t?(0,g.jsx)("img",{"data-src":a.AD_ICON,alt:"AdChoices Logo",className:"lazyload",width:13,height:14}):null]})}),(0,g.jsx)(v,{t:k,broadcastFacilities:w}),b.contact?.eeo_report_asset?.id?(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:`${(0,d.Co)(b.contact?.eeo_report_asset?.id,a.IMAGE_HOST)}?passthrough=1`,target:"_blank",children:k("footer-eeo")})}):null,w?.plugin?.broadcastFacilities?.length?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:A,children:k("footer-assistance")})}),(0,g.jsx)("li",{children:(0,g.jsx)(x.default,{to:"/fcc-applications",target:"_blank",children:k("fcc_applications")})})]}):null]}),S?(0,g.jsx)(j,{providerName:r.index?.ownership?.taxo?.source?.display_name||U,additionalCopyright:b.general?.additional_copyright||""}):(0,g.jsx)(j,{providerName:k(M),additionalCopyright:b.general?.additional_copyright||""})]})})})})})))},"../../../packages/renderer/shared/ui/src/icons/InstagramIcon.component.tsx":(e,s,t)=>{t.d(s,{y:()=>o});var r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const o=()=>(0,r.jsxs)("svg",{tabIndex:-1,focusable:"false",className:"svg-icon icon-instagram",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{className:"primary-path",tabIndex:-1,fillRule:"evenodd",clipRule:"evenodd",d:"M12.0001 7.37836C11.086 7.37836 10.1924 7.64941 9.43242 8.15724C8.6724 8.66508 8.08003 9.38688 7.73023 10.2314C7.38043 11.0759 7.28891 12.0051 7.46723 12.9016C7.64556 13.7981 8.08573 14.6216 8.73208 15.268C9.37842 15.9143 10.2019 16.3545 11.0984 16.5328C11.9949 16.7112 12.9242 16.6196 13.7687 16.2698C14.6132 15.92 15.335 15.3277 15.8428 14.5676C16.3506 13.8076 16.6217 12.9141 16.6217 12C16.6217 10.7743 16.1348 9.59873 15.2681 8.732C14.4013 7.86528 13.2258 7.37836 12.0001 7.37836ZM12.0001 15C11.4067 15 10.8267 14.824 10.3334 14.4944C9.84003 14.1647 9.45553 13.6962 9.22847 13.148C9.00141 12.5998 8.94201 11.9966 9.05777 11.4147C9.17353 10.8328 9.45925 10.2982 9.87881 9.87867C10.2984 9.45912 10.8329 9.17341 11.4148 9.05765C11.9968 8.9419 12.6 9.00131 13.1482 9.22838C13.6963 9.45544 14.1649 9.83995 14.4945 10.3333C14.8241 10.8266 15.0001 11.4067 15.0001 12C15.0001 12.7956 14.684 13.5587 14.1214 14.1213C13.5588 14.6839 12.7957 15 12.0001 15Z",fill:"#27292D"}),(0,r.jsx)("path",{className:"primary-path",tabIndex:-1,d:"M17.8842 7.19576C17.8842 7.79222 17.4007 8.27575 16.8042 8.27575C16.2078 8.27575 15.7243 7.79222 15.7243 7.19576C15.7243 6.5993 16.2078 6.11578 16.8042 6.11578C17.4007 6.11578 17.8842 6.5993 17.8842 7.19576Z",fill:"#27292D"}),(0,r.jsx)("path",{className:"primary-path",tabIndex:-1,fillRule:"evenodd",clipRule:"evenodd",d:"M12 3C9.55581 3 9.24921 3.01036 8.28942 3.05416C7.33144 3.09789 6.67723 3.25001 6.10476 3.47251C5.50424 3.69849 4.96024 4.05275 4.51069 4.51058C4.05276 4.9601 3.6984 5.50411 3.47233 6.10466C3.25001 6.67716 3.09789 7.33137 3.05434 8.28935C3.01036 9.24915 3 9.55575 3 12C3 14.4443 3.01036 14.7509 3.05434 15.7107C3.09807 16.6687 3.25019 17.3229 3.47268 17.8953C3.69867 18.4959 4.05293 19.0399 4.51076 19.4894C4.96031 19.9472 5.50431 20.3015 6.10484 20.5275C6.67734 20.75 7.33154 20.9021 8.28949 20.9458C9.24944 20.9896 9.55592 21 12.0002 21C14.4444 21 14.751 20.9896 15.7108 20.9458C16.6688 20.9021 17.323 20.75 17.8955 20.5275C18.4933 20.2963 19.0363 19.9427 19.4896 19.4894C19.9428 19.0362 20.2964 18.4932 20.5276 17.8953C20.7501 17.3228 20.9023 16.6686 20.946 15.7107C20.9898 14.7507 21.0001 14.4443 21.0001 12C21.0001 9.55578 20.9898 9.24915 20.946 8.28935C20.9023 7.33137 20.7501 6.67716 20.5276 6.10469C20.3017 5.50417 19.9474 4.96016 19.4896 4.51062C19.04 4.0527 18.496 3.69836 17.8954 3.47233C17.3229 3.25001 16.6687 3.09789 15.7107 3.05434C14.7509 3.01036 14.4443 3 12 3ZM12 4.62165C14.4031 4.62165 14.6878 4.63084 15.6369 4.67414C16.5144 4.71418 16.9909 4.86077 17.308 4.98402C17.699 5.1283 18.0526 5.35835 18.3429 5.65727C18.6418 5.94757 18.8718 6.30118 19.0161 6.69209C19.1394 7.00923 19.286 7.48577 19.326 8.36326C19.3693 9.31231 19.3785 9.59694 19.3785 12.0001C19.3785 14.4033 19.3693 14.6879 19.326 15.637C19.286 16.5145 19.1393 16.991 19.0161 17.3082C18.8664 17.6963 18.6371 18.0488 18.3429 18.343C18.0487 18.6372 17.6962 18.8665 17.308 19.0162C16.9909 19.1395 16.5144 19.2861 15.6369 19.3261C14.688 19.3694 14.4034 19.3786 12 19.3786C9.59665 19.3786 9.31213 19.3694 8.36316 19.3261C7.48566 19.2861 7.00916 19.1395 6.69199 19.0162C6.30107 18.872 5.94747 18.6419 5.65716 18.343C5.35824 18.0527 5.12819 17.6991 4.98391 17.3082C4.86066 16.991 4.71404 16.5145 4.67403 15.637C4.63073 14.688 4.62155 14.4033 4.62155 12.0001C4.62155 9.59694 4.63073 9.31238 4.67403 8.36326C4.71408 7.48577 4.86066 7.00926 4.98391 6.69209C5.12821 6.30116 5.35828 5.94754 5.65723 5.65723C5.94754 5.35832 6.30115 5.12826 6.69206 4.98398C7.00919 4.86073 7.48574 4.71411 8.36323 4.6741C9.31228 4.6308 9.59683 4.62165 12 4.62165Z",fill:"#27292D"})]})},"../../../packages/renderer/shared/ui/src/icons/SocialIcons.component.tsx":(e,s,t)=>{t.d(s,{H:()=>m});var r=t("../../../packages/renderer/shared/ui/src/elements/MagicLink.component.tsx"),o=t("../../../packages/renderer/shared/ui/src/icons/FacebookIcon.component.tsx"),n=t("../../../packages/renderer/shared/ui/src/icons/InstagramIcon.component.tsx"),a=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const c=()=>(0,a.jsx)("svg",{tabIndex:-1,focusable:"false",className:"svg-icon icon-snapchat",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{tabIndex:-1,className:"primary-path",d:"M21.6499 17.1157C18.9334 16.6657 17.7057 13.877 17.6557 13.7604C17.6502 13.7548 17.6502 13.7492 17.6446 13.7381C17.5002 13.4437 17.4668 13.1993 17.5502 13.0048C17.7057 12.6327 18.2834 12.4493 18.6668 12.3327C18.7723 12.2993 18.8723 12.266 18.9556 12.2327C19.6334 11.966 19.9722 11.6383 19.9667 11.255C19.9611 10.955 19.7278 10.6883 19.3556 10.555C19.2334 10.505 19.0834 10.4772 18.939 10.4772C18.839 10.4772 18.6945 10.4884 18.5557 10.555C18.2334 10.705 17.9446 10.7883 17.6946 10.7994C17.5279 10.7939 17.4224 10.7495 17.3613 10.7161C17.3668 10.5772 17.378 10.4384 17.3891 10.2884L17.3946 10.2328C17.4779 8.87181 17.5891 7.18304 17.1446 6.18866C15.8225 3.22776 13.0227 3 12.195 3C12.1783 3 12.1617 3 12.145 3C12.145 3 11.8228 3.00556 11.8006 3.00556C10.9729 3.00556 8.1786 3.23332 6.86203 6.19422C6.41762 7.18859 6.52317 8.87736 6.61205 10.2384C6.62316 10.3995 6.63427 10.5661 6.63982 10.7272C6.57316 10.7661 6.44539 10.8106 6.25096 10.8106C5.98987 10.8106 5.67878 10.7272 5.32881 10.5661C5.23437 10.5217 5.12882 10.4995 5.01216 10.4995C4.60664 10.4995 4.11778 10.7661 4.04001 11.1661C3.98446 11.455 4.11223 11.8771 5.03994 12.2382C5.12327 12.2716 5.22326 12.3049 5.32881 12.3382C5.71211 12.4604 6.28985 12.6438 6.44539 13.0104C6.52872 13.1993 6.49539 13.4493 6.35096 13.7437C6.3454 13.7492 6.3454 13.7548 6.33985 13.7659C6.28985 13.8826 5.06216 16.6768 2.34568 17.1212C2.13459 17.1546 1.9846 17.3434 2.00126 17.5545C2.00682 17.6156 2.01793 17.6823 2.0457 17.7434C2.25125 18.2211 3.1123 18.5711 4.67885 18.8155C4.72885 18.8878 4.7844 19.1377 4.81773 19.2877C4.85106 19.4377 4.88439 19.5933 4.93439 19.7544C4.97883 19.9155 5.1066 20.1099 5.41769 20.1099C5.54546 20.1099 5.69545 20.0821 5.86766 20.0488C6.12875 19.9988 6.48428 19.9266 6.93425 19.9266C7.18423 19.9266 7.43977 19.9488 7.70086 19.9932C8.20638 20.0766 8.63413 20.3821 9.13409 20.7321C9.84515 21.2376 10.6507 21.8042 11.8783 21.8042C11.9117 21.8042 11.945 21.8042 11.9783 21.7987C12.0172 21.7987 12.0672 21.8042 12.1228 21.8042C13.3505 21.8042 14.156 21.232 14.867 20.7321C15.367 20.3821 15.7947 20.0766 16.3003 19.9932C16.5613 19.9488 16.8169 19.9266 17.0669 19.9266C17.4946 19.9266 17.8335 19.9821 18.1335 20.0377C18.3223 20.0766 18.4723 20.0932 18.5834 20.0932H18.5945H18.6056C18.839 20.0932 19.0056 19.971 19.0667 19.7488C19.1112 19.5877 19.1501 19.4377 19.1834 19.2822C19.2167 19.1322 19.2723 18.8822 19.3223 18.81C20.8888 18.5656 21.7499 18.2156 21.9554 17.7434C21.9832 17.6823 21.9943 17.6212 21.9999 17.5545C22.0054 17.3379 21.8554 17.149 21.6499 17.1157Z",fill:"#27292D"})});var i=t("../../../packages/renderer/shared/ui/src/icons/TiktokIcon.component.tsx"),l=t("../../../packages/renderer/shared/ui/src/icons/XIcon.component.tsx"),d=t("../../../packages/renderer/shared/ui/src/icons/YoutubeIcon.component.tsx");const p={facebook:{url:e=>`//www.facebook.com/${e}`,icon:(0,a.jsx)(o.V,{}),name:"facebook"},twitter:{url:e=>`//www.x.com/${e}`,icon:(0,a.jsx)(l.b,{}),name:"X"},instagram:{url:e=>`//www.instagram.com/${e}`,icon:(0,a.jsx)(n.y,{}),name:"instagram"},youtube:{url:e=>`//www.youtube.com/${e}`,icon:(0,a.jsx)(d.L,{}),name:"youtube"},snapchat:{url:e=>`//www.snapchat.com/add/${e}`,icon:(0,a.jsx)(c,{}),name:"snapchat"},tiktok:{url:e=>`//www.tiktok.com/@${e}`,icon:(0,a.jsx)(i.b,{}),name:"tiktok"}},m=e=>(0,a.jsx)("ul",{className:"component-social-icons",children:e.networks.map(((s,t)=>p[s.network]?(0,a.jsx)("li",{className:"icon-container",children:(0,a.jsx)(r.default,{to:p[s.network].url(s.username),"aria-label":`Visit us on ${p[s.network].name}`,target:"_blank",children:e.customIcons?.[s.network]||p[s.network].icon})},t):null))})},"../../../packages/renderer/shared/ui/src/icons/TiktokIcon.component.tsx":(e,s,t)=>{t.d(s,{b:()=>o});var r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const o=()=>(0,r.jsx)("svg",{tabIndex:-1,focusable:"false",className:"svg-icon icon-tiktok",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{className:"primary-path",tabIndex:-1,d:"M20.7501 6.91071C19.5331 6.84196 18.3823 6.33443 17.5108 5.48214C17.0478 5.03475 16.683 4.49596 16.4394 3.9C16.1913 3.30286 16.0697 2.66078 16.0822 2.01428H12.5822V15.0179C12.5822 17.2143 11.2751 18.5107 9.65367 18.5107C9.26383 18.5197 8.87615 18.4504 8.5136 18.3068C8.15104 18.1633 7.82097 17.9484 7.54296 17.675C7.2645 17.4005 7.04247 17.0741 6.88939 16.7143C6.73851 16.3534 6.66081 15.9661 6.66081 15.575C6.66081 15.1838 6.73851 14.7966 6.88939 14.4357C7.04247 14.0759 7.2645 13.7495 7.54296 13.475C7.82097 13.2016 8.15104 12.9867 8.5136 12.8432C8.87615 12.6996 9.26383 12.6303 9.65367 12.6393C9.97636 12.6414 10.2964 12.6981 10.6001 12.8071V9.23571C10.2892 9.169 9.97165 9.13784 9.65367 9.14285C8.38222 9.14285 7.13932 9.51988 6.08215 10.2263C5.02498 10.9326 4.20101 11.9366 3.71445 13.1113C3.22788 14.286 3.10058 15.5786 3.34862 16.8256C3.59667 18.0726 4.20893 19.2181 5.10799 20.1171C6.00704 21.0162 7.1525 21.6284 8.39952 21.8765C9.64654 22.1245 10.9391 21.9972 12.1138 21.5107C13.2884 21.0241 14.2925 20.2001 14.9988 19.1429C15.7052 18.0858 16.0822 16.8429 16.0822 15.5714V8.78571C17.4634 9.70742 19.0897 10.1927 20.7501 10.1786V6.91071Z",fill:"#27292D"})})},"../../../packages/renderer/shared/ui/src/icons/YoutubeIcon.component.tsx":(e,s,t)=>{t.d(s,{L:()=>o});var r=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const o=()=>(0,r.jsx)("svg",{tabIndex:-1,focusable:"false",className:"svg-icon icon-youtube",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{tabIndex:-1,className:"primary-path",fillRule:"evenodd",clipRule:"evenodd",d:"M20.9991 4.48941C21.9843 4.75294 22.761 5.52471 23.0263 6.50353C23.5188 8.29176 23.4999 12.0188 23.4999 12.0188C23.4999 12.0188 23.4999 15.7271 23.0263 17.5153C22.761 18.4941 21.9843 19.2659 20.9991 19.5294C19.1993 20 12 20 12 20C12 20 4.81959 20 3.00081 19.5106C2.01564 19.2471 1.23888 18.4753 0.973639 17.4965C0.5 15.7271 0.5 12 0.5 12C0.5 12 0.5 8.29176 0.973639 6.50353C1.23888 5.52471 2.03459 4.73412 3.00081 4.47059C4.80064 4 12 4 12 4C12 4 19.1993 4 20.9991 4.48941ZM15.6944 12L9.70756 15.4259V8.57412L15.6944 12Z",fill:"#27292D"})})}}]);
//# sourceMappingURL=src_app_core_chrome_AppTray_component_tsx-src_app_core_chrome_HeaderSearch_component_tsx-src_-b801d3.a1317e0f9342bf8c747f.js.map