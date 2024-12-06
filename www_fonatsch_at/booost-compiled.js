;
define("booost-ttw", function(){});

/* The following line defines global variables defined elsewhere. */
/* globals $, jQuery, window */

/* do not include jquery multiple times */
if (window.jQuery){
  define('jquery', [], function(){
    return window.jQuery;
  });
}

require([
  'jquery'
], function($){
  

    jQuery(function ($) {
        $('#portal-globalnav .noClick').click(function (e) {
            e.preventDefault();
        });

        // $('ul.nav li.dropdown').hover(function() {
        //     $(this).closest('.dropdown-menu').stop(true, true).show();
        //     $(this).addClass('open');
        // }, function() {
        //     $(this).closest('.dropdown-menu').stop(true, true).hide();
        //     $(this).removeClass('open');
        // });
        $('ul.nav li.dropdown .opener').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('menu-open');
            $(this).parent().next('.dropdown-menu').toggleClass('menu-open');
            ;
        });
    });

});

define("webcouturier-dropdownmenu", function(){});

/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.18.2'; 


// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
	silverlight: [
		{version: [3,0], types: ['video/mp4','video/m4v','video/mov','video/wmv','audio/wma','audio/m4a','audio/mp3','audio/wav','audio/mpeg']}
	],
	flash: [
		{version: [9,0,124], types: ['video/mp4','video/m4v','video/mov','video/flv','video/rtmp','video/x-flv','audio/flv','audio/x-flv','audio/mp3','audio/m4a','audio/mpeg', 'video/youtube', 'video/x-youtube', 'video/dailymotion', 'video/x-dailymotion', 'application/x-mpegURL']}
		//,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
	],
	youtube: [
		{version: null, types: ['video/youtube', 'video/x-youtube', 'audio/youtube', 'audio/x-youtube']}
	],
	vimeo: [
		{version: null, types: ['video/vimeo', 'video/x-vimeo']}
	]
};

/*
Utility methods
*/
mejs.Utility = {
	encodeUrl: function(url) {
		return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
	},
	escapeHTML: function(s) {
		return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
	},
	absolutizeUrl: function(url) {
		var el = document.createElement('div');
		el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
		return el.firstChild.href;
	},
	getScriptPath: function(scriptNames) {
		var
			i = 0,
			j,
			codePath = '',
			testname = '',
			slashPos,
			filenamePos,
			scriptUrl,
			scriptPath,			
			scriptFilename,
			scripts = document.getElementsByTagName('script'),
			il = scripts.length,
			jl = scriptNames.length;
			
		// go through all <script> tags
		for (; i < il; i++) {
			scriptUrl = scripts[i].src;
			slashPos = scriptUrl.lastIndexOf('/');
			if (slashPos > -1) {
				scriptFilename = scriptUrl.substring(slashPos + 1);
				scriptPath = scriptUrl.substring(0, slashPos + 1);
			} else {
				scriptFilename = scriptUrl;
				scriptPath = '';			
			}
			
			// see if any <script> tags have a file name that matches the 
			for (j = 0; j < jl; j++) {
				testname = scriptNames[j];
				filenamePos = scriptFilename.indexOf(testname);
				if (filenamePos > -1) {
					codePath = scriptPath;
					break;
				}
			}
			
			// if we found a path, then break and return it
			if (codePath !== '') {
				break;
			}
		}
		
		// send the best path back
		return codePath;
	},
	/*
	 * Calculate the time format to use. We have a default format set in the
	 * options but it can be imcomplete. We ajust it according to the media
	 * duration.
	 *
	 * We support format like 'hh:mm:ss:ff'.
	 */
	calculateTimeFormat: function(time, options, fps) {
		if (time < 0) {
			time = 0;
		}

		if(typeof fps == 'undefined') {
		    fps = 25;
		}

		var format = options.timeFormat,
			firstChar = format[0],
			firstTwoPlaces = (format[1] == format[0]),
			separatorIndex = firstTwoPlaces? 2: 1,
			separator = ':',
			hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1)*fps).toFixed(3)),
			lis = [
				[frames, 'f'],
				[seconds, 's'],
				[minutes, 'm'],
				[hours, 'h']
			];

		// Try to get the separator from the format
		if (format.length < separatorIndex) {
			separator = format[separatorIndex];
		}

		var required = false;

		for (var i=0, len=lis.length; i < len; i++) {
			if (format.indexOf(lis[i][1]) !== -1) {
				required=true;
			}
			else if (required) {
				var hasNextValue = false;
				for (var j=i; j < len; j++) {
					if (lis[j][0] > 0) {
						hasNextValue = true;
						break;
					}
				}

				if (! hasNextValue) {
					break;
				}

				if (!firstTwoPlaces) {
					format = firstChar + format;
				}
				format = lis[i][1] + separator + format;
				if (firstTwoPlaces) {
					format = lis[i][1] + format;
				}
				firstChar = lis[i][1];
			}
		}
		options.currentTimeFormat = format;
	},
	/*
	 * Prefix the given number by zero if it is lower than 10.
	 */
	twoDigitsString: function(n) {
		if (n < 10) {
			return '0' + n;
		}
		return String(n);
	},
	secondsToTimeCode: function(time, options) {
		if (time < 0) {
			time = 0;
		}

		// Maintain backward compatibility with method signature before v2.18.
		if (typeof options !== 'object') {
			var format = 'm:ss';
			format = arguments[1] ? 'hh:mm:ss' : format; // forceHours
			format = arguments[2] ? format + ':ff' : format; // showFrameCount

			options = {
				currentTimeFormat: format,
				framesPerSecond: arguments[3] || 25
			};
		}

		var fps = options.framesPerSecond;
		if(typeof fps === 'undefined') {
			fps = 25;
		}

		var format = options.currentTimeFormat,
			hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1)*fps).toFixed(3));
			lis = [
				[frames, 'f'],
				[seconds, 's'],
				[minutes, 'm'],
				[hours, 'h']
			];

		var res = format;
		for (i=0,len=lis.length; i < len; i++) {
			res = res.replace(lis[i][1]+lis[i][1], this.twoDigitsString(lis[i][0]));
			res = res.replace(lis[i][1], lis[i][0]);
		}
		return res;
	},
	
	timeCodeToSeconds: function(hh_mm_ss_ff, forceHours, showFrameCount, fps){
		if (typeof showFrameCount == 'undefined') {
		    showFrameCount=false;
		} else if(typeof fps == 'undefined') {
		    fps = 25;
		}
	
		var tc_array = hh_mm_ss_ff.split(":"),
			tc_hh = parseInt(tc_array[0], 10),
			tc_mm = parseInt(tc_array[1], 10),
			tc_ss = parseInt(tc_array[2], 10),
			tc_ff = 0,
			tc_in_seconds = 0;
		
		if (showFrameCount) {
		    tc_ff = parseInt(tc_array[3])/fps;
		}
		
		tc_in_seconds = ( tc_hh * 3600 ) + ( tc_mm * 60 ) + tc_ss + tc_ff;
		
		return tc_in_seconds;
	},
	

	convertSMPTEtoSeconds: function (SMPTE) {
		if (typeof SMPTE != 'string') 
			return false;

		SMPTE = SMPTE.replace(',', '.');
		
		var secs = 0,
			decimalLen = (SMPTE.indexOf('.') != -1) ? SMPTE.split('.')[1].length : 0,
			multiplier = 1;
		
		SMPTE = SMPTE.split(':').reverse();
		
		for (var i = 0; i < SMPTE.length; i++) {
			multiplier = 1;
			if (i > 0) {
				multiplier = Math.pow(60, i); 
			}
			secs += Number(SMPTE[i]) * multiplier;
		}
		return Number(secs.toFixed(decimalLen));
	},	
	
	/* borrowed from SWFObject: http://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
	removeSwf: function(id) {
		var obj = document.getElementById(id);
		if (obj && /object|embed/i.test(obj.nodeName)) {
			if (mejs.MediaFeatures.isIE) {
				obj.style.display = "none";
				(function(){
					if (obj.readyState == 4) {
						mejs.Utility.removeObjectInIE(id);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				obj.parentNode.removeChild(obj);
			}
		}
	},
	removeObjectInIE: function(id) {
		var obj = document.getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}		
	}
};


// Core detector, plugins are added below
mejs.PluginDetector = {

	// main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
	hasPluginVersion: function(plugin, v) {
		var pv = this.plugins[plugin];
		v[1] = v[1] || 0;
		v[2] = v[2] || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	},

	// cached values
	nav: window.navigator,
	ua: window.navigator.userAgent.toLowerCase(),

	// stored version numbers
	plugins: [],

	// runs detectPlugin() and stores the version number
	addPlugin: function(p, pluginName, mimeType, activeX, axDetect) {
		this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
	},

	// get the version number from the mimetype (all but IE) or ActiveX (IE)
	detectPlugin: function(pluginName, mimeType, activeX, axDetect) {

		var version = [0,0,0],
			description,
			i,
			ax;

		// Firefox, Webkit, Opera
		if (typeof(this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
			description = this.nav.plugins[pluginName].description;
			if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
				version = description.replace(pluginName, '').replace(/^\s+/,'').replace(/\sr/gi,'.').split('.');
				for (i=0; i<version.length; i++) {
					version[i] = parseInt(version[i].match(/\d+/), 10);
				}
			}
		// Internet Explorer / ActiveX
		} else if (typeof(window.ActiveXObject) != 'undefined') {
			try {
				ax = new ActiveXObject(activeX);
				if (ax) {
					version = axDetect(ax);
				}
			}
			catch (e) { }
		}
		return version;
	}
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash','Shockwave Flash','application/x-shockwave-flash','ShockwaveFlash.ShockwaveFlash', function(ax) {
	// adapted from SWFObject
	var version = [],
		d = ax.GetVariable("$version");
	if (d) {
		d = d.split(" ")[1].split(",");
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight','Silverlight Plug-In','application/x-silverlight-2','AgControl.AgControl', function (ax) {
	// Silverlight cannot report its version number to IE
	// but it does have a isVersionSupported function, so we have to loop through it to get a version number.
	// adapted from http://www.silverlightversion.com/
	var v = [0,0,0,0],
		loopMatch = function(ax, v, i, n) {
			while(ax.isVersionSupported(v[0]+ "."+ v[1] + "." + v[2] + "." + v[3])){
				v[i]+=n;
			}
			v[i] -= n;
		};
	loopMatch(ax, v, 0, 1);
	loopMatch(ax, v, 1, 1);
	loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
	loopMatch(ax, v, 2, 1000);
	loopMatch(ax, v, 2, 100);
	loopMatch(ax, v, 2, 10);
	loopMatch(ax, v, 2, 1);
	loopMatch(ax, v, 3, 1);

	return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
	var version = [],
		d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

	if (d) {
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
	init: function() {
		var
			t = this,
			d = document,
			nav = mejs.PluginDetector.nav,
			ua = mejs.PluginDetector.ua.toLowerCase(),
			i,
			v,
			html5Elements = ['source','track','audio','video'];

		// detect browsers (only the ones that have some kind of quirk we need to work around)
		t.isiPad = (ua.match(/ipad/i) !== null);
		t.isiPhone = (ua.match(/iphone/i) !== null);
		t.isiOS = t.isiPhone || t.isiPad;
		t.isAndroid = (ua.match(/android/i) !== null);
		t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
		t.isBustedNativeHTTPS = (location.protocol === 'https:' && (ua.match(/android [12]\./) !== null || ua.match(/macintosh.* version.* safari/) !== null));
		t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1 || nav.appName.toLowerCase().match(/trident/gi) !== null);
		t.isChrome = (ua.match(/chrome/gi) !== null);
		t.isChromium = (ua.match(/chromium/gi) !== null);
		t.isFirefox = (ua.match(/firefox/gi) !== null);
		t.isWebkit = (ua.match(/webkit/gi) !== null);
		t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit && !t.isIE;
		t.isOpera = (ua.match(/opera/gi) !== null);
		t.hasTouch = ('ontouchstart' in window); //  && window.ontouchstart != null); // this breaks iOS 7
		
		// borrowed from Modernizr
		t.svg = !! document.createElementNS &&
				!! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;

		// create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
		for (i=0; i<html5Elements.length; i++) {
			v = document.createElement(html5Elements[i]);
		}
		
		t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

		// Fix for IE9 on Windows 7N / Windows 7KN (Media Player not installer)
		try{
			v.canPlayType("video/mp4");
		}catch(e){
			t.supportsMediaTag = false;
		}

		// detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)
		
		// iOS
		t.hasSemiNativeFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');
		
		// W3C
		t.hasNativeFullscreen = (typeof v.requestFullscreen !== 'undefined');
		
		// webkit/firefox/IE11+
		t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
		t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');
		t.hasMsNativeFullScreen = (typeof v.msRequestFullscreen !== 'undefined');
		
		t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen || t.hasMsNativeFullScreen);
		t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;
		
		// Enabled?
		if (t.hasMozNativeFullScreen) {
			t.nativeFullScreenEnabled = document.mozFullScreenEnabled;
		} else if (t.hasMsNativeFullScreen) {
			t.nativeFullScreenEnabled = document.msFullscreenEnabled;		
		}
		
		if (t.isChrome) {
			t.hasSemiNativeFullScreen = false;
		}
		
		if (t.hasTrueNativeFullScreen) {
			
			t.fullScreenEventName = '';
			if (t.hasWebkitNativeFullScreen) { 
				t.fullScreenEventName = 'webkitfullscreenchange';
				
			} else if (t.hasMozNativeFullScreen) {
				t.fullScreenEventName = 'mozfullscreenchange';
				
			} else if (t.hasMsNativeFullScreen) {
				t.fullScreenEventName = 'MSFullscreenChange';
			}
			
			t.isFullScreen = function() {
				if (t.hasMozNativeFullScreen) {
					return d.mozFullScreen;
				
				} else if (t.hasWebkitNativeFullScreen) {
					return d.webkitIsFullScreen;
				
				} else if (t.hasMsNativeFullScreen) {
					return d.msFullscreenElement !== null;
				}
			}
					
			t.requestFullScreen = function(el) {
		
				if (t.hasWebkitNativeFullScreen) {
					el.webkitRequestFullScreen();
					
				} else if (t.hasMozNativeFullScreen) {
					el.mozRequestFullScreen();

				} else if (t.hasMsNativeFullScreen) {
					el.msRequestFullscreen();

				}
			}
			
			t.cancelFullScreen = function() {				
				if (t.hasWebkitNativeFullScreen) {
					document.webkitCancelFullScreen();
					
				} else if (t.hasMozNativeFullScreen) {
					document.mozCancelFullScreen();
					
				} else if (t.hasMsNativeFullScreen) {
					document.msExitFullscreen();
					
				}
			}	
			
		}
		
		
		// OS X 10.5 can't do this even if it says it can :(
		if (t.hasSemiNativeFullScreen && ua.match(/mac os x 10_5/i)) {
			t.hasNativeFullScreen = false;
			t.hasSemiNativeFullScreen = false;
		}
		
	}
};
mejs.MediaFeatures.init();

/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
	pluginType: 'native',
	isFullScreen: false,

	setCurrentTime: function (time) {
		this.currentTime = time;
	},

	setMuted: function (muted) {
		this.muted = muted;
	},

	setVolume: function (volume) {
		this.volume = volume;
	},

	// for parity with the plugin versions
	stop: function () {
		this.pause();
	},

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		
		// Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
		var 
			existingSources = this.getElementsByTagName('source');
		while (existingSources.length > 0){
			this.removeChild(existingSources[0]);
		}
	
		if (typeof url == 'string') {
			this.src = url;
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.src = media.src;
					break;
				}
			}
		}
	},

	setVideoSize: function (width, height) {
		this.width = width;
		this.height = height;
	}
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
	this.id = pluginid;
	this.pluginType = pluginType;
	this.src = mediaUrl;
	this.events = {};
	this.attributes = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

	// special
	pluginElement: null,
	pluginType: '',
	isFullScreen: false,

	// not implemented :(
	playbackRate: -1,
	defaultPlaybackRate: -1,
	seekable: [],
	played: [],

	// HTML5 read-only properties
	paused: true,
	ended: false,
	seeking: false,
	duration: 0,
	error: null,
	tagName: '',

	// HTML5 get/set properties, but only set (updated by event handlers)
	muted: false,
	volume: 1,
	currentTime: 0,

	// HTML5 methods
	play: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.playVideo();
			} else {
				this.pluginApi.playMedia();
			}
			this.paused = false;
		}
	},
	load: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
			} else {
				this.pluginApi.loadMedia();
			}
			
			this.paused = false;
		}
	},
	pause: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.pauseVideo();
			} else {
				this.pluginApi.pauseMedia();
			}			
			
			
			this.paused = true;
		}
	},
	stop: function () {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.stopVideo();
			} else {
				this.pluginApi.stopMedia();
			}	
			this.paused = true;
		}
	},
	canPlayType: function(type) {
		var i,
			j,
			pluginInfo,
			pluginVersions = mejs.plugins[this.pluginType];

		for (i=0; i<pluginVersions.length; i++) {
			pluginInfo = pluginVersions[i];

			// test if user has the correct plugin version
			if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

				// test for plugin playback types
				for (j=0; j<pluginInfo.types.length; j++) {
					// find plugin that can play the type
					if (type == pluginInfo.types[j]) {
						return 'probably';
					}
				}
			}
		}

		return '';
	},
	
	positionFullscreenButton: function(x,y,visibleAndAbove) {
		if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
			this.pluginApi.positionFullscreenButton(Math.floor(x),Math.floor(y),visibleAndAbove);
		}
	},
	
	hideFullscreenButton: function() {
		if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
			this.pluginApi.hideFullscreenButton();
		}		
	},	
	

	// custom methods since not all JavaScript implementations support get/set

	// This can be a url string
	// or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
	setSrc: function (url) {
		if (typeof url == 'string') {
			this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
			this.src = mejs.Utility.absolutizeUrl(url);
		} else {
			var i, media;

			for (i=0; i<url.length; i++) {
				media = url[i];
				if (this.canPlayType(media.type)) {
					this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
					this.src = mejs.Utility.absolutizeUrl(media.src);
					break;
				}
			}
		}

	},
	setCurrentTime: function (time) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube' || this.pluginType == 'vimeo') {
				this.pluginApi.seekTo(time);
			} else {
				this.pluginApi.setCurrentTime(time);
			}				
			
			
			
			this.currentTime = time;
		}
	},
	setVolume: function (volume) {
		if (this.pluginApi != null) {
			// same on YouTube and MEjs
			if (this.pluginType == 'youtube') {
				this.pluginApi.setVolume(volume * 100);
			} else {
				this.pluginApi.setVolume(volume);
			}
			this.volume = volume;
		}
	},
	setMuted: function (muted) {
		if (this.pluginApi != null) {
			if (this.pluginType == 'youtube') {
				if (muted) {
					this.pluginApi.mute();
				} else {
					this.pluginApi.unMute();
				}
				this.muted = muted;
				this.dispatchEvent({type:'volumechange'});
			} else {
				this.pluginApi.setMuted(muted);
			}
			this.muted = muted;
		}
	},

	// additional non-HTML5 methods
	setVideoSize: function (width, height) {
		
		//if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
			if (this.pluginElement && this.pluginElement.style) {
				this.pluginElement.style.width = width + 'px';
				this.pluginElement.style.height = height + 'px';
			}
			if (this.pluginApi != null && this.pluginApi.setVideoSize) {
				this.pluginApi.setVideoSize(width, height);
			}
		//}
	},

	setFullscreen: function (fullscreen) {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.pluginApi.setFullscreen(fullscreen);
		}
	},
	
	enterFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(true);
		}		
		
	},
	
	exitFullScreen: function() {
		if (this.pluginApi != null && this.pluginApi.setFullscreen) {
			this.setFullscreen(false);
		}
	},	

	// start: fake events
	addEventListener: function (eventName, callback, bubble) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(callback);
	},
	removeEventListener: function (eventName, callback) {
		if (!eventName) { this.events = {}; return true; }
		var callbacks = this.events[eventName];
		if (!callbacks) return true;
		if (!callback) { this.events[eventName] = []; return true; }
		for (var i = 0; i < callbacks.length; i++) {
			if (callbacks[i] === callback) {
				this.events[eventName].splice(i, 1);
				return true;
			}
		}
		return false;
	},	
	dispatchEvent: function (event) {
		var i,
			args,
			callbacks = this.events[event.type];

		if (callbacks) {
			for (i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(this, [event]);
			}
		}
	},
	// end: fake events
	
	// fake DOM attribute methods
	hasAttribute: function(name){
		return (name in this.attributes);  
	},
	removeAttribute: function(name){
		delete this.attributes[name];
	},
	getAttribute: function(name){
		if (this.hasAttribute(name)) {
			return this.attributes[name];
		}
		return '';
	},
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},

	remove: function() {
		mejs.Utility.removeSwf(this.pluginElement.id);
		mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
	}
};

// Handles calls from Flash/Silverlight and reports them as native <video/audio> events and properties
mejs.MediaPluginBridge = {

	pluginMediaElements:{},
	htmlMediaElements:{},

	registerPluginElement: function (id, pluginMediaElement, htmlMediaElement) {
		this.pluginMediaElements[id] = pluginMediaElement;
		this.htmlMediaElements[id] = htmlMediaElement;
	},

	unregisterPluginElement: function (id) {
		delete this.pluginMediaElements[id];
		delete this.htmlMediaElements[id];
	},

	// when Flash/Silverlight is ready, it calls out to this method
	initPlugin: function (id) {

		var pluginMediaElement = this.pluginMediaElements[id],
			htmlMediaElement = this.htmlMediaElements[id];

		if (pluginMediaElement) {
			// find the javascript bridge
			switch (pluginMediaElement.pluginType) {
				case "flash":
					pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(id);
					break;
				case "silverlight":
					pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
					pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
					break;
			}
	
			if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
				pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
			}
		}
	},

	// receives events from Flash/Silverlight and sends them out as HTML5 media events
	// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
	fireEvent: function (id, eventName, values) {

		var
			e,
			i,
			bufferedTime,
			pluginMediaElement = this.pluginMediaElements[id];

		if(!pluginMediaElement){
            return;
        }
        
		// fake event object to mimic real HTML media event.
		e = {
			type: eventName,
			target: pluginMediaElement
		};

		// attach all values to element and event object
		for (i in values) {
			pluginMediaElement[i] = values[i];
			e[i] = values[i];
		}

		// fake the newer W3C buffered TimeRange (loaded and total have been removed)
		bufferedTime = values.bufferedTime || 0;

		e.target.buffered = e.buffered = {
			start: function(index) {
				return 0;
			},
			end: function (index) {
				return bufferedTime;
			},
			length: 1
		};

		pluginMediaElement.dispatchEvent(e);
	}
};

/*
Default options
*/
mejs.MediaElementDefaults = {
	// allows testing on HTML5, flash, silverlight
	// auto: attempts to detect what the browser can do
	// auto_plugin: prefer plugins and then attempt native HTML5
	// native: forces HTML5 playback
	// shim: disallows HTML5, will attempt either Flash or Silverlight
	// none: forces fallback view
	mode: 'auto',
	// remove or reorder to change plugin priority and availability
	plugins: ['flash','silverlight','youtube','vimeo'],
	// shows debug errors on screen
	enablePluginDebug: false,
	// use plugin for browsers that have trouble with Basic Authentication on HTTPS sites
	httpsBasicAuthSite: false,
	// overrides the type specified, useful for dynamic instantiation
	type: '',
	// path to Flash and Silverlight plugins
	pluginPath: mejs.Utility.getScriptPath(['mediaelement.js','mediaelement.min.js','mediaelement-and-player.js','mediaelement-and-player.min.js']),
	// name of flash file
	flashName: 'flashmediaelement.swf',
	// streamer for RTMP streaming
	flashStreamer: '',
	// set to 'always' for CDN version
	flashScriptAccess: 'sameDomain',	
	// turns on the smoothing filter in Flash
	enablePluginSmoothing: false,
	// enabled pseudo-streaming (seek) on .mp4 files
	enablePseudoStreaming: false,
	// start query parameter sent to server for pseudo-streaming
	pseudoStreamingStartQueryParam: 'start',
	// name of silverlight file
	silverlightName: 'silverlightmediaelement.xap',
	// default if the <video width> is not specified
	defaultVideoWidth: 480,
	// default if the <video height> is not specified
	defaultVideoHeight: 270,
	// overrides <video width>
	pluginWidth: -1,
	// overrides <video height>
	pluginHeight: -1,
	// additional plugin variables in 'key=value' form
	pluginVars: [],	
	// rate in milliseconds for Flash and Silverlight to fire the timeupdate event
	// larger number is less accurate, but less strain on plugin->JavaScript bridge
	timerRate: 250,
	// initial volume for player
	startVolume: 0.8,
	success: function () { },
	error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
	return mejs.HtmlMediaElementShim.create(el,o);
};

mejs.HtmlMediaElementShim = {

	create: function(el, o) {
		var
			options = {},
			htmlMediaElement = (typeof(el) == 'string') ? document.getElementById(el) : el,
			tagName = htmlMediaElement.tagName.toLowerCase(),
			isMediaTag = (tagName === 'audio' || tagName === 'video'),
			src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
			poster = htmlMediaElement.getAttribute('poster'),
			autoplay =  htmlMediaElement.getAttribute('autoplay'),
			preload =  htmlMediaElement.getAttribute('preload'),
			controls =  htmlMediaElement.getAttribute('controls'),
			playback,
			prop;

		// extend options
		for (prop in mejs.MediaElementDefaults) {
			options[prop] = mejs.MediaElementDefaults[prop];
		}
		for (prop in o) {
			options[prop] = o[prop];
		}		
		

		// clean up attributes
		src = 		(typeof src == 'undefined' 	|| src === null || src == '') ? null : src;		
		poster =	(typeof poster == 'undefined' 	|| poster === null) ? '' : poster;
		preload = 	(typeof preload == 'undefined' 	|| preload === null || preload === 'false') ? 'none' : preload;
		autoplay = 	!(typeof autoplay == 'undefined' || autoplay === null || autoplay === 'false');
		controls = 	!(typeof controls == 'undefined' || controls === null || controls === 'false');

		// test for HTML5 and plugin capabilities
		playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
		playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';

		if (playback.method == 'native') {
			// second fix for android
			if (mejs.MediaFeatures.isBustedAndroid) {
				htmlMediaElement.src = playback.url;
				htmlMediaElement.addEventListener('click', function() {
					htmlMediaElement.play();
				}, false);
			}
		
			// add methods to native HTMLMediaElement
			return this.updateNative(playback, options, autoplay, preload);
		} else if (playback.method !== '') {
			// create plugin to mimic HTMLMediaElement
			
			return this.createPlugin( playback,  options, poster, autoplay, preload, controls);
		} else {
			// boo, no HTML5, no Flash, no Silverlight.
			this.createErrorMessage( playback, options, poster );
			
			return this;
		}
	},
	
	determinePlayback: function(htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
		var
			mediaFiles = [],
			i,
			j,
			k,
			l,
			n,
			type,
			result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() != 'audio')},
			pluginName,
			pluginVersions,
			pluginInfo,
			dummy,
			media;
			
		// STEP 1: Get URL and type from <video src> or <source src>

		// supplied type overrides <video type> and <source type>
		if (typeof options.type != 'undefined' && options.type !== '') {
			
			// accept either string or array of types
			if (typeof options.type == 'string') {
				mediaFiles.push({type:options.type, url:src});
			} else {
				
				for (i=0; i<options.type.length; i++) {
					mediaFiles.push({type:options.type[i], url:src});
				}
			}

		// test for src attribute first
		} else if (src !== null) {
			type = this.formatType(src, htmlMediaElement.getAttribute('type'));
			mediaFiles.push({type:type, url:src});

		// then test for <source> elements
		} else {
			// test <source> types to see if they are usable
			for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
				n = htmlMediaElement.childNodes[i];
				if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
					src = n.getAttribute('src');
					type = this.formatType(src, n.getAttribute('type'));
					media = n.getAttribute('media');

					if (!media || !window.matchMedia || (window.matchMedia && window.matchMedia(media).matches)) {
						mediaFiles.push({type:type, url:src});
					}
				}
			}
		}
		
		// in the case of dynamicly created players
		// check for audio types
		if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
			result.isVideo = false;
		}
		

		// STEP 2: Test for playback method
		
		// special case for Android which sadly doesn't implement the canPlayType function (always returns '')
		if (mejs.MediaFeatures.isBustedAndroid) {
			htmlMediaElement.canPlayType = function(type) {
				return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
			};
		}		
		
		// special case for Chromium to specify natively supported video codecs (i.e. WebM and Theora) 
		if (mejs.MediaFeatures.isChromium) { 
			htmlMediaElement.canPlayType = function(type) { 
				return (type.match(/video\/(webm|ogv|ogg)/gi) !== null) ? 'maybe' : ''; 
			}; 
		}

		// test for native playback first
		if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'native')  && !(mejs.MediaFeatures.isBustedNativeHTTPS && options.httpsBasicAuthSite === true)) {
						
			if (!isMediaTag) {

				// create a real HTML5 Media Element 
				dummy = document.createElement( result.isVideo ? 'video' : 'audio');			
				htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
				htmlMediaElement.style.display = 'none';
				
				// use this one from now on
				result.htmlMediaElement = htmlMediaElement = dummy;
			}
				
			for (i=0; i<mediaFiles.length; i++) {
				// normal check
				if (mediaFiles[i].type == "video/m3u8" || htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== ''
					// special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/,'mpeg')).replace(/no/, '') !== ''
					// special case for m4a supported by detecting mp4 support
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/m4a/,'mp4')).replace(/no/, '') !== '') {
					result.method = 'native';
					result.url = mediaFiles[i].url;
					break;
				}
			}			
			
			if (result.method === 'native') {
				if (result.url !== null) {
					htmlMediaElement.src = result.url;
				}
			
				// if `auto_plugin` mode, then cache the native result but try plugins.
				if (options.mode !== 'auto_plugin') {
					return result;
				}
			}
		}

		// if native playback didn't work, then test plugins
		if (options.mode === 'auto' || options.mode === 'auto_plugin' || options.mode === 'shim') {
			for (i=0; i<mediaFiles.length; i++) {
				type = mediaFiles[i].type;

				// test all plugins in order of preference [silverlight, flash]
				for (j=0; j<options.plugins.length; j++) {

					pluginName = options.plugins[j];
			
					// test version of plugin (for future features)
					pluginVersions = mejs.plugins[pluginName];				
					
					for (k=0; k<pluginVersions.length; k++) {
						pluginInfo = pluginVersions[k];
					
						// test if user has the correct plugin version
						
						// for youtube/vimeo
						if (pluginInfo.version == null || 
							
							mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

							// test for plugin playback types
							for (l=0; l<pluginInfo.types.length; l++) {
								// find plugin that can play the type
								if (type.toLowerCase() == pluginInfo.types[l].toLowerCase()) {
									result.method = pluginName;
									result.url = mediaFiles[i].url;
									return result;
								}
							}
						}
					}
				}
			}
		}
		
		// at this point, being in 'auto_plugin' mode implies that we tried plugins but failed.
		// if we have native support then return that.
		if (options.mode === 'auto_plugin' && result.method === 'native') {
			return result;
		}

		// what if there's nothing to play? just grab the first available
		if (result.method === '' && mediaFiles.length > 0) {
			result.url = mediaFiles[0].url;
		}

		return result;
	},

	formatType: function(url, type) {
		// if no type is supplied, fake it with the extension
		if (url && !type) {		
			return this.getTypeFromFile(url);
		} else {
			// only return the mime part of the type in case the attribute contains the codec
			// see http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
			// `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`
			
			if (type && ~type.indexOf(';')) {
				return type.substr(0, type.indexOf(';')); 
			} else {
				return type;
			}
		}
	},
	
	getTypeFromFile: function(url) {
		url = url.split('?')[0];
		var
			ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase(),
			av = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video/' : 'audio/';
		return this.getTypeFromExtension(ext, av);
	},
	
	getTypeFromExtension: function(ext, av) {
		av = av || '';
		
		switch (ext) {
			case 'mp4':
			case 'm4v':
			case 'm4a':
			case 'f4v':
			case 'f4a':
				return av + 'mp4';
			case 'flv':
				return av + 'x-flv';
			case 'webm':
			case 'webma':
			case 'webmv':	
				return av + 'webm';
			case 'ogg':
			case 'oga':
			case 'ogv':	
				return av + 'ogg';
			case 'm3u8':
				return 'application/x-mpegurl';
			case 'ts':
				return av + 'mp2t';
			default:
				return av + ext;
		}
	},

	createErrorMessage: function(playback, options, poster) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			errorContainer = document.createElement('div'),
			errorContent = options.customError;
			
		errorContainer.className = 'me-cannotplay';

		try {
			errorContainer.style.width = htmlMediaElement.width + 'px';
			errorContainer.style.height = htmlMediaElement.height + 'px';
		} catch (e) {}

		if (!errorContent) {
			errorContent = '<a href="' + playback.url + '">';

			if (poster !== '') {
				errorContent += '<img src="' + poster + '" width="100%" height="100%" alt="" />';
			}

			errorContent += '<span>' + mejs.i18n.t('Download File') + '</span></a>';
		}

		errorContainer.innerHTML = errorContent;

		htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
		htmlMediaElement.style.display = 'none';

		options.error(htmlMediaElement);
	},

	createPlugin:function(playback, options, poster, autoplay, preload, controls) {
		var 
			htmlMediaElement = playback.htmlMediaElement,
			width = 1,
			height = 1,
			pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
			pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
			container = document.createElement('div'),
			specialIEContainer,
			node,
			initVars;

		// copy tagName from html media element
		pluginMediaElement.tagName = htmlMediaElement.tagName

		// copy attributes from html media element to plugin media element
		for (var i = 0; i < htmlMediaElement.attributes.length; i++) {
			var attribute = htmlMediaElement.attributes[i];
			if (attribute.specified) {
				pluginMediaElement.setAttribute(attribute.name, attribute.value);
			}
		}

		// check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
		node = htmlMediaElement.parentNode;

		while (node !== null && node.tagName != null && node.tagName.toLowerCase() !== 'body' && 
				node.parentNode != null && node.parentNode.tagName != null && node.parentNode.constructor != null && node.parentNode.constructor.name === "ShadowRoot") {
			if (node.parentNode.tagName.toLowerCase() === 'p') {
				node.parentNode.parentNode.insertBefore(node, node.parentNode);
				break;
			}
			node = node.parentNode;
		}

		if (playback.isVideo) {
			width = (options.pluginWidth > 0) ? options.pluginWidth : (options.videoWidth > 0) ? options.videoWidth : (htmlMediaElement.getAttribute('width') !== null) ? htmlMediaElement.getAttribute('width') : options.defaultVideoWidth;
			height = (options.pluginHeight > 0) ? options.pluginHeight : (options.videoHeight > 0) ? options.videoHeight : (htmlMediaElement.getAttribute('height') !== null) ? htmlMediaElement.getAttribute('height') : options.defaultVideoHeight;
		
			// in case of '%' make sure it's encoded
			width = mejs.Utility.encodeUrl(width);
			height = mejs.Utility.encodeUrl(height);
		
		} else {
			if (options.enablePluginDebug) {
				width = 320;
				height = 240;
			}
		}

		// register plugin
		pluginMediaElement.success = options.success;
		mejs.MediaPluginBridge.registerPluginElement(pluginid, pluginMediaElement, htmlMediaElement);

		// add container (must be added to DOM before inserting HTML for IE)
		container.className = 'me-plugin';
		container.id = pluginid + '_container';
		
		if (playback.isVideo) {
				htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
		} else {
				document.body.insertBefore(container, document.body.childNodes[0]);
		}

		// flash/silverlight vars
		initVars = [
			'id=' + pluginid,
			'jsinitfunction=' + "mejs.MediaPluginBridge.initPlugin",
			'jscallbackfunction=' + "mejs.MediaPluginBridge.fireEvent",
			'isvideo=' + ((playback.isVideo) ? "true" : "false"),
			'autoplay=' + ((autoplay) ? "true" : "false"),
			'preload=' + preload,
			'width=' + width,
			'startvolume=' + options.startVolume,
			'timerrate=' + options.timerRate,
			'flashstreamer=' + options.flashStreamer,
			'height=' + height,
			'pseudostreamstart=' + options.pseudoStreamingStartQueryParam];

		if (playback.url !== null) {
			if (playback.method == 'flash') {
				initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
			} else {
				initVars.push('file=' + playback.url);
			}
		}
		if (options.enablePluginDebug) {
			initVars.push('debug=true');
		}
		if (options.enablePluginSmoothing) {
			initVars.push('smoothing=true');
		}
		if (options.enablePseudoStreaming) {
			initVars.push('pseudostreaming=true');
		}
		if (controls) {
			initVars.push('controls=true'); // shows controls in the plugin if desired
		}
		if (options.pluginVars) {
			initVars = initVars.concat(options.pluginVars);
		}		

		switch (playback.method) {
			case 'silverlight':
				container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
					break;

			case 'flash':

				if (mejs.MediaFeatures.isIE) {
					specialIEContainer = document.createElement('div');
					container.appendChild(specialIEContainer);
					specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '" class="mejs-shim">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?x=' + (new Date()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '" />' +
'<param name="allowFullScreen" value="true" />' +
'<param name="scale" value="default" />' + 
'</object>';

				} else {

					container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="' + options.flashScriptAccess + '" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '" ' +
'scale="default"' + 
'class="mejs-shim"></embed>';
				}
				break;
			
			case 'youtube':
			
				
				var videoId;
				// youtu.be url from share button
				if (playback.url.lastIndexOf("youtu.be") != -1) {
					videoId = playback.url.substr(playback.url.lastIndexOf('/')+1);
					if (videoId.indexOf('?') != -1) {
						videoId = videoId.substr(0, videoId.indexOf('?'));
					}
				}
				else {
					videoId = playback.url.substr(playback.url.lastIndexOf('=')+1);
				}
				youtubeSettings = {
						container: container,
						containerId: container.id,
						pluginMediaElement: pluginMediaElement,
						pluginId: pluginid,
						videoId: videoId,
						height: height,
						width: width	
					};				
				
				if (mejs.PluginDetector.hasPluginVersion('flash', [10,0,0]) ) {
					mejs.YouTubeApi.createFlash(youtubeSettings, options);
				} else {
					mejs.YouTubeApi.enqueueIframe(youtubeSettings);		
				}
				
				break;
			
			// DEMO Code. Does NOT work.
			case 'vimeo':
				var player_id = pluginid + "_player";
				pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/')+1);
				
				container.innerHTML ='<iframe src="//player.vimeo.com/video/' + pluginMediaElement.vimeoid + '?api=1&portrait=0&byline=0&title=0&player_id=' + player_id + '" width="' + width +'" height="' + height +'" frameborder="0" class="mejs-shim" id="' + player_id + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				if (typeof($f) == 'function') { // froogaloop available
					var player = $f(container.childNodes[0]);
					
					player.addEvent('ready', function() {
						
						player.playVideo = function() {
							player.api( 'play' );
						} 
						player.stopVideo = function() {
							player.api( 'unload' );
						} 
						player.pauseVideo = function() {
							player.api( 'pause' );
						} 
						player.seekTo = function( seconds ) {
							player.api( 'seekTo', seconds );
						}
						player.setVolume = function( volume ) {
							player.api( 'setVolume', volume );
						}
						player.setMuted = function( muted ) {
							if( muted ) {
								player.lastVolume = player.api( 'getVolume' );
								player.api( 'setVolume', 0 );
							} else {
								player.api( 'setVolume', player.lastVolume );
								delete player.lastVolume;
							}
						}						

						function createEvent(player, pluginMediaElement, eventName, e) {
							var event = {
								type: eventName,
								target: pluginMediaElement
							};
							if (eventName == 'timeupdate') {
								pluginMediaElement.currentTime = event.currentTime = e.seconds;
								pluginMediaElement.duration = event.duration = e.duration;
							}
							pluginMediaElement.dispatchEvent(event);
						}

						player.addEvent('play', function() {
							createEvent(player, pluginMediaElement, 'play');
							createEvent(player, pluginMediaElement, 'playing');
						});

						player.addEvent('pause', function() {
							createEvent(player, pluginMediaElement, 'pause');
						});

						player.addEvent('finish', function() {
							createEvent(player, pluginMediaElement, 'ended');
						});

						player.addEvent('playProgress', function(e) {
							createEvent(player, pluginMediaElement, 'timeupdate', e);
						});

						pluginMediaElement.pluginElement = container;
						pluginMediaElement.pluginApi = player;

						// init mejs
						mejs.MediaPluginBridge.initPlugin(pluginid);
					});
				}
				else {
					console.warn("You need to include froogaloop for vimeo to work");
				}
				break;			
		}
		// hide original element
		htmlMediaElement.style.display = 'none';
		// prevent browser from autoplaying when using a plugin
		htmlMediaElement.removeAttribute('autoplay');

		// FYI: options.success will be fired by the MediaPluginBridge
		
		return pluginMediaElement;
	},

	updateNative: function(playback, options, autoplay, preload) {
		
		var htmlMediaElement = playback.htmlMediaElement,
			m;
		
		
		// add methods to video object to bring it into parity with Flash Object
		for (m in mejs.HtmlMediaElement) {
			htmlMediaElement[m] = mejs.HtmlMediaElement[m];
		}

		/*
		Chrome now supports preload="none"
		if (mejs.MediaFeatures.isChrome) {
		
			// special case to enforce preload attribute (Chrome doesn't respect this)
			if (preload === 'none' && !autoplay) {
			
				// forces the browser to stop loading (note: fails in IE9)
				htmlMediaElement.src = '';
				htmlMediaElement.load();
				htmlMediaElement.canceledPreload = true;

				htmlMediaElement.addEventListener('play',function() {
					if (htmlMediaElement.canceledPreload) {
						htmlMediaElement.src = playback.url;
						htmlMediaElement.load();
						htmlMediaElement.play();
						htmlMediaElement.canceledPreload = false;
					}
				}, false);
			// for some reason Chrome forgets how to autoplay sometimes.
			} else if (autoplay) {
				htmlMediaElement.load();
				htmlMediaElement.play();
			}
		}
		*/

		// fire success code
		options.success(htmlMediaElement, htmlMediaElement);
		
		return htmlMediaElement;
	}
};

/*
 - test on IE (object vs. embed)
 - determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
 - fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
	isIframeStarted: false,
	isIframeLoaded: false,
	loadIframeApi: function() {
		if (!this.isIframeStarted) {
			var tag = document.createElement('script');
			tag.src = "//www.youtube.com/player_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			this.isIframeStarted = true;
		}
	},
	iframeQueue: [],
	enqueueIframe: function(yt) {
		
		if (this.isLoaded) {
			this.createIframe(yt);
		} else {
			this.loadIframeApi();
			this.iframeQueue.push(yt);
		}
	},
	createIframe: function(settings) {
		
		var
		pluginMediaElement = settings.pluginMediaElement,	
		player = new YT.Player(settings.containerId, {
			height: settings.height,
			width: settings.width,
			videoId: settings.videoId,
			playerVars: {controls:0},
			events: {
				'onReady': function() {
					
					// hook up iframe object to MEjs
					settings.pluginMediaElement.pluginApi = player;
					
					// init mejs
					mejs.MediaPluginBridge.initPlugin(settings.pluginId);
					
					// create timer
					setInterval(function() {
						mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
					}, 250);					
				},
				'onStateChange': function(e) {
					
					mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);
					
				}
			}
		});
	},
	
	createEvent: function (player, pluginMediaElement, eventName) {
		var event = {
			type: eventName,
			target: pluginMediaElement
		};

		if (player && player.getDuration) {
			
			// time 
			pluginMediaElement.currentTime = event.currentTime = player.getCurrentTime();
			pluginMediaElement.duration = event.duration = player.getDuration();
			
			// state
			event.paused = pluginMediaElement.paused;
			event.ended = pluginMediaElement.ended;			
			
			// sound
			event.muted = player.isMuted();
			event.volume = player.getVolume() / 100;
			
			// progress
			event.bytesTotal = player.getVideoBytesTotal();
			event.bufferedBytes = player.getVideoBytesLoaded();
			
			// fake the W3C buffered TimeRange
			var bufferedTime = event.bufferedBytes / event.bytesTotal * event.duration;
			
			event.target.buffered = event.buffered = {
				start: function(index) {
					return 0;
				},
				end: function (index) {
					return bufferedTime;
				},
				length: 1
			};

		}
		
		// send event up the chain
		pluginMediaElement.dispatchEvent(event);
	},	
	
	iFrameReady: function() {
		
		this.isLoaded = true;
		this.isIframeLoaded = true;
		
		while (this.iframeQueue.length > 0) {
			var settings = this.iframeQueue.pop();
			this.createIframe(settings);
		}	
	},
	
	// FLASH!
	flashPlayers: {},
	createFlash: function(settings) {
		
		this.flashPlayers[settings.pluginId] = settings;
		
		/*
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
				'<param name="allowScriptAccess" value="sameDomain">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		*/

		var specialIEContainer,
			youtubeUrl = '//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';
			
		if (mejs.MediaFeatures.isIE) {
			
			specialIEContainer = document.createElement('div');
			settings.container.appendChild(specialIEContainer);
			specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '" class="mejs-shim">' +
	'<param name="movie" value="' + youtubeUrl + '" />' +
	'<param name="wmode" value="transparent" />' +
	'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '" />' +
	'<param name="allowFullScreen" value="true" />' +
'</object>';
		} else {
		settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; " class="mejs-shim">' +
				'<param name="allowScriptAccess" value="' + options.flashScriptAccess + '">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
		}		
		
	},
	
	flashReady: function(id) {
		var
			settings = this.flashPlayers[id],
			player = document.getElementById(id),
			pluginMediaElement = settings.pluginMediaElement;
		
		// hook up and return to MediaELementPlayer.success	
		pluginMediaElement.pluginApi = 
		pluginMediaElement.pluginElement = player;
		mejs.MediaPluginBridge.initPlugin(id);
		
		// load the youtube video
		player.cueVideoById(settings.videoId);
		
		var callbackName = settings.containerId + '_callback';
		
		window[callbackName] = function(e) {
			mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
		}
		
		player.addEventListener('onStateChange', callbackName);
		
		setInterval(function() {
			mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
		}, 250);
		
		mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'canplay');
	},
	
	handleStateChange: function(youTubeState, player, pluginMediaElement) {
		switch (youTubeState) {
			case -1: // not started
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
				//createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
				break;
			case 0:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = true;
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
				break;
			case 1:
				pluginMediaElement.paused = false;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
				break;
			case 2:
				pluginMediaElement.paused = true;
				pluginMediaElement.ended = false;				
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
				break;
			case 3: // buffering
				mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
				break;
			case 5:
				// cued?
				break;						
			
		}			
		
	}
}
// IFRAME
window.onYouTubePlayerAPIReady = function() {
	mejs.YouTubeApi.iFrameReady();
};
// FLASH
window.onYouTubePlayerReady = function(id) {
	mejs.YouTubeApi.flashReady(id);
};

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;

/*
 * Adds Internationalization and localization to mediaelement.
 *
 * This file does not contain translations, you have to add them manually.
 * The schema is always the same: me-i18n-locale-[IETF-language-tag].js
 *
 * Examples are provided both for german and chinese translation.
 *
 *
 * What is the concept beyond i18n?
 *   http://en.wikipedia.org/wiki/Internationalization_and_localization
 *
 * What langcode should i use?
 *   http://en.wikipedia.org/wiki/IETF_language_tag
 *   https://tools.ietf.org/html/rfc5646
 *
 *
 * License?
 *
 *   The i18n file uses methods from the Drupal project (drupal.js):
 *     - i18n.methods.t() (modified)
 *     - i18n.methods.checkPlain() (full copy)
 *
 *   The Drupal project is (like mediaelementjs) licensed under GPLv2.
 *    - http://drupal.org/licensing/faq/#q1
 *    - https://github.com/johndyer/mediaelement
 *    - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 *
 *
 * @author
 *   Tim Latz (latz.tim@gmail.com)
 *
 *
 * @params
 *  - context - document, iframe ..
 *  - exports - CommonJS, window ..
 *
 */
;(function(context, exports, undefined) {
    

    var i18n = {
        "locale": {
            // Ensure previous values aren't overwritten.
            "language" : (exports.i18n && exports.i18n.locale.language) || '',
            "strings" : (exports.i18n && exports.i18n.locale.strings) || {}
        },
        "ietf_lang_regex" : /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        "methods" : {}
    };
// start i18n


    /**
     * Get language, fallback to browser's language if empty
     *
     * IETF: RFC 5646, https://tools.ietf.org/html/rfc5646
     * Examples: en, zh-CN, cmn-Hans-CN, sr-Latn-RS, es-419, x-private
     */
    i18n.getLanguage = function () {
        var language = i18n.locale.language || window.navigator.userLanguage || window.navigator.language;
        return i18n.ietf_lang_regex.exec(language) ? language : null;

        //(WAS: convert to iso 639-1 (2-letters, lower case))
        //return language.substr(0, 2).toLowerCase();
    };

    // i18n fixes for compatibility with WordPress
    if ( typeof mejsL10n != 'undefined' ) {
        i18n.locale.language = mejsL10n.language;
    }



    /**
     * Encode special characters in a plain-text string for display as HTML.
     */
    i18n.methods.checkPlain = function (str) {
        var character, regex,
        replace = {
            '&': '&amp;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;'
        };
        str = String(str);
        for (character in replace) {
            if (replace.hasOwnProperty(character)) {
                regex = new RegExp(character, 'g');
                str = str.replace(regex, replace[character]);
            }
        }
        return str;
    };

    /**
     * Translate strings to the page language or a given language.
     *
     *
     * @param str
     *   A string containing the English string to translate.
     *
     * @param options
     *   - 'context' (defaults to the default context): The context the source string
     *     belongs to.
     *
     * @return
     *   The translated string, escaped via i18n.methods.checkPlain()
     */
    i18n.methods.t = function (str, options) {

        // Fetch the localized version of the string.
        if (i18n.locale.strings && i18n.locale.strings[options.context] && i18n.locale.strings[options.context][str]) {
            str = i18n.locale.strings[options.context][str];
        }

        return i18n.methods.checkPlain(str);
    };


    /**
     * Wrapper for i18n.methods.t()
     *
     * @see i18n.methods.t()
     * @throws InvalidArgumentException
     */
    i18n.t = function(str, options) {

        if (typeof str === 'string' && str.length > 0) {

            // check every time due language can change for
            // different reasons (translation, lang switcher ..)
            var language = i18n.getLanguage();

            options = options || {
                "context" : language
            };

            return i18n.methods.t(str, options);
        }
        else {
            throw {
                "name" : 'InvalidArgumentException',
                "message" : 'First argument is either not a string or empty.'
            };
        }
    };

// end i18n
    exports.i18n = i18n;
}(document, mejs));

// i18n fixes for compatibility with WordPress
;(function(exports, undefined) {

    

    if ( typeof mejsL10n != 'undefined' ) {
        exports[mejsL10n.language] = mejsL10n.strings;
    }

}(mejs.i18n.locale.strings));

/*!
 *
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != 'undefined') {
	mejs.$ = jQuery;
} else if (typeof Zepto != 'undefined') {
	mejs.$ = Zepto;

	// define `outerWidth` method which has not been realized in Zepto
	Zepto.fn.outerWidth = function(includeMargin) {
		var width = $(this).width();
		if (includeMargin) {
			width += parseInt($(this).css('margin-right'), 10);
			width += parseInt($(this).css('margin-left'), 10);
		}
		return width
	}

} else if (typeof ender != 'undefined') {
	mejs.$ = ender;
}
(function ($) {

	// default player values
	mejs.MepDefaults = {
		// url to poster (to fix iOS 3.x)
		poster: '',
		// When the video is ended, we can show the poster.
		showPosterWhenEnded: false,
		// default if the <video width> is not specified
		defaultVideoWidth: 480,
		// default if the <video height> is not specified
		defaultVideoHeight: 270,
		// if set, overrides <video width>
		videoWidth: -1,
		// if set, overrides <video height>
		videoHeight: -1,
		// default if the user doesn't specify
		defaultAudioWidth: 400,
		// default if the user doesn't specify
		defaultAudioHeight: 30,

		// default amount to move back when back key is pressed
		defaultSeekBackwardInterval: function(media) {
			return (media.duration * 0.05);
		},
		// default amount to move forward when forward key is pressed
		defaultSeekForwardInterval: function(media) {
			return (media.duration * 0.05);
		},

		// set dimensions via JS instead of CSS
		setDimensions: true,

		// width of audio player
		audioWidth: -1,
		// height of audio player
		audioHeight: -1,
		// initial volume when the player starts (overrided by user cookie)
		startVolume: 0.8,
		// useful for <audio> player loops
		loop: false,
		// rewind to beginning when media ends
                autoRewind: true,
		// resize to media dimensions
		enableAutosize: true,

		/*
		 * Time format to use. Default: 'mm:ss'
		 * Supported units:
		 *   h: hour
		 *   m: minute
		 *   s: second
		 *   f: frame count
		 * When using 'hh', 'mm', 'ss' or 'ff' we always display 2 digits.
		 * If you use 'h', 'm', 's' or 'f' we display 1 digit if possible.
		 *
		 * Example to display 75 seconds:
		 * Format 'mm:ss': 01:15
		 * Format 'm:ss': 1:15
		 * Format 'm:s': 1:15
		 */
		timeFormat: '',
		// forces the hour marker (##:00:00)
		alwaysShowHours: false,
		// show framecount in timecode (##:00:00:00)
		showTimecodeFrameCount: false,
		// used when showTimecodeFrameCount is set to true
		framesPerSecond: 25,

		// automatically calculate the width of the progress bar based on the sizes of other elements
		autosizeProgress : true,
		// Hide controls when playing and mouse is not over the video
		alwaysShowControls: false,
		// Display the video control
		hideVideoControlsOnLoad: false,
		// Enable click video element to toggle play/pause
		clickToPlayPause: true,
		// force iPad's native controls
		iPadUseNativeControls: false,
		// force iPhone's native controls
		iPhoneUseNativeControls: false,
		// force Android's native controls
		AndroidUseNativeControls: false,
		// features to show
		features: ['playpause','current','progress','duration','tracks','volume','fullscreen'],
		// only for dynamic
		isVideo: true,

		// turns keyboard support on and off for this instance
		enableKeyboard: true,

		// whenthis player starts, it will pause other players
		pauseOtherPlayers: true,

		// array of keyboard actions such as play pause
		keyActions: [
				{
						keys: [
								32, // SPACE
								179 // GOOGLE play/pause button
							  ],
						action: function(player, media) {
								if (media.paused || media.ended) {
										media.play();
								} else {
										media.pause();
								}
						}
				},
				{
						keys: [38], // UP
						action: function(player, media) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}

								var newVolume = Math.min(media.volume + 0.1, 1);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [40], // DOWN
						action: function(player, media) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}

								var newVolume = Math.max(media.volume - 0.1, 0);
								media.setVolume(newVolume);
						}
				},
				{
						keys: [
								37, // LEFT
								227 // Google TV rewind
						],
						action: function(player, media) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}

										// 5%
										var newTime = Math.max(media.currentTime - player.options.defaultSeekBackwardInterval(media), 0);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [
								39, // RIGHT
								228 // Google TV forward
						],
						action: function(player, media) {
								if (!isNaN(media.duration) && media.duration > 0) {
										if (player.isVideo) {
												player.showControls();
												player.startControlsTimer();
										}

										// 5%
										var newTime = Math.min(media.currentTime + player.options.defaultSeekForwardInterval(media), media.duration);
										media.setCurrentTime(newTime);
								}
						}
				},
				{
						keys: [70], // F
						action: function(player, media) {
								if (typeof player.enterFullScreen != 'undefined') {
										if (player.isFullScreen) {
												player.exitFullScreen();
										} else {
												player.enterFullScreen();
										}
								}
						}
				},
				{
						keys: [77], // M
						action: function(player, media) {
								player.container.find('.mejs-volume-slider').css('display','block');
								if (player.isVideo) {
										player.showControls();
										player.startControlsTimer();
								}
								if (player.media.muted) {
										player.setMuted(false);
								} else {
										player.setMuted(true);
								}
						}
				}
		]
	};

	mejs.mepIndex = 0;

	mejs.players = {};

	// wraps a MediaElement object in player controls
	mejs.MediaElementPlayer = function(node, o) {
		// enforce object, even without "new" (via John Resig)
		if ( !(this instanceof mejs.MediaElementPlayer) ) {
			return new mejs.MediaElementPlayer(node, o);
		}

		var t = this;

		// these will be reset after the MediaElement.success fires
		t.$media = t.$node = $(node);
		t.node = t.media = t.$media[0];

		if(!t.node) {
			return
		}

		// check for existing player
		if (typeof t.node.player != 'undefined') {
			return t.node.player;
		}


		// try to get options from data-mejsoptions
		if (typeof o == 'undefined') {
			o = t.$node.data('mejsoptions');
		}

		// extend default options
		t.options = $.extend({},mejs.MepDefaults,o);

		if (!t.options.timeFormat) {
			// Generate the time format according to options
			t.options.timeFormat = 'mm:ss';
			if (t.options.alwaysShowHours) {
				t.options.timeFormat = 'hh:mm:ss';
			}
			if (t.options.showTimecodeFrameCount) {
				t.options.timeFormat += ':ff';
			}
		}

		mejs.Utility.calculateTimeFormat(0, t.options, t.options.framesPerSecond || 25);

		// unique ID
		t.id = 'mep_' + mejs.mepIndex++;

		// add to player array (for focus events)
		mejs.players[t.id] = t;

		// start up
		t.init();

		return t;
	};

	// actual player
	mejs.MediaElementPlayer.prototype = {

		hasFocus: false,

		controlsAreVisible: true,

		init: function() {

			var
				t = this,
				mf = mejs.MediaFeatures,
				// options for MediaElement (shim)
				meOptions = $.extend(true, {}, t.options, {
					success: function(media, domNode) { t.meReady(media, domNode); },
					error: function(e) { t.handleError(e);}
				}),
				tagName = t.media.tagName.toLowerCase();

			t.isDynamic = (tagName !== 'audio' && tagName !== 'video');

			if (t.isDynamic) {
				// get video from src or href?
				t.isVideo = t.options.isVideo;
			} else {
				t.isVideo = (tagName !== 'audio' && t.options.isVideo);
			}

			// use native controls in iPad, iPhone, and Android
			if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {

				// add controls and stop
				t.$media.attr('controls', 'controls');

				// attempt to fix iOS 3 bug
				//t.$media.removeAttr('poster');
                                // no Issue found on iOS3 -ttroxell

				// override Apple's autoplay override for iPads
				if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
					t.play();
				}

			} else if (mf.isAndroid && t.options.AndroidUseNativeControls) {

				// leave default player

			} else {

				// DESKTOP: use MediaElementPlayer controls

				// remove native controls
				t.$media.removeAttr('controls');
				var videoPlayerTitle = t.isVideo ?
					mejs.i18n.t('Video Player') : mejs.i18n.t('Audio Player');
				// insert description for screen readers
				$('<span class="mejs-offscreen">' + videoPlayerTitle + '</span>').insertBefore(t.$media);
				// build container
				t.container =
					$('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? 'svg' : 'no-svg') +
                      '" tabindex="0" role="application" aria-label="' + videoPlayerTitle + '">'+
						'<div class="mejs-inner">'+
							'<div class="mejs-mediaelement"></div>'+
							'<div class="mejs-layers"></div>'+
							'<div class="mejs-controls"></div>'+
							'<div class="mejs-clear"></div>'+
						'</div>' +
					'</div>')
					.addClass(t.$media[0].className)
					.insertBefore(t.$media)
					.focus(function ( e ) {
						if( !t.controlsAreVisible ) {
							t.showControls(true);
							var playButton = t.container.find('.mejs-playpause-button > button');
							playButton.focus();
						}
					});

				// add classes for user and content
				t.container.addClass(
					(mf.isAndroid ? 'mejs-android ' : '') +
					(mf.isiOS ? 'mejs-ios ' : '') +
					(mf.isiPad ? 'mejs-ipad ' : '') +
					(mf.isiPhone ? 'mejs-iphone ' : '') +
					(t.isVideo ? 'mejs-video ' : 'mejs-audio ')
				);


				// move the <video/video> tag into the right spot
				if (mf.isiOS) {

					// sadly, you can't move nodes in iOS, so we have to destroy and recreate it!
					var $newMedia = t.$media.clone();

					t.container.find('.mejs-mediaelement').append($newMedia);

					t.$media.remove();
					t.$node = t.$media = $newMedia;
					t.node = t.media = $newMedia[0];

				} else {

					// normal way of moving it into place (doesn't work on iOS)
					t.container.find('.mejs-mediaelement').append(t.$media);
				}

				// needs to be assigned here, after iOS remap
				t.node.player = t;

				// find parts
				t.controls = t.container.find('.mejs-controls');
				t.layers = t.container.find('.mejs-layers');

				// determine the size

				/* size priority:
					(1) videoWidth (forced),
					(2) style="width;height;"
					(3) width attribute,
					(4) defaultVideoWidth (for unspecified cases)
				*/

				var tagType = (t.isVideo ? 'video' : 'audio'),
					capsTagName = tagType.substring(0,1).toUpperCase() + tagType.substring(1);



				if (t.options[tagType + 'Width'] > 0 || t.options[tagType + 'Width'].toString().indexOf('%') > -1) {
					t.width = t.options[tagType + 'Width'];
				} else if (t.media.style.width !== '' && t.media.style.width !== null) {
					t.width = t.media.style.width;
				} else if (t.media.getAttribute('width') !== null) {
					t.width = t.$media.attr('width');
				} else {
					t.width = t.options['default' + capsTagName + 'Width'];
				}

				if (t.options[tagType + 'Height'] > 0 || t.options[tagType + 'Height'].toString().indexOf('%') > -1) {
					t.height = t.options[tagType + 'Height'];
				} else if (t.media.style.height !== '' && t.media.style.height !== null) {
					t.height = t.media.style.height;
				} else if (t.$media[0].getAttribute('height') !== null) {
					t.height = t.$media.attr('height');
				} else {
					t.height = t.options['default' + capsTagName + 'Height'];
				}

				// set the size, while we wait for the plugins to load below
				t.setPlayerSize(t.width, t.height);

				// create MediaElementShim
				meOptions.pluginWidth = t.width;
				meOptions.pluginHeight = t.height;
			}

			// create MediaElement shim
			mejs.MediaElement(t.$media[0], meOptions);

			if (typeof(t.container) != 'undefined' && t.controlsAreVisible){
				// controls are shown when loaded
				t.container.trigger('controlsshown');
			}
		},

		showControls: function(doAnimation) {
			var t = this;

			doAnimation = typeof doAnimation == 'undefined' || doAnimation;

			if (t.controlsAreVisible)
				return;

			if (doAnimation) {
				t.controls
					.css('visibility','visible')
					.stop(true, true).fadeIn(200, function() {
						t.controlsAreVisible = true;
						t.container.trigger('controlsshown');
					});

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.css('visibility','visible')
					.stop(true, true).fadeIn(200, function() {t.controlsAreVisible = true;});

			} else {
				t.controls
					.css('visibility','visible')
					.css('display','block');

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control')
					.css('visibility','visible')
					.css('display','block');

				t.controlsAreVisible = true;
				t.container.trigger('controlsshown');
			}

			t.setControlsSize();

		},

		hideControls: function(doAnimation) {
			var t = this;

			doAnimation = typeof doAnimation == 'undefined' || doAnimation;

			if (!t.controlsAreVisible || t.options.alwaysShowControls || t.keyboardAction)
				return;

			if (doAnimation) {
				// fade out main controls
				t.controls.stop(true, true).fadeOut(200, function() {
					$(this)
						.css('visibility','hidden')
						.css('display','block');

					t.controlsAreVisible = false;
					t.container.trigger('controlshidden');
				});

				// any additional controls people might add and want to hide
				t.container.find('.mejs-control').stop(true, true).fadeOut(200, function() {
					$(this)
						.css('visibility','hidden')
						.css('display','block');
				});
			} else {

				// hide main controls
				t.controls
					.css('visibility','hidden')
					.css('display','block');

				// hide others
				t.container.find('.mejs-control')
					.css('visibility','hidden')
					.css('display','block');

				t.controlsAreVisible = false;
				t.container.trigger('controlshidden');
			}
		},

		controlsTimer: null,

		startControlsTimer: function(timeout) {

			var t = this;

			timeout = typeof timeout != 'undefined' ? timeout : 1500;

			t.killControlsTimer('start');

			t.controlsTimer = setTimeout(function() {
				//
				t.hideControls();
				t.killControlsTimer('hide');
			}, timeout);
		},

		killControlsTimer: function(src) {

			var t = this;

			if (t.controlsTimer !== null) {
				clearTimeout(t.controlsTimer);
				delete t.controlsTimer;
				t.controlsTimer = null;
			}
		},

		controlsEnabled: true,

		disableControls: function() {
			var t= this;

			t.killControlsTimer();
			t.hideControls(false);
			this.controlsEnabled = false;
		},

		enableControls: function() {
			var t= this;

			t.showControls(false);

			t.controlsEnabled = true;
		},


		// Sets up all controls and events
		meReady: function(media, domNode) {


			var t = this,
				mf = mejs.MediaFeatures,
				autoplayAttr = domNode.getAttribute('autoplay'),
				autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
				featureIndex,
				feature;

			// make sure it can't create itself again if a plugin reloads
			if (t.created) {
				return;
			} else {
				t.created = true;
			}

			t.media = media;
			t.domNode = domNode;

			if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {

				// two built in features
				t.buildposter(t, t.controls, t.layers, t.media);
				t.buildkeyboard(t, t.controls, t.layers, t.media);
				t.buildoverlays(t, t.controls, t.layers, t.media);

				// grab for use by features
				t.findTracks();

				// add user-defined features/controls
				for (featureIndex in t.options.features) {
					feature = t.options.features[featureIndex];
					if (t['build' + feature]) {
						try {
							t['build' + feature](t, t.controls, t.layers, t.media);
						} catch (e) {
							// TODO: report control error
							//throw e;
							
							
						}
					}
				}

				t.container.trigger('controlsready');

				// reset all layers and controls
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();


				// controls fade
				if (t.isVideo) {

					if (mejs.MediaFeatures.hasTouch) {

						// for touch devices (iOS, Android)
						// show/hide without animation on touch

						t.$media.bind('touchstart', function() {


							// toggle controls
							if (t.controlsAreVisible) {
								t.hideControls(false);
							} else {
								if (t.controlsEnabled) {
									t.showControls(false);
								}
							}
						});

					} else {

						// create callback here since it needs access to current
						// MediaElement object
						t.clickToPlayPauseCallback = function() {
							//

							if (t.options.clickToPlayPause) {
								if (t.media.paused) {
									t.play();
								} else {
									t.pause();
								}
							}
						};

						// click to play/pause
						t.media.addEventListener('click', t.clickToPlayPauseCallback, false);

						// show/hide controls
						t.container
							.bind('mouseenter', function () {
								if (t.controlsEnabled) {
									if (!t.options.alwaysShowControls ) {
										t.killControlsTimer('enter');
										t.showControls();
										t.startControlsTimer(2500);
									}
								}
							})
							.bind('mousemove', function() {
								if (t.controlsEnabled) {
									if (!t.controlsAreVisible) {
										t.showControls();
									}
									if (!t.options.alwaysShowControls) {
										t.startControlsTimer(2500);
									}
								}
							})
							.bind('mouseleave', function () {
								if (t.controlsEnabled) {
									if (!t.media.paused && !t.options.alwaysShowControls) {
										t.startControlsTimer(1000);
									}
								}
							});
					}

					if(t.options.hideVideoControlsOnLoad) {
						t.hideControls(false);
					}

					// check for autoplay
					if (autoplay && !t.options.alwaysShowControls) {
						t.hideControls();
					}

					// resizer
					if (t.options.enableAutosize) {
						t.media.addEventListener('loadedmetadata', function(e) {
							// if the <video height> was not set and the options.videoHeight was not set
							// then resize to the real dimensions
							if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
								t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
								t.setControlsSize();
								t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
							}
						}, false);
					}
				}

				// EVENTS

				// FOCUS: when a video starts playing, it takes focus from other players (possibily pausing them)
				media.addEventListener('play', function() {
					var playerIndex;

					// go through all other players
					for (playerIndex in mejs.players) {
						var p = mejs.players[playerIndex];
						if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
							p.pause();
						}
						p.hasFocus = false;
					}

					t.hasFocus = true;
				},false);


				// ended for all
				t.media.addEventListener('ended', function (e) {
					if(t.options.autoRewind) {
						try{
							t.media.setCurrentTime(0);
                            // Fixing an Android stock browser bug, where "seeked" isn't fired correctly after ending the video and jumping to the beginning
                            window.setTimeout(function(){
                                $(t.container).find('.mejs-overlay-loading').parent().hide();
                            }, 20);
						} catch (exp) {

						}
					}
					t.media.pause();

					if (t.setProgressRail) {
						t.setProgressRail();
					}
					if (t.setCurrentRail) {
						t.setCurrentRail();
					}

					if (t.options.loop) {
						t.play();
					} else if (!t.options.alwaysShowControls && t.controlsEnabled) {
						t.showControls();
					}
				}, false);

				// resize on the first play
				t.media.addEventListener('loadedmetadata', function(e) {
					if (t.updateDuration) {
						t.updateDuration();
					}
					if (t.updateCurrent) {
						t.updateCurrent();
					}

					if (!t.isFullScreen) {
						t.setPlayerSize(t.width, t.height);
						t.setControlsSize();
					}
				}, false);

				// Only change the time format when necessary
				var duration = null;
				t.media.addEventListener('timeupdate',function() {
					if (duration !== this.duration) {
						duration = this.duration;
						mejs.Utility.calculateTimeFormat(duration, t.options, t.options.framesPerSecond || 25);
					}
				}, false);

				t.container.focusout(function (e) {
					if( e.relatedTarget ) { //FF is working on supporting focusout https://bugzilla.mozilla.org/show_bug.cgi?id=687787
						var $target = $(e.relatedTarget);
						if (t.keyboardAction && $target.parents('.mejs-container').length === 0) {
							t.keyboardAction = false;
							t.hideControls(true);
						}
					}
				});

				// webkit has trouble doing this without a delay
				setTimeout(function () {
					t.setPlayerSize(t.width, t.height);
					t.setControlsSize();
				}, 50);

				// adjust controls whenever window sizes (used to be in fullscreen only)
				t.globalBind('resize', function() {

					// don't resize for fullscreen mode
					if ( !(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen)) ) {
						t.setPlayerSize(t.width, t.height);
					}

					// always adjust controls
					t.setControlsSize();
				});

				// This is a work-around for a bug in the YouTube iFrame player, which means
				//  we can't use the play() API for the initial playback on iOS or Android;
				//  user has to start playback directly by tapping on the iFrame.
				if (t.media.pluginType == 'youtube' && ( mf.isiOS || mf.isAndroid ) ) {
					t.container.find('.mejs-overlay-play').hide();
				}
			}

			// force autoplay for HTML5
			if (autoplay && media.pluginType == 'native') {
				t.play();
			}


			if (t.options.success) {

				if (typeof t.options.success == 'string') {
					window[t.options.success](t.media, t.domNode, t);
				} else {
					t.options.success(t.media, t.domNode, t);
				}
			}
		},

		handleError: function(e) {
			var t = this;

			t.controls.hide();

			// Tell user that the file cannot be played
			if (t.options.error) {
				t.options.error(e);
			}
		},

		setPlayerSize: function(width,height) {
			var t = this;

			if( !t.options.setDimensions ) {
				return false;
			}

			if (typeof width != 'undefined') {
				t.width = width;
			}

			if (typeof height != 'undefined') {
				t.height = height;
			}

			// detect 100% mode - use currentStyle for IE since css() doesn't return percentages
			if (t.height.toString().indexOf('%') > 0 || (t.$node.css('max-width') !== 'none' && t.$node.css('max-width') !== 't.width') || (t.$node[0].currentStyle && t.$node[0].currentStyle.maxWidth === '100%')) {

				// do we have the native dimensions yet?
				var nativeWidth = (function() {
					if (t.isVideo) {
						if (t.media.videoWidth && t.media.videoWidth > 0) {
							return t.media.videoWidth;
						} else if (t.media.getAttribute('width') !== null) {
							return t.media.getAttribute('width');
						} else {
							return t.options.defaultVideoWidth;
						}
					} else {
						return t.options.defaultAudioWidth;
					}
				})();

				var nativeHeight = (function() {
					if (t.isVideo) {
						if (t.media.videoHeight && t.media.videoHeight > 0) {
							return t.media.videoHeight;
						} else if (t.media.getAttribute('height') !== null) {
							return t.media.getAttribute('height');
						} else {
							return t.options.defaultVideoHeight;
						}
					} else {
						return t.options.defaultAudioHeight;
					}
				})();

				var
					parentWidth = t.container.parent().closest(':visible').width(),
					parentHeight = t.container.parent().closest(':visible').height(),
					newHeight = t.isVideo || !t.options.autosizeProgress ? parseInt(parentWidth * nativeHeight/nativeWidth, 10) : nativeHeight;

				// When we use percent, the newHeight can't be calculated so we get the container height
				if (isNaN(newHeight)) {
					newHeight = parentHeight;
				}

				if (t.container.parent().length > 0 && t.container.parent()[0].tagName.toLowerCase() === 'body') { // && t.container.siblings().count == 0) {
					parentWidth = $(window).width();
					newHeight = $(window).height();
				}

				if ( newHeight && parentWidth ) {

					// set outer container size
					t.container
						.width(parentWidth)
						.height(newHeight);

					// set native <video> or <audio> and shims
					t.$media.add(t.container.find('.mejs-shim'))
						.width('100%')
						.height('100%');

					// if shim is ready, send the size to the embeded plugin
					if (t.isVideo) {
						if (t.media.setVideoSize) {
							t.media.setVideoSize(parentWidth, newHeight);
						}
					}

					// set the layers
					t.layers.children('.mejs-layer')
						.width('100%')
						.height('100%');
				}


			} else {

				t.container
					.width(t.width)
					.height(t.height);

				t.layers.children('.mejs-layer')
					.width(t.width)
					.height(t.height);

			}

		},

		setControlsSize: function() {
			var t = this,
				usedWidth = 0,
				railWidth = 0,
				rail = t.controls.find('.mejs-time-rail'),
				total = t.controls.find('.mejs-time-total'),
				others = rail.siblings(),
				lastControl = others.last(),
				lastControlPosition = null;

			// skip calculation if hidden
			if (!t.container.is(':visible') || !rail.length || !rail.is(':visible')) {
				return;
			}


			// allow the size to come from custom CSS
			if (t.options && !t.options.autosizeProgress) {
				// Also, frontends devs can be more flexible
				// due the opportunity of absolute positioning.
				railWidth = parseInt(rail.css('width'), 10);
			}

			// attempt to autosize
			if (railWidth === 0 || !railWidth) {

				// find the size of all the other controls besides the rail
				others.each(function() {
					var $this = $(this);
					if ($this.css('position') != 'absolute' && $this.is(':visible')) {
						usedWidth += $(this).outerWidth(true);
					}
				});

				// fit the rail into the remaining space
				railWidth = t.controls.width() - usedWidth - (rail.outerWidth(true) - rail.width());
			}

			// resize the rail,
			// but then check if the last control (say, the fullscreen button) got pushed down
			// this often happens when zoomed
			do {
				// outer area
				rail.width(railWidth);
				// dark space
				total.width(railWidth - (total.outerWidth(true) - total.width()));

				if (lastControl.css('position') != 'absolute') {
					lastControlPosition = lastControl.length ? lastControl.position() : null;
					railWidth--;
				}
			} while (lastControlPosition !== null && lastControlPosition.top > 0 && railWidth > 0);

			t.container.trigger('controlsresize');
		},


		buildposter: function(player, controls, layers, media) {
			var t = this,
				poster =
				$('<div class="mejs-poster mejs-layer">' +
				'</div>')
					.appendTo(layers),
				posterUrl = player.$media.attr('poster');

			// prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
			if (player.options.poster !== '') {
				posterUrl = player.options.poster;
			}

			// second, try the real poster
			if ( posterUrl ) {
				t.setPoster(posterUrl);
			} else {
				poster.hide();
			}

			media.addEventListener('play',function() {
				poster.hide();
			}, false);

			if(player.options.showPosterWhenEnded && player.options.autoRewind){
				media.addEventListener('ended',function() {
					poster.show();
				}, false);
			}
		},

		setPoster: function(url) {
			var t = this,
				posterDiv = t.container.find('.mejs-poster'),
				posterImg = posterDiv.find('img');

			if (posterImg.length === 0) {
				posterImg = $('<img width="100%" height="100%" alt="" />').appendTo(posterDiv);
			}

			posterImg.attr('src', url);
			posterDiv.css({'background-image' : 'url(' + url + ')'});
		},

		buildoverlays: function(player, controls, layers, media) {
            var t = this;
			if (!player.isVideo)
				return;

			var
			loading =
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-loading"><span></span></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			error =
				$('<div class="mejs-overlay mejs-layer">'+
					'<div class="mejs-overlay-error"></div>'+
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			// this needs to come last so it's on top
			bigPlay =
				$('<div class="mejs-overlay mejs-layer mejs-overlay-play">'+
					'<div class="mejs-overlay-button"></div>'+
				'</div>')
				.appendTo(layers)
				.bind('click', function() {  // Removed 'touchstart' due issues on Samsung Android devices where a tap on bigPlay started and immediately stopped the video
					if (t.options.clickToPlayPause) {
						if (media.paused) {
							media.play();
						}
					}
				});

			/*
			if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
				bigPlay.remove();
				loading.remove();
			}
			*/


			// show/hide big play button
			media.addEventListener('play',function() {
				bigPlay.hide();
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
				error.hide();
			}, false);

			media.addEventListener('playing', function() {
				bigPlay.hide();
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
				error.hide();
			}, false);

			media.addEventListener('seeking', function() {
				loading.show();
				controls.find('.mejs-time-buffering').show();
			}, false);

			media.addEventListener('seeked', function() {
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
			}, false);

			media.addEventListener('pause',function() {
				if (!mejs.MediaFeatures.isiPhone) {
					bigPlay.show();
				}
			}, false);

			media.addEventListener('waiting', function() {
				loading.show();
				controls.find('.mejs-time-buffering').show();
			}, false);


			// show/hide loading
			media.addEventListener('loadeddata',function() {
				// for some reason Chrome is firing this event
				//if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
				//	return;

				loading.show();
				controls.find('.mejs-time-buffering').show();
                // Firing the 'canplay' event after a timeout which isn't getting fired on some Android 4.1 devices (https://github.com/johndyer/mediaelement/issues/1305)
                if (mejs.MediaFeatures.isAndroid) {
                    media.canplayTimeout = window.setTimeout(
                        function() {
                            if (document.createEvent) {
                                var evt = document.createEvent('HTMLEvents');
                                evt.initEvent('canplay', true, true);
                                return media.dispatchEvent(evt);
                            }
                        }, 300
                    );
                }
			}, false);
			media.addEventListener('canplay',function() {
				loading.hide();
				controls.find('.mejs-time-buffering').hide();
                clearTimeout(media.canplayTimeout); // Clear timeout inside 'loadeddata' to prevent 'canplay' to fire twice
			}, false);

			// error handling
			media.addEventListener('error',function(e) {
				t.handleError(e);
				loading.hide();
				bigPlay.hide();
				error.show();
				error.find('.mejs-overlay-error').html("Error loading this resource");
			}, false);

			media.addEventListener('keydown', function(e) {
				t.onkeydown(player, media, e);
			}, false);
		},

		buildkeyboard: function(player, controls, layers, media) {

				var t = this;

				t.container.keydown(function () {
					t.keyboardAction = true;
				});

				// listen for key presses
				t.globalBind('keydown', function(event) {
					player.hasFocus = $(event.target).closest('.mejs-container').length !== 0;
					return t.onkeydown(player, media, event);
				});


				// check if someone clicked outside a player region, then kill its focus
				t.globalBind('click', function(event) {
					player.hasFocus = $(event.target).closest('.mejs-container').length !== 0;
				});

		},
		onkeydown: function(player, media, e) {
			if (player.hasFocus && player.options.enableKeyboard) {
				// find a matching key
				for (var i = 0, il = player.options.keyActions.length; i < il; i++) {
					var keyAction = player.options.keyActions[i];

					for (var j = 0, jl = keyAction.keys.length; j < jl; j++) {
						if (e.keyCode == keyAction.keys[j]) {
							if (typeof(e.preventDefault) == "function") e.preventDefault();
							keyAction.action(player, media, e.keyCode);
							return false;
						}
					}
				}
			}

			return true;
		},

		findTracks: function() {
			var t = this,
				tracktags = t.$media.find('track');

			// store for use by plugins
			t.tracks = [];
			tracktags.each(function(index, track) {

				track = $(track);

				t.tracks.push({
					srclang: (track.attr('srclang')) ? track.attr('srclang').toLowerCase() : '',
					src: track.attr('src'),
					kind: track.attr('kind'),
					label: track.attr('label') || '',
					entries: [],
					isLoaded: false
				});
			});
		},
		changeSkin: function(className) {
			this.container[0].className = 'mejs-container ' + className;
			this.setPlayerSize(this.width, this.height);
			this.setControlsSize();
		},
		play: function() {
			this.load();
			this.media.play();
		},
		pause: function() {
			try {
				this.media.pause();
			} catch (e) {}
		},
		load: function() {
			if (!this.isLoaded) {
				this.media.load();
			}

			this.isLoaded = true;
		},
		setMuted: function(muted) {
			this.media.setMuted(muted);
		},
		setCurrentTime: function(time) {
			this.media.setCurrentTime(time);
		},
		getCurrentTime: function() {
			return this.media.currentTime;
		},
		setVolume: function(volume) {
			this.media.setVolume(volume);
		},
		getVolume: function() {
			return this.media.volume;
		},
		setSrc: function(src) {
			this.media.setSrc(src);
		},
		remove: function() {
			var t = this, featureIndex, feature;

			t.container.prev('.mejs-offscreen').remove();

			// invoke features cleanup
			for (featureIndex in t.options.features) {
				feature = t.options.features[featureIndex];
				if (t['clean' + feature]) {
					try {
						t['clean' + feature](t);
					} catch (e) {
						// TODO: report control error
						//throw e;
						//
						//
					}
				}
			}

			// grab video and put it back in place
			if (!t.isDynamic) {
				t.$media.prop('controls', true);
				// detach events from the video
				// TODO: detach event listeners better than this;
				//       also detach ONLY the events attached by this plugin!
				t.$node.clone().insertBefore(t.container).show();
				t.$node.remove();
			} else {
				t.$node.insertBefore(t.container);
			}

			if (t.media.pluginType !== 'native') {
				t.media.remove();
			}

			// Remove the player from the mejs.players object so that pauseOtherPlayers doesn't blow up when trying to pause a non existance flash api.
			delete mejs.players[t.id];

			if (typeof t.container == 'object') {
				t.container.remove();
			}
			t.globalUnbind();
			delete t.node.player;
		},
		rebuildtracks: function(){
			var t = this;
			t.findTracks();
			t.buildtracks(t, t.controls, t.layers, t.media);
		},
		resetSize: function(){
			var t = this;
			// webkit has trouble doing this without a delay
			setTimeout(function () {
				//
				t.setPlayerSize(t.width, t.height);
				t.setControlsSize();
			}, 50);
		}
	};

	(function(){
		var rwindow = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;

		function splitEvents(events, id) {
			// add player ID as an event namespace so it's easier to unbind them all later
			var ret = {d: [], w: []};
			$.each((events || '').split(' '), function(k, v){
				var eventname = v + '.' + id;
				if (eventname.indexOf('.') === 0) {
					ret.d.push(eventname);
					ret.w.push(eventname);
				}
				else {
					ret[rwindow.test(v) ? 'w' : 'd'].push(eventname);
				}
			});
			ret.d = ret.d.join(' ');
			ret.w = ret.w.join(' ');
			return ret;
		}

		mejs.MediaElementPlayer.prototype.globalBind = function(events, data, callback) {
    	var t = this;
      var doc = t.node ? t.node.ownerDocument : document;

			events = splitEvents(events, t.id);
			if (events.d) $(doc).bind(events.d, data, callback);
			if (events.w) $(window).bind(events.w, data, callback);
		};

		mejs.MediaElementPlayer.prototype.globalUnbind = function(events, callback) {
			var t = this;
      var doc = t.node ? t.node.ownerDocument : document;

			events = splitEvents(events, t.id);
			if (events.d) $(doc).unbind(events.d, callback);
			if (events.w) $(window).unbind(events.w, callback);
		};
	})();

	// turn into jQuery plugin
	if (typeof $ != 'undefined') {
		$.fn.mediaelementplayer = function (options) {
			if (options === false) {
				this.each(function () {
					var player = $(this).data('mediaelementplayer');
					if (player) {
						player.remove();
					}
					$(this).removeData('mediaelementplayer');
				});
			}
			else {
				this.each(function () {
					$(this).data('mediaelementplayer', new mejs.MediaElementPlayer(this, options));
				});
			}
			return this;
		};


		$(document).ready(function() {
			// auto enable using JSON attribute
			$('.mejs-player').mediaelementplayer();
		});
	}

	// push out to window
	window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		playText: mejs.i18n.t('Play'),
		pauseText: mejs.i18n.t('Pause')
	});

	// PLAY/pause BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildplaypause: function(player, controls, layers, media) {
			var 
				t = this,
				op = t.options,
				play = 
				$('<div class="mejs-button mejs-playpause-button mejs-play" >' +
					'<button type="button" aria-controls="' + t.id + '" title="' + op.playText + '" aria-label="' + op.playText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function(e) {
					e.preventDefault();
				
					if (media.paused) {
						media.play();
					} else {
						media.pause();
					}
					
					return false;
				}),
				play_btn = play.find('button');


			function togglePlayPause(which) {
				if ('play' === which) {
					play.removeClass('mejs-play').addClass('mejs-pause');
					play_btn.attr({
						'title': op.pauseText,
						'aria-label': op.pauseText
					});
				} else {
					play.removeClass('mejs-pause').addClass('mejs-play');
					play_btn.attr({
						'title': op.playText,
						'aria-label': op.playText
					});
				}
			};
			togglePlayPause('pse');


			media.addEventListener('play',function() {
				togglePlayPause('play');
			}, false);
			media.addEventListener('playing',function() {
				togglePlayPause('play');
			}, false);


			media.addEventListener('pause',function() {
				togglePlayPause('pse');
			}, false);
			media.addEventListener('paused',function() {
				togglePlayPause('pse');
			}, false);
		}
	});
	
})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		stopText: 'Stop'
	});

	// STOP BUTTON
	$.extend(MediaElementPlayer.prototype, {
		buildstop: function(player, controls, layers, media) {
			var t = this;

			$('<div class="mejs-button mejs-stop-button mejs-stop">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '" aria-label="' + t.options.stopText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function() {
					if (!media.paused) {
						media.pause();
					}
					if (media.currentTime > 0) {
						media.setCurrentTime(0);
                        media.pause();
						controls.find('.mejs-time-current').width('0px');
						controls.find('.mejs-time-handle').css('left', '0px');
						controls.find('.mejs-time-float-current').html( mejs.Utility.secondsToTimeCode(0, player.options));
						controls.find('.mejs-currenttime').html( mejs.Utility.secondsToTimeCode(0, player.options));
						layers.find('.mejs-poster').show();
					}
				});
		}
	});
	
})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		progessHelpText: mejs.i18n.t(
		'Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.')
	});

	// progress/loaded bar
	$.extend(MediaElementPlayer.prototype, {
		buildprogress: function(player, controls, layers, media) {

			$('<div class="mejs-time-rail">' +
				'<span  class="mejs-time-total mejs-time-slider">' +
				//'<span class="mejs-offscreen">' + this.options.progessHelpText + '</span>' +
					'<span class="mejs-time-buffering"></span>' +
					'<span class="mejs-time-loaded"></span>' +
					'<span class="mejs-time-current"></span>' +
					'<span class="mejs-time-handle"></span>' +
					'<span class="mejs-time-float">' +
						'<span class="mejs-time-float-current">00:00</span>' +
						'<span class="mejs-time-float-corner"></span>' +
					'</span>' +
				'</span>' +
			'</div>')
				.appendTo(controls);
			controls.find('.mejs-time-buffering').hide();

			var 
				t = this,
				total = controls.find('.mejs-time-total'),
				loaded  = controls.find('.mejs-time-loaded'),
				current  = controls.find('.mejs-time-current'),
				handle  = controls.find('.mejs-time-handle'),
				timefloat  = controls.find('.mejs-time-float'),
				timefloatcurrent  = controls.find('.mejs-time-float-current'),
                slider = controls.find('.mejs-time-slider'),
				handleMouseMove = function (e) {
					
                    var offset = total.offset(),
						width = total.width(),
						percentage = 0,
						newTime = 0,
						pos = 0,
                        x;
                    
                    // mouse or touch position relative to the object
					if (e.originalEvent && e.originalEvent.changedTouches) {
						x = e.originalEvent.changedTouches[0].pageX;
					} else if (e.changedTouches) { // for Zepto
						x = e.changedTouches[0].pageX;
					} else {
						x = e.pageX;
					}

					if (media.duration) {
						if (x < offset.left) {
							x = offset.left;
						} else if (x > width + offset.left) {
							x = width + offset.left;
						}
						
						pos = x - offset.left;
						percentage = (pos / width);
						newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

						// seek to where the mouse is
						if (mouseIsDown && newTime !== media.currentTime) {
							media.setCurrentTime(newTime);
						}

						// position floating time box
						if (!mejs.MediaFeatures.hasTouch) {
								timefloat.css('left', pos);
								timefloatcurrent.html( mejs.Utility.secondsToTimeCode(newTime, player.options) );
								timefloat.show();
						}
					}
				},
				mouseIsDown = false,
				mouseIsOver = false,
				lastKeyPressTime = 0,
				startedPaused = false,
				autoRewindInitial = player.options.autoRewind;
            // Accessibility for slider
            var updateSlider = function (e) {

				var seconds = media.currentTime,
					timeSliderText = mejs.i18n.t('Time Slider'),
					time = mejs.Utility.secondsToTimeCode(seconds, player.options),
					duration = media.duration;

				slider.attr({
					'aria-label': timeSliderText,
					'aria-valuemin': 0,
					'aria-valuemax': duration,
					'aria-valuenow': seconds,
					'aria-valuetext': time,
					'role': 'slider',
					'tabindex': 0
				});

			};
            
            var restartPlayer = function () {
				var now = new Date();
				if (now - lastKeyPressTime >= 1000) {
					media.play();
				}
			};

			slider.bind('focus', function (e) {
				player.options.autoRewind = false;
			});

			slider.bind('blur', function (e) {
				player.options.autoRewind = autoRewindInitial;
			});

			slider.bind('keydown', function (e) {

				if ((new Date() - lastKeyPressTime) >= 1000) {
					startedPaused = media.paused;
				}

				var keyCode = e.keyCode,
					duration = media.duration,
					seekTime = media.currentTime;

				switch (keyCode) {
				case 37: // left
					seekTime -= 1;
					break;
				case 39: // Right
					seekTime += 1;
					break;
				case 38: // Up
					seekTime += Math.floor(duration * 0.1);
					break;
				case 40: // Down
					seekTime -= Math.floor(duration * 0.1);
					break;
				case 36: // Home
					seekTime = 0;
					break;
				case 35: // end
					seekTime = duration;
					break;
				case 10: // enter
					media.paused ? media.play() : media.pause();
					return;
				case 13: // space
					media.paused ? media.play() : media.pause();
					return;
				default:
					return;
				}

				seekTime = seekTime < 0 ? 0 : (seekTime >= duration ? duration : Math.floor(seekTime));
				lastKeyPressTime = new Date();
				if (!startedPaused) {
					media.pause();
				}

				if (seekTime < media.duration && !startedPaused) {
					setTimeout(restartPlayer, 1100);
				}

				media.setCurrentTime(seekTime);

				e.preventDefault();
				e.stopPropagation();
				return false;
			});


			// handle clicks
			//controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
			total
				.bind('mousedown touchstart', function (e) {
					// only handle left clicks or touch
					if (e.which === 1 || e.which === 0) {
						mouseIsDown = true;
						handleMouseMove(e);
						t.globalBind('mousemove.dur touchmove.dur', function(e) {
							handleMouseMove(e);
						});
						t.globalBind('mouseup.dur touchend.dur', function (e) {
							mouseIsDown = false;
							timefloat.hide();
							t.globalUnbind('.dur');
						});
					}
				})
				.bind('mouseenter', function(e) {
					mouseIsOver = true;
					t.globalBind('mousemove.dur', function(e) {
						handleMouseMove(e);
					});
					if (!mejs.MediaFeatures.hasTouch) {
						timefloat.show();
					}
				})
				.bind('mouseleave',function(e) {
					mouseIsOver = false;
					if (!mouseIsDown) {
						t.globalUnbind('.dur');
						timefloat.hide();
					}
				});

			// loading
			media.addEventListener('progress', function (e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
			}, false);

			// current time
			media.addEventListener('timeupdate', function(e) {
				player.setProgressRail(e);
				player.setCurrentRail(e);
				updateSlider(e);
			}, false);
			
			t.container.on('controlsresize', function() {
				player.setProgressRail();
				player.setCurrentRail();
			});
			
			// store for later use
			t.loaded = loaded;
			t.total = total;
			t.current = current;
			t.handle = handle;
		},
		setProgressRail: function(e) {

			var
				t = this,
				target = (e !== undefined) ? e.target : t.media,
				percent = null;

			// newest HTML5 spec has buffered array (FF4, Webkit)
			if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
				// account for a real array with multiple values - always read the end of the last buffer
				percent = target.buffered.end(target.buffered.length - 1) / target.duration;
			} 
			// Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
			// to be anything other than 0. If the byte count is available we use this instead.
			// Browsers that support the else if do not seem to have the bufferedBytes value and
			// should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
			else if (target && target.bytesTotal !== undefined && target.bytesTotal > 0 && target.bufferedBytes !== undefined) {
				percent = target.bufferedBytes / target.bytesTotal;
			}
			// Firefox 3 with an Ogg file seems to go this way
			else if (e && e.lengthComputable && e.total !== 0) {
				percent = e.loaded / e.total;
			}

			// finally update the progress bar
			if (percent !== null) {
				percent = Math.min(1, Math.max(0, percent));
				// update loaded bar
				if (t.loaded && t.total) {
					t.loaded.width(t.total.width() * percent);
				}
			}
		},
		setCurrentRail: function() {

			var t = this;
		
			if (t.media.currentTime !== undefined && t.media.duration) {

				// update bar and handle
				if (t.total && t.handle) {
					var 
						newWidth = Math.round(t.total.width() * t.media.currentTime / t.media.duration),
						handlePos = newWidth - Math.round(t.handle.outerWidth(true) / 2);

					t.current.width(newWidth);
					t.handle.css('left', handlePos);
				}
			}

		}
	});
})(mejs.$);

(function($) {
	
	// options
	$.extend(mejs.MepDefaults, {
		duration: -1,
		timeAndDurationSeparator: '<span> | </span>'
	});


	// current and duration 00:00 / 00:00
	$.extend(MediaElementPlayer.prototype, {
		buildcurrent: function(player, controls, layers, media) {
			var t = this;
			
			$('<div class="mejs-time" role="timer" aria-live="off">' +
					'<span class="mejs-currenttime">' + 
						mejs.Utility.secondsToTimeCode(0, player.options) +
                    '</span>'+
				'</div>')
			.appendTo(controls);
			
			t.currenttime = t.controls.find('.mejs-currenttime');

			media.addEventListener('timeupdate',function() {
				player.updateCurrent();
			}, false);
		},


		buildduration: function(player, controls, layers, media) {
			var t = this;
			
			if (controls.children().last().find('.mejs-currenttime').length > 0) {
				$(t.options.timeAndDurationSeparator +
					'<span class="mejs-duration">' + 
						mejs.Utility.secondsToTimeCode(t.options.duration, t.options) +
					'</span>')
					.appendTo(controls.find('.mejs-time'));
			} else {

				// add class to current time
				controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');
				
				$('<div class="mejs-time mejs-duration-container">'+
					'<span class="mejs-duration">' + 
						mejs.Utility.secondsToTimeCode(t.options.duration, t.options) +
					'</span>' +
				'</div>')
				.appendTo(controls);
			}
			
			t.durationD = t.controls.find('.mejs-duration');

			media.addEventListener('timeupdate',function() {
				player.updateDuration();
			}, false);
		},
		
		updateCurrent:  function() {
			var t = this;

			if (t.currenttime) {
				t.currenttime.html(mejs.Utility.secondsToTimeCode(t.media.currentTime, t.options));
			}
		},
		
		updateDuration: function() {
			var t = this;

			//Toggle the long video class if the video is longer than an hour.
			t.container.toggleClass("mejs-long-video", t.media.duration > 3600);
			
			if (t.durationD && (t.options.duration > 0 || t.media.duration)) {
				t.durationD.html(mejs.Utility.secondsToTimeCode(t.options.duration > 0 ? t.options.duration : t.media.duration, t.options));
			}		
		}
	});

})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		muteText: mejs.i18n.t('Mute Toggle'),
        allyVolumeControlText: mejs.i18n.t('Use Up/Down Arrow keys to increase or decrease volume.'),
		hideVolumeOnTouchDevices: true,
		
		audioVolume: 'horizontal',
		videoVolume: 'vertical'
	});

	$.extend(MediaElementPlayer.prototype, {
		buildvolume: function(player, controls, layers, media) {
				
			// Android and iOS don't support volume controls
			if ((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)
				return;
			
			var t = this,
				mode = (t.isVideo) ? t.options.videoVolume : t.options.audioVolume,
				mute = (mode == 'horizontal') ?
				
				// horizontal version
				$('<div class="mejs-button mejs-volume-button mejs-mute">' +
					'<button type="button" aria-controls="' + t.id + 
						'" title="' + t.options.muteText + 
						'" aria-label="' + t.options.muteText +
					'"></button>'+
				'</div>' +
                  '<a href="javascript:void(0);" class="mejs-horizontal-volume-slider">' + // outer background
					'<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +
					'<div class="mejs-horizontal-volume-total"></div>'+ // line background
					'<div class="mejs-horizontal-volume-current"></div>'+ // current volume
					'<div class="mejs-horizontal-volume-handle"></div>'+ // handle
				'</a>'
				)
					.appendTo(controls) :
				
				// vertical version
				$('<div class="mejs-button mejs-volume-button mejs-mute">'+
					'<button type="button" aria-controls="' + t.id + 
						'" title="' + t.options.muteText + 
						'" aria-label="' + t.options.muteText + 
					'"></button>'+
					'<a href="javascript:void(0);" class="mejs-volume-slider">'+ // outer background
						'<span class="mejs-offscreen">' + t.options.allyVolumeControlText + '</span>' +                  
						'<div class="mejs-volume-total"></div>'+ // line background
						'<div class="mejs-volume-current"></div>'+ // current volume
						'<div class="mejs-volume-handle"></div>'+ // handle
					'</a>'+
				'</div>')
					.appendTo(controls),
			volumeSlider = t.container.find('.mejs-volume-slider, .mejs-horizontal-volume-slider'),
			volumeTotal = t.container.find('.mejs-volume-total, .mejs-horizontal-volume-total'),
			volumeCurrent = t.container.find('.mejs-volume-current, .mejs-horizontal-volume-current'),
			volumeHandle = t.container.find('.mejs-volume-handle, .mejs-horizontal-volume-handle'),

			positionVolumeHandle = function(volume, secondTry) {

				if (!volumeSlider.is(':visible') && typeof secondTry == 'undefined') {
					volumeSlider.show();
					positionVolumeHandle(volume, true);
					volumeSlider.hide();
					return;
				}

				// correct to 0-1
				volume = Math.max(0,volume);
				volume = Math.min(volume,1);

				// ajust mute button style
				if (volume === 0) {
					mute.removeClass('mejs-mute').addClass('mejs-unmute');
					mute.children('button').attr('title', mejs.i18n.t('Unmute')).attr('aria-label', mejs.i18n.t('Unmute'));
				} else {
					mute.removeClass('mejs-unmute').addClass('mejs-mute');
					mute.children('button').attr('title', mejs.i18n.t('Mute')).attr('aria-label', mejs.i18n.t('Mute'));
				}

                // top/left of full size volume slider background
                var totalPosition = volumeTotal.position();
				// position slider 
				if (mode == 'vertical') {
					var
                    // height of the full size volume slider background
						totalHeight = volumeTotal.height(),

                        // the new top position based on the current volume
						// 70% volume on 100px height == top:30px
						newTop = totalHeight - (totalHeight * volume);
	
					// handle
					volumeHandle.css('top', Math.round(totalPosition.top + newTop - (volumeHandle.height() / 2)));
	
					// show the current visibility
					volumeCurrent.height(totalHeight - newTop );
					volumeCurrent.css('top', totalPosition.top + newTop);
				} else {
                    var
						// height of the full size volume slider background
						totalWidth = volumeTotal.width(),
						
						// the new left position based on the current volume
						newLeft = totalWidth * volume;
	
					// handle
					volumeHandle.css('left', Math.round(totalPosition.left + newLeft - (volumeHandle.width() / 2)));
	
					// rezize the current part of the volume bar
					volumeCurrent.width( Math.round(newLeft) );
				}
			},
			handleVolumeMove = function(e) {
				
				var volume = null,
					totalOffset = volumeTotal.offset();
				
				// calculate the new volume based on the moust position
				if (mode === 'vertical') {
				
					var
						railHeight = volumeTotal.height(),
						newY = e.pageY - totalOffset.top;
						
					volume = (railHeight - newY) / railHeight;
						
					// the controls just hide themselves (usually when mouse moves too far up)
					if (totalOffset.top === 0 || totalOffset.left === 0) {
						return;
                    }
					
				} else {
					var
						railWidth = volumeTotal.width(),
						newX = e.pageX - totalOffset.left;
						
					volume = newX / railWidth;
				}
				
				// ensure the volume isn't outside 0-1
				volume = Math.max(0,volume);
				volume = Math.min(volume,1);
				
				// position the slider and handle
				positionVolumeHandle(volume);
				
				// set the media object (this will trigger the volumechanged event)
				if (volume === 0) {
					media.setMuted(true);
				} else {
					media.setMuted(false);
				}
				media.setVolume(volume);
			},
			mouseIsDown = false,
			mouseIsOver = false;

			// SLIDER
			
			mute
				.hover(function() {
					volumeSlider.show();
					mouseIsOver = true;
				}, function() {
					mouseIsOver = false;
						
					if (!mouseIsDown && mode == 'vertical')	{
						volumeSlider.hide();
					}
				});
            
            var updateVolumeSlider = function (e) {

                var volume = Math.floor(media.volume*100);

				volumeSlider.attr({
					'aria-label': mejs.i18n.t('volumeSlider'),
					'aria-valuemin': 0,
					'aria-valuemax': 100,
					'aria-valuenow': volume,
					'aria-valuetext': volume+'%',
					'role': 'slider',
					'tabindex': 0
				});

			};
			
			volumeSlider
				.bind('mouseover', function() {
					mouseIsOver = true;	
				})
				.bind('mousedown', function (e) {
					handleVolumeMove(e);
					t.globalBind('mousemove.vol', function(e) {
						handleVolumeMove(e);
					});
					t.globalBind('mouseup.vol', function () {
						mouseIsDown = false;
						t.globalUnbind('.vol');

						if (!mouseIsOver && mode == 'vertical') {
							volumeSlider.hide();
						}
					});
					mouseIsDown = true;
						
					return false;
				})
				.bind('keydown', function (e) {
					var keyCode = e.keyCode;
					var volume = media.volume;
					switch (keyCode) {
                        case 38: // Up
                            volume += 0.1;
                            break;
                        case 40: // Down
                            volume = volume - 0.1;
                            break;
                        default:
                            return true;
                    }

					mouseIsDown = false;
					positionVolumeHandle(volume);
					media.setVolume(volume);
					return false;
				});

			// MUTE button
			mute.find('button').click(function() {
				media.setMuted( !media.muted );
			});
            
            //Keyboard input
            mute.find('button').bind('focus', function () {
				volumeSlider.show();
			});

			// listen for volume change events from other sources
			media.addEventListener('volumechange', function(e) {
				if (!mouseIsDown) {
					if (media.muted) {
						positionVolumeHandle(0);
						mute.removeClass('mejs-mute').addClass('mejs-unmute');
					} else {
						positionVolumeHandle(media.volume);
						mute.removeClass('mejs-unmute').addClass('mejs-mute');
					}
				}
				updateVolumeSlider(e);
			}, false);
			
			// mutes the media and sets the volume icon muted if the initial volume is set to 0
			if (player.options.startVolume === 0) {
				media.setMuted(true);
			}
			
			// shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
			if (media.pluginType === 'native') {
				media.setVolume(player.options.startVolume);
			}
			
			t.container.on('controlsresize', function() {
				positionVolumeHandle(media.volume);
			});
		}
	});
	
})(mejs.$);

(function($) {

	$.extend(mejs.MepDefaults, {
		usePluginFullScreen: true,
		newWindowCallback: function() { return '';},
		fullscreenText: mejs.i18n.t('Fullscreen')
	});

	$.extend(MediaElementPlayer.prototype, {

		isFullScreen: false,

		isNativeFullScreen: false,

		isInIframe: false,

		buildfullscreen: function(player, controls, layers, media) {

			if (!player.isVideo)
				return;

			player.isInIframe = (window.location != window.parent.location);

			// native events
			if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

				// chrome doesn't alays fire this in an iframe
				var func = function(e) {
					if (player.isFullScreen) {
						if (mejs.MediaFeatures.isFullScreen()) {
							player.isNativeFullScreen = true;
							// reset the controls once we are fully in full screen
							player.setControlsSize();
						} else {
							player.isNativeFullScreen = false;
							// when a user presses ESC
							// make sure to put the player back into place
							player.exitFullScreen();
						}
					}
				};

				player.globalBind(mejs.MediaFeatures.fullScreenEventName, func);
			}

			var t = this,
				fullscreenBtn =
					$('<div class="mejs-button mejs-fullscreen-button">' +
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.fullscreenText + '" aria-label="' + t.options.fullscreenText + '"></button>' +
					'</div>')
					.appendTo(controls);

				if (t.media.pluginType === 'native' || (!t.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {

					fullscreenBtn.click(function() {
						var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;

						if (isFullScreen) {
							player.exitFullScreen();
						} else {
							player.enterFullScreen();
						}
					});

				} else {

					var hideTimeout = null,
						supportsPointerEvents = (function() {
							// TAKEN FROM MODERNIZR
							var element = document.createElement('x'),
								documentElement = document.documentElement,
								getComputedStyle = window.getComputedStyle,
								supports;
							if(!('pointerEvents' in element.style)){
								return false;
							}
							element.style.pointerEvents = 'auto';
							element.style.pointerEvents = 'x';
							documentElement.appendChild(element);
							supports = getComputedStyle &&
								getComputedStyle(element, '').pointerEvents === 'auto';
							documentElement.removeChild(element);
							return !!supports;
						})();

					//

					if (supportsPointerEvents && !mejs.MediaFeatures.isOpera) { // opera doesn't allow this :(

						// allows clicking through the fullscreen button and controls down directly to Flash

						/*
						 When a user puts his mouse over the fullscreen button, the controls are disabled
						 So we put a div over the video and another one on iether side of the fullscreen button
						 that caputre mouse movement
						 and restore the controls once the mouse moves outside of the fullscreen button
						*/

						var fullscreenIsDisabled = false,
							restoreControls = function() {
								if (fullscreenIsDisabled) {
									// hide the hovers
									for (var i in hoverDivs) {
										hoverDivs[i].hide();
									}

									// restore the control bar
									fullscreenBtn.css('pointer-events', '');
									t.controls.css('pointer-events', '');

									// prevent clicks from pausing video
									t.media.removeEventListener('click', t.clickToPlayPauseCallback);

									// store for later
									fullscreenIsDisabled = false;
								}
							},
							hoverDivs = {},
							hoverDivNames = ['top', 'left', 'right', 'bottom'],
							i, len,
							positionHoverDivs = function() {
								var fullScreenBtnOffsetLeft = fullscreenBtn.offset().left - t.container.offset().left,
									fullScreenBtnOffsetTop = fullscreenBtn.offset().top - t.container.offset().top,
									fullScreenBtnWidth = fullscreenBtn.outerWidth(true),
									fullScreenBtnHeight = fullscreenBtn.outerHeight(true),
									containerWidth = t.container.width(),
									containerHeight = t.container.height();

								for (i in hoverDivs) {
									hoverDivs[i].css({position: 'absolute', top: 0, left: 0}); //, backgroundColor: '#f00'});
								}

								// over video, but not controls
								hoverDivs['top']
									.width( containerWidth )
									.height( fullScreenBtnOffsetTop );

								// over controls, but not the fullscreen button
								hoverDivs['left']
									.width( fullScreenBtnOffsetLeft )
									.height( fullScreenBtnHeight )
									.css({top: fullScreenBtnOffsetTop});

								// after the fullscreen button
								hoverDivs['right']
									.width( containerWidth - fullScreenBtnOffsetLeft - fullScreenBtnWidth )
									.height( fullScreenBtnHeight )
									.css({top: fullScreenBtnOffsetTop,
										 left: fullScreenBtnOffsetLeft + fullScreenBtnWidth});

								// under the fullscreen button
								hoverDivs['bottom']
									.width( containerWidth )
									.height( containerHeight - fullScreenBtnHeight - fullScreenBtnOffsetTop )
									.css({top: fullScreenBtnOffsetTop + fullScreenBtnHeight});
							};

						t.globalBind('resize', function() {
							positionHoverDivs();
						});

						for (i = 0, len = hoverDivNames.length; i < len; i++) {
							hoverDivs[hoverDivNames[i]] = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls).hide();
						}

						// on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
						fullscreenBtn.on('mouseover',function() {

							if (!t.isFullScreen) {

								var buttonPos = fullscreenBtn.offset(),
									containerPos = player.container.offset();

								// move the button in Flash into place
								media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);

								// allows click through
								fullscreenBtn.css('pointer-events', 'none');
								t.controls.css('pointer-events', 'none');

								// restore click-to-play
								t.media.addEventListener('click', t.clickToPlayPauseCallback);

								// show the divs that will restore things
								for (i in hoverDivs) {
									hoverDivs[i].show();
								}

								positionHoverDivs();

								fullscreenIsDisabled = true;
							}

						});

						// restore controls anytime the user enters or leaves fullscreen
						media.addEventListener('fullscreenchange', function(e) {
							t.isFullScreen = !t.isFullScreen;
							// don't allow plugin click to pause video - messes with
							// plugin's controls
							if (t.isFullScreen) {
								t.media.removeEventListener('click', t.clickToPlayPauseCallback);
							} else {
								t.media.addEventListener('click', t.clickToPlayPauseCallback);
							}
							restoreControls();
						});


						// the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
						// so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button

						t.globalBind('mousemove', function(e) {

							// if the mouse is anywhere but the fullsceen button, then restore it all
							if (fullscreenIsDisabled) {

								var fullscreenBtnPos = fullscreenBtn.offset();


								if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
									e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
									) {

									fullscreenBtn.css('pointer-events', '');
									t.controls.css('pointer-events', '');

									fullscreenIsDisabled = false;
								}
							}
						});



					} else {

						// the hover state will show the fullscreen button in Flash to hover up and click

						fullscreenBtn
							.on('mouseover', function() {

								if (hideTimeout !== null) {
									clearTimeout(hideTimeout);
									delete hideTimeout;
								}

								var buttonPos = fullscreenBtn.offset(),
									containerPos = player.container.offset();

								media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);

							})
							.on('mouseout', function() {

								if (hideTimeout !== null) {
									clearTimeout(hideTimeout);
									delete hideTimeout;
								}

								hideTimeout = setTimeout(function() {
									media.hideFullscreenButton();
								}, 1500);


							});
					}
				}

			player.fullscreenBtn = fullscreenBtn;

			t.globalBind('keydown',function (e) {
				if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen) && e.keyCode == 27) {
					player.exitFullScreen();
				}
			});
			
			t.normalHeight = 0;
			t.normalWidth = 0;

		},

		cleanfullscreen: function(player) {
			player.exitFullScreen();
		},

        containerSizeTimeout: null,

		enterFullScreen: function() {

			var t = this;

			// firefox+flash can't adjust plugin sizes without resetting :(
			if (t.media.pluginType !== 'native' && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) {
				//t.media.setFullscreen(true);
				//player.isFullScreen = true;
				return;
			}

			// set it to not show scroll bars so 100% will work
            $(document.documentElement).addClass('mejs-fullscreen');

			// store sizing
			t.normalHeight = t.container.height();
			t.normalWidth = t.container.width();

			// attempt to do true fullscreen (Safari 5.1 and Firefox Nightly only for now)
			if (t.media.pluginType === 'native') {
				if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

					mejs.MediaFeatures.requestFullScreen(t.container[0]);
					//return;

					if (t.isInIframe) {
						// sometimes exiting from fullscreen doesn't work
						// notably in Chrome <iframe>. Fixed in version 17
						setTimeout(function checkFullscreen() {

							if (t.isNativeFullScreen) {
								var zoomMultiplier = window["devicePixelRatio"] || 1,
								// Use a percent error margin since devicePixelRatio is a float and not exact.
									percentErrorMargin = 0.002, // 0.2%
									windowWidth = zoomMultiplier * $(window).width(),
									screenWidth = screen.width,
									// ** 13twelve
									// Screen width is sort of useless: http://www.quirksmode.org/blog/archives/2013/11/screenwidth_is.html
									// My rMBP ignores devicePixelRatio when returning the values, so fullscreen would always fail the "suddenly not fullscreen" test
									// Theory: the gap between reported values should give us an indication of browser behavior with screen.width and devicePixelRatio
									zoomedWindowWidth = zoomMultiplier * windowWidth;
									
								if (Math.abs(screenWidth-windowWidth) > Math.abs(screenWidth-zoomedWindowWidth)) {
									// screen.width is likely true pixels, not CSS pixels, so we need to use the zoomed window width for comparison
									windowWidth = zoomedWindowWidth;
								}
								// ** / 13twelve

								var absDiff = Math.abs(screenWidth - windowWidth),
									marginError = screenWidth * percentErrorMargin;

								// check if the video is suddenly not really fullscreen
								if (absDiff > marginError) {
									// manually exit
									t.exitFullScreen();
								} else {
									// test again
									setTimeout(checkFullscreen, 500);
								}
							}
							
						}, 1000);
					}

				} else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
					t.media.webkitEnterFullscreen();
					return;
				}
			}

			// check for iframe launch
			if (t.isInIframe) {
				var url = t.options.newWindowCallback(this);


				if (url !== '') {

					// launch immediately
					if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
						t.pause();
						window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
						return;
					} else {
						setTimeout(function() {
							if (!t.isNativeFullScreen) {
								t.pause();
								window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
							}
						}, 250);
					}
				}

			}

			// full window code



			// make full size
			t.container
				.addClass('mejs-container-fullscreen')
				.width('100%')
				.height('100%');
				//.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});

			// Only needed for safari 5.1 native full screen, can cause display issues elsewhere
			// Actually, it seems to be needed for IE8, too
			//if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
				t.containerSizeTimeout = setTimeout(function() {
					t.container.css({width: '100%', height: '100%'});
					t.setControlsSize();
				}, 500);
			//}

			if (t.media.pluginType === 'native') {
				t.$media
					.width('100%')
					.height('100%');
			} else {
				t.container.find('.mejs-shim')
					.width('100%')
					.height('100%');

				//if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
					t.media.setVideoSize($(window).width(),$(window).height());
				//}
			}

			t.layers.children('div')
				.width('100%')
				.height('100%');

			if (t.fullscreenBtn) {
				t.fullscreenBtn
					.removeClass('mejs-fullscreen')
					.addClass('mejs-unfullscreen');
			}

			t.setControlsSize();
			t.isFullScreen = true;

			t.container.find('.mejs-captions-text').css('font-size', screen.width / t.width * 1.00 * 100 + '%');
			t.container.find('.mejs-captions-position').css('bottom', '45px');

			t.container.trigger('enteredfullscreen');
		},

		exitFullScreen: function() {

			var t = this;

            // Prevent container from attempting to stretch a second time
            clearTimeout(t.containerSizeTimeout);

			// firefox can't adjust plugins
			if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {
				t.media.setFullscreen(false);
				//player.isFullScreen = false;
				return;
			}

			// come outo of native fullscreen
			if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
				mejs.MediaFeatures.cancelFullScreen();
			}

			// restore scroll bars to document
            $(document.documentElement).removeClass('mejs-fullscreen');

			t.container
				.removeClass('mejs-container-fullscreen')
				.width(t.normalWidth)
				.height(t.normalHeight);

			if (t.media.pluginType === 'native') {
				t.$media
					.width(t.normalWidth)
					.height(t.normalHeight);
			} else {
				t.container.find('.mejs-shim')
					.width(t.normalWidth)
					.height(t.normalHeight);

				t.media.setVideoSize(t.normalWidth, t.normalHeight);
			}

			t.layers.children('div')
				.width(t.normalWidth)
				.height(t.normalHeight);

			t.fullscreenBtn
				.removeClass('mejs-unfullscreen')
				.addClass('mejs-fullscreen');

			t.setControlsSize();
			t.isFullScreen = false;

			t.container.find('.mejs-captions-text').css('font-size','');
			t.container.find('.mejs-captions-position').css('bottom', '');

			t.container.trigger('exitedfullscreen');
		}
	});

})(mejs.$);

(function($) {

	// Speed
	$.extend(mejs.MepDefaults, {

		// We also support to pass object like this:
		// [{name: 'Slow', value: '0.75'}, {name: 'Normal', value: '1.00'}, ...]
		speeds: ['2.00', '1.50', '1.25', '1.00', '0.75'],

		defaultSpeed: '1.00',
		
		speedChar: 'x'

	});

	$.extend(MediaElementPlayer.prototype, {

		buildspeed: function(player, controls, layers, media) {
			var t = this;

			if (t.media.pluginType == 'native') {
				var 
					speedButton = null,
					speedSelector = null,
					playbackSpeed = null,
					inputId = null;

				var speeds = [];
				var defaultInArray = false;
				for (var i=0, len=t.options.speeds.length; i < len; i++) {
					var s = t.options.speeds[i];
					if (typeof(s) === 'string'){
						speeds.push({
							name: s + t.options.speedChar,
							value: s
						});
						if(s === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
					else {
						speeds.push(s);
						if(s.value === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
				}

				if (!defaultInArray) {
					speeds.push({
						name: t.options.defaultSpeed + t.options.speedChar,
						value: t.options.defaultSpeed
					});
				}

				speeds.sort(function(a, b) {
					return parseFloat(b.value) - parseFloat(a.value);
				});

				var getSpeedNameFromValue = function(value) {
					for(i=0,len=speeds.length; i <len; i++) {
						if (speeds[i].value === value) {
							return speeds[i].name;
						}
					}
				};

				var html = '<div class="mejs-button mejs-speed-button">' +
							'<button type="button">' + getSpeedNameFromValue(t.options.defaultSpeed) + '</button>' +
							'<div class="mejs-speed-selector">' +
							'<ul>';

				for (i = 0, il = speeds.length; i<il; i++) {
					inputId = t.id + '-speed-' + speeds[i].value;
					html += '<li>' + 
								'<input type="radio" name="speed" ' + 
											'value="' + speeds[i].value + '" ' +
											'id="' + inputId + '" ' +
											(speeds[i].value === t.options.defaultSpeed ? ' checked' : '') +
											' />' +
								'<label for="' + inputId + '" ' +
											(speeds[i].value === t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +
											'>' + speeds[i].name + '</label>' +
							'</li>';
				}
				html += '</ul></div></div>';

				speedButton = $(html).appendTo(controls);
				speedSelector = speedButton.find('.mejs-speed-selector');

				playbackSpeed = t.options.defaultSpeed;

				media.addEventListener('loadedmetadata', function(e) {
					if (playbackSpeed) {
						media.playbackRate = parseFloat(playbackSpeed);
					}
				}, true);

				speedSelector
					.on('click', 'input[type="radio"]', function() {
						var newSpeed = $(this).attr('value');
						playbackSpeed = newSpeed;
						media.playbackRate = parseFloat(newSpeed);
						speedButton.find('button').html(getSpeedNameFromValue(newSpeed));
						speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
						speedButton.find('input[type="radio"]:checked').next().addClass('mejs-speed-selected');
					});
				speedButton
					.one( 'mouseenter focusin', function() {
						speedSelector
							.height(
								speedButton.find('.mejs-speed-selector ul').outerHeight(true) +
								speedButton.find('.mejs-speed-translations').outerHeight(true))
							.css('top', (-1 * speedSelector.height()) + 'px');
					});
			}
		}
	});

})(mejs.$);

(function($) {

	// add extra default options
	$.extend(mejs.MepDefaults, {
		// this will automatically turn on a <track>
		startLanguage: '',

		tracksText: mejs.i18n.t('Captions/Subtitles'),

		// By default, no WAI-ARIA live region - don't make a
		// screen reader speak captions over an audio track.
		tracksAriaLive: false,

		// option to remove the [cc] button when no <track kind="subtitles"> are present
		hideCaptionsButtonWhenEmpty: true,

		// If true and we only have one track, change captions to popup
		toggleCaptionsButtonWhenOnlyOne: false,

		// #id or .class
		slidesSelector: ''
	});

	$.extend(MediaElementPlayer.prototype, {

		hasChapters: false,

		cleartracks: function(player, controls, layers, media){
			if(player) {
				if(player.captions) player.captions.remove();
				if(player.chapters) player.chapters.remove();
				if(player.captionsText) player.captionsText.remove();
				if(player.captionsButton) player.captionsButton.remove();
			}
		},
		buildtracks: function(player, controls, layers, media) {
			if (player.tracks.length === 0)
				return;

			var t = this,
				attr = t.options.tracksAriaLive ?
					'role="log" aria-live="assertive" aria-atomic="false"' : '',
				i;

			if (t.domNode.textTracks) { // if browser will do native captions, prefer mejs captions, loop through tracks and hide
				for (i = t.domNode.textTracks.length - 1; i >= 0; i--) {
					t.domNode.textTracks[i].mode = "hidden";
				}
			}
			t.cleartracks(player, controls, layers, media);
			player.chapters =
					$('<div class="mejs-chapters mejs-layer"></div>')
						.prependTo(layers).hide();
			player.captions =
					$('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' +
					attr + '><span class="mejs-captions-text"></span></div></div>')
						.prependTo(layers).hide();
			player.captionsText = player.captions.find('.mejs-captions-text');
			player.captionsButton =
					$('<div class="mejs-button mejs-captions-button">'+
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.tracksText + '" aria-label="' + t.options.tracksText + '"></button>'+
						'<div class="mejs-captions-selector">'+
							'<ul>'+
								'<li>'+
									'<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
									'<label for="' + player.id + '_captions_none">' + mejs.i18n.t('None') +'</label>'+
								'</li>'	+
							'</ul>'+
						'</div>'+
					'</div>')
						.appendTo(controls);


			var subtitleCount = 0;
			for (i=0; i<player.tracks.length; i++) {
				if (player.tracks[i].kind == 'subtitles') {
					subtitleCount++;
				}
			}

			// if only one language then just make the button a toggle
			if (t.options.toggleCaptionsButtonWhenOnlyOne && subtitleCount == 1){
				// click
				player.captionsButton.on('click',function() {
					if (player.selectedTrack === null) {
						lang = player.tracks[0].srclang;
					} else {
						lang = 'none';
					}
					player.setTrack(lang);
				});
			} else {
				// hover or keyboard focus
				player.captionsButton.on( 'mouseenter focusin', function() {
					$(this).find('.mejs-captions-selector').css('visibility','visible');
				})

				// handle clicks to the language radio buttons
				.on('click','input[type=radio]',function() {
					lang = this.value;
					player.setTrack(lang);
				});

				player.captionsButton.on( 'mouseleave focusout', function() {
					$(this).find(".mejs-captions-selector").css("visibility","hidden");
				});

			}

			if (!player.options.alwaysShowControls) {
				// move with controls
				player.container
					.bind('controlsshown', function () {
						// push captions above controls
						player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

					})
					.bind('controlshidden', function () {
						if (!media.paused) {
							// move back to normal place
							player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
						}
					});
			} else {
				player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
			}

			player.trackToLoad = -1;
			player.selectedTrack = null;
			player.isLoadingTrack = false;

			// add to list
			for (i=0; i<player.tracks.length; i++) {
				if (player.tracks[i].kind == 'subtitles') {
					player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
				}
			}

			// start loading tracks
			player.loadNextTrack();

			media.addEventListener('timeupdate',function(e) {
				player.displayCaptions();
			}, false);

			if (player.options.slidesSelector !== '') {
				player.slidesContainer = $(player.options.slidesSelector);

				media.addEventListener('timeupdate',function(e) {
					player.displaySlides();
				}, false);

			}

			media.addEventListener('loadedmetadata', function(e) {
				player.displayChapters();
			}, false);

			player.container.hover(
				function () {
					// chapters
					if (player.hasChapters) {
						player.chapters.css('visibility','visible');
						player.chapters.fadeIn(200).height(player.chapters.find('.mejs-chapter').outerHeight());
					}
				},
				function () {
					if (player.hasChapters && !media.paused) {
						player.chapters.fadeOut(200, function() {
							$(this).css('visibility','hidden');
							$(this).css('display','block');
						});
					}
				});

			t.container.on('controlsresize', function() {
				t.adjustLanguageBox();
			});
			
			// check for autoplay
			if (player.node.getAttribute('autoplay') !== null) {
				player.chapters.css('visibility','hidden');
			}
		},

		setTrack: function(lang){

			var t = this,
				i;

			if (lang == 'none') {
				t.selectedTrack = null;
				t.captionsButton.removeClass('mejs-captions-enabled');
			} else {
				for (i=0; i<t.tracks.length; i++) {
					if (t.tracks[i].srclang == lang) {
						if (t.selectedTrack === null)
							t.captionsButton.addClass('mejs-captions-enabled');
						t.selectedTrack = t.tracks[i];
						t.captions.attr('lang', t.selectedTrack.srclang);
						t.displayCaptions();
						break;
					}
				}
			}
		},

		loadNextTrack: function() {
			var t = this;

			t.trackToLoad++;
			if (t.trackToLoad < t.tracks.length) {
				t.isLoadingTrack = true;
				t.loadTrack(t.trackToLoad);
			} else {
				// add done?
				t.isLoadingTrack = false;

				t.checkForTracks();
			}
		},

		loadTrack: function(index){
			var
				t = this,
				track = t.tracks[index],
				after = function() {

					track.isLoaded = true;

					t.enableTrackButton(track.srclang, track.label);

					t.loadNextTrack();

				};


			$.ajax({
				url: track.src,
				dataType: "text",
				success: function(d) {

					// parse the loaded file
					if (typeof d == "string" && (/<tt\s+xml/ig).exec(d)) {
						track.entries = mejs.TrackFormatParser.dfxp.parse(d);
					} else {
						track.entries = mejs.TrackFormatParser.webvtt.parse(d);
					}

					after();

					if (track.kind == 'chapters') {
						t.media.addEventListener('play', function(e) {
							if (t.media.duration > 0) {
								t.displayChapters(track);
							}
						}, false);
					}

					if (track.kind == 'slides') {
						t.setupSlides(track);
					}
				},
				error: function() {
					t.removeTrackButton(track.srclang);
					t.loadNextTrack();
				}
			});
		},

		enableTrackButton: function(lang, label) {
			var t = this;

			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}

			t.captionsButton
				.find('input[value=' + lang + ']')
					.prop('disabled',false)
				.siblings('label')
					.html( label );

			// auto select
			if (t.options.startLanguage == lang) {
				$('#' + t.id + '_captions_' + lang).prop('checked', true).trigger('click');
			}

			t.adjustLanguageBox();
		},
		
		removeTrackButton: function(lang) {
			var t = this;
			
			t.captionsButton.find('input[value=' + lang + ']').closest('li').remove();
			
			t.adjustLanguageBox();
		},

		addTrackButton: function(lang, label) {
			var t = this;
			if (label === '') {
				label = mejs.language.codes[lang] || lang;
			}

			t.captionsButton.find('ul').append(
				$('<li>'+
					'<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
					'<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>'+
				'</li>')
			);

			t.adjustLanguageBox();

			// remove this from the dropdownlist (if it exists)
			t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
		},

		adjustLanguageBox:function() {
			var t = this;
			// adjust the size of the outer box
			t.captionsButton.find('.mejs-captions-selector').height(
				t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
				t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
			);
		},

		checkForTracks: function() {
			var
				t = this,
				hasSubtitles = false;

			// check if any subtitles
			if (t.options.hideCaptionsButtonWhenEmpty) {
				for (i=0; i<t.tracks.length; i++) {
					if (t.tracks[i].kind == 'subtitles' && t.tracks[i].isLoaded) {
						hasSubtitles = true;
						break;
					}
				}

				if (!hasSubtitles) {
					t.captionsButton.hide();
					t.setControlsSize();
				}
			}
		},

		displayCaptions: function() {

			if (typeof this.tracks == 'undefined')
				return;

			var
				t = this,
				i,
				track = t.selectedTrack;

			if (track !== null && track.isLoaded) {
				for (i=0; i<track.entries.times.length; i++) {
					if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop) {
						// Set the line before the timecode as a class so the cue can be targeted if needed
						t.captionsText.html(track.entries.text[i]).attr('class', 'mejs-captions-text ' + (track.entries.times[i].identifier || ''));
						t.captions.show().height(0);
						return; // exit out if one is visible;
					}
				}
				t.captions.hide();
			} else {
				t.captions.hide();
			}
		},

		setupSlides: function(track) {
			var t = this;

			t.slides = track;
			t.slides.entries.imgs = [t.slides.entries.text.length];
			t.showSlide(0);

		},

		showSlide: function(index) {
			if (typeof this.tracks == 'undefined' || typeof this.slidesContainer == 'undefined') {
				return;
			}

			var t = this,
				url = t.slides.entries.text[index],
				img = t.slides.entries.imgs[index];

			if (typeof img == 'undefined' || typeof img.fadeIn == 'undefined') {

				t.slides.entries.imgs[index] = img = $('<img src="' + url + '">')
						.on('load', function() {
							img.appendTo(t.slidesContainer)
								.hide()
								.fadeIn()
								.siblings(':visible')
									.fadeOut();

						});

			} else {

				if (!img.is(':visible') && !img.is(':animated')) {

					//

					img.fadeIn()
						.siblings(':visible')
							.fadeOut();
				}
			}

		},

		displaySlides: function() {

			if (typeof this.slides == 'undefined')
				return;

			var
				t = this,
				slides = t.slides,
				i;

			for (i=0; i<slides.entries.times.length; i++) {
				if (t.media.currentTime >= slides.entries.times[i].start && t.media.currentTime <= slides.entries.times[i].stop){

					t.showSlide(i);

					return; // exit out if one is visible;
				}
			}
		},

		displayChapters: function() {
			var
				t = this,
				i;

			for (i=0; i<t.tracks.length; i++) {
				if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
					t.drawChapters(t.tracks[i]);
					t.hasChapters = true;
					break;
				}
			}
		},

		drawChapters: function(chapters) {
			var
				t = this,
				i,
				dur,
				//width,
				//left,
				percent = 0,
				usedPercent = 0;

			t.chapters.empty();

			for (i=0; i<chapters.entries.times.length; i++) {
				dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
				percent = Math.floor(dur / t.media.duration * 100);
				if (percent + usedPercent > 100 || // too large
					i == chapters.entries.times.length-1 && percent + usedPercent < 100) // not going to fill it in
					{
					percent = 100 - usedPercent;
				}
				//width = Math.floor(t.width * dur / t.media.duration);
				//left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
				//if (left + width > t.width) {
				//	width = t.width - left;
				//}

				t.chapters.append( $(
					'<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' +
						'<div class="mejs-chapter-block' + ((i==chapters.entries.times.length-1) ? ' mejs-chapter-block-last' : '') + '">' +
							'<span class="ch-title">' + chapters.entries.text[i] + '</span>' +
							'<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start, t.options) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop, t.options) + '</span>' +
						'</div>' +
					'</div>'));
				usedPercent += percent;
			}

			t.chapters.find('div.mejs-chapter').click(function() {
				t.media.setCurrentTime( parseFloat( $(this).attr('rel') ) );
				if (t.media.paused) {
					t.media.play();
				}
			});

			t.chapters.show();
		}
	});



	mejs.language = {
		codes:  {
			af:'Afrikaans',
			sq:'Albanian',
			ar:'Arabic',
			be:'Belarusian',
			bg:'Bulgarian',
			ca:'Catalan',
			zh:'Chinese',
			'zh-cn':'Chinese Simplified',
			'zh-tw':'Chinese Traditional',
			hr:'Croatian',
			cs:'Czech',
			da:'Danish',
			nl:'Dutch',
			en:'English',
			et:'Estonian',
			fl:'Filipino',
			fi:'Finnish',
			fr:'French',
			gl:'Galician',
			de:'German',
			el:'Greek',
			ht:'Haitian Creole',
			iw:'Hebrew',
			hi:'Hindi',
			hu:'Hungarian',
			is:'Icelandic',
			id:'Indonesian',
			ga:'Irish',
			it:'Italian',
			ja:'Japanese',
			ko:'Korean',
			lv:'Latvian',
			lt:'Lithuanian',
			mk:'Macedonian',
			ms:'Malay',
			mt:'Maltese',
			no:'Norwegian',
			fa:'Persian',
			pl:'Polish',
			pt:'Portuguese',
			// 'pt-pt':'Portuguese (Portugal)',
			ro:'Romanian',
			ru:'Russian',
			sr:'Serbian',
			sk:'Slovak',
			sl:'Slovenian',
			es:'Spanish',
			sw:'Swahili',
			sv:'Swedish',
			tl:'Tagalog',
			th:'Thai',
			tr:'Turkish',
			uk:'Ukrainian',
			vi:'Vietnamese',
			cy:'Welsh',
			yi:'Yiddish'
		}
	};

	/*
	Parses WebVTT format which should be formatted as
	================================
	WEBVTT

	1
	00:00:01,1 --> 00:00:05,000
	A line of text

	2
	00:01:15,1 --> 00:02:05,000
	A second line of text

	===============================

	Adapted from: http://www.delphiki.com/html5/playr
	*/
	mejs.TrackFormatParser = {
		webvtt: {
			pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

			parse: function(trackText) {
				var
					i = 0,
					lines = mejs.TrackFormatParser.split2(trackText, /\r?\n/),
					entries = {text:[], times:[]},
					timecode,
					text,
					identifier;
				for(; i<lines.length; i++) {
					timecode = this.pattern_timecode.exec(lines[i]);

					if (timecode && i<lines.length) {
						if ((i - 1) >= 0 && lines[i - 1] !== '') {
							identifier = lines[i - 1];
						}
						i++;
						// grab all the (possibly multi-line) text that follows
						text = lines[i];
						i++;
						while(lines[i] !== '' && i<lines.length){
							text = text + '\n' + lines[i];
							i++;
						}
						text = $.trim(text).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
						// Text is in a different array so I can use .join
						entries.text.push(text);
						entries.times.push(
						{
							identifier: identifier,
							start: (mejs.Utility.convertSMPTEtoSeconds(timecode[1]) === 0) ? 0.200 : mejs.Utility.convertSMPTEtoSeconds(timecode[1]),
							stop: mejs.Utility.convertSMPTEtoSeconds(timecode[3]),
							settings: timecode[5]
						});
					}
					identifier = '';
				}
				return entries;
			}
		},
		// Thanks to Justin Capella: https://github.com/johndyer/mediaelement/pull/420
		dfxp: {
			parse: function(trackText) {
				trackText = $(trackText).filter("tt");
				var
					i = 0,
					container = trackText.children("div").eq(0),
					lines = container.find("p"),
					styleNode = trackText.find("#" + container.attr("style")),
					styles,
					text,
					entries = {text:[], times:[]};


				if (styleNode.length) {
					var attributes = styleNode.removeAttr("id").get(0).attributes;
					if (attributes.length) {
						styles = {};
						for (i = 0; i < attributes.length; i++) {
							styles[attributes[i].name.split(":")[1]] = attributes[i].value;
						}
					}
				}

				for(i = 0; i<lines.length; i++) {
					var style;
					var _temp_times = {
						start: null,
						stop: null,
						style: null
					};
					if (lines.eq(i).attr("begin")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("begin"));
					if (!_temp_times.start && lines.eq(i-1).attr("end")) _temp_times.start = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i-1).attr("end"));
					if (lines.eq(i).attr("end")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i).attr("end"));
					if (!_temp_times.stop && lines.eq(i+1).attr("begin")) _temp_times.stop = mejs.Utility.convertSMPTEtoSeconds(lines.eq(i+1).attr("begin"));
					if (styles) {
						style = "";
						for (var _style in styles) {
							style += _style + ":" + styles[_style] + ";";
						}
					}
					if (style) _temp_times.style = style;
					if (_temp_times.start === 0) _temp_times.start = 0.200;
					entries.times.push(_temp_times);
					text = $.trim(lines.eq(i).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
					entries.text.push(text);
					if (entries.times.start === 0) entries.times.start = 2;
				}
				return entries;
			}
		},
		split2: function (text, regex) {
			// normal version for compliant browsers
			// see below for IE fix
			return text.split(regex);
		}
	};

	// test for browsers with bad String.split method.
	if ('x\n\ny'.split(/\n/gi).length != 3) {
		// add super slow IE8 and below version
		mejs.TrackFormatParser.split2 = function(text, regex) {
			var
				parts = [],
				chunk = '',
				i;

			for (i=0; i<text.length; i++) {
				chunk += text.substring(i,i+1);
				if (regex.test(chunk)) {
					parts.push(chunk.replace(regex, ''));
					chunk = '';
				}
			}
			parts.push(chunk);
			return parts;
		};
	}

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function($) {

$.extend(mejs.MepDefaults,
	{ 'contextMenuItems': [
		// demo of a fullscreen option
		{ 
			render: function(player) {
				
				// check for fullscreen plugin
				if (typeof player.enterFullScreen == 'undefined')
					return null;
			
				if (player.isFullScreen) {
					return mejs.i18n.t('Turn off Fullscreen');
				} else {
					return mejs.i18n.t('Go Fullscreen');
				}
			},
			click: function(player) {
				if (player.isFullScreen) {
					player.exitFullScreen();
				} else {
					player.enterFullScreen();
				}
			}
		}
		,
		// demo of a mute/unmute button
		{ 
			render: function(player) {
				if (player.media.muted) {
					return mejs.i18n.t('Unmute');
				} else {
					return mejs.i18n.t('Mute');
				}
			},
			click: function(player) {
				if (player.media.muted) {
					player.setMuted(false);
				} else {
					player.setMuted(true);
				}
			}
		},
		// separator
		{
			isSeparator: true
		}
		,
		// demo of simple download video
		{ 
			render: function(player) {
				return mejs.i18n.t('Download Video');
			},
			click: function(player) {
				window.location.href = player.media.currentSrc;
			}
		}	
	]}
);


	$.extend(MediaElementPlayer.prototype, {
		buildcontextmenu: function(player, controls, layers, media) {
			
			// create context menu
			player.contextMenu = $('<div class="mejs-contextmenu"></div>')
								.appendTo($('body'))
								.hide();
			
			// create events for showing context menu
			player.container.bind('contextmenu', function(e) {
				if (player.isContextMenuEnabled) {
					e.preventDefault();
					player.renderContextMenu(e.clientX-1, e.clientY-1);
					return false;
				}
			});
			player.container.bind('click', function() {
				player.contextMenu.hide();
			});	
			player.contextMenu.bind('mouseleave', function() {

				//
				player.startContextMenuTimer();
				
			});		
		},

		cleancontextmenu: function(player) {
			player.contextMenu.remove();
		},
		
		isContextMenuEnabled: true,
		enableContextMenu: function() {
			this.isContextMenuEnabled = true;
		},
		disableContextMenu: function() {
			this.isContextMenuEnabled = false;
		},
		
		contextMenuTimeout: null,
		startContextMenuTimer: function() {
			//
			
			var t = this;
			
			t.killContextMenuTimer();
			
			t.contextMenuTimer = setTimeout(function() {
				t.hideContextMenu();
				t.killContextMenuTimer();
			}, 750);
		},
		killContextMenuTimer: function() {
			var timer = this.contextMenuTimer;
			
			//
			
			if (timer != null) {				
				clearTimeout(timer);
				delete timer;
				timer = null;
			}
		},		
		
		hideContextMenu: function() {
			this.contextMenu.hide();
		},
		
		renderContextMenu: function(x,y) {
			
			// alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
			var t = this,
				html = '',
				items = t.options.contextMenuItems;
			
			for (var i=0, il=items.length; i<il; i++) {
				
				if (items[i].isSeparator) {
					html += '<div class="mejs-contextmenu-separator"></div>';
				} else {
				
					var rendered = items[i].render(t);
				
					// render can return null if the item doesn't need to be used at the moment
					if (rendered != null) {
						html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random()*1000000) + '">' + rendered + '</div>';
					}
				}
			}
			
			// position and show the context menu
			t.contextMenu
				.empty()
				.append($(html))
				.css({top:y, left:x})
				.show();
				
			// bind events
			t.contextMenu.find('.mejs-contextmenu-item').each(function() {
							
				// which one is this?
				var $dom = $(this),
					itemIndex = parseInt( $dom.data('itemindex'), 10 ),
					item = t.options.contextMenuItems[itemIndex];
				
				// bind extra functionality?
				if (typeof item.show != 'undefined')
					item.show( $dom , t);
				
				// bind click action
				$dom.click(function() {			
					// perform click action
					if (typeof item.click != 'undefined')
						item.click(t);
					
					// close
					t.contextMenu.hide();				
				});				
			});	
			
			// stop the controls from hiding
			setTimeout(function() {
				t.killControlsTimer('rev3');	
			}, 100);
						
		}
	});
	
})(mejs.$);
(function($) {
	// skip back button

	$.extend(mejs.MepDefaults, {
		skipBackInterval: 30,
		// %1 will be replaced with skipBackInterval in this string
		skipBackText: mejs.i18n.t('Skip back %1 seconds')
	});

	$.extend(MediaElementPlayer.prototype, {
		buildskipback: function(player, controls, layers, media) {
			var
				t = this,
				// Replace %1 with skip back interval
				backText = t.options.skipBackText.replace('%1', t.options.skipBackInterval),
				// create the loop button
				loop =
				$('<div class="mejs-button mejs-skip-back-button">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + backText + '" aria-label="' + backText + '">' + t.options.skipBackInterval + '</button>' +
				'</div>')
				// append it to the toolbar
				.appendTo(controls)
				// add a click toggle event
				.click(function() {
					media.setCurrentTime(Math.max(media.currentTime - t.options.skipBackInterval, 0));
					$(this).find('button').blur();
				});
		}
	});

})(mejs.$);

/**
 * Postroll plugin
 */
(function($) {

	$.extend(mejs.MepDefaults, {
		postrollCloseText: mejs.i18n.t('Close')
	});

	// Postroll
	$.extend(MediaElementPlayer.prototype, {
		buildpostroll: function(player, controls, layers, media) {
			var
				t = this,
				postrollLink = t.container.find('link[rel="postroll"]').attr('href');

			if (typeof postrollLink !== 'undefined') {
				player.postroll =
					$('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + t.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(layers).hide();

				t.media.addEventListener('ended', function (e) {
					$.ajax({
						dataType: 'html',
						url: postrollLink,
						success: function (data, textStatus) {
							layers.find('.mejs-postroll-layer-content').html(data);
						}
					});
					player.postroll.show();
				}, false);
			}
		}
	});

})(mejs.$);
define("mediaelement", function(){});

/*
* Google Analytics Plugin
* Requires
*
*/

(function($) {

$.extend(mejs.MepDefaults, {
	googleAnalyticsTitle: '',
	googleAnalyticsCategory: 'Videos',
	googleAnalyticsEventPlay: 'Play',
	googleAnalyticsEventPause: 'Pause',
	googleAnalyticsEventEnded: 'Ended',
	googleAnalyticsEventTime: 'Time'
});


$.extend(MediaElementPlayer.prototype, {
	buildgoogleanalytics: function(player, controls, layers, media) {

		media.addEventListener('play', function() {
			if (typeof _gaq != 'undefined') {
				_gaq.push(['_trackEvent',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventPlay,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				]);
			}
		}, false);

		media.addEventListener('pause', function() {
			if (typeof _gaq != 'undefined') {
				_gaq.push(['_trackEvent',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventPause,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				]);
			}
		}, false);

		media.addEventListener('ended', function() {
			if (typeof _gaq != 'undefined') {
				_gaq.push(['_trackEvent',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventEnded,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				]);
			}
		}, false);

		/*
		media.addEventListener('timeupdate', function() {
			if (typeof _gaq != 'undefined') {
				_gaq.push(['_trackEvent',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventEnded, 
					player.options.googleAnalyticsTime,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle,
					player.currentTime
				]);
			}
		}, true);
		*/
	}
});

})(mejs.$);

define("mep-feature-googleanalytics", function(){});

/*
* analytics.js Google Analytics Plugin
* Requires JQuery
*/

(function($) {

$.extend(mejs.MepDefaults, {
	googleAnalyticsTitle: '',
	googleAnalyticsCategory: 'Videos',
	googleAnalyticsEventPlay: 'Play',
	googleAnalyticsEventPause: 'Pause',
	googleAnalyticsEventEnded: 'Ended',
	googleAnalyticsEventTime: 'Time'
});


$.extend(MediaElementPlayer.prototype, {
	builduniversalgoogleanalytics: function(player, controls, layers, media) {

		media.addEventListener('play', function() {
			if (typeof ga != 'undefined') {
				ga('send', 'event',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventPlay,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				);
			}
		}, false);

		media.addEventListener('pause', function() {
			if (typeof ga != 'undefined') {
				ga('send', 'event',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventPause,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				);
			}
		}, false);

		media.addEventListener('ended', function() {
			if (typeof ga != 'undefined') {
				ga('send', 'event',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventEnded,
					(player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle
				);
			}
		}, false);

		/*
		media.addEventListener('timeupdate', function() {
			if (typeof ga != 'undefined') {
				ga('send', 'event',
					player.options.googleAnalyticsCategory,
					player.options.googleAnalyticsEventEnded, 
					player.options.googleAnalyticsTime,
				  (player.options.googleAnalyticsTitle === '') ? player.media.currentSrc : player.options.googleAnalyticsTitle,
					player.currentTime
				);
			}
		}, true);
		*/
	}
});

})(mejs.$);

define("mep-feature-universalgoogleanalytics", function(){});

/* global define */
define('wildcard-patterns-video',[
  'jquery',
  'mockup-patterns-base',
  'mediaelement',
  'mep-feature-googleanalytics',
  'mep-feature-universalgoogleanalytics'
], function($, Base) {
  

  var Media = Base.extend({
    name: 'media',
    trigger: '.pat-media',
    defaults: {
    },
    init: function() {
      var self = this;
      self.$el.mediaelementplayer({
        pluginPath: '++resource++wildcard-media/components/mediaelement/build/',
        features: ['playpause','current','progress','duration','tracks','volume','fullscreen',
                   'googleanalytics', 'universalgoogleanalytics']
      });
    }
  });

  return Media;

});

/* global require */

if(window.jQuery){
  define('jquery', [],function(){
    return window.jQuery;
  });
}


require([
  'jquery',
  'wildcard-patterns-video'
  ], function($){
  

  $(document).ready(function(){

    $('span.wcvideo a').each(function(){
      var $a = $(this);
      var $span = $a.parents('span.wcvideo');
      var width, height;
      if($span.hasClass('video-large')){
        width = 720;
        height = 480;
      }else if($span.hasClass('video-small')){
        width = 320;
        height = 240;
      }
      $.ajax({
        url: $a.attr('href') + '/@@wildcard_video_macro',
        success: function(data){
          var $video = $(data);
          if(width && height){
            $video.find('[width]').attr('width', width);
            $video.find('[height]').attr('height', height);
          }
          $span.replaceWith($video);
          $video.find('video').mediaelementplayer({
            pluginPath: '++resource++wildcard-media/components/mediaelement/build/',
            features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen',
                       'googleanalytics', 'universalgoogleanalytics']
          });
        }
      });
    });
    $('span.wcaudio a').each(function(){
      var $a = $(this);
      var $span = $a.parents('span.wcaudio');
      var $audio = $('<audio controls="controls" preload="none"' +
        'src="' + $a.attr('href') + '/@@view/++widget++form.widgets.IAudio.audio_file/@@download/file.mp3' + '"></audio>');
      $span.replaceWith($audio);
      $audio.mediaelementplayer({
        features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen',
                   'googleanalytics', 'universalgoogleanalytics']
      });
    });

    var selector = '.template-wildcardvideo #form-widgets-IVideo-upload_video_to_youtube-0';
    var checkFields = function(){
      if($(selector)[0].checked){
        $('#formfield-form-widgets-IVideo-youtube_url').hide();
      }else{
        $('#formfield-form-widgets-IVideo-youtube_url').show();
      }
    };
    if($(selector).change(checkFields).size() > 0){
      checkFields();
    }

  });

});

define("js/bundle.js", function(){});


define("booost-media", function(){});

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */
/*jslint */
/*global require: false, define: false, requirejs: false,
  window: false, clearInterval: false, document: false,
  self: false, setInterval: false */


define('++resource++cloud19.theme/javascripts/domready',[],function () {
    

    var isTop, testDiv, scrollIntervalId,
        isBrowser = typeof window !== "undefined" && window.document,
        isPageLoaded = !isBrowser,
        doc = isBrowser ? document : null,
        readyCalls = [];

    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) {
            callbacks[i](doc);
        }
    }

    function callReady() {
        var callbacks = readyCalls;

        if (isPageLoaded) {
            //Call the DOM ready callbacks
            if (callbacks.length) {
                readyCalls = [];
                runCallbacks(callbacks);
            }
        }
    }

    /**
     * Sets the page as loaded.
     */
    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = true;
            if (scrollIntervalId) {
                clearInterval(scrollIntervalId);
            }

            callReady();
        }
    }

    if (isBrowser) {
        if (document.addEventListener) {
            //Standards. Hooray! Assumption here that if standards based,
            //it knows about DOMContentLoaded.
            document.addEventListener("DOMContentLoaded", pageLoaded, false);
            window.addEventListener("load", pageLoaded, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded);

            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {}

            //DOMContentLoaded approximation that uses a doScroll, as found by
            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,
            //but modified by other contributors, including jdalton
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        pageLoaded();
                    } catch (e) {}
                }, 30);
            }
        }

        //Check if document already complete, and if so, just trigger page load
        //listeners. Latest webkit browsers also use "interactive", and
        //will fire the onDOMContentLoaded before "interactive" but not after
        //entering "interactive" or "complete". More details:
        //http://dev.w3.org/html5/spec/the-end.html#the-end
        //http://stackoverflow.com/questions/3665561/document-readystate-of-interactive-vs-ondomcontentloaded
        //Hmm, this is more complicated on further use, see "firing too early"
        //bug: https://github.com/requirejs/domReady/issues/1
        //so removing the || document.readyState === "interactive" test.
        //There is still a window.onload binding that should get fired if
        //DOMContentLoaded is missed.
        if (document.readyState === "complete") {
            pageLoaded();
        }
    }

    /** START OF PUBLIC API **/

    /**
     * Registers a callback for DOM ready. If DOM is already ready, the
     * callback is called immediately.
     * @param {Function} callback
     */
    function domReady(callback) {
        if (isPageLoaded) {
            callback(doc);
        } else {
            readyCalls.push(callback);
        }
        return domReady;
    }

    domReady.version = '2.0.1';

    /**
     * Loader Plugin API method
     */
    domReady.load = function (name, req, onLoad, config) {
        if (config.isBuild) {
            onLoad(null);
        } else {
            domReady(onLoad);
        }
    };

    /** END OF PUBLIC API **/

    return domReady;
});

/*_____ scripts/pi.helpers.js*/
/* Aura version: 1.8.6 */

function scrollToTop() {
    $('html, body').animate({ scrollTop: $("#pi-all").offset().top }, 2000);
}

/* change img attribute for lazysizes */

jQuery(function($) {
  $('img.lazyload[src]').each(function() {
  var $t = $(this);
  $t.attr({
      'data-src': $t.attr('src'),
    })
    .removeAttr('src');
  });

  $('img.lazyload[srcset]').each(function() {
    var $t = $(this);
    $t.attr({
        'data-srcset': $t.attr('srcset'),
      })
      .removeAttr('srcset');
  });
});

//region getViewportSize
function getViewportSize() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
//endregion

//region old IE rgba backgrounds fix
function fixIE8rgba() {
    var $ = jQuery;

    if (isOldIE() === 8) {
        var selectors = [
                '.pi-tooltip'
            ],
            $elements = $(selectors.join(','));
        $elements.each(function() {
            var $el = $(this),
                bg = $el.css('background'),
                rgba = bg.match(/rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)/),
                hex = rgba ? rgba2hex(rgba[1], rgba[2], rgba[3], rgba[4]) : '#000000';
            if (rgba && hex) {
                $el.css('background', 'filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=' + hex + ', EndColorStr=' + hex + ')')
            }
        });
    }
}
//endregion

//region old IE detection
function isOldIE() {
    var version = navigator.appVersion.match(/MSIE (\d)\.\d*/);
    if (version) {
        return version[1];
    }
    return false;
}
//endregion

//region RGB -> HEX
var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

function rgb2hex(rgb) {
    if (!rgb) {
        rgb = 'rgb(0,0,0)';
    }
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
//endregion

//region RGBA -> HEX
function rgba2hex(r, g, b, a) {
    if (r > 255 || g > 255 || b > 255 || a > 255)
        throw "Invalid color component";
    return (256 + r).toString(16).substr(1) + ((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1);
}
//endregion

function getElementHeight($el) {
    var $ = jQuery,
        h = 0,
        vis = $el.css('visibility'),
        display = $el.css('display');

    if (display == 'none' || display == 'none !important') {
        $el.css({
            visibility: 'hidden',
            display: 'block'
        });
        h = $el.outerHeight();
        $el.css({
            visibility: vis,
            display: display
        });
    } else {
        h = $el.outerHeight();
    }
    return h;
}

//lazyLoading & Portfolio height
function initialresize(isotopeId) {
    if (isotopeId) {
        var height = 0;
        var curHeight = 0;
        $("#" + isotopeId + " .isotope-item").each(function() {
            if ($(this)[0].hasAttribute("style")) {
                if ($(this).attr("style").indexOf("opacity: 0") == -1 && $(this).attr("style").indexOf("display: none") == -1) {
                    curHeight = $(this).outerHeight() + parseInt($(this).css("padding-bottom").replace("px", "")) + parseInt($(this).css("padding-top").replace("px", ""));

                    if ($(this).css("left") == '0px') {
                        height += curHeight;
                    } else {}
                }
            }
        });

        var wrapperDiv = $("#" + isotopeId + " .isotope-item").first().parent();
        wrapperDiv.css("height", height);
    }
}

/*_____ scripts/pi.boundManager.js*/
/* Aura version: 1.8.6 */

var piBounds = {
    lg: 1140,
    md: 992,
    sm: 768,
    xs: 480,
    xs2: 320
};

jQuery(function($) {

    var $w = $(window),
        $d = $(document),
        resizeTMT;

    window.piViewportSize = getViewportSize();
    window.piViewportWidth = window.piViewportSize.width;
    window.piViewportHeight = window.piViewportSize.height;
    window.piCurrentBound = piBounds[0];

    function checkBound() {

        var previousBound = window.piCurrentBound;

        window.piViewportSize = getViewportSize();
        window.piViewportWidth = window.piViewportSize.width;
        window.piViewportHeight = window.piViewportSize.height;

        if (window.piViewportWidth >= piBounds.lg && window.piCurrentBound != 'lg') {
            window.piCurrentBound = 'lg';
        } else if (window.piViewportWidth >= piBounds.md && window.piViewportWidth < piBounds.lg && window.piCurrentBound != 'md') {
            window.piCurrentBound = 'md';
        } else if (window.piViewportWidth >= piBounds.sm && window.piViewportWidth < piBounds.md && window.piCurrentBound != 'sm') {
            window.piCurrentBound = 'sm';
        } else if (window.piViewportWidth >= piBounds.xs && window.piViewportWidth < piBounds.sm && window.piCurrentBound != 'xs') {
            window.piCurrentBound = 'xs';
        } else if (window.piViewportWidth >= piBounds.xs2 && window.piViewportWidth < piBounds.xs && window.piCurrentBound != '2xs') {
            window.piCurrentBound = '2xs';
        } else if (window.piViewportWidth < piBounds.xs2 && window.piCurrentBound != '3xs') {
            window.piCurrentBound = '3xs';
        }
        if (previousBound != window.piCurrentBound) {
            $d.trigger('piBoundChanged');
        }

    }

    $w.resize(function() {
        clearTimeout(resizeTMT);
        resizeTMT = setTimeout(function() {
            checkBound();
        }, 10);
    });

    $w.trigger('resize');


});


/*_____ scripts/pi.imagesLoader.js*/
/* Aura version: 1.8.6 */

function PiImagesLoader($el, callback, delay) {

    var o = {},
        $ = jQuery;

    o.$el = $el ? typeof($el) == 'string' ? jQuery($el) : $el : 0;
    o.$imgs = o.$el.find('img');
    o.imgsQ = o.$imgs.length;
    o.imgsQ_loaded = 0;
    o.delay = delay ? delay : 0;
    o.started = 0;
    o.loaderShown = 0;
    o.$loadingAnimation = 0;
    o.$dots = 0;

    o.s = {
        c: {}
    };
    o.s.dotDistance = 14;
    o.s.dotQuantity = 3;
    o.s.dotAnimationSpeed = 100;
    o.s.c.loading = 'pi-loader';
    o.s.c.dot = 'pi-loader-dot';
    o.s.c.dotActive = 'pi-loader-dot-active';
    o.callback = (callback && (typeof(callback) == 'function')) ? callback : function() {};

    o.addLoadingAnimation = function() {

        o.loaderShown = true;

        var appendHtml = '<span class="' + o.s.c.loading + '"><span><span>';

        for (var i = 0; i < o.s.dotQuantity; i++) {
            appendHtml += '<span class="' + o.s.c.dot + '"></span>';
        }

        appendHtml += '</span></span></span>';

        $(appendHtml).appendTo(o.$el);

        o.$loadingAnimation = o.$el.find('.' + o.s.c.loading);
        o.$dots = o.$loadingAnimation.find('.' + o.s.c.dot);

        o.activeDotNum = 0;

        requestAnimationFrame(o.loadingDotsAnimate, o.$el);

    }

    o.hideLoadingAnimation = function() {
        o.loaderShown = 0;
        o.$dots.each(function() {
            $(this).removeClass(o.s.c.dotActive);
        });
        o.$loadingAnimation.remove();
    }

    o.loadingDotsAnimate = function(time) {

        if (!o.$loadingAnimation) {
            return;
        }
        if (!o.loadingAnimationStartTime) {
            o.loadingAnimationStartTime = time;
        }

        var needToRedraw = (time - o.loadingAnimationStartTime) >= 200 ? 1 : 0;

        if (needToRedraw) {

            o.loadingAnimationStartTime = time;

            var $currentDot = o.$dots.eq(o.activeDotNum),
                $previousDot = $currentDot.prev();

            if (!$previousDot.get(0)) {
                $previousDot = o.$dots.eq(o.s.dotQuantity - 1);
            }

            $currentDot.addClass(o.s.c.dotActive);
            $previousDot.removeClass(o.s.c.dotActive);

            o.activeDotNum++;

            if (o.activeDotNum >= o.s.dotQuantity + 1) {
                o.activeDotNum = 0;
            }
        }
        requestAnimationFrame(o.loadingDotsAnimate);

    }

    o.check_images_states = function() {

        o.$imgs.each(function() {

            var oldImg = new Image(),
                newImg = new Image(),
                imgSrc = $(this).attr('src');

            oldImg.src = imgSrc;

            if (oldImg.complete) {
                o.image_was_loaded();
            } else {

                jQuery(newImg).load(function() {
                    o.image_was_loaded();
                }).error(function() {
                    o.image_was_loaded();
                });

                newImg.src = imgSrc;

            }

        });

        o.addLoadingAnimation();

    }

    o.image_was_loaded = function() {
        o.imgsQ_loaded++;
        o.check_ready_state();
    }

    o.check_ready_state = function() {

        if (o.imgsQ == o.imgsQ_loaded && !o.started) {

            o.started = true;

            setTimeout(function() {
                o.callback();
                if (o.loaderShown) {
                    o.hideLoadingAnimation();
                }
            }, o.delay);

        }

    }

    o.init = function() {
        if (o.imgsQ > 0) {
            o.check_images_states();
        } else {
            o.callback();
        }
    }

    o.init();
}


/*_____ scripts/pi.ddMenu.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    var $w = $(window),
        $mainWrapperWidth = $('#pi-all').width(),
        mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth) / 2,
        classLeftSide = 'pi-submenu-left-side';

    //region Menu DD side fix
    function checkMenus($submenu, initialOffset) {
        var offset = $submenu.offset().left - mainWrapDifference,
            width = $submenu.width();
        if ($mainWrapperWidth - offset < width) {
            $submenu.addClass(classLeftSide);
        } else if ($mainWrapperWidth - initialOffset > width) {
            $submenu.removeClass(classLeftSide);
        }
    }

    $('.pi-submenu').each(function() {

        var $el = $(this),
            initialOffset = $el.offset().left - mainWrapDifference,
            timer;

        $w.on('resize', function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                $mainWrapperWidth = $('#pi-all').width();
                mainWrapDifference = (window.piViewportWidth - $mainWrapperWidth) / 2;
                checkMenus($el, initialOffset);
            }, 200);
        });
        checkMenus($el, initialOffset);

    });
    //endregion

});


/*_____ scripts/pi.init.removeLastElMargin.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Remove Last Header Element Margin
    var $w = $(window),
        $hrs = $('.pi-section-header'),
        clsFloatRight = 'pi-pull-right',
        clsHeaderBlock = 'pi-row-block',
        tmt,
        hrObjects = [];

    $hrs.each(function() {
        var $curHr = $(this),
            $blocks = $curHr.find('.' + clsHeaderBlock).filter('.' + clsFloatRight);
        hrObjects.push({
            $hr: $curHr,
            $blocks: $blocks,
            currentBlock: false
        });
    });

    function checkHeaderBlocks() {
        for (var i = 0; i < hrObjects.length; i++) {

            var $curHr = hrObjects[i],
                $firstVisibleBlock = $curHr.$blocks.not(':hidden').first();

            if ($firstVisibleBlock.length < 1) {
                continue;
            }

            if (!$curHr.currentBlock || ($curHr.currentBlock.get(0) != $firstVisibleBlock.get(0))) {

                if ($curHr.currentBlock) {
                    $curHr.currentBlock.css({
                        marginRight: $curHr.currentBlock.get(0).initialMarginRight + 'px'
                    });
                }

                $curHr.currentBlock = $firstVisibleBlock;
                if (!$curHr.currentBlock.get(0).initialMarginRight) {
                    $curHr.currentBlock.get(0).initialMarginRight = parseInt($firstVisibleBlock.css('margin-right'), 10);
                }

                $firstVisibleBlock.css({
                    marginRight: 0
                });

            }

        }
    }

    $w.resize(function() {

        clearTimeout(tmt);

        tmt = setTimeout(function() {

            checkHeaderBlocks();

        }, 300);

    });

    checkHeaderBlocks();

    //endregion

});




/*_____ scripts/pi.init.sectionHigh.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Section Full Height
    var $w = $(window),
        $sections = $('.pi-section-high, .pi-block-high'),
        resizeTMT;

    $w.resize(function() {
        clearTimeout(resizeTMT);
        resizeTMT = setTimeout(function() {
            setSectionHeight();
        }, 100);
    });

    setSectionHeight();

    function setSectionHeight() {
        $sections.each(function() {
            var $el = $(this);
            $el.height(window.piViewportHeight);
        });
    }

    //endregion

});


/*_____ scripts/pi.fixedHeader.js*/
jQuery(function($) {

    //region Fixed header
    var $w = $(window),
        $b = $('body'),
        classRow = 'pi-section-w',
        сlassFixedRow = 'pi-header-row-fixed',
        сlassFixedRows = 'pi-header-rows-fixed',
        сlassFixed = '',
        classReducible = 'pi-row-reducible',
        classReduced = 'pi-row-reduced',
        $stickyHeader = $('.pi-header-sticky'),
        $reducibleRow = $stickyHeader.find('.' + classReducible),
        rowsQuantity = $stickyHeader.find('.' + classRow).length,
        reduceTreshold = 400,
        stateFixed = 'default',
        stateReduce = 'default',
        headerTopOffset = 0,
        scrollTop = 0;

    if ($stickyHeader.length) {
        init();
        checkHeader();
        setHeaderHeight();
    }

    function init() {

        scrollTop = $w.scrollTop();
        setHeaderTopOffset($stickyHeader.offset().top);

        сlassFixed = rowsQuantity > 1 ? сlassFixedRows : сlassFixedRow;

        $w.scroll(function() {
            scrollTop = $w.scrollTop();
            checkHeader();
        });
        $w.on('resetFixedHeader', resetHeaderAfterIntroRemoval);
    }

    function setHeaderTopOffset(offset) {
        headerTopOffset = offset;
    }

    function resetHeaderAfterIntroRemoval() {
        setHeaderTopOffset(0);
        scrollTop = 0;
        fixHeader();
    }


    function setHeaderHeight() {
        $("#c19-portal-header").css("height", $stickyHeader.height());

        $(window).resize(function() {
            $("#c19-portal-header").css("height", $stickyHeader.height());
        });
    }

    function checkHeader() {
        fixHeader();
        if ($reducibleRow.length) {
            reduceHeader();
        }
    }

    function fixHeader() {
        if (scrollTop >= headerTopOffset) {
            if (stateFixed == 'default') {
                requestAnimationFrame(function() {
                    $b.addClass(сlassFixed);
                });
                stateFixed = 'fixed';
            }
        } else {
            if (stateFixed == 'fixed') {
                requestAnimationFrame(function() {
                    $b.removeClass(сlassFixed);
                });
                stateFixed = 'default';
            }
        }
    }

    function reduceHeader() {
        var scrollTopExcess = scrollTop - headerTopOffset;

        if (scrollTopExcess > reduceTreshold && stateReduce != 'reduced') {
            requestAnimationFrame(function() {
                $reducibleRow.addClass(classReduced);
            });
            stateReduce = 'reduced';
        } else if (scrollTopExcess <= reduceTreshold && stateReduce != 'default') {
            requestAnimationFrame(function() {
                $reducibleRow.removeClass(classReduced);
            });
            stateReduce = 'default';
        }

    }

    //endregion

});

/* Transparent Header */
jQuery(function($) {

  var nav = $(".mosaic-grid .pi-section-transparent");
  var topbar = $("#c19-top-bar .pi-section");

  if(nav.length && !topbar.length){
    nav.css("background", "transparent");
    document.addEventListener('scroll', function(){

      if(window.scrollY > 520){
        nav.css("background", "");
      }

      if(window.scrollY < 520){
        nav.css("background", "transparent");
      }
    });
  }
});


/*
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Mobile menus
    var $d = $(document),
        $w = $(window),
        resizeTmt;

    new MobileMenus();

    function MobileMenus() {

        var mobileMenus = [],
            settings = {
                classMenuItemHasSubmenu: 'pi-has-dropdown',
                classParentRowWrapper: 'pi-header-row-sticky',
                classOpen: 'pi-menu-open',
                classParentRow: 'pi-section-header-w',
                classMenuWrapper: 'pi-section-menu-mobile-w',
                classMenu: 'pi-menu-mobile'
            };

        function init() {

            //remove targetting from regular menu in tablet wide mode.
            $('.' + settings.classMenuItemHasSubmenu).each(function() {
                $(this).find(' > a').on('click', function(e) {
                    if (window.piCurrentBound != 'lg') {
                        e.preventDefault();
                    }
                });
            });

            $('.pi-mobile-menu-toggler').each(function() {
                var $el = $(this);

                if ($el.get(0).piMenuWasInitialized) {
                    return;
                }

                $el.get(0).piMenuWasInitialized = 1;

                var mobileMenu = {
                    $parentRowWrapper: null,
                    $toggler: $el,
                    $wrapper: null,
                    $menu: null,
                    height: null,
                    top: null,
                    state: 0
                };

                mobileMenu.$parentRowWrapper = $(mobileMenu.$toggler.parents('.' + settings.classParentRowWrapper));
                mobileMenu.$wrapper = $(mobileMenu.$toggler.data('target'));
                mobileMenu.$menu = mobileMenu.$wrapper.find('.' + settings.classMenu);
                mobileMenu.$menuElements = mobileMenu.$menu.find('li');

                mobileMenu.height = mobileMenu.$menu.outerHeight();

                mobileMenu.$toggler.click(function() {
                    toggleMenu(mobileMenu);
                });

                mobileMenu.$menuElements.each(function() {
                    var $li = $(this);

                    $li.get(0).$link = $li.find(' > a');
                    $li.get(0).$siblings = $li.siblings();
                    $li.get(0).$list = $li.find(' > ul');

                    if ($li.get(0).$list.length) {
                        $li.get(0).$link.click(function(e) {
                            toggleSubmenu(mobileMenu, $li);
                            e.preventDefault();
                        });
                    } else {
                        if (mobileMenu.$menu.data('onepageMenu') && mobileMenu.$menu.data('onepageMenu') == 'yes') {
                            $li.get(0).$link.click(function() {
                                toggleMenu(mobileMenu);
                            });
                        }
                    }
                });

                $d.bind('piBoundChanged', function() {
                    if (mobileMenu.state && mobileMenu.$toggler.is(':hidden')) {
                        toggleMenu(mobileMenu);
                    }
                });

                mobileMenus.push(mobileMenu);

            });

            $w.resize(function() {
                clearTimeout(resizeTmt);
                resizeTmt = setTimeout(function() {
                    checkMobileSubmenuHeight();
                }, 100);
            });

            checkMobileSubmenuHeight();

        };

        function toggleSubmenu(mobileMenu, $li) {
            if ($li.get(0).$list.hasClass('pi-active')) {
                mobileMenu.height = mobileMenu.height - $li.get(0).listHeight;
                mobileMenu.$wrapper.height(mobileMenu.height);
                $li.get(0).$list.removeClass('pi-active');
                $li.get(0).$list.animate({
                    height: 0
                }, 500, function() {
                    changeParentsListHeight($li, $li.get(0).listHeight, 'take');
                });
            } else {
                mobileMenu.height = mobileMenu.height + $li.get(0).listHeight;
                mobileMenu.$wrapper.height(mobileMenu.height);
                $li.get(0).$list.addClass('pi-active');
                $li.get(0).$list.animate({
                    height: $li.get(0).listHeight
                }, 500, function() {
                    changeParentsListHeight($li, $li.get(0).listHeight, 'add');
                    $(this).height('auto');
                });

                $li.get(0).$siblings.each(function() {
                    if ($(this).find(' > ul.pi-active').length) {
                        toggleSubmenu(mobileMenu, $(this));
                    }
                });

            }
        }

        function changeParentsListHeight($li, h, action) {
            var parentLI = $li.parents('li').length ? $li.parents('li').eq(0) : null;
            if (parentLI && parentLI.get(0).listHeight) {
                if (action == 'add') {
                    parentLI.get(0).listHeight += h;
                } else {
                    parentLI.get(0).listHeight -= h;
                }
                changeParentsListHeight(parentLI, h, action);
            }
        }

        function checkMobileSubmenuHeight() {
            for (var i = 0; i < mobileMenus.length; i++) {
                mobileMenus[i].$menuElements.each(function() {
                    var $li = $(this);
                    if ($li.get(0).$list.length) {
                        var initH = getElementHeight($li.get(0).$list);
                        if (initH != 0) {
                            $li.get(0).listHeight = initH;
                        } else {
                            $li.get(0).$list.height('auto');
                            $li.get(0).listHeight = getElementHeight($li.get(0).$list);
                            $li.get(0).$list.height(initH);
                        }
                    }
                });
            }
        }

        //TODO Wenn close active klassen löschen
        function toggleMenu(m) {
            m.$wrapper.toggleClass(settings.classOpen);
            $(m.$wrapper.selector).css("overflow", "auto");

            if (!m.$wrapper.hasClass(settings.classOpen)) {
                m.$wrapper.height(0);
                $(m.$wrapper.selector).css("visibility", "hidden");

                $("ul.pi-menu-mobile ul").each(function() {
                    $(this).removeClass("pi-active");
                    $(this).css("height", "0");
                });
                /*
                				m.$wrapper.css({
                					overflow: 'none'
                				});
                */
                m.state = 0;
            } else {
                m.$wrapper.height(m.height);
                $(m.$wrapper.selector).css("visibility", "visible");
                /*
                				m.$wrapper.css({
                					overflow: 'visible'
                				});
                */
                m.state = 1;
            }
        }

        init();

        return mobileMenus;
    }

    //endregion

});



/*_____ scripts/pi.columnFix.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Columns fix
    var $w = $(window),
        $galleries = $('.pi-gallery.pi-column-fix'),
        $liquidGalleries = $galleries.filter('[class*=pi-liquid-col]');

    $liquidGalleries.each(function() {

        var $g = $(this),
            $gItems = $g.find('.pi-gallery-item'),
            isStacked = $g.hasClass('pi-stacked'),
            itemsWidthRejected = 0;

        detectColumnSizeNumber($g, 'gallery');

        $w.load(function() {
            var tmt;
            var windowWidth = $(window).width();

            $w.resize(function() {
                if (windowWidth != $(window).width()) {
                    if (!itemsWidthRejected) {
                        itemsWidthRejected = 1;
                        $gItems.each(function(i) {
                            var $el = $(this);
                            $el.css('width', '');
                        });
                    }
                }
            });

            $w.resize(function() {
                if (windowWidth != $(window).width()) {
                    clearTimeout(tmt);
                    tmt = setTimeout(function() {
                        itemsWidthRejected = 0;

                        if (isStacked) {
                            $g.css('cssText', 'margin-right: 0 !important');
                        }

                        var cols = $g.data('width-' + window.piCurrentBound),
                            galleryWidth = $g.width(),
                            galleryItemPadding = parseInt($gItems.eq(0).css('padding-left'), 10) + parseInt($gItems.eq(0).css('padding-right'), 10),
                            galleryWidthWithoutPadding = galleryWidth - cols * galleryItemPadding,
                            itemWidthExcess = galleryWidthWithoutPadding % cols,
                            galleryItemWidth = (galleryWidthWithoutPadding - itemWidthExcess) / cols;

                        if (itemWidthExcess && isStacked) {
                            galleryItemWidth++;
                            $g.css('cssText', 'margin-right: -' + cols + 'px !important');
                        } else if (isStacked) {
                            $g.css('cssText', 'margin-right: 0 !important');
                        }

                        $gItems.each(function(i) {
                            var $el = $(this);
                            $el.width(galleryItemWidth);
                        });

                    }, 100);
                }
            });
            $w.trigger('resize');
        });

    });

    var $colsToFix = $('.pi-column-fix').filter('[class*=pi-col-]');

    if ($colsToFix.length) {

        $w.load(function() {

            var tmt;

            $colsToFix.each(function() {
                detectColumnSizeNumber($(this), 'grid');
            });

            $w.resize(function() {

                clearTimeout(tmt);

                tmt = setTimeout(function() {

                    $colsToFix.each(function() {

                        var $el = $(this),
                            elPadding = parseInt($el.css('padding-left'), 10) + parseInt($el.css('padding-right'), 10),
                            newWidth = Math.floor($el.parent().width() / 12 * $el.data('width-' + window.piCurrentBound)) - elPadding;

                        $(this).width(newWidth);

                    });

                }, 100);
            });

            $w.trigger('resize');
        });

    }

    function detectColumnSizeNumber($el, gridType) {

        var classesList = $el.attr('class'),
            gClasses = classesList.match(/pi-liquid-col-\d?\D\D-\d/g) || classesList.match(/pi-col-\d?\D\D-\d/g),
            bounds = {};

        for (var i = 0; i < gClasses.length; i++) {
            var bound = gClasses[i].match(/pi-liquid-col-(\d?\D\D)-(\d)/i) || gClasses[i].match(/pi-col-(\d?\D\D)-(\d)/i);
            if (bound) {
                bounds[bound[1]] = bound[2];
            }
        }

        if (gridType == 'gallery') {
            if (!bounds['3xs']) {
                bounds['3xs'] = 1;
            }
        } else {
            if (!bounds['3xs']) {
                bounds['3xs'] = 12;
            }
        }

        if (!bounds['2xs']) {
            bounds['2xs'] = bounds['3xs'];
        }
        if (!bounds['xs']) {
            bounds['xs'] = bounds['2xs'];
        }
        if (!bounds['sm']) {
            bounds['sm'] = bounds['xs'];
        }
        if (!bounds['md']) {
            bounds['md'] = bounds['sm'];
        }
        if (!bounds['lg']) {
            bounds['lg'] = bounds['md'];
        }

        for (var bound in bounds) {
            $el.data('width-' + bound, bounds[bound]);
        }
    }
    //endregion

});


/*_____ scripts/pi.alert.js*/
/* Aura version: 1.8.6 */

/* ========================================================================
 * PI: pi.alert.js v1.0.0
 * BASED ON: bootstrap-alert.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#alerts
 * ==========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


! function($) {

     // jshint ;_;


    /* ALERT CLASS DEFINITION
     * ====================== */

    var dismiss = '[data-dismiss="alert"]',
        Alert = function(el) {
            $(el).on('click', dismiss, this.close);
        }

    Alert.prototype.close = function(e) {
        var $this = $(this),
            selector = $this.attr('data-target'),
            $parent;

        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
        }

        $parent = $(selector);

        e && e.preventDefault();

        $parent.length || ($parent = $this.hasClass('pi-alert') ? $this : $this.parent());

        $parent.trigger(e = $.Event('close'));

        if (e.isDefaultPrevented()) return;

        $parent.removeClass('in');

        function removeElement() {
            $parent
                .trigger('closed')
                .remove();
        }

        if ($.support.transition && $parent.hasClass('fade')) {
            $this.on($.support.transition.end, function(e) {
                e.stopPropagation();
            });
            $parent.on($.support.transition.end, removeElement);
        } else {
            removeElement();
        }

    }


    /* ALERT PLUGIN DEFINITION
     * ======================= */

    var old = $.fn.alert

    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('alert');
            if (!data) $this.data('alert', (data = new Alert(this)));
            if (typeof option == 'string') data[option].call($this);
        });
    }

    $.fn.alert.Constructor = Alert;


    /* ALERT NO CONFLICT
     * ================= */

    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    }


    /* ALERT DATA-API
     * ============== */

    $(document).on('click.alert.data-api', dismiss, Alert.prototype.close);

}(window.jQuery);


/*_____ scripts/pi.init.formsBlurClasses.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Input blur styles
    var $b = $('body'),
        cls = {
            changed: 'pi-form-control-changed',
            focused: 'pi-form-control-focused',
            withIcon: 'pi-input-with-icon'
        };
    $b.delegate('.form-control', 'keyup', function() {
        var $el = $(this),
            val = $el.val();
        if (val !== 'placeholder' && $.trim(val)) {
            $el.addClass(cls.changed);
            $el.parents('form').addClass(cls.changed);
        } else {
            $el.removeClass(cls.changed);
            $el.parents('form').removeClass(cls.changed);
        }
    }).delegate('.form-control', 'focus', function() {
        var $el = $(this);
        $el.parents('form').addClass(cls.focused);
        $el.parents('.' + cls.withIcon).addClass(cls.focused);
    }).delegate('.form-control', 'blur', function() {
        var $el = $(this);
        $el.parents('form').removeClass(cls.focused);
        $el.parents('.' + cls.withIcon).removeClass(cls.focused);
    });
    //endregion

});


/*_____ scripts/pi.init.placeholder.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region form placeholder
    if ($.fn.placeholder) {
        $('input, textarea').placeholder();
    }
    //endregion

});


/*_____ scripts/pi.init.jqueryScrollTo.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Scroll To
    if ($.fn.scrollTo) {

        var $w = $(window),
            defaultOffset = -100,
            defaultOffsetMin = -20,
            defaultDuration = 750,
            defaultEasing = 'easeOutExpo';

        $('[data-scroll-to]').each(function() {

            var $el = $(this),
                target = $el.data('scrollTo'),
                duration = $el.data('scrollToDuration') || defaultDuration,
                offset = $el.data('scrollToOffset') || defaultOffset,
                initialOffset = offset,
                easing = $el.data('scrollToEasing') || defaultEasing;

            target = $(target).length ? $(target) : target;

            $el.bind('click', function(e) {

                $.scrollTo.window().stop(true);

                if (window.piCurrentBound != 'lg') {
                    offset = defaultOffsetMin;
                } else {
                    offset = initialOffset;
                }

                $w.scrollTo(target, duration, {
                    offset: offset,
                    easing: easing
                });

                e.preventDefault();

            });

        });
    }
    //endregion

});


/*_____ scripts/pi.scrollTopArrow.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Scroll Top Arrow logic

    var $w = $(window),
        $d = $(document),
        $arrow = $('.pi-scroll-top-arrow'),
        classActive = 'pi-active',
        classBottom = 'pi-scroll-top-arrow-footer',
        footerHeight = 100,
        treshold = 400,
        scrollCheckTmt;

    if ($arrow.length) {
        $w.on('scroll resize', function() {
            clearTimeout(scrollCheckTmt);
            scrollCheckTmt = setTimeout(function() {
                checkArrow();
            }, 100);
        });

        $arrow.on('click', function() {
            $arrow.removeClass(classActive);
        });
    }

    function checkArrow() {
        var scrollTop = $w.scrollTop(),
            documentHeight = $d.height(),
            nearFooter = (window.piViewportHeight + scrollTop) >= documentHeight - footerHeight;

        if (scrollTop >= treshold) {
            $arrow.addClass(classActive);
        } else {
            $arrow.removeClass(classActive);
        }

        if (nearFooter && window.piCurrentBound != 'lg') {
            $arrow.addClass(classBottom);
        } else {
            $arrow.removeClass(classBottom);
        }

    }

    //endregion

});


/*_____ scripts/pi.init.social.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Socials jumps
    $('.pi-jump a, .pi-jump-bg a').each(function() {
        var $el = $(this);
        if ($el.find('i').length <= 1) {
            $el.append($el.find('i').clone());
        }
    });

    $('.pi-social-icons-big a i').wrap('<span></span>');
    //endregion

});


/*_____ scripts/pi.init.caption.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Captions animations
    //Sarah Kommentar
    function initCaptions() {
        $('.pi-overlay-slide:not(.pi-caption-opened)').each(function() {
            if (!$(this).hasClass("initialised")) {
                var $caption = $(this),
                    $parent = $caption.parents('.pi-img-w'),
                    height = $caption.outerHeight(true);

                if (height > 0) {
                    if ($caption.hasClass('pi-show-heading')) {
                        height -= $caption.find('h2,h3,h4,h5,h6').eq(0).outerHeight(true) + parseInt($caption.css('padding-top'), 10);
                    }
                    $caption.css({
                        bottom: -height,
                        visibility: 'visible'
                    });
                    $parent.unbind('mouseenter mouseleave').hover(function() {
                        $caption.css({
                            bottom: 0
                        })
                    }, function() {
                        $caption.css({
                            bottom: -height
                        })
                    });
                    $caption.addClass("initialised");
                }
            }
        });
    }
     initCaptions();

    /*$('#pi-all').on('initCaptions', function() {
        initCaptions();
    });*/
});


/*_____ scripts/pi.init.submitFormContact.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region Init Footer Form submit
    $('.pi-contact-form').submit(function() {

        var $form = $(this),
            $error = $form.find('.pi-error-container'),
            action = $form.attr('action');

        $error.slideUp(750, function() {
            $error.hide();

            var $name = $form.find('.form-control-name'),
                $email = $form.find('.form-control-email'),
                $companyName = $form.find('.form-control-company-name'),
                $phone = $form.find('.form-control-phone'),
                $budjet = $form.find('.form-control-budjet'),
                $comments = $form.find('.form-control-comments'),
                $captcha = $form.find('.g-recaptcha'),
                $captchaResponse = $form.find('[name="g-recaptcha-response"]');

            $.post(action, {
                    name: $name.val(),
                    email: $email.val(),
                    companyName: $companyName.val(),
                    phone: $phone.val(),
                    budjet: $budjet.val(),
                    comments: $comments.val(),
                    captcha_enabled: $captcha.length > 0 ? 1 : 0,
                    captcha_response: $captchaResponse.length > 0 ? $captchaResponse.val() : 0
                },
                function(data) {
                    $error.html(data);
                    $error.slideDown('slow');

                    if (data.match('success') != null) {
                        $name.val('');
                        $email.val('');
                        $companyName.val('');
                        $phone.val('');
                        $budjet.val('');
                        $comments.val('');
                    }
                }
            );

        });

        return false;

    });
    //endregion

});


/*_____ scripts/pi.init.colorbox.js*/
/* Aura version: 1.8.6 */

jQuery(function($) {

    //region colorbox
    if ($.fn.colorbox) {

        var $d = $(document),
            $w = $(window),
            $colorboxLinks = $('.pi-colorbox'),
            //Breakpoints could be 3xs, 2xs, xs, sm, md, lg
            breakpoints = [
                'sm',
                'md',
                'lg'
            ],
            colorboxState = 0,
            colorboxNeeded = 0;


        function piColorboxInit() {

            colorboxNeeded = 0;

            for (var i in breakpoints) {
                if (breakpoints[i] == window.piCurrentBound) {
                    colorboxNeeded = 1;
                    break;
                }
            }

            if (colorboxNeeded && !colorboxState) {
                $colorboxLinks.each(function() {
                    var $el = $(this),
                        videoData = $el.data('videoSize'),
                        videoSize = videoData ? videoData.split(',') : 0,
                        groupFromData = $el.data('colorboxGroup'),
                        group = groupFromData ? groupFromData : 'pi-group';

                    if (videoSize[0]) {
                        videoSize[0] = parseInt(videoSize[0], 10);
                        videoSize[1] = parseInt(videoSize[1], 10);
                        if (typeof(videoSize[0]) == 'number' && typeof(videoSize[1]) == 'number') {
                            $el.colorbox({
                                rel: group,
                                iframe: true,
                                innerWidth: videoSize[0],
                                innerHeight: videoSize[1],
                                maxWidth: '95%',
                                maxHeight: '95%'
                            });
                        }
                    } else {
                        $el.colorbox({
                            rel: group,
                            maxWidth: '95%',
                            maxHeight: '95%'
                        });
                    }

                });
                colorboxState = 1;
            } else if (!colorboxNeeded && colorboxState) {
                $colorboxLinks.colorbox.remove();
                colorboxState = 0;
            }
        }

        $d.bind('piBoundChanged', piColorboxInit);
        piColorboxInit();

    }
    //endregion

});

define("++resource++cloud19.theme/javascripts/pi.global", function(){});

require.config({
    baseUrl: PORTAL_URL,
    paths: {
        "accordion": "++resource++cloud19.theme/javascripts/pi.accordion",
        "bootstrap": "++resource++cloud19.theme/javascripts/bootstrap",
        "cookieinfo": "++resource++cloud19.theme/javascripts/c19.cookieinfo",
        "inview": "++resource++cloud19.theme/javascripts/inview",
        "revolutionSlider": "++resource++cloud19.theme/javascripts/pi.init.revolutionSlider",
        "slider": "++resource++cloud19.theme/javascripts/pi.init.slider",
        "lazyloading": "++resource++cloud19.theme/javascripts/c19.lazyloading",
        "tab": "++resource++cloud19.theme/javascripts/pi.init.tab",
        "lightbox": "++resource++cloud19.theme/javascripts/lightbox",
        "contentloader": "++resource++cloud19.theme/javascripts/c19.contentloader",
        "validator": "++resource++cloud19.theme/javascripts/validator",
        "parallax": "++resource++cloud19.theme/javascripts/pi.init.parallax",
        "counter": "++resource++cloud19.theme/javascripts/pi.init.counter",
        "onepageNav": "++resource++cloud19.theme/javascripts/c19.onepagerNav",
        "scroller": "++resource++cloud19.theme/javascripts/pi.scrollTopArrow",
        "maps": "++resource++cloud19.theme/javascripts/jquery.gmap",
        "mapstyles": "++resource++cloud19.theme/javascripts/pi.googleMapStyles",
        "initmaps": "++resource++cloud19.theme/javascripts/pi.init.map",
        "newsletter": "++resource++cloud19.theme/javascripts/c19.newsletter",
        "animation": "++resource++cloud19.theme/javascripts/pi.init.animations",
        "displayPaddings": "++resource++cloud19.theme/javascripts/c19.displayPaddings",
        "videoResize": "++resource++cloud19.theme/javascripts/pi.init.videoResize",
        "mobilMenu": "++resource++cloud19.theme/javascripts/pi.mobileMenu",
        "slick": "++resource++cloud19.theme/javascripts/slick",
        "slickslider": "++resource++cloud19.theme/javascripts/c19.slickslider",
        "tooltip": "++resource++cloud19.theme/javascripts/pi.init.tooltip",
        "twoclick":"++resource++cloud19.theme/javascripts/c19.twoclick",
        "colorbox": "++resource++cloud19.theme/javascripts/jquery.colorbox",
        "domready": "++resource++cloud19.theme/javascripts/domready",
        "jqueryEasing": "++resource++cloud19.theme/javascripts/jquery.easing",
        "jqueryPlaceholder": "++resource++cloud19.theme/javascripts/jquery.placeholder",
        "jqueryThemePunchTools": "++resource++cloud19.theme/javascripts/jquery.themepunch.tools",
        "jqueryThemePunchRevolution": "++resource++cloud19.theme/javascripts/jquery.themepunch.revolution",
        "dropdownBox": "++resource++cloud19.theme/javascripts/c19.dropdownBox",
        "global": "++resource++cloud19.theme/javascripts/pi.global",
        "lazysizes": "++resource++cloud19.theme/javascripts/lazysizes",
        "fixedHeader": "++resource++cloud19.theme/javascripts/pi.fixedHeader",
        "requestAnimationFramePolyfill": "++resource++cloud19.theme/javascripts/requestAnimationFramePolyfill",
    },
    deps: ["jqueryEasing", "inview", "bootstrap",  "jqueryPlaceholder", "requestAnimationFramePolyfill"],
    shim: {
        revolutionSlider: {
            deps: ["++resource++cloud19.theme/javascripts/jquery.themepunch.tools","++resource++cloud19.theme/javascripts/jquery.themepunch.revolution"],
        },
        parallax: {
            deps: ["++resource++cloud19.theme/javascripts/pi.parallax"]
        },
        cookieinfo: {
            deps: ["++resource++cloud19.theme/javascripts/jquery.ihavecookies"]
        },
        counter: {
            deps: ["++resource++cloud19.theme/javascripts/pi.counter"]
        },
        tab: {
            deps: ["++resource++cloud19.theme/javascripts/pi.tab"]
        },
        maps: {
            deps: ["//maps.googleapis.com/maps/api/js?key=AIzaSyDYJXPiJlvcS3-ODjveloJxP7c3K3Fc4u0", "++resource++cloud19.theme/javascripts/pi.googleMapStyles"],
        },
        slider: {
            deps: ["++resource++cloud19.theme/javascripts/pi.slider"]
        },
        slickslider: {
            deps: ['++resource++cloud19.theme/javascripts/slick'],
        },
        tooltip: {
            deps: ["++resource++cloud19.theme/javascripts/pi.tooltip"]
        }
    },
    optimize: 'uglify',
    wrapShim: true
});

require(["++resource++cloud19.theme/javascripts/domready", "++resource++cloud19.theme/javascripts/pi.global"],
    function(domReady) {
        domReady(function() {
            includeScripts();
            function includeScripts() {
                if ($(".c19-cookie-info").length) {
                    require(["cookieinfo"]);
                }
                if ($("#portal-scroll-arrow")) {
                    require(["scroller"], function(){
                        $("#portal-scroll-arrow").on("click", scrollToTop); //scrollToTop -> pi.global.js
                    });
                }
                if ($(".pi-accordion").length) {
                    require(["accordion"]);
                }
                if ($(".pi-colorbox").length) {
                    console.log('colorbox!');
                    require(["colorbox"]);
                }
                if ($(".modal").length) {
                    require(["colorbox"]);
                }
                if ($(".pi-revolution-slider").length) {
                    require(["revolutionSlider"]);
                    require(["lazysizes"]);
                }
                if ($(".pi-slider").length) {
                    require(["slider"]);
                    require(["lazysizes"]);
                }
                if ($(".pi-tabs-navigation").length) {
                    require(["tab"]);
                }
                if ($("*[data-lightbox]").length) {
                    require(["lightbox"]);
                }
                if ($(".pat-contentloader").length) {
                    require(["contentloader"]);
                }
                if ($(".pi-section-parallax").length) {
                    require(["parallax"], function() {
                        $(window).trigger("scroll");
                    });
                }
                if ($(".pi-counter").length) {
                    require(["counter"]);
                }
                if ($("#c19-onepager-nav").length) {
                    require(["onepageNav"]);
                }
                if ($(".pi-google-map").length) {
                    require(['maps'], function() {
                        require(['initmaps']);
                    });
                    require(["twoclick"]);
                }
                if ($(".wcvideo-container").length) {
                    require(["twoclick"]);
                }
                if ($(".portletNewsletter").length) {
                    require(["newsletter"]);
                }
                if ($("[id*='c19-slickslider']").length) {
                    require(["slickslider"]);
                }
                if ($("*[data-animation]").length) {
                    require(["animation"]);
                }
                if ($("#pfg-fieldwrapper").length) {
                    require(["validator"]);
                }
                if ($(".template-edit").length && $(".mosaic-layout-active").length) {
                    require(["displayPaddings"]);
                }
                if ($(".pi-section-video").length) {
                    require(["videoResize"]);
                }

                if($(".c19-dropdown-box-wrapper").length){
                    require(["dropdownBox"]);
                }
                if($(".pi-tooltip").length){
                    require(["tooltip"]);
                }
                if($(".pi-header-sticky").length){
                    require(["fixedHeader"]);
                }
                if($("img[class^='lazyload']").length){
                    require(["lazysizes"]);
                }
                $(".has_bg").each(function() {
                    var image = $(this).find("> img");
                    var image_src = image.attr("src");
                    $(this).css({
                        "background-image": "url(" + image_src + ")",
                        "background-repeat": "no-repeat",
                        "background-position": "center center",
                        "background-size": "cover",
                        "-webkit-background-size": "cover",
                        "-moz-background-size": "cover",
                        "-o-background-size": "cover",
                    });
                    image.hide();
                });
                $(".translate_me").each(function() {
                    jarn.i18n.loadCatalog("plone", "cloud19.theme");
                    _ = jarn.i18n.MessageFactory("plone")
                    $this = $(this);
                    $this.text(_($this.text()));
                    $this.removeClass("translate_me");
                });
                $("input[type='text'],#content-core textarea").addClass("form-control");
                //$("#content-core input[type='submit']").addClass("btn pi-btn pi-uppercase");
                $("input[name='buttons.login']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("input[name='form.buttons.Cancel']").addClass("btn pi-btn pi-uppercase");
                $("input[name='form.buttons.Delete']").addClass("btn pi-btn pi-btn-red pi-uppercase");
                $("input[name='form.buttons.get_username']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("input[name='form.buttons.reset']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("input[name='form.buttons.save']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("input[name='form.buttons.submit']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("input[name='form.buttons.search']").addClass("btn pi-btn pi-btn-base pi-uppercase");
                $("#content-core table").wrap("<div class='pi-responsive-table-sm'></div>");
                $(".mosaic-tile-content table").wrap("<div class='pi-responsive-table-sm'></div>");
            }
        });
    });

define("booost-theme", function(){});

/* i18n integration. This is forked from jarn.jsi18n
 *
 * This is a singleton.
 * Configuration is done on the body tag data-i18ncatalogurl attribute
 *     <body data-i18ncatalogurl="/plonejsi18n">
 *
 *  Or, it'll default to "/plonejsi18n"
 */
define('mockup-i18n',[
  'jquery'
], function($) {
  

  var I18N = function() {
    var self = this;
    self.baseUrl = $('body').attr('data-i18ncatalogurl');
    self.currentLanguage = $('html').attr('lang') || 'en';

    // Fix for country specific languages
    if (self.currentLanguage.split('-').length > 1) {
      self.currentLanguage = self.currentLanguage.split('-')[0] + '_' + self.currentLanguage.split('-')[1].toUpperCase();
    }

    self.storage = null;
    self.catalogs = {};
    self.ttl = 24 * 3600 * 1000;

    // Internet Explorer 8 does not know Date.now() which is used in e.g. loadCatalog, so we "define" it
    if (!Date.now) {
      Date.now = function() {
        return new Date().valueOf();
      };
    }

    try {
      if ('localStorage' in window && window.localStorage !== null && 'JSON' in window && window.JSON !== null) {
        self.storage = window.localStorage;
      }
    } catch (e) {}

    self.configure = function(config) {
      for (var key in config){
        self[key] = config[key];
      }
    };

    self._setCatalog = function (domain, language, catalog) {
      if (domain in self.catalogs) {
        self.catalogs[domain][language] = catalog;
      } else {
        self.catalogs[domain] = {};
        self.catalogs[domain][language] = catalog;
      }
    };

    self._storeCatalog = function (domain, language, catalog) {
      var key = domain + '-' + language;
      if (self.storage !== null && catalog !== null) {
        self.storage.setItem(key, JSON.stringify(catalog));
        self.storage.setItem(key + '-updated', Date.now());
      }
    };

    self.getUrl = function(domain, language) {
      return self.baseUrl + '?domain=' + domain + '&language=' + language;
    };

    self.loadCatalog = function (domain, language) {
      if (language === undefined) {
        language = self.currentLanguage;
      }
      if (self.storage !== null) {
        var key = domain + '-' + language;
        if (key in self.storage) {
          if ((Date.now() - parseInt(self.storage.getItem(key + '-updated'), 10)) < self.ttl) {
            var catalog = JSON.parse(self.storage.getItem(key));
            self._setCatalog(domain, language, catalog);
            return;
          }
        }
      }
      if (!self.baseUrl) {
        return;
      }
      $.getJSON(self.getUrl(domain, language), function (catalog) {
        if (catalog === null) {
          return;
        }
        self._setCatalog(domain, language, catalog);
        self._storeCatalog(domain, language, catalog);
      });
    };

    self.MessageFactory = function (domain, language) {
      language = language || self.currentLanguage;
      return function translate (msgid, keywords) {
        var msgstr;
        if ((domain in self.catalogs) && (language in self.catalogs[domain]) && (msgid in self.catalogs[domain][language])) {
          msgstr = self.catalogs[domain][language][msgid];
        } else {
          msgstr = msgid;
        }
        if (keywords) {
          var regexp, keyword;
          for (keyword in keywords) {
            if (keywords.hasOwnProperty(keyword)) {
              regexp = new RegExp('\\$\\{' + keyword + '\\}', 'g');
              msgstr = msgstr.replace(regexp, keywords[keyword]);
            }
          }
        }
        return msgstr;
      };
    };
  };

  return I18N;
});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define('moment',t):e.moment=t()}(this,function(){var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
/* Moment pattern.
 *
 * Options:
 *    selector(string): selector to use to look for dates to format (null)
 *    format(string): Format to use to render date. Also available is "relative" and "calendar" formats. (MMMM Do YYYY, h:mm:ss a)
 *    setTitle(boolean): set the title attribute to display the full date and time on hover (false)
 *
 * Documentation:
 *
 *    # Simple
 *
 *    {{ example-1 }}
 *
 *    # Defaults
 *
 *    {{ example-2 }}
 *
 *    # Relative format
 *
 *    {{ example-3 }}
 *
 *    # Calendar format
 *
 *    {{ example-4 }}
 *
 *    # Custom format
 *
 *    {{ example-5 }}
 *
 *    # Setting date by attribute
 *
 *    {{ example-6 }}
 *
 * Example: example-1
 *    <span class="pat-moment">2014-10-30T15:10:00</span>
 *
 * Example: example-2
 *    <ul class="pat-moment" data-pat-moment="selector:li">
 *      <li>2013-10-01T10:00:00-05:00</li>
 *      <li>2013-01-01T22:10:00-05:00</li>
 *      <li>2013-01-05T04:34:00-05:00</li>
 *      <li>2013-02-14T16:55:00-05:00</li>
 *    </ul>
 *
 * Example: example-3
 *    <ul class="pat-moment"
 *        data-pat-moment="selector:li;format:relative;">
 *      <li>2013-10-01T10:00:00-05:00</li>
 *      <li>2013-01-01T22:10:00-05:00</li>
 *      <li>2013-01-05T04:34:00-05:00</li>
 *      <li>2013-02-14T16:55:00-05:00</li>
 *    </ul>
 *
 * Example: example-4
 *    <ul class="pat-moment"
 *        data-pat-moment="selector:li;format:calendar;">
 *      <li>2013-10-01T10:00:00-05:00</li>
 *      <li>2013-10-02T22:10:00-05:00</li>
 *      <li>2013-10-05T04:34:00-05:00</li>
 *      <li>2013-10-03T16:55:00-05:00</li>
 *    </ul>
 *
 * Example: example-5
 *    <ul class="pat-moment"
 *        data-pat-moment="selector:li;format:MMM Do, YYYY h:m a;">
 *      <li>2013-10-01T10:00:00-05:00</li>
 *      <li>2013-01-01T22:10:00-05:00</li>
 *      <li>2013-01-05T04:34:00-05:00</li>
 *      <li>2013-02-14T16:55:00-05:00</li>
 *    </ul>
 *
 * Example: example-6
 *    <ul class="pat-moment"
 *        data-pat-moment="selector:li;format:MMM Do, YYYY h:m a;">
 *      <li data-date="2013-10-01T10:00:00-05:00"></li>
 *      <li data-date="2013-01-01T22:10:00-05:00"></li>
 *      <li data-date="2013-01-05T04:34:00-05:00"></li>
 *      <li data-date="2013-02-14T16:55:00-05:00"></li>
 *    </ul>
 *
 */

define('mockup-patterns-moment',[
  'jquery',
  'pat-base',
  'pat-registry',
  'mockup-i18n',
  'moment'
], function($, Base, Registry, i18n, moment) {
  var currentLanguage = (new i18n()).currentLanguage;
  var localeLoaded = false;
  var patMomentInstances = [];

  // From https://github.com/moment/moment/blob/3147fbc/src/test/moment/format.js#L463-L468
  var MOMENT_LOCALES =
    'ar-sa ar-tn ar az be bg bn bo br bs ca cs cv cy da de-at de dv el ' +
    'en-au en-ca en-gb en-ie en-nz eo es et eu fa fi fo fr-ca fr-ch fr fy ' +
    'gd gl he hi hr hu hy-am id is it ja jv ka kk km ko lb lo lt lv me mk ml ' +
    'mr ms-my ms my nb ne nl nn pl pt-br pt ro ru se si sk sl sq sr-cyrl ' +
    'sr sv sw ta te th tl-ph tlh tr tzl tzm-latn tzm uk uz vi zh-cn zh-tw';

  function isLangSupported(lang) {
    return MOMENT_LOCALES.split(' ').indexOf(lang) !== -1;
  }

  function lazyLoadMomentLocale() {
    var LANG_FALLBACK = 'en';

    if (currentLanguage === LANG_FALLBACK) {
      // English locale is built-in, no need to load, so let's exit early
      // to avoid computing fallback, which happens at every loaded page
      localeLoaded = true;
      return;
    }

    // Format language as expect by Moment.js, neither POSIX (like TinyMCE) nor IETF
    var lang = currentLanguage.replace('_', '-').toLowerCase();

    // Use language code as fallback, otherwise built-in English locale
    lang = isLangSupported(lang) ? lang : lang.split('-')[0];
    lang = isLangSupported(lang) ? lang : LANG_FALLBACK;
    if (lang === LANG_FALLBACK) {
      localeLoaded = true;
      return;
    }

    require(['moment-url/' + lang], function() {
      localeLoaded = true;
      for (var i = 0; i < patMomentInstances.length; i++) {
        var patMoment = patMomentInstances[i];
        patMoment.init();
      }
      patMomentInstances = [];
    });
  }

  lazyLoadMomentLocale();

  var Moment = Base.extend({
    name: 'moment',
    trigger: '.pat-moment',
    parser: 'mockup',
    moment_i18n_map: {'no': 'nb'},  // convert Plone language codes to moment codes.
    defaults: {
      // selector of elements to format dates for
      selector: null,
      // also available options are relative, calendar
      format: 'LLL',
      setTitle: false
    },
    convert: function($el) {
      var self = this;
      var date = $el.attr('data-date');
      if (!date) {
        date = $.trim($el.html());
        if (date && date !== 'None') {
          $el.attr('data-date', date);
        }
      }
      if (!date || date === 'None') {
        return;
      }
      if (currentLanguage in self.moment_i18n_map) {
        currentLanguage = self.moment_i18n_map[currentLanguage];
      }
      moment.locale([currentLanguage, 'en']);
      date = moment(date);
      if (!date.isValid()) {
        return;
      }
      if (self.options.setTitle) {
        $el.attr('title', date.format('LLLL'));

      }
      if (self.options.format === 'relative') {
        date = date.fromNow();
      }else if (self.options.format === 'calendar') {
        date = date.calendar();
      } else {
        date = date.format(self.options.format);
      }
      if (date) {
        $el.html(date);
      }
    },
    init: function() {
      var self = this;
      if (!localeLoaded) {
        // The locale has not finished to load yet, we will execute the init
        // again once the locale is loaded.
        patMomentInstances.push(self);
        return;
      }
      if (self.options.selector) {
        self.$el.find(self.options.selector).each(function() {
          self.convert($(this));
        });
      } else {
        self.convert(self.$el);
      }
    }
  });

  return Moment;
});

/* globals requirejs */
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//

require([
  'mockup-patterns-moment',
], function() {
  
});

define("plone-moment", function(){});

