var numAds = 1;
var shown_ads = 0;

function onLiveRailPrerollComplete(hasPlayedAd) {
    document.getElementById("companion").innerHTML = "";
    document.getElementById("companion").style.display = "none";  
	document.getElementById("video-wrapper").innerHTML = "";
	document.getElementById("video-wrapper").style.display = "none";
}

function initializeVideoAd() {
    document.getElementById("video-wrapper").style.display = "block";
    document.getElementById("video-ad").innerHTML = "";
    document.getElementById("video-ad").style.display = "block";

    var new_script = document.createElement('script');
    new_script.setAttribute("type", "text/javascript");

    var script_src = "http://cdn-static.liverail.com/js/LiveRail.Interstitial-1.0.js?LR_PUBLISHER_ID=9667"
	    + "&LR_PARTNERS=709875"
	    + "&LR_VIDEO_ID=tripod404"
	    + "&LR_TITLE=Tripod"
	    + "&LR_VIDEO_POSITION=0"
	    + "&LR_AUTOPLAY=1"
	    + "&LR_VERTICALS=tripod"
	    + "&width=580&height=340"
	    + "&LR_DESCRIPTION=Tripod"
	    + "&LR_COMPANIONS=300:250:companion:"
	    + "&LR_LAYOUT_SKIN_ID=2";

    new_script.setAttribute("src", script_src);
    document.getElementById("video-ad").appendChild(new_script);
}