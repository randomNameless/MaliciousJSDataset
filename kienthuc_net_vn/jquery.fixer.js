/********
MODIFIED BY TUNGNT. DONOT REPLACE WITH NEWER VERSION!
/********

/*!
 * jquery.fixer.js 0.0.3 - https://github.com/yckart/jquery.fixer.js
 * Fix elements as `position:sticky` do.
 *
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com/) | @yckart
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/07/02
 **/

;(function($, window) {

    var $win = $(window);
    var defaults = {
        gap: 0,
        horizontal: false,
        isFixed: $.noop
    };

    var supportSticky = function(elem) {
        var prefixes = ['', '-webkit-', '-moz-', '-ms-', '-o-'], prefix;
        while (prefix = prefixes.pop()) {
            elem.style.cssText = 'position:' + prefix + 'sticky';
            if (elem.style.position !== '') return true;
        }
        return false;
    };

    $.fn.fixer = function(options) {
        options = $.extend({}, defaults, options);
        var hori = options.horizontal,
            cssPos = hori ? 'left' : 'top',
			propScroll = hori ? 'scrollLeft' : 'scrollTop',
			propSize = hori ? 'outerWidth' : 'outerHeight';

        return this.each(function() {
            var style = this.style,
                $this = $(this),
                $parent = $this.parent(),
				startElemSize = $this[propSize](),
				startParentSize = $parent[propSize](),
				startMargin = $this.offset()[cssPos] - $parent.offset()[cssPos];

            if (supportSticky(this)) {
                style[cssPos] = options.gap + 'px';
                return;
            }

			if (startParentSize <= startMargin + startElemSize)
			{
				return;
			}

            $win.on('scroll', function() {
                var scrollPos = $win[propScroll](),
                    elemSize = $this[propSize](),
                    parentPos = $parent.offset()[cssPos],
                    parentSize = $parent[propSize]();

                if (scrollPos >= parentPos + startMargin - options.gap && (parentSize + parentPos - options.gap) >= (scrollPos + elemSize)) {
                    style.position = 'fixed';
                    style[cssPos] = options.gap + 'px';
                    options.isFixed();
                } else if (scrollPos < parentPos + startMargin - options.gap) {
                    style.position = 'absolute';
                    style[cssPos] = startMargin + 'px';
                } else {
                    style.position = 'absolute';
                    style[cssPos] = parentSize - elemSize + 'px';
                }
            }).resize();
        });
    };

}(jQuery, this));