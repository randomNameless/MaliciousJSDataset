(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2031],{39252:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,n)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Commenting=void 0;const s=r(i(5556)),l=o(i(96540)),d=i(37243),c=i(67116),m=r(i(31850)),u=r(i(62282)),g=i(92807),p=r(i(52640)),h=i(16631),f=r(i(28433)),b=i(14307),w=i(92716),y=i(55030),v=r(i(86659)),R=r(i(19023)),M=r(i(24300)),C=r(i(76584)),x=r(i(64837)),I=r(i(92867)),E=i(22761),L=i(85554),N="ReviewListTitle",T="CommentingMainContent";t.Commenting=({brandName:e,closeCommentStreamImage:t,closeCommentStreamMessage:i,commentCount:a,commentingUrl:n,communityExperience:{communityDefaultSort:o,disableCommentStream:r,enableCommunityExperience:s,enableMultipleComments:S,enableMultipleRatings:k,enableRatings:$,enableReplies:U,enableTags:F,enableUpvotes:A,hasHideCommunityFunctionalTag:B},communityUrl:_="/info/community-guidelines",defaultReplyLimit:D=1,hed:P,id:H,initialReviewLimit:O=7,likeActionErrorMessage:W,messageBannerTitle:q,messageContentHed:j,messageContentTrail:Y,messageSubContent:K,organizationId:G,previousRating:z,ratingFormSignInURL:V,recaptchaSiteKey:J,replyLimit:X=10,reviewerInfoText:Q,reviewFormSignInURL:Z,reviewLimit:ee=10,reviewModalProps:te,reviewNotesFormSignInURL:ie,reviewNoteTags:ae=[{active:!1,description:"Includes a tip",label:"Tip",slug:"TIP"},{active:!1,description:"Includes a question",label:"Question",slug:"QUESTION"}],reviewsCount:ne,reviewsSectionTitle:oe,shouldUserLoginToRate:re=!0,showFeedbackForm:se=!0,showMessageBannerBookmark:le,showMoreButtonLabel:de,showRatingForm:ce,signInHed:me,signInHedSpanTag:ue,signInMessage:ge,submitFn:pe,tenantID:he,unlikeActionErrorMessage:fe,user:be,usernameSignInDek:we})=>{l.default.useEffect((()=>{(0,w.trackComponent)("Commenting")}),[]);const[ye,ve]=(0,l.useState)(),[Re,Me]=(0,l.useState)(!1),[Ce,xe]=(0,l.useState)(!1),[Ie,Ee]=(0,l.useState)(null),[Le,Ne]=(0,l.useState)(!1);(0,L.useScrollToCommenting)(T);const Te=be.isAuthenticated&&be.amguuid&&G;(0,l.useEffect)((()=>{Te&&async function(){try{const e=await(0,c.checkUsername)(be.amguuid,G,n);ve(e)}catch(e){throw console.warn(e),e}}()}),[Te,n,be.amguuid,G]),(0,y.useViewportObserver)(`.${N}`,void 0,(e=>{if(e){const e={type:"impression",label:"Comments",subject:"community",features_list:[{name:"comments",total_index:a}]};(0,b.trackContentEngagementEvent)(e)}}),[a]);const{formatMessage:Se}=(0,d.useIntl)();if(B)return null;const ke=e=>{ve(e)},$e=e=>{Ee(e),xe(!0),setTimeout((()=>{xe(!1)}),3e3)},Ue=()=>{re&&!be.isAuthenticated&&Me(!0)},Fe=re?!Re&&se:se;return l.default.createElement(l.default.Fragment,null,l.default.createElement(v.default.ContentWithAdRail,null,l.default.createElement("div",{className:T,"data-journey-hook":"page-footer"},l.default.createElement(l.default.Fragment,null,!s&&l.default.createElement(l.default.Fragment,null,ce&&l.default.createElement(p.default,{onClickHandler:Ue,showExpandedBanner:Re,ratingSubject:P,recaptchaSiteKey:J,shouldUserLoginToRate:re,submitFn:pe,previousRating:z,isUserAuthenticated:be.isAuthenticated,signInURL:V}),Fe&&l.default.createElement(R.default,{onClickHandler:Ue,recipeId:H,hed:P,userId:be.isAuthenticated?be.amguuid:null,recaptchaSiteKey:J,hasReviewFormSignIn:!re,signInURL:Z,commentingUrl:n,organizationId:G,tenantID:he})),l.default.createElement(l.default.Fragment,null,l.default.createElement(h.ReviewListTitleWrapper,{disableTopBorder:s||Re},l.default.createElement(h.ReviewListTitle,{className:N},s?(0,L.formatReviewListTitle)(a,oe):(0,L.formatReviewListTitle)(ne,"Reviews","(0)")),l.default.createElement(h.ReviewListUtilityLink,{href:"#main-content"},Se(I.default.utilityLabel),l.default.createElement(h.ReviewListCarat,null))),s&&l.default.createElement(l.default.Fragment,null,be.isAuthenticated&&l.default.createElement(x.default,{organizationId:G,userId:be.amguuid,userApiUrl:n,showMessageBannerHandler:$e}),r?l.default.createElement(E.CloseCommentStreamWrapper,null,t&&l.default.createElement(E.CloseCommentStreamImageWrapper,null,l.default.createElement("img",{src:t,alt:i??Se(I.default.closeCommentStreamMessage)})),i??Se(I.default.closeCommentStreamMessage)):Fe&&l.default.createElement(C.default,{brandName:e,commentingUrl:n,contentId:H,handleUsernameChange:ke,hasReviewNotesFormSignIn:!re,hed:P,organizationId:G,reviewerInfoText:Q,reviewNoteTags:ae,shouldEnableMultipleComments:S,shouldEnableMultipleRatings:k,shouldEnableRatings:$,shouldEnableTags:F,showMessageBannerHandler:$e,showSavedRecipeNotes:e=>{Ne(e)},signInURL:ie,siteUserName:ye,tenantID:he,userId:be.isAuthenticated?be.amguuid:null,usernameSignInDek:we}),Le&&l.default.createElement(E.CommentingMessageBanner,{contentAlign:"center",isFixed:!0,title:q??Se(I.default.MessageBannerTitle),showMessageBannerBookmark:le},l.default.createElement("p",null,j??Se(I.default.MessageBannerContentHed),l.default.createElement("br",null),l.default.createElement("a",{href:_},Se(I.default.CommunityGuidelines))," ",Y??Se(I.default.MessageBannerContentTrail)),l.default.createElement("p",null,K??Se(I.default.MessageBannerSubContent)))),l.default.createElement(M.default,{commentingUrl:n,defaultReplyLimit:D,entityId:H,handleUsernameChange:ke,hasCommunityExperienceEnabled:s,id:"reviews",initialReviewLimit:O,likeActionErrorMessage:W,replyLimit:X,reviewDefaultSort:o,reviewLimit:ee,shouldEnableFromNowDate:s,shouldEnableRatings:$,shouldEnableReply:U,shouldEnableTags:F,shouldEnableUpvotes:A,showExpandedBanner:Re,showMessageBannerHandler:$e,showMoreButtonLabel:de,signInHed:me||Se(I.default.signInModalHed),signInHedSpanTag:ue||Se(I.default.signInModalHedSpanTag,{brandName:e}),signInMessage:ge||Se(I.default.signInModalMessage),reviewModalProps:te||{hed:Se(I.default.replyDiscardModalHed)},reviewNoteTags:ae,siteUserName:ye,unlikeActionErrorMessage:fe,user:be,usernameSignInDek:we})))),se&&l.default.createElement(f.default,null,l.default.createElement("aside",{"data-testid":"ReviewFeedbackAside"},l.default.createElement(g.PaymentGateway,{group:"ads"},l.default.createElement(m.default,{position:"rail"}))))),Ce&&l.default.createElement(u.default,{contentAlign:"center",isFixed:!0,position:"top-centre",shouldShowCloseButton:!0,isDisclaimer:!0,delayDuration:3e3},l.default.createElement("p",null,Ie)))},t.Commenting.propTypes={brandName:s.default.string,closeCommentStreamImage:s.default.string,closeCommentStreamMessage:s.default.string,commentCount:s.default.number,commentingUrl:s.default.string.isRequired,communityExperience:s.default.shape({communityDefaultSort:s.default.shape({commentsOrderBy:s.default.string,repliesOrderBy:s.default.string}),disableCommentStream:s.default.bool,enableCommunityExperience:s.default.bool,enableMultipleComments:s.default.bool,enableMultipleRatings:s.default.bool,enableRatings:s.default.bool,enableReplies:s.default.bool,enableTags:s.default.bool,enableUpvotes:s.default.bool,hasHideCommunityFunctionalTag:s.default.bool}),communityUrl:s.default.string,defaultReplyLimit:s.default.number,hed:s.default.string.isRequired,id:s.default.string.isRequired,initialReviewLimit:s.default.number,likeActionErrorMessage:s.default.string,messageBannerTitle:s.default.string,messageContentHed:s.default.string,messageContentTrail:s.default.string,messageSubContent:s.default.string,organizationId:s.default.string.isRequired,previousRating:s.default.number,ratingFormSignInURL:s.default.string,recaptchaSiteKey:s.default.string.isRequired,replyLimit:s.default.number,reviewerInfoText:s.default.string,reviewFormSignInURL:s.default.string.isRequired,reviewLimit:s.default.number,reviewModalProps:s.default.object,reviewNotesFormSignInURL:s.default.string,reviewNoteTags:s.default.arrayOf(s.default.shape({active:s.default.bool,description:s.default.string,label:s.default.string,slug:s.default.string})),reviewsCount:s.default.number,reviewsSectionTitle:s.default.string,shouldUserLoginToRate:s.default.bool,showFeedbackForm:s.default.bool,showMessageBannerBookmark:s.default.bool,showMoreButtonLabel:s.default.string,showRatingForm:s.default.bool,signInHed:s.default.string,signInHedSpanTag:s.default.string,signInMessage:s.default.string,submitFn:s.default.func,tenantID:s.default.string.isRequired,unlikeActionErrorMessage:s.default.string,user:s.default.shape({isAuthenticated:s.default.bool.isRequired,amguuid:s.default.string}).isRequired,usernameSignInDek:s.default.string}},24300:(e,t,i)=>{const a=i(96540),n=i(5556),o=i(62193),{connect:r}=i(67851),{useState:s,useEffect:l,useCallback:d}=i(96540),{useIntl:c}=i(37243),m=i(47125),{formatReviewListItems:u}=i(39311),{getComments:g,requestGraphService:p}=i(60711),{createCommentReaction:h,removeCommentReaction:f}=i(22914),b=i(22509),{default:w}=i(92867),{Circle:y}=i(62930),{ReviewListLoaderWrapper:v}=i(22761),{commentingAction:R,getParamsAsObjectFromURL:M,getRelativeURLWithoutParams:C,getRelativeURLWithSearchAndHash:x,setUserReactionsReducer:I,setUserReactionsReplyReducer:E,updatedUserReactionsForID:L,useFetchComments:N}=i(85554),T="createCommentReaction";t.CREATE_COMMENT_ACTION=T;const S=({commentingUrl:e,defaultReplyLimit:t,entityId:i,handleUsernameChange:n,hasCommunityExperienceEnabled:r,id:S,initialReviewLimit:k,likeActionErrorMessage:$,replyLimit:U,reviewDefaultSort:F,reviewLimit:A,reviewModalProps:B,reviewNoteTags:_,setCommentCount:D,shouldEnableFromNowDate:P,shouldEnableRatings:H,shouldEnableReply:O,shouldEnableTags:W,shouldEnableUpvotes:q,showMessageBannerHandler:j,showMoreButtonLabel:Y,signInHed:K,signInHedSpanTag:G,signInMessage:z,siteUserName:V,unlikeActionErrorMessage:J,user:X={},usernameSignInDek:Q})=>{const{formatMessage:Z}=c(),[ee,te]=s(!1),[ie,ae]=s(),ne=P||!1,[oe,re]=s([]),[se,le]=s({}),{isLoading:de,reviews:ce,page:me,setPage:ue}=N({commentingUrl:e,defaultReplyLimit:t,entityId:i,initialReviewLimit:k,reviewDefaultSort:F,setCommentCount:D});l((()=>{const e=u(ce,Z,_,ne);re(e)}),[ce,ne,Z,_]),l((()=>{oe.length&&le((e=>oe.reduce(I,{...e})))}),[oe]);const ge=d((async({item:t})=>{if(!X.isAuthenticated){const e="COMMUNITY_LIKE_CLICK_NOTE",i={type:"login",source_type:e},a={action:T,commentId:t.commentId,commentRevisionId:t.revisionId,source:e},n=x({href:window.location.href,hashValue:R.LIKE_COMMENT,queryParams:a});return void b.doDisplayModal({dangerousHed:K,dangerousHedSpanTag:G,dangerousDek:z,redirectURL:n,analyticsType:"comment reaction",shouldHideIllustration:!0,source:e,snowplowData:i})}const{commentId:i,revisionId:a}=t;le((e=>L({reactions:e,id:i})));const{viewerActionPresence:n}=se[i]||{},o=n?"removeCommentReaction":T,r=o===T,s={operationName:o,query:r?h:f,variables:{input:{commentID:i,commentRevisionID:a,clientMutationId:"0"}}};try{await p(e,s)}catch(e){le((e=>L({reactions:e,id:i})));const t=r?$||Z(w.likeActionErrorMessage):J||Z(w.unlikeActionErrorMessage);j(t)}}),[X,se,e,K,G,z,Z,j,$,J]);return l((()=>{if(!window.location||!X.isAuthenticated||o(se))return;const{action:e,commentId:t,commentRevisionId:i}=M({searchParams:window.location.search});if(e!==T)return;const a=se[t];if(a&&t&&i){const{viewerActionPresence:e}=a;!e&&ge({item:{commentId:t,revisionId:i}}),window.history.replaceState({},"",C({href:window.location.href,paramsToRemove:["action","commentId","commentRevisionId"]}))}}),[X.isAuthenticated,ge,se]),de?a.createElement(v,null,a.createElement(y,null)):oe.length||ie?a.createElement(m,{commentingUrl:e,commentReactionHandler:ge,handleShowMore:async()=>{te(!0),ae();const t=me.endCursor;try{const{reviews:a,page:n}=await g({entityId:i,after:t,commentingUrl:e,logger:console,defaultSort:F,reviewLimit:A});ue(n);const o=u(a,Z,_,ne);re([...oe,...o])}catch(e){ae(!0)}te(!1)},handleUsernameChange:n,hasCommunityExperienceEnabled:r,hasErrored:!!ie,hasNextPage:me.hasNextPage,id:S,isLoading:ee,items:oe,replyLimit:U,reviewModalProps:B,shouldEnableRatings:H,shouldEnableReply:O,shouldEnableTags:W,shouldEnableUpvotes:q,showMessageBannerHandler:j,showMoreButtonLabel:Y,signInHed:K,signInHedSpanTag:G,signInMessage:z,siteUserName:V,updateUserReactions:e=>{le((t=>e.reduce(E,{...t})))},user:X,usernameSignInDek:Q,userReactions:se}):null};S.propTypes={commentingUrl:n.string.isRequired,defaultReplyLimit:n.number,entityId:n.string.isRequired,handleUsernameChange:n.func,hasCommunityExperienceEnabled:n.bool,id:n.string,initialReviewLimit:n.number,likeActionErrorMessage:n.string,replyLimit:n.number,reviewDefaultSort:n.shape({commentsOrderBy:n.string,repliesOrderBy:n.string}),reviewLimit:n.number,reviewModalProps:n.object,reviewNoteTags:n.array,setCommentCount:n.func.isRequired,shouldEnableFromNowDate:n.bool,shouldEnableRatings:n.bool,shouldEnableReply:n.bool,shouldEnableTags:n.bool,shouldEnableUpvotes:n.bool,showMessageBannerHandler:n.func,showMoreButtonLabel:n.string,signInHed:n.string,signInHedSpanTag:n.string,signInMessage:n.string,siteUserName:n.string,unlikeActionErrorMessage:n.string,user:n.shape({amguuid:n.string,isAuthenticated:n.bool.isRequired}).isRequired,usernameSignInDek:n.string},e.exports=r(null,{setCommentCount:e=>({type:"SET_KEY",key:"comments.commentCount",value:e})})(S)},81063:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Commenting=void 0;const a=i(12892),n=i(57744),o=i(39252),r=(0,n.connector)(o.Commenting,{keysToPluck:["communityExperience","brandName","user"],keysToSpread:["commentAttributes","comments","recaptcha"]}),s=(0,a.asConfiguredComponent)(r,"Commenting");t.Commenting=s},22761:(e,t,i)=>{const a=i(75999).default,n=i(62282),{MessageBannerContent:o,MessageBannerTitle:r}=i(8070),{getColorToken:s,getTypographyStyles:l,maxScreen:d,minScreen:c,getColorStyles:m,calculateSpacing:u}=i(26865),{BREAKPOINTS:g}=i(96472),p=a(n).withConfig({displayName:"CommentingPageMessageBanner"})`
  margin-top: 40px;
  margin-bottom: 32px;

  ${d(g.md)} {
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 16px 0;
  }
  ${c(g.sm)} {
    ${({showMessageBannerBookmark:e})=>!e&&"padding-bottom: 32px"}
  }

  ${r} {
    color: ${s("colors.consumption.lead.standard.heading")};
  }
  ${o} {
    ${l("typography.definitions.utility.assistive-text")}
  }
`,h=a.div.withConfig({displayName:"ReviewListLoaderWrapper"})`
  display: flex;
  justify-content: center;
`,f=a.div.withConfig({displayName:"CloseCommentStreamWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 1px 0;
  border-style: solid;
  ${({theme:e})=>m(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${u(3)} 0;
  text-align: center;
`,b=a.div.withConfig({displayName:"CloseCommentStreamImageWrapper"})`
  padding-bottom: ${u(2)};

  img {
    width: 88px;
    height: 88px;
  }
`;e.exports={CloseCommentStreamImageWrapper:b,CloseCommentStreamWrapper:f,CommentingMessageBanner:p,ReviewListLoaderWrapper:h}},92867:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=i(37243);t.default=(0,a.defineMessages)({utilityLabel:{id:"ReviewListContainer.UtilityLabel",defaultMessage:"Back to Top",description:"Utility label for review list container"},MessageBannerTitle:{id:"Commenting.MessageBannerTitle",defaultMessage:"Comment submitted",description:"Text for the MessageBanner title",isConfigurable:!0},MessageBannerContentHed:{id:"Commenting.MessageBannerContentHed",defaultMessage:"Comments are moderated in line with our",description:"Text for the MessageBanner body",isConfigurable:!0},CommunityGuidelines:{id:"Commenting.CommunityGuidelines",defaultMessage:"Community Guidelines",description:"Text for the community guidelines link",isConfigurable:!0},MessageBannerContentTrail:{id:"Commenting.MessageBannerContentTrail",defaultMessage:"before being added.",description:"Text for the MessageBanner body",isConfigurable:!0},MessageBannerSubContent:{id:"Commenting.MessageBannerSubContent",defaultMessage:"Thanks for contributing to this space.",description:"Text for the MessageBanner sub content",isConfigurable:!0},likeActionErrorMessage:{id:"Commenting.LikeActionErrorMessage",defaultMessage:"Unable to like this comment. Please try again.",description:"Error message to display while like action fails"},unlikeActionErrorMessage:{id:"Commenting.UnlikeActionErrorMessage",defaultMessage:"Unable to unlike this comment. Please try again.",description:"Error message to display while unlike action fails"},signInModalHed:{id:"Commenting.signInModalHed",defaultMessage:"Sign in to join the",description:"Hed for commenting sign in modal"},signInModalHedSpanTag:{id:"Commenting.signInModalHedSpanTag",defaultMessage:"{brandName} community",description:"Hed span for commenting sign in modal"},signInModalMessage:{id:"Commenting.signInModalMessage",defaultMessage:"Once you're signed in, add your comments and like or reply to others.",description:"Message for commenting sign in modal"},replyDiscardModalHed:{id:"Commenting.replyDiscardModalHed",defaultMessage:"Discard this reply?",description:"Hed for discard reply modal"},closeCommentStreamMessage:{id:"Commenting.closeCommentStreamMessage",defaultMessage:"Comments are closed on this story but you can still browse or upvote them.",description:"Hed for discard reply modal"}})},69389:(e,t,i)=>{const{asConfiguredComponent:a}=i(12892),{asThemedComponent:n}=i(20223),o=i(39416);e.exports=n(a(o,"ContentHeader"))},45771:(e,t,i)=>{const a=i(5556),n=i(96540),{useIntl:o}=i(37243),r=i(76399),s=i(96616).A,{asConfiguredComponent:l}=i(12892),{trackComponent:d}=i(92716),{interactionResponse:c}=i(56187),{ReviewNoteModalBaseWrapper:m,ReviewNoteModalCloseButton:u,ReviewNoteModalContinueButton:g,ReviewNoteDiscardSection:p,ReviewNoteModalDek:h,ReviewNoteModalHed:f}=i(49038),b=({className:e,modalProps:{hed:t,dek:i,continueLabel:a,discardLabel:l}={},confirmButtonCallback:b,onClose:w,isVisible:y=!1})=>{n.useEffect((()=>{(async()=>{await c(),d("ReviewNoteSubmitModal")})()}),[]);const v=()=>{w()},{formatMessage:R}=o();return n.createElement(m,{className:e,closeTimeoutMS:200,isOpen:y},n.createElement(u,{isIconButton:!0,ariaLabel:R(s.closeButtonAriaLabel),label:R(s.closeButtonLabel),onClickHandler:v,role:"button",ButtonIcon:r}),n.createElement(f,null,t||R(s.hed)),n.createElement(h,null,i||R(s.dek)),n.createElement(g,{label:a||R(s.continueLabel),onClickHandler:v}),n.createElement(p,{onClickHandler:b,label:l||R(s.discardLabel),btnStyle:"text",inputKind:"link"}))};b.propTypes={className:a.string,confirmButtonCallback:a.func,isVisible:a.bool,modalProps:a.object,onClose:a.func},b.displayName="ReviewNoteModal",e.exports=l(b,"ReviewNoteModal")},49038:(e,t,i)=>{const a=i(96540),n=i(20312),o=i(5556),{default:r}=i(75999),{BaseText:s}=i(76955),{calculateSpacing:l}=i(26865),{BREAKPOINTS:d,ZINDEX_MAP:c}=i(96472),m=i(73730),{ButtonLabel:u}=i(18974),{getColorToken:g,getTypographyStyles:p}=i(26865),h=r(s).withConfig({displayName:"ReviewNoteModalHed"})`
  margin-top: ${l(0)};
  padding: ${l(2.5)} ${l(1.25)};
  text-align: center;
`;h.defaultProps={as:"div",colorToken:"colors.interactive.base.brand-primary",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-large"};const f=r.p.withConfig({displayName:"ReviewNoteModalDek"})`
  ${p("typography.definitions.consumptionEditorial.body-core")}
  margin-top: ${l(0)};
  margin-bottom: ${l(5)};
  text-align: center;
  color: ${g("colors.consumption.body.standard.body")};
  @media (max-width: ${d.md}) {
    margin-bottom: ${l(5)};
  }
`,b=r(m.Utility).withConfig({displayName:"ReviewNoteModalButtonPrimary"})`
  position: absolute;
  top: ${l(1)};
  right: ${l(1)};
  padding: 0;
  fill: ${g("colors.interactive.base.black")};

  .icon-close {
    padding: 6px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
  width: 42px;
  height: 42px;
`,w=r(m.Primary).withConfig({displayName:"ReviewNoteModalContinueButton"})`
  display: flex;
  justify-content: center;
  margin-bottom: ${l(1)};
  padding: ${l(2)} ${l(0)};
  width: 100%;
  ${u} {
    padding: 0 ${l(2.5)};
  }
`,y=r(m.Primary).withConfig({displayName:"ReviewNoteDiscardSection"})`
  display: flex;
  justify-content: center;
  padding: 17px ${l(0)};
  width: 100%;
  text-decoration: underline;
  ${u} {
    padding: 0 ${l(2.5)};
  }
`;function v({className:e,...t}){const i=`${e}__content`,o=`${e}__overlay`;return a.createElement(n,{portalClassName:e,className:i,overlayClassName:o,...t})}v.propTypes={className:o.string};const R=r(v).withConfig({displayName:"ReviewNoteModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${c.interstitialLayer};

    background-color: rgba(
      ${g("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 500ms;
      opacity: 1;
      background-color: rgba(
        ${g("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 500ms;
      background-color: rgba(
        ${g("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: ${l(1)};
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
    background-color: ${g("colors.background.white")};
    padding: ${l(6)} ${l(5)}
      ${l(5)} ${l(5)};
    width: ${l(57)};
    height: 368px;
    overflow-y: auto;
    @media (max-width: ${d.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${l(2,"px")}));

      margin: 0 ${l(2,"px")};
      padding: ${l(4)} ${l(5)}
        ${l(4)} ${l(5)};
      width: auto;
      min-width: ${l(38)};
      max-width: ${l(60)};
    }
  }
`;e.exports={ReviewNoteModalBaseWrapper:R,ReviewNoteModalCloseButton:b,ReviewNoteModalContinueButton:w,ReviewNoteDiscardSection:y,ReviewNoteModalDek:f,ReviewNoteModalHed:h}},96616:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({closeButtonAriaLabel:{id:"ReviewNoteModal.CloseButtonAriaLabel",defaultMessage:"Close ReviewNoteModal Modal",description:"ReviewNoteModal component close button aria label"},closeButtonLabel:{id:"ReviewNoteModal.CloseButtonLabel",defaultMessage:"close modal button label",description:"ReviewNoteModal component close button label"},continueLabel:{id:"ReviewNoteModal.continueLabel",defaultMessage:"No, still writing",description:"ReviewNoteModal component continue button text",isConfigurable:!0},dek:{id:"ReviewNoteModal.dek",defaultMessage:"Everything you've written will be lost",description:"ReviewNoteModal component dek text",isConfigurable:!0},discardLabel:{id:"ReviewNoteModal.discardLabel",defaultMessage:"Yes, discard it",description:"ReviewNoteModal discard button text",isConfigurable:!0},hed:{id:"ReviewNoteModal.Hed",defaultMessage:"Discard this comment?",description:"ReviewNoteModal component hed text",isConfigurable:!0}})},56425:(e,t,i)=>{const a=i(96540),{useState:n,useEffect:o}=i(96540),r=i(5556),s=i(45565),{addReview:l}=i(60711),{trackContentEngagementEvent:d}=i(14307),c=({brandName:e,commentingUrl:t,contentId:i,handleUsernameChange:r,hasReviewNotesFormSignIn:c,hed:m,organizationId:u,reviewerInfoText:g,reviewNoteTags:p,shouldEnableMultipleComments:h,shouldEnableMultipleRatings:f,shouldEnableRatings:b,shouldEnableTags:w,showMessageBannerHandler:y,showSavedRecipeNotes:v,signInURL:R,siteUserName:M,tenantID:C,userId:x,usernameSignInDek:I})=>{const[E,L]=n("");o((()=>{const e=window.location.origin+window.location.pathname;L(e)}),[]);const N=(e,t,i)=>{{const a={type:"submit",label:"add note",rating:t,subject:"community_comment",features_list:i};e&&(a.error=e),d(a,{skipDuplicateEvent:!1})}};return a.createElement(s,{brandName:e,handleUsernameChange:r,hasReviewNotesFormSignIn:c,onSubmitHandler:async e=>{let a,n;const o={hed:m,storyLink:E},{reviewNote:r,rating:s,userId:d,toggleChip:c}=e||{},g=c?.reduce(((e,t)=>(t.slug&&t.active&&e.push(t.slug),e)),[]),p=g?.map((e=>({name:e.toLowerCase(),index:0,total_index:1}))),b={review:{storyID:i,siteID:u,body:r,meta:JSON.stringify(o),rating:s,ratingScale:5,reviewTags:g,tenantID:C},clientMutationId:"0",enableMultipleRatings:f,enableMultipleComments:h},w=d;try{a=await l(b,w,t,console),N(null,s,p)}catch(e){n=e.message||"",N(n,s,p),console.warn(e)}return a},reviewerInfoText:g,reviewNoteTags:p,shouldEnableRatings:b,shouldEnableTags:w,showMessageBannerHandler:y,showSavedRecipeNotes:v,signInURL:R,siteUserName:M,userId:x,usernameSignInDek:I})};c.propTypes={brandName:r.string,commentingUrl:r.string,contentId:r.string,handleUsernameChange:r.func.isRequired,hasReviewNotesFormSignIn:r.bool,hed:r.string,organizationId:r.string,reviewerInfoText:r.string,reviewNoteTags:r.array,shouldEnableMultipleComments:r.bool,shouldEnableMultipleRatings:r.bool,shouldEnableRatings:r.bool,shouldEnableTags:r.bool,showMessageBannerHandler:r.func,showSavedRecipeNotes:r.func.isRequired,signInURL:r.string,siteUserName:r.string,tenantID:r.string,userId:r.string,usernameSignInDek:r.string},e.exports=c},76584:(e,t,i)=>{e.exports=i(56425)},30488:(e,t,i)=>{const a=i(5556),n=i(96540),{useState:o}=i(96540),{connect:r}=i(67851),{useIntl:s}=i(37243),l=i(62097).A,{createNewUsername:d,validate:c}=i(67116),m=i(76399),{asConfiguredComponent:u}=i(12892),{trackComponent:g}=i(92716),{interactionResponse:p}=i(56187),{trackUserAccountEvent:h}=i(14307),{doCloseModal:f}=i(61057),{UserNameModalBaseWrapper:b,UserNameModalCloseButton:w,UserNameModalButtons:y,UserNameModalDek:v,UserNameModalHed:R,UserNameModalSubmit:M,UserNameModalTextFieldWrapper:C}=i(94823),x=({className:e,dangerousDek:t,dangerousHed:i,isVisible:a=!1,maxLength:r=23,minLength:u=2,organizationId:x,showMessageBannerHandler:I,submitButtonLabel:E,successCallback:L,userApiUrl:N,userId:T,source:S})=>{n.useEffect((()=>{(async()=>{await p(),g("UserNameModal")})()}),[]);const{formatMessage:k}=s(),[$,U]=o(""),[F,A]=o(""),B={lengthError:k(l.lengthError),specialCharError:k(l.specialCharError)};return n.createElement(b,{className:e,isOpen:a},n.createElement(w,{isIconButton:!0,ariaLabel:k(l.closeButtonLabel),label:k(l.closeButtonLabel),role:"button",onClickHandler:()=>{f(),h({type:"exit",subject:"username_modal",source_type:S}),U(null)},ButtonIcon:m}),n.createElement(R,null,i||k(l.hed)),n.createElement(v,{dangerouslySetInnerHTML:{__html:t||k(l.dek)}}),n.createElement(C,{className:"user-name-modal",hasAutoFocus:!0,shouldUseUppercase:!0,name:"username",placeholder:"YOUR_USERNAME",type:"text",onInputChange:e=>{let{value:t}=e.target;t.length>r&&(t=t.slice(0,r),e.target.value=t),A(t)},errorText:$,isInvalid:!!$,formName:"username",errorPosition:"belowTextField",hideLabel:!0,label:k(l.hed),assistiveSubtext:k(l.userNameModalAssistiveText)}),n.createElement(y,null,n.createElement(M,{label:E||k(l.submitButtonLabel),inputKind:"submit","data-testid":"UserNameModalSubmit",onClickHandler:async()=>{let e;const t=c(F,{minLength:u,maxLength:r});if(t)return void U(B[t]??"");let i;try{i=await d({name:F,organizationId:x,userId:T,url:N},console),A(i),U(null),I&&I(k(l.successMessage)),f(),L&&L(i)}catch(t){"already_taken"===t?.message?(U(k(l.alreadyTakenError)),e=t?.message):(I&&I(k(l.errorMessage)),f(),e=l.errorMessage.defaultMessage)}h({type:"submit",label:"SAVE USERNAME",subject:"username_modal",source_type:S,error:e})}})))};x.propTypes={className:a.string,dangerousDek:a.string,dangerousHed:a.string,isVisible:a.bool,maxLength:a.number,minLength:a.number,organizationId:a.string.isRequired,showMessageBannerHandler:a.func,source:a.string,submitButtonLabel:a.string,successCallback:a.func,userApiUrl:a.string.isRequired,userId:a.string.isRequired};const I=u(x,"UserNameModal");e.exports=r((e=>{const{userNameModalConfig:t}=e;return{...t}}))(I)},64837:(e,t,i)=>{e.exports=i(30488)},94823:(e,t,i)=>{const a=i(96540),n=i(20312),o=i(5556),{default:r}=i(75999),{BaseText:s}=i(76955),{calculateSpacing:l,getColorStyles:d}=i(26865),{ZINDEX_MAP:c,BREAKPOINTS:m}=i(96472),u=i(73730),{getColorToken:g,getTypographyStyles:p}=i(26865),h=i(89662),{TextFieldControlInput:f}=i(60434),b=r(s).withConfig({displayName:"UserNameModalHed"})`
  padding-top: ${l(2.5)};
  padding-bottom: ${l(2.5)};
  text-align: center;
`;b.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const w=r.p.withConfig({displayName:"UserNameModalDek"})`
  ${p("typography.definitions.consumptionEditorial.body-core")}
  margin: 0;
  text-align: center;
  color: ${g("colors.consumption.body.standard.body")};
`,y=r(u.Utility).withConfig({displayName:"UserNameModalCloseButton"})`
  position: absolute;
  top: ${l(1)};
  right: ${l(1)};
  padding: 0;
  fill: ${g("colors.discovery.body.light.context-tertiary")};

  .icon-close {
    padding: 8px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,v=r(u.Primary).withConfig({displayName:"UserNameModalSubmit"})`
  margin-top: 0;
  padding: 0;
`,R=r.div.withConfig({displayName:"UserNameModalButtons"})`
  display: flex;
  justify-content: center;
  margin-top: ${l(4)};
  @media (max-width: ${m.md}) {
    margin-top: ${l(3)};
  }
  width: 100%;

  ${v} {
    padding: 0;
    width: 100%;
  }
`;function M({className:e,...t}){const i=`${e}__content`,o=`${e}__overlay`;return a.createElement(n,{portalClassName:e,className:i,overlayClassName:o,...t})}M.propTypes={className:o.string};const C=r(M).withConfig({displayName:"UserNameModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${c.interstitialLayer};

    background-color: rgba(
      ${g("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${g("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${g("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 8px;
    background-color: ${g("colors.background.white")};
    padding-top: ${l(12)};
    padding-right: ${l(6)};
    padding-bottom: ${l(7)};
    padding-left: ${l(6)};
    width: ${l(57)};
    min-height: ${l(62)};
    overflow-y: auto;
    @media (max-width: ${m.md}) {
      width: 90%;
    }
  }
`,x=r(h.SingleLine).withConfig({displayName:"UserNameModalTextFieldWrapper"})`
  ${f} {
    margin-top: ${l(6)};
    ${p("typography.definitions.globalEditorial.accreditation-feature")};
    ${d("color","colors.interactive.base.body")};
    @media (max-width: ${m.md}) {
      margin-top: ${l(4)};
    }
  }
`;e.exports={UserNameModalBaseWrapper:C,UserNameModalButtons:R,UserNameModalCloseButton:y,UserNameModalDek:w,UserNameModalHed:b,UserNameModalSubmit:v,UserNameModalTextFieldWrapper:x}},62097:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({hed:{id:"UserNameModal.Hed",defaultMessage:"Create Username",description:"UserNameModal component hed text"},dek:{id:"UserNameModal.Dek",defaultMessage:"Your username will appear next to any comments and replies you add.",description:"UserNameModal component description text"},submitButtonLabel:{id:"UserNameModal.SubmitButtonLabel",defaultMessage:"Save Username",description:"UserNameModal component submit button label"},closeButtonLabel:{id:"UserNameModal.CloseButtonLabel",defaultMessage:"Close User Name",description:"UserNameModal component close button label"},lengthError:{id:"UserNameModal.lengthError",defaultMessage:"Usernames must be between 2 and 23 characters.",description:"UserNameModal component length error"},specialCharError:{id:"UserNameModal.specialCharError",defaultMessage:"Usernames can only include letters, numbers and underscores (_).",description:"UserNameModal component special chars validation error"},alreadyTakenError:{id:"UserNameModal.alreadyTakenError",defaultMessage:"This Username is already taken.",description:"UserName already taken error"},userNameModalAssistiveText:{id:"UserNameModal.UserNameModalAssistiveText",defaultMessage:"Usernames must be between 2 and 23 characters and can only include letters, numbers and underscores (_).",description:"UserNameModal Assistive Text"},errorMessage:{id:"UserNameModal.ErrorMessage",defaultMessage:"Unable to save username. Please try again.",description:"UserNameModal default error message"},successMessage:{id:"UserNameModal.SuccessMessage",defaultMessage:"Your username is saved.",description:"UserNameModal success message"}})},70209:(e,t,i)=>{const a=i(5556),n=i(96540),{useState:o,useEffect:r,useRef:s}=i(96540),{useIntl:l}=i(37243),d=i(39374).A,{trackComponent:c}=i(92716),{interactionResponse:m}=i(56187),{Wrapper:u,SignInInfo:g,FormText:p,FormWrapper:h,ErrorText:f,RatingFormRating:b,ReCaptcha:w,SubmitRatingWrapper:y}=i(6276),v=({isUserAuthenticated:e,promptText:t,ratingSubject:i,loadingText:a,errorText:v="Sorry, that didn't go through. Please try again later.",onClickHandler:R=(()=>{}),successText:M,previousRatingText:C,submitFn:x,previousRating:I,recaptchaSiteKey:E,showExpandedBanner:L,shouldUserLoginToRate:N,dangerousSignIn:T="",dangerousSignInExpanded:S="",signInURL:k})=>{n.useEffect((()=>{(async()=>{await m(),c("RatingForm")})()}),[]);const[$,U]=o(!1),[F,A]=o(),[B,_]=o(!1),[D,P]=o(!1),[H,O]=o(),{formatMessage:W}=l(),q=s();if(r((()=>{I&&(A(I),P(!0))}),[I]),r((()=>{_(e)}),[e]),r((()=>{L&&q?.current?.scrollIntoView({block:"center",inline:"center"})}),[q,L]),H)return n.createElement(u,null,n.createElement(f,null,v));const j=N&&!B;return n.createElement(u,{"data-testid":"RatingForm",disableTopPadding:j,ref:q,showExpandedBanner:L,disableTopBorder:j},j&&n.createElement(g,{expanded:L,dangerouslySetInnerHTML:{__html:L?S.replace("{signinLink}",k):T.replace("{signinLink}",k)}}),n.createElement(h,{onClick:R},!L&&n.createElement(p,{isTextDisabled:j,dangerouslySetInnerHTML:{__html:(()=>{let e;return e=N&&!B?t||W(d.promptText,{RATING_SUBJECT:i}):D&&I?C||W(d.previousRatingText,{RATING_SUBJECT:i}):D?M||W(d.successText):$?a||W(d.loadingText):t||W(d.promptText,{RATING_SUBJECT:i}),e.replace(/{RATING_SUBJECT}/g,i)})()}}),!L&&n.createElement(b,{averageRatingCount:N?B&&F:F,isRatingDisabled:D||j,onChange:e=>{A(e),window.dataLayer?.push({event:"ratings-stars-attempt"})}}),N&&(B?!D:!L)&&n.createElement(y,{onClickHandler:async()=>{U(!0);try{await x("recaptcha-response",F,!1),P(!0),window.dataLayer?.push({event:"ratings-stars-success"})}catch(e){O(e)}finally{U(!1)}},inputKind:"submit",label:"SUBMIT RATING",isDisabled:!B||!F}),!N&&!!F&&!D&&n.createElement(w,{recaptchaSiteKey:E,widgetId:"rating",recaptchaSize:"normal",recaptchaCallback:async e=>{U(!0);try{await x(e,F),U(!1),P(!0),window.dataLayer?.push({event:"ratings-stars-success"})}catch(e){O(e)}}})))};v.propTypes={dangerousSignIn:a.string,dangerousSignInExpanded:a.string,errorText:a.string,isUserAuthenticated:a.bool,loadingText:a.string,onClickHandler:a.func,previousRating:a.number,previousRatingText:a.string,promptText:a.string,ratingSubject:a.string,recaptchaSiteKey:a.string,shouldUserLoginToRate:a.bool,showExpandedBanner:a.bool,signInURL:a.string,submitFn:a.func,successText:a.string},e.exports=v},52640:(e,t,i)=>{const{asConfiguredComponent:a}=i(12892),n=i(70209);e.exports=a(n,"RatingForm")},6276:(e,t,i)=>{const a=i(75999).default,{BaseText:n}=i(76955),{calculateSpacing:o,getColorStyles:r,getColorToken:s,getTypographyStyles:l,minScreen:d,maxScreen:c}=i(26865),{BREAKPOINTS:m}=i(96472),u=i(62340),{RatingStar:g}=i(97927),p=i(6605),{applyGridSpacing:h}=i(1123),f=i(73730),b=a.div.withConfig({displayName:"Wrapper"})`
  margin-bottom: ${o(4)};
  border-width: 2px 0;
  border-style: solid;
  padding-bottom: ${o(2)};
  text-align: center;

  ${({theme:e})=>r(e,"border-color","colors.consumption.body.standard.divider")};
  ${({disableTopPadding:e})=>!e&&`padding-top: ${o(4)};`}
  ${({disableTopBorder:e})=>e&&"border-top: none;"}
  ${({showExpandedBanner:e})=>e&&"border: none; padding-bottom: 0;"}
`,w=a.div.withConfig({displayName:"SignInInfo"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({expanded:e})=>e&&`\n  height: 240px;\n  ${d(m.lg)} {\n    height: 185px;\n  }\n  `}
  ${({theme:e,expanded:t})=>l(e,t?"typography.definitions.consumptionEditorial.subhed-aux-primary":"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  margin-bottom: ${o(4)};
  background: ${({theme:e})=>s(e,"colors.interactive.base.black")};
  padding: ${o(2)};
  text-transform: none;
  color: ${({theme:e})=>s(e,"colors.interactive.base.white")};

  a {
    color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    font-weight: bold;
  }
  ${c(m.md)} {
    margin-left: calc(-1 * var(--grid-margin));
    /* Full bleed effect */
    width: calc(100% + (2 * var(--grid-margin)));
  }
  ${({expanded:e})=>!e&&`${d(m.lg)} {\n      br {\n        display: none;\n      }\n    }\n  `}
`,y=a.div.withConfig({displayName:"FormWrapper"})``,v=a(n).withConfig({displayName:"FormText"})`
  ${({isTextDisabled:e})=>e&&"opacity: 0.5;"};
`;v.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-secondary"};const R=a(v).withConfig({displayName:"ErrorText"})`
  margin-bottom: ${o(2)};
`,M=a(p).withConfig({displayName:"ReCaptcha"})`
  display: inline-block;
  margin-top: ${o(2)};
  margin-bottom: ${o(2)};

  ${h("margin",!0)};
`,C=a(u).withConfig({displayName:"RatingFormRating"})`
  padding: ${o(3)} 0 ${o(2)};
  ${g},
  svg {
    width: 64px;
    height: 64px;
  }
`,x=a(f.Utility).withConfig({displayName:"SubmitRatingWrapper"})`
  margin: 0 auto ${o(2)};
  color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
`;e.exports={Wrapper:b,SignInInfo:w,FormText:v,FormWrapper:y,ErrorText:R,RatingFormRating:C,ReCaptcha:M,SubmitRatingWrapper:x}},39374:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({promptText:{id:"RatingsForm.PromptText",defaultMessage:"How would you rate {RATING_SUBJECT}?",description:"Prompt Text on the Recipe page",isConfigurable:!0},previousRatingText:{id:"RatingsForm.PreviousRatingText",defaultMessage:"You previously rated {RATING_SUBJECT}.",description:"Previous Rating Text on Recipe page",isConfigurable:!0},loadingText:{id:"RatingsForm.LoadingText",defaultMessage:"Loading...",description:"Loading text for ratingForm",isConfigurable:!0},successText:{id:"RatingsForm.SuccessText",defaultMessage:"Thanks for your feedback!",description:"success text after user rating and recaptcha validation",isConfigurable:!0}})},8101:(e,t,i)=>{const a=i(5556),n=i(96540),{useIntl:o}=i(37243),{useState:r,useCallback:s}=i(96540),{trackComponent:l}=i(92716),{interactionResponse:d}=i(56187),c=i(21093),m=i(71001),{ReviewReplyComment:u}=i(32844),{ReviewListWrapper:g,ReviewListItems:p,ReviewListItem:h,ReviewListReview:f,ReviewListMeta:b,ReviewListMetaItem:w,ReviewListUsername:y,ReviewListLocation:v,ReviewListDate:R,ReviewListButton:M,ReviewListError:C,ReviewText:x,ReviewerUserName:I,ReviewListMetaData:E,ReviewListTimeStamp:L,ReviewLikeCount:N,ReviewReplyLabel:T,ReviewListMetaInfo:S,ReviewItem:k,ReviewListReactionButton:$,ReviewReplyWrapper:U,ReviewReplyMetaDataWrapper:F}=i(16631),{Comment:A,Like:B,LikeFilled:_}=i(24695),{Dot:D}=i(91470),P=i(27517),H=i(22509),O=i(61057),{trackContentEngagementEvent:W,trackUserAccountEvent:q}=i(14307),{commentingAction:j}=i(85554),Y=i(74657).A,K=({className:e,commentingUrl:t,commentReactionHandler:i,handleShowMore:a,handleUsernameChange:K,hasCommunityExperienceEnabled:G,hasErrored:z=!1,hasNextPage:V=!1,id:J,isLoading:X=!1,items:Q,replyLimit:Z,reviewModalProps:ee,shouldEnableRatings:te,shouldEnableReply:ie,shouldEnableTags:ae=!1,shouldEnableUpvotes:ne,showMessageBannerHandler:oe,showMoreButtonLabel:re,signInHed:se,signInHedSpanTag:le,signInMessage:de,siteUserName:ce,updateUserReactions:me,user:ue,usernameSignInDek:ge,userReactions:pe})=>{n.useEffect((()=>{(async()=>{await d(),l("ReviewList")})()}),[]);const[he,fe]=r({}),[be,we]=r([]),{formatMessage:ye}=o(),ve=s((e=>{if(ue?.isAuthenticated)ce?(we((t=>[...t,e])),fe((t=>({...t,[e]:!0})))):void 0!==ce&&(O.doDisplayModal({dangerousDek:ge,successCallback:t=>{K(t),we((t=>[...t,e])),fe((t=>({...t,[e]:!0})))},source:"community_reply"}),q({type:"impression",subject:"username_modal",label:"Create Username",source_type:"community_reply"}));else{const e="COMMUNITY_REPLY_TO_COMMENT",t=new URL(window.location);t.hash=j.LEAVE_REPLY,t.searchParams.set("source",e);const i={subject:"community_comment",label:"Reply",source_type:e,type:"login"};H.doDisplayModal({dangerousDek:de,dangerousHed:se,dangerousHedSpanTag:le,redirectURL:t.href,shouldHideIllustration:!0,source:e,snowplowData:i})}W({type:"attempt",subject:"community_comment",label:"reply",items:[{content_id:e}]},{skipDuplicateEvent:!1})}),[ce]),Re=re??ye(Y.showMoreButtonLabel);return n.createElement(g,{className:e,id:J,tabIndex:"-1"},Q&&Q.length>0?n.createElement(p,null,Q.map((e=>{const{id:a,commentId:o,text:r,username:s,location:l,date:d,rating:g,replies:p,replyPageInfo:M,recipeId:C,revisionId:H,tags:O}=e||{},q=pe[o]||{},{viewerActionPresence:j=!1,reactionCount:z=0}=q,V=ae&&!!O?.length;return G?n.createElement(k,{key:[a,r,s,d].join("-")},n.createElement(S,null,s&&n.createElement(E,{key:s,as:"div"},n.createElement(I,null,s)),te&&g&&n.createElement(E,null,n.createElement(c,{averageRatingCount:g}))),n.createElement(S,null,n.createElement(E,{as:"div"},V&&n.createElement(n.Fragment,null,O.map((e=>n.createElement(P,{key:e},e))),n.createElement(D,null)),n.createElement(L,null,d))),r&&n.createElement(x,{dangerouslySetInnerHTML:{__html:r}}),n.createElement(F,null,n.createElement(S,null,ne&&n.createElement($,{isIconButton:!0,name:"comment-reaction",label:"Reaction",onClickHandler:()=>(({item:e})=>{const t=pe[e.commentId]?.viewerActionPresence?"unlike":"like";W({type:t,subject:"community_comment"},{skipDuplicateEvent:!1}),i({item:e})})({item:e}),ButtonIcon:j?_:B}),ne&&n.createElement(N,null,z),ie&&n.createElement(U,{onClick:()=>ve(o)},n.createElement(A,null),n.createElement(T,null,ye(Y.reviewReplyLabel))))),he[o]&&be.includes(o)&&ue?.isAuthenticated&&n.createElement(m,{commentId:o,username:s,recipeId:C,revisionId:H,commentingUrl:t,closeReply:()=>(e=>{fe((t=>({...t,[e]:!1})))})(o),reviewModalProps:ee,showMessageBannerHandler:oe,source:"community_comment"}),p&&p.length>0&&n.createElement(u,{username:s,replies:p,replyPageInfo:M,reviewModalProps:ee,commentReactionHandler:i,user:ue,userReactions:pe,updateUserReactions:me,usernameSignInDek:ge,signInHed:se,signInHedSpanTag:le,signInMessage:de,shouldEnableReply:ie,commentId:o,replyLimit:Z,siteUserName:ce,handleUsernameChange:K,recipeId:C,showMessageBannerHandler:oe,commentingUrl:t,shouldEnableUpvotes:ne})):n.createElement(h,{key:[a,r,s,l,d].join("-")},r?n.createElement(f,null,r):null,s||l||d?n.createElement(b,null,s?n.createElement(w,{key:s},n.createElement(y,null,s)):null,l?n.createElement(w,{key:l},n.createElement(v,null,l)):null,d?n.createElement(w,{key:d},n.createElement(R,null,d)):null):null)}))):null,!z&&V&&n.createElement(M,{inputKind:"button",onClickHandler:a,label:X?ye(Y.loading):Re,isDisabled:X}),z?n.createElement(C,null,ye(Y.reviewListError,{br:n.createElement("br",null)})):null)};K.propTypes={className:a.string,commentingUrl:a.string.isRequired,commentReactionHandler:a.func,handleShowMore:a.func,handleUsernameChange:a.func,hasCommunityExperienceEnabled:a.bool,hasErrored:a.bool,hasNextPage:a.bool,id:a.string,isLoading:a.bool,items:a.arrayOf(a.shape({id:a.number,text:a.string,username:a.string,date:a.string,revisionId:a.string.isRequired,commentId:a.string.isRequired,viewerActionPresence:a.bool,reactionCount:a.number})),replyLimit:a.number,reviewModalProps:a.object,shouldEnableRatings:a.bool,shouldEnableReply:a.bool,shouldEnableTags:a.bool,shouldEnableUpvotes:a.bool,showMessageBannerHandler:a.func,showMoreButtonLabel:a.string,signInHed:a.string,signInHedSpanTag:a.string,signInMessage:a.string,siteUserName:a.string,updateUserReactions:a.func,user:a.shape({amguuid:a.string,isAuthenticated:a.bool.isRequired}).isRequired,usernameSignInDek:a.string,userReactions:a.objectOf(a.shape({viewerActionPresence:a.bool.isRequired,reactionCount:a.number.isRequired}).isRequired)},e.exports=K},47125:(e,t,i)=>{e.exports=i(8101)},16631:(e,t,i)=>{const a=i(75999).default,{BaseLink:n,BaseText:o}=i(76955),{calculateSpacing:r,getColorStyles:s,getColorToken:l,getTypographyStyles:d,maxScreen:c}=i(26865),{BREAKPOINTS:m}=i(96472),u=i(43438),g=i(73730),{ToggleButton:p}=i(18161),{RatingWrapper:h,RatingStarHalf:f,RatingStar:b,RatingLabel:w,RatingInput:y}=i(97927),v=a(g.Primary).withConfig({displayName:"ReviewListButton"})`
  align-self: center;
  margin-top: ${r(4)};
  margin-bottom: ${r(4)};
`,R=a(o).withConfig({displayName:"ReviewListDate"})``;R.defaultProps={as:"time"},R.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const M=a(o).withConfig({displayName:"ReviewListLocation"})``;M.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const C=a(o).withConfig({displayName:"ReviewListUsername"})``;C.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const x=a(o).withConfig({displayName:"ReviewListMetaItem"})`
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    &::before {
      margin: 0 ${r(1)};
      content: '·';
    }
  }
`;x.defaultProps={as:"li",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const I=a.ul.withConfig({displayName:"ReviewListMeta"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${r(2)} 0 0;
  padding: 0;
  list-style: none;
`,E=a(o).withConfig({displayName:"ReviewListReview"})``;E.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const L=a.li.withConfig({displayName:"ReviewListItem"})`
  margin-top: ${r(3)};
  border-width: 1px 0 0;
  border-style: solid;
  ${({theme:e})=>s(e,"border-color","colors.consumption.body.standard.divider")};
  padding-top: ${r(3)};

  :first-child {
    margin-top: 0;
    border-top: 0;
    padding-top: 0;
  }
`,N=a.ul.withConfig({displayName:"ReviewListItems"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`,T=a(u).withConfig({displayName:"ReviewListCarat"})`
  margin-left: ${r(1)};
  width: ${r(1)};
  height: ${r(1)};
  ${({theme:e})=>s(e,"fill","colors.interactive.base.black")};

  path {
    transform: rotate(180deg);
    transform-origin: center;
  }
`,S=a(n).withConfig({displayName:"ReviewListUtilityLink"})``;S.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-bulletin"};const k=a(o).withConfig({displayName:"ReviewListTitle"})``;k.defaultProps={as:"h2",colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const $=a.div.withConfig({displayName:"ReviewListTitleWrapper"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${r(4)} 0 0;
  ${({disableTopBorder:e,theme:t})=>!e&&`border-width: 2px 0 0;\n      border-style: solid;\n      ${s(t,"border-color","colors.consumption.body.standard.divider")};\n      padding-top: ${r(4)};\n    `}
  ${({disableTopBorder:e})=>e&&`\n      padding-bottom: ${r(4)};\n    `}
`,U=a.div.withConfig({displayName:"ReviewListWrapper"})`
  display: flex;
  flex-direction: column;
  outline: none;
  ${c(m.md)} {
    margin-left: calc(-1 * var(--grid-margin));
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
    /* Full bleed effect */
    width: calc(100% + (2 * var(--grid-margin)));
  }
`,F=a(o).withConfig({displayName:"ReviewListError"})`
  margin: ${r(4)} 0;
  text-align: center;
`,A=a.li.withConfig({displayName:"ReviewItem"})`
  margin-top: ${r(3)};
  border-width: 1px 0 0;
  border-style: solid;
  ${({theme:e})=>s(e,"border-color","colors.consumption.body.standard.divider")};
  padding-top: ${r(3)};

  :first-child {
    margin-top: ${r(4)};
    border-top: 0;
    padding-top: 0;
    ${c(m.md)} {
      margin-top: ${r(3)};
    }
  }

  :last-child {
    margin-bottom: ${r(3)};
    ${c(m.md)} {
      margin-bottom: ${r(3)};
    }
  }

  ${p} {
    ${({theme:e})=>d(e,"typography.definitions.foundation.link-utility")};
    background-color: rgba(
      ${l("colors.interactive.social.primary-hover",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>s(e,"color","colors.interactive.base.black")};

    &[aria-checked='true'] {
      transition: none;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      outline: 0;
      box-shadow: none;
      cursor: unset;
      text-decoration: none;
    }
  }
  ${h} {
    padding: 0;
  }
`,B=a(o).withConfig({displayName:"ReviewerUserName"})`
  padding-right: 10px;
  ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>d(e,"typography.definitions.globalEditorial.accreditation-feature")};

  ${c(m.md)} {
    padding-right: ${r(1)};
  }
`,_=a(o).withConfig({displayName:"ReviewListTimeStamp"})`
  ${({theme:e})=>s(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>d(e,"typography.definitions.foundation.meta-secondary")};
`,D=a(o).withConfig({displayName:"ReviewText"})`
  word-wrap: break-word;
  white-space: pre-wrap;

  ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.body-core")};
`,P=a(o).withConfig({displayName:"ReviewListMetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;

  &&& {
    ${f} {
      path {
        ${({theme:e})=>s(e,"fill","colors.background.brand")};
      }
    }
    ${b} {
      width: ${r(2.5)};
    }
    ${y} {
      &:disabled + ${w} {
        cursor: unset;
      }
    }

    ${p}:not(:first-of-type) {
      margin-left: ${r()};
    }
  }
`,H=a(o).withConfig({displayName:"ReviewLikeCount"})`
  padding-right: ${r(2)};
  ${({theme:e})=>s(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.citation")};
`,O=a(o).withConfig({displayName:"ReviewReplyLabel"})`
  ${({theme:e})=>s(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.citation")};
  cursor: pointer;
  padding-right: ${r(.5)};
`,W=a.div.withConfig({displayName:"ReviewReplyWrapper"})`
  display: flex;
  flex-direction: row;
`,q=a.div.withConfig({displayName:"ReviewReplyWrapper"})`
  margin-top: ${r(1.25)};
`,j=a.ul.withConfig({displayName:"ReviewListMetaInfo"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${r(4)}, ${r(4)};
  padding: 0;
  list-style: none;

  :first-child {
    margin-bottom: 10px;
    ${c(m.md)} {
      margin-bottom: ${r(1)};
    }
  }

  &:not(:first-child) {
    margin-bottom: ${r(1.5)};
    ${c(m.md)} {
      margin-bottom: ${r(2)};
    }
  }

  :last-child {
    margin-top: ${r(1.5)};
    margin-bottom: ${r(1)};
    ${c(m.md)} {
      margin-top: ${r(2)};
      margin-bottom: 0;
    }
  }

  .icon-dots {
    padding-right: 6px;
    padding-left: 6px;

    ${({theme:e})=>s(e,"fill","colors.interactive.base.dark")};

    ${c(m.md)} {
      padding-right: ${r(.5)};
      padding-left: ${r(.5)};
    }
  }

  .icon-like,
  .icon-like-filled,
  .icon-comment {
    margin-top: 3px;
    cursor: pointer;
    width: ${r(4)};
    height: 18px;

    path {
      ${({theme:e})=>s(e,"fill","colors.interactive.base.dark")};
      ${({theme:e})=>s(e,"stroke","colors.interactive.base.dark")};
    }

    &:hover path {
      ${({theme:e})=>s(e,"fill","colors.interactive.base.black")};
      ${({theme:e})=>s(e,"stroke","colors.interactive.base.black")};
    }
  }

  .icon-like-filled {
    width: ${r(4)};
    height: 18px;

    path {
      ${({theme:e})=>s(e,"fill","colors.interactive.base.black")};
      ${({theme:e})=>s(e,"stroke","colors.interactive.base.black")};
    }
  }
`,Y=a(g.Utility).withConfig({displayName:"ReviewListReactionButton"})`
  padding: 0;

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`;e.exports={ReviewListWrapper:U,ReviewListTitleWrapper:$,ReviewListTitle:k,ReviewListUtilityLink:S,ReviewListCarat:T,ReviewListItems:N,ReviewListItem:L,ReviewListReactionButton:Y,ReviewListReview:E,ReviewListMeta:I,ReviewListMetaItem:x,ReviewListUsername:C,ReviewListLocation:M,ReviewListDate:R,ReviewListButton:v,ReviewListError:F,ReviewerUserName:B,ReviewListMetaData:P,ReviewListTimeStamp:_,ReviewText:D,ReviewLikeCount:H,ReviewReplyLabel:O,ReviewListMetaInfo:j,ReviewItem:A,ReviewReplyWrapper:W,ReviewReplyMetaDataWrapper:q}},74657:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({loading:{id:"ReviewList.Loading",defaultMessage:"Loading…",description:"Button label while list loads"},reviewListError:{id:"ReviewList.ReviewListError",defaultMessage:"Sorry, more reviews can‘t be loaded right now. {br} Please try again later.",description:"Error message while loading list"},reviewReplyLabel:{id:"ReviewList.ReviewReplyLabel",defaultMessage:"Reply",description:"Reply Icon label"},showMoreButtonLabel:{id:"ReviewList.showMoreButtonLabel",defaultMessage:"Show more comments",description:"Label for show more button"}})},5697:(e,t,i)=>{const{getFromNowDateFormat:a}=i(45526);e.exports={getFromNowDateFormat:a}},45526:(e,t,i)=>{const a=i(39965);e.exports={getFromNowDateFormat:({locale:e="en-US",date:t,formatMessage:i,includeHourAndMin:n=!1})=>{const o=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"always",style:"long"}),r=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit",hour12:!0,localeMatcher:"best fit"}),s=864e5,l=30*s,d=365*s,c=25*s,m=45*s,u=319*s,g=547*s;return(e=>{if(e){const t=(e=>{const t=(new Date).getTime()-new Date(e).getTime();return t<=44e3?i(a.fewSecondsAgoLabel):t<=89e3?i(a.aMinAgoLabel):t<=264e4?o.format(-Math.ceil(t/6e4),"minute"):t<=534e4?i(a.anHourAgoLabel):t<=756e5?o.format(-Math.ceil(t/36e5),"hour"):t<=126e6?i(a.aDayAgoLabel):t<=c?o.format(-Math.ceil(t/s),"day"):t<=m?i(a.aMonthAgoLabel):t<=u?o.format(-Math.ceil(t/l),"month"):t<=g?i(a.aYearAgoLabel):o.format(-Math.ceil(t/d),"year")})(e),p=r.format(new Date(e));return n?`${t}, ${p}`:t}return null})(t)}}},39965:(e,t,i)=>{const{defineMessages:a}=i(37243);e.exports=a({fewSecondsAgoLabel:{id:"LiveStory.feedFewSecondsAgoLabel",defaultMessage:"a few seconds ago",description:""},aMinAgoLabel:{id:"LiveStory.feedAMinAgoLabel",defaultMessage:"a minute ago",description:""},anHourAgoLabel:{id:"LiveStory.feedAnHourAgoLabel",defaultMessage:"an hour ago",description:""},aDayAgoLabel:{id:"LiveStory.feedADayAgoLabel",defaultMessage:"a day ago",description:""},aMonthAgoLabel:{id:"LiveStory.feedAMonthAgoLabel",defaultMessage:"a month ago",description:""},aYearAgoLabel:{id:"LiveStory.feedAYearAgoLabel",defaultMessage:"a year ago",description:""}})},74491:(e,t,i)=>{const a=i(96540),n=i(5556),{useIntl:o}=i(37243),{trackComponent:r}=i(92716),{interactionResponse:s}=i(56187),l=i(52205).A,{ReviewFormQuestion:d,ReviewFormActions:c,ReviewFormRadioGroup:m,ReviewFormSubmitButton:u,ReviewFormRadio:g,ReviewFormMinimised:p,ReviewFormSignin:h,ReviewFormWrapper:f,ReviewFormHed:b,ReviewFormWithValidation:w,ReviewFormAlert:y,ReviewFormTextFieldErrorText:v}=i(68027),R=i(67685),M=i(89662),C=e=>{const t=[...e.elements].reduce(((e,t)=>{let{value:i}=t;const a="checkbox"===t.type,n="radio"===t.type,o=!t.checked,r=""===i;if(a&&(i=t.checked),r)return e;if(n){if(o)return e;i=Boolean(Number(i))}return e[t.name]=i,e}),{});return t["g-recaptcha-response"]&&delete t["g-recaptcha-response"],t},x=({ariaLabel:e,children:t,isSignedIn:i,onMinimise:n,hasReviewFormSignIn:o,signInURL:r})=>i?a.createElement(p,{role:"button",tabIndex:"0",onClick:n,onKeyPress:n,"aria-label":e},t):a.createElement(p,null,o&&a.createElement(h,{href:r,rel:"nofollow",id:"stacy"},e),a.createElement("div",null,t));x.propTypes={ariaLabel:n.string.isRequired,children:n.node.isRequired,hasReviewFormSignIn:n.bool,isSignedIn:n.bool.isRequired,onMinimise:n.func.isRequired,signInURL:n.string.isRequired};const I=({className:e,error:t,externalValidationErrors:i,fakeInputPlaceholderText:n,hasReviewFormSignIn:p=!0,hasSucceeded:h,hed:I,isMinimised:E=!0,isSubmitting:L=!1,onClickHandler:N=(()=>{}),onSubmitHandler:T,signInURL:S,userId:k})=>{a.useEffect((()=>{(async()=>{await s(),r("ReviewForm")})()}),[]);const $=o(),[U,F]=a.useState(i||{}),[A,B]=a.useState(!1),[_,D]=a.useState(!1),[P,H]=a.useState(E),[O,W]=a.useState(!1),q=a.useRef();a.useEffect((()=>{W(!!k)}),[k]);const j=$.formatMessage(l.invalidFieldErrorMessage),Y=n||$.formatMessage(l.fakeInputPlaceholderText);return a.useEffect((()=>{window.location.hash.includes("leave-a-review")&&q?.current?.scrollIntoView({block:"start"})}),[q]),a.useEffect((()=>{i&&F(((e,t)=>e?.reduce(((e,i)=>i.context?.peers?(i.context?.peers.forEach((i=>{e[i]=t})),e):(e[i.context.key]=t,e)),{}))(i,j))}),[i,j]),a.createElement(f,{className:e,ref:q,"data-testid":"ReviewForm",onClick:N},a.createElement(b,{isTextDisabled:!p&&!O},I||$.formatMessage(l.hed)),t&&a.createElement(y,null,$.formatMessage(l.alertMessageError)),h&&!t&&a.createElement(y,null,$.formatMessage(l.alertMessageSuccess)),!t&&!h&&P&&a.createElement(x,{ariaLabel:Y,onMinimise:e=>{e.preventDefault(),H(!1)},signInURL:S,isSignedIn:O,hasReviewFormSignIn:p},a.createElement(M.SingleLine,{name:"isMinimised",formName:"isMinimised",label:$.formatMessage(l.reviewTextFieldLabel),placeholder:Y,tabIndex:"-1","aria-hidden":!0,hideLabel:!0})),!t&&!h&&!P&&a.createElement(w,{onSubmitHandler:e=>{F({});const t={...C(e.target)};t.reviewerInfo||(t.isAnonymous=!0),T&&T(t)},errorMessages:U,"data-testid":"review-form-with-validation"},a.createElement("input",{type:"hidden",name:"userId",value:k}),a.createElement(M.MultiLine,{hasAutoFocus:!0,name:"reviewText",formName:"reviewText",label:$.formatMessage(l.reviewTextFieldLabel),hideLabel:!0,placeholder:$.formatMessage(l.reviewTextFieldPlaceholder),errorText:U.reviewText,isDisabled:L,charCountHandler:e=>{D(e>0)}}),a.createElement(M.SingleLine,{name:"reviewerInfo",formName:"reviewerInfo",label:$.formatMessage(l.reviewerInfoFieldLabel),placeholder:$.formatMessage(l.reviewerInfoFieldPlaceholder),errorText:U.reviewerInfo,isDisabled:A||L}),a.createElement(R.Checkbox,{index:1,name:"isAnonymous",formName:"isAnonymous",label:$.formatMessage(l.isAnonymousCheckboxLabel),value:"yes",errorText:U.isAnonymous,onChangeHandler:e=>{B(e.target.checked)},isDisabled:L}),a.createElement(M.SingleLine,{className:"review-form__location",name:"location",formName:"location",label:$.formatMessage(l.locationFieldLabel),placeholder:$.formatMessage(l.locationFieldPlaceholder),errorText:U.location,isDisabled:L}),a.createElement(m,{"aria-labelledby":"review-form__question",role:"radiogroup"},a.createElement(d,{id:"review-form__question"},$.formatMessage(l.willPrepareAgainRadioLabel)),a.createElement(g,{index:1,ariaLabelledBy:"review-form__question",name:"willPrepareAgain",formName:"willPrepareAgain",label:$.formatMessage(l.willPrepareAgainOption1Label),value:"1",isDisabled:L}),a.createElement(g,{index:2,ariaLabelledBy:"review-form__question",name:"willPrepareAgain",formName:"willPrepareAgain",label:$.formatMessage(l.willPrepareAgainOption2Label),value:"0",isDisabled:L})),a.createElement(c,{"data-testid":"ReviewFormActions"},a.createElement(u,{inputKind:"submit",label:$.formatMessage(L?l.submitButtonLabelLoading:l.submitButtonLabel),isDisabled:!_||L}),Object.keys(U).length>0&&a.createElement(v,null,j))))};I.propTypes={className:n.string,error:n.string,externalValidationErrors:n.arrayOf(n.object),fakeInputPlaceholderText:n.string,hasReviewFormSignIn:n.bool,hasSucceeded:n.bool,hed:n.string,isMinimised:n.bool,isSubmitting:n.bool,onClickHandler:n.func,onSubmitHandler:n.func,signInURL:n.string.isRequired,userId:n.string},e.exports=I},24465:(e,t,i)=>{const a=i(74491);e.exports=a},68027:(e,t,i)=>{const a=i(75999).default,n=i(72983),o=i(67685),r=i(73730),{BaseLink:s,BaseText:l}=i(76955),{UtilitySelectionControlLabelWrapper:d}=i(20404),{calculateSpacing:c,getColorStyles:m,getTypographyStyles:u}=i(26865),{TextFieldLabelText:g,TextFieldErrorText:p}=i(60434),h=a.div.withConfig({displayName:"ReviewFormWrapper"})`
  .review-form__location {
    ${g} {
      ${({theme:e})=>u(e,"typography.definitions.utility.label")}
      ${({theme:e})=>m(e,"color","colors.discovery.body.white.heading")};
    }
  }
`,f=a(l).withConfig({displayName:"ReviewFormHed"})`
  padding-bottom: ${c(3)};
  ${({isTextDisabled:e})=>e&&"opacity: 0.5;"};
`;f.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const b=a(l).withConfig({displayName:"ReviewFormAlert"})`
  border-bottom: 1px solid;
  ${({theme:e})=>m(e,"border-color","colors.consumption.body.standard.divider")};
  padding-bottom: ${c(4)};
`,w=a(n).withConfig({displayName:"ReviewFormWithValidation"})`
  > div,
  > label,
  > span {
    padding-bottom: ${c(4)};
  }

  .text-field {
    margin-bottom: 0;
  }
`,y=a.div.withConfig({displayName:"ReviewFormActions"})`
  margin-bottom: ${c(4)};
  border-bottom: 1px solid;
  ${({theme:e})=>m(e,"border-color","colors.consumption.body.standard.divider")};
`,v=a.div.withConfig({displayName:"ReviewFormRecaptcha"})``,R=a(s).withConfig({displayName:"ReviewFormSignin"})``,M=a.div.withConfig({displayName:"ReviewFormMinimised"})`
  position: relative;

  input.text-field__control {
    cursor: pointer;
  }

  ${R} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: transparent;
  }
`,C=a.div.withConfig({displayName:"ReviewFormRadioGroup"})`
  height: 82px;
`,x=a(o.Radio).withConfig({displayName:"ReviewFormRadio"})`
  &${d} {
    display: inline-grid;

    &:last-child {
      margin-left: ${c(3.5)};
    }
  }
`,I=a(l).withConfig({displayName:"ReviewFormQuestion"})`
  padding-bottom: ${c(1)};
  ${({theme:e})=>m(e,"color","colors.discovery.body.white.heading")};
  ${({theme:e})=>u(e,"typography.definitions.utility.label")};
`;I.defaultProps={as:"div"};const E=a(r.Primary).withConfig({displayName:"ReviewFormSubmitButton"})`
  width: 100%;
`,L=a(p).withConfig({displayName:"ReviewFormTextFieldErrorText"})``;e.exports={ReviewFormQuestion:I,ReviewFormRadioGroup:C,ReviewFormHed:f,ReviewFormActions:y,ReviewFormAlert:b,ReviewFormRecaptcha:v,ReviewFormSubmitButton:E,ReviewFormWithValidation:w,ReviewFormWrapper:h,ReviewFormSignin:R,ReviewFormMinimised:M,ReviewFormRadio:x,ReviewFormTextFieldErrorText:L}},52205:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({hed:{id:"ReviewForm.Hed",defaultMessage:"Leave a Review",description:"Form's heading"},fakeInputPlaceholderText:{id:"ReviewForm.FakeInputPlaceholderText",defaultMessage:"Tell us what you think",description:"Appears when the form is minimised"},invalidFieldErrorMessage:{id:"ReviewForm.InvalidFieldErrorMessage",defaultMessage:"Required fields missing",description:"Message for when fields are missing"},alertMessageError:{id:"ReviewForm.AlertMessageError",defaultMessage:"Your feedback wasn't posted due to some error, please try again.",description:"Message for the alert when the review form errors"},alertMessageSuccess:{id:"ReviewForm.AlertMessageSuccess",defaultMessage:"Thanks for your feedback!",description:"Message for the alert when the review form is succesful"},reviewTextFieldLabel:{id:"ReviewForm.ReviewTextFieldLabel",defaultMessage:"Your Review",description:"The label for the main review text field"},reviewTextFieldPlaceholder:{id:"ReviewForm.ReviewTextFieldPlaceholder",defaultMessage:"Let us know your thoughts…",description:"The placeholder hint message for the main review text field"},reviewerInfoFieldLabel:{id:"ReviewForm.ReviewerInfoFieldLabel",defaultMessage:"Display Name",description:"The label for the reviewer name field"},reviewerInfoFieldPlaceholder:{id:"ReviewForm.ReviewerInfoFieldPlaceholder",defaultMessage:"Jane Doe",description:"The placeholder hint message for the reviewer name field"},isAnonymousCheckboxLabel:{id:"ReviewForm.IsAnonymousCheckboxLabel",defaultMessage:"Share anonymously",description:"The label for the anonymous checkbox"},locationFieldLabel:{id:"ReviewForm.LocationFieldLabel",defaultMessage:"Where are you from?",description:"The label for the location field"},locationFieldPlaceholder:{id:"ReviewForm.LocationFieldPlaceholder",defaultMessage:"Boston, MA",description:"The placeholder hint message for the location field"},willPrepareAgainRadioLabel:{id:"ReviewForm.WillPrepareAgainRadioLabel",defaultMessage:"Would you make this recipe again?",description:"The label for the radio group"},willPrepareAgainOption1Label:{id:"ReviewForm.WillPrepareAgainOption1Label",defaultMessage:"Yes",description:"The label for first option in the radio group"},willPrepareAgainOption2Label:{id:"ReviewForm.WillPrepareAgainOption2Label",defaultMessage:"No",description:"The label for second option in the radio group"},submitButtonLabel:{id:"ReviewForm.SubmitButtonLabel",defaultMessage:"Submit",description:"The label for submit button"},submitButtonLabelLoading:{id:"ReviewForm.SubmitButtonLabelLoading",defaultMessage:"Loading…",description:"The label for submit button when it's loading"}})},3890:(e,t,i)=>{const a=i(96540),n=i(5556),{useIntl:o}=i(37243),{useEffect:r,useRef:s,useState:l}=i(96540),{trackMessageUnitEvent:d}=i(14307),{trackComponent:c}=i(92716),{interactionResponse:m}=i(56187),u=i(25965),g=i(15343),p=i(99244),h=i(39321).A,f=i(61057),b=i(45771),{trackUserAccountEvent:w}=i(14307),{AlertArrow:y,ReviewNoteFormWrapper:v,ReviewNoteSectionContainer:R,ReviewNoteUserInfo:M,ReviewerInfoLabel:C,ReviewerName:x,ReviewerInfoIconButtonWrapper:I,ReviewNoteRatingWrapper:E,RatingFormRating:L,ReviewNotesFormSignin:N,ReviewNotesFormMinimised:T,ReviewerRatingLabel:S,ReviewerInfoAlertToolTip:k,ReveiwerInfoText:$,ReviewTagsInfoLabel:U,ReviewNotesToggleChipListWrapper:F,ReviewNotesFormActions:A,ReviewNotesFormCancelButton:B,ReviewNotesFormTextFieldErrorText:_,ReviewNotesFormSubmitButton:D,ReviewNotesSignInMessageBanner:P,MessageBannerText:H,ReviewNoteTextField:O,ReviewNotesDivider:W}=i(37887),q=i(89662),j=i(73730),{trackContentEngagementEvent:Y}=i(14307),{useOutsideClick:K}=i(87098),G=({ariaLabel:e,children:t,handleUserSignInStatus:i,isSignedIn:n,onMinimise:o,hasReviewNotesFormSignIn:r,signInURL:s,usernameSignInDek:l,trackAddNoteEvent:d,handleUsernameChange:c,siteUserName:m})=>{const u={type:"impression",label:"Create Username",subject:"username_modal",source_type:"community_comment"};return n?a.createElement(T,{role:"button",tabIndex:"0",onClick:e=>{d(),(e=>{m?o(e,m):void 0!==m&&(w(u),f.doDisplayModal({dangerousDek:l,successCallback:t=>{c(t),o(e,t)},source:"community_comment"}))})(e)},onKeyPress:o,"aria-label":e},t):a.createElement(T,{onClick:e=>{i(e)}},r&&a.createElement(N,{href:s,rel:"nofollow",id:"stacy"},e),a.createElement("div",null,t))};G.propTypes={ariaLabel:n.string.isRequired,children:n.node.isRequired,handleUsernameChange:n.func.isRequired,handleUserSignInStatus:n.func,hasReviewNotesFormSignIn:n.bool,isSignedIn:n.bool.isRequired,onMinimise:n.func.isRequired,signInURL:n.string.isRequired,siteUserName:n.string,trackAddNoteEvent:n.func,usernameSignInDek:n.string};const z=({addNoteFailedToastMessage:e,addNoteLabel:t,className:i,shouldEnableTags:n=!1,reviewNoteTags:f=[],reviewerRatingLabel:w,shouldUseInteractiveBrandColor:N=!1,validations:{min:T=5,max:z=3e3,remainingChar:V=100,errorMessage:J={}}={},brandName:X,signUpMessageBannerText:Q,usernameSignInDek:Z,modalProps:ee={},minimisedReviewNotesText:te,nonLoggedInErrorMessage:ie,hasReviewNotesFormSignIn:ae=!0,isMinimised:ne=!0,reviewerInfoText:oe,signInURL:re,userId:se,handleUsernameChange:le,onSubmitHandler:de,reviewerInfoFieldLabel:ce,reviewTagsLabel:me,siteUserName:ue,showSavedRecipeNotes:ge,shouldEnableRatings:pe,showMessageBannerHandler:he})=>{a.useEffect((()=>{(async()=>{await m(),c("ReviewNotesForm")})()}),[]);const fe={reviewNote:"",toggleChip:[],...pe&&{rating:null}},be=o(),[we,ye]=l(fe),[ve,Re]=l({}),[Me,Ce]=l(""),[xe,Ie]=l(!0),[Ee,Le]=l(f),[Ne,Te]=l(!1),Se={reviewNote:[{test:e=>e.length>=T&&e.length<=z,error:"invalidReviewLength"}],rating:[{test:e=>e>=1,error:"requiredField"}]},[ke,$e]=a.useState(ne),[Ue,Fe]=a.useState(!1),[Ae,Be]=a.useState(!1),[_e,De]=l(!1);r((()=>{Fe(!!se)}),[se]);const Pe=te||be.formatMessage(h.defaultcommunityReviewText),He=(e,t)=>{const i=Se[e];if(!i)return null;for(const a of i)if(!a.test(t))return Re((t=>({...t,[e]:a.error}))),a.error;return Re((t=>{const{[e]:i,...a}=t;return a})),null},Oe=e=>t=>{let i;switch(e){case"reviewNote":i=t.target.value.trim(),(e=>{e.length>=z?Ce(be.formatMessage(h.maxCharLimitMet).replace("_MAX_",z)):z-e.length<=V?Ce(be.formatMessage(h.remainingMaxCharLimit).replace("_COUNT_",z-e.length).replace("_MAX_",z)):Ce("")})(i);break;case"toggleChip":i=(e=>{const t=Ee.map((t=>t.slug===e?{...t,active:!t.active}:t));return Le((e=>(((e,t)=>{const i=e.filter((e=>e.active)),a=[];if(!1===t[0].active&&!0===e[0].active||!1===t[1].active&&!0===e[1].active){const e=i.map((e=>e.slug.toLowerCase())),t=1===i.length?i[0].description:"";if(1===i.length)a.push({name:e[0],index:0,total_index:1});else{if(!["tip","question"].every((t=>e.includes(t))))return;a.push({name:"tip",index:0,total_index:1},{name:"question",index:0,total_index:1})}Y({type:"select",label:t,subject:"community_comment",features_list:a},{skipDuplicateEvent:!1})}})(t,e),t))),t})(t);break;default:i=t}ye({...we,[e]:i}),"reviewNote"===e&&i.length<T||He(e,i)},We=()=>{Y({type:"attempt",subject:"community_comment"},{skipDuplicateEvent:!1})},qe=s(null),je=s(null),Ye=a.useRef(null),Ke=e=>{qe.current&&!qe.current.contains(e.target)&&Ie(!0),je.current&&je.current.id!==e.target?.firstChild.id&&Be(!1)};K(qe,(e=>Ke(e))),K(je,(e=>Ke(e)));const{discardLabel:Ge="Yes, discard it"}=ee,ze=()=>{Ye.current.value="",Le(f),ye({...fe}),Re({}),$e(!0),Te(!1),Ce("")},Ve=(e,t)=>{const i=e[t];if(!i)return"";const a=J[i];return a?a.replace("_MIN_",T):be.formatMessage(h[i],{min:T})},Je=Ve(ve,"reviewNote"),Xe=Me.length>0;return a.createElement(v,{className:i,"data-testid":"ReviewNotesForm"},!Ue&&!se&&a.createElement(P,null,a.createElement(H,null,Q??be.formatMessage(h.messageBannerText,{brandName:X})),a.createElement(j.Primary,{href:re,inputKind:"link",label:be.formatMessage(h.buttonLabel),btnStyle:"outlined",target:"_self",rel:"nofollow noreferrer",onClickHandler:e=>{const t={type:"login",label:e.target.innerText,subject:"community",placement:"interstitial",state:"focused",source_type:"COMMUNITY_LOGIN"};d(t)}})),ke?a.createElement(G,{ariaLabel:Pe,onMinimise:(e,t)=>{e.preventDefault(),t&&$e(!1),ge(!1)},signInURL:re,isSignedIn:Ue,trackAddNoteEvent:We,handleUserSignInStatus:e=>{e.preventDefault(),Ae||We(),Ue||Be(!0)},hasReviewNotesFormSignIn:ae,handleUsernameChange:le,siteUserName:ue,usernameSignInDek:Z},a.createElement(O,{name:"isMinimised",formName:"isMinimised",label:be.formatMessage(h.textFieldLabel),placeholder:Pe,hasDynamicTextArea:!0,tabIndex:"-1","aria-hidden":!0,customHeightMultiplier:12,hideLabel:!0,isInvalid:Ae,inputRef:je,isDisabled:Ae}),Ae&&a.createElement(_,null,ie||be.formatMessage(h.nonLoggedInErrorMessage))):a.createElement(R,{hasError:!!Je,hasWarning:Xe},a.createElement(q.MultiLine,{name:"reviewNoteText",placeholder:Pe,hideLabel:!0,label:be.formatMessage(h.textFieldLabel),formName:"reviewNoteText",hasAutoFocus:!0,inputRef:Ye,errorText:Je,onInputChange:Oe("reviewNote"),max:z,errorPosition:"belowTextField",shouldDisableTypingAtMaxChar:!0,isDisabled:_e}),Xe&&a.createElement(_,null,Me),n&&a.createElement(a.Fragment,null,a.createElement(U,null,me||be.formatMessage(h.reviewTagsLabel)),a.createElement(F,{shouldUseInteractiveBrandColor:N},a.createElement(p,null,Ee.map((({slug:e,active:t,description:i})=>a.createElement(g,{key:e,isChecked:t,onChange:()=>Oe("toggleChip")(e),shouldUrlRedirect:!1,isDisabled:_e},be.formatMessage(h.reviewTags,{reviewTag:i}))))))),pe&&a.createElement(E,null,a.createElement(S,null,w??be.formatMessage(h.reviewerRatingLabel)),a.createElement(L,{averageRatingCount:we.rating,isRatingDisabled:!1,onChange:Oe("rating"),shouldShowOutline:!1}),Object.keys(ve).length>0&&a.createElement(_,null,Ve(ve,"rating"))),a.createElement(M,null,a.createElement(C,null,ce||be.formatMessage(h.reviewerInfoFieldLabel)),a.createElement(x,null,ue),a.createElement(I,{ref:qe},a.createElement(j.Utility,{isIconButton:!0,ButtonIcon:u,className:"review-note-user__info-button",onClickHandler:e=>(e=>{e.preventDefault(),Ie(!xe)})(e),inputKind:"button",role:"button",label:be.formatMessage(h.reviewerInfoIconButtonLabel)}),!xe&&a.createElement(k,null,a.createElement(y,null),a.createElement($,null,oe??be.formatMessage(h.reviewerFieldInfoIconText)))),a.createElement(W,null)),a.createElement(b,{confirmButtonCallback:()=>{ze(),(()=>{{const e={type:"discard",label:Ge.toUpperCase(),subject:"community_comment"};Y(e,{skipDuplicateEvent:!1})}})()},modalProps:ee,onClose:()=>Te(!1),isVisible:Ne}),a.createElement(A,{"data-testid":"ReviewNotesFormActions"},a.createElement(D,{isDisabled:_e||Object.keys(ve).length>0,inputKind:"button",label:t||be.formatMessage(h.addNoteLabel),onClickHandler:async()=>{De(!0);const t=(e=>Object.entries(e).reduce(((e,[t,i])=>{const a=He(t,i);return a&&(e[t]=a),e}),{}))(we);if(0===Object.keys(t).length){const t={...we,userId:se};null!=await de(t)?(ze(),ge(!0)):he&&he(e||be.formatMessage(h.AddNoteFailedToastMessage))}De(!1)}}),a.createElement(B,{isDisabled:_e,btnStyle:"text",inputKind:"link",type:"button",label:be.formatMessage(h.cancelNoteLabel),onClickHandler:()=>{Object.values(we).some((e=>(!Array.isArray(e)||0!==e.length)&&Boolean(e)))?Te(!0):($e(!0),Re({}))}}))))};z.propTypes={addNoteFailedToastMessage:n.string,addNoteLabel:n.string,brandName:n.string,className:n.string,handleUsernameChange:n.func,hasReviewNotesFormSignIn:n.bool,isMinimised:n.bool,minimisedReviewNotesText:n.string,modalProps:n.object,nonLoggedInErrorMessage:n.string,onSubmitHandler:n.func,reviewerInfoFieldLabel:n.string,reviewerInfoText:n.string,reviewerRatingLabel:n.string,reviewNoteTags:n.array,reviewTagsLabel:n.string,shouldEnableRatings:n.bool,shouldEnableTags:n.bool,shouldUseInteractiveBrandColor:n.bool,showMessageBannerHandler:n.func,showSavedRecipeNotes:n.func.isRequired,signInURL:n.string.isRequired,signUpMessageBannerText:n.string,siteUserName:n.string,userId:n.string,usernameSignInDek:n.string,validations:n.shape({min:n.number,max:n.number,remainingChar:n.number,errorMessage:n.shape({requiredField:n.string,invalidReviewLength:n.string})})},e.exports=z},45565:(e,t,i)=>{const{asConfiguredComponent:a}=i(12892),n=i(3890);e.exports=a(n,"ReviewNotesForm")},37887:(e,t,i)=>{const{css:a,default:n}=i(75999),{BaseText:o,BaseLink:r}=i(76955),{ButtonWrapper:s}=i(18974),{calculateSpacing:l,getColorStyles:d,getColorToken:c,getTypographyStyles:m,maxScreen:u,minScreen:g}=i(26865),{BREAKPOINTS:p}=i(96472),h=i(62340),{RatingStar:f}=i(97927),{TextFieldControlTextarea:b,TextFieldWrapper:w}=i(60434),y=i(89662),{ListWrapper:v}=i(14952),{ToggleButton:R}=i(18161),M=i(73730),{TextFieldErrorText:C}=i(60434),x=n(y.MultiLine).withConfig({displayName:"ReviewNoteTextField"})`
  margin-bottom: 0;

  textarea:disabled {
    background-color: transparent;
  }
`,I=n.div.withConfig({displayName:"ReviewNoteFormWrapper"})``,E=n.div.withConfig({displayName:"ReviewNoteSectionContainer"})`
  border: 1px solid;
  ${({theme:e})=>d(e,"border-color","colors.interactive.base.light")};
  padding: ${l(3)};
  ${b} {
    margin-top: 0;
    padding: ${l(2)} ${l(1.5)};
    ${({theme:e,hasError:t})=>d(e,"border-color",t?"colors.interactive.base.brand-secondary":"colors.interactive.base.black")};

    &[disabled] {
      ${({theme:e})=>d(e,"background","colors.interactive.base.white")};
      ${({theme:e})=>d(e,"border-color","colors.interactive.base.light")};
      ${({theme:e})=>d(e,"color","colors.consumption.body.standard.subhed")};
    }

    &::placeholder {
      ${({theme:e})=>d(e,"color","colors.interactive.base.light")};
    }
  }
  ${w} {
    ${({hasWarning:e})=>e&&`margin-bottom: ${l(1)};`}
  }
`,L=n.div.withConfig({displayName:"ReviewNoteUserInfo"})`
  margin-top: ${l(4)};
  margin-bottom: ${l(4)};
`,N=n.div.withConfig({displayName:"ReviewNoteRatingWrapper"})`
  margin-top: ${l(1)};
  margin-bottom: ${l(4)};
`,T=n.span.withConfig({displayName:"ReviewerInfoLabel"})`
  ${({theme:e})=>d(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${({theme:e})=>m(e,"typography.definitions.globalEditorial.accreditation-core")};
`,S=n.span.withConfig({displayName:"ReviewerRatingLabel"})`
  ${({theme:e})=>d(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>m(e,"typography.definitions.globalEditorial.accreditation-core")};
`,k=n.span.withConfig({displayName:"ReviewerName"})`
  ${({theme:e})=>d(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>m(e,"typography.definitions.globalEditorial.accreditation-core")};
  padding-left: ${l(.5)};
`,$=n.span.withConfig({displayName:"ReviewTagsInfoLabel"})`
  ${({theme:e})=>d(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>m(e,"typography.definitions.globalEditorial.accreditation-core")};
`,U=n.div.withConfig({displayName:"ReviewerInfoIconButtonWrapper"})`
  display: inline;

  svg {
    width: 24px;
    height: 24px;
    ${({theme:e})=>d(e,"fill","colors.consumption.lead.special.context-tertiary")};
  }

  .review-note-user__info-button {
    float: inline-end;
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    padding: 0;
    padding-left: 12px;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }
`,F=n.div.withConfig({displayName:"ReviewNotesToggleChipListWrapper"})`
  ${R} {
    ${({theme:e})=>m(e,"typography.definitions.foundation.link-utility")}
    ${({shouldUseInteractiveBrandColor:e})=>e?a`
            &[aria-checked='false'] {
              background-color: rgba(
                ${c("colors.interactive.social.primary-hover",{rgbOnly:!0})},
                0.1
              );
            }
          `:`&[aria-checked='false'] {\n          ${d("color","colors.interactive.base.black")}\n      }`}

    &:focus {
      box-shadow: none;
    }

    &:hover {
      box-shadow: 0 0 0 1px ${c("colors.interactive.base.black")}
        inset;
    }

    ${u(p.md)} {
      &:focus,
      &:hover {
        box-shadow: none;
      }
    }

    &:disabled {
      box-shadow: none;
    }
  }
  ${v} {
    padding-bottom: 8px;
    padding-left: 0;
  }
`,A=n(o).withConfig({displayName:"ReveiwerInfoText"})`
  position: absolute;
  left: calc(25% - 10px);
  float: inline-end;
  z-index: -1;
  border-radius: 8px;
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 17px 22px;
  width: 80%;
  box-sizing: border-box;

  ${({theme:e})=>d(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>m(e,"typography.definitions.utility.input-core")};

  ${g(p.sm)} {
    padding: 12px 13px;
  }
  ${g(p.md)} {
    padding: 17px 22px;
  }
`,B=n.div.withConfig({displayName:"AlertArrow"})`
  position: absolute;
  top: auto;
  bottom: 100%;
  left: calc(98% - 11px);
  border-width: 0 10px 13px;
  border-style: solid;
  border-color: rgb(254 254 254) transparent;
`,_=n.div.withConfig({displayName:"ReviewerInfoAlertToolTip"})`
  position: relative;
  z-index: 2;
  margin-top: 8px;
  background-color: ${c("colors.background.white")};

  ${g(p.sm)} {
    ${A} {
      left: calc(8% - 4px);
      width: 100%;
    }
    ${B} {
      left: calc(98% - 14px);
      border-width: 0 8px 12px;
    }
  }

  ${g(p.md)} {
    ${A} {
      left: calc(25% - 10px);
      width: 80%;
    }
    ${B} {
      left: calc(98% - 12px);
      border-width: 0 10px 13px;
    }
  }

  ${g(p.lg)} {
    ${A} {
      left: calc(7% - 10px);
      width: 100%;
    }
    ${B} {
      left: calc(98% - 14px);
      border-width: 0 10px 13px;
    }
  }

  ${g(p.xl)} {
    ${A} {
      left: calc(25% - 10px);
      width: 80%;
    }
    ${B} {
      left: calc(98% - 11px);
      border-width: 0 10px 13px;
    }
  }

  ${g(p.xxl)} {
    ${A} {
      left: calc(34% - 10px);
      width: 70%;
    }
    ${B} {
      left: calc(98% - 8px);
      border-width: 0 10px 13px;
    }
  }
`,D=n(h).withConfig({displayName:"RatingFormRating"})`
  align-items: start;
  padding: ${l()} 0 ${l()};
  ${f} {
    transform: scale(1.78);
    margin: 0 ${l(1.25)};
  }
`,P=n.div.withConfig({displayName:"ReviewNotesFormActions"})`
  ${g(p.lg)} {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 32px;
  }
  ${u(p.md)} {
    display: flex;
    flex-direction: column;
  }
`,H=n.div.withConfig({displayName:"ReviewNotesDivider"})`
  margin-top: ${l(2)};
  border-bottom: 1px solid;
  ${d("border-color","colors.consumption.body.standard.divider")};
`,O=n(M.Primary).withConfig({displayName:"ReviewFormSubmitButton"})`
  ${m("typography.definitions.utility.button-core")}
  ${({theme:e})=>d(e,"color","colors.interactive.base.brand-primary")};
  margin-top: 0.5rem;
  margin-bottom: 20px;
  padding: 15px 9px;
  width: 100%;
  max-width: 100%;
  text-decoration: underline;
`,W=n(M.Primary).withConfig({displayName:"ReviewFormSubmitButton"})`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 20px;
  padding: 15px 9px;
  width: 100%;
  max-width: 100%;
  height: unset;
  text-align: center;

  &:active::before {
    top: 0;
    left: 0;
  }
`,q=n(C).withConfig({displayName:"ReviewFormTextFieldErrorText"})``,j=n(r).withConfig({displayName:"ReviewNotesFormSignin"})``,Y=n.div.withConfig({displayName:"ReviewNotesFormMinimised"})`
  position: relative;

  input.text-field__control {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    textarea.text-field__control {
      padding: ${l(2)};
    }
  }
  @media (min-width: 768px) {
    textarea.text-field__control {
      padding: ${l(2)} ${l(3)};
    }
  }

  textarea.text-field__control {
    cursor: pointer;
    overflow: auto;
    overflow-y: hidden;

    &::placeholder {
      ${({theme:e})=>d(e,"color","colors.interactive.base.light")};
    }
  }

  ${j} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    color: transparent;
  }
`,K=n.div.withConfig({displayName:"ReviewNotesSignInMessageBanner"})`
  margin-bottom: ${l(3)};
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: ${l(3)};
  text-align: -webkit-center;

  ${d("border-color","colors.consumption.body.standard.divider")};

  ${s} {
    margin-top: ${l(2)};
  }
`,G=n(o).withConfig({displayName:"MessageBannerText"})`
  ${d("color","colors.consumption.lead.standard.heading")};
  ${m("typography.definitions.consumptionEditorial.description-feature")}
`;e.exports={AlertArrow:B,ReviewNoteFormWrapper:I,ReviewNoteSectionContainer:E,ReviewNoteUserInfo:L,ReviewerInfoLabel:T,ReviewerName:k,ReviewerInfoIconButtonWrapper:U,ReviewNoteRatingWrapper:N,RatingFormRating:D,ReviewerRatingLabel:S,ReviewNotesFormSignin:j,ReviewNotesFormMinimised:Y,ReviewerInfoAlertToolTip:_,ReveiwerInfoText:A,ReviewTagsInfoLabel:$,ReviewNotesToggleChipListWrapper:F,ReviewNotesFormActions:P,ReviewNotesFormCancelButton:O,ReviewNotesFormSubmitButton:W,ReviewNotesFormTextFieldErrorText:q,ReviewNotesSignInMessageBanner:K,MessageBannerText:G,ReviewNoteTextField:x,ReviewNotesDivider:H}},39321:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({defaultcommunityReviewText:{id:"ReviewNotesForm.defaultcommunityReviewText",defaultMessage:"Ask a question or leave a helpful tip, suggestion or opinion that is relevant and respectful for the community.",description:"Appears when the form is minimised or maximised and enableCommunityExperience is true"},nonLoggedInErrorMessage:{id:"ReviewForm.nonLoggedInErrorMessage",defaultMessage:"Sign in or create an account to add comment.",description:"Message to display non logged in users"},textFieldLabel:{id:"ReviewNotesForm.textFieldLabel",defaultMessage:"Your Review",description:"The label for the main review text field"},addNoteLabel:{id:"ReviewNotesForm.addNoteLabel",defaultMessage:"Add Comment",description:"The label for Add Comment submit button"},cancelNoteLabel:{id:"ReviewNotesForm.cancelNoteLabel",defaultMessage:"Discard",description:"The label for cancel button"},reviewerInfoFieldLabel:{id:"ReviewNotesForm.ReviewerInfoFieldLabel",defaultMessage:"Commenting as:",description:"The label for the reviewer name field"},reviewerRatingLabel:{id:"ReviewNotesForm.ReviewerRatingLabel",defaultMessage:"Rate this",description:"The label for the reviewer rating field"},reviewerFieldInfoIconText:{id:"ReviewNotesForm.reviewerFieldInfoIconText",defaultMessage:"Your username appears next to your comments and replies. Change it anytime in your Account.",description:"information text for user to change their user name"},reviewerInfoIconButtonLabel:{id:"ReviewNotesForm.reviewerInfoIconButtonLabel",defaultMessage:"user name update message",description:"Label for reviewer user name update message icon"},reviewTagsLabel:{id:"ReviewNotesForm.reviewTagsLabel",defaultMessage:"TAG YOUR COMMENT (OPTIONAL)",description:"Label for adding tags"},reviewTags:{id:"FilterComponent.reviewTags",defaultMessage:"{reviewTag}",description:"Value for the tag"},invalidReviewLength:{id:"ReviewNotesForm.invalidReviewNoteLength",defaultMessage:"Enter {min} characters or more to add a comment.",description:"Error message for invalid review comment length"},requiredField:{id:"ReviewNotesForm.requiredField",defaultMessage:"Select a star rating to add a comment",description:"Error message for required field"},maxCharLimitMet:{id:"ReviewNotesForm.maxCharLimitMet",defaultMessage:"_MAX_ character limit met",description:"Warning message for max review comment length"},remainingMaxCharLimit:{id:"ReviewNotesForm.remainingMaxCharLimit",defaultMessage:"_COUNT_ of _MAX_ character limit remaining",description:"Warning message for invalid review comment length"},messageBannerText:{id:"ReviewNotesForm.messageBannerText",defaultMessage:"Join the {brandName} community to add comments.",description:"Text for the MessageBanner body"},buttonLabel:{id:"ReviewNotesForm.buttonLabel",defaultMessage:"Sign in or create account",description:"Text for the sign in or create account button"},AddNoteFailedToastMessage:{id:"ReviewNotes.AddNoteFailedToastMessage",defaultMessage:"Unable to add your comment. Please try again.",description:"Failure message to show on comment save"}})},32844:function(e,t,i){var a=this&&this.__createBinding||(Object.create?function(e,t,i,a){void 0===a&&(a=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,a,n)}:function(e,t,i,a){void 0===a&&(a=i),e[a]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&a(t,e,i);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReviewReplyComment=void 0;const s=r(i(5556)),l=o(i(96540)),d=i(37243),c=r(i(53788)),m=i(60711),u=i(20656),g=i(24300),p=i(85554),h=i(22509),f=i(61057),b=i(91470),w=i(24695),y=i(16631),v=i(14307),R=i(39311),M=r(i(71001)),C=i(10959),{oidcCookies:x}=c.default,I=r(i(20777));t.ReviewReplyComment=({commentingUrl:e,replies:t,replyPageInfo:i,username:a,reviewModalProps:n,commentReactionHandler:o,user:r={},signInHed:s,usernameSignInDek:c,signInHedSpanTag:E,signInMessage:L,commentId:N,replyLimit:T,recipeId:S,showMessageBannerHandler:k,userReactions:$,updateUserReactions:U,siteUserName:F,handleUsernameChange:A,shouldEnableReply:B,shouldEnableUpvotes:_})=>{const{formatMessage:D}=(0,d.useIntl)(),[P,H]=(0,l.useState)(null),[O,W]=(0,l.useState)(!1),[q,j]=(0,l.useState)([]),[Y,K]=(0,l.useState)(!1),[G,z]=(0,l.useState)(i.hasNextPage??!1),[V,J]=(0,l.useState)(i.hasNextPage?D(I.default.ShowMoreRepliesLabel):""),[X,Q]=(0,l.useState)(!1),[Z,ee]=(0,l.useState)(!1),[te,ie]=(0,l.useState)(i.endCursor),[ae,ne]=(0,l.useState)(i.hasNextPage??!1),[oe,re]=(0,l.useState)([]);(0,l.useEffect)((()=>{X?J(D(I.default.LoadingRepliesLabel)):G&&J(D(I.default.ShowMoreRepliesLabel))}),[X,G,D]);const se=t=>{const i=((e,t,i)=>e?e.map((e=>{const{id:a,body:n,createdAt:o,siteUsername:r,parent:s,actionCounts:l,viewerActionPresence:d,revision:c}=e;return{replyId:a,replyText:n,replyDate:(0,R.formatReviewDateAgo)(o,t),replyAuthorName:r?.[0]?.name,parentAuthorName:(()=>{let e=i;return"Anonymous"===i?e=i:s?.siteUsername?.[0]?.name&&(e=s?.siteUsername?.[0]?.name),e})(),reactionCount:l?.reaction?.total||0,viewerActionPresence:d,revisionId:c?.id}})):[])(t,D,a);return i.map((t=>{const{replyId:i,replyAuthorName:a,replyDate:d,replyText:m,parentAuthorName:u,revisionId:R}=t||{},x={commentId:i,revisionId:R};return l.default.createElement(C.ReplyCommentItem,{key:i},l.default.createElement(C.ReplyDataInfo,null,a&&l.default.createElement(C.ReplierUserName,null,a)),l.default.createElement(C.ReplyDataInfo,null,l.default.createElement(C.ReplyMetaData,null,l.default.createElement(C.ReplyInfoLabel,null,D(I.default.ReviewReplyLabel)),u&&l.default.createElement(C.ReplyUserName,null,u),l.default.createElement(b.Dot,null),d&&l.default.createElement(C.ReplyTimeStamp,null,d))),m&&l.default.createElement(C.ReplyText,{dangerouslySetInnerHTML:{__html:m}}),l.default.createElement(y.ReviewReplyMetaDataWrapper,null,l.default.createElement(C.ReplyDataInfo,null,_&&l.default.createElement(C.ReplyReactionButton,{isIconButton:!0,name:"reply-reaction",label:"Reaction",onClickHandler:()=>(e=>{if(!r.isAuthenticated){const t="COMMUNITY_LIKE_CLICK_REPLY",i={type:"login",source_type:t},a={action:g.CREATE_COMMENT_ACTION,commentId:e.commentId,commentRevisionId:e.revisionId,source:t},n=(0,p.getRelativeURLWithSearchAndHash)({href:window.location.href,hashValue:p.commentingAction.LIKE_REPLY,queryParams:a});return void(0,h.doDisplayModal)({dangerousDek:L,dangerousHed:s,dangerousHedSpanTag:E,redirectURL:n,shouldHideIllustration:!0,snowplowData:i,source:t})}o({item:e});const t={type:$[e.commentId]?.viewerActionPresence?"unlike":"like",subject:"community_reply",items:[{content_id:e.commentId}]};(0,v.trackContentEngagementEvent)(t,{skipDuplicateEvent:!1})})(x),ButtonIcon:$[i]?.viewerActionPresence?w.LikeFilled:w.Like}),_&&l.default.createElement(C.ReplyLikeCount,null,$[i]?.reactionCount||0),B&&l.default.createElement(y.ReviewReplyWrapper,{onClick:e=>((e,t)=>{if(e.preventDefault(),r.isAuthenticated)if(F)H(t?.replyAuthorName),j((e=>[...e,t?.replyId])),W(!0);else{(0,f.doDisplayModal)({dangerousDek:c,successCallback:e=>{A(e),H(t?.replyAuthorName),j((e=>[...e,t?.replyId])),W(!0)},source:"community_reply"});const e={type:"impression",subject:"username_modal",label:"Create Username",source_type:"community_reply"};(0,v.trackUserAccountEvent)(e)}else{const e="COMMUNITY_REPLY_TO_REPLY",t={subject:"community_reply",label:"Reply",source_type:e,type:"login"},i=(0,p.getRelativeURLWithSearchAndHash)({href:window.location.href,hash:p.commentingAction.REPLY_TO_REPLY,queryString:{source:e}});(0,h.doDisplayModal)({dangerousDek:L,dangerousHed:s,dangerousHedSpanTag:E,redirectURL:i,shouldHideIllustration:!0,source:e,snowplowData:t})}const i={type:"attempt",subject:"community_reply",label:"reply",items:[{content_id:t?.replyId}]};(0,v.trackContentEngagementEvent)(i,{skipDuplicateEvent:!1})})(e,t)},l.default.createElement(w.Comment,null),l.default.createElement(y.ReviewReplyLabel,null,D(I.default.ReviewReplyCommentLabel))))),O&&q.includes(i)&&r.isAuthenticated&&F&&l.default.createElement(M.default,{commentId:i,username:P,recipeId:S,revisionId:R,commentingUrl:e,closeReply:()=>{W(!1)},reviewModalProps:n,showMessageBannerHandler:k,source:"community_reply"}))}))};return l.default.createElement(C.ReplyCommentsListWrapper,null,se(t),!Z&&se(oe),l.default.createElement(C.ReplyDataInfo,null,G&&l.default.createElement(C.ShowOrHideRepliesLabel,{onClick:async()=>{let t;if(ee(!1),oe.length>=1&&!ae)re([...oe]),K(!0),z(!1);else{Q(!0);const a=te??i.endCursor;try{const t=u.UserAuthenticationClient.getCookieValue(x.id),{replies:i,page:{endCursor:n,hasNextPage:o}}=await(0,m.getRepliesByCommentId)(N,a,e,console,t,T);ie(n),ne(o),o||K(!0),z(o),re([...oe,...i]),U(i)}catch(e){t=e?.message||"",console.warn(e)}Q(!1)}const a={type:"show_more",label:"Show more replies",subject:"community_reply",error:t};(0,v.trackContentEngagementEvent)(a,{skipDuplicateEvent:!1})}},l.default.createElement(C.ShowOrHideRepliesLabelRule,null),V),Y&&l.default.createElement(C.ShowOrHideRepliesLabel,{onClick:()=>{K(!1),ee(!0),z(!0)}},l.default.createElement(C.ShowOrHideRepliesLabelRule,null),D(I.default.HideRepliesLabel))))},t.ReviewReplyComment.propTypes={commentId:s.default.string,commentingUrl:s.default.string.isRequired,commentReactionHandler:s.default.func,handleUsernameChange:s.default.func,recipeId:s.default.string,replies:s.default.array,replyLimit:s.default.number,replyPageInfo:s.default.object,reviewModalProps:s.default.object,shouldEnableReply:s.default.bool,shouldEnableUpvotes:s.default.bool,showMessageBannerHandler:s.default.func,signInHed:s.default.string,signInHedSpanTag:s.default.string,signInMessage:s.default.string,siteUserName:s.default.string,updateUserReactions:s.default.func,user:s.default.shape({isAuthenticated:s.default.bool.isRequired,amguuid:s.default.string}).isRequired,username:s.default.string,usernameSignInDek:s.default.string,userReactions:s.default.shape({reactionCount:s.default.number.isRequired,viewerActionPresence:s.default.bool}).isRequired}},10959:(e,t,i)=>{const a=i(75999).default,{getColorStyles:n,getTypographyStyles:o,maxScreen:r,calculateSpacing:s}=i(26865),{ReviewListMetaInfo:l,ReviewerUserName:d,ReviewLikeCount:c,ReviewListTimeStamp:m,ReviewReplyLabel:u,ReviewText:g,ReviewListReactionButton:p}=i(16631),{BREAKPOINTS:h}=i(96472),{BaseText:f}=i(76955),b=a(f).withConfig({displayName:"ReplyUserName"})`
  ${({theme:e})=>n(e,"color","colors.interactive.base.dark")};
  ${({theme:e})=>o(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,w=a(l).withConfig({displayName:"ReplyDataInfo"})`
  &:first-child {
    margin-bottom: ${s(1)};
  }

  margin-left: ${s(8)};

  ${r(h.md)} {
    margin-left: ${s(6)};
  }
`,y=a(d).withConfig({displayName:"ReplierUserName"})``,v=a.div.withConfig({displayName:"ReplyMetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,R=a.div.withConfig({displayName:"ReplyCommentsListWrapper"})`
  margin-top: ${s(1.25)};
`,M=a.div.withConfig({displayName:"ReplyCommentItem"})`
  margin-top: ${s(4)};

  &:first-child {
    margin-top: ${s(2)};
  }
`,C=a(c).withConfig({displayName:"ReplyLikeCount"})``,x=a(m).withConfig({displayName:"ReplyTimeStamp"})`
  ${({theme:e})=>o(e,"typography.definitions.foundation.meta-secondary")}
`,I=a(u).withConfig({displayName:"ReplyInfoLabel"})`
  ${({theme:e})=>o(e,"typography.definitions.foundation.meta-secondary")};
`,E=a(g).withConfig({displayName:"ReplyText"})`
  margin-left: ${s(8)};

  ${r(h.md)} {
    margin-left: ${s(6)};
  }
`,L=a(p).withConfig({displayName:"ReplyReactionButton"})``,N=a.div.withConfig({displayName:"ShowOrHideRepliesLabel"})`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  ${({theme:e})=>o(e,"typography.definitions.foundation.link-secondary")};

  ${({theme:e})=>n(e,"color","colors.interactive.base.dark")};
`,T=a.hr.withConfig({displayName:"ShowOrHideRepliesLabelRule"})`
  ${({theme:e})=>n(e,"color","colors.discovery.body.dark.divider")};
  align-self: center;
  margin-right: ${s(1)};
  width: ${s(4)};
`;e.exports={ReplyUserName:b,ReplyDataInfo:w,ReplyCommentsListWrapper:R,ReplyCommentItem:M,ReplyMetaData:v,ReplierUserName:y,ReplyLikeCount:C,ReplyTimeStamp:x,ReplyInfoLabel:I,ReplyText:E,ReplyReactionButton:L,ShowOrHideRepliesLabel:N,ShowOrHideRepliesLabelRule:T}},20777:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=i(37243);t.default=(0,a.defineMessages)({ReviewReplyLabel:{id:"ReviewReplyComment.ReviewReplyLabel",defaultMessage:"Replying to",description:"The label for the reply comment field"},ShowMoreRepliesLabel:{id:"ReviewReplyComment.ShowMoreRepliesLabel",defaultMessage:"Show more replies",description:"The label to show more replies"},ReviewReplyCommentLabel:{id:"ReviewReplyComment.ReviewReplyCommentLabel",defaultMessage:"Reply",description:"The label to show reply icon"},HideRepliesLabel:{id:"ReviewReplyComment.HideRepliesLabel",defaultMessage:"Hide replies",description:"The label to hide replies"},LoadingRepliesLabel:{id:"ReviewReplyComment.LoadingRepliesLabel",defaultMessage:"Loading…",description:"The label to hide replies"}})},71001:(e,t,i)=>{const a=i(96540),n=i(5556),{useState:o,useRef:r}=i(96540),{useIntl:s}=i(37243),l=i(76833).A,{addReply:d}=i(60711),{ReviewReplyUsername:c,ReviewReplyNoteWrapper:m,ReviewReplyLabel:u,ReviewReplyCancelLink:g,ReviewReplyNoteInfo:p,ReviewReplyButton:h,ReviewReplyButtonWrapper:f,ReviewReplyMultilineTextField:b}=i(73559),w=i(45771),{trackContentEngagementEvent:y}=i(14307),v=3e3,R=({commentId:e,username:t,recipeId:i,revisionId:n,commentingUrl:R,closeReply:M,reviewModalProps:C,showMessageBannerHandler:x,source:I})=>{const{formatMessage:E}=s(),[L,N]=o(!0),[T,S]=o(0),[k,$]=o(!1),U=r(null),[F,A]=o(!1),B=e=>{const t={type:"discard",label:"YES, DISCARD IT",subject:I};e.preventDefault(),M(),y(t,{skipDuplicateEvent:!1})};return a.createElement(m,null,a.createElement(p,null,a.createElement(u,null,E(l.ReviewReplyLabel)),a.createElement(c,null,t)),a.createElement(b,{name:"reviewReplyNoteText",formName:"reviewReplyNoteText",placeholder:E(l.ReplyFieldPlaceHolder),hasAutoFocus:!0,onInputChange:e=>{const t=e.target.value;S(t.length),e.target.value=t,N(0===t.trim().length),$(!1)},customHeightMultiplier:10,label:E(l.ReplyTextFieldLabel),hideLabel:!0,errorPosition:"belowTextField",errorText:k?E(l.ReviewFieldMinLimitErrorText):T>2900&&T<v?E(l.ReviewFieldAlertLimitErrorText).replace("_CHARACTER_LIMIT_CURRENT_",v-T).replace("_CHARACTER_LIMIT_",v):T===v?E(l.ReviewFieldMaxLimitErrorText).replace("_CHARACTER_LIMIT_",v):"",inputRef:U,max:v,charCountHandler:e=>{S(e)},shouldDisableTypingAtMaxChar:!0}),a.createElement(w,{modalProps:C,confirmButtonCallback:e=>B(e),onClose:()=>A(!1),isVisible:F}),a.createElement(f,null,a.createElement(h,{inputKind:"submit",isDisabled:L,label:E(l.ReplyButtonLabel),onClickHandler:async t=>{let a;t.preventDefault();const o=U.current?.value?.trim();if(o.length<2)$(!0),N(!0);else if(o.length>0){const t={storyID:i,parentID:e,parentRevisionID:n,body:o,clientMutationId:"0"};try{await d(R,t)?(M(),x(E(l.AddReplySuccessToastMessage))):x(E(l.AddReplyFailedToastMessage))}catch(e){a=e?.message||"",console.error("Error while posting reply:",e),x(E(l.AddReplyFailedToastMessage))}y({type:"submit",label:"Reply",subject:"community_reply",error:a},{skipDuplicateEvent:!1})}}}),a.createElement(g,{btnStyle:"text",label:E(l.CancelButtonLabel),onClickHandler:e=>{U.current&&U.current.value.trim().length>0?A(!0):B(e),U.current.focus()}})))};R.propTypes={closeReply:n.func,commentId:n.string,commentingUrl:n.string,recipeId:n.string,reviewModalProps:n.object,revisionId:n.string,showMessageBannerHandler:n.func,source:n.string,username:n.string},e.exports=R},73559:(e,t,i)=>{const a=i(75999).default,{getColorStyles:n,getColorToken:o,getTypographyStyles:r,maxScreen:s,minScreen:l,calculateSpacing:d}=i(26865),c=i(73730),{BaseText:m}=i(76955),{BREAKPOINTS:u}=i(96472),g=i(89662),p=a(m).withConfig({displayName:"ReviewReplyUsername"})`
  ${({theme:e})=>n(e,"color","colors.consumption.body.standard.body")};
  ${({theme:e})=>r(e,"typography.definitions.globalEditorial.accreditation-core")};
  padding-left: ${d(.5)};
`,h=a.div.withConfig({displayName:"ReviewReplyNoteWrapper"})`
  border: 1px solid ${o("colors.foundation.menu.dividers")};
  padding: ${d(3)};
  gap: ${d(1.5)};
  ${s(u.md)} {
    margin-top: ${d(1.25)};
  }
`,f=a(c.Primary).withConfig({displayName:"ReviewReplyCancelLink"})`
  margin-top: ${d(1.25)};
  width: 100%;
  ${r("typography.definitions.utility.button-core")}
  text-decoration: underline;
  ${({theme:e})=>n(e,"color","colors.interactive.base.brand-primary")};
`,b=a(g.MultiLine).withConfig({displayName:"ReviewReplyMultilineTextField"})`
  ${r("typography.definitions.utility.input-core")}
  ${({theme:e})=>n(e,"color","colors.interactive.base.light")};
`,w=a.span.withConfig({displayName:"ReviewReplyLabel"})`
  ${({theme:e})=>n(e,"color","colors.consumption.body.standard.body-deemphasized")};
  ${({theme:e})=>r(e,"typography.definitions.globalEditorial.accreditation-core")};
`,y=a.div.withConfig({displayName:"ReviewReplyNoteInfo"})`
  display: flex;
`,v=a(c.Primary).withConfig({displayName:"ReviewReplyButton"})`
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 20px;
  padding: 15px 9px;
  width: 100%;
  max-width: 100%;
  height: unset;
  text-align: center;

  &:active::before {
    top: 0;
    left: 0;
  }
`,R=a.div.withConfig({displayName:"ReviewReplyButtonWrapper"})`
  ${l(u.lg)} {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 32px;
  }
  ${s(u.md)} {
    display: flex;
    flex-direction: column;
  }
`;e.exports={ReviewReplyUsername:p,ReviewReplyNoteWrapper:h,ReviewReplyCancelLink:f,ReviewReplyLabel:w,ReviewReplyNoteInfo:y,ReviewReplyButton:v,ReviewReplyButtonWrapper:R,ReviewReplyMultilineTextField:b}},76833:(e,t,i)=>{const a=i(37243);t.A=(0,a.defineMessages)({ReviewReplyLabel:{id:"ReviewReplyNote.ReviewReplyLabel",defaultMessage:"Replying To:",description:"The label for the reply note field"},ReplyFieldPlaceHolder:{id:"ReviewReplyNote.ReplyFieldPlaceHolder",defaultMessage:"Add your reply here ",description:"The placeholder for the reply note text field"},ReplyButtonLabel:{id:"ReviewReplyNote.ReplyButtonLabel",defaultMessage:"Reply",description:"The label for the reply button"},CancelButtonLabel:{id:"ReviewReplyNote.CancelButtonLabel",defaultMessage:"Discard",description:"The label for the cancel button"},ReplyTextFieldLabel:{id:"ReviewReplyNote.ReplyTextFieldLabel",defaultMessage:"Your Reply",description:"The label for the reply text field"},AddReplySuccessToastMessage:{id:"ReviewReplyNote.AddReplySuccessToastMessage",defaultMessage:"Reply added",description:"Success message to show on reply save"},AddReplyFailedToastMessage:{id:"ReviewReplyNote.AddReplyFailedToastMessage",defaultMessage:"Unable to add your reply. Please try again.",description:"Failure message to show on reply save"},ReviewFieldAlertLimitErrorText:{id:"ReviewReplyNote.ReviewFieldAlertLimitErrorText",defaultMessage:"_CHARACTER_LIMIT_CURRENT_ of _CHARACTER_LIMIT_ character limit remaining.",description:"The error message for the review field alert limit"},ReviewFieldMaxLimitErrorText:{id:"ReviewReplyNote.ReviewFieldMaxLimitErrorText",defaultMessage:"_CHARACTER_LIMIT_ character limit met.",description:"The error message for the review field max limit"},ReviewFieldMinLimitErrorText:{id:"ReviewReplyNote.ReviewFieldMinLimitErrorText",defaultMessage:"Enter 2 characters or more to add a reply.",description:"The error message for the review field min limit"}})},19023:(e,t,i)=>{const a=i(96540),n=i(5556),{useState:o,useEffect:r}=i(96540),s=i(24465),{createUserComment:l}=i(22914),{requestGraphService:d}=i(60711),c=({recipeId:e,hed:t,commentingUrl:i,organizationId:n,tenantID:c,...m})=>{const[u,g]=o(),[p,h]=o(),[f,b]=o(),[w,y]=o(),[v,R]=o("");return r((()=>{const e=window.location.origin+window.location.pathname;R(e)}),[]),a.createElement(s,{...m,externalValidationErrors:p,onSubmitHandler:async a=>{g(!0),h(),b(),y();const{userId:o,reviewText:r,isAnonymous:s,location:m,reviewerInfo:u,willPrepareAgain:p}=a,f={willPrepareAgain:p,location:m,displayName:u,hed:t,storyLink:v},w={review:{storyID:e,siteID:n,body:r,isAnonymous:s,meta:JSON.stringify(f),tenantID:c},clientMutationId:"0"},R={operationName:"addReview",query:l,variables:{input:w,coralUserID:o}};try{await d(i,R),y(!0)}catch(e){console.warn(e),b(e.message)}},isSubmitting:u,error:f,hasSucceeded:w})};c.propTypes={commentingUrl:n.string,hed:n.string,organizationId:n.string,recipeId:n.string.isRequired,tenantID:n.string},e.exports=c},39311:(e,t,i)=>{const{fetchWithTimeout:a}=i(57743),{getFromNowDateFormat:n}=i(5697),o=e=>e instanceof Date&&!isNaN(e),r=(e,t)=>{const i=new Date(e);return o(i)?n({date:i,formatMessage:t,includeHourAndMin:!1}):e},s=e=>{const t=new Date(e);return o(t)?t.toLocaleDateString("en-US"):e},l={yield:"Yield",totalTime:"Total Time"};e.exports={fetchUserRecipeRating:async(e,t)=>{if(!t)return null;let i;try{i=await a(`/api/recipe/${e}/review-ratings/${t}?verso=true`,{method:"GET"},5e3)}catch(e){return console.error(e),null}if(200===i.status){const{reviews:e,error:t}=await i.json();if(t)console.error(t);else if(e&&e.length>0){const t=e.filter((e=>Object.hasOwnProperty.call(e,"rating"))).sort(((e,t)=>{const i=new Date(e.updatedAt);return new Date(t.updatedAt)-i}));return t[0]?.rating||null}}return null},formatReviewListItemDate:s,formatReviewListItems:(e,t,i,a=!1)=>e?e.map(((e,n)=>{const{revisionId:o,viewerActionPresence:l,reactionCount:d,replyPageInfo:c,replies:m}=e,u={id:n,revisionId:o,commentId:e._id,viewerActionPresence:l,reactionCount:d,replyPageInfo:c,replies:m};e.reviewText&&(u.text=e.reviewText),e.location&&(u.location=e.location);const g=e.isAnonymous?"Anonymous":e.siteUsername||e.reviewerInfo;return g&&(u.username=g),e.rating&&(u.rating=e.rating),e.recipeId&&(u.recipeId=e.recipeId),e.updatedAt&&(u.date=a?r(e.updatedAt,t):s(e.updatedAt)),e.tags&&(u.tags=((e,t)=>e.reduce(((e,i)=>{const a=t.find((e=>e.slug===i));return a&&e.push(a.label),e}),[]))(e.tags,i)),u})):[],formatInfoSliceItems:(e,t,i)=>{if(!e)return[];const a=[];return Object.keys(e).forEach((n=>{e[n]&&e[n].length&&l[n]&&a.push({key:i[l[n]]?t(i[l[n]]):l[n],value:e[n]})})),a},formatReviewDateAgo:r}},76497:e=>{e.exports={getUsername:"\n  query getSiteUsername($authorID: String!, $siteID: String) {\n    siteUsername(authorID: $authorID, siteID: $siteID) {\n      id\n      name\n      tenantID\n      authorID\n    }\n  }\n",createUsername:"\n  mutation createUsername($input: CreateSiteUsernameInput!) {\n    createSiteUsername(input: $input) {\n      siteUsername {\n        name\n        siteID\n      }\n    }\n  }\n",updateUsername:"\n  mutation updateSiteUsername($input: UpdateSiteUsernameInput!) {\n    updateSiteUsername(input: $input) {\n      siteUsername {\n        name\n        siteID\n      }\n    }\n  }\n"}},67116:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validate=t.createNewUsername=t.checkUsername=t.requestGraphService=void 0;const a=i(76497),n=i(16075),{GraphQLClient:o}=i(96497),{getCookie:r}=i(56892),s=i(53788).default,{oidcCookies:l}=s;t.requestGraphService=(e,t)=>{const i=r(l.access),a=new o(e),{query:n,variables:s}=t,d={"Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type","Content-Type":"application/json","User-Agent":"verso-client",Authorization:`Bearer ${i}`};return a.request(n,s,d)},t.checkUsername=async(e,i,n)=>{if(!n)return void console.error("A commenting url is required to check the username");const o={operationName:"getSiteUsername",query:a.getUsername,variables:{authorID:e,siteID:i}};let r;try{const e=await(0,t.requestGraphService)(n,o);r=0===e?.siteUsername?.length?null:e&&e.siteUsername[0]?.name}catch(e){console.log(`Error making GQL request in checkUsername: ${e.message}`)}return r},t.createNewUsername=async(e,i)=>{const{name:n,organizationId:o,userId:r,url:s,action:l}=e,d={siteUsername:{name:n,siteID:o,authorID:r},clientMutationId:"0"},c={operationName:"UPDATE"===l?"updateSiteUsername":"createSiteUsername",query:"UPDATE"===l?a.updateUsername:a.createUsername,variables:{input:d}};try{const e=await(0,t.requestGraphService)(s,c);return e&&e["UPDATE"===l?"updateSiteUsername":"createSiteUsername"]?.siteUsername?.name}catch(e){let t;throw(null===e.response?.data&&"InternalDevelopmentError: user or username already exists"===e.response?.errors[0]?.message||"InternalDevelopmentError: Duplicate Brand Username"===e.response?.errors[0]?.message)&&(t="already_taken"),i.warn(`Error making GQL request in createNewUsername: ${e?.response?.errors[0]?.message}`),new Error(t)}},t.validate=(e,t)=>{const{minLength:i,maxLength:a}=t,o=n.string().min(i).max(a).required(),r=n.string().regex(/^[a-zA-Z0-9_]+$/).required();return o.validate(e).error?"lengthError":r.validate(e).error?"specialCharError":null}}}]);