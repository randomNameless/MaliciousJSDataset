(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7035],{84899:(e,t,i)=>{const o=i(96540),{useIntl:n}=i(37243),a=i(5556),r=i(94409),s=i(94149),l=i(73275),d=i(21093),c=i(35676),p=i(77554),h=i(33193).A,g=i(10705),u=i(96591),{ContentHeaderByline:m,ContentHeaderAccreditationSocialIcons:b,ContentHeaderContributorImage:y,ContentHeaderNativeShareButton:S,ContentHeaderBylineContent:C,ContentHeaderDekRewards:v,ContentHeaderAccreditation:w,ContentHeaderDek:f,ContentHeaderSignageLabel:T,SummaryPremiereWrapper:x}=i(80607),B=({venueAwards:e})=>o.createElement(o.Fragment,null,e&&o.createElement(v,{dangerouslySetInnerHTML:{__html:e}}));B.propTypes={venueAwards:a.string};const k=({bylinesBlock:e,contributorImage:t,dangerousDek:i,dividerType:a,shouldRemoveBylineTopMargin:l,hasContributorImageBackground:c,hasDesktopTitleBlockDivider:v,hasLede:k,hasStickySocialIcons:D,hideSocialIconsOnMobile:I,hideTopRating:E,isBusinessContentHeader:R,isMiddleImage:$,isSponsoredContent:L,signage:H,sponsorByline:A,sponsoredContentHeaderProps:M,publishDateBlock:P,publishDatePosition:N,rating:O,reviewRating:W,shouldShowAuthorsInTitleBlock:_,showContributorImage:V,socialMedia:F,socialTitle:G,socialDescription:j,pageUrl:U,shouldDisplaySignageInline:K,showNativeShareButton:Y,venueAwards:q,hideByLine:z=!1,hideDangerousDek:X=!1,hideSocialIcons:Z=!1,isLiveStoryType:J=!1,metadataVideo:Q={},shouldDisplayPremiereDate:ee=!1,showSponsorBlock:te=!1,socialIconsToHide:ie=[],theme:oe="standard"})=>{const{rating:ne,count:ae}=O||{},re=B({venueAwards:q}),se={showDek:!X&&i&&!$,showVenueAwards:q,showByline:!_&&!L&&!z,showNativeShareButton:Y,socialMedia:F},{isLive:le,premiereGap:de,premiereDate:ce}=Q,{formatMessage:pe}=n();return o.createElement(w,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:_,isBusinessContentHeader:R,hasLede:k,rowWithBottomBorder:v&&("both"===a||"bottom"===a),visibilityInfo:se,"data-testid":"ContentHeaderAccreditation"},se.showDek&&o.createElement(f,{dangerouslySetInnerHTML:{__html:i},as:"div"}),K&&H&&o.createElement(T,null,H),ee&&ce&&!le&&o.createElement(x,null,o.createElement(u,{premiereDate:ce,premiereGap:de,containerTheme:oe,hideTimeStampIcon:!0})),J&&te&&o.createElement(g,{sponsorByline:A,sponsoredContentHeaderProps:{...M},theme:oe}),re,W&&!E&&o.createElement(s,{rating:W}),se.showByline&&o.createElement(m,{isLiveStoryType:J,sponsorName:M?.sponsorName,showSponsorBlock:te,shouldRemoveBylineTopMargin:l},V&&t&&o.createElement(y,{...t,sizes:R?"100%":"66px",hasContributorImageBackground:c,isBusinessContentHeader:R}),o.createElement(C,null,e,"bottom"===N&&P)),Y?o.createElement(S,null,o.createElement(p,{shareData:{url:U,title:G,text:j}})):F&&!Z&&o.createElement(b,{...F,className:"content-header__social-share",hideSocialIconsOnMobile:I,hasStickySocialIcons:D,socialIconsToHide:ie}),!!ne&&!!ae&&o.createElement(d,{averageRatingCount:Math.round(10*ne)/10,hasBorderTop:!0,link:{label:pe(h.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=r(t);window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:ae}))};k.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIcons:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldDisplaySignageInline:a.bool,shouldRemoveBylineTopMargin:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,signage:a.string,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},e.exports=k},95865:(e,t,i)=>{const o=i(5556),n=i(96540),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=i(18157),c=({title:e,tags:t=[]})=>n.createElement(a,null,n.createElement(r,null,e),n.createElement(s,null,t.map((e=>n.createElement(l,{key:e.name},n.createElement(d,{href:e.slug},e.name))))));c.propTypes={tags:o.array,title:o.string},c.displayName="Categories",e.exports=c},18157:(e,t,i)=>{const{default:o}=i(75999),{BaseText:n,BaseLink:a}=i(76955),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=i(26865),d=o.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=o(n).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=o.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,h=o.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,g=o(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;g.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:h,CategoriesLink:g}},18601:(e,t,i)=>{const o=i(32485),n=i(5556),a=i(96540),r=i(40855),{withLightbox:s}=i(83726),l=i(78372),{trackComponent:d}=i(92716),{interactionResponse:c}=i(56187),p=i(35676),h=i(34187),g=i(52540),u=i(47811),m=i(59098),b=i(21093),y=i(73275),S=i(19977),C=i(92027),v=i(84899),{useNativeShare:w}=i(90072),{getThemedBylineVariation:f}=i(27053),{ContentHeaderSocialIcons:T}=i(50130),{ContentHeaderWrapper:x,ContentHeaderOffersData:B,ContentHeaderLeadOverride:k,ContentHeaderAccreditationBottom:D,ContentHeaderContainer:I,ContentHeaderPublishDate:E,ContentHeaderLeadAssetWrapper:R,ContentHeaderBylines:$,ContentHeaderPersistentAside:L,PodcastContentHeaderDivider:H,ContentHeaderHedAccreditationWrapper:A}=i(88317),{ContentHeaderDek:M}=i(80607),{getOverrideBehaviour:P}=i(68089),{storyVideoPosition:N}=i(62327),O=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:i,business:n,bylineVariation:r,captionStyle:l,captionWidth:p,config:h={adsConfig:{contentHeaderRubricName:void 0}},className:g,contentHeaderCategories:u,contentSponsorNames:b,contributorImage:y,contributors:O,ctaText:W,dangerousDek:_,dangerousHed:V,dividerType:F,showFullHeaderViewInMobile:G,externalLinks:j,hasDesktopTitleBlockDivider:U,hasLedeLightboxButton:K,hasLightbox:Y,hasSlideshow:q,hasStaticPositionedAward:z,hasStickyBoxIndexPosition:X,hasStickySocialIcons:Z,hideAdaptationByline:J,hideByLine:Q,hideContributors:ee,hideDangerousDek:te,hideRubric:ie,hideSocialIcons:oe,hideSocialIconsOnMobile:ne,hideTopDisclaimerOnMobile:ae,hideTopRating:re,hidePublishDate:se,interactiveOverride:le,isBusinessContentHeader:de,isLiveStoryType:ce,isImagePositionBottomInSmallScreen:pe,isPeritextEnabled:he,isStoryLive:ge,issueDate:ue,issueLink:me,lede:be,ledeSocialIcons:ye,modifiedDate:Se,offers:Ce,persistentAsideAlign:ve,price:we,publishDate:fe,rating:Te,reviewRating:xe,rubric:Be,rubricVariation:ke,itemsCount:De,hasContributorImageBackground:Ie,metadataVideo:Ee,showContentDivider:Re,showContributorImage:$e,showContributorImageOnMobile:Le,showSponsorBlock:He,showHeaderButton:Ae,signage:Me,hideIssueDate:Pe,hideIssueDatePipeSeparator:Ne,hideLede:Oe,hideLedeCaption:We,hasDisabledCloseOnClickForLightbox:_e,hasNarrowHeader:Ve,podcastPagePrimaryCta:Fe,podcastPagePrimaryCtaLabel:Ge,shouldDisplayPremiereDate:je,shouldDisplaySignageInline:Ue,shouldShortenHeadline:Ke,showFullWidthLeadImage:Ye,showIssueCopyByDate:qe,showTextOverlayDek:ze,slideShowVariation:Xe,socialIconsToHide:Ze,socialMedia:Je,socialTitle:Qe,socialDescription:et,stickySocialAnchorBottom:tt,stickySocialAnchorTop:it,theme:ot,sponsoredContentHeaderProps:nt,sponsorByline:at,variations:{assetPosition:rt,copyWidth:st,contentAlign:lt,contentPosition:dt,contentStyle:ct,hasAccreditationExtraSpacing:pt,hasAccreditationSocialBottomMargin:ht,hasAccreditationSocialTopMargin:gt,shouldRemoveBylineTopMargin:ut,hasDekBottomMargin:mt,hasExtraSpaceBetweenSeparator:bt=!1,hasLedeLightbox:yt,hasNoRowPadding:St,hasPublishDateBottomPadding:Ct,hasInlinePublishDate:vt,hasReducedTitleTopMargin:wt,hasTitleWrapperTopSpacing:ft,shouldRemoveContentHedWrapperTopSpacing:Tt,hasXsNavSpacing:xt,hideAccreditationBottomSpacing:Bt,ledeAlign:kt,leadRailAnchor:Dt,mediaWidth:It,publishDatePosition:Et="bottom",reducedSpacings:Rt=!1,hasDivider:$t,showPodcastButton:Lt,shouldUseSmallLede:Ht,shouldReduceAccreditationPadding:At,hasDateExtraTopSpacing:Mt},hasNativeShareButton:Pt,shouldEnableNativeShareOnDesktop:Nt,showBreadCrumb:Ot,venueAwards:Wt,hasInvertedCaption:_t,hasInvertedLedeBackground:Vt,variationName:Ft,isFullBleedVideo:Gt,cneVideoEmbedProps:{additionalEmbedParams:jt,dangerousCaption:Ut,isStickyType:Kt,scriptUrl:Yt,shouldAutoplay:qt,shouldHaveTeaser:zt,shouldMute:Xt,variationsVideo:Zt,variationVideoName:Jt},shouldAlignCenterWhenNoCaption:Qt})=>{a.useEffect((()=>{(async()=>{await c(),d("ContentHeader",Ft)})()}),[Ft]),Be&&(Be.name=h.adsConfig?.contentHeaderRubricName||Be.name);const ei="middle"===rt,ti=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(O)&&vt,ii="storyimage"===P(le),oi=f({bylineVariation:r,theme:ot}),ni=a.createElement(S,{authorsPosition:t,business:n,bylineVariation:oi,contentHeaderCategories:u,contentSponsorNames:b,contributors:O,dangerousHed:V,dividerType:F,externalLinks:j,hasContentDivider:Re,hasDesktopTitleBlockDivider:U,hasDivider:$t,hasNoRowPadding:St,hasExtraSpaceBetweenSeparator:bt,isPeritextEnabled:he,hideAdaptationByline:J,hideIssueDate:Pe,hideIssueDatePipeSeparator:Ne,hideRubric:ie,hidePublishDate:se,isBusinessContentHeader:de,isLiveStoryType:ce,isStoryLive:ge,issueDate:ue,issueLink:me,itemsCount:De,metadataVideo:Ee,modifiedDate:Se,podcastPagePrimaryCta:Fe,podcastPagePrimaryCtaLabel:Ge,price:we,publishDate:fe,publishDatePosition:Et,rubric:Be,rubricVariation:ke,showIssueCopyByDate:qe,showPodcastButton:Lt,theme:ot});let ai=C;Y&&yt&&(ai=s(e?{Component:C,slides:e,hasSlideshow:q,slideShowVariation:Xe,hasDisabledCloseOnClickForLightbox:_e}:{Component:C,slides:[be]}));const{showNativeShareButton:ri,pageUrl:si}=w(Pt,Nt),li="hidden"!==t,di=O&&Object.keys(O).length>1,ci=O&&!ee&&a.createElement($,{contributors:O,bylineVariation:oi,isCompact:!1,inlinePublishDate:ti}),pi=Se&&{datetime:Se},hi=!se&&a.createElement(E,{inlinePublishDate:ti,"data-testid":"ContentHeaderPublishDate",mediaWidth:It,contentAlign:lt,...G&&{hasDateExtraTopSpacing:Mt,hasPublishDateBottomPadding:Ct&&(!Je||oe||ne)},...pi},fe),gi=a.createElement(a.Fragment,null,a.createElement(v,{bylinesBlock:ci,contributorImage:y,dangerousDek:_,hideDangerousDek:te,dividerType:F,hasContributorImageBackground:Ie,hasDesktopTitleBlockDivider:U,hasLede:!!be,hideTopRating:re,hasStickySocialIcons:Z,hideByLine:Q,hideSocialIcons:oe,hideSocialIconsOnMobile:ne,isBusinessContentHeader:de,isMiddleImage:ei,isSponsoredContent:b.length>0,isLiveStoryType:ce,isStoryLive:ge,metadataVideo:Ee,publishDateBlock:hi,publishDatePosition:Et,rating:Te,reviewRating:xe,shouldDisplayPremiereDate:je,shouldDisplaySignageInline:Ue,shouldShowAuthorsInTitleBlock:li,showContributorImage:$e,showSponsorBlock:He,signage:Me,socialIconsToHide:Ze,socialMedia:Je,socialTitle:Qe,socialDescription:et,sponsorByline:at,sponsoredContentHeaderProps:nt,pageUrl:si,showNativeShareButton:ri,venueAwards:Wt,mediaWidth:It,contentAlign:lt,contentPosition:dt,theme:ot,shouldRemoveBylineTopMargin:G&&ut}),a.createElement(B,{ctaText:W,hideTopDisclaimerOnMobile:ae,offers:Ce,showHeaderButton:Ae,buttonPosition:"content-header"})),ui=Qt&&!be?.caption;return a.createElement(x,{className:o("content-header",{[g]:g}),isLiveStoryType:ce,publishDatePosition:Et,hasXsNavSpacing:xt,contentAlign:lt,assetPosition:rt,shouldShowAuthorsInTitleBlock:li,captionStyle:l,copyWidth:st,mediaWidth:It,contentStyle:ct,contentPosition:dt,isBusinessContentHeader:de,isLedeOverride:ii,shouldShortenHeadline:Ke,reducedSpacings:Rt,hasInvertedCaption:_t,containerTheme:ot,shouldBylineContentStacked:di,hasExtraSpaceBetweenSeparator:bt,hasLede:!!be,hasNarrowHeader:Ve,showBreadCrumb:Ot,showTextOverlayDek:ze,...G&&{hasAccreditationExtraSpacing:pt,hasAccreditationSocialTopMargin:gt,hasAccreditationSocialBottomMargin:ht,hasDekBottomMargin:mt,hideAccreditationBottomSpacing:Bt,hasLeadAssetTopSpacing:!Ct&&(te||!_||!ei),hasTitleWrapperTopSpacing:ft,shouldRemoveContentHedWrapperTopSpacing:Tt,hasReducedTitleTopMargin:wt,shouldReduceAccreditationPadding:At},isLedeTextCenterForMobile:ui,showContributorImageOnMobile:Le,isImagePositionBottomInSmallScreen:pe},a.createElement(I,{containerTheme:ot,mediaWidth:It,showFullWidthLeadImage:Ye,contentStyle:ct,contentPosition:dt,isFullBleedVideo:Gt,"data-testid":"ContentHeaderContainer"},!te&&_&&ei&&a.createElement(D,null,a.createElement(M,{dangerouslySetInnerHTML:{__html:_},assetPosition:rt,mediaWidth:It,"data-testid":"ContentHeaderDek"})),$t&&a.createElement(H,null),a.createElement(A,{isBusinessContentHeader:de},V&&ni,gi),ii?a.createElement(k,{contentPosition:dt,dangerouslySetInnerHTML:{__html:le.markup}}):!Gt&&!Oe&&be&&a.createElement(R,{awards:i,hasLightboxButton:K,hasStaticPositionedAward:z,hideLedeCaption:We,hasDisabledCloseOnClickForLightbox:_e,lede:be,captionWidth:p,shouldRenderRailAnchor:Dt,shouldUseSmallLede:Ht,socialIcons:ye,mediaWidth:It,containerTheme:ot,hasInvertedLedeBackground:Vt,ledeAlign:kt,showFullWidthLeadImage:Ye,hasLeadAssetTopSpacing:G&&!Ct&&(te||!_||!ei),isBusinessContentHeader:de,shouldAlignCenterWhenNoCaption:Qt,as:ai,className:o({[`lead-asset--width-${It}`]:It})}),Gt&&a.createElement(m,{dangerousCaption:Ut,scriptUrl:Yt,shouldAutoplay:qt,shouldMute:Xt,shouldHaveTeaser:zt,additionalEmbedParams:jt,isStickyType:Kt,videoEmbedPosition:N,variationName:Jt,variations:Zt})),!ri&&Z&&Je&&a.createElement(L,{attributes:{shouldFadeOnMove:!0},align:ve,anchorBottom:tt,anchorTop:it,hasStickyBoxIndexPosition:X,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(T,{...Je,className:"social-icons--share"})))};O.propTypes={additionalPhotos:n.array,authorsTitleBlockPosition:n.oneOf(["above","below","hidden"]),awards:n.array,business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array}),bylineVariation:n.string,captionStyle:n.oneOf(["default","span-content-well"]),captionWidth:n.oneOf(["standard","fullbleed"]),className:n.string,cneVideoEmbedProps:n.shape({additionalEmbedParams:n.object,dangerousCaption:n.string,isStickyType:n.bool,scriptUrl:n.string,shouldAutoplay:n.bool,shouldHaveTeaser:n.bool,shouldMute:n.bool,variationsVideo:n.object,variationVideoName:n.object}),config:n.object,contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contentSponsorNames:n.array,contributorImage:n.shape(y.propTypes),contributors:n.shape(g.propTypes.contributors),ctaText:n.string,dangerousDek:n.string,dangerousHed:n.oneOfType([n.string,n.object]),dividerType:n.oneOf(["both","bottom","top"]),externalLinks:n.array,hasContributorImageBackground:n.bool,hasDesktopTitleBlockDivider:n.bool,hasDisabledCloseOnClickForLightbox:n.bool,hasInvertedCaption:n.bool,hasInvertedLedeBackground:n.bool,hasLedeLightboxButton:n.bool,hasLightbox:n.bool,hasNarrowHeader:n.bool,hasNativeShareButton:n.bool,hasSlideshow:n.bool,hasStaticPositionedAward:n.bool,hasStickyBoxIndexPosition:n.bool,hasStickySocialIcons:n.bool,hideAdaptationByline:n.bool,hideByLine:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hideLede:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,hideTopDisclaimerOnMobile:n.bool,hideTopRating:n.bool,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isBusinessContentHeader:n.bool,isFullBleedVideo:n.bool,isImagePositionBottomInSmallScreen:n.bool,isLiveStoryType:n.bool,isPeritextEnabled:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(l.propTypes),lede:n.oneOfType([n.shape(y.propTypes),n.shape(u.propTypes),n.shape(m.propTypes)]),ledeSocialIcons:n.shape(p.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,premiereGap:n.number,series:n.string,videoLength:n.number}),modifiedDate:n.string,offers:n.array,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:n.string,podcastPagePrimaryCtaLabel:n.string,price:n.string,publishDate:n.string.isRequired,rating:n.shape(b.propTypes),reviewRating:n.number,rubric:n.shape(h.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplayPremiereDate:n.bool,shouldDisplaySignageInline:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldShortenHeadline:n.bool,showBreadCrumb:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showContributorImageOnMobile:n.bool,showFullHeaderViewInMobile:n.bool,showFullWidthLeadImage:n.bool,showHeaderButton:n.bool,showIssueCopyByDate:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,signage:n.string,slideShowVariation:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(p.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(y.propTypes),sponsorName:n.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:n.oneOf(["standard","inverted","special","live"]),variationName:n.string,variations:n.shape({assetPosition:n.oneOf(["bottom","middle"]),contentAlign:n.oneOf(["center","left"]),contentPosition:n.oneOf(["above","below","start","end"]),contentStyle:n.oneOf(["card","dense-card","item"]),copyWidth:n.oneOf(["grid","fullbleed"]),hasDivider:n.bool,hasAccreditationExtraSpacing:n.bool,hasAccreditationSocialBottomMargin:n.bool,hasAccreditationSocialTopMargin:n.bool,hasTitleWrapperTopSpacing:n.bool,shouldReduceAccreditationPadding:n.bool,shouldRemoveBylineTopMargin:n.bool,hasDateExtraTopSpacing:n.bool,hasDekBottomMargin:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasInlinePublishDate:n.bool,hasLedeLightbox:n.bool,hasNoRowPadding:n.bool,hasPublishDateBottomPadding:n.bool,hasReducedTitleTopMargin:n.bool,hasXsNavSpacing:n.bool,hideAccreditationBottomSpacing:n.bool,leadRailAnchor:n.bool,ledeAlign:n.oneOf(["default","center"]),mediaWidth:n.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:n.oneOf(["top","bottom"]),reducedSpacings:n.bool,shouldRemoveContentHedWrapperTopSpacing:n.bool,shouldUseSmallLede:n.bool,showPodcastButton:n.bool}),venueAwards:n.string},O.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",cneVideoEmbedProps:{additionalEmbedParams:{},dangerousCaption:"",isStickyType:!1,scriptUrl:"",shouldAutoplay:!0,shouldHaveTeaser:!0,shouldMute:!0,variationsVideo:{},variationVideoName:{}},contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideAdaptationByline:!1,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,isFullBleedVideo:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldAlignCenterWhenNoCaption:!1,shouldDisplayPremiereDate:!1,shouldDisplaySignageInline:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showContributorImageOnMobile:!0,showFullHeaderViewInMobile:!1,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{assetPosition:"bottom",contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},O.displayName="ContentHeader",e.exports=O},17384:(e,t,i)=>{const o=i(96540),n=i(5556),a=i(73275),r=i(47811),s=i(59098),{transformLegacySources:l}=i(90072),{Image:d}=i(77032),{storyVideoPosition:c}=i(62327),p=({lede:e=null})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,i="gallery"===e.modelName,n=l(e);return o.createElement(d,null,!t&&!i&&o.createElement(a,{...n}),t&&e.scriptEmbedUrl&&o.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl,videoEmbedPosition:c}),i&&o.createElement(r,{...e,showNoAdsFromParent:!0}))};p.propTypes={lede:n.oneOfType([n.shape(a.propTypes),n.shape(r.propTypes),n.shape(s.propTypes)])},p.displayName="ImageBlock",e.exports=p},60541:(e,t,i)=>{const o=i(96540),n=i(92437).default,a=i(5556),r=i(49599),s=i(14760),l=i(34187),d=i(77554),c=i(52540),p=i(73275),h=i(47811),g=i(59098),u=i(35676),m=i(71479),b=i(17384),y=i(77938),{useNativeShare:S}=i(90072),{TextOverlayLogo:C,TextOverlayLogoLink:v,TextOverlayLogoImage:w,TextOverlayWrapper:f,ImageWrapper:T,Content:x,ContentAlign:B,Hed:k,DekWrapper:D,Dek:I,Figure:E,ContentDivider:R,ContributorImage:$,Accreditation:L,PublishDate:H,DekAndCaption:A,ContentGrid:M}=i(77032),P=i(94337),N=i(10705),O=({background:e="gradient",bylineVariation:t="Inverted",className:i="",contentAlign:a="center",contentHeaderCategories:h,contributorImage:g,contributors:O,dangerousDek:W,dangerousHed:_,hasNativeShareButton:V,hideContributors:F=!1,hideDangerousDek:G=!1,hideLedeCaption:j=!1,hidePublishDate:U,hideShareButtons:K,hideRubric:Y,showEnhancedPublishDate:q=!1,isLiveStoryType:z=!1,isPeritextEnabled:X,isStoryLive:Z=!1,lede:J,ledeCaption:Q,logoImage:ee,logoBaseUrl:te="/",modifiedDate:ie,numberOfLinesToClamp:oe=2,preambles:ne,publishDate:ae,rubric:re,shouldUseCustomPreambles:se,shouldUseCutomColorLiveIndicator:le=!1,showContentDivider:de=!1,showContributorImage:ce=!0,showLogo:pe,showTextOverlayDek:he=!1,isDekInverted:ge=!1,showSponsorBlock:ue=!1,socialDescription:me,socialMedia:be,socialTitle:ye,sponsoredContentHeaderProps:Se,sponsorByline:Ce,theme:ve,isReducedBottomMargin:we=!1,isStandardCaption:fe=!1,isRubricInverted:Te=!1,hasDekMarginReduced:xe=!1,shouldLimitContentWidth:Be=!1})=>{const{showNativeShareButton:ke,pageUrl:De}=S(V),Ie="inverted"===ve,Ee=J&&!j&&(J.caption&&J.caption.trim()||J.credit&&J.credit.trim()||Q),Re=ie&&{datetime:ie};return o.createElement(f,{className:i,"data-testid":"ContentHeader",isRubricInverted:Te},o.createElement(T,{background:e,contentAlign:a,shouldLimitContentWidth:Be},o.createElement(b,{lede:J}),pe&&ee?o.createElement(C,null,o.createElement(v,{href:te},o.createElement(w,{...ee}))):null,o.createElement(M,{contentAlign:a,isReducedBottomMargin:we},o.createElement(x,null,!Y&&(z&&Z?o.createElement(B,{contentAlign:a},o.createElement(y,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:le})):re?o.createElement(B,{contentAlign:a,"data-testid":"ContentHeaderRubric"},o.createElement(l.Inverted,{...re})):null),o.createElement(B,{contentAlign:a},o.createElement(m,{...h})),X?o.createElement(k,{"data-testid":"ContentHeaderHed",contentAlign:a},o.createElement(r,null,o.createElement(n,{value:_}))):o.createElement(k,{dangerouslySetInnerHTML:{__html:_},"data-testid":"ContentHeaderHed",contentAlign:a}),!G&&W&&he&&o.createElement(I,{dangerouslySetInnerHTML:{__html:W},contentAlign:a,"data-testid":"ContentHeaderDek",isInverted:ge||Ie,hasDekMarginReduced:xe}),de&&o.createElement(R,{contentAlign:a}),z&&ue?o.createElement(N,{sponsorByline:Ce,sponsoredContentHeaderProps:{...Se}}):null,ce&&g&&o.createElement($,{contentAlign:a},o.createElement(p,{...g})),o.createElement(L,{contentAlign:a},O&&!F&&o.createElement(c,{contributors:O,bylineVariation:t,contentAlign:a,isCompact:!1,shouldUseCustomPreambles:se,preambles:ne}),!U&&o.createElement(H,{"data-testid":"ContentHeaderPublishDate",contentAlign:a,showEnhancedPublishDate:q,...Re},ae)),!K&&(ke?o.createElement(B,{contentAlign:a,bottomSpacing:4},o.createElement(d,{hasDarkBackground:!0,shareData:{url:De,title:ye,text:me},theme:"inverted"})):be&&o.createElement(B,{contentAlign:a,bottomSpacing:4},o.createElement(u.Footer,{...be})))))),(Ee||W&&!G)&&o.createElement(A,{isStandardCaption:fe},Ee&&o.createElement(E,{contentAlign:a},o.createElement(s,{dangerousCaptionText:J.caption,dangerousCredit:z?J.credit||Q:J.credit,topSpacing:0})),!G&&W&&!he&&o.createElement(D,null,o.createElement(P,{isCollapsible:!0,lines:oe},o.createElement(I,{dangerouslySetInnerHTML:{__html:W},contentAlign:a,"data-testid":"ContentHeaderDek",isInverted:Ie})))))};O.propTypes={background:a.oneOf(["gradient","solid"]),bylineVariation:a.string,className:a.string,contentAlign:a.oneOf(["center","left"]),contentHeaderCategories:a.shape({title:a.string,tags:a.array}),contributorImage:a.shape(p.propTypes),contributors:a.shape(c.propTypes.contributors),dangerousDek:a.string,dangerousHed:a.oneOfType([a.string,a.object]),hasDekMarginReduced:a.bool,hasNativeShareButton:a.bool,hideContributors:a.bool,hideDangerousDek:a.bool,hideLedeCaption:a.bool,hidePublishDate:a.bool,hideRubric:a.bool,hideShareButtons:a.bool,isDekInverted:a.bool,isLiveStoryType:a.bool,isPeritextEnabled:a.bool,isReducedBottomMargin:a.bool,isRubricInverted:a.bool,isStandardCaption:a.bool,isStoryLive:a.bool,lede:a.oneOfType([a.shape(p.propTypes),a.shape(h.propTypes),a.shape(g.propTypes)]),ledeCaption:a.string,logoBaseUrl:a.string,logoImage:a.shape(p.propTypes),modifiedDate:a.string,numberOfLinesToClamp:a.number,preambles:a.object,publishDate:a.string,rubric:a.shape(l.propTypes),shouldLimitContentWidth:a.bool,shouldUseCustomPreambles:a.bool,shouldUseCutomColorLiveIndicator:a.bool,showContentDivider:a.bool,showContributorImage:a.bool,showEnhancedPublishDate:a.bool,showLogo:a.bool,showSponsorBlock:a.bool,showTextOverlayDek:a.bool,socialDescription:a.string,socialMedia:a.shape(u.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(p.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"])},O.displayName="TextOverlay",e.exports=O},27308:(e,t,i)=>{const o=i(60541);e.exports=o},77032:(e,t,i)=>{const{default:o,css:n}=i(75999),{getColorToken:a,getTypographyStyles:r,calculateSpacing:s,minMaxScreen:l,minScreen:d,maxScreen:c,getColorStyles:p}=i(26865),{maxThresholds:h}=i(99906),{SocialIconsList:g}=i(51e3),{BREAKPOINTS:u}=i(96472),{BaseText:m,BaseLink:b}=i(76955),{SITE_HEADER_TOP_HEIGHT:y,SITE_HEADER_TOP_STICKY_HEIGHT_MD:S,SITE_HEADER_TOP_STICKY_HEIGHT_LG:C}=i(27985),v=i(86659),{GridItem:w}=i(40653),{universalGridCore:f}=i(89085),{applyGridSpacing:T}=i(1123),x=i(73275),{CaptionText:B}=i(38860),{RubricName:k,RubricLink:D}=i(6613),{cssVariablesGrid:I}=i(1123),E=o.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;

  ${({isRubricInverted:e,theme:t})=>e&&n`
      ${D}, ${k} {
        ${p(t,"color","colors.consumption.lead.inverted.context-signature")}
      }
    `}
`,R=o.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${s(2)} auto`:`margin: ${s(2)} 0`}
`,$=o.time.withConfig({displayName:"PublishDate"}).attrs((({datetime:e})=>({dateTime:e})))`
  ${({theme:e,showEnhancedPublishDate:t})=>r(e,t?"typography.definitions.globalEditorial.context-tertiary":"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${s(1)} 0 ${s(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.context-tertiary")};
`,L=o(v.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${w} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${u.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }

  ${({isReducedBottomMargin:e})=>e&&`\n    > ${w} {\n      margin-bottom: ${s(4)};\n\n      ${R}, ${$} {\n        margin-bottom: 0;\n      }\n\n      ${d(u.lg)} {\n        margin-bottom: ${s(8)};\n      }\n    }\n    `}
`,H=o.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${u.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${u.md}) {
    display: grid;
    height: calc(
      100vh - ${y} - ${S}
    );
  }

  @media (min-width: ${u.lg}) {
    display: grid;
    height: calc(
      100vh - ${y} - ${C}
    );
  }

  @media (min-width: ${u.xl}) {
    display: grid;
    min-height: 720px;
  }

  ${({shouldLimitContentWidth:e})=>e&&`\n      ${I()}\n      ${d(u.lg)} {\n        grid-template-columns: repeat(12, 1fr);\n        gap: var(--grid-gap);\n      }\n\n      ${L} {\n        ${d(u.lg)} {\n          padding: 0;\n        }\n\n        ${l(u.lg,`${h.xl}px`)} {\n          grid-column: 3 / span 8;\n        }\n\n        ${d(u.xl)} {\n          grid-column: 4 / span 6;\n        }\n      }\n    `}

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,A=o.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,M=o.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${g} {
      @media (min-width: ${u.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${c(u.lg)} {\n        ${(e=>e.map((e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `)).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&`margin-bottom: ${s(e)};`}
`,P=o.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,N=o(m).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;N.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const O=o(m).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${u.md}) {
    grid-column: 1 / span 12;
  }
`;O.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const W=o("div").withConfig({displayName:"DekAndCaption"})`
  padding-top: ${s(1,"px")};
  ${f()}
  ${T("padding")}

  ${({isStandardCaption:e,theme:t})=>e&&`\n      ${O} {\n        text-align: left;\n        margin-top: 0;\n\n        ${d(u.lg)} {\n          grid-column: 2 / -2;\n        }\n      }\n      ${B} {\n        ${p(t,"color","colors.consumption.lead.standard.description")};\n      }\n    `}
`,_=o.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${u.md}) {
    grid-column: 3 / span 8;
  }
`,V=o(m).withConfig({displayName:"Dek"})`
  text-align: ${({contentAlign:e})=>e};

  ${({isInverted:e,theme:t})=>e&&`\n    color: ${a(t,"colors.consumption.lead.inverted.description")};\n  `}

  ${({hasDekMarginReduced:e})=>e&&`\n      margin: ${s(2)} 0 0 0;\n    `}
`;V.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const F=o.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${s(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>a(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,G=o.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${s(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,j=o(x).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,U=o(b).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s(2)};

  @media (max-width: ${u.md}) {
    padding-right: calc(1 * ${s(3)});
    padding-left: calc(1 * ${s(3)});
  }
`,K=o.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:K,TextOverlayLogoLink:U,TextOverlayLogoImage:j,TextOverlayWrapper:E,ImageWrapper:H,Image:A,ContentAlign:M,Content:P,Hed:N,DekAndCaption:W,DekWrapper:_,Dek:V,Figure:O,ContentDivider:F,ContributorImage:G,Accreditation:R,PublishDate:$,ContentGrid:L}},50459:(e,t,i)=>{const o=i(96540),n=i(5556),{AddressBlockWrapper:a,HeaderContactInformation:r,HeaderSocialInformation:s,HeaderAddressDetails:l}=i(1757),d=i(57942),c=i(7994),{isIOSDevice:p}=i(72362),h=({address:e,email:t,phone:i,socialMedia:n,link:h})=>{if(!e&&!i&&!t)return null;const{street:g,city:u,state:m,postalCode:b,country:y}=e,S=[];[g,u,m,b,y].forEach((e=>{e&&S.push(e)}));let C=h.replace(/^(https?:|)\/\//,"");return C=C.includes("www.")?C:`www.${C}`,o.createElement(a,null,e&&o.createElement(l,{"data-testid":"HeaderAddressDetails",href:"",onClick:e=>(e=>{e.preventDefault(),S?.length>0&&(p()?window.open(`maps://maps.apple.com/maps?q=${S}`):window.open(`https://maps.google.com?q=${S}`))})(e)},o.createElement("div",{className:"StreetAndCity"},g&&o.createElement("span",{"data-testid":"HeaderAddressStreet"},g),u&&o.createElement("span",{"data-testid":"HeaderAddressCity"},S[0]!==u&&", ",u,S[0]!==m&&", ")),o.createElement("div",{className:"StatePostalAndCountry"},m&&o.createElement("span",{"data-testid":"HeaderAddressState"},m),b&&o.createElement("span",{"data-testid":"HeaderAddressPostalCode"},S[0]!==b&&", ",b),y&&o.createElement("span",{"data-testid":"HeaderAddressCountry"},S[0]!==y&&", ",y))),o.createElement(r,null,i&&o.createElement("div",null,o.createElement("a",{"data-testid":"HeaderAddressPhone",href:`tel:${i}`,"aria-label":"Opens in a new window",rel:"nofollow noopener noreferrer",target:"_blank"},i)),h&&o.createElement("a",{"data-testid":"HeaderAddressWebUrl",href:h,"aria-label":"Opens in a new window",rel:"nofollow noopener noreferrer",target:"_blank"},C)),o.createElement(s,null,t&&o.createElement("a",{"data-testid":"HeaderAddressEmail",href:`mailto:${t}`,"aria-label":"Opens in a new window",rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(d,null)),n?.length>0&&o.createElement("a",{"data-testid":"HeaderAddressInstagram",href:n[0].handle,"aria-label":"Opens in a new window",rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(c,null))))};h.propTypes={address:n.object,email:n.string,link:n.string,phone:n.string,socialMedia:n.array},e.exports=h},71479:(e,t,i)=>{const o=i(5556),n=i(96540),a=i(95865),r=({hasCategoryEyebrow:e,tags:t,title:i})=>e&&t?.length>0?n.createElement(a,{title:i,tags:t}):null;r.propTypes={hasCategoryEyebrow:o.bool,tags:o.array,title:o.string},e.exports=r},89656:(e,t,i)=>{const o=i(5556),n=i(96540),{ContentHeaderRubricIssueDate:a}=i(21608),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:i,issueLink:o,showIssueCopyByDate:r})=>e||!i?null:n.createElement(a,{name:`${i}${r?" Issue":""}`,url:o,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,issueDate:o.string,issueLink:o.string,showIssueCopyByDate:o.bool},e.exports=r},10705:(e,t,i)=>{const o=i(5556),n=i(96540),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=i(61221),d=i(73275),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:i="inverted"})=>{const{sponsorLogo:o,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return n.createElement(a,null,n.createElement(l,{additionalRelVals:["sponsored"],href:c},n.createElement(r,{...o}),n.createElement(s,{containerTheme:i},p)))};c.propTypes={sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"])},e.exports=c},61221:(e,t,i)=>{const{default:o}=i(75999),{BREAKPOINTS:n}=i(96472),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(26865),l=i(73275),{SpanWrapper:d}=i(18117),c=i(39832),p=o.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,h=o(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,g=o.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${n.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,u=o(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:h,SponsoredContent:g,SponsoredContentCampaignLink:u}},33198:(e,t,i)=>{const o=i(5556),n=i(96540),{ContentHeaderTitleBlockPublishDate:a}=i(1757),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:i,modifiedDate:o})=>{if(t||!i)return null;const r=o&&{datetime:o};return n.createElement(a,{hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate",...r},i)};r.propTypes={hasExtraSpaceBetweenSeparator:o.bool,hidePublishDate:o.bool,modifiedDate:o.string,publishDate:o.string},e.exports=r},67086:(e,t,i)=>{const o=i(5556),n=i(96540),a=i(77938),r=i(34187),s=i(56174),l=i(89656),d=i(33198),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:h,ContentHeaderRubricPrice:g,ContentHeaderRubricContainer:u,ContentHeaderLiveIndicator:m}=i(21608),b=({authorsPosition:e,bylineVariation:t,contributors:i,hasExtraSpaceBetweenSeparator:o,hideAdaptationByline:b=!1,hideIssueDate:y,hideIssueDatePipeSeparator:S,hidePublishDate:C,hideRubric:v,isLiveStoryType:w=!1,isStoryLive:f=!1,issueDate:T,issueLink:x,modifiedDate:B,price:k,publishDate:D,publishDatePosition:I,rubric:E,rubricVariation:R,showIssueCopyByDate:$,sponsorName:L})=>{const H=r[R]||r,A=!y&&T&&E,M=("above"===e||"top"===I)&&!L;return w&&f?n.createElement(m,null,n.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(E||T||i)||v?null:(E||T||i)&&n.createElement(p,{hasIssueDateAndRubricBlock:A,"data-testid":"ContentHeaderRubric"},"above"===e&&n.createElement(s,{bylineVariation:t,contributors:i,hideAdaptationByline:b}),n.createElement(h,{"data-testid":"ContentHeaderRubricDateBlock"},E&&n.createElement(u,{...E,isVerticalAlign:"above"===e||"top"===I||A,as:H}),k&&n.createElement(g,null,"/ ",k),L&&n.createElement(c,{hasExtraSpaceBetweenSeparator:o,items:[{name:L}]}),M&&n.createElement(d,{hasExtraSpaceBetweenSeparator:o,hidePublishDate:C,modifiedDate:B,publishDate:D})),n.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:S,issueDate:T,issueLink:x,showIssueCopyByDate:$}))};b.propTypes={authorsPosition:o.string,bylineVariation:o.string,contributors:o.object,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,modifiedDate:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.string,rubric:o.shape(r.propTypes),rubricVariation:o.string,showIssueCopyByDate:o.bool,sponsorName:o.string},e.exports=b},19977:(e,t,i)=>{const o=i(5556),n=i(96540),a=i(92437).default,{useIntl:r}=i(37243),{asConfiguredComponent:s}=i(12892),l=i(49599),d=i(78372),c=i(34187),p=i(56174),h=i(33198),g=i(67086),u=i(71479),m=i(50459),b=i(77938),{ContentHeaderContentDivider:y,ContentHeaderLowerBylineDateBlock:S,ContentHeaderItemCount:C,ContentHeaderHed:v,ContentHeaderTitleBlockWrapper:w,PodcastButtonWrapper:f,PodcastButton:T,PodcastLink:x}=i(1757),B=i(40133).A,k=e=>e.length>0?e[0]:null,D=({authorsPosition:e="hidden",business:t,bylineVariation:i,contentHeaderCategories:o={hasCategoryEyebrow:!1},contentSponsorNames:s=[],contributors:d,dividerType:c="both",externalLinks:D,hasContentDivider:I,hasDesktopTitleBlockDivider:E=!1,hasExtraSpaceBetweenSeparator:R=!1,hideIssueDate:$=!0,hideIssueDatePipeSeparator:L=!1,hasNoRowPadding:H=!1,hideAdaptationByline:A=!1,hidePublishDate:M=!1,hideRubric:P=!1,isBusinessContentHeader:N=!1,isLiveStoryType:O,isStoryLive:W,issueDate:_,issueLink:V,itemsCount:F,metadataVideo:G={},modifiedDate:j,dangerousHed:U,isPeritextEnabled:K,price:Y,podcastPagePrimaryCta:q,podcastPagePrimaryCtaLabel:z,publishDate:X,publishDatePosition:Z="bottom",rubric:J,rubricVariation:Q,shouldDisplayLiveIndicator:ee=!1,showIssueCopyByDate:te=!1,showItemCount:ie=!1,showPodcastButton:oe=!1,theme:ne="standard"})=>{const ae=I&&"above"!==e,re="inverted"===ne,se=re?"outlined":"filled",le=E&&("both"===c||"top"===c),{formatMessage:de}=r();return n.createElement(w,{rowWithTopBorder:le,isBusinessContentHeader:N,"data-testid":"ContentHeaderTitleBlockWrapper"},G.isLive&&ee&&n.createElement(b,null),n.createElement(g,{authorsPosition:e,bylineVariation:i,contributors:d,hasExtraSpaceBetweenSeparator:R,hasNoRowPadding:H,hideIssueDate:$,hideIssueDatePipeSeparator:L,hideAdaptationByline:A,hidePublishDate:M,hideRubric:P,isLiveStoryType:O,isStoryLive:W,issueDate:_,issueLink:V,modifiedDate:j,price:Y,publishDate:X,publishDatePosition:Z,rubric:J,rubricVariation:Q,showIssueCopyByDate:te,sponsorName:k(s),theme:ne}),n.createElement(u,{...o}),K?n.createElement(v,{"data-testid":"ContentHeaderHed"},n.createElement(l,{value:{marks:{"small-caps":void 0}}},n.createElement(a,{value:U}))):n.createElement(v,{dangerouslySetInnerHTML:{__html:U},"data-testid":"ContentHeaderHed"}),"below"===e&&n.createElement(S,null,n.createElement(p,{bylineVariation:i,contributors:d}),n.createElement(h,{hasExtraSpaceBetweenSeparator:R,hidePublishDate:M,modifiedDate:j,publishDate:X})),ie&&F&&n.createElement(C,{...F}),ae&&n.createElement(y,null),N&&n.createElement(m,{address:t?.address,phone:t?.phone,email:t?.email,socialMedia:t?.socialMedia,link:t?.url}),oe&&q&&n.createElement(f,null,n.createElement(T,{btnStyle:se,href:q,label:z||de(B.primaryCTALabel),target:"blank",inputKind:"link"}),D.length>0&&n.createElement(x,{isInverted:re,href:D[0].url,target:"blank"},"Or, choose where to Listen")))};D.propTypes={authorsPosition:o.oneOf(["above","below","hidden"]),business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array,url:o.string}),bylineVariation:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array,hasCategoryEyebrow:o.boolean}),contentSponsorNames:o.array,contributors:o.object,dangerousHed:o.oneOfType([o.string,o.object]).isRequired,dividerType:o.string,externalLinks:o.array,hasContentDivider:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDivider:o.bool,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isPeritextEnabled:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(d.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,series:o.string,videoLength:o.number}),modifiedDate:o.string,podcastPagePrimaryCta:o.string,podcastPagePrimaryCtaLabel:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(c.propTypes),rubricVariation:o.string,shouldDisplayLiveIndicator:o.bool,showIssueCopyByDate:o.bool,showItemCount:o.bool,showPodcastButton:o.bool,theme:o.oneOf(["standard","inverted","special"])},D.displayName="TitleBlock",e.exports=s(D,"TitleBlock"),e.exports.TitleBlock=D},56174:(e,t,i)=>{const o=i(5556),n=i(96540),{ContentHeaderBylines:a}=i(88317),r=({bylineVariation:e,contributors:t,hideAdaptationByline:i})=>t&&0!==Object.keys(t).length?n.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1,hideAdaptationByline:i}):null;r.propTypes={bylineVariation:o.string,contributors:o.object,hideAdaptationByline:o.bool},e.exports=r},39416:(e,t,i)=>{const{asVariation:o}=i(81372),n=i(18601),a=i(27308),r=i(84231),s=i(55182);n.TextAboveCenterGridWidth=o(n,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),n.TextAboveCenterGridWidthTopCardSmall=o(n,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveCenterFullBleed=o(n,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),n.TextAboveCenterFullBleedNoContributor=o(n,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextAboveCenterFullBleedTop=o(n,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedGridWidthCard=o(n,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedCard=o(n,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),n.TextAboveLeftSmall=o(n,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveLeftSmallWithRule=o(n,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasAccreditationExtraSpacing:!0,shouldRemoveBylineTopMargin:!0,hasDateExtraTopSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveCenterSmallWithRule=o(n,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationExtraSpacing:!0,hasAccreditationSocialTopMargin:!0,hasTitleWrapperTopSpacing:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.InlineImage=o(n,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationExtraSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveLeftFullBleed=o(n,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),n.TextAboveLeftGridWidth=o(n,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),n.TextAboveLeftGridWidthCard=o(n,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),n.TextAboveLeftNoImg=o(n,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),n.TextBelowCenterGridWidth=o(n,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),n.TextBelowCenterFullBleed=o(n,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextBelowCenterFullBleedNoContributor=o(n,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,hasAccreditationSocialBottomMargin:!0,hasPublishDateBottomPadding:!0,hideAccreditationBottomSpacing:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextBelowLeftGridWidth=o(n,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),n.TextBelowLeftFullBleed=o(n,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextOverlay=o(a,"TextOverlayContentHeader",{}),n.TextOverlayWithLogo=o(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),n.TextOverlayCenterFullBleedGradient=o(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),n.SplitScreenImgRight=o(n,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),n.AssetMiddleCenterBig=o(n,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),n.SubjectFocus=o(n,"SubjectFocus",{assetPosition:"bottom",contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),n.SplitScreenImageRightFullBleed=o(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1,shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0}),n.SplitScreenImageRightInset=o(r,"SplitScreenImageRightInset",{},{hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,isInset:!0,isTextRight:!1,showContributorImage:!1,hideHeaderDividerInMobile:!0,hasImageBottomSpacing:!1}),n.SplitScreenImageLeftFullBleed=o(r,"SplitScreenImageLeftFullBleed",{},{shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0,isTextRight:!0,showContributorImage:!1}),n.SplitScreenImageLeftInset=o(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1,hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,hideHeaderDividerInMobile:!0}),n.BusinessContentHeader=o(n,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),n.PodcastContentHeader=o(n,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),n.TextAboveCenterFullBleedVideo=o(n,"ContentHeaderFullBleedVideo",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",isFullBleedVideo:!0}),n.SplitScreenWithMultiReviewContent=o(s,"SplitScreenWithMultiReviewContent",{}),e.exports=n},46323:(e,t,i)=>{const o=i(32485),n=i(5556),a=i(96540),r=i(34187),s=i(52540),l=i(40855),d=i(55252),c=i(59525),{formatInfoSliceItems:p}=i(88722),h=i(42361),g=i(60261),{SplitScreenContentHeaderPersistentAside:u}=i(9481),{SplitScreenContentHeaderSocialIcons:m}=i(67040),b=i(35676),{trackComponent:y}=i(92716),{interactionResponse:S}=i(56187),{MultiReviewContentHeaderArtist:C,MultiReviewContentHeaderByline:v,MultiReviewContentHeaderCaption:w,MultiReviewContentHeaderDek:f,MultiReviewContentHeaderHed:T,MultiReviewContentHeaderInfoSlice:x,MultiReviewContentHeaderForMusicReview:B,MultiReviewContentHeaderRubric:k,MultiReviewContentHeaderTitleBlock:D,MultiReviewContentHeaderWrapper:I,MultiReviewContentHeaderScoreBox:E,MultiReviewContentHeaderLeadWrapper:R,MultiReviewContentHeaderArtistLink:$,MultiReviewContentHeaderGrid:L,MultiReviewContentHeaderLede:H,MultiReviewContentHeaderSlideController:A,MultiReviewContentHeaderSlideControlButton:M,MultiReviewContentHeaderHedSpanSlashes:P,ImageCaptionTextCounter:N,ImageCaptionText:O,MultiReviewContentHeaderReleaseYear:W,ImageAlbumText:_}=i(57858),{useState:V}=a,F=({artistDetails:e,className:t,contributors:i,dangerousDek:n,itemsReviewed:s,infoSliceFields:l,rubric:b,rubricVariation:F,socialMedia:G,stickySocialAnchorBottom:j={selector:".page",edge:"bottom"},stickySocialAnchorTop:U={selector:"[data-testid='MultiReviewContentHeaderWrapper']",edge:"bottom"},persistentAsideAlign:K="left"})=>{a.useEffect((()=>{(async()=>{await S(),y("MultiReviewContentHeader")})()}));const Y=r[F]||r,[q,z]=V(0),X=s?.length,Z=s[0]?.releaseYear;X>1&&delete l.label;const J=p(l);return a.createElement(I,{className:o("content-header",{[t]:t})},a.createElement(B,null,a.createElement(D,null,b&&a.createElement(k,{as:Y,...b}),a.createElement(T,null,(e=>e?.map(((t,i)=>{const o=e.length-1;return a.createElement("span",{key:i},t?.dangerousHed,i<o&&a.createElement(P,null," / "))})))(s)),e&&a.createElement($,{href:"/".concat(e?.uri)},a.createElement(C,{dangerouslySetInnerHTML:{__html:e?.name},lengthOfItems:X})),1===X&&Z&&a.createElement(W,{"data-testid":"MultiReviewContentHeaderReleaseYear"},Z)),(e=>{const t=e?.length;if(!Array.isArray(e)||t<=0)return null;const i=()=>{z(q===t-1?0:q+1)},o=()=>{z(0===q?t-1:q-1)},n=e=>{const t={ArrowLeft:o,ArrowRight:i};t[e.key]&&t[e.key]()};return a.createElement("div",null,e?.map(((e,r)=>{const{dangerousHed:s,publisher:l,releaseYear:c,musicRating:p}=e,u=0===r,m=r+1===t;return r===q&&a.createElement(R,{key:r},a.createElement(H,{sources:e?.image?.sources,altText:e?.image?.altText}),a.createElement(E,{isBestNewMusic:p?.isBestNewMusic,isBestNewReissue:p?.isBestNewReissue},a.createElement(d,{rating:p?.score,isBestNewMusic:p?.isBestNewMusic,isBestNewReissue:p?.isBestNewReissue})),t>1&&a.createElement(a.Fragment,null,a.createElement(w,null,a.createElement(N,null,r+1," of ",t,a.createElement(O,null,a.createElement(_,null,s),a.createElement(g,null),l,a.createElement(g,null),c))),a.createElement(A,{role:"presentation",onKeyDown:n,isBestNewMusic:p?.isBestNewMusic,isBestNewReissue:p?.isBestNewReissue},a.createElement(M,{ariaLabel:"prevSlide",isBackArrow:!0,onClickHandler:o,label:"",inputKind:"button",isIconButton:!0,isDisabled:u,isDisabledStyle:u,ButtonIcon:h}),a.createElement(M,{ariaLabel:"nextSlide",onClickHandler:i,label:"",inputKind:"button",isIconButton:!0,isDisabled:m,isDisabledStyle:m,ButtonIcon:h}))))})))})(s)),i&&a.createElement(v,{contributors:i,bylineVariation:"Item",lengthOfItems:X}),J.length>0&&a.createElement(L,null,a.createElement(x,null,a.createElement(c,{items:J}))),n&&a.createElement(L,null,a.createElement(f,{dangerouslySetInnerHTML:{__html:n}})),G&&a.createElement(u,{align:K,attributes:{shouldFadeOnMove:!0},anchorBottom:j,anchorTop:U,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(m,{...G,bookmarkTrackingType:"sticky",className:"social-icons--share"})))};F.propTypes={artistDetails:n.object,className:n.string,contributors:n.shape(s.propTypes.contributors),dangerousDek:n.string,infoSliceFields:n.object,itemsReviewed:n.array,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),rubric:n.shape(r.propTypes),rubricVariation:n.string,socialMedia:n.shape(b.propTypes),stickySocialAnchorBottom:l.propTypes.anchorBottom,stickySocialAnchorTop:l.propTypes.anchorTop},F.displayName="MultiReviewContentHeader",e.exports=F},55182:(e,t,i)=>{e.exports=i(46323)},57858:(e,t,i)=>{const{default:o,css:n}=i(75999),{BaseText:a,BaseLink:r}=i(76955),{BREAKPOINTS:s}=i(96472),{calculateSpacing:l,getColorToken:d,getTypographyStyles:c,minScreen:p,getColorStyles:h}=i(26865),g=i(52540),u=i(86659),m=i(86157),{RubricLink:b}=i(6613),{ResponsiveClipWrapper:y}=i(91783),{ResponsiveImageContainer:S}=i(7228),{GridItem:C}=i(40653),{InfoSliceList:v}=i(52327),w=i(73730),{BestNewMusicText:f,ScoreCircle:T,ScoreBoxWrapper:x}=i(62096),{BylineLink:B}=i(74423),k="0.4s",D="32px",I=o(a).withConfig({displayName:"MultiReviewContentHeaderHed"})`
  margin: 0;
  padding: ${l(4)} 0;
  font-style: italic;
  ${p(s.sm)} {
    padding: ${l(2)} 0;
  }
  ${({theme:e})=>h(e,"color","colors.consumption.lead.standard.heading")}
`;I.defaultProps={as:"h1",typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const E=o("span").withConfig({displayName:"MultiReviewContentHeaderHedSpanSlashes"})`
  ${({theme:e})=>h(e,"color","colors.consumption.body.standard.divider")}
`,R=o(a).withConfig({displayName:"MultiReviewContentHeaderArtist"})`
  margin: 0;

  ${({lengthOfItems:e})=>e&&"{font-size : 28px;}"}

  ${({theme:e})=>h(e,"color","colors.consumption.lead.standard.description")}
`;R.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const $=o(r).withConfig({displayName:"MultiReviewContentHeaderArtistLink"})`
  display: inline-block;
  margin-top: ${l(2)};
  margin-bottom: ${l(2)};
  vertical-align: middle;

  &:link {
    text-decoration: none;
  }
`,L=o(a).withConfig({displayName:"MultiReviewContentHeaderDek"})`
  padding-top: ${l(1)};
  padding-bottom: ${l(3)};
  text-align: center;
`;L.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const H=o.div.withConfig({displayName:"MultiReviewContentHeaderInfoSlice"})`
  align-items: center;
  padding-top: ${l(0)};

  ${v} {
    justify-content: center;
    border-width: 0;
  }
`,A=o.div.withConfig({displayName:"MultiReviewContentHeaderTitleBlock"})`
  ${`\n  padding-right: ${l(3)};\n  padding-left: ${l(3)};\n\n  ${p(s.xl)} {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  ${p(s.md)} {\n    padding-right: 0;\n  }\n`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;

  > * {
    max-width: 500px;
  }
`,M=o.div.withConfig({displayName:"MultiReviewContentHeaderLeadWrapper"})`
  display: grid;
  grid-template-columns: repeat(12, 2fr);
  align-items: left;
  justify-content: center;
  text-align: center;

  ${y} {
    display: block;
  }
`,P=o.div.withConfig({displayName:"MultiReviewContentHeaderScoreBox"})`
  grid-column: 8 / span 5;
  align-self: center;
  ${p(s.sm)} {
    margin-bottom: 0;
    padding-left: ${l(2.5)};
    ${T} {
      margin-right: 3px;
      margin-bottom: 0;
      margin-left: 3px;
      width: 111px;
      height: 111px;
    }
    ${x} {
      width: max-content;
    }
  }
  ${p(s.md)} {
    margin-bottom: ${l(0)};
    padding-left: ${l(2.5)};
  }
  ${p(s.lg)} {
    margin-bottom: ${l(0)};
    padding-left: ${l(4)};
    ${T} {
      width: 134px;
      height: 134px;
    }
  }

  ${T} {
    margin-bottom: 0;
  }

  ${f} {
    width: auto;
    height: 26px;
  }

  ${({isBestNewMusic:e,isBestNewReissue:t})=>(e||t)&&n`
      ${x} {
        svg {
          margin-bottom: 0;
          margin-left: ${l(0)};
        }
      }
      ${T} {
        margin-top: 16px;
        margin-bottom: ${l(2)};
        padding-bottom: 0;
      }
      ${p(s.sm)} {
        ${T} {
          margin-top: 12px;
          margin-bottom: 12px;
        }
      }
    `}
`,N=o(g).withConfig({displayName:"MultiReviewContentHeaderByline"})`
  padding-bottom: ${l(1)};

  ${c("typography.definitions.globalEditorial.accreditation-feature")}

  ${B} {
    ${({lengthOfItems:e})=>e>1&&n`
        ${c("typography.definitions.globalEditorial.accreditation-core")}
      `}
  }
`,O=o.div.withConfig({displayName:"MultiReviewContentHeaderCaption"})`
  display: flex;
  grid-column: 1 / span 7;
  margin: 0;
  margin-bottom: ${l(4)};
  padding-top: ${l(1)};
  text-align: left;

  svg {
    width: ${l(2.5)};
    height: ${l(2.5)};
    vertical-align: bottom;
  }

  ${p(s.xxl)} {
    grid-column: 3 / span 5;
  }

  ${p(s.xl)} {
    grid-column: 2 / span 6;
  }
`,W=o.div.withConfig({displayName:"MultiReviewContentHeaderRubric"})`
  &:only-child {
    margin-right: 0;
  }

  display: inline-flex;
  margin: ${l(4)} ${l(.5)} 0
    ${l(.5)};

  ${({theme:e})=>c(e,"typography.definitions.globalEditorial.context-primary")}

  ${p(s.md)} {
    margin: 0 ${l(2)} 0 0;
  }

  ${b} {
    vertical-align: baseline;
  }
`,_=o(m).withConfig({displayName:"MultiReviewContentHeaderLede"})`
  grid-column: 1 / span 7;

  ${p(s.xxl)} {
    grid-column: 3 / span 5;
  }

  ${p(s.xl)} {
    grid-column: 2 / span 6;
  }

  .responsive-image {
    width: 100%;
    height: 100%;
  }

  ${S} {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`,V=o(u.EvenAny).withConfig({displayName:"MultiReviewContentHeaderForMusicReview"})`
  border-bottom: 1px solid
    ${d("colors.consumption.lead.standard.divider")};

  &.grid-even-any {
    ${p(s.sm)} {
      ${C} {
        :nth-of-type(2) {
          margin-top: ${l(2)};
          margin-right: ${l(3)};
          margin-left: ${l(3)};
        }
      }
      ${_} {
        ${S} {
          object-fit: contain;
        }
      }
    }
    ${p(s.lg)} {
      ${C} {
        :nth-of-type(2) {
          margin-right: 0;
        }
      }
    }

    ${p(s.md)} {
      ${C} {
        :nth-of-type(2) {
          margin-top: ${l(4)};
          margin-left: 0;
        }
      }
      grid-template-columns: 50% auto;
    }

    ${p("980px")} {
      grid-template-columns: 50% auto;
    }
  }
`,F=o(u.WithMargins).withConfig({displayName:"MultiReviewContentHeaderGrid"})`
  > ${C} {
    grid-column: 1 / -1;
    ${p(s.md)} {
      grid-column: 2 / -2;
    }
  }
`,G=o.header.withConfig({displayName:"MultiReviewContentHeaderWrapper"})``,j=o.div.withConfig({displayName:"MultiReviewContentHeaderSlideController"})`
  display: inline-block;
  grid-column: 8 / span 3;
  margin-bottom: ${l(4)};
  margin-left: auto;
  padding-top: ${l(1)};
  text-align: center;

  ${p(s.sm)} {
    grid-column: 10 / span 3;
  }

  ${p(s.lg)} {
    grid-column: 9 / span 3;
  }

  ${p(s.xl)} {
    grid-column: 8 / span 3;
  }

  ${p(s.xxl)} {
    margin-right: ${l(3)};
    padding-top: ${l(0)};
  }
`,U=o(w.Utility).withConfig({displayName:"MultiReviewContentHeaderSlideControlButton"})`
  display: inline-block;
  /* This +10 is to offset the lag that happens when transitioning a svg fill-color  */
  transition: transform ${k+10} ease-in-out;
  border: 1px solid;
  ${({theme:e})=>h(e,"border-color","colors.interactive.base.black")};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: ${D};
  min-width: ${D};
  height: ${D};

  &.button--utility + &.button--utility {
    margin-top: 0;
  }

  && {
    &:focus,
    &:hover,
    &:active {
      border-width: 1px;
      background-color: transparent;
    }

    ${({isDisabled:e})=>e&&`\n      opacity: 0.8;\n      ${({theme:e})=>h(e,"border-color","colors.interactive.base.light")};\n      pointer-events: none;\n\n      svg {\n        ${({theme:e})=>h(e,"fill","colors.interactive.base.light")};\n      }\n    `}
  }

  &:focus,
  &:hover {
    border: 1px solid;
    background-color: none;

    ${({theme:e})=>h(e,"border-color","colors.interactive.base.brand-primary")};

    svg {
      ${({theme:e})=>h(e,"fill","colors.interactive.base.brand-primary")};
    }
  }

  &&:active,
  &&:focus,
  &&:hover {
    background-color: none;
  }

  &&:disabled {
    opacity: 0.8;
    border-width: 1px;
    background-color: transparent;

    svg {
      ${({theme:e})=>h(e,"fill","colors.interactive.base.light")};
    }
  }

  svg {
    position: relative;
    right: -1px; /* Small offset from icon's center */
    transform: scale(0.6);
    transition: fill ${k} ease-in-out;

    height: ${l(3)};
    ${({theme:e})=>h(e,"fill","colors.interactive.base.black")};
  }

  ${({isBackArrow:e})=>e?"transform: rotate(180deg) scale(0.6);":`margin-left: ${l(2)}`}
`,K=o(a).withConfig({displayName:"ImageCaptionTextCounter"})`
  ${({theme:e})=>c(e,"typography.definitions.globalEditorial.accreditation-core")}

  ${({theme:e})=>h(e,"color","colors.consumption.lead.standard.context-signature")}
`,Y=o("span").withConfig({displayName:"ImageCaptionText"})`
  padding-left: 5px;
  ${({theme:e})=>c(e,"typography.definitions.globalEditorial.accreditation-core")}

  ${({theme:e})=>h(e,"color","colors.consumption.lead.standard.context-tertiary")}
`,q=o("span").withConfig({displayName:"ImageAlbumText"})`
  font-style: italic;
`,z=o.time.withConfig({displayName:"MultiReviewContentHeaderReleaseYear"})`
  ${c("typography.definitions.globalEditorial.context-tertiary")};
`;e.exports={MultiReviewContentHeaderArtist:R,MultiReviewContentHeaderByline:N,MultiReviewContentHeaderCaption:O,MultiReviewContentHeaderDek:L,MultiReviewContentHeaderHed:I,MultiReviewContentHeaderInfoSlice:H,MultiReviewContentHeaderForMusicReview:V,MultiReviewContentHeaderRubric:W,MultiReviewContentHeaderTitleBlock:A,MultiReviewContentHeaderWrapper:G,MultiReviewContentHeaderScoreBox:P,MultiReviewContentHeaderLeadWrapper:M,MultiReviewContentHeaderArtistLink:$,MultiReviewContentHeaderGrid:F,MultiReviewContentHeaderLede:_,MultiReviewContentHeaderSlideController:j,MultiReviewContentHeaderSlideControlButton:U,MultiReviewContentHeaderHedSpanSlashes:E,ImageCaptionTextCounter:K,ImageCaptionText:Y,MultiReviewContentHeaderReleaseYear:z,ImageAlbumText:q}},70132:(e,t,i)=>{const o=i(5556),n=i(32485),a=i(96540),{useIntl:r}=i(37243),s=i(83558),l=i(73730),d=i(54330),{trackComponent:c}=i(92716),{interactionResponse:p}=i(56187),h=i(45905).A,{ReviewRatingDataLabel:g,ReviewRatingDataWrapper:u,ReviewRatingDataValue:m,ReviewRatingDataExplainer:b,ReviewRatingDataExplainerModal:y,ReviewRatingDataExplainerModalList:S,ReviewRatingDataExplainerModalListRating:C,ReviewRatingDataExplainerModalListDescribe:v}=i(63815),w=({className:e,rating:t=0,ratingList:i=[]})=>{a.useEffect((()=>{(async()=>{await p(),c("ReviewRatingData")})()}),[]);const o=r(),[w,f]=a.useState(!0),T=()=>{f(!w)},x=a.createElement(y,{className:"review-rating-data__rating-explainer-modal"},i.map(((e,t)=>a.createElement(S,{key:e},a.createElement(C,{as:"span"},t+1),a.createElement(v,{as:"span"},e)))));return a.createElement(u,{className:n("review-rating-data",e)},a.createElement(g,{className:"review-rating-data__label"},o.formatMessage(h.dataLabel)),a.createElement(m,null,t,"/10"),a.createElement(b,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:o.formatMessage(h.buttonLabel),onClickHandler:T,role:"button"}),!w&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:T,shouldUseArrow:!0},x)))};w.propTypes={className:o.string,rating:o.number,ratingList:o.array},w.displayName="ReviewRatingData",e.exports=w},94149:(e,t,i)=>{const{asConfiguredComponent:o}=i(12892),n=i(70132);e.exports=o(n,"ReviewRatingData")},63815:(e,t,i)=>{const o=i(75999).default,{BaseText:n}=i(76955),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=i(26865),l=o.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=o(n).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=o(n).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=o.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,h=o.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,g=o.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,u=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,m=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:h,ReviewRatingDataExplainerModalList:g,ReviewRatingDataExplainerModalListRating:u,ReviewRatingDataExplainerModalListDescribe:m}},45905:(e,t,i)=>{const o=i(37243);t.A=(0,o.defineMessages)({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},66441:(e,t,i)=>{const o=i(96540),n=i(5556),a=i(59098),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=i(9481),l=({captionCredit:e,className:t,isCNEVideo:i,lede:n,socialMedia:l})=>{if(!n)return null;if(i){if(!n.scriptEmbedUrl)return null;let e=null;"cnevideo"===n.modelName&&n.cneVideoOverrides&&Object.keys(n.cneVideoOverrides).length&&(e={...n.cneVideoOverrides});const i=e?{shouldAutoplay:Boolean(!e.disableAutoplay),shouldMute:Boolean(e.muted),shouldPlayContinuously:Boolean(e.continuousPlay),isStickyType:Boolean(e.sticky),shouldDisableAds:Boolean(e.disableAds),shouldLoopVideo:Boolean(e.loopVideo)}:{shouldAutoplay:!0};return o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(a,{hasMargins:!1,...i,scriptUrl:n.scriptEmbedUrl}))}return o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(r,{...n}),e,l)};l.propTypes={captionCredit:n.object,className:n.string,isCNEVideo:n.bool,lede:n.object,socialMedia:n.object},e.exports=l},44879:(e,t,i)=>{const o=i(32485),n=i(5556),a=i(96540),r=i(92437).default,{useIntl:s}=i(37243),l=i(7350),d=i(76707).A,{mapSourcesToSegmentedSources:c}=i(52009),p=i(66441),h=i(73275),g=i(49599),u=i(34187),m=i(59525),b=i(55252),y=i(52540),S=i(40855),C=i(35676),v=i(21093),w=i(94409),{formatInfoSliceItems:f}=i(88722),T=i(77554),{useNativeShare:x}=i(90072),{getThemedBylineVariation:B}=i(27053),{getOverrideBehaviour:k}=i(68089),{trackComponent:D}=i(92716),{interactionResponse:I}=i(56187),{BookmarkIcon:E}=i(72964),{SplitScreenContentHeaderArtist:R,SplitScreenContentHeaderArtistSlash:$,SplitScreenContentHeaderArtistWrapper:L,SplitScreenContentHeaderByline:H,SplitScreenContentHeaderCaption:A,SplitScreenContentHeaderContributorImage:M,SplitScreenContentHeaderDek:P,SplitScreenContentHeaderDekDown:N,SplitScreenContentHeaderDivider:O,SplitScreenContentHeaderHed:W,SplitScreenContentHeaderMain:_,SplitScreenContentHeaderInfoSlice:V,SplitScreenContentHeaderForMusicReview:F,SplitScreenContentHeaderNativeShareButton:G,SplitScreenContentHeaderPublishDate:j,SplitScreenContentHeaderRating:U,SplitScreenContentHeaderRubric:K,SplitScreenContentHeaderRubricIssueDate:Y,SplitScreenContentHeaderSignageRubric:q,SplitScreenContentHeaderSocialShare:z,SplitScreenContentHeaderTitleBlock:X,SplitScreenContentHeaderWrapper:Z,SplitScreenContentHeaderScoreBox:J,SplitScreenContentHeaderLeadWrapper:Q,SplitScreenContentHeaderArtistLink:ee,SplitScreenContentHeaderGrid:te,SplitScreenContentHeaderPersistentAside:ie,SplitScreenContentHeaderReleaseYear:oe,SplitScreenContentHeaderLeadOverride:ne,SplitScreenContentHeaderOffersCTA:ae}=i(9481),{SplitScreenContentHeaderSocialIcons:re}=i(67040),{doHideBookmark:se,doDisplayBookmark:le}=i(69836),{BREAKPOINTS:de}=i(96472),ce=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:i,hideContributors:o,hideIssueDate:n,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:h,rubricVariation:g,hideRubric:m,themedBylineVariation:b})=>{const y=u[g]||u,S=u.Item,C=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},C&&!o&&"top"===t&&a.createElement(H,{contributors:e,bylineVariation:b,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:i}),h&&!m&&a.createElement(K,{as:y,...h}),!n&&s&&a.createElement(Y,{as:S,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(j,{"data-testid":"ContentHeaderPublishDate"},c))};ce.propTypes={contributors:n.object,contributorsPosition:n.oneOf(["top","bottom"]),hasInvertedBylineLink:n.bool,hideContributors:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(u.propTypes),rubricVariation:n.string,themedBylineVariation:n.string};const pe=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(q,{name:e})):null;pe.propTypes={shouldDisplaySignage:n.bool,signage:n.string};const he=(e,t,i,o,n,r,s,l)=>n&&a.createElement(z,{...n,hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIcons:t,hideSocialIconsOnMobile:i,socialIconsToHide:o,socialMediaPositionInMobile:r,...l&&{hasSplitScreenSocialShareReduceTopSpacing:s}}),ge=(e,t)=>(t?.caption||t?.credit)&&!e&&a.createElement(te,null,a.createElement(A,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:ue,useEffect:me}=a,be=({artists:e,brandSlug:t,captionPosition:i,className:n,contentAlign:h,config:u={adsConfig:{contentHeaderRubricName:void 0}},contributorImage:y,dangerousDek:S,dangerousHed:C,shouldRemoveBylineTopMargin:v,hasContributorImageBackground:A,showFullHeaderViewInMobile:K,hasInvertedBylineLink:Y,hasBottomSpacingOnMobileHeader:q,hasMargin:z,hasSplitScreenSocialShareReduceTopSpacing:be,hasStickySocialIcons:ye,hasNativeShareButton:Se,hideContributorTitle:Ce,hideContributors:ve,hideDangerousDek:we,hideHeaderDividerInMobile:fe,hasImageBottomSpacing:Te,hideIssueDate:xe,hidePublishDate:Be,hideRubric:ke,socialIconsToHide:De,hideSocialIcons:Ie,hideSocialIconsOnMobile:Ee,hideCaption:Re,imageAlignment:$e,infoSliceFields:Le,interactiveOverride:He,isInset:Ae,isMusicReview:Me,isTextRight:Pe,isTrackReview:Ne,issueDate:Oe,issueDatePostfix:We,issueLink:_e,isRatingClickable:Ve,isPeritextEnabled:Fe,isSplitScreenArtistLarge:Ge,rubric:je,rubricVariation:Ue,contributors:Ke,contributorsPosition:Ye,bylineVariation:qe,persistentAsideAlign:ze,publishDate:Xe,publishDatePosition:Ze,lede:Je,ledeContentAlign:Qe,modifiedDate:et,musicRating:tt,offers:it,offersCTA:ot,shouldEnableNativeShareOnDesktop:nt,shouldFitToViewport:at,showBookmarked:rt,shouldHeaderFitToViewport:st,showContentDivider:lt,showContributorImage:dt,showHeaderDivider:ct,socialDescription:pt,socialMedia:ht,socialMediaPositionInMobile:gt,socialTitle:ut,stickySocialAnchorBottom:mt,stickySocialAnchorTop:bt,theme:yt,rating:St,signage:Ct,shouldDisplaySignage:vt,showReviewLink:wt,textAlign:ft,shouldAlignCenterWhenNoCaption:Tt})=>{je&&(je.name=u.adsConfig?.contentHeaderRubricName||je.name);const[xt,Bt]=a.useState("100vw");a.useEffect((()=>{if(Ae){const e=`(min-width: ${de.md})`;if(window.matchMedia(e).matches){const e=window.visualViewport?.width;e&&Bt(`${e}px`)}}(async()=>{await I(),D("SplitScreenContentHeader")})()}),[Ae]);const kt="CTA-firework"===k(He),Dt=B({bylineVariation:qe,theme:yt}),{showNativeShareButton:It,pageUrl:Et}=x(Se,nt),{score:Rt,isBestNewMusic:$t,isBestNewReissue:Lt}=tt,Ht=f(Le),At=Le?.releaseYear,Mt=(e=>{if(!e)return;const t={...e};return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=c(e.sources)),t})(Je),Pt="cnevideo"===Je?.modelName,Nt=!Je||Pt,{rating:Ot,count:Wt}=St||{},_t=Me?F:_,{formatMessage:Vt}=s(),Ft={},Gt=ue();"belowImage"===i&&(Ft.captionCredit=ge(Re,Je)),"inLeadWrapperBelowImg"===gt&&(Ft.socialMedia=he(ye,Ie,Ee,De,ht,gt,K));const jt=()=>{(e=>{const t=e.current&&e.current.offsetTop,i=window.pageYOffset;return Math.abs(i)>Math.abs(t)})(Gt)?le():se()};me((()=>{const e=l(jt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}));const Ut=et&&{datetime:et},Kt=Ae&&Mt?.segmentedSources?.lg[0]?.aspectRatio,Yt=Kt&&-1!==(qt=Kt).indexOf(":")?qt.split(":"):null;var qt;const zt=Tt&&(!Je?.caption||""===Je?.caption);return a.createElement(Z,{className:o("content-header",{[n]:n}),contentHeaderTheme:yt,isFullWidth:Nt,isTextRight:Pe,isInset:Ae,imageAlignment:$e,ledeContentAlign:Qe,shouldFitToViewport:!at,isMusicReview:Me,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:ct,socialMediaPositionInMobile:gt,hideSocialIconsOnMobile:Ee,hideSocialIcons:Ie,shouldHeaderFitToViewport:st,captionPosition:i,hidePublishDate:Be,mediaContentType:Mt?.contentType||"",hasInvertedBylineLink:Y,hasBottomSpacingOnMobileHeader:q,hasMargin:z,imgAspectRatioForDesktop:Yt,viewportWidth:xt,hasLedeTextAlignCenterForMobile:zt,hasPublishDateBottomPadding:K&&(!ht||Ie||Ee),...K&&{hasImageBottomSpacing:Te,hideHeaderDividerInMobile:fe}},a.createElement(_t,{shouldFitToViewport:!at},a.createElement(X,{contentAlign:h,textAlign:ft,hasBottomSpacingOnMobileHeader:q},a.createElement(pe,{signage:Ct,shouldDisplaySignage:vt}),a.createElement(ce,{contributors:Ke,contributorsPosition:Ye,rubric:je,rubricVariation:Ue,hideContributors:ve,hideIssueDate:xe,hidePublishDate:Be,issueDate:Oe,issueDatePostfix:We,issueLink:_e,publishDate:Xe,publishDatePosition:Ze,hideRubric:ke,hasInvertedBylineLink:Y,themedBylineVariation:Dt,shouldRemoveBylineTopMargin:v}),Fe?a.createElement(W,{"data-testid":"ContentHeaderHed",isMusicReview:Me},a.createElement(g,{value:{marks:{"small-caps":void 0}}},a.createElement(r,{value:C}))):a.createElement(W,{dangerouslySetInnerHTML:{__html:C},"data-testid":"ContentHeaderHed",isMusicReview:Me}),kt&&a.createElement(ne,{dangerouslySetInnerHTML:{__html:He.markup}}),lt&&a.createElement(O,{ledeContentAlign:Qe,hasLedeTextAlignCenterForMobile:zt}),e&&Me?a.createElement(L,{isMusicReview:Me},0===e.length&&a.createElement(R,{isSplitScreenArtistLarge:Ge},Vt(d.variousArtists)),e.map(((t,i)=>a.createElement(a.Fragment,{key:i},a.createElement(ee,{key:i,href:"/".concat(t.uri)},a.createElement(R,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:Ge})),!(i===e.length-1)&&a.createElement($,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:Ge}))))):!we&&S&&a.createElement(P,{dangerouslySetInnerHTML:{__html:S}}),dt&&y&&a.createElement(M,{...y,sizes:"66px",hasContributorImageBackground:A}),Ke&&!ve&&"bottom"===Ye&&a.createElement(H,{contributors:Ke,bylineVariation:Dt,isCompact:!1,hasInvertedBylineLink:Y,...K&&{shouldRemoveBylineTopMargin:v}}),!Be&&"bottom"===Ze&&a.createElement(j,{"data-testid":"ContentHeaderPublishDate",hasPublishDateBottomPadding:K&&(!ht||Ie||Ee),...Ut},Xe),(Me||Ne)&&At&&a.createElement(oe,{"data-testid":"SplitScreenContentHeaderReleaseYear"},At),rt&&a.createElement("div",{ref:Gt},a.createElement(E,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!Ot&&!!Wt&&a.createElement(U,{averageRatingCount:Math.round(10*Ot)/10,brandSlug:t,hasBorderTop:!0,showReviewLink:wt,link:{label:Vt(d.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=w(t);t?.focus(),window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:Wt,isRatingClickable:Ve}),it?.length&&a.createElement(ae,{hideTopDisclaimerOnMobile:!0,showHeaderButton:!0,ctaText:ot,offers:it}),It?a.createElement(G,null,a.createElement(T,{shareData:{url:Et,title:ut,text:pt}})):he(ye,Ie,Ee,De,ht,gt,be,K)),a.createElement(Q,{isMusicReview:Me},a.createElement(p,{lede:Mt,isCNEVideo:Pt,...Ft}),Me&&a.createElement(J,null,a.createElement(b,{rating:Rt,isBestNewMusic:$t,isBestNewReissue:Lt,isTrackReview:Ne})))),"belowHeader"===i&&ge(Re,Je),Ke&&ve&&a.createElement(H,{contributors:Ke,bylineVariation:Ce?"Item":qe,isCompact:!1,isMusicReview:Me}),Ht.length>0&&a.createElement(te,null,a.createElement(V,null,a.createElement(m,{items:Ht,isMusicReview:Me}))),!we&&Me&&S&&a.createElement(te,null,a.createElement(N,{dangerouslySetInnerHTML:{__html:S}})),!It&&ye&&ht&&a.createElement(ie,{align:ze,attributes:{shouldFadeOnMove:!0},anchorBottom:mt,anchorTop:bt,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(re,{...ht,bookmarkTrackingType:"sticky",className:"social-icons--share"})))};be.propTypes={artists:n.array,brandSlug:n.string,bylineVariation:n.string,captionPosition:n.oneOf(["belowHeader","belowImage"]),className:n.string,config:n.object,contentAlign:n.oneOf(["center","left"]),contributorImage:n.shape(h.propTypes),contributors:n.shape(y.propTypes.contributors),contributorsPosition:n.oneOf(["top","bottom"]),dangerousDek:n.string,dangerousHed:n.oneOfType([n.string,n.object]).isRequired,hasBottomSpacingOnMobileHeader:n.bool,hasContributorImageBackground:n.bool,hasImageBottomSpacing:n.bool,hasInvertedBylineLink:n.bool,hasMargin:n.bool,hasNativeShareButton:n.bool,hasSplitScreenSocialShareReduceTopSpacing:n.bool,hasStickySocialIcons:n.bool,hideCaption:n.bool,hideContributors:n.bool,hideContributorTitle:n.bool,hideDangerousDek:n.bool,hideHeaderDividerInMobile:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,imageAlignment:n.oneOf(["center","top","left","right","bottom"]),infoSliceFields:n.object,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isInset:n.bool,isMusicReview:n.bool,isPeritextEnabled:n.bool,isRatingClickable:n.bool,isSplitScreenArtistLarge:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,isTextRight:n.bool,isTrackReview:n.bool,lede:n.oneOfType([n.shape(h.propTypes)]),ledeContentAlign:n.oneOf(["left","center"]),modifiedDate:n.string,musicRating:n.object,offers:n.array,offersCTA:n.string,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),publishDate:n.string.isRequired,publishDatePosition:n.oneOf(["top","bottom"]),rating:n.shape(v.propTypes),rubric:n.shape(u.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplaySignage:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldFitToViewport:n.bool,shouldHeaderFitToViewport:n.bool,shouldRemoveBylineTopMargin:n.bool,showBookmarked:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showFullHeaderViewInMobile:n.bool,showHeaderDivider:n.bool,showReviewLink:n.bool,signage:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(C.propTypes),socialMediaPositionInMobile:n.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:n.string,stickySocialAnchorBottom:S.propTypes.anchorBottom,stickySocialAnchorTop:S.propTypes.anchorTop,textAlign:n.oneOf(["left","center"]),theme:n.oneOf(["standard","inverted","special"])},be.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasBottomSpacingOnMobileHeader:!1,hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldAlignCenterWhenNoCaption:!1,shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showFullHeaderViewInMobile:!1,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},be.displayName="SplitScreenContentHeader",e.exports=be},84231:(e,t,i)=>{e.exports=i(44879)},76707:(e,t,i)=>{const o=i(37243);t.A=(0,o.defineMessages)({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},88722:e=>{const t={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const i=[];return Object.keys(e).forEach((o=>{e[o]&&e[o].length&&t[o]&&i.push({key:t[o],value:e[o]})})),i}}},15571:(e,t,i)=>{const o=i(5556),n=i(96540),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceHed:c,InfoSliceWrapper:p}=i(52327),{trackComponent:h}=i(92716),{interactionResponse:g}=i(56187),u=({className:e,items:t,isMusicReview:i,infoSliceHed:o,variations:u,variationName:m})=>{if(n.useEffect((()=>{(async()=>{await g(),h("InfoSlice",m)})()}),[m]),!t||0===t.length)return null;const{shouldContentWrap:b,hasCustomPadding:y,showHed:S}=u;return n.createElement(p,{className:e,"data-testid":"InfoSliceList"},S&&o&&n.createElement(c,null,o),n.createElement(d,{isMusicReview:i,hasCustomPadding:y},t.map((e=>{const{key:t,value:i}=e;return t&&i?n.createElement(l,{hasCustomPadding:y,key:t.toString().toLowerCase()},n.createElement(s,{hasCustomPadding:y},n.createElement(r,{shouldContentWrap:b},t),n.createElement(a,null,i))):null}))))};u.propTypes={className:o.string,infoSliceHed:o.string,isMusicReview:o.bool,items:o.arrayOf(o.shape({key:o.string,value:o.string})),variationName:o.string,variations:o.shape({shouldContentWrap:o.bool,hasCustomPadding:o.bool,showHed:o.bool})},u.defaultProps={isMusicReview:!1,variations:{shouldContentWrap:!1,hasCustomPadding:!1,showHed:!1}},e.exports=u},59525:(e,t,i)=>{e.exports=i(13571)},52327:(e,t,i)=>{const o=i(75999).default,{calculateSpacing:n,getColorStyles:a}=i(26865),{BaseText:r}=i(76955),{BREAKPOINTS:s}=i(96472),{maxThresholds:l}=i(99906),d=o(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=o(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${n(1)};
  vertical-align: top;
  ${({shouldContentWrap:e})=>e&&"white-space: nowrap;"}
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=o.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${n(.5)} 0;
`,h=o.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    ${({hasCustomPadding:e})=>!e&&"margin: 0 auto;"}
  }
  @media (min-width: ${s.md}) {
    margin-right: ${n(3)};

    :last-child {
      margin-right: ${n(0)};
    }
  }
`,g=o.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  padding: ${n(1.5)} 0;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  ${({hasCustomPadding:e})=>e&&`\n    padding: ${n(2)} 0 ${n(1)} 0;\n  `}
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,u=o(r).withConfig({displayName:"InfoSliceHed"})`
  padding-bottom: ${n(2)};
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
`;u.defaultProps={as:"h2",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const m=o.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:h,InfoSliceList:g,InfoSliceHed:u,InfoSliceWrapper:m}},13571:(e,t,i)=>{const{asVariation:o}=i(81372),n=i(15571);n.displayName="InfoSlice",n.Default=o(n,"Default",{}),n.WithHed=o(n,"WithHed",{shouldContentWrap:!0,hasCustomPadding:!0,showHed:!0}),e.exports=n},50295:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const o=i(96540),n=i(5556),{SvgWrapper:a,SvgStyle:r}=i(62096);t.BestNewMusicArrows=e=>o.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},o.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},o.createElement("g",null,o.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),o.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),o.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:n.bool,isBestBoth:n.bool,theme:n.string}},71145:(e,t,i)=>{const o=i(96540),{useIntl:n}=i(37243),a=i(5556),{BestNewMusicArrows:r}=i(50295),s=i(63314).A,l=i(49235),{trackComponent:d}=i(92716),{interactionResponse:c}=i(56187),{BestNewMusicText:p,Rating:h,ScoreBoxWrapper:g,ScoreCircle:u}=i(62096),m=({rating:e,isBestNewMusic:t=!1,isBestNewReissue:i=!1,palette:a="standard",isTrackReview:m})=>{o.useEffect((()=>{(async()=>{await c(),d("ScoreBox")})()}),[]);const{formatMessage:b}=n(),y=m&&t;if(m&&!t)return null;const S=e<10?Number(e).toFixed(1):e,C=t||i,v=t&&i;return o.createElement(l,{palette:a},o.createElement(g,null,C&&o.createElement(r,{isBestBoth:v,isBest:C}),!y&&o.createElement(u,{isBest:C,isBestBoth:v},o.createElement(h,{isBest:C,isBestBoth:v},S)),C&&o.createElement(p,{isBestBoth:v,isBest:C},!y&&t&&o.createElement("div",null," ",b(s.BestNewMusic)," "),!y&&i&&o.createElement("div",null," ",b(s.BestNewReissue)),y&&o.createElement("div",null," ",b(s.BestNewTrack)))))};m.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},e.exports=m},55252:(e,t,i)=>{e.exports=i(71145)},62096:(e,t,i)=>{const{default:o}=i(75999),{BaseText:n}=i(76955),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(26865),l=o.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=o.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=o(n).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=o(n).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,h=o.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,g=o.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:h,SvgWrapper:g}},63314:(e,t,i)=>{const o=i(37243);t.A=(0,o.defineMessages)({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},69831:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LineBreak=void 0;const n=o(i(75999));t.LineBreak=n.default.br.withConfig({displayName:"LineBreak"})``},49599:(e,t,i)=>{const o=i(96540),n=i(5556),a=i(92437).ComponentProvider,{Italic:r}=i(5432),{Bold:s}=i(26815),{SmallCaps:l}=i(92924),{Strikethrough:d}=i(80645),{Subscript:c}=i(69955),{Superscript:p}=i(70866),{LineBreak:h}=i(69831),g={blocks:{"line-break":h},marks:{italic:r,bold:s,"small-caps":l,strikethrough:d,subscript:c,superscript:p}},u=({value:e={},children:t})=>{const i={...g,...e,blocks:{...g.blocks,...e.blocks},marks:{...g.marks,...e.marks}};return o.createElement(a,{value:i},t)};u.propTypes={children:n.node.isRequired,value:n.object},e.exports=u},26815:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Bold=void 0;const n=o(i(75999));t.Bold=n.default.strong.withConfig({displayName:"Bold"})`
  font-weight: bold;
`},5432:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Italic=void 0;const n=o(i(75999));t.Italic=n.default.em.withConfig({displayName:"Italic"})`
  font-style: italic;
`},92924:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SmallCaps=void 0;const n=o(i(75999));t.SmallCaps=n.default.em.withConfig({displayName:"SmallCaps"})`
  font-style: inherit;
  font-variant: all-small-caps;
`},80645:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Strikethrough=void 0;const n=o(i(75999));t.Strikethrough=n.default.del.withConfig({displayName:"Strikethrough"})``},69955:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Subscript=void 0;const n=o(i(75999));t.Subscript=n.default.sub.withConfig({displayName:"Subscript"})``},70866:function(e,t,i){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Superscript=void 0;const n=o(i(75999));t.Superscript=n.default.sup.withConfig({displayName:"Superscript"})``},12969:(e,t,i)=>{const o=i(96540),n=i(20312),a=i(32485),r=i(78659),s=i(38221),l=i(24713),d=i(42426),c=i(24208),{useIntl:p}=i(37243),h=i(65780).A,g=i(82185),u=i(97723),m=i(76399),{trackComponent:b}=i(92716),{trackNavigationEvent:y}=i(14307),{GalleryEmbedContainer:S,LightboxCloseButtonIcon:C,LightboxGlobalStyles:v,LightboxSlidesWrapper:w,LightboxSwipe:f,LightboxWrapper:T}=i(88258),x=i(75966),B=i(49235);let k;e.exports={withLightbox:({Component:e,hasDisabledCloseOnClickForLightbox:t=!1,hasSlideShow:i,showEnlargeIcon:D=!1,slides:I,slideShowVariation:E,showGallerySlideTitle:R=!0,theme:$="standard",variationName:L="Default"})=>H=>{const A=()=>{y({type:"close",subject:"lightbox_gallery_slide"},null,{skipDuplicateEvent:!1})},[M,P]=o.useState(-1),{formatMessage:N}=p(),O=e=>i&&P(r(M+e,0,I.length-1)),W=M>-1,_=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||P(void 0),A()},V={transform:`translate(${"listicle"===E?"0":-100*M/I.length}%)`},F=()=>{k&&(k.style.height=`${window.innerHeight}px`)};o.useEffect((()=>{b("LightBox",L)})),o.useEffect((()=>{const e=s(F,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),o.useEffect((()=>{!W&&k&&c.enableBodyScroll(k)}),[W]);const G=(e,i)=>t?{}:i.reduce(((t,i)=>({...t,[i]:t=>_(e||t)})),{}),j="GalleryEmbed"===L,U="listicle"===E;return o.createElement(B,{palette:$},o.createElement(T,null,o.createElement(g.Provider,{value:{expandHandler:e=>P(l(I,{id:e})),isInSlides:e=>d(I,{id:e}),showEnlargeIcon:D}},o.createElement(e,{...H})),o.createElement(n,{className:a("lightbox "+(E?`${E}-variation`:"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:W,onAfterOpen:()=>{c.disableBodyScroll(k),F()},onRequestClose:()=>{P(void 0),A()},contentRef:e=>{e&&(k=e)},closeTimeoutMS:200,contentLabel:N(h.contentLabel)},o.createElement(C,{ButtonIcon:m,isGalleryEmbedVariation:j,isIconButton:!0,dataAttrs:{"data-action":"close"},label:N(h.closeButtonIconLabel),onClickHandler:_,role:"button",ariaLabel:N(h.closeButtonIconLabel)}),j&&o.createElement(S,{isListicleLayout:U},o.createElement(x,{controlsIcon:"Arrow",gallerySlideVariation:"ItemLeft",indexToStartOn:M,isListicleLayout:U,shouldLoadOnScroll:!0,shouldScrollToSelectedItem:!0,showGalleryEmbedCaption:!1,slides:I,showGallerySlideTitle:R})),!j&&o.createElement(f,{...G("swipeClose",["onSwipeDown","onSwipeUp"]),onSwipeRight:()=>O(-1),onSwipeLeft:()=>O(1),shouldPreventDefaultEvent:!0},o.createElement(w,{className:E?`${E}-variation-slide-wrapper`:"",style:V,...G("",["onMouseDown","onTouchEnd"])},I.map((e=>o.createElement(u,{altText:e.image?.altText||"an image in a lightbox",...e,className:E?`${E}-variation-slide`:"",key:e.id}))))),o.createElement(v,null))))}}},97723:(e,t,i)=>{const o=i(5556),n=i(96540),a=i(14760),r=i(73275),s=i(43608),{LightboxSlideWrapper:l,LightboxSlideTopSpacer:d,LightboxSlideImageCaptionOuter:c,LightboxSlideCaptionContainer:p}=i(88258),h=({caption:e,className:t,credit:i,dangerousCredit:o,dangerousCaption:s,...h})=>{const[g,u]=n.useState("landscape");return n.createElement(l,{className:t,screenOrientation:g},n.createElement(d,null),n.createElement(c,null,n.createElement(r,{...h,contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?u("portrait"):e>t?u("landscape"):e===t&&u("square")}}),n.createElement(p,null,n.createElement(a,{dangerousCaptionText:e||s,dangerousCredit:i||o,hasLinebreak:"portrait"===g}))))};h.propTypes={...s.propTypes,caption:o.string,credit:o.string,dangerousCaption:o.string,dangerousCredit:o.string},e.exports=h},83726:(e,t,i)=>{e.exports=i(12969)},88258:(e,t,i)=>{const o=i(75999).default,{createGlobalStyle:n}=i(75999),a=i(73730),{CaptionWrapper:r,CaptionText:s}=i(38860),{calculateSpacing:l,getColorStyles:d,getColorToken:c,getLinkStyles:p,getTypographyStyles:h,getZIndex:g,isInverted:u,minScreen:m}=i(26865),b=i(39767),{BREAKPOINTS:y}=i(96472),{ResponsiveImageContainer:S}=i(7228),{GallerySlideFigure:C,GallerySlideAssetWrapper:v,GallerySlideFigCaptionWrapper:w,GallerySlideFigCaption:f,GallerySlideCaptionOffers:T,GallerySlideCaptionCtaBlock:x,GallerySlideCaptionCreditWrapper:B,GallerySlideCaptionDek:k,GallerySlideCaptionHed:D,GallerySlideWrapper:I}=i(55082),{GalleryEmbedSlideList:E,GalleryEmbedSwipe:R,GalleryEmbedControlsAdTitle:$,GalleryEmbedControlsStyles:L,GalleryEmbedControlsCounter:H,GalleryEmbedControlsController:A,GalleryEmbedControlsButton:M,GalleryEmbedWrapper:P}=i(56082),N=n`

  html {
    overflow: unset;
  }
  
  .lightbox {
    width: 100vw;
    height: 100vh;
  }

  .lightbox__overlay {
    position: fixed; 
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${g("hyperstitialLayer")};
    background-color: ${({theme:e})=>c(e,"colors.consumption.lead.standard.background")};
    
    ${({theme:e})=>u(e)&&d("background-color","colors.background.black")};
    
    
    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`,O=o.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,W=o(b).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,_=o(a.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${l(.5)};
  right: ${l(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  .icon-close {
    padding: 8px;
    fill: ${({theme:e})=>c(e,"colors.interactive.base.dark")};

    g {
      ${({theme:e})=>u(e)&&d("stroke","colors.interactive.base.white")};
    }
  }

  &,
  &:focus,
  &:hover {
    border: 1px solid
      ${({theme:e})=>c(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>c(e,"colors.interactive.base.white")};

    ${({theme:e})=>u(e)&&`\n      border: none;\n      background-color: rgba(\n        ${c(e,"colors.interactive.base.black",{rgbOnly:!0})},\n        0.4\n      );\n\n      ${m(y.md)} {\n        background-color: ${c(e,"colors.interactive.base.black")};\n      }\n    `}
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>c(e,"colors.interactive.base.brand-primary")};

    ${({theme:e})=>u(e)&&"border: none;"}
  }

  @media (min-width: ${y.md}) {
    top: ${l(2)};
    right: ${l(2)};
  }

  ${({isGalleryEmbedVariation:e})=>e&&`\n    & {\n      top: ${l(3)};\n      right: ${l(3)};\n      padding: 0;\n    }\n  `}
`,V=o.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,F=o.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,G=o.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,j=o.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,U=o.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>c(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    padding: ${l(3)} ${l(9)};

    ${r} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    }
  }

  ${r} {
    background-color: ${({theme:e})=>c(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${s} {
      ${({theme:e})=>p(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${G} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${S} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${j} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${r} {\n      margin: ${l(2)} ${l(2)} ${l(5)};\n    }\n\n    @media (min-width: ${y.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${l(4)};\n      height: initial;\n\n      ${F} {\n        display: none;\n      }\n\n      ${G} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${j} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${r} {\n        margin: 0;\n        margin-top: ${l(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${y.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${F} {\n          display: none;\n        }\n\n        ${G} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${S} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${j} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${r} {\n          margin: 0;\n          margin-bottom: ${l(6)};\n          margin-left: ${l(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`,K=o.div.withConfig({displayName:"GalleryEmbedContainer"})`
  &&& {
    ${R} {
      background-color: inherit;
    }

    ${P} {
      margin: unset;
    }

    .gallery__slides__slide {
      margin-bottom: unset;
    }

    ${I} {
      margin-bottom: unset;
    }

    ${C} {
      display: grid;
      grid-template-areas:
        'left-col image right-col'
        'left-col caption right-col';
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      width: 100vw;
    }

    ${v} {
      grid-column: left-col / right-col;
      grid-row: 1;

      img {
        width: 100%;
        min-width: unset;
        max-height: 100%;
      }

      ${m(y.md)} {
        grid-area: image;
      }
    }

    ${w} {
      grid-column: left-col / right-col;
      grid-row: 2;
      margin: 0;
      padding: ${l(2)} ${l(3)}
        ${l(3)};
      width: min-content;
      min-width: 100%;

      ${B}, ${k}, ${D}, a {
        ${({theme:e})=>u(e)&&d("color","colors.interactive.base.white")};

        ${({theme:e})=>h(e,"typography.definitions.foundation.link-secondary")};
      }

      ${f} {
        display: flex;
        flex-direction: column-reverse;
      }

      ${T}, ${x} {
        margin: unset;
      }

      ${k} {
        margin: unset;

        p {
          margin: unset;
        }
      }
    }

    ${({isListicleLayout:e})=>e&&`\n      padding: 0;\n\n      ${m(y.md)} {\n        padding: ${l(3)};\n      }\n\n      ${I} {\n        ${m(y.md)} {\n          margin-bottom: ${l(3)};\n        }\n      }\n\n      ${v} {\n        img {\n          ${m(y.md)} {\n            width: ${l(51)};\n            height: fit-content;\n          }\n        }\n      }\n\n      ${w} {\n        ${m(y.md)} {\n          grid-area: right-col;\n          grid-row: 1;\n        }\n      }\n  `}

    ${({isListicleLayout:e})=>!e&&`\n      padding: ${l(10)} 0 ${l(2)};\n      height: 100vh;\n\n      ${K} {\n        height: 100%;\n      }\n\n      ${E} {\n        height: min-content;\n        max-height: 80vh;\n\n        ${m(y.md)} {\n          height: 100vh;\n        }\n      }\n\n      ${I} {\n        display: flex;\n        align-items: center;\n        height: 100%;\n      }\n\n      ${v} {\n        img {\n          ${m(y.md)} {\n            height: ${l(67)};\n            width: fit-content;\n          }\n        }\n      }\n\n      ${w} {\n        ${m(y.md)} {\n          grid-area: caption;\n          padding: ${l(2)} 0 ${l(3)};\n        }\n      }\n\n    ${L} {\n      display: flex;\n      flex-direction: column;\n      justify-content: center; \n      padding: 0;\n      position: fixed;\n      bottom: ${l(2)};\n\n      ${H} {\n        display: none;\n      }\n\n      ${A} {\n        display: flex;\n        column-gap: ${l(5)};\n\n        ${M} {\n          margin: 0;\n          border: none;\n          background-color: transparent;\n        }\n      }\n\n      ${m(y.md)} {\n        position: unset;\n\n        .gallery-back, .gallery-forward {\n          position: absolute;\n          top: 50%;\n        }\n    \n        .gallery-back {\n          left: ${l(3)};\n        }\n    \n        .gallery-forward {\n          right: ${l(3)};\n        }\n      }\n    }\n  \n  `}

    ${L} ${$} {
      padding: ${l(2)} 0 ${l(1)};

      ${({theme:e})=>u(e)&&d("color","colors.interactive.base.white")};
    }

    ${M} svg {
      width: fit-content;
      height: fit-content;

      ${({theme:e})=>u(e)&&d("fill","colors.interactive.base.white")};
    }
  }
`;e.exports={GalleryEmbedContainer:K,LightboxSwipe:W,LightboxCloseButtonIcon:_,LightboxGlobalStyles:N,LightboxSlideImageCaptionOuter:G,LightboxSlideCaptionContainer:j,LightboxWrapper:O,LightboxSlideTopSpacer:F,LightboxSlidesWrapper:V,LightboxSlideWrapper:U}},65780:(e,t,i)=>{const o=i(37243);t.A=(0,o.defineMessages)({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})}}]);