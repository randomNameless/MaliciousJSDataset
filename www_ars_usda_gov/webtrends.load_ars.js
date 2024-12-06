// WebTrends SmartSource Data Collector Tag v10.4.23
// Copyright (c) 2018 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.5
// Created: 2018.07.11
// Modified: 2018.07.11 - David Sinner WT. Enhancements for DCSID allocation based on domain and double tag.
// to push data to separate DCSIDs for OD and OP. Add Advanced Link Tracking Plugin
// Modified: 2018.08.14 - David Sinner WT. Add content group plugin to capture content groups from URL structure
// Modified: 2018.09.11 - David Sinner WT. Remove replicate plugin (double tagging) just send data to WT OnDemand
/*
 * Code to implement at beginning of loader file (webtrends.load.js)
 * to correct instances where multiple WT_FPC cookies are visible
 * within the current scope.
 *
 * USAGE:
 * Set domainsToClear equal to an array of strings, with each string representing
 * a cookie domain that needs to be cleared. This should include all the possible
 * fpcdom values except the one you want to keep. If omitted, this code will clear
 * the cookie only for the current fully qualified domain (with no leading dot).
 *
 * Set fpcdom equal to the fpcdom setting in the loader file. This should be the
 * domain of the cookie we want to set, or an empty string to use the fully qualified
 * domain name. If this does not match the fpcdom setting in the loader file, this
 * code will probably not work as expected.
 *
 * Important note: This does not stop the tag from setting a new duplicate cookie if
 * the fpcdom is still being set incorrectly in the tag, but it should prevent the
 * tag from passing WT.vt_f=3 instead of a WT.co_f value.
 *
 * Author: Wes Contreras, 2015-09-28
 *
 */

(function() {
// Check if there is more than one cookie
                var name = "WT_FPC";
                var fpcdom = '';
                var pattern = new RegExp(name + "=", "g");
                var cookieArr = document.cookie.match(pattern) || [];
                if (cookieArr.length > 1) {
                    // Retrieve all WT cookies
                    var wtCookies = [];
                    var cookies = document.cookie.split("; ");
                    for (var i = 0; i < cookies.length; i++) {
                        if (cookies[i].indexOf(name + "=") === 0) {
                            wtCookies.push(cookies[i]);
                        }
                    }
                    // Keep the newest
                    wtCookies.sort();
                    var keep = wtCookies[wtCookies.length - 1];

                    // Remove all WT cookies
                    var doms = window.location.hostname.split(".");
                    var dlength = doms.length;
                    for (var j = 0; j < dlength; j++) {
                        document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=." + doms.join(".");
                        var test = "." + doms.join(".");
                        doms.shift();
                    }
                    // Set WT cookie to final value
                    var cookieMetaData = "; path=/" + (((fpcdom != "")) ? ("; domain=" + fpcdom) : (""));
                    document.cookie = keep + cookieMetaData;
                }
})();
window.webtrendsAsyncInit = function () {

    // Define the proper OD and OP DCSID based on URL, 
    //  Less exact URL matches should be listed prior to more exact matches of the same domain,
    //  because code iterates through entire list and last match wins
    
    var dcsidSites = {
	//  PROD Domain
        "ars.usda.gov": {
            dcsidOD: "dcs2229fyq5yxf5j5aw1zdupi_2f9o", dcsidOP: "dcsh0juhninp53gudlhz4e9z4_5z4d", domainOP: "wt-sdc2.arsnet.usda.gov"
        },
	//  STAGING DOMAIN
        "arsredesign.arsnet.usda.gov": {
            dcsidOD: "dcs22234yfs7dgi39kfxnf6ie_1e1x", dcsidOP: "dcscalr7dhnp53watg62106wy_7o3d", domainOP: "wt-sdc2.arsnet.usda.gov"
        },
    };

    // Primary DCSIDs
    var dcsidOD = "dcs2229fyq5yxf5j5aw1zdupi_2f9o";
    var dcsidOP = "dcsh0juhninp53gudlhz4e9z4_5z4d";
    var domainOP = "wt-sdc2.arsnet.usda.gov";
    var fpcdomain = "";


    // Change DCSIDs based on URL - last match wins
    var url = location.href.toLowerCase();
    for (var site in dcsidSites) {
        if (url.indexOf(site.toLowerCase()) > -1) {
            dcsidOD = dcsidSites[site].dcsidOD;
            dcsidOP = dcsidSites[site].dcsidOP;
	    domainOP = dcsidSites[site].domainOP;
        }
    }

    // Initialize tag
    var dcs = new Webtrends.dcs().init({
        dcsid: dcsidOD,
        domain: "statse.webtrendslive.com",
        timezone: -5,
        i18n: true,
        adimpressions: true,
        adsparam: "WT.ac",
        offsite: true,
        download: true,
        downloadtypes:"xls,doc,pdf,txt,csv,zip,swf,mpg,mpeg,jpg,mov,dot,ppt,pptm,ps,qt,rtf,wpd,wri,pps,wmv",
        rightclicktypes:"xls,doc,pdf,txt,csv,zip,swf,mpg,mpeg,jpg,mov,dot,ppt,pptm,ps,qt,rtf,wpd,wri,pps,wmv",
        onsitedoms:(function(){return(window.RegExp?new RegExp(".*ars\.usda\.gov","i"):"");})(),
        anchor: false,
        javascript: false,
        fpcdom: fpcdomain,
        plugins: {
            advancedLinkTracking:{src:"//s.webtrends.com/js/advancedLinkTracking.js",
                trackers:[
                {name:"All Links", type:"all_links"}
                ]},
            getcg:{src:"/ARSUserFiles/Utility/WebTrends/webtrends.getcg.js"}
            /*
            replicate: {
                src: "//s.webtrends.com/js/webtrends.replicate.js",     
                servers: [
				{
				    domain: domainOP,
				    dcsid: dcsidOP,
				    fpcdom: fpcdomain
				}],
                callbackTimeout: 200
            }
            */
        }
    }).track();
};
(function () {
    var s = document.createElement("script"); s.async = true; s.src = "//s.webtrends.com/js/webtrends.js";   // Replace with local file path
    var s2 = document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s, s2);
}());
