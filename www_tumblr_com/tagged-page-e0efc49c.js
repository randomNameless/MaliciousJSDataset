!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5051af4c-59dd-4269-ad03-4dfcda9891d7",e._sentryDebugIdIdentifier="sentry-dbid-5051af4c-59dd-4269-ad03-4dfcda9891d7")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[3326],{31394:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(27699),o=s(56365),n=s(85191),l=s(43776);let i={credit:"kckjF",blogCredit:"CrU4O"};var r=s(60397);let d=function({avatarUrl:e,blogName:t,postUrl:s,postId:d,conciseAttribution:c}){let m=/*#__PURE__*/(0,r.jsxs)(r.Fragment,{children:[/*#__PURE__*/(0,r.jsx)("div",{className:i.blogCredit,children:/*#__PURE__*/(0,r.jsx)("span",{children:/*#__PURE__*/(0,r.jsx)(n.Ay,{comment:"Post attribution displayed on the bottom of a banner image. Variable is a blog name so it reads 'Posted by some-cool-blog-name'. You can move it around inside the translated string, but please do not modify the actual [boldBlog][blogName][/boldBlog] token. On smaller screens, the blogname is replaced with just the user's avatar",components:{boldBlog:/*#__PURE__*/(0,r.jsx)("strong",{children:t})},params:{blogName:c?"":t},children:"Posted by [boldBlog][blogName][/boldBlog]"})})}),/*#__PURE__*/(0,r.jsx)(a.A,{avatarShape:l.b.Square,dimension:24,imageResponse:[{width:128,height:128,url:e}]})]});return s?/*#__PURE__*/(0,r.jsx)("a",{className:i.credit,href:s,children:m}):/*#__PURE__*/(0,r.jsx)(o.A,{blogName:t,className:i.credit,postId:d,showBlogCard:!1,children:m})}},14261:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(74059),o=/*#__PURE__*/s.n(a),n=s(66449);let l={pillTagsContainer:"YDdl_",pillTag:"avzpt",isColorful:"AaHfQ"};var i=s(60397);let r=({tags:e,isColorful:t,wrapperClassName:s,className:a})=>e?/*#__PURE__*/(0,i.jsx)("div",{className:o()(l.pillTagsContainer,s,{[l.isColorful]:t}),children:e?.map(e=>/*#__PURE__*/i.jsx(n.A,{className:l.tagLink,isPill:!0,pillClassName:o()(l.pillTag,a),tagName:e},e))}):null},72026:(e,t,s)=>{s.r(t),s.d(t,{HUBS_HEADER_QUERY_KEY_PARAM:()=>ew,default:()=>ey});var a=s(8254),o=s(74059),n=/*#__PURE__*/s.n(o),l=s(77529),i=s(97411),r=s(56365),d=s(92496),c=s(31394),m=s(28230),u=s(8578),g=s(1258),p=s(14261),h=s(51420),b=s(2228),x=s(75529),f=s(18785),j=s(62718),w=s(85191),y=s(77058),v=s(27120),N=s(83087),C=s(12044),T=s(49315),A=s(4613);function P(e){let{apiFetch:t}=(0,A.Us)();return(0,T.I)({queryKey:["related-tags",e],queryFn:()=>M(t,e),refetchOnWindowFocus:!1,refetchOnMount:!1,staleTime:6e5})}async function M(e,t){return""===t?[]:(await e("/v2/related/tags",{queryParams:{limit:6,"tags[]":t}})).response[t]}var k=s(36665),I=s(53986),_=s(55321),F=s(72571),S=s(49702),L=s(17893),O=s(45872),R=s(94048),D=s(93448),E=s(83322);let B=/*#__PURE__*/(0,k.createContext)(void 0),U=()=>{let e=(0,k.useContext)(B);if(void 0===e)throw Error("HubsContext must be used within a Provider");return e};var H=s(53542),$=s(6865),X=s(51713),Y=s(74082),V=s(35870);let z=e=>!!e.some(({objectType:e,displayType:t})=>e===E.vt.Post&&void 0===t);var G=s(20817),Q=s(17878),q=s(90437),W=s(96273);let Z=({tag:e,sort:t,querySource:s,queryClient:a,onInitialResponseError:o})=>{let n=`hubsTimeline-${e}-${t}-${s}`,l=async({apiFetch:n},l,i,r)=>{let d;return d=l?await n(l):await (0,q.LR)(n,{params:{tag:e}},{sort:t,query_source:s}).fetch().catch(e=>(o?.(e),{response:{timeline:{elements:[]}}})),d.response.timeline.links?.next||(0,Q.OX)(d.response.timeline.elements,r,a),d.response.timeline};return(0,W.U)({timelineId:n,fetchTimeline:l,itemSourceName:"hubs"})},K={timelineMessageListView:"CIwpj",postColumn:"kOFpP",summary:"ZN143",loader:"OnrJU",main:"ECTnf",headerImageContainer:"iGLU3",bannerImage:"qJeyT",headerOverlay:"ZV6oZ",pillTagsWrapper:"ovT1K",summaryInfo:"YOf31",sticky:"FLoBV",summaryInfoContent:"fo_cP",pinned:"hrkkS",titleTagContainer:"GNy0H",totals:"S3HC8",followButton:"EVsUa",pinnedFollowButton:"UIjbu",titleTag:"Wo4gS",subtitleTag:"xQQCu",expandDescription:"vaDZ0",trendingNow:"NmAj2",mainColumnContainer:"l8iwp",newDesktopLayout:"NENaP",emptyView:"sazBU",emptyResultsTag:"PPpCe",timelineMessage:"pf0It",buttonsArea:"emvA3",followArea:"JMBoe",newPostButton:"CCtDO",newPostButtonFlex:"fPkHE",tooltip:"YSVS3"};var J=s(73789),ee=s(22335),et=s(12991),es=s(66449),ea=s(60397);let eo=({dismissTooltip:e,isPinned:t})=>{let{logEvent:s}=(0,A.Us)();return(0,k.useEffect)(()=>{s({eventName:R.R.FollowHubCTAImpression})},[]),/*#__PURE__*/(0,ea.jsx)(ea.Fragment,{children:/*#__PURE__*/(0,ea.jsx)("div",{className:n()(K.tooltip,{[K.pinned]:t}),onClick:()=>{e(),s({eventName:R.R.FollowHubCTAClickDismiss})},children:/*#__PURE__*/(0,ea.jsx)(w.Ay,{comment:"Tooltip suggesting the user to follow a tag to keep up with posts",children:"Like what you see? Follow the tag to see updates on your dashboard"})})})},en=({tag:e,isFollowed:t,isMobile:s,showTooltip:a,pageName:o,newPostLabel:l,routeQueryProps:r,onFollowChange:d,dismissTooltip:c})=>/*#__PURE__*/(0,ea.jsxs)("div",{className:K.buttonsArea,children:[/*#__PURE__*/(0,ea.jsxs)("div",{className:K.followArea,children:[/*#__PURE__*/(0,ea.jsx)(ee.A,{className:s?void 0:K.followButton,isFollowed:t,onFollowChange:d,pageName:o,tag:e}),a&&/*#__PURE__*/(0,ea.jsx)(eo,{dismissTooltip:c,isPinned:!1})]}),/*#__PURE__*/(0,ea.jsx)("button",{className:n()(K.newPostButton,K.newPostButtonFlex),children:/*#__PURE__*/(0,ea.jsx)(i.A,{label:l,routeQueryProps:r})})]});var el=s(56281);let ei=()=>window.scrollY>1e3?"Scrolled":"Unscrolled",er=(e,t,s)=>{let[a,o]=(0,k.useState)(!1),[n,l]=(0,k.useState)(!1),{toggleToast:i}=(0,el.Y)(),{_c:r,logEvent:d}=(0,A.Us)(),c=()=>{o(!1),l(!0)};return(0,k.useEffect)(()=>{let t=()=>{n||e||!(window.scrollY>1e3)||(o(!0),window.removeEventListener("scroll",t))};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[n,e,o,s]),(0,k.useEffect)(()=>{o(!1),l(!1)},[s]),{showTooltip:a,updatedIsFollowingTag:e=>{t(e),n||l(!0),e?(d({eventName:R.R.HubFollowed,eventDetails:{Tooltip_visible:a,Scroll_state:ei()}}),a&&i(r("Toast indicating that the recent followed tag is now present on Your tags timeline.","Great! Now you can see updates in Your Tags.")),c()):d({eventName:R.R.HubUnfollowed})},dismissTooltip:c}};var ed=s(72591),ec=s(99805);let em=()=>{let{isMobile:e}=(0,N.Ri)(),{ref:t,inView:s}=(0,ed.Wx)({skip:!e,rootMargin:`-${ec.mobileHeaderHeight+1}px 0px 0px 0px`,threshold:1,initialInView:!0});return{isPinned:!s,summaryInfoCallBackRef:t}},eu=()=>{let{_c:e,_t:t}=(0,A.Us)(),{isMobile:s}=(0,N.Ri)(),{decodedTag:a,setSummaryHeight:o,header:l}=U(),{followersCount:i,isFollowed:r,showFollowersCount:d,newPostsCount:c,showNewPostsCount:m,isTrending:u,showEditorialDescription:g,editorialDescription:p,tagV2:h}=l||{},[b,x]=(0,k.useState)(r||!1),{isPinned:f,summaryInfoCallBackRef:j}=em(),{showTooltip:y,updatedIsFollowingTag:v,dismissTooltip:C}=er(b,x,a);(0,k.useEffect)(()=>{x(!!r)},[a,r]);let T=/*#__PURE__*/(0,ea.jsx)(ea.Fragment,{children:e("Communicating that a particular tag is trending right now","Trending now")});return h?.style?.colors&&(T=/*#__PURE__*/(0,ea.jsx)(et.y,{colors:h.style.colors,iconKey:h.style.iconKey,label:T})),/*#__PURE__*/(0,ea.jsx)("div",{className:n()(K.summaryInfo,K.sticky),ref:e=>{o?.(e?.clientHeight||0),j(e)},children:/*#__PURE__*/(0,ea.jsxs)("div",{className:n()(K.summaryInfoContent,{[K.pinned]:f}),children:[/*#__PURE__*/(0,ea.jsxs)("div",{className:K.titleTagContainer,children:[u&&/*#__PURE__*/(0,ea.jsx)("div",{className:K.trendingNow,children:T}),/*#__PURE__*/(0,ea.jsx)("h1",{children:/*#__PURE__*/(0,ea.jsx)(es.A,{className:n()(K.titleTag,{[K.pinned]:f}),tagName:a})})]}),f?/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[/*#__PURE__*/(0,ea.jsx)(ee.A,{className:K.pinnedFollowButton,isFollowed:b,onFollowChange:v,pageName:"tagged",tag:a}),y&&/*#__PURE__*/(0,ea.jsx)(eo,{dismissTooltip:C,isPinned:f})]}):/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[g&&!s&&/*#__PURE__*/(0,ea.jsx)(J.A,{expandButtonClassName:K.expandDescription,maxHeight:90,children:/*#__PURE__*/(0,ea.jsx)("div",{className:K.subtitleTag,dangerouslySetInnerHTML:{__html:p}})}),/*#__PURE__*/(0,ea.jsxs)("div",{className:K.totals,children:[!!d&&!!i&&/*#__PURE__*/(0,ea.jsx)("div",{children:/*#__PURE__*/(0,ea.jsx)(w.Ay,{comment:"The number of followers of a given subject. Placeholder is the count of followers",components:{b:/*#__PURE__*/(0,ea.jsx)("b",{})},params:{numFollowers:i},children:"[b][numFollowers][/b] followers"})}),!!m&&!!c&&/*#__PURE__*/(0,ea.jsx)("div",{children:/*#__PURE__*/(0,ea.jsxs)(w.P0,{comment:"The number of posts this topic has had recently. Placeholder is the count of posts",components:{b:/*#__PURE__*/(0,ea.jsx)("b",{})},exemptNumberKeyFromParamCheck:!0,number:"1"===c?1:2,params:{newPostsCount:c},children:[/*#__PURE__*/(0,ea.jsx)(w.M$,{children:"[newPostsCount] recent post"}),/*#__PURE__*/(0,ea.jsx)(w.$e,{children:"[b][newPostsCount][/b] recent posts"})]})})]}),/*#__PURE__*/(0,ea.jsx)(en,{dismissTooltip:C,isFollowed:b||!1,isMobile:s,newPostLabel:t("New post"),onFollowChange:v,pageName:"tagged",routeQueryProps:{tags:a,isHubPage:!0},showTooltip:y,tag:a})]})]})})},eg=({blogName:e,doesTimelineHavePosts:t})=>{let{_c:s}=(0,A.Us)(),{decodedTag:a,header:o}=U(),{data:n=[]}=P(a),{headerImage:l,headerImageWidth:i,headerImageHeight:r,showEditorialDescription:d,editorialDescriptionText:c,followersCount:m,allowIndex:g}=o||{},p=s("The page title for a tag page","%1$s on Tumblr",[a]),h=e?s("Meta description for tagged page. The first variable is a user name and the second variable is the tag name.","See a recent post on Tumblr from @%1$s about %2$s.",[e,a]):null,b=n.length>0?s("Meta description for tagged page. The first variable is a list of related tags. The second variable is the tag name.","Discover more posts about %1$s, and %2$s.",[n.join(", "),a]):s("Meta description for tagged page. The variable is the tag name.","Discover more posts about %1$s.",[a]),x=[a,...n],{pathname:f}=(0,I.zy)(),j={title:p,keywords:x,decodedTag:`page:${q.Ij.analyticsPageName}, ${a}`,imageUrl:l,pageName:q.Ij.analyticsPageName,canonicalUrl:f,description:d?c:`${h?`${h} `:""}${b}`,...t&&"0"!==m&&g?{bingbot:"nocache"}:{robots:"noindex"}};return l&&r&&i&&(j.openGraph={image:{url:l,width:i,height:r}}),/*#__PURE__*/(0,ea.jsx)(u.A,{...j})},ep=({sidebarTimelineObject:e,isLoaded:t})=>/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[/*#__PURE__*/(0,ea.jsx)(eh,{}),t?e&&/*#__PURE__*/(0,ea.jsx)(f.A,{displayMode:E.X2.Masonry,timelineObject:e},e?.id):/*#__PURE__*/(0,ea.jsx)("div",{className:K.loader,children:/*#__PURE__*/(0,ea.jsx)(m.A,{centerOrientation:"horizontal"})})]}),eh=()=>{let{_c:e}=(0,A.Us)(),{decodedTag:t,header:s}=U(),{headerImage:a,backgroundColor:o,postId:n,blogName:l}=s||{};return/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[/*#__PURE__*/(0,ea.jsxs)("div",{className:K.headerImageContainer,style:{background:o},children:[!!a&&!!l&&/*#__PURE__*/(0,ea.jsx)(r.A,{"aria-label":e("Link to a blog (1st placeholder is blogName) that has posts with the given tag (2nd placeholder is tag)","%1$s has #%2$s posts",[l,t]),blogName:l,postId:n,showBlogCard:!1,children:/*#__PURE__*/(0,ea.jsx)("div",{className:K.bannerImage,style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url("${a}")`}})}),/*#__PURE__*/(0,ea.jsx)("div",{className:K.headerOverlay,children:/*#__PURE__*/(0,ea.jsx)(eb,{})})]}),/*#__PURE__*/(0,ea.jsx)(eu,{}),/*#__PURE__*/(0,ea.jsx)("div",{className:K.pillTagsWrapper,children:/*#__PURE__*/(0,ea.jsx)(ex,{})})]})},eb=()=>{let{header:e}=U(),{postId:t,blogName:s,blogAvatarUrl:a}=e||{};return s&&a&&t?/*#__PURE__*/(0,ea.jsx)(c.A,{avatarUrl:a,blogName:s,conciseAttribution:!0,postId:t}):null},ex=()=>{let{decodedTag:e}=U(),{data:t=[]}=P(e);return/*#__PURE__*/(0,ea.jsx)(p.A,{tags:t})},ef=()=>{let{_c:e,_t:t,isLoggedIn:s}=(0,A.Us)(),{isMobile:a}=(0,N.Ri)(),{decodedTag:o,sort:n,state:{emptyResultsTextSeed:l}}=U(),{pathname:r}=(0,I.zy)(),{tag:d}=(0,I.g)();return/*#__PURE__*/(0,ea.jsx)("div",{className:K.emptyView,children:"top"===n&&l?(0,H.q)((0,$.fd)(e),l):/*#__PURE__*/(0,ea.jsx)(w.Ay,{comment:"Text that's displayed when there are no results for a given tag.",components:{tagRender:/*#__PURE__*/(0,ea.jsx)("span",{className:K.emptyResultsTag}),createPostLink:s?a?/*#__PURE__*/(0,ea.jsx)(_.N_,{to:(0,C.P1)({postType:"text"},{tags:d})}):/*#__PURE__*/(0,ea.jsx)(i.A,{className:K.newPostButton,label:t("Make a new post"),routeQueryProps:{tags:d}}):/*#__PURE__*/(0,ea.jsx)(_.N_,{to:(0,C.rn)({formToShow:O.t.Login},{redirect_to:r})})},params:{tag:o},children:"No recent posts tagged with [tagRender]#[tag]?[/tagRender] You should go ahead and [createPostLink]make one[/createPostLink]."})})},ej=({activeOption:e,additionalStickyTopMargin:t=0,onViewClick:s,timelineModule:a})=>{let{_c:o,_t:l,features:{redpopDesktopVerticalNav:i},getBrowserInfo:r,logEvent:d}=(0,A.Us)(),{isMobile:c}=(0,N.Ri)(),{state:{displayMode:u}}=U(),{search:g}=(0,I.zy)(),p=(0,I.Zp)(),{tag:h=""}=(0,I.g)(),{isViewportMounted:f}=(0,v.tS)(),w=(0,k.useRef)(null),{moduleKey:y}=a.module.useData(),T=(0,Q.ty)(y),P=(0,k.useMemo)(()=>/*#__PURE__*/(0,ea.jsx)(G.A,{timelineObjects:T}),[T]),M=(0,k.useMemo)(()=>/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[/*#__PURE__*/(0,ea.jsx)(ef,{}),T.length?P:null]}),[T.length,P]),_=e=>{let t=(0,V.J)(g);f&&e!==t.sort&&p((0,C.gn)(h,{...t,sort:e}))},F=c||u===E.X2.List;return f||r().isCrawler?/*#__PURE__*/(0,ea.jsxs)("main",{className:n()(K.mainColumnContainer,F?K.postColumn:K.postMasonry,{[K.newDesktopLayout]:i}),children:[/*#__PURE__*/(0,ea.jsx)(b.y,{additionalOffset:c?0-t:void 0,isMasonryView:!F,ref:w,children:/*#__PURE__*/(0,ea.jsx)(x.A,{activeOption:e,currentView:u,getButtonProps:e=>({label:"recent"===e?l("Latest"):o('As in "most popular"',"Top"),onClick:()=>{d({eventName:R.R.TimelineOptionChange,eventDetails:{option:e}}),_(e)}}),isScrollingHeader:!0,onViewClick:s,timelineOptions:["recent","top"],viewsShown:[E.X2.Masonry,E.X2.List]})}),e?/*#__PURE__*/(0,ea.jsx)(j.A,{displayMode:c?E.X2.List:u,doesNotRemoveUnfollowedObjects:!0,emptyView:M,endOfTimelineView:P,masonryRendersWithSidebar:!0,maximumNumberOfColumns:q.HX,timelineModule:a}):/*#__PURE__*/(0,ea.jsx)("div",{className:n()(K.loader,K.main),children:/*#__PURE__*/(0,ea.jsx)(m.A,{centerOrientation:"horizontal"})})]}):/*#__PURE__*/(0,ea.jsx)("div",{className:n()(K.loader,K.main),children:/*#__PURE__*/(0,ea.jsx)(m.A,{centerOrientation:"horizontal"})})},ew="hubs-header-data",ey=()=>{let{apiFetch:e,isLoggedIn:t,features:{hubsRightRailAds:s},getBootstrap:o,getCookie:n,getBrowserInfo:i,setCookie:r}=(0,A.Us)(),{isMobile:c}=(0,N.Ri)(),[m]=(0,_.ok)(),{pathname:u,search:p}=(0,I.zy)(),b=(0,a.jE)(),{tag:x=""}=(0,I.g)(),[f,j]=(0,X.Q)([ew,x],{header:null}),{header:w}=f,v=n(S.Z_.TAGGED_DISPLAY_MODE)||E.X2.Masonry,T=o(q.Ou,{sidebarRef:null,emptyResultsTextSeed:"420",displayMode:v===E.X2.List?E.X2.List:i().isCrawler?E.X2.List:E.X2.Masonry}),[P,M]=(0,k.useState)(T),[O,R]=(0,k.useState)(0),{displayMode:U,shouldRedirectToSearch:H}=P,$=void 0!==H,V=(0,q.XB)(p)??(w?(0,q.sM)(w):$?"top":void 0),G=(0,L.w)(m.get("src")||void 0),Q=(0,k.useCallback)(e=>{M(t=>({...t,...(0,q.zD)(e)}))},[]),W=(0,k.useMemo)(()=>Z({sort:V,querySource:G,tag:x,onInitialResponseError:Q,queryClient:b}),[V,G,b,x,Q]),{fetchStatus:K,pages:J}=W.module.useData(),ee=["fetchingPrevious","fetchingNext","loaded"].includes(K),et=(0,k.useMemo)(()=>J.flatMap(e=>e.items),[J]),es=(0,k.useMemo)(()=>et.filter(E.cH)[0],[et]),eo=et[0]?.blogName,en=(0,k.useMemo)(()=>z(et),[et]);(0,k.useEffect)(()=>{let t;if(!w&&!H&&x)return(t=(0,Y.A)((0,q.kG)(e,{params:{tag:x}}))).then(e=>{let{shouldRedirectToSearch:t,emptyResultsTextSeed:s,header:a}=e;a&&j({header:a}),M(e=>({...e,shouldRedirectToSearch:t,emptyResultsTextSeed:s}))}),()=>{t.cancel()}},[e,x,w,u,j,H]);let el=(0,k.useCallback)(e=>{M(t=>({...t,displayMode:e})),r(S.Z_.TAGGED_DISPLAY_MODE,e)},[r]);return H?/*#__PURE__*/(0,ea.jsx)(I.C5,{replace:!0,to:(0,C.Tv)(x||"")}):x?/*#__PURE__*/(0,ea.jsxs)(ea.Fragment,{children:[/*#__PURE__*/(0,ea.jsx)(g.Ay,{page:V?`${q.Ij.analyticsPageName}Tab`:q.Ij.analyticsPageName,...V&&{eventDetails:{tab:V}}},V),/*#__PURE__*/(0,ea.jsx)(d.A,{activePage:F.Qi.hubs(x),mainContentIsMasonry:U===E.X2.Masonry&&!c,maxMasonryColumns:q.HX,children:/*#__PURE__*/(0,ea.jsxs)(B.Provider,{value:{decodedTag:x,header:w,sort:V,state:P,setState:M,setSummaryHeight:R},children:[/*#__PURE__*/(0,ea.jsx)(eg,{blogName:eo,doesTimelineHavePosts:en}),c&&/*#__PURE__*/(0,ea.jsx)(eh,{}),/*#__PURE__*/(0,ea.jsx)(y.A,{mainContentIsMasonry:U===E.X2.Masonry&&!c,maxMasonryColumns:q.HX,sidebar:/*#__PURE__*/(0,ea.jsx)(h.A,{additionalStickyTopMargin:O,showAd:s,supplyProviderId:D._.COMMUNITY_HUB,children:/*#__PURE__*/(0,ea.jsx)(ep,{isLoaded:ee,sidebarTimelineObject:es})}),children:/*#__PURE__*/(0,ea.jsx)(ej,{activeOption:V,additionalStickyTopMargin:O,onViewClick:el,timelineModule:W})}),!t&&/*#__PURE__*/(0,ea.jsx)(l.A,{avoidSidebar:!1,fullWidth:!0,source:"hubs_floating_sign_up",withLoginButton:!0})]})})]}):/*#__PURE__*/(0,ea.jsx)(I.C5,{replace:!0,to:C.ry.explore})}}}]);