"use strict";var brandmetrics,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(l){if(void 0===l.api){l.api=null;var o,r="unknown";l.bootstrap=function(e,t,n){void 0===n&&(n=!1);var o=function(){window._brandmetrics_initiated&&window._brandmetrics_initiated(window.brandmetrics.api),t&&t(window.brandmetrics.api)};"unknown"===r||n?(r="strapping",a(e,function(e,t){var n;if(e&&!(null===(n=window.brandmetrics.api)||void 0===n?void 0:n.hasConsent()))u(t,function(e){window.brandmetrics.api=e,o()});else if(!e){window.brandmetrics.api&&window.brandmetrics.api.stop&&window.brandmetrics.api.stop();window.brandmetrics.api={hasConsent:function(){return!1},isReady:function(){return!0}},o()}})):o()},l.register=function(e){i[e.id]=e.ctor,o&&o(e)},l.getModule=function(e){return i[e],i[e]},l.defaultOptions=function(e){var t={siteId:"",baseUrl:location.protocol+"//"+location.host,consentMode:{type:"iab"},consentRetryCount:2,isTest:!1,logConfiguration:{errors:!1,bundle:!1,level:"None"},query:"",measurements:[],listeners:[],storage:"none",startMode:[{type:"manual"}],userMode:{type:"none"},version:void 0,survey:{max:10,interval:10,expInt:10,maxTot:50,intervalTot:10},adSlot:{},inview:{type:"intersectionobserver"},surveyRandomization:.5,dataRequestType:"script",scriptType:0};return p(t,e)};var p=function(e,t){return __assign(__assign({},e),t)},f=l.defaultOptions({}),i={},a=function(e,n){if(!("sandbox"in document.createElement("iframe")))throw new Error("Sandbox not supported");if(f=p(l.defaultOptions({}),e||{}),d())c(!1,f,n);else{var o=1,r=function(){t(f,function(e,t){!e&&o<=f.consentRetryCount?(o++,setTimeout(function(){r()},3e3)):n(e,t)})};r()}},t=function(t,n){if("none"!==t.consentMode.type){var e=void 0;switch(t.consentMode.type){case"iab":e=new(l.getModule(22));break;case"usp":e=new(l.getModule(34));break;case"custom":e=new(l.getModule(23))(t.consentMode.conf);break;default:throw new Error("Cannot handle consent type: "+t.consentMode.type)}e.check(function(e){e?s(t,n):c(!1,t,n)})}else s(t,n)},s=function(e,t){if(void 0===window._brandmetrics_consent)c(!0,e,t);else{var n=window._brandmetrics_consent();c(n,e,t)}},c=function(e,t,n){n(e,t)},d=function(){try{return null!==localStorage.getItem("__bmdnt")}catch(e){return!1}},u=function(d,u){var e=[];window.IntersectionObserver&&e.push(16),localStorage&&e.push(5);var t=function(){var e,t=p(f,l.getModule(-2)),n="ls"===t.storage&&localStorage?5:"1pc"===t.storage&&function(){if(navigator.cookieEnabled)return!0;document.cookie="cookietest=1";var e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}()?35:6,o=new(l.getModule(2))(t),r=new(l.getModule(n))(t,o,!1),i=t.listeners.filter(function(e){return"api"!==e.type}).map(function(e){var t="apn"===e.type?10:"slot"===e.type?13:"gpt"===e.type?8:"pbj"===e.type?7:"ntv"===e.type?12:"gptStrict"===e.type?9:"gptHb"===e.type?28:"gptPb"===e.type?30:"kvl"===e.type?29:-1;return new(l.getModule(t))(e)});switch(t.userMode.type){case"custom":e=new(l.getModule(24))(r,o,t.userMode);break;case"internal":e=new(l.getModule(31))(r,o,t.userMode)}var a=new(l.getModule(3))(t,o,e),s=new(l.getModule(4))(a,o,r),c=new(l.getModule(1))(t,a,o,i,r);new(l.getModule(26))({options:d,collection:c});l.getModule(0)(t,o,a,s,c,0,function(e){u(e)})},n=function(){return void 0!==i[-2]&&(o=void 0,t(),!0)};(o=n)()||(b(d,e),n())},b=function(e,t){var n=document,o=n.location,r=o.ancestorOrigins;if(n.body){for(var i=0,a=0,s=t;a<s.length;a++){var c=s[a];i|=Math.pow(2,c)}var d=o&&o.search&&-1!==o.search.indexOf("bm_d"),u=r&&0<r.length?r:[o.href],l=u[u.length-1],p=n.createElement("a");p.href=l;var f=p.host,w="?sid="+e.siteId+"&toploc="+f;d&&(w+="&bm_d"),e.query&&(w+="&"+e.query),e.version&&(w+="&"+e.version),e.logConfiguration.bundle&&(w+="&rnd="+Math.floor(9999001*Math.random()+1e3).toString());var v=(!d&&e.cdnUrl?e.cdnUrl:e.baseUrl)+"/scripts/bundle/"+i.toString()+".js"+("?"!==w?w:""),g=document.createElement("script");g.setAttribute("type","text/javascript"),g.setAttribute("async","true"),g.setAttribute("src",v),document.body.appendChild(g)}else n.addEventListener("DOMContentLoaded",function(){b(e,t)})}}}(brandmetrics||(brandmetrics={}));"use strict";!function(){var i=!1,e=function(t){var o,e,s,n=function(){if(window.__tcfapi)return window.__tcfapi;for(var r,t=window,a={};t;){try{if(t.frames.___tcfapiLocator){r=t;break}}catch(t){}if(t===window.top)break;t=t.parent}return r?(window.addEventListener("message",function(t){var e;try{e="string"==typeof t.data?JSON.parse(t.data):t.data}catch(t){}if(void 0!==e){var n=e.__tcfapiReturn;n&&a[n.callId]&&(a[n.callId](n.returnValue,n.success),delete a[n.callId])}},!1),window.__tcfapi=function(t,e,n,i){var o={__tcfapiCall:{command:t,parameter:i,version:e,callId:Math.random().toString()}};a[o.__tcfapiCall.callId]=n,r.postMessage(o,"*")},window.__tcfapi):void 0}();n?(e=n,s=t,i||(e("addEventListener",2,function(t,e){var n=!1;if(e&&"loaded"===t.cmpStatus&&("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus))if(!1===t.gdprApplies)n=!0;else if(t.vendor&&t.purpose){var i=t.vendor,o=t.purpose,r=!1,a=!1;i.consents&&(r=i.consents[422]),i.legitimateInterests&&(r=r||i.legitimateInterests[422]),o.consents&&(a=o.consents[1]),o.legitimateInterests&&(a=a||o.legitimateInterests[1]),r&&a&&(n=!0)}s(n)},[422]),i=!0)):window.__cmp&&"function"==typeof window.__cmp?(o=t,window.__cmp("getVendorConsents",Uint16Array.from([422]),function(t,e){if(e&&t.vendorConsents&&t.purposeConsents){var n=t.vendorConsents[422],i=t.purposeConsents[1];if(n&&i)return void o(!0)}o(!1)})):t(!0)},t=function(){function t(){}return t.prototype.check=function(t){e(t)},t}();window.brandmetrics.register({id:22,ctor:t})}();
            window.brandmetrics.bootstrap({
              baseUrl: "https://collector.brandmetrics.com",
              cdnUrl: "https://cdn.brandmetrics.com",
              siteId: "ed872d84-62d6-4426-94ae-8957cfd3c95a",
              
              consentMode: {"type":"iab","conf":null},
              
              query: "",
              scriptType: 0,
              
            });