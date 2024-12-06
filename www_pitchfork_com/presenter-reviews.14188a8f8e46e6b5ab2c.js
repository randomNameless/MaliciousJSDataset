(()=>{var e,t,o,r={69389:(e,t,o)=>{const{asConfiguredComponent:r}=o(12892),{asThemedComponent:a}=o(20223),n=o(39416);e.exports=a(r(n,"ContentHeader"))},6123:(e,t,o)=>{const r=o(5556),a=o(96540),{useIntl:n}=o(37243),{asConfiguredComponent:i}=o(12892),{trackComponent:s}=o(92716),{interactionResponse:d}=o(56187),{ProsConsBlockHeader:l,ProsConsConsBlock:c,ProsConsProsBlock:p,ProsConsBlockContent:u,ProsConsWrapper:m}=o(3884),g=o(92454).A,h=({className:e,cons:t,consLabel:o,pros:r,prosLabel:i})=>{a.useEffect((()=>{(async()=>{await d(),s("ProsCons")})()}),[]);const{formatMessage:h}=n();function y(e=""){return{__html:e}}return a.createElement(m,{"data-testid":"pros-cons",className:e},a.createElement(p,{"data-testid":"pros-block"},a.createElement(l,{"data-testid":"pros-header"},i||h(g.prosLabel)),a.createElement(u,{"data-testid":"pros-content",dangerouslySetInnerHTML:y(r)})),a.createElement(c,{"data-testid":"cons-block"},a.createElement(l,{"data-testid":"cons-header"},o||h(g.consLabel)),a.createElement(u,{"data-testid":"cons-content",dangerouslySetInnerHTML:y(t)})))};h.propTypes={className:r.string,cons:r.string.isRequired,consLabel:r.string,pros:r.string.isRequired,prosLabel:r.string},h.displayName="ProsCons",e.exports=i(h,"ProsCons")},39899:(e,t,o)=>{e.exports=o(6123)},3884:(e,t,o)=>{const r=o(75999).default,{getTypographyStyles:a,getColorStyles:n}=o(26865),{BREAKPOINTS:i}=o(96472),s="1.5rem",d="1rem",l=r.div.withConfig({displayName:"ProsConsWrapper"})`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-width: 1px 0;
  border-style: solid;
  ${({theme:e})=>n(e,"border-color","colors.consumption.body.standard.divider")};
  padding-top: ${s};
  padding-bottom: ${s};
  @media (min-width: ${i.md}) {
    flex-direction: row;
  }
`;l.displayName="ProsConsWrapper";const c=r.div.withConfig({displayName:"ProsConsBlock"})`
  flex: 100%;
  background-color: inherit;
  padding: 0 ${d};

  ul,
  ol {
    margin: 0;
    padding-left: ${d};

    li {
      margin-bottom: ${d};
    }
  }
  @media (min-width: ${i.md}) {
    flex: 50%;
    padding: 0;
  }
`;c.displayName="ProsConsBlock";const p=r(c).withConfig({displayName:"ProsConsProsBlock"})`
  margin-bottom: ${s};
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>n(e,"border-color","colors.consumption.body.standard.divider")};
  padding-bottom: ${d};
  @media (min-width: ${i.md}) {
    margin-bottom: 0;
    border-bottom: none;
    padding-right: calc(${s} / 2);
    padding-bottom: 0;
  }
`;p.displayName="ProsConsProsBlock";const u=r(c).withConfig({displayName:"ProsConsConsBlock"})`
  @media (min-width: ${i.md}) {
    flex: 50%;
    padding-left: calc(${s} / 2);
  }
`;u.displayName="ProsConsConsBlock";const m=r.div.withConfig({displayName:"ProsConsBlockHeader"})`
  ${({theme:e})=>a(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  ${({theme:e})=>n(e,"color","colors.consumption.body.standard.subhed")};
  padding-bottom: ${d};
  @media (min-width: ${i.md}) {
    padding: 0 0 ${s} 0;
  }
`;m.displayName="ProsConsBlockHeader";const g=r.div.withConfig({displayName:"ProsConsBlockContent"})`
  ${e=>a(e.theme,"typography.definitions.discovery.hed-bulletin-primary")}
  ${({theme:e})=>n(e,"color","colors.consumption.body.standard.body")};
`;g.displayName="ProsConsBlockContent",e.exports={ProsConsBlockHeader:m,ProsConsBlock:c,ProsConsBlockContent:g,ProsConsConsBlock:u,ProsConsProsBlock:p,ProsConsWrapper:l}},92454:(e,t,o)=>{const r=o(37243);t.A=(0,r.defineMessages)({consLabel:{id:"ProsCons.ConsLabel",defaultMessage:"Cons →",description:"Label for cons",isConfigurable:!0},prosLabel:{id:"ProsCons.ProsLabel",defaultMessage:"Pros →",description:"Label for pros",isConfigurable:!0}})},86491:(e,t,o)=>{const r=o(5556),a=o(96540),{useIntl:n}=o(37243),{asConfiguredComponent:i}=o(12892),{trackComponent:s}=o(92716),{interactionResponse:d}=o(56187),{ReviewSummaryWrapper:l,ReviewSummaryTitle:c,ReviewSummaryBody:p}=o(10741),u=o(82807).A,m=({className:e,summary:t,summaryLabel:o})=>{a.useEffect((()=>{(async()=>{await d(),s("ReviewSummary")})()}),[]);const{formatMessage:r}=n();return a.createElement(l,{className:e},a.createElement(c,null,o||r(u.summaryLabel)),a.createElement(p,{dangerouslySetInnerHTML:{__html:t}}))};m.propTypes={className:r.string,summary:r.string.isRequired,summaryLabel:r.string},m.displayName="ReviewSummary",e.exports=i(m,"ReviewSummary")},30987:(e,t,o)=>{e.exports=o(86491)},10741:(e,t,o)=>{const r=o(75999).default,{BaseText:a}=o(76955),{calculateSpacing:n,getColorStyles:i}=o(26865),s=r.div.withConfig({displayName:"ReviewSummaryWrapper"})`
  border-width: 1px 0;
  border-style: solid;
  ${({theme:e})=>i(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${n(4,"px")} 0;
`,d=r(a).withConfig({displayName:"ReviewSummaryTitle"})`
  margin-bottom: ${n(4,"px")};
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const l=r(a).withConfig({displayName:"ReviewSummaryBody"})``;l.defaultProps={as:"div",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},e.exports={ReviewSummaryWrapper:s,ReviewSummaryTitle:d,ReviewSummaryBody:l}},82807:(e,t,o)=>{const r=o(37243);t.A=(0,r.defineMessages)({summaryLabel:{id:"ReviewSummary.SummaryLabel",defaultMessage:"TL;DR:",description:"Title for review summary",isConfigurable:!0}})},25041:function(e,t,o){const r=o(5556),a=o(96540),n=o(38221),i=o(32485),{useIntl:s}=o(37243),{googleAnalytics:d}=o(90090),l=o(18059),c=o(73275),p=o(14170).A,{trackComponent:u}=o(92716),{interactionResponse:m}=o(56187),{handleAffiliateLinkClick:g}=o(14307),{ProductCardDescription:h,ProductCardImageBlock:y,ProductCardTextBlock:f,ProductCardName:b,ProductCardRating:C,ProductCardWrapper:w}=o(22760),{formatGtmData:P,productImpressionTracking:R}=o(60162),v=({className:e,ctaText:t,hideEmptyRating:o=!1,hasShadow:r=!1,hasTopLine:v,name:E,productId:B,offers:k,productImage:S,rating:N=0,actionIdFlags:x={}})=>{a.useEffect((()=>{(async()=>{await m(),u("ProductCard")})()}),[]);const T=x?.enableActionIdForProductCard,{formatMessage:I}=s(),A="product-card-right-rail",$={brand:{name:E},id:B,contentType:"review",offers:k,rating:N,placement:A};return a.useEffect((()=>{window.addEventListener("load",(()=>R("ProductEmbed",document.getElementsByClassName("product-embed")))),window.addEventListener("scroll",n((()=>{R("ProductEmbed",document.getElementsByClassName("product-embed"))}),1e3))}),[]),a.createElement(w,{"data-testid":"ProductCardWrapper",hasShadow:r,hasTopLine:v,className:i("product-embed",e),"data-item":JSON.stringify($)},a.createElement(h,null,S&&a.createElement(y,{"data-testid":"ProductCardImageBlock"},a.createElement(c,{...S,altText:E,onAssetLoaded:this.setImageOrientation})),a.createElement(f,null,a.createElement(b,{"data-testid":"ProductCardName",dangerouslySetInnerHTML:{__html:E}}),!(N<=0&&o)&&N&&a.createElement(C,{"data-testid":"ProductCardRating"},I(p.cardRating,{rating:N})))),k&&a.createElement(l,{dataAttrs:{"data-component-position":A},defaultCTAText:t,offers:k,onClickHandler:(e,t,o,r,a)=>{d.emitGoogleTrackingEvent("buy-button-click",{componentPosition:A}),((e,t,o)=>{P({window,product:{...$},index:e,actionId:o,layout:"ProductEmbed",event:t})})(t,r,a),g(r,{label:e,position:t,link:o,component:"affiliate_button_link",actionId:a})},showCount:4,showPriceOnButton:!0,isActionIdEnabledForComponent:T}))};v.propTypes={actionIdFlags:r.object,className:r.string,ctaText:r.string,hasShadow:r.bool,hasTopLine:r.bool,hideEmptyRating:r.bool,name:r.string,offers:r.array.isRequired,productId:r.string,productImage:r.object,rating:r.number},v.displayName="ProductCard",e.exports=v},84492:(e,t,o)=>{const{asConfiguredComponent:r}=o(12892),a=o(25041);e.exports=r(a,"ProductCard")},22760:(e,t,o)=>{const r=o(75999).default,{calculateSpacing:a,getColorStyles:n}=o(26865),{BaseText:i}=o(76955),s=r.div.withConfig({displayName:"ProductCardWrapper"})`
  position: relative;
  border: 1px solid;
  ${({theme:e})=>n(e,"border-color","colors.consumption.body.standard.divider")};
  ${({theme:e})=>n(e,"background-color","colors.consumption.body.standard.bg-card")};
  padding: ${a(1)};
  text-align: center;

  ${({hasTopLine:e,theme:t})=>e?`\n    border-top: none;\n\n    &::before {\n      position: absolute;\n      top: -3px;\n      right: -1px;\n      bottom: 0;\n      left: -1px;\n      z-index: -1;\n      ${n(t,"background-color","colors.consumption.body.standard.display-texture")};\n      content: '';\n    }\n  `:""}

  ${({hasShadow:e})=>e?"\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.12);\n  ":""}
`,d=r.div.withConfig({displayName:"ProductCardDescription"})`
  display: flex;
  margin-bottom: ${a(1)};
`,l=r.div.withConfig({displayName:"ProductCardImageBlock"})`
  flex-shrink: 0;
  margin-right: ${a(1)};
  width: 75px;
`,c=r.div.withConfig({displayName:"ProductCardTextBlock"})`
  padding-top: ${a(1)};
`,p=r(i).withConfig({displayName:"ProductCardName"})``;p.defaultProps={bottomSpacing:.5,colorToken:"colors.consumption.body.standard.subhed",textAlign:"left",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-secondary"};const u=r(i).withConfig({displayName:"ProductCardRating"})`
  ${({theme:e,colorToken:t})=>n(e,"color",t)};
`;u.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",textAlign:"left",typeIdentity:"typography.definitions.globalEditorial.numerical-small"},e.exports={ProductCardDescription:d,ProductCardImageBlock:l,ProductCardTextBlock:c,ProductCardName:p,ProductCardRating:u,ProductCardWrapper:s}},14170:(e,t,o)=>{const r=o(37243);t.A=(0,r.defineMessages)({cardRating:{id:"ProductCard.CardRating",defaultMessage:"Rating: {rating}/10",description:"Rating for product"}})},4904:(e,t,o)=>{const r=o(2404),a=o(5556),n=o(96540),{default:i}=o(1165),s=o(96303),{shouldRenderNothing:d}=o(29670),{connectDomain:l}=o(57744),c=l("payment"),p=l("featureFlags"),u=o(66657),m=o(28433),{getInterludePosition:g,reviewStrategies:h}=o(15316),y=o(19607),f=o(79244),b=o(57885),{PaymentGateway:C}=o(92807),w=o(36382),P=o(51009),R=o(39832),v=o(22652),{ArticlePageBodyGridContainer:E}=o(54910),B=new i({a:function(e){const{isExternal:t,...o}=e;return{type:t?R:"a",props:o}},h2:function(e={}){return"sidebar:heading"===e.type?{type:w,props:e.props}:e},"inline-embed":P,blockquote:({props:e})=>({type:b,props:e}),tiktok:function(e={}){return{type:f,props:{tiktokUrl:e.url}}}});function k(e){const t=e[0],o=e[1]||{},r="inline-embed"===t&&"callout:feature-large"===o.type,a="inline-embed"===t&&"callout:feature-medium"===o.type;return r||a||"ad"===t}function S(e,t){return`${e}-${t}`}class N{constructor({GeneralContentWrapper:e=(()=>null),FullBleedContentWrapper:t=(()=>null),RailContent:o=(()=>null),payment:r,featureFlags:a,interlude:n}){this.interludeProps=n,this.interludePosition=n?.strategy&&g(n,h),this.GeneralContentWrapper=e,this.FullBleedContentWrapper=t,this.RailContent=o,this.chunkCount=0,this.shouldRenderMidContent=!d("ads",r,a)}closeSmallGroup(e,t,o){let r=t;if(e.length>0){++this.chunkCount;const a=this.GeneralContentWrapper;r=[...t,n.createElement(a,{key:S("small-group",o)},n.createElement(v,{className:"body__container article__body",shouldEnableDataJourneyHook:!1},B.convert(["div",{className:"body__inner-container"},...e])),n.createElement(n.Fragment,null,n.createElement(m,null,this.RailContent(this.chunkCount))))]}return r}wrapInFullSizeContainer(e,t,o){const r=this.FullBleedContentWrapper;return[...t,n.createElement(r,{key:S("full",o)},n.createElement(E,{className:"body__grid-container",shouldEnableDataJourneyHook:!1},B.convert(e)))]}visit(e){const t=function(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}(e);let o=[],r=[];return this.isSingleChunk=!t.some((e=>"ad"===e[0])),this.finalAdSet=!1,t.forEach(((e,t)=>{const[a]=e;if("ad"===a?this.shouldRenderMidContent&&(o=this.closeSmallGroup(r,o,t),r=[],o=[...o,n.createElement(u,{className:"full-bleed-ad row-mid-content-ad",key:S("ad",t)},n.createElement(C,{group:"ads"},n.createElement(y,{position:"mid-content",shouldDisplayLabel:!0,hideLabelOnInitialRender:!0,shouldHoldSpace:!0})))]):k(e)?(o=this.closeSmallGroup(r,o,t),r=[],o=this.wrapInFullSizeContainer(e,o,t)):r=[...r,e],this.interludePosition===t)if(k(e)||"ad"===a)o=[...o,n.createElement(s,{...this.interludeProps,isRightRail:!1})];else{const e=(({brand:e,interludeOverrideId:t,playerBase:o,isRailEligible:r,isTitleLinkDisabled:a})=>["inline-embed",{type:"cneinterlude",props:{brand:e,interludeOverrideId:t,playerBase:o,isRailEligible:r,isRightRail:!1,isTitleLinkDisabled:a}}])({...this.interludeProps,isRightRail:!1});r=[...r,e]}})),o=this.closeSmallGroup(r,o,"final"),this.finalAdSet=!0,o}}const x=({FullBleedContentWrapper:e,GeneralContentWrapper:t,RailContent:o,jsonml:r,payment:a,featureFlags:n,interlude:i})=>new N({FullBleedContentWrapper:e,GeneralContentWrapper:t,RailContent:o,jsonml:r,payment:a,featureFlags:n,interlude:i}).visit(r);x.propTypes={className:a.string,featureFlags:a.object,FullBleedContentWrapper:a.func,GeneralContentWrapper:a.func,interlude:a.object,jsonml:a.array.isRequired,payment:a.object,RailContent:a.func},e.exports=n.memo(c(p(x)),r),e.exports.Chunks=x},51077:(e,t,o)=>{const r=o(5556),a=o(63560),n=o(96540),{useEffect:i,useState:s}=o(96540),{asConfiguredComponent:d}=o(12892),l=o(19607),c=o(4904),p=o(61127),u=o(1802),{googleAnalytics:m}=o(90090),g=o(86659),h=o(26349),{getNewsletterSubscriptions:y}=o(29727),{PaymentGateway:f}=o(92807),b=o(84492),C=o(39899),w=o(94149),P=o(30987),R=o(14935),{ConfiguredDisclaimer:v}=o(74307),{connector:E}=o(57744),B=o(96303),k=o(48496),S=o(98531),{trackComponent:N}=o(92716),{interactionResponse:x}=o(56187),{handleAffiliateLinkClick:T}=o(14307),{ArticlePageContentBackGround:I,ArticlePageChunks:A}=o(54910),$=o(69234),L=o(72014),O=o(90532),{getVariationNames:M}=o(81372),{ReviewPageWrapper:j,ReviewPageAwards:W,ReviewPageAwardsInner:_,ReviewPageDisclaimerBelow:D,ReviewPageBottomProductOffersList:F,ReviewPageContentHeader:H,ReviewPageProductOffersListContainer:G}=o(90884),q=(e,t,o,r)=>a=>n.createElement("aside",null,e,1===a&&t?.strategy?.enabled&&t?.isRailEligible&&n.createElement(B,{...t,isRightRail:!0}),n.createElement(f,{group:"ads"},n.createElement(l,{position:"rail"})),o&&1!==a&&n.createElement($,{items:r})),U=({ctaText:e,hideEmptyRating:t,headerProps:o,offers:r,productCardImage:a,productName:i,rating:s,productBrand:d,productId:l,shouldCheckOfferForProductCard:c,shouldShowBrandInProductName:p})=>!c||r&&r.length>0?n.createElement(n.Fragment,null,n.createElement(b,{ctaText:e,hideEmptyRating:t,name:p?`${d} ${i}`.trim():i||o.dangerousHed,offers:r,productImage:a,rating:s,productId:l}),r&&r.length>0&&n.createElement(v,null)):null;U.propTypes={ctaText:r.string,headerProps:r.object.isRequired,hideEmptyRating:r.bool,offers:r.array,productBrand:r.string,productCardImage:r.object,productId:r.string,productName:r.string,rating:r.number,shouldShowBrandInProductName:r.bool};const z=({reviewRatingData:e,hideEmptyRating:t,hideTopRating:o,rating:r})=>!o||r<=0&&t||!r?null:n.createElement(e,{rating:r,"data-testid":"ReviewRatingData"});z.propTypes={hideEmptyRating:r.bool,hideTopRating:r.bool,rating:r.number,reviewRatingData:r.elementType.isRequired};const V=({actionBarButtons:e,actionBarLargeScreenVariation:t,className:o,componentConfig:r,hasStaticPositionedAward:l=!1,hideEmptyRating:u,hideTopRating:f,isActionBarStickyLargeScreen:b,isSplitScreenArtistLarge:v,review:{awards:E,body:B,channelMap:$,cons:L,contributors:M,coralComments:V,ctaText:J,enableActionBar:K,headerProps:Q,hideContributorBio:X,interlude:Y,lang:Z,multiReviewHeaderProps:ee,newsletter:te,newsletterModules:oe,offers:re,productCardImage:ae,productBrand:ne="",productId:ie,productName:se,pros:de,rating:le,recircs:ce,recircMostPopular:pe,recircRelated:ue,showBookmark:me,showLocalisedOffers:ge,summaryProps:he,tagCloud:ye},shouldShowBrandInProductName:fe=!1,showTopBuyButton:be=!1,showStickyBuyButtonOnBottom:Ce,shouldCheckOfferForProductCard:we=!1,user:Pe,userPlatform:Re,hasDynamicNewsletterSignup:ve=!1,hideProductCard:Ee=!1,hideTopDisclaimerOnMobile:Be=!0,related:ke=[],shouldUseMultiReviewHeaderProps:Se=!1,showRecircMostPopularInAside:Ne=!1,actionIdFlags:xe={}})=>{n.useEffect((()=>{(async()=>{await x(),N("ReviewPage")})()}),[]);const[Te,Ie]=s({...te}),Ae=n.createRef(),$e=ee?.itemsReviewed?.length,Le=Se&&$e>1,Oe=Le?ee:Q,Me=xe?.enableActionIdForProductCard;Le&&a(r,"ContentHeader.variation","SplitScreenWithMultiReviewContent");const je=Ee?null:U({ctaText:J,headerProps:Q,hideEmptyRating:u,offers:re,productCardImage:ae,productName:se,rating:le,productBrand:ne,productId:ie,shouldCheckOfferForProductCard:we,shouldShowBrandInProductName:fe}),We="bottom-review",_e=ce.map(((e,t)=>{const o=d(S,e.displayName),r=e.heading||"";return n.createElement(k,{key:`ConnectedErrorBoundary${t}`},n.createElement(o,{related:e.related,heading:r}))}));return i((()=>{if(Pe.isAuthenticated&&ve&&oe?.length){const e=oe.map((e=>e.newsletterId)).toString();(async e=>{try{const t=await y(e);if(200===t.status){const e=oe.filter((e=>e.priority)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.newsletterId)),o=te.newsletterId,r=t.newsletterSubscriptions.data.filter((e=>"SUBSCRIBED"===e.attributes.status)).map((e=>e.attributes.newsletterId));if(r.length){const t=e.filter((e=>!r.includes(e))),a=oe.find((e=>e.newsletterId===t[0]));r.includes(o)&&Ie({...Te,...a})}}}catch(e){console.log(e)}})({amgUUID:Pe.amguuid,newsletterIds:e,userPlatformProxy:Re.userPlatformProxy,provider:"sailthru",xClientID:Re.xClientID})}return()=>{console.log("cleanup")}}),[Pe.isAuthenticated,ve,oe]),n.createElement(j,{className:o,hasBaseAds:!0,hasFooterAdsMargins:!0,lang:Z},me&&n.createElement(R,null),n.createElement("article",{"data-testid":"ReviewPageArticle"},n.createElement("div",null,n.createElement(H,{...Oe,awards:E,className:Q.className,hideTopRating:f,hideTopDisclaimerOnMobile:Be,showHeaderButton:be,stickySocialAnchorBottom:{selector:"[data-testid='ReviewPageArticle']"},stickySocialAnchorTop:{selector:"[data-testid='ReviewPageMainContent']"},offers:re,reviewRating:le,isSplitScreenArtistLarge:v})),n.createElement(I,{ref:Ae,enableActionBar:K},K&&n.createElement(O,{actionBarLargeScreenVariation:t,isActionBarStickyLargeScreen:b,actionBarButtons:e,showActionBar:K}),n.createElement(h,{ctaText:J,hideEmptyRating:u,offers:re,productName:fe?`${ne} ${se}`.trim():se||Q.dangerousHed,rating:le,trackElement:Ae,showOnBottom:Ce}),n.createElement(g.ContentWithAdRailNarrow,null,n.createElement("div",{"data-testid":"ReviewPageMainContent",ref:Ae},Be&&n.createElement(D,null),E&&(!Q.lede||!Q.lede.contentType)&&l&&n.createElement(W,null,n.createElement(_,{awards:E,hasStaticPositionedAward:l})),he&&n.createElement(P,{...he}),n.createElement(z,{hideEmptyRating:u,hideTopRating:f,rating:le,reviewRatingData:w}),de&&L&&n.createElement(C,{cons:L,pros:de}))),B&&B.length&&n.createElement(A,null,n.createElement(c,{FullBleedContentWrapper:g.ContentWithAdRailNarrow,GeneralContentWrapper:g.ContentWithAdRailNarrow,RailContent:q(je,Y,Ne,pe),jsonml:B,interlude:Y})),!be&&re&&re.length>0&&n.createElement(G,null,n.createElement(F,{dataAttrs:{"data-component-position":We},defaultCTAText:J,offers:re,onClickHandler:(e,t,o,r,a)=>{m.emitGoogleTrackingEvent("buy-button-click",{componentPosition:We}),T(r,{label:e,position:t,link:o,component:"affiliate_button_link",actionId:a})},showCount:4,showLocalisedOffers:ge,showPriceOnButton:!0,isActionIdEnabledForComponent:Me})))),n.createElement(p,{channelMap:$,ContentWrapper:g.ContentWithAdRailNarrow,contributors:M,coralComments:V,hideContributorBio:X,newsletter:Pe.isAuthenticated?Te:te,showRecirc:!!ce.length,recircListElements:_e,related:ke,tagCloud:ye,recircRelated:ue}))};V.propTypes={actionBarButtons:r.arrayOf(r.oneOf(["audio","bookmark"])),actionBarLargeScreenVariation:r.oneOf(M(L)),actionIdFlags:r.object,className:r.string,componentConfig:r.object,hasDynamicNewsletterSignup:r.bool,hasStaticPositionedAward:r.bool,hideEmptyRating:r.bool,hideProductCard:r.bool,hideTopDisclaimerOnMobile:r.bool,hideTopRating:r.bool,isActionBarStickyLargeScreen:r.bool,isSplitScreenArtistLarge:r.bool,related:r.array,review:r.shape({awards:r.array,body:r.array,channelMap:r.object,cons:r.string,contributors:r.shape({author:r.shape({items:r.arrayOf(r.shape(u.propTypes.contributors))})}),coralComments:r.shape({enableComments:r.bool,coralHostName:r.string}),ctaText:r.string,enableActionBar:r.bool,enableComments:r.boolean,headerProps:r.object.isRequired,hideContributorBio:r.bool,interlude:r.object,lang:r.string,multiReviewHeaderProps:r.object.isRequired,newsletter:r.object,newsletterModules:r.array,offers:r.array,productCardImage:r.object,productBrand:r.string,productId:r.string,productName:r.string,pros:r.string,rating:r.number,recircMostPopular:r.array,recircRelated:r.array,recircs:r.array,related:r.array,showBookmark:r.bool,showLocalisedOffers:r.bool,summaryProps:r.object,tagCloud:r.shape({tags:r.arrayOf(r.shape({tag:r.string.isRequired,url:r.string}))})}).isRequired,shouldCheckOfferForProductCard:r.bool,shouldShowBrandInProductName:r.bool,shouldUseMultiReviewHeaderProps:r.bool,showRecircMostPopularInAside:r.bool,showStickyBuyButtonOnBottom:r.bool,showTopBuyButton:r.bool,user:r.object,userPlatform:r.object},V.displayName="ReviewPage",e.exports=d(E(V,{keysToPluck:["review","related","user","userPlatform","componentConfig"]}),"ReviewPage")},36512:(e,t,o)=>{e.exports=o(51077)},90884:(e,t,o)=>{const{default:r}=o(75999),{calculateSpacing:a}=o(26865),{BREAKPOINTS:n}=o(96472),i=o(30543),{ConfiguredDisclaimer:s}=o(74307),d=o(866),l=o(18059),c=o(69389),p=o(86659),{StyledTextblock:u}=o(18765),{BadgeWrapper:m}=o(34447),{ContentHeaderLeadAsset:g}=o(5239),{ContentHeaderContainer:h}=o(88317),{ContentHeaderAccreditation:y}=o(80607),f=r(i).withConfig({displayName:"ReviewPageWrapper"})`
  .article__body {
    p:first-child:not(.callout--group-item) {
      margin: ${a(2.25)} 0;
    }
  }
  ${u} {
    padding: ${a(2)} 0;
  }
`,b=r(c).withConfig({displayName:"ReviewPageContentHeader"})`
  ${g} {
    margin-top: ${a(.5)};
  }

  && {
    ${h} ${y} {
      padding-bottom: 15px;
    }
  }
`,C=r.div.withConfig({displayName:"ReviewPageAwards"})`
  padding-bottom: ${a(2)};
`,w=r(d).withConfig({displayName:"ReviewPageAwardsInner"})`
  margin-top: 0;

  ${m} {
    @media (min-width: ${n.md}) {
      padding-bottom: 0;
    }
  }

  @media (min-width: ${n.lg}) {
    padding-right: 0;

    ${m} {
      padding: 0 0 ${a(2)} ${a(1)};

      &:nth-child(3),
      &:nth-child(4) {
        padding-bottom: 0;
      }
    }
  }

  @media (min-width: 1325px) {
    ${m} {
      padding: 0 0 0 ${a(1)};
    }
  }
`,P=r(s).withConfig({displayName:"ReviewPageDisclaimerBelow"})`
  @media (min-width: ${n.lg}) {
    display: none;
  }
`,R=r(l).withConfig({displayName:"ReviewPageBottomProductOffersList"})``,v=r(p.ContentWithAdRailNarrow).withConfig({displayName:"ReviewPageProductOffersListContainer"})`
  &&& {
    ${R} {
      grid-column: 1 / -1;
      margin-bottom: ${a(4)};

      @media (min-width: ${n.md}) {
        grid-column: 1 / span 8;
      }

      @media (min-width: ${n.lg}) {
        grid-column: 2 / span 3;
      }
    }
  }
`;e.exports={ReviewPageWrapper:f,ReviewPageAwards:C,ReviewPageAwardsInner:w,ReviewPageDisclaimerBelow:P,ReviewPageBottomProductOffersList:R,ReviewPageContentHeader:b,ReviewPageProductOffersListContainer:v}},44187:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(o(36512));(0,r(o(41782)).default)(a.default)}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=r,e=[],n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,r,a]=e[c],s=!0,d=0;d<o.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[d])))?o.splice(d--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);n.r(a);var i={};t=t||[null,o({}),o([]),o(o)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,n.d(a,i),a},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={7265:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,s,d]=o,l=0;if(i.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(d)var c=d(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var i=n.O(void 0,[4069,9504,2641,4039,3405,1782,7035,7368,3906],(()=>n(44187)));i=n.O(i)})();