(self.webpackChunkfitt=self.webpackChunkfitt||[]).push([[2168],{542858:(e,t,i)=>{var n=i(785893),a=i(450239),s=i(227361),r=i(667294).Fragment,o=i(45697),l=i(973327),d=i(902209),c=i(769999),u=i(334999),p=n.jsx(d,{type:"native-betting",include:["s"]}),h=n.jsx(l,{type:"banner"}),m=a.emptyObj;function g(e){var t=e&&e.aside,i=e&&e.className,a=e&&e.variation,o=function(e){var t=e||m,i=t.mainContent,a=t.extraContent,o=s(t,"components.SponsoredLinks"),l=t.page||m,d=s(l,"meta.canonical"),c=s(l,"outbrain.id"),u=l.taboola,h=l.type;return n.jsxs(r,{children:[i,p,a,o&&n.jsx(o,{outbrainId:c,src:d,pageType:h,taboola:u,isHorizontal:!0})]})}(e),l=u(e&&e.windowWidth,e&&e.winSize);return n.jsxs(r,{children:[h,n.jsx(c,{className:i,main:o,rightAside:t,type:"93",variation:a,windowWidth:l})]})}g.propTypes={aside:o.node,className:o.string,components:o.shape({SponsoredLinks:o.elementType}),mainContent:o.node,page:o.shape({meta:o.object,outbrain:o.object,taboola:o.object,type:o.string}),variation:o.string,windowWidth:o.number,winSize:o.shape({h:o.number,w:o.number}),extraContent:o.node},e.exports=g},902209:(e,t,i)=>{var n=i(785893),a=(i(667294),i(903896)),s=i(973327),r=i(149109),o=i(548399).ESPN_ADS_CDN,l=i(933939),d=i(227361);const c=a({displayName:"BettingAdWrapper",render:function(){var e=this&&this.props,t=e&&e.include,i=e?.appConfig,a=d(i,"vary.country"),r=d(i,"featureGating.disableUSBettingAds"),c="us"===a?!r:d(e,"editionConfig.config.betting.incontent"),u=e&&e.type;return c?n.jsx(s,{type:u,include:t,children:n.jsx(l,{src:o+"320x50.png"})}):null}});e.exports=r(c,["edition","app"])},550112:(e,t,i)=>{var n,a=i(785893),s=(i(667294),i(512571)),r=i(91175),o=i(435161),l=i(763105),d=i(294184),c=i(45697),u=i(450239),p=i(903896),h=i(758777),m=i(78493),g=i(375329),f=i(775143),b=g.Card,v=g.Card__Header,_=g.Card__Content,x=g.Card__Footer,y=i(822154).THEMES.DARK,N=u.emptyObj,T=i(618446),S=i(71448).VIDEO_PLAY_LOCATIONS;(n=p({displayName:"MediaList",getInitialState:function(){var e=this.props,t=e&&e.videos,i=t&&r(t);return{customMetaData:i&&i.customMetaData,duration:i&&i.duration,headline:i&&i.headline,id:i&&i.id,imgSrc:i&&i.imgSrc,cerebroId:i&&i.cerebroId,appSrc:i&&i.appSrc,videoSrc:i&&i.videoSrc,source:i&&i.source}},componentDidUpdate(e){var t=this,i=t.props||N;T(e.videos,i.videos)||t.setState(t.getInitialState())},handleClick:function(e,t){var i=this;i&&i.props&&i.props.isWebview||(t.preventDefault(),i.setState({id:e?.id,headline:e?.headline,duration:e?.duration,imgSrc:e?.imgSrc}))},render:function(){var e=this,t=e&&e.props,i=e&&e.state,n=e&&e.context,r=t&&t.components,c=r&&r.VideoPlayer,p=t&&t.className,g=t&&t.highlights,N=t&&t.listings,T=t&&t.footerLink,j=t&&t.videos,w=t&&t.displayCount,L=s(j,0,w),k=t&&t.headline,C=t&&t.footer,E=`${C} - ${k}`,P=n&&n.translate||u.passThru,M=i&&i.customMetaData,I=i&&i.duration,D=i&&i.headline,A=i&&i.id,O=i&&i.imgSrc,W=i&&i.cerebroId,V=i&&i.extUserInit,R=i&&i.appSrc,U=i&&i.videoSrc,$=i&&i.source,H=L&&function(e,t,i,n){if(t&&(i||n)){var a,s,r=!1;e=l(e,(function(e,t){return a=e&&e.id&&i&&e.id===i,s=e&&e.cerebroId&&n&&e.cerebroId===n,!!(r||a||s)&&(r=!0,!0)}))}return o(e,(function(e){return{...e,poster:e&&e.imgSrc}}))}(L,V,A,W),F=a.jsx(f,{to:T,title:E,children:C}),B=n&&n.theme;return p=d("MediaList",{"MediaList--highlights":g,"MediaList--listings":N,"MediaList--dark":B===y},p),"function"!=typeof P&&(P=function(e){return e}),a.jsxs(b,{className:p,children:[a.jsx(v,{title:k}),a.jsxs(_,{className:"pa0",children:[c&&a.jsx(c,{customMetaData:M,duration:I,headline:D,id:A,imgSrc:O,cerebroId:W,extUserInit:V,appSrc:R,videoSrc:U,source:$,videos:H,embed:!0,playerLocation:S.RIGHT_RAIL}),a.jsx(m,{children:a.jsx(h,{data:L,handleClick:this.handleClick,highlights:g,listings:N,curCerebroId:W,curId:A})})]}),T&&C&&a.jsx(x,{children:F})]})}})).propTypes={highlights:c.bool,isWebview:c.bool,listings:c.bool},n.defaultProps={highlights:!1,isWebview:!1,listings:!1},n.contextTypes={theme:c.string},e.exports=n},758777:(e,t,i)=>{var n,a=i(785893),s=(i(667294),i(903896)),r=i(294184),o=i(45697),l=i(514625),d=i(450239),c=d.passThru,u=d.emptyObj,p=i(605902),h=i(435161),m=i(232409).BRIGHTCOVE_EVENTS;i(401764),(n=s({getInitialState:function(){return{isPlaying:!1}},componentDidMount:function(){p.on("espn.video",this.handleVideo)},componentWillUnmount:function(){p.off("espn.video",this.handleVideo)},handleVideo:function(e,t,i){var n={},a=i&&i.id;t===m.ESPN_PLAYING||t===m.ESPN_PLAY||t===m.ESPN_AD_STARTED||t===m.ESPN_VOLUME_CHANGED?n.isPlaying=!0:t===m.ESPN_CONTENT_LOADED&&a?n.currentVideoId=a:t!==m.ESPN_PAUSE&&t!==m.ESPN_CONTENT_ENDED&&t!==m.ESPN_ERROR||(n.isPlaying=!1),this.setState(n)},render:function(){var e,t,i,n=this||u,s=n.props||u,o=n.state||u,d=o.currentVideoId,p=(n.context||u).translate||c,m=s.className,g=s.highlights,f=s.listings,b=s.data||[],v=s.curCerebroId,_=s.curId,x=s.handleClick;return"function"!=typeof p&&(p=c),m=r("MediaList__list",{"MediaList__list--highlights":g,"MediaList__list--listings":f},m),e=b.length&&h(b,(function(e,n){var s,c=e||u,h=c.headline,m=c.duration,b=c.imgSrc,y=c.source,N=c.url,T=c.meta,S=c.highlights,j=c.id,w=c.cerebroId,L={duration:m,headline:h,id:j,imgSrc:b,url:N,cerebroId:w},k="function"==typeof x?x.bind(null,L):null,C="",E="",P="",M=!1;return d?d!==j&&d!==w||(M=!0):M=v&&w?v===w:_===j,i=M&&o.isPlaying?a.jsx("li",{className:"MediaList__item__playing i dib mr1",children:p("Now Playing")}):null,g||S?(C=a.jsx(l,{icon:"controls__play",className:"MediaList__item__icon mr4"}),E=m?a.jsx("li",{className:"MediaList__item__time",children:m}):null,P=T?a.jsx("li",{className:"MediaList__item__tag",children:T}):null):f&&(t=a.jsx("li",{className:"MediaList__item__network",children:y})),s=r("MediaList__item flex items-center pa4 relative",{"MediaList__item--active":M}),a.jsxs("div",{role:"button",onClick:k,className:s,"data-video-id":j,children:[C,a.jsxs("div",{className:"MediaList__item__wrap n8",children:[a.jsx("div",{className:"MediaList__item__description fw-medium pb2",children:h}),a.jsxs("ul",{className:"MediaList__item__meta flex",children:[i,t,E,P]})]})]},n)})),a.jsx("div",{className:m,children:e})},displayName:"MediaListItem"})).contextTypes={translate:o.func},n.propTypes={highlights:o.bool,listings:o.bool,curCerebroId:o.string,data:o.oneOfType([o.array,o.object])},n.defaultProps={highlights:!1,listings:!1,curSrc:"",data:{}},e.exports=n},511584:(e,t,i)=>{var n=i(785893);i(667294);const a=i(45697),s=i(903896),r=i(294184),o=i(775143),l=i(375329),d=i(450239),c=l.Card,u=l.Card__Header,p=l.Card__Content,h=l.Card__Footer;let m;i(830754),m=s({displayName:"TeamStandings",render:function(){var e,t=this,i=t&&t.context,a=i&&i.translate||d.passThru,s=t&&t.props,l=r("TeamStandings",s.className),m=s.standingsData,g=m&&m.displayName,f=m&&m.link,b=m&&m.linkText,v=m&&m.leagueUid,_=s.uiTables,x=null;return g?(v&&f?x=n.jsx(o,{to:f,"data-standings-uid":v,children:a(b)}):f&&(x=n.jsx(o,{to:f,className:"external",children:a(b)})),e=x?null:"pb4",n.jsxs(c,{className:l,children:[n.jsx(u,{className:"Card__Header__Title__Wrapper",title:a(g),noBorder:!0}),n.jsx(p,{className:e,children:_}),x&&n.jsx(h,{noBorder:!0,children:x})||null]})):null}}),m.contextTypes={translate:a.func},e.exports=m},78493:(e,t,i)=>{const n=i(288129);e.exports=n},559136:(e,t,i)=>{var n=i(785893);i(667294);const a=i(45697),s=i(450239),r=i(822154),o=s.forEach,l=s.cstr,d=s.strReplace,c=s.strlc,u=s.idxOf,p=s.passThru,h=i(775143),m=i(125907).Table,g=i(511584),f=i(667789),b=r.THEMES.DARK,v={team:"Team",wins:"stat.wins.abbreviation",losses:"stat.losses.abbreviation"},_=i(435161),x=i(294184);function y(e,t){const i=e&&e.feed,a=e&&e.headers,s=e&&e.teamAbbrev,r=e&&e.teamFeatured,d=t&&t.theme;let c=function(e,t,i,a,s,r){const d=t||[],c=i||[],p={bold:"fw-bold",color:r===b?"clr-white":"clr-gray-01"};let h,g,f,y,S,j,w=[];return o(e||[],((e,t)=>{h=e,g=h.entries,j=h.statMap,y=function(e,t,i){let n,a,s,r,l,d,c=[];return o(e||[],(e=>{e&&(n=e.type||"",a=e.value||"",s=e.key||"",d=v&&v[n],d?c.push(a||i(d)):(r=t[n]||{},l=r[s]||i(e.shortDisplayName)||r.a,c.push(l)))})),c}(d[t],j,s),S=function(e,t,i,a,s,r){const d=s||{},c=t||[],p=i||[],h=d&&d.color;let m,g,f,b,v,y,S,j=[],w=_(e||[],(function(e){return e&&"string"==typeof e?(v=e.split("-").join(" "),N(v)):e}));return o(p,(e=>{m=e.team||null,y=m&&m.abbrev,f=m&&m.id,g=N(m&&m.displayName),b=function(e,t,i){let n,a,s,r=[];return o(t||[],(t=>{t&&(n=t.type||"",a=i[n],s=a&&e[a.i]||"",r.push(s))})),r}(e.stats,c,a),S=x("",{"fw-bold":r===y}),u(w,g)>-1||u(w,f)>-1?(b=function(e,t){const i=t||"";return _(e,(function(e){if(e=l(e))return n.jsx("span",{className:i,children:e})}))}(b,`${S} ${h}`),b&&b.length&&(b[0]=T(m,S,h))):(b=function(e){return _(e,(function(e){if(e=l(e))return n.jsx("span",{children:e})}))}(b),b&&b.length&&(b[0]=T(m))),j.push(b)})),j}(c,d[t],g,j,p,a),f=n.jsx(m,{headings:y,rows:S},t),w.push(f)})),w}(i,a,r,s,t&&t.translate||p,d);return i&&i.length?n.jsx(g,{standingsData:e,uiTables:c}):null}function N(e){return d(c(e),/\'/g,"",!0,!0)}function T(e,t,i){const a=e||{},s=t||"",r=i||"",o=a.uid,l=a.links||"",d=f.getTeamName(a);return d&&l?n.jsx(h,{to:l,classes:s,children:d,"data-clubhouse-uid":o}):n.jsx("span",{className:`${s} ${r}`,children:d})}y.contextTypes={translate:a.func,theme:a.string},e.exports=y},945530:(e,t,i)=>{var n=i(785893),a=i(450239),s=i(435161),r=(i(667294),i(559136)),o=a.NULL;e.exports=function(e){var t,i=e&&e.data,a=e&&e.metadata,l=(a&&a.config||{}).isHeaderStatic,d=a&&a.headers||[],c=d.length;return t=s(i,(function(e,t){var i,a=e&&e.lgUid;return i=l?d:t<c?d[t]:[],n.jsx(r,{displayName:e.dspNm,feed:e.feed,headers:i,link:e.lnk,linkText:e.lnkTxt,leagueUid:a,teamFeatured:e.tmFeat},t)})),i?t:o}},667789:(e,t,i)=>{const n=i(450239).strReplace,a=i(313311),s=[{name:"Los Angeles",abbrev:"LA"},{name:"New York",abbrev:"NY"}];e.exports={getTeamName:function(e){let t=e&&e.location||"",i=e&&e.displayName||"",r=t&&a(s,(e=>e.name===t||e.abbrev===t));return r?n(i,r.name,r.abbrev,!0,!0):t||i||""}}},979515:(e,t,i)=>{var n,a=i(785893),s=(i(667294),i(45697)),r=i(903896),o=i(834248).PropTypes,l=i(720077),d=i(822154).NAV_CONSTANTS,c=i(506537),u=i(354848),p=i(450239),h=i(227361),m=i(500711),g=i(149109),f=p.cprop,b=c.DESKTOP_LABEL,v=c.DESKTOP[0],_={},x={},y={},N=p.emptyObj,T="activePage.device",S="props.locationConfig.params.fantasyGamepackage";n=r({displayName:"SubNavigation",render:function(){var e=this,t=e&&e.props,i=e&&e.state,n=t&&t.activePage,s=n&&n.device,r=n&&n.league,o=n&&n.pageType,d=n&&n.subPageType,c={w:t&&t.windowWidth||0},u=i&&i.links||[];return a.jsx(l,{className:t.className,items:u,device:s,isMobile:s,league:r,pageType:o,subPageType:d,winSize:c})},componentDidUpdate:function(e){var t,i,n,a=this,s=a&&a.props,r=e&&e.windowWidth,o=s&&s.windowWidth,l=e&&e.links,c=s&&s.links;t=l||[],i=c||[],n=`${d.LINKS}.${d.HREF}`,t.length===i.length&&m(t,(function(e,a){var s=`[${a}]${n}`;return h(t,s)===h(i,s)}))?o!==r&&a._recalculateVisible():a._forceUpdateLinks()},getInitialState:function(){var e=this&&this.props;return{links:e&&e.links||[]}},_recalculateVisible:function(){var e=this,t=e&&e.props||N,i=t.links||[],n=h(t,T),a=t.windowWidth,s=h(e,S),r=(n&&!s?n!==b:a<v)?i:function(e,t){var i=u.getVisibleCount(t);return u.groupMoreLinks(e,i)}(i,a);e.setState({links:r})},_forceUpdateLinks:function(){var e=this,t=e&&e.props||N,i=t.links||[],n=h(t,T),a=t.windowWidth,s=h(e,S);(n&&!s?n===b:a>=v)?e.setState({links:i},(function(){e.forceUpdate(),e._recalculateVisible()})):e._recalculateVisible()}}),f(y,d.HREF,s.string.isRequired),f(x,d.TEXT,s.string.isRequired),f(x,d.HREF,s.string.isRequired),f(x,d.WEB,s.shape(y)),f(x,d.M,s.shape(y)),f(_,d.LINK,s.shape(x)),n.propTypes={className:s.string,links:s.oneOfType([s.arrayOf(s.shape(_)),o.observableArrayOf(s.shape(_))]),activePage:s.shape({device:s.string,league:s.string,pageType:s.string,subPageType:s.string}),windowWidth:s.number},e.exports=g(n,"location")},163964:(e,t,i)=>{var n=i(785893),a=i(150361),s=i(441609),r=i(435161),o=(i(667294),i(45697)),l=i(450239),d=i(834248).PropTypes,c=i(550112),u="@",p="vs",h="Videos";function m(e,t){var i,o,d=e&&e.components,m=e&&e.data,g=e&&e.moduleFooter,f=e&&e.metadata,b=f&&f.lnk,v=m&&m.cmpttn,_=m&&m.vids,x=_&&_.length,y=t&&t.translate||l.passThru,N=e&&e.isWebview,T=null;return x>0&&(i=function(e){return!(e&&!s(e))||!e.awy&&!e.hme}(v)?y(e&&e.moduleTitle):function(e,t){var i=e&&e.awy,n=e&&e.hme;return`${i} ${t(e&&e.ntrlSte?p:u)} ${n} ${t(h)}`}(v,y),o=r(_,(function(e){var t=a(e);return t.type="medialist",t})),T=n.jsx(c,{highlights:!0,components:d,displayCount:x,footer:y(g),footerLink:b,headline:i,isWebview:N,videos:o})),T}m.contextTypes={translate:o.func},m.propTypes={components:o.object,data:o.shape({cmpttn:o.object,vids:o.oneOfType([o.array,d.observableArray])}),isWebview:o.bool,moduleFooter:o.string,moduleTitle:o.string},m.defaultProps={isWebview:!1,moduleTitle:"Video",moduleFooter:"View More"},e.exports=m},660225:(e,t,i)=>{var n=i(785893),a=(i(667294),i(903896)),s=i(108679),r=i(857395),o=i(502859);e.exports=function(e,t){var i=o(a(e)),l={render:function(){return n.jsx(i,{...t,...this.props})}},d=r.createPage(l);return s(d,i),d}},401764:(e,t,i)=>{"use strict";i.r(t)},830754:(e,t,i)=>{"use strict";i.r(t)}}]);