;/*FB_PKG_DELIM*/

__d("CometImageIcon_DEPRECATED.react",["BaseImage_DEPRECATED.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},image:{display:"x1lliihq",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return j.jsxs("div",babelHelpers["extends"]({className:"x1n2onr6"},{children:[j.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},(h||(h=c("stylex"))).props(f==="circle"&&k.circle,k.image,f==="roundedRect"&&k.roundedRect),{height:d,src:e,testid:void 0,width:d})),f!=="square"?j.jsx("div",{className:(h||(h=c("stylex")))(f==="circle"&&k.circle,k.inset,f==="roundedRect"&&k.roundedRect),style:{height:d,width:d}}):null,b!=null?j.jsx("div",babelHelpers["extends"]({className:"x1ey2m1c xds687c x10l6tqk"},{children:b})):null]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FDSUnit.react",["CometColumn.react","CometColumnItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={0:{paddingBottom:"x18d9i69",$$css:!0},8:{paddingBottom:"xwib8y2",$$css:!0},12:{paddingBottom:"xsag5q8",$$css:!0},16:{paddingBottom:"x1l90r2v",$$css:!0},20:{paddingBottom:"xx6bls6",$$css:!0}},k={primary:{backgroundColor:"x1jx94hy",$$css:!0},transparent:{backgroundColor:"xjbqb8w",$$css:!0}};b=i.forwardRef(a);function a(a,b){var d=a.children,e=a.header,f=a.paddingBottom;f=f===void 0?20:f;var g=a.spacing;g=g===void 0?8:g;var h=a.type;h=h===void 0?"primary":h;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","header","paddingBottom","spacing","type"]);return i.jsxs(c("CometColumn.react"),babelHelpers["extends"]({},a,{ref:b,spacing:g,xstyle:[j[f],k[h]],children:[i.jsx(c("CometColumnItem.react"),{children:e}),i.jsx(c("CometColumnItem.react"),{children:d})]}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("FDSUnitHeader.react",["BaseView.react","CometColumn.react","CometColumnItem.react","CometFocusTableContext","CometPressable.react","FDSIcon.react","FDSText.react","FDSTextPairing.react","IconSource","SVGIcon","react","react-strict-dom"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useState,l=8,m={action:{backgroundColor:"x1k74hu9",borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",display:"x1rg5ohu",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x3ajldb",$$css:!0},actionButton:{color:"x1fey0fg",cursor:"x1ypdohk",$$css:!0},actionHidden:{opacity:"xg01cxk",$$css:!0},hairline:{backgroundColor:"x14nfmen",height:"xjm9jq1",marginBottom:"x1jyxor1",$$css:!0},root:{paddingBottom:"xjkvuk6",$$css:!0},showActionOnHover:{visibility:"xlshs6z","@media (pointer: coarse)_visibility":"xwtlbus",$$css:!0}},n={0:{paddingTop:"xexx8yu",$$css:!0},8:{paddingTop:"x1y1aw1k",$$css:!0},12:{paddingTop:"xz9dl7a",$$css:!0},16:{paddingTop:"xyamay9",$$css:!0},20:{paddingTop:"x1cnzs8",$$css:!0}};function a(a){var b=a.action,e=a.actionAccessibilityLabel,f=a.actionDisabled;f=f===void 0?!1:f;var g=a.actionHidden;g=g===void 0?!1:g;var h=a.actionLinkProps,o=a.actionRef,p=a.actiontestid,q=a.actionWrapper,r=a.addOn_DEPRECATED,s=a.body,t=a.bodyColor;t=t===void 0?"secondary":t;var u=a.bodyLineLimit;u=u===void 0?3:u;var v=a.disabled,w=a.hasTopDivider;w=w===void 0?!1:w;var x=a.headline,y=a.headlineColor;y=y===void 0?"primary":y;var z=a.headlineId,A=a.iconColor;A=A===void 0?"primary":A;var B=a.iconSize;B=B===void 0?16:B;a.iconType;var C=a.isSemanticHeading;C=C===void 0?!0:C;var D=a.level,E=a.linkProps,F=a.meta,G=a.metaColor;G=G===void 0?"secondary":G;var H=a.metaLocation,I=a.metaTestID,J=a.onActionHoverIn,K=a.onActionHoverOut,L=a.onActionPress,M=a.onActionPressIn,N=a.onActionPressOut,O=a.onPress,P=a.onPressIn,Q=a.onPressOut,R=a.paddingHorizontal;R=R===void 0?16:R;var S=a.paddingTop;S=S===void 0?20:S;var T=a.showActionOnHover;T=T===void 0?!1:T;var U=a.testOnly_actionPressed,V=a.testOnly_pressed,W=a.useFocusCell;W=W===void 0?!1:W;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","actionAccessibilityLabel","actionDisabled","actionHidden","actionLinkProps","actionRef","actiontestid","actionWrapper","addOn_DEPRECATED","body","bodyColor","bodyLineLimit","disabled","hasTopDivider","headline","headlineColor","headlineId","iconColor","iconSize","iconType","isSemanticHeading","level","linkProps","meta","metaColor","metaLocation","metaTestID","onActionHoverIn","onActionHoverOut","onActionPress","onActionPressIn","onActionPressOut","onPress","onPressIn","onPressOut","paddingHorizontal","paddingTop","showActionOnHover","testOnly_actionPressed","testOnly_pressed","useFocusCell"]);var X=k(!1),Y=X[0];X=X[1];var Z=j(c("CometFocusTableContext"));Z=Z.FocusCell;var $;if(b!=null){J={disabled:f,linkProps:h,onHoverIn:J,onHoverOut:K,onPress:L,onPressIn:M,onPressOut:N,testid:p,testOnly_pressed:(h=U)!=null?h:!1};if(b instanceof c("IconSource"))$=i.jsx(c("FDSIcon.react"),babelHelpers["extends"]({},J,{"aria-label":e,color:A,icon:b,ref:o}));else if(b instanceof d("SVGIcon").SVGIcon)$=i.jsx(c("FDSIcon.react"),babelHelpers["extends"]({},J,{"aria-label":e,color:A,icon:b,ref:o,size:B}));else{$=i.jsx(c("CometPressable.react"),babelHelpers["extends"]({},J,{"aria-label":(K=e)!=null?K:b,onFocusVisibleChange:X,overlayOffset:l,overlayRadius:4,ref:o,xstyle:[m.actionButton,m.action,g&&!Y&&m.actionHidden,T&&m.showActionOnHover],children:i.jsx(c("FDSText.react"),{color:f?"disabled":"blueLink",numberOfLines:1,type:D===2?"body2":"body3",children:b})}))}}else r!=null&&($=i.jsx(d("react-strict-dom").html.div,{style:m.action,children:r}));if(q!=null){L=q.component;$=i.jsx(L,babelHelpers["extends"]({},q.props,{children:$}))}W===!0&&Z!=null&&($=i.jsx(Z,{children:$}));N=i.jsx(c("FDSTextPairing.react"),{body:s,bodyColor:t,bodyLineLimit:u,headline:x,headlineAddOn:$,headlineColor:y,headlineId:z,headlineLineLimit:2,isSemanticHeading:C,level:D,meta:F,metaColor:G,metaLineLimit:1,metaLocation:(M=H)!=null?M:"below",metaTestID:I});U=i.jsx(c("CometColumn.react"),babelHelpers["extends"]({},a,{paddingHorizontal:w?0:R,xstyle:[m.root,n[S]],children:i.jsx(c("CometColumnItem.react"),{children:O!=null?i.jsx(c("CometPressable.react"),{disabled:v,linkProps:E,onPress:O,onPressIn:P,onPressOut:Q,overlayDisabled:!0,ref:o,testOnly_pressed:(p=V)!=null?p:!1,children:N}):N})}));return w?i.jsxs(c("CometColumn.react"),{paddingHorizontal:R,children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("BaseView.react"),{xstyle:m.hairline})}),U]}):U}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("castToEnum",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=Object.keys(b);for(var e=0;e<d.length;e++)if(b[d[e]]===a)return b[d[e]];return c}f["default"]=a}),66);
__d("useCometDisplayTimingTracker",["InteractionTracingMetrics","performanceNow","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=i||d("react");var j=b.useCallback,k=b.useRef;function a(a,b){var d=k(null);return j(function(e){if(d.current!==e){d.current=e;if(e){var f=(h||(h=c("performanceNow")))();b!=null?c("InteractionTracingMetrics").addMountPoint(b,f,a):c("InteractionTracingMetrics").currentInteractionLogger().forEach(function(b){return c("InteractionTracingMetrics").addMountPoint(b.traceId,f,a)})}}},[b,a])}g["default"]=a}),98);