!function(){function q(a){var c=[],b=[],e=function(f){for(var g={},h=0;h<u.length;h++){var d=u[h];if(d.Tag===f){g=d;break}var l=void 0,k=d.Tag;var C=(k=-1!==k.indexOf("http:")?k.replace("http:",""):k.replace("https:",""),-1!==(l=k.indexOf("?"))?k.replace(k.substring(l),""):k);if(f&&(-1!==f.indexOf(C)||-1!==d.Tag.indexOf(f))){g=d;break}}return g}(a);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(b=e.Vendor.split(":")),!e.Tag&&D&&(b=c=function(f){var g=[],h=function(d){var l=document.createElement("a");
return l.href=d,-1!==(d=l.hostname.split(".")).indexOf("www")||2<d.length?d.slice(1).join("."):l.hostname}(f);v.some(function(d){return d===h})&&(g=["C0004"]);return g}(a)),{categoryIds:c,vsCatIds:b}}function w(a){return!a||!a.length||(a&&window.OptanonActiveGroups?a.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(a,c){void 0===c&&(c=null);var b=window,e=b.OneTrust&&b.OneTrust.IsVendorServiceEnabled;b=e&&b.OneTrust.IsVendorServiceEnabled();return"Categories"===
r||"All"===r&&e&&!b?w(a):("Vendors"===r||"All"===r&&e&&b)&&w(c)}function n(a){a=a.getAttribute("class")||"";return-1!==a.indexOf("optanon-category")||-1!==a.indexOf("ot-vscat")}function p(a){return a.hasAttribute("data-ot-ignore")}function x(a,c,b){void 0===b&&(b=null);var e=a.join("-"),f=b&&b.join("-"),g=c.getAttribute("class")||"",h="",d=!1;a&&a.length&&-1===g.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),d=!0);b&&b.length&&-1===g.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),d=!0);d&&c.setAttribute("class",h+" "+g)}function y(a,c,b){void 0===b&&(b=null);var e;a=a.join("-");b=b&&b.join("-");return-1===c.indexOf("optanon-category-"+a)&&(e=("optanon-category-"+a).trim()),-1===c.indexOf("ot-vscat-"+b)&&(e+=" "+("ot-vscat-"+b).trim()),e+" "+c}function z(a){var c,b=q(a.src||"");(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.type="text/plain"),a.addEventListener("beforescriptexecute",c=function(e){"text/plain"===
a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",c)}))}function A(a){var c=a.src||"",b=q(c);(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}var u=JSON.parse('[{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/wa/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://evri.com/foresee-prod.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.evri.com/95.8bee216.modern.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.28e3191d8757c557b4b7.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cdn.appdynamics.com/adrum/adrum-4.5.13.2640.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.evri.com/104.1100ab4.modern.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.804d36022680f95174ff.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.evri.com/_Incapsula_Resource","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://ad.doubleclick.net/ddm/adj/N1502858.197812NSO.CODESRV/B27048123.324560063","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.evri.com/fonts/poppins-regular-webfont.acf70b4.woff","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://gateway.foresee.com/code/19.14.10-fs/fs.utils.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.evri.com/4.fa0a072.modern.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect?v\x3d2\x26fmt\x3djs\x26pid\x3d4154258\x26time\x3d1701990831734\x26url\x3dhttps%3A%2F%2Fdf.sit.evricloud.co.uk%2F\x26cookiesTest\x3dtrue","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://4838423.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/11089360418/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://international.evri.com/cdn-cgi/challenge-platform/h/g/orchestrate/chl_page/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pubads.g.doubleclick.net/activity;xsp\x3d5096761;ord\x3d2054912861265754?","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1047128233/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync?redirect\x3dhttps%3A%2F%2Fpx.ads.linkedin.com%2Fcollect%3Fv%3D2%26fmt%3Djs%26pid%3D4154258%26time%3D1701990831734%26url%3Dhttps%253A%252F%252Fdf.sit.evricloud.co.uk%252F%26cookiesTest%3Dtrue%26liSync%3Dtrue","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://df.sit.evricloud.co.uk/foresee-staging.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://try.abtasty.com/7fdc8daead1dc0d0a708ce5e05212922.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bat.bing.com/action/0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://static.hotjar.com/c/hotjar-2914555.js?sv\x3d7","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://try.abtasty.com/7fdc8daead1dc0d0a708ce5e05212922/main.fada82d2cdee450e542d.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://gateway.foresee.com/sites/evri/staging/gateway.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://player.vimeo.com/video/877444167","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/10847334635/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://try.abtasty.com/8662ae3836b770235a784de6b8afcbbc.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://gateway.foresee.com/code/19.14.10-fs/fs.compress.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://try.abtasty.com/","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/951896298654493","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/browser-perf.28a8c6b22b3c0474c577.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.linkedin.com/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect?v\x3d2\x26fmt\x3djs\x26pid\x3d4154258\x26time\x3d1701990831734\x26url\x3dhttps%3A%2F%2Fdf.sit.evricloud.co.uk%2F","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pubads.g.doubleclick.net/","CategoryId":["C0004"],"Vendor":null}]'),
D=JSON.parse("true"),r=JSON.parse('"Categories"'),v=(v=[""]).filter(function(a){if("null"!==a&&a.trim().length)return a}),t=["embed","iframe","img","script"],B=((new MutationObserver(function(a){Array.prototype.forEach.call(a,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1!==e.nodeType||-1===t.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?z:A)(e)});var b=c.target;!c.attributeName||n(b)&&p(b)||("script"===b.nodeName.toLowerCase()?z(b):-1!==t.indexOf(c.target.nodeName.toLowerCase())&&
A(b))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]}),document.createElement);document.createElement=function(){for(var a,c,b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];return"script"===b[0].toLowerCase()||-1!==t.indexOf(b[0].toLowerCase())?(a=B.bind(document).apply(void 0,b),c=a.setAttribute.bind(a),Object.defineProperties(a,{src:{get:function(){try{return a.cloneNode().src}catch(f){return a.getAttribute("src")||""}},set:function(f){var g=
b[0],h,d,l,k="";k=q(k="string"==typeof f||f instanceof Object?f.toString():k);return d=g,l=a,!(h=k).categoryIds.length&&!h.vsCatIds.length||"script"!==d.toLowerCase()||n(l)||m(h.categoryIds,h.vsCatIds)||p(l)?(d=g,h=a,!(l=k).categoryIds.length||-1===t.indexOf(d.toLowerCase())||n(h)||m(l.categoryIds,l.vsCatIds)||p(h)?c("src",f):(a.removeAttribute("src"),c("data-src",f),(g=a.getAttribute("class"))||c("class",y(k.categoryIds,g||"",k.vsCatIds)))):(c("type","text/plain"),c("src",f)),!0}},type:{get:function(){return a.getAttribute("type")||
""},set:function(f){return h=c,d=q((g=a).src||""),h("type",!d.categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?f:"text/plain"),!0;var g,h,d}},class:{set:function(f){return h=c,!(d=q((g=a).src)).categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?h("class",f):h("class",y(d.categoryIds,f,d.vsCatIds)),!0;var g,h,d}}}),a.setAttribute=function(f,g,h){"type"!==f&&"src"!==f||h?c(f,g):a[f]=g},a):B.bind(document).apply(void 0,b)}}();