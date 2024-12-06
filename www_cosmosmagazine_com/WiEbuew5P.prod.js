
// ATM Build: QWyZmzLYw
"use strict";
var adnMeta = adnMeta || {};
var adn = adn || {};
adn.calls = adn.calls || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
window.atm = window.atm || {};
atm.queue = atm.queue || [];
atm.events = atm.events || {};
atm.data = atm.data || {};
atm.transitData;
atm.browser = atm.browser || {};
atm.ads = atm.ads || {};
atm.ortb2 = atm.ortb2 || {};
atm.containers = atm.containers || {};
atm.containerFunctions = atm.containerFunctions || {};
atm.GLOBALS = atm.GLOBALS || {};
atm.haltedTags = atm.haltedTags || [];
atm.adUnits = atm.adUnits || [];
atm.adUnitAliases = atm.adUnitAliases || [];
atm.prebid = atm.prebid || {
    units: [],
    mappedUnits: {},
    aliases: [],
    map: {}
};
atm.eventList = ['consent.change', 'consent.saved', 'event',];


try {

    (function (atm, adn, doc, win) {
        var CONTAINER_ID = 'WiEbuew5P';
        atm.containerFunctions[CONTAINER_ID] = atm.containerFunctions[CONTAINER_ID] || {}
        "use strict";
        atm.cookie = (function () {
            var pairs = document.cookie.split(";");
            var cookies = {};
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split("=");
                cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
            }
            return cookies;
        })();
        atm.localStorage = (function () {
            var values = {};
            var keys = Object.keys(localStorage);
            for (var i = 0; i < keys.length; i++) {
                try {
                    values[keys[i]] = JSON.parse(localStorage[keys[i]]);
                }
                catch (e) {
                    values[keys[i]] = localStorage[keys[i]];
                }
            }
            return values;
        })();
        atm.browser = window.location;
        atm.browser.consent = (localStorage.getItem('adn-consent') || localStorage.getItem('atm-consent'))
            ? JSON.parse(localStorage.getItem('adn-consent') || localStorage.getItem('atm-consent'))
            : {
                time: new Date().getTime(),
                tc: false,
                given: false,
                purposes: [],
                specialFeatures: [],
                vendors: [],
                legIntPurposes: [],
                adnuntiusPurposes: [],
                stack: false,
            };
        atm.browser.consent.timeSinceConsent = new Date().getTime() - atm.browser.consent.time;
        atm.page = atm.page || {};
        atm.page.meta = (function () {
            var metaObject = {};
            var metaData = document.getElementsByTagName("meta");
            var metaDataArray = [].slice.call(metaData);
            metaDataArray.forEach(meta => {
                var name = meta.name || meta.getAttribute('property') || meta.getAttribute('http-equiv');
                if (name)
                    metaObject[name] = meta.content;
            });
            return metaObject;
        })();
        
        atm.containers[CONTAINER_ID] = {
            "id": "WiEbuew5P",
            "data": {
                "geo": false,
                "gdpr": false,
                "cssAdd": true,
                "position": "overlay",
                "cssOverride": true,
                "gdprChoiceButton": true
            },
            "prebid": {
                "loadPrebidJs": false,
                "units": {
                    "cY3Y6eiYp": {
                        "code": "Leaderboard",
                        "bids": [
                            {
                                "bidder": "medianet",
                                "params": {
                                    "cid": "8CU67QH2U",
                                    "crid": "687111187"
                                }
                            },
                            {
                                "bidder": "minutemedia",
                                "params": {
                                    "org": "01gyw5nd08w2",
                                    "placementId": "1"
                                }
                            },
                            {
                                "bidder": "triplelift",
                                "params": {
                                    "inventoryCode": "cosmosmagazine_728x90_970x90_desktop"
                                }
                            },
                            {
                                "bidder": "nextMillennium",
                                "params": {
                                    "placement_id": "43975"
                                }
                            },
                            {
                                "bidder": "ix",
                                "params": {
                                    "siteId": "1031134"
                                }
                            }
                        ],
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [
                                        728,
                                        90
                                    ],
                                    [
                                        970,
                                        90
                                    ]
                                ]
                            }
                        }
                    },
                    "Oouni9Po8": {
                        "code": "In-Content_Box_Desktop",
                        "bids": [
                            {
                                "bidder": "medianet",
                                "params": {
                                    "cid": "8CU67QH2U",
                                    "crid": "374446387"
                                }
                            },
                            {
                                "bidder": "minutemedia",
                                "params": {
                                    "org": "01gyw5nd08w2",
                                    "placementId": "2"
                                }
                            },
                            {
                                "bidder": "triplelift",
                                "params": {
                                    "inventoryCode": "cosmosmagazine_300x250_incontent_desktop"
                                }
                            },
                            {
                                "bidder": "nextMillennium",
                                "params": {
                                    "placement_id": "45252"
                                }
                            }
                        ],
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [
                                        300,
                                        250
                                    ]
                                ]
                            }
                        }
                    },
                    "MguHNgubq": {
                        "code": "Right Rail",
                        "bids": [
                            {
                                "bidder": "medianet",
                                "params": {
                                    "cid": "8CU67QH2U",
                                    "crid": "528422547"
                                }
                            },
                            {
                                "bidder": "triplelift",
                                "params": {
                                    "inventoryCode": "cosmosmagazine_300x250_300x600_desktop"
                                }
                            },
                            {
                                "bidder": "minutemedia",
                                "params": {
                                    "org": "01gyw5nd08w2",
                                    "placementId": "3"
                                }
                            },
                            {
                                "bidder": "nextMillennium",
                                "params": {
                                    "placement_id": "45253"
                                }
                            },
                            {
                                "bidder": "ix",
                                "params": {
                                    "siteId": "1031133"
                                }
                            }
                        ],
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [
                                        300,
                                        250
                                    ],
                                    [
                                        300,
                                        600
                                    ]
                                ]
                            }
                        }
                    },
                    "7QAiEV6R-": {
                        "code": "In-Content_Box_Mobile",
                        "bids": [
                            {
                                "bidder": "triplelift",
                                "params": {
                                    "inventoryCode": "cosmosmagazine_300x250_mobile"
                                }
                            },
                            {
                                "bidder": "minutemedia",
                                "params": {
                                    "org": "01gyw5nd08w2",
                                    "placementId": "4"
                                }
                            },
                            {
                                "bidder": "medianet",
                                "params": {
                                    "cid": "8CU67QH2U",
                                    "crid": "204426624"
                                }
                            },
                            {
                                "bidder": "nextMillennium",
                                "params": {
                                    "placement_id": "43978"
                                }
                            },
                            {
                                "bidder": "ix",
                                "params": {
                                    "siteId": "1031135"
                                }
                            }
                        ],
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [
                                        300,
                                        250
                                    ]
                                ]
                            }
                        }
                    },
                    "RmA3cWeRQ": {
                        "code": "Adhesion",
                        "bids": [
                            {
                                "bidder": "medianet",
                                "params": {
                                    "cid": "8CU67QH2U",
                                    "crid": "324227749"
                                }
                            },
                            {
                                "bidder": "triplelift",
                                "params": {
                                    "inventoryCode": "cosmosmagazine_320x50_mobile"
                                }
                            },
                            {
                                "bidder": "minutemedia",
                                "params": {
                                    "org": "01gyw5nd08w2",
                                    "placementId": "5"
                                }
                            },
                            {
                                "bidder": "nextMillennium",
                                "params": {
                                    "placement_id": "43979"
                                }
                            },
                            {
                                "bidder": "ix",
                                "params": {
                                    "siteId": "1031136"
                                }
                            }
                        ],
                        "mediaTypes": {
                            "banner": {
                                "sizes": [
                                    [
                                        300,
                                        50
                                    ],
                                    [
                                        320,
                                        50
                                    ]
                                ]
                            }
                        }
                    }
                },
                "map": {
                    "00000000001fc2bd": "cY3Y6eiYp",
                    "000000000023d099": "cY3Y6eiYp",
                    "00000000001fc2ca": "7QAiEV6R-",
                    "0000000000208e40": "Oouni9Po8",
                    "0000000000208e41": "Oouni9Po8",
                    "000000000024c23f": "MguHNgubq",
                    "00000000001fc2cc": "MguHNgubq",
                    "000000000023d09a": "7QAiEV6R-",
                    "00000000001fc737": "RmA3cWeRQ"
                },
                "analytics": false,
                "config": {
                    "gdpr": true,
                    "custom": "pbjs.que.push(function () {\n\n    pbjs.setConfig({\n       enableTIDs: true,\n       allowActivities: {\n           accessDevice: {\n               default: true,\n           },\n           transmitTid:{\n               default: true,\n           }\n       },\n       consentManagement: { gdpr: {} }\n    });\n\n    pbjs.bidderSettings = {\n        standard: {\n             storageAllowed: true\n        }\n    };\n\n});"
                },
                "requester": {
                    "siteId": "pjkqbjqm9zvdsv0q",
                    "system": "adnuntius"
                },
                "aliases": []
            },
            "tagType": "legacy",
            "cmp": {
                "css": ".adn-window{font-family:inherit!important;border:1px solid #ccc!important;z-index:999}.adn-window button{box-shadow:none!important}.adn-window a{color:#0065ae!important;font-weight:600}.adn-window .adn-header{font-size:18px;font-weight:700;background:#f7f7f7!important;border-bottom:1px solid #ccc!important}.adn-window .adn-footer{background:#f7f7f7!important;border-top:1px solid #ccc!important;padding:20px 25px}.adn-window .adn-footer button{margin:0 5px!important}.adn-window h3{font-weight:600}@media screen and (max-width:800px){.adn-window .adn-content{padding:10px 15px}.adn-window h3,.adn-window p{font-size:15px!important}.adn-window button{font-size:15px!important;padding:6px 8px!important}.adn-window .adn-header{padding:10px 15px}}.adn-message{left:auto!important;right:20px!important}.adn-message .adn-content button{background:#07c;border:1px solid #07c;margin-top:12px;font-weight:600}.adn-message .adn-content button+button{background:#fff;border:1px solid #07c;color:#0065ae;font-weight:400}@media screen and (max-width:800px){.adn-message{left:10px!important;bottom:10px!important;width:calc(100% - 20px)!important;max-width:none!important}.adn-message button{width:100%!important;float:none!important;margin:12px 0 0 0!important}.adn-message button+button{margin:12px 0!important}}.adn-overlay .adn-listItem{border-bottom:1px solid #eee}.adn-overlay .adn-listItem:last-child{border-bottom:none}.adn-overlay .adn-listItem .adn-detail{color:#0065ae;padding:0!important;font-size:16px;line-height:1.5}.adn-overlay .adn-listItem .adn-outline{border:none;padding:none;line-height:1.5;background:#fff}.adn-overlay .adn-listItem .adn-detail:focus,.adn-overlay .adn-listItem .adn-outline:focus{outline:0}.adn-window .adn-footer{display:flex;flex-direction:row-reverse}.adn-window .adn-footer button{flex-grow:1}.adn-window .adn-footer button{background:#07c;border:1px solid #07c;color:#fff;font-weight:600}.adn-window .adn-footer .adn-blank{border:1px solid #ccc;background:#fff;box-shadow:none;color:#444;font-weight:400}.adn-window .adn-footer .adn-outline{border:1px solid #07c;color:#0065ae;background:#fff;font-weight:400}.adn-window h2{font-size:18px;font-weight:700;margin-bottom:12px}@media screen and (max-width:800px){.adn-overlay .adn-window{width:100%;height:100%;box-shadow:none!important;border-radius:0!important;border:none!important}.adn-overlay .adn-window>div{display:flex;flex-direction:column;height:100%}.adn-purpose-container,.adn-vendors-container{max-height:none!important;flex:1}.adn-window .adn-footer{display:flex;flex-direction:row;flex-wrap:wrap;padding:15px 10px 76px 10px}.adn-window .adn-footer button{margin-bottom:12px!important}.adn-window .adn-footer button:first-child{flex-basis:100%}.adn-window .adn-footer .adn-outline{display:none}.adn-window .adn-listItem{padding:10px 15px}.adn-overlay .adn-listItem>div{overflow:visible}.adn-overlay .adn-window .adn-listItem h3{width:calc(100vw - 30px)}}",
                "tcf": true,
                "addCss": false,
                "layout": "messageBox",
                "enabled": true,
                "adnuntius": false,
                "editButton": false,
                "reloadTime": 180,
                "languageCode": "Yg2Y1swjI",
                "pageviewTrigger": true,
                "removeDefaultCss": false
            },
            "templates": {
                "messageBox": "\n        <div class=\"adn-window adn-message\">\n            <div class=\"adn-header\">\n                {{title}}\n            </div>\n            <div class=\"adn-content\">\n                <p>{{text}}</p>\n            </div>\n            <div class=\"adn-footer\">\n                <button onClick=\"atm.consent.saveAll(true)\" >{{accept}}</button>\n                <button onClick=\"atm.consent.render.settings('adn-overlay', 'settings')\" >{{settings}}</button>\n            </div>\n        </div>\n    ",
                "overlay": "\n        <div class=\"adn-overlay\">\n            <div id=\"adn-overlay\" class=\"adn-window adn-window-overlay\">\n            </div>\n        </div>\n    ",
                "settings": "\n        <div class=\"adn-header\">\n            {{title}}\n            {{text}}\n        </div>\n        <div class=\"adn-purpose-container\">\n            {{adnuntiusPurposes}}\n            {{purposesList}}\n            {{specialFeaturesList}}\n        </div>\n        <div class=\"adn-footer\">\n            <button onClick=\"atm.consent.save()\" >{{save}}</button>\n            <button class=\"adn-outline\" onClick=\"atm.consent.setAll(true)\" >{{acceptAll}}</button>\n            <button class=\"adn-outline\" onClick=\"atm.consent.setAll(false)\" >{{rejectAll}}</button>\n            {{tcfButtons}}\n        </div>\n    ",
                "listItem": "\n        <div class=\"adn-listItem\">\n            <div>\n                <h3>{{purposeTitle}}</h3>\n                <p>{{purposeText}}</p>\n            </div>\n            <label class=\"adn-switch\">\n                <input class=\"adn-switch\" type=\"checkbox\" onClick=\"atm.consent.update('{{listType}}','{{itemId}}', this.checked)\" {{checked}} {{forced}} />\n                <span class=\"adn-slider round\"></span>\n            </label>\n        </div>\n    ",
                "vendorList": "\n        <div class=\"adn-header\">\n            {{title}}\n        </div>\n        <div class=\"adn-vendors-container\">\n            {{list}}\n        </div>\n        <div class=\"adn-footer\">\n            <button class=\"adn-outline\" onClick=\"atm.consent.setAll(true, '{{listType}}')\" >{{acceptAll}}</button>\n            <button class=\"adn-outline\" onClick=\"atm.consent.setAll(false, '{{listType}}')\" >{{rejectAll}}</button>\n            <button style=\"float:left\" onClick=\"atm.consent.render.settings('adn-overlay')\" >{{back}}</button>\n        </div>\n    ",
                "editButton": "\n        <div class=\"adn-editButton\" onClick=\"atm.consent.init('settings', true)\">\n            {{title}}\n        </div>\n    "
            },
            "variables": [],
            "variableMap": {},
            "tags": {
                "lO43V6vnl": {
                    "purposes": [],
                    "type": "javascript",
                    "content": {
                        "url": "https://t.atmng.io/pb/prebid8.28.0.js",
                        "id": "lO43V6vnl"
                    }
                }
            }
        }
        try {
        
        } catch (e) {
            throw new Error('Custom variables are not valid')
        }
        
        
        "use strict";
        atm.log = function (type, message, ctx) {
            var makeBlock = function (color) {
                return 'background: ' + color + '; padding: 2px 10px; border-radius: 2px; color: rgba(0,0,0,.7); border-bottom: 1px solid rgba(0,0,0,.3);border-top: 1px solid rgba(255,255,255,.6);margin-left: 5px;';
            };
            var logType = 'log';
            var eventType = '';
            var color = '#79e1ec';
            if (type == 'warn' || type == 'error') {
                logType = type;
            }
            else {
                eventType = '%c' + type;
            }
            switch (type) {
                case 'event':
                    color = "#0aff82";
                    break;
                case 'tag':
                    color = "#ee49d1";
                    break;
                case 'consent':
                    color = "#af83ff";
                    break;
            }
            console[logType]('%cATM' + eventType, makeBlock("#00e6ff"), (eventType != '') ? makeBlock(color) : '', message || '', ctx || '');
        };
        atm.debug = function (type, message, ctx) {
            if (win.location.search.indexOf('atm_debug') > -1) {
                atm.log(type, message, ctx);
            }
        };
        
        "use strict";
        atm.utils = {
            createUuid: function () {
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            },
            getCookie: function (cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            },
            replaceTags: function (str, tags) {
                var tagNames = Object.keys(tags);
                for (var i = 0; i < tagNames.length; i++) {
                    var tag = tagNames[i];
                    var pattern = "{{" + tag + "}}";
                    str = str.replace(new RegExp(pattern, "g"), tags[tag]);
                }
                return str;
            },
            replaceTag: function (str, search, replace) {
                return str.replace(new RegExp(search, 'g'), replace);
            },
            remove: function (target) {
                var removeElement = target || 'adn-overlay';
                atm.utils.forEachClass(removeElement, function (el) {
                    el.remove();
                });
            },
            addScript: function (src, targetId, fn, options) {
                var script = doc.createElement("script");
                script.type = "text/javascript";
                script.src = src;
                if (options && options.async)
                    script.async = true;
                if (options && options.defer)
                    script.defer = true;
                if (options && options.type)
                    script.type = options.type;
                if (options && options.nomodule)
                    script.noModule = true;
                if (script.readyState) { // only required for IE <9
                    script.onreadystatechange = function () {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            fn();
                        }
                    };
                }
                else { //Others
                    script.onload = function () {
                        if (fn)
                            fn();
                    };
                }
                if (targetId)
                    doc.getElementById(targetId).appendChild(script);
                else
                    doc.getElementsByTagName("head")[0].appendChild(script);
            },
            addImage: function (src, width, height) {
                var img = doc.createElement('img');
                img.src = src;
                if (width)
                    img.width = width;
                if (height)
                    img.height = height;
                doc.getElementsByTagName('body')[0].appendChild(img);
            },
            addContent: function (content, targetId) {
                var node = doc.createElement("DIV");
                node.innerHTML = content;
                if (targetId) {
                    var target = doc.getElementById(targetId);
                    target.innerHTML = '';
                    target.appendChild(node);
                }
                else
                    doc.getElementsByTagName("body")[0].appendChild(node);
            },
            addCss: function (url) {
                var link = doc.createElement("link");
                link.href = url;
                link.type = "text/css";
                link.rel = "stylesheet";
                doc.getElementsByTagName("head")[0].appendChild(link);
            },
            addCssString: function (string) {
                var css = string, head = doc.head || doc.getElementsByTagName('head')[0], style = doc.createElement('style');
                head.appendChild(style);
                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    style.appendChild(doc.createTextNode(css));
                }
            },
            forEachClass: function (classname, func) {
                var els = doc.getElementsByClassName(classname);
                for (var i = 0; i < els.length; i++) {
                    func(els[i]);
                }
            },
            forEachTag: function (tagName, func) {
                var els = doc.getElementsByTagName(tagName);
                for (var i = 0; i < els.length; i++) {
                    func(els[i]);
                }
            },
            merge: function (obj, src) {
                for (var key in src) {
                    if (src.hasOwnProperty(key))
                        obj[key] = src[key];
                }
                return obj;
            },
            isObject: function (item) {
                return (item && typeof item === 'object' && !Array.isArray(item));
            },
            mergeDeep: function (target, source) {
                if (atm.utils.isObject(target) && atm.utils.isObject(source)) {
                    for (const key in source) {
                        if (atm.utils.isObject(source[key])) {
                            if (!target[key])
                                Object.assign(target, {
                                    [key]: {}
                                });
                            atm.utils.mergeDeep(target[key], source[key]);
                        }
                        else {
                            Object.assign(target, {
                                [key]: source[key]
                            });
                        }
                    }
                }
                return target;
            },
            flatten: function (obj) {
                var returnObj = [];
                for (var key in obj) {
                    returnObj.push(obj[key]);
                }
                return returnObj;
            },
            findInArray: function (src, arr) {
                return arr.some(function (v) {
                    return src.indexOf(v) >= 0;
                });
            },
            requestGAM: function (arr) {
                window.googletag.cmd.push(function () {
                    for (let i = 0; i < arr.length; i++) {
                        if (atm.prebidGoogle && atm.prebidGoogle[arr[i]]) {
                            atm.prebidGoogle[arr[i]]();
                        }
                    }
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                });
            },
            runTags: function (localContainerId, tagArray) {
                if (tagArray != undefined) {
                    for (var i = 0; i < tagArray.length; i++) {
                        try {
                            var tagId = tagArray[i];
                            var tag = atm.containers[localContainerId].tags[tagId];
                            var runable = true;
                            if (atm.GLOBALS.haltTriggers) {
                                if (tag.purposes.length > 0 && !atm.utils.findInArray(atm.GLOBALS.forcedPurposes, tag.purposes)) {
                                    runable = false;
                                    atm.haltedTags.push(tagId);
                                }
                            }
                            else {
                                if (tag.purposes.length > 0 && !atm.utils.findInArray(atm.browser.consent.adnuntiusPurposes, tag.purposes)) {
                                    runable = false;
                                }
                            }
                            if (runable) {
                                atm.debug('tag', 'Running tag: ' + tagId + ' in container: ' + localContainerId);
                                atm.containerFunctions[localContainerId][tag.type](tag.content);
                                if (atm.eventList.indexOf('tags.' + tagId) != -1)
                                    atm.dispatch('tags.' + tagId);
                            }
                        }
                        catch (e) {
                            atm.log('error', e, ': Tag: ' + tag);
                        }
                    }
                }
            },
            runTriggers: function (container, type) {
                atm.containers[container].triggers[type].forEach(function (fn) {
                    fn();
                });
            },
            clickElement: function (data) {
                if (atm.triggers.click)
                    atm.triggers.click(data);
            },
            toggleClass: function (element, className) {
                if (element.classList) {
                    element.classList.toggle(className);
                }
                else {
                    var classes = element.className.split(" ");
                    var i = classes.indexOf(className);
                    if (i >= 0)
                        classes.splice(i, 1);
                    else
                        classes.push(className);
                    element.className = classes.join(" ");
                }
            },
            newAjax: function (method, url, func) {
                if (win.XDomainRequest) {
                    // if XDomainRequest is defined and not IE10
                    if (win.navigator.appVersion.indexOf("MSIE 10") === -1) {
                        var ajaxIe = new win.XDomainRequest();
                        ajaxIe.open(method, url);
                        ajaxIe.contentType = "text/plain";
                        ajaxIe.onerror = function () { };
                        ajaxIe.ontimeout = function () { };
                        ajaxIe.onprogress = function () { };
                        ajaxIe.timeout = function () { };
                        ajaxIe.onload = function () { };
                        ajaxIe.onload = func;
                        return ajaxIe;
                    }
                }
                var ajax = new XMLHttpRequest();
                ajax.open(method, url);
                ajax.setRequestHeader("Content-Type", "text/plain");
                if (func && typeof func === "function") {
                    ajax.onreadystatechange = func;
                }
                ajax.onerror = function (e) {
                    console.log(e);
                };
                return ajax;
            },
            ajax: function (method, url, func) {
                var ajax = atm.utils.newAjax(method, url, function () {
                    if (ajax.readyState && ajax.readyState !== 4) {
                        return false;
                    }
                    if (!ajax.status || ajax.status === 200) {
                        if (func && typeof func === "function") {
                            func(JSON.parse(ajax.response));
                        }
                        else {
                            atm.log('error', 'Ajax function is not a function');
                        }
                    }
                    else {
                        atm.log('error', 'Request to URL: ' + url + ' got status ' + ajax.status);
                    }
                });
                ajax.send();
            },
        };
        
        atm.privacy = atm.privacy || {
            "css": ".adn-window{font-family:inherit!important;border:1px solid #ccc!important;z-index:999}.adn-window button{box-shadow:none!important}.adn-window a{color:#0065ae!important;font-weight:600}.adn-window .adn-header{font-size:18px;font-weight:700;background:#f7f7f7!important;border-bottom:1px solid #ccc!important}.adn-window .adn-footer{background:#f7f7f7!important;border-top:1px solid #ccc!important;padding:20px 25px}.adn-window .adn-footer button{margin:0 5px!important}.adn-window h3{font-weight:600}@media screen and (max-width:800px){.adn-window .adn-content{padding:10px 15px}.adn-window h3,.adn-window p{font-size:15px!important}.adn-window button{font-size:15px!important;padding:6px 8px!important}.adn-window .adn-header{padding:10px 15px}}.adn-message{left:auto!important;right:20px!important}.adn-message .adn-content button{background:#07c;border:1px solid #07c;margin-top:12px;font-weight:600}.adn-message .adn-content button+button{background:#fff;border:1px solid #07c;color:#0065ae;font-weight:400}@media screen and (max-width:800px){.adn-message{left:10px!important;bottom:10px!important;width:calc(100% - 20px)!important;max-width:none!important}.adn-message button{width:100%!important;float:none!important;margin:12px 0 0 0!important}.adn-message button+button{margin:12px 0!important}}.adn-overlay .adn-listItem{border-bottom:1px solid #eee}.adn-overlay .adn-listItem:last-child{border-bottom:none}.adn-overlay .adn-listItem .adn-detail{color:#0065ae;padding:0!important;font-size:16px;line-height:1.5}.adn-overlay .adn-listItem .adn-outline{border:none;padding:none;line-height:1.5;background:#fff}.adn-overlay .adn-listItem .adn-detail:focus,.adn-overlay .adn-listItem .adn-outline:focus{outline:0}.adn-window .adn-footer{display:flex;flex-direction:row-reverse}.adn-window .adn-footer button{flex-grow:1}.adn-window .adn-footer button{background:#07c;border:1px solid #07c;color:#fff;font-weight:600}.adn-window .adn-footer .adn-blank{border:1px solid #ccc;background:#fff;box-shadow:none;color:#444;font-weight:400}.adn-window .adn-footer .adn-outline{border:1px solid #07c;color:#0065ae;background:#fff;font-weight:400}.adn-window h2{font-size:18px;font-weight:700;margin-bottom:12px}@media screen and (max-width:800px){.adn-overlay .adn-window{width:100%;height:100%;box-shadow:none!important;border-radius:0!important;border:none!important}.adn-overlay .adn-window>div{display:flex;flex-direction:column;height:100%}.adn-purpose-container,.adn-vendors-container{max-height:none!important;flex:1}.adn-window .adn-footer{display:flex;flex-direction:row;flex-wrap:wrap;padding:15px 10px 76px 10px}.adn-window .adn-footer button{margin-bottom:12px!important}.adn-window .adn-footer button:first-child{flex-basis:100%}.adn-window .adn-footer .adn-outline{display:none}.adn-window .adn-listItem{padding:10px 15px}.adn-overlay .adn-listItem>div{overflow:visible}.adn-overlay .adn-window .adn-listItem h3{width:calc(100vw - 30px)}}",
            "tcf": true,
            "addCss": false,
            "layout": "messageBox",
            "enabled": true,
            "adnuntius": false,
            "editButton": false,
            "reloadTime": 180,
            "languageCode": "Yg2Y1swjI",
            "pageviewTrigger": true,
            "removeDefaultCss": false,
            "availablePurposes": {
                "adnuntiusPurposes": [],
                "tcfPurposes": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "tcfSpecialFeatures": []
            },
            "texts": {
                "back": "Back",
                "save": "Save",
                "title": "Cookies & Ads Policy",
                "accept": "Accept",
                "legInt": "LI",
                "details": "Details",
                "message": "We use our own and third-party cookies to improve our services, personalise your advertising and remember your preferences. If you continue browsing, or click on the save button on this banner, we understand that you accept the use of cookies on our website. For more information visit our <a aria-label=\"learn more about cookies\" tabindex=\"0\" class=\"cc-link\" href=\"/privacy\" target=\"_blank\">Cookies Policy</a>.",
                "partners": "Partners",
                "settings": "Settings",
                "acceptAll": "Accept all",
                "rejectAll": "Reject all",
                "editButton": "Edit"
            },
            "purposeText": [
                {
                    "id": 1,
                    "name": "Store and/or access information on a device",
                    "description": "Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.",
                    "descriptionLegal": "Vendors can:\n* Store and access information on the device such as cookies and device identifiers presented to a user."
                },
                {
                    "id": 2,
                    "name": "Select basic ads",
                    "description": "Ads can be shown to you based on the content you’re viewing, the app you’re using, your approximate location, or your device type.",
                    "descriptionLegal": "To do basic ad selection vendors can:\n* Use real-time information about the context in which the ad will be shown, to show the ad, including information about the content and the device, such as: device type and capabilities, user agent, URL, IP address\n* Use a user’s non-precise geolocation data\n* Control the frequency of ads shown to a user.\n* Sequence the order in which ads are shown to a user.\n* Prevent an ad from serving in an unsuitable editorial (brand-unsafe) context\nVendors cannot:\n* Create a personalised ads profile using this information for the selection of future ads.\n* N.B. Non-precise means only an approximate location involving at least a radius of 500 meters is permitted."
                },
                {
                    "id": 3,
                    "name": "Create a personalised ads profile",
                    "description": "A profile can be built about you and your interests to show you personalised ads that are relevant to you.",
                    "descriptionLegal": "To create a personalised ads profile vendors can:\n* Collect information about a user, including a user's activity, interests, demographic information, or location, to create or edit a user profile for use in personalised advertising.\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalised advertising."
                },
                {
                    "id": 4,
                    "name": "Select personalised ads",
                    "description": "Personalised ads can be shown to you based on a profile about you.",
                    "descriptionLegal": "To select personalised ads vendors can:\n* Select personalised ads based on a user profile or other historical user data, including a user’s prior activity, interests, visits to sites or apps, location, or demographic information."
                },
                {
                    "id": 5,
                    "name": "Create a personalised content profile",
                    "description": "A profile can be built about you and your interests to show you personalised content that is relevant to you.",
                    "descriptionLegal": "To create a personalised content profile vendors can:\n* Collect information about a user, including a user's activity, interests, visits to sites or apps, demographic information, or location, to create or edit a user profile for personalising content.\n* Combine this information with other information previously collected, including from across websites and apps, to create or edit a user profile for use in personalising content."
                }
            ],
            "specialFeaturesText": [],
            "adnuntiusPurposesTexts": [],
            "mappedExternalId": {}
        };
        "use strict";
        atm.createPrebidRequest = function (request) {
            var prebidUnits = [];
            request.adUnits.forEach(function (adUnit) {
                var prebidId = atm.prebid.map[adUnit.auId];
                if (atm.prebid.mappedUnits[prebidId]) {
                    prebidUnits.push(atm.prebid.mappedUnits[prebidId]);
                }
            });
            return prebidUnits;
        };
        atm.requestAds = function (request) {
            if (atm.prebid.aliases.length > 0) {
                for (let i = 0; i < atm.prebid.aliases.length; i++) {
                    const element = atm.prebid.aliases[i];
                    window.pbjs.que.push(function () {
                        pbjs.aliasBidder(element[1], [element[0]]);
                    });
                }
            }
            if (atm.prebid.map) {
                if (request.adUnits) {
                    for (let i = 0; i < request.adUnits.length; i++) {
                        var adUnit = request.adUnits[i];
                        if (adUnit.refresh) {
                            adUnit = atm.ads.setPrebidRefresh(adUnit, request);
                        }
                    }
                }
                adn.calls.push(function () {
                    adn.chbRequest(atm.createPrebidRequest(request), request);
                });
            }
            else {
                adn.calls.push(function () {
                    adn.request(request);
                });
            }
        };
        atm.request = atm.request || {};
        atm.request.adnuntius = function (callback) {
            adn.calls.push(function () {
                adn.request({
                    adUnits: atm.ads.setAdnuntius(atm.adUnits, callback),
                });
            });
        };
        atm.request.prebid = function (callback) {
            pbjs.que.push(function () {
                pbjs.addAdUnits(atm.adUnits);
                pbjs.requestBids({
                    ortb2: atm.ortb2,
                    bidsBackHandler: function (data) { if (callback) {
                        callback(data);
                    }
                    else
                        atm.ads.renderPrebidWinners(); },
                    timeout: 3000
                });
            });
        };
        atm.request.refresh = function (auId) {
        };
        adn.requestAds = atm.requestAds;
        
        "use strict";
        atm.ads.adUnitMeta = atm.ads.adUnitMeta || {};
        atm.addAdUnits = function (adUnitList) {
            atm.utils.merge(atm.adUnits, adUnitList);
        };
        atm.clearAdUnits = function () {
            atm.adUnits = [];
        };
        atm.removeAdUnitByCodeArray = function (codeArray) {
            for (let i = 0; i < codeArray.length; i++) {
                atm.removeAdUnitByCode(codeArray[i]);
            }
        };
        atm.removeAdUnitByCode = function (code) {
            for (let i = 0; i < atm.adUnits.length; i++) {
                if (atm.adUnits[i].code == code) {
                    atm.adUnits.splice(i, 1);
                    break;
                }
            }
        };
        atm.addOrtb = function (ortbData) {
            atm.ortb2 = atm.utils.mergeDeep(atm.ortb2, ortbData);
        };
        atm.addAlias = function (aliasList) {
            atm.adUnitAliases = atm.adUnitAliases.concat(aliasList);
        };
        atm.prebid.mappedUnits = atm.utils.merge(atm.prebid.mappedUnits, atm.containers[CONTAINER_ID].prebid.units);
        atm.prebid.units = atm.utils.merge(atm.prebid.units, atm.utils.flatten(atm.containers[CONTAINER_ID].prebid.units));
        atm.prebid.aliases = atm.prebid.aliases.concat(atm.containers[CONTAINER_ID].prebid.aliases);
        atm.prebid.map = atm.utils.merge(atm.prebid.map, atm.containers[CONTAINER_ID].prebid.map);
        atm.ads.onCallDone = function (matched, callback) {
            atm.removeAdUnitByCodeArray(matched);
            if (callback)
                callback();
        };
        atm.ads.renderPrebidWinners = function () {
            var bids = pbjs.getHighestCpmBids();
            var output = [];
            for (var i = 0; i < bids.length; i++) {
                var b = bids[i];
                var iframe = document.createElement('iframe');
                iframe.id = b.adId;
                iframe.width = b.width;
                iframe.height = b.height;
                iframe.frameBorder = 'no';
                var target = document.getElementById(b.adUnitCode);
                target.style.display = 'block';
                output.push({
                    'adunit': b.adUnitCode, 'adId': b.adId, 'bidder': b.bidder,
                    'time': b.timeToRespond, 'cpm': b.cpm
                });
                var tag = {
                    adServerDomain: "",
                    pubUrl: window.location.href,
                    targetingMap: {},
                    hbPb: "adnuntius",
                    adId: b.adId
                };
                target.appendChild(iframe);
                ucTag.renderAd(iframe.contentWindow.document, tag);
            }
            if (output.length) {
                if (console.table) {
                    console.table(output);
                }
                else {
                    for (var j = 0; j < output.length; j++) {
                        console.log(output[j]);
                    }
                }
            }
            else {
                console.warn('No prebid winners');
            }
        };
        atm.ads.setAdnuntius = function (adUnits, callback) {
            var mappedAliases = {};
            var adnAdUnitArray = [];
            var matchedAds = [];
            var totalAds = [];
            var removefromTotal = function (adUnit) {
                var position = totalAds.indexOf(adUnit.targetId);
                totalAds.splice(position, 1);
                if (totalAds.length == 0) {
                    atm.ads.onCallDone(matchedAds, callback);
                }
            };
            atm.adUnitAliases.forEach(function (aliasItem) {
                mappedAliases[aliasItem.alias] = aliasItem.bidder;
            });
            adUnits.forEach((adUnit) => {
                totalAds.push(adUnit.code);
                adUnit.bids.forEach(function (bid) {
                    if (bid.bidder == "adnuntius" || mappedAliases[bid.bidder] == "adnuntius") {
                        var adnAdunit = {
                            auId: bid.params.auId,
                            targetId: adUnit.code,
                            onNoMatchedAds: function (data) { removefromTotal(data); },
                            onImpressionResponse: function (data) { matchedAds.push(data.targetId); removefromTotal(data); },
                        };
                        if (adUnit.mediaTypes && adUnit.mediaTypes.banner && adUnit.mediaTypes.banner.sizes)
                            adnAdunit.dimensions = adUnit.mediaTypes.banner.sizes;
                        if (bid.params.targeting) {
                            console.log(bid.params.targeting);
                        }
                        adnAdUnitArray.push(adnAdunit);
                    }
                });
            });
            return adnAdUnitArray;
        };
        atm.ads.setInterval = function (auId, request) {
            if (!atm.ads.adUnitMeta[auId].interval) {
                atm.ads.adUnitMeta[auId].interval = setInterval(function () {
                    if (atm.ads.adUnitMeta[auId].refresh.count != 0) {
                        adn.calls.push(function () {
                            adn.chbRequest(atm.createPrebidRequest(request), request);
                        });
                        atm.ads.adUnitMeta[auId].refresh.count--;
                    }
                    else {
                        clearInterval(atm.ads.adUnitMeta[auId].interval);
                    }
                }, atm.ads.adUnitMeta[auId].refresh.delay * 1000);
            }
        };
        atm.ads.setPrebidRefresh = function (adUnit, request) {
            var singleAdUnitRequest = Object.assign({}, request);
            delete singleAdUnitRequest.headerBids;
            var targetId = (adUnit.targetId) ? ':' + adUnit.targetId : '';
            var auId = adUnit.auId + targetId;
            var refresh = adUnit.refresh;
            if (refresh.count)
                refresh.count = refresh.count || 999;
            else {
                refresh = {
                    delay: adUnit.refresh,
                    count: 999,
                };
            }
            var event = refresh.event || 'onViewable';
            if (event != 'onViewable' && event != "onVisible")
                throw new Error('refresh event needs to be "onViewable" or "onVisible"');
            delete adUnit.refresh;
            adUnit.clearTarget = true;
            atm.ads.adUnitMeta[auId] = atm.ads.adUnitMeta[auId] || {};
            atm.ads.adUnitMeta[auId].refresh = refresh;
            atm.ads.adUnitMeta[auId].refreshFunction = function () {
                singleAdUnitRequest.adUnits = [adUnit];
                atm.ads.setInterval(auId, singleAdUnitRequest);
            };
            adUnit[event] = atm.ads.adUnitMeta[auId].refreshFunction;
            return adUnit;
        };
        
        "use strict";
        atm.addListener = function (name, callback) {
            if (atm.eventList.indexOf(name) == -1) {
                atm.eventList.push(name);
                atm.events[name] = new CustomEvent(name, { bubbles: true });
            }
            document.addEventListener(name, function () { if (callback)
                callback(atm.transitData); });
        };
        atm.dispatch = function (name, data) {
            atm.debug(name, data);
            atm.transitData = data;
            document.dispatchEvent(atm.events[name]);
        };
        
        
        
        "use strict";
        atm.containerFunctions[CONTAINER_ID].javascript = function (data) {
            var triggerOnLoad = data.onLoad
                ? function () {
                    atm.addListener("script." + [data.id]);
                    atm.dispatch("script." + [data.id]);
                }
                : false;
            atm.utils.addScript(data.url, false, triggerOnLoad);
        };
        
        
        
        atm.addListener("pageview.WiEbuew5P", function(eventData){
            if( (true) ) atm.utils.runTags('WiEbuew5P', ["lO43V6vnl"])
        });
        
        
        "use strict";
        atm.consent = {
            host: (window.location.hostname == 'http://localhost')
                ? "http://localhost:4001/staging"
                : 'https://consent.adnuntius.com/v2',
            checkIfAllTrue: function () {
                var checked = [];
                atm.utils.forEachClass('adn-switch', function (el) {
                    checked.push(el.checked);
                });
                return checked.every(function (value) {
                    return value == true;
                });
            },
            setAll: function (value, scope) {
                atm.debug('consent', 'Set all: ' + value + ' ' + scope || '');
                var valueSet = {
                    adnuntiusPurposes: (value) ? atm.privacy.availablePurposes.adnuntiusPurposes : [],
                    purposes: (value) ? atm.privacy.availablePurposes.tcfPurposes : [],
                    vendors: (value) ? ['all'] : [],
                    legIntPurposes: (value) ? ['all'] : [],
                    specialFeatures: (value) ? atm.privacy.availablePurposes.tcfSpecialFeatures : [],
                };
                if (!scope) {
                    if (atm.containers[CONTAINER_ID].cmp.adnuntius) {
                        atm.browser.consent.adnuntiusPurposes = valueSet.adnuntiusPurposes;
                    }
                    if (atm.containers[CONTAINER_ID].cmp.tcf) {
                        atm.browser.consent.purposes = valueSet.purposes;
                        atm.browser.consent.specialFeatures = valueSet.specialFeatures;
                        atm.browser.consent.vendors = valueSet.vendors;
                        atm.browser.consent.legIntPurposes = valueSet.legIntPurposes;
                    }
                }
                else {
                    atm.browser.consent[scope] = valueSet[scope];
                }
                atm.utils.forEachClass('adn-switch', function (el) {
                    if (!el.disabled)
                        el.checked = value;
                });
                return this;
            },
            save: function () {
                atm.browser.consent.time = new Date().getTime();
                atm.browser.consent.created = atm.browser.consent.created || Math.round(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()) / 100);
                atm.browser.consent.given = true;
                atm.browser.consent.adnConsents = [];
                for (var i = 0; i < atm.privacy.adnuntiusPurposesTexts.length; i++) {
                    var purpose = atm.privacy.adnuntiusPurposesTexts[i];
                    if (purpose.forced && atm.browser.consent.adnuntiusPurposes.indexOf(purpose.id) == -1) {
                        atm.browser.consent.adnuntiusPurposes.push(purpose.id);
                        atm.browser.consent.namedConsent = atm.browser.consent.namedConsent || [];
                        if (!atm.browser.consent.namedConsent.indexOf(atm.privacy.mappedExternalId[purpose.id]) == -1) {
                            atm.browser.consent.namedConsent.push(atm.privacy.mappedExternalId[purpose.id]);
                        }
                    }
                    if (atm.browser.consent.adnuntiusPurposes.indexOf(purpose.id) != -1) {
                        if (purpose.adnuntiusPurpose != '')
                            atm.browser.consent.adnConsents.push(purpose.adnuntiusPurpose);
                    }
                }
                atm.utils.remove('adn-overlay');
                atm.utils.remove('adn-message');
                localStorage.setItem('adn-consent', JSON.stringify(atm.browser.consent));
                if (atm.containers[CONTAINER_ID].cmp.tcf) {
                    var ajax = atm.utils.newAjax("POST", atm.consent.host, function () {
                        if (ajax.readyState && ajax.readyState !== 4) {
                            return false;
                        }
                        if (!ajax.status || ajax.status === 200) {
                            var response = JSON.parse(ajax.response);
                            if (response.token) {
                                var d = new Date();
                                d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                                var expires = "expires=" + d.toUTCString();
                                document.cookie = "euconsent-v2=" + response.token + "; path=/; " + expires;
                                atm.browser.consent.tc = response.token;
                                localStorage.setItem('adn-consent', JSON.stringify(atm.browser.consent));
                            }
                        }
                    });
                    ajax.send(JSON.stringify(atm.browser.consent));
                }
                if (atm.browser.consent.adnConsents && atm.browser.consent.adnConsents.length > 0) {
                    win.localStorage.setItem('atm.consent', JSON.stringify(atm.browser.consent.adnConsents));
                }
                if (atm.callbacks && atm.callbacks.consentSave) {
                    atm.callbacks.consentSave(atm.browser.consent);
                }
                atm.debug('consent', 'Saved', atm.browser.consent);
                if (atm.GLOBALS.haltTriggers) {
                    atm.GLOBALS.haltTriggers = false;
                    atm.utils.runTags(CONTAINER_ID, atm.haltedTags);
                }
                return this;
            },
            getConsent: function () {
                return atm.browser.consent;
            },
            saveAll: function (value) {
                this.setAll(value);
                this.save();
            },
            checkConsent: function (consents) {
                var consented = true;
                for (var i = 0; i < consents.length; i++) {
                    var consent = consents[i];
                    if (atm.browser.consent.adnuntiusPurposes.indexOf(consent) == -1)
                        consented = false;
                }
                return consented;
            },
            update: function (scope, id, value) {
                if ((scope == 'vendors' && atm.browser.consent.vendors[0] == 'all') ||
                    (scope == 'legIntPurposes' && atm.browser.consent.legIntPurposes[0] == 'all')) {
                    atm.browser.consent[scope] = [];
                    for (var i = 0; i < atm.privacy[scope].length; i++) {
                        var vendor = atm.privacy[scope][i];
                        if (vendor.id && vendor.id != id)
                            atm.browser.consent[scope].push(vendor.id);
                    }
                }
                var currentId = (isNaN(Number(id))) ? id : Number(id);
                if (value == false) {
                    var index = atm.browser.consent[scope].indexOf(currentId);
                    if (index > -1) {
                        atm.browser.consent[scope].splice(index, 1);
                    }
                }
                else {
                    atm.browser.consent[scope].push(currentId);
                }
                var checkAllElement = document.getElementById('adn-purposes-all');
                if (checkAllElement)
                    checkAllElement.checked = atm.consent.checkIfAllTrue();
            },
            fetchVendorList: function (fn) {
                // Might have to check TCF
                var ajax = atm.utils.newAjax("GET", "https://t.atmng.io/consent/vendorlist.json", function () {
                    if (ajax.readyState && ajax.readyState !== 4) {
                        return false;
                    }
                    if (!ajax.status || ajax.status === 200) {
                        fn(JSON.parse(ajax.response));
                    }
                });
                ajax.send();
            },
            init: function (type, forced) {
                if (atm.containers[CONTAINER_ID].cmp.tcf)
                    atm.consent.fetchVendorList(function (vendorList) {
                        atm.privacy.vendorList = vendorList;
                        var vendors = Object.keys(atm.privacy.vendorList.vendors).map(function (e) {
                            return atm.privacy.vendorList.vendors[e];
                        });
                        atm.privacy.vendors = vendors;
                        atm.privacy.legIntPurposes = atm.privacy.vendors.filter(function (vendor) {
                            return vendor.legIntPurposes.length > 0;
                        });
                    });
                var mismatch = false;
                var defaultConsent = (atm.privacy.purposeText.length > 0) ? atm.privacy.purposeText
                    : (atm.privacy.adnuntiusPurposesTexts.length > 0) ? atm.privacy.adnuntiusPurposesTexts
                        : (atm.privacy.specialFeaturesText.lenght > 0) ? atm.privacy.specialFeaturesText : [];
                if (defaultConsent.length > 0) {
                    var userConsent = atm.browser.consent.purposes;
                    for (var i = 0; i < defaultConsent.length; i++) {
                        var category = defaultConsent[i];
                        if (userConsent.indexOf(category) == -1)
                            mismatch = true;
                    }
                    if (defaultConsent.length != userConsent.length)
                        mismatch = true;
                    if ((!atm.browser.consent.given || forced || mismatch)
                        && !document.getElementById('adn-overlay')) {
                        if (type == 'overlay') {
                            atm.consent.render['settings']('adn-overlay', 'overlay');
                        }
                        if (type == 'settings') {
                            atm.consent.render['settings']('adn-overlay', 'settings');
                        }
                        if (type == 'messageBox') {
                            atm.consent.render.messageBox();
                        }
                    }
                }
            },
            render: {
                text: function (userConsent, text, scope) {
                    var extraInfo = text.descriptionLegal || text.info;
                    var purposeText = '<div>' +
                        '<p>' + text.description + '</p>';
                    purposeText += (extraInfo) ? '<button class="adn-outline adn-detail" onClick="atm.utils.toggleClass(this.parentNode, \'showDetails\')">' + atm.privacy.texts.details + '</button>' +
                        '<div class="adn-details">' +
                        '<p>' + extraInfo.replace(/\*/g, '<br/>*') + '</p>' +
                        '</div>' : '';
                    purposeText += '</div>';
                    return atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.listItem, {
                        itemId: text.id,
                        purposeTitle: text.name,
                        purposeText: purposeText,
                        listType: scope,
                        checked: (userConsent.indexOf(text.id) > -1 || text.forced) ? 'checked' : '',
                        forced: (text.forced) ? 'disabled' : ''
                    });
                },
                purposes: function () {
                    var userConsent = atm.browser.consent.purposes || [];
                    var purposes = [];
                    for (var i = 0; i < atm.privacy.purposeText.length; i++) {
                        var purpose = atm.privacy.purposeText[i];
                        purposes.push(atm.consent.render.text(userConsent, purpose, 'purposes'));
                    }
                    return purposes.join('');
                },
                specialFeatures: function () {
                    var userConsent = atm.browser.consent.specialFeatures || [];
                    var specialFeatures = [];
                    for (var i = 0; i < atm.privacy.specialFeaturesText.length; i++) {
                        var purpose = atm.privacy.specialFeaturesText[i];
                        specialFeatures.push(atm.consent.render.text(userConsent, purpose, 'specialFeatures'));
                    }
                    return specialFeatures.join('');
                },
                adnuntiusPurposes: function () {
                    var userConsent = atm.browser.consent.adnuntiusPurposes || [];
                    var purposes = [];
                    for (var i = 0; i < atm.privacy.adnuntiusPurposesTexts.length; i++) {
                        var purpose = atm.privacy.adnuntiusPurposesTexts[i];
                        purposes.push(atm.consent.render.text(userConsent, purpose, 'adnuntiusPurposes'));
                    }
                    return purposes.join('');
                },
                settings: function (target, type) {
                    atm.utils.remove('adn-message');
                    if (!doc.getElementById('adn-overlay'))
                        atm.consent.render.overlay();
                    var title, text = '';
                    if (type == 'settings') {
                        title = '<b>' + atm.privacy.texts.settings + '</b>';
                        text = '';
                    }
                    else {
                        title = '<h2>' + atm.privacy.texts.title + '</h2>';
                        text = '<p>' + atm.privacy.texts.message + '<p>';
                    }
                    var tcfButtons = (atm.containers[CONTAINER_ID].cmp.tcf) ? '<button class="adn-blank" onClick="atm.consent.render.vendorList(\'adn-overlay\', \'vendors\')" >' + atm.privacy.texts.partners + '</button>' +
                        '<button class="adn-blank" onClick="atm.consent.render.vendorList(\'adn-overlay\', \'legIntPurposes\')" >' + atm.privacy.texts.legInt + '</button>' : '';
                    atm.utils.addContent(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.settings, {
                        title: title,
                        text: text,
                        save: atm.privacy.texts.save,
                        adnuntiusPurposes: (atm.containers[CONTAINER_ID].cmp.adnuntius) ? atm.consent.render.adnuntiusPurposes : '',
                        purposesList: (atm.containers[CONTAINER_ID].cmp.tcf) ? atm.consent.render.purposes : '',
                        specialFeaturesList: (atm.containers[CONTAINER_ID].cmp.tcf) ? atm.consent.render.specialFeatures : '',
                        partners: atm.privacy.texts.partners,
                        acceptAll: atm.privacy.texts.acceptAll,
                        rejectAll: atm.privacy.texts.rejectAll,
                        tcfButtons: tcfButtons
                    }), target || false);
                    var checkAllElement = document.getElementById('adn-purposes-all');
                    if (checkAllElement)
                        checkAllElement.checked = atm.consent.checkIfAllTrue();
                },
                overlay: function (target) {
                    atm.utils.addContent(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.overlay, {}), target || false);
                },
                messageBox: function () {
                    return atm.utils.addContent(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.messageBox, {
                        title: atm.privacy.texts.title,
                        text: atm.privacy.texts.message,
                        settings: atm.privacy.texts.settings,
                        accept: atm.privacy.texts.accept,
                    }));
                },
                vendorList: function (target, type) {
                    var userConsent = atm.browser.consent[type];
                    var checked = (atm.browser.consent[type][0] == 'all') ? true : false;
                    var vendors = [];
                    for (var i = 0; i < atm.privacy[type].length; i++) {
                        var vendor = atm.privacy[type][i];
                        var presentText = '';
                        var featureText = '';
                        var information = (type == "vendors") ? 'purposes' : 'legIntPurposes';
                        for (var j = 0; j < vendor[information].length; j++) {
                            var infoNumber = vendor[information][j];
                            var purposeItem = atm.privacy.vendorList.purposes[infoNumber];
                            presentText += '<p><b>' + purposeItem.name + '</b></p>';
                            presentText += '<p>' + purposeItem.description + '</p>';
                        }
                        for (var j = 0; j < vendor.features.length; j++) {
                            var feature = vendor.features[j];
                            var featureItem = atm.privacy.vendorList.features[feature];
                            featureText += '<p><b>' + featureItem.name + '</b></p>';
                            featureText += '<p>' + featureItem.description + '</p>';
                        }
                        var vendorText = '<div>' +
                            '<button class="adn-outline adn-detail" onClick="atm.utils.toggleClass(this.parentNode, \'showDetails\')">Details</button>' +
                            '<div class="adn-details">' +
                            '<a href="' + vendor.policyUrl + '">' + vendor.policyUrl + '</a>' +
                            '<h3>Purposes</h3>' +
                            presentText +
                            '<h3>Features</h3>' +
                            featureText +
                            '</div>' +
                            '</div>';
                        vendors.push(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.listItem, {
                            purposeTitle: vendor.name,
                            purposeText: vendorText,
                            itemId: vendor.id,
                            listType: type,
                            checked: (checked || userConsent.indexOf(vendor.id) > -1) ? 'checked' : '',
                            forced: ''
                        }));
                    }
                    return atm.utils.addContent(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.vendorList, {
                        title: atm.privacy.texts.partners,
                        acceptAll: atm.privacy.texts.acceptAll,
                        rejectAll: atm.privacy.texts.rejectAll,
                        list: vendors.join(''),
                        listType: type,
                        save: atm.privacy.texts.save,
                        back: atm.privacy.texts.back,
                    }), target || false);
                },
                editButton: function (target) {
                    atm.utils.addContent(atm.utils.replaceTags(atm.containers[CONTAINER_ID].templates.editButton, {
                        title: atm.privacy.texts.editButton,
                    }), target || false);
                },
            }
        };
        if (atm.containers[CONTAINER_ID].cmp != false && !atm.browser.consent.given) {
            atm.GLOBALS.haltTriggers = true;
            atm.GLOBALS.forcedPurposes = [];
            atm.privacy.adnuntiusPurposesTexts.forEach(function (purpose) {
                if (purpose.forced)
                    atm.GLOBALS.forcedPurposes.push(purpose.id);
            });
        }
        if (atm.containers[CONTAINER_ID].cmp && atm.containers[CONTAINER_ID].cmp.enabled) {
            if (!atm.containers[CONTAINER_ID].cmp.removeDefaultCss)
                atm.utils.addCss('https://t.atmng.io/consent/default.css');
            if (atm.containers[CONTAINER_ID].cmp.addCss)
                atm.utils.addCssString(atm.containers[CONTAINER_ID].cmp.css);
        }
        if (!atm.GLOBALS.setPageload) {
            atm.GLOBALS.setPageload = true;
            window.addEventListener('load', function () {
                // atm.event.push({ 'browser': { 'state': 'pageloaded' } });
                if (atm.containers[CONTAINER_ID].cmp && atm.containers[CONTAINER_ID].cmp.enabled) {
                    if (atm.containers[CONTAINER_ID].cmp.editButton)
                        atm.consent.render.editButton();
                }
                if (atm.containers[CONTAINER_ID].cmp.pageviewTrigger) {
                    if ((atm.consent && !atm.browser.consent.given) ||
                        (atm.browser.consent.given && atm.consent &&
                            atm.browser.consent.timeSinceConsent &&
                            atm.browser.consent.timeSinceConsent > atm.consent.reloadTime)) {
                        atm.consent.init(atm.containers[CONTAINER_ID].cmp.layout);
                    }
                }
            });
        }
        
        
        atm.utils.addScript("https://cdn.adnuntius.com/adn.js",false,false,{async:true});
        if(atm.containers[CONTAINER_ID].prebid){
            if(atm.containers[CONTAINER_ID].prebid.config && atm.containers[CONTAINER_ID].prebid.config.custom){
                try {
                    new Function(atm.containers[CONTAINER_ID].prebid.config.custom)();
                } catch (e) {
                    atm.log('error', 'Custom prebid script malformed: ' + e.message, 'Custom Prebid')
                }
            }
            if(atm.containers[CONTAINER_ID].prebid.loadPrebidJs){atm.utils.addScript("https://tags.adnuntius.com/pb/prebid.js")}
        
        }
        
        "use strict";
        (function () {
            var executeQueue = function () {
                try {
                    var queItem;
                    while (queItem = atm.queue.shift()) {
                        if (typeof queItem == 'function')
                            queItem();
                    }
                }
                catch (e) {
                    atm.log('error', e, 'queue handler');
                }
            };
            win.setTimeout(executeQueue, 25);
            atm.queue.push = function () {
                Array.prototype.push.apply(this, arguments);
                win.setTimeout(executeQueue, 1);
                return this.length;
            };
            executeQueue();
        })();
        

        window.addEventListener('load', function (event) {
            if( atm.eventList.indexOf('pageload.' + CONTAINER_ID) != -1){
                atm.dispatch('pageload.' + CONTAINER_ID)
            }
        });
        
        if (atm.eventList.indexOf('pageview.' + CONTAINER_ID) > -1) atm.dispatch('pageview.' + CONTAINER_ID);
        

    })(atm, adn, document, window);
    
} catch (e) {
    console.log('error', e);
}


