function ModalBox(o, t) {
    var i = '<div class="ModalTitle">' + o + '</div><div class="ModalContent">' + t + '</div><div class="ModalButtonRow"></div>';
    $.iModal({data: i})
}

function ModalBoxInline(o, t, i, n) {
    if ("undefined" == typeof i) var i = 800;
    if ("undefined" == typeof n) var n = !1;
    if (n) var e = '<div class="ModalTitle">' + o + '</div><div class="ModalContent">' + $(t).html() + '</div><div class="ModalButtonRow"></div>'; else var e = '<div class="ModalTitle">' + o + '</div><div class="ModalContent">' + $(t).html() + '</div><div class="ModalButtonRow"><input type="button" class="CloseButton FormButton" value="Close Window" onclick="$.iModal.close();" /></div>';
    $.iModal({data: e, width: i})
}

!function (o) {
    o.iModal = function (t) {
        return o.iModal.modal.init(t)
    }, o.modal = function () {
    }, o.modal.close = function () {
        return o.iModal.modal.close(!0)
    }, o.iModal.close = function () {
        return o.iModal.modal.close(!0)
    }, o.fn.iModal = function (t) {
        return t = o.extend({}, {type: "inline", inline: o(this).html()}, t), o.iModal.modal.init(t)
    }, o.iModal.defaults = {
        overlay: 40,
        overlayCss: {},
        containerCss: {},
        close: !0,
        closeTitle: "Close",
        closeTxt: !1,
        onOpen: null,
        onShow: null,
        onClose: null,
        onBeforeClose: null,
        onAjaxError: null,
        type: "string",
        width: "630",
        height: "auto",
        buttons: "",
        title: "",
        method: "get",
        top: "15%",
        scrollable: !0
    }, o.iModal.modal = {
        options: null, init: function (t) {
            return o("#ModalContentContainer").length > 0 ? this : (this.options = o.extend({}, o.iModal.defaults, t), "inline" == this.options.type && (this.options.data = o(this.options.inline).html(), o(this.options.inline).html("")), this.generateModal(), this)
        }, checkHeight: function () {
            var t, i, n;
            setTimeout(function () {
                if (t = o(window).height(), i = o("#ModalContentContainer").height(), n = o("#ModalContent").height() || o.iModal.modal.options.contentHeight, i > .85 * t || o.iModal.modal.options.scrollable && .85 * t < o.iModal.modal.options.height) {
                    var e = i - n;
                    o("#ModalContent").css({
                        overflow: "auto",
                        height: .75 * (i - e) + "px"
                    }), o("#ModalContainer").css({
                        height: .8 * t + "px",
                        bottom: 0,
                        "overflow-y": "scroll"
                    }), o(".ModalButtonRow").css("padding-right", "30px")
                }
            }, 1)
        }, ajaxError: function (t, i, n) {
            this.hideLoader(), o.isFunction(this.options.onAjaxError) && this.options.onAjaxError.apply(this, [t, i, n])
        }, createFrame: function (t, i) {
            var n = o("<iframe />").width("100%").attr("frameBorder", "0").appendTo(t)[0],
                e = n.contentWindow ? n.contentWindow.document : n.contentDocument;
            e.open(), e.write(i), e.close(), o(e).ready(function () {
                var t = e.body.scrollHeight + 20;
                o(n).height(t)
            })
        }, displayModal: function (t) {
            "object" == typeof t && "string" == typeof t.imodal && (t = t.imodal), this.hideLoader(), modalContent = "", (modalContent = '<div id="ModalTopLeftCorner"></div><div id="ModalTopBorder"></div><div id="ModalTopRightCorner"></div><div id="ModalLeftBorder"></div><div id="ModalRightBorder"></div><div id="ModalBottomLeftCorner"></div><div id="ModalBottomRightCorner"></div><div id="ModalBottomBorder"></div>'), t.indexOf("ModalTitle") > 0 && t.indexOf("ModalContent") > 0 ? modalContent += '<div id="ModalContentContainer">' + t + "</div>" : (buttons = "", this.options.buttons && (buttons = '<div class="ModalButtonRow">' + this.options.buttons + "</div>"), modalContent += '<div id="ModalContentContainer"><div class="ModalTitle">' + this.options.title + '</div><div class="ModalContent">' + t + "</div>" + buttons + "</div>"), cssProperties = {
                position: "fixed",
                zIndex: 3100,
                width: this.options.width + "px",
                height: this.options.height + "px"
            }, cssProperties.marginLeft = "-" + this.options.width / 2 + "px", cssProperties.top = this.options.top;
            var i = o("<div>").attr("id", "ModalContainer").addClass("modalContainer").css(cssProperties).hide().appendTo("body").html('<div class="modalData">' + modalContent + "</div>");
            if (this.options.className && i.addClass(this.options.className), o("#ModalContainer").find(".ModalButtonRow, #ModalButtonRow").length > 0 && o("#ModalContainer").addClass("ModalContentWithButtons"), this.options.close && (modal = this, o("<a/>").addClass("modalClose").attr("title", this.options.closeTitle).appendTo("#ModalContainer").click(function (o) {
                o.preventDefault(), modal.close()
            }), o(document).bind("keypress", function (t) {
                27 == t.keyCode && o("#ModalContainer .modalClose").click()
            }), this.options.closeTxt && (o("#ModalContainer .modalClose").html(this.options.closeTitle).css("backgroundPosition", "65px 0").css("lineHeight", "15px").css("textDecoration", "none").css("width", "60px").css("paddingRight", "20px").css("textAlign", "right"), o("#ModalContainer .ModalTitle").css("borderBottom", "medium none").css("backgroundColor", "#fff"), o("#ModalContainer #ModalTopBorder").css("backgroundImage", "none"))), o.isFunction(this.options.onOpen) ? this.options.onOpen.apply(this) : (o("#ModalContainer").show(), o.isFunction(this.options.onShow) && this.options.onShow.apply(this)), this.options.scrollable) {
                var n = o("#ModalContent");
                n.css("overflow", "auto"), o(".ModalButtonRow").css("padding-top", "10px"), this.checkHeight()
            }
            o(window).resize(this.checkHeight).scroll(this.checkHeight)
        }, showLoader: function () {
            o("<div/>").attr("id", "ModalLoadingIndicator").appendTo("body")
        }, showOverlayLoader: function () {
            o("<div/>").attr("id", "ModalOverlay").addClass("modalOverlay").css({
                opacity: .4,
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 3e3
            }).appendTo("body"), o("<div/>").attr("id", "ModalLoadingIndicator").appendTo("body")
        }, hideOverlayLoader: function () {
            o("#ModalLoadingIndicator").remove(), o(".modalOverlay").remove()
        }, hideLoader: function () {
            o("#ModalLoadingIndicator").remove()
        }, generateModal: function () {
            if (o("<div/>").attr("id", "ModalOverlay").addClass("modalOverlay").css({
                opacity: this.options.overlay / 100,
                height: "100%",
                width: "100%",
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 3e3
            }).appendTo("body"), this.showLoader(), "ajax" == this.options.type) {
                modal = this, data = {}, void 0 != this.options.urlData && (data = this.options.urlData);
                var t = "get";
                this.options.method && (t = this.options.method), o.ajax({
                    url: this.options.url,
                    type: t,
                    success: function (o) {
                        modal.displayModal(o)
                    },
                    error: function (o, t, i) {
                        modal.ajaxError(o, t, i)
                    },
                    data: data,
                    type: this.options.method,
                    global: !1
                })
            } else if ("iframe" == this.options.type) {
                modal = this, data = {}, void 0 != this.options.urlData && (data = this.options.urlData);
                var t = "get";
                this.options.method && (t = this.options.method), o.ajax({
                    url: this.options.url,
                    type: t,
                    success: function (t) {
                        modal.displayModal("");
                        modal.createFrame(o("#ModalContentContainer .ModalContent"), t)
                    },
                    error: function (o, t, i) {
                        modal.ajaxError(o, t, i)
                    },
                    data: data,
                    type: this.options.method,
                    global: !1
                })
            } else this.displayModal(this.options.data)
        }, close: function (t) {
            if (this.options) {
                if (o.isFunction(this.options.onBeforeClose)) {
                    if (this.options.onBeforeClose.apply(this, []) === !1) return;
                    this.options.onBeforeClose = null
                }
                "inline" == this.options.type && o(this.options.inline).html(this.options.data), o.isFunction(this.options.onClose) && !t ? this.options.onClose.apply(this) : o("#ModalContainer").remove(), o("#ModalLoadingIndicator").remove(), o("#ModalOverlay").remove(), o("#ModalTempiFrame").remove()
            }
        }
    }
}(jQuery);