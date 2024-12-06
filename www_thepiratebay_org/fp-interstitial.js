(function(exoDynamicParams) {!function(e){var n="creativeDisplayed",t=function(){var e=document.currentScript;if(null==e||!e.getAttribute("data-idzone")){var n=0,t=Array.prototype.slice.call(document.querySelectorAll("script")).filter((function(e){return e.hasAttribute("data-idzone")&&""!==e.getAttribute("data-idzone")&&-1!==e.src.indexOf("fp-interstitial")}));do{e=t.pop()}while(null===e&&++n<5)}return e||(e=document.scripts[document.scripts.length-1]),e}();if(void 0!==t){var i="false"!=t.getAttribute("data-cookieconsent"),o=parseInt(t.getAttribute("data-idzone"));if(isNaN(o)){if(isNaN(parseInt(e.id_zone)))return;o=parseInt(e.id_zone)}var a=parseInt(t.getAttribute("data-ad_first_trigger_clicks")),r=parseInt(t.getAttribute("data-ad_next_trigger_clicks")),d=parseInt(t.getAttribute("data-ad_frequency_period"));isNaN(d)&&(d=e.ad_frequency_period||720);var s=parseInt(t.getAttribute("data-ad_frequency_count"));isNaN(s)&&isNaN(a)&&isNaN(r)&&(s=e.frequency_count||1);var c=exoDynamicParams.TRIGGER_BY_TIME;isNaN(a)||isNaN(r)||(c=exoDynamicParams.TRIGGER_BY_CLICKS);var l=parseInt(t.getAttribute("data-browser_settings"));isNaN(l)&&(l=e.browser_settings||exoDynamicParams.BROWSER_SETTINGS_ALL);var m=function(e){this.ua=e;var n=window.navigator.vendor,t=this.ua.toLowerCase(),i=!!window.chrome,o=-1!==t.indexOf("crios"),a=-1!==t.indexOf("opr"),r=-1!==t.indexOf("edg");try{return!(!i&&!o&&0!==n.indexOf("Google")||!0===a||!0===r)}catch(e){return!1}}(window.navigator.userAgent.toLowerCase());if((!m||l!==exoDynamicParams.BROWSER_SETTINGS_NON_CHROME_ONLY)&&(m||l!==exoDynamicParams.BROWSER_SETTINGS_CHROME_ONLY)){var u=t.getAttribute("data-ad_trigger_class");u||(u=e.ad_trigger_class||"");var p=parseInt(t.getAttribute("data-ad_trigger_method"));isNaN(p)?p=""!==u?exoDynamicParams.TRIGGER_METHOD_CLASS:exoDynamicParams.TRIGGER_METHOD_LINKS:p!==exoDynamicParams.TRIGGER_METHOD_LINKS&&p!==exoDynamicParams.TRIGGER_METHOD_CLASS&&(p=exoDynamicParams.TRIGGER_METHOD_LINKS);var f={},v="";if(t.getAttributeNames().filter((function(e){return e.search("data-ex_")>=0})).forEach((function(e){f[e.replace("data-","")]=t.getAttribute(e)})),Object.keys(f).length)for(var g in f)v+="&"+g+"="+f[g];var x,y,h=t.getAttribute("data-ad_sub")||"",_=t.getAttribute("data-ad_sub2")||"",b=t.getAttribute("data-ad_sub3")||"",E=t.getAttribute("data-ad_tags")||"",w=t.getAttribute("data-el")||"",I=!1,N="",T="",L="",R=.8,D=35,O=0,A=!1,C="ad_"+o,k="ad_"+o+"_css",S="zone-cap-"+o,P=null,G=screen.width+"x"+screen.height,B=1600,z=900,M=top===self?document.URL:document.referrer,F="iframe",H="video",q="image",V=null,K=null,Y=exoDynamicParams.DEVICE_ORIENTATION_PORTRAIT;j()&&(Y=exoDynamicParams.DEVICE_ORIENTATION_LANDSCAPE);var W="//"+exoDynamicParams.syndicationSubdomain+"/splash.php?idzone="+o+"&orientation="+Y+"&screen_resolution="+G+"&p="+encodeURIComponent(M)+(""!==w?"&el="+w:"")+(""!==h?"&sub="+h:"")+(""!==_?"&sub2="+_:"")+(""!==b?"&sub3="+b:"")+(""!==E?"&tags="+E:"")+"&cookieconsent="+i+v+"&scr_info="+encodeURIComponent(btoa(exoDynamicParams.scriptInfo));O=U(),window.addEventListener("resize",(function(){var e=exoDynamicParams.DEVICE_ORIENTATION_PORTRAIT,n=j();n&&(e=exoDynamicParams.DEVICE_ORIENTATION_LANDSCAPE),e!==Y&&(Y=e,W=(W=n?W.replace("orientation=portrait","orientation=landscape"):W.replace("orientation=landscape","orientation=portrait")).replace(/&screen_resolution=\d+(x)\d+&/,"&screen_resolution="+screen.width+"x"+screen.height+"&"),void 0!==x&&x.type!==F&&(A&&ae(),ne(O=U())&&(("mobile"!==y||e!==exoDynamicParams.DEVICE_ORIENTATION_LANDSCAPE||[F].indexOf(x.type)>=0)&&("desktop"!==y||e!==exoDynamicParams.DEVICE_ORIENTATION_PORTRAIT||[F].indexOf(x.type)>=0)||se(C,k))))}),!1),function(e,n){ne(O=U())&&se(e,n),document.addEventListener("click",de,!0)}(C,k)}}function U(){if(!i||!e.capping_enabled)return O;var n=function(n){if(!i||!e.capping_enabled)return!1;var t,o,a,r=document.cookie.split(";");for(t=0;t<r.length;t++)if(o=r[t].substr(0,r[t].indexOf("=")),a=r[t].substr(r[t].indexOf("=")+1),(o=o.replace(/^\s+|\s+$/g,""))===n)return unescape(a)}(S),t=void 0===n?0:parseInt(n);return isNaN(t)&&(t=0),t}function j(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)<=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function J(){V&&(clearTimeout(V),V=null)}function X(e,n){if(e.type!==F)return n?($(e),void J()):void(V||Z(e,C))}function Z(e,n){V=setTimeout((function(){$(e);var t=function(e){var n=document.getElementById(e);if(null===n)return!1;var t=n.getElementsByClassName("ex-over-btn-container")[0];return void 0!==t&&t.style.width}(n);K!==t?(K=t,Z(e,n)):J()}),100)}function $(e){var n=document.getElementById(C);if(null!==n){var t=n.getElementsByClassName(function(e){return e.type===q?"ex-over-img":e.type===H?"ex-over-video":e.type===F?"ex-over-iframe":""}(e))[0],i=n.getElementsByClassName("ex-over-btn-container")[0];void 0!==t&&(i.style.width=t.getBoundingClientRect().width+"px")}}function Q(e,n){j()&&(B=1600,z=900);var t,i="";i+="<div id='"+e+"' class='ex-over-top' style='display: none;'>",i+="<div class='ex-over-front "+(n.type===F?"ex-over-front-iframe":"")+"'>",i+="<div class='ex-over-btn-container'>",i+='<div class=\'ex-over-btn\'>Close Ad<svg width="12" height="12" viewBox="0 0 14 14" fill="#333333" xmlns="http://www.w3.org/2000/svg"><path d="M13.4166 1.87581L12.1241 0.583313L6.99992 5.70748L1.87575 0.583313L0.583252 1.87581L5.70742 6.99998L0.583252 12.1241L1.87575 13.4166L6.99992 8.29248L12.1241 13.4166L13.4166 12.1241L8.29242 6.99998L13.4166 1.87581Z"/></svg></div>',i+="</div>",i+="<div class='ex-over-inner-container'>",n.type===q?(i+="<a target='_blank' href='"+n.click+"'>",i+="<img class='ex-over-img' src='"+(n.optimum_content&&ExoSupport.supported("webp")?n.optimum_content:n.content)+"' alt='image'>",i+="</a>"):n.type===H?(i+="<a target='_blank' id='link_"+(t=btoa(o+"_"+Math.random()))+"' href='"+n.click+"'>",i+="<video id='video_"+t+"' class='ex-over-video' autoplay muted preload='auto' loop playsinline><source src='"+n.content+"' type='video/mp4'></video>",i+="</a>"):n.type===F&&(i+="<iframe class='ex-over-iframe' scrolling='no' src='"+n.content+"' sandbox='allow-pointer-lock allow-same-origin allow-popups allow-forms allow-scripts'></iframe>"),i+="</div>",i+="</div>",i+="</div>",function(e,n,t){var i,o;document.body.appendChild(function(e,n){var t,i=3*D,o="100%",a="100%";t=e===F?function(e,n,t,i){return"\n    div.ex-over-top {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 99999999999;\n        background: rgb(0,0,0, 0.8);\n        display: block;\n        text-align: center;\n    }\n    .ex-over-top > * {\n        display: inline-block;\n        vertical-align: middle;\n    }\n    \n    .ex-over-front-iframe {\n        width: calc(100% - "+e+"px);\n        height: calc("+i+" - "+e+"px);\n        max-width: 1800px;\n        max-height: 3200px;\n        margin-top: "+e/2+"px;\n        margin-bottom: "+e/2+"px;\n    }\n    \n    @media screen and (max-width: 480px) {\n        div.ex-over-front {\n            width: calc("+t+" - 51px);\n            height: calc("+i+" - 51px);\n            margin-top: 25.5px;\n            margin-bottom: 25.5px;\n        }\n    }\n    .ex-over-btn-container {\n        z-index: 1;\n        text-align: right;\n        position: relative;\n        margin-bottom: 10px;\n        transition: none;\n    }\n    \n    .ex-over-btn-container > .ex-over-btn {\n        height: 26px;\n        box-sizing: content-box !important;\n        font-family: sans-serif;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 13px;\n        line-height: 26px;\n        background: #FFFFFF;\n        color: #333;\n        cursor: pointer;\n        padding: 2px 10px;\n        margin: 0;\n        white-space: nowrap;\n        display: inline-block; \n    }\n    \n    .ex-over-btn-container > .ex-over-btn svg {\n        position: relative;\n        top: 2px;\n        margin-left: 10px;\n    }\n    \n    .ex-over-inner-container {\n        height: calc(100% - 38px);\n    }\n    \n    .ex-over-inner-container .ex-over-iframe {\n        width: 100%;\n        height: 100%;\n        display: block;\n        cursor: pointer;\n        border: 4px solid #FFFFFF;\n        box-sizing: border-box\n    }\n    \n}\n\n"}(i,0,o,a):function(e,n,t,i){return"\ndiv.ex-over-top {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99999999999;\n    text-align: center;\n    display: block;\n    right: 0;\n    bottom: 0;\n    background: rgb(0,0,0, "+R+');\n}\n\ndiv.ex-over-top:before {\n    height: 100%;\n}\n\ndiv.ex-over-top,\ndiv.ex-over-top:before {\n    content: "";\n    overflow: hidden;\n}\n\ndiv.ex-over-top:before,\n.ex-over-top > * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\ndiv.ex-over-front {\n    z-index: 10;\n    max-width: 1800px;\n    max-height: 3200px;\n    position: fixed;\n    width: calc('+t+" - "+e+"px);\n    height: calc("+i+" - "+e+"px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition: none;\n}\n@media screen and (max-width: 480px) {\n    div.ex-over-front {\n        width: calc("+t+" - 51px);\n        height: calc("+i+" - 51px);\n    }\n}\n\n.ex-over-btn-container {\n    z-index: 1;\n    text-align: right;\n    position: relative;\n    margin-bottom: 10px;\n    transition: none;\n}\n\n.ex-over-btn-container > .ex-over-btn {\n    height: 26px;\n    box-sizing: content-box !important;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 26px;\n    background: #FFFFFF;\n    color: #333;\n    cursor: pointer;\n    padding: 2px 10px;\n    margin: 0;\n    white-space: nowrap;\n    display: inline-block; \n}\n\n.ex-over-btn-container > .ex-over-btn svg {\n    position: relative;\n    top: 2px;\n    margin-left: 10px;\n}\n\n.ex-over-inner-container {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    position: relative;\n    min-height: 0;\n    flex-shrink: 1;\n    flex-grow: 0;\n}\n@media (orientation: landscape) {\n    .ex-over-inner-container {\n        flex-grow: 1;\n        flex-basis: 0%;\n        width: 100%;\n    }\n}\n.ex-over-front-iframe .ex-over-inner-container {\n    flex-grow: 1;\n    flex-basis: 0%;\n    width: 100%;\n}\n\n.ex-over-img,\n.ex-over-video,\n.ex-over-iframe {\n    height: auto;\n    max-width: 100%;\n    max-height: 100%;\n    cursor: pointer;\n    border: 4px solid #FFFFFF;\n}\n\n.ex-over-iframe {\n    width: 100%;\n    height: 100%;\n}"}(i,0,o,a);var r=document.createElement("style");return r.id=n,r.innerHTML=t,r}(e,n)),document.body.appendChild((i=t,(o=document.createElement("div")).innerHTML=i.trim(),o.firstChild))}(n.type,k,i);var a=document.getElementById("video_"+t);if(n.type===H&&null!=a&&n.original_imgurl){var r=a.play();void 0===r?ee(t,n.original_imgurl,z,B):r.then((function(e){})).catch((function(e){ee(t,n.original_imgurl,z,B)}))}}function ee(e,n,t,i){var o,a=document.getElementById("link_"+e);"gif"===(o=n.split("."))[o.length-1]&&null!=a&&(a.innerHTML='<img border="0" class="ex-over-video" width="'+t+'" height="'+i+'" src="'+n+'">')}function ne(e){var n=!0;if(c===exoDynamicParams.TRIGGER_BY_CLICKS){var t=e+1;(t<a||t>a&&(t-a)%r!=0)&&(n=!1)}return c===exoDynamicParams.TRIGGER_BY_TIME&&e>=s&&(n=!1),n}function te(e){for(var n=!1;!n&&e.tagName&&"body"!==e.tagName.toLowerCase();)"a"===e.tagName.toLowerCase()&&(n=!0),e=e.parentNode;return n}function ie(e){return function(e,n){for(var t=!1,i=0;i<n.length;i++)for(var o=e;!t&&o.classList;)o.classList.contains(n[i])&&(t=!0),o=o.parentNode;return t}(e,function(){var e,n=[];e=-1===u.indexOf(",")?u.split(" "):u.replace(/\s/g,"").split(",");for(var t=0;t<e.length;t++)""!==e[t]&&n.push(e[t]);return n}())}function oe(e,n){var t=document.getElementById(e);null!==t&&t.parentNode.removeChild(t);var i=document.getElementById(n);null!==i&&i.parentNode.removeChild(i)}function ae(){A=!1,oe(C,k),document.body.style.overflow=N,document.body.style.height=T,document.body.style.position=L,setTimeout((function(){"undefined"!==P&&null!==P&&P.click()}),150)}function re(e,n){var t=document.getElementById(e);if(null!==t){var i=t.getElementsByClassName("ex-over-btn")[0];void 0!==i&&i.addEventListener("click",ae);var o,a=t.getElementsByClassName("ex-over-inner-container")[0];n.type!==F?(void 0!==a&&(o=a.getElementsByTagName("a")[0]),void 0!==o&&o.addEventListener("click",ae)):void 0!==a&&void 0!==a.getElementsByTagName("iframe")[0]&&function(e){var n="hidden";function i(e){var i="visible",o="hidden",a={focus:i,focusin:i,pageshow:i,blur:o,focusout:o,pagehide:o};((e=e||window.event).type in a?a[e.type]:this[n]?o:i)===o&&"none"!==t.style.display&&ae()}n in document?document.addEventListener("visibilitychange",i):(n="mozHidden")in document?document.addEventListener("mozvisibilitychange",i):(n="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",i):(n="msHidden")in document?document.addEventListener("msvisibilitychange",i):"onfocusin"in document?document.onfocusin=document.onfocusout=i:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=i,void 0!==document[n]&&i({type:document[n]?"blur":"focus"})}();var r=function(){I||(I=!0)};if(n.type===q){var d=t.getElementsByClassName("ex-over-img")[0];void 0!==d&&d.addEventListener("load",r)}else if(n.type===H){var s=t.getElementsByClassName("ex-over-video")[0];void 0!==s&&s.addEventListener("canplay",r)}else n.type===F&&(I=!0);window.addEventListener("resize",(function(){X(n)})),window.addEventListener("orientationchange",(function(){X(n)}))}}function de(t){var a=t.composed?t.composedPath()[0]:t.target,r=t.composed?t.composedPath().some(te):te(a);if(A=!1,void 0!==x&&void 0!==x.mt_format&&""!==x.mt_format){if(x.mt_format.indexOf("mobile")>=0&&x.type!==F&&j())return;if(x.mt_format.indexOf("desktop")>=0&&x.type!==F&&!j())return}if(O=U(),e.capping_enabled?function(n,t,o){var a=n+1,r=!0;o&&(p===exoDynamicParams.TRIGGER_METHOD_CLASS&&(r=ie(t)),(c===exoDynamicParams.TRIGGER_BY_CLICKS&&r||c===exoDynamicParams.TRIGGER_BY_TIME&&ne(n)&&r)&&function(n,t,o){if(!i||!e.capping_enabled)return!1;o=parseInt(o,10);var a=new Date;a.setMinutes(a.getMinutes()+o);var r=encodeURI(t)+"; expires="+a.toUTCString()+"; path=/; ";document.cookie=n+"="+r}(S,a,d))}(O,a,r):++O,ne(O)&&(p===exoDynamicParams.TRIGGER_METHOD_LINKS&&r||p===exoDynamicParams.TRIGGER_METHOD_CLASS&&r&&ie(a))&&(A=function(e,n,t){var i=!1;if(I&&t){P=n;var o=document.getElementById(C);return null===o||o.classList.contains("ex-opened")||(e.preventDefault(),e.stopPropagation(),N=document.body.style.overflow,T=document.body.style.height,L=document.body.style.position,document.body.style.overflow="hidden",document.body.style.height="100vh",document.body.style.position="fixed",o.classList.add("ex-opened"),o.style.display="block",function(e,n){var t=document.createElement("img");t.style.width="1px",t.style.height="1px",t.src=n,document.getElementById(e).appendChild(t)}(C,x.tracker),X(x,!0),i=!0),i}}(t,a,r)),A){document.removeEventListener("click",de,!0);var s={id:"",tagName:"",classes:"",text:"",href:"",elm:""};void 0!==a&&null!=a&&(s={id:void 0!==a.id&&null!=a.id?a.id:"",tagName:void 0!==a.tagName&&null!=a.tagName?a.tagName:"",classes:void 0!==a.classList&&null!=a.classList?a.classList:"",text:void 0!==a.outerText&&null!=a.outerText?a.outerText:"",href:void 0!==a.href&&null!=a.href?a.href:"",elm:a}),t=new CustomEvent(n+"-"+o,{detail:s}),document.dispatchEvent(t);var l=document.getElementsByClassName("ex-over-iframe")[0];if(void 0!==l&&null!=l)var m=setTimeout((function(){l.contentWindow.postMessage(n,"*"),clearTimeout(m)}),200)}}function se(e,n){oe(e,n),function(e,n){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState){if(200!==t.status)return;n&&"function"==typeof n&&n(t.responseText)}},t.open("GET",e),t.withCredentials=!0,(navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues?navigator.userAgentData.getHighEntropyValues(["architecture","model","platformVersion","bitness","fullVersionList"]):new Promise(((e,n)=>{e(null)}))).then((e=>{e&&t.setRequestHeader("X-CH-VALUES",JSON.stringify(e)),t.send()}))}(W,(function(n){try{x=JSON.parse(n)}catch(e){return}void 0!==x.type&&void 0!==x.content&&void 0!==x.mt_format&&[q,H,F].indexOf(x.type)>=0&&(x.type!==q&&x.type!==H||void 0!==x.click)&&(x.mt_format.indexOf("mobile")>=0?(y="mobile",D=17):x.mt_format.indexOf("desktop")>=0&&(y="desktop"),Q(e,x),re(e,x))}))}}({id_zone:"undefined"!=typeof ad_idzone?ad_idzone:"",ad_frequency_period:"undefined"!=typeof ad_frequency_period?ad_frequency_period:720,ad_frequency_count:"undefined"!=typeof ad_frequency_count?ad_frequency_count:1,browser_settings:exoDynamicParams.BROWSER_SETTINGS_ALL,ad_trigger_method:"undefined"!=typeof ad_trigger_method?ad_trigger_method:exoDynamicParams.TRIGGER_METHOD_LINKS,ad_trigger_class:"undefined"!=typeof ad_trigger_class?ad_trigger_class:"",capping_enabled:"undefined"==typeof capping_enabled||capping_enabled});!function(){"use strict";function e(){var e,t,a,r,n=window.navigator.userAgent;this.features={webp:!0,mp4:!0},this.features.webp=function(e){var t=e.match(/MSIE/)||e.match(/rv:11/),a=!!e.match(/Firefox\/(\d+)/)&&parseInt(e.match(/Firefox\/(\d+)/)[1])<=64,r=!!e.match(/Version\/(\d+)/)&&parseInt(e.match(/Version\/(\d+)/)[1])<=15,n=!!e.match(/Chrome\/(\d+)/)&&parseInt(e.match(/Chrome\/(\d+)/)[1])<=8,c=!!e.match(/Edge\/(\d+)/)&&parseInt(e.match(/Edge\/(\d+)/)[1])<=17;if(t||a||r||n||c){var o=document.createElement("canvas");return!(!o.getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp")}return!0}(n),this.features.mp4=(t=(e=n).match(/MSIE [6-8]/),a=!!e.match(/Firefox\/(\d+)/)&&parseInt(e.match(/Firefox\/(\d+)/)[1])<=20,r=!!e.match(/(Opera|OPR)\/(\d+)/)&&parseInt(e.match(/(Opera|OPR)\/(\d+)/)[2])<=24,!(t||a||r)||!!document.createElement("video").canPlayType&&!!document.createElement("video").canPlayType("video/mp4"))}e.prototype.supported=function(e){return this.features[e]},window.ExoSupport=new e}();})({"syndicationSubdomain":"syndication.exdynsrv.com","BROWSER_SETTINGS_ALL":1,"BROWSER_SETTINGS_NON_CHROME_ONLY":0,"BROWSER_SETTINGS_CHROME_ONLY":2,"TRIGGER_METHOD_CLASS":2,"TRIGGER_METHOD_LINKS":3,"TRIGGER_BY_TIME":0,"TRIGGER_BY_CLICKS":1,"DEVICE_ORIENTATION_PORTRAIT":"portrait","DEVICE_ORIENTATION_LANDSCAPE":"landscape","scriptInfo":"fp-interstitial||1"})