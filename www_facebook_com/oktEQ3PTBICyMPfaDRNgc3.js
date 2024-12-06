;/*FB_PKG_DELIM*/

__d("BaseTooltipAboveCarat.svg.react",["fbt","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function a(a){a=a.fillXStyle;return k.jsxs("svg",{fill:"none",height:"8",title:"tooltip carat",viewBox:"0 0.3 21 8",width:"21",xmlns:"http://www.w3.org/2000/svg",children:[k.jsx("title",{id:"tooltipCaratTitle",children:h._("Tooltip above carat")}),k.jsx("path",babelHelpers["extends"]({},(i||(i=c("stylex"))).props(a),{clipRule:"evenodd",d:"M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",fill:"black",fillRule:"evenodd"}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("BaseTooltipBelowCarat.svg.react",["fbt","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function a(a){a=a.fillXStyle;return k.jsxs("svg",{fill:"none",height:"8",style:{transform:"scaleY(-1)"},title:"tooltip carat",viewBox:"0 0 21 8",width:"21",xmlns:"http://www.w3.org/2000/svg",children:[k.jsx("title",{id:"tooltipCaratTitle",children:h._("Tooltip Below Carat")}),k.jsx("path",babelHelpers["extends"]({},(i||(i=c("stylex"))).props(a),{clipRule:"evenodd",d:"M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",fill:"black",fillRule:"evenodd"}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("BaseTooltipEndCarat.svg.react",["fbt","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function a(a){a=a.fillXStyle;return k.jsxs("svg",{fill:"none",height:"22",style:{transform:"scaleX(-1)"},viewBox:"0.5 0 8 22",width:"8",children:[k.jsx("title",{children:h._("Tooltip Start Carat")}),k.jsx("path",babelHelpers["extends"]({},(i||(i=c("stylex"))).props(a),{clipRule:"evenodd",d:"M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",fill:"black",fillRule:"evenodd"}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("BaseTooltipStartCarat.svg.react",["fbt","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function a(a){a=a.fillXStyle;return k.jsxs("svg",{fill:"none",height:"22",viewBox:"0.7 0 8 22",width:"8",children:[k.jsx("title",{children:h._("Tooltip End Carat")}),k.jsx("path",babelHelpers["extends"]({},(i||(i=c("stylex"))).props(a),{clipRule:"evenodd",d:"M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",fill:"black",fillRule:"evenodd"}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("BaseTooltipCarat.react",["BaseContextualLayerOrientationContext","BaseTooltipAboveCarat.svg.react","BaseTooltipBelowCarat.svg.react","BaseTooltipEndCarat.svg.react","BaseTooltipStartCarat.svg.react","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k={caratContainer:{display:"x78zum5",$$css:!0}},l=function(a){switch(a){case"below":return c("BaseTooltipBelowCarat.svg.react");case"above":return c("BaseTooltipAboveCarat.svg.react");case"start":return c("BaseTooltipStartCarat.svg.react");case"end":return c("BaseTooltipEndCarat.svg.react");default:return c("BaseTooltipBelowCarat.svg.react")}};function a(a){var b=a.fillXStyle,e=a.shouldFadeIn;e=e===void 0?!1:e;var f=a.transitionInXStyle;a=a.transitionOutXStyle;var g=j(c("BaseContextualLayerOrientationContext"));g=g.position;g=l(g);return i.jsx(d("react-strict-dom").html.div,{style:[k.caratContainer,a,e&&f],children:i.jsx(g,{fillXStyle:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseTooltipContainer.react",["BaseContextualLayerContextSizeContext","BaseContextualLayerOrientationContext","BaseTooltipCarat.react","react","react-strict-dom","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext,l=10.5,m={container:{backgroundColor:"xj5tmjb",borderTopStartRadius:"x1r9drvm",borderTopEndRadius:"x16aqbuh",borderBottomEndRadius:"x9rzwcf",borderBottomStartRadius:"xjkqk3g",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxShadow:"xms15q0",display:"x1lliihq",filter:"xo8ld3r",maxWidth:"x86nfjv",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",paddingStart:"x1ye3gou",paddingEnd:"xn6708d",position:"x1n2onr6",$$css:!0},fillXStyle:{fill:"x1fj6ok0",fillOpacity:"xlyfr8p",$$css:!0},transitionIn:{opacity:"x1hc1fzr",transitionDuration:"xhb22t3",transitionTimingFunction:"xls3em1",$$css:!0},transitionOut:{opacity:"xg01cxk",transitionDuration:"x1ebt8du",transitionProperty:"x19991ni",transitionTimingFunction:"x1dhq9h",$$css:!0}},n={above:{flexDirection:"xdt5ytf",$$css:!0},base:{display:"x78zum5",marginBottom:"xjpr12u",marginTop:"xr9ek0c",$$css:!0},below:{flexDirection:"x3ieub6",$$css:!0},end:{flexDirection:"x15zctf7",$$css:!0},start:{flexDirection:"x1q0g3np",$$css:!0}},o={alignEnd:function(a){var b;return[{marginEnd:"calc("+((b=a)!=null?b:0)+"px / 2 - "+l+"px)"==null?null:"x9wsmhn",$$css:!0},{"--marginInlineEnd":function(a){return typeof a==="number"?a+"px":a!=null?a:void 0}("calc("+((b=a)!=null?b:0)+"px / 2 - "+l+"px)")}]},alignStart:function(a){var b;return[{marginStart:"calc("+((b=a)!=null?b:0)+"px / 2 - "+l+"px)"==null?null:"x1ghbroi",$$css:!0},{"--marginInlineStart":function(a){return typeof a==="number"?a+"px":a!=null?a:void 0}("calc("+((b=a)!=null?b:0)+"px / 2 - "+l+"px)")}]},end:{alignItems:"xuk3077",$$css:!0},middle:{alignItems:"x6s0dn4",$$css:!0},start:{alignItems:"x1cy8zhl",$$css:!0},stretch:{alignItems:"x6s0dn4",$$css:!0}};b=j.forwardRef(a);function a(a,b){var e=a.alignOffsetXstyle,f=a.children,g=a.id,i=a.shouldFadeIn;i=i===void 0?!1:i;var l=a.shouldShowCarat;l=l===void 0?!1:l;var p=a.xstyle,q=a.role;q=q===void 0?"tooltip":q;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignOffsetXstyle","children","id","shouldFadeIn","shouldShowCarat","xstyle","role"]);var r=k(c("BaseContextualLayerOrientationContext")),s=r.align;r=r.position;var t=k(c("BaseContextualLayerContextSizeContext"));a=j.jsx("div",babelHelpers["extends"]({},a,{className:(h||(h=c("stylex")))(m.container,m.transitionOut,p,i&&m.transitionIn),"data-testid":void 0,id:g,ref:b,role:q,children:f}));return j.jsxs(d("react-strict-dom").html.div,{style:[n.base,n[r],o[s]],children:[a,j.jsx(d("react-strict-dom").html.div,{style:[e===void 0&&s==="end"&&o.alignEnd(t==null?void 0:t.width),e===void 0&&s==="start"&&o.alignStart(t==null?void 0:t.width),e],children:l&&j.jsx(c("BaseTooltipCarat.react"),{fillXStyle:m.fillXStyle,shouldFadeIn:i,transitionInXStyle:m.transitionIn,transitionOutXStyle:m.transitionOut})})]})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("useTooltipDelayedContent",["clearTimeout","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.useRef,k=b.useState;function a(a){var b=a.delayContentMs,d=a.isVisible,e=j(d),f=j(null);a=k(function(){return d===!0&&e.current===!1&&b>0});var g=a[0],h=a[1];i(function(){if(d===!0&&e.current===!1&&b>0){h(!0);f.current=c("setTimeout")(function(){h(!1),f.current=null},b);return function(){c("clearTimeout")(f.current),f.current=null}}else f.current!=null&&(h(!1),c("clearTimeout")(f.current),f.current=null);e.current=d},[b,d,e]);return{isPending:g}}g["default"]=a}),98);
__d("BaseTooltipImpl.react",["BaseContextualLayer.react","BaseTooltipContainer.react","CometHeroInteractionContextPassthrough.react","CometPlaceholder.react","react","useCometDisplayTimingTrackerForInteraction","useFadeEffect","useTooltipDelayedContent"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useLayoutEffect,k=b.useRef,l={contextualLayer:{$$css:!0}};function m(a){var b=a.contextualLayerRef;j(function(){var a=b.current;a&&a.reposition({autoflip:!0})},[b]);return null}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b=a.loadingState,d=a.contentKey,e=a.delayContentMs;e=e===void 0?0:e;a.headline;var f=a.id,g=a.isVisible,h=a.themeWrapper;h=h===void 0?i.Fragment:h;a.contentColor;a.contentType;var j=a.shouldShowCarat,n=a.tooltip;a.tooltipTheme;var o=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["loadingState","contentKey","delayContentMs","headline","id","isVisible","themeWrapper","contentColor","contentType","shouldShowCarat","tooltip","tooltipTheme","xstyle"]);var p=k(null),q=c("useFadeEffect")(g),r=q[0],s=q[1];q=q[2];var t=c("useCometDisplayTimingTrackerForInteraction")("ToolTip");e=c("useTooltipDelayedContent")({delayContentMs:e,isVisible:g});g=e.isPending;return n==null||!r?null:i.jsx(c("CometHeroInteractionContextPassthrough.react"),{clear:!0,children:i.jsx(c("BaseContextualLayer.react"),babelHelpers["extends"]({align:"middle"},a,{imperativeRef:p,ref:t,xstyle:l.contextualLayer,children:i.jsx(h,{children:i.jsx(c("BaseTooltipContainer.react"),{id:f,ref:q,shouldFadeIn:s,shouldShowCarat:j,xstyle:o,children:g?i.jsx("div",babelHelpers["extends"]({className:"x78zum5 xl56j7k"},{children:b})):i.jsxs(c("CometPlaceholder.react"),{fallback:b,children:[i.jsx(m,{contextualLayerRef:p}),n]},d)})})}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSTooltipDeferredImpl.react",["BaseTooltipImpl.react","CometProgressRingIndeterminate.react","FDSText.react","react","useCometTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a.headline;var b=a.tooltip;a=babelHelpers.objectWithoutPropertiesLoose(a,["headline","tooltip"]);var d=c("useCometTheme")("invert"),e=d[0];d=d[1];return i.jsx(e,{children:i.jsx(c("BaseTooltipImpl.react"),babelHelpers["extends"]({},a,{loadingState:i.jsx(c("CometProgressRingIndeterminate.react"),{color:"dark",size:20}),tooltip:b!=null?i.jsx(c("FDSText.react"),{color:"tooltip",type:"body4",children:b}):null,xstyle:d}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SecuredActionTriggerWithAccountID.react",["CometRouteURL","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=a.accountID,e=a.categoryName,f=a.entrypoint,g=a.onCancel,h=a.onExit,k=a.onFailure,l=a.onSuccess;a=d("CometRouteURL").useRouteURL();f=c("useCometEntryPointDialog")(f,{account_id:b,category_name:e,return_uri:a});var m=f[0],n=j(!0);i(function(){n.current&&m({accountID:b,categoryName:e,onCancel:g,onExit:h,onFailure:k,onSuccess:l}),n.current=!1},[m,b,e,h,l,g,k])}g["default"]=a}),98);
__d("SecuredActionTriggerWithEncryptedContext.react",["react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=a.encryptedContext,d=a.entrypoint,e=a.flow,f=a.onExit,g=a.onSuccess;a=c("useCometEntryPointDialog")(d,{encryptedContext:b,flow:e});var h=a[0],k=j(!0);i(function(){k.current&&h({routeProps:{encryptedContext:b,flow:e,onExit:f,onSuccess:g}}),k.current=!1},[h,b,e,f,g])}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometImageIcon_DEPRECATED.react",["BaseImage_DEPRECATED.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},image:{display:"x1lliihq",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return j.jsxs("div",{className:"x1n2onr6",children:[j.jsx(c("BaseImage_DEPRECATED.react"),{className:(h||(h=c("stylex")))(f==="circle"&&k.circle,k.image,f==="roundedRect"&&k.roundedRect),height:d,src:e,testid:void 0,width:d}),f!=="square"?j.jsx("div",{className:(h||(h=c("stylex")))(f==="circle"&&k.circle,k.inset,f==="roundedRect"&&k.roundedRect),style:{height:d,width:d}}):null,b!=null?j.jsx("div",{className:"x1ey2m1c xds687c x10l6tqk",children:b}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSUnit.react",["CometColumn.react","CometColumnItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={0:{paddingBottom:"x18d9i69",$$css:!0},8:{paddingBottom:"xwib8y2",$$css:!0},12:{paddingBottom:"xsag5q8",$$css:!0},16:{paddingBottom:"x1l90r2v",$$css:!0},20:{paddingBottom:"xx6bls6",$$css:!0}},k={primary:{backgroundColor:"x1jx94hy",$$css:!0},transparent:{backgroundColor:"xjbqb8w",$$css:!0}};b=i.forwardRef(a);function a(a,b){var d=a.children,e=a.header,f=a.paddingBottom;f=f===void 0?20:f;var g=a.spacing;g=g===void 0?8:g;var h=a.type;h=h===void 0?"primary":h;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","header","paddingBottom","spacing","type"]);return i.jsxs(c("CometColumn.react"),babelHelpers["extends"]({},a,{ref:b,spacing:g,xstyle:[j[f],k[h]],children:[i.jsx(c("CometColumnItem.react"),{children:e}),i.jsx(c("CometColumnItem.react"),{children:d})]}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("FDSUnitHeader.react",["BaseView.react","CometColumn.react","CometColumnItem.react","CometFocusTableContext","CometPressable.react","FDSIcon.react","FDSText.react","FDSTextPairing.react","IconSource","SVGIcon","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useState,l=8,m={action:{backgroundColor:"x1k74hu9",borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",display:"x1rg5ohu",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x3ajldb",$$css:!0},actionButton:{color:"x1fey0fg",cursor:"x1ypdohk",$$css:!0},actionHidden:{opacity:"xg01cxk",$$css:!0},hairline:{backgroundColor:"x14nfmen",height:"xjm9jq1",marginBottom:"x1jyxor1",$$css:!0},root:{paddingBottom:"xjkvuk6",$$css:!0},showActionOnHover:{visibility:"xlshs6z","@media (pointer: coarse)_visibility":"xwtlbus",$$css:!0}},n={0:{paddingTop:"xexx8yu",$$css:!0},8:{paddingTop:"x1y1aw1k",$$css:!0},12:{paddingTop:"xz9dl7a",$$css:!0},16:{paddingTop:"xyamay9",$$css:!0},20:{paddingTop:"x1cnzs8",$$css:!0}};function a(a){var b=a.action,e=a.actionAccessibilityLabel,f=a.actionDisabled;f=f===void 0?!1:f;var g=a.actionHidden;g=g===void 0?!1:g;var h=a.actionLinkProps,o=a.actionRef,p=a.actiontestid,q=a.actionWrapper,r=a.addOn_DEPRECATED,s=a.body,t=a.bodyColor;t=t===void 0?"secondary":t;var u=a.bodyLineLimit;u=u===void 0?3:u;var v=a.disabled,w=a.hasTopDivider;w=w===void 0?!1:w;var x=a.headline,y=a.headlineColor;y=y===void 0?"primary":y;var z=a.headlineId,A=a.iconColor;A=A===void 0?"primary":A;var B=a.iconSize;B=B===void 0?16:B;a.iconType;var C=a.isSemanticHeading;C=C===void 0?!0:C;var D=a.level,E=a.linkProps,F=a.meta,G=a.metaColor;G=G===void 0?"secondary":G;var H=a.metaLocation,I=a.metaTestID,J=a.onActionHoverIn,K=a.onActionHoverOut,L=a.onActionPress,M=a.onActionPressIn,N=a.onActionPressOut,O=a.onPress,P=a.onPressIn,Q=a.onPressOut,R=a.paddingHorizontal;R=R===void 0?16:R;var S=a.paddingTop;S=S===void 0?20:S;var T=a.showActionOnHover;T=T===void 0?!1:T;var U=a.testOnly_actionPressed,V=a.testOnly_pressed,W=a.useFocusCell;W=W===void 0?!1:W;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","actionAccessibilityLabel","actionDisabled","actionHidden","actionLinkProps","actionRef","actiontestid","actionWrapper","addOn_DEPRECATED","body","bodyColor","bodyLineLimit","disabled","hasTopDivider","headline","headlineColor","headlineId","iconColor","iconSize","iconType","isSemanticHeading","level","linkProps","meta","metaColor","metaLocation","metaTestID","onActionHoverIn","onActionHoverOut","onActionPress","onActionPressIn","onActionPressOut","onPress","onPressIn","onPressOut","paddingHorizontal","paddingTop","showActionOnHover","testOnly_actionPressed","testOnly_pressed","useFocusCell"]);var X=k(!1),Y=X[0];X=X[1];var Z=j(c("CometFocusTableContext"));Z=Z.FocusCell;var $;if(b!=null){J={disabled:f,linkProps:h,onHoverIn:J,onHoverOut:K,onPress:L,onPressIn:M,onPressOut:N,testid:p,testOnly_pressed:(h=U)!=null?h:!1};if(b instanceof c("IconSource"))$=i.jsx(c("FDSIcon.react"),babelHelpers["extends"]({},J,{"aria-label":e,color:A,icon:b,ref:o}));else if(b instanceof d("SVGIcon").SVGIcon)$=i.jsx(c("FDSIcon.react"),babelHelpers["extends"]({},J,{"aria-label":e,color:A,icon:b,ref:o,size:B}));else{$=i.jsx(c("CometPressable.react"),babelHelpers["extends"]({},J,{"aria-label":(K=e)!=null?K:b,onFocusVisibleChange:X,overlayOffset:l,overlayRadius:4,ref:o,xstyle:[m.actionButton,m.action,g&&!Y&&m.actionHidden,T&&m.showActionOnHover],children:i.jsx(c("FDSText.react"),{color:f?"disabled":"blueLink",numberOfLines:1,type:D===2?"body2":"body3",children:b})}))}}else r!=null&&($=i.jsx(d("react-strict-dom").html.div,{style:m.action,children:r}));if(q!=null){L=q.component;$=i.jsx(L,babelHelpers["extends"]({},q.props,{children:$}))}W===!0&&Z!=null&&($=i.jsx(Z,{children:$}));N=i.jsx(c("FDSTextPairing.react"),{body:s,bodyColor:t,bodyLineLimit:u,headline:x,headlineAddOn:$,headlineColor:y,headlineId:z,headlineLineLimit:2,isSemanticHeading:C,level:D,meta:F,metaColor:G,metaLineLimit:1,metaLocation:(M=H)!=null?M:"below",metaTestID:I});U=i.jsx(c("CometColumn.react"),babelHelpers["extends"]({},a,{paddingHorizontal:w?0:R,xstyle:[m.root,n[S]],children:i.jsx(c("CometColumnItem.react"),{children:O!=null?i.jsx(c("CometPressable.react"),{disabled:v,linkProps:E,onPress:O,onPressIn:P,onPressOut:Q,overlayDisabled:!0,ref:o,testOnly_pressed:(p=V)!=null?p:!1,children:N}):N})}));return w?i.jsxs(c("CometColumn.react"),{paddingHorizontal:R,children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("BaseView.react"),{xstyle:m.hairline})}),U]}):U}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("castToEnum",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=Object.keys(b);for(var e=0;e<d.length;e++)if(b[d[e]]===a)return b[d[e]];return c}f["default"]=a}),66);
__d("useCometDisplayTimingTracker",["InteractionTracingMetrics","performanceNow","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=i||d("react");var j=b.useCallback,k=b.useRef;function a(a,b){var d=k(null);return j(function(e){if(d.current!==e){d.current=e;if(e){var f=(h||(h=c("performanceNow")))();b!=null?c("InteractionTracingMetrics").addMountPoint(b,f,a):c("InteractionTracingMetrics").currentInteractionLogger().forEach(function(b){return c("InteractionTracingMetrics").addMountPoint(b.traceId,f,a)})}}},[b,a])}g["default"]=a}),98);