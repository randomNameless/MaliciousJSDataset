// Doubleclick CMD queue
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

// Prebid CMD queue
var advpbjs = advpbjs || {};
advpbjs.que = advpbjs.que || [];

// Advally Script
var advally = advally || {};
advally.cmd = advally.cmd || [];
advally.state = advally.state || {};

// Advally Wrapper
(function() {

	/////////////////////////////////////
	//
	// Only load this script once and set some defaults 
	//
	/////////////////////////////////////
	if (this.state.started === undefined) {
		this.state.started = false;
		this.state.adsLoaded = false;
		this.state.site = 'Unknown';
		this.state.sellerId = 'P0S0';
		this.state.env = 'dev';
//		this.state.compatabilityMode = false;
		this.state.debug = true;		
	} else {
		console.warn('Avally Wrapper loaded twice');
		return;
	}


	/////////////////////////////////////
	//
	// STATUS FLAGS
	//
	/////////////////////////////////////

	// Flag to indicate this device is mobile
	this.isMobile = (function() {
		return (
			!!navigator.userAgent.match(/Mobi/) ||
			!!navigator.userAgent.match(/Android/)
			)
	})();
	// Otherwise its desktop
	this.isDesktop=!this.isMobile;


	/////////////////////////////////////
	//
	// PUBLISHER FUNCTIONS
	//
	/////////////////////////////////////
	
	//
	// fn: Dynamically create and show a new unit
	//
	this.display = function( div, size ) {

		// Find the new tag to setup
		var tag = document.getElementById( div );

		// Tag exists, add to Units system
		if (tag) {

			this.log('Display(): Creating new unit "' + div );

			// Set the size
			tag.dataset.size = size;

			// Create the unit
			var unit = advally.Units.newTag( tag );
			
			// Load the unit after checking Consent
			if (unit) {
				this._displayCB(advally,googletag,advpbjs,[unit]);
			}
		}
	}
	
	//
	// fn: Find any new Dynamic units and load them
	//
	this.scanNew = function() {
		
		// Don't scan for new units if setup isn't ready 
		if (!this.Units.firstScanComplete()) {
			return false;
		}
		
		this.log('Scanning for new units');

		// Find Tags that are defined on page
		var newTags = document.querySelectorAll('.AdvallyTag:not(.scanned)');
		var newUnits = [];

		// Loop each new tag 
		for (var i=0; i<newTags.length; i++) {

			// Ignore units not currently visible 
			if (this.isVisible(newTags[i])) {

				// Create the unit
				var unit = this.Units.newTag(newTags[i]);

				// Add to list of units to refresh
				if (unit) {
					newUnits.push( unit );
				}
			}
			
		}
		
		if (newUnits.length > 0) {
			this._displayCB(advally,googletag,advpbjs,newUnits);
		}
	}


	//
	// fn: Shortcut to Units refresh method 
	//
	this.refresh = function(unitIds) {
		return this.Units.refresh(unitIds);
	}
	

	//
	// fn: Remove an Ad Unit 
	// 
	this.removeUnit = function(unitId) {

		let advSlot = this.Units.getUnitById(unitId);

		// Check if unit ID exists 
		if (advSlot) {

			// googletag destroySlot with ref
			if (advSlot.dfpRef) {
				this.Googletag.destroySlots([advSlot.dfpRef]);
			}
			
			// Prebid destroy slot with id 
			this.Prebid.removeAdUnits(unitId);
		
			// Remove from Units list 
			this.Units.destroy(unitId);

			// Remove the ID contents from the page 
			let domEle = document.getElementById(unitId);
			if (domEle) {
				domEle.innerHTML = '';
				domEle.classList.remove('scanned');
			}

			this.log('Removing unit ' + unitId);
		}

		return this;
	}

	//
	// fn: Trigger a Page View recording 
	// 
	this.logPageview = function() {
		this.Tracking.logPageview();
	}

	// fn: Sets basic settings for this site and ruleset 
	this.set = function(key, val) {
		switch (key) {
			case 'email': 
				this.FPD.setEmail(val);
				break;
		}
	}


	/////////////////////////////////////
	//
	// INTERNAL & SETUP FUNCTIONS
	//
	/////////////////////////////////////

	// fn: Sets basic settings for this site and ruleset 
	this.setConfig = function(settings) {
		
		let callback = function(advally) {
			return function(key){
				
				// Extract the value
				let value = settings[key];
				
				// Process each key
				switch (key) {
					// Strings 
					case 'site': 
					case 'sellerId':
					case 'env': 
						advally.state[key] = value;
						break;
					// Values that must be boolean 
//					case 'compatabilityMode': 
					case 'debug':
						advally.state[key] = (value) ? true : false;
						break;
				}
			}
		}
		
		// Loop through the given settings 
		Object.keys(settings).forEach( callback(this) );
	}
	
	// fn: Get the body element 
	this.getBody = function() {
		return document.body || document.getElementsByTagName('body')[0];
	}
	
	// fn: Checks visibility on element 
	this.isVisible = function(ele) {
		// If fn doesn't exist, assume it's visible 
		return (typeof ele.checkVisibility == 'function') 
			? ele.checkVisibility()
			: true;
	}

	// fn: Comma String to Array
	// Input:   300x250,300x600,728x90,fluid
	// Output:  [ [300,250], [300,600], [728,90] ] 
	this.comaStrToArr = function(str) {
		var sizeArr = [];
		var sizes = str.toLowerCase().split(',');
		for (var i=0; i<sizes.length; i++) {
			// Reference this single size 
			let size = sizes[i];
			// If this size is the format WxH then add it as a numeric array 
			// Otherwise keep the string name
            if ( /^[0-9]+x[0-9]+$/.test(size) ) {
                var dimensions = size.split('x');
                sizeArr.push([parseInt(dimensions[0]), parseInt(dimensions[1])]);
            } else {
                sizeArr.push(size);
            }
		}
		return sizeArr;
	}
	
	// fn: Array of sizes to Comma String
	// Input:  [ [300,250], [300,600] ]
	// Output:   300x250,300x600
	this.arrToComaStr = function(arr) {
		var sizes = [];
		for (var i=0; i<arr.length; i++) {
			if (arr[i] == 'fluid') {
				var dimensions = arr[i];
			} else {
				var dimensions = arr[i].join('x');
			}
			sizes.push(dimensions);
		}
		return sizes.join(',');
	}
	
	// fn: Merge Targeting 
	// Input: "key1=val1" | "" | null 
	// Output: "key1=val1&key2=val2" | "" | null 
	this.queryStrAppend = function(base, toAppend) {
		// We only append targeting, not really override
		if (base)
			return base + '&' + toAppend;
		else
			return toAppend;
	}

	// fn: Write Style to page 
	// Input: CSS Text 
	this.appendCSS = function(text) {
		var head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');
			style.type = 'text/css';
		if (style.styleSheet){
			// This is required for IE8 and below.
			style.styleSheet.cssText = text;
		} else {
			style.appendChild(document.createTextNode( text ));
		}
		head.appendChild(style);
		return style; 
	}

	// fn: Write Script URL to page 
	// Input: JS URL 
	this.appendScriptURL = function(url) {
		let head = document.head || document.getElementsByTagName('head')[0], 
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;
		head.appendChild(script);
		return script; 
	}
	
	// fn: Console log
	this.log = function() {
		if (this.state.debug === false) {
			// No debug
		} else {
			console.log.apply(console, this._prepLogs(arguments));
		}
	}
	this.warn = function() {
		console.warn.apply(console, this._prepLogs(arguments));
	}
	this.error = function() {
		console.error.apply(console, this._prepLogs(arguments));
	}
	/* IE11 doesn't support Array.from()
	let args = Array.from(arguments); 
	args.unshift('Advally');
	*/
	this._prepLogs = function(args) {
		let result = ['%cAdvally', 'display: inline-block; color: #fff; background: #7E4296; padding: 1px 4px; border-radius: 3px;'];
		for (let i=0; i<args.length; i++) {
			result.push(args[i]);
		}
		return result;
	}
	
	// fn: Browser width
	this.windowWidth = function() {
		return window.innerWidth && document.documentElement.clientWidth ?
			Math.min(window.innerWidth, document.documentElement.clientWidth) :
			window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
	}

	// fn: Browser height
	this.windowHeight = function() {
		return window.innerHeight && document.documentElement.clientHeight ?
			Math.min(window.innerHeight, document.documentElement.clientHeight) :
			window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
	}
	
	// fn: Document height 
	this.documentHeight = function() {
		let body = document.body,
	    	html = document.documentElement;
		return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	}
	
	// fn: Save to local storage 
	this.storageSet = function(key, val) {
	    try {
	        let storage = window.sessionStorage; 
	        storage.setItem(key, val);
	        return true;
	    }
	    catch(e) {
	        return false;
	    }
	}
	
	// fn: Retreive from local storage
	this.storageGet = function(key) {
		try {
	        let storage = window.sessionStorage; 
	        return storage.getItem(key);
	    }
	    catch(e) {
	        return null;
	    }
	}
	
	// fn: find if a parameter exists in the query string (search)
	this.getQueryParameter = function(key) {
		// If we have a search string
		if (window.location.search.length > 1) {
			var query = window.location.search.substring(1).split('&');
			for (var i = 0; i < query.length; i++) {
				var pair = query[i].split('=');
				if (pair[0] == key) {
					return decodeURI(pair[1]);
				}
			}
		}
		return null;
	}

	// fn: get a Configuration setting.  Defaults are set at top
	this.getConfig = function(key) {
		return this.state[key]; 
	}
	
	// fn: Check if script has started/built all units & features
	this.started = function() {
		return this.state.started===true;
	}

	// fn: Returns if ads have been adsLoaded
	this.adsLoaded = function() {
		return this.state.adsLoaded===true;
	}
	this.setAdsLoaded = function(loaded) {
		this.state.adsLoaded=loaded;
	}

	// fn: Returns a CookieManager for external use
	this.cookieHelper = function(name, duration) {
		return new CookieManager(name,duration);
	}
	
	//
	// fn: Start Advertising System
	//
	this.go = function() {
		this.log('GO');

		// Trigger Building until after DOM is loaded
		if (document.readyState === "loading") {
			this.log('DOMContentLoaded pending...');
			var advallyBuild = function(advally,googletag,advpbjs) {
				return function() {
					advally.log('DOMContentLoaded DONE!');
					advally._waitForPageStyles(advally,googletag,advpbjs)
				}
			};
			document.addEventListener("DOMContentLoaded", advallyBuild(this,googletag,advpbjs) );
		} else {
			this.log('DOMContentLoaded already happened.');
			advally._waitForPageStyles(this,googletag,advpbjs)
		}
	}
	
	//
	// fn: Has CMP
	//
	this.hasCMP = function() {
		let curFrame = window;
		let found = !1;
		do {
			try {
				if ("function" == typeof curFrame.__tcfapi) {
					found = !0;
					break;
				}
			} catch (e){}
			try {
				if (curFrame.frames.__tcfapiLocator) {
					found = !0;
					break;
				}
			} catch (e){}
			if (curFrame === window.top)
				break;
			curFrame = curFrame.parent;
		} while (!found);
		return found;
	}

	//
	// fn:
	//   DOMContentLoaded:  https://javascript.info/onload-ondomcontentloaded#domcontentloaded
	//   ^^ Is called when the page DOM is built.  Our script relies on checking element dimensions.
	//   It's possible for our script to execute after the DOM is built, but before the styles have been applied.
	//   We don't want to wait for onLoad() because that waits for ALL images and resources to load.
	//   We need some of the DOM to be built so we can determine unit dimensions.
	//   This function waits until we have signs the DOM has begun to render before we trigger _build
	//
	this._waitForPageStyles = function(advally,googletag,advpbjs) {
		
		var checkPageReady = function(advally,googletag,advpbjs) {
			return function() {
				if (document.body.offsetWidth == 0) {
					advally.log('Page DOM is NOT ready!');
					if (advally.state.DOMCheckCount++ < 50) {
						return false;
					} else {
						advally.log('Page DOM took too long. Giving up :(');
					}
				} else {
					advally.log('Page DOM is ready!');
				}

				// Start loading ads
				clearInterval(advally.state.DOMCheckInt);
				advally.state.DOMCheckInt = null;
				advally._build(advally,googletag,advpbjs);
			}
		}
		advally.state.DOMCheckCount = 0;
		advally.state.DOMCheckInt = setInterval(checkPageReady(advally,googletag,advpbjs), 25);
	}


	//
	// fn:
	//   - Build every module
	//   - Scan page for AdvallyTags
	//   - Load bidders 
	//   - Trigger first ad load 
	//
	this._build = function(advally,googletag,advpbjs) {
		advally.log('advally._build(): Stage 1 Executing');
	
		// Flag build has started
		advally.state.started = true;
		
		// When IP Lookup data is ready, we can continue 
		let Juggler = new PrereqLoader(advally);
		advally.IPLookup.onReady( Juggler.waitFor('iplookup') );
		Juggler.onReady( advally._buildStage2(advally,googletag,advpbjs), 1500 );
	}
	this._buildStage2 = function(advally,googletag,advpbjs) {
		return function() {
			advally.log('advally._build(): Stage 2 Executing');
			
			// Get consent type 
			let consentType = advally.Consent.getConsentRequired( advally.IPLookup.get() );
			
			// Configure ConsentManagement for bid systems
			advally.log('Consent framework required: ' + consentType);
			advally.Prebid.config('consentType', consentType);
			advally.Amazon.config('consentType', consentType);
			
			// Page Labeling is used for future modules 
			advally.PageLabel.build();

			// Write custom CSS
			advally.CustomStyle.build();

			// Continue when Prebid & Googletag are loaded
			let Juggler = new PrereqLoader(advally);
			if (advally.state.prebid.loaded){
				advpbjs.que.push( Juggler.waitFor('advpbjs') );
			}
			googletag.cmd.push( Juggler.waitFor('googletag') );
			Juggler.onReady( advally._buildStage3(advally,googletag,advpbjs), 3000 );
		}
	}	
	this._buildStage3 = function(advally,googletag,advpbjs) {
		return function() {
			advally.log('advally._build(): Stage 3 Executing');
			
			let Juggler = new PrereqLoader(advally);

			// Get consent from CMP before continuing 
			if (advally.hasCMP()){
				advally.Consent.onConsentReceived( Juggler.waitFor('cmpconsent') );
			}
		
			// When IP Lookup data is ready, we can continue 
			Juggler.onReady( advally._buildStage4(advally,googletag,advpbjs), 500 );
		}
	}
	this._buildStage4 = function(advally,googletag,advpbjs) {
		return function() {
			advally.log('advally._build(): Stage 4 Executing');

			// Setup google settings, if any 
			advally.Googletag.build();
			
			// Configure Prebid 
			advally.Prebid.build();
			
			// Prepares Amazon bidder, if set
			advally.Amazon.build();

			// Prepare LazyLoad intersector 
			advally.LazyLoader.build();

			// Execute Pre Go() scripts, if set
			advally.CustomScript.build('go');
			
			// Start Adhesion Units, if set
			advally.Adhesion.build();
			advally.Sidehesion.build();
			advally.TopAdhesion.build();
						
			// Prepare OOP units
			advally.OOP.build();
			
			// Enable Domino units 
			advally.Domino.build();
			
			// Adds page level targeting and injections, if set
			advally.Page.build();

			// Add content injectors 
			advally.ContentInjector.build();

			// Configures pre-defined and discovered units on page
			advally.Units.build();

			// Start SmartRefresh, if set 
			advally.SmartRefresh.build();
			
			// Enable debugger support
			advally.ErrorReport.build();
			
			// Enable sticky ad if enabled
			advally.StickyAd.build();
			
			// Execute Pre Fetch scripts, if set
			advally.CustomScript.build('fetch');
			
			// Start SmartRefresh timer 
			advally.SmartRefresh.start();
		
			// Analytics tracker 
			advally.Tracking.build();
			
			// Configure AdLightning
			advally.AdLightning.build();
			
			// Load the units now 
			let units = advally.Units.getUnits();
			advally._displayCB(advally,googletag,advpbjs,units);
		}
	}

	//
	// fn: Callback to start the given units
	//
	this._displayCB = function(advally,googletag,advpbjs,units) {
			
		advally.log('advally._displayCB(): Given ' + units.length + ' new units to load' );
		
		// List of units to load immediately and lazily 
		var loadNow = [];
		var loadLazy = [];

		// Split units to lazy load or not 
		for (var i=0; i<units.length; i++) {
			// If LazyLoad is enabled
			if (advally.LazyLoader.isEnabled()) {
				loadLazy.push(units[i]);
			} else {
				loadNow.push(units[i]);
			}
		}
		
		// We have units to load lazily 
		if (loadLazy.length > 0) {
			advally.log('advally._displayCB(): Loading ' + loadLazy.length + ' units lazily' );
			advally.LazyLoader.watch( loadLazy );
		}
			
		// Immediately load these units 
		if (loadNow.length > 0) {
			advally.log('advally._displayCB(): Loading ' + loadNow.length + ' units NOW' );
			var adRequest = new AdCall(advally,googletag,advpbjs);
			adRequest.setUnits( loadNow );
			adRequest.start();
		}

	}


	/////////////////////////////////////
	//
	// RE-USABLE OBJECTS
	//
	/////////////////////////////////////

	//
	// Object: Cookie Manager
	//
	var CookieManager = function( name, hours ){
		this.cookieName = name;
		this.cookieLifetime = (typeof hours == 'number') ? hours : 6; // Hours
		this.cookieValue = '';
		this.get = function() {
			var cname = this.cookieName + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(cname) == 0) {
					this.cookieValue = c.substring(cname.length, c.length);
					break;
				}
			}
			return this.cookieValue;
		}
		this.duration = function( hours ) {
			this.cookieLifetime = (typeof hours == 'number') ? hours : this.cookieLifetime;
		}
		this.set = function( cookieValue ){
			this.cookieValue = cookieValue;
			var d = new Date();
			d.setTime(d.getTime() + (this.cookieLifetime*60*60*1000));
			var	expires = "expires="+ d.toUTCString();
			document.cookie = this.cookieName + "=" + cookieValue + ";" + expires + ";path=/;SameSite=Lax";
		}
		// Not called delete() because IE8 doesn't like "delete" used as an object function name
		this.remove = function(){
			document.cookie = this.cookieName + "=" + this.cookieValue + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
		}
	}

	//
	// Object: Advally Unit
	//
	var AdvallyUnit = function(id, slot, sizes) {
		this.id = id;				// AdvAd-UnitId
		this.slot = slot;			// /12345/Parent/Child
		this.sizes = sizes;			// [ [1,1] ]
		this.sizemap = false;		// Object()
		this.targetingQueue = {};
		this.oop = false;			// String
		this.dfpRef = null;
		this.isViewed = false; 
		this.lastDisplay = null; 
		this.advertiserId = null;
		this.unfilledCount = 0;
		this.smartRefresh = true;
		this.refreshCooldown = 5;	// Should match resetRefreshCooldown() below 
		this.refreshInterval = null;
		this.lazyLoadMargin = null;
		this.addBidders = true; 
		this.displayCount = 0; 
		this.events = {
			'slotRequested': [
				function(event) {
					// Reset view tracker when a slot is requested
					this.isViewed = false;
					// Reset some trackers to prevent refreshing while waiting for request to return 
					this.lastDisplay = Date.now();
					this.resetRefreshCooldown();
					advally.log('AdvallyTag: slotRequested: ' + this.id);
				}
			],
			'slotRenderEnded': [
				function(event) {
					// DO NOT reset isViewed here - Sometimes RenderEnded triggers after viewable
					// Track completed ad displays
					this.displayCount++;
					// Reset Last Display and refresh cooldown
					this.lastDisplay = Date.now();
					this.resetRefreshCooldown();
					// Update the Advertiser Id
					this.advertiserId = event.advertiserId;
					// Update unfilled count
					if (event.isEmpty) {
						this.unfilledCount++;
					}
					// Show the Report Ad button 
					advally.ErrorReport.addReportBtn(this);
				}
			],
			'impressionViewable': [
				function(event) {
					this.isViewed = true; 
				}	
			],
		};
		this.onEvent = function(name, callback) {
			if (typeof callback == 'function') {
				this.events[ name ].push(callback);
			}
		}
		this.triggerEvent = function(name, event) {
			if (this.events[ name ]) {
				for (i=0; i<this.events[ name ].length; i++) {
					this.events[ name ][i].call(this, event);
				}
			}
		}
		this.useSizemap = function(name) {
			this.sizemap = name;
			return this;
		}
		this.setRefreshInterval = function(refreshInterval) {
			this.refreshInterval = parseInt(refreshInterval);
			return this;
		}
		this.setLazyLoadMargin = function(lazyLoadMargin) {
			this.lazyLoadMargin = parseInt(lazyLoadMargin);
			return this;
		}
		this.setOOP = function(type) {
			this.oop = type;
			advally.log('AdvallyTag: Unit ' + this.id + ' defined as OOP type: ' + type );
			return this;
		}
		this.setTargeting = function(key, value) {
			// Store the targeting to be added when the unit is registered
			// Or push now if already registered 
			if (this.dfpRef) {
				this.dfpRef.setTargeting(key, value);
			} else {
				this.targetingQueue[key] = value;
			}
		}
		// Given a string of settings in URL format:  key=value&key2=valuea,valueb,valuec& ...
		this.setTargetingFromQueryStr = function(queryStr) {
			// Split the request into key-val pairs
			var pairs = queryStr.split("&");
			// Loop each pair
			for (let i=0; i<pairs.length; i++) {
				// Split the pair into Key and Value(s)
				var KeyVal = pairs[i].split('=');
				// If we have a Key and a Value
				if (KeyVal.length == 2) {
					// Convert the values into an array
					var Values = KeyVal[1].split(',');
					// If we have at least 1 value, save the targeting
					if (Values.length > 0) {
						this.setTargeting( KeyVal[0], Values );
					}
				}
			}
		}
		this.undoView = function ( ) {
			// Reset Last Display and refresh cooldown
			this.lastDisplay = null;
			this.resetRefreshCooldown();
			// Update the Advertiser Id
			this.advertiserId = null;
		}
		this.resetRefreshCooldown = function () {
			this.refreshCooldown = 5;
		}
		/* Returns the effective display sizes for a Unit */
		this.getDisplaySizes = function() {
			// We have a sizemap, and have a DPF ref to help determine the active sizes
			if (this.sizemap && this.dfpRef) {
				let Sizes = [];
				this.dfpRef.getSizes(advally.windowWidth(), advally.windowHeight()).forEach(function(Size) {
					if (Size == 'fluid') {
						Sizes.push( Size );
					} else {
						Sizes.push( [ Size.getWidth(), Size.getHeight() ] );
					}
				}, this);
				return Sizes;

			// If we are INTERSTITAL OOP
			} else if (this.oop == 'INTERSTITIAL') {
				let Sizes = [ [300,250] ];

				if (advally.windowWidth() > 1050 && advally.windowHeight() > 800) {
					Sizes.push( [1024,768] );
				}
				if (advally.windowWidth() > 300 && advally.windowHeight() > 630) {
					Sizes.push( [300,600] );
				}
				if (advally.windowWidth() > 500 && advally.windowHeight() > 350) {
					Sizes.push( [480,320] );
				}
				if (advally.windowWidth() > 350 && advally.windowHeight() > 500) {
					Sizes.push( [320,480] );
				}

				return Sizes;
			}

			// Default 
			return this.sizes; //  structuredClone(this.sizes);
		}
		this.getDisplaySizesStr = function() { 
			let Sizes = [];
			this.getDisplaySizes().forEach((element, index) => {  
				Sizes[index] = (typeof element == 'string') ? element : element.join('x');
			}); 
			return Sizes;
		}
		this.shouldRefresh = function (refreshLimit, refreshInterval, ignoreViewability) {
			
			// Ignore units that aren't registered
			if (!this.dfpRef) {
//				advally.warn('AdvallyTag: Unit not registred.');
				return false;
			}
			
			// Does this unit support refresh
			if (this.smartRefresh == false || this.oop != false) {
//				advally.warn('AdvallyTag: Unit does not have Smart Refresh enabled.');
				return false;
			}
			
			// Is the unit in the viewport? 
			if (!this.isInViewport()) {
//				advally.warn('AdvallyTag: Unit is not in viewport.');
				return false; 
			}
			
			// If a refresh limit was set and reached 
			if (refreshLimit !== false && this.displayCount > refreshLimit) {
//				advally.warn('AdvallyTag: Unit refresh limit reached: ' + refreshLimit);
				return false;
			}
			
			// Check if we have reloaded since the global (or unit) refresh interval 
			refreshInterval = this.refreshInterval ? this.refreshInterval : refreshInterval;
			if (refreshInterval < 30)
				refreshInterval = 30;
			let reloadCutoff = Date.now() - refreshInterval*1000;
			if (this.lastDisplay && this.lastDisplay > reloadCutoff) {
//				advally.warn('AdvallyTag: Unit reload cutoff not passed: ' + refreshInterval);
				return false; 
			}
			
			// Don't refresh if a loaded unit hasn't been viewed 
			if (!ignoreViewability) {
				if (this.isViewed == false && this.advertiserId != null) {
//					advally.warn('AdvallyTag: Unit is not viewed');
					return false; 
				}
			}
				
			// Refresh cooldown prevents ads from changing too quickly after entering viewport 
			if (this.refreshCooldown > 0) {
//				advally.warn('AdvallyTag: Unit refresh is on cooldown.');
				--this.refreshCooldown;
				return false; 
			}

			// All conditions for refresh have been reached
			return true;			
		}
		this.isInViewport = function () {
			
			// Find this element on page
			var element = document.getElementById(this.id);
			
			// The first sub element is the actual ad container of the correct size
			if (element && element.firstElementChild) {
				
				// Get the DOMRect object for the ad container 
				var bounding = element.firstElementChild.getBoundingClientRect();
				//advally.log(bounding)
								
				// Proceed if we can check our size
				if (bounding.width && bounding.height) {
					
					// 50% in the viewport
					return (
						bounding.top >= (bounding.height/2)*-1 &&
						bounding.left >= (bounding.width/2)*-1 &&
						bounding.bottom <= advally.windowHeight()+(bounding.height/2) &&
						bounding.right <= advally.windowWidth()+(bounding.width/2)
				    );
					
				}
			}
			
			// Without a child element the unit isn't setup
			return false; 
		}
		this.register = function(advally,googletag) {
			
			// We only register once 
			if (this.dfpRef) {
				return false;
			}
			
			// OOP units are defined differently 
			if (this.oop) {
				
				// Translate the predefined label to an Enum from Googletag
				let oopFormats = eval('googletag.enums.OutOfPageFormat');
				let oop = (oopFormats[this.oop]) ? oopFormats[this.oop]	: 0;

				this.dfpRef = googletag.defineOutOfPageSlot(this.slot, oop);
				
			// Standard display tag
			} else {
				// Define DFP Slot
				this.dfpRef = googletag.defineSlot(this.slot, this.sizes, this.id);	
				
				// Append sizemap, if any
				if (this.dfpRef && this.sizemap) {
					let map = advally.Units.getSizemap(this.sizemap);
					if (map) {
						this.dfpRef.defineSizeMapping( map.build(googletag) );
					}
				}
			}

			if (!this.dfpRef) {
				advally.warn('AdvallyTag: Could not define Googletag slot: ' + this.id);
				return false;
			}

			// Attach the Advally Unit code to the element 
			this.dfpRef.setTargeting('advSlotName', this.id);

			// Append any queued targeting settings 
			let targetKeys = Object.keys(this.targetingQueue);
			for (var x=0; x<targetKeys.length; x++) {
				let key = targetKeys[x];
				let value = this.targetingQueue[ key ];
				this.dfpRef.setTargeting(key, value);
			}
			this.targetingQueue = false;

			// Add Pubads service 
			this.dfpRef.addService(googletag.pubads());

			// Add to Prebid 
			if (this.addBidders) {
				let bidders = advally.Bidders.prebid( [ this ] );
				advally.Prebid.addAdUnits( bidders );
			}

			// Display
			googletag.display( this.dfpRef );

		}
	}

	//
	// Object: Advally SizeMap (wrapper for Googletag)
	//
	var AdvallySizeMap = function() {
		this.mapping = [];
		this.addSize = function(screenWidth, screenHeight, sizes) {
			
			// Convert given sizes to "[WIDTH|0, HEIGHT|0]"
			let screenSize = [
				(typeof screenWidth == 'number') ? screenWidth : 0, 
				(typeof screenHeight == 'number') ? screenHeight : 0, 
			];

			// Convert "[728,90]" to "[[728,90]]";
			if (typeof sizes[0] == 'number') {
				sizes = [ sizes ];
			}

			// Save the mappins 
			this.mapping.push([ screenSize, sizes ]);
			return this;
		}
		this.build = function(googletag) {
			let GTmap = googletag.sizeMapping();
			for (var i=0; i<this.mapping.length; i++) {
				let screen = this.mapping[i][0];
				let sizes = this.mapping[i][1];
				GTmap.addSize(screen, sizes);
			}
			return GTmap.build();
		}
	}

	//
	// Object: Advally Timer object with Frequency and Max callbacks
	//
	var AdvallyTimer = function() {

		// Configuration
		this.frequency = 60;  // Timer frequency in seconds
		this.max = 5;         // Max triggers
		this.action = null;	  // Callback to run on trigger

		// State - Leave as-is
		this.count = 0;
		this.timer = null;

		this.reload = function() {
			this.stop();
			this.__worker(true);
			return this;
		}

		this.start = function() {
			this.timer = setInterval(this.__worker.bind(this), this.frequency*1000);
			return this;
		}

		this.stop = function() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
			return this;
		}

		this.__worker = function( ignoreCount ) {
			if (typeof this.max == 'number' && this.count >= this.max && !ignoreCount) {
				this.stop()
			} else if (this.action) {
				this.count++;
				this.action( this.count );
			}
			return this;
		}
	}
	
	//
	// Object: Advally ad injection script to handle injection frequency into a content container
	//
	var AdvallyContentInjector = function() {

		// Configuration
		this.selector = 'p'; 			// Selectors to count and inject between
		this.weightWord = 1; 			// Each "word" is worth this weight
		this.weightSelector = 25; 		// Each new "selector" is worth this weight
		this.frequency = 350;			// How often to inject an Ad based on weights
		this.startReduction = 0;		// An amount to kickstart the first injector by reducing the inital 
		this.minEndWords = 80; 			// Don't place an ad closer than this number of words from the end

		// Runtime
		this.curWeight = 0;
		this.injectIndex = 0;

		//
		// containerSelector = CSS style selector for the container to target
		// callback = fn(newunit,index)  Function to call on each replacement. Passed unit element + index counter
		// Return boolean (true) to cease any more ad injection
		//
		this.inject = function(containerSelector, callback) {
			try {

				// Find the container
				var container = document.body.querySelector(containerSelector);
				if (!container) {
					advally.log('Injector: Could not find: ' + containerSelector);
					return false;
				}
				
				// Get Total Word Weight for container
				var remainingWordWeight = this._numWords(container) * this.weightWord;
				advally.log('Injector: Total word weight: ' + remainingWordWeight);

				// Reset runtime params
				this.curWeight = (this.startReduction <= this.frequency) ? this.startReduction : 0; 
				this.injectIndex = 0;

				// Break down the elements where we should inject
				var elements = container.querySelectorAll(this.selector);
				advally.log('Injector: Found ' + elements.length + ' "' + this.selector + '" elements');
				for (let i=0; i<elements.length; i++) {

					// Shortcut to this element
					var element = elements[i];

					// Get total word weight for this element
					var curWordWeight = this._numWords(element) * this.weightWord;

					// Deduct the remaining word weight
					remainingWordWeight -= curWordWeight;

					// Accumulate selector's total weight
					this.curWeight += this.weightSelector + curWordWeight;

					// Our threshold was found
					if (this.curWeight >= this.frequency) {

						advally.log('Injector: Frequency (' + this.frequency + ') passed by weight: ' + this.curWeight);
						advally.log('Injector: Remaining word weight: ' + remainingWordWeight);

						// Skip this ad if we are too close to the end
						if (remainingWordWeight < this.minEndWords) {
							advally.log('Injector: Too close to end (' + this.minEndWords + ').  Exiting');
							return true;
						}

						// Create the new container
						// If the element is appended next to a TR, make it a TR, otherwise a DIV 
						let nextElement = this.selector=='br' ? element.nextSibling : element.nextElementSibling;
						let elementType = ( nextElement && nextElement.tagName && nextElement.tagName.toLowerCase()=='tr' ) ? 'tr' : 'div';
						let injected = document.createElement(elementType);
						injected.classList.add("AdvallyInjected" + this.injectIndex);
						element.parentNode.insertBefore(injected, element.nextSibling);

						// Execute the injector callback
						if (typeof callback == 'function') {
							ret = callback(injected, this.injectIndex );
							this.injectIndex++;
							if (ret === false) {
								advally.log('Injector: Callback returned false. Quitting.');
								return true;
							}
						}

						// Reset weight
						this.curWeight = 0;
					}
				}

				// Return the number of injected units
				return this.injectIndex;

			} catch(error){ advally.log(error) }
		}
		this._numWords = function(element) {
			var text = element.innerText || element.textContent;
			return text.replace(/\n/g, ' ').split(' ').length;
		}
	}

	//
	// Object: Prerequisites Loader
	//
	var PrereqLoader = function(advally) {
		
		this.timer = false;		// Failsafe timer in case a bidder never returns
		this.waiting = [];		// Tracks functions to execute and wait for 
		this.onComplete = null;	// Callback to run when completed 
		
		// Add waiting instruction and return relevant callback
		this.waitFor = function(name) {
			this.waiting.push(name);
			return this.fnCallback(this,name);
		}
		// Executes the final NF call 
		this.done = function() {
			// We can only be "done" when we have an onReady handler 
			if (this.onComplete !== null) {
				advally.log('prereqLoader(): Done!');
			
				// Stop the timer, if running
				if (this.timer) {
					this.timer.stop();
				}
	
				// Only execute callback once 
				if (this.onComplete) {
					let fn = this.onComplete;
					this.onComplete = null;
					return fn();
				}
			}
		}
		// Start the Prereq Loader, execute fn() when ready  
		this.onReady = function( fn, timeout ) {
			advally.log('prereqLoader(): Started');
			
			// What to run after prerequisites are done 
			this.onComplete = fn;
			
			// Immediately execute callback if nothing to wait for 
			if (this.waiting.length == 0) {
				return this.done();	
			// Otherwise we wait, and set a fallback timer 
			} else {
				this.timer = new AdvallyTimer();
				this.timer.frequency = timeout ? timeout : 1;  // Fallback timer in case of error
				this.timer.max = 1;
				this.timer.action = this.callbackTimeout(this);	
				this.timer.start();
			}
		}
		// Callback executed by prerequisites on completion 
		this.fnCallback = function(self,name) {
			return function() {
				advally.log('prereqLoader(): ' + name + ' Completed');

				// Remove from waiting list 
				let index = self.waiting.indexOf(name);
				if (index > -1) {
					self.waiting.splice(index, 1); 
				}
				advally.log('prereqLoader(): Waiting for ', self.waiting);
								
				// Done if we aren't waiting on anything else 
				if (self.waiting.length == 0)
					return self.done();
				return false; 
			}
		}
		// Function called by fallback timer to continue regardless of prerequisites
		this.callbackTimeout = function(self) {
			return function() {
				advally.log('prereqLoader(): Timeout reached');
				return self.done();
			}
		}
	}


	//
	// Object: AdCall handles an individual ad requst, juggles Prebid, Amazon, and GAM
	//
	var AdCall = function(advally,googletag,advpbjs) {

		// State of the ad call
		this.units = [];				// Which units to refresh
		this.timer = false;				// Failsafe timer in case a bidder never returns
		this.waitingAmazon = false;		// Tracks if we are waiting for Amazon 
		this.waitingPrebid = false;		// Tracks if we are waiting for Prebid 
		this.requestSent = false;		// Tracks if the GAM request was sent
		
		// Set the units to request
		this.setUnits = function(units) {
			
			// Reset the units to reload
			this.units = [];
			
			// Timestamp from 25 seconds ago 
			var reloadCutoff = Date.now() - 25000;

			// Process each given unit 
			for (var i=0; i<units.length; i++) {

				// Only include units with a DFP Reference
				if (units[i].dfpRef) {

					// Check if the unit never loaded, or loaded before cutoff
					let minIntervalOk = (!units[i].lastDisplay || units[i].lastDisplay < reloadCutoff);
					
					// Find the DOM element on page
					let domElement = document.getElementById(units[i].id);

					if (units[i].oop && units[i].lastDisplay) {
						advally.warn("AdCall: Not refreshing OOP unit that's previously been loaded.");
						continue;
					}
					
					// Only include units outside refresh time, or that were reset 
					if (minIntervalOk || (domElement && domElement.firstElementChild == null) ) {
						
						// If this unit has displayed before, add Refresh tagging 
						if (units[i].displayCount > 0) {
							units[i].setTargeting('disableAdsense', 'true');
							units[i].setTargeting('refresh', 'true');
						}

						this.units.push(units[i]);
					}
				}
			}
		}
		// Start the ad request
		this.start = function() {
			
			// Don't bother to start if we have no slots
			if (this.units.length == 0) {
				advally.warn('AdCall: No viable slots to refresh');
				return false;
			}

			// Only the bidder IDs needed for Prebid
			var pbjsIds = [];

			// Loop each unit to request
			for (var i=0; i<this.units.length; i++) {
				// Don't request bids for units without 3rd party bidding 
				if (this.units[i].addBidders) {
					pbjsIds.push( this.units[i].id );
				}

				// Mark last display as now so we don't trigger a load again too quickly
				this.units[i].triggerEvent('slotRequested'); 
			}
						
			advally.log('AdCall: Dispatching bids for: ' + pbjsIds.join(', ') )
			
			// Start Prebid bid, store result to know if we are waiting for Prebid to return or not
			this.waitingPrebid = advally.Prebid.requestBids(pbjsIds, this.callbackPrebid(this) );

			// Start Amazon bid, store result to know if we are waiting for Amazon to return or not
			this.waitingAmazon = advally.Amazon.fetchBids(this.units, this.callbackAmazon(this) );
			
			// Do the request now if we are not waiting for Amazon And/Or Prebid
			if (this.waitingPrebid===false && this.waitingAmazon===false) {
				this.showAds();
				
			// Setup the emergency timeout in case ad requests stall out 
			} else {
				this.timer = new AdvallyTimer();
				this.timer.frequency = (advally.Prebid.getTimeout()+1000)/1000; // Use the Prebid timeout + some extra, in seconds. This is the failsafe timer
				this.timer.max = 1;
				this.timer.action = this.callbackTimeout(this);	
				this.timer.start();
			}
			
		}
		this.showAds = function() {
			if (this.requestSent === true){
				return;
			}
			
			// Stop the timer, if running
			if (this.timer) {
				this.timer.stop();
			}

			// Track request is sent
			this.requestSent = true;
				
			// Extract the DFP reference slots and refresh
			//var dfpRefs = this.units.map(obj => obj.dfpRef);
			var dfpRefs = [];
			var slotIds = [];
			for (var i=0; i<this.units.length; i++) {
				dfpRefs.push( this.units[i].dfpRef );
				slotIds.push( this.units[i].id );
			}
			advally.log('AdCall: Refreshing GAM slots', slotIds.join(', ') );
			googletag.pubads().refresh(dfpRefs);
		}
		this.callbackAmazon = function(self) {
			return function() {
				advally.log('AdCall: Amazon complete');
				self.waitingAmazon = false;
				self.biddersBack();
			}
		}
		this.callbackPrebid = function(self) {
			return function() {
				advally.log('AdCall: Prebid complete');
				self.waitingPrebid = false;
				self.biddersBack();
			}
		}
		this.biddersBack = function() {
			// Check if we are still waiting 
			if (this.waitingAmazon || this.waitingPrebid)
				return;
			return this.showAds();
		}
		this.callbackTimeout = function(self) {
			return function() {
				advally.log('AdCall: Timeout reached - Loading ads now');
				self.showAds();
			}
		}
	}

	//
	// Object: Advally Unit
	//
	/* parent.state.<alias> = {
		segment: null, 
		rendered: false, 
		enableDesktop: false,
		enableMobile: false,
		slotName: null,
		frequencyCap: null, 
		bgColor: FFFFFF,
		bgOpacity: 1,
		marginThresholdMobile: 0, 
		marginThresholdDesktop: 0, 
	} */
	var AdvallyAdhesionBase = function(parent, baseName) {
		let baseAlias = baseName.toLowerCase(); 
		this.alias = baseAlias;
		this.name = baseName; 
		this.slotId = 'advally-' + baseAlias + '-slot';
		this.containerId = 'Advally' + baseName, 
		this.cookieClosed = new CookieManager( 'Advally'+baseName+'Hide', 24 );
		this.cookieFeqCap = new CookieManager( 'Advally'+baseName+'FeqCap', 4 );
		this._getCSS = function(settings) {   
			// OVERRIDE and return the CSS here...   
		}
		this._writeTag = function(container,body,Unit) {
			// OVERRIDE and create the HTML on page
		}
		this._startSetup = function(settings) {
			// OVERRIDE and return wether or not to continue with setup 
			return true;
		}
		this.config = function(key, value) {
			// OVERRIDE with any extra setup required at the end of start()
			return this._config(key, value);
		}
		this._config = function(key, value) {
			switch (key) {
				// Values we can directly assign, like arrays or strings 
				case 'segment':
				case 'slotName':
				case 'bgColor':
				case 'bgOpacity':
				case 'marginThresholdMobile':
				case 'marginThresholdDesktop':
					parent.state[this.alias][key] = value;
					return true;
				// Values that must be boolean 
				case 'enableDesktop':
				case 'enableMobile':
					parent.state[this.alias][key] = (value) ? true : false;
					return true;
				// Custom case for cookie vlaues 
				case 'closeDuration':
					this.cookieClosed.duration(value);
					return true;
				case 'frequencyCap':
					parent.state[this.alias].frequencyCap = value; 
					this.cookieFeqCap.duration(value);
					return true;
			}
			return false; 
		}
		this.getSlot = function() {
			return parent.state[this.alias].slotName;
		}
		// Request to show the topadhesion unit, can happen anytime
		this.show = function() {
			// Do the late setup if the script has started already
			if ( parent.started() ) {
				this._startLate();
			} else {
				this.config('enableDesktop', true);
				this.config('enableMobile', true);
			}
		} 	
		// Build the adhesion unit during initial setup
		this.build = function() {
			
			// Device is mobile and not enabled on Mobile
			if (parent.isMobile && !parent.state[this.alias].enableMobile)
				return false;

			// Device is desktop and not enabled on Dekstop
			if (parent.isDesktop && !parent.state[this.alias].enableDesktop)
				return false;
				
			// Check for a segment isn't matched 
			if (parent.SiteSegment.notFound(parent.state[this.alias].segment))
				return false;

			this._start();
		}
		this._start = function() {
			
			// This adhesion was closed previously
			if (this.cookieClosed.get() == 1) {
				parent.warn(this.name + ': Not loading - previously closed');
				return false;
			}
			
			// This adhesion is frequency capped
			if (parent.state[this.alias].frequencyCap > 0) {
				if (this.cookieFeqCap.get() == 1) {
					parent.warn(this.name + ': Not loading - frequency cap');
					return false;
				}
			}
			
			// Check slot name is given
			if (!this.getSlot() && !parent.Units.getDefaultSlot()) {
				parent.warn(this.name + ': Not loading - No slot name given');
				return false;
			}
			
			// Only allow this adhesion to be setup once
			if (parent.state[this.alias].rendered) {
				parent.warn(this.name + ': Not loading - already rendered');
				return false;
			} else {
				parent.state[this.alias].rendered = true;
			}
			
			// Do we continue? 
			if (this._startSetup(parent.state[this.alias]) !== true) {
				parent.warn(this.name + ': Not continuing with setup.');
				return false; 
			}
			
			parent.log(this.name + ": Showing " + this.alias + " unit");

			// Write CSS to page
			parent.appendCSS( this._getCSS(parent.state[this.alias]) );

			// Get the body element to add the container 
			let body = parent.getBody();
			
			// Create the Close button 
			let close = document.createElement('div');
			close.classList.add('__AdvallyClose');
			close.innerHTML = '<svg style="height:20px; width: 20px;" height="600px" width="600px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" xml:space="preserve"><g><path style="fill:#030104;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"/></g></svg>';
			// Add the BG element for opacity 
			let background = document.createElement('div');
			background.classList.add('__AdvallyBgFill');
			// Create the overall container
			let container = document.createElement('div');
			container.id = this.containerId;
			container.classList.add( 'AdvallyAdhesionBase' );
			// Add to the container in this order (for correct layering and opacity): 
			container.appendChild(background);	// Background
			this._writeTag(container,body);		// Write the tag to the container 
			container.appendChild(close);		// Close button 
			// Write container to page 
			body.appendChild(container);

			// Ad close handler
			close.addEventListener('click', this._close(this) );
			
			// Set frequency cap cookie
			if (parent.state[this.alias].frequencyCap > 0) {
				this.cookieFeqCap.set(1);
			}
			
			// Assign the global class to the document body 
			body.classList.add('Advally-Open-'+this.name);
			
			// Determine which threshold to use for display
			let rootMargin = this._rootMargin();
			
			// The class name used to make the adhesion active 
			let activeClassName = "adhesionActive";
			
			// Decide whether to observe or stick immediately 
			if (rootMargin==0 || typeof IntersectionObserver != 'function') {
				parent.log(this.name + ': Immediately starting.');
				this._addClass(activeClassName);
				
			// Intersection Observer to show/hide top element
			} else {
				parent.log(this.name + ': Triggering on scroll.');
				let observer = new IntersectionObserver(this._trackingCallback(parent, baseName, activeClassName), {
					root: null, 
					rootMargin: rootMargin+'%',
					threshold: 0
				});
				observer.observe( parent.ScrollTracker.top() );
			}		
				
			return true;
		}
		this._rootMargin = function() {
			// Determine which threshold to use for display
			return (parent.isMobile) 
				? parent.state[this.alias].marginThresholdMobile 
				: parent.state[this.alias].marginThresholdDesktop;
		}
		this._startLate = function() {
			
			// Try to setup the slot, exit if it fails
			if ( !this._start() ) {
				return false;
			}

			// Find the Advally slot, that _start() created
			var unit = parent.Units.getUnitById(this.slotId);
			
			// Register and display
			if (unit) {
				unit.register(parent,googletag);
				parent._displayCB(parent,googletag,advpbjs,[unit]);
			}
		}
		this._close = function(self) {
			return function() {
				// Hide the ad container
				let container = document.getElementById(self.containerId);
				container.style.display="none";
				container.classList.remove("adhesionActive");
				// Set cookieClosed to hide for future requests
				self.cookieClosed.set(1);
				// Remove the open class from the document body
				let body = parent.getBody();
				if (body) {
					body.classList.remove('Advally-Open-'+self.name);
				}
			}
		}
		this._trackingCallback = function(parent, baseName, className) {
			return function(entries, observer) {
				if (entries[0].isIntersecting) {
					parent[baseName]._removeClass(className);
				} else {
					parent[baseName]._addClass(className);
				}
			}
		}
		this._addClass = function(className) {
			let container = document.getElementById(this.containerId);
			container.classList.add(className);
		}
		this._removeClass = function(className) {
			let container = document.getElementById(this.containerId);
			container.classList.remove(className);
		}
	}


	/////////////////////////////////////
	//
	// MODULES
	//
	/////////////////////////////////////

	
	//
	// Module: FPD
	//
	this.FPD = (function(parent){
		parent.state.fpd = {
			emailSAH256: null, 
		};
		// Module functions
		return {
			getEmail: function() {
				parent.log("FPD: Requested email hash: ", parent.state.fpd.emailSAH256);
				return parent.state.fpd.emailSAH256;
			}, 
			// Provide an e-mail that must be hashed 
			setEmail: function(email) {
				if (this.__isValidEmailAddress(email)) {
					this.__setEmailHash(email);
				} else {
					parent.warn("FPD: Ivalid e-mail provided.");
				}
			}, 
			// Check to make sure that the value is a valid email address
			__isValidEmailAddress: function(email) {
				return (typeof email === "string") && (email.match(/@/g)||[]).length === 1;
			}, 
			// Normalize email address so that it is lowercase without any whitespace
			__normalizeEmail: function(email) {
				return email.trim().toLowerCase().replace(/\+[^@]*@/g,"@");
			}, 
			// Main function takes an argument file: string[] || string and hashes the value(s)
			__setEmailHash: function(email){
				try{
					let cryptPromis = crypto.subtle
						.digest("SHA-256", new TextEncoder("utf-8").encode( this.__normalizeEmail(email) ) )
						.then((h) => {
						let hexes = [],
							view = new DataView(h);
						for (let i = 0; i < view.byteLength; i += 4)
							hexes.push(view.getUint32(i).toString(16));
						return hexes.join("");
						});

					cryptPromis.then( (val) => parent.state.fpd.emailSAH256 = val );
				} catch(err) {
					parent.error("FPD: Could not has email", err);
				}
			}
		}
	})(this);


	//
	// Module: User IP Lookup
	//
	this.IPLookup = (function(parent){
		// Defaults
		parent.state.iplookup = {
			data: {
				success: null, 
				continentCode: null, 
				countryCode: null,
				region: null, 
				timezone: null,
				mobile: null, 
				query: null, 
			},
			callbacks: [], 
		};
		// Module functions
		return {
			storageKey: 'advallyIPLookupV2',
			// Begins a lookup from the API
			_startLookup: function() {
				parent.log('IP Lookup: Executing API Query');
				
				// Some browser security won't allow XHR to 3rd party domains (IE!)
				try {
					var request = new XMLHttpRequest();
					request.onload = this.__onloadCallback(request,parent,this);
					request.onerror = this.__onerrorCallback(request,parent,this);
					request.ontimeout = this.__ontimeoutCallback(request,parent,this);
					request.timeout = 1500; // Set timeout to 1.5 second (1500 milliseconds)
					request.open('GET', 'https://pro.ip-api.com/json/?key=ZxSSLwZtxrKxQbv&fields=status,countryCode,region,timezone,mobile,continentCode,query');
					request.send();
				} catch(error){
					parent.error('IP Lookup: API query failed: ' + error);
					parent.state.iplookup.data.success = false;
					this._runCallbacks();
				}

			},
			// We got a response back from the API
			__onloadCallback: function(request,parent,self) {
				return function() {
					// Indicates request is finished and successful
					if (request.readyState === request.DONE && request.status === 200) {
						
						// Parse the JSON from the API
						let data = JSON.parse( request.responseText );
						// {"continentCode":"NA","countryCode":"CA","mobile":false,"region":"ON","status":"success","timezone":"America/Toronto","query":"10.10.10.10"}

						// API lookup worked
						if (data.status=='success') {
							parent.state.iplookup.data.success = true;
							parent.state.iplookup.data.continentCode = data.continentCode;
							parent.state.iplookup.data.countryCode = data.countryCode;
							parent.state.iplookup.data.region = data.region;
							parent.state.iplookup.data.timezone = data.timezone;
							parent.state.iplookup.data.mobile = data.mobile;
							parent.state.iplookup.data.query = data.query;
							parent.log('IP Lookup: Success ', parent.state.iplookup.data);
							parent.storageSet(self.storageKey, JSON.stringify(parent.state.iplookup.data) );

						// API Lookup was not successful 
						} else {
							parent.error('IP Lookup: API Result invalid');
							parent.state.iplookup.data.success = false;
						}
						
						// Run callbacks
						self._runCallbacks();
					}
				}
			},	
			// Error handling from the API 
			__onerrorCallback: function(request,parent,self) {
				return function(e) {
					parent.error('IP Lookup: API query failed', e);
					parent.state.iplookup.data.success = false;
					self._runCallbacks();
				}
			},
			__ontimeoutCallback: function(request,parent,self) {
				return function(e) {
					parent.error('IP Lookup: API query timeout ', e);
					parent.state.iplookup.data.success = false;
					self._runCallbacks();
				}
			},
			_runCallbacks: function() {
				parent.log('IP Lookup: Starting ' + parent.state.iplookup.callbacks.length + ' queued callbacks');
				for (let i=0; i<parent.state.iplookup.callbacks.length; i++) {
					parent.log('IP Lookup: Executing callback #' + i);
					parent.state.iplookup.callbacks[i]( parent.state.iplookup.data );
				}
				this.callbacks = [];
			},
			get: function(key) {
				if (key == null) 
					return parent.state.iplookup.data;
				else 
					return (parent.state.iplookup.data.success == true && typeof parent.state.iplookup.data[key] != 'undefined')
						? parent.state.iplookup.data[key]
						: false;
			}, 
			onReady: function(callback) {
				if (parent.state.iplookup.data.success === null) {
					parent.log('IP Lookup: Queuing callback');
					parent.state.iplookup.callbacks.push(callback);
				} else {
					parent.log('IP Lookup: Immediately executing callback');
					callback( parent.state.iplookup.data );
				}
			},
			start: function() {
				parent.log('IP Lookup: Starting');
				let data = parent.storageGet(this.storageKey);
				if (data) {
					parent.state.iplookup.data = JSON.parse(data);
					parent.log('IP Lookup: Restored ', data);
					this._runCallbacks();
				} else {
					this._startLookup();
				}
			}
		}
	})(this);


	//
	// Module: Consent Manager
	//
	this.Consent = (function(parent){
		// Defaults
		parent.state.consent = {
		};
		// Module functions
		return {
			// Austria, Belgium, Bulgaria, Czech Republic, Cyprus, Denmark, Estonia, Finland, France, Germany, Greece, Hungary,
			// Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal,
			// Romania, Slovakia, Slovenia, Spain, Sweden, United Kingdom, Croatia
			// EEA Countries:  https://en.wikipedia.org/wiki/European_Economic_Area
			// Country Codes: http://www.nationsonline.org/oneworld/country_code_list.htm
			// I've included Croatia which isn't a full emmber of EEA but is preparing for Consent
			GDPR: [	'AT','BE','BG','CZ','CY','DK','EE','FI','FR','DE','GR','HU',
					'IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT',
					'RO','SK','SI','ES','SE','GB','HR' ],
			// Included USA>California
			CCPA: { 'US':['CA'] },
			getConsentRequired: function( ipInfo ) {

				// Error resolving location
				// Simply return "true" to be safe
				if (typeof ipInfo.countryCode != 'string')
					return true; 

				// Return the consent type required for this user
				if ( this._userInCountry(ipInfo, this.GDPR) )
					return 'GDPR'; 
				if ( this._userInRegion(ipInfo, this.CCPA) )
					return 'CCPA'; 
				
				return false;
			}, 
			_userInCountry: function(ipInfo, Countries) {
				return (Countries.indexOf(ipInfo.countryCode) != -1);
			}, 
			_userInRegion: function(ipInfo, CountryRegions) {
				if (CountryRegions[ ipInfo.countryCode ]) {
					return (CountryRegions[ ipInfo.countryCode ].indexOf(ipInfo.region) != -1);
				}
				return false;	
			}, 
			onConsentReceived: function(receivedCb) {
				// Continue if no CMP is found - but warn 
				if (!window.__tcfapi) {
					parent.warn('Consent: NO CMP FOUND - Continuing without consent string');
					receivedCb();
					return false;
				}

				// Ping the CMP to check status 
				window.__tcfapi('ping', 2, (pingReturn) => {
					
					// GDPR Does not apply
					if (pingReturn.gdprApplies === false) {
						parent.log('Consent: (Ping) GDPR Does not apply - Continuing');
						receivedCb();
						return true; 
					}

					// GDPR Does apply but the user will not be prompted due to existing consent 
					if (pingReturn.gdprApplies === true && pingReturn.displayStatus == 'disabled') {
						parent.log('Consent: (Ping) TCString is ready and prompt not shown - Continuing');
						receivedCb();
						return true; 
					}

					// We will have to wait for the correct event from the CMP 
					let tcfapiEventListener = function(parent, receivedCb) {

						parent.log('Consent: (Ping) Waiting for CMP to get TCString');

						return function(tcData, success) {

							// Successfully loaded an existing TCString 
							if (success && tcData.eventStatus === 'tcloaded') {
								parent.log('Consent: (Event) TCString loaded from CMP - Continuing');
								receivedCb();
							}

							if (success && tcData.eventStatus === 'useractioncomplete') {
								parent.log('Consent: (Event) User Action granted TCString - Continuing');
								receivedCb();
							}

						}
					}
					window.top.__tcfapi('addEventListener', 2, tcfapiEventListener(parent, receivedCb) );
				
				});

			}
		}
	})(this);


	//
	// Module: Prebid
	//
	this.Prebid = (function(parent,advpbjs,googletag){
		// Defaults
		parent.state.prebid = {
			loaded: false, 
			timeout: 900,
			currency: 'USD', 
			defaultCurrencyRate: 1, 
			granularityMultiplier: 1, 
			floorMobile: 0,
			floorDesktop: 0,
			randomizeBidders: true, 
			sendAllBids: false, 
			rateConversionFile: 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
			tieredBuckets: false, 
			cmpTimeout: 20000, 
			content_taxonomy: [],
			content_category: [],
			analytics: {
				provider: false,
				accountid: false
			},
			consentType: false, 
			bidderConfig: {}, 
			dataProviders: [],
			UID2serverPublicKey: null, 
			UID2subscriptionId: null,
		};
		// Module functions
		return {
			uid2Blacklist: [
				'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU',
				'IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',
				'IS','LI','NO',
				'GP','GF','MQ','YT','RE','MF','CH','GB',
			],
			load: function(version) {
				// Load the script immediately 
				var a = document,
				b = a.createElement("script");
				a.location.protocol, b.type = "text/javascript";
				b.src = "https://cdn.adligature.com/" + parent.state.site + "/" + parent.state.env + "/prebid-" + version + ".js";
				var c = document.getElementsByTagName("head")[0];
				c.insertBefore(b, c.firstChild)

				// Flag prebid is used
				parent.state.prebid.loaded=true;
			},
			config: function(key, setting, subsetting) {
				switch (key) {
					// Values that must be numeric
					case 'timeout':
					case 'floorMobile':
					case 'floorDesktop':
					case 'defaultCurrencyRate':
					case 'granularityMultiplier':
					case 'cmpTimeout':
						parent.state.prebid[key] = parseFloat(setting);
						return true;
						break;
					// Values that must be boolean 
					case 'randomizeBidders':
					case 'tieredBuckets': 
					case 'sendAllBids':
						parent.state.prebid[key] = (setting) ? true : false;
						return true;
						break;
					// Sub values of "analytics"
					case 'analytics':
						if (setting == 'provider' || setting == 'options') {
							parent.state.prebid[key][setting] = subsetting;
							return true;
						}
						break;
					case 'consentType': 
					case 'currency':
					case 'rateConversionFile':
					case 'content_taxonomy':
					case 'content_category':
					case 'UID2serverPublicKey':
					case 'UID2subscriptionId':
						parent.state.prebid[key] = setting;
						return true;
						break;
				}
				return false; 
			},
			configBidder: function(bidder, key, setting) {
				// Create bidder sub object if missing 
				if (!(bidder in parent.state.prebid.bidderConfig)) {
					parent.state.prebid.bidderConfig[bidder] = {};
				}
				switch (key) {
					case 'schain':
						if (typeof setting == 'object' && setting.asi && setting.sid) {
							parent.state.prebid.bidderConfig[bidder][key] = {
								"validation": "relaxed",
								"config": {
									"ver":"1.0",
									"complete": 1,
									"nodes": [{
										asi: setting.asi, 
										sid:setting.sid, 
										hp:1
									}]
								}
							}; 
							return true; 
						}
						break;
					case 'disabledSendingStatisticData':
						parent.state.prebid.bidderConfig[bidder][key] = setting;
						break;
				}
				return false;
			}, 
			addDataProvider: function(provider) {
				parent.state.prebid.dataProviders.push(provider);
			}, 
			// This is used by other systems to match the Prebid timeout 
			getTimeout: function() {
				return parent.state.prebid.timeout;
			},
			getAnalytics: function() {
				if (parent.state.prebid.analytics.provider && parent.state.prebid.analytics.options) {
					return [{
						provider: parent.state.prebid.analytics.provider,
						options: parent.state.prebid.analytics.options
					}];
				}
				return false;
			},
			getConsentManagement: function() {
				
				let consentManagement = {};
/*				
				// Enabpe GPP anywhere requireing consent 
				if (parent.state.prebid.consentType != false) {
					
					consentManagement.gpp = {
						cmpApi: 'iab',
						timeout: parent.state.prebid.cmpTimeout,
					};
					advally.log('Prebid: Enabling GPP Consent Management');
					
					consentManagement.usp = {
						cmpApi: 'iab',
						timeout: 100
					};
					advally.log('Prebid: Enabling USP Consent Management');
				};
*/				
				// If consent is required or specific to GDPR region
				if (parent.state.prebid.consentType == 'GDPR' || parent.state.prebid.consentType===true) {
					consentManagement.gdpr = {
						cmpApi: 'iab',
						timeout: parent.state.prebid.cmpTimeout,
						actionTimeout: parent.state.prebid.cmpTimeout,
						defaultGdprScope: true
					};
					advally.log('Prebid: Enabling GDPR Consent Management');
				}
				
				return consentManagement;
			},
			getCurrency: function() {
				let currencySettings = false;
				
				// If the currency isn't USD - then load the conversion system 
				if (parent.state.prebid.currency != 'USD') {
					
					// Load the currenty conversion module with the hosted rate file 
					currencySettings = {
						adServerCurrency: parent.state.prebid.currency, 
						conversionRateFile: parent.state.prebid.rateConversionFile,
						defaultRates: { USD: {} }
					}
					
					// Set a default conversion rate 
					if (parent.state.prebid.defaultCurrencyRate) {
						currencySettings.defaultRates.USD[ parent.state.prebid.currency ] = parent.state.prebid.defaultCurrencyRate;
					}
				
					// Set a currency multiplier 
					if (parent.state.prebid.granularityMultiplier < 1 || parent.state.prebid.granularityMultiplier > 1) {
						currencySettings.granularityMultiplier = parent.state.prebid.granularityMultiplier;
					}
					
					advally.log('Prebid: Currency Settings ' + parent.state.prebid.currency);
				}
				
				return currencySettings;
			}, 
			getPriceGranularity: function() {
				
				// Determine the active price floor
//				let customPriceBucketFloor = parent.isMobile ? parent.state.prebid.floorMobile : parent.state.prebid.floorDesktop;
				
				// If using new style of tiered buckets (Single order, 0.01 > 50.00$)
				if (parent.state.prebid.tieredBuckets) {
					return { 
						'buckets': [{
//							'min': customPriceBucketFloor,
							'max': 3,
							'precision': 2, 
							'increment': 0.01
						}, {
							'max': 8,
							'increment': 0.05
						}, {
							'max': 20,
							'increment': 0.50
						}, {
							'max': 42,
							'increment': 1.00
						}, {
							'max': 50,
							'increment': 2.00
						}]
					}
					
				// Linear buckets from 0.01 > 20.00$
				} else {
					return { 
						'buckets': [{
//							'min': customPriceBucketFloor,
							'precision': 2, 
							'max': 20,
							'increment': 0.01
						}]
					}
				}
			}, 			
			getBidderSettings: function() {
				return {
					standard: {
						storageAllowed: true
					}, 
					luponmedia: {
						bidCpmAdjustment : function(bidCpm, bid){
							var adjust = 0.8;
							advally.log('Prebid: Bid CPM Adjustment ( ' + adjust + ' ) for: ' + bid.bidderCode);
							return bidCpm * adjust;
						}
					}
				}
			},
			getRTDSettings: function() {
				return (parent.state.prebid.dataProviders.length > 0) 
					? { auctionDelay: 300, dataProviders: parent.state.prebid.dataProviders, }
					: {};
			},
			build: function() {
				// Do not continue without prebid
				if (!parent.state.prebid.loaded) {
					return false;
				}

				parent.log("Prebid: Configuring prebid");

				// Determine the bidder sequence type 
				let bidderSequence = parent.state.prebid.randomizeBidders == true ? 'random' : 'fixed';

				let contentSegments = [];
				for (let i=0; i<parent.state.prebid.content_taxonomy.length; i++) {
					contentSegments.push({ id: parent.state.prebid.content_taxonomy[i] });
				}

				// Basic setup
				let pbjsSettings = {
					bidderTimeout: this.getTimeout(),
					enableSendAllBids: parent.state.prebid.sendAllBids,
					maxRequestsPerOrigin: 4,
					gptPreAuction: {
						enabled: true,
						useDefaultPreAuction: true, 
					}, 
					ortb2: {
						site: {
							cat: parent.state.prebid.content_category, 
							sectioncat: parent.state.prebid.content_category,
							pagecat: parent.state.prebid.content_category,
							content: {
								data: [{
									ext: { segtax: 7 },
									segment: contentSegments
								}]
							}
						}
					},
					enableTIDs: true,
					useBidCache: true,
					userSync: { 
						userIds: [{
							name: 'adtelligent',
							storage: {
								type: "html5",
								name: "adt_id",
								expires: 0.003,
								refreshInSeconds: 60 * 5
							}
						},{
				            name: 'amxId',
				            storage: {
				                name: 'amxId',
				                type: 'html5',
				                expires: 14,
				            }
				        },{
				            name: "criteo",
				        },{
		                    name: "quantcastId",
		                },{
							name: "sharedId",
							params: {
								syncTime: 60
							},
							storage: {
								name: "sharedid",
								type: "html5",
								expires: 365
							},
						},{
		                    name: "pubCommonId",
		                    storage: {
		                        type: "cookie",
		                        name: "_pubCommonId",
		                        expires: 730
		                    }
		                },{
							name: "id5Id",
							params: {
								partner: 1102, 
								externalModuleUrl: 'https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js',
								pd: this.getID5pdString()
							},
							storage: {
								type: "html5",
								name: "id5id",
								expires: 90,
								refreshInSeconds: 8*3600
							}
						},{
							name: "lotamePanoramaId",
							params: {
								clientId: "17813"
							}
						}],
						auctionDelay: 50, 
						aliasSyncEnabled: true, 
						filterSettings: {
				            all: { bidders: '*', filter: 'include' }
        				} 
					},
					schain: {
						validation: "relaxed",
						config: {
							ver: "1.0",
							complete: 1,
							nodes: [{
								asi: "advally.com", 
								sid: parent.getConfig('sellerId'), 
								hp: 1
							}]
						}
					},
					syncEnabled: true,
					syncsPerBidder: 0,
					syncDelay: 8000,
					bidderSequence: bidderSequence, 
					priceGranularity: this.getPriceGranularity(), 
				};

				// If we have uid2 settings and a hashed e-mail
				if (parent.state.prebid.UID2serverPublicKey && parent.state.prebid.UID2subscriptionId) {

					let emailHash = parent.FPD.getEmail();
					let countryCode = parent.IPLookup.get('countryCode');

					// If we have a hashed e-mail
					if (emailHash && this.uid2Blacklist.indexOf(countryCode) == -1) { 

						pbjsSettings.userSync.userIds.push({
							name: 'uid2',
							params: {
								serverPublicKey: parent.state.prebid.UID2serverPublicKey,
								subscriptionId: parent.state.prebid.UID2subscriptionId,
								emailHash: emailHash, 
							}
						});
					}
				}

				// Assign consent management settings 
				let consentManagement = this.getConsentManagement(); 
				if (Object.keys(consentManagement).length > 0) {
					pbjsSettings.consentManagement = consentManagement;
				}
				
				// Assign the currency settings 
				let currencySettings = this.getCurrency();
				if (currencySettings && Object.keys(currencySettings).length > 0) {
					pbjsSettings.currency = currencySettings;
				}
				
				// Global RTD Provider settings
				pbjsSettings.realTimeData = this.getRTDSettings();
				
				parent.log("Prebid: Settings passed to prebid", pbjsSettings);
				advpbjs.setConfig(pbjsSettings);

				// Analytics
				let Analytics = this.getAnalytics();
				if (Analytics) {
					parent.log('Prebid: Enabling Analytics ' + Analytics[0].provider);
					advpbjs.enableAnalytics( Analytics );
				}
				
				// Bidder Configurations
				Object.keys(parent.state.prebid.bidderConfig).forEach(function(bidder){
					let bidderConfig = {
						bidders: [bidder],
						config: parent.state.prebid.bidderConfig[bidder]
					};
					parent.log('Prebid: Bidder configuration for ' + bidder,  bidderConfig);
					advpbjs.setBidderConfig( bidderConfig );
				});

				// Use ID5 for PPID
				advpbjs.getUserIdsAsync().then(function (userIds) {
					let ppid = JSON.parse(decodeURIComponent(window.localStorage.getItem('id5id'))).gp;
					if (ppid) {
						parent.Googletag.setPPID(ppid);
					}
				});

				// Global bidder settings
				advpbjs.bidderSettings = this.getBidderSettings();
			},
			getID5pdString: function() {
				
				let pdKeys = {
					8: document.location.href,
					9: document.location.hostname,
					10: parent.IPLookup.get('query'),
					12: window.navigator.userAgent, 									
				}

				// convert the key/values into a querystring format
				let pdRaw = Object.keys(pdKeys).map(key => key + '=' + pdKeys[key]).join('&');

				// base64 encode the raw string; this is the final value
				return btoa(pdRaw);
			},
			addAdUnits: function(unitBidders) {
				// Do not continue without prebid
				if (!parent.state.prebid.loaded) {
					return false;
				}
				advpbjs.addAdUnits( unitBidders );

				// NoBid carbonizer engine, if present 
				if (typeof nobidCarbonizer !== 'undefined') {
					nobidCarbonizer.carbonizeAdunits(unitBidders);
				}
			},
			removeAdUnits: function(slotId) {
				// Do not continue without prebid
				if (!parent.state.prebid.loaded) {
					return false;
				}
				advpbjs.removeAdUnit(slotId);
			},
			requestBids: function(slotIds, callback) {

				// Do not continue without prebid
				if (!parent.state.prebid.loaded) {
					return false;
				}
				
				// Do not continue with an empty slot list 
				if (!slotIds || slotIds.length == 0) {
					return false;
				}
				
				parent.log('Prebid: requestBids called ', slotIds);
				
				let PrebidCallback = function(advpbjs,slotIds,callback) {
					return function() {
						advpbjs.setTargetingForGPTAsync( slotIds );
						callback();
					}
				}

				advpbjs.requestBids({
					timeout: parent.Prebid.getTimeout(), 
					adUnitCodes: slotIds,
					bidsBackHandler: PrebidCallback(advpbjs,slotIds,callback)
				});
	
				return true;
			}
		}
	})(this,advpbjs,googletag);

	//
	// Module: Googletag
	//
	this.Googletag = (function(parent,googletag){
		// Defaults
		parent.state.googletag = {
			collapseEmptyDivs: false,
			singleRequestMode: false, 
		}
		return {
			// Load GPT Service
			load: function() {
				var a = document,
					b = a.createElement("script");
				a.location.protocol, b.type = "text/javascript", b.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
				var c = document.getElementsByTagName("head")[0];
				c.insertBefore(b, c.firstChild)
			},
			build: function() {
				// Single Request Mode - if enabled
				if (parent.state.googletag.singleRequestMode) {
					parent.log('Googletag: Enabling Single Request Mode');
					googletag.pubads().enableSingleRequest();
				} 
				
				// Collapse empty divs - if enabled
				if (parent.state.googletag.collapseEmptyDivs) {
					parent.log('Googletag: Collapsing empty DIVs');
					googletag.pubads().collapseEmptyDivs();
				} 

				// Always disable initial load - we require thsi for the bidders
				googletag.pubads().disableInitialLoad();
				
				// Enable services - This must happen:
				//   - AFTER disableInitialLoad() & enableSingleRequest()
				//   - BEFORE calls to unit.display() or any ad load calls 
				googletag.enableServices();
				
				parent.log('Googletag: Initial Load disabled & Services Enabled!');
			},
			config: function(key, setting) {
				switch (key) {
					// Values that must be boolean 
					case 'collapseEmptyDivs':
					case 'singleRequestMode':
						parent.state.googletag[key] = (setting) ? true : false;
						return true;
						break;
				}
				return false;
			},
			setPPID: function(ppid) {
				parent.log('Googletag: Using PPID: ' + ppid);
				googletag.pubads().setPublisherProvidedId(ppid);
			}, 
			getCollapseEmptyDivs: function() {
				return parent.state.googletag.collapseEmptyDivs;
			},
			// Get Slots
			getSlots: function() {
				return googletag.pubads().getSlots();
			},
			destroySlots: function(slotRefs) {
				return googletag.destroySlots(slotRefs);
			}, 
			// Get targeting map for given DFP Slot
			getTargetingMap: function(Slot) {
				return Slot.getTargetingMap();
			},
			// Get Element Id
			getElementId: function(Slot) {
				return Slot.getSlotElementId();
			},
			// Find Element Id from Unit Path
			findElementIdByPath: function(slotUnitPath) {
				let map = googletag.pubads().getSlotIdMap();
				if (map[slotUnitPath]) {
					return map[slotUnitPath].getSlotElementId();
				}
				return null;
			}
			
		}
	})(this,googletag);


	//
	// Module: LazyLoader
	//
	this.LazyLoader = (function(parent,googletag,advpbjs){
		// Defaults
		parent.state.lazyloader = {
			enable: false, 
			ready: false, 
			fetchMarginPercent: 100, 
			mobileScaling: 1.5,
			observers: [], 
			targets: []
		}
		return {
			setMargin: function(val) {
				parent.state.lazyloader.fetchMarginPercent = val;
			},
			setMobileScaling: function(val) {
				parent.state.lazyloader.mobileScaling = val;
			},
			setEnable: function(state) {
				// Only enable on browsers that support IntersectionObserver
				if (state)
					parent.state.lazyloader.enable = (typeof IntersectionObserver == 'function');
				else 
					parent.state.lazyloader.enable = false;
			},
			isEnabled: function() {
				return (parent.state.lazyloader.enable == true);
			},
			build: function () {
				if (parent.state.lazyloader.enable) {
					
					// Setup the default observer
					let fetchMarginPercent = parent.state.lazyloader.fetchMarginPercent;
					parent.state.lazyloader.observers[ fetchMarginPercent ] = this._createObserver(fetchMarginPercent);
					
					// Check all the possible queued targets, grouped by intersection margin 
					parent.state.lazyloader.targets.forEach(function(targets, marginPercent) {
						let observer = this._getObserver(marginPercent);
						for (var i=0; i<targets.length; i++)  {
							parent.log('LazyLoader: Observing queued ' + targets[i].id + ' at ' + marginPercent);
							observer.observe( targets[i] );
						}
					});
					
					// Indicate LazyLoad is ready 
					parent.state.lazyloader.ready = true;
				}
			},
			_createObserver: function(fetchMarginPercent) {
				
				// The fetch margin is adjusted for Mobile devices 
				var rootMargin = (parent.isMobile) 
					? fetchMarginPercent * parent.state.lazyloader.mobileScaling
					: fetchMarginPercent;
				parent.log('LazyLoader: Creating observer at ' + rootMargin + '% margin, original: ' + fetchMarginPercent);
				
				// Setup and save the observer
				let options = {
					root: null, 
					rootMargin: rootMargin+'%',
					threshold: 0
				}
				return new IntersectionObserver(this._callback(parent,googletag,advpbjs), options);
			},
			_getObserver: function(fetchMarginPercent) {
				
				// A null margin percentage will return the default observer
				if (fetchMarginPercent == null) 
					fetchMarginPercent = parent.state.lazyloader.fetchMarginPercent;
								
				// Create the requested observer if it doesn't exist
				if (!parent.state.lazyloader.observers.hasOwnProperty(fetchMarginPercent)) {
					parent.state.lazyloader.observers[ fetchMarginPercent ] = this._createObserver(fetchMarginPercent);
				}
				
				return parent.state.lazyloader.observers[fetchMarginPercent];
			}, 
			_callback: function(parent,googletag,advpbjs) {
				return  function(entries, observer) {
					
					parent.log('LazyLoader: Intersection of ' + entries.length);
					
					var unitsToLoad = [];
					
					// Check each of the entries observed
					for (var i=0; i<entries.length; i++)  {
						
						// If we intersected at the requested margin 
						if (entries[i].isIntersecting) {
							
							parent.log('LazyLoader: ' + entries[i].target.id + ' is near Viewport');
							
							// Indicate this slot should be requested
							unitsToLoad.push( parent.Units.getUnitById(entries[i].target.id) );
							
							// Remove target from observer
							observer.unobserve(entries[i].target);
						}
					}
					
					// Start the ad request if slots should load
					if (unitsToLoad.length > 0) {
						var adRequest = new AdCall(parent,googletag,advpbjs);
						adRequest.setUnits( unitsToLoad );
						adRequest.start();
					}	
				}
			}, 
			watch: function(units) {

				// Convert single unit to array of units 
				if (!Array.isArray(units)) {
					units = [ units ];
				}
				
				// Add each unit to the observer
				for (var i=0; i<units.length; i++) {
					
					// Find the element on page
					var target = document.getElementById(units[i].id);
					
					// Add the watch for the target 
					if (units[i].dfpRef && target) {
						this._watch( target, units[i].lazyLoadMargin );
					}
				}				
			},
			_watch: function(target, marginPercent) {
				// Only if supported
				if (parent.state.lazyloader.enable) {
					
					// LazyLoad is ready
					if (parent.state.lazyloader.ready) {
						let observer = this._getObserver(marginPercent);
						parent.log('LazyLoader: Observing ' + target.id)
						observer.observe(target);
						
					// Lazyload is NOT ready, queue this target for the given marginPercent
					} else {
						if (!parent.state.lazyloader.targets.hasOwnProperty(marginPercent)) {
							parent.state.lazyloader.targets[ marginPercent ] = [];
						}
						parent.log('LazyLoader: Queing observation of ' + target.id + ' at ' + marginPercent)
						parent.state.lazyloader.targets[ marginPercent ].push( target );
					}
					
				}
			}
		}
	})(this,googletag,advpbjs);
	

	//
	// Module: Units
	//
	this.Units = (function(parent,googletag){
		// Defaults
		parent.state.units = {
			units: [],
			sizemaps: [], 
			unitAdvallyTagOverride: [],
			defaultSlot: '',
			firstScanComplete: false, 
		}
		// Module functions
		return {
			count: function() {
				return parent.state.units.units.length;
			},
			create: function(slot, sizes, id) {
				// Lookup an old unit first
				let oldUnit = this.getUnitById(id);
				if (oldUnit) {
					return oldUnit;
				} else {
					var newUnit = new AdvallyUnit(id, slot, sizes);
					parent.state.units.units.push( newUnit );
					return newUnit;
				}
			},
			destroy: function(id) {
				for (var i=0; i<parent.state.units.units.length; i++) {
					if (parent.state.units.units[i].id == id) {
						return parent.state.units.units.splice(i, 1);
					}
				}
			}, 
			createSizemap: function(name) {
				let newSizemap = new AdvallySizeMap();
				parent.state.units.sizemaps[ name ] = newSizemap;
				return newSizemap;
			},
			// Pass a tag override for a given id
			// Override a setting of AdvallyTag like "data-NAME"
			// Type is "NAME".  Value is the overriden value
			prepareOverride: function (slotId, setting, config) { 
				// Setup "override" with some default settings 
				// I'd use Object.assign(..) if it wasn't for IE11 :(
				let override = {
					value:		config.value ? config.value : null, 
					valueMobile:config.valueMobile ? config.valueMobile : null, 
					segment:	config.segment ? config.segment : null
				}
				// Continue if we have the required config 
				if (slotId && setting) {
					
					// Create the override container for this slot ID if missing 
					if (typeof parent.state.units.unitAdvallyTagOverride[slotId] != 'object')
						parent.state.units.unitAdvallyTagOverride[ slotId ] = [];
					
					// Create the setting container for this slot if missing 
					if (typeof parent.state.units.unitAdvallyTagOverride[slotId][setting] != 'object')
						parent.state.units.unitAdvallyTagOverride[slotId][ setting ] = [];
					
					// Save the override block 
					parent.state.units.unitAdvallyTagOverride[ slotId ][ setting ].push(override);
					return true;
				}
				return false; 
			}, 
			// Gets an overridden value if one exists, or use default
			getOverrideValue: function (slotId, setting) {
				if (typeof parent.state.units.unitAdvallyTagOverride[slotId] == 'object') {
					if (typeof parent.state.units.unitAdvallyTagOverride[slotId][setting] == 'object') {
						for (let i=0; i<parent.state.units.unitAdvallyTagOverride[slotId][setting].length; i++) {
							// Create a shortcut to the overide for this slot ID and setting key 
							let override = parent.state.units.unitAdvallyTagOverride[slotId][setting][i];

							// Check the Site Segment of this override, if any 
							if (parent.SiteSegment.found(override.segment)) {
								// Return the mobile value if present on mobile devices, or the primary override 
								return (parent.isMobile && override.valueMobile) ? override.valueMobile : override.value;
							}
						}
					}
				}
				return false;
			},
			getSizemap: function(name) {
				return (typeof parent.state.units.sizemaps[ name ] != 'undefined')
					? parent.state.units.sizemaps[ name ]
					: false;
			}, 
			getUnits: function() {
				return parent.state.units.units; 
			},
			getUnitById: function(id) {
				for (var i=0; i<parent.state.units.units.length; i++) {
					var Unit = parent.state.units.units[i];
					if (Unit.id == id) {
						return Unit;
					}
				}
				return false;
			},
			getUnitsById: function(slotIds) {
				var Units = [];
				// Given the list of Slot IDs, finds all Units
				parent.state.units.units.forEach(function(unit){
					if (slotIds.indexOf(unit.id) != -1) {
						Units.push( unit );
					}
				});
				return Units;
			},
			firstScanComplete: function() {
				return parent.state.units.firstScanComplete;
			},
			setDefaultSlot: function(name) {
				parent.state.units.defaultSlot = name;
			},
			getDefaultSlot: function() {
				return parent.state.units.defaultSlot;
			},
			numUnits: function() {
				return parent.state.units.units.length;
			},
			refresh: function(unitIds) {
				
				// Use given units or default to all 
				if (Array.isArray(unitIds) && unitIds.length > 0) {
					var units = this.getUnitsById( unitIds );
				} else {
					var units = this.getUnits();
				}
				
				// Load the unit
				if (units && units.length > 0) {
					parent._displayCB(parent,googletag,advpbjs,units);
				}
			}, 
			// Force reload a unit by undoing the last view (creative was blocked)
			reload: function(unitId) {
				let unit = this.getUnitById(unitId);
				// If the unit is found and Last Display is set - trigger a refresh 
				// We check Last Display in case muleiple events trigger reload() too quickly.  We will only do this once.
				if (unit && unit.lastDisplay) {
					unit.undoView();
					parent._displayCB(parent,googletag,advpbjs,[unit]);
				}
			},
			build: function() {
				
				parent.log('Units: Predefined Units: ' + this.numUnits() );

				// Automatically add AdvallyUnits not already listed
				this._scan();

				// Convert all units defined in Advally to DFP
				for (var i=0; i<parent.state.units.units.length; i++) {

					// Shortcut
					var unit = parent.state.units.units[i];

					// If in Compatability Mode or the unit exists, define!
					//if (parent.getConfig('compatabilityMode') || 
					if (parent.Page.doesElementIDExist( unit.id )) {
						unit.register(parent,googletag);
					}
				}
				
				// Track when ads are displayed
				var slotRenderEndedCallback = function(parent) {
					return function (event) {
						
						// Set global switch to track when ads were displayed
						parent.setAdsLoaded(true);
						
						// Track last load of individual Units
						var slotElementId = event.slot.getSlotElementId();
						var unit = parent.Units.getUnitById(slotElementId);
						if (unit) {
							parent.log('Units: Event "slotRenderEnded" on ' + slotElementId );
							unit.triggerEvent('slotRenderEnded', event);
						}
					}
				}
				googletag.pubads().addEventListener('slotRenderEnded', slotRenderEndedCallback(parent));
				
				// Track when ads are viewable 
				var impressionViewableCallback = function(parent) {
					return function (event) {
						
						// Track last load of individual Units
						var slotElementId = event.slot.getSlotElementId();
						var unit = parent.Units.getUnitById(slotElementId);
						if (unit) {
							parent.log('Units: Event "impressionViewable" on ' + slotElementId );
							unit.triggerEvent('impressionViewable', event);
						}
					}
				}
				googletag.pubads().addEventListener('impressionViewable', impressionViewableCallback(parent));
				
			},
			newTag: function(tag) {
				
				// Add the tag to the Advally Units system 
				var unit = this._addDynamicUnit(tag);
				
				// Tag was added succesfully, register with Googletag
				if (unit) {
					unit.register(parent,googletag);
					return unit; 
				}
				
				return false;
			}, 
			_scan: function() {

				// Find Tags that are defined on page
				let tags = document.getElementsByClassName('AdvallyTag');
				
				// Flag to check if the page has been scanned for units the first time 
				parent.state.units.firstScanComplete = true;

				parent.log('Units: Page contains ' + tags.length + ' AdvallyTag units');

				for (var i=0; i<tags.length; i++) {
					// Only activate visible tags 
					if (parent.isVisible(tags[i])) {
						this._addDynamicUnit(tags[i]);
					}					
				}
			},
			_addDynamicUnit: function(tag) {

				var sizes = [];
				var Unit = false;
				
				// Indicate this tag was scanned
				tag.classList.add("scanned");

				// Use or generate an ID for this DIV
				if (!tag.id) {
					tag.id = this._genId(tag); 
				}
				parent.log('Units: New AdvallyTag #' + tag.id);
				
				// These settings can be overridden 
				let overridable = [ 'slot', 'size', 'autosize', 'sizemap', 'multiple', 'refreshinterval', 'lazyloadmargin', 'autobidders', 'minwidth', 'maxwidth', 'oop' ]; // 'jigsaw', 
				overridable.forEach(function(setting){
					
					// Gets an override value if one exists 
					let overrideVal = parent.Units.getOverrideValue(tag.id, setting);
					
					// Use a value if we have one 
					if (overrideVal !== false) {
						
						// Size and Autosize override the other 
						if (setting == 'size' || setting == 'autosize') {
							tag.dataset.autosize = '';
							tag.dataset.size = '';
						}
						
						// Save the new override value 
						tag.dataset[setting] = overrideVal;
					}
				})

				// Choose the slot to use
				if (!tag.dataset.slot) {
					if (parent.Units.getDefaultSlot()) {
						tag.dataset.slot = parent.Units.getDefaultSlot();
					} else {
						parent.warn('Unit ' + tag.id + ' has no slot and no default given. ');
						return false;
					}
				}
				
				// Window size restrictions
				if (tag.dataset.minwidth) {
					if (parent.windowWidth() < tag.dataset.minwidth) {
						parent.warn('Unit ' + tag.id + ' has minimum screen width ' + tag.dataset.minwidth + 'px.  Window is too small');
						return false;
					}
				}
				if (tag.dataset.maxwidth) {
					if (parent.windowWidth() > tag.dataset.maxwidth) {
						parent.warn('Unit ' + tag.id + ' has max screen width ' + tag.dataset.maxwidth + 'px.  Window is too big');
						return false;
					}
				}

				// Static sizes given.  Verify string is somewhat valid 
				if (tag.dataset.size && tag.dataset.size!='undefined') {
					sizes = parent.comaStrToArr(tag.dataset.size);
				// Autosizes given
				} else if (tag.dataset.autosize) {
					
					// Check how much width this slot has available
					var availableWidth = this._widthAvail(tag.parentElement);

					// Jigsaw allows autosize tags to load multiple smaller ads in a superleaderboard slot
//					if (parent.Jigsaw.available(availableWidth) && (tag.dataset.jigsaw == 'true' || tag.dataset.jigsaw === true) ) {
//						sizes = parent.Jigsaw.make(tag);
//					} else {
						var multiple = tag.dataset.multiple=='true' ? true : false; 
						sizes = this._autoSizes(tag.dataset.autosize, multiple, availableWidth);
//					}

				}
				
				// Make sure the container is max width for fluid tags
				if (tag.style.width == '' && sizes.indexOf('fluid') != -1) {
					tag.style.width = '100%';
				}
 
				// Create the unit if we have a list of sizes
				if (sizes.length > 0) {
					this._setFixedHeight(tag, sizes);
					Unit = parent.Units.create(tag.dataset.slot, sizes, tag.id);
//					tag.dataset.created = true;
					parent.log('Units: Created ' + tag.id);
				} else {
					parent.warn('Units: No sizes found');
				}

				// Add any extra settings for this unit
				if (Unit) {
					
					// Handle SmartRefresh flag
					if (tag.dataset.smartrefresh == "true") {
						Unit.smartRefresh = true;
					} else if (tag.dataset.smartrefresh == "false") {
						Unit.smartRefresh = false;
					}
					
					// If the slot has a defined sizemap 
					if (tag.dataset.sizemap) {
						Unit.useSizemap(tag.dataset.sizemap);						
					}
					
					// Handle the refresh interval setting 
					if (tag.dataset.refreshinterval) {
						Unit.setRefreshInterval(tag.dataset.refreshinterval);
					}
					
					// Configure lazyload margin 
					if (tag.dataset.lazyloadmargin) {
						Unit.setLazyLoadMargin(tag.dataset.lazyloadmargin);
					}

					// Define the slot is Out Of Page
					if (tag.dataset.oop) {
						Unit.setOOP(tag.dataset.oop);
					}
					
					// Disable additional bidders (GAM only)
					if (tag.dataset.autobidders == 'false') {
						Unit.addBidders = false; 
					}

					// Setup additional targeting
					if (tag.dataset.targeting) {
						Unit.setTargetingFromQueryStr( tag.dataset.targeting );
					}
				}

				return Unit;
			},
			_genId: function(tag) {

				// Determien the tag prefix 
				let prefix = (tag.dataset.nameprefix) ? tag.dataset.nameprefix : this._genIdBasename(tag.dataset.size, tag.dataset.autosize);
				
				// get the counter for this prefix 
				let count = this._genIdCount(prefix);
				
				return prefix + '-' + count; 
			}, 
			_genIdBasename: function (sizes, autosize) {
				var baseName = 'AdvallyTag-' + parent.getConfig('site'); 
				var size = 'unknown';
				
				// Make a list of every possible size for this tag
				var allsizes = sizes ? sizes : autosize;
				if (allsizes) {
					var sizesArr = allsizes.toLowerCase().split(',');
					
					// Use the first size in the ID
					for (var i=0; i<sizesArr.length; i++) {
						var size = sizesArr[i].trim();
						if (sizesArr[i].trim().length > 0) {
							size = sizesArr[i].trim();
							break;
						}
					}
					
				}

				return baseName + '-' + size;
			},
			_genIdCount: function (prefix) {
				let count = 0;
				do {
					++count;
				} while (document.getElementById(prefix+'-'+count))
				return count;
			}, 
			// Get available width of container
			_widthAvail: function(element) {

				// Find the overall width of the element 
				let domRect = element.getBoundingClientRect();
				let totalWidth = Math.round( domRect.width );
				
				// Find dimensions that may need to be deducted from the available width 
				let paddingLeft = Math.round(this._getStyle(element, 'padding-left'));
				let paddingRight = Math.round(this._getStyle(element, 'padding-right'));
				let borderLeft = Math.round(this._getStyle(element, 'border-left'));
				let borderRight = Math.round(this._getStyle(element, 'border-right'));
				
				// Calculate the actually available width 
				let availableWidth = totalWidth-paddingLeft-paddingRight-borderLeft-borderRight;
				parent.log('Units: Max Width: ' + totalWidth + 'px - ' + 'Padding: ' + paddingLeft + 'px, ' + paddingRight + 'px - Border: ' + borderLeft + 'px, ' + borderRight + 'px');
				parent.log('Units: Available width in parent: ' + availableWidth + 'px');

				return availableWidth;
			},
			// Given a list of auto sizes, returns a correct array
			_autoSizes: function(given, multiple, availableWidth) {
				
				// Get the list of given sizes
				// Returns something like [ [728,90], [300,250], 'fluid', [1,1] ]
				var givenSizes = parent.comaStrToArr(given);

				var sizes = [];

				// Loop possible predefined size labels
								if (givenSizes[0] == "superleaderboard") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,250]);
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 320) {
						 
						sizes.push([320,50]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "superleaderboard2") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,250]);
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 320) {
						 
						sizes.push([320,50]);
						 
						sizes.push([320,100]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "superleadermpu") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,250]);
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 300) {
						 
						sizes.push([300,250]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "leaderboard") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 320) {
						 
						sizes.push([320,50]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "leaderboard2") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 320) {
						 
						sizes.push([320,50]);
						 
						sizes.push([320,100]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "leadermpu") {

										if (availableWidth >= 970) {
						 
						sizes.push([970,90]);
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 728) {
						 
						sizes.push([728,90]);
											} else 
										if (availableWidth >= 300) {
						 
						sizes.push([300,250]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
								if (givenSizes[0] == "mpu") {

										if (availableWidth >= 300) {
						 
						sizes.push([300,600]);
						 
						sizes.push([300,250]);
											} else 
					 
					{}
//					sizes.push(['fluid']);

				} else 
				 
				{ /* Not using label for autosize */ }

				// Loop each given size
				for (var x=0; x<givenSizes.length; x++) {
					
					// Without the multiple flag, exit once we have any size
					if (sizes.length > 0 && !multiple) {
						break;
					}
					
					// Fluid doesn't need a size 
					if (givenSizes[x] == 'fluid') {
						sizes.push(givenSizes[x]);

					// Only consider numeric sizes 
					} else if (Array.isArray(givenSizes[x]) && givenSizes[x][0] <= availableWidth) {
						sizes.push(givenSizes[x]);
					}

				}
				
				return sizes;
			},
			_setFixedHeight: function(tag, sizes) {
				
				// If collapseEmptyDivs is set
				if (parent.Googletag.getCollapseEmptyDivs()) {
					return false;
				} 
				
				// Abort if all the hights aren't the same
				var height = 0;
				for (var i=0; i<sizes.length; i++) {
					// Fluid should never get fixed height 
					if (sizes[i] == 'fluid') {
						parent.log("Units: Not setting fixed height on fluid tag #" + tag.id);
						return false;
					}
					// First height
					if (i == 0) {
						height = sizes[i][1];
					// It matched past one
					} if (height == sizes[i][1]) {
						// Do nothing!
					// Didn't match, so quit
					} else {
						return false;
					}
				}
				
				// Fix height of unit if not a 1x1
				if (height > 1) {
					tag.style.height = height+'px';
					tag.style.maxHeight = height+'px';
					tag.style.minHeight = height+'px';
					parent.log("Units: Setting " + tag.id + " to fixed minimum height " + height + "px");
				}
				
				return true;
			}, 
			_getStyle: function(element, styleName){
				// Modern browsers support getComputedStyle() - Which gives a computed CSS style for an element
				// Find the computed style from the primary document and extract the requested style 
				let value = document.defaultView.getComputedStyle(element, "").getPropertyValue(styleName);
				// Remove units
				value = value.replace('px','');
				value = value.replace('em','');
				value = value.replace('%','');
				// If not a number, return zero, otherwise return a decimal 
				return value ? parseFloat(value) : 0;
			}
		}
	})(this,googletag);
	
	
	//
	// Module: Domino Slider 
	//
	this.Domino = (function(parent,googletag,advpbjs){
		// Defaults
		parent.state.domino = {
			queue: [], 
		};
		// Module functions
		return {
			add: function(conf) {
				if (typeof parent.state.domino.queue == 'object')
					parent.state.domino.queue.push(conf);
				else
					this._setup(conf);
			},
			_setup: function(conf) {
				
				/*
				conf.id
				conf.name
				conf.segment
				conf.slot
				conf.target
				conf.bottom_target 
				*/
			
				parent.log('Domino: Starting ' + conf.name);
				
				if (parent.SiteSegment.notFound(conf.segment)) {  
					parent.log('Domino: Site Segment not found ' + conf.segment);
					return false;
				} 
				
				// Find if the target area exists
				let targetContainer = document.querySelector( conf.target );
				if (!conf.target || !targetContainer) {
					parent.log('Domino: ' + conf.target + ' not found');
					return false;
				}
				
				// Find if the limiting unit exists 
				let bottomLimit = document.querySelector( conf.bottom_target );
				if (!conf.bottom_target || !bottomLimit) {
					parent.log('Domino: Limiter ' + conf.bottom_target + ' not found');
					return false;
				}
				
				// State trackign & setup object
				let state = {
					id: conf.id, 
					target: null, 
					follower: null, 
					slot: conf.slot, 
					botlimit: bottomLimit,
					adCount: 0, 
				}
				
				// Prepare our target container and follower for IntersectionObserver
				state.target = document.createElement('div');
				state.target.classList.add('AdvallyDomino');
				state.target.id = "domino-"+conf.id;
				state.follower = document.createElement('div');
				state.follower.id = "domino-follower-"+conf.id;
				
				// Write the target and follower to the page 
				// <targetContainer> 
				//   ... 
				//   <target>
				//     <follower>
				state.target.appendChild(state.follower);
				targetContainer.appendChild(state.target);
		
				// Setup and save the observer
				let options = {
				  root: null, 
				  rootMargin: '100%',
				  threshold: 0
				}
				let observer = new IntersectionObserver(this._CreateDomino(state,parent), options);
			
				// Start watching follower 
				observer.observe( state.follower );
				
			},
			_getCSS: function() {
				return '.AdvallyDomino { position: relative; }\
					.AdvallyDominoSlider { height: 150vh; margin: 0; }\
					.AdvallyDominoPiece { text-align: center; min-height: 250px; position: -webkit-sticky; position: sticky; top: 10px; margin-bottom: 10px; }';
			},
			_CreateDomino: function(state,parent) {
				return function(entries, observer) {
					parent.log("Domino: " + state.id + " - Callback Triggered");
					
					// Get viewport height
					//let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
					let vh = parent.windowHeight();
		
					// Get Bounding Rectangles for follower and bottom
					let followerRect = state.follower.getBoundingClientRect();
					let botlimitRect = state.botlimit.getBoundingClientRect();
					
					// Only add a new entry if intersecting is true, OR we scrolled past the follower (on load)
					if (entries[0].isIntersecting || followerRect.bottom < vh){
						
						// Extraneous logging 
						parent.log("Domino: " + state.id + " - Is Intersecting: " + entries[0].isIntersecting);
						parent.log("Domino: " + state.id + " - Follower is above viewport?: " + (followerRect.bottom<0) );
						
						// Skip adding slides if the foller has no location data (not visible)
						if (followerRect.top == 0 && followerRect.bottom == 0 && followerRect.left == 0) {
							parent.log("Domino: Follower seems hidden. Aborting.");
							return;
						}
						
						// Only add more if there is room
						if (botlimitRect.bottom > followerRect.bottom+vh) {
							let AdId = ++state.adCount;
							
							parent.log("Domino: " + state.id + " - Creating Slide Ad #" + AdId);
							
							// Make a new slider 
							let AdvallyDominoSlider = document.createElement('div');
							AdvallyDominoSlider.classList.add( 'AdvallyDominoSlider' );
							AdvallyDominoSlider.id = 'AdSlide' + AdId;
							
							// Make a new ad in the AdvallyDominoSlider
							let AdvallyDominoPiece = document.createElement('div');
							AdvallyDominoPiece.classList.add( 'AdvallyDominoPiece' );
							AdvallyDominoPiece.id = 'Ad' + AdId;
							
							// Make a new Ad container
							let gptAd = document.createElement('div');
							gptAd.id = 'AdvallyDominoPiece-Slot-' + AdId;
							gptAd.style.margin = '0px auto';
							gptAd.dataset.smartrefresh = 'false';
							gptAd.dataset.autosize = '300x250,300x600,160x600,120x600';
							gptAd.dataset.multiple = 'true';
							gptAd.dataset.slot = state.slot||parent.Units.getDefaultSlot();
							gptAd.dataset.targeting = "DominoIndex="+AdId;
							
							// Pair the Ad to the Slide and insert 
							AdvallyDominoPiece.appendChild(gptAd);
							AdvallyDominoSlider.appendChild(AdvallyDominoPiece);
							state.target.insertBefore(AdvallyDominoSlider, state.follower);
							
							// Prepare the slot in the Advally system & Googletag 
							let Unit = parent.Units._addDynamicUnit(gptAd);
							Unit.register(parent,googletag);
							advally._displayCB(parent,googletag,advpbjs,[Unit]);


							parent.log("Domino: " + state.id + " - Inserted Ad #" + state.adCount);
							
							// Extraneous logging 
							parent.log("Domino: " + state.id + ' - Follower bottom', state.follower.getBoundingClientRect().bottom );
							parent.log("Domino: " + state.id + ' - Viwport height', vh);
							parent.log("Domino: " + state.id + ' - Target top', state.target.getBoundingClientRect().top );
							
							// Check follower again to see if it's still above viewport
							if ( state.follower.getBoundingClientRect().bottom < vh*2) {
								parent.log("Domino: " + state.id + " - Running Callback again!");
								parent.Domino._CreateDomino(state,parent)(entries, observer);
							}
							
						} 
					} 
				}
			},
			build: function() {

				// Find queued dominoes 
				let count = parent.state.domino.queue.length;
				
				// We have dominoes to setup 
				if (count > 0) {
					
					parent.log('Domino: Executing ' + count + ' queued dominoes');
				
					// Write CSS to page
					parent.appendCSS( this._getCSS() );

					// Execute Injectors
					for (let i=0; i<count; i++) {
						parent.log('Domino: Executing queued domino #' + i);
						var conf = parent.state.domino.queue[i];
						this._setup(conf);
					}
					
					// Dump and disablet the queue 
					parent.state.domino.queue = false;
				}
			}
		}
	})(this,googletag,advpbjs);	
	

	//
	// Module: SmartRefresh
	//
	this.SmartRefresh = (function(parent){
		// Defaults
		parent.state.smartrefresh = {
			enable: false,  
			interval: 45, 
			refresh_count: 0, 
			timer: false, 
			advertiserIdWhitelist: null,
			advertiserIdBlacklist: null, 
			max_refresh_count: false, 
			max_slot_refresh_count: false, 
			stop_after_unfilled_count: false, 
			ignore_viewability: false
		};
		// Module functions
		return {
			enable: function(enable){
				parent.state.smartrefresh.enable = enable;
			}, 
			config: function(key, value) {
				switch (key) {
					// Values we can directly assign, like arrays 
					case 'advertiserIdWhitelist':
					case 'advertiserIdBlacklist':
						parent.state.smartrefresh[key] = value;
						return true;
						break;
					// Values that must be numeric and above 0
					case 'interval': 
					case 'max_refresh_count': 
					case 'max_slot_refresh_count':
					case 'stop_after_unfilled_count':
						if (parseInt(value) > 0) {
							parent.state.smartrefresh[key] = parseInt(value);
							return true;
						}
						break;
					// Values that must be boolean 
					case 'ignore_viewability':
						parent.state.smartrefresh[key] = (value) ? true : false;
						return true;
						break;
				}
				return false; 
			},
			stop: function() {
				if (parent.state.smartrefresh.timer) {
					parent.state.smartrefresh.timer.stop();
				}
			}, 
			build: function() {
			
				// Check if we were enabled 
				if (!parent.state.smartrefresh.enable)
					return false;

				// Start the timer!
				parent.state.smartrefresh.timer = new AdvallyTimer();
				parent.state.smartrefresh.timer.frequency = 2; 
				parent.state.smartrefresh.timer.max = false; 
				parent.state.smartrefresh.timer.action = this._callback(parent);
				parent.log('SmartRefresh: Ready');

			}, 
			start: function() {
				if (parent.state.smartrefresh.timer) {
					parent.state.smartrefresh.timer.start();
					parent.log('SmartRefresh: Started');
				}
			},
			advertiserIsRefreshable: function(advertiserId) {
				parent.log('SmartRefresh: Checking if advertiser is refreshable?: ' + advertiserId);
				// Blank advertisers can always be reloaded
				if (advertiserId == null)
					return true; 
				// Advertiser is blacklisted for refreshing
				if (Array.isArray(parent.state.smartrefresh.advertiserIdBlacklist) && parent.state.smartrefresh.advertiserIdBlacklist.indexOf(advertiserId) > -1)
					return false; 
				// No whitelist given, everything can be refreshed
				if (parent.state.smartrefresh.advertiserIdWhitelist == null) 
					return true;
				// Check if creative advertiser is in the refresh whitelist 
				return (parent.state.smartrefresh.advertiserIdWhitelist.indexOf(advertiserId) > -1);
			}, 
			_callback: function(parent) {
				return function() {
					
					// Do not continue if initial ads aren't laoded
					if (!parent.adsLoaded())
						return; 
						
					// Total refresh limit reached - stop refreshing units
					if (parent.state.smartrefresh.max_refresh_count) {
						if (parent.state.smartrefresh.refresh_count >= parent.state.smartrefresh.max_refresh_count) {
							parent.log('SmartRefresh: Max refresh count reached. Stopping.');
							parent.state.smartrefresh.timer.stop();
							return false;
						}
					}
					
					// List of units to refresh
					var toRefresh = [];
					var unfilledCount = 0;
					
					// Loop every unit
					var allUnits = parent.Units.getUnits();
					for (let i=0; i<allUnits.length; i++) {
						
						// Tally the unfilled from all units 
						unfilledCount += allUnits[i].unfilledCount;
						
						// Default refresh settings to pass to the slot 
						let refreshLimit = parent.state.smartrefresh.max_slot_refresh_count;
						let refreshInterval = parent.state.smartrefresh.interval;
						let ignoreViewability = parent.state.smartrefresh.ignore_viewability;

						// Only include unit if SmartRefresh option is enabled
						if (allUnits[i].shouldRefresh(refreshLimit, refreshInterval, ignoreViewability)) {

							// Is this creative allowed to be refreshed 
							if (advally.SmartRefresh.advertiserIsRefreshable(allUnits[i].advertiserId)) {
									
								// Add this ID ot the list of units to refresh
								toRefresh.push( allUnits[i].id );

							}
						}
					}
					
					// Stop refreshing if we have too many unfilled impressions 
//					parent.log('SmartRefresh: Total unfilled impressions: ' + unfilledCount);
					if (parent.state.smartrefresh.stop_after_unfilled_count && unfilledCount >= parent.state.smartrefresh.stop_after_unfilled_count) {
						parent.log('SmartRefresh: Max unfilled impressions reached (' + unfilledCount + '). Stopping.');
						parent.state.smartrefresh.timer.stop();
						return false;
					}
					
					// Refresh viewport ads
//					parent.log('SmartRefresh: Num slots to refresh: ' + toRefresh.length);
					if (toRefresh.length > 0) {
						parent.log('SmartRefresh: Triggering refresh of: ' + toRefresh.join(', '));
						parent.Units.refresh(toRefresh);
						// Increment the overall refresh counter
						parent.state.smartrefresh.refresh_count++;
					}
					
				}
			}
		}
	})(this);
		
	
	//
	// Module: ScrollTracker
	//
	this.ScrollTracker = (function(parent){
		// Defaults
		parent.state.scrolltracker = {
			pageTop: false, 
			pageBottom: false, 
		};
		// Module functions
		return {
			top: function() {
				return this._get('pageTop', function(element){
					
					// Create transparent 1x1 
					element.style.position = 'absolute';
					element.style.top = '0px';
					
					return element;
				});
			}, 
			bottom: function() {
				return this._get('pageBottom', function(element){
					// No style needed if we are appended to the end of the page ;p
					return element;
				});
			}, 
			_get: function(name, createCb) {
				// Tracker is missing - create it 
				if (!parent.state.scrolltracker[name])
				 	parent.state.scrolltracker[name] = this._create(name, createCb);
				// Return the IntersectionObserver
				return parent.state.scrolltracker[name];
			}, 
			// Create the tracking object
			_create: function(name, createCb){
				
				// Create the tracker
				let tracker = document.createElement('div');
				tracker.id = '__AdvallyScrollTracker'+name;
				
				// Create transparent 1x1 
				tracker.style.height = '1px';
				tracker.style.width = '1px';
				tracker.style.opacity = '0';

				// Custom positioning based on location 
				tracker = createCb(tracker);
				
				// Append and save
				document.body.appendChild(tracker);				
				parent.state.scrolltracker.element = tracker;
				
				return tracker;
			}
		}
	})(this);
	
		
	//
	// Module: PageLabel
	//
	this.PageLabel = (function(parent){
		// Defaults
		parent.state.pagelabel = {
			queue: [], 
			labels: {}	// ID: result 
		};
		// Module functions
		return {
			//
			// Adds a label to the page.  Queue to be resolved on build()
			//
			add: function(id, fnName, settings) {
				// Check if the requested function exists 
				if (this._fn[fnName]) {
					
//					parent.log('Page Label: Queuing ' + id);
					
					// Save to the queue 
					parent.state.pagelabel.queue.push({
						id: id,
						fnName: fnName, 
						settings: settings						
					});
					
					return true;
				}
				return false;
			},
			// Fetches the result for a given PageLabel ID 
			get: function(id) {
				return (typeof(parent.state.pagelabel.labels[ id ]) !== 'undefined')
					? parent.state.pagelabel.labels[ id ] 
					: null;
			},
			// Execute the queued function 
			build: function() {
				// Loop all the queued page labels 
				let conf = null;
				while (conf = parent.state.pagelabel.queue.pop()) {
					
					// Determine the value
					let result = this._fn[ conf.fnName ](conf.settings);
					
					// Save the resulting value 					
					parent.state.pagelabel.labels[ conf.id ] = result;
					
					parent.log('Page Label: Resolved ' + conf.id + ': ' + result, conf.fnName, conf.settings);
				}
			},
			// Available PageLabel functions
			_fn: {
				geo_country: function() {
					return parent.IPLookup.get('countryCode');
				},
				device_category: function() {
					return parent.isMobile ? 'mobile' : 'desktop';
				},
				on_mobile_data: function() {
					return parent.IPLookup.get('mobile');
				},
				referer_type: function() {
					return parent.Page.getRefType();
				}, 
				screen_width: function(settings) {
					if (settings.match) {
						let width = parent.windowWidth();
						switch (settings.operation) {
							case 'lt':	return width < settings.match;
							case 'eq':	return width == settings.match;
							case 'gt':	return width > settings.match;
						}
					}
					return null; 
				},
				query_selector_find: function(settings) {
					if (settings.selector) {
						let element = document.querySelector(settings.selector);
						return (typeof(element) != 'undefined' && element != null) ? true : false; 
					}
					return null; 
				}, 
				url_path: function(settings) {
					if (settings.match) {
						let path = document.location.pathname;
						switch (settings.operation) {
							// IE11 doesn't support includes(), endsWith(), or beginsWith().  Sigh.
							case 'begins':		return (path.indexOf(settings.match) == 0);
							case 'ends':		return (path.slice(-settings.match.length) == settings.match);
							case 'contains':	return (path.indexOf(settings.match) >= 0);
							case 'exactly':		return (path == settings.match);
							case 'notbegins':	return (path.indexOf(settings.match) != 0);
							case 'notends':		return (path.slice(-settings.match.length) != settings.match);
							case 'notcontains':	return (path.indexOf(settings.match) == -1);
						}
					}
					return null;
				}, 
				custom: function(settings) {
					if (settings.script) {
						try {
							var F = new Function(settings.script);
							return( F() );
						} catch(error) {
							parent.warn('Custom script failed to execute.', error);
						}
					}
					return null;
				}
			}
			
		}
	})(this);

	
	//
	// Module: SiteSegment
	//
	this.SiteSegment = (function(parent){
		// Defaults
		parent.state.sitesegment = {
			segments: []		// { id: ID, labels: { id: ID, values: [value1,...] }  }
		};
		// Module functions 
		return {
			AND: 'and',
			OR: 'or',
			// Add a Segment and define what labels it should check 
			add: function(id, operator, labelChecks) {
				parent.state.sitesegment.segments[ id ] = {
					id: id, 
					op: operator.toLowerCase(), 
					labels: labelChecks
				};
			},
			// Check a given segment ID, returns true|false if the segment is passed
			_found: function(id) {
				parent.log('Site Segment: Checking ' + id);
				if (typeof(parent.state.sitesegment.segments[id]) !== 'undefined') {

					// Shortcut to segment
					let segment = parent.state.sitesegment.segments[id];
					
					// Counter for number of labels passed 
					let checksPassed = 0;

					// Check every label 
					for (let labelKey in segment.labels) {
						
						let haystack = segment.labels[labelKey];
						let value = parent.PageLabel.get(labelKey);

						if (Array.isArray(haystack)) {
							let arrayNegativeChecksPassed = 0;
							
							for (var x = 0; x < haystack.length; x++) {
								
								// Negative comparison 
								if (haystack[x].charAt(0) == '!') {
									if ( value != haystack[x].substr(1) ) {
										arrayNegativeChecksPassed++;
									}
									
								// Positive Comparison 
								} else {
									if (value == haystack[x]) {
										checksPassed++;
										break;
									}
								}
							}

							// If all candidates passed 
							if (arrayNegativeChecksPassed == haystack.length) {
								checksPassed++;
							}
							
						} else {
							if (value == haystack) {
								checksPassed++;
							}
						}
					}

					// Return result based operator 
					if (segment.op == this.AND && checksPassed == Object.keys(segment.labels).length) {
						parent.log('Site Segment: (AND) Passed ' + id);
						return true;
					}
					if (segment.op == this.OR && checksPassed > 0) {
						parent.log('Site Segment: (OR) Passed ' + id);
						return true;
					}
					
				}
				// Default is to fail 
				parent.log('Site Segment: Failed ' + id);
				return false;
			},
			// Returns TRUE - If the segment is set and it's NOT found
			notFound: function(id) {
				return (id && !this._found(id));
			},
			// Returns TRUE - If the segment is found or not set
			found: function(id) {
				return (!id || this._found(id));
			}
		}
	})(this);

	
	//
	// Module: CustomScript
	//
	this.CustomScript = (function(parent,googletag){
		// Defaults
		parent.state.customscript = {
			started: {
				'go': false, 'fetch': false
			}, 
			queues: {
				'go': [], 'fetch': []
			} 
		};
		// Module functions
		return {
			queue: function(conf) { 
				if (parent.state.customscript.started[conf.type]) {
					parent.log('CustomScript: Calling "' + conf.type + '" script now');
					
					// Execute the custom script now if the segment matches
					if (parent.SiteSegment.found(conf.segment)) {
						try {
							conf.cmd();
						} catch(error){
							parent.error(error);
						}
					}
				} else {
					parent.log('CustomScript: Queuing "' + conf.type + '" script for later');
					parent.state.customscript.queues[conf.type].push( conf );
				}
			}, 
			build: function(type) {
				parent.state.customscript.started[type] = true;
				while( (conf = parent.state.customscript.queues[type].shift()) !== undefined ) {
					try {
						parent.log('CustomScript: Running queued "' + type + '" script');
						if (parent.SiteSegment.found(conf.segment)) {
							conf.cmd();
						}
					} catch(error){
						parent.error(error);
					}
				}
			}
		}
	})(this,googletag);
	

	//
	// Module: CustomStyle
	//
	this.CustomStyle = (function(parent){
		// Defaults
		parent.state.customstyle = {
			started: false, 
			queue: [], 
		};
		// Module functions
		return {
			queue: function(conf) { 
				if (parent.state.customstyle.started) {
					this._write(conf);
				} else {
					parent.log('CustomStyle: Queuing style for later');
					parent.state.customstyle.queue.push( conf );
				}
			}, 
			build: function() {
				parent.state.customstyle.started = true;
				while( (conf = parent.state.customstyle.queue.shift()) !== undefined ) {
					this._write(conf);
				}
			}, 
			_write: function(conf) {
				try {
					if (parent.SiteSegment.found(conf.segment)) {
						parent.log('CustomStyle: Inserting custom style');
						parent.appendCSS(conf.css);
					}
				} catch(error){
					parent.error(error);
				}
			}
		}
	})(this);


	//
	// Module: ContentInjector
	//
	this.ContentInjector = (function(parent){
		// Defaults
		parent.state.contentinjector = {
			injectors: [], 
			started: false, 
		};
		// Module functions
		return {
			add: function(conf) {
				if (parent.state.contentinjector.started)
					this._inject(conf);
				else 
					parent.state.contentinjector.injectors.push(conf);
			},
			_inject: function(conf) {
				
				parent.log('Content Injector: Starting ' + conf.name);
				
				if (parent.SiteSegment.notFound(conf.segment)) {  
					parent.log('Content Injector: Site Segment not found ' + conf.segment);
					return false;
				} 
				
				// Cease processing on devices of the wrong type 
				if (parent.isMobile && !conf.enable.mobile) {  
					parent.log('Content Injector: Not enabled for Mobile');
					return false;
				} 
				if (parent.isDesktop && !conf.enable.desktop) {
					parent.log('Content Injector: Not enabled for Desktop');
					return false; 
				}

				let injectorCallback = function(conf) {
					return function(container,index) {
						return conf.creatives[index](container,conf);	
					}
				}
				
				let injector = new AdvallyContentInjector();
				injector.frequency = (parent.isMobile) ? conf.frequency.mobile : conf.frequency.desktop;
				injector.weightWord = conf.weightWord;
				injector.weightSelector = conf.weightSelector;
				injector.selector = conf.selector;
				injector.minEndWords = conf.minEndWords;
				injector.startReduction = conf.startReduction;
				injector.inject(conf.container, injectorCallback(conf));
				
			},
			build: function() {
				
				let count = parent.state.contentinjector.injectors.length;
				
				parent.log('Content Injector: Executing ' + count + ' queued injections');

				// Execute Injectors
				for (let i=0; i<count; i++) {
					parent.log('Content Injector: Executing queued injector #' + i);
					var conf = parent.state.contentinjector.injectors[i];
					this._inject(conf);
				}
				
				// Trigger other injectors to run immediately 
				parent.state.contentinjector.started = true;
			}
		}
	})(this);	
	
	
	//
	// Module: Page
	//
	this.Page = (function(parent,googletag){
		// Defaults
		parent.state.page = {
			targetingQueue: {},
			injectedQueue: [], 
		};
		// Module functions
		return {
			REF_SEARCH: "search", 
			REF_DIRECT: "direct",
			REF_SOCIAL: "social",
			REF_UNKNOWN: "unknown", 
			setTargeting: function(key, value) {
				// Rules have been started yet 
				if (parent.state.page.targetingQueue != false) {
					if (typeof(parent.state.page.targetingQueue[key]) != 'object')
						parent.state.page.targetingQueue[key] = [];
					parent.state.page.targetingQueue[key].push(value);
				// Rules have started - push targeting now 
				} else {
					this._setTargeting(key, value);
				}
			},
			_setTargeting: function(key, value) {
				googletag.pubads().setTargeting(key, value);
				parent.log('Page: Setting Page Level Key-Value targeting: ' + key + '=' + value);
			},
			// Queue the script injection
			inject: function(containerSelector, position, data) {
				if (parent.state.page.injectedQueue !== false) {
					parent.state.page.injectedQueue.push({
						'selector': containerSelector, 
						'position': position, 
						'data': data
					});
				} else {
					this._inject(containerSelector, position, data);
				}				
			}, 
			_inject: function(containerSelector, position, data) {
				
				parent.log("Page: Injecting into " + containerSelector + " in position: " + position);
			
				// Check site segment if any 
				if (parent.SiteSegment.notFound(data.segment) ) {
					parent.log("Page: Site Segment " + data.segment + " not found");
					return false;
				}
			
				// Find the target
				var container = document.body.querySelector(containerSelector);
				if (!container) {
					parent.log("Page: Injecting container " + containerSelector + " not found");
					return false;
				}

				// Create the document fragment we are going to write
				var frag = document.createDocumentFragment();
				
				// Create the document fragment, if any
				if (data.html) {
					var div = document.createElement('div');
					div.innerHTML = data.html;
					div.classList.add("AdvallyInjectedHTML");
					frag.appendChild( div );
				}
				
				// Append Script block
				if (data.script_block) {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					try {
						script.appendChild(document.createTextNode(data.script_block));
					} catch (e) {
						script.text = code;
					}
					frag.appendChild( script );
				}
				
				// Append Script source
				if (data.script_url) {
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = data.script_url;
					if (data.script_url_key && data.script_url_val) {
						script.setAttribute(data.script_url_key, data.script_url_val);
					}
					frag.appendChild( script );
				}
				
				// Insert into position 
				if (position =='before')
					container.parentNode.insertBefore(frag, container);
				else if (position == 'after')
					container.parentNode.insertBefore(frag, container.nextSibling);
				else if (position == 'first')
					container.insertBefore(frag, container.childNodes[0]);
				else if (position == 'last')
					container.appendChild(frag);
				else if (parseInt(position) > 0) {
					container.insertBefore(frag, container.children[parseInt(position)-1]);
				} else if (parseInt(position) < 0) {
					container.insertBefore(frag, container.children[container.children.length+parseInt(position)+1]);
				}
			
			}, 
			// Given a string of settings in URL format:  key=value&key2=valuea,valueb,valuec& ...
			setTargetingFromQueryStr: function( queryStr ) {
				queryStr.split("&").forEach(function(part) {
					var KeyVal = part.split('=');
					if (KeyVal.length == 2) {
						var Values = KeyVal[1].split(',');
						for (let i=0; i<Values.length; i++) {
							advally.Page.setTargeting( KeyVal[0].trim(), Values[i].trim() );
						}
					}
				});
			},
			// Given a DFP Slot, checks if its on the page
			doesElementIDExist: function(id) {
				var element = document.getElementById( id );
				var exists = (element != null);
				parent.log("Page: Does DIV '" + id + "' Exist? " + (exists ? 'Yes' : 'No') );
				return exists;
			},
			build: function() {

				// Attach the random key for audience segmentation testing
				this._setTargeting('rand_key', this._getRandKey().toString() );		

				// Setup page targeting
				let keys = Object.keys(parent.state.page.targetingQueue);
				for (let i=0; i<keys.length; i++) {
					let key = keys[i];
					let val = parent.state.page.targetingQueue[key];
					this._setTargeting(key, val);
				}
				// Indicate the queue has been emptied 
				parent.state.page.targetingQueue = false;
				
				// Injected slots
				for (let i=0; i<parent.state.page.injectedQueue.length; i++) {
					let toInject = parent.state.page.injectedQueue[i];
					this._inject(toInject.selector, toInject.position, toInject.data);
				}
				// Indicate the queue has been emptied 
				parent.state.page.injectedQueue = false;
				
				// Set the "refid" parameter for all ad requsts 
				let refid = this.getRefType();
				if (refid) {
					this._setTargeting('refid', refid);
				}
			}, 
			// Obtain a Referral ID for this user 
			getRefType: function() {
				try {
					// DIRECT - No referrer
					if (document.referrer == '') {
						return this.REF_DIRECT;
					} else {
						let referrer = new URL(document.referrer);
						
						// SEARCH
						if (this._isRefSearch(referrer.host)) {
							return this.REF_SEARCH;
						// SOCIAL 
						} else if (this._isRefSocial(referrer.host)) {
							return this.REF_SOCIAL;
						// OTHER / UNKNOWN 
						} else {
							return this.REF_UNKNOWN;
						}
					}
				} catch(error){ advally.log(error) }
			},
			_isRefSearch: function(host) {
				let search = /^(.*?\.)?(google|yahoo|bing|duckduckgo|ecosia|baidu)\./gi;
				let result = search.exec(host);
				
				if (result != null) {
//					parent.log('Page: SEARCH - ' + result[1]);
					return true;
				}
			}, 
			_isRefSocial: function(host) {
				let search = /^(.*?\.)?(facebook|pinterest|instagram|stumbleupon|reddit|youtube|linkedin|twitter|t|disq|tumblr)\./gi;
				let result = search.exec(host);
				
				if (result != null) {
//					parent.log('Page: SOCIAL - ' + result[1]);
					return true;
				}
			},
			_getRandKey: function() {
				// 5x 1% - 5x 5% - 3x 10% - 2x 20%
				let b = Math.floor((Math.random() * 100) + 1);
				if (b<=5) b=b;
				else if (b<=30) b = Math.ceil(b/5)*5;
				else if (b<=60) b = Math.ceil(b/10)*10;
				else b = Math.ceil(b/20)*20;
				return b;
			}				
		}
	})(this,googletag);


	//
	// Module: Bidder Manager
	//
	this.Bidders = (function(parent){
		// Defaults
		parent.state.bidders = {
			placements: [],
		};
		// Module functions
		return {
			set: function(placements) {
				parent.state.bidders.placements = placements;
			},
			//
			// Get Bidder config for Prebid
			//
			prebid: function( advSlots ) {
				let prebidSlots = [];

				try {

					// Return prebid rules
					advSlots.forEach(function(advSlot) {
						
						// Get the slot sizes, filter out 1x1 and "fluid"
						let sizes = advSlot.getDisplaySizes()
									.filter(function(item){
										return item!='fluid' && item.toString()!=[1,1].toString()
									});
						
						// Bid on this unit if it has valid sizes
						if (advSlot.id && sizes.length > 0) {
							prebidSlots.push({
								code: advSlot.id,
								bids: this._getSlotBidders(advSlot),
								mediaTypes: {
									banner: { sizes: sizes }
								}, 
								ortb2Imp: {
									instl: advSlot.oop == 'INTERSTITIAL' ? 1 : 0
								}
							});
						}
						
					}, this);
					
				} catch(e) {
					parent.error('Bidders: Could not generate bidders for Prebid', e);
				}

				return prebidSlots;
			},
			//
			// Finds suitable Prebid bidders for the given DFP Slot
			//
			_getSlotBidders: function(advSlot) {

				let Bidders = [];
				
//				parent.log("Bidder: Assembling prebid bidders for Slot: ", Slot.getSlotElementId() );
				
				// Loop each bid Adapter (openx, appnexus, districtm, rubicon, etc...)
				Object.keys(parent.state.bidders.placements).forEach(function(bidder){
					
//					parent.log("Bidder: Search for placement from: " + bidder);
					
					// Find Direct linked bidders 
					let Placements = this._placementsAssignedToSlot(bidder, advSlot);

					// If no bidders, find a unique re-usable placement 
					if (!advSlot.oop && !Placements) {
						Placements = this._placementsUniqueDefault(bidder, advSlot);
					}

					// If no bidders, find a shared re-usable placement 
					if (!advSlot.oop && !Placements) {
						Placements = this._placementsDefault(bidder, advSlot);
					}
					
					// Bidder Placements found
					if (Placements) {
						
						// Generate the prebid-compatible bidders list
						for (var x=0; x<Placements.length; x++) {
							
							// Mark this placement used 
							Placements[x].used = true;
							
							// Some placements have more than 1 parameter block which are listed separately 
							if (Array.isArray(Placements[x].params)) {
								// Array of params, add each one
								for (y=0, ylen=Placements[x].params.length; y < ylen; y++) {
									Bidders.push({ bidder:bidder, params:Placements[x].params[y] });
								}
							} else {
								// If this placement is an Object, push it into the bidders list
								Bidders.push({ bidder:bidder, params:Placements[x].params });
							}
						}
					}

				}, this);
				return Bidders;
			},
			//
			// Given an Advally placement wrapper, checks if the placement can be used for the given slot 
			//
			_placementsDefault: function(bidder, advSlot) {
				
//				parent.log("Bidder: Searching for Default placements from: " + bidder);
				
				// Check all the Placements from this bidder
				for (var x=0, xlen=parent.state.bidders.placements[bidder].length; x < xlen; x++) {
					
					// Shortcut to the unique placement 
					let Placement = parent.state.bidders.placements[bidder][x];
					
					// If this placement is available, used or not 
					if (this._placementAvailable(bidder, Placement, advSlot)) {
						return [ Placement ];
					}
				}
				
				return false; 
			},	
							
			
			//
			// Given an Advally placement wrapper, checks if the placement can be used for the given slot 
			//
			_placementsUniqueDefault: function(bidder, advSlot) {
				
//				parent.log("Bidder: Searching for Unique placements from: " + bidder);
				
				// Check all the Placements from this bidder
				for (var x=0, xlen=parent.state.bidders.placements[bidder].length; x < xlen; x++) {
					
					// Shortcut to the unique placement 
					let Placement = parent.state.bidders.placements[bidder][x];
					
					// If this placement is unused AND available 
					if (Placement.used != true && this._placementAvailable(bidder, Placement, advSlot)) {
						return [ Placement ];
					}
				}
				
				return false; 
			},			
			//
			// Given an Advally placement wrapper, checks if the placement can be used for the given slot 
			//
			_placementsAssignedToSlot: function(bidder, advSlot) {
				
//				parent.log("Bidder: Searching for Assigned placements from: " + bidder);
				
				let Placements = [];
				
				// Check all the Placements from this bidder
				for (var x=0, xlen=parent.state.bidders.placements[bidder].length; x < xlen; x++) {
					
					// Shortcut to the unique placement 
					let Placement = parent.state.bidders.placements[bidder][x];
										
					// If this placement was assigned to this slot 
					if (Placement.unit && Placement.unit == advSlot.id) {
						// Check for availablity and save 
						if (this._placementAvailable(bidder, Placement, advSlot)) {
							Placements.push( Placement );
						}
					}
				}
				
				return (Placements.length>0) ? Placements : false; 
			},
			//
			// Given an Advally placement wrapper, checks if the placement can be used for the given slot 
			//
			_placementAvailable: function(Bidder, Placement, advSlot) {
//				parent.log("Bidder: _placementAvailable(): Evaluating Placement", Placement);

				// Skip placements that can only be used once and are already used 
				if (typeof Placement.reusable != 'undefined' && !Placement.reusable && Placement.used) {
//					parent.log("Bidder: _placementAvailable(): Skipping, single-use placement is already used");
					return false;
				}
				
				// Is this placement slot specific?  Check the slot name
				if (Placement.unit) {
					
					if (advSlot.id != Placement.unit) {
//						parent.log("Bidder: _placementAvailable(): Placement is not intended for this slot");
						return false;
					}
				}

				// Is this placement segment specific, and does it match?
				if (typeof Placement.segment == 'string') {
					
					// Placement is for a segment that isn't found
					if (parent.SiteSegment.notFound(Placement.segment)) {
//						parent.log("Bidder: _placementAvailable(): Skipping, placement segment '"+Placement.segment+"' not active");
						return false;
					}
				}
				
				// This placement serves fixed sizes
				// Make sure the sizes are supported by the slot
				if (Placement.size != null) {
					let SlotSizes = advSlot.getDisplaySizesStr();
					for (var i=0, ilen=Placement.size.length; i<ilen; i++) {
						if (SlotSizes.indexOf(Placement.size[i])==-1){
//							parent.log("Bidder: _placementAvailable(): Skipping, placement supports " + Placement.size[i] + " which isn't supported by slot");
							return false;
						}
					}
				}

				// All checks pased
				return true;
			}
		}
	})(this);


	//
	// Module: Amazon
	//
	this.Amazon = (function(parent,googletag){
		// Defaults
		parent.state.amazon = {
			pubId: false,
			passSchain: false, 
			consentType: false, 
			siteName: null,
			siteDomain: null, 			
			content_taxonomy: [],
		};
		// Module functions
		return {
			config: function(key, value) {
				switch (key) {
					case 'pubId':
					case 'consentType': 
					case 'content_taxonomy':
					case 'siteName':
					case 'siteDomain':
						parent.state.amazon[key] = value;
						return true;
					case 'passSchain':
						parent.state.amazon[key] = Boolean(value);
						return true; 
				}
				return false;
			},
			load: function() {
				// load the apstag.js library if we have a PubID
				if (parent.state.amazon.pubId) {
					parent.appendScriptURL('https://c.amazon-adsystem.com/aax2/apstag.js');
					!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},dpa:function(){q("di",arguments)},rpa:function(){q("ri",arguments)},upa:function(){q("ui",arguments)},_Q:[]};}("apstag",window);
				}
			},
			build: function(){

				// Do not continue without PubID
				if (!parent.state.amazon.pubId) {
					return false;
				}

				// Start the Amazon config 
				let amzConf = {
					pubID: parent.state.amazon.pubId, 
					adServer: 'googletag', 
					signals: {
						ortb2: {
							// site details
							site: {
							  name: parent.state.amazon.siteName, 
							  domain: parent.state.amazon.siteDomain,
							  cattax: 7,
							  cat: parent.state.amazon.content_taxonomy,
							  pagecat: parent.state.amazon.content_taxonomy,
							  sectioncat: parent.state.amazon.content_taxonomy,
							  page: document.location.protocol + '//' + document.location.hostname + document.location.pathname,
							}
						}
					}
					
				};
				
				// If consent is required or specific to GDPR region
				if (parent.state.amazon.consentType == 'GDPR' || parent.state.amazon.consentType===true) {
					amzConf.gdpr = {
						cmpTimeout: 2000
					}
				}
				
				// If consent is required or specific to CCPA/USP region
				if (parent.state.amazon.consentType == 'CCPA' || parent.state.amazon.consentType===true) {
				}						
				
				// Include Supply Chain object if required 
				// https://ams.amazon.com/webpublisher/uam/docs/reference/api-reference.html#apstaginitconfig-callback
				if (parent.getConfig('sellerId') && parent.state.amazon.passSchain) {
					amzConf.schain = {
						complete: 1,
						ver: '1.0',
						nodes: [
							{
							asi: "advally.com", 
							sid: parent.getConfig('sellerId'), 
							hp: 1, 
							}
						]
					}
				}
				
				parent.log("Amazon: Settings passed to apstsg", amzConf);
				apstag.init(amzConf);
				
			},
			_upaSet: function() {
				// Check for a hashed e-mail from FPD
				let emailHash = parent.FPD.getEmail();

				// If we have a hashed e-mail, and a CMP
				if (emailHash) { // && this.hasCMP()) {
					parent.log("Amazon: Using FPD");

					let tokenConfig = {
						hashedRecords: [ 
							{ type:'email', record:emailHash }
						], 
					};
					let callback = function(token) {
						if (token.AIPToken) {
							document.cookie = "AMZN-Token=" + token.AIPToken + "; path=/;";
						}
					}
					apstag.upa(tokenConfig, callback, false);
				}
			},
			fetchBids: function(advSlots, callback) {

				// Do not continue without PubID
				if (!parent.state.amazon.pubId) {
					return false;
				}

				// Renew FPD token if available 
				this._upaSet();

				// Get slot format for Amazon bidder
				let slots = this._uamSlots( advSlots );

				// Do not continue with an empty slot list 
				if (!slots || slots.length == 0) {
					return false;
				}

				parent.log('Amazon: fetchBids called ', slots);

				// Callback to setup Amazon bidder
				apstag.fetchBids({
						slots: slots,
						timeout: advally.Prebid.getTimeout() // Match Prebid timeout
				}, function(bids) {

					parent.log("Amazon: Bids received" , bids);
					
					bids.forEach(function(bid){
						let advUnit = parent.Units.getUnitById(bid.slotID);
						if (advUnit && advUnit.oop) {
							advUnit.setTargeting("amznbid", bid.amznbid);
							advUnit.setTargeting("amzniid", bid.amzniid);
						}
					});

					// Add bidders to googletag and callback
					apstag.setDisplayBids();
					callback();
				});
			
				return true;
			},
			//
			// Get UAM config for GPT slots
			//
			_uamSlots: function( advSlots ) {
				let uamSlots = [];

				// Try building the list of UAM slots 
				try {
					
					// Loop the GPT slots 
					advSlots.forEach(function(advSlot) {
						
						// Get the slot sizes, filter out 1x1 and "fluid"
						let sizes = advSlot.getDisplaySizes()
									.filter(function(item){
										return item!='fluid' && item.toString()!=[1,1].toString()
									});

						// Avoid OOP if not interstitial type 
						if (advSlot.oop && advSlot.oop != 'INTERSTITIAL') {
							return;
						}
					
						// Bid on this unit if it has valid sizes
						if (sizes.length > 0) {
							uamSlots.push({
								slotID: advSlot.id, 
								slotName: advSlot.slot, 
								sizes: sizes
							});
						}
						
					}, this);					
					
				// Catch errors gracefully 
				} catch(e) {
					parent.error('Amazon: Could not generate bidders for UAM', e);
				}
				
				return uamSlots;
			}
		}
	})(this,googletag);
		
	
	// 
	// Module: AdLightning
	// 
	this.AdLightning = (function(parent,advpbjs){
		// Defaults
		parent.state.adlightning = {
			website: 'advally', 
			enableMobile: false,
			enableDesktop: false,
		};
		// Module functions
		return {
			config: function(key, value) {
				switch (key) {
					// Values we can directly assign, like arrays or strings 
					case 'enableMobile':
					case 'enableDesktop':
						parent.state.adlightning[key] = Boolean(value);
						return true;
					case 'website':
						parent.state.adlightning[key] = String(value);
						return true;
				}
				return false;
			},
			build: function() {
				
				// Check we are enabled for the current device
				if (parent.isMobile && !parent.state.adlightning.enableMobile) {
					return false;
				}
				if (parent.isDesktop && !parent.state.adlightning.enableDesktop) {
					return false;
				}

				// Write AL script to head according ot their instructions 
				parent.appendScriptURL('//tagan.adlightning.com/' + parent.state.adlightning.website + '/op.js');
				
				// Setup a callback to listen for blocked ad events 
				let blockedAdCallback = function(parent) {
					return function(event) {
						// Listend for blocked messages from AdLightning
						if (event.data.message === 'ADL_BLOCKED') {
							
							// Lookup the Element ID given the slot path 
							let slotId = parent.Googletag.findElementIdByPath( event.data.adUnit );
							
							// Print alert and refresh 
							parent.log('AdLightning: Ad Blocked on ' + event.data.adUnit + ' - ' + slotId);
							
							// Refresh the slot
							//parent.Units.reload([slotId]);
						}
					}
				}
				
				// Setup the callback event listener for when an ad is blocked
				window.addEventListener('message', blockedAdCallback(parent));
			}
		}
	})(this,advpbjs);


	//
	// Module: Debug
	//
	this.ErrorReport = (function(parent,advpbjs,googletag){
		// Defaults
		parent.state.errorreport = {
			showReportButtons: false, 
			bodyPosition: null, 
		};
		// Module functions
		return {
			// Define the tag element we want to sticky on scroll
			config: function(key, value) {
				switch (key) {
					case 'showReportButtons':
						parent.state.errorreport[key] = Boolean(value);
						break;
				}
				return false; 
			},
			icon: 'data:image/png;base64,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ysidy9eKwc6Kwbazyq6WweXG4bqSxeOLwvr2+6uBvLmGvp6Rt/Pj8NNytMN8uctirMZZp7RrsbZ4uKd0taliq5tzqK9VpOnm75tWpY1QorJBmqlHnYJcn5RDm4dKnoNDm9E1lMg4lcUykv37/b00k7Q2lPXu9qE6lqs4lfPd7Zc7lu/S5408l2xIj3ZdlII+mP///2I2h0hDekcudiYiYgAAALYkUzIAAABBdFJOU/////////////////////////////////////////////////////////////////////////////////////8AMFXsxwAAAAlwSFlzAAAXEQAAFxEByibzPwAAASBJREFUeJxt0ktLw0AQB/BpTUWkDTY0TZNtIFZpNCIV0zYqHvzoXnrTg0rsg6qYVzGGlLSJROzDCkkQduewh/0xu/NflroBclHEXV8/IYE/FGkGA19HdjMn4Ue9aBZd7rcwCESw5amEX241RszeQweDvhRM2+4OPm4ePhAYVxmE952nWC1CyM9nTe8oC2ggJYqVWNds3qyDdZmCz+WjEjdBW6EwX1Q9GVJ4b60MhR2sDxzeEJKGP7i9hl43F7KOWPWh4rYhgeAQBoh6LLHPS8psQLCfwI8nfvqqdd6rsK/l7eLkDNKOryFSxgi6b6wbIRDSRFThdLMyAIX6NzejHTmDLPSuUavBCnCANcBIJcHxHb8AEsDSvCCD9v+dyb9kU796r168IEaDfgAAAABJRU5ErkJggg==', 
			css: '.AdvallyTag.AdvallyReportPosition { position: relative; margin-bottom: 20px; width: fit-content; } ' + 
				 '.AdvallyTag.AdvallyReportPosition .AdvallyReportBtn { position: absolute; top: 100%; }' + 
				 '.AdvallyReportBtn { z-index: 999; display: block; width: 100px; align: center; height: 18px; line-height: 18px; text-shadow: 0 0 black; color: #0E112B; font-size: 11px; padding: 0; cursor: pointer; }' + 
				 '.AdvallyReportBtn:hover { text-decoration: underline; }' + 
				 '.AdvallyReportBtn > img { display: inline-block; height: 20px; width: 20px; vertical-align: middle; position: relative; }' + 
				 '#AdvallyReportBlur { z-index: 2000000001; position: fixed; bottom: 0; top: 0; left: 0; right: 0; background: #888; opacity: 0.75; }' +
				 '#AdvallyReportContainer { box-sizing: border-box; width: 90%; max-width: 400px; z-index: 2000000002; position: fixed; top: 200px; left: 50%; transform: translateX(-50%); font-family: arial, sans-serif; color: #0E112B; text-shadow: 0 0 black; }' +
				 '#AdvallyReportContainer>form { display: block; background: #FFFFFF; border-style: none; margin: 0; padding: 14px; box-sizing: border-box; line-height: 1.2em; }' +
				 '#AdvallyReportContainer>form>strong { font-size: 16px; background: #0E112B; display: block; margin: -14px -14px 8px -14px; padding: 14px; color: #fff; }' +
				 '#AdvallyReportContainer>form>#AdvallyReportCancel { position: absolute; top: 14px; right: 14px; cursor: pointer; }' +
				 '#AdvallyReportContainer>form>label { display: block; padding: 5px 10px; }' +
				 '#AdvallyReportContainer>form>label>input { padding: 0; margin: 0 10px 0 0; }' +
				 '#AdvallyReportContainer>form>p { margin: 1em 0; font-size: smaller; }' +
				 '#AdvallyReportContainer>form>textarea { display: block; border: 1px solid #eee; border-radius: 0px; width: 95%; height: 4.5em; line-height: 1.4em; font-size: 14px; margin: 8px 0; background: #fff; font-family: arial, sans-serif; padding: 8px; }' +
				 '#AdvallyReportContainer>form>input { margin: 10px auto; border: 0px; border-radius: 0px; background: linear-gradient(to right, #E32C8F, #7E4296); padding: 10px 40px; color: #FFF; display: block; cursor: pointer; }' + 
				 '#AdvallyReportContainer>form>span { font-size: smaller; }' + 
				 '#AdvallyReportContainer>form>span>img { vertical-align: middle; }' + 
				 '#AdvallyReportContainer>form>span>a { color: #7E4296; }', 
			reportHtml: '<div class="AdvallyReportBtn"><img src="%ICON%">Report Ad</div>', 
			formHtml: '<div id="AdvallyReportBlur"></div>' +
					  '<div id="AdvallyReportContainer">'+
						'<form>' +
							'<strong>Report Ad</strong>' +
							'<img id="AdvallyReportCancel" src="data:image/png;base64,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">'+ 
							'<p><b>Why are you reporting this ad?</b></p>' +
							'<label><input type="radio" name="whyReportAd" value="Plays Sound">Plays Sound</fieldset></label>' +
							'<label><input type="radio" name="whyReportAd" value="Contains adult content">Contains adult content</fieldset></label>' +
							'<label><input type="radio" name="whyReportAd" value="Breaks the page">Breaks the page</fieldset></label>' +
							'<label><input type="radio" name="whyReportAd" value="Other">Other</fieldset></label>' +
							'<p><b>Additional Information</b></p>' +
							'<textarea placeholder="Who is the advertiser?  What does the ad look like?" name="comment"></textarea>' +
							'<input type="submit" value="Report">' + 
							'<span><img src="%ICON%">Powered by <a href="https://www.advally.com" target=_new>Advally</a></span>' + 
						'</form>' +
					'</div>',
			build: function() {
				// Only continue if showing the report button 
				if (this.enabled()) {
					// Write CSS
					parent.appendCSS( this.css );
				}
			}, 	
			enabled: function() {
				return parent.state.errorreport.showReportButtons;
			}, 
			getButtonFragment: function(Unit) {
				if (this.enabled()) {
					let html = this.reportHtml.replace('%ICON%', this.icon);
					let frag = document.createRange().createContextualFragment( html );
					frag.firstElementChild.addEventListener("click", this._clickReportBtnCb(this, Unit) );
					return frag; 
				}
				return false;
			}, 
			addReportBtn: function(Unit) {
				// Only continue if showing the report button 
				if (this.enabled()) {
				
					// Find the element on page 
					let element = document.getElementById( Unit.id );
					
					// If the element exists add the button 
					if (element && element.classList.contains('AdvallyTag')) {
						
						// Add the positioning attribute to the AdvallyTag for the button 
						element.classList.add('AdvallyReportPosition');
						
						// Remove any old button 
						let oldFrag = element.querySelector('.AdvallyReportBtn');
						if (oldFrag) {
							oldFrag.remove();
						}
						
						// Inject the button into the Unit DIV itself
						let frag = this.getButtonFragment(Unit);
						element.appendChild(frag);
					}
				}
			},
			_clickReportBtnCb: function(self, Unit) {
				return function(e) {
					
					// Find the element to add the form 
					let body = parent.getBody();
					
					// Store the ad targeting data 
					let slotData = self._getSlotData(Unit);

					// Change body position temporarily 
					parent.state.errorreport.bodyPosition = body.style.position;
					body.style.position = 'relative';
					
					// Start creating the form 
					let html = self.formHtml.replace('%ICON%', self.icon);
					let frag = document.createRange().createContextualFragment( html );
					
					// Attach close handlers 
					frag.getElementById("AdvallyReportBlur")
						.addEventListener('click', self._closeReport(parent) );
					frag.getElementById("AdvallyReportCancel")
						.addEventListener('click', self._closeReport(parent) );
					
					// Attach submit handler
					frag.querySelector("form")
						.addEventListener('submit', self._sendReport(self,slotData) );

					// Write the form to the page and focus the textarea
					body.appendChild(frag);
					document.getElementById("AdvallyReportContainer")
						.querySelector('textarea').focus();
				}
			}, 
			_getSlotData: function(Unit) {
				if (Unit && Unit.dfpRef) {
					let slotdata = {
						'id': Unit.id, 
						'unitPath': Unit.dfpRef.getAdUnitPath(),
						'sizes': Unit.dfpRef.getSizes(),
						'targetingMap': Unit.dfpRef.getTargetingMap(),
						'response': Unit.dfpRef.getResponseInformation(),
					};
					return JSON.stringify(slotdata);
				}
				return '';
			}, 
			_closeReport: function(parent) {
				return function(event) {

					// Find the body element to fix 
					let body = parent.getBody();
					
					// Restore the body position
					body.style.position = parent.state.errorreport.bodyPosition;
					parent.state.errorreport.bodyPosition = null;
									
					// Destroy the modal 
					document.getElementById("AdvallyReportContainer").remove();
					document.getElementById("AdvallyReportBlur").remove();
				}
			},
			_sendReport: function(self, slotData) {
				return function (event) {
					try {
						
						// Destination, based on environment
						let postUrl = "https://reporting.advally.com/report";
						
						// Prepare the XHR 
						let xhr = new XMLHttpRequest();
						xhr.open("POST", postUrl, true);
						xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						xhr.onreadystatechange = function() { 
							if (this.readyState === XMLHttpRequest.DONE) {
								if (this.status === 200) {
									self._thankReport();
								} else {
									alert('There was an error submitting your report. Please try again later.');
								}
							}
						}
						
						// Get ad report feedback from the user 
						let whyReportAd = this.querySelector('input[name=whyReportAd]:checked');
						let reportAdTxt = 'Reason: ' + (whyReportAd ? whyReportAd.value : '' );
						let reportMsg = "Comments: " + this.querySelector('textarea').value;
						
						// Disable the inputs 
						this.querySelector('textarea').disabled = true;
						this.querySelectorAll('input[name=whyReportAd]').forEach(function(elem) {
							elem.disabled = true;
						})
						
						// Encode and submit the report 
						let alias = encodeURIComponent( parent.getConfig('site') );
						let message = encodeURIComponent( reportAdTxt + " \n\n " + reportMsg);
						let googletag = encodeURIComponent( slotData );
						xhr.send( 'alias=' + alias + '&googletag=' + googletag + '&comment=' + message );

					} catch(error){ 
						advally.log(error) 
					}
					
					event.preventDefault();
					return false; 
				}
			}, 
			_thankReport: function() {
				
				// Update the textarea with a message
				let textarea = document.getElementById("AdvallyReportContainer").querySelector('textarea');
				textarea.value = "Thank you for your report";
				
				// Close the report after a brief moment to thank the user 
				setTimeout(this._closeReport(parent), 1500);
			}

		}
	})(this,advpbjs,googletag);
	
	
	//
	// Module: StickyAd
	//
	this.StickyAd = (function(parent){
		// Defaults
		parent.state.stickyad = {
			// Which devices to activate 
			enableDesktop: false,
			enableMobile: false,
			// Site segment to target
			segment: false, 
			// Array of IDs to look for to make sticky 
			targetIds: false, 
			// Time to display and hide the ad 
			transitionDelay: 4, 
			transitionDuration: 2, 
			// How to layout the container on stick 
			topMargin: 0, 
			zIndex: 100000, 
			// Custom CSS to add to page 
			customCSS: '', 
			// -- End of config 
			targetPlaceholder: false, 
			targetWrapper: false, 
			resetStickyAd: null,  // Custom Event()
			observerTag: false, 
			observerPlaceholder: false, 
		};
		return {
			// Define the tag element we want to sticky on scroll
			config: function(key, value) {
				switch (key) {
					case 'enableDesktop':
					case 'enableMobile':
						parent.state.stickyad[key] = Boolean(value);
						break;
					// Settings to use without modification
					case 'targetIds':
					case 'customCSS':
					case 'segment': 
						parent.state.stickyad[key] = value;
						return true;
						break;
					// Values that must be numeric and above 0
					case 'transitionDelay': 
					case 'transitionDuration': 
					case 'topMargin': 
					case 'zIndex':
						if (parseInt(value) > 0) {
							parent.state.stickyad[key] = parseInt(value);
							return true;
						}
						break;
				}
				return false; 
			},
			build: function() {
		
				// Device is mobile and not enabled on Mobile
				if (parent.isMobile && !parent.state.stickyad.enableMobile)
					return false;

				// Device is desktop and not enabled on Dekstop
				if (parent.isDesktop && !parent.state.stickyad.enableDesktop)
					return false;
				
				// Only continue if the segment matched 
				if (parent.SiteSegment.notFound(parent.state.stickyad.segment)) {
					return false; 
				}

				// We rely on IntersectionObserver, so we must check it exists 
				if (typeof IntersectionObserver != 'function') {
					parent.warn('StickyAd: Not preparing because IntersectionObserver is not supported');
					return false; 
				}			
				
				// Only build if we have a tag to build 
				if (Array.isArray(parent.state.stickyad.targetIds) && parent.state.stickyad.targetIds.length > 0) {

					// Don't run on IE11
					if ( typeof window.CustomEvent !== "function" ) 
						return false; 
					parent.state.stickyad.resetStickyAd = new Event('resetStickyAd'); 
					
					// Check every possible unit that can be set sticky 
					for (i = 0; i < parent.state.stickyad.targetIds.length; i++) {
						
						// Find the target element on page
						let targetElement = document.getElementById( parent.state.stickyad.targetIds[i] );
						
						// Only build if the element exists on page 
						if (targetElement) {
							
							// Check if this target is a Unit with no sizes 
							// A site may have a Unit that appears on desktop only or mobile only 
							// targetIds can list both these units, but only teh first one with active sizes would be used
							let advallyUnit = parent.Units.getUnitById(targetElement.id);
							if (advallyUnit) {
								let unitSizes = advallyUnit.getDisplaySizes();
								if (unitSizes.length == 0) {
									continue;
								}
							}
							
							parent.log('StickyAd: Preparing Sticky Handler for #'+parent.state.stickyad.targetId);
							
							// Write CSS to page
							parent.appendCSS( this._getCSS() );
							
							// Wrap the tag in a Placeholder + Wrapper 
							this._wrapTag( targetElement );
							
							// Setup observer to trigger sticky on scroll down 
							this._observeScrollDown( targetElement );
							
							return true; 
						}
					}
				}
			}, 
			// Wrap the tag in a Placeholder + Wrapper 
			_wrapTag: function(tag) {
				
				//  <Placeholder>
				//    <Wrapper>  <- Sticky 
				//      <Tag>
				
				// And add a placeholder to keep the page gap the same on sticky 
				parent.state.stickyad.targetPlaceholder = document.createElement("div"); 
				parent.state.stickyad.targetPlaceholder.id = "AdvallyStickyTagPlaceholder";
				tag.parentElement.insertBefore(parent.state.stickyad.targetPlaceholder, tag);
				
				// Move Ad tag into a wrapper 
				parent.state.stickyad.targetWrapper = document.createElement("div"); 
				parent.state.stickyad.targetWrapper.id = "AdvallyStickyTagWrapper";
				parent.state.stickyad.targetPlaceholder.appendChild(parent.state.stickyad.targetWrapper);
				parent.state.stickyad.targetWrapper.appendChild(tag);
				
				parent.log('StickyAd: Target wrapped');
			}, 
			// Add styles to header for wrapper 
			_getCSS: function() {
				return "div.AdvallyStickyAdContainer {\
					position: fixed;\
					top: "+parent.state.stickyad.topMargin+"px;\
					left: 0;\
					right: 0;\
					z-index: "+parent.state.stickyad.zIndex+";\
					transition-property: top;\
					transition-duration: "+parent.state.stickyad.transitionDuration+"s;\
					transition-delay: "+parent.state.stickyad.transitionDelay+"s;\
					transition-timing-function: linear;\
					background: #eee;\
					border-bottom: 1px solid #999;\
				} div.AdvallyStickyAdContainer .AdvallyReportBtn {\
					bottom: 0px; \
					top: unset !important; \
				} div#AdvallyStickyTagPlaceholder {\
					min-width: 1px; \
				} div.AdvallyStickyAdContainerHiding {\
					top: -255px;\
				} " + (parent.state.stickyad.customCSS ? parent.state.stickyad.customCSS : '');
			},
			_observeScrollDown: function(tag) {

				// Setup the observer criteria
				let options = {
					root: null, 
					rootMargin: -parent.state.stickyad.topMargin + 'px 0px 0px 0px',
					threshold: 0.99
				}
				
				// Create the observer to monitor when the tag reaches the top of the page
				let observerCallback = function(parent) {
					return function(entries, observer) {

						// Shortcut to the only entry in the observer
						let entry = entries[0];
						
						// Trigger handler when the ad has reached the top of the page on scroll down 
						if (entry.boundingClientRect.top <= parent.state.stickyad.topMargin) {
							//if (entry.intersectionRect.top == 0) {
								parent.log('StickyAd: observeScrollDown() - Making Target Sticky');
								
								// Only trigger handler the first time 
								observer.unobserve(entry.target);
								
								// Stylize the tag to stick 
								parent.StickyAd.stick(entry);
								
								// Watch for the up-scroll to unstick if required 
								parent.StickyAd._observeScrollUp();
								
								// Add a delay to auto hide the add on scroll 
								let timeoutCallback = function(parent) {
									return function() { 
										parent.state.stickyad.targetWrapper.classList.add("AdvallyStickyAdContainerHiding");
										parent.log('StickyAd: CSS transition started with delay');
									}
								}
								setTimeout(timeoutCallback(parent), 100);
								
								// Add an event handler to catch the end of the transition and return the ad home
								let transitionedCallback = function(parent) {
									return function() {
										parent.log('StickyAd: CSS Transition ended');
										parent.state.stickyad.observerPlaceholder.unobserve( parent.state.stickyad.targetPlaceholder );
										parent.state.stickyad.targetPlaceholder.dispatchEvent( parent.state.stickyad.resetStickyAd );
									}
								}
								parent.state.stickyad.targetWrapper.addEventListener('transitionend', transitionedCallback(parent));
							//}
						}
					}
				}
				parent.state.stickyad.observerTag = new IntersectionObserver(observerCallback(parent), options);
				
				parent.log('StickyAd: Observing tag for scroll down');
				
				// Start watching queued targets 
				parent.state.stickyad.observerTag.observe( tag );
			}, 
			_observeScrollUp: function() {
				
				let options = {
					root: null, 
					rootMargin: -parent.state.stickyad.topMargin + 'px 0px 0px 0px',
					threshold: 0.99
				}
				
				// Create a new observer to monitor the Placeholder and reset the ad on scroll up 
				let observerCallback = function(parent) {
					return function(entries, observer) {

						// Shortcut to the only entry in the observer
						let entry = entries[0];
						
						// Trigger if the user scrolled back up to the top of the placeholder 
						if (entry.boundingClientRect.top >= parent.state.stickyad.topMargin) {
							parent.log('StickyAd: User scrolled back up to placeholder');
							observer.unobserve(entry.target);
							parent.state.stickyad.targetPlaceholder.dispatchEvent( parent.state.stickyad.resetStickyAd );
						}
					}
				}
				parent.state.stickyad.observerPlaceholder = new IntersectionObserver(observerCallback(parent), options);
				
				parent.log('StickyAd: Observing tag for scroll up');
				
				parent.state.stickyad.observerPlaceholder.observe( parent.state.stickyad.targetPlaceholder );	
			},
			stick: function(entry) {
				
				// Native ads use negative margins which throw off the bounding rectangle
				// We have to account for the negative margin and add padding to compensate 
				let leftPadding = entry.boundingClientRect.left;
                let leftMargin = entry.target.style.marginLeft.replace(/[^-\d.]/g, '');
                if (leftMargin < 0) {
                    leftPadding += Math.abs(leftMargin);
                }
                				
				// Add styling to the wrapper
				parent.state.stickyad.targetWrapper.style.paddingLeft = leftPadding + 'px';
				parent.state.stickyad.targetWrapper.style.paddingRight = (advally.windowWidth() - entry.boundingClientRect.right)+'px';
				parent.state.stickyad.targetWrapper.classList.add('AdvallyStickyAdContainer');
				
				// Add fixed height to the placeholder 
				parent.state.stickyad.targetPlaceholder.style.height = entry.boundingClientRect.height+'px';
				
				// Listen for the custom event to reset everything back to normal 
				let resetStickyAdCallback = function(parent) {
					return function (e) {
						// e.target is the Placeholder 
						e.target.style.height = 'auto';
						// Remove sticky settings from the Wrapper too
						parent.state.stickyad.targetWrapper.style.paddingLeft = '0px';
						parent.state.stickyad.targetWrapper.style.paddingRight = '0px';
						parent.state.stickyad.targetWrapper.classList.remove('AdvallyStickyAdContainer');
						parent.state.stickyad.targetWrapper.classList.remove('AdvallyStickyAdContainerHiding');
						
						parent.log('StickyAd: Ad reset and returned to page');
					}
				}
				parent.state.stickyad.targetPlaceholder.addEventListener('resetStickyAd', resetStickyAdCallback(parent), false);
			}
		}
	})(this);
	
	//
	// Module:  OOP 
	//
	this.OOP = (function(parent,advpbjs,googletag){
		// Defaults
		parent.state.oop = {
			queue: [], 
		};
		// Module functions
		return {
			add: function(conf) {
				if (typeof parent.state.oop.queue == 'object')
					parent.state.oop.queue.push(conf);
				else
					this._setup(conf);
			},
			_setup: function(conf) {
				
				/*
				conf.unit_id
				conf.enableDesktop
				conf.enableMobile
				conf.segment
				conf.type
				conf.slot 
				*/
			
				// Device is mobile and not enabled on Mobile
				if (parent.isMobile && !conf.enableMobile)
					return false;

				// Device is desktop and not enabled on Dekstop
				if (parent.isDesktop && !conf.enableDesktop)
					return false;
				
				// Only continue if the segment matched 
				if (parent.SiteSegment.notFound(conf.segment)) {
					return false; 
				}

				parent.log('OOP: Creating ' + conf.unit_id);

				// Create the ad
				let tag = document.createElement('div');
				tag.id = conf.unit_id;
				tag.dataset.size = '1x1';
				tag.dataset.slot = conf.slot||parent.Units.getDefaultSlot();
				tag.dataset.oop = conf.type;
				tag.dataset.smartrefresh = false;
				document.body.prepend(tag);
				let Unit = parent.Units._addDynamicUnit(tag);

				parent.log('OOP: Registering and requesting ' + conf.unit_id);
				Unit.register(parent,googletag);

				var adRequest = new AdCall(parent,googletag,advpbjs);
				adRequest.setUnits( [ Unit ] );
				adRequest.start();				
			},
			build: function() {

				// Find queued OOPs 
				let count = parent.state.oop.queue.length;
				
				// We have some to setup 
				if (count > 0) {
					
					parent.log('OOP: Executing ' + count + ' queued OOP units');
				
					// Execute Injectors
					for (let i=0; i<count; i++) {
						parent.log('OOP: Executing queued oop #' + i);
						var conf = parent.state.oop.queue[i];
						this._setup(conf);
					}
					
					// Disable the queue 
					parent.state.oop.queue = false;
				}
			}
		}
	})(this,advpbjs,googletag);
	
	
	//
	// Module: Sidehesion (Adhesion to side on large monitors)
	//
	this.Sidehesion = (function(parent){
		// Defaults
		parent.state.sidehesion = {
			segment: null, 
			rendered: false, 
			enableDesktop: false,
			enableMobile: false,
			slotName: null,
			frequencyCap: null, 
//			bgColor: FFFFFF,
//			bgOpacity: 1,
			// Extra Params 
			minViewport: 0, 
			position_x: 'left',
			position_y: 'bottom',
			marginThresholdDesktop: 0, 
		};
		let SidehesionMod = new AdvallyAdhesionBase(parent, 'Sidehesion');
		SidehesionMod.config = function(key, value) {
			switch (key) {
				// Values we can directly assign, like arrays or strings 
				case 'minViewport':
				case 'position_x':
				case 'position_y':
					parent.state[this.alias][key] = value;
					return true;
				default: 
					return this._config(key,value);
			}
		}
		SidehesionMod._getCSS = function(settings) { 
			return "#" + this.containerId + " { \
				height: " + (parent.ErrorReport.enabled() ? '618' : '600') + "px; \
				width: 160px; \
				z-index: 1000; \
				position: fixed; \
				text-align: center; \
				background-color: #fff; \
				padding: 0; \
				box-sizing: content-box !important; \
				transition: left 0.5s ease-in, right 0.5s ease-in; \
			} " +
			"#" + this.containerId + ".left { \
				left: -175px; \
			} " + 
			"#" + this.containerId + ".right { \
				right: -175px; \
			} " + 
			"#" + this.containerId + " .__AdvallyReport { \
				height: 18px; \
			}" +
			"#" + this.containerId + ".right .__AdvallyReport { \
				padding-left: 65px; \
			} " + 
			"#" + this.containerId + ".left.adhesionActive { \
				left: 0px; \
			} " + 
			"#" + this.containerId + ".right.adhesionActive { \
				right: 0px; \
			} " + 
			"#" + this.containerId + ".middle { \
				bottom: " + ((parent.windowHeight()/2)-310) + "px; \
			} " + 
			"#" + this.containerId + ".bottom { \
				bottom: 0; \
			} " + 
			"#" + this.containerId + ".right .__AdvallyClose { \
				left: 5px; \
			} " + 
			"#" + this.containerId + ".left .__AdvallyClose { \
				right: 5px; \
			} " + 
			"#" + this.containerId + " .__AdvallyClose { \
				position:absolute; \
				width:20px; height:20px; \
				user-select: none; \
				font-family: sans-serif; \
				font-size: 16px; \
				text-transform: none; \
				color: #fff; \
				top: -10px; \
				cursor: pointer; \
				padding: 0; \
				opacity: 1; \
				box-sizing: content-box !important; \
			}";
		}
		SidehesionMod._startSetup = function(settings) {
			if (parent.windowWidth() < settings.minViewport) {
				parent.warn('Sidehesion: Not loading - Screen not wide enough');
				return false;
			}
			if (parent.windowHeight() < 675) {
				parent.warn('Sidehesion: Not loading - Screen not tall enough');
				return false;
			}
			return true;
		}
		SidehesionMod._writeTag = function(container,body) {

			// Create the ad slot 
			let tag = document.createElement('div');
			tag.id = this.slotId;
			tag.style.margin = '0px auto';
			tag.dataset.size = '160x600';
			tag.dataset.slot = this.getSlot()||parent.Units.getDefaultSlot();
			container.appendChild(tag); 
			let Unit = parent.Units._addDynamicUnit(tag);
						
			// Set the position according to settings
			container.classList.add( parent.state.sidehesion.position_x );
			container.classList.add( parent.state.sidehesion.position_y );
			
			// Add the Error report - if any 
			let reportBtn = parent.ErrorReport.getButtonFragment(Unit);
			if (reportBtn) {
				let report = document.createElement('div');
				report.classList.add('__AdvallyReport');
				report.appendChild(reportBtn);
				container.insertBefore(report, container.childNodes[0]);
			}
		}
		return SidehesionMod;
	})(this);
	

	//
	// Module: Adhesion
	//
	this.Adhesion = (function(parent){
		// Defaults
		parent.state.adhesion = {
			segment: null, 
			rendered: false, 
			enableDesktop: false,
			enableMobile: false,
			slotName: null,
			frequencyCap: null, 
			bgColor: 'FFFFFF',
			bgOpacity: 1,
			marginThresholdMobile: 0, 
			marginThresholdDesktop: 0, 
			// Extra Params 
			maxWidth: null, 
			message: '',
			hideMarginBottom: false, 
			offsetBottomDesktop: 0, 
			offsetBottomMobile: 0, 
			companyIdHideContainer: [],
			mobile320x100: false,  
		};
		let AdhesionMod = new AdvallyAdhesionBase(parent, 'Adhesion');
		AdhesionMod.config = function(key, value) {
			switch (key) {
				// Values we can directly assign, like arrays or strings 
				case 'maxWidth':
				case 'message':
					parent.state[this.alias][key] = value;
					return true;
				case 'mobile320x100':
					parent.state[this.alias][key] = value ? true : false;
					return true;
				case 'hideMarginBottom':
					parent.state[this.alias][key] = value ? parseInt(value) : false; 
					return true;
				case 'offsetBottomDesktop':
				case 'offsetBottomMobile':
					parent.state[this.alias][key] = value ? parseInt(value) : 0; 
					return true;
				case 'companyIdHideContainer':
					parent.state[this.alias][key].push(value);
					return true;
				default: 
					return this._config(key,value);
			}
		}
		AdhesionMod._getCSS = function(settings) { 
			let mobileHeight = (settings.mobile320x100?100:50) + (settings.message||parent.ErrorReport.enabled() ? 15:0);
			
			return "#" + this.containerId + " { \
				height: " + (settings.message||parent.ErrorReport.enabled() ? '105' : '90') + "px; \
				z-index: 1000; \
				position: fixed; \
				bottom: -125px; left: 0; right: 0; \
				margin-left: auto;	margin-right: auto; \
				text-align: center; \
				padding: 5px 0; \
				box-sizing: content-box !important; \
				transition: bottom 0.5s ease-in; \
				max-width: " + (settings.maxWidth>300 ? parseInt(settings.maxWidth)+'px' : 'none') + "; \
			} " +
			"#" + this.slotId + " { \
				min-width: 728px; \
				height: 90px; \
			} " +
			"#" + this.containerId + ".adhesionActive.notNearPageBottom { \
				bottom: " + (parent.isMobile ? settings.offsetBottomMobile : settings.offsetBottomDesktop) + "px; \
			}" +
			"#" + this.containerId + " .__AdvallyBgFill { \
				position: absolute; \
				top: 0; right: 0; bottom: 0; left: 0; \
				background: #" + settings.bgColor + "; \
				opacity: " + settings.bgOpacity + "; \
				z-index: -1; \
			}" +
			"#" + this.containerId + " .__AdvallyPosition { \
				margin: 0px auto; \
				text-align: center; \
				clear: both; \
				justify-content: center; \
				display: flex; \
				overflow: hidden; \
			}" +
			"#" + this.containerId + " .__AdvallyReport { \
				float: left; \
			}" +
			"#" + this.containerId + " .AdvallyReportBtn { \
			}" +
			"#" + this.containerId + " .__AdvallyMessage { \
				font-family: sans-serif; \
				font-size: 12px; \
				line-height: 15px; \
				overflow: hidden; \
				height: 15px; \
				text-align: center; \
				color: #444; \
				opacity: 1; \
			}" +
			"#" + this.containerId + " .__AdvallyClose { \
				position:absolute; \
				width:20px; height:20px; \
				font-size: 16px; \
				text-transform: none; \
				user-select: none; \
				font-family: sans-serif; \
				color: #fff; \
				right: 5px; \
				top: -10px; \
				cursor: pointer; \
				padding: 0; \
				opacity: 1; \
				box-sizing: content-box !important; \
			}" +
			"#" + this.containerId + ".adhesionTransparent { \
				border-width: 0; \
			}" +
			"#" + this.containerId + ".adhesionTransparent .__AdvallyBgFill, " +
			"#" + this.containerId + ".adhesionTransparent .__AdvallyMessage, " + 
			"#" + this.containerId + ".adhesionTransparent .__AdvallyClose, " + 
			"#" + this.containerId + ".adhesionTransparent .__AdvallyReport { \
				opacity: 0; \
			}" +
			"@media (max-width: 730px) { \
				#" + this.containerId + " { \
					height: " + mobileHeight + "px; \
				} " +
				"#" + this.slotId + " { \
					min-width: 320px; \
					height: " + (settings.mobile320x100?100:50) + "px; \
				} \
			}";
		}
		AdhesionMod._writeTag = function(container,body) {
			
			// Optional Message 
			if (parent.state[this.alias].message) {
				let message = document.createElement('div');
				message.classList.add('__AdvallyMessage');
				message.innerHTML = parent.state[this.alias].message;
				container.appendChild(message);
			}

			// Prepare the positioner 
			let positioner = document.createElement('div');
			positioner.classList.add('__AdvallyPosition');
			
			let maxWidth = parent.state[this.alias].maxWidth;
			let mobile320x100 = parent.state[this.alias].mobile320x100;

			// Create the ad slot 
			let tag = document.createElement('div');
			tag.id = this.slotId;
			tag.dataset.size = (function(){ 
				if (parent.windowWidth()>970 && (!maxWidth||maxWidth>970) ) return '728x90,970x90'; 
				else if (parent.windowWidth()>728 && (!maxWidth||maxWidth>728) ) return '728x90'; 
				else if (mobile320x100) return '320x50,320x100';
				else return '320x50';
			})(); 
			tag.dataset.slot = this.getSlot()||parent.Units.getDefaultSlot();
			positioner.appendChild(tag);
			let Unit = parent.Units._addDynamicUnit(tag);
			
			// Setup an event listener to hide this unit container for certain providers 
			let slotRenderEndedCallback = function(parent,self){
				return function(event) {
					parent.log(AdhesionMod.name + ': Slot Render Ended');
					if (parent.state[self.alias]['companyIdHideContainer'].includes(event.advertiserId)) {
						parent.log(AdhesionMod.name + ': Mobile Adhesion Company ID - HIDE Container');
						document.getElementById( self.containerId ).classList.add('adhesionTransparent');
					} else {
						parent.log(AdhesionMod.name + ': Mobile Adhesion Company ID - SHOW Container');
						document.getElementById( self.containerId ).classList.remove('adhesionTransparent');
					}
				}
			}
			if (parent.state[this.alias]['companyIdHideContainer'].length > 0) {
//				Unit.onEvent('slotRenderEnded',	slotRenderEndedCallback(parent,this) );			
			}
			
			// Add the slot to the container
			container.appendChild(positioner);
			
			// Add the Error report - if any 
			let reportBtn = parent.ErrorReport.getButtonFragment(Unit);
			if (reportBtn) {
				let report = document.createElement('div');
				report.classList.add('__AdvallyReport');
				report.appendChild(reportBtn);
				container.insertBefore(report, container.firstChild);
			}
												
			// Hide when we reach the bottom of the page 
			if (parent.state[this.alias].hideMarginBottom) {
			
				parent.log(AdhesionMod.name + ': Hiding at end of page: ' + parent.state[this.alias].hideMarginBottom + 'px');
				
				let observer = new IntersectionObserver(AdhesionMod._trackingCallback(parent, 'Adhesion', 'notNearPageBottom'), {
					root: null, 
					rootMargin: parent.state[this.alias].hideMarginBottom+'px',
					threshold: 0
				});
				observer.observe( parent.ScrollTracker.bottom() );

			// Add this class if not using the bottom margin option
			} else {
				container.classList.add('notNearPageBottom');
			}
			
		}
		return AdhesionMod;
	})(this);


	//
	// Module: TopAdhesion
	//
	this.TopAdhesion = (function(parent){
		// Defaults
		parent.state.topadhesion = {
			segment: null, 
			rendered: false, 
			enableDesktop: false,
			enableMobile: false,
			slotName: null,
			frequencyCap: null, 
			bgColor: 'FFFFFF',
			bgOpacity: 1,
			// Extra Params 
			marginThresholdMobile: 50, 
			marginThresholdDesktop: 50, 
			maxWidth: null, 
			offsetTopDesktop: 0, 
			offsetTopMobile: 0, 
		};
		let TopAdhesionMod = new AdvallyAdhesionBase(parent, 'TopAdhesion');
		TopAdhesionMod.config = function(key, value) {
			switch (key) {
				// Values we can directly assign, like arrays or strings 
				case 'maxWidth':
					parent.state[this.alias][key] = value;
					return true;
				case 'offsetTopDesktop':
				case 'offsetTopMobile':
					parent.state[this.alias][key] = value ? parseInt(value) : 0; 
					return true;
				default: 
					return this._config(key,value);
			}
		}
		TopAdhesionMod._getCSS = function(settings) { 
			return "#" + this.containerId + " { \
				height: " + (parent.ErrorReport.enabled() ? '105' : '90') + "px; \
				z-index: 1000; \
				position: fixed; \
				top: -115px; left: 0; right: 0; \
				margin-left: auto;	margin-right: auto; \
				text-align: center; \
				padding: 5px 0; \
				box-sizing: content-box !important; \
				transition: top 0.5s ease-in; \
				max-width: " + (settings.maxWidth>300 ? parseInt(settings.maxWidth)+'px' : 'none') + "; \
			} " +
			"#" + this.containerId + ".adhesionActive { \
				top: " + (parent.isMobile ? settings.offsetTopMobile : settings.offsetTopDesktop) + "px; \
			}" +
			"#" + this.containerId + " .__AdvallyBgFill { \
				position: absolute; \
				top: 0px; right: 0; bottom: 0; left: 0; \
				background: #" + settings.bgColor + "; \
				opacity: " + settings.bgOpacity + "; \
				z-index: -1; \
			}" +
			"#" + this.containerId + " .__AdvallyPosition { \
				width: 728px; \
				margin: 0px auto; \
			}" +
			"#" + this.containerId + " .__AdvallyReport { \
				height: 18px; \
			}" +
			"#" + this.containerId + " .__AdvallyClose { \
				position:absolute; \
				width: 20px; height:20px; \
				user-select: none; \
				font-family: sans-serif; \
				font-size: 16px; \
				text-transform: none; \
				color: #fff; \
				right: 5px; \
				bottom: -10px; \
				cursor: pointer; \
				padding: 0; \
				opacity: 1; \
				box-sizing: content-box !important; \
			}" +
			"@media (max-width: 730px) { \
				#" + this.containerId + " { \
					height: " + (parent.ErrorReport.enabled() ? '65' : '50') + "px; \
				}\
				#" + this.containerId + " .__AdvallyPosition { \
					width: 320px; \
				}\
			}";
		}
		TopAdhesionMod._writeTag = function(container, body) {

			// Slot container 
			let positioner = document.createElement('div');
			positioner.classList.add('__AdvallyPosition');

			// Create the ad slot 
			let tag = document.createElement('div');
			tag.id = this.slotId;
			tag.dataset.size = (function(){ 
				if (parent.windowWidth()>975) return '728x90,970x90'; 
				else if (parent.windowWidth()>730) return '728x90'; 
				else return '320x50';
			})(); 
			tag.dataset.slot = this.getSlot()||parent.Units.getDefaultSlot();
			positioner.appendChild(tag);
			let Unit = parent.Units._addDynamicUnit(tag);
			
			// Add the slot to the container
			container.appendChild(positioner);
			
			// Add the Error report - if any 
			let reportBtn = parent.ErrorReport.getButtonFragment(Unit);
			if (reportBtn) {
				let report = document.createElement('div');
				report.classList.add('__AdvallyReport');
				report.appendChild(reportBtn);
				container.appendChild(report);
			} 
		}
		return TopAdhesionMod;
	})(this);


	//
	// Module: Tracking 
	//
	this.Tracking = (function(parent){
		// Defaults
		parent.state.tracking = {
			enable: false, 
		};
		return {
			config: function(key, value) {
				switch (key) {
					case 'enable': 
						parent.state.tracking[key] = Boolean(value);
						return true;
						break;
				}
				return false; 
			},
			// Load and rename the tracker 
			build: function() {

				// Stop processing if tracking isn't enabled 
				if (!parent.state.tracking.enable)
					return false;

				this.logPageview();
			}, 
			logPageview: function() {
				try {

					// Ignore bots
					let BotsAgents = [	
						"Googlebot\\/",
						"Googlebot-Mobile",
						"Googlebot-Image",
						"Googlebot-News",
						"Googlebot-Video",
						"okhttp",
						"HeadlessChrome",
						"^curl",
						"Facebot",
						"facebookexternalhit",
						"bingbot",
						"Chrome-Lighthouse",
						"proximic",
						"Bytespider",
						"PetalBot",
						"Python-urllib",
						"python-requests",
						"Ahrefs(Bot|SiteAudit)",
					];
					for (var i=0; i<BotsAgents.length; i++){ 
						if (navigator.userAgent.match(BotsAgents[i])) {
							advally.log('Tracking: Ignoring detected bot', BotsAgents[i]);
							return false;
						}
					}
								
					// Analytics payload being sent 
					let payload = {
						mobile: parent.isMobile,
						property: parent.state.site,
						country: parent.IPLookup.get('countryCode'),
						// These can be determined from the referer 
						url:  window.location.href,
//						ua: navigator.userAgent,
					};
					
					// Open a new request 
					let request = new XMLHttpRequest();
					request.open('POST', 'https://us-central1-wrapper-analytics-prod.cloudfunctions.net/send_pageviews', true);
					request.setRequestHeader("Content-Type", "application/json");
					
					// Handle return 
					request.onload = function () {
					    advally.log('Tracking: ', this.responseText);
					};
					
					// Send the payload 
					request.send(JSON.stringify(payload));

					return true;
				
				} catch(error){ advally.log(error) }
			}
		}
	})(this);


	/////////////////////////////////////
	//
	// START
	//
	/////////////////////////////////////

	// Start Consent Country lookup
	this.IPLookup.start();

	// Execute and monitor the command queue
	this.log('Executing ' + this.cmd.length + ' Queued Commands');
	while( (cmd = this.cmd.shift()) !== undefined ) {
		cmd();
	}
	this.cmd = {
		push: function(cmd) {
			cmd();
		}
	}

}).call(advally);

