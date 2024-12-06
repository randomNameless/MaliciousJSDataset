"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[9977],{41005:(e,t,n)=>{n.d(t,{y:()=>v});var r=n(96540),a=n(80545),l=n(54239),i=n(64467),o=n(52290),c=n(39),s=n(44402),u=n(38667),d={fontSize:"20px",textTransform:"uppercase"},m=function(e){return(0,i.A)({display:"block",fontSize:"192px",lineHeight:"200px"},u.sm(e),{fontSize:"150px"})},p=function(e){var t=e.errorCode,n=(0,s.l)(),a=(0,c.Z)({name:"brand",scale:"XXXL",color:"DARKER"});return r.createElement(o.a,{display:"flex",flexDirection:"column"},r.createElement("div",{className:n(d)},"Error"),r.createElement("div",{className:n([a,m])},t))},f=n(28072),E=n(86527),g=n(47517),x=n(80890),k={fontSize:"24px"};function v(e){var t=e.code,n=e.title,i=e.children,c=e.lumenId,u=(0,s.l)();return(0,r.useEffect)((function(){g.v.debug({status:t},"[".concat(t,"]: ").concat(n))}),[]),r.createElement(l.qh,{render:function(e){var l=e.staticContext;return l&&(l.statusCode=t),r.createElement("div",null,r.createElement(a.mg,null,r.createElement("title",null,n)),r.createElement(o.a,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},r.createElement(f.P,{size:"inset"},r.createElement(o.a,null,r.createElement(p,{errorCode:t}),r.createElement("div",{className:u((0,x.N_)())},r.createElement(o.a,{marginBottom:"28px"},r.createElement("div",{className:u(k)},i)),c?r.createElement("div",{className:u(k)},"A report is available on"," ",r.createElement(E.N,{href:"https://lumendatabase.org/notices/".concat(c),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},50584:(e,t,n)=>{n.d(t,{s:()=>u});var r=n(96540),a=n(41005),l=n(52290),i=n(99731),o=n(27622),c=n(72130),s=n(39160),u=function(e){var t=e.suspension,n=(0,c.$L)(),u=(0,s.d4)((function(e){return e.config.authDomain}));return r.createElement(a.y,{code:410,title:"410 ".concat(t," suspended — Medium")},r.createElement(l.a,{display:"flex",marginTop:"-30px"},r.createElement(o.Pd,{scale:"S"},"This ",t," is under investigation or was found in violation of the Medium Rules."," ")),r.createElement(l.a,{display:"flex",marginTop:"80px"},r.createElement(o.Pd,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",r.createElement("br",null)," to find one that’s right for you.")),r.createElement(l.a,{display:"flex",marginTop:"15px"},r.createElement(i.$n,{buttonStyle:"SUBTLE",href:"https://".concat(u),onClick:function(){n.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}},5009:(e,t,n)=>{n.d(t,{H:()=>c,T:()=>s});var r=n(96540),a=n(41005),l=n(26365),i=n(51622),o=n(50584),c=function(e){return!function(e){return"User"===(null==e?void 0:e.__typename)}(e)},s=function(e){var t=e.userResult;switch(null==t?void 0:t.__typename){case"Blocked":return r.createElement(a.y,{code:403,title:"403 Blocked — Medium"},"This user has blocked you from following them or viewing their stories.");case"NotFound":return r.createElement(i.u,null);case"AccountSuspended":return r.createElement(o.s,{suspension:"account"});default:return r.createElement(l.z,{error:new Error("Unsupported userResult: ".concat(null==t?void 0:t.__typename))})}}},67476:(e,t,n)=>{n.d(t,{O:()=>s});var r=n(42833),a=n.n(r),l=n(96540),i=n(99011),o=n(86527),c=n(44402),s=function(e){var t=e.children,n=e.linkifyTwitterHandles,r=void 0!==n&&n,s=e.wrapLinks,u=void 0!==s&&s,d=e.target,m=(0,c.l)();if(!t)return null;var p=a()().tlds(i);r&&p.add("@",{validate:function(e,t,n){var r=e.slice(t);if(n.re.twitter||(n.re.twitter=new RegExp("^([a-zA-Z0-9_]){1,15}(?!_)(?=$|"+n.re.src_ZPCc+")")),n.re.twitter.test(r)){if(t>=2&&"@"===r[t-2])return!1;var a=r.match(n.re.twitter);return!!a&&a[0].length}return 0},normalize:function(e){e.url="https://twitter.com/"+e.url.replace(/^@/,"")}});var f=p.match(t);if(!f)return l.createElement("span",{className:m({wordBreak:"break-word"})},t);var E=0,g=f.reduce((function(e,n,r){return t?(n.index>E&&e.push(l.createElement(l.Fragment,{key:"link-before-".concat(r)},t.substring(E,n.index))),e.push(l.createElement(o.N,{wrapLinks:u,disableSourceParam:!0,key:r,inline:!0,linkStyle:"OBVIOUS",href:n.url,target:d},n.text)),r===f.length-1&&n.lastIndex<t.length&&e.push(l.createElement(l.Fragment,{key:"link-after-".concat(r)},t.substring(n.lastIndex,t.length))),E=n.lastIndex,e):[]}),[]);return l.createElement(l.Fragment,null,g)}},29977:(e,t,n)=>{n.d(t,{f:()=>x,M:()=>k});var r=n(39181),a=n(96540),l=n(14596),i=n(22841),o=n(41299),c=n(49287),s=n(44402),u=n(39160),d=n(46879),m=n(45458),p=n(23445),f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserMentionTooltipQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}]}}].concat((0,m.A)(p.pB.definitions))},E=function(e){return{background:"none",color:e.colorTokens.foreground.accent.primary.base,textDecoration:"none"}},g={display:"inline"},x=5;function k(e){var t=e.popoverTag,n=e.children,m=e.userId,p=e.richTextStyle,k=(0,s.l)(),v=(0,u.d4)((function(e){return e.config.authDomain})),h=(0,r.I)(f,{variables:{userId:m},ssr:!1}).data,b=null==h?void 0:h.user;return"STREAM"===p?a.createElement("span",{className:k(E)},n):a.createElement(c.Ne,{source:{dimension:"user_mention"},extendSource:!0},a.createElement(o.R,{popoverTag:t,placement:"right",targetDistance:x,mouseLeaveDelay:200,popoverRenderFn:function(){return b&&a.createElement(i.J,{user:b,trackingV2:!0})},fallbackPlacements:["top","bottom"],noArrow:!0,display:"inline",hoverableRules:g,noPortal:!1,disablePortalOverlay:!0},a.createElement(l.M,{target:"_blank",href:(0,d.x4P)(v,m),className:k(E)},n)))}},22841:(e,t,n)=>{n.d(t,{J:()=>A,_:()=>T});var r=n(39181),a=n(55127),l=n.n(a),i=n(96540),o=n(64122),c=n(70600),s=n(5009),u=n(36469),d=n(88474),m=n(67476),p=n(23393),f=n(54654),E=n(23445),g=n(52290),x=n(86975),k=n(86527),v=n(36557),h=n(39),b=n(44402),y=n(56774),w=n(51260),S=n(21202),N=n(27715),T=function(){var e=(0,b.l)(),t=(0,S.L)();return i.createElement("div",{className:e((function(){return t}))},i.createElement(g.a,{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",padding:"24px",width:"280px",backgroundColor:"BACKGROUND"},i.createElement(g.a,{width:"100%"},i.createElement(g.a,{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"12px"},i.createElement(g.a,{height:"64px",width:"64px",backgroundColor:"BASE_NORMAL",borderRadius:"50%"}),i.createElement(g.a,{height:"32px",width:"62px",borderRadius:"16px",backgroundColor:"BASE_NORMAL"})),i.createElement(g.a,{width:"120px",height:"16px",backgroundColor:"BASE_NORMAL",marginBottom:"8px"}),i.createElement(g.a,{width:"88px",height:"16px",backgroundColor:"BASE_NORMAL"}))))},R=function(e){return{":hover span":{color:e.colorTokens.foreground.neutral.primary.base}}},A=function(e){var t,n,a=e.user,S=e.trackingV2,A=a.id,_=a.name,C=a.bio,D=a.username,L=(0,b.l)(),B=(0,w.au)(),I=(0,r.I)(E.AB,{variables:{id:A}}),M=I.data,O=I.loading,U=(0,o.f)(a),P=B("ShowUserFollowers",{username:D||""}),V=(0,d.E)(a),F=(0,y.X)({entity:a,trackingV2:S}),z=(0,s.H)(null==M?void 0:M.userResult)||null==M?void 0:M.userResult,Z=(0,h.Z)({name:"heading",scale:"XS",clamp:2,fontWeight:"NORMAL",color:"NORMAL"});if(z){var H=z.socialStats;n=l()("Follower",(null==H?void 0:H.followerCount)||0),t=(0,N.Ct)((null==H?void 0:H.followerCount)||0)}return O?i.createElement(T,null):i.createElement(g.a,{display:"flex",flexDirection:"column",padding:"24px",width:"280px",borderRadius:"4px",boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.05)",ref:F},i.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},i.createElement(p.H8,{scale:"L",user:a,link:!0,showBadge:!0,badgeScale:"L"}),i.createElement(g.a,null,i.createElement(f.P,{user:a,buttonSize:"SMALL",susiEntry:"follow_card",buttonStyleFn:function(e){return e?"SUBTLE":"BRAND"},trackingV2:S}))),i.createElement(g.a,{marginTop:"12px",display:"flex",flexDirection:"column"},i.createElement(x.D,{href:U},i.createElement(g.a,{display:"flex",flexWrap:"wrap",alignItems:"baseline"},i.createElement("span",{className:L([Z,{wordBreak:"break-word",paddingRight:"4px"}])},_),z&&i.createElement(c.U,{user:z,scale:"S",paddingTop:"2px"}))),i.createElement(g.a,{marginTop:"4px"},i.createElement(k.N,{href:P,linkStyle:"SUBTLE",rules:R,role:"follower-count"},i.createElement(v.kZ,{scale:"S",color:"DARKER",tag:"span"},t),i.createElement(v.kZ,{scale:"S",tag:"span"}," ",n)))),C&&i.createElement(g.a,{paddingTop:"12px"},i.createElement(v.kZ,{scale:"S",color:"DARKER",clamp:4},i.createElement(m.O,{wrapLinks:!0},C))),V&&i.createElement(g.a,{paddingTop:"16px"},i.createElement(u.b,{size:"M",withText:!0})))}},56774:(e,t,n)=>{n.d(t,{X:()=>s});var r=n(96540),a=n(72130),l=n(49287),i=n(79429),o=n(50684),c=n(39160),s=function(e){var t=e.entity,n=e.trackingV2,s=(0,a.$L)(),u=(0,l.jI)(),d=(0,o.MW)(),m=(0,c.d4)((function(e){return e.navigation.referrer})),p=(0,r.useCallback)((function(){null!=t&&t.id&&n&&s.event("".concat(t.__typename.toLowerCase(),".presented"),{targetUserId:"User"===t.__typename?t.id:void 0,collectionId:"Collection"===t.__typename?t.id:void 0,referrer:m,referrerSource:d,trackingV2:!0,source:u})}),[t,u,m,d]);return(0,i.s)({onPresentedFn:p})}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9977.5b3eb23a.chunk.js.map