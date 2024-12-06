"use strict";(function(){var x=function(r,e){return function(){return r&&(e=r(r=0)),e}};var k=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=x(function(){});var f=x(function(){});var g=x(function(){});var m=x(function(){});var y=x(function(){});var w=x(function(){});var b=x(function(){});var R=k(function(P){"use strict";v();f();g();m();y();w();b();Object.defineProperty(P,"__esModule",{value:!0});P.AdditionalWidget=P.ScriptUrlType=void 0;var G;(function(r){r.es5="es5",r.es6="es6"})(G||(P.ScriptUrlType=G={}));var V=function(){function r(e,t){var i=this;if(this.additionalWidgets=e,this.urlType=t,this.additionalWidgets.length)for(var n=function(a){setTimeout(function(){i.init(i.additionalWidgets[a])},0)},o=0;o<this.additionalWidgets.length;o++)n(o)}return r.prototype.init=function(e){var t=this,i=e.widgetDivId?this.createWidgetDiv(e.id,e.widgetDivId):null,n=this.createWidgetScript(e.urls[this.urlType]),o=e.insertTo||"before";this.waitForElement(e.searchSelector).then(function(a){var c;e.widgetDivId&&t.insertWidgetBlock(a,i,o),(c=window.performance)===null||c===void 0||c.mark("main_script_start_load",{detail:{_mgwidget:e.id}}),t.insertWidgetScript(n)})},r.prototype.createWidgetDiv=function(e,t){var i=document.createElement("div"),n=document.createElement("div"),o=t;return i.classList.add("".concat(o,"-additional")),n.id=o,i.appendChild(n),i},r.prototype.createWidgetScript=function(e){var t=document.createElement("script");return t.src=e,t.async=!0,t.crossOrigin="anonymous",t},r.prototype.insertWidgetBlock=function(e,t,i){switch(i){case"into":e.appendChild(t);break;case"before":var n=e.parentElement;n.insertBefore(t,e);break;case"after":e.insertAdjacentElement("afterend",t);break}},r.prototype.insertWidgetScript=function(e){document.head?document.head.appendChild(e):document.body.appendChild(e)},r.prototype.waitForElement=function(e){return new Promise(function(t){if(document.querySelector(e))return t(document.querySelector(e));var i=new MutationObserver(function(){document.querySelector(e)&&(t(document.querySelector(e)),i.disconnect())});i.observe(document,{childList:!0,subtree:!0})})},r}();P.AdditionalWidget=V});var z=k(function(M){"use strict";v();f();g();m();y();w();b();Object.defineProperty(M,"__esModule",{value:!0});M.ReadMoreButton=void 0;var O;(function(r){r.load="load",r.impression="impression",r.click="click"})(O||(O={}));var X=function(){function r(e){this.name="ReadMoreButton",this.options=e,this.button=null,this.widgetData=null,Array.isArray(this.options.excludeCountries)&&this.options.excludeCountries.length?this.checkFilters():this.init()}return r.prototype.checkFilters=function(){var e=this;typeof fetch=="function"&&typeof this.options.singleJsUrl!="undefined"&&fetch(this.options.singleJsUrl,{method:"HEAD",cache:"force-cache"}).then(function(t){var i,n,o=(n=(i=t.headers)===null||i===void 0?void 0:i.get("X-Cntry"))===null||n===void 0?void 0:n.toLowerCase();o?e.options.excludeCountries.some(function(a){return a.toLowerCase()===o})?console.log("".concat(e.name,": the block didn't pass the filtering conditions.")):e.init():console.log("".concat(e.name,": X-Cntry didn't found."))}).catch(function(t){console.error("".concat(e.name,": fetch error "),t)})},r.prototype.init=function(){var e;!((e=this.options)===null||e===void 0)&&e.abTest?this.loadWithAbTest():this.load()},r.prototype.load=function(){typeof window.rmbOpts=="undefined"&&(window.rmbOpts=this.options,this.addReadMoreButton(),this.detectReadMoreButton())},r.prototype.loadWithAbTest=function(){var e=Number(this.options.abTest),t=Math.random(),i=(100-e)/2/100;t>i&&t<1-i&&(window["_mgRMB"+this.options.siteId]=!0,this.load())},r.prototype.addReadMoreButton=function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("script"),i="//".concat(this.options.cdnDomain,"/js/read-more/btn.js");t.async=!0,t.src=i,t.setAttribute("fetchpriority","high"),e.insertAdjacentElement("afterbegin",t),this.sendEvent(O.load)},r.prototype.detectReadMoreButton=function(){var e=this,t;t=setInterval(function(){e.button=document.querySelector("button.widget-btn"),e.button&&(clearInterval(t),e.startEvents())},100)},r.prototype.startEvents=function(){var e=this;if(this.button.addEventListener("click",function(){e.sendEvent(O.click)}),IntersectionObserver){var t=new IntersectionObserver(function(i){i.forEach(function(n){n.intersectionRatio>=.9&&(t.unobserve(n.target),e.sendEvent(O.impression))})},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});t.observe(this.button)}},r.prototype.sendEvent=function(e){var t=encodeURIComponent(document.location.href),i="\n      https://".concat(this.options.countersDomain,"/rmb?site_id=").concat(this.options.siteId,"&page_url=").concat(t,"&event=").concat(e);this.widgetData=this.widgetData||this.getWidgetData(),this.widgetData&&(i+="&widget_id=".concat(this.widgetData.id,"&distance=").concat(this.widgetData.distance));var n=document.createElement("IMG");n.referrerPolicy="strict-origin-when-cross-origin",n.src=i},r.prototype.getWidgetData=function(){var e=this;if(!this.button)return null;var t=[].slice.call(document.querySelectorAll('[data-type="_mgwidget"], [id^="M'.concat(this.options.siteId,'ScriptRootC"]'))).filter(function(i){return!!(e.button.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)}).map(function(i){return{id:i.dataset.widgetId||i.id.match(/C(\d+)/)[1],distance:i.getBoundingClientRect().top-e.button.getBoundingClientRect().bottom}});return t.length?t.reduce(function(i,n){return n.distance<i.distance?n:i},t[0]):null},r}();M.ReadMoreButton=X});var H=k(function(F){"use strict";v();f();g();m();y();w();b();Object.defineProperty(F,"__esModule",{value:!0});F.PerformanceTracker=void 0;var Y=function(){function r(e){var t=this;if(window.PerformanceObserver){this.trackerDomain=e;var i=new PerformanceObserver(function(n,o){n.getEntries().forEach(function(a){var c,d;!((c=a.detail)===null||c===void 0)&&c._mgwidget&&t.sendMetric(parseInt((d=a.detail)===null||d===void 0?void 0:d._mgwidget),a.name,a.startTime)})});i.observe({entryTypes:["mark"]})}}return r.prototype.sendMetric=function(e,t,i){var n="https://"+this.trackerDomain+"/widget-performance?",o=[];o.push("widget="+e),o.push("metric="+t),o.push("time="+i);try{var a=navigator.connection||navigator.mozConnection||navigator.webkitConnection;typeof a.effectiveType!="undefined"&&o.push("contype="+a.effectiveType)}catch(c){}if(n+=o.join("&"),typeof navigator.sendBeacon=="function")try{navigator.sendBeacon(n)}catch(c){this.pixelFallback(n)}else this.pixelFallback(n)},r.prototype.pixelFallback=function(e){var t=document.createElement("IMG");t.src=e},r}();F.PerformanceTracker=Y});var q=k(function(j){"use strict";v();f();g();m();y();w();b();Object.defineProperty(j,"__esModule",{value:!0});j.AppUtilsBlock=void 0;var K=function(){function r(){this.isMobileResult=null,this.agent=navigator.userAgent||navigator.vendor||window.opera||""}return r.prototype.isMobile=function(){if(this.isMobileResult===null){var e=!1;(function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)})(this.agent),this.isMobileResult=e}return this.isMobileResult},r.prototype.isTablet=function(){return/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(this.agent.toLowerCase())},r.prototype.isIosFBWebview=function(){var e=this.agent.toLowerCase();return e.indexOf("apple")>-1&&e.indexOf("iphone")>-1&&e.indexOf("webkit")>-1&&(e.indexOf("fban")>-1||e.indexOf("fbav")>-1)&&e.indexOf("safari")===-1&&e.indexOf("firefox")===-1&&e.indexOf("chrome")===-1},r.prototype.isFBAndroid=function(){return(this.agent.indexOf("FBAN")>-1||this.agent.indexOf("FBAV")>-1)&&this.agent.indexOf("Android")>-1},r.prototype.isChromeWebView=function(){var e=["WebView","Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})","Linux; U; Android"],t=new RegExp("("+e.join("|")+")","ig");return!!this.agent.match(t)},r.prototype.isObject=function(e){return e!==null&&e.constructor===Object},r.prototype.isSupportES6=function(){try{return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"),!0}catch(e){return!1}},r.prototype.generateHash=function(){return Date.now().toString(36)+Math.random().toString(36).substring(2)},r.prototype.getSingleJsController=function(e){var t,i,n;return(n=(i=((t=window._mgc)===null||t===void 0?void 0:t.controllers)||[])===null||i===void 0?void 0:i.filter(function(o){return o.siteId===e})[0])===null||n===void 0?void 0:n.controller},r}();j.AppUtilsBlock=K});var J=k(function(S){"use strict";v();f();g();m();y();w();b();var $=S&&S.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),B=S&&S.__assign||function(){return B=Object.assign||function(r){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},B.apply(this,arguments)};Object.defineProperty(S,"__esModule",{value:!0});S.BackButtonBlock=void 0;var U=R(),Q=q(),s;(function(r){r.startedPage="mg-started-page",r.additionalPage="mg-additional-page",r.container="mg-additional-container",r.header="mg-additional-header",r.headerAdded="mg-header-added",r.popup="mg-additional-popup",r.popupInner="mg-additional-popup-inner",r.popupText="mg-additional-popup-text",r.popupTriangle="mg-additional-popup-triangle",r.popupCloseBtn="mg-additional-popup-close-btn",r.popupAdded="mg-popup-added",r.popupShowed="mg-popup-showed",r.popupClosed="mg-popup-closed",r.crossButtonContainer="mg-additional-cross-button",r.crossButton="mg-cross-button"})(s||(s={}));var Z=function(r){$(e,r);function e(t){var i,n,o,a=r.call(this)||this;if(a.startedPage="_mgStartedPage",a.additionalPage="_mgAdditionalPage",a.storageStartUrl="_mgStartUrl",a.storagePopupCloseTime="_mgPopupCloseTime",a.storagePagesList="_mgStartPagesList",a.servicerFiltersData="_mgServicerFiltersData",a.name="BackButtonBlock",a.options=t,typeof window[a.servicerFiltersData]=="undefined"){window[a.servicerFiltersData]={},a.widgetId=Number(a.options.widget_id),a.widgetContainerSelector="M".concat(a.options.siteId,"ScriptRootC").concat(a.widgetId,"-additional"),a.hasFilters=!!(!((n=(i=a.options)===null||i===void 0?void 0:i.filters)===null||n===void 0)&&n.length),a.isAggressiveMode=(o=a.options)===null||o===void 0?void 0:o.aggressive_mode,a.initialEvent=typeof onpointerdown=="undefined"?"click":"pointerdown",a.pointerHandler=a.pointerHandler.bind(a);try{typeof sessionStorage!="undefined"&&(a.hasFilters?a.checkFilters():a.start())}catch(c){console.log("".concat(a.name,": sessionStorage not available."),c)}}return a}return e.prototype.checkGeoFilters=function(){var t=this,i,n,o,a=(o=(n=(i=this.options)===null||i===void 0?void 0:i.filters)===null||n===void 0?void 0:n.filter(function(d){return d.type==="exclude_countries"})[0])===null||o===void 0?void 0:o.value,c=this.options.singleJsUrl||(this.isSupportES6()?this.options.widgetPathES6:this.options.widgetPathES5);return new Promise(function(d){a&&a.length?typeof fetch=="function"&&typeof c=="string"&&fetch(c,{method:"HEAD",cache:"force-cache"}).then(function(l){var p,u,h=(u=(p=l.headers)===null||p===void 0?void 0:p.get("X-Cntry"))===null||u===void 0?void 0:u.toLowerCase();h?a.some(function(_){return _.toLowerCase()===h})?console.log("".concat(t.name,": the block didn't pass GEO filtering conditions.")):d():console.log("".concat(t.name,": header X-Cntry didn't found."))}).catch(function(l){console.log("".concat(t.name,": fetch error."),l)}):d()})},e.prototype.checkDeviceFilters=function(){var t=this,i,n,o,a,c=(o=(n=(i=this.options)===null||i===void 0?void 0:i.filters)===null||n===void 0?void 0:n.filter(function(d){return d.type==="device"})[0])===null||o===void 0?void 0:o.value;return new Promise(function(d){c&&c.length?a=setInterval(function(){if(typeof window[t.servicerFiltersData].device!="undefined"){clearInterval(a);var l=window[t.servicerFiltersData].device.toLowerCase();c.some(function(p){return p.toLowerCase()===l})?d():console.log("".concat(t.name,": the block didn't pass Device filtering conditions."))}},250):d()})},e.prototype.checkTrafficSourceFilters=function(){var t=this,i,n,o,a,c=(o=(n=(i=this.options)===null||i===void 0?void 0:i.filters)===null||n===void 0?void 0:n.filter(function(d){return d.type==="traffic_source"})[0])===null||o===void 0?void 0:o.value;return new Promise(function(d){c&&c.length?a=setInterval(function(){if(typeof window[t.servicerFiltersData].trafficSource!="undefined"){clearInterval(a);var l=window[t.servicerFiltersData].trafficSource.toLowerCase();c.some(function(p){return p.toLowerCase().indexOf(l)!==-1})?d():console.log("".concat(t.name,": the block didn't pass Traffic Source filtering conditions."))}},250):d()})},e.prototype.checkTrafficTypeFilters=function(){var t=this,i,n,o,a,c=(o=(n=(i=this.options)===null||i===void 0?void 0:i.filters)===null||n===void 0?void 0:n.filter(function(d){return d.type==="traffic_type"})[0])===null||o===void 0?void 0:o.value;return new Promise(function(d){c&&c.length?a=setInterval(function(){if(typeof window[t.servicerFiltersData].trafficType!="undefined"){clearInterval(a);var l=window[t.servicerFiltersData].trafficType.toLowerCase();c.some(function(p){return p.toLowerCase()===l})?d():console.log("".concat(t.name,": the block didn't pass Traffic Type filtering conditions."))}},250):d()})},e.prototype.checkFilters=function(){var t=this;Promise.all([this.checkGeoFilters(),this.checkDeviceFilters(),this.checkTrafficSourceFilters(),this.checkTrafficTypeFilters()]).then(function(){t.start()})},e.prototype.start=function(){var t=this,i,n,o,a,c=420*1e3,d=new Date().getTime(),l=null;if(!((n=(i=window==null?void 0:window.performance)===null||i===void 0?void 0:i.getEntriesByType("navigation"))===null||n===void 0)&&n.length?l=window.performance.getEntriesByType("navigation")[0]:!((o=window==null?void 0:window.performance)===null||o===void 0)&&o.timing&&(l=window.performance.timing),l!=null&&l.loadEventEnd&&l.loadEventEnd>0){this.startEvents();return}a=setInterval(function(){if(new Date().getTime()-d>=c){clearInterval(a),console.log("".concat(t.name,": didn't load, too long site page loading process."));return}l!=null&&l.loadEventEnd&&l.loadEventEnd>0&&(clearInterval(a),t.startEvents())},150)},e.prototype.startEvents=function(){this.siteBody=document.body||document.documentElement;var t=history.state,i=this.getStartedUrl(),n=document.location.href,o=this.isAggressiveMode?this.hasStoragePage(n):i===n;o&&this.isObject(t)&&t.hasOwnProperty(this.additionalPage)&&typeof window[this.additionalPage]=="undefined"&&(window[this.additionalPage]=!0,this.buildAdditionalPage(),this.showAdditionalPage()),this.siteBody.addEventListener(this.initialEvent,this.pointerHandler),window.addEventListener("popstate",this.popstateHandler.bind(this))},e.prototype.pointerHandler=function(){this.siteBody.removeEventListener(this.initialEvent,this.pointerHandler);var t=document.location.href;if(this.isAggressiveMode){var i=this.hasStoragePage(t);i||(this.setStoragePage(t),this.pushHistoryState())}else{var n=this.getStartedUrl();n||(this.setStartedUrl(t),this.pushHistoryState())}},e.prototype.popstateHandler=function(t){var i,n,o=((n=(i=t.target)===null||i===void 0?void 0:i.history)===null||n===void 0?void 0:n.state)||t.state,a=this.getStartedUrl(),c=document.location.href,d=o===null||o===""||this.isObject(o)&&!o.hasOwnProperty(this.startedPage)&&!o.hasOwnProperty("flowcards"),l=this.isAggressiveMode?this.hasStoragePage(c):a===c;if(l&&d&&typeof window[this.additionalPage]=="undefined"){window[this.additionalPage]=!0,this.replaceHistoryState(),this.buildAdditionalPage(),this.showAdditionalPage();return}this.isObject(o)&&(!l&&!o.hasOwnProperty(this.additionalPage)&&!o.hasOwnProperty(this.startedPage)&&this.showRegularPage(),o.hasOwnProperty(this.startedPage)&&this.showStartedPage(),o.hasOwnProperty(this.additionalPage)&&this.showAdditionalPage())},e.prototype.pushHistoryState=function(){var t,i=history.state,n=(t={},t[this.startedPage]=!0,t),o=document.location;if(i===null||i==="")(this.isIosFBWebview()||this.isFBAndroid())&&!o.hash?history.pushState(n,"",o.href+"#"+this.generateHash()):history.pushState(n,"","");else if(this.isObject(i)){var a=B(B({},i),n);(this.isIosFBWebview()||this.isFBAndroid())&&!o.hash?history.pushState(a,"",o.href+"#"+this.generateHash()):history.pushState(a,"","")}else console.log("".concat(this.name,": client also uses history.state and its not an object, so module will not work."))},e.prototype.replaceHistoryState=function(){var t,i=history.state,n=(t={},t[this.additionalPage]=!0,t);i===null||i===""?history.replaceState(n,"",""):this.isObject(i)?history.replaceState(B(B({},i),n),"",""):console.log("".concat(this.name,": client also uses history.state and its not an object, so module will not work."))},e.prototype.buildAdditionalPage=function(){var t,i,n,o,a,c=(i=(t=this.options)===null||t===void 0?void 0:t.display)===null||i===void 0?void 0:i.some(function(u){return u.type==="header"}),d=(o=(n=this.options)===null||n===void 0?void 0:n.display)===null||o===void 0?void 0:o.some(function(u){return u.type==="banner"}),l=((a=this.options)===null||a===void 0?void 0:a.cross_button)||!1,p=document.createElement("div");p.classList.add(s.container),p.style.display="none",this.siteBody.appendChild(p),this.styles="\n      body.".concat(s.additionalPage," > *:not(.").concat(s.container,"),\n      html.").concat(s.additionalPage," > *:not(.").concat(s.container,") {\n        display: none !important;\n      }\n      body.").concat(s.additionalPage," .").concat(s.container,",\n      html.").concat(s.additionalPage," .").concat(s.container," {\n        display: block !important;\n      }\n      body.").concat(s.startedPage," .").concat(s.container,",\n      html.").concat(s.startedPage," .").concat(s.container," {\n        display: none !important;\n      }\n      body.").concat(s.additionalPage,",\n      html.").concat(s.additionalPage," {\n        padding-top: 0 !important;\n        margin-top: 0 !important;\n        transform: none !important;\n      }\n      .").concat(s.container," {display: none;margin: 0 auto;box-sizing: border-box;\n        padding: 15px 10px;width: 100%;max-width: 1100px;background: #fff;}\n    "),c&&this.insertHeader(p),l&&this.insertCrossButton(p),d&&this.insertPopup(p),(l||d)&&this.changeSize(p),this.addingStyles(p),this.addingWidget(p)},e.prototype.insertHeader=function(t){var i,n,o=((n=(i=this.options.display.filter(function(l){return l.type==="header"})[0])===null||i===void 0?void 0:i.options)===null||n===void 0?void 0:n.selector)||"header",a=document.querySelector(o);if(a){var c=getComputedStyle(a),d=a.cloneNode(!0);d.classList.add(s.header),t.classList.add(s.headerAdded),t.appendChild(d),this.styles=this.styles+".".concat(s.container,".").concat(s.headerAdded," {padding: 0 !important;}\n        .").concat(s.header," {margin-bottom: 10px !important;z-index: 9999999 !important;}\n        .").concat(s.container,".").concat(s.headerAdded," div[class=").concat(this.widgetContainerSelector,"] {\n        padding: 0 10px;box-sizing: border-box;}"),!this.isMobile()&&!this.isTablet()&&(t.style.maxWidth=c.width),c.position==="fixed"&&(d.style.maxWidth="100%",d.style.top="0px",d.style.zIndex="9999999",t.style.setProperty("padding-top",c.height,"important"))}},e.prototype.insertCrossButton=function(t){var i=this,n=27,o=document.createElement("div");o.classList.add(s.crossButtonContainer);var a=document.createElement("div");a.classList.add(s.crossButton),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" \n      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" \n      width="'.concat(n,'px" height="').concat(n,'px" viewBox="0 0 43 40" enable-background="new 0 0 43 40" \n      xml:space="preserve"><path fill="#4C4C4C" d="M21.5,2c-9.941,0-18,8.06-18,18.001c0,9.941,8.059,18,\n      18,18s18-8.059,18-18C39.5,10.059,31.441,2,21.5,2z"></path><path fill="#FFFFFF" d="M30.076,24.07c0.564,\n      0.564,0.564,1.482,0,2.047l-2.459,2.459c-0.564,0.564-1.48,0.564-2.047,0l-4.07-4.07  \n      l-4.07,4.07c-0.566,0.564-1.482,0.564-2.051,0l-2.455-2.459c-0.566-0.564-0.566-1.482,\n      0-2.047l4.07-4.07l-4.07-4.071  c-0.566-0.565-0.566-1.482,0-2.049l2.455-2.455c0.568-0.566,\n      1.484-0.566,2.051,0l4.07,4.07l4.07-4.07  c0.566-0.566,1.482-0.566,2.047,0l2.459,2.455c0.564,\n      0.566,0.564,1.483,0,2.049L26.006,20L30.076,24.07z"></path></svg>'),this.styles=this.styles+".".concat(s.crossButtonContainer," {display: block !important;\n      margin: 10px auto !important;} .").concat(s.crossButton," {display: block !important;\n      width: ").concat(n,"px !important;height: ").concat(n,"px !important;max-width: ").concat(n,"px !important;\n      max-height: ").concat(n,"px !important;cursor: pointer;border-radius: 50%;overflow: hidden;\n      margin-left: auto;} .").concat(s.crossButton," svg {max-width: ").concat(n,"px !important; \n      max-height: ").concat(n,"px !important;}"),t.appendChild(o),o.appendChild(a),a.addEventListener("click",function(){history.back(),i.showStartedPage()})},e.prototype.insertPopup=function(t){var i=this,n,o=localStorage.getItem(this.storagePopupCloseTime),a=24*60*60*1e3,c=o&&new Date().getTime()-Number(o)>=a;if(!o||c){var d=(n=this.options.display.filter(function(L){return L.type==="banner"})[0])===null||n===void 0?void 0:n.options,l=(d==null?void 0:d.bg_color)||"#0279f5",p=(d==null?void 0:d.text_color)||"#ffffff",u=(d==null?void 0:d.text)||this.getTranslation("[INFORMER_BACK_BUTTON_BANNER_TEXT]"),h=document.createElement("div");h.classList.add(s.popup),t.classList.add(s.popupAdded),h.innerHTML='<div class="'.concat(s.popupInner,'">\n        <div class="').concat(s.popupText,'">').concat(u,'</div><div class="').concat(s.popupTriangle,'"></div>\n        <div class="').concat(s.popupCloseBtn,'"><svg width="11" height="11" viewBox="0 0 11 11">\n        <path fill="').concat(p,'" fill-rule="evenodd" d="M10.34.038L5.5 4.878.66.038.038.66l4.84 \n        4.84-4.84 4.84.622.622 4.84-4.84 4.84 4.84.622-.622-4.84-4.84 4.84-4.84z"></path></svg></div></div>'),t.appendChild(h),this.styles=this.styles+".".concat(s.popup," {display: block;margin: 0 auto;width: 100%;\n        height: 50px;overflow: hidden;position: relative;z-index: 999999;}\n        .").concat(s.popupInner," {position: relative;display: flex;align-items: center;\n        justify-content: space-between;margin: 0 auto;width: 100%;height: 40px;text-align: center;\n        transition: all 0.7s ease;opacity: 0;transform: translateY(-150px);background: ").concat(l,";}\n        .").concat(s.popup,".").concat(s.popupShowed," .").concat(s.popupInner," {transform: translateY(0px);\n        opacity: 1;}.").concat(s.popup,".").concat(s.popupClosed," .").concat(s.popupInner," {\n        display: none;}.").concat(s.popup,".").concat(s.popupClosed," {z-index: -1;}\n        .").concat(s.popupText," {box-sizing: border-box;padding: 10px;width: 100%;height: 100%;\n        display: flex;align-items: center;justify-content: center;font-family: Helvetica, Arial, sans-serif;\n        font-size: 16px;line-height: 1;font-weight: 400;color: ").concat(p,";}\n        .").concat(s.popupTriangle," {display: block;position: absolute;bottom: -10px;left: 50%;\n        transform: translateX(-50%);width: 0;height: 0;border-left: 12px solid transparent;\n        border-right: 12px solid transparent;border-top: 12px solid;color: ").concat(l,";}\n        .").concat(s.popupCloseBtn," {display: flex;align-items: center;justify-content: center;\n        width: 15px;height: 15px;margin-right: 10px;color: ").concat(p,";cursor: pointer;}\n        .").concat(s.container,".").concat(s.popupAdded," div[class=").concat(this.widgetContainerSelector,"] {\n        margin-top: -40px;}@media (max-width: 480px) {.").concat(s.popupText," {font-size: 13px;}}");var _=document.querySelector(".".concat(s.popupCloseBtn));_&&_.addEventListener("click",function(){h.classList.add(s.popupClosed),localStorage.setItem(i.storagePopupCloseTime,String(new Date().getTime()))})}},e.prototype.changeSize=function(t){var i=this,n=t.querySelector(".".concat(s.popup)),o=t.querySelector(".".concat(s.crossButtonContainer)),a,c=90*1e3,d=new Date().getTime();a=setInterval(function(){if(new Date().getTime()-d>=c){clearInterval(a),console.log("".concat(i.name,": additional Smart widget didn't load."));return}var l=t.querySelector("div[class=".concat(i.widgetContainerSelector,"]"));if(l&&l.children.length){var p=l.children[0],u=void 0,h;if(p.shadowRoot&&p.shadowRoot.children.length?u=p.shadowRoot.children:p.children.length&&(u=p.children),u!=null&&u.length&&[].slice.call(u).forEach(function(L){L.getElementsByClassName("mgbox")[0]&&(h=L.getElementsByClassName("mgbox")[0])}),h){clearInterval(a);var _=getComputedStyle(h).width;n&&(n.style.maxWidth=_,n.classList.add(s.popupShowed)),o&&(o.style.maxWidth=_),window.addEventListener("resize",function(){n&&(n.style.maxWidth=getComputedStyle(h).width),o&&(o.style.maxWidth=getComputedStyle(h).width)})}}},150)},e.prototype.addingStyles=function(t){var i=document.createElement("style");i.setAttribute("id","mgAdditionalStyles"),i.appendChild(document.createTextNode(this.styles)),t.appendChild(i)},e.prototype.addingWidget=function(t){var i=this;if(this.options.singleJsUrl){var n=this.getSingleJsController(this.options.siteId),o=document.createElement("div"),a=document.createElement("div");a.dataset.type="_mgwidget",a.dataset.widgetId=String(this.widgetId),o.classList.add(this.widgetContainerSelector),o.appendChild(a),t.appendChild(o),n&&n.load()}else new U.AdditionalWidget([{id:this.widgetId,urls:{es5:this.options.widgetPathES5.split(".").map(function(c,d,l){return d===l.length-3?i.widgetId:c}).join("."),es6:this.options.widgetPathES6.split(".").map(function(c,d,l){return d===l.length-3?i.widgetId:c}).join(".")},widgetDivId:"M".concat(this.options.siteId,"ScriptRootC").concat(this.widgetId),searchSelector:".".concat(s.container),insertTo:"into"}],this.isSupportES6()?U.ScriptUrlType.es6:U.ScriptUrlType.es5)},e.prototype.showAdditionalPage=function(){this.siteBody.classList.remove(s.startedPage),this.siteBody.classList.add(s.additionalPage)},e.prototype.showStartedPage=function(){this.siteBody.classList.remove(s.additionalPage),this.siteBody.classList.add(s.startedPage)},e.prototype.showRegularPage=function(){this.siteBody.classList.remove(s.startedPage),this.siteBody.classList.remove(s.additionalPage)},e.prototype.getStartedUrl=function(){return sessionStorage.getItem(this.storageStartUrl)},e.prototype.setStartedUrl=function(t){sessionStorage.setItem(this.storageStartUrl,t)},e.prototype.hasStoragePage=function(t){var i=JSON.parse(sessionStorage.getItem(this.storagePagesList))||[];return i.some(function(n){return n===t})},e.prototype.setStoragePage=function(t){var i=JSON.parse(sessionStorage.getItem(this.storagePagesList))||[];i.push(t),sessionStorage.setItem(this.storagePagesList,JSON.stringify(i))},e.prototype.getTranslation=function(t){var i=this.options.translations;return t.search(/^\[\S*\]$/g)===0?i[t]?i[t]:"":t},e}(Q.AppUtilsBlock);S.BackButtonBlock=Z});var tt=k(function(N){v();f();g();m();y();w();b();Object.defineProperty(N,"__esModule",{value:!0});var ie=R(),ne=z(),oe=H(),ae=J();(function(){var r=n(),e=r?"https://jsc.mgid.com/m/g/mgid.kienthuc.net.vn.1031672.es6.js":"https://jsc.mgid.com/m/g/mgid.kienthuc.net.vn.1031672.es5.js";c(),l(e),a(),d();for(var t=["https://servicer.mgid.com"],i=0;i<t.length;i++)o(t[i]);function n(){try{return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"),!0}catch(p){return!1}}function o(p){var u=document.createElement("link");u.rel="preconnect",u.href=p,document.head?document.head.appendChild(u):document.body.appendChild(u)}function a(){var p=JSON.parse("[]")}function c(){if(0)var p}function d(){if(0)var p}function l(p){var u,h=document.createElement("script");h.async=!0,h.charset="utf-8",h.src=p,h.crossOrigin="anonymous",(u=window.performance)===null||u===void 0||u.mark("main_script_start_load",{detail:{_mgwidget:1031672}}),document.head?document.head.appendChild(h):document.body.appendChild(h)}})()});tt();})();
