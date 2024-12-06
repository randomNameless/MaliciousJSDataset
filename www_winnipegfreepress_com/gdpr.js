( function() {
	/**
	 * Cookies.js, providing easy access to cookies thru the cookiejar object. Enabling so-called "subcookies" thru the subcookiejar 
	 * object.
	 * See this related blogpost for more information on how to use these objects:
	 * 	<http://www.whatstyle.net/articles/28/subcookies>
	 * Check out this other blogpost for information about the new version:
	 *  <http://www.whatstyle.net/articles/46/subcookies_v2>
	 * 
	 * @author Harmen Janssen <http://www.whatstyle.net>
	 * @version 2.0
	 * 
	 */
	
	/* based on http://www.quirksmode.org/js/cookies.html, by Peter-Paul Koch */
	var cookiejar = {
		/* set a cookie */
		bake: function(cookieName,cookieValue,days,path,domain) {
			var expires='';
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}
			var thePath = '; path=/';
			if (path) {
				thePath = '; path=' + path;
			}
			var theDomain = '';
			if (domain) {
				theDomain = '; domain=' + domain;
			}
			document.cookie = cookieName+'='+escape(cookieValue)+expires+thePath+theDomain;
			return true;
		},
		/* get a cookie value */
		fetch: function(cookieName) {
			var nameEQ = cookieName + '=';
			var ca = document.cookie.split(';');
			for (var i=0; i<ca.length; i++)	{
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) == 0) {
					return unescape(c.substring(nameEQ.length, c.length));
				}
			}
			return null;
		},
		/* delete a cookie */
		crumble: function(cookieName) {
			return cookiejar.bake(cookieName,'',-1);
		}
	};
	
	var is_from_eu = cookiejar.fetch('is_from_eu');
	var subscription_type = cookiejar.fetch('fpnp__subscription_type');
	var is_subscribe_path = false;
	var is_cxense_bot = false;
	if(navigator.userAgent.indexOf('cXensebot') > -1){
		is_cxense_bot = true;
	}
	if (document.location.pathname.indexOf("/subscribe") > -1) {
		is_subscribe_path = true;
	}
	if ((typeof(is_from_eu) == 'undefined' ||
		is_from_eu == null ||
		is_from_eu == false ||
		is_from_eu == 'yes') &&
		(!is_subscribe_path) && (!is_cxense_bot))
	{
		if (subscription_type && subscription_type !== 'read-now-pay-later') {
			// do not check if user is subscriber or trial user
		} else {
			try {
				var loadGeoScriptAsync = function(uri) {
					return new Promise(function (resolve, reject) {
						var tag = document.createElement('script');
						tag.src = uri;
						tag.type='text/javascript';
						tag.onload = function() {
							resolve();
						};
						var firstScriptTag = document.getElementsByTagName('script')[0];
						firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
					});
				}
				var scriptLoaded = loadGeoScriptAsync('https://ssl.geoplugin.net/extras/cookielaw.js?k=67ff89604d31f4c1');
				scriptLoaded.then(function() {
					var result = geoplugin_cookieConsent();
					if (typeof(result) !== "undefined") {
						if (result) {
							window.location.href = gdpr_notice_page;
						} else {
							cookiejar.bake('is_from_eu','no',3650,'/',document.domain);
						}
					}
				});
			}
			catch (err) {
				console.log("Error occurred on GeoPlugin");
			}
		}
	}
} )();
