var brAds={};
brAds.currentAd=null;
brAds.roadblockPresent=false;
brAds.roadBlockAssets=[];
brAds.companionFound=false;
brAds.isChrome=false;
brAds.gpt=("googletag" in window);
if(typeof window.chrome!="undefined"){brAds.isChrome=true
}function loadBanners(){var h=document.getElementsByTagName("iframe"),c=[],e=h.length,d,g,a;
var f=document.getElementById("result-ad-placeholder");
for(var b=0;
b<e;
b++){if(h[b].className.indexOf("ad")!==-1){if(h[b].id&&(h[b].id==="ad_970x66_wlktop"||h[b].id==="ad_970x66_top")){if(h[b].parentNode.id==="roadblock"){brAds.roadblockPresent=true;
brAds.roadBlockAssets.push(h[b])
}}if(h[b].id&&(h[b].id==="ad_300x250_wlktop"||h[b].id==="ad_300x250_top")){if(f){f.setAttribute("source",h[b].getAttribute("source"));
h[b].parentNode.style.display="none";
$(h[b]).addClass("none").removeAttr("source");
if(brAds.roadblockPresent===true&&brAds.companionFound===false){brAds.companionFound=true
}brAds.roadBlockAssets.push(f)
}else{c.push(h[b])
}}else{c.push(h[b])
}}}if(f){f.className="ad"
}setTimeout(checkLoad,2);
c.sort(tileOrder);
g=c.length;
if(c.length>0){for(var b=0;
b<g;
b++){d=c[b];
loadAd(d)
}}if(!document.getElementById("ad_300x250_wlktop")&&!document.getElementById("ad_300x250_top")){brAds.roadBlockAssets.push(f);
invalidateAd()
}}function tileOrder(e,c){var f=parseInt(e.getAttribute("tile"));
var d=parseInt(c.getAttribute("tile"));
return(f-d)
}function loadAd(a){var b=a&&a.getAttribute("source");
if(b!=null){a.src=b
}}function loadAdSequential(a){var d=a&&a.getAttribute("source");
if(d!=null){var c=$(a),b=function(){brAds.currentAd=false;
checkLoad()
};
c.load(b);
c.attr("src",d)
}}function checkLoad(){if(brAds.roadBlockAssets.length<=0){return false
}var a=brAds.currentAd;
if(!a){a=brAds.currentAd=brAds.roadBlockAssets.shift();
loadAdSequential(a)
}}function invalidateAd(){var a;
for(ad in brAds.roadBlockAssets){a=brAds.roadBlockAssets[ad];
if(a){a.parentNode.style.display="none"
}}}function loadGptBanners(){var a=document.createElement("script");
var c="https:"==document.location.protocol;
var b=document.getElementsByTagName("script")[0];
a.async=true;
a.type="text/javascript";
a.src=(c?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";
if($.isEmptyObject(BIZRATE.banners)){$(".ad-content").attr("style","display:none");
BIZRATE.bannerAdsFired=true
}else{b.parentNode.insertBefore(a,b)
}}$(document).ready(function(){if(!brAds.gpt){loadBanners()
}else{loadGptBanners()
}});
function bottomBanner(){var c=document.getElementById("ad_728x90_bottom");
if(c){var b=c.getAttribute("src");
var a=c.getAttribute("source");
if(!b&&a!=null){c.src=a
}}}window.load=bottomBanner();