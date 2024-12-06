/*
  Advally JS Rules
  Updated 2024-11-21 16:23:37
*/

// Doubleclick CMD queue
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

// Advally CMD queue
var advally = advally || {};
advally.cmd = advally.cmd || [];

// Only load the site config once
if (advally.RulesLoaded !== undefined) {
	console.warn('rules.js loaded twice');
} else {
	advally.RulesLoaded = true;

	// Load Advally wrapper (rules.js)
	(function() {
		var a = document,
			b = a.createElement("script");
		a.location.protocol, b.type = "text/javascript",
		b.src = 'https://cdn.adligature.com/rules.js/advally-5.49.1.js';
		var c = document.getElementsByTagName("head")[0];
		c.insertBefore(b, c.firstChild);
		console.log('Advally Wrapper v5.49.1');
	})();

		// Load our CSS file first
	(function() {
		var a = document,
		b = a.createElement("link");
		b.type = "text/css",
		b.rel ="stylesheet",
		b.href= 'https://cdn.adligature.com/bsballamerica/prod/rules.css';
		var c = document.getElementsByTagName("head")[0];
		c.insertBefore(b, c.firstChild);
	})();
	
	advally.cmd.push(function() {

		// Core
		advally.setConfig({
			site: 'bsballamerica',
			sellerId: 'P9S38',
			env: 'prod',
			debug: false,
			bid_timeout: 1500,
			cmp_timeout: 20000,
		});

		// An override from the URL to enable the debug log
		if (advally.getQueryParameter("AdvallyDebugLog") == 'true') {
			advally.setConfig({ 'debug': true });
		}
		if (advally.getQueryParameter("AdvallyPerfLog") == 'true') {
			advally.setConfig({ 'perfmeasure': true });
		}
	
		
		
		try {
		// Googletag
				advally.Googletag.load();
				advally.Googletag.config('singleRequestMode', false);
		advally.Units.setDefaultSlot('/21743036072/baseball_america');
	} catch(error) {
		advally.error(error);
	}

		try {
		// Prebid
		advally.Prebid.load("8.51.0");
		advally.Prebid.config('randomizeBidders', true );
		advally.Prebid.config('tieredBuckets', true );
		advally.Prebid.config('sendAllBids', true );
		advally.Prebid.config('useridLiveramp', false );
		
				
							
			 
				
							
																																																																																																																																																																																																																																																																																																																																advally.Prebid.configBidder('nextMillennium', 'disabledSendingStatisticData', true);
																																																																																																													advally.Prebid.addDataProvider({"name":"experian_rtid","waitForIt":true,"params":{"accountId":"MX7zwKYH0e","bidders":["sonobi"],"ids":{}}});
																																						 

	} catch(error) {
		advally.error(error);
	}

		try {
		// Amazon
		advally.Amazon.config('pubId', '7e29cf92-dbd2-479a-865a-9cb3658a40f8');
		advally.Amazon.config('passSchain', true);
		advally.Amazon.config('siteName', "BaseballAmerica" );
		advally.Amazon.config('siteDomain', "baseballamerica.com" );
		advally.Amazon.load();
	} catch(error) {
		advally.error(error);
	}
		
		
		try {
		// Anti-Malware
		
		advally.AdLightning.config('enableDesktop', true);
		advally.AdLightning.config('enableMobile', true);
		advally.AdLightning.config('website', "advally-baseballamerica");
	} catch(error) {
		advally.error(error);
	}

		
		try {
		// Adhesion
				advally.Adhesion.config('segment', "adhesion-banners-776");
		 
		advally.Adhesion.config('enableDesktop', true);
		advally.Adhesion.config('enableMobile', false);
		advally.Adhesion.config('marginThresholdMobile', 0);
		advally.Adhesion.config('marginThresholdDesktop', 0);
		advally.Adhesion.config('closeDuration', 3);
						advally.Adhesion.config('maxWidth', 970);
						advally.Adhesion.config('bgColor', "eeeeee");
						advally.Adhesion.config('bgOpacity', 0.7);
								advally.Adhesion.config('hideMarginBottom', 100);
								advally.Adhesion.config('mobile320x100', false);
		
						
		
		
		advally.Adhesion.config('slotName', '/21743036072/baseball_america/bottom_adhesion_banner');
	} catch(error) {
		advally.error(error);
	}

		
				
		try {
		advally.OOP.add({
			unit_id: "Interstitial",
			enableDesktop: true, 
			enableMobile: true, 
			segment: "search-and-social-1041", 
			type: "INTERSTITIAL", 
			slot: '/21743036072/baseball_america/Interstitial'
		});
	} catch(error) {
		advally.error(error);
	}

 		// Advally V2 Tags
	try {
		advally.Units.config({
			units: [], 
		});
	}catch(e){};

	// Sizemaps V1
		
	// Advally V1 Tags
						advally.Units.prepareOverride('AdvAd-Interstitial-OOP', 'slot', {
				value: "\/21743036072\/baseball_america\/Interstitial"
			});
										advally.Units.prepareOverride('advally-adhesion-slot', 'slot', {
				value: "\/21743036072\/baseball_america\/bottom_adhesion_banner"
			});
																											advally.Units.prepareOverride('div-bba-adslot-footer', "lazyloadmargin", {
					value: 25
				});
																advally.Units.prepareOverride('div-bba-adslot-HP-inline-1', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-HP-inline-1"
			});
											advally.Units.prepareOverride('div-bba-adslot-HP-inline-1', 'size', {
					value: "728x90"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-1', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-1"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-1', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-1', 'multiple', {
					value: true
				});
														advally.Units.prepareOverride('div-bba-adslot-inline-2', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-2"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-2', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-2', 'multiple', {
					value: true
				});
														advally.Units.prepareOverride('div-bba-adslot-inline-3', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-3"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-3', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-3', 'multiple', {
					value: true
				});
														advally.Units.prepareOverride('div-bba-adslot-inline-4', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-4"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-4', 'autosize', {
					value: "728x90,300x250"
				});
																	advally.Units.prepareOverride('div-bba-adslot-inline-5', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-5"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-5', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-5', 'multiple', {
					value: true
				});
														advally.Units.prepareOverride('div-bba-adslot-inline-6', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-6"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-6', 'autosize', {
					value: "728x90,300x250"
				});
																	advally.Units.prepareOverride('div-bba-adslot-inline-7', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-7"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-7', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-7', 'multiple', {
					value: true
				});
														advally.Units.prepareOverride('div-bba-adslot-inline-8', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-adslot-inline-8"
			});
											advally.Units.prepareOverride('div-bba-adslot-inline-8', 'autosize', {
					value: "728x90,300x250"
				});
																					advally.Units.prepareOverride('div-bba-adslot-inline-8', 'multiple', {
					value: true
				});
																										advally.Units.prepareOverride('div-bba-adslot-sidebar--0', "lazyloadmargin", {
					value: 50
				});
																							advally.Units.prepareOverride('div-bba-adslot-sidebar--1', "lazyloadmargin", {
					value: 50
				});
																advally.Units.prepareOverride('div-bba-inline-mob', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-inline-mob"
			});
											advally.Units.prepareOverride('div-bba-inline-mob', 'size', {
					value: "300x250"
				});
																					advally.Units.prepareOverride('div-bba-inline-mob-2', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-inline-mob-2"
			});
											advally.Units.prepareOverride('div-bba-inline-mob-2', 'size', {
					value: "300x250"
				});
																					advally.Units.prepareOverride('div-bba-inline-mob-3', 'slot', {
				value: "\/21743036072\/baseball_america\/div-bba-inline-mob-3"
			});
											advally.Units.prepareOverride('div-bba-inline-mob-3', 'size', {
					value: "300x250"
				});
																 

	// Googletags
	

		advally.PageLabel.add("account-page-219", "url_path", {"operation":"contains","match":"\/my-account"} );
	advally.PageLabel.add("device-category-16", "device_category", [] );
	advally.PageLabel.add("disable-all-ads-612", "custom", {"script":"return (document.location.search.indexOf('stopAds') >= 0);"} );
	advally.PageLabel.add("disable-connatix-610", "custom", {"script":"return (document.location.search.indexOf('stopConnatix') >= 0);"} );
	advally.PageLabel.add("disable-quiz-611", "custom", {"script":"return (document.location.search.indexOf('stopQuiz') >= 0);"} );
	advally.PageLabel.add("feedback-support-page-648", "url_path", {"operation":"begins","match":"\/feedback-support"} );
	advally.PageLabel.add("geography-country-625", "geo_country", [] );
	advally.PageLabel.add("is-guest-bbpiano-522", "custom", {"script":"return (window.pn && window.pn.pianoId && !window.pn.pianoId.isUserValid());"} );
	advally.PageLabel.add("is-paywalled-content-523", "custom", {"script":"let advRules = document.querySelector('#AdvallyRules');\r\nreturn (advRules && advRules.dataset && advRules.dataset.targeting.indexOf('paywall=1') > -1);\r\n\/\/let values = googletag.pubads().getTargeting('paywall');\r\n\/\/return (values.length>0 && values.indexOf('1') > -1);"} );
	advally.PageLabel.add("join-the-newsletter-page-602", "url_path", {"operation":"begins","match":"\/join-the-newsletter"} );
	advally.PageLabel.add("mobile-app-page-604", "url_path", {"operation":"begins","match":"\/mobile-app"} );
	advally.PageLabel.add("referer-type-666", "referer_type", [] );
	advally.PageLabel.add("renewal-page-649", "url_path", {"operation":"begins","match":"\/renewal"} );
	advally.PageLabel.add("reset-password-page-220", "url_path", {"operation":"ends","match":"\/reset-password"} );
	advally.PageLabel.add("sign-up-page-221", "url_path", {"operation":"contains","match":"\/sign-up"} );
	advally.PageLabel.add("staging-hash-test-605", "custom", {"script":"return (document.location.hash == '#staging');"} );
	advally.PageLabel.add("staging-site-600", "custom", {"script":"return (window.top.location.hostname == 'stage-baseball-america.pantheonsite.io');"} );

	advally.SiteSegment.add("adhesion-banners-776", "and", {
					"sign-up-page-221": false, 
					"is-guest-bbpiano-522": true, 
					"feedback-support-page-648": false, 
					"renewal-page-649": false, 
				
	});
	advally.SiteSegment.add("article-injectors-861", "and", {
					"is-paywalled-content-523": false, 
				
	});
	advally.SiteSegment.add("break-all-ads-938", "or", {
					"account-page-219": true, 
					"feedback-support-page-648": true, 
					"renewal-page-649": true, 
				
	});
	advally.SiteSegment.add("connatix-video-player-344", "and", {
					"account-page-219": false, 
					"reset-password-page-220": false, 
					"sign-up-page-221": false, 
					"disable-connatix-610": false, 
				
	});
	advally.SiteSegment.add("disable-ads-test-976", "and", {
					"disable-all-ads-612": true, 
				
	});
	advally.SiteSegment.add("is-desktop-29", "and", {
					"device-category-16": ["desktop"], 
				
	});
	advally.SiteSegment.add("is-mobile-30", "and", {
					"device-category-16": ["mobile"], 
				
	});
	advally.SiteSegment.add("just-premium-863", "and", {
					"is-guest-bbpiano-522": true, 
				
	});
	advally.SiteSegment.add("minute-media-bidder-990", "and", {
					"geography-country-625": ["US","CA"], 
				
	});
	advally.SiteSegment.add("search-and-social-1041", "and", {
					"device-category-16": ["mobile","desktop"], 
					"referer-type-666": ["search","social"], 
				
	});
	advally.SiteSegment.add("staging-site-966", "or", {
					"staging-site-600": true, 
					"staging-hash-test-605": true, 
				
	});
	advally.SiteSegment.add("vuukle-972", "and", {
					"sign-up-page-221": false, 
					"join-the-newsletter-page-602": false, 
					"mobile-app-page-604": false, 
					"disable-quiz-611": false, 
				
	});

		
				
		
		// Setup Bidders
		advally.Bidders.set({
    "appnexus": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "placementId": "14928888"
            },
            "segment": null
        }
    ],
    "sharethrough": [
        {
            "size": [
                "970x250"
            ],
            "reusable": true,
            "params": {
                "pkey": "1N519g2mEkKy4lGYb57uhuq9"
            },
            "segment": null
        },
        {
            "size": [
                "320x100"
            ],
            "reusable": true,
            "params": {
                "pkey": "Gj6ktNPO1xNKYqLSOlwbmkHw"
            },
            "segment": null
        },
        {
            "size": [
                "728x90"
            ],
            "reusable": true,
            "params": {
                "pkey": "5eWaDbwN5L0j49dtYaRxu8Zn"
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": true,
            "params": {
                "pkey": "6Nhx6PTcEVYFxaKZUiozmsaJ"
            },
            "segment": null
        },
        {
            "size": [
                "300x600"
            ],
            "reusable": true,
            "params": {
                "pkey": "6IbVhMwyI8UZ1szZFXXteFXt"
            },
            "segment": null
        },
        {
            "size": [
                "160x600"
            ],
            "reusable": true,
            "params": {
                "pkey": "mW69NwsuzzgcE8FGwVRe5dVP"
            },
            "segment": null
        },
        {
            "size": [
                "320x50"
            ],
            "reusable": true,
            "params": {
                "pkey": "Of6nZlW1Rz6DBOXzU1PnywSZ"
            },
            "segment": null
        },
        {
            "size": [
                "970x90"
            ],
            "reusable": true,
            "params": {
                "pkey": "dWdtgVDPsfsYB1luRWLAnqxv"
            },
            "segment": null
        }
    ],
    "vidazoo": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "cId": "65f1b074826227514718ea86",
                "pId": "59ac17c192832d0011283fe3",
                "bidFloor": 0,
                "subDomain": "exchange"
            },
            "segment": null
        }
    ],
    "medianet": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "cid": "8CU658616",
                "crid": 399971641
            },
            "segment": "is-mobile-30"
        },
        {
            "size": null,
            "reusable": true,
            "params": {
                "cid": "8CU658616",
                "crid": 934494236
            },
            "segment": "is-desktop-29"
        }
    ],
    "datablocks": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "source_id": 2726070
            },
            "segment": null
        }
    ],
    "minutemedia": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "org": "01hs9e3z4p90",
                "placementId": "baseballamerica.com"
            },
            "segment": "minute-media-bidder-990"
        }
    ]
});

		
		// Custom targeting from parent page
		try {

			// Find the include for rules.js:  #AdvallyRules
			var AdvallyRulesScript = document.getElementById("AdvallyRules");
			if (AdvallyRulesScript) {

				// Read value of "data-targeting" attribute
				var CustomTargeting = AdvallyRulesScript.dataset.targeting;
				if (CustomTargeting) {
					advally.Page.setTargetingFromQueryStr( unescape(CustomTargeting) );
				}
			}

			// Pass UTM variables, if present
			var utmVars = ['utm_source','utm_medium','utm_campaign','utm_content'];
			for (i=0; i<utmVars.length; i++) {
				var utmValue = advally.getQueryParameter( utmVars[i] );
				if (utmValue) {
					advally.Page.setTargeting(utmVars[i], utmValue);
				}
			}

		} catch(error) {
			advally.error(error);
		}

		(function(advally){
	let newInjector = function(advally) {
		return function() {
			try {
				
				var enableMobile = true;
				var enableDesktop = false;
				
				// Only run on the correct devices 
				if (advally.isMobile) {  // Device is Mobile
					if (!enableMobile) {
						return false;
					}
				} else { // Device is Desktop
					if (!enableDesktop) {
						return false;
					}
				}

				advally.Page.inject('.single .page-layout__main', 'last', 
		 		{
					segment: "connatix-video-player-344", 
 
					html: "<div style=\"max-width: 500px; margin: 0px auto;\"><script id=\"ad65a40bf001487692f91a8349ade79b\"><\/script><\/div>", 
					script_block: "(new Image()).src = 'https:\/\/capi.connatix.com\/tr\/si?token=3af554c4-e104-4414-911b-9b7ccca639fd&cid=879315a5-3dba-4006-95be-ac35d3d8da1c';\r\ncnx.cmd.push(function() {\r\n  cnx({\r\n    playerId: \"3af554c4-e104-4414-911b-9b7ccca639fd\"\r\n  }).render(\"ad65a40bf001487692f91a8349ade79b\");\r\n});", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
	 
		newInjector(advally)();
	})(advally);
	

(function(advally){
	let newInjector = function(advally) {
		return function() {
			try {
				
				var enableMobile = true;
				var enableDesktop = false;
				
				// Only run on the correct devices 
				if (advally.isMobile) {  // Device is Mobile
					if (!enableMobile) {
						return false;
					}
				} else { // Device is Desktop
					if (!enableDesktop) {
						return false;
					}
				}

				advally.Page.inject('.col-xs-12.left-col', 'last', 
		 		{
 
					html: "<div class=\"AdvallyTag\" id=\"div-bba-inline-mob\" data-size=\"300x250\" style=\"padding-bottom: 15px; margin-bottom: 15px; margin-top: 10px; margin-left: auto; margin-right: auto; width: 300px;\"><\/div>", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
	 
		newInjector(advally)();
	})(advally);
	

(function(advally){
	let newInjector = function(advally) {
		return function() {
			try {
				
				var enableMobile = true;
				var enableDesktop = false;
				
				// Only run on the correct devices 
				if (advally.isMobile) {  // Device is Mobile
					if (!enableMobile) {
						return false;
					}
				} else { // Device is Desktop
					if (!enableDesktop) {
						return false;
					}
				}

				advally.Page.inject('.stories.home-stories', 'first', 
		 		{
 
					html: "<div class=\"AdvallyTag\" id=\"div-bba-inline-mob-2\" data-size=\"300x250\" style=\"padding-bottom: 15px; margin-bottom: 15px; margin-top: 10px; margin-left: auto; margin-right: auto; width: 300px;\"><\/div>", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
	 
		newInjector(advally)();
	})(advally);
	

(function(advally){
	let newInjector = function(advally) {
		return function() {
			try {
				
				var enableMobile = false;
				var enableDesktop = true;
				
				// Only run on the correct devices 
				if (advally.isMobile) {  // Device is Mobile
					if (!enableMobile) {
						return false;
					}
				} else { // Device is Desktop
					if (!enableDesktop) {
						return false;
					}
				}

				advally.Page.inject('.stories.home-stories', 'first', 
		 		{
 
					html: "<div class=\"AdvallyTag\" id=\"div-bba-adslot-HP-inline-1\" data-size=\"728x90\" style=\"padding-bottom: 15px; margin-bottom: 15px; margin-top: 10px; margin-left: auto; margin-right: auto; width: 800px;\"><\/div>", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
	 
		newInjector(advally)();
	})(advally);
	

(function(advally){
	let newInjector = function(advally) {
		return function() {
			try {
				
				var enableMobile = true;
				var enableDesktop = true;
				
				// Only run on the correct devices 
				if (advally.isMobile) {  // Device is Mobile
					if (!enableMobile) {
						return false;
					}
				} else { // Device is Desktop
					if (!enableDesktop) {
						return false;
					}
				}

				advally.Page.inject('#primary', 'last', 
		 		{
 
					script_url: "\/\/tag.wknd.ai\/7269\/i.js", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
			setTimeout(newInjector(advally), 5000);
	})(advally);
	

		advally.ContentInjector.add({
				segment: "article-injectors-861", 
		 
		name: "In article - Mobile",
		frequency: {
			mobile: 450,
			desktop: 450
		},
		enable: {
			mobile: true,
			desktop: false
		},
		container: ".single .page-layout__main", 
		selector: ":scope > p",
		weightWord: 1,
		weightSelector: 25,
		startReduction: 0,
		minEndWords: 150,
		creatives: [

					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex0");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex1");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-2';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex2");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-3';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex3");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-4';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex4");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-5';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex5");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-6';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex6");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-7';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex7");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeFixed");
						newunit.dataset.size = '300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-inline-mob-8';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
		 
		
			// Final callback ends further injecting
			function(container,index){
				return false; 
			}
			
		], // end creatives 
		newUnit: function() {
			
			var newunit = document.createElement('div');
			
						newunit.style.marginLeft = 'auto';
			newunit.style.marginRight = 'auto';
			newunit.style.textAlign = 'center';
			
			return newunit;
		},
		wrapCreative: function(newunit, tagType) {

			// Prepare the wrapper and add the new elemnt 
			var wrapper = document.createElement(tagType);
			wrapper.classList.add("AdvallyInjectedWrapper");
									wrapper.setAttribute('style', "padding-bottom: 20px; margin-bottom: 20px; margin-top: 15px; border-bottom: 5px");
						
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});
	advally.ContentInjector.add({
				segment: "article-injectors-861", 
		 
		name: "In article - Desktop",
		frequency: {
			mobile: 300,
			desktop: 300
		},
		enable: {
			mobile: false,
			desktop: true
		},
		container: ".single .page-layout__main", 
		selector: ":scope > p",
		weightWord: 1,
		weightSelector: 25,
		startReduction: 0,
		minEndWords: 150,
		creatives: [

					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex0");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-1-1';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex1");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-2';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex2");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-3';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex3");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-4';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex4");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-5';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex5");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-6';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex6");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-7';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex7");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/21743036072/baseball_america/div-bba-adslot-inline-8';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
		 
		
			// Final callback ends further injecting
			function(container,index){
				return false; 
			}
			
		], // end creatives 
		newUnit: function() {
			
			var newunit = document.createElement('div');
			
						newunit.style.marginLeft = 'auto';
			newunit.style.marginRight = 'auto';
			newunit.style.textAlign = 'center';
			
			return newunit;
		},
		wrapCreative: function(newunit, tagType) {

			// Prepare the wrapper and add the new elemnt 
			var wrapper = document.createElement(tagType);
			wrapper.classList.add("AdvallyInjectedWrapper");
									wrapper.setAttribute('style', "padding-bottom: 20px; margin-bottom: 20px; margin-top: 15px; border-bottom: 5px");
						
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});

		try {
		// LazyLoad
		advally.LazyLoader.setEnable(true);
				advally.LazyLoader.setMargin(150);
						advally.LazyLoader.setMobileScaling(1.50);
			} catch(error) {
		advally.error(error);
	}

		
		try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				! function(n) {
    if (!window.cnx) {
        window.cnx = {}, window.cnx.cmd = [];

        var t = n.createElement('iframe');
        t.src = 'javascript:false';
        t.display = 'none', t.onload = function() {
            var n = t.contentWindow.document,
                c = n.createElement('script');
            c.src = 'https://cd.connatix.com/connatix.player.js?cid=879315a5-3dba-4006-95be-ac35d3d8da1c', c.setAttribute('async', '1'), c.setAttribute('type', 'text/javascript'), n.body.appendChild(c)
        }, n.head.appendChild(t)
    }
}(document);
			}, 
			segment: "connatix-video-player-344"
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				advally = null;
			}, 
			segment: "break-all-ads-938"
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				googletag.pubads().setTargeting("env", "staging");

googletag.pubads().set("page_url", "www.baseballamerica.com" );
			}, 
			segment: "staging-site-966"
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				advally = null;
			}, 
			segment: "disable-ads-test-976"
		});
	}catch(error){
		advally.error(error);
	}

		try {
		// Enable Page view tracking
		advally.Tracking.config('enable', true);
	} catch(error) {
		advally.error(error);
	}

		
		// Load test module, otherwise Start!
		if (advally.getQueryParameter("AdvallyDemo")) {

			var TestId = advally.getQueryParameter("AdvallyDemo");
			advally.log('Loading Test Script: ' + TestId);

			// Prep the test script
			var TestScript = document.createElement("script");
			TestScript.type = "text/javascript";
			TestScript.src = "https://cdn.adligature.com/bsballamerica/dev/" + TestId + ".js";
			TestScript.id = "AdvallyTest-"+TestId;
			TestScript.onerror = function() {
				advally.cmd.push(function() {
					advally.log('Error loading test script - Starting Immediately.');
					advally.go();
				});
			}

			// Insert into head
			var DocHead = document.getElementsByTagName("head")[0];
			DocHead.insertBefore(TestScript, DocHead.firstChild)

		} else {
			advally.go();
		}

	});

}
