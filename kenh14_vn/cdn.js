(function(){
    var dmn=document.domain+'';
    var urlchk=document.URL+'';
    if(dmn=='dantri.com.vn'){
        try{
            window['_ADM_Channel']='/'+(/dantri.com.vn\/([a-zA-Z\+\-]+)/.exec(urlchk)[1])+'/';
        }catch(e){}
    }
})();
window.checkAdmdomainAds=function(str){
    var ua=navigator.userAgent+'';
    if(ua.indexOf('Firefox')!=-1 || ua.indexOf('coc_coc')!=-1){
        str=str.replace('lg1.logging.admicro.vn','contineljs.com')
    }
    return str;
};
if (typeof(AMCDNCheckSend) == 'undefined') {
	window.AMCDNCheckSend = 'send';
    (function() {
        function getCookie(b) {
            return 0 < document.cookie.length && (c_start = document.cookie.indexOf(b + "="), -1 != c_start) ? (c_start = c_start + b.length + 1, c_end = document.cookie.indexOf(";",
                c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
        }

        function setCookie(a, c, d, b, g, f) {
            (new Date).getTime();
            b = "" == b ? "/" : b;
            d = 0 == d || "" == d ? (new Date(+new Date + 864E5)).toGMTString() : (new Date(+new Date + 6E4 * d)).toGMTString();
            a = [a + "=" + escape(c)];
            for (var h in d = {
                    expires: d,
                    path: b,
                    domain: g
                }) d[h] &&
                a.push(h + "=" + d[h]);
            return f && a.push("secure"), document.cookie = a.join(";"), !0
        }

        if (typeof(window.__admloadPageId) == 'undefined') {
            window.__admloadPageId = (function guid() {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                return s4() + s4() + s4() + s4() +
                    s4() + s4() + s4() + s4();
            })();

        }
        window._admislocalStorage = (function() {
            if (!("localStorage" in window && null !== window.localStorage)) return !1;
            try {
                localStorage.setItem("_admstorage", ""), localStorage.removeItem("_admstorage")
            } catch (a) {
                return !1
            }
            return !0
        })();

        if (window._admislocalStorage) {
            window.__admloadPageIdc = localStorage['__uidac'];
            if (!window.__admloadPageIdc) {
                localStorage['__uidac'] = __admloadPageId;
                window.__admloadPageIdc = __admloadPageId;
            }
        } else {
            window.__admloadPageIdc = getCookie('__uidac');
            if (window.__admloadPageIdc == '') {
                setCookie('__uidac', __admloadPageId, 5000000, '/', '.' + document.domain);
            }
        }
        var __uif = getCookie('__uif');
        var arruid = /__uid:([0-9]+)/.exec(__uif);
        var struid = '';
        if (arruid && arruid.length >= 2) {
            struid = encodeURIComponent(arruid[1]);
        }

        var img = new Image();
    var dmname = document.location.hostname;
    var urltk = (document.location.protocol == "https:" ? "https:" : "http:");
    urltk = urltk + '//amcdn.vn/ftest?lsn='+window.__admloadPageId+'&dg='+window.__admloadPageIdc+'&ui='+struid+'&url=' + (encodeURIComponent('http://1'+dmname+ document.location.pathname)) + '&rd=' + Math.random();
    img.src = urltk;
    var img2=new Image();
    img2.onerror=function(){
    	var img3=new Image();
    	img3.src=(document.location.protocol == "https:" ? "https:" : "http:")+'//amcdn.vn/blc?lsn='+window.__admloadPageId+'&dg='+window.__admloadPageIdc+'&ui='+struid+'&url=' + (encodeURIComponent('http://errorlg1'+dmname + document.location.pathname)) + '&rd=' + Math.random();;
    };
	img2.src= (document.location.protocol == "https:" ? "https:" : "http:")+'//'+checkAdmdomainAds('lg1.logging.admicro.vn')+'/ftest?lsn='+window.__admloadPageId+'&dg='+window.__admloadPageIdc+'&ui='+struid+'&url=' + (encodeURIComponent('http://2'+dmname + document.location.pathname)) + '&rd=' + Math.random();
    
    function addJs(b) {
	    var chk=false;
	    var c = document.createElement("script");
	    document.getElementsByTagName("head")[0].appendChild(c);
	    var fn=function(){
	    	if(!chk){
	    		var img1=new Image();
	    		img1.src=(document.location.protocol == "https:" ? "https:" : "http:")+'//amcdn.vn/blc?lsn='+window.__admloadPageId+'&url='+encodeURIComponent(document.URL)+'&dg='+window.__admloadPageIdc+'&ui='+struid;
	    		var fnchk=false;
	    		var fncall=function(){
	    			if(typeof ADM_TrackingSend!=='undefined' && !fnchk){
	    				fnchk=true;
	    				var img4=new Image();
	    				img4.src=(document.location.protocol == "https:" ? "https:" : "http:")+'//amcdn.vn/blc?dg='+window.__admloadPageIdc+'&ui='+struid+'&url=' + (encodeURIComponent('http://blockpartern'+dmname + document.location.pathname)) + '&rd=' + Math.random();
	    			}
	    			else{
	    				window.setTimeout(function(){
	    					fncall();
	    				},500);
	    			}
	    		};
	    		fncall();
	    		chk=true;
	    	}
	    };
	    try{
	    	c.onerror=function(e){
	    		if(!chk){
		    		fn();
		    	}
		    };
		    c.onabort=function(e){
		    	if(!chk){fn();}
		    };
		    c.oncancel=function(e){
		    	if(!chk){fn();}
		    };

	    }catch(e){
	    	
	    }
	    try{
	    	 c.src = b
	    }catch(e){}
	}
	var str=['https:','//','media1','.admi','cro.vn','/','ads_','codes','/','ads_code','_1.ads'].join('');
	addJs(str);

    })()
}

try {
    if (typeof(logposurlview) == 'undefined') {
        var logposurlview =  '';
    }
/*---above---*/
/*
    window._admislocalStorage = (function() {
        if (!("localStorage" in window && null !== window.localStorage)) return !1;
        try {
            localStorage.setItem("_admstorage", ""), localStorage.removeItem("_admstorage")
        } catch (a) {
            return !1
        }
        return !0
    })();
*/
    if (typeof(chkadmTrackingt)=='undefined') {
        var chkadmTrackingt;
    }

    
    if (typeof(__admPageloadid) == 'undefined') {
        var __admPageloadid = (new Date()).getTime();
       
    }
    
    (function() {
        var d = !1,
            c = [];
        if (!(window.AdmonDomReady && "function" == typeof window.AdmonDomReady)) {
            var a = function() {
                if (!document.body) return setTimeout(a, 13);
                for (var b = 0; b < c.length; b++) c[b]();
                c = []
            };
            window.AdmonDomReady = function(b) {
                c.push(b);
                if ("complete" == document.readyState) a();
                else if (!d) {
                    if (document.addEventListener) {
                        var e = function() {
                            document.removeEventListener("DOMContentLoaded", e, !1);
                            a()
                        };
                        document.addEventListener("DOMContentLoaded", e, !1);
                        window.addEventListener("load", a, !1)
                    } else if (document.attachEvent) {
                        var f =
                            function() {
                                "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                            };
                        document.attachEvent("onreadystatechange", f);
                        window.attachEvent("onload", a);
                        b = !1;
                        try {
                            b = null == window.frameElement
                        } catch (h) {}
                        if (document.documentElement.doScroll && b) {
                            var g = function() {
                                if (0 != c.length) {
                                    try {
                                        document.documentElement.doScroll("left")
                                    } catch (b) {
                                        setTimeout(g, 1);
                                        return
                                    }
                                    a()
                                }
                            };
                            g()
                        }
                    }
                    d = !0
                }
            }
        }
    })();

    function admaddEventListener(d, c, a) {
        "addEventListener" in d ? d.addEventListener(c, a) : "attachEvent" in d && d.attachEvent("on" + c, a)
    };

    function admRemoveEventListener(d, c, a) {
        "removeEventListener" in d ? d.removeEventListener(c, a) : "detachEvent " in d && d.detachEvent("on" + c, a)
    };

    if (void 0 === ADM_AdsTracking) {
        var ADM_AdsTracking = {
            version: "1.0.0",
            paramFlash: {},
            getFlashMovie: function(a) {
                return -1 != navigator.appName.indexOf("Microsoft") ? document.getElementById(a) : document[a]
            },
            checkBrowser: function() {
                var b = !1,
                    a;
                a = navigator.appName;
                var c = navigator.userAgent + "",
                    d, e = c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                null == e && -1 == c.indexOf("MSIE") && -1 != c.indexOf("Trident/") ? (a = -1, null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c) && (a = RegExp.$1), e = ["MSIE", a + ""]) : (e && null != (d = c.match(/version\/([\.\d]+)/i)) && (e[2] = d[1]), e = e ? [e[1], e[2]] : [a, navigator.appVersion, "-?"]);
                a = e;
                "undefined" !=
                typeof a && null != a && 1 <= a.length && (c = (a[0] + "").toLowerCase(), a = a[1].split("."), a = parseInt(a[0]), ("firefox" == c && 22 <= a || "msie" == c && 10 <= a || "safari" == c && 5 <= a || "chrome" == c) && _admislocalStorage && (b = !0));
                return b
            },
            fonts: "",
            getFont: function(b) {
                ADM_AdsTracking.fonts = b
            },
            lcStorage: {
                timestamp: "timestamp_",
                get_exprises: function(b, a, c, d) {
                    b += "";
                    a = b.indexOf(a, c);
                    c = b.length - 1;
                    return -1 != a ? (d = b.indexOf(d, a), -1 == d && (d = c), b.substring(a, d)) : ""
                },
                set_item: function(b, a, c) {
                    var d = "",
                        e = (new Date).getTime(),
                        f = this.timestamp,
                        e = 0 == c || "" == c ? e + 63072E7 : e + 864E5 * c,
                        d = "_azs" == b ? ";" : ",";
                    c = this.get_exprises(a, f, 0, d);
                    a = "" == c ? a + (f + e.toString() + d) : a.replace(c, f + e.toString());
                    localStorage.setItem(b, a)
                },
                get_item: function(b, a) {
                    var c = localStorage.getItem(b),
                        d = (new Date).getTime(),
                        e = this.timestamp;
                    if ("" == c || null == c) return "";
                    endchar = "_azs" == b ? ";" : ",";
                    var f = this.get_exprises(c, e, 0, endchar),
                        f = f.replace(e, "");
                    return "" == f || isNaN(parseInt(f)) || parseInt(f) < d ? "" : c = c.replace(e + f + endchar, "")
                },
                remove_item: function(b) {
                    localStorage.removeItem(b)
                },
                flush: function() {
                    localStorage.clear()
                }
            },
            setCookie: function(b, a, c, d, e, f) {
                (new Date).getTime();
                d = "/";
                c = 0 == c || "" == c ? (new Date(+new Date + 63072E7)).toGMTString() : (new Date(+new Date + 864E5 * c)).toGMTString();
                b = [b + "=" + escape(a)];
                for (var g in c = {
                        expires: c,
                        path: d,
                        domain: e
                    }) c[g] && b.push(g + "=" + c[g]);
                return f && b.push("secure"), document.cookie = b.join(";"), !0
            },
            getCookie: function(b) {
                return 0 < document.cookie.length && (c_start = document.cookie.indexOf(b + "="), -1 != c_start) ? (c_start = c_start + b.length + 1, c_end = document.cookie.indexOf(";",
                    c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
            },
            get: function(b) {
                var a = "",
                    c = "";
                if ("__ui" == b || "__uid" == b || "__create" == b) c = b, b = "__uif";
                if (_admislocalStorage) {
                    if ("__R" == b || "__RC" == b || "__uif" == b) a = ADM_AdsTracking.getCookie(b);
                    if (null == a || "" == a) a = ADM_AdsTracking.lcStorage.get_item(b), null != a && "" != a && ADM_AdsTracking.setCookie(b, a, "")
                } else a = ADM_AdsTracking.getCookie(b);
                if ("" != c && "" != a) {
                    b = a.split("|");
                    for (var d = 0,
                            e = b.length; d < e; d++)
                        if (-1 != b[d].indexOf(c + ":")) {
                            a = b[d].replace(c + ":", "");
                            break
                        }
                }
                return a
            },
            set: function(b, a, c) {
                if (_admislocalStorage) {
                    if (ADM_AdsTracking.lcStorage.set_item(b, a, c), "__R" == b || "__RC" == b || "__uif" == b) "__R" == b && "undefined" != typeof ADS_Location && ADS_Location != a && "" != a && "0" != a && (ADS_Location = parseInt(a)), "__RC" == b && "undefined" != typeof ADS_City && ADS_City != a && "" != a && "0" != a && (ADS_City = parseInt(a)), ADM_AdsTracking.setCookie(b, a, c)
                } else ADM_AdsTracking.setCookie(b,
                    a, c)
            },
            getParam: function() {
                if (ADM_AdsTracking.checkBrowser()) {
                    var b = ADM_AdsTracking.get("__create") + "",
                        a = ADM_AdsTracking.get("__uid") + "";
                    30 < a.length && (a = "");
                    "" == a && (b = "");
                    11 < b.length && "" != a && (b = Math.floor((new Date).getTime() / 1E3));
                    var strDg='';
                    if(window.__admloadPageIdc){
                        strDg='&dg='+window.__admloadPageIdc;
                    }
                    return "&ce=1&lc=" + ADM_AdsTracking.get("__RC") + "&cr=" + b + "&ui=" + a+strDg
                }
                return ""
            },
            getInfoParam: function() {
                if (ADM_AdsTracking.checkBrowser()) return "";
                var b = ADM_AdsTracking.get("__uid"),
                    a = ADM_AdsTracking.get("__create");
                return "&ce=1&guie=1&__uid=" + b + "&__create=" + a
            },
            flashcheck: function(b) {
                for (var a in b) ADM_AdsTracking.check(a,
                    b[a], !0)
            },
            expireAllCookies: function(b, a) {
                var c = (new Date(0)).toUTCString();
                document.cookie = b + "=; expires=" + c;
                for (var d = 0, e = a.length; d < e; d++) document.cookie = b + "=; path=" + a[d] + "; expires=" + c
            },
            expireActiveCookies: function(b) {
                for (var a = location.pathname.replace(/\/$/, "").split("/"), c = [], d = 0, e = a.length, f; d < e; d++) f = a.slice(0, d + 1).join("/"), f = f.replace(/\.([\w]+)/gi, ""), "" != f && (c.push(f), c.push(f + "/"));
                0 < c.length && ADM_AdsTracking.expireAllCookies(b, c)
            },
            check: function(b, a) {
                switch (b) {
                    case "__ui":
                    case "__uid":
                    case "__create":
                        if (2 ==
                            arguments.length && "__uid" == b || "__create" == b && "" != a) {
                            ADM_AdsTracking.paramFlash[b] = a;
                            var c = ADM_AdsTracking.getFlashMovie("_admFlck");
                            c && c.setck && c.setck(ADM_AdsTracking.paramFlash)
                        }
                        var d = ADM_AdsTracking.get("__uif") + "";
                        if ("" == d) d = b + ":" + a;
                        else {
                            for (var c = b + ":" + a, d = d.split("|"), e = [], f = 0, g = d.length; f < g; f++) - 1 == d[f].indexOf(b + ":") && e.push(d[f]);
                            e.push(c);
                            d = e.join("|")
                        }
                        ADM_AdsTracking.set("__uif", d, 10);
                        break;
                    default:
                        d = ADM_AdsTracking.get(b), 2 == arguments.length && "" != a && "0" != a && "-1" != a && (ADM_AdsTracking.paramFlash[b] =
                            a, (c = ADM_AdsTracking.getFlashMovie("_admFlck")) && c.setck && c.setck(ADM_AdsTracking.paramFlash)), d != a && ADM_AdsTracking.set(b, a, "")
                }
            }
        };
    };
    if (typeof(admaddEventListener) == 'undefined') {
        function admaddEventListener(d, c, a) {
            "addEventListener" in d ? d.addEventListener(c, a) : "attachEvent" in d && d.attachEvent("on" + c, a)
        };
    }
    if (typeof(wPrototype) == 'undefined') {
        var wPrototype = {
            wdHeight: function() {
                var a, b = document;
                "number" == typeof window.innerWidth ? a = window.innerHeight : b.documentElement && b.documentElement.clientHeight ? a = b.documentElement.clientHeight : b.body && b.body.clientHeight && (a = b.body.clientHeight);
                return a
            },
            wdWidth: function() {
                var a, b = document;
                "number" == typeof window.innerWidth ? a = window.innerWidth : b.documentElement && b.documentElement.clientWidth ? a = b.documentElement.clientWidth : b.body && b.body.clientWidth && (a = b.body.clientWidth);
                return a
            },
            getElementTop: function(a) {
                var b =
                    document;
                if (b.getElementById) var c = b.getElementById(a);
                else b.all && (c = b.all[a]);
                if (null != c) {
                    yPos = c.offsetTop;
                    for (tempEl = c.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;
                    return yPos
                }
                return 150
            },
            getElementWidth: function(a) {
                return document.getElementById(a).clientWidth
            },
            getElementLeft: function(a) {
                var b, c = document;
                c.getElementById ? b = c.getElementById(a) : c.all && (b = c.all[a]);
                a = b.offsetLeft;
                for (b = b.offsetParent; null != b;) a += b.offsetLeft, b = b.offsetParent;
                return a
            },
            scrollTop: function() {
                var a =
                    document,
                    b = a.body.scrollTop;
                0 == b && (b = window.pageYOffset ? window.pageYOffset : a.body.parentElement ? a.body.parentElement.scrollTop : 0);
                return b
            },
            scrollLeft: function() {
                var a = document,
                    b = window.pageXOffset ? window.pageXOffset : 0,
                    c = a.documentElement ? a.documentElement.scrollLeft : 0,
                    a = a.body ? a.body.scrollLeft : 0,
                    b = b ? b : 0;
                if (c && (!b || b > c)) b = c;
                return a && (!b || b > a) ? a : b
            },
            bdWidth: function() {
                var a = document;
                return bodyWidth = Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth),
                    Math.max(a.body.clientWidth, a.documentElement.clientWidth))
            },
            bdHeight: function() {
                var a = document;
                return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
            }
        };
    }
    var _ADMFlashDetect = new function() {
        var self = this;
        self.installed = false;
        self.raw = "";
        self.major = -1;
        self.minor = -1;
        self.revision = -1;
        self.revisionStr = "";
        var activeXDetectRules = [{
                "name": "ShockwaveFlash.ShockwaveFlash.7",
                "version": function(obj) {
                    return getActiveXVersion(obj);
                }
            },
            {
                "name": "ShockwaveFlash.ShockwaveFlash.6",
                "version": function(obj) {
                    var version = "6.0.r21";
                    try {
                        obj.AllowScriptAccess = "always";
                        version = getActiveXVersion(obj);
                    } catch (err) {}
                    return version;
                }
            },
            {
                "name": "ShockwaveFlash.ShockwaveFlash",
                "version": function(obj) {
                    return getActiveXVersion(obj);
                }
            }
        ];

        var getActiveXVersion = function(activeXObj) {
            var version = -1;
            try {
                version = activeXObj.GetVariable("$version");
            } catch (err) {}
            return version;
        };

        var getActiveXObject = function(name) {
            var obj = -1;
            try {
                obj = new ActiveXObject(name);
            } catch (err) {
                obj = {
                    activeXError: true
                };
            }
            return obj;
        };

        var parseActiveXVersion = function(str) {
            var versionArray = str.split(","); //replace with regex
            return {
                "raw": str,
                "major": parseInt(versionArray[0].split(" ")[1], 10),
                "minor": parseInt(versionArray[1], 10),
                "revision": parseInt(versionArray[2], 10),
                "revisionStr": versionArray[2]
            };
        };

        var parseStandardVersion = function(str) {
            var descParts = str.split(/ +/);
            var majorMinor = descParts[2].split(/\./);
            var revisionStr = descParts[3];
            return {
                "raw": str,
                "major": parseInt(majorMinor[0], 10),
                "minor": parseInt(majorMinor[1], 10),
                "revisionStr": revisionStr,
                "revision": parseRevisionStrToInt(revisionStr)
            };
        };

        var parseRevisionStrToInt = function(str) {
            return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
        };

        self.majorAtLeast = function(version) {
            return self.major >= version;
        };

        self.minorAtLeast = function(version) {
            return self.minor >= version;
        };

        self.revisionAtLeast = function(version) {
            return self.revision >= version;
        };

        self.versionAtLeast = function(major) {
            var properties = [self.major, self.minor, self.revision];
            var len = Math.min(properties.length, arguments.length);
            for (i = 0; i < len; i++) {
                if (properties[i] >= arguments[i]) {
                    if (i + 1 < len && properties[i] == arguments[i]) {
                        continue;
                    } else {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        };

        self._ADMFlashDetect = function() {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var type = 'application/x-shockwave-flash';
                var mimeTypes = navigator.mimeTypes;
                if (mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description) {
                    var version = mimeTypes[type].enabledPlugin.description;
                    var versionObj = parseStandardVersion(version);
                    self.raw = versionObj.raw;
                    self.major = versionObj.major;
                    self.minor = versionObj.minor;
                    self.revisionStr = versionObj.revisionStr;
                    self.revision = versionObj.revision;
                    self.installed = true;
                }
            } else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
                var version = -1;
                for (var i = 0; i < activeXDetectRules.length && version == -1; i++) {
                    var obj = getActiveXObject(activeXDetectRules[i].name);
                    if (!obj.activeXError) {
                        self.installed = true;
                        version = activeXDetectRules[i].version(obj);
                        if (version != -1) {
                            var versionObj = parseActiveXVersion(version);
                            self.raw = versionObj.raw.replace('Shockwave Flash ', '');
                            self.major = versionObj.major;
                            self.minor = versionObj.minor;
                            self.revision = versionObj.revision;
                            self.revisionStr = versionObj.revisionStr;
                        }
                    }
                }
            }
        }();
    }
    var paramBrowser = {
        screen_Resolution: screen.width + 'x' + screen.height,
        screen_Color: screen.colorDepth,
        hostname: document.domain.replace('www.', ''),
        cookieEnabled: (navigator.cookieEnabled) ? 1 : 0,
        javaEnabled: (navigator.javaEnabled()) ? 1 : 0,
        referrer: document.referrer,
        url: function() {
            var strlocation = (window.location != window.parent.location) ? document.referrer : document.location + "";
            var hostname = this.hostname;
            if (hostname == '') {
                return strlocation;
            } else {
                return strlocation.substring(strlocation.indexOf(hostname) + hostname.length, strlocation.length);
            }
        },
        flashVersion: function() {
            var version = _ADMFlashDetect.major + '.' + _ADMFlashDetect.minor + '.' + _ADMFlashDetect.revisionStr;
            return version;
        },
        zenURL: {
            encode: function(url) {
                var hostname = document.domain;
                if (hostname.indexOf('muachung.vn') != -1) {
                    if (url.indexOf('http://') == -1) {
                        if (typeof(ADS_CHECKER) == 'undefined') {
                            var mc_city = '';
                        } else {
                            var mc_city = ADS_CHECKER.getCookie('mc_city');
                        }
                        var f = ["/ha-noi", "/tp-ho-chi-minh", "/da-nang", "/nha-trang", "/vung-tau", "/hai-phong"];
                        var r = ["/Ha-Noi", "/TP-HCM", "/Da-Nang", "/Khanh-Hoa", "/Ba-Ria-Vung-Tau", "/Hai-Phong"];
                        for (var i = 0; i < f.length; i++) {
                            if (url.indexOf(f[i]) == 0) {
                                url = url.replace(f[i], r[i]);
                                return encodeURIComponent(url);
                            }
                        }
                        var k = {
                            "22": "/Ha-Noi",
                            "29": "/TP-HCM",
                            "15": "/Da-Nang",
                            "68": "/Khanh-Hoa",
                            "26": "/Hai-Phong",
                            "67": "/Ba-Ria-Vung-Tau"
                        };
                        if (mc_city != '' && (typeof(k[mc_city]) != 'undefined')) {
                            url = k[mc_city] + url;

                        }
                    }
                    return encodeURIComponent(url);

                } else {
                    return encodeURIComponent(url);
                }
            },
            decode: function(url) {
                var encoded = url;
                return decodeURIComponent(encoded.replace(/\+/g, " "));
            }
        }
    }
    var _ADMBrowser = {
        Version: function() {
            var version = 999; // we assume a sane browser
            try {
                var userAgen = navigator.userAgent + '';
                if (navigator.appVersion.indexOf("MSIE") != -1) {
                    // bah, IE again, lets downgrade version number
                    version = parseFloat(navigator.appVersion.split("MSIE")[1]);
                }
                if (userAgen.indexOf('Trident') != -1) {
                    var c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgen);
                    if (c && c.length >= 2) {
                        version = parseFloat(c[1]);
                    }
                }
            } catch (e) {

            }

            return version;
        }
    }
    var _admBrV = _ADMBrowser.Version();

    function ADM_TrackingSendChk() {
        //window['__ADMTimeTk']
        if (__ADMwdVis()) {
            __ADMisActive = 1;
        } else {
            __ADMisActive = 0;
        }
        var tkTime = Math.floor((new Date()).getTime() / 1000);
        if (__ADMisActive == 1 || (tkTime - __ADMTimeTk) >= 120) {
            __ADMTimeTk = tkTime;
            /*var img =new Image();
            img.src=window['__ADMTrackingSendUrl']+logposurlview+'&i='+encodeURIComponent('p;'+__admPageloadid+';'+__ADMScrollcounter+';'+__ADMScrollEnd+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr']+';'+(typeof(ADS_CHECKER)=='undefined'?0:1)+';'+__admloadPageId+';'+__admloadPageIdc+_AdmGetGa())+ADM_AdsTracking.getParam();*/
            ADMTrackingsend('p');
        }
        if (_admBrV < 999) {
            chkadmTrackingt = window.setTimeout(
                function(){
                    try{
                        ADM_TrackingSendChk()
                    }catch(e){}
                }
                , 20000);
        } else {
            chkadmTrackingt = window.setTimeout(
                function () {
                    try {
                        ADM_TrackingSendChk()
                    } catch (e) { }
                }
                , 60000);
        }
    }
    var __ADMwdVis = (function() {
        var stateKey, eventKey, keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (stateKey in keys) {
            if (stateKey in document) {
                eventKey = keys[stateKey];
                break;
            }
        }
        return function(c) {
            if (c) document.addEventListener(eventKey, c);
            return !document[stateKey];
        }
    })();

    function ADMTrackingsend(status) {
        var dmnchk = document.domain;
        window._AdmGetGa = function() {
            return ''
        };
        
        window._AdmGetGa = function() {
            var timespeed = '';
            try {
                var a = window.performance || window.webkitPerformance;
                if (a = a && a.timing) {
                    var b = a.navigationStart;
                    timespeed = ';' + [a.loadEventStart - b, a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - b, a.domInteractive - b, a.domContentLoadedEventStart - b].join(';');
                }
                return ';' + ADM_AdsTracking.getCookie('_ga') + timespeed;
            } catch (e) {}
            return '';
        }
        var TrackPvVip=function(){
            var strhdZoneId='';
            var channel='';
            var objExtr={};
            var strExtr='';
            try{
                channel=window.decodeURIComponent(window._ADM_Channel||'');
            }catch(e){}
            try{
                var profileNgoc= ADM_AdsTracking.getCookie('__adm_upl');
                var objProfile;
                if(profileNgoc && profileNgoc!=""){
                 objProfile=JSON.parse(window.atob(profileNgoc));
                 objExtr.prfng=objProfile;
                }
             }catch(e){}
             try{
                var profileCuong= ADM_AdsTracking.getCookie('dtdz');
                if(profileCuong && profileCuong!=""){
                 objExtr.profileid=profileCuong;
                }
             }catch(e){}
            try{
                var strUser=ADM_AdsTracking.getCookie('_ck_user');
                var objUser={};
                if(strUser && strUser.indexOf('{')!=-1){
                    try{
                        objUser=JSON.parse(strUser);
                    }catch(e1){
                    }
                    
                    if(channel!=''){
                        objExtr.channel=channel;   
                    }
                    var chkVip=0;
                    if(typeof(objUser.expiredate)!='undefined'){
                        try{
                            chkVip=((new Date(objUser.expiredate).getTime())- new Date().getTime())>0?1:0;
                        }catch(e){}
                    }
                    objExtr.isvip=chkVip;
                    if(typeof(objUser.id)!='undefined'){
                        objExtr.uid=objUser.id;
                        strExtr=window.btoa(JSON.stringify(objExtr));
                    }
                }else{
                    if(typeof(objExtr.prfng)!="undefined"){
                        strExtr=window.btoa(JSON.stringify(objExtr));
                    }
                }

            }catch(e){

            }
            return strExtr;
        };
        var strExtr=TrackPvVip()||'';
        if (typeof(window['__ADMTrackingSendUrl']) == 'undefined') {
            var url = '';
            url = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//"+checkAdmdomainAds('lg1.logging.admicro.vn')+"/_tracking1.gif?dg=" + __admloadPageIdc;
            url += "&fl=" + paramBrowser.flashVersion();
            url += "&je=" + paramBrowser.javaEnabled;
            url += "&sr=" + paramBrowser.screen_Resolution;
            url += "&sc=" + paramBrowser.screen_Color;
            url += "&hn=" + paramBrowser.hostname;
            url += "&p=" + paramBrowser.zenURL.encode(paramBrowser.url());
            url += "&r=" + ((paramBrowser.referrer == '') ? paramBrowser.referrer : paramBrowser.zenURL.encode(paramBrowser.referrer));
            
            if ("undefined" != typeof _Analytics_Channel && "" != _Analytics_Channel) {
                url += "&cat=" + encodeURIComponent(decodeURIComponent(_Analytics_Channel));
            } else if ("undefined" != typeof _ADM_Channel && "" != _ADM_Channel) {
                url += "&cat=" + encodeURIComponent(decodeURIComponent(_ADM_Channel));
            } else {
                url += "&cat=";
            }
            var __ifr = function() {
                try {
                    return window.self !== window.top
                } catch (a) {
                    return !0
                }
            }();
            __ifr = __ifr ? 1 : 0;

            if (paramBrowser.hostname.indexOf('enbac.com') != -1) {
                g = (ADM_AdsTracking.getCookie('province_id') != '') ? ADM_AdsTracking.getCookie('province_id') : 0;
            }
            if (paramBrowser.hostname.indexOf('rongbay.com') != -1) {
                g = (ADM_AdsTracking.getCookie('cityid') != '') ? ADM_AdsTracking.getCookie('cityid') : 0;
            }
            if (paramBrowser.hostname.indexOf('muachung.vn') != -1) {
                g = (ADM_AdsTracking.getCookie('muachung_cityMC') != '') ? ADM_AdsTracking.getCookie('muachung_cityMC') : 0;
            }
            url += "&g=" + g;
            window['__ADMTrackingSendUrl'] = url;
        }
        var url = window['__ADMTrackingSendUrl'] + logposurlview + '&i=' + encodeURIComponent(status + ';' + __admPageloadid + ';' + window['__ADMScrollcounter'] + ';' + window['__ADMScrollEnd'] + ';' + __ADMisActive + ';' + __ADMMouse + ';' + __ADMTouch + ';' + (wPrototype.wdWidth() + 'x' + wPrototype.wdHeight()) + ';' + window['__ifr'] + ';' + (typeof(ADS_CHECKER) == 'undefined' ? 0 : 1) + ';' + __admloadPageId + ';' + __admloadPageIdc + _AdmGetGa()) + '&rdm=' + Math.random();
        if(strExtr!=''){
            url+='&xtr='+encodeURIComponent(strExtr);
        }
        var ua = navigator.userAgent + '',
            chkBrowser = true;
        if (status == 's') {
            /*if (ua.indexOf('Firefox') != -1) {
                chkBrowser = false;
            }*/
            if (chkBrowser === true) {
                var a = document.createElement("iframe");
                a.src = url + ADM_AdsTracking.getParam();
                a.style.width = "12px";
                a.style.height = "12px";
                a.style.visibility = "hidden";
                a.style.position = 'absolute';
                a.style.left = '0px';
                a.style.bottom = '0px';
                a.style.border = 'none';
                try {
                    if (window.__ADMPolyNonce) {
                        a.setAttribute("script-src", "self");
                        a.setAttribute("nonce", "sclotusinnline");
                    }
                } catch (er) { }
                a.target = "admTrackmain";
                a.name = "admIframeTracking";
                a.id = "admIframeTracking";
                var admdomain = document.domain + '';
                /*if(admdomain.indexOf('soha.vn')!=-1 || admdomain.indexOf('dantri.com.vn')!=-1 || admdomain.indexOf('genk.vn')!=-1 || admdomain.indexOf('gamek.vn')!=-1){
                	AdmonDomReady(function(){
                		document.body.appendChild(a);
                	});
                }else{
                	document.body.appendChild(a);
                }*/
                AdmonDomReady(function() {
                    document.body.appendChild(a);
                });
                var respondMessage = function(e) {

                    //detect url domain not full url. get send data
                    if (e.origin.indexOf('logging.admicro.vn') != -1) {
                        var data = e.data;
                        if (typeof(data) == 'object') {
                            try {

                                if (data[0] == '__CRT') {
                                    data[0] = '__create';
                                }
                                if (data[0] == '__UF') {
                                    data[0] = '__ui';
                                }
                                if (data[0] != '__C') {
                                    ADM_AdsTracking.check(data[0], data[1], '', '/');
                                    //ADM_Storage.setStorage(data[0],data[1],365*(24*60),'/');
                                }

                                //localStorage[data[0]]=data[1];
                            } catch (e) {}
                        }
                    }
                }
                if (window.addEventListener) {
                    window.addEventListener('message', respondMessage, false);
                } else {
                    window.attachEvent('onmessage', respondMessage, false);
                }


            } else {
                //browser support cookie.
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = true;
                a.src = url;
                var c = document.getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c);
            }
        } else {
            var img = new Image();
            img.src = url + ADM_AdsTracking.getParam();
            if (status == 'v') {
                img.onerror = function() {
                    try {
                        var img2 = new Image();
                        img2.src = (img.src + '').replace('lg1.logging.admicro.vn', 'amcdn.vn');
                    } catch (e) {}

                }
            }

        }

    }

    function ADM_TrackingSend() {
        if (typeof(__ADM_TrackingSend) != 'undefined' && __ADM_TrackingSend === true) {
            return false;
        }
        var chkBrowser = ADM_AdsTracking.checkBrowser(),
            url = "",
            g = 0;
        var dmnchk = document.domain;
        window._AdmGetGa = function() {
            return ''
        };
        
        window._AdmGetGa = function() {
            var timespeed = '';
            try {
                var a = window.performance || window.webkitPerformance;
                if (a = a && a.timing) {
                    var b = a.navigationStart;
                    timespeed = ';' + [a.loadEventStart - b, a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart, a.fetchStart - b, a.domInteractive - b, a.domContentLoadedEventStart - b].join(';');
                }
                return ';' + ADM_AdsTracking.getCookie('_ga') + timespeed;
            } catch (e) {
               
            }
            return '';
        }
        
        //url=(dmnchk=='kenh14.vn'?'//lg1.':'//lg.')+"logging.admicro.vn/_tracking1.gif?dg";
        url = "//"+checkAdmdomainAds('lg1.logging.admicro.vn')+"/_tracking1.gif?dg=" + __admloadPageIdc;

        url += "&fl=" + paramBrowser.flashVersion();
        url += "&je=" + paramBrowser.javaEnabled;
        url += "&sr=" + paramBrowser.screen_Resolution;
        url += "&sc=" + paramBrowser.screen_Color;
        url += "&hn=" + paramBrowser.hostname;
        url += "&p=" + paramBrowser.zenURL.encode(paramBrowser.url());
        url += "&r=" + ((paramBrowser.referrer == '') ? paramBrowser.referrer : paramBrowser.zenURL.encode(paramBrowser.referrer));
        if ("undefined" != typeof _Analytics_Channel && "" != _Analytics_Channel) {
            url += "&cat=" + encodeURIComponent(decodeURIComponent(_Analytics_Channel));
        } else if ("undefined" != typeof _ADM_Channel && "" != _ADM_Channel) {
            url += "&cat=" + encodeURIComponent(decodeURIComponent(_ADM_Channel));
        } else {
            url += "&cat=";
        }
        var __ifr = function() {
            try {
                return window.self !== window.top
            } catch (a) {
                return !0
            }
        }();
        __ifr = __ifr ? 1 : 0;

        if (paramBrowser.hostname.indexOf('enbac.com') != -1) {
            g = (ADM_AdsTracking.getCookie('province_id') != '') ? ADM_AdsTracking.getCookie('province_id') : 0;
        }
        if (paramBrowser.hostname.indexOf('rongbay.com') != -1) {
            g = (ADM_AdsTracking.getCookie('cityid') != '') ? ADM_AdsTracking.getCookie('cityid') : 0;
        }
        if (paramBrowser.hostname.indexOf('muachung.vn') != -1) {
            g = (ADM_AdsTracking.getCookie('muachung_cityMC') != '') ? ADM_AdsTracking.getCookie('muachung_cityMC') : 0;
        }

        url += "&g=" + g;
        window['__ifr'] = __ifr;
        window['__ADM_TrackingSend'] = true;
        window['__ADMScrollcounter'] = 0;
        window['__ADMScrollEnd'] = 0;
        window['__ADMTrackingSendUrl'] = url;
        window['__ADMTouch'] = 0;
        window['__ADMMouse'] = 0;
        window['__ADMisActive'] = 0;
        window['__ADMTimeTk'] = Math.floor((new Date()).getTime() / 1000);
        try {
            if (__ADMwdVis()) {
                window['__ADMisActive'] = 1;
            }
        } catch (e) {}
        ADMTrackingsend('s');
        ADMTrackingsend('v');

        admaddEventListener(window, 'scroll', function() {
            window['__ADMScrollcounter'] = window['__ADMScrollcounter'] + 1;
            var intChk = wPrototype.bdHeight() - (wPrototype.scrollTop() + wPrototype.wdHeight() + 100);
            if (intChk < 0) {
                window['__ADMScrollEnd'] = 1;
            }
        });
        admaddEventListener(window, 'blur', function() {
            __ADMisActive = 0;
        });
        admaddEventListener(window, 'focus', function() {
            __ADMisActive = 1;
        });
        if ("ontouchstart" in window) {
            admaddEventListener(document, "touchmove", function(e) {
                __ADMTouch++;
            });
        }
        admaddEventListener(document, "mousemove", function(e) {
            __ADMMouse++;
        });

        window.setTimeout(function() {
            var stateKey, eventKey, stateKeyuse = '',
                keys = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange"
                };
            for (stateKey in keys) {
                if (stateKey in document) {
                    eventKey = keys[stateKey];
                    stateKeyuse = stateKey;
                    break;
                }
            }

            document.addEventListener(eventKey, function() {
                if (!document[stateKeyuse]) {
                    __ADMisActive = 1;
                } else {
                    __ADMisActive = 0;
                }
                ADMTrackingsend('p');
                /*var img=new Image();
                img.src=window['__ADMTrackingSendUrl']+logposurlview+'&i='+ encodeURIComponent('p;'+__admPageloadid+';'+__ADMScrollcounter+';'+__ADMScrollEnd+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr']+';'+(typeof(ADS_CHECKER)=='undefined'?0:1) +';'+__admloadPageId+';'+__admloadPageIdc+_AdmGetGa())+'&rdm='+Math.random()+ADM_AdsTracking.getParam();*/

            });
        }, 5000);
        chkadmTrackingt = window.setTimeout(function() {
            ADM_TrackingSendChk();
        }, 20000);
        if (('beforeunload' in window) || ('onbeforeunload' in window)) {
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                admaddEventListener(window, 'unload', function() {
                    /*var img =new Image();
                    img.src=window['__ADMTrackingSendUrl']+logposurlview+'&i='+ encodeURIComponent('e;'+__admPageloadid+';'+window['__ADMScrollcounter']+';'+window['__ADMScrollEnd']+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr']+';'+(typeof(ADS_CHECKER)=='undefined'?0:1)+';'+__admloadPageId+';'+__admloadPageIdc+_AdmGetGa())+'&rdm='+Math.random()+ADM_AdsTracking.getParam();*/
                    ADMTrackingsend('e');
                });
            } else {
                admaddEventListener(window, 'beforeunload', function() {
                    /*var img =new Image();
                    img.src=window['__ADMTrackingSendUrl']+logposurlview+'&i='+ encodeURIComponent('e;'+__admPageloadid+';'+window['__ADMScrollcounter']+';'+window['__ADMScrollEnd']+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr']+';'+(typeof(ADS_CHECKER)=='undefined'?0:1)+';'+__admloadPageId+';'+__admloadPageIdc+_AdmGetGa())+'&rdm='+Math.random()+ADM_AdsTracking.getParam();
                    */
                    ADMTrackingsend('e');
                });
            }
        }
    }

/*---get dguid and pageload above---*/
/*
    if (typeof(__admloadPageId) == 'undefined') {
        var __admloadPageId = (function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + s4() + s4() +
                s4() + s4() + s4() + s4();
        })();
        if (_admislocalStorage) {
            var __admloadPageIdc = localStorage['__uidac'];
            if (!__admloadPageIdc) {
                localStorage['__uidac'] = __admloadPageId;
                __admloadPageIdc = __admloadPageId;
            }
        } else {
            var __admloadPageIdc = ADM_AdsTracking.getCookie('__uidac');
            if (__admloadPageIdc == '') {
                ADM_AdsTracking.setCookie('__uidac', __admloadPageId, 2000, '');
            }
        }
    }
    */

    var ADM_PPTKSend = ADM_PPTKSend || {};

    ADM_PPTKSend.trackingPopup = function() {
        window.__ADM_TrackingSend = false;
	    window.__admloadPageId = (function guid() {
	            function s4() {
	                return Math.floor((1 + Math.random()) * 0x10000)
	                    .toString(16)
	                    .substring(1);
	            }
	            return s4() + s4() + s4() + s4() +
	                s4() + s4() + s4() + s4();
	    })();
	    __admPageloadid = (new Date()).getTime();
        window.__AdmsendRandom = (function() {
            return '&lsn=' + __admPageloadid + ADM_AdsTracking.getParam();
        })();
        var img = new Image();
        img.src = '//'+checkAdmdomainAds('lg1.logging.admicro.vn')+'/ftest?dg=' + __admloadPageIdc + ADM_AdsTracking.getParam() + '&url=' + encodeURIComponent("http://popup" + document.location.hostname + document.location.pathname) + "&rd=" + Math.random();
        ADM_TrackingSend();
    };
    ADM_TrackingSend();

    function _admloadJs1(c, b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.src = c;
        2 <= arguments.length && (a.onload = b, a.onreadystatechange = function() {
            4 != a.readyState && "complete" != a.readyState || b()
        });
        document.getElementsByTagName("head")[0].appendChild(a)
    }
    if ("undefined" == typeof logposurlviewsend) {
    	try{
    		var ptc = (document.location.protocol == "https:" ? "https:" : "http:");
    		_admloadJs1(ptc+"//static.contineljs.com/core/lgnews.js");
    	}catch(e){

    	}
        window.logposurlviewsend = "sendnews";
        AdmonDomReady(function() {
                try {
                    //if(window.location.hostname != 'b11.channelvn.net' ){ return true};
				var sl = 0;     // vị trí lớn nhất mà scroll tới
				var h = window.innerHeight;   // chiều cao của trình duyệt
				var scrollTimer = -1;
				var leng = 0;
				var id= "[data-check-position]";      // cột mốc để đo
				var mang_the_chan = []; 
				mang_the_chan = document.querySelectorAll(id); // quét các thẻ có thuộc tính [data-check-position]
				leng = mang_the_chan.length;
				var  point = [];
				
				for(var i = 0; i < leng; i++){
					point.push(mang_the_chan[i].offsetTop);
				};
				////// hàm check scroll end
				window.addEventListener("scroll", scroll1);
				function scroll1() {
					if (scrollTimer != -1)
						clearTimeout(scrollTimer);

					scrollTimer = window.setTimeout(function(){scrollFinished();}, 1000);
				}
				function getScrollTop() {
			        var a = document.body.scrollTop;
			        0 == a && (a = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0);
			        return a
			    }
			//=========================
				function scrollFinished() {
					he= getScrollTop() + h;
					if(he > sl){
						sl = he;
						var arrpass = [];
						var si = [];
						for(var i = 0; i < leng; i++ ){
							if(sl > point[i]){
								arrpass.push(i);
							};
						}; 	
						for(var j=0; j < arrpass.length; j++){
							var x = mang_the_chan[j].getAttributeNode("data-check-position").value; 
							var y = point[j];
							si.push(x+':'+y);
						};
						si = encodeURIComponent (si);
						logposurlview = '&sl='+ sl + '&si=' +si; 
						if(arrpass.length == leng){
                            if(typeof(window['__ADMTrackingSendUrl'])!='undefined' && window['__ADMTrackingSendUrl']!=''){
                                img = new Image();
                                img.src=window['__ADMTrackingSendUrl']+logposurlview+'&i='+ encodeURIComponent('p;'+__admPageloadid+';'+window['__ADMScrollcounter']+';'+window['__ADMScrollEnd']+';'+__ADMisActive+';'+__ADMMouse+';'+__ADMTouch+';'+(wPrototype.wdWidth()+'x'+wPrototype.wdHeight())+';'+window['__ifr']+';'+(typeof(ADS_CHECKER)=='undefined'?0:1)+';'+__admloadPageId+';'+__admloadPageIdc)+'&rdm='+Math.random()+ADM_AdsTracking.getParam()
                            }
							
							if(!chkadmTrackingt){
								clearTimeout(chkadmTrackingt)
							};
							chkadmTrackingt = window.setTimeout(function(){ADM_TrackingSendChk();},20000);
						};
					};
				}
                } catch (b) {}
        });
    }
} catch (e) {
    (function() {
        function getCookie(b) {
            return 0 < document.cookie.length && (c_start = document.cookie.indexOf(b + "="), -1 != c_start) ? (c_start = c_start + b.length + 1, c_end = document.cookie.indexOf(";",
                c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
        }
        var __uif = getCookie('__uif');
        var arruid = /__uid:([0-9]+)/.exec(__uif);
        var struid = '';
        if (arruid && arruid.length >= 2) {
            struid = encodeURIComponent(arruid[1]);
        }
        var pt = (document.location.protocol == "https:" ? "https:" : "http:");
        var img1 = new Image();
        img1.src = pt + '//amcdn.vn/blc?lsn=' + window.__admloadPageId + '&dg=' + window.__admloadPageIdc + '&ui=' + struid + '&url=' + encodeURIComponent("http://error3rdcdn" + document.domain + document.location.pathname) + "&rd=" + Math.random();
    })();
}
(function(){
	function amcdnLogpv(){
		try{
			function getCookie(b) {
	            return 0 < document.cookie.length && (c_start = document.cookie.indexOf(b + "="), -1 != c_start) ? (c_start = c_start + b.length + 1, c_end = document.cookie.indexOf(";",
	                c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
	        }
			var  url = "",g=0;
			var __uif=getCookie('__uif');
			var arruid=/__uid:([0-9]+)/.exec(__uif);
			var struid='';
			if(arruid && arruid.length>=2){
				struid=encodeURIComponent(arruid[1]);
			}

			//url=(dmnchk=='kenh14.vn'?'//lg1.':'//lg.')+"logging.admicro.vn/_tracking1.gif?dg";
			url="https://amcdn.vn/cmd_track?lsn="+window.__admloadPageId+"&dg="+window.__admloadPageIdc;
			url+='&ui='+struid;
			url += "&fl="+paramBrowser.flashVersion();
			url += "&je="+paramBrowser.javaEnabled;
			url += "&sr="+paramBrowser.screen_Resolution;
			url += "&sc="+paramBrowser.screen_Color;
			url += "&hn="+paramBrowser.hostname;
			url += "&p="+paramBrowser.zenURL.encode(paramBrowser.url());	
			url += "&r="+((paramBrowser.referrer=='')?paramBrowser.referrer:paramBrowser.zenURL.encode(paramBrowser.referrer));	
			if("undefined" != typeof _Analytics_Channel && "" != _Analytics_Channel){
				url+="&cat="+encodeURIComponent(decodeURIComponent(_Analytics_Channel));
			}else if("undefined" != typeof _ADM_Channel && "" != _ADM_Channel){
				url+="&cat="+encodeURIComponent(decodeURIComponent(_ADM_Channel));
			}else{
				url+="&cat=";
			}
			url+="&vp="+wPrototype.wdWidth()+'x'+wPrototype.wdHeight();
			var img =new Image();
			img.src=url;
		}catch(e){
		}
	}
	amcdnLogpv();
})();

AdmonDomReady(function(){function c(){if("undefined"==typeof ADS_CHECKER&&(("undefined"!=typeof admerrorload&&1==admerrorload)||("undefined"!=typeof arferrorload&&1==arferrorload))&&0==b){b=!0;try{d(["\x2f", "\x2f", "\x73", "\x74", "\x61", "\x74", "\x69", "\x63", "\x2e", "\x63", "\x6f", "\x6e", "\x74", "\x69", "\x6e", "\x65", "\x6c", "\x6a", "\x73", "\x2e", "\x63", "\x6f", "\x6d", "\x2f", "\x63", "\x6f", "\x72", "\x65", "\x2f", "\x63", "\x6f", "\x72", "\x65", "\x63", "\x6f", "\x6e", "\x74", "\x69", "\x6e", "\x65", "\x6c", "\x6a", "\x73", "\x2e", "\x6a", "\x73"].join(''))}catch(e){}}else"undefined"==typeof ADS_CHECKER&&window.setTimeout(function(){c()},500)}var d=function(c,b){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=c;2<=arguments.length&&(a.onload=b,a.onreadystatechange=function(){4!=a.readyState&&"complete"!=a.readyState||b()});document.getElementsByTagName("head")[0].appendChild(a)},
b=!1;c()});






