!function(){var n,t={gpt:"https://securepubads.g.doubleclick.net/tag/js/gpt.js",magnite:"micro.rubiconproject.com/prebid/dynamic/11166.js",golfpb:"micro.rubiconproject.com/prebid/dynamic/22640.js",amazonA9:"c.amazon-adsystem.com/aax2/apstag.js",ias:"cdn.adsafeprotected.com/iasPET.1.js",bt:"https://btloader.com/tag?o=5762268746743808&upapi=true",datmcp:"code.adsales.snidigital.com/datmcp/3/DatMCP-3.116.3-a7e0362a0bdf8c013bc8.js","datmcp3.114.2":"https://code.adsales.snidigital.com/datmcp/3/DatMCP-3.114.2-6bc9b3d872587b7ef82d.js","datmcp3.115.0":"https://code.adsales.snidigital.com/datmcp/3/DatMCP-3.115.0-f3f767219f92aa9e9033.js","datmcp3.115.2":"https://code.adsales.snidigital.com/datmcp/3/DatMCP-3.115.2-565a34e5989f9a8390da.js","datmcp-staging":"code.adsales.snidigital.com/datmcp/staging/DatMCP.js","datmcp-local":"local.sni-dat.com:8003/DatMCP.js",clu:"http://localhost:8005/clu.js"},a={"sni.hgtv.com":["gpt","magnite","amazonA9","ias","datmcp"],sports:["gpt","amazonA9","golfpb","datmcp"],"sni.foodnetwork.com":["gpt","magnite","amazonA9","ias","datmcp"],"qa-food.com":["gpt","magnite","amazonA9","ias","datmcp"],golfdigest:["gpt","amazonA9","golfpb","datmcp3.114.2"],"food.com":["gpt","magnite","amazonA9","ias","datmcp"],"travelchannel.com":["gpt","magnite","amazonA9","ias","datmcp"],"foodnetwork.com":["gpt","magnite","amazonA9","ias","datmcp"],"hgtv.com":["gpt","magnite","amazonA9","ias","datmcp"],"cookingchanneltv.com":["gpt","magnite","amazonA9","ias","datmcp"],"tlc.com":["gpt","magnite","amazonA9","ias","datmcp"],"investigationdiscovery.com":["gpt","magnite","amazonA9","ias","datmcp"],"discovery.com":["gpt","magnite","amazonA9","ias","datmcp"],"*":["gpt","magnite","amazonA9","ias","datmcp"]},e=["magnite","golfpb","amazonA9","ias"],i=document,o=i.location,d=o.hostname;for(var s in a)if(d.indexOf(s)>=0||"*"===s){n=a[s];break}var c=!0;/usprivacy=[0-9][YN-]Y[YN-]/i.test(document.cookie)&&(c=!1),window.WM&&window.WM.UserConsent&&!1===window.WM.UserConsent.inUserConsentState(["data-store","ads-contextual","ads-person-prof","ads-person","vendor"],{id:"MCP-Loader"})&&(c=!1),c||(n=n.filter((function(n){return e.indexOf(n)<0})));var r=window.localStorage&&window.localStorage.getItem("mcp-loader"),l=/[?&]mcp-loader=([\w\/\.,-]+)(&|$)/gi.exec(o.search),w=r||l&&l[1];w&&(n=w.split(","));var m=/[?&]ads-delay(&|$)/gi.exec(o.search);n.forEach((function(n){var a=m?1e3*Math.round(9*Math.random()+1):0;window.setTimeout((function(){console.log("Loaded library: ",n,a);var e=t[n];if(e.indexOf("://")<0&&(e="https://"+e),!i.getElementById("mcp-"+n)){var o=i.createElement("script");o.id="mcp-"+n,o.async=!0,o.type="text/javascript",o.src=e,i.head.appendChild(o)}}),a)}))}();var uniqueClassCounter=0;window.DatMCP=window.DatMCP||{loaderInitialized:!0,executeQueue:[],execute:function(n){return new Promise((function(t,a){"function"==typeof n?window.DatMCP.isLoaded?t(n(window.DatMCP)):window.DatMCP.executeQueue.push([n,t]):t()}))}},window.SniAds=window.SniAds||{ready:function(n){var t;function a(){window.SniAds.getVersion&&(window.SniAds.ready(n),window.clearInterval(t))}t=window.setInterval(a,100),a()},init:function(n){var t;function a(){window.SniAds.getVersion&&(window.SniAds.init(n),window.clearInterval(t))}t=window.setInterval(a,100),a()},appendSlot:function(n,t,a,e){if(window.SniAds.getVersion)return window.SniAds.appendSlot(n,t,a,e);var i,o=document.querySelector("."+n);function d(){window.SniAds.getVersion&&(SniAds.ready((function(){window.SniAds.appendSlot(n,t,a,e)})),window.clearInterval(i))}"currentBigBox"===n&&(n="append-slot-"+uniqueClassCounter++,o.classList.add(n)),i=window.setInterval(d,100),d()},getDefinedSlots:function(){return console.log("Loader getDefinedSlots called"),window.SniAds.getVersion?window.SniAds.getDefinedSlots():{}},Gallery:{init:function(n){var t;function a(){window.SniAds.getVersion&&(window.SniAds.Gallery.init(n),window.clearInterval(t))}t=window.setInterval(a,100),a()},reset:function(){var n;function t(){window.SniAds.getVersion&&(window.SniAds.Gallery.reset(),window.clearInterval(n))}n=window.setInterval(t,100),t()},setSyncSlot:function(n,t,a){var e;function i(){window.SniAds.getVersion&&(window.SniAds.Gallery.setSyncSlot(n,t,a),window.clearInterval(e))}e=window.setInterval(i,100),i()},setInterstitialSlot:function(n,t,a){var e;function i(){window.SniAds.getVersion&&(window.SniAds.Gallery.setInterstitialSlot(n,t,a),window.clearInterval(e))}e=window.setInterval(i,100),i()},next:function(){console.log("loader next"),window.SniAds.getVersion&&window.SniAds.Gallery.next()},previous:function(){window.SniAds.getVersion&&window.SniAds.Gallery.previous()}},Event:{subscribe:function(n,t){var a;function e(){window.SniAds.getVersion&&(window.SniAds.Event.subscribe(n,t),window.clearInterval(a))}a=window.setInterval(e,100),e()}},River:{repeatBigbox:function(){}}};