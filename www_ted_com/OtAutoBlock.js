(function(){function q(a){var c=[],b=[],e=function(f){for(var g={},h=0;h<u.length;h++){var d=u[h];if(d.Tag===f){g=d;break}var l=void 0,k=d.Tag;var C=(k=-1!==k.indexOf("http:")?k.replace("http:",""):k.replace("https:",""),-1!==(l=k.indexOf("?"))?k.replace(k.substring(l),""):k);if(f&&(-1!==f.indexOf(C)||-1!==d.Tag.indexOf(f))){g=d;break}}return g}(a);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(b=e.Vendor.split(":")),!e.Tag&&D&&(b=c=function(f){var g=[],h=function(d){var l=document.createElement("a");
return l.href=d,-1!==(d=l.hostname.split(".")).indexOf("www")||2<d.length?d.slice(1).join("."):l.hostname}(f);return g=v.some(function(d){return d===h})?["C0004"]:g}(a)),{categoryIds:c,vsCatIds:b}}function w(a){return!a||!a.length||(a&&window.OptanonActiveGroups?a.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(a,c){void 0===c&&(c=null);var b=window,e=b.OneTrust&&b.OneTrust.IsVendorServiceEnabled;b=e&&b.OneTrust.IsVendorServiceEnabled();return"Categories"===
r||"All"===r&&e&&!b?w(a):("Vendors"===r||"All"===r&&e&&b)&&w(c)}function n(a){a=a.getAttribute("class")||"";return-1!==a.indexOf("optanon-category")||-1!==a.indexOf("ot-vscat")}function p(a){return a.hasAttribute("data-ot-ignore")}function x(a,c,b){void 0===b&&(b=null);var e=a.join("-"),f=b&&b.join("-"),g=c.getAttribute("class")||"",h="",d=!1;a&&a.length&&-1===g.indexOf("optanon-category-"+e)&&(h=("optanon-category-"+e).trim(),d=!0);b&&b.length&&-1===g.indexOf("ot-vscat-"+f)&&(h+=" "+("ot-vscat-"+
f).trim(),d=!0);d&&c.setAttribute("class",h+" "+g)}function y(a,c,b){void 0===b&&(b=null);var e;a=a.join("-");b=b&&b.join("-");return-1===c.indexOf("optanon-category-"+a)&&(e=("optanon-category-"+a).trim()),-1===c.indexOf("ot-vscat-"+b)&&(e+=" "+("ot-vscat-"+b).trim()),e+" "+c}function z(a){var c,b=q(a.src||"");(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.type="text/plain"),a.addEventListener("beforescriptexecute",c=function(e){"text/plain"===
a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",c)}))}function A(a){var c=a.src||"",b=q(c);(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}var u=JSON.parse('[{"Tag":"https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202304180101/pubads_impl.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://player.vimeo.com/api/player.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://inv-nets.admixer.net/adxcm.aspx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://contextual.media.net/cksync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://uipglob.semasio.net/pubmatic/1/info","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://hbx.media.net/checksync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://mixpanel-proxy.ted.com/lib.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://sync.1rx.io/usersync2/pubmatic\x26gdpr\x3d1\x26gdpr_consent\x3dCP9NqoAP9NqoAAcABBENAwEsAP_gAAAAAChQKEtX_H__bW9r8X73aft0eY1P99j77sQxBhfJE-4FzLvW_JwXx2ExNA36tqIKmRIEu3bBIQNlHJDUTVigaogVryDMakWcgTNKJ6BkiFMRO2dYCF5vmwtj-QKY5vp993dx2Det_dv83dzyz4VHn3a5_2e0WJCdA58tDfv9bROb-9IPd_58v4v0_F_rE2_eT1l_tevp7D8-ct87_XW-9_fff79LlgAAAAAA.f_wAAAAAAAAA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://secure.wufoo.com/scripts/embed/form.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://image2.pubmatic.com/AdServer/Pug","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://form01.ted.com/l/947812/2021-09-28/5tf3jn","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-d355d98014f63c42150049c53a3d5812.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://creativecdn.com/cm-notify","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.clarity.ms/s/0.7.26/clarity.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pi.pardot.com/analytics","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/336581530288643","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.ipredictive.com/d/sync/cookie/generic","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.clarity.ms/tag/dqlfjtph89","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://image4.pubmatic.com/AdServer/SPug","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/401349568839609","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://a.audrte.com/match","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dsp.adfarm1.adition.com/cookie/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-89c47d4345db0e653df7eb27664fec4f.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ipac.ctnsnet.com/int/cm","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022072101.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://airtable.com/embed/shrSXM3bWBMGyWQKH","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://ad.turn.com/r/cs","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://gum.criteo.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://rtb.mfadsrvr.com/ul_cb/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://um.simpli.fi/pubmatic","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202304190101/pubads_impl.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://match.adsrvr.org/track/cmf/generic","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-f8ca4114714a66f8817edeaee1416fa6.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://hbx.media.net/cksync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022102001.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/settings.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pixel.tapad.com/idsync/ex/receive/check","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://qvdt3feo.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tags.crwdcntrl.net/lt/c/16589/sync.min.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://medianet-match.dotomi.com/match/bounce/current","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/video/embed/live/urn:li:ugcPost:6816032228473126912","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ib.adnxs.com/getuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/drt/si","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://gum.criteo.com/syncframe","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.parsely.com/keys/blog.ted.com/p.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://t.adx.opera.com/pub/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://bam.nr-data.net/1/689d5b4562","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/pagead/adview","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://match.prod.bidr.io/cookie-sync/liveintent","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel-sync.sitescout.com/dmp/pixelSync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.mathtag.com/sync/img","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://image6.pubmatic.com/AdServer/PugMaster","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://bam-cell.nr-data.net/1/516102e2a5","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dis.criteo.com/dis/usersync.aspx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://p.rfihub.com/cm","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pa.tedcdn.com/javascripts/screens/54ab7a60c072859f82b0.chunk.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ups.analytics.yahoo.com/ups/58292/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sb.scorecardresearch.com/b","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://bam.nr-data.net/1/c745aa170b","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://match.sharethrough.com/sync/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.parsely.com/keys/ideas.ted.com/p.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://match.adsby.bidtheatre.com/pubmaticmatch","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel-eu.onaudience.com/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ssl.google-analytics.com/ga.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://airtable.com/internal/stats-batch","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/GxfNq0gIMso","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-0dca9a7dc4ff6783108b35ccdc8b4e4e.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pixel.advertising.com/ups/58196/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://static.criteo.net/js/ld/publishertag.ids.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://x.bidswitch.net/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/setuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.tapad.com/idsync/ex/receive","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://aa.agkn.com/adscores/g.pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pubmatic-match.dotomi.com/match/bounce/current","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-ae71c664feb879474b53649cead9f117.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://rtb.mfadsrvr.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://a.tribalfusion.com/i.match","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://c.clarity.ms/c.gif","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.2472296d2d26f0040059.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://i.liadm.com/s/c/a-091g","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync-tm.everesttech.net/upi/pid/b9pj45k4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://simage2.pubmatic.com/AdServer/Pug","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-9de5fcf34089e1224ec248900a67104e.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pr-bh.ybp.yahoo.com/sync/iponweb","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cr.frontend.weborama.fr/cr","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2023011901.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://help.ted.com/cdn-cgi/challenge-platform/h/b/orchestrate/captcha/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.rubiconproject.com/exchange/sync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022012505.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.targeting.unrulymedia.com/csync/RX-ac165c4c-b11e-4cec-92b4-0718a035b442-003","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.clarity.ms/s/0.7.31/clarity.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pr-bh.ybp.yahoo.com/sync/pubmatic/FE45697E-6204-4C0C-BFD1-D60B95E28711","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://x.bidswitch.net/ul_cb/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.crwdcntrl.net/qmap","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ps.eyeota.net/pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://match.prod.bidr.io/cookie-sync/pm","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/web/djIkdGU6Ny4wOmFzeW5jJWdxdWVyeQ\x3d\x3d/tag-55e94c748f16013ef1678dd0532b2aff.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://contextual.media.net/checksync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dev.visualwebsiteoptimizer.com/j.php","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pixel.onaudience.com/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://c.bing.com/c.gif","CategoryId":["C0004"],"Vendor":null}]'),
D=JSON.parse("true"),r=JSON.parse('"Categories"'),v=(v="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" ")).filter(function(a){if("null"!==a&&a.trim().length)return a}),t=
["embed","iframe","img","script"],B=((new MutationObserver(function(a){Array.prototype.forEach.call(a,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1!==e.nodeType||-1===t.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?z:A)(e)});var b=c.target;!c.attributeName||n(b)&&p(b)||("script"===b.nodeName.toLowerCase()?z(b):-1!==t.indexOf(c.target.nodeName.toLowerCase())&&A(b))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,
attributeFilter:["src"]}),document.createElement);document.createElement=function(){for(var a,c,b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];return"script"===b[0].toLowerCase()||-1!==t.indexOf(b[0].toLowerCase())?(a=B.bind(document).apply(void 0,b),c=a.setAttribute.bind(a),Object.defineProperties(a,{src:{get:function(){try{return a.cloneNode().src}catch(f){return a.getAttribute("src")||""}},set:function(f){var g=b[0],h,d,l,k="";k=q(k="string"==typeof f||f instanceof Object?f.toString():k);return d=
g,l=a,!(h=k).categoryIds.length&&!h.vsCatIds.length||"script"!==d.toLowerCase()||n(l)||m(h.categoryIds,h.vsCatIds)||p(l)?(d=g,h=a,!(l=k).categoryIds.length||-1===t.indexOf(d.toLowerCase())||n(h)||m(l.categoryIds,l.vsCatIds)||p(h)?c("src",f):(a.removeAttribute("src"),c("data-src",f),(g=a.getAttribute("class"))||c("class",y(k.categoryIds,g||"",k.vsCatIds)))):(c("type","text/plain"),c("src",f)),!0}},type:{get:function(){return a.getAttribute("type")||""},set:function(f){return h=c,d=q((g=a).src||""),
h("type",!d.categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?f:"text/plain"),!0;var g,h,d}},class:{set:function(f){return h=c,!(d=q((g=a).src)).categoryIds.length&&!d.vsCatIds.length||n(g)||m(d.categoryIds,d.vsCatIds)||p(g)?h("class",f):h("class",y(d.categoryIds,f,d.vsCatIds)),!0;var g,h,d}}}),a.setAttribute=function(f,g,h){"type"!==f&&"src"!==f||h?c(f,g):a[f]=g},a):B.bind(document).apply(void 0,b)}})();