console.log('ads-config-' + 'fanpage' + '-');

    const GOOGLE_PUBVENDOR_ID = 755;
const debug = false;
const config_version = '2.2.5';
var dataLayer = window.dataLayer || [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var cervantes = 'https://cervantes.ringier.ro';

var siteName = 'fanpage';
var siteDomain = 'fanpage.gr';
var adserverPrefix = '/1011785/' + siteDomain + '/' + siteName;

var activeGoogleTagSlots = [];

var prebid = null;
var teads = null;
var r2b2 = null;
var sovrn = null;
var teads = null;
var teads_head = null;
var agora = null;


    function matchMediaMobile() {return window.matchMedia('(max-width: 767px)').matches} // hidden-xs
function matchMediaTablet() {return window.matchMedia('(min-width: 768px) and (max-width: 960px)').matches} // hidden-sm
function matchMediaLargeTablet() {return window.matchMedia('(min-width: 961px) and (max-width: 1169px)').matches} // hidden-md
function matchMediaDesktop() {return window.matchMedia('(min-width: 1170px)').matches} // hidden-lg


$mMob = matchMediaMobile();
$mTab = matchMediaTablet();
$mTabLg = matchMediaLargeTablet();
$mDesk = matchMediaDesktop();

    function cleanCookie() {
    var now = new Date();

    now.setTime(now.getTime() + 3600 * 1000 * 24 * 365);

    var cookies_array = ['OptanonAlertBoxClosed', 'OptanonConsent', 'eupubconsent-v2', 'euconsent-v2', 'cleared-onetrust-cookies-20240612', 'cleared-onetrust-cookies-20240731', 'cleared-cmp-cookies-20240731'];

    if (!getCookieClean('cleared-cmp-cookies-20240731')) {
        console.log('entered clear cookies');

        cookies_array.forEach(function(cookie) {
            document.cookie = cookie + '=' + '; path=/' + '; domain=' + siteDomain + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = cookie + '=' + '; path=/' + '; domain=.' + siteDomain + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = cookie + '=' + '; path=/' + '; domain=www.' + siteDomain + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = cookie + '=' + '; path=/' + '; domain=.www.' + siteDomain + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        });

        console.log('exit clear cookies');
    }

    document.cookie = 'cleared-cmp-cookies-20240731' + '=' + '; path=/' + '; domain=' + siteDomain + '; expires=' + now.toUTCString();
    function getCookieClean(cookieName) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + cookieName + '=');
        if (parts.length == 2) {
            return true;
        }
    }
}



function loadScripts() {

    
    
    if (typeof cleanCookie !== 'undefined') {
        cleanCookie();
    }

            var consent = document.createElement('script');
consent.type = 'text/javascript';
consent.async = false;
consent.src = 'https://cervantes.ringier.ro/consent-quantcast.js?v=' + config_version;
document.head.appendChild(consent);
    
    
            sovrn = document.createElement('script');
sovrn.type = 'text/javascript';
sovrn.async = true;
sovrn.src = '//get.s-onetag.com/c560f0eb-2160-4dcf-a83f-2dd24e66e22e/tag.min.js';

if ($mMob) {
            r2b2 = document.createElement('script');
r2b2.type = 'text/javascript';
r2b2.async = true;
r2b2.src = '//delivery.r2b2.io/get/fanpage.gr/generic/interscroller/mobile';
    }

if (pageType !== 'homepage' && pageType !== 'archive') {
            window.teads_analytics = window.teads_analytics || {};
window.teads_analytics.analytics_tag_id = "PUB_26303";
window.teads_analytics.share = window.teads_analytics.share || function() {
;(window.teads_analytics.shared_data = window.teads_analytics.shared_data || []).push(arguments)
};

teads_head = document.createElement('script');
teads_head.type = 'text/javascript';
teads_head.async = true;
teads_head.src = 'https://a.teads.tv/analytics/tag.js';

teads = document.createElement('script');
teads.type = 'text/javascript';
teads.async = true;
teads.setAttribute("class", "teads");
teads.src = '//a.teads.tv/page/212837/tag';
    }
    
}

    (function() {
    var host = siteDomain;
    var element = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    var url = 'https://cmp.inmobi.com'
        .concat('/choice/', 'fqUELXCDZUKR9', '/', host, '/choice.js?tag_version=V3');
    var uspTries = 0;
    var uspTriesLimit = 3;
    element.async = true;
    element.type = 'text/javascript';
    element.src = url;

    firstScript.parentNode.insertBefore(element, firstScript);

    function makeStub() {
        var TCF_LOCATOR_NAME = '__tcfapiLocator';
        var queue = [];
        var win = window;
        var cmpFrame;

        function addFrame() {
            var doc = win.document;
            var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

            if (!otherCMP) {
                if (doc.body) {
                    var iframe = doc.createElement('iframe');

                    iframe.style.cssText = 'display:none';
                    iframe.name = TCF_LOCATOR_NAME;
                    doc.body.appendChild(iframe);
                } else {
                    setTimeout(addFrame, 5);
                }
            }
            return !otherCMP;
        }

        function tcfAPIHandler() {
            var gdprApplies;
            var args = arguments;

            if (!args.length) {
                return queue;
            } else if (args[0] === 'setGdprApplies') {
                if (
                    args.length > 3 &&
                    args[2] === 2 &&
                    typeof args[3] === 'boolean'
                ) {
                    gdprApplies = args[3];
                    if (typeof args[2] === 'function') {
                        args[2]('set', true);
                    }
                }
            } else if (args[0] === 'ping') {
                var retr = {
                    gdprApplies: gdprApplies,
                    cmpLoaded: false,
                    cmpStatus: 'stub'
                };

                if (typeof args[2] === 'function') {
                    args[2](retr);
                }
            } else {
                if(args[0] === 'init' && typeof args[3] === 'object') {
                    args[3] = Object.assign(args[3], { tag_version: 'V3' });
                }
                queue.push(args);
            }
        }

        function postMessageEventHandler(event) {
            var msgIsString = typeof event.data === 'string';
            var json = {};

            try {
                if (msgIsString) {
                    json = JSON.parse(event.data);
                } else {
                    json = event.data;
                }
            } catch (ignore) {}

            var payload = json.__tcfapiCall;

            if (payload) {
                window.__tcfapi(
                    payload.command,
                    payload.version,
                    function(retValue, success) {
                        var returnMsg = {
                            __tcfapiReturn: {
                                returnValue: retValue,
                                success: success,
                                callId: payload.callId
                            }
                        };
                        if (msgIsString) {
                            returnMsg = JSON.stringify(returnMsg);
                        }
                        if (event && event.source && event.source.postMessage) {
                            event.source.postMessage(returnMsg, '*');
                        }
                    },
                    payload.parameter
                );
            }
        }

        while (win) {
            try {
                if (win.frames[TCF_LOCATOR_NAME]) {
                    cmpFrame = win;
                    break;
                }
            } catch (ignore) {}

            if (win === window.top) {
                break;
            }
            win = win.parent;
        }
        if (!cmpFrame) {
            addFrame();
            win.__tcfapi = tcfAPIHandler;
            win.addEventListener('message', postMessageEventHandler, false);
        }
    };

    makeStub();

    var uspStubFunction = function() {
        var arg = arguments;
        if (typeof window.__uspapi !== uspStubFunction) {
            setTimeout(function() {
                if (typeof window.__uspapi !== 'undefined') {
                    window.__uspapi.apply(window.__uspapi, arg);
                }
            }, 500);
        }
    };

    var checkIfUspIsReady = function() {
        uspTries++;
        if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
            console.warn('USP is not accessible');
        } else {
            clearInterval(uspInterval);
        }
    };

    if (typeof window.__uspapi === 'undefined') {
        window.__uspapi = uspStubFunction;
        var uspInterval = setInterval(checkIfUspIsReady, 6000);
    }
})();


    loadScripts();



    var billboard1  = 'billboard1';
var billboard2  = 'billboard2';
var sidebar1    = 'sidebar1';
var sidebar2    = 'sidebar2';
var outofpage   = 'outofpage';
var intext1     = 'intext1';
var intext2     = 'intext2';
var intext3     = 'intext3';
var intext4     = 'intext4';
var intext5     = 'intext5';
var intext6     = 'intext6';
var intext7     = 'intext7';
var endarticle  = 'endarticle';

var slots = {
    billboard1: {
        'code': adserverPrefix + '_' + billboard1,
        'divId': 'div-gpt-' + billboard1,
        'sizesGt': $mMob ?
            [[300, 50], [300, 100], [300,250], "fluid"] : $mTab ?
                [[300,250], [728,90], "fluid"] : [[970,250], "fluid"]
    },
    billboard2: {
        'code': adserverPrefix + '_' + billboard2,
        'divId': 'div-gpt-' + billboard2,
        'sizesGt': $mMob ?
            [[300,250], [300, 600], [336, 280], "fluid"] : $mTab ?
                [[300,250], [336, 280], [728,90], "fluid"] : [[728,90], [970,250], "fluid"]
    },
    sidebar1: {
        'code': adserverPrefix + '_' + sidebar1,
        'divId': 'div-gpt-' + sidebar1,
        'sizesGt': $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [300,600]]
    },
    sidebar2: {
        'code': adserverPrefix + '_' + sidebar2,
        'divId': 'div-gpt-' + sidebar2,
        'sizesGt': $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [300,600]]
    },
    outofpage: {
        'code': adserverPrefix + '_' + outofpage,
        'divId': 'div-gpt-' + outofpage,
        'sizesGt': [1,1]
    },
    intext1: {
        'code': adserverPrefix + '_' + intext1,
        'divId': 'div-gpt-' + intext1,
        'sizesGt':  [[300,250], [336,280], 'fluid']
    },
    intext2: {
        'code': adserverPrefix + '_' + intext2,
        'divId': 'div-gpt-' + intext2,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    intext3: {
        'code': adserverPrefix + '_' + intext3,
        'divId': 'div-gpt-' + intext3,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    intext4: {
        'code': adserverPrefix + '_' + intext4,
        'divId': 'div-gpt-' + intext4,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    intext5: {
        'code': adserverPrefix + '_' + intext5,
        'divId': 'div-gpt-' + intext5,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    intext6: {
        'code': adserverPrefix + '_' + intext6,
        'divId': 'div-gpt-' + intext6,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    intext7: {
        'code': adserverPrefix + '_' + intext7,
        'divId': 'div-gpt-' + intext7,
        'sizesGt':  $mMob ?
            [[300,250], [336,280], [300, 600], "fluid"] : [[300,250], [336,280], [580,400], "fluid"]
    },
    endarticle: {
        'code': adserverPrefix + '_' + endarticle,
        'divId': 'div-gpt-' + endarticle,
        'sizesGt':  $mMob ?
            [[300,250], [300,600], [336,280], 'fluid'] : [[300, 250],[336,280], [580, 400], 'fluid']
    }
};

    if (pageType === 'homepage' && category === '') {
    activeGoogleTagSlots.push(slots['billboard1']);
    activeGoogleTagSlots.push(slots['sidebar1']);
    activeGoogleTagSlots.push(slots['sidebar2']);
    activeGoogleTagSlots.push(slots['outofpage']);

} else if (pageType !== 'article' && category !== '') {
    if ($mTabLg || $mDesk) {
        activeGoogleTagSlots.push(slots['sidebar1']);
    }

    activeGoogleTagSlots.push(slots['outofpage']);

} else {
    activeGoogleTagSlots.push(slots['billboard1']);
    activeGoogleTagSlots.push(slots['billboard2']);

    activeGoogleTagSlots.push(slots['sidebar1']);
    activeGoogleTagSlots.push(slots['sidebar2']);

    for (let i = 1; i <= maxIntext; i++) {
        activeGoogleTagSlots.push(slots['intext' + i]);
    }

    activeGoogleTagSlots.push(slots['endarticle']);
    activeGoogleTagSlots.push(slots['outofpage']);

}

    googletag.cmd.push(function() {

    var vignette = null;
    if ($mMob) {
        vignette = googletag.defineOutOfPageSlot(adserverPrefix + '_interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);

        if (vignette) {
            vignette.addService(googletag.pubads());
        }
    }

    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setCentering(true);
    googletag.pubads().enableSingleRequest();

    googletag.enableServices();

    if (vignette) {
        googletag.display(vignette);
    }
});

function intextCount()
{
    var idStartsWith = "div-gpt-intext"

    var items = document.querySelectorAll(`[id^=${idStartsWith}]`);

    var intextNo = items.length;

    console.log("intexts in page: " + intextNo);
    console.log("maxIntext: " + maxIntext);
}

function ready() {




    intextCount();

    var divSlot = '';

    activeGoogleTagSlots.forEach(function (slot) {
        divSlot = document.getElementById(slot.divId);

        if (divSlot) {
            console.log(slot.divId + ' in page');

            var xel = document.getElementById(slot.divId);

            if (window.getComputedStyle(xel).display === "none") {
                console.log(slot.divId + ' loaded with display none');
            } else {
                console.log(slot.divId + ' loaded OK');
                console.log("---" + window.getComputedStyle(xel).display + "---");

                googletag.cmd.push(function () {
                    googletag.defineSlot(slot.code, slot.sizesGt, slot.divId).addService(googletag.pubads());
                    googletag.display(slot.divId);
                });
            }
        } else {
            console.log(slot.divId + ' not in page');
        }

    });
}

document.addEventListener("DOMContentLoaded", ready);