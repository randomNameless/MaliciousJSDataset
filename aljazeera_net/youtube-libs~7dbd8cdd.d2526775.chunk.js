(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[45],{"0Sjh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=u(n("0/eb")),o=u(n("fP1Z")),i=u(n("eDt3"));function u(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=(0,a.default)();if(l||(l=(0,o.default)(u)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(u);var c=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var a=new r.Player(e,t);return u.on("ready",(function(){n(a)})),null}))})),s=i.default.promisifyPlayer(c,n);return s.on=u.on,s.off=u.off,s},e.exports=t.default},Ml0y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},WgWc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("qGCp"),o=(r=a)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},eDt3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n("9JEJ")),a=u(n("Ml0y")),o=u(n("wrOh")),i=u(n("WgWc"));function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,a=!1,i=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){n(u.value)}}catch(s){a=!0,i=s}finally{try{!r&&c.return&&c.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){var t=i.default[r],a=e.getPlayerState(),o=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var a=e.getPlayerState(),o=void 0;"number"===typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),n())}))})).then((function(){return o})):o}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){return e[r].apply(e,n)}))}},o=!0,u=!1,l=void 0;try{for(var c,s=a.default[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var f=c.value;r(f)}}catch(y){u=!0,l=y}finally{try{!o&&s.return&&s.return()}finally{if(u)throw l}}return n}};t.default=c,e.exports=t.default},fP1Z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("/eCu"),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,o.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},qGCp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},tkbZ:function(e,t,n){"use strict";var r=n("gzET"),a=n.n(r),o=n("VBdi"),i=n.n(o),u=n("NBOv"),l=n.n(u),c=n("0Sjh"),s=n.n(c);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return g(g({},e),{},{playerVars:g({autoplay:0,start:0,end:0},e.playerVars)})}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,n,r,a=d(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),m(b(t=a.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),m(b(t),"onPlayerError",(function(e){return t.props.onError(e)})),m(b(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case o.PlayerState.ENDED:t.props.onEnd(e);break;case o.PlayerState.PLAYING:t.props.onPlay(e);break;case o.PlayerState.PAUSED:t.props.onPause(e)}})),m(b(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),m(b(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),m(b(t),"createPlayer",(function(){if("undefined"!==typeof document){var e=g(g({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=s()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),m(b(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),m(b(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class")}))})),m(b(t),"getInternalPlayer",(function(){return t.internalPlayer})),m(b(t),"updateVideo",(function(){if("undefined"!==typeof t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),m(b(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=o,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!l()(E(e.opts),E(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.containerClassName},i.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}])&&y(t.prototype,n),r&&y(t,r),o}(i.a.Component);m(S,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),S.propTypes={videoId:a.a.string,id:a.a.string,className:a.a.string,containerClassName:a.a.string,opts:a.a.objectOf(a.a.any),onReady:a.a.func,onError:a.a.func,onPlay:a.a.func,onPause:a.a.func,onEnd:a.a.func,onStateChange:a.a.func,onPlaybackRateChange:a.a.func,onPlaybackQualityChange:a.a.func},S.defaultProps={videoId:null,id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},t.a=S},wrOh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default}}]);