(()=>{"use strict";const n="6.21.0_ad40570",t="https://t.teads.tv/track",e="https://cm.teads.tv/v2/advertiser",o="https://cm.teads.tv/v3/conversion",i="tag",a="js-web",c="js-gtm";let r=!1;const d=Date.now();function s(){return window.advertiser_domain}function l(){return window.teads_buyer_pixel_id}function u(){return!0===window.teads_post_message_event_to_opener}function p(){return!0===window.teads_post_message_event_to_window}function w(n){window.teads_iab_consent_data=n}function _(){return window.teads_iab_consent_data}function v(n){window.teads_usp_consent_data=n}function f(){return window.teads_usp_consent_data}function g(){return window.teads_gdpr_advertiser}function m(){return window.teads_ccpa_advertiser}function y(){return!0===window.teads_tracking_allowed}function I(n){window.teads_auction_id=n}function h(){return window.teads_auction_id}function E(n){const t=window.teads_auction_id_forwarded_by||{};t[n]=!0,window.teads_auction_id_forwarded_by=t}function k(n){window.teads_session_id=n}function A(){return window.teads_session_id}function b(){return window.teads_viewer_id}function P(){return!0!==window.teads_disable_first_party_cookie&&window.first_party_cookie_allowed}function N(n){window.teads_tracking_events_sent||(window.teads_tracking_events_sent=[]),window.teads_tracking_events_sent.push(n)}const D=n=>{r=n};function S(){if(void 0!==window.teads&&void 0!==window.teads.advertiserId){if("number"==typeof window.teads.advertiserId)return window.teads.advertiserId}else{if(void 0===window.teads_cv||void 0===window.teads_cv.advertiserId)return window.teads_adv_id;if("number"==typeof window.teads_cv.advertiserId)return window.teads_cv.advertiserId}}function T(){return window.teads_env&&[a,c].includes(window.teads_env)?window.teads_env:a}const L="https://l.teads.tv/performance/http-source",C={INTERNAL:"internal",BAD_INTEGRATION:"bad_integration"};function R(n){return"[object Function]"===toString.call(n)}function U(n){let t="";const e=function(n){let t=n,e=!1;try{for(let n=0;t.parent.document!==t.document||n<50;n+=1){if(!t.parent.document){e=!0;break}t=t.parent}}catch(n){e=!0}return{topFrame:t,err:e}}(n),{topFrame:o}=e;if(e.err)try{t=o.top.location.href}catch(n){t=o.location.href}else t=o.location.href;return t}function O(t,e,o){try{const i={errorMessage:t,topUrl:U(window),userAgent:void 0!==window.navigator&&void 0!==window.navigator.userAgent?window.navigator.userAgent:"",exception:e||"",version:n,type:o||C.BAD_INTEGRATION};t=JSON.stringify(i)}catch(n){}document.createElement("img").src="".concat(L,"?").concat(encodeURIComponent(t))}function X(n){const t=["account","password","pass","secret","secretkey","username","user","login","ordernumber","orderid","email","mail","user.email","user.password","user.name","user.mail","user.lastname","user.firstname","user.phone","user.phonenumber","lastname","firstname","name","address","phonenumber","phone","client_secret","guid"];if(""!==n){const e=n.split("?").length>1?n.split("?")[1]:void 0;if(void 0!==e){let o="".concat(n.split("?")[0],"?");const i=e.split("&");for(let n=0;n<i.length;n+=1){const e=i[n].split(/=(.+)/);o="".concat(o+(0===n?"":"&")+e[0],"=").concat(t.indexOf(e[0])>=0?"XXXXXXXX":e[1])}n=o}}return n}function x(n){try{const t=new RegExp("(?:\\?|&|%3F|%26)auctid(?:=|%3D)([0-9a-zA-Z-_]*)").exec(n);if(t&&t.length>=2)return t[1]}catch(n){O("Error when extracting Auction ID from url",null==n?void 0:n.message,C.INTERNAL)}}function F(n,t,e,o,i,a,c){let r="".concat(n,"=").concat(t);i&&(r+=";path=".concat(i)),"number"==typeof o&&(r+=";max-age=".concat(o)),e&&(r+=";domain=.".concat(e)),a&&(r+=";samesite=".concat(a)),c&&(r+=";secure"),document.cookie=r}function M(n){try{const t="".concat(n,"="),e=document.cookie.split(";");for(let n=0;n<e.length;n+=1)if(e[n]=e[n].trim(),0===e[n].indexOf(t))return e[n].substring(t.length,e[n].length)}catch(t){O('Error while reading first-party cookie with key "'.concat(n,'"'),null==t?void 0:t.message,C.INTERNAL)}return""}function V(t,e){var o,a;const c=S(),r=l(),d=T(),s=function(n){const t=[];return Object.keys(n).forEach((e=>{t.push("".concat(e,"=").concat(encodeURIComponent(n[e])))})),t.join("&")}(e),u=U(window),p=function(n){let t=h();if(!t){let e=n;n||(e=U(window)),t=x(e),t&&(I(t),E("url"))}return t}(u),w=function(){const n=window.teads_auction_id_forwarded_by;return n?Object.keys(n).join(","):void 0}(),v=A(),y=b(),k=_(),P=f(),N=g(),D=m(),L=X(u);let C="?action=".concat(t,"&env=").concat(encodeURIComponent(d),"&tag_version=").concat(encodeURIComponent(n),"&provider=").concat(i);return s.length>0&&(C="".concat(C,"&").concat(s)),void 0!==r?C="".concat(C,"&buyer_pixel_id=").concat(encodeURIComponent(r)):void 0!==c&&(C="".concat(C,"&advertiser_id=").concat(encodeURIComponent(c))),C="".concat(C,"&referer=").concat(encodeURIComponent(L)),void 0!==p&&(C="".concat(C,"&auctid=").concat(p)),void 0!==w&&(C="".concat(C,"&cohort_id=").concat(w)),void 0!==v&&(C="".concat(C,"&user_session_id=").concat(v)),void 0!==y&&(C="".concat(C,"&firstPartyCookieTeadsId=").concat(y)),void 0!==(null==k||null===(o=k.data)||void 0===o?void 0:o.tcString)&&(C="".concat(C,"&gdpr_consent=").concat(k.data.tcString)),null!=N&&N.apply?C="".concat(C,"&gdpr_status=12"):void 0!==(null==N?void 0:N.apply)&&(C="".concat(C,"&gdpr_status=0")),N&&(void 0!==N.apply&&(C="".concat(C,"&gdpr_apply=").concat(N.apply)),void 0!==N.teadsConsent&&(C="".concat(C,"&gtc=").concat(N.teadsConsent)),void 0!==N.isServiceSpecific&&(C="".concat(C,"&gdpr_is_service_specific=").concat(N.isServiceSpecific)),void 0!==N.cmpId&&(C="".concat(C,"&gdpr_cmp_id=").concat(N.cmpId)),void 0!==N.apiVersion&&(C="".concat(C,"&gdpr_api_version=").concat(N.apiVersion))),void 0!==(null==P||null===(a=P.data)||void 0===a?void 0:a.usPrivacy)&&(C="".concat(C,"&ccpa_consent=").concat(P.data.usPrivacy)),D&&(void 0!==D.apply&&(C="".concat(C,"&ca=").concat(D.apply)),void 0!==D.teadsConsent&&(C="".concat(C,"&ctc=").concat(D.teadsConsent))),C}const j=n=>(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(n,null),B={auctionId:{key:"tfpai",maxAge:2592e3},sessionId:{key:"tfpsi",maxAge:1800},viewerId:{key:"tfpvi",maxAge:7776e3}};function G(n){try{F(n,"",s(),0,"/","none",!0)}catch(t){O('Error while deleting cookie on domain with key "'.concat(n,'"'),null==t?void 0:t.message,C.INTERNAL)}}function K(n,t,e){try{F(n,t,s(),e,"/","none",!0)}catch(t){O('Error while setting cookie on domain with key "'.concat(n,'"'),null==t?void 0:t.message,C.INTERNAL)}}function q(){const n=h();P()&&n&&K(B.auctionId.key,n,B.auctionId.maxAge)}function z(){const n=A();P()&&n&&K(B.sessionId.key,n,B.sessionId.maxAge)}const J={PIXEL_LOADED:"TEADS_PIXEL_LOADED",PIXEL_DEBUG:"TEADS_PIXEL_DEBUG",PIXEL_EVENT:"TEADS_PIXEL_EVENT",SDK_PARAMETERS:"TEADS_SDK_PARAMETERS",ASK_PIXEL_INFO:"TEADS_ASK_PIXEL_INFO",PIXEL_INFO:"TEADS_PIXEL_INFO",CONSENT_INFO_LOADED:"TEADS_CONSENT_INFO_LOADED"};function Z(n){var t,e;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:n,id:null===(t=window)||void 0===t?void 0:t.name,ts:Date.now(),host:null===(e=window)||void 0===e||null===(e=e.location)||void 0===e?void 0:e.host,...o}}function H(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";try{var o,i;const a=(null===(o=window)||void 0===o||null===(o=o.opener)||void 0===o?void 0:o.top)||(null===(i=window)||void 0===i?void 0:i.opener);R(a.postMessage)&&a.postMessage(Z(n,t),e)}catch(n){}}function Q(n){var t;let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";if(R(null===(t=window)||void 0===t?void 0:t.postMessage))try{window.postMessage(Z(n,e),o)}catch(n){}}function W(n){var t,e,o,i,a;null!==(t=window)&&void 0!==t&&t.opener&&((null==n||null===(o=n.data)||void 0===o?void 0:o.type)===J.PIXEL_DEBUG&&(window.teads_post_message_event_to_opener=true),(null==n||null===(i=n.data)||void 0===i?void 0:i.type)===J.SDK_PARAMETERS&&null!=n&&null!==(a=n.data)&&void 0!==a&&a.teadsClickId&&(I(n.data.teadsClickId),E("postMessage"),q())),(null==n||null===(e=n.data)||void 0===e?void 0:e.type)===J.ASK_PIXEL_INFO&&(Q(J.PIXEL_INFO,{buyerPixelId:l(),advertiserId:S(),trackingAllowed:y(),firstPartyCookieAllowed:P(),gdprAdvertiser:g(),ccpaAdvertiser:m(),advertiserDomain:s(),auctionId:h(),env:T(),iabData:_(),uspData:f(),referer:X(U(window)),trackingEventsSent:window.teads_tracking_events_sent||[],request:n.data}),window.teads_post_message_event_to_window=!0)}function Y(n){!function(n){const t=document.createElement("img");t.width=0,t.height=0,t.alt="",t.style.position="absolute",t.src=n,j(t)}(n),u()&&H(J.PIXEL_EVENT,{trackingUrl:n}),p()&&Q(J.PIXEL_EVENT,{trackingUrl:n})}async function $(n,t){try{await fetch(n,{browsingTopics:!0,cache:"no-cache",credentials:"include",keepalive:!0}).then((()=>{u()&&H(J.PIXEL_EVENT,{trackingUrl:n}),p()&&Q(J.PIXEL_EVENT,{trackingUrl:n})}))}catch(e){!1===t?O("Unable to fire a log using fetch API",null==e?void 0:e.message,C.BAD_INTEGRATION):Y(n)}}function nn(n,t){function e(e,o){o?!1!==e.gdprApplies&&"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||n(e):t("CMP unable to register callback function. Please check CMP setup.")}const o="__tcfapi",i={};function a(n){const t="".concat(o,"Return"),e="string"==typeof n.data&&"".concat(n.data).includes(t)?JSON.parse(n.data):n.data;if(e[t]&&e[t].callId){const n=e[t];void 0!==i[n.callId]&&i[n.callId](n.returnValue,n.success)}}function c(n,t,e){const c="".concat(o,"Call");window[o]=(n,e,o,a)=>{const r="".concat(Math.random()),d={[c]:{command:n,version:e,parameter:a,callId:r}};i[r]=o,t.postMessage(d,"*")},window.addEventListener("message",a,!1),window[o](n,2,e)}const{cmpFrame:r,cmpFunction:d}=function(){let n,t,e=window;for(;!n;){try{if("function"==typeof e.__tcfapi){t=e.__tcfapi,n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}();return!!r&&(new Promise(((n,t)=>{R(d)?d("ping",2,(()=>n())):c("ping",r,(()=>n())),setTimeout((()=>t()),100)})).catch((()=>t("Unable to ping the CMP"))),R(d)?d("addEventListener",2,e):c("addEventListener",r,e),!0)}function tn(n,t){const e={};function o(n){const t=n&&n.data&&n.data.__uspapiReturn;t&&t.callId&&void 0!==e[t.callId]&&(e[t.callId](t.returnValue,t.success),delete e[t.callId])}let i=!1;function a(n,t,a){i||(window.addEventListener("message",o,!1),i=!0),function(n,o,i){const a="".concat(Math.random()),c={__uspapiCall:{command:n,version:1,callId:a}};e[a]=i,t.postMessage(c,"*")}(n,0,a)}const{uspapiFrame:c,uspapiFunction:r}=function(){let n,t,e=window;for(;!n;){try{if("function"==typeof e.__uspapi){t=e.__uspapi,n=e;break}}catch(n){}try{if(e.frames.__uspapiLocator){n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{uspapiFrame:n,uspapiFunction:t}}();if(!c)return!1;new Promise(((n,t)=>{R(r)?r("getUSPData",1,(()=>n())):a("getUSPData",c,(()=>n())),setTimeout((()=>t()),100)})).catch((()=>t("Unable to ping the USP")));const d=function(){const e={};return{consentDataCallback:(o,i)=>{i&&o.uspString&&(e.usPrivacy=o.uspString),e.usPrivacy?n(e):t("Unable to get USP consent string.")}}}();return R(r)?r("getUSPData",1,d.consentDataCallback):a("getUSPData",c,d.consentDataCallback),!0}function en(n,t){return new Promise((e=>{n((n=>{t({data:n}),e()}),(n=>{t({error:n}),e()}))||e()}))}const on=()=>{var n,t,e;return!(null===(n=document)||void 0===n||null===(n=n.featurePolicy)||void 0===n||null===(t=n.allowedFeatures)||void 0===t||null===(t=t.call(n))||void 0===t||null===(e=t.includes)||void 0===e||!e.call(t,"attribution-reporting"))},an=()=>{"joinAdInterestGroup"in navigator&&(n=>{const t=document.createElement("iframe");t.referrerPolicy="no-referrer-when-downgrade",t.width="0",t.height="0",t.src=n,j(t)})("".concat("https://fledge.teads.tv","/v1/interest-group/tag.html"))},cn=()=>{Y(o+V("timeSpent10",{}))},rn=n=>{Y(o+n)},dn={conversionType:"conversion_type",price:"aepp",currency:"aepc",name:"aepn"};async function sn(n){if(!y())return;const e=function(n,t){const e={};return Object.keys(n).forEach((t=>{const o=t,i=n[t];Object.prototype.hasOwnProperty.call(dn,o)?e[dn[o]]=i+"":O("Invalid parameter specified in event: ".concat(o))})),e}(n),o=V("conversion",e),i=t+o;Y(i),N(i),on()&&rn(o)}const ln=n=>{const{auctionId:t,gdpr:e,ccpa:o,firstPartyCookieAllowed:i,domain:a,trackingAllowed:c}=n;var r,d,s,l;r=i,window.first_party_cookie_allowed=r,d=c,window.teads_tracking_allowed=d,e&&(s=e,window.teads_gdpr_advertiser=s),o&&function(n){window.teads_ccpa_advertiser=n}(o),a&&(l=a,window.advertiser_domain=l),t&&(I(t),E("url"))},un=n=>{if(n){const n=M(B.auctionId.key);if(n){const t=h();t&&t!==n||E("cookie"),t||I(n)}return q(),n}return G(B.auctionId.key),null},pn=(n,t,e,o)=>{if(n){const n=M(B.sessionId.key);t&&e&&t!==e?k(o):n?k(n):o&&k(o),z()}else o&&k(o),G(B.sessionId.key)},wn=(n,t)=>{if(t&&n){const n=M(B.viewerId.key);e=n||t,window.teads_viewer_id=e,function(){const n=b();P()&&n&&K(B.viewerId.key,n,B.viewerId.maxAge)}()}else G(B.viewerId.key);var e};async function _n(){try{const n=await async function(){const n=U(window),t=function(n){var t;const e=S(),o=l();let i="referer=".concat(encodeURIComponent(n));void 0!==o?i+="&buyer_pixel_id=".concat(encodeURIComponent(o)):void 0!==e&&(i+="&advertiser_id=".concat(encodeURIComponent(e)));const a=_();var c,r;a&&(void 0!==(null==a||null===(c=a.data)||void 0===c?void 0:c.gdprApplies)&&(i+="&gdpr_applies=".concat(encodeURIComponent(a.data.gdprApplies))),null!=a&&null!==(r=a.data)&&void 0!==r&&r.tcString&&(i+="&gdpr_consent=".concat(encodeURIComponent(a.data.tcString))),null!=a&&a.error&&(i+="&gdpr_error=".concat(encodeURIComponent(a.error))));const d=f();null!=d&&null!==(t=d.data)&&void 0!==t&&t.usPrivacy&&(i+="&ccpa_consent=".concat(encodeURIComponent(d.data.usPrivacy))),null!=d&&d.error&&(i+="&ccpa_error=".concat(encodeURIComponent(d.error)));const s=function(){const n=M("optout");if(n)return"1"===n}();return void 0!==s&&(i+="&web_opt_out=".concat(encodeURIComponent(s))),i}(n);try{const n=await fetch("".concat(e,"?").concat(t),{cache:"no-cache"});if(200===(null==n?void 0:n.status)){var o,i,a,c,r,d;const t=await n.json();return{trackingAllowed:!1!==(null==t?void 0:t.tracking_allowed),firstPartyCookieAllowed:!0===(null==t?void 0:t.first_party_cookie_allowed),sessionId:null==t?void 0:t.session_id,auctionId:null==t?void 0:t.auction_id,viewerId:null==t?void 0:t.user_id,domain:null==t?void 0:t.domain,ccpa:null!=t&&t.ccpa?{apply:null===(o=t.ccpa)||void 0===o?void 0:o.apply,teadsConsent:null===(i=t.ccpa)||void 0===i?void 0:i.teads_consent}:void 0,gdpr:null!=t&&t.gdpr?{apply:null===(a=t.gdpr)||void 0===a?void 0:a.apply,teadsConsent:null===(c=t.gdpr)||void 0===c?void 0:c.teads_consent,apiVersion:null===(r=t.gdpr)||void 0===r?void 0:r.api_version,cmpId:null===(d=t.gdpr)||void 0===d?void 0:d.cmp_id,isServiceSpecific:null==t?void 0:t.gdpr.is_service_specific}:void 0}}}catch(n){O("Error while trigger API to know advertiser information",null==n?void 0:n.message,C.INTERNAL)}const s=x(n);return s?{trackingAllowed:!0,firstPartyCookieAllowed:!1,auctionId:s}:{trackingAllowed:!0,firstPartyCookieAllowed:!1}}(),{sessionId:t,auctionId:o,viewerId:i}=n;ln(n);const a=P(),c=un(a);pn(a,c,o,t),wn(a,i),p()&&Q(J.CONSENT_INFO_LOADED,{trackingAllowed:y(),firstPartyCookieAllowed:P(),gdprAdvertiser:g(),ccpaAdvertiser:m(),advertiserDomain:s(),auctionId:h(),iabData:_(),uspData:f()})}catch(n){O("Error while initializing advertiser",null==n?void 0:n.message,C.INTERNAL)}}const vn=async()=>{const n=V("pageView",{}),e=t+n;Y(e),N(e),on()&&rn(n),await $(t+V("browser-topics",{}),!1)},fn=()=>{const n=V("timeSpent",{}),e=t+n;D(!1),document.addEventListener("visibilitychange",(n=>()=>{"hidden"===document.visibilityState&&!0!==r&&(D(!0),async function(n,t){try{const t=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);if(!t||!t(n))throw new Error("Beacon not sent");u()&&H(J.PIXEL_EVENT,{trackingUrl:n}),p()&&Q(J.PIXEL_EVENT,{trackingUrl:n})}catch(t){await $(n,!0)}}(n),z(),N(n))})(e)),setTimeout(cn,1e4-(Date.now()-d))},gn=()=>{const n=window.teads_e||[];window.teads_e=[],window.teads_e.push=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return Array.prototype.push.apply(this,t),async function(){if(void 0!==window.teads_e){const n=[];for(;window.teads_e.length;)n.push(sn(window.teads_e.shift()));try{await Promise.all(n)}catch(n){O("Error while sending event based conversion",null==n?void 0:n.message,C.INTERNAL)}z()}else O("The event queue is not defined.")}(),window.teads_e.length},window.teads_e.push(...n)};async function mn(){const n=S(),t=l();"number"!=typeof n&&"number"!=typeof t||(await _n(),await async function(){y()&&(an(),await vn(),await fn(),gn())}())}!async function(n){try{"undefined"!=typeof window&&(R(null===(t=window)||void 0===t?void 0:t.addEventListener)&&(H(J.PIXEL_LOADED),Q(J.PIXEL_LOADED),window.addEventListener("message",W)),await new Promise(((n,t)=>{setTimeout((()=>{Promise.all([en(nn,w),en(tn,v)]).then((()=>async function(){try{window.teads_adv_id||Object.defineProperty(window,"teads_adv_id",{set(n){this._teads_adv_id=n,mn()},get(){return this._teads_adv_id},configurable:!0}),window.teads_buyer_pixel_id||Object.defineProperty(window,"teads_buyer_pixel_id",{set(n){this._teads_buyer_pixel_id=n,mn()},get(){return this._teads_buyer_pixel_id},configurable:!0})}catch(n){O("Error while binding advertiser and pixel ids",null==n?void 0:n.message)}await mn()}())).then(n).catch(t)}),0)})))}catch(n){O("Unhandled exception",null==n?void 0:n.message,C.INTERNAL)}var t}()})();