!function(){function e(e,n){return e=r(e),e=n?e("instance",n):e}var t=[],i=0,r=function(n){return function(){var e=i++;return t.push([n,[].slice.call(arguments,0),e,{time:Date.now()}]),r(e)}};e._s=t,this.csa=e}(),function(e){var n=function(){"use strict";var n,i="session-id",r="ql-session-id",o="/",a=395,c="CacheDetection.RequestID",s=new AbeCookie;function t(e){var n,t={requestId:function(e,n){return e||n()}(e.request.requestId,u),sessionId:function(){var e=l(i),n=l(r);e=e||n||u("000");return s.deleteCookie(i,o),function(e){s.bake(i,e,a,o,location.hostname)}(e),e}()};return(n=e.site)[c]=t.requestId,{requestConfig:t,siteConfig:n,pageConfig:{pageType:(t=e.page).pageType,subPageType:t.subPageType,pageTypeId:t.pageTypeId||function(){var e=window.location.pathname,n=e.indexOf("?");-1!==n&&(e=e.substr(0,n));n=e.indexOf("#");-1!==n&&(e=e.substr(0,n));n=e.indexOf(";");-1!==n&&(e=e.substr(0,n));e.lastIndexOf("/")===e.length-1&&(e+="index.shtml");for(;0===e.indexOf("/");)e=e.substr(1,e.length);return e}()},surfaceInfoConfig:{deviceType:(e.info||{}).deviceType},searchEntityConfig:e.searchResults,listingDetailsConfig:e.listingDetails}}function u(e){return[e||f(),f(),f()].join("-")}function f(){var e=Math.floor(9999999*Math.random())+1;return"0000000".substr((""+e).length)+e}function l(e){return s.getValue(e)}return{createConfig:function(e){void 0===n&&(n=t(e))},getGlobalConfig:function(){return n.siteConfig},getPageConfig:function(){return{page:n.pageConfig}},getRequestConfig:function(){return{page:{requestId:n.requestConfig.requestId,meaningful:"interactive"},session:{id:n.requestConfig.sessionId}}},getSurfaceInfo:function(){return n.surfaceInfoConfig.deviceType?{deviceType:n.surfaceInfoConfig.deviceType}:utils.getIsMobileByFallBackMethod()?{deviceType:"MOBILE"}:{deviceType:"DESKTOP"}},getSearchEntityData:function(){return!!n.searchEntityConfig&&{searchResults:{distinct:n.searchEntityConfig.distinct,languagesCount:n.searchEntityConfig.languagesCount,results:n.searchEntityConfig.results}}},getListingDetailEntityData:function(){return!!n.listingDetailsConfig&&{listingDetails:{isbn:n.listingDetailsConfig.isbn}}}}}();n.createConfig(JSON.parse(e)),this.csa("Config",n.getGlobalConfig()),this.csa("Events")("setEntity",n.getRequestConfig()),this.csa("Events")("setEntity",n.getPageConfig()),this.csa("Events")("setEntity",{surfaceInfo:n.getSurfaceInfo()}),n.getSearchEntityData()&&this.csa("Events")("setEntity",n.getSearchEntityData()),n.getListingDetailEntityData()&&this.csa("Events")("setEntity",n.getListingDetailEntityData())}(JSON.stringify(window.csaData)),function(t){var r,i,o="splice",a=t.csa,c={},s={},u=t.csa._s,f=0,l=0,d=-1,g={},p={},m={},e=Object.keys,v=function(){};function n(e,n){return a(e,n)}function h(e,n){var t=s[e]||{};P(t,n),s[e]=t,l++,T(w,0)}function y(t,i,e){var n=!0;return i=S(i),(n=e&&e.buffered?(m[t]||[]).every(function(e){return!1!==i(e)}):n)?(g[t]||(g[t]=[]),g[t].push(i),function(){var e=t,n=i;(e=g[e])&&e[o](e.indexOf(n),1)}):v}function b(e,n){return n=S(n),e in p?(n(p[e]),v):y(e,function(e){return n(e),!1})}function I(e,n){if(a("Errors")("logError",e),c.DEBUG)throw n||e}function E(){return Math.abs(4294967295*Math.random()|0).toString(36)}function S(e,n){return function(){try{return e.apply(this,arguments)}catch(e){I(e.message||e,e)}}}function T(e,n){return t.setTimeout(S(e),n)}function w(){for(var e=0;e<u.length;){var n=u[e],t=n[0]in s;if(!t&&!i)return void(f=u.length);t?(f=e,u[o](e,1),C(n)):e++}d=l}function C(e){var n=s[e[0]],t=e[1],i=t[0];if(!n||!n[i])return I("Undefined function: "+n+"/"+i);r=e[3],s[e[2]]=n[i].apply(n,t.slice(1))||{},r=0}function O(){i=1,w()}function P(n,t){e(t).forEach(function(e){n[e]=t[e]})}b("$beforeunload",O),h("Config",{instance:function(e){P(c,e)}}),a.plugin=S(function(e){e(n)}),n.config=c,n.register=h,n.on=y,n.once=b,n.blank=v,n.emit=function(e,n,t){for(var i=g[e]||[],r=0;r<i.length;)!1===i[r](n)?i[o](r,1):r++;p[e]=n||{},t&&t.buffered&&(m[e]||(m[e]=[]),100<=m[e].length&&m[e].shift(),m[e].push(n||{}))},n.UUID=function(){return[E(),E(),E(),E()].join("-")},n.time=function(e){var n=r?new Date(r.time):new Date;return"ISO"===e?n.toISOString():n.getTime()},n.error=I,n.warn=function(e,n){if(a("Errors")("logWarn",e),c.DEBUG)throw n||e},n.exec=S,n.timeout=T,n.interval=function(e,n){return t.setInterval(S(e),n)},(n.global=t).csa._s.push=function(e){e[0]in s&&(!u.length||i)?(C(e),u.length&&d!==l&&w()):u[o](f++,0,e)},w(),T(function(){T(O,c.SkipMissingPluginsTimeout||5e3)},1)}("undefined"!=typeof window?window:global),csa.plugin(function(o){var a="addEventListener",n="requestAnimationFrame",t=o.exec,i=o.global,c=o.on;o.raf=function(e){if(i[n])return i[n](t(e))},o.on=function(e,n,t,i){var r;return e&&"function"==typeof e[a]?(r=o.exec(t),e[a](n,r,i),function(){e.removeEventListener(n,r,i)}):"string"==typeof e?c(e,n,t,i):o.blank}}),csa.plugin(function(i){var n,t,r={},e="localStorage",o="sessionStorage",a="local",c="session",s=i.exec;function u(e,n){var t;try{t=i.global[e],r[n]=!!t,t=t||{}}catch(e){r[n]=!(t={})}return t}function f(){n=n||u(e,a),t=t||u(o,c)}function l(e){return e&&e[c]?t:n}i.store=s(function(e,n,t){return f(),t=l(t),e?n?void(t[e]=n):t[e]:Object.keys(t)}),i.storageSupport=s(function(){return f(),r}),i.deleteStored=s(function(e,n){f();var t=l(n);if("function"==typeof e)for(var i in t)t.hasOwnProperty(i)&&e(i,t[i])&&delete t[i];else delete t[e]})}),csa.plugin(function(e){e.types={ovl:function(e){var n=[];if(e)for(var t in e)e.hasOwnProperty(t)&&n.push(e[t]);return n}}}),csa.plugin(function(u){var n=u.config;function e(n){return function(e){u("Metrics",{producerId:"csa",dimensions:{message:e}})("recordMetric",n,1)}}function t(i){var r,o,e=i.producerId,a=u("Events",{producerId:e,lob:n.lob||"0"}),c=["name","type","csm","adb"],s={url:"pageURL",file:"f",line:"l",column:"c"};this.log=function(e){var n,t;!function(e){if(e)for(var n in e)return;return 1}(e)&&(n=i.logOptions||{ent:{page:["pageType","subPageType","requestId"]}},a("log",(t=e,r=u.UUID(),o={messageId:r,schemaId:i.schemaId||"<ns>.Error.6",errorMessage:t.m||null,attribution:t.attribution||null,logLevel:"FATAL",url:null,file:null,line:null,column:null,stack:t.s||[],context:t.cinfo||{},metadata:{}},t.logLevel&&(o.logLevel=""+t.logLevel),c.forEach(function(e){t[e]&&(o.metadata[e]=t[e])}),"INFO"!==t.logLevel&&Object.keys(s).forEach(function(e){"number"!=typeof t[s[e]]&&"string"!=typeof t[s[e]]||(o[e]=""+t[s[e]])}),o),n))}}u.register("Errors",{instance:function(e){return new t(e||{})},logError:e("jsError"),logWarn:e("jsWarn")})}),csa.plugin(function(e){var n="csa.anonuser",t=e.store(n);t=t?JSON.parse(t):{id:e.UUID()},e.store(n,JSON.stringify(t)),t=t,e("Events")("setEntity",{user:t}),e.store(n,JSON.stringify(t))}),csa.plugin(function(e){var n=!(!1===e.config["AutoSPA.Enabled"]),t=!(!1===e.config["AutoSPA.MarkLoaded"]),i=e.global;n&&e.on(i,"hashchange",function(){e("SPA")("newPage"),t&&e("Content")("get","body")("emit","loaded")})}),csa.plugin(function(i){var r,e,n,t,o="function",a="willDisappear",c="$app.",s="$document.",u=i.global,f=i.exec,l=i.config["Transport.AnonymizeRequests"]||!1,d=i("Events"),g=u.location,p=u.document||{},m=u.P||{},v=((u.performance||{}).navigation||{}).type,h=i.on,y=i.emit,b=p.hidden,I={};function E(n,e){var t=!!r,e=(e=e||{}).keepPageAttributes;t&&(y("$beforePageTransition"),y("$pageTransition")),t&&!e&&d("removeEntity","page"),r=i.UUID(),e?I.id=r:I={schemaId:"<ns>.PageEntity.2",id:r,url:l?g.href.split("?")[0]:g.href,server:g.hostname,path:g.pathname,referrer:l?p.referrer.split("?")[0]:p.referrer,title:p.title},Object.keys(n||{}).forEach(function(e){I[e]=n[e]}),d("setEntity",{page:I}),y("$pageChange",I,{buffered:1}),t&&y("$afterPageTransition")}function S(){y("$load"),y("$ready"),y("$afterload")}function T(){y("$ready"),y("$beforeunload"),y("$unload"),y("$afterunload")}function w(){b||(y("$visible",!1,{buffered:1}),b=!0)}function C(){b&&(y("$visible",!0,{buffered:1}),b=!1)}function O(n,t){return f(function(){var e=typeof t==o?n+t():n;y(e)})}g&&p&&(h(u,"beforeunload",T),h(u,"pagehide",T),h(p,"visibilitychange",O(s,function(){return p.visibilityState||"unknown"})),h(p,"focus",O(s+"focus")),h(p,"blur",O(s+"blur")),m.when&&m.when("mash").execute(function(e){e&&(h(e,"appPause",O(c+"pause")),h(e,"appResume",O(c+"resume")),O(c+"deviceready")(),u.cordova&&u.cordova.platformId&&O(c+cordova.platformId)(),h(p,"active",O(c+"active")),h(p,"resign",O(c+"resign")))}),s=u.app||{},e=f(function(){y(c+"willDisappear"),T()}),n=s[a],t=typeof n==o,s[a]=f(function(){e(),t&&n()}),u.app||(u.app=s),"complete"===p.readyState?S():h(u,"load",S),(b?w:C)(),i.on("$app.blur",w),i.on("$app.focus",C),i.on("$document.blur",w),i.on("$document.focus",C),i.on("$document.hidden",w),i.on("$document.visible",C),i.register("SPA",{newPage:E}),E({transitionType:{0:"hard",1:"refresh",2:"back-button"}[v]||"unknown"}))}),csa.plugin(function(c){var e="Events",i="UNKNOWN",s="id",a="all",r="messageId",o="timestamp",u="producerId",f="application",l="obfuscatedMarketplaceId",d="entities",g="schemaId",p="version",m="attributes",v="<ns>",h="lob",n="session",y=c.config,t=(c.global.location||{}).host,b=y[e+".Namespace"]||"csa_other",I=y.Application||"Other"+(t?":"+t:""),E=y["Transport.AnonymizeRequests"]||!1,S=c("Transport"),T={},w=function(e,n){Object.keys(e).forEach(n)};function C(t,i,r){w(i,function(e){var n=r===a||(r||{})[e];e in t||(t[e]={version:1,id:i[e][s]||c.UUID()}),O(t[e],i[e],n)})}function O(r,o,a){w(o,function(e){var n,t,i;t=o[n=e],i=a,("string"!=typeof t&&n!==p?c.error("Attribute is not of type string: "+n):!0===i||1===i||n===s||-1!==(i||[]).indexOf(n))&&(r[e]=o[e])})}function P(i,e,r){w(e,function(e){var n,t,e=i[e];e[g]&&(t={},(n={})[s]=e[s],n[u]=e[u]||r[u],n[g]=e[g],n[p]=e[p]++,n[m]=t,$(n,r),O(t,e,1),k(t),S("log",n))})}function $(e,n){var t;e[o]=(t="number"==typeof(t=e[o])?new Date(t).toISOString():t)||c.time("ISO"),e[r]=e[r]||c.UUID(),e[f]=I,e[l]=y.ObfuscatedMarketplaceId||i,e[g]=e[g].replace(v,b),n&&n[h]&&(e[h]=n[h])}function k(e){delete e[p],delete e[g],delete e[u]}function D(r){var o={};this.log=function(e,n){var t={},i=(n||{}).ent;return e?"string"!=typeof e[g]?c.error("A valid schema id is required for the event"):($(e,r),C(t,T,i),C(t,o,i),C(t,e[d]||{},i),w(t,function(e){k(t[e])}),e[u]=r[u],e[d]=t,n&&n[h]&&(e[h]=n[h]),void S("log",e,n)):c.error("The event cannot be undefined")},this.setEntity=function(e){E&&delete e[n],C(o,e,a),P(o,e,r)}}y["KillSwitch."+e]||c.register(e,{setEntity:function(e){E&&delete e[n],c.emit("$entities.set",e,{buffered:1}),C(T,e,a),P(T,e,{producerId:"csa",lob:y[h]||"0"})},removeEntity:function(e){delete T[e]},instance:function(e){return new D(e)}})}),csa.plugin(function(u){var o,f="Transport",l="post",a="preflight",r="csa.cajun.",c="store",s="deleteStored",d="sendBeacon",n="__merge",t="messageId",e=".FlushInterval",i=0,g=u.config[f+".BufferSize"]||2e3,p=u.config[f+".RetryDelay"]||1500,m=u.config[f+".AnonymizeRequests"]||!1,v={},h=0,y=[],b=u.global,I=b.document,E=u.timeout,S=b.Object.keys,T=u.config[f+e]||5e3,w=T,C=u.config[f+e+".BackoffFactor"]||1,O=u.config[f+e+".BackoffLimit"]||3e4,P=0;function $(e){if(864e5<u.time()-+new Date(e.timestamp))return u.warn("Event is too old: "+e);h<g&&(e[t]in v||(v[e[t]]=e,h++),"function"==typeof e[n]&&e[n](v[e[t]]),!P)&&i&&(P=E(k,(e=w,w=Math.min(e*C,O),e)))}function k(){y.forEach(function(n){var t=[];S(v).forEach(function(e){e=v[e];n.accepts(e)&&t.push(e)}),t.length&&(n.chunks?n.chunks(t).forEach(function(e){D(n,e)}):D(n,t))}),v={},P=0}function D(n,t){function i(){u[s](r+e)}var e=u.UUID();u[c](r+e,JSON.stringify(t)),[x,U].some(function(e){try{return e(n,t,i)}catch(e){}})}function x(e,n,t){var i=b.navigator||{},r=b.cordova||{};if(m)return 0;if(!i[d]||!e[l])return 0;e[a]&&r&&"ios"===r.platformId&&!o&&((new Image).src=e[a]().url,o=1);r=e[l](n);return!r.type&&i[d](r.url,r.body)?(t(),1):void 0}function U(e,n,t){var i,r,o,a,c;return e[l]?(e=e[l](n),i=e.url,r=e.body,o=e.type,a=new XMLHttpRequest,c=0,a.onload=function(){a.status<299?t():u.config[f+".XHRRetries"]&&c<3&&E(function(){s(i,r,o)},++c*p)},s(i,r,o),1):0;function s(e,n,t){a.open("POST",e),a.withCredentials=!m,t&&a.setRequestHeader("Content-Type",t),a.send(n)}}S&&(u.once("$afterload",function(){var t;i=1,t=$,(u[c]()||[]).forEach(function(e){if(0===e.indexOf(r))try{var n=u[c](e);u[s](e),JSON.parse(n).forEach(t)}catch(e){u.error(e)}}),u.on(I,"visibilitychange",k,!1),k()}),u.once("$afterunload",function(){i=1,k()}),u.on("$afterPageTransition",function(){h=0,w=T}),u.register(f,{log:$,register:function(e){y.push(e)}}))}),csa.plugin(function(e){var t=e.config["Events.SushiEndpoint"];e("Transport")("register",{accepts:function(e){return e.schemaId},post:function(e){return e=e.map(function(e){return{data:e}}),{url:t,body:JSON.stringify({events:e})}},preflight:function(){var e,n=new RegExp("//(.*?)/").exec(t);return{url:e=n&&n[1]?"https://"+n[1]+"/ping":e}},chunks:function(e){for(var n=[];500<e.length;)n.push(e.splice(0,500));return n.push(e),n}})}),csa.plugin(function(s){var u="transitionStart",n="pageVisible",e="PageTiming",t="visibilitychange",f="$latency.visible",i=s.global,r=i.Object.keys,o=(i.performance||{}).timing,a=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],l=s.config,c=i.Math,d=c.max,g=c.floor,p=i.document||{},c=(o||{}).navigationStart,m=c,v=0,h=null;if(r&&[].forEach&&!l["KillSwitch."+e]){if(!o||null===c||c<=0||void 0===c)return s.error("Invalid navigation timing data: "+c);h=new y({schemaId:"<ns>.PageLatency.6",producerId:"csa"}),"boolean"!=typeof p.hidden&&"string"!=typeof p.visibilityState||!p.removeEventListener?s.emit(f):E()?(s.emit(f),b(n,c)):s.on(p,t,function e(){E()&&(m=s.time(),p.removeEventListener(t,e),b(u,m),b(n,m),s.emit(f))}),s.once("$unload",I),s.once("$load",I),s.on("$pageTransition",function(){m=s.time()}),s.register(e,{mark:b,instance:function(e){return new y(e)}})}function y(e){var n,r=null,o=e.ent||{page:["pageType","subPageType","requestId"]},a=e.logger||s("Events",{producerId:e.producerId,lob:l.lob||"0"});if(!e||!e.producerId||!e.schemaId)return s.error("The producer id and schema Id must be defined for PageLatencyInstance.");function c(){return n||m}function t(){r=s.UUID()}this.mark=function(t,i){if(null!=t)return i=i||s.time(),t===u&&(n=i),s.once(f,function(){a("log",{messageId:r,__merge:function(e){var n;e.markers[t]=(n=c(),d(0,i-(n||m))),e.markerTimestamps[t]=g(i)},markers:{},markerTimestamps:{},navigationStartTimestamp:c()?new Date(c()).toISOString():null,schemaId:e.schemaId},{ent:o})}),i},t(),s.on("$beforePageTransition",t)}function b(e,n){e===u&&(m=n);n=h.mark(e,n);s.emit("$timing:"+e,n)}function I(){if(!v){for(var e=0;e<a.length;e++)o[a[e]]&&b(a[e],o[a[e]]);v=1}}function E(){return!p.hidden||"visible"===p.visibilityState}}),csa.plugin(function(f){var e="Metrics",l=f.config,d=0;function n(r){var i,o,e=r.producerId,n=r.logger,a=n||f("Events",{producerId:e,lob:l.lob||"0"}),c=(r||{}).dimensions||{},s={},t=-1;if(!e&&!n)return f.error("Either a producer id or custom logger must be defined");function u(){t!==d&&(i=f.UUID(),o=f.UUID(),s={},t=d)}this.recordMetric=function(n,t){var e=r.logOptions||{ent:{page:["pageType","subPageType","requestId"]}};e.debugMetric=r.debugMetric,u(),a("log",{messageId:i,schemaId:r.schemaId||"<ns>.Metric.4",metrics:{},dimensions:c,__merge:function(e){e.metrics[n]=t}},e)},this.recordCounter=function(n,e){var t=r.logOptions||{ent:{page:["pageType","subPageType","requestId"]}};if("string"!=typeof n||"number"!=typeof e||!isFinite(e))return f.error("Invalid type given for counter name or counter value: "+n+"/"+e);u(),n in s||(s[n]={});var i=s[n];"f"in i||(i.f=e),i.c=(i.c||0)+1,i.s=(i.s||0)+e,i.l=e,a("log",{messageId:o,schemaId:r.schemaId||"<ns>.InternalCounters.3",c:{},__merge:function(e){n in e.c||(e.c[n]={}),i.fs||(i.fs=1,e.c[n].f=i.f),1<i.c&&(e.c[n].s=i.s,e.c[n].l=i.l,e.c[n].c=i.c)}},t)}}l["KillSwitch."+e]||(new n({producerId:"csa"}).recordMetric("baselineMetricEvent",1),f.on("$beforePageTransition",function(){d++}),f.register(e,{instance:function(e){return new n(e||{})}}))}),csa.plugin(function(o){var a,t=o.config,e=(o.global.performance||{}).timing,c=(e||{}).navigationStart||o.time();function n(){a=o.UUID()}function i(i){var e=(i=i||{}).producerId,n=i.logger,r=n||o("Events",{producerId:e,lob:t.lob||"0"});if(!e&&!n)return o.error("Either a producer id or custom logger must be defined");this.mark=function(n,e){var t=(void 0===e?o.time():e)-c;r("log",{messageId:a,schemaId:i.schemaId||"<ns>.Timer.1",markers:{},__merge:function(e){e.markers[n]=t}},i.logOptions)}}e&&(n(),o.on("$beforePageTransition",n),o.register("Timers",{instance:function(e){return new i(e||{})}}))}),csa.plugin(function(t){var i,r,o,a,e=t.config,n="PageViews",c=e[n+".ImpressionMinimumTime"]||1e3,s="hidden",u="innerHeight",f="innerWidth",l="renderedTo",d=l+"Viewed",g=l+"Meaningful",p=l+"Impressed",m=1,v=2,h=3,y=4,b=5,I="loaded",E=7,S=8,T=t.global,l=t.on,w=t("Events",{producerId:"csa",lob:e.lob||"0"}),C=T.document,O={},P={},$=b;function k(e){var n;O[E]||(O[e]=t.time(),(i=e!==h&&e!==I?i:i||O[e])&&$===y&&(r=r||O[e],(n={})[g]=i-o,n[d]=r-o,D("PageView.5",n),a=a||t.timeout(U,c)),e!==b&&e!==m&&e!==v||(clearTimeout(a),a=0),e!==m&&e!==v||D("PageRender.4",{transitionType:e===m?"hard":"soft"}),e===E&&((n={})[g]=i-o,n[d]=r-o,n[p]=O[e]-o,D("PageImpressed.3",n)))}function D(e,n){P[e]||(n.schemaId="<ns>."+e,w("log",n,{ent:"all"}),P[e]=1)}function x(){0===T[u]&&0===T[f]?($=S,t("Events")("setEntity",{page:{viewport:"hidden-iframe"}})):$=C[s]?b:y,k($)}function U(){k(E),a=0}function q(){var e=o?v:m;O={},P={},r=i=0,o=t.time(),k(e),x()}function L(){var e=C.readyState;"interactive"===e&&k(h),"complete"===e&&k(I)}e["KillSwitch."+n]||(C&&void 0!==C[s]?(q(),l(C,"visibilitychange",x,!1),l(C,"readystatechange",L,!1),l("$afterPageTransition",q),l("$timing:loaded",L),t.once("$load",L)):t.warn("Page visibility not supported"))}),csa.plugin(function(c){var i,e="Content",n="MutationObserver",t="addedNodes",s="querySelectorAll",u="matches",a="getAttributeNames",f="getAttribute",l="dataset",r="producerId",d="slotId",g={ent:{element:1,page:["pageType","subPageType","requestId"]}},o=5,p=c.config[e+".BubbleUp.SearchDepth"]||35,m=c.config[e+".SearchPage"]||0,v="csaC",h=v+"Id",N="logRender",y={},b=c.config,I=b[e+".Selectors"]||[],A=b[e+".WhitelistedAttributes"]||{href:1,class:1},R=b[e+".EnableContentEntities"],_=b["KillSwitch.ContentRendered"],E=c.global,S=E.document||{},T=S.documentElement,X=E.HTMLElement,w={},C=[],O=function(e,n,t,i){var r=this,o=c("Events",{producerId:e||"csa",lob:b.lob||"0"});n.type=n.type||"widget",r.id=n.id,r.l=o,r.e=n,r.el=t,r.rt=i,r.dlo=g,r.op=L(t,"csaOp"),r.log=function(e,n){o("log",e,n||g)},r.entities=function(e){e(n)},n.id&&o("setEntity",{element:n})},j=O.prototype;function Y(e){var n=(e=e||{}).element,t=e.target;return n?(e=e,e=(n=n)instanceof X?q(n)||x(e[r],n,M,c.time()):w[n.id]||U(e[r],0,n,c.time())):t?P(t):c.error("No element or target argument provided.")}function P(e){e=function(e){var n=null,t=0;for(;e&&t<p;){if(t++,function(e,n){if(e&&e.dataset)return e.dataset[n]}(e,h)){n=e;break}e=e.parentElement}return n}(e),e=e?q(e):new O("csa",{id:null},null,c.time());return e}function $(e,n,t){C.push({n:t,e:e,t:n}),k()}function B(){for(var e=c.time(),n=0;0<C.length;){var t=C.shift();if(y[t.n](t.e,t.t),++n%10==0&&c.time()-e>o)break}i=0,C.length&&k()}function k(){i=i||c.raf(B)}function D(e,n,t){return{n:e,e:n,t:t}}function x(e,n,t,i){var r=c.UUID(),o={id:r},a=P(n);return n[l][h]=r,t(o,n),a&&a.id&&(o.parentId=a.id),U(e,n,o,i)}function F(e){return isNaN(e)?null:Math.round(e)}function U(e,n,t,i){R&&(t.schemaId="<ns>.ContentEntity.2"),t.id=t.id||c.UUID();var r,o,e=new O(e,t,n,i);return n=e,_||!(n.op||{}).hasOwnProperty(N)&&!m||(n=e,i=i,r={},o=c.exec(F),n.el&&(r=n.el.getBoundingClientRect()),n.log({schemaId:"<ns>.ContentRender.3",timestamp:i,width:o(r.width),height:o(r.height),positionX:o(r.left+E.pageXOffset),positionY:o(r.top+E.pageYOffset)})),c.emit("$content.register",e),w[t.id]=e}function q(e){return w[(e[l]||{})[h]]}function L(t,i){var r={};return a in(t=t||{})&&Object.keys(t[l]).forEach(function(e){var n;0===e.indexOf(i)&&e.length>i.length&&(n=((n=e.slice(i.length))[0]||"").toLowerCase()+n.slice(1),r[n]=t[l][e])}),r}function M(e,n){var t,i,r,o;a in n&&(r=e,o=L(n,v),Object.keys(o).forEach(function(e){r[e]=o[e]}),d in e&&(e.iSlotId=e[d]),i=e,((t=n)[a]()||[]).forEach(function(e){e in A&&(i[e]=t[f](e))}))}T&&S[s]&&E[n]&&(I.push({selector:"*[data-csa-c-type]",entity:M}),I.push({selector:".celwidget",entity:function(e,n){M(e,n),e[d]=e[d]||n[f]("cel_widget_id")||n.id,e.legacyId=n[f]("cel_widget_id")||n.id,e.type=e.type||"widget"}}),y[1]=function(e,n){e.forEach(function(e){e[t]&&e[t].constructor&&"NodeList"===e[t].constructor.name&&Array.prototype.forEach.call(e[t],function(e){C.unshift(D(2,e,n))})})},y[2]=function(o,a){s in o&&u in o&&I.forEach(function(e){for(var n=e.selector,t=o[u](n),i=o[s](n),r=i.length-1;0<=r;r--)C.unshift(D(3,{e:i[r],s:e},a));t&&C.unshift(D(3,{e:o,s:e},a))})},y[3]=function(e,n){var t=e.e;q(t)||x("csa",t,e.s.entity,n)},y[4]=function(){c.register(e,{instance:Y})},new E[n](function(e){$(e,c.time(),1)}).observe(T,{childList:!0,subtree:!0}),$(T,c.time(),2),$(null,c.time(),4),c.on("$content.export",function(n){Object.keys(n).forEach(function(e){j[e]=n[e]})}))}),csa.plugin(function(r){var t,e="ContentImpressions",n="KillSwitch.",i="IntersectionObserver",o="getAttribute",a="dataset",c="intersectionRatio",s="csaCId",u=1e3,f=r.global,l=r.config,d=l[n+e],g=l[n+e+".ContentViews"],p=((f.performance||{}).timing||{}).navigationStart||r.time(),m={};function v(e){e&&(e.v=1,(e=e).vt=r.time(),e.el.log({schemaId:"<ns>.ContentView.4",timeToViewed:e.vt-e.el.rt,pageFirstPaintToElementViewed:e.vt-p}))}function h(e){e&&!e.it&&(e.i=r.time()-e.is>u,(e=e).it=r.time(),e.el.log({schemaId:"<ns>.ContentImpressed.3",timeToImpressed:e.it-e.el.rt,pageFirstPaintToElementImpressed:e.it-p}))}!d&&f[i]&&(t=new f[i](function(e){var i=r.time();e.forEach(function(e){var n,t=function(e){if(e&&e[o])return m[e[a][s]]}(e.target);t&&(r.emit("$content.intersection",{meta:t.el,t:i,e:e}),n=e.intersectionRect,e.isIntersecting&&0<n.width&&0<n.height&&(g||t.v||v(t),.5<=e[c])&&!t.is&&(t.is=i,t.timer=r.timeout(function(){h(t)},u)),e[c]<.5)&&!t.it&&t.timer&&(f.clearTimeout(t.timer),t.is=0,t.timer=0)})},{threshold:[0,.5,.99]}),r.on("$content.register",function(e){var n=e.el;n&&(m[e.id]={el:e,v:0,i:0,is:0,vt:0,it:0},t.observe(n))}))}),csa.plugin(function(r){var a=r.config["Interactions.ParentChainLength"]||35,n="click",o="touches",c="timeStamp",s="length",u="pageX",f="pageY",l="pageXOffset",d="pageYOffset",g=250,p=5,m=200,v=.5,e={capture:!0,passive:!0},h=r.global,y=r.emit,t=r.on,b=h.Math.abs,i=(h.document||{}).documentElement||{},I={x:0,y:0,t:0,sX:0,sY:0},E={x:0,y:0,t:0,sX:0,sY:0};function S(e){var n,t;return e.id?"//*[@id='"+e.id+"']":(n=function(e){for(var n=1,t=e.previousSibling;t;t=t.previousSibling)t.nodeName===e.nodeName&&(n+=1);return n}(e),t=e.nodeName,1!==n&&(t+="["+n+"]"),e.parentNode?S(e.parentNode)+"/"+t:t)}function T(e,n,t){var i=r("Content",{target:t}),e={schemaId:"<ns>.ContentInteraction.2",interaction:e,interactionData:n,messageId:r.UUID()};t&&((n=S(t))&&(e.attribution=n),(n=function(e){for(var n=e,t=n.tagName,i=!1,r=e?e.href:null,o=0;o<a;o++){if(!n||!n.parentElement){i=!0;break}t=(n=n.parentElement).tagName+"/"+t,r=r||n.href}return{pc:t=i?t:".../"+t,hr:r}}(t)).pc&&(e.interactionData.parentChain=n.pc),n.hr)&&(e.interactionData.href=n.hr),i("log",e),y("$content.interaction",{e:e,w:i})}function w(e){T(n,{interactionX:""+e.pageX,interactionY:""+e.pageY},e.target)}function C(e){var n;e&&e[o]&&1===e[o][s]&&(n=e[o][0],I={e:e.target,x:n[u],y:n[f],t:e[c],sX:h[l],sY:h[d]},E=I)}function O(e){var n,t,i;e&&e[o]&&1===e[o][s]&&I&&E&&(n=e[o][0],i=(t=e[c])-E.t,e={e:e.target,x:n[u],y:n[f],t:t,sX:h[l],sY:h[d]},E=e,m<=i)&&(I=e)}function P(e){var n,t,i,r;e&&(n=b(I.x-E.x),t=b(I.y-E.y),i=b(I.sX-E.sX),r=b(I.sY-E.sY),e=e[c]-I.t,!(g<1e3*n/e&&p<n)&&!(g<1e3*t/e&&p<t)||(e=t<n)&&i&&n*v<=i||!e&&r&&t*v<=r||T((e?"horizontal":"vertical")+"-swipe",{interactionX:""+I.x,interactionY:""+I.y,endX:""+E.x,endY:""+E.y},I.e))}t(i,n,w,e),t(i,"touchstart",C,e),t(i,"touchmove",O,e),t(i,"touchend",P,e)}),csa.plugin(function(i){i.config["KillSwitch.ContentLatency"]||i.emit("$content.export",{mark:function(e,n){var t=this;t.t||(t.t=i("Timers",{logger:t.l,schemaId:"<ns>.ContentLatency.4",logOptions:t.dlo})),t.t("mark",e,n)}})}),csa.plugin(function(c){var t,r,N="normal",s="reload",A="history",u="new-tab",R="ajax",_=1,X=2,f="lastActive",l="lastInteraction",d="used",i="csa-tabbed-browsing",g="visibilityState",o="page",a="experience",j="request",Y={"back-memory-cache":1,"tab-switch":1,"history-navigation-page-cache":1},B="<ns>.TabbedBrowsing.4",p="visible",e=c.global,n=c.config,F=c("Events",{producerId:"csa",lob:n.lob||"0"}),K=e.location||{},m=e.document,v=e.JSON,h=((e.performance||{}).navigation||{}).type,y=c.store,n=c.on,b=c.storageSupport(),I=!1,E={},S={},T={},w={},C={},O=!1,P=!1,$=!1,k=0;function D(e){try{return v.parse(y(i,void 0,{session:e})||"{}")||{}}catch(e){c.error('Could not parse storage value for key "'+i+'": '+e)}return{}}function x(e,n){y(i,v.stringify(n||{}),{session:e})}function U(e){var n=S.tid||e.id,t=E[f]||{};t.tid===n&&(t.pid=e.id,t.ent=C),w={pid:e.id,tid:n,ent:C,lastInteraction:S[l]||{},initialized:!0},T={lastActive:t,lastInteraction:E[l]||{},time:c.time()}}function q(e){var n,t,i,r=e===u,o=m.referrer,o=!(o&&o.length)||-1===o.indexOf(K.origin||""),o=r&&o,a={type:e,toTabId:w.tid,toPageId:w.pid,transitTime:c.time()-E.time||null};o||(o=r,r=a,e=(e=e)===s,n=E[f]||{},n=o?n:S,t=E[l]||{},i=S[l]||{},o=o?t:i,r.fromTabId=n.tid,r.fromPageId=n.pid,(n=n.ent||{}).rid&&(r.fromRequestId=n.rid||null),n.ety&&(r.fromExperienceType=n.ety||null),n.esty&&(r.fromExperienceSubType=n.esty||null),e)||!o.id||o[d]||(r.interactionId=o.id||null,o.sid&&(r.interactionSlotId=o.sid||null),t.id===o.id&&(t[d]=!0),i.id===o.id&&(i[d]=!0)),F("log",{navigation:a,schemaId:B},{ent:{page:["pageType","subPageType","requestId"]}})}function z(e){var n,t,i,r;t=e.transitionType,$=t&&t in Y,E=D(!1),S=D(!0),t=E[l],i=S[l],t&&i&&t.id===i.id&&t[d]!==i[d]&&(r=!t[d],n=!i[d],t[d]=!0,i[d]=!0,r&&x(!1,E),n)&&x(!0,S),U(e),O=!0,t=e,i=L(),r=M(),(i||r)&&U(t),k=1}function J(){I&&!$?q(R):(I=!0,q(h===X||$?A:h===_?S.initialized?s:u:S.initialized?N:u))}function L(){var e=t,n={};return!(!(O&&e&&e.e&&e.w)||(e.w("entities",function(e){n=e||{}}),E[l]={id:e.e.messageId,sid:n.slotId,used:!1},S[l]={id:e.e.messageId,sid:n.slotId,used:!1},t=null))}function M(){var e,n,t,i,r,o,a=!1;return P=m[g]===p,O&&(i=E[f]||{},n=S.tid||i.tid||w.tid,t=S.pid||i.pid||w.pid,i=S.ent||i.ent||w.ent,n=n,t=t,i=i,r=!1,o=(e=E)[f],P?o&&o.tid===w.tid&&o[p]&&o.pid===t||(e[f]={visible:!0,pid:t,tid:n,ent:i},r=!0):o&&o.tid===w.tid&&o[p]&&(r=!(o[p]=!1)),a=r),a}b.local&&b.session&&v&&m&&g in m&&(r=function(){try{return e.self!==e.top}catch(e){return!0}}(),n("$entities.set",function(e){var n,t,i;!r&&e&&(t=(e[j]||{}).id||(e[o]||{}).requestId,i=(e[a]||{}).experienceType||(e[o]||{}).pageType,e=(e[a]||{}).experienceSubType||(e[o]||{}).subPageType,n=!C.rid&&t||!C.ety&&i||!C.esty&&e,C.rid=C.rid||t,C.ety=C.ety||i,C.esty=C.esty||e,n)&&k&&(t=S.tid,(i=E[f]||{}).tid===t&&(i.ent=C,x(!1,E)),S.ent=C,x(!0,S))},{buffered:1}),n("$pageChange",function(e){r||(z(e),J(),x(!1,T),x(!0,w),S=w,E=T)},{buffered:1}),n("$content.interaction",function(e){t=e,L()&&(x(!1,E),x(!0,S))}),n(m,"visibilitychange",function(){!r&&M()&&x(!1,E)},{capture:!1,passive:!0}))}),csa.plugin(function(e){var n,t,i,r,o,a,c,s,u,f,l,d,g,N,A,R,_="hasFocus",p="$app.",X="document",j="screen",m="scroll",v="Width",h="Height",Y="avail"+v,B="avail"+h,F="client"+v,K="client"+h,z="inner"+v,J="inner"+h,V="offset"+v,W="offset"+h,H=m+v,G=m+h,y=e.config,Q=y["KillSwitch.PageInteractionsSummary"],Z=e("Events",{producerId:"csa",lob:y.lob||"0"}),b=1,I=e.global||{},E=e.time,y=e.on,e=e.once,S=I[X]||{},T=I[j]||{},w=I.Math||{},ee=w.abs,C=w.max,O=w.ceil,P=((I.performance||{}).timing||{}).responseStart,$=function(){return S[_]()},k=1,ne=100,te={},D=1;function ie(){c=t=r=o=n,i=0,a=s=u=f=0,ae(),oe()}function re(){P&&!r&&(c=O((r=l)-P),D=1)}function oe(){s=O(C(s,g+R)),d&&(u=O(C(u,d+A))),D=1}function ae(){l=E(),d=ee(I.pageXOffset||0),g=ee(I.pageYOffset||0),N=0<d||0<g,A=I[z]||0,R=I[J]||0}function ce(){var e;ae(),re(),e=g-i,(!t||t&&t<=l)&&(e&&(++a,D=1),i=g,0),t=l+ne,oe()}function se(){var e;o&&(e=O(E()-o),f+=e,o=n,D=0<e)}function x(){o=o||E()}function U(e,n,t,i){n[e+v]=O(t||0),n[e+h]=O(i||0)}function q(e){var e=e===te,n=$();if(n||D){if(!e){if(!b)return;b=0,n&&se()}r={},t=S.documentElement||{},i=S.body||{},U("availableScreen",r,T[Y],T[B]),U(X,r,C(i[H]||0,i[V]||0,t[F]||0,t[H]||0,t[V]||0),C(i[G]||0,i[W]||0,t[K]||0,t[G]||0,t[W]||0)),U(j,r,T.width,T.height),U("viewport",r,I[z],I[J]);var t,i=r,r=(t={scrollCounts:a,reachedDepth:s,horizontalScrollDistance:u,dwellTime:f},"number"==typeof c&&(t.clientTimeToFirstScroll=c),t);e?D=0:(ie(),P=E(),n&&(o=P)),Z("log",{activity:r,dimensions:i,schemaId:"<ns>.PageInteractionsSummary.2"},{ent:{page:["pageType","subPageType","requestId"]}})}}function L(){se(),q(te)}function M(e,n){return function(){k=n,e()}}function ue(){$=function(){return k},k&&!o&&(o=E())}"function"!=typeof S[_]||Q||(ie(),N&&re(),y(I,m,ce,{passive:!0}),y(I,"blur",L),y(I,"focus",M(x,1)),e(p+"android",ue),e(p+"ios",ue),y(p+"pause",M(L,0)),y(p+"resume",M(x,1)),y(p+"resign",M(L,0)),y(p+"active",M(x,1)),$()&&(o=P||E()),e("$beforeunload",q),y("$beforeunload",q),y("$document.hidden",L),y("$beforePageTransition",q),y("$afterPageTransition",function(){D=b=1}))});