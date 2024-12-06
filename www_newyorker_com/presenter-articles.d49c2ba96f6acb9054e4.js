(()=>{var e,t,o,i={10071:(e,t,o)=>{const i=o(5556),n=o(96540),{useIntl:r}=o(37243),{useInView:a}=o(46762),{connector:l}=o(57744),s=o(73275),d=o(86659),c=o(6028).A,{trackComponent:h}=o(92716),{interactionResponse:u}=o(56187),{googleAnalytics:p}=o(90090),{SeriesRecircAsset:m,SeriesRecircContainer:g,SeriesRecircContent:b,SeriesRecircDek:C,SeriesPromoHed:f,SeriesRecircReadMoreCta:y,SeriesRecircReadMoreCtaMobile:w,SeriesRecircTextContainer:v}=o(14794),S="Read more",k={[S]:c.readMoreDefault,"Read next":c.readNext},E=({ContentWrapper:e=d.NarrowContentWithWideAdRail,readMoreCTA:t=S,seriesData:o=null})=>{const{formatMessage:i}=r();n.useEffect((()=>{(async()=>{await u(),h("SeriesRecirc")})()}),[]);const l=(({links:e})=>{let t;for(let o=0;o<e.length;o++){const{isCurrent:i}=e[o];if(i){for(let i=o+1;i<e.length;i++){const{isExternal:o,isPublished:n}=e[i]||{};if(n&&!o){t=e[i];break}}break}}return t})({links:o?.links||[]}),c=e=>{p.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[E,M]=a();if(n.useEffect((()=>{M&&p.emitUniqueGoogleTrackingEvent("series-inview",{title:l?.promoHed})}),[M]),!o)return null;if(!l)return null;const{dek:x="",hed:T="",image:R=null,promoHed:B="",url:I=""}=l,P=R&&(R.segmentedSources||R.sources)&&{...R};return n.createElement(e,null,l&&n.createElement(g,{ref:E},n.createElement(b,null,n.createElement(w,null,i(k[t])),n.createElement(m,null,P&&n.createElement("a",{href:I,onClick:()=>c(B||T)},n.createElement(s,{...P,isLazy:!0}))),n.createElement(v,null,n.createElement(y,null,i(k[t])),(T||B)&&n.createElement(f,null,n.createElement("a",{href:I,onClick:()=>c(B||T)},n.createElement("span",{dangerouslySetInnerHTML:{__html:B||T}}))),x&&n.createElement(C,null,n.createElement("span",{dangerouslySetInnerHTML:{__html:x}}))))))};E.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},E.displayName="SeriesRecirc",e.exports=l(E,{keysToPluck:["seriesData"]})},87446:(e,t,o)=>{const{asConfiguredComponent:i}=o(12892),n=o(10071);e.exports=i(n,"SeriesRecirc")},14794:(e,t,o)=>{const i=o(75999).default,{BaseText:n}=o(76955),{calculateSpacing:r,getColorToken:a}=o(26865),{BREAKPOINTS:l}=o(96472),s=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${l.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${r(4)};
  margin-bottom: ${r(5)};
  border-top: 2px solid
    ${({theme:e})=>a(e,"colors.discovery.body.white.heading")};
  padding-top: ${r(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${l.md}) {
    display: grid;
    grid-column-gap: ${r(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${l.md}) {
    display: block;
  }
`,h=i(n).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${l.md}) {
    grid-column: 1/-1;
  }
`;h.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},h.displayName="SeriesRecircDek";const u=i(n).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${l.md}) {
    grid-column: 1/-1;
  }
`;u.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const p=i(n).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${l.md}) {
    display: none;
  }
`;p.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=i(p).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${l.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,g=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${l.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:s,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:h,SeriesPromoHed:u,SeriesRecircReadMoreCta:p,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:g}},6028:(e,t,o)=>{const i=o(37243);t.A=(0,i.defineMessages)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},90085:(e,t,o)=>{const i=o(5556),n=o(96540),{asConfiguredComponent:r}=o(12892),{googleAnalytics:a}=o(90090),{trackComponent:l}=o(92716),{interactionResponse:s}=o(56187),{ChannelCloudContainer:d,ChannelCloudContainerWrapper:c,ChannelCloudHeaderContainer:h,ChannelCloudHeaderLink:u,ChannelCloudHeaderImage:p,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:g,ChannelCloudSubChannelLinkText:b,ChannelCloudSubChannelText:C}=o(46975),f=({channels:e,headerLogo:t,headerLink:o,sectionHeader:i})=>(n.useEffect((()=>{(async()=>{await s(),l("ChannelCloud")})()}),[]),n.createElement(c,null,i&&n.createElement(h,null,t&&n.createElement(p,{src:t,alt:"logo"}),n.createElement(u,{href:o,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&n.createElement(d,null,e.map((e=>n.createElement(m,{key:e.id},n.createElement(C,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map((e=>n.createElement(g,{key:e.id,href:e.url,onClick:()=>a.emitGoogleTrackingEvent("channelCloud",e)},n.createElement(b,{dangerouslySetInnerHTML:{__html:e.text}}))))))))));f.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},f.displayName="ChannelCloud",e.exports=r(f,"ChannelCloud")},46975:(e,t,o)=>{const i=o(75999).default,{BaseText:n,BaseLink:r}=o(76955),{calculateSpacing:a,getColorStyles:l}=o(26865),s="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${s};

  border-width: 0 0 ${a(.25)};
  border-style: solid;
  padding: ${a(1)} ${a(3)} ${a(2)}
    0;

  ${({theme:e})=>l(e,"border-color","colors.interactive.base.black")};
`,h=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,u=i(r).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${a(.3)};
  padding-left: ${({hasLogo:e})=>e?a(1.3):0};
`;u.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const p=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${a(2.4)} ${a(6)}
    ${a(1)} 0;
`,m=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${s}
  flex-wrap: wrap;
  margin-bottom: ${a(2)};
  padding-right: ${a(2)};
`,g=i(n).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${a(1)};

  &::after {
    content: ':';
  }
`;g.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=i(r).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${s}
  padding-right: ${a(1)};

  svg {
    ${({theme:e})=>l(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?a(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,C=i(n).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>l(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>l(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;C.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:p,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:u,ChannelCloudHeaderImage:h,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:b,ChannelCloudSubChannelLinkText:C,ChannelCloudSubChannelText:g}},92140:(e,t,o)=>{e.exports=o(70006)},70006:(e,t,o)=>{const i=o(96540),{trackComponent:n}=o(92716),{interactionResponse:r}=o(56187);class a extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:o,href:i}=e,n=document.createElement("link");n.as=t,n.href=i,n.rel=o,document.head.appendChild(n)}}async componentDidMount(){this.props&&this.writeResourceHintLink(this.props),await r(),n("ResourceHint")}render(){return i.createElement(i.Fragment,null)}}e.exports=a},33620:(e,t,o)=>{const i=o(96540),n=o(5556),{connect:r}=o(67851),a=o(20312),l=o(59319),s=o(97504),{minThresholds:d}=o(99906),{GlobalStyle:c,CloseModalButtonDesktop:h,CloseModalButtonMobile:u,ModalContentWrapper:p}=o(12456),m=({children:e,onClose:t,isModalOpen:o,modalTransitionTime:n,closeModalText:r,onAfterOpen:l,openModal:m,showHeader:g,variations:b})=>{const{isWindowed:C,isBottom:f}=b,y=!f&&!C,w=f||C;i.useEffect((()=>{a.setAppElement("#app-root")}),[]);const v=i.useMemo((()=>{if(!g||!o||!document)return 0;const e=window?.innerWidth,t=document.getElementsByClassName("visual-link-banner--is-scrolled"),i=document.getElementsByClassName("site-navigation");return e<d.xl&&t.length&&t[0]?t[0].offsetHeight:i&&i.length&&i[0]?.offsetHeight||0}),[o,g]),S=()=>{t&&t(),m(!1)};return i.createElement(a,{isOpen:o,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",htmlOpenClassName:"genericModalHtmlOpen",shouldCloseOnEsc:!0,closeTimeoutMS:n,onRequestClose:S,onAfterOpen:()=>{l&&l()}},y&&i.createElement(h,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:S,ButtonIcon:s.Close,label:r}),i.createElement(u,{ButtonIcon:s.Close,onClickHandler:S,onTouchStart:S,btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:r,isWindowed:C,isBottom:f}),i.createElement(p,null,e),i.createElement(c,{siteHeaderHeight:v,modalTransitionTime:n,isWindowed:C,isBottom:f,shouldShowOverlay:w}))};m.propTypes={children:n.node.isRequired,closeModalText:n.string,isModalOpen:n.bool.isRequired,modalTransitionTime:n.number,onAfterOpen:n.func,onClose:n.func,openModal:n.func.isRequired,showHeader:n.bool,variations:n.shape({isBottom:n.bool,isWindowed:n.bool})},m.defaultProps={closeModalText:"",modalTransitionTime:300,showHeader:!1,variations:{isBottom:!1,isWindowed:!1}},e.exports=r((e=>({isModalOpen:e.isModalOpen||!1})),(e=>{const{openModal:t}=l(e);return{openModal:t}}))(m)},75084:(e,t,o)=>{const i=o(57440),{asConfiguredComponent:n}=o(12892),{asThemedComponent:r}=o(20223);e.exports=r(n(i,"GenericModal"))},12456:(e,t,o)=>{const{default:i,createGlobalStyle:n,css:r}=o(75999),a=o(73730),{ButtonLabel:l,ButtonIconWrapper:s}=o(18974),{maxScreen:d,minScreen:c,getColorToken:h,getColorStyles:u,calculateSpacing:p,getZIndex:m}=o(26865),{maxThresholds:g}=o(99906),{BREAKPOINTS:b}=o(96472),C=i(a.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>h(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>h(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>h(e,"colors.interactive.base.dark")};
  }

  ${s} {
    display: flex;
  }
`,f=i(C).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${h("colors.interactive.base.primary")};
  }

  ${d(`${g.lg}px`)} {
    display: none;
  }

  ${l} {
    padding: 0;
  }
`,y=i(C).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${p(2.5)};
  right: ${p(3)};
  left: unset;
  z-index: ${m("skipLink")};
  border: 1px solid ${h("colors.interactive.base.light")};
  width: ${p(5)};
  height: ${p(5)};

  &:hover {
    border: 1px solid ${h("colors.interactive.base.light")};
    background: ${h("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${({isWindowed:e,isBottom:t})=>e?r`
        display: flex;
      `:t?r`
        top: ${p(1)};
        right: ${p(1)};
        border: none;
        width: ${p(4)};
        height: ${p(4)};

        &:hover {
          border: none;
          background: unset;
        }
      `:r`
      ${c(b.lg)} {
        display: none;
      }
    `}
`,w=i.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,v=n`

  .genericModalHtmlOpen {
    overflow: hidden;
  }

  .genericModalBodyOpen {
    @media (hover: none) {
      overflow-y: hidden;
    }
  }

  ${({siteHeaderHeight:e,modalTransitionTime:t})=>r`
      .genericModalOverlay {
        position: fixed;
        top: ${e}px;
        left: 0;
        opacity: 0;
        z-index: ${m("hyperstitialLayer")};
        width: 100%;
        height: calc(100% - ${e}px);

        ${t&&r`
          transition: opacity ${t}ms ease-in-out;
        `};
      }
    `};

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }

  ${({shouldShowOverlay:e})=>e?r`
  .genericModalOverlay {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(
      ${h("colors.background.dark",{rgbOnly:!0})},
      0.4
    );
    overflow: hidden;
    justify-items: center;
  }

  .genericModal {
    position: relative;
    outline: none;
    ${u("background-color","colors.interactive.base.white")};
  }
`:r`
          .genericModal {
            width: 100%;
            height: 100%;
            overflow-y: auto;

            ${u("background-color","colors.interactive.base.white")};
          }
        `};

  ${({isWindowed:e})=>e&&r`
  .genericModal {
    display: flex;
    border-radius: ${p(1)};
    padding: ${p(6)} 0;
    width: auto;
    max-height: 100%;

    ${u("background-color","colors.interactive.base.white")};

    ${c(b.md)} {
      padding: ${p(6)} 0;
    }

    svg {
      ${u("fill","colors.interactive.base.deemphasized")};
    }
  }

  ${w} {
    display: flex;
    flex: 1;
    height: unset;
  }
`};
  ${({isBottom:e})=>e&&r`
  .genericModalOverlay {
    align-items: end;

    ${c(b.xl)} {
      align-items: center;
    }
  }

  .genericModal {
    display: flex;
    border-radius: ${p(1)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-top: ${p(5)};
    width: 100%;
    max-height: calc(100% - ${p(4)});

    ${c(b.md)} {
      height: unset;
    }

    ${c(b.xl)} {
      border-bottom-left-radius: ${p(1)};
      border-bottom-right-radius: ${p(1)};
      max-width: ${p(104.125)};
    }
  }

  ${w} {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: unset;
    justify-items: center;
  }
`};
`;e.exports={GlobalStyle:v,CloseModalButtonDesktop:f,CloseModalButtonMobile:y,ModalContentWrapper:w}},57440:(e,t,o)=>{const{asVariation:i}=o(81372),n=o(33620);n.Default=i(n,"Default",{}),n.Windowed=i(n,"Windowed",{isWindowed:!0}),n.Bottom=i(n,"Bottom",{isBottom:!0}),e.exports=n},70935:(e,t,o)=>{const i=o(32485),n=o(63560),r=o(58156),a=o(7350),l=o(38221),s=o(5556),d=o(96540),{injectIntl:c}=o(37243),h=o(17848).A,{interactionResponse:u}=o(56187),p=o(44597),m=o(41160),{getVariationNames:g}=o(81372),{I18nProvider:b}=o(20539),C=o(92989),f=o(6538),y=o(92140),w=o(84721),{connector:v}=o(57744),S=o(61127),k=o(69389),{googleAnalytics:E}=o(90090),M=o(86659),{PaywallCollaborator:x,withArticleTruncation:T}=o(81427),{InlineBarrier:R}=o(12501),B=o(87446),I=o(31411),P=o(96303),{withLightbox:A}=o(83726),L=o(66657),{Disclaimer:O}=o(74307),{BeopScript:H}=o(85508),{trackComponent:N}=o(92716),{getContentFooterWrapper:D}=o(62265),$=o(78118),W=o(71656),F=o(14935),V=o(577),j=o(90085),{asConfiguredComponent:_}=o(12892),G=o(98531),U=o(94136),z=o(48496),{getNewsletterSubscriptions:q}=o(29727),K=o(10220),{MultiPackageRow:X}=o(67275),{getOverrideBehaviour:J}=o(68089),Y=o(75084),Z=o(87963),Q=o(90532),ee=o(72014),{storageFactory:te}=o(60663),oe=te((()=>window.sessionStorage)),{ArticlePageBase:ie,ArticlePageGlobalStyle:ne,ArticlePageLedeBackground:re,ArticlePageContentBackGround:ae,ArticlePageBodyMobileTruncatedBtn:le,ArticlePageContentFooterGrid:se,ArticlePageIssueDate:de,ContentWrapperGrid:ce,ArticlePageDisclaimer:he,ArticlePageDisclaimerGrid:ue}=o(54910),{Commenting:pe}=o(81063),me=["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"],ge=["TextOverlayContentHeader","TextOverlayContentHeaderWithLogo","TextOverlayCenterFullBleedGradient"],be=e=>me.includes(e),Ce=(e,t)=>Boolean(t&&ge.includes(e));class fe extends d.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onResizeHandler=()=>{this.implementActionBarHeight()},this.onScrollHandler=()=>{this.implementActionBarHeight()},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),E.emitUniqueGoogleTrackingEvent("article-read-more")},this.setCartoonLinkedGalleries=(e,t)=>{this.setState({sliderData:e},(()=>{t()}))},this.implementActionBarHeight=()=>{this.props.featureFlags?.enableActionBar&&this.articleWrapperRef?.current?.offsetHeight!==this.state.articleLength&&(this.state.articleLength=this.articleWrapperRef?.current?.offsetHeight)},this.fetchNewsletterSubscriptions=async e=>{try{const t=await q(e);if(200===t.status){const e=this.props.article.newsletterModules.filter((e=>e.priority)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.newsletterId)),o=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter((e=>"SUBSCRIBED"===e.attributes.status)).map((e=>e.attributes.newsletterId));if(i.length){const t=e.filter((e=>!i.includes(e))),n=this.props.article.newsletterModules.find((e=>e.newsletterId===t[0]));i.includes(o)&&this.setState({newsletterData:{...this.state.newsletterData,...n}})}}}catch(e){console.log(e)}return{}},this.state={articleLength:0,hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter,sliderData:{}},this.pageContentEl=d.createRef(),this.articleWrapperRef=d.createRef();const t=e.hasLightbox?A({Component:w,slides:e.article.lightboxImages,hasSlideShow:e.hasSlideShow,slideShowVariation:e.slideShowVariation}):w;this.TruncatedChunkedArticleContent=T(t,"body")}async componentDidMount(){if(this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&this.props.article.newsletterModules?.length){const e=this.props.article.newsletterModules.map((e=>e.newsletterId)).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:e}=this.props.article;if(e?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=a(this.onHandleScroll,300);window.addEventListener("scroll",e)}const t="header"===r(this.props.article.interactiveOverride,"behavior"),o=r(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),i=t&&!o;oe.setItem("nav_invisible",i),window.cns&&(window.cns.pageContext.content.pageStructure=this.props.article.pageStructure);const n=l(this.onScrollHandler,200),s=l(this.onResizeHandler,200);window.addEventListener("scroll",n),window.addEventListener("resize",s),await u(),N("ArticlePage")}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),oe.removeItem("nav_invisible")}render(){const{article:{id:e,body:t,channelCloudData:o,contentWarnings:a,contributorSpotLightProps:l,hasAffiliateLinks:s,hasEventBannerHidden:c,hasInvertedHeadertheme:u,channelMap:p,coralComments:m,hasNewsletterInBody:g,hasTruncationOnMobile:w,headerProps:v,hideContributorBio:E,hideRecircList:T,hideRecircMostPopular:P,hierarchy:A,shouldEnableVMG:N,interactiveOverride:q,isAffiliateLinksDisabled:ee,lang:te,langTranslations:oe,customHeading:me={},recircs:ge=[],recircMostPopular:fe,recircRelated:ye,midRecircItems:we,relatedVideo:ve,interlude:Se,isHeroAdVisible:ke,isLicensedPartner:Ee,licensedPartnerLink:Me,magazineDisclaimer:xe,paddingTop:Te,tagCloud:Re,newsletter:Be,shouldUsePersistentAd:Ie,showAgeGate:Pe,showBookmark:Ae,showBreadcrumbTrail:Le,showHotelRecirc:Oe,signageConfig:He,isUpcEnabled:Ne,isLinkStackEnabled:De,shouldShowFooterNewsletter:$e,shouldPrioritizeSeriesPagination:We,savingsUnitedCoupons:Fe=[],hasAffiliateLinkDisabled:Ve,showDisclaimer:je,disclaimerText:_e,disclaimerPosition:Ge},communityExperience:Ue,showWriterBio:ze,showFirstRailRecirc:qe,attributes:Ke,className:Xe,componentConfig:Je,config:Ye,shouldHideBaseTopPadding:Ze,shouldHideSeriesNavigation:Qe,shouldHideSeriesRecirc:et,shouldShowSeriesNavigationInFooter:tt,pageBackgroundTheme:ot,dividerColor:it,shouldEnableArticleBackground:nt,shouldEnableFullArticleInverted:rt,shouldInheritDropcapColor:at,showLinkStackInsideContentBody:lt,featureFlags:st,hasLightbox:dt,hasChannelNavigation:ct,hideSideBySideViewOnMobile:ht,showContributor:ut,showContributorSpotlight:pt,cartoonVariation:mt,hasRecircDriver:gt,recircMostPopularVariationOnMobile:bt,linkList:Ct,related:ft,metadataVideo:yt,taboola:wt,productCarousel:vt,user:St,hasNewsletterForABTest:kt,intl:Et,xlargePaddingTop:Mt,articleVariationForXlargePaddingTop:xt,beOp:Tt,hasDynamicDisclaimer:Rt,responsiveCartoonVariation:Bt,showGalleryCartoonPublishedDate:It,actionBarLargeScreenVariation:Pt,actionBarMobileScreenVariation:At,isActionBarStickyLargeScreen:Lt,actionBarButtons:Ot,showContributorImageOnMobile:Ht,showIssueDateInArticle:Nt,hasLinkbannerCrossSlideAnimation:Dt,showEnhancedTextOverlay:$t,minWordCountForMidRecirc:Wt,shouldShowMidArticleRecirc:Ft,shouldHideInlineRecirc:Vt}=this.props,{enableCommunityExperience:jt}=Ue,_t=_e||Et.formatMessage(h.defaultDisclaimer),Gt=nt?ot:void 0,Ut=nt?it:void 0,{hideNav:zt,articleLength:qt}=this.state,Kt=!!kt||g,{hasContentHeaderLogo:Xt,isFullBleedVideo:Jt}=v;Xt&&(()=>{const e=r(Je,"ContentHeader.settings");n(Je,"ContentHeader.variation","TextOverlayWithLogo"),n(Je,"ContentHeader.settings",{...e,showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0})})();const Yt=E?void 0:v.contributors,{hasNativeShareButton:Zt,hasNewsletterOnPageTop:Qt,hasNewsletterWithoutWrapper:eo,shouldEnableNativeShareOnDesktop:to,shouldRemoveBackgroundColor:oo,enableEnhancedCartoonExperience:io,enableEnhancedArticleHeader:no,enableActionBar:ro,variations:ao,showFullBleedBelow:lo,cneVideoEmbedProps:so}=st,co={};let ho={};const uo=r(Je,"ContentHeader.variation"),po=((e,t,o,i)=>{let n={};const{showContributorImageOnMobile:r,showEnhancedTextOverlay:a}=i;return e&&(be(o)&&(n={shouldAlignCenterWhenNoCaption:!0}),"TextBelowCenterFullBleedNoContributor"===o&&(n={...n,isImagePositionBottomInSmallScreen:!0})),t&&(n={...n,hideSocialIcons:!0,hideSocialIconsOnMobile:!0,hasStickySocialIcons:!1}),be(o)?n={...n,showContributorImageOnMobile:r}:Ce(o,a)&&(n={...n,showContributorImage:!1,hideShareButtons:!0,showTextOverlayDek:!0,isDekInverted:!0,isReducedBottomMargin:!0,isStandardCaption:!0,isRubricInverted:!0,hasDekMarginReduced:!0,shouldLimitContentWidth:!0,showEnhancedPublishDate:!0}),n})(no,ro,uo,{showContributorImageOnMobile:Ht,showEnhancedTextOverlay:$t});(be(uo)||Ce(uo,$t))&&(co.hasReducedBackgroundSpacing=Nt,ho={...Nt&&{articleIssueDateComponent:d.createElement((()=>v.issueDate?d.createElement(de,null,Et.formatMessage(h.publishedInThe),` ${v.issueDate} `):null),null)}});const mo=io?"InlineCartoon":Bt,go=D(Je,{type:"article"}),bo="OneColumnNarrow"===r(Je,"ChunkedArticleContent.variation"),Co=M.DynamicGrid({startColumn:2,endColumn:12}),fo=ge.map(((e,t)=>{const o=_(G,e.displayName),i=e.heading||"",{results:n,destinationPage:r,location:a,recommendedClickout:l,recommendedType:s}=e;return gt&&r?d.createElement(U,{key:`SummaryCollectionSplitColumns${t}`,recommendedItems:{items:n,recommendedType:s,recommendedClickout:l},guideItem:[r],location:a,shouldAppendReadMoreLinkForDek:!0}):d.createElement(z,{key:`ConnectedErrorBoundary${t}`},d.createElement(o,{related:e.related,heading:i,dividerColor:Ut,shouldEnableFullArticleInverted:rt}))})),yo=uo===xt&&Mt?Mt:Te,wo=Tt?.accountID||"",vo=Tt?.isEnabled||!1,So=ct&&d.createElement(W,null),ko="WithAdRail"===r(Je,"ChunkedArticleContent.variation"),Eo=({children:e})=>d.createElement(ce,{isadRail:ko,as:go},d.createElement("div",{className:"body body__container"},d.createElement("div",{className:"container container--body"},d.createElement("div",{className:"container--body-inner"},e)))),Mo="articleheader"===J(q),xo=r(v,"sponsoredContentHeaderProps");return d.createElement(ie,{additionalNavigation:So,attributes:Ke,shouldEnableFullArticleInverted:rt,channelMap:p,className:i("page--article",Xe),config:Ye,featureFlags:st,hideNav:zt,hasContentHeaderLogo:Xt,hasEventBannerHidden:c,hasInvertedHeadertheme:u,hasFooterAdsMargins:!0,interactiveOverride:q,isHeroAdVisible:ke,hasBaseAds:!0,user:St,lang:te,customHeading:me,shouldHideBaseTopPadding:Ze,shouldPrioritizeSeriesPagination:We,pageBackgroundTheme:Gt,hasLinkbannerCrossSlideAnimation:(Ce(uo,$t)||be(uo))&&Dt},vo&&d.createElement(H,{accountId:wo}),d.createElement(b,{locale:te,translations:oe},Ae&&d.createElement(F,null),"top"===Ge&&je&&d.createElement(L,null,d.createElement(Co,null,d.createElement(O,{disclaimerHtml:_t,hasTopRule:!1,contentAlign:"center"}))),Le&&d.createElement(f,{hierarchy:A,shouldRemoveBackgroundColor:oo}),d.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":at}),lang:te},Qt&&Be&&d.createElement(V,{...Be,position:"article-page-top"}),v.sponsoredContentHeaderProps&&d.createElement(I,{...v.sponsoredContentHeaderProps,className:"light-theme"}),Mo?d.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:q.markup}}):d.createElement(re,{ref:this.pageContentEl},d.createElement(k,{...v,...po,showFullHeaderViewInMobile:no,hasNativeShareButton:Zt,shouldEnableNativeShareOnDesktop:to,isFullBleedVideo:Jt,className:"article__content-header",hasLightbox:dt,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:q,metadataVideo:yt,showBreadCrumb:Le})),!Qe&&!tt&&d.createElement($,{className:"article__series-navigation",pageBackgroundTheme:Gt,dividerColor:Ut}),d.createElement(ae,{togglePaddingTop:yo,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:mt,"data-attribute-verso-pattern":"article-body",enableActionBar:ro,className:"article-body__content",...co,ref:this.articleWrapperRef},ro&&Ot&&d.createElement(Q,{actionBarLargeScreenVariation:Pt,actionBarMobileScreenVariation:At,isActionBarStickyLargeScreen:Lt,actionBarButtons:Ot,articleLength:qt,showActionBar:ro}),w&&this.state.isMobileTruncated&&d.createElement(le,{inputKind:"button",label:Et.formatMessage(h.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),r(Je,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&o?.channels?.length>0&&d.createElement(M.ContentWithAdRailNarrow,null,d.createElement("div",null,d.createElement(j,{...o,...r(Je,"ChannelCloud.settings")}))),t&&d.createElement(x,{body:t,linkList:Ct,isLinkStackEnabled:De&&lt,component:this.TruncatedChunkedArticleContent,contributors:Yt,hasTopSpacing:!!v.lede,interlude:Se,isAffiliateLinksDisabled:ee,name:"chunked-article-content",shouldUsePersistentAd:Ie,recircMostPopularVariationOnMobile:bt,hideRecircMostPopular:P,shouldEnableArticleBackground:nt,shouldEnableFullArticleInverted:rt,pageBackgroundTheme:Gt,dividerColor:Ut,recircMostPopular:fe,showFirstRailRecirc:qe,tagCloud:Re,responsiveCartoonVariation:mo,hasCartoonFullWidth:io,setCartoonLinkedGalleries:this.setCartoonLinkedGalleries,hasAffiliateLinks:s,...ho,showDisclaimer:je,disclaimer:_t,disclaimerPosition:Ge,shouldHideInlineRecirc:Vt,...Ft&&{midRecircItems:we,minWordCountForMidRecirc:Wt}}),t&&d.createElement(Eo,null,d.createElement(R,null))),!et&&d.createElement(B,{ContentWrapper:Eo})),vo&&d.createElement(Eo,null,d.createElement("div",{className:"BeOpWidget"})),lo&&d.createElement(d.Fragment,null,d.createElement(k,{variations:ao,isFullBleedVideo:lo,cneVideoEmbedProps:so})),"bottom"===Ge&&je&&d.createElement(ue,{as:go},d.createElement(he,{disclaimerHtml:_t,hasTopRule:!1})),Object.keys(vt).length>0&&d.createElement(X,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},d.createElement(K,{isUpcEnabled:Ne,...vt,hasAffiliateLinkDisabled:Ve,copilotId:e})),jt&&d.createElement(pe,{hed:v.dangerousHed,id:e}),d.createElement(se,{as:S,className:i("article-body__footer",{"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:p,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:rt,ContentWrapper:go,contributors:Yt,contributorSpotlight:l,coralComments:m,showWriterBio:ze,hideContributorBio:E,showContributorSpotlight:pt,showContributor:ut,hideRecircList:T,hasNewsletterWithoutWrapper:eo,isLicensedPartner:Ee,isLinkStackEnabled:De&&!lt,isNarrow:bo,isAdRail:ko,licensedPartnerLink:Me,linkList:Ct,magazineDisclaimer:xe,newsletter:St.isAuthenticated?this.state.newsletterData:Be,taboola:wt,recircs:ge,recircListElements:fo,dividerColor:Ut,related:ft,recircRelated:ye,relatedVideo:ve,showNewsletter:$e||!Kt,showHotelRecirc:Oe,signageConfig:He,tagCloud:Re,shouldEnableVMG:N,savingsUnitedCoupons:Fe,sponsoredProps:xo,hasDynamicDisclaimer:Rt,shouldShowSeriesNavigationInFooter:!Qe&&tt,pageBackgroundTheme:Gt,currentPage:"article"}),Pe&&d.createElement(C,{content:{contentWarnings:a}}),!St.isAuthenticated&&St.hasUserAuthCheck&&d.createElement(y,{as:"document",hint:"prefetch",href:"/account/sign-in"})),io&&d.createElement(Y,{closeModalText:Et.formatMessage(h.backToArticle)},d.createElement(Z,{id:this.state.sliderData.id,items:this.state.sliderData.items,showPublishedDate:It,responsiveCartoonVariation:"SliderCartoon",title:this.state.sliderData?.source?.hed,titleLinkURL:this.state.sliderData?.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),d.createElement(ne,{pageBackgroundTheme:Gt,dividerColor:Ut,shouldEnableFullArticleInverted:rt,hideSideBySideViewOnMobile:ht,isUpcEnabled:Ne}))}}fe.propTypes={actionBarButtons:s.arrayOf(s.oneOf(["audio","bookmark"])),actionBarLargeScreenVariation:s.oneOf(g(ee)),actionBarMobileScreenVariation:s.oneOf(g(ee)),article:s.shape({body:s.array,channelCloudData:s.object,contributorSpotLightProps:s.object,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,disclaimerText:s.string,disclaimerPosition:s.string,hasAffiliateLinkDisabled:s.bool,hasEventBannerHidden:s.bool,hasInvertedHeadertheme:s.bool,hasNewsletterInBody:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape({...P.propTypes,isRailEligible:s.boolean}),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,isUpcEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),midRecircItems:s.object,newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),pageStructure:s.array,recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldEnableVMG:s.bool,showAgeGate:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showDisclaimer:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,communityExperience:s.shape({enableCommunityExperience:s.bool}),componentConfig:s.object,config:s.object,dividerColor:s.string,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasLinkbannerCrossSlideAnimation:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,hideSideBySideViewOnMobile:s.bool,intl:s.object,isActionBarStickyLargeScreen:s.bool,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),minWordCountForMidRecirc:s.number,pageBackgroundTheme:s.string,productCarousel:s.object,recircMostPopularVariationOnMobile:s.oneOf(g(m)),related:s.array,responsiveCartoonVariation:s.oneOf(g(p)),reviewerInfoText:s.string,shouldEnableArticleBackground:s.bool,shouldEnableFullArticleInverted:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideInlineRecirc:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,shouldShowMidArticleRecirc:s.bool,shouldShowSeriesNavigationInFooter:s.bool,showContributor:s.bool,showContributorImageOnMobile:s.bool,showContributorSpotlight:s.bool,showEnhancedTextOverlay:s.bool,showFirstRailRecirc:s.bool,showGalleryCartoonPublishedDate:s.bool,showIssueDateInArticle:s.bool,showLinkStackInsideContentBody:s.bool,showWriterBio:s.bool,signInHed:s.string,signInHedSpanTag:s.string,signInMessage:s.string,slideShowVariation:s.string,taboola:s.shape({publisherId:s.string.isRequired,widgetScriptExcludeContentTypes:s.array,widgetScriptTextContentMode:s.string,widgetScriptTextContentContainer:s.string,widgetScriptTextContentPlacement:s.string}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},fe.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldEnableArticleBackground:!1,shouldEnableFullArticleInverted:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showContributorImageOnMobile:!0,showGalleryCartoonPublishedDate:!0,showIssueDateInArticle:!1,showLinkStackInsideContentBody:!1,showWriterBio:!1},fe.displayName="ArticlePage",e.exports=v(c(fe),{keysToPluck:["article","beOp","componentConfig","config","featureFlags","linkList","metadataVideo","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform","communityExperience"]})},19266:(e,t,o)=>{const i=o(70935),{asConfiguredComponent:n}=o(12892);e.exports=n(i,"ArticlePage")},17848:(e,t,o)=>{const i=o(37243);t.A=(0,i.defineMessages)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"},publishedInThe:{id:"ArticlePage.From the issue of",defaultMessage:"From the issue of",description:"Article page date text"},defaultDisclaimer:{id:"ArticlePage.DefaultDisclaimer",defaultMessage:"All products are independently selected by our editors. If you buy something, we may earn an affiliate commission.",description:"Default disclaimer for Article page"}})},63155:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(o(19266));(0,i(o(41782)).default)(n.default)}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=i,e=[],r.O=(t,o,i,n)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,i,n]=e[c],l=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,i,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,i){if(1&i&&(e=this(e)),8&i)return e;if("object"==typeof e&&e){if(4&i&&e.__esModule)return e;if(16&i&&"function"==typeof e.then)return e}var n=Object.create(null);r.r(n);var a={};t=t||[null,o({}),o([]),o(o)];for(var l=2&i&&e;"object"==typeof l&&!~t.indexOf(l);l=o(l))Object.getOwnPropertyNames(l).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,r.d(n,a),n},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={8659:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[a,l,s]=o,d=0;if(a.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var c=s(r)}for(t&&t(o);d<a.length;d++)n=a[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0;var a=r.O(void 0,[4069,9504,2641,4039,6075,3405,1782,7035,7368,2031,4721,7169],(()=>r(63155)));a=r.O(a)})();