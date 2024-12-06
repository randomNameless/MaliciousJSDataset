/*! For license information please see 7915.js.LICENSE.txt */
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7915],{7013:(e,r,t)=>{t.d(r,{A:()=>d});var n=t(6540),s=t(2896),o=t(6599),a=t(3597),i=t(9528);function l(e){const r=(0,s.d4)(o.Vu),{url:t,additionalParams:l,additionalRel:d,label:c,showLabel:u,tooltip:p,additionalClassNames:g,id:h,testId:m,image:b,icon:f,imageComponent:y,reporting:S,suppressGAReporting:k,suppressFastlyReporting:L,outletName:v,type:x,children:C,openInNewTab:_,onClick:H,style:E,labelStyle:I,displayTooltip:R}=e,{sameTabLaunch:w}=r,F=(0,i.A)(t,r,l),N=w?!w:_;return n.createElement(a.A,{label:c,showLabel:u,tooltip:p,additionalClassNames:g,additionalRel:d,id:h,testId:m,image:b,icon:f,imageComponent:y,reporting:S,suppressGAReporting:k,suppressFastlyReporting:L,outletName:v,type:x,url:F,openInNewTab:N,onClick:H,style:E,labelStyle:I,displayTooltip:R},C)}l.defaultProps={additionalParams:{},openInNewTab:!1,onClick:()=>{}};const d=l},9725:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o,ui:()=>n.A,urlHelper:()=>s.A,urlHelperGeneric:()=>s.l});var n=t(7013),s=t(9528);const o=n.A},9528:(e,r,t)=>{t.d(r,{A:()=>l,l:()=>i});const n={o:"ocode",an:"trafficSource",ag:"partnerFWCode",ad:"acquisitionDivision",rtb:"bingTracingTag",country_old:"countryOld",subscriber_uid_old:"subscriberUidOld",id_site_old:"idSiteOld",push_content:"pushContent",category:"pushCategory",click_id:"clickId",event_name:"eventName",revenue_here:"revenueHere",currency_here:"currencyHere",order_id_here:"orderIdHere",inlcx_subid:"inlcxSubid",inlcx_source:"inlcxSource"},s=["ueid","akid","o","an","ag","fbclid","gclid","ttclid","msclkid","agid","cid","rch","rty","rtb","lang","ad","tt","debug","pexp","ppixel","pcid","pcoid","apubid","country_old","subscriber_uid_old","id_site_old","category","push_content","p2","ctype","geo","doi","cmpgn","browser","prod","installSource","track","darkMode","sameTabLaunch","orderBy","duration","time","quality","platform","campaignId","adsetid","adid","click_id","event_name","revenue_here","currency_here","order_id_here","trkid","smid","tbclid","obclid","inlcx_subid","inlcx_source","pcp1","annot","tstId","varId","capLimitBypass"];function o(e){const r={};for(const t of Object.keys(e)){let n=e[t];n&&"object"==typeof n&&(n=o(n),n=new URLSearchParams(n)),r[t]=n}return r}function a(e,r,t){try{const n=r?new URL(e,r):new URL(e),s=new URLSearchParams(n.search);for(const[e,r]of Object.entries(t))s.append(e,r);return n.search=s.toString(),n.toString()}catch(r){return console.error(`Error parsing URL: ${r}`),e}}const i=(e,r,t)=>{const n=o(t);return a(e,r,Object.fromEntries(Object.entries(n).filter((([,e])=>!!e))))},l=function(e,r,t={}){const{baseUrl:i}=r,l=function(e,r){if(void 0!==r&&"videos"!==r){const{time:r,orderBy:t,quality:n,duration:s,...o}=e;return o}return e}(function(e){const r={};for(const t of s){const s=n[t]?n[t]:t;void 0!==e[s]&&null!==e[s]&&(r[t]=e[s])}return r}(r),t.ctype),d=o(t);return a(e,i,Object.fromEntries(Object.entries({...l,...d}).filter((([e,r])=>![null,void 0,""].includes(r)))))}},4743:(e,r,t)=>{t.r(r),t.d(r,{default:()=>S,ui:()=>y});var n=t(1773),s=t(6540),o=t(2896),a=t(6942),i=t.n(a),l=t(9725),d=t(6599),c=t(9681),u=t(2327),p=t(250),g=t(4709),h=t(1016),m=t(5847);function b(e,r,t,n,o,a,i,d,p={}){const{url:g,label:h}=e,m=(0,u.ug)(c.B.RELATED_SEARCH,e);return s.createElement(l.default,{style:o,labelStyle:p,url:g,label:h,key:h,testId:"related-search",reporting:m,imageComponent:t?s.createElement(n,{style:a,fill:i}):null,suppressFastlyReporting:r,openInNewTab:d})}function f(e){const r=(0,o.wA)(),t=(0,o.d4)(d.Vu),{query:n,deviceType:a,darkMode:l,layout:u}=t,{backgroundColor:y}=u?.props||{},S=(0,s.useContext)(h.gJ),{variant:k,headingLabel:L,singleColumn:v,rsPadding:x,rsMargin:C,rsHeaderCasing:_,rsHeaderFontSize:H,rsHeaderPadding:E,rsHeaderColor:I,rsLinkRightIcon:R,rsLinkRenderIcon:w,rsLinkIconName:F,rsLinkCasing:N,rsLinkLabelColor:B,rsLinkPadding:A,rsLinkTextDecoration:P,rsLinkGap:T,rsLinkHeight:D,rsLinkFontSize:O,rsLinkIconMargin:M,suppressFastlyReporting:U,rsMaginifierColor:z,rsBorderRadius:j,display:q,showQueryInHeading:V,isCarousel:W,rsHeaderColorDarkMode:G,rsLinkLabelColorDarkMode:K,rsLinkBorder:Q,rsLinkBorderBottom:$,rsBorder:J,rsHeadingBorder:X,showMixedBolding:Y,openInNewTab:Z=!1}=(0,g.kc)(a,e,f.desktopProps,f.mobileProps),{results:ee={}}=(0,o.d4)(p.selectRelatedSearches),re=(0,o.d4)(p.selectIsVisible);let te=ee[k]||[];const ne=(0,m.O)(F),se=i()({"related-search":!0,carousel:W,hidden:!re}),oe=["sub-header"],ae=["related-search-links"];let ie=0;if(!q)return null;_&&oe.push(_),R&&ae.push("right-icon"),te=te.map((e=>(ie+=1,{...e,ordinal:ie,zone:k})));const le={padding:A,textDecoration:P,gap:T,height:D,border:Q,borderBottom:$,textDecorationColor:B,fontSize:O},de={margin:M},ce={color:l?K:B};let ue;Y&&(ce.fontWeight="unset"),N&&ae.push(N);let pe=[];if(v)ue=te.map((e=>b(e,U,w,ne,le,de,z,Z,ce)));else{const e=[[],[]];for(const[r,t]of te.entries())e[1&r].push(b(t,U,w,ne,le,de,z,Z,ce));ue=e[0],pe=e[1]}(0,s.useEffect)((()=>{const e={zone:k,query:n,results:te};r({type:c.B.RELATED_SEARCH,payload:e})}),[]);const ge=(0,s.useRef)(null),he=(0,s.useRef)(null),me=(0,m.O)("carousel-next"),be=(0,m.O)("carousel-prev"),[fe,ye]=(0,s.useState)(!1),[Se,ke]=(0,s.useState)(!0);let Le;return W&&((0,s.useEffect)((()=>{const e=ge.current;if(e){const r=()=>{const r=e.offsetWidth,{scrollWidth:t}=e,{scrollLeft:n}=e;ke(!(t-r<=n+1)),ye(0!==n)};return e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}return()=>{}}),[]),Le=e=>{const r=ge.current,t=he.current;let n=r.scrollLeft,s=0;t.length&&(s=t[0].clientWidth);const o=r.clientWidth-s;"prev"===e?n-=o:"next"===e&&(n+=o),r.scroll({top:0,left:n,behavior:"smooth"})}),te?.length>0?s.createElement("div",{className:se,style:{padding:x,margin:C,borderRadius:j,backgroundColor:y,border:J},"data-testid":"related-search-block"},s.createElement("header",{className:i()(...oe),style:{textTransform:_,fontSize:H,padding:E,color:l?G:I,border:X},"data-testid":"related-search-header"},L||S("Related search"),V&&s.createElement("span",{className:"sub-header-query"},n)),s.createElement("div",{ref:ge,className:i()(...ae)},s.createElement("div",{ref:he,className:v?"single-column":"column"},ue,v&&pe),W&&Se&&s.createElement("div",{role:"button",tabIndex:"-1",onClick:()=>Le("next"),onKeyDown:e=>{"ArrowRight"===e.key&&Le("next")},className:"rs-carousel-button right",id:"rs-carousel-button-right","aria-label":"next"},s.createElement(me,{arrowFill:"#757575"})),W&&fe&&s.createElement("div",{role:"button",tabIndex:"0",onClick:()=>Le("prev"),onKeyDown:e=>{"ArrowLeft"===e.key&&Le("prev")},className:"rs-carousel-button left",id:"rs-carousel-button-left","aria-label":"prev"},s.createElement(be,{arrowFill:"#757575"})),v?null:s.createElement("div",{className:pe&&!v?"column":"single-column"},pe))):null}f.defaultProps={variant:"top",headingLabel:void 0,singleColumn:!1,rsPadding:"0px",rsMargin:null,rsHeaderCasing:null,rsHeaderFontSize:null,rsHeaderPadding:null,rsHeaderColor:"#666666",rsLinkRightIcon:!1,rsLinkRenderIcon:!0,rsLinkIconName:"search",rsLinkCasing:"",rsLinkLabelColor:null,rsLinkPadding:null,rsLinkTextDecoration:null,rsLinkGap:null,rsLinkHeight:null,rsLinkFontSize:null,rsLinkIconMargin:null,rsMaginifierColor:null,rsBorderRadius:null,suppressFastlyReporting:!1,display:!0,showQueryInHeading:!1,isCarousel:!1,rsHeaderColorDarkMode:"#BDC1C6",rsLinkBorder:"",rsLinkBorderBottom:"",rsBorder:"",rsHeadingBorder:""},f.desktopProps={rsHeaderPadding:"0px",rsHeaderFontSize:"14px"},f.mobileProps={rsHeaderPadding:"10px 0 10px 10px",rsHeaderFontSize:"11px"},f.displayName="RelatedSearch";const y=f,S=(0,n.t)({ui:y})},5847:(e,r,t)=>{t.d(r,{O:()=>s});var n=t(7329);const s=e=>{switch(e){case"search":default:return n.p8;case"chevron":return n.IS;case"carousel-next":return n.Cc;case"carousel-prev":return n.UH;case"magnifier":return n.bO}}},7915:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h,ui:()=>g});var n=t(1773),s=t(6540),o=t(4743),a=t(6942),i=t.n(a),l=t(9725),d=t(4709);function c(e){const{serpUrl:r,inputValue:t,suggestion:n,highlight:o,suggestionIndex:a,handleHoverItem:c,showSSForFixedHeader:u,searchSuggestionStyle:p,deviceType:g}=e,h=["search-suggestion"];o&&h.push("highlight"),u&&h.push("fixedHeader-ss-li");const m=()=>{c(a)},b=t.toLowerCase(),f=n.replace(b,`<span class='no-highlight'>${t}</span>`),y={qo:"searchSuggestions",q:(0,d.oF)(n)},S=o?{}:p;return function(e){const t="desktop"===e?{onMouseEnter:m}:{};return s.createElement("li",Object.assign({},t,{className:i()(...h),"data-testid":"search-suggestion-link"}),s.createElement(l.default,{url:r,label:f,additionalParams:y,labelStyle:S}))}(g)}c.defaultProps={showSSForFixedHeader:!1,searchSuggestionStyle:{}};const u=c;function p(e){const{inputValue:r,serpUrl:t,suggestions:n,selectedSearchSuggestonIndex:a,handleHoverItem:l,displayRelatedSearchSuggestions:d,displaySuggestions:c,searchBoxShadowInScroll:p,showSSForFixedHeader:g,searchSuggestionStyle:h,deviceType:m}=e,b=["search-suggestions"];return c?(d&&b.push("related-search-suggestions"),g&&(p?b.push("default-search-suggestions"):b.push("fixed-header-search-suggestions")),s.createElement("div",null,s.createElement("ul",{className:i()(...b),"data-testid":"search-suggestions",style:h},d?s.createElement(o.default,{variant:"searchBox",singleColumn:!0,suppressFastlyReporting:!0}):n.map(((e,n)=>s.createElement(u,{key:e,serpUrl:t,inputValue:r,suggestion:e,highlight:a===n&&!g,suggestionIndex:n,handleHoverItem:l,showSSForFixedHeader:g,searchSuggestionStyle:{color:h.color},deviceType:m})))))):null}p.defaultProps={searchBoxShadowInScroll:!1,showSSForFixedHeader:!1,searchSuggestionStyle:{},deviceType:""},p.displayName="SearchSuggestions";const g=p,h=(0,n.t)({ui:g})}}]);