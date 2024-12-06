/*
  Advally JS Rules
  Updated 2024-10-10 16:24:32
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
		b.src = 'https://cdn.adligature.com/rules.js/advally-5.40.1.js';
		var c = document.getElementsByTagName("head")[0];
		c.insertBefore(b, c.firstChild);
		console.log('Advally Wrapper v5.40.1');
	})();

	
	advally.cmd.push(function() {

		// Core
		advally.setConfig({
			site: 'frommers',
			sellerId: 'P5S30',
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

		// Error Reporting default 
advally.ErrorReport.config('showReportButtons', false);

// Check if a parameter was set by the user 
let queryReportAds = advally.getQueryParameter("ReportAds");
if (queryReportAds === 'true' || queryReportAds === 'false') {
	// Update storage and set new config val 
	advally.storageSet('AdvallyShowReportButtons', queryReportAds);
	advally.ErrorReport.config('showReportButtons', queryReportAds==='true'?true:false );
} else {
	// Check if we have a stored value to fall back to 
	let userReportAds = advally.storageGet('AdvallyShowReportButtons');
	if (userReportAds !== null) {
		advally.ErrorReport.config('showReportButtons', userReportAds==='true'?true:false );
	}
}
		
		
		
		try {
		// Googletag
				advally.Googletag.load();
				advally.Googletag.config('singleRequestMode', false);
		advally.Googletag.config('collapseEmptyDivs', false); 
		advally.Units.setDefaultSlot('/64147298');
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
																																																															 

	} catch(error) {
		advally.error(error);
	}

		try {
		// Amazon
		advally.Amazon.config('pubId', '27a84c3a-c7e6-4fe6-a3f7-91fbb5dc67b6');
		advally.Amazon.config('passSchain', false);
		advally.Amazon.config('siteName', "Frommers" );
		advally.Amazon.config('siteDomain', "frommers.com" );
		advally.Amazon.load();
	} catch(error) {
		advally.error(error);
	}
		
		
		
		try {
		// Adhesion
		 
		advally.Adhesion.config('enableDesktop', true);
		advally.Adhesion.config('enableMobile', true);
		advally.Adhesion.config('marginThresholdMobile', 50);
		advally.Adhesion.config('marginThresholdDesktop', 25);
		advally.Adhesion.config('closeDuration', 2);
										advally.Adhesion.config('bgOpacity', 0.5);
												advally.Adhesion.config('mobile320x100', true);
		
						advally.Adhesion.config('companyIdHideContainer', 5219820367);
				
		
		
		advally.Adhesion.config('slotName', '/64147298/Frommers_Global_adhesion_728x90');
	} catch(error) {
		advally.error(error);
	}

		try {
		// Sidehesion
		 
		advally.Sidehesion.config('enableDesktop', true);
		advally.Sidehesion.config('marginThresholdDesktop', 25);
		advally.Sidehesion.config('closeDuration', 3);
		advally.Sidehesion.config('position_x', 'right');
		advally.Sidehesion.config('position_y', 'middle');
		advally.Sidehesion.config('minViewport', 1550);
		advally.Sidehesion.config('slotName', '/64147298/Frommers_Global_adhesion_160x600');
	} catch(error) {
		advally.error(error);
	}

		try {
		// TopAdhesion
		 
		advally.TopAdhesion.config('enableDesktop', false);
		advally.TopAdhesion.config('enableMobile', true);
		advally.TopAdhesion.config('marginThresholdMobile', 10);
		advally.TopAdhesion.config('marginThresholdDesktop', 10);
		advally.TopAdhesion.config('closeDuration', 2);
		advally.TopAdhesion.config('slotName', '/64147298/Top_Adhesion');
		advally.TopAdhesion.config('bgColor', "FFFFFF");
		advally.TopAdhesion.config('bgOpacity', 0.25);

	} catch(error) {
		advally.error(error);
	}
		
		try {
		advally.OOP.add({
			unit_id: "Interstitial",
			enableDesktop: true, 
			enableMobile: true, 
			segment: "search-and-social-1040", 
			type: "INTERSTITIAL", 
			slot: '/64147298/Frommers_Interstitial'
		});
	} catch(error) {
		advally.error(error);
	}

 		// Define any Sizemaps
		advally.Units.createSizemap("sizemap-inlineads-1068")
				.addSize(0, 0, [] )
				advally.Units.createSizemap("sizemap-lowergridboxnative-78")
				.addSize(0, 0, ["fluid"] )
				advally.Units.createSizemap("sizemap-mobilemotabmap-44")
				.addSize(0, 0, [[300,250]] )
				.addSize(768, 0, [] )
				
	// Define any Units
										
									advally.Units.prepareOverride('AdvAd-Inline1', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-1", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline1', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline1', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline10', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-10", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline10', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline10', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline11', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-11", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline11', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline11', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline12', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-12", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline12', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline12', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline13', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-13", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline13', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline13', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline14', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-14", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline14', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline14', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline15', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-15", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline15', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline15', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline2', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-2", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline2', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline2', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline3', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-3", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline3', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline3', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline4', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-4", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline4', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline4', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline5', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-5", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline5', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline5', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline6', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-6", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline6', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline6', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline7', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-7", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline7', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline7', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline8', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-8", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline8', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline8', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Inline9', 'slot', {
						value: "\/64147298\/Frommers_Inline_300x250-9", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Inline9', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Inline9', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Interstitial-OOP', 'slot', {
						value: "\/64147298\/Frommers_Interstitial", 
						valueMobile: null, 
						segment: false
					});
				
								
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow1', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-1", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow1', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow1', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow10', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-10", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow10', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow10', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow11', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-11", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow11', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow11', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow12', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-12", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow12', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow12', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow2', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-2", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow2', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow2', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow3', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-3", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow3', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow3', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow4', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-4", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow4', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow4', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow5', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-5", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow5', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow5', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow6', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-6", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow6', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow6', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow7', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-7", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow7', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow7', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow8', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-8", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow8', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow8', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('AdvAd-Slideshow9', 'slot', {
						value: "\/64147298\/frommers_slideshow_300x250-9", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('AdvAd-Slideshow9', 'autosize', {
							value: "728x250,728x90,300x250,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('AdvAd-Slideshow9', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('advally-adhesion-slot', 'slot', {
						value: "\/64147298\/Frommers_Global_adhesion_728x90", 
						valueMobile: null, 
						segment: false
					});
				
								
			
												
									advally.Units.prepareOverride('advally-sidehesion-slot', 'slot', {
						value: "\/64147298\/Frommers_Global_adhesion_160x600", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('advally-sidehesion-slot', 'size', {
							value: "160x600", 
							segment: false
						});
																
													
			
								 
				
				advally.Units.create('/64147298/Frommers_Global_LowerGridBox_300x250', [[300,250]], 'div-gpt-ad-1477975428086-4')
																	.setLazyLoadMargin(40)
				
			
								 
				
				advally.Units.create('/64147298/Frommers_Global_MobTabBox_300x250', [[300,250]], 'div-gpt-ad-1477975428086-6')
									.useSizemap("sizemap-mobilemotabmap-44")
												
			
								 
				
				advally.Units.create('/64147298/Frommers_Global_UpperBox_300x250', [[300,250]], 'div-gpt-ad-1477975428086-8')
												
			
																																													
									advally.Units.prepareOverride('FooterBlock', 'slot', {
						value: "\/64147298\/FooterBlock1", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('FooterBlock', 'size', {
							value: "300x250", 
							segment: false
						});
																
																			
											advally.Units.prepareOverride('FooterBlock', "lazyloadmargin", {
							value: 50, 
							segment: false
						});
													
			
																																										
				
															advally.Units.prepareOverride('Frommers_Slideshow_SB_160x600', 'autosize', {
							value: "300x600,160x600,120x600", 
							segment: false
						});
										
																									advally.Units.prepareOverride('Frommers_Slideshow_SB_160x600', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
				
								
			
												
				
								
			
												
									advally.Units.prepareOverride('HeaderAdDesktop', 'slot', {
						value: "\/64147298\/HeaderAdDesktop", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('HeaderAdDesktop', 'autosize', {
							value: "970x250,970x90,728x90,fluid", 
							segment: false
						});
										
																									advally.Units.prepareOverride('HeaderAdDesktop', 'multiple', {
							value: true, 
							segment: false
						});
					
													
			
												
									advally.Units.prepareOverride('HeaderAdMobile', 'slot', {
						value: "\/64147298\/HeaderAdMobile", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('HeaderAdMobile', 'size', {
							value: "320x50", 
							segment: false
						});
																
													
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
				
								
			
												
									advally.Units.prepareOverride('LeftSidebarAd1', 'slot', {
						value: "\/64147298\/LeftSidebarAd1", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('LeftSidebarAd1', 'size', {
							value: "160x600", 
							segment: false
						});
																
													
			
												
									advally.Units.prepareOverride('LowerGridBoxAd1', 'slot', {
						value: "\/64147298\/LowerGridBoxAd1", 
						valueMobile: null, 
						segment: false
					});
				
															advally.Units.prepareOverride('LowerGridBoxAd1', 'size', {
							value: "fluid", 
							segment: false
						});
												advally.Units.prepareOverride('LowerGridBoxAd1', 'sizemap', {
							value: "sizemap-lowergridboxnative-78", 
							segment: false
						});
																
													
			
												
									advally.Units.prepareOverride('RightSidebarAd1', 'slot', {
						value: "\/64147298\/RightSidebarAd1", 
						valueMobile: null, 
						segment: false
					});
				
								
			
						

		advally.PageLabel.add("destinations-page-526", "url_path", {"operation":"begins","match":"\/destinations"} );
	advally.PageLabel.add("device-category-12", "device_category", [] );
	advally.PageLabel.add("geography-country-635", "geo_country", [] );
	advally.PageLabel.add("referer-type-665", "referer_type", [] );
	advally.PageLabel.add("v1-article-276", "query_selector_find", {"selector":".article-container .article-body"} );
	advally.PageLabel.add("v2-article-275", "query_selector_find", {"selector":".v2-article-main .v2-article-body"} );

	advally.SiteSegment.add("is-desktop-21", "and", {
					"device-category-12": ["desktop"], 
				
	});
	advally.SiteSegment.add("is-mobile-22", "and", {
					"device-category-12": ["mobile"], 
				
	});
	advally.SiteSegment.add("minute-media-bidder-1005", "and", {
					"geography-country-635": ["US","CA"], 
				
	});
	advally.SiteSegment.add("right-side-css-correction-864", "and", {
					"destinations-page-526": true, 
				
	});
	advally.SiteSegment.add("search-and-social-1040", "and", {
					"device-category-12": ["mobile","desktop"], 
					"referer-type-665": ["search","social"], 
				
	});
	advally.SiteSegment.add("v1-articles-inline-915", "and", {
					"v1-article-276": true, 
				
	});
	advally.SiteSegment.add("v2-articles-inline-913", "and", {
				
	});

		try {
		advally.SmartRefresh.enable(true);
		advally.SmartRefresh.config('interval', 30);
													} catch(error) {
		advally.error(error);
	}

				
		
		// Setup Bidders
		advally.Bidders.set({
    "rubicon": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "accountId": "10615",
                "siteId": "23633",
                "zoneId": "1154546"
            },
            "segment": null
        }
    ],
    "gumgum": [
        {
            "size": [
                "728x90"
            ],
            "reusable": true,
            "params": {
                "zone": "t8uuvjfz"
            },
            "segment": "is-desktop-21",
            "unit": "advally-adhesion-slot"
        },
        {
            "size": [
                "320x50"
            ],
            "reusable": true,
            "params": {
                "zone": "t8uuvjfz"
            },
            "segment": "is-mobile-22",
            "unit": "advally-adhesion-slot"
        }
    ],
    "triplelift": [
        {
            "size": null,
            "reusable": false,
            "params": {
                "inventoryCode": "Frommers_Inline_Banner"
            },
            "segment": null,
            "unit": "inline-slideshow-3"
        },
        {
            "size": null,
            "reusable": false,
            "params": {
                "inventoryCode": "Frommers_Inline_Banner"
            },
            "segment": null,
            "unit": "inline-slideshow-2"
        },
        {
            "size": null,
            "reusable": false,
            "params": {
                "inventoryCode": "Frommers_Inline_Banner"
            },
            "segment": null,
            "unit": "inline-slideshow-1"
        },
        {
            "size": null,
            "reusable": false,
            "params": {
                "inventoryCode": "Frommers_ROS_HDX_"
            },
            "segment": null
        }
    ],
    "appnexus": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "placementId": "14334929"
            },
            "segment": null
        }
    ],
    "teads": [
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": {
                "pageId": 105927,
                "placementId": 114802
            },
            "segment": null
        }
    ],
    "nativo": [
        {
            "size": [
                "300x600"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167933
            },
            "segment": "is-desktop-21"
        },
        {
            "size": [
                "300x600"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167934
            },
            "segment": "is-mobile-22"
        },
        {
            "size": [
                "970x250"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167931
            },
            "segment": "is-desktop-21"
        },
        {
            "size": [
                "728x90"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167935
            },
            "segment": "is-desktop-21"
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167938
            },
            "segment": "is-mobile-22"
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167932
            },
            "segment": "is-desktop-21"
        },
        {
            "size": [
                "320x50"
            ],
            "reusable": true,
            "params": {
                "placementId": 1167935
            },
            "segment": "is-mobile-22"
        }
    ],
    "amx": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "tagId": "YWR2YWxseS1yb24uY29t"
            },
            "segment": null
        }
    ],
    "ix": [
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319377",
                    "size": [
                        300,
                        250
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319378",
                    "size": [
                        300,
                        250
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319379",
                    "size": [
                        300,
                        250
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "160x600"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319380",
                    "size": [
                        160,
                        600
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319381",
                    "size": [
                        300,
                        250
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319376",
                    "size": [
                        300,
                        250
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "320x50"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319375",
                    "size": [
                        320,
                        50
                    ]
                }
            ],
            "segment": null
        },
        {
            "size": [
                "728x90",
                "970x90",
                "970x250"
            ],
            "reusable": false,
            "params": [
                {
                    "siteId": "319374",
                    "size": [
                        728,
                        90
                    ]
                },
                {
                    "siteId": "319374",
                    "size": [
                        970,
                        90
                    ]
                },
                {
                    "siteId": "319374",
                    "size": [
                        970,
                        250
                    ]
                }
            ],
            "segment": null
        }
    ],
    "nobid": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "siteId": 22098918860
            },
            "segment": null
        }
    ],
    "sharethrough": [
        {
            "size": [
                "320x50"
            ],
            "reusable": true,
            "params": {
                "pkey": "CLbWn936STq8X1IEZIxGGBRJ"
            },
            "segment": null
        },
        {
            "size": [
                "320x100"
            ],
            "reusable": true,
            "params": {
                "pkey": "SWNNVxeSJwjL6wdPE2pZWPIG"
            },
            "segment": null
        },
        {
            "size": [
                "300x250"
            ],
            "reusable": true,
            "params": {
                "pkey": "N8G0Drdz5orlyDqpNsEHGLKj"
            },
            "segment": null
        },
        {
            "size": [
                "728x90"
            ],
            "reusable": true,
            "params": {
                "pkey": "1kNhzzNeh2kUWRGus8iptbED"
            },
            "segment": null
        },
        {
            "size": [
                "970x250"
            ],
            "reusable": true,
            "params": {
                "pkey": "BINNkb5jO5SW2F6EEWKBInq3"
            },
            "segment": null
        },
        {
            "size": [
                "970x90"
            ],
            "reusable": true,
            "params": {
                "pkey": "SuUlvCReh43BxezwIWjaLvB1"
            },
            "segment": null
        },
        {
            "size": [
                "160x600"
            ],
            "reusable": true,
            "params": {
                "pkey": "4zUjRDtUtPtKUGGzstpwnNE4"
            },
            "segment": null
        },
        {
            "size": [
                "300x600"
            ],
            "reusable": true,
            "params": {
                "pkey": "GZUcvP2nImT0RPyRilIqtEhM"
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
                "crid": 801228848
            },
            "segment": "is-mobile-22"
        },
        {
            "size": null,
            "reusable": true,
            "params": {
                "cid": "8CU658616",
                "crid": 801228848
            },
            "segment": "is-desktop-21"
        }
    ],
    "smilewanted": [
        {
            "size": null,
            "reusable": true,
            "params": {
                "zoneId": "advally.com_hb_display"
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
                "placementId": "frommers.com"
            },
            "segment": "minute-media-bidder-1005"
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

				advally.Page.inject('.articles-listing-container', '3', 
		 		{
 
					html: "<script id=\"80834517eae443d6b3d871a305ca74b0\"><\/script>", 
					script_block: "(new Image()).src = 'https:\/\/capi.connatix.com\/tr\/si?token=d77a5721-8b13-41ee-a9d5-60248fe41373&cid=8f2a048f-a927-485e-be22-0af7a4841276';\r\ncnx.cmd.push(function() {\r\n    cnx({\r\n        playerId: \"d77a5721-8b13-41ee-a9d5-60248fe41373\"\r\n    }).render(\"80834517eae443d6b3d871a305ca74b0\");\r\n});", 
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

				advally.Page.inject('.slideshow-listicle.article-container', '-3', 
		 		{
 
					html: "<script id=\"80834517eae443d6b3d871a305ca74b0\"><\/script>", 
					script_block: "(new Image()).src = 'https:\/\/capi.connatix.com\/tr\/si?token=d77a5721-8b13-41ee-a9d5-60248fe41373&cid=8f2a048f-a927-485e-be22-0af7a4841276';\r\ncnx.cmd.push(function() {\r\n    cnx({\r\n        playerId: \"d77a5721-8b13-41ee-a9d5-60248fe41373\"\r\n    }).render(\"80834517eae443d6b3d871a305ca74b0\");\r\n});", 
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

				advally.Page.inject('.v2-main-article-container', 'last', 
		 		{
 
					html: "<script id=\"80834517eae443d6b3d871a305ca74b0\"><\/script>", 
					script_block: "(new Image()).src = 'https:\/\/capi.connatix.com\/tr\/si?token=d77a5721-8b13-41ee-a9d5-60248fe41373&cid=8f2a048f-a927-485e-be22-0af7a4841276';\r\ncnx.cmd.push(function() {\r\n    cnx({\r\n        playerId: \"d77a5721-8b13-41ee-a9d5-60248fe41373\"\r\n    }).render(\"80834517eae443d6b3d871a305ca74b0\");\r\n});", 
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

				advally.Page.inject('#bodycontent', 'before', 
		 		{
 
					script_url: "\/\/tag.wknd.ai\/4929\/i.js", 
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

				advally.Page.inject('#slideshows', 'before', 
		 		{
 
					html: "<div class=\"OUTBRAIN\" data-src=\"DROP_PERMALINK_HERE\" data-widget-id=\"GS_1\"><\/div>", 
					script_url: "https:\/\/widgets.outbrain.com\/ob-gam\/ob-gam.js", 
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

				advally.Page.inject('.v2-main-article-container', 'last', 
		 		{
 
					html: "<div class=\"OUTBRAIN\" data-src=\"DROP_PERMALINK_HERE\" data-widget-id=\"GS_1\"><\/div>", 
					script_url: "https:\/\/widgets.outbrain.com\/ob-gam\/ob-gam.js", 
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

				advally.Page.inject('.slideshow-page', '2', 
		 		{
 
					html: "<script id=\"80834517eae443d6b3d871a305ca74b0\"><\/script>", 
					script_block: "(new Image()).src = 'https:\/\/capi.connatix.com\/tr\/si?token=d77a5721-8b13-41ee-a9d5-60248fe41373&cid=8f2a048f-a927-485e-be22-0af7a4841276';\r\ncnx.cmd.push(function() {\r\n    cnx({\r\n        playerId: \"d77a5721-8b13-41ee-a9d5-60248fe41373\"\r\n    }).render(\"80834517eae443d6b3d871a305ca74b0\");\r\n});", 
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

				advally.Page.inject('.left-sidebar', 'last', 
		 		{
 
					html: "<did class=\"AdvallyTag\" id=\"LeftSidebarAd1\" style=\"text-align: center; margin: 10px auto;\"><\/div>", 
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

				advally.Page.inject('.v2-article-body', 'before', 
		 		{
 
					html: "<div class=\"a2a_kit a2a_kit_size_32 a2a_default_style\" style=\"margin-top: 30px; \">     <a class=\"a2a_button_facebook\"><\/a>     <a class=\"a2a_button_twitter\"><\/a>     <a class=\"a2a_button_flipboard\"><\/a>     <a class=\"a2a_button_email\"><\/a>   <a class=\"a2a_dd\"><\/a> <\/div>", 
					script_url: "https:\/\/static.addtoany.com\/menu\/page.js", 
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

				advally.Page.inject('.v2-article-body', 'last', 
		 		{
 
					html: "<div class=\"a2a_kit a2a_kit_size_32 a2a_default_style\" style=\"margin-top: 30px; \">     <a class=\"a2a_button_facebook\"><\/a>     <a class=\"a2a_button_twitter\"><\/a>     <a class=\"a2a_button_flipboard\"><\/a>    <a class=\"a2a_button_email\"><\/a>    <a class=\"a2a_dd\"><\/a> <\/div>", 
					script_url: "https:\/\/static.addtoany.com\/menu\/page.js", 
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

				advally.Page.inject('.v2-article-body', 'before', 
		 		{
 
					html: "<div class=\"a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style\" style=\"left:0px; top:150px;\">    <a class=\"a2a_button_facebook\"><\/a>     <a class=\"a2a_button_twitter\"><\/a>     <a class=\"a2a_button_flipboard\"><\/a>      <a class=\"a2a_button_email\"><\/a>     <a class=\"a2a_dd\"><\/a> <\/div>", 
					script_url: "https:\/\/static.addtoany.com\/menu\/page.js", 
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

				advally.Page.inject('.v2-article-body', 'after', 
		 		{
 
					script_block: "var a2a_config = a2a_config || {};\r\na2a_config.overlays = a2a_config.overlays || [];\r\na2a_config.overlays.push({\r\n    services: ['pinterest', 'tumblr', 'addtoany'],\r\n    showOn: 'visible',\r\n});", 
				});
				
			} catch(error) {
				advally.error(error);
			}
		}
	};
	
	// Execute injector when desired
	 
		newInjector(advally)();
	})(advally);
	

		advally.ContentInjector.add({
		 
		name: "NEW In Feed Ads",
		frequency: {
			mobile: 2,
			desktop: 3
		},
		enable: {
			mobile: true,
			desktop: true
		},
		container: ".v2-feed", 
		selector: ".v2-feed-item",
		weightWord: 0,
		weightSelector: 1,
		startReduction: 1,
		minEndWords: 0,
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-1';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-2';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-3';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-4';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-5';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-6';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-7';
																
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
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-8';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex8");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-9';
																
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex9");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '728x90,300x250';
																		newunit.dataset.slot = '/64147298/Frommers_Inline_300x250-10';
																
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
						wrapper.classList.add("v2-feed-ad");
									
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});
	advally.ContentInjector.add({
		 
		name: "NEW In-Slideshows (Blocks)",
		frequency: {
			mobile: 1,
			desktop: 1
		},
		enable: {
			mobile: true,
			desktop: true
		},
		container: ".slideshow-container", 
		selector: ".listicle-slide-content",
		weightWord: 0,
		weightSelector: 1,
		startReduction: 0,
		minEndWords: 0,
		creatives: [

					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex0");

				// Setup slot type and attributes 
										var script = document.createElement("script");
						script.type = "text/javascript";
												script.src = "https://live.primis.tech/live/liveView.php?s=115647&amp;schain=1.0,1!advally.com,6e679b2e-2a59-4012-b6a5-393fa63dcce4,1";
																		newunit.appendChild(script);
										
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow1";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow2";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow3";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow4";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow5";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow6";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow7";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex8");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow8";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex9");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow9";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex10");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow10";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex11");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow11";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex12");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Slideshow12";
																						
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
									wrapper.setAttribute('style', "padding-bottom: 20px; width: 100%; text-align: center; margin: 0px auto;");
						
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div style=\"font-family: montserrat, sans-serif; color: #999999; text-align: center; font-size: 12px; font-size: 1.2rem; padding-top: 3px;\">Advertisement<\/div><div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});
	advally.ContentInjector.add({
		 
		name: "V1 Articles Inline",
		frequency: {
			mobile: 150,
			desktop: 1
		},
		enable: {
			mobile: true,
			desktop: true
		},
		container: ".article-body", 
		selector: ".inarticle-ad-placeholder",
		weightWord: 0,
		weightSelector: 1,
		startReduction: 0,
		minEndWords: 0,
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline1";
																						
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
										var script = document.createElement("script");
						script.type = "text/javascript";
												script.src = "https://live.primis.tech/live/liveView.php?s=115647&amp;schain=1.0,1!advally.com,6e679b2e-2a59-4012-b6a5-393fa63dcce4,1";
																		newunit.appendChild(script);
										
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline2";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline3";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline4";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline5";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline6";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline7";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex8");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline8";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex9");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline9";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex10");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline10";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex11");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline11";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex12");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline12";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex13");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline13";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex14");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline14";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex15");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline15";
																						
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
									wrapper.setAttribute('style', "padding-bottom: 32px; width: 100%; text-align: center; margin: 0px auto;");
						
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div style=\"font-family: montserrat, sans-serif; color: #999999; text-align: center; font-size: 12px; font-size: 1.2rem; padding-top: 3px;\">Advertisement<\/div><div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});
	advally.ContentInjector.add({
		 
		name: "V2 Articles Inline",
		frequency: {
			mobile: 150,
			desktop: 200
		},
		enable: {
			mobile: true,
			desktop: true
		},
		container: ".v2-article-body", 
		selector: "p",
		weightWord: 1,
		weightSelector: 50,
		startReduction: 50,
		minEndWords: 25,
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline1";
																						
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
										var script = document.createElement("script");
						script.type = "text/javascript";
												script.src = "https://live.primis.tech/live/liveView.php?s=115647&amp;schain=1.0,1!advally.com,6e679b2e-2a59-4012-b6a5-393fa63dcce4,1";
																		newunit.appendChild(script);
										
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline2";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline3";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline4";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline5";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline6";
																						
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
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline7";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex8");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline8";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex9");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline9";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex10");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline10";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex11");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline11";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex12");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline12";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex13");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline13";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex14");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline14";
																						
				// Append the new unit to the injected container 
				container.parentElement.replaceChild( self.wrapCreative(newunit, container.tagName.toLowerCase() ), container );
			}, 
		
					
			// Add handler for next injected ad 
			// Self is a reference to the config object passed to advally.Page.newContentInjector()
			function(container,self){
				
				// Prepare the new unit to write 
				var newunit = self.newUnit();
				newunit.classList.add("AdvallyContentIndex15");

				// Setup slot type and attributes 
										newunit.classList.add("AdvallyTag");
						newunit.classList.add("AdvallyContentSizeAuto");
						newunit.dataset.autosize = '';
												newunit.id = "AdvAd-Inline15";
																						
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
									wrapper.setAttribute('style', "padding-bottom: 32px; width: 100%; text-align: center; margin: 0px auto;");
						
			// Append wrapped HTML with placement indicator
			wrapper.insertAdjacentHTML( 'beforeend', "<div style=\"font-family: montserrat, sans-serif; color: #999999; text-align: center; font-size: 12px; font-size: 1.2rem; padding-top: 3px;\">Advertisement<\/div><div id=x><\/div>");
			wrapper.querySelector('#x').parentElement.replaceChild(newunit, wrapper.querySelector('#x') );
			
			return wrapper;					
		}
	
	});

		try {
		// LazyLoad
		advally.LazyLoader.setEnable(true);
				advally.LazyLoader.setMargin(200);
						advally.LazyLoader.setMobileScaling(1.50);
			} catch(error) {
		advally.error(error);
	}

		try {
		advally.CustomStyle.queue({
			css: ".ad div, .advert div div {    display: block;}", 
			segment: false
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomStyle.queue({
			css: "@media screen and (max-width: 1020px) {    .a2a_floating_style.a2a_vertical_style { display: none; }}", 
			segment: false
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomStyle.queue({
			css: "@media only screen and (max-width: 500px) {  .page-module .row.desc .inline-ad-right {    float: none;    display: block;  }}", 
			segment: "right-side-css-correction-864"
		});
	}catch(error){
		advally.error(error);
	}

		try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				// Custom Key/Value targeting
if (window.top.location.pathname.indexOf('/destinations/') != -1) {
	googletag.pubads().setTargeting("frommers_kw", "destinations");
}
if (window.top.location.pathname.indexOf('/slideshows/') != -1) {
	googletag.pubads().setTargeting("frommers_kw", "slideshows");
}

// Staging site tag
if (window.location.hostname == 'frommers.stage.tablexi.com') {
	advally.Page.setTargeting("stage", "true");
}
			}, 
			segment: false
		});
	}catch(error){
		advally.error(error);
	}
	try {
		advally.CustomScript.queue({
			type: 'go', 
			cmd: function() {
				const onRenderListenerVuukle = (event) => {
	// Get the Slot ID
	let slotElementId = event.slot.getSlotElementId();  
	console.log('slot ' + slotElementId + ' rendered', event);

	// If the slot is empty 
	if (event.isEmpty) {
	
		let slotSizes = advally.Googletag.getSlotSizesStr( event.slot );
		console.log('Slot returned empty for sizes ' + slotElementId, slotSizes);

		if (['article-inline-1','article-inline-2','article-inline-3','inline-slideshow-1','inline-slideshow-2','inline-slideshow-3'].indexOf(slotElementId) > -1) {
			if (slotSizes && (slotSizes.indexOf('300x600') > -1 || slotSizes.indexOf('970x250') > -1 || slotSizes.indexOf('300x250') > -1)) {
				console.log('WRITING VUUKLE TO #' + slotElementId);

				// Remove ourselves as event listener 
				googletag.pubads().removeEventListener("slotRenderEnded", onRenderListenerVuukle);

				// Unregister Advally unit 
				advally.removeUnit(slotElementId);

				// Find the target location 
				let target = document.getElementById(slotElementId);
				target.style.height='auto';
				target.style.maxHeight='none';
		
				// Append the Vuukle container 
				let div = document.createElement('div');
				div.id = 'Vuukle-Unfilled-Override';
				div.innerHTML = '<div style="display: flex; flex-wrap: wrap; justify-content: center; background-color: rgb(243, 243, 243);"><div id="vuukle-quiz"></div><div id="vuukle-ad-3"></div></div>';
				target.appendChild(div);

				// Start Vuukle
				fetch('https://cdn.vuukle.com/networks/f3403c94-4f01-449c-a865-121ce0fb5a96.json')
					.then((res) => res.json())
					.then((res) => {
					window.VUUKLE_CONFIG = {
						apiKey: res[window.location.hostname]
					}
					const platformScript = document.createElement('script');
					platformScript.src = 'https://cdn.vuukle.com/platform.js';
					platformScript.async = true;
					document.head.appendChild(platformScript);
					})
			
			}
		}

	}

}

googletag.pubads().addEventListener('slotRenderEnded', onRenderListenerVuukle);
			}, 
			segment: false
		});
	}catch(error){
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
            c.src = '//cd.connatix.com/connatix.player.js?cid=8f2a048f-a927-485e-be22-0af7a4841276?pid=d77a5721-8b13-41ee-a9d5-60248fe41373', c.setAttribute('async', '1'), c.setAttribute('type', 'text/javascript'), n.body.appendChild(c)
        }, n.head.appendChild(t)
    }
}(document);
			}, 
			segment: false
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
			TestScript.src = "https://cdn.adligature.com/frommers/dev/" + TestId + ".js";
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