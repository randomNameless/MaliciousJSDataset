(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[3906],{75594:(e,n,i)=>{const t=i(5556),o=i(96540),{useIntl:a}=i(37243),{useScrollObserver:r}=i(55030),{googleAnalytics:d}=i(90090),l=i(82873),s=i(82652),c=i(15497),p=i(30025).A,{trackComponent:g}=i(92716),{interactionResponse:m}=i(56187),{MobileProductCardWrapper:u,MobileProductCardIcon:b,MobileProductCardProductName:h,MobileProductCardRating:y,MobileProductCardAvailability:f,MobileProductCardOfferContent:$,MobileProductCardOuter:C,MobileProductCardOfferList:P}=i(74031),x=({buttonVariation:e="Primary",btnStyle:n="outlined",className:i,ctaText:t,hideEmptyRating:l=!1,linkBannerData:x={links:[]},maxOfferCount:w=4,offers:A,productName:v,rating:k,trackElement:M,shouldExpandAccordionOnRender:S=!1,showOffersSeller:B=!1,showOnBottom:N,venueSellerPreviewText:R})=>{o.useEffect((()=>{(async()=>{await m(),g("MobileProductCard")})()}),[]);const{formatMessage:T}=a(),_=N?"mobile-product-card-sticky-bottom":"mobile-product-card-sticky",E=o.createRef(),[O,G]=o.useState({visible:!1,expanded:!1,productListHeight:0}),I=()=>{G({expanded:!O.expanded,visible:!0,productListHeight:O.expanded?0:`${E.current.clientHeight}px`})};if(o.useEffect((()=>{A&&A.length>0&&S&&O.visible&&I()}),[A,S,O.visible]),r((()=>{if(!M&&!M.current)return;const{top:e,bottom:n}=M.current.getBoundingClientRect(),i=e<=50&&n-window.innerHeight>0;i!==O.visible&&G({expanded:!1,visible:i,productListHeight:0}),S?!O.visible&&O.expanded&&I():O.expanded&&I()}),0),!A?.length)return null;const W=o.createElement("div",{ref:E},o.createElement(P,{mobileProductCardSingle:1===A.length,buttonVariation:e,btnStyle:n,dataAttrs:{"data-component-position":_},defaultCTAText:t||T(p.ctaText),onClickHandler:()=>{d.emitGoogleTrackingEvent("buy-button-click",{componentPosition:_})},offers:A,showCount:w,showOffersSeller:B,showPriceOnButton:!0,venueSellerPreviewText:R}));let H,L;return H=N?O.expanded?o.createElement(s,{transform:"scale(0.5)"}):o.createElement(c,{transform:"scale(0.5)"}):O.expanded?o.createElement(c,{transform:"scale(0.5)"}):o.createElement(s,{transform:"scale(0.5)"}),L=1===A.length||1===w?W:o.createElement(o.Fragment,null,o.createElement(u,null,o.createElement(b,null,H),o.createElement(h,{dangerouslySetInnerHTML:{__html:v}})),O.expanded?!(k<=0&&l)&&k&&o.createElement(y,null,T(p.cardRating,{rating:k})):o.createElement(f,{"data-testid":"MobileProductCardAvailability"},T(p.cardAvailability)),o.createElement($,{style:{height:O.productListHeight},contentHeight:O.productHeight},W)),o.createElement(C,{"data-testid":"MobileProductCardOuter",mobileProductCardHidden:!O.visible,mobileProductCardMultiple:A.length>1,mobileProductCardSingle:1===A.length,mobileProductCardUnderbanner:x.links.length||0,mobileProductCardBottom:N,className:i,onClick:I},L)};x.propTypes={btnStyle:t.oneOf(["filled","outlined","text"]),buttonVariation:t.string,className:t.string,ctaText:t.string,hideEmptyRating:t.bool,linkBannerData:t.shape(l.propTypes.linkBannerData),maxOfferCount:t.number,offers:t.array.isRequired,productName:t.string.isRequired,rating:t.number,shouldExpandAccordionOnRender:t.bool,showOffersSeller:t.bool,showOnBottom:t.bool,trackElement:t.any,venueSellerPreviewText:t.string},x.displayName="MobileProductCard",e.exports=x},26349:(e,n,i)=>{const{asConfiguredComponent:t}=i(12892),{connector:o}=i(57744),a=t(i(75594),"MobileProductCard");e.exports=o(a,{keysToPluck:["linkBannerData"]})},74031:(e,n,i)=>{const t=i(75999).default,{BaseText:o}=i(76955),{calculateSpacing:a,getColorStyles:r}=i(26865),{applyGridSpacing:d}=i(1123),{BREAKPOINTS:l}=i(96472),s=i(18059),c=a(2),p=t.div.withConfig({displayName:"MobileProductCardOuter"})`
  ${d("padding")}
  position: fixed;
  top: 0;
  transform: translateY(0);
  transition: transform 300ms ease-out, height 300ms ease-out;
  z-index: 400;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  ${({theme:e})=>r(e,"background","colors.consumption.body.standard.bg-card")};
  cursor: pointer;
  padding-bottom: ${a(2)};
  width: 100%;
  text-align: left;

  &.headerIsSticky {
    ${({mobileProductCardBottom:e})=>e?"":" top: 112px;"}
  }

  ${({mobileProductCardUnderbanner:e})=>e?"top: 110px;":"top: 0px;"}

  ${({mobileProductCardMultiple:e})=>e?`\n    padding: ${c} ${a(3)};\n  `:""}

  ${({mobileProductCardSingle:e})=>e?`\n    padding-top: ${a(1)};\n    padding-bottom: ${a(1)};\n\n  `:""}

  ${({mobileProductCardBottom:e})=>e?"\n    top: unset;\n    bottom: 0;\n  ":""}

  ${({mobileProductCardHidden:e})=>e?"\n    display: none;\n    transform: translateY(-100%);\n    box-shadow: initial;\n  ":""}

  @media (min-width: ${l.md}) {
    display: none;
  }
`,g=t.div.withConfig({displayName:"MobileProductCardWrapper"})``,m=t.i.withConfig({displayName:"MobileProductCardIcon"})`
  position: absolute;
  top: 10px;
  right: 25px;
`,u=t(o).withConfig({displayName:"MobileProductCardProductName"})`
  margin: 0 25px ${a(.5)} 0;
`;u.defaultProps={as:"div",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-secondary"};const b=t(o).withConfig({displayName:"MobileProductCardRating"})``;b.defaultProps={as:"div",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const h=t(o).withConfig({displayName:"MobileProductCardAvailability"})``;h.defaultProps={as:"div",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const y=t.div.withConfig({displayName:"MobileProductCardOfferContent"})`
  transition: height 300ms ease-out;
  overflow: hidden;
`,f=t(s).withConfig({displayName:"MobileProductCardOfferList"})`
  padding-top: ${c};

  ${({mobileProductCardSingle:e})=>e?"\n    padding-top: 0;\n  ":""}
`;e.exports={MobileProductCardWrapper:g,MobileProductCardIcon:m,MobileProductCardProductName:u,MobileProductCardRating:b,MobileProductCardAvailability:h,MobileProductCardOfferContent:y,MobileProductCardOuter:p,MobileProductCardOfferList:f}},30025:(e,n,i)=>{const t=i(37243);n.A=(0,t.defineMessages)({cardRating:{id:"MobileProductCard.CardRating",defaultMessage:"Rating: {rating}/10",description:"Rating for mobile product"},cardAvailability:{id:"MobileProductCard.CardAvailability",defaultMessage:"Multiple Buying Options Available",description:"Availability message"},ctaText:{id:"MobileProductCard.CtaText",defaultMessage:"Buy Now",description:"Default cta text for MobileProductCardOfferList"}})},54910:(e,n,i)=>{const{default:t,createGlobalStyle:o,css:a}=i(75999),{BREAKPOINTS:r}=i(96472),{calculateSpacing:d,getColorStyles:l,getTypographyStyles:s,maxScreen:c,minScreen:p,minMaxScreen:g,getColorToken:m,getLinkStyles:u}=i(26865),{withRecircContextProvider:b}=i(85207),h=b(i(30543)),{getPattern:y}=i(30),f=i(73730),{ConfiguredDisclaimer:$}=i(74307),{BodyWrapper:C}=i(29912),P=i(63401),{SectionTitleHed:x}=i(33500),{LinkStackContent:w}=i(15539),{GroupCalloutWrapper:A}=i(68426),{RecircMostPopularWrapper:v,RecircMostPopularHeading:k}=i(16302),{StickyBoxWrapper:M,StickyBoxPrimary:S}=i(77307),{IframeEmbedWrapper:B}=i(34980),{ResponsiveCartoonWrapper:N}=i(77527),{GalleryEmbedHr:R}=i(56082),{AssetEmbedAssetContainer:T}=i(41108),{GridItem:_,GridWrapper:E}=i(40653),O=i(40855),{SocialIconsListItem:G}=i(51e3),{ResponsiveCartoonCaption:I}=i(77527),{applyCustomBackgroundColor:W}=i(1123),{ConsumerMarketingUnitThemedWrapper:H}=i(43152),{BaseText:L}=i(76955),{CneVideoEmbedContainer:D}=i(25423),z=a`
  ${({pageBackgroundTheme:e})=>e?a`
        ${W(e)};
      `:a`
      ${({theme:e})=>y(e,"page-background")};
    `}
  .grid-layout__content {
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }

    ${p(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${g(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${p(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${v} {
      &:first-child {
        margin-top: 0;

        ${k} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,V=t(h).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${z}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:n,hasContentHeaderLogo:i})=>!n&&i&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,U=o`
    .channel--body {
      ${z}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${p(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${d(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item):not(.upc-brandName) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${I} .underline {
          font-style: inherit;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
      }
  
      .article__body > .body__inner-container > {
        & {
          ${c(r.md)} {
            .grid-items-3${A} {
              ${_}{    
                margin-bottom: ${d(2.5)};
              }

              ${_}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:e})=>e&&`\n            ${c(r.md)} {\n              ${A} {\n                ${_} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}
          
          ${({isUpcEnabled:e})=>e&&`\n            ${p(r.md)} {\n              .grid-items-3${A} {\n                grid-template-columns: repeat(3,1fr);\n               }\n               .grid-items-4${A} {\n                grid-template-columns: repeat(4,1fr);\n               }\n              ${A} {\n               grid-template-columns: repeat(2,1fr);\n              }\n            }\n            ${c(r.md)} {\n              .grid-items-3${A} {\n              ${_}{    \n                margin-bottom: 0;\n              }\n            }\n          `}
        }

        ${B}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${B} {
            margin-top: 0;
          }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${p(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${M} {
             top: 90px;
           }
         }
     
         ${v} {
           &:first-child {
             margin-top: 0;
     
             ${k} {
               margin-top: 0;
             }
           }
         }
       }
       ${C} {
        ${({shouldEnableFullArticleInverted:e,theme:n})=>e&&`color: ${m(n,"colors.consumption.body.inverted.body")}`}
}

        ${C} {
          ${({dividerColor:e})=>e&&`\n                .body__inner-container  > hr {\n                    background: #${e};\n                    height: 1px;\n                }\n              `}
       }

  `,F=t("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${_} {\n      grid-column: 1 / -1;\n    }`}
`,q=t("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>y(e,"lede-background")};
`,Y=t("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>y(e,"lede-background")}
  padding-top: ${d(2)};

  @media (min-width: 1208px) {
    padding-top: ${d(4)};
  }

  ${({togglePaddingTop:e,hasReducedBackgroundSpacing:n})=>"large"===e&&`padding-top: ${d(4)};\n       ${p(r.md)} { \n        padding-top: ${d(n?4:6)};\n       }\n  `}

  ${({enableActionBar:e})=>e&&`\n    ${c(r.lg)}{\n      padding-top: ${d(4)};\n    }\n    ${p(r.lg)} {\n      position: relative;\n    }\n  `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${p(r.lg)} {  padding-top: ${d(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${p(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&a`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        ${l("background-color","colors.background.brand")};
        border: none;
        padding: ${d(3)} ${d(6)};

        ${p(r.lg)} {
          ${G} a {
            width: ${d(5)};
          }
        }
      }
    `}
`,K=t("div").withConfig({displayName:"MobileRecircMostPopular"})``,j=t("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:e})=>e&&`\n    ${D} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${R}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${T} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${p(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${E} {
      display: block;
    }

    ${E} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:e})=>e&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,X=t(f.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${p(r.md)} {
    display: none;
  }
`,J=t($).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${s("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${({disclaimerPosition:e})=>s("bottom"===e?"typography.definitions.consumptionEditorial.body-core":"typography.definitions.globalEditorial.context-secondary")};
    font-style: italic;
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${p(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,Q=t("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${p(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&a`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${C} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>u(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}

  ${({hasAdditionalDropcapStyling:e,theme:n})=>e&&`\n      .body__container p.has-dropcap::first-letter {\n        ${s(n,"typography.definitions.consumptionEditorial.display-large")};\n        color: ${m(n,"colors.consumption.body.standard.accent")};\n        font-size: 80px;\n        padding: ${d(2)} ${d(2)} 0;\n        margin: 0;\n      }\n    `}
`,Z=t("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,ee=t(O).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${M},
  ${M} > ${S} {
    height: 100%;
  }

  > aside > ${M} {
    position: static;
  }
`,ne=t("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${M} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,ie=t("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,te=t("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,oe=t("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,ae=t("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,re=t.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${C} > ${v} {
    width: unset;

    ul,
    li {
      margin: unset;
    }
    ${p(r.lg)} {
      display: none;
    }
  }
  ${({adRail:e})=>!e&&`\n     > ${_} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${_} {
    margin-bottom: ${d(2)};
  }

  ${({pageBackgroundTheme:e})=>e&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${H} {\n        margin-top: 2rem;\n      }  \n    `}
`,de=t.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${_} {
    grid-column: 1 / -1;
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${p(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,le=t.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({disclaimerPosition:e})=>"bottom"===e&&"\n      .disclaimer {\n        border: none;\n      }\n    "}
  ${({adRail:e})=>!e&&`\n    > ${_} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,se=t.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${_} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ce=t(P).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${x} {
    margin: 0;
  }

  ${w} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,pe=t(L).withConfig({displayName:"ArticlePageIssueDate"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${d(4)};
  text-align: center;
`;pe.defaultProps={as:"span",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={ArticlePageBase:V,ArticlePageGlobalStyle:U,ArticlePageLedeBackground:q,ArticlePageContentBackGround:Y,ArticlePageChunks:j,ArticlePageBodyMobileTruncatedBtn:X,ArticlePageChunksContent:Q,ArticlePageMainContent:Z,ArticlePageDisclaimer:J,ArticlePageSplitAdRail:ee,ArticlePageSplitAdRailContent:ne,ArticlePageSplitAdRailTop:ie,ArticlePageSplitAdRailMiddle:te,ArticlePageSplitAdRailBottom:oe,ArticlePageBodyGridContainer:ae,ArticlePageChunksGrid:re,ArticlePageContentFooterGrid:de,ArticlePageDisclaimerGrid:le,ArticlePageIssueDate:pe,ContentWrapperGrid:se,LinkStackArticlePage:ce,MobileRecircMostPopular:K,PaywallInlineBarrierWithWrapperGrid:F}}}]);