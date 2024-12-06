"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[8599],{18599:(e,n,i)=>{i.d(n,{a:()=>S,r:()=>h});var t=i(96540),o=i(28899),l=i(87147),a=i(67476),r=i(5562),c=i(52290),d=i(86975),u=i(86527),s=i(36557),m=i(39),v=i(44402),k=i(56774),p=i(51260),f=i(90383),g=i(27715),b=i(60213),w=function(e){return{":hover span":{color:e.colorTokens.foreground.neutral.primary.base}}},E=function(e){return{position:"absolute",height:"42px",width:"100%",top:0,left:0,borderTopLeftRadius:"4px",borderTopRightRadius:"4px",backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},h=5,S=function(e){var n,i,h=e.collection,S=e.trackingV2,y=h.name,N=h.description,C=h.customStyleSheet,x=h.slug,F=(0,b.z)(h),R=(0,p.au)()("ShowLiteCollectionFollowers",{collectionSlug:x||""}),I=(0,k.X)({entity:h,trackingV2:S}),D=(0,m.Z)({name:"heading",scale:"XS",clamp:2,fontWeight:"NORMAL",color:"NORMAL"}),T=(0,v.l)(),_=null!=C&&null!==(n=C.header)&&void 0!==n&&null!==(i=n.backgroundImage)&&void 0!==i&&i.id?(0,f.rP)({miroId:C.header.backgroundImage.id,strategy:f.qY.Resample}):null;return t.createElement(c.a,{width:"280px",display:"flex",flexDirection:"column",padding:"24px",position:"relative",ref:I},!!_&&t.createElement("div",{className:T(E(_))}),t.createElement(c.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},t.createElement(o.u,{size:64,collection:h,link:!0,showBorder:!!_}),t.createElement(c.a,null,t.createElement(l.E,{collection:h,buttonSize:"SMALL",buttonStyleFn:function(e){return e?"SUBTLE":"BRAND"},susiEntry:"follow_card",trackingV2:S}))),t.createElement(c.a,{marginTop:"12px",display:"flex",flexDirection:"column"},t.createElement(d.D,{href:F},t.createElement(c.a,{display:"flex",flexDirection:"column"},t.createElement("div",{className:T([D,{display:"block"}])},y))),t.createElement(c.a,{marginTop:"4px",display:"flex",flexDirection:"row"},t.createElement(s.kZ,{scale:"S",color:"LIGHTER"},"Publication"),t.createElement(r.d,{margin:"0 8px"}),t.createElement(u.N,{href:R,linkStyle:"SUBTLE",rules:w},t.createElement(s.kZ,{scale:"S",color:"DARKER",tag:"span"},(0,g.Ct)(h.subscriberCount||0)),t.createElement(s.kZ,{scale:"S",tag:"span"}," Followers")))),N&&t.createElement(c.a,{paddingTop:"12px"},t.createElement(s.kZ,{scale:"S",color:"DARKER",clamp:4},t.createElement(a.O,{wrapLinks:!0},N))))}},83812:(e,n,i)=>{i.d(n,{_:()=>l});var t=i(19723),o=i(39160),l=function(){var e=(0,t.iT)("enable_publication_hierarchy_web"),n=e.loading,i=e.value;return(0,o.d4)((function(e){return e.cache.publicationHierarchyEnabledWeb}))||!n&&!!i}},60213:(e,n,i)=>{i.d(n,{u:()=>a,z:()=>r});var t=i(96540),o=i(39160),l=i(79959),a=function(){var e=(0,o.d4)((function(e){return e.navigation.currentLocation})),n=(0,o.d4)((function(e){return e.config.authDomain})),i=(0,l.fo)();return(0,t.useCallback)((function(t){var o=t.id,l=t.domain,a=function(e){var n=e.id,i=e.slug;return i?"/".concat(i):"/c/".concat(n)}({id:o,domain:l,slug:t.slug});if(i)return"https://".concat(n).concat(a);try{var r=new URL(e).port;if(l)return"https://".concat(l).concat(r?":".concat(r):"")}catch(e){}return"https://".concat(n).concat(a)}),[i])},r=function(e){return a()(e)}},28899:(e,n,i)=>{i.d(n,{u:()=>g});var t=i(96540),o=i(83812),l=i(60213),a=i(7580),r=i(90280),c=i(86975),d=i(12378),u=i(44402),s=i(20239),m=i(18642),v=i(90383),k=function(e){var n=e.size,i=e.borderRadius;return function(e){return{borderRadius:(0,d.c)(i),width:(0,d.c)(n),height:(0,d.c)(n),backgroundColor:e.colorTokens.background.neutral.secondary.base}}},p=function(e){var n=e.size,i=e.borderRadius,t=e.showHoverState;return{borderRadius:(0,d.c)(i),display:"block",height:"".concat(n,"px"),width:"".concat(n,"px"),position:"absolute",top:0,boxShadow:"inset 0 0 0 1px ".concat((0,m.qy)(.05)),":hover":{backgroundColor:t?(0,m.qy)(.1):"none"}}},f=function(e){var n=e.showBorder,i=e.borderRadius;return{position:"relative",border:n?"2px solid white":void 0,borderRadius:n?(0,d.c)(i):void 0,display:n?"inline-block":"flex"}},g=function(e){var n=e.circular,i=e.collection,d=e.size,m=void 0===d?60:d,g=e.link,b=e.showHoverState,w=e.showBorder,E=void 0!==w&&w,h=(0,l.z)(i),S=(0,u.l)(),y=(0,s.D)(),N=(0,o._)();if(!i||!i.avatar||!i.avatar.id)return null;var C=i.avatar.id,x=i.name||"Publication avatar",F=n?t.createElement(a.r,{miroId:C,alt:x,diameter:m,freezeGifs:!1,showHoverState:b}):t.createElement("div",{className:S(f({showBorder:E,borderRadius:N?4:6}))},t.createElement(r.pg,{rules:[k({size:m,borderRadius:N?2:y.borderRadius.regular})],miroId:C,alt:x,width:m,height:m,strategy:v.qY.Crop}),t.createElement("div",{className:S(p({size:m,borderRadius:N?2:y.borderRadius.regular,showHoverState:b}))}));return g?t.createElement(c.D,{href:h},F):F}},87147:(e,n,i)=>{i.d(n,{E:()=>S});var t=i(80296),o=i(95420),l=i(96540),a=i(54239),r=i(26679),c=i(34208),d=i(2550),u=i(52764),s=i(86329),m=i(43634),v=i(15473),k=i(86527),p=i(52290),f=i(99731),g=i(72130),b=i(49287),w=i(51260),E=i(39160),h=i(46879),S=function(e){var n,i=e.buttonSize,h=e.buttonStyleFn,S=e.collection,N=e.post,C=e.simpleLink,x=e.susiEntry,F=void 0===x?"follow_card":x,R=e.preventParentClick,I=e.width,D=e.trackingV2,T=(0,E.d4)((function(e){return e.config.authDomain})),_=(0,d.A)().viewerId,z=(0,g.$L)(),L=(0,b.jI)(),A=(0,a.zy)(),V=(0,w.W5)(A.pathname),B=null==V||null===(n=V.route)||void 0===n?void 0:n.name,O=(0,s.J)(S),U=O.viewerEdge,P=O.loading,H=function(e,n){var i=(0,o.n)(c.j),a=(0,t.A)(i,1)[0];return l.useCallback((function(){return a({variables:{id:e.id},optimisticResponse:{followCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!0}}},update:function(i){i.modify({id:"User:".concat(n),fields:{missionControl:(0,v.A4)("followedCollections",!0),followingCollectionConnection:(0,v.CQ)(e.id)}})}})}),[e.id])}(S,_),q=function(e,n){var i=(0,o.n)(c.E),a=(0,t.A)(i,1)[0];return l.useCallback((function(){return a({variables:{id:e.id},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,v.A4)("followedCollections",!1)}})}})}),[e.id])}(S,_),M=l.useCallback((function(e){R&&e.preventDefault(),z.event("collection.followed",{collectionId:S.id,followSource:L,trackingV2:D,source:L}),H()}),[S,R,L,z,D]),W=l.useCallback((function(e){R&&e.preventDefault(),z.event("collection.unfollowed",{collectionId:S.id,followSource:L,trackingV2:D,source:L}),q()}),[R,L,z,D]),Z=!(null==U||!U.isFollowing),j=h?h(!!Z):Z?"OBVIOUS":"STRONG";return C?l.createElement(k.N,{onClick:Z?W:M},l.createElement(p.a,{display:"flex",flexDirection:"row"},Z?"Unfollow publication":"Follow publication")):l.createElement(u.c,null,(function(e){return e?l.createElement(f.$n,{size:i,onClick:Z?W:M,buttonStyle:j,loading:P,width:I},Z?"Following":"Follow"):l.createElement(m.r,{collection:S,buttonStyle:j,isButton:!0,buttonSize:i,operation:"register",actionUrl:y(T,S,N)||"",susiEntry:F,pageSource:(0,r.x)(B,"register"),buttonWidth:I},Z?"Following":"Follow")}))},y=function(e,n,i){return n.slug&&(i&&i.id?(0,h.PdS)(e,n.slug,i.id):(0,h.xNA)(e,n.slug))}},86329:(e,n,i)=>{i.d(n,{J:()=>a});var t=i(39181),o=i(45458),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Collection_viewerEdge"}}]}}]}}]}}]}}].concat((0,o.A)([{kind:"FragmentDefinition",name:{kind:"Name",value:"Collection_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CollectionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"canEditOwnPosts"}},{kind:"Field",name:{kind:"Name",value:"canEditPosts"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToLetters"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToMediumNewsletter"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToEmails"}},{kind:"Field",name:{kind:"Name",value:"isWriter"}}]}}]))},a=function(e){var n,i,o=(0,t.I)(l,{variables:{collectionId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),a=o.loading,r=o.error,c=o.data;return a?{loading:a}:r?{error:r}:{viewerEdge:null==c||null===(i=c.collection)||void 0===i?void 0:i.viewerEdge}}},52764:(e,n,i)=>{i.d(n,{c:()=>o});var t=i(27721),o=function(e){var n=e.children,i=e.nonBlocking,o=(0,t.R)(),l=o.error,a=o.loading,r=o.value;return i&&(l||a)?n(null):a?null:n(r)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8599.1ab63137.chunk.js.map