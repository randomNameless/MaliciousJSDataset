function TaaSDynamic(){var a=window["cookies-browser"]||raptor.require("ebay.cookies");this.readCookie=function(c,b){var d=undefined;if(a.readCookieAsync){d=a.readCookieAsync(c,b)}else{d=a.readCookie(c,b)}return d};this.writeCookielet=function(d,c,e,b,f){if(a.writeCookieletAsync){a.writeCookieletAsync(d,c,e,b,f)}else{a.writeCookielet(d,c,e,b,f)}};this.writeCookieletSync=function(d,c,e,b,f){a.writeCookielet(d,c,e,b,f)};this.readMultiLineCookie=function(c,b){if(a.readMultiLineCookieAsync){return a.readMultiLineCookieAsync(c,b)}else{return a.readMultiLineCookie(c,b)}};this.writeMultiLineCookie=function(d,b,e,f,c){a.writeMultiLineCookie(d,b,e,f,c)};this.writeCookie=function(b,c,d){if(a.writeCookieAsync){a.writeCookieAsync(b,c,d)}else{a.writeCookie(b,c,d)}}}var TaaSDynamicObj=new TaaSDynamic();function attachTrackingListener(b,a){window.jQuery?$(document).on(b,a):document.addEventListener(b,a,false)}window.triggerTracking=function(c,b){var a=document.createEvent("CustomEvent");a.initCustomEvent(c,false,false,b);document.dispatchEvent(a)};var $trk=null;(function(){function b(g){for(var e=1;e<arguments.length;e++){var f=arguments[e];for(var d in f){if(Object.prototype.hasOwnProperty.call(f,d)){g[d]=f[d]}}}return g}function c(e){var d=$trk=this;b(d,d.config=e);d.image=document.createElement("img");d.image.style.display="none";if(d.rover.sync){d.image.attr("src",d.rover.sync)}d.originalPSI=d.currentPSI=e.psi;attachTrackingListener("mousedown",d.onBody);attachTrackingListener("keydown",d.keyDown);attachTrackingListener("rover",d.onRover);attachTrackingListener("track",d.onTrack);attachTrackingListener("pulsar",d.onPulsar);attachTrackingListener("TRACKING_UPDATE_PSI",d.trackingUpdatePSI);attachTrackingListener("ADD_LAYER_PSI",d.addLayerPSI);attachTrackingListener("CLEAR_LAYER_PSI",d.clearLayerPSI)}b(c.prototype,{codes:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","-","_","!"],sizes:{p:4,c:1,m:3,l:3},start:{p:1,c:5,m:6,l:9},target:function(d){return(d.tagName)?d:d.target},attrib:function(e,d){return e.getAttribute?e.getAttribute(d):null},valid:function(d,e){return(e&&(e.indexOf(".ebay.")>0))?d:null},trackable:function(f){var e=$trk,d=f.tagName;if(d.match(/^a$|area/i)){return e.valid(d,d.href)}else{if(d.match(/input/)&&d.type.match(/submit/i)&&d.form){return e.valid(d,form.action)}else{return null}}},click:function(h){var f=$trk,j=f.target(h);var k,d,e,g;for(var i=null;(j&&j.tagName);j=j.parentNode){i=i||f.trackable(j);if(f.attrib(j,"_sp")){e=j;return f.clickElement(e,i)}if("A"===j.tagName){k=j}if("BUTTON"===j.tagName){d=j}if("INPUT"===j.tagName){g=j}}if(k||d||g){return f.clickElement(k||d||g,i)}},clickElement:function(e,f){var d=$trk,g=d.attrib(e,"_sp");if(g==null){g=d.pid}d.track(g.split(";")[0],f?d.attrib(f,"_l"):null)},track:function(o,g){var p=$trk,h=o.split(".");if(!o.match(/p\d+/)){h.push(p.pid)}if(g){h.push(g)}var e="";var k=p.chars((e&&(e.charAt(0)=="b"))?e:"bzzzzzzzzzzz");for(var m=0,j=h.length;(m<j);m++){var i=h[m].match(/([pcml])(\d+)/);if(i==null){continue}var n=i[1],l=i[2];var r=p.sizes[n],d=p.start[n];var f=p.chars(p.encode(l,r));for(var q=0;(q<r);q++){k[d+q]=f[q]}}var m=0,j=k.length,e="";while(m<j){e=e.concat(k[m++])}TaaSDynamicObj.writeCookieletSync("ds2","sotr",e);if(p.currentPSI!==null|p.currentPSI!==undefined){TaaSDynamicObj.writeCookieletSync("ebay","psi",$trk.currentPSI)}},chars:function(f){var e=0,d=f.length,g=[];while(e<d){g.push(f.charAt(e++))}return g},encode:function(e,f){for(var d=$trk.codes,g="";(e>=64);e=e/64|0){g=d[e%64]+g}g=((e>=0)?d[e]:"")+g;return g.concat("zzzz").substring(0,f)},onBody:function(d){if(d.button==0||d.button==1){$trk.click(d)}},keyDown:function(d){if(d.key==="Enter"){$trk.click(d)}},onTrack:function(e,d){var f=d.trksid;if(f){$trk.track(f,d.trklid)}},onRover:function(j,g){if(j.detail!=undefined&&j.detail!=null){g=j.detail}else{if(!g||typeof g!=="object"){return}}var f=$trk;var i=g.imp;var e=f.rover.uri+(i?f.rover.imp:f.rover.clk);var d;var h;delete g.imp;if(i){h=a(i,"&",true)}if(g){g.ts=Date.now();d=a(g,"&",true)}if(d&&d.length>0){e+=(e.indexOf("?")<0?"?":"&")+"trknvp="+d}if(h&&h.length>0){e+=(e.indexOf("?")<0?"?":"&")+"imp="+h}f.image.src=e},onPulsar:function(h,k,e){if(typeof _plsUBTTQ!=="undefined"){if((typeof k==="undefined"||k==null)&&h.detail!=null){if(Array.isArray(h.detail)){k=h.detail[0];e=h.detail[1]}else{k=h.detail}}if(typeof k!=="undefined"&&k!=null){var g=(JSON.parse(JSON.stringify(k)));var f=g.eventProperty;if(typeof e!=="undefined"&&e!=null){var i=(JSON.parse(JSON.stringify(e)));if(typeof f!=="undefined"&&f!=null){f.actionKind=i.actionKind}}if(g.eventFamily!=null&&g.eventAction!=null){if(typeof f.ciid==="undefined"&&$trk!=null){var d=$trk;var j=d.currentPSI;if(j.startsWith("A")){j=j.substring(1)}f.ciid=j}_plsUBTTQ.push(["customEvts",g.eventFamily,g.eventAction,f])}}}},trackingUpdatePSI:function(e,d){if(e.detail!=undefined&&e.detail!=null){d=e.detail}if(d&&d.psi){self.currentPSI=d.psi}if(d&&d.callback&&typeof(d.callback)=="function"){d.callback.call(self)}},addLayerPSI:function(e,d){if(e.detail!=undefined&&e.detail!=null){d=e.detail}if(d&&d.psi){self.currentPSI=self.currentPSI+d.psi}},clearLayerPSI:function(d){self.currentPSI=self.originalPSI}});window.TaaSTrackingCore=c;function a(f,e,i){if(f&&typeof f==="object"){var d=[];Object.keys(f).forEach(function h(j){d.push(j+"="+f[j])});var g=d.join(e||",");return i?encodeURIComponent(g):g}else{return i?encodeURIComponent(f):f}}})();var idmapRoverURL;function TaaSIdMapTracker(){this.roverService=function(a){if(window.location.protocol=="https:"||!a||TaaSDynamicObj.readCookie("dp1","idm")){return}idmapRoverURL=a;window.jQuery?$(window).on("load",this.sendRequest):window.addEventListener("load",this.sendRequest,false)};this.sendRequest=function(){if(idmapRoverURL.indexOf("?")>-1){idmapRoverURL+="&"}else{idmapRoverURL+="?"}idmapRoverURL+="cb=TaaSIdMapTrackerObj.handleResponse";idmapRoverURL=encodeURI(idmapRoverURL)+"&cache="+Math.random();var a=document.createElement("script");a.setAttribute("src",idmapRoverURL);a.setAttribute("type","text/javascript");document.body.appendChild(a)};this.setCookieExpiration=function(a){if(typeof a=="number"&&a>0){TaaSDynamicObj.writeCookielet("dp1","idm","1",a/86400,"")}};this.handleResponse=function(c){if(c&&c.length>1){var b=c.length-1;for(var a=0;a<b;a++){this.createImage(c[a])}this.setCookieExpiration(c[b])}};this.createImage=function(a){if(a&&a.length>1){var b=document.createElement("IMG");b.width="1";b.height="1";b.src=a;b.alt="";document.body.appendChild(b)}}}var tracking=tracking||(function(){return{}})();tracking.roversync=(tracking.roversync&&QUnit===undefined)||(function(){var d="1.3";var a=2;var f;var p=Date.now();var g;var j;var u;var o=window.location.hostname;var t;var n;var b;var e;var c;function h(x){var y;if(window.XMLHttpRequest){y=new window.XMLHttpRequest()}else{y=new ActiveXObject("Microsoft.XMLHTTP")}y.withCredentials=false;y.open("GET",x,true);y.send("")}function v(x){if(x==null||x===undefined){return false}return((x.naturalWidth==1&&x.naturalHeight==1)||(x.width==1&&x.height==1))}function w(y){if(y==null){return null}var z=encodeURIComponent;var A="host="+y.hostname+"&ifm="+y.imgFindMethod+"&hasImg ="+y.hasImg+"&hasNons="+(y.nonsession!=null)+"&hasNpii="+(y.npii!=null)+"&hasSess="+(y.s!=null)+"&nonSess="+z(y.nonsession)+"&npii="+z(y.npii)+"&ris="+y.roversyncImgStatus+"&s="+z(y.s)+"&winLoc="+z(y.winLoc);var x="/?_trkparms="+z(A);return x}function s(E){var C=E+"=";var z=document.cookie.split(";");for(var B=0;B<z.length;B++){var D=z[B];D=D.trim();var A=D.indexOf(C);if(A==0){var y=D.indexOf("=");var x=D.substring(y+1);return x}}return null}function m(){var x=document.getElementById("roversyncimg");if(x!=null){return{img:x,method:"id"}}var A=document.body.lastChild;var z=new RegExp("^(http|https)://rover.*.ebay.*/roversync/*","i");for(var y=0;y<=40&&A!=null;y++){if(A!=null){if(A.src!=null&&z.test(A.src)){x=A;return{img:x,method:"sibling"}}A=A.previousSibling}}return{img:x,method:null}}function q(){return{err:f,hasImg:u,handEndTime:g,handStartTime:j,handElapsedMs:(g-j),hostname:o,imgFindMethod:t,roversyncImgStatus:n,sampling:b,startTime:p,url1:e,url2:c}}function l(){return d}function r(){if(!k()){b=false;return}b=true}function k(){var x=100;var y=s("roversyncSampling");if(y!=null&&!isNaN(y)){x=Number(y)}else{if(tracking._RSRandomSamplingPct!=null&&!isNaN(tracking._RSRandomSamplingPct)){x=tracking._RSRandomSamplingPct}else{x=a}}return Math.random()<(x/100)}function i(){console.log("err="+f+(f!=null?" err.description="+f.description+" err.message="+f.message+" err.name="+f.name+" err.number="+f.number:"")+" hasImg="+u+" handEndTime="+g+" handStartTime="+j+" handElapsedMs="+(g-j)+" hostname="+o+" imgFindMethod="+t+" roversyncImgStatus="+n+" sampling="+b+" startTime="+p+" url1="+e+" url2="+c)}r();return{getVersion:l,logStatus:i}})();