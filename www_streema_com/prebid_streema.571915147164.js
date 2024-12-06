// 
// var pbSource = "//dgtl.ro/clients/streema/prebid8.7.0.js";
var pbSource = "/static/js/prebid_source.js"
// 
var pbAdUnits = "/static/js/streema_adunits.js";


var pbSourceParams = "";


var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});
var pt_config_namespace = {};
pt_config_namespace.maxRefreshes = 20;
pt_config_namespace.googleSlotRefreshCount = pt_config_namespace.googleSlotRefreshCount || [];
pt_config_namespace.prebidAdUnitsAlreadyAddedToPbjs = [];
pt_config_namespace.bidCpmAdj = {
    standard: 100,
    conversant: 80
}
pt_config_namespace.refreshCallCount = 0;
pt_config_namespace.MASTER_SLOT_ID = 'div-top';

pt_config_namespace.refreshOptions = [
    "UNIFIED", // SELECTION #1 BELOW
    "INDIVIDUAL_NATURAL", // SELECTION #2 BELOW
    "INDIVIDUAL_INTERVAL", // SELECTION #3 BELOW
    "MASTER_SLOT", // SELECTION #4 BELOW
    "SIMPLE_TIMER", // SELECTION #5 BELOW
];
pt_config_namespace.refreshSelection = 1; // Change this to switch the refresh settings
pt_config_namespace.timeBetweenRefreshes = 30000; // Only used for INDIVIDUAL_INTERVAL
pt_config_namespace.bidTimeout = 1000;
pt_config_namespace.failSafeTimeout = 2000;
pt_config_namespace.refreshTimer = 30000;
pt_config_namespace.individualRunningTimers = [];
pt_config_namespace.amazonOn = true;
var head = document.getElementsByTagName('head')[0];
var prebidSourceScript = document.createElement('script');
prebidSourceScript.type = 'application/javascript';
prebidSourceScript.src = pbSource + ((pbSourceParams != "") ? "?" + pbSourceParams : "");
head.appendChild(prebidSourceScript);
var adUnitsScript = document.createElement('script');
adUnitsScript.type = 'application/javascript';
adUnitsScript.src = pbAdUnits;
head.appendChild(adUnitsScript);
pt_config_namespace.inventoryAvailable = [];
pt_config_namespace.usedInventory = [];


pt_config_namespace.findInventory = function(slot) {
    var divId = slot.getSlotElementId();
    var adUnitPath = slot.getAdUnitPath();
    var sizeArrOfObjects = slot.getSizes();
    var sizeArr = sizeArrOfObjects.map(function(obj) {
        return Object.keys(obj).map(function(key) {
            return obj[key];
        });
    });
    sizeArr.sort(function(a, b) {
        if ((a[0] - b[0]) === 0)
            return (a[1] - b[1]);
        return (a[0] - b[0]);
    });
    var apSlot = {};
    var prebidSlot = {};
    apSlot.slotID = divId;
    apSlot.slotName = adUnitPath.slice(1);
    apSlot.sizes = sizeArr;
    // If we have inventory for this size combo there should be an prebid ad unit in the ad unit file that is named
    // according to the size combination ex: pt_config_namespace._728x90_970x250
    // Build the variable name here from the sizes
    var slotNameString = '';
    if (sizeArr[0].constructor === Array) {
        for (var i = 0; i < sizeArr.length; i++) {
            var size = sizeArr[i];
            slotNameString = slotNameString + '_' + size[0] + 'x' + size[1];
        }
    } else {
        slotNameString = '_' + sizeArr[0] + 'x' + sizeArr[1];
    }

    if (pt_config_namespace.usedInventory.includes(slotNameString)) {
        slotNameStringArr = slotNameString.split("$");
        if (slotNameStringArr.length === 1) {
            slotNameString = slotNameString + "$1"
        } else {
            slotNameString = slotNameString + "$" + (slotNameStringArr[1] + 1)
        }
    }

    prebidSlot = pt_config_namespace[slotNameString];
    if (typeof prebidSlot == "undefined") {
        // If we don't have an exact naming, we can find a prebid ad unit based on two other factors. 
        // 1) Is there a prebid ad unit whose sizes in the name is a subset of the googletag unit
        // 2) Is there a prebid ad unit whose sizes in the object is a subset of the googletag unit
        var alternatePrebidInventoryIfCantFindExactMatch = pt_config_namespace.inventoryAvailable.find(function(inventory) {
            var comparatorFunction = function(val) {
                for (i in sizeArr) {
                    if (sizeArr[i][0] == val[0] && sizeArr[i][1] == val[1]) return true;
                }
                return false;
            };
            var everySizeInPrebidUnitNameIsIncludedInGoogletagSizes = inventory.sizesInName.every(comparatorFunction);
            var everySizeInPrebidUnitObjectIsIncludedInGoogletagSizes = inventory.sizesInObj.every(comparatorFunction);
            return ((everySizeInPrebidUnitObjectIsIncludedInGoogletagSizes === true || everySizeInPrebidUnitNameIsIncludedInGoogletagSizes === true));

        });
        if (typeof alternatePrebidInventoryIfCantFindExactMatch != "undefined") {
            prebidSlot = pt_config_namespace[alternatePrebidInventoryIfCantFindExactMatch.name];
            prebidSlot.code = divId;
        } else {
            console.log("MISSING PREBID INVENTORY FOR ", slotNameString);
        }
    } else {
        prebidSlot.code = divId;
        pt_config_namespace.usedInventory.push(slotNameString);
    }
    if (pt_config_namespace.refreshSelection == 2) {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            pt_config_namespace.setIndividualAdRefreshTimer(event.slot);
        });
    }

    if (typeof pt_config_namespace.googleSlotRefreshCount[divId] != "undefined") {
        pt_config_namespace.googleSlotRefreshCount[divId] = pt_config_namespace.googleSlotRefreshCount[divId] + 1;
    } else {
        pt_config_namespace.googleSlotRefreshCount[divId] = 0;
    }
    if (pt_config_namespace.prebidAdUnitsAlreadyAddedToPbjs.indexOf(divId) == -1) {
        pbjs.que.push(function() {
            pbjs.addAdUnits([prebidSlot]);
        });
        pt_config_namespace.prebidAdUnitsAlreadyAddedToPbjs.push(divId);
    }
    return [prebidSlot, apSlot];
}

pt_config_namespace.fetchHeaderBids = function(slots) {

    if (typeof pbjs === "undefined" || typeof pt_config_namespace.adUnitsLoaded === "undefined") {
        window.setTimeout(pt_config_namespace.fetchHeaderBids.bind(null, slots), 50);
        return;
    }

    var bidders = ['a9', 'prebid'];

    var requestManager = {
        adserverRequestSent: false
    }
    for (var j = 0; j < bidders.length; j++) {
        requestManager[bidders[j]] = false;
    }
    var prebidUnitsToFetch = [];
    var apStagUnitsToFetch = [];
    var shouldRefreshAny = false;

    for (var i = 0; i < slots.length; i++) {
        var slot = slots[i];
        var inventory = pt_config_namespace.findInventory(slot);
        var unitName = slot.getAdUnitPath();
        var divId = slot.getSlotElementId();
        var refreshCount = pt_config_namespace.googleSlotRefreshCount[divId];
        var isOverMaxRefresh = refreshCount >= pt_config_namespace.maxRefreshes;
        var isUnitExcluded = false;
        if (pt_config_namespace.excludedAdPaths) {
            isUnitExcluded = pt_config_namespace.excludedAdPaths.some(function(name) {
                return (unitName.indexOf(name) > -1);
            })
        }
        if ((!isUnitExcluded && !isOverMaxRefresh) || (isUnitExcluded && !pt_config_namespace.googleSlotRefreshCount[divId])) {
            shouldRefreshAny = true;
            if (inventory[0]) {
                prebidUnitsToFetch.push(inventory[0]);
            }
            if (inventory[1]) {
                apStagUnitsToFetch.push(inventory[1]);
            }
            if (!pt_config_namespace.googleSlotRefreshCount[divId]) {
                pt_config_namespace.googleSlotRefreshCount[divId] = 0;
            }
            slot.setTargeting("refresh", pt_config_namespace.googleSlotRefreshCount[divId].toString());
        }
    };

    pt_config_namespace.usedInventory = [];

    function allBiddersBack() {
        var allBiddersBack = bidders
            .map(function(bidder) {
                return requestManager[bidder];
            })
            .filter(Boolean)
            .length === bidders.length;
        return allBiddersBack;
    }

    function headerBidderBack(bidder) {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        if (bidder === 'a9') {
            requestManager.a9 = true;
        } else if (bidder === 'prebid') {
            requestManager.prebid = true;
        }
        if (allBiddersBack()) {
            sendAdserverRequest(slots);
        }
    }

    function sendAdserverRequest(slots) {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        requestManager.adserverRequestSent = true;
        pbjs.adserverRequestSent = true;
        googletag.cmd.push(function() {
            apstag.setDisplayBids();
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(slots);
        });
        pt_config_namespace.refreshCallCount++;
    }

    function requestBids() {
        if (pt_config_namespace.amazonOn && apStagUnitsToFetch && apStagUnitsToFetch.length > 0) {
            apstag.fetchBids({
                slots: apStagUnitsToFetch,
                timeout: pt_config_namespace.bidTimeout
            }, function(bids) {
                headerBidderBack('a9');
            });
        }

        if (prebidUnitsToFetch && prebidUnitsToFetch.length > 0) {
            pbjs.que.push(function() {
                pbjs.requestBids({
                    adUnits: prebidUnitsToFetch,
                    bidsBackHandler: function(bidResponses) {
                        headerBidderBack('prebid');
                    }
                });
            });
        }
    }

    if (shouldRefreshAny) {
        requestBids()
        window.setTimeout(function() {
            sendAdserverRequest(slots);
        }, pt_config_namespace.failSafeTimeout);
    }
};

pt_config_namespace.setPrebidConfigs = function() {
    if (typeof pbjs !== "undefined" && typeof pbjs.setConfig !== "undefined") {
        pbjs.que.push(function() {
            pbjs.setConfig({
                bidderSequence: 'random',
                enableSendAllBids: true,
                priceGranularity: 'dense',
                storageAllowed: true,
                useBidCache: true,
                debug: true,
                bidderTimeout: pt_config_namespace.bidTimeout,
                floors: {
                    default: 0.05
                }
            });
            pbjs.bidderSettings = {
                standard: {
                    adserverTargeting: [{
                        key: "hb_bidder",
                        val: function(bidResponse) {
                            return bidResponse.bidderCode;
                        }
                    }, {
                        key: "hb_adid",
                        val: function(bidResponse) {
                            return bidResponse.adId;
                        }
                    }, {
                        key: "hb_pb",
                        val: function(bidResponse) {
                            return bidResponse.pbDg;
                        }
                    }, {
                        key: 'hb_size',
                        val: function(bidResponse) {
                            return bidResponse.size;
                        }
                    }, {
                        key: 'hb_source',
                        val: function(bidResponse) {
                            return bidResponse.source;
                        }
                    }, {
                        key: 'hb_format',
                        val: function(bidResponse) {
                            return bidResponse.mediaType;
                        }
                    }]
                }
            };
            var bidCpmAdjs = Object.keys(pt_config_namespace.bidCpmAdj);
            for (var i = 0; i < bidCpmAdjs.length; i++) {
                var bn = bidCpmAdjs[i];
                var ba = pt_config_namespace.bidCpmAdj[bn];
                pbjs.bidderSettings[bn] = pbjs.bidderSettings[bn] || {};
                pbjs.bidderSettings[bn].bidCpmAdjustment = function(e, n) {
                    return ba * e / 100;
                }
            }
        });
    } else {
        window.setTimeout(pt_config_namespace.setPrebidConfigs, 50);
    }
};

pt_config_namespace.setPrebidConfigs();

adUnitsScript.onload = function() {
        for (var key in pt_config_namespace) {
            if (key.startsWith('_')) {
                var inventoryObj = {};
                inventoryObj.name = key;
                try {
                    var sizesString = key.split("_");
                    sizesString.shift();
                    var sizesArray = [];
                    for (var i = 0; i < sizesString.length; i++) {
                        var size = sizesString[i];
                        sizesArray.push(size.split("x").map(Number));
                    }
                    inventoryObj.sizesInName = sizesArray;

                } catch (error) {}
                inventoryObj.sizesInObj = pt_config_namespace[key].sizes;
                inventoryObj.sizesInObj.sort(function(a, b) {
                    if ((a[0] - b[0]) === 0)
                        return (a[1] - b[1]);
                    return (a[0] - b[0]);
                });
                inventoryObj.sizesInName.sort(function(a, b) {
                    if ((a[0] - b[0]) === 0)
                        return (a[1] - b[1]);
                    return (a[0] - b[0]);
                });
                pt_config_namespace.inventoryAvailable.push(inventoryObj);
            }
        }
    }

    ! function(a9, a, p, s, t, A, g) {
        if (a[a9]) return;

        function q(c, r) {
            a[a9]._Q.push([c, r])
        }
        a[a9] = {
            init: function() {
                q("i", arguments)
            },
            fetchBids: function() {
                q("f", arguments)
            },
            setDisplayBids: function() {},
            targetingKeys: function() {
                return []
            },
            _Q: []
        };
        A = p.createElement(s);
        A.async = !0;
        A.src = t;
        g = p.getElementsByTagName(s)[0];
        g.parentNode.insertBefore(A, g)
    }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

apstag.init({
    pubID: 'bff72a3c-a6a9-447c-b1e0-a9ade572bac4', //enter your pub ID here as shown above, it must within quotes
    adServer: 'googletag'
});

pt_config_namespace.isInView = function(divId) {
    var elem = document.getElementById(divId);
    if (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } else {
        return false;
    }
};

pt_config_namespace.findAllUnits = function() {
    var slots = [];
    for (var i = 0; i < googletag.pubads().getSlots().length; i++) {
        var slot = googletag.pubads().getSlots()[i];
        var divId = slot.getSlotElementId();
        var slotElem = document.getElementById(divId);
        if (slotElem) {
            slots.push(slot);
        }
    };
    return slots;
}

pt_config_namespace.findAllInViewUnits = function() {
    var slotsToRefresh = [];
    for (var i = 0; i < googletag.pubads().getSlots().length; i++) {
        var slot = googletag.pubads().getSlots()[i];
        var divId = slot.getSlotElementId();
        var slotElem = document.getElementById(divId);
        if (slotElem && pt_config_namespace.isInView(divId)) {
            slotsToRefresh.push(slot);
        }
    };
    return slotsToRefresh;
}

// Timer used for Refresh Setting #1 (UNIFIED)
pt_config_namespace.refreshViewableAds = function() {
    function timer() {
        if (document.hidden) {
            return;
        } else {
            var slotsToRefresh = pt_config_namespace.findAllInViewUnits();
            if (slotsToRefresh.length) {
                pt_config_namespace.fetchHeaderBids(slotsToRefresh);
            }
        }
    };
    window.setInterval(timer, pt_config_namespace.refreshTimer);
}

// Timer used for Refresh Setting #4 (MASTER_SLOT)
pt_config_namespace.refreshAllAdsIfMasterInView = function() {
    function timer() {
        if (document.hidden) {
            return;
        } else {
            if (pt_config_namespace.isInView(pt_config_namespace.MASTER_SLOT_ID)) {
                var slotsToRefresh = pt_config_namespace.findAllUnits();
                pt_config_namespace.fetchHeaderBids(slotsToRefresh);
            }
        }
    };
    window.setInterval(timer, pt_config_namespace.refreshTimer);
}

// Timer used for Refresh Setting #5 (SIMPLE_TIMER)
pt_config_namespace.refreshAllAds = function() {
    function timer() {
        if (document.hidden) {
            return;
        } else {
            var slotsToRefresh = pt_config_namespace.findAllUnits();
            pt_config_namespace.fetchHeaderBids(slotsToRefresh);
        }
    };
    window.setInterval(timer, pt_config_namespace.refreshTimer);
}

pt_config_namespace.setRefreshes = function() {
    if (typeof googletag == "undefined" || !googletag.apiReady || typeof pt_config_namespace.adUnitsLoaded === "undefined") {
        window.setTimeout(pt_config_namespace.setRefreshes, 50);
        return;
    }

    // For UNIFIED_REFRESH (or default)
    if (!pt_config_namespace.refreshSelection || isNaN(pt_config_namespace.refreshSelection) ||
        pt_config_namespace.refreshSelection === 1 || pt_config_namespace.refreshSelection > pt_config_namespace.refreshOptions.length) {
        window.setTimeout(pt_config_namespace.refreshViewableAds);
    }

    // For Refresh Setting #2 (INDIVIDUAL_NATURAL) the timer is called from googletag.cmd.push based on the viewable event

    // For Refresh Setting #3 (INDIVIDUAL_INTERVAL)
    if (pt_config_namespace.refreshSelection === 3) {
        var interval = 0;
        for (var i = 0; i < googletag.pubads().getSlots().length; i++) {
            var slot = googletag.pubads().getSlots()[i];
            window.setTimeout(function() {
                pt_config_namespace.setIndividualAdRefreshTimer(slot.getSlotElementId())
            }, pt_config_namespace.bidTimeout + interval);
            interval = interval + pt_config_namespace.timeBetweenRefreshes;
        };
    }

    // For Refresh Setting #4 (MASTER_SLOT)
    if (pt_config_namespace.refreshSelection === 4) {
        window.setTimeout(pt_config_namespace.refreshAllAdsIfMasterInView, pt_config_namespace.bidTimeout);
    }

    if (pt_config_namespace.refreshSelection === 5) {
        window.setTimeout(pt_config_namespace.refreshAllAds, pt_config_namespace.bidTimeout);
    }
}

pt_config_namespace.setRefreshes();

// Timer used for Refresh Setting #2 (INDIVIDUAL_NATURAL) and Refresh Setting #3 (INDIVIDUAL_INTERVAL)
pt_config_namespace.setIndividualAdRefreshTimer = function(slot) {
    var divId = slot.getSlotId().getDomId();
    var unitPath = slot.getAdUnitPath();
    if (pt_config_namespace.individualRunningTimers.indexOf(divId) == -1) {
        function timer(slot) {
            if (document.hidden) {
                return;
            } else {
                if (pt_config_namespace.isInView(slot.getSlotId().getDomId())) {
                    pt_config_namespace.fetchHeaderBids([slot]);
                }
            }
        };
        pt_config_namespace.individualRunningTimers.push(divId);
        var refreshTimer = pt_config_namespace.refreshTimer;
        if (pt_config_namespace.refreshTimerOverrides) {
            var override = Object.keys(pt_config_namespace.refreshTimerOverrides).find(function(unitName) {
                return (unitPath.indexOf(unitName) > -1)
            })
            if (override) {
                refreshTimer = pt_config_namespace.refreshTimerOverrides[override];
            }
        }
        window.setInterval(function() {
            timer(slot);
        }, refreshTimer);
    }
}

pt_config_namespace.refreshNewlyScrolledAdSpaces = function() {
    var slotsToRefresh = [];
    for (var i = 0; i < googletag.pubads().getSlots().length; i++) {
        var slot = googletag.pubads().getSlots()[i];
        var divId = slot.getSlotElementId();
        var slotElem = document.getElementById(divId);
        if (slotElem && pt_config_namespace.isInView(divId)) {
            var refreshCount = pt_config_namespace.googleSlotRefreshCount[divId];
            if (typeof refreshCount === "undefined") {
                pt_config_namespace.googleSlotRefreshCount[divId] = 0;
                slotsToRefresh.push(slot);
            }
        }
    };
    if (slotsToRefresh.length) {
        pt_config_namespace.fetchHeaderBids(slotsToRefresh);
    }
}

pt_config_namespace.loadAdsInitially = function() {
    if (!window.googletag || !googletag.apiReady || typeof pbjs === "undefined" || typeof pt_config_namespace.adUnitsLoaded === "undefined") {
        window.setTimeout(pt_config_namespace.loadAdsInitially.bind(null), 50);
    } else {
        var slots = googletag.pubads().getSlots().filter(function(slot) {
            return pt_config_namespace.isInView(slot.getSlotElementId())
        });
        pt_config_namespace.fetchHeaderBids(slots);
    }
}

pt_config_namespace.loadAdsInitially();

pt_config_namespace.setLazyLoadCheckInterval = function() {
    window.setInterval(pt_config_namespace.refreshNewlyScrolledAdSpaces, 5000);
}
window.setTimeout(pt_config_namespace.setLazyLoadCheckInterval, 5000);

pt_config_namespace.checkFatalErrorsAndLoadGamAdsIfSomethingHappened = function() {
    if (typeof pbjs === "undefined" || typeof pbjs.setConfig === "undefined" ||
        typeof pt_config_namespace.prebidAdUnits === "undefined" || pt_config_namespace.prebidAdUnits.length === 0) {
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
        });
    }
}