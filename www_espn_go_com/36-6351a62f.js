(self.webpackChunkfitt=self.webpackChunkfitt||[]).push([[36],{845070:(e,t,n)=>{var r=n(785893),a=n(667294).Fragment,s=n(45697),l=n(973327),i=n(769999),o=n(334999),d="363",p=r.jsx(l,{type:"banner"});function c(e){var t=e&&e.mainContent,n=e&&e.leftAside,s=e&&e.rightAside,l=e&&e.type,c=o(e&&e.windowWidth,e&&e.winSize);return l&&3!==l.length&&(l=d),r.jsxs(a,{children:[p,r.jsx(i,{leftAside:n,main:t,rightAside:s,type:l,windowWidth:c})]})}c.propTypes={leftAside:s.node,mainContent:s.node,rightAside:s.node,windowWidth:s.number,winSize:s.shape({h:s.number,w:s.number})},c.defaultProps={type:d},e.exports=c},692305:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(294184),l=n(775143),i=n(375329),o=i.Card,d=i.Card__Header,p=i.Card__Content,c=n(880733),u=n(450239),g=n(435161),m=n(834248).PropTypes,h=n(822154).THEMES.DARK,y="sts",f="rela",b=u.forEach;function x(e,t){var n=s("Bio",e.className),a=null,l=null,i=t&&t.translate||u.passThru,c=null,g=null;return e&&(a=e.id,c=e.moduleTitle||"player.bio.biography.moduleTitle",l=e.data,g=e.meta),l&&g?r.jsxs(o,{id:a,className:n,children:[r.jsx(d,{title:i(c)}),r.jsx(p,{children:r.jsx(T,{data:l,meta:g})})]}):null}function T(e,t){var n=null,a=null,i=t&&t.translate||u.passThru,o=(t&&t.theme)===h,d="Bio__Item n8 mb4",p=s("Bio__Label ttu mr2 dib",{"clr-gray-04":!o,"clr-boulder":o}),m=s("dib flex-uniform mr3",{"clr-gray-01":!o,"clr-white":o}),x=null;return e&&(a=e.data,x=e.meta),x&&a&&(n=g(x,(function(e,t){var n,s,u,g,h,x,T,w,j;if(e)return n=e.key,u=e.lbl&&i(e.lbl),s=n&&a[n],g=e.lnkKey&&a[e.lnkKey],T=e.id&&a[e.id],h=e&&e.lnkAttr,u&&s?(w=n===y?r.jsx(c,{status:s,statusID:T,plain:!0}):s,n===f?(j=[],b(w,(function(e,t){let n=e&&e.rn,a=e&&e.nm,s=e&&e.uid,i=e&&e.lnk,o=(0===t?"":", ")+n+" - ";i&&(a=r.jsx(l,{"data-player-uid":s,className:"clr-black",to:i,children:a},"rlln"+t)),j.push(o,a)})),r.jsx("div",{className:d,children:r.jsxs("div",{className:"flex",children:[r.jsx("span",{className:p,children:i(u)}),r.jsx("span",{className:m,children:j})]})},t)):(g&&h&&(x={},b(h,(function(e,t){var n=a[e];n&&(x[t]=n)}))),r.jsx("div",{className:d,children:r.jsxs("div",{className:"flex",children:[r.jsx("span",{className:p,children:i(u)}),r.jsx("span",{className:m,children:g?r.jsx(l,{className:o?"clr-white":"clr-black",to:g,...x,children:w}):w})]})},t))):null}))),n}n(32224),x.contextTypes={translate:a.func},T.contextTypes={translate:a.func,theme:a.string},x.propTypes={className:a.string,id:a.string,data:a.object,meta:a.oneOfType([a.arrayOf(a.shape({key:a.string,lbl:a.string})),m.observableArrayOf(a.shape({key:a.string,lbl:a.string}))]),moduleTitle:a.string},x.defaultProps={moduleTitle:""},e.exports=x},195383:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(294184),i=n(375329),o=i.Card,d=i.Card__Header,p=i.Card__Content,c=n(616134),u=(n(775143),n(450239)),g=n(435161),m=n(822154).THEMES.DARK,h=n(662128).getAwardImage;function y(e,t){var n=l("Career__Highlights",e.className),a=null,s=null,i=t&&t.translate||u.passThru,c=null;return e&&(a=e.id,c=e.moduleTitle||"player.bio.careerHighlights.moduleTitle",s=e.data),s&&s.length?r.jsxs(o,{id:a,className:n,children:[r.jsx(d,{title:i(c)}),r.jsx(p,{className:"Career__Highlights__Content",children:r.jsx(f,{data:s})})]}):null}function f(e,t){var n=null,a=null,s=(t&&t.theme)===m;return e&&(a=e.data),a&&(n=g(a,(function(e,t){var n,a,l,i,o,d,p=null,u=null;if(e)return l=e.nm,i=e.tms,d=e.yrs,a=h(e.lgid),d&&d.length&&(o=d.join(", ")),i&&(u=r.jsx("span",{className:"h8 mr2 fw-bold",children:i})),a&&(p=r.jsx("span",{className:"mr2",children:r.jsx(c,{size:"sm",src:a,name:l})})),n=r.jsxs("div",{className:"Career__Highlights__Item__Content",children:[r.jsxs("div",{className:s?"clr-white":"clr-black",children:[u,r.jsx("span",{children:l})]}),r.jsx("div",{className:"n10 "+(s?"clr-gray-04":"clr-gray-05"),children:o})]}),r.jsxs("div",{className:"Career__Highlights__Item n8 mb4 flex align-center",children:[p,n]},t)}))),n}n(54587),y.contextTypes={translate:a.func},y.propTypes={id:a.string,data:a.oneOfType([a.arrayOf(a.shape({nm:a.string,tms:a.string,lgid:a.string,yrs:a.oneOfType([a.array,s.observableArray])})),s.observableArray]),moduleTitle:a.string},y.defaultProps={moduleTitle:""},f.contextTypes={theme:a.string},e.exports=y},923157:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(294184),i=n(375329),o=i.Card,d=i.Card__Header,p=i.Card__Content,c=n(616134),u=n(775143),g=n(822154),m=g.THEMES.DARK,h=n(450239),y=n(435161);function f(e,t){var n=l("Career__History",e.className),a=null,s=null,i=t&&t.translate||h.passThru,c=null;return e&&(a=e.id,c=e.moduleTitle||"player.bio.careerHistory.moduleTitle",s=e.data),s&&s.length?r.jsxs(o,{id:a,className:n,children:[r.jsx(d,{title:i(c)}),r.jsx(p,{className:"Career__History__Content",children:r.jsx(b,{data:s})})]}):null}function b(e,t){var n=null,a=null,s="Career__History__Item n8 mb4 flex align-center",l=t&&t.translate||h.passThru,i=(t&&t.theme)===m;return e&&(a=e.data),a&&(n=y(a,(function(e,t){var n,a,o,d,p,m,h,y,f=null,b="";if(e)return d=e.logo||g.LOGO_FALLBACK,a=e.nm,o=e.yrs,p=e.href,m=e.uid||null,(h=e.num)&&(b=y=`${h} ${l(h>1?"Seasons":"Season")}`),o&&(b=`${o}${y=y?` (${y})`:""}`),d&&(f=r.jsx("span",{className:"mr2",children:r.jsx(c,{size:"sm",src:d,name:a})})),n=r.jsxs("div",{children:[r.jsx("span",{className:"db n8 "+(i?"clr-white":"clr-black"),children:a}),r.jsx("span",{className:"db n10 "+(i?"clr-gray-04":"clr-gray-05"),children:b})]}),p?r.jsxs(u,{to:p,classes:s,"data-clubhouse-uid":m,children:[f,n]},t):r.jsxs("div",{className:s,children:[f,n]},t)}))),n}n(598374),f.contextTypes={translate:a.func},b.contextTypes={translate:a.func,theme:a.string},f.propTypes={id:a.string,data:a.oneOfType([a.arrayOf(a.shape({href:a.string,logo:a.string,nm:a.string,yrs:a.string})),s.observableArrayOf(a.shape({href:a.string,logo:a.string,nm:a.string,yrs:a.string}))]),moduleTitle:a.string},f.defaultProps={moduleTitle:"",data:[]},e.exports=f},662128:(e,t,n)=>{var r=n(822154).CDN_HOST,a=r+"/i/siteassets/player/player-award@2x.png",s={"college-football-2":"Chuck-Bednarik-Award.png","college-football-3":"Davey-OBrien-Award.png","college-football-4":"Butkus-Award.png","college-football-5":"Doak-Walker-Award.png","college-football-6":"Fred-Biletnikoff-Award.png","college-football-9":"Heisman-Memorial-Trophy.png","college-football-10":"Jim-Thorpe-Award.png","college-football-11":"John-Mackey-Award.png","college-football-12":"Johnny-Unitas-Golden-Arm-Award.png","college-football-13":"Lou-Groza-Award.png","college-football-14":"Maxwell-Award.png","college-football-15":"Bronko-Nagurski-Award.png","college-football-17":"Outland-Trophy.png","college-football-18":"Ray-Guy-Award.png","college-football-19":"Lombardi-Award-2.png","college-football-20":"Walter-Camp-Award.png","college-football-25":"Ted-Hendricks-Award.png","college-football-26":"Rimington-Trophy.png","college-football-27":"Home-Depot-Award.png","college-football-28":"Campbell-Trophy.png","college-football-29":"Frank-Broyles-Award.png","college-football-30":"Lott-Trophy.png","college-football-31":"Paul-Hornung-Award.png","college-football-32":"Disney-Spirit-Award.png","college-football-158":"Wuerffel-Trophy.png","nba-33":"NBA-MVP.png","nba-35":"NBA-ROY-Award.png","nba-36":"Most-Improved-Player-Award.png","nba-40":"Sixth-Man-Award.png","nba-43":"NBA-Finals-MVP.png","nba-53":"NBA-All-Star-MVP.png"};e.exports={images:s,getAwardImage:function(e){var t=e&&s[e];return e&&t?r+"/i/player_header/"+t:a}}},901430:(e,t,n)=>{e.exports=n(1112)},642827:(e,t,n)=>{var r=n(667294),a=n(294184),s=n(45697),l=n(822154),i=n(450239),o=l.THEMES.DARK,d="headline",p="data-resource-id";function c(e,t){var n=t&&t.theme,s=d,l=e&&e.type,c=e&&e.className,u=e&&e.id,g=e&&e[p],m=e&&e.sub,h=e&&e.title,y=n===o;return l?s=i.cstr([s,"__",l]):(l="div",s=a({headline:!m&&!h,headline__sub:m,"headline__sub--sm":m&&e.sm,headline__title:h,"headline__title--sm":h&&e.sm})),s=a(d,s,{"headline--dark":y},c),r.createElement(l,{className:s,id:u,[p]:g},e&&e.children)}n(315237),c.contextTypes={theme:s.string},e.exports=c},989807:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(957043),i=n(390472).ContentItem,o=n(375329),d=o.Card,p=o.Card__Header,c=o.Card__Content,u=n(976959),g=n(855687),m=[{},{}];function h(e,t){var n,a,s,o,h,y,f=e&&e.items,b=e&&e.meta,x=e&&e.teamColor,T=e&&e.windowWidth,w=e&&e.components,j=t&&t.translate||(e=>e),v=j("Latest News"),k=b&&(b.lnk||""),_=j("See All"),A=`${_} - ${v}`,C=f&&f.length;return 1===C?(a=(n=C&&f[0])&&n.headline,s=n&&n.description,o=n&&n.image,h=n&&n.link,y=[{sources:{x1:o&&o.url}}],r.jsxs(d,{children:[r.jsx(p,{title:v,subLinkTxt:_,subLink:k,subLinkTtl:A}),r.jsx(c,{children:r.jsx(i,{noBorder:!0,children:r.jsx(u,{headline:a,description:s,img:y,href:h,windowWidth:T})})})]})):(2===C?f=l(C&&f.slice(),m):3===C&&(f=l(C&&f.slice(),{})),r.jsx(g,{items:f,windowWidth:T,meta:b,teamColor:x,linkTitle:A,components:w}))}h.contextTypes={translate:a.func},h.propTypes={components:a.shape({VideoPlayer:a.elementType}),windowWidth:a.number,items:a.oneOfType([s.observableArray,a.array]),meta:a.shape({lnk:a.string})},h.defaultProps={items:[],meta:{}},e.exports=h},855687:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(294184),i=n(435161),o=n(512571),d=n(506537),p=n(595688),c=n(500250),u=n(390472).ContentItem,g=n(375329),m=g.Card,h=g.Card__Header,y=g.Card__Content,f=d.TABLET[0],b=d.DESKTOP[0],x=n(165045);function T(e,t){var n,a=e&&e.items,s=e&&e.meta,d=e&&e.teamColor,g=e&&e.components,T=e&&e.heading||"Racing Positions",w=e&&e.id||"racing-position-carousel",j=t&&t.translate||(e=>e),v=j("Latest News"),k=s&&(s.lnk||""),_=j("See All"),A=e&&e.linkTitle,C=e&&e.windowWidth,N=C<=f,S=l("LatestNews",{"bp-desktop":C>=b,"bp-tablet":C>f&&C<b,"bp-mobile":N});return a.length>10&&(a=o(a,0,10)),n=i(a,(function(e,t){var n=e&&e.id||t;return r.jsx(c,{children:r.jsx(x,{item:e,teamColor:d,windowWidth:C,components:g,miniCard:!0})},n)})),r.jsxs(m,{className:S,children:[r.jsx(h,{titleType:"div",title:v,subLinkTxt:_,subLink:k,className:"bn",subLinkTtl:A}),r.jsx(y,{className:"pt0 pl0 pr0 pb0 overflow-hidden",children:r.jsx(u,{noBorder:!0,collectionItem:!0,children:r.jsx(p,{className:"MiniCard__Carousel pb4",classNameChild:"ph4 pv1",gutter:10,heading:T,id:w,controls:!N,windowWidth:C,gestures:!0,children:n})})})]})}n(309383),T.contextTypes={translate:a.func},T.propTypes={components:a.shape({VideoPlayer:a.elementType}),windowWidth:a.number,items:a.oneOfType([s.observableArray,a.array]),meta:a.shape({lnk:a.string}),linkTitle:a.string},T.defaultProps={items:[],meta:{}},e.exports=T},567187:(e,t,n)=>{e.exports=n(413661)},957854:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(661767);function i(e){var t=e&&e.data,n=t&&t.articles,a=e&&e.showNoAvailableNews,s=t&&t.className,i=t&&t.link,o=t&&t.text,d=t&&t.header,p=t&&t.id,c=null;return(a||n&&n.length)&&(c=r.jsx(l,{articles:n,className:s,footerLink:i,footerText:o,header:d,id:p})),c}i.propTypes={data:a.shape({articles:a.oneOfType([a.array,s.observableArray]),className:a.string,footerLink:a.string,footerText:a.string,header:a.string,id:a.string})},e.exports=i},836683:(e,t,n)=>{var r=n(785893),a=n(667294).Fragment,s=n(45697),l=n(752060),i=n(834248).PropTypes;function o(e){var t=e&&e.Jersey,n=e&&e.player,s=e&&e.pageType,i=e&&e.flags,o=n&&n.qcklnks,d=e&&e.components&&e.components.PlayerSwitcher,p=n&&n.plyrSwtch,c=e&&e.siteSection;return r.jsxs(a,{children:[d&&p&&r.jsx(d,{data:p,Jersey:t,pageType:s,flags:i,siteSection:c}),o&&o.length&&r.jsx(l,{quickLinks:o,pageType:s})]})}o.propTypes={children:s.node,components:s.shape({PlayerSwitcher:s.func}),flags:s.object,Jersey:s.oneOfType([s.func,s.element]),pageType:s.string,player:s.shape({qcklnks:s.oneOfType([i.observableArray,s.array]),plyrSwtch:s.shape({tms:s.oneOfType([s.array,i.observableArray]),pos:s.oneOfType([s.array,i.observableArray]),cur:s.object,lst:s.oneOfType([s.array,i.observableArray]),lnk:s.string,sel:s.object})})},e.exports=o},327420:(e,t,n)=>{var r=n(785893),a=n(667294).Fragment,s=n(45697),l=n(834248).PropTypes,i=n(945530),o=n(163964),d=n(957854),p=n(973327),c=r.jsx(p,{type:"incontent"}),u=r.jsx(p,{type:"incontentstrip"});function g(e,t){var n=e&&e.children,s=e&&e.components,l=e&&e.league,p=e&&e.pageType,g=e&&e.sport,m=e&&e.player,h=m&&m.stndngs,y=m&&m.tix,f=m&&m.medialst,b=m&&m.nwslst,x=s&&s.Tickets,T=m&&m.meta,w=T&&T.medialst,j=T&&T.stndngs,v=T&&T.tix,k=v&&v.isEvnt,_=v&&v.lbl,A=t&&t.isWebview;return r.jsxs(a,{children:[f&&r.jsx(o,{components:s,data:f,metadata:w,moduleFooter:"See All",moduleTitle:"Latest Videos",isWebview:A}),u,c,n,x&&y&&r.jsx(x,{data:y,pageType:p,league:l,sport:g,isEvent:k,searchLabel:_}),h&&r.jsx(i,{data:h,metadata:j}),b&&r.jsx(d,{data:b})]})}g.propTypes={children:s.node,components:s.shape({Tickets:s.func}),league:s.string,sport:s.string,pageType:s.string,player:s.shape({medialst:s.object,nwslst:s.object,meta:s.shape({medialst:s.object,stndngs:s.object}),stndngs:s.oneOfType([l.observableArray,s.array]),tix:s.object})},g.contextTypes={isWebview:s.bool},e.exports=g},300619:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(327420),l=n(494431),i=n(474499);function o(e){var t=e&&e.components,n=e&&e.Jersey,a=e&&e.player,o=t&&t.PlayerSwitcher,d=a&&a.plyrSwtch,p=e&&e.league,c=e&&e.pageType,u=e&&e.flags,g=a&&a.curRnk,m=t&&t.CurrentRankingsWrapper,h=e&&e.sport,y=null,f=e&&e.windowWidth,b=e&&e.shouldDedupe,x=e&&e.clips;return o&&d&&(y=r.jsx(i,{breakpoint:"DESKTOP_LG",windowWidth:f,children:r.jsx(o,{data:d,Jersey:n,flags:u})})),r.jsxs(s,{player:a,components:t,pageType:c,league:p,sport:h,shouldDedupe:b,clips:x,children:[y,r.jsx(l,{breakpoint:"DESKTOP_SM",windowWidth:f,children:g&&m&&r.jsx(m,{data:g})})]})}o.propTypes={components:a.shape({PlayerSwitcher:a.func,CurrentRankingsWrapper:a.func}),flags:a.object,player:a.shape({plyrSwtch:a.object,curRnk:a.object}),Jersey:a.oneOfType([a.func,a.element]),windowWidth:a.number},e.exports=o},853059:(e,t,n)=>{var r=n(785893),a=(n(667294),n(45697)),s=n(834248).PropTypes,l=n(838169),i=n(227361),o=n(150361),d=n(226724).dedupe,p=n(884923),c=n(940805),u=n(537183),g=n(836683),m=n(300619),h=n(845070),y=n(334999),f=n(506537).DESKTOP;function b(e,t,n,r,a){var s=this;return u.fetchNews(e,t,a,n,r).then((function(e){var t=e&&e.data;return s.parser.parseNewsFeed(t)})).then((function(e){return e&&e.feed&&e.feed.feed})).catch((function(e){return Promise.reject(e)}))}function x(e){var t=e&&e.player,n=e&&e.windowWidth,a=t&&t.nwsFd,s=t&&t.guid,u=a&&a.country,g=a&&a.feed,m=a&&a.language,h=a&&a.section,y=a&&a.params,f=e&&e.components,x={VideoPlayer:f&&f.VideoPlayer},T=e&&e.state,w=T&&T.app,j=new c(null,null,T),v=l(b,{parser:j},{country:u,language:m,section:h},y,s,w),k=e&&e.shouldDedupe,_=i(t,"medialst.vids",[]),A=g&&g.feed,C=k?d(A,_):A,N=o(g);return g?(N.feed=C,r.jsx(p,{content:N,country:u,customParser:v,language:m,params:y,windowWidth:n,components:x,truncateTitle:!1})):null}function T(e){var t=e&&e.components,n=e&&e.player,a=y(e&&e.windowWidth,e&&e.winSize),s=e&&e.Jersey,l=e&&e.flags,i=e&&e.state,o=r.jsx(g,{player:n,Jersey:s,components:t,flags:l}),d=a>=f,p=r.jsx(x,{windowWidth:a,player:n,shouldDedupe:d,state:i,components:t}),c=r.jsx(m,{components:t,player:n,Jersey:s,windowWidth:a,flags:l});return r.jsx(h,{leftAside:o,mainContent:p,rightAside:c,type:"273",windowWidth:a})}T.propTypes={components:a.object,flags:a.object,Jersey:a.oneOfType([a.func,a.element]),player:a.shape({nwsFd:a.oneOfType([a.object,s.observableObject])}),windowWidth:a.number,winSize:a.shape({h:a.number,w:a.number})},e.exports=T},226724:(e,t,n)=>{var r=n(957043),a=n(643063),s=n(354061),l=n(227361),i=n(435161),o=n(450239),d=n(864249),p=o.forEach,c=o.mix,u=o.passThru;function g(e,t){var n=t&&t.id;return n&&(e[n]=!0),e}e.exports={dedupe:function(e,t){return function(e,t){return t?a(e,(function(e){var n=e&&e.id;return!!n&&t[n]})):e}(e,s(t,g,{}))},leagueChangeHandler:function(e,t,n){var a,s,l,i=n&&n.baseUrl,o=n&&n.routing;return"type"===e&&t&&i&&o?(a=r(i,["type/:type"]),s=new d(a),l=c({},[o,{type:t}],{noRecurse:!0}),s.toString(l)):null},filterNotesData:function(e,t,n){var r=[];return n=n||u,p(t,(function(t){var a=t&&t.path,s=t&&t.alwaysShow||l(e,a),i=t&&t.ttl;s&&r.push({headline:i&&n(i),description:t&&n(t.txt)})})),r},getColGroups:function(e){return i(e,"count")}}},981056:(e,t,n)=>{var r=n(822154),a=n(227361),s=n(450239),l=n(997471).playerAndGpp.formatSubpageLink,i=r.PLAYER_SUBPAGE_TYPES;function o(e){return l(e,i.SPLITS)}function d(e){return l(e,i.NEWS)}function p(e){return l(e,i.GAME_LOG)}function c(e){return l(e,i.STATS)}function u(e){return l(e,i.RESULTS)}e.exports={baseConfig:function(e,t){var n=a(e,"response.nxtGm.hasSplts"),r=a(e,"params.rawPageType"),l=d(e);return t=t||{},n&&t.nxtGm?t.nxtGm.lnk=o(e):t.nxtGm=s.omit(t.nxtGm,["lnk"]),t.gmlog&&(t.gmlog.lnk=p(e)),r!==i.NEWS&&t.medialst?t.medialst.lnk=l:t.medialst=s.omit(t.medialst,["lnk"]),t.nws&&(t.nws.lnk=l),t.stats&&(t.stats.lnk=c(e)),t.results&&(t.results.lnk=u(e)),t},getBioLink:function(e){return l(e,i.BIO)},getGameLogLink:p,getHistoryLink:function(e){return l(e,i.FIGHT_HISTORY)},getMatchesLink:function(e){return l(e,i.MATCHES)},getNewsLink:d,getRaceResultsLink:function(e){return l(e,i.RACE_RESULTS)},getResultsLink:u,getSplitsLink:o,getStatsLink:c}},32224:(e,t,n)=>{"use strict";n.r(t)},54587:(e,t,n)=>{"use strict";n.r(t)},598374:(e,t,n)=>{"use strict";n.r(t)},315237:(e,t,n)=>{"use strict";n.r(t)},309383:(e,t,n)=>{"use strict";n.r(t)}}]);