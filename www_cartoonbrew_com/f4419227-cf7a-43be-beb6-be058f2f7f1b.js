window.Insticator.enableEmbed = true; 
window.Insticator.accountUUID = '598456a1-bc4a-42a1-85e0-5b6b00319a4e'; 
window.Insticator.siteUUID = 'f4419227-cf7a-43be-beb6-be058f2f7f1b'; 
window.Insticator.enableNewAuthFlow = true; window.Insticator.enableEnhancedPageUrl = true; 
!function(){var e={263:function(e,t){"use strict";t.T=void 0,t.T=function(e){return Object.keys(e).reduce((function(t,o){return void 0===e[o]?t:t+(""===t?"?":"&")+"".concat(encodeURIComponent(o),"=").concat(encodeURIComponent(e[o]))}),"")}},501:function(e,t){"use strict";t.V=void 0,t.V=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=0|16*Math.random();return("x"===e?t:8|3&t).toString(16)}))}},943:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.channel=void 0;var n=o(883),i=o(497),r=o(48);t.channel=function(e){return{publish:function(){s(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e)},subscribe:function(t){if("undefined"!=typeof window){var o=window.InsticatorXmess.channels;o[e]=o[e]||[],o[e].push(t)}},unsubscribe:function(t){if("undefined"!=typeof window){var o=window.InsticatorXmess.channels;o[e]=o[e]||[],o[e]=o[e].filter((function(e){return e!==t}))}}}};var s=function(e,t){if("undefined"!=typeof window){var o="undefined"==typeof window?null:window.name;e.frameUuid=e.frameUuid||o;var s=window.InsticatorXmess.channels;s[t]&&s[t].length&&(0,n.forEach)(s[t],(function(t){return t(e)})),(0,r.spreadMessage)({messageId:(0,n.uuid)(),messageHeader:i.messageHeader,channelName:t,stamps:[i.xmessNodeId],payload:e})}}},959:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=void 0;var n=o(497);t.log=function(e,t){"undefined"!=typeof window&&window.xmessDebug&&(console.log("".concat(window.xmessDebugId||n.xmessNodeId,": [").concat(e.channelName,"] ").concat(t," ->")),console.log("  stamps:",e.stamps.join(", ")),console.log("  payload:",e.payload))}},48:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processMessage=t.spreadMessage=void 0;var n=o(883),i=o(959);t.spreadMessage=function(e){"undefined"==typeof window||(window.top!==window.self&&(0,n.postMessage)(window.parent,e,"*"),(0,i.log)(e,"spread"),(0,n.sendToAllIFrames)(e,"*"))},t.processMessage=function(e){(0,i.log)(e,"process");var t=e.channelName,o=window.InsticatorXmess.channels;o[t]&&(0,n.forEach)(o[t],(function(t){return t(e.payload)}))}},914:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerMessageListener=void 0;var n,i=o(497),r=o(883),s={stack:[],push:function(e){s.stack.push(e),100<s.stack.length&&s.stack.shift()}},d=[];n=function(e){var t=e.data||{};t.messageHeader!==i.messageHeader||t.stamps&&-1!==t.stamps.indexOf(i.xmessNodeId)||-1!==s.stack.indexOf(t.messageId)||(s.push(t.messageId),t.stamps=t.stamps||[],t.stamps.push(i.xmessNodeId),(0,r.forEach)(d,(function(e){return e(t)})))},"undefined"==typeof window||(window.addEventListener?window.addEventListener("message",n):window.attachEvent("onmessage",n)),t.registerMessageListener=function(e){return d.push(e)}},497:function(e,t){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.setXmessNodeId=t.messageHeader=t.xmessNodeId=void 0,t.xmessNodeId=o,t.messageHeader="xmess-v2",t.setXmessNodeId=function(e){t.xmessNodeId=o=e}},295:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getResponseChannel=t.getRequestChannel=void 0;var n=o(943);t.getRequestChannel=function(e){return(0,n.channel)(e+"-insticator-request-channel")},t.getResponseChannel=function(e){return(0,n.channel)(e+"-insticator-response-channel")}},999:function(e,t,o){"use strict";t.b=void 0;var n=o(295);t.b=function(e){var t=(0,n.getRequestChannel)(e),o=(0,n.getResponseChannel)(e);return{make:function(){return new Error("NotSupported")},handle:function(e){t.subscribe((function(t){var n=e(t.requestData);o.publish({requestId:t.requestId,responseData:n})}))}}}},883:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=t.sendToAllIFrames=t.getIFramesOnWindow=t.postMessage=t.uuid=void 0,t.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=0|16*Math.random();return("x"===e?t:8|3&t).toString(16)}))};var o=function(e,t,o){e.postMessage(t,o)};t.postMessage=o;var n=function(){return Array.from(document.getElementsByTagName("iframe"))};t.getIFramesOnWindow=n,t.sendToAllIFrames=function(e,t){var r=n();i(r,(function(n){return o(n.contentWindow,e,t)}))};var i=function(e,t){for(var o=0;o<e.length;o++)t(e[o])};t.forEach=i},155:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"channel",{enumerable:!0,get:function(){return d.channel}});var n=o(914),i=o(48),r=o(497),s=o(883),d=o(943);"undefined"!=typeof window&&(window.InsticatorXmess||(window.InsticatorXmess={channels:{}},(0,n.registerMessageListener)(i.spreadMessage),(0,n.registerMessageListener)(i.processMessage),(0,r.setXmessNodeId)((0,s.uuid)())))},14:function(e,t,o){"use strict";o.r(t);var n=o(501);(0,o(999).b)("getFederatedTrackingData").handle((function(){return function(){if(window.Insticator&&window.federatedObj&&"undefined"!==window.federatedObj.pageview_id)return window.federatedObj;{const e={pageview_id:(0,n.V)()};return window.federatedObj=e,e}}()}))},703:function(e,t,o){"use strict";o.r(t),o.d(t,{loadCEU:function(){return i}});const n="https://product.instiengage.com/ceu-code/";function i({id:e}){var t;window.Insticator&&!window.Insticator.enableEmbed||(function(e){const t=document.querySelector(`#insticator-container.embedid-${e} #insticator-embed`)||document.querySelector(`div[embed-id='${e}']`)||document.querySelector("#insticator-embed");t&&!t.childElementCount&&function(e,t){const o=document.createElement("iframe");o.frameBorder="0",o.scrolling="no",o.marginheight="0",o.marginwidth="0",o.topmargin="0",o.leftmargin="0",o.id="insticator-iframe",o.allowtransparency="true",o.title="Insticator Content Engagement Unit",o.ariaHidden=!0,e.appendChild(o),window.setTimeout((function(){const e=o.contentWindow.document.createElement("div");e.id="app",o.contentWindow.document.body.appendChild(e);const i=o.contentWindow.document.createElement("script");i.type="text/javascript",i.src=n+t+".js",o.contentWindow.document.head.appendChild(i)}),500)}(t,e)}(e),t=e,"function"==typeof window.Insticator.ad.confirmEmbedUUID&&window.Insticator.ad.confirmEmbedUUID(t))}},951:function(e,t,o){"use strict";o.r(t),o.d(t,{loadCommenting:function(){return r}});var n=o(924);const i="https://comment.instiengage.com/live/loader/loader.js";function r(){window.isOldCommentingRequested||(window.isOldCommentingRequested=!0,(0,n.mountScript)(i))}},406:function(e,t,o){"use strict";o.r(t),o.d(t,{saveAuthCallback:function(){return n}});const n=({openAuth:e,SSOToken:t})=>{window.Insticator.customSSOAuthCallback=e,window.Insticator.publisherToken=t}},672:function(e,t,o){"use strict";o.r(t),o.d(t,{loaderEndUserProfile:function(){return i}});var n=o(924);const i=()=>{window.InsticatorNewProfileRequested||(window.InsticatorNewProfileRequested=!0,(0,n.mountScript)("https://end-user-profile.instiengage.com/end-user-profile/loader.js"))}},307:function(e,t,o){"use strict";o.r(t),o.d(t,{loadInfiniteScroll:function(){return i}});var n=o(924);const i=({mode:e="default"})=>{window.Insticator.infiniteScrollEnabled=!0;const t={mode:e,products:{},units:{},registerProduct:e=>{const{product:o,load:n,unload:i}=e;t.products[o]={load:n,unload:i}},registerUnit:e=>{const{id:o,product:n}=e;t.units[n]=t.units[n]||[],t.units[n].push(o)}},o=window.Insticator.infiniteScroll||t;window.Insticator.infiniteScroll=o,(0,n.mountScript)("https://product.instiengage.com/product-loader-script/infiniteScroll.js")}},762:function(e,t,o){"use strict";o.r(t),o.d(t,{loadProfileApp:function(){return i}});var n=o(924);const i=()=>{window.InsticatorProfileRequested||(window.InsticatorProfileRequested=!0,(0,n.mountScript)("https://profile.instiengage.com/profile/loader.js"))}},793:function(e,t,o){"use strict";o.r(t),o.d(t,{loadRatingsScripts:function(){return s}});var n=o(924);const i="https://product.instiengage.com/rating-product-scripts/vendors.js",r="https://product.instiengage.com/rating-product-scripts/sharedRatings.js";function s(){window.ratingsScriptRequested||(window.ratingsScriptRequested=!0,(0,n.mountScript)(i),(0,n.mountScript)(r))}},448:function(e,t,o){"use strict";o.r(t),o.d(t,{loadSentimentScripts:function(){return s}});var n=o(924);const i="https://product.instiengage.com/article-sentiment-scripts/sentiments.js",r="https://product.instiengage.com/article-sentiment-scripts/vendors.js";function s(){window.sentimentScriptRequested||(window.sentimentScriptRequested=!0,(0,n.mountScript)(i),(0,n.mountScript)(r))}},5:function(e,t,o){"use strict";o.r(t),o.d(t,{loadTrendingScripts:function(){return r}});var n=o(924);const i="https://trending-now.instiengage.com/trending-now/loader.js";function r(){window.trendingScriptRequested||(window.trendingScriptRequested=!0,(0,n.mountScript)(i))}},168:function(e,t,o){"use strict";o.r(t),o.d(t,{User:function(){return C}});var n=o(155),i=o(501),r=o(473);function s(e,t,o){const n=new Date;n.setTime(n.getTime()+24*o*60*60*1e3);const i="expires="+n.toUTCString();document.cookie=e+"="+t+";"+i+";path=/;SameSite=Lax"}function d(e){const t=e+"=";let o="";try{o=decodeURIComponent(document.cookie)}catch(e){o=document.cookie,r.logger.log("Not able to decode cookie ",e.message)}const n=o.split(";");for(let e=0;e<n.length;e++){let o=n[e];for(;" "===o.charAt(0);)o=o.substring(1);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return""}const a="plsVisitorGeo",c="plsVisitorCity";function u(){const e={_value:void 0,_listeners:[],set:function(t){e._value=t;for(let o=0;o<e._listeners.length;o++)e._listeners[o](t)},get:function(t){if(void 0!==e._value)return t(e._value);e._listeners.push(t)}};return e}function l(){return window.Insticator&&window.Insticator.settings&&void 0!==window.Insticator.settings.visitorGeo}function g(){return window.Insticator&&window.Insticator.shared&&window.Insticator.shared.visitor&&void 0!==window.Insticator.shared.visitor.visitorGeo}const p=u();!function(e){if(r.logger.log("Checking for visitor gdpr status"),window.Insticator&&window.Insticator.shared&&window.Insticator.shared.visitor&&void 0!==window.Insticator.shared.visitor.isGdpr&&void 0!==window.Insticator.shared.visitor.gdprAllowCookies)return r.logger.log("GDPR data was set on Insticator object",{isGdpr:window.Insticator.shared.visitor.isGdpr,gdprAllowCookies:window.Insticator.shared.visitor.gdprAllowCookies}),e({isGdpr:window.Insticator.shared.visitor.isGdpr,gdprAllowCookies:window.Insticator.shared.visitor.gdprAllowCookies});function t(t){const o=["BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","UK","GB"].includes(t);r.logger.log("Visitor gdpr",{isGdpr:o,gdprAllowCookie:!1}),e({isGdpr:o,gdprAllowCookie:!1})}r.logger.log("GDPR data was not set on Insticator object"),l()||g()?(r.logger.log("Visitor geo was set on Insticator object"),t(l()?(r.logger.log("using user geo from window.Insticator.settings.visitorGeo",window.Insticator.settings.visitorGeo),window.Insticator.settings.visitorGeo):g()?(r.logger.log("using user geo from window.Insticator.shared.visitor.visitorGeo",window.Insticator.shared.visitor.visitorGeo),window.Insticator.shared.visitor.visitorGeo):void 0)):(r.logger.log("Visitor geo was not set on Insticator object"),function(e){function t(){return{visitorGeo:d(a),visitorCity:d(c)}}function o({visitorGeo:t,visitorCity:o}){if(""===t)return r.logger.log("Vistior geo from api is empty"),void e("error");!function({visitorGeo:e,visitorCity:t}){r.logger.log("Writing Geo cookies"),s(a,e,1),s(c,t,1)}({visitorGeo:t,visitorCity:o}),e({visitorGeo:t,visitorCity:o})}if(function(){const{visitorGeo:e}=t();return""!==e}())return r.logger.log("Geo was stored in cookies"),o(t());r.logger.log("Making call to geo API"),function(e){const t=new XMLHttpRequest;t.timeout=2e3,t.onreadystatechange=function(){4===t.readyState&&(200===t.status?(r.logger.log("Success fetchVisitorGeo"),e(JSON.parse(t.responseText))):(r.logger.log("Error fetchVisitorGeo"),e("error")))},t.onerror=function(){r.logger.log("Error fetchVisitorGeo"),e("error")},t.ontimeout=function(){r.logger.log("Timeout fetchVisitorGeo"),e("error")},t.open("GET","https://geoip.instiengage.com/json/",!0),t.send(null)}((function(t){"error"===t?e("error"):o({visitorGeo:t.country_code,visitorCity:t.region_name})}))}((function(o){if("error"===o)return r.logger.log("Setting default gdpr status"),e({isGdpr:!0,gdprAllowCookie:!1});t(o.visitorGeo)})))}(p.set);const f="https://auth.instiengage.com/auth/index.html",w="Insticator-Auth-Frame",m=u();function v(e){(0,n.channel)("authIframeLoaded").unsubscribe(v),e.hasUserOptIn?m.set(!1):function(e=function(){}){p.get(e)}((function(e){const t=e.isGdpr&&!e.gdprAllowCookie;m.set(t),(0,n.channel)("authIframeUpdateGdprStatus").publish({isConsentRequired:t,isConstentRequired:t})}))}const I=u();function h(e){I.get(e)}(0,n.channel)("userSessionInit").subscribe(I.set);const y=setTimeout((function(){r.logger.error("Auth Iframe failed to load"),window.Insticator.authFrameFailed=!0,m.set(!0),I.set({cookieId:(0,i.V)()})}),5e3);(0,n.channel)("authIframeLoaded").subscribe((e=>{clearTimeout(y),v(e)}));var P=o(96);function C(){const e=this;return function(){if(document.getElementById(w))return document.getElementById(w);const e=document.createElement("iframe");e.hidden=!0,e.style.display="none",e.id=w,e.src=f,document.body.appendChild(e)}(),this.checkUserData=function(t){!function(e){m.get(e)}((function(o){e.processIsConsentRequired(o),o?t():h((function(o){e.processUserInfoDataAfterConsent(o),t()}))})),(0,n.channel)("shareTrackingData").subscribe(this.setUserDataOnWindow)},this.optUserIn=function(){(0,n.channel)("authIframeUpdateGdprStatus").publish({isConstentRequired:!1,isConsentRequired:!1,isUserAction:!0}),h(e.processUserInfoDataAfterConsent)},this.processIsConsentRequired=function(e){window.Insticator.user=window.Insticator.user||{},window.Insticator.user.showGDPRMessage=e},this.processUserInfoDataAfterConsent=function(e){window.Insticator.user=window.Insticator.user||{},window.Insticator.user.userUUID=e.cookieId,window.Insticator.user.showGDPRMessage=!1,window.Insticator.user.additionalData=(0,P.c$)()},this.setUserDataOnWindow=function(e){window.Insticator.user=window.Insticator.user||{},window.Insticator.user.userUUID=e.cookieId,window.Insticator.user.cookieId=e.cookieId,window.Insticator.user.insticatorUserUUID=e.userUUID,window.Insticator.user.additionalData=(0,P.c$)()},this}},133:function(e,t,o){"use strict";o.r(t);var n=o(155),i=o(263);(0,n.channel)("redirect-to-link").subscribe((function(e){if(!e.payload)return;const t=e.payload;window.location.assign(t.url);const o=window.location.href.split("#")[0],[n,i]=t.url.split("#");o===n&&i&&window.location.reload()})),(0,n.channel)("redirect-to-auth").subscribe((function({product:e,authType:t}){const o={product:e,authType:t,redirectUrl:window.location.href,siteUUID:window.Insticator.siteUUID,cookieId:window.Insticator.user.cookieId};window.Insticator.publisherToken&&(o.publisherToken=window.Insticator.publisherToken),window.location.assign(`https://auth.instiengage.com/auth/app.html${(0,i.T)(o)}`)})),(0,n.channel)("load-profile").subscribe((function(e){window.Insticator.load("new-profile",e)})),(0,n.channel)("custom-sso-open-auth").subscribe((function(){const e=window.Insticator.customSSOAuthCallback;e&&"function"==typeof e&&e()}))},96:function(e,t){"use strict";t.bv=t.lG=t.c$=void 0;const o="INSTICATOR_ADDITIONAL_USER_DATA";t.c$=()=>{try{const e=localStorage.getItem(o);return e?JSON.parse(window.atob(e)):{}}catch(e){return{}}},t.lG=e=>{const n=(0,t.c$)(),i=Object.assign(Object.assign({},n),e);window.Insticator.user.additionalData=i;try{localStorage.setItem(o,window.btoa(JSON.stringify(i)))}catch(e){}},t.bv=()=>{try{window.Insticator.user.additionalData={},localStorage.removeItem(o)}catch(e){}},window.addEventListener("message",(e=>{"INSTICATOR_SHARE_ADDITIONAL_USER_DATA"===e.data.type&&(0,t.lG)(e.data.data),"INSTICATOR_RESET_ADDITIONAL_USER_DATA"===e.data.type&&(0,t.bv)()}))},473:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=void 0;const n=o(378),i=window.location.href.includes("enableInsticatorLogger=true");t.logger={log:(...e)=>{(n.isDraftMode||i)&&console.log("[Insticator product loader]:",...e)},error:(...e)=>{(n.isDraftMode||i)&&console.error("[Insticator product loader]:",...e)}}},565:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setupProductLoadingSequence=void 0;const n=o(587),i=o(607);t.setupProductLoadingSequence=()=>((0,i.initPreloadStage)(n.loadOrPreloadProduct),{finishPreloadStage:i.finishPreloadStage})},587:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadOrPreloadProduct=void 0;const n=o(793),i=o(448),r=o(703),s=o(951),d=o(770),a=o(5),c=o(762),u=o(406),l=o(307),g=o(672),p=o(607),f=o(421),w=o(264),m=o(216),v=o(646),I={infiniteScroll:l.loadInfiniteScroll,rc:n.loadRatingsScripts,ru:n.loadRatingsScripts,em:r.loadCEU,ceu:r.loadCEU,su:i.loadSentimentScripts,tu:a.loadTrendingScripts,reactions:s.loadCommenting,comments:s.loadCommenting,community:s.loadCommenting,profile:s.loadCommenting,customSSO:u.saveAuthCallback,"new-profile":c.loadProfileApp,"comments-counter":d.loadCoreCommeting,"core-commenting":d.loadCoreCommeting,"end-user-profile":g.loaderEndUserProfile,"trending-now":a.loadTrendingScripts,"article-sentiment":m.loadNewArticleSentiment,"insticator-product-group":f.loadProductGroup,"load-page":f.loadProductGroupPage,"advanced-group-layout":v.loadGroupLayout,previewModeNotice:w.loadPreviewModeNotice},h=new Map;h.set("core-commenting",!0),h.set("trending-now",!0),h.set("article-sentiment",!0),h.set("comments-counter",!0),h.set("customSSO",!0),h.set("infiniteScroll",!0),h.set("insticator-product-group",!0),h.set("load-page",!0),h.set("advanced-group-layout",!0);const y=[];(0,p.onPreloadFinsihed)((()=>{for(let e=0;e<y.length;e++)I[y[e][0]]&&I[y[e][0]](y[e][1])})),t.loadOrPreloadProduct=(e,t)=>{var o,n;const i=(null===(o=window.Insticator.preload)||void 0===o?void 0:o.isPreloadMode)&&h.get(e);!(null===(n=window.Insticator.preload)||void 0===n?void 0:n.isPreloadMode)||i?function(e,t){I[e]&&I[e](t)}(e,t):y.push([e,t])}},607:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.onPreloadFinsihed=t.finishPreloadStage=t.initPreloadStage=void 0;const n=o(941);let i=[];function r(e){var t;const o=null!==(t=window.Insticator.preload&&window.Insticator.preload.isPreloadMode)&&void 0!==t?t:void 0;"boolean"==typeof o&&!1===o||i.push(e)}t.initPreloadStage=function(e){window.Insticator.preload={isPreloadMode:!0,onPreloadFinished:r},(0,n.processPreloadedQueue)(e),(0,n.setUpQueueListener)(e)},t.finishPreloadStage=function(){if(window.Insticator.preload){window.Insticator.preload.isPreloadMode=!1;for(let e=0;e<i.length;e++)i[e]();i=[]}},t.onPreloadFinsihed=r},421:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadProductGroupPage=t.loadProductGroup=void 0;const n=o(439);t.loadProductGroup=e=>{e&&e.id&&(0,n.renderProductGroup)({id:e.id,forceProductsRender:e.forceProductsRender,internalCall:e.internalCall,pageFromProps:{pageId:e.pageId,pageUrl:e.pageUrl,pageTitle:e.pageTitle},pageFromHeader:i})};const i={pageId:void 0,pageUrl:void 0,pageTitle:void 0};t.loadProductGroupPage=e=>{var t;if(e){if(window.insticator_isLoadPageCalled=!0,"source"in e&&"external"===e.source){const e=null===(t=document.querySelector('meta[property="insticator:pageId"]'))||void 0===t?void 0:t.getAttribute("content");return e?void(i.pageId=e):void 0}"pageId"in e&&(i.pageId=e.pageId,i.pageUrl=e.pageUrl,i.pageTitle=e.pageTitle)}},window.Insticator._currentPage=i},770:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadCoreCommeting=void 0;const n=o(924);t.loadCoreCommeting=()=>{window.isOldCommentingRequested||window.isCommentingRequested||(window.isCommentingRequested=!0,(0,n.mountScript)("https://core-commenting.instiengage.com/core-commenting/loader.js"))}},646:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadGroupLayout=void 0;const n=o(924);t.loadGroupLayout=()=>{window.isGroupLayoutRequested||(window.isGroupLayoutRequested=!0,(0,n.mountScript)("https://product.instiengage.com/product-group-layout/index.js"))}},264:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPreviewModeNotice=void 0;const n=o(924);t.loadPreviewModeNotice=()=>{window.isPreviewNoticeRequested||(window.isPreviewNoticeRequested=!0,(0,n.mountScript)("https://product.instiengage.com/product-loader-script/previewModeNotice.js"))}},216:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadNewArticleSentiment=void 0;const n=o(924);t.loadNewArticleSentiment=()=>{window.isNewSentimentRequested||(window.isNewSentimentRequested=!0,(0,n.mountScript)("https://article-sentiment.instiengage.com/article-sentiment/loader.js"))}},941:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.processPreloadedQueue=t.setUpQueueListener=void 0,t.setUpQueueListener=function(e){const t=window.Insticator.load;window.Insticator.load=function(){t.apply(this,arguments),e.apply(this,arguments)}},t.processPreloadedQueue=function(e){const t=window.Insticator.q;if(t&&t.length>0)for(let o=0;o<t.length;o++)e(t[o].t,t[o].o)}},547:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function d(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.setupProductManager=void 0;const i=o(473),r=o(912),s=o(830),d=o(771),a=o(378),c=o(702),u=e=>((e,t)=>{try{return new RegExp(t).test(e)}catch(e){return!1}})(window.location.href,e);t.setupProductManager=()=>n(void 0,void 0,void 0,(function*(){i.logger.log("-> Setting up product manager"),yield(0,c.waitTillPMCDefined)();const e=(0,d.getProductManagerConfig)();a.isDraftMode&&window.Insticator.load("previewModeNotice",{}),e&&e.groupsConfigs?(i.logger.log("Product manager config:",e),i.logger.log("Groups applied:",e.groupsConfigs),(e=>{e.isCommentsCounterEnabled&&window.Insticator.load("comments-counter",{cuid:e.commentingUnitId})})(e),(e=>{const t=e.some((e=>e.isInfiniteScrollEnabled)),o=window.innerWidth<=568;t&&window.Insticator.load("infiniteScroll",{}),e.forEach((e=>n(void 0,void 0,void 0,(function*(){if("MOBILE"!==e.deviceType||o)if("DESKTOP"===e.deviceType&&o)i.logger.error(`Group "${e.id}" not rendered: Device type is DESKTOP, but current device is MOBILE`);else{if(!e.isInfiniteScrollEnabled||"INLINE"===e.layout&&"NONE"===e.trigger)return"CONTROL_BAR"===e.trigger&&"INLINE"!==e.layout?u(e.urlFilter)?(i.logger.log(`Group "${e.id}" loaded`),void window.Insticator.load("insticator-product-group",{id:e.id,internalCall:!0})):void i.logger.error(`Group "${e.id}" not rendered: URL filter does not match current URL. Filter: ${e.urlFilter}`):("CUSTOM"===e.trigger&&(i.logger.log(`Group "${e.id}" loaded`),window.Insticator.load("insticator-product-group",{id:e.id,internalCall:!0})),void("INLINE"!==e.layout&&"BUTTON"!==e.trigger||(yield n(void 0,void 0,void 0,(function*(){if(e.isDynamic||i.logger.log(`Group "${e.id}" is loaded in hardcode mode.\nWaiting for body code to call Insticator.load('insticator-product-group', { id: ${e.id} })`),e.isDynamic){if(!u(e.urlFilter))return void i.logger.log(`Group "${e.id}" not rendered: URL filter does not match current URL. Filter: ${e.urlFilter}`);i.logger.log(`Group "${e.id}" loaded in dynamic mode. ${e.selectorMode} selector: ${e.selector}`);const t=yield(0,s.resolveDynamicGroupSelector)(e);if(!t)return void i.logger.error(`Group "${e.id}" not rendered: Could not find element to insert after. Selector ${e.selectorMode}: ${e.selector}`);i.logger.log(`Inserted dynamic container for group "${e.id}" after:`,t),(0,r.insertDynamicGroupContainer)(e,t),window.Insticator.load("insticator-product-group",{id:e.id,internalCall:!0})}})))));i.logger.error(`Group "${e.id}" not rendered: Infinite scroll is enabled, but layout is not INLINE or trigger is not NONE`)}else i.logger.error(`Group "${e.id}" not rendered: Device type is MOBILE, but current device is DESKTOP`)}))))})(e.groupsConfigs)):i.logger.log("No product manager config found")}))},912:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertDynamicGroupContainer=void 0,t.insertDynamicGroupContainer=(e,t)=>{const o=document.createElement("div");return o.setAttribute("class","insticator-product-group"),o.setAttribute("data-insticator-group-id",e.id),o.setAttribute("data-dynamic","true"),t.after(o),o}},771:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getProductManagerConfig=void 0;const n=o(378);let i;const r=e=>{const t=[];return e.showCommenting&&t.push({product:"COMMENTING",order:e.commentingOrder}),e.showTrendingNow&&t.push({product:"TRENDING_NOW",order:e.trendingNowOrder}),e.showArticleSentiment&&t.push({product:"ARTICLE_SENTIMENT",order:e.articleSentimentOrder}),t.sort(((e,t)=>e.order-t.order)).map((e=>e.product))};t.getProductManagerConfig=()=>{if(window.mockInsticatorProductManagerConfig){const e=window.mockInsticatorProductManagerConfig.groupsConfigs[0];return e.draft&&(window.mockInsticatorProductManagerConfig.groupsConfigs[0]=Object.assign({id:e.id},e.draft)),window.mockInsticatorProductManagerConfig.groupsConfigs[0]=Object.assign(Object.assign({},window.mockInsticatorProductManagerConfig.groupsConfigs[0]),{layout:"INLINE",trigger:"NONE"}),window.mockInsticatorProductManagerConfig}if(i)return i;const e=window.Insticator.productManagerConfig;if(!e)return;if(!window.Insticator.commentingUnitId)return;const t={isCommentsCounterEnabled:e.commentsCounterEnabled,commentingUnitId:window.Insticator.commentingUnitId,trendingNowId:window.Insticator.trendingNowId,articleSentimentId:window.Insticator.articleSentimentId,groupsConfigs:[]};return e.groupConfigList.forEach((e=>{const o=n.isDraftMode?e.draft:e.current;if(!o.groupEnabled)return;const i=o.layout||"INLINE",s=o.trigger||"NONE",d=o.deviceType||"ALL",a={id:e.groupId,label:o.label,isInfiniteScrollEnabled:o.infiniteScrollEnabled,isDynamic:o.dynamicPlacement,selectorMode:o.selectorMode,selector:o.selector,urlFilter:o.urlFilter,productsOrder:r(o),layout:i,trigger:s,deviceType:d};t.groupsConfigs.push(a)})),i=t,t}},910:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appendDataParams=void 0,t.appendDataParams=(e,t)=>{Object.keys(t).forEach((o=>{const n=t[o];if(!n)return;const i=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();e.setAttribute(`data-${i}`,n)}))}},439:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function d(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.renderProductGroup=void 0;const i=o(473),r=o(676),s=o(771),d=o(702),a=new Map;a.set("COMMENTING","core-commenting"),a.set("ARTICLE_SENTIMENT","article-sentiment"),a.set("TRENDING_NOW","trending-now");let c=!1;t.renderProductGroup=e=>n(void 0,void 0,void 0,(function*(){yield(0,d.waitTillPMCDefined)();const t=(0,s.getProductManagerConfig)();if(!t||!t.groupsConfigs||!e)return void i.logger.error("No product manager config found or missing params");const o=t.groupsConfigs.find((t=>t.id===e.id));if(!o)return void i.logger.error(`No group config found for id: ${e.id}`);const n="INLINE"===o.layout||"BUTTON"===o.trigger;if(!n&&!e.internalCall)return void i.logger.error(`Group "${o.id}" not rendered: Group layout "${o.layout}" and trigger "${o.trigger}" does not support body code`);if(n&&!e.internalCall&&o.isDynamic)return void i.logger.error(`Group "${o.id}" not rendered: Dynamic group .load should be called from internal dynamic insertion`);const u=window.innerWidth<=568;if("MOBILE"===o.deviceType&&!u)return void i.logger.error(`Group "${o.id}" not rendered: Device type is MOBILE, but current device is DESKTOP`);if("DESKTOP"===o.deviceType&&u)return void i.logger.error(`Group "${o.id}" not rendered: Device type is DESKTOP, but current device is MOBILE`);const l=o.isInfiniteScrollEnabled,g=!("INLINE"===o.layout&&"NONE"===o.trigger),p="BUTTON"===o.trigger||"INLINE"===o.layout,f="INLINE"===o.layout&&!("BUTTON"===o.trigger||"CUSTOM"===o.trigger);if(p){const t=((e,t)=>{let o=`.insticator-product-group[data-insticator-group-id="${e}"]`;t.isDynamic&&(o+='[data-dynamic="true"]'),o+=':not([rendered="true"]';const n=document.querySelector(o);if(n)return n;i.logger.error(`No container found for group: ${e}`)})(o.id,o);if(!t)return void i.logger.error(`No container found for group: ${o.id}`);if(i.logger.log(`Rendering group "${o.id}":`,t,"\nproducts:",o.productsOrder.join(", ")),l&&(!e.pageFromProps||!e.pageFromProps.pageId||!e.pageFromProps.pageUrl||!e.pageFromProps.pageTitle))return void i.logger.error(`Missing pageId, pageUrl and pageTitle in infinite scroll body code for group "${o.id}"`);(f||e.forceProductsRender)&&(i.logger.log(`Group "${o.id}" products rendere without advanced layout`),t.setAttribute("rendered","true"),o.productsOrder.forEach((o=>{const n=r.productBodyCodeRenderers[o]({pageData:l?e.pageFromProps:e.pageFromHeader});t.appendChild(n);const i=a.get(o);i&&window.Insticator.load(i,{})})))}g&&(c?i.logger.error(`Advanced layout already loaded once. Skipping the group "${o.id}"...`):(i.logger.log(`Advanced layout required for group "${o.id}"`),window.Insticator.load("advanced-group-layout",{id:o.id}),c=!0))}))},676:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.productBodyCodeRenderers=void 0;const n=o(910),i=o(771),r=e=>t=>{var o,i,r;const s=document.createElement("div");s.setAttribute("class",e.class);const d=Object.assign(Object.assign({},null!==(o=null==t?void 0:t.pageData)&&void 0!==o?o:{}),(null===(i=e.getAdditionalDataParams)||void 0===i?void 0:i.call(e))||{});return(0,n.appendDataParams)(s,d),e.appendToContainer&&e.appendToContainer.appendChild(s),null!==(r=e.appendToContainer)&&void 0!==r?r:s};t.productBodyCodeRenderers={COMMENTING:r({class:"instiengage-core-commenting",getAdditionalDataParams:()=>{var e,t;return{cuid:null!==(t=null===(e=(0,i.getProductManagerConfig)())||void 0===e?void 0:e.commentingUnitId)&&void 0!==t?t:""}}}),ARTICLE_SENTIMENT:r({class:"instiengage-article-sentiment",getAdditionalDataParams:()=>{var e,t;return{asuid:null!==(t=null===(e=(0,i.getProductManagerConfig)())||void 0===e?void 0:e.articleSentimentId)&&void 0!==t?t:""}}}),TRENDING_NOW:r({class:"instiengage-trending-now",getAdditionalDataParams:()=>{var e,t;return{tnuid:null!==(t=null===(e=(0,i.getProductManagerConfig)())||void 0===e?void 0:e.trendingNowId)&&void 0!==t?t:""}}})},window.INSTICATOR_BODY_CODE_RENDERERS=t.productBodyCodeRenderers},830:function(e,t){"use strict";var o=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function d(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.resolveDynamicGroupSelector=void 0;t.resolveDynamicGroupSelector=e=>o(void 0,void 0,void 0,(function*(){return new Promise((t=>{((e,t=20,n=200)=>o(void 0,void 0,void 0,(function*(){return new Promise(((o,i)=>{let r=0;const s=()=>{const d=(a=e.selectorMode,c=e.selector,"CSS"===a?document.querySelector(c):"XPATH"===a?document.evaluate(c,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue:null);var a,c;d?o(d):(r++,r<t?setTimeout(s,n):i(new Error("Exceeded maximum retries.")))};s()}))})))(e,20,200).then((e=>t(e))).catch((()=>t(null)))}))}))},378:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDraftMode=void 0,t.isDraftMode=window.location.href.includes("insticatorPreviewMode=true")},924:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mountScript=void 0,t.mountScript=function(e,t=!1){if(!t&&document.querySelector(`script[src='${e}']`))return;const o=document.createElement("script");o.src=e,document.head.appendChild(o)}},702:function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function s(e){try{a(n.next(e))}catch(e){r(e)}}function d(e){try{a(n.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,d)}a((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.waitTillPMCDefined=void 0;const i=o(771);let r=[];t.waitTillPMCDefined=()=>n(void 0,void 0,void 0,(function*(){return!!window.Insticator.commentingv2ConfigsSet||(!!(0,i.getProductManagerConfig)()||new Promise((e=>{window.Insticator.onCommentingV2ConfigsSet=()=>{r.forEach((e=>e(void 0))),r=[]},r.push(e)})))}))}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(e){if(e.Insticator.productLoaderWorked)return;e.Insticator.productLoaderWorked=!0,e.Insticator.enableNewAuthFlow=!0;const t=()=>{o(155),o(133),o(14);const{User:t}=o(168);e.Insticator.user=e.Insticator.user||{userUUID:null,showGDPRMessage:null};const{setupProductManager:n}=o(547),{setupProductLoadingSequence:i}=o(565),{finishPreloadStage:r}=i();n();const s=new t;s.checkUserData((function(){r()})),e.Insticator.user.optUserIn=s.optUserIn};document.body?t():window.addEventListener("DOMContentLoaded",t)}(window)}();