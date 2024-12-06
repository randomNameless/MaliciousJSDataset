(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7169],{93977:(e,t,a)=>{const o=a(96540),n=a(5556),{useIntl:i}=a(37243),{trackComponent:r}=a(92716),{interactionResponse:l}=a(56187),{HiddenCheckbox:s,Overlay:d,Title:c,Text:m,Logo:p,DefaultLogo:u,AgeGateButton:g}=a(6591),{AGE_GATE_ACCEPT:y,AGE_GATE_COOKIE_KEY:h}=a(90511),{hasContentWarnings:b,acceptAgeGatePrompt:C}=a(97288),{getCookie:f}=a(56892),T=a(67385).A,A=({hed:e,dek:t,acceptLabel:a,declineLabel:n,logo:A,content:S,cookieExpirationInDays:E,brandContentWarnings:k=["sexual_content","drug_content","death_content","alcohol_content"]})=>{o.useEffect((()=>{(async()=>{await l(),r("AgeGate")})()}),[]);const{useState:w,useEffect:_}=o,{formatMessage:$}=i(),[x,G]=w(!1);if(_((()=>{const e=!(f(h)===y)&&b({content:S,brandContentWarnings:k});G(e)}),[S,k]),!x)return null;const I=t??$(T.ageGateDekText);return o.createElement(o.Fragment,null,o.createElement(s,{id:"age-gate-check"}),o.createElement(d,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},A?o.createElement(p,{src:A,alt:e}):o.createElement(u,null),o.createElement(c,{as:"h2",id:"age-gate-title"},e??$(T.ageGateHedText)),I&&o.createElement(m,{id:"age-gate-description"},I),o.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},o.createElement(g,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),C(t)})(G,E),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:a||$(T.ageGateAcceptLabel)})),o.createElement(g,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:n||$(T.ageGateDeclineLabel)})))};A.displayName="AgeGate",A.propTypes={acceptLabel:n.string,brandContentWarnings:n.array,content:n.object.isRequired,cookieExpirationInDays:n.number,declineLabel:n.string,dek:n.string,hed:n.string,logo:n.string},e.exports=A},90511:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},92989:(e,t,a)=>{const{asConfiguredComponent:o}=a(12892),n=a(93977);e.exports=o(n,"AgeGate")},6591:function(e,t,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const n=o(a(75999)),i=a(99906),r=a(26865),l=o(a(97504)),s=a(76955),d=o(a(73730));t.HiddenCheckbox=n.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=n.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${(0,r.getColorToken)("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${i.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${i.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=(0,n.default)(l.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  transform: scale(1.135);
  margin: 0 0 ${(0,r.calculateSpacing)(3)};
  fill: ${({theme:e})=>(0,r.getColorToken)(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>(0,r.getColorToken)(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=n.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${(0,r.calculateSpacing)(3)};
  width: 96px;
  height: 96px;
`,t.Title=(0,n.default)(s.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${(0,r.calculateSpacing)(2)};

  & + label,
  & + button {
    margin-top: ${(0,r.calculateSpacing)(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=(0,n.default)(s.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${(0,r.calculateSpacing)(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=(0,n.default)(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${(0,r.calculateSpacing)(2)};
`},67385:(e,t,a)=>{const o=a(37243);t.A=(0,o.defineMessages)({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},97288:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const o=a(90511),{createCookie:n}=a(56892);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:a}=e||{},o=t?.some((e=>a?.some((t=>t.slug===e))));return Boolean(o)},t.acceptAgeGatePrompt=e=>{document.cookie=n(o.AGE_GATE_COOKIE_KEY,o.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||o.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},97071:(e,t,a)=>{const o=a(5556),n=a(96540),{useIntl:i}=a(37243),r=a(73730),l=a(74992),s=a(50518).A,{componentTracking:d}=a(90090),{useOnAdFilled:c}=a(1184),{asConfiguredComponent:m}=a(12892),{trackComponent:p}=a(92716),{interactionResponse:u}=a(56187),{SummaryCollectionSplitColumnsWrapper:g,SummaryCollectionSplitColumnsItems:y,SummaryCollectionSplitColumnsRecsWrapper:h,SummaryCollectionSplitColumnsItem:b}=a(35516),C=({className:e,dangerousHed:t,guideItem:a,hasBackgroundColor:o=!0,hasBorderItem:l=!0,hasExtraRubricSpace:m=!1,hasLessBottomSpace:C=!1,hasTighterBylineSpacing:f=!1,itemHedTag:T,location:A,recommendedItems:S,recommendedItemCount:E=2,shouldHideDangerousDek:k=!1,shouldAppendReadMoreLinkForDek:w=!0,shouldHideBylines:_=!0,shouldEnableBundleComponentAnalytics:$,summaryItemRubricVariation:x,trackingNamespace:G})=>{n.useEffect((()=>{(async()=>{await u(),p("SummaryCollectionSplitColumns")})()}),[]);const{formatMessage:I}=i(),{items:B,recommendedType:v,recommendedClickout:L}=S,R=T||(t?"h3":"h2"),[D]=c("trending-ad");return n.createElement(g,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:o},n.createElement(y,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:D},n.createElement(h,null,n.createElement("p",null,I(s.recommendedTitle,{recommendedType:v})),B.slice(0,E).map(((e,t)=>{const a=d.addDataSectionTitleAttribute($,G?.item,t);return n.createElement(n.Fragment,{key:t},n.createElement(b,{...e,analyticsDataAttribute:a,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:l,hedTag:R,key:t,rubricVariation:x,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:w,shouldHideBylines:_,hasLessBottomSpace:C,hasExtraRubricSpace:m}))})),L&&n.createElement(r.Utility,{label:I(s.viewAllButton,{location:A,recommendedType:v}),inputKind:"link",href:L})),n.createElement(b,{...a[0],image:a[0].lede,dangerousHed:A?I(s.guideItemHed,{location:A}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:l,hedTag:R,rubricVariation:x,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:_,hasTighterBylineSpacing:f,hasLessBottomSpace:C,hasExtraRubricSpace:m})))};C.propTypes={className:o.string,dangerousHed:o.string,guideItem:o.arrayOf(o.shape(l.propTypes)).isRequired,hasBackgroundColor:o.bool,hasBorderItem:o.bool,hasExtraRubricSpace:o.bool,hasLessBottomSpace:o.bool,hasTighterBylineSpacing:o.bool,itemHedTag:o.string,location:o.string,recommendedItemCount:o.number,recommendedItems:o.shape({items:o.arrayOf(o.shape(l.propTypes)),recommendedType:o.string,recommendedClickout:o.string}).isRequired,shouldAppendReadMoreLinkForDek:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldHideBylines:o.bool,shouldHideDangerousDek:o.bool,summaryItemRubricVariation:o.string,trackingNamespace:o.object},C.displayName="SummaryCollectionSplitColumns",e.exports=m(C,"SummaryCollectionSplitColumns")},94136:(e,t,a)=>{e.exports=a(27612)},35516:(e,t,a)=>{const o=a(96540),{default:n}=a(75999),{BylineWrapper:i,BylinePreamble:r,BylineName:l,BylineLink:s}=a(74423),d=a(74992),{GridItem:c}=a(40653),m=a(86659),{calculateSpacing:p,getColorToken:u,getColorStyles:g,getTypographyStyles:y,minScreen:h,styledProperty:b}=a(26865),{BREAKPOINTS:C}=a(96472),f=n.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${p(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?u("colors.discovery.body.light.background"):"transparent"};
`,T=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${h(C.md)}{\n      padding-bottom: ${p(2)};\n    }\n  }\n`,A=n((({columnAmount:e,variation:t,shouldHideDangerousDek:a,hasExtraRubricSpace:n,hasLessBottomSpace:i,hasTighterBylineSpacing:r,...l})=>{const s=d[t];return o.createElement(s,{...l})})).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${f} & {
    padding-bottom: ${p(2)};

    ${h(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${y("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${u("colors.discovery.body.light.context-signature")};

      ${h(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>p(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${u("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${y("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${y("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${p(2)} 0 ${p(1)};
      color: ${u("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?p(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>p(e?1:2)};

      ${i},
      ${r},
      ${l},
      ${s} {
        ${y("typography.definitions.globalEditorial.accreditation-core")}
        color: ${u("colors.discovery.body.light.accreditation")};
      }

      ${s}:link {
        color: ${u("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${p(2)} 0 0 0;
    }

    ${b("hasBorder",!1,T)};
  }
`,S=n(m.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${c} {
    grid-column: 1 / -1;
    margin-top: ${p(2)};
  }
  ${c}:first-of-type {
    margin: ${p(3)} 0;
    ${h(C.md)} {
      grid-column: span 7;
    }
  }
  ${c}:last-of-type {
    ${h(C.md)} {
      grid-column: span 5;
      margin: ${p(3)} 0;
    }
  }
`,E=n("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${p(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${p(2)};
  height: 100%;

  ${h(C.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${p(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>g(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${p(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>y(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${h(C.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${h(C.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${p(6)};
    ${h(C.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${h(C.lg)} {
      justify-self: center;
      padding: 0 ${p(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:f,SummaryCollectionSplitColumnsItems:S,SummaryCollectionSplitColumnsRecsWrapper:E,SummaryCollectionSplitColumnsItem:A}},50518:(e,t,a)=>{const o=a(37243);t.A=(0,o.defineMessages)({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},27612:(e,t,a)=>{const o=a(97071);e.exports=o},65315:(e,t,a)=>{const o=a(96540),n=a(5556),{trackComponent:i}=a(92716),{interactionResponse:r}=a(56187),l=({accountId:e})=>(o.useEffect((()=>{(async()=>{await r(),i("BeopScript")})()}),[]),o.createElement(o.Fragment,null,o.createElement("script",{id:"beop-script",className:"optanon-category-C0004",type:"text/plain","data-testid":"beop-script",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),o.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));l.propTypes={accountId:n.string.isRequired},e.exports=l},85508:(e,t,a)=>{const o=a(65315);e.exports={BeopScript:o}},90713:(e,t,a)=>{const o=a(5556),n=a(96540),i=a(9599),r=a(45102),{trackComponent:l}=a(92716),{interactionResponse:s}=a(56187),d=e=>{n.useEffect((()=>{(async()=>{await s(),l("PaywallCollaborator")})()}),[]);const{component:t,name:a,paywall:o,...d}=e,c=i[o.strategy],m=o.strategy&&c,p=c&&c.names.includes(a);return m&&p?n.createElement(t,{...r.execute(c,e)}):n.createElement(t,{...d})};d.propTypes={component:o.func.isRequired,name:o.string.isRequired,payment:o.object.isRequired,paywall:o.object.isRequired},e.exports=d},81427:(e,t,a)=>{const o=a(49870),n=a(90713),i=a(32206),r=a(72274),{connectDomain:l}=a(57744),{withIncognitoDetection:s}=a(15356),d=l("user"),c=l("paywall"),m=o([d,l("payment"),c,s]);e.exports={PaywallCollaborator:m(n),withArticleTruncation:i,withGalleryTruncation:r}},32206:(e,t,a)=>{const o=a(5556),n=a(96540);e.exports=(e,t)=>{const a=e.displayName||e.name,i=e=>"object"==typeof e&&"p"===e[0],r=(e,t)=>e.filter(((a,o)=>((e,t)=>e.slice(0,t).filter(i).length)(e,o)<t)),l=a=>{const{[t]:o,shouldTruncate:i,paywall:{gateway:l={},paragraphLimit:s}={}}=a,d=o&&(l.shouldTruncate||i)&&(l.paragraphLimit>=0||s>=0);return n.createElement(e,{...a,[t]:d?r(o,l.paragraphLimit||s):o})};return l.propTypes={[t]:o.array.isRequired,paywall:o.shape({gateway:o.shape({paragraphLimit:o.number,shouldTruncate:o.bool}),paragraphLimit:o.number}),shouldTruncate:o.bool},l.displayName=`withArticleTruncation(${a})`,l}},72274:(e,t,a)=>{const o=a(5556),n=a(96540);e.exports=(e,t)=>{const a=e.displayName||e.name,i=(e,t)=>e.map((a=>a.filter((a=>((e,t)=>e.flat().indexOf(t))(e,a)<t)))).filter(((e,t)=>e.length>0||0===t)),r=a=>{const{[t]:o,shouldTruncate:r,paywall:{gateway:l={},gallerySlideLimit:s}={}}=a,d=o&&(l.shouldTruncate||r)&&(l.gallerySlideLimit>=0||s>=0);return n.createElement(e,{...a,[t]:d?i(o,l.gallerySlideLimit||s):o})};return r.propTypes={[t]:o.array.isRequired,paywall:o.shape({gateway:o.shape({gallerySlideLimit:o.number,shouldTruncate:o.bool}),gallerySlideLimit:o.number}).isRequired,shouldTruncate:o.bool},r.displayName=`withGalleryTruncation(${a})`,r}},62265:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getContentFooterWrapper=void 0;const o=a(58156),n=a(86659);t.getContentFooterWrapper=(e,t)=>{let a=n.WithMargins;const{type:i,showAdRail:r,gridColumns:l}=t||{};"gallery"===i&&(a=((e,t,a)=>{if(e)return n.ContentWithAdRailNarrow;const{start:o,end:i}=t||{};return o&&i?n.DynamicGrid(t):a})(r,l,a)),"article"===i&&(a=((e,t)=>"WithAdRail"===e?n.NarrowContentWithWideAdRail:t)(o(e,"ChunkedArticleContent.variation"),a));const s=o(e,"ContentWrapper.variation");return a=s?n[s]:a,a}}}]);