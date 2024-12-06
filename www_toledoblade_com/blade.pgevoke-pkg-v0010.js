// ============================== 
// Package: Evoke JS (Blade) 
// Version: 0001 
// Build Date: 2024-08-30 15:30:24pm 
// ------------------------------ 
// pg.package.begin.js 
// pg.all.debuglogr.js 
// pg.all.stickyboxes-v3.2.1.js 
// pg.all.binder.js 
// pg.all.pgvars.js 
// pg.all.init.js 
// pg.all.clicktracker.js 
// pg.all.pgfns_misc.js 
// pgevoke._tplslist.php 
// pg.all.underscore.js 
// pg.all.pgfns_ajax.js 
// pg.all.cdnimages.js 
// pg.all.sitesettings-blade.js 
// pg.all.ads_config-blade.js 
// pg.all.ads_config-_common.js 
// pgevoke.all.breakpoints.js 
// pgevoke.all.pgpageapi.js 
// pgevoke.all.androidoneclick.js 
// pgevoke.all.stickyheader.js 
// pgevoke.all.slidemenu.js 
// pgevoke.all.subnav_sections-blade.js 
// pgevoke.all.subnav.js 
// pgevoke.all.querylysearch.js 
// pgevoke.all.loginregister.js 
// pgevoke.all.piano.js 
// pg.all.gns.js 
// pgevoke.all.weather.js 
// pg.all.os.js 
// pg.all.ads_dfpads.js 
// pg.all.ads_adinit.js 
// pg.all.ads_adbidders.js 
// pg.all.ads_richmedia.js 
// pg.all.ads_richmediainit.js 
// pg.all.pwdrawer.js 
// pg.all.ads_overlay.js 
// pg.all.backtotop.js 
// pg.all.pageautorefresh.js 
// pgevoke.all.stickyfooter.js 
// pgevoke.all.backtotop.js 
// pgevoke.all.apwidget.js 
// pgevoke.all.twitterlists.js 
// pgevoke.all.subsectionmenu_settings-blade.js 
// pgevoke.all.subsectionmenu.js 
// pgevoke.all.genericrightrail.js 
// pgevoke.fp.bigstory.js 
// pgevoke.fp.stickyboxes.js 
// pgevoke.fp.stickyfooter.js 
// pgevoke.fp.newsboxesv2-blogs.js 
// pgevoke.fp.loader.js 
// pgevoke.fp.misc.js 
// pgevoke.story.syncscriptloader.js 
// pgevoke.story.shortcodes.js 
// pgevoke.story.embeddedimages.js 
// pgevoke.story.swiper.js 
// pgevoke.story.lateststories.js 
// pgevoke.story.stickyfooter.js 
// pgevoke.story.comments.js 
// pgevoke.story.comments_spotim.js 
// pgevoke.story.comments_viafoura.js 
// pgevoke.story.transporter.js 
// pgevoke.section.settings-blade.js 
// pgevoke.section.standaloneheader.js 
// pgevoke.section.stickyboxes.js 
// pgevoke.section.loader.js 
// pgevoke.static.loader.js 
// pgevoke.page.loader.js 
// pgevoke.all.civicscience.js 
// pgevoke.all.infinite-storylist.js 
// pgevoke.all.emailshare.js 
// pg.all.airship.js 
// pg.all.webnotifs.js 
// pg.all.admrl-blade.js 
// pg.all.bodyend.js 
// pg.package.end.js 
// ============================== 
// Package Builder v1.0008 


// Beginning of package-wrapping anonymous function, which takes in $ as a parameter
(function($) {

// **********************************
//        pg.all.debuglogr
// **********************************

window.DEBUGLOGR = (function() {
	var localstoragekey = "debuglogr-settings";
	var masterlog = "======= MASTER LOG =======";
	var logs = {};
	var activekeys = {};
	return {
		writeSettingsObj: function(obj) {
			if (typeof obj !== "object" || obj === null) { return; }
			var str = "";
			try {
				str = JSON.stringify(obj);
			} catch(e) {
				// Invalid object
			}
			if (str !== "") {
				localStorage.setItem(localstoragekey, str);
			} else {
				localStorage.removeItem(localstoragekey);
			}
		},
		getSettingsObj: function() {
			var obj = {}; // Default
			var str = localStorage.getItem(localstoragekey);
			if (typeof str === "string") {
				try {
					obj = JSON.parse(str);
				} catch(e) {}	
			}
			return obj;
		},
		set: function(logkey, debuglevel) {
			if (typeof logkey !== "string" || logkey === "") {
				console.log("DEBUGLOG: Invalid log key. Must be a string with a length greater than zero.");
				return;
			}
			if (typeof debuglevel === "number") {
				if (debuglevel % 1 !== 0) {
					console.log("DEBUGLOG: Invalid debuglevel. You entered a number, but it's not an integer.");
					return;
				} else {
					debuglevel = debuglevel.toString();
				}
			} else if (typeof debuglevel !== "string" || debuglevel === "") {
				console.log('DEBUGLOG: Invalid debuglevel. Must be an integer, or a string of an integer, like "1" or "2"');
				return;
			}
			var settingsobj = DEBUGLOGR.getSettingsObj();
			if (debuglevel === "0") {
				delete settingsobj[logkey];
			} else {
				settingsobj[logkey] = debuglevel.toString();	
			}
			DEBUGLOGR.writeSettingsObj(settingsobj);
			console.log('DEBUGLOG: "' + logkey + '" set to debuglevel=' + debuglevel);
		},
		get: function(logkey) {
			if (typeof logkey !== "string") { return ""; }
			var settingsobj = DEBUGLOGR.getSettingsObj();
			if (typeof settingsobj[logkey] === "string") {
				return settingsobj[logkey];
			} else {
				return ""; // Default
			}
		},
		clear: function(logkey) {
			if (typeof logkey !== "string") { return; }
			var settingsobj = DEBUGLOGR.getSettingsObj();
			delete settingsobj[logkey];
			DEBUGLOGR.writeSettingsObj(settingsobj);
		},
		clearAll: function() {
			DEBUGLOGR.writeSettingsObj({});	
		},
		log: function(logkey, thingtolog) {
			if (typeof logkey !== "string") { return; }
			if (typeof thingtolog !== "string" && typeof thingtolog !== "object" && typeof thingtolog !== "boolean" && typeof thingtolog !== "number" && typeof thingtolog !== "function" ) { return; }
			if (typeof activekeys[logkey] !== "boolean") {
				activekeys[logkey] = true;
			}
			var debuglevel = DEBUGLOGR.get(logkey);
			if (debuglevel !== "") {
				debuglevel = parseInt(debuglevel);	
			} else {
				var defaultdebuglevel = DEBUGLOGR.get("DEFAULT");
				if (defaultdebuglevel !== "") {
					debuglevel = parseInt(defaultdebuglevel);
				} else {
					return;
				}
			}
			if (debuglevel === 1 || debuglevel === 3) {
				logs[logkey] = logs[logkey] || "======= "+logkey+" =======";
				logs[logkey] += (logs[logkey] !== "") ? "\n" : "";
				masterlog += (masterlog !== "") ? "\n" : "";
				// var thingtologbkup = thingtolog;
				if (typeof thingtolog === "object") {
					try {
						thingtolog = JSON.stringify(thingtolog, null, 3);
					} catch(e) {
						thingtolog = "[INVALID OBJECT]";
					}
				}
				var newstr = logkey + ": " + thingtolog;
				logs[logkey] += newstr;
				masterlog += newstr;
			}
			if (debuglevel === 2 || debuglevel === 3) {
				console.log(logkey + ": ", thingtolog);
				// var args = Array.prototype.slice.call(arguments);
            	// console.log.apply(console, args);
			}
		},
		getLog: function(logkey) {
			if (typeof logkey !== "string") { return "You must specify a logkey"; }
			if (typeof logs[logkey] === "string") {
				return logs[logkey];
			} else {
				return "There are no '" + logkey + "' log messages. Debuglevel for that key is '" + DEBUGLOGR.get(logkey) + "'.";
			}
		},
		getMasterLog: function() {
			return masterlog;
		},
		getKeys: function() {
			return Object.keys(activekeys);
		}
	};
})();

// Backwards compatibility with old function location
window.PGLIB = window.PGLIB || {};
window.PGLIB.utils = window.PGLIB.utils || {};
window.PGLIB.utils.debuglog = window.PGLIB.utils.debuglog || {};
window.PGLIB.utils.debuglog.log = function(logkey, thingtolog) {
	DEBUGLOGR.log(logkey, thingtolog);
};


// ************************
//     Stickyboxes v3.2
// ************************
// Last updated: 10/10/2018
// Defined with window.* to avoid scope issue

window.Stickyboxes = (function() {

	// ####### Private variables and functions #######

	var debugmodeon = false;
	var initialized = false;
	var items = {}; // Sticky boxes, alias = key
	var values = {}; // Common Values
	var defaults = {
		offset: 0,
		parent: null,
		stickystate: "none",
		endPointOffset: 0
	};
	var useDEBUGLOGR = (typeof window.DEBUGLOGR === "object" && window.DEBUGLOGR !== "null");
	var debuglogkey = "STICKYBOXES";

	function stickylog(thingtolog) {
		if (useDEBUGLOGR) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		} else {
			if (debugmodeon) {
				console.log(thingtolog);  
			} 
		}
	}

	// These values are used by all stickyboxes, so
	// they only need to be updated once per scroll
	// event
	function updateCommonValues() {
		values.scrolltop = $(document).scrollTop();
		values.scrollleft = $(document).scrollLeft();
		values.docheight = $(document).height();
		values.windowheight = $(window).height();
	}

	function initialize() {
		initialized = true;
		$(window).scroll( function() {
			Stickyboxes.updateAll("scroll");
		});
		$(window).resize( function() {
			$.each(items, function(key, val) {
				Stickyboxes.updateParentStyles(key);
				// Stickyboxes.updatePlaceholderStyles(key);
			});
			Stickyboxes.updateAll("window-resize");
		});
	}

	// ####### Public functions #######
	return {
		
		// Returns the first element matching the supplied
		// stickyboxid (data-stickybox-id value)
		$find: function(stickyboxid) {
			return $("[data-stickybox-id=" + stickyboxid + "]").first();
		},

		// Returns a string containing the SELECTOR needed
		// to match a given stickybox id
		selector: function(stickyboxid) {
			return "[data-stickybox-id='" + stickyboxid + "']";
		},

		// Adds a new stickybox
		add: function($elem, options) {

			stickylog("*** STICKYBOXES: Adding Stickybox");
			stickylog($elem);

			// Make sure the specified element exists
			if ($elem.length < 1) {
				stickylog("*** STICKYBOXES: Element not found! Cannot be added.");
				return;
			}

			// Make sure the element has a "data-stickybox-id" or "id"
			// If so, use it to create the unique key for this stickybox
			// Otherwise, fail
			var stickyboxid;
			if (typeof $elem.attr("data-stickybox-id") !== "undefined") {
				stickyboxid = $elem.attr("data-stickybox-id");
			} else {
				var id = $elem.prop("id"); // No data-stickybox-id, so check for regular id
				if (id !== "") {
					stickyboxid = "id-" + id; // Use namespaced ID as unique key
					$elem.attr("data-stickybox-id", stickyboxid); // 
				} else {
					stickylog("*** STICKYBOXES: Element has no 'data-stickybox-id' nor 'id'! Cannot be added. One is required; preferably the former.");
					return; 
				}
			}

			// Set zIndexAtBottom to "" if not specified, otherwise make sure its a string & save
			if (typeof options["zIndexAtBottom"] === "undefined") {
				options["zIndexAtBottom"] = "";
			} else {
				options["zIndexAtBottom"] = options["zIndexAtBottom"].toString();
			}
			
			// Setting default dockLocation if not defined
			if (typeof options["dockLocation"] === "undefined") {
				options["dockLocation"] = "top"; // default
			} else {
				options["dockLocation"] = options["dockLocation"].toString();
			}

			// The "settings" object will hold all settings for this particular stickybox
			var settings = {};
			settings.$elem = $elem;
			settings = $.extend(settings, defaults, options);

			// Get any inline styles defined in the elements style prop and add to settings
			var inlinestyles = {};
			var inlinestyleobj = $elem[0].style;
			if (inlinestyleobj.length > 0) {
				for (i=0;i<inlinestyleobj.length;i++) {
					var thisstyleprop = inlinestyleobj[i];
					inlinestyles[thisstyleprop] = inlinestyleobj[thisstyleprop];
				}
			}
			settings.inlinestyles = inlinestyles;   

			// Get parent element and add to settings
			var $parentelem;
			$parentelem = $elem.parent();
			if ($parentelem.is("body")) {
				$parentelem = $(document);
			} else {
				if (settings.parent != null) { // If they didn't specify a "parent"
					var matchingparents = $elem.parents().filter(settings.parent);
					if (matchingparents.length > 0) {
						$parentelem = matchingparents.first();
					}
				}
				if ($parentelem.css("position") == "static") {
					stickylog("*** STICKYBOXES: Warning: Parent element needs position:relative. Stickyboxes will add it now, but this may disrupt your layout. You should add it yourself and adjust your layout accordingly. ");
					$parentelem.css("position", "relative"); // Allows absolute positioning of sticky element inside of parent
				}
			}
			settings.$parentelem = $parentelem;

			// Set 'parentisancesor'
			$immediateparent = $elem.parent();
			if ($immediateparent.is("body")) { $immediateparent = $(document); }
			// settings.parentisancestor = ($immediateparent[0].id != $parentelem[0].id);
			settings.parentisancestor = (!$immediateparent.is($parentelem));
			if (settings.parentisancestor) {
				// stickylog("*** STICKYBOXES: Parent is ancestor. These are not equal...");
				// stickylog("*** STICKYBOXES: Immediate parent...");
				// stickylog($immediateparent);
				// stickylog("*** STICKYBOXES: Parent elem...");
				// stickylog($parentelem);
			} else {
				// stickylog("Parent is not ancestor... direct parent");
			}

			// Add this stickybox to the "master" items object
			items[stickyboxid] = settings;

			// Get & cache the relevant parent styles
			Stickyboxes.updateParentStyles(stickyboxid);

			// Create placeholder element and save reference
			var placeholderstickyboxid = stickyboxid + "-placeholder";
			var $placeholder = $('<div data-stickybox-id="' + placeholderstickyboxid + '"></div>');
			$elem.before($placeholder);
			items[stickyboxid].$placeholderelem = Stickyboxes.$find(placeholderstickyboxid);
			Stickyboxes.setStaticStyles(stickyboxid);
			
			// Initialize scroll event binding if not yet done
			if (!initialized) initialize();

		},

		// Returns the current object for a given stickybox
		// Inaccessible without this function or getAll()
		getItem: function(stickyboxid) {
			// console.log("getItem:", items[stickyboxid]);
			return items[stickyboxid];
		},

		// Returns ALL stickybox objects. Inaccessible without
		// this function or getItem()
		getAll: function() {
			// console.log(items);
			return items;
		},

		remove: function(stickyboxid) {
			if (typeof items === "undefined") { return; }
			if (typeof items[stickyboxid] === "undefined") { return; }
			var thisbox = items[stickyboxid];
			Stickyboxes.updateStickyState({
				stickyboxid: stickyboxid,
				state: "none",
				triggerevent: "removefunction"
			});
			thisbox.$ph.remove();
			delete items[stickyboxid];
		},

		getThisBoxObj: function(stickyboxid) {
			if (typeof items === "undefined") { return; }
			if (typeof items[stickyboxid] === "undefined") { return; }
			var thisbox = items[stickyboxid];
			// *** thisbox.$elem = item.$elem;
			// *** thisbox.offset = item.offset;
			thisbox.stickyboxid = stickyboxid;
			thisbox.elemouterheight = thisbox.$elem.outerHeight();
			thisbox.elemtotalheight = thisbox.$elem.height() + thisbox.verticalmarginsandpadding;
			thisbox.$ph = thisbox.$placeholderelem; // shorthand
			thisbox.phoffset = thisbox.$ph.offset();
			thisbox.phmarginleft = thisbox.$ph.css("margin-left");
			thisbox.phmargintop = thisbox.$ph.css("margin-top");
			// ***  thisbox.$parentelem = item.$parentelem;
			thisbox.parentelemheight = thisbox.$parentelem.height();
			thisbox.parentelemoffset = thisbox.$parentelem.offset();
			return thisbox;
		},

		// 
		updateParentStyles: function(stickyboxid) {
			// stickylog("*** STICKYBOXES: Setting Parent Styles");
			if (typeof items[stickyboxid] !== "object") { return; }
			// console.log("----- YEP");
			$parentelem = items[stickyboxid].$parentelem;
			var parentstyles = {
				"paddingtop": parseInt($parentelem.css("padding-top")),
				"paddingbottom": parseInt($parentelem.css("padding-bottom")),
				"borderbottomwidth": parseInt($parentelem.css("border-bottom-width")),
				"borderleftwidth": parseInt($parentelem.css("border-left-width"))
			};
			parentstyles.bottomtotal = parentstyles.paddingbottom + parentstyles.borderbottomwidth; 
			items[stickyboxid]["parentstyles"] = parentstyles;
		},

		//
		setStaticStyles: function(stickyboxid) {
			if (typeof items[stickyboxid] !== "object") { return; }
			var $elem = items[stickyboxid].$elem;
			var computedstyles = {
				"float": $elem.css("float"),
				"position": $elem.css("position"),
				"width": $elem.css("width"),
				"marginLeft": $elem.css("marginLeft"),
				"marginRight": $elem.css("marginRight"),
				"paddingLeft": $elem.css("paddingLeft"),
				"paddingRight": $elem.css("paddingRight"),
				"display": $elem.css("display")
			};
			// Assign relevant styles to the placeholder
			var placeholderstickyboxid = stickyboxid + "-placeholder";
			var $placeholder = Stickyboxes.$find(placeholderstickyboxid);
			$placeholder.css(computedstyles);
			// Used to take up the same amount of overall space as the original element
			items[stickyboxid].verticalmarginsandpadding = parseInt($elem.css("margin-top"))
				+ parseInt($elem.css("margin-bottom"))
				+ parseInt($elem.css("padding-top"))
				+ parseInt($elem.css("padding-bottom"));
		},


		updateStickyState: function(options) {
			// stickyboxid, thestate, thisbox) {
			if (typeof options !== "object" || options === null) { return; }
			if (typeof options.stickyboxid !== "string") { return; }
			if (typeof options.state !== "string") { return; }
			// Set 'thisbox' if it wasn't passed as a parameter (it's optional)
			if (typeof options.thisbox === "undefined") {
				if (typeof items === "undefined") { return; }
				if (typeof items[options.stickyboxid] === "undefined") { return; }
			}
			// var item = items[stickyboxid]
			var stickyboxid = options.stickyboxid;
			var thestate = options.state;
			var thisbox = Stickyboxes.getThisBoxObj(stickyboxid);
			var triggerevent = options.triggerevent || "";
			// console.log("thestate: " + thestate);
			// var validstates = ["none", "sticky", "bottomed"];
			// if ($.inArray(thestate, validstates) < 0) { return; }
			if (thestate === "none") {
				if (thisbox.stickystate !== "none") {
					var oldstate = thisbox.stickystate;
					items[stickyboxid].stickystate = "none";
					if (oldstate == "bottomed" && thisbox.parentisancestor) {
						thisbox.$ph.after(thisbox.$elem); // Move $elem back where it belongs
						thisbox.$elem.css("z-index",""); // Remove "at-bottom" z-index
					}
					thisbox.$ph.css({
						"height": "0",
						"margin-top": "0",
						"margin-bottom": "0"
					});
					thisbox.$elem.css({
						"position": "",
						"top": "",
						"bottom": "",
						"left": "",
						"width": "",
						"z-index": ""
					});
					thisbox.$elem.css(thisbox.inlinestyles); // apply any original inline styless
				}
			} else if (thestate === "sticky") {
				// console.log("STICLYYY");
				if (thisbox.stickystate !== "sticky") {
					var oldstate = thisbox.stickystate;
					items[stickyboxid].stickystate = "sticky";
					if (oldstate == "bottomed" && thisbox.parentisancestor) {
						thisbox.$ph.after(thisbox.$elem); // Move $elem back where it belongs
						thisbox.$elem.css("z-index",""); // Remove "at-bottom" z-index
					}
					thisbox.$elem.css({
						"position": "fixed",
					});
				}
				thisbox.$ph.css("height", thisbox.elemtotalheight + "px");
				thisbox.phoffset = thisbox.$ph.offset(); // Recalculate due to potential height change
				thisbox.$elem.css({
					"width": thisbox.$ph.css("width"), // Recalculate in case breakpoint changed
					"left": thisbox.phoffset.left - values.scrollleft - parseInt(thisbox.phmarginleft),
					"right": ""
				});
				if (thisbox.dockLocation === "bottom") {
					thisbox.$elem.css({
						"top": "",
						"bottom": thisbox.offset
					});
				} else {
					thisbox.$elem.css({
						"top": thisbox.offset,
						"bottom": ""
					});
				}

			} else if (thestate === "bottomed") {
				if (thisbox.stickystate !== "bottomed") {
					items[stickyboxid].stickystate = "bottomed";
					// $("body").append($elem);
					if (thisbox.parentisancestor) {
						// stickylog("*** STICKYBOXES: Parent IS ancestor, moving");
						thisbox.$parentelem.append(thisbox.$elem); // Move for absolute positioning
						if (thisbox["zIndexAtBottom"] !== "") {
							thisbox.$elem.css("z-index", thisbox["zIndexAtBottom"]); // Set optional user-specified z-index, since it has moved in DOM
						}
					}
					thisbox.$elem.css({
						"position": "absolute",
						"bottom": "",
						"right": ""
					});
				}
				thisbox.$ph.css("height", thisbox.elemtotalheight + "px"); // In case of height change
				thisbox.$elem.css("top", (thisbox.parentelemheight - thisbox.elemtotalheight - thisbox.endPointOffset) + "px");
				thisbox.$elem.css("left", (thisbox.phoffset.left - thisbox.parentelemoffset.left - parseInt(thisbox.phmarginleft)) + "px");
				if (triggerevent === "window-resize") {
					thisbox.$elem.css("width", thisbox.$ph.css("width"));
				}
			}
		},

		// Main function that's called upon resize, scroll, or sometimes
		// manually by the programmer. Recalculated and repositions
		// all stickyboxes
		updateAll: function(triggerevent) {

			if (!initialized) { return; }

			updateCommonValues();
			$.each(items, function(key, item) {
				// var elem,  offset, elemtotalheight, $ph, phoffset, $parentelem, parentelemoffset, parentstyles;
				
				var thisbox = Stickyboxes.getThisBoxObj(key);
				var paststartpoint;
				var pastendpoint;
				if (thisbox.dockLocation === "bottom") {
					// stickylog((values.scrolltop + values.windowheight) + " / " + (phoffset.top + elemtotalheight + offset));
					paststartpoint = (values.scrolltop + values.windowheight > thisbox.phoffset.top + thisbox.elemtotalheight + thisbox.offset);
					pastendpoint = (values.scrolltop + values.windowheight > thisbox.parentelemoffset.top + thisbox.parentelemheight - thisbox.offset - thisbox.endPointOffset);
				} else {
					paststartpoint = (values.scrolltop + thisbox.offset > thisbox.phoffset.top);
					pastendpoint = (values.scrolltop + thisbox.offset + thisbox.elemtotalheight > thisbox.parentelemoffset.top + thisbox.parentelemheight - thisbox.endPointOffset); // + item.parentstyles.bottomtotal)    
				}
				
				if (key === "id-pgevoke-story-0-socialbuttons") {
					// stickylog(((values.scrolltop + offset) + " / " + phoffset.top) + " | " + ((values.scrolltop + offset + elemtotalheight) + " / " + (parentelemoffset.top + $parentelem.height())));
				}
				// $("#point").css("top", values.scrolltop + offset + elemtotalheight);
				// console.log(key);
				if (key === "pgevoke-story-0-socialbuttons") {
					// console.log(values.scrolltop + " + " + thisbox.offset + " > " + thisbox.phoffset.top + " | " + paststartpoint);
				}
				// Before start point
				if (!(paststartpoint)) { 

					Stickyboxes.updateStickyState({
						stickyboxid: key,
						state: "none",
						triggerevent: triggerevent
					});

				// Between start and end point
				} else if (!(pastendpoint)) {
					Stickyboxes.updateStickyState({
						stickyboxid: key,
						state: "sticky",
						triggerevent: triggerevent
					});

				// Past end point
				} else {
					Stickyboxes.updateStickyState({
						stickyboxid: key,
						state: "bottomed",
						triggerevent: triggerevent
					});

				}
			});
		}
	};

})();
(function( $ ) {
	$.fn.stickybox = function(options) {
		var $elem = this.first(); // If multiple matching elements, take only first
		Stickyboxes.add($elem, options);     // Interface with the plugin
		return $elem;  // For method chaining
	};
}( jQuery ));

window.BINDER = (function(){ 
	debuglogkey = "BINDER";
	function debuglog(thingtolog) {	
		DEBUGLOGR.log(debuglogkey, thingtolog);
	}
	var events = [];
	function exists(event) {
		return (events.indexOf(event) >= 0);
	}
	function add(event) {
		if (events.indexOf(event) < 0) {
			events.push(event);
		}
	}
	function remove(event) {
		var index = events.indexOf(event);
		if (index >= 0) {
			events.splice(index, 1);
		}
	}
	return {
		on: function(event, func, noDups) {
			noDups = noDups || false;
			debuglog("on(): called for " + event + " with noDupes=" + noDups.toString());
			debuglog("Events: " + JSON.stringify(BINDER.getAll()));
			if (noDups && exists(event)) { return false; }
			debuglog("on(): doesn't exist yet, enqueuing");
			$(document).on(event, func);
			add(event);
		},
		off: function(event) {
			debuglog("off(): called for " + event);
			debuglog("Events: " + JSON.stringify(BINDER.getAll()));
			$(document).off(event);
			if (exists(event)) {
				debuglog("off(): " + event + " exists. Removing.");
				remove(event);
			}
		},
		getAll: function() {
			return events;
		}
	};
})();

// **********************************
//           pg.all.pgvars
// **********************************
window.PGVARS = window.PGVARS || {};
// window.PGVARS.apibaseurl = "";

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.pgvars = (function() {
	var debuglogkey = "PGVARS";
	function debuglog(thingtolog) {
		
			DEBUGLOGR.log(debuglogkey, thingtolog);
   
	}
	var pathname = window.location.pathname;
	// Remaining: sectionid, sectionseolabel, sitecode, sitetype, headerid (?)

	return {
		funcs: {
			pgurl: function() {
				return window.location.protocol + "//" + window.location.hostname;
			},
			apibaseurl: function() {
				var url;
				if (PGVARS.site === "blade") {
					url = "https://api2.toledoblade.com";
				} else {
					if (PGVARS.sitecode === "DEV") {
						// url = "https://api2dev.post-gazette.com";
						url = "https://api2.post-gazette.com";	
					} else {
						url = "https://api2.post-gazette.com";	
					}
				}
				return url;
			},
			param1: function() {
				var pattern = /^\/(.+?)(\/|\?|$)/;
				var match = pathname.match(pattern);
				return (match) ? match[1] : "";
			},
			param2: function() {
				var pattern = /^\/.+?\/([^\/\?]+?)(\/|\?|$)/;
				var match = pathname.match(pattern);
				return (match) ? match[1] : "";
			},
			requesttype: function() {
				var param1 = window.PGVARS.param1;
				if (param1 === "" || param1 === "flatcache-a" || param1 === "flatcache-b") {
					return "FRONTPAGE";
				}
				if (param1 === "pagebuilder") {
					var pattern = /storyid/;
					var match = window.location.search.match(pattern);
				} else {
					var pattern = /\d{4}\/\d{2}\/\d{2}\/.+/;	
					var match = pathname.match(pattern);
				}
				
				return (match) ? "STORY" : "SECTION";
			},
			spathold: function() {
				var sp = "";
				if (typeof PGVARS.param1 === "string") {
					sp = PGVARS.param1;
				}
				if (typeof PGVARS.param2 === "string" && PGVARS.param2 !== "") {
					var pattern = /^\d{4}$/;
					var match = pathname.match(pattern);
					if (typeof match === "object" && match === null) {
						sp = PGVARS.param2 +  "," + sp;
 					}
				}
				return sp;
			},
			isnativostory: function() {
				if (pathname === "/sponsored" || pathname === "/sponsored-local") {
					return true;
				} else {
					return false;
				}
			},
			qsps: function() {
				var qsps = {};
				var match,
					pl     = /\+/g,  // Regex for replacing addition symbol with a space
					search = /([^&=]+)=?([^&]*)/g,
					decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
					query  = window.location.search.substring(1);
				while (match = search.exec(query))
				   qsps[decode(match[1])] = decode(match[2]);
				return qsps;
			},
			twitterid: function() {
				if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
					return "toledonews";
				} else {
					return "PittsburghPG";
				}
			},
			mydotbaseurl: function() {
				if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
					return "my.toledoblade.com";
				} else {
					return "my.post-gazette.com";
				}
			},
			istestweb: function() {
				var hostname = window.location.hostname;
				if (window.btoa(hostname.substr(0,8).toLowerCase()) === "dGVzdHdlYjQ=") {
					return true;
				} else {
					return false;
				}
			},
			storyid: function() {
				if (typeof PGVARS.requesttype === "string" && PGVARS.requesttype === "STORY") {
					var pattern = /\/([\d]+?)\/?$/;
					var match = pathname.match(pattern);
					if (match && Array.isArray(match) && typeof match[1] === "string") {
						return match[1];
					} else {
						return "";
					}
				} else {
					return "";
				}
			},
			storygroup: function() {
				if (typeof PGVARS.requesttype !== "string" || PGVARS.requesttype !== "STORY") { return ""; }
				if (typeof pgStoryZeroJSON !== "object" || Array.isArray(pgStoryZeroJSON) || pgStoryZeroJSON === null) { return false; }
				if (typeof pgStoryZeroJSON.articles !== "object" || !Array.isArray(pgStoryZeroJSON.articles)) { return false; }
				if (pgStoryZeroJSON.articles.length < 1) { return false; }
				if (typeof pgStoryZeroJSON.articles[0].storyGroup !== "string") { return false; }
				return pgStoryZeroJSON.articles[0].storyGroup;
			},
			spotim: function() {
				// if (PGVARS.sitecode === "STAGE") {
				//	return true;
				// } else {
				//	return false;
				// }
				if (typeof PGVARS.piano === "boolean" && PGVARS.piano) {
					return true;
				} else {
					return false;	
				}
			},
			piano: function() {
				// if (PGVARS.sitecode === "STAGE") {
				//	return true;
				// } else {
				//	return false;
				// }
				return false;
			},
			pianosandbox: function() {
				return false; // default value
			},
			electionmode: function() {
				// 0 = No map
				// 1 = Map below big story, above top 9
				// 2 = Map below top 9
				debuglog("Reading electionControls");
				if (PGVARS.site !== "pg") { return 0; }
				var currentsetting = 0;
				var key = (PGVARS.sitecode === "DEV") ? "dev" : "live";
				if (!(typeof PGPAGEDATA === "object" && typeof PGPAGEDATA.electionControls === "object" && typeof(PGPAGEDATA.electionControls[key] === "object"))) {
					debuglog("Couldn't find Election Controls. Exiting");
					return false;
				}
				var controls = PGPAGEDATA.electionControls[key];
				var widgetison = (typeof controls["AP Widget"] === "boolean") ? controls["AP Widget"] : false;
				var widgetlocation = (typeof controls["Location"] === "number" && controls["Location"] === 2) ? 2 : 1;
				if (widgetison) {
					currentsetting = widgetlocation;
				}
				if (PGVARS.sitecode === "LIVE") {
					return currentsetting;
				} else {
					if (typeof PGVARS.qsps.electionmode === "string") {
						return parseInt(PGVARS.qsps.electionmode);
					} else {
						return currentsetting; // currentsetting;
					}
				}
			},
			electionmap: function() {
				var currentsetting = "national";
				if (PGVARS.sitecode === "LIVE") {
					return currentsetting;
				} else {
					if (typeof PGVARS.qsps.map === "string") {
						return PGVARS.qsps.map;
					} else {
						return currentsetting;
					}
				}	
			},
			eeditionpromo: function() {
				// 0 = No map
				// 1 = Map below big story, above top 9
				// 2 = Map below top 9
				var currentsetting = 0;
				if (PGVARS.sitecode === "LIVE") {
					return currentsetting;
				} else {
					if (typeof PGVARS.qsps.eeditionpromo === "string") {
						return parseInt(PGVARS.qsps.eeditionpromo);
					} else {
						return currentsetting; // currentsetting;
					}
				}
			},
			/*
			electionbpgroup: function() {
				// var bp = PGLIB.all.breakpoints.getCurrent();
				var group = PGLIB.all.breakpoints.getCurrentGroup();
				if (group === "mobile" || bp === "sm") {
					return "mobile";
				} else {
					return "desktop";
				}
			},
			*/
			querylyupdate: function() {
				if (PGVARS.sitecode !== "DEV") {
					return true; // change to true when going live
				} else {
					return true;
				}
			},
			prebidupdate: function() {
				if (PGVARS.site === "pg") {
					return true;
				} else if (PGVARS.site === "blade") {
					return true;
				} else {
					return false;
				}
			},
			usenativo: function() {
				if (PGVARS.site === "pg") {
					return true;
				} else {
					if (PGVARS.sitecode !== "LIVE") {
						return true;
					} else {
						return true; // Live Blade
					}
				}
			},
			usefotomoto: function() {
				if (PGVARS.site === "blade") {
					return true;
				} else {
					return false;
				}
			},
			useviafoura: function() {
				if (PGVARS.site === "blade") {
					return true;
				} else {
					return false;
				}
			},
			usenewcivicscience: function() {
				if (PGVARS.site === "pg") {
					return true;
				} else {
					return true;
				}
			},
			usegns: function() {
				if (PGVARS.site === "pg") { return false; }
				if (PGVARS.sitecode !== "LIVE") {
					return true; // On for dev
				} else {
					return false; // Off for live
				}
			},
			useSpecialPromo: function() {
				if (PGVARS.site === "pg") {
					return false; // Disabling on 8/7/23 per MR
				} else {
					return false;
				}
			},
			pgnewcomments: function() {
				if (PGVARS.site !== "pg") { return false; } // PG only
				return false;
				// return (PGVARS.sitecode !== "live"); // dev only
			}
		},
		init: function() {
			console.log("PGLIB.all.pgvars.init() called");
			debuglog("init() called");
			$.each(PGLIB.all.pgvars.funcs, function(varname, func) {
				if (typeof PGVARS[varname] !== "undefined") {
					debuglog("PGVARS['" + varname + "'] is already set. Skipping.");
				} else if (typeof func !== "function") {
					debuglog("ERROR: Value of funcs['" + varname + "'] is not a function. Skipping.");
				} else {
					var varval = func();
					window.PGVARS[varname] = varval;
					var logmsg = "";
					logmsg += "Setting PGVARS['" + varname + "'] = ";
					logmsg += (typeof varval === "string") ? "\"" : "";
					logmsg += varval.toString();
					logmsg += (typeof varval === "string") ? "\"" : "";
					debuglog(logmsg);
				}
			});
		}
	};
})();
PGLIB.all.pgvars.init();

 // For backwards compatibility
window.PGAPIBaseURL = window.PGVARS.apibaseurl;
window.isNativoStory = window.PGVARS.isnativostory;

// Set PGVARS.technology
(function(){
	var technology = window.TheAgent=function(){function f(b){var a=e([["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],
["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]]).filter(function(a){return a.rule&&a.rule.test(b)})[0];return a?a.name:null}function g(b){var a=e([["aol",/AOLShield\/([0-9\._]+)/],
["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["ie",/Trident\/7\.0.*rv:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram ([0-9\.]+)/]]);if(!b)return null;if(a=a.map(function(a){var d=a.rule.exec(b),c=d&&d[1].split(/[._]/).slice(0,3);c&&3>c.length&&(c=c.concat(1==c.length?[0,0]:[0]));return d&&{name:a.name,version:c.join(".")}}).filter(Boolean)[0]||null)a.os=f(b);return a}
function e(b){return b.map(function(a){return{name:a[0],rule:a[1]}})}return{detect:function(){var b;return(b="undefined"===typeof navigator&&"undefined"!==typeof process?{name:"node",version:process.version.slice(1),os:require("os").type().toLowerCase()}:null)?b:"undefined"!==typeof navigator?g(navigator.userAgent):null}()}}();
	PGVARS.technology = technology.detect;
})();



/*
(function() {
	var seolabel = PGVARS.param1;
	if (PGVARS.param2 !== "") {
		seolabel += "/" + PGVARS.param2;
	}
	if (seolabel === "")  {
		seolabel = "frontpage";
	}
	window.PGVARS.sectionseolabel = seolabel;
})();
*/

// ******************************
//        pg.all.init
// ******************************
$(document).ready( function() {
	$("body").addClass("pg-documentready");
});

_.templateSettings = {
	evaluate:    /\<\<\<(.+?)\>\>\>/g,
	interpolate: /\<\<\<=(.+?)\>\>\>/g,
	escape:      /\<\<\<-(.+?)\>\>\>/g,
	variable: "theobj"
};

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.fp || {};
window.PGLIB.all.clicktracker = (function() {
	var debuglogkey = "CLICKTRACKER";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		trigger: function(slug) {
			debuglog("Sending trigger (" + slug + ")");
			setTimeout(function() {
				_PG._trigger("documentUpdate", slug);
			}, 100);
		}
	}
})();

// ******************************
//        pg.all.pgfns
// ******************************

window.PGFNS = window.PGFNS || {};

PGFNS.formatDate = function(datestring, style) {
	var dateobj = new Date(datestring);
	var thedate = "";
	switch(style) {
		case "timeago":
			if (isNaN(dateobj)) { break; }
			thedate = jQuery.timeago(dateobj);
			thedate = thedate.replace(/about /g,"");
			break;
		case "timeagoshort":
			if (isNaN(dateobj)) { break; }
			thedate = jQuery.timeago(dateobj); // about 5 minutes ago 

			thedate = thedate.replace(/about /g,""); // 5 minutes ago
			thedate = thedate.replace(/ ago/g,""); // 5 minutes

			thedate = thedate.replace(/a second/g,"1s");
			thedate = thedate.replace(/a minute/g,"1m");
			thedate = thedate.replace(/an hour/g,"1h");
			thedate = thedate.replace(/a day/g,"1d");
			thedate = thedate.replace(/a week/g,"1w");
			thedate = thedate.replace(/a month/g,"1mo");
			thedate = thedate.replace(/a year/g,"1y");

			thedate = thedate.replace(/ seconds/g,"s");
			thedate = thedate.replace(/ minutes/g,"m");
			thedate = thedate.replace(/ hours/g,"h");
			thedate = thedate.replace(/ days/g,"d");
			thedate = thedate.replace(/ weeks/g,"w");
			thedate = thedate.replace(/ months/g,"mo");
			thedate = thedate.replace(/ years/g,"yr");
			break;
		case "normal":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) { break; }
			thedate = themoment.format("ddd, MMM D, YYYY, h:mma");
			break;
		case "endofstory":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) { break; }
			thedate = themoment.format("MMMM D, YYYY, h:mm a");
			thedate = thedate.replace(/pm$/, "p.m.");
			thedate = thedate.replace(/am$/, "a.m.");
			break;
		case "storytime":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) { break; }
			thedate = themoment.format("h:mm A");
			break;
		case "storydate":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) { break; }
			thedate = themoment.format("MMM D, YYYY");
			break;
		case "integer":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) {
				thedate = 0;
			} else {
				thedate = themoment.format("YYYYMMDDHHmmss");	
				thedate = parseInt(thedate);
			}
			break;
		case "header":
			var themoment;
			themoment = new moment(datestring);
			if (themoment.isValid() === false) { break; }
			thedate = themoment.format("dddd, MMMM DD, YYYY, h:mmA");
			break;		
		default:
			thedate = "";
			break;			
	}
	return thedate;
};

PGFNS.formatByline = function(byline) {
	// Example: By John Smith / Pittsburgh Post-Gazette
	byline = byline.replace("By ",""); // John Smith, Pittsburgh Post-Gazette
	var slash = byline.indexOf(" /");
	if (slash > 0) { byline = byline.substring(0,slash); }// John Smith 
	return byline;
};

PGFNS.getParam1 = function(url) {
	// Ex: http://www.post-gazette.com/sports/steelers
	// var theregex = /post-gazette\.com\/(.*?)(\/|$)/g; 
	var theregex = /\.com\/(.*?)(\/|$)/g; 
	var match = theregex.exec(url);
	if (match !== null) {
		return(match[1]); //sports
	} else {
		return "";
	}
};

PGFNS.getSectionName = function(sectionid) {
	// Note: Based off of param1 usually
	sectionid = sectionid.toLowerCase()
	var sectionname = sectionid;
	if (sectionid === "ae" || sectionid === "a-e" || sectionid === "aande") { sectionname = "A&E"; }
	if (sectionid === "topworkplaces2016") { sectionname = "Top Workplaces"; }
	var replacements = {
		"random-acts-of-kindness": "Kindness",
		"business-of-health": "Health Industry",
		"athlete-of-the-week": "Weekly Honors",
		"communities-at-a-glance": "Communities",
		"dispatches-from-the-front": "Dispatches",
		"health": "Health & Wellness",
		"election2022": "Election 2022",
		"pittsburgh-synagogue-shooting-trial": "Synagogue Shooting Trial"
	};
	sectionname = (typeof replacements[sectionname] === "string") ? replacements[sectionname] : sectionname;
	sectionname = sectionname.replace(/-/g," ");
	return sectionname;
};

PGFNS.getSectionTagText = function(sectionname) {
	sectionname = sectionname.toLowerCase();
	var replacements = {
		"other sports": "sports",
		"high school sports": "high school",
		"hsother": "high school",
		"college sports": "college",
		"other colleges": "college",
		"random acts of kindness": "kindness",
		"business of health": "health industry",
		"other business": "business",
		"athlete of the week": "weekly honors",
		"communities at a glance": "communities",
		"editorials": "editorial",
		"letters": "letter",
		"op ed columns": "op-ed",
		"aging edge reports": "aging edge",
		"aging-edge": "aging edge",
		"dispatches from the front": "dispatches",
		"health-well-being": "well-being",
		"meals-with-maddie": "meals with maddie"
	};
	if (PGVARS.site === "blade") {
		replacements["sponsored content"] = "b partners";
	}
	sectionname = (typeof replacements[sectionname] === "string") ? replacements[sectionname] : sectionname;
	if (sectionname.substr(0,2) === "hs" && sectionname.substr(2,1) !== " " && sectionname.length > 2) {
		sectionname = "hs " + sectionname.substr(2);
	}
	sectionname = sectionname.replace(/^politics\s-\s(.+)$/, "$1 politics");
	sectionname = sectionname.replace(/^around\sthe\sleague\s(.+)$/, "$1");
	sectionname = (sectionname === "nation politics") ? "national politics" : sectionname;
	sectionname = sectionname.replace(/pittsburgh/g,"pgh");
	sectionname = sectionname.replace(/^around\sthe\sleague\s(.+)$/, "$1");
	var sportscolumnists = ["joe starkey", "ron cook", "gene collier", "paul zeise", "sean gentille", "jason mackey", "sports columns"];
	sectionname = (sportscolumnists.indexOf(sectionname) >= 0) ? "column" : sectionname;
	var opinioncolumnists = ["pg columnists", "ruth ann dailey", "david shribman", "dan simpson", "tony norman", "reg henry", "brian o'neill", "keith c. burris", "diana nelson jones", "gene collier (opinion columns)", "karen kane", "jeffery gerritt", "brandon mcginley", "david mills", "adriana e. ramírez"];
	sectionname = (opinioncolumnists.indexOf(sectionname) >= 0) ? "column" : sectionname;
	return sectionname;
};


PGFNS.xmlToJson = function(xml) {
	// By dw
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

// Check if node of multidimensional array exists
// Example call: issetmulti(array, "items", "myitem", "title")
PGFNS.issetmulti = function(arr) {
	var i, max_i;
	for (i = 1, max_i = arguments.length; i < max_i; i++) {
		arr = arr[arguments[i]];
		if (typeof arr === "undefined" || arr === null) {
			return false;
		}
	}
	return true;
};

// Add the lazyload plugin functionality to all
// images on the page w/ .pg-lazyload. Also removes
// the class so that they don't get double-binded
// the next time this function is called.
// Must load lazyload plugin in head of document
PGFNS.bindlazyloadimages = function(){
	$(document).ready(function() {
		// $("img.pg-lazyload").show().lazyload({
		//	threshold : 2500
		// }).removeClass("pg-lazyload");
		$("img.pg-lazyload").show().unveil(2000).removeClass("pg-lazyload");
	});
};

PGFNS.inArray = function(thearray, thingtofind) {
	for (i=0;i<thearray.length;i++) {
		if (thearray[i] === thingtofind) { return i; }
	}
	return -1;
};

PGFNS.formatImage = function(url, settings) {
	if (typeof url !== "string") { return ""; }
	if (typeof settings !== "string") { return ""; }
	
	var regex = new RegExp(/(.*\/20\d{1,2}\/\d{1,2}\/\d{1,2}\/)(.+$)/);
	var matches = url.match(regex);
	
	if (matches === null) { return url; } // Just return the URL if it's malformed
	
	var urlhalf1 = matches[1]; // "http://www.post-gazette.com/images/2016/10/11/"
	var urlhalf2 = matches[2]; // "mypic.jpg" OR "q80_cTc_ca0,0,10,20/mypic.jpg"
	
	var regex = new RegExp(/^(.+)(\/.+$)/); // Look for a slash and get first group
	var matches = urlhalf2.match(regex);

	if (matches !== null) { // If there is a slash
		var oldsettings = matches[1]; // q80_cTc_ca0,0,10,20
		var urlendportion = matches[2]; // /mypic.jpg
		var regex = new RegExp(/ca(\d+?,\d+?,\d+?,\d+?)$/);
		var matches = oldsettings.match(regex);
		if (matches !== null) { // If there are coords
			var coords = matches[1]; // 0,0,10,20
			url = urlhalf1 + settings + "_ca" + coords + urlendportion;
		} else { // No coords
			url = urlhalf1 + settings + urlendportion;
		}
	} else { // http://www.post-gazette.com/images/2016/10/11/mypic.jpg
		url = urlhalf1 + settings + "/" + urlhalf2;
	}

	return url;
};

PGFNS.hasImageSizeCDN = function(theobj, size) {
	// console.log("CDNIMAGE: Checking for CDN size '" + size + "' in theobj:", theobj);
	if (typeof theobj !== "object" || typeof size !== "string") { return false; }
	if (!(PGFNS.issetmulti(theobj, "cdnimage", "sizes"))) { return false; }
	if (theobj.cdnimage.sizes.indexOf(size) >= 0) {
		// console.log("CDNIMAGE: Found it");
		return true;
	} else {
		// console.log("CDNIMAGE: Not found");
		return false;
	}
};

PGFNS.getImageLinkCDN = function(theobj, size) {
	// console.log("Getting CDN link", theobj, size);
	if (!(issetmulti(theobj, "cdnimage", "host"))) { return ""; }
	if (!(issetmulti(theobj, "cdnimage", "fileName"))) { return ""; }
	var theurl = "https://" + theobj.cdnimage.host + "/" + size + "/" + theobj.cdnimage.fileName;
	// console.log("CDNIMAGE: Got CDN link: " + theurl);
	return theurl;
};

PGFNS.getTimer = function() {
	var d = new Date();
	var t = d.getTime();
	return t;
};

PGFNS.getElapsedTime = function(timestamp) {
	var d = new Date();
	var t = d.getTime();
	var elapsedtime = (t - timestamp);
	return elapsedtime;
};

PGFNS.jumpToStory = function(index) {
	var $story = $("#pgevoke-story-" + index);
	if ($story.length > 0) {
		var offset = $story.offset().top;
		$(window).scrollTop(offset - 50);
	}
};

PGFNS.getMobileOS = function() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
		return 'ios';
	} else if (userAgent.match(/Android/i)) {
		return 'android';
	} else {
		return 'unknown';
	}
};

PGFNS.setViewportMaxScale = function(maxscale) {
	if (typeof maxscale !== "number") { return; }
	if (maxscale < 1) { return; }
	$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, maximum-scale=" + maxscale.toFixed(1) + ", minimum-scale=1.0");
};

window.getResponsiveSize = function() {
	if (typeof document === "undefined" || typeof document.body === "undefined") { return "loading"; }
	var bodyaftersize = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	var size;
	if (bodyaftersize.indexOf("size-xs") !=-1) { size = "xs"; }
	else if (bodyaftersize.indexOf("size-sm") !=-1) { size = "sm"; }
	else if (bodyaftersize.indexOf("size-md") !=-1) { size = "md"; }
	else if (bodyaftersize.indexOf("size-lg") !=-1) { size = "lg"; }
	else if (bodyaftersize.indexOf("size-xl") !=-1) { size = "xl"; }
	else if (bodyaftersize.indexOf("size-fixed") != -1) { size = "fixed"; }
	else { size = "unknown" }
	return size;
};

PGFNS.fireKruxSnippet = function() {
	if (typeof Krux === "undefined") { return false; }
	Krux(
		'ns:nucleus',
		'page:load',
		function(err) {
			if (err !== null) {
				console.log("Krux Error: " + err);
			}
		},
		{
			pageView: false
		}
	);
	return true;
};

PGFNS.getQueryString = function(key) {
	if (typeof $ === "undefined") { return false; }
	if (typeof $.QueryString !== "object") { return false; }
	if (typeof $.QueryString[key] !== "string") { return false; }
	return $.QueryString[key];
};

PGFNS.getLiberLink = function(thelink) {
	if (typeof thelink !== "string") { return thelink; }
	thelink = thelink.replace(/^(https?:)?\/\/www.post-gazette.com/, "https://liber.post-gazette.com");
	thelink = thelink.replace(/^\/([^\/])/, "https://liber.post-gazette.com/$1");
	return thelink;
};

PGFNS.getSiteURL = function(format) {
	if (typeof PGVARS.siteurl !== "string") { return ""; }
	var url;
	url = PGVARS.siteurl;
	url = PGFNS.formatLink(url);
	return url;
};

PGFNS.formatLink = function(link, format) {
	if (typeof link !== "string") { return ""; }
	if (typeof format !== "string") { return ""; }
	switch (format) {
		case "http":
			link = link.replace(/^(https?:)?\/\//, "http://");
			break;
		case "https":
			link = link.replace(/^(https?:)?\/\//, "https://");
			break;
		case "//":
			link = link.replace(/^(https?:)?\/\//, "//");
			break;
	}
	return link;
};

PGFNS.encodeForSocialShare = function(thestring) {
	thestring = encodeURIComponent(thestring);
	thestring = thestring.replace(/'/g, "%27");
	thestring = thestring.replace(/"/g, "%22");
	return thestring;
};

PGFNS.siteSettingExists = function(key) {
	if (typeof PGSITESETTINGS !== "object" || !(PGFNS.issetmulti(PGSITESETTINGS, key))) {
		return false;
	}
	return true;
};
PGFNS.getSiteSetting = function(key) {
	if (PGFNS.siteSettingExists) {
		return PGSITESETTINGS[key];
	} else {
		return null;
	}
}

PGFNS.getModule = function() {
	// Not actually needed/used at this time
	if (arguments.length === 0) { return false; }
	var thearray;
	if (arguments.length === 1 && typeof arguments[0] === "object" && Array.isArray(arguments[0])) {
		thearray = arguments[0];
	} else {
		thearray = arguments;
	}
	var currentObj = window;
	$.each(thearray, function(i, key) {
		if (typeof key !== "string") { return false; }
		if (typeof currentObj[key] !== "object") { return false; }
		currentObj = currentObj[key];
	});
	return currentObj;
}


PGFNS.isUserPaid = function() {
	if (typeof _PG !== "undefined"
		&& PGFNS.issetmulti(_PG, "user", "info", "paid")
		&& typeof _PG.user.info.paid === "boolean") {
		return _PG.user.info.paid;
	} else {
		return false;
	}
}

PGFNS.byline = (function() {
	return {
		getAPIArray: function(byline) {
			if (typeof byline !== "string") { return false; }
			byline = byline.replace("By ","");
			byline = byline.trim();
			var bylinearray = byline.split(/\s?\/\s?(.+$)/);
			var bylinestr1 = bylinearray[0].trim();
			var bylinestr2 = (typeof bylinearray[1] !== "undefined") ? bylinearray[1].trim() : "";
			// ------- Format for API ------
			var apiorg;
			var apiauthor;
			if (bylinestr2 === "") {
				var apiorg = bylinestr1.replace(/[^a-zA-Z]/g, "");
				var apiauthor = "default";
			} else {
				var apiorg = bylinestr2.replace(/[^a-zA-Z]/g, "");
				var apiauthor = bylinestr1.replace(/[^a-zA-Z]/g, "");
			}
			apiorg = apiorg.toLowerCase();
			apiauthor = apiauthor.toLowerCase();
			var returnval ={};
			returnval['apiorg'] = apiorg;
			returnval['apiauthor'] = apiauthor;
			return returnval;
		}
	}
})();

PGFNS.getScoreboardStatus = function() {
	if (PGVARS.site !== "blade") { return false; }
	if (PGVARS.requesttype !== "FRONTPAGE" && PGVARS.requesttype !== "SECTION" ) {
		return false;
	}
	if (PGVARS.requesttype === "SECTION" && (PGVARS.param1 !== "sports" || PGVARS.param2 !== "")) {
		return true;
	}
	if (typeof PGVARS.scoreboardoverride === "boolean" && PGVARS.scoreboardoverride) {
		if (typeof PGVARS.scoreboardvisiblefp === "boolean" && PGVARS.scoreboardvisiblefp) {
			return true;
		} else {
			return false;
		}
	}
	var date = new Date();
	var dateEST;
	try {
		dateEST = new Date(date.toLocaleString('en-US', {
			timeZone: 'America/Toronto'
		}));
	} catch(e) {
		dateEST = date; // Use local date/time for IE
	}
	// var diff = datelocal.getTime() - dateintz.getTime();
	// var date = new Date(datelocal.getTime() + diff);
	var day = dateEST.getDay();
	var hour = dateEST.getHours();
	if (day === 5) {
		return true;
	} else if (day === 6 && hour < 12) {
		return true;
	} else {
		return false;
	}
};

PGFNS.pageGetsScoreboard = function() {
	if (PGVARS.site !== "blade") { return false; }
	if (PGVARS.requesttype === "FRONTPAGE" && PGFNS.getScoreboardStatus() === true) {
		return true;
	} else if (PGVARS.requesttype === "SECTION" && PGVARS.param1 === "sports" && PGVARS.param2 === "") {
		if (PGVARS.sitecode === "LIVE") {
			return true; // Off for live
		} else {
			return true; // Off for dev
		}
	} else {
		return false;
	}
	// PGVARS.requesttype === "STORY" && theobj.transporterid !== "0"
};

PGFNS.loadAPScript = function() {
	console.log("loadAPScript called");
	var thescript = document.createElement("script");
	thescript.type = "text/javascript";
	// thescript.src = "https://elections.ap.org/widgets/js/resizer.client.min.js"; OLD 2020
	thescript.src = "https://interactives.ap.org/election-results/assets/microsite/resizeClient.js"; // New 2024
	/*
	thescript.onload = function() {
		console.log("loadAPScript onload function called");
		// iFrameResize({}, '#iframe_56f172dea1c0b028520cfdc1d29d2da9');
		// iFrameResize({}, '#iframe_a4c765d8da1f06193fc46531f2fb1198');
		// iFrameResize({}, '#iframe_07dc174ad4c8351336cda3697d391c98');
		iFrameResize({}, '#iframe_30aa7afbc7d3f689b62cabeda4dbcd6e');
		iFrameResize({}, '#iframe_8d671dbd8fecbf69623d15a01f113a09');
		
	};
	*/
	var targetelem = document.getElementsByTagName("head")[0];
	targetelem.insertBefore(thescript, targetelem.firstChild);
};

PGFNS.getUserObj = function() {
	var userinfostring = localStorage.getItem("pgpiano__userinfo");
	if (typeof userinfostring === "string") {
		try {
			var userinfoobj = JSON.parse(userinfostring);
			return userinfoobj
		} catch(e) {
			return false;
		}
	}
}

PGFNS.filterNoLatest = function(articles) {
	console.log("filterNoLatest() called");
	if (typeof articles !== "object" || !Array.isArray(articles)) { return articles; }
	console.log("articles (" + articles.length + "): ", articles);
	var articlesfiltered = [];
	$.each(articles, function(i, item) {
		if (typeof item.noLatest !== "boolean" || item.noLatest !== true) {
			articlesfiltered.push(item);
		} else {
			console.log("Removed article: ", ((typeof item.title === "string") ? item.title : ""));
			// filter	
		}
	});
	console.log("articles filtered (" + articlesfiltered.length + "): ", articlesfiltered);
	return articlesfiltered;
}

/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!String.prototype.replaceAll) {
	String.prototype.replaceAll = function(str, newStr){

		// If a regex pattern
		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
			return this.replace(str, newStr);
		}

		// If a string
		return this.replace(new RegExp(str, 'g'), newStr);

	};
}

// ****************************
//    UNDERSCORE TEMPLATES v2
// ****************************
var PGTPLS = PGTPLS || {};

// -----  _tpl: frontpage-pg  -----
PGTPLS["frontpage-pg"] = "<div class=\"pgevoke-frontpage\">\n\t<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t<<< } >>>\n\t<div class=\"pgevoke-topads\">\n\t\t<div class=\"pgevoke-topads-row\">\n\t\t\t<div class=\"pgevoke-topads-banner\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP1\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-topads-top3 hidden-sm hidden-xs\">\n\t\t\t<div id=\"dfp-pencil-expander\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP3\", adsection: theobj.adsection})>>>\t\n\t\t\t<\/div>\n\t\t<\/div>\t\t\n\t<\/div>\n\t<<< if (theobj.electionmapposition === 3) { >>>\n\t\t<div id=\"pgevoke-electionbanner--above\">\n\t\t\t<!-- AP Election Map BEGIN -->\n<<< console.log(\"*** UPDATED v2!\"); >>>\n<<< if (typeof PGVARS.electionmode === \"number\" && PGVARS.electionmode > 0) { >>>\n\t<div>\n\t\t<<< if (typeof PGVARS.electionmap === \"string\" && PGVARS.electionmap === \"state\") { >>>\n\t\t\t<<< console.log(\"MAP: STATE\"); >>>\n\t\t\t<iframe id=\"iframe_8d671dbd8fecbf69623d15a01f113a09\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/8d671dbd8fecbf69623d15a01f113a09\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t<<< } else if (1 === 2) { >>>\n\t\t\t<<< console.log(\"MAP: NATIONAL\"); >>>\n\t\t\t<<< if (getResponsiveSize() === \"xs\" || getResponsiveSize() === \"sm\") { >>>\n\t\t\t\t<<< if (PGVARS.electionmap === \"minimal\") { >>>\n\t\t\t\t\t<!-- Minimal table -->\n\t\t\t\t\t<iframe id=\"iframe_07dc174ad4c8351336cda3697d391c98\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/07dc174ad4c8351336cda3697d391c98\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<!-- National Map --->\n\t\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9 -->\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<!-- National Map --->\n\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9\n\t\t\t\tOLD: 56f172dea1c0b028520cfdc1d29d2da9\n\t\t\t\t-->\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div>\n\t\t\t\t<<< console.log(\"ELECTION TEST v3\"); >>>\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/10551.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe> -->\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Pennsylvania primary election live results\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12237.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script> -->\n\t\t\t\t<iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12236.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script>\n\t\t\t<\/div>\n\n\t\t<<< } >>>\n\t<\/div>\n\t<<< PGFNS.loadAPScript(); >>>\n\t<!-- AP Election Map END -->\n<<< } >>>\t\t<\/div>\n\t<<< } >>>\n\t<div id=\"pgevoke-fp-electionwidgetabove\"><\/div>\n\t<div id=\"pgevoke-bigstoryabove\"><\/div>\n\t<div id=\"pgevoke-fp-row1\">\t\n\t\t<div class=\"pgevoke-grid-area-main\">\n\t\t\t<<< if (theobj.electionmapposition === 4) { >>>\n\t\t\t\t<div id=\"pgevoke-electionbanner--inlinetop\">\n\t\t\t\t\t\t<!-- AP Election Map BEGIN -->\n<<< console.log(\"*** UPDATED v2!\"); >>>\n<<< if (typeof PGVARS.electionmode === \"number\" && PGVARS.electionmode > 0) { >>>\n\t<div>\n\t\t<<< if (typeof PGVARS.electionmap === \"string\" && PGVARS.electionmap === \"state\") { >>>\n\t\t\t<<< console.log(\"MAP: STATE\"); >>>\n\t\t\t<iframe id=\"iframe_8d671dbd8fecbf69623d15a01f113a09\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/8d671dbd8fecbf69623d15a01f113a09\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t<<< } else if (1 === 2) { >>>\n\t\t\t<<< console.log(\"MAP: NATIONAL\"); >>>\n\t\t\t<<< if (getResponsiveSize() === \"xs\" || getResponsiveSize() === \"sm\") { >>>\n\t\t\t\t<<< if (PGVARS.electionmap === \"minimal\") { >>>\n\t\t\t\t\t<!-- Minimal table -->\n\t\t\t\t\t<iframe id=\"iframe_07dc174ad4c8351336cda3697d391c98\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/07dc174ad4c8351336cda3697d391c98\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<!-- National Map --->\n\t\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9 -->\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<!-- National Map --->\n\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9\n\t\t\t\tOLD: 56f172dea1c0b028520cfdc1d29d2da9\n\t\t\t\t-->\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div>\n\t\t\t\t<<< console.log(\"ELECTION TEST v3\"); >>>\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/10551.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe> -->\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Pennsylvania primary election live results\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12237.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script> -->\n\t\t\t\t<iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12236.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script>\n\t\t\t<\/div>\n\n\t\t<<< } >>>\n\t<\/div>\n\t<<< PGFNS.loadAPScript(); >>>\n\t<!-- AP Election Map END -->\n<<< } >>>\t\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t\t<div id=\"pgevoke-bigstorymainarea\"><\/div>\n\t\t\t<div class=\"pgevoke-grid-row\">\n\t\t\t\t<<< if (PGFNS.getSiteSetting(\"fpatfstyle\") === \"fullwidth9stack\") { >>>\n\t\t\t\t\t<div class=\"pgevoke-featuredpack clearfix\">\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-left clearfix\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-right clearfix\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-bigstory\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-1\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-2\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-dualatf\">\n\t\t\t\t\t\t<div class=\"pgevoke-dualatf-colleft\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-dualatf-colright\">\n\t\t\t\t\t\t\t<div class=\"pgevoke-electionbanner--inline\">\n\t\t\t\t\t\t\t\t<<< if (PGVARS.site === \"pg\") { >>>\n\t<div class=\"pgevoke-electionbanner\">\n\t\t<!--\n\t\t<div class=\"pgevoke-electionbanner-inner\">\n\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pg\/misc\/election2020-narrow-banner.jpg\">\n\t\t<\/div>\n\t\t-->\n\t<\/div>\n<<< } >>>\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<<< if (theobj.electionmapposition === 5) { >>>\n\t\t\t\t\t\t\t\t<div id=\"pgevoke-electionbanner--inlinetop\">\n\t\t\t\t\t\t\t\t\t\t<!-- AP Election Map BEGIN -->\n<<< console.log(\"*** UPDATED v2!\"); >>>\n<<< if (typeof PGVARS.electionmode === \"number\" && PGVARS.electionmode > 0) { >>>\n\t<div>\n\t\t<<< if (typeof PGVARS.electionmap === \"string\" && PGVARS.electionmap === \"state\") { >>>\n\t\t\t<<< console.log(\"MAP: STATE\"); >>>\n\t\t\t<iframe id=\"iframe_8d671dbd8fecbf69623d15a01f113a09\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/8d671dbd8fecbf69623d15a01f113a09\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t<<< } else if (1 === 2) { >>>\n\t\t\t<<< console.log(\"MAP: NATIONAL\"); >>>\n\t\t\t<<< if (getResponsiveSize() === \"xs\" || getResponsiveSize() === \"sm\") { >>>\n\t\t\t\t<<< if (PGVARS.electionmap === \"minimal\") { >>>\n\t\t\t\t\t<!-- Minimal table -->\n\t\t\t\t\t<iframe id=\"iframe_07dc174ad4c8351336cda3697d391c98\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/07dc174ad4c8351336cda3697d391c98\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<!-- National Map --->\n\t\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9 -->\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<!-- National Map --->\n\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9\n\t\t\t\tOLD: 56f172dea1c0b028520cfdc1d29d2da9\n\t\t\t\t-->\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div>\n\t\t\t\t<<< console.log(\"ELECTION TEST v3\"); >>>\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/10551.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe> -->\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Pennsylvania primary election live results\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12237.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script> -->\n\t\t\t\t<iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12236.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script>\n\t\t\t<\/div>\n\n\t\t<<< } >>>\n\t<\/div>\n\t<<< PGFNS.loadAPScript(); >>>\n\t<!-- AP Election Map END -->\n<<< } >>>\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<div id=\"pgevoke-bigstoryinline\"><\/div>\n\t\t\t\t\t\t\t<<< if (theobj.electionmapposition === 1) { >>>\n\t\t\t\t\t\t\t\t<!-- AP Election Map BEGIN -->\n<<< console.log(\"*** UPDATED v2!\"); >>>\n<<< if (typeof PGVARS.electionmode === \"number\" && PGVARS.electionmode > 0) { >>>\n\t<div>\n\t\t<<< if (typeof PGVARS.electionmap === \"string\" && PGVARS.electionmap === \"state\") { >>>\n\t\t\t<<< console.log(\"MAP: STATE\"); >>>\n\t\t\t<iframe id=\"iframe_8d671dbd8fecbf69623d15a01f113a09\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/8d671dbd8fecbf69623d15a01f113a09\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t<<< } else if (1 === 2) { >>>\n\t\t\t<<< console.log(\"MAP: NATIONAL\"); >>>\n\t\t\t<<< if (getResponsiveSize() === \"xs\" || getResponsiveSize() === \"sm\") { >>>\n\t\t\t\t<<< if (PGVARS.electionmap === \"minimal\") { >>>\n\t\t\t\t\t<!-- Minimal table -->\n\t\t\t\t\t<iframe id=\"iframe_07dc174ad4c8351336cda3697d391c98\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/07dc174ad4c8351336cda3697d391c98\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<!-- National Map --->\n\t\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9 -->\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<!-- National Map --->\n\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9\n\t\t\t\tOLD: 56f172dea1c0b028520cfdc1d29d2da9\n\t\t\t\t-->\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div>\n\t\t\t\t<<< console.log(\"ELECTION TEST v3\"); >>>\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/10551.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe> -->\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Pennsylvania primary election live results\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12237.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script> -->\n\t\t\t\t<iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12236.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script>\n\t\t\t<\/div>\n\n\t\t<<< } >>>\n\t<\/div>\n\t<<< PGFNS.loadAPScript(); >>>\n\t<!-- AP Election Map END -->\n<<< } >>>\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured clearfix\">\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-left clearfix\"><\/div>\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-right clearfix\"><\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-bigstory\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<div class=\"pgevoke-fp-atfpromo\">\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-fp-atfpromo-area1\">Complete 2023 Steelers training camp coverage<\/div>\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-fp-atfpromo-area2\">\n\t\t\t\t\t\t\t\t\t<a class=\"pgevoke-fp-atfpromo-button\" href=\"#\">Read More<\/a>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-1\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-2\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t\t\t<<< if (theobj.electionmapposition === 2) { >>>\n\t\t\t\t\t\t\t\t\t<!-- AP Election Map BEGIN -->\n<<< console.log(\"*** UPDATED v2!\"); >>>\n<<< if (typeof PGVARS.electionmode === \"number\" && PGVARS.electionmode > 0) { >>>\n\t<div>\n\t\t<<< if (typeof PGVARS.electionmap === \"string\" && PGVARS.electionmap === \"state\") { >>>\n\t\t\t<<< console.log(\"MAP: STATE\"); >>>\n\t\t\t<iframe id=\"iframe_8d671dbd8fecbf69623d15a01f113a09\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/8d671dbd8fecbf69623d15a01f113a09\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t<<< } else if (1 === 2) { >>>\n\t\t\t<<< console.log(\"MAP: NATIONAL\"); >>>\n\t\t\t<<< if (getResponsiveSize() === \"xs\" || getResponsiveSize() === \"sm\") { >>>\n\t\t\t\t<<< if (PGVARS.electionmap === \"minimal\") { >>>\n\t\t\t\t\t<!-- Minimal table -->\n\t\t\t\t\t<iframe id=\"iframe_07dc174ad4c8351336cda3697d391c98\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/07dc174ad4c8351336cda3697d391c98\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<!-- National Map --->\n\t\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9 -->\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<!-- National Map --->\n\t\t\t\t<iframe id=\"iframe_30aa7afbc7d3f689b62cabeda4dbcd6e\" style=\"overflow: hidden; min-width: 100%; border: none;\" src=\"https:\/\/elections.ap.org\/widgets\/content\/30aa7afbc7d3f689b62cabeda4dbcd6e\" width=\"100%\" height=\"100%\" frameborder=\"1\" allowfullscreen=\"allowfullscreen\"><\/iframe>\n\t\t\t\t<!-- iframe_dabf4e803839d6d54c3a4569496408b9\n\t\t\t\tOLD: 56f172dea1c0b028520cfdc1d29d2da9\n\t\t\t\t-->\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div>\n\t\t\t\t<<< console.log(\"ELECTION TEST v3\"); >>>\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/10551.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe> -->\n\t\t\t\t<!-- <iframe class=\"ap-embed\" title=\"Pennsylvania primary election live results\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12237.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script> -->\n\t\t\t\t<iframe class=\"ap-embed\" title=\"Live election results via the Associated Press\" src=\"https:\/\/interactives.ap.org\/election-results\/customers\/layouts\/organization-layouts\/published\/45329\/12236.html\" width=\"100%\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"><\/iframe><script defer src=\"https:\/\/interactives.ap.org\/election-results\/assets\/microsite\/resizeClient.js\"><\/script>\n\t\t\t<\/div>\n\n\t\t<<< } >>>\n\t<\/div>\n\t<<< PGFNS.loadAPScript(); >>>\n\t<!-- AP Election Map END -->\n<<< } >>>\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t<<< if (PGVARS.requesttype === \"FRONTPAGE\") { >>>\n\t\t<<< console.log(\"NATIVO FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } else { >>>\n\t\t<<< console.log(\"NATIVO NOT FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } >>>\n\t<!-- test -->\n<<< } else { >>>\n<div class=\"pgevoke-grid-row\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n<<< } >>>\n\t<div class=\"pgevoke-mustbox pgevoke-newspack-pluswrapper clearfix\">\n\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-bpartners\">\n\t\t\t<span><span class=\"pgevoke-headerbar-bpartners-blogo\"><\/span> Partners<\/span>\n\t\t<\/div>\t\t\t\t\n\t\t<<< } else { >>>\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>From Our Sponsors<\/span>\n\t\t<\/div>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-newspack\">\n\t\t\t<!-- Sponsored Link 1 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link1\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 2 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link2\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 3 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link3\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t<\/div>\n\t<\/div>\n<\/div>\t\t\t<div class=\"pgevoke-grid-row\">\n\t\t\t\t<div class=\"pgevoke-newspack-pluswrapper pgevoke-mustread clearfix\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t\t<span>Must Read<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pg-hidden-desktop\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"REVEAL\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-grid-row pgevoke-grid-row-w-topmargin\">\n\t<div class=\"pgevoke-newspack-pluswrapper pgevoke-mustsee\">\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>Must See<\/span>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t<div class=\"pgevoke-mustsee-links clearfix\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"fpmustseephotolink\") !== \"\" && PGFNS.getSiteSetting(\"fpmustseephotolabel\") !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-focus pg-hidden-mobile\">\n\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseephotolink')>>>\">\n\t\t\t\t\t\t<span class=\"icon icon-camera4\"><\/span><<<=PGFNS.getSiteSetting('fpmustseephotolabel')>>>\n\t\t\t\t\t<\/a>\n\t\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t\t<<< if (PGFNS.getSiteSetting(\"fpmustseevideolink\") !== \"\" && PGFNS.getSiteSetting(\"fpmustseevideolabel\") !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-videos pg-hidden-mobile\">\n\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseevideolink')>>>\">\n\t\t\t\t\t\t<span class=\"icon icon-play-circle\"><\/span><<<=PGFNS.getSiteSetting('fpmustseevideolabel')>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span>\n\t\t\t\t\t<\/a>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-videosmobile pg-hidden-desktop\">\n\t\t\t\t\t<div class=\"pgevoke-morelink\">\n\t\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseevideolink')>>>\"><<<=PGFNS.getSiteSetting('fpmustseevideolabel')>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-focusmobile\"><\/div>\n\t\t\t<<< } >>>\n\t\t<\/div>\n\t<\/div>\n<\/div>\t\t\t<div class=\"pgevoke-grid-row pg-hidden-mobile\">\n\t\t\t\t<a class=\"pgevoke-flexbanner\">\n\t\t\t\t\t<div class=\"pgevoke-flexbanner-innerwrapper\">\n\t\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"FLEXBANNER\", adsection: theobj.adsection})>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t\t<!-- <div class=\"pgevoke-grid-row\" style=\"margin-top:50px;margin-bottom:0\"> Changing Margin for Election 2022 -->\n\t\t\t\t<div class=\"pgevoke-grid-row\" style=\"margin-top:0;margin-bottom:0\">\n\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-trending\">\n\t\t\t\t\t<span class=\"icon2 icon2-fire-circle pgevoke-storyicon\"><\/span>\n\t\t\t\t\t<span class=\"pgevoke-headerbar-trending-text\">TRENDING<\/span>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-trending\"><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\n\t\t<div class=\"pgevoke-grid-area-side\">\n\t\t\t<div class=\"pg-hidden-mobile\" style=\"margin-bottom:15px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-fp-rightrail-breaking\"><\/div>\n\t\t\t<!--\n\t\t\t<div class=\"pgevoke-fp-rightrail-pgelink\">\n\t\t\t\t<a href=\"https:\/\/pge.post-gazette.com\">\n\t\t\t\t\t<img src=\"https:\/\/liber.post-gazette.com\/frontpages\/04-15-22.pg.a.1.png\">\n\t\t\t\t\t<div>Click here to read today's edition of PGe<\/div>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t\t-->\n\t\t\t<div class=\"pgevoke-fp-promobox-1 pg-hidden-mobile\"><\/div>\n\t\t\t<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t\t\t<div class=\"pg-hidden-desktop\" style=\"margin-top:25px\"><!-- spacer --><\/div>\n\t\t\t<div class=\"pgevoke-apwidget pg-hidden-mobile\"><\/div>\n\t\t\t<div id=\"pgevoke-fp-stickybox1\" data-stickybox-id=\"pgevoke-fp-stickybox1\">\n\t\t\t\t<div class=\"pg-hidden-mobile\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pg-hidden-desktop\" style=\"margin-bottom:25px\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"X05\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\t\n\t<div class=\"pgevoke-grid-divider-nomarginbottom pg-hidden-mobile\"><\/div>\n\t<div id=\"pgevoke-fp-row2\" class=\"pgevoke-grid-row-full pg-hidden-mobile cf\">\n\t\t<div class=\"pgevoke-superpromo\">\n\t\t\t<div class=\"pgevoke-superpromo-innerwrapper\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"SUPERPROMO\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-grid-divider-nomargintop pg-hidden-mobile\"><\/div>\n\t\n\t<div id=\"pgevoke-fp-row3\" class=\"cf\">\n\t\t<div class=\"pgevoke-grid-area-main pgevoke-grid-area-left\">\n\t\t<\/div>\n\n\t\t<div class=\"pgevoke-grid-area-side pgevoke-grid-area-right\">\n\t\t\t<div style=\"margin-bottom:20px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE1\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-fp-promobox-2 pg-hidden-mobile\"><\/div>\n\t\t\t\n\t\t\t<div style=\"margin-top:20px;margin-bottom:20px\">\n\t\t\t\t<!-- <l t o :macro name=\"pg.widgets.ap-siderail-box\"> -->\n\t\t\t<\/div>\n\t\t\t<div id=\"pgevoke-fp-stickybox2\" data-stickybox-id=\"pgevoke-fp-stickybox2\" class=\"clearfix\">\n\t\t\t\t<div style=\"margin-bottom:20px\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE3\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-rightrail-login\">\n\t\t\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-rightrail-stickybox-bottom\" data-stickybox-id=\"pgevoke-fp-stickybox3\">\n\t\t\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t\t\t<\/div>\n\n\t\t<\/div>\n\n\t<\/div>\n<\/div>";

// -----  _tpl: frontpage-blade  -----
PGTPLS["frontpage-blade"] = "<div class=\"pgevoke-frontpage\">\n\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t<<< } >>>\n\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<<< if (PGFNS.pageGetsScoreboard()) { >>>\n\t<div class=\"pgevoke-scoreboard\">\n\t\t<a data-oldhref=\"https:\/\/www.renewalbyandersen.com\/window-company\/975-northwest-ohio\/about-us\" href=\"https:\/\/www.rbaoftoledo.com\" class=\"pgevoke-scoreboard-logos\">\n\t\t\t<div class=\"pgevoke-scoreboard-logos-gametrac\"><\/div>\n\t\t\t<div class=\"pgevoke-scoreboard-logos-sponsors\"><\/div>\n\t\t<\/a>\n\t\t<div class=\"pgevoke-scoreboard-widget\">\n\t\t\t<div class=\"scorestream-widget-container\" data-ss_widget_type=\"horzScoreboard\" data-user-widget-id=\"1709\"> |<\/div>\n\t\t\t<!-- 1709 football -->\n\t\t\t<!-- 36779 basketball -->\n\t\t\t<script async=\"async\" type=\"text\/javascript\" src=\"https:\/\/scorestream.com\/apiJsCdn\/widgets\/embed.js\"><\/script>\n\t\t<\/div>\n\t<\/div>\n<<< } >>>\t<<< } >>>\n\t<div class=\"pgevoke-topads\">\n\t\t<div class=\"pgevoke-topads-row\">\n\t\t\t<div class=\"pgevoke-topads-banner\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"HOMESPONSOR2\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-topads-top3 hidden-sm hidden-xs\">\n\t\t\t<div id=\"dfp-pencil-expander\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP3\", adsection: theobj.adsection})>>>\t\n\t\t\t<\/div>\n\t\t<\/div>\t\t\n\t<\/div>\n\t<div id=\"pgevoke-bigstoryabove\"><\/div>\n\t<div id=\"pgevoke-fp-row1\">\t\n\t\t<div class=\"pgevoke-grid-area-main\">\n\t\t\t<div id=\"pgevoke-bigstorymainarea\"><\/div>\n\t\t\t<div class=\"pgevoke-grid-row\">\n\t\t\t\t<<< if (PGFNS.getSiteSetting(\"fpatfstyle\") === \"fullwidth9stack\") { >>>\n\t\t\t\t\t<div class=\"pgevoke-featuredpack clearfix\">\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-left clearfix\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-right clearfix\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-bigstory\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-1\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-2\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-dualatf\">\n\t\t\t\t\t\t<div class=\"pgevoke-dualatf-colleft\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-dualatf-colright\">\n\t\t\t\t\t\t\t<div id=\"pgevoke-bigstoryinline\"><\/div>\n\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured clearfix\">\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-left clearfix\"><\/div>\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-right clearfix\"><\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-bigstory\" class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-1\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t\t\t<div id=\"pgevoke-fp-newspackatf-2\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"pgevoke-grid-row pg-hidden-mobile\" style=\"margin-top:-20px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"BODYAD1\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-grid-row pg-hidden-desktop\" style=\"margin-top:-20px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"X07\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-fp-breaking-blade pgevoke-grid-row\"><\/div>\n\t\t\t<!-- test -->\n\t\t\t<div class=\"pgevoke-grid-row\">\n\t\t\t\t<div class=\"pgevoke-newspack-pluswrapper pgevoke-mustread clearfix\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t\t<span>Must Read<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"pg-hidden-desktop\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"REVEAL\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"pgevoke-grid-row pgevoke-grid-row-w-topmargin\">\n\t<div class=\"pgevoke-newspack-pluswrapper pgevoke-mustsee\">\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>Must See<\/span>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t<div class=\"pgevoke-mustsee-links clearfix\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"fpmustseephotolink\") !== \"\" && PGFNS.getSiteSetting(\"fpmustseephotolabel\") !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-focus pg-hidden-mobile\">\n\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseephotolink')>>>\">\n\t\t\t\t\t\t<span class=\"icon icon-camera4\"><\/span><<<=PGFNS.getSiteSetting('fpmustseephotolabel')>>>\n\t\t\t\t\t<\/a>\n\t\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t\t<<< if (PGFNS.getSiteSetting(\"fpmustseevideolink\") !== \"\" && PGFNS.getSiteSetting(\"fpmustseevideolabel\") !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-videos pg-hidden-mobile\">\n\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseevideolink')>>>\">\n\t\t\t\t\t\t<span class=\"icon icon-play-circle\"><\/span><<<=PGFNS.getSiteSetting('fpmustseevideolabel')>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span>\n\t\t\t\t\t<\/a>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-videosmobile pg-hidden-desktop\">\n\t\t\t\t\t<div class=\"pgevoke-morelink\">\n\t\t\t\t\t\t<a href=\"<<<=PGFNS.getSiteSetting('fpmustseevideolink')>>>\"><<<=PGFNS.getSiteSetting('fpmustseevideolabel')>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-mustsee-links-focusmobile\"><\/div>\n\t\t\t<<< } >>>\n\t\t<\/div>\n\t<\/div>\n<\/div>\t\t\t<!-- <div id=\"pgevoke-piano-fp-recommended\"><\/div> -->\n\t\t\t<div id=\"pgevoke-piano-fp-recommended-cx\" class=\"pgevoke-grid-row\" style=\"display:none\">\n\t\t\t\t<div class=\"pgevoke-newspack-pluswrapper pgevoke-mustread clearfix\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t\t<span>Recommended<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div id=\"pgevoke-piano-fp-recommended-cx-newspack-1\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t<div id=\"pgevoke-piano-fp-recommended-cx-newspack-2\" class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t\t<!-- <pnespwgtplaceholder holdername=\"embedded_1592233469537\"><\/pnespwgtplaceholder> -->\n\t\t\t\t<!-- test2 -->\n\t\t\t<<< if (PGVARS.usenativo) { >>>\n\t\t\t<!-- NATIVO ON -->\n\t\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t<<< if (PGVARS.requesttype === \"FRONTPAGE\") { >>>\n\t\t<<< console.log(\"NATIVO FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } else { >>>\n\t\t<<< console.log(\"NATIVO NOT FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } >>>\n\t<!-- test -->\n<<< } else { >>>\n<div class=\"pgevoke-grid-row\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n<<< } >>>\n\t<div class=\"pgevoke-mustbox pgevoke-newspack-pluswrapper clearfix\">\n\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-bpartners\">\n\t\t\t<span><span class=\"pgevoke-headerbar-bpartners-blogo\"><\/span> Partners<\/span>\n\t\t<\/div>\t\t\t\t\n\t\t<<< } else { >>>\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>From Our Sponsors<\/span>\n\t\t<\/div>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-newspack\">\n\t\t\t<!-- Sponsored Link 1 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link1\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 2 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link2\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 3 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link3\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t<\/div>\n\t<\/div>\n<\/div>\t\t\t<<< } else { >>>\n\t\t\t<!-- NATIVO OFF -->\n\t\t\t<div class=\"pgevoke-grid-row pgevoke-bpartners-homeswidget\">\n\t\t\t\t<div class=\"pgevoke-newspack-pluswrapper clearfix\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-bpartners\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<span class=\"pgevoke-headerbar-bpartners-blogo\"><\/span> Partners: Homes\n\t\t\t\t\t\t<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t<\/div>\n\t\t<<< if (theobj.adsection === \"adtest\" || theobj.adsection === \"adteststory\") { >>>\n\t\t\t<div class=\"pgevoke-adventiveads-mobileparalax hidden-sm hidden-md hidden-lg hidden-xl\" style=\"margin-top:30px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"X03\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\t\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-grid-area-side\">\n\t\t\t<div class=\"pg-hidden-mobile\" style=\"margin-bottom:15px\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-fp-rightrail-breaking\"><\/div>\n\t\t\t<!--  <a href=\"https:\/\/www.bladehomes.com\" style=\"margin-bottom:25px\"><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/misc\/blade-homes-banner-300x250-TEST.jpg\"><\/a> -->\n\t\t\t<<< if (Math.floor(Math.random() * 2) == 0) { >>>\n\t<a href=\"https:\/\/www.bladehomes.com\" style=\"margin-bottom:25px\"><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/misc\/blade-homes-banner-300x250-2023.jpg\"><\/a>\n<<< } else { >>>\n\t<a href=\"https:\/\/www.toledoblade.com\/health-well-being\" style=\"margin-bottom:25px\"><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/misc\/blade-health-well-being-300x250-2023-09.jpg\"><\/a>\n<<< } >>>\n\n\t\t\t<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t\t\t<<< if (typeof PGVARS.piano !== \"undefined\" && PGVARS.piano) { >>>\n\t\t\t\t<div class=\"pgevoke-lottery\">\n\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<a href=\"\/lottery\">\n\t\t\t<img src=\"https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/lottery.png\" alt=\"Lottery Numbers\">\n\t\t<\/a>\n\t<<< } else { >>>\n\t\t<a href=\"https:\/\/liber.post-gazette.com\/lottery\">\n\t\t\t<img src=\"https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/lottery.png\" alt=\"Lottery Numbers\">\n\t\t<\/a>\n\t<<< } >>>\n<\/div>\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-fp-promobox-1 pg-hidden-mobile\"><\/div>\n\t\t\t<!-- <div class=\"pgevoke-apwidget pg-hidden-mobile\"><\/div>  MOVING -->\n\t\t\t<div id=\"pgevoke-fp-stickybox1\" data-stickybox-id=\"pgevoke-fp-stickybox1\">\n\t\t\t\t<div class=\"pg-hidden-mobile\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t\t<<< if (typeof PGVARS.piano !== \"undefined\" && PGVARS.piano) { >>>\n\t\t\t\t\t<div class=\"pgevoke-piano-opt-in-1\">\n\t\t\t\t\t\t<!-- Blade Email Form (1) -->\n\t\t\t\t\t\t<<< if (typeof PGVARS.pianosandbox === \"boolean\" && PGVARS.pianosandbox) { >>>\n\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1591247383265\"><\/pnespwgtplaceholder>\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1597338393743\"><\/pnespwgtplaceholder>\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<\/div>\t\t\t\t\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-lottery\">\n\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<a href=\"\/lottery\">\n\t\t\t<img src=\"https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/lottery.png\" alt=\"Lottery Numbers\">\n\t\t<\/a>\n\t<<< } else { >>>\n\t\t<a href=\"https:\/\/liber.post-gazette.com\/lottery\">\n\t\t\t<img src=\"https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/lottery.png\" alt=\"Lottery Numbers\">\n\t\t<\/a>\n\t<<< } >>>\n<\/div>\t\t\t\t<<< } >>>\n\t\t\t\t\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\n\t<div class=\"pgevoke-bpartnersbig\"><\/div>\n\n\t<div id=\"pgevoke-fp-rowtrending\">\t\n\t\t<div class=\"pgevoke-grid-row\">\n\t\t\t<div class=\"pgevoke-grid-area-main pgevoke-grid-area-left\">\n\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-trending\">\n\t\t\t\t\t<span class=\"icon2 icon2-fire-circle pgevoke-storyicon\"><\/span>\n\t\t\t\t\t<span class=\"pgevoke-headerbar-trending-text\">TRENDING<\/span>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-trending\"><\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-grid-area-side pgevoke-grid-area-right\">\n\t\t\t\t<div class=\"pgevoke-apwidget pg-hidden-mobile\"><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\n\t<div class=\"pgevoke-grid-divider-nomarginbottom pg-hidden-mobile\"><\/div>\t\n\t<div class=\"pgevoke-fp-bodyad2\">\n\t\t<<<=DFPADS.getAdSlotString({position: \"BODYAD2\", adsection: theobj.adsection})>>>\n\t<\/div>\n\t<div class=\"pgevoke-grid-divider-nomargintop pg-hidden-mobile\"><\/div>\n\t\n\t<div id=\"pgevoke-fp-row3\" class=\"cf\">\n\t\t<div class=\"pgevoke-grid-area-main pgevoke-grid-area-left\">\n\t\t\t\n\t\t<\/div>\n\n\n\t\t<div class=\"pgevoke-grid-area-side pgevoke-grid-area-right\">\n\t\t\t<div class=\"pgevoke-fp-promobox-2 pg-hidden-mobile\"><\/div>\n\t\t\t<div style=\"margin-top:20px;margin-bottom:20px\">\n\t\t\t\t<!-- <l t o :macro name=\"pg.widgets.ap-siderail-box\"> -->\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div id=\"pgevoke-fp-stickybox2\" data-stickybox-id=\"pgevoke-fp-stickybox2\" class=\"clearfix\">\n\t\t\t\t<div style=\"margin-bottom:20px\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE3\", adsection: theobj.adsection})>>>\n\t\t\t\t\t\n\t\t\t\t<\/div>\n\t\t\t\t<<< if (typeof PGVARS.piano !== \"undefined\" && PGVARS.piano) { >>>\n\t\t\t\t\t<div class=\"pgevoke-rightrail-login\">\n\t\t\t\t\t\t<div class=\"pgevoke-piano-opt-in-1\">\n\t\t\t\t\t\t\t<!-- Blade Email Form (2) -->\n\t\t\t\t\t\t\t<<< if (typeof PGVARS.pianosandbox === \"boolean\" && PGVARS.pianosandbox) { >>>\n\t\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1592320390064\"><\/pnespwgtplaceholder>\n\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1597345194660\"><\/pnespwgtplaceholder>\n\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-rightrail-login\">\n\t\t\t\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t\t\t\t<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-rightrail-stickybox-bottom\" data-stickybox-id=\"pgevoke-fp-stickybox3\">\n\t\t\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t\t\t<\/div>\n\t\t\n\t\t<\/div>\n\n\t<\/div>\n<\/div>";

// -----  _tpl: frontpage-rightrail  -----
PGTPLS["frontpage-rightrail"] = "<div style=\"height:250px;background-color:#eee\"><\/div>";

// -----  _tpl: section  -----
PGTPLS["section"] = "<!-- #pgevoke-_tpl-section v20200526_1625 -->\n<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<<< } >>>\n<<< if (PGFNS.pageGetsScoreboard()) { >>>\n\t<div class=\"pgevoke-scoreboard\">\n\t\t<a data-oldhref=\"https:\/\/www.renewalbyandersen.com\/window-company\/975-northwest-ohio\/about-us\" href=\"https:\/\/www.rbaoftoledo.com\" class=\"pgevoke-scoreboard-logos\">\n\t\t\t<div class=\"pgevoke-scoreboard-logos-gametrac\"><\/div>\n\t\t\t<div class=\"pgevoke-scoreboard-logos-sponsors\"><\/div>\n\t\t<\/a>\n\t\t<div class=\"pgevoke-scoreboard-widget\">\n\t\t\t<div class=\"scorestream-widget-container\" data-ss_widget_type=\"horzScoreboard\" data-user-widget-id=\"1709\"> |<\/div>\n\t\t\t<!-- 1709 football -->\n\t\t\t<!-- 36779 basketball -->\n\t\t\t<script async=\"async\" type=\"text\/javascript\" src=\"https:\/\/scorestream.com\/apiJsCdn\/widgets\/embed.js\"><\/script>\n\t\t<\/div>\n\t<\/div>\n<<< } >>><div class=\"pgevoke-section\">\n\t<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t<<< } >>>\n\t<div class=\"pgevoke-topads\">\n\t\t<div class=\"pgevoke-topads-row\">\n\t\t\t<div class=\"pgevoke-topads-banner\">\n\t\t\t\t<<< if (theobj.adsection === \"adtest\") { >>>\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP1\", adsection: theobj.adsection})>>>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP\", adsection: theobj.adsection})>>>\n\t\t\t\t<<< } >>>\n\t\t\t\t<!-- lto:macro name=\"pg.ads.adspot_new\" position=\"Top\" customadsection=\"<%@sectionseolabel%>\"> -->\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-topads-top3 hidden-sm hidden-xs\">\n\t\t\t<div id=\"dfp-pencil-expander\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP3\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<!-- <lto:macro name=\"pg.ads.top3-pencil-expander\"> -->\n\t\t<\/div>\n\t<\/div>\n\t<<< if (PGVARS.site === \"pg\" && PGVARS.sectionpath === \"life\/goodness\") { >>>\n\t\t<div class='pg-hidden-mobile' style='width:100%; margin-bottom: 15px; padding-top: 3px'><img src='https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgsections\/goodness\/goodness-desktop.jpg' style='width:100%'><\/div><div class='pg-hidden-desktop' style='width:100%; margin-bottom: 20px'><img src='https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgsections\/goodness\/goodness-mobile.jpg' style='width:100%'><\/div>\n\t<<< } else if (PGVARS.site === \"pg\" && PGVARS.sectionpath === \"news\/health\") { >>>\n\t\t<div class='pg-hidden-mobile' style='width:100%; margin-bottom: 15px; padding-top: 3px'><img src='https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgsections\/health\/health-wellness-banner-desktop.jpg' style='width:100%'><\/div><div class='pg-hidden-desktop' style='width:100%; margin-bottom: 20px'><img src='https:\/\/814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com\/images\/pgsections\/health\/health-wellness-banner-mobile.jpg' style='width:100%'><\/div>\n\t<<< } >>>\n\t<<< if (PGVARS.site === \"blade\" && (theobj.adsection === \"adtest\" || theobj.adsection === \"adteststory\")) { >>>\n\t<div class=\"pgevoke-topads-mobile hidden-sm hidden-md hidden-lg hidden-xl\">\n\t\t<<<=DFPADS.getAdSlotString({position: \"ADVENTIVETESTREVEAL\", adsection: theobj.adsection})>>>\n\t<\/div>\t\n\t<<< } else { >>>\n\t\t<!-- REVEAL -->\n\t<<< } >>>\n\t<div class=\"pgevoke-section-row\">\t\n\t\t<div class=\"pgevoke-grid-area-main\">\n\t\t\t<div class=\"pgevoke-subsectionheader\"><\/div>\n\t\t\t<div class=\"pgevoke-subsectionmenu\"><\/div>\n\t\t\t<<< if (PGVARS.site !== \"pg\" || (PGVARS.sectionpath !== \"life\/goodness\" && PGVARS.sectionpath !== \"news\/health\")) { >>>\n\t\t\t\t<h1 class=\"pgevoke-section-pageheader\">&nbsp;<\/h1>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-loadingspinner\">\n\t\t\t\t<div class=\"pg-loading\"><\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-section-atf\">\n\t\t\t\t<div class=\"pgevoke-dualatf\">\n\t\t\t\t\t<div class=\"pgevoke-dualatf-colleft\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-dualatf-colright\">\n\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured clearfix\">\n\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-left clearfix\"><\/div>\n\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-right clearfix\"><\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-section-atf-fullwidth\">\n\t\t\t\t\t<div class=\"pgevoke-featuredpack clearfix\">\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-left clearfix\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-right clearfix\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-section-atf-extrastories-1 clearfix\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-section-atf-extrastories-2 clearfix\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-section-atf-extrastories-3 clearfix\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\t\n\t\t\t<<< if (PGVARS.site === \"blade\" && PGVARS.sitecode !== \"LIVE\" && PGVARS.param2 === \"\") { >>>\t\n\t\t\t<!--\n\t\t\t<div class=\"pgevoke-section-bpartners\">\n\t\t\t\t<div class=\"pgevoke-headerbar\"><span><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/evoke\/blade-logo-b-transparentbg-100px.png\"><\/span> Partners<\/div>\n\t\t\t\t<div class=\"pgevoke-section-bpartners-content\"><\/div>\n\t\t\t<\/div>\n\t\t\t-->\n\t\t\t<<< } >>>\n\t\t\t<<< if (PGVARS.site === \"pg\" && PGVARS.sectionpath === \"sports\/highschool\") { >>>\n\t\t\t<div class=\"pgevoke-section-highschoolsports\">\n\t\t\t\t<a href=\"https:\/\/www.post-gazette.com\/highschoolstats\">\n\t\t\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgsections\/highschool\/pittsburgh-high-school-sports-stats-schedules.png\">\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-section-trending\">\n\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-trending\">\n\t\t\t\t\t<span class=\"icon2 icon2-fire-circle pgevoke-storyicon\"><\/span>\n\t\t\t\t\t<span class=\"pgevoke-headerbar-trending-text\">TRENDING<\/span>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-trending\"><\/div>\n\t\t\t<\/div>\n\t\t\t<<< if (PGVARS.site === \"blade\" && (theobj.adsection === \"adtest\" || theobj.adsection === \"adteststory\")) { >>>\n\t\t\t\t<div class=\"pgevoke-topads-mobile hidden-sm hidden-md hidden-lg hidden-xl\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"ADVENTIVETESTPARALAX\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\t\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-section-extracontent\"><\/div>\n\t\t\t<!--\n\t\t\t<div class=\"pgevoke-mustbox\">\n\t\t\t\t<div class=\"pgevoke-section-newspack1\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t\t<span class=\"pgevoke-section-newspack1-headerbar-text\"><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-section-newspack1-target pgevoke-newspack clearfix\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-section-newspack1-morelink clearfix\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t-->\n\t\t\t<div class=\"pgevoke-section-reveal pg-hidden-desktop\"><\/div>\n\t\t\t<<< if (PGVARS.site === \"pg\" && (PGVARS.sectionpath === \"ae\" || PGVARS.sectionpath == \"life\")) { >>>\n\t\t\t\t<!-- <div class=\"pgevoke-justapinchwidget-inline pg-hidden-mobile\" style=\"display: none; margin-bottom: 25px\"><\/div> -->\n\t\t\t<<< } >>>\n\t\t\t<<< if (PGVARS.site === \"pg\" && theobj.getsFlexbanner2) { >>>\n\t\t\t<!-- <div class=\"pgevoke-grid-row pg-hidden-mobile\"> -->\n\t\t\t<a class=\"pgevoke-flexbanner pg-hidden-mobile\" style=\"height:auto; line-height:initial\">\n\t\t\t\t<div class=\"pgevoke-flexbanner-innerwrapper\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"FLEXBANNER2\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- <\/div> -->\n\t\t\t<<< } else { console.log(\"NO FLEXBANNER2\"); >>>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-section-latest\">\n\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t<span class=\"icon icon-clock-o\" style=\"top:1px; color:red\"><\/span>\n\t\t\t\t\t<span class=\"pgevoke-section-latest-headerbar-text\"><\/span>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-section-infinitestorylist\"><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-grid-area-side\">\n\t\t\t<!-- Sticky Right Rail BEGIN -->\n\t\t\t<div class=\"pgevoke-section-rightrail pg-hidden-mobile\"><\/div>\n\t\t\t<!-- Sticky Right Rail END -->\t\t\t\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: section-rightrail  -----
PGTPLS["section-rightrail"] = "<!-- #pgevoke-_tpl-section-rightrail\" BEGIN -->\n<div class=\"pgevoke-section-rightrail-topworkplaceslink\"><\/div>\n<div class=\"pgevoke-section-rightrail-ad1 mb25 pg-hidden-mobile\">\n\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>> \n<\/div>\n<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div><<< if (PGVARS.site === \"blade\" && PGVARS.sectionpath === \"sports\/high-school\") { >>>\n\t<!--\n\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t<iframe src=\"https:\/\/www.facebook.com\/plugins\/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSteve-Taylors-Stars-Of-The-Week-614265738968992%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId\" width=\"300\" height=\"500\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"><\/iframe>\n\t<\/div>\n\t-->\n<<< } >>>\n<div class=\"pgevoke-section-rightrail-promobox\"><\/div>\n<div class=\"pgevoke-section-rightrail-promobox2\"><\/div>\n<div class=\"pgevoke-spingowidget\">\n\t<div id=\"spingo-list-widget\"><\/div>\n<\/div>\n<<< if (PGVARS.site === \"pg\" && (PGVARS.sectionpath === \"ae\" || PGVARS.sectionpath == \"life\")) { >>>\n<!-- Removing Recipe Widget indefinitely (June 2024)\n<div class=\"pgevoke-justapinchwidget pg-hidden-mobile\">\n\t<div class=\"pg-adwrapper-300x250\" style=\"position: absolute;top:0; left:0; z-index:-5\"><\/div>\n\t<div class=\"pg-adwrapper-300x250\" style=\"position: absolute;bottom:0; left:0; z-index:-5\"><\/div>\n<\/div> -->\n<<< } >>>\n<div class=\"pgevoke-apwidget\"><\/div>\n<<< if (PGVARS.site === \"pg\" && PGVARS.sectionpath == \"sports\/olympics\") { >>>\n\t<div class=\"pgevoke-apwidget2\"><\/div>\n<<< } >>>\n<div class=\"pgevoke-section-facebooklink\"><\/div>\n<div class=\"pgevoke-twitterlist\">\n\t<a class=\"twitter-timeline\" data-height=\"600\"><\/a>\n<\/div>\n<div class=\"pgevoke-rightrail-stickybox-top\" data-stickybox-id=\"pgevoke-rightrail-stickybox-top\">\n\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>> \n\t<\/div>\n\n\t<<< if (PGVARS.site === \"blade\" && typeof PGVARS.piano !== \"undefined\" && PGVARS.piano) { >>>\n\t\t<div class=\"pgevoke-rightrail-login\">\n\t\t\t<div class=\"pgevoke-piano-opt-in-1\">\n\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1592320390064\"><\/pnespwgtplaceholder>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<<< } else { >>>\n\t\t<div class=\"pgevoke-rightrail-login pgevoke-railfooter-accountbuttons mb20 pg-hidden-mobile\">\n\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t<\/div>\n\t<<< } >>>\t\n\n\t\n<\/div>\n<div class=\"pgevoke-rightrail-stickybox-bottom\" data-stickybox-id=\"pgevoke-rightrail-stickybox-bottom\">\n\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div><\/div>\n<!-- #pgevoke-_tpl-section-rightrail\" END -->";

// -----  _tpl: subsectionmenuitem  -----
PGTPLS["subsectionmenuitem"] = "<!-- #pgevoke-_tpl-subsectionmenuitem -->\n<a class=\"pgevoke-subsectionmenu-item\" href=\"<<<=theobj.url>>>\">\n\t<span><<<=theobj.label>>> \u00bb<\/span>\n<\/a>";

// -----  _tpl: story  -----
PGTPLS["story"] = "<!-- #pgevoke-_tpl-story BEGIN v2 -->\n\t<<< if (PGVARS.site === \"blade\" && PGVARS.param1 === \"b-partners\") { >>>\n\t\t<div class=\"pgevoke-story-bpartnersnotice\"><b>B Partners<\/b> is branded content produced by The Blade's marketing department in partnership with our advertisers, not by the newsroom or editorial department. <span class=\"pgevoke-story-bpartnersnotice-moretext\">For questions about this content, or for parties interested in working with the B Partners Team, please email: <a href=\"mailto:BPartners@toledoblade.com\">BPartners@toledoblade.com<\/a> <\/span><span class=\"pgevoke-story-bpartnersnotice-morebutton\">(Read More)<\/span><\/div>\n\t<<< } else if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t\n\t<<< } >>>\n\t\n<\/div>\n\t<div class=\"pgevoke-story-topads\">\n\t\t<<< if (typeof isNativoStory !== \"undefined\" && isNativoStory) { >>>\n\t\t\t<div class=\"pgevoke-story-topads-banner\">\n\t\t\t\t<div style=\"text-align:center\">\n\t\t\t\t\t<div class=\"pg-adwrapper-728x90\" data-nativo=\"story-topbannerad\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<<< } else { >>>\n\t\t\t<div class=\"pgevoke-story-topads-banner\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t<<< } >>>\n\t<\/div>\n<<< if (theobj.noimage) { >>>\n\t<div class=\"pgevoke-story-toparea-noimage\" class=\"clearfix\">\n\t\t<div class=\"pgevoke-story-toparea-noimage-stockimage\"><\/div>\n\t\t<h1 class=\"pgevoke-story-toparea-noimage-headline\">\n\t\t\t<<<=theobj.title>>>\n\t\t<\/h1>\n\t<\/div>\n<<< } else { >>>\n\t<div class=\"pgevoke-story-toparea-cutout clearfix\" data-transporterid=\"<<<=theobj.transporterid>>>\">\n\t\t<div class=\"pgevoke-story-toparea-cutout-image\">\n\t\t<<< if ((theobj.layout === \"portraitwideheadline\" || theobj.layout === \"portraitleftcornerheadline\")) { >>>\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '460x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pgevoke-story-toparea-cutout-image-portraitimg\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"460x_a4-5_cTC\")) { >>>\n\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '460x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pgevoke-story-toparea-cutout-image-portraitimg\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '460x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pgevoke-story-toparea-cutout-image-portraitimg\">\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgmisc\/story-portrait-layout-background.jpg\">\n\t\t<<< } else  { >>>\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<<< if (theobj.transporterid === \"0\") { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pgevoke-story-toparea-cutout-image-portraitimg\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"1140x_a10-7_cTC\")) { >>>\n\t\t\t\t\t<<< if (theobj.transporterid === \"0\") { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<< if (theobj.transporterid === \"0\") { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pgevoke-story-toparea-cutout-image-portraitimg\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '1140x_a10-7_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t<<< } >>>\n\t\t\t\t<div class=\"pgevoke-story-toparea-cutout-gallerybutton\">\n\t\t\t\t\t<div class=\"pgevoke-story-toparea-cutout-gallerybutton-inner\">\n\t\t\t\t\t\t<div class=\"pgevoke-story-toparea-cutout-gallerybutton-camera\">\n\t\t\t\t\t\t\t<span class=\"icon icon-camera4\"><\/span>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-story-toparea-cutout-gallerybutton-circle\">\n\t\t\t\t\t\t\t<span class=\"pgevoke-story-toparea-cutout-gallerybutton-number\"><\/span>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-story-toparea-cutout-gallerybutton-text\">MORE<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t<\/div>\n\t\t<h1 class=\"pgevoke-story-toparea-cutout-headline\">\n\t\t\t<<<=theobj.title>>>\n\t\t<\/h1>\n\t\t<div class=\"pgevoke-story-toparea-cutout-imagecredit\">\n\t\t\t<<<=theobj.imagecredit>>>\n\t\t<\/div>\n\t<\/div>\n<<< } >>>\n\n<div class=\"pgevoke-story-bottomarea clearfix\">\n\t<div class=\"pgevoke-grid-area-main\">\n\t\t<<< if (1 === 1) { >>>\n\t\t\t<<< console.log(\"***** HEADLINE FIX 2\"); >>>\n\t\t\t<h1 class=\"pgevoke-story-bottomarea-headline\">\n\t\t\t\t<<<=theobj.title>>>\n\t\t\t<\/h1>\n\t\t<<< } >>>\n\t\t<<< if (theobj.subtitle !== \"\") { >>>\n\t\t\t<div class=\"pgevoke-story-subtitle\"><<<=theobj.subtitle>>><\/div>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-story-byline\" data-pg-storybyline=\"<<<=theobj.bylinefull>>>\">\n\t\t\t<div class=\"pgevoke-story-byline-left\">\n\t\t\t\t<div class=\"pgevoke-story-byline-authorimage\"><\/div>\n\t\t\t\t<div class=\"pgevoke-story-byline-text\">\n\t\t\t\t\t<div class=\"pgevoke-story-byline-line1\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-byline-line2\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-byline-line3\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-byline-line4\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-story-byline-right\">\n\t\t\t\t\t<div class=\"pgevoke-story-byline-date\"><<<=theobj.bylinedate>>><\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-byline-time\"><<<=theobj.bylinetime>>><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-contentarea clearfix\">\n\t\t\t<div class=\"pgevoke-contentarea-socialbuttons-wrapper\">\n\t\t\t\t<div class=\"pgevoke-contentarea-socialbuttons\">\n\t\t\t\t\t<!-- pgevoke._tpls_story_socialshare -->\n<<< if ((PGVARS.site === \"pg\" && PGVARS.pgnewcomments)) { >>>\n<!--\n<div class=\"pgevoke-contentarea-socialbuttons-comments\">\n\t<a href=\"javascript: void(0);\" alt=\"Show comments\">\n\t\t<span class=\"pgevoke-story-commentscount\"><\/span>\n\t\t<span class=\"icon icon-comment\"><\/span>\n\t<\/a>\n<\/div>\n-->\n<<< } >>>\n<div class=\"pgevoke-contentarea-socialbuttons-facebook\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/facebook.com\/sharer.php?u=<<<=theobj.linkhttps>>>','','width=500,height=500');\">\n\t\t<span class=\"icon icon-facebook\"><\/span>\n\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-twitter\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/twitter.com\/intent\/tweet?url=<<<=theobj.linkhttps>>>&amp;text=<<<=theobj.encodedtitle>>>&amp;via=<<<=PGVARS.twitterid>>>','','width=500,height=500')  \">\n\t\t\t<span  class=\"icon icon-x-twitter\"><\/span>\n\t\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-reddit\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('\/\/www.reddit.com\/submit?url=<<<=theobj.linkhttps>>>','','width=500,height=500')\">\n\t\t<span  class=\"icon icon-reddit-alien\"><\/span>\n\t<\/a>\n<\/div>\n<<< if (1 == 2 && PGVARS.site === \"blade\") { \/\/ Off for now >>>\n<div class=\"pgevoke-contentarea-socialbuttons-linkedin\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/www.linkedin.com\/sharing\/share-offsite\/?url=<<<=theobj.linkhttps>>>','','width=500,height=500')\">\n\t\t<span  class=\"icon icon-linkedin1\"><\/span>\n\t<\/a>\n<\/div>\n<<< } >>>\n<div class=\"pgevoke-contentarea-socialbuttons-email\">\n\t<a href=\"javascript:void(0);\" id=\"tipafriend\" alt=\"Email\">\n\t\t<span class=\"icon icon-envelope\"><\/span>\n\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-print\">\n\t<a href=\"javascript: void(0);\" alt=\"Print\">\n\t<!-- <a href=\"<<<=theobj.link>>>.print\" target=\"_blank\"> -->\n\t\t<span class=\"icon icon-print\"><\/span>\n\t<\/a>\n<\/div>\n<<< if ((PGVARS.site === \"blade\" && PGVARS.useviafoura) || PGVARS.pgnewcomments) { >>>\n<div class=\"pgevoke-contentarea-socialbuttons-comments\">\n\t<a href=\"javascript: void(0);\" alt=\"Show comments\">\n\t<!-- <a href=\"<<<=theobj.link>>>.print\" target=\"_blank\"> -->\n\t\t<span class=\"pgevoke-story-commentscount\"><\/span>\n\t\t<span class=\"icon icon-comment\"><\/span>\n\t<\/a>\n<\/div>\n<<< } >>>\n<!-- OLD: onclick=\"window.open('<<<=PGFNS.getLiberLink(theobj.linkhttps)>>>.print','','width=500,height=500')\" -->\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-contentarea-body\">\n\t\t\t\t<div class=\"pgevoke-contentarea-body-inner pgevoke-story-bodytext-inner\">\n\t\t\t\t\t<div class=\"pgevoke-contentarea-body-text\">\n\t\t\t\t\t\t<<< try { >>> \n\t\t\t\t\t\t\t<<< \/\/ theobj.body += \"<\\!\";-\" + \"- @@@gallery{} -\" + \"->\"; >>>\n\t\t\t\t\t\t\t<<< theobj.body = PGLIB.story.syncscriptloader.prepareScripts(theobj.body); >>>\n\t\t\t\t\t\t\t<<< theobj.body = PGLIB.story.embeddedimages.update(theobj.body); >>>\n\t\t\t\t\t\t\t<<<=PGLIB.story.shortcodes.replaceAll(theobj.body, theobj)>>>\n\t\t\t\t\t\t\t<<< \/\/ theobj.body>>>\n\t\t\t\t\t\t\t<<< console.log(\"TRANSPORTER: Body successfully output\"); >>>\n\t\t\t\t\t\t<<< } catch(err) { console.log(\"TRANSPORTER: Error running 'PGLIB.story.shortcodes.replaceAll' while outputting body\"); console.log(err); } >>> \n\t\t\t\t\t\t<<< if (theobj.endofstorydateformatted !== \"\") { >>>\n\t\t\t\t\t\t\t<p class=\"pgevoke-story-endofstorydate\">First Published <<<=theobj.endofstorydateformatted>>><\/p>\n\t\t\t\t\t\t<<< } else if (theobj.endofstorypubdateformatted !== \"\") { \/\/ PG { >>>\n\t\t\t\t\t\t\t<p class=\"pgevoke-story-endofstorydate\">\n\t\t\t\t\t\t\t\t<<< if (theobj.endofstorymoddateformatted === \"\") { >>>\n\t\t\t\t\t\t\t\t\tFirst Published: <<<=theobj.endofstorypubdateformatted>>>\n\t\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t\tFirst Published: <<<=theobj.endofstorypubdateformatted>>><br>\n\t\t\t\t\t\t\t\t\tUpdated: <<<=theobj.endofstorymoddateformatted>>>\n\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<\/p>\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< if (typeof isNativoStory === \"undefined\" || !isNativoStory) { >>>\n\t\t\t\t\t<<< if (PGVARS.site === \"pg\") { >>>\n\t\t\t\t\t<!-- <div class=\"pgevoke-story-tags\"><\/div> -->\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< if (PGVARS.site === \"blade\" || PGVARS.site === \"pg\") { \/\/ Adding 6\/4\/24 >>>\n\t\t\t\t\t<div class=\"pgevoke-story-authorfollowbox\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< if (PGVARS.site === \"pg\") { >>>\n\t\t\t\t\t<div class=\"pgevoke-story-offerbox\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<div class=\"pgevoke-story-civicscienceinline\"><\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-related-links\"><\/div>\n\t\t\t\t\t<<< if (theobj.commentsenabled===true) { >>>\n\t<div data-spotim-module=\"pitc\"><\/div>\n\t<div class=\"pgevoke-story-comments\" data-comments-enabled=\"<<<=theobj.commentsenabled>>>\">\n\t\t<div class=\"pgevoke-story-comments-button\" data-comments-storyid=\"<<<=theobj.storyid>>>\" data-comments-link=\"<<<=theobj.link.replace(\/\\\/\\\/[a-zA-Z]+?\\.post-gazette\/, '\/\/www.post-gazette').replace(\/^https:\\\/\\\/\/, 'http:\/\/').replace(\/^\\\/\\\/\/, 'http:\/\/').replace(\/([^\/])$\/, '$1\/').replace(\/(.+)\\\/$\/, '$1')>>>\" data-comments-parentsection=\"<<<=theobj.parentsection>>>\" data-comments-button-action=\"show\" rel=\"pgevoke-story-comments-<<<=theobj.storyid>>>\">\n\t\t\t<div class=\"pgevoke-story-comments-button-texthide\" style=\"display: none\">\n\t\t\t\t<span>HIDE COMMENTS&nbsp;&nbsp;<\/span><span class='icon icon-comments'><\/span>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-story-comments-button-textshow\" data-version=\"1\">\n\t\t\t\t<span>SHOW COMMENTS<\/span>&nbsp;<span class=\"pgevoke-story-comments-count\"><\/span>&nbsp;<span class=\"icon icon-comments\"><\/span>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-story-comments-button-textloading\" style=\"display: none\">\n\t\t\t\t<span>LOADING COMMENTS&nbsp;&nbsp;<\/span><span class='fa fa-spin'><span class='icon-spinner3 icon-spin'><\/span><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-story-comments-contentwrapper\" >\n\t\t\t<div class=\"pgevoke-story-comments-header\">Join the Conversation<\/div>\n\t\t\t<div class=\"pgevoke-story-comments-mod\">\n\t\t\t\t<<< if (PGVARS.site === \"pg\" && typeof PGSITESETTINGS.commentpolicylink === \"string\") { >>>\n\t\t\t\t\t<a href=\"<<<=PGSITESETTINGS.commentpolicylink>>>\">Commenting policy<\/a>\n\t\t\t\t\t<span> | <\/span>\n\t\t\t\t\t<a class=\"pgevoke-story-comments-abuse\">How to Report Abuse<\/a>\n\t\t\t\t\t<div class=\"pgevoke-story-comments-textnote\">If you would like your comment to be considered for a published letter to the editor, please send it to <a href=\"mailto:letters@post-gazette.com\">letters@post-gazette.com<\/a>. Letters must be under 250 words and may be edited for length and clarity.<\/div>\n\t\t\t\t<<< } else if (PGVARS.site === \"blade\" && PGVARS.useviafoura) { >>>\n\t\t\t\t\t<div>We value your comments and civil discourse. <a href=\"https:\/\/www.toledoblade.com\/commentguidelines\">Click here<\/a> to review our Commenting Guidelines.<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-story-comments-content\" id=\"spcv_conversation\" style=\"display:none\">\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-story-comments-metadata\" data-width=\"100%\"><\/div>\n\t<\/div>\n<<< } else { >>>\n\t<div class=\"pgevoke-story-comments-disabled\">Comments Disabled For This Story<\/div>\n<<< } >>>\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< if (PGVARS.site === \"blade\" && [\"sports\", \"opinion\"].indexOf(PGVARS.param1) >= 0) { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-story-optinbox\">\n\t\t\t\t\t\t\t<div class=\"pgevoke-story-optinbox-content\">\n\t\t\t\t\t\t\t<<< if (PGVARS.param1 === \"sports\") { >>>\n\t\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1602690880647\"><\/pnespwgtplaceholder>\t\n\t\t\t\t\t\t\t<<< } else if (PGVARS.param1 === \"business\") { >>>\n\t\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1602791521930\"><\/pnespwgtplaceholder>\t\n\t\t\t\t\t\t\t<<< } else if (PGVARS.param1 === \"opinion\") { >>>\n\t\t\t\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1602798600301\"><\/pnespwgtplaceholder>\t\n\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\t\t\t\t\t\t\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div> <!-- \/pgevoke-story-body -->\n\t\t<<< if (typeof isNativoStory === \"undefined\" || !isNativoStory) { >>>\n\t\t\t<div class=\"pgevoke-story-extracontent\">\n\t\t\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t\t\t\t<div id=\"flipp-ux-slot-f83ndy\">\n\t\t\t\t\t  <div class=\"flipp-ux-header\" style=\"display: none\">\n\t\t\t\t\t     <h2>Featured Local Savings<\/h2>\n\t\t\t\t\t  <\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t\t<div class=\"pgevoke-story-extracontent-mustread\">\n\t\t\t\t\t<div class=\"pgevoke-mustbox pgevoke-mustread clearfix\">\n\t\t\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t\t\t<span>Must Read<\/span>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-story-extracontent-nativo\"><\/div>\n\t\t\t\t<div class=\"pgevoke-story-extracontent-bpartners\">\n\t\t\t\t\t<div class=\"pgevoke-mustbox clearfix\">\n\t\t\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-bpartners\"><span class=\"pgevoke-headerbar-bpartners-blogo\"><\/span> Partners<\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-newspack\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pg-hidden-desktop\" style=\"margin-bottom:35px\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"X02\", adsection: theobj.adsection})>>>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-story-extracontent-trending\">\n\t\t\t\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-trending\">\n\t\t\t\t\t\t<span class=\"icon2 icon2-fire-circle pgevoke-storyicon\"><\/span>\n\t\t\t\t\t\t<span>TRENDING<\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-story-extracontent-trending-content\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<<< } >>>\n\t\t<!-- pgevoke._tpls_story_rightrail_gallery -->\n<div class=\"pgevoke-story-swiper pgevoke-story-swiper-popup mfp-hide\">\n\t<div class=\"swiper-container\" >\n\t\t<!--\n\t\t<div class=\"swiper-fullscreenbutton\">\n\t\t\t<span class=\"icon icon-expand\"><\/span>\n\t\t<\/div>\n\t\t-->\n\t\t<div class=\"swiper-wrapper\">\n\t\t\t<!-- Slides t -->\n\t\t\t<<< $.each(theobj.images, function(index,image) { >>>\n\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"<<<=PGFNS.formatImage(image.url,'1200x')>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"1200x\")) { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"https:\\\/\\\/<<<=image.cdn.host>>>\\\/1200x\\\/<<<=image.cdn.fileName>>>\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"<<<=PGFNS.formatImage(image.url,'1200x')>>>\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"><\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"swiper-slide-caption\">\n\t\t\t\t\t\t\t<div class=\"swiper-slide-caption-inner\">\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-caption-text\">\n\t\t\t\t\t\t\t\t\t<<<=image.caption>>>\n\t\t\t\t\t\t\t\t\t<<< if (typeof image.photoCredit === \"string\" && image.photoCredit !== \"\") { >>>\n\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"swiper-slide-credit\">(<<<=image.photoCredit>>>)<\/span>\n\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< if (PGVARS.usefotomoto) { >>>\n\t\t\t\t\t\t\t\t\t\t<<< \/\/ console.log(\"BUYLINK: \", image.buylink); >>>\n\t\t\t\t\t\t\t\t\t\t<<< \/\/ console.log(\"BUYLINK: \", typeof image.buylink); >>>\n\t\t\t\t\t\t\t\t\t\t<<< if (typeof image.buylink === \"boolean\" && image.buylink) { >>>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<a class=\"swiper-slide-buylink\" data-fotomoto-printurl=\"<<<=image.printurl>>>\" data-fotomoto-weburl=\"<<<=image.weburl>>>\" data-fotomoto-storyurl=\"<<<=image.storyurl>>>\">Buy Image<\/a>\n\t\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t\t\t<<< if (typeof image.buylink === \"string\" && image.buylink !== \"\") { >>>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<a href=\"<<<=image.buylink>>>\" class=\"swiper-slide-buylink\">Buy Image<\/a>\n\t\t\t\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t\t\t\t<!-- &nbsp;<span class=\"swiper-slide-buylink\">Buy Img<\/span> -->\n\t\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<<< }); >>>\n\t\t<\/div>\n\t\t<div class=\"swiper-pagination\"><\/div>       \n\t\t<div class=\"swiper-button-prev swiper-button-white\"><\/div>\n\t\t<div class=\"swiper-button-next swiper-button-white\"><\/div>\n\t\t<!-- If we need scrollbar -->\n\t\t<!-- <div class=\"swiper-scrollbar\"><\/div> -->\n\t<\/div>\n\t<div class=\"swiper-closebutton popup-modal-dismiss\">\n\t\t<div class=\"swiper-closebutton-inner\">\n\t\t\t<span class=\"icon icon-cross\"><\/span>\n\t\t<\/div>\n\t<\/div>\n<\/div>\t<\/div> <!-- end of .pgevoke-grid-area-main -->\n\t<div class=\"pgevoke-grid-area-side\">\n\t\t<!-- Sticky Right Rail BEGIN -->\n<div class=\"pgevoke-story-rightrail\">\n\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<!-- PIANOWIDGETID: <<<=theobj.widgetid>>> -->\n\t<<< } >>>\n\t<<< if (typeof isNativoStory === \"boolean\" && isNativoStory === true) { >>>\n\t\t<div class=\"pgevoke-story-rightrail-nativospacer\"><\/div>\n\t\t<div class=\"pgevoke-story-rightrail-stickybox\">\n\t\t\t<div class=\"pgevoke-story-rightrail-ad-sticky pg-adwrapper-300x250 mb25\" data-nativo=\"story-rightrailad\">\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-story-rightrail_login\">\n\t\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-story-rightrail-stickyboxbottom\">\n\t\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t\t<\/div>\n\t<<< } else { >>>\n\t\t<div class=\"pgevoke-story-rightrail-imagecredit\">\n\t\t\t<<<=theobj.imagecredit>>>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-story-rightrail-ad1 mb25 pg-hidden-mobile\">   \n\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>> \n\t\t<\/div>\n\t\t<<< if (typeof PGVARS.piano !== \"undefined\" && PGVARS.piano && PGVARS.site === \"blade\") { >>>\n\t\t\t\n\t\t\t<div class=\"pgevoke-piano-opt-in-1\">\n\t\t\t\t<!--\n\t\t\t\t<<< if (typeof PGVARS.pianosandbox === \"boolean\" && PGVARS.pianosandbox) { >>>\n\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1591247383265\"><\/pnespwgtplaceholder>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<pnespwgtplaceholder holdername=\"embedded_1597338393743\"><\/pnespwgtplaceholder>\n\t\t\t\t<<< } >>>\n\t\t\t\t-->\n\t\t\t<\/div>\n\t\t\t\n\t\t<<< } >>>\n\t\t<<< if (PGLIB.story.transporter.currentindex === 0) { >>>\n\t\t\t <div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t\t<<< } >>>\n\t\t<<< if (PGVARS.site === \"blade\" && PGVARS.sectionpath === \"sports\/high-school\") { >>>\n\t\t\t<!--\n\t\t\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t\t\t<iframe src=\"https:\/\/www.facebook.com\/plugins\/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSteve-Taylors-Stars-Of-The-Week-614265738968992%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId\" width=\"300\" height=\"500\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"><\/iframe>\n\t\t\t<\/div>\n\t\t\t-->\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-story-latest mb25 pg-hidden-mobile\">\n\t<div class=\"pgevoke-railstorylist\">\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>LATEST <<<=theobj.parentsectionid>>><\/span>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railstorylist-content\" data-pgevoke-lateststories-loaded=\"0\"><\/div>\n\t<\/div>\n<\/div>\t\t<<< if (1==2 && PGVARS.site === \"pg\" && (PGVARS.param1 === \"ae\" || PGVARS.param1 == \"life\")) { >>>\n\t\t\t<!-- Disabling indefinitely on 6\/24\/24\n\t\t\t<div class=\"pgevoke-justapinchwidget pg-hidden-mobile\">\n\t\t\t\t<div class=\"pg-adwrapper-300x250\" style=\"position: absolute;top:0; left:0; z-index:-5\"><\/div>\n\t\t\t\t<div class=\"pg-adwrapper-300x250\" style=\"position: absolute;bottom:0; left:0; z-index:-5\"><\/div>\n\t\t\t<\/div>\n\t\t\t-->\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-apwidget pg-hidden-mobile\"><\/div>\n\t\t<div class=\"pgevoke-story-rightrail-stickybox\">\n\t\t\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>> \n\t\t\t<\/div>\n\n\t\t\t<<< if (PGVARS.site === \"blade\" && typeof PGVARS.piano !== \"undefined\" && PGVARS.piano) { >>>\n\t\t\t\t<div class=\"pgevoke-rightrail-login\">\n\t\t\t\t\t<div class=\"pgevoke-piano-opt-in-2\"><\/div>\n\t\t\t\t<\/div>\n\t\t\t<<< } else { >>>\n\t\t\t\t<div class=\"pgevoke-rightrail-login mb20 pg-hidden-mobile\">\n\t\t\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t<\/div> <!-- stickybox -->\n\t\t<div class=\"pgevoke-story-rightrail-stickyboxbottom pg-hidden-mobile\">\n\t\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t\t<\/div>\n\t<<< } >>>\n<\/div>\n<!-- Sticky Right Rail END -->\t<\/div>\n\t<div class=\"pgevoke-story-mobileads\" style=\"display:none\">\n\t\t<!--\n\t\t\tLOAD X04 AND X03 HERE THEN MOVE INTO BODY. THIS WILL ALLOW USE OF \n\t\t\tTHE ADSECTION VARIABLE\n\t\t-->\n\t<\/div>\n<\/div>\n<!-- #pgevoke-_tpl-story END -->";

// -----  _tpl: story-related  -----
PGTPLS["story-related"] = "<!-- pgevoke._tpls.story_rightrail_gallery-->\n<div class=\"pgevoke-headerbar\" style=\"margin-top:10px\">\n\t<span class=\"icon icon-check-circle\"><\/span>\n\t<span>RELATED<\/span>\n<\/div>\n<<< $.each(theobj.relatedlinks, function(index, item) { >>>\n\t<<< if (typeof item.url === \"string\" && typeof item.title === \"string\" && (typeof item.future !== \"string\" || item.future !== \"YES\" )) { >>>\n\t<a class=\"pgevoke-story-related-link pgevoke-parentsection-<<<=PGFNS.getParam1(item.url)>>>\" href=\"<<<=item.url>>>\">\n\t\t<div class=\"pgevoke-story-related-link-image\">\n\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t<<< var relatedimgalt = (typeof item.imagecaption === \"string\" && item.imagecaption !== \"\") ? item.imagecaption : item.title; >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(item, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t <img src=\"<<<=PGLIB.all.cdnimages.getLink(item, '300x_a1-1_cTC')>>>\" alt=\"<<<=relatedimgalt>>>\">\n\t\t\t\t<<< } else if (typeof item.image === \"string\" && item.image !== \"\") { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(item.image,'a1-1_270x270_q80')>>>\" alt=\"<<<=relatedimgalt>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-story-related-link-text\">\n\t\t\t<<< if (typeof item.author === \"string\" && item.author !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-story-related-link-author\"><<<=PGFNS.formatByline(item.author)>>><\/div>\n\t\t\t<<< } else { >>>\n\t\t\t\t<div class=\"pgevoke-story-related-link-author\">Related Story<\/div>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-story-related-link-title\"><<<=item.title>>><\/div>\n\t\t<\/div>\n\t<\/a>\n\t<<< } >>>\n<<< }); >>>\n";

// -----  _tpl: story_rightrail_login  -----
PGTPLS["story_rightrail_login"] = "<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->";

// -----  _tpl: story_rightrail_gallery  -----
PGTPLS["story_rightrail_gallery"] = "<!-- pgevoke._tpls_story_rightrail_gallery -->\n<div class=\"pgevoke-story-swiper pgevoke-story-swiper-popup mfp-hide\">\n\t<div class=\"swiper-container\" >\n\t\t<!--\n\t\t<div class=\"swiper-fullscreenbutton\">\n\t\t\t<span class=\"icon icon-expand\"><\/span>\n\t\t<\/div>\n\t\t-->\n\t\t<div class=\"swiper-wrapper\">\n\t\t\t<!-- Slides t -->\n\t\t\t<<< $.each(theobj.images, function(index,image) { >>>\n\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"<<<=PGFNS.formatImage(image.url,'1200x')>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"1200x\")) { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"https:\\\/\\\/<<<=image.cdn.host>>>\\\/1200x\\\/<<<=image.cdn.fileName>>>\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"swiper-slide-image swiper-lazy\" data-background=\"<<<=PGFNS.formatImage(image.url,'1200x')>>>\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"><\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<div class=\"swiper-slide-caption\">\n\t\t\t\t\t\t\t<div class=\"swiper-slide-caption-inner\">\n\t\t\t\t\t\t\t\t<div class=\"swiper-slide-caption-text\">\n\t\t\t\t\t\t\t\t\t<<<=image.caption>>>\n\t\t\t\t\t\t\t\t\t<<< if (typeof image.photoCredit === \"string\" && image.photoCredit !== \"\") { >>>\n\t\t\t\t\t\t\t\t\t\t&nbsp;<span class=\"swiper-slide-credit\">(<<<=image.photoCredit>>>)<\/span>\n\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< if (PGVARS.usefotomoto) { >>>\n\t\t\t\t\t\t\t\t\t\t<<< \/\/ console.log(\"BUYLINK: \", image.buylink); >>>\n\t\t\t\t\t\t\t\t\t\t<<< \/\/ console.log(\"BUYLINK: \", typeof image.buylink); >>>\n\t\t\t\t\t\t\t\t\t\t<<< if (typeof image.buylink === \"boolean\" && image.buylink) { >>>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<a class=\"swiper-slide-buylink\" data-fotomoto-printurl=\"<<<=image.printurl>>>\" data-fotomoto-weburl=\"<<<=image.weburl>>>\" data-fotomoto-storyurl=\"<<<=image.storyurl>>>\">Buy Image<\/a>\n\t\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t\t\t<<< if (typeof image.buylink === \"string\" && image.buylink !== \"\") { >>>\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;<a href=\"<<<=image.buylink>>>\" class=\"swiper-slide-buylink\">Buy Image<\/a>\n\t\t\t\t\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t\t\t\t\t<!-- &nbsp;<span class=\"swiper-slide-buylink\">Buy Img<\/span> -->\n\t\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<<< }); >>>\n\t\t<\/div>\n\t\t<div class=\"swiper-pagination\"><\/div>       \n\t\t<div class=\"swiper-button-prev swiper-button-white\"><\/div>\n\t\t<div class=\"swiper-button-next swiper-button-white\"><\/div>\n\t\t<!-- If we need scrollbar -->\n\t\t<!-- <div class=\"swiper-scrollbar\"><\/div> -->\n\t<\/div>\n\t<div class=\"swiper-closebutton popup-modal-dismiss\">\n\t\t<div class=\"swiper-closebutton-inner\">\n\t\t\t<span class=\"icon icon-cross\"><\/span>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: featuredpack  -----
PGTPLS["featuredpack"] = "<!-- #pgevoke-_tpl-featuredpack v20200213_1242 -->\n\t<div class=\"pgevoke-featuredpack-item pgevoke-featuredpack-item-<<<=theobj.counter+1>>> pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix\">\n\t\t<div class=\"pgevoke-featuredpack-item-a\">\n\t\t\t<a class=\"pgevoke-featuredpack-image\" href=\"<<<=theobj.link>>>\">\n\t\t\t\t<<< if (theobj.counter === 0 && PGLIB.all.cdnimages.hasSize(theobj, \"600x_a4-3_cTC\")) { >>>\n\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t\t\t<<< } else if (theobj.counter > 0 && PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t\t\t<<< } else if (theobj.imagelink != \"\") { >>>\n\t\t\t\t\t<<< if (theobj.counter === 0) { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a3-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a3-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t\t<<< if (theobj.counter > 0) { >>>\n\t\t\t\t\t<<< \/\/ if (PGVARS.site === \"blade\" && theobj.hasSST) { >>>\n\t\t\t\t\t<<< if (theobj.hasSST) { >>>\n\t\t\t\t\t\t<<< if (theobj.sstcolor === \"green\") { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag pgevoke-sectionbox-specialstorytag-green\">\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag\">\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<<<=theobj.specialstorytag>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-nospecialstorytag\">\n\t\t\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<\/a>\n\t\t\t<div class=\"pgevoke-featuredpack-text\">\n\t\t\t\t<a class=\"pgevoke-featuredpack-text-top\" href=\"<<<=theobj.link>>>\" data-dontmarktrending=\"1\">\n\t\t\t\t\t<<< \/\/ if (PGVARS.site === \"blade\" && theobj.hasSST) { >>>\n\t\t\t\t\t<<< if (theobj.hasSST) { >>>\n\t\t\t\t\t\t<<< if (theobj.sstcolor === \"green\") { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag pgevoke-sectionbox-specialstorytag-green\">\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag\">\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<<<=theobj.specialstorytag>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-nospecialstorytag\">\n\t\t\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<div class=\"pgevoke-featuredpack-headline\">\n\t\t\t\t\t\t<<<=theobj.teasertitle>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/a>\n\t\t\t\t<<< if (theobj.counter === 0) { >>>\n\t\t\t\t\t<<< if (typeof theobj.relatedlinks !== \"undefined\" && Array.isArray(theobj.relatedlinks) && theobj.relatedlinks.length >= 1) { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-related\">\n\t\t\t\t\t\t<<< $.each(theobj.relatedlinks, function(i, relateditem) { >>>\n\t\t\t\t\t\t\t<<< if (i <= 1 && typeof relateditem === \"object\" && relateditem !== null) { >>>\n\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-featuredpack-related-item\">\n\t\t\t\t\t\t\t\t\t\t<a data-dedupe-exclude=\"1\" href=\"<<<=relateditem.url>>>\"><<<=relateditem.title>>><\/a>\n\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t<<< }); >>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<<< if (PGVARS.site === \"pg\" && theobj.subtitle !== \"\") { >>>\n\t\t\t\t\t\t\t<a class=\"pgevoke-featuredpack-subtitle\" href=\"<<<=theobj.link>>>\"><<<=theobj.subtitle>>><\/a>\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<!-- No related links! -->\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>";

// -----  _tpl: newsbox  -----
PGTPLS["newsbox"] = "<div class=\"pgevoke-newsbox\" data-pgevoke-newsbox-id=\"<<<=theobj.sectionname>>>\">\n\t<div class=\"pgevoke-newsbox-header pgevoke-newsbox-header-blogs\">\n\t\t<<<=theobj.sectionname>>>\n\t<\/div>\n\t<div class=\"pgevoke-newsbox-feature\"><\/div>\n\t<div class=\"pgevoke-newsbox-storystack\"><\/div>\n\t<<< if (typeof theobj.morelink !== \"undefined\" && theobj.morelink) { >>>\n\t\t<div class=\"pgevoke-newsbox-morelink\">\n\t\t\t<a href=\"<<<=theobj.morelink>>>\">MORE <<<=theobj.sectionname>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span><\/a>\n\t\t<\/div>\n\t<<< } >>>\n<\/div>";

// -----  _tpl: newsbox-storystackitem  -----
PGTPLS["newsbox-storystackitem"] = "<!-- #pgevoke-_tpl-newsbox-storystackitem -->\n<a href=\"<<<=theobj.link >>>\" class=\"pgevoke-newsbox-storystack-item clearfix\">\n\t<<< if (theobj.imagelink != \"\") { >>>\n\t\t<div class=\"pgevoke-newsbox-storystack-image\">\n\t    \t<img src=\"<<<=theobj.imagelink>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t    <\/div>\n\t<<< } >>>\n\t\t<div class=\"pgevoke-newsbox-storystack-headline\"><<<=theobj.title>>><\/div>\n<\/a>";

// -----  _tpl: newsbox-featureitem  -----
PGTPLS["newsbox-featureitem"] = "<!-- #pgevoke-_tpl-newsbox-featureitem -->\n<a class=\"pgevoke-newsbox-feature-item pgevoke-parentsection-default\" href=\"<<<=theobj.link>>>\">\n\t<div class=\"pgevoke-image\">\n\t\t<<< if (theobj.imagelink != \"\") { >>>\n\t\t\t<<< if (typeof typeof theobj.isATF === \"boolean\" && theobj.isATF) { >>>\n\t\t\t\t<img src=\"<<<=theobj.imagelink>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<img data-original=\"<<<=theobj.imagelink>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t<<< } >>>\n\t<\/div>\n\t<div class=\"pgevoke-newsbox-feature-headline\">\n\t\t<span><<<=theobj.title>>><\/span>\n\t<\/div>\n\t<div class=\"pgevoke-newsbox-feature-teaser\">\n\t\t<span><\/span>\n\t<\/div>\n<\/a>";

// -----  _tpl: newsboxv2  -----
PGTPLS["newsboxv2"] = "<div class=\"pgevoke-newsboxv2 pgevoke-parentsection-<<<=theobj.parentsectionid>>>\" data-pgevoke-newsbox-sectionid=\"<<<=theobj.sectionid>>>\">\n\t<a href=\"<<<=theobj.morelink>>>\" class=\"pgevoke-newsbox-header pgevoke-newsbox-header-<<<=theobj.parentsectionid>>>\">\n\t\t<<<=theobj.sectionlabel>>>\n\t<\/a>\n\t<div class=\"pgevoke-newsboxv2-contentwrapper clearfix\">\n\t\t<div class=\"pgevoke-newsboxv2-colleft\">\n\t\t\t<div class=\"pgevoke-newsboxv2-feature pgevoke-newsboxv2-feature-1\"><\/div>\n\t\t\t<div class=\"pgevoke-newsboxv2-feature pgevoke-newsboxv2-feature-2\"><\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newsboxv2-colright\">\n\t\t\t<div class=\"pgevoke-newsboxv2-storystack\"><\/div>\n\t\t\t<div class=\"pgevoke-newsbox-morelink pgevoke-newsbox-morelink-<<<=theobj.parentsectionid>>>\">\n\t\t\t\t<a href=\"<<<=theobj.morelink>>>\">MORE <<<=theobj.sectionlabel>>> &nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span><\/a>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: newsboxv2-storystackitem  -----
PGTPLS["newsboxv2-storystackitem"] = "<!-- #pgevoke-_tpl-newsboxv2-storystackitem BEGINNING -->\n<a href=\"<<<=theobj.link >>>\" class=\"pgevoke-newsboxv2-storystack-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix\" data-pg-newsbox-layout=\"<<<=theobj.layout>>>\" clearfix\">\n\t<div class=\"pgevoke-newsboxv2-storystack-image\">\n\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\") && PGLIB.all.cdnimages.hasSize(theobj, \"100x_a1-1_cTC\")) { >>>\n\t\t\t<<< if (PGLIB.all.breakpoints.getCurrentGroup() === \"mobile\") { >>>\n\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '100x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } >>>\n\t\t<<< } else if (theobj.imagelink !== \"\") { >>>\n\t\t\t<<< if (PGVARS.site === \"blade\" && PGLIB.all.breakpoints.getCurrentGroup() === \"mobile\" && theobj.layout.indexOf(\"portrait\") >= 0) { >>>\n\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '270x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '270x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t    \t<<< } >>>\n\t   \t<<< } else { >>>\n\t   \t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t    <<< } >>>\n    <\/div>\n\t<div class=\"pgevoke-newsboxv2-storystack-headline\"><<<=theobj.teasertitle>>><\/div>\n<\/a>\n<!-- #pgevoke-_tpl-newsboxv2-storystackitem END -->";

// -----  _tpl: newsboxv2-featureitem  -----
PGTPLS["newsboxv2-featureitem"] = "<!-- #pgevoke-_tpl-newsboxv2-featureitem BEGINNING -->\n<div class=\"pgevoke-newsboxv2-feature-item <<<=theobj.wrapperclasses>>>\" href=\"<<<=theobj.link>>>\" data-pg-newsbox-layout=\"<<<=theobj.layout>>>\">\n\t<a class=\"pgevoke-image\" href=\"<<<=theobj.link>>>\">\n\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"600x_a4-3_cTC\") && PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t<<< if (PGLIB.all.breakpoints.getCurrentGroup() === \"mobile\") { >>>\n\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" data-pg-imageurl-mobile=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" data-pg-imageurl-desktop=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" data-pg-imageurl-mobile=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" data-pg-imageurl-desktop=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } >>>\n\t\t<<< } else if (theobj.imagelink !== \"\") { >>>\n\t\t\t<<< if (PGVARS.site === \"blade\" && theobj.layout.indexOf(\"portrait\") >= 0) { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" data-pg-imageurl-mobile=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a4-5_cTC')>>>\" data-pg-imageurl-desktop=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a4-5_cTC')>>>\" class=\"pg-lazyload\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.breakpoints.getCurrentGroup() === \"mobile\") { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" data-pg-imageurl-mobile=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a1-1_cTC')>>>\" data-pg-imageurl-desktop=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a4-3_cTC')>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t    \t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" data-pg-imageurl-mobile=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a1-1_cTC')>>>\" data-pg-imageurl-desktop=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a4-3_cTC')>>>\" class=\"pg-lazyload\">\n\t\t\t    <<< } >>>\n\t\t\t<<< } >>>\n\t\t<<< } else { >>>\n\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t<<< } >>>\n\t<\/a>\n\t<div class=\"pgevoke-newsboxv2-feature-text\">\n\t\t<a class=\"pgevoke-newsboxv2-feature-headline\" href=\"<<<=theobj.link >>>\">\n\t\t\t<span><<<=theobj.teasertitle>>><\/span>\n\t\t<\/a>\n\t<\/div>\n<\/div>\n<!-- #pgevoke-_tpl-newsboxv2-featureitem END -->";

// -----  _tpl: columnistsbox  -----
PGTPLS["columnistsbox"] = "<div class=\"pgevoke-newsbox-columnists pg-hidden-mobile\">\n\t<a href=\"<<<=theobj.morelink>>>\" class=\"pgevoke-newsbox-header\">\n\t\tESSENTIAL OPINIONS\n\t<\/a>\n\t<div class=\"pgevoke-newsboxes-wrapper\">\n\t\t<div class=\"pgevoke-newsbox\">\n\t\t\t<div class=\"pgevoke-newsbox-storystack pgevoke-newsbox-storystack-1\"><\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newsbox\">\n\t\t\t<div class=\"pgevoke-newsbox-storystack pgevoke-newsbox-storystack-2\"><\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newsbox\">\n\t\t\t<div class=\"pgevoke-newsbox-storystack pgevoke-newsbox-storystack-3\"><\/div>\n\t\t\t<div class=\"pgevoke-newsbox-morelink pgevoke-newsbox-morelink-columnists\">\n\t\t\t\t<a href=\"<<<=theobj.morelink>>>\">MORE &nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span><\/a>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div> <!-- pgevoke-newsboxes-wrapper -->\n<\/div>";

// -----  _tpl: columnistsboxitem  -----
PGTPLS["columnistsboxitem"] = "<!-- _TPL: #pgevoke-_tpl-newsbox-columnists -->\n<a class=\"pgevoke-newsbox-storystack-item pgevoke-newsbox-storystack-item-columnist clearfix\" href=\"<<<=theobj.link>>>\">\n\t<div class=\"pgevoke-newsbox-columnist-image pgevoke-newsbox-columnist-image_<<<=theobj.pgpageapikey.replace('columnist-','')>>>\"><\/div>\n\t<div class=\"pgevoke-newsbox-storystack-headline\">\n\t\t<span><<<=theobj.title>>><\/span>\n\t<\/div>\n<\/a>";

// -----  _tpl: recent  -----
PGTPLS["recent"] = "<!-- Recent Stories Item -->\n<!-- <script type=\"text\/template\" class=\"template\" id=\"pgevoke-_tpl-recent\"> -->\n<a class=\"pgevoke-storyfeed-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix<<<=theobj.specialclasses>>>\" href=\"<<<=theobj.link>>>\" data-pg-storyfeed-layout=\"<<<=theobj.layout>>>\">\n\t<div class=\"pgevoke-storyfeed-image-wrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else if (theobj.imagelink != \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-storyfeed-image-cornerbox\"> <<<=theobj.timestampshort>>><\/div>\n\t\t\t<div class=\"pgevoke-sectionbox\"><!-- <<< \/\/ theobj.parentsectionname>>>--><<<=theobj.sectionboxtext>>><\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-storyfeed-text\">\n\t\t<div class=\"pgevoke-storyfeed-headline\"><<<=theobj.teasertitle>>><\/div>\n\t\t<div class=\"pgevoke-storyfeed-byline\">\n\t\t\t<span class=\"pgevoke-storyfeed-pubdate\">\n\t\t\t\t<span class=\"fa fa-clock-o\"><\/span> <<<=theobj.timestamp>>>\n\t\t\t<\/span>\n\t\t\t<span class=\"pgevoke-storyfeed-author\">\n\t\t\t\t<span class=\"fa fa-user\"><\/span> <<<=theobj.byline>>>\n\t\t\t<\/span>\n\t\t<\/div>\n\t<\/div>\n<\/a>\n<!-- <\/script> -->";

// -----  _tpl: recommended  -----
PGTPLS["recommended"] = "<!-- Storyfeed (Trending, Infinite Scroll, etc) -->\n<!-- <script type=\"text\/template\" class=\"template\" id=\"pgevoke-_tpl-trending\"> -->\n<a class=\"pgevoke-storyfeed-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix<<<=theobj.specialclasses>>>\" href=\"<<<=theobj.link>>>\" data-pg-storyfeed-layout=\"<<<=theobj.layout>>>\">\n\t<div class=\"pgevoke-storyfeed-image-wrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC_q80')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-storyfeed-image-cornerbox\">\n\t\t\t\t<<<=theobj.counter+1>>>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-sectionbox\"><!-- <<< \/\/ theobj.parentsectionname>>>--><<<=theobj.sectionboxtext>>><\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-storyfeed-text\">\n\t\t<div class=\"pgevoke-storyfeed-headline\"><<<=theobj.teasertitle>>><\/div>\n\t\t<div class=\"pgevoke-storyfeed-byline\">\n\t\t\t<span class=\"pgevoke-storyfeed-pubdate\">\n\t\t\t\t<span class=\"fa fa-clock-o\"><\/span> <<<=theobj.pubdateformatted>>>\n\t\t\t<\/span>\n\t\t\t<span class=\"pgevoke-storyfeed-author\">\n\t\t\t\t<span class=\"fa fa-user\"><\/span> <<<=theobj.byline>>>\n\t\t\t<\/span>\n\t\t<\/div>\n\t<\/div>\n<\/a>\n<!-- <\/script> -->";

// -----  _tpl: newspack-pluswrapper  -----
PGTPLS["newspack-pluswrapper"] = "<div class=\"pgevoke-grid-row\">\n\t<div class=\"pgevoke-newspack-pluswrapper\" data-newspack-pluswrapper-id=\"<<<=theobj.dataid>>>\">\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span><<<=theobj.header>>><\/span>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newspack clearfix\"><\/div>\n\t\t<div class=\"pgevoke-morelink pgevoke-morelink-right\">\n\t\t\t<a href=\"<<<=theobj.morelink>>>\"><<<=theobj.moretext>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/a>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: newspack  -----
PGTPLS["newspack"] = "<!-- #pgevoke-_tpl-newspack -->\n<a class=\"pgevoke-newspack-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix\" href=\"<<<=theobj.link>>>\" data-pg-newspack-layout=\"<<<=theobj.layout>>>\">\n\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (typeof theobj.cdnimage !== \"undefined\" && theobj.cdnimage.sizes.indexOf(\"300x_a1-1_cTC\") >= 0) { >>>\n\t\t\t\t<<< if (typeof theobj.isATF === \"boolean\" && theobj.isATF) { >>>\n\t\t\t\t\t<img src=\"https:\/\/<<<=theobj.cdnimage.host>>>\/300x_a1-1_cTC\/<<<=theobj.cdnimage.fileName>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<img data-original=\"https:\/\/<<<=theobj.cdnimage.host>>>\/300x_a1-1_cTC\/<<<=theobj.cdnimage.fileName>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else if (typeof theobj.imagelink === \"string\" && theobj.imagelink !== \"\") { >>>\n\t\t\t\t<<< if (typeof theobj.isATF === \"boolean\" && theobj.isATF) { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_cTC_a1-1')>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_cTC_a1-1')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else if (typeof theobj.customimagelink === \"string\" && theobj.customimagelink !== \"\") { >>>\n\t\t\t\t<div class=\"pgevoke-imagebackground\" style=\"background-image:url(<<<=theobj.customimagelink>>>)\"><\/div>\n\t\t\t\t<<< if (typeof theobj.watermarkicon === \"string\") { >>>\n\t\t\t\t\t<<< if (theobj.watermarkicon === \"photo\") { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-photowatermark\"><span class=\"icon icon-camera4\"><\/span><\/div>\n\t\t\t\t\t<<< } else if (theobj.watermarkicon === \"video\") { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-videowatermark\"><span class=\"icon icon-play-circle\"><\/span><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t<<< } >>>\n\n\n\t\t\t<<< \/\/ if (PGVARS.site === \"blade\" && theobj.useSST && theobj.hasSST) { >>>\n\t\t\t<<< if (theobj.useSST && theobj.hasSST) { >>>\n\t\t\t\t<<< if (theobj.sstcolor === \"green\") { >>>\n\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag pgevoke-sectionbox-specialstorytag-green\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag\">\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<<<=theobj.specialstorytag>>>\n\t\t\t\t<\/div>\n\t\t\t<<< } else { >>>\n\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-nospecialstorytag\">\n\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t<\/div>\n\t\t\t<<< } >>>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-newspack-text\">\n\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t<span><<<=theobj.teasertitle>>><\/span>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-newspack-links\">\n\t\t<\/div>\n\t<\/div>\n<\/a>";

// -----  _tpl: newspackspecialpromo  -----
PGTPLS["newspackspecialpromo"] = "<!-- #pgevoke-_tpl-newspack -->\n<a class=\"pgevoke-newspack-item pgevoke-newspack-specialpromoitem clearfix\" href=\"https:\/\/bit.ly\/PG_SteelersCamp23\">\n\t<div class=\"pgevoke-newspack-specialpromoitem-imagewrapper\">\n\t<\/div>\n\t<div class=\"pgevoke-newspack-specialpromoitem-textwrapper\">\n\t\t<div class=\"pgevoke-newspack-specialpromoitem-text\">\n\t\t\tCOMPLETE STEELERS TRAINING CAMP COVERAGE&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span>\n\t\t<\/div>\n\t<\/div>\n<\/a>";

// -----  _tpl: lateststories  -----
PGTPLS["lateststories"] = "<!-- #pgevoke-_tpl-lateststories BEGINNING -->\n<a class=\"pgevoke-railstorylist-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix\" href=\"<<<=theobj.link>>>\">\n\t<div class=\"pgevoke-railstorylist-imagewrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink,'270x_q80_a1-1_cMC')>>>\" alt=\"<<<=theobj.imagealt>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (theobj.context !== \"fpbreaking\" && PGLIB.all.cdnimages.hasSize(theobj, \"100x_a1-1_cTC\")) { >>>\n\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '100x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t<<< } else if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>> \n\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t<<< } else if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink,'270x_q80_a1-1_cMC')>>>\" alt=\"<<<=theobj.imagealt>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-railstorylist-headline\"><<<=theobj.title>>><\/div>\n<\/a>\n<!-- #pgevoke-_tpl-lateststories END -->";

// -----  _tpl: storyfeedspinner  -----
PGTPLS["storyfeedspinner"] = "<!-- Storyfeed Spinner -->\n<script type=\"text\/template\" class=\"template\" id=\"pgevoke-_tpl-storyfeedspinner\">\n\t<div class=\"pgevoke-storyfeed-spinner\">\n\t\t<span class=\"pgevoke-storyfeed-spinner-loading\">\n\t\t\t<span class=\"icon icon-spinner2 icon-2x fa fa-spin\" style=\"font-size:20px;font-weight:bold\"><\/span>\n\t\t<\/span>\n\t<\/div>\n<\/script>";

// -----  _tpl: promobox  -----
PGTPLS["promobox"] = "<!-- Promobox -->\n<!-- <script type=\"text\/template\" class=\"template\" id=\"pgevoke-_tpl-promobox\"> -->\n\t<div class=\"pgevoke-promobox\">\n\t\t<div class=\"pgevoke-promobox-title\"><<<=theobj.title>>><\/div>\n\t\t<<< if (theobj.hasimage) { >>>\n\t\t<a class=\"pgevoke-promobox-image\" href=\"<<<=theobj.customFields.hotlink>>>\">\n\t\t\t<img src=\"<<<=theobj.customFields.images[0].url>>>\" alt=\"<<<=theobj.customFields.images[0].caption>>>\">\n\t\t<\/a>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-promobox-text\">\n\t\t\t<<<=theobj.customFields.text>>>\n\t\t<\/div>\n\t<\/div>\n<!-- <\/script> -->";

// -----  _tpl: mostemailed-item  -----
PGTPLS["mostemailed-item"] = "<!-- #pgevoke-_tpl-mostemailed-item BEGINNING -->\n<div class=\"pgevoke-mostemailed-item\">\n\t<a href=\"<<<=theobj.link>>>\" class=\"clearfix\">\n\t\t<span class=\"pgevoke-mostemailed-itemnumber\"><<<=theobj.counter+1>>><\/span>\n\t\t<span class=\"pgevoke-mostemailed-headline\"><<<=theobj.title>>><\/span>\n\t<\/a>\n<\/div>\n<!-- #pgevoke-_tpl-mostemailed-item END -->";

// -----  _tpl: dualatf  -----
PGTPLS["dualatf"] = "<div class=\"pgevoke-dualatf\">\n\t<div class=\"pgevoke-dualatf-colleft\"><\/div>\n\t<div class=\"pgevoke-dualatf-colright\"><\/div>\n<\/div>";

// -----  _tpl: dualatf_featuredpack  -----
PGTPLS["dualatf_featuredpack"] = "<div class=\"pgevoke-dualatf-featured clearfix\">\n\t<div class=\"pgevoke-dualatf-featured-left clearfix\"><\/div>\n\t<div class=\"pgevoke-dualatf-featured-right clearfix\"><\/div>\n<\/div>";

// -----  _tpl: dualatf_featuredpackitem  -----
PGTPLS["dualatf_featuredpackitem"] = "\t<div class=\"pgevoke-dualatf-featured-item pgevoke-dualatf-featured-item-<<<=theobj.counter+1>>> pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix\" data-pg-dualatf-featured-layout=\"<<<=theobj.layout>>>\">\n\t\t<div class=\"pgevoke-dualatf-featured-item-a\">\n\t\t\t<a class=\"pgevoke-dualatf-featured-image\" href=\"<<<=theobj.link>>>\">\n\t\t\t\t\n\t\t\t\t<<< if (theobj.hasSST) { >>>\n\t\t\t\t\t<<< if (theobj.sstcolor === \"green\") { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag pgevoke-sectionbox-specialstorytag-green\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t<<<=theobj.specialstorytag>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-nospecialstorytag\">\n\t\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<<< } >>>\n\t\t\t\t<!--\n\t\t\t\t<div class=\"pgevoke-sectionbox\">\n\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t<\/div>\n\t\t\t\t-->\n\t\t\t\t<<< if (theobj.counter === 0) { >>>\n\t\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"600x_a4-3_cTC\") && PGFNS.getSiteSetting(\"uselibercusimages\") !== true) { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t<<< } else if (typeof theobj.imagelink === \"string\" && theobj.imagelink !== \"\") { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a3-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } else if (theobj.counter > 0) { >>>\n\t\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\") && PGFNS.getSiteSetting(\"uselibercusimages\") !== true) { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t<<< } else if (typeof theobj.imagelink === \"string\" && theobj.imagelink !== \"\") { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<\/a>\n\t\t\t<div class=\"pgevoke-dualatf-featured-text\">\n\t\t\t\t<a class=\"pgevoke-dualatf-featured-text-top\" href=\"<<<=theobj.link>>>\" data-dontmarktrending=\"1\">\n\t\t\t\t\t<!--<div class=\"pgevoke-sectionbox\">\n\t\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t-->\n\t\t\t\t\t<<< if (theobj.hasSST) { >>>\n\t\t\t\t\t\t<<< if (theobj.sstcolor === \"green\") { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag pgevoke-sectionbox-specialstorytag-green\">\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-specialstorytag\">\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<<<=theobj.specialstorytag>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox pgevoke-sectionbox-nospecialstorytag\">\n\t\t\t\t\t\t\t<<<=theobj.sectionboxtext>>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-headline\">\n\t\t\t\t\t\t<<<=theobj.teasertitle>>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/a>\n\t\t\t\t<<< if (theobj.counter === 0) { >>>\n\t\t\t\t\t<<< if (PGVARS.site === \"pg\" && (theobj.usesubtitle || !theobj.hasrelatedlinks) && theobj.subtitle !== \"\") { >>>\n\t\t\t\t\t\t<<< console.log(\"DUALATF SUBTITLE!: \" + theobj.subtitle); >>>\n\t\t\t\t\t\t<a class=\"pgevoke-dualatf-featured-subtitle\" href=\"<<<=theobj.link>>>\"><<<=theobj.subtitle>>><\/a>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<<< if (typeof theobj.relatedlinks !== \"undefined\" && Array.isArray(theobj.relatedlinks) && theobj.relatedlinks.length >= 1) { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-related\">\n\t\t\t\t\t\t\t<<< $.each(theobj.relatedlinks, function(i, relateditem) { >>>\n\t\t\t\t\t\t\t\t<<< if (i <= 1 && typeof relateditem === \"object\" && relateditem !== null) { >>>\n\t\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-dualatf-featured-related-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-dedupe-exclude=\"1\" href=\"<<<=relateditem.url>>>\"><<<=relateditem.title>>><\/a>\n\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<<< }); >>>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<!-- No related links! -->\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\t\t\t\t\t\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>";

// -----  _tpl: dualatf_imagebox  -----
PGTPLS["dualatf_imagebox"] = "<div class=\"pgevoke-dualatf-imagebox\">\n\t<div class=\"pgevoke-headerbar\">\n\t\t<span><<<=theobj.header>>><\/span>\n\t<\/div>\n\t<a class=\"pgevoke-dualatf-imagebox-image\" href=\"<<<=theobj.link>>>\">\n\t\t<img src=\"<<<=theobj.imagelink>>>\">\n\t<\/a>\n\t<div class=\"pgevoke-dualatf-imagebox-caption\"><<<=theobj.caption>>><\/div>\n\t<div class=\"pgevoke-morelink pgevoke-morelink-right clearfix\" style=\"display:block\">\n\t\t<a href=\"<<<=theobj.morelink>>>\"><<<=theobj.moretext>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/a>\n\t<\/div>\n<\/div>";

// -----  _tpl: textpack  -----
PGTPLS["textpack"] = "<<< if (typeof theobj.id === \"string\" && theobj.id !== \"\") { >>>\n\t<div id=\"pgevoke-textpack-<<<=theobj.id>>>\" class=\"pgevoke-textpack\">\n<<< } else { >>>\n\t<div class=\"pgevoke-textpack\">\n<<< } >>>\n\t<<< if (typeof theobj.header === \"string\" && theobj.header !== \"\") { >>>\n\t\t<div class=\"pgevoke-textpack-title\"><<<=theobj.header>>><\/div>\n\t<<< } >>>\n\t\t<div class=\"pgevoke-textpack-storylist\"><\/div>\n\t<<< if (typeof theobj.morelink === \"string\" && theobj.morelink !== \"\") { >>>\n\t\t<div class=\"pgevoke-morelink\">\n\t\t\t<a href=\"<<<=theobj.morelink>>>\">More <<<=theobj.moretext>>>&nbsp;&nbsp;<span class=\"icon icon-arrow-circle-right\"><\/span><\/a>\n\t\t<\/div>\n\t<<< } >>>\n\t<\/div>";

// -----  _tpl: textpackitem  -----
PGTPLS["textpackitem"] = "<div class=\"pgevoke-textpack-item pgevoke-parentsection-<<<=theobj.parentsectionid>>>\" data-pg-textpackitem-layout=\"<<<=theobj.layout>>>\">\n\t<a href=\"<<<=theobj.link>>>\" class=\"clearfix\">\n\t\t<div class=\"pgevoke-textpack-item-image\">\n\t\t\t<!-- <div class=\"pgevoke-sectionbox\">\n\t\t\t\t<l t o :  m a cro name=\"pg.tools.getsectionname\" section=\"<%param1sectionid%>\">\n\t\t\t<\/div>  -->\n\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t\t\t<<< if (PGVARS.site === \"blade\" && theobj.layout.indexOf(\"portrait\") >= 0) { >>>\n\t\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink,'270x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t    \t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\t\t\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< } >>>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-textpack-item-text\">\n\t\t\t<span><<<=theobj.teasertitle>>>&nbsp;<\/span>\n\t\t\t<span class=\"pgevoke-textpack-item-datetime\">\n\t\t\t\t<<<=theobj.timestampshort>>>\n\t\t\t<\/span>\n\t\t<\/div>\n\t<\/a>\n<\/div>\n";

// -----  _tpl: subnav_section  -----
PGTPLS["subnav_section"] = "<div class=\"pgevoke-header-subnav-section pgevoke-parentsection-<<<=theobj.sectionid>>> clearfix\" data-subnav-section=\"<<<=theobj.sectionid>>>\">\n\t<div class=\"pgevoke-header-subnav-closebutton\">\n\t\t<span class=\"icon icon-close\"><\/span>\n\t<\/div>\t\n\t<div class=\"pgevoke-header-subnav-col pgevoke-header-subnav-left\">\n\t\t<div class=\"pgevoke-header-subnav-left-colorbar pgevoke-bgcolor-<<<=theobj.sectionid>>>\"><\/div>\n\t\t<!-- <div class=\"pgevoke-header-subnav-left-colheader\">Latest in <<<=theobj.sectionid>>><\/div> -->\n\t<\/div>\n\t<div class=\"pgevoke-header-subnav-col pgevoke-header-subnav-middle\"><\/div>\n\t<div class=\"pgevoke-header-subnav-col pgevoke-header-subnav-right\">\n\t\t<div class=\"pgevoke-header-subnav-right-1 col-xs-6\"><\/div>\n\t\t<div class=\"pgevoke-header-subnav-right-2 col-xs-6\"><\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: subnav_section_storyitem  -----
PGTPLS["subnav_section_storyitem"] = "<div class=\"subitemslistlinks\">\n\t<a href=\"<<<=theobj.link>>>\"><<<=theobj.teasertitle>>><\/a>\n<\/div>";

// -----  _tpl: subnav_section_centeritem  -----
PGTPLS["subnav_section_centeritem"] = "<div class=\"subitemsmainlink\" data-pg-subnav-layout=\"<<<=theobj.layout>>>\">\n\t<div id=\"image-thumb\">\n\t\t<div style=\"margin: 0 auto;\">\n\t\t\t<a href=\"<<<=theobj.link>>>\">\n\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t<<< if (typeof theobj.imagelink === \"string\" && theobj.imagelink !== \"\" && PGVARS.site === \"blade\") { >>>\n\t\t\t\t\t\t<<< if (theobj.layout.indexOf(\"portrait\") >= 0) { >>>\n\t\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '400x_a4-5_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t\t<img src=\"<<<=PGFNS.formatImage(theobj.imagelink, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" \/>\n\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t<<< } else if (PGLIB.all.cdnimages.hasSize(theobj, \"600x_a4-3_cTC\")) { >>>\n\t\t\t\t\t\t<img src=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '600x_a4-3_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\">\n\t\t\t\t\t<<< } else if (typeof theobj.customimage === \"string\") { >>>\n\t\t\t\t\t\t<img src=\"<<<=theobj.customimage>>>\">\n\t\t\t\t\t<<< } else { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t<\/div>\n\t<\/div><!--image-thumb ends-->\t\n\t<a class=\"sublinks\" href=\"<<<=theobj.link>>>\"><<<=theobj.title>>><\/a>\n<\/div>\n";

// -----  _tpl: subnav_section_sectionitem  -----
PGTPLS["subnav_section_sectionitem"] = "<div class=\"subitemslistlinks\">\n\t<a href=\"<<<=theobj.link>>>\"><<<=theobj.label>>><\/a> \n<\/div>";

// -----  _tpl: infinitestorylist  -----
PGTPLS["infinitestorylist"] = "<div class=\"pgevoke-infinitestorylist-wrapper\">\n\t<<< if (typeof theobj.header === \"string\") { >>>\n\t<div class=\"pgevoke-headerbar\">\n\t\t<span class=\"icon icon-clock-o\" style=\"top:1px; color:red\"><\/span>\n\t\t<span class=\"pgevoke-infinitestorylist-headerbar-text\"><<<=theobj.header>>><\/span>\n\t<\/div>\n\t<<< } >>>\n\t<div class=\"pgevoke-infinitestorylist\"><\/div>\n<\/div>";

// -----  _tpl: static  -----
PGTPLS["static"] = "<!-- #pgevoke-_tpl-section -->\n<div class=\"pgevoke-static\">\n\t<<< if (PGVARS.site === \"pg\" || PGVARS.site === \"blade\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t<<< } >>>\t\n\t<div class=\"pgevoke-topads\">\n\t\t<div class=\"pgevoke-topads-row\">\n\t\t\t<div class=\"pgevoke-topads-banner\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP\", adsection: theobj.adsection})>>>\n\t\t\t\t<!-- lto:macro name=\"pg.ads.adspot_new\" position=\"Top\" customadsection=\"<%@sectionseolabel%>\"> -->\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-topads-top3 hidden-sm hidden-xs\">\n\t\t\t<div id=\"dfp-pencil-expander\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP3\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<!-- <lto:macro name=\"pg.ads.top3-pencil-expander\"> -->\n\t\t<\/div>\t\t\n\t<\/div>\n\t<div class=\"pgevoke-static-row\">\t\n\t\t<div class=\"pgevoke-grid-area-main\">\n\t\t\t<div class=\"pgevoke-contentarea clearfix\">\n\t\t\t\t<div class=\"pgevoke-contentarea-socialbuttons-wrapper\">\n\t\t\t\t\t<div class=\"pgevoke-contentarea-socialbuttons\" data-stickybox-id=\"pgevoke-socialbuttons\">\n\t\t\t\t\t\t<!-- pgevoke._tpls_story_socialshare -->\n<<< if ((PGVARS.site === \"pg\" && PGVARS.pgnewcomments)) { >>>\n<!--\n<div class=\"pgevoke-contentarea-socialbuttons-comments\">\n\t<a href=\"javascript: void(0);\" alt=\"Show comments\">\n\t\t<span class=\"pgevoke-story-commentscount\"><\/span>\n\t\t<span class=\"icon icon-comment\"><\/span>\n\t<\/a>\n<\/div>\n-->\n<<< } >>>\n<div class=\"pgevoke-contentarea-socialbuttons-facebook\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/facebook.com\/sharer.php?u=<<<=theobj.linkhttps>>>','','width=500,height=500');\">\n\t\t<span class=\"icon icon-facebook\"><\/span>\n\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-twitter\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/twitter.com\/intent\/tweet?url=<<<=theobj.linkhttps>>>&amp;text=<<<=theobj.encodedtitle>>>&amp;via=<<<=PGVARS.twitterid>>>','','width=500,height=500')  \">\n\t\t\t<span  class=\"icon icon-x-twitter\"><\/span>\n\t\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-reddit\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('\/\/www.reddit.com\/submit?url=<<<=theobj.linkhttps>>>','','width=500,height=500')\">\n\t\t<span  class=\"icon icon-reddit-alien\"><\/span>\n\t<\/a>\n<\/div>\n<<< if (1 == 2 && PGVARS.site === \"blade\") { \/\/ Off for now >>>\n<div class=\"pgevoke-contentarea-socialbuttons-linkedin\">\n\t<a href=\"javascript: void(0)\" onclick=\"window.open('https:\/\/www.linkedin.com\/sharing\/share-offsite\/?url=<<<=theobj.linkhttps>>>','','width=500,height=500')\">\n\t\t<span  class=\"icon icon-linkedin1\"><\/span>\n\t<\/a>\n<\/div>\n<<< } >>>\n<div class=\"pgevoke-contentarea-socialbuttons-email\">\n\t<a href=\"javascript:void(0);\" id=\"tipafriend\" alt=\"Email\">\n\t\t<span class=\"icon icon-envelope\"><\/span>\n\t<\/a>\n<\/div>\n<div class=\"pgevoke-contentarea-socialbuttons-print\">\n\t<a href=\"javascript: void(0);\" alt=\"Print\">\n\t<!-- <a href=\"<<<=theobj.link>>>.print\" target=\"_blank\"> -->\n\t\t<span class=\"icon icon-print\"><\/span>\n\t<\/a>\n<\/div>\n<<< if ((PGVARS.site === \"blade\" && PGVARS.useviafoura) || PGVARS.pgnewcomments) { >>>\n<div class=\"pgevoke-contentarea-socialbuttons-comments\">\n\t<a href=\"javascript: void(0);\" alt=\"Show comments\">\n\t<!-- <a href=\"<<<=theobj.link>>>.print\" target=\"_blank\"> -->\n\t\t<span class=\"pgevoke-story-commentscount\"><\/span>\n\t\t<span class=\"icon icon-comment\"><\/span>\n\t<\/a>\n<\/div>\n<<< } >>>\n<!-- OLD: onclick=\"window.open('<<<=PGFNS.getLiberLink(theobj.linkhttps)>>>.print','','width=500,height=500')\" -->\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-contentarea-body\">\n\t\t\t\t\t<div class=\"pgevoke-contentarea-body-inner\">\n\t\t\t\t\t\t<div class=\"pgevoke-contentarea-body-text\">\n\t\t\t\t\t\t\t<h1 class=\"pgevoke-static-pagetitle\"><<<=theobj.title>>><\/h1>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t\t<!--\n\t\t\t<div class=\"pgevoke-loadingspinner\">\n\t\t\t\t<div class=\"pg-loading\"><\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-static-content\"><\/div>\n\t\t\t-->\n\t\t<\/div>\n\t\t<div class=\"pgevoke-grid-area-side\">\n\t\t\t<div class=\"pgevoke-static-rightrail pg-hidden-mobile\">\n\t\t\t\t<div class=\"pgevoke-static-rightrail-ad1 mb25 pg-hidden-mobile\">\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>> \n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t\t\t\t<div class=\"pgevoke-apwidget\"><\/div>\n\t\t\t\t<div class=\"pgevoke-rightrail-stickybox-top\" data-stickybox-id=\"pgevoke-rightrail-stickybox-top\">\n\t\t\t\t\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>> \n\t\t\t\t\t<\/div>\n\t\t\t\t\t<div class=\"pgevoke-rightrail-login pgevoke-railfooter-accountbuttons mb20 pg-hidden-mobile\">\n\t\t\t\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-rightrail-stickybox-bottom\" data-stickybox-id=\"pgevoke-rightrail-stickybox-bottom\">\n\t\t\t\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: emailsharepopup  -----
PGTPLS["emailsharepopup"] = "<div id=\"tipformwrapper\" title=\"Email a Story\" style=\"display:none;\">\n\t<form id=\"tipform\" method=\"POST\" action=\"\/\" class=\"libAjaxDialogAllowClose\" onsubmit=\"return false\">\n\t<input type=\"hidden\" name=\"securedata\" value=\"\">\n\t<input type=\"hidden\" name=\"url\" value=\"\">\n\t<input type=\"hidden\" name=\"title\" value=\"\">\n\t<div class=\"table\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"cell\">\n\t\t\t\t<label for=\"emailfrom\">Your e-mail:<\/label>\n\t\t\t<\/div>\n\t\t\t<div class=\"cell\">\n\t\t\t\t<input type=\"text\" size=\"25\" class=\"required email\" name=\"emailfrom\" required=\"true\" email><br>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"cell\">\n\t\t\t\t<label for=\"emailto\">Friends e-mail:<\/label>\n\t\t\t<\/div>\n\t\t\t<div class=\"cell\">\n\t\t\t\t<input type=\"text\" size=\"25\" class=\"required email\" name=\"emailto\" required=\"true\" email><br>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<!--\n\t\t<div class=\"row\">\n\t\t\t<div class=\"cell\">\n\t\t\t<\/div>\n\t\t\t<div class=\"cell\">\n\t\t\t\t<img id=\"libAjaxCaptchaImage\" src=\"\/image\/captcha\">\n\t\t\t<\/div>\n\t\t<\/div\n\t\t<div class=\"row\">\n\t\t\t<div class=\"cell\">\n\t\t\t\t<input type=\"text\" name=\"captcha\" size=\"25\" id=\"libAjaxCaptchaField\" class=\"libAjaxInput libAjaxValidate libAjaxNotBlank\"><br>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t-->\n\t<\/div>\n\t<!--\n\tThis button is used for the non-AJAX submit function.\n\t<input id=\"normalsend\" class=\"libAjaxSaveButton\" type=\"submit\">  \n\t-->\n\t<div class=\"textright\">\n\t\t<div id='recaptcha' class=\"g-recaptcha\"\n\t\t  data-sitekey=\"6Le5BBkUAAAAAPUMo4bVshF1cTOR4bgOfr1lgsUr\"\n\t\t  data-callback=\"pgEmailShareSubmit\"\n\t\t  data-size=\"invisible\"><\/div>\n\t      <button id='emailSubmit'>Submit<\/button>\n\t<\/div>\n\t<\/form>\t\n<\/div>";

// -----  _tpl: genericrightrail  -----
PGTPLS["genericrightrail"] = "<div class=\"pgevoke-rightrail\">\n\t<div class=\"pg-hidden-mobile\" style=\"margin-bottom:15px\">\n\t\t<<<=DFPADS.getAdSlotString({position:\"MIDDLE\", adsection: theobj.adsection})>>>\n\t<\/div>\n\t<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t<!-- <div class=\"pgevoke-apwidget\"><\/div> -->\n\t<div class=\"pgevoke-rightrail-stickybox-top\" data-stickybox-id=\"pgevoke-rightrail-stickybox-top\">\n\t\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>> \n\t\t<\/div>\n\t\t<div class=\"pgevoke-rightrail-login pgevoke-railfooter-accountbuttons mb20 pg-hidden-mobile\">\n\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-rightrail-stickybox-bottom pg-hidden-mobile\" data-stickybox-id=\"pgevoke-rightrail-stickybox-bottom\">\n\t\t<!-- pgevoke._tpl-parts.rail_footer_blade -->\n<div class=\"pgevoke-railfooter-topmarker\"><\/div>\n<div class=\"pgevoke-railfooter\">\n\t<div class=\"pgevoke-railfooter-skyline\">\n\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgthemes\/evoke\/blade-footer-skyline.png\" alt=\"Pittsburgh skyline silhouette\">\n\t<\/div>\n\t<div class=\"pgevoke-railfooter-main\">\n\t\t<div class=\"pgevoke-railfooter-menu clearfix\">\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-1\">\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/www.thebladevault.com\/\">Archives<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"http:\/\/www.blademediakit.com\/advertise\/\">Advertising<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Email Newsletter<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/contact\">Contact Us<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/sitemap\">Site Map<\/a><\/li>\n\t\t\t\t\t\n\t\t\t\t\t<!-- <li><a href=\"#1\">Subscriber Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/abouttheblade\">About Us<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-railfooter-menu-col pgevoke-railfooter-menu-col-2\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"http:\/\/eblade.toledoblade.com\/\">eBlade<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/rsslinks\">RSS Feeds<\/a><\/li>\n\t\t\t\t\t<!-- <li><a href=\"#1\">Corrections<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"https:\/\/isd-chatterbox.com\/tole\/TransactionType.asp\">Help<\/a><\/li> -->\n\t\t\t\t\t<!-- <li><a href=\"#1\">Products &amp; Services<\/a><\/li> -->\n\t\t\t\t\t<li><a href=\"\/visitoragreement\">Terms of Use<\/a><\/li>\n\t\t\t\t\t<li><a href=\"\/privacy\">Privacy Policy<\/a><\/li>\n\t\t\t\t<\/ul>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-railfooter-copyright\">\n\t\t\tTOLEDO BLADE<br>\n\t\t\t<<< var pgfooterdate=new Date(); var pgfooteryear=pgfooterdate.getFullYear(); >>>\n\t\t\tCopyright &copy; 1997-<<<=pgfooteryear>>> Toledo Blade Co. All rights reserved\n\t\t<\/div>\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-railfooter-bottommarker\"><\/div>\t<\/div>\n<\/div>";

// -----  _tpl: bigstory  -----
PGTPLS["bigstory"] = "<div class=\"pgevoke-bigstory clearfix\">\n\t<a class=\"pgevoke-bigstory-image\" href=\"<<<=theobj.mainlink>>>\">\n\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t<img src=\"<<<=theobj.imagelink>>>\" alt=\"<<<=theobj.imagecaption>>>\"\/>\n\t\t<<< } else { >>>\n\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t<<< } >>>\n\t<\/a>\n\t<<< if (PGVARS.site === \"pg\") { >>>\n\t<div class=\"pgevoke-electionbanner\">\n\t\t<!--\n\t\t<div class=\"pgevoke-electionbanner-inner\">\n\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pg\/misc\/election2020-narrow-banner.jpg\">\n\t\t<\/div>\n\t\t-->\n\t<\/div>\n<<< } >>>\t<div class=\"pgevoke-bigstory-text\">\n\t\t<a class=\"pgevoke-bigstory-text-top\" href=\"<<<=theobj.mainlink>>>\">\n\t\t\t<!--\n\t\t\t<div class=\"pgevoke-sectionbox\">\n\t\t\t\t<l t o  :macro name=\"pg.tools.getsectionname\" section=\"<%param1sectionid%>\">\n\t\t\t<\/div>\n\t\t\t-->\n\t\t\t<div class=\"pgevoke-bigstory-tagline\">\n\t\t\t\t<span><<<=theobj.kicker>>><\/span>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-bigstory-headline\">\n\t\t\t\t<<<=theobj.headline>>>\n\t\t\t<\/div>\n\t\t<\/a>\n\t\t<<< if (theobj.relateditem1headline !== \"\" && theobj.relateditem1link !== \"\") { >>>\n\t\t\t<div class=\"pgevoke-bigstory-related clearfix\">\n\t\t\t\t\t<div class=\"pgevoke-bigstory-related-item\">\n\t\t\t\t\t\t<a data-dedupe-exclude=\"1\" href=\"<<<=theobj.relateditem1link>>>\"><<<=theobj.relateditem1headline>>><\/a>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< if (theobj.relateditem2headline !== \"\" && theobj.relateditem2link !== \"\") { >>>\n\t\t\t\t\t\t<div class=\"pgevoke-bigstory-related-item\">\n\t\t\t\t\t\t\t<a data-dedupe-exclude=\"1\" href=\"<<<=theobj.relateditem2link>>>\"><<<=theobj.relateditem2headline>>><\/a>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } >>>\n\t\t<<< } else if (theobj.subhead !== \"\") { >>>\n\t\t\t<div class=\"pgevoke-bigstory-subhead clearfix\">\n\t\t\t\t<<<=theobj.subhead>>>\n\t\t\t<\/div>\n\t\t<<< } else { >>>\n\t\t\t<!-- No related links or subhead! -->\n\t\t<<< } >>>\n\t<\/div>\n<\/div>";

// -----  _tpl: videopage_sidebaritem  -----
PGTPLS["videopage_sidebaritem"] = "<a href=\"<<<=theobj.videolink>>>\" class=\"pgvideopage-recentvideo clearfix\" style=\"margin-top:20px\">\n\t<div class=\"pgvideopage-recentvideo-imagewrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<img src=\"<<<=theobj.videoimagelink>>>\">\n\t\t\t<div class=\"pgvideopage-recentvideo-duration\"><<<=theobj.videoduration>>><\/div>\n\t\t\t<div class=\"pgevoke-videowatermark\">\n\t\t\t\t<span class=\"icon icon-play-circle\"><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgvideopage-recentvideo-text\"><<<=theobj.videotitle>>><\/div>\n<\/a>";

// -----  _tpl: pwdrawer  -----
PGTPLS["pwdrawer"] = "<div id=\"pg-pwdrawer\">\n\t<div id=\"pg-pwdrawer-panel-collapsed\">\n\t\t<div id=\"pg-pwdrawer-panel-collapsed-content\">You have 2 free articles remaining<\/div>\n\t\t<div class=\"pg-pwdrawer-panel-button\">SEE ALL OPTIONS<\/div>\n\t<\/div>\n\t<div id=\"pg-pwdrawer-panel-expanded\">\n\t\t<div id=\"pg-pwdrawer-panel-expanded-content\">\n\t\t\t<div id=\"pg-pwdrawer-panel-expanded-content\">\n\t\t\t\t<div>This is the expanded drawer<\/div>\n\t\t\t\t<div>Subscribe now for full unlimited digital access<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pg-pwdrawer-panel-button\">COLLAPSE<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: bpartnersbig  -----
PGTPLS["bpartnersbig"] = "<div class=\"pgevoke-bpartnersbig-bg\"><img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'800x_a2-1_cTC')>>>\" class=\"pg-lazyload\"><\/div>\n<div class=\"pgevoke-headerbar\"><span><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/evoke\/blade-logo-b-transparentbg-100px.png\"><\/span> Partners<\/div>\n<a class=\"pgevoke-bpartnersbig-item pgevoke-parentsection-<<<=theobj.parentsectionid>>> clearfix<<<=theobj.specialclasses>>>\" href=\"<<<=theobj.link>>>\" data-pg-bpartnersbig-layout=\"<<<=theobj.layout>>>\">\n\t<div class=\"pgevoke-bpartnersbig-image-wrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (PGFNS.getSiteSetting(\"uselibercusimages\") === true) { >>>\n\t\t\t\t<<< if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } else { >>>\n\t\t\t\t<<< if (PGLIB.all.cdnimages.hasSize(theobj, \"300x_a1-1_cTC\")) { >>>\n\t\t\t\t\t<img data-original=\"<<<=PGLIB.all.cdnimages.getLink(theobj, '300x_a1-1_cTC')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else if (theobj.imagelink !== \"\") { >>>\n\t\t\t\t    <img data-original=\"<<<=PGFNS.formatImage(theobj.imagelink,'300x_a1-1_cTC_q80')>>>\" alt=\"<<<=theobj.imagecaption>>>\" class=\"pg-lazyload\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t\t<<< } >>>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-sectionbox\">SPONSORED<\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-bpartnersbig-text\">\n\t\t<div class=\"pgevoke-bpartnersbig-headline\"><<<=theobj.teasertitle>>><\/div>\n\t\t<div class=\"pgevoke-bpartnersbig-byline\">\n\t\t\t<!--\n\t\t\t<span class=\"pgevoke-bpartnersbig-pubdate\">\n\t\t\t\t<span class=\"fa fa-clock-o\"><\/span> <<<=theobj.pubdateformatted>>>\n\t\t\t<\/span>\n\t\t\t-->\n\t\t\t<span class=\"pgevoke-bpartnersbig-author\">\n\t\t\t\t<span class=\"fa fa-user\"><\/span> <<<=theobj.byline>>>\n\t\t\t<\/span>\n\t\t<\/div>\n\t<\/div>\n<\/a>\n<!-- <\/script> -->";

// -----  _tpl: bpartnersbignativo  -----
PGTPLS["bpartnersbignativo"] = "<div class=\"pgevoke-bpartnersbig-bg\" data-nativo=\"frontpage-2-bgimage\"><img><\/div> <!-- 800x 2:1 -->\n<div class=\"pgevoke-headerbar\"><span><img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/evoke\/blade-logo-b-transparentbg-100px.png\"><\/span> Partners<\/div>\n<a class=\"pgevoke-bpartnersbig-item\" data-nativo=\"frontpage-2-link\"> <!-- 800x 2:1 -->\n\t<div class=\"pgevoke-bpartnersbig-image-wrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<img data-nativo=\"frontpage-2-image\"> <!-- 300x 1:1 CTC -->\n\t\t\t<div class=\"pgevoke-sectionbox\">SPONSORED<\/div>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-bpartnersbig-text\">\n\t\t<div class=\"pgevoke-bpartnersbig-headline\" data-nativo=\"frontpage-2-headline\">&nbsp;<\/div>\n\t\t<div class=\"pgevoke-bpartnersbig-byline\">\n\t\t\t<span class=\"pgevoke-bpartnersbig-author\">\n\t\t\t\t<span class=\"fa fa-user\"><\/span>&nbsp;<span data-nativo=\"frontpage-2-byline\"><!-- byline --><\/span>\n\t\t\t<\/span>\n\t\t<\/div>\n\t<\/div>\n<\/a>";

// -----  _tpl: notifybox  -----
PGTPLS["notifybox"] = "<div class=\"pg-notifybox\">\n\t<div class=\"pg-notifybox-toparea clearfix\">\n\t\t<div class=\"pg-notifybox-img\">\n\t\t\t<img src=\"<<<=theobj.image>>>\">\n\t\t<\/div>\n\t\t<div class=\"pg-notifybox-text\">\n\t\t\t<<<=theobj.text>>>\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pg-notifybox-buttons\">\n\t\t<div class=\"pg-notifybox-button-deny\"><<<=theobj.buttondeny>>><\/div>\n\t\t<div class=\"pg-notifybox-button-allow\"><<<=theobj.buttonallow>>><\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: newspack-pluswrapper-nativo  -----
PGTPLS["newspack-pluswrapper-nativo"] = "<<< if (PGVARS.site === \"blade\") { >>>\n\t<<< if (PGVARS.requesttype === \"FRONTPAGE\") { >>>\n\t\t<<< console.log(\"NATIVO FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } else { >>>\n\t\t<<< console.log(\"NATIVO NOT FP: \", PGVARS.requesttype); >>>\n\t<div class=\"pgevoke-grid-row pgevoke-bpartners-nativo_newspack\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n\t<<< } >>>\n\t<!-- test -->\n<<< } else { >>>\n<div class=\"pgevoke-grid-row\" data-nativo=\"<<<=theobj.nativonamespace>>>\">\n<<< } >>>\n\t<div class=\"pgevoke-mustbox pgevoke-newspack-pluswrapper clearfix\">\n\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<div class=\"pgevoke-headerbar pgevoke-headerbar-bpartners\">\n\t\t\t<span><span class=\"pgevoke-headerbar-bpartners-blogo\"><\/span> Partners<\/span>\n\t\t<\/div>\t\t\t\t\n\t\t<<< } else { >>>\n\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t<span>From Our Sponsors<\/span>\n\t\t<\/div>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-newspack\">\n\t\t\t<!-- Sponsored Link 1 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link1\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 2 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link2\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t\t<!-- Sponsored Link 3 -->\n\t\t\t<a class=\"pgevoke-newspack-item pgevoke-parentsection-sponsored clearfix\" href=\"\" data-bucket=\"nativo-<<<=theobj.nativonamespace>>>\" data-nativo=\"<<<=theobj.nativonamespace>>>-link3\">\n\t\t\t\t<div class=\"pgevoke-newspack-imagewrapper\">\n\t\t\t\t\t<div class=\"pgevoke-image\">\n\t\t\t\t\t\t<img src=\"\" alt=\"\">\n\t\t\t\t\t\t<div class=\"pgevoke-sectionbox\">Sponsored<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-newspack-text\">\n\t\t\t\t\t<div class=\"pgevoke-newspack-headline\">\n\t\t\t\t\t\t<span><!-- Headline Here --><\/span>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/a>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: page-rightrail  -----
PGTPLS["page-rightrail"] = "<div class=\"pgevoke-page-rightrail pg-hidden-mobile\">\n\t<div class=\"pgevoke-page-rightrail-ad1 mb25 pg-hidden-mobile\">\n\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE\", adsection: theobj.adsection})>>> \n\t<\/div>\n\t<div class=\"pgevoke-civicscience\">\n\t<div id=\"benn-poll-iframe-container\"><\/div>\n<\/div>\t<div class=\"pgevoke-apwidget\"><\/div>\n\t<div class=\"pgevoke-rightrail-stickybox-top\" data-stickybox-id=\"pgevoke-rightrail-stickybox-top\">\n\t\t<div class=\"mb25 pg-hidden-mobile\">\n\t\t\t<<<=DFPADS.getAdSlotString({position: \"MIDDLE2\", adsection: theobj.adsection})>>> \n\t\t<\/div>\n\t\t<div class=\"pgevoke-rightrail-login pgevoke-railfooter-accountbuttons mb20 pg-hidden-mobile\">\n\t\t\t<!-- pgevoke._tpl-parts.rail_login -->\n<div data-demoname=\"register_or_login\">\n    <div class=\"tw-bs\" style=\"margin:0 auto 15px;background-color:#eee;border:1px solid #d3d3d3;padding:15px\">\n        <div class=\"stickyright-loggedoutuserbuttons\">\n            <!-- Create account button - Only shown if not logged in -->\n            <div style=\"margin-bottom: 1em;\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Create a free Blade account.<\/div>\n                <button type=\"button\" class=\"stickyboxright-register btn btn-primary gigyaRegisterBtn\" style=\"width:100%;font-size:20px\">Register - FREE<\/button>\n            <\/div>\n            <!-- Login button - Only shown if not logged in -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Already have an account?<\/div>\n                <button type=\"button\" class=\"stickyboxright-login btn btn-primary gigyaLoginBtn\" style=\"width:100%;font-size:20px\">Login<\/button>\n            <\/div>\n        <\/div>\n        <!-- Shown only to logged in users -->\n        <div class=\"stickyright-loggedinuserbuttons\" style=\"display:none\">\n            <!-- Shown only to logged in non-subscribers -->\n            <div class=\"stickyright-subscribe-wrapper\" style=\"margin-bottom:1em;display:none\">\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center\">Subscribe to The Blade<\/div>\n                <a class=\"btn btn-primary stickyboxright-subscribe\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/purchase\/?utm_source=Internal-Aud&amp;utm_medium=Nav%20Button&amp;utm_campaign=Sticky-subscribe\">Subscribe<\/a>\n            <\/div>\n            <!-- Email preferences button -->\n            <div>\n                <div style=\"font-family:Arial,sans-serif;font-size:18px;font-weight:bold;margin-bottom:5px;text-align:center;line-height:1.15em\">Customize your free Newsletter Preferences<\/div>\n                <a class=\"stickyright-emailprefs btn btn-primary\" style=\"width:100%;font-size:20px\" href=\"https:\/\/my.toledoblade.com\/profile\/#preferences\">Email Preferences<\/a>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div> <!-- .register_or_login -->\t\t<\/div>\n\t<\/div>\n\t<!-- test\n\t<div class=\"pgevoke-rightrail-stickybox-bottom\" data-stickybox-id=\"pgevoke-rightrail-stickybox-bottom\">\n\t\t  include_underscore_tpl_part(\"pgevoke._tpl-parts.rail_footer.php\");  \n\t<\/div>\n\t-->\n<\/div>";

// -----  _tpl: storyfeed-search-results  -----
PGTPLS["storyfeed-search-results"] = "<!-- Storyfeed Search Results -->\n<a class=\"pgevoke-storyfeed-item clearfix\" href=\"<<<=theobj.link>>>\">\n\t<div class=\"pgevoke-storyfeed-image-wrapper\">\n\t\t<div class=\"pgevoke-image\">\n\t\t\t<<< if (theobj.imagelink !== \"\" && theobj.imagelink !== \"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/blade\/evoke\/blade-logo-b-lg.png\") { >>>\n\t\t\t    <img src=\"<<<=theobj.imagelink>>>\">\n\t\t\t<<< } else { >>>\n\t\t\t\t<div class=\"pgevoke-imageplaceholder\"><\/div>\n\t\t\t<<< } >>>\n\t\t\t<!-- <div class=\"pgevoke-storyfeed-image-cornerbox\"> <<<=theobj.timestampshort>>><\/div> -->\n\t\t\t<!-- <div class=\"pgevoke-sectionbox\"><<<=theobj.sectionboxtext>>><\/div> -->\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-storyfeed-text\">\n\t\t<div class=\"pgevoke-storyfeed-headline\"><<<=theobj.title>>><\/div>\n\t\t<!-- \n\t\t<div class=\"pgevoke-storyfeed-byline\">\n\t\t\t<span class=\"pgevoke-storyfeed-pubdate\">\n\t\t\t\t<span class=\"fa fa-clock-o\"><\/span> <<<=theobj.timestamp>>>\n\t\t\t<\/span>\n\t\t\t<span class=\"pgevoke-storyfeed-author\">\n\t\t\t\t<span class=\"fa fa-user\"><\/span> <<<=theobj.byline>>>\n\t\t\t<\/span>\n\t\t<\/div>\n\t\t-->\n\t\t<div class=\"pgevoke-storyfeed-snippet\"><<<=theobj.snippet>>><\/div>\n\t<\/div>\n<\/a>\n<!-- <\/script> -->";

// -----  _tpl: authorfollowvf  -----
PGTPLS["authorfollowvf"] = "<div class=\"pgevoke-story-authorfollow\">\n\t<div class=\"pgevoke-story-authorfollow-headshot\">\n\t\t<img src=\"<<<=theobj.imageurl>>>\">\n\t<\/div>\n\t<div class=\"pgevoke-story-authorfollow-content\">\n\t\t<div class=\"pgevoke-story-authorfollow-authorname\"><<<=theobj.authorname>>><\/div>\n\t\t<div class=\"pgevoke-story-authorfollow-authortext\">Follow to receive notifications any time <<<=theobj.authorname>>> publishes a new story<\/div>\n\t\t<div class=\"pgevoke-story-authorfollow-followlink\">\n\t\t\t<div class=\"viafoura\">\n\t\t\t\t<vf-topic-follow topic-id=\"<<<=theobj.authorslug>>>\" topic-name=\"<<<=theobj.authorname>>>\" topic-type=\"topic\" show-count=\"true\" minimum-count=\"0\"><\/vf-topic-follow><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: authorfollowpg  -----
PGTPLS["authorfollowpg"] = "<div class=\"pgevoke-story-authorfollow clearfix\">\n\t<div class=\"pgevoke-story-authorfollow-headshot\">\n\t\t<img src=\"<<<=theobj.imageurl>>>\">\n\t<\/div>\n\t<div class=\"pgevoke-story-authorfollow-content\">\n\t\t<<< if (PGVARS.site === \"blade\") { >>>\n\t\t<div class=\"pgevoke-story-authorfollow-authorname\"><<<=theobj.authorname>>><\/div>\n\t\t<<< } >>>\n\t\t<div class=\"pgevoke-story-authorfollow-authortext\"><<<=theobj.authortext>>><\/div>\n\t\t<div class=\"pgevoke-story-authorfollow-authorcontact clearfix\" id=\"pgevoke-story-authorfollow-authorcontact-1\">\n\t\t\t<<<=theobj.authorcontact>>>\n\t\t<\/div>\n\t\t<!-- Test -->\n\t\t<!-- <div class=\"pgevoke-story-authorfollow-followlink\">\n\t\t\t<div class=\"viafoura\">\n\t\t\t\t<vf-topic-follow topic-id=\"<<<=theobj.authorslug>>>\" topic-name=\"<<<=theobj.authorname>>>\" topic-type=\"topic\" show-count=\"true\" minimum-count=\"0\"><\/vf-topic-follow><\/div>\n\t\t\t<\/div>\n\t\t<\/div> -->\n\t<\/div>\n<\/div>\n<div class=\"pgevoke-story-authorfollow-authorcontact clearfix\" id=\"pgevoke-story-authorfollow-authorcontact-2\">\n\t<<<=theobj.authorcontact>>>\n<\/div>";

// -----  _tpl: authorfollowTEST2  -----
PGTPLS["authorfollowTEST2"] = "<div class=\"pgevoke-story-authorfollow\">\n\t<div class=\"pgevoke-story-authorfollow-headshot\">\n\t\t<img src=\"<<<=theobj.imageurl>>>\">\n\t<\/div>\n\t<div class=\"pgevoke-story-authorfollow-content\">\n\t\t<div class=\"pgevoke-story-authorfollow-authorname\"><<<=theobj.authorname>>><\/div>\n\t\t<div class=\"pgevoke-story-authorfollow-authortext\">Follow to receive notifications any time <<<=theobj.authorname>>> publishes a new story<\/div>\n\t\t<div class=\"pgevoke-story-authorfollow-followlink\">\n\t\t\t<div class=\"viafoura\">\n\t\t\t\t<vf-topic-follow topic-id=\"<<<=theobj.authorslug>>>\" topic-name=\"<<<=theobj.authorname>>>\" topic-type=\"topic\" show-count=\"true\" minimum-count=\"0\"><\/vf-topic-follow><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: tag  -----
PGTPLS["tag"] = "<!-- #pgevoke-_tpl-tag v20220908_1452 -->\n<div class=\"pgevoke-tag\">\n\t<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- topnotice BEGIN -->\n<<< if (PGVARS.site === \"pg\") { >>>\n\t\t<!-- <div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"https:\/\/newsinteractive.post-gazette.com\/coronavirus\/\" style=\"font-weight:bold\">COVID-19: Click to view our complete coverage, updates on the pandemic<\/a><\/div> -->\n<<< } else if (PGVARS.site === \"blade\" && PGVARS.requesttype !== \"STATIC\") { >>>\n\t\t<!--\n\t\t<div class=\"pgevoke-topnotice\" style=\"text-align:center; text-decoration: underline\"><a href=\"#\" style=\"font-weight:bold\"><\/a><\/div>\n\t\t-->\n\t\t<<< if (PGVARS.requesttype === \"FRONTPAGE\" && theobj.breakingnewsbannershow) { >>>\n\t\t\t<div class=\"pgevoke-breakingnewsbanner\">\n\t\t\t\t<<< if (theobj.breakingnewsbannerlink.trim() !== \"\") { >>>\n\t\t\t\t<a href=\"<<<=theobj.breakingnewsbannerlink>>>\">\n\t\t\t\t<<< } else { >>>\n\t\t\t\t<a>\n\t\t\t\t<<< } >>>\n\t\t\t\t\t<span class=\"pgevoke-breakingnewsbanner-kicker\"><<<=theobj.breakingnewsbannerkicker>>>:<\/span> <span><<<=theobj.breakingnewsbannertext>>><\/span>\n\t\t\t\t<\/a>\n\t\t\t<\/div>\n\t\t<<< } >>>\n<<< } >>>\n\n<!-- topnotice END -->\t<<< } >>>\n\t<div class=\"pgevoke-topads\">\n\t\t<div class=\"pgevoke-topads-row\">\n\t\t\t<div class=\"pgevoke-topads-banner\">\n\t\t\t\t<<< if (theobj.adsection === \"adtest\") { >>>\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP1\", adsection: theobj.adsection})>>>\n\t\t\t\t<<< } else { >>>\n\t\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP\", adsection: theobj.adsection})>>>\n\t\t\t\t<<< } >>>\n\t\t\t\t<!-- lto:macro name=\"pg.ads.adspot_new\" position=\"Top\" customadsection=\"<%@sectionseolabel%>\"> -->\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-topads-top3 hidden-sm hidden-xs\">\n\t\t\t<div id=\"dfp-pencil-expander\">\n\t\t\t\t<<<=DFPADS.getAdSlotString({position: \"TOP3\", adsection: theobj.adsection})>>>\n\t\t\t<\/div>\n\t\t\t<!-- <lto:macro name=\"pg.ads.top3-pencil-expander\"> -->\n\t\t<\/div>\n\t<\/div>\n\t<div class=\"pgevoke-tag-row\">\t\n\t\t<div class=\"pgevoke-grid-area-main\">\n\t\t\t<div class=\"pgevoke-subsectionheader\"><\/div>\n\t\t\t<div class=\"pgevoke-subsectionmenu\"><\/div>\n\t\t\t<<< if (PGVARS.site !== \"pg\" || (PGVARS.sectionpath !== \"life\/goodness\" && PGVARS.sectionpath !== \"news\/health\")) { >>>\n\t\t\t\t<h1 class=\"pgevoke-tag-pageheader\">&nbsp;<\/h1>\n\t\t\t<<< } >>>\n\t\t\t<div class=\"pgevoke-loadingspinner\">\n\t\t\t\t<div class=\"pg-loading\"><\/div>\n\t\t\t<\/div>\n\t\t\t<div class=\"pgevoke-tag-reveal\"><\/div>\n\t\t\t<div class=\"pgevoke-tag-latest\">\n\t\t\t\t<div class=\"pgevoke-headerbar\">\n\t\t\t\t\t<span class=\"icon icon icon-price-tag2\" style=\"top:1px; color:red\"><\/span>\n\t\t\t\t\t<span class=\"pgevoke-tag-latest-headerbar-text\"><\/span>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"pgevoke-tag-infinitestorylist\"><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t<div class=\"pgevoke-grid-area-side\">\n\t\t\t<!-- Sticky Right Rail BEGIN -->\n\t\t\t<div class=\"pgevoke-tag-rightrail pg-hidden-mobile\"><\/div>\n\t\t\t<!-- Sticky Right Rail END -->\t\t\t\n\t\t<\/div>\n\t<\/div>\n<\/div>";

// -----  _tpl: electionresultswidget  -----
PGTPLS["electionresultswidget"] = "<!-- pgevoke._tpls.electionresultswidget -->\n<div id=\"pgevoke-electionresults-desktop\">\n\t<div class=\"pgevoke-electionresults\">\n\t\t<div class=\"pgevoke-electionresults-header\">\n\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgmisc\/election2023-logo-2.jpg\">\n\t\t\t<!-- <div>\n\t\t\t\tPA ELECTION<br> RESULTS\n\t\t\t<\/div> -->\n\t\t<\/div>\n\t\t<div class=\"swiper-container\" >\n\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t<div class=\"pgevoke-electionresults-slide\">\n\t\t\t\t\t\t<<< $.each(theobj.races, function(i, item) { >>>\n\t\t\t\t\t\t\t<<< console.log(\"FOUND ITEM (v2): \", item); >>>\n\t\t\t\t\t\t\t<<< if (theobj.countToShow < 4 && i >2) { console.log(\"Skipping item: \", item); return false; } >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item pgevoke-electionresults-slide-item-<<<=i+1>>>\" data-i=\"<<<=i+1>>>\">\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-title\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<<<= item.title >>>\n\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<<< for (let candnum=0; candnum<=1; candnum++) { >>>\n\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-candidate\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<<<= item.candidates[candnum].name >>><<< if (item.winner === (candnum+1).toString()) { >>>&nbsp;&#10003;<<< } >>>\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-votes\">\n\t\t\t\t\t\t\t\t\t\t\t\t<<<= item.candidates[candnum].votes >>>\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-precincts\"><<<= item.precincts >>>% of expected votes<\/div>\n\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t<<< }); >>>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t<div class=\"pgevoke-electionresults-slide\">\n\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-1\"><\/div>\n\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-2\"><\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n\n<div id=\"pgevoke-electionresults-mobile\">\n\t<div class=\"pgevoke-electionresults\">\n\t\t<div class=\"pgevoke-electionresults-header\">\n\t\t\t<img src=\"https:\/\/a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com\/images\/pgmisc\/election2023-logo-2-mobile.jpg\">\n\t\t\t<!-- <div>\n\t\t\t\tPA ELECTION<br> RESULTS\n\t\t\t<\/div> -->\n\t\t<\/div>\n\t\t<div class=\"swiper-container\" >\n\t\t\t<div class=\"swiper-wrapper\">\n\t\t\t\t<<< $.each(theobj.races, function(i, item) { >>>\n\t\t\t\t\t<<< if (i == 0 || i === 2) { >>>\n\t\t\t\t\t<div class=\"swiper-slide\">\n\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide\">\n\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t<<< if (theobj.countToShow !== 3 || i<3) { >>>\n\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item pgevoke-electionresults-slide-item-<<<=i+1>>>\" data-i=\"<<<=i+1>>>\">\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-title\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<<<= item.title >>>\n\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<<< for (let candnum=0; candnum<=1; candnum++) { >>>\n\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-candidate\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<<<= item.candidates[candnum].name >>><<< if (item.winner === (candnum+1).toString()) { >>>&nbsp;&#10003;<<< } >>>\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-votes\">\n\t\t\t\t\t\t\t\t\t\t\t\t<<<= item.candidates[candnum].votes >>>\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t\t<\/div>\n\t\t\t\t\t\t\t\t<<< } >>>\n\t\t\t\t\t\t\t\t<div class=\"pgevoke-electionresults-slide-item-precincts\"><<<= item.precincts >>>% of expected votes<\/div>\n\t\t\t\t\t\t\t<\/div>\t\n\t\t\t\t\t\t\t<<< } >>>\t\t\t\t\t\n\t\t\t\t\t<<< if (i == 1 || i === 3) { >>>\n\t\t\t\t\t\t<\/div>\n\t\t\t\t\t<\/div>\n\t\t\t\t\t<<< } >>>\n\t\t\t\t<<< }); >>>\n\t\t\t<\/div>\n\t\t\t\n\t\t\t<div class=\"swiper-pagination\"><\/div>       \n\t\t\t<div class=\"swiper-button-prev swiper-button-whiteOFF\"><\/div>\n\t\t\t<div class=\"swiper-button-next swiper-button-whiteOFF\"><\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>";

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.underscore = (function() {
	var debuglogkey = "_TPLS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var emptyfunc = function() { return "" };
	var disablePGTPLS = false;
	return {
		tplFuncs: {},
		getTplFunc: function(selector) {
			debuglog("----- getTplFunc('" + selector + "') called -----");
			var tplKey = selector.replace("#pgevoke-_tpl-","");
			if (typeof PGLIB.all.underscore.tplFuncs[tplKey] === "function") {
				debuglog("Using cached version of template '" + tplKey + "'");
				return PGLIB.all.underscore.tplFuncs[tplKey]; // Return cached version
			}
			var tplstring = "";
			if (typeof PGTPLS === "object" && typeof PGTPLS[tplKey] === "string" && PGTPLS[tplKey] !== "" && !disablePGTPLS) {
				debuglog("Found PGTPLS['" + tplKey + "']. Using.");
				tplstring = PGTPLS[tplKey];
			} else {
				if (disablePGTPLS) {
					debuglog("disablePGTPLS is set to TRUE. Not using.");
				}
				if ($(selector).length > 0) {
					debuglog("Could not find in PGTPLS. Found in document.");
					tplstring = $(selector).first().html();	 
				} else {
					debuglog("Could not find in PGTPLS nor document.");
				}
			}
			if (tplstring !== "") {
				// debuglog("PGTPLS['" + tplKey + "'] is a valid string. Using."); //, tplstring);
				try {
					var tplfunc = _.template(tplstring); 
					PGLIB.all.underscore.tplFuncs[tplKey] = tplfunc; // Save to cache
					return tplfunc;
				} catch(e) {
					debuglog("ERROR in _.template()! Returning empty func instead.");
					debuglog(e);
					return emptyfunc;
				}
			} else {
				debuglog("Returning (empty) defaultfunc");
				return emptyfunc;
			}
		},
		tplExists:  function(selector) {
			debuglog("----- underscoreTplExists(" + selector + ") called -----");
			var func = PGLIB.all.underscore.getTplFunc(selector);
			funcresult = "";
			if (typeof func === "function") {
				var funcresult = func({});
			}
			return (funcresult !== "");
		}
	}
})();



// test
// Used by the various AJAX content boxes
window.PGFNS = window.PGFNS || {};
window.PGFNS.ajax = (function() {

	var debuglogkey = "AJAX";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	/*
	function debuglog (thingtolog) {
		if (PGFNS.ajax.debugmode === true) {
			console.log(thingtolog);
		}
	}
	*/
	var issetmulti = PGFNS.issetmulti;

	function isString(item) {
		return (typeof item === "string");
	}

	// ################
	// Checks to make sure the passed item
	// is an object, and also is NOT null,
	// since typeof null==="object"
	// #
	function isRealObject(item) {
		var isobj = (typeof item === "object");
		var isnull = (item === null);
		if (isobj && !isnull) {
			return true;
		} else {
			return false;
		}
	}

	// ####### Public Functions & Values #######
	return {
		debugmode: false,
		cacheddata: {},
		loadAjaxContent: function(settings) {
			// ------- Check settings object for fatal errors -------
			var theerrors = "";
			debuglog("loadAjaxContent() initialized. Setting below:");
			debuglog(settings);
			if (typeof settings.$target === "undefined") { theerrors += "No target passed! "; }
			if (typeof settings.template === "undefined" && typeof settings.processfunction != "function") { theerrors += "No template set (required when using defaultProcessFunction)! ";
			}
			if (typeof settings.endpoint !== "string") {
				if (isRealObject(settings.jsondata)) {
					debuglog("No endpoint, but the following JSON data was sent and will be used...");
					debuglog(settings.jsondata);
					settings.usejsondata = true;
				} else {
					theerrors += "No valid endpoint or JSON data set!";
				}
			} else {
				debuglog("settings.endpoint: " + settings.endpoint);
				// debuglog("settings.endpoint slice: " + settings.endpoint.slice(0,10));
				// debuglog("settings.endpoint length: " + settings.endpoint.length);
				if (settings.endpoint.slice(0,10) == "pgpageapi." && settings.endpoint.length > 10) {
					settings.usepgpageapi = true;
					settings.pgpageapikey = settings.endpoint.slice(10); // Get rest of string
					// debuglog("Using pgpageapi with key \"" + settings.pgpageapikey + "\"");
				} else {
					settings.usepgpageapi = false;
				}
			}
			if (theerrors !== "") {
				debuglog("FATAL ERRORS - " + theerrors + " See passed object below.");
				debuglog(settings);
				return;
			}
			// ------- Process the rest of the settings -------
			if (typeof settings.processfunction !== "function") {
				// debuglog("No process function set - using default!");
				if (typeof settings.processfunction === "string" && settings.processfunction === "simple") {
					debuglog("processfunction='simple'. Using processFunctionSimple()");
					settings.processfunction = PGFNS.ajax.processFunctionSimple;
				} else {
					settings.processfunction = PGFNS.ajax.processStorylistDefault;
				}
			}
			settings.dedupe = (typeof settings.dedupe === "undefined") ? false : true;
			if (settings.dedupe === true && typeof settings.dedupeclass !== "string") {
				settings.dedupeclass = "";
			}
			if (typeof settings.beginningfunction !== "function") {
				// debuglog("No 'beginfunction' set. Using empty function.");
				settings.beginningfunction = function(){};
			}
			if (typeof settings.failfunction !== "function") {
				// debuglog("No 'failfunction' set. Using empty function.");
				settings.failfunction = function(){};
			}		
			if (typeof settings.endfunction !== "function") {
				// debuglog("No 'endfunction' set. Using empty function.");
				settings.endfunction = function(){};
			}
			if (typeof settings.count !== "undefined") {
				settings.count = parseInt(settings.count, 10); // e.g. count=10
			} else {
				settings.count = 0; // Default, processes entire returned list of items
			}
			if (typeof settings.start !== "undefined") {
				settings.start = parseInt(settings.start, 10); // e.g. start=3
			} else {
				settings.start = 0; // Default, start with first item (index of 0)
			}
			if (typeof settings.trackingselector !== "string") {
				settings.trackingselector = ""; // Used to trigger event
			}
			if (typeof settings.customdata !== "object" || Array.isArray(settings.customdata)) {
				settings.customdata = {};
			}
			// if (typeof settings.minstories !== "undefined") {
			//	 settings.minstories = settings.minstories.valueOf();
			// } else {
			// 	 settings.minstories = 0;
			// }
			if (settings.usepgpageapi === true) {
				debuglog("Using Page API. Key: " + settings.pgpageapikey);
				if ($("body").is(".pg-pgpageapiready")) {
					debuglog("PG Page API is READY already.");
					PGFNS.ajax.getPGPageAPIData(settings);
				} else {
					debuglog("PG Page API is NOT ready. Waiting.");
					$(document).on("pgpageapi:ready", function(event) {
						debuglog("Heard pgpageapi:ready event. Now processing queued item.");
						PGFNS.ajax.getPGPageAPIData(settings);
					});
				}
			} else if (settings.usejsondata === true ) {
				debuglog("Using settings.jsondata instead of an endpoint.");
				settings.processfunction(settings.jsondata, settings);
			} else {
				if (typeof PGFNS.ajax.cacheddata[settings.endpoint] == "object") {
					debuglog("Endpoint (" + settings.endpoint + ") has already been requested on this page. Using data from 'cacheddata' object.");
					var jsondata = PGFNS.ajax.cacheddata[settings.endpoint];
					settings.processfunction(jsondata, settings);
				} else {
					debuglog("Sending AJAX request to " + settings.endpoint);
					$.ajax(settings.endpoint, {
						dataType:"json"
					})
					.done(function(jsondata) {
						debuglog("Ajax request successful! Here's the returned data:");
						debuglog(jsondata);
						PGFNS.ajax.cacheddata[settings.endpoint] = jsondata;
						$(document).ready( function() {
							debuglog("Executing process function.");
							settings.processfunction(jsondata, settings);
						});
					})
					.fail(function() {
				 	  	debuglog("Ajax Request Failed!");
					});		
				}
			}
			settings.usenolatest = (typeof settings.usenolatest === "boolean" && settings.usenolatest) ? true : false;
			return;
		},
		getPGPageAPIData: function(settings) {
			debuglog("getPGPageAPIData() called.");
			if (isRealObject(pgpageapi[settings.pgpageapikey])) {
				debuglog("Page API data found for key (" + settings.pgpageapikey +"). Showing key's JSON data below. Content will now be loaded.");
				var jsondata = pgpageapi[settings.pgpageapikey];
				// debuglog(jsondata);
				settings.processfunction(jsondata, settings);			
			} else {
				debuglog("Page API has no data for specified key (" + settings.pgpageapikey +"). Content will not be loaded.");
			}
		},
		processStorylistDefault: function(jsondata, settings) {
			debuglog("Beginning of processStorylistDefault() with following jsondata:");
			// debuglog(jsondata);
			if (isRealObject(jsondata) === false) {
				debuglog("Jsondata is NOT an object. Type is \"" + (typeof jsondata) + "\". Cannot process. Aborting.");
			}
			settings.beginningfunction(jsondata, settings);
			var articles;
			if (Array.isArray(jsondata.articles) === false || jsondata.articles.length === 0) {
				articles = [];
			} else {
				articles = jsondata.articles;
				// if (issetmulti(PGVARS, "sitecode") && PGVARS.sitecode !== "LIVE" && PGVARS.sitecode !== "MLIVE") {
				if (issetmulti(PGVARS, "sitecode")) {
					var sd;
					if (PGVARS.sitecode === "LIVE") {
						if (typeof PGVARS.istestweb === "boolean" && PGVARS.istestweb) {
							sd = window.atob("dGVzdHdlYjQ=");
						} else {
							sd = "www";	
						}
					} else if (PGVARS.sitecode === "DEV") {
						sd = (PGVARS.site === "pg") ? window.atob("bmV3ZGV2") : window.atob("ZGV2");
					} else {
						sd = PGVARS.sitecode.toLowerCase();
					}
					$.each(articles, function(i, item) {
						if (typeof articles[i].link !== "undefined") {
							if (PGVARS.site === "pg") {
								articles[i].link = articles[i].link.replace("www.post-gazette.com", sd + ".post-gazette.com");	
							} else if (PGVARS.site === "blade") {
								articles[i].link = articles[i].link.replace("www.toledoblade.com", sd + ".toledoblade.com");
							}
						}
					});
				}
				if (settings.dedupe === true) {
					PGFNS.ajax.dedupe(articles, settings.dedupeclass);
				}	
			}
			if (issetmulti(jsondata, "metaData", "aggregateFeed", "sectionNames") && Array.isArray(jsondata.metaData.aggregateFeed.sectionNames) && jsondata.metaData.aggregateFeed.sectionNames.length > 0) {
				debuglog("FOUND AGGREGATE FEED");
				debuglog(jsondata);
				settings.hasAggregateFeed = true;
				settings.aggregateFeed = jsondata.metaData.aggregateFeed.sectionNames;
				// NOTE 3/23/2018: Still need to write code to add the sectionNames array to the "item" object that's passed to processStorylistItemDefault, then use it to filter the subsections there
			} else {
				settings.hasAggregateFeed = false;
				// debuglog("COULD NOT FIND AGGREGATE FEED");
				// debuglog(jsondata);
			}
			// if (settings.minstories > 0 && articles.length < settings.minstories) {
			//  debuglog("Not enough stories (" + jsondata.count.valueOf() + "). Aborting with failfunction.");
			//	pgsettings.failfunction(jsondata, settings);
			// }
			debuglog("Getting template and stuff");
			/*
			var thetemplate
			var PGTPLSkey = settings.template.replace("#pgevoke-_tpl-","");
			debuglog("Looking for PGTPLS['" + PGTPLSkey + "'] (v1)");
			if (typeof PGTPLS === "object" && typeof PGTPLS[PGTPLSkey] === "string") {
				debuglog("Found PGTPLS['" + PGTPLSkey + "'].");
				debuglog(PGTPLS[PGTPLSkey]);
				thetemplate = PGTPLS[PGTPLSkey];
				debuglog(_.template(PGTPLS[PGTPLSkey]));
			// }
			} else {
				thetemplate = $(settings.template).html();	
			}
			var templatefunction = _.template(thetemplate);
			*/
			var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
			// debuglog("real template function...");
			// debuglog(templatefunction);
			var $target = settings.$target;
			var setcount = articles.length;
			debuglog("Count = " + setcount);
			settings.storyobjs = [];
			if (settings.usenolatest) {
				articles = PGFNS.filterNoLatest(articles);
			}
			$.each(articles, function(i, item) {
				if (i >= settings.start && (settings.count == 0 || i < (settings.start + settings.count))) {
					item.counter = i;
					item.islastitem = (i + 1 == settings.start + settings.count);
					item.customdata = settings.customdata;
					item.hasAggregateFeed = settings.hasAggregateFeed;
					item.aggregateFeed = (settings.hasAggregateFeed) ? settings.aggregateFeed : [];
					item.useModifiedTimestamps = (typeof settings.useModifiedTimestamps === "boolean") ? settings.useModifiedTimestamps : false;
					if (settings.usepgpageapi === true) {
						item.pgpageapikey = settings.pgpageapikey;
					}
					var theobj = PGFNS.ajax.processStorylistItemDefault(item);
					// try {
					debuglog("theobj:");
					debuglog(theobj);
					var theoutput = templatefunction(theobj);
					debuglog("theoutput:");
					debuglog(theoutput);
					debuglog($target);
					$target.append(theoutput);		
					/* } catch(e) {
						debuglog("Error outputting to underscore template...");
						debuglog(e);
					} */
					settings.storyobjs.push(theobj);
				} else {
					// debuglog("Skipping item #" + i + ". Outside of specified storylist range (start: " + settings.start + ", count: " + settings.count + ").");
				}
			});
			if (isRealObject(PGFNS) && typeof PGFNS.bindlazyloadimages == "function") {
				PGFNS.bindlazyloadimages();	
			}
			if (settings.trackingselector !== "") {
				debuglog("Triggering ajax_articles_loaded for '" + settings.trackingselector + "' (v2)");
				_PG._trigger("ajax_articles_loaded", settings.trackingselector);	
			}
			settings.endfunction(jsondata, settings);
		},
		processStorylistItemDefault: function(item) {
			debuglog("processStorylistItemDefault");
			debuglog(item);
			var story = {};
			story.context = (issetmulti(item, "customdata", "context")) ? item.customdata.context : "";
			story.isfullstory = (story.context === "fullstory");
			story.useModifiedTimestamps = (typeof item.useModifiedTimestamps === "boolean") ? item.useModifiedTimestamps : false;

			// ***********************
			//  Universal Variables
			// ***********************
			if (Array.isArray(item.author) && item.author.length > 0) {
				story.bylinefull = item.author[0].replace("By ","");
				story.author = PGFNS.formatByline(story.bylinefull);
			} else if (typeof item.author !== "undefined" && typeof item.author.length === "number" && item.author.length > 0) {
				story.bylinefull = item.author.replace("By ","") + "";
				story.author = PGFNS.formatByline(story.bylinefull);
			} else {
				story.bylinefull = "";
				story.author = "";
			}
			// debuglog("AUTHOR::: " + story.author);
			story.author = story.author.replace(/\<br\/?\>/i, " / ");
			// debuglog("AUTHOR::: " + story.author);
			story.imagelink = (issetmulti(item,"images","0","url") && isString(item.images[0].url)) ? item.images[0].url : "";
			story.imagelink = story.imagelink.replace(/^https?:\/\//,"//");
			story.imagelink = story.imagelink.replace(/^https?:\/\//,"https://");
			// story.imagelink = PGFNS.getLiberLink(story.imagelink);
			story.imagecaption = (issetmulti(item,"images","0","caption") && isString(item.images[0].caption)) ? item.images[0].caption : "";
			story.imagecredit = (issetmulti(item,"images","0","photoCredit") && isString(item.images[0].photoCredit)) ? item.images[0].photoCredit : "";
			story.pubdate = (isString(item.pubDate)) ? item.pubDate : "";
			story.customlink = (isString(item.customLink)) ? item.customLink : "";
			story.link = (isString(item.link)) ? item.link : "";
			story.relatedlinks = (issetmulti(item,"related","links") && Array.isArray(item.related.links)) ? item.related.links : [];
			if (issetmulti(item,"images","0","cdn")) {
				story.cdnimage = item["images"]["0"]["cdn"];
				if (typeof story.cdnimage["host"] !== "string" || typeof story.cdnimage["fileName"] !== "string" || typeof story.cdnimage["sizes"] !== "object") {
					story.cdnimage = undefined;
				}
			} else {
				story.cdnimage = undefined;
			}
			$.each(story.relatedlinks, function(index, item) {
				if (typeof item === "object") {
					if (typeof item.image === "string") {
						story.relatedlinks[index].image = item.image.replace(/^https?:\/\//,"//");
					}
					if (issetmulti(item,"images","0","cdn")) {
						var itemcdnimage = item.images[0].cdn;
						if (typeof itemcdnimage["host"] !== "string" || typeof itemcdnimage["fileName"] !== "string" || typeof itemcdnimage["sizes"] !== "object") {
							itemcdnimage = undefined;
						}
						story.relatedlinks[index].cdnimage = itemcdnimage;
					} else {
						story.relatedlinks[index].cdnimage = undefined;
					}
					if (typeof item.customLink === "string" && item.customLink !== "") {
						story.relatedlinks[index].url = item.customLink;
						debuglog("Found custom link (" + item.customLink +")");
					}
				}
			});
			story.hasrelatedlinks = (Array.isArray(story.relatedlinks) && story.relatedlinks.length > 0) ? true : false;
			story.wrapperclasses = "";
			if (story.imagelink === "") {
				story.wrapperclasses += "pg-itemhasnoimage ";
			} else {
				story.wrapperclasses += "pg-itemhasimage ";
			}
			story.wrapperclasses = story.wrapperclasses.trim();
			story.body = (isString(item.body)) ? item.body : "";
			story.param1 = (typeof PGVARS === "object" && typeof PGVARS.param1 === "string") ? PGVARS.param1.toLowerCase() : "";
			story.usesSubsectionBoxes = false;
			var exemptsections = {
				"blade": [
					"local/breaking"
				],
				"pg": []
			};
			var isexempt = (typeof exemptsections[PGVARS.site] !== "undefined" && exemptsections[PGVARS.site].indexOf(PGVARS.sectionpath) >= 0);
			if (typeof story.param1 !== "") {
				// if (typeof PGVARS.useSubsectionBoxes === "boolean" && PGVARS.useSubsectionBoxes) {
				if (PGVARS.requesttype === "SECTION" && !isexempt) { // ALWAYS RUNNING NOW
					// debuglog("useSubsectionBoxes is TRUE");
					// debuglog(item);
					if (issetmulti(item, "subSections", story.param1) && Array.isArray(item.subSections[story.param1]) && item.subSections[story.param1].length > 0) {
						var subsections = item.subSections[story.param1];
						debuglog("subsections:");
						debuglog(subsections);
						if (item.hasAggregateFeed && typeof item.aggregateFeed === "object" && Array.isArray(item.aggregateFeed)) {
							debuglog("Has aggregate feed");
							var subsectionsfiltered = [];
							$.each(subsections, function(i, thesubsection) {
								var aggregatefeedlcase = item.aggregateFeed.map(function(value) { return value.toLowerCase(); });
								debuglog(aggregatefeedlcase);
								if (aggregatefeedlcase.indexOf(thesubsection.toLowerCase()) >= 0) {
									subsectionsfiltered.push(thesubsection);
								} else {
									debuglog("FILTERING OUT '" + thesubsection + "'");
								}
							});
							subsections = subsectionsfiltered;
						} else {
							debuglog("No aggregate feed!");
						}
						var subsectionslcase = subsections.map(function(value) { return value.toLowerCase(); });
						if (subsectionslcase.length > 0) {
							debuglog("Subsections length > 0");
							debuglog(subsectionslcase);
							if (subsectionslcase.indexOf(PGVARS.param2.toLowerCase()) >= 0) {
								story.subsection = subsections[subsectionslcase.indexOf(PGVARS.param2.toLowerCase())];	
							} else {
								story.subsection = subsections[0];	
							}
						} else {
							debuglog("Subsections length is 0");
							story.subsection = story.param1;
						}
						story.usesSubsectionBoxes = true;	
					} else {
						story.subsection = story.param1;
						story.usesSubsectionBoxes = true;
					}
				} else {
					story.subsection = "";
					story.usesSubsectionBoxes = false;
					// debuglog("NOT using subsection boxes");
				}
			}
			story.parentsectionid = (story.usesSubsectionBoxes) ? PGVARS.param1.toLowerCase() : PGFNS.getParam1(story.link);
			story.parentsectionid = (story.parentsectionid === "a-e") ? "ae" : story.parentsectionid; // For The Blade

			story.hascustomlink = (PGFNS.getSiteSetting("enablecustomlinks") === true && typeof story.customlink === "string" && story.customlink !== "");
			story.link = story.hascustomlink ? story.customlink : story.link;
			story.link = (window.location.host.indexOf("mysqltstweb") > -1) ? story.link.replace(/(^https?:\/\/)([^\/]+)(\/.+)$/, "$1"+window.location.host+"$3") : story.link;
			story.link = (window.location.host.indexOf("wwwmysql") > -1) ? story.link.replace(/(^https?:\/\/)([^\/]+)(\/.+)$/, "$1"+window.location.host+"$3") : story.link;
			story.link = (window.location.host.indexOf("tbdrweb") > -1) ? story.link.replace(/(^https?:\/\/)([^\/]+)(\/.+)$/, "$1"+window.location.host+"$3") : story.link;
			story.tags = item.tags;
			story.tagsstring = "";
			if (issetmulti(item,"tags") && Array.isArray(item.tags) && item.tags.length > 0) {
				debuglog("Found " + item.tags.length + "tags");
				$.each(item.tags, function(i, item) {
					debuglog("Tag: " + item);
					if (typeof item.name === "string" && typeof item.seoKey === "string") {
						// item.seoKey // item.name
						story.tagsstring += item.name;
						if (i < i.length - 1) { story.tagsstring += ","; }
						debuglog("Tags: " + story.tagsstring);
					}
				});
			}
			story.subtitle = (isString(item.subTitle)) ? item.subTitle : "";
			story.kicker = (isString(item.kicker)) ? item.kicker : "";
			story.sst = (isString(item.specialStoryTag) && item.specialStoryTag !== "none") ? item.specialStoryTag : ""; 
			story.hasSST = (story.sst !== "") ? true : false;
			story.sstlabel = story.sst.toUpperCase();
			if (story.sst === "specialreport") {
				story.sstlabel = (PGVARS.site === "pg") ? "PG SPECIAL REPORT" : "SPECIAL REPORT";
			}
			if (story.sst === "investigation" && PGVARS.site === "pg") {
				story.sstlabel = "PG INVESTIGATION";
			}
			if (story.sst === "exclusive" && PGVARS.site === "pg") {
				story.sstlabel = "PG EXCLUSIVE";
			}
			if (story.sst === "liveupdates") {
				story.sstlabel = "LIVE UPDATES";
			}
			story.sstcolor = (story.hasSST && PGVARS.site === "pg" && (story.sst === "specialreport" || story.sst === "investigation" || story.sst === "exclusive")) ? "green" : "red";
			story.usesubtitle = (isString(item.useSubtitle) && (item.useSubtitle === "1" || item.useSubtitle === "True")) ? true : false;

			// Populate variable (object) that will be used in underscore template
			var obj = {};
			obj.title = item.title || "";
			obj.teasertitle = item.teaserTitle || obj.title;
			obj.subtitle = story.subtitle;
			obj.usesubtitle = story.usesubtitle;
			obj.kicker = story.kicker;
			obj.link = (story.hascustomlink) ? story.link : story.link.replace(/^http:/, "").replace(/\/$/, "");
			obj.linkhttp = (story.hascustomlink) ? story.link : PGFNS.formatLink(story.link, "http");
			obj.linkhttps = (story.hascustomlink) ? story.link : PGFNS.formatLink(story.link, "https");	
			obj.timeago = PGFNS.formatDate(story.pubdate, "timeago");
			obj.timeagoshort = PGFNS.formatDate(story.pubdate, "timeagoshort");
			obj.pubdate = story.pubdate; // aka "firstpublished"
			obj.pubdateformatted = PGFNS.formatDate(story.pubdate, "normal");
			obj.contentmodified = (isString(item.displayUpdateDate)) ? item.displayUpdateDate : "";
			obj.contentmodified = (isString(item.contentModified)) ? item.contentModified : obj.contentmodified; // Use new key if it's available
			obj.parentsectionid = story.parentsectionid;
			obj.parentsectionname = PGFNS.getSectionName(obj.parentsectionid);
			obj.byline = story.author;
			obj.bylinefull = story.bylinefull;
			obj.imagelink = story.imagelink;
			obj.tags = story.tags;
			// obj.imagelink = "";
			obj.imagecaption = story.imagecaption;
			obj.imagecredit = story.imagecredit;
			obj.imagealt = (obj.imagecaption !== "") ? obj.imagecaption : obj.title;
			obj.cdnimage = story.cdnimage;
			obj.body = story.body;
			obj.counter = item.counter; // set in processStoryListDefault()
			obj.islastitem = item.islastitem; // set in processStoryListDefault()
			obj.relatedlinks = story.relatedlinks;
			obj.hasrelatedlinks = story.hasrelatedlinks;
			obj.wrapperclasses = story.wrapperclasses;
			obj.pgpageapikey = item.pgpageapikey || "";
			obj.storyid = item.storyID || "";
			obj.parentsection = item.section || "";
			obj.parentsection = (obj.parentsection === "aande" || obj.parentsection === "a-e") ? "ae" : obj.parentsection;
			obj.subsection = item.subSection || "";
			obj.commentsenabled = (typeof item.commentsEnabled === "boolean" && item.commentsEnabled === true);
			obj.commentsclosedate = (isString(item.commentsCloseDate)) ? item.commentsCloseDate : "";
			obj.layout = (isString(item.layout)) ? item.layout : "";
			debuglog("storysubsection: " + story.subsection);
			debuglog("parentsetionname: " + obj.parentsectionname);
			obj.sectionboxtext = (story.subsection !== "") ? PGFNS.getSectionTagText(story.subsection) : PGFNS.getSectionTagText(obj.parentsectionname);
			obj.specialstorytag = story.sstlabel;
			// obj.specialstorytag = (obj.sectionboxtext.toUpperCase() === "LOCAL") ? "BREAKING" : obj.specialstorytag;
			obj.hasSST = story.hasSST;
			obj.sstcolor = story.sstcolor;
			obj.isATF = (issetmulti(item, "customdata", "isATF") && typeof item.customdata.isATF === "boolean" && item.customdata.isATF) ? true : false;
			obj.useSST = (issetmulti(item, "customdata", "useSST") && typeof item.customdata.useSST === "boolean" && item.customdata.useSST) ? true : false;
			obj.storygroup = (issetmulti(item, "storyGroup") && typeof item.storyGroup === "string") ? item.storyGroup : "";
			obj.context = story.context;


			// ***********************
			//     FP Breaking
			// ***********************
			obj.timestamp = obj.pubdateformatted;
			obj.timestampshort =  obj.timeagoshort;			
			if ((story.context === "fpbreaking" || story.useModifiedTimestamps) && obj.contentmodified !== "") {
				debuglog("customdata.context is 'fpbreaking'.");
				// if (typeof item.contentModified === "string" && item.contentModified !== "") {
				// story.contentmodified = item.contentModified;
				story.pubdateint = PGFNS.formatDate(obj.pubdate, "integer");
				story.contentmodifiedint = 	PGFNS.formatDate(obj.contentmodified, "integer");
				debuglog("Comparing pubdate (" + story.pubdateint + ") to lastModified (" + story.contentmodifiedint + ")");
				if (story.contentmodifiedint > story.pubdateint) {
					debuglog("Modified is newer. Using.");
					// story.timeagoshort =PGFNS.formatDate(story.contentmodified, "timeagoshort");
					// obj.contentmodified = story.contentmodified; Set earlier in function as of 4/30/2020 -AF
					obj.timeagoshort =  PGFNS.formatDate(obj.contentmodified, "timeagoshort");
					obj.timestamp = PGFNS.formatDate(obj.contentmodified, "normal");
					obj.timestampshort = PGFNS.formatDate(obj.contentmodified, "timeagoshort");
				}
			}
			obj.useModifiedTimestamps = story.useModifiedTimestamps;

			// ***********************
			//     Story Page Only
			// ***********************
			if (story.isfullstory) {
				story.images = item.images;
				if (issetmulti(item, "customdata", "transporterid")) {
					debuglog("Found Transporter ID: " + item.customdata.transporterid.toString());
					story.transporterid = item.customdata.transporterid.toString();
				} else {
					debuglog("No Transporter ID provided");
					story.transporterid = "";
				}
				story.imagelinkhero = (issetmulti(item,"images","0","url_hero") && isString(item.images[0]["url_hero"])) ? item.images[0]["url_hero"] : story.imagelink;
				story.imagelinkhero = story.imagelinkhero.replace(/^https?:\/\//,"//");
				// story.contentmodified = (isString(item.displayUpdateDate)) ? item.displayUpdateDate : "";
				// story.contentmodified = (isString(item.contentModified)) ? item.contentModified : story.contentmodified; // Use new key if it's available
				story.endofstorydate = ""; // Default
				if (PGVARS.site === "pg") {
					story.bylinedate = obj.pubdate; // Always use pubdate (May 2024)
					story.endofstorypubdate = obj.pubdate;
					story.pubdateint = PGFNS.formatDate(obj.pubdate, "integer");
					story.contentmodifiedint = 	PGFNS.formatDate(obj.contentmodified, "integer");
					// story.endofstorymoddate = (story.pubdateint !== story.contentmodifiedint) ? obj.contentmodified : "";
					story.endofstorymoddate = (story.contentmodifiedint > story.pubdateint) ? obj.contentmodified : "";
				} else {
					storyendofstorypubdate = ""; // Default
					storyendofstorymoddate = ""; // Default
					if (obj.pubdate !== "" && obj.contentmodified !== "") {
						// ***** Format: 201703020615
						story.pubdateint = PGFNS.formatDate(obj.pubdate, "integer");
						story.contentmodifiedint = 	PGFNS.formatDate(obj.contentmodified, "integer");
						debuglog("story.pubdateint: " + story.pubdateint);
						debuglog("story.contentmodifiedint: " + story.contentmodifiedint);
						if (story.contentmodifiedint > story.pubdateint) {
							story.bylinedate = obj.contentmodified;
							story.endofstorydate = obj.pubdate;
						} else {
							story.bylinedate = obj.pubdate;
							// if (PGVARS.site === "pg") {
								story.endofstorydate = obj.pubdate; // Adding 5/18/2020	
							// }
						}
						debuglog("story.bylinedate: " + story.bylinedate);
					} else {
						story.bylinedate = obj.pubdate;
						// if (PGVARS.site === "pg") {
							story.endofstorydate = obj.pubdate; // Adding 5/18/2020
						// }
					}
				}

				// story.adsectionmatches = story.link.match(/post-gazette\.com\/(.+?)\/[0-9]/);
				debuglog("It's a FULL story. Here's the story..");
				debuglog(story);
				story.adsectionmatches = story.link.match(/\.com\/(.+?)\/[0-9]/); // Making more universal for blade
				debuglog(typeof story.adsectionmatches);
				story.adsection = (typeof story.adsectionmatches !== "undefined" && Array.isArray(story.adsectionmatches) && typeof story.adsectionmatches[1] === "string") ? story.adsectionmatches[1].toLowerCase() : "";
				obj.images = story.images; // array
				$.each(obj.images, function(index, item) {
					obj.images[index].buylink = (PGVARS.usefotomoto) ? false : ""; // Default
					if (typeof item.url === "string") {
						// obj.images[index].url = obj.images[index].url.replace(/^https?:\/\//,"//").replace("700x700_cMC","700x700_cMC_85");
						obj.images[index].url = obj.images[index].url.replace(/^https?:\/\//,"https://").replace("700x700_cMC","700x700_cMC_85");
						if (PGVARS.site === "blade") {
							debuglog("FOTOMOTO: Checking photo credit: " + item.photoCredit);
							if (item.photoCredit.toLowerCase().indexOf("the blade") >= 0) {
								if (PGVARS.usefotomoto) {
									obj.images[index].buylink = true;
									obj.images[index].printurl = PGFNS.formatImage(obj.images[index].url, "q100");
									obj.images[index].weburl = PGFNS.formatImage(obj.images[index].url, "600x_q85");
									obj.images[index].storyurl = obj.linkhttps;
									debuglog("FOTOMOTO: PRINTURL: " + obj.images[index].printurl);
									debuglog("FOTOMOTO: WEBURL: " + obj.images[index].weburl); // test
								} else {
									debuglog("FOTOMOTO: Using mycapture");
									var mycaptureimageurl = item.url.replace(/^\/\//, "http://").replace(/http:\/\/([^\.])+?\./, "http://www.");
									var buylink = "";
									buylink += "http://toledoblade.mycapture.com/mycapture/remoteimage.asp";
									buylink += "?image=" + encodeURIComponent(mycaptureimageurl);
									buylink += "&Caption=" +  encodeURIComponent(item.caption);
									buylink += "&PhotographerID=" + encodeURIComponent(item.photoCredit);
									obj.images[index].buylink = buylink;
								}
							} else {
								debuglog("FOTOMOTO: The Blade not found");
							}
						}
					}
				});
				obj.transporterindex = story.transporterindex;
				obj.bylinedate = PGFNS.formatDate(story.bylinedate, "storydate");
				obj.bylinetime = PGFNS.formatDate(story.bylinedate, "storytime");
				obj.adsection = story.adsection;	
				obj.imagelinkstory = story.imagelinkhero.replace("https://", "http://").replace("_q90_", "_q80_");
				obj.endofstorydate = story.endofstorydate;
				obj.endofstorydateformatted = (obj.endofstorydate !== "") ? PGFNS.formatDate(story.pubdate, "endofstory") : "";
				// try { PGLIB.syncscriptloader.prepareScripts(theobj.body) }
				obj.endofstorypubdate = story.endofstorypubdate;
				obj.endofstorypubdateformatted = (obj.endofstorypubdate !== "") ? PGFNS.formatDate(story.pubdate, "endofstory") : "";
				obj.endofstorymoddate = story.endofstorymoddate;
				obj.endofstorymoddateformatted = (obj.endofstorymoddate !== "") ? PGFNS.formatDate(story.endofstorymoddate, "endofstory") : "";
				obj.bodyparsed = "";
				obj.transporterid = story.transporterid;
				obj.noimage = ((typeof obj.cdnimage === "undefined" && (typeof obj.imagelink !== "string" || obj.imagelink === "")) || obj.layout === "noheroimage");
				obj.hasimage = !obj.noimage;
				obj.encodedtitle = PGFNS.encodeForSocialShare(obj.title);
				obj.paid = (typeof story.paid === "string") ? story.paid : "";
				obj.emailwidgetid = "";
				if (PGVARS.site === "blade") {
					(function() {
						var piano_emailwidgets = ["1597338393743", "1597345194660", "1597345285844", "1597345354109"];
						console.log("TYPEOF OBJ.COUNTER: " + typeof obj.counter);
						console.log("OBJ.COUNTER: " + obj.counter);
						if (typeof obj.counter === "number" && obj.counter >=0 && obj.counter <= 3) {
							obj.emailwidgetid = piano_emailwidgets[obj.counter];
						}
					})();
				}
			} // End of Story-only items
			debuglog("processStorylistItemDefault is ready to pass on this object...");
			debuglog(obj);
			return obj;
		},
		processFunctionSimple: function(jsondata, settings) {
			debuglog("processFunctionSimple() called. Here's jsondata & settings...");
			debuglog(jsondata);
			debuglog(settings);
			var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
			var theoutput = templatefunction(jsondata);
			var $target = settings.$target;
			$target.append(theoutput);
			settings.endfunction(jsondata, settings);
		},
		dedupe: function(listofstoryobjects, classtoadd) {
			debuglog("DEDUPE: Function called. Here's the list:");
			debuglog(listofstoryobjects);
			var pagehrefs = [];
			// Scan all <a> tags on page that don't have "data-dedupe-exclude" and make a list of the unique ones
			$("a").each(function(){
				var currentlinkexcluded = (typeof $(this).data("dedupe-exclude") !== "undefined" && $(this).data("dedupe-exclude") == 1);
				if (!currentlinkexcluded) {
					var currenthref = $(this).attr("href");
					var alreadyonlist = ($.inArray(currenthref, pagehrefs) >= 0);
					if (!alreadyonlist) { pagehrefs.push(currenthref); }
				}
			});
			var dedupedarrayofitems = [];
			// Go through all stories being processed
			for (i=0; i< listofstoryobjects.length; i++) {
				// Get the link for each & check against the "pagehrefs" array
				var thisstoryobject = listofstoryobjects[i];
				var thislink = thisstoryobject.link;
				var linkisalreadyonpage = ($.inArray(thislink, pagehrefs) >= 0);
				if (!linkisalreadyonpage) {
					// If it's not in the "pagehrefs" array, add to the deduped array
					dedupedarrayofitems.push(thisstoryobject); 
				} else {
					// Otherwise, mark pre-existing link with the designated class
					if (typeof classtoadd == "string") {
						// $("a[href='" + thislink +  "']:not([data-dontmarktrending])").addClass(classtoadd);
					}
				}
			}
			debuglog("DEDUPE: Final array:");
			debuglog(dedupedarrayofitems);
			return dedupedarrayofitems;
		}
	};
})();
// Create jQuery plugin for .loadAjaxContent()
(function( $ ) {
	$.fn.loadAjaxContent = function(settings) {
		var $elem = this.first(); // If multiple matching elements, take only first
		settings.$target = $elem;
		PGFNS.ajax.loadAjaxContent(settings);
		return $elem;  // For method chaining
	};
}( jQuery ));

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.cdnimages = (function() {
	var enabled = true;
	var debuglogkey = "CDNIMAGES";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		hasSize: function(theobj, size) {
			if (!enabled) {
				debuglog("CDN Images are disabled. Returning FALSE for hasSize().");
				return false;
			}
			debuglog("Checking for CDN size '" + size + "' in theobj:");
			debuglog(theobj);
			if (typeof theobj !== "object" || typeof size !== "string") { return false; }
			if (!(PGFNS.issetmulti(theobj, "cdnimage", "sizes"))) { return false; }
			if (theobj.cdnimage.sizes.indexOf(size) >= 0) {
				debuglog("Found it");
				return true;
			} else {
				debuglog("Not found");
				return false;
			}
		},
		getLink: function(theobj, size) {
			debuglog("Getting CDN link", theobj, size);
			if (!(PGFNS.issetmulti(theobj, "cdnimage", "host"))) { return ""; }
			if (!(PGFNS.issetmulti(theobj, "cdnimage", "fileName"))) { return ""; }
			var theurl = "https://" + theobj.cdnimage.host + "/" + size + "/" + theobj.cdnimage.fileName;
			debuglog("Got CDN link: " + theurl);
			return theurl;
		}
	};
})();

window.PGSITESETTINGS = window.PGSITESETTINGS || {};
window.PGSITESETTINGS = {
	"fpshowcolumnists": false,
	"fpatfstyle": "fullwidth9stack",
	"fpmustseesource": "ajax",
	"fpmustseephotolabel": "",
	"fpmustseephotolink": "",
	"fpmustseevideolabel": "More Videos",
	"fpmustseevideolink": "https://www.toledoblade.com/video",
	"commentabuseemail": "webdesk@theblade.com",
	"commentpolicylink": "https://www.toledoblade.com/commentguidelines",
	"uselibercusimages": true,
	"enablecustomlinks": true
};
window.PGSITESETTINGS["fpnewsboxes"] = [
	{
		"sectionlabel": "Local",
		"sectionid": "local",
		"parentsectionid": "local",
		"morelink": "/local"
	},
	{
		"sectionlabel": "Sports",
		"sectionid": "sports",
		"parentsectionid": "sports",
		"morelink": "/sports"
	},
	{
		"sectionlabel": "Business",
		"sectionid": "business",
		"parentsectionid": "business",
		"morelink": "/business"
	},
	{
		"sectionlabel": "A&E",
		"sectionid": "ae",
		"parentsectionid": "ae",
		"morelink": "/a-e"
	},
	{
		"sectionlabel": "News",
		"sectionid": "news",
		"parentsectionid": "news",
		"morelink": "/news"
	},
	{
		"sectionlabel": "Opinion",
		"sectionid": "opinion",
		"parentsectionid": "opinion",
		"morelink": "/opinion"
	}
];
window.PGSITESETTINGS["viafoura"] = {
	"uuid": {
		"dev": "00000000-0000-4000-8000-defa57db08d2",
		"live": "00000000-0000-4000-8000-5c04b6406bf5" 
	}
};

// Blade ADSYSTEMCONFIG

window.ADSYSTEMCONFIG = {
	"jQuery": "$",
	"GA": "itTracker",
	"adunitpathbase": "/6785150/",
	"sitetypes": {
		"mobile": {
			"breakpoints": ["xs", "xxs"],
			"adunitpathdomain": "tb.mobile"
		},
		"desktop": {
			"breakpoints": ["sm", "md", "lg", "xl"],  
			"adunitpathdomain": "tb.com"
		},
		"all": {
			"breakpoints": ["xxs", "xs", "sm", "md", "lg", "xl"],
			"adunitpathdomain": "tb.com",
			"customaupdomains": {
				"xxs": "tb.mobile",
				"xs": "tb.mobile"
			}
		},
		"desktop-md+": {
			"breakpoints": ["md", "lg", "xl"],
			"adunitpathdomain": "tb.com"
		}
	}
};

window.ADSYSTEMCONFIG.prebidnetworks = {
	"appnexus": {
		getObj: function(varsobj) {
			var varsobj = (typeof varsobj === "undefined") ? {} : varsobj;
			var sitetype = (typeof varsobj["sitetype"] === "string") ? varsobj["sitetype"] : "";
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			if (posupper === "X51") { return false; }
			var placementid = "10181521";
			var obj = {
				bidder: 'appnexus',
				params: {
					placementId: placementid
				}
			};
			return obj;
		}
		// Question: Do we not want to separate out mobile vs desktop like for the PG?
	},
	"rubicon": {
		getObj: function(varsobj) {
			var varsobj = (typeof varsobj === "undefined") ? {} : varsobj;
			var sitetype = (typeof varsobj["sitetype"] === "string") ? varsobj["sitetype"] : "";
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			var possizex = (typeof varsobj["possizex"] === "string") ? varsobj["possizex"] : "";
			var rubiconsizecode = (typeof varsobj["rubiconsizecode"] === "string") ? varsobj["rubiconsizecode"] : "";
			var atf = (typeof varsobj["atf"] === "string") ? varsobj["atf"] : "";
			var rubiconsiteid = "";
			var rubiconzoneid = "";
			var special_positions = ["HOMESPONSOR1","HOMESPONSOR2","BODY","BODY1","BODY2","MIDDLE1","MIDDLE3"];
			if (posupper === "X51") { return false; }
			if (sitetype === "MOBILE"){
				rubiconsiteid='208654'; // mobile
				if (possizex == "320x50") {
					rubiconzoneid = "1027174"; //ATF 320x50
				} else {
					rubiconzoneid = "1027176"; //BTF 320x250
				}
			} else {
				rubiconsiteid = "121460"; // desktop
				if (special_positions.indexOf(posupper) >= 0){
					rubiconzoneid = (PGVARS.requesttype == "FRONTPAGE") ? '575220' : '575222'; //STICKY
				} else {
					if (atf === true) {
						rubiconzoneid = "575222"; //ATF
					} else {
						rubiconzoneid = "575224"; //BTF
					}
				}
			}

			// -------- Create & return rubicon object -------
			var bidder;
			if (PGLIB.all.adinit.prebidVersion === "1.x") {
				bidder = "rubicon";
			} else {
				bidder = "rubiconLite";
			}
			var obj = {
				bidder: bidder,
				params: {
					accountId: '11604',
					siteId: rubiconsiteid,
					zoneId: rubiconzoneid,
					sizes: rubiconsizecode
				}
			};
			return obj;
		}
	},
	"triplelift": {
		enabled: true,
		getObj: function(varsobj) {
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			if (posupper !== "X04") { return false; }
			var obj = {
				bidder: 'triplelift',
				params: {
					inventoryCode: 'pg_article_sub_mobile'
				}
			};
			return obj;
		}
		// QUESTION: Shouldn't the Blade have its own inventoryCode?
	},
	"aardvark": {
		enabled: false,
		getObj: function(varsobj) {
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			var requesttype = PGVARS.requesttype;
			var param1 = PGVARS.param1;
			var cats = [];
			var sectionpath = PGVARS.sectionpath;
			if (posupper === "X51") { return false; }
			if (requesttype === "FRONTPAGE") {
				cats.push("News");
			} else {
				if (sectionpath === "business/tech-news") {
					cats.push("Technology");
				} else if (sectionpath === "life/travel") {
					cats.push("Travel");
				} else {
					switch (param1) {
						case "news":
						case "local":
							cats.push("News");
							break;
						case "sports":
							cats.push("Sports");
							break;
						case "business":
							cats.push("Business");
							break;
						case "ae":
							cats.push("Entertainment")
							break;
						
					}
				}
			}
			var obj = {
				bidder: 'aardvark',
				params: {
					ai: '',
					sc: '',
					categories: cats
				}
			};
			return obj;
		}
	},
	"sovrn": {
		enabled: true,
		getObj: function(varsobj) {
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			var requesttype = PGVARS.requesttype;
			var param1 = PGVARS.param1;
			var tagids = [];
			switch (posupper) {
				case "TOP":
				case "TOP1":
					tagids.push("582550"); // Blade_728x90
					break;
				case "MIDDLE":
				case "MIDDLE1":
				case "MIDDLE2":
				case "MIDDLE3":
					tagids.push("582551"); // Blade_300x250
					// tagids.push("582552"); 
					// Blade_300x600 *** Removing 1/9/2018 per BR
					break;
				case "X01":
				case "X02":
					tagids.push("582556"); // BladeMOBILE_320x50
					break;
				case "X03":
				case "X04":
					tagids.push("582555"); // BladeMOBILE_300x250
					break;
				default:
					return false;
			}
			var objs = [];
			$.each(tagids, function(i, value) {
				objs.push({
					bidder: "sovrn",
					params: {
						"tagid": value
					}
				})
			});
			return objs;
		}
	},
	"justpremium": {
		enabled: false,
		getObj: function(varsobj) {
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			if (posupper !== "X51") { return false; }
			var objs = [];
			// **** Note: zone may be different for Blade
			objs.push({
				bidder: "justpremium",
				params: {
					zone: 42685,
					allow: ["wp"]
				}
			});
			return objs;
		}
	},
	"ix": {
		enabled: true,
		getObj: function(varsobj) {
			var posupper = (typeof varsobj["posupper"] === "string") ? varsobj["posupper"] : "";
			var sizearr = varsobj["sizearr"];
			var objs = [];
			var siteid;
			switch (posupper) {
				case "TOP":
				case "TOP1":
					siteid = "277290"; // 728x90-D-ATF
					break;
				case "MIDDLE":
					siteid = "277289"; // 300x250/300x600-D-ATF
					break;
				case "MIDDLE1":
				case "MIDDLE2":
				case "MIDDLE3":
					siteid = "277291"; // 300x250/300x600-D-BTF
					break;
				case "X01":
					siteid = "277293"; // 320x50-M-ATF
					break;
				case "X01":
					siteid = "277295"; // 320x50-M-BTF
					break;
				case "X03":
				case "X04":
					siteid = "277294"; // 300x250-M-BTF
					break;
				default:
					siteid = false;
			}
			console.log("siteid: " + siteid);
			if (typeof siteid === "string") {
				var validsizes = ["300x250", "300x600", "728x90", "320x50"];
				var objs = [];
				$.each(sizearr, function(i, size) {
					var sizestr = size.join("x");
					if (validsizes.indexOf(sizestr) >= 0) {
						objs.push({
							bidder: "ix",
							params: {
								siteId: siteid,
								size: size
							}
						});
					}
				});
				return objs;
			} else {
				return false;
			}
		}
	}
}

if (PGVARS.sitecode === "DEV") {
	// window.ADSYSTEMCONFIG.prebidnetworks.justpremium.enabled = false;
	window.ADSYSTEMCONFIG.prebidnetworks.ix.enabled = true;
}

window.ADSYSTEMCONFIG = window.ADSYSTEMCONFIG || {};

window.ADSYSTEMCONFIG.positions = {
   "BUTTON": {
		"sizes":[[88,33]],
		"sitetype": "desktop"
	},
	"BUTTON1": {
		"sizes":[[191,90]],
		"sitetype": "desktop"
	},
	"TOP": {
		"sizes":[[728,90]],
		"adnetworks":true,
		"refresh":true,
		"atf":true,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "728x90",
		"adnotice": true
	},
	"TOP1": {
		"sizes":[[728,90],[960,250]],
		"adnetworks":true,
		"refresh":true,
		"atf":true,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "728x90",
		"adnotice": true
	},
	"TOP2": {
		"sizes":[[120,90]],
		"sitetype": "desktop"
	},
	"TOP3": {
		"sizes":[[1,1]],
		"sitetype": "desktop"
	},
	"MIDDLE": {
		"sizes":[[300,250],[300,600]],
		"adnetworks":true,
		"refresh":true,
		"atf":true,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnotice": true
	},
	"MIDDLE1": {
		"sizes":[[300,250],[300,600]],
		"adnetworks":true,
		"refresh":true,
		"atf":false,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnotice": true
	},
	"MIDDLE2": {
		"sizes":[[300,250],[300,600]],
		"adnetworks":true,
		"refresh":true,
		"atf":false,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnotice": true
	},
	"MIDDLE3": {
		"sizes":[[300,250],[300,600]],
		"adnetworks":true,
		"refresh":true,
		"atf":false,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnotice": true
	},
	"MIDDLE4": {
		"sizes":[[300,250]],
		"adnetworks":true,
		"refresh":true,
		"atf":false,
		"sticky":false,
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnotice": true
	},
	"STICKYRAIL": {
		"sizes":[[300,250]],
		"sitetype": "desktop",
		"adnetworks":true,
		"placeholder": "300x250",
		"adnotice": true
	},
	"REGNAGSCREEN": {
		"sizes":[[300,250]],
		"sitetype": "desktop",
		"adnetworks":true
	},
	"CIVICSCIENCE": {
		"sizes":[[300,250]],
		"sitetype": "desktop",
		"adnetworks":true,
		"placeholder": "300x250",
		"refresh": true,
		"adnotice": true,
		"breakpoints": ["xxs", "xs", "sm", "md", "lg", "xl"]
	},
	"BOX1": {
		"sizes":[[300,250]],
		"sitetype": "desktop"
	},
	"BOX2": {
		"sizes":[[245,250]],
		"sitetype": "desktop"
	},
	"RIGHT": {
		"sizes":[[160,600]],
		"sitetype": "desktop",
		"adnetworks":true
	},
	"TOPRIGHT": {
		"sizes":[[1,1]],
		"sitetype": "desktop"
	},
	"BOTTOM": {
		"sizes":[[728,90]],
		"sitetype": "desktop",
		"adnetworks":true
	},
	"POSITION1": {
		"sizes":[[300,100]],
		"sitetype": "desktop"
	},
	"POSITION2": {
		"sizes":[[300,100]],
		"sitetype": "desktop"
	},
	"POSITION3": {
		"sizes":[[300,100]],
		"sitetype": "desktop"
	},
	"1": {
		"sizes":[[320,50]],
		"sitetype": "desktop"
	},
	"2": {
		"sizes":[[320,50]],
		"sitetype": "desktop"
	},
	"3": {
		"sizes":[[320,50]],
		"sitetype": "desktop"
	},
	"X51": {
		"sizes":[[1,1]],
		"adnetworks":false,
		"refresh":false,
		"atf":true,
		"sticky":true,
		"sitetype": "desktop"
	},
	"ADHESION": {
		"sizes":[[1,1]],
		"adnetworks":false,
		"refresh":false,
		"atf":true,
		"sticky":true,
		"sitetype": "desktop",
		"adnotice": true
	},
	"FLEXBANNER": {
		"sizes":[[910,150]],
		"sitetype": "desktop",
		"placeholder": "910x150"
	},
	"FLEXBANNER2": {
		"sizes":[[910,150]],
		"sitetype": "desktop",
		"placeholder": "910x150",
		"collapse": "before"
	},
	"SUPERPROMO": {
		"sizes":[[1920,230]],
		"sitetype": "desktop",
		"placeholder": "1920x230"
	},
	"NEWSSLIDE": {
		"sizes":[[964,768]],
		"adnetworks":false,
		"sitetype": "desktop",
		"collapse": "before",
		"breakpoints": ["md","lg","xl"]
	},
	"NEWSSLIDEMOBILE": {
		"sizes":[[320,570]],
		"sizesalt": [[375,668]],
		"adnetworks":false,
		"sitetype": "mobile",
		"collapse": "before"
	},
	"X01": {
		"sizes":[[320,50]],
		"sitetype": "mobile",
		"adnetworks":true,
		"adnotice": true,
		"atf": true
	},
	"X02": {
		"sizes":[[320,50],[300,250]],
		"sitetype": "mobile",
		"adnetworks":true,
		"placeholder": "x02",
		"adnotice": true
	},
	"X03": {
		"sizes":[[300,250]],
		"sitetype": "mobile",
		"adnetworks":true,
		"placeholder": "300x204",
		"adnotice": true
	},
	"X04": {
		"sizes":[[1,1],[300,250]],
		"sitetype": "mobile",
		"adnetworks":true,
		"placeholder": "300x204",
		"adnotice": true
	},
	"X05": {
		"sizes":[[300,250]],
		"sitetype": "mobile",
		"adnetworks":true,
		"placeholder": "300x204",
		"adnotice": true
	},
	"X06": {
		"sizes":[[300,250]],
		"sitetype": "mobile",
		"adnetworks":true,
		"placeholder": "300x250"
	},
	"X07": {
		"sizes":[[320,50]],
		"sitetype": "mobile",
		"placeholder": "320x50",
		"adnetworks": false,
		"refresh": false
	},
	"X08": {
		"sizes":[[320,53]],
		"sitetype": "mobile"
	},
	"X10": {
		"sizes":[[1,1]],
		"sitetype": "desktop"  
	},
	"X11": {
		"sizes":[[300,250]],
		"sitetype": "mobile"  
	},
	"X15": {
		"sizes":[[1,1]],
		"sitetype": "mobile"  
	},
	"NATIVESTORIES": {
		"sizes": "fluid",
		"sitetype": "mobile"
	},
	"TBADHESION": {
		"sizes":[[1,1]],
		"sitetype": "desktop"
	},
	"TBADHESIONMOBILE": {
		"sizes":[[1,1]],
		"sitetype": "mobile"
	},
	"TBADHESIONTEST": {
		"sizes":[[1,1]],
		"adnetworks":false,
		"refresh":false,
		"atf":true,
		"sticky":true,
		"sitetype": "desktop"
	},
	"TBADHESIONMOBILETEST": {
		"sizes":[[1,1]],
		"adnetworks":false,
		"refresh":false,
		"atf":true,
		"sticky":true,
		"sitetype": "mobile"
	},
	"1X1": {
	   "sizes":[[1,1]],
	   "sitetype": "desktop"
	},
	"1X1M": {
		"sizes":[[1,1]],
		"sitetype": "mobile"
	},
	"NAVSPONSOR": {
		"sizes": [[250,50]],
		"sitetype": "desktop",
		"breakpoints": ["xxs", "xs", "sm", "md", "lg", "xl"],
		"placeholder": "250x50"
	},
	"BODYAD1": {
		"sizes": [[728, 90]],
		"sitetype": "all",
		"breakpoints": ["sm", "md", "lg", "xl"],
		"placeholder": "bodyad",
		"adnotice": true,
		"sizemapping": false,
		"customsizes": {
			"sm": [[300, 250]],
			"md": [[300, 250]]
		}
	}, // test
	"BODYAD2": {
		"sizes": [[728,90]],
		"sitetype": "all",
		"breakpoints": ["xxs", "xs", "sm", "md", "lg", "xl"],
		"adnotice": true,
		"placeholder": "bodyad2",
		"sizemapping": false,
		"customsizes": {
			"xxs": [[300, 250],[320, 50]],
			"xs": [[300, 250],[320, 50]]
		}
	},
	"BODYAD3": {
		"sizes": [[300,250],[320, 50]],
		"sitetype": "all",
		"breakpoints": ["xxs", "xs", "sm", "md", "lg", "xl"],
		"placeholder": "bodyad",
		"adnotice": true,
		"sizemapping": false,
		"customsizes": {
			"sm": [[300, 250]],
			"md": [[300, 250]],
			"lg": [[728, 90]],
			"xl": [[728, 90]]
		}
	},
	"HOMESPONSOR2": {
		"sizes": [[728, 90]],
		"sitetype": "desktop",
		"placeholder": "728x90",
		"adnetworks":false,
		"refresh":false,
		"adnotice": true
	},
	"VIDEOPAGEBOX1": {
		"sizes": [[300, 250]],
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnetworks": true,
		"refresh": true,
		"adnotice": false,
		"companion": true
	},
	"VIDEOPAGEBOX2": {
		"sizes": [[300, 250]],
		"sitetype": "desktop",
		"placeholder": "300x250",
		"adnetworks": true,
		"refresh": true,
		"adnotice": true
	},
	"ADVENTIVETESTREVEAL": {
		"sizes": [[1,1]],
		"sitetype": "mobile"
	},
	"ADVENTIVETESTPARALAX": {
		"sizes": [[300,250]],
		"sitetype": "mobile"
	},
	"REVEAL": {
		"sizes": [[1,1],[300,250]],
		"sitetype": "mobile",
		"placeholder": "300x204",
		"adnetworks": true,
		"adnotice": true
	}
};

// For testing purposes only right now. Adding
// "sizemapping": true to position settings to
// enable -AF, 10/3/2018
window.ADSYSTEMCONFIG.sizemappings = {
	"TOP": {
		"0x0": [300, 250],
		"750x400": [728, 90]
	},
	"BODYAD1": {
		"0x0": [300, 250],
		"1420x300": [728, 90]
	},
	"BODYAD2": {
		"0x0": [300, 250],
		"768x300": [728, 90]
	},
	"BODYAD3": {
		"0x0": [300, 250],
		"1420x300": [728, 90]
	}
};

window.ADSYSTEMCONFIG.aps = {
	"pubID": "c0985684-5ce7-488c-b275-348d02c8d34e"
};

window.ADSYSTEMCONFIG.beforeInitFunction = function() {
	ADSYSTEMCONFIG.authorslug = "";
	// Make sure pgStoryZeroJSON exists
	if (typeof pgStoryZeroJSON !== "object"|| pgStoryZeroJSON === null) { return false; }
	// Make sure pgStoryZeroJSON["articles"]["0"]["author"] is set
	if (!(PGFNS.issetmulti(pgStoryZeroJSON, "articles", "0", "author"))) { return false; }
	var author = pgStoryZeroJSON.articles[0].author;
	var bylinefull;
	if (typeof author === "string" && author !== "") {
		bylinefull = author.replace("By ","") + "";
	} else {
		bylinefull = "";
	}
	var byline = bylinefull.trim();
	var bylinearray = byline.split(/\s?\/\s?(.+$)/);
	var bylinestr1 = bylinearray[0].trim();
	var bylinestr2 = (typeof bylinearray[1] !== "undefined") ? bylinearray[1].trim() : "";
	// ------- Format for API ------
	var apiorg;
	var apiauthor;
	if (bylinestr2 === "") {
		apiorg = bylinestr1.replace(/[^a-zA-Z]/g, "");
		apiauthor = "default";
	} else {
		apiorg = bylinestr2.replace(/[^a-zA-Z]/g, "");
		apiauthor = bylinestr1.replace(/[^a-zA-Z]/g, "");
	}
	// var data ={};
	// apiorg = apiorg.toLowerCase();
	apiauthor = apiauthor.toLowerCase();
	ADSYSTEMCONFIG.authorslug = apiauthor;
	// data['apiorg'] = apiorg;
	// data['apiauthor'] = apiauthor;
	// return data;
};


if (PGVARS.sitecode === "DEV") {
	window.ADSYSTEMCONFIG.positions.X51.adnetworks = true;
}

if (PGVARS.site === "blade" && PGVARS.requesttype === "FRONTPAGE") {
	ADSYSTEMCONFIG.positions.MIDDLE.sizes = [[300,250]];
	ADSYSTEMCONFIG.positions.MIDDLE3.sizes = [[300,250]];
}
if (PGVARS.site === "pg" && PGVARS.requesttype === "STORY") {
	ADSYSTEMCONFIG.positions.REVEAL.sizes = [[1,1],[300,250],[300,600]];
	ADSYSTEMCONFIG.positions.X03.sizes = [[300,250],[300,600]];
}
if (PGVARS.site === "pg" && PGVARS.sitecode === "DEV") {
	ADSYSTEMCONFIG.positions.TOP.sizes = [[728,90],[960,250]];
}
if (PGVARS.site === "pg") {
	// --- Concert support (VoxMedia) ---
	ADSYSTEMCONFIG.positions.X02.sizes.push([325,204],[325,508]);
	ADSYSTEMCONFIG.positions.X03.sizes.push([325,204],[325,508]);
	ADSYSTEMCONFIG.positions.X04.sizes.push([325,204],[325,508]);
	ADSYSTEMCONFIG.positions.X05.sizes.push([325,204],[325,508]);
	ADSYSTEMCONFIG.positions.REVEAL.sizes.push([325,204],[325,508]);
}


// 325x508
/*
if (PGVARS.site === "pg") {
	(function() {
		// This can be removed after 2/11/2019
		var thesections = ["sports", "ae", "local", "news", "opinion", "life", "business"];
		var param1 = PGVARS.param1;
		if (thesections.indexOf(param1) >= 0) {
			window.ADSYSTEMCONFIG.positions.MIDDLE2.refresh = false;
			DEBUGLOGR.log("DFPADS", "Disabling Middle2 for this special page.");
		}
	})();
}
*/

// **********************************
//    pgevoke.js.all_breakpoints v5
// **********************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.breakpoints = (function() {
	var debuglogkey = "BREAKPOINTS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var $;
	function importJQuery() {
		if (typeof ADSYSTEMCONFIG === "object" && ADSYSTEMCONFIG !== null && typeof ADSYSTEMCONFIG.jQuery === "string") {
			$ = window[ADSYSTEMCONFIG.jQuery];
		} else {
			$ = window.jQuery;
		}
	}

	function getResponsiveSize() {
		if (typeof document === "undefined" || typeof document.body === "undefined") { return "loading"; }
		var bodyaftersize = window.getComputedStyle(document.body,':after').getPropertyValue('content');
		var size;
		if (bodyaftersize.indexOf("size-xs") !=-1) { size = "xs"; }
		else if (bodyaftersize.indexOf("size-sm") !=-1) { size = "sm"; }
		else if (bodyaftersize.indexOf("size-md") !=-1) { size = "md"; }
		else if (bodyaftersize.indexOf("size-lg") !=-1) { size = "lg"; }
		else if (bodyaftersize.indexOf("size-xl") !=-1) { size = "xl"; }
		else if (bodyaftersize.indexOf("size-fixed") != -1) { size = "fixed"; }
		else { size = "unknown" }
		return size;
	};

	return {
		mostrecent: "",
		groups: {
			"mobile": ["xss", "xs"],
			"desktop": ["sm", "md", "lg", "xl"]
		},
		init: function() {
			importJQuery();
			$(document).ready(function() {
				var currentbreakpoint = getResponsiveSize();
				PGLIB.all.breakpoints.mostrecent = currentbreakpoint;
				PGLIB.all.breakpoints.updateBodyClass(currentbreakpoint);
				$(window).resize( function() {
					var newbreakpoint = getResponsiveSize();
					var mostrecentbreakpoint = PGLIB.all.breakpoints.mostrecent;
					if (newbreakpoint !== mostrecentbreakpoint) {
						var bps = PGLIB.all.breakpoints.groups;
						var groupchange = "none";
						var subgroupchange = "none";
						var newbreakpointgroup = "";
						if ($.inArray(newbreakpoint, bps.mobile) >= 0) {
							newbreakpointgroup = "mobile";
						} else {
							newbreakpointgroup = "desktop";
						}
						if ($.inArray(mostrecentbreakpoint, bps.mobile) >= 0 && $.inArray(newbreakpoint, bps.desktop) >= 0) {
							groupchange = "mobile-to-desktop";
						} else if ($.inArray(mostrecentbreakpoint, bps.desktop) >= 0 && $.inArray(newbreakpoint, bps.mobile) >= 0) {
							groupchange = "desktop-to-mobile";
						}
						if (groupchange === "none") {
							if ($.inArray(newbreakpoint, bps.desktop) >= 0) {
								if (mostrecentbreakpoint === "sm") {
									subgroupchange = "to-desktop-md+";
								} else if (newbreakpoint === "sm") {
									subgroupchange = "from-desktop-md+";
								}
							}
						}
						PGLIB.all.breakpoints.mostrecent = newbreakpoint;
						PGLIB.all.breakpoints.updateBodyClass(newbreakpoint, mostrecentbreakpoint);
						$(document).trigger("breakpointchanged", [{
							oldbreakpoint: mostrecentbreakpoint,
							newbreakpoint: newbreakpoint,
							newbreakpointgroup: newbreakpointgroup,
							groupchange: groupchange,
							subgroupchange: subgroupchange
						}]);
					}
				});
			});
			$(document).on("breakpointchanged", function(e, data) {
				var newbreakpoint = data.newbreakpoint;
				var oldbreakpoint = data.oldbreakpoint;
				// debuglog("Breakpoint changed: " + oldbreakpoint + "->" + newbreakpoint);
				debuglog("Breakpoint changed:");
				debuglog(data);
				// pgBigStory.update(newbreakpoint);
			});
		},
		getCurrent: function() {
			return getResponsiveSize();
		},
		getCurrentGroup: function() {
			var currentbp = getResponsiveSize();
			var bps = PGLIB.all.breakpoints.groups;
			if ($.inArray(currentbp, bps.mobile) >= 0) {
				return "mobile";
			} else if ($.inArray(currentbp, bps.desktop) >= 0) {
				return "desktop";
			} else {
				return "unknown";
			}
		},
		updateBodyClass: function(newbreakpoint, oldbreakpoint) {
			if (typeof oldbreakpoint === "string") {
				$("body").removeClass("pg-breakpoint-" + oldbreakpoint);	
			}
			$("body").addClass("pg-breakpoint-" + newbreakpoint);
		}
	};
})();
window.PGLIB.all.breakpoints.init();



// ****************************
//   pgevoke.js.all_pgpageapi
// ****************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.pgpageapi = (function() {
	var debuglogkey = "PGPAGEAPI";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		ready: false,
		init: function() {
			$(document).on("pgpageapi:ready", function(event) {
				$("body").addClass("pg-pgpageapiready");
			});
			$(document).ready(function() {
				var endpoint = "";
				if (typeof PGVARS !== "object" || typeof PGVARS.requesttype !== "string") { return; }
				switch (PGVARS.requesttype.toUpperCase()) {
					case "FRONTPAGE":
						// var PGPAGEAPIBASEURL = "https://api2.post-gazette.com";
						if (typeof PGVARS.disastermodefp === "boolean" && PGVARS.disastermodefp) {
							endpoint = PGVARS.pgurl + "/api2?code=home";
							$("body").addClass("pg-disastermode");
						} else {
							endpoint = PGAPIBaseURL + "/page/2/home/";	
						}
						break;
					case "SECTION":
						if (typeof PGVARS.disastermode === "boolean" && PGVARS.disastermode && PGVARS.param2 === "") {
							endpoint = PGVARS.pgurl + "/api2?code=section&sectionname=" + PGVARS.param1;
							$("body").addClass("pg-disastermode");
						} else {
							endpoint = PGAPIBaseURL + "/page/2/" + PGVARS.sectionseolabel + "/";
						}
						break;
					case "STORY":
					case "STATIC":
					case "PAGE":
						if (typeof PGVARS.disastermode === "boolean" && PGVARS.disastermodefp) {
							endpoint = PGVARS.pgurl + "/api2?code=universal";
							$("body").addClass("pg-disastermode");
						} else {
							endpoint = PGAPIBaseURL + "/story/2/universal/";
						}
						break;
					case "TAG":						
						endpoint = PGAPIBaseURL + "/tag/1/" + PGVARS.sectionseolabel + "/0/";
						break;
				}
				debuglog("Sending AJAX request to " + endpoint);
				$.ajax(endpoint, {
					dataType:"json"
				})
				.done(function(jsondata) {
					debuglog("AJAX Request Successful!");
					pgpageapi = jsondata;
					// debuglog(pgpageapi);
					$(document).ready( function() {
						debuglog("Triggering pgpageapi:ready!");
						$(document).trigger("pgpageapi:ready");	
						PGLIB.all.pgpageapi.ready = true;		
					});
				})
				.fail(function() {
			 	  	debuglog("AJAX Request failed!");
				});		
			});
		}
	};
})();
PGLIB.all.pgpageapi.init();



// ***************************************
//    pgevoke.js.all_androidoneclick 
// ***************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.androidoneclick = (function() {
	var debuglogkey = "ANDROIDONECLICK";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		init: function() {
			window.currentDevice = device.noConflict();
			$(document).ready( function() {
				var userAgent = navigator.userAgent || navigator.vendor || window.opera;
				var theurl = "";
				var $thelink = $(".pg-eeditionlink");
				if (userAgent.includes("Android")) {
					if (PGVARS.site === "pg") {
						theurl = "intent://pg-share.newsslide.com//#Intent;scheme=https;package=com.postgazette.pgnewsslidemobile;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.postgazette.pgnewsslidemobile;end"
					} else if (PGVARS.site === "blade") {
						theurl = "intent://blade-share.newsslide.com//#Intent;scheme=https;package=com.toledoblade.newsslidemobile;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.toledoblade.newsslidemobile;end"

					}
				} else if (currentDevice.ios() || currentDevice.ipad() || currentDevice.iphone() || currentDevice.ipod()) {
					if (PGVARS.site === "pg") {
						theurl = "https://pge.post-gazette.com/pf3/classic";
					} else if (PGVARS.site === "blade" && PGVARS.sitecode !== "LIVE") {
						theurl = "https://eblade.toledoblade.com/pf3/classic";
					}
				}
				if (theurl !== "") {
					$thelink.attr("href", theurl);
				}
			});
		}
	};
})();
window.PGLIB.all.androidoneclick.init();



// ******************************************
//       pgevoke.js.all_stickyheader
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.stickyheader = (function() {
	var debuglogkey = "STICKYHEADER";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var state = "docked";
	var menuselector = ".pgevoke-header";
	var usecustomscrollselector = false;
	var scrollselector = ".pgevoke-pagewrapper";
	var $scrollelement = null;
	var triggerpointoffset = 0;
	var triggerpoint = 70;
	var cachedscrolltop = 0;
	var mobilemenuup = false;
	var isdisabled = false;
	return {
		init: function() {
			$(document).ready( function() {
				debuglog("Initializing");
				var header = $(menuselector);
				var headertop = header.offset().top;
				var headerheight = header.height();
				if (usecustomscrollselector === true) {
					$scrollelement = $(scrollselector);
				} else {
					$scrollelement = $(window);
				}
				$scrollelement.scroll( function() {
					PGLIB.all.stickyheader.update();
				});
				$scrollelement.resize( function() {
					PGLIB.all.stickyheader.update();
				});
				PGLIB.all.stickyheader.updatePGLogoClickability();
				$(document).on("breakpointchanged", function(e, data) {
					PGLIB.all.stickyheader.updatePGLogoClickability();
				});
			});

		},
		disable: function() {
			isdisabled = true;
			$("body").removeClass("pgevoke-stickyheader");
		},
		reenable: function() {
			isdisabled = false;
		},
		update: function() {
			if (isdisabled) { return; }
			var scrolltop = $scrollelement.scrollTop();
			var lastscrolltop = cachedscrolltop;
			cachedscrolltop = scrolltop;
			if (scrolltop >= triggerpoint) {
				if (state == "docked") {
					state = "stuck";
					$("body").addClass("pgevoke-stickyheader");
				}
			} else {
				if (state == "stuck") {
					state = "docked";
					$("body").removeClass("pgevoke-stickyheader");
				}
			}
			if (scrolltop < lastscrolltop) {
					$("body").removeClass("pg-lastscrolldirection-down");
					$("body").addClass("pg-lastscrolldirection-up");
			} else if (scrolltop > lastscrolltop) {
				$("body").removeClass("pg-lastscrolldirection-up");
				$("body").addClass("pg-lastscrolldirection-down");
			}
			if (PGVARS.requesttype === "STORY" && !($("body").hasClass("pgevoke-slidemenuout"))) {
				var storyarea = PGLIB.story.transporter.storywaypoints.getCurrentStoryArea();
				/* if (storyarea === "top") {
					PGLIB.all.stickyheader.set("normal");
				} else if (scrolltop > lastscrolltop) {
					PGLIB.all.stickyheader.set("socialshare");
					// debuglog(lastscrolltop + "->" + scrolltop + " (DOWN)");
				} else if (scrolltop < lastscrolltop) {
					PGLIB.all.stickyheader.set("normal");
					// debuglog(lastscrolltop + "->" + scrolltop + " (UP)");
				} else if (scrolltop === lastscrolltop) {
					// debuglog(lastscrolltop + "->" + scrolltop + " (SAME)");
				} */
				if (storyarea === "top") {
					PGLIB.all.stickyheader.set("normal");
				} else {
					PGLIB.all.stickyheader.set("socialshare");
				}
			}
		},
		set: function(theheader) {
			if (theheader === "normal") {
				$("body").removeClass("pgevoke-swappedheaders");
			} else if (theheader === "socialshare") {
				$("body").addClass("pgevoke-swappedheaders");
			}
		},
		updatePGLogoClickability: function() {
			var breakpoint = getResponsiveSize();
			var breakpointgroup = PGLIB.all.breakpoints.getCurrentGroup();
			var selector = ".pgevoke-header-row2-middle-pgicon > a";
			// if (breakpointgroup === "mobile" || breakpoint === "sm") {
			$(selector).attr("href", "/");
			// } else {
			//	$(selector).removeAttr("href");
			//}
		},
	};
})();
window.PGLIB.all.stickyheader.init();



// ******************************************
//       pgevoke.js.all_slidemenu
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.slidemenu = (function() {
	var debuglogkey = "SLIDEMENU";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}	
	var state = "in";
	var disabled = false;
	return {
		init: function() {
			$(document).ready( function() {
				debuglog("Initializing");
				// ----- Slide in and out ------
				$(document).on("click",".pgevoke-header-row2-left-menubutton, .pgevoke-socialshareheader-sideicon-menubutton", function() {
					PGLIB.all.slidemenu.toggleState();
				});
				// ----- On click of a slidemenu item -----
				$("ul.pgevoke-slidemenu-sections").on("click",	"> li a", function() {
					var $li = $(this).parent();
					// if ($li.hasClass("pgevoke-slidemenu-expandeditem") == false) {
						// If we are expanding this item, roll up all others
						// $(".pgevoke-slidemenu > ul li").removeClass("pgevoke-slidemenu-expandeditem");
					// }
					$li.toggleClass("pgevoke-slidemenu-expandeditem");
				});
			});
		},
		toggleState: function() {
			if (disabled) { return false; }
			$("body").toggleClass("pgevoke-slidemenuout");					
			// debuglog("yo");
			// PGLIB.all.slidemenu.toggleState();
			state = (state == "in") ? "out" : "in";
			if (state === "in") {
				$("body").removeClass("pgevoke-swappedheaders");
				if (typeof Stickyboxes === "object" && typeof Stickyboxes.updateAll === "function") {
					setTimeout(function() {
						debuglog("Updating Stickyboxes on slidemenu-retracted");
						Stickyboxes.updateAll("slidemenu-retracted");
					}, 500);
				} else {
					debuglog("Stickyboxes.updateAll() not found.");
				}
			}
		},
		disable: function() {
			disabled = true;
			if (state === "out") {
				PGLIB.all.slidemenu.toggleState();
			}
		},
		reenable: function() {
			disabled = false;
		}
	};
})();
window.PGLIB.all.slidemenu.init();



// ******************************************
//       pgevoke.all.subnav_sections
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.subnav_sections = {
	"frontpage": {
		"Blade Rewards": "http://www.bladerewards.com/",
		"Blade Vault": "https://www.thebladevault.com/"
	},
	"news": {
		"News Home": "/news/home/frontpage",
		"Deaths": "/news/deaths",
		"Medical": "/news/medical",
		"Nation": "/news/nation",
		"Religion": "/news/religion",
		"World": "/news/world"
	},
	"local": {
		"Animals": "/local/animals",
		"City": "/local/city",
		"Community Events": "/local/community-events",
		"Courts": "/local/courts",
		"Daily Log": "/local/daily-log",
		"Dogs for Adoption": "/local/dogs-for-adoption",
		"Education": "/local/education",
		"Environment": "/local/environment",
		"Homicides": "/local/homicides",
		"Police Fire ": "/local/police-fire",
		"Politics": "/local/politics",
		"School Closings": "/local/schoolclosing",
		"Suburbs": "/local/suburbs",
		"Transportation": "/local/transportation"
	},
	"sports": {
		"Amateur": "/sports/amateur",
		"BGSU": "/sports/bgsu",
		"Cavaliers": "/sports/cavaliers",
		"College": "/sports/college",
		"Dana Open": "/sports/dana-open",
		"Fishing Report": "/sports/fishing-report",
		"Golf": "/sports/golf",
		"Guardians": "/sports/guardians",
		"High School": "/sports/high-school",
		"Lourdes": "/sports/lourdes",
		"Michigan": "/sports/michigan",
		"Mud Hens": "/sports/mud-hens",
		"Ohio State": "/sports/ohio-state",
		"Olympics": "/sports/olympics",
		"Outdoors": "/sports/outdoors",
		"Owens": "/sports/owens",
		"Pistons": "/sports/pistons",
		"Pro": "/sports/pro",
		"Red Wings": "/sports/redwings",
		"Tigers": "/sports/tigers",
		"UT": "/sports/ut",
		"Walleye": "/sports/walleye"
	},
	"opinion": {
		"Columnists": "/opinion/columnists",
		"Editorial Cartoons": "/opinion/editorial-cartoons",
		"Editorials": "/opinion/editorials",
		"Keith Burris": "/opinion/keithburris",
		"Letters to the Editor": "/opinion/letters-to-the-editor",
		"Submit a Letter": "https://toledoblade.wufoo.com/forms/letters-to-the-editor/"
	},
	"ae": {
		"Art": "/a-e/art",
		"Culture": "/a-e/culture",
		"Food": "/a-e/food",
		"Gardening": "/a-e/gardening",
		"Living": "/a-e/living",
		"Movies": "/a-e/movies",
		"Music, Theater, & Dance": "/a-e/music-theater-dance",
		"Peach Weekender": "/a-e/peach-weekender",
		"Restaurant-Reviews": "/a-e/restaurant-reviews",
		"Toledo Magazine": "/a-e/toledo-magazine",
		"TV &amp; Radio": "/a-e/tv-radio"
	},
	"life": {
	},
	"business": {
		"Agriculture": "/business/agriculture",
		"Automotive": "/business/automotive",
		"Development": "/business/development",
		"Energy": "/business/energy",
		"Labor": "/business/labor",
		"Personal Finance": "/b-partners/personal-finance",
		"Real Estate": "/business/real-estate",
		"Restaurant Inspections": "/business/restaurant-inspections",
		"Retail": "/business/retail",
		"Stock Market": "/business/stock-market",
		"Technology": "/business/technology"
	}
}

// ******************************************
//       pgevoke.all.subnav
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.subnav = (function() {
	var debuglogkey = "SUBNAV";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var sections = PGLIB.all.subnav_sections;
	return {
		state:"up",
		$hovereditem: null,
		hoveredsection: null,
		speed: 150,
		progress: null,
		initOLD: function() {
			if (typeof PGVARS !== "undefined" && PGVARS.sectionid === "header-evoke") {
				debuglog("Skipping subnav for /header-evoke");
				return;
			}
			$(document).ready( function() {
				debuglog("Initializing...");
				var endpoint = PGVARS.pgurl.replace(/^https?:\/\//,"//") + "/ajax?code=subnavevoke";
				$(".pgevoke-header-subnav").load(endpoint, function() {
					$(document).ready( function() {
						debuglog("Done initilaizing");
						$(".pgevoke-header-row2-middle ul li").hoverIntent( PGLIB.all.subnav.onItemHover, PGLIB.all.subnav.onItemMouseOut );
						$(".pgevoke-header-subnav").on("mouseleave", PGLIB.all.subnav.onSubnavMouseLeave);
						$(".pgevoke-header-subnav-closebutton").on("click", PGLIB.all.subnav.onCloseButtonClick);
					});
				});
			});
		},
		init: function() {
			debuglog("initNew() called");
			if (typeof PGVARS.sectionpath !== "undefined" && PGVARS.sectionpath === "header-evoke") {
				debuglog("Skipping subnav for /header-evoke");
				return;
			}
			$(document).on("pgpageapi:ready", function() {
				debuglog("PG Page API ready. Firing.");
				$.each(sections, function(k, val) {
					debuglog("Trying " + k);
					$(".pgevoke-header-subnav").loadAjaxContent({
						"template": "subnav_section",
						"processfunction": "simple",
						"jsondata": {
							"sectionid": k
						}
					});
					// ----- Set re-usable values -----
					var pgpageapikey = (k === "frontpage") ? "home" : k;
					var sectionselector = ".pgevoke-header-subnav-section.pgevoke-parentsection-" + k;
					// ----- Set pageapi key -----
					var realkey = "pgpageapi.subnav-" + pgpageapikey;
					if (PGVARS.requesttype === "FRONTPAGE" && typeof PGVARS.disastermodefp === "boolean" && PGVARS.disastermodefp) {
						realkey = "pgpageapi.newsbox-" + pgpageapikey; 
					} // else if (PGVARS.requesttype !== "FRONTPAGE" && typeof PGVARS.disastermode === "boolean" && PGVARS.disastermode){
					//	realkey = "pgpageapi.newsbox-" + pgpageapikey;
					// }
					// ---- Load left column -----
					debuglog("TRYING realkey " + realkey);
					(function() {
						$(sectionselector + " .pgevoke-header-subnav-left").loadAjaxContent({
							"template": "subnav_section_storyitem",
							"endpoint": realkey,
							"count": 5,
							"start": 1
						});	
					})();
					// ----- Load middle column -----
					(function() {
						$(sectionselector + " .pgevoke-header-subnav-middle").loadAjaxContent({
							"template": "subnav_section_centeritem",
							"endpoint": realkey,
							"count": 1
						});	
					})();
					// ----- Load right column -----
					(function() {
						var subsections = PGLIB.all.subnav.getSubsectionArray(k);
						if (subsections.length === 0) { return false }
						var count, countL,countR;
						count = subsections.length;
						if (count <= 7) {
							countL = count;
							countR = 0;
						} else if (count > 7 && count <= 14) {
							countL = 7;
							countR = count - countL
						} else {
							countL = Math.ceil(subsections.length / 2);
							countR = count - countL;	
						}
						debuglog("k: " + k);
						if (PGVARS.site === "pg" && k === "sports") {
							countL += 1;
							countR -= 1;
						}
						for (var i=0; i<countL; i++) {
							$(sectionselector + " .pgevoke-header-subnav-right-1").loadAjaxContent({
								"template": "subnav_section_sectionitem",
								"processfunction": "simple",
								"jsondata": subsections[i]
							});	
						}
						for (var i=0; i<countR; i++) {
							$(sectionselector + " .pgevoke-header-subnav-right-2").loadAjaxContent({
								"template": "subnav_section_sectionitem",
								"processfunction": "simple",
								"jsondata": subsections[i + countL]
							});	
						}
					})()
				});

				$(".pgevoke-header-row2-middle ul li").hoverIntent( PGLIB.all.subnav.onItemHover, PGLIB.all.subnav.onItemMouseOut );
				$(".pgevoke-header-subnav").on("mouseleave", PGLIB.all.subnav.onSubnavMouseLeave);
				$(".pgevoke-header-subnav-closebutton").on("click", PGLIB.all.subnav.onCloseButtonClick);
				if (PGVARS.istestweb) {
					debuglog("TESTWEB");
					var sd = window.atob("dGVzdHdlYjQ=");
					var re = new RegExp(/(https?:\/\/)www(\.post-gazette\.com.*)$/);
					$("[data-subnav-section] > a, .pgevoke-slidemenu-sections li > a").each(function() {
						var h = $(this).attr("href");
						if (typeof h == "string") {
							$(this).attr("href", h.replace(re, "$1"+window.atob("dGVzdHdlYjQ=")+"$2"));	
						}
					});
				} else {
					debuglog("NOT TESTWEB");
				}
			});
		},
		getSubsectionArray: function(sectionid) {
			if (typeof PGLIB.all.subnav_sections[sectionid] === "undefined") { return []; }
			var subsections;
			subsections = PGLIB.all.subnav_sections[sectionid];
			subsections = Object.keys(subsections).map(function(key, index) {
				return {
					"label": key,
					"link": subsections[key]
				}
			});
			return subsections;
		},
		onItemHover: function() {
			if (PGLIB.all.subnav.state == "down" && $(this) == PGLIB.all.subnav.$hovereditem) {
				debuglog("SUBNAV: Hovered same section that's already down - ignoring.");	
				return;
			}
			PGLIB.all.subnav.$hovereditem = $(this);
			PGLIB.all.subnav.hoveredsection = $(this).attr("data-subnav-section");
			debuglog("SUBNAV: Hovered new section (" + PGLIB.all.subnav.hoveredsection + ")");
			var sectionswithoutsubnav = ["contact-us", "eblade"];
			if (sectionswithoutsubnav.indexOf(PGLIB.all.subnav.hoveredsection) < 0) {
				PGLIB.all.subnav.show(PGLIB.all.subnav.hoveredsection);	
			}
		},
		show: function(thesection) {
			debuglog("SHOW() called for " + thesection + " (state=" + PGLIB.all.subnav.state);
			var animatefadein;
			if (PGLIB.all.subnav.state === "hiding") { // If it's already being hidden
				debuglog("SHOW() is stopping HIDE() animation");
				$(".pgevoke-header-subnav").stop(false,false); // stop hiding animation
				animatefadein = false;
			} else {
				// if it's already up, set it to down
				animatefadein = true;
			}
			PGLIB.all.subnav.state = "showing";
			$(".pgevoke-header-subnav").css("opacity","0"); 
			$(".pgevoke-header-subnav").css("height",""); 
			$(".pgevoke-header-subnav").css("display","block"); // show it, with opacity of 0
			// $(".pgevoke-header-subnav").fadeIn();
			$(".pgevoke-header-subnav-section").css("display","");
			$(".pgevoke-header-subnav-section").filter("[data-subnav-section=" + thesection + "]").css("display","flex");
			if (animatefadein === true) {
				debuglog("SHOW() is animating fade-in");
				$(".pgevoke-header-subnav").animate({ opacity: 1 }, PGLIB.all.subnav.speed, function() {
					debuglog("Done animating fade-in");
					debuglog("*******");
					PGLIB.all.subnav.state = "down";
				});	
			} else {
				debuglog("SHOW() is showing menu without animation");
				debuglog("*******");
				$(".pgevoke-header-subnav").css("opacity","1");	
				PGLIB.all.subnav.state = "down";
			}

			// $(".pgevoke-header-subnav").animate({ height: toggle, opacity: toggle }, 400, function() {
		},
		hide: function() {
			debuglog("HIDE() called.");
			if (PGLIB.all.subnav.state === "showing") {
				debuglog("HIDE() is stopping 'showing' animation");
				$(".pgevoke-header-subnav").stop(false, true);
			}
			PGLIB.all.subnav.state = "hiding";
			debuglog("HIDE() animation starting");
			// height: 0 <-- used to be part of animation
			$(".pgevoke-header-subnav").animate({ opacity: 0 }, PGLIB.all.subnav.speed, function() {
				debuglog("HIDE() animation complete");
				debuglog("*******");
			// $(".pgevoke-header-subnav").slideUp(400, function() {
				$(".pgevoke-header-subnav").css("display","none");
				$(".pgevoke-header-subnav").css("height","");
				$(".pgevoke-header-subnav").css("opacity","");
				$(".pgevoke-header-subnav-section").css("display","");	
				// if (PGLIB.all.subnav.state != "down") { // If a new section wasn't hovered
					PGLIB.all.subnav.state = "up";
				// }
			});
		},
		onItemMouseOut: function() {
			var subnavishovered = $(".pgevoke-header-subnav").is(":hover");
			if (subnavishovered === false) {
				PGLIB.all.subnav.hide();	
			}
		},
		onSubnavMouseLeave: function() {
			var itemishovered = PGLIB.all.subnav.$hovereditem.is(":hover");
			if (itemishovered === false) {
				PGLIB.all.subnav.hide();	
			} else {
				debuglog("BUT THE ITEM IS HOVERED!");
			}
		},
		onCloseButtonClick: function() {
			PGLIB.all.subnav.hide();
		}
	};
})();
window.PGLIB.all.subnav.init();

// ******************************************
//       pgevoke.all.querlysearch
// ******************************************
$(document).ready(function() {
	if (PGVARS.site === "blade") {
		$(document).on("click", ".queryly_search_button", function() {
			window.location.href = "https://www.toledoblade.com/search";
		});
	} else if (PGVARS.site === "pg") {
			if (typeof PGVARS.querylyupdate === "boolean" && PGVARS.querylyupdate) {
				if (typeof queryly === "object" && typeof queryly.init === "function") {
					queryly.init('dbbe02b202bd4aeb', document.querySelectorAll('.pgevoke-pagewrapper, header'), { "uiversion": 1 });
				}  
			} else {
				if (typeof queryly === "object" && typeof queryly.init === "function") {
					queryly.init('dbbe02b202bd4aeb',queryly.jquery('.queryly_search_button'));	
				}	
			}
	}
	// $(".pgevoke-slidemenu .queryly_search_button").on("click", function() {
	//	PGLIB.all.slidemenu.toggleState();
	// });
});


// ******************************************
//        pgevoke.js.all_loginregister
// ******************************************
$(document).ready( function() {
	_PG._listen("pgGigyaStatus", function(ev,status) {
		if (status) {
			$(".stickyright-loggedinuserbuttons").show();
			$(".stickyright-loggedoutuserbuttons").hide();
			// $(".gigyaLoginBtn").parent().hide();
			// $(".gigyaRegisterBtn").parent().hide();
		} else {
			$(".stickyright-loggedinuserbuttons").hide();
			$(".stickyright-loggedoutuserbuttons").show();
			// $(".gigyaLoginBtn").parent().show();
			// $(".gigyaRegisterBtn").parent().show();
		}
	});
	_PG._listen("userBind", function(ev, usr) {
		var subscribedisplay, paidstatus;
		apu = usr.data.activePaidUser;
		if (typeof apu !== "undefined" && apu == "true") {
			subscribedisplay = "none";
			paidstatus = "paid";
		} else {
			subscribedisplay = "block";
			paidstatus = "unpaid";				
		}
		// console.log(">>>>>> PGUser 'bind' event fired! Active Paid User? " + paidstatus);
		$(".stickyright-subscribe-wrapper").css("display", subscribedisplay);
		$(".stickyright-emailprefs").attr("href", "https://" + PGVARS.mydotbaseurl + "/profile/#preferences?utm_source=pg.com&utm_medium=sticky&utm_campaign=newsletter-subscribe&utm_content=" + paidstatus);
	});
});



if (typeof window.PGVARS.piano && window.PGVARS.piano) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.piano = (function() {
		var debuglogkey = "PIANO";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}    
		var THISMODULE;
		function getLocation($this) {
			if (typeof $this !== "object" || $this === null || Array.isArray($this)) { return ""; }
			var $parents = $this.parents();
			var thelocation = "";
			if ($parents.find("pgevoke-header").length > 0) {
				thelocation = "headermenu";
			} else if ($parents.find(".pgevoke-slidemenu").length > 0) {
				thelocation = "slidemenu";
			}
			return thelocation;
		}
		return {
			userobj: {},
			init: function() {
				THISMODULE = this;
				debuglog("init()");
				/*
				_PG._listen("piano:loggedin", function() {
					DEBUGLOGR.log("PIANO", "Logged in");
					THISMODULE.updateLoginButtons();
				});
				_PG._listen("piano:loggedout", function() {
					DEBUGLOGR.log("PIANO", "Logged out");
					THISMODULE.updateLoginButtons();
				});
				*/
				$(document).ready(function() {
					$("body").addClass("pg-piano");	// Should already be there from server-side
				});
				var userinfostring = localStorage.getItem("pgpiano__userinfo");
				debuglog("userinfostring: ");
				debuglog(userinfostring);
				if (typeof userinfostring === "string") {
					try {
						var userinfoobj = JSON.parse(userinfostring);
						debuglog("Found & decoded user object in local storage. Using. "+ userinfostring);
						THISMODULE.updateUserStatus(userinfoobj);
					} catch(e) {
						debuglog("Found user object in local storage, but could not decode");
						debuglog(userinfostring);
						debuglog(e);
					}
				}
				tp = window.tp || [];
				tp.push(["setUsePianoIdUserProvider", true ]);
				tp.push(["init",function() {
					DEBUGLOGR.log("PIANO", "tp.push.init running");
					tp.pianoId.init({
						loggedIn: function(data) {
							DEBUGLOGR.log("PIANO",'user ' + data.user + ' logged in with the following token.');
							DEBUGLOGR.log("PIANO", data.token);
							_PG._trigger("piano:loggedIn", {
								data: data
							});	
							// PGLIB.all.piano.updateLoginButtons();
						},
						loggedInSuccess: function(data) {
							DEBUGLOGR.log("PIANO", "loggedInSuccess");
							_PG._trigger("piano:loggedInSuccess", {
								data: data
							});	
						},
						loginDisplayed: function(data) {
							DEBUGLOGR.log("PIANO", "loginDisplayed");
							_PG._trigger("piano:loginDisplayed", {
								data: data
							});	
						},
						loginFailed: function(data) {
							DEBUGLOGR.log("PIANO", "loginFailed");
							_PG._trigger("piano:loginFailed", {
								data: data
							});	
						},
						loggedOut: function(data) {
							DEBUGLOGR.log("PIANO", "loggedOut");
							// PGLIB.all.piano.updateLoginButtons();
							_PG._trigger("piano:loggedOut", {
								data: data
							});
						},
						registerDisplayed: function(data) {
							DEBUGLOGR.log("PIANO", "registerDisplayed");
							_PG._trigger("piano:registerDisplayed", {
								data: data
							});	
						},
						registrationSuccess: function(data) {
							DEBUGLOGR.log("PIANO", "registrationSuccess");
							_PG._trigger("piano:registrationSuccess", {
								data: data
							});	
						},
						registrationFailed: function(data) {
							DEBUGLOGR.log("PIANO", "registrationFailed");
							_PG._trigger("piano:registrationFailed", {
								data: data
							});	
						},
						profileUpdate: function(data) {
							DEBUGLOGR.log("PIANO", "profileUpdate");
							_PG._trigger("piano:profileUpdate", {
								data: data
							});	
						},
						langChange: function(data) {
							DEBUGLOGR.log("PIANO", "langChange");
							_PG._trigger("piano:langChange", {
								data: data
							});	
						}
					});
					if (_PG.eventer.lookup("accountLoaded").length > 0) {
						DEBUGLOGR.log("PIANO", "Found accountLoaded in eventer");
						if (typeof _PG === "object" && PGFNS.issetmulti(_PG, "user", "info")) {
							THISMODULE.updateUserStatus(_PG.user.info);	
						} 
					} 
					_PG._listen("accountLoaded", function() {
						DEBUGLOGR.log("PIANO", "Heard accountLoaded event");
						if (typeof _PG === "object" && PGFNS.issetmulti(_PG, "user", "info")) {
							THISMODULE.updateUserStatus(_PG.user.info);	
						}
					});
					_PG._listen("autolinkSuccess", function() {
						PGLIB.all.piano.accountLinkSuccessPopup();
					});
				}]);
				$(document).on("click", ".tp-login", function() {
					var $parents = $(this).parents();
					var thelocation = "";
					if ($parents.find("pgevoke-header").length > 0) {
						thelocation = "headermenu";
					} else if ($parents.find(".pgevoke-slidemenu").length > 0) {
						thelocation = "slidemenu";
					}
					DEBUGLOGR.log("PIANO", "loginClicked");
					_PG._trigger("piano:loginClicked", {
						location: thelocation
					});
					tp.pianoId.show({screen:"login"});
				});
				$(document).on("click", ".tp-logout", function() {
					DEBUGLOGR.log("PIANO", "Logout clicked");
					DEBUGLOGR.log("PIANO", $(this).parents());
					var $parents = $(this).parents();
					var thelocation = "";
					if ($parents.find("pgevoke-header").length > 0) {
						thelocation = "headermenu";
					} else if ($parents.find(".pgevoke-slidemenu").length > 0) {
						thelocation = "slidemenu";
					}
					DEBUGLOGR.log("PIANO", "logoutClicked");
					_PG._trigger("piano:logoutClicked", {
						location: thelocation
					});
					tp.pianoId.logout();
				});
				$(document).on("click", ".tp-register", function() {
					DEBUGLOGR.log("PIANO", "registerClicked");
					var $parents = $(this).parents();
					var thelocation = "";
					if ($parents.find("pgevoke-header").length > 0) {
						thelocation = "headermenu";
					} else if ($parents.find(".pgevoke-slidemenu").length > 0) {
						thelocation = "slidemenu";
					}
					_PG._trigger("piano:registerClicked", {
						location: thelocation
					});
					tp.pianoId.show({screen:"register"})
				});
				// Test
				if (typeof PGVARS.piano === "boolean" && PGVARS.piano) {
					/*
					if (PGVARS.site === "pg") {
						debuglog("Setting up Subscribe button binding");
						$(".subscribe-btn").on("click",function() {
							DEBUGLOGR.log("PIANO", "Subscribe clicked");
							var wrapper = "pg-bigdrawer-content";
							PGLIB.all.bigdrawer.show({
								"htmlstring":"<div id='"+wrapper+"'></div>",
								closebutton: true
							});
							tp.offer.show({
							   offerId: "OF4JHMI0O7GU",
							   templateId: "OT6IS8L2QLYF",
							   displayMode: "inline",
							   containerSelector: "#"+wrapper
							});
						});
					} else */
					if (PGVARS.site === "blade") {
						/*
						debuglog("Setting up Subscribe button binding");
						$(".subscribe-btn").on("click",function() {
							DEBUGLOGR.log("PIANO", "Subscribe clicked");
							var wrapper = "pg-bigdrawer-content";
							PGLIB.all.bigdrawer.show({
								"htmlstring":"<div id='"+wrapper+"'></div>",
								closebutton: true
							});
							tp.offer.show({
							   offerId: "OF4SUSUJFS8I",
							   templateId: "OTYLIUGEOZKT",
							   displayMode: "inline",
							   containerSelector: "#"+wrapper
							});
						});
						*/
					}
				} else {
					debuglog("PIANO is off");
					debuglog(typeof PGVARS.piano);
				}
			},
			switchLoginButtons: function() {
				THISMODULE.updateLoginButtons;
				// backwards compatibility, can remove after making sure Nate's not using -AF, 6/26/2020
			},
			updateUserStatus: function(obj) {
				debuglog("updateUserStatus() called");
				if (typeof obj !== "object" || obj === null || Array.isArray(obj)) { return false; };
				debuglog("updateUserStatus() passed checks");
				debuglog(obj);
				try {
					var objstr = JSON.stringify(obj);
					debuglog("Writing string: " + objstr);
					localStorage.setItem("pgpiano__userinfo" , objstr);	 
				} catch(e) {
					debuglog("updateUserStatus(): failed to stringify obj");
					debuglog(obj);
				}
				THISMODULE.userobj = obj;
				if (typeof obj.loggedIn === "boolean" && obj.loggedIn) {
					$("body").addClass("pg-user-loggedin");
					if (typeof obj.paid ===  "boolean" && obj.paid) {
						$("body").addClass("pg-user-paid");
					} else {
						$("body").removeClass("pg-user-paid");
						THISMODULE.spotImLogout();
					}
				} else {
					$("body").removeClass("pg-user-loggedin");
					$("body").removeClass("pg-user-paid");
					THISMODULE.spotImLogout();
				}
				$("body").removeClass("pg-user-checkingstatus");
				$(document).trigger("piano:userStatusUpdated");
			},
			updateLoginButtons: function() {
				debuglog("updateLoginButtons() called");
				var uservalid = tp.pianoId.isUserValid();
				var userpaid = PGFNS.isUserPaid();
				debuglog("userpaid? " + userpaid.toString());
				$(".logged-in-only").each(function() {
					$(this).css("display", (uservalid ? "block" : "none"));
				});
				$(".logged-out-only").each(function() {
					$(this).css("display", (uservalid ? "none" : "block"));
				});
				$(".unpaid-only").each(function() {
					$(this).css("display", (userpaid ? "none" : "block"));
				});            
			},
			spotImLogout: function() {
				if (PGVARS.requesttype === "STORY" && PGFNS.issetmulti(PGLIB, "storycomments", "logout")) {
					window.PGLIB.storycomments.logout();
				}
			},			
			accountLinkSuccessPopup: function() {
				var sitename;
				if (PGVARS.site === "pg") {
					sitename === "PG";
				} else if (PGVARS.site === "blade") {
					sitename = "Blade";
				}
				var content = "Thank you for signing into your " + sitename + " account. Your digital subscription has been activated.";
				$.magnificPopup.close();
				$.magnificPopup.open({
	        		items: {
	        			src: '<div class="pg-infomodal"><div class="pg-infomodal-content">' + content + '</div><button type="button" class="pg-infomodal-okbutton" onClick="$.magnificPopup.close();">OK</button></div>',
	        			type: "inline",
	        		}
	        	});
			}
		}
	})();
	PGLIB.all.piano.init();
}

if (PGVARS.site === "blade" && PGVARS.sitecode !== "LIVE") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.gns = (function() {
		var debuglogkey = "GNS";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}    
		var THISMODULE;
		var gns_type = "";
		var pendingitems = [
			"accountLoaded",
			"timestamps",
			"gns_type",
			"meterExpired",
			"meterExpired",
			"meterActive"
		];
		var localstoragekey = "gns__ts";
		var timestamps = {};
		var events = [];
		var alreadyinitialized = false;
		var userinfo = {};
		function addEvent(event) {
			events.push(event);
			debuglog("Added event: " + event);
			debuglog(events);
			debuglog(pendingitems);
		}
		function countInstancces(thearray, item) {
			return thearray.filter((v) => (v === item)).length;
		}
		function removePendingItems(item, docheck = false) {
			var count = countInstances(pendingitems, item);
			for (i=0; i++; i<count) {
				removePendingItem(item, false); // Don't do the check every time
			}
			if (docheck) {
				THISMODULE.checkIfReadyToInit();	
			}
		}
		function removePendingItem(item, docheck = false) {
			if (pendingitems.indexOf(item) >= 0) {
				pendingitems.splice(pendingitems.indexOf(item), 1);	
			}
			if (docheck) {
				THISMODULE.checkIfReadyToInit();	
			}
			return true;
		}
		function removeAllPendingItems(docheck = false) {
			pendingitems = [];
			if (docheck) {
				THISMODULE.checkIfReadyToInit();	
			}
			return true;
		}
		return {
			init: function() {
				if (PGVARS.usegns !== true) {
					debuglog("GNS is DISABLED. Exiting.");
					return false; 
				} else {
					debuglog("GNS is ENABLED");
				}
				THISMODULE = this;
				debuglog("init() called v6");
				window.tp = window.tp || [];
				debuglog("GNSPIANO: TP: ");
				debuglog(window.tp);
				window.tp.push(["addHandler", "meterActive", function(meterData) {
				   console.log("GNSPIANO: You've seen " + meterData.views
				       + " out of " + meterData.maxViews
				       + " free articles. You have" + meterData.viewsLeft
				       + " articles left."
					);
				    addEvent("meterActive");
				    removePendingItem("meterActive");
				    removePendingItems("meterExpired"); // Remove both if present
				    const theevent = new Event("meterCallbackEventDone");
					document.dispatchEvent(theevent);
				}]);
				window.tp.push(["addHandler", "meterExpired", function(meterData) {
					debuglog("GNSPIANO: Meter Expired!");
					addEvent("meterExpired");
					removePendingItem("meterExpired");
					const theevent = new Event("meterCallbackEventDone");
					document.dispatchEvent(theevent);
				}]);
				document.addEventListener("gns_type", function(e) {
    				debuglog("HEARD 'gns_type' EVENT!");
    				debuglog(e);
    				addEvent("gns_type");
    				if (typeof e.detail === "object" && !Array.isArray(e.detail) && typeof e.detail.type === "string") {
    					gns_type = e.detail.type;
    					debuglog("gns_type:");
    					debuglog(gns_type);
    				} else {
    					debuglog("Problem with e.detail. Can't set gns_type.");
    				}
    				removePendingItem("gns_type");
    				const theevent = new Event("gns_type_set");
    				document.dispatchEvent(theevent);
    				addEvent("gns_type_set");
    				// THISMODULE.onGNSType();
  				});
  				if (typeof _PG === "object" && PGFNS.issetmulti(_PG, "user", "info")) {
					THISMODULE.onAccountLoaded()
				} else {
					_PG._listen("accountLoaded", function() {
						debuglog("Heard accountLoaded event");
						THISMODULE.onAccountLoaded();
					});		
				}
			},
			onAccountLoaded: function() {
				removePendingItem("accountLoaded");
				window.userState = window.userState || {};
				if (typeof _PG === "object" && PGFNS.issetmulti(_PG, "user", "info")) {
					// THISMODULE.onAccountLoaded(_PG.user.info);	
					userinfo = _PG.user.info;
					if (userinfo.loggedIn) {
						if (userinfo.paid) {
							debuglog("PAID USER");
							window.userState.granted = true;
							window.userState.grantReason = 'SUBSCRIBER';
							pendingitems = ["timestamps"];
						}
						THISMODULE.waitForTimestamps();
					} else {
						debuglog("NOT LOGGED IN");
						if (events.indexOf("gns_type") >= 0) {
							debuglog("Already got gns_type back:");
							debuglog(gns_type);
							THISMODULE.onGNSTypeSet();	// Already got gns_type back
						} else {
							debuglog("Waiting on gns_type");
							document.addEventListener("gns_type_set", function(e) {
								debuglog("Heard gns_type_set");
								THISMODULE.onGNSTypeSet();
							});
						}
					}
					// grandReason: 'METERING'
				}
			},
			waitForTimestamps: function() {
				debuglog("waitForTimestamps() called");
				var timestampobj = THISMODULE.getTimestampObj();
				debuglog(timestampobj);
				if (typeof timestampobj === "object" && timestampobj !== null && Object.keys(timestampobj).length > 0) {
					debuglog("Timestamp is set");
					debuglog(timestampobj);
					THISMODULE.onTimestampsSet(); // Timestamp already exists in local storage
				} else {
					debuglog("Not set");
					// var pianoID; // = pianoID || "";
					// if (pianoID === "") {
					// }
					var pianoUserObj = tp.pianoId.getUser();
					debuglog(pianoUserObj);
					var pianoUID = "";
					if (typeof pianoUserObj === "object" && issetmulti(pianoUserObj, "uid")) {
						pianoUID = pianoUserObj.uid;
						debuglog("Found UID: " + pianoUID);
					}
					if (typeof pianoUID !== "string" || pianoUID === "") {
						debuglog("Problem with pianoUID");
						THISMODULE.onTimestampsSet(); // Can't get timestamps, just move on without them
					}
					var payload = {"pianoID": pianoUID};
					var payloadenc = encodeURIComponent(JSON.stringify(payload));
					var endpont = "https://auth.toledoblade.com/1/user/gnsUserState/?payload=" + payloadenc;
					$.ajax(endpont, {
						dataType:"json"
					})
					.done(function(jsondata) {
						debuglog("Done");
						debuglog(jsondata);
						THISMODULE.setTimestampObj(jsondata);
						THISMODULE.onTimestampsSet();
						return true;
					})
					.fail(function() {
						debuglog("Failed");
				 	  	THISMODULE.onTimestampsSet();  // Can't get timestamps, just move on without them
						return false;
					});		
				}
				return true;
			},
			onTimestampsSet: function() {
				debuglog("onTimestampsSet()");
				var timestampobj = THISMODULE.getTimestampObj();
				removePendingItem("timestamps");
				THISMODULE.writeTimestampsToUserState(timestampobj);
				if (!THISMODULE.checkIfReadyToInit()) {
					THISMODULE.waitForGNSTypeSet(); // Next stage of waterfall
				}
			},
			waitForGNSTypeSet: function() {
				if (events.indexOf("gns_type") >= 0) {
					THISMODULE.onGNSTypeSet();	// Already got gns_type back
				} else {
					document.addEventListener("gns_type_set", function(e) {
						THISMODULE.onGNSTypeSet();
					});
				}				
			},
			onGNSTypeSet: function() {
				if (gns_type === "whitelist") {
					window.userState.granted = true; // They have access
					// Not setting reason though because they're not a 'SUBSCRIBER'
					removeAllPendingItems();
					THISMODULE.checkIfReadyToInit();
				} else if (gns_type === "social") {
					THISMODULE.waitForMeterEvents();
				} else { // non-social
					window.userState.granted = false;
					removeAllPendingItems();
					THISMODULE.checkIfReadyToInit();
				}
			},
			waitForMeterEvents: function() {
				if (events.indexOf("meterActive") >= 0) {
					// They're metered (not paywalled)
					removePendingItems("meterExpired")
					THISMODULE.checkIfReadyToInit();
				} else if (countInstances(events, "meterExpired") >= 2) {
					// They're paywalled
					window.userState.granted = false;
					removeAllPendingItems();
					THISMODULE.checkIfReadyToInit();
				} else {
					// Still pending
					document.addEventListener("meterCallbackEventDone", function() {
						THISMODULE.checkIfReadyToInit();
					});
				}
			},
			checkIfReadyToInit: function() {
				debuglog("checkIfReadyToInit() called");
				if (alreadyinitialized) { return false; }
				debuglog("Not yet initialized. Pending items:");
				debuglog(pendingitems);
				if (pendingitems.length === 0) {
					THISMODULE.initMetering();
					return true;
				} else {
					debuglog("Not ready...");
					return false
				}

			},
			initMetering: function() {
				console.log("GNS: initMetering() called");
				alreadyinitialized = true;
				var initObj = {
					googleApiClientId: '478712041428-aosa5o59ehe9ohk2p31to8u6c7ausnuv.apps.googleusercontent.com',
					userState: window.userState,
					allowedReferrers: ['www.toledoblade.com', 'dev.toledoblade.com'],
					handleLoginPromise: function() {},
					registerUserPromise: function() {},
					publisherEntitlementPromise: function() {},
					unlockArticle: function() {},
					showPaywall: function() {},
					handleSwGEntitlement: function() {}
				};
				initObj.handleLoginPromise = new Promise((resolve) => {
					console.log("GNS: Running handleLoginPromise");
					GaaMetering.getLoginPromise().then(() => {
						// Open a login window for existing users to login.
						// const loginWindow = window.open('https://examplenews.com/user/login');
						console.log("GNS: Running GaaMetering.getLoginPromise");
						_PG._trigger("piano:loginClicked", {
							location: "GNS"
						});
						tp.pianoId.show({screen:"login"});

						// Wait for the login window to send a message with userState for the user.
						window.addEventListener('message', function(message) {
							if (loginWindow == message.source) {
							resolve(message.data);
							}
						} , false);
					});
				});
				initObj.registerUserPromise = new Promise((resolve) => {
					  // Get the information for the user who has just registered.
					  console.log("GNS: Running registerUserPromise");
					  GaaMetering.getGaaUserPromise().then((gaaUser) => {
					    // Send that information to your Registration endpoint to register the user and
					    // return the userState for the newly registered user.
					    console.log("GNS: registerUserPromise is running getGaaUserPromise");
					    console.log("GNS: Stringified gaaUser: ", JSON.stringify(gaaUser));
					    fetch('https://auth.toledoblade.com/1/user/gnsRegister/?payload=' + JSON.stringify(gaaUser),
					      {
					        method: 'POST',
					        headers: {
					          'Content-type': 'application/json'
					        },
					        body: JSON.stringify(gaaUser)
					      })
					      .then(response => response.json())
					      .then(userState => {
					      	    console.log("GNS: Running then()");
					      	    console.log("GNS: userState:", userState);
								resolve(userState);
							});
					  });
				});
				initObj.publisherEntitlementPromise = new Promise((resolve) => {
      				// TODO: Fetch userState from the server and resolve it.
      				console.log("GNS: Running publisherEntitlementPromise");
      				resolve(userState);
    			});
				initObj.unlockArticle = function() {
					console.log("GNS: Running unlockArticle");
					tp.offer.close(); // Close existing offer if present
					tp.setCustomVariable("GNS_PW_UNL", "YES"); // Tell experience not to load pw
				};
				initObj.showPaywall = function() {
					console.log("GNS: Running showPaywall");
					// This callback can be written to trigger different scenarios based on which actions the user is in, such as show article-level paywall in scenario (1) versus initialize the buy flow in scenario (2).
				};
				initObj.handleSwGEntitlement = function() {
					console.log("GNS: Running handleSwGEntitlement");
					// Doc says "For more information, see Check entitlements using swg.js", but that link is a 404
				};
				console.log("GNS: Running GaaMetering.init with relevant object");
				GaaMetering.init(initObj);
			},
			writeTimestampsToUserState: function(timestampobj) {
				debuglog("writeTimestampsToUserState() called");
				debuglog(timestampobj);
				var keystolookfor = ["subscriptionTimestamp", "registrationTimestamp"];
				console.log(timestampobj);
				if (typeof timestampobj === "object" && timestampobj !== null) {
					$.each(keystolookfor, function(i, key) {
						console.log(key);
						console.log(typeof timestampobj[key]);
						typeof timestampobj[key];
						if (typeof timestampobj[key] === "number") {
							window.userState[key] = timestampobj[key];
						}
					});	
				}
			},
			setTimestampObj: function(theobj) {
				debuglog("setTimestampObj() called");
				if (typeof theobj !== "object" || theobj === null) {
					debuglog("Object problem");
					return false;
				}
				if (theobj.status === "error" || theobj.status === "errror") {
					debuglog("Status error");
					return false;
				}
				debuglog("Status: " + theobj.status)
				try {
					var stringobj = JSON.stringify(theobj);
					localStorage.setItem(localstoragekey, stringobj);
					debuglog("Storing");
				} catch(err) {
					debuglog("Try/catch error");
				}
			},
			/*
			getTimestampsViaAJAX: function(pianoID) {
				var pianoID = pianoID || "";
				if (pianoID === "") {
					pianoID = tp.pianoId.getUser();
				}
				if (typeof pianoID !== "string" || pianoID === "") {
					removePendingItem("timestamps");  // Can't get timestamps, just move on without them
					return false;
				}
				var payload = {"pianoID": pianoID};
				var payloadenc = encodeURIComponent(JSON.stringify(thepayload));
				var endpont = "https://auth.toledoblade.com/1/user/gnsUserState/?payload=" + thepayloadenc;
				$.ajax(endpont, {
					dataType:"json"
				})
				.done(function(jsondata) {
					THISMODULE.setTimestampObj(jsondata);
					THISMODULE.writeTimestampsToUserState(jsondata);
					removePendingItem("timestamps");
					THISMODULE.checkIfReadyToInit();
					return true;
				})
				.fail(function() {
			 	  	removePendingItem("timestamps");  // Can't get timestamps, just move on without them
					return false;
				});		
				// "https://auth.toledoblade.com/1/user/gnsUserState/?payload=%7B%22pianoID%22:%2250844%22%7D"
			},
			*/
			getTimestampObj: function() {
				var obj;
				var stringobj = localStorage.getItem(localstoragekey);
				if (stringobj === null) { return null; }
				try {
					obj = JSON.parse(stringobj);
					return obj;

				} catch(err) {
					return null;
				}
			}
		}
	})();
	PGLIB.all.gns.init();
}

// ******************************************
//       pgevoke.includes.js_weather
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.weather = (function() {
	var debuglogkey = "WEATHER";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		init: function() {
			$(document).ready( function() {
				var $target = $(".pgevoke-header-row1-left-weather-temp");
				$target.loadAjaxContent({
					"endpoint":"pgpageapi.weather",
					"processfunction": PGLIB.all.weather.processFunction
				});
			});
		},
		processFunction: function(jsondata, settings) {
			try {
				var temperature = jsondata.currentConditions.temperature;
				var $target = settings.$target;
				$target.html(temperature + "&deg;");
			} catch(err) {
				debuglog("Error!");
				debuglog(err);
			}
			debuglog("setTime() called");
			var date = new Date();
			var time = PGFNS.formatDate(date, "header");
			$(".pgevoke-header-row1-left-time").html(time + "&nbsp;|&nbsp;");
			$(".pgevoke-header-row1-left-innerwrapper").css("visibility", "visible");
			$(".pgevoke-header-row1-left-innerwrapper").css("opacity", "1");
		}
	};
})();
window.PGLIB.all.weather.init();



window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.os = (function() {
	var debuglogkey = "OS";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		init: function() {
			$(document).ready(function() {
				if (typeof PGFNS === "undefined") { return; }
				if (typeof PGFNS.getMobileOS !== "function") { return; }
				var os = PGFNS.getMobileOS();
				if (typeof os === "string" && os !== "unknown") {
					$("body").attr("data-pg-os", os);
					$("body").addClass("pg-os-" + os);
				} else {
					debuglog("OS was not identified as Android or iOS");
					debuglog("Checking for Chrome 33");
					if (typeof navigator === "object" && typeof navigator.userAgent === "string") {
						if (navigator.userAgent.match(/Chrome\/33/i) ) {
							debuglog("Chrome 33 identified");
							$("body").addClass("pg-browser-chrome-33");
						}
					}
				}
				// alert(os);
			});
		}
	};
})();
window.PGLIB.all.os.init();

window.DFPADS = (function() {
	var debuglogkey = "DFPADS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {
			console.log("DEBUGLOG: ERROR! " + debuglogkey, e);
		}
	}
	// ------- Helper Functions -------
	function issetmulti(arr) {
		var i, max_i;
		for (i = 1, max_i = arguments.length; i < max_i; i++) {
			arr = arr[arguments[i]];
			if (arr === undefined) {
				return false;
			}
		}
		return true;
	}

	// ------- Settings -------
	var requesttype = PGVARS.requesttype;
	var sitetype = PGVARS.sitetype;
	var sectionpath = (typeof PGVARS.sectionpath === "string") ? PGVARS.sectionpath : "";

	// ----- Status of ADSYSTEMCONFIG
	var configloaded = false;
	
	// ----- Values to be loaded from ADSYSTEMCONFIG -----
	var adunitpathbase;
	var positions;
	var sitetypes;
	var prebidnetworks = [];
	var aps = {};
	var sizemappings = {};
	var prebidtimeout_desktop
	var prebidtimeout_mobile
	var $;
	var getsvideoads = false; // Default

	// *******************************
	// Public Variables & Functions
	// *******************************
	return {
		que: [],
		mappings: {},
		slots: {},
		slotsmetadata: {},
		ready: false,
		pubadsReadyQue: [],
		checkPubadsReadyStatus: "WAITING",
		checkPubadsReady: function() {
			if (window.googletag && window.googletag.pubadsReady) {
				DFPADS.checkPubadsReadyStatus = "DONE";
				debuglog("Detected googletag.pubadsReady. Processing queue.");
				DFPADS.processRefreshQue();
			} else {
				debuglog("Waiting for googletag.pubadsReady...");
				setTimeout(function() {
					debuglog("TIMEOUT Waiting for googletag.pubadsReady...");
					DFPADS.checkPubadsReady();
				}, 50);
			}
		},

		processRefreshQue: function() {
			var slotids = DFPADS.pubadsReadyQue;
			debuglog("Queue has " + slotids.length + " items...");
			// debuglog("Queue items: " + slotids.toString());
			var arrayofslots = [];
			for (var i=0;i<slotids.length;i++) {
				if (typeof DFPADS.slots[slotids[i]] !== "undefined") {
					arrayofslots.push(DFPADS.slots[slotids[i]]);
				}
			}
			// debuglog("Queue items to refresh: " + arrayofslots.toString());
			googletag.pubads().refresh(arrayofslots);
		},

		printLog: function() {
			console.log(log);
		},

		processQueue: function() {
			debuglog("Processing queue");
			var que = DFPADS.que || [];
			for (var i=0;i<que.length;i++) {
				if (typeof que[i] === "function") {
					que[i]();
				}
			}
		},

		cmd: function(func) {
			if (typeof func !== "function") { return false; }
			if (!DFPADS.ready) {
				DFPADS.que.push(func);
				debuglog("Queued up function:");
				debuglog(func);
			} else {
				func();
			}
		},

		getPosition: function(slotid) {
			if (typeof positions[slotid] === "object") {
				return positions[slotid];
			} else {
				return "";
			}
		},

		loadConfig: function() {
			if (configloaded) { return; }
			configloaded = true;
			if (typeof window.ADSYSTEMCONFIG !== "object") {
				debuglog("Fatal error. Couldn't find ADSYSTEMCONFIG. Can't init.");
				return false;
			}
			var ADSYSTEMCONFIG = window.ADSYSTEMCONFIG;
			if (typeof ADSYSTEMCONFIG.positions !== "object") {
				debuglog("Fatal error. Couldn't find ADSYSTEMCONFIG.positions. Can't init.");
				return false;
			}
			if (typeof ADSYSTEMCONFIG.sitetypes !== "object") {
				debuglog("Fatal error. Couldn't find ADSYSTEMCONFIG.sitetype. Can't init.");
				return false;
			}
			if (typeof ADSYSTEMCONFIG.adunitpathbase !== "string") {
				debuglog("Fatal error. Couldn't find ADSYSTEMCONFIG.adunitpathbase. Can't init.");
				return false;
			}
			if (typeof ADSYSTEMCONFIG.beforeInitFunction === "function") {
				ADSYSTEMCONFIG.beforeInitFunction();
			}
			// if (typeof window.ADSYSTEMCONFIG.buildPrebidSlotComponentFuncs === "object") {
			//	 DFPADS.buildPrebidSlotComponentFuncs = window.ADSYSTEMCONFIG.buildPrebidSlotComponentFuncs;
			// }
			positions = ADSYSTEMCONFIG.positions;
			sitetypes = ADSYSTEMCONFIG.sitetypes;
			adunitpathbase = ADSYSTEMCONFIG.adunitpathbase;
			sitetype = sitetype.toUpperCase(); // standardize
			requesttype = requesttype.toUpperCase(); // standardize
			if (typeof ADSYSTEMCONFIG.jQuery === "string") {
				var jQString = ADSYSTEMCONFIG.jQuery;
				debuglog("Found ADSYSTEMCONFIG.jQuery. It's '" + jQString + "'");
				if (typeof window[jQString] !== "undefined") {
					debuglog("Found window." + jQString + ". Using as $");
					$ = window[jQString];
				} else {
					debuglog("Couldn't find window." + jQString + ". Using window.jQuery instead");
					$ = window.jQuery;
				}
			}
			if (typeof ADSYSTEMCONFIG.prebidnetworks === "object") {
				prebidnetworks = ADSYSTEMCONFIG.prebidnetworks;
			}
			if (typeof ADSYSTEMCONFIG.aps === "object") {
				aps = ADSYSTEMCONFIG.aps;
			} else {
				aps = false;
			}
			if (typeof ADSYSTEMCONFIG.sizemappings === "object") {
				sizemappings = ADSYSTEMCONFIG.sizemappings;
			}
			if (typeof ADSYSTEMCONFIG.getsvideoads === "object" && Array.isArray(ADSYSTEMCONFIG.getsvideoads)) {
				getsvideoads = (ADSYSTEMCONFIG.getsvideoads.indexOf(sectionpath) >= 0);
			}
			return true;
		},

		/**
		/* This is called after GPT & Prebid load
		*/
		init: function(callback){
			if (!configloaded) { DFPADS.loadConfig(); }
			$(document).ready(function() {
				debuglog("Initializing...");
				// -------- Prebid: Init --------
				pbjs.que.push(function() {
					if (typeof PGLIB.all.adinit.prebidVersion !== "string" || PGLIB.all.adinit.prebidVersion !== "1.x") {
						// pbjs.enableSendAllBids();
					}
				});
				// -------- APS: Init -------
				if (aps && typeof aps.pubID) {
					apstag.init({
						 pubID: aps.pubID,
						 adServer: 'googletag'
					});
					aps.initialized = true;
				}
				// -------- DFP: Inits --------
				// googletag.pubads().enableSingleRequest();
				// debuglog("Checking googletag.pubadsReady: " + googletag.pubadsReady);
				// debuglog("pubads: " + typeof googletag.pubads);
				googletag.pubads().disableInitialLoad();
				if (getsvideoads) {
					debuglog("ENABLING VIDEO ADS *** v2");
					googletag.pubads().enableVideoAds();
					googletag.companionAds().setRefreshUnfilledSlots(true);
				}
				googletag.enableServices();

				// debuglog("isInitialLoadDisabled: " + googletag.pubads().isInitialLoadDisabled());
				// debuglog("pubadsReady: " + window.googletag.pubadsReady);
				debuglog("disableInitialLoad() & enableServices() called");
				if (typeof ADSYSTEMCONFIG.initCallback === "function") {
					debuglog("Calling initCallback function");
					ADSYSTEMCONFIG.initCallback();
				}
				DFPADS.ready = true;
				DFPADS.cmd(function() {
					DFPADS.bindBreakpointChange();
				});
				DFPADS.processQueue();
			});
		},

		// **
		// * New function Dec 1
		// * Will be used in multiple other functions
		// * UPDATE: 12/7/2017: Not currently in use, may
		// * not get used after all.
		/*
		getBreakpointsForPosition: function(position) {
			if (!(issetmulti(positions, position))) {
				return false;
			}
			if (!(issetmulti(sitetypes, slotopts.sitetype, "breakpoints"))) {
				debuglog("Could not create slot with position '" + slotopts.position + "'. The sitetype " + slotopts.sitetype + " is not defined.");
				return true; // continue
			}
			var bps = sitetypes[slotopts.sitetype].breakpoints;
			if (!(Array.isArray(bps))) {
				debuglog("Could not create slot with position '" + slotopts.position + "'. The sitetype " + slotopts.sitetype + " does not have a valid breakpoint array.");
				return true;
			}
			var hascustombps = (issetmulti(positions, slotopts.position, "breakpoints"));
			if (hascustombps) {
				bps = positions[slotopts.position].breakpoints;
				// Use custom breakpoints for this position instead of the default for this sitetype
			}

		},
		*/

		bindBreakpointChange: function() {
			$(document).on("breakpointchanged", function(e, data) {
				debuglog("======== Breakpoint changed from " + data.oldbreakpoint + " to " + data.newbreakpoint + " =======");
				if (data.groupchange !== "none") {
					debuglog("The new breakpoint is in a different sitetype. Killing slots with incorrect sitetype and initializing slots with correct one.");
					DFPADS.cmd(function() {
						DFPADS.killSlotsByBreakpoint({
							"breakpointdata": data
						});
						DFPADS.initializeAll();
					});
				} else {
					/*
					if (data.newbreakpointgroup === "desktop") {
						if (data.subgroupchange === "to-desktop-md+" || data.subgroupchange === "from-desktop-md+") {
							debuglog("The new breakpoint is in a different desktop subgroup. Reprocessing NewsSlide.");
							DFPADS.killSlotsByBreakpoint(".pgevoke-story-newsslide");
							DFPADS.initializeAll(".pgevoke-story-newsslide");
						}
					}
					*/
					DFPADS.handleBreakpointChange(data);
				}
			});
		},

		handleBreakpointChange: function(data) {
			debuglog("handleBreakpointChange data:");
			console.log(data);
			// if (typeof selector === "undefined") { selector = "body"; }
			selector = "body";
			debuglog(typeof selector);
			debuglog("handleBreakpointChange() called with selector '" + selector + "'");
			$items = $(selector).find("[data-dfpads-position]");
			if ($items.length === 0) {
				debuglog("handleBreakpointChange() found 0 items. Exiting");
				return false;
			}
			var newbp = data.newbreakpoint;
			var oldbp = data.oldbreakpoint;
			debuglog("Found " + $items.length + " ad spots placements (initialized and not)");
			DFPADS.cmd(function() {
				DFPADS.killSlotsByBreakpoint({
					"breakpointdata": data
				});
				DFPADS.initializeAll();
			});
		},

		// **
		// * This adds data-dfpads-disabled=1 to all DFPADS ad
		// * wrappers that are children of the supplied selector.
		// * This means that initializeAll() will skip over these
		// * ads and not initialize them.
		disableAll: function(selector) {
			if (typeof selector === "undefined") {
				debuglog("disableSlots() must be supplied with a selector. Exiting.");
				return false;
			}
			$items = $(selector).find("[data-dfpads-position]");
			debuglog("disableSlots() found " + $items.length + " items w/ selector " + selector);
			$items.attr("data-dfpads-disabled", "1");
		},

		// **
		// * This is simply here for backwards compatibility with this
		// * old function name. Use initializeAll() in your code.
		createAndDisplayAll: function(selector) {
			DFPADS.initializeAll(selector);
		},

		// **
		// * Scans for all valid ad spot divs and initializes the one that
		// * should get initialized at the current breakpoint.
		initializeAll: function(selector) {
			// ----- Search entire body inless selector specified -----
			if (typeof selector === "undefined") { selector = "body"; }
			// ----- Find all un-inited slots -----
			debuglog("======= initializeAll() called with selector '" + selector + "' =======");
			$items = $(selector).find("[data-dfpads-position]:not('[data-dfpads-initialized]')");
			debuglog("Found " + $items.length + " uninitialized ad placements");
			var currentbreakpoint = PGLIB.all.breakpoints.getCurrent(); // getResponsiveSize() changing 1/31/18
			// ----- Cycle through slots -----
			$items.each(function(index) {
				var attrs = {}; // Will contain data we read from this slot's data attributes in DOM 
				var slotopts = {}; // Object we are building to pass into createSlot()
				attrs.position = $(this).attr("data-dfpads-position") || false;
				attrs.adsection = $(this).attr("data-dfpads-adsection") || false;
				attrs.disabled = $(this).attr("data-dfpads-disabled") || false;
				debuglog("------- PROCESSING AD PLACEMENT " + (index + 1) + "/" + $items.length + " ('" + attrs.position.toString().toUpperCase() + "') -------");
				// ----- Skip slot if it's been disabled -----
				if (attrs.disabled) {
					debuglog("Skipping slot with position '" + attrs.position + "'. It is DISABLED on this page.");
					return true;
				}
				// ----- Check slot for required attrs -----
				if (!(attrs.position && attrs.adsection)) {
					debuglog("Could not create the following slot. Missing data-dfpads-position or data-dfpads-adsection.");
					debuglog($(this));
					return true; // continue;   
				}
				// ----- Convert position name to uppercase for consistency -----
				slotopts.position = attrs.position.toUpperCase(); // Middle1 -> MIDDLE1
				$(this).attr("data-dfpads-position", slotopts.position); // Change in the DOM too
				// ----- Make sure specified position exists/is defined in 'positions' obj-----
				if (typeof positions[slotopts.position] !== "object") {
					debuglog("Could not create the following slot. The specified position '" + slotopts.position + "' is not defined.");
					debuglog($(this));
					return true;
				}
				// ----- Set slot sitetype based on position name -----
				attrs.sitetype = $(this).attr("data-dfpads-sitetype") || false;
				if (attrs.sitetype) {
					slotopts.sitetype = attrs.sitetype;
				} else {
					if (typeof positions[slotopts.position].sitetype !== "string") {
						 debuglog("Could not create slot with position '" + slotopts.position + "'. No sitetype defined.");
						 return true;
					}
					slotopts.sitetype = positions[slotopts.position].sitetype;
				}
				slotopts.sitetype = slotopts.sitetype.toLowerCase();
				if (!attrs.sitetype) {
					$(this).attr("data-dfpads-sitetype", slotopts.sitetype);
				}
				// ----- Make sure slot sitetype matches current -----
				if (!(issetmulti(sitetypes, slotopts.sitetype, "breakpoints"))) {
					debuglog("Could not create slot with position '" + slotopts.position + "'. The sitetype " + slotopts.sitetype + " is not defined.");
					return true; // continue
				}
				// ----- Make sure the specified sitetype has breakpoints defined ----
				var bps = sitetypes[slotopts.sitetype].breakpoints;
				if (!(Array.isArray(bps))) {
					debuglog("Could not create slot with position '" + slotopts.position + "'. The sitetype " + slotopts.sitetype + " does not have a valid breakpoint array.");
					return true;
				}
				// ----- If the position has a custom breakpoints defined, use them instead -----
				var hascustombps = (issetmulti(positions, slotopts.position, "breakpoints") && Array.isArray(positions[slotopts.position].breakpoints));
				if (hascustombps) {
					bps = positions[slotopts.position].breakpoints;
					$(this).data("dfpads-breakpoints", bps);	
				}
				// ----- If the position has custom sizes, add to data attr -----
				var hascustomsizes = (issetmulti(positions, slotopts.position, "customsizes") && typeof positions[slotopts.position].customsizes === "object");
				debuglog("Does '" + slotopts.position + "' have custom sizes? " + hascustomsizes);
				if (hascustomsizes) {
					customsizeskeys = Object.keys(positions[slotopts.position].customsizes);
					$(this).data("dfpads-customsizesbps", customsizeskeys);
					$(this).attr("data-dfpads-hascustomsizes", "1"); // This attr is just to make it easier to debug when inspecting DOM in browser. Not actualy used within the code.
				}
				// ---- Make sure ad should be visible at current breakpoint -----
				var adshouldbevisible = (bps.indexOf(currentbreakpoint) >= 0);
				if (!adshouldbevisible) {
					debuglog("Skipping slot with position '" + slotopts.position + "'...");
					if (hascustombps) {
						debuglog("Reason: The custom breakpoints for '" + slotopts.position + "' do not include '" + currentbreakpoint + "'");
					} else {
						debuglog("Reason: The sitetype '" + slotopts.sitetype + "' does not include '" + currentbreakpoint + "' in its list of breakpoints.");
					}
					return true;
				} else {
					debuglog("Initializing slot with position '" + slotopts.position + "'. Should be visible at current breakpoint (" + currentbreakpoint + ")");
				}
				// ----- Mark slot is initialized -----
				$(this).attr("data-dfpads-initialized","1");
				// ----- Check for optional attrs -----
				attrs.slotid = $(this).attr("data-dfpads-slotid") || false;
				attrs.refresh = $(this).attr("data-dfpads-refresh") || false;
				slotopts.adsection = attrs.adsection;
				if (attrs.slotid) { slotopts.slotid = attrs.slotid; }
				if (attrs.refresh) { slotopts.refresh = (attrs.refresh === "true"); }
				// ----- Check for custom keys -----
				var datakeys = $(this).data();
				slotopts["customkeys"] = {};
				$.each(datakeys, function(k, val) {
					if (k.length < 10) { return true; } // continue
					if (k.substr(0,9).toUpperCase() !== "DFPADSKEY") { return true; } // continue
					var thekey = k.substr(9).toLowerCase();
					if (typeof slotopts[thekey] === "undefined") {
						slotopts["customkeys"][thekey] = val;
					}
				});
				// ----- Create slot -----
				var newslot = DFPADS.createSlot(slotopts);
				if (newslot) {
					var newslotid = newslot.slotid;
					var dataslotid = $(this).attr("data-dfpads-slotid") || false;
					if (!dataslotid || dataslotid !== newslotid) { $(this).attr("data-dfpads-slotid", newslotid); }
					DFPADS.displaySlot(newslotid);	
				}
			});
		},

		createSlot: function(slotopts) {
			debuglog("createSlot() called with these settings...");
			debuglog(slotopts);
			var slotsettings = {}; // Will be populated with settings for this new slot
			var positionsettings = {}; // Will contain the specified position's default settings
			// ------- Check required settings (position, adsection) -------
			if (typeof slotopts.position !== "string") {
				debuglog("Cannot create slot. No position specified.");
				return false;
			}
			slotsettings.position = slotopts.position;
			if (typeof positions[slotopts.position] !== "object") {
				debuglog("Cannot create slot. The specified position '" + slotopts.position + "' is not defined.");
				return false;
			}
			positionsettings = positions[slotopts.position];
			if (typeof slotopts.adsection !== "string") {
				debuglog("Cannot create slot with position '" + theposition + "'. Missing or invalid 'adsection'.");
				return false;
			}
			slotsettings.adsection = slotopts.adsection;
			if (typeof positionsettings.sitetype !== "string") {
				debuglog("Cannot create slot. No sitetype defined for position '" + theposition + "'.");
				return false;   
			}
			slotsettings.sitetype = positionsettings.sitetype;
			if (typeof sitetypes[slotsettings.sitetype] !== "object") {
				debuglog("Cannot create slot. The position '" + slotsettings.position + "' has the sitetype of '" + slotsettings.sitetype +  ", but that sitetype is not defined.");
				return false;   
			}
			if (typeof sitetypes[slotsettings.sitetype].adunitpathdomain !== "string") {
				debuglog("Cannot create slot with position '" + slotsettings.position + "'. No adunitpathdomain(s) defined for sitetype '" + slotsettings.sitetype + "'.");
				return false;	  
			}
			slotsettings.adunitpathdomain = sitetypes[slotsettings.sitetype].adunitpathdomain;	
			var currentbreakpoint = PGLIB.all.breakpoints.mostrecent; // getResponsiveSize();
			if (typeof sitetypes[slotsettings.sitetype].customaupdomains === "object") {
				debuglog("Found customaupdomains key. Checking.");
				slotsettings.customaupdomains = sitetypes[slotsettings.sitetype].customaupdomains;
				$.each(slotsettings.customaupdomains, function(k, val) {
					debuglog("Checking " + k + " with value " + val + " against " + currentbreakpoint);
					if (k === currentbreakpoint && typeof val === "string") {
						debuglog("Found custom aup domain for '" + currentbreakpoint + "'. Using. (" + val + ")");
						slotsettings.adunitpathdomain = val;
					}
				});
			} else {
				debuglog("No customaupdomains set. Using default for this sitetype.");
			}
			// ------- Handle optional settings (sizes, refresh) -------
			if (typeof slotopts.sizes === "object" && Array.isArray(slotopts.sizes)) {
				slotsettings.sizes = slotopts.sizes; // Use manually-passed sizes
			} else {
				if (typeof positionsettings.sizes === "undefined") {
					 debuglog("Tried to createSlot('" + slotopts.position + "'), but that position is missing a 'sizes' definition, and a 'sizes' value was not manually passed. Cannot create.");
					return false;
				} else {
					// var currentbreakpoint = getResponsiveSize(); Doing this earlier now (1/11/2019)
					debuglog("Checking for custom sizes at this breakpoint '" + currentbreakpoint + "'. customsizes: " + JSON.stringify(positionsettings["customsizes"]));
					debuglog(typeof positionsettings["customsizes"]);
					if (typeof positionsettings["customsizes"] !== "undefined") {
						debuglog(typeof positionsettings["customsizes"][currentbreakpoint]);	
					}
					if (typeof positionsettings["customsizes"] !== "undefined" && typeof positionsettings["customsizes"][currentbreakpoint] !== "undefined") {
						var thecustomsizes = positionsettings["customsizes"][currentbreakpoint];
						debuglog("Using custom sizes for '" + slotopts.position + "' at " + currentbreakpoint + " breakpoint: " + JSON.stringify(thecustomsizes));
						slotsettings.sizes = thecustomsizes;
					} else {
						debuglog("Using default sizes (" + JSON.stringify(positionsettings["sizes"]) + ")");
						slotsettings.sizes = positionsettings["sizes"]; // Use position's default sizes	
					}
				}
			}
			// if ((typeof slotsettings.sizes === "string" && slotsettings.sizes !== "fluid") || (Array.isArray(slotsettings.sizes) && !Array.isArray(slotsettings.sizes[0]))) {
			if (!Array.isArray(slotsettings.sizes[0]) && slotsettings.sizes !== "fluid") {
				debuglog("Cannot create slot '" + slotopts.position + "'. The 'sizes' option must be an array of arrays. For instance: [[300,250]] or [[300,250],[300,600]]");
				return false;
			}
			if (typeof slotopts.refresh === "boolean") {
				slotsettings.refresh = slotopts.refresh;   
			} else {
				if (typeof positionsettings.refresh !== "undefined" && positionsettings.refresh === true) {
					slotsettings.refresh = true;
				} else {
					slotsettings.refresh = false;
				}
			}
			if (typeof positions[slotsettings.position]["counter"] === "0") {
				slotsettings.locationtype = "primary";
			} else {
				slotsettings.locationtype = "scrolled";
			}
			if (typeof slotopts.slotid === "string" && DFPADS.slots[slotopts.slotid] !== "undefined") {
				slotsettings.slotid = slotopts.slotid;
			} else {
				if (typeof slotopts.slotid === "string") { debuglog("Received slotid '" + slotopts.slotid + "', but this is already in use. Generating new one instead."); }
				positions[slotsettings.position]["counter"] = positions[slotsettings.position]["counter"] || 0; // Make sure counter exists
				slotsettings.slotid = "div-gpt-ad-" + slotsettings.position + "-" + positions[slotsettings.position]["counter"];
				positions[slotsettings.position]["counter"] += 1;				
			}
			if (typeof positionsettings.collapse === "string") {
				slotsettings.collapse = positionsettings.collapse;
				slotsettings.hascollapse = true;
			} else {
				slotsettings.hascollapse = false;
			}
			if (typeof positionsettings.adnetworks === "boolean" && positionsettings.adnetworks) {
				slotsettings.adnetworks = true;
			} else {
				slotsettings.adnetworks = false;
			}
			if (typeof positionsettings.sizemapping === "boolean" && positionsettings.sizemapping) {
				slotsettings.usessizemapping = true;
			} else {
				slotsettings.usessizemapping = false
			}
			if (slotsettings.usessizemapping) {
				slotsettings.sizemappingisvalid = false; // Default value
				debuglog("Slot uses size mapping. Attempting to build.");
				if (typeof sizemappings[slotsettings.position] === "object" && !(Array.isArray(sizemappings[slotsettings.position]))) {
					(function() {
						var sizemappingobj = sizemappings[slotsettings.position];
						var themapping = googletag.sizeMapping();
						debuglog("Using this sizemappingobj: ");
						debuglog(sizemappingobj);
						$.each(sizemappingobj, function(key, sizesvalue) {
							var keyarray = key.split("x");
							keyarray.forEach(function(item, i) { keyarray[i] = parseInt(item) });
							debuglog("Checking item '" + key + "'. Key and value, respectively:");
							debuglog(keyarray);
							debuglog(sizesvalue);
							if (keyarray.length === 2 && Array.isArray(sizesvalue)) {
								slotsettings.sizemappingisvalid = true;
								themapping.addSize(keyarray, sizesvalue);
							} else {
								debuglog("Invalid (" + key + ")");
							}
						});
						if (slotsettings.sizemappingisvalid) {
							debuglog("themapping...");
							debuglog(themapping);
							slotsettings.sizemapping = themapping.build();
							debuglog("slotsettings.sizemapping:");
							debuglog(slotsettings.sizemapping);
						} else {
							debuglog("No valid sizes found for mapping. Can't build.");
						}
					})();
				} else {
					debuglog("Couldn't find valid entry in ADSYSTEMCONFIG.sizemappings for this position. Can't build.");
				}
			}
			if (typeof slotopts.companion === "boolean") {
				slotsettings.companion = slotopts.companion;
			} else if (typeof positionsettings.companion === "boolean") {
				slotsettings.companion = positionsettings.companion;
			} else {
				slotsettings.companion = false;
			}
			// ------- Options are valid. -------
			debuglog("Options are valid. Creating slot with these settings...");
			debuglog(slotsettings);
			// ------- Prepare variables and ad unit path ------
			slotsettings.adunitpath = adunitpathbase + slotsettings.adunitpathdomain + "/" + slotsettings.adsection;
			if (requesttype.toUpperCase() !== "STORY") {
				if (slotsettings.adunitpath.substring(slotsettings.adunitpath.length-1) !== "/") {
					slotsettings.adunitpath += "/"; // Add a slash to the end if not present
				}
				slotsettings.adunitpath += "home";
			}
			// ------- DFP: Define slots & set targeting -------
			debuglog("Calling googletag.defineSlot('" + slotsettings.adunitpath + "'," + JSON.stringify(slotsettings.sizes) + ",'" + slotsettings.slotid + "')");
			var theslot = googletag.defineSlot(slotsettings.adunitpath, slotsettings.sizes, slotsettings.slotid);
			
			if (getsvideoads && slotsettings.companion) {
				// Only turned on for pages whose sectionpath is listed under ADSYSTEMCONFIG.getsvideoads
				debuglog(slotsettings.position.toUpperCase() + " is a companion. Enabling.");
				theslot.addService(googletag.companionAds()).addService(googletag.pubads());
			} else {
				debuglog(slotsettings.position.toUpperCase() + " is not a companion.");
				theslot.addService(googletag.pubads());
			}
			// ------- DFP: Add size mapping if needed -------
			if (slotsettings.usessizemapping && slotsettings.sizemappingisvalid) {
				debuglog("Slot has valid size mapping. Defining.");
				debuglog(slotsettings.sizemapping);
				theslot.defineSizeMapping(slotsettings.sizemapping);
			}

			// ------- DFP: Set targeting -----
			theslot.setTargeting('position', [slotsettings.position]);
			theslot.setTargeting('usertype', dfpUserType);
			debuglog("The sitetype is '" + slotsettings.sitetype + "'");
			if (slotsettings.sitetype.toLowerCase() === "mobile") {
				if (typeof PGFNS !== "undefined" && typeof PGFNS.getMobileOS === "function") {
					var mobileos = PGFNS.getMobileOS();
					debuglog("The mobileos is '" + mobileos + "'. Setting targeting");
					theslot.setTargeting('mobileos', mobileos); 
				}
			}
			if (issetmulti(window, "location", "pathname")) {
				theslot.setTargeting('pagepath', window.location.pathname);
			}
			if (typeof PGVARS.storyid === "string" && PGVARS.storyid !== "") {
				theslot.setTargeting('storyid', PGVARS.storyid);
			}
			// ------- Check for custom keys -----
			if (typeof slotopts.customkeys !== "undefined" && Object.keys(slotopts.customkeys).length > 0) {
				$.each(slotopts.customkeys, function(k,val) {
					if (typeof slotsettings[k] === "undefined") {
						debuglog("Setting targeting... '" + k + "': '" + val + "'");
						theslot.setTargeting(k, val);
					}
				});
			}
			// ------- Check for collapse setting -----
			if (slotsettings.hascollapse) {
				if (slotsettings.collapse.toLowerCase() === "after") {
					theslot.setCollapseEmptyDiv(true);
				} else if (slotsettings.collapse.toLowerCase() === "before") {
					theslot.setCollapseEmptyDiv(true, true);
				}
			}

			// DFPADS.namepairings[opts.target] = opts.name;
			DFPADS.slots[slotsettings.slotid] = theslot;
			DFPADS.slotsmetadata[slotsettings.slotid] = DFPADS.slotsmetadata[slotsettings.slotid] || {};
			DFPADS.slotsmetadata[slotsettings.slotid].position = slotsettings.position;

			if (slotsettings.refresh === true) {
				ADBIDDERS.addRefreshingSlot(slotsettings.slotid);	
			}
			if (slotsettings.adnetworks) {
				debuglog("Slot DOES get ad networks. Bulding Prebid object");
				var pbunits = DFPADS.buildPrebidSlot(theslot);
				debuglog("Calling pbjs.addAdUnits() for " + slotsettings.slotid + ". Here's pbunits...");
				debuglog(pbunits);
				pbjs.que.push(function() {
					pbjs.addAdUnits(pbunits);
					// DFPADS.refreshSlot(theslot);
				});
				var apsslot = DFPADS.buildAPSSlot(slotsettings);
				debuglog("APS Slot...");
				debuglog(apsslot);
				DFPADS.slotsmetadata[slotsettings.slotid].apsslot = [apsslot];
			} else {
				debuglog("Slot does NOT get ad networks. Skipping.");
			}
			return slotsettings;
		},

		/**
		 * Called by initializeAll(), right after createSlot(). Checks to make sure
		 * the target slot exists and has the proper "id" attr for DFP. Then
		 * calls DFPADS.refresh() for the slot ti actually display it.
		 */
		displaySlot: function(slotid) {
			debuglog("Beginning displaySlot('" + slotid + "')");
			var $targetbyid = $("#" + slotid);
			var targetbyidcount = $targetbyid.length;
			if (targetbyidcount > 1) {
				debuglog("Could not display slot. More than one element with the specified ID exists");
				return false;
			}
			if (targetbyidcount === 0) {
				$targetbydata = $("[data-dfpads-slotid='" + slotid + "']");
				targetbydatacount = $targetbydata.length;
				if (targetbydatacount > 1) {
					debuglog("Could not display slot. ID not found, and more than one element with the specified data-dfpads-slotid exists.");
					return false;
				} else if (targetbydatacount === 0) {
					 debuglog("Could not display slot. Could not find element with ID or data-dfpads-slotid matching the specified value");
					return false;
				}
				$adtarget = $targetbydata.first().find(".pg-adtarget");
				// debuglog("Adding ID to element");
				if ($adtarget.length !== 1) {
					debuglog("Could not display slot. " + $adtarget.length + " .pg-adtarget divs found");
					return false;
				}
				$adtarget.first().attr("id",slotid);
			}
			// if (!(elementid) || elementid !== newslotid) { $(this).attr("id", newslotid); }
			googletag.cmd.push(function() {
				DFPADS.refreshSlot(DFPADS.slots[slotid]);
			});
		},

		// ***
		// * Gets new prebid bids for a given DFP slot,
		// * then refreshes the slot
		refreshSlot: function(slot) {
			var slotid = slot.getSlotElementId();
			debuglog("------- refreshSlot called. ID: " + slotid + " --------");
			// ----- Set position -----
			var position = ""; // Default
			if (issetmulti(DFPADS, "slotsmetadata", slotid, "position")) {
				var position = DFPADS["slotsmetadata"][slotid]["position"];
			}
			debuglog("position is '" + position + "'");
			// ----- Set adnetworks (bool) -----
			var adnetworks;
			if (position !== "" && issetmulti(positions, position, "adnetworks") && positions[position]["adnetworks"]) {
				adnetworks = true;
			} else {
				adnetworks = false;
			}
			// ----- Set bidder timeout -----
			var thetimeout;
			if (issetmulti(positions, position, "sitetype") && positions[position]["sitetype"].toLowerCase() === "mobile") {
				debuglog("Using MOBILE timeout of 3000");
				thetimeout = 3000;
			} else {
				debuglog("Using DESKTOP timeout of 1500");
				thetimeout = 1500;
			}
			// ----- Get APS bids -----
			if (adnetworks) {
				debuglog("This slot (" + slotid + ") has 'adnetworks' set to TRUE. Sending Prebid request.");
				if (DFPADS.slotsmetadata[slotid].apsslot) {
					debuglog("APS: This slot has an APS Slot.");
					if (aps && aps.initialized) {
						debuglog("APS: aps.initialized is true");
						apstag.fetchBids({
							slots: DFPADS.slotsmetadata[slotid].apsslot,
							timeout: thetimeout,
						}, function(bids) {
							debuglog("APS: fetchBids() has returned for " + slotid + ". Queueing setDisplayBids()");
							googletag.cmd.push(function(){
								debuglog("APS: Calling setDisplayBids() for " + slotid);
								apstag.setDisplayBids();
								debuglog("APS: Done setting targeting. Here's the updated slot targeting: (" + slotid + ")");
								debuglog(DFPADS.slots[slotid].getTargetingMap());
							});
						});
					}
				}
				// ----- Get Prebid bids -----
				pbjs.que.push(function() {
					debuglog(PREBID_TIMEOUT);
					var thetimeout; // Default
					pbjs.requestBids({
						timeout: thetimeout,
						adUnitCodes: [slot.getSlotElementId()],
						bidsBackHandler: function(responses) {
							debuglog("bidsBackHandler() fired for " + slotid + ". Here are the responses...");
							debuglog(responses);
							// debuglog("getBidResponses()...");
							// debuglog(pbjs.getBidResponses());
							// pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
							pbjs.setTargetingForGPTAsync();
							debuglog("Done setting prebid targeting. All current targeting for " + slot.getSlotElementId() + "...");
							debuglog(slot.getTargetingMap());
							googletag.display(slot.getSlotElementId());
							debuglog("googletag.pubadsReady? " + googletag.pubadsReady);
							// googletag.pubads().refresh([slot]);
							DFPADS.googletagRefresh(slot.getSlotElementId());
						}
					});
				});	 
			} else {
				debuglog("Since this slot (" + slotid + ") does NOT get the networks, skipping Prebid request and displaying.");
				debuglog("googletag.pubadsReady? " + googletag.pubadsReady);
				setTimeout(function() {
					googletag.cmd.push(function() {
						googletag.display(slot.getSlotElementId());
						DFPADS.googletagRefresh(slotid);
					});
				}, 1000); // Artificial delay, seems to fix sporadic "ad fetch fail" errors
				// googletag.pubads().refresh([slot]); 
			}
		},

		fetchBidsFromAPS: function(apsslotobj) {
			
		},

		googletagRefresh: function(slotid) {
			debuglog("DFPADS.googletagRefresh() called for '" + slotid + "'");
			if (window.googletag && window.googletag.pubadsReady) {
				if (typeof DFPADS.slots[slotid] !== "undefined") {
					debuglog("googletag.pubadsReady is TRUE. Refreshing without enqueueing.");
					googletag.pubads().refresh([DFPADS.slots[slotid]]);	
				} else {
					debuglog("ERROR: googletag.pubadsReady is TRUE, but slot not found with id of " + slotid + ". Can't refresh.");
				}
			} else {
				debuglog("googletag.pubadsReady is NOT true. Adding to queue.");
				DFPADS.pubadsReadyQue.push(slotid);
				if (DFPADS.checkPubadsReadyStatus ===  "WAITING") {
					DFPADS.checkPubadsReadyStatus = "RUNNING";
					DFPADS.checkPubadsReady();
				}
			}
		},

		// **
		// * Kills (deactivates) all slots which should not be.
		// * visible at the current breakpoint. Uses 'breakpoints'
		// * array for each 'position' if it exists; otherwise uses
		// * the breakpoint defined for the position's sitetype.
		// * If a 'selector' is provided within the settings then it
		// * only looks at slots that are children of that parent
		// **
		killSlotsByBreakpoint: function(settings) {
			if (typeof settings === "undefined") { settings = {}; }
			var selector = (typeof settings.selector !== "undefined") ? settings.selector : "body";
			var breakpointdata = (typeof settings.breakpointdata === "object") ? settings.breakpointdata : {};
			var newbp = (typeof breakpointdata.newbreakpoint === "string") ? breakpointdata.newbreakpoint : "UNKNOWN";
			var oldbp = (typeof breakpointdata.oldbreakpoint === "string") ? breakpointdata.oldbreakpoint : "UNKNOWN";
			debuglog("---- killSlotsByBreakpoint() called with selector '" + selector + "' -----");
			// $items = $(selector).find("[data-dfpads-position][data-dfpads-initialized]");
			$items = $(selector).find("[data-dfpads-initialized]");
			if ($items.length === 0) { return; }
			debuglog("Found " + $items.length + " initialized ad placements");
			var currentbreakpoint = PGLIB.all.breakpoints.getCurrent(); // getResponsiveSize() changing 1/31/18
			debuglog("Current breakpoint: " + currentbreakpoint);
			var slotstoremove = [];
			$items.each(function(index) {
				var thesitetype = $(this).attr("data-dfpads-sitetype") || false;
				var theslotid = $(this).attr("data-dfpads-slotid") || false;
				var theposition = $(this).attr("data-dfpads-position") || false;
				if (!thesitetype) { return true; }
				if (!theslotid) { return true; }
				if (!theposition) { return true; }
				debuglog("Checking ad with slotid: " + theslotid);
				if (!(issetmulti(sitetypes, thesitetype, "breakpoints"))) { return true; }
				var bps = sitetypes[thesitetype].breakpoints;
				// var custombps = $(this).attr("data-dfpads-breakpoints") || false;
				var custombps = $(this).data("dfpads-breakpoints") || false;
				if (custombps) {
					debuglog("Has custom breakpoints.");
					// try {
					//	 bps = JSON.parse(custombps);
					//	debuglog("Parse successful. Using those.");
					// } catch(e) {}
					bps = custombps;
				} else {
					debuglog("No custom bps. Using default for this sitetype.");
				}
				if (!(Array.isArray(bps))) { return true; }
				var adshouldbevisible = (bps.indexOf(currentbreakpoint) >= 0);
				if (!adshouldbevisible) {
					slotstoremove.push(theslotid);
					debuglog("'" + theslotid + "' slot should not be visible at this breakpoint. Queueing for destruction.");
				} else {
					debuglog("This ad slot should be visible at this breakpoint (" + currentbreakpoint + "). Breakpoints: " + bps);
					var customsizesbps = $(this).data("dfpads-customsizesbps") || false;
					// =debuglog("customsizesbps:"  + JSON.stringify(customsizesbps));
					// debuglog("oldbp: " + oldbp  + " / newbp: " + newbp);
					if (customsizesbps && (customsizesbps.indexOf(newbp) >= 0 || customsizesbps.indexOf(oldbp) >= 0)) {
						debuglog("This ad has custom sizes at the old or new breakpoint(s)");
						var positionsettings = positions[theposition];
						var customsizes = positionsettings["customsizes"];
						var oldsizes = (typeof customsizes[oldbp] === "object") ? customsizes[oldbp] : [];
						var newsizes = (typeof customsizes[newbp] === "object") ? customsizes[newbp] : [];
						if (oldsizes !== newsizes) {
							sizechange = true;	
						} else {
							sizechange = false;
						}
					} else {
						sizechange = false;
					}
					
					var theposition = $(this).attr("data-dfpads-position") || false;
					if (sizechange) {
						debuglog("Size change detected. Queueing up '" + theslotid + "' for destruction.");
						slotstoremove.push(theslotid);
					} else {
						debuglog("No size change");
					}
				}
			});
			if (slotstoremove.length > 0) {
				DFPADS.killSlots(slotstoremove);
			}
			debuglog("----- End of killSlotsByBreakpoint() -----");
		},

		killSlots: function(arrayofslotids) {
			if (typeof arrayofslotids !== "object" || !Array.isArray(arrayofslotids)) {
				debuglog("Could not execute killSlots(). The value passed was not an array.");
				return;
			}
			var undefinedslots = [];
			var slotcount = arrayofslotids.length;
			debuglog("Attempting to kill the following slots: " + JSON.stringify(arrayofslotids));
			$.each(arrayofslotids, function(i, slotid) {
				if (typeof DFPADS.slots[slotid] !== "undefined") {
					debuglog("Killing " + slotid);
					googletag.destroySlots([DFPADS.slots[slotid]]);
					delete(DFPADS.slots[slotid]);
					ADBIDDERS.removeRefreshingSlot(slotid);
					$targetbydata = $("[data-dfpads-slotid='" + slotid + "']");
					$targetbydata.removeAttr("data-dfpads-initialized");
					// targetbydatacount = $targetbydata.length;
				} else {
					undefinedslots.push(slotid);
				}
			});
			if (undefinedslots.length === 0) {
				debuglog("Successfully killed all " + slotcount + " slots");
			} else {
				debuglog("Killed " + (slotcount - undefinedslots.length) + " of " + slotcount + " slots. These slots were undefined and could not be removed: " + JSON.stringify(undefinedslots));
			}
		},

		buildPrebidObject: function(){
			var prebidobj = [];
			for (var slotid in DFPADS.slots){
			   // thename = DFPADS.namepairings[];
			   var position = slotsmetadata[slotid].position;
			   // if (typeof positions[targetid] !== "undefined" && typeof 
				if (issetmulti(positions,slotid,"adnetworks")) {
					var adnetworks = positions[slotid]["adnetworks"];
					if (adnetworks === true) {
						debuglog("Slot " + slotid + " gets networks");
						var slot = DFPADS.slots[slotid];
						var prebidslot = DFPADS.buildPrebidSlot(slot);
						prebidobj.push(o);
					} else {
						debuglog("Slot " + slotid + " does not get ad networks. Skipping.");
					}
				} 
				// if(!DFPADS.pathCodes[thename].adnetworks){ continue;}
			}
			return prebidobj;
		},

		buildPrebidSlot:function(slot){
			var slotid = slot.getSlotElementId();
			var position = DFPADS.slotsmetadata[slotid].position;
			// ------- Build sizearray ------
			var sizearr = [];
			var sizes = slot.getSizes();
			var size; // Adding 10/8/2018 to avoid global scope
			for (var x in sizes) {
				size = sizes[x];
				sizearr.push([size.getWidth(),size.getHeight()]);
			}
			// ------- Create slot parts -------
			var prebidslotcomponents = {};
			var bidsarr = [];
			// var prebidnetworks = ["appnexus","rubicon"];
			debuglog("Building Prebid slot for '" + position + "'");
			debuglog(prebidnetworks);
			for (var key in prebidnetworks) {
				// debuglog("In for loop with " + key);
				var network = key;
				// prebidnetworks[x]; 
				if (position !== "") {
					debuglog("Calling buildPrebidSlotComponent() for '" + network + "'");
					prebidslotcomponents[network] = DFPADS.buildPrebidSlotComponent(network, position, sizearr, slotid);
					if (prebidslotcomponents[network] !== false) {
						if (Array.isArray(prebidslotcomponents[network])) {
							debuglog("Function returned multiple objects (Array). Cycling.");
							$.each(prebidslotcomponents[network], function(i, item) {
								if (typeof item === "object" && Array.isArray(item) === false) {
									debuglog("Adding item #" + i);
									debuglog(item);
									bidsarr.push(item);
								}
							});
						} else {
							debuglog("Function returned a single object. Adding.");
							bidsarr.push(prebidslotcomponents[network]); // Backwards-compatible support for single objects being returned	
						}
						
					} else {
						debuglog("buildPrebidSlotComponent() for '" + network + "' returned false. Skipping for position '" + position + "'.");
					}
				}
			}
			if (typeof PGVARS === "object" && PGVARS.prebidupdate) {
				var prebidslot = {
					code: slotid,
					mediaTypes: {
						banner: {
							sizes: sizearr
						}
					},
					bids: bidsarr
				};	
			} else {
				var prebidslot = {
					code: slotid,
					sizes: sizearr,
					bids: bidsarr
				};	
			}
			debuglog("Prebid Slot Built...");
			debuglog(prebidslot);
			return prebidslot;
		},

		buildPrebidSlotComponent: function(network, position, sizearr, slotid) {
			debuglog("buildPrebidSlotComponent() called for '" + network + "' and position: '" + position + "'");
			/* if (typeof DFPADS.buildPrebidSlotComponentFuncs[network] === "function") {
				debuglog("Found the function");
				return DFPADS.buildPrebidSlotComponentFuncs[network](position,sizearr);
			} else {
				debuglog("Could not build prebid slot component '" + network + "' for slotid '" + slotid + "'. This network does not have a function.");
				return {};
			} */
			if (typeof prebidnetworks !== "object"|| typeof prebidnetworks[network] !== "object") {
				debuglog("Couldn't find prebidnetworks['" + network + "']. Can't buld prebid slot component.");
				return false;
			}
			if (typeof prebidnetworks[network].getObj !== "function") {
				debuglog("This network does not have a getObj function defined in ADSYSTEMCONFIG. Skipping.");
				return false;
			}
			if (typeof prebidnetworks[network].enabled === "boolean" && prebidnetworks[network].enabled === false) {
				debuglog("This network is DISABLED in ADSYSTEMCONFIG. Skipping.");
				return false;
			}
			debuglog("This network is not disabled and has getObj(). Building.");
			var varobj = {};
			varobj.posupper = position.toUpperCase();
			varobj.sitetype = (issetmulti(positions, varobj.posupper, "sitetype") && positions[varobj.posupper]["sitetype"].toUpperCase() === "MOBILE") ? "MOBILE" : "DESKTOP";
			varobj.sizearr = sizearr;
			varobj.possizex = sizearr[0][0] + "x" + sizearr[0][1];
			var rubiconsizemappings = {
				"728x90": "2",
				"160x600": "9",
				"300x600": "10",
				"300x250": "15",
				"320x50": "43",
				"300x50": "44",
				"300x1050": "54",
				"970x90": "55",
				"970x250": "57"
			};
			varobj.rubiconsizecode = (typeof rubiconsizemappings[varobj.possizex] === "string") ? rubiconsizemappings[varobj.possizex] : "99";
			// ------ Set rubiconsiteid & rubiconzoneid --------
			varobj.atf = (issetmulti(positions, varobj.posupper, "atf") && typeof positions[varobj.posupper]["atf"] === "boolean") ? positions[varobj.posupper]["atf"] : false;
			varobj.slotid = slotid;
			debuglog("buildPrebidSlotComponent -> slotid: ", varobj.slotid);
			var obj = prebidnetworks[network].getObj(varobj); // Note: Already checked to make sure it exists earlier in func
			debuglog("Done w/ getObj() for '" + network + "' and '" + varobj.posupper + "'. Here's the obj:");
			debuglog(obj); // Can be an obj or false
			return obj;
		},

		buildPrebidSlotComponentFuncs: {
			appnexus: function(position, sizearr) {
				var posupper = position.toUpperCase();
				var sitetype;
				if (issetmulti(positions, posupper, "sitetype") && positions[posupper]["sitetype"].toUpperCase() === "MOBILE") {
					sitetype = "MOBILE";
				} else {
					sitetype = "DESKTOP";
				}
				var obj = prebidnetworks["appnexus"].getObj({
					"sitetype": sitetype,
					"posupper": posupper
				});
				debuglog("Got appenxus obj...");
				debuglog(obj);
				return obj;
			},
			rubicon: function(position, sizearr) {
				var posupper = position.toUpperCase();
				var sitetype;
				// debuglog("UPPERCASE: " + positions[posupper]["sitetype"].toUpperCase());
				if (issetmulti(positions, posupper, "sitetype") && positions[posupper]["sitetype"].toUpperCase() === "MOBILE") {
					sitetype = "MOBILE";
				} else {
					sitetype = "DESKTOP";
				}
				var possizex = sizearr[0][0] + "x" + sizearr[0][1];
				// ------ Set rubiconsizecode -------
				var rubiconsizemappings = {
					"728x90": "2",
					"160x600": "9",
					"300x600": "10",
					"300x250": "15",
					"320x50": "43",
					"300x50": "44",
					"300x1050": "54",
					"970x90": "55",
					"970x250": "57"
				};
				var rubiconsizecode;
				if (typeof rubiconsizemappings[possizex] === "string") {
					rubiconsizecode = rubiconsizemappings[possizex];
				} else {
					rubiconsizecode = "99"; // default
				}
				// ------ Set rubiconsiteid & rubiconzoneid --------
				var atf;
				if (issetmulti(positions, posupper, "atf") && typeof positions[posupper]["atf"] === "boolean") {
					atf = positions[posupper]["atf"];
				} else {
					atf = false; // default
				}

				var obj = prebidnetworks["rubicon"].getObj({
					"sitetype": sitetype,
					"posupper": posupper,
					"rubiconsizecode": rubiconsizecode,
					"atf": atf
				});
				debuglog("Got rubicon obj...");
				debuglog(obj);
				return obj;
			}
		},

		buildAPSSlot: function(slotsettings) {
			debuglog("buildAPSSlot() called");
			if (typeof slotsettings !== "object" || slotsettings == null) {
				debuglog("Can't build APS slot. Invalid slotsettings obj.");
				return false;
			}
			if (typeof slotsettings.slotid !== "string") {
				debuglog("Can't build APS slot. Missing or invalid slotid.");
				return false;
			}
			if (typeof slotsettings.adunitpath !== "string") {
				debuglog("Can't build APS slot. Missing or invalid adunitpath.");
				return false;
			}
			if (typeof slotsettings.sizes !== "object" || !(Array.isArray(slotsettings.sizes))) {
				debuglog("Can't build APS slot. Missing or invalid slotsizes.");
				return false;
			}
			debuglog("Passed buildAPSSlot() checks. slotsettings...");
			debuglog(slotsettings);
			var apsslots = {
				 slotID: slotsettings.slotid, //example: 'div-gpt-ad-1475102693815-0'
				 slotName: slotsettings.adunitpath, //example: '12345/box-1'
				 sizes: slotsettings.sizes //example: [[300,250], [300,600]]
			 };
			 return apsslots;
		},

		getAdSlotString: function(options) {
			if (typeof options !== "object" || options === null) { return false; }
			if (typeof options.position !== "string") {
				console.log("no position");
				return false;
			}
			if (typeof options.adsection !== "string") {
				console.log("no adsection");
				console.log(options.adsection);
				return false;
			}
			options.position = options.position.toUpperCase();
			var placeholder = false;
			var adnotice = false;
			if (typeof positions[options.position] !== "undefined") {
				if (typeof positions[options.position].placeholder === "string") {
					placeholder = positions[options.position].placeholder;
				}
				if (typeof positions[options.position].adnotice === "boolean") {
					adnotice = positions[options.position].adnotice;
				}
			}
			var thead = "";
			thead += '<div data-dfpads-position="' + options.position + '" data-dfpads-adsection="' + options.adsection + '">';
			if (adnotice) {
				// thead += '<div class="center small upper graytext" style="font-family:proxima-nova,sans-serif">Advertisement</div>'; // Need to make this more generic -AF, Feb 27, 2018
				thead += '<div class="pg-adnotice" style="font-family:proxima-nova,sans-serif">Advertisement</div>'; // Need to make this more generic -AF, Feb 27, 2018
			}
			if (!placeholder) {
				thead += '<div class="pg-adtarget"></div>';	
			} else {
				thead += '<div class="pg-adtarget pg-adwrapper-' + placeholder + '"></div>';	
			}
			thead += '</div>';
			return thead;
		},

		setPrebidLogging: function(bool) {
			if (typeof bool !== "boolean") {
				console.log("*** Please supply a boolean value to setPrebidLogging()");
				return;
			}
			if (bool === true) {
				if (typeof window.pbjs === "object") {
					window.pbjs.logging = true;	
				}
				localStorage.setItem("prebidLogging", "1");
				console.log("*** Prebid Logging has been turned on.");
			} else { 
				if (typeof window.pbjs === "object") {
					window.pbjs.logging = false;
				}
				localStorage.removeItem("prebidLogging");
				console.log("*** Prebid Logging has been turned off.");
			}
		},

		getPrebidLogging: function() {
			var pbl = localStorage.getItem("prebidLogging");
			if (typeof pbl === "string" && pbl === "1") {
				return true;
			} else {
				return false;
			}
		}
    };
})();
DFPADS.loadConfig();

//  Last Updated: 2017-07-13 12:00am
// **********************************
// **********************************
//          pg.external.adinit
// **********************************
// **********************************

window.allbids = {};
window.dfpUserCookie = undefined;
if (typeof $ !== "undefined" && typeof $.cookie !== "undefined") {
	dfpUserCookie = $.cookie("_pgusr");
}

window.dfpUser = false; // Default for "anon"
if (dfpUserCookie === undefined || dfpUserCookie === null){
	window.dfpUserType = ["anon"];
} else {
	window.dfpUser = JSON.parse(dfpUserCookie);
	if (typeof dfpUser.data.cUID !== 'undefined') {
		window.dfpUserType = ["paid"];		 
	} else {
		window.dfpUserType = ["reg"];
	}   
}


window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.adinit = (function() {
	var debuglogkey = "ADINIT";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var loadedScripts = {
		"prebid": false,
		"gpt": false,
		"aps": false
	};
	return {
		// prebidloaded: false,
		// gptloaded: false,
		prebidVersion: "",
		init: function() {
			debuglog("init called() v1");
			PGLIB.all.adinit.loadOpenX();
			PGLIB.all.adinit.loadPrebid();
			PGLIB.all.adinit.loadAPS();
			PGLIB.all.adinit.loadGPT();
		},
		scriptHasLoaded: function(script) {
			loadedScripts[script] = true;
			debuglog("Script has loaded: " + script);
			PGLIB.all.adinit.checkIfItsTimeForDFPADS();
		},
		loadOpenX: function() {
			var oxscrpt = document.createElement("script");
			oxscrpt.type = "text/javascript";
			oxscrpt.src = "//pittpostgazette-d.openx.net/w/1.0/jstag?nc=6785150-PostGazette";
			var targetelem = document.getElementsByTagName("head")[0];
			targetelem.insertBefore(oxscrpt, targetelem.firstChild);
		},
		loadPrebid: function() {
			window.PREBID_TIMEOUT = 1500; // Still used by requestBids()
			// ----- Async load the Prebid script -----
			var pbjsEl = document.createElement("script");
			pbjsEl.type = "text/javascript";
			pbjsEl.async = true;
			// pbjsEl.src =  "https://814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com/ads/prebid/prebid.0.32.0.20171110.js";
			// pbjsEl.src =  "https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/js/vendor/prebid/prebid.0.34.4.20180307.js";
			if (typeof PGVARS === "object" && typeof PGVARS.prebidupdate === "boolean" && PGVARS.prebidupdate) {
				PGLIB.all.adinit.prebidVersion = "4.26.x";
				pbjsEl.src = "https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/js/vendor/prebid/prebid.4.26.0.20210215.js";
			} else {
				// PGLIB.all.adinit.prebidVersion = "0.34";
				// pbjsEl.src =  "https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/js/vendor/prebid/prebid.0.34.13.20180618.js";
				PGLIB.all.adinit.prebidVersion = "1.x";
				pbjsEl.src = "https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/js/vendor/prebid/prebid.1.22.0.20180904.js";
			}
			var pbjsTargetEl = document.getElementsByTagName("head")[0];
			pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
			// ----- Make sure pbjs & pbjs.que exist -----
			window.pbjs = window.pbjs || {};
			window.pbjs.que = window.pbjs.que || [];
			// ----- Queue up configuration  -----
			window.pbjs.que.push(function() {
				var loggingon = (typeof DFPADS === "object" && DFPADS.getPrebidLogging());
				if (loggingon) {
					window.pbjs.logging = true;
					debuglog("Prebid logging ON");
				} else {
					window.pbjs.logging = false;
					debuglog("Prebid logging OFF");
				}
				if (typeof PGVARS === "object" && PGVARS.prebidupdate) {
					debuglog("Prebid Analytics: adTracker2");
					window.pbjs.enableAnalytics({
						provider: 'ga',
						options: {
							 trackerName: "adTracker2",
							 sampling: 0.05
						}
					});	
				} else {
					debuglog("Prebid Analytics: adTracker");
					window.pbjs.enableAnalytics({
						provider: 'ga',
						options: {
							 trackerName: "adTracker",
							 sampling: 0.05
						}
					});	
				}
				//enableDistribution: true,
				window.pbjs.bidderSettings = {
					standard: {
						alwaysUseBid: false,
						adserverTargeting: [{
							key: "hb_bidder",
							val: function(bidResponse) {
								return bidResponse.bidder;
							}
						}, {
							key: "hb_adid",
							val: function(bidResponse) {
								return bidResponse.adId;
							}
						}, {
							key: "hb_pb",
							val: function(bidResponse) {
								return bidResponse.pbHg;
							}
						}, {
							key: "hb_size",
							val: function(bidResponse) {
								return bidResponse.size;
							}
						}]
					}
				};
				PGLIB.all.adinit.scriptHasLoaded("prebid");
			});			
		},
		loadAPS: function() {
			//load the apstag.js library
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
				A.onload = function() {
					PGLIB.all.adinit.scriptHasLoaded("aps");
				};
				g = p.getElementsByTagName(s)[0];
				g.parentNode.insertBefore(A, g)
			}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

		},
		loadGPT: function() {
			debuglog("loadingGPT() called")
			// ----- Create googletag & googletag.cmd ------
			window.googletag = window.googletag || {};
			window.googletag.cmd = window.googletag.cmd || [];
			// ----- Async load gpt.js script -----
			var gads = document.createElement('script');
			gads.type = 'text/javascript';
			var useSSL = 'https:' == document.location.protocol;
			gads.src = (useSSL ? 'https:' : 'http:') +
			'//www.googletagservices.com/tag/js/gpt.js';
			var node = document.getElementsByTagName('script')[0];
			node.parentNode.insertBefore(gads, node);
			// ----- First order of business -----
			googletag.cmd.push(function(){
				PGLIB.all.adinit.scriptHasLoaded("gpt");
			});
		},
		checkIfItsTimeForDFPADS: function() {
			debuglog("checkIfItsTimeForDFPADS() called. Scripts' status...");
			debuglog(loadedScripts);
			var notready = false;
			for (var key in loadedScripts) {
				if (loadedScripts[key] === false) { notready=true; }
			}
			if (notready) {
				debuglog("Not time yet. Waiting on one or more script.");
				return false;
			}
			debuglog("*** It's time. All scripts loaded. Calling DFPADS.init().");
			DFPADS.init();
		}
	};
})();
window.PGLIB.all.adinit.init();


// **********************************
//      pg.all.ads_adbidders.js
// **********************************

window.ADBIDDERS = (function() {
	var debuglogkey = "ADBIDDERS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	// **
	// * Self expanatory helper function
	function inArray(thearray, thingtofind) {
		for (i=0;i<thearray.length;i++) {
			if (thearray[i] === thingtofind) { return i; }
		}
		return -1;		
	}
	// **
	// * Helper function. Checks if node of multidimensional array exists
	// * Example useage: issetmulti(array, "items", "myitem", "title")
	function issetmulti(arr) {
	    var i, max_i;
	    for (i = 1, max_i = arguments.length; i < max_i; i++) {
	        arr = arr[arguments[i]];
	        if (arr === undefined) {
	            return false;
	        }
	    }
	    return true;
	}

	function getTimer() {
		var d = new Date();
		var t = d.getTime();
		return t;
	}

	function getElapsedTime(timestamp) {
		var d = new Date();
		var t = d.getTime();
		var elapsedtime = (t - timestamp);
		return elapsedtime;
	}

	// var getTimer = PGFNS.getTimer;
	// var getElapsedTime = PGFNS.getElapsedTime;
	
	var adstorefresh = {}; // Holds the settings for each ad

	var disabled = false;

	var $;
	var GA = "";

	return {

		// Public variables
		// ----------------

		targetingkey: "",
		debugmode: false,
		refreshcounter: 0,
		legitbidders: ["pubmatic","appnexus","openx","rubicon","adx","triplelift","aardvark","sovrn","ix","indexexchange","justpremium","criteo","amazon"],
		winners: {},
		trackingsitecode: "???",
		trackingversion: "V20",
		trackingmode: false,
		adslotelementids: [],
		adslots: {},
		settings: {
			"refreshfreq": 60,
			"refreshcount": 2,
			"refreshcheckinterval": 5,
			"winnercheckdelay": 15,
		},

		// Public functions
		// ----------------

		debuglog: function(thingtolog) {
			debuglog(thingtolog);
		},

		// **
		// * Here you should pass the object containing the
		// * actual slots created via googletag.defineSlot().
		// * For instance, adSlots or DFPADS.slots for the
		// * PG and Blade, respectively.
		setAdSlotsObject: function(adslotsobject) {
			ADBIDDERS.adslots = adslotsobject;
		},

		addRefreshingSlot: function(slotid) {
			debuglog("Adding refreshing slot '" + slotid + "'");
			ADBIDDERS.adslotelementids.push(slotid); // This will be deprecated
			if (typeof adstorefresh[slotid] !== "undefined") {
				debuglog("Tried addRefreshingSlot('" + slotid + "''), but this slot is already on the list. Aborting.");
				return;
			}
			// ----- Build the object for this slot -----
			var slotobj = {};
			slotobj.slotid = slotid;
			slotobj.lastrefresh = getTimer();
			slotobj.refreshcounter = 0;
			slotobj.refreshlimitreached = false;
			adstorefresh[slotid] = slotobj;
		},

		removeRefreshingSlot: function(slotid) {
			if (typeof adstorefresh[slotid] !== "undefined") {
				delete(adstorefresh[slotid]);
			}
		},

		init: function() {
			if (typeof window.ADSYSTEMCONFIG === "object" && window.ADSYSTEMCONFIG.jQuery === "string" && typeof window[jQString] !== "undefined") {
                debuglog("ADSYSTEMCONFIG['jQuery'] is set to '" + jQString + "'. window['" + jQString + "'] exists. Using as jQuery instance.");
            } else {
				debuglog("Couldn't find ADSYSTEMCONFIG['jQuery'] or the specified var doesn't exist. Using window.jQuery instead");
                $ = window.jQuery;
            }
			if (!(issetmulti(ADBIDDERS, "settings", "refreshfreq"))) {
				debuglog("Could not initialize. Missing setting 'refreshfreq'");
				return false;
			}
			if (!(issetmulti(ADBIDDERS, "settings", "refreshcount"))) {
				debuglog("Could not initialize. Missing setting 'refreshcout'");
				return false;
			}
			if (!(issetmulti(ADBIDDERS, "settings", "refreshcheckinterval"))) {
				debuglog("Could not initialize. Missing setting 'refreshcheckinterval'");
				return false;
			}
			if (!(issetmulti(ADBIDDERS, "settings", "winnercheckdelay"))) {
				debuglog("Could not initialize. Missing setting 'winnercheckdelay'");
				return false;
			}
			if (ADBIDDERS.settings.winnercheckdelay > ADBIDDERS.settings.refreshfreq) {
				debuglog("Could not initialize. The 'winnercheckdelay' setting cannot be greater than the 'refreshfreq'.");
				return false;	
			}
			if (typeof window.ADSYSTEMCONFIG === "object" && typeof window.ADSYSTEMCONFIG.GA === "string") {
				GA = window.ADSYSTEMCONFIG.GA;
			} else {
				debuglog("Could not find ADSYSTEMCONFIG.GA. This should be a string with the name of the GA instance. ADBIDDERS Cannot send tracking events for this pageview.");
			}
			ADBIDDERS.checkAll();
		},

		checkAll: function() {
			if (disabled) { return false; }
			debuglog("******************************************");
			debuglog("CHECKING ALL. Total refreshing slots: " + Object.keys(adstorefresh).length);
			debuglog("******************************************");
			var refreshfreqms = ADBIDDERS.settings.refreshfreq * 1000;
			var winnercheckdelay = ADBIDDERS.settings.winnercheckdelay * 1000;
			$.each(adstorefresh, function(slotid, slotobj) {
				debuglog("Checking " + slotid);
				if (typeof slotobj.lastrefresh !== "number") {
					debuglog("The value of 'lastrefresh' is not a number. Skipping.");
					debuglog("---------------------");
					return true; // continue
				}
				var alreadycheckedwinner = (issetmulti(ADBIDDERS, "winners", slotid, slotobj.refreshcounter));
				if (ADBIDDERS.settings.refreshlimitreached && alreadycheckedwinner) {
					debuglog("Refresh limit reached (" + ADBIDDERS.settings.refreshcount + "), and the winner has already been checked for the last time.");
					debuglog("---------------------");
					return true; // continue
				}
				var lastrefresh = slotobj.lastrefresh;
				var elapsedtime = getElapsedTime(lastrefresh);
				debuglog("Refresh Counter:  " + slotobj.refreshcounter + " / Elapsed Time: " + (elapsedtime / 1000) + " seconds");
				if (elapsedtime > winnercheckdelay) {
					if (!(alreadycheckedwinner)) {
						ADBIDDERS.checkWinner(slotid);
						if (ADBIDDERS.settings.refreshcount > 0 && slotobj.refreshcounter >= ADBIDDERS.settings.refreshcount) {
							adstorefresh[slotid].refreshlimitreached = true;
						}
					} else {
						debuglog("Already checked winner");
					}
				} else {
					debuglog("Will check winner in " + Math.round((winnercheckdelay - elapsedtime) / 1000) + " seconds");
				}
				if (!(adstorefresh[slotid].refreshlimitreached)) {
					if (elapsedtime > refreshfreqms) {					
							ADBIDDERS.refreshAd(slotid);
					} else {
						debuglog("Will refresh in " + Math.round((refreshfreqms - elapsedtime) / 1000) + " seconds");
					}
				} else {
					debuglog("Refresh limit reached (" + ADBIDDERS.settings.refreshcount + ")");
				}
				debuglog("-------------------------------");
			});
			var theinterval = ADBIDDERS.settings.refreshcheckinterval * 1000;
			setTimeout(ADBIDDERS.checkAll, theinterval); // Test
		},

		checkWinner: function(slotid) {
			debuglog("Checking winner of '" + slotid + "'");
			var bidderofcurrentad = ADBIDDERS.getBidderOfCurrentAd(slotid);
			// ------ Log Winner ------
			var refreshcounter = adstorefresh[slotid].refreshcounter;
			ADBIDDERS.winners[slotid] = ADBIDDERS.winners[slotid] || {};
			ADBIDDERS.winners[slotid][refreshcounter] = bidderofcurrentad;

			// ------ Send tracking ------
			ADBIDDERS.sendTrackingEvent(
				"Ad Loaded [" + refreshcounter + "]",
				"Adbidder-" + bidderofcurrentad
			);
			// ----- Check for repeat bidder & track -----/
			var repeatbidder = ADBIDDERS.checkForRepeatBidder(slotid);
			if (repeatbidder) {
				debuglog("Repeat found! [" + slotid + "/" + bidderofcurrentad + "].");
				ADBIDDERS.sendTrackingEvent(
					"Repeat Bidder Detected [" + ADBIDDERS.refreshcounter + "]",
					slotid + "/" + bidderofcurrentad		
				); 
			} 
		},

		prepAdForRefresh: function(slotid) {
			// ------ Make sure the specified slotid exists -----
			if (typeof adstorefresh[slotid] === "undefined") {
				debuglog("Tried prepAdForRefresh('" + slotid + "'), but that slotid does not exist in 'adstorefresh'. Exiting.");
				return false;
			}
			// ------ Remove targeting for winner -----
			var refreshcounter = adstorefresh[slotid].refreshcounter || -1;
			if (refreshcounter >= 0) {
				if (issetmulti(winners, slotid, refreshcounter)) {
					var bidderofcurrentad = winners[slotid][refreshcounter];
					if (inArray(ADBIDDERS.legitbidders, bidderofcurrentad) >= 0) {
						debuglog("Preping '" + slotid + "' for refresh by removing targeting for " + bidderofcurrentad);
						ADBIDDERS.removeBidderTargeting(slotid, bidderofcurrentad);
						ADBIDDERS.removeBidderTargeting(slotid, "prebid-winner");
					} else {
						debuglog("Bidder was not identified. Code: " + bidderofcurrentad);
					}
				}
			}
			// ----- Set adrefresh targeting -----
			debuglog("Setting adrefresh=" + (refreshcounter+1));
			ADBIDDERS.adslots[slotid].setTargeting("adrefresh", (refreshcounter+1));
		},

		refreshAd: function(slotid) {
			// ------ Make sure the specified slotid exists -----
			if (typeof adstorefresh[slotid] === "undefined") {
				debuglog("Tried refreshAd('" + slotid + "'), but that slotid does not exist in 'adstorefresh'. Exiting.");
				return false;
			}
			if (typeof ADBIDDERS.adslots[slotid] === "undefined") {
				debuglog("Could not refresh '" + slotid + "'. No entry under that key in ADBIDDERS.adslots array.");
				return false;
			}
			debuglog("Refreshing '" + slotid + "'");
			adstorefresh[slotid].refreshcounter++;
			adstorefresh[slotid].lastrefresh = getTimer();
			if (ADBIDDERS.settings.refreshcount > 0 && adstorefresh[slotid].refreshcounter >= ADBIDDERS.settings.refreshcount) {
				adstorefresh[slotid].refreshlimitreached = true;
			}
			DFPADS.cmd(function() {
				debuglog("Setting adrefresh=" + adstorefresh[slotid].refreshcounter);
				ADBIDDERS.adslots[slotid].setTargeting("adrefresh", adstorefresh[slotid].refreshcounter);
				DFPADS.refreshSlot(ADBIDDERS.adslots[slotid]);
			});
		},

		refreshAds: function() {
			debuglog("***********************");
			debuglog("      REFRESH #" + (ADBIDDERS.refreshcounter+1));
			debuglog("***********************");
			ADBIDDERS.prepareAdsForRefresh();
			var adstorefresh = ADBIDDERS.getAdsToRefresh();
			var slotstorefresh = [];
			$.each(adstorefresh, function(index,slotid){
				if (typeof ADBIDDERS.adslots[slotid] !== "undefined") {
					debuglog("REFRESHING " + slotid);
					slotstorefresh.push(ADBIDDERS.adslots[slotid]);
				} else {
					debuglog("Could not refresh '" + slotid + "'. No entry under that key in ADBIDDERS.adslots array.");
				}
			});
			console.log(slotstorefresh);
			// googletag.pubads().refresh([< % @ S lotsToRefresh % > ]);
			googletag.pubads().refresh(slotstorefresh);
			ADBIDDERS.refreshcounter++;
		},

		/**
		 * 1. Cycles through the slots in googletag
		 * 2. Gets "div_id" for each & uses as main key for each slot
		 * 3. Creates buckets for each bidder
		 * 4. Finds bid-related keys & sorts into buckets
		 */
		getBids: function() {
			if (typeof googletag == "undefined") { return; }
			if (typeof googletag.pubads == "undefined") { return; }
			var slots = googletag.pubads().getSlots();
			var bids = {};
			$.each(slots, function(i, val) {
				// var targeting = slots[i][ADBIDDERS.targetingkey]; // Now using getTargetingMap()
				var targeting = slots[i].getTargetingMap();
				var adslotelementid = slots[i].getSlotElementId();
				if (typeof adslotelementid !== "string") { 
					if (issetmulti(targeting, "divtarget","0")) {
						adslotelementid = targeting["divtarget"][0];
					} else {
						adslotelementid = "";
					}
				}
				if (adslotelementid !== "") { // Skip any with unknown div_id
					bids[adslotelementid] = {};
					bids[adslotelementid]["openx"] = "";
					bids[adslotelementid]["pubmatic"] = "";
					bids[adslotelementid]["appnexus"] = "";
					bids[adslotelementid]["rubicon"] = "";
					$.each(targeting, function(key, val) {
						var keyleft2 = key.slice(0,2);
						var keyleft3 = key.slice(0,3);
						if (keyleft2 == "ox") {
							bids[adslotelementid]["openx"] = targeting[key][0];
						} else if (key == "bid") {
							bids[adslotelementid]["pubmatic"] = targeting[key][0];
						} else if (key == "hb_pb_appnexus") {
							bids[adslotelementid]["appnexus"] = targeting[key][0];
						} else if (key == "hb_pb_rubiconLite") {
							bids[adslotelementid]["rubicon"] = targeting[key][0];
						}
					});
				}
			});
			return bids;		
		},

		printBids: function() {
			var bids = ADBIDDERS.getBids();
			try {
				console.log(JSON.stringify(bids,null,3));	
			} catch(e) {
				console.log("Could not print bids. There was an error. Here's the error & bids object:");
				console.log(e);
				console.log(bids);
			}
		},

		getTargeting: function() {
			if (typeof googletag === "undefined") { return; }
			if (typeof googletag.pubads === "undefined") { return; }
			var slots = googletag.pubads().getSlots();
			var bids = {};
			$.each(slots, function(i, val) { // Cycle through all slots from googletag
				// var targeting = slots[i][ADBIDDERS.targetingkey]; // Now using getTargetingMap()
				var targeting = slots[i].getTargetingMap();
				var adslotelementid = slots[i].getSlotElementId();
				if (typeof adslotelementid !== "string") { 
					// If the native function doesn't return a string,
					// check it the "old"/manual way
					if (issetmulti(targeting, "divtarget","0")) {
						adslotelementid = targeting["divtarget"][0];
					} else {
						adslotelementid = "";
					}
				}
				if (adslotelementid !== "") { // Skip any with unknown id
					bids[adslotelementid] = {};
					bids[adslotelementid]["openx"] = {};
					bids[adslotelementid]["appnexus"] = {};
					bids[adslotelementid]["pubmatic"] = {};
					bids[adslotelementid]["rubicon"] = {};
					bids[adslotelementid]["prebid-winner"] = {};
					bids[adslotelementid]["other-targeting"] = {};
					$.each(targeting, function(key, val) {
						if (key !== "divtarget") {
							var left2 = key.slice(0,2);
							var left3 = key.slice(0,3);
							var bidder = "";
							if (left2 === "ox") {
								bidder = "openx";
							} else if (left3 === "bid") {
								bidder = "pubmatic";
							} else if (left3 === "hb_") {
								if (key.indexOf("appnexus") >= 0) {
									bidder = "appnexus";
								} else if (key.indexOf("rubicon") >= 0) {
									bidder = "rubicon";
								} else if ((key.match(/_/g)||[]).length === 1) {
									bidder = "prebid-winner";
								}
							}
							if (bidder !== "") {
								bids[adslotelementid][bidder][key] = val;	
							} else {
								bids[adslotelementid]["other-targeting"][key] = val;	
							}
						}
					});
				}
			});
			// console.log(JSON.stringify(bids,null,3));
			return bids;
		},

		printTargeting: function() {
			var targeting = ADBIDDERS.getTargeting();
			try {
				console.log(JSON.stringify(targeting,null,3));	
			} catch(e) {
				console.log("Could not print targeting. There was an error. Here's the error & targeting object:");
				console.log(e);
				console.log(bids);
			}
		},

		getRealBids: function() {
			var bids = ADBIDDERS.getBids();
			$.each(bids, function(adslotelementid,val) {
				$.each(val, function(bidder,bid) {
					if (typeof bid === "string" && bid !== "") {
						var realbid;
						realbid = parseFloat(bid).toFixed(4);
						if (bidder == "appnexus") {
							realbid = realbid * 100; // $->cents
						} else if (bidder == "pubmatic") {
							realbid = realbid * 100; // $->cents
							realbid = realbid * 0.83; // gross->net
						} else if (bidder == "openx") {
							realbid = realbid * 0.80; // gross->net
						} else if (bidder == "rubicon") {
							realbid = realbid * 100; // $->cents
							realbid = realbid * 0.825; // gross->net
							// NOTE: Still need to figure out if gross->net is needed
						}
						realbid = realbid.toFixed(2);
						bids[adslotelementid][bidder] = realbid;
					}
				});
			});
			return bids;
		},

		printRealBids: function() {
			var bids = ADBIDDERS.getRealBids();
			try {
				console.log(JSON.stringify(bids,null,3));	
			} catch(e) {
				console.log("Could not print adjusted bids. There was an error. Here's the error & bids object:");
				console.log(e);
				console.log(bids);
			}
		},
		
		//**
		//* Attempts to positively identify an ad for a
		//* given position as coming from one of the bidders
		//* NOTE: the #bidderis____ stuff still needs set up
		//*       in DFP for the Blade for this to work
		getBidderOfCurrentAd: function(adslotelementid) {
			debuglog("Getting current ad bidder for '" + adslotelementid + "'");
			var selector = "#" + adslotelementid + " iframe[id^='google_ads_']";
			var $matches = $(selector);
			if ($matches.length < 1) {
				return "noiframe";
			} else {
				// debuglog("Getting contents of iframe");
				try {
					// var $iframedocument = $matches.first().contents();
					// var $iframedocument = $($matches.first().context);
					var $iframedocument = $($matches[0].contentDocument);
					for (i=0;i<ADBIDDERS.legitbidders.length;i++) {
						var bidder = ADBIDDERS.legitbidders[i];
						var theselector = "#bidderis" + bidder; 
						var $divtofind = $iframedocument.find("body").find(theselector);
						if ($divtofind.length > 0) {
							return bidder;
						}
						// var $divtofind = $iframedocument.find("body").find("#bidderisappnexus");
					}
					return "unknown";
				} catch(e) {
					debuglog("ADBIDDERS: ERROR!...");
					debuglog(e);
					return "error";
				}
			}
		},

		getAdsToRefresh: function() {
			var thearray = Object.keys(adstorefresh);
			return thearray;
		},

		removeBidderTargeting: function(adslotelementid, bidder) {
			var targ = ADBIDDERS.getTargeting();
			var bidderlowercase = bidder.toLowerCase();
			var keys = targ[adslotelementid][bidderlowercase] || {};
			debuglog("keys...");
			debuglog(keys);
			$.each(keys, function(key, value) {
				debuglog("Clearing '" + key + "' key for adslots['" + adslotelementid + "']");
				ADBIDDERS.adslots[adslotelementid].clearTargeting(key);
			});
		},

		checkForRepeatBidder: function(adslotelementid) {
			// var refreshcounter = ADBIDDERS.refreshcounter;
			if (issetmulti(adstorefresh, adslotelementid, "refreshcounter") === false) {
				debuglog("Could not check for repeat bidder. Can't find that slot in 'adstorefresh', or it doesn't have a refresh counter.");
				return false;
			}
			var refreshcounter = adstorefresh[adslotelementid]["refreshcounter"];
			debuglog("Refreshcounter is " + refreshcounter);
			if (refreshcounter < 1) {
				debuglog("No refresh has been done yet. Repeat bidder impossible.");
				return false;
			}
			var currentwinner = ADBIDDERS["winners"][adslotelementid][refreshcounter];
			if (inArray(ADBIDDERS.legitbidders,currentwinner) < 0) {
				debuglog("Current winner (" + currentwinner + ") is not a 'legit' bidder eligible to be a repeat.");
				return false;			
			}
			debuglog("Current winner is " + currentwinner);
			for (i=0;i<refreshcounter;i++) {
				var previouswinner = ADBIDDERS["winners"][adslotelementid][i];
				debuglog("i=" + i + ", previous winner is " + previouswinner);
				if (currentwinner == previouswinner) {
					return true;
				}
			}
			return false;
		},

		prepareAdsForRefresh: function() {
			debuglog("Preparing ads for refresh");
			ADBIDDERS["winners"][ADBIDDERS.refreshcounter] = {};
			var adstorefresh = ADBIDDERS.getAdsToRefresh();
			// console.log("PREPPING");
			$.each(adstorefresh, function(index, slotid) {
				// console.log("IN EACH (" + index + "): " + slotid);
				ADBIDDERS.prepareAdForRefresh(slotid);
			});
		},

		prepareAdForRefresh: function(adslotelementid) {
			var bidderofcurrentad = ADBIDDERS.getBidderOfCurrentAd(adslotelementid);
			// ------ Remove targeting for winner -----
			if (inArray(ADBIDDERS.legitbidders, bidderofcurrentad) >= 0) {
				debuglog("Preparing " + adslotelementid + " for refresh by removing targeting for " + bidderofcurrentad);
				ADBIDDERS.removeBidderTargeting(adslotelementid, bidderofcurrentad);
				ADBIDDERS.removeBidderTargeting(adslotelementid, "prebid-winner");
			} else {
				debuglog("Bidder was not identified. Code: " + bidderofcurrentad);
			}
			debuglog("Sending analytics tracking");
			/*
			ADBIDDERS.sendTrackingEvent(
				"Ad Loaded [" + ADBIDDERS.refreshcounter + "]",
				"Adbidder-" + bidderofcurrentad
			);
			*/
			// ----- Log Winner -----/
			ADBIDDERS["winners"][ADBIDDERS.refreshcounter][adslotelementid] = bidderofcurrentad;
			var repeatbidder = ADBIDDERS.checkForRepeatBidder(adslotelementid);
			if (repeatbidder) {
				debuglog("Repeat found! [" + adslotelementid + "/" + bidderofcurrentad + "]. Sending to analytics.");
				/* ADBIDDERS.sendTrackingEvent(
					"Repeat Bidder Detected [" + ADBIDDERS.refreshcounter + "]",
					adslotelementid + "/" + bidderofcurrentad		
				); */
			}
			debuglog("Setting adrefresh=" + (ADBIDDERS.refreshcounter+1));
			ADBIDDERS.adslots[adslotelementid].setTargeting("adrefresh", (ADBIDDERS.refreshcounter+1));
		},

	
		//**
		//*
		sendTrackingEvent: function(action, label) {
			if (!ADBIDDERS.trackingmode) { return false; }
			if (GA === "") { return false; }
			if (issetmulti(PGVARS, "sitecode")) {
				ADBIDDERS.trackingsitecode = PGVARS.sitecode;
			} else {
				ADBIDDERS.trackingsitecode = "UNKNOWN";
			}
			if (typeof PGVARS !== "object" || typeof PGVARS.pgurl !== "string") {
				debuglog("This does not appear to be the PG site. Skipping.");
				return;
			}
			var GAversion = GA;
			if (typeof PGVARS === "object" && typeof PGVARS.prebidupdate === "boolean" && PGVARS.prebidupdate) {
				GAversion = "adTracker2";
			}
			// debuglog("Section is NOT sports/columns. Skipping.");
			// return false;
			debuglog("Sending tracking for " + "Adbidders " + ADBIDDERS.trackingsitecode + "-" + ADBIDDERS.trackingversion);
			ga(GAversion + '.send',{
				hitType: 'event',
				eventCategory: "Adbidders " + ADBIDDERS.trackingsitecode + "-" + ADBIDDERS.trackingversion,
				eventAction: action,
				eventLabel: label
			});	
		},


		/** For testing only */
		refreshAdOLD: function(slotid) {
			if (typeof ADBIDDERS.adslots[slotid] !== "undefined") {
				googletag.pubads().refresh([ADBIDDERS.adslots[slotid]]);	
			} else {
				debuglog("Could not refreshAd('" + slotid + "'). Does not exist in ADBIDDERS.adslots");
			}
			
		},

		disable: function() {
			disabled = true;
			console.log("*** AD REFRESHING DISABLED for this page until next reload");
		}

	};
})();
ADBIDDERS.setAdSlotsObject(DFPADS.slots);
ADBIDDERS.init();

// ************************************
//     pg.all.ads_richmedia.js
// ************************************

// ------- Wallpaper (x51) -------
window.dfpwallpaper = {
	selector: ".dfp-wallpaper",
	testmode: true,
	log: function(thingtolog) {
		if (dfpwallpaper.testmode) {
			console.log(thingtolog);
		}
	},
	checkbodyclass: function() {
		try {
			var fixedwidth = $("body").hasClass("pg-template-fixedwidth");
			var responsive = $("body").hasClass("pg-template-responsive");
			if (fixedwidth) {
				$(dfpwallpaper.selector).addClass("dfp-wallpaper-fixedwidth"); // Removes responsiveness of wallpaper
			} else if (responsive) {
				$(dfpwallpaper.selector).addClass("dfp-wallpaper-responsive");
			}
		} catch(err) {}
	},
	trigger: function() {
			dfpwallpaper.log("----- WALLPAPER: TRIGGERING");
			dfpwallpaper.checkbodyclass();
			$(dfpwallpaper.selector).imagesLoaded().done( function() {
				dfpwallpaper.log("----- WALLPAPER: IMAGES LOADED, showing");
				$(".dfp-wallpaper").addClass("dfp-wallpaper-show");
				$("body").addClass("pg-pagehaswallpaper");
				// $(".adhesion-banner-wrapper").css("display", "block");
			});
	}
};

// ------- Interstitial (x10) -------
window.dfpinterstitial = {
	countinitial:15,
	count: null,
	trigger: function() {
		// Bind close button
		$(".dfpinterstitial-closebutton").on("click", function() {
			$.magnificPopup.close();
		});
		// Make sure image is loaded and document is ready before displaying the interstitial
		$(".dfpinterstitial-image").on("load", function() {
			$(document).ready( function() {
				dfpinterstitial.show();
			});
		});
	},
	show: function() {
		$.magnificPopup.open({
			items: {
				src: '#dfpinterstitial-content', // can be a HTML string, jQuery object, or CSS selector
				type: 'inline',
			},
			modal:true
		});
		dfpinterstitial.count = dfpinterstitial.countinitial + 1; // Reset count
		dfpinterstitial.countdown(); // Begin countdown
	},
	reset: function() {
		$("#dfpinterstitial-content").css("display", "none");
		$(".dfpinterstitial-continue").css("display", "none");
	},
	countdown: function() {
		dfpinterstitial.count -= 1;
		if (dfpinterstitial.count > 0) {
			$(".dfpinterstitial-continue").html("Continuing to Post-Gazette.com in " + dfpinterstitial.count + " seconds...");
			setTimeout(dfpinterstitial.countdown, 1000);
		} else {
			$(".dfpinterstitial-continue").html(" ");
			$.magnificPopup.close();
		}
	}
};

// ------- Pencil Expander (Top3) -------
window.dfppencilexpander = {
	state: "closed",
	key: "",
	trigger: function() {
		$(".pencil-expander-rolledup, .pencil-expander-rolleddown").attr("target", "_blank");
		$(".pencil-expander-button-open").on("click", function() {
			dfppencilexpander.open();
		});
		$(".pencil-expander-button-close").on("click", function() {
			dfppencilexpander.close();
		});
		$("body.pgevoke #dfp-pencil-expander").show();
		dfppencilexpander.checkstorage();
	},
	open: function() {
		if (dfppencilexpander.state != "opened") {
			dfppencilexpander.state = "opened";
			$(".pencil-expander-button-open").css("display","none");
			$(".pencil-expander-wrapper").css("height","300px");
			$(".pencil-expander-rolledup").fadeOut(400);
			$(".pencil-expander-rolleddown").fadeIn(400);
			$(".pencil-expander-button-close").css("display","block");
		}
	},
	close: function() {
		if (dfppencilexpander.state != "closed") {
			dfppencilexpander.state = "closed";
			$(".pencil-expander-button-close").css("display","none");
			$(".pencil-expander-wrapper").css("height","");
			$(".pencil-expander-rolleddown").delay(600).fadeOut(400);
			$(".pencil-expander-rolledup").delay(600).fadeIn(400);
			$(".pencil-expander-button-open").delay(600).fadeIn(400);
		}
	},
	checkstorage: function() {
		var src = $(".pencil-expander-rolledup .pencil-expander-image").attr("src");
		// console.log("*** Found src: "+ src);
		if (typeof src != "undefined") { 
			dfppencilexpander.key = "pgpeelback-" + src;
			// console.log("*** Generated key: " + dfppencilexpander.key);
			var currentval = amplify.store(dfppencilexpander.key);
			// console.log("*** Current stored value: " + currentval)
			if (currentval != "1") {
				// console.log("*** New user / Automating");
				amplify.store(dfppencilexpander.key, "1", {expires: 21600000});
				dfppencilexpander.automate();
			} else {
				// console.log("*** Repeat user! No automation");
			}
		}
	},
	automate: function() {
		setTimeout(dfppencilexpander.open, 1000);
		setTimeout(dfppencilexpander.close, 11000);
	},
	reset: function() {
		// Manually clear the storage
		amplify.store(dfppencilexpander.key, null);
		console.log("**** RESET SUCCESSFUL: You have reset the Pencil Expander ad in your browser. Please reload this page now. When you do, the ad should automatically open itself shortly after the page loads, then automatically close itself 10 seconds later. It won't do this again for the next 6 hours after that, unless you manually reset it again.");
	}
};

// ------- Peelback (TopRight) -------
window.dfppeelback = {
	state:"closed",
	key:"",
	debugmode: true,
	log: function(x) {
		if (dfppeelback.debugmode) {
			console.log(x);
		}
	},
	trigger: function() {
		var t1 = new Date().getTime();
		dfppeelback.log("*** PEELBACK unit triggered");
		$(".peelback-wrapper").imagesLoaded().done( function() {
			var t2 = new Date().getTime();
			dfppeelback.log("*** PEELBACK unit done loading images (" + (t2-t1).toString() + "ms)");
			$("[name='peelback-overlay-map'] area").attr("target", "_blank");
			$(".peelback-button-open").on("click", function() {
				dfppeelback.open();
			});
			$(".peelback-button-close").on("click", function() {
				dfppeelback.close();
			});
			$(".peelback-wrapper").css("display", "block");
			dfppeelback.checkstorage();
		});
	},
	open: function() {
		if (dfppeelback.state != "opened") {
			dfppeelback.state = "opened";
			$(".peelback-button-open").css("display","none");
			$(".peelback-wrapper").css("width","600px").css("height","650px");
			$(".peelback-rolledup").fadeOut(400);
			$(".peelback-rolleddown").fadeIn(400);
			$(".peelback-overlay > img").attr("usemap", "#peelback-overlay-map");
			$(".peelback-button-close").delay(600).fadeIn(400);
		}
	},
	close: function() {
		if (dfppeelback.state != "closed") {
			dfppeelback.state = "closed";
			$(".peelback-button-close").css("display","none");
			$(".peelback-rolleddown").delay(800).fadeOut(200);
			$(".peelback-rolledup").delay(400).fadeIn(400);
			$(".peelback-overlay > img").attr("usemap", "");
			$(".peelback-wrapper").css("width","").css("height","");
			$(".peelback-button-open").delay(600).fadeIn(400);
		} 
	},
	checkstorage: function() {
		var src = $(".peelback-rolledup .peelback-image").attr("src");
		dfppeelback.log("*** PEELBACK: Found image src: "+ src);
		if (typeof src != "undefined") { 
			dfppeelback.key = "pgpeelback-" + src; // Unique key is based on the src of the first image
			dfppeelback.log("*** PEELBACK: Generated key: " + dfppeelback.key);
			var alreadyautoloaded = amplify.store(dfppeelback.key);
			dfppeelback.log("*** Current stored value: " + alreadyautoloaded);
			if (typeof alreadyautoloaded == "undefined" || alreadyautoloaded != "1") {
				dfppeelback.log("*** PEELBACK: New user. Auto-opening!");
				amplify.store(dfppeelback.key, "1", {expires: 21600000});
				dfppeelback.automate();
			} else {
				dfppeelback.log("*** PEELBACK: Repeat user. No automation!");
			}
		}
	},
	automate: function() {
		setTimeout(dfppeelback.open, 1000);
		setTimeout(dfppeelback.close, 11000);
	},
	reset: function() {
		// Manually clear the storage
		amplify.store(dfppeelback.key, null);
		console.log("**** RESET SUCCESSFUL: You have reset the PEELBACK ad in your browser. Please reload this page now. When you do, the ad should automatically open itself shortly after the page loads, then automatically close itself 10 seconds later. It won't do this again for the next 6 hours after that, unless you manually reset it again.");
	}
};


// ------- Adhesion Banner -------
window.dfpadhesionbanner = (function() {
	var debuglogkey = "DFPADHESIONBANNER";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		storagekey: "pgadhesion-dontshow",
		dontshow: false,
		// debugmode: true, // Deprecating
		/* log: function(x) { // Deprecating
			if (dfpadhesionbanner.debugmode) {
				console.log(x);
			}
		}, */
		log: function(thingtolog) {
			debuglog(thingtolog);
		},
		trigger: function() {
			// This function is called from within the ad itself after it attaches the creative to the body. This waits for the images to load, displays the creative, and sets up the necessary click binding.
			debuglog("Triggering");
			$(".adhesion-banner-wrapper").imagesLoaded().done( function() {
				debuglog("Images Loaded. Displaying...");
				$(".adhesion-banner-wrapper").css("display", "block");
				$(".adhesion-banner-placeholder").css("display", "block");
				$(".adhesion-banner-close-button").on("click", function() { 
					dfpadhesionbanner.close();
				});
			});
		},
		checkStorage: function() {
			debuglog("Checking Storage...");
			var storedvalue = amplify.store(dfpadhesionbanner.storagekey);
			debuglog("Stored Value: " + storedvalue);
			dfpadhesionbanner.dontshow = (storedvalue == "1");
			debuglog("Dont Show: " + dfpadhesionbanner.dontshow);
		},	
		close: function() {
			debuglog("Closing...");
			$(".adhesion-banner-wrapper").remove();
			dfpadhesionbanner.removePlaceholder();
			if (typeof PGVARS !== "undefined" && typeof PGVARS.sectionid !== "undefined" && PGVARS.sectionid === "frontpage") {
				debuglog("Sectionid is frontpage. Setting 'dontshow' storagekey");
				amplify.store(dfpadhesionbanner.storagekey, "1", {expires: 14400000}); // Store value 
			} else {
				debuglog("Sectionid is NOT frontpage, so NOT setting 'dontshow' storagekey");
			}
		},
		removePlaceholder: function() {
			// Remove placeholder from DOM
			// debuglog("Removing placeholder");
			$(".adhesion-banner-placeholder").remove(); 
		},
		reset: function() {
			// Manually clear the storage
			amplify.store(dfpadhesionbanner.storagekey, null);
			console.log("**** RESET SUCCESSFUL: You have reset the ADHESION BANNER ad in your browser. Please reload this page now. If an ADHESION BANNER ad is booked, it should show up for you. If you hit the close button, it will not show up again for another 4 hours, unless you manually reset it like this again.");	 
		}
	};
})();
dfpadhesionbanner.checkStorage(); // Trigger the storage check right away so we know whether to display the ad


/*
if (typeof PGVARS !== "undefined" && (PGVARS.requesttype === "STORY" || PGVARS.sectionid === "header-evoke")) {
	(function() {
		var $adhesion = $("pg-ads-adhesion-wrapper");
		if ($adhesion.length === 1) {
			DFPADS.cmd( function() {
				DFPADS.initializeAll("#pg-ads-adhesion-wrapper");
			});
			dfpadhesionbanner.removePlaceholder();
		}
	})();	
}
*/

// ------- Adhesion Banner Mobile -------
window.dfpadhesionbannermobile = (function() {
	return {
		initialized: false,
		init: function() {
			if (typeof DFPADS === "undefined" && (typeof PGVARS === "undefined" || PGVARS.sectionid !== "adpreviewmobile")) {
				console.log("DFPADS not found. Cannot initialize mobile adhesion banner.");
				return;
			}
			if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
				console.log("x01 is disabled for The Blade");
				return false;
			}
			$(document).ready(function() {
				var sitetype = PGVARS.sitetype || false;
				var requesttype = PGVARS.requesttype || false;
				var adsection = PGVARS.sectionseolabel || false;
				if (!sitetype || !requesttype || !adsection) {
					console.log("Missing required value");
					return;
				}
				var sectionid = PGVARS.sectionid || false;
				if (sectionid && sectionid === "header-evoke") {
					console.log("Skipping x01 for /header-evoke");
					return;
				}
				var thehtml = "";
				thehtml += '<div class="pg-mobile-adhesionbanner">';
				thehtml += '<div style="width:320px;margin:0 auto">';
				thehtml += '<div data-dfpads-position="X01" data-dfpads-adsection="' + adsection + '">';
				thehtml += '<div class="pg-adtarget"></div>';
				thehtml += '</div>';
				thehtml += '</div>';
				thehtml += '</div>';
				$("body").append($(thehtml));
				DFPADS.cmd(function() {
					DFPADS.initializeAll(".pg-mobile-adhesionbanner");
				});
			});
		} 
	};
})();
window.dfpadhesionbannermobile.init();

// ------- Mobile Interstitial (x15) -------
window.dfpinterstitialmobile = {
	countinitial:15,
	count: null,
	debugmode: true,
	log: function(thingtolog) {
		if (dfpinterstitialmobile.debugmode == true) {
				console.log(thingtolog);
		}
	},
	trigger: function() {
		dfpinterstitialmobile.log("DFP INTERSTITIAL: trigger() called");
		$("#div-gpt-ad-x15").css("display","none");
		// Bind close button
		$(".dfpinterstitialmobile-closebutton").on("click", function() {
			$.magnificPopup.close();
		});
		// Make sure image is loaded and document is ready before displaying the interstitial
		$(".dfpinterstitialmobile-image").on("load", function() {
			dfpinterstitialmobile.log("DFP INTERSTITIAL: Images loaded");
			$(document).ready( function() {
				dfpinterstitialmobile.log("DFP INTERSTITIAL: Calling show() function");
				dfpinterstitialmobile.show();
			});
		});
	},
	show: function() {
		dfpinterstitialmobile.log("DFP INTERSTITIAL: show() called");
		$.magnificPopup.open({
			items: {
				src: '#dfpinterstitialmobile-content', // can be a HTML string, jQuery object, or CSS selector
				type: 'inline',
			},
			modal:true,
			callbacks: {
				open: function() {
					console.log("running open func");
					$(".mfp-content")
						.css("height","auto")
						.css("background-color","transparent");
				}
			}
		});
		dfpinterstitialmobile.count = dfpinterstitialmobile.countinitial + 1; // Reset count
		dfpinterstitialmobile.countdown(); // Begin countdown
	},
	/* reset: function() {
		$("#dfpinterstitialmobile-content").css("display", "none");
		$(".dfpinterstitialmobile-continue").css("display", "none");
	}, */
	countdown: function() {
		dfpinterstitialmobile.count -= 1;
		if (dfpinterstitialmobile.count > 0) {
			$(".dfpinterstitialmobile-continue").html("Continuing to Post-Gazette.com in: " + dfpinterstitialmobile.count + " seconds");
			setTimeout(dfpinterstitialmobile.countdown, 1000);
		} else {
			$(".dfpinterstitialmobile-continue").html(" ");
			$.magnificPopup.close();
		}
	}
};

window.dfpnavsponsor = (function() {
	return {
		init: function() {
			if (PGVARS.site !== "blade") { return false; }
			DFPADS.cmd(function() {
			var $div;
			$div = $("<div id='tbnavsponsor'></div>");
			$div.html($(DFPADS.getAdSlotString({
				"position": "NAVSPONSOR",
				"adsection": PGVARS.sectionpath
			})));
			$(".pgevoke-slidemenu").append($div);
			DFPADS.initializeAll("#tbnavsponsor");
			});
		}
	};
})();
dfpnavsponsor.init();



// ************************************
//     pg.all.ads_richmediainit.js
// ************************************

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.richmedia = (function() {
	var debuglogkey = "RICHMEDIA";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var sitecode = "";
	var requesttype = "";
	var param1 = "";
	var param2 = "";
	var istoplevelsection = false;
	var sectionid = "";
	var sectionpath = "";
	var site = "";
	return {
		init: function() {
			if (typeof PGPageVersion === "string" && PGPageVersion === "pgold") {
				debuglog("PGPageVersion is missing or is 'pgold'. Cannot init.");
				return false;
			}
			if (typeof PGVARS === "object") {
				debuglog("PGVARS found. Setting up local variables");
				sitecode = (typeof PGVARS.sitecode === "string") ? PGVARS.sitecode : "";
				requesttype = (typeof PGVARS.requesttype === "string") ? PGVARS.requesttype : "";
				param1 = (typeof PGVARS.param1 === "string") ? PGVARS.param1 : "";
				param2 = (typeof PGVARS.param2 === "string") ? PGVARS.param2 : "";
				istoplevelsection = (requesttype === "SECTION" && param2 === "") ? true : false;
				sectionid = (typeof PGVARS.sectionid === "string") ? PGVARS.sectionid.toLowerCase() : "";
				sectionpath = (typeof PGVARS.sectionpath === "string") ? PGVARS.sectionpath.toLowerCase() : "";
				site = (typeof PGVARS.site === "string") ? PGVARS.site.toLowerCase() : "";
			} else {
				debuglog("Missing PGVARS! Could not init Rich Media ads");
			}
			PGLIB.all.richmedia.initPencilExpander();
			PGLIB.all.richmedia.initWallpaper();
			PGLIB.all.richmedia.initInterstitial();
			PGLIB.all.richmedia.initPeelback();
			PGLIB.all.richmedia.initAdhesion();
			PGLIB.all.richmedia.initMobileInterstitial();
			// ----- Nate Edit -----
			// PGLIB.all.richmedia.initDesktopInterstitial(); Removing 10/28/2020, redundant
			// ----- End Nate Edit -----
			// ----- Blade positions -----
			PGLIB.all.richmedia.initTBADhesion();
			PGLIB.all.richmedia.initTB1X1();
			PGLIB.all.richmedia.initTBAdhesionTest();
		},
		initWallpaper: function() {
			debuglog("WALLPAPER: Running initWallpaper v2");
			// Frontpage: On
			// Sections: On for top level + Steelers, Penguins, Pirates
			// Stories: On
			// ----- Placement logic -----
			// var subsections = ["steelers", "penguins", "pirates", "food", "health"];
			var storysections = ["sports", "local"];
			var storysubsections = [
				"business/bop",
				"news/health"
			];
			var subsectionpaths = [
				"life/food",
				"life/health",
				"news/health",
				"sports/steelers",
				"sports/penguins",
				"sports/pirates",
				"sports/highschool",
				"sports/high-school-basketball",
				"sports/high-school-athlete-of-the-week",
				"sports/high-school-football",
				"sports/high-school-soccer",
				"sports/hsother"
			];
			var initad = false;
			if (requesttype === "FRONTPAGE") {
				initad = true;
			} else if (requesttype === "STORY") {
				if (PGVARS.site === "blade") {
					initad = true;
				} else if (storysections.indexOf(param1.toLowerCase()) >= 0) {
					debuglog("WALLPAPER: ON for this story page");
					initad = true;
				} else if (storysubsections.indexOf(sectionpath) >= 0) {
					debuglog("WALLPAPER: ON for this story page (subsection)");
					initad = true;
				} else {
					debuglog("WALLPAPER: OFF for this story page.");
				}
			} else if (requesttype === "SECTION") {
				debuglog("WALLPAPER: Requsttype is SECTION");
				if (istoplevelsection) {
					debuglog("WALLPAPER: istoplevelsection===true. Gets wallpaper");
					initad = true;
				} else {
					debuglog("WALLPAPER: istoplevelsection===false");
					if (subsectionpaths.indexOf(sectionpath) >= 0) {
						debuglog("WALLPAPER: This subsection gets the wallpaper");
						initad = true;
					} else {
						debuglog("WALLPAPER: Skipping for this page. Did not find '" + sectionid.toLowerCase() + "' in subsectionpaths array:");
						debuglog(subsectionpaths);
						initad = false;
					}
				}
			}
			// ----- Enable/Disable -----
			var selector = "#pg-ads-x51-wrapper";
			if (initad) {
				debuglog("WALLPAPER: initad===true");
				if (typeof DFPADS === "object") {
					debuglog("WALLPAPER: DFPADS found. Initing.");
					DFPADS.cmd( function() {
						DFPADS.initializeAll(selector);
					});
				} else {
					debuglog("WALLPAPER: Couldn't find DFPADS. Can't init.");
				}
			} else {
				DFPADS.disableAll(selector);
				debuglog("WALLPAPER: OFF");
			}
		},
		initPeelback: function() {
			// Already inited on homepage. Should add secitons here and not call empty initializeAll()
			// on section pages
			// ----- Placement logic -----
			debuglog("Checking peelback. Site: " + site + " & requesttype: " + requesttype);
			var initad;
			var sectionpaths = ["ae", "adtest", "local", "news", "news/health"];
			if (requesttype === "FRONTPAGE") {
				initad = true;
			} else if (requesttype === "SECTION") {
				if (sectionpaths.indexOf(sectionpath.toLowerCase()) >= 0) {
					initad = true;    
				} else {
					initad = false;
				}
			} else if (site === "blade" && requesttype === "STORY") {
				debuglog("True");
				initad = true;
			} else {
				initad = false;
			}
			// ----- Enable/Disable -----
			var selector = "#pg-ads-peelback-wrapper";
			if (initad) {
				debuglog("PEELBACK: initad is true. Initing.");
				DFPADS.cmd( function() {
					DFPADS.initializeAll(selector);
				});
			} else {
				DFPADS.disableAll(selector);
				debuglog("PEELBACK: OFF");
			}
		},
		initPencilExpander: function() {
			// ----- Placement logic -----
			var sectionpaths = [
				"adtest",
				"ae",
				"business",
				"life",
				"local",
				"news",
				"news/health",
				"sports",
				"sports/penguins"
			];
			var initad;
			if (requesttype === "FRONTPAGE") {
				initad = true;
			} else if (requesttype === "SECTION" && sectionpaths.indexOf(sectionpath.toLowerCase()) >= 0) {
				initad = true;
			} else {
				initad = false;
			}
			// ----- Enable/Disable -----
			var selector = ".pgevoke-topads-top3";
			if (initad) {
				debuglog("PENCIL EXPANDER: initad is true. Initing.");
				DFPADS.cmd( function() {
					DFPADS.initializeAll(selector);
				});
			} else {
				DFPADS.cmd( function() {
					DFPADS.disableAll(selector);
				});
				debuglog("PENCIL EXPANDER: OFF");
			}
		},
		initInterstitial: function() {
			// Homepage only
			// ----- Placement logic -----
			var initad;
			if (requesttype === "FRONTPAGE") {
				initad = true;
			} else if (sectionid === "adtest") {
				initad = true;
			} else {
				initad = false;
			}
			// ----- Enable/Disable -----
			var selector = "#pg-ads-interstitial-wrapper";
			if (initad && document.referrer.indexOf("google") < 0) {
				debuglog("INTERSTITIAL: Initializing");
				DFPADS.cmd( function() {
					DFPADS.initializeAll(selector);
				});
			} else {
				DFPADS.disableAll(selector);
				debuglog("INTERSTITIAL: OFF");
			}
		},
		initAdhesion: function() {
			// Frontpage: On
			// Sections: On for top level + select subsections
			// Stories: On for all
			debuglog("ADHESION: Init");
			// ----- Placement logic -----
			var sectionpaths = [
				"steelers",
				"penguins",
				"pirates",
				"news/health",
				"sports/highschool",
				"sports/high-school-basketball",
				"sports/high-school-athlete-of-the-week",
				"sports/high-school-football",
				"sports/high-school-soccer",		
				"sports/hsother"
			];
			var initad;
			if (PGVARS.site === "blade") {
				debuglog("ADHESION: Off for Blade");
				initad = false;
			} else {
				if (requesttype === "FRONTPAGE") {
					initad = true;
				} else if (requesttype === "STORY") {
					initad = true;
				} else if (requesttype === "SECTION") {
					debuglog("ADHESION: Requsttype is SECTION");
					if (istoplevelsection) {
						debuglog("ADHESION: istoplevelsection===true. Gets adhesion");
						initad = true;
					} else {
						debuglog("ADHESION: istoplevelsection===false");
						if (sectionpaths.indexOf(sectionpath.toLowerCase()) >= 0) {
							debuglog("ADHESION: This subsection gets the adhesion");
							initad = true;
						} else if (PGVARS.param1 === "business") {
							debuglog("ADHESION: On for all Business subsections");
							initad = true;
						} else {
							debuglog("ADHESION: Could not find " + sectionpath.toLowerCase() + " in subsections array:");
							debuglog(sectionpaths);
							initad = false;
						}
					}
				} else if (param1 === "weather") {
					initad = true;
				}
			}
			// ----- Enable/Disable -----
			var selector = "#pg-ads-adhesion-wrapper";
			if (initad) {
				debuglog("ADHESION: getsadhesion is true.");
				var $adhesion = $("#pg-ads-adhesion-wrapper");
				if ($adhesion.length === 1) {
					debuglog("ADHESION: Found wrapper. Initing.");
					if (typeof DFPADS === "object") {
						DFPADS.cmd(function() {
							DFPADS.initializeAll(selector);
						});
						dfpadhesionbanner.removePlaceholder();
					}
				} else {
					debuglog("ADHESION: Could not find wrapper. Can't initialize");
				}
			} else {
				DFPADS.disableAll(selector);
				debuglog("ADHESION: OFF");
			}
		},
		initMobileInterstitial: function() {
			// On for ALL Evoke pages on mobile
			// pgoldm pages still initialized from within macro
			var selector = "#pg-ads-x15-wrapper";
			if (document.referrer.indexOf("google") < 0) {
				if (typeof DFPADS === "object") {
					DFPADS.cmd( function() {
						DFPADS.initializeAll(selector);
					});        
				}
			} else {
				DFPADS.disableAll(selector);
				debuglog("MOBILE INTERSTITIAL: OFF");
			}
		},
		// NATE EDIT
		initDesktopInterstitial: function() {
			// On for ALL Evoke pages on Desktop
			// pgoldm pages still initialized from within macro
			var selector = "#pg-ads-interstitial-wrapper";
			if (document.referrer.indexOf("google") < 0) {
				if (typeof DFPADS === "object") {
					DFPADS.cmd( function() {
						DFPADS.initializeAll(selector);
					});        
				}
			} else {
				DFPADS.disableAll(selector);
				debuglog("DESKTOP INTERSTITIAL: OFF");
			}
		},
		// END NATE EDIT
		initTBADhesion: function() {
			// Only on Blade story pages
			debuglog("initTBADhesion v2");
			var initad;
			if (PGVARS.site === "blade") {
				var sectionpaths = ["local", "news", "sports", "a-e", "business", "opinion", "health-well-being"];
				if (PGVARS.requesttype === "FRONTPAGE") {
					initad = true;
				} else if (PGVARS.requesttype === "STORY") {
					initad = true;
				} else if (PGVARS.requesttype === "SECTION" && sectionpaths.indexOf(sectionpath.toLowerCase()) >= 0) {
					initad = true;
				} else {
					initad = false;
				}
			} else {
				initad = false;
			}
			if (initad) {
				debuglog("Initializing TBADHESION");
				DFPADS.cmd(function() {
					var $div;
					$div = $("<div id='tbadhesion'></div>");
					$div.html($(DFPADS.getAdSlotString({
						"position": "TBADHESION",
						"adsection": PGVARS.sectionpath
					})));
					$("body").append($div);
					DFPADS.initializeAll("#tbadhesion");
					$div = $("<div id='tbadhesionmobile'></div>");
					$div.html($(DFPADS.getAdSlotString({
						"position": "TBADHESIONMOBILE",
						"adsection": PGVARS.sectionpath
					})));
					$("body").append($div);
					DFPADS.initializeAll("#tbadhesionmobile");
				});
			} else {
				// DFPADS.disableAll("#tbadhesion");
				// DFPADS.disableAll("#tbadhesionmobile");
				debuglog("TBADHESION: OFF");                
			}
		},
		initTB1X1: function() {
			var initad;
			if (PGVARS.site === "blade" && PGVARS.requesttype === "FRONTPAGE") {
				initad = true;
			} else {
				initad = false;
			}
			if (initad) {
				DFPADS.cmd(function() {
					var $div;
					$div = $("<div id='TBADHESIONTEST'></div>");
					$div.html($(DFPADS.getAdSlotString({
						"position": "TBADHESIONTEST",
						"adsection": PGVARS.sectionpath
					})));
					$("body").append($div);
					$div = $("<div id='TBADHESIONMOBILETEST'></div>");
					$div.html($(DFPADS.getAdSlotString({
						"position": "TBADHESIONMOBILETEST",
						"adsection": PGVARS.sectionpath
					})));
					$("body").append($div);
					DFPADS.initializeAll("#TBADHESIONTEST");
					DFPADS.initializeAll("#TBADHESIONMOBILETEST");
				});
			}
		},
		initTBAdhesionTest: function() {
			// Only on Blade homepage
			if (PGVARS.site !== "blade") { return; }
			if (PGVARS.requesttype !== "FRONTPAGE") { return; }
			debuglog("Initializing ADHESIONMOBILE");
			var initad = true;
			if (initad) {
				DFPADS.cmd(function() {
					var $div;
					$div = $("<div id='ADHESIONMOBILE'></div>");
					$div.html($(DFPADS.getAdSlotString({
						"position": "ADHESIONMOBILE",
						"adsection": PGVARS.sectionpath
					})));
					$("body").append($div);
					DFPADS.initializeAll("#ADHESIONMOBILE");
				});
			}
		}
	};
})();
window.PGLIB.all.richmedia.init();

// **********************************
//      pg.all.pwdrawer.js
// **********************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.pwdrawer = (function() {
	var debuglogkey = "PWDRAWER";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	// function isset test
	var pwdrawerstate = "hidden";
	var buttonselector = ".pg-pwdrawer-panel-button";
	var statedelaytime = 700;
	var defaults = {
		"panelCollapsed": {
			"button": "SEE ALL OPTIONS",
			"content": "Please subscribe for unlimited access"
		},
		"panelExpanded": {
			"button": "COLLAPSE",
			"content": "Please subscribe for unlimited access"
		}
	};
	var settings = defaults;
	var bigdraweropen = false;
	function setStateDelayed(newstate) {
		setTimeout(function() {
			pwdrawerstate = newstate;
		}, 700);
	}
	return {
		show: function(count) {
			if (typeof count !== "string" && typeof count !== "number") {
				debuglog("Must specify count to show() function. Exiting.");
				return;
			}
			count = (typeof count === "number") ? parseInt(count) : count;
			count = count.toString();
			$(document).ready(function() {
				// $("body").append("<div id='pg-pwdrawer'>You have " + count + " free articles remaining. Subscribe for unlimited digital access.</div>");	
				$("body").loadAjaxContent({
					"template": "pwdrawer",
					"processfunction": "simple",
					"jsondata": {

					}
				});
			});
			setTimeout(function() {
				PGLIB.all.pwdrawer.bindButtons();
				PGLIB.all.pwdrawer.setMessageCollapsed("You have <b>" + count + " free articles</b> remaining");
				PGLIB.all.pwdrawer.collapse();
			}, 100);
		},
		showNEW: function(settings) {
			if (typeof settings !== "object") {
				debuglog("ERROR: Must pass settings object to show pwdrawer. Exiting.");
				return;
			}

		},
		expand: function(count) {
			pwdrawerstate = "working";
			$("body").removeClass("pg-pwdrawer-collapsed");
			$("body").addClass("pg-pwdrawer-expanded");
			setStateDelayed("expanded");
		},
		collapse: function(count) {
			pwdrawerstate = "working";
			$("body").removeClass("pg-pwdrawer-expanded");
			$("body").addClass("pg-pwdrawer-collapsed");
			setStateDelayed("collapsed");
		},
		hide: function() {
			pwdrawerstate = "working";
			$("body").removeClass("pg-pwdrawer-collapsed");	
			$("body").removeClass("pg-pwdrawer-expanded");
			setStateDelayed("hidden");
		},
		toggle: function() {
			switch (pwdrawerstate) {
				case "collapsed":
					PGLIB.all.pwdrawer.expand();
					break;
				case "expanded":
					PGLIB.all.pwdrawer.collapse();
					break;
			}
		},
		setMessageCollapsed: function(contentstring) {
			$("pg-pwdrawer-panel-collapsed-content").html(contentstring);
		},
		setButtonHTML: function(htmlstring) {
			$(buttonselector).html(htmlstring);
		},
		bindButtons: function() {
			debuglog("Binding button");
			$(document).on("click", "#pg-pwdrawer-panel-collapsed", function() {
				debuglog("Button clicked. Current state is '" + pwdrawerstate + "'.");
				PGLIB.all.pwdrawer.toggle();
			});
			$(document).on("click", "#pg-pwdrawer-panel-expanded " + buttonselector, function() {
				debuglog("Button clicked. Current state is '" + pwdrawerstate + "'.");
				PGLIB.all.pwdrawer.toggle();
			});
		}
	};
})();
// PGLIB.all.pwdrawer.init();

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.bigdrawer = (function() {
	var debuglogkey = "BIGDRAWER";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var alreadyopen = false;
	return {
		show: function(opts) {
			if (alreadyopen) {
				debuglog("Already open. Exiting.");
				return;
			}
			alreadyopen = true;
			opts = (typeof opts === "object" && opts !== null) ? opts : {};
			opts.htmlstring = (typeof opts.htmlstring === "string") ? opts.htmlstring : "";
			opts.delay = (typeof opts.delay === "number" && opts.delay > 100) ? Math.round(opts.delay) : 100; 
			opts.closebutton = (typeof opts.closebutton === "boolean") ? opts.closebutton : false;
			opts.bgcolor = (typeof opts.bgcolor === "string") ? opts.bgcolor : false;
			if (PGVARS.site === "blade") {
				// $("div[id*='hoverbar_spacer']").css("display", "none"); // Hide adventive spacer
			}
			$("body").addClass("pg-bigdraweropen");
			PGLIB.all.stickyheader.disable();
			PGLIB.all.slidemenu.disable();
			if (PGVARS.requesttype === "STORY") {
				$(window).scrollTop(0);	
			}
			$(".pgevoke-slidemenu").before("<div class='pg-bigdrawergradient'></div>");
			if (opts.htmlstring === "") {
				// htmlstring = "<iframe src='https://my.post-gazette.com/purchase/'><iframe>";
				/* htmlstring = "<div style='background-color:red;height:1000px'></div>"; */
			}
			if (opts.closebutton) {
				opts.htmlstring += "<div class='pg-bigdrawer-closebutton'>X</div>";
				$(document).on("click", ".pg-bigdrawer-closebutton", function() {
					PGLIB.all.bigdrawer.da();
				});
			}
			var thedrawer = "";
			thedrawer += "<div class='pg-bigdrawer'";
			if (typeof opts.bgcolor === "string") {
				thedrawer += " style='background:" + opts.bgcolor + "'";
			}
			thedrawer += ">";
			thedrawer += opts.htmlstring;
			thedrawer += "</div>";
			debuglog("BIGDRAWERELEM: " + thedrawer);
			// $(".pgevoke-pagewrapper").after("<div class='pg-bigdrawer'>" + opts.htmlstring + "</div>");
			$(".pgevoke-pagewrapper").after(thedrawer);
			setTimeout(function() {
				// $("body.pg-bigdraweropen .pg-bigdrawer").css("margin-top", "50vh");
				$("body").addClass("pg-bigdraweropen-show");
			}, opts.delay);				
		},
		da: function() {
			$("body").removeClass("pg-bigdraweropen-show");
			$(".pg-bigdrawergradient").remove();
			setTimeout(function() {
				$(".pg-bigdrawer").remove();
				$("body").removeClass("pg-bigdraweropen-show");
				$("body").removeClass("pg-bigdraweropen");
				PGLIB.all.stickyheader.reenable();
				PGLIB.all.slidemenu.reenable();
				alreadyopen = false;
			}, 1000);
		}
	};
})();

// **********************************
//      pg.all.ads_overlay.js
// **********************************

window.selector = (window.selector) ? window.selector : "";
window.PGDFPADS = {};
window.PGDFPADS.overlay = function($){
	$(".adanchor").remove();
	jQuery.each(DFPADS.slots,function(n,v){
		var unitpath = "AD UNIT PATH: "+v.getAdUnitPath();
		var adpos = "POSITION: "+jQuery("#"+n).parent().data("dfpadsPosition");
		var posname = jQuery("#"+n).parent().data("dfpadsPosition");
		var sizeString = "SIZES: ";
		var sizeArr = [];
		for(var x in ADSYSTEMCONFIG.positions[posname].sizes){
			var s = ADSYSTEMCONFIG.positions[posname].sizes[x].join("x");
			sizeArr.push(s);
		}
		sizeString+= sizeArr.join(" , ");
		console.log(sizeString);
		console.log(jQuery("#"+n).parent().width(), jQuery("#"+n).parent().outerWidth())
		console.log(jQuery("#"+n).parent().height(),jQuery("#"+n).parent().outerHeight())
		console.log(jQuery("#"+n).parent().offset())
		var thediv = $("<div><strong>"+adpos+"<br />"+unitpath+"<br />"+sizeString+"</strong></div>");
		thediv.css("width",jQuery("#"+n).parent().outerWidth()-10+"px");
		thediv.css("height",jQuery("#"+n).parent().outerHeight()-10+"px");
		thediv.css("top",jQuery("#"+n).parent().offset().top+"px");
		thediv.css("left",jQuery("#"+n).parent().offset().left+"px");
		thediv.css("z-index",99999);
		thediv.css("font-size","15px");
		thediv.css("position","absolute");
		thediv.css("opacity",".9");
		thediv.css("background-color","#C00")
		thediv.css("color","#fff");
		thediv.css("padding","5px");
		thediv.addClass("DFPADSLEGACY-overlay");
		thediv.css("top","0px");
		thediv.css("left","0px");
		thediv.css("word-wrap","break-word");
		jQuery("#"+n).parent().prepend("<div class='adanchor' style='position:relative; clear:both;'></div>")
		jQuery("#"+n).parent().find(".adanchor").append(thediv);
	   console.log(unitpath,adpos)
	});
};

if (typeof PGVARS !== "undefined" && (PGVARS.requesttype==="STORY" || PGVARS.requesttype==="SECTION")) {
	$(".pgevoke-backtotop").on("click", function() {
		$('html,body').animate({ scrollTop: 0 }, 800);
	});
}

if (typeof PGVARS !== "undefined" && (PGVARS.requesttype === "FRONTPAGE" && PGVARS.versionfp !== "1")) {

	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.pageautorefresh = (function() {
		var debuglogkey = "PAGEAUTOREFRESH";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		// ##### Private #####
		var interval = 300000; // Default, in seconds
		var thetimeout;
		var lastresettime = null;
		var isdisabled = false;
		function clearCountdownTimeout() {
			clearTimeout(thetimeout);
		}
		function setCountdownTimeout() {
			thetimeout = setTimeout(timeoutFunction, interval);			
		}
		function resetCountdown() {
			clearCountdownTimeout();
			lastresettime = new Date().getTime();
			setCountdownTimeout();
		}
		function timeoutFunction() {
			location.reload(true); // Reload page with forceGet=true
		}
		function getIntervalInSeconds() {
			return (interval / 1000);
		}

		// ##### Public #####
		return {

			init: function(seconds) {
				$(document).ready( function() {
					if (typeof seconds !== "number") {
						debuglog("Supplied interval was not a number. Cannot initialize. Aborting.");
						return;
					}
					interval = seconds * 1000;
					debuglog("Initialiing countdown timer (" + getIntervalInSeconds() + " seconds)");
					resetCountdown();
					$(window).on("scroll", function() {
						debuglog("User scrolled. Reseting countdown timer to " + getIntervalInSeconds() + " seconds.");
						resetCountdown();
					});
				});
			},

			disable: function() {
				clearCountdownTimeout();
				isdisabled = true;
				console.log("*** PAGE AUTO REFRESH: Disabled. The page will not automatically refresh.");
			},

			showTimeout: function() {
				debuglog(thetimeout);
			},

			showRemainingTime: function() {
				if (lastresettime === null) {
					console.log("*** PAGE AUTO REFRESH: Not inialized. There is no active countdown timer.");
				} if (isdisabled === true) {
					console.log("*** PAGE AUTO REFRESH: You have disabled the auto refresh. There is no active countdown timer.");
				} else {
					var thetime = new Date().getTime();
					return "*** PAGE AUTO REFRESH: Reloading in " + (Math.round((interval - (thetime - lastresettime)) / 1000)) + " seconds" ;
				}
			}

		};
	})();
	if (PGVARS.site !==  "blade") {
		PGLIB.all.pageautorefresh.init(300);	
	}
}

// *****************************************
//   pgevoke.includes.js_storystickyfooter
// *****************************************
// if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.stickyfooter = (function() {

		var debuglogkey = "STICKYFOOTER";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var state = "visible";
		var selector = ".pgevoke-rightrail-login";
		var requiredheight = 730; // Window height in px for login to be visible
		var disabled = false;
		return {
			init: function(theselector) {
				if (typeof theselector === "string") { selector = theselector; }
				$(document).ready( function() {
					PGLIB.all.stickyfooter.update();
					$(window).resize(function() {
						PGLIB.all.stickyfooter.update();
					});
					/*
					$(window).scroll(function() {
						PGLIB.all.stickyfooter.update();
					});
					*/
				});
			},
			refreshAll: function() {
				if (state === "visible") {
					$(selector).css("display","block");
				} else {
					$(selector).css("display","none");
				}
			},
			setState: function(newstate) {
				debuglog("Setting state to '" + newstate + "'");
				if (newstate === "visible") {
					state = "visible";
					$(selector).css("display","block");
				} else {
					state = "hidden";
					$(selector).css("display","none");				
				}
				debuglog("State is now '" + state + "'");
			},
			update: function() {
				if (disabled) { return; }
				debuglog($(window).height() + " / " + requiredheight);
				if ($(window).height() >= requiredheight) {
					if (state !== "visible") {
						PGLIB.all.stickyfooter.setState("visible");
					}
				} else {
					if (state !== "hidden") {
						PGLIB.all.stickyfooter.setState("hidden");
					}
				}
			},
			getState: function() {
				return state;
			},
			disable: function() {
				disabled = true;
				PGLIB.all.stickyfooter.setState("visible");
			}
		};
	})();
	if (typeof PGVARS !== "undefined") {
		if (PGVARS.requesttype === "STORY") {
			if (typeof isNativoStory === "undefined" || !isNativoStory) {
				PGLIB.all.stickyfooter.init();	
			}
		}
		// PGLIB.all.stickyfooter.init();
	}
// }


// pgevoke.all.backtotop
$(document).ready(function() {
	$(".pgevoke-backtotop").on("click", function() {
		$('html,body').animate({ scrollTop: 0 }, 800);
	});
});

if (typeof PGVARS !== "undefined" && (["FRONTPAGE", "STORY", "SECTION", "TAG"].indexOf(PGVARS.requesttype) >= 0)) {
	document.addEventListener('DOMContentLoaded', function () {
		console.log("DOMContentLoaded!");
	});
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.apwidget = (function() {
		var debuglogkey = "APWIDGET";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var THISMODULE;
		var widgets = {};
		var defaultbreakpoints = ["sm","md","lg","xl"];
		var currentbreakpoint;
		var isDisabled = false;
		var doneLoadingScript = false;
		var disabledSectionPaths = ["news/health"];
		return {
			loaded: false,
			init: function() {
				THISMODULE = this;
				debuglog("init()");
				// ----- Check for correct breakpoint or sitetype ----
				var displaybreakpoints = ["sm","md","lg","xl"];
				if (typeof getResponsiveSize === "function") {
					currentbreakpoint = getResponsiveSize();
				} else {
					debuglog("Aborting. Couldn't detect current breakpoint.");
					return;
				}
				if (!($.inArray(currentbreakpoint, displaybreakpoints) >= 0)) {
					isDisabled = true;
					debuglog("Aborting. AP widgets should not be loaded at current breakpoint (" + currentbreakpoint + ").");
					// debuglog("Invalid breakpoint");
					return;
				} else {
					debuglog("This is a valid breakpoint for the AP Widget. Loading.");
				}
				// ----- Get @sectionid of story to determine script URL -----
				if (typeof PGVARS.sectionpath !== "string") {
					debuglog("Aborting. Couldn't find sectionpath");
					return false;
				}
				if (disabledSectionPaths.indexOf(PGVARS.sectionpath) >= 0) {
					debuglog("Disabled for this sectionpath.");
					return false;
				}
				PGLIB.all.apwidget.loaded = true;
				var sectionpath = PGVARS.sectionpath.toLowerCase();
				debuglog("sectionpath is " + sectionpath);
				var apwidgetid;
				var endpointsubdomain = "pro32";
				// ---- Widget 1 -----
				if (PGVARS.site === "blade") {
					debuglog("Using Blade's ID");
					switch (PGVARS.sectionpath) {
						case "sports/college":
						case "sports/bgsu":
						case "sports/ut":
						case "sports/michigan":
						case "sports/ohio-state":
							debuglog("College widget");
							apwidgetid = "80456d1d0399f468ce020b474c7cfeec";
							endpointsubdomain = "collegefootball";
							break;
						default:
							debuglog("NFL widget");
							apwidgetid = "d8f38e4cc449a595983125c8cf079391";
					}
				} else {
					if (PGVARS.requesttype === "FRONTPAGE") {
						apwidgetid = "bcb7f95376ab7a6983c6bdd8bc25a5be";
					   // apwidgetid = "91e2f17403d627004f1b91b4e7e609dc";
					} else {
						switch (PGVARS.sectionpath) {
							case "sports/pitt":
							case "sports/psu":
							case "sports/wvu":
								apwidgetid = "308397ae77adadd216012bda70ada6fa";
								break;
							case "sports/penguins":
							case "sports/pirates":
								apwidgetid = "9e729a60a3fc3bab0edec66dec441505";
								break;
							case "sports/steelers":
								apwidgetid = "0d302ea463c55ce26b8edf69c27dd293";
								break;
							case "sports/marchmadness":
								debuglog("March maddness");
								apwidgetid = "9468bebb58e4461d5b3c5b79c8146fa3";
								endpointsubdomain = "collegebasketball";
								break;
							case "news/health":
								apwidgetid = "e594f6abc0e5e4cd9e97a690414d55bd";
								break;
							case "sports/olympics":
								apwidgetid = "f608581a54c7c804ca7f21c8a938d091";
								endpointsubdomain = "summergames";
								break;  
							default:
								apwidgetid = "544e9b42bd14dbdc162bd474b3eff48d";    
						}
					}
				}
				widgets[".pgevoke-apwidget"] = {
					"apwidgetid": apwidgetid,
					"endpointsubdomain": endpointsubdomain
				};
				if (PGVARS.site === "pg" && PGVARS.sectionpath === "sports/olympics") {
					widgets[".pgevoke-apwidget2"] = {
						"apwidgetid": "448b0ac13f54cb1bbccf58c96fb19dd5",
						"endpointsubdomain": "summergames"
					};
				}
				// ----- Widget 2 -----
				// widgets[".pgevoke-apwidget-2"] = apwidgetid;
				// ----- Widget 3 (Election) -----
				/*
				if (PGVARS.site === "pg" && PGVARS.sitecode === "DEV") {
					if (PGVARS.requesttype === "SECTION" && sectionpath === "news/politics") {
						apwidgetid = "117c5a775480971165c11add6038d4fb";
					}
					widgets[".pgevoke-apwidget-electionmap"] = {
						"apwidgetid": apwidgetid
					};
				}
				*/
				// ----- Load the widgets -----
				$.each(widgets, function(selector, widgetobj) {
					debuglog("In each for " + selector);
					// Check widget values
					// ----- Set apwidgetid ----
					if (typeof widgetobj.apwidgetid !== "string") {
						debuglog("Could not create widget with selector '" + selector + "'. Missing apwidgetid.");
						return true;
					}
					var apwidgetid = widgetobj.apwidgetid;
					// ---- Set bps -----
					var bps;
					if (typeof widgetobj.custombreakpoints === "object" && Array.isArray(widgetobj.custombreakpoints)) {
						bps = widgetobj.custombreakpoints;
					} else {
						bps = defaultbreakpoints;
					}
					// Check for breakpoint
					// $.inArray(currentbreakpoint, displaybreakpoints) >= 0

					/*
					***** BEGINNING OF ORIGNAL VERSION *****
					// --- Create necessary divs -----
					var $loader = $("<div></div>", {
						id: "pgevoke-apwidget-loader-" + apwidgetid,
						style: "display:none",
					});
					var $targetdiv = $("<div></div>", {
						id: "ap_widget_container_" + apwidgetid
					});
					$loader.append($targetdiv);
					$("#pgevoke-apwidgetloader").append($loader);
					// ---- Load script -----
					var thescript = document.createElement('script');
					thescript.type = 'text/javascript';
					var useSSL = 'https:' == document.location.protocol;
					thescript.src = (useSSL ? 'https:' : 'http:') +
					'//digitalservices.ap.org/widget-content/' + apwidgetid;
					thescript.onload = function() { console.log("Script loaded for " + apwidgetid)};
					debuglog("Loading script from " + thescript.src);
					document.write(thescript.outerHTML);
					// ***** END OF ORIGINAL VERSION *****
					*/

					debuglog("APNEW: Loading resizer script");
					$.ajax({
						url: "https://digitalservices.ap.org/assets/js/resizer.client.min.js",
						dataType: "script",
						success: function() {
							debuglog("APNEW: Done loading resizer script (success callback fired)");
							doneLoadingScript = true;
							$(document).trigger("apwidget:scriptready");
						}
					});
				});
			},
			show: function() {
				if (doneLoadingScript) {
					debuglog("APNEW: show() called & doneLoadingScript. Firing.");
					THISMODULE.finishShowing();
				} else {
					debuglog("APNEW: show() called but script not ready. Waiting.");
					$(document).on("apwidget:scriptready", function() {
						debuglog("Done loading script.");
						THISMODULE.finishShowing();
					});
				}
			},
			finishShowing: function() {
				debuglog("APNEW: Preparing to create iframe");
				debuglog("APNEW: Here is the typeof iFrameResize: " + typeof iFrameResize);
				if (typeof iFrameResize !== "undefined") {
					debuglog("APNEW: Here is iFrameResize:", iFrameResize);
				}
				if (isDisabled) {
					debuglog("APNEW: Disabled at this breakingpoint. Exiting");
					return false;
				}		
				$.each(widgets, function(selector, widgetobj) {
					if (typeof widgetobj.apwidgetid !== "string") {
						debuglog("APNEW: Could not show widget with selector '" + selector + "'. Missing apwidgetid.");
						return true;
					}
					var apwidgetid = widgetobj.apwidgetid;
					var endpointsubdomain = widgetobj.endpointsubdomain;
					var $iframe = '<iframe id="iframe_' + apwidgetid + '" style="overflow: hidden; min-width: 100%; border: none;" src="https://'  + endpointsubdomain + '.ap.org/iframe/widgets/content/' + apwidgetid + '" width="100%" height="100%" frameborder="1" allowfullscreen="allowfullscreen" onload="iFrameResize({}, \'#iframe_' + apwidgetid + '\');"></iframe>';
					debuglog("APNEW: Created iframe in memory as a variable:", $iframe);
					debuglog("APNEW: Appending iframe...");
					$(selector).append($iframe);
					debuglog("APNEW: Done appending iframe");
				});				},
			showOLD: function() {
				debuglog("show() called. widgets:");
				debuglog(widgets);
				if (isDisabled) {
					debuglog("Disabled at this breakingpoint. Exiting");
					return false;
				}
				$.each(widgets, function(selector, widgetobj) {
					if (typeof widgetobj !==  "object" || typeof widgetobj.apwidgetid !== "string") {
						debuglog("Couldn't show widget " + selector + ". No apwidgetid.");
						return true;
					}
					var apwidgetid = widgetobj.apwidgetid;
					var $thewidget = $("#ap_widget_container_" + apwidgetid);
					if ($thewidget.length === 1) {
						var $destination = $(selector);
						if ($destination.length === 1) {
							debuglog("Appending to destination: " + selector);
							$destination.append($thewidget);
							// debuglog("Display: " + $destination.css("display"));
							if ($destination.css("display") === "none") {
								$destination.css("display", "block");
							}
						} else {
							debuglog("Couldn't find $destination. Can't append to " + selector);
						}
					}
				});
			}
		}
	})();
	// PGLIB.all.apwidget.init();
}

// *****************************************
//   pgevoke.includes.js_storystickyfooter
// *****************************************
// if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.twitterlists = (function() {
	var debuglogkey = "TWITTERLISTS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var feeds = {
		"sports": {
			"sourceType": "list",
			"ownerScreenName": "PittsburghPG",
			"slug": "pg-sports"
		},
		"sean-gentille": {
			"sourceType": "profile",
			"screenName": "seangentille"
		},
		"zeise-is-right": {
			"sourceType": "profile",
			"screenName": "PaulZeise"			
		},
		"business": {
			"sourceType": "list",
			"ownerScreenName": "PittsburghPG",
			"slug": "pg-business"
		}
	};
	var sectionfeeds = {
		"sports": "sports",
		"steelers": "sports",
		"pirates": "sports",
		"penguins": "sports",
		"psu": "sports",
		"pitt": "sports",
		"paul-zeise": "zeise-is-right"
		// "business": "business"
	};
	return {
		init2: function() {
			debuglog("init called");
			var $newscript = $("<script>");
			$newscript.attr("src", "https://platform.twitter.com/widgets.js");
			$newscript.attr("async", "true");
			$newscript.attr("charset", "utf-8");
			$("head").append($newscript);
		},
		init: function() {
			debuglog("init() called (v10)");
			debuglog("DISABLED on 7/24/23 (Twitter no longer allowing this widget)");
			return false;
			// ---- Make sure the target exists -----
			var target = document.querySelectorAll(".twitter-timeline")[0];
			if (typeof target === "undefined") { return false; }
			debuglog("Found target");
			// ----- Get section id for page -----
			if (typeof PGVARS.sectionid !== "string") { return false; }
			var sectionid = PGVARS.sectionid;
			// ----- Get feed object for section -----
			if (typeof sectionfeeds[sectionid] !== "string") { return false; }
			var feedkey = sectionfeeds[sectionid];
			debuglog("This section gets a feed: " + feedkey);
			if (typeof feeds[feedkey] !== "object") { return false; }
			debuglog("Found feed for '" + feedkey + "'");
			var feedobj = feeds[feedkey];
			debuglog("Found feedobj: " + feedobj);
			debuglog("Loading script");
			// ----- AJAX load twitter script & init widget -----
			$(".pgevoke-twitterlist").css("display", "block");
			$.ajax({
			  url: "https://platform.twitter.com/widgets.js",
			  dataType: "script",
			  success: function() {
			  	debuglog("Script loaded. Displaying feed.");
			  	twttr.widgets.createTimeline(
					feedobj,
					target,
					{
						height: 750
					}
				);
			  }
			});
		}
	}
})();

window.PGLIB = window.PGLIB || {};
window.PGLIB.section = window.PGLIB.section || {};
window.PGLIB.section.settings = window.PGLIB.section.settings || {};
window.PGLIB.section.settings.subsectionsmenu = {};
window.PGLIB.section.settings.subsectionsmenu.assignments = {};
window.PGLIB.section.settings.subsectionsmenu.menus = {};

PGLIB.all.subsectionmenu = (function() {
	var debuglogkey = "SUBSECTIONMENU";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var assignments = window.PGLIB.section.settings.subsectionsmenu.assignments;
	var menus = window.PGLIB.section.settings.subsectionsmenu.menus;
	return {
		init: function() {
			// ---- Check sectoinid -----
			if (typeof PGVARS.sectionseolabel !== "string") { 
				debuglog("Could't find sectionseolabel. Exiting.");
				return false;
			}
			var sectionseolabel = PGVARS.sectionseolabel;
			// ---- Find $target ------
			var $target = $(".pgevoke-subsectionmenu");
			if ($target.length !== 1)  {
				debuglog("Could't find $target. Exiting.");
				return false;
			}
			if (typeof assignments[sectionseolabel] !== "string") {
				debuglog("Could't find sectionseolabel in 'assignments'. Exiting.");
				return false;
			}
			var menukey = assignments[sectionseolabel];
			if (typeof menus[menukey] === "undefined") {
				debuglog("Could't find '" + menukey + "' in 'menus'. Exiting.");
				return false;
			}
			debuglog("Found it...");
			debuglog(menus[menukey]);
			$target.loadAjaxContent({
				"jsondata": menus[menukey],
				"template": "#pgevoke-_tpl-subsectionmenuitem",
				"processfunction": function(jsondata, settings) {
						// var articles = jsondata.articles;
						if (typeof jsondata === "undefined" || typeof jsondata !== "object" || typeof jsondata.items === "undefined") {
							debuglog("Couldn't find 'items' node. Can't render. Exiting.");
							return false;
						}
						var items = jsondata.items;
						$.each(items, function(key, item) {
							var theobj = {};
							theobj.label = key;
							theobj.url = item.url || "";
							// var thetemplate = $(settings.template).html();
							// var templatefunction = _.template(thetemplate);
							var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
							var $target = settings.$target;
							var theoutput = templatefunction(theobj);
							$target.append(theoutput);
						});
						$target.css("display", "flex");
						// settings.endfunction(jsondata, settings);
					}
			});
			if (typeof menus[menukey]["banner"] === "string") {
				$(".pgevoke-subsectionheader").html("<img src='" + menus[menukey]["banner"] + "'>").show();
			}
		}
	};
})();

// ******************************************
//     pgevoke.all.rightrail-loader.js
// ******************************************
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.genericrightrail = (function() {
	var debuglogkey = "GENERICRIGHTRAIL";
	function debuglog(thingtolog) {
		try {
			PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	return {
		init: function(selector) {
			debuglog("Init called");
			$(document).ready( function() {
				debuglog("Doc ready");
				var $target = $(selector).first();
				if ($target.length === 0) {
					debuglog("Coudln't find selector '" + selector + "'. Exiting.");
					return false;
				}
				debuglog("Sectionpath: " + PGVARS.sectionpath);
				$target.loadAjaxContent({
					"template":"genericrightrail",
					"processfunction": "simple",
					"jsondata": {
						"adsection": PGVARS.sectionpath
					},
					"customdata": {
						"selector": selector
					},
					"endfunction": PGLIB.all.genericrightrail.endfunction
				});
			});
		},
		endfunction: function(jsondata, settings) {
			debuglog("Running end function");
			debuglog(settings);
			debuglog(settings.customdata.selector);
			PGLIB.all.genericrightrail.initStickyBoxes();
			DFPADS.cmd(function() {
				DFPADS.initializeAll();	
			});
			PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
		},
		initStickyBoxes: function() {
			debuglog("initStickyBoxes called");
			$("[data-stickybox-id='pgevoke-rightrail-stickybox-top']").stickybox({
				parent: ".pgevoke-rightrail",
				offset: 65
			});
			$("[data-stickybox-id='pgevoke-rightrail-stickybox-bottom']").stickybox({
				parent: ".pgevoke-rightrail",
				offset: 0,
				dockLocation: "bottom"
			});
			debuglog("Correct");
			/* debuglog($("[data-stickybox-id='pgevoke-socialbuttons']").length);
			/$("[data-stickybox-id='pgevoke-socialbuttons']").stickybox({
				parent: ".pgevoke-contentarea",
				offset: 70
			});
			debuglog("Done");
			*/
			$(window).on("breakpointchanged", function(e, data) {
				var newbreakpoint = data.newbreakpoint;
				debuglog("Breakpoint changed:");
				debuglog(data);
				if (data.groupchange === "desktop-to-mobile") {
					debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
					PGLIB.all.genericrightrail.killStickyBoxes();
				} else if (data.groupchange === "mobile-to-desktop") {
					debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
					// PGLIB.story.transporter.killStickyBoxesAll();
					PGLIB.all.genericrightrail.initStickyBoxes();	
				}
			});
		},
		killStickyBoxes: function() {
			Stickyboxes.remove("pgevoke-rightrail-stickybox-top");
			Stickyboxes.remove("pgevoke-rightrail-stickybox-bottom");
		}
	};
})();



/*************************
   pgevoke.js.fp_bigstory
 *************************/
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "FRONTPAGE") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.fp = window.PGLIB.fp || {};
	window.PGLIB.fp.bigstory = (function() {
		var debuglogkey = "BIGSTORY";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		return {
			init: function() {
				debuglog("Initializing");
				$(document).ready(function() {
					debuglog("Document ready");
					var currentbreakpoint = getResponsiveSize();
					PGLIB.fp.bigstory.update(currentbreakpoint);
				});
				$(document).on("breakpointchanged", function(e, data) {
					debuglog("Breakpoint changed");
					var newbreakpoint = data.newbreakpoint;
					PGLIB.fp.bigstory.update(data.newbreakpoint);
				});			
			},
			update: function(newbreakpoint) {
				if (newbreakpoint == "xs" || newbreakpoint == "sm") {
					debuglog("Showing ABOVE Big Story");
					$("#pgevoke-bigstoryabove").show();
					$("#pgevoke-bigstoryinline").hide();
				} else {
					debuglog("Hiding ABOVE Big Story");
					$("#pgevoke-bigstoryabove").hide();
					$("#pgevoke-bigstoryinline").show();
				}
			}		
		};
	})();
	// PGLIB.fp.bigstory.init();
}


// *********************************
//     pgevoke.fp.stickyboxes
// *********************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "FRONTPAGE") {
	var debuglogkey = "FPSTICKYBOXES";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.fp = window.PGLIB.fp || {};
	window.PGLIB.fp.stickyboxes = (function() {
		return {
			init: function() {
				$(document).ready( function() {
					var bpgroup = PGLIB.all.breakpoints.getCurrentGroup();
					if (bpgroup === "desktop") {
						PGLIB.fp.stickyboxes.initAll();
					}
					$(window).on("breakpointchanged", function(e, data) {
						var newbreakpoint = data.newbreakpoint;
						debuglog("Breakpoint changed:");
						debuglog(data);
						if (data.groupchange === "desktop-to-mobile") {
							debuglog("Breakpoint changed from desktop to mobile. Killing all designated story stickyboxes.");
							PGLIB.fp.stickyboxes.killAll();
						} else if (data.groupchange === "mobile-to-desktop") {
							debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
							PGLIB.fp.stickyboxes.initAll();	
						}
					});
				});
			},
			initAll: function() {
				/*
				$("#pgevoke-fp-stickybox1").stickybox({
					parent:"#pgevoke-fp-row1",
					offset:61
				});
				*/
				$("[data-stickybox-id='pgevoke-fp-stickybox1']").stickybox({
					parent:"#pgevoke-fp-row1 .pgevoke-grid-area-side",
					offset:61
				});
				$("[data-stickybox-id='pgevoke-fp-stickybox2']").stickybox({
					parent:"#pgevoke-fp-row3",
					offset:61
				});
				$("[data-stickybox-id='pgevoke-fp-stickybox3']").stickybox({
					parent:"#pgevoke-fp-row3",
					offset:0,
					dockLocation: "bottom"
				});
				PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
			},
			killAll: function() {
				Stickyboxes.remove("pgevoke-fp-stickybox1");
				Stickyboxes.remove("pgevoke-fp-stickybox2");
				Stickyboxes.remove("pgevoke-fp-stickybox3");
			}
		};
	})();
	// PGLIB.fp.stickyboxes.init();
}


// *********************************
//    pgevoke.js.fp_stickyfooter
// *********************************
if (typeof PGVARS !== "undefined" && (PGVARS.requesttype === "FRONTPAGE" || PGVARS.requesttype === "SECTION")) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.fp = window.PGLIB.fp || {};
	window.PGLIB.fp.stickyfooter = (function() {
		var debuglogkey = "FPSTICKYFOOTER";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}		
		return {
			state: "docked",
			height:0,
			heightcached:0,
			footerselector: ".pgevoke-railfooter",
			bottommarker: ".pgevoke-railfooter-bottommarker",
			usecustomscrollselector: false,
			scrollselector: ".pgevoke-pagewrapper",
			$scrollelement: null,
			triggerpointoffset: 0,
			triggerpoint: 70,
			testmode: false,
			buttonshidden:false,
			log: function(thingtolog) {
				if (PGLIB.fp.stickyfooter.testmode == true) {
					console.log(thingtolog);
				}
			},
			exists: function() {
				return ($(PGLIB.fp.stickyfooter.footerselector).length > 0);
			},
			init: function() {
				debuglog("Initialized");
				$(document).ready( function() {
					debuglog("Doc ready");
					if (PGLIB.fp.stickyfooter.exists() == false) { return; }
					debuglog("Exists");
					if (PGLIB.fp.stickyfooter.usecustomscrollselector == true) {
						PGLIB.fp.stickyfooter.$scrollelement = $(PGLIB.fp.stickyfooter.scrollselector);
					} else {
						PGLIB.fp.stickyfooter.$scrollelement = $(window);
					}
					PGLIB.fp.stickyfooter.heightcached = $(PGLIB.fp.stickyfooter.footerselector).height() || 243; //default
					PGLIB.fp.stickyfooter.$scrollelement.scroll( function() {
						PGLIB.fp.stickyfooter.update("scroll");
					});
					PGLIB.fp.stickyfooter.$scrollelement.resize( function() {
						PGLIB.fp.stickyfooter.update("resize");
					});
				});
			},
			update: function(action) {
				var scrolltop = PGLIB.fp.stickyfooter.$scrollelement.scrollTop();
				var windowheight = $(window).height();
				var scrollpoint = scrolltop + windowheight;
				var triggerpoint = $(PGLIB.fp.stickyfooter.bottommarker).offset().top + $(PGLIB.fp.stickyfooter.bottommarker).height();
				PGLIB.fp.stickyfooter.log("--- Scrollpoint: " + scrollpoint + " / Triggerpoint: " + triggerpoint);
				if (scrollpoint >= triggerpoint) { // Past trigger point
					if (PGLIB.fp.stickyfooter.state == "docked") { // If it's not already sticky, make it sticky
						PGLIB.fp.stickyfooter.log("--- STICKING!");
						PGLIB.fp.stickyfooter.state = "stuck";
						$(PGLIB.fp.stickyfooter.footerselector).addClass("pgevoke-railfooter-stuck");
						PGLIB.fp.stickyfooter.setPlaceholderHeight();
						PGLIB.fp.stickyfooter.setStickyLeftValue();
						PGLIB.fp.stickyfooter.buttonsUpdateVisibility();
					} else { // If it's already sticky
						if (action == "resize") {
							PGLIB.fp.stickyfooter.setStickyLeftValue();
							PGLIB.fp.stickyfooter.buttonsUpdateVisibility();
						}
					}
				} else {
					if (PGLIB.fp.stickyfooter.state == "stuck") {
						PGLIB.fp.stickyfooter.log("--- DOCKING!");
						PGLIB.fp.stickyfooter.state = "docked";
						$(PGLIB.fp.stickyfooter.footerselector).removeClass("pgevoke-railfooter-stuck");
						$(PGLIB.fp.stickyfooter.footerselector).css("left","");
						$(PGLIB.fp.stickyfooter.bottommarker).css("height", "");
						PGLIB.fp.stickyfooter.buttonsShowHide("show");
					}
				}
			},
			setPlaceholderHeight: function() {
				var $footer = $(PGLIB.fp.stickyfooter.footerselector);
				PGLIB.fp.stickyfooter.height = $footer.height();
				var $bottommarker = $(PGLIB.fp.stickyfooter.bottommarker);
				$bottommarker.css("height", PGLIB.fp.stickyfooter.height);
			},
			setStickyLeftValue: function() {
				var $bottommarker = $(PGLIB.fp.stickyfooter.bottommarker);
				var bottommarkerleft = $bottommarker.offset().left;
				var $footer = $(PGLIB.fp.stickyfooter.footerselector);
				$footer.css("left", bottommarkerleft);
			},
			buttonsUpdateVisibility: function() {
				var windowheight = $(window).height();
				var $buttonsdiv = $(".pgevoke-railfooter-accountbuttons");
				var rectcoords = $buttonsdiv[0].getBoundingClientRect();
				var divbottom = rectcoords.bottom; // bottom of div, relative to viewport (not document)
				var footerheight = PGLIB.fp.stickyfooter.heightcached;
				var desiredgap = 5;
				PGLIB.fp.stickyfooter.log("divbottom: " + divbottom + " | max bottom before hidden: " + (windowheight - footerheight - desiredgap));
				var showhide;
				if (divbottom > windowheight - footerheight - desiredgap) {
					showhide = "hide";
				} else {
					showhide = "show";
				}
				// var showhide = (windowheight < 830) ? "hide" : "show";
				// var showhide = (windowheight < 785) ? "hide" : "show"; Based on new shorter footer height
				PGLIB.fp.stickyfooter.buttonsShowHide(showhide);
			},
			buttonsShowHide: function(showhide) {
				if (showhide == "hide") {
					if (PGLIB.fp.stickyfooter.buttonshidden == false) {
						PGLIB.fp.stickyfooter.buttonshidden = true;
						$(".pgevoke-railfooter-accountbuttons").css("visibility","hidden");
					}
				} else if (showhide == "show") {
					if (PGLIB.fp.stickyfooter.buttonshidden == true) {
						PGLIB.fp.stickyfooter.buttonshidden = false;
						$(".pgevoke-railfooter-accountbuttons").css("visibility","");
					}			
				}
			}
		};
	})();
	if (typeof PGVARS !== "undefined" && (PGVARS.requesttype === "FRONTPAGE")) {
		PGLIB.fp.stickyfooter.init();	
	}	
}

// ***********************************
//   pgevoke.js.fp_newsboxesv2-blogs
// ***********************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "FRONTPAGE") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.fp = window.PGLIB.fp || {};
	window.PGLIB.fp.newsboxv2_blogs = (function() {
		var debuglogkey = "FPNEWSBOXBLOGS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var endpoint = PGAPIBaseURL + "/stories/1/blogAggregate/0/";
		return {
			init: function() {
				$(document).ready(function() {
					PGLIB.fp.newsboxv2_blogs.loadFeature1();	
				});
				
			},
			loadFeature1: function() {
				var $target = $(".pgevoke-newsboxv2.pgevoke-section-blogs .pgevoke-newsboxv2-feature-1");
				$target.loadAjaxContent({
					"endpoint": endpoint,
					"template": "#pgevoke-_tpl-newsboxv2-featureitem",
					"count": 1,
					"endfunction": PGLIB.fp.newsboxv2_blogs.loadFeature2
				});
			},
			loadFeature2: function() {
				var $target = $(".pgevoke-newsboxv2.pgevoke-section-blogs .pgevoke-newsboxv2-feature-2");
				$target.loadAjaxContent({
					"endpoint": endpoint,
					"template": "#pgevoke-_tpl-newsboxv2-featureitem",
					"start": 2,
					"count": 1,
					"endfunction": PGLIB.fp.newsboxv2_blogs.loadStoryStack
				});
			},
			loadStoryStack: function() {
				var $target = $(".pgevoke-newsboxv2.pgevoke-section-blogs .pgevoke-newsboxv2-storystack");
				$target.loadAjaxContent({
					"endpoint": endpoint,
					"template": "#pgevoke-_tpl-newsboxv2-storystackitem",
					"start": 2,
					"count": 5
				});

			}
		};
	})();
	PGLIB.fp.newsboxv2_blogs.init();
}

// ******************************
//       pgevoke.fp.loader.js
// ******************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "FRONTPAGE") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.fp = window.PGLIB.fp || {};
	window.PGLIB.fp.loader = (function() {
		var debuglogkey = "FPLOADER";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		function loadTemplate($target, template, theobj) {
			var templatefunction = PGLIB.all.underscore.getTplFunc(template);
			var theoutput = templatefunction(theobj);
			$target.append(theoutput);			
		}
		function processFunctionSimple(jsondata, settings) {
			var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
			var theoutput = templatefunction(jsondata);
			var $target = settings.$target;
			$target.append(theoutput);
		}
		var hasbigstory = false;
		var bigstoryenabled = (PGVARS.site === "pg" && PGVARS.sitecode === "DEV") ? true : true; // If false, big story does not show automatically even if it exists. Can still be triggered manually for testing.
		var THISMODULE;
		var electionControls = {};
		return {
			initOLD: function() {
				debuglog("Init called");
				$(document).ready( function() {
					DFPADS.cmd(function() {
						DFPADS.initializeAll(".pgevoke-topads-row");
						DFPADS.initializeAll("#pgevoke-fp-row1");
						DFPADS.initializeAll("#pgevoke-fp-row2");
						DFPADS.initializeAll("#pgevoke-fp-row3");
					});
					PGFNS.bindlazyloadimages();
					PGLIB.fp.loader.loadTrending();
					$.getScript("https://www.civicscience.com/widget/jspoll/?elt=cspoll-content&tgtid=50f26d34-00fa-11e2-bb87-12313809f6d1", function() {
					});
					if (PGVARS.versionfp !== "1" || PGVARS.pgevokeversion === "2") {
						PGLIB.fp.loader.initNewsboxes();	
					}
				});
			},
			init: function() {
				THISMODULE = this;
				PGLIB.fp.loader.setHasBigStory();
				var electionmapposition = 0;
				if (PGVARS.site === "pg") {
					if (typeof PGVARS.electionmode === "number") {
						if (PGVARS.electionmode === 1) {
							if (hasbigstory || (PGLIB.all.breakpoints.getCurrent() !== "xs" && PGLIB.all.breakpoints.getCurrent() !== "sm")) {
								electionmapposition = 1;
							} else {
								// electionmapposition = 2;
								electionmapposition = 1;
							}
						} else if (PGVARS.electionmode === 2) {
							electionmapposition = 2;
						} else if (PGVARS.electionmode === 3) {
							if (!hasbigstory) {
								electionmapposition = 1;
							} else {
								if ((PGLIB.all.breakpoints.getCurrent() === "xs")) {
									electionmapposition = 3;
								} else if ((PGLIB.all.breakpoints.getCurrent() === "sm")) {
									electionmapposition = 4;
								} else {
									electionmapposition = 5;		
								}
							}
						}
					}
					$("body").addClass("pgevoke-electionmapposition-" + electionmapposition);
				}
				debuglog("electionmapposition: " + electionmapposition);
				$(document).ready( function() {
					debuglog("init() called & doc ready");
					var jsondata = {
						"adsection": PGVARS.sectionseolabel,
						"nativonamespace": "frontpage-1",
						"electionmapposition": electionmapposition
					};
					var bnb;
					var bnblink = "";
					var bnbtext = "";
					var bnbkicker = "DEVELOPING";
					if (PGVARS.site === "blade") {
						if (PGFNS.issetmulti(PGPAGEDATA, "breakingnewsbanner", "items", "0")) {
							bnb = PGPAGEDATA.breakingnewsbanner.items[0];
							if (typeof bnb.title === "string") {
								bnbtext = bnb.title;
							}
							if (typeof bnb.customFields === "object" && typeof bnb.customFields.link === "string") {
								bnblink = bnb.customFields.link;
							}
							if (typeof bnb.customFields === "object" && typeof bnb.customFields.kicker === "string") {
								debuglog("Found bnb.customFields.kicker");
								debuglog("bnb.customFields.kicker: " + bnb.customFields.kicker);
								bnbkicker = (bnb.customFields.kicker.trim() !== "") ? bnb.customFields.kicker : bnbkicker;
								debuglog("bnbkicker: " + bnbkicker);
							} else {
								debuglog("Couldn't find bnb.customFields.kicker");
							}
						}
						jsondata.breakingnewsbannerlink = bnblink;
						jsondata.breakingnewsbannertext = bnbtext;
						jsondata.breakingnewsbannerkicker = bnbkicker;
						jsondata.breakingnewsbannershow = (bnbtext.trim() !== "");
					}
					// ----- Load frotpage template -----
					$(".pgevoke-pagecontent").loadAjaxContent({
						"template": "frontpage-" + PGVARS.site,
						"processfunction": "simple",
						"jsondata": jsondata
					});
					THISMODULE.loadElectionResults();
					if (bigstoryenabled) {
						PGLIB.fp.loader.loadBigStory();
					}
					if (typeof PGSITESETTINGS.fpatfstyle === "string" && PGSITESETTINGS.fpatfstyle === "fullwidth9stack") {
						$("body").addClass("pgevoke-fpatf-fullwidth9stack");
						PGLIB.fp.loader.loadFullWidthATF();
					} else {
						$("body").addClass("pgevoke-fpatf-dualatf");
						PGLIB.fp.loader.loadDualATF(1);	
					}
					var foundnativodiv = $("a[data-nativo='frontpage-1-link1']").length > 0 ? "YES" : "NO";
					console.log("NATIVO: Are target elements present on page? " + foundnativodiv);
					if (foundnativodiv) {
						console.log("NATIVO: ", $("a[data-nativo='frontpage-1-link1']"));
					}
					if (typeof PostRelease === "object" && PostRelease !== null && typeof PostRelease.Start === "function") {
						console.log("NATIVO: PostRelease is ready.");
						// PostRelease.Start(); // Load Nativo
					} else {
						console.log("NATIVO: PostRelease is NOT ready.");
					}

					console.log("NATIVO: Queueing up PostRelease.Start()");
					window.ntv=window.ntv||{};
					window.ntv.cmd=window.ntv.cmd||[];
					window.ntv.cmd.push(function(){
						console.log("NATIVO: Firing PostRelease.Start()");
						PostRelease.Start();
					});
					PGLIB.fp.loader.loadRightRailBreaking();
					PGLIB.fp.loader.loadMustRead();
					PGLIB.fp.loader.loadMustSee();
					PGLIB.fp.loader.loadBPartnersHomes();
					PGLIB.fp.loader.loadTrending();
					if (PGVARS.usenativo) {
						PGLIB.fp.loader.loadBPartnersBigNativo();	
					} else {
						PGLIB.fp.loader.loadBPartnersBig();	
					}
					PGLIB.fp.loader.loadRecommended();	
					THISMODULE.loadViafouraScript();
					DFPADS.cmd(function() {
						DFPADS.initializeAll();
					});
					PGLIB.fp.stickyboxes.init();
					// ----- Load Page API content ------
					if (PGLIB.all.pgpageapi.ready) {
						PGLIB.fp.loader.loadPageAPIContent();	
					} else {
						$(document).on("pgpageapi:ready", function(event) {
							PGLIB.fp.loader.loadPageAPIContent();
						});	
					}
					/*
					;!function(){
					    window.PianoESPConfig = {
					        id: 494
					    }
					    var e=document.createElement("script");e.setAttribute("id","pnesplucidsdksel"),e.type="text/javascript",e.src="//sandbox-api-esp.piano.io/public/sdk/v04/sdk.js?v="+(localStorage&&localStorage.lucidsdkver||"xxx"),e.async=!0,document.getElementsByTagName("script")[0].parentNode.appendChild(e);
					}();
					*/
				});
				return;
				$(document).ready( function() {
					DFPADS.cmd(function() {
						DFPADS.initializeAll(".pgevoke-topads-row");
						DFPADS.initializeAll("#pgevoke-fp-row1");
						DFPADS.initializeAll("#pgevoke-fp-row2");
						DFPADS.initializeAll("#pgevoke-fp-row3");
					});
					PGFNS.bindlazyloadimages();
					PGLIB.fp.loader.loadTrending();
					$.getScript("https://www.civicscience.com/widget/jspoll/?elt=cspoll-content&tgtid=50f26d34-00fa-11e2-bb87-12313809f6d1", function() {
					});
					if (PGVARS.versionfp !== "1" || PGVARS.pgevokeversion === "2") {
						PGLIB.fp.loader.initNewsboxes();	
					}
				});
			},
			loadPageAPIContent: function() {
				debuglog("loadPageAPIContent() called");				
				if (PGVARS.usenewcivicscience) {
					PGLIB.all.civicscience.init();
				}
				// PGLIB.all.apwidget.show();
				PGLIB.fp.loader.loadPianoOptIn();
				PGLIB.fp.loader.loadPromobox(1);
				PGLIB.fp.loader.loadPromobox(2);
				PGLIB.fp.loader.loadNewsboxWrappers();
				PGLIB.fp.loader.loadNewsboxes();
				PGLIB.fp.loader.loadBodyAd3();
				PGLIB.fp.loader.loadColumnists();
				PGLIB.fp.loader.loadNewsboxesAP();
				PGLIB.fp.loader.loadMostEmailed();
				PGLIB.all.clicktracker.trigger("fp-main");
				PGLIB.fp.loader.loadRecentStories(); // Separate AJAX request
			},
			loadPianoOptIn: function() {
				debuglog("loadPianoOptIn() called v3");
				if (typeof PGVARS.piano === "undefined" || !PGVARS.piano) { return false; }
				debuglog("loadPianoOptIn() passed checks");
				// var $script = '<script type="text/javascript">;!function(){ window.PianoESPConfig = { id: 494 } var e=document.createElement("script");e.setAttribute("id","pnesplucidsdksel"),e.type="text/javascript",e.src="//sandbox-api-esp.piano.io/public/sdk/v04/sdk.js?v="+(localStorage&&localStorage.lucidsdkver||"xxx"),e.async=!0,document.getElementsByTagName("script")[0].parentNode.appendChild(e); }(); </script>';
				// $(".pgevoke-piano-opt-in-1").html($script);
				debuglog($("pnespwgtplaceholder").length + " placeholder count");
				// window.PianoESPConfig = {
			    //    id: 494
			    // };
			    // var e=document.createElement("script");e.setAttribute("id","pnesplucidsdksel"),e.type="text/javascript",e.src="//sandbox-api-esp.piano.io/public/sdk/v04/sdk.js?v="+(localStorage&&localStorage.lucidsdkver||"xxx"),e.async=!0,document.getElementsByTagName("script")[0].parentNode.appendChild(e);
			},
			loadDualATF: function() {
				if (!hasbigstory || !bigstoryenabled) {
					// ----- Dual ATF Featured -----
					$(".pgevoke-dualatf-featured-left").loadAjaxContent({
						"jsondata": PGPAGEDATA["atf-featured"],
						"template": "dualatf_featuredpackitem",
						"count": 1
					});
					$(".pgevoke-dualatf-featured-right").loadAjaxContent({
						"jsondata": PGPAGEDATA["atf-featured"],
						"template": "dualatf_featuredpackitem",
						"start": 1,
						"count": 2
					});
				} else {
					$("#pgevoke-fp-newspackatf-bigstory").loadAjaxContent({
						"jsondata": PGPAGEDATA["atf-featured"],
						"template": "newspack",
						"count": 3,
						"customdata": {
							"isATF": true
						}
					});
				}
				
				// ----- Textpack: Breaking -----
				$(".pgevoke-dualatf-colleft").loadAjaxContent({
					"template": "textpack",
					"processfunction": "simple",
					"jsondata": {
						"header": "THIS JUST IN",
						"morelink": "/local/breaking",
						"moretext": ""
					},
				});
				//  ----- Textpack Items: Breaking -----
				var $target = $(".pgevoke-dualatf-colleft .pgevoke-textpack-storylist");
				$target.loadAjaxContent({
					"jsondata": PGPAGEDATA["breaking"],
					"template": "textpackitem",
					"count": 9,
					"useModifiedTimestamps": true,
					/*
					"customdata": {
						"context": "fpbreaking"
					}
					*/
				});
				// $(".pgevoke-dualatf-colright").append("<div class='pgevoke-newspack'></div>");
				//  ----- Newspacks (Curated Items 4-6 & 7-9) -----
				$("#pgevoke-fp-newspackatf-1").loadAjaxContent({
					"jsondata": PGPAGEDATA["atf-featured"],
					"template": "newspack",
					"start": 3,
					"count": 3,
					"customdata": {
						"isATF": true,
						"useSST": true
					}
				});
				// var row3start = (PGVARS.useSpecialPromo) ? 5 : 6;
				var row3count = (PGVARS.useSpecialPromo) ? 2 : 3;
				$("#pgevoke-fp-newspackatf-2").loadAjaxContent({
					"jsondata": PGPAGEDATA["atf-featured"],
					"template": "newspack",
					"start": 6,
					"count": row3count,
					"customdata": {
						"isATF": true,
						"useSST": true
					}
				});
				if (PGVARS.useSpecialPromo) {
					$("#pgevoke-fp-newspackatf-2").loadAjaxContent({
						"jsondata": PGPAGEDATA["atf-featured"],
						"template": "newspackspecialpromo",
						"count": 1,
						"customdata": {}
					});
				}
			},
			loadFullWidthATF: function() {
				debuglog("loadFullWidthATF() called");
				if (!hasbigstory) {
					$("#pgevoke-fp-row1 .pgevoke-featuredpack-left").loadAjaxContent({
						"template": "#pgevoke-_tpl-featuredpack",
						"jsondata": PGPAGEDATA["atf-featured"],
						"count": 1,
						"customdata": {
							"useSST": true,
						}
					});
					$("#pgevoke-fp-row1 .pgevoke-featuredpack-right").loadAjaxContent({
						"template": "featuredpack",
						"jsondata": PGPAGEDATA["atf-featured"],
						"count": 2,
						"start": 1,
						"customdata": {
							"useSST": true,
						}
					});	
				} else {
					$("#pgevoke-fp-newspackatf-bigstory").loadAjaxContent({
						"jsondata": PGPAGEDATA["atf-featured"],
						"template": "newspack",
						"count": 3,
						"customdata": {
							"isATF": true,
							"useSST": true
						}
					});
				}
				$("#pgevoke-fp-newspackatf-1").loadAjaxContent({
					"template": "newspack",
					"jsondata": PGPAGEDATA["atf-featured"],
					"count": 3,
					"start": 3,
					"customdata": {
						"isATF": true,
						"useSST": true
					}
				});
				$("#pgevoke-fp-newspackatf-2").loadAjaxContent({
					"template": "newspack",
					"jsondata": PGPAGEDATA["atf-featured"],
					"count": 3,
					"start": 6,
					"customdata": {
						"isATF": true,
						"useSST": true
					}
				});
			},
			loadMustRead: function() {
				if (typeof PGPAGEDATA["mustread"] === "undefined") { return false; }
				$(".pgevoke-mustread .pgevoke-newspack").loadAjaxContent({
					"jsondata": PGPAGEDATA["mustread"],
					"template": "newspack",
					"count": 3,
					"customdata": {
						"isATF": true
					}
				});
			},
			loadMustSee: function() {
				// var items = PGFNS.issetmulti(pgpageapi, "mustSee", "mustSee") ? pgpageapi.mustSee.mustSee : [];
				var items;
				if (PGFNS.issetmulti(PGPAGEDATA, "mustSee", "mustSee")) {
					items = PGPAGEDATA["mustSee"]["mustSee"];
					PGLIB.fp.loader.showMustSee(items);
				} else {
					if (PGLIB.all.pgpageapi.ready) {
						debuglog("Couldn't find mustSee in PGPAGEDATA. Trying pgpageapi.");
						if (PGFNS.issetmulti(pgpageapi, "mustSee", "mustSee")) {
							items = pgpageapi.mustSee.mustSee;
							PGLIB.fp.loader.showMustSee(items);
						} else {
							debuglog("pgpageapi.mustSee.mustSee is missing. Exiting.");
						}
					} else {
						debuglog("Couldn't find mustSee in PGPAGEDATA. Waiting for pgpageapi.");
						$(document).on("pgpageapi:ready", function() {
							debuglog("pgpageapi:ready");
							if (PGFNS.issetmulti(pgpageapi, "mustSee", "mustSee")) {
								items = pgpageapi.mustSee.mustSee;
								PGLIB.fp.loader.showMustSee(items);
							} else {
								debuglog("Couldn't find pgpageapi.mustSee.mustSee. Exiting.");
							}
						});					}

				}
			},
			loadBPartnersHomes: function() {
				// ----- B Partners Homes (Blade only) -----
				debuglog("loadBPartnersHomes()");
				if (PGVARS.site !== "blade") { return false; }
				if (PGVARS.usenativo) { return false; }
				// if (PGVARS.sitecode === "LIVE") { return false; }
				if (typeof PGPAGEDATA === "object" && PGPAGEDATA !== null && issetmulti(PGPAGEDATA, "bpartnershomes")) {
					debuglog("loadBPartnersHomes passed logic check");
					var $target = $(".pgevoke-bpartners-homeswidget .pgevoke-newspack");
					$target.loadAjaxContent({
						"jsondata": PGPAGEDATA["bpartnershomes"],
						"template": "#pgevoke-_tpl-newspack",
						"count": 3,					
					});
					$(".pgevoke-bpartners-homeswidget").show();
				}
			},
			showMustSee: function(items) {
				if (!Array.isArray(items) || items.length === 0) {
					debuglog("showMustSee() found no items. Exiting.");
					return false;
				}
				for (var i=0; i<=2; i++) {
					(function() {
						var item = items[i] || {};
						var theobj = {};
						theobj.title = item.title || "";
						theobj.teasertitle = theobj.title;
						theobj.customimagelink = item.thumbnail || "";
						if (typeof item.brightCoveID === "string") {
							if (PGVARS.site === "pg") {
								theobj.link = "//www.post-gazette.com/video?v=" + item.brightCoveID;
								// theobj.link = PGFNS.getLiberLink(theobj.link);	
							} else {
								theobj.link = "/video?v=" + item.brightCoveID;
							}
							
						} else {
							theobj.link = item.link || "";	
						}
						theobj.parentsectionid = "";
						theobj.sectionboxtext = "";
						theobj.isATF = false;
						theobj.imagecaption = item.description || "";
						theobj.watermarkicon = (typeof item.brightCoveID === "string") ? "video" : "photo";
						$(".pgevoke-mustsee .pgevoke-newspack").loadAjaxContent({
							"jsondata": theobj,
							"template": "newspack",
							"processfunction": "simple",
							"customdata": {
								"isATF": true
							}
						});
					})();
				}
			},
			loadTrending: function() {
				var $target = $(".pgevoke-trending");
				var ajaxsettings = {
					"template": "#pgevoke-_tpl-recommended",
					"count": 5,
					"dedupe": true,
					"dedupeclass": "pgevoke-story-trending",
					"endfunction": null
				};
				if (typeof PGPAGEDATA["trending"] === "object" && PGPAGEDATA["trending"] !== "null") {
					ajaxsettings["jsondata"] = PGPAGEDATA["trending"];
				} else {
					ajaxsettings["endpoint"] = "pgpageapi.trending";
				}
				$target.loadAjaxContent(ajaxsettings);
			},
			loadBPartnersBig: function() {
				if (PGVARS.site !== "blade") { return false; }
				debuglog("loadBPartnersBig called (Blade)");
				if (typeof PGPAGEDATA !== "object" || !(PGFNS.issetmulti(PGPAGEDATA, "bpartnersbig", "articles", "0"))) {
					debuglog("Could not find BPARTNERSBIG item. Skipping");
					return false;
				}
				var start = 0; // Math.floor(Math.random() * 3);
				$target = $(".pgevoke-bpartnersbig");
				$target.loadAjaxContent({
					"jsondata": PGPAGEDATA["bpartnersbig"],
					"template": "bpartnersbig",
					"count": 1,
					"start": start
				});
				$target.css("display", "block");
			},
			loadBPartnersBigNativo: function() {
				if (PGVARS.site !== "blade") { return false; }
				debuglog("loadBPartnersBigNativo called (Blade)");
				$target = $(".pgevoke-bpartnersbig");
				$target.loadAjaxContent({
					"jsondata": PGPAGEDATA["bpartnersbig"],
					"template": "bpartnersbignativo",
					"processfunction": "simple"
				});
				$target.css("display", "block");
			},
			loadRecommended: function() {
				if (PGVARS.site !== "blade") { return false; }
				debuglog("RECOMMENDED: Called");
				debuglog(typeof window.cX);
				window.cX = window.cX || {};
				window.cX.callQueue = window.cX.callQueue || [];
				window.cX.callQueue.push(['invoke', function() {
					debuglog("RECOMMENDED: invoke function");
					var widgetid = "1bab092b292d7c6ce9d15e124c501acd6666b6d5";
					var userid = cX.getUserId();
					var endpoint = "https://apis.toledoblade.com/widget/1/recommended/" + widgetid + "/" + userid + "/";
					$.ajax(endpoint, {
						dataType:"json"
					})
					.done(function(jsondata) {
						debuglog("RECOMMENDED: Ajax request successful! Here's the returned data:");
						debuglog(jsondata);
						if (typeof jsondata !== "object") { return false; }
						if (jsondata === null) { return false; }
						if (!(PGFNS.issetmulti(jsondata, "response", "items"))) { return false; }
						var items = jsondata.response.items;
						if (!(Array.isArray(items))) { return false; }
						debuglog("RECOMMENDED: Found items. Length: " + items.length);
						var storylist = {
							articles: [],
							count: items.length
						};
						$.each(items, function(i, item) {
							var storyobj = {}
							storyobj.title = item.title;
							storyobj.link = item.click_url;
							storyobj.images = [{
								url: item.dominantimage,
								caption: ""
							}];	
							storylist.articles.push(storyobj);
						});
						debuglog("RECOMMENDED: Storylist...");
						debuglog(storylist);
						$("#pgevoke-piano-fp-recommended-cx").css("display", "block");
						$("#pgevoke-piano-fp-recommended-cx-newspack-1").loadAjaxContent({
							"jsondata": storylist,
							"template": "newspack",
							"count": 3,
							"customdata": {
								"isATF": true
							}
						});
						$("#pgevoke-piano-fp-recommended-cx-newspack-2").loadAjaxContent({
							"jsondata": storylist,
							"template": "newspack",
							"count": 3,
							"start": 3,
							"customdata": {
								"isATF": true
							}
						});
					})
					.fail(function() {
				 	  	debuglog("Ajax Request Failed!");
					});	
				}]);
			},
			showRecommended: function() {
				if (PGVARS.site !== "blade") { return false }
				debuglog("loadRecommended() called");
				// $(".pgevoke-topads").after($("<div id='cxsenseWrapper'><div id='cxenseWidget1'></div><div>"));
				// var styles = "#cxsenseWrapper iframe { width: 100% !important; }";
				// var styleSheet = document.createElement("style");
				// styleSheet.type = "text/css";
				// styleSheet.innerText = styles;
				// document.head.appendChild(styleSheet);
				var cX = cX || {}; cX.callQueue = cX.callQueue || [];
				cX.callQueue.push(['insertWidget',{
					widgetId: '394287c980fc600b32b2729bb08f3655f376153a',
					insertBeforeElementId: 'cxenseFPWidget1',
					renderTemplateUrl: 'auto',
					resizeToContentSize: true
				}]);
			},
			initNewsboxes: function() {
				debuglog("initNewsboxes() called");
				if ($("body").hasClass("pg-pgpageapiready")) {
					PGLIB.fp.loader.loadNewsboxes();
				} else {
					$(document).on("pgpageapi:ready", function() {
						PGLIB.fp.loader.loadNewsboxes();
					});
				}
			},
			loadNewsboxWrappers: function() {
				var newsboxes = [];
				if (typeof window.PGSITESETTINGS["fpnewsboxes"] !== "undefined") {
					newsboxes = window.PGSITESETTINGS["fpnewsboxes"];
				}
				$.each(newsboxes, function(i, obj) {
					debuglog("loadNewsboxWrappers: " + i);
					$("#pgevoke-fp-row3 .pgevoke-grid-area-main").loadAjaxContent({
						"template": "newsboxv2",
						"processfunction": "simple",
						"jsondata": obj
					});
					if (PGVARS.site === "pg" && typeof obj.sectionid === "string" && obj.sectionid === "sports") {
						$("#pgevoke-fp-row3 .pgevoke-grid-area-main").loadAjaxContent({
							"template": "columnistsbox",
							"processfunction": "simple",
							"jsondata": {
								"morelink": "/opinion/columnists"
							}
						});
					}
				});
				// Disabling Election 2022 newspack
				// $(".pgevoke-flexbanner").parent().after($("<div class='pgevoke-grid-row' id='pgevoke-fp-election2022' style='margin-bottom:0'></div>"));
				//	$("#pgevoke-fp-election2022").loadAjaxContent({
				//		"template": "newsboxv2",
				//		"processfunction": "simple",
				//		"jsondata": {
				//			"sectionlabel": "Election 2022",
				//			"sectionid": "election2022",
				//			"parentsectionid": "news",
				//			"morelink": "/news/election2022"
				//		}
				//	});
			},
			loadNewsboxes: function() {
				debuglog("loadNewsboxes() called");
				$targets = $(".pgevoke-newsboxv2");
				$targets.each(function() {
					var sectionid = $(this).attr("data-pgevoke-newsbox-sectionid") || "";
					debuglog("Trying for sectionid: " + sectionid);
					if (sectionid !== "") {
						var $target;
						var settings;
						var baseselector =  ".pgevoke-newsboxv2[data-pgevoke-newsbox-sectionid='" + sectionid.toLowerCase() + "']";
						// ----- Feature 1 -----
						$target = $(baseselector + " .pgevoke-newsboxv2-feature-1");
						settings = {
							// "endpoint": (sectionid === "election2022") ? "pgpageapi.election2022" : "pgpageapi.newsbox-" + sectionid,
							"endpoint": "pgpageapi.newsbox-" + sectionid,
							"template": "#pgevoke-_tpl-newsboxv2-featureitem",
							"count": 1,
						};
						$target.loadAjaxContent(settings);
						// -----  Feature 2 ------
						$target = $(baseselector + " .pgevoke-newsboxv2-feature-2");
						settings = {
							"endpoint": "pgpageapi.newsbox-" + sectionid,
							"template": "#pgevoke-_tpl-newsboxv2-featureitem",
							"start": 1,
							"count": 1,
						};
						$target.loadAjaxContent(settings);
						// ----- Story Stack (5) -----
						$target = $(baseselector + " .pgevoke-newsboxv2-storystack");
						settings = {
							"endpoint": "pgpageapi.newsbox-" + sectionid,
							"template": "#pgevoke-_tpl-newsboxv2-storystackitem",
							"start": 2,
							"count": 5
						};
						$target.loadAjaxContent(settings);
					}	
				});
			},
			loadBodyAd3: function() {
				debuglog("loadBodyAd3()");
				if (PGVARS.site !== "blade") { return ; }
				var adsection = PGVARS.sectionseolabel;
				var adstring = DFPADS.getAdSlotString({position: "BODYAD3", adsection: adsection});
				debuglog(adstring);
				$(".pgevoke-newsboxv2[data-pgevoke-newsbox-sectionid='sports']").after($("<div id='BODYAD3-wrapper' style='margin-top:-20px;margin-bottom:50px'>" + adstring + "</div>"));
				setTimeout(function() {
					DFPADS.cmd(function() {
						DFPADS.initializeAll("#BODYAD3-wrapper");
					});
				}, 500);
			},
			loadNewsboxesAP: function() {
				$("#pgevoke-fp-row3 .pgevoke-grid-area-main").append($("<div id='pgevoke-fp-row3-apnewsboxes' class='pgevoke-newsboxes-wrapper pg-hidden-mobile'>"));
				// "ap-sports","ap-news","ap-business"]
				var items = [
					{
						"sectionname": "AP Sports",
						"pgpageapikey": "ap-sports"
					
					},
					{
						"sectionname": "AP News",
						"pgpageapikey": "ap-news"
					},
					{
						"sectionname": "AP Business",
						"pgpageapikey": "ap-business"
					}
				];
				debuglog("Init");
				for (i=0;i<=2;i++) {
					var wrapperselector = "#pgevoke-fp-row3-apnewsboxes";
					debuglog("Trying to find selector: " + wrapperselector);
					debuglog($(wrapperselector).length);
					$(wrapperselector).loadAjaxContent({
						"template": "newsbox",
						"processfunction": "simple",
						"jsondata": items[i]
					});
					var $target;
					var settings;
					var newsboxselector = wrapperselector + " .pgevoke-newsbox[data-pgevoke-newsbox-id='" + items[i].sectionname + "']";
					$target = $(newsboxselector + " .pgevoke-newsbox-feature");
					settings = {
						"endpoint": "pgpageapi." + items[i].pgpageapikey,
						"template": "#pgevoke-_tpl-newsbox-featureitem",
						"count": 1
					};
					$target.loadAjaxContent(settings);
					$target = $(newsboxselector + " .pgevoke-newsbox-storystack");
					settings = {
						"endpoint": "pgpageapi." + items[i].pgpageapikey,
						"template": "#pgevoke-_tpl-newsbox-storystackitem",
						"start": 1,
						"count": 5
					};
					debuglog("i===" + i);
					if (i === 2) {
						debuglog("Inside IF block");
						settings.endfunction = function() {
							if (typeof PGFNS !== "undefined" && typeof PGFNS.fireKruxSnippet === "function") {
								debuglog("KRUX Firing");
								var kruxoutcome = PGFNS.fireKruxSnippet();
								debuglog("KRUX Success? " + kruxoutcome);
							}
						};
					}
					$target.loadAjaxContent(settings);			
				}
			},
			loadColumnists: function() {
				PGLIB.fp.loader.loadColumnist("1", "columnist-bmcginley");
				PGLIB.fp.loader.loadColumnist("1", "columnist-aramirez");
				PGLIB.fp.loader.loadColumnist("2", "columnist-dmills");
				PGLIB.fp.loader.loadColumnist("2", "columnist-gcollier");
				PGLIB.fp.loader.loadColumnist("3", "columnist-dshribman");
				PGLIB.fp.loader.loadColumnist("3", "columnist-rdailey");
				// $eobanner = $("<a href='https://my.post-gazette.com/newsletters/' style='position:relative; width:100%' class='hidden-sm'><img data-original='https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/images/pg/evoke/essential-opinions-newsletter-600x600.jpg' style='width:100%' class='pg-lazyload'></a>");
				// $(".pgevoke-newsbox-columnists .pgevoke-newsbox-storystack-1").append($eobanner);
			},
			loadColumnist: function(rownumber, pgpageapikey) {
				$(".pgevoke-newsbox-columnists .pgevoke-newsbox-storystack-" + rownumber).loadAjaxContent({
					"template": "#pgevoke-_tpl-columnistsboxitem",
					"endpoint": "pgpageapi." + pgpageapikey,
					"count": 1,
				});		
			},
			loadMostEmailed: function() {
				debuglog("Loading Most Emailed");
				$(".pgevoke-mostemailed-content").loadAjaxContent({
					"template": "#pgevoke-_tpl-mostemailed-item",
					"endpoint": "pgpageapi.mostMailed",
					"count": 5,
					"endfunction": function() {
						$(".pgevoke-mostemailed").show();
					}
				});
			},
			loadRecentStories: function() {
				$("#pgevoke-fp-row3 .pgevoke-grid-area-main").loadAjaxContent({
					"template": "infinitestorylist",
					"processfunction": "simple",
					"jsondata": {
						"header": "RECENT STORIES"
					}
				});
				var ajaxsettings = {};
				ajaxsettings.endpoint = PGVARS.apibaseurl + "/recent/1/all/$p/";
				ajaxsettings.selector = ".pgevoke-infinitestorylist";
				ajaxsettings.template = "recent";
				if (typeof pgpageapi.recent === "object") {
					debuglog("Found pgpageapi.recentstories. Using for first object.");
					ajaxsettings.firstsetjsondata = pgpageapi.recent;
				} else {
					debuglog("Couldnt find recent stories");
				}
				PGLIB.all.infinitestorylist.init(ajaxsettings);
			},
			loadRightRailBreaking: function() {
				debuglog("Called loadRightRailBreaking()");
				if (PGVARS.site !== "blade") { return false; }
				debuglog("Loading rightral breaking (Blade)");
				var $target;
				$target = $(".pgevoke-fp-rightrail-breaking");
				$target.loadAjaxContent({
					"template": "textpack",
					"processfunction": "simple",
					"jsondata": {
						"header": "LATEST HEADLINES",
						"morelink": "/local/breaking",
						"moretext": ""
					},
				});
				//  ----- Textpack Items: Breaking -----
				$target = $(".pgevoke-fp-rightrail-breaking .pgevoke-textpack-storylist");
				var jsondata = PGPAGEDATA["breaking"];
				jsondata.articles = PGFNS.filterNoLatest(jsondata.articles);
				$target.loadAjaxContent({
					// "jsondata": PGPAGEDATA["breaking"],
					"jsondata": jsondata,
					"template": "textpackitem",
					"count": 10,
					"customdata": {
						"context": "fpbreaking"
					}
				});
				$target = $(".pgevoke-fp-breaking-blade");
				$target.loadAjaxContent({
					"template": "textpack",
					"processfunction": "simple",
					"jsondata": {
						"header": "LATEST HEADLINES",
						"morelink": "/local/breaking",
						"moretext": ""
					},
				});
				//  ----- Textpack Items: Breaking -----
				$target = $(".pgevoke-fp-breaking-blade .pgevoke-textpack-storylist");
				$target.loadAjaxContent({
					"jsondata": PGPAGEDATA["breaking"],
					"template": "textpackitem",
					"count": 4,
					"customdata": {
						"context": "fpbreaking"
					}
				});
			},
			loadPromobox: function(promoboxindex) {
				debuglog("loadPromobox() called (" + promoboxindex + ")");
				var promoboxindex = (typeof promoboxindex === "undefined") ? "" : promoboxindex.toString();
				debuglog("promoboxindex: '" + promoboxindex + "'");
				var $target = $(".pgevoke-fp-promobox-" + promoboxindex);
				if ($target.length !== 1) { return false; }
				debuglog("Found target");
				var sectionid = PGVARS.sectionid;
				var pgpageapikey = "promobox" + promoboxindex;
				if (PGVARS.sitecode === "DEV") {
					pgpageapikey += "dev";
				}
				if (typeof pgpageapi[pgpageapikey] === "undefined") {
					debuglog("Couldn't find pgpageapi." + pgpageapikey);
					return false;
				}
				$target.loadAjaxContent({
					jsondata: pgpageapi[pgpageapikey],
					template: "#pgevoke-_tpl-promobox",
					processfunction: function(jsondata, settings) {
						debuglog("Processing promobox data");
						if (typeof jsondata === "undefined" || typeof jsondata !== "object" || Array.isArray(jsondata) || typeof jsondata.itemid === "undefined" || typeof jsondata.typeid === "undefined") {
							debuglog("Promobox data is blank or invalid. Can't render. Exiting.");
							return false;
						}
						jsondata.hasimage = (PGFNS.issetmulti(jsondata, "customFields", "images", "0"));
						if (jsondata.hasimage && typeof jsondata.customFields.images[0].url === "string") {
							var imgurl;
							imgurl = PGFNS.getLiberLink(jsondata.customFields.images[0].url);
							imgurl = PGFNS.formatImage(imgurl, "600x");
							jsondata.customFields.images[0].url = imgurl;
						}
						var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
						var $target = settings.$target;
						var theoutput = templatefunction(jsondata);
						$target.append(theoutput);
						settings.endfunction(jsondata, settings);
					},
					endfunction: function(jsondata, settings) {
						debuglog("Running endfunction");
						debuglog(settings);
						setTimeout( function() {
							settings.$target.css("display", "block");
						}, 50);
					}
				});
			},
			setHasBigStory: function(manualvalue) {
				// return false; // Disabling for now
				var key = (PGVARS.sitecode === "DEV") ? "bigstorydev" : "bigstory";
				if (!(PGFNS.issetmulti(PGPAGEDATA, key, "items", "0", "customFields"))) {
					debuglog("Couldn't find customFields. Exiting");
					return false;
				}
				var fields = PGPAGEDATA[key]["items"][0]["customFields"];
				if (typeof fields.headline !== "string" || typeof fields.mainlink !== "string" || typeof fields.images !== "object" || !(Array.isArray(fields.images)) || fields.images.length === 0 || typeof fields.images[0].url !== "string") {
					debuglog("Big Story: Missing required field. hasBigStory=false");
					return false;
				} 
				debuglog("hasbigstory = true");
				hasbigstory = true;
				if (bigstoryenabled) { showbigstory = true; }

			},
			setElectionControls: function() {
				var key = (PGVARS.sitecode === "DEV") ? "dev" : "live";
				if (!(PGFNS.issetmulti(PGPAGEDATA, "electionControls", key))) {
					debuglog("Couldn't find Election Controls. Exiting");
					return false;
				}
				var controls = PGPAGEDATA.electionControls[key];
				electionControls.banner = (typeof controls["Banner"] === "boolean") ? controls["Banner"] : false;
				electionControls.apwidget = (typeof controls["AP Widget"] === "boolean") ? controls["Banner"] : false;
				electionControls.location = (typeof controls["Location"] === "number") ? controls["Location"] : 1;
				debuglog("Election Controls:");
				debuglog(electionControls);
				/* var fields = PGPAGEDATA[key]["items"][0]["customFields"];
				if (typeof fields.headline !== "string" || typeof fields.mainlink !== "string" || typeof fields.images !== "object" || !(Array.isArray(fields.images)) || fields.images.length === 0 || typeof fields.images[0].url !== "string") {
					debuglog("Big Story: Missing required field. hasBigStory=false");
					return false;
				} 
				debuglog("hasbigstory = true");
				hasbigstory = true;
				if (bigstoryenabled) { showbigstory = true; }	
				*/
				if (electionControls.banner) { $("body").addClass("pg-haselectionbanner"); }
			},
			loadBigStory: function(forceload) {
				debuglog("loadBigStory() called");
				/*
				if (forceload) {
					hasbigstory = true;
				}
				*/
				PGLIB.fp.loader.setHasBigStory();
				PGLIB.fp.loader.setElectionControls();
				if (!hasbigstory) {
					debuglog("hasbigstory is false. Exiting loadBigStory()");
					return false;
				}
				var thekey = (PGVARS.sitecode === "DEV") ? "bigstorydev" : "bigstory"
				if (typeof PGPAGEDATA[thekey] === "undefined") {
					debuglog("Couldn't find PGPAGEDATA[" + thekey + "]. Exiting.");
					return false;
				}
				var ajaxsettings = {
					jsondata: PGPAGEDATA[thekey],
					template: "#pgevoke-_tpl-bigstory",
					processfunction: function(jsondata, settings) {
						debuglog("Processing Big Story: pgpageapi." + thekey); // test
						if (typeof jsondata === "undefined" || typeof jsondata !== "object" || !(Array.isArray(jsondata.items)) || jsondata.items.length === 0) {
							debuglog("Big Story: Couldn't find items[0]. Exiting.");
							return false;
						}
						if (typeof jsondata.items[0].customFields !== "object" || jsondata.items[0].customFields === null) {
							debuglog("Big Story: customFields was missing or null. Exiting.");
							return false;
						}
						var fields = jsondata.items[0].customFields;
						if (typeof fields.headline !== "string" || typeof fields.mainlink !== "string" || typeof fields.images !== "object" || !(Array.isArray(fields.images)) || fields.images.length === 0 || typeof fields.images[0].url !== "string") {
							debuglog("Big Story: Missing required field. Exiting");
							return false;
						} 
						debuglog(fields);
						var objfields = ["kicker", "headline", "mainlink", "subhead", "relateditem1headline", "relateditem1link", "relateditem2headline", "relateditem2link", "fontsize"];
						var theobj = {};
						$.each(objfields, function(i, fieldname) {
							theobj[fieldname] = (typeof fields[fieldname] === "string") ? fields[fieldname] : "";
						});
						theobj.kicker = (theobj.kicker === "") ? "DEVELOPING STORY" : theobj.kicker;
						theobj.imagelink = fields.images[0].url || "";
						if (theobj.imagelink !== "") {
							theobj.imagelink = PGFNS.formatImage(theobj.imagelink, "800x_a10-7_cTC");
						}
						theobj.imagecaption = fields.images[0].caption || "";
						if (typeof theobj.fontsize === "string") {
							$("body").addClass("pg-bigstory-fontsize-" + theobj.fontsize);
						}
						var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
						debuglog("Sending this obj:");
						debuglog(theobj);
						var $target = settings.$target;
						var theoutput = templatefunction(theobj);
						$target.append(theoutput);
						settings.endfunction(theobj, settings);
					},
					endfunction: function(theobj, settings) {
						debuglog("Big Story: Running endfunction");
						$("body").addClass("pg-hasbigstory");
					}
				};
				$("#pgevoke-bigstoryinline").loadAjaxContent(ajaxsettings);
				$("#pgevoke-bigstorymainarea").loadAjaxContent(ajaxsettings);
				$("#pgevoke-bigstoryabove").loadAjaxContent(ajaxsettings);
			},
			loadElectionResults: function() {
				debuglog("loadElectionResults called");
				if (PGVARS.site !== "pg") { return false; }
				if (typeof PGPAGEDATA.electionResultsWidget !== "object") {
					debuglog("PGPAGEDATA[electionResultsWidget] not an object. Exiting.");
				}
				var thedata = PGPAGEDATA["electionResultsWidget"];
				var enabledKey = (PGVARS.sitecode !== "LIVE") ? "enabledDev" : "enabledLive";
				if (typeof thedata[enabledKey] !== "boolean" || thedata[enabledKey] !== true) {
					debuglog("Election results widget: " + enabledKey + " is false. Exiting.");
					return false;
				} else {
					debuglog("Election results widget: " + enabledKey + " is true");
				}
				var $target = $("#pgevoke-fp-electionwidgetabove");
				var ajaxsettings = {
					"template": "#pgevoke-_tpl-electionresultswidget",
					"processfunction": "simple",
					"jsondata": {
						"races": thedata["races"],
						"countToShow": 3
					}
				};
				$target.loadAjaxContent(ajaxsettings);
				// var containerselector = "[data-swiper-id=" + swiperid + "]";
				var containerselector = "#pgevoke-electionresults-mobile .swiper-container";
				thegallery = new Swiper (containerselector, {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev'
				});
				// if (PGVARS.sitecode !== "LIVE") {
					$("body").addClass("pg-haselectionresultswidget");
				// }		
			},
			loadViafouraScript: function() {
				if (PGVARS.site !== "blade") { return false; }
				var script = document.createElement("script");
			    script.setAttribute("async", true);
			    script.setAttribute("src", "//cdn.viafoura.net/vf-v2.js");
			    document.getElementsByTagName("head")[0].appendChild(script);
			}
		};
	})();
	PGLIB.fp.loader.init();
}


// *********************************************
//         pgevoke.fp.misc.js
// *********************************************

// COMMENTED OUT
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "FRONTPAGEZ" && location.hostname.substr(0,3).toLowerCase() !== "new") {


	// *********************************************
	//   Taken from pgevoke.content.recent-stories
	// *********************************************
	// var param1 = "";
	PGLIB = PGLIB || {};
	PGLIB.fp = PGLIB.fp || {};
	PGLIB.fp.recentstories = (function() {
		var debuglogkey = "PGRECENTSTORIES";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		// var param1 = "";
		return {
			selector: "#pgevoke-recent-stories",
			currentindex:0,
			counter:0,
			triggerpointoffset:3500,
			stories:null,
			alreadyloading: false,
			endofcontentreached: false,
			storiesperrequest:50,
			// debugmode: true,
			// log: function(thingtolog) {
			// 	if (PGLIB.fp.recentstories.debugmode === true) {
			//		console.log(thingtolog);
			// 	}
			// },
			init: function() {
				$(document).ready(function() {
					// param1 = "<%@param1%>";
					// param1 = param1.toLowerCase();
					// console.log("RECENT STORIES: Initing...");
					// Initialize Recent Stories Widget w/ infinite scroll
					debuglog("UPDATED!");
					PGLIB.fp.recentstories.updateStoriesAndViewportBottomValues();
					PGLIB.fp.recentstories.seeIfWeNeedNewStories();
					$(window).scroll(function() {
						PGLIB.fp.recentstories.seeIfWeNeedNewStories();				
					});
				});
			},
			recentstoriesbottom: {
				value: 0,
				update: function() {
					var top = $("#pgevoke-recent-stories").offset().top;
					var height = $("#pgevoke-recent-stories").height();
					var bottom = top + height;
					bottom = Math.round(bottom);
					PGLIB.fp.recentstories.recentstoriesbottom.value = bottom;
				}
			},
			viewportbottom: {
				value: 0,
				update: function() {
					PGLIB.fp.recentstories.viewportbottom.value = $(window).scrollTop() + $(window).height();
				}
			},
			oldstoriesheight: {
				value: 0,
				set: function() {
					PGLIB.fp.recentstories.oldstoriesheight.value = $("#pgevoke-recent-stories").height();
				}
			},
			updateStoriesAndViewportBottomValues: function() {
				PGLIB.fp.recentstories.recentstoriesbottom.update();
				PGLIB.fp.recentstories.viewportbottom.update();
			},
			seeIfWeNeedNewStories: function() {
				if (PGLIB.fp.recentstories.alreadyloading || PGLIB.fp.recentstories.endofcontentreached) { return; }
				PGLIB.fp.recentstories.updateStoriesAndViewportBottomValues();
				if (PGLIB.fp.recentstories.recentstoriesbottom.value == 0) { return; } // Document still loading
				if (PGLIB.fp.recentstories.viewportbottom.value + PGLIB.fp.recentstories.triggerpointoffset >= PGLIB.fp.recentstories.recentstoriesbottom.value) {
					debuglog("RECENT STORIES: Trigger point reached. " + (PGLIB.fp.recentstories.viewportbottom.value + PGLIB.fp.recentstories.triggerpointoffset) + " / " + PGLIB.fp.recentstories.recentstoriesbottom.value);
					PGLIB.fp.recentstories.loadNewStories(); // They've scrolled far enough down
				}
			},
			loadNewStories: function() {
				PGLIB.fp.recentstories.alreadyloading = true;
				PGLIB.fp.recentstories.spinner.show();
				PGLIB.fp.recentstories.oldstoriesheight.set();
				PGLIB.fp.recentstories.loadAjaxContent();
			},
			loadAjaxContent: function() {
				debuglog("RECENT STORIES: NEW AJAX REQUEST!!!!");
				$("#pgevoke-recent-stories").loadAjaxContent({
					"endpoint": PGAPIBaseURL + "/recent/1/all/" + PGLIB.fp.recentstories.currentindex + "/",
					"template":"#pgevoke-_tpl-recent",
					/* "processfunction": PGLIB.fp.recentstories.processStorylist, */
					"endfunction": PGLIB.fp.recentstories.endFunction,
					"trackingselector": "#pgevoke-recent-stories"
				});
			},
			processStorylist: function(jsondata, settings) {
				var lastitemofset = parseInt(jsondata.endCount, 10);
				var totalcount = parseInt(jsondata.totalCount, 10);
				if (lastitemofset >= totalcount) {
					PGLIB.fp.recentstories.endofcontentreached = true;
				}
				var articles = jsondata.articles;	
				var thetemplate = $(settings.template).html();	
				var templatefunction = _.template(thetemplate);	
				var $target = settings.$target;
				$.each(articles, function(i, item) {
					var theobj = PGLIB.fp.recentstories.processStorylistItem(item);
					var theoutput = templatefunction(theobj);
					$target.append(theoutput);
				});
				PGLIB.fp.recentstories.doneLoadingStories();		
			},
			processStorylistItem: function(item) {
				var newstoryimagelink = (pgfunctions.issetmulti(item,"images","0","url")) ? item.images[0].url : "";
				var newstoryimagecaption = (pgfunctions.issetmulti(item,"images","0","caption")) ? item.images[0].caption : "";
				var newstorypubdate = item.pubDate;
				var newstorydateobj = new Date(newstorypubdate);
				var newstorytimeago = jQuery.timeago(newstorydateobj);
				var newstoryauthor;
				if (typeof item.author == "object") {
					newstoryauthor = item.author[0];
					newstoryauthor = pgfunctions.formatByline(newstoryauthor);
				} else if (item.author.length > 0) {
					newstoryauthor = item.author + "";
					newstoryauthor = pgfunctions.formatByline(newstoryauthor);
				} else {
					newstoryauthor = "";
				}
				var newstoryurl = item.link;
				if (PGVARS.sitecode !== "LIVE") {
					newstoryurl = newstoryurl.replace("www.post-gazette.com", PGVARS.sitecode.toLowerCase() + ".post-gazette.com");	
				}
				obj = {};
				obj.rank = PGLIB.fp.recentstories.counter;
				obj.title = item.title;
				obj.timeago = pgfunctions.formatDate(newstorypubdate, "timeago");
				obj.timeagoshort = pgfunctions.formatDate(newstorypubdate, "timeagoshort");
				obj.link = newstoryurl;
				obj.parentsectionid = pgfunctions.getParam1(obj.link);
				obj.parentsectionname = pgfunctions.getSectionName(obj.parentsectionid);
				obj.pubdate = newstorypubdate;
				obj.pubdateformatted = pgfunctions.formatDate(newstorypubdate, "normal"); 
				obj.byline = newstoryauthor;
				obj.imagelink = newstoryimagelink;
				obj.imagecaption = newstoryimagecaption;
				return obj;
			},
			endFunction: function(jsondata, settings) {
				debuglog("PG RECENT STORIES: Running endFunction");
				var lastitemofset = parseInt(jsondata.endCount, 10);
				var totalcount = parseInt(jsondata.totalCount, 10);
				if (lastitemofset >= totalcount) {
					PGLIB.fp.recentstories.endofcontentreached = true;
				}
				debuglog("PG RECENT STORIES: End of content? " + PGLIB.fp.recentstories.endofcontentreached);
				PGLIB.fp.recentstories.alreadyloading=false;
				PGLIB.fp.recentstories.spinner.hide();
				PGLIB.fp.recentstories.currentindex += 1;
				var kruxresults = PGFNS.fireKruxSnippet();
				debuglog(kruxresults);
				PGLIB.fp.recentstories.seeIfWeNeedNewStories();
			},
			doneLoadingStories: function() {
			},
			spinner: {
				selector: "#pgevoke-recent-stories-spinner",
				show: function() {
					$(PGLIB.fp.recentstories.spinner.selector).css("display", "block");
				},
				hide: function() {
					$(PGLIB.fp.recentstories.spinner.selector).css("display", ""); // Defaults to none as set via CSS
				}
			},
			fireItemStyleTrackingEvents: function(itemcountbystyle) {
				/* Object.keys(itemcountbystyle).forEach( function(key) {
					var keysvalue = itemcountbystyle[key];
					if (keysvalue > 0) {
						ga('itTracker.send',
							'event',
							'Recent Stories -infinitescroll|style',
							param1 + " -displayed",
							key,
							keysvalue,
							{'nonInteraction': 1}
						);
					}
				}); */
			}
		};
	})();
	PGLIB.fp.recentstories.init();
	
}

// **************************************
//   pgevoke.js.story_syncscriptloader
// **************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.syncscriptloader = (function() {
		var debuglogkey = "SYNCSCRIPTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var $scriptsholder = $("<div></div>");
		var $scripts;
		var count;
		var i;
		var timeoutfunc;
		var placeholderindex = 0;
		var scriptindex = 0;
		var alreadyloading = false;
		var lasttimestamp = 0;
		function insertAfter(el, referenceNode) {
			// el = newelement
	    	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
		}
		return {
			prepareScripts: function(bodystr) {
				debuglog("Preparing scrips.");
				debuglog(bodystr);
				var $elem = $("<div></div>");
				$elem.append($(bodystr));
				debuglog($elem);
				var $scripts  = $elem.find("script");
				$scripts.each(function() {
					if (typeof $(this).attr("src") === "string") {
						$(this).attr("data-pg-story-script-index", scriptindex.toString());
						$(this).after($("<div class='pg-story-script-placeholder' id='pg-story-script-placeholder-" + scriptindex + "'></div>"));
						scriptindex += 1;
					}
				});
				$scriptsholder.append($elem.find("script")); // Add scripts to holder/queue
				$elem.find("script").remove();
				debuglog("Found these scripts...");
				debuglog($scriptsholder.prop("innerHTML"));
				debuglog("Body with scripts removed...");
				var editedbodystr = $elem.prop("innerHTML");
				debuglog(editedbodystr);
				return editedbodystr;
				// return str;
			},
			processNext: function() {
				alreadyloading = true;
				var d = new Date();
				var n = d.getTime();
				var timevalue;
				if (lasttimestamp > 0) {
					timevalue = (n - lasttimestamp) + "ms";
				} else {
					timevalue = (n / 1000);
				}
				lasttimestamp = n;
				debuglog("processNext() called [" + timevalue + "]");
				var $thescript = $scriptsholder.find("script").first();
				if ($thescript.length > 0) {
					debuglog("Processing script...");
					debuglog($thescript.prop("outerHTML"));
					var src = $thescript.attr("src");
					if (typeof src !== "string") {
						// debuglog("This script does NOT have an src. Appending directly to head.");
						debuglog("This script does NOT have an src. Wrapping code in try/catch and appending to head.");
						// $("head").append($thescript);
						var $newscript = $("<script>");
						var scriptcode = "";
						scriptcode += "try {\r\n";
						scriptcode += $thescript.text() + "\r\n";
						scriptcode += "} catch(e) {\r\n";
						scriptcode += "console.log('SYNCSCRIPTS: ERROR...');\r\n";
						scriptcode += "console.log(e);\r\n";
						scriptcode += "}";
						$newscript.text(scriptcode);
						PGLIB.story.syncscriptloader.timeoutfunc = setTimeout(function() {
							debuglog("Inline script timed out / had a problem. Moving on.");
							$thescript.remove();
							alreadingloading = false;
							PGLIB.story.syncscriptloader.processNext();
						}, 2000);
						$("head").append($newscript);
						$thescript.remove();
						clearTimeout(PGLIB.story.syncscriptloader.timeoutfunc);
						PGLIB.story.syncscriptloader.processNext();
					} else {
						// ------- Create new script and duplicate all elements
						var newscript = document.createElement("script");
						var attributes = $thescript.prop("attributes");
						$.each(attributes, function() {
							// debuglog("SYNSCRIPTS: SETTING ATTRIBUTE " + this.name + " = " + this.value);
						    newscript.setAttribute(this.name, this.value);
						});// newscript.src = $thescript.attr("src");
						debuglog("newscript...");
						debuglog(newscript);
						// ------- Set onload + timeout to move on to next -------
						newscript.onload = function() {
							debuglog("The 'onload' event fired. Done loading external script");
							clearTimeout(PGLIB.story.syncscriptloader.timeoutfunc);
							$thescript.remove();
							$thescript = $scriptsholder.find("script").first();
							alreadingloading = false;
							PGLIB.story.syncscriptloader.processNext();
						};
						PGLIB.story.syncscriptloader.timeoutfunc = setTimeout(function() {
							debuglog("External script 'onload' timed out. Moving on.");
							$thescript.remove();
							alreadingloading = false;
							PGLIB.story.syncscriptloader.processNext();
						}, 3000);
						// ------- Append the new script after the placeholder, then remove placeholder --------
						var id = "pg-story-script-placeholder-" + $thescript.attr("data-pg-story-script-index");
						var placeholder = document.getElementById(id);
						insertAfter(newscript, placeholder);
						placeholder.parentNode.removeChild(placeholder);
						// ********* REMOVED CODE a000 *********
					}				
				} else {
					debuglog("Queue is empty");
					alreadyloading = false;
				}
			},
			processQueue: function() {
				if (!alreadyloading) {
					debuglog("Processing queue...");
					PGLIB.story.syncscriptloader.processNext();	
				} else {
					debuglog("processQueue() called, but alreadloading=true.");
				}
			},
			getQueue: function() {
				return $scriptsholder;
			}
		};
	})();
}

// **************************************
//     pgevoke.js.story_shortcodes
// **************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.shortcodes = (function() {

		/* ######## PGLIB.story.shortcodes: Private Values & Functions  ####### */
		// var thestoryobj; // Needs to be in this scope to be accessible in replacefunctions
		var debuglogkey = "SHORTCODES";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}

		//**
		//* Takes a string like "youtube" and returns
		//* the regex for the shortcode
		//*
		function getRegexString(key) {
			var regexstring = "";
			regexstring += "\<!-- @@@";
			regexstring += key;
			regexstring += "\{(.*?)} --\>";
			// regexstring += "/g";
			var regex = new RegExp(regexstring, 'g');
			return regex;
		}
		//**
		//* Takes settings string like "id=p9KwB2aF|layout=1"
		//* and splits it up into an object
		//*
		function getSettingsObject(str) {
			var arr = str.split("|");
			var settingsobj = {};
			arr.forEach(function(item) {
				// Example: id=p9KwB2aF
				var itemlength = item.length;
				var eqindex = item.indexOf("=");
				if (eqindex > 0 && (item.length > (eqindex + 1))) {
					var key = item.substr(0, eqindex); // id
					var val = item.substr(eqindex+1); // p9KwB2aF
					settingsobj[key.toLowerCase()] = val;
				}
			});
			return settingsobj;
		}
		//**
		//* List of all shortcodes along with corresponding
		//* replacement functions. Automatically cycled thru.
		//*
		var items = {
			image: {
				name: "image",
				replacefunction: function(match, p1) {
					debuglog("------------------------------");
					debuglog("Processing image MATCH");
					var settings = getSettingsObject(p1);
					if (typeof settings !== "object") {
						return match;
					}
					if (typeof settings["url"] !== "string") {
						return match;
					}
					debuglog("Passed checks");
					settings.hascaption = (typeof settings["caption"] === "string");
					settings.hascredit = (typeof settings["credit"] === "string");
					var replacement = "";
					replacement += match;
					replacement += "\n";
					replacement += '<div class="pg-inlineimage">';
					replacement += '<div class="pg-inlineimage-innerwrapper">';
					replacement += '<img src="' + settings.url + '"';
					if (settings.hascaption) {
						replacement += ' alt="' + settings.caption + '"';
					}
					replacement += '>';
					if (settings.hascaption) {
						replacement += '<span class="pg-inlineimage-caption">'+ settings.caption;
						if (settings.hascredit) {
							replacement += '&nbsp;<span class="pg-inlineimage-credit">(' + settings.credit + 
							')</span>';
						}
						replacement += '</span>'; // end of caption
					}
					replacement += '</div>'; // end of innerwrapper
					replacement += '</div>'; // end of pg-inlineimage
					return replacement;
				}
			},
			gallery: {
				name: "gallery",
				replacefunction: function(match, p1) {
					debuglog("***** Processing gallery MATCH *****");
					var settings = getSettingsObject(p1);
					// if (typeof settings !== "object") {
					// 	return match;
					// }
					var replacement = "";
					replacement += match;
					replacement += '<div class="pgevoke-story-swiper pgevoke-story-swiper-inline">';
					replacement += '<div class="swiper-container">';
					replacement += '<div class="swiper-fullscreenbutton"><span class="icon icon-expand"></span></div>';
					replacement += '<div class="swiper-wrapper">';
					debuglog("Passed checks. thestoryobj...");
					debuglog(thestoryobj);
					var images = thestoryobj.images;
					$.each(images, function(i, image) {
						replacement += '<div class="swiper-slide">';
						replacement += '<div class="swiper-slide-image" style="background-image:url(\'' + image.url + '\')"></div>';
						replacement += '<div class="swiper-slide-caption">';
						replacement += '<div class="swiper-slide-caption-inner">';
						replacement += '<div class="swiper-slide-caption-text">' + image.caption;
						if (typeof image.photoCredit === "string" && image.photoCredit !== "") {
							replacement += '&nbsp;<span class="swiper-slide-credit">(' + image.photoCredit + ')</span>';
						}
						replacement += '</div>'; // caption-text
						replacement += '</div>'; // caption-inner
						replacement += '</div>'; // caption
						replacement += '</div>'; // swiper-slide
					});
					replacement += '</div>'; // swiper-wrapper
					replacement += '<div class="swiper-pagination"></div>';
					replacement += '<div class="swiper-button-prev swiper-button-white"></div>';
					replacement += '<div class="swiper-button-next swiper-button-white"></div>';
					// <div class="swiper-scrollbar"></div> -->
					replacement += '</div>'; //swiper-container
					replacement += '</div>'; //pgevoke-story-swiper-inline
					return replacement;
				}
			},
			related: {
				name: "related",
				replacefunction: function(match, p1) {
					// var settings = getSettingsObject(p1);
					var replacement = "";
					replacement += match;
					replacement += '<div class="pgevoke-story-related-linktarget"></div>';
					return replacement;
				}
			},
			youtube: {
				name: "youtube",
				replacefunction: function(match, p1) {	
					// debuglog("------------------------------");
					// debuglog("Processing YouTube");
					var settings = getSettingsObject(p1);
					if (typeof settings !== "object") {
						return match;
					}
					if (typeof settings["id"] !== "string") {
						return match;
					}
					// debuglog("Passed checks");
					var replacement = "";
					replacement += match;
					replacement += "\n";
					replacement += '<div class="pg-inlinevideo"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + settings["id"] + '" frameborder="0" allowfullscreen></iframe></div>';
					return replacement;
				}
			},
			sendtonews: {
				name: "sendtonews",
				replacefunction: function(match, p1) {
					var settings = getSettingsObject(p1);
					if (typeof settings !== "object") {
						return match;
					}
					if (typeof settings["id"] !== "string") {
						return match;
					}
					var id = settings["id"];
					var replacement = "";
					replacement += match;
					replacement += '<div class="pg-inlinevideo" style="padding-bottom:53%">';
					replacement += '<div class="s2nPlayer-' + id + ' pg-inlinevideo-inner" data-type="single"></div>';
					replacement += '<scr' + 'ipt type="text/javascript" src="http://embed.sendtonews.com/player2/embedcode.php?SC=' + id + '&autoplay=on&sound=click" data-type="s2nScript"></scr' + 'ipt>';
					replacement += '</div>';
					return replacement;
				}
			},
			inform: {
				name: "inform",
				replacefunction: function(match, p1) {
					var settings = getSettingsObject(p1);
					if (typeof settings !== "object") {
						return match;
					}
					if (typeof settings["id"] !== "string") {
						return match;
					}
					var id = settings["id"];
					var replacement = "";
					replacement += match;
					replacement += '<div class="pg-inlinevideo">';				
					replacement += '<div class="inform-embed pg-inlinevideo-inner" data-config-id="2" data-type="VideoPlayer/Single" data-tracking-group="90295" data-playlist-id="13434" data-video-id="' + id + '" data-site-section="ppgazette"></div>';
					replacement += '<scr' + 'ipt type="text/javascript">_informq.push([\'embed\']);</sc' + 'ript>';
					replacement += '</div>';
					return replacement;
				}
			},
			brightcove: {
				name: "brightcove",
				replacefunction: function(match, p1) {
					var settings = getSettingsObject(p1);
					if (typeof settings !== "object") {
						return match;
					}
					if (typeof settings["id"] !== "string") {
						return match;
					}
					var id = settings["id"];
					var replacement = "";
					replacement += match;
					replacement += '<div style="display: block; position: relative; max-width: 100%;">';
					replacement += '<div style="padding-top: 56.25%;">';
					replacement += '<iframe src="//players.brightcove.net/1105443290001/19b4b681-5e7c-4b03-b1ff-050f00d0be3e_default/index.html?videoId=' + id + '" allowfullscreen webkitallowfullscreen mozallowfullscreen style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></iframe>';
					replacement += '</div>';
					replacement += '</div>';
				}
			}
		};
		/* ######## PGLIB.story.shortcodes: Public Functions ####### */
		return {
			replaceAll: function(bodytext, storyobj) {
				debuglog("REPLACE ALL. Here is items...");
				debuglog(items);
				thestoryobj = storyobj;
				var theitems = items; // Brings items into the local scope. Otherwise thestoryobj isnt accessible to the processfunctions
				$.each(items, function(item, itemobj) {
					debuglog("----------");
					debuglog("Processing item: " + item);
					debuglog(itemobj);
					var regex = getRegexString(item);
					debuglog("Regex is " + regex);
					debuglog("storyobj...");
					debuglog(thestoryobj);
					bodytext = bodytext.replaceAll(regex, itemobj.replacefunction);
				});
				return bodytext;
			}
		};
	})();
}


// **************************************
//   pgevoke.story.embeddedimages
// **************************************
PGLIB = PGLIB || {};
PGLIB.story = PGLIB.story || {};
PGLIB.story.embeddedimages = (function() {
	var debuglogkey = "EMBEDDEDIMAGES";
	var debuglog = function(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	};
	return {
		update: function(bodystr) {
			debuglog("update() called");
			var $elem = $("<div></div>");
			$elem.append($(bodystr));
			var $img  = $elem.find("img");
			$img.each(function() {
				// debuglog("Processing each");
				if (typeof $(this).attr("src") === "string") {
					var src = $(this).attr("src");
					debuglog("Found img with src=\"" + src + "\"");
					var match = src.match(/^(?:https?:)?\/?\/?(?:www\.)?post-gazette\.com\/(.+)$/);
					if (match !== null) {
						debuglog("It's a PG url with protocol and/or domain");
						src = "https://liber.post-gazette.com/" + match[1];
					} else {
						debuglog("It's NOT a PG url with protocol and/or domain");
						if (src.match(/^(?:https?:)?\/\//) !== null) {
							debuglog("It's a 3rd party link. Leave alone.");
						} else {
							console.log("It's a relative URL");
							src = src.replace(/^\/?([^\/].*)$/, "https://liber.post-gazette.com/$1");
						}
					}
					debuglog("Updated to src=\"" + src + "\"");
					$(this).attr("src", src);
				}
			});
			var editedbodystr = $elem.prop("innerHTML");
			return editedbodystr;
		}
	};
})();



// **************************************
//     pgevoke.js.story_swiper
// **************************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.swiper = (function() {
		var debuglogkey = "SWIPER";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var galleries = {};
		var currentpopupsize = "normalcaption";
		var refreshtimeout = null;
		return {
			alreadyinitialized: false,
			init: function() {
				debuglog("init() called");
				$(document).ready( function() {
					$(document).on("click", ".pgevoke-story-toparea-cutout-image img",function() {
						debuglog("Hero Image Clicked");
						var $parentstory = $(this).closest(".pgevoke-story");
						var parentstoryid = $parentstory.attr("id");
						var parentstoryindex = $parentstory.attr("data-pg-storyindex");
						var selector = "#" + parentstoryid + " .pgevoke-story-swiper-popup";
						PGLIB.story.swiper.showPopup(parentstoryindex);
					});
					$(document).on("click", ".swiper-fullscreenbutton",function() {
						debuglog("Full screen button clicked");
						var $parentstory = $(this).closest(".pgevoke-story");
						var parentstoryid = $parentstory.attr("id");
						var parentstoryindex = $parentstory.attr("data-pg-storyindex");
						var selector = "#" + parentstoryid + " .pgevoke-story-swiper-popup";
						PGLIB.story.swiper.showPopup(parentstoryindex);
					});
					$(document).on("click", ".pgevoke-story-toparea-cutout-gallerybutton", function() {
						debuglog("Popup button clicked");
						var $parentstory = $(this).closest(".pgevoke-story");
						var parentstoryid = $parentstory.attr("id");
						var parentstoryindex = $parentstory.attr("data-pg-storyindex");
						var selector = "#" + parentstoryid + " .pgevoke-story-swiper-popup";
						PGLIB.story.swiper.showPopup(parentstoryindex);
					});
					$(document).on('click', '.popup-modal-dismiss', function (e) {
						e.preventDefault();
						$.magnificPopup.close();
					});
				});
			},
			initstory: function(storyindex) {
				debuglog("initstory(" + storyindex + ") called");
				$(document).ready(function () {
					var needsinitialized = false;
					if (!PGLIB.story.swiper.alreadyinitialized) {
						PGLIB.story.swiper.alreadyinitialized = true; // Change this immediately to avoid repeat init call
						debuglog("PGLIB.story.swiper.init() has NOT yet been called. Will do that momentarily...");
						needsinitialized = true;
					} else {
						debuglog("PGLIB.story.swiper.init() has already been called");
					}
					debuglog("Document ready");
					// ------ Inline Galleries ------
					var selector = '#pgevoke-story-' + storyindex + ' .pgevoke-story-swiper-inline .swiper-container';
					debuglog("Looking for inline galleries with selector " + selector);
					galleries[storyindex] = {};
					if ($(selector).length > 0) {
						$(selector).each(function(index) {
							// debuglog("SWIPERGALLERIES: In for " + index + "/" + index);
							var swiperid = "story-" + storyindex + "-swiperinlinecontainer-" + index;
							// debuglog($(this));
							$(this).attr("data-swiper-id", swiperid);
							var containerselector = "[data-swiper-id=" + swiperid + "]";
							galleries[index][swiperid] = new Swiper (containerselector, {
								pagination: '.swiper-pagination',
								paginationClickable: true,
								nextButton: '.swiper-button-next',
								prevButton: '.swiper-button-prev'
							});									
							var slidecount = $(this).find(".swiper-slide").length;
							if (slidecount < 2) {
								$(this).find(".swiper-pagination").hide();
							}
						});
					} else {
						debuglog("No inline swiper for #pgevoke-story-" + storyindex);
					}
					var selector = '#pgevoke-story-' + storyindex + ' .pgevoke-story-swiper-popup .swiper-container';
					var $swiperpopup = $(selector).first();
					if ($swiperpopup.length === 1) {
						/*  var swiperid = "story-" + storyindex + "-container-popup";
						$swiperpopup.attr("data-swiper-id", swiperid);
						var containerselector = "[data-swiper-id=" + swiperid + "]";
						galleries[storyindex]["popup"] = new Swiper (containerselector, {
							pagination: '.swiper-pagination',
							paginationClickable: true,
							nextButton: '.swiper-button-next',
							prevButton: '.swiper-button-prev',
							// Disable preloading of all images
							preloadImages: false,
							// Enable lazy loading
							lazyLoading: true,
							lazyLoadingInPrevNext: true,
							lazyLoadingOnTransitionStart: true
						}); */
						var slidecount = $swiperpopup.find(".swiper-slide").length;
						if (slidecount < 2) {
							$swiperpopup.find(".swiper-pagination").hide();
						}
						// ------ Add image count to button -------
						var thestory = "#pgevoke-story-" + storyindex;
						var gallerybuttonnumber = thestory + " .pgevoke-story-toparea-cutout-gallerybutton-number";
						var gallerybuttoncircle = thestory + " .pgevoke-story-toparea-cutout-gallerybutton-circle";
						var gallerybuttontext = thestory + " .pgevoke-story-toparea-cutout-gallerybutton-text";
						$(gallerybuttonnumber).html(slidecount.toString());
						$(gallerybuttoncircle).css("display","block");
						var hasmulti = "0";
						if (slidecount > 1) {
							hasmulti = "1";
						}
						$("#pgevoke-story-" + storyindex).attr("data-pg-storyhasmultipleimgs", hasmulti);
					}
					// ------ Popup Gallery ------
					/* var selector = '#pgevoke-story-' + storyindex + ' .pgevoke-story-swiper-popup .swiper-container';
					var $swiperpopup = $(selector).first();
					if ($swiperpopup.length === 1) {
						var swiperid = "story-" + storyindex + "-container-popup";
						$swiperpopup.attr("data-swiper-id", swiperid);
						var containerselector = "[data-swiper-id=" + swiperid + "]";
						galleries[storyindex]["popup"] = new Swiper (containerselector, {
							pagination: '.swiper-pagination',
							paginationClickable: true,
							nextButton: '.swiper-button-next',
							prevButton: '.swiper-button-prev',
							// Disable preloading of all images
							preloadImages: false,
							// Enable lazy loading
							lazyLoading: true,
							lazyLoadingInPrevNext: true,
							lazyLoadingOnTransitionStart: true
						});
						var slidecount = $swiperpopup.find(".swiper-slide").length;
						if (slidecount < 2) {
							$swiperpopup.find(".swiper-pagination").hide();
						}
						// ------ Add image count to button -------
						var thestory = "#pgevoke-story-" + storyindex;
						var gallerybuttonnumber = thestory + " .pgevoke-story-toparea-cutout-gallerybutton-number";
						var gallerybuttoncircle = thestory + " .pgevoke-story-toparea-cutout-gallerybutton-circle";
						$(gallerybuttonnumber).html(slidecount.toString());
						$(gallerybuttoncircle).css("display","block");
					} */
					if (needsinitialized) {
						debuglog("Calling PGLIB.story.swiper.init()");
						PGLIB.story.swiper.init();	
					}
				});
			},
			initStoryPopup: function(storyindex) {
					debuglog("initstoryPopup(" + storyindex + ") called");
					// ------ Popup Gallery ------
					var selector = '#pgevoke-story-' + storyindex + ' .pgevoke-story-swiper-popup .swiper-container:not([data-swiper-id])';
					var $swiperpopup = $(selector).first();
					if ($swiperpopup.length === 1) {
						var swiperid = "story-" + storyindex + "-container-popup";
						$swiperpopup.attr("data-swiper-id", swiperid);
						var containerselector = "[data-swiper-id=" + swiperid + "]";
						$swiperpopup.closest(".pgevoke-story-swiper-popup").attr("data-swiper-initialized", "1");
						galleries[storyindex]["popup"] = new Swiper (containerselector, {
							pagination: '.swiper-pagination',
							paginationClickable: true,
							nextButton: '.swiper-button-next',
							prevButton: '.swiper-button-prev',
							// Disable preloading of all images
							preloadImages: false,
							// Enable lazy loading
							lazyLoading: true,
							lazyLoadingInPrevNext: true,
							lazyLoadingOnTransitionStart: true
						});
					} else {
						debuglog("Could not find uninialized '.pgevoke-story-swiper-popup .swiper-container'.");
					}
			},
			showPopup: function(storyindex) {
				debuglog("showPopup() called for story #" + storyindex);
				$(document).ready(function () {
					var selector = "#pgevoke-story-" + storyindex + " .pgevoke-story-swiper-popup";
					if ($(selector).length !== 1) {
						debuglog(selector + " not found. Cannot launch popup.");
						debuglog($(selector).length);
						return;
					}
					if (!($(selector).attr("data-swiper-initialized") === "1")) {
						debuglog("This story's popup swiper gallery is not yet initialized. Initializing now.");
						PGLIB.story.swiper.initStoryPopup(storyindex);
					} else {
						debuglog("Popup gallery is already initialized. Showing.");
					}
					debuglog("Opening");
					$.magnificPopup.open({
						items: {
							src: selector, // can be a HTML string, jQuery object, or CSS selector
							type: 'inline',
						},
						closeOnBgClick: false,
						enableEscapeKey: true,
						showCloseBtn: false,
						callbacks: {
							open: function() {
								$(".mfp-content").css("height","auto");
								PGLIB.story.swiper.updateSwiperPopupsSize(true);
								PGLIB.story.swiper.refreshGallery(storyindex, "popup");
								PGLIB.story.swiper.bindResize();
								refreshtimeout = setTimeout(PGLIB.story.swiper.refreshGallery(storyindex, "popup"), 100);
								$("body").addClass("pgevoke-story-popupgalleryopen");
								PGFNS.setViewportMaxScale(2.0);
								PGLIB.story.transporter.loadFotomotoScript();
							},
							close: function() {
								clearTimeout(refreshtimeout);
								PGLIB.story.swiper.unbindResize();
								$("body").removeClass("pgevoke-story-popupgalleryopen");
								PGFNS.setViewportMaxScale(1.0);
							}
						}
					});
				});
			},
			updateSwiperPopupsSize: function(forceupdate) {
				forceupdate = (typeof forceupdate === "boolean") ? forceupdate : false;
				var width = $(window).width();
				var height = $(window).height();
				var $swiper = $(".pgevoke-story-swiper-popup");
				debuglog("Resizing (window size: " + width + "x" + height + ")");
				if (width >= 850 && height >= 690) {
					if (currentpopupsize !== "shortcaption" || forceupdate) {
						PGLIB.story.swiper.setSwiperPopupsSize("shortcaption");
					}
				} else if (width >= 620 && height >= 560) {
					if (currentpopupsize !== "normalcaption" || forceupdate) {
						PGLIB.story.swiper.setSwiperPopupsSize("normalcaption");
					}
				} else if (width >= 460 && height >= 480) {
					if (currentpopupsize !== "tallcaption35" || forceupdate) {
						PGLIB.story.swiper.setSwiperPopupsSize("tallcaption35");
					}
				} else {
					if (currentpopupsize !== "tallcaption60" || forceupdate) {
						PGLIB.story.swiper.setSwiperPopupsSize("tallcaption60");
					}
				}
				// $swiper.update();
			},
			setSwiperPopupsSize: function(newpopupsize) {
				var $swiper = $(".pgevoke-story-swiper-popup");
				if (newpopupsize === "shortcaption") {
					currentpopupsize = "shortcaption";
					$swiper.removeClass("pgevoke-story-swiper-tall35");	
					$swiper.removeClass("pgevoke-story-swiper-tall60");
					$swiper.addClass("pgevoke-story-swiper-short");
				} else if (newpopupsize === "normalcaption") {
					currentpopupsize = "normalcaption";
					$swiper.removeClass("pgevoke-story-swiper-tall35");	
					$swiper.removeClass("pgevoke-story-swiper-tall60");
					$swiper.removeClass("pgevoke-story-swiper-short");
				} else if (newpopupsize === "tallcaption35") {
					currentpopupsize = "tallcaption35";
					$swiper.removeClass("pgevoke-story-swiper-short");
					$swiper.removeClass("pgevoke-story-swiper-tall60");
					$swiper.addClass("pgevoke-story-swiper-tall35");
				} else if (newpopupsize === "tallcaption60") {
					currentpopupsize = "tallcaption60";
					$swiper.removeClass("pgevoke-story-swiper-short");
					$swiper.removeClass("pgevoke-story-swiper-tall35");
					$swiper.addClass("pgevoke-story-swiper-tall60");
				}
			},
			bindResize: function() {
				$(window).on("resize.swiperPopups", PGLIB.story.swiper.updateSwiperPopupsSize);
			},
			unbindResize: function() {
				$(window).off("resize.swiperPopups"); // .swiperPopups is a namspace
			},
			getGalleries: function() {
				return galleries;
			},
			refreshGallery: function(storyindex,swiperid) {
				debuglog("Refreshing galleries[" + storyindex + "][" + swiperid + "]");
				if (typeof galleries[storyindex] === "undefined") { return; }
				if (typeof galleries[storyindex][swiperid] === "undefined") { return; }
				// debuglog("passed checks");
				galleries[storyindex][swiperid].update();
			}

		};
	})();
	// PGLIB.story.swiper.initstory(0);
	// PGLIB.story.swiper.init();
}


// **************************************
//    pgevoke.js.story_lateststories
// **************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.lateststories = (function() {
		var debuglogkey = "LATESTSTORIES";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var PGAPIBaseURL = "https://api3.post-gazette.com";
		if (typeof PGVARS.apibaseurl === "string") {
			PGAPIBaseURL = PGVARS.apibaseurl;
		}
		return {
			stories: {},
			load: function() {
				var $widgets = $("[data-pgevoke-lateststories-loaded='0']");
				debuglog("Loading...");
				$widgets.attr("data-pgevoke-lateststories-loaded","1");
				$widgets.each(function() {
					var $thetargetdiv = $(this);
					var $thestory = $(this).closest(".pgevoke-story");
					var parentsection = $thestory.attr("data-pg-storyparentsection");
					// parentsection = "sports";
					var stories = PGLIB.story.lateststories.stories;	
					if (typeof stories[parentsection] === "object" && stories[parentsection].length >= 5) {	
						debuglog("Found 5 or more stories for " + parentsection);
						var articles = stories[parentsection];
						PGLIB.story.lateststories.stories[parentsection] = articles.slice(5);
						var articlestoload = articles.slice(0,5);
						var jsonobj = {"articles" : articlestoload};
						$thetargetdiv.loadAjaxContent({
							"jsondata": jsonobj,
							"template":"#pgevoke-_tpl-lateststories",
							endfunction: function() {
								
							}
						});
					} else {
						debuglog("Did not find 5+ stories, sending AJAX request");
						$.ajax(PGAPIBaseURL + "/feeds/1/" + parentsection +"/all/-pubdate,priority,-contentmodified/50/21/", {
							dataType:"json"
						})
						.done(function(jsondata) {
							debuglog("AJAX Request successful");
							if (typeof jsondata.articles === "object") {
								// PGLIB.story.lateststories.articles[parentsection] = jsondata.articles;
								if (jsondata.articles.length >= 5) {
									PGLIB.story.lateststories.stories[parentsection] = jsondata.articles.slice(5);
									var articlestoload = jsondata.articles.slice(0,5);
									var jsonobj = {"articles" : articlestoload};
									$thetargetdiv.loadAjaxContent({
										"jsondata": jsonobj,
										"template":"#pgevoke-_tpl-lateststories",
										endfunction: function() {
											// $thetargetdiv.attr("data-pgevoke-lateststories-loaded","1");
										}
									});
								}
							}
						})
						.fail(function() {
					 	  	debuglog("AJAX Request failed!");
						});	
					}	
				});
			},
			getLog: function() {
				return log;
			}
		};
	})();
}


// *****************************************
//   pgevoke.includes.js_storystickyfooter
// *****************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.stickyfooter = (function() {

		var debuglogkey = "STORYSTICKYFOOTER";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var state = "visible";
		var selector = ".pgevoke-story-rightrail-login";
		var requiredheight = 800; // Window height in px for login to be visible
		var disabled = false;
		return {
			init: function() {
				$(document).ready( function() {
					$(window).resize(function() {
						PGLIB.story.stickyfooter.update();
					});
					$(window).scroll(function() {
						PGLIB.story.stickyfooter.update();
					});
				});
			},
			refreshAll: function() {
				if (state === "visible") {
					$(selector).css("display","block");
				} else {
					$(selector).css("display","none");
				}
			},
			setState: function(newstate) {
				if (newstate === "visible") {
					state = "visible";
					$(selector).css("display","block");
				} else {
					state = "hidden";
					$(selector).css("display","none");				
				}
			},
			update: function() {
				if (disabled) { return; }
				if ($(window).height() >= requiredheight) {
					if (state !== "visible") {
						PGLIB.story.stickyfooter.setState("visible");
					}
				} else {
					if (state !== "hidden") {
						PGLIB.story.stickyfooter.setState("hidden");
					}
				}
			},
			getState: function() {
				return state;
			},
			disable: function() {
				disabled = true;
				PGLIB.story.stickyfooter.setState("visible");
			}
		};
	})();
	if (typeof isNativoStory === "undefined" || !isNativoStory) {
		PGLIB.story.stickyfooter.init();
	}
}


// *****************************************
//    pgevoke.js.story_comments (original)
// *****************************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY" && (typeof PGVARS.spotim !== "boolean" || !PGVARS.spotim)) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.storycomments = (function() {
		var debuglogkey = "STORYCOMMENTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var categories = {
			"pg": ["pg_ae", "pg_business", "pg_early-returns", "pg_frontpage", "pg_in-the-lead", "pg_in-the-lead-2015", "pg_life", "pg_local", "pg_morning-file", "pg_mustread", "pg_nate", "pg_newimmigrants", "pg_news", "pg_newsinteractive", "pg_opinion", "pg_pets", "pg_photo", "pg_powersource", "pg_smizik-on-sports", "pg_sports", "pg_video"],
			"blade": ["tb_ae", "tb_a-e", "tb_business", "tb_columnists", "tb_general", "tb_news", "tb_opinion", "tb_ourtowns", "tb_ourtowns", "tb_sports"]
		};
		function getButtonInnerHTML(count) {
			var htmlstring = "";
			if (typeof count === "undefined") {
				htmlstring = 'SHOW COMMENTS&nbsp&nbsp;<span class="icon icon-comments"></span>';
			} else {
				htmlstring = 'SHOW COMMENTS&nbsp;(' + count + ')&nbsp&nbsp;<span class="icon icon-comments"></span>';
			}
			return htmlstring;
		}
		function getButtonStoryIndex($thisbutton) {
			if (typeof $thisbutton === "undefined") { return ""; }
			var $thestory = $thisbutton.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex");
			return theindex;
		}
		function getElementStoryIndex($elem) {
			if (typeof $elem === "undefined") { return ""; }
			var $thestory = $elem.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex") || "";
			return theindex;
		}
		function getCategory(parentsection) {
			if (typeof PGVARS.site !== "string") {
				debuglog("ERROR: Missing PGVAR.sitecode");
				return "error";
			}
			var site = PGVARS.site;
			var namespace = (site === "blade") ? "tb" : site;
			var thecat = namespace + "_" + parentsection;
			debuglog("Thecat is " + thecat);
			if (categories[site].indexOf(thecat) < 0) {
				thecat = (site === "blade") ? "tb_general" : "general";
			}
			if (thecat === "tb_a-e") { thecat = "tb_ae"; }
			debuglog("Using category '" + thecat + "' for parent section '" + parentsection + "'");
			return thecat;
		}
		var THISMODULE;
		return {
			init: function() {
				THISMODULE = this;
				debuglog("init() NEW called (v2)");
				_PG.settings.site.autoloadComments = false;
				$(document).ready(function(e) {
					// debuglog("NOT Initializing");
					// PWController.initComments();   
					// _PG.controller.initComments2(_PG._get("haveLogin"));
					$(document).on("click", ".pgevoke-story-comments-button", function() {
						var $thisbutton = $(this);
						PGLIB.storycomments.onClick($thisbutton);
					});
				});
			},
			load: function(storyindex) {
				debuglog("Loading comments for story #" + storyindex);
				$thisbutton = $("#pgevoke-story-" + storyindex + " .pgevoke-story-comments-button").first();
				if ($thisbutton.length === 0) {
					debuglog("No 'button' div. Comments presumably disabled for story #" + storyindex + ". Exiting.");
					return; 
				}
				// $thisbutton.attr("data-comments-button-action", "disabled");
				var storyid = $thisbutton.attr("data-comments-storyid");
				var targetid = "pgevoke-story-comments-" + storyid;
				var link = $thisbutton.attr("data-comments-link");
				var parentsection = $thisbutton.attr("data-comments-parentsection");
				var thecategory = getCategory(parentsection);
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $target = $parentcomments.find(".pgevoke-story-comments-content");
				var $metadiv = $parentcomments.find(".pgevoke-story-comments-metadata");
				if (typeof PGVARS === "object" && PGVARS.site === "blade") {
					if (link.slice(-1) === "/") { link = link.slice(0, -1); } // REMOVE trailing slash for Blade 
				} else {
					if (link.slice(-1) !== "/") { link += "/"; } // Make sure there's trailing for PG 
				}
				$thisbutton.addClass("comments-button");
				$target.attr("id",targetid);
				$metadiv.attr("data-container-id",targetid);
				$metadiv.addClass("pgGigyaComment");
				// $metadiv.attr("data-category-id", "pg_" + parentsection);
				$metadiv.attr("data-category-id", thecategory);
				$metadiv.attr("data-stream-id",link);
				_PG.gigya.comments.showComments("#pgevoke-story-"+storyindex + " .pgevoke-story-comments-metadata");

				// if (_PG.settings.loadComments === false) {
				//    _PG.controller.initComments2(_PG._get("haveLogin"));
				// } else {
				//    _PG.gigya.comments.showComments();    
				// }
			},
			onCommentsLoaded: function(e, data) {
				debuglog("Heard 'commentsLoaded' event");
				// if (!(issetmulti(data, "sourceContainerID"))) {
				if (!(issetmulti(data, "context", "selector"))) {
					debuglog("The selector is missing! Cannot process");
					return;
				}
				// var containerid = data.sourceContainerID;
				var selector = data.context.selector;
				debuglog("Looking for \"" + selector + "\"");
				// var $meta = $(".pgevoke-story-comments-metadata[data-container-id=\"" + containerid + "\"]");
				var $meta = $(selector);
				if ($meta.length < 1) {
					debuglog("Could not find matching metadata div! Cannot process.");
					// return;
				}
				debuglog("Found selector. Updating comments count");
				// debuglog.log("Found selector. Updating comments count #" + PGLIB.storycomments.getButtonStoryIndex($thebutton));
				var $story = $meta.closest(".pgevoke-story");
				var $thebutton = $story.find(".pgevoke-story-comments-button");
				$thebutton.attr("data-comments-button-loaded", "true");
				PGLIB.storycomments.updateCommentsCount($thebutton);
				var count;
				debuglog("Here's the data object...");
				debuglog(data);
				if (typeof data.commentCount === "number") {
					debuglog("Found commentCount");
					count = data.commentCount.toString();
				} else {
					debuglog("Did NOT find commentCount");
					count = $thebutton.attr("data-comments-count");    
				}
				if ($thebutton.attr("data-comments-alreadyclicked") === "true") {
					$thebutton.removeAttr("data-comments-alreadyclicked");
					PGLIB.storycomments.show($thebutton);
				} else {
					// var countstring = (typeof count !== "undefined") ? "("+count+")&nbsp;" : "";
					if (typeof count !== "undefined") {
						$thebutton.html(getButtonInnerHTML(count));
					} else {
						$thebutton.html(getButtonInnerHTML());
					}
					$thebutton.attr("data-comments-button-action", "show");    
				}    



				/*
				console.log("CONTEXT SELECTOR",data.context.selector);
				console.log("SELECTOR",selector);
				if (selector == data.context.selector) {
					console.log("SHOW COMMENTS FOR THIS ONE");
				} else {
					console.log("DON'T SHOW COMMENTS FOR THIS ONE")
	          	}
	          	*/


			},
			onClick: function($thisbutton) {
				var buttonaction = $thisbutton.attr("data-comments-button-action");
				debuglog("Clicked button for story " + getButtonStoryIndex($thisbutton) + ". Buttonaction is '" + buttonaction + "'");
				_PG._trigger("pgtracking:comments-click", {
				   action: buttonaction 
				});
				if (buttonaction === "show") {
					if ($thisbutton.attr("data-comments-button-loaded") !== "true") {
						debuglog("Comments are not loaded yet. Disabling button and loading now. Will wait for 'commentsLoaded' event.");
						PGLIB.storycomments.disableButton($thisbutton);
						// _PG._listen("commentsLoaded", function(e, data) {
						//	PGLIB.storycomments.onCommentsLoaded(e, data);
						// });
						// _PG.controller.initComments2(_PG._get("haveLogin"));
						var selector = "#"+$thisbutton.parents(".pgevoke-story").attr("id")+ " "+_PG.settings.gigya.commentsClass;
						_PG._listen("commentsLoaded",function(e,data) {
							PGLIB.storycomments.onCommentsLoaded(e, data);
						}, "AT THE BUTTON", true);
						_PG.gigya.comments._showComments(selector)
					} else {
						debuglog("Showing.");
						PGLIB.storycomments.show($thisbutton);
					}
				} else if (buttonaction === "hide") {
					debuglog("Hiding.");
					PGLIB.storycomments.hide($thisbutton);
				}
			},
			disableButton: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				$thisbutton.html("Loading Comments&nbsp;&nbsp;<span class='fa fa-spin'><span class='icon-spinner3 icon-spin'></span></span>");
				$thisbutton.attr("data-comments-alreadyclicked", "true");
			},
			updateCommentsCount: function($thisbutton) {
				if (typeof $thisbutton !== "object") { return; }
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $countdiv = $parentcomments.find(".gig-comments-commentList-header-commentsCount");
				var counthtml = $parentcomments.find(".gig-comments-commentList-header-commentsCount").first().html();
				if (typeof counthtml === "string") {
					var count = counthtml.replace(/\sComments?/,"");
					$thisbutton.attr("data-comments-count", count);
				}
			},
			show: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				$contentwrapper.slideDown(400, function() {
					$thisbutton.html("Hide Comments&nbsp;&nbsp;<span class='icon icon-comments'></span>");
					$thisbutton.attr("data-comments-button-action", "hide");
				});
			},
			hide: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "hide");
				$contentwrapper.slideUp(400, function() {
					Stickyboxes.updateAll();
					// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "show");
					PGLIB.storycomments.updateCommentsCount($thisbutton);
					var count = $thisbutton.attr("data-comments-count");
					$thisbutton.html(getButtonInnerHTML(count));
					$thisbutton.attr("data-comments-button-action", "show");
				});
			},
			$getContentWrapper: function($thisbutton) {
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $contentwrapper = $parentcomments.find(".pgevoke-story-comments-contentwrapper");
				return $contentwrapper;
			}
		};
	})();
	window.PGLIB.storycomments.init();
}

/* ---- v2 --------
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.storycomments = (function() {
		var debuglogkey = "STORYCOMMENTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var categories = {
			"pg": ["pg_ae", "pg_business", "pg_early-returns", "pg_frontpage", "pg_in-the-lead", "pg_in-the-lead-2015", "pg_life", "pg_local", "pg_morning-file", "pg_mustread", "pg_nate", "pg_newimmigrants", "pg_news", "pg_newsinteractive", "pg_opinion", "pg_pets", "pg_photo", "pg_powersource", "pg_smizik-on-sports", "pg_sports", "pg_video"],
			"blade": ["tb_ae", "tb_a-e", "tb_business", "tb_columnists", "tb_general", "tb_news", "tb_opinion", "tb_ourtowns", "tb_ourtowns", "tb_sports"]
		};
		function getButtonInnerHTML(count) {
			var htmlstring = "";
			if (typeof count === "undefined") {
				htmlstring = 'SHOW COMMENTS&nbsp&nbsp;<span class="icon icon-comments"></span>';
			} else {
				htmlstring = 'SHOW COMMENTS&nbsp;(' + count + ')&nbsp&nbsp;<span class="icon icon-comments"></span>';
			}
			return htmlstring;
		}
		function getButtonStoryIndex($thisbutton) {
			if (typeof $thisbutton === "undefined") { return ""; }
			var $thestory = $thisbutton.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex");
			return theindex;
		}
		function getElementStoryIndex($elem) {
			if (typeof $elem === "undefined") { return ""; }
			var $thestory = $elem.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex") || "";
			return theindex;
		}
		function getCategory(parentsection) {
			if (typeof PGVARS.site !== "string") {
				debuglog("ERROR: Missing PGVAR.sitecode");
				return "error";
			}
			var site = PGVARS.site;
			var namespace = (site === "blade") ? "tb" : site;
			var thecat = namespace + "_" + parentsection;
			debuglog("Thecat is " + thecat);
			if (categories[site].indexOf(thecat) < 0) {
				thecat = (site === "blade") ? "tb_general" : "general";
			}
			if (thecat === "tb_a-e") { thecat = "tb_ae"; }
			debuglog("Using category '" + thecat + "' for parent section '" + parentsection + "'");
			return thecat;
		}
		return {
			init: function() {
				debuglog("init() NEW called (v2)");
				_PG.settings.site.autoloadComments = false;
				$(document).ready(function(e) {
					// debuglog("NOT Initializing");
					// PWController.initComments();   
					// _PG.controller.initComments2(_PG._get("haveLogin"));
					$(document).on("click", ".pgevoke-story-comments-button", function() {
						var $thisbutton = $(this);
						PGLIB.storycomments.onClick($thisbutton);
					});
				});
			},
			load: function(storyindex) {
				debuglog("Loading comments for story #" + storyindex);
				$thisbutton = $("#pgevoke-story-" + storyindex + " .pgevoke-story-comments-button").first();
				if ($thisbutton.length === 0) {
					debuglog("No 'button' div. Comments presumably disabled for story #" + storyindex + ". Exiting.");
					return; 
				}
				// $thisbutton.attr("data-comments-button-action", "disabled");
				var storyid = $thisbutton.attr("data-comments-storyid");
				var targetid = "pgevoke-story-comments-" + storyid;
				var link = $thisbutton.attr("data-comments-link");
				var parentsection = $thisbutton.attr("data-comments-parentsection");
				var thecategory = getCategory(parentsection);
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $target = $parentcomments.find(".pgevoke-story-comments-content");
				var $metadiv = $parentcomments.find(".pgevoke-story-comments-metadata");
				if (typeof PGVARS === "object" && PGVARS.site === "blade") {
					if (link.slice(-1) === "/") { link = link.slice(0, -1); } // REMOVE trailing slash for Blade 
				} else {
					if (link.slice(-1) !== "/") { link += "/"; } // Make sure there's trailing for PG 
				}
				$thisbutton.addClass("comments-button");
				$target.attr("id",targetid);
				$metadiv.attr("data-container-id",targetid);
				$metadiv.addClass("pgGigyaComment");
				// $metadiv.attr("data-category-id", "pg_" + parentsection);
				$metadiv.attr("data-category-id", thecategory);
				$metadiv.attr("data-stream-id",link);
				_PG.gigya.comments.showComments("#pgevoke-story-"+storyindex + " .pgevoke-story-comments-metadata");

				// if (_PG.settings.loadComments === false) {
				//    _PG.controller.initComments2(_PG._get("haveLogin"));
				// } else {
				//    _PG.gigya.comments.showComments();    
				// }
			},
			onCommentsLoaded: function(e, data) {
				debuglog("Heard 'commentsLoaded' event");
				// if (!(issetmulti(data, "sourceContainerID"))) {
				if (!(issetmulti(data, "context", "selector"))) {
					debuglog("The selector is missing! Cannot process");
					return;
				}
				// var containerid = data.sourceContainerID;
				var selector = data.context.selector;
				debuglog("Looking for \"" + selector + "\"");
				// var $meta = $(".pgevoke-story-comments-metadata[data-container-id=\"" + containerid + "\"]");
				var $meta = $(selector);
				if ($meta.length < 1) {
					debuglog("Could not find matching metadata div! Cannot process.");
					// return;
				}
				debuglog("Found selector. Updating comments count");
				// debuglog.log("Found selector. Updating comments count #" + PGLIB.storycomments.getButtonStoryIndex($thebutton));
				var $story = $meta.closest(".pgevoke-story");
				var $thebutton = $story.find(".pgevoke-story-comments-button");
				$thebutton.attr("data-comments-button-loaded", "true");
				PGLIB.storycomments.updateCommentsCount($thebutton);
				var count;
				debuglog("Here's the data object...");
				debuglog(data);
				if (typeof data.commentCount === "number") {
					debuglog("Found commentCount");
					count = data.commentCount.toString();
				} else {
					debuglog("Did NOT find commentCount");
					count = $thebutton.attr("data-comments-count");    
				}
				if ($thebutton.attr("data-comments-alreadyclicked") === "true") {
					$thebutton.removeAttr("data-comments-alreadyclicked");
					PGLIB.storycomments.show($thebutton);
				} else {
					// var countstring = (typeof count !== "undefined") ? "("+count+")&nbsp;" : "";
					if (typeof count !== "undefined") {
						$thebutton.html(getButtonInnerHTML(count));
					} else {
						$thebutton.html(getButtonInnerHTML());
					}
					$thebutton.attr("data-comments-button-action", "show");    
				}     
			},
			onClick: function($thisbutton) {
				var buttonaction = $thisbutton.attr("data-comments-button-action");
				debuglog("Clicked button for story " + getButtonStoryIndex($thisbutton) + ". Buttonaction is '" + buttonaction + "'");
				_PG._trigger("pgtracking:comments-click", {
				   action: buttonaction 
				});
				if (buttonaction === "show") {
					if ($thisbutton.attr("data-comments-button-loaded") !== "true") {
						debuglog("Comments are not loaded yet. Disabling button and loading now. Will wait for 'commentsLoaded' event.");
						PGLIB.storycomments.disableButton($thisbutton);
						_PG._listen("commentsLoaded", function(e, data) {
							PGLIB.storycomments.onCommentsLoaded(e, data);
						});
						_PG.controller.initComments2(_PG._get("haveLogin"));
					} else {
						debuglog("Showing.");
						PGLIB.storycomments.show($thisbutton);
					}
				} else if (buttonaction === "hide") {
					debuglog("Hiding.");
					PGLIB.storycomments.hide($thisbutton);
				}
			},
			disableButton: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				$thisbutton.html("Loading Comments&nbsp;&nbsp;<span class='fa fa-spin'><span class='icon-spinner3 icon-spin'></span></span>");
				$thisbutton.attr("data-comments-alreadyclicked", "true");
			},
			updateCommentsCount: function($thisbutton) {
				if (typeof $thisbutton !== "object") { return; }
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $countdiv = $parentcomments.find(".gig-comments-commentList-header-commentsCount");
				var counthtml = $parentcomments.find(".gig-comments-commentList-header-commentsCount").first().html();
				if (typeof counthtml === "string") {
					var count = counthtml.replace(/\sComments?/,"");
					$thisbutton.attr("data-comments-count", count);
				}
			},
			show: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				$contentwrapper.slideDown(400, function() {
					$thisbutton.html("Hide Comments&nbsp;&nbsp;<span class='icon icon-comments'></span>");
					$thisbutton.attr("data-comments-button-action", "hide");
				});
			},
			hide: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "hide");
				$contentwrapper.slideUp(400, function() {
					Stickyboxes.updateAll();
					// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "show");
					PGLIB.storycomments.updateCommentsCount($thisbutton);
					var count = $thisbutton.attr("data-comments-count");
					$thisbutton.html(getButtonInnerHTML(count));
					$thisbutton.attr("data-comments-button-action", "show");
				});
			},
			$getContentWrapper: function($thisbutton) {
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $contentwrapper = $parentcomments.find(".pgevoke-story-comments-contentwrapper");
				return $contentwrapper;
			}
		};
	})();
	window.PGLIB.storycomments.init();
}
*/


/*  ---- ORIGINAL v1 -----
if (PGVARS.site === "blade" && typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.storycomments = (function() {
		var debuglogkey = "STORYCOMMENTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var categories = {
			"pg": ["pg_ae", "pg_business", "pg_early-returns", "pg_frontpage", "pg_in-the-lead", "pg_in-the-lead-2015", "pg_life", "pg_local", "pg_morning-file", "pg_mustread", "pg_nate", "pg_newimmigrants", "pg_news", "pg_newsinteractive", "pg_opinion", "pg_pets", "pg_photo", "pg_powersource", "pg_smizik-on-sports", "pg_sports", "pg_video"],
			"blade": ["tb_ae", "tb_a-e", "tb_business", "tb_columnists", "tb_general", "tb_news", "tb_opinion", "tb_ourtowns", "tb_ourtowns", "tb_sports"]
		};
		function getButtonInnerHTML(count) {
			var htmlstring = "";
			if (typeof count === "undefined") {
				htmlstring = 'SHOW COMMENTS&nbsp&nbsp;<span class="icon icon-comments"></span>';
			} else {
				htmlstring = 'SHOW COMMENTS&nbsp;(' + count + ')&nbsp&nbsp;<span class="icon icon-comments"></span>';
			}
			return htmlstring;
		}
		function getButtonStoryIndex($thisbutton) {
			if (typeof $thisbutton === "undefined") { return ""; }
			var $thestory = $thisbutton.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex");
			return theindex;
		}
		function getElementStoryIndex($elem) {
			if (typeof $elem === "undefined") { return ""; }
			var $thestory = $elem.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex") || "";
			return theindex;
		}
		function getCategory(parentsection) {
			if (typeof PGVARS.site !== "string") {
				debuglog("ERROR: Missing PGVAR.sitecode");
				return "error";
			}
			var site = PGVARS.site;
			var namespace = (site === "blade") ? "tb" : site;
			var thecat = namespace + "_" + parentsection;
			debuglog("Thecat is " + thecat);
			if (categories[site].indexOf(thecat) < 0) {
				thecat = (site === "blade") ? "tb_general" : "general";
			}
			if (thecat === "tb_a-e") { thecat = "tb_ae"; }
			debuglog("Using category '" + thecat + "' for parent section '" + parentsection + "'");
			return thecat;
		}
		return {
			init: function() {
				debuglog("init() OLD called");
				$(document).ready(function(e) {
					debuglog("init() OLD running");
					// PWController.initComments();   
					// _PG.controller.initComments2(_PG._get("haveLogin"));
					_PG._listen("commentsLoaded", function(e, data) {
						PGLIB.storycomments.onCommentsLoaded(e, data);
					});
					$(document).on("click", ".pgevoke-story-comments-button", function() {
						var $thisbutton = $(this);
						PGLIB.storycomments.onClick($thisbutton);
					});
				});
			},
			load: function(storyindex) {
				debuglog("Loading comments for story #" + storyindex);
				$thisbutton = $("#pgevoke-story-" + storyindex + " .pgevoke-story-comments-button").first();
				if ($thisbutton.length === 0) {
					debuglog("No 'button' div. Comments presumably disabled for story #" + storyindex + ". Exiting.");
					return; 
				}
				// $thisbutton.attr("data-comments-button-action", "disabled");
				var storyid = $thisbutton.attr("data-comments-storyid");
				var targetid = "pgevoke-story-comments-" + storyid;
				var link = $thisbutton.attr("data-comments-link");
				var parentsection = $thisbutton.attr("data-comments-parentsection");
				var thecategory = getCategory(parentsection);
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $target = $parentcomments.find(".pgevoke-story-comments-content");
				var $metadiv = $parentcomments.find(".pgevoke-story-comments-metadata");
				if (typeof PGVARS === "object" && PGVARS.site === "blade") {
					if (link.slice(-1) === "/") { link = link.slice(0, -1); } // REMOVE trailing slash for Blade 
				} else {
					if (link.slice(-1) !== "/") { link += "/"; } // Make sure there's trailing for PG 
				}
				$thisbutton.addClass("comments-button");
				$target.attr("id",targetid);
				$metadiv.attr("data-container-id",targetid);
				$metadiv.addClass("pgGigyaComment");
				// $metadiv.attr("data-category-id", "pg_" + parentsection);
				$metadiv.attr("data-category-id", thecategory);
				$metadiv.attr("data-stream-id",link);
				_PG.gigya.comments.showComments("#pgevoke-story-"+storyindex + " .pgevoke-story-comments-metadata");

				// if (_PG.settings.loadComments === false) {
				//    _PG.controller.initComments2(_PG._get("haveLogin"));
				// } else {
				//    _PG.gigya.comments.showComments();    
				// }
			},
			onCommentsLoaded: function(e, data) {
				debuglog("Heard 'commentsLoaded' event");
				// if (!(issetmulti(data, "sourceContainerID"))) {
				if (!(issetmulti(data, "context", "selector"))) {
					debuglog("The selector is missing! Cannot process");
					return;
				}
				// var containerid = data.sourceContainerID;
				var selector = data.context.selector;
				debuglog("Looking for \"" + selector + "\"");
				// var $meta = $(".pgevoke-story-comments-metadata[data-container-id=\"" + containerid + "\"]");
				var $meta = $(selector);
				if ($meta.length < 1) {
					debuglog("Could not find matching metadata div! Cannot process.");
					// return;
				}
				debuglog("Found selector. Updating comments count");
				// debuglog.log("Found selector. Updating comments count #" + PGLIB.storycomments.getButtonStoryIndex($thebutton));
				var $story = $meta.closest(".pgevoke-story");
				var $thebutton = $story.find(".pgevoke-story-comments-button");
				$thebutton.attr("data-comments-button-loaded", "true");
				PGLIB.storycomments.updateCommentsCount($thebutton);
				var count;
				debuglog("Here's the data object...");
				debuglog(data);
				if (typeof data.commentCount === "number") {
					debuglog("Found commentCount");
					count = data.commentCount.toString();
				} else {
					debuglog("Did NOT find commentCount");
					count = $thebutton.attr("data-comments-count");    
				}
				if ($thebutton.attr("data-comments-alreadyclicked") === "true") {
					$thebutton.removeAttr("data-comments-alreadyclicked");
					PGLIB.storycomments.show($thebutton);
				} else {
					// var countstring = (typeof count !== "undefined") ? "("+count+")&nbsp;" : "";
					if (typeof count !== "undefined") {
						$thebutton.html(getButtonInnerHTML(count));
					} else {
						$thebutton.html(getButtonInnerHTML());
					}
					$thebutton.attr("data-comments-button-action", "show");    
				}     
			},
			onClick: function($thisbutton) {
				var buttonaction = $thisbutton.attr("data-comments-button-action");
				debuglog("Clicked button for story " + getButtonStoryIndex($thisbutton) + ". Buttonaction is '" + buttonaction + "'");
				_PG._trigger("pgtracking:comments-click", {
				   action: buttonaction 
				});
				if (buttonaction === "show") {
					if ($thisbutton.attr("data-comments-button-loaded") !== "true") {
						PGLIB.storycomments.finishLoadingThenShow($thisbutton);
					} else {
						PGLIB.storycomments.show($thisbutton);
					}
				} else if (buttonaction === "hide") {
					PGLIB.storycomments.hide($thisbutton);
				}
			},
			finishLoadingThenShow: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				$thisbutton.html("Loading Comments&nbsp;&nbsp;<span class='fa fa-spin'><span class='icon-spinner3 icon-spin'></span></span>");
				$thisbutton.attr("data-comments-alreadyclicked", "true");
			},
			updateCommentsCount: function($thisbutton) {
				if (typeof $thisbutton !== "object") { return; }
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $countdiv = $parentcomments.find(".gig-comments-commentList-header-commentsCount");
				var counthtml = $parentcomments.find(".gig-comments-commentList-header-commentsCount").first().html();
				if (typeof counthtml === "string") {
					var count = counthtml.replace(/\sComments?/,"");
					$thisbutton.attr("data-comments-count", count);
				}
			},
			show: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				$contentwrapper.slideDown(400, function() {
					$thisbutton.html("Hide Comments&nbsp;&nbsp;<span class='icon icon-comments'></span>");
					$thisbutton.attr("data-comments-button-action", "hide");
				});
			},
			hide: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "hide");
				$contentwrapper.slideUp(400, function() {
					Stickyboxes.updateAll();
					// PGLIB.storycomments.toggleSocialVisibility($thisbutton, "show");
					PGLIB.storycomments.updateCommentsCount($thisbutton);
					var count = $thisbutton.attr("data-comments-count");
					$thisbutton.html(getButtonInnerHTML(count));
					$thisbutton.attr("data-comments-button-action", "show");
				});
			},
			$getContentWrapper: function($thisbutton) {
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $contentwrapper = $parentcomments.find(".pgevoke-story-comments-contentwrapper");
				return $contentwrapper;
			}
		};
	})();
	window.PGLIB.storycomments.init();
}
*/

// *****************************************
//     pgevoke.js.story_comments_spotim
// *****************************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY" && typeof PGVARS.spotim === "boolean" && PGVARS.spotim === true && (typeof PGVARS.useviafoura !== "boolean" || PGVARS.useviafoura === false)) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.storycomments = (function() {
		var debuglogkey = "STORYCOMMENTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var categories = {
			"pg": ["pg_ae", "pg_business", "pg_early-returns", "pg_frontpage", "pg_in-the-lead", "pg_in-the-lead-2015", "pg_life", "pg_local", "pg_morning-file", "pg_mustread", "pg_nate", "pg_newimmigrants", "pg_news", "pg_newsinteractive", "pg_opinion", "pg_pets", "pg_photo", "pg_powersource", "pg_smizik-on-sports", "pg_sports", "pg_video"],
			"blade": ["tb_ae", "tb_a-e", "tb_business", "tb_columnists", "tb_general", "tb_news", "tb_opinion", "tb_ourtowns", "tb_ourtowns", "tb_sports"]
		};
		var spotimconfig = {
			"pg": {
				"staging": {
					"id": "sp_ISt8xBHw",
					"ssoToken": "03200415zvH5uo"
				},
				"production": {
					"id": "sp_wfO5dOu8",
					"ssoToken": "03200415Dkl0Ef"
				}
			},
			"blade": {
				"staging": {
					"id": "sp_PZokDnsN",
					"ssoToken": "03200415YeZLs5"
				},
				"production": {
					"id": "sp_qsqOuqOk",
					"ssoToken": "032004153tK2vB"
				}				
			}
		};
		var spotimsettings;
		function getSpotIMSettings() {
			var returnval = {};
			var version = (PGVARS.pianosandbox) ? "staging" : "production";
			debuglog("OpenWeb Version: " + version);
			if (!(issetmulti(spotimconfig, PGVARS.site, version))) {
				return false;
			} else {
				return spotimconfig[PGVARS.site][version];
			}
		};
		function getButtonInnerHTML(count) {
			var htmlstring = "";
			if (typeof count === "undefined") {
				htmlstring = 'SHOW COMMENTS&nbsp&nbsp;<span class="icon icon-comments"></span>';
			} else {
				htmlstring = 'SHOW COMMENTS&nbsp;(' + count + ')&nbsp&nbsp;<span class="icon icon-comments"></span>';
			}
			return htmlstring;
		}
		function getButtonStoryIndex($thisbutton) {
			if (typeof $thisbutton === "undefined") { return ""; }
			var $thestory = $thisbutton.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex");
			return theindex;
		}
		function getElementStoryIndex($elem) {
			if (typeof $elem === "undefined") { return ""; }
			var $thestory = $elem.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex") || "";
			return theindex;
		}
		function getCategory(parentsection) {
			if (typeof PGVARS.site !== "string") {
				debuglog("ERROR: Missing PGVAR.sitecode");
				return "error";
			}
			var site = PGVARS.site;
			var namespace = (site === "blade") ? "tb" : site;
			var thecat = namespace + "_" + parentsection;
			debuglog("Thecat is " + thecat);
			if (categories[site].indexOf(thecat) < 0) {
				thecat = (site === "blade") ? "tb_general" : "general";
			}
			if (thecat === "tb_a-e") { thecat = "tb_ae"; }
			debuglog("Using category '" + thecat + "' for parent section '" + parentsection + "'");
			return thecat;
		}
		function userIsPaid() {
			if (typeof _PG !== "undefined"
				&& PGFNS.issetmulti(_PG, "user", "info", "paid")
				&& _PG.user.info.paid) {
				return true;
			} else {
				return false;
			}
		}
		function userIsLoggedIn() {
			if (typeof _PG !== "undefined"
				&& PGFNS.issetmulti(_PG, "user", "info", "loggedIn")
				&& _PG.user.info.loggedIn) {
				return true;
			} else {
				return false;
			}			
		}
		function checkPaidStatusThenInit() {
			debuglog("checkPaidStatusThenInit()");
			
			if (_PG.eventer.lookup("accountLoaded").length > 0){
				paidStatusCallback();
			} else {
				debuglog("checkPaidStatusThenInit(): accountLoaded hasn't fired yet, waiting");
				
			}
		}
		function unbindAllEvents() {
			BINDER.off("spot-im-api-ready.startsso");
			BINDER.off("spot-im-login-start.unpaidclick");
			BINDER.off("spot-im-api-ready.logout");
		}
		function accountLoadedCallback() {
			debuglog("accountLoadedCallback()");
			unbindAllEvents();
			if (userIsPaid()) {
				debuglog("Paid status is TRUE");
				if (window.SPOTIM && window.SPOTIM.startSSOForProvider) {
					if (window.SPOTIM && window.SPOTIM.logout){
						debuglog("Ready to log IN but first logging out of Spot.IM");
					    // if (PGVARS.sitecode === "LIVE") {
					    	window.SPOTIM.logout();
					    // }
					}
					setTimeout(function() {
						startSSO();	
					}, 3000);
				} else {
					var eventname = "spot-im-api-ready.startsso";
					BINDER.on(eventname, function() {
						BINDER.off(eventname);
						if (window.SPOTIM && window.SPOTIM.logout){
							debuglog("Ready to log IN but first logging out of Spot.IM");
							// if (PGVARS.sitecode === "LIVE") {
						    	window.SPOTIM.logout();
						    // }
						}
						setTimeout(function() {
							startSSO();	
						}, 3000);
					}, true);
				}
			} else {
				debuglog("Paid status is FALSE.");				
				THISMODULE.logout();
				// ---- Bind button click ----
				var event = "spot-im-login-start.unpaidclick";
				BINDER.on(event, function() {
			    	debuglog("CLICK: UNPAID");
			    	THISMODULE.showDrawer();
				}, true);
			}
		}
		function startSSO() {
			debuglog("SPOTIM: startSSO() called");
			var token = tp.pianoId.getToken();
			debuglog("SPOTIM: tp.pianoId.getToken(): " + token);
			window.SPOTIM.startSSOForProvider({ provider: 'piano', token: token }).then(function(userData) {
				debuglog("SPOTIM: Piano success. userData: ", userData);
			})
			.catch(function(reason){
				debuglog("SPOTIM: Piano failure. Reason:");
				debuglog(reason);
			});
		}
		var THISMODULE;
		return {
			init: function() {
				THISMODULE = this;
				debuglog("init() with SPOT.IM called");
				spotimsettings = getSpotIMSettings();
				if (spotimsettings === false) {
					debuglog("ERROR retriving spotimsettings. Exiting.");
					return false;
				}
				debuglog("Using these settings: ");
				debuglog(spotimsettings);
				// ---- Set up listener ----
				_PG._listen("accountLoaded", function() {
					accountLoadedCallback();
				});
				// ---- Call right away if ready ----
				if (_PG.eventer.lookup("accountLoaded").length > 0){
					accountLoadedCallback();
				}
				// ----- Piano logout ----
				/*
				$(document).on("piano:loggedout", function() {
					window.PGLIB.storycomments.logout();
				});
				*/
				// checkPaidStatusThenInit();
				// ----- Bind Comments button click -----
				$(document).ready(function(e) {
					$(document).on("click", ".pgevoke-story-comments-button", function() {
						var $thisbutton = $(this);
						PGLIB.storycomments.onClick($thisbutton);
					});
				});

			},
			load: function(storyindex) {
				debuglog("Loading comments for story #" + storyindex);
				$thisbutton = $("#pgevoke-story-" + storyindex + " .pgevoke-story-comments-button").first();
				if ($thisbutton.length === 0) {
					debuglog("No 'button' div. Comments presumably disabled for story #" + storyindex + ". Exiting.");
					return; 
				}
				// $thisbutton.attr("data-comments-button-action", "disabled");
				var storyid = $thisbutton.attr("data-comments-storyid");
				var targetid = "pgevoke-story-comments-" + storyid;
				var link = $thisbutton.attr("data-comments-link");
				var parentsection = $thisbutton.attr("data-comments-parentsection");
				var thecategory = getCategory(parentsection);
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $target = $parentcomments.find(".pgevoke-story-comments-content");
				var $metadiv = $parentcomments.find(".pgevoke-story-comments-metadata");
				// var $thebutton = $story.find(".pgevoke-story-comments-button");
				if (typeof PGVARS === "object" && PGVARS.site === "blade") {
					if (link.slice(-1) === "/") { link = link.slice(0, -1); } // REMOVE trailing slash for Blade 
				} else {
					if (link.slice(-1) !== "/") { link += "/"; } // Make sure there's trailing for PG 
				}
				// $thisbutton.find(".pgevoke-story-comments-button-textshow").html('<span>SHOW COMMENTS</span>&nbsp;&nbsp;<span class="icon icon-comments"></span>');
				/*
				document.addEventListener('spot-im-api-ready', function() {
					console.log("SPOTIM: EVENT: Spot IM API Ready");
				}, false);
				document.addEventListener('spot-im-conversation-loaded', function() {
					console.log("SPOTIM: EVENT: Spot Conversation Loaded (Index + " +storyindex + " StoryID: " + storyid + ")");
					// THISMODULE.onCommentsLoaded();
				}, false);
				*/
				// ---- BEGIN OLD SETUP -----
				// var $script = '<script async src="https://launcher.spot.im/spot/' + spotimsettings.id + '" data-spotim-module="spotim-launcher" data-post-url="' + link + '" data-article-tags="' + thecategory +'" data-post-id="article_' + storyid + '" data-spotim-autorun="false"></script>';
				// var $convodiv = '<div data-spotim-module="conversation" data-post-id="article_' + storyid + '"></div>';
				// ----- END OLD SETUP -----
				// <div data-spotim-module="conversation" data-post-url="ARTICLE_URL" data-article-tags="ARTICLE_TOPIC1, ARTICLE_TOPIC2" data-post-id="POST_ID"></div>
				if (storyindex === 0) {
					debuglog("Story index is 0. Adding script.");
					var $script = '<script async src="https://launcher.spot.im/spot/' + spotimsettings.id + '" data-spotim-module="spotim-launcher" spotim-autorun="false"></script>';
					$parentcomments.append($script);
				} else {
					debuglog("Story index is >0. No need for script.");
				}
				var $convodiv = '<div data-spotim-module="conversation" data-post-id="article_' + storyid + '" data-post-url="' + link + '" data-article-tags="' + thecategory +'"></div>';
				debuglog($convodiv);
				debuglog($($convodiv));
				debuglog("Appending to document v3");
				// $("head").append($script)
				$target.append($convodiv);
				$thisbutton.attr("data-comments-button-loaded", "true");
				THISMODULE.updateCommentsCount($thisbutton);
				// $thebutton.attr("data-comments-button-action", "show");
			},
			/*
			onCommentsLoaded: function(e, data) {
				
				var $thebutton = $story.find(".pgevoke-story-comments-button");
				$thebutton.attr("data-comments-button-loaded", "true");
				if ($thebutton.attr("data-comments-alreadyclicked") === "true") {
					$thebutton.removeAttr("data-comments-alreadyclicked");
					PGLIB.storycomments.show($thebutton);
				} else {
					$thebutton.attr("data-comments-button-action", "show");    
				}   
				
			},
			*/
			onClick: function($thisbutton) {
				var buttonaction = $thisbutton.attr("data-comments-button-action");
				debuglog("Clicked button for story " + getButtonStoryIndex($thisbutton) + ". Buttonaction is '" + buttonaction + "'");
				if (buttonaction === "show") {
					if ($thisbutton.attr("data-comments-button-loaded") !== "true") {
						debuglog("Comments are not loaded yet. Disabling button and loading now. Will wait for 'commentsLoaded' event.");
						$thisbutton.attr("data-comments-alreadyclicked", "true");
						THISMODULE.disableButton($thisbutton);
					} else {
						debuglog("Showing.");
						PGLIB.storycomments.show($thisbutton);
					}
				} else if (buttonaction === "hide") {
					debuglog("Hiding.");
					PGLIB.storycomments.hide($thisbutton);
				}
			},
			logout: function() {
				debuglog("logout() called v2");
				if (window.SPOTIM && window.SPOTIM.logout){
					debuglog("Logging out of Spot.IM");
				    window.SPOTIM.logout();
				} else {
					debuglog("SPOTIM.logout not available. Waiting.");
				    BINDER.on('spot-im-api-ready.logout', function() {
				    	debuglog("Heard spot-im-api-ready through _listen");
				    	debuglog("Logging out of Spot.IM");
				    	window.SPOTIM.logout();
				    }, true);
				}
			},
			disableButton: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				THISMODULE.updateButtonText("loading");
			},
			updateCommentsCount: function($thisbutton) {
				debuglog("updateCommentsCount() called v2");
				debuglog($thisbutton);
				debuglog("updateCommentsCount storyidbutton: " + $thisbutton.attr("data-comments-storyid"));
				if (typeof $thisbutton !== "object") { return; }
				var $story = $thisbutton.parents().closest(".pgevoke-story");
				var storyid = $story.attr("data-pg-storyid");
				debuglog("updateCommentsCount storyid: " + storyid);
				debuglog("updateCommentsCount storynumber: " + $story.prop("id"));
				var endpoint = "https://open-api.spot.im/v1/messages-count?spot_id=" + spotimsettings.id + "&posts_ids=article_"  + storyid;
				$.ajax(endpoint, {
					dataType: "json",
				})
				.done(function(data) {
					var keyname = "article_" + storyid;
					if (typeof data.messages_count === "object" && typeof data.messages_count[keyname] === "number") {
						var $count = $story.find(".pgevoke-story-comments-button-textshow .pgevoke-story-comments-count");
						$count.html('(' + data.messages_count[keyname].toString() + ')' + '&nbsp');	
					}
				})
				.fail(function() {
					debuglog("updateCommentsCount() ajax request FAILED!");
				});
			},
			show: function($thisbutton) {
				// $thisbutton.css("display", "none");
				// $thisbutton.css("height", "auto");
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				var $contentdiv = $contentwrapper.find("#spcv_conversation");
				$contentdiv.css("display", "block");
				$contentwrapper.slideDown(400, function() {
					// $thisbutton.find(".pgevoke-story-comments-button-texthide").css("display", "inline");
					debuglog("COUNTCOUNTCOUNT: " + $thisbutton.find(".pgevoke-story-comments-button-texthide").length);
					debuglog($thisbutton.find(".pgevoke-story-comments-button-texthide"));
					// $thisbutton.find(".pgevoke-story-comments-button-textshow").css("display", "none");
					THISMODULE.updateButtonText("hide");
					$thisbutton.attr("data-comments-button-action", "hide");
				});
			},
			hide: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				$contentwrapper.slideUp(400, function() {
					Stickyboxes.updateAll();
					PGLIB.storycomments.updateCommentsCount($thisbutton);
					var count = $thisbutton.attr("data-comments-count");
					/* $thisbutton.html(getButtonInnerHTML(count)); */
					/*
					$thisbutton.find(".pgevoke-story-comments-button-texthide").css("display", "none");
					$thisbutton.find(".pgevoke-story-comments-button-textshow").css("display", "inline");
					*/
					THISMODULE.updateButtonText("show");
					$thisbutton.attr("data-comments-button-action", "show");
				});
			},
			$getContentWrapper: function($thisbutton) {
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $contentwrapper = $parentcomments.find(".pgevoke-story-comments-contentwrapper");
				return $contentwrapper;
			},
			updateButtonText: function(thetext) {
				debuglog("updateButtonText('" + thetext + "') called"); 
				thetext = thetext.toLowerCase();
				var options = ["hide", "show", "loading"];
				var classbase = ".pgevoke-story-comments-button-text";
				if ($.inArray(thetext, options) >= -1) {
					$.each(options, function(i, option) {
						if (thetext === option) {
							$(classbase + option).css("display", "inline");
						} else {
							$(classbase + option).css("display", "none");
						}
					});
				} else {
					debuglog("updateButtonText() invalid option");
				}
			},
			bindUnpaidClick: function() {

			},
			showDrawer: function() {
				if (PGVARS.site === "blade") {
					// OPENWEB_BUTTON_OFFER = "";
					// OPENWEB_BUTTON_TEMPLATE = "OTYLIUGEOZKT"; // In-Market Default
				}
				if (typeof OPENWEB_BUTTON_OFFER === "string" && typeof OPENWEB_BUTTON_TEMPLATE === "string") {
					debuglog("showDrawer() + found OPENWEB vars");
					var wrapper = "pg-bigdrawer-content";
					PGLIB.all.bigdrawer.show({
						"htmlstring":"<div id='"+wrapper+"'></div>",
						closebutton: true
					});
					tp.offer.show({
					   offerId: OPENWEB_BUTTON_OFFER,
					   templateId: OPENWEB_BUTTON_TEMPLATE,
					   displayMode: "inline",
					   containerSelector: "#"+wrapper
					});
				} else {
					debuglog("showDrawer() ran, but couldn't find OPENWEB vars");
				}
			}
		};
	})();
	window.PGLIB.storycomments.init();
}

// *****************************************
//     pgevoke.js.story_comments_spotim
// *****************************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY" && typeof PGVARS.useviafoura === "boolean" && PGVARS.useviafoura) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.storycomments = (function() {
		var debuglogkey = "STORYCOMMENTSVF";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var cookiename = "__tbvfsftsid";
		// LOGOUT FUNCTION: window.viafoura.session.logout() 
		// JS API: https://documentation.viafoura.com/docs/viafoura-javascript-api-2
		var categories = {
			"pg": ["pg_ae", "pg_business", "pg_early-returns", "pg_frontpage", "pg_in-the-lead", "pg_in-the-lead-2015", "pg_life", "pg_local", "pg_morning-file", "pg_mustread", "pg_nate", "pg_newimmigrants", "pg_news", "pg_newsinteractive", "pg_opinion", "pg_pets", "pg_photo", "pg_powersource", "pg_smizik-on-sports", "pg_sports", "pg_video"],
			"blade": ["tb_ae", "tb_a-e", "tb_business", "tb_columnists", "tb_general", "tb_news", "tb_opinion", "tb_ourtowns", "tb_ourtowns", "tb_sports"]
		};
		var viafouraSettings = {
			"dev": {
				"uuid": "00000000-0000-4000-8000-defa57db08d2",
			},
			"live": {
				"uuid": "00000000-0000-4000-8000-5c04b6406bf5"
			}
		};

		/*
		var spotimconfig = {
			"pg": {
				"staging": {
					"id": "sp_ISt8xBHw",
					"ssoToken": "03200415zvH5uo"
				},
				"production": {
					"id": "sp_wfO5dOu8",
					"ssoToken": "03200415Dkl0Ef"
				}
			},
			"blade": {
				"staging": {
					"id": "sp_PZokDnsN",
					"ssoToken": "03200415YeZLs5"
				},
				"production": {
					"id": "sp_qsqOuqOk",
					"ssoToken": "032004153tK2vB"
				}				
			}
		};
		var spotimsettings;
		function getSpotIMSettings() {
			var returnval = {};
			var version = (PGVARS.pianosandbox) ? "staging" : "production";
			debuglog("OpenWeb Version: " + version);
			if (!(issetmulti(spotimconfig, PGVARS.site, version))) {
				return false;
			} else {
				return spotimconfig[PGVARS.site][version];
			}
		};
		*/
		function getButtonInnerHTML(count) {
			var htmlstring = "";
			if (typeof count === "undefined") {
				htmlstring = 'SHOW COMMENTS&nbsp&nbsp;<span class="icon icon-comments"></span>';
			} else {
				htmlstring = 'SHOW COMMENTS&nbsp;(' + count + ')&nbsp&nbsp;<span class="icon icon-comments"></span>';
			}
			return htmlstring;
		}
		function getButtonStoryIndex($thisbutton) {
			if (typeof $thisbutton === "undefined") { return ""; }
			var $thestory = $thisbutton.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex");
			return theindex;
		}
		function getElementStoryIndex($elem) {
			if (typeof $elem === "undefined") { return ""; }
			var $thestory = $elem.closest(".pgevoke-story");
			var theindex = $thestory.attr("data-pg-storyindex") || "";
			return theindex;
		}
		function getCategory(parentsection) {
			if (typeof PGVARS.site !== "string") {
				debuglog("ERROR: Missing PGVAR.sitecode");
				return "error";
			}
			var site = PGVARS.site;
			var namespace = (site === "blade") ? "tb" : site;
			var thecat = namespace + "_" + parentsection;
			debuglog("Thecat is " + thecat);
			if (categories[site].indexOf(thecat) < 0) {
				thecat = (site === "blade") ? "tb_general" : "general";
			}
			if (thecat === "tb_a-e") { thecat = "tb_ae"; }
			debuglog("Using category '" + thecat + "' for parent section '" + parentsection + "'");
			return thecat;
		}
		function userIsPaid() {
			if (typeof _PG !== "undefined"
				&& PGFNS.issetmulti(_PG, "user", "info", "paid")
				&& _PG.user.info.paid) {
				return true;
			} else {
				return false;
			}
		}
		function userIsLoggedIn() {
			if (typeof _PG !== "undefined"
				&& PGFNS.issetmulti(_PG, "user", "info", "loggedIn")
				&& _PG.user.info.loggedIn) {
				return true;
			} else {
				return false;
			}			
		}
		function checkPaidStatusThenInit() {
			debuglog("checkPaidStatusThenInit()");
			if (_PG.eventer.lookup("accountLoaded").length > 0){
				paidStatusCallback();
			} else {
				debuglog("checkPaidStatusThenInit(): accountLoaded hasn't fired yet, waiting");
				
			}
		}
		function accountLoadedCallback() {}
		window.generateViafouraAd = function(slotName, adlocation) {
		    // Generate next slot name
		    // console.log("VFLOG: Called generateViafouraAd(). Values: ", slotName, adlocation);
		    if (typeof window.ADSYSTEMCONFIG.adunitpathbase !== "string") {
		    	console.log("VFLOG: Couldn't find adunitpathbase. Can't init ad.");
		    	return false;
		    }
		    // console.log("VFLOG: Found ADSYSTEMCONFIG.adunitpathbase");
		    var aupbase = window.ADSYSTEMCONFIG.adunitpathbase;
		    // console.log("VFLOG: ", aupbase);
		    var breakpoint = window.getResponsiveSize();
		    // console.log("VFLOG: ", breakpoint);
		    var aupdomain = (breakpoint === "xs" || breakpoint === "xxs") ? "tb.mobile" : "tb.com";
		    // console.log("VFLOG: ", aupdomain);
		    var aup = aupbase + aupdomain + "/" + PGVARS.sectionseolabel;
		    // console.log("VFLOG: Ad unit path: " + aup);
		    // Shouldn't come into play unless we put VF on non-story pags
		    if (PGVARS.requesttype.toUpperCase() !== "STORY") {
				if (aup.substring(aup.length-1) !== "/") {
					aup += "/"; // Add a slash to the end if not present
				}
				aup += "home";
			}
			debuglog("VIAFOURA: Ad unit path: " + aup);
		    var adUnitString = aup; // This string should be replaced by your
		                                            // network code and ad unit you are targeting
		    var size = [300, 250]; // the comment ad positions can accommodate any ad size,
		                          // but we recommend not using very tall ads and using ad size
		                          // mapping for different device sizes. See ad size mapping below
		    // Define the slot itself, call display() to
		    // register the div and refresh() to fetch the ad.
		    googletag.cmd.push(function() {
		        // Destroy any lingering ad slots if they exist in the widget
		        const slots = googletag.pubads().getSlots()
		            .filter((slot) => slot.getSlotElementId() === slotName);
		        googletag.destroySlots(slots);
		        // Define ad sizes based on viewport size
		        // NOTE ads are not responsive but new ads will be rendered to the appropriate size
		        // Adapted from https://support.google.com/dfp_premium/answer/4578089?hl=en#responsiveDesign
		        var mapping = googletag.sizeMapping()
		            .addSize([100, 100], [88, 31]) // Small ad
		            .addSize([320, 400], [[320, 50], [300, 50]]) // Accepts both common mobile banner formats
		            .addSize([320, 700], [300, 250]) // Same width as mapping above, more available height
		            .addSize([750, 200], [300, 250]) // Landscape tablet
		            .build();
		        // Create a new ad slot, pointing to the slotName given to this function
		        var slot = googletag.defineSlot(adUnitString, size, slotName)
		            .defineSizeMapping(mapping)
		            .addService(googletag.pubads())
		            .setTargeting("position", "Viafoura");
		        // Add any targeting or any other modifications to the ad here
		        // Display the new ad
		        console.log("VFAD: Addding slot with name: ", slotName);
		        console.log("VFAD: Slot object: ", slot);
		        console.log("VFAD: Slot targeting: ", slot.getTargetingMap());
		        googletag.display(slotName);
		        googletag.pubads().refresh([slot]);
		    });
		};
		window.generateCommentAd = function(slotName) {
			console.log("generateCommentAd called");
			generateViafouraAd(slotName, "comment");
			console.log("Done");
			return;
		};
		window.generateContentRecirculationAd = function(slotName) {
			console.log("generateRecirculationAd called");
			generateViafouraAd(slotName, "recirculation");
			console.log("Done");
			return;
		};
		var storiesAlreadyLoaded = [0];
		var THISMODULE;
		return {
			init: function() {
				THISMODULE = this;
				debuglog("init() for Viafoura called");
				// ---- Set up listener ----
				
				// ---- Call right away if ready ----
				if (_PG.eventer.lookup("accountLoaded").length > 0){
					accountLoadedCallback();
				} else {
					_PG._listen("accountLoaded", function() {
						accountLoadedCallback();
					});
				}
				// ----- Bind Comments button click -----
				$(document).ready(function(e) {
					// $("body").addClass("pg-useviafoura");
					// NO LONGER NEEDED, ELIMINATING BUTTON
					// $(document).on("click", ".pgevoke-story-comments-button", function() {
					//	var $thisbutton = $(this);
					// 	PGLIB.storycomments.onClick($thisbutton);
					// });
					$(document).on("click", ".pgevoke-story .pgevoke-contentarea-socialbuttons-comments", function() {
						console.log("CLICKED COMMENT BUTTON");
						var $story = $(this).parents().closest(".pgevoke-story");
						var $commentarea = $story.find(".pgevoke-story-comments");
						$("html, body").stop().animate({
                			scrollTop: $commentarea.offset().top - 50
            				}, 800, "swing")
					});
					$(document).on("click", ".pgevoke-socialshareheader-buttons-comments", function() {
							debuglog("Clicked mobile comment count");
							var story = PGLIB.story.transporter.storywaypoints.getCurrentAddressBarStory();
							debuglog(story);
							var $story = $("#" + story);
							var $commentarea = $story.find(".pgevoke-story-comments");
							$("html, body").stop().animate({
                				scrollTop: $commentarea.offset().top - 50
            				}, 800, "swing");
					});
					_PG._listen("piano:loggedIn", function() {
						THISMODULE.login();
					});
					_PG._listen("piano:loggedOut", function() {
						THISMODULE.logout();
					});
					console.log("VFLOG: Setting up logout handler");
					// Handle login click
					window.vfQ = window.vfQ || [];
					window.vfQ.push(function() {
						window.vf.$prepublish((channel, event, ...args) => {
						    if (channel === 'authentication' && event === 'required') {
						        // add here the handler to trigger your authentication login flow
						        console.log("VFLOG: Auth login handler (v2)");
						        console.log("VFLOG: Args: ", args);
					        	console.log("VFLOG: Closing tray");
					        	window.vf.$publish('tray', 'close'); // Close tray if open
					        	if (typeof args === "object" && PGFNS.issetmulti(args, "0", "method") && args[0].method === "signup") {
									_PG._trigger("piano:registerClicked", {
										location: "viafoura"
									});
									tp.pianoId.show({screen:"register"});
					        	} else {
									_PG._trigger("piano:loginClicked", {
										location: "viafoura"
									});
									tp.pianoId.show({screen:"login"});
					        	}
						        console.log("VFLOG: Could not find method");
						        return false;
						    } else {
						        return { channel, event, args };
						    }
						});
						// Handle logout click
						window.vf.$subscribe('authentication', 'logout', () => {
							console.log("VFLOG: Clicked logout button");
							_PG._trigger("piano:logoutClicked", {
								location: "viafoura"
							});
							tp.pianoId.logout();
						});
						// Inline ad binding
						// Provide the desired ad generation functions as callbacks to the appropriate events:
						console.log("VFLOG: Setting up ad listeners");
						window.vf.$subscribe('vf-ads', 'requestCommentAd', generateCommentAd);
						window.vf.$subscribe('vf-ads', 'requestContentRecirculationAd', generateContentRecirculationAd);
						// THISMODULE.load(0);
						_PG._listen("pgtransporter:enterednewstory", function(e, data) {
							console.log("VFLOG: User entered new story. Data: ", data);
							if (typeof data.id !== "undefined") {
								console.log("VFLOG: Story ID is " + data.id);
								var storyindex;
								if (data.id.length >= 15) {
									storyindex = data.id.slice(14);
									console.log("VFLOG: Story index is " + storyindex);
									if (storiesAlreadyLoaded.indexOf(parseInt(storyindex)) <= 0) {
										console.log("VFLOG: Comments for story #" + storyindex + " have not been loaded yet. Loading.");
										storiesAlreadyLoaded.push(storyindex);
										PGLIB.storycomments.load(storyindex);	
									} else {
										// console.log("VFLOG: Comments for story #" + storyindex + " have already been loaded. Exiting.");
									}
									
								} else {
									console.log("VFLOG: Couldn't extracting storyindex");
								}
								
							} else {
								console.log("VFLOG: Couldn't find ID");
							}

						});
					});
				});
			},
			load: function(storyindex) {
				debuglog("Loading comments for story #" + storyindex);
				// $thisbutton = $("#pgevoke-story-" + storyindex + " .pgevoke-story-comments-button").first();
				// if ($thisbutton.length === 0) {
				//	debuglog("No 'button' div. Comments presumably disabled for story #" + storyindex + ". Exiting.");
				//	return; 
				// }
				// $thisbutton.attr("data-comments-button-action", "disabled");
				// var storyid = $thisbutton.attr("data-comments-storyid");
				var story = "pgevoke-story-"  + storyindex;
				var $story = $("#" + story);
				var storyid = $story.attr("data-pg-storyid");
				// var storyindex = $story.attr("data-pg-storyindex");
				var targetid = "pgevoke-story-comments-" + storyid;
				// var link = $thisbutton.attr("data-comments-link");
				var link = $story.attr("data-pg-storylink");
				// var parentsection = $thisbutton.attr("data-comments-parentsection");
				var parentsection = $story.attr("data-pg-storyparentsection");
				var thecategory = getCategory(parentsection);
				// var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				// var $target = $parentcomments.find(".pgevoke-story-comments-content");
				$target = $story.find(".pgevoke-story-comments-content");
				// var $metadiv = $parentcomments.find(".pgevoke-story-comments-metadata");
				// var $thebutton = $story.find(".pgevoke-story-comments-button");
				debuglog($story);
				if (typeof PGVARS === "object" && PGVARS.site === "blade") {
					if (link.slice(-1) === "/") { link = link.slice(0, -1); } // REMOVE trailing slash for Blade 
				} else {
					if (link.slice(-1) !== "/") { link += "/"; } // Make sure there's trailing for PG 
				}
				var $convodiv = '<div class="viafoura"><vf-conversations vf-container-id="' + storyid + '" limit=5></vf-conversations></div>';
				debuglog("Convodiv:");
				debuglog($convodiv);
				debuglog($($convodiv));
				debuglog("Appending to convodiv to document");
				// $("head").append($script)
				$target.css("display", "inherit");
				$target.append($convodiv);
				// $thisbutton.attr("data-comments-button-loaded", "true");
				// ---- Add comment count end -----
				if (storyindex === 0) {
					tp = window.tp || [];
					tp.push(["init",function() {
						debuglog("tp INIT even occured. Checking token.");
						var token = tp.pianoId.getToken();
						debuglog("Piano token: " + token);
						$.cookie(cookiename, token);
						debuglog("Story index is 0. Loading Viafoura script.");
						THISMODULE.loadViafouraScript();
						THISMODULE.logout(THISMODULE.login);
						var selector = '#pgevoke-story-' + storyindex;
						window.vfQ = window.vfQ || [];
						window.vfQ.push(function() {
							var thepage = document.querySelector(selector);
							console.log("VFLOG: Calling setCurrentPage() for this page:", thepage);
							// window.vf.context.registerCurrentPageRegion(thepage);
							window.vf.context.setCurrentPage(thepage);
						});
					}]);
				} else {
					debuglog("Story index is >0. No need for script.");
					var selector = '#pgevoke-story-' + storyindex;
					var $thepage = $(selector);
					window.vfQ = window.vfQ || [];
					window.vfQ.push(function() {
						var currentstory = "pgevoke-story-" + storyindex;
						if (PGVARS.site === "blade" && PGVARS.useviafoura) {
							console.log("VFLOG: Updating meta[name=vf:container_id] to " + currentstory);
							$("meta[name='vf:container_id']").attr("content", currentstory);
							console.log("VFLOG: New meta value: " + $("meta[name='vf:container_id']").attr("content"));
							var thepage = document.querySelector(selector);
							console.log("VFLOG: Current URL: " + document.location.href);
							console.log("VFLOG: Calling setCurrentPage() for this page:", thepage);
							window.vf.context.setCurrentPage(thepage);
						} else {
							console.log("VFLOG: Not updating meta. viafoura: " + PGVARS.useviafoura);
						}
					});
				}
				THISMODULE.updateCommentsCount(storyindex);
				// $thebutton.attr("data-comments-button-action", "show");
			},
			loadViafouraScript: function() {
				var script = document.createElement("script");
			    script.setAttribute("async", true);
			    // script.setAttribute("src", "//cdn.viafoura.net/vf-v2.js");
			    script.setAttribute("src", "//cdn.viafoura.net/entry/index.js");
			    // script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
			    document.getElementsByTagName("head")[0].appendChild(script);
				// $parentcomments.append($script);
			},
			/*
			onCommentsLoaded: function(e, data) {
				
				var $thebutton = $story.find(".pgevoke-story-comments-button");
				$thebutton.attr("data-comments-button-loaded", "true");
				if ($thebutton.attr("data-comments-alreadyclicked") === "true") {
					$thebutton.removeAttr("data-comments-alreadyclicked");
					PGLIB.storycomments.show($thebutton);
				} else {
					$thebutton.attr("data-comments-button-action", "show");    
				}   
				
			},
			*/
			/*
			onClick: function($thisbutton) {
				var buttonaction = $thisbutton.attr("data-comments-button-action");
				debuglog("Clicked button for story " + getButtonStoryIndex($thisbutton) + ". Buttonaction is '" + buttonaction + "'");
				if (buttonaction === "show") {
					if ($thisbutton.attr("data-comments-button-loaded") !== "true") {
						debuglog("Comments are not loaded yet. Disabling button and loading now. Will wait for 'commentsLoaded' event.");
						$thisbutton.attr("data-comments-alreadyclicked", "true");
						THISMODULE.disableButton($thisbutton);
					} else {
						debuglog("Showing.");
						PGLIB.storycomments.show($thisbutton);
					}
				} else if (buttonaction === "hide") {
					debuglog("Hiding.");
					PGLIB.storycomments.hide($thisbutton);
				}
			},
			*/
			login: function(callback) {
				window.vfQ = window.vfQ || [];
				window.vfQ.push(function() {
					var sid = tp.pianoId.getToken();
				    window.vf.session.login.cookie(sid)
				       .then(function(){
							console.log("logged in");
							if (typeof callback === "function") {
								callback();
							}
				       });
				});
			},
			logout: function(callback) {
				window.vfQ = window.vfQ || [];
				window.vfQ.push(function() {
				    window.vf.session.logout()
				       .then(function(){
							console.log("loggedout");
							if (typeof callback === "function") {
								callback();
							}
				       });
				});
			},
			/*
			disableButton: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				THISMODULE.updateButtonText("loading");
			},
			*/
			updateCommentsCount: function(storyindex) {
				debuglog("updateCommentsCount() called v2");
				var $story = $("#pgevoke-story-" + storyindex);
				var storyid = $story.attr("data-pg-storyid");
				var commentscount = $story.attr("data-pg-storycommentscount");
				debuglog("Commentscount: " + commentscount);
				debuglog("Commentscount type: " + typeof commentscount);
				if (typeof commentscount === "string" && commentscount !== "0") {
					if (parseInt(commentscount) > 999) {
							thecount = "1K+";
						}
				}
				var uuid = (PGVARS.sitecode === "LIVE") ? viafouraSettings.live.uuid : viafouraSettings.dev.uuid
				var endpoint = "https://livecomments.viafoura.co/v4/livecomments/" + uuid + "/content-containers/comment-count-and-status/by-container-ids";
				debuglog("uuid: " + uuid);
				debuglog("endpoint: " + endpoint);
				$.ajax(endpoint, {
					type: "POST",
					data: "[" + storyid + "]",
					dataType:"json"
				})
				.done(function(data) {
					debuglog("DONE!");
					debuglog(data);
					if (PGFNS.issetmulti(data, "0", "commentCount")) {
						var thecount = data[0].commentCount;
						debuglog("Count is " + thecount);
						var $countsocial = $story.find(".pgevoke-story-commentscount");
						debuglog($story);
						debuglog($countsocial);
						if (parseInt(thecount) > 999) {
							thecount = "1K+";
						}
						$story.attr("data-pg-storycommentscount", thecount);
						$countsocial.html(thecount);
						var $countsocial = $story.find(".pgevoke-story-commentscount");
						if (parseInt(thecount) > 999) {
							thecount = "1K+";
						}
						$countsocial.html(thecount);
						THISMODULE.updateMobileCommentsCount();
					} else {
						debuglog("Couldn't find count in resonse data");
					}
				})
				.fail(function() {
					debuglog("updateCommentsCount() ajax request FAILED!");
				});
			},
			/*
			show: function($thisbutton) {
				// $thisbutton.css("display", "none");
				// $thisbutton.css("height", "auto");
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				var $contentdiv = $contentwrapper.find("#spcv_conversation");
				$contentdiv.css("display", "block");
				$contentwrapper.slideDown(400, function() {
					// $thisbutton.find(".pgevoke-story-comments-button-texthide").css("display", "inline");
					debuglog("COUNTCOUNTCOUNT: " + $thisbutton.find(".pgevoke-story-comments-button-texthide").length);
					debuglog($thisbutton.find(".pgevoke-story-comments-button-texthide"));
					// $thisbutton.find(".pgevoke-story-comments-button-textshow").css("display", "none");
					THISMODULE.updateButtonText("hide");
					$thisbutton.attr("data-comments-button-action", "hide");
				});
			},
			hide: function($thisbutton) {
				$thisbutton.attr("data-comments-button-action", "disabled");
				var $contentwrapper = PGLIB.storycomments.$getContentWrapper($thisbutton);
				$contentwrapper.slideUp(400, function() {
					Stickyboxes.updateAll();
					PGLIB.storycomments.updateCommentsCount($thisbutton);
					var count = $thisbutton.attr("data-comments-count");
					// $thisbutton.html(getButtonInnerHTML(count));
					// $thisbutton.find(".pgevoke-story-comments-button-texthide").css("display", "none");
					// $thisbutton.find(".pgevoke-story-comments-button-textshow").css("display", "inline");
					THISMODULE.updateButtonText("show");
					$thisbutton.attr("data-comments-button-action", "show");
				});
			},
			*/
			$getContentWrapper: function($thisbutton) {
				var $parentcomments = $thisbutton.closest(".pgevoke-story-comments");
				var $contentwrapper = $parentcomments.find(".pgevoke-story-comments-contentwrapper");
				return $contentwrapper;
			},
			updateMobileCommentsCount: function() {
				debuglog("updateMobileCommentsCount()");
				var story = PGLIB.story.transporter.storywaypoints.getCurrentAddressBarStory();
				debuglog(story);
				var $story = $("#" + story);
				var commentscount = $story.attr("data-pg-storycommentscount");
				if (typeof commentscount === "string") {
					debuglog("Comments count: " + commentscount);
					var $count = $(".pgevoke-socialshareheader-buttons-commentscount");
					$count.html(commentscount);
				} else {
					debuglog("Comments count is not a string!");
				}
			},
			updateButtonText: function(thetext) {
				debuglog("updateButtonText('" + thetext + "') called"); 
				thetext = thetext.toLowerCase();
				var options = ["hide", "show", "loading"];
				var classbase = ".pgevoke-story-comments-button-text";
				if ($.inArray(thetext, options) >= -1) {
					$.each(options, function(i, option) {
						if (thetext === option) {
							$(classbase + option).css("display", "inline");
						} else {
							$(classbase + option).css("display", "none");
						}
					});
				} else {
					debuglog("updateButtonText() invalid option");
				}
			},
			bindUnpaidClick: function() {

			},
			showDrawer: function() {
				if (PGVARS.site === "blade") {
					// OPENWEB_BUTTON_OFFER = "";
					// OPENWEB_BUTTON_TEMPLATE = "OTYLIUGEOZKT"; // In-Market Default
				}
				if (typeof OPENWEB_BUTTON_OFFER === "string" && typeof OPENWEB_BUTTON_TEMPLATE === "string") {
					debuglog("showDrawer() + found OPENWEB vars");
					var wrapper = "pg-bigdrawer-content";
					PGLIB.all.bigdrawer.show({
						"htmlstring":"<div id='"+wrapper+"'></div>",
						closebutton: true
					});
					tp.offer.show({
					   offerId: OPENWEB_BUTTON_OFFER,
					   templateId: OPENWEB_BUTTON_TEMPLATE,
					   displayMode: "inline",
					   containerSelector: "#"+wrapper
					});
				} else {
					debuglog("showDrawer() ran, but couldn't find OPENWEB vars");
				}
			}
		};
	})();
	window.PGLIB.storycomments.init();
} else {
	if (typeof PGVARS.useviafoura !== "boolean" || !PGVARS.useviafoura) {
		$(document).ready(function() {
			$("body").removeClass("pg-useviafoura");
		});	
	}
}

// *****************************************
//       pgevoke.js.story_transporter
// *****************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.story = window.PGLIB.story || {};
	window.PGLIB.story.transporter = (function() {	
		var debuglogkey = "TRANSPORTER";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var issetmulti = PGFNS.issetmulti;
		var PGAPIBaseURL = "https://api3.post-gazette.com";
		if (typeof PGVARS === "object" && typeof PGVARS.apibaseurl === "string") {
			PGAPIBaseURL = PGVARS.apibaseurl;
		}
		var printEventFired = false;
		var THISMODULE = {};
		var fotomotoLocalStorageKey = "fotomoto__cartactive";
		var defaultAuthorBlurb = " is a staff writer for the Pittsburgh Post-Gazette.";
		function endOfStoryOfferIsReady() {
			if (typeof window.END_OF_STORY_TEMPLATE === "string" && typeof window.END_OF_STORY_TEMPLATE === "string") {
				return true;
			} else {
				return false;
			}
		}
		return {
			debugmode: false,
			selector: ".pgevoke-pagecontent",
			currentindex: 0,
			counter:0,
			triggerpointoffset:1000,
			stories:null,
			alreadyloading: false,
			endofcontentreached: false,
			regulated: false,
			storiesperrequest:50,
			endpoint_listofstories: PGAPIBaseURL + "/top/1/mostTrending/articleTest/",
			endpoint_storyapi: "",
			arrayofstories: [],
			transporterstories: [],
			loadedStoryZeroDataFromAPI: false,
			fotomotoScriptLoaded: false,
			log: function(thingtolog) {
				if (PGLIB.story.transporter.debugmode === true) {
					console.log(thingtolog);
				}
			},
			wrapperbottom: {
				value: 0,
				update: function() {
					var top = $(PGLIB.story.transporter.selector).offset().top;
					var height = $(PGLIB.story.transporter.selector).height();
					var bottom = top + height;
					bottom = Math.round(bottom);
					PGLIB.story.transporter.wrapperbottom.value = bottom;
				}
			},
			viewportbottom: {
				value: 0,
				update: function() {
					PGLIB.story.transporter.viewportbottom.value = $(window).scrollTop() + $(window).height();
				}
			},
			oldwrapperheight: {
				value: 0,
				set: function() {
					PGLIB.story.transporter.oldwrapperheight.value = $(PGLIB.story.transporter.selector).height();
				}
			},
			init: function() {
				// PGLIB.story.transporter.addExtraContent("firststory");
				debuglog("init() -> THISMODULE:");
				THISMODULE = this;
				debuglog(THISMODULE);
				PGLIB.story.transporter.currentindex += 1;
				PGLIB.story.transporter.downloadListOfStoriesThenInit();
				PGLIB.story.transporter.storywaypoints.init();
				$(window).on("breakpointchanged", function(e, data) {
					var newbreakpoint = data.newbreakpoint;
					debuglog("Breakpoint changed:");
					debuglog(data);
					if (data.groupchange === "desktop-to-mobile") {
						debuglog("Breakpoint changed from desktop to mobile. Killing all designated story stickyboxes.");
						PGLIB.story.transporter.killStickyBoxesAll();
					} else if (data.groupchange === "mobile-to-desktop") {
						debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
						// PGLIB.story.transporter.killStickyBoxesAll();
						PGLIB.story.transporter.initializeStickyboxesAll();	
						PGLIB.story.lateststories.load();
					}
					PGLIB.story.transporter.updatePortraitImages(newbreakpoint);
				});
				$(document).ready(function(){
					THISMODULE.bindPrintButtons();
				});
			},
			bindPrintButtons: function() {
				var devsuffix = (PGVARS.sitecode !== "LIVE") ? "TEST" : "";
				if (PGVARS.site === "blade") {
 					$(document).on("click", ".pgevoke-contentarea-socialbuttons-print > a", function() {
 						debuglog("Print: Button clicked");
 						if (typeof PGVARS.canonicalurl === "string") {
 							window.open(PGFNS.getLiberLink(PGVARS.canonicalurl) + '.print','','width=500,height=500');	
 						}
 					});
				} else {
				    var beforePrint = function() {
				    	debuglog("Print: Print dialogue opened");
				        if (!printEventFired) {
			        		printEventFired = true;
			        		debuglog("Print: Firing MENU event");
			      			ga('itTracker.send',{
								hitType: 'event',
								eventCategory: 'Print',
								eventAction: 'Click',
								eventLabel: 'Menu' + devsuffix
							});      
				        }
				    };
				    if (window.matchMedia) {
				        var mediaQueryList = window.matchMedia('print');
				        mediaQueryList.addListener(function(mql) {
				        	if (mql.matches) {
				        		beforePrint();	
				        	}
				        });
				    }
				    window.onbeforeprint = beforePrint;
				    $(document).on("click", ".pgevoke-contentarea-socialbuttons-print > a", function() {
				    	debuglog("Print: Button clicked");
				    	if (!printEventFired) {
							printEventFired = true;
							debuglog("Print: Firing BUTTON event");
							ga('itTracker.send', {
								hitType: 'event',
								eventCategory: 'Print',
								eventAction: 'Click',
								eventLabel: 'Button' + devsuffix
							}); 
						}
						window.print(); // test		
						// Old behavior, eliminated April 5, 2021
						// if (typeof PGVARS.canonicalurl === "string") {
							//	window.open(PGFNS.getLiberLink(PGVARS.canonicalurl) + '.print','','width=500,height=500');	
						// }	
				    });
				}
			},
			downloadListOfStoriesThenInit: function() {
				debuglog("Downloading list of stories...");
				$.ajax(PGLIB.story.transporter.endpoint_listofstories, {
					dataType:"json"
				})
				.done(function(jsondata) {
					PGLIB.story.transporter.waitForRelatedLinksThenInit(jsondata);
				})
				.fail(function() {
			 	  	debuglog("Ajax request for list of stories failed");
			 	  	PGLIB.story.transporter.waitForRelatedLinksThenInit({});
				});		
			},

			waitForRelatedLinksThenInit: function(jsondata) {
				debuglog("Request for list of stories complete. Running waitForRelatedLinksThenInit()");
				if (PGLIB.story.transporter.loadedStoryZeroDataFromAPI) {
					PGLIB.story.transporter.initTransporter(jsondata);
				} else {
					$(document).on("pgevoke:loadedStoryZeroDataFromAPI", function() {
						PGLIB.story.transporter.initTransporter(jsondata);
					});
				}
			},

			// UNDER CONSTRUCTION 2/15/2017
			initTransporter: function(jsondata) {
				// PGLIB.story.transporter.loadedStoryZeroDataFromAPI
				debuglog("Ajax request for list of stories successful. Here's the returned data:");
				PGLIB.story.transporter.log(jsondata);
				// ------- Set initial vars -------
				var jsondata = jsondata || {};
				var transporterstories = jsondata.articles || [];
				PGLIB.story.transporter.transporterstories = transporterstories;
				// var storiestoremove = push(pgStoryZeroJSON.articles[0].storyID);
				var finalarray = [];
				var storiestoremove = [];
				// -------- Add Story Zero -------
				finalarray.push({}); // Placeholder
				if (issetmulti(pgStoryZeroJSON, "articles", "0", "storyID")) {
					storiestoremove.push(pgStoryZeroJSON.articles[0].storyID);
				}
				// -------- Add Related -------
				if (issetmulti(pgStoryZeroJSON, "articles", "0", "related", "links") && Array.isArray(pgStoryZeroJSON.articles[0].related.links)) {
					var relatedlinks = pgStoryZeroJSON.articles[0].related.links;
					var i;
					var relatedlinkslength;
					debuglog("Found " + relatedlinks.length + " related links");
					for (i=0; i<=(relatedlinks.length-1); i++) {
						// if (typeof relatedlinks[i].storyID === "string" && (typeof relatedlinks[i].future !== "string" || relatedlinks[i].future !== "YES")) {
						if (typeof relatedlinks[i].storyID === "string") {
							debuglog("#" + i + ": " + relatedlinks[i].storyID);
							// debuglog("Adding related story with ID '" + relatedlinks[i].storyID + "'");
							finalarray.push({
								"pubDate": "",
								"storyID": relatedlinks[i].storyID
							});
							storiestoremove.push(relatedlinks[i].storyID);
						} else {
							debuglog("#" + i + ": INVALID (No StoryID)");
							debuglog(relatedlinks[i]);
						}
					}
				} else {
					debuglog("No related links found");
					debuglog(pgStoryZeroJSON);
				}
				// ------- Add viewed stories -------
				// PGLIB.story.transporter.arrayofstories = jsondata.articles || [];
				// viewedstories = amplify.store("transporter-viewedstories") || [];
				// viewedstories = ["201611170001","201611140202"];
				var viewedstories = [];
				storiestoremove = storiestoremove.concat(viewedstories);
				// -------- Dedupe Transporter Stories -------
				var transporterstoriesdeduped = [];
				debuglog("Checking " + transporterstories.length + " transporter stories for dupes. Here are the stories to remove...");
				debuglog(storiestoremove);
				$.each(transporterstories, function(i, thestory) {
					if (issetmulti(thestory, "storyID")) {
						var thestoryid;
						thestoryid = thestory.storyID || "NOSTORYIDFOUND";	
						thestoryid = thestoryid.toString();
						// debuglog("Checking " + thestoryid);
						if ($.inArray(thestoryid, storiestoremove) >= 0) {
							// temparray.splice(i,1);
							debuglog("Removing duplicate " + thestoryid + " (" + i + ")");
						} else {
							transporterstoriesdeduped.push(thestory);
						}
					}
				});
				finalarray = finalarray.concat(transporterstoriesdeduped);
				PGLIB.story.transporter.arrayofstories = finalarray;
				$(document).ready(function() {
					// PGLIB.story.transporter.spinner.hide();
					PGLIB.story.transporter.seeIfWeNeedNewContent();
					$(window).scroll(function() {
						PGLIB.story.transporter.seeIfWeNeedNewContent();				
					});
				});
			},
			updateWrapperAndViewportBottomValues: function() {
				PGLIB.story.transporter.wrapperbottom.update();
				PGLIB.story.transporter.viewportbottom.update();
			},
			seeIfWeNeedNewContent: function() {
				// debuglog("A: " + PGLIB.story.transporter.alreadyloading + " / E: " + PGLIB.story.transporter.endofcontentreached + " / R: " + PGLIB.story.transporter.regulated)
				if (PGLIB.story.transporter.alreadyloading || PGLIB.story.transporter.endofcontentreached || PGLIB.story.transporter.regulated) { return; }
				PGLIB.story.transporter.updateWrapperAndViewportBottomValues();
				if (PGLIB.story.transporter.wrapperbottom.value == 0) {
					debuglog("wrapperbottom.value is 0. Exiting");
					return;
				} // Document still loading
				// debuglog((PGLIB.story.transporter.viewportbottom.value + PGLIB.story.transporter.triggerpointoffset)  + " / " + PGLIB.story.transporter.wrapperbottom.value);
				if (PGLIB.story.transporter.viewportbottom.value + PGLIB.story.transporter.triggerpointoffset >= PGLIB.story.transporter.wrapperbottom.value) {
					debuglog("Trigger point reached. Loading new content...");
					PGLIB.story.transporter.prepareThenLoadContent(); // They've scrolled far enough down
				}
			},
			prepareThenLoadContent: function() {
				PGLIB.story.transporter.alreadyloading = true;
				PGLIB.story.transporter.spinner.show();
				PGLIB.story.transporter.oldwrapperheight.set();
				PGLIB.story.transporter.loadContent();
			},
			preloadAuthorImage: function() {
				if (typeof PGPAGEDATA === "object" && PGFNS.issetmulti(PGPAGEDATA, "authorapi", "author", "image")) {
					debuglog("Found author image. Preloading.");
					var img = new Image();
					img.src = PGPAGEDATA.authorapi.author.image;
				} else {
					debuglog("Couldn't find author image. Can't preload");
				}
			},
			loadContent: function() {
				var currentindex = PGLIB.story.transporter.currentindex;
				debuglog("======= loadContent() called (index #" + currentindex + ") =======");
				var $newstorydiv = $("<div></div>")
						.attr("id", "pgevoke-story-" + currentindex)
						.addClass("pgevoke-story")
						.attr("data-pg-storyindex", currentindex);
				var ajaxsettings = {
					"template": "#pgevoke-_tpl-story",
					"endfunction": PGLIB.story.transporter.endfunction,
					"customdata": {
						"context": "fullstory",
						"transporterid": currentindex
					}
				};
				var $appendtarget;
				// ------ pgevoke-story-0 -------
				if (currentindex === 0) {
					$(".pgevoke-pagecontent").prepend($newstorydiv);
					ajaxsettings["jsondata"] = pgStoryZeroJSON;
					PGLIB.story.transporter.preloadAuthorImage();
				// ------ pgevoke-story-1+ -------
				} else {
					$newstorydiv.css("display","none");
					$newstorydiv.css("opacity","0");
					$target = $(".pgevoke-story").last();
					if (currentindex === 1) {
						var $newsslide = $(".pgevoke-story-newsslide");
						if ($newsslide.length === 1) {
							// $target = $target = $newsslide;
							$target = $newsslide;
						}
					}
					$target.after($newstorydiv);
					var thestory = PGLIB.story.transporter.arrayofstories[currentindex];
					var thestoryid = thestory.storyID;
					debuglog("Will make AJAX request for storyID " + thestoryid);
					ajaxsettings["endpoint"] = PGAPIBaseURL + "/top/2/article/" + thestoryid + "/";
				}
				// ------ Load -------
				$("#pgevoke-story-" + currentindex).loadAjaxContent(ajaxsettings);
			},
			endfunction: function(jsondata, settings) {
				// THISMODULE = this;
				debuglog("Running endFunction");
				debuglog(jsondata);
				// debuglog(THISMODULE);
				var currentindex = PGLIB.story.transporter.currentindex;
				// var currentstorykey = PGLIB.story.transporter.currentstorykey;
				var $thisstory = $("#pgevoke-story-" + currentindex);
				// *** ------- For address bar switching ------- ***
				if (PGFNS.issetmulti(jsondata, "articles", "0") && typeof jsondata.articles["0"] === "object") {
					var storydata = jsondata.articles["0"];
					if (typeof storydata.link === "string") {
						var thelink = storydata.link;
						thelink = thelink.replace(/\/$/,""); // Remove trailing slash if present
						$thisstory.attr("data-pg-storylink", thelink);
						$thisstory.attr("data-pg-storyparentsection", PGFNS.getParam1(thelink));
					}
					if (typeof storydata.title === "string") {
						$thisstory.attr("data-pg-storytitle", storydata.title);
					}
					if (PGFNS.issetmulti(settings, "storyobjs","0","adsection")) {
						$thisstory.attr("data-pg-storyadsection", settings.storyobjs[0].adsection);
					}
					if (typeof storydata.paid === "string") {
						$thisstory.attr("data-pg-storypaid", storydata.paid);
					}
					if (typeof storydata.storyID === "string") {
						debuglog("Got storyID "+ storydata.storyID);
						$thisstory.attr("data-pg-storyid", storydata.storyID);	
					} else {
						debuglog("No storyID");
					}
					if (typeof storydata.storyGroup === "string" && storydata.storyGroup !== "") {
						debuglog("Found storyGroup: "+ storydata.storyGroup);
						$thisstory.attr("data-pg-storygroup", storydata.storyGroup);	
					} else {
						debuglog("Couldn't find storyGroup");
					}
					if (typeof storydata.commentsEnabled === "boolean") {
						debuglog("Found commentsEnabled");
						var commentsEnabled = (storydata.commentsEnabled) ? "1" : "0";
						$thisstory.attr("data-pg-commentsenabled", commentsEnabled);	
					}
					if (typeof storydata.pubDate === "string") {
						$thisstory.attr("data-pg-storypubdate", storydata.pubDate);
					}
					if (typeof storydata.subSections === "object" && storydata.subSectins !== null) {
						try {
							$thisstory.attr("data-pg-storysubsections", JSON.stringify(storydata.subSections));
						} catch(e) {
							debuglog("Subsections error: ");
							debuglog(e);
							$thisstory.attr("data-pg-storysubsections", "");
						}
					}
					if (typeof storydata.tags === "object" && Array.isArray(storydata.tags) && storydata.tags.length > 0) {
						try {
							var tagsstring = "";
							$.each(storydata.tags, function(i, item) {
								if (typeof item.name === "string" && typeof item.seoKey === "string") {
									tagsstring += item.name;
									if (i < i.length - 1) { story.tags += ","; }
								}
							});
							$thisstory.attr("data-pg-storytags", tagsstring);
							debuglog("Writing tags to data attr: " + tagsstring);
						} catch(e) {
							debuglog("Found tags, but couldn't convert to string");
						}
					}
					$thisstory.attr("data-pg-story-socialimage", "");
					if (typeof storydata.images === "object" && Array.isArray(storydata.images) && storydata.images.length >= 1) {
						if (PGFNS.getSiteSetting("uselibercusimages") === true) {
							 if (typeof storydata.images[0].url === "string") {
							 	storydata.socialimage = storydata.images[0].url;
							 	$thisstory.attr("data-pg-story-socialimage", storydata.socialimage);
							 }
						} else {
							if (issetmulti(storydata,"images","0","cdn","sizes","600x_a4-3_cTC")) {
								storydata.socialimage = storydata.images[0].cdn.sizes["600x_a4-3_cTC"];
								
							}
						}
						// PGFNS.getSiteSetting("uselibercusimages") === true
					 	// 600x_a4-3_cTC
					}
					var forcedlayout = (typeof pgforcedlayout === "string") ? pgforcedlayout : "";
					// var forcedlayout = (issetmulti(PGVARS, "forcedlayout") && typeof storydata.layout === "string") ? PGVARS.forcedlayout : "";
					var layout;
					layout = (issetmulti(storydata, "layout") && typeof storydata.layout === "string") ? storydata.layout : "";
					layout = (layout === "") ? "widerheadline" : layout; // Default to widerheadline
					var noimage = (issetmulti(storydata,"images","0","url") === false || typeof storydata.images[0].url !== "string");
					var portraitmode = (issetmulti(PGVARS, "portraitmode") === true && typeof PGVARS.portraitmode === "string") ? PGVARS.portraitmode : ""; 
					if (portraitmode === "1" && (layout === "wideheadline" || layout === "leftcornerheadline")) {
						layout = "portrait" + layout;
					}
					if (noimage) {
						$thisstory.addClass("pgevoke-story-layout-noheroimage");	
					} else if (layout !== "" || forcedlayout !== "") {
						debuglog("Layout is '" + layout + "'");
						debuglog("Forced Layout is '" + forcedlayout + "'");
						layout = (forcedlayout !== "") ? forcedlayout : layout; // Override layout if necessary
						if (layout === "leftcornerheadline" || layout === "portraitleftcornerheadline") {
							// ----- leftcorner is  default in CSS, but this can still be useful -----
							$thisstory.addClass("pgevoke-story-layout-leftcornerheadline");
							// ---- Add "widerheadline" class at SM breakpoint to push headline down -----
							if (issetmulti(PGLIB, "all", "breakpoints", "mostrecent") && PGLIB.all.breakpoints.mostrecent === "sm") {
								$thisstory.addClass("pgevoke-story-layout-widerheadline");
							}
							$(document).on("breakpointchanged", function(e,data) {
								var newbreakpoint = data.newbreakpoint;
								if (newbreakpoint === "sm") {
									$thisstory.addClass("pgevoke-story-layout-widerheadline");		
								} else {
									$thisstory.removeClass("pgevoke-story-layout-widerheadline");
								}
							});
						} else {
							$thisstory.addClass("pgevoke-story-layout-widerheadline");
						}
						if (layout === "portraitwideheadline" || layout === "portraitleftcornerheadline") {
							$thisstory.addClass("pgevoke-story-layout-portrait");
						} else if (layout === "bottomfocusedimage") {
							$thisstory.addClass("pgevoke-story-layout-bottomfocusedimage");
						} else if (layout === "noheroimage") {
							$thisstory.addClass("pgevoke-story-layout-noheroimage");
						}
					}
				}			
				// $("#pgevoke-story-" + currentindex).attr("data-pg-story-url") = 
				var lastitemindex = PGLIB.story.transporter.arrayofstories.length - 1;
				if (currentindex > 0 && currentindex >= lastitemindex) {
					PGLIB.story.transporter.endofcontentreached = true;
				}
				debuglog("End of content? " + PGLIB.story.transporter.endofcontentreached);
				PGLIB.story.transporter.waitForNewContentToLoad(jsondata, settings);
			},
			waitForNewContentToLoad: function(jsondata, settings) {
				// var currentstorykey = PGLIB.story.transporter.currentstorykey
				var currentindex = PGLIB.story.transporter.currentindex;
				var theid = "pgevoke-story-" + currentindex; // + currentstorykey;
				var theselector = "#" + theid;
				var $thestory = $(theselector);
				debuglog("" + theselector);
				debuglog("Waiting for images to load...");
				// .find("pgevoke-story-toparea-cutout-image

				var t1 = PGFNS.getTimer();
				// $thestory.imagesLoaded( function() {
				setTimeout(function() {
					debuglog("Images for story #" + currentindex + " loaded in " + PGFNS.getElapsedTime(t1) + "ms");
					// debuglog("Images loaded...");
					$thestory.css("display","block");
					_PG._trigger("storyloaded", [{index: currentindex}]);
					$(document).trigger("pgevoke:storyloaded",[{index: currentindex}]); // Used by Krux
					// $thestory.css("opacity","1");
					setTimeout(function() {
						$thestory.attr("data-pg-storyimagesloaded", "1"); // Used for transporter.waypoints addressbar
						$thestory.css("opacity","1");
						PGLIB.story.transporter.setStickySelectors(currentindex);
						// var currentbreakpoint = getResponsiveSize();
						// if (currentbreakpoint === "sm" || currentbreakpoint === "md" || currentbreakpoint === "lg" || currentbreakpoint === "xl") {
						var currentbreakpointgroup = PGLIB.all.breakpoints.getCurrentGroup();
						if (currentbreakpointgroup === "desktop") {
							PGLIB.story.transporter.initializeStickyboxes(currentindex);	
						}
						if (typeof isNativoStory === "undefined" || !isNativoStory) {
							/* if (currentindex === 0) {
								PGLIB.story.transporter.getAuthorInfoInline(currentindex);
							} else {
								PGLIB.story.transporter.getAuthorInfoAJAX(currentindex);	
							} */
							PGLIB.story.transporter.getAuthorInfo(currentindex);
							
							PGLIB.story.transporter.addInlineAdsForMobile(currentindex);
							if (currentindex === 0 ) {
								// COMMENTING OUT NEWSSLIDE FOR NOW
								PGLIB.story.transporter.addNewsSlide(0);
							}
							// ----- Add author key/values for DFP -----
							var theauthor = $thestory.attr("data-pg-storyauthor");
							var theauthororg = $thestory.attr("data-pg-storyauthororg");
							var thestorygroup =  $thestory.attr("data-pg-storygroup");
							var thestorytags = $thestory.attr("data-pg-storytags");
							var $adspots = $thestory.find("[data-dfpads-position]:not('[data-dfpads-initialized]')");
							// debuglog("$adspots!");
							// debuglog($adspots);
							$adspots.each(function(index) {
								// debuglog($(this));
								$(this).attr("data-dfpads-key-author", theauthor);
								$(this).attr("data-dfpads-key-authororg", theauthororg);
								$(this).attr("data-dfpads-key-storygroup", thestorygroup);
								$(this).attr("data-dfpads-key-storytags", thestorytags);
								debuglog("TARGETING these story tags: " + thestorytags);
							});
							DFPADS.cmd(function() {
								DFPADS.createAndDisplayAll(theselector);
							});
							if (currentindex === 0) {
								DFPADS.cmd( function() {
									$("#pg-ads-x51-wrapper [data-dfpads-position]").attr("data-dfpads-key-author", theauthor);
									$("#pg-ads-x51-wrapper [data-dfpads-position]").attr("data-dfpads-key-authororg", theauthororg);
			  						DFPADS.createAndDisplayAll("#pg-ads-x51-wrapper");
			  						// COMMENTING OUT NEWSSLIDE FOR NOW
			  						var newsslideselector = "#pgevoke-story-" + currentindex + " + .pgevoke-story-newsslide";
			  						$(newsslideselector + " [data-dfpads-position]").attr("data-dfpads-key-author", theauthor);
			  						$(newsslideselector + " [data-dfpads-position]").attr("data-dfpads-key-authororg", theauthororg);
			  						DFPADS.createAndDisplayAll(newsslideselector);
								});
							}
							PGLIB.story.transporter.initSwiperGallery(currentindex);
							if (currentindex === 0) {
								PGLIB.story.transporter.getRelatedLinks(currentindex, jsondata);	
								PGLIB.story.transporter.storywaypoints.updateSocialShareLinks("pgevoke-story-0");	
								PGLIB.story.transporter.initFotomoto();
							} else {
								PGLIB.story.transporter.addRelatedLinks(currentindex, jsondata);	
							}
							PGLIB.story.transporter.addTags(currentindex, jsondata);
							PGLIB.story.transporter.loadSTNScript(currentindex);
							PGLIB.story.transporter.activateBPartnersNoticeClick();
							PGLIB.story.transporter.addEmailOptInWidget(currentindex);
							PGLIB.story.transporter.addOfferBox(currentindex);
							PGLIB.story.transporter.addExtraContent(currentindex);
							PGLIB.story.transporter.addCivicScienceInline(currentindex);
							PGLIB.story.transporter.addViafouraTrending(currentindex);
							// PGLIB.story.transporter.addAPWidget(currentindex);
							PGLIB.story.transporter.loadJustAPinchWidget(currentindex);
							// PGLIB.story.transporter.showAPWidget(currentindex); // Disabling 10/23/23
							// if (currentindex === 0) {
								// PGLIB.all.apwidget.show(); // Disabling 10/23/23
							// }
							PGLIB.story.transporter.bindLoginRegisterButtons(currentindex);
							if (issetmulti(PGLIB, "storycomments", "load")) {
								debuglog("Loading comments. The load() function is present");
								if (PGVARS.site !== "blade" || !PGVARS.useviafoura || currentindex === 0) {
									PGLIB.storycomments.load(currentindex);
									// AJAX comments must be loaded when they enter story 	
								}
								
							} else {
								debuglog("Couldn't find load() function. Can't load comments.");
							}
							debuglog("Waiting to process sync loader queue...");
							setTimeout(function() {
								debuglog("Processing sync loader queue...");
								PGLIB.story.syncscriptloader.processQueue();
							}, 1000);
							PGLIB.story.stickyfooter.refreshAll();
							if (currentbreakpointgroup === "desktop") {
								PGLIB.story.lateststories.load();
							}
							if (currentindex === 0) {
								debuglog("Initializing...");
								PGLIB.story.transporter.init();
							} else {
								setTimeout(function() {
									PGLIB.story.transporter.spinner.hide();
									PGLIB.story.transporter.reenable();
								}, 500); // Just building in a little wait time here
							}
						} else {
							debuglog("Nativo: Done loading story template. Running PostRelease.Start()");
							if (typeof PostRelease === "object" && PostRelease !== null && typeof PostRelease.Start === "function") {
								PostRelease.Start();
							}
						}
						setTimeout(function() {
							var kruxresult = PGFNS.fireKruxSnippet();
							debuglog("Krux snippet success? " + kruxresult);
							PGLIB.story.transporter.handleUTM();
						}, 1000);
						/* 	if (typeof isNativoStory === "undefined" || !isNativoStory) {
							}
						} else {
						} */
		 			}, 100); // Give browser time to apply animation CSS
				 // }); // Images loaded
				}, 100);
				/* } */
			},
			loadSTNScript: function(storyindex) {
				if (PGVARS.site !== "pg") { return false; }
				var theid = "pgevoke-story-" + storyindex; // + currentstorykey;
				var theselector = "#" + theid;
				var $thestory = $(theselector);
				var $players = $thestory.find("div[data-stn-player]");
				debuglog("STN count: " + $players.length);
				$.each($players, function() {
					var id = $(this).attr('data-stn-player');
					if (typeof id !== "string") {
						debuglog("STN: Player has no data-stn-player. Removing.");
						$(this).remove();
					} else {
						debuglog($(this));
						debuglog("STN: Found data-stn-player: " + id);
						$(this).html(""); /// Remove &nbsp that CMS inserts
						var s2nplayer = $(this).attr('data-s2n-player');
						if (typeof s2nplayer !== "string") {
							$(this).attr("data-s2n-player", id); // Current attr they use, will switch 	
						}
						var script = document.createElement("script");
						script.setAttribute("async", true);
						script.setAttribute("src", "https://embed.sendtonews.com/player3/embedcode.js?SC=" + id + "&offsetx=0&offsety=0&floatwidth=400&floatposition=bottom-left");
						script.setAttribute("data-type", "s2nScript");
						document.getElementsByTagName("head")[0].appendChild(script);
					}
				});
			},
			getStickyIDs: function(storyindex) {
				var theid = "pgevoke-story-" + storyindex; // + currentstorykey;
				var stickyids = {};
				stickyids.contentarea = theid + "-contentarea";
				stickyids.socialbuttons = theid + "-contentarea-socialbuttons";
				// stickyids.rightrail = theid + " .pgevoke-story-rightrail";
				stickyids.rightrailbox = theid + "-rightrail-stickybox";
				stickyids.rightrailboxbottom = theid + "-rightrail-stickyboxbottom";
				return stickyids;
			},
			setStickySelectors: function(storyindex) {
				var theid = "pgevoke-story-" + storyindex; // + currentstorykey;
				var theselector = "#" + theid;
				var $thestory = $(theselector);
				// ---------------
				var $storycontentarea = $thestory.find(".pgevoke-contentarea");
				var $storysocialbuttons = $thestory.find(".pgevoke-contentarea-socialbuttons");
				var $storyrightrailstickybox = $thestory.find(".pgevoke-story-rightrail-stickybox");
				var $storyrightrailstickyboxbottom = $thestory.find(".pgevoke-story-rightrail-stickyboxbottom");
				var stickyids = PGLIB.story.transporter.getStickyIDs(storyindex);
				// -------------
				/*
				$storybody.attr("data-stickybox-id", theid + "-body");
				$storysocialbuttons.attr("data-stickybox-id", theid + "-socialbuttons");
				$storyrightrailstickybox.attr("data-stickybox-id", theid + "-rightrail-stickybox");
				$storyrightrailstickyboxbottom.attr("data-stickybox-id", theid + "-rightrail-stickyboxbottom");
				*/
				var stickyids = PGLIB.story.transporter.getStickyIDs(storyindex);
				$storycontentarea.attr("data-stickybox-id", stickyids.contentarea);
				$storysocialbuttons.attr("data-stickybox-id", stickyids.socialbuttons);
				$storyrightrailstickybox.attr("data-stickybox-id", stickyids.rightrailbox);
				$storyrightrailstickyboxbottom.attr("data-stickybox-id", stickyids.rightrailboxbottom);
			},
			getStickySelectors: function(storyindex) {
				var theid = "pgevoke-story-" + storyindex; // + currentstorykey;
				var selectors = {};
				selectors.contentarea = Stickyboxes.selector(theid + "-contentarea");
				selectors.socialbuttons = Stickyboxes.selector(theid + "-contentarea-socialbuttons");
				selectors.rightrail = "#" + theid + " .pgevoke-story-rightrail";
				selectors.rightrailbox = Stickyboxes.selector(theid + "-rightrail-stickybox");
				selectors.rightrailboxbottom = Stickyboxes.selector(theid + "-rightrail-stickyboxbottom");
				return selectors;
			},
			initializeStickyboxes: function(storyindex) {
				/* var theid = "pgevoke-story-" + storyindex; // + currentstorykey;
				// var socialselector = "[data-stickybox-id='" + theid + "-socialbuttons']";
				var storybodyselector = Stickyboxes.selector(theid + "-body");
				var socialselector = Stickyboxes.selector(theid + "-socialbuttons");
				var rightrailselector = Stickyboxes.selector(theid + "-rightrail-stickybox");
				var rightrailbottomselector = Stickyboxes.selector(theid + "-rightrail-stickyboxbottom");

				// var storybottomareaselector = "#" + theid + " .pgevoke-story-bottomarea";
				var storyrightrailselector = "#" + theid + " .pgevoke-story-rightrail";
				*/
				var selectors = PGLIB.story.transporter.getStickySelectors(storyindex);
				// -------------
				$(selectors.socialbuttons).stickybox({
					parent: selectors.contentarea,
					offset:70
				});	
				if (typeof isNativoStory === "undefined" || !isNativoStory) {
					$(selectors.rightrailbox).stickybox({
						parent: selectors.righrail,
						offset: 61,
						endPointOffset: 260
					});
				}
				$(selectors.rightrailboxbottom).stickybox({
					parent: selectors.righrail,
					offset: 0,
					dockLocation: "bottom"
				});
			},
			initializeStickyboxesAll: function() {
				var $stories = $(".pgevoke-story[data-pg-storyimagesloaded]");
				if ($stories.length < 1) { return; }
				var storyindex;
				$stories.each(function() {
					storyindex = $(this).attr("data-pg-storyindex") || "";
					if (storyindex !== "") {
						PGLIB.story.transporter.initializeStickyboxes(storyindex);
					}
				});
			},
			killStickyBoxes: function(storyindex) {
				var stickyids = PGLIB.story.transporter.getStickyIDs(storyindex);
				// console.log("stickyids", stickyids);
				// console.log("socialbuttons", stickyids.socialbuttons);
				// console.log("item", Stickyboxes.getItem(stickyids.socialbuttons));
				if (typeof stickyids === "object" && stickyids !== null) {
					if (typeof Stickyboxes.getItem(stickyids.socialbuttons) !== "undefined") {
						Stickyboxes.remove(stickyids.socialbuttons);
					}
					if (typeof Stickyboxes.getItem(stickyids.rightrailbox) !== "undefined") {
						Stickyboxes.remove(stickyids.rightrailbox);
					}
					if (typeof Stickyboxes.getItem(stickyids.rightrailboxbottom) !== "undefined") {
						Stickyboxes.remove(stickyids.rightrailboxbottom);
					}
				}
			},
			killStickyBoxesAll: function() {
				var $stories = $(".pgevoke-story[data-pg-storyimagesloaded]");
				if ($stories.length < 1) { return; }
				var storyindex;
				$stories.each(function() {
					storyindex = $(this).attr("data-pg-storyindex") || "";
					// storyindex = getElementStoryIndex($(this));
					if (storyindex !== "") {
						PGLIB.story.transporter.killStickyBoxes(storyindex);
					}
				});
			},
			addExtraContent: function(storyindex) {
				var storyid = "pgevoke-story-" + storyindex;
				// ------- Check for Nativo -------
				var param1 = PGFNS.getParam1(window.location.href);
				if (param1 === "sponsored") {
					$("#" + storyid + " .pgevoke-story-extracontent").empty();
					return;
				}
				// ------- Flipp ------
				if (PGVARS.site === "blade" && storyindex === 0) {
					debuglog("FLIPP: ON for this page");
					(function() {
						var script = document.createElement("script");
						script.setAttribute("async", true);
						script.setAttribute("src", "https://cdn-gateflipp.flippback.com/tag/js/flipptag.js?site_id=1244327");
						// script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
						console.log("FLIPP: Running flipptag.js script");
						document.getElementsByTagName("head")[0].appendChild(script);
					})();
					window.flippxp = window.flippxp || {run: []};
					window.flippxp.run.push(function() {
						console.log("FLIPP: Running registerSlot() function");
						window.flippxp.registerSlot("#flipp-ux-slot-f83ndy", "TheBlade ", 1244327, [ 286227 ]);
					});	
				} else {
					debuglog("FLIPP: OFF for this page");
				}
				// ------- Add extra content - Trending ------
				var targetselector = "#" + storyid + " .pgevoke-story-extracontent-trending";
				var $target = $("#" + storyid + " .pgevoke-story-extracontent-trending");
				var targetstickyid = storyid + "-extracontent-mustread-newspack";
				$(targetselector).loadAjaxContent({
					"endpoint": "pgpageapi.trending",
					"template": "#pgevoke-_tpl-recommended",
					"count": 5,
					"endfunction": null
				});
				// ----- B Partners widget (Blade only) -----
				if (PGVARS.site === "blade" && storyindex === 0 && !PGVARS.usenativo) {
					debuglog("Setting up B Partners Widget", bpselector);
					var bpselector = "#" + storyid + " .pgevoke-story-extracontent-bpartners";
					var targetselector = bpselector + " .pgevoke-newspack";
					$(targetselector).loadAjaxContent({
						"endpoint": "pgpageapi.bpartnerswidget",
						"template": "#pgevoke-_tpl-newspack",
						"count": 3
					});
					$(bpselector).css("display", "block");
				} else {
					debuglog("Skipping B Parnters widget");
				}
				// if (PGVARS.site === "pg" && storyindex === 0) {
				if (PGVARS.usenativo && storyindex === 0) {
					// Note: It says pgDISABLED above so that this is never run
					// Disabled on April 3, 2020 per Brian
					debuglog("Loading Nativo because usenativo is true");
					var targetselector = "#" + storyid + " .pgevoke-story-extracontent-nativo";
					debuglog("Setting up Naitvo Widget");
					debuglog(targetselector);
					debuglog($(targetselector).length);
					// var targetselector = nativoselector + " .pgevoke-newspack";
					$(targetselector).loadAjaxContent({
						"template": "newspack-pluswrapper-nativo",
						"processfunction": "simple",
						"jsondata": {
							"nativonamespace": "storypage-" + (storyindex + 1)
						}
					});
					// $(targetselector).css("display", "block");
					if (typeof PostRelease === "object" && PostRelease !== null && typeof PostRelease.Start === "function") {
						// PostRelease.Start(); // Load Nativo
						// Changing this to scroll trigger implementation
					}
				} else {
					debuglog("Skipping Nativo widget " + PGVARS.site + " " + storyindex);
				}
				// ----- Must Read -----
				var mustreadselector = "#" + storyid + " .pgevoke-story-extracontent-mustread";
				var targetselector = mustreadselector + " .pgevoke-newspack";
				var endpoint = "pgpageapi.mustread";
				$(targetselector).loadAjaxContent({
					"endpoint": endpoint,
					"template": "#pgevoke-_tpl-newspack",
					"count": 3,
				});
			},
			addTags: function(storyindex, storyjsondata) {
				if (PGVARS.site !== "pg") { return false; }
				// if (PGVARS.sitecode === "LIVE") { return false; }
				debuglog("Adding tags");
				// var storyid = "pgevoke-story-" + storyindex;
				// var $target = $("#" + storyid + " .pgevoke-story-related-links");
				// if ($target.length !== 1) { return false; }
				if (typeof storyjsondata !== "object") { return false; }
				debuglog("Passed tagas obj checks");
				debuglog(storyjsondata);
				var tags;
				if (issetmulti(storyjsondata, "articles", "0", "tags")) {
					debuglog("Found tags: ");
					tags = storyjsondata.articles[0].tags;
					debuglog(tags);

				} else {
					debuglog("Couldn't find tags");
				}
				if (typeof tags !== "object" || !Array.isArray(tags) || tags.length === 0) {
					debuglog("Tags object found, but there are no tags. Exiting.");
					return false;
				}
				var storyid = "pgevoke-story-" + storyindex;
				var $target = $("#" + storyid + " .pgevoke-contentarea-body-text");
				$target.append("<div class='pgevoke-story-tags'></div>");
				$target = $("#" + storyid + " .pgevoke-story-tags");
				// $target.append("<div class='pgevoke-story-tags-preface'>Tags: </div>");
				$target.append("<ul></ul>");
				$target.find("ul").append($("<li>Tags: </li>"));
				// $target.append($("<div class='pgevoke-story-tags-text'>Tags: </div><ul></ul>"));
				$.each(tags, function(i, item) {
					var $target = $("#" + storyid + " .pgevoke-story-tags ul");
					debuglog(i);
					debuglog(item);
					if (typeof item.name === "string" && typeof item.seoKey === "string") {
						// var tagslug = item.name;
						// tagslug = tagslug.replaceAll(" ", "-");
						// tagslug = tagslug.toLowerCase();
						debuglog("Adding tag: " + item.name + " (" + item.seoKey + ")");
						// var $element = $("<li><a href='/tag/" + tagslug + "'>" + tagname + "</a></li>");
						var $element = $("<li class='pgevoke-story-tags-item'><a href='/tag/" + item.seoKey + "'>" + item.name + "</a></li>");
						$target.append($element);
					}
				});
				/*
				$target.loadAjaxContent({
					"template": "story-related",
					"jsondata": storyjsondata,
					"endfunction": function() {
						setTimeout(function() {
							PGLIB.story.transporter.moveRelatedLinks(storyindex);
						}, 50);
					}
				});
				*/
			},
			activateBPartnersNoticeClick: function() {
				if (PGVARS.site !== "blade") { return false; }
				$(document).on("click", ".pgevoke-story-bpartnersnotice-morebutton", function() {
					var $text = $(".pgevoke-story-bpartnersnotice-moretext");
					var $button = $(".pgevoke-story-bpartnersnotice-morebutton");
					if ($text.css("display") !== "inline") {
						$text.css("display", "inline");
						$button.html("(Show Less)");
					} else {
						$text.css("display", "none");
						$button.html("(Read More)");
					}
				});
			},
			addNewsSlide: function(index) {
				// pgevoke-grid-row-full
				if (PGVARS.site === "blade" && PGVARS.sitecode !== "LIVE") { return false; }
				debuglog("Newsslide position disabled");
				return false; // Disabling for both sides on 4/11/24 per Benjamin
				debuglog("Attempting to add NewsSlide");
				var $thestory = $("#pgevoke-story-" + index);
				var adsection = $thestory.attr("data-pg-storyadsection") || "";
				if (adsection === "") {
					debuglog("Couldn't add NewsSlide. No adsecton found.");
					return;
				}
				if (adsection === "nate" || PGVARS.sitecode === "DEV" || PGVARS.sitecode === "MDEV") { adsection = "adtest"; }
				var newsslide = "";
				newsslide += "<div class='pgevoke-story-newsslide'>";
				newsslide += "<div class='pgevoke-story-newsslide-inner'>";
				// newsslide += "<div data-dfpads-position='NEWSSLIDE' data-dfpads-adsection='" + adsection + "'>"; //adsection
				// newsslide += "<div class='pg-adtarget pg-adwrapper-964x768' style='margin:0 auto'></div>";
				// newsslide += "</div>";
				var adslotstringfluid = DFPADS.getAdSlotString({
					"position": "NATIVESTORIES",
					"adsection": adsection
				});
				var adslotstringdesktop = DFPADS.getAdSlotString({
					"position": "NEWSSLIDE",
					"adsection": adsection
				});
				var adslotstringmobile = DFPADS.getAdSlotString({
					"position": "NEWSSLIDEMOBILE",
					"adsection": adsection
				});
				if (adslotstringdesktop) {
					newsslide += "<div class='pg-hidden-mobile'>";
					newsslide += adslotstringdesktop;
					newsslide += "</div>";
				}
				newsslide += "</div>"; // .pgevoke-story-newsslide-inner
				if (adslotstringmobile) {
					newsslide += "<div class='pg-hidden-desktop'>";
					newsslide += adslotstringmobile;
					newsslide += "</div>";
				}
				if (PGVARS.sitecode === "DEV" && adslotstringfluid) {
					newsslide += "<div class='pg-hidden-desktop'>";
					newsslide += adslotstringfluid;
					newsslide += "</div>";
				}
				newsslide += "</div>"; // .pgevoke-story-newsslide
				$thestory.after($(newsslide));

			},
			addEmailOptInWidget: function(storyindex) {
				debuglog("addEmailOptInWidget() called");
				if (PGVARS.site !== "blade")  { return false; }
				if (parseInt(storyindex) > 3) { return false; }
				var piano_emailwidgets = [];
				if (PGVARS.pianosandbox) {
					piano_emailwidgets = [
						"1591247383265",
						"1592320390064",
						"1594241310146",
						"1594241367061"
					];
				} else {
					piano_emailwidgets = [
						"1597338393743",
						"1597345194660",
						"1597345285844",
						"1597345354109"
					];
				} 
				debuglog("addEmailOptInWidget() passed checks");
				debuglog(piano_emailwidgets);
				var emailwidgetid = piano_emailwidgets[storyindex];
				debuglog("emailwidgetid: " + emailwidgetid);
				var $thestory = $("#pgevoke-story-" + storyindex);
				var $target = $thestory.find(".pgevoke-piano-opt-in-1");
				debuglog("Count: " + $target.length);
				$target.append('<pnespwgtplaceholder holdername="embedded_' + emailwidgetid + '"></pnespwgtplaceholder>');
				
			},
			initSwiperGallery: function(index) {
				debuglog("Initializing Swiper Gallery for story #" + index);
				PGLIB.story.swiper.initstory(index);
			},
			loadFotomotoScript: function() {
				debuglog("FOTOMOTO: loadFotomotoScript() called");
				if (THISMODULE.fotomotoScriptLoaded) { return false; } // Already loaded
				if (typeof FOTOMOTO !== "undefined") { return false; } // Already loaded
				debuglog("FOTOMOTO: Not yet loaded. Loading.");
				$.ajax({
					url: "https://widget.fotomoto.com/stores/script/029f7004c363ccdb3887bf55a143379174275306.js?api=true",
					dataType: "script",
					success: function() {
						debuglog("FOTOMOTO: Successfully loaded script");
						THISMODULE.fotomotoScriptLoaded = true;
						THISMODULE.updateFotomotoCartStatus();
						window.fotomoto_widget_closed = function() {
							THISMODULE.updateFotomotoCartStatus();
						};
					}
				});
			},
			initFotomoto: function() {
				if (!PGVARS.usefotomoto) { return false; }
				// See if they potentially have something in their cart already
				if (localStorage.getItem(fotomotoLocalStorageKey) === "1") {
					debuglog("FOTOMOTO: Storage key found. Initilaizing early.");
					console.log(THISMODULE);
					PGLIB.story.transporter.loadFotomotoScript();
				} else {
					debuglog("FOTOMOTO: No storage key found. Waiting until gallery is opened to load script.");
				}
				$(document).on("click", ".swiper-slide-buylink", function() {
					console.log("FOTOMOTO: User clicked Buy button");
					var webImageUrl = $(this).attr("data-fotomoto-weburl");
					var printImageUrl = $(this).attr("data-fotomoto-printurl");
					var storyurl = $(this).attr("data-fotomoto-storyurl");
					// fotomoto_loaded is a special function that runs when the script is ready
					// window.fotomoto_loaded = function() {
					// console.log("FOTOMOTO LOADED!!!");
					var storeID = "029f7004c363ccdb3887bf55a143379174275306";
					var checkinUrl = 'https://widget.fotomoto.com/stores/photo_checkin';
					var images = [];
					images.push({
						img: webImageUrl,
						original_image_url: printImageUrl,
						collection: ''
					});
					$.post(checkinUrl, { store_key: storeID, page_url: storyurl, imgs: images}, function(data) { console.log(data); }, 'json');
					FOTOMOTO.API.checkinImages(images, function(images) {
						$.magnificPopup.close();
						FOTOMOTO.API.showWindow(FOTOMOTO.API.BUY, webImageUrl);
						localStorage.setItem(fotomotoLocalStorageKey, "1");
					});
					// }
				});
			},
			updateFotomotoCartStatus: function() {
				debuglog("FOTOMOTO: updateFotomotoCartStatus() called");
				console.log(localStorage.getItem(fotomotoLocalStorageKey));
				if (localStorage.getItem(fotomotoLocalStorageKey) === "1") {
					debuglog("FOTOMOTO: Key found");
					// console.log(FOTOMOTO);
					if (typeof FOTOMOTO !== "undefined" && typeof FOTOMOTO.API === "object") {
						if (FOTOMOTO.API.isBasketEmpty()) {
							debuglog("FOTOMOTO: Basket is Empty. Removing local storage key");
							localStorage.removeItem(fotomotoLocalStorageKey);
						} else {
							debuglog("FOTOMOTO: Basket has items. Retaining key");
						}
					} else {
						debuglog("FOTOMOTO: No FOTOMOTO.API. Waiting for fotomoto_cart_loaded");
						window.fotomoto_cart_loaded = function() {
							debuglog("FOTOMOTO: fotomoto_cart_loaded() called!");
							if (FOTOMOTO.API.isBasketEmpty()) {
								debuglog("FOTOMOTO: Total items: " + FOTOMOTO.API.getTotalItems());
								debuglog("FOTOMOTO: Basket is Empty. Removing local storage key");
								localStorage.removeItem(fotomotoLocalStorageKey);
							} else {
								debuglog("FOTOMOTO: Basket has items. Retaining key");
							}
						}
											}
				}
			},
			processAPIOrg: function(apiorg) {
				// Backwards compatibility for old Blade articles
				debuglog("AUTHOR API: processAPIOrg('" + apiorg + "') called");
				var apiorgupper = apiorg.toUpperCase();
				if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
					if (apiorgupper.substr(0, 6) === "BLADE ") {
						debuglog("Author API: Replacing apiorg '" + apiorg + "' with 'theblade'");
						apiorg = "theblade";
					}
				}
				debuglog("AUTHOR API: Result: " + apiorg);
				return apiorg;
			},
			getAuthorAPIValues: function(byline) {
				debuglog("getAuthorAPIValues() called for " + byline);
				var values = {}
				byline = byline.trim();
				byline = byline.replace(/\n/, " / ");
				var bylinearray = byline.split(/\s?\/\s?(.+$)/);
				values["bylinestr1"] = bylinearray[0].trim();
				values["bylinestr2"] = (typeof bylinearray[1] !== "undefined") ? bylinearray[1].trim() : "";
				// ------- Format for API ------
				if (values["bylinestr2"] === "") {
					values["apiorg"] = values["bylinestr1"];
					values["apiauthor"] = "default";
				} else {
					values["apiorg"] = values["bylinestr2"];
					values["apiauthor"] = values["bylinestr1"];
				}
				values["apiorg"] = PGLIB.story.transporter.processAPIOrg(values["apiorg"]);
				values["apiorg"] = values["apiorg"].replace(/[^a-zA-Z]/g, "");
				values["apiorg"] = values["apiorg"].toLowerCase();
				debuglog(values["apiauthor"]);
				values["apiauthor"] = values["apiauthor"].toLowerCase();
				debuglog(values["apiauthor"]);
				values["apiauthor"] = values["apiauthor"].replaceAll("í", "i");
				values["apiauthor"] = values["apiauthor"].replace(/[^a-zA-Z]/g, "");
				debuglog(values);
				return values;
			},
			getAuthorInfo: function(index) {
				var storyselector = "#pgevoke-story-" + index;
				var $thestory = $(storyselector);
				var bylineselector = storyselector + " .pgevoke-story-byline";
				debuglog("AUTHOR API: getAuthorInfo() is processing byline: '" + bylineselector + "'");
				// ------- Make sure we can find the byline element -------
				var $byline = $(bylineselector);
				if ($byline.length < 1) {
					debuglog("AUTHOR API: Couldn't find $byline element");
					return;
				}
				// ------- Make sure there is a byline -------
				var byline = $byline.attr("data-pg-storybyline") || "";
				if (byline === "") {
					debuglog("AUTHOR API: No data-pg-storybyline. Can't process.");
					return; 
				}
				// ------- Trim & split byline, get values -----
				var apivalues = PGLIB.story.transporter.getAuthorAPIValues(byline);
				debuglog("AUTHOR API: apivalues...");
				debuglog(apivalues); // test
				var bylinestr1 = apivalues.bylinestr1;
				var bylinestr2 = apivalues.bylinestr2;
				var apiorg = apivalues.apiorg;
				var apiauthor = apivalues.apiauthor;
				// ------ Fill lines 1 & 2 -----
				$byline.find(".pgevoke-story-byline-line1").html(bylinestr1);
				$byline.find(".pgevoke-story-byline-line2").html(bylinestr2);
				// ------- Send tracking event -------
				_PG._trigger("pgtransporter:authorloaded", {
					'apiorg':apiorg,
					'apiauthor':apiauthor
				});
				// ------- Add data to story wrapper -------
				$thestory.attr("data-pg-storyauthor", apiauthor);
				$thestory.attr("data-pg-storyauthororg", apiorg);
				// ------ Get the actual data
				if (index === 0 && typeof PGPAGEDATA === "object" && PGPAGEDATA !== null && issetmulti(PGPAGEDATA, "authorapi")) {
						debuglog("AUTHOR API: Found PGPAGEDATA['authorapi']. Using this inline data (no AJAX call needed).");
						PGLIB.story.transporter.addAuthorInfo(index, PGPAGEDATA.authorapi);
				} else {
					// ------- AJAX request to API -------
					debuglog("AUTHOR API: Index > 0, or no inline data found. Sending AJAX Request to " + PGAPIBaseURL + "/extra/1/author/" + apiorg + "/" + apiauthor + "/");
					$.ajax(PGAPIBaseURL + "/extra/1/author/" + apiorg + "/" + apiauthor + "/", {
						dataType:"json"
					})
					.done(function(jsondata) {
						debuglog("AUTHOR API: AJAX request successful. Returned data...");
						debuglog(jsondata);
						debuglog("Sending to PGLIB.story.transporter.addAuthorInfo()");
						PGLIB.story.transporter.addAuthorInfo(index, jsondata);
					});
				}
			},
			/*
			getAuthorInfoInline: function(index) {
				debuglog("Called getAuthorInfoInline");
				var storyselector = "#pgevoke-story-" + index;
				var $thestory = $(storyselector);
				var bylineselector = storyselector + " .pgevoke-story-byline";
				debuglog("AUTHOR API: Processin byline: '" + bylineselector + "'");
				// ------- Make sure we can find the byline element -------
				var $byline = $(bylineselector);
				if ($byline.length < 1) {
					debuglog("AUTHOR API: Couldn't find $byline element");
					return;
				}
				// ------- Make sure there is a byline -------
				var byline = $byline.attr("data-pg-storybyline") || "";
				if (byline === "") {
					debuglog("AUTHOR API: No data-pg-storybyline. Can't process.");
					return; 
				}
				// ------- Trim & split byline, get values -----
				var apivalues = PGLIB.story.transporter.getAuthorAPIValues(byline);
				var bylinestr1 = apivalues.bylinestr1;
				var bylinestr2 = apivalues.bylinestr2;
				var apiorg = apivalues.apiorg;
				var apiauthor = apivalues.apiauthor;
				// ------ Fill lines 1 & 2
				$byline.find(".pgevoke-story-byline-line1").html(bylinestr1);
				$byline.find(".pgevoke-story-byline-line2").html(bylinestr2);
				// ---- Get API data and use -----	
				if (index === 0) {
					if (typeof PGPAGEDATA === "object" && PGPAGEDATA !== null) {
						debuglog("Found PGPAGEDATA");
						if (issetmulti(PGPAGEDATA, "authorapi")) {
							debuglog("Found authorAPI");
							PGLIB.story.transporter.addAuthorInfo(index, PGPAGEDATA.authorapi);
						}
					}
				} else {
					// Don't think this block is ever used as of 7/10/2018
					var theobj = {};
					theobj.storyselector = "#pgevoke-story-" + index;
					theobj.$thestory = $(theobj.storyselector);
					theobj.bylineselector = theobj.storyselector + " .pgevoke-story-byline";
					theobj.$byline = $(theobj.bylineselector);	
					$.ajax(PGAPIBaseURL + "/extra/1/author/" + apiorg + "/" + apiauthor + "/", {
						dataType:"json"
					})
					.done(function(jsondata) {
					});
				}
			},
			getAuthorInfoAJAX: function(index) {
				var storyselector = "#pgevoke-story-" + index;
				var $thestory = $(storyselector);
				var bylineselector = storyselector + " .pgevoke-story-byline";
				debuglog("AUTHOR API: Processin byline: '" + bylineselector + "'");
				var $byline = $(bylineselector);
				// ------- Make sure we can find the byline element -------
				if ($byline.length < 1) {
					debuglog("AUTHOR API: Couldn't find $byline element");
					return;
				}
				// ------- Make sure there is a byline -------
				var byline = $byline.attr("data-pg-storybyline") || "";
				if (byline === "") {
					debuglog("AUTHOR API: No data-pg-storybyline. Can't process.");
					return; 
				}
				// ------- Send tracking event -------
				_PG._trigger("pgtransporter:authorloaded", {
					'apiorg':apiorg,
					'apiauthor':apiauthor
				});
				// ------- Add data to story wrapper -------
				$thestory.attr("data-pg-storyauthor", apiauthor);
				$thestory.attr("data-pg-storyauthororg", apiorg);
				// ------- AJAX request to API -------
				debuglog("AUTHOR API: Sending AJAX Request to " + PGAPIBaseURL + "/extra/1/author/" + apiorg + "/" + apiauthor + "/");
				$.ajax(PGAPIBaseURL + "/extra/1/author/" + apiorg + "/" + apiauthor + "/", {
					dataType:"json"
				})
				.done(function(jsondata) {
					debuglog("AUTHOR API: AJAX request successful. Returned data...");
					debuglog(jsondata);
					debuglog("Sending to PGLIB.story.transporter.addAuthorInfo()");
					PGLIB.story.transporter.addAuthorInfo(index, jsondata);
				});
			}, */
			addAuthorInfo: function(index, jsondata) {
				debuglog("called addAuthorInfo()");
				var author, apiorg, apiauthor;
				var storyselector = "#pgevoke-story-" + index;
				var $thestory = $(storyselector);
				var bylineselector = storyselector + " .pgevoke-story-byline";
				debuglog("AUTHOR API: Processin byline: '" + bylineselector + "'");
				var $byline = $(bylineselector);
				// ------- Make sure we can find the byline element -------
				if ($byline.length < 1) {
					debuglog("AUTHOR API: NEW Couldn't find $byline element");
					return;
				}
				if (typeof jsondata.status !== "undefined" && jsondata.status === "ok" && typeof jsondata.author === "object") {
					debuglog(jsondata);
					author = jsondata.author;
					apiauthor = jsondata.apiauthor;
					apiorg = jsondata.apiorg;
					author.hasname = (apiauthor !== "default" && typeof author.org === "string" && author.org !== "");
					author.hascustomtitle = (typeof author.customTitle === "string" && author.customTitle !== "");
					author.isverified = (typeof author.verified !== "undefined" && author.verified === true);
					if (author.hasname) { // The author isn't just an organization like "Post-Gazette"
						if (author.hascustomtitle) {
							debuglog("author.hascutomtitle === true");
							debuglog("'" + author.customTitle + "'");
							$byline.find(".pgevoke-story-byline-line2").html(author.customTitle);
						} else {
							debuglog("author.hascutomtitle === false");
							$byline.find(".pgevoke-story-byline-line2").html(author.org);	
						}
					} else {
						debuglog("It's an ORG");
						if (author.hascustomtitle) {
							debuglog("author.hascutomtitle === true");
							debuglog("'" + author.customTitle + "'");
							$byline.find(".pgevoke-story-byline-line2").html(author.customTitle);
						}
					}
					author.hasblurb = (typeof author.blurb === "string" && author.blurb !== "");
					author.blurb = (author.hasblurb) ? author.blurb : "";
					author.hasemail = (typeof author.email === "string" && author.email !== "");
					if (author.hasemail) {
						var $line3 = $byline.find(".pgevoke-story-byline-line3");
						$line3.html("<span class='pgevoke-story-byline-email'><a href='mailto:" + author.email + "'>" + author.email + "</span>");
						if (typeof author.twitter === "string" && author.twitter !== "") {
							$line3.append("<a href='https://www.twitter.com/" + author.twitter.replace("@","") + "' class='pgevoke-story-byline-twittericon' target='_blank'><span class='icon icon-x-twitter'></span></a>");
						}
					}
					author.hasphone = (typeof author.phone === "string" && author.phone !== "");
					if (author.hasphone) {
						debuglog("Phone number found: " + author.phone);
						// var $line4 = $byline.find(".pgevoke-story-byline-line4");
						// $line4.html("<span class='pgevoke-story-byline-email'><a href='mailto:" + author.email + "'>" + author.email + "</span>");
					}
					if (author.isverified) {
						$byline.addClass("pgevoke-story-byline-verified");
						$byline.find(".pgevoke-story-byline-line1").append("<span class='icon icon-check-square pgevoke-story-byline-verifiedcheck'></span>");
					}
					author.hasheadshotimage = (author.isverified && (typeof author.image === "string" && author.image !== "")); // No headshot for unverified authors (such as people who have left the PG)
					author.hasorgimage = (typeof author.orgimage === "string" && author.orgimage !== "");
					author.hasimage = (author.hasheadshotimage || author.hasorgimage);
					var $authorimagewrapper = $byline.find(".pgevoke-story-byline-authorimage");
					if (author.hasimage) {
						if (author.hasheadshotimage) {
							$authorimagewrapper.html("<img src='" + author.image + "' alt='Photo of " + author.firstName + " " + author.lastName + "'>");
						} else {
							$authorimagewrapper.html("<img src='" + author.orgimage + "' alt='" + author.org + " logo'>");
							$byline.addClass("pgevoke-story-byline-centerimage");
							if (!author.isverified) {}
						}
						$byline.addClass("pgevoke-story-byline-hasimage");
					}
					if ((author.hasname || author.hascustomtitle) && author.hasemail) {
						$byline.addClass("pgevoke-story-byline-smallerfont");	
					}
					if (PGVARS.site === "blade" && author.hasname && author.isverified) {
						/*
						var $fbox = $thestory.find(".pgevoke-story-authorfollowbox");
						debuglog("FBOX length: " + $fbox.length);
						debuglog($fbox);
						debuglog("fullName: " + author.fullName);
						debuglog("authorSlug: " + author.authorSlug);
						// debuglog($('<div class="viafoura"><vf-topic-follow topic-id="' + author.authorSlug + '" topic-name="' + author.fullName + '" topic-type="topic" show-count="true" minimum-count="0"></vf-topic-follow></div>'));
						$fbox.append('<div class="viafoura"><vf-topic-follow topic-id="' + author.authorSlug + '" topic-name="' + author.fullName + '" topic-type="Author" show-count="true" minimum-count="0"></vf-topic-follow></div>');
						*/
					} else {
						debuglog("Couldn't add VF Author follow box");
					}
					// $authorimagewrapper.html("<img src='<%CDN%>/images/pgmisc/pg-logo-100x100.png" + "'>");
					// if (PGVARS.site === "blade" && author.hasname && author.isverified) {
					if (author.hasname && author.isverified) {
						debuglog("Preparing to call addAuthorFollowBox");
						debuglog(THISMODULE);
						var theobj = {};
						theobj.imageurl = (author.hasheadshotimage) ? author.image : author.orgimage;
						theobj.authorname = author.fullName;
						theobj.authorslug = author.authorSlug;
						theobj.$thestory = $thestory;
						theobj.authorhasemail = author.hasemail;
						theobj.authoremail = (author.hasemail) ? author.email : "";
						theobj.authorhastwitter = (typeof author.twitter === "string" && author.twitter !== "");
						theobj.authorhasheadshotimage = (author.hasheadshotimage) ? "1" : "0";
						theobj.authortwitter = (theobj.authorhastwitter) ? author.twitter  : "";
						theobj.authortext = "";
						theobj.authorcontact = "";
						if (PGVARS.site === "pg") {
							debuglog("BLURB?");
							debuglog(author.hasblurb);
							debuglog(author.blurb)
							if (theobj.authorhasemail) {
								// theobj.authortext += "<b>" + theobj.authorname + "</b> is a writer for the Pittsburgh Post-Gazette. Email: <a href='mailto:" + author.email + "'>" + author.email + "</a>.";
								theobj.authortext += "<b>" + theobj.authorname + "</b> ";
								theobj.authortext += (author.hasblurb) ? author.blurb : defaultAuthorBlurb;
								// theobj.authorcontact += "<div class='pgevoke-story-authorfollow-authorcontact'>"
								theobj.authorcontact += "<span class='icon icon-envelope'></span>&nbsp;&nbsp;<a href='mailto:" + author.email + "'>" + author.email + "</a>";
								if (theobj.authorhastwitter) {
									theobj.authorcontact += "<br><span class='icon icon-x-twitter'></span>&nbsp;&nbsp;<a href='https://x.com/" + theobj.authortwitter + "'>@" + theobj.authortwitter + "</a>"; 
								}
								// theobj.authorcontact += "</div>"
							}
							theobj.blurbchars = author.blurb.length;
							theobj.blurblength = (theobj.blurbchars < 100) ? "short" : "long"
							theobj.blurblength = (theobj.blurbchars < 60) ? "extrashort" : theobj.blurblength;
						}
						PGLIB.story.transporter.addAuthorFollowBox(theobj);	
					} else  {
						debuglog("Not calling addAuthorFollowBox");
						$thestory.find(".pgevoke-story-authorfollowbox").css("display", "none");
					}
				}
				$byline.addClass("pgevoke-story-byline-doneloadingapi");
				if (typeof author === "object" && author.hasimage) {
					$authorimagewrapper.imagesLoaded(function() {
						$byline.addClass("pgevoke-story-byline-doneloadingimage"); // Show byline		
					});
				} else {
					// $byline.addClass("pgevoke-story-byline-doneloading"); // Show byline
				}
			},
			addAuthorFollowBox: function(theobj) {
				// if (PGVARS.site === "pg" && PGVARS.sitecode === "LIVE") { return false; }
				debuglog("addAuthorFollowBox called");
				debuglog(theobj);
				var $target = theobj.$thestory.find(".pgevoke-story-authorfollowbox");
				debuglog($target);
				debuglog($target.length);
				var tpl = "authorfollow";
				tpl += (PGVARS.site === "pg") ? "pg" : "vf";
				$target.attr("data-blurblength", theobj.blurblength);
				$target.attr("data-hasheadshotimage", theobj.authorhasheadshotimage);
				$target.loadAjaxContent({
					"template": tpl,
					"jsondata": theobj,
					"processfunction": "simple",
					"endfunction": function() {
						$target.css("display", "block");
					}
				});
			},
			addInlineAdsForMobile: function(storyindex) {
				debuglog("Running addInlineAdsForMobile()");
				var storyid = "pgevoke-story-" + storyindex;
				var $story = $("#" + storyid);
				var $bodytext = $("#" + storyid + " .pgevoke-contentarea-body-text");
				var $paragraphs = $bodytext.find("> p");
				var adsection = $story.attr("data-pg-storyadsection") || "";
				if (adsection === "") {
					debuglog("Story #" + storyid + " has no data-pg-storyadsection! Cannot ad mobile ads.");
					return;
				} else {
					debuglog("Story #" + storyid + " adsection is " + adsection);
				}
				var ad1 = "";
				// if (PGVARS.site === "blade") {
					ad1 += '<div class="pgevoke-story-inlinead pg-hidden-desktop">';
					ad1 += DFPADS.getAdSlotString({
						"position": "REVEAL",
						"adsection": adsection
					});
					ad1 += '</div>';
				// } else {
				//	ad1 += '<div class="pgevoke-story-inlinead pg-hidden-desktop">';
				//	ad1 += '<div data-dfpads-position="X04" data-dfpads-adsection="' + adsection + '">';
				//	ad1 += '<div class="center small upper graytext" style="font-family:proxima-nova,sans-serif">Advertisement</div>';
				//	ad1 += '<div class="pg-adtarget pg-adwrapper-300x250"></div>';
				//	ad1 += '</div>';
				//	ad1 += '</div>';
				// }
				var paracount = $paragraphs.length;
				debuglog("PARACOUNT: " + paracount);
				if (paracount === 0) { return; }
				if (paracount <= 3) {
					$($paragraphs[(paracount-1)]).after($(ad1));
					return;
				}
				// Testpage -- can ultimately remove
				if (PGVARS.site === "pg" && PGVARS.sitecode !== "LIVE" && window.location.pathname === "/testpage") {
					debuglog("Swapping ad1");
					ad1 = "";
					ad1 += '<div class="pgevoke-story-inlinead pg-hidden-desktop">';
					ad1 += '<div class="center small upper graytext" style="font-family:proxima-nova,sans-serif">Advertisement</div>';
					ad1 += '<a href="https://newsinteractive.post-gazette.com"><img src="https://814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com/images/pgsections/testpage/gametrac-300x600.gif"></a>';
					ad1 += '</div>'; 
				}
				// Testpage end
				$($paragraphs[2]).after($(ad1));
				var ad2 = "";
				ad2 += '<div class="pgevoke-story-inlinead pg-hidden-desktop">';
				/*
				ad2 += '<div data-dfpads-position="X03" data-dfpads-adsection="' + adsection + '">';
				ad2 += '<div class="center small upper graytext" style="font-family:proxima-nova,sans-serif">Advertisement</div>';
				ad2 += '<div class="pg-adtarget pg-adwrapper-300x204"></div>';
				ad2 += '</div>';
				*/
				ad2 += DFPADS.getAdSlotString({
						"position": "X03",
						"adsection": adsection
					});
				ad2 += '</div>';
				// Testpage -- can ultimately remove
				if (PGVARS.site === "pg" && PGVARS.sitecode !== "LIVE" && window.location.pathname === "/testpage") {
					debuglog("Swapping ad2");
					ad2 = "";
					ad2 += '<div class="pgevoke-story-inlinead pg-hidden-desktop">';
					ad2 += '<div class="center small upper graytext" style="font-family:proxima-nova,sans-serif">Advertisement</div>';
					ad2 += '<a href="https://newsinteractive.post-gazette.com"><img src="https://814824ac51e64b4abcaa-cffb1f8b6941251295ee20eefbd7d321.ssl.cf2.rackcdn.com/images/pgsections/testpage/gametrac-300x600.gif"></a>';
					ad2 += '</div>';
				}
				// Testpage end
				if (paracount <= 7) {
					$($paragraphs[(paracount-1)]).after($(ad2));
					return;
				}
				$($paragraphs[6]).after($(ad2));
			},
			getRelatedLinks: function(storyindex) {
				// Used by story-0 only
				debuglog("getRelatedLinks called for story #" + storyindex);
				var thestoryid;
				// if (index === 0 && typeof PGPAGEDATA === "object" && PGPAGEDATA !== null && issetmulti(PGPAGEDATA, "authorapi")) {
				var storydata = pgStoryZeroJSON.articles[0];
				if (storyindex === 0 && issetmulti(storydata, "related", "links") && Array.isArray(storydata.related.links)) {
					debuglog("Found related links in pgStoryZeroJSON. Using those.");
					PGLIB.story.transporter.addRelatedLinks(0, pgStoryZeroJSON);
					PGLIB.story.transporter.loadedStoryZeroDataFromAPI = true;
					$(document).trigger("pgevoke:loadedStoryZeroDataFromAPI");
				} else {
					debuglog("Could not find related links in pgStoryZeroJSON. Making AJAX request.");
					if (storyindex === 0) {
						debuglog("First story");
						thestoryid = pgStoryZeroJSON.articles[0].storyID;
						debuglog("ID: " + thestoryid);
					} else  {
						thestoryid = PGLIB.story.transporter.arrayofstories[storyindex].storyID;	
					}				
					var endpoint = PGAPIBaseURL + "/top/2/article/" + thestoryid + "/";
					$.ajax(endpoint, {
						dataType:"json"
					})
					.done(function(jsondata) {
						debuglog("Done fetching related links (v2)");
						debuglog(jsondata);
						if (issetmulti(jsondata, "articles", "0", "related", "links") && jsondata.articles[0].related.links.length > 0) {
							pgStoryZeroJSON.articles[0].related.links = jsondata.articles[0].related.links;
							// jsondata = PGLIB.story.transporter.filterRelatedLinks(jsondata);
							// *** MOVED INTO addRelatdLinks func
							PGLIB.story.transporter.addRelatedLinks(0, jsondata);
						} else {
							debuglog("No related links found for Story Zero");
						}
						PGLIB.story.transporter.loadedStoryZeroDataFromAPI = true;
						$(document).trigger("pgevoke:loadedStoryZeroDataFromAPI");
					});
				}
			},
			filterRelatedLinks: function(jsondata) {
				debuglog("filterRelatedLinks() v3 called with this jsondata...");
				debuglog(jsondata);
				if (typeof jsondata !== "object") { return {}; }
				var relatedlinks = jsondata.articles[0].related.links;
				var relatedlinksfiltered = [];
				for (i=0; i<=(relatedlinks.length-1); i++) {
					var unixtime = new moment(new Date().getTime());
					var today = parseInt(unixtime.format("YYYYMMDD").slice(0, 8));
					if (typeof relatedlinks[i].storyID === "string") {
						var pubdate = parseInt(relatedlinks[i].storyID.slice(0, 8));
					}
					if (pubdate > today) {
						debuglog("REMOVING the following related link since its pubdate > today (i.e. it's in the future)");
					} else {
						debuglog("Adding related story with ID '" + relatedlinks[i].storyID + "'");
						if (typeof relatedlinks[i].author === "string") {
							relatedlinks[i].author = relatedlinks[i].author.replace(/\n/, " / "); // Backwards compatability with old Blade byline format

						}
						if (typeof relatedlinks[i].url === "string") {
							relatedlinks[i].url = relatedlinks[i].url.replace(/^http:\/\//, "https://"); // Make sure all links are https
						}
						relatedlinksfiltered.push(relatedlinks[i]);
					}
				}
				jsondata.articles[0].related.links = relatedlinksfiltered;
				debuglog("Done with filterRelatedLinks(). Result...");
				debuglog(jsondata);
				return jsondata;
			},
			addRelatedLinks: function(storyindex, storyjsondata) {
				debuglog("Adding related links NEW");
				var storyid = "pgevoke-story-" + storyindex;
				var $target = $("#" + storyid + " .pgevoke-story-related-links");
				if ($target.length !== 1) { return false; }
				if (typeof storyjsondata !== "object") { return false; }
				debuglog("Passed related link checks");
				debuglog(storyjsondata);
				storyjsondata = PGLIB.story.transporter.filterRelatedLinks(storyjsondata);
				$target.loadAjaxContent({
					"template": "story-related",
					"jsondata": storyjsondata,
					"endfunction": function() {
						setTimeout(function() {
							PGLIB.story.transporter.moveRelatedLinks(storyindex);
						}, 50);
					}
				});

			},
			moveRelatedLinks: function(storyindex) {
				debuglog("Moving related links");
				var storyid = "pgevoke-story-" + storyindex;
				// ------- Check for Nativo -------
				var relatedlinks = "#" + storyid + " .pgevoke-story-related-links .pgevoke-story-related-link";
				// var $bodytext = $("#" + storyid + " .pgevoke-story-bodytext");
				var $bodytext = $("#" + storyid + " .pgevoke-contentarea-body-text");
				PGLIB.story.transporter.log($bodytext);
				var $paragraphs = $bodytext.find("> p");
				var targets = "#" + storyid + " .pgevoke-story-related-linktarget";
				PGLIB.story.transporter.log($paragraphs);
				if ($(relatedlinks).length > 0) {
					var $relatedlink = $(relatedlinks).first()[0];
					if ($(targets).length > 0) {
						$(targets)[0].after($relatedlink);
						$(targets)[0].remove();
						// $(relatedlinks).first().remove();
					} else {
						if ($paragraphs.length > 4) {
							$($paragraphs[3]).after($relatedlink);
							// $(relatedlinks).first().remove();
						}
					}
				}
				if ($(relatedlinks).length > 0) {
					var $relatedlink = $(relatedlinks).first()[0];
					if ($(targets).length > 0) {
						$(targets)[0].after($relatedlink);
						$(targets)[0].remove();
						// $(relatedlinks).first().remove();
					} else {
						if ($paragraphs.length > 12) {
							$($paragraphs[10]).after($relatedlink);
							// $(relatedlinks).first().remove();
						}
					}
				} 
				if ($(relatedlinks).length > 0) {
					$("#" + storyid + " .pgevoke-story-related-links").css("display", "block");
				}

			},
			addViafouraTrending: function(storyindex) {
				if (PGVARS.site !== "blade") { return false; }
				debuglog("addViafouraTrending() called");
				var storyselector = "pgevoke-story-" + storyindex;
				var $thestory = $('#pgevoke-story-' + storyindex);
				var storyid = $thestory.attr("data-pg-storyid");
				var vftrending = '<div class="viafoura"><vf-content-recirculation title="Trending Articles" limit="5" days-published="7" vf-container-id="' + storyid + '" trend-window="1" sort="comments" vf-container-id="currentPageContainer"/></div>';
				debuglog(vftrending);
				var $vftrending = $(vftrending);
				var $bodytext = $("#" + storyselector + " .pgevoke-contentarea-body-text");
				var $paragraphs = $bodytext.find("> p");
				if ($paragraphs.length > 9) {
					debuglog("Enough paragraphs");
					$($paragraphs[8]).after($vftrending);
				}
				debuglog("Adding tray trigger");
				// $("body").append($('<div class="viafoura"><vf-tray-trigger floating="true"></vf-tray-trigger></div>'));
			},
			addOfferBox: function(storyindex) {
				debuglog("addOfferBox() called");
				if (PGVARS.site === "blade") { return false; }
				// if (PGVARS.sitecode === "LIVE") { return false; }
				debuglog("addOfferBox(): Passed checks");
				// PGFNS.isUserPaid
				// if (_PG.eventer.lookup("accountLoaded").length > 0) {
				if (endOfStoryOfferIsReady()) {
					debuglog("endOfStoryOfferIsReady is TRUE. Calling initOfferBox()");
					THISMODULE.initOfferBox(storyindex);
				} else {
					// _PG._listen("accountLoaded", function() {
					// const event = new Event('endOfStoryOfferReady');
					// document.dispatchEvent(event);
					debuglog("endOfStoryOfferIsReady is FALSE. Waiting for event");
					document.addEventListener('endOfStoryOfferReady', function (e) {
						console.log("endOfStoryOfferIsReady event occurred. Calling initOfferBox()");
						THISMODULE.initOfferBox(storyindex);
					}, false);
				}
			},
			initOfferBox: function(storyindex) {
				debuglog("addOfferBox: accountLoaded listener called.");
				var isPaid = PGFNS.isUserPaid();
				debuglog(isPaid);
				// if (isPaid) { return false; }
				// if (typeof END_OF_STORY_TEMPLATE === "string" && typeof END_OF_STORY_DRAWER_TEMPLATE === "string" && typeof END_OF_STORY_DRAWER_OFFER === "string") {
				if (1 === 1) {
					debuglog("addOfferBox: Found vars");
					var wrapper = "pg-bigdrawer-content";
					var selector = "#pgevoke-story-" + storyindex + " .pgevoke-story-offerbox"; 
					debuglog($(selector).length);
					if (typeof END_OF_STORY_TEMPLATE === "string") {
						debuglog("FOUND END_OF_STORY_TEMPLATE");
					} else {
						debuglog("END_OF_STORY_TEMPLATE was NOT found");
					}
					if (typeof END_OF_STORY_OFFERID === "string") {
						debuglog("FOUND END_OF_STORY_OFFERID");
					} else {
						debuglog("END_OF_STORY_OFFERID was NOT found");
					}
					// END_OF_STORY_TEMPLATE = "OT0NQC200PYL";
					// END_OF_STORY_OFFERID = "OFW9A9VFOJWW";
					tp.offer.show({
					   offerId: END_OF_STORY_OFFERID,
					   templateId: END_OF_STORY_TEMPLATE,
					   displayMode: "inline",
					   containerSelector: selector
					});
					/*
					debuglog("addOfferBox(): SETTING UP BINDING")
					debuglog("Length: " + $(".endofstoryoffer-button-inner").length);
					$(document).on("click", ".endofstoryoffer-button-inner", function() {
						console.log("addOfferBox(): END OF STORY OFFER CLICK");
						var wrapper = "pg-bigdrawer-content";
						PGLIB.all.bigdrawer.show({
						  "htmlstring":"<div id='"+wrapper+"'></div>",
						  closebutton: true
						});
						tp.offer.show({
						   offerId: END_OF_STORY_DRAWER_OFFER,
						   templateId: END_OF_STORY_DRAWER_TEMPLATE,
						   displayMode: "inline",
						   containerSelector: "#" + wrapper
						});
					});
					*/
				} else {
					debuglog("addOfferBox() ran, but couldn't find vars");
				}
			},
			addCivicScienceInline: function(storyindex) {
				debuglog("RUNNING addCivicScienceInline()");
				var storyid = "pgevoke-story-" + storyindex;
				var csinline = "#" + storyid + " .pgevoke-story-civicscienceinline";
				var $csinline = $(csinline);
				var theid = "pgevoke-story-" + storyindex + "-csinlinepoll";
				// var theid = "0927bff8-f0f3-88b4-b57b-9f63ae02dfbd";
				// if (storyindex.toString() === "0") {
					var $script = $("<script>", {
						type: "text/javascript",
						src: "https://www.civicscience.com/widget/jspoll/?elt=" + theid + "&tgtid=531e67d2-7a68-f2a4-b57f-9a0c5207ab27"
					});
					// debuglog("YES....");
					// PGLIB.story.transporter.log($script);
					$("head").append($script);
					var $div = $("<div>", { id: theid });
					$csinline.append($div);
					
					// $.ajax("https://www.civicscience.com/widget/jspoll/?elt=" + theid + "&amp;tgtid=531e67d2-7a68-f2a4-b57f-9a0c5207ab27")
					/* $.getScript("https://www.civicscience.com/widget/jspoll/?elt=" + theid + "&amp;tgtid=531e67d2-7a68-f2a4-b57f-9a0c5207ab27")
					.done(function(jsondata) {
						debuglog("addCivicScienceInline succeeded");
						var $div = $("<div>", {
							id: theid
						});
						$csinline.append($div);
					})
					.fail(function() {
				 	  	PGFNS.ajax.log("PG PAGE API: Could not load inline CivicScience script");
					});	*/

				// } else {
				// 	debuglog("NO");
				// }
			},
			loadJustAPinchWidget: function(storyindex) {
				debuglog("loadJustAPinchWidget()");
				if (PGVARS.site !== "pg") { return false; }
				if (PGVARS.param1 !== "ae" && PGVARS.param1 !== "life") { return false; }
				if (PGLIB.all.breakpoints.getCurrentGroup() === "mobile") { return false; }
				if (storyindex !== 0) { return false; }
				var storyid = "pgevoke-story-" + storyindex;
				var $target = $("#" + storyid + " .pgevoke-justapinchwidget");
				debuglog("loading");
				var $html = $('<div id="_snup-target21" style="display: inline-block; vertical-align: top;max-width:365px;width: calc( 100% - 310px ); min-width: 300px;"></div><div style="display: inline-block; margin: 0 auto; width: calc(100% - 375px); min-width: 300px;"><div style="margin: 0 auto; vertical-align: top;max-width: 300px; max-height: 250px; min-height: 50px;" id="_snup-trx2-ldgr0"></div></div>');
				$(".pgevoke-justapinchwidget").append($html).show();
				$.getScript("https://japfg-trending-content.uc.r.appspot.com/trxtwo.php?s=10272&v=1&q=4&i=21").done(function() {
					debuglog("DONE LOADING SCRIPt");
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TF29MHJ');
				});
				// --- Recipt of the Day ---
				// var $html = $('<div id="ahm-rotd" class="ahm-rotd" style="display: inline-block; vertical-align: top;max-width:365px;width: calc( 100% - 310px ); min-width: 300px;"></div><div style="display: inline-block; margin: 0 auto; width: calc(100% - 375px); min-width: 300px;"><div style="margin: 0 auto; vertical-align: top;height: 250px; width: 300px; background: #666;width: 300px; min-height: 50px;" id="_snup-rtdx-ldgr1"></div>');
				// $(".pgevoke-justapinchwidget").append($html).show();
				/*
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-NWR6X9J');
				*/

			},
			showAPWidget: function(storyindex) {
				// ---- CURRENTLY IN USE -----
				debuglog("showAPWidget() called");
				if (issetmulti(PGLIB, "apwidget", "loaded") && !PGLIB.apwidget.loaded) {
					debuglog("AP Widget was NOT loaded. Exiting.");
					return;
				} else {
					debuglog("AP Widget script was loaded. Showing.");
				}

				if (storyindex === 0) {
					var storyid = "pgevoke-story-" + storyindex;
					var $target = $("#" + storyid + " .pgevoke-story-apwidget");
					if ($target.length === 1) {
						var $apwidgetloader = $("#pgevoke-story-apwidgetloader");
						$target.append($apwidgetloader);
						$apwidgetloader.css("display", "block");	
					}
				}
			},
			addAPWidget: function(storyindex) {
				debuglog("addAPWidget() called....");
				if (storyindex !== 0) { return; }
				if (typeof pgStoryZeroJSON === "undefined") { return; }
				if (PGFNS.issetmulti(pgStoryZeroJSON, "articles", "0", "subSection") === false) { return; }
				debuglog("addAPWidget() Proceeding");
				var sectionid = pgStoryZeroJSON.articles[0].subSection;
				var apwidgetid;
				debuglog("Subsection is " + sectionid);
				switch (sectionid) {
					case "pitt":
					case "psu":
					case "wvu":
						apwidgetid = "308397ae77adadd216012bda70ada6fa";
						break;
					case "penguins":
					case "pirates":
						apwidgetid = "9e729a60a3fc3bab0edec66dec441505";
						break;
					case "steelers":
						apwidgetid = "0d302ea463c55ce26b8edf69c27dd293";
						break;
					case "health":
						apwidgetid = "e594f6abc0e5e4cd9e97a690414d55bd";
						break;	
					default:
						apwidgetid = "544e9b42bd14dbdc162bd474b3eff48d";	
				}
				debuglog("apwidgetid is " + apwidgetid);
				var thediv = $("<div>", {
					id: "ap_widget_container_"+apwidgetid
				});
				var thescript = $("<script>", {
					src: "http://digitalservices.ap.org/widget-content/" + apwidgetid
				});
				var storyid = "pgevoke-story-" + storyindex;
				var apwidget = "#" + storyid + " .pgevoke-story-apwidget";
				var $apwidget = $(apwidget);
				$apwidget.append(thediv);
				setTimeout( function() {
					$apwidget.append(thescript);	
				}, 8000);
			},
			handleUTM: function () {
				debuglog("handleUTM: called function");
				if (PGVARS.site !== "pg") { return false; }
				var search = (typeof window.location.search === "string") ? window.location.search : "";
				var x = "utm_campaign=covid19"; // test
				if (search.indexOf(x) < 0) {
					debuglog("handleUTM: Didn't find utm_campaign=covid19. Exiting.");
					return false;
				}
				if (search.indexOf(x+"newsletter") >= 0) {
					debuglog("handleUTM: Already using utm_campaign=covid19newsletter. Exiting.");
					return false;
				}
				if (typeof window.location.href !== "string" || window.location.href.length === 0)  {
					debuglog("handleUTM: blank href. Exiting.");
					return false;
				}
				debuglog("handleUTM: passed checks. Converting value to covid19newsletter.");
				var thestorytitle = $thestory.attr("data-pg-storytitle") + " | Pittsburgh Post-Gazette";
				var y = window.location.href;
				y = y.replace(x, x+"newsletter");
				debuglog("handleUTM: new URL: " + y);
				window.history.replaceState({}, thestorytitle, y);
			},
			updatePortraitImages: function(newbreakpoint) {
				debuglog("updatePortraitImages() called. Newbreakpoint: " + newbreakpoint);
				if (newbreakpoint === "sm") {
					var $targets = $(".pgevoke-story-layout-portraitleftcorner");
					$targets.addClass("pgevoke-story-layout-widerheadline");
				} else {
					var $targets = $(".pgevoke-story-layout-portraitleftcorner");
					$targets.removeClass("pgevoke-story-layout-widerheadline");
				}
			},
			bindLoginRegisterButtons: function(storyindex) {
				var storyid = "pgevoke-story-" + storyindex;
				
				/* var subscribedisplay, paidstatus;
				var apu = usr.data.activePaidUser;
				if (typeof apu !== "undefined" && apu == "true") {
					subscribedisplay = "none";
					paidstatus = "paid";
				} else {
					subscribedisplay = "block";
					paidstatus = "unpaid";				
				}
				// console.log(">>>>>> PGUser 'bind' event fired! Active Paid User? " + paidstatus);
				$(".stickyright-subscribe-wrapper").css("display", subscribedisplay);
				$(".stickyright-emailprefs").attr("href", "https://my.post-gazette.com/profile/#preferences?utm_source=pg.com&utm_medium=sticky&utm_campaign=newsletter-subscribe&utm_content=" + paidstatus); */

				$("#" + storyid + " .gigyaRegisterBtn").on("click",function(){
					_PG.accounts.gigyaRegister();
				});
			$("#" + storyid + " .gigyaLoginBtn").on("click",function(){
					_PG.accounts.gigyaLogin();
				});
				if (_PG.accounts.loggedIn()) {
					$(".stickyright-loggedinuserbuttons").show();
					$(".stickyright-loggedoutuserbuttons").hide();
					// $(".gigyaLoginBtn").parent().hide();
					// $(".gigyaRegisterBtn").parent().hide();
				} else {
					$(".stickyright-loggedinuserbuttons").hide();
					$(".stickyright-loggedoutuserbuttons").show();
					// $(".gigyaLoginBtn").parent().show();
					// $(".gigyaRegisterBtn").parent().show();
				}
				var paidstatus = (_PG.user.data("activePaidUser") === "true") ? "paid" : "unpaid";
				var subscribedisplay = (paidstatus === "paid") ? "none" : "block";
				debuglog("Setting email prefs button status to '" + paidstatus + "'");
				$(".stickyright-emailprefs").attr("href", "https://" + PGVARS.mydotbaseurl + "/profile/#preferences?utm_source=pg.com&utm_medium=sticky&utm_campaign=newsletter-subscribe&utm_content=" + paidstatus);

				$(".stickyright-subscribe-wrapper").css("display", subscribedisplay);
			},
			reenable: function(jsondata, settings) {
				debuglog("Reenabling");
				PGLIB.story.transporter.currentindex += 1;
				if (PGLIB.story.transporter.currentindex > PGLIB.story.transporter.arrayofstories.length) {

				}
				PGLIB.story.transporter.alreadyloading = false;
				PGLIB.story.transporter.seeIfWeNeedNewContent();
			},
			regulate: function(bool) {
				if (typeof bool !== "boolean") {
					debuglog("Could not regulate. Must supply a boolean.");
					return false;
				}
				PGLIB.story.transporter.regulated = bool;
				return true;
			},
			doneLoadingStories: function() {
			},
			spinner: {
				selector: ".pgevoke-story-transporter-spinner",
				show: function() {
					$(PGLIB.story.transporter.spinner.selector).css("display", "block");
				},
				hide: function() {
					$(PGLIB.story.transporter.spinner.selector).css("display", ""); // Defaults to none as set via CSS
				}
			},
			fireItemStyleTrackingEvents: function(itemcountbystyle) {
				/* Object.keys(itemcountbystyle).forEach( function(key) {
					var keysvalue = itemcountbystyle[key];
					if (keysvalue > 0) {
						ga('itTracker.send',
							'event',
							'Recent Stories -infinitescroll|style',
							param1 + " -displayed",
							key,
							keysvalue,
							{'nonInteraction': 1}
						);
					}
				}); */
			}
		};
	})();

	window.PGLIB.story.transporter.storywaypoints = (function() {
		var debuglogkey = "STORYWAYPOINTS";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var waypoints = {};
		var viewedstories = [];
		var headerpxheight = 50; // Used to account for header when checking offset
		var updatepending = false;
		var lastupdate = 0;
		var ratelimit = 100; // In ms
		var currentaddressbarstory = "pgevoke-story-0"; //default
		var currentstoryarea = "top";
		var firednativostart = false;
		function getTime() {
			var d = new Date();
			return d.getTime();
		}
		var issetmulti = PGFNS.issetmulti;
		return {
			init: function() {
				debuglog("ADDRESSBAR: Init()");
				$(window).scroll(function() {
					PGLIB.story.transporter.storywaypoints.handleScroll();
				});
				$(window).resize(function() {
					PGLIB.story.transporter.storywaypoints.handleScroll();
				});
			},
			handleScroll: function() {
				var t = getTime();
				if (lastupdate === 0) { // First scroll
					PGLIB.story.transporter.storywaypoints.updateWaypoints(); 
				} else if (updatepending) { // Already an update pending
					return; 
				} else if (t - lastupdate > ratelimit) { // Nothing pending & enough time passed
					PGLIB.story.transporter.storywaypoints.updateWaypoints();
				} else {
					updatepending = true;
					var waitperiod = (ratelimit - (t - lastupdate));
					// debuglog("ADDRESSBAR: Scrolled, but rate limit has not passed. Using setTimeout() with " + waitperiod + "ms wait period.");
					setTimeout(function() {
						// debuglog("ADDRESSBAR: Done waiting");
						PGLIB.story.transporter.storywaypoints.updateWaypoints();
						updatepending = false;
					}, waitperiod);
				}
			},
			updateWaypoints: function() {
				// debuglog("ADDRESSBAR: UPDATING")
				lastupdate = getTime();
				var $stories = $(".pgevoke-story[data-pg-storyimagesloaded]");
				$stories.each(function() {
					// var storykey = $(this).attr("data-pgevoke-storykey");
					var storyid = $(this).attr("id");
					var offsettop = $(this).offset().top;
					var offsettoprounded = Math.round(offsettop);
					var $contentarea = $(this).find(".pgevoke-contentarea");
					var contentareatop = Math.round($contentarea.offset().top);
					var contentareabottom = contentareatop + Math.round($contentarea.height());
					waypoints[storyid] = {
						"top": offsettoprounded,
						"contentareatop": contentareatop,
						"contentareabottom": contentareabottom
					};
					if (PGLIB.all.breakpoints.getCurrentGroup() === "mobile") {
						var $toparea = $(this).find(".pgevoke-story-toparea-cutout");
						if ($toparea.length === 1) {
							var $toparea = $(this).find(".pgevoke-story-toparea-cutout");
							var topareatop = Math.round($toparea.offset().top);
							var screenwidth = Math.round($(window).width());
							var socialmenutriggerpoint = Math.round(topareatop + (screenwidth * 0.35));	
							waypoints[storyid]["socialmenutriggerpoint"] = socialmenutriggerpoint;	
						}
					}
				});
				// JSON.stringify(waypoints);
				PGLIB.story.transporter.storywaypoints.setCurrentStory();
			},
			setCurrentStory: function() {
				var currentstory = "";
				var scrolltop = Math.round($(window).scrollTop());
				if (Object.keys(waypoints).length < 2) {
					currentstory = "pgevoke-story-0";
				} else {
					if (!(issetmulti(waypoints, "pgevoke-story-1", "top"))) { // || scrolltop < waypoints["pgevoke-story-1"].top) {
							// No transporter stories loaded yet
							debuglog("No transporter stories loaded yet");
							currentstory = "pgevoke-story-0";
					} else {
						var lastwaypointindex = Object.keys(waypoints).length - 1;
						for (i=lastwaypointindex; i>=0; i--) {
							var storyid = "pgevoke-story-" + i;
							// debuglog("STORY " + i);
							if (!(issetmulti(waypoints, storyid, "top"))) {
								continue;
							}
							// debuglog(scrolltop + " + " + headerpxheight + " >= " + waypoints[storyid].top);
							if (i===1) {
								// $("#pgevoke-story-1 .pgevoke-story-bottomarea-headline").html((scrolltop + headerpxheight) + " >= " + waypoints[storyid].top);	
							}
							if (scrolltop + headerpxheight >= waypoints[storyid].top) {
								if (waypoints[storyid].top === 0) {
									debuglog("ADDRESSBAR: Entered new story " + i + ", but waypoint was 0");
								}
								currentstory = storyid;
								break;
							}
						}
					}
					if (currentstory === "") { currentstory = "pgevoke-story-0"; }
				}
				if (issetmulti(waypoints, currentstory, "contentareabottom")) {
					var contentareatop = waypoints[currentstory].contentareatop;
					var contentareabottom = waypoints[currentstory].contentareabottom;
					// debuglog("scrolltop: " + scrolltop + " / contentareabottom: " + contentareabottom);
					if (scrolltop < contentareatop - headerpxheight) {
						if (typeof waypoints[currentstory].socialmenutriggerpoint !== "number") {
							currentstoryarea = "top";	
						} else {
							var smtp = waypoints[currentstory].socialmenutriggerpoint;
							if (scrolltop < smtp - headerpxheight) {
								currentstoryarea = "top";
							} else {
								currentstoryarea = "top-past-socialmenutriggerpoint";
							}
						}
					} else if (scrolltop < contentareabottom - 75) {
						currentstoryarea = "body";
					} else {
						currentstoryarea = "extracontent";
					}
				} else {
					currentstoryarea = "unknown";
				}
				if (!firednativostart && ((scrolltop + $(window).height()) > (contentareabottom - 500))) {
					firednativostart = true;
					debuglog("*** STARTING NATIVO - PostRelease.Start()");
					if (typeof PostRelease === "object" && PostRelease !== null && typeof PostRelease.Start === "function") {
						PostRelease.Start(); // Load Nativo
					}
				}
				if (currentstory !== currentaddressbarstory) {
					debuglog("Entered " + currentstory + " (" + waypoints[currentstory].top + ")");
					PGLIB.story.transporter.storywaypoints.updateAddressBar(currentstory);
					PGLIB.story.transporter.storywaypoints.updateHeaderBarColor(currentstory);
					PGLIB.story.transporter.storywaypoints.updateSocialShareLinks(currentstory);
					PGLIB.story.transporter.storywaypoints.updateMetadata(currentstory);
					PGLIB.story.transporter.storywaypoints.updateCommentsCount(currentstory);
					PGLIB.story.transporter.storywaypoints.checkIfNewStory(currentstory);
				}
			},
			updateAddressBar: function(currentstory) {
				debuglog("updateAddressBar(" + currentstory + ")");
				$thestory = $("#" + currentstory).first();
				if ($thestory.length === 1) {
					debuglog("length > 1");
					currentaddressbarstory = currentstory;
					var thestorylink = $thestory.attr("data-pg-storylink");
					if (document.location.protocol === "https:") {
						thestorylink = thestorylink.replace(/^http:\/\//, "https://");
					}
					var thestorytitle = $thestory.attr("data-pg-storytitle") + " | Pittsburgh Post-Gazette";
					window.history.replaceState({}, thestorytitle, thestorylink);
					document.title = thestorytitle;
					var socialimg = $thestory.attr("data-pg-story-socialimage");
					if (typeof socialimg === "string" && socialimg !== "") {
						debuglog("Social Image: Updating to " + socialimg);
						$("meta[property='og:image'").attr("content", socialimg);
						$("meta[name='twitter:image'").attr("content", socialimg);
					} else {
						debuglog("Social Image: Not found");
					}
				}
			},
			updateHeaderBarColor: function(currentstory) {
				$("body").removeClass (function (index, className) {
					// Remove whatever pgevoke-pageparentsection-* is present
					return (className.match (/(^|\s)pgevoke-pageparentsection-\S+/g) || []).join(' ');
				 });
				$thestory = $("#" + currentstory).first();
				theparentsection = $thestory.attr("data-pg-storyparentsection");
				$("body").addClass("pgevoke-pageparentsection-" + theparentsection);
			},
			updateSocialShareLinks: function(currentstory) {
				debuglog("Starting updateSocialShareLinks()");
				var $socialheader = $(".pgevoke-socialshareheader");
				if ($socialheader.length !== 1) {
					debuglog("Couldn't find Social Share Header. Can't update.");
					return;
				}
				$thestory = $("#" + currentstory).first();
				if ($thestory.length < 1) {
					debuglog("Couldn't find story #" + currentstory + ". Can't update.");
					return;
				}
				var thelink = $thestory.attr("data-pg-storylink");
				thelink = thelink.replace(/\/$/,""); // Remove trailing slash if present
				thelink = PGFNS.formatLink(thelink, "https");
				var thetitle = $thestory.attr("data-pg-storytitle");
				var buttons = {
					"facebook": {
						"link": "https://facebook.com/sharer.php?u="+thelink
					},
					"fbmessenger": {
						"link": "fb-messenger://share/?link="+encodeURIComponent(thelink)+"&app_id="+encodeURIComponent("148144658590118")
					},
					"twitter": {
						"link": "https://twitter.com/intent/tweet?url=" + thelink + "&text=" + encodeURIComponent(thetitle) + "&via=" + PGVARS.twitterid
					},
					"androidtext": {
						"link": "sms:?body=" + encodeURIComponent(thetitle) + "%20" + thelink
					}
				};
				$.each(buttons, function(thiskey, thisbutton) {
					var selector = ".pgevoke-socialshareheader-buttons-" + thiskey;
					$thebutton = $socialheader.find(selector);
					if ($thebutton.length === 1) {
						$thebutton.children("a").attr("href", thisbutton.link);
					} else {
						debuglog("Couldn't find button for '" + thiskey + "'");
					}
				});
				debuglog("Success!");
			},
			updateMetadata: function(currentstory) {
				console.log("VFLOG: updateMetadata()");
				$("meta[property='og:url']").attr("content", document.location.href);
				$("meta[property='og:title']").attr("content", document.title);
				// if (PGVARS.site === "blade" && PGVARS.useviafoura) {
					// console.log("VFLOG: Updating meta[name=vf:container_id] to " + currentstory);
					// $("meta[name='vf:container_id']").attr("content", currentstory);
				// }
			},
			updateCommentsCount: function(currentstory) {
				if (PGVARS.site !== "blade") { return false; }
				debuglog("Calling updateMobileCommentsCount()");
				PGLIB.storycomments.updateMobileCommentsCount();
			},
			checkIfNewStory: function(currentstory) {
				var notalreadyviewed = (viewedstories.indexOf(currentstory) === -1);
				debuglog("checkIfNewStory called");
				if (currentstory !== "pgevoke-story-0" && notalreadyviewed) {
					debuglog("Entered new story (" + currentstory + ")");
					viewedstories.push(currentstory);
					var $thestory = $("#" + currentstory).first();
					var jsondata = {};
					jsondata.id = currentstory;
					jsondata.url = $thestory.attr("data-pg-storylink");
					// var thestorylink = $thestory.attr("data-pg-storylink");
					jsondata.pubdate = $thestory.attr("data-pg-storypubdate");
					jsondata.subsections = $thestory.attr("data-pg-storysubsections");
					jsondata.storygroup = (typeof $thestory.attr("data-pg-storygroup") === "string") ? $thestory.attr("data-pg-storygroup") : "";
					// var thepubdate = $thestory.attr("data-pg-storypubdate");
					// var thesubsections = $thestory.attr("data-pg-storysubsections");
					debuglog("checkIfNewStory jsondata:");
					debuglog(jsondata);
					_PG._trigger("pgtransporter:enterednewstory", jsondata);
				}
			},
			getWaypoints: function() {
				return waypoints;
			},
			getCurrentStoryArea: function() {
				return currentstoryarea;
			},
			getCurrentAddressBarStory: function() {
				return currentaddressbarstory;
			}
		};
	})();
	window.PGLIB.story.transporter.loadContent();

	// *** Commenting out 1/18/2018 per BR & NM
	// if (typeof PGVARS !== "undefined" && typeof PGVARS.param1 === "string" && PGVARS.param1 === "sports" && typeof Paymeter !=="undefined") {
	//	_PG.settings.paymeter.contentid = "sports";
	//	console.log('_PG.settings.paymeter.contentid = "sports"');
	// }
	
}


// *********************************
//    pgevoke.section.settings
// *********************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "SECTION") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.section = window.PGLIB.section || {};
	window.PGLIB.section.settings = {
		"blacklist": [
			"header-evoke",
			"iframe-300x250-ad"
		],
		"getsCustomLoaderCode": [
		],
		"getsFeaturedBox": [
			"local",
			"news",
			"sports",
			"a-e",
			"business",
			"opinion",
			"health-well-being"
		],
		"getsATFNewspacks": {			
		},
		"getsTrending": [
			"local",
			"news",
			"sports",
			"a-e",
			"business",
			"opinion",
		],
		"getsExtraContent": {
		},
		"usesSubsectionBoxes": [
		],
		"customLoaderFuncs": {}
	};

}


// *****************************************
//      pgevoke.section.standaloneheader
// *****************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "SECTION") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.section = window.PGLIB.section || {};
	window.PGLIB.section.standaloneheader = (function() {
		return {
			init: function() {
				$(document).ready(function() {
					if (typeof PGVARS === "undefined") { return; }
					if (typeof PGVARS.sectionid !== "string") { return; }
					if (PGVARS.sectionid === "header-evoke") {
						DFPADS.cmd(function() {
							DFPADS.initializeAll(".pgevoke-standaloneheader-bannerad");
						});
					}
				});
			}
		};
	})();
	PGLIB.section.standaloneheader.init();
}


// *********************************
//    pgevoke.section.stickyboxes
// *********************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "SECTION") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.section = window.PGLIB.section || {};
	window.PGLIB.section.stickyboxes = (function() {
		return {
			init: function() {
				$(document).ready( function() {
					$("[data-stickybox-id='pgevoke-section-rightrail1']").stickybox({
						parent:".pgevoke-section",
						offset:61
					});
					/* $("#pgevoke-fp-stickybox2").stickybox({
						parent:"#pgevoke-fp-row3",
						offset:51
					}); */
				});
			}
		};
	})();
	PGLIB.section.stickyboxes.init();
}


// *********************************
//    pgevoke.section.misc
// *********************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "SECTION") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.section = window.PGLIB.section || {};
	window.PGLIB.section.loader = (function() {
		var THISMODULE;
		var debuglogkey = "SECTIONLOADER";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var lastadindex = -1;
		var settings = {};
		var thissectionsettings = {};
		var sectionlabeltext = "";
		var sectionpath = "";
		var loadeditems = [];
		var spinnerSelector = ".pgevoke-loadingspinner";
		var issetmulti = PGFNS.issetmulti;

		/*
		 * Returns true if settings[key] is an array or object
		   containing the sectionpath */
		function getSectionSettings(key) {
			if (sectionpath === "") { return false; }
			if (typeof settings[key] !== "object" || settings[key] === null) {
				return false;
			}
			if (Array.isArray(settings[key])) {
				return (settings[key].indexOf(sectionpath) >= 0);
			} else {
				if (typeof settings[key][sectionpath] === "undefined") {
					return false;
				} else {
					return settings[key][sectionpath];
				}
			}
		}
		function getEmbeddedContent(key) {
			if (typeof PGPAGEDATA !== "object") {
				return false;
			}
			if (!PGFNS.issetmulti(PGPAGEDATA, key, "articles")) {
				return false;

			}
			if (!Array.isArray(PGPAGEDATA[key].articles)) {
				return false;
			}
			return PGPAGEDATA[key];
		}
		function itemAlreadyLoaded(item) {
			if (typeof item !== "string" & item === "") { return false; }
			return (loadeditems.indexOf(item) >= 0);
		}
		function itemMarkAsLoaded(item) {
			if (typeof item !== "string" || item === "") { return false; }
			if (loadeditems.indexOf(item) < 0) {
				loadeditems.push(item);
			}
		}
		return {
			itemAlreadyLoaded: function(item) {
				return itemAlreadyLoaded(item);
			},
			init: function() {
				THISMODULE = this;
				THISMODULE.setThisSectionSettings();
				if (thissectionsettings.blacklisted) {
					return false;
				}
				debuglog("init() called");
				debuglog("Passed logic check");
				// ----- Render the page content received from the Page API -----
				$(document).ready(function() {
					debuglog("Doc ready firing");
					var secseo = PGVARS.sectionseolabel;
					debuglog(secseo);
					// ----- Load Section template -----
					$(".pgevoke-pagecontent").loadAjaxContent({
						"template": "section",
						"processfunction": "simple",
						"jsondata": {
							"adsection": PGVARS.sectionseolabel,
							"getsFlexbanner2": getSectionSettings("getsFlexbanner2")
						}
					});
					// ----- Load ATF -----
					THISMODULE.loadEmbeddedContent();
					// ----- Load Page API content ------
					if (PGLIB.all.pgpageapi.ready) {
						THISMODULE.loadPageAPIContent();	
					} else {
						$(document).on("pgpageapi:ready", function(event) {
							THISMODULE.loadPageAPIContent();
						});	
					}
					// ----- Load right rail -----
					$(".pgevoke-section-rightrail").loadAjaxContent({
						"template": "section-rightrail",
						"processfunction": "simple",
						"jsondata": {
							"adsection": PGVARS.sectionseolabel
						}
					});					
					// ----- Init ads -----
					THISMODULE.initAds();
					// ----- Civic Science ----
					if (PGVARS.usenewcivicscience) {
						PGLIB.all.civicscience.init();
					}
					// ----- Stickyboxes ------
					THISMODULE.initStickyBoxes();
					PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
					var currentbreakpointgroup = PGLIB.all.breakpoints.getCurrentGroup();
					if (currentbreakpointgroup === "desktop") {
						THISMODULE.initStickyBoxes();	
					}
					$(window).on("breakpointchanged", function(e, data) {
						var newbreakpoint = data.newbreakpoint;
						debuglog("Breakpoint changed:");
						debuglog(data);
						if (data.groupchange === "desktop-to-mobile") {
							debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
							THISMODULE.killStickyBoxes();
						} else if (data.groupchange === "mobile-to-desktop") {
							debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
							// PGLIB.story.transporter.killStickyBoxesAll();
							THISMODULE.initStickyBoxes();	
						}
					});
				});
			},
			initAds: function() {
				setTimeout(function() {
					// It takes a split second for the append function to finish, at least in Chrome
					DFPADS.cmd( function() {
						DFPADS.initializeAll(".pgevoke-section");
						// DFPADS.initializeAll();
					});
				}, 100);
			},
			setThisSectionSettings: function() {
				sectionpath = PGVARS.sectionpath.toLowerCase();
				if (PGFNS.issetmulti(PGLIB, "section", "settings")) {
					settings = PGLIB.section.settings;
				}
				var thesetting;
				var tss = {}; // This section's settings
				tss.blacklisted = getSectionSettings("blacklisted");
				tss.gets = [];
				tss.values = {};
				tss.embeddedContent = {};
				tss.hasEmbedded = [];
				tss.usesEmbedded = [];
				// ----- Custom Loader Code/Func  -----
				thesetting = getSectionSettings("getsCustomLoaderCode");
				if (thesetting && typeof settings.customLoaderFuncs ===  "object" && typeof settings.customLoaderFuncs[sectionpath] === "function") {
						tss.gets["customloadercode"] = true;
						tss.customLoaderFunc = settings.customLoaderFuncs[sectionpath];
				} else {
					tss.gets["customloadercode"] = false;
				}
				// ---- Gets + Gets Values ----
				(function() {
					var mappings = {
						"getsTrending": "trending",
						"getsFeaturedBox": "featuredpack",
						"getsATFNewspacks": "atfnewspacks",
						// "getsNewspack1": "newspack1",
						"usesSubsectionBoxes": "subsectionboxes"
					}
					$.each(mappings, function(k, v) {
						var setting = getSectionSettings(k);
						tss.gets[v] = (setting !== false);
						if (typeof setting !== "boolean") {
							tss.values[v] = setting;
						}
					});
				})();
				if (tss.gets["subsectionboxes"]) {
					PGVARS.useSubsectionBoxes = true;
				}
				// ---- Embedded Content ----
				(function() {
					var items = [
						"featuredpack",
						"trending",
						// "newspack1",
						"recent"
					];
					$.each(items, function(i, key) {
						var content = getEmbeddedContent(key)
						if (content) {
							tss.embeddedContent[key] = content;
						}
						var hasIt = (content !== false);
						tss.hasEmbedded[key] = hasIt;
					});
				})();
				// ---- Uses ----
				(function() {
					var items = [
						"featuredpack",
						"trending",
						// "newspack1"
					];
					$.each(items, function(i, key) {
						tss.usesEmbedded[key] = (tss.gets[key] && tss.hasEmbedded[key]);
					});
				})();
				debuglog("thissectionsettings...");
				debuglog(tss);
				thissectionsettings = tss;
				return tss;
			},			
			setSectionLabelText: function() {
				if (typeof PGVARS.sectionname === "string" && PGVARS.sectionname !== "") {
					debuglog("Using PGVARS.sectionname as label");
					sectionlabeltext = PGVARS.sectionname.toUpperCase();
				} else  {
					if (typeof pgpageapi === "object" && typeof pgpageapi.sectionLabel === "string") {
						debuglog("Found Label: " + pgpageapi.sectionLabel.toUpperCase());
						sectionlabeltext = pgpageapi.sectionLabel.toUpperCase();
					} else {
						debuglog("No label found");
						sectionlabeltext = PGFNS.getSectionName(PGVARS.sectionid);
						sectionlabeltext = sectionlabeltext.toUpperCase();
					}
				}
			},
			loadEmbeddedContent: function() {
				debuglog("loadEmbeddedContent() called");
				THISMODULE.setSectionLabelText();
				PGLIB.all.subsectionmenu.init();
				var page = thissectionsettings;
				debuglog("THEPAGE:");
				debuglog(page);
				var spinnermoved = false;
				if (page.usesEmbedded["featuredpack"]) {
					itemMarkAsLoaded("featuredpack");
					THISMODULE.hideSpinner();
					THISMODULE.moveSpinner();
					spinnermoved = true;
					debuglog("Loading EMBEDDED featuredpack");
					THISMODULE.loadFeaturedPack("embedded");
				}
				if (page.gets["atfnewspacks"] && page.hasEmbedded["featuredpack"]) {
					itemMarkAsLoaded("atfnewspacks");
					THISMODULE.loadATFNewspacks("embedded");
				} else {
					debuglog("This section does not get embedded atfnewspacks");
				}
				// THISMODULE.loadBPartnersWidget("embedded");
				if (page.usesEmbedded["trending"]) {
					itemMarkAsLoaded("trending");
					THISMODULE.loadTrending("embedded");
				} else {
					debuglog("This section does not get embedded Trending");
				}
				if (page.usesEmbedded["trending"]) {
					THISMODULE.loadRevealAd();
				} else {
					debuglog("SKIPPING REVEAL");
				}
				if (spinnermoved) {
					THISMODULE.showSpinner();	
				}
			},
			loadPageAPIContent: function() {
				debuglog("pgpageapi:ready");
				THISMODULE.hideSpinner();
				var page = thissectionsettings
				// ----- Load Featured Pack -----
				if (page.gets["featured"]) {
					if (!itemAlreadyLoaded("featured")) {
						THISMODULE.loadFeaturedPack();
					} else {
						debuglog("Already used embedded Featured Box. Ignoring AJAX one.");
					}
				}
				// ----- Load ATF Newspacks -----
				if (page.gets["atfnewspacks"]) {
					if (!itemAlreadyLoaded("atfnewspacks")) {
						THISMODULE.loadATFNewspacks();
					} else {
						debuglog("Already used embedded ATF Newspacks. Ignoring AJAX one.");
					}
				}
				// ----- Load Custom Loader Code -----
				if (page.gets["customloadercode"]) {
					debuglog("This section gets CustomLoaderCode");
					page.customLoaderFunc();
				} else {
					debuglog("This section does not get custom loader code")
				}
				// ----- Load Trending -----
				if (page.gets["trending"]) {
					if (!itemAlreadyLoaded("trending")) {
						THISMODULE.loadTrending();
						THISMODULE.loadRevealAd();
					} else {
						debuglog("Already used embedded Trending. Ignoring AJAX one.");
					}
				}

				// ----- Load Trending -----
				// (Moved)
				// ----- Load Newspack1 -----
				// Deprecated?
				// ----- Load Extra Content -----
				// Deprecated?
				// ----- Load Recent Stories -----
				THISMODULE.setHeaderBarText(sectionlabeltext);
				var ajaxsettings = {};
				if (typeof PGVARS !== "undefined" && typeof PGVARS.sectionseolabel === "string") {
					ajaxsettings.endpoint = PGVARS.apibaseurl + "/recent/1/" + PGVARS.sectionseolabel.toLowerCase() + "/$p/";
				} else {
					// Fallback in case PGVARS.sectionseolabel is missing
					// Should never actually happen
					ajaxsettings.endpoint = PGVARS.apibaseurl + "/recent/1/all/$p/";
				}
				// ----- Init infinite scroll -----
				$(document).on("pginfinitestorylist:doneloadingstories", function() {
					THISMODULE.infiniteCallback();
				});
				ajaxsettings.selector = ".pgevoke-section-infinitestorylist";
				ajaxsettings.template = "#pgevoke-_tpl-recent";
				if (typeof pgpageapi.recent === "object") {
					debuglog("Found pgpageapi.recentstories. Using for first object.");
					ajaxsettings.firstsetjsondata = pgpageapi.recent;
				} else {
					debuglog("Couldnt find recent stories");
				}
				if (PGVARS.site === "pg" && PGVARS.sectionpath === "breaking") {
					debuglog("Setting useModifiedTimestamps to true");
					ajaxsettings.useModifiedTimestamps = true;
				} else {
					debuglog("Skipping useModifiedTimestamps");
				}
				if (PGVARS.site === "blade" && PGVARS.sectionpath === "local/breaking") {
					ajaxsettings.usenolatest = true;
				}
				PGLIB.all.infinitestorylist.init(ajaxsettings);
				// ----- Load Viafoura -----
				THISMODULE.loadViafouraScript();
				// ----- Load Promobox(es) -----
				THISMODULE.loadPromobox("1");
				if (PGVARS.sectionseolabel === "sports" && typeof pgpageapi === "object" && typeof pgpageapi.promobox2 === "object" && pgpageapi.promobox2 !== null) {
					THISMODULE.loadPromobox("2");
				}
				// ----- Load Events Widget -----
				debuglog("sectionseolabel: " + PGVARS.sectionseolabel);
				if (PGVARS.sectionseolabel === "ae" || PGVARS.sectionseolabel === "life/food") {
					debuglog("Loading events widget");
					THISMODULE.loadEventsWidget();
				}
				// ----- Load misc right rail items -----
				THISMODULE.loadJustAPinchWidget();
				// THISMODULE.showAPWidget();
				THISMODULE.loadFacebookBanner();
				THISMODULE.loadTwitterList();
				THISMODULE.loadTopWorkplacesBanner();
			},
			loadFeaturedPack: function(source) {
				var page = thissectionsettings;
				THISMODULE.showPageHeader();
				// ----- Set baseline AJAX settings -----
				var ajaxsettings = {};
				ajaxsettings["template"] = "#pgevoke-_tpl-featuredpack";
				if (typeof source === "string" && source === "embedded") {
					debuglog("loadFeaturedPack(): Using embedded");
					ajaxsettings["jsondata"] = PGPAGEDATA["featuredpack"];
				} else {
					debuglog("loadFeaturedPack(): Using pgpageapi");
					ajaxsettings["endpoint"] = "pgpageapi.featuredpack";
				}
				// ----- Load each box & show -----
				$(".pgevoke-section-atf .pgevoke-featuredpack-left").loadAjaxContent(
					$.extend({}, ajaxsettings, {
						"count": 1,
					})
				);
				$(".pgevoke-section-atf .pgevoke-featuredpack-right").loadAjaxContent(
					$.extend({}, ajaxsettings, {
						"count": 2,
						"start": 1
					})
				);
				$(".pgevoke-section-atf-fullwidth").show();
				$(".pgevoke-section-atf").show();					
			},
			loadATFNewspacks: function(source) {
				// Note: The "source" default is pgpageapi. Send string "embedded" to use PGPAGEDATA.
				var page = thissectionsettings;
				debuglog("This section gets " + page.values["atfnewspacks"] + " ATF Newspack(s). Attempting to load");
				THISMODULE.showPageHeader();
				// ----- Set baseline AJAX settings -----
				var ajaxsettings = {};
				ajaxsettings["template"] = "#pgevoke-_tpl-newspack";
				if (typeof source === "string" && source === "embedded") {
					debuglog("loadFeaturedPack(): Using embedded");
					ajaxsettings["jsondata"] = PGPAGEDATA["featuredpack"];
				} else {
					debuglog("loadFeaturedPack(): Using pgpageapi");
					ajaxsettings["endpoint"] = "pgpageapi.featuredpack";
				}
				if (page.values["atfnewspacks"] >= 1) {
					debuglog("There are enough stories for extrastories-1");
					// ----- Load the three ATF stories -----
					$(".pgevoke-section-atf-extrastories-1").append("<div class='pgevoke-newspack'></div>");
					$(".pgevoke-section-atf-extrastories-1 .pgevoke-newspack").loadAjaxContent(
						$.extend({}, ajaxsettings, {
							"start": 3,
							"count": 3,
							"customdata": {
								"isATF": true
							},
							"endfunction": function() {
								$(".pgevoke-section-atf").addClass("pgevoke-section-atf-hasextrastories")
								$(".pgevoke-section-atf-extrastories-1").css("display", "block");
							}
						})
					);
				}
				if (page.values["atfnewspacks"] >= 2) {
					debuglog("There are enough stories for extrastories-2");
					$(".pgevoke-section-atf-extrastories-2").append("<div class='pgevoke-newspack'></div>");
					$(".pgevoke-section-atf-extrastories-2 .pgevoke-newspack").loadAjaxContent(
						$.extend({}, ajaxsettings, {
							"start": 6,
							"count": 3,
							"customdata": {
								"isATF": true
							},
							"endfunction": function() {
								$(".pgevoke-section-atf-extrastories-2").css("display", "block");
							}
						})
					);
				}
				if (page.values["atfnewspacks"] >= 2) {
					debuglog("There are enough stories for extrastories-3");
					$(".pgevoke-section-atf-extrastories-3").append("<div class='pgevoke-newspack'></div>");
					$(".pgevoke-section-atf-extrastories-3 .pgevoke-newspack").loadAjaxContent(
						$.extend({}, ajaxsettings, {
							"start": 9,
							"count": 3,
							"customdata": {
								"isATF": true
							},
							"endfunction": function() {
								$(".pgevoke-section-atf-extrastories-3").css("display", "block");
							}
						})
					);
				}
			},
			loadTrending: function(source) {
				var page = thissectionsettings;
				var sectionname;
				if (PGFNS.issetmulti(PGVARS, "param1")) {
					// sectionname = PGFNS.getSectionName(PGVARS.param1);
					sectionname = PGFNS.getSectionName(PGVARS.sectionid);
					$(".pgevoke-headerbar-trending-text").html("TRENDING IN " + sectionname);
				}
				var ajaxsettings = {};
				ajaxsettings["template"] = "#pgevoke-_tpl-recommended";
				if (typeof source === "string" && source === "embedded") {
					debuglog("loadTrending(): Using embedded");
					ajaxsettings["jsondata"] = PGPAGEDATA["trending"];
				} else {
					debuglog("loadTrending(): Using pgpageapi");
					ajaxsettings["endpoint"] = "pgpageapi.trending";
				}
				$(".pgevoke-trending").loadAjaxContent(
					$.extend({}, ajaxsettings, {
						"count": 5,
						"endfunction": function() {
							$(".pgevoke-section-trending").show();
						}
					})
				);
			},
			loadBPartnersWidget:function(source) {
				if (PGVARS.site !== "blade") { return false; }
				var ajaxsettings = {};
				ajaxsettings["template"] = "recent";
				if (typeof source === "string" && source === "embedded") {
					debuglog("loadTrending(): Using embedded");
					ajaxsettings["jsondata"] = PGPAGEDATA["bpartners"];
				} else {
					debuglog("loadTrending(): Using pgpageapi");
					ajaxsettings["endpoint"] = "pgpageapi.trending";
				}
				$(".pgevoke-section-bpartners").loadAjaxContent(
					$.extend({}, ajaxsettings, {
						"count": 1,
						"endfunction": function() {
							$(".pgevoke-section-bpartners").show();
						}
					})
				);
			},
			loadRevealAd: function() {
				debuglog("ADDING REVEAL"); // test
				var adstringwrapped = "";
				adstringwrapped += "<div class='pg-hidden-desktop'>";
				adstringwrapped += DFPADS.getAdSlotString({
					"position": "REVEAL",
					"adsection": PGVARS.sectionseolabel
				});
				adstringwrapped += "</div>";
				debuglog(adstringwrapped);
				$(".pgevoke-section-reveal").html(adstringwrapped).show();
			},
			loadTopAd: function() {},
			setHeaderBarText: function(sectionlabeltext) {
				debuglog("setHeaderBarText() called w/ text '" + sectionlabeltext + "'");
				var sectionseolabel = (PGVARS.param2 !== "") ? PGVARS.param2 : PGVARS.param1;
				if (sectionlabeltext !== "") {
					debuglog("setHeaderBarText: Has label");
					if (PGVARS.param1 === "b-partners") {
						debuglog("setHeaderBarText: BP");
						var brand;
						brand = sectionlabeltext.replace("B PARTNERS", "").replace(" - ", "");
						brand = (brand !== "") ? "PARTNERS: " + brand : "PARTNERS"; 
						$(".pgevoke-section-latest > .pgevoke-headerbar > span.icon").remove();
						$(".pgevoke-section-latest > .pgevoke-headerbar").addClass("pgevoke-headerbar-bpartners");
						$(".pgevoke-section-latest  > .pgevoke-headerbar").prepend("<span class='pgevoke-headerbar-bpartners-blogo'></span>");
						$(".pgevoke-section-latest-headerbar-text").html(brand);	
					} else {
						if (PGVARS.site === "pg" && PGVARS.sectionpath === "breaking") {
							$(".pgevoke-section-latest-headerbar-text").html(PGVARS.sectionname);
						} else if (PGVARS.site === "blade" && PGVARS.sectionpath === "local/breaking") {
							$(".pgevoke-section-latest-headerbar-text").html("LATEST HEADLINES");
						} else {
							$(".pgevoke-section-latest-headerbar-text").html("LATEST IN " + PGFNS.getSectionName(sectionseolabel));	
						}
					}
				} else {
					$(".pgevoke-section-latest-headerbar-text").html("LATEST");
				}
			},
			showPageHeader: function() {
				$(".pgevoke-section-pageheader").html(sectionlabeltext);
				$(".pgevoke-section-pageheader").show();
			},
			showCustomContent: function(displaycss) {
				displaycss = (typeof displaycss === "string") ? displaycss : "block";
				$(".pgevoke-section-customcontent").css("display", "block");
			},
			initStickyBoxes: function() {
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-top']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 65
				});
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-bottom']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 0,
					dockLocation: "bottom"
				});
			},
			killStickyBoxes: function() {
				Stickyboxes.remove("pgevoke-rightrail-stickybox-top");
				Stickyboxes.remove("pgevoke-rightrail-stickybox-bottom");
			},
			infiniteCallback: function() {
				debuglog("infiniteCallback v2");
				// var sectionid = "pgevoke-section";
				var $latestheaderbar = $(".pgevoke-section-latest .pgevoke-headerbar").first();
				if ($latestheaderbar.length === 1 && $latestheaderbar.css("display") === "none") {
					$latestheaderbar.show();
				};
				if (PGVARS.site === "pg") {
					var adstringmobile1st = DFPADS.getAdSlotString({
						"position": "REVEAL",
						"adsection": PGVARS.sectionseolabel
					});	
				} else {
					var adstringmobile1st = DFPADS.getAdSlotString({
						"position": "X04",
						"adsection": PGVARS.sectionseolabel
					});	
				}
				var adstringmobile = DFPADS.getAdSlotString({
					"position": "X04",
					"adsection": PGVARS.sectionseolabel
				});
				var adstringdesktop = DFPADS.getAdSlotString({
					"position": "Middle4",
					"adsection": PGVARS.sectionseolabel
				});
				// if (!adstringx04s) { return; }
				var $storylist = $(".pgevoke-section-infinitestorylist");
				var $items = $storylist.find(".pgevoke-storyfeed-item");
				var itemcount = $items.length;
				if (itemcount === 0) { return; }
				var nextadindex = lastadindex + 10;
				debuglog("itemcount: " + itemcount + ", nextadindex: " + nextadindex);
				// debuglog(adstring);
				while (itemcount > nextadindex) {
					debuglog("while loop " + nextadindex);
					lastadindex = nextadindex;
					var adstringswrapped = "";
					if (adstringmobile) {
						adstringswrapped += "<div class='pg-hidden-desktop pgevoke-section-inlinead-mobile pgevoke-section-inlinead-mobile-" + nextadindex + "'>";
						adstringswrapped += (nextadindex === 9 && adstringmobile1st) ? adstringmobile1st : adstringmobile;
						adstringswrapped += "</div>";	
					}
					if (adstringdesktop) {
						adstringswrapped += "<div class='pg-hidden-mobile pgevoke-section-inlinead-desktop pgevoke-section-inlinead-desktop-" + nextadindex + "'>";
						adstringswrapped += adstringdesktop;
						adstringswrapped += "</div>";		
					}
					$($items[nextadindex]).after($(adstringswrapped));
					nextadindex = lastadindex + 10;
				}
				setTimeout(function() {
					DFPADS.cmd(function() {
			          DFPADS.initializeAll(".pgevoke-section-infinitestorylist");
			        });
				});
				return;
			},
			loadPromobox: function(promoboxindex) {
				debuglog("loadPromobox() called (" + promoboxindex + ")");
				var promoboxindex = (typeof promoboxindex === "undefined" || promoboxindex.toString() === "0" || promoboxindex.toString() === "1") ? "" : promoboxindex.toString();
				debuglog("'" + promoboxindex + "'");
				var $target = $(".pgevoke-section-rightrail-promobox" + promoboxindex);
				if ($target.length !== 1) { return false; }
				var sectionid = PGVARS.sectionid;
				debuglog("Sending request to endpoint");
				$target.loadAjaxContent({
					endpoint: "pgpageapi.promobox" + promoboxindex,
					template: "#pgevoke-_tpl-promobox",
					processfunction: function(jsondata, settings) {
						debuglog("Processing promobox data");
						if (typeof jsondata === "undefined" || typeof jsondata !== "object" || Array.isArray(jsondata) || typeof jsondata.itemid === "undefined" || typeof jsondata.typeid === "undefined") {
							debuglog("Promobox data is blank or invalid. Can't render. Exiting.");
							return false;
						}
						jsondata.hasimage = (PGFNS.issetmulti(jsondata, "customFields", "images", "0"));
						if (jsondata.hasimage && typeof jsondata.customFields.images[0].url === "string") {
							var imgurl;
							imgurl = PGFNS.getLiberLink(jsondata.customFields.images[0].url);
							imgurl = PGFNS.formatImage(imgurl, "600x");
							jsondata.customFields.images[0].url = imgurl;
						}
						var templatefunction = PGLIB.all.underscore.getTplFunc(settings.template);
						var $target = settings.$target;
						var theoutput = templatefunction(jsondata);
						$target.append(theoutput);
						settings.endfunction(jsondata, settings);
					},
					endfunction: function(jsondata, settings) {
						debuglog("Running endfunction");
						debuglog(settings);
						setTimeout( function() {
							settings.$target.css("display", "block");
						}, 50);
					}
				});
			},
			loadEventsWidget: function() {
				debuglog("loadEventsWidget() called");
				$.ajax({
					url: "http://postgazette.spingo.com/list-widget.js",
					dataType: "script",
					success: function() {
						if (PGVARS.sectionseolabel === "ae") {
							new SpinGoWidget({
								mainColor: "#1da955",
								title: "Events ",
								subTitle: 'Calendar',
								featuredColor: "#16437c"
							});	
						} else if (PGVARS.sectionseolabel === "life/food") {
							new SpinGoWidget({
							  	title: "Food & Drink",
								subTitle: "Events",
							    sections: [40731]
							});
						}
						$(".pgevoke-spingowidget").show();
					}
				});
			},
			loadJustAPinchWidget: function() {
				debuglog("loadJustAPinchWidget()");
				if (PGVARS.site !== "pg") { return false; }
				if (PGVARS.sectionpath !== "ae" && PGVARS.sectionpath !== "life") { return false; }
				if (PGLIB.all.breakpoints.getCurrentGroup() === "mobile") { return false; }
				debuglog("loading");
				// --- Trending - right rai ---
				var $html = $('<div id="_snup-target21" style="display: inline-block; vertical-align: top;max-width:365px;width: calc( 100% - 310px ); min-width: 300px;"></div><div style="display: inline-block; margin: 0 auto; width: calc(100% - 375px); min-width: 300px;"><div style="margin: 0 auto; vertical-align: top;max-width: 300px; max-height: 250px; min-height: 50px;" id="_snup-trx2-ldgr0"></div></div>');
				$(".pgevoke-justapinchwidget").append($html).show();
				$.getScript("https://japfg-trending-content.uc.r.appspot.com/trxtwo.php?s=10272&v=1&q=4&i=21").done(function() {
					debuglog("DONE LOADING SCRIPt");
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TF29MHJ');
				});
				// --- Video inline ---
				// var $html = $('<div style="min-width: 300px;width: 100%"><div id="ahm-vidya-2" style="display: inline-block; vertical-align: top;width: calc( 100% - 310px ); min-width: 300px;"></div><div style="display: inline-block; margin: 0 5px 0 0;"><div style="vertical-align: top;width: 300px; min-height: 50px;" id="_snup-tvx-ldgr1"></div></div></div>');
				// $(".pgevoke-justapinchwidget-inline").append($html).show();
				// --- Recipe of the day right rail ---
				// var $html = $('<div id="ahm-rotd" class="ahm-rotd" style="display: inline-block; vertical-align: top;max-width:365px;width: calc( 100% - 310px ); min-width: 300px;"></div><div style="display: inline-block; margin: 0 auto; width: calc(100% - 375px); min-width: 300px;"><div style="margin: 0 auto; vertical-align: top;height: 250px; width: 300px; background: #666;width: 300px; min-height: 50px;" id="_snup-rtdx-ldgr1"></div>');
				// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NWR6X9J');
			},
			loadFacebookBanner: function() {
				if (PGVARS.site !== "pg") { return false; }
				if (PGVARS.sectionseolabel === "sports") {
					var $html = $("<a href='https://www.facebook.com/PGSportsNow/' target='_blank'><img src='https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/images/pgmisc/facebook-find-us.png'></a>");
					$(".pgevoke-section-facebooklink").append($html).show();
				}
			},
			loadTwitterList: function() {
				if (PGVARS.site !== "pg") { return false; }
				PGLIB.all.twitterlists.init();
			},
			loadTopWorkplacesBanner: function() {
				// test
				if (PGVARS.site !== "pg") { return false; }
				if (PGVARS.param1 === "business") {
					// $banner = $("<a href='https://newsinteractive.post-gazette.com/in-the-lead-top-businesses-pittsburgh-rankings/' style='display:block; width:100%'><img src='https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/images/pgsections/business/2022-in-the-lead.png' alt='Top Workplaces banner' style='display:block; width:100%'></a>");
					$banner = $("<a href='https://newsinteractive.post-gazette.com/top-workplaces-pittsburgh-2023/' style='display:block; width:100%; min-height: 143px'><img src='https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/images/pgsections/business/2023-topworkplaces-banner-300px.jpg' alt='Top Workplaces banner' style='display:block; width:100%'></a>");
					// 2022-topworkplaces-banner-300px
					$(".pgevoke-section-rightrail-topworkplaceslink").append($banner).show();
				}
			},
			loadViafouraScript: function() {
				if (PGVARS.site !== "blade") { return false; }
				var script = document.createElement("script");
			    script.setAttribute("async", true);
			    script.setAttribute("src", "//cdn.viafoura.net/vf-v2.js");
			    document.getElementsByTagName("head")[0].appendChild(script);
			},
			showAPWidget: function() {
				PGLIB.all.apwidget.show();
			},
			setParentSection: function() {
				if (typeof PGVARS.param1 === "string") {
					$("body").addClass("pgevoke-pageparentsection-" + PGVARS.param1);	
				}
			},
			showSpinner: function() {
				$(spinnerSelector).css("display", "block");
			},
			hideSpinner: function() {
				$(spinnerSelector).css("display", "none");
			},
			moveSpinner: function() {
				$(spinnerSelector).insertBefore($(".pgevoke-section-latest" ));
				$(spinnerSelector).css("margin-bottom", "0");
			},
			/*
			initOLD: function() {
				THISMODULE.setThisSectionSettings();
				if (thissectionsettings.blacklisted) {
					return false;
				}
				debuglog("init() called");
				debuglog("Passed logic check");
				// ---- Set pg-pageparentsection-* class on body to control header bar color -----
				// *** Removing this for now. Doing it server-side instead like on story pages. Eliminates delay.
				// if ($("body").length === 1) {
				// 	THISMODULE.setParentSection();
				// } else {
				//	$(document).ready(function() {
				//		THISMODULE.setParentSection();
				//	});
				// }
				// ----- Render the page content received from the Page API -----
				$(document).ready(function() {
					debuglog("Doc ready firing");
					var secseo = PGVARS.sectionseolabel;
					debuglog(secseo);
					// ----- Load Section template -----
					$(".pgevoke-pagecontent").loadAjaxContent({
						"template": "section",
						"processfunction": "simple",
						"jsondata": {
							"adsection": PGVARS.sectionseolabel
						}
					});
					// ----- Load ATF -----
					if (thissectionsettings.usesEmbeddedContent) {
						THISMODULE.loadEmbeddedContent();
					} else {
						debuglog("usesEmbeddedContent() is false");
					}
					// ----- Load Page API content ------
					if (PGLIB.all.pgpageapi.ready) {
						THISMODULE.loadPageAPIContent();	
					} else {
						$(document).on("pgpageapi:ready", function(event) {
							THISMODULE.loadPageAPIContent();
						});	
					}
					// ----- Load right rail -----
					$(".pgevoke-section-rightrail").loadAjaxContent({
						"template": "section-rightrail",
						"processfunction": "simple",
						"jsondata": {
							"adsection": PGVARS.sectionseolabel
						}
					});					
					// ----- Init ads -----
					THISMODULE.initAds();
					// ----- Stickyboxes ------
					THISMODULE.initStickyBoxes();
					PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
					var currentbreakpointgroup = PGLIB.all.breakpoints.getCurrentGroup();
					if (currentbreakpointgroup === "desktop") {
						THISMODULE.initStickyBoxes();	
					}
					$(window).on("breakpointchanged", function(e, data) {
						var newbreakpoint = data.newbreakpoint;
						debuglog("Breakpoint changed:");
						debuglog(data);
						if (data.groupchange === "desktop-to-mobile") {
							debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
							THISMODULE.killStickyBoxes();
						} else if (data.groupchange === "mobile-to-desktop") {
							debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
							// PGLIB.story.transporter.killStickyBoxesAll();
							THISMODULE.initStickyBoxes();	
						}
					});
				});
			}, */
			/*
			setThisSectionSettingsOLD: function() {
				// var sectionid = PGVARS.sectionid.toLowerCase();
				sectionpath = PGVARS.sectionpath.toLowerCase();
				if (PGFNS.issetmulti(PGLIB, "section", "settings")) {
					settings = PGLIB.section.settings;
				}
				thissectionsettings.blacklisted = false;
				if (typeof settings.blacklist === "object" && Array.isArray(settings.blacklist) && settings.blacklist.indexOf(sectionpath) >= 0) {
					thissectionsettings.blacklisted = true;
				}
				thissectionsettings.getsCustomLoaderCode = false;
				thissectionsettings.customLoaderFunc = function() {};
				if (typeof settings.getsCustomLoaderCode === "object" &&
					Array.isArray(settings.getsCustomLoaderCode) &&
					settings.getsCustomLoaderCode.indexOf(sectionpath) >= 0 &&
					typeof settings.customLoaderFuncs === "object" &&
					typeof settings.customLoaderFuncs[sectionpath] === "function") {
						thissectionsettings.getsCustomLoaderCode = true;
						thissectionsettings.customLoaderFunc = settings.customLoaderFuncs[sectionpath];
				}
				thissectionsettings.getsFeaturedBox = false;
				if (typeof settings.getsFeaturedBox === "object" && Array.isArray(settings.getsFeaturedBox) && settings.getsFeaturedBox.indexOf(sectionpath) >= 0) {
					thissectionsettings.getsFeaturedBox = true;
				}
				thissectionsettings.getsATFNewspacks = false;
				if (typeof settings.getsATFNewspacks === "object" && Object.keys(settings.getsATFNewspacks).indexOf(sectionpath) >= 0) {
					thissectionsettings.getsATFNewspacks = settings.getsATFNewspacks[sectionpath];
				}
				thissectionsettings.getsTrending = false;
				if (typeof settings.getsTrending === "object" && Array.isArray(settings.getsTrending) && settings.getsTrending.indexOf(sectionpath) >= 0) {
					thissectionsettings.getsTrending = true;
				}
				thissectionsettings.getsNewspack1 = false;
				if (typeof settings.getsNewspack1 === "object" && Object.keys(settings.getsNewspack1).indexOf(sectionpath) >= 0) {
					thissectionsettings.getsNewspack1 = true;
					thissectionsettings.newspack1Settings = settings.getsNewspack1[sectionpath];
				}
				if (typeof settings.usesSubsectionBoxes === "object" && Array.isArray(settings.usesSubsectionBoxes) && settings.usesSubsectionBoxes.indexOf(sectionpath) >= 0) {
					thissectionsettings.usesSubsectionBoxes = true;
					PGVARS.useSubsectionBoxes = true;
				} else {
					thissectionsettings.usesSubsectionBoxes = false;
					PGVARS.useSubsectionBoxes = false;
				}
				// ---- New Aug 2, 2019 -----
				thissectionsettings.hasEmbeddedFeaturedBox = false;
				if (typeof PGPAGEDATA === "object" && issetmulti(PGPAGEDATA, "featuredpack", "articles") && Array.isArray(PGPAGEDATA["featuredpack"].articles)) {
					thissectionsettings.hasEmbeddedFeaturedBox = true;
				}
				thissectionsettings.hasEmbeddedRecent = false;
				if (typeof PGPAGEDATA === "object" && issetmulti(PGPAGEDATA, "recent", "articles") && Array.isArray(PGPAGEDATA.recent.articles)) {
					thissectionsettings.hasEmbeddedRecent = true;
				}
				thissectionsettings.usesEmbeddedFeaturedBox = false;
				if (thissectionsettings.getsFeaturedBox && thissectionsettings.hasEmbeddedFeaturedBox) {
					thissectionsettings.usesEmbeddedFeaturedBox = true;
				}
				thissectionsettings.usesEmbeddedContent = false;
				if (thissectionsettings.usesEmbeddedFeaturedBox || thissectionsettings.usesEmbeddedRecent) {
					thissectionsettings.usesEmbeddedContent = true;
				}
				thissectionsettings.embeddedContent = {};
				(function() {
					var items = ["featuredpack", "trending", "recent"];
					$.each(items, function(i, key) {
						var items = {};
						itemobj[item]["exists"] = (typeof PGPAGEDATA === "object" && issetmulti(PGPAGEDATA, item, "articles") && Array.isArray(PGPAGEDATA[item].articles));
						switch(item) {
							case "featuredpack":
								itemobj[item]["gets"] = thissectionsettings.getsFeaturedBox;
								break;
							case "trending":
								itemobj[item]["gets"] = thissectionsettings.getsTrending;
								break;
							case "recent":
								itemobj[item]["gets"] = true; // All sections
								break;
						}

					});
				});
				debuglog("thissectionsettings...");
				debuglog(thissectionsettings);
				return thissectionsettings;
			},
			*/


			/* THINK THIS IS DEPRECATED
			loadNewspack1: function(source) {
				debuglog("loadNewspack1(): called")
				var page = thissectionsettings;
				var ajaxsettings = {};
				ajaxsettings["template"] = "#pgevoke-_tpl-newspack";
				if (typeof source === "string" && source === "embedded") {
					debuglog("loadNewspack1(): Using embedded");
					ajaxsettings["jsondata"] = PGPAGEDATA["newspack1"];
				} else {
					debuglog("loadNewspack1(): Using pgpageapi");
					ajaxsettings["endpoint"] = "pgpageapi.newspack1";
				}
				$(".pgevoke-section-newspack1-target").loadAjaxContent(
					$.extend({}, ajaxsettings, {
						"start": 0,
						"count": 5,
						"endfunction": function() {
							debuglog("Running NEWSPACK1 endfunction");
							if (typeof page.values["newspack1"] === "object") {
								var settings = page.values["newspack1"];
								debuglog("newspack1Settings found");
								debuglog(settings);
								if (typeof settings.headerText === "string") {
									debuglog("headertext found");
									$(".pgevoke-section-newspack1-headerbar-text").html(settings.headerText);
								}
								if (typeof settings.moreLinkURL === "string" && typeof settings.moreLinkText === "string") {
									debuglog("More link fields found. Here's $a...");
									var $a = $("<a></a>")
										.attr("href", settings.moreLinkURL)
										.html(settings.moreLinkText + "&nbsp;&nbsp;<span class='icon icon-arrow-circle-right'></span>");
									debuglog($a);
									$(".pgevoke-section-newspack1-morelink").append($a).show();
								}
							}
							$(".pgevoke-section-newspack1").show();
						}
					})
				);
			},
			*/

		};
	})();
	// Only for the 'adtest' section
	/*
	if (PGVARS.sectionid === "adtest") {
		window.THISMODULE.init = function() {
			$(document).ready(function() {
				DFPADS.cmd(function() {
					DFPADS.initializeAll(".pgevoke-adtest-wrapper");
				});
			});
		};
	}
	*/
	PGLIB.section.loader.init();
}

// *********************************
//    pgevoke.section.misc
// *********************************

if ((typeof PGVARS !== "undefined" && PGVARS.requesttype === "STATIC") || ((typeof PGPAGEDATA === "object" && PGFNS.issetmulti(PGPAGEDATA, "staticpage", "content")) )) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.static = window.PGLIB.section || {};
	window.PGLIB.static.loader = (function() {
		var debuglogkey = "STATICLOADER";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var testversion = "v8";
		var staticsettings = {
			"premium": [
				"2021hsf"
			]
		};
		var alreadyloadedpage = false;
		function isPremiumPage() {
			if (typeof PGVARS.sectionpath !== "string") { return false; }
			if (typeof staticsettings.premium === "object" && Array.isArray(staticsettings.premium)) {
				return (staticsettings.premium.indexOf(PGVARS.sectionpath) >= 0);
			} else {
				return false;
			}
		}
		function isLoggedIn() {
			var userobj = (PGFNS.issetmulti(PGLIB, "all", "piano", "userobj")) ? PGLIB.all.piano.userobj : {};
			return (typeof userobj.loggedIn === "boolean" && userobj.loggedIn);
		}
		function isPaidUser() {
			var userobj = (PGFNS.issetmulti(PGLIB, "all", "piano", "userobj")) ? PGLIB.all.piano.userobj : {};
			return (typeof userobj.loggedIn === "boolean" && userobj.loggedIn && typeof userobj.paid === "boolean" && userobj.paid);
		}
		var THISMODULE;
		return {
			init: function() {
				THISMODULE = this;
				debuglog("init() called " + testversion);
				// ----- Render the page content received from the Page API -----
				$(document).ready(function() {
					// ----- Load Page API content ------
					/*
					if (PGLIB.all.pgpageapi.ready) {
						// PGLIB.section.loader.loadPageAPIContent();	
					} else {
						$(document).on("pgpageapi:ready", function(event) {
							// PGLIB.section.loader.loadPageAPIContent();
						});	
					}
					*/
					PGLIB.static.loader.getPageContent();
					// ----- Init ads -----
					// PGLIB.section.loader.initAds();
					// ----- Stickyboxes ------
					// PGLIB.section.loader.initStickyBoxes();
					/*
					PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
					var currentbreakpointgroup = PGLIB.all.breakpoints.getCurrentGroup();
					if (currentbreakpointgroup === "desktop") {
						PGLIB.section.loader.initStickyBoxes();	
					}
					$(window).on("breakpointchanged", function(e, data) {
						var newbreakpoint = data.newbreakpoint;
						debuglog("Breakpoint changed:");
						debuglog(data);
						if (data.groupchange === "desktop-to-mobile") {
							debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
							PGLIB.section.loader.killStickyBoxes();
						} else if (data.groupchange === "mobile-to-desktop") {
							debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
							// PGLIB.story.transporter.killStickyBoxesAll();
							PGLIB.section.loader.initStickyBoxes();	
						}
					});
					*/
				});
			},
			initAds: function() {
				setTimeout(function() {
					// It takes a split second for the append function to finish, at least in Chrome
					DFPADS.cmd( function() {
						DFPADS.initializeAll(".pgevoke-static");
						// DFPADS.initializeAll();
					});
				}, 100);
			},
			initStickyBoxes: function() {
				debuglog("initStickyBoxes called " + testversion);
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-top']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 65
				});
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-bottom']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 0,
					dockLocation: "bottom"
				});
				debuglog("Correct");
				debuglog($("[data-stickybox-id='pgevoke-socialbuttons']").length);
				$("[data-stickybox-id='pgevoke-socialbuttons']").stickybox({
					parent: ".pgevoke-contentarea",
					offset: 70
				});
				debuglog("Done");
				$(window).on("breakpointchanged", function(e, data) {
					var newbreakpoint = data.newbreakpoint;
					debuglog("Breakpoint changed:");
					debuglog(data);
					if (data.groupchange === "desktop-to-mobile") {
						debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
						PGLIB.static.loader.killStickyBoxes();
					} else if (data.groupchange === "mobile-to-desktop") {
						debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
						// PGLIB.story.transporter.killStickyBoxesAll();
						PGLIB.static.loader.initStickyBoxes();	
					}
				});
			},
			/* duplicate, removing 8/28/19
			killStickyBoxes: function() {
				Stickyboxes.remove("pgevoke-rightrail-stickybox-top");
				Stickyboxes.remove("pgevoke-rightrail-stickybox-bottom");
			},
			*/
			getPageContent: function() {
				if (typeof PGPAGEDATA === "object" && PGFNS.issetmulti(PGPAGEDATA, "staticpage", "content")) {
					debuglog("The content is in the page");
					PGLIB.static.loader.loadPageContent(PGPAGEDATA.staticpage);
				} else {
					debuglog("Couldn't find content. Making AJAX request instead.");
					var endpoint = PGVARS.apibaseurl + "/top/1/static/" + PGVARS.sectionpath + "/";
					$.ajax(endpoint, {
						dataType:"json"
					})
					.done(function(jsondata) {
						PGLIB.static.loader.loadPageContent(jsondata.content);
					})
					.fail(function() {
				 	  	debuglog("AJAX Request failed!");
					});	
				}
			},
			loadPageContent: function(jsondata) {
				// ----- Load Section template -----
				$(".pgevoke-pagecontent").loadAjaxContent({
					"template": "static",
					"processfunction": "simple",
					"jsondata": {
						"adsection": PGVARS.sectionseolabel,
						"linkhttp": window.location.href,
						"linkhttps": PGFNS.formatLink(window.location.href, "https"),
						"title": jsondata.title,
						"encodedtitle": PGFNS.encodeForSocialShare(jsondata.title)
					}
				});
				$(".pgevoke-loadingspinner").hide();
				debuglog("Is Premium Page? " + isPremiumPage());
				debuglog("Piano status:");
				debuglog(PGLIB .all.piano.userobj);
				var $thetitle;
				if (!isPremiumPage()) {
					debuglog("Not premium page. Loading.");
					THISMODULE.finishLoadingPageContent(jsondata);
				} else if (isPaidUser()) {
					debuglog("Is paid user. Loading.");
					THISMODULE.finishLoadingPageContent(jsondata);
				} else {
					debuglog("Not a paid user. Deferring load.");
					$(document).on("piano:userStatusUpdated", function() {
						debuglog("**** USER STATUS UPDATED!!!!")
						if (alreadyloadedpage) { return false; }
						debuglog("Hasn't already loaded.");
						if (isPaidUser()) {
							debuglog("Paid user. Loading.");
							THISMODULE.finishLoadingPageContent(jsondata);
						} else {
							if (isLoggedIn()) {
								THISMODULE.resetContentArea();
								$(".pgevoke-contentarea-body-text").append('<p class="pgevoke-contentarea-body-unpaidalert">This content is for paid subscribers only. Please <a style="cursor:pointer" class="subscribe-btn">subscribe</a> to access this page.</p>');
							} else {
								debuglog("UNPAID.");
								THISMODULE.resetContentArea();
								$(".pgevoke-contentarea-body-text").append('<p class="pgevoke-contentarea-body-unpaidalert">If you are a paid subscriber, please <a style="cursor:pointer" class="tp-login">log in</a> to access this page.</p>');
							}
							
						}
					});
				}
				PGLIB.static.loader.initAds();
				PGLIB.static.loader.initStickyBoxes();
				PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
				// $(".pgevoke-static-content").append($(contentstring));
			},
			resetContentArea: function() {
				var $thetitle = $(".pgevoke-static-pagetitle").first();
				$(".pgevoke-contentarea-body-text").html("");
				$(".pgevoke-contentarea-body-text").append($thetitle);
			},
			finishLoadingPageContent: function(jsondata) {
				alreadyloadedpage = true;
				debuglog("finishLoadingPageContent running");
				// $(".pgevoke-contentarea-body-text").html();
				// $(".pgevoke-contentarea-body-unpaidalert").css("display", "none");
				THISMODULE.resetContentArea();
				$(".pgevoke-contentarea-body-text").append($(jsondata.content));
			},
			loadPageAPIContent: function() {

			},
			showPageHeader: function() {
				$(".pgevoke-section-pageheader").html(sectionlabeltext);
				$(".pgevoke-section-pageheader").show();
			},
			/*
			initStickyBoxes: function() {
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-top']").stickybox({
					parent: ".pgevoke-static-rightrail",
					offset: 65
				});
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-bottom']").stickybox({
					parent: ".pgevoke-static-rightrail",
					offset: 0,
					dockLocation: "bottom"
				});
			},
			*/
			killStickyBoxes: function() {
				Stickyboxes.remove("pgevoke-rightrail-stickybox-top");
				Stickyboxes.remove("pgevoke-rightrail-stickybox-bottom");
				Stickyboxes.remove("pgevoke-socialbuttons");
			},
			setParentSection: function() {
				if (typeof PGVARS.param1 === "string") {
					$("body").addClass("pgevoke-pageparentsection-" + PGVARS.param1);	
				}
			}
		};
	})();
	// Only for the 'adtest' section
	PGLIB.static.loader.init();
}

// *********************************
//    pgevoke.page.loader
// *********************************

if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "PAGE") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.page = window.PGLIB.section || {};
	window.PGLIB.page.loader = (function() {
		var debuglogkey = "PAGELOADER";
		function debuglog(thingtolog) {
			try {
				DEBUGLOGR.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		var THISMODULE;
		return {
			init: function() {
				THISMODULE = this;
				if (typeof window.PGCUSTOMCODE === "object" & Array.isArray(window.PGCUSTOMCODE)) {
				  $.each(window.PGCUSTOMCODE, function(i, item) {
				    if (typeof item === "function") {
				      item();
				    }
				  });
				}
			},
			loadRightRail: function() {
				$(".pgevoke-grid-area-side").loadAjaxContent({
					"template": "page-rightrail",
					"processfunction": "simple",
					"jsondata": {
						"adsection": PGVARS.sectionseolabel,
						"linkhttp": window.location.href,
						"linkhttps": PGFNS.formatLink(window.location.href, "https"),
						"title": PGVARS.sectionname,
						"encodedtitle": PGFNS.encodeForSocialShare(PGVARS.sectionname)
					}
				});
				PGLIB.page.loader.initAds();
				PGLIB.page.loader.initStickyBoxes();
				PGLIB.all.stickyfooter.init(".pgevoke-rightrail-login");
			},
			initAds: function() {
				setTimeout(function() {
					// It takes a split second for the append function to finish, at least in Chrome
					DFPADS.cmd( function() {
						DFPADS.initializeAll(".pgevoke-page");
						// DFPADS.initializeAll();
					});
				}, 100);
			},
			initStickyBoxes: function() {
				debuglog("initStickyBoxes called");
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-top']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 0
				});
				/*
				$("[data-stickybox-id='pgevoke-rightrail-stickybox-bottom']").stickybox({
					parent: ".pgevoke-section-rightrail",
					offset: 0,
					dockLocation: "bottom"
				});
				*/
				debuglog("Correct");
				debuglog($("[data-stickybox-id='pgevoke-socialbuttons']").length);
				$("[data-stickybox-id='pgevoke-socialbuttons']").stickybox({
					parent: ".pgevoke-contentarea",
					offset: 70
				});
				debuglog("Done");
				$(window).on("breakpointchanged", function(e, data) {
					var newbreakpoint = data.newbreakpoint;
					debuglog("Breakpoint changed:");
					debuglog(data);
					if (data.groupchange === "desktop-to-mobile") {
						debuglog("Breakpoint changed from desktop to mobile. Killing all designated stickyboxes.");
						PGLIB.page.loader.killStickyBoxes();
					} else if (data.groupchange === "mobile-to-desktop") {
						debuglog("Breakpoint changed from mobile to desktop. (Re)initializing designated story stickyboxes.");
						// PGLIB.story.transporter.killStickyBoxesAll();
						PGLIB.page.loader.initStickyBoxes();	
					}
				});
			},
			killStickyBoxes: function() {
				Stickyboxes.remove("pgevoke-rightrail-stickybox-top");
				// Stickyboxes.remove("pgevoke-rightrail-stickybox-bottom");
				Stickyboxes.remove("pgevoke-socialbuttons");
			}
		}
	})();
	PGLIB.page.loader.init(); // test
}

// **************************************
//   pgevoke.external.js_civicscience
// **************************************
if (typeof PGVARS !== "undefined") {
	if (PGVARS.usenewcivicscience) {
		window.PGLIB.all.civicscience = (function() {
			var debuglogkey = "CIVICSCIENCE";
			function debuglog(thingtolog) {
				try {
					DEBUGLOGR.log(debuglogkey, thingtolog);
				} catch(e) {}
			}
			return {
				init: function() {
					debuglog("Init");
					var cs = {};
					if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
						cs = { id: "civsci-id-2088213474", widget: "50f3d642-00fa-11e2-bb87-12313809f6d1" }
					} else {
						if (PGVARS.requesttype === "FRONTPAGE") {
							cs = { id: "civsci-id-1145892850", widget: "50f26d34-00fa-11e2-bb87-12313809f6d1" };
						} else if (PGVARS.requesttype === "STORY") {
							cs = { id: "civsci-id-113233050", widget: "50f26e38-00fa-11e2-bb87-12313809f6d1" };
						} else if ((["SECTION", "STATIC", "PAGE"].indexOf(PGVARS.requesttype)) && ["news", "local", "ae", "life", "sports", "opinion"].indexOf(PGVARS.param1) >= 0) {
							cs = { id: "civsci-id-113233050", widget: "50f26e38-00fa-11e2-bb87-12313809f6d1" };
						}
					}
					debuglog(cs);
					var $div = $("<div></div>");
					$div.attr("id", cs.id);
					$div.attr("data-civicscience-widget", cs.widget);
					debuglog($div);
					var $target = $(".pgevoke-civicscience")
					debuglog($target);
					debuglog($target.length);
					$target.append($div);
					$.getScript("https://get.civicscience.com/jspoll/5/csw-polyfills.js", function() {
					});
				}
			}
		})();
	} else {
		if (typeof PGVARS.site === "string" && PGVARS.site === "blade") {
			window.benn_siteid = "toledoblade";
			$(document).ready( function() {
				$.getScript("https://33cbdde7338bb51a4c8d-15d7b150d1867bc3d48f6d06043ea12e.ssl.cf2.rackcdn.com/poll/bennpollinit.js", function() {
				});
			});
		} else {
			if (PGVARS.requesttype === "FRONTPAGE") {
				window.benn_siteid = "pg-frontpage";
				$(document).ready( function() {
					$.getScript("https://33cbdde7338bb51a4c8d-15d7b150d1867bc3d48f6d06043ea12e.ssl.cf2.rackcdn.com/poll/bennpollinit.js", function() {
					});
				});
			} else if (PGVARS.requesttype === "STORY") {
				window.benn_siteid = "pg-article";
				$(document).ready( function() {
					$.getScript("https://33cbdde7338bb51a4c8d-15d7b150d1867bc3d48f6d06043ea12e.ssl.cf2.rackcdn.com/poll/bennpollinit.js", function() {
					});
					// $.getScript("https://widget.post-gazette.com/poll/bennpollinit.js", function() {
					// }); Switching both instances to https 9/21/2017
				});
			// } else if (PGVARS.requesttype === "SECTION" && (PGVARS.param1 === "news" || PGVARS.param1 === "local" || PGVARS.param1 === "business" || PGVARS.param1 === "ae" || PGVARS.param1 === "life" || PGVARS.param1 === "sports" || PGVARS.param1 === "opinion")) {
			// } else if ((PGVARS.requesttype === "SECTION" ||  PGVARS.requesttype === "SECTION") && ["news", "local", "ae", "life", "sports", "opinion"].indexOf(PGVARS.param1) >= 0) {
			} else if ((["SECTION", "STATIC", "PAGE"].indexOf(PGVARS.requesttype)) && ["news", "local", "ae", "life", "sports", "opinion"].indexOf(PGVARS.param1) >= 0) {
				debuglog("INITIALIZING CIVICSCIENCE");
				window.benn_siteid = "pg-section";
				$(document).ready( function() {
					$.getScript("https://33cbdde7338bb51a4c8d-15d7b150d1867bc3d48f6d06043ea12e.ssl.cf2.rackcdn.com/poll/bennpollinit.js", function() {
					});
					// $.getScript("https://widget.post-gazette.com/poll/bennpollinit.js", function() {
					// });
				});
			}
		}
	}
}

/*
HOME:
<div id="civsci-id-1145892850" data-civicscience-widget="50f26d34-00fa-11e2-bb87-12313809f6d1"></div>
<script type="text/javascript" async src="https://get.civicscience.com/jspoll/5/csw-polyfills.js"></script>

IN ARTICE:
<div id="civsci-id-423007115" data-civicscience-widget="eacc5c2a-27a1-8854-39e4-40810b4218fb"></div>
<script type="text/javascript" async src="https://get.civicscience.com/jspoll/5/csw-polyfills.js"></script>
*/

/*		"pg-frontpage":{
			"csid": "tgtid=50f26d34-00fa-11e2-bb87-12313809f6d1",
			"adpath": ""
		},
		"pg-section":{
			"csid": "tgtid=50f26e38-00fa-11e2-bb87-12313809f6d1",
			"adpath": ""
		},
		"pg-article":{
			"csid": "tgtid=50f26e38-00fa-11e2-bb87-12313809f6d1",
			"adpath": ""
		},
*/

if (typeof PGVARS === "object" && (PGVARS.requesttype === "FRONTPAGE" || PGVARS.requesttype === "SECTION" || PGVARS.requesttype === "TAG")) {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.infinitestorylist = (function() {
		var debuglogkey = "INFINITESTORYLIST",
			debuglog = function(thingtolog) {
				try {
					PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
				} catch(e) {}
			},
			defaults = {
				triggerpointoffset: 3500,
				storiesperrequest: 30,
				ratelimit: 250,
				errorsuntilfailure: 2
			},
			values = {
				targetbottom: 0,
				viewportbottom: 0,
				oldtargetheight: 0
			},
			settings = {},
			status = {
				alreadyloading: false,
				endofcontentreached: false,
				lastupdate: 0,
				updatepending: false,
				currentindex: 0,
				counter: 0,
				consecutiveerrors: 0
			},
			getTime = function() {
				var d = new Date();
				return d.getTime();
			},
			issetmulti = window.PGFNS.issetmulti;
		return {
			initialized: false,
			init: function(options) {
				if (typeof options !== "object") {
					debuglog("Cannot initialize. Invalid 'options' object.");
					return; 
				}
				// ----- REQUIRED -----
				if (typeof options.selector !== "string") {
					debuglog("Cannot initialize. Must set 'selector' within options object.");
					return;
				}
				theselector = options.selector;
				if (typeof options.template !== "string") {
					debuglog("Cannot initialize. Must set 'template' within options object.");
					return;
				}
				// if ($(options.template).length !== 1) {
				if (typeof PGTPLS !== "object" || PGTPLS === null || !PGLIB.all.underscore.getTplFunc(options.template)) {
					debuglog("Cannot initialize. Can't find _tpl '" + options.template + "'.");
					return;
				}
				options.hasendpoint = (typeof options.endpoint === "string");
				if (!options.hasendpoint) {
					debuglog("Cannot initialize. No endpoint provided.");
					return;
				}
				var pmatches = options.endpoint.match(/\$p/g);
				if (Array.isArray(pmatches) === false || pmatches.length !== 1) {
					debuglog("Cannot initialize. Could not find $p in endpoint.");
					return;
				}
				var endpointsplit = options.endpoint.split("$p");
				if (Array.isArray(endpointsplit) === false || endpointsplit.length !== 2) {
					return;
				}
				options.endpoint1 = endpointsplit[0];
				options.endpoint2 = endpointsplit[1];
				debuglog("Required options are present");
				// ----- Optional -----
				window.PGLIB.all.infinitestorylist.initialied = true;
				options.hasfirstsetjsondata = (typeof options.firstsetjsondata === "object");
				debuglog("Has first set? " + options.hasfirstsetjsondata);
				if (options.hasfirstsetjsondata) {
					if (typeof options.firstsetjsondata.articles !== "object" || !(Array.isArray(options.firstsetjsondata.articles)) || options.firstsetjsondata.articles.length === 0) {
						debuglog("Cannot use firstsetjsondata. Invalid data.");
						delete options.firstsetjsondata;
						options.hasfirstsetjsondata = false;
					} else {
						debuglog("Valid");
					}
				}
				if (typeof options.triggerpointoffset === "number") {
					options.triggerpointoffset = parseInt(options.triggerpointoffset);
				}
				if (typeof options.storiesperrequest === "number") {
					options.storiesperrequest = parseInt(options.storiesperrequest);
				}
				if (typeof options.ratelimit === "number") {
					options.ratelimit = parseInt(options.ratelimit);
				}
				if (typeof options.customdata !== "object" || options.customdata === null || Array.isArray(options.customdata)) {
					options.customdata = {};
				}
				options.usenolatest = (typeof options.usenolatest === "boolean" && options.usenolatest) ? true : false;
				debuglog("usenolatest? " + (options.usenolatest ? "YES" : "NO"));
				/*
				options.hasfirstsetdata =
				if (typeof options.firstset === "object") {
					options.firstset = options.firstset;
				}
				*/
				// ----- Initialize -----
				settings = $.extend({}, defaults, options);
				debuglog(settings);
				debuglog("Binding scroll");
				$(settings.selector).append("<div class='pgevoke-infinitestorylist-content'></div>");
				// $(settings.selector).append("<div class='pgevoke-infinitestorylist-spinner'>" + $("#pgevoke-_tpl-storyfeedspinner").html() + "</div>");
				var spinnerinnerhtmlfunc = PGLIB.all.underscore.getTplFunc("storyfeedspinner");
				var spinnerinnerhtml = spinnerinnerhtmlfunc({});
				$(settings.selector).append("<div class='pgevoke-infinitestorylist-spinner'>" + spinnerinnerhtml + "</div>");
				// var spinner = $("#pgevoke-_tpl-storyfeedspinner").html();
				// var templatefunction = _.template(spinner);
				// var theoutput = templatefunction(templatefunction);
				//$target.append(theoutput);
				$(document).ready(function() {
					window.PGLIB.all.infinitestorylist.seeIfWeNeedNewStories();	
				});
				$(window).on("scroll", function() {
					debuglog("Scroll detected");
					window.PGLIB.all.infinitestorylist.handleScroll();
				});
			},
			updateScrollValues: function() {
				PGLIB.all.infinitestorylist.updateValues([
					"targetbottom",
					"viewportbottom"
				]);
			},
			updateValues: function(itemsobj) {
				if (typeof itemsobj !== "object") { return; }
				if (!(Array.isArray(itemsobj))) { return; }
				var $target = $(settings.selector);
				if ($target.length !== 1) { return; }
				$target = $target.first();
				$.each(itemsobj, function(i, key) {
					switch(key) {
						case "targetbottom":
							if ($target.length === 0) {
								values[key] = 0;
							} else {
								var height = $target.height();
								var top = $target.offset().top;
								values[key] = Math.round(top + height);		
							}
							break;
						case "viewportbottom":
							values[key] = $(window).scrollTop() + $(window).height();
							break;
						case "oldtargetheight":
							values[key] = $target.height();
							break;
					}
				});
			},
			handleScroll: function() {
				// debuglog("Handle scroll called");
				var t = getTime();
				if (status.lastupdate === 0) { // First scroll
					PGLIB.all.infinitestorylist.seeIfWeNeedNewStories();
				} else if (status.updatepending) { // Already an update pending
					return; 
				} else if (t - status.lastupdate > settings.ratelimit) { // Nothing pending & enough time passed
					PGLIB.all.infinitestorylist.seeIfWeNeedNewStories();
				} else {
					status.updatepending = true;
					var waitperiod = (settings.ratelimit - (t - status.lastupdate));
					setTimeout(function() {
						PGLIB.all.infinitestorylist.seeIfWeNeedNewStories();
						status.updatepending = false;
					}, waitperiod);
				}
			},
			seeIfWeNeedNewStories: function() {
				// debuglog("Checking for new stories");
				debuglog("seeIfWeNeedNewStories(). status.alreadyloading: " + status.alreadyloading + " / status.endofcontentreached: " + status.endofcontentreached);
				if (status.alreadyloading || status.endofcontentreached) { return; }
				// if (PGVARS.sitecode !== "LIVE") {
					// if (status.currentindex > 10) { return; }
				// }
				PGLIB.all.infinitestorylist.updateScrollValues();
				debuglog("Updated scroll values");
				if (values["targetbottom"] === 0) { return; } // Document still loading
				debuglog("Scroll progress: " + (values["viewportbottom"] + settings["triggerpointoffset"]) + " / " + values["targetbottom"]);
				if (values["viewportbottom"] + settings["triggerpointoffset"] >= values["targetbottom"]) {
					debuglog("Trigger point reached.");
					PGLIB.all.infinitestorylist.loadNewStories(); // They've scrolled far enough down
				}		
			},
			loadNewStories: function() {
				debuglog("loadNewStories() called");
				status.alreadyloading = true;
				// pgrecentstories.spinner.show();
				PGLIB.all.infinitestorylist.updateValues(["oldtargetheight"]);
				var ajaxsettings = {};
				// ajaxsettings.template = "#pgevoke-_tpl-recent";
				ajaxsettings.template = settings.template;
				ajaxsettings.trackingselector = settings.selector;
				if (typeof settings.useModifiedTimestamps === "boolean") {
					ajaxsettings.useModifiedTimestamps = settings.useModifiedTimestamps;
				}
				debuglog("status.currentindex: " + status.currentindex);
				// debuglog(settings);
				if (status.currentindex === 0 && settings.hasfirstsetjsondata) {
					debuglog("Using firstsetjsondata");
					ajaxsettings.jsondata = settings.firstsetjsondata;
				} else if (settings.hasendpoint) {
					debuglog("Using endpoint");
					ajaxsettings.endpoint = settings.endpoint1 + status.currentindex + settings.endpoint2;
					// $(".pgevoke-infinitestorylist-spinner").show();
					PGLIB.all.infinitestorylist.setSpinner(settings.selector, true);
				} else {
					debuglog("Could not load new stories. No endpoint or firstsetjsondata.");
				}
				ajaxsettings.endfunction = PGLIB.all.infinitestorylist.endFunction;
				ajaxsettings.customdata = $.extend({}, settings.customdata, {
					"selector": settings.selector
				});
				ajaxsettings.usenolatest = settings.usenolatest;
				// ajaxsettings.customdata ={ "selector": settings.selector };
				debuglog(ajaxsettings);
				setTimeout(function() {
					var $target = $(settings.selector + " .pgevoke-infinitestorylist-content");
					// if ($target.coun)
					$target.loadAjaxContent(ajaxsettings);
				}, 100);
			},
			endFunction: function(jsondata, settingsajax) {
				debuglog("Running endFunction() v2");
				// debuglog(settings);
				if (typeof settingsajax.customdata === "object") {
					debuglog(settingsajax.customdata);
				}
				debuglog("jsondata...");
				debuglog(jsondata);
				if (typeof jsondata.status !== "string" || jsondata.status === "error") {
					status.consecutiveerrors += 1;
					debuglog("ERROR! This is #" + status.consecutiveerrors + " of " + settings.errorsuntilfailure + " before failure");
					if (status.consecutiveerrors >= settings.errorsuntilfailure) {
						PGLIB.all.infinitestorylist.setEndOfContentReached(settingsajax.customdata.selector);
					}
				} else {
					var lastitemofset = parseInt(jsondata.endCount, 10);
					var totalcount = parseInt(jsondata.totalCount, 10);
					debuglog("lastitemofset: " + lastitemofset);
					debuglog("totalcount: " + totalcount);
					if (lastitemofset >= totalcount) {
						PGLIB.all.infinitestorylist.setEndOfContentReached(settingsajax.customdata.selector);
					}	
				}
				/*
				if (typeof settings.callback === "function") {
					settings.callback(jsondata, settings);
				}
				*/
				$(document).trigger("pginfinitestorylist:doneloadingstories");
				PGLIB.all.clicktracker.trigger("infinite");
				// pgrecentstories.log("PG RECENT STORIES: End of content? " + pgrecentstories.endofcontentreached);
				debuglog("End of content? " + status.endofcontentreached);
				status.currentindex += 1;
				status.alreadyloading = false;
				// pgrecentstories.spinner.hide();
				PGLIB.all.infinitestorylist.seeIfWeNeedNewStories();
			},
			setEndOfContentReached: function(spinnerselector) {
				status.endofcontentreached = true;
				PGLIB.all.infinitestorylist.setSpinner(spinnerselector, false);
			},
			setSpinner: function(selector, truefalse) {
				debuglog("setSpinner()");
				if (typeof truefalse !== "boolean") { return; }
				var $target = $(selector + " .pgevoke-infinitestorylist-spinner");
				if ($target.length === 0) { debuglog("Couldn't find spinner target"); return; }
				if (truefalse) {
					debuglog("Found target");
					$target.css("display", "block");
				} else {
					$target.css("display", "none");
				}
			},
			kill: function() {
				debuglog("Killing infinite scroll");
				status.endofcontentreached = true;
			},
			getValues: function() {
				return values;
			}
		};
	})();
}

// **************************************
//    pgevoke.all.email-share
// **************************************
if (typeof PGVARS !== "undefined" && PGVARS.requesttype === "STORY") {
	window.PGLIB = window.PGLIB || {};
	window.PGLIB.all = window.PGLIB.all || {};
	window.PGLIB.all.emailshare = (function() {
		var debuglogkey = "EMAILSHARE";
		function debuglog(thingtolog) {
			try {
				PGLIB.utils.debuglog.log(debuglogkey, thingtolog);
			} catch(e) {}
		}
		return {
			init: function() {
				debuglog("init called v2");
				$("document").ready(function() {
					$("body").loadAjaxContent({
						"template": "emailsharepopup",
						"processfunction": "simple",
						"jsondata": {}
					});
					if (PGVARS.site === "pg") {
						$(document).on("click",".pgevoke-contentarea-socialbuttons-email, .pgevoke-socialshareheader-buttons-email", function () {
							PGLIB.all.emailshare.show();
						});
						$(document).on("click","#emailSubmit",function(){
							debuglog("Validating form");
							$('#tipform').validate();
							if ($('#tipform').valid()) {
								debuglog("Form is valid");
								$(".mfp-wrap").css("z-index",99999999);
								$(".mfp-bg").css("z-index",99999999);
								// grecaptcha.execute();
								PGLIB.all.emailshare.submit();
							} else {
								debuglog("Form is NOT valid")
							}
						});
						$(document).on("click", ".pgevoke-emailshare-modal-button", function() {
							$.magnificPopup.close();
						});						
					} else {
						$(document).on("click",".pgevoke-contentarea-socialbuttons-email, .pgevoke-socialshareheader-buttons-email", function () {
							console.log("EMAILCLICK");
							var thetitle = document.title.replace("|", "-");
							window.location.href="mailto:?subject="+encodeURIComponent(thetitle)+"&body="+encodeURIComponent("Check out this article from The Blade:\n\n"+PGVARS.canonicalurl);
						});						
					}
					// window.location.href="mailto:someone@something.com?subject=Sharing Article: "+encodeURIComponent(document.title)+"&body=Check out this article on The Blade! "+encodeURIComponent(PGVARS.canonicalurl)


				});
			},
			show: function() {
				$.magnificPopup.open({
				  items: {
				    src: '#pgevoke-tipform', // can be a HTML string, jQuery object, or CSS selector
				    type: 'inline',
				  },
				});
  			},
  			mailto: function() {
  				// window.location.href="mailto:someone@something.com?subject=Sharing Article: "+encodeURIComponent(document.title)+"&body=Check out this article on The Blade! "+encodeURIComponent(PGVARS.canonicalurl)
  			},
			submit: function() {
				debuglog("The submit() function was called");
				var theurl;
				if (PGFNS.issetmulti(document, "location", "href") && document.location.href !== "") {
					theurl = document.location.href;
				} else {
					return false;
				}
				/*
				if (typeof PGVARS === "object" && typeof PGVARS.canonicalurl === "string") {
					theurl = PGVARS.canonicalurl;
				} else {
					return false;
				}
				*/
				window.PGLIB.all.emailshare.submitButtonEnabled(false);
				var payload = {
					securedata:"test",
					url: theurl,
					title: document.title,
					emailfrom: $("#tipform input[name='emailfrom']").val(),
					emailto: $("#tipform input[name='emailto']").val(),
					"g-recaptcha-response":$("#tipform #g-recaptcha-response").val()
				};
				debuglog("payload:");
				debuglog(payload);
				// var pURL = _PG.settings.site.api+"sendStoryEmail/";
				var pURL;
				if (PGVARS.site === "blade") {
					pURL = 'https://auth.toledoblade.com/1/user/sendStoryEmail/';	
				} else {
					pURL = 'https://auth.post-gazette.com/1/user/sendStoryEmail/';	
				}
				$.ajax({
			        type: "POST",
			        dataType: "jsonp",
			        url: pURL,
			        processData: !1,
			        data: "payload=" + encodeURIComponent(JSON.stringify(payload)),
			        timeout: 10000,
			        success: function(a) {
			        	debuglog("AJAX success");
			            debuglog(a);
			            if (a.status == "ok") {
			            	// $(".ui-dialog-content:first").dialog('close')
			            	// grecaptcha.reset();
			            	$("#tipform input").val("");
			            	$.magnificPopup.close();
			            	// alert("Your email has been sent");
			            	$.magnificPopup.open({
			            		items: {
			            			src: "<div class='pgevoke-emailshare-modal'><div class='pgevoke-emailshare-modal-text'>Your email has been sent. Thanks!</div><div class='pgevoke-emailshare-modal-button'>OK</div></div>",
			            			type: "inline",
			            		},
			            		modal: true
			            	});
			            } else {
			            	$.magnificPopup.close();
			            	// alert("Error "+a.error);
			            	$.magnificPopup.open({
			            		items: {
			            			src: "<div class='pgevoke-emailshare-modal'><div class='pgevoke-emailshare-modal-text'>Sorry, an error occurred and the story could not be sent. Please try again later. (Error code: 102).</div><div class='pgevoke-emailshare-modal-button'>OK</div></div>",
			            			type: "inline",
			            		},
			            		modal: true
			            	});
			            	// grecaptcha.reset();
			            }
			            window.PGLIB.all.emailshare.submitButtonEnabled(true);
			        },
			        error: function(a, err) {
			        	$.magnificPopup.close();
			            	// alert("Error "+a.error);
		            	$.magnificPopup.open({
		            		items: {
		            			src: "<div class='pgevoke-emailshare-modal'><div class='pgevoke-emailshare-modal-text'>Sorry, an error occurred and the story could not be sent. Please try again later. (Error code: 103).</div><div class='pgevoke-emailshare-modal-button'>OK</div></div>",
		            			type: "inline",
		            		},
		            		modal: true
		            	});
			           debuglog("ERROR");
			           debuglog(JSON.stringify(a))
			           a.message = err;
			           debuglog(a);
			           window.PGLIB.all.emailshare.submitButtonEnabled(true);
			           // grecaptcha.reset();
			        }
			    });
			},
			submitButtonEnabled: function(bool) {
				if (typeof bool !== "boolean") { return false; }
				$("button#emailSubmit").prop("disabled", (bool === false));
			}
		};
	})();
	PGLIB.all.emailshare.init();
}
window.pgEmailShareSubmit = function() {
	PGLIB.all.emailshare.submit();
};

// **********************************
//           pg.all.airship
// **********************************
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1566326047.5308695
window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.airship = (function() {
	var debuglogkey = "AIRSHIP";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var settings = {
		"pg": {
		    vapidPublicKey: 'BFCGx76wYxhNFqhkWKCNWFG65QxPxqpZUh8-lzGiP8YFIky6ig-5q3aAbd6r_d3yGSeAZMjBvvA24n6upx6k7K4=',
		    websitePushId: 'web.com.post-gazette.airship',
		    appKey: 'WxV3iiywQ5G0DVBjVbiPoA',
		    token: 'MTpXeFYzaWl5d1E1RzBEVkJqVmJpUG9BOml6MXV0Snk3cjhYcTJnZWx2b0RZeGlZRlgxd3JsWXR0Q2hOTnFyVDREZmM'
		},
		"blade": {
		    vapidPublicKey: 'BIo4AeXbkO8QK0-aHzrWpUb-yIKdYmbBJSmwpehOHf1NWZZYpvdY1raAKWd_0HOItxK2RVozhOiZ_rrjjhMQa1g=',
		    appKey: '6-_GTx28RmWMteKWLMC4_Q',
		    token: 'MTo2LV9HVHgyOFJtV010ZUtXTE1DNF9ROlBKc1BYZGFLVlJWWHFEdnhZby1JTEk5YXh0cFJCZmxJZkc3ZXNobzBmVUE'
		}
	};
	return {

		/*
		!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
		}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
		n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
		v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
		  'UA', );
		*/

		init: function() {
			debuglog("init() called");
			if (typeof settings[PGVARS.site] !== "object") {
				debuglog("No settings object found. Exiting.");
				return false;
			}
			!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
			}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
			n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
			v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
			  'UA', settings[PGVARS.site]);			
			UA.then(function(sdk) {
				debuglog("Calling sdk.register()");
				sdk.register();
			}).catch(function(err) { (navigator.serviceWorker) 
				debuglog("ERROR...");
				debuglog(err);
			}); 
		}
	};
})();

/*
!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
  'UA', {
    vapidPublicKey: 'BFCGx76wYxhNFqhkWKCNWFG65QxPxqpZUh8-lzGiP8YFIky6ig-5q3aAbd6r_d3yGSeAZMjBvvA24n6upx6k7K4=',
    websitePushId: 'web.com.post-gazette.airship',
    appKey: 'WxV3iiywQ5G0DVBjVbiPoA',
    token: 'MTpXeFYzaWl5d1E1RzBEVkJqVmJpUG9BOml6MXV0Snk3cjhYcTJnZWx2b0RZeGlZRlgxd3JsWXR0Q2hOTnFyVDREZmM'
  });

if (PGVARS.requesttype === "PAGE" && btoa(PGVARS.param1) == "YWlyc2hpcHRlc3Q=") {
	UA.then(function(sdk) {
		sdk.register();
	}).catch(function(err) { (navigator.serviceWorker) 
		console.log("UASDK: ERROR");
		console.log(bigString);
		alert(bigString); // + "\n" + err));
		alert("userAgent: " + navigator.userAgent);
		alert(err);
		// alert(err);
	}); 
}


/*
!function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
  'UA', {
    vapidPublicKey: 'BFCGx76wYxhNFqhkWKCNWFG65QxPxqpZUh8-lzGiP8YFIky6ig-5q3aAbd6r_d3yGSeAZMjBvvA24n6upx6k7K4=',
    websitePushId: 'web.com.post-gazette.airship',
    appKey: 'WxV3iiywQ5G0DVBjVbiPoA',
    token: 'MTpXeFYzaWl5d1E1RzBEVkJqVmJpUG9BOml6MXV0Snk3cjhYcTJnZWx2b0RZeGlZRlgxd3JsWXR0Q2hOTnFyVDREZmM'
  });

if (PGVARS.requesttype === "PAGE" && btoa(PGVARS.param1) == "YWlyc2hpcHRlc3Q=") {
	var isChrome = navigator.userAgent.match(/Chrome\/(\d\d)\./);
	if (typeof isChrome === "undefined" || isChrome === null) {
		isChrome = false;
	}
	var numberChrome = (isChrome) ? Number(isChrome[1]) : "N/A";
	// console.log("UASDK: Initializing");
	// console.log("navigator.serviceWorker: " + navigator.serviceWorker);
	// console.log("window.PushManager: " + window.PushManager);
	// console.log("isChrome: " + isChrome);
	// console.log("numberChrome: " + numberChrome);
	var bigString = "";
	bigString += "v: 8" + "\n"; // test
	bigString += "navigator.serviceWorker: " + (typeof navigator.serviceWorker !== "undefined").toString() + "\n";
	bigString += "window.PushManager: " + (typeof window.PushManager !== "undefined").toString() + "\n";
	bigString += "safari: " + (typeof window.safari !== "undefined").toString() + "\n";
	bigString += "isChrome: " + isChrome.toString() + "\n";
	bigString += "numberChrome: " + numberChrome.toString() + "\n";
	// bigString += "userAgent: " + navigator.userAgent;
	console.log(bigString);
	UA.then(function(sdk) {
		sdk.register();
	}).catch(function(err) { (navigator.serviceWorker) 
		console.log("UASDK: ERROR");
		console.log(bigString);
		alert(bigString); // + "\n" + err));
		alert("userAgent: " + navigator.userAgent);
		alert(err);
		// alert(err);
	}); 
}
*/


window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.webnotifs = (function() {
	var THISMODULE;
	var debuglogkey = "WEBNOTIFS";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var defaults = {
		"text": "We'd like to show you notifications for the latest news and updates",
		"buttonallow": "ALLOW",
		"buttondeny": "NO THANKS",
		"wait": 5
	};
	var settings = {
		"pg": {
			"image": "https://www.post-gazette.com/apple-touch-icon.png"
		},
		"blade": {
			"image": "https://a9a1263f9caafb223a0e-ed6332b96e149fbe46aac9e4618971f3.ssl.cf2.rackcdn.com/images/blade/evoke/blade-logo-b-lg.png"
		}
	};
	var airshipjson = {
		"pg": {
		    vapidPublicKey: 'BFCGx76wYxhNFqhkWKCNWFG65QxPxqpZUh8-lzGiP8YFIky6ig-5q3aAbd6r_d3yGSeAZMjBvvA24n6upx6k7K4=',
		    websitePushId: 'web.com.post-gazette.airship',
		    appKey: 'WxV3iiywQ5G0DVBjVbiPoA',
		    token: 'MTpXeFYzaWl5d1E1RzBEVkJqVmJpUG9BOml6MXV0Snk3cjhYcTJnZWx2b0RZeGlZRlgxd3JsWXR0Q2hOTnFyVDREZmM'
		},
		"blade": {
		    vapidPublicKey: 'BIo4AeXbkO8QK0-aHzrWpUb-yIKdYmbBJSmwpehOHf1NWZZYpvdY1raAKWd_0HOItxK2RVozhOiZ_rrjjhMQa1g=',
		    appKey: '6-_GTx28RmWMteKWLMC4_Q',
		    token: 'MTo2LV9HVHgyOFJtV010ZUtXTE1DNF9ROlBKc1BYZGFLVlJWWHFEdnhZby1JTEk5YXh0cFJCZmxJZkc3ZXNobzBmVUE'
		}
	};
	var alreadyopen = false;
	var interval = 43200; // Minutes; 10080 = 7 days; 43200 = 30 days
	var wait = 10; // Seconds to wait before popping up box
	var initialized = false;
	var localstoragekey = "airship__chanID";
	// var permission;
	function sendEvent(action, label) {
		debuglog("SENDING EVENT: " + label);
		ga('itTracker.send',{
			hitType: 'event',
			eventCategory: 'WebNotifs',
			eventAction: action,
			eventLabel: label
		});	
	}
	function bindButtons() {
		$(document).on("click", ".pg-notifybox-button-allow", function() {
			THISMODULE.hideBox();
			console.log("NOTIFYBOX: 'ALLOW' button clicked");
			console.log("NOTIFYBOX: Calling UA.then");	
			UA.then(function(sdk) {
				console.log("NOTIFYBOX: Calling sdk.register()");
				sendEvent("SoftAskClick", "Allow");
				sdk.register();
			}).catch(function(err) { (navigator.serviceWorker) 
				console.log("NOTIFYBOX: ERROR...");
				console.log(err);
				sendEvent("SoftAskClick", "Allow w/ Error");
			}); 

		});
		$(document).on("click", ".pg-notifybox-button-deny", function() {
			THISMODULE.hideBox();
			sendEvent("SoftAskClick", "Deny");
		});
	};
	return {
		init: function() {
			THISMODULE = this;
			if (PGVARS.site === "blade") {
				debuglog("Off for Blade. Exiting");
				return false;
			}
			THISMODULE.loadUAScriptASYNC();
			THISMODULE.writeChanID();
			// THISMODULE.setPermission();
			var permission = THISMODULE.getPermission();
			THISMODULE.setAnalyticsDimension(permission);
			if (permission === "") {
				debuglog("Notification.permission missing. Exiting");
				return false;
			}
			if (permission === "granted" || permission === "denied") {
				debuglog("Already " + permission + ". Exiting.");
				return false;
			}
			if (!THISMODULE.isEligible()) {
				return false;
			}
			if (typeof airshipjson[PGVARS.site] !== "object") {
				debuglog("No settings object found. Exiting.");
				return false;
			}
			if (PGFNS.issetmulti(PGVARS, "technology", "name")) {
				if (PGVARS.technology.name === "ie" || PGVARS.technology.name === "edge") {
					debuglog("IE/Edge not supported. Exiting.");
					return false;
				}
			}
			if (!initialized) {
				initialized = true;
				bindButtons();
			}
			opts = defaults;
			if (typeof settings[PGVARS.site] === "object" && settings[PGVARS.site] !== null) {
				opts = $.extend(opts, settings[PGVARS.site]);

				if (typeof settings[PGVARS.site]["image"] === "string") {
					debuglog("Preloading image " + settings[PGVARS.site]["image"]);
					var preloadImg = new Image();
		    		preloadImg.src = settings[PGVARS.site]["image"];
				}
			}
			debuglog("Getting ready to show");
			debuglog(opts);
			setTimeout(function() { THISMODULE.showBox(opts);	}, opts.wait*1000);		
		},
		loadUAScriptASYNC: function() {
			!function(n,r,e,t,c){var i,o="Promise"in n,u={then:function(){return u},catch:function(n){
			return n(new Error("Airship SDK Error: Unsupported browser")),u}},s=o?new Promise((function(n,r){i=function(e,t){e?r(e):n(t)}})):u
			;s._async_setup=function(n){if(o)try{i(null,n(c))}catch(n){i(n)}},n[t]=s;var a=r.createElement("script");a.src=e,a.async=!0,a.id="_uasdk",
			a.rel=t,r.head.appendChild(a)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
			  'UA', airshipjson[PGVARS.site]);

			/* !function(n,t,c,e,u){function r(n){try{f=n(u)}catch(n){return h=n,void i(p,n)}i(s,f)}function i(n,t){for(var c=0;c<n.length;c++)d(n[c],t);
			}function o(n,t){return n&&(f?d(n,f):s.push(n)),t&&(h?d(t,h):p.push(t)),l}function a(n){return o(!1,n)}function d(t,c){
			n.setTimeout(function(){t(c)},0)}var f,h,s=[],p=[],l={then:o,catch:a,_setup:r};n[e]=l;var v=t.createElement("script");
			v.src=c,v.async=!0,v.id="_uasdk",v.rel=e,t.head.appendChild(v)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
			  'UA', airshipjson[PGVARS.site]);
			*/
			console.log("AIRSHIP: Done appending ua-sdk.min.js script (loads asynchronously)");	
		},
		setPermission: function() {

		},
		getPermission: function() {
			if (typeof Notification === "undefined" || typeof Notification.permission !== "string") {
				return "";
			} else {
				return Notification.permission;
			}
		},
		writeChanID: function() {
			console.log("AIRSHIP: writeChanID() called v2");
			UA.then(function(sdk) {
				console.log("AIRSHIP: UA.then called");
				console.log("AIRSHIP: typoeof sdk: ", typeof sdk);
				console.log("AIRSHIP: sdk:", sdk);
				sdk.getChannel().then(channel => {
				   console.log("AIRSHIP: Channel ID: %s", channel.id)
				});
				if (typeof (sdk === "object") && PGFNS.issetmulti(sdk, "channel", "id") && typeof(sdk.channel.id === "string")) {
					console.log("AIRSHIP: CHANNEL ID: " + sdk.channel.id);
					localStorage.setItem(localstoragekey, sdk.channel.id);
				} else {
					console.log("AIRSHIP: CHANNEL ID: Not found");
				}
			});
		},
		getChanID: function() {
			var chanID = localStorage.getItem(localstoragekey);
			return (chanID === null) ? "" : chanID;
		},
		showBox: function(opts) {
			debuglog("Show called");
			if (typeof window.pgDisableWebNotifsBox === "boolean" && window.pgDisableWebNotifsBox === true) {
				debuglog("Web Notifs Disabled via Composer. Exiting.");
				return false;
			}
			if (alreadyopen) {
				debuglog("Already open. Exiting.");
				return false;
			}
			alreadyopen = true;
			optsList = ["image", "text", "buttonallow", "buttondeny"];
			$.each(optsList, function(i, val) {
				opts[val] = (typeof opts[val] === "string") ? opts[val] : "";
			});
			debuglog("opts:");
			debuglog(opts);
			$("body").addClass("pg-notifyboxopen");
			// if (opts.htmlstring === "") {};
			$("body").loadAjaxContent({
				"template": "notifybox",
				"processfunction": "simple",
				"jsondata": opts
			});
			debuglog("Waiting for div to show up in DOM");
			setTimeout(function() {
				debuglog("Waiting for images to load.");
				$(".pgnotifybox").imagesLoaded().done(function(){
					debuglog("Done loading images. Showing.");
					$("body").addClass("pg-notifyboxopen-show");
				});
			}, 100);
		},
		hideBox: function() {
			$("body").removeClass("pg-notifyboxopen").removeClass("pg-notifyboxopen-show");
			setTimeout(function() {
				$(".pg-notifybox").remove();
				alreadyopen = false;
			}, 1200); // Wait for CSS animation
		},
		isEligible: function() {
			var nowtime = Math.floor(Date.now() / 60000); // Minutes
			var key = "pgnotifybox_lastshown";
			var lastshown = localStorage.getItem("pgnotifybox_lastshown");
			var elapsedtime;
			if (typeof lastshown !== "string" || lastshown.length === 0) {
				debuglog("No valid lastshown key found. Setting & showing notification");
				localStorage.setItem(key, nowtime);
				return true;
			} else {
				lastshown = parseInt(lastshown);
				elapsedtime = nowtime - lastshown;
				if (elapsedtime >= interval) {
					debuglog("Found lastshown. Enough time to has passed (" + elapsedtime + " / " + interval + " mins). Showing");
					localStorage.setItem(key, nowtime);
					return true;
				} else {
					debuglog("Found lastshown. Not enough time has elapsed (" + elapsedtime + " / " + interval + " mins). Exiting.");
					return false;
				}
			}
		},
		setAnalyticsDimension: function(perm) {
			var theval = (perm === "granted") ? "true" : "false";
			ga("segmentTracker.set","dimension11",theval);
			return;
		}
	};
})();
PGLIB.all.webnotifs.init();

window.PGLIB = window.PGLIB || {};
window.PGLIB.all = window.PGLIB.all || {};
window.PGLIB.all.admrl = (function() {
	var debuglogkey = "ADMRL";
	function debuglog(thingtolog) {
		try {
			DEBUGLOGR.log(debuglogkey, thingtolog);
		} catch(e) {}
	}
	var eng = function(){
		!(function(o,n,t){t=o.createElement(n),o=o.getElementsByTagName(n)[0],t.async=1,t.src="https://doorbrazil.com/v2/0/hsor1P7GxL7AfhkTCQwtI9rd8Onjbmi6y8hWUMttFj4JVyRrj3Iy7JG2Wravvdd6wem",o.parentNode.insertBefore(t,o)})(document,"script"),(function(o,n){o[n]=o[n]||function(){(o[n].q=o[n].q||[]).push(arguments)}})(window,"admiral");!(function(n,e,r,t){function o(){if((function o(t){try{return(t=localStorage.getItem("v4ac1eiZr0"))&&0<t.split(",")[4]}catch(n){}return!1})()){var t=n[e].pubads();typeof t.setTargeting===r&&t.setTargeting("admiral-engaged","true")}}(t=n[e]=n[e]||{}).cmd=t.cmd||[],typeof t.pubads===r?o():typeof t.cmd.unshift===r?t.cmd.unshift(o):t.cmd.push(o)})(window,"googletag","function");
	};
	var meas = function(){
		!(function(o,n,t){t=o.createElement(n),o=o.getElementsByTagName(n)[0],t.async=1,t.src="https://doorbrazil.com/v2/0/rdq2sDe6nspmxBZ-BNK2jaFcyy9rGqt01zoC84vQMIqjnNRqKJZ5Nu_thr5BqjrnPqKSaVRCr9ohyp35w",o.parentNode.insertBefore(t,o)})(document,"script"),(function(o,n){o[n]=o[n]||function(){(o[n].q=o[n].q||[]).push(arguments)}})(window,"admiral");!(function(n,e,r,t){function o(){if((function o(t){try{return(t=localStorage.getItem("v4ac1eiZr0"))&&0<t.split(",")[4]}catch(n){}return!1})()){var t=n[e].pubads();typeof t.setTargeting===r&&t.setTargeting("admiral-engaged","true")}}(t=n[e]=n[e]||{}).cmd=t.cmd||[],typeof t.pubads===r?o():typeof t.cmd.unshift===r?t.cmd.unshift(o):t.cmd.push(o)})(window,"googletag","function");
	};
	return {
		init: function() {
			debuglog("init()");
			_PG._listen("accountStatus",function(e,a) {
		 		_PG.utils.log(a);
		 		_PG.utils.log(a.data);
				if (a.data && a.data.activePaidUser === "true") {
					_PG.utils.log("ADMRLMEAS");
					debuglog("meas()");
					meas();
				} else {
					_PG.utils.log("ADMRLENG");
					debuglog("eng()");
					eng();
				}
			});
		}
	};
})();
PGLIB.all.admrl.init();

// **********************************
//       pg.all.bodyend.js
// **********************************
// try {

// $(document).ready( function() {
$("body").on("click.embedcode", ".pg-embedcode-largeimage-imgwrapper[href]:not([data-pg-embedcode-largeimage-behavior='external']),.pg-embedcode-smallimage-imgwrapper[href]:not([data-pg-embedcode-smallimage-behavior='external'])", function(event) {
	event.preventDefault();
	if (typeof $(this).attr("href") !== "string") { return; }
	var thehref = $(this).attr("href")
	$.magnificPopup.open({
		items: {
		  src: thehref,
		  type: 'image'
		},
		callbacks: {
			open: function() {
				PGFNS.setViewportMaxScale(2.0);
			},
			close: function() {
				PGFNS.setViewportMaxScale(1.0);
			}
		}
	});
});

try {
	$(document).ready( function() {
		var abuseemail = ""; 
		if (typeof PGSITESETTINGS.commentabuseemail === "string") {
			$(document).on("click", ".pgevoke-story-comments-abuse", function() {
				$.magnificPopup.open({
					items: {
					  src: $('<div class="pg-whitepopup">To report inappropriate comments, abuse and/or repeat offenders, please send an email to <a href="mailto:' + PGSITESETTINGS.commentabuseemail + '">socialmedia@post-gazette.com</a> and include a link to the article and a copy of the comment. Your report will be reviewed in a timely manner. Thank you.</div>'),
					  type: 'inline'
					}
				});
			});
		}
	});
} catch(e) {}

$(document).ready(function() {
	// ----- PG Current -----
	$(document).on("click", ".pg-current", function() {
		window.location.href = "https://newsinteractive.post-gazette.com/blog/category/current/";
	});
	// ----- RTK sync pixel -----
	if (PGVARS.site === "pg") {
		// Create an iframe element
		var rtk_cookie_url = document.location.protocol + "//sync.rtk.io/cs";
		var rtk_cookie_pixel = document.createElement('iframe');
		rtk_cookie_pixel.style.display = "none";
		rtk_cookie_pixel.src = rtk_cookie_url;
		document.body.appendChild(rtk_cookie_pixel);
	}
	if (PGVARS.site === "blade") {
	}
	// ---- Mark Visited Links -----
	if (PGFNS.issetmulti(PGVARS, "qsps", "markvisitedlinks") && PGVARS.qsps["markvisitedlinks"].toString() === "1") {
		$("body").addClass("pg-markvisitedlinks");
	}
});


/*
if (typeof window.PGCUSTOMCODE === "object" & Array.isArray(window.PGCUSTOMCODE)) {
  $.each(window.PGCUSTOMCODE, function(i, item) {
	if (typeof item === "function") {
		item();
	}
  });
}
*/

})(jQuery);
// End of package-wrapping anonymous function, which takes in $ as a parameter