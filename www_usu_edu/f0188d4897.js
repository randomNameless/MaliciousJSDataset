window.FontAwesomeKitConfig = {
  "id": 27146727,
  "version": "6.7.1",
  "token": "f0188d4897",
  "method": "js",
  "license": "pro",
  "baseUrl": "https://ka-p.fontawesome.com",
  "asyncLoading": {
    "enabled": false
  },
  "autoA11y": {
    "enabled": true
  },
  "baseUrlKit": "https://kit.fontawesome.com",
  "detectConflictsUntil": null,
  "iconUploads": {},
  "minify": {
    "enabled": false
  },
  "v4FontFaceShim": {
    "enabled": true
  },
  "v4shim": {
    "enabled": true
  },
  "v5FontFaceShim": {
    "enabled": true
  },
  "uploadsUrl": "https://kit-uploads.fontawesome.com"
};
(function (factory) {
  typeof define === 'function' && define.amd ? define('kit-loader', factory) :
  factory();
}((function () { 'use strict';

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var _v, _Dt;
  var s = "classic",
    t = "duotone",
    r = "sharp",
    o = "sharp-duotone",
    e = "Classic",
    d = "Duotone",
    i = "Sharp",
    l = "Sharp Duotone",
    v = (_v = {}, _defineProperty(_v, s, e), _defineProperty(_v, t, d), _defineProperty(_v, r, i), _defineProperty(_v, o, l), _v);
  var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
  var n = "kit",
    a = "kit-duotone",
    f = "Kit",
    h = "Kit Duotone",
    Dt = (_Dt = {}, _defineProperty(_Dt, n, f), _defineProperty(_Dt, a, h), _Dt);

  var _Y, _Bt;
  var t$1 = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    r$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
  var d$1 = "classic",
    a$1 = "duotone",
    l$1 = "sharp",
    s$1 = "sharp-duotone",
    i$1 = "Classic",
    n$1 = "Duotone",
    f$1 = "Sharp",
    h$1 = "Sharp Duotone",
    Y = (_Y = {}, _defineProperty(_Y, d$1, i$1), _defineProperty(_Y, a$1, n$1), _defineProperty(_Y, l$1, f$1), _defineProperty(_Y, s$1, h$1), _Y);
  var u = "kit",
    e$1 = "kit-duotone",
    p = "Kit",
    g = "Kit Duotone",
    Bt = (_Bt = {}, _defineProperty(_Bt, u, p), _defineProperty(_Bt, e$1, g), _Bt);
  var I = {
      classic: ["fas", "far", "fal", "fat", "fad"],
      duotone: ["fadr", "fadl", "fadt"],
      sharp: ["fass", "fasr", "fasl", "fast"],
      "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
    },
    x = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"],
    xo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt"].concat(r$1, x),
    m = ["solid", "regular", "light", "thin", "duotone", "brands"],
    c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    F = c.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    Fo = [].concat(_toConsumableArray(Object.keys(I)), m, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY]).concat(c.map(function (o) {
      return "".concat(o, "x");
    })).concat(F.map(function (o) {
      return "w-".concat(o);
    }));

  function buildUrl (config, options) {
    var addOn = options && options.addOn || '';
    var baseFilename = options && options.baseFilename || config.license + addOn;
    var minify = !!(options && options.minify) ? '.min' : '';
    var suffix = options && options.fileSuffix || config.method;
    var subdir = options && options.subdir || config.method;
    return config.baseUrl + '/releases/' + (config.version === 'latest' ? 'latest' : 'v'.concat(config.version)) + '/' + subdir + '/' + baseFilename + minify + '.' + suffix;
  }

  function a11y (document, prefixes) {
    var prefixesArray = prefixes || ['fa'];
    var prefixesSelectorString = '.' + Array.prototype.join.call(prefixesArray, ',.');
    var icons = document.querySelectorAll(prefixesSelectorString);
    Array.prototype.forEach.call(icons, function (icon) {
      var title = icon.getAttribute('title');
      icon.setAttribute('aria-hidden', 'true');
      var needsSrOnly = icon.nextElementSibling ? !icon.nextElementSibling.classList.contains('sr-only') : true;
      if (title && needsSrOnly) {
        var srElement = document.createElement('span');
        srElement.innerHTML = title;
        srElement.classList.add('sr-only');
        icon.parentNode.insertBefore(srElement, icon.nextSibling);
      }
    });
  }

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';
  var NOOP = function NOOP() {};
  var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var asyncQueue = [];
  var asyncTimer;
  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    }

    // reset async asyncQueue
    asyncQueue = [];
    asyncTimer = false;
  }
  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);
    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }
  function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
      resolve(promise, value);
    }
    function rejectPromise(reason) {
      reject(promise, reason);
    }
    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }
  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;
    if (typeof callback === 'function') {
      settled = FULFILLED;
      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }
    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }
      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }
  function handleThenable(promise, value) {
    var resolved;
    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }
      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;
        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;
              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }
      return true;
    }
    return false;
  }
  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }
  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }
  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }
  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }
  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }
  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);
    if (!promise._handled && isNode) {
      global.process.emit('unhandledRejection', promise._data, promise);
    }
  }
  function notifyRejectionHandled(promise) {
    global.process.emit('rejectionHandled', promise);
  }

  /**
   * @class
   */
  function P(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }
    if (this instanceof P === false) {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    this._then = [];
    invokeResolver(resolver, this);
  }
  P.prototype = {
    constructor: P,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function then(onFulfillment, onRejection) {
      var subscriber = {
        owner: this,
        then: new this.constructor(NOOP),
        fulfilled: onFulfillment,
        rejected: onRejection
      };
      if ((onRejection || onFulfillment) && !this._handled) {
        this._handled = true;
        if (this._state === REJECTED && isNode) {
          asyncCall(notifyRejectionHandled, this);
        }
      }
      if (this._state === FULFILLED || this._state === REJECTED) {
        // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
      } else {
        // subscribe
        this._then.push(subscriber);
      }
      return subscriber.then;
    },
    catch: function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };
  P.all = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.all().');
    }
    return new P(function (resolve, reject) {
      var results = [];
      var remaining = 0;
      function resolver(index) {
        remaining++;
        return function (value) {
          results[index] = value;
          if (! --remaining) {
            resolve(results);
          }
        };
      }
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];
        if (promise && typeof promise.then === 'function') {
          promise.then(resolver(i), reject);
        } else {
          results[i] = promise;
        }
      }
      if (!remaining) {
        resolve(results);
      }
    });
  };
  P.race = function (promises) {
    if (!Array.isArray(promises)) {
      throw new TypeError('You must pass an array to Promise.race().');
    }
    return new P(function (resolve, reject) {
      for (var i = 0, promise; i < promises.length; i++) {
        promise = promises[i];
        if (promise && typeof promise.then === 'function') {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      }
    });
  };
  P.resolve = function (value) {
    if (value && _typeof(value) === 'object' && value.constructor === P) {
      return value;
    }
    return new P(function (resolve) {
      resolve(value);
    });
  };
  P.reject = function (reason) {
    return new P(function (resolve, reject) {
      reject(reason);
    });
  };
  var picked = typeof Promise === 'function' ? Promise : P;

  var KIT_TOKEN_QUERY_STRING_KEY = 'token';
  var isRuntimeIconUploadBuild = function isRuntimeIconUploadBuild(url) {
    // Runtime icon upload URLs traditionally had no &token=? on their query string.
    // So we will look for the filename that indicates these runtime builds and skip the
    // query string addition to retain consistent behavior.
    return url.indexOf('kit-upload.css') > -1;
  };
  function fetchContents (url, params) {
    var fetch = params.fetch,
      XMLHttpRequest = params.XMLHttpRequest,
      token = params.token;
    var finalUrl = url;
    if (token && !isRuntimeIconUploadBuild(url)) {
      if ('URLSearchParams' in window) {
        finalUrl = new URL(url);
        finalUrl.searchParams.set(KIT_TOKEN_QUERY_STRING_KEY, token);
      } else {
        finalUrl = finalUrl + '?' + KIT_TOKEN_QUERY_STRING_KEY + '=' + encodeURIComponent(token);
      }
    }
    finalUrl = finalUrl.toString();
    return new picked(function (resolve, reject) {
      if (typeof fetch === 'function') {
        fetch(finalUrl, {
          mode: 'cors',
          cache: 'default'
        }).then(function (response) {
          if (response.ok) {
            return response.text();
          } else {
            var message = '';
            /* BEGIN.DEV_ONLY */
            message = "Failed network request for url: ".concat(finalUrl, ", with status: ").concat(response.status);
            /* END.DEV_ONLY */
            throw new Error(message);
          }
        }).then(function (result) {
          resolve(result);
        }).catch(reject);
      } else if (typeof XMLHttpRequest === 'function') {
        var req = new XMLHttpRequest();
        var message = '';
        /* BEGIN.DEV_ONLY */
        message = 'XMLHttpRequest failed';
        /* END.DEV_ONLY */

        req.addEventListener('loadend', function () {
          if (this.responseText) {
            resolve(this.responseText);
          } else {
            /* BEGIN.DEV_ONLY */
            message = "".concat(message, ": loadend");
            /* END.DEV_ONLY */
            reject(new Error(message));
          }
        });
        var errorEvents = ['abort', 'error', 'timeout'];
        errorEvents.map(function (evt) {
          req.addEventListener(evt, function () {
            /* BEGIN.DEV_ONLY */
            message = "".concat(message, ": ").concat(evt);
            /* END.DEV_ONLY */

            reject(new Error(message));
          });
        });
        req.open('GET', finalUrl);
        req.send();
      } else {
        var _message = '';
        /* BEGIN.DEV_ONLY */
        _message = "".concat(_message, ": Unsupported Network Request");
        /* END.DEV_ONLY */
        reject(new Error(_message));
      }
    });
  }

  function replaceUrls(text, baseUrl, version) {
    var res = [[/(url\("?)\.\.\/\.\.\/\.\./g, function (_m, f) {
      return "".concat(f).concat(baseUrl);
    }], [/(url\("?)\.\.\/webfonts/g, function (_m, f) {
      return "".concat(f).concat(baseUrl, "/releases/v").concat(version, "/webfonts");
    }], [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function (_m, f) {
      return "".concat(f).concat(baseUrl);
    }]];
    var replaced = text;
    res.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        re = _ref2[0],
        replacer = _ref2[1];
      replaced = replaced.replace(re, replacer);
    });
    return replaced;
  }
  function prepareStyles (config, params) {
    var autoA11yCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var document = params.document || document;
    var a11yWithPrefixes = a11y.bind(a11y, document, [].concat(xo, Ft.map(function (i) {
      return "fa-".concat(i);
    })));
    if (config.autoA11y.enabled) {
      autoA11yCallback(a11yWithPrefixes);
    }
    var subsetUrl = config.subsetPath && config.baseUrl + '/' + config.subsetPath;
    var styles = [{
      id: 'fa-main',
      addOn: undefined,
      url: subsetUrl
    }];
    if (config.v4shim && config.v4shim.enabled) {
      styles.push({
        id: 'fa-v4-shims',
        addOn: '-v4-shims'
      });
    }
    if (config.v5FontFaceShim && config.v5FontFaceShim.enabled) {
      styles.push({
        id: 'fa-v5-font-face',
        addOn: '-v5-font-face'
      });
    }
    if (config.v4FontFaceShim && config.v4FontFaceShim.enabled) {
      styles.push({
        id: 'fa-v4-font-face',
        addOn: '-v4-font-face'
      });
    }
    if (!subsetUrl && config.customIconsCssPath) {
      var customIconsCssBaseUrl = config.customIconsCssPath.indexOf('kit-upload.css') > -1 ? config.baseUrlKit : config.baseUrl;
      var customIconsCssUrl = customIconsCssBaseUrl + '/' + config.customIconsCssPath;
      styles.push({
        id: 'fa-kit-upload',
        url: customIconsCssUrl
      });
    }
    var promises = styles.map(function (style) {
      return new picked(function (resolve, reject) {
        var url = style.url || buildUrl(config, {
          addOn: style.addOn,
          minify: config.minify.enabled
        });
        var baseCreateStyleElementParams = {
          id: style.id
        };
        var createStyleElementParams = config.subset ? baseCreateStyleElementParams : _objectSpread2(_objectSpread2(_objectSpread2({}, params), baseCreateStyleElementParams), {}, {
          baseUrl: config.baseUrl,
          version: config.version,
          id: style.id,
          contentFilter: function contentFilter(text, params) {
            return replaceUrls(text, params.baseUrl, params.version);
          }
        });
        fetchContents(url, params).then(function (contents) {
          resolve(createStyleElement(contents, createStyleElementParams));
        }).catch(reject);
      });
    });
    return picked.all(promises);
  }
  function createStyleElement(text, params) {
    var contentFilter = params.contentFilter || function (text, _p) {
      return text;
    };
    var styleTag = document.createElement('style');
    var textNode = document.createTextNode(contentFilter(text, params));
    styleTag.appendChild(textNode);
    styleTag.media = 'all';
    if (params.id) {
      styleTag.setAttribute('id', params.id);
    }
    if (params && params.detectingConflicts && params.detectionIgnoreAttr) {
      styleTag.setAttributeNode(document.createAttribute(params.detectionIgnoreAttr));
    }
    return styleTag;
  }

  function prepareScripts (config, params) {
    params.autoA11y = config.autoA11y.enabled;
    if (config.license === 'pro') {
      params.autoFetchSvg = true;
      params.fetchSvgFrom = config.baseUrl + '/releases/' + (config.version === 'latest' ? 'latest' : 'v'.concat(config.version)) + '/svgs';
      params.fetchUploadedSvgFrom = config.uploadsUrl;
    }
    var promises = [];
    if (config.v4shim.enabled) {
      promises.push(new picked(function (resolve, reject) {
        fetchContents(buildUrl(config, {
          addOn: '-v4-shims',
          minify: config.minify.enabled
        }), params).then(function (contents) {
          resolve(createElementWithCommonAttributes(contents, _objectSpread2(_objectSpread2({}, params), {}, {
            id: 'fa-v4-shims'
          })));
        }).catch(reject);
      }));
    }
    promises.push(new picked(function (resolve, reject) {
      var subsetUrl = config.subsetPath && config.baseUrl + '/' + config.subsetPath;
      var url = subsetUrl || buildUrl(config, {
        minify: config.minify.enabled
      });
      fetchContents(url, params).then(function (contents) {
        var script = createElementWithCommonAttributes(contents, _objectSpread2(_objectSpread2({}, params), {}, {
          id: 'fa-main'
        }));
        resolve(addMainAttributes(script, params));
      }).catch(reject);
    }));
    return picked.all(promises);
  }
  function createElementWithCommonAttributes(text, params) {
    var script = document.createElement('SCRIPT');
    var textNode = document.createTextNode(text);
    script.appendChild(textNode);
    script.referrerPolicy = 'strict-origin';
    if (params.id) {
      script.setAttribute('id', params.id);
    }
    if (params && params.detectingConflicts && params.detectionIgnoreAttr) {
      script.setAttributeNode(document.createAttribute(params.detectionIgnoreAttr));
    }
    return script;
  }
  function addMainAttributes(script, params) {
    var autoFetchSvg = params && 'undefined' !== typeof params.autoFetchSvg ? params.autoFetchSvg : undefined;

    // default: true
    var autoA11y = params && 'undefined' !== typeof params.autoA11y ? params.autoA11y : undefined;
    if (autoA11y !== undefined) {
      script.setAttribute('data-auto-a11y', autoA11y ? 'true' : 'false');
    }
    if (autoFetchSvg) {
      script.setAttributeNode(document.createAttribute('data-auto-fetch-svg'));
      script.setAttribute('data-fetch-svg-from', params.fetchSvgFrom);
      script.setAttribute('data-fetch-uploaded-svg-from', params.fetchUploadedSvgFrom);
    }
    return script;
  }

  function domReady (fn) {
    var fns = [],
      _listener,
      doc = document,
      hack = doc.documentElement.doScroll,
      domContentLoaded = 'DOMContentLoaded',
      loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
    if (!loaded) {
      doc.addEventListener(domContentLoaded, _listener = function listener() {
        doc.removeEventListener(domContentLoaded, _listener);
        loaded = 1;
        while (_listener = fns.shift()) _listener();
      });
    }
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

  function observeMutations (fn) {
    if (typeof MutationObserver === 'undefined') {
      return;
    }
    new MutationObserver(fn).observe(document, {
      childList: true,
      subtree: true
    });
  }

  function detectConflicts (config, params) {
    var detectConflictsScript = document.createElement('script');
    if (params && params.detectionIgnoreAttr) {
      detectConflictsScript.setAttributeNode(document.createAttribute(params.detectionIgnoreAttr));
    }
    detectConflictsScript.src = buildUrl(config, {
      baseFilename: 'conflict-detection',
      fileSuffix: 'js',
      subdir: 'js',
      minify: config.minify.enabled
    });
    return detectConflictsScript;
  }

  function prepareElements() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (config.method === 'js') {
      return prepareScripts(config, params);
    }
    if (config.method === 'css') {
      return prepareStyles(config, params, function (a11yWithPrefixes) {
        domReady(a11yWithPrefixes);
        observeMutations(a11yWithPrefixes);
      });
    }
  }
  var faKitErrorPrepend = 'Font Awesome Kit:';
  try {
    if (window.FontAwesomeKitConfig) {
      var config = window.FontAwesomeKitConfig;
      var params = {
        detectingConflicts: config.detectConflictsUntil && new Date() <= new Date(config.detectConflictsUntil),
        detectionIgnoreAttr: 'data-fa-detection-ignore',
        fetch: window.fetch,
        token: config.token,
        XMLHttpRequest: window.XMLHttpRequest,
        document: document
      };
      var currentScript = document.currentScript;
      var targetElement = currentScript ? currentScript.parentElement : document.head;
      prepareElements(config, params).then(function (elements) {
        elements.map(function (element) {
          try {
            targetElement.insertBefore(element, currentScript ? currentScript.nextSibling : null);
          } catch (e) {
            // If the currentScript moves in the DOM before we have a chance to call insertBefore
            // the browser will throw a "NotFoundError: The node before which the new node is to be
            // inserted is not a child of this node". This fallback adds the element to the head and
            // doesn't attempt to maintain the DOM order.
            targetElement.appendChild(element);
          }
        });
        if (params.detectingConflicts && currentScript) {
          // We cannot run the conflict detector if there's no currentScript.
          // That will only occur in IE, though.
          // If we can't access currentScript, we don't have a way to add the ignore
          // attribute to it, which could result in infinite recursion, as the conflict
          // detector tries to load this kit loader script to test for conflicts, and this
          // kit loader, in turn, re-loads the conflict detector, and so on.
          domReady(function () {
            currentScript.setAttributeNode(document.createAttribute(params.detectionIgnoreAttr));
            var script = detectConflicts(config, params);
            document.body.appendChild(script);
          });
        }
      }).catch(function (e) {
        console.error("".concat(faKitErrorPrepend, " ").concat(e));
      });
    }
  } catch (e) {
    console.error("".concat(faKitErrorPrepend, " ").concat(e));
  }

})));
