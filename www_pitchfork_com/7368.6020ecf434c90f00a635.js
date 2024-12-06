(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7368],{19636:(e,n,t)=>{const o=t(5556),i=t(96540),{connect:a}=t(67851),{useIntl:r}=t(37243),s=t(90739).A,l=t(15822).default,d=t(76399),c=t(73275),{googleAnalytics:g}=t(90090),{asConfiguredComponent:u}=t(12892),{doCloseModal:p}=t(22509),{trackComponent:m}=t(92716),{interactionResponse:h}=t(56187),{trackUserAccountEvent:b}=t(14307),{SignInModalBaseWrapper:S,SignInModalCloseButton:y,SignInModalButtons:I,SignInModalDek:f,SignInModalHed:k,SignInModalEmail:M,SignInModalSignInSection:x,SignInModalSpotIllustration:v,SignInModalSignInLink:B,SignInModalHedSpanTag:w}=t(20761),$=({analyticsType:e,authSource:n="sign-in-modal",brandIdentityAssets:t,className:o,closeButtonCallback:a,dangerousDek:u,dangerousHed:$,dangerousHedSpanTag:C,hasLargeMargins:A=!1,hasRoundedCornersButtons:T,isVisible:L,redirectURL:E="/",shouldHideIllustration:N=!1,signInText:O,signInLinkText:R,snowplowData:H,source:P,type:D="default"})=>{i.useEffect((()=>{(async()=>{await h(),m("SignInModal")})()}),[]);const _=n=>g.emitGoogleTrackingEvent(n,{signInModalType:e});L&&_("signin-modal-impression");let j=`${l.oidcAuth}?redirectURL=${encodeURIComponent(E)}&skipAccountLink=true&authSource=${n}`;P&&(j=`${j}&source=${P}`);const U=t.signInModalAsset[D]||t.signInModalAsset.default,{formatMessage:z}=r(),W=e=>{_("signin-modal-oidc-sign-in-click");const n=H?.label||e.target.innerText;b({...H,label:n})},F=O||z(s.oidcSignInText),V=R||z(s.oidcSignInLinkText);return i.createElement(S,{className:o,hasLargeMargins:A,closeTimeoutMS:400,isOpen:L},i.createElement(y,{isIconButton:!0,ariaLabel:z(s.closeButtonAriaLabel),label:z(s.closeButtonLabel),onClickHandler:()=>{p(),_("signin-modal-close"),a&&a()},role:"button",ButtonIcon:d}),i.createElement(k,null,$||z(s.hed),i.createElement(w,null,C||z(s.hedSpanTag))),!N&&i.createElement(v,null,i.createElement(c,{...U})),i.createElement(f,{dangerouslySetInnerHTML:{__html:u}}),i.createElement(I,{hasRoundedCornersButtons:T},i.createElement(M,{label:z(s.oidcSignUpButtonLabel),href:j,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:W,"data-testid":"SignInModalEmail"})),i.createElement(x,null,`${F} `,i.createElement(B,{href:j,onClick:W},V),"voting"===D&&i.createElement("div",null,"  »")))};$.displayName="SignInModal",$.propTypes={analyticsType:o.string.isRequired,authSource:o.string,brandIdentityAssets:o.shape({signInModalAsset:o.shape({default:o.object,crosswords:o.object,voting:o.object})}).isRequired,className:o.string,closeButtonCallback:o.func,dangerousDek:o.string,dangerousHed:o.string,dangerousHedSpanTag:o.string,hasLargeMargins:o.bool,hasRoundedCornersButtons:o.bool,isVisible:o.bool,redirectURL:o.string,shouldHideIllustration:o.bool,signInLinkText:o.string,signInText:o.string,snowplowData:o.object,source:o.string,type:o.oneOf(["default","crosswords","voting"])};const C=u($,"SignInModal");e.exports=a((e=>{const{signInModalConfig:n,brandIdentityAssets:t}=e;return{brandIdentityAssets:t,...n}}))(C)},14935:(e,n,t)=>{e.exports=t(19636)},20761:(e,n,t)=>{const o=t(96540),i=t(20312),a=t(5556),{default:r,css:s}=t(75999),{BaseText:l,BaseLink:d}=t(76955),{calculateSpacing:c}=t(26865),{BREAKPOINTS:g,ZINDEX_MAP:u}=t(96472),p=t(73730),{getColorToken:m,getTypographyStyles:h}=t(26865),{ResponsiveImagePicture:b}=t(7228),{ButtonWrapper:S}=t(18974),y=r(l).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;y.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const I=r.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,f=r.p.withConfig({displayName:"SignInModalDek"})`
  ${h("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${m("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${c(3)};
  }
`,k=r(l).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${c(1.5)} auto;
  text-align: center;

  ${b} {
    width: 200px;
    height: 170px;
  }
`;k.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const M=r(p.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${c(1)};
  width: 100%;
`,x=r(p.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,v=r(p.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${c(1)};
  right: ${c(1)};
  padding: 0;
  fill: ${m("colors.discovery.body.light.context-tertiary")};

  .icon-close {
    padding: 8px;
  }

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,B=r(p.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,w=r.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${c(2)};
  width: 100%;

  ${B} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${S} {\n      border-radius: 4px;\n    }\n  `}
`,$=s`
  &&& {
    padding: ${c(8)} ${c(5)};
    min-height: ${c(62)};
  }
  ${k} {
    margin: ${c(1.5)} auto;

    ${b} {
      width: 175px;
      height: 175px;
    }
  }

  ${f} {
    margin-bottom: ${c(2)};
  }

  ${w} {
    margin-bottom: ${c(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function C({className:e,...n}){const t=`${e}__content`,a=`${e}__overlay`;return o.createElement(i,{portalClassName:e,className:t,overlayClassName:a,...n})}C.propTypes={className:a.string};const A=r(C).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${m("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${m("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${m("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${m("colors.background.white")};
    padding: ${c(5)};
    width: ${c(60)};
    max-height: calc(100% - ${c(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${c(2,"px")}));

      margin: 0 ${c(2,"px")};
      padding: ${c(4)} ${c(5)}
        ${c(4)} ${c(5)};
      width: auto;
      min-width: ${c(38)};
      max-width: ${c(60)};
    }

    ${M}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&$}
  }
`,T=r(l).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;T.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const L=r(d).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;L.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:A,SignInModalCloseButton:v,SignInModalButtons:w,SignInModalDek:f,SignInModalEmail:B,SignInModalHed:y,SignInModalSignInSection:T,SignInModalSignInLink:L,SignInModalSpotIllustration:k,SignInModalHedSpanTag:I}},90739:(e,n,t)=>{const o=t(37243);n.A=(0,o.defineMessages)({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},95556:(e,n,t)=>{const o=t(96540),i=t(5556),a=t(72014),{ActionBarWrapperContent:r,ActionBarWrapperComponent:s}=t(97024),{getVariationNames:l}=t(81372),{sizesFullName:d}=t(99906),c=({actionBarLargeScreenVariation:e,actionBarMobileScreenVariation:n,className:t,isActionBarStickyLargeScreen:i=!1,actionBarButtons:l,articleLength:c,showActionBar:g=!1,isFirstActionBar:u,showOverlayActionBar:p})=>{if(!l||!l?.length||!g)return null;const m=e?a[e]:a,h=n?a[n]:a;return e||n?o.createElement(r,{className:t,isActionBarStickyLargeScreen:i,actionBarHeight:c,isFirstActionBar:u,showOverlayActionBar:p},o.createElement(s,null,o.createElement(m,{minScreenThreshold:d.xLarge,actionButtons:l,className:"large-screen"}),o.createElement(h,{maxScreenThreshold:d.large,actionButtons:l,className:"mobile"}))):o.createElement(r,{className:t,isActionBarStickyLargeScreen:i,actionBarHeight:c,isFirstActionBar:u,showOverlayActionBar:p},o.createElement(s,null,o.createElement(a,{actionButtons:l,className:"default"})))};c.propTypes={actionBarButtons:i.arrayOf(i.oneOf(["audio","bookmark","print","jumpToSection"])).isRequired,actionBarLargeScreenVariation:i.oneOf(l(a)),actionBarMobileScreenVariation:i.oneOf(l(a)),articleLength:i.number,className:i.string,isActionBarStickyLargeScreen:i.bool,isFirstActionBar:i.bool,showActionBar:i.bool,showOverlayActionBar:i.bool},e.exports=c},90532:(e,n,t)=>{const o=t(95556);e.exports=o},97024:(e,n,t)=>{const{default:o,css:i}=t(75999),{calculateSpacing:a,minScreen:r}=t(26865),{BREAKPOINTS:s}=t(96472),{applyGridSpacing:l}=t(1123),d=o.div.withConfig({displayName:"ActionBarWrapperComponent"})``,c=o.div.withConfig({displayName:"ActionBarWrapperContent"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${a(4)};
  ${({isActionBarStickyLargeScreen:e,actionBarHeight:n})=>e&&i`
      ${r(s.lg)} {
        position: absolute;
        left: ${a(4)};
        z-index: 80;
        padding: 0;
        width: fit-content;
        height: ${n?`${n}px`:"100%"};
        ${l("padding")}
        ${d} {
          position: sticky;
          top: 50%;
          transition: all 300ms ease-in-out;
          height: fit-content;
          ${l("padding")}
        }
      }
    `}
  ${({showOverlayActionBar:e,isFirstActionBar:n})=>e&&n&&i`
      position: fixed;
      bottom: -100px;
      animation: slideUpDown 0.5s ease-in-out both;
      z-index: 2;
      border-radius: ${a(6)};
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      padding-bottom: 0;
      @keyframes slideUpDown {
        0% {
          bottom: -100px;
        }

        100% {
          bottom: 40px;
        }
      }
    `}
`;e.exports={ActionBarWrapperContent:c,ActionBarWrapperComponent:d}},15822:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.proxyApiRoutes=void 0,n.default=Object.freeze({oidcAuth:"/auth/initiate",oidcAuthSessionEnd:"/auth/session/end",oidcAccountSignOut:"/auth/end",oidcExchange:"/auth/exchange",oidcForgotPassword:"/auth/forgot",oidcLanding:"/auth/complete",oidcMagicLink:"/auth/request-link",oidcRefresh:"/auth/refresh",oidcRefreshRedirect:"/auth/refresh-redirect",oauth:{jwks:"/.well-known/jwks",oidcConfig:"/.well-known/openid-configuration",authorizationGrant:"/api/utility/oauth/authorization",tokenExchange:"/api/utility/oauth/token"}}),n.proxyApiRoutes=Object.freeze({authenticate:"/v2/authenticate",googleAuthenticate:"/v2/sso/google",marketingPermissions:"/v2/marketing-permissions",newsletterSubscriptions:"/v2/newsletter-subscriptions",sailthruNewsletterSubscriptions:"/v2/newsletter/sailthru",swgAuthenticate:"/v2/swg/authenticate",swgSubscribe:"/v2/swg/subscription",userDetails:"/v2/users",userLookup:"/v2/users/lookup"})},95143:(e,n,t)=>{"use strict";t.d(n,{A2:()=>i,Dx:()=>r,zq:()=>a});var o=t(96540);const i={keyOf:e=>e.type,blocks:{},marks:{}},a=(0,o.createContext)(i);function r(e){return(0,o.createElement)(a.Consumer,{children(n){var t;return(0,o.createElement)(a.Provider,{value:{keyOf:null!==(t=e.value.keyOf)&&void 0!==t?t:n.keyOf,blocks:e.value.blocks?{...n.blocks,...e.value.blocks}:n.blocks,marks:e.value.marks?{...n.marks,...e.value.marks}:n.marks}},e.children)}})}r.displayName="ComponentProvider"},92437:(e,n,t)=>{"use strict";t.d(n,{ComponentProvider:()=>i.Dx,default:()=>s});var o=t(24216),i=t(37853),a=t(86789),r=t(96540);function s(e){let[n,t]=(0,r.useMemo)((()=>{var n,t;let[i,a]=(0,o.Hz)({text:e.value.text,blocks:null!==(n=e.value.blocks)&&void 0!==n?n:[],marks:null!==(t=e.value.marks)&&void 0!==t?t:[]});return[(0,o.bP)(i),a]}),[e.value]),s=(0,r.useMemo)((()=>{var e;return n.has(o.Dl)&&null!==(e=n.get(o.Dl))&&void 0!==e?e:[""]}),[n]);return(0,r.createElement)(i.K_.Provider,{value:t},(0,r.createElement)(r.Fragment,{},s.map((e=>"string"==typeof e?e:(0,r.createElement)(a.b,{value:e,map:n,key:e.id})))))}s.displayName="Text"}}]);