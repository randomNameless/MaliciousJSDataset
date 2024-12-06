/*
    Title: Window Resize End Plugin
    Version: 1.0
    Created on: May 08, 2014
    Author: Manoj Babu Balaraman
    Copyright: Verndale.

*/

(function ($) {
    $.windowResizeEnd = function (el, options) {
        //base settings
        var base = this;

        base.$el = $(el);
        base.el = el;

        base.$el.data("windowResizeEnd", base);
        base.rtime = new Date(1, 1, 2000, 12, 00, 00);
        base.timeout = false;
        base.delta = 400;

        //Intializing the method
        base.init = function () {
            base.options = $.extend({}, $.windowResizeEnd.defaultOptions, options);

            if (base.options.runOnStart) base.options.onDragEnd();

            $(base.el).resize(function () {
                base.rtime = new Date();
                if (base.timeout === false) {
                    base.timeout = true;
                    setTimeout(base.windowResizeEnd, base.delta);
                }
            });

        };
        
        //Executing the whether the window resize is done/not
        base.windowResizeEnd = function () {
            if (new Date() - base.rtime < base.delta) {
                setTimeout(base.windowResizeEnd, base.delta);
            } else {
                base.timeout = false;
                base.options.onDragEnd();
            }
        };
        
        //Intializing the init method
        base.init();
    };

    //by Default options
    $.windowResizeEnd.defaultOptions = {
        onDragEnd: function () {},
        runOnStart: false
    };

    //executing the resize method options onload of browser window
    $.fn.windowResizeEnd = function (options) {
        return this.each(function () {
            (new $.windowResizeEnd(this, options));           
        });
    };

})(jQuery);