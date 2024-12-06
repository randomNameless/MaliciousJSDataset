(function () {
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var WidgetMode;
    (function (WidgetMode) {
        WidgetMode["AutoHide"] = "autoHide";
        WidgetMode["Overlay"] = "overlay";
        WidgetMode["StickyFooter"] = "stickyFooter";
        WidgetMode["Default"] = "default";
    })(WidgetMode || (WidgetMode = {}));
    var Namespace;
    (function (Namespace) {
        Namespace["Aol"] = "aol";
        Namespace["Yahoo"] = "yahoo";
    })(Namespace || (Namespace = {}));
    var WIN = window;
    var DISPATCHER_AOL_HOST = 'https://membernotifications.aol.com';
    var DISPATCHER_YAHOO_HOST = 'https://dispatcher.yahoo.com';
    var NOSCROLL_CLASSNAME = '_dispatcherWidget_noscroll';
    var STYLE_TAG_CONTENT = ".".concat(NOSCROLL_CLASSNAME, " {overflow: hidden;}");
    var OVERLAY_CONTAINER_STYLE = "position: fixed; display: flex; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 999; justify-content: center; align-items: center; overflow-x: hidden; overflow-y: auto;";
    var DIALOG_CONTAINER_STYLE = "box-sizing: content-box; position: relative; z-index: 1000;";
    var DIALOG_CONTAINER_DEFAULT_STYLE = "".concat(DIALOG_CONTAINER_STYLE, " padding: 20px;");
    var CLOSEBTN_CONTAINER_DEFAULT_STYLE = "position: absolute; top: 2px; right: 2px; height: 16px; width: 16px; z-index: 1001; cursor: pointer; stroke: #fff; stroke-width: 2; background: none; border: none; padding: 0;";
    var CLOSEBTN_CONTAINER_STYLE = "display: none;";
    var CONTENT_CONTAINER_DEFAULT_STYLE = "box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%);";
    var SAFE_VALUE_PATTERN = /^[\w\s\-%@;\:\!\(\)\/]{1,512}$/;
    var SAFE_NAME_PATTERN = /^[\w\-]{1,128}$/;
    var config = null;
    var dispatcherHost = "";
    var styleTagId = "";
    function randomGUID() {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    function PresenterFromMode(mode) {
        switch (mode) {
            case WidgetMode.Overlay: return new OverlayPresenter();
            case WidgetMode.AutoHide: return new AutoHidePresenter();
            case WidgetMode.StickyFooter: return new StickyFooterPresenter();
        }
        return new Presenter();
    }
    var Presenter = /** @class */ (function () {
        function Presenter() {
        }
        Presenter.prototype.show = function (elm) {
            if (elm)
                elm.style.display = "block";
        };
        Presenter.prototype.hide = function (elm) {
            if (elm)
                elm.style.display = "none";
        };
        Presenter.prototype.buildContentContainer = function (context, iframeUrl) {
            var iframeElm = document.createElement('iframe');
            context.iframeId = 'dispatcherWidget_' + randomGUID();
            iframeElm.setAttribute('id', context.iframeId);
            iframeElm.setAttribute('frameborder', '0');
            iframeElm.setAttribute('scrolling', 'no');
            setDimension(iframeElm, context.height, "height");
            if (!setDimension(iframeElm, context.width, "width") && context.responsive) {
                setDimension(iframeElm, "100%", "width");
            }
            iframeElm.style.border = 'none';
            if (context.mode || context.responsive) {
                // Check newer properties to restrict display=block to newer integrations. 
                // display=block breaks centering for some older integrations. 
                Presenter.prototype.show(iframeElm);
            }
            iframeElm.style.overflow = "hidden";
            var contentContainerStyle = context.contentContainerStyle || context.containerStyle;
            if (contentContainerStyle && SAFE_VALUE_PATTERN.test(contentContainerStyle)) {
                iframeElm.style.cssText += " " + contentContainerStyle;
            }
            var contentContainerClass = context.contentContainerClass || context.containerClass;
            if (contentContainerClass && SAFE_NAME_PATTERN.test(contentContainerClass)) {
                iframeElm.className += " " + contentContainerClass;
            }
            iframeElm.setAttribute('src', iframeUrl);
            iframeElm.setAttribute('referrerPolicy', 'strict-origin');
            iframeElm.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
            iframeElm.setAttribute('allowfullscreen', '');
            return iframeElm;
        };
        Presenter.prototype.buildOuterContainer = function (context) {
            var outerContainer = WIN.document.getElementById(context.targetElementId);
            return outerContainer;
        };
        Presenter.prototype.dispose = function (context) {
            var childToRemove = document.getElementById(context.iframeId);
            if (childToRemove) {
                childToRemove.parentNode.removeChild(childToRemove);
            }
        };
        Presenter.prototype.onLoad = function (context, payload) {
            if (payload.status == "200") {
                this.showIfCan(context);
                if (context.responsive) {
                    setDimensionForId(context.iframeId, payload.height, "height");
                }
            }
        };
        // onClose thru onHide is meant for dynamic show/hide scenarios.
        Presenter.prototype.onClose = function (context) { };
        Presenter.prototype.showIfCan = function (context) {
            if (this.canShow(context)) {
                this.onShow(context);
            }
            else {
                this.onHide(context);
            }
        };
        Presenter.prototype.canShow = function (context) {
            var canShow = true;
            if (context.showOnElementClass && context.showOnElementClass.elementId && context.showOnElementClass.class) {
                var elm = document.getElementById(context.showOnElementClass.elementId);
                if (!elm.classList.contains(context.showOnElementClass.class)) {
                    canShow = false;
                }
            }
            if (context.showOnMatchMedia && context.showOnMatchMedia.mediaQueryList
                && !context.showOnMatchMedia.mediaQueryList.matches) {
                canShow = false;
            }
            return canShow;
        };
        Presenter.prototype.onShow = function (context) {
            this.show(document.getElementById(context.iframeId));
            if (!context.initialShowDone) {
                var iframeElm = document.getElementById(context.iframeId);
                if (context.responsive) {
                    // If the content was previously hidden or unsized, there can be issues with
                    // initial heights in older browsers. If not already set, set it to 1 and let 
                    // it resize from there.
                    var currentHeight = parseInt(iframeElm.style.height) || 0;
                    if (currentHeight <= 0) {
                        setDimensionForId(context.iframeId, 1, "height");
                    }
                }
                iframeElm.contentWindow.postMessage({ type: 'shown', payload: {} }, dispatcherHost);
                context.initialShowDone = true;
            }
        };
        Presenter.prototype.onHide = function (context) {
            this.hide(document.getElementById(context.iframeId));
        };
        Presenter.prototype.onResize = function (context, payload) {
            if (context.responsive) {
                setDimensionForId(context.iframeId, payload.height, "height");
            }
        };
        return Presenter;
    }());
    var AutoHidePresenter = /** @class */ (function (_super) {
        __extends(AutoHidePresenter, _super);
        function AutoHidePresenter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AutoHidePresenter.prototype.buildContentContainer = function (context, iframeUrl) {
            var iframeElm = _super.prototype.buildContentContainer.call(this, context, iframeUrl);
            this.hide(iframeElm);
            return iframeElm;
        };
        AutoHidePresenter.prototype.onLoad = function (context, payload) {
            if (payload.status == "200") {
                this.showIfCan(context);
            }
        };
        return AutoHidePresenter;
    }(Presenter));
    var StickyFooterPresenter = /** @class */ (function (_super) {
        __extends(StickyFooterPresenter, _super);
        function StickyFooterPresenter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StickyFooterPresenter.prototype.show = function (elm) {
            setDimension(elm, "0px", "bottom");
        };
        StickyFooterPresenter.prototype.hide = function (elm) {
            this.hideForHeight(elm, elm.style.height, true);
        };
        StickyFooterPresenter.prototype.buildContentContainer = function (context, iframeUrl) {
            var iframeElm = _super.prototype.buildContentContainer.call(this, context, iframeUrl);
            iframeElm.style.cssText = "position: fixed; bottom: -100px; left: 0px; right: 0px; margin-left: auto; margin-right: auto; transition: bottom 0.3s; z-index: 500; ".concat(iframeElm.style.cssText);
            this.hideForHeight(iframeElm, iframeElm.style.height);
            Presenter.prototype.hide(iframeElm);
            return iframeElm;
        };
        StickyFooterPresenter.prototype.onLoad = function (context, payload) {
            if (payload.status == "200") {
                if (context.responsive) {
                    setDimensionForId(context.iframeId, 1, "height");
                    setDimensionsForId(context.iframeId, payload.styles);
                }
                Presenter.prototype.show(document.getElementById(context.iframeId));
                this.showIfCan(context);
            }
        };
        StickyFooterPresenter.prototype.onResize = function (context, payload) {
            if (context.responsive) {
                var iframeElm = document.getElementById(context.iframeId);
                iframeElm.style.transition = "";
                this.hideForHeight(iframeElm, payload.height, !this.canShow(context));
                setDimensionsForId(context.iframeId, payload.styles);
                _super.prototype.onResize.call(this, context, payload);
                iframeElm.style.transition = "bottom 0.3s";
            }
        };
        StickyFooterPresenter.prototype.onClose = function (context) {
            Presenter.prototype.hide(document.getElementById(context.iframeId));
        };
        StickyFooterPresenter.prototype.hideForHeight = function (elm, height, forceHide) {
            if (forceHide === void 0) { forceHide = false; }
            var currentBottom = parseInt(elm.style.bottom) || 0;
            if (currentBottom < 0 || forceHide) {
                currentBottom = Math.abs(currentBottom);
                var minRequiredBottom = (height && parseInt(height)) || 0;
                if (minRequiredBottom > currentBottom) {
                    setDimension(elm, "-".concat(minRequiredBottom, "px"), "bottom");
                }
            }
        };
        return StickyFooterPresenter;
    }(Presenter));
    var OverlayPresenter = /** @class */ (function (_super) {
        __extends(OverlayPresenter, _super);
        function OverlayPresenter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OverlayPresenter.prototype.show = function (elm) {
            if (elm) {
                _super.prototype.show.call(this, elm);
                document.body.classList.add(NOSCROLL_CLASSNAME);
            }
        };
        OverlayPresenter.prototype.hide = function (elm) {
            if (elm) {
                _super.prototype.hide.call(this, elm);
                document.body.classList.remove(NOSCROLL_CLASSNAME);
            }
        };
        OverlayPresenter.prototype.buildContentContainer = function (context, iframeUrl) {
            var iframeElm = _super.prototype.buildContentContainer.call(this, context, iframeUrl);
            if (context.responsive) {
                setDimension(iframeElm, "100%", "height");
                setDimension(iframeElm, "100%", "width");
            }
            if (context.useDefaultOverlayDialog) {
                iframeElm.style.cssText = "".concat(CONTENT_CONTAINER_DEFAULT_STYLE, " ").concat(iframeElm.style.cssText);
            }
            return iframeElm;
        };
        OverlayPresenter.prototype.buildOuterContainer = function (context) {
            var outerContainer = _super.prototype.buildOuterContainer.call(this, context);
            var placeholderElement = outerContainer;
            _super.prototype.hide.call(this, placeholderElement);
            var self = this;
            placeholderElement.onclick = function (event) {
                self.hide(placeholderElement);
            };
            var overlayContainer = document.createElement('div');
            placeholderElement.appendChild(overlayContainer);
            context.overlayContainerId = 'dispatcherWidget_overlayContainer_' + randomGUID();
            overlayContainer.setAttribute('id', context.overlayContainerId);
            if (context.overlayContainerClass && SAFE_NAME_PATTERN.test(context.overlayContainerClass)) {
                overlayContainer.className = context.overlayContainerClass;
            }
            else {
                overlayContainer.style.cssText += " " + OVERLAY_CONTAINER_STYLE;
            }
            var dialogContainer = outerContainer = document.createElement('div');
            overlayContainer.appendChild(dialogContainer);
            context.dialogContainerId = 'dispatcherWidget_dialogContainer_' + randomGUID();
            dialogContainer.setAttribute('id', context.dialogContainerId);
            dialogContainer.setAttribute('role', 'dialog');
            dialogContainer.setAttribute('aria-modal', 'true');
            if (context.dialogContainerClass && SAFE_NAME_PATTERN.test(context.dialogContainerClass)) {
                dialogContainer.className = context.dialogContainerClass;
            }
            else {
                dialogContainer.style.cssText += " " +
                    (context.useDefaultOverlayDialog ? DIALOG_CONTAINER_DEFAULT_STYLE : DIALOG_CONTAINER_STYLE);
            }
            if (context.responsive) {
                setDimension(dialogContainer, context.width, "width");
                setDimension(dialogContainer, context.height, "height");
            }
            var closeBtnContainer = document.createElement('button');
            dialogContainer.appendChild(closeBtnContainer);
            closeBtnContainer.setAttribute('aria-label', 'close');
            closeBtnContainer.onclick = function (event) {
                self.hide(placeholderElement);
            };
            if (context.closeBtnContainerClass && SAFE_NAME_PATTERN.test(context.closeBtnContainerClass)) {
                closeBtnContainer.className = context.closeBtnContainerClass;
            }
            else {
                closeBtnContainer.style.cssText += " " +
                    (context.useDefaultOverlayDialog ? CLOSEBTN_CONTAINER_DEFAULT_STYLE : CLOSEBTN_CONTAINER_STYLE);
            }
            var svgBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            closeBtnContainer.appendChild(svgBtn);
            svgBtn.setAttribute('viewBox', '0 0 10 10');
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svgBtn.appendChild(path);
            path.setAttribute('d', 'M0 0 L10 10 M10 0 L0 10 Z');
            return outerContainer;
        };
        OverlayPresenter.prototype.dispose = function (context) {
            var childToRemove = document.getElementById(context.overlayContainerId);
            if (childToRemove) {
                childToRemove.parentNode.removeChild(childToRemove);
            }
        };
        OverlayPresenter.prototype.onLoad = function (context, payload) {
            if (payload.status == "200") {
                this.showIfCan(context);
            }
        };
        OverlayPresenter.prototype.onShow = function (context) {
            this.show(document.getElementById(context.targetElementId));
            document.getElementById(context.iframeId).contentWindow.focus();
            if (!context.initialShowDone) {
                if (context.responsive) {
                    // If the content was previously hidden, its reported height cannot be trusted.
                    // So, set it to 1 and let it resize from there.
                    setDimensionForId(context.dialogContainerId, 1, "height");
                }
                var iframeElm = document.getElementById(context.iframeId);
                iframeElm.contentWindow.postMessage({ type: 'shown', payload: {} }, dispatcherHost);
                context.initialShowDone = true;
            }
            this.adjustDialogToFit(context);
        };
        OverlayPresenter.prototype.onHide = function (context) {
            this.hide(document.getElementById(context.targetElementId));
        };
        OverlayPresenter.prototype.onClose = function (context) {
            this.hide(document.getElementById(context.targetElementId));
        };
        OverlayPresenter.prototype.onResize = function (context, payload) {
            if (context.responsive) {
                setDimensionForId(context.dialogContainerId, payload.height, "height");
            }
            this.adjustDialogToFit(context);
        };
        OverlayPresenter.prototype.adjustDialogToFit = function (context) {
            var dialog = document.getElementById(context.dialogContainerId);
            if (window.innerHeight < dialog.scrollHeight) {
                console.log("adjust, align-items=start");
                setDimensionForId(context.overlayContainerId, "start", "align-items");
            }
            else {
                console.log("adjust, align-items=center");
                setDimensionForId(context.overlayContainerId, "center", "align-items");
            }
        };
        return OverlayPresenter;
    }(Presenter));
    function dispose() {
        disposeStyles();
        if (!config || !config.contexts)
            return;
        for (var i = 0; i < config.contexts.length; ++i) {
            var context = config.contexts[i];
            if (context.mediaModes && context.mediaModes.length > 0 && window.matchMedia) {
                context.mediaModes.forEach(function (mediaMode) {
                    if (mediaMode.mediaQueryList && mediaMode.changeListener) {
                        console.log("cleaning up mediaquerylist listener");
                        if (mediaMode.mediaQueryList.addEventListener) {
                            mediaMode.mediaQueryList.removeEventListener("change", mediaMode.changeListener);
                        }
                        else if (mediaMode.mediaQueryList.removeListener) {
                            mediaMode.mediaQueryList.removeListener(mediaMode.changeListener);
                        }
                    }
                });
            }
            if (context.showOnElementClass && context.showOnElementClass.mutationObserver) {
                context.showOnElementClass.mutationObserver.disconnect();
                context.showOnElementClass.mutationObserver = null;
                console.log("disconnected mutation observer");
            }
            if (context.showOnMatchMedia && context.showOnMatchMedia.mediaQueryList && context.showOnMatchMedia.changeListener
                && window.matchMedia) {
                console.log("cleaning up showOn mediaquerylist listener");
                if (context.showOnMatchMedia.mediaQueryList.addEventListener) {
                    context.showOnMatchMedia.mediaQueryList.removeEventListener("change", context.showOnMatchMedia.changeListener);
                }
                else if (context.showOnMatchMedia.mediaQueryList.removeListener) {
                    context.showOnMatchMedia.mediaQueryList.removeListener(context.showOnMatchMedia.changeListener);
                }
            }
            context.presenterStrategy.dispose(context);
        }
        config = null;
    }
    function setupMessaging() {
        if (config) {
            var methodName = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventName = methodName == "attachEvent" ? "onmessage" : "message";
            WIN[methodName](eventName, handleMessage);
        }
    }
    function handleMessage(msg) {
        if (!msg || !msg.origin || (msg.origin !== "null" && DISPATCHER_AOL_HOST != msg.origin
            && DISPATCHER_YAHOO_HOST != msg.origin)) {
            // Origin mismatch, disregard message. Note - origin="null" if sandbox settings lack
            // same-origin. Let that slide and check the source to confirm further.
            return;
        }
        if (!config || !config.contexts)
            return;
        var fromContext = null;
        for (var i = 0; i < config.contexts.length && !fromContext; ++i) {
            var context = config.contexts[i];
            var iframeElm = document.getElementById(context.iframeId);
            if (iframeElm && iframeElm.contentWindow === msg.source) {
                fromContext = context;
            }
        }
        if (fromContext && msg.data) {
            handleInternalMessage(fromContext, msg.data);
            var callback = config.onContextMessage;
            if (callback) {
                msg.data.context = fromContext;
                callback(msg.data);
            }
        }
        else
            console.log("couldn't find source");
    }
    function setupStyles() {
        var styleElm = document.createElement('style');
        styleElm.id = styleTagId = 'dispatcherWidget_style_' + randomGUID();
        styleElm.appendChild(document.createTextNode(STYLE_TAG_CONTENT));
        document.head.appendChild(styleElm);
    }
    function disposeStyles() {
        if (styleTagId) {
            var styleNode = document.getElementById(styleTagId);
            if (styleNode) {
                styleNode.parentNode.removeChild(styleNode);
            }
            styleTagId = "";
        }
    }
    function debounce(func, timeout) {
        var timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(func, timeout);
        };
    }
    function handleInternalMessage(fromContext, data) {
        switch (data.type) {
            case "load":
                if (data.payload.status == "200") {
                    if (fromContext.mediaModes && fromContext.mediaModes.length > 0 && window.matchMedia) {
                        fromContext.mediaModes.forEach(function (mediaMode) {
                            mediaMode.mediaQueryList = window.matchMedia(mediaMode.query);
                            mediaMode.changeListener = function (e) {
                                var iframeElm = document.getElementById(fromContext.iframeId);
                                iframeElm.contentWindow.postMessage({
                                    type: 'mediaMode',
                                    payload: { mode: mediaMode.mode, applies: e.matches }
                                }, dispatcherHost);
                                console.log("mediaMode event, posted mode=" + mediaMode.mode + ", applies=" + e.matches);
                            };
                            if (mediaMode.mediaQueryList.addEventListener) {
                                mediaMode.mediaQueryList.addEventListener("change", mediaMode.changeListener);
                            }
                            else if (mediaMode.mediaQueryList.addListener) {
                                mediaMode.mediaQueryList.addListener(mediaMode.changeListener);
                            }
                            mediaMode.changeListener({ matches: mediaMode.mediaQueryList.matches, media: mediaMode.mediaQueryList.media });
                        });
                    }
                    // Setup "showOn" handlers
                    if (fromContext.showOnElementClass && fromContext.showOnElementClass.elementId && fromContext.showOnElementClass.class) {
                        function callback() {
                            fromContext.presenterStrategy.showIfCan(fromContext);
                        }
                        fromContext.showOnElementClass.mutationObserver = new MutationObserver(debounce(callback, 100));
                        fromContext.showOnElementClass.mutationObserver.observe(document.getElementById(fromContext.showOnElementClass.elementId), { attributes: true, attributeFilter: ['class'] });
                    }
                    if (fromContext.showOnMatchMedia && fromContext.showOnMatchMedia.query && window.matchMedia) {
                        var mediaQueryList = window.matchMedia(fromContext.showOnMatchMedia.query);
                        var changeListener = function (e) {
                            fromContext.presenterStrategy.showIfCan(fromContext);
                        };
                        if (mediaQueryList.addEventListener) {
                            mediaQueryList.addEventListener("change", changeListener);
                        }
                        else if (mediaQueryList.addListener) {
                            mediaQueryList.addListener(changeListener);
                        }
                        fromContext.showOnMatchMedia.mediaQueryList = mediaQueryList;
                        fromContext.showOnMatchMedia.changeListener = changeListener;
                    }
                }
                fromContext.presenterStrategy.onLoad(fromContext, data.payload);
                break;
            case "cta":
            case "close":
                fromContext.presenterStrategy.onClose(fromContext);
                break;
            case "resize":
                fromContext.presenterStrategy.onResize(fromContext, data.payload);
                break;
        }
    }
    function setDimensionForId(elementId, value, dim) {
        var elm = document.getElementById(elementId);
        if (elm)
            return setDimension(elm, value, dim);
        return false;
    }
    function setDimension(elm, value, dim) {
        if (elm && (value || (value === 0 && dim == 'height')) && SAFE_VALUE_PATTERN.test(value)) {
            value = isNaN(value) ? value : (value + 'px');
            if (getComputedStyle(elm)[dim] != value) {
                elm.style[dim] = value;
            }
            return true;
        }
        return false;
    }
    function setDimensionsForId(elementId, dimensions) {
        for (var dim in dimensions) {
            setDimensionForId(elementId, dimensions[dim], dim);
        }
    }
    function buildPlacement(config, context) {
        var _a;
        context.presenterStrategy = PresenterFromMode(context.mode);
        var iframeUrl = dispatcherHost + '/offers/' + ((_a = context.appId) !== null && _a !== void 0 ? _a : config.appId) + '/' + context.name;
        var params = [];
        if (config.locale)
            params.push("locale=" + encodeURIComponent(config.locale));
        if (config.cobrand)
            params.push("cobrand=" + encodeURIComponent(config.cobrand));
        if (config.device)
            params.push("device=" + encodeURIComponent(config.device));
        if (context.requestId)
            params.push("irid=" + encodeURIComponent(context.requestId));
        if (context.offerId)
            params.push("offerId=" + encodeURIComponent(context.offerId));
        if (context.productName)
            params.push("productName=" + encodeURIComponent(context.productName));
        if (context.pricePoint)
            params.push("pricePoint=" + encodeURIComponent(context.pricePoint));
        if (context.forceOfferName)
            params.push("forceOfferName=" + encodeURIComponent(context.forceOfferName));
        if (context.dispV2OffersPercentage)
            params.push("dispV2OffersPercentage=" + encodeURIComponent(context.dispV2OffersPercentage));
        if (context.tags && Array.isArray(context.tags)) {
            context.tags.forEach(function (v) { return params.push("tags=" + encodeURIComponent(v)); });
        }
        var valid = Array.isArray(context.mediaModes);
        for (var j = 0; valid && j < context.mediaModes.length; ++j) {
            var mediaMode = context.mediaModes[j];
            if (!mediaMode.mode || !SAFE_NAME_PATTERN.test(mediaMode.mode)
                || !mediaMode.query || !SAFE_VALUE_PATTERN.test(mediaMode.query)) {
                valid = false;
            }
        }
        if (!valid)
            context.mediaModes = null;
        if (params.length > 0)
            iframeUrl += "?" + params.join('&');
        var outerContainer = context.presenterStrategy.buildOuterContainer(context);
        var iframeElm = context.presenterStrategy.buildContentContainer(context, iframeUrl);
        outerContainer.insertBefore(iframeElm, outerContainer.firstChild);
    }
    WIN.dispatcherWidget = {
        initialize: function (opts) {
            dispose();
            config = opts;
            setupMessaging();
            setupStyles();
            if (!config || !config.contexts)
                return false;
            dispatcherHost = DISPATCHER_YAHOO_HOST;
            if (config.namespace == Namespace.Aol
                || (config.namespace != Namespace.Yahoo && window.location.hostname.match(/\.aol\.com$/gi))) {
                dispatcherHost = DISPATCHER_AOL_HOST;
            }
            for (var i = 0; i < config.contexts.length; ++i) {
                var context = config.contexts[i];
                buildPlacement(config, context);
            }
            return true;
        },
        addContexts: function (contexts) {
            config.contexts = config.contexts.concat(contexts);
            for (var i = 0; i < contexts.length; ++i) {
                var context = contexts[i];
                buildPlacement(config, context);
            }
        },
        show: function (contextTargetElmId) {
            if (config && config.contexts) {
                var context = null;
                for (var i = 0; !context && i < config.contexts.length; ++i) {
                    if (config.contexts[i].targetElementId == contextTargetElmId) {
                        context = config.contexts[i];
                    }
                }
                if (context)
                    context.presenterStrategy.onShow(context);
            }
        },
        hide: function (contextTargetElmId) {
            if (config && config.contexts) {
                var context = null;
                for (var i = 0; !context && i < config.contexts.length; ++i) {
                    if (config.contexts[i].targetElementId == contextTargetElmId) {
                        context = config.contexts[i];
                    }
                }
                if (context)
                    context.presenterStrategy.onHide(context);
            }
        }
    };
})();
