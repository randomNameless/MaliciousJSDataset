!function(){function e(e,t){return e=s(e),e=t?e("instance",t):e}var n=[],i=0,s=function(t){return function(){var e=i++;return n.push([t,[].slice.call(arguments,0),e,{time:Date.now()}]),s(e)}};e._s=n,this.csa=e}(),function(e){var t=function(){"use strict";var t,i="session-id",s="ql-session-id",a="/",o=395,r="CacheDetection.RequestID",u=new AbeCookie;function n(e){var t,n={requestId:function(e,t){return e||t()}(e.request.requestId,g),sessionId:function(){var e=c(i),t=c(s);e=e||t||g("000");return u.deleteCookie(i,a),function(e){u.bake(i,e,o,a,location.hostname)}(e),e}()};return(t=e.site)[r]=n.requestId,{requestConfig:n,siteConfig:t,pageConfig:{pageType:(n=e.page).pageType,subPageType:n.subPageType,pageTypeId:n.pageTypeId||function(){var e=window.location.pathname,t=e.indexOf("?");-1!==t&&(e=e.substr(0,t));t=e.indexOf("#");-1!==t&&(e=e.substr(0,t));t=e.indexOf(";");-1!==t&&(e=e.substr(0,t));e.lastIndexOf("/")===e.length-1&&(e+="index.shtml");for(;0===e.indexOf("/");)e=e.substr(1,e.length);return e}()},surfaceInfoConfig:{deviceType:(e.info||{}).deviceType},searchEntityConfig:e.searchResults,listingDetailsConfig:e.listingDetails}}function g(e){return[e||f(),f(),f()].join("-")}function f(){var e=Math.floor(9999999*Math.random())+1;return"0000000".substr((""+e).length)+e}function c(e){return u.getValue(e)}return{createConfig:function(e){void 0===t&&(t=n(e))},getGlobalConfig:function(){return t.siteConfig},getPageConfig:function(){return{page:t.pageConfig}},getRequestConfig:function(){return{page:{requestId:t.requestConfig.requestId,meaningful:"interactive"},session:{id:t.requestConfig.sessionId}}},getSurfaceInfo:function(){return t.surfaceInfoConfig.deviceType?{deviceType:t.surfaceInfoConfig.deviceType}:utils.getIsMobileByFallBackMethod()?{deviceType:"MOBILE"}:{deviceType:"DESKTOP"}},getSearchEntityData:function(){return!!t.searchEntityConfig&&{searchResults:{distinct:t.searchEntityConfig.distinct,languagesCount:t.searchEntityConfig.languagesCount,results:t.searchEntityConfig.results}}},getListingDetailEntityData:function(){return!!t.listingDetailsConfig&&{listingDetails:{isbn:t.listingDetailsConfig.isbn}}}}}();t.createConfig(JSON.parse(e)),this.csa("Config",t.getGlobalConfig()),this.csa("Events")("setEntity",t.getRequestConfig()),this.csa("Events")("setEntity",t.getPageConfig()),this.csa("Events")("setEntity",{surfaceInfo:t.getSurfaceInfo()}),t.getSearchEntityData()&&this.csa("Events")("setEntity",t.getSearchEntityData()),t.getListingDetailEntityData()&&this.csa("Events")("setEntity",t.getListingDetailEntityData())}(JSON.stringify(window.csaData));