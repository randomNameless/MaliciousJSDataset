"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[7082],{86895:(e,n,t)=>{t.d(n,{T:()=>d});var a=t(45458),i=t(24959),l=t(55918),o=t(82567),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}}]}}].concat((0,a.A)(l.s.definitions),(0,a.A)(o.$.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeatureStoryModal_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useFeatureStoryInPub_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreview_post"}}]}}].concat((0,a.A)(i.Y.definitions),(0,a.A)(r.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FeatureStoryMenuItem_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useFeatureStoryInPub_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FeatureStoryModal_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreview_post"}}]}}].concat((0,a.A)(i.Y.definitions),(0,a.A)(c.definitions),(0,a.A)(r.definitions))}},2930:(e,n,t)=>{t.d(n,{k:()=>P});var a=t(80296),i=t(96540),l=t(14782),o=t(52290),r=t(86527),c=t(60603),d=t(94170),u=t(36557),s=t(49287),m=t(51260),p=t(49041),f=t(28899),k=t(39410),v=t(6465),y=function(e){var n,t=e.post,a=t.collection;return t&&a?i.createElement(o.a,{display:"flex",flexDirection:"column",border:"neutral.primary",borderRadius:"4px",padding:"16px",gap:"12px",marginTop:"27px"},i.createElement(o.a,{display:"flex"},i.createElement(o.a,{marginRight:"8px"},i.createElement(f.u,{size:20,collection:a})),i.createElement(o.a,{paddingRight:"4px"},i.createElement(u.kZ,{scale:"S",color:"LIGHTER"},"In")),i.createElement(r.N,{inline:!0,href:"#",linkStyle:"SUBTLE"},i.createElement(u.kZ,{scale:"S",color:"DARKER",clamp:1},null==a?void 0:a.name)),i.createElement(o.a,{padding:"0 4px"},i.createElement(u.kZ,{scale:"S",color:"LIGHTER"},"by")),i.createElement(r.N,{href:"#",linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"}},i.createElement(u.kZ,{scale:"S",color:"DARKER",clamp:1},null===(n=t.creator)||void 0===n?void 0:n.name),t.creator&&i.createElement(v.T,{author:t.creator,size:"S"}))),i.createElement(k.hE,{scale:"XS",clamp:3},t.title)):null},S=t(45458),g=t(95420),E=t(67194),b=t(91830),h=t(24959),x=function(e){var n=e.hide,t=e.isVisible,l=e.post,r=e.isFeaturedInCurrentPublication,c=e.showFeaturedStoriesLink,u=e.refetch,p=l.collection,f=function(e){var n=e.post,t=e.isFeaturedInCurrentPublication,l=e.refetch,o=n.id,r=n.collection,c=(0,b.zF)(),d=(0,m.au)()("ShowCollectionManageFeaturedStories",{collectionSlug:(null==r?void 0:r.slug)||""}),u=(0,i.useCallback)((function(){c({toastStyle:"FEATURE_STORY",extraParams:{viewAllLink:d,isFeaturedInPublication:t,pubName:(null==r?void 0:r.name)||""}})}),[c,null==r?void 0:r.name,t]),s=(0,i.useCallback)((function(){c({toastStyle:"MESSAGE",message:"Something went wrong. Please try again later."})}),[c]),p=(0,g.n)(h.g,{variables:{postId:o,pubId:(null==r?void 0:r.id)||"",featured:!t},optimisticResponse:{setPostPublicationFeatured:{__typename:"MutationSuccess",success:!0}},update:function(e,n){var a,i;if("MutationSuccess"===(null===(a=n.data)||void 0===a?void 0:a.setPostPublicationFeatured.__typename)&&null!==(i=n.data)&&void 0!==i&&i.setPostPublicationFeatured.success){var l=(null==r?void 0:r.id)||"1";e.modify({id:e.identify({__typename:"Post",id:o}),fields:{publicationsFeaturingPost:function(e,n){var a=n.readField;return t?e.filter((function(e){return(null==r?void 0:r.id)!==a("id",e)})):e.find((function(e){return a("id",e)===l}))?e:[].concat((0,S.A)(e),[(0,E.WU)("Publication:".concat(l))])}}})}},onCompleted:function(e){"MutationSuccess"===(null==e?void 0:e.setPostPublicationFeatured.__typename)&&null!=e&&e.setPostPublicationFeatured.success?(u(),l&&l()):s()},onError:s});return{setPostPublicationFeatured:(0,a.A)(p,1)[0]}}({post:l,isFeaturedInCurrentPublication:r,refetch:u}),k=f.setPostPublicationFeatured,v=(0,m.au)()("ShowCollectionManageFeaturedStories",{collectionSlug:(null==p?void 0:p.slug)||""}),x=(0,i.useCallback)((function(){k(),n()}),[k,n]);return p?i.createElement(i.Fragment,null,t&&i.createElement(s.Ne,{source:{dimension:"feature_story_modal"},extendSource:!0},i.createElement(d.a,{hide:n,title:r?"Stop featuring this story":"Feature this story",confirmText:r?"Stop featuring":"Feature now",confirmButtonStyle:"BRAND",cancelButtonStyle:"SUBTLE",cancelText:"Cancel",onConfirm:x},i.createElement(o.a,null,i.createElement(y,{post:l}),r?i.createElement(N,{viewAllLink:c?v:void 0}):i.createElement(F,{viewAllLink:v}))))):null},F=function(e){var n=e.viewAllLink;return i.createElement(i.Fragment,null,i.createElement(o.a,{display:"flex",justifyContent:"space-between",marginTop:"27px"},i.createElement(o.a,{display:"flex"},i.createElement(u.kZ,{scale:"M"},i.createElement("span",{style:{fontWeight:700}},"2")," featured stories are available"),i.createElement(o.a,{marginLeft:"4px"},i.createElement(p.j,null))),i.createElement(u.kZ,{scale:"M"},i.createElement(r.N,{href:n,linkStyle:"OBVIOUS",inline:!0},"View featured stories"))),i.createElement(o.a,{marginTop:"24px"},i.createElement(u.kZ,{scale:"M",color:"DARKER"},"Featuring this story will prioritize it in recommendations to your publication’s followers.  ",i.createElement(r.N,{href:n,inline:!0,linkStyle:"OBVIOUS"},"Learn more"))))},N=function(e){var n=e.viewAllLink;return i.createElement(o.a,{marginTop:"24px"},i.createElement(u.kZ,{scale:"M",color:"DARKER"},"Are you sure you want to stop featuring this story? The number of featured stories you have available will stay the same.",i.createElement("br",null),i.createElement("br",null),"If you want to feature this story again it will use another featured story credit.  ",n&&i.createElement(r.N,{href:n,inline:!0,linkStyle:"OBVIOUS"},"View featured stories")))},A=t(39661),P=function(e){var n=e.post,t=e.hidePopover,d=e.isFeaturedInCurrentPublication,u=e.showCollectionName,s=e.showFeaturedStoriesLink,m=e.refetch,p=(0,c.e)(!1),f=(0,a.A)(p,3),k=f[0],v=f[1],y=f[2],S=(0,i.useCallback)((function(){y(),t()}),[y,t]),g=n.collection;return g?i.createElement(l.q3,null,i.createElement(o.a,{display:"flex",gap:"12px",alignItems:"flex-start"},i.createElement(r.N,{onClick:v,rules:{textAlign:"left"}},d?"Stop featuring this story".concat(u?" from ".concat(g.name):""):"Feature this story".concat(u?" from ".concat(g.name):"")),i.createElement(A.X,null)),i.createElement(x,{isVisible:k,hide:S,post:n,isFeaturedInCurrentPublication:d,showFeaturedStoriesLink:s,refetch:m})):null}},49041:(e,n,t)=>{t.d(n,{j:()=>r});var a=t(96540),i=t(34899),l=t(36557),o=function(){return a.createElement(l.kZ,{scale:"XS",color:"LIGHTER"},"Publications gain a featured story every 7 days and can accrue up to 4 featured stories at a time.")},r=function(){return a.createElement(i.I,{placement:"top",iconSize:"16px",tooltipContents:o})}},24959:(e,n,t)=>{t.d(n,{Y:()=>a,g:()=>i});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useFeatureStoryInPub_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"publicationsFeaturingPost"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"SetPostPublicationFeaturedMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"pubId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"featured"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"setPostPublicationFeatured"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"postId"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}},{kind:"ObjectField",name:{kind:"Name",value:"publicationId"},value:{kind:"Variable",name:{kind:"Name",value:"pubId"}}},{kind:"ObjectField",name:{kind:"Name",value:"featured"},value:{kind:"Variable",name:{kind:"Name",value:"featured"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MutationSuccess"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"}}]}}]}}]}}]}},70521:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(58168),i=t(80045),l=t(96540),o=t(20036),r=t(24809),c=["isResponsive"],d=function(e){var n=e.isResponsive,t=(0,i.A)(e,c);return l.createElement(o.u,(0,a.A)({text:n?"More":void 0,icon:l.createElement(r.A,null)},t))}},67459:(e,n,t)=>{t.d(n,{J:()=>u,g:()=>d});var a=t(96540),i=t(64122),l=t(56742),o=t(51260),r=t(39160),c=t(60213),d=function(){var e=(0,r.d4)((function(e){return e.config.authDomain})),n=(0,o.RW)(),t=n.type===l.S9.USER,d=(0,o.om)(),u=(0,c.u)(),s=(0,i.W)();return(0,a.useCallback)((function(n){var a,i=n.uniqueSlug||n.id;if(n.isSeries)return"https://".concat(e).concat(d("ShowSeries",{postId:i}));if(null!==(a=n.sequence)&&void 0!==a&&a.slug)return"https://".concat(e).concat(d("ShowSequencePost",{sequenceSlug:n.sequence.slug,postId:i}));if(n.collection&&!t){var l=u({id:n.collection.id,domain:n.collection.domain,slug:n.collection.slug});return"".concat(l,"/").concat(i)}if(n.creator){var o=s(n.creator);return"".concat(o,"/").concat(i)}return"https://".concat(e).concat(d("ShowPost",{postId:i}))}),[n,d,u,s])},u=function(e){return d()(e)}},6465:(e,n,t)=>{t.d(n,{T:()=>f,t:()=>k});var a=t(96540),i=t(64122),l=t(36469),o=t(88474),r=t(29977),c=t(22841),d=t(52290),u=t(41299),s=t(86527),m=t(5600),p=t(36557),f=function(e){var n=e.author,t=e.size;return(0,o.E)(n)?a.createElement(d.a,{marginLeft:"2px",marginTop:"2px"},a.createElement(l.b,{size:t})):null},k=function(e){var n=e.user,t=e.includeVerifiedAuthorBadge,l=e.clamp,o=e.popoverPlacement,d=void 0===o?"top":o,k=e.scale,v=void 0===k?"S":k,y=e.badgeSize,S=void 0===y?"S":y,g=e.testId,E=e.trackingV2,b=(0,i.W)()(n),h=(0,a.useCallback)((function(){return a.createElement(c.J,{user:n,trackingV2:E})}),[n,E]);return a.createElement(u.R,{targetDistance:r.f,mouseLeaveDelay:100,mouseEnterDelay:m.A,placement:d,role:"tooltip",noArrow:!0,popoverRenderFn:h,display:"block"},a.createElement(s.N,{href:b,linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"},"data-testid":g},a.createElement(p.kZ,{scale:v,color:"DARKER",clamp:l},n.name),t&&a.createElement(f,{author:n,size:S})))}},34899:(e,n,t)=>{t.d(n,{I:()=>v});var a,i,l=t(80296),o=t(96540),r=t(52290),c=t(28993),d=t(41299),u=t(20239),s=t(44402),m=t(63191);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(null,arguments)}const f=function(e){return o.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),a||(a=o.createElement("g",{clipPath:"url(#clip0_12092_5259)"},o.createElement("path",{fill:"#242424",fillRule:"evenodd",d:"M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m1 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M8.699 5.2h-1.4V3.8h1.4zm0 .933h-1.4v6.533h1.4z",clipRule:"evenodd"}))),i||(i=o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_12092_5259"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))};var k=t(60603),v=function(e){var n,t=e.mouseLeaveDelay,a=void 0===t?250:t,i=e.placement,p=e.tooltipContents,v=e.customZIndex,y=e.iconColor,S=e.iconSize,g=void 0===S?"18px":S,E=(0,u.D)(),b=(0,s.l)(),h=(0,k.e)(!1),x=(0,l.A)(h,3),F=x[0],N=x[1],A=x[2];switch(g){case"16px":n=o.createElement(f,{className:b({"& g > path":{fill:y||E.colorTokens.foreground.neutral.secondary.base}})});break;case"18px":n=o.createElement(m.A,{width:"18px",height:"18px",className:b({"& > path":{fill:y||E.colorTokens.foreground.neutral.secondary.base}})})}return o.createElement(r.a,{display:"inline"},o.createElement(d.R,{mouseLeaveDelay:a,placement:i,popoverRenderFn:function(){return o.createElement(r.a,{maxWidth:"250px",padding:"18px"},p())},customZIndex:v,noArrow:!0,isVisible:F||void 0,hideOnClick:F||void 0,hide:F?A:void 0},o.createElement(c.P,{onTouchStart:N},n)))}},94170:(e,n,t)=>{t.d(n,{a:()=>w});var a=t(80296),i=t(96540),l=t(96063),o=t(79766),r=t(52290),c=t(99731),d=t(3005),u=t(48198),s=t(85050),m=t(27049),p=t(56942),f=t(36557),k=t(98761),v=t(18642),y=t(46963),S={xs:"SMALL",sm:"REGULAR",md:"REGULAR",lg:"REGULAR",xl:"REGULAR"},g={position:"absolute",top:"8px",left:"0",width:"100%",minHeight:"calc(100% - 8px)",borderRadius:"12px 12px 0 0",padding:"0 24px 24px"},E=function(e){return{"0%":{transform:e?"translateY(100%)":"translateY(16px)"},"100%":{transform:e?"translateY(0%)":"translateY(0px)"}}},b=function(e){return{"0%":{transform:e?"translateY(0%)":"translateY(0px)"},"100%":{transform:e?"translateY(100%)":"translateY(16px)"}}},h={"0%":{opacity:"0"},"100%":{opacity:"1"}},x={"0%":{opacity:"1"},"100%":{opacity:"0"}},F={"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.02)"},"75%":{transform:"scale(1.02)"},"100%":{transform:"scale(1)"}},N={"0%":{background:(0,v.qy)(0)},"100%":{background:(0,v.qy)(.25)}},A={"0%":{background:(0,v.qy)(.25)},"100%":{background:(0,v.qy)(0)}},P={padding:"24px 0"},w=function(e){var n=e.hide,t=e.title,w=e.subtitle,C=e.subtitleTextAlign,I=e.onConfirm,R=e.confirmText,T=e.confirmButtonStyle,D=void 0===T?"STRONG":T,L=e.onCancel,O=e.cancelText,V=e.cancelButtonStyle,_=void 0===V?"OBVIOUS":V,B=e.children,M=e.withCloseButton,K=void 0===M||M,U=e.hideOnConfirm,z=void 0===U||U,Z=e.preventClickOutside,Y=e.confirmDisabled,q=e.confirmBeforeLeavePage,G=e.delayHideEnabled,j=e.padding,H=void 0===j?"32px":j,W=e.subtitleMargin,J=void 0===W?"24px":W,X=e.subtitleColor,$=void 0===X?"DARKER":X,Q=(0,i.useRef)(null),ee=(0,i.useState)(!0),ne=(0,a.A)(ee,2),te=ne[0],ae=ne[1],ie=(0,i.useState)(!0),le=(0,a.A)(ie,2),oe=le[0],re=le[1],ce=(0,y.U)()===m.i.xs,de=(0,k.h)({modalBounceKeyframe:F,overlayFadeInKeyframe:N,overlayFadeOutKeyframe:A}),ue=de.modalBounceKeyframe,se=de.overlayFadeInKeyframe,me=de.overlayFadeOutKeyframe,pe=(0,i.useCallback)((function(){re(!1)}),[]),fe=(0,i.useCallback)((function(e){Q.current&&Z&&!ce&&(e.preventDefault(),e.stopPropagation(),Q.current.style.animation="".concat(ue," 600ms ease-in-out"))}),[ue,Z,ce]);(0,l.A)(Q,fe),(0,o.c)({disabled:!q});var ke=(0,i.useCallback)((function(){null==I||I(),z&&pe()}),[pe,I,z]),ve=(0,i.useCallback)((function(){null==L||L(),pe()}),[pe,L]),ye=(0,i.useMemo)((function(){return R||O?i.createElement(r.a,{display:"flex",justifyContent:"flex-end",gap:"16px"},O&&i.createElement(c.$n,{buttonStyle:_,onClick:ve,size:S},O),R&&i.createElement(c.$n,{buttonStyle:D,onClick:ke,size:S,disabled:Y},R)):null}),[I,R,D,L,O,_,pe,Y]);(0,i.useEffect)((function(){if(Q.current)return Q.current.addEventListener("animationend",e),function(){var n;null===(n=Q.current)||void 0===n||n.removeEventListener("animationend",e)};function e(){Q.current.style.animation=""}}),[]),(0,i.useEffect)((function(){if(!oe&&n){var e=setTimeout((function(){n()}),310);return function(){clearTimeout(e)}}}),[oe,n]),(0,i.useEffect)((function(){G&&re(!1)}),[G]);var Se,ge=(0,i.useCallback)((function(){return ae(!1)}),[]),Ee=function(e){var n=e.isAnimating,t=e.isVisible,a=e.isMobile,i=(0,k.h)({modalSlideInKeyframe:E(a),modalSlideOutKeyframe:b(a),modalFadeInKeyframe:h,modalFadeOutKeyframe:x,modalBounceKeyframe:F,overlayFadeInKeyframe:N,overlayFadeOutKeyframe:A}),l=i.modalSlideInKeyframe,o=i.modalSlideOutKeyframe,r=i.modalFadeInKeyframe,c=i.modalFadeOutKeyframe;if(t&&!n)return{animation:"none"};var d="".concat(t?l:o," ").concat(300,"ms forwards cubic-bezier(0.4, 0, 0.2, 1)");if(a)return{animation:d,position:"absolute",width:"100%",height:"calc(100% - 8px)"};var u="".concat(t?r:c," 150ms forwards ease-in-out");return{animation:"".concat(d,", ").concat(u)}}({isAnimating:te,isVisible:oe,isMobile:ce});return i.createElement(d.l,{isVisible:oe,hide:Z?void 0:pe,withCloseButton:!1,withLayerAnimation:!1,withAnimation:!0,padding:0,customBackgroundColor:(0,v.qy)(.25),layerRules:[P,(Se=oe?se:me,function(){return{animation:"".concat(Se," 150ms forwards ease-in-out")}})],containerRules:Ee,onAnimationEnd:ge},i.createElement(r.a,{ref:Q,boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 10px",width:"540px",padding:H,borderRadius:"4px",backgroundColor:"BACKGROUND",position:"relative",xs:g},i.createElement(s.V,{xs:!0,height:"56px",marginBottom:"16px",paddingTop:"16px"},ye),i.createElement(r.a,{textAlign:"center"},i.createElement(p.DZ,{scale:"S"},t)),w&&i.createElement(r.a,{marginTop:J,textAlign:C},i.createElement(f.kZ,{scale:"M",color:$},w)),B&&i.createElement(r.a,{marginTop:"32px"},B),ye&&i.createElement(s.V,{sm:!0,md:!0,lg:!0,xl:!0,marginTop:"32px"},ye),K&&i.createElement(r.a,{position:"absolute",right:{xs:void 0,sm:"16px",md:"16px",lg:"16px",xl:"16px"},top:{xs:"18px",sm:"16px",md:"16px",lg:"16px",xl:"16px"},left:{xs:"18px",sm:void 0,md:void 0,lg:void 0,xl:void 0}},i.createElement(u.J,{isPositionAbsolute:!1,compensateInnerPadding:!1,size:"REGULAR",onClick:pe}))))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7082.5d2b0546.chunk.js.map