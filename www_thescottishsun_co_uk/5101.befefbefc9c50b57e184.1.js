"use strict";(self.webpackJsonpEs6=self.webpackJsonpEs6||[]).push([[5101],{5623:(e,t,o)=>{o.d(t,{BS:()=>r,JW:()=>n,Vw:()=>l,gY:()=>i,qb:()=>a,w:()=>d});const n=0,i=1,r=2,a=3,d=4,l="carousel--interaction-disabled"},53701:(e,t,o)=>{o.d(t,{$H:()=>l,Lr:()=>d,Rk:()=>n,T1:()=>a,z5:()=>r,zp:()=>i});const n={brightcoveHolder:"brightcove__holder",brightcoveVideo:"brightcove__video",docked:"brightcove--is-docked",featuredPlayer:"brightcove--is-featured",initializedPlayer:"vjs-tech",shadow:"brightcove--shadow"},i="incon_widgets",r={articleSectionDesktop:"sun-container__article-section"},a={optaHeader:"opta-widget-header"},d={railsHolder:"swiper-container"},l={container:"wayin-iframe-container"}},9626:(e,t,o)=>{o.d(t,{r4:()=>T,Gd:()=>I,AV:()=>L}),o(752),o(73964),o(76265);var n=o(85299),i=o.n(n),r=o(76693);const a=["vjs-fullscreen-control","vjs-control","vjs-button"],d=".article-top-mobile--featured-video .article-top-mobile__image-container--video",l=".header--mobile",s="video-on-fullscreen",c="nextArrow",u="isFullScreen",p=e=>{const t=document.getElementById(e);return null==t?void 0:t.querySelector(".vjs-control-bar .vjs-fullscreen-control.vjs-control.vjs-button")},v=e=>"false"!==p(e).getAttribute(u),m=e=>Boolean(document.querySelector(".vjs-ad-playing #".concat(e))),y=()=>{const e=document.querySelector(d);e&&(e.style.position="sticky");const t=document.querySelector(l);t&&(t.style.zIndex=5000150);const o=document.getElementById(c);o&&(o.style.display="initial")},g=()=>{const e=document.querySelector(d);e&&(e.style.position="initial");const t=document.querySelector(l);t&&(t.style.zIndex=0);const o=document.getElementById(c);o&&(o.style.display="none")},h=e=>{var t;const o=p(e);null==o||null===(t=o.classList)||void 0===t||t.add(s),null==o||o.setAttribute(u,"true")},w=e=>{var t;const o=p(e);null==o||o.setAttribute(u,"false"),null==o||null===(t=o.classList)||void 0===t||t.remove(s)},f=e=>{try{var t;const o=document.getElementById(e),n=(0,r.wr)(o,"brightcove");return null==n||null===(t=n.classList)||void 0===t?void 0:t.contains("brightcove--is-featured")}catch(e){return!1}},b=e=>{var t;const o=null==e||null===(t=e.target)||void 0===t?void 0:t.parentElement,n=Array.from((null==o?void 0:o.classList)||[]);return a.every(((e,t)=>e===n[t]))},k=(e,t)=>()=>{var o;const{deviceInfo:n,pageMeta:i,features:r}=null===(o=window)||void 0===o?void 0:o.appState;if(r.videoViewAbilityTapFullScreen){const o=f(t),{isFullscreen_:r}=e;!r&&null!=n&&n.isMobile&&"article"===(null==i?void 0:i.pageType)&&o&&(h(t),e.requestFullscreen().then((()=>{})).catch((e=>console.log("error",e))),g())}},P=(e,t)=>function(){var o;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{target:{}};const{deviceInfo:i,features:r}=null===(o=window)||void 0===o?void 0:o.appState;if(r.videoViewAbilityTapFullScreen){var a;const o=null===(a=n.target)||void 0===a||null===(a=a.classList)||void 0===a?void 0:a.contains("vjs-icon-placeholder"),r=f(t);if(null!=i&&i.isMobile&&o&&r&&b(n)){const o=v(t);o||m(t)||(h(t),g()),o&&!m(t)&&(e.pause(),w(t),y())}}},_=(e,t)=>()=>{var t;const{deviceInfo:o,features:n}=null===(t=window)||void 0===t?void 0:t.appState,i=f(e);n.videoViewAbilityTapFullScreen&&null!=o&&o.isMobile&&i&&document.querySelector(".vjs-fullscreen-control .vjs-icon-placeholder")&&h(e)},E=e=>()=>{var t;const{deviceInfo:o,features:n}=null===(t=window)||void 0===t?void 0:t.appState,i=f(e);n.videoViewAbilityTapFullScreen&&null!=o&&o.isMobile&&i&&w(e)};var S=o(18054);let j,O=new Set;const I=e=>{let{context:t}=e;try{const{players:e}=t.videojs||{players:{}};O.forEach((t=>{var o;null===(o=e[t])||void 0===o||o.dispose()})),O=new Set}catch(e){console.error(e)}},L=e=>function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{target:{}};const o=t.target.id,{players:n}=e.videojs||{players:{}},r=i()(t.target,"dataset.videoId",!1);if(r){const e=document.getElementById("bc-video-".concat(r));e&&e.nextElementSibling&&e.nextElementSibling.classList.contains("teaser-brightcove-duration")&&(e.nextElementSibling.style.display="none")}Object.keys(n).forEach((t=>{if(t===o)return;let n;try{n=e.videojs(t),n.pause()}catch(e){console.error(e)}try{n.ima3.adPlayer.pause()}catch(e){}}))},x=e=>{j=e.setTimeout((()=>{e.hasClass("vjs-touch-enabled")&&Boolean(e.userActive())&&!e.hasClass("vjs-ad-playing")&&e.userActive(!1)}),3e3)},C=e=>function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{target:{}};const o=t.target.id,{players:n}=e.videojs||{players:{}};clearTimeout(j),Object.keys(n).forEach((t=>{if(t===o)return;const n=e.videojs(t);x(n)}))},T=async e=>{var t;if(!e.videojs||!e.videojs.players)return;const{account:o,player:n,videoIdPending:i}=(null==e||null===(t=e.video)||void 0===t?void 0:t.dataset)||{account:"",player:""};o||console.warn("brightcoveVideoPlayer no dataset account found, re-initialisation might fail"),n||console.warn("brightcoveVideoPlayer no dataset player found, re-initialisation might fail");const{players:r}=(null==e?void 0:e.videojs)||{players:{}};for(const t of Object.keys(r))if(!O.has(t)&&r[t]){var a;let y=r[t];var d,l,s,c,u,p,v,m;if(y||(o&&n?(await(0,S.md)({account:o,player:n}),e.video.setAttribute("data-video-id",i),e.video.setAttribute("data-embed","default"),e.video.classList.add("video-js"),y=e.bc(e.video)):console.warn("brightcoveVideoPlayer failed to re-initialized due to missing dataset account and player.")),null!==(a=y)&&void 0!==a&&a.on)null===(d=y)||void 0===d||d.on("playing",L(e)),null===(l=y)||void 0===l||l.on("play",L(e)),null===(s=y)||void 0===s||s.on("ads-play",L(e)),null===(c=y)||void 0===c||c.on("touchend",C(e)),f(t)&&(null===(u=y)||void 0===u||u.on("play",k(y,t)),null===(p=y)||void 0===p||p.on("touchstart",P(y,t)),null===(v=y)||void 0===v||v.on("ads-play",E(t)),null===(m=y)||void 0===m||m.on("ads-ad-skipped",_(t))),O.add(t);else console.warn("brightcoveVideoPlayer failed to re-initialized due to failure to run the on commands")}}},18054:(e,t,o)=>{o.d(t,{NP:()=>W,eM:()=>q,kH:()=>Y,Nb:()=>R,md:()=>A,Ux:()=>K});var n=o(87462),i=o(4942),r=(o(752),o(32320),o(73964),o(12826),o(76265),o(67294)),a=o(20745),d=o(23493),l=o.n(d),s=o(23279),c=o.n(s),u=o(6449),p=o(79895),v=o(45437),m=o(90629),y=o(53701),g=o(9626),h=o(77737);const w={Component:(0,r.lazy)((()=>o.e(1441).then(o.bind(o,56765)))),componentName:"BrightcoveVideoSlate"};o(76801),o(64043),o(43843),o(57267);var f=o(76693);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}const k=e=>{if(Number.isNaN(e))return"00:00:00";const t=new Date(null);return t.setSeconds(e),t.toISOString().substr(11,8)};function P(e){let t=document.createElement("a");t.href=document.referrer,window.self!==window.top&&"preview-players.brightcove.net"===window.location.host&&(t.hostname="studio.brightcove.com")?window.videojs.log("GTM plugin will not track events in Video Cloud Studio"):this.ready((()=>{const{defaults:t,onPlayerReady:o}=(()=>{const{indexOf:e}=[];let t,o,n,r="",a="",d=[],l=!1,s=!1,c=0,u=0,p=!1,v="",m="";const y=e=>t.eventNames[e],g=/(\s|^)vjs-ad-(playing|loading|content-resuming)(\s|$)/,h=()=>g.test(o.el().className),w=o=>e.call(t.eventsToTrack,o)>=0,P=(e,d,l,s,c)=>{const{state:{docked:u}}=o;let p;p=u?"docked":"non docked",null==s&&(s=(e=>{let i,r,a,d,l=n[0];for(a=Math.round(o.duration()),r=Math.round(e/a*100),i=d=100;d>=t.percentsPlayedInterval;i=d-=t.percentsPlayedInterval)r<=i&&(l=n[i]);return l})(d));let m=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){(0,i.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({event_media_action:e,media_duration:v,media_id:r,media_milestone:l,media_name:a,media_offset:k(d),media_player:t.eventCategory,media_player_state:p,media_segment:s,media_type:t.mediaType,event_navigation_browsing_method:[y("end"),y("percentPlayed")].includes(e)?"automated":"click",media_position:t.isFeatured?"featured":(0,f.Ym)(o.el())},c);t.debug&&window.videojs.log(m),"undefined"!=typeof utag?window.utag.link(m):window.videojs.log.warn("Tealium utag does not appear to have been initiated on the page")},_=()=>{d=[],l=!1,s=!1,c=u=0,p=!1},E=()=>{o.mediainfo&&o.mediainfo.id?(r=t.mediaId||o.mediainfo.id,a=t.mediaName||o.mediainfo.name):(r=t.mediaId||"none",a=t.mediaName||(void 0).currentSrc().split("/").slice(-1)[0].replace(/\.(\w{3,4})(\?.*)?$/i,"")),o.mediainfo&&o.mediainfo.id&&o.mediainfo.id!==m&&(m=o.mediainfo.id,_(),v=k(o.duration()),w("videoLoad")&&P(y("videoLoad"),0))},S=()=>{h()||E()},j=()=>{let i,r,a,l,s,v;if(!h()){for(i=Math.round(o.currentTime()),r=Math.round(o.duration()),l=Math.round(i/r*100),a=s=t.percentsPlayedInterval;s<=99;a=s+=t.percentsPlayedInterval)l>=a&&e.call(d,a)<0&&(w("percentPlayed")&&0!==l&&(v=Math.round(a*r/100),P(y("percentPlayed"),v,a,n[a])),l>0&&d.push(a));w("seek")&&(c=u,u=i,Math.abs(c-u)>1&&(p=!0,P(y("seekStart"),c),P(y("seekEnd"),u)))}},O=()=>{let e,t;!h()&&w("pause")&&(e=Math.round(o.currentTime()),t=Math.round(o.duration()),e===t||p||P(y("pause"),e))},I=()=>{let e;h()||s||(e=Math.round(o.currentTime()),P(y("end"),e,100),s=!0,t.trackOnReplay&&_(),c=u=0)},L=()=>{let e;h()||(E(),l||(w("start")&&(e=Math.round(o.currentTime()),P(y("start"),e)),l=!0),w("play")&&(e=Math.round(o.currentTime()),P(y("play"),e),p=!1),t.trackOnReplay&&s&&_())},x=()=>{let e,t;t=Math.round(o.currentTime()),e=!0===o.muted()?0:o.volume(),P(y("volumeChange"),t,e)},C=()=>{let e;e=Math.round(o.currentTime()),P("".concat(y("resize")," - ").concat(o.width(),"*").concat(o.height()),e)},T=()=>{let e;e=Math.round(o.currentTime()),P(y("error"),e)},M=()=>{let e;e=Math.round(o.currentTime()),("function"==typeof o.isFullscreen?o.isFullscreen():void 0)||("function"==typeof o.isFullScreen?o.isFullScreen():void 0)?P(y("fullscreenEnter"),e):P(y("fullscreenExit"),e)},B=()=>{let e;e=Math.round(o.currentTime()),P(y("docked"),e,null,null,{media_player_state:"non docked"})},V=()=>{let e;e=Math.round(o.currentTime()),P(y("nonDocked"),e,null,null,{media_player_state:"docked"})},R=()=>{let e;e=Math.round(o.currentTime()),P(y("close"),e)},A=()=>{let e;e=Math.round(o.currentTime()),P(y("skipForward"),e)},F=()=>{let e;e=Math.round(o.currentTime()),P(y("skipBackward"),e)};return{defaults:{debug:!1,eventCategory:"brightcove",eventNames:{close:"Close Docked Video",docked:"Video Docked",end:"Media Complete",error:"Error",fullscreenEnter:"Fullscreen Entered",fullscreenExit:"Fullscreen Exited",nonDocked:"Video Non Docked",pause:"Media Pause",percentPlayed:"Percent played",play:"Media Play",playerLoad:"Player Load",resize:"Resize",seekEnd:"Seek end",seekStart:"Seek start",skipBackward:"Media Previous",skipForward:"Media Next",start:"Media Begin",videoLoad:"Video Load",volumeChange:"Volume Change"},eventsToTrack:["playerLoad","videoLoad","percentPlayed","start","end","seek","play","pause","resize","volumeChange","error","fullscreen","docked","nonDocked","close","skipForward","skipBackward"],mediaType:"video",percentsPlayedInterval:25,trackOnReplay:!1,trackPlayAfterPreRoll:!1,isFeatured:!1,event_navigation_browsing_method:!0},onPlayerReady:(e,i)=>{t=i,o=e,n=t.mediaSegmentLabels||(e=>{let t,o=0;const n=[];for(t=e;t<=100;t+=e)n[t]="".concat(o,"-").concat(t),o=t+1;return n})(t.percentsPlayedInterval),o.addClass("vjs-tealium"),o.on("loadedmetadata",S),o.on("timeupdate",j),o.on("pause",O),w("end")&&o.on("ended",I),o.on("playing",L),w("volumeChange")&&o.on("volumechange",x),w("resize")&&o.on("resize",C),w("error")&&o.on("error",T),w("fullscreen")&&o.on("fullscreenchange",M),w("docked")&&o.on("docked",B),w("nonDocked")&&o.on("nonDocked",V),w("close")&&o.on("close",R),w("skipForward")&&o.on("skipForward",A),w("skipBackward")&&o.on("skipBackward",F)}}})();o(this,window.videojs.mergeOptions(t,e))}))}P.VERSION="__VERSION__";const _=P;var E=o(5623);const S={Component:(0,r.lazy)((()=>o.e(5502).then(o.bind(o,45244)))),componentName:"RecommendedVideos"};var j=o(6100);const O=(e,t)=>{var o;const n={event_navigation_name:e,additional_details:t,event_navigation_action:"navigation",event_navigation_browsing_method:"click"},i=null===(o=document.querySelector("h1.article__headline"))||void 0===o?void 0:o.textContent;i&&(n.article_parent_name=i),(0,j.y1)(n)};function I(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function L(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?I(Object(o),!0).forEach((function(t){(0,i.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const x={};let C;const T="DOWN",M={add(e,t){this.events.forEach((o=>e.addEventListener(o,t)))},events:["mouseover","mouseout"],remove(e,t){this.events.forEach((o=>e.removeEventListener(o,t)))}},B=(0,v.Z)(y.Rk.initializedPlayer),V=(e,t)=>"//players.brightcove.net/".concat(e,"/").concat(t,"_default/index.min.js"),R=async(e,t)=>{var o;const{ipsosUrl:n,ipsosOrgId:i,ipsosSiteId:r}=(null==e||null===(o=e.appState)||void 0===o||null===(o=o.pageMeta)||void 0===o?void 0:o.ipsos)||{};await(0,u.Lu)(n),window.videojs.getPlayer(t).ready((function(){this.dotmetricsVideoJSPlugin({organizationId:i,siteId:r})}))},A=e=>{let{account:t,player:o}=e;return x[o]||(x[o]=(0,u.Lu)(V(t,o))),x[o]},F=e=>{const t=e<=0?0:parseInt(e,10),o=e=>1===e.length?"0".concat(e):e,n=o(Math.floor(t/60).toString()),i=o((t%60).toString());return"".concat(n,":").concat(i)},N=()=>document.body.classList.contains(y.Rk.docked),D=e=>{let{player:t,ui:o}=e;t&&(t.setState({docked:!1}),t.trigger("nonDocked")),document.body.classList.remove(y.Rk.docked),o.video.removeAttribute("data-test-id")},z=e=>e.video.classList.contains(y.Rk.shadow),H=e=>{let{ui:t,context:o,player:n}=e;return n&&n.isFullscreen_&&C.undockVideo({player:n,ui:t}),{videoHeight:t.wrapper.getBoundingClientRect().height,windowHeight:o.innerHeight}},q=e=>{let{indexPage:t,document:o,player:n}=e;return{sidebar:o.querySelector(".sidebar__section"),get video(){return this.wrapper.querySelector(".".concat(y.Rk.brightcoveVideo))},wrapper:t&&n&&n.el_?n.el_:o.querySelector(".".concat(y.Rk.featuredPlayer)),ctaCloseButton:o.getElementById("cta-docked-video-close")}},W=e=>{let t,{ui:o,context:n,indexPage:i=!1}=e;o.video.classList.add("video-js");const r={hasAutoPlayed:!1,prevWindowY:n.pageYOffset,videoHeight:o.wrapper.getBoundingClientRect().height,windowHeight:n.innerHeight};C.handleVerticalPositionTriggers({context:n,state:r,ui:o,indexPage:i,player:t});const a=C.createScrollListener({context:n,state:r,ui:o,indexPage:i,player:t});window.addEventListener("scroll",a);const d=l()((e=>{"mouseover"===e.type?o.wrapper.classList.add("volume--is-hovered"):o.wrapper.classList.remove("volume--is-hovered")}),17);return o.ctaCloseButton&&(o.ctaCloseButton.onclick=()=>{window.removeEventListener("scroll",a),D({ui:o})}),window.addEventListener("resize",l()((()=>{const e=H({ui:o,context:n,player:t});r.videoHeight=e.videoHeight,r.windowHeight=e.windowHeight}),17,{trailing:!0})),e=>{if(t=e,t.setState({docked:!1}),t.on("ads-pod-started",(()=>{const e=o.wrapper.querySelector(".vjs-ad-control-bar .vjs-volume-panel"),n=document.getElementById("featured-video-cta");n&&n.parentNode.removeChild(n),t.setState({adsPlaying:!0}),M.add(e,d),t.on("ads-pod-ended",(()=>{t.setState({adsPlaying:!1}),M.remove(e,d)}))})),!i&&t){const e=new(n.videojs.getComponent("CloseButton"))(t);e.addClass("vjs-close-button"),e.on("close",(()=>{t.trigger("close"),t.pause(),window.removeEventListener("scroll",a),D({player:t,ui:o})})),t.addChild(e)}}},Y=e=>e.thesun_googletag&&"sec"===e.thesun_googletag.sec,U=(e,t)=>{const o=document.getElementById("bc-video-slate-wrapper-".concat(t));o&&(o.style.visibility=e?"visible":"hidden")},Z=(e,t)=>{const o="bc-video-slate-wrapper-".concat(t),i=document.getElementById(o);i&&i.remove();const d=document.createElement("div");d.style.height="inherit",d.setAttribute("id",o),(0,a.s)(d).render(r.createElement(h.IW,(0,n.Z)({},w,{canMount:!0,playlist:e}))),document.getElementById(t).appendChild(d)},J=(e,t)=>{const o=document.getElementById("recommended-videos-container");if(o.previousSibling.firstChild.id!==t)return;const i=document.getElementById("videos-container"),d=null==i?void 0:i.classList.contains("collapsed"),l=o.firstChild;l&&l.remove(),o.style.display="block";const s=document.createElement("div");s.setAttribute("id","recommended-inner-container"),(0,a.s)(s).render(r.createElement(h.IW,(0,n.Z)({},S,{canMount:!0,playlist:e,isCollapsed:d}))),o.appendChild(s)},G=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const{id:i,eid:r}=window.irisInstances.find((t=>t.id===e)),a=window.iris_player.getCurrentIndexByEid(r);let d=n.length>1?n:window.iris_player.getPlaylistByEid(r);if(d=d.map(((e,t)=>L(L({},e),{},{image_url:e.image_url||"/assets/theme/talksport/images/teaser-sample-landscape-large.png",index:t}))).filter((e=>e.index!==a)).slice(0,-1),t===a||!d.length)return;o(a);const l=(e,t,o)=>L(L({},e),{},{play:()=>{O(t,o),window.iris_player.skipToIndexByEid(r,e.index)}}),s=7,c=d.slice(-s),u=(0,p.nI)()?3:2,v=(0,p.nI)()?4:3,m=2;let y=c;if(c.length>=v&&(y=[...c.splice(0,u),...c.splice(-1)]),y=y.map(((e,t)=>l(e,"recommended videos rail: video cards selection","p".concat(t+1)))),J(y,i),c.length>=m&&y.length>=v){const e=c.splice(0,u).map((e=>l(e,"video slate selection",e.platform_id)));Z(e,i)}},$=e=>{let{thePlayer:t,context:o,isFeatured:n,target:i,callback:r,resolve:a}=e;return async()=>{var e,d;if(o.appState.features.videoSlateEnabled){const e=t.id();let o=-1;const n=e=>{o=e},i=c()((()=>{U(t.paused(),e)}),500);(0,u.Zy)({interval:1e3,property:"iris_player"}).then((r=>{r.addCallback.watch((t=>{G(e,o,(e=>n(e)),t)})),r.addCallback.next((()=>{G(e,o,(e=>n(e)))})),t.on("play",(()=>{G(e,o,(e=>n(e))),U(!1,e)})),t.on("pause",i),t.on("seeking",(()=>{U(!1,e)})),t.on("seeked",i)}))}C.setupTealiumPlugin({player:t,brightcoveOptions:{isFeatured:n}}),C.addPlayerEventListeners({player:t,target:i}),o.appState&&o.appState.features.dockedPlayer&&n&&(0,p.nI)()&&(0,u.Zy)({interval:1e3,property:"Iris"}).then((e=>{o.videojs.log("Brightcove IRIS.tv plugin was loaded"),(e=>{let{Iris:t,target:o}=e;t.addCallback.watch((()=>{const e=o.querySelectorAll(".up-next-container .iris-upnext");o.querySelector(".vjs-close-iris-button")||Array.from(e).forEach((e=>{const t=document.createElement("button");t.classList.add("vjs-close-iris-button"),t.addEventListener("click",(t=>{t.stopPropagation(),e.style.display="none"})),e.appendChild(t)}))}))})({Iris:e,target:i})})),r&&r(t),n&&null!==(e=o.newsUkAdLibrary)&&void 0!==e&&e.videoAuction&&await Promise.race([new Promise((e=>setTimeout(e,1500))),o.newsUkAdLibrary.videoAuction(o.bc,t.id_)]),null===(d=t.controlBar)||void 0===d||null===(d=d.progressControl)||void 0===d||d.addClass(E.Vw),a(t)}},K=async e=>{let{context:t,target:o,video:n,callback:i}=e;const{isFeatured:r,player:a,videoIdPending:d}=n.dataset,l="video_id: ".concat(d," with player_id: ").concat(a);if(B(n))return t.videojs.log("Ignoring initialised ".concat(l)),Promise.resolve(n);n.setAttribute("data-video-id",d),n.setAttribute("data-embed","default"),n.classList.add("video-js");const s=t.bc(n);return t.videojs.log("Initialised ".concat(l)),t.videojs.setFormatTime(F),t.videojs.plugin("tealium",_),t.videojs.log("Tealium plugin initialised"),new Promise((e=>{s.ready($({thePlayer:s,context:t,isFeatured:Boolean(r),target:o,callback:i,resolve:e})),(0,g.r4)(L(L({},t),{},{video:n}))}))};C={mouseEvents:M,getBrightcoveScriptPath:V,loadPlayerScript:A,isDocked:N,dockVideo:e=>{let{player:t,ui:o}=e;t&&(t.setState({docked:!0}),t.trigger("docked")),document.body.classList.add(y.Rk.docked),o.video.setAttribute("data-test-id","docked-brightcove")},undockVideo:D,hasShadow:z,addShadow:e=>{e.video.classList.add(y.Rk.shadow)},removeShadow:e=>{e.video.classList.remove(y.Rk.shadow)},updateDimensions:H,handleVerticalPositionTriggers:e=>{let{context:t,state:o,ui:n,indexPage:i,player:r}=e;const a={currentWindowY:t.pageYOffset,get direction(){return this.currentWindowY<o.prevWindowY?"UP":this.currentWindowY>o.prevWindowY?T:"SAME"},get videoViewPortOffset(){return void 0===this.videoViewPortOffsetCache&&(this.videoViewPortOffsetCache=n.wrapper.getBoundingClientRect().y),this.videoViewPortOffsetCache}},d=()=>a.videoViewPortOffset<-1*(o.videoHeight-27);i||(a.direction===T&&!N()&&a.videoViewPortOffset<.7*o.videoHeight*-1&&C.dockVideo({player:r,ui:n}),a.direction===T&&N()&&!z(n)&&d()&&C.addShadow(n),"UP"===a.direction&&N()&&!d()&&(C.undockVideo({player:r,ui:n}),C.removeShadow(n))),i&&a.direction===T&&!r.paused()&&d()&&r.pause(),o.prevWindowY=a.currentWindowY},getUI:q,onScrollHandler:e=>{let{context:t,state:o,ui:n,indexPage:i,player:r}=e;return()=>C.handleVerticalPositionTriggers({context:t,state:o,ui:n,indexPage:i,player:r})},createScrollListener:e=>{let{context:t,state:o,ui:n,indexPage:i,player:r}=e;return l()(C.onScrollHandler({context:t,state:o,ui:n,indexPage:i,player:r}),17,{trailing:!0})},isIndexPage:Y,brightcoveVideoReady:$,setUpVideo:K,customFormatTime:F,setupTealiumPlugin:e=>{var t;let{player:o,brightcoveOptions:n}=e,i=n;const r=(0,m.ej)("tealiumJSON");if(r)try{i=L(L({},i),JSON.parse(r))}catch(e){return!1}null==o||null===(t=o.tealium)||void 0===t||t.call(o,L(L({},{eventNames:{close:"media close",docked:"media dock",end:"media complete",error:"Error",fullscreenEnter:"media fullscreen",fullscreenExit:"media fullscreen closed",nonDocked:"media re-dock",percentPlayed:"media milestone",play:"media play",skipBackward:"media previous",skipForward:"media next"},eventsToTrack:["play","pause","skipForward","skipBackward","fullscreen","docked","nonDocked","close","percentPlayed","end"],trackOnReplay:!0,trackPlayAfterPreRoll:!0,isFeatured:!1}),i))},addPlayerEventListeners:e=>{let{player:t,target:o}=e;o.addEventListener("click",(e=>{let{target:{classList:o}}=e;t.state.adsPlaying||((o.contains("vjs-skip-forward-button")||o.contains("iris-skipForward"))&&t.trigger("skipForward"),(o.contains("vjs-skip-backward-button")||o.contains("iris-skipBackward"))&&t.trigger("skipBackward"))}))},renderPauseSlate:Z,renderRecommendedVideos:J,handleRecommendedVideos:G}},45437:(e,t,o)=>{o.d(t,{Z:()=>n});const n=e=>t=>t&&(t.classList.contains(e)||t.matches(e))},90629:(e,t,o)=>{o.d(t,{_n:()=>a,ej:()=>i,w5:()=>r}),o(11390);var n=o(62551);function i(e){const t=n.parse(window.document.cookie);return e?t[e]:t}const r=e=>e.reduce(((e,t)=>(e[t]=i(t),e)),{}),a={ACS_NGN:"acs_ngn",ACS_WLS:"acs_wls",HELIOS_WP_LOGIN:"helios_wp_login",CUSTOMER_REGION_CODE:"nuk_customer_region_code",CUSTOMER_COUNTRY_CODE:"nuk_customer_country_code",OPTIMIZELY_ENABLED:"optimizely_web_enabled",EXPERIMENT_USER_ID:"nuk_experiment_uuid",EXPERIMENT_KEY:"nuk_experiment_key",BLAIZE_JWT:"blaize_jwt",NUK_PREFERRED_EDITION:"nuk_preferred_edition"}},79895:(e,t,o)=>{o.d(t,{nI:()=>i,tq:()=>n});const n=()=>window.innerWidth<=675,i=()=>window.innerWidth>980},6449:(e,t,o)=>{o.d(t,{Lu:()=>r,Zy:()=>a}),o(752),o(73964),o(76265);var n=o(85299),i=o.n(n);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.document.body,{dataAttributes:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{customAttributes:n}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise(((i,r)=>{const a=window.document.createElement("script");a.type="text/javascript",a.src=e,a.onreadystatechange=i,a.onload=i,a.onerror=r,o&&Object.keys(o).forEach((e=>{a.dataset[e]=o[e]})),n&&Object.entries(n).forEach((e=>{let[t,o]=e;a.setAttribute(t,o)})),t.appendChild(a)}))},a=e=>{let{property:t="",interval:o=16}=e;return new Promise((e=>{const n=window.setInterval((()=>{const o=i()(window,t);return void 0!==o&&(clearInterval(n),e(o))}),o)}))}}}]);