var Modal = function(element, options) {
    this.options = options;
    this.$element = $(element).delegate('[data-dismiss="modal"]', "click.dismiss.modal", $.proxy(this.hide, this));
    this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
};
Modal.prototype = {
    constructor: Modal,
    toggle: function() {
        return this[!this.isShown ? "show" : "hide"]()
    },
    show: function() {
        var that = this
          , e = $.Event("show");
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented())
            return;
        this.isShown = true;
        this.escape();
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length)
                that.$element.appendTo(document.body);
            that.$element.show();
            if (transition)
                that.$element[0].offsetWidth;
            that.$element.addClass("in").attr("aria-hidden", false);
            that.enforceFocus();
            transition ? that.$element.one($.support.transition.end, function() {
                that.$element.focus().trigger("shown")
            }) : that.$element.focus().trigger("shown")
        })
    },
    hide: function(e) {
        e && e.preventDefault();
        var that = this;
        e = $.Event("hide");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented())
            return;
        this.isShown = false;
        this.escape();
        $(document).off("focusin.modal");
        this.$element.removeClass("in").attr("aria-hidden", true);
        $.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
    },
    enforceFocus: function() {
        var that = this;
        $(document).on("focusin.modal", function(e) {
            if (that.$element[0] !== e.target && !that.$element.has(e.target).length)
                that.$element.focus()
        })
    },
    escape: function() {
        var that = this;
        if (this.isShown && this.options.keyboard)
            this.$element.on("keyup.dismiss.modal", function(e) {
                e.which == 27 && that.hide()
            });
        else if (!this.isShown)
            this.$element.off("keyup.dismiss.modal")
    },
    hideWithTransition: function() {
        var that = this
          , timeout = setTimeout(function() {
            that.$element.off($.support.transition.end);
            that.hideModal()
        }, 500);
        this.$element.one($.support.transition.end, function() {
            clearTimeout(timeout);
            that.hideModal()
        })
    },
    hideModal: function(that) {
        this.$element.hide().trigger("hidden");
        this.backdrop()
    },
    removeBackdrop: function() {
        this.$backdrop.remove();
        this.$backdrop = null
    },
    backdrop: function(callback) {
        var that = this
          , animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body);
            this.$backdrop.click(this.options.backdrop == "static" ? $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this));
            if (doAnimate)
                this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            doAnimate ? this.$backdrop.one($.support.transition.end, callback) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) : this.removeBackdrop()
        } else if (callback)
            callback()
    }
};