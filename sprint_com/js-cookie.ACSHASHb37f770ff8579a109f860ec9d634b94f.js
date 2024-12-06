window.phoenix&&(window.phoenix.buildInfo||(window.phoenix.buildInfo=[]),-1===window.phoenix.buildInfo.findIndex((e=>"Phoenix-platform"===e.MFE))&&window.phoenix.buildInfo.push({MFE:"Phoenix-platform",VERSION:"75f67d4",LASTCOMMITDATETIME:"2024-10-25T03:13:32+00:00"}))
/*!
 * 
 *         ============= BUILD INFO =============
 *         MFE: Phoenix-platform
 *         chunkName: vendor-clientlibs/js-cookie/js-cookie
 *         VERSION: 75f67d4
 *         BRANCH: HEAD
 *         COMMITHASH: 75f67d4e58c8b95c0525176c75ce402fbfc43056
 *         LASTCOMMITDATETIME: 2024-10-25T03:13:32+00:00
 *         ============= If you're reading this, why not come work with us? https://www.t-mobile.com/careers =============
 */,function(){"use strict";
/*! js-cookie v3.0.5 | MIT */
function e(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)e[o]=t[o]}return e}var n=function n(t,o){function i(n,i,r){if("undefined"!=typeof document){"number"==typeof(r=e({},o,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in r)r[u]&&(c+="; "+u,!0!==r[u]&&(c+="="+r[u].split(";")[0]));return document.cookie=n+"="+t.write(i,n)+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var r=n[i].split("="),c=r.slice(1).join("=");try{var u=decodeURIComponent(r[0]);if(o[u]=t.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(n,t){i(n,"",e({},t,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});window.Cookies=n}();