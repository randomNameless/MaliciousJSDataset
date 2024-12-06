/*global ST, swfobject, ActiveXObject */

// based on code from http://quirksmode.org/js/detect.html

ST.BrowserDetect = (function() {

    var dataBrowser = [
        {
            string: navigator.userAgent,
            subString: "RIM Tablet OS",
            identity: "BlackBerry",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "BB10",
            identity: "BlackBerry",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "BlackBerry",
            identity: "BlackBerry",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {   // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {   // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ];

    var dataOS = [
        {
            string: navigator.userAgent,
            subString: "Windows Phone",
            identity: "WindowsPhone",
            versionSearch: "Windows Phone"
        },
        {
            string: navigator.userAgent,
            subString: "Nokia",
            identity: "Nokia"
        },
        {
            string: navigator.userAgent,
            subString: "RIM Tablet OS",
            identity: "BlackBerryPlaybook",
            versionSearch: "RIM Tablet OS"
        },
        {
            string: navigator.userAgent,
            subString: "BB10",
            identity: "BlackBerry",
            versionSearch: "B"
        },
        {
            string: navigator.userAgent,
            subString: "BlackBerry",
            identity: "BlackBerry",
            versionSearch: "BlackBerry; U; BlackBerry"
        },
        {
            string: navigator.userAgent,
            subString: "Android",
            identity: "Android"
        },
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone",
            versionSearch: "OS"
        },
        {
            string: navigator.userAgent,
            subString: "iPad",
            identity: "iPad",
            versionSearch: "OS"
        },
        {
            string: navigator.userAgent,
            subString: "iPod",
            identity: "iPod",
            versionSearch: "OS"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ];

    var versionSearchString = "";

    function searchString(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) !== -1) {
                    return data[i].identity;
                }
            } else if (dataProp) {
                return data[i].identity;
            }
        }
        return null;
    }

    function searchVersion(dataString) {
        var index = dataString.indexOf(versionSearchString);
        if (index === -1) {
            return null;
        }
        return parseFloat(dataString.substring(index + versionSearchString.length + 1));
    }

    var browser = searchString(dataBrowser) || "An unknown browser";
    var version = searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "an unknown version";
    versionSearchString = "";
    var OS = searchString(dataOS) || "an unknown OS";
    var osVersion = searchVersion(navigator.userAgent) || 'an unknown version';

    // plugins detection
    function findNavPlugin(q) {
        var r = q.constructor === String ? q : q.join(".*");
        var regex = new RegExp(".*" + r + ".*", "i");
        var nav = navigator;
        for (var i = 0, l = nav.plugins.length; i < l; i++) {
            if (regex.test(nav.plugins[i].description) ||
                regex.test(nav.plugins[i].name)) {
                return nav.plugins[i];
            }
        }
        return false;
    }

    function inNavMimeTypes(mtype) {
        var nav = navigator;
        var mtypes;
        if (typeof mtype === "string") {
            mtypes = [mtype];
        } else {
            mtypes = mtype;
        }

        if (nav.mimeTypes && nav.mimeTypes.length > 0) {
            for (var i = 0, l = mtypes.length; i < l; i++) {
                var str = mtypes[i];
                for (var ii = 0, ll = nav.mimeTypes.length; ii < ll; ii++) {
                    if (nav.mimeTypes[ii].type.toLowerCase() === str) {
                        return nav.mimeTypes[ii].enabledPlugin;
                    }
                }
            }
        }

        return false;
    }

    function isNum(n) {
        return (typeof n !== "string" ? false : (/\d/).test(n));
    }

    function toNum(s, regex) {
        if (!isNum(s)) {
            return null;
        }
        var a;
        if (typeof regex === "undefined") {
            a = /[\d][\d\.\_,-]*/.exec(s);
        } else {
            a = (new RegExp(regex)).exec(s);
        }
        return a ? a[0].replace(/[\.\_-]/g, ",") : null;
    }

    function getActiveXObject(objStr, retObj) {
        var axo = null;
        var worked = false;
        try {
            axo = new window.ActiveXObject(objStr);
            worked = true;
        } catch (err) {
        }
        if (!retObj) {
            delete axo;
            return worked;
        }

        return axo;
    }

    function isActiveXEnabled() {
        var progid = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM",
            "ShockwaveFlash.ShockwaveFlash", "TDCCtl.TDCCtl", "Shell.UIHelper",
            "Scripting.Dictionary", "wmplayer.ocx"];
        var activeXEnabled = false;
        for (var i = 0, l = progid.length; i < l; i++) {
            if (getActiveXObject(progid[i])) {
                activeXEnabled = true;
                break;
            }
        }
        return activeXEnabled;
    }

    // check whether activeX is enabled
    var activeXEnabled = isActiveXEnabled();

    function createObject(mimetype) {
        function applyStyle(el) {
            if (!el.style) {
                return;
            }

            el.style.border = "0px";
            el.style.padding = "0px";
            el.style.margin = "0px";
            el.style.fontSize = "4px";
            el.style.height = "4px";
            el.style.visibility = "visible";
            if (el.tagName && el.tagName.toLowerCase() === "div") {
                el.style.width = "100%";
                el.style.display = "block";
            } else if (el.tagName && el.tagName.toLowerCase() === "span") {
                el.style.width = "1px";
                el.style.display = "inline";
            }
        }

        var bodyEl = document.body || document.getElementsByTagName("body")[0];
        var html = '<object width="1" height="1" type="' + mimetype + '"></object>';

        var ctEl = document.createElement("div");
        bodyEl.appendChild(ctEl);
        var spanEl = document.createElement("span");
        ctEl.appendChild(spanEl);
        spanEl.innerHTML = html;
        applyStyle(spanEl);

        return spanEl.firstChild;
    }

    function removeObject(objEl) {
        var bodyEl = (document.body || document.getElementsByTagName("body")[0]);
        bodyEl.removeChild(objEl.parentNode.parentNode);
    }


    function detectWMP() {
        var mimetypes = ["application/x-mplayer2", "application/asx",
            "application/x-ms-wmp"];
        var progId = "wmplayer.ocx";
        var version = null, installed = false, type = null;

        if (browser === "Explorer") {
            var axo = getActiveXObject(progId, true);
            if (axo) {
                version = axo.versionInfo;
                installed = true;
                delete axo;
            }
        } else {
            if (inNavMimeTypes(mimetypes)) {
                if (findNavPlugin(["Windows", "Media", "(Plug-in|Plugin)"])) {
                    installed = true;
                }

                if (OS === "Mac" || OS === "iPhone/iPod") {
                    if (findNavPlugin(["Flip4Mac", "Windows", "Media"])) {
                        installed = true;
                        type = "flip4mac";
                    }
                }

                if (findNavPlugin(["Windows", "Media", "Firefox Plugin"])) {
                    var objEl = createObject(mimetypes[0]);
                    if (objEl) {
                        version = objEl.versionInfo;
                        installed = true;
                        removeObject(objEl);
                    }
                }

                // TODO: check for totem in linux
            }
        }

        if (installed) {
            return {
                name: "wmp",
                version: version,
                scriptable: version ? true : false,
                type: type
            };
        }

        return false;
    }

    function detectReal() {
        var mimetypes = ["audio/x-pn-realaudio-plugin"];
        var progIds = [
            'rmocx.RealPlayer G2 Control',
            'rmocx.RealPlayer G2 Control.1',
            'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
            'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
            'RealPlayer'
        ];
        var version = null, installed = false, type = null, scriptable = false;

        if (browser === "Explorer") {
            var e;
            for (var i = 0, l = progIds.length; i < l; i++) {
                try {
                    var axo = getActiveXObject(progIds[i], true);
                    if (axo) {
                        try {
                            version = axo.GetVersionInfo();
                            scriptable = true;
                            installed = true;
                        } catch (err) {
                        }

                        delete axo;
                        break;
                    }
                } catch (err) {

                }
            }
        } else {
            if (inNavMimeTypes(mimetypes)) {
                if (inNavMimeTypes("application/vnd.rn-realplayer-javascript")) {
                    installed = true;
                    scriptable = true;
                }
                if (findNavPlugin("RealPlayer") || findNavPlugin("Player Version")) {
                    installed = true;
                    scriptable = true;
                }
                // TODO: get version info
            }
        }

        if (installed) {
            return {
                name: "real",
                version: version,
                type: type,
                scriptable: scriptable
            };
        }

        return null;
    }

    function detectSilverlight() {
        //Based on function .isInstalled(version) of silverlight.js (http://archive.msdn.microsoft.com/silverlightjs)
        var version = null;
        try {
            var tryNS = false;

            if (window.ActiveXObject) {
                try {
                    var control = new ActiveXObject('AgControl.AgControl');
                    // Test versions, from 1 up to 7 (latest at the time of writing was 5, testing two more to anticipate the future ;)
                    for (var i = 1; i < 7; i++) {
                        if (control.IsVersionSupported(i + ".0")) {
                            version = i + ".0";
                        }
                    }

                    control = null;
                }
                catch (e) {
                    tryNS = true;
                }
            } else {
                tryNS = true;
            }
            if (tryNS) {
                var plugin = navigator.plugins["Silverlight Plug-In"];
                if (plugin) {
                    version = plugin.description;
                    if (version === "1.0.30226.2") {
                        version = "2.0.30226.2";
                    }
                }
            }
        }
        catch (e) {
        }

        if (version) {
            return {
                name: "silverlight",
                version: version,
                type: null,
                scriptable: true
            };
        }

        return null;
    }

    function detectQT() {
        var mimetypes = ["video/quicktime", "application/x-quicktimeplayer",
            "image/x-macpaint", "image/x-quicktime"];
        var progId = "QuickTimeCheckObject.QuickTimeCheck.1";
        var progId0 = "QuickTime.QuickTime";
        var version = null, installed = false, type = null, scriptable = true;

        if (browser === "Explorer") {
            if (getActiveXObject(progId0)) {
                installed = true;
                // TODO: look at codebaseSearch from PluginDetect to
                // get version
            } else {
                var axo = getActiveXObject(progId, true);
                if (axo && axo.QuickTimeVersion) {
                    var s = axo.QuickTimeVersion.toString(16);
                    version = s.charAt(0) + "." + s.charAt(1) + "." + s.charAt(2);
                    installed = true;
                }
            }
        } else {
            if (inNavMimeTypes(mimetypes)) {
                var pl = findNavPlugin(["QuickTime", "(Plug-in|Plugin)"]);
                if (pl && pl.name) {
                    version = toNum(pl.name);
                    installed = true;
                    // TODO: check for totem in linux
                    if (OS === "Linux") {
                        scriptable = false;
                    }
                }
            }
        }

        if (installed) {
            return {
                name: "qt",
                version: version,
                scriptable: scriptable,
                type: type
            };
        }

        return null;
    }

    function detectFlash() {
        if (!swfobject) {
            return null;
        }

        var fv = swfobject.getFlashPlayerVersion();
        if (fv && fv.major >= 8) {
            return {
                name: "flash",
                version: fv.major,
                type: null,
                scriptable: true
            };
        }

        return null;
    }

    function detectRTMP() {
        // TODO: Decouple "real plugins" from player "plugins" so
        // that two different plugins may have the same "real plugin" requirement
        if (!swfobject) {
            return null;
        }

        var fv = swfobject.getFlashPlayerVersion();
        if (fv && fv.major >= 9) {
            return {
                name: "rtmp",
                version: fv.major,
                type: null,
                scriptable: true
            };
        }

        return null;
    }

    function detectPopup() {
        if (window.open) {
            return {
                name: "popup",
                version: null,
                type: null,
                scriptable: false
            };
        }

        return null;
    }

    function detectHTML5() {
        if ((OS === 'Windows') || (OS === 'Mac') || (OS === 'Linux')) {
          if (browser === 'Firefox' ||
              browser === 'Chrome' ||
              browser === 'Explorer' ||
              browser === 'Safari') {
              return {
                  'name': 'html5'
              };
          }
        }
        if (OS === 'iPhone' ||
            OS === 'iPad' ||
            OS === 'iPod') {
            return {
                'name': 'html5'
            };
        }
        if (OS === 'Android') {
            if (osVersion >= 4) {
              return {
                  'name': 'html5'
              };
            }
        }
        if (OS.substring(0, 10).toLowerCase() === 'blackberry') {
            if (version > 7) {
              return {
                  'name': 'html5'
              };
            }
        }
        if (OS === 'WindowsPhone') {
            return {
                'name': 'html5'
            };
        }
        return null;
    }

    function detectLinkOpen() {
        var isOldAndroid = (OS === 'Android' && osVersion < 4);
        var isOldBlackBerry = (
          OS.substring(0, 10).toLowerCase() === 'blackberry' && version <= 7
        );
        var isNokia = (OS === 'Nokia');
        if (isOldAndroid || isOldBlackBerry || isNokia) {
            return {
                'name': 'linkOpen'
            };
        }
        return null;
    }

    function detectPlugins() {
        var res, ps = {};

        res = detectWMP();
        if (res) {
            ps[res.name] = res;
        }

        res = detectQT();
        if (res) {
            ps[res.name] = res;
        }

        res = detectReal();
        if (res) {
            ps[res.name] = res;
        }

        res = detectFlash();
        if (res) {
            ps[res.name] = res;

            // JWPlayer uses flash
            // TODO: It also works with html5 in IOs and some Androids but we have to check how it works
            ps.hls = { name: "hls" };
        }

        res = detectRTMP();
        if (res) {
            ps[res.name] = res;
        }

        res = detectPopup();
        if (res) {
            ps[res.name] = res;
        }

        res = detectHTML5();
        if (res) {
            ps[res.name] = res;
        }

        res = detectLinkOpen();
        if (res) {
            ps[res.name] = res;
        }

        res = detectSilverlight();
        if (res) {
            ps[res.name] = res;
        }

        return ps;
    }

    var plugins = detectPlugins();

    return {
        browser: browser,
        version: version,
        OS: OS,
        OSVersion: osVersion,
        plugins: plugins,

        // methods
        inNavMimeTypes: inNavMimeTypes
    };

})();