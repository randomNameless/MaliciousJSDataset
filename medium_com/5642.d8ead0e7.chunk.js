"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[5642],{27732:(e,t,n)=>{n.d(t,{A:()=>a});var r,o=n(96540);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}const a=function(e){return o.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r||(r=o.createElement("path",{fill:"#6B6B6B",fillRule:"evenodd",d:"m3.672 10.167 2.138 2.14h-.002c1.726 1.722 4.337 2.436 5.96.81 1.472-1.45 1.806-3.68.76-5.388l-1.815-3.484c-.353-.524-.849-1.22-1.337-.958-.49.261 0 1.56 0 1.56l.78 1.932L6.43 2.866c-.837-.958-1.467-1.108-1.928-.647-.33.33-.266.856.477 1.598.501.503 1.888 1.957 1.888 1.957.17.174.083.485-.093.655a.56.56 0 0 1-.34.163.43.43 0 0 1-.317-.135s-2.4-2.469-2.803-2.87c-.344-.346-.803-.54-1.194-.15-.408.406-.273 1.065.11 1.447.345.346 2.31 2.297 2.685 2.67l.062.06c.17.175.269.628.093.8-.193.188-.453.33-.678.273a.9.9 0 0 1-.446-.273S2.501 6.84 1.892 6.23c-.407-.406-.899-.333-1.229 0-.525.524.263 1.28 1.73 2.691.384.368.814.781 1.279 1.246m8.472-7.219c.372-.29.95-.28 1.303.244V3.19l1.563 3.006.036.074c.885 1.87.346 4.093-.512 5.159l-.035.044c-.211.264-.344.43-.74.61 1.382-1.855.963-3.478-.248-5.456L11.943 3.88l-.002-.037c-.017-.3-.039-.71.203-.895",clipRule:"evenodd"})))}},7380:(e,t,n)=>{n.d(t,{o:()=>d,p:()=>u});var r=n(64467),o=n(96540),l=n(44402),a=n(78693);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){return{width:"100%","& a":{position:"relative",zIndex:a.Ay.elevatedLink},"& button":{position:"relative",zIndex:a.Ay.elevatedLink}}},u=function(e){var t=e.rules,n=e.children,r=(0,l.l)();return o.createElement("div",{className:r([t,s])},n)},p=function(e){return{"& a":c({position:"static","&::before":{content:'""',position:"absolute",zIndex:a.Ay.expandedLink,top:0,left:0,bottom:0,right:0}},e)}},d=function(e){var t=e.anchorStyles,n=e.children,r=(0,l.l)();return o.createElement("div",{className:r(p(t))},n)}},74015:(e,t,n)=>{n.d(t,{O:()=>v});var r=n(96540),o=n(52290),l=n(36557),a=n(6465),i=n(29977),c=n(23393),s=n(22841),u=n(41299),p=n(5600),d=function(e){var t=e.user,n=e.includeAvatar,l=e.trackingV2,d=(0,r.useCallback)((function(){return r.createElement(s.J,{user:t,trackingV2:l})}),[t,l]);return r.createElement(r.Fragment,null,n&&r.createElement(o.a,{marginRight:"8px"},r.createElement(u.R,{targetDistance:i.f,mouseLeaveDelay:100,mouseEnterDelay:p.A,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:d,display:"block"},r.createElement(c.H8,{scale:"XXXS",user:t,link:!0,showHoverState:!0,skipTab:!0}))),r.createElement(a.t,{user:t,clamp:1,trackingV2:l,includeVerifiedAuthorBadge:!0}))},m=n(18599),f=n(28899),g=n(43002),h=function(e){var t=e.collection,n=e.includeAvatar,a=e.label,i=e.trackingV2,c=(0,r.useCallback)((function(){return r.createElement(m.a,{collection:t,trackingV2:i})}),[t,i]);return r.createElement(r.Fragment,null,n&&r.createElement(o.a,{marginRight:"8px"},r.createElement(u.R,{targetDistance:m.r,mouseLeaveDelay:100,mouseEnterDelay:p.A,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:c,display:"block"},r.createElement(f.u,{size:20,collection:t,link:!0,showHoverState:!0}))),r.createElement(o.a,{paddingRight:"4px"},r.createElement(l.kZ,{scale:"S",color:"LIGHTER"},a)),r.createElement(o.a,null,r.createElement(g.w,{collection:t,clamp:1,trackingV2:i,popoverPlacement:"top",scale:"S"})))},v=function(e){var t=e.post,n=e.showCollectionName,a=void 0===n||n,i=e.marginBottom,c=e.showCollectionBylineOnly,s=e.trackingV2;return!t.creator||c&&!t.collection?null:r.createElement(o.a,{marginBottom:i,display:"flex",alignItems:"center"},a&&t.collection&&r.createElement(r.Fragment,null,r.createElement(h,{collection:t.collection,label:c?"Published in":"In",trackingV2:s,includeAvatar:!0}),!c&&r.createElement(o.a,{padding:"0 4px"},r.createElement(l.kZ,{scale:"S",color:"LIGHTER"},"by"))),!c&&r.createElement(d,{user:t.creator,includeAvatar:!t.collection||!a,trackingV2:s}))}},98237:(e,t,n)=>{n.d(t,{_:()=>f});var r=n(64467),o=n(96540),l=n(67459),a=n(52290),i=n(49287),c=n(44402),s=n(58262),u=n(21771);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.post,n=e.index,r=e.presentationTrackerReferrerSource,p=e.children,m=e.isFullHeight,f=d(d({},(0,i.Fo)()),{},{index:n}),g=(0,l.g)()(t),h=o.useRef(null);(0,s.n)(h,t);var v=t.pinnedAt,E=t.extendedPreviewContent,w=!(null==E||!E.isFullContent),b=(0,c.l)(),x=m?"100%":void 0;return o.createElement(i.Ne,{source:f},o.createElement("article",{className:b({height:x})},o.createElement(a.a,{boxSizing:"content-box",height:x},o.createElement(u.V,{post:t,presentationContext:"POST_PREVIEW",isFullPost:w,suppressedEvents:w?"VIEWED":void 0,shouldReportClientViewed:!1,reportClientViewedOnFullPost:!0,postClientViewedContext:2,pinned:!!v,referrerSource:r},o.createElement(a.a,{ref:h,height:x},p({postUrl:g}))))))}var f=(0,o.memo)(m,(function(e,t){return e.post.id===t.post.id&&e.index===t.index}))},65648:(e,t,n)=>{n.d(t,{u:()=>Y,E:()=>M});var r=n(73916),o=n.n(r),l=n(96540),a=n(52290),i=n(96783),c=n(27721),s=n(85050),u=n(46963),p=n(43849),d=n(34507),m=n(86527),f=n(5600),g=n(44402),h=n(49470),v=function(e){return{"& path":{stroke:e.colorTokens.foreground.neutral.secondary.base},":hover > path":{stroke:e.colorTokens.foreground.neutral.primary.hover}}},E="Show less like this";function w(e){var t=e.postId,n=(0,g.l)(),r=(0,p.$)().animateShowLess,o=(0,d.K)(t,"cache-only").showLess,a=(0,l.useCallback)((function(){o(),null==r||r()}),[o,r]);return l.createElement(f.G,{placement:"top",targetDistance:10,tooltipText:E},l.createElement(m.N,{onClick:a,"aria-label":E,rules:{padding:"12px"}},l.createElement(h.A,{className:n(v)})))}var b=n(36826),x={padding:"12px"};function S(e){var t=e.post,n=e.prependMenuItems,r=e.showSaveIcon,o=e.showSaveInMenu,p=e.showExplicitSignalTooltip,d=e.showNegativeSignalIcon,m=e.trackingV2,f=(0,c.R)().value,g=(0,u.U)();return l.createElement(a.a,{alignItems:"center",display:"flex",justifyContent:"flex-end",flexShrink:"0",flexBasis:"0"},d&&l.createElement(w,{postId:t.id}),l.createElement(s.V,{xs:!r||r.xs,sm:!r||r.sm,md:!r||r.md,lg:!r||r.lg,xl:!r||r.xl},l.createElement(i.T,{post:t,susiEntry:"bookmark_preview",targetDistance:15,rules:x})),f&&l.createElement(a.a,{marginRight:"-12px"},l.createElement(b.G,{post:t,prependMenuItems:n,rules:x,showAddToList:o,showExplicitSignalTooltip:p&&o&&g&&o[g],trackingV2:m})))}var y,k=n(80045),O=n(55127),I=n.n(O),L=n(39204),C=n(73682),P=n(66356),A=n(11517),T=n(86975),R=n(20239),N=n(92679),D=n(27732);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}const V=function(e){return l.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),y||(y=l.createElement("path",{fill:"#6B6B6B",d:"M12.344 11.458A5.28 5.28 0 0 0 14 7.526C14 4.483 11.391 2 8.051 2S2 4.483 2 7.527c0 3.051 2.712 5.526 6.059 5.526a6.6 6.6 0 0 0 1.758-.236q.255.223.554.414c.784.51 1.626.768 2.512.768a.37.37 0 0 0 .355-.214.37.37 0 0 0-.03-.384 4.7 4.7 0 0 1-.857-1.958v.014z"})))};var M,j=n(27715),F=["tooltipText"],_=function(){return{position:"relative",maxWidth:"200px",height:"16px",display:"flex",alignItems:"center"}},G=function(e){return{position:"absolute",opacity:e?1:0,transition:"opacity 300ms ease-out",display:"flex",alignItems:"center",gap:"16px"}},U=function(e){var t=e.label,n=e.icon,r=e.gap,o=void 0===r?"4px":r,i=(0,R.D)();return l.createElement(a.a,{display:"flex",alignItems:"center",gap:o},"BOOST"===n&&l.createElement(N.A,null),"CLAP"===n&&l.createElement(D.A,null),"RESPONSE"===n&&l.createElement(V,{fill:i.colorTokens.foreground.neutral.secondary.base}),l.createElement("span",null,t))},W=function(e){var t=e.tooltipText,n=(0,k.A)(e,F);return l.createElement(f.G,{tooltipText:t,targetDistance:10,display:"flex"},l.createElement(U,n))},z=function(e){var t,n=e.post,r=e.postUrl,o=e.showAllMeta,i=e.includeBoostLabel,c=(0,g.l)(),u=(0,C.R)({post:n}).publishedAt,p=(0,A.N)({post:n,includeFirstBoostedAt:i}),d=p.clapCount,m=p.clapCountLoading,f=p.firstBoostedAt,h=n.isLocked,v=(null===(t=n.postResponses)||void 0===t?void 0:t.count)||0;return l.createElement(a.a,{display:"flex",alignItems:"center",gap:"16px"},h&&l.createElement(L.F,{post:n,hideLabelDesktop:!0,showLabelMobile:!1}),!f&&u&&l.createElement(P.c,{timestamp:u,isShorthand:!0}),l.createElement(s.V,{xs:o.xs,sm:o.sm,md:o.md,lg:o.lg,xl:o.xl},l.createElement("div",{className:c(_)},l.createElement("div",{className:c(G(m))},l.createElement(a.a,{width:"80px",height:"16px",marginLeft:"16px",backgroundColor:"BASE_NORMAL"})),l.createElement(T.D,{href:r,className:c(G(!m)),tabIndex:-1},l.createElement(l.Fragment,null,f?l.createElement(U,{gap:"6px",icon:"BOOST",label:"Boosted"}):l.createElement(l.Fragment,null,!!d&&l.createElement(W,{tooltipText:"".concat((0,j.Ct)(d)," ").concat(I()("clap",d)),icon:"CLAP",label:(0,j.Ct)(d)}),!!v&&l.createElement(W,{tooltipText:"".concat(v," ").concat(I()("responses",v)),icon:"RESPONSE",label:"".concat(v)})))))))},H=n(80296),K=n(66305),J=n(93694);!function(e){e.GRID="GRID",e.STREAM="STREAM"}(M||(M={}));var Y=function(e){var t=e.type,n=e.post,r=e.postUrl,i=e.scales,c=e.prependOverflowMenuItems,s=e.showExplicitSignalTooltip,u=e.showNegativeSignalIcon,p=e.includeBoostLabel,d=e.trackingV2,m=function(){var e=(0,l.useRef)(null),t=(0,l.useState)(0),n=(0,H.A)(t,2),r=n[0],o=n[1],a=(0,l.useState)(0),i=(0,H.A)(a,2),c=i[0],s=i[1],u=function(){o(window.innerWidth)};return(0,l.useEffect)((function(){return u(),K.R5.on("resize",u),function(){return K.R5.off("resize",u)}}),[]),(0,l.useEffect)((function(){var t=e.current;t&&s(t.offsetWidth)}),[r]),{footerRef:e,footerWidth:c}}(),f=m.footerRef,g=m.footerWidth,h=(0,J.Lk)(function(e,t,n){var r=t>=320;return{S:{showSaveIcon:!n&&r&&e===M.GRID,showAllMeta:r&&e===M.GRID},M:{showSaveIcon:!n&&r,showAllMeta:r},L:{showSaveIcon:n?t>=360:r,showAllMeta:r}}}(t,g,u),i),v=o()(h,(function(e){return e.showSaveIcon})),E=o()(h,(function(e){return!e.showSaveIcon})),w=o()(h,(function(e){return e.showAllMeta}));return l.createElement(a.a,{display:"flex",justifyContent:"space-between",flexGrow:"1",height:"48px",ref:f},l.createElement(z,{post:n,postUrl:r,showAllMeta:w,includeBoostLabel:p}),l.createElement(S,{post:n,prependMenuItems:c,showSaveIcon:v,showSaveInMenu:E,showExplicitSignalTooltip:s,showNegativeSignalIcon:u,trackingV2:d}))}},93694:(e,t,n)=>{n.d(t,{Kb:()=>i,Lk:()=>a,y2:()=>l});var r=n(96540),o=n(27049);function l(e){return r.useMemo((function(){return Object.keys(e).reduce((function(t,n){var r=e[n];return t[r]&&t[r].push(n),t}),{S:[],M:[],L:[]})}),[e])}function a(e,t){return{xs:e[t.xs],sm:e[t.sm],md:e[t.md],lg:e[t.lg],xl:e[t.xl]}}function i(e){var t={};for(var n in o.i)t[n]=e;return t}},35642:(e,t,n)=>{n.d(t,{$:()=>ne});var r=n(96540),o=n(73916),l=n.n(o),a=n(52290),i=n(86527),c=n(85050),s=n(39410),u=n(27622),p=n(36557),d=n(49287),m=n(79959),f=n(88726),g=n(20239),h=n(93694),v={S:"12px",M:"20px",L:"20px"};function E(e){var t=e.scales,n=e.dividerColor,o=(0,g.D)(),l=v,a=(0,h.Lk)(l,t);return r.createElement(f.i,{marginTop:a,borderColor:null!=n?n:o.colorTokens.border.neutral.primary.base})}var w,b=n(90280),x=n(90383),S=function(e){return{backgroundColor:e.colorTokens.background.neutral.tertiary.base,borderRadius:"2px"}},y={S:{height:53,width:80},M:{height:53,width:80},L:{height:107,width:160}},k=function(e){var t=e.post,n=e.scales,o=e.webp,l=void 0!==o&&o,a=(0,h.y2)(n),i=t.previewImage,s=t.title,u=null==i?void 0:i.id;if(!u)return null;var p=i.alt||s||"";return r.createElement("div",{"aria-label":p||"Post Preview Image"},Object.keys(a).map((function(e){var t=a[e];return t.length?r.createElement(c.V,{xs:t.includes("xs"),sm:t.includes("sm"),md:t.includes("md"),lg:t.includes("lg"),xl:t.includes("xl"),key:"stream-image-".concat(e)},r.createElement(b.pg,{alt:p,miroId:u,width:y[e].width,height:y[e].height,strategy:x.qY.Crop,focusPercentX:i.focusPercentX,focusPercentY:i.focusPercentY,rules:S,webp:l})):null})))},O=n(7380),I=n(74015),L=n(65648),C=function(e){var t,n,o=e.post,f=e.postUrl,g=e.scales,v=e.showDivider,w=e.showCollectionName,b=e.dividerColor,x=e.prependOverflowMenuItems,S=e.webp,C=void 0!==S&&S,P=e.children,A=e.showExplicitSignalTooltip,T=e.showNegativeSignalIcon,R=e.includeBoostLabel,N=e.showCollectionBylineOnly,D=e.trackingV2,B=o.title,V=null==o||null===(t=o.extendedPreviewContent)||void 0===t?void 0:t.subtitle,M=null===(n=o.previewImage)||void 0===n?void 0:n.id,j=(0,d.jI)(),F=(0,h.Lk)({S:{footerLocation:"content",showSubtitle:!1,bylineSpacing:"12px",titleScale:"XS",titleClamp:4,imageMarginLeft:"24px",footerSpacing:"0",footerWidth:"100%"},M:{footerLocation:"bottom",showSubtitle:!0,bylineSpacing:"16px",titleScale:"S",titleClamp:4,imageMarginLeft:"24px",footerSpacing:"2px",footerWidth:"100%"},L:{footerLocation:"content",showSubtitle:!0,bylineSpacing:"16px",titleScale:"M",titleClamp:3,imageMarginLeft:"56px",footerSpacing:"10px",footerWidth:M?"100%":"calc(100% - (".concat(y.L.width,"px + 56px))")}},g),_=l()(F,(function(e){return e.bylineSpacing})),G=l()(F,(function(e){return e.footerSpacing})),U=l()(F,(function(e){return e.titleScale})),W=l()(F,(function(e){return e.titleClamp})),z=l()(F,(function(e){return e.imageMarginLeft})),H=l()(F,(function(e){return e.footerWidth}));return r.createElement(a.a,{width:"100%"},r.createElement("div",{style:{position:"relative",display:"flex"},role:"link","data-href":f,tabIndex:0,onKeyDown:function(e){e&&"Enter"===e.key&&window.location.assign((0,m.ST)(f,{source:j}))}},r.createElement(O.p,null,r.createElement(r.Fragment,null,r.createElement(a.a,{display:"flex"},r.createElement(I.O,{post:o,marginBottom:_,showCollectionName:w,showCollectionBylineOnly:N,trackingV2:D})),r.createElement(a.a,{display:"flex"},r.createElement(a.a,{flexGrow:"1",flexShrink:"1",wordBreak:"break-word"},r.createElement(O.o,{anchorStyles:{display:"flex",flexDirection:"column"}},r.createElement(i.N,{href:f},B&&r.createElement(s.hE,{scale:U,clamp:W},B),V&&r.createElement(c.V,{xs:F.xs.showSubtitle,sm:F.sm.showSubtitle,md:F.md.showSubtitle,lg:F.lg.showSubtitle,xl:F.xl.showSubtitle,paddingTop:"8px"},r.createElement(u.Pd,{scale:"S",clamp:2},V)))),r.createElement(c.V,{xs:"content"===F.xs.footerLocation,sm:"content"===F.sm.footerLocation,md:"content"===F.md.footerLocation,lg:"content"===F.lg.footerLocation,xl:"content"===F.xl.footerLocation},r.createElement(a.a,{paddingTop:G,width:H},r.createElement(p.kZ,{scale:"S",tag:"span"},r.createElement(L.u,{type:L.E.STREAM,post:o,postUrl:f,scales:g,prependOverflowMenuItems:x,showExplicitSignalTooltip:A,showNegativeSignalIcon:T,includeBoostLabel:R,trackingV2:D}))))),!!M&&r.createElement(a.a,{marginLeft:z},r.createElement(k,{post:o,scales:g,webp:C}))),r.createElement(c.V,{xs:"bottom"===F.xs.footerLocation,sm:"bottom"===F.sm.footerLocation,md:"bottom"===F.md.footerLocation,lg:"bottom"===F.lg.footerLocation,xl:"bottom"===F.xl.footerLocation,paddingTop:"12px"},r.createElement(p.kZ,{scale:"S",tag:"span"},r.createElement(L.u,{type:L.E.STREAM,post:o,postUrl:f,scales:g,prependOverflowMenuItems:x,showExplicitSignalTooltip:A,showNegativeSignalIcon:T,includeBoostLabel:R,trackingV2:D})))))),P,v&&r.createElement(E,{scales:g,dividerColor:b}))},P=n(98237),A=n(64122),T=n(29977),R=n(22841),N=n(41299),D=n(5600),B=n(39),V=n(44402),M=n(42976),j=n(39160),F=n(27732);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(null,arguments)}const G=function(e){return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),w||(w=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"m8.965 10.85 4.27-7.7L9.356 1l-4.27 7.701zm-.405.726-1.077 1.945-1.027.443L5.88 15l-3.114-.71 1.007-1.815-.165-1.108 1.078-1.944 3.873 2.146z",clipRule:"evenodd"})))};var U;function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(null,arguments)}const z=function(e){return r.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),U||(U=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.788 1.027a.5.5 0 1 0-.707.707l.59.589-3.32 3.319a2.17 2.17 0 0 1-1.346.626l-2.442.21a.833.833 0 0 0-.518 1.42l2.676 2.675-3.418 3.417a.5.5 0 1 0 .707.707l3.418-3.417 2.675 2.675a.833.833 0 0 0 1.42-.518l.209-2.441c.044-.51.266-.986.627-1.347l3.318-3.32.59.59a.5.5 0 0 0 .707-.707l-.943-.943-3.3-3.3zm-3.653 9.546 2.422 2.422.179-2.085c.063-.743.388-1.44.916-1.968l3.318-3.32-2.593-2.592L7.06 6.349a3.17 3.17 0 0 1-1.969.916l-2.084.178 2.422 2.422z",clipRule:"evenodd"})))};var H=n(46083),K=n(46879);function J(e){var t=e.reason;switch(t.reason){case M.dJ.CLAPPED_BY_NETWORK:return r.createElement(Z,{users:t.interactedUsers,reason:t.reason,interaction:"clapped"});case M.dJ.HIGHLIGHTED_BY_NETWORK:return r.createElement(Z,{users:t.interactedUsers,reason:t.reason,interaction:"highlighted"});case M.dJ.CURATED_IN_TAG:if(t.tagObject)return r.createElement($,{reason:t.reason},r.createElement(a.a,{flexShrink:"0"},"Because you follow "),r.createElement(ee,{tag:t.tagObject}))}return null}var Y=function(){return r.createElement($,{reason:"PINNED"},"Pinned")};function $(e){var t=e.reason,n=e.children,o=(0,V.l)(),l=(0,B.Z)({name:"detail",scale:"S",color:"LIGHTER"});return r.createElement(r.Fragment,null,r.createElement(a.a,{marginLeft:"2px",display:"flex",gap:"10px",alignItems:"center",marginBottom:"PINNED"===t?"20px":void 0},r.createElement(X,{reason:t}),r.createElement("div",{className:o([l,{display:"flex",whiteSpace:"pre-wrap",overflow:"hidden"}])},n)),"PINNED"!==t&&r.createElement(a.a,{margin:"12px 0",width:"20px",display:"flex",justifyContent:"center"},r.createElement(a.a,{borderLeft:"neutral.tertiary",height:"12px"})))}var q=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base,flex:"0 0 auto"}};function X(e){var t=e.reason,n=(0,V.l)();switch(t){case M.dJ.CLAPPED_BY_NETWORK:return r.createElement(F.A,{className:n(q)});case M.dJ.HIGHLIGHTED_BY_NETWORK:return r.createElement(G,{className:n(q)});case M.dJ.CURATED_IN_TAG:return r.createElement(H.A,{className:n(q)});case"PINNED":return r.createElement(z,{className:n(q)})}return null}function Z(e){var t=e.users,n=e.reason,o=e.interaction;return null!=t&&t.length&&t[0]?r.createElement($,{reason:n},r.createElement(Q,{user:t[0]}),r.createElement(a.a,{flexShrink:"0"}," ".concat(o))):null}function Q(e){var t=e.user,n=(0,A.f)(t),o=(0,r.useCallback)((function(){return r.createElement(R.J,{user:t})}),[t]);return r.createElement(N.R,{targetDistance:T.f,mouseLeaveDelay:100,mouseEnterDelay:D.A,placement:"top",role:"tooltip",display:"block",hoverableRules:{overflow:"hidden"},noArrow:!0,popoverRenderFn:o},r.createElement(te,{href:n},t.name))}function ee(e){var t=e.tag,n=(0,j.d4)((function(e){return e.config.authDomain})),o=(0,K.Lsb)(t.normalizedTagSlug||"",n);return r.createElement(te,{href:o},t.displayTitle)}function te(e){var t=e.href,n=e.children;return r.createElement(i.N,{display:"block",href:t,color:"NORMAL",linkStyle:"SUBTLE",inline:!0,rules:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}},n)}function ne(e){var t=e.post,n=e.index,o=e.presentationTrackerReferrerSource,l=e.scale,a=e.lastIndex,i=e.showCollectionName,c=e.dividerColor,s=e.prependOverflowMenuItems,u=e.webp,p=e.reason,d=e.children,m=e.showExplicitSignalTooltip,f=e.showPinned,g=e.showNegativeSignalIcon,v=e.includeBoostLabel,E=e.showCollectionBylineOnly,w=e.trackingV2,b="string"==typeof l?(0,h.Kb)(l):l;return r.createElement(P._,{post:t,index:n,presentationTrackerReferrerSource:o},(function(e){var o=e.postUrl;return r.createElement(r.Fragment,null,f?r.createElement(Y,null):p?r.createElement(J,{reason:p}):null,r.createElement(C,{post:t,postUrl:o,scales:b,showDivider:n!==a,showCollectionName:i,dividerColor:c,prependOverflowMenuItems:s,webp:u,showExplicitSignalTooltip:m,showNegativeSignalIcon:g,includeBoostLabel:v,showCollectionBylineOnly:E,trackingV2:w},d))}))}},73682:(e,t,n)=>{n.d(t,{R:()=>r});var r=function(e){var t=e.post,n=t.firstPublishedAt,r=t.latestPublishedAt,o=!!t.pinnedAt&&!!r;return{isUpdatedPost:o,publishedAt:o?r:n}}},21771:(e,t,n)=>{n.d(t,{V:()=>u});var r=n(96540),o=function(e){switch(e){case"PUBLIC":return 0;case"UNLISTED":return 1;case"LOCKED":return 2;default:return}},l=n(72130),a=n(49287),i=n(44402),c=n(79429),s={width:"100%",height:"100%"};function u(e){var t=e.post,n=e.presentationContext,u=e.suppressedEvents,p=e.children,d=e.isFullPost,m=e.reportClientViewedOnFullPost,f=e.postClientViewedContext,g=e.pinned,h=e.shouldReportClientViewed,v=void 0===h||h,E=e.referrerSource,w=(0,i.l)(),b=(0,l.$L)(),x=(0,a.jI)(),S=r.useCallback((function(){if(t&&"ALL"!==u){var e=t.visibility,r=t.collection,l=E?{referrerSource:E}:void 0;"PRESENTED"!==u&&b.event("post.clientPresented",{postId:t.id,source:x,collectionId:r?r.id:null,isFullPost:d,pinned:g,postVisibility:o(e),context:"POST_PREVIEW"!==n?n.toLowerCase():null},l),m&&d&&"VIEWED"!==u&&v&&b.event("post.clientViewed",{postId:t.id,source:x,collectionId:r?r.id:null,collectionSlug:r?r.slug:null,context:f,isFriendLink:!1,pinned:g})}}),[t,u,n,g,E,x]),y=(0,c.s)({onPresentedFn:S});return r.createElement("div",{className:w(s),ref:y},p)}},58262:(e,t,n)=>{n.d(t,{n:()=>p});var r=n(7350),o=n.n(r),l=n(96540),a=n(72130),i=n(49287),c=n(66305),s=n(74169),u=1e3;function p(e,t,n){var r=(0,a.$L)(),p=(0,i.W9)(),d=Date.now(),m=null,f=l.useCallback(o()((function(){if(e.current){var n=(0,s.G9)(e.current);if((0,s.zN)(n)){var o=Date.now(),l=(0,s.$5)(n),a=(0,s.bb)(),i=(0,s.$S)(),c=Math.round(l.top),u=Math.round(l.top+l.height),f=a.top,g=a.top+i.height,h=a.height,v={postIds:[t.id],collectionIds:[t.collection?t.collection.id:""],sequenceIds:[t.sequence?t.sequence.sequenceId:""],sources:[p],tops:[c],bottoms:[u],areFullPosts:[!0],loggedAt:o,timeDiff:null!==m?Math.round(o-m):0,scrollTop:f,scrollBottom:g,scrollableHeight:h,viewStartedAt:d};r.event("post.streamScrolled",v),m=o}}}),u),[t]);l.useEffect((function(){f();var e=null!=n&&n.current?(0,c.$U)(null==n?void 0:n.current):c.R5;return e.on("scroll_end",f),function(){e.off("scroll_end",f)}}),[f])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5642.d8ead0e7.chunk.js.map