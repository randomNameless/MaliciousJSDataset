"undefined"==typeof jwplayer&&(jwplayer=function(f){if(jwplayer.api)return jwplayer.api.selectPlayer(f)},jwplayer.version="6.11.4920",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(){var f={},c=Array.prototype,k=Object.prototype,d=c.slice,e=c.concat,b=k.toString,h=k.hasOwnProperty,n=c.map,a=c.forEach,g=c.filter,m=c.some,p=c.indexOf,k=Array.isArray,l=Object.keys,j=function(a){if(a instanceof j)return a;
if(!(this instanceof j))return new j(a)},t=j.each=j.forEach=function(r,g,b){if(null==r)return r;if(a&&r.forEach===a)r.forEach(g,b);else if(r.length===+r.length)for(var d=0,m=r.length;d<m;d++){if(g.call(b,r[d],d,r)===f)return}else for(var c=j.keys(r),d=0,m=c.length;d<m;d++)if(g.call(b,r[c[d]],c[d],r)===f)return;return r};j.map=j.collect=function(a,j,g){var b=[];if(null==a)return b;if(n&&a.map===n)return a.map(j,g);t(a,function(a,r,d){b.push(j.call(g,a,r,d))});return b};j.find=j.detect=function(a,j,
g){var b;v(a,function(a,r,d){if(j.call(g,a,r,d))return b=a,!0});return b};j.filter=j.select=function(a,j,b){var d=[];if(null==a)return d;if(g&&a.filter===g)return a.filter(j,b);t(a,function(a,g,r){j.call(b,a,g,r)&&d.push(a)});return d};var v=j.some=j.any=function(a,g,b){g||(g=j.identity);var d=!1;if(null==a)return d;if(m&&a.some===m)return a.some(g,b);t(a,function(a,j,r){if(d||(d=g.call(b,a,j,r)))return f});return!!d};j.size=function(a){return null==a?0:a.length===+a.length?a.length:j.keys(a).length};
j.after=function(a,j){return function(){if(1>--a)return j.apply(this,arguments)}};j.sortedIndex=function(a,g,b,d){b=null==b?j.identity:j.isFunction(b)?b:j.property(b);g=b.call(d,g);for(var m=0,c=a.length;m<c;){var l=m+c>>>1;b.call(d,a[l])<g?m=l+1:c=l}return m};j.find=j.detect=function(a,j,g){var b;v(a,function(a,d,m){if(j.call(g,a,d,m))return b=a,!0});return b};v=j.some=j.any=function(a,g,b){g||(g=j.identity);var d=!1;if(null==a)return d;if(m&&a.some===m)return a.some(g,b);t(a,function(a,j,m){if(d||
(d=g.call(b,a,j,m)))return f});return!!d};j.contains=j.include=function(a,g){if(null==a)return!1;a.length!==+a.length&&(a=j.values(a));return 0<=j.indexOf(a,g)};j.difference=function(a){var g=e.apply(c,d.call(arguments,1));return j.filter(a,function(a){return!j.contains(g,a)})};j.without=function(a){return j.difference(a,d.call(arguments,1))};j.indexOf=function(a,g,b){if(null==a)return-1;var d=0,m=a.length;if(b)if("number"==typeof b)d=0>b?Math.max(0,m+b):b;else return d=j.sortedIndex(a,g),a[d]===
g?d:-1;if(p&&a.indexOf===p)return a.indexOf(g,b);for(;d<m;d++)if(a[d]===g)return d;return-1};j.memoize=function(a,g){var b={};g||(g=j.identity);return function(){var d=g.apply(this,arguments);return j.has(b,d)?b[d]:b[d]=a.apply(this,arguments)}};j.keys=function(a){if(!j.isObject(a))return[];if(l)return l(a);var g=[],b;for(b in a)j.has(a,b)&&g.push(b);return g};j.pick=function(a){var j={},g=e.apply(c,d.call(arguments,1));t(g,function(g){g in a&&(j[g]=a[g])});return j};j.isArray=k||function(a){return"[object Array]"==
b.call(a)};j.isObject=function(a){return a===Object(a)};t("Arguments Function String Number Date RegExp".split(" "),function(a){j["is"+a]=function(g){return b.call(g)=="[object "+a+"]"}});j.isArguments(arguments)||(j.isArguments=function(a){return!(!a||!j.has(a,"callee"))});"function"!==typeof/./&&(j.isFunction=function(a){return"function"===typeof a});j.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};j.isNaN=function(a){return j.isNumber(a)&&a!=+a};j.isBoolean=function(a){return!0===
a||!1===a||"[object Boolean]"==b.call(a)};j.isNull=function(a){return null===a};j.isUndefined=function(a){return void 0===a};j.has=function(a,g){return h.call(a,g)};j.identity=function(a){return a};j.constant=function(a){return function(){return a}};j.property=function(a){return function(g){return g[a]}};this._=j}.call(jwplayer),function(f){function c(a){return function(){return h(a)}}function k(a,g,b,c,l){return function(){var j,e;if(l)b(a);else{try{if(j=a.responseXML)if(e=j.firstChild,j.lastChild&&
"parsererror"===j.lastChild.nodeName){c&&c("Invalid XML",g,a);return}}catch(h){}if(j&&e)return b(a);(j=d.parseXML(a.responseText))&&j.firstChild?(a=d.extend({},a,{responseXML:j}),b(a)):c&&c(a.responseText?"Invalid XML":g,g,a)}}}var d=f.utils={},e=f._;d.exists=function(a){switch(typeof a){case "string":return 0<a.length;case "object":return null!==a;case "undefined":return!1}return!0};d.styleDimension=function(a){return a+(0<a.toString().indexOf("%")?"":"px")};d.getAbsolutePath=function(a,g){d.exists(g)||
(g=document.location.href);if(d.exists(a)){var b;if(d.exists(a)){b=a.indexOf("://");var c=a.indexOf("?");b=0<b&&(0>c||c>b)}else b=void 0;if(b)return a;b=g.substring(0,g.indexOf("://")+3);var c=g.substring(b.length,g.indexOf("/",b.length+1)),l;0===a.indexOf("/")?l=a.split("/"):(l=g.split("?")[0],l=l.substring(b.length+c.length+1,l.lastIndexOf("/")),l=l.split("/").concat(a.split("/")));for(var j=[],e=0;e<l.length;e++)l[e]&&(d.exists(l[e])&&"."!==l[e])&&(".."===l[e]?j.pop():j.push(l[e]));return b+c+
"/"+j.join("/")}};d.extend=function(){var a=Array.prototype.slice.call(arguments,0);if(1<a.length){for(var g=a[0],b=function(a,b){void 0!==b&&null!==b&&(g[a]=b)},c=1;c<a.length;c++)d.foreach(a[c],b);return g}return null};var b=window.console=window.console||{log:function(){}};d.log=function(){var a=Array.prototype.slice.call(arguments,0);"object"===typeof b.log?b.log(a):b.log.apply(b,a)};var h=e.memoize(function(a){return null!==navigator.userAgent.toLowerCase().match(a)});d.isFF=c(/firefox/i);d.isChrome=
c(/chrome/i);d.isIPod=c(/iP(hone|od)/i);d.isIPad=c(/iPad/i);d.isSafari602=c(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);d.isIETrident=function(a){return a?(a=parseFloat(a).toFixed(1),h(RegExp("trident/.+rv:\\s*"+a,"i"))):h(/trident/i)};d.isMSIE=function(a){return a?(a=parseFloat(a).toFixed(1),h(RegExp("msie\\s*"+a,"i"))):h(/msie/i)};d.isIE=function(a){return a?(a=parseFloat(a).toFixed(1),11<=a?d.isIETrident(a):d.isMSIE(a)):d.isMSIE()||d.isIETrident()};d.isSafari=function(){return h(/safari/i)&&
!h(/chrome/i)&&!h(/chromium/i)&&!h(/android/i)};d.isIOS=function(a){return a?h(RegExp("iP(hone|ad|od).+\\sOS\\s"+a,"i")):h(/iP(hone|ad|od)/i)};d.isAndroidNative=function(a){return d.isAndroid(a,!0)};d.isAndroid=function(a,b){return b&&h(/chrome\/[123456789]/i)&&!h(/chrome\/18/)?!1:a?(d.isInt(a)&&!/\./.test(a)&&(a=""+a+"."),h(RegExp("Android\\s*"+a,"i"))):h(/Android/i)};d.isMobile=function(){return d.isIOS()||d.isAndroid()};d.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName};
d.saveCookie=function(a,b){document.cookie="jwplayer."+a+"\x3d"+b+"; path\x3d/"};d.getCookies=function(){for(var a={},b=document.cookie.split("; "),d=0;d<b.length;d++){var c=b[d].split("\x3d");0===c[0].indexOf("jwplayer.")&&(a[c[0].substring(9,c[0].length)]=c[1])}return a};d.isInt=function(a){return 0===parseFloat(a)%1};d.typeOf=function(a){if(null===a)return"null";var b=typeof a;return"object"===b&&e.isArray(a)?"array":b};d.translateEventResponse=function(a,b){var c=d.extend({},b);if(a===f.events.JWPLAYER_FULLSCREEN&&
!c.fullscreen)c.fullscreen="true"===c.message,delete c.message;else if("object"===typeof c.data){var e=c.data;delete c.data;c=d.extend(c,e)}else"object"===typeof c.metadata&&d.deepReplaceKeyName(c.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);d.foreach(["position","duration","offset"],function(a,b){c[b]&&(c[b]=Math.round(1E3*c[b])/1E3)});return c};d.flashVersion=function(){if(d.isAndroid())return 0;var a=navigator.plugins,b;try{if("undefined"!==a&&(b=a["Shockwave Flash"]))return parseInt(b.description.replace(/\D+(\d+)\..*/,
"$1"),10)}catch(c){}if("undefined"!==typeof window.ActiveXObject)try{if(b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(b.GetVariable("$version").split(" ")[1].split(",")[0],10)}catch(e){}return 0};d.getScriptPath=function(a){for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var c=b[d].src;if(c&&0<=c.indexOf(a))return c.substr(0,c.indexOf(a))}return""};d.deepReplaceKeyName=function(a,b,c){switch(f.utils.typeOf(a)){case "array":for(var e=0;e<a.length;e++)a[e]=
f.utils.deepReplaceKeyName(a[e],b,c);break;case "object":d.foreach(a,function(d,j){var e;if(b instanceof Array&&c instanceof Array){if(b.length!==c.length)return;e=b}else e=[b];for(var h=d,r=0;r<e.length;r++)h=h.replace(RegExp(b[r],"g"),c[r]);a[h]=f.utils.deepReplaceKeyName(j,b,c);d!==h&&delete a[d]})}return a};var n=d.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};d.getPluginPathType=function(a){if("string"===typeof a){a=a.split("?")[0];var b=a.indexOf("://");if(0<b)return n.ABSOLUTE;var c=a.indexOf("/");
a=d.extension(a);return 0>b&&0>c&&(!a||!isNaN(a))?n.CDN:n.RELATIVE}};d.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};d.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")};d.isYouTube=function(a,b){return"youtube"===b||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)};d.youTubeID=function(a){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(a).slice(1).join("").replace("?","")}catch(b){return""}};d.isRtmp=function(a,b){return 0===
a.indexOf("rtmp")||"rtmp"===b};d.foreach=function(a,b){var c,e;for(c in a)"function"===d.typeOf(a.hasOwnProperty)?a.hasOwnProperty(c)&&(e=a[c],b(c,e)):(e=a[c],b(c,e))};d.isHTTPS=function(){return 0===window.location.href.indexOf("https")};d.repo=function(){var a="http://p.jwpcdn.com/"+f.version.split(/\W/).splice(0,2).join("/")+"/";try{d.isHTTPS()&&(a=a.replace("http://","https://ssl."))}catch(b){}return a};d.versionCheck=function(a){a=("0"+a).split(/\W/);var b=f.version.split(/\W/),d=parseFloat(a[0]),
c=parseFloat(b[0]);return d>c||d===c&&parseFloat("0"+a[1])>parseFloat(b[1])?!1:!0};d.ajax=function(a,b,c,e){var h,j=!1;0<a.indexOf("#")&&(a=a.replace(/#.*$/,""));if(a&&0<=a.indexOf("://")&&a.split("/")[2]!==window.location.href.split("/")[2]&&d.exists(window.XDomainRequest))h=new window.XDomainRequest,h.onload=k(h,a,b,c,e),h.ontimeout=h.onprogress=function(){},h.timeout=5E3;else if(d.exists(window.XMLHttpRequest)){var f=h=new window.XMLHttpRequest,n=a;h.onreadystatechange=function(){if(4===f.readyState)switch(f.status){case 200:k(f,
n,b,c,e)();break;case 404:c("File not found",n,f)}}}else return c&&c("",a,h),h;h.overrideMimeType&&h.overrideMimeType("text/xml");var r=a,q=h;h.onerror=function(){c("Error loading file",r,q)};try{h.open("GET",a,!0)}catch(u){j=!0}setTimeout(function(){if(j)c&&c(a,a,h);else try {
    h.withCredentials = false; /// fix by hand because http://p.jwpcdn.com/6/11/vast.js is setting all to withCredentials true - https://cinchcast.jira.com/browse/BTRCUS-2248
        h.send(); 
    }catch(b){c&&c(a,a,h)}},0);return h};d.parseXML=function(a){var b;try{if(window.DOMParser){if(b=(new window.DOMParser).parseFromString(a,"text/xml"),b.childNodes&&b.childNodes.length&&"parsererror"===b.childNodes[0].firstChild.nodeName)return}else b=
new window.ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)}catch(c){return}return b};d.between=function(a,b,c){return Math.max(Math.min(a,c),b)};d.seconds=function(a){if(e.isNumber(a))return a;a=a.replace(",",".");var b=a.split(":"),c=0;"s"===a.slice(-1)?c=parseFloat(a):"m"===a.slice(-1)?c=60*parseFloat(a):"h"===a.slice(-1)?c=3600*parseFloat(a):1<b.length?(c=parseFloat(b[b.length-1]),c+=60*parseFloat(b[b.length-2]),3===b.length&&(c+=3600*parseFloat(b[b.length-3]))):c=parseFloat(a);
return c};d.serialize=function(a){return null===a?null:"true"===a.toString().toLowerCase()?!0:"false"===a.toString().toLowerCase()?!1:isNaN(Number(a))||5<a.length||0===a.length?a:Number(a)};d.addClass=function(a,b){var c=e.isString(a.className)?a.className.split(" "):[],h=e.isArray(b)?b:b.split(" ");e.each(h,function(a){e.contains(c,a)||c.push(a)});a.className=d.trim(c.join(" "))};d.removeClass=function(a,b){var c=e.isString(a.className)?a.className.split(" "):[],h=e.isArray(b)?b:b.split(" ");a.className=
d.trim(e.difference(c,h).join(" "))};d.indexOf=e.indexOf;d.noop=function(){};d.canCast=function(){var a=f.cast;return!(!a||!e.isFunction(a.available)||!a.available())}}(jwplayer),function(f){function c(a){var b=document.createElement("style");a&&b.appendChild(document.createTextNode(a));b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);return b}function k(a,c,d){if(!b.exists(c))return"";d=d?" !important":"";return"string"===typeof c&&isNaN(c)?/png|gif|jpe?g/i.test(c)&&0>c.indexOf("url")?
"url("+c+")":c+d:0===c||"z-index"===a||"opacity"===a?""+c+d:/color/i.test(a)?"#"+b.pad(c.toString(16).replace(/^0x/i,""),6)+d:Math.ceil(c)+"px"+d}function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],g,e;if(void 0!==d&&null!==d)for(g in b){e=g;e=e.split("-");for(var h=1;h<e.length;h++)e[h]=e[h].charAt(0).toUpperCase()+e[h].slice(1);e=e.join("");d.style[e]!==b[g]&&(d.style[e]=b[g])}}}function e(b){var c=h[b].sheet,d,g,e;if(c){d=c.cssRules;g=m[b];e=b;var f=a[e];e+=" { ";for(var n in f)e+=n+": "+f[n]+
"; ";e+="}";if(void 0!==g&&g<d.length&&d[g].selectorText===b){if(e===d[g].cssText)return;c.deleteRule(g)}else g=d.length,m[b]=g;try{c.insertRule(e,g)}catch(k){}}}var b=f.utils,h={},n,a={},g=null,m={};b.cssKeyframes=function(a,b){var d=h.keyframes;d||(d=c(),h.keyframes=d);var d=d.sheet,e="@keyframes "+a+" { "+b+" }";try{d.insertRule(e,d.cssRules.length)}catch(g){}e=e.replace(/(keyframes|transform)/g,"-webkit-$1");try{d.insertRule(e,d.cssRules.length)}catch(f){}};var p=b.css=function(b,d,f){a[b]||(a[b]=
{});var m=a[b];f=f||!1;var r=!1,p,u;for(p in d)u=k(p,d[p],f),""!==u?u!==m[p]&&(m[p]=u,r=!0):void 0!==m[p]&&(delete m[p],r=!0);if(r){if(!h[b]){d=n&&n.sheet&&n.sheet.cssRules&&n.sheet.cssRules.length||0;if(!n||5E4<d)n=c();h[b]=n}null!==g?g.styleSheets[b]=a[b]:e(b)}};p.style=function(a,b,c){if(!(void 0===a||null===a)){void 0===a.length&&(a=[a]);var e={},h;for(h in b)e[h]=k(h,b[h]);if(null!==g&&!c){b=(b=a.__cssRules)||{};for(var f in e)b[f]=e[f];a.__cssRules=b;0>g.elements.indexOf(a)&&g.elements.push(a)}else d(a,
e)}};p.block=function(a){null===g&&(g={id:a,styleSheets:{},elements:[]})};p.unblock=function(a){if(g&&(!a||g.id===a)){for(var b in g.styleSheets)e(b);for(a=0;a<g.elements.length;a++)b=g.elements[a],d(b,b.__cssRules);g=null}};b.clearCss=function(b){for(var c in a)0<=c.indexOf(b)&&delete a[c];for(var d in h)0<=d.indexOf(b)&&e(d)};b.transform=function(a,b){var c={};b=b||"";c.transform=b;c["-webkit-transform"]=b;c["-ms-transform"]=b;c["-moz-transform"]=b;c["-o-transform"]=b;"string"===typeof a?p(a,c):
p.style(a,c)};b.dragStyle=function(a,b){p(a,{"-webkit-user-select":b,"-moz-user-select":b,"-ms-user-select":b,"-webkit-user-drag":b,"user-select":b,"user-drag":b})};b.transitionStyle=function(a,b){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||p(a,{"-webkit-transition":b,"-moz-transition":b,"-o-transition":b,transition:b})};b.rotate=function(a,c){b.transform(a,"rotate("+c+"deg)")};b.rgbHex=function(a){a=String(a).replace("#","");3===a.length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);return"#"+a.substr(-6)};
b.hexToRgba=function(a,b){var c="rgb",d=[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)];void 0!==b&&100!==b&&(c+="a",d.push(b/100));return c+"("+d.join(",")+")"}}(jwplayer),function(f){var c=f.foreach,k={mp4:"video/mp4",ogg:"video/ogg",oga:"audio/ogg",vorbis:"audio/ogg",webm:"video/webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},d={mp4:k.mp4,f4v:k.mp4,m4v:k.mp4,mov:k.mp4,m4a:k.aac,f4a:k.aac,aac:k.aac,mp3:k.mp3,ogv:k.ogg,ogg:k.ogg,oga:k.vorbis,
vorbis:k.vorbis,webm:k.webm,m3u8:k.hls,m3u:k.hls,hls:k.hls},e=f.extensionmap={};c(d,function(b,c){e[b]={html5:c}});c({flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},function(b,c){e[b]||(e[b]={});e[b].flash=c});e.types=k;e.mimeType=function(b){var d;c(k,function(c,a){!d&&a==b&&(d=c)});return d};e.extType=function(b){return e.mimeType(d[b])}}(jwplayer.utils),function(f){var c=f.loaderstatus={NEW:0,LOADING:1,
ERROR:2,COMPLETE:3},k=document;f.scriptloader=function(d){function e(b){a=c.ERROR;n.sendEvent(h.ERROR,b)}function b(b){a=c.COMPLETE;n.sendEvent(h.COMPLETE,b)}var h=jwplayer.events,n=f.extend(this,new h.eventdispatcher),a=c.NEW;this.load=function(){if(a==c.NEW){var g=f.scriptloader.loaders[d];if(g&&(a=g.getStatus(),2>a)){g.addEventListener(h.ERROR,e);g.addEventListener(h.COMPLETE,b);return}var n=k.createElement("script");n.addEventListener?(n.onload=b,n.onerror=e):n.readyState&&(n.onreadystatechange=
function(a){("loaded"==n.readyState||"complete"==n.readyState)&&b(a)});k.getElementsByTagName("head")[0].appendChild(n);n.src=d;a=c.LOADING;f.scriptloader.loaders[d]=this}};this.getStatus=function(){return a}};f.scriptloader.loaders={}}(jwplayer.utils),function(f){f.trim=function(c){return c.replace(/^\s+|\s+$/g,"")};f.pad=function(c,f,d){for(d||(d="0");c.length<f;)c=d+c;return c};f.xmlAttribute=function(c,f){for(var d=0;d<c.attributes.length;d++)if(c.attributes[d].name&&c.attributes[d].name.toLowerCase()===
f.toLowerCase())return c.attributes[d].value.toString();return""};f.extension=function(c){if(!c||"rtmp"===c.substr(0,4))return"";var f;f=-1<c.indexOf("(format\x3dm3u8-")?"m3u8":!1;if(f)return f;c=c.substring(c.lastIndexOf("/")+1,c.length).split("?")[0].split("#")[0];if(-1<c.lastIndexOf("."))return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()};f.stringToColor=function(c){c=c.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3===c.length&&(c=c.charAt(0)+c.charAt(0)+c.charAt(1)+c.charAt(1)+c.charAt(2)+
c.charAt(2));return parseInt(c,16)}}(jwplayer.utils),function(f){var c="touchmove",k="touchstart";f.touch=function(d){function e(d){d.type===k?(a=!0,m=h(l.DRAG_START,d)):d.type===c?a&&(p||(b(l.DRAG_START,d,m),p=!0),b(l.DRAG,d)):(a&&(p?b(l.DRAG_END,d):(d.cancelBubble=!0,b(l.TAP,d))),a=p=!1,m=null)}function b(a,b,c){if(g[a]&&(b.preventManipulation&&b.preventManipulation(),b.preventDefault&&b.preventDefault(),b=c?c:h(a,b)))g[a](b)}function h(a,b){var c=null;b.touches&&b.touches.length?c=b.touches[0]:
b.changedTouches&&b.changedTouches.length&&(c=b.changedTouches[0]);if(!c)return null;var d=n.getBoundingClientRect(),c={type:a,target:n,x:c.pageX-window.pageXOffset-d.left,y:c.pageY,deltaX:0,deltaY:0};a!==l.TAP&&m&&(c.deltaX=c.x-m.x,c.deltaY=c.y-m.y);return c}var n=d,a=!1,g={},m=null,p=!1,l=f.touchEvents;document.addEventListener(c,e);document.addEventListener("touchend",function(c){a&&p&&b(l.DRAG_END,c);a=p=!1;m=null});document.addEventListener("touchcancel",e);d.addEventListener(k,e);d.addEventListener("touchend",
e);this.addEventListener=function(a,b){g[a]=b};this.removeEventListener=function(a){delete g[a]};return this}}(jwplayer.utils),function(f){f.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}}(jwplayer.utils),function(f){f.key=function(c){var k,d,e;this.edition=function(){return e&&e.getTime()<(new Date).getTime()?"invalid":k};this.token=function(){return d};f.exists(c)||(c="");try{c=f.tea.decrypt(c,"36QXq4W@GSBV^teR");var b=c.split("/");
(k=b[0])?/^(free|pro|premium|enterprise|ads)$/i.test(k)?(d=b[1],b[2]&&0<parseInt(b[2])&&(e=new Date,e.setTime(String(b[2])))):k="invalid":k="free"}catch(h){k="invalid"}}}(jwplayer.utils),function(f){var c=f.tea={};c.encrypt=function(e,b){if(0==e.length)return"";var h=c.strToLongs(d.encode(e));1>=h.length&&(h[1]=0);for(var f=c.strToLongs(d.encode(b).slice(0,16)),a=h.length,g=h[a-1],m=h[0],p,l=Math.floor(6+52/a),j=0;0<l--;){j+=2654435769;p=j>>>2&3;for(var t=0;t<a;t++)m=h[(t+1)%a],g=(g>>>5^m<<2)+(m>>>
3^g<<4)^(j^m)+(f[t&3^p]^g),g=h[t]+=g}h=c.longsToStr(h);return k.encode(h)};c.decrypt=function(e,b){if(0==e.length)return"";for(var h=c.strToLongs(k.decode(e)),f=c.strToLongs(d.encode(b).slice(0,16)),a=h.length,g=h[a-1],m=h[0],p,l=2654435769*Math.floor(6+52/a);0!=l;){p=l>>>2&3;for(var j=a-1;0<=j;j--)g=h[0<j?j-1:a-1],g=(g>>>5^m<<2)+(m>>>3^g<<4)^(l^m)+(f[j&3^p]^g),m=h[j]-=g;l-=2654435769}h=c.longsToStr(h);h=h.replace(/\0+$/,"");return d.decode(h)};c.strToLongs=function(c){for(var b=Array(Math.ceil(c.length/
4)),d=0;d<b.length;d++)b[d]=c.charCodeAt(4*d)+(c.charCodeAt(4*d+1)<<8)+(c.charCodeAt(4*d+2)<<16)+(c.charCodeAt(4*d+3)<<24);return b};c.longsToStr=function(c){for(var b=Array(c.length),d=0;d<c.length;d++)b[d]=String.fromCharCode(c[d]&255,c[d]>>>8&255,c[d]>>>16&255,c[d]>>>24&255);return b.join("")};var k={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(c,b){var h,f,a,g,m=[],p="",l,j,t=k.code;j=("undefined"==typeof b?0:b)?d.encode(c):c;l=j.length%3;if(0<l)for(;3>
l++;)p+="\x3d",j+="\x00";for(l=0;l<j.length;l+=3)h=j.charCodeAt(l),f=j.charCodeAt(l+1),a=j.charCodeAt(l+2),g=h<<16|f<<8|a,h=g>>18&63,f=g>>12&63,a=g>>6&63,g&=63,m[l/3]=t.charAt(h)+t.charAt(f)+t.charAt(a)+t.charAt(g);m=m.join("");return m=m.slice(0,m.length-p.length)+p},decode:function(c,b){b="undefined"==typeof b?!1:b;var h,f,a,g,m,p=[],l,j=k.code;l=b?d.decode(c):c;for(var t=0;t<l.length;t+=4)h=j.indexOf(l.charAt(t)),f=j.indexOf(l.charAt(t+1)),g=j.indexOf(l.charAt(t+2)),m=j.indexOf(l.charAt(t+3)),
a=h<<18|f<<12|g<<6|m,h=a>>>16&255,f=a>>>8&255,a&=255,p[t/4]=String.fromCharCode(h,f,a),64==m&&(p[t/4]=String.fromCharCode(h,f)),64==g&&(p[t/4]=String.fromCharCode(h));g=p.join("");return b?d.decode(g):g}},d={encode:function(c){c=c.replace(/[\u0080-\u07ff]/g,function(b){b=b.charCodeAt(0);return String.fromCharCode(192|b>>6,128|b&63)});return c=c.replace(/[\u0800-\uffff]/g,function(b){b=b.charCodeAt(0);return String.fromCharCode(224|b>>12,128|b>>6&63,128|b&63)})},decode:function(c){c=c.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
function(b){b=(b.charCodeAt(0)&15)<<12|(b.charCodeAt(1)&63)<<6|b.charCodeAt(2)&63;return String.fromCharCode(b)});return c=c.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(b){b=(b.charCodeAt(0)&31)<<6|b.charCodeAt(1)&63;return String.fromCharCode(b)})}}}(jwplayer.utils),function(f){f.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",
JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",
JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_AUDIO_TRACKS:"jwplayerAudioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"jwplayerAudioTrackChanged",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_CAPTIONS_LOADED:"jwplayerCaptionsLoaded",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",
state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_PROVIDER_CLICK:"jwplayerProviderClick",JWPLAYER_VIEW_TAB_FOCUS:"jwplayerViewTabFocus",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",
JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions",JWPLAYER_AD_SKIPPED:"jwplayerAdSkipped",JWPLAYER_AD_PLAY:"jwplayerAdPlay",JWPLAYER_AD_PAUSE:"jwplayerAdPause",JWPLAYER_AD_META:"jwplayerAdMeta",JWPLAYER_CAST_AVAILABLE:"jwplayerCastAvailable",JWPLAYER_CAST_SESSION:"jwplayerCastSession",JWPLAYER_CAST_AD_CHANGED:"jwplayerCastAdChanged"}}(jwplayer),
function(f){var c=f.utils;f.events.eventdispatcher=function(k,d){function e(b,a,d){if(b)for(var e=0;e<b.length;e++){var h=b[e];if(h){null!==h.count&&0===--h.count&&delete b[e];try{h.listener(a)}catch(f){c.log('Error handling "'+d+'" event listener ['+e+"]: "+f.toString(),h.listener,a)}}}}var b,h;this.resetEventListeners=function(){b={};h=[]};this.resetEventListeners();this.addEventListener=function(d,a,g){try{c.exists(b[d])||(b[d]=[]),"string"===c.typeOf(a)&&(a=(new Function("return "+a))()),b[d].push({listener:a,
count:g||null})}catch(e){c.log("error",e)}return!1};this.removeEventListener=function(d,a){var g;if(b[d]){try{if(void 0===a){b[d]=[];return}for(g=0;g<b[d].length;g++)if(b[d][g].listener.toString()===a.toString()){b[d].splice(g,1);break}}catch(e){c.log("error",e)}return!1}};this.addGlobalListener=function(b,a){try{"string"===c.typeOf(b)&&(b=(new Function("return "+b))()),h.push({listener:b,count:a||null})}catch(d){c.log("error",d)}return!1};this.removeGlobalListener=function(b){if(b){try{for(var a=
h.length;a--;)h[a].listener.toString()===b.toString()&&h.splice(a,1)}catch(d){c.log("error",d)}return!1}};this.sendEvent=function(n,a){c.exists(a)||(a={});c.extend(a,{id:k,version:f.version,type:n});d&&c.log(n,a);e(b[n],a,n);e(h,a,n)}}}(window.jwplayer),function(f){var c={},k={};f.plugins=function(){};f.plugins.loadPlugins=function(d,e){k[d]=new f.plugins.pluginloader(new f.plugins.model(c),e);return k[d]};f.plugins.registerPlugin=function(d,e,b,h){var n=f.utils.getPluginName(d);c[n]||(c[n]=new f.plugins.plugin(d));
c[n].registerPlugin(d,e,b,h)}}(jwplayer),function(f){f.plugins.model=function(c){this.addPlugin=function(k){var d=f.utils.getPluginName(k);c[d]||(c[d]=new f.plugins.plugin(k));return c[d]};this.getPlugins=function(){return c}}}(jwplayer),function(f){var c=jwplayer.utils,k=jwplayer.events;f.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};f.plugin=function(d){function e(){switch(c.getPluginPathType(d)){case c.pluginPathType.ABSOLUTE:return d;case c.pluginPathType.RELATIVE:return c.getAbsolutePath(d,window.location.href)}}
function b(){p=setTimeout(function(){n=c.loaderstatus.COMPLETE;l.sendEvent(k.COMPLETE)},1E3)}function h(){n=c.loaderstatus.ERROR;l.sendEvent(k.ERROR,{url:d})}var n=c.loaderstatus.NEW,a,g,m,p,l=new k.eventdispatcher;c.extend(this,l);this.load=function(){if(n===c.loaderstatus.NEW)if(0<d.lastIndexOf(".swf"))a=d,n=c.loaderstatus.COMPLETE,l.sendEvent(k.COMPLETE);else if(c.getPluginPathType(d)===c.pluginPathType.CDN)n=c.loaderstatus.COMPLETE,l.sendEvent(k.COMPLETE);else{n=c.loaderstatus.LOADING;var g=new c.scriptloader(e());
g.addEventListener(k.COMPLETE,b);g.addEventListener(k.ERROR,h);g.load()}};this.registerPlugin=function(b,d,e,h){p&&(clearTimeout(p),p=void 0);m=d;e&&h?(a=h,g=e):"string"===typeof e?a=e:"function"===typeof e?g=e:!e&&!h&&(a=b);n=c.loaderstatus.COMPLETE;l.sendEvent(k.COMPLETE)};this.getStatus=function(){return n};this.getPluginName=function(){return c.getPluginName(d)};this.getFlashPath=function(){if(a)switch(c.getPluginPathType(a)){case c.pluginPathType.ABSOLUTE:return a;case c.pluginPathType.RELATIVE:return 0<
d.lastIndexOf(".swf")?c.getAbsolutePath(a,window.location.href):c.getAbsolutePath(a,e())}return null};this.getJS=function(){return g};this.getTarget=function(){return m};this.getPluginmode=function(){if("undefined"!==typeof a&&"undefined"!==typeof g)return f.pluginmodes.HYBRID;if("undefined"!==typeof a)return f.pluginmodes.FLASH;if("undefined"!==typeof g)return f.pluginmodes.JAVASCRIPT};this.getNewInstance=function(a,b,c){return new g(a,b,c)};this.getURL=function(){return d}}}(jwplayer.plugins),function(f){var c=
f.utils,k=f.events,d=f._,e=c.foreach;f.plugins.pluginloader=function(b,h){function f(){p||(p=!0,m=c.loaderstatus.COMPLETE,v.sendEvent(k.COMPLETE))}function a(){(!l||0===d.keys(l).length)&&f();if(!p){var a=b.getPlugins();t=d.after(j,f);c.foreach(l,function(b){b=c.getPluginName(b);var d=a[b];b=d.getJS();var e=d.getTarget(),d=d.getStatus();d===c.loaderstatus.LOADING||d===c.loaderstatus.NEW||(b&&!c.versionCheck(e)&&v.sendEvent(k.ERROR,{message:"Incompatible player version"}),t())})}}function g(a){v.sendEvent(k.ERROR,
{message:"File not found"});a.url&&c.log("File not found",a.url);t()}var m=c.loaderstatus.NEW,p=!1,l=h,j=d.size(l),t,v=new k.eventdispatcher;c.extend(this,v);this.setupPlugins=function(a,d,g){var h={length:0,plugins:{}},f=0,j={},m=b.getPlugins();e(d.plugins,function(b,e){var n=c.getPluginName(b),k=m[n],l=k.getFlashPath(),p=k.getJS(),v=k.getURL();l&&(h.plugins[l]=c.extend({},e),h.plugins[l].pluginmode=k.getPluginmode(),h.length++);try{if(p&&d.plugins&&d.plugins[v]){var t=document.createElement("div");
t.id=a.id+"_"+n;t.style.position="absolute";t.style.top=0;t.style.zIndex=f+10;j[n]=k.getNewInstance(a,c.extend({},d.plugins[v]),t);f++;a.onReady(g(j[n],t,!0));a.onResize(g(j[n],t))}}catch(M){c.log("ERROR: Failed to load "+n+".")}});a.plugins=j;return h};this.load=function(){if(!(c.exists(h)&&"object"!==c.typeOf(h))){m=c.loaderstatus.LOADING;e(h,function(d){c.exists(d)&&(d=b.addPlugin(d),d.addEventListener(k.COMPLETE,a),d.addEventListener(k.ERROR,g))});var d=b.getPlugins();e(d,function(a,b){b.load()})}a()};
this.destroy=function(){v&&(v.resetEventListeners(),v=null)};this.pluginFailed=g;this.getStatus=function(){return m}}}(jwplayer),function(f){f.parsers={localName:function(c){return c?c.localName?c.localName:c.baseName?c.baseName:"":""},textContent:function(c){return c?c.textContent?f.utils.trim(c.textContent):c.text?f.utils.trim(c.text):"":""},getChildNode:function(c,f){return c.childNodes[f]},numChildren:function(c){return c.childNodes?c.childNodes.length:0}}}(jwplayer),function(f){var c=f.parsers;
(c.jwparser=function(){}).parseEntry=function(k,d){for(var e=[],b=[],h=f.utils.xmlAttribute,n=0;n<k.childNodes.length;n++){var a=k.childNodes[n];if("jwplayer"==a.prefix){var g=c.localName(a);"source"==g?(delete d.sources,e.push({file:h(a,"file"),"default":h(a,"default"),label:h(a,"label"),type:h(a,"type")})):"track"==g?(delete d.tracks,b.push({file:h(a,"file"),"default":h(a,"default"),kind:h(a,"kind"),label:h(a,"label")})):(d[g]=f.utils.serialize(c.textContent(a)),"file"==g&&d.sources&&delete d.sources)}d.file||
(d.file=d.link)}if(e.length){d.sources=[];for(n=0;n<e.length;n++)0<e[n].file.length&&(e[n]["default"]="true"==e[n]["default"]?!0:!1,e[n].label.length||delete e[n].label,d.sources.push(e[n]))}if(b.length){d.tracks=[];for(n=0;n<b.length;n++)0<b[n].file.length&&(b[n]["default"]="true"==b[n]["default"]?!0:!1,b[n].kind=!b[n].kind.length?"captions":b[n].kind,b[n].label.length||delete b[n].label,d.tracks.push(b[n]))}return d}}(jwplayer),function(f){var c=jwplayer.utils,k=c.xmlAttribute,d=f.localName,e=f.textContent,
b=f.numChildren,h=f.mediaparser=function(){};h.parseGroup=function(f,a){var g,m,p=[];for(m=0;m<b(f);m++)if(g=f.childNodes[m],"media"==g.prefix&&d(g))switch(d(g).toLowerCase()){case "content":k(g,"duration")&&(a.duration=c.seconds(k(g,"duration")));0<b(g)&&(a=h.parseGroup(g,a));k(g,"url")&&(a.sources||(a.sources=[]),a.sources.push({file:k(g,"url"),type:k(g,"type"),width:k(g,"width"),label:k(g,"label")}));break;case "title":a.title=e(g);break;case "description":a.description=e(g);break;case "guid":a.mediaid=
e(g);break;case "thumbnail":a.image||(a.image=k(g,"url"));break;case "group":h.parseGroup(g,a);break;case "subtitle":var l={};l.file=k(g,"url");l.kind="captions";if(0<k(g,"lang").length){var j=l;g=k(g,"lang");var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};g=t[g]?t[g]:g;j.label=g}p.push(l)}a.hasOwnProperty("tracks")||(a.tracks=[]);for(m=0;m<p.length;m++)a.tracks.push(p[m]);return a}}(jwplayer.parsers),function(f){function c(b){for(var a=
{},c=0;c<b.childNodes.length;c++){var e=b.childNodes[c],p=h(e);if(p)switch(p.toLowerCase()){case "enclosure":a.file=k.xmlAttribute(e,"url");break;case "title":a.title=d(e);break;case "guid":a.mediaid=d(e);break;case "pubdate":a.date=d(e);break;case "description":a.description=d(e);break;case "link":a.link=d(e);break;case "category":a.tags=a.tags?a.tags+d(e):d(e)}}a=f.mediaparser.parseGroup(b,a);a=f.jwparser.parseEntry(b,a);return new jwplayer.playlist.item(a)}var k=jwplayer.utils,d=f.textContent,
e=f.getChildNode,b=f.numChildren,h=f.localName;f.rssparser={};f.rssparser.parse=function(d){for(var a=[],g=0;g<b(d);g++){var f=e(d,g);if("channel"==h(f).toLowerCase())for(var k=0;k<b(f);k++){var l=e(f,k);"item"==h(l).toLowerCase()&&a.push(c(l))}}return a}}(jwplayer.parsers),function(f){var c=f.utils,k=f._;f.playlist=function(c){var b=[];c=k.isArray(c)?c:[c];k.each(c,function(c){b.push(new f.playlist.item(c))});return b};f.playlist.filterPlaylist=function(e,b){var h=[];k.each(e,function(e){e=c.extend({},
e);e.sources=d(e.sources,!1,b);if(e.sources.length){for(var a=0;a<e.sources.length;a++)e.sources[a].label=e.sources[a].label||a.toString();h.push(e)}});return h};var d=f.playlist.filterSources=function(d,b,h){var n,a=[],g=b?f.embed.flashCanPlay:f.embed.html5CanPlay;if(d)return k.each(d,function(b){if(!b||!b.file)b=void 0;else{var d=c.trim(""+b.file),e=b.type;e||(e=c.extension(d),e=c.extensionmap.extType(e));b=c.extend({},b,{file:d,type:e})}b&&g(b.file,b.type,h)&&(n=n||b.type,b.type===n&&a.push(b))}),
a}}(jwplayer),function(f){var c=f.item=function(k){var d=jwplayer.utils,e=d.extend({},c.defaults,k),b,h;e.tracks=k&&d.exists(k.tracks)?k.tracks:[];0===e.sources.length&&(e.sources=[new f.source(e)]);for(b=0;b<e.sources.length;b++)h=e.sources[b]["default"],e.sources[b]["default"]=h?"true"==h.toString():!1,e.sources[b]=new f.source(e.sources[b]);if(e.captions&&!d.exists(k.tracks)){for(k=0;k<e.captions.length;k++)e.tracks.push(e.captions[k]);delete e.captions}for(b=0;b<e.tracks.length;b++)e.tracks[b]=
new f.track(e.tracks[b]);return e};c.defaults={description:void 0,image:void 0,mediaid:void 0,title:void 0,sources:[],tracks:[]}}(jwplayer.playlist),function(f){var c=f.utils,k=f.events,d=f.parsers;f.playlist.loader=function(){function e(a){try{var b=a.responseXML.childNodes;a="";for(var c=0;c<b.length&&!(a=b[c],8!==a.nodeType);c++);"xml"===d.localName(a)&&(a=a.nextSibling);if("rss"!==d.localName(a))h("Not a valid RSS feed");else{var e=new f.playlist(d.rssparser.parse(a));n.sendEvent(k.JWPLAYER_PLAYLIST_LOADED,
{playlist:e})}}catch(l){h()}}function b(a){h(a.match(/invalid/i)?"Not a valid RSS feed":"")}function h(a){n.sendEvent(k.JWPLAYER_ERROR,{message:a?a:"Error loading file"})}var n=new k.eventdispatcher;c.extend(this,n);this.load=function(a){c.ajax(a,e,b)}}}(jwplayer),function(f){var c=jwplayer.utils,k={file:void 0,label:void 0,type:void 0,"default":void 0};f.source=function(d){var e=c.extend({},k);c.foreach(k,function(b){c.exists(d[b])&&(e[b]=d[b],delete d[b])});e.type&&0<e.type.indexOf("/")&&(e.type=
c.extensionmap.mimeType(e.type));"m3u8"==e.type&&(e.type="hls");"smil"==e.type&&(e.type="rtmp");return e}}(jwplayer.playlist),function(f){var c=jwplayer.utils,k={file:void 0,label:void 0,kind:"captions","default":!1};f.track=function(d){var e=c.extend({},k);d||(d={});c.foreach(k,function(b){c.exists(d[b])&&(e[b]=d[b],delete d[b])});return e}}(jwplayer.playlist),function(f){function c(b,c,a){var d=b.style;d.backgroundColor="#000";d.color="#FFF";d.width=k.styleDimension(a.width);d.height=k.styleDimension(a.height);
d.display="table";d.opacity=1;a=document.createElement("p");d=a.style;d.verticalAlign="middle";d.textAlign="center";d.display="table-cell";d.font="15px/20px Arial, Helvetica, sans-serif";a.innerHTML=c.replace(":",":\x3cbr\x3e");b.innerHTML="";b.appendChild(a)}var k=f.utils,d=f.events,e=f._,b=f.embed=function(h){function n(){if(!y){var c=j.playlist;if(e.isArray(c)){if(0===c.length){m();return}if(1===c.length&&(!c[0].sources||0===c[0].sources.length||!c[0].sources[0].file)){m();return}}if(!x)if(e.isString(c))w=
new f.playlist.loader,w.addEventListener(d.JWPLAYER_PLAYLIST_LOADED,function(a){j.playlist=a.playlist;x=!1;n()}),w.addEventListener(d.JWPLAYER_ERROR,function(a){x=!1;m(a)}),x=!0,w.load(j.playlist);else if(u.getStatus()===k.loaderstatus.COMPLETE){for(c=0;c<j.modes.length;c++){var g=j.modes[c],r=g.type;if(r&&b[r]){var l=k.extend({},j),g=new b[r](D,g,l,u,h);if(g.supportsConfig())return g.addEventListener(d.ERROR,a),g.embed(),k.css("object.jwswf, .jwplayer:focus",{outline:"none"}),k.css(".jw-tab-focus:focus",
{outline:"solid 2px #0B7EF4"}),h}}j.fallback?(c="No suitable players found and fallback enabled",p(c,!0),k.log(c),new b.download(D,j,m)):(c="No suitable players found and fallback disabled",p(c,!1),k.log(c),D.parentNode.replaceChild(C,D))}}}function a(a){l(r+a.message)}function g(a){h.dispatchEvent(d.JWPLAYER_ERROR,{message:"Could not load plugin: "+a.message})}function m(a){a&&a.message?l("Error loading playlist: "+a.message):l(r+"No playable sources found")}function p(a,b){clearTimeout(F);F=setTimeout(function(){h.dispatchEvent(d.JWPLAYER_SETUP_ERROR,
{message:a,fallback:b})},0)}function l(a){y||(j.fallback?(y=!0,c(D,a,j),p(a,!0)):p(a,!1))}var j=new b.config(h.config),t=j.width,v=j.height,r="Error loading player: ",q=document.getElementById(h.id),u=f.plugins.loadPlugins(h.id,j.plugins),w,x=!1,y=!1,F=-1,C=null;j.fallbackDiv&&(C=j.fallbackDiv,delete j.fallbackDiv);j.id=h.id;j.aspectratio?h.config.aspectratio=j.aspectratio:delete h.config.aspectratio;var E=h;k.foreach(j.events,function(a,b){var c=E[a];"function"===typeof c&&c.call(E,b)});var D=document.createElement("div");
D.id=q.id;D.style.width=0<t.toString().indexOf("%")?t:t+"px";D.style.height=0<v.toString().indexOf("%")?v:v+"px";q.parentNode.replaceChild(D,q);this.embed=function(){y||(u.addEventListener(d.COMPLETE,n),u.addEventListener(d.ERROR,g),u.load())};this.destroy=function(){u&&(u.destroy(),u=null);w&&(w.resetEventListeners(),w=null)};this.errorScreen=l;return this};f.embed.errorScreen=c}(jwplayer),function(f){function c(b){if(b.playlist)for(var c=0;c<b.playlist.length;c++)b.playlist[c]=new e(b.playlist[c]);
else{var f={};d.foreach(e.defaults,function(a){k(b,f,a)});f.sources||(b.levels?(f.sources=b.levels,delete b.levels):(c={},k(b,c,"file"),k(b,c,"type"),f.sources=c.file?[c]:[]));b.playlist=[new e(f)]}}function k(b,c,e){d.exists(b[e])&&(c[e]=b[e],delete b[e])}var d=f.utils,e=f.playlist.item;(f.embed.config=function(b){var e={fallback:!0,height:270,primary:"html5",width:480,base:b.base?b.base:d.getScriptPath("jwplayer.js"),aspectratio:""};b=d.extend({},e,f.defaults,b);var e={type:"html5",src:b.base+"jwplayer.html5.js"},
k={type:"flash",src:b.base+"jwplayer.flash.swf"};b.modes="flash"===b.primary?[k,e]:[e,k];b.listbar&&(b.playlistsize=b.listbar.size,b.playlistposition=b.listbar.position,b.playlistlayout=b.listbar.layout);b.flashplayer&&(k.src=b.flashplayer);b.html5player&&(e.src=b.html5player);c(b);k=b.aspectratio;if("string"!==typeof k||!d.exists(k))e=0;else{var a=k.indexOf(":");-1===a?e=0:(e=parseFloat(k.substr(0,a)),k=parseFloat(k.substr(a+1)),e=0>=e||0>=k?0:100*(k/e)+"%")}-1===b.width.toString().indexOf("%")?
delete b.aspectratio:e?b.aspectratio=e:delete b.aspectratio;return b}).addConfig=function(b,e){c(e);return d.extend(b,e)}}(jwplayer),function(f){var c=f.utils,k=f.utils.css;f.embed.download=function(d,e,b){function f(a,b,c){a=document.createElement(a);b&&(a.className="jwdownload"+b);c&&c.appendChild(a);return a}var n=c.extend({},e),a,g=n.width?n.width:480,m=n.height?n.height:320,p;e=e.logo?e.logo:{prefix:c.repo(),file:"logo.png",margin:10};var l,j,t,v,r,q;j=n.playlist;n=["mp4","aac","mp3"];if(j&&
j.length){t=j[0];v=t.sources;for(j=0;j<v.length;j++)r=v[j],r.file&&(q=r.type||c.extensionmap.extType(c.extension(r.file)),0<=c.indexOf(n,q)?(a=r.file,p=t.image):c.isYouTube(r.file,q)&&(l=r.file));a?(b=a,d&&(a=f("a","display",d),f("div","icon",a),f("div","logo",a),b&&a.setAttribute("href",c.getAbsolutePath(b))),b="#"+d.id+" .jwdownload",d.style.width="",d.style.height="",k(b+"display",{width:c.styleDimension(Math.max(320,g)),height:c.styleDimension(Math.max(180,m)),background:"black center no-repeat "+
(p?"url("+p+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),k(b+"display div",{position:"absolute",width:"100%",height:"100%"}),k(b+"logo",{top:e.margin+"px",right:e.margin+"px",background:"top right no-repeat url("+e.prefix+e.file+")"}),k(b+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):
l?(e=l,d=f("iframe","",d),d.src="http://www.youtube.com/embed/"+c.youTubeID(e),d.width=g,d.height=m,d.style.border="none"):b()}}}(jwplayer),function(f){var c=f.utils,k=f.events,d={};(f.embed.flash=function(b,h,n,a,g){function m(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)}function p(a,b,c){return function(){try{c&&document.getElementById(g.id+"_wrapper").appendChild(b);var d=document.getElementById(g.id).getPluginConfig("display");
"function"===typeof a.resize&&a.resize(d.width,d.height);b.style.left=d.x;b.style.top=d.h}catch(e){}}}function l(a){if(!a)return{};var b={},d=[];c.foreach(a,function(a,e){var g=c.getPluginName(a);d.push(a);c.foreach(e,function(a,c){b[g+"."+a]=c})});b.plugins=d.join(",");return b}var j=new f.events.eventdispatcher,t=c.flashVersion();c.extend(this,j);this.embed=function(){n.id=g.id;if(10>t)return j.sendEvent(k.ERROR,{message:"Flash version must be 10.0 or greater"}),!1;var e,f,q=g.config.listbar,u=
c.extend({},n);if(b.id+"_wrapper"===b.parentNode.id)e=document.getElementById(b.id+"_wrapper");else{e=document.createElement("div");f=document.createElement("div");f.style.display="none";f.id=b.id+"_aspect";e.id=b.id+"_wrapper";e.style.position="relative";e.style.display="block";e.style.width=c.styleDimension(u.width);e.style.height=c.styleDimension(u.height);if(g.config.aspectratio){var w=parseFloat(g.config.aspectratio);f.style.display="block";f.style.marginTop=g.config.aspectratio;e.style.height=
"auto";e.style.display="inline-block";q&&("bottom"===q.position?f.style.paddingBottom=q.size+"px":"right"===q.position&&(f.style.marginBottom=-1*q.size*(w/100)+"px"))}b.parentNode.replaceChild(e,b);e.appendChild(b);e.appendChild(f)}e=a.setupPlugins(g,u,p);0<e.length?c.extend(u,l(e.plugins)):delete u.plugins;"undefined"!==typeof u["dock.position"]&&"false"===u["dock.position"].toString().toLowerCase()&&(u.dock=u["dock.position"],delete u["dock.position"]);e=u.wmode||(u.height&&40>=u.height?"transparent":
"opaque");f="height width modes events primary base fallback volume".split(" ");for(q=0;q<f.length;q++)delete u[f[q]];f=c.getCookies();c.foreach(f,function(a,b){"undefined"===typeof u[a]&&(u[a]=b)});f=window.location.href.split("/");f.splice(f.length-1,1);f=f.join("/");u.base=f+"/";d[b.id]=u;c.isMSIE()?(f='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%"id\x3d"'+b.id+'" name\x3d"'+b.id+'" tabindex\x3d0""\x3e',f+='\x3cparam name\x3d"movie" value\x3d"'+
h.src+'"\x3e',f+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',f+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',f+='\x3cparam name\x3d"wmode" value\x3d"'+e+'"\x3e',f+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',f+="\x3c/object\x3e",b.outerHTML=f,e=document.getElementById(b.id)):(f=document.createElement("object"),f.setAttribute("type","application/x-shockwave-flash"),f.setAttribute("data",h.src),f.setAttribute("width",
"100%"),f.setAttribute("height","100%"),f.setAttribute("bgcolor","#000000"),f.setAttribute("id",b.id),f.setAttribute("name",b.id),f.className="jwswf",m(f,"allowfullscreen","true"),m(f,"allowscriptaccess","always"),m(f,"seamlesstabbing","true"),m(f,"wmode",e),b.parentNode.replaceChild(f,b),e=f);g.config.aspectratio&&(e.style.position="absolute");g.container=e;g.setPlayer(e,"flash")};this.supportsConfig=function(){if(t)if(n){if("string"===c.typeOf(n.playlist))return!0;try{var a=n.playlist[0].sources;
if("undefined"===typeof a)return!0;for(var b=0;b<a.length;b++)if(a[b].file&&e(a[b].file,a[b].type))return!0}catch(d){}}else return!0;return!1}}).getVars=function(b){return d[b]};var e=f.embed.flashCanPlay=function(b,d){if(c.isYouTube(b,d)||c.isRtmp(b,d)||"hls"===d)return!0;var e=c.extensionmap[d?d:c.extension(b)];return!e?!1:!!e.flash}}(jwplayer),function(f){var c=f.utils,k=c.extensionmap,d=f.events;f.embed.html5=function(e,b,h,k,a){function g(a,b,c){return function(){try{var d=document.querySelector("#"+
e.id+" .jwmain");c&&d.appendChild(b);"function"===typeof a.resize&&(a.resize(d.clientWidth,d.clientHeight),setTimeout(function(){a.resize(d.clientWidth,d.clientHeight)},400));b.left=d.style.left;b.top=d.style.top}catch(f){}}}function m(a){p.sendEvent(a.type,{message:"HTML5 player not found"})}var p=this,l=new d.eventdispatcher;c.extend(p,l);p.embed=function(){if(f.html5){k.setupPlugins(a,h,g);e.innerHTML="";var j=f.utils.extend({},h);delete j.volume;j=new f.html5.player(j);a.container=document.getElementById(a.id);
a.setPlayer(j,"html5")}else j=new c.scriptloader(b.src),j.addEventListener(d.ERROR,m),j.addEventListener(d.COMPLETE,p.embed),j.load()};p.supportsConfig=function(){if(f.vid.canPlayType)try{if("string"===c.typeOf(h.playlist))return!0;for(var a=h.playlist[0].sources,b=0;b<a.length;b++)if(f.embed.html5CanPlay(a[b].file,a[b].type,h.androidhls))return!0}catch(d){}return!1}};f.embed.html5CanPlay=function(d,b,h){if(null!==navigator.userAgent.match(/BlackBerry/i)||c.isIE(9))return!1;if(c.isYouTube(d,b))return!0;
var n=c.extension(d);b=b||k.extType(n);if("hls"===b)if(h){h=c.isAndroidNative;if(h(2)||h(3)||h("4.0"))return!1;if(c.isAndroid())return!0}else if(c.isAndroid())return!1;if(c.isRtmp(d,b))return!1;d=k[b]||k[n];if(!d||d.flash&&!d.html5)return!1;var a;a:if(d=d.html5){try{a=!!f.vid.canPlayType(d);break a}catch(g){}a=!1}else a=!0;return a}}(jwplayer),function(f){var c=f.embed,k=f.embed.html5CanPlay,d=f.utils,e=f._,b=/\.(js|swf)$/;f.cast=f.cast||{};f.embed=d.extend(function(e){function k(){w="Adobe SiteCatalyst Error: Could not find Media Module"}
var a=d.repo(),g=d.extend({},f.defaults),m=d.extend({},g,e.config),p=e.config,l=m.plugins,j=m.analytics,t=a+"jwpsrv.js",v=a+"sharing.js",r=a+"related.js",q=a+"gapro.js",g=f.key?f.key:g.key,u=(new f.utils.key(g)).edition(),w,l=l?l:{};"ads"==u&&m.advertising&&(b.test(m.advertising.client)?l[m.advertising.client]=m.advertising:l[a+m.advertising.client+".js"]=m.advertising);delete p.advertising;p.key=g;m.analytics&&b.test(m.analytics.client)&&(t=m.analytics.client);delete p.analytics;j&&!("ads"===u||
"enterprise"===u)&&delete j.enabled;if("free"==u||!j||!1!==j.enabled)l[t]=j?j:{};delete l.sharing;delete l.related;switch(u){case "ads":case "enterprise":if(p.sitecatalyst)try{window.s&&window.s.hasOwnProperty("Media")?new f.embed.sitecatalyst(e):k()}catch(x){k()}case "premium":m.related&&(b.test(m.related.client)&&(r=m.related.client),l[r]=m.related),m.ga&&(b.test(m.ga.client)&&(q=m.ga.client),l[q]=m.ga);case "pro":m.sharing&&(b.test(m.sharing.client)&&(v=m.sharing.client),l[v]=m.sharing),m.skin&&
(p.skin=m.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,d.repo()+"skins/$1.xml"))}p.plugins=l;e.config=p;e=new c(e);w&&e.errorScreen(w);return e},f.embed);f.embed.html5CanPlay=function(b,c){var a;var d={file:b,type:c};a=f.html5&&f.html5.chooseProvider?f.html5.chooseProvider(d)!==f.html5.VideoProvider:e.any(f.unregisteredProviders,function(a){return a.supports(d)});return a?!0:k.apply(this,arguments)}}(jwplayer),function(f){var c=jwplayer.utils;f.sitecatalyst=function(f){function d(b){a.debug&&
c.log(b)}function e(a){a=a.split("/");a=a[a.length-1];a=a.split("?");return a[0]}function b(){if(!j){j=!0;var a=n.getPosition();d("stop: "+m+" : "+a);s.Media.stop(m,a)}}function h(){t||(b(),t=!0,d("close: "+m),s.Media.close(m),v=!0,l=0)}var n=f,a=c.extend({},n.config.sitecatalyst),g={onPlay:function(){if(!v){var a=n.getPosition();j=!1;d("play: "+m+" : "+a);s.Media.play(m,a)}},onPause:b,onBuffer:b,onIdle:h,onPlaylistItem:function(b){try{v=!0;h();l=0;var d;if(a.mediaName)d=a.mediaName;else{var f=n.getPlaylistItem(b.index);
d=f.title?f.title:f.file?e(f.file):f.sources&&f.sources.length?e(f.sources[0].file):""}m=d;p=a.playerName?a.playerName:n.id}catch(g){c.log(g)}},onTime:function(){if(v){var a=n.getDuration();if(-1==a)return;t=j=v=!1;d("open: "+m+" : "+a+" : "+p);s.Media.open(m,a,p);d("play: "+m+" : 0");s.Media.play(m,0)}a=n.getPosition();if(3<=Math.abs(a-l)){var b=l;d("seek: "+b+" to "+a);d("stop: "+m+" : "+b);s.Media.stop(m,b);d("play: "+m+" : "+a);s.Media.play(m,a)}l=a},onComplete:h},m,p,l,j=!0,t=!0,v;c.foreach(g,
function(a){n[a](g[a])})}}(jwplayer.embed),function(f){function c(b,c){b[c]&&(b[c]=k.getAbsolutePath(b[c]))}var k=f.utils,d=f._,e=window.location.href;f.cast.setupCastConfig=function(b,d){var f=k.extend({},b.config);f.cast=k.extend({pageUrl:e},d);for(var a="base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar".split(" "),g=a.length;g--;)delete f[a[g]];a=f.plugins;delete f.plugins;
for(var m in a)if(a.hasOwnProperty(m)){var p=a[m];if(p.client&&(/[\.\/]/.test(p.client)&&c(p,"client"),-1<p.client.indexOf("vast"))){g=f;p=k.extend({},p);p.client="vast";delete p.companiondiv;if(p.schedule){var l=void 0;for(l in p.schedule)p.schedule.hasOwnProperty(l)&&c(p.schedule[l].ad||p.schedule[l],"tag")}c(p,"tag");g.advertising=p}}b.position&&(f.position=b.position);0<b.item&&(f.item=b.item);f.captionLabel=k.getCookies().captionLabel;return f};f.cast.setupFlashCastConfig=function(b){var c=b.config,
e;(e=d.find(c.plugins,function(a,b){return 0<b.indexOf("vast.js")}))?(e.client="vast",e={advertising:e}):e={};c=d.pick(c,"id captionLabel cast key playlist repeat".split(" "));c.cast.pageUrl=window.location.href;k.extend(c,{captionLabel:k.getCookies().captionLabel,volume:b.getVolume(),mute:b.getMute(),id:b.id,position:b.getPosition(),item:b.getPlaylistIndex()},e);return c}}(window.jwplayer),function(f,c){function k(a,b){a[b]&&(a[b]=e.getAbsolutePath(a[b]))}var d=c.cast,e=c.utils,b=c.events,h=b.state,
n={};d.NS="urn:x-cast:com.longtailvideo.jwplayer";d.debug=!1;d.availability=null;d.available=function(a){a=a||d.availability;var b=f.chrome,c="available";b.cast&&b.cast.ReceiverAvailability&&(c=b.cast.ReceiverAvailability.AVAILABLE);return a===c};d.controller=function(a,g){var m,p;function l(a,b){d.log("send command",a,b);var c={command:a};void 0!==b&&(c.args=b);z.sendMessage(d.NS,c,M,function(a){d.log("error message",a);"Invalid namespace"===a.description&&w()})}function j(a){a=!!d.available(a.availability);
N.available!==a&&(N.available=a,q(b.JWPLAYER_CAST_AVAILABLE))}function t(a){d.log("existing session",a);!z&&!H&&(H=a.session,H.addMessageListener(d.NS,v))}function v(e,f){var j=JSON.parse(f);if(!j)throw"Message not proper JSON";if(j.reconcile){H.removeMessageListener(d.NS,v);var h=j.diff,k=H;if(!h.id||!j.appid||!j.pageUrl)h.id=c().id,j.appid=G.appid,j.pageUrl=O,H=z=null;h.id===a.id&&(j.appid===G.appid&&j.pageUrl===O)&&(z||(a.jwInstreamState()&&a.jwInstreamDestroy(!0),y(k),g.sendEvent(b.JWPLAYER_PLAYER_STATE,
{oldstate:h.oldstate,newstate:h.newstate})),J(j));H=null}}function r(a){N.active=!!a;a=N;var c;c=z&&z.receiver?z.receiver.friendlyName:"";a.deviceName=c;q(b.JWPLAYER_CAST_SESSION,{})}function q(a){var b=e.extend({},N);g.sendEvent(a,b)}function u(a){var b=f.chrome;a.code!==b.cast.ErrorCode.CANCEL&&(d.log("Cast Session Error:",a,z),a.code===b.cast.ErrorCode.SESSION_ERROR&&w())}function w(){z?(E(),z.stop(C,x)):C()}function x(a){d.error("Cast Session Stop error:",a,z);C()}function y(j){d.log("Session started:",
j);z=j;z.addMessageListener(d.NS,D);z.addUpdateListener(F);a.jwPause(!0);a.jwSetFullscreen(!1);L=g.getVideo();m=g.volume;p=g.mute;B=new d.provider(l);B.init();g.setVideoProvider(B);a.jwPlay=function(a){!1===a?B.pause():B.play()};a.jwPause=function(b){a.jwPlay(!!b)};a.jwLoad=function(a){"number"===e.typeOf(a)&&g.setItem(a);B.load(a)};a.jwPlaylistItem=function(a){"number"===e.typeOf(a)&&g.setItem(a);B.playlistItem(a)};a.jwPlaylistNext=function(){a.jwPlaylistItem(g.item+1)};a.jwPlaylistPrev=function(){a.jwPlaylistItem(g.item-
1)};a.jwSetVolume=function(a){e.exists(a)&&(a=Math.min(Math.max(0,a),100)|0,P(a)&&(a=Math.max(0,Math.min(a/100,1)),z.setReceiverVolumeLevel(a,K,function(a){d.error("set volume error",a);K()})))};a.jwSetMute=function(a){e.exists(a)||(a=!I.mute);Q(a)&&z.setReceiverMuted(!!a,K,function(a){d.error("set muted error",a);K()})};a.jwGetVolume=function(){return I.volume|0};a.jwGetMute=function(){return!!I.mute};a.jwIsBeforePlay=function(){return!1};var k=a.jwSetCurrentCaptions;a.jwSetCurrentCaptions=function(a){k(a);
B.sendCommand("caption",a)};a.jwSkipAd=function(a){A&&(A.skipAd(a),a=A.getAdModel(),a.complete=!0,g.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,a))};a.jwClickAd=function(d){if(A&&300<A.timeSinceClick()&&(A.clickAd(d),g.state!==h.PAUSED)){var e={tag:d.tag};d.sequence&&(e.sequence=d.sequence);d.podcount&&(e.podcount=d.podcount);c(a.id).dispatchEvent(b.JWPLAYER_AD_CLICK,e);f.open(d.clickthrough)}};a.jwPlayAd=a.jwPauseAd=a.jwSetControls=a.jwForceState=a.jwReleaseState=a.jwSetFullscreen=a.jwDetachMedia=a.jwAttachMedia=
M;var n=c(a.id).plugins;n.vast&&n.vast.jwPauseAd!==M&&(R={jwPlayAd:n.vast.jwPlayAd,jwPauseAd:n.vast.jwPauseAd},n.vast.jwPlayAd=n.vast.jwPauseAd=M);K();r(!0);j!==H&&B.setup(S(),g)}function F(a){d.log("Cast Session status",a);a?K():(B.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:g.state,newstate:h.BUFFERING}),C())}function C(){d.log("_sessionStopped");z&&(E(),z=null);if(L){delete a.jwSkipAd;delete a.jwClickAd;a.initializeAPI();var f=c(a.id).plugins;f.vast&&e.extend(f.vast,R);g.volume=m;g.mute=p;g.setVideoProvider(L);
g.duration=0;B&&(B.destroy(),B=null);A&&(A.destroy(),A=null);g.state!==h.IDLE?e.isIPad()||e.isIPod()?(a.jwStop(!0),L.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:h.BUFFERING,newstate:h.IDLE})):(g.state=h.IDLE,a.jwPlay(!0),a.jwSeek(g.position)):L.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:h.BUFFERING,newstate:h.IDLE});L=null}r(!1)}function E(){z.removeUpdateListener(F);z.removeMessageListener(d.NS,D)}function D(a,b){var c=JSON.parse(b);if(!c)throw"Message not proper JSON";J(c)}function J(c){if("state"===
c.type){if(A&&(c.diff.newstate||c.diff.position))A.destroy(),A=null,g.setVideoProvider(B),g.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,{done:!0});B.updateModel(c.diff,c.type);c=c.diff;void 0!==c.item&&g.item!==c.item&&(g.item=c.item,g.sendEvent(b.JWPLAYER_PLAYLIST_ITEM,{index:g.item}))}else if("ad"===c.type){null===A&&(A=new d.adprovider(d.NS,z),A.init(),g.setVideoProvider(A));A.updateModel(c.diff,c.type);var e=A.getAdModel();c.diff.clickthrough&&(e.onClick=a.jwClickAd);c.diff.skipoffset&&(e.onSkipAd=a.jwSkipAd);
g.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,e);c.diff.complete&&A.resetAdModel()}else"connection"===c.type?!0===c.closed&&w():d.error("received unhandled message",c.type,c)}function S(){var a=e.extend({},g.config);a.cast=e.extend({pageUrl:O},G);for(var b="base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar".split(" "),c=b.length;c--;)delete a[b[c]];b=a.plugins;delete a.plugins;
for(var d in b)if(b.hasOwnProperty(d)){var f=b[d];if(f.client&&(/[\.\/]/.test(f.client)&&k(f,"client"),-1<f.client.indexOf("vast"))){c=a;f=e.extend({},f);f.client="vast";delete f.companiondiv;if(f.schedule){var j=void 0;for(j in f.schedule)f.schedule.hasOwnProperty(j)&&k(f.schedule[j].ad||f.schedule[j],"tag")}k(f,"tag");c.advertising=f}}g.position&&(a.position=g.position);0<g.item&&(a.item=g.item);a.captionLabel=e.getCookies().captionLabel;return a}function K(){if(z&&z.receiver){var a=z.receiver.volume;
if(a){var b=100*a.level|0;Q(!!a.muted);P(b)}}}function P(a){var c=I.volume!==a;c&&(I.volume=a,B.sendEvent(b.JWPLAYER_MEDIA_VOLUME,{volume:a}));return c}function Q(a){var c=I.mute!==a;c&&(I.mute=a,B.sendEvent(b.JWPLAYER_MEDIA_MUTE,{mute:a}));return c}function M(){}var z=null,N={available:!1,active:!1,deviceName:""},I={volume:null,mute:null},O=e.getAbsolutePath(f.location.href),G,B=null,A=null,L=null;m=g.volume;p=g.mute;var H=null,R=null;G=e.extend({},n,g.cast);k(G,"loadscreen");k(G,"endscreen");k(G,
"logo");if(G.appid&&(!f.cast||!f.cast.receiver))d.loader.addEventListener("availability",j),d.loader.addEventListener("session",t),d.loader.initialize(G.appid);this.startCasting=function(){z||a.jwInstreamState()||f.chrome.cast.requestSession(y,u)};this.stopCasting=w};d.log=function(){if(d.debug){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}};d.error=function(){var a=Array.prototype.slice.call(arguments,0);console.error.apply(console,a)}}(window,jwplayer),function(f){function c(a){p.log("existing session",
a);!y&&!w&&(w=a.session,w.addMessageListener(p.NS,k))}function k(a,c){var d=JSON.parse(c),e=w;if(!d)throw"Message not proper JSON";if(d.reconcile){w.removeMessageListener(p.NS,k);d.receiverFriendlyName=w.receiver.friendlyName;if(!d.pageUrl||!d.diff.id||!d.appid)d.pageUrl=x,d.diff.id=f().id,d.appid=u,w=y=null;r[d.diff.id]&&(u===d.appid&&d.pageUrl===x)&&(v=d.diff.id,u=d.appid,g(v,"jwInstreamDestroy"),b(e),g(v,q.message,d),w=null)}}function d(){y&&(y.removeUpdateListener(a),y.removeMessageListener(p.NS,
h),y.stop(l.noop,n.bind(this)),y=null);g(v,q.cleanup)}function e(a,b){y.sendMessage(p.NS,{command:a,args:b},l.noop,function(a){p.error("message send error",a)})}function b(b){var c=f(v);y=b;y.addMessageListener(p.NS,h);y.addUpdateListener(a);c=f.cast.setupFlashCastConfig(c);w!==y&&e("setup",c);g(v,q.connected,{receiverFriendlyName:b.receiver.friendlyName})}function h(a,b){if(b){var c=JSON.parse(b);if(!c)throw"Message not proper JSON";g(v,q.message,c)}}function n(a){g(v,q.error,a||{})}function a(a){a||
d()}function g(a,b,c){c?f(a).callInternal(b,c):f(a).callInternal(b)}function m(){}var p=f.cast,l=f.utils,j=f._,t=window.chrome||{},v,r={},q={},u,w,x=l.getAbsolutePath(window.location.href),y;p.NS="urn:x-cast:com.longtailvideo.jwplayer";p.flash={checkAvailability:function(a,b,d){q=d;u=b;r[a]=!0;p.loader.addEventListener("availability",function(b){"available"===b.availability&&g(a,q.available,b)});p.loader.addEventListener("session",c);p.loader.initialize(b)},startCasting:function(a){v=a;t.cast.requestSession(b.bind(this),
n.bind(this))},stopCasting:d,mute:function(a){y.setReceiverMuted(a,m,function(a){p.error("set muted error",a)})},volume:function(a){a=Math.max(0,Math.min(a/100,1));y.setReceiverVolumeLevel(a,m,function(a){p.error("set volume error",a)})},messageReceiver:e,canCastItem:function(a){return j.any(a.levels,function(a){return f.embed.html5CanPlay(a.file,a.type)})}}}(window.jwplayer),function(f,c){function k(){c&&c.cast&&c.cast.isAvailable&&!a.apiConfig?(a.apiConfig=new c.cast.ApiConfig(new c.cast.SessionRequest(j),
h,n,c.cast.AutoJoinPolicy.ORIGIN_SCOPED),c.cast.initialize(a.apiConfig,b,e)):15>l++&&setTimeout(k,1E3)}function d(){p&&(p.resetEventListeners(),p=null)}function e(){a.apiConfig=null}function b(){}function h(b){t.sendEvent("session",{session:b});b.sendMessage(a.NS,{whoami:1})}function n(b){a.availability=b;t.sendEvent("availability",{availability:b})}window.chrome=c;var a=f.cast,g=f.utils,m=f.events,p,l=0,j=null,t=g.extend({initialize:function(b){j=b;null!==a.availability?t.sendEvent("availability",
{availability:a.availability}):c&&c.cast?k():p||(p=new g.scriptloader("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),p.addEventListener(m.ERROR,d),p.addEventListener(m.COMPLETE,k),p.load())}},new m.eventdispatcher("cast.loader"));f.cast.loader=t}(window.jwplayer,window.chrome||{}),function(f,c){var k=[],d=f.utils,e=f.events,b=e.state,h="getBuffer getCaptionsList getControls getCurrentCaptions getCurrentQuality getCurrentAudioTrack getDuration getFullscreen getHeight getLockState getMute getPlaylistIndex getSafeRegion getPosition getQualityLevels getState getVolume getWidth isBeforeComplete isBeforePlay releaseState".split(" "),
n="playlistNext stop forceState playlistPrev seek setCurrentCaptions setControls setCurrentQuality setVolume setCurrentAudioTrack".split(" "),a={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onSetupError:e.JWPLAYER_SETUP_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:e.JWPLAYER_PLAYLIST_COMPLETE,
onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onControls:e.JWPLAYER_CONTROLS,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:e.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:e.JWPLAYER_CAPTIONS_CHANGED,
onAdError:e.JWPLAYER_AD_ERROR,onAdClick:e.JWPLAYER_AD_CLICK,onAdImpression:e.JWPLAYER_AD_IMPRESSION,onAdTime:e.JWPLAYER_AD_TIME,onAdComplete:e.JWPLAYER_AD_COMPLETE,onAdCompanions:e.JWPLAYER_AD_COMPANIONS,onAdSkipped:e.JWPLAYER_AD_SKIPPED,onAdPlay:e.JWPLAYER_AD_PLAY,onAdPause:e.JWPLAYER_AD_PAUSE,onAdMeta:e.JWPLAYER_AD_META,onCast:e.JWPLAYER_CAST_SESSION,onAudioTrackChange:e.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:e.JWPLAYER_AUDIO_TRACKS},g={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,
onIdle:b.IDLE};f.api=function(k){function p(a,b){d.foreach(a,function(a,c){q[a]=function(a){return b(c,a)}})}function l(a,b){var c="jw"+b.charAt(0).toUpperCase()+b.slice(1);q[b]=function(){var b=r.apply(this,[c].concat(Array.prototype.slice.call(arguments,0)));return a?q:b}}function j(a){F=[];E&&E.destroy&&E.destroy();f.api.destroyPlayer(a.id)}function t(a,b){try{a.jwAddEventListener(b,'function(dat) { jwplayer("'+q.id+'").dispatchEvent("'+b+'", dat); }')}catch(c){if("flash"===q.renderingMode){var e=
document.createElement("a");e.href=x.data;e.protocol!==location.protocol&&d.log("Warning: Your site ["+location.protocol+"] and JWPlayer ["+e.protocol+"] are hosted using different protocols")}d.log("Could not add internal listener")}}function v(a,b){u[a]||(u[a]=[],x&&y&&t(x,a));u[a].push(b);return q}function r(){if(y){if(x){var a=Array.prototype.slice.call(arguments,0),b=a.shift();if("function"===typeof x[b]){switch(a.length){case 6:return x[b](a[0],a[1],a[2],a[3],a[4],a[5]);case 5:return x[b](a[0],
a[1],a[2],a[3],a[4]);case 4:return x[b](a[0],a[1],a[2],a[3]);case 3:return x[b](a[0],a[1],a[2]);case 2:return x[b](a[0],a[1]);case 1:return x[b](a[0])}return x[b]()}}return null}F.push(arguments)}var q=this,u={},w={},x,y=!1,F=[],C,E,D={},J={};q.container=k;q.id=k.id;q.setup=function(a){if(f.embed){var b=document.getElementById(q.id);b&&(a.fallbackDiv=b);j(q);b=f(q.id);b.config=a;E=new f.embed(b);E.embed();return b}return q};q.getContainer=function(){return q.container};q.addButton=function(a,b,c,
e){try{J[e]=c,r("jwDockAddButton",a,b,'jwplayer("'+q.id+'").callback("'+e+'")',e)}catch(f){d.log("Could not add dock button"+f.message)}};q.removeButton=function(a){r("jwDockRemoveButton",a)};q.callback=function(a){if(J[a])J[a]()};q.getMeta=function(){return q.getItemMeta()};q.getPlaylist=function(){var a=r("jwGetPlaylist");"flash"===q.renderingMode&&d.deepReplaceKeyName(a,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return a};q.getPlaylistItem=function(a){d.exists(a)||(a=
q.getPlaylistIndex());return q.getPlaylist()[a]};q.getRenderingMode=function(){return q.renderingMode};q.setFullscreen=function(a){d.exists(a)?r("jwSetFullscreen",a):r("jwSetFullscreen",!r("jwGetFullscreen"));return q};q.setMute=function(a){d.exists(a)?r("jwSetMute",a):r("jwSetMute",!r("jwGetMute"));return q};q.lock=function(){return q};q.unlock=function(){return q};q.load=function(a){r("jwInstreamDestroy");f(q.id).plugins.googima&&r("jwDestroyGoogima");r("jwLoad",a);return q};q.playlistItem=function(a){r("jwPlaylistItem",
parseInt(a,10));return q};q.resize=function(a,b){if("flash"!==q.renderingMode)r("jwResize",a,b);else{var c=document.getElementById(q.id+"_wrapper"),e=document.getElementById(q.id+"_aspect");e&&(e.style.display="none");c&&(c.style.display="block",c.style.width=d.styleDimension(a),c.style.height=d.styleDimension(b))}return q};q.play=function(a){if(a!==c)return r("jwPlay",a),q;a=q.getState();var d=C&&C.getState();d&&(d===b.IDLE||d===b.PLAYING||d===b.BUFFERING?r("jwInstreamPause"):r("jwInstreamPlay"));
a===b.PLAYING||a===b.BUFFERING?r("jwPause"):r("jwPlay");return q};q.pause=function(a){a===c?(a=q.getState(),a===b.PLAYING||a===b.BUFFERING?r("jwPause"):r("jwPlay")):r("jwPause",a);return q};q.createInstream=function(){return new f.api.instream(this,x)};q.setInstream=function(a){return C=a};q.loadInstream=function(a,b){C=q.setInstream(q.createInstream()).init(b);C.loadItem(a);return C};q.destroyPlayer=function(){r("jwPlayerDestroy")};q.playAd=function(a){var b=f(q.id).plugins;b.vast?b.vast.jwPlayAd(a):
r("jwPlayAd",a)};q.pauseAd=function(){var a=f(q.id).plugins;a.vast?a.vast.jwPauseAd():r("jwPauseAd")};p(g,function(a,b){w[a]||(w[a]=[],v(e.JWPLAYER_PLAYER_STATE,function(b){var c=b.newstate;b=b.oldstate;if(c===a){var d=w[c];if(d)for(var e=0;e<d.length;e++){var f=d[e];"function"===typeof f&&f.call(this,{oldstate:b,newstate:c})}}}));w[a].push(b);return q});p(a,v);d.foreach(h,function(a,b){l(!1,b)});d.foreach(n,function(a,b){l(!0,b)});q.remove=function(){if(!y)throw"Cannot call remove() before player is ready";
j(this)};q.registerPlugin=function(a,b,c,d){f.plugins.registerPlugin(a,b,c,d)};q.setPlayer=function(a,b){x=a;q.renderingMode=b};q.detachMedia=function(){if("html5"===q.renderingMode)return r("jwDetachMedia")};q.attachMedia=function(a){if("html5"===q.renderingMode)return r("jwAttachMedia",a)};q.getAudioTracks=function(){return r("jwGetAudioTracks")};q.removeEventListener=function(a,b){var c=u[a];if(c)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1)};q.dispatchEvent=function(a,b){var c=u[a];if(c)for(var c=
c.slice(0),f=d.translateEventResponse(a,b),g=0;g<c.length;g++){var j=c[g];if("function"===typeof j)try{a===e.JWPLAYER_PLAYLIST_LOADED&&d.deepReplaceKeyName(f.playlist,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),j.call(this,f)}catch(h){d.log("There was an error calling back an event handler",h)}}};q.dispatchInstreamEvent=function(a){C&&C.dispatchEvent(a,arguments)};q.callInternal=r;q.playerReady=function(a){y=!0;x||q.setPlayer(document.getElementById(a.id));q.container=document.getElementById(q.id);
d.foreach(u,function(a){t(x,a)});v(e.JWPLAYER_PLAYLIST_ITEM,function(){D={}});v(e.JWPLAYER_MEDIA_META,function(a){d.extend(D,a.metadata)});v(e.JWPLAYER_VIEW_TAB_FOCUS,function(a){var b=q.getContainer();!0===a.hasFocus?d.addClass(b,"jw-tab-focus"):d.removeClass(b,"jw-tab-focus")});for(q.dispatchEvent(e.API_READY);0<F.length;)r.apply(this,F.shift())};q.getItemMeta=function(){return D};return q};f.playerReady=function(a){var b=f.api.playerById(a.id);b||(b=f.api.selectPlayer(a.id));b.playerReady(a)};
f.api.selectPlayer=function(a){var b;d.exists(a)||(a=0);a.nodeType?b=a:"string"===typeof a&&(b=document.getElementById(a));return b?(a=f.api.playerById(b.id))?a:f.api.addPlayer(new f.api(b)):"number"===typeof a?k[a]:null};f.api.playerById=function(a){for(var b=0;b<k.length;b++)if(k[b].id===a)return k[b];return null};f.api.addPlayer=function(a){for(var b=0;b<k.length;b++)if(k[b]===a)return a;k.push(a);return a};f.api.destroyPlayer=function(a){var b,e,f;d.foreach(k,function(c,d){d.id===a&&(b=c,e=d)});
if(b===c||e===c)return null;d.clearCss("#"+e.id);if(f=document.getElementById(e.id+("flash"===e.renderingMode?"_wrapper":""))){"html5"===e.renderingMode&&e.destroyPlayer();var g=document.createElement("div");g.id=e.id;f.parentNode.replaceChild(g,f)}k.splice(b,1);return null}}(window.jwplayer),function(f){var c=f.events,k=f.utils,d=c.state;f.api.instream=function(e,b){function f(a,c){m[a]||(m[a]=[],b.jwInstreamAddEventListener(a,'function(dat) { jwplayer("'+e.id+'").dispatchInstreamEvent("'+a+'", dat); }'));
m[a].push(c);return this}function n(a,b){p[a]||(p[a]=[],f(c.JWPLAYER_PLAYER_STATE,function(b){var c=b.newstate,d=b.oldstate;if(c===a){var e=p[c];if(e)for(var f=0;f<e.length;f++){var g=e[f];"function"===typeof g&&g.call(this,{oldstate:d,newstate:c,type:b.type})}}}));p[a].push(b);return this}var a,g,m={},p={},l=this;l.type="instream";l.init=function(){e.callInternal("jwInitInstream");return l};l.loadItem=function(b,c){a=b;g=c||{};"array"===k.typeOf(b)?e.callInternal("jwLoadArrayInstream",a,g):e.callInternal("jwLoadItemInstream",
a,g)};l.removeEvents=function(){m=p={}};l.removeEventListener=function(a,b){var c=m[a];if(c)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1)};l.dispatchEvent=function(a,b){var c=m[a];if(c)for(var c=c.slice(0),d=k.translateEventResponse(a,b[1]),e=0;e<c.length;e++){var f=c[e];"function"===typeof f&&f.call(this,d)}};l.onError=function(a){return f(c.JWPLAYER_ERROR,a)};l.onMediaError=function(a){return f(c.JWPLAYER_MEDIA_ERROR,a)};l.onFullscreen=function(a){return f(c.JWPLAYER_FULLSCREEN,a)};l.onMeta=function(a){return f(c.JWPLAYER_MEDIA_META,
a)};l.onMute=function(a){return f(c.JWPLAYER_MEDIA_MUTE,a)};l.onComplete=function(a){return f(c.JWPLAYER_MEDIA_COMPLETE,a)};l.onPlaylistComplete=function(a){return f(c.JWPLAYER_PLAYLIST_COMPLETE,a)};l.onPlaylistItem=function(a){return f(c.JWPLAYER_PLAYLIST_ITEM,a)};l.onTime=function(a){return f(c.JWPLAYER_MEDIA_TIME,a)};l.onBuffer=function(a){return n(d.BUFFERING,a)};l.onPause=function(a){return n(d.PAUSED,a)};l.onPlay=function(a){return n(d.PLAYING,a)};l.onIdle=function(a){return n(d.IDLE,a)};l.onClick=
function(a){return f(c.JWPLAYER_INSTREAM_CLICK,a)};l.onInstreamDestroyed=function(a){return f(c.JWPLAYER_INSTREAM_DESTROYED,a)};l.onAdSkipped=function(a){return f(c.JWPLAYER_AD_SKIPPED,a)};l.play=function(a){b.jwInstreamPlay(a)};l.pause=function(a){b.jwInstreamPause(a)};l.hide=function(){e.callInternal("jwInstreamHide")};l.destroy=function(){l.removeEvents();e.callInternal("jwInstreamDestroy")};l.setText=function(a){b.jwInstreamSetText(a?a:"")};l.getState=function(){return b.jwInstreamState()};l.setClick=
function(a){b.jwInstreamClick&&b.jwInstreamClick(a)}}}(jwplayer),function(f){var c=f.api,k=c.selectPlayer,d=f._;c.selectPlayer=function(c){return(c=k(c))?c:{registerPlugin:function(b,c,d){"jwpsrv"!==b&&f.plugins.registerPlugin(b,c,d)}}};f.unregisteredProviders=[];c.registerProvider=function(c){f&&f.html5&&d.isFunction(f.html5.registerProvider)?f.html5.registerProvider(c):f.unregisteredProviders.push(c)}}(jwplayer));
!function(){function t(){var t=Object.prototype,e=t.toString,i="[object Function]";this.noop=function(){};var o={log:this.noop,warn:this.noop,error:this.noop,info:this.noop,debug:this.noop};this.console=window.console||o,this.serialize=function(t,n){var e=[];n=n?n+".":"";for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];if(o)if("number"==typeof o||"string"==typeof o)e.push(n+i+"="+o);else if(this.isArray(o))for(var r=0;r<o.length;r++)e.push(n+i+"[]="+o[r]);else{if(this.isFunction(o))continue;e.push(this.serialize(o,i))}else e.push(n+i+"=")}return e.join("&")},this.proxy=function(t,e){var i,o=Array.prototype.slice;return n.isFunction(t)?(i=o.call(arguments,2),function(){return t.apply(e||this,i.concat(o.call(arguments)))}):void 0},this.ajax=function(t,e,i,o,r,s,a){var u=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");u.open(t,e,!0),a?(u.setRequestHeader("Content-Type","application/json"),u.setRequestHeader("Accept","application/json")):u.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),u.onreadystatechange=function(){if(4===this.readyState){var t,e=this.getResponseHeader("content-type");t=e&&(e.indexOf("application/json")>-1||e.indexOf("text/json")>-1)?JSON.parse(this.responseText):this.responseText,this.status>=200&&this.status<400?n.isFunction(o)&&o(t):n.isFunction(r)&&r(t),n.isFunction(s)&&s(t)}},i&&(i=a?JSON.stringify(i):this.serialize(i)),u.send(i)},this.get=function(t,n,e,i,o){this.ajax("GET",t,null,n,e,i,o)},this.getJSON=function(t,n,e,i){this.ajax("GET",t,null,n,e,i,!0)},this.post=function(t,n,e,i,o,r){this.ajax("POST",t,n,e,i,o,r)},this.postJSON=function(t,n,e,i,o){this.ajax("POST",t,n,e,i,o,!0)},this.put=function(t,n,e,i,o,r){this.ajax("PUT",t,n,e,i,o,r)},this.putJSON=function(t,n,e,i,o){this.ajax("PUT",t,n,e,i,o,!0)},this.$delete=function(t,n,e,i,o,r){this.ajax("DELETE",t,n,e,i,o,r)},this.deleteJSON=function(t,n,e,i,o){this.ajax("DELETE",t,n,e,i,o,!0)},this.loadArray=function(t,n){if(!this.isFunction(n))throw"onLoadFn parameter must be a function";var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){n(e.response)},e.send()},this.getScript=function(t,n){var e=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src=t,n||(n=this.noop),i.addEventListener?i.addEventListener("load",n,!1):i.readyState&&(i.onreadystatechange=function(){("loaded"===i.readyState||"complete"===i.readyState)&&n()}),e.appendChild(i)},this.extend=function(t){t=t||{};for(var n=1;n<arguments.length;n++)if(arguments[n])for(var e in arguments[n])arguments[n].hasOwnProperty(e)&&(t[e]=arguments[n][e]);return t},this.inArray=function(t,n){for(var e=0;e<t.length;e++)if(t[e]===n)return e;return-1},this.forEach=function(t,n,e){for(var i=0;i<t.length;i++)n.call(e,t[i],i)},this.getQueryStringValues=function(t,n){t||(t=n?window.location.hash:window.location.search);var e={},i=(n?t.replace(/\#/,"").replace(/\?/,""):t.replace(/\?/,"")).split("&");return this.forEach(i,function(t){var n=t.split("=");e[n[0]]=n[1]}),e},this.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},this.getHashValues=function(t){return this.getQueryStringValues(t,!0)},this.map=function(t,n){for(var e=[],i=0;i<t.length;i++)e.push(n(t[i],i));return e},this.isFunction=function(t){return this.isObject(t)&&e.call(t)===i},this.isObject=function(t){var n=typeof t;return!!t&&("object"===n||"function"===n)},this.isString=function(t){return"string"==typeof t}}var n=new t;window.mm=n}(),function(t){function n(){function n(n,e,o){try{i||(o=o?o:[],e.apply(n,o))}catch(s){if(!r&&console&&console.error)t.console.error(s.stack?s.stack:"a function attached to Callbacks thorwed an error: "+s);else if(r)throw s}}var e=!1,i=!1,o=[],r=!0,s=null,a=null;this.empty=function(){return o=[],!0},this.enableBubbleUpErrors=function(t){r=t===!1?!1:!0},this.setAutoFireOnNewAdds=function(t){e=t},this.suspend=function(){i=!0},this.resume=function(){i=!1},this.add=function(){for(var i=0;i<arguments.length;i++){var r=arguments[i];r&&t.isFunction(r)&&(o.push(r),e&&n(s,r,a))}},this.fire=function(){var i=arguments,r=this;arguments.length>0&&t.isObject(i[0])&&(r=Array.prototype.splice.call(i,0,1)[0]);for(var u=0;u<o.length;u++)n(r,o[u],i),e&&(s=r,a=i)},this.remove=function(n){var e=t.inArray(o,n);return t.isFunction(n)&&e>=0?(o.splice(e,1),!0):!1}}t.callbacks=function(t){var e=new n;return e.enableBubbleUpErrors(t),e}}(window.mm),function(t){function n(){"loading"!==document.readyState&&"interactive"!==document.readyState?o.fire():document.addEventListener?document.addEventListener("DOMContentLoaded",function(){o.fire()}):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&o.fire()}),o.setAutoFireOnNewAdds(!0)}function e(t){return"object"==typeof Node?t instanceof Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName}function i(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}var o=null;t.hide=function(t){t.style.display="none"},t.show=function(t){t.style.display=""},t.byId=function(t){return document.getElementById(t)},t.create=function(t){return document.createElement(t)},t.remove=function(t){if(this.isElement(t))throw"you cannot remove a none Dom element or the element is already null";t.parentNode.removeChild(t)},t.append=function(t,n){n.appendChild(t)},t.isElement=function(t){return i(t)||e(t)},t.text=function(t,n){return n&&("undefined"!=typeof t.textContent?t.textContent=n:t.innerText=n),t.textContent||t.innerText},t.html=function(t,n){return n&&(t.innerHTML=n),t.innerHTML},t.attr=function(t,n,e){return e&&t.setAttribute(n,e),t.getAttribute(n)},t.on=function(t,n,e){t.addEventListener?t.addEventListener(n,e):t.attachEvent("on"+n,function(){e.call(t)})},t.off=function(t,n,e){t.removeEventListener?t.removeEventListener(n,e):t.detachEvent("on"+n,e)},t.onReady=function(t){o?o.add(t):(o=this.callbacks(),o.add(t),n())},t.select=function(t,n){return this.isElement(t)||n||(n=t,t=null),t||(t=document),t.querySelectorAll(n)},t.addClass=function(t,n){t.classList?t.classList.add(n):t.className+=" "+n},t.removeClass=function(t,n){t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")},t.hasClass=function(t,n){t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className)},t.toggleClass=function(t,n){if(t.classList)t.classList.toggle(n);else{for(var e=t.className.split(" "),i=-1,o=e.length;o--;)e[o]===n&&(i=o);i>=0?e.splice(i,1):e.push(n),t.className=e.join(" ")}}}(window.mm),function(t){var n=function(){for(var t={},n=[],e=0;256>e;e++)n[e]=(16>e?"0":"")+e.toString(16);return t.generate=function(){var t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,o=4294967295*Math.random()|0;return n[255&t]+n[t>>8&255]+n[t>>16&255]+n[t>>24&255]+"-"+n[255&e]+n[e>>8&255]+"-"+n[e>>16&15|64]+n[e>>24&255]+"-"+n[63&i|128]+n[i>>8&255]+"-"+n[i>>16&255]+n[i>>24&255]+n[255&o]+n[o>>8&255]+n[o>>16&255]+n[o>>24&255]},t}();t.guid=function(){return n.generate()}}(window.mm),function(t){function n(){var n,e=this,i=!1,o={};this.resolve=function(t,n,e){if(!t||t.length<=0)return function(){return n.apply(e||{})};for(var i=0;i<t.length;i++){var r=t[i],s=o[r];if(!s.result&&!s.hasResult){var a=this.resolve(s.deps,s.func,s.scope);s.result=a(),s.hasResult=!0}}return function(){for(var i=[],r=0;r<t.length;r++)i.push(o[t[r]].result);return n.apply(e||{},i)}},this.module=function(n,e,i,r){if(t.isFunction(e)&&(i=e,e=null),e&&!t.isArray(e))throw"In module "+n+" the depedencies are not an array format.";o[n]={deps:e,func:i,scope:r,result:null,name:n}},this.app=function(e,i,o){if(!e&&!t.isArray(e))throw"the dependiencies of an app cannot be null and must be an array";if(!i&&!t.isFunction(i))throw"the second parameter of an app cannot be null and must be an function";n={deps:e,func:i,scope:o}},this.resolveApp=function(){if(n&&!i){var t=e.resolve(n.deps,n.func,n.scope);return t(),i=!0,!0}return!1},t.onReady(function(){e.resolveApp()})}var e=null;t.resolve=function(i,o,r){e=e||new n,i=t.isString(i)?[i]:i;var s=e.resolve(i,o,r);s.apply(r||{})},t.resolveApp=function(){return e=e||new n,e.resolveApp()},t.app=function(t,i,o){e=e||new n,e.app(t,i,o)},t.module=function(t,i,o,r){e=e||new n,e.module(t,i,o,r)}}(window.mm);
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DMVAST = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],2:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTAd;

VASTAd = (function() {
  function VASTAd() {
    this.id = null;
    this.sequence = null;
    this.system = null;
    this.title = null;
    this.description = null;
    this.advertiser = null;
    this.pricing = null;
    this.survey = null;
    this.errorURLTemplates = [];
    this.impressionURLTemplates = [];
    this.creatives = [];
    this.extensions = [];
  }

  return VASTAd;

})();

module.exports = VASTAd;

},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTClient, VASTParser, VASTUtil;

VASTParser = require('./parser');

VASTUtil = require('./util');

VASTClient = (function() {
  function VASTClient() {}

  VASTClient.cappingFreeLunch = 0;

  VASTClient.cappingMinimumTimeInterval = 0;

  VASTClient.options = {
    withCredentials: false,
    timeout: 0
  };

  VASTClient.get = function(url, opts, cb) {
    var extend, now, options, timeSinceLastCall;
    now = +new Date();
    extend = exports.extend = function(object, properties) {
      var key, val;
      for (key in properties) {
        val = properties[key];
        object[key] = val;
      }
      return object;
    };
    if (!cb) {
      if (typeof opts === 'function') {
        cb = opts;
      }
      options = {};
    }
    options = extend(this.options, opts);
    if (this.totalCallsTimeout < now) {
      this.totalCalls = 1;
      this.totalCallsTimeout = now + (60 * 60 * 1000);
    } else {
      this.totalCalls++;
    }
    if (this.cappingFreeLunch >= this.totalCalls) {
      cb(null, new Error("VAST call canceled – FreeLunch capping not reached yet " + this.totalCalls + "/" + this.cappingFreeLunch));
      return;
    }
    timeSinceLastCall = now - this.lastSuccessfullAd;
    if (timeSinceLastCall < 0) {
      this.lastSuccessfullAd = 0;
    } else if (timeSinceLastCall < this.cappingMinimumTimeInterval) {
      cb(null, new Error("VAST call canceled – (" + this.cappingMinimumTimeInterval + ")ms minimum interval reached"));
      return;
    }
    return VASTParser.parse(url, options, (function(_this) {
      return function(response, err) {
        return cb(response, err);
      };
    })(this));
  };

  (function() {
    var defineProperty, storage;
    storage = VASTUtil.storage;
    defineProperty = Object.defineProperty;
    ['lastSuccessfullAd', 'totalCalls', 'totalCallsTimeout'].forEach(function(property) {
      defineProperty(VASTClient, property, {
        get: function() {
          return storage.getItem(property);
        },
        set: function(value) {
          return storage.setItem(property, value);
        },
        configurable: false,
        enumerable: true
      });
    });
    if (VASTClient.lastSuccessfullAd == null) {
      VASTClient.lastSuccessfullAd = 0;
    }
    if (VASTClient.totalCalls == null) {
      VASTClient.totalCalls = 0;
    }
    if (VASTClient.totalCallsTimeout == null) {
      VASTClient.totalCallsTimeout = 0;
    }
  })();

  return VASTClient;

})();

module.exports = VASTClient;

},{"./parser":12,"./util":18}],4:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTCompanionAd;

VASTCompanionAd = (function() {
  function VASTCompanionAd() {
    this.id = null;
    this.width = 0;
    this.height = 0;
    this.type = null;
    this.staticResource = null;
    this.htmlResource = null;
    this.iframeResource = null;
    this.altText = null;
    this.companionClickThroughURLTemplate = null;
    this.companionClickTrackingURLTemplates = [];
    this.trackingEvents = {};
  }

  return VASTCompanionAd;

})();

module.exports = VASTCompanionAd;

},{}],5:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTCreative, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

VASTCreative = (function() {
  function VASTCreative(creativeAttributes) {
    if (creativeAttributes == null) {
      creativeAttributes = {};
    }
    this.id = creativeAttributes.id || null;
    this.adId = creativeAttributes.adId || null;
    this.sequence = creativeAttributes.sequence || null;
    this.apiFramework = creativeAttributes.apiFramework || null;
    this.trackingEvents = {};
  }

  return VASTCreative;

})();

VASTCreativeLinear = (function(superClass) {
  extend(VASTCreativeLinear, superClass);

  function VASTCreativeLinear() {
    VASTCreativeLinear.__super__.constructor.apply(this, arguments);
    this.type = "linear";
    this.duration = 0;
    this.skipDelay = null;
    this.mediaFiles = [];
    this.videoClickThroughURLTemplate = null;
    this.videoClickTrackingURLTemplates = [];
    this.videoCustomClickURLTemplates = [];
    this.adParameters = null;
    this.icons = [];
  }

  return VASTCreativeLinear;

})(VASTCreative);

VASTCreativeNonLinear = (function(superClass) {
  extend(VASTCreativeNonLinear, superClass);

  function VASTCreativeNonLinear() {
    VASTCreativeNonLinear.__super__.constructor.apply(this, arguments);
    this.type = "nonlinear";
    this.variations = [];
  }

  return VASTCreativeNonLinear;

})(VASTCreative);

VASTCreativeCompanion = (function(superClass) {
  extend(VASTCreativeCompanion, superClass);

  function VASTCreativeCompanion() {
    VASTCreativeCompanion.__super__.constructor.apply(this, arguments);
    this.type = "companion";
    this.variations = [];
  }

  return VASTCreativeCompanion;

})(VASTCreative);

module.exports = {
  VASTCreativeLinear: VASTCreativeLinear,
  VASTCreativeNonLinear: VASTCreativeNonLinear,
  VASTCreativeCompanion: VASTCreativeCompanion
};

},{}],6:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTAdExtension;

VASTAdExtension = (function() {
  function VASTAdExtension() {
    this.attributes = {};
    this.children = [];
  }

  return VASTAdExtension;

})();

module.exports = VASTAdExtension;

},{}],7:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTAdExtensionChild;

VASTAdExtensionChild = (function() {
  function VASTAdExtensionChild() {
    this.name = null;
    this.value = null;
    this.attributes = {};
  }

  return VASTAdExtensionChild;

})();

module.exports = VASTAdExtensionChild;

},{}],8:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTIcon;

VASTIcon = (function() {
  function VASTIcon() {
    this.program = null;
    this.height = 0;
    this.width = 0;
    this.xPosition = 0;
    this.yPosition = 0;
    this.apiFramework = null;
    this.offset = null;
    this.duration = 0;
    this.type = null;
    this.staticResource = null;
    this.htmlResource = null;
    this.iframeResource = null;
    this.iconClickThroughURLTemplate = null;
    this.iconClickTrackingURLTemplates = [];
    this.iconViewTrackingURLTemplate = null;
  }

  return VASTIcon;

})();

module.exports = VASTIcon;

},{}],9:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
module.exports = {
  client: require('./client'),
  tracker: require('./tracker'),
  parser: require('./parser'),
  util: require('./util')
};

},{"./client":3,"./parser":12,"./tracker":14,"./util":18}],10:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTMediaFile;

VASTMediaFile = (function() {
  function VASTMediaFile() {
    this.id = null;
    this.fileURL = null;
    this.deliveryType = "progressive";
    this.mimeType = null;
    this.codec = null;
    this.bitrate = 0;
    this.minBitrate = 0;
    this.maxBitrate = 0;
    this.width = 0;
    this.height = 0;
    this.apiFramework = null;
    this.scalable = null;
    this.maintainAspectRatio = null;
  }

  return VASTMediaFile;

})();

module.exports = VASTMediaFile;

},{}],11:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTNonLinear;

VASTNonLinear = (function() {
  function VASTNonLinear() {
    this.id = null;
    this.width = 0;
    this.height = 0;
    this.expandedWidth = 0;
    this.expandedHeight = 0;
    this.scalable = true;
    this.maintainAspectRatio = true;
    this.minSuggestedDuration = 0;
    this.apiFramework = "static";
    this.type = null;
    this.staticResource = null;
    this.htmlResource = null;
    this.iframeResource = null;
    this.nonlinearClickThroughURLTemplate = null;
    this.nonlinearClickTrackingURLTemplates = [];
    this.adParameters = null;
  }

  return VASTNonLinear;

})();

module.exports = VASTNonLinear;

},{}],12:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var EventEmitter, URLHandler, VASTAd, VASTAdExtension, VASTAdExtensionChild, VASTCompanionAd, VASTCreativeCompanion, VASTCreativeLinear, VASTCreativeNonLinear, VASTIcon, VASTMediaFile, VASTNonLinear, VASTParser, VASTResponse, VASTUtil,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

URLHandler = require('./urlhandler');

VASTResponse = require('./response');

VASTAd = require('./ad');

VASTAdExtension = require('./extension');

VASTAdExtensionChild = require('./extensionchild');

VASTUtil = require('./util');

VASTCreativeLinear = require('./creative').VASTCreativeLinear;

VASTCreativeCompanion = require('./creative').VASTCreativeCompanion;

VASTCreativeNonLinear = require('./creative').VASTCreativeNonLinear;

VASTMediaFile = require('./mediafile');

VASTIcon = require('./icon');

VASTCompanionAd = require('./companionad');

VASTNonLinear = require('./nonlinear');

EventEmitter = require('events').EventEmitter;

VASTParser = (function() {
  var URLTemplateFilters;

  function VASTParser() {}

  URLTemplateFilters = [];

  VASTParser.addURLTemplateFilter = function(func) {
    if (typeof func === 'function') {
      URLTemplateFilters.push(func);
    }
  };

  VASTParser.removeURLTemplateFilter = function() {
    return URLTemplateFilters.pop();
  };

  VASTParser.countURLTemplateFilters = function() {
    return URLTemplateFilters.length;
  };

  VASTParser.clearUrlTemplateFilters = function() {
    return URLTemplateFilters = [];
  };

  VASTParser.parse = function(url, options, cb) {
    if (!cb) {
      if (typeof options === 'function') {
        cb = options;
      }
      options = {};
    }
    return this._parse(url, null, options, function(err, response) {
      return cb(response, err);
    });
  };

  VASTParser.load = function(xml, options, cb) {
    if (!cb) {
      if (typeof options === 'function') {
        cb = options;
      }
      options = {};
    }
    return this.parseXmlDocument(null, [], options, xml, cb);
  };

  VASTParser.vent = new EventEmitter();

  VASTParser.track = function(templates, errorCode) {
    this.vent.emit('VAST-error', errorCode);
    return VASTUtil.track(templates, errorCode);
  };

  VASTParser.on = function(eventName, cb) {
    return this.vent.on(eventName, cb);
  };

  VASTParser.once = function(eventName, cb) {
    return this.vent.once(eventName, cb);
  };

  VASTParser.off = function(eventName, cb) {
    return this.vent.removeListener(eventName, cb);
  };

  VASTParser._parse = function(url, parentURLs, options, cb) {
    var filter, i, len;
    if (!cb) {
      if (typeof options === 'function') {
        cb = options;
      }
      options = {};
    }
    for (i = 0, len = URLTemplateFilters.length; i < len; i++) {
      filter = URLTemplateFilters[i];
      url = filter(url);
    }
    if (parentURLs == null) {
      parentURLs = [];
    }
    parentURLs.push(url);
    return URLHandler.get(url, options, (function(_this) {
      return function(err, xml) {
        if (err != null) {
          return cb(err);
        }
        return _this.parseXmlDocument(url, parentURLs, options, xml, cb);
      };
    })(this));
  };

  VASTParser.parseXmlDocument = function(url, parentURLs, options, xml, cb) {
    var ad, adNode, adNodes, complete, i, j, k, len, len1, len2, loopIndex, node, ref, ref1, response;
    response = new VASTResponse();
    if (!(((xml != null ? xml.documentElement : void 0) != null) && xml.documentElement.nodeName === "VAST")) {
      return cb(new Error('Invalid VAST XMLDocument'));
    }
    ref = xml.documentElement.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      if (node.nodeName === 'Error') {
        response.errorURLTemplates.push(VASTParser.parseNodeText(node));
      }
    }
    adNodes = [];
    ref1 = xml.documentElement.childNodes;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      node = ref1[j];
      if (node.nodeName === 'Ad') {
        adNodes.push(node);
      }
    }
    for (k = 0, len2 = adNodes.length; k < len2; k++) {
      adNode = adNodes[k];
      ad = VASTParser.parseAdElement(adNode);
      if (ad != null) {
        if ((options.wrapperSequence != null) && (ad.sequence == null) && adNodes.length === 1) {
          ad.sequence = options.wrapperSequence;
          options.wrapperSequence = null;
        }
        response.ads.push(ad);
      } else {
        VASTParser.track(response.errorURLTemplates, {
          ERRORCODE: 101
        });
      }
    }
    complete = function(error, errorAlreadyRaised) {
      var l, len3, noCreatives, ref2;
      if (error == null) {
        error = null;
      }
      if (errorAlreadyRaised == null) {
        errorAlreadyRaised = false;
      }
      if (!response) {
        return;
      }
      noCreatives = true;
      ref2 = response.ads;
      for (l = 0, len3 = ref2.length; l < len3; l++) {
        ad = ref2[l];
        if (ad.nextWrapperURL != null) {
          return;
        }
        if (ad.creatives.length > 0) {
          noCreatives = false;
        }
      }
      if (noCreatives) {
        if (!errorAlreadyRaised) {
          VASTParser.track(response.errorURLTemplates, {
            ERRORCODE: 303
          });
        }
      }
      if (response.ads.length === 0) {
        response = null;
        error = new Error("No ads: no valid <inline> has been found");
      }
      return cb(error, response);
    };
    loopIndex = response.ads.length;
    while (loopIndex--) {
      ad = response.ads[loopIndex];
      if (ad.nextWrapperURL == null) {
        continue;
      }
      (function(ad) {
        var ref2;
        if (parentURLs.length > (options.wrapperLimit !== null ? options.wrapperLimit : 9) || (ref2 = ad.nextWrapperURL, indexOf.call(parentURLs, ref2) >= 0)) {
          VASTParser.track(ad.errorURLTemplates, {
            ERRORCODE: 302
          });
          response.ads.splice(response.ads.indexOf(ad), 1);
          complete(new Error("Wrapper limit reached, as defined by the video player"));
          return;
        }
        if (url != null) {
          ad.nextWrapperURL = VASTParser.resolveVastAdTagURI(ad.nextWrapperURL, url);
        }
        options.wrapperSequence = ad.sequence;
        return VASTParser._parse(ad.nextWrapperURL, parentURLs, options, function(err, wrappedResponse) {
          var errorAlreadyRaised, index, l, len3, ref3, wrappedAd;
          errorAlreadyRaised = false;
          if (err != null) {
            VASTParser.track(ad.errorURLTemplates, {
              ERRORCODE: 301
            });
            response.ads.splice(response.ads.indexOf(ad), 1);
            errorAlreadyRaised = true;
          } else if (wrappedResponse == null) {
            VASTParser.track(ad.errorURLTemplates, {
              ERRORCODE: 303
            });
            response.ads.splice(response.ads.indexOf(ad), 1);
            errorAlreadyRaised = true;
          } else {
            response.errorURLTemplates = response.errorURLTemplates.concat(wrappedResponse.errorURLTemplates);
            index = response.ads.indexOf(ad);
            response.ads.splice(index, 1);
            ref3 = wrappedResponse.ads;
            for (l = 0, len3 = ref3.length; l < len3; l++) {
              wrappedAd = ref3[l];
              VASTParser.mergeWrapperAdData(wrappedAd, ad);
              response.ads.splice(++index, 0, wrappedAd);
            }
          }
          delete ad.nextWrapperURL;
          return complete(err, errorAlreadyRaised);
        });
      })(ad);
    }
    return complete();
  };

  VASTParser.resolveVastAdTagURI = function(vastAdTagUrl, originalUrl) {
    var baseURL, protocol;
    if (vastAdTagUrl.indexOf('//') === 0) {
      protocol = location.protocol;
      return "" + protocol + vastAdTagUrl;
    }
    if (vastAdTagUrl.indexOf('://') === -1) {
      baseURL = originalUrl.slice(0, originalUrl.lastIndexOf('/'));
      return baseURL + "/" + vastAdTagUrl;
    }
    return vastAdTagUrl;
  };

  VASTParser.mergeWrapperAdData = function(wrappedAd, ad) {
    var base, creative, eventName, i, j, k, l, len, len1, len2, len3, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, results, urls;
    wrappedAd.errorURLTemplates = ad.errorURLTemplates.concat(wrappedAd.errorURLTemplates);
    wrappedAd.impressionURLTemplates = ad.impressionURLTemplates.concat(wrappedAd.impressionURLTemplates);
    wrappedAd.extensions = ad.extensions.concat(wrappedAd.extensions);
    ref = wrappedAd.creatives;
    for (i = 0, len = ref.length; i < len; i++) {
      creative = ref[i];
      if (((ref1 = ad.trackingEvents) != null ? ref1[creative.type] : void 0) != null) {
        ref2 = ad.trackingEvents[creative.type];
        for (eventName in ref2) {
          urls = ref2[eventName];
          (base = creative.trackingEvents)[eventName] || (base[eventName] = []);
          creative.trackingEvents[eventName] = creative.trackingEvents[eventName].concat(urls);
        }
      }
    }
    if ((ref3 = ad.videoClickTrackingURLTemplates) != null ? ref3.length : void 0) {
      ref4 = wrappedAd.creatives;
      for (j = 0, len1 = ref4.length; j < len1; j++) {
        creative = ref4[j];
        if (creative.type === 'linear') {
          creative.videoClickTrackingURLTemplates = creative.videoClickTrackingURLTemplates.concat(ad.videoClickTrackingURLTemplates);
        }
      }
    }
    if ((ref5 = ad.videoCustomClickURLTemplates) != null ? ref5.length : void 0) {
      ref6 = wrappedAd.creatives;
      for (k = 0, len2 = ref6.length; k < len2; k++) {
        creative = ref6[k];
        if (creative.type === 'linear') {
          creative.videoCustomClickURLTemplates = creative.videoCustomClickURLTemplates.concat(ad.videoCustomClickURLTemplates);
        }
      }
    }
    if (ad.videoClickThroughURLTemplate != null) {
      ref7 = wrappedAd.creatives;
      results = [];
      for (l = 0, len3 = ref7.length; l < len3; l++) {
        creative = ref7[l];
        if (creative.type === 'linear' && (creative.videoClickThroughURLTemplate == null)) {
          results.push(creative.videoClickThroughURLTemplate = ad.videoClickThroughURLTemplate);
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  };

  VASTParser.childByName = function(node, name) {
    var child, i, len, ref;
    ref = node.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      if (child.nodeName === name) {
        return child;
      }
    }
  };

  VASTParser.childsByName = function(node, name) {
    var child, childs, i, len, ref;
    childs = [];
    ref = node.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      if (child.nodeName === name) {
        childs.push(child);
      }
    }
    return childs;
  };

  VASTParser.parseAdElement = function(adElement) {
    var adTypeElement, i, len, ref, ref1;
    ref = adElement.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      adTypeElement = ref[i];
      if ((ref1 = adTypeElement.nodeName) !== "Wrapper" && ref1 !== "InLine") {
        continue;
      }
      this.copyNodeAttribute("id", adElement, adTypeElement);
      this.copyNodeAttribute("sequence", adElement, adTypeElement);
      if (adTypeElement.nodeName === "Wrapper") {
        return this.parseWrapperElement(adTypeElement);
      } else if (adTypeElement.nodeName === "InLine") {
        return this.parseInLineElement(adTypeElement);
      }
    }
  };

  VASTParser.parseWrapperElement = function(wrapperElement) {
    var ad, base, base1, eventName, i, item, j, k, l, len, len1, len2, len3, name1, ref, ref1, ref2, ref3, ref4, url, urls, wrapperCreativeElement, wrapperURLElement;
    ad = this.parseInLineElement(wrapperElement);
    wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURI");
    if (wrapperURLElement != null) {
      ad.nextWrapperURL = this.parseNodeText(wrapperURLElement);
    } else {
      wrapperURLElement = this.childByName(wrapperElement, "VASTAdTagURL");
      if (wrapperURLElement != null) {
        ad.nextWrapperURL = this.parseNodeText(this.childByName(wrapperURLElement, "URL"));
      }
    }
    ref = ad.creatives;
    for (i = 0, len = ref.length; i < len; i++) {
      wrapperCreativeElement = ref[i];
      if ((ref1 = wrapperCreativeElement.type) === 'linear' || ref1 === 'nonlinear') {
        if (wrapperCreativeElement.trackingEvents != null) {
          ad.trackingEvents || (ad.trackingEvents = {});
          (base = ad.trackingEvents)[name1 = wrapperCreativeElement.type] || (base[name1] = {});
          ref2 = wrapperCreativeElement.trackingEvents;
          for (eventName in ref2) {
            urls = ref2[eventName];
            (base1 = ad.trackingEvents[wrapperCreativeElement.type])[eventName] || (base1[eventName] = []);
            for (j = 0, len1 = urls.length; j < len1; j++) {
              url = urls[j];
              ad.trackingEvents[wrapperCreativeElement.type][eventName].push(url);
            }
          }
        }
        if (wrapperCreativeElement.videoClickTrackingURLTemplates != null) {
          ad.videoClickTrackingURLTemplates || (ad.videoClickTrackingURLTemplates = []);
          ref3 = wrapperCreativeElement.videoClickTrackingURLTemplates;
          for (k = 0, len2 = ref3.length; k < len2; k++) {
            item = ref3[k];
            ad.videoClickTrackingURLTemplates.push(item);
          }
        }
        if (wrapperCreativeElement.videoClickThroughURLTemplate != null) {
          ad.videoClickThroughURLTemplate = wrapperCreativeElement.videoClickThroughURLTemplate;
        }
        if (wrapperCreativeElement.videoCustomClickURLTemplates != null) {
          ad.videoCustomClickURLTemplates || (ad.videoCustomClickURLTemplates = []);
          ref4 = wrapperCreativeElement.videoCustomClickURLTemplates;
          for (l = 0, len3 = ref4.length; l < len3; l++) {
            item = ref4[l];
            ad.videoCustomClickURLTemplates.push(item);
          }
        }
      }
    }
    if (ad.nextWrapperURL != null) {
      return ad;
    }
  };

  VASTParser.parseInLineElement = function(inLineElement) {
    var ad, creative, creativeAttributes, creativeElement, creativeTypeElement, i, j, k, len, len1, len2, node, ref, ref1, ref2;
    ad = new VASTAd();
    ad.id = inLineElement.getAttribute("id") || null;
    ad.sequence = inLineElement.getAttribute("sequence") || null;
    ref = inLineElement.childNodes;
    for (i = 0, len = ref.length; i < len; i++) {
      node = ref[i];
      switch (node.nodeName) {
        case "Error":
          ad.errorURLTemplates.push(this.parseNodeText(node));
          break;
        case "Impression":
          ad.impressionURLTemplates.push(this.parseNodeText(node));
          break;
        case "Creatives":
          ref1 = this.childsByName(node, "Creative");
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            creativeElement = ref1[j];
            creativeAttributes = {
              id: creativeElement.getAttribute('id') || null,
              adId: this.parseCreativeAdIdAttribute(creativeElement),
              sequence: creativeElement.getAttribute('sequence') || null,
              apiFramework: creativeElement.getAttribute('apiFramework') || null
            };
            ref2 = creativeElement.childNodes;
            for (k = 0, len2 = ref2.length; k < len2; k++) {
              creativeTypeElement = ref2[k];
              switch (creativeTypeElement.nodeName) {
                case "Linear":
                  creative = this.parseCreativeLinearElement(creativeTypeElement, creativeAttributes);
                  if (creative) {
                    ad.creatives.push(creative);
                  }
                  break;
                case "NonLinearAds":
                  creative = this.parseNonLinear(creativeTypeElement, creativeAttributes);
                  if (creative) {
                    ad.creatives.push(creative);
                  }
                  break;
                case "CompanionAds":
                  creative = this.parseCompanionAd(creativeTypeElement, creativeAttributes);
                  if (creative) {
                    ad.creatives.push(creative);
                  }
              }
            }
          }
          break;
        case "Extensions":
          this.parseExtension(ad.extensions, this.childsByName(node, "Extension"));
          break;
        case "AdSystem":
          ad.system = {
            value: this.parseNodeText(node),
            version: node.getAttribute("version") || null
          };
          break;
        case "AdTitle":
          ad.title = this.parseNodeText(node);
          break;
        case "Description":
          ad.description = this.parseNodeText(node);
          break;
        case "Advertiser":
          ad.advertiser = this.parseNodeText(node);
          break;
        case "Pricing":
          ad.pricing = {
            value: this.parseNodeText(node),
            model: node.getAttribute("model") || null,
            currency: node.getAttribute("currency") || null
          };
          break;
        case "Survey":
          ad.survey = this.parseNodeText(node);
      }
    }
    return ad;
  };

  VASTParser.parseExtension = function(collection, extensions) {
    var childNode, ext, extChild, extChildNodeAttr, extNode, extNodeAttr, i, j, k, l, len, len1, len2, len3, ref, ref1, ref2, results, txt;
    results = [];
    for (i = 0, len = extensions.length; i < len; i++) {
      extNode = extensions[i];
      ext = new VASTAdExtension();
      if (extNode.attributes) {
        ref = extNode.attributes;
        for (j = 0, len1 = ref.length; j < len1; j++) {
          extNodeAttr = ref[j];
          ext.attributes[extNodeAttr.nodeName] = extNodeAttr.nodeValue;
        }
      }
      ref1 = extNode.childNodes;
      for (k = 0, len2 = ref1.length; k < len2; k++) {
        childNode = ref1[k];
        txt = this.parseNodeText(childNode);
        if (childNode.nodeName !== '#comment' && txt !== '') {
          extChild = new VASTAdExtensionChild();
          extChild.name = childNode.nodeName;
          extChild.value = txt;
          if (childNode.attributes) {
            ref2 = childNode.attributes;
            for (l = 0, len3 = ref2.length; l < len3; l++) {
              extChildNodeAttr = ref2[l];
              extChild.attributes[extChildNodeAttr.nodeName] = extChildNodeAttr.nodeValue;
            }
          }
          ext.children.push(extChild);
        }
      }
      results.push(collection.push(ext));
    }
    return results;
  };

  VASTParser.parseCreativeLinearElement = function(creativeElement, creativeAttributes) {
    var adParamsElement, base, clickTrackingElement, creative, customClickElement, eventName, htmlElement, i, icon, iconClickTrackingElement, iconClicksElement, iconElement, iconsElement, iframeElement, j, k, l, len, len1, len10, len2, len3, len4, len5, len6, len7, len8, len9, m, maintainAspectRatio, mediaFile, mediaFileElement, mediaFilesElement, n, o, offset, p, percent, q, r, ref, ref1, ref10, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, s, scalable, skipOffset, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate, videoClicksElement;
    creative = new VASTCreativeLinear(creativeAttributes);
    creative.duration = this.parseDuration(this.parseNodeText(this.childByName(creativeElement, "Duration")));
    if (creative.duration === -1 && creativeElement.parentNode.parentNode.parentNode.nodeName !== 'Wrapper') {
      return null;
    }
    skipOffset = creativeElement.getAttribute("skipoffset");
    if (skipOffset == null) {
      creative.skipDelay = null;
    } else if (skipOffset.charAt(skipOffset.length - 1) === "%") {
      percent = parseInt(skipOffset, 10);
      creative.skipDelay = creative.duration * (percent / 100);
    } else {
      creative.skipDelay = this.parseDuration(skipOffset);
    }
    videoClicksElement = this.childByName(creativeElement, "VideoClicks");
    if (videoClicksElement != null) {
      creative.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(videoClicksElement, "ClickThrough"));
      ref = this.childsByName(videoClicksElement, "ClickTracking");
      for (i = 0, len = ref.length; i < len; i++) {
        clickTrackingElement = ref[i];
        creative.videoClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
      }
      ref1 = this.childsByName(videoClicksElement, "CustomClick");
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        customClickElement = ref1[j];
        creative.videoCustomClickURLTemplates.push(this.parseNodeText(customClickElement));
      }
    }
    adParamsElement = this.childByName(creativeElement, "AdParameters");
    if (adParamsElement != null) {
      creative.adParameters = this.parseNodeText(adParamsElement);
    }
    ref2 = this.childsByName(creativeElement, "TrackingEvents");
    for (k = 0, len2 = ref2.length; k < len2; k++) {
      trackingEventsElement = ref2[k];
      ref3 = this.childsByName(trackingEventsElement, "Tracking");
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        trackingElement = ref3[l];
        eventName = trackingElement.getAttribute("event");
        trackingURLTemplate = this.parseNodeText(trackingElement);
        if ((eventName != null) && (trackingURLTemplate != null)) {
          if (eventName === "progress") {
            offset = trackingElement.getAttribute("offset");
            if (!offset) {
              continue;
            }
            if (offset.charAt(offset.length - 1) === '%') {
              eventName = "progress-" + offset;
            } else {
              eventName = "progress-" + (Math.round(this.parseDuration(offset)));
            }
          }
          if ((base = creative.trackingEvents)[eventName] == null) {
            base[eventName] = [];
          }
          creative.trackingEvents[eventName].push(trackingURLTemplate);
        }
      }
    }
    ref4 = this.childsByName(creativeElement, "MediaFiles");
    for (m = 0, len4 = ref4.length; m < len4; m++) {
      mediaFilesElement = ref4[m];
      ref5 = this.childsByName(mediaFilesElement, "MediaFile");
      for (n = 0, len5 = ref5.length; n < len5; n++) {
        mediaFileElement = ref5[n];
        mediaFile = new VASTMediaFile();
        mediaFile.id = mediaFileElement.getAttribute("id");
        mediaFile.fileURL = this.parseNodeText(mediaFileElement);
        mediaFile.deliveryType = mediaFileElement.getAttribute("delivery");
        mediaFile.codec = mediaFileElement.getAttribute("codec");
        mediaFile.mimeType = mediaFileElement.getAttribute("type");
        mediaFile.apiFramework = mediaFileElement.getAttribute("apiFramework");
        mediaFile.bitrate = parseInt(mediaFileElement.getAttribute("bitrate") || 0);
        mediaFile.minBitrate = parseInt(mediaFileElement.getAttribute("minBitrate") || 0);
        mediaFile.maxBitrate = parseInt(mediaFileElement.getAttribute("maxBitrate") || 0);
        mediaFile.width = parseInt(mediaFileElement.getAttribute("width") || 0);
        mediaFile.height = parseInt(mediaFileElement.getAttribute("height") || 0);
        scalable = mediaFileElement.getAttribute("scalable");
        if (scalable && typeof scalable === "string") {
          scalable = scalable.toLowerCase();
          if (scalable === "true") {
            mediaFile.scalable = true;
          } else if (scalable === "false") {
            mediaFile.scalable = false;
          }
        }
        maintainAspectRatio = mediaFileElement.getAttribute("maintainAspectRatio");
        if (maintainAspectRatio && typeof maintainAspectRatio === "string") {
          maintainAspectRatio = maintainAspectRatio.toLowerCase();
          if (maintainAspectRatio === "true") {
            mediaFile.maintainAspectRatio = true;
          } else if (maintainAspectRatio === "false") {
            mediaFile.maintainAspectRatio = false;
          }
        }
        creative.mediaFiles.push(mediaFile);
      }
    }
    iconsElement = this.childByName(creativeElement, "Icons");
    if (iconsElement != null) {
      ref6 = this.childsByName(iconsElement, "Icon");
      for (o = 0, len6 = ref6.length; o < len6; o++) {
        iconElement = ref6[o];
        icon = new VASTIcon();
        icon.program = iconElement.getAttribute("program");
        icon.height = parseInt(iconElement.getAttribute("height") || 0);
        icon.width = parseInt(iconElement.getAttribute("width") || 0);
        icon.xPosition = this.parseXPosition(iconElement.getAttribute("xPosition"));
        icon.yPosition = this.parseYPosition(iconElement.getAttribute("yPosition"));
        icon.apiFramework = iconElement.getAttribute("apiFramework");
        icon.offset = this.parseDuration(iconElement.getAttribute("offset"));
        icon.duration = this.parseDuration(iconElement.getAttribute("duration"));
        ref7 = this.childsByName(iconElement, "HTMLResource");
        for (p = 0, len7 = ref7.length; p < len7; p++) {
          htmlElement = ref7[p];
          icon.type = htmlElement.getAttribute("creativeType") || 'text/html';
          icon.htmlResource = this.parseNodeText(htmlElement);
        }
        ref8 = this.childsByName(iconElement, "IFrameResource");
        for (q = 0, len8 = ref8.length; q < len8; q++) {
          iframeElement = ref8[q];
          icon.type = iframeElement.getAttribute("creativeType") || 0;
          icon.iframeResource = this.parseNodeText(iframeElement);
        }
        ref9 = this.childsByName(iconElement, "StaticResource");
        for (r = 0, len9 = ref9.length; r < len9; r++) {
          staticElement = ref9[r];
          icon.type = staticElement.getAttribute("creativeType") || 0;
          icon.staticResource = this.parseNodeText(staticElement);
        }
        iconClicksElement = this.childByName(iconElement, "IconClicks");
        if (iconClicksElement != null) {
          icon.iconClickThroughURLTemplate = this.parseNodeText(this.childByName(iconClicksElement, "IconClickThrough"));
          ref10 = this.childsByName(iconClicksElement, "IconClickTracking");
          for (s = 0, len10 = ref10.length; s < len10; s++) {
            iconClickTrackingElement = ref10[s];
            icon.iconClickTrackingURLTemplates.push(this.parseNodeText(iconClickTrackingElement));
          }
        }
        icon.iconViewTrackingURLTemplate = this.parseNodeText(this.childByName(iconElement, "IconViewTracking"));
        creative.icons.push(icon);
      }
    }
    return creative;
  };

  VASTParser.parseNonLinear = function(creativeElement, creativeAttributes) {
    var adParamsElement, base, clickTrackingElement, creative, eventName, htmlElement, i, iframeElement, j, k, l, len, len1, len2, len3, len4, len5, len6, m, n, nonlinearAd, nonlinearResource, o, ref, ref1, ref2, ref3, ref4, ref5, ref6, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate;
    creative = new VASTCreativeNonLinear(creativeAttributes);
    ref = this.childsByName(creativeElement, "TrackingEvents");
    for (i = 0, len = ref.length; i < len; i++) {
      trackingEventsElement = ref[i];
      ref1 = this.childsByName(trackingEventsElement, "Tracking");
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        trackingElement = ref1[j];
        eventName = trackingElement.getAttribute("event");
        trackingURLTemplate = this.parseNodeText(trackingElement);
        if ((eventName != null) && (trackingURLTemplate != null)) {
          if ((base = creative.trackingEvents)[eventName] == null) {
            base[eventName] = [];
          }
          creative.trackingEvents[eventName].push(trackingURLTemplate);
        }
      }
    }
    ref2 = this.childsByName(creativeElement, "NonLinear");
    for (k = 0, len2 = ref2.length; k < len2; k++) {
      nonlinearResource = ref2[k];
      nonlinearAd = new VASTNonLinear();
      nonlinearAd.id = nonlinearResource.getAttribute("id") || null;
      nonlinearAd.width = nonlinearResource.getAttribute("width");
      nonlinearAd.height = nonlinearResource.getAttribute("height");
      nonlinearAd.expandedWidth = nonlinearResource.getAttribute("expandedWidth");
      nonlinearAd.expandedHeight = nonlinearResource.getAttribute("expandedHeight");
      nonlinearAd.scalable = this.parseBoolean(nonlinearResource.getAttribute("scalable"));
      nonlinearAd.maintainAspectRatio = this.parseBoolean(nonlinearResource.getAttribute("maintainAspectRatio"));
      nonlinearAd.minSuggestedDuration = this.parseDuration(nonlinearResource.getAttribute("minSuggestedDuration"));
      nonlinearAd.apiFramework = nonlinearResource.getAttribute("apiFramework");
      ref3 = this.childsByName(nonlinearResource, "HTMLResource");
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        htmlElement = ref3[l];
        nonlinearAd.type = htmlElement.getAttribute("creativeType") || 'text/html';
        nonlinearAd.htmlResource = this.parseNodeText(htmlElement);
      }
      ref4 = this.childsByName(nonlinearResource, "IFrameResource");
      for (m = 0, len4 = ref4.length; m < len4; m++) {
        iframeElement = ref4[m];
        nonlinearAd.type = iframeElement.getAttribute("creativeType") || 0;
        nonlinearAd.iframeResource = this.parseNodeText(iframeElement);
      }
      ref5 = this.childsByName(nonlinearResource, "StaticResource");
      for (n = 0, len5 = ref5.length; n < len5; n++) {
        staticElement = ref5[n];
        nonlinearAd.type = staticElement.getAttribute("creativeType") || 0;
        nonlinearAd.staticResource = this.parseNodeText(staticElement);
      }
      adParamsElement = this.childByName(nonlinearResource, "AdParameters");
      if (adParamsElement != null) {
        nonlinearAd.adParameters = this.parseNodeText(adParamsElement);
      }
      nonlinearAd.nonlinearClickThroughURLTemplate = this.parseNodeText(this.childByName(nonlinearResource, "NonLinearClickThrough"));
      ref6 = this.childsByName(nonlinearResource, "NonLinearClickTracking");
      for (o = 0, len6 = ref6.length; o < len6; o++) {
        clickTrackingElement = ref6[o];
        nonlinearAd.nonlinearClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
      }
      creative.variations.push(nonlinearAd);
    }
    return creative;
  };

  VASTParser.parseCompanionAd = function(creativeElement, creativeAttributes) {
    var base, child, clickTrackingElement, companionAd, companionResource, creative, eventName, htmlElement, i, iframeElement, j, k, l, len, len1, len2, len3, len4, len5, len6, len7, m, n, o, p, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, staticElement, trackingElement, trackingEventsElement, trackingURLTemplate;
    creative = new VASTCreativeCompanion(creativeAttributes);
    ref = this.childsByName(creativeElement, "Companion");
    for (i = 0, len = ref.length; i < len; i++) {
      companionResource = ref[i];
      companionAd = new VASTCompanionAd();
      companionAd.id = companionResource.getAttribute("id") || null;
      companionAd.width = companionResource.getAttribute("width");
      companionAd.height = companionResource.getAttribute("height");
      companionAd.companionClickTrackingURLTemplates = [];
      ref1 = this.childsByName(companionResource, "HTMLResource");
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        htmlElement = ref1[j];
        companionAd.type = htmlElement.getAttribute("creativeType") || 'text/html';
        companionAd.htmlResource = this.parseNodeText(htmlElement);
      }
      ref2 = this.childsByName(companionResource, "IFrameResource");
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        iframeElement = ref2[k];
        companionAd.type = iframeElement.getAttribute("creativeType") || 0;
        companionAd.iframeResource = this.parseNodeText(iframeElement);
      }
      ref3 = this.childsByName(companionResource, "StaticResource");
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        staticElement = ref3[l];
        companionAd.type = staticElement.getAttribute("creativeType") || 0;
        ref4 = this.childsByName(companionResource, "AltText");
        for (m = 0, len4 = ref4.length; m < len4; m++) {
          child = ref4[m];
          companionAd.altText = this.parseNodeText(child);
        }
        companionAd.staticResource = this.parseNodeText(staticElement);
      }
      ref5 = this.childsByName(companionResource, "TrackingEvents");
      for (n = 0, len5 = ref5.length; n < len5; n++) {
        trackingEventsElement = ref5[n];
        ref6 = this.childsByName(trackingEventsElement, "Tracking");
        for (o = 0, len6 = ref6.length; o < len6; o++) {
          trackingElement = ref6[o];
          eventName = trackingElement.getAttribute("event");
          trackingURLTemplate = this.parseNodeText(trackingElement);
          if ((eventName != null) && (trackingURLTemplate != null)) {
            if ((base = companionAd.trackingEvents)[eventName] == null) {
              base[eventName] = [];
            }
            companionAd.trackingEvents[eventName].push(trackingURLTemplate);
          }
        }
      }
      ref7 = this.childsByName(companionResource, "CompanionClickTracking");
      for (p = 0, len7 = ref7.length; p < len7; p++) {
        clickTrackingElement = ref7[p];
        companionAd.companionClickTrackingURLTemplates.push(this.parseNodeText(clickTrackingElement));
      }
      companionAd.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(companionResource, "CompanionClickThrough"));
      companionAd.companionClickTrackingURLTemplate = this.parseNodeText(this.childByName(companionResource, "CompanionClickTracking"));
      creative.variations.push(companionAd);
    }
    return creative;
  };

  VASTParser.parseDuration = function(durationString) {
    var durationComponents, hours, minutes, seconds, secondsAndMS;
    if (!(durationString != null)) {
      return -1;
    }
    if (VASTUtil.isNumeric(durationString)) {
      return parseInt(durationString);
    }
    durationComponents = durationString.split(":");
    if (durationComponents.length !== 3) {
      return -1;
    }
    secondsAndMS = durationComponents[2].split(".");
    seconds = parseInt(secondsAndMS[0]);
    if (secondsAndMS.length === 2) {
      seconds += parseFloat("0." + secondsAndMS[1]);
    }
    minutes = parseInt(durationComponents[1] * 60);
    hours = parseInt(durationComponents[0] * 60 * 60);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || minutes > 60 * 60 || seconds > 60) {
      return -1;
    }
    return hours + minutes + seconds;
  };

  VASTParser.parseXPosition = function(xPosition) {
    if (xPosition === "left" || xPosition === "right") {
      return xPosition;
    }
    return parseInt(xPosition || 0);
  };

  VASTParser.parseYPosition = function(yPosition) {
    if (yPosition === "top" || yPosition === "bottom") {
      return yPosition;
    }
    return parseInt(yPosition || 0);
  };

  VASTParser.parseBoolean = function(booleanString) {
    return booleanString === 'true' || booleanString === 'TRUE' || booleanString === '1';
  };

  VASTParser.parseNodeText = function(node) {
    return node && (node.textContent || node.text || '').trim();
  };

  VASTParser.copyNodeAttribute = function(attributeName, nodeSource, nodeDestination) {
    var attributeValue;
    attributeValue = nodeSource.getAttribute(attributeName);
    if (attributeValue) {
      return nodeDestination.setAttribute(attributeName, attributeValue);
    }
  };

  VASTParser.parseCreativeAdIdAttribute = function(creativeElement) {
    return creativeElement.getAttribute('AdID') || creativeElement.getAttribute('adID') || creativeElement.getAttribute('adId') || null;
  };

  return VASTParser;

})();

module.exports = VASTParser;

},{"./ad":2,"./companionad":4,"./creative":5,"./extension":6,"./extensionchild":7,"./icon":8,"./mediafile":10,"./nonlinear":11,"./response":13,"./urlhandler":15,"./util":18,"events":1}],13:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTResponse;

VASTResponse = (function() {
  function VASTResponse() {
    this.ads = [];
    this.errorURLTemplates = [];
  }

  return VASTResponse;

})();

module.exports = VASTResponse;

},{}],14:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var EventEmitter, VASTClient, VASTCompanionAd, VASTCreativeLinear, VASTNonLinear, VASTTracker, VASTUtil,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

VASTClient = require('./client');

VASTUtil = require('./util');

VASTCreativeLinear = require('./creative').VASTCreativeLinear;

VASTNonLinear = require('./nonlinear');

VASTCompanionAd = require('./companionad');

EventEmitter = require('events').EventEmitter;

VASTTracker = (function(superClass) {
  extend(VASTTracker, superClass);

  function VASTTracker(ad, creative, variation) {
    var eventName, events, ref;
    this.ad = ad;
    this.creative = creative;
    this.variation = variation != null ? variation : null;
    this.muted = false;
    this.impressed = false;
    this.skipable = false;
    this.skipDelayDefault = -1;
    this.trackingEvents = {};
    this.emitAlwaysEvents = ['creativeView', 'start', 'firstQuartile', 'midpoint', 'thirdQuartile', 'complete', 'resume', 'pause', 'rewind', 'skip', 'closeLinear', 'close'];
    this._alreadyTriggeredQuartiles = {};
    ref = this.creative.trackingEvents;
    for (eventName in ref) {
      events = ref[eventName];
      this.trackingEvents[eventName] = events.slice(0);
    }
    if (this.creative instanceof VASTCreativeLinear) {
      this.setDuration(this.creative.duration);
      this.skipDelay = this.creative.skipDelay;
      this.linear = true;
      this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate;
      this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
    } else {
      this.skipDelay = -1;
      this.linear = false;
      if (this.variation) {
        if (this.variation instanceof VASTNonLinear) {
          this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate;
          this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates;
        } else if (this.variation instanceof VASTCompanionAd) {
          this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate;
          this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates;
        }
      }
    }
    this.on('start', function() {
      VASTClient.lastSuccessfullAd = +new Date();
    });
  }

  VASTTracker.off = function(eventName, cb) {
    return this.removeListener(eventName, cb);
  };

  VASTTracker.prototype.setDuration = function(duration) {
    this.assetDuration = duration;
    return this.quartiles = {
      'firstQuartile': Math.round(25 * this.assetDuration) / 100,
      'midpoint': Math.round(50 * this.assetDuration) / 100,
      'thirdQuartile': Math.round(75 * this.assetDuration) / 100
    };
  };

  VASTTracker.prototype.setProgress = function(progress) {
    var eventName, events, i, len, percent, quartile, ref, skipDelay, time;
    skipDelay = this.skipDelay === null ? this.skipDelayDefault : this.skipDelay;
    if (skipDelay !== -1 && !this.skipable) {
      if (skipDelay > progress) {
        this.emit('skip-countdown', skipDelay - progress);
      } else {
        this.skipable = true;
        this.emit('skip-countdown', 0);
      }
    }
    if (this.linear && this.assetDuration > 0) {
      events = [];
      if (progress > 0) {
        events.push("start");
        percent = Math.round(progress / this.assetDuration * 100);
        events.push("progress-" + percent + "%");
        events.push("progress-" + (Math.round(progress)));
        ref = this.quartiles;
        for (quartile in ref) {
          time = ref[quartile];
          if (this.isQuartileReached(quartile, time, progress)) {
            events.push(quartile);
            this._alreadyTriggeredQuartiles[quartile] = true;
          }
        }
      }
      for (i = 0, len = events.length; i < len; i++) {
        eventName = events[i];
        this.track(eventName, true);
      }
      if (progress < this.progress) {
        this.track("rewind");
      }
    }
    return this.progress = progress;
  };

  VASTTracker.prototype.isQuartileReached = function(quartile, time, progress) {
    var quartileReached;
    quartileReached = false;
    if (time <= progress && !this._alreadyTriggeredQuartiles[quartile]) {
      quartileReached = true;
    }
    return quartileReached;
  };

  VASTTracker.prototype.setMuted = function(muted) {
    if (this.muted !== muted) {
      this.track(muted ? "mute" : "unmute");
    }
    return this.muted = muted;
  };

  VASTTracker.prototype.setPaused = function(paused) {
    if (this.paused !== paused) {
      this.track(paused ? "pause" : "resume");
    }
    return this.paused = paused;
  };

  VASTTracker.prototype.setFullscreen = function(fullscreen) {
    if (this.fullscreen !== fullscreen) {
      this.track(fullscreen ? "fullscreen" : "exitFullscreen");
    }
    return this.fullscreen = fullscreen;
  };

  VASTTracker.prototype.setExpand = function(expanded) {
    if (this.expanded !== expanded) {
      this.track(expanded ? "expand" : "collapse");
    }
    return this.expanded = expanded;
  };

  VASTTracker.prototype.setSkipDelay = function(duration) {
    if (typeof duration === 'number') {
      return this.skipDelay = duration;
    }
  };

  VASTTracker.prototype.load = function() {
    if (!this.impressed) {
      this.impressed = true;
      this.trackURLs(this.ad.impressionURLTemplates);
      return this.track("creativeView");
    }
  };

  VASTTracker.prototype.errorWithCode = function(errorCode) {
    return this.trackURLs(this.ad.errorURLTemplates, {
      ERRORCODE: errorCode
    });
  };

  VASTTracker.prototype.complete = function() {
    return this.track("complete");
  };

  VASTTracker.prototype.close = function() {
    return this.track(this.linear ? "closeLinear" : "close");
  };

  VASTTracker.prototype.stop = function() {};

  VASTTracker.prototype.skip = function() {
    this.track("skip");
    return this.trackingEvents = [];
  };

  VASTTracker.prototype.click = function() {
    var clickThroughURL, ref, variables;
    if ((ref = this.clickTrackingURLTemplates) != null ? ref.length : void 0) {
      this.trackURLs(this.clickTrackingURLTemplates);
    }
    if (this.clickThroughURLTemplate != null) {
      if (this.linear) {
        variables = {
          CONTENTPLAYHEAD: this.progressFormated()
        };
      }
      clickThroughURL = VASTUtil.resolveURLTemplates([this.clickThroughURLTemplate], variables)[0];
      return this.emit("clickthrough", clickThroughURL);
    }
  };

  VASTTracker.prototype.track = function(eventName, once) {
    var idx, trackingURLTemplates;
    if (once == null) {
      once = false;
    }
    if (eventName === 'closeLinear' && ((this.trackingEvents[eventName] == null) && (this.trackingEvents['close'] != null))) {
      eventName = 'close';
    }
    trackingURLTemplates = this.trackingEvents[eventName];
    idx = this.emitAlwaysEvents.indexOf(eventName);
    if (trackingURLTemplates != null) {
      this.emit(eventName, '');
      this.trackURLs(trackingURLTemplates);
    } else if (idx !== -1) {
      this.emit(eventName, '');
    }
    if (once === true) {
      delete this.trackingEvents[eventName];
      if (idx > -1) {
        this.emitAlwaysEvents.splice(idx, 1);
      }
    }
  };

  VASTTracker.prototype.trackURLs = function(URLTemplates, variables) {
    var ref;
    if (variables == null) {
      variables = {};
    }
    if (this.linear) {
      if (((ref = this.creative.mediaFiles[0]) != null ? ref.fileURL : void 0) != null) {
        variables["ASSETURI"] = this.creative.mediaFiles[0].fileURL;
      }
      variables["CONTENTPLAYHEAD"] = this.progressFormated();
    }
    return VASTUtil.track(URLTemplates, variables);
  };

  VASTTracker.prototype.progressFormated = function() {
    var h, m, ms, s, seconds;
    seconds = parseInt(this.progress);
    h = seconds / (60 * 60);
    if (h.length < 2) {
      h = "0" + h;
    }
    m = seconds / 60 % 60;
    if (m.length < 2) {
      m = "0" + m;
    }
    s = seconds % 60;
    if (s.length < 2) {
      s = "0" + m;
    }
    ms = parseInt((this.progress - seconds) * 100);
    return h + ":" + m + ":" + s + "." + ms;
  };

  return VASTTracker;

})(EventEmitter);

module.exports = VASTTracker;

},{"./client":3,"./companionad":4,"./creative":5,"./nonlinear":11,"./util":18,"events":1}],15:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var URLHandler, flash, xhr;

xhr = require('./urlhandlers/xmlhttprequest');

flash = require('./urlhandlers/flash');

URLHandler = (function() {
  function URLHandler() {}

  URLHandler.get = function(url, options, cb) {
    var ref, response;
    if (!cb) {
      if (typeof options === 'function') {
        cb = options;
      }
      options = {};
    }
    if (options.response != null) {
      response = options.response;
      delete options.response;
      return cb(null, response);
    } else if ((ref = options.urlhandler) != null ? ref.supported() : void 0) {
      return options.urlhandler.get(url, options, cb);
    } else if (typeof window === "undefined" || window === null) {
      return require('./urlhandlers/' + 'node').get(url, options, cb);
    } else if (xhr.supported()) {
      return xhr.get(url, options, cb);
    } else if (flash.supported()) {
      return flash.get(url, options, cb);
    } else {
      return cb(new Error('Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler'));
    }
  };

  return URLHandler;

})();

module.exports = URLHandler;

},{"./urlhandlers/flash":16,"./urlhandlers/xmlhttprequest":17}],16:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var FlashURLHandler;

FlashURLHandler = (function() {
  function FlashURLHandler() {}

  FlashURLHandler.xdr = function() {
    var xdr;
    if (window.XDomainRequest) {
      xdr = new XDomainRequest();
    }
    return xdr;
  };

  FlashURLHandler.supported = function() {
    return !!this.xdr();
  };

  FlashURLHandler.get = function(url, options, cb) {
    var xdr, xmlDocument;
    if (xmlDocument = typeof window.ActiveXObject === "function" ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) {
      xmlDocument.async = false;
    } else {
      return cb(new Error('FlashURLHandler: Microsoft.XMLDOM format not supported'));
    }
    xdr = this.xdr();
    xdr.open('GET', url);
    xdr.timeout = options.timeout || 0;
    xdr.withCredentials = options.withCredentials || false;
    xdr.send();
    xdr.onprogress = function() {};
    return xdr.onload = function() {
      xmlDocument.loadXML(xdr.responseText);
      return cb(null, xmlDocument);
    };
  };

  return FlashURLHandler;

})();

module.exports = FlashURLHandler;

},{}],17:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var XHRURLHandler;

XHRURLHandler = (function() {
  function XHRURLHandler() {}

  XHRURLHandler.xhr = function() {
    var xhr;
    xhr = new window.XMLHttpRequest();
    if ('withCredentials' in xhr) {
      return xhr;
    }
  };

  XHRURLHandler.supported = function() {
    return !!this.xhr();
  };

  XHRURLHandler.get = function(url, options, cb) {
    var xhr;
    if (window.location.protocol === 'https:' && url.indexOf('http://') === 0) {
      return cb(new Error('XHRURLHandler: Cannot go from HTTPS to HTTP.'));
    }
    try {
      xhr = this.xhr();
      xhr.open('GET', url);
      xhr.timeout = options.timeout || 0;
      xhr.withCredentials = options.withCredentials || false;
      xhr.overrideMimeType && xhr.overrideMimeType('text/xml');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            return cb(null, xhr.responseXML);
          } else {
            return cb(new Error("XHRURLHandler: " + xhr.statusText));
          }
        }
      };
      return xhr.send();
    } catch (error) {
      return cb(new Error('XHRURLHandler: Unexpected error'));
    }
  };

  return XHRURLHandler;

})();

module.exports = XHRURLHandler;

},{}],18:[function(require,module,exports){
// Generated by CoffeeScript 1.12.7
var VASTUtil;

VASTUtil = (function() {
  function VASTUtil() {}

  VASTUtil.track = function(URLTemplates, variables) {
    var URL, URLs, i, j, len, results;
    URLs = this.resolveURLTemplates(URLTemplates, variables);
    results = [];
    for (j = 0, len = URLs.length; j < len; j++) {
      URL = URLs[j];
      if (typeof window !== "undefined" && window !== null) {
        i = new Image();
        results.push(i.src = URL);
      } else {

      }
    }
    return results;
  };

  VASTUtil.resolveURLTemplates = function(URLTemplates, variables) {
    var URLTemplate, URLs, j, key, len, macro1, macro2, resolveURL, value;
    if (variables == null) {
      variables = {};
    }
    URLs = [];
    if (variables["ASSETURI"] != null) {
      variables["ASSETURI"] = this.encodeURIComponentRFC3986(variables["ASSETURI"]);
    }
    if (variables["CONTENTPLAYHEAD"] != null) {
      variables["CONTENTPLAYHEAD"] = this.encodeURIComponentRFC3986(variables["CONTENTPLAYHEAD"]);
    }
    if ((variables["ERRORCODE"] != null) && !/^[0-9]{3}$/.test(variables["ERRORCODE"])) {
      variables["ERRORCODE"] = 900;
    }
    variables["CACHEBUSTING"] = this.leftpad(Math.round(Math.random() * 1.0e+8).toString());
    variables["TIMESTAMP"] = this.encodeURIComponentRFC3986((new Date).toISOString());
    variables["RANDOM"] = variables["random"] = variables["CACHEBUSTING"];
    for (j = 0, len = URLTemplates.length; j < len; j++) {
      URLTemplate = URLTemplates[j];
      resolveURL = URLTemplate;
      if (!resolveURL) {
        continue;
      }
      for (key in variables) {
        value = variables[key];
        macro1 = "[" + key + "]";
        macro2 = "%%" + key + "%%";
        resolveURL = resolveURL.replace(macro1, value);
        resolveURL = resolveURL.replace(macro2, value);
      }
      URLs.push(resolveURL);
    }
    return URLs;
  };

  VASTUtil.encodeURIComponentRFC3986 = function(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  };

  VASTUtil.leftpad = function(str) {
    if (str.length < 8) {
      return ((function() {
        var j, ref, results;
        results = [];
        for (j = 0, ref = 8 - str.length; 0 <= ref ? j < ref : j > ref; 0 <= ref ? j++ : j--) {
          results.push('0');
        }
        return results;
      })()).join('') + str;
    } else {
      return str;
    }
  };

  VASTUtil.storage = (function() {
    var data, isDisabled, storage, storageError;
    try {
      storage = typeof window !== "undefined" && window !== null ? window.localStorage || window.sessionStorage : null;
    } catch (error) {
      storageError = error;
      storage = null;
    }
    isDisabled = function(store) {
      var e, testValue;
      try {
        testValue = '__VASTUtil__';
        store.setItem(testValue, testValue);
        if (store.getItem(testValue) !== testValue) {
          return true;
        }
      } catch (error) {
        e = error;
        return true;
      }
      return false;
    };
    if ((storage == null) || isDisabled(storage)) {
      data = {};
      storage = {
        length: 0,
        getItem: function(key) {
          return data[key];
        },
        setItem: function(key, value) {
          data[key] = value;
          this.length = Object.keys(data).length;
        },
        removeItem: function(key) {
          delete data[key];
          this.length = Object.keys(data).length;
        },
        clear: function() {
          data = {};
          this.length = 0;
        }
      };
    }
    return storage;
  })();

  VASTUtil.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  return VASTUtil;

})();

module.exports = VASTUtil;

},{}]},{},[9])(9)
});

var MYBTR=MYBTR||{};MYBTR.UList=function(){var s={pageSize:10},bfwire=!1,all=function(type){if(!$(".usermodal."+type).exists()){var y=s;$.extend(y,{pageSize:1e3,tab:type,withFollowership:!0}),$.getJSON("/ajax2.aspx?arg=profileuserlists",s,function(resp){0<((resp="friends"===type?resp.lists.friends:resp.lists.followers).count?parseInt(resp.count,10):0)&&resp&&($(".maincontent").append(function(typeClass,h2html,innerHtml){$("."+typeClass.replace(" ",".")+" a.close").live("click",function(event){event.preventDefault(),$(this).parent("div").parent("div").toggleClass("hide")});var modalHTML='<div class="modal '+typeClass+'">';return modalHTML+='<div id="light" class="modal-header"><a class="close">&times;</a><h3>'+h2html+"</h3></div>",modalHTML+='<div class="modal-body">'+innerHtml+"</div>",modalHTML+="</div>"}("usermodal "+type,$("h1.hostname").html()+("friends"===type?" Friends":" Followers"),$("#userTemplateExp").parseTemplate({users:"friends"===type?resp.friends:resp.followers}))),bfwire||(bfwire=!0,$(".followers_lst_exp ul a.btn").live("click",function(event){return MYBTR.ACQ.push($(this),"dofollowb",{})})))}),s.withFollowership=!1}$(".usermodal."+type).removeClass("hide")};return{setupProfile:function(args){var dfd=$.Deferred();return $.extend(s,args),$.getJSON("/ajax2.aspx?arg=profileuserlists",s,function(response){!function(resp){if((resp=resp.lists).followers){var ct1=resp.followers.count?parseInt(resp.followers.count,10):0;if($("#followers-count").text(ct1),0<ct1&&resp.followers.followers&&0<resp.followers.followers.length){var spanHTML=ct1>s.pageSize?'<a id="aAllFollowers" href="#/allfollowers">view all</a>':"";$(".divFollowers").removeClass("hide").html("<h2>Followers</h2><span>"+spanHTML+"</span><div id='tabfollowers' class='userlist_cont'><ul class='followers_lst'><li>Loading</li></ul></div>"),$(".followers_lst").html($("#userTemplate").parseTemplate({users:resp.followers.followers})),$("#aAllFollowers").click(function(event){event.preventDefault(),all("followers")})}}if(resp.friends){var ct2=resp.friends.count?parseInt(resp.friends.count,10):0;if(0<ct2&&resp.friends.friends&&0<resp.friends.friends.length){var spanHTML2=ct2>s.pageSize?'<a id="aAllFriends" href="#/allfriends">view all</a>':"",h2Html2=0===ct2?"0 Friends":1===ct2?"1 Friend":MYBTR.addCommas(ct2).toString()+" Friends";$(".divFriends").removeClass("hide").html("<h2>"+h2Html2+"</h2><span>"+spanHTML2+"</span><div id='tabfriends' class='userlist_cont'><ul class='friends_lst'><li>loading</li></ul></div>"),$(".friends_lst").html($("#userTemplate").parseTemplate({users:resp.friends.friends})),$("#aAllFriends").click(function(event){event.preventDefault(),all("friends")})}}resp.listeners&&0<(resp.listeners.count?parseInt(resp.listeners.count,10):0)&&resp.listeners.listeners&&0<resp.listeners.listeners.length&&($(".divListeners").removeClass("hide").html("<h2>Recent Listeners</h2><div id='tablisteners' class='userlist_cont'><ul class='listeners_lst'><li>loading</li></ul></div>"),$(".listeners_lst").html($("#userTemplate").parseTemplate({users:resp.listeners.listeners})))}(response),dfd.resolve()}),dfd},toggleFollow:function(sender,args){var bfollow="follow"!==$(sender).html(),title=$(sender).attr("title");$(sender).attr("title",bfollow?title.replace("unfollow","follow"):title.replace("follow","unfollow")).html(bfollow?"follow":"unfollow"),$(sender).toggleClass("btn-inverse",!bfollow),bfollow?$("#tooltip-follow").removeClass("hide"):$("#tooltip-follow").addClass("hide");var ogType=$('meta[property="og:type"]').attr("content");$.getJSON("/ajax2.aspx?arg=followbutton2011",{hid:$(sender).attr("hid"),ogType:ogType},function(resp){})},shareComplete:function(evt){var ogType=$('meta[property="og:type"]').attr("content");$.getJSON("/ajax2.aspx?arg=sharecomplete",{ogType:ogType,shareurl:encodeURI(document.URL)},function(resp){})}}}(),MYBTR.Countdown=function(){var s,minuteCheckShowStateInterval=null,minuteTimeUIInterval=null,stateIntervalAmt=6e4,UIIntervalAmt=6e4,ensureStateMinutely=function(){6e4===stateIntervalAmt&&null!==minuteCheckShowStateInterval||(stateIntervalAmt=6e4,null!==minuteCheckShowStateInterval&&clearInterval(minuteCheckShowStateInterval),minuteCheckShowStateInterval=setInterval(function(){MYBTR.Countdown.PageLiveCheck()},stateIntervalAmt))},PageLiveCheck=function(){$.getJSON("/ajax2.aspx?arg=showtimer",{sid:s.sid||s.showID,state:s.state},function(resp){switch((resp=resp.show).secondsLeft&&(s.secondsLeft=resp.secondsLeft),resp.duration&&(s.duration=resp.duration),resp.start&&(s.start=resp.start),resp.liveStreamUrl&&(s.liveStreamUrl=resp.liveStreamUrl),resp.state){case"upcoming":if(resp.ttl){var ttl=parseInt(resp.ttl,10);stateIntervalAmt=1e3*ttl,null!==minuteCheckShowStateInterval&&clearInterval(minuteCheckShowStateInterval),0<stateIntervalAmt&&(minuteCheckShowStateInterval=setInterval(function(){MYBTR.Countdown.PageLiveCheck()},stateIntervalAmt)),(!s.inMinute||ttl<=120)&&(s.inMinute=!0,UIIntervalAmt=1e3,null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval),minuteTimeUIInterval=setInterval(function(){MYBTR.Countdown.UpdateTimeUI()},UIIntervalAmt))}else ensureStateMinutely();break;case"waiting_for_host":ensureStateMinutely(),null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval);break;case"live":"live"===s.state||s.bProfile?($(".host-onair").removeClass("hide"),$(".btn.remind").remove()):EpisodeManager.stateChange(resp.state),$(".badge.onair").exists()?$(".badge.onair").removeClass("hide"):$("<div class='badge onair'>On Air</div> ").insertBefore(".page-episode [datetime]"),$(".page-episode .badge.onair").exists()||$("<a class='badge onair' href=\""+$("#UpcomingPagingContainer0 h2 a").attr("href")+'">On Air</a> ').insertBefore(".page-episode [datetime]"),ensureStateMinutely(),null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval);break;case"archived":EpisodeManager.stateChange(resp.state),$(".host-onair").removeClass("hide"),$(".btn.remind").addClass("hide"),null!==minuteCheckShowStateInterval&&clearInterval(minuteCheckShowStateInterval),null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval)}var stateChange=s.state!==resp.state;s.state=resp.state,$("#sState").html(resp.state),stateChange&&("upcoming"!==s.state&&$(".btn.remind-me").addClass("hide"),s.bProfile||EpisodeManager.stateChange(s.state)),UpdateTimeUI(resp.state)})},UpdateTimeUI=function(state){var oldstate=s.state,bHandleTimers=void 0===state;if("string"==typeof state&&(s.state=state),timeElem=$(".page-episode [datetime]"),timeElem.length){var updateLiveTime=!1;if("string"==typeof state&&state!==oldstate){var timeFormat="#episode_"+state;timeElem.attr("data-time-label",timeFormat).data("time-label",timeFormat),updateLiveTime=!0}if(void 0!==s.start&&s.start!=timeElem.attr("datetime")&&(timeElem.attr("datetime",s.start),updateLiveTime=!0),void 0!==s.duration&&6e4*s.duration!=timeElem.data("duration")){var duration=6e4*s.duration;timeElem.data("duration",duration).attr("data-duration",duration),updateLiveTime=!0}updateLiveTime&&timeElem.livetime()}switch(s.state){case"archived":timeElem.parent("div").removeClass("upcoming live"),bHandleTimers&&null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval),$(".badge.onair").exists()&&$(".badge.onair").remove();break;case"upcoming":bHandleTimers&&!s.inMinute&&getMSTilShowStarts()<=12e4&&(s.inMinute=!0,UIIntervalAmt=1e3,null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval),minuteTimeUIInterval=setInterval(function(){MYBTR.Countdown.UpdateTimeUI()},UIIntervalAmt)),timeElem.addClass("upcoming").parent("div").addClass("upcoming").removeClass("live");break;case"waiting_for_host":timeElem.removeClass("upcoming").parent("div").removeClass("upcoming").addClass("live");break;case"live":$(".btn.skype").removeClass("hide"),timeElem.removeClass("upcoming").parent("div").removeClass("upcoming").addClass("live"),s.bProfile||"live"===oldstate||($(".player-callin").removeClass("hide").show(),s.lp&&$("a.embed-episode").removeClass("hide"),$(".btn.remind").addClass("hide")),bHandleTimers&&(null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval),ensureStateMinutely())}},getMSTilShowStarts=function(){return s.showDateUTC-(new Date).getTime()+s.offsetms};return{init:function(args){switch((s=args).inMinute=!1,s.showDateMS=1e3*s.showDateUTC,s.showDateUTC=(new Date).setTime(s.showDateMS),args.state){case"archived":break;case"upcoming":s.ttl<2147483&&(getMSTilShowStarts()<12e4&&(UIIntervalAmt=1e3,s.inMinute=!0),stateIntervalAmt=1e3*parseInt(s.ttl,10),minuteTimeUIInterval=setTimeout(function(){setInterval(UpdateTimeUI,UIIntervalAmt)},250),setTimeout(PageLiveCheck,stateIntervalAmt));break;case"waiting_for_host":stateIntervalAmt=5e3,minuteCheckShowStateInterval=setInterval(PageLiveCheck,stateIntervalAmt);break;case"live":minuteCheckShowStateInterval=setInterval(PageLiveCheck,stateIntervalAmt)}s.ct&&(s.ct.w=s.ttl-s.ct.w,setTimeout(function(){var sct=s.ct;$.getJSON("/ajax2.aspx?arg=chatOpen",sct,function(resp){resp.chat&&"true"===resp.chat?($(".showchat").removeClass("hide").children("iframe").attr("src","http://"+window.location.host+sct.s).attr("height",sct.h),window.scroll(0,300),$(".comments-container").addClass("hide")):$(".showchat").addClass("hide")})},1e3*s.ct.when))},PageLiveCheck:PageLiveCheck,UpdateTimeUI:UpdateTimeUI,SetupLiveTime:function(){var timeFormats=$.livetime.options.formats;timeFormats.fulldate="eee, MMMM d, yyyy hh:mm tt",timeFormats.fulldate_on="on eee, MMMM d, yyyy hh:mm tt",timeFormats._default_tooltip="#fulldate",timeFormats.episode_default=[[-31104e3,"on MMMM d, yyyy"],["daystart-604800","on MMMM d at h:mm tt"],["daystart-518400","next eeee at h:mm tt"],["daystart-86400","eeee at h:mm tt"],["daystart","tomorrow at h:mm tt"],[-7200,"today at h:mm tt"],[-60,"td_m minutes d_s seconds until Show"],[0,"td_s seconds until Show"],["end-3600","end_td_h Hr, end_d_m Min Remaining"],["end-120","end_td_m Min Remaining"],["end-60","end_td_m Min, end_d_s Sec Remaining"],["end","end_td_s Sec Remaining"],[18e3,"td_h hours ago"],["dayend","today at h:mm tt"],["dayend+86400","yesterday"],["dayend+604800","last eeee"],["dayend+1123200","td_w week ago"],["dayend+2592000","td_w weeks ago"],["dayend+5184000","td_M month ago"],["dayend+31536000","td_M months ago"],["dayend+62985600","a year ago"],["dayend+63072000","td_y years ago"],["td_y years ago"]],timeFormats.episode_upcoming=timeFormats.episode_default,timeFormats.episode_waiting_for_host="Waiting for host to call in",timeFormats.episode_live=timeFormats.episode_default,timeFormats.episode_missed=timeFormats.episode_default,timeFormats.episode_archived=timeFormats.episode_default,$.livetime.options.serverTimeUrl="/javascript/empty.html",$("body").livetime()},getState:function(){return s.state}}}(),MYBTR.getEmbedCode=function(args){var height,url=globalConstants.html5PlayerHost+"?";url+="hostId="+args.hostID,args.showID?(url+="&episodeId="+args.showID,height=globalConstants.offsitePlayerSingleEpisodeHeight):height=globalConstants.offsitePlayerPlaylistHeight;var iframe="<iframe ";return iframe+='width="100%" ',iframe+='height="'+height+'px" ',iframe+='src="'+url+'" ',iframe+='frameborder="0" allowfullscreen></iframe>',$("#embedModal").removeClass("hide").show(),$("#PlayerCodeTextBox").val(iframe),$("#playerEmbedSample")[0].src!==url&&($("#playerEmbedSample")[0].src=url),iframe};
var MYBTR=MYBTR||{};MYBTR.setupEpisode=function(args){args.type="show",Player.setupPlayerControls(),PlayerSlideshow.init("#slideshow"),$(".btn.follow").bind("click",function(event){event.preventDefault();$(this).text();MYBTR.ACQ.push($(this),"dofollowb",{Host:$(this).attr("hid")})}),"upcoming"!==args.state&&"waiting_for_host"!==args.state&&"live"!==args.state||MYBTR.Countdown.init(args),"upcoming"===args.state&&$(".btn.remind").click(function(event){event.preventDefault(),MYBTR.RMDR.doit($(this),args)}),MYBTR.Countdown.SetupLiveTime(),MYBTR.setupEpisodeEmbed(args),setTimeout(function(){"unfollow"!=$(".btn.follow-host").text()&&($(".tooltip-follow").addClass("in"),setTimeout(function(){$(".tooltip-follow").removeClass("in")},8500))},2e3),$("a[data-time]").bind("click",function(event){event.preventDefault(),Player.seek(parseFloat($(this).data("time")))}),$(".showchat h3 a").on("click",function(e){e.preventDefault(),$(".showchat").toggleClass("open")})},EpisodeManager={goToSkype:function(){window.open("/listenerskype.aspx?showID="+Episode.showID,"CTT"+Episode.showID.toString(),"height=225px, width=300px,status= no, resizable= yes, scrollbars=no, toolbar=no,location=no,menubar=no "),alert("Heads up! We are stopping the player on this page so that you do not hear two out of synch streams when you call in with Skype Click to Talk. Once you are dialed in to the show you will hear it again."),Player.play(!1)},stateChange:function(state){switch(Episode.state=state){case"upcoming":case"waiting_for_host":break;case"live":Player.createPlayer(Episode),Player.setupPlayerControls(),$(".player-callin").removeClass("hide").show(),$(".btn.remind").addClass("hide");break;case"archived":Player.createPlayer(Episode),Player.setupPlayerControls(),$(".player-callin").addClass("hide"),$(".host-onair").removeClass("hide"),$(".btn.remind").addClass("hide"),null!==minuteCheckShowStateInterval&&clearInterval(minuteCheckShowStateInterval),null!==minuteTimeUIInterval&&clearInterval(minuteTimeUIInterval)}}},MYBTR.setupEpisodeEmbed=function(args){$("a.embed-episode").on("click",function(event){event.preventDefault(),MYBTR.getEmbedCode(args)}),$(".player-share").on("click",function(event){event.preventDefault(),MYBTR.getEmbedCode(args)}),$("#select-embed-size,#old-embed-toggle").on("change",function(event){event.preventDefault(),MYBTR.getEmbedCode(args)})};
var MYBTR=MYBTR||{};MYBTR.prettyPager=function(s){if(s.pageBaseClass||(s.pageBaseClass="btn"),s.count>s.pageSize){var pageContainerHTML=s.pageContainerClass.replace("."," "),pageContainerJS=s.pageContainerClass.replace(" ","."),bReplace=$(pageContainerJS).exists(),min=Math.max(s.page-4,1),max=Math.min(min+8,s.pages),str="";str+='<li class="'+(1==s.page?"disabled":"")+'"><a href="'+s.href+Math.max(s.page-1,1)+'">&laquo;</a></li>';for(var i=min;i<=max;i++)str+='<li class="'+(i==s.page?"active":"")+'"><a href="'+s.href+i+'">'+i+"</a></li>";str+='<li class="'+(s.page==s.pages?"disabled":"")+'"><a href="'+s.href+Math.min(s.page+1,s.pages)+'">&raquo;</a></li>',bReplace?$(pageContainerJS).html('<ul class="unstyled">'+str+"</ul>"):$(s.container).append("<div class='"+pageContainerHTML+"'><ul>"+str+"</ul></div>")}},MYBTR.setupProfileEmbed=function(args){$("a.embed-episode").on("click",function(event){event.preventDefault(),MYBTR.getEmbedCode($.extend(args,{userurl:args.hUrl.toString(),assetType:"multi",hostID:args.hostId}))}),$("#select-embed-size,#old-embed-toggle").on("change",function(event){event.preventDefault(),MYBTR.getEmbedCode($.extend(args,{userurl:args.hUrl.toString(),assetType:"multi",hostID:args.hostId}))})},MYBTR.upcomingProfilePaging=function(){var s={pageSize:1,page:1,pages:0,pageBaseClass:"btn small",container:".episodes-container.upPage",pageContainerClass:".upcoming.pagination",pageInput:"#txtPageUpcoming",href:"#upcoming/"},page=function(i){$(i).is("a")?s.page=parseInt($(i).attr("href").replace(s.href,""),10):s.page=parseInt($(i).val(),10),0===s.page?s.page=1:s.page>s.pages&&(s.page=s.pages),$(s.container).children(".s-container").hide(),$(s.container+" .s-container:nth-child("+(s.page+1)+")").show(),MYBTR.prettyPager(s)};return{init:function(args){$.extend(s,args),$(s.pageContainerClass+" a").live("click",function(event){event.preventDefault(),page(this)}),$(s.pageInput).live("blur",function(event){event.preventDefault(),page(this)}),$(s.pageInput).live("change",function(event){event.preventDefault(),page(this)})}}}(),MYBTR.setupProfile=function(args){$("[data-truncate]").each(function(){var truncate_length=$(this).data("truncate");$(this).jTruncate({length:truncate_length,minTrail:0,moreText:"read more",lessText:"shorten",ellipsisText:" ...",moreAni:200,lessAni:200})}),window.UserAccount.isAuthenticated&&$(".host-edit-callout").toggleClass("hide",window.UserAccount.hostId!=$("#hid").val());var extrasAdded=!1;$("a.show-extras").click(function(){extrasAdded||null===profExtras||(extrasAdded=!0,profExtras.showNotes&&$("div.show-xtras ul").append("<li><h2>Show Notes</h2><div classs='xtras-contents KonaBody'><p>"+profExtras.showNotes+"</p></div></li>"),profExtras.additionalCode&&$("div.show-xtras ul").append("<li><div class='xtras-contents'><p>"+profExtras.additionalCode+"</p></div></li>")),$(".show-xtras").fadeIn("slow"),$(this).fadeOut("slow")}),$("a.hide-this").click(function(){$(".show-xtras").fadeOut("slow"),$("a.show-extras").fadeIn("slow")}),setTimeout(function(){"unfollow"!=$(".btn.follow-host").text()&&($(".tooltip-follow").addClass("in"),setTimeout(function(){$(".tooltip-follow").removeClass("in")},8e3))},2e3),$(".btn.follow").bind("click",function(event){event.preventDefault();$(this).html();MYBTR.ACQ.push($(this),"dofollowb",{Host:s.hostID.toString()})}),$(".episode-container").on("click",function(e){document.location.href=$(".title > a",$(this)).attr("href")}),UserAccount.isAid||$.when(MYBTR.UList.setupProfile(args)).then(function(){$(document).trigger("domUpdated")}),MYBTR.setupProfileEmbed(args),$(".rss-btn_nw").bind("mouseover",function(event){event.preventDefault(),MYBTR.TT.rssFly(!0,Profile.hUrl+"/podcast",!1)}),$(".rss-btn_nw").bind("click",function(event){}),$(".itunes_nw").click(function(){}),MYBTR.Countdown.SetupLiveTime()};
var padstring = function (input, len, pad) {
    if (!pad) pad = "0";
    var result = input.toString();
    while (result.length < len)
        result = pad + result;
    return result;
}
var timeAsString = function (v, format) {

    if (!v || v === Infinity || isNaN(v) || !isFinite(v)) return "";

    var hours = Math.floor(v / 3600),
        minutes = Math.floor((v % 3600) / 60),
        seconds = Math.floor(v % 60),
        result = "";
    if (!format) var format = "00:00";

    var fat = format.split(":");
    if (fat.length > 0) var sec = fat.pop().length;
    if (fat.length > 0) var min = fat.pop().length;
    if (fat.length > 0) var hrs = fat.pop().length;

    if (hours || hrs) result += padstring(hours, hrs) + ":";
    result += padstring(minutes, min) + ":";
    result += padstring(seconds, sec);

    return result;
}

window.console = window.console || { log: function () { } };

// ------------------------------------------------------------
// IE8 SHIM
var getElementsByClassName = function (selector) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(selector);
    }

    return document.querySelectorAll(selector.charAt(0) == '.' ? selector : '.' + selector);
}

var setTextContent = function (elem, text) {
    if (typeof elem.textContent === 'undefined') {
        elem.innerText = text;
    } else {
        elem.textContent = text;
    }
}


var PlayerLogger = {
    logger: null,

    pendingLogs: [],

    setLogger: function () {
        var self = this;

        if (window.__requireReady) {
            require(['logger'], function (l) {
                self.logger = l;
                for (var index = 0; index < self.pendingLogs.length; index++) {
                    var logMessage = self.pendingLogs[index];
                    self.sendLog(logMessage.severity, logMessage.message, logMessage.exception);
                }
                self.pendingLogs = null;
            });
        } else {
            setTimeout(function () {
                self.setLogger();
            }, 100);
        }
    },

    info: function (message) {
        this.log('info', message);
    },

    warn: function (message) {
        this.log('warn', message);
    },

    debug: function (message) {
        this.log('debug', message);
    },

    error: function (message, exception) {
        this.log('error', message, exception);
    },

    fatal: function (message, exception) {
        this.log('fatal', message, exception);
    },

    log: function (severity, message, exception) {
        if (this.logger) {
            this.sendLog(severity, message, exception);
        } else {
            this.pendingLogs.push({ severity: severity, message: message, exception: exception });
        }
    },

    sendLog: function (severity, message, exception) {
        if (!this.logger) {
            return;
        }

        this.logger[severity]({ message: message, exception: exception, context: 'Player' });
    }

}

PlayerLogger.setLogger();


var Player = {
    INITIALIZATION_TIMEOUT: 3000,
    initialized: false,
    completedPlaylistItemCount: 0,
    config: {
        advertising: {
            client: "vast", //jwplayer vast setup
            companions: {
                "restore": true,
                "regions": [
                    { "id": "companion1", "width": "300", "height": "250", "index": 0 }
                ]
            },
            schedule: []
        },
        abouttext: "BlogTalkRadio",
        aboutlink: "https://www.blogtalkradio.com",
        aspectratio: "16:9",
        autostart: false,
        controls: false,
        file: false,
        flashplayer: '/scripts/lib/jwplayer/jwplayer.flash.swf',
        height: 335,
        html5player: '/scripts/lib/jwplayer/jwplayer.html5.js',
        image: false,
        primary: "html5",
        volume: 80,
        width: 770
    },

    initialize: function (callback) {
        if (Player.initialized) {
            (callback)();
            return;
        }

        setTimeout(function () {
            Player.onInitialized();
        }, Player.INITIALIZATION_TIMEOUT);

        Player.onInitialized = function (vastParameters) {
            if (Player.initialized) {
                return;
            }

            Player.initialized = true;
            (callback)(vastParameters);
        };
    },

    configure: function (args) {
        if (Player.debug) console.log('Player.configure', args);

        jwplayer.key = Episode.jwPlayerKey;
        this.isMobile = (navigator.userAgent.toLowerCase().match(/iP(hone|od|ad)|Android/i) != null);
        this.isMobileSafari = (navigator.userAgent.toLowerCase().match(/iP(hone|od|ad)/i) != null);
        this.useJwPlayer = this.isMobile ? false : args.useJwplayer;

        //Map our vars to the jwPlayer config object
        this.config.duration = Episode.Duration;//jwplayer needs a duration for midroll ads.
        this.config.file = Episode.showFile;
        this.config.image = Episode.showImage;

        if (this.isMobile) {
            this.config.autostart = false;
        }

        this.config.volume = $.cookie('jwplayer.volume') || 80;
        if (Episode.state == 'live') {
            Episode.IsOvaEnabled = false;
            this.config.primary = 'html5';
        }

        //Map our vars to the callback API
        this.trackingData.episode = Episode.showName;
        this.trackingData.file = Episode.showFile;
        this.trackingData.id = Episode.showID;
        this.trackingData.show = Episode.hostName;
        this.trackingData.url = Episode.showLink;
        this.trackingData.hostId = Episode.HostId;
        this.trackingData.category = Episode.Category;

        this.config.primary = 'html5';

        Player.track({ state: 'load', duration: 0 });

        if (Player.config.autostart) {
            Player.track({ state: 'autoplay' });

            if (Player.isMobile) {
                Player.track({ state: 'autoplay-mobile' });
            }
        }
    },

    createPlayer: function (args) {
        console.log('Host ID: ' + args.HostId + ', Episode ID: ' + args.showID);

        var self = this;

        if (Player.debug) console.log('Player.createPlayer', args);

        Player.trackingData.clientTimestampUtc = args.clientTimestampUtc;

        Player.initialize(function (vastParameters) {
            args.vastParameters = vastParameters;
            Player.configure(args);

            // set some variables because they're faster to reference than the element query
            Player['timelinebar'] = getElementsByClassName('bar')[0];
            Player['timelinebuffer'] = getElementsByClassName('buffer')[0];
            Player['timelinenow'] = getElementsByClassName('player-time')[0];
            Player['timelineall'] = getElementsByClassName('player-duration')[0];
            setTextContent(Player['timelineall'], timeAsString(Episode.Duration));

            if (Episode.state === 'upcoming' || Episode.state === 'waiting_for_host' || Episode.notReady) return;

            if (!self.useJwPlayer) {
                Player.instance = document.getElementById('player-audiotag-mp3');
                Player.instance.addEventListener('ended', Player.onComplete);
                Player.instance.addEventListener('error', Player.onError);
                Player.instance.addEventListener('loadedmetadata', Player.onMeta);
                Player.instance.addEventListener('pause', Player.onPause);
                Player.instance.addEventListener('playing', Player.onPlay);
                Player.instance.addEventListener('progress', Player.onBufferChange);
                Player.instance.addEventListener('timeupdate', Player.onTime);
                Player.instance.addEventListener('volumechange', Player.onVolume);
                Player.instance.addEventListener('canplaythrough', Player.onAudioDownloaded);
                Player.instance.addEventListener('canplay', Player.onLoaded);
                Player.onReady();

                if (!Player.isMobile && Player.config.autostart) {
                    Player.play();
                }

            } else { //desktop
                jwplayer.utils.isMobile = function () { return Player.isMobile; };

                Player.destroyPlayer();
                jwplayer('player').setup(Player.config);
                jwplayer('player').onBeforePlay(Player.onBeforePlay);
                jwplayer('player').onBuffer(Player.onBuffer);
                jwplayer('player').onBufferChange(Player.onBufferChange);
                jwplayer('player').onComplete(Player.onComplete);
                jwplayer('player').onError(Player.onError);
                jwplayer('player').onIdle(Player.onIdle);
                jwplayer('player').onMeta(Player.onMeta);
                jwplayer('player').onPause(Player.onPause);
                jwplayer('player').onPlay(Player.onPlay);
                jwplayer('player').onReady(Player.onReady);
                jwplayer('player').onSeek(Player.onSeek);
                jwplayer('player').onTime(Player.onTime);
                jwplayer('player').onVolume(Player.onVolume);
                Player.instance = jwplayer('player');
            }
        });
    },
    Data: {},
    destroyPlayer: function () {
        var element = document.getElementById('player_wrapper') || getElementsByClassName('jwplayer')[0];
        if (element) {
            element.parentNode.removeChild(element);
            var newElement = document.createElement('DIV');
            newElement.id = 'player';
            newElement.className = 'colapse';
            getElementsByClassName('player-wrapper')[0].appendChild(newElement);
        }
    },
    debug: (document.location.href.indexOf('www') < 0),
    duration: false,
    getBuffer: function () {
        return !this.useJwPlayer ? Math.min(this.instance.buffered.end(0) / this.instance.duration * 100, 100) : this.instance.getBuffer().toString();
    },
    getDuration: function () {
        return !this.useJwPlayer ? this.instance.duration : (this.instance.getDuration ? this.instance.getDuration() : -1);
    },
    getPlayer: function () {
        return document.getElementById('player-audiotag-mp3') || jwplayer('player');
    },
    getPosition: function () {
        return !this.useJwPlayer ? this.instance.currentTime : this.instance.getPosition();
    },
    getTimeStamp: function () {
        var rnNow = new Date();
        var rn = rnNow.getTime().toString().split(".").join("");
        var rn = parseFloat(rn); //back to number
        return rn;
    },
    getVolume: function () {
        return !this.useJwPlayer ? (this.instance.volume * 100) : this.instance.getVolume();
    },
    goToPrevEpisode: function (override) {
        if (Player.debug) console.log('Player.goToPrevEpisode', override);
        var settings = {
            url: Episode.ApiRootUrl + '/hosts/' + Episode.HostId + '/episodes/' + Episode.showID + '/prev',
            method: "GET",
            type: "GET",
            data: "{}",
            contentType: "application/json",
            xhrFields: { withCredentials: true }
        };
        $.ajax(settings).done(function (response) {
            if (response.Id != -1) {
                location.assign(response.FullUrl);
            }
        });
    },
    goToNextEpisode: function (override) {
        if (Player.debug) console.log('Player.goToNextEpisode', override);
        if (override !== true && (parseInt(Player.timelinebuffer.style.width) < 95)) return;
        var settings = {
            url: Episode.ApiRootUrl + '/player/host/' + Episode.HostId + '/episode/' + Episode.showID + '/next',
            method: "GET",
            type: "GET",
            data: {},
            contentType: "application/json",
            xhrFields: { withCredentials: true }
        };
        $.ajax(settings).done(function (response) {
            if (response.Id != -1) {
                location.assign(response.FullUrl);
            }
        });
    },
    instance: {},
    isMobile: false,
    isMobileSafari: false,
    useJwPlayer: true,
    isSeeking: false,
    audioLoaded: false,
    audioDownloaded: false,
    firstPlayFired: false,
    contentPlayFired: false,
    onPreRollAdFired: false,
    onPreRollAdCompleteFired: false,
    listenInterval: {},

    onBeforePlay: function (e) {
        if (Player.debug) console.log('Player.onBeforePlay', e);

        if (Episode.state == "live" && Player.useJwPlayer) {
            jwplayer().playAd(Episode.adTag);
        }
    },
    onLoaded: function () {
        Player.audioLoaded = true;
    },
    onBuffer: function (e) {
        if (Player.debug) console.log('Player.onBuffer', e);

        $('.player-controls').removeClass(Player.states.join(' ')).addClass('buffering');
    },
    onBufferChange: function (e) {
        if (Player.debug === "verbose") console.log('Player.onBufferChange', e);

        //jwplayer6 doesn't fire the onTime event for live streams
        if (Episode.state == "live" && Player.useJwPlayer) {
            return Player.onTime(e);
        }

        var audio = document.getElementById('player-audiotag-mp3'),
            buffer = !Player.useJwPlayer ? ((audio.buffered.length == 0 ? 100 : audio.buffered.end(0) / audio.duration) * 100) : e.bufferPercent;

        Player.timelinebuffer.style.width = buffer + "%";
        if (Player.getDuration() > 0 && Player.getDuration().toString().toLowerCase() != 'infinity') {
            setTextContent(Player.timelineall, timeAsString(Player.getDuration()));
        }
    },
    onComplete: function (e) {
        if (Player.debug) console.log('Player.onComplete', e);
        Player.track({ state: 'complete', duration: Player.getPosition() });

        clearInterval(Player.listenInterval);

        Player.completedPlaylistItemCount++;
        //don't redirect if chat is open. Don't redirect if no audio was loaded.
        if (!$('.showchat').is(':visible') && (parseInt(Player.timelinebuffer.style.width) > 95)) {
            Player.goToNextEpisode();
        }
    },
    onError: function (e) {
        console.log('Player.onError', e);

        if (!Player.useJwPlayer) {
            e['message'] = "An unknown error occurred.";
            switch (e.target.error.code) {
                case e.target.error.MEDIA_ERR_ABORTED:
                    e['message'] = 'User aborted the episode playback.';
                    break;
                case e.target.error.MEDIA_ERR_NETWORK:
                    e['message'] = ('A network error caused the media download to fail.');
                    break;
                case e.target.error.MEDIA_ERR_DECODE:
                    e['message'] = ('The audio playback was aborted due to a corruption problem or because the audio used features your browser did not support.');
                    break;
                case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    e['message'] = ('The audio could not be loaded, either because the server or network failed or because the format is not supported.');
                    break;
            }
        }

        clearInterval(Player.listenInterval);
        if (Episode.showFile.search(/backup=/i) < 0) {
            Episode.IsOvaEnabled = false;
            Episode.showFile += "&backup=1";
            Player.createPlayer(Episode);
        }

        Player.track({ state: 'error', duration: Player.getPosition(), event: e });
    },
    onIdle: function (e) {
        if (Player.debug) console.log('Player.onIdle', e);
        $('.player-controls').removeClass(Player.states.join(' ')).addClass('idle');
    },
    onMeta: function (argument) {
        if (Player.debug) console.log('Player.onMeta', argument);

        if (!Player.useJwPlayer) {
            if (Player.getDuration() > 0) {
                setTextContent(Player.timelineall, timeAsString(Player.getDuration()));
            }
        }

    },
    onPause: function (e) {
        if (Player.debug) console.log('Player.onPause', e);
        Player.track({ state: 'pause', duration: Player.getPosition() });

        clearInterval(Player.listenInterval);

        //ui updates
        $('.player-controls').removeClass(Player.states.join(' ')).addClass('paused');
        $('#play-call-to-action').show();
    },
    onPlay: function (e) {
        if (Player.debug) console.log('Player.onPlay', e);

        Player.isSeeking = false;

        //engagement callback
        //TODO: Remove when CORTEX CDH is removed
        clearInterval(Player.listenInterval);
        Player.listenInterval = setInterval(function () {
            Player.track({ state: 'play', duration: Player.getPosition(), call_GA: false });
        }, 60000);

        //ui updates
        $('.player-wrapper').toggleClass('playingAd', false);
        $('.player-controls').removeClass(Player.states.join(' ')).addClass('playing');
        $('#play-call-to-action').hide();

        //metrics
        Player.track({ state: 'play', duration: Player.getPosition() });
        //TODO: Remove when CORTEX CDH is removed
        Player.track({ state: 'play-by-hand', duration: Player.getPosition() });

        if (!Player.firstPlayFired) {
            Player.track({ state: Player.config.autostart ? 'play-init-auto' : 'play-init-user' });
            Player.track({ state: 'play-show', duration: Player.getPosition() });
            Player.track({ state: Player.config.autostart ? 'content-play-auto' : 'content-play-user', duration: Player.getPosition() });
            Player.firstPlayFired = true;
        }
    },
    onReady: function (args) {
        if (Player.debug) console.log('Player.onReady', args);

        if (window.location.hash) {
            var offset = window.location.hash.match(/t=\d+/i)[0].substr(2);;
            Player.seek(offset);
        }
        Player.track({ state: 'ready', duration: Player.getPosition() });
    },
    onSeek: function (e) {
        if (Player.debug) console.log('Player.onSeek', e);
        clearInterval(Player.listenInterval);
        Player.listenInterval = setInterval(function () {
            Player.track({ state: 'play', duration: Player.getPosition(), call_GA: false });
        }, 60000);
        Player.track({ state: 'jump', duration: Player.getPosition() });
        Player.isSeeking = false;
    },
    onTime: function (e) {
        var position, progress, duration;

        if (Player.debug === "verbose") console.log('Player.onTime', e);

        if (Episode.state == "live") {
            position = ((Date.now() - Episode.showDateUTC) / 1000);
            progress = Math.round(position / Episode.Duration * 100);
        } else {
            position = e.position || Player.getPosition();
            duration = Player.getDuration();
            progress = (position / duration * 100);
        }

        //don't redraw the timeline during seek so it's smoother for the user
        if (!Player.isSeeking) {
            Player.timelinebar.style.width = progress + "%";
        }

        setTextContent(Player.timelinenow, timeAsString(position));

        //iOS safari doesn't fire the 'progress' event
        if (Player.isMobileSafari) {
            Player.onBufferChange();
        }


    },
    onVolume: function (e) {
        var volume = parseInt($('.volume-icon').attr('data-volume'));

        $('.volume-icon').attr('data-volume', volume === 0 ? 3 : 0);
    },
    onAudioDownloaded: function (e) {
        if (Player.audioDownloaded) {
            return;
        }

        if (Player.debug) console.log('Player.onAudioDownloaded', e);
        Player.track({ state: 'audio-downloaded' });
        Player.audioDownloaded = true;
    },
    play: function (b) {
        if ((!this.useJwPlayer && !this.instance.paused) || b === false) {
            this.instance.pause(true);
            Player.onPause();
        } else {
            var ap = this.instance.play(b);
            if (!Player.firstPlayFired) {
                Player.onBuffer();
            }
            if (ap && ap.then) {
                ap.then(function () {
                }).catch(function (e) {
                    Player.onPause();
                    console.log("error on playing: " + e.message)
                });
            }
        }
    },
    seek: function (t) {
        if (Player.debug) console.log('Player.seek', t);
        Player.isSeeking = true;
        var time = 0;
        if (typeof t == "number") {
            //convert milliseconds if needed
            time = (t > 0 && t < 1) ? Math.round(t * 100) : Math.round(t);
        } else {
            //handle timestamps
            var a = t.split(":");
            var seconds = parseInt(a.pop()),
                minutes = parseInt(a.pop()),
                hours = parseInt(a.pop());
            time = seconds;
            if (minutes) time += (minutes * 60);
            if (hours) time += (hours * 3600);
        }
        if (!this.useJwPlayer) {
            this.instance.currentTime = time;
        } else {
            this.instance.seek(time);
        }
    },
    setVolume: function (v) {
        if (!this.useJwPlayer) {
            this.instance.volume = v / 100;
        } else {
            this.instance.setVolume(v);
        }
    },
    setupPlayerControls: function (a) {
        if (Player.debug) console.log('Player.setupPlayerControls');

        var clickEventName = Player.isMobile ? 'touchend' : 'click';

        $('.player-controls')
            .removeClass('hide')
            .removeClass(Player.states.join(' '))
            .removeClass(Player.statuses.join(' '))
            .addClass(Episode.state)
            .show();

        $('.player-share').data('tracker-label', Episode.showName);
        $('.player-download').data('tracker-label', Episode.showName);
        $('.player-download').attr('href', Episode.showLink + "?localembed=download");
        $('.player-download').attr('download', Episode.hostUrl + "-" + Episode.hostID + ".mp3");

        $('.player-play').unbind().on(clickEventName, function (e) {
            e.preventDefault();
            Player.play();
        });
        $('.player-next').unbind().on(clickEventName, function (e) {
            e.preventDefault();
            $(this).hide();
            Player.goToNextEpisode(true);
        });
        $('.player-timeline').unbind().on(clickEventName, function (e) {
            e.preventDefault();
            if (Episode.state != "archived") return;

            var x = (Player.isMobile && e.originalEvent.changedTouches) ? e.originalEvent.changedTouches[0].screenX : e.pageX,
                p = (x - $(this).offset().left) / $(this).width(),
                d = Player.getDuration(),
                s = p * d;

            Player.seek(s);

            $('.player-timeline > .bar').css('width', (p * 100) + "%");
        });
        $('.player-timeline').on('mousemove touchmove', function (e) {
            if (Episode.state == 'live') return;
            var mouseX = e.pageX - $(this).offset().left,
                position = mouseX / $(this).width(),
                duration = Player.getDuration(),
                time = position * duration;
            if (Player.isMobileSafari || isNaN(time) || time <= 0) return;
            document.getElementById('player-shuttle').style.left = (mouseX - 20) + "px";
            document.getElementById('player-shuttle').style.display = "block";
            setTextContent(document.getElementById('player-shuttle'), timeAsString(time));
        })
        $('.player-timeline').on('mouseout dragout', function (e) {
            document.getElementById('player-shuttle').style.display = "none";
        })

        //don't unbind the mute button twice
        $('.player-mute').on(clickEventName, function (e) {
            var v = (Player.getVolume() > 0) ? 0 : ($.cookie('jwplayer.volume') || 80);
            Player.setVolume(v);
            e.preventDefault();
        })

        $('#play-call-to-action').show();
        $('#play-call-to-action').on(clickEventName, function (e) {
            e.preventDefault();
            Player.play();
        });

        if (Episode.notReady) {
            $('.player-controls').removeClass(Player.states.join(' ')).addClass('processing');
        }
    },
    states: ['buffering', 'idle', 'paused', 'playingAd', 'processing', 'playing'],
    statuses: ['upcoming', 'waiting_for_host', 'live', 'archived'],
    track: function (overrides) {

        Player.trackingData.state = overrides.state;
        Player.trackingData.duration = overrides.duration ? Math.round(overrides.duration) : 0;
        if (!Player.useJwPlayer && !Player.isMobile) {
            Player.trackingData.version = "onsiteplayer-1.0-html5";
        }
        else if (!Player.useJwPlayer && Player.isMobile) {
            Player.trackingData.version = "onsiteplayer-1.0-html5Mobile";
        }

        console.log(Player.trackingData);

        if (overrides.call_BTR != false) {
            var request = new XMLHttpRequest();
            request.open('POST', '/player/callback', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(Player.trackingData));
        }
    },
    trackingData: {
        autostart: false,
        duration: 0,
        episode: "",
        file: "",
        id: 0,
        localembed: 'showpage',
        show: "",
        state: "",
        url: "",
        referrer: 'showpage',
        version: 'onsiteplayer-1.0',
        clientTimestampUtc: null,
        hostId: 0,
        category: ""
    }
}
var PlayerSlideshow = {
	index: 0,
	count: 0,
	mom: {},
	interval: 8000,
	oInterval: false,
	init: function (elementSelector) {
		this.mom = $(elementSelector);
		this.count = $('.slide',this.mom).length;
		this.mom.data('slide-count',this.count);
		if(this.count>=2) {
		    $('.slideshow-arrow').on('click',function(e) {
		        var fn = this.className.split(' ')[0];
		        PlayerSlideshow[fn]();
		        PlayerSlideshow.stop();
		        e.preventDefault();
		    });
		    this.start();
		} else {
			$('.slideshow-arrow').hide();
			$('.slide').toggleClass('active',true);
		}
	},
	start: function () {
	    this.oInterval = setInterval(this.next,this.interval);
	},
	stop: function () {
		clearInterval(this.oInterval);
		this.oInterval = false;
		setTimeout(MYBTR.start,12000);
	},
	next: function () {
		var me = (this===window) ? PlayerSlideshow : this;
		if(me.index < (me.count - 1)) {
			me.index++;
		} else {
			me.index = 0;
		}
		me.go(me.index);
	},
	prev: function () {
		if(this.index > 0) {
			this.index--;
		} else {
			this.index = (this.count - 1);
		}
		this.go(this.index);
	},
	go: function(index) {
		var slides = $('.slide',PlayerSlideshow.mom);
		slides.toggleClass('active',false);
		$(slides[index]).toggleClass('active',true);
	}
}
!function(a){function b(b,d){if(g[b]){var e=c(this),f=g[b].apply(e,d);return"undefined"==typeof f?a(this):f}throw new Error("method '"+b+"()' does not exist for slider.")}function c(b){var c=a(b).data("slider");if(c&&c instanceof f)return c;throw new Error(e.callingContextNotSliderInstance)}function d(b){var c=a(this);return c.each(function(){var c=a(this),d=c.data("slider"),e="object"==typeof b&&b;d&&!e&&(e={},a.each(a.fn.slider.defaults,function(a){e[a]=d[a]})),c.data("slider",new f(this,a.extend({},a.fn.slider.defaults,e)))}),c}var e={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},f=function(b,c){var d=this.element=a(b).hide(),e=a(b)[0].style.width,f=!1,g=this.element.parent();g.hasClass("slider")===!0?(f=!0,this.picker=g):this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div id="tooltip" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div><div id="tooltip_min" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div><div id="tooltip_max" class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)&&(this.touchCapable=!0);var h=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find("#tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.tooltip_min=this.picker.find("#tooltip_min"),this.tooltipInner_min=this.tooltip_min.find("div.tooltip-inner"),this.tooltip_max=this.picker.find("#tooltip_max"),this.tooltipInner_max=this.tooltip_max.find("div.tooltip-inner"),f===!0&&(this.picker.removeClass("slider-horizontal"),this.picker.removeClass("slider-vertical"),this.tooltip.removeClass("hide"),this.tooltip_min.removeClass("hide"),this.tooltip_max.removeClass("hide")),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%",this.tooltip_min.addClass("right")[0].style.left="100%",this.tooltip_max.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",e),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px",this.tooltip_min.addClass("top")[0].style.top=-this.tooltip_min.outerHeight()-14+"px",this.tooltip_max.addClass("top")[0].style.top=-this.tooltip_max.outerHeight()-14+"px"}var i=this;a.each(["min","max","step","value"],function(a,b){i[b]="undefined"!=typeof d.data("slider-"+b)?d.data("slider-"+b):"undefined"!=typeof c[b]?c[b]:"undefined"!=typeof d.prop(b)?d.prop(b):0}),this.value instanceof Array?f&&!this.range?this.value=this.value[0]:this.range=!0:this.range&&(this.value=[this.value,this.max]),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style,f===!0&&(this.handle1.removeClass("round triangle"),this.handle2.removeClass("round triangle hide"));var j=this.element.data("slider-handle")||c.handle;switch(j){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=this.diff>0?[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff]:[0,0,100],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.tooltip_separator=c.tooltip_separator,this.tooltip_split=c.tooltip_split,this.reversed=this.element.data("slider-reversed")||c.reversed,this.layout(),this.layout(),this.handle1.on({keydown:a.proxy(this.keydown,this,0)}),this.handle2.on({keydown:a.proxy(this.keydown,this,1)}),this.touchCapable&&this.picker.on({touchstart:a.proxy(this.mousedown,this)}),this.picker.on({mousedown:a.proxy(this.mousedown,this)}),"hide"===h?(this.tooltip.addClass("hide"),this.tooltip_min.addClass("hide"),this.tooltip_max.addClass("hide")):"always"===h?(this.showTooltip(),this.alwaysShowTooltip=!0):(this.picker.on({mouseenter:a.proxy(this.showTooltip,this),mouseleave:a.proxy(this.hideTooltip,this)}),this.handle1.on({focus:a.proxy(this.showTooltip,this),blur:a.proxy(this.hideTooltip,this)}),this.handle2.on({focus:a.proxy(this.showTooltip,this),blur:a.proxy(this.hideTooltip,this)})),this.enabled=c.enabled&&(void 0===this.element.data("slider-enabled")||this.element.data("slider-enabled")===!0),this.enabled?this.enable():this.disable()};f.prototype={constructor:f,over:!1,inDrag:!1,showTooltip:function(){this.tooltip_split===!1?this.tooltip.addClass("in"):(this.tooltip_min.addClass("in"),this.tooltip_max.addClass("in")),this.over=!0},hideTooltip:function(){this.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this.tooltip.removeClass("in"),this.tooltip_min.removeClass("in"),this.tooltip_max.removeClass("in")),this.over=!1},layout:function(){var a;if(a=this.reversed?[100-this.percentage[0],this.percentage[1]]:[this.percentage[0],this.percentage[1]],this.handle1Stype[this.stylePos]=a[0]+"%",this.handle2Stype[this.stylePos]=a[1]+"%","vertical"===this.orientation)this.selectionElStyle.top=Math.min(a[0],a[1])+"%",this.selectionElStyle.height=Math.abs(a[0]-a[1])+"%";else{this.selectionElStyle.left=Math.min(a[0],a[1])+"%",this.selectionElStyle.width=Math.abs(a[0]-a[1])+"%";var b=this.tooltip_min[0].getBoundingClientRect(),c=this.tooltip_max[0].getBoundingClientRect();b.right>c.left?(this.tooltip_max.removeClass("top"),this.tooltip_max.addClass("bottom")[0].style.top="18px"):(this.tooltip_max.removeClass("bottom"),this.tooltip_max.addClass("top")[0].style.top="-30px")}this.range?(this.tooltipInner.text(this.formater(this.value[0])+this.tooltip_separator+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(a[0]+(a[1]-a[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px",this.tooltipInner_min.text(this.formater(this.value[0])),this.tooltipInner_max.text(this.formater(this.value[1])),this.tooltip_min[0].style[this.stylePos]=this.size*(a[0]/100)-("vertical"===this.orientation?this.tooltip_min.outerHeight()/2:this.tooltip_min.outerWidth()/2)+"px",this.tooltip_max[0].style[this.stylePos]=this.size*(a[1]/100)-("vertical"===this.orientation?this.tooltip_max.outerHeight()/2:this.tooltip_max.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*a[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},mousedown:function(b){if(!this.isEnabled())return!1;this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.triggerFocusOnHandle(),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=this.reversed?100-c:c,this.layout(),this.touchCapable&&a(document).on({touchmove:a.proxy(this.mousemove,this),touchend:a.proxy(this.mouseup,this)}),a(document).on({mousemove:a.proxy(this.mousemove,this),mouseup:a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.setValue(f),this.element.trigger({type:"slideStart",value:f}).data("value",f).prop("value",f),!0},triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},keydown:function(a,b){if(!this.isEnabled())return!1;var c;switch(b.which){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){var d=c*this.percentage[2],e=this.percentage[a]+d;e>100?e=100:0>e&&(e=0),this.dragged=a,this.adjustPercentageForRangeSliders(e),this.percentage[this.dragged]=e,this.layout();var f=this.calculateValue();return this.setValue(f),this.element.trigger({type:"slideStop",value:f}).data("value",f).prop("value",f),!1}},mousemove:function(a){if(!this.isEnabled())return!1;this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.adjustPercentageForRangeSliders(b),this.percentage[this.dragged]=this.reversed?100-b:b,this.layout();var c=this.calculateValue();return this.setValue(c),!1},adjustPercentageForRangeSliders:function(a){this.range&&(0===this.dragged&&this.percentage[1]<a?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>a&&(this.percentage[1]=this.percentage[0],this.dragged=0))},mouseup:function(){if(!this.isEnabled())return!1;this.touchCapable&&a(document).off({touchmove:this.mousemove,touchend:this.mouseup}),a(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),this.inDrag=!1,this.over===!1&&this.hideTooltip();var b=this.calculateValue();return this.layout(),this.element.data("value",b).prop("value",b).trigger({type:"slideStop",value:b}),!1},calculateValue:function(){var a;return this.range?(a=[this.min,this.max],0!==this.percentage[0]&&(a[0]=Math.max(this.min,this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step)),100!==this.percentage[1]&&(a[1]=Math.min(this.max,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step)),this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,a<this.min?a=this.min:a>this.max&&(a=this.max),a=parseFloat(a),this.value=[a,this.value[1]]),a},getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},getValue:function(){return this.range?this.value:this.value[0]},setValue:function(a){a||(a=0),this.value=this.validateInputValue(a),this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=this.diff>0?[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff]:[0,0,100],this.layout();var b=this.range?this.value:this.value[0];this.element.trigger({type:"slide",value:b}).data("value",this.value).prop("value",this.value)},validateInputValue:function(b){if("number"==typeof b)return b;if(b instanceof Array)return a.each(b,function(a,b){if("number"!=typeof b)throw new Error(e.formatInvalidInputErrorMsg(b))}),b;throw new Error(e.formatInvalidInputErrorMsg(b))},destroy:function(){this.handle1.off(),this.handle2.off(),this.element.off().show().insertBefore(this.picker),this.picker.off().remove(),a(this.element).removeData("slider")},disable:function(){this.enabled=!1,this.handle1.removeAttr("tabindex"),this.handle2.removeAttr("tabindex"),this.picker.addClass("slider-disabled"),this.element.trigger("slideDisabled")},enable:function(){this.enabled=!0,this.handle1.attr("tabindex",0),this.handle2.attr("tabindex",0),this.picker.removeClass("slider-disabled"),this.element.trigger("slideEnabled")},toggle:function(){this.enabled?this.disable():this.enable()},isEnabled:function(){return this.enabled},setAttribute:function(a,b){this[a]=b},getAttribute:function(a){return this[a]}};var g={getValue:f.prototype.getValue,setValue:f.prototype.setValue,setAttribute:f.prototype.setAttribute,getAttribute:f.prototype.getAttribute,destroy:f.prototype.destroy,disable:f.prototype.disable,enable:f.prototype.enable,toggle:f.prototype.toggle,isEnabled:f.prototype.isEnabled};a.fn.slider=function(a){if("string"==typeof a&&"refresh"!==a){var c=Array.prototype.slice.call(arguments,1);return b.call(this,a,c)}return d.call(this,a)},a.fn.slider.defaults={min:0,max:10,step:1,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_separator:":",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formater:function(a){return a}},a.fn.slider.Constructor=f}(window.jQuery);