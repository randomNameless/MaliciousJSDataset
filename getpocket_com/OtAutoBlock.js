!function(){function n(e){for(var f,a,g,c,b=[],k=0;k<w.length;k++){var d=w[k];if(d.Tag===e){b=d.CategoryId;break}var t=(f=d.Tag,c=g=a=void 0,a=-1!==(c=f).indexOf("http:")?c.replace("http:",""):c.replace("https:",""),-1!==(g=a.indexOf("?"))?a.replace(a.substring(g),""):a);if(e&&(-1!==e.indexOf(t)||-1!==d.Tag.indexOf(e))){b=d.CategoryId;break}}if(!b.length&&y){var l=function(h){var p=document.createElement("a");p.href=h;h=p.hostname.split(".");return-1!==h.indexOf("www")||2<h.length?h.slice(1).join("."):
p.hostname}(e);z.some(function(h){return h===l})&&(b=["C0004"])}return b}function m(e){return e&&window.OptanonActiveGroups&&e.every(function(f){return-1!==window.OptanonActiveGroups.indexOf(f)})}function q(e){return-1!==(e.getAttribute("class")||"").indexOf("optanon-category")}function r(e){return e.hasAttribute("data-ot-ignore")}var w=JSON.parse('[{"Host":"doubleclick.net","Tag":"https://googleads.g.doubleclick.net/pagead/drt/si","CategoryId":["C0004"]},{"Host":"nr-data.net","Tag":"https://bam-cell.nr-data.net/1/1e390569c3","CategoryId":["C0002"]},{"Host":"a.omappapi.com","Tag":"https://a.omappapi.com/app/js/api.min.js","CategoryId":["C0002"]},{"Host":"wufoo.com","Tag":"https://pocketsupport.wufoo.com/forms/contact-pocket-support/def/field1\x3d","CategoryId":["C0002"]},{"Host":"getpocket.com","Tag":"https://d.getpocket.com/com.snowplowanalytics.snowplow/tp2","CategoryId":["C0002"]},{"Host":"getpocket.com","Tag":"https://d.getpocket.com/t/e","CategoryId":["C0002"]},{"Host":"cdn.syndication.twimg.com","Tag":"https://cdn.syndication.twimg.com/timeline/profile","CategoryId":["C0004"]},{"Host":"cl.qualaroo.com","Tag":"https://cl.qualaroo.com/ki.js/22516/7kcqoo.js","CategoryId":["C0002"]},{"Host":"getpocket.com","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"]},{"Host":"a.optmnstr.com","Tag":"https://a.optmnstr.com/app/js/api.min.js","CategoryId":["C0002"]},{"Host":"securepubads.g.doubleclick.net","Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021020401.js","CategoryId":["C0004"]},{"Host":"assets.getpocket.com","Tag":"https://assets.getpocket.com/web-utilities/public/static/sp.js","CategoryId":["C0002"]},{"Host":"youtube.com","Tag":"https://www.youtube.com/embed/F15dgBzwOrc","CategoryId":["C0004"]}]'),
y=JSON.parse("true"),z="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),u=["embed","iframe","img","script"];(new MutationObserver(function(e){Array.prototype.forEach.call(e,
function(f){Array.prototype.forEach.call(f.addedNodes,function(d){var t,l;if(1===d.nodeType&&-1!==u.indexOf(d.tagName.toLowerCase())&&!q(d)&&!r(d))if("script"===d.tagName.toLowerCase()){if((l=n(t=d.src||"")).length){var h=l.join("-");-1===(v=d.getAttribute("class")?d.getAttribute("class"):"").indexOf("optanon-category-"+h)&&d.setAttribute("class","optanon-category-"+h+" "+v);m(l)||(d.type="text/plain");var p=function(A){"text/plain"===d.getAttribute("type")&&A.preventDefault();d.removeEventListener("beforescriptexecute",
p)};d.addEventListener("beforescriptexecute",p)}}else if((l=n(t=d.src||"")).length){var v;h=l.join("-");-1===(v=d.getAttribute("class")?d.getAttribute("class"):"").indexOf("optanon-category-"+h)&&d.setAttribute("class","optanon-category-"+h+" "+v);m(l)||(d.removeAttribute("src"),d.setAttribute("data-src",t))}});var a=f.target;if(f.attributeName&&(!q(a)||!r(a)))if("script"===a.nodeName.toLowerCase()){if((b=n(c=a.src||"")).length){f=b.join("-");-1===(k=a.getAttribute("class")?a.getAttribute("class"):
"").indexOf("optanon-category-"+f)&&a.setAttribute("class","optanon-category-"+f+" "+k+" ");m(b)||(a.type="text/plain");var g=function(d){"text/plain"===a.getAttribute("type")&&d.preventDefault();a.removeEventListener("beforescriptexecute",g)};a.addEventListener("beforescriptexecute",g)}}else if(-1!==u.indexOf(f.target.nodeName.toLowerCase())){var c,b;if((b=n(c=a.src||"")).length){var k;f=b.join("-");-1===(k=a.getAttribute("class")?a.getAttribute("class"):"").indexOf("optanon-category-"+f)&&a.setAttribute("class",
"optanon-category-"+f+" "+k);m(b)||(a.removeAttribute("src"),a.setAttribute("data-src",c))}}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var x=document.createElement;document.createElement=function(){for(var e=[],f=0;f<arguments.length;f++)e[f]=arguments[f];if("script"!==e[0].toLowerCase()&&-1===u.indexOf(e[0].toLowerCase()))return x.bind(document).apply(void 0,e);var a=x.bind(document).apply(void 0,e),g=a.setAttribute.bind(a);return Object.defineProperties(a,
{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var b="";"string"==typeof c?b=c:c instanceof Object&&(b=c.toString());b=n(b);!b.length||"script"!==e[0].toLowerCase()||q(a)||m(b)||r(a)?!b.length||-1===u.indexOf(e[0].toLowerCase())||q(a)||m(b)||r(a)?g("src",c):(a.removeAttribute("src"),g("data-src",c),a.getAttribute("class")||g("class","optanon-category-"+b)):(g("type","text/plain"),g("src",c));return!0}},type:{set:function(c){var b=n(a.src||"");c=!b.length||q(a)||m(b)||r(a)?
c:"text/plain";return g("type",c),!0}},class:{set:function(c){var b=n(a.src);!b.length||q(a)||m(b)||r(a)?g("class",c):(b=b.join("-"),g("class","optanon-category-"+b+" "+c));return!0}}}),a.setAttribute=function(c,b,k){"type"!==c&&"src"!==c||k?g(c,b):a[c]=b},a}}();