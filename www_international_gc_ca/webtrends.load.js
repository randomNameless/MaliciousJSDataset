// WebTrends SmartSource Data Collector Tag v10.4.23
// Copyright (c) 2015 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.4
// Created: 2015.11.18
window.webtrendsAsyncInit = function () {
    var dcs = new Webtrends.dcs().init({
        dcsid: gDcsId,
        domain: "sdc.international.gc.ca",
        timezone: -5,
        i18n: true,
        fpcdom: ".international.gc.ca",
        plugins: {
            advancedLinkTracking: {
                src: "https://www.international.gc.ca/wcmglobal/utilities/webtrends/advancedLinkTracking.js",
                trackers: [
                    { name: "All Links", type: "all_links" }
                ]
            }
        }
    }).track();
};
(function () {
    var s = document.createElement("script"); s.async = true; s.src = "https://www.international.gc.ca/wcmglobal/utilities/webtrends/webtrends.min.js";
    var s2 = document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s, s2);
}());