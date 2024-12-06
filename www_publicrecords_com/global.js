(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function (jQuery, window, undefined) {
  "use strict";

  var matched, browser;
  jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match = /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    var platform_match = /(ipad)/.exec(ua) || /(iphone)/.exec(ua) || /(android)/.exec(ua) || /(windows phone)/.exec(ua) || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/i.exec(ua) || [];
    return {
      browser: match[3] || match[1] || "",
      version: match[2] || "0",
      platform: platform_match[0] || ""
    };
  };
  matched = jQuery.uaMatch(window.navigator.userAgent);
  browser = {};
  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.version);
  }
  if (matched.platform) {
    browser[matched.platform] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (browser.android || browser.ipad || browser.iphone || browser["windows phone"]) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if (browser.cros || browser.mac || browser.linux || browser.win) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if (browser.chrome || browser.opr || browser.safari) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if (browser.rv) {
    var ie = "msie";
    matched.browser = ie;
    browser[ie] = true;
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
    var opera = "opera";
    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if (browser.safari && browser.android) {
    var android = "android";
    matched.browser = android;
    browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;
  jQuery.browser = browser;
})(jQuery, window);

},{}],2:[function(require,module,exports){
"use strict";

// --------------------------------------------------
// REBOOT MODAL PLUGIN
// Create stylable modals
// ©2014 by Reactive Apps
// MIT License
// --------------------------------------------------

(function ($) {
  $.modal = function (options) {
    // Create a new modal instance
    var modal = {};

    // Create and make a reference to the modals array
    var $doc = $(document);
    if (!$doc.data('modals')) {
      $doc.data('modals', []);
    }
    var modals = $doc.data('modals');

    // Get the index based on the size of the modals array
    modal.index = modals.length;
    modal.settings = $.extend({
      // Default Options
      'closable': true,
      'closeButton': '<div class="close close-btn"><i class="re-x"></i></div>',
      'content': false,
      'formData': {},
      'height': false,
      'iFrameEl': '.wrapper',
      'left': false,
      'method': 'GET',
      'modalID': false,
      'overlayOpacity': 0.65,
      'resizeSpeed': 350,
      'scrollable': false,
      'top': 80,
      'transitionSpeed': 500,
      'type': 'inline',
      'width': false,
      'url': false

      // Events
      // 'open'         : function() {},
      // 'ready'        : function() {},
      // 'iFrameReady'        : function() {},
      // 'close'        : function() {},
      // 'closed'       : function() {}
    }, options);

    // Get or set the modal ID
    modal.id = modal.settings.modalID || 'modal-' + modal.index;

    // Create the wrapper element
    modal.wrapper = $('<div class="modal-wrapper"></div>');

    // Apply some settings to the wrapper element
    if (modal.settings.scrollable) {
      modal.wrapper.css('overflow', 'auto');
    }

    // Set the initial width and height of the modal
    if (modal.settings.width === false) {
      modal.wrapper.css({
        maxWidth: 500
      });
    }
    if (modal.settings.height === false) {
      modal.wrapper.height(300);
    }

    // Add the close button to the modal
    if (modal.settings.closable) {
      $(modal.settings.closeButton).prependTo(modal.wrapper);
    }

    // Load the content into the modal
    switch (modal.settings.type) {
      // Call the content from an inline object
      case 'inline':
        // Append the content to the modal
        modal.content = $(modal.settings.content);

        // Append the content to the modal
        modal.wrapper.append(modal.content);
        break;
      case 'ajax':
        // Create the loading graphic
        modal.loader = $('<div class="loader"></div>').appendTo(modal.wrapper);

        // Add a loading class
        modal.wrapper.addClass('loading');

        // Send an AJAX request to a URL
        $.ajax({
          'type': modal.settings.method,
          'url': modal.settings.url,
          'data': modal.settings.formData,
          'async': false,
          success: function success(response) {
            modal.content = $('<div>' + response + '</div>');

            // Remove the loading class
            modal.wrapper.removeClass('loading');
            modal.loader.zoetrope('destroy').remove();

            // Append the content to the modal
            modal.wrapper.append(modal.content);
          },
          error: function error() {
            modal.content = $('<p>Unable to retrieve content...</p>');

            // Remove the loading class
            modal.wrapper.removeClass('loading');
            modal.loader.zoetrope('destroy');

            // Append the content to the modal
            modal.wrapper.append(modal.content);
          }
        });
        break;
      case 'iframe':
        // Create the loading graphic
        modal.loader = $('<div class="loader"></div>').appendTo(modal.wrapper);

        // Add a loading class
        modal.wrapper.addClass('loading');

        // Create the iframe
        modal.content = $('<iframe />', {
          'class': 'modal-iframe',
          'frameborder': 0,
          'height': '100%',
          'id': modal.id + '--iframe',
          'marginheight': 0,
          'marginwidth': 0,
          'name': modal.id + '--content',
          'scrolling': 'no',
          'src': modal.settings.url,
          'width': '100%'
        }).css({
          'display': 'block',
          'vertical-align': 'bottom'
        }).hide();

        // Append the content to the modal
        modal.wrapper.append(modal.content);
        modal.content.load(function () {
          // Remove the loading class
          modal.wrapper.removeClass('loading');
          modal.loader.zoetrope('destroy');
          modal.loader.remove();
          if (modal.content.contents()) {
            modal.content.contents().find('.close').on('click', function () {
              modal.close();
            });

            // Set a reference to the parent modal in the iframe
            modal.content.contents().parentModal = modal;

            // Update the height of the iframe
            if (modal.settings.height === false) {
              modal.content.contents().find(modal.settings.iFrameEl).on('resize', function () {
                modal.fit();
              });
            }
          }

          // Fade in the iFrame
          modal.content.fadeIn(500, function () {
            // Fire a callback once the iFrame content is displayed
            if (typeof modal.settings.iFrameReady === 'function') {
              modal.settings.iFrameReady.call(modal);
            }
          });
        });
        break;
    }

    // --------------------------------------------------
    // METHODS

    // Resize the modal to a specific measurement
    modal.resize = function (options, callback) {
      var newSize = {};

      // Set the new dimensions
      if (options.width) newSize.maxWidth = options.width;
      if (options.height) {
        newSize.height = options.height;
      } else {
        if (modal.settings.type == 'iframe' && modal.content.contents()) {
          newSize.height = modal.content.contents().height() + 'px';
        } else {
          newSize.height = 'auto';
        }
      }
      if (typeof callback !== 'function') {
        callback = function callback() {};
      }
      var speed = options.speed || modal.settings.resizeSpeed;

      // Animate to the new size
      if (modal.settings.type === 'iframe') {
        modal.content.css(newSize);

        // Make the wrapper have a white background for resizing
        modal.wrapper.css('background-color', '#fff');
      }
      modal.wrapper.animate(newSize, speed, function () {
        // Get rid of the background color added during resizes
        modal.wrapper.css('background-color', '');
        callback();
      });

      // Return modal to make it chainable
      return modal;
    };

    // Resize the modal to fit the contents
    modal.fit = function (fitWidth, el, callback) {
      var iFrameEl, fitHeight;
      // The el argument is optional
      if (typeof el === 'function') {
        callback = el;
        iFrameEl = modal.settings.iFrameEl;
      } else {
        iFrameEl = el || modal.settings.iFrameEl;
      }

      // Set the dimensions
      var dimensions = {};
      if (modal.settings.type == 'iframe' && modal.content.contents()) {
        // Resize the iframe width and height
        fitWidth = modal.content.contents().find(iFrameEl).width() + 'px';
        fitHeight = modal.content.contents().find(iFrameEl).height() + 'px';
      } else {
        fitWidth = modal.content.outerWidth(true) + 'px';
        fitHeight = modal.content.outerHeight(true) + 'px';
      }
      dimensions.height = fitHeight;
      if (fitWidth) {
        dimensions.width = fitWidth;
      }

      // Call the resize function with our new dimensions
      modal.resize(dimensions, callback);

      // Return modal to make it chainable
      return modal;
    };

    // Open the modal
    modal.open = function () {
      if (typeof modal.settings.open === 'function') {
        modal.settings.open.call(modal);
      }

      // Prevent a click in the modal to trigger a click on the container
      modal.wrapper.on('click', function (event) {
        event.stopPropagation();
      });

      // Create the overlay and modal container
      modal.overlay = $('<div class="modal-overlay"></div>');
      modal.container = $('<div class="modal-container"></div>');

      // Make clicking on the container close the modal
      if (modal.settings.closable) {
        modal.container.on('click', function () {
          modal.close();
        });
      }
      // Clicking anything in the modal with the .close class will close the modal
      modal.wrapper.find('.close').on('click', function () {
        modal.close();
      });

      // Set what layer the modal should be on
      var layers = $('.modal-wrapper.open').length,
        layer = layers * 1000 + 1000;

      // Make the modal closable
      if (modal.settings.closable) {
        $(document).on('keyup.modalClosable', function (event) {
          var keycode = event.keyCode || event.which;
          if (keycode == 27) {
            if (modal.overlay.is(':visible')) {
              modal.close();
            }
          }
        });
      }

      // Reset the top margin
      var dropSpot = modal.settings.top - 30;
      if ($(window).width() < 700) {
        dropSpot = -20;
      }
      modal.wrapper.css('margin-top', dropSpot + 'px');

      // Set the layers for the overlay and the container
      modal.container.css('z-index', layer);
      modal.overlay.css('z-index', layer - 10);

      // Append the modal to the container
      modal.container.append(modal.wrapper);

      // Append the overlay and container to the body
      $('body').append(modal.overlay).append(modal.container);

      // Keep the background from scrolling
      document.body.style.overflow = 'hidden';

      // Set the size of the modal
      var resizeOptions = {
        'speed': 0
      };
      resizeOptions.height = modal.settings.height || modal.content.outerHeight(true);
      resizeOptions.width = modal.settings.width || modal.content.outerWidth(true);

      // console.log('Height: ' + modal.content.outerHeight(true));
      // console.log('Width: ' + modal.content.outerWidth(true));

      // console.log('Settings Height: ' + modal.settings.height);
      // console.log('Settings Width: ' + modal.settings.width);

      modal.resize(resizeOptions);

      // Fade in the overlay
      if ($('.modal-overlay.open').length > 0) {
        $('.modal-overlay.open').hide();
        modal.overlay.fadeTo(0, modal.settings.overlayOpacity);
        modal.overlay.css('z-index', layer - 10);
      } else {
        modal.overlay.fadeTo(modal.settings.transitionSpeed, modal.settings.overlayOpacity, function () {
          // We gots to do this for FireFox
          if (modal.settings.type === 'iframe' && modal.content.contents()) {
            if (modal.settings.height) {
              modal.wrapper.height(modal.settings.height);
            } else {
              modal.wrapper.height(modal.content.contents().height());
            }
          }
        });
      }

      // Fade in the modal window
      modal.wrapper.delay(100).animate({
        'opacity': 1,
        'margin-top': '+=30'
      }, modal.settings.transitionSpeed, function () {
        // Fire the ready callback
        if (typeof modal.settings.ready === 'function') {
          modal.settings.ready.call(modal);
        }
      });

      // Add the 'open' class
      modal.wrapper.addClass('open');
      modal.overlay.addClass('open');

      // Return modal to make it chainable
      return modal;
    };
    modal.close = function () {
      // Fire the close callback
      if (typeof modal.settings.close === 'function') {
        modal.settings.close.call(modal);
      }

      // Unbind the keyup function
      $(document).off('keyup.modalClosable');

      // Unbind the resize listener
      modal.content.contents().find(modal.settings.iFrameEl).off('resize');

      // Drop the modal
      modal.wrapper.stop(true, true).animate({
        'opacity': 0,
        'margin-top': '+=30'
      }, modal.settings.transitionSpeed / 2, function () {
        modal.wrapper.removeClass('open');
        modal.overlay.removeClass('open');
        modal.container.remove();

        // Open the next overlay
        if ($('.modal-overlay.open').length > 0) {
          $('.modal-overlay.open').last().fadeIn(50);
        }

        // Fade out and remove the overlay
        modal.overlay.fadeOut(100, function () {
          modal.overlay.remove();
        });

        // Fire the closed callback
        if (typeof modal.settings.closed === 'function') {
          modal.settings.closed.call(modal);
        }

        // Make the body scrollable again
        if ($('.modal-overlay.open').length === 0) {
          document.body.style.overflow = '';
        }
      });

      // Return modal to make it chainable
      return modal;
    };

    // END METHODS
    // --------------------------------------------------

    // Add the modal to the modals array
    $(document).data('modals').push(modal);

    // Return the modal for further use
    return modal;
  };
})(window.jQuery);

},{}],3:[function(require,module,exports){
"use strict";

require("modal/modal-v2.3.0");
require("browser/browser-v1.0.0");
// import cookies from 'browser/browser-v1.0.0';

$(document).ready(function () {
  $('.nav-toggle').on('click', function () {
    $('.nav-toggle').toggleClass('open');
    $('nav').toggleClass('open');
    $('body').toggleClass('disable-scroll');
  });
});

},{"browser/browser-v1.0.0":1,"modal/modal-v2.3.0":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvYnJvd3Nlci9icm93c2VyLXYxLjAuMC5qcyIsImFzc2V0cy9qcy9tb2RhbC9tb2RhbC12Mi4zLjAuanMiLCJzcmMvYXNzZXRzL2pzcmMvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFVBQVUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUc7RUFDdEMsWUFBWTs7RUFFWixJQUFJLE9BQU8sRUFBRSxPQUFPO0VBRXBCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUFFLEVBQUc7SUFDL0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUU7SUFFckIsSUFBSSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUN6Qyx1QkFBdUIsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLElBQ2xDLCtDQUErQyxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUUsSUFDMUQsdUJBQXVCLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUNsQyxvQ0FBb0MsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLElBQy9DLGlCQUFpQixDQUFDLElBQUksQ0FBRSxFQUFFLENBQUUsSUFDNUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUM5RCxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFFLElBQzFFLEVBQUU7SUFFSCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUNyQixXQUFXLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxJQUN0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SyxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBQ2xDO01BQ0QsQ0FBQyxDQUFDOztNQUVIO01BQ0EsT0FBTyxLQUFLO0lBRWIsQ0FBQzs7SUFFRDtJQUNBOztJQUVBO0lBQ0EsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOztJQUV0QztJQUNBLE9BQU8sS0FBSztFQUViLENBQUM7QUFFRixDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7Ozs7QUNsZGpCO0FBQ0E7QUFGQTs7QUFJQSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7RUFDN0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUN4QyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0VBQ3hDLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbiggalF1ZXJ5LCB3aW5kb3csIHVuZGVmaW5lZCApIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIG1hdGNoZWQsIGJyb3dzZXI7XG5cblx0alF1ZXJ5LnVhTWF0Y2ggPSBmdW5jdGlvbiggdWEgKSB7XG5cdFx0dWEgPSB1YS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dmFyIG1hdGNoID0gLyhvcHIpW1xcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcblx0XHRcdC8oY2hyb21lKVsgXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0Lyh2ZXJzaW9uKVsgXFwvXShbXFx3Ll0rKS4qKHNhZmFyaSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcblx0XHRcdC8od2Via2l0KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0LyhvcGVyYSkoPzouKnZlcnNpb258KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0Lyhtc2llKSAoW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcblx0XHRcdHVhLmluZGV4T2YoXCJ0cmlkZW50XCIpID49IDAgJiYgLyhydikoPzo6fCApKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG5cdFx0XHR1YS5pbmRleE9mKFwiY29tcGF0aWJsZVwiKSA8IDAgJiYgLyhtb3ppbGxhKSg/Oi4qPyBydjooW1xcdy5dKyl8KS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0W107XG5cblx0XHR2YXIgcGxhdGZvcm1fbWF0Y2ggPSAvKGlwYWQpLy5leGVjKCB1YSApIHx8XG5cdFx0XHQvKGlwaG9uZSkvLmV4ZWMoIHVhICkgfHxcblx0XHRcdC8oYW5kcm9pZCkvLmV4ZWMoIHVhICkgfHxcblx0XHRcdC8od2luZG93cyBwaG9uZSkvLmV4ZWMoIHVhICkgfHxcblx0XHRcdC8od2luKS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0LyhtYWMpLy5leGVjKCB1YSApIHx8XG5cdFx0XHQvKGxpbnV4KS8uZXhlYyggdWEgKSB8fFxuXHRcdFx0Lyhjcm9zKS9pLmV4ZWMoIHVhICkgfHxcblx0XHRcdFtdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGJyb3dzZXI6IG1hdGNoWyAzIF0gfHwgbWF0Y2hbIDEgXSB8fCBcIlwiLFxuXHRcdFx0dmVyc2lvbjogbWF0Y2hbIDIgXSB8fCBcIjBcIixcblx0XHRcdHBsYXRmb3JtOiBwbGF0Zm9ybV9tYXRjaFsgMCBdIHx8IFwiXCJcblx0XHR9O1xuXHR9O1xuXG5cdG1hdGNoZWQgPSBqUXVlcnkudWFNYXRjaCggd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgKTtcblx0YnJvd3NlciA9IHt9O1xuXG5cdGlmICggbWF0Y2hlZC5icm93c2VyICkge1xuXHRcdGJyb3dzZXJbIG1hdGNoZWQuYnJvd3NlciBdID0gdHJ1ZTtcblx0XHRicm93c2VyLnZlcnNpb24gPSBtYXRjaGVkLnZlcnNpb247XG5cdFx0YnJvd3Nlci52ZXJzaW9uTnVtYmVyID0gcGFyc2VJbnQobWF0Y2hlZC52ZXJzaW9uKTtcblx0fVxuXG5cdGlmICggbWF0Y2hlZC5wbGF0Zm9ybSApIHtcblx0XHRicm93c2VyWyBtYXRjaGVkLnBsYXRmb3JtIF0gPSB0cnVlO1xuXHR9XG5cblx0Ly8gVGhlc2UgYXJlIGFsbCBjb25zaWRlcmVkIG1vYmlsZSBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBtb2JpbGUgYnJvd3NlclxuXHRpZiAoIGJyb3dzZXIuYW5kcm9pZCB8fCBicm93c2VyLmlwYWQgfHwgYnJvd3Nlci5pcGhvbmUgfHwgYnJvd3NlclsgXCJ3aW5kb3dzIHBob25lXCIgXSApIHtcblx0XHRicm93c2VyLm1vYmlsZSA9IHRydWU7XG5cdH1cblxuXHQvLyBUaGVzZSBhcmUgYWxsIGNvbnNpZGVyZWQgZGVza3RvcCBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBkZXNrdG9wIGJyb3dzZXJcblx0aWYgKCBicm93c2VyLmNyb3MgfHwgYnJvd3Nlci5tYWMgfHwgYnJvd3Nlci5saW51eCB8fCBicm93c2VyLndpbiApIHtcblx0XHRicm93c2VyLmRlc2t0b3AgPSB0cnVlO1xuXHR9XG5cblx0Ly8gQ2hyb21lLCBPcGVyYSAxNSsgYW5kIFNhZmFyaSBhcmUgd2Via2l0IGJhc2VkIGJyb3dzZXJzXG5cdGlmICggYnJvd3Nlci5jaHJvbWUgfHwgYnJvd3Nlci5vcHIgfHwgYnJvd3Nlci5zYWZhcmkgKSB7XG5cdFx0YnJvd3Nlci53ZWJraXQgPSB0cnVlO1xuXHR9XG5cblx0Ly8gSUUxMSBoYXMgYSBuZXcgdG9rZW4gc28gd2Ugd2lsbCBhc3NpZ24gaXQgbXNpZSB0byBhdm9pZCBicmVha2luZyBjaGFuZ2VzXG5cdGlmICggYnJvd3Nlci5ydiApXG5cdHtcblx0XHR2YXIgaWUgPSBcIm1zaWVcIjtcblxuXHRcdG1hdGNoZWQuYnJvd3NlciA9IGllO1xuXHRcdGJyb3dzZXJbaWVdID0gdHJ1ZTtcblx0fVxuXG5cdC8vIE9wZXJhIDE1KyBhcmUgaWRlbnRpZmllZCBhcyBvcHJcblx0aWYgKCBicm93c2VyLm9wciApXG5cdHtcblx0XHR2YXIgb3BlcmEgPSBcIm9wZXJhXCI7XG5cblx0XHRtYXRjaGVkLmJyb3dzZXIgPSBvcGVyYTtcblx0XHRicm93c2VyW29wZXJhXSA9IHRydWU7XG5cdH1cblxuXHQvLyBTdG9jayBBbmRyb2lkIGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpIG9uIEFuZHJvaWQuXG5cdGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5hbmRyb2lkIClcblx0e1xuXHRcdHZhciBhbmRyb2lkID0gXCJhbmRyb2lkXCI7XG5cblx0XHRtYXRjaGVkLmJyb3dzZXIgPSBhbmRyb2lkO1xuXHRcdGJyb3dzZXJbYW5kcm9pZF0gPSB0cnVlO1xuXHR9XG5cblx0Ly8gQXNzaWduIHRoZSBuYW1lIGFuZCBwbGF0Zm9ybSB2YXJpYWJsZVxuXHRicm93c2VyLm5hbWUgPSBtYXRjaGVkLmJyb3dzZXI7XG5cdGJyb3dzZXIucGxhdGZvcm0gPSBtYXRjaGVkLnBsYXRmb3JtO1xuXG5cblx0alF1ZXJ5LmJyb3dzZXIgPSBicm93c2VyO1xufSkoIGpRdWVyeSwgd2luZG93ICk7XG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUkVCT09UIE1PREFMIFBMVUdJTlxuLy8gQ3JlYXRlIHN0eWxhYmxlIG1vZGFsc1xuLy8gwqkyMDE0IGJ5IFJlYWN0aXZlIEFwcHNcbi8vIE1JVCBMaWNlbnNlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4oKCQpID0+IHtcblxuXHQkLm1vZGFsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2RhbCBpbnN0YW5jZVxuXHRcdGNvbnN0IG1vZGFsID0ge307XG5cblx0XHQvLyBDcmVhdGUgYW5kIG1ha2UgYSByZWZlcmVuY2UgdG8gdGhlIG1vZGFscyBhcnJheVxuXHRcdGNvbnN0ICRkb2MgPSAkKGRvY3VtZW50KTtcblx0XHRpZiAoISRkb2MuZGF0YSgnbW9kYWxzJykpIHtcblx0XHRcdCRkb2MuZGF0YSgnbW9kYWxzJywgW10pO1xuXHRcdH1cblx0XHRjb25zdCBtb2RhbHMgPSAkZG9jLmRhdGEoJ21vZGFscycpO1xuXG5cdFx0Ly8gR2V0IHRoZSBpbmRleCBiYXNlZCBvbiB0aGUgc2l6ZSBvZiB0aGUgbW9kYWxzIGFycmF5XG5cdFx0bW9kYWwuaW5kZXggPSBtb2RhbHMubGVuZ3RoO1xuXHRcdG1vZGFsLnNldHRpbmdzID0gJC5leHRlbmQoe1xuXG5cdFx0XHQvLyBEZWZhdWx0IE9wdGlvbnNcblx0XHRcdCdjbG9zYWJsZScgICAgICAgIDogdHJ1ZSxcblx0XHRcdCdjbG9zZUJ1dHRvbicgICAgIDogJzxkaXYgY2xhc3M9XCJjbG9zZSBjbG9zZS1idG5cIj48aSBjbGFzcz1cInJlLXhcIj48L2k+PC9kaXY+Jyxcblx0XHRcdCdjb250ZW50JyAgICAgICAgIDogZmFsc2UsXG5cdFx0XHQnZm9ybURhdGEnICAgICAgICA6IHt9LFxuXHRcdFx0J2hlaWdodCcgICAgICAgICAgOiBmYWxzZSxcblx0XHRcdCdpRnJhbWVFbCcgICAgICAgIDogJy53cmFwcGVyJyxcblx0XHRcdCdsZWZ0JyAgICAgICAgICAgIDogZmFsc2UsXG5cdFx0XHQnbWV0aG9kJyAgICAgICAgICA6ICdHRVQnLFxuXHRcdFx0J21vZGFsSUQnICAgICAgICAgOiBmYWxzZSxcblx0XHRcdCdvdmVybGF5T3BhY2l0eScgIDogMC42NSxcblx0XHRcdCdyZXNpemVTcGVlZCcgICAgIDogMzUwLFxuXHRcdFx0J3Njcm9sbGFibGUnICAgICAgOiBmYWxzZSxcblx0XHRcdCd0b3AnICAgICAgICAgICAgIDogODAsXG5cdFx0XHQndHJhbnNpdGlvblNwZWVkJyA6IDUwMCxcblx0XHRcdCd0eXBlJyAgICAgICAgICAgIDogJ2lubGluZScsXG5cdFx0XHQnd2lkdGgnICAgICAgICAgICA6IGZhbHNlLFxuXHRcdFx0J3VybCcgICAgICAgICAgICAgOiBmYWxzZVxuXG5cdFx0XHQvLyBFdmVudHNcblx0XHRcdC8vICdvcGVuJyAgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcblx0XHRcdC8vICdyZWFkeScgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcblx0XHRcdC8vICdpRnJhbWVSZWFkeScgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcblx0XHRcdC8vICdjbG9zZScgICAgICAgIDogZnVuY3Rpb24oKSB7fSxcblx0XHRcdC8vICdjbG9zZWQnICAgICAgIDogZnVuY3Rpb24oKSB7fVxuXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHQvLyBHZXQgb3Igc2V0IHRoZSBtb2RhbCBJRFxuXHRcdG1vZGFsLmlkID0gbW9kYWwuc2V0dGluZ3MubW9kYWxJRCB8fCAnbW9kYWwtJyArIG1vZGFsLmluZGV4O1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSB3cmFwcGVyIGVsZW1lbnRcblx0XHRtb2RhbC53cmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj48L2Rpdj4nKTtcblxuXHRcdC8vIEFwcGx5IHNvbWUgc2V0dGluZ3MgdG8gdGhlIHdyYXBwZXIgZWxlbWVudFxuXHRcdGlmIChtb2RhbC5zZXR0aW5ncy5zY3JvbGxhYmxlKSB7XG5cdFx0XHRtb2RhbC53cmFwcGVyLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBtb2RhbFxuXHRcdGlmIChtb2RhbC5zZXR0aW5ncy53aWR0aCA9PT0gZmFsc2UpIHtcblx0XHRcdG1vZGFsLndyYXBwZXIuY3NzKHttYXhXaWR0aDogNTAwfSk7XG5cdFx0fVxuXHRcdGlmIChtb2RhbC5zZXR0aW5ncy5oZWlnaHQgPT09IGZhbHNlKSB7XG5cdFx0XHRtb2RhbC53cmFwcGVyLmhlaWdodCgzMDApO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgY2xvc2UgYnV0dG9uIHRvIHRoZSBtb2RhbFxuXHRcdGlmIChtb2RhbC5zZXR0aW5ncy5jbG9zYWJsZSkge1xuXHRcdFx0JChtb2RhbC5zZXR0aW5ncy5jbG9zZUJ1dHRvbilcblx0XHRcdFx0LnByZXBlbmRUbyhtb2RhbC53cmFwcGVyKTtcblx0XHR9XG5cblx0XHQvLyBMb2FkIHRoZSBjb250ZW50IGludG8gdGhlIG1vZGFsXG5cdFx0c3dpdGNoIChtb2RhbC5zZXR0aW5ncy50eXBlKSB7XG5cblx0XHRcdC8vIENhbGwgdGhlIGNvbnRlbnQgZnJvbSBhbiBpbmxpbmUgb2JqZWN0XG5cdFx0XHRjYXNlICdpbmxpbmUnOlxuXG5cdFx0XHRcdC8vIEFwcGVuZCB0aGUgY29udGVudCB0byB0aGUgbW9kYWxcblx0XHRcdFx0bW9kYWwuY29udGVudCA9ICQobW9kYWwuc2V0dGluZ3MuY29udGVudCk7XG5cblx0XHRcdFx0Ly8gQXBwZW5kIHRoZSBjb250ZW50IHRvIHRoZSBtb2RhbFxuXHRcdFx0XHRtb2RhbC53cmFwcGVyLmFwcGVuZChtb2RhbC5jb250ZW50KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYWpheCc6XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBsb2FkaW5nIGdyYXBoaWNcblx0XHRcdFx0bW9kYWwubG9hZGVyID0gJCgnPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PicpXG5cdFx0XHRcdFx0LmFwcGVuZFRvKG1vZGFsLndyYXBwZXIpO1xuXG5cdFx0XHRcdC8vIEFkZCBhIGxvYWRpbmcgY2xhc3Ncblx0XHRcdFx0bW9kYWwud3JhcHBlci5hZGRDbGFzcygnbG9hZGluZycpO1xuXG5cdFx0XHRcdC8vIFNlbmQgYW4gQUpBWCByZXF1ZXN0IHRvIGEgVVJMXG5cdFx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdFx0J3R5cGUnICA6IG1vZGFsLnNldHRpbmdzLm1ldGhvZCxcblx0XHRcdFx0XHQndXJsJyAgIDogbW9kYWwuc2V0dGluZ3MudXJsLFxuXHRcdFx0XHRcdCdkYXRhJyAgOiBtb2RhbC5zZXR0aW5ncy5mb3JtRGF0YSxcblx0XHRcdFx0XHQnYXN5bmMnIDogZmFsc2UsXG5cblx0XHRcdFx0XHRzdWNjZXNzKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRtb2RhbC5jb250ZW50ID0gJCgnPGRpdj4nICsgcmVzcG9uc2UgKyAnPC9kaXY+Jyk7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgbG9hZGluZyBjbGFzc1xuXHRcdFx0XHRcdFx0bW9kYWwud3JhcHBlci5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuXHRcdFx0XHRcdFx0bW9kYWwubG9hZGVyLnpvZXRyb3BlKCdkZXN0cm95JykucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdC8vIEFwcGVuZCB0aGUgY29udGVudCB0byB0aGUgbW9kYWxcblx0XHRcdFx0XHRcdG1vZGFsLndyYXBwZXIuYXBwZW5kKG1vZGFsLmNvbnRlbnQpO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRlcnJvcigpIHtcblx0XHRcdFx0XHRcdG1vZGFsLmNvbnRlbnQgPSAkKCc8cD5VbmFibGUgdG8gcmV0cmlldmUgY29udGVudC4uLjwvcD4nKTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBsb2FkaW5nIGNsYXNzXG5cdFx0XHRcdFx0XHRtb2RhbC53cmFwcGVyLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG5cdFx0XHRcdFx0XHRtb2RhbC5sb2FkZXIuem9ldHJvcGUoJ2Rlc3Ryb3knKTtcblxuXHRcdFx0XHRcdFx0Ly8gQXBwZW5kIHRoZSBjb250ZW50IHRvIHRoZSBtb2RhbFxuXHRcdFx0XHRcdFx0bW9kYWwud3JhcHBlci5hcHBlbmQobW9kYWwuY29udGVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnaWZyYW1lJzpcblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGxvYWRpbmcgZ3JhcGhpY1xuXHRcdFx0XHRtb2RhbC5sb2FkZXIgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+Jylcblx0XHRcdFx0XHQuYXBwZW5kVG8obW9kYWwud3JhcHBlcik7XG5cblx0XHRcdFx0Ly8gQWRkIGEgbG9hZGluZyBjbGFzc1xuXHRcdFx0XHRtb2RhbC53cmFwcGVyLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBpZnJhbWVcblx0XHRcdFx0bW9kYWwuY29udGVudCA9ICQoJzxpZnJhbWUgLz4nLCB7XG5cdFx0XHRcdFx0J2NsYXNzJyAgICAgICAgOiAnbW9kYWwtaWZyYW1lJyxcblx0XHRcdFx0XHQnZnJhbWVib3JkZXInICA6IDAsXG5cdFx0XHRcdFx0J2hlaWdodCcgICAgICAgOiAnMTAwJScsXG5cdFx0XHRcdFx0J2lkJyAgICAgICAgICAgOiBtb2RhbC5pZCArICctLWlmcmFtZScsXG5cdFx0XHRcdFx0J21hcmdpbmhlaWdodCcgOiAwLFxuXHRcdFx0XHRcdCdtYXJnaW53aWR0aCcgIDogMCxcblx0XHRcdFx0XHQnbmFtZScgICAgICAgICA6IG1vZGFsLmlkICsgJy0tY29udGVudCcsXG5cdFx0XHRcdFx0J3Njcm9sbGluZycgICAgOiAnbm8nLFxuXHRcdFx0XHRcdCdzcmMnICAgICAgICAgIDogbW9kYWwuc2V0dGluZ3MudXJsLFxuXHRcdFx0XHRcdCd3aWR0aCcgICAgICAgIDogJzEwMCUnXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdCdkaXNwbGF5JyAgICAgICAgOiAnYmxvY2snLFxuXHRcdFx0XHRcdCd2ZXJ0aWNhbC1hbGlnbicgOiAnYm90dG9tJ1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuaGlkZSgpO1xuXG5cdFx0XHRcdC8vIEFwcGVuZCB0aGUgY29udGVudCB0byB0aGUgbW9kYWxcblx0XHRcdFx0bW9kYWwud3JhcHBlci5hcHBlbmQobW9kYWwuY29udGVudCk7XG5cblx0XHRcdFx0bW9kYWwuY29udGVudC5sb2FkKCgpID0+IHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgbG9hZGluZyBjbGFzc1xuXHRcdFx0XHRcdG1vZGFsLndyYXBwZXIucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblx0XHRcdFx0XHRtb2RhbC5sb2FkZXIuem9ldHJvcGUoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0XHRtb2RhbC5sb2FkZXIucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRpZiAobW9kYWwuY29udGVudC5jb250ZW50cygpKSB7XG5cdFx0XHRcdFx0XHRtb2RhbC5jb250ZW50LmNvbnRlbnRzKCkuZmluZCgnLmNsb3NlJylcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Ly8gU2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgbW9kYWwgaW4gdGhlIGlmcmFtZVxuXHRcdFx0XHRcdFx0bW9kYWwuY29udGVudC5jb250ZW50cygpLnBhcmVudE1vZGFsID0gbW9kYWw7XG5cblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBpZnJhbWVcblx0XHRcdFx0XHRcdGlmIChtb2RhbC5zZXR0aW5ncy5oZWlnaHQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdG1vZGFsLmNvbnRlbnQuY29udGVudHMoKS5maW5kKG1vZGFsLnNldHRpbmdzLmlGcmFtZUVsKS5vbigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdG1vZGFsLmZpdCgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGYWRlIGluIHRoZSBpRnJhbWVcblx0XHRcdFx0XHRtb2RhbC5jb250ZW50LmZhZGVJbig1MDAsICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIEZpcmUgYSBjYWxsYmFjayBvbmNlIHRoZSBpRnJhbWUgY29udGVudCBpcyBkaXNwbGF5ZWRcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgbW9kYWwuc2V0dGluZ3MuaUZyYW1lUmVhZHkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0bW9kYWwuc2V0dGluZ3MuaUZyYW1lUmVhZHkuY2FsbChtb2RhbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBNRVRIT0RTXG5cblx0XHQvLyBSZXNpemUgdGhlIG1vZGFsIHRvIGEgc3BlY2lmaWMgbWVhc3VyZW1lbnRcblx0XHRtb2RhbC5yZXNpemUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcblxuXHRcdFx0Y29uc3QgbmV3U2l6ZSA9IHt9O1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5ldyBkaW1lbnNpb25zXG5cdFx0XHRpZiAob3B0aW9ucy53aWR0aCkgbmV3U2l6ZS5tYXhXaWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cdFx0XHRpZiAob3B0aW9ucy5oZWlnaHQpIHtcblx0XHRcdFx0bmV3U2l6ZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChtb2RhbC5zZXR0aW5ncy50eXBlID09ICdpZnJhbWUnICYmIG1vZGFsLmNvbnRlbnQuY29udGVudHMoKSkge1xuXHRcdFx0XHRcdG5ld1NpemUuaGVpZ2h0ID0gbW9kYWwuY29udGVudC5jb250ZW50cygpLmhlaWdodCgpICsgJ3B4Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRuZXdTaXplLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzcGVlZCA9IG9wdGlvbnMuc3BlZWQgfHwgbW9kYWwuc2V0dGluZ3MucmVzaXplU3BlZWQ7XG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIG5ldyBzaXplXG5cdFx0XHRpZiAobW9kYWwuc2V0dGluZ3MudHlwZSA9PT0gJ2lmcmFtZScpIHtcblx0XHRcdFx0bW9kYWwuY29udGVudC5jc3MobmV3U2l6ZSk7XG5cblx0XHRcdFx0Ly8gTWFrZSB0aGUgd3JhcHBlciBoYXZlIGEgd2hpdGUgYmFja2dyb3VuZCBmb3IgcmVzaXppbmdcblx0XHRcdFx0bW9kYWwud3JhcHBlci5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2ZmZicpO1xuXHRcdFx0fVxuXG5cdFx0XHRtb2RhbC53cmFwcGVyLmFuaW1hdGUobmV3U2l6ZSwgc3BlZWQsICgpID0+IHtcblx0XHRcdFx0Ly8gR2V0IHJpZCBvZiB0aGUgYmFja2dyb3VuZCBjb2xvciBhZGRlZCBkdXJpbmcgcmVzaXplc1xuXHRcdFx0XHRtb2RhbC53cmFwcGVyLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcnKTtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBSZXR1cm4gbW9kYWwgdG8gbWFrZSBpdCBjaGFpbmFibGVcblx0XHRcdHJldHVybiBtb2RhbDtcblxuXHRcdH07XG5cblx0XHQvLyBSZXNpemUgdGhlIG1vZGFsIHRvIGZpdCB0aGUgY29udGVudHNcblx0XHRtb2RhbC5maXQgPSAoZml0V2lkdGgsIGVsLCBjYWxsYmFjaykgPT4ge1xuXG5cdFx0XHRsZXQgaUZyYW1lRWwsXG5cdFx0XHRcdGZpdEhlaWdodDtcblx0XHRcdC8vIFRoZSBlbCBhcmd1bWVudCBpcyBvcHRpb25hbFxuXHRcdFx0aWYgKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjayA9IGVsO1xuXHRcdFx0XHRpRnJhbWVFbCA9IG1vZGFsLnNldHRpbmdzLmlGcmFtZUVsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aUZyYW1lRWwgPSBlbCB8fCBtb2RhbC5zZXR0aW5ncy5pRnJhbWVFbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkaW1lbnNpb25zXG5cdFx0XHRjb25zdCBkaW1lbnNpb25zID0ge307XG5cdFx0XHRpZiAobW9kYWwuc2V0dGluZ3MudHlwZSA9PSAnaWZyYW1lJyAmJiBtb2RhbC5jb250ZW50LmNvbnRlbnRzKCkpIHtcblx0XHRcdFx0Ly8gUmVzaXplIHRoZSBpZnJhbWUgd2lkdGggYW5kIGhlaWdodFxuXHRcdFx0XHRmaXRXaWR0aCAgPSBtb2RhbC5jb250ZW50LmNvbnRlbnRzKCkuZmluZChpRnJhbWVFbCkud2lkdGgoKSArICdweCc7XG5cdFx0XHRcdGZpdEhlaWdodCA9IG1vZGFsLmNvbnRlbnQuY29udGVudHMoKS5maW5kKGlGcmFtZUVsKS5oZWlnaHQoKSArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaXRXaWR0aCAgPSBtb2RhbC5jb250ZW50Lm91dGVyV2lkdGgodHJ1ZSkgKyAncHgnO1xuXHRcdFx0XHRmaXRIZWlnaHQgPSBtb2RhbC5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdFx0ZGltZW5zaW9ucy5oZWlnaHQgPSBmaXRIZWlnaHQ7XG5cdFx0XHRpZiAoZml0V2lkdGgpIHtcblx0XHRcdFx0ZGltZW5zaW9ucy53aWR0aCA9IGZpdFdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYWxsIHRoZSByZXNpemUgZnVuY3Rpb24gd2l0aCBvdXIgbmV3IGRpbWVuc2lvbnNcblx0XHRcdG1vZGFsLnJlc2l6ZShkaW1lbnNpb25zLCBjYWxsYmFjayk7XG5cblx0XHRcdC8vIFJldHVybiBtb2RhbCB0byBtYWtlIGl0IGNoYWluYWJsZVxuXHRcdFx0cmV0dXJuIG1vZGFsO1xuXG5cdFx0fTtcblxuXHRcdC8vIE9wZW4gdGhlIG1vZGFsXG5cdFx0bW9kYWwub3BlbiA9ICgpID0+IHtcblxuXHRcdFx0aWYgKHR5cGVvZiBtb2RhbC5zZXR0aW5ncy5vcGVuID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG1vZGFsLnNldHRpbmdzLm9wZW4uY2FsbChtb2RhbCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByZXZlbnQgYSBjbGljayBpbiB0aGUgbW9kYWwgdG8gdHJpZ2dlciBhIGNsaWNrIG9uIHRoZSBjb250YWluZXJcblx0XHRcdG1vZGFsLndyYXBwZXIub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgb3ZlcmxheSBhbmQgbW9kYWwgY29udGFpbmVyXG5cdFx0XHRtb2RhbC5vdmVybGF5ICAgPSAkKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO1xuXHRcdFx0bW9kYWwuY29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPjwvZGl2PicpO1xuXG5cdFx0XHQvLyBNYWtlIGNsaWNraW5nIG9uIHRoZSBjb250YWluZXIgY2xvc2UgdGhlIG1vZGFsXG5cdFx0XHRpZiAobW9kYWwuc2V0dGluZ3MuY2xvc2FibGUpIHtcblx0XHRcdFx0bW9kYWwuY29udGFpbmVyLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIENsaWNraW5nIGFueXRoaW5nIGluIHRoZSBtb2RhbCB3aXRoIHRoZSAuY2xvc2UgY2xhc3Mgd2lsbCBjbG9zZSB0aGUgbW9kYWxcblx0XHRcdG1vZGFsLndyYXBwZXIuZmluZCgnLmNsb3NlJylcblx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2V0IHdoYXQgbGF5ZXIgdGhlIG1vZGFsIHNob3VsZCBiZSBvblxuXHRcdFx0Y29uc3QgbGF5ZXJzID0gJCgnLm1vZGFsLXdyYXBwZXIub3BlbicpLmxlbmd0aCxcblx0XHRcdFx0bGF5ZXIgID0gKGxheWVycyAqIDEwMDApICsgMTAwMDtcblxuXHRcdFx0Ly8gTWFrZSB0aGUgbW9kYWwgY2xvc2FibGVcblx0XHRcdGlmIChtb2RhbC5zZXR0aW5ncy5jbG9zYWJsZSkge1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbigna2V5dXAubW9kYWxDbG9zYWJsZScsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleWNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXHRcdFx0XHRcdGlmIChrZXljb2RlID09IDI3KSB7XG5cdFx0XHRcdFx0XHRpZiAobW9kYWwub3ZlcmxheS5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0XHRcdFx0XHRtb2RhbC5jbG9zZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlc2V0IHRoZSB0b3AgbWFyZ2luXG5cdFx0XHRsZXQgZHJvcFNwb3QgPSBtb2RhbC5zZXR0aW5ncy50b3AgLSAzMDtcblx0XHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDcwMCkge1xuXHRcdFx0XHRkcm9wU3BvdCA9IC0yMDtcblx0XHRcdH1cblx0XHRcdG1vZGFsLndyYXBwZXIuY3NzKCdtYXJnaW4tdG9wJywgZHJvcFNwb3QgKyAncHgnKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBsYXllcnMgZm9yIHRoZSBvdmVybGF5IGFuZCB0aGUgY29udGFpbmVyXG5cdFx0XHRtb2RhbC5jb250YWluZXIuY3NzKCd6LWluZGV4JywgbGF5ZXIpO1xuXHRcdFx0bW9kYWwub3ZlcmxheS5jc3MoJ3otaW5kZXgnLCBsYXllciAtIDEwKTtcblxuXHRcdFx0Ly8gQXBwZW5kIHRoZSBtb2RhbCB0byB0aGUgY29udGFpbmVyXG5cdFx0XHRtb2RhbC5jb250YWluZXIuYXBwZW5kKG1vZGFsLndyYXBwZXIpO1xuXG5cdFx0XHQvLyBBcHBlbmQgdGhlIG92ZXJsYXkgYW5kIGNvbnRhaW5lciB0byB0aGUgYm9keVxuXHRcdFx0JCgnYm9keScpLmFwcGVuZChtb2RhbC5vdmVybGF5KS5hcHBlbmQobW9kYWwuY29udGFpbmVyKTtcblxuXHRcdFx0Ly8gS2VlcCB0aGUgYmFja2dyb3VuZCBmcm9tIHNjcm9sbGluZ1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5cdFx0XHQvLyBTZXQgdGhlIHNpemUgb2YgdGhlIG1vZGFsXG5cdFx0XHRjb25zdCByZXNpemVPcHRpb25zID0geyAnc3BlZWQnIDogMCB9O1xuXG5cdFx0XHRyZXNpemVPcHRpb25zLmhlaWdodCA9IG1vZGFsLnNldHRpbmdzLmhlaWdodCB8fCBtb2RhbC5jb250ZW50Lm91dGVySGVpZ2h0KHRydWUpO1xuXHRcdFx0cmVzaXplT3B0aW9ucy53aWR0aCA9IG1vZGFsLnNldHRpbmdzLndpZHRoIHx8IG1vZGFsLmNvbnRlbnQub3V0ZXJXaWR0aCh0cnVlKTtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0hlaWdodDogJyArIG1vZGFsLmNvbnRlbnQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1dpZHRoOiAnICsgbW9kYWwuY29udGVudC5vdXRlcldpZHRoKHRydWUpKTtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1NldHRpbmdzIEhlaWdodDogJyArIG1vZGFsLnNldHRpbmdzLmhlaWdodCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnU2V0dGluZ3MgV2lkdGg6ICcgKyBtb2RhbC5zZXR0aW5ncy53aWR0aCk7XG5cblx0XHRcdG1vZGFsLnJlc2l6ZShyZXNpemVPcHRpb25zKTtcblxuXHRcdFx0Ly8gRmFkZSBpbiB0aGUgb3ZlcmxheVxuXHRcdFx0aWYgKCQoJy5tb2RhbC1vdmVybGF5Lm9wZW4nKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQoJy5tb2RhbC1vdmVybGF5Lm9wZW4nKS5oaWRlKCk7XG5cdFx0XHRcdG1vZGFsLm92ZXJsYXkuZmFkZVRvKDAsIG1vZGFsLnNldHRpbmdzLm92ZXJsYXlPcGFjaXR5KTtcblx0XHRcdFx0bW9kYWwub3ZlcmxheS5jc3MoJ3otaW5kZXgnLCBsYXllciAtIDEwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGFsLm92ZXJsYXlcblx0XHRcdFx0XHQuZmFkZVRvKG1vZGFsLnNldHRpbmdzLnRyYW5zaXRpb25TcGVlZCwgbW9kYWwuc2V0dGluZ3Mub3ZlcmxheU9wYWNpdHksICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIFdlIGdvdHMgdG8gZG8gdGhpcyBmb3IgRmlyZUZveFxuXHRcdFx0XHRcdFx0aWYgKG1vZGFsLnNldHRpbmdzLnR5cGUgPT09ICdpZnJhbWUnICYmIG1vZGFsLmNvbnRlbnQuY29udGVudHMoKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAobW9kYWwuc2V0dGluZ3MuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kYWwud3JhcHBlci5oZWlnaHQobW9kYWwuc2V0dGluZ3MuaGVpZ2h0KTtcblx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0bW9kYWwud3JhcHBlci5oZWlnaHQobW9kYWwuY29udGVudC5jb250ZW50cygpLmhlaWdodCgpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWRlIGluIHRoZSBtb2RhbCB3aW5kb3dcblx0XHRcdG1vZGFsLndyYXBwZXJcblx0XHRcdFx0LmRlbGF5KDEwMClcblx0XHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRcdCdvcGFjaXR5JyAgICA6IDEsXG5cdFx0XHRcdFx0J21hcmdpbi10b3AnIDogJys9MzAnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vZGFsLnNldHRpbmdzLnRyYW5zaXRpb25TcGVlZCxcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdC8vIEZpcmUgdGhlIHJlYWR5IGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBtb2RhbC5zZXR0aW5ncy5yZWFkeSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0bW9kYWwuc2V0dGluZ3MucmVhZHkuY2FsbChtb2RhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gQWRkIHRoZSAnb3BlbicgY2xhc3Ncblx0XHRcdG1vZGFsLndyYXBwZXIuYWRkQ2xhc3MoJ29wZW4nKTtcblx0XHRcdG1vZGFsLm92ZXJsYXkuYWRkQ2xhc3MoJ29wZW4nKTtcblxuXHRcdFx0Ly8gUmV0dXJuIG1vZGFsIHRvIG1ha2UgaXQgY2hhaW5hYmxlXG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cblx0XHR9O1xuXG5cdFx0bW9kYWwuY2xvc2UgPSAoKSA9PiB7XG5cblx0XHRcdC8vIEZpcmUgdGhlIGNsb3NlIGNhbGxiYWNrXG5cdFx0XHRpZiAodHlwZW9mIG1vZGFsLnNldHRpbmdzLmNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG1vZGFsLnNldHRpbmdzLmNsb3NlLmNhbGwobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVbmJpbmQgdGhlIGtleXVwIGZ1bmN0aW9uXG5cdFx0XHQkKGRvY3VtZW50KS5vZmYoJ2tleXVwLm1vZGFsQ2xvc2FibGUnKTtcblxuXHRcdFx0Ly8gVW5iaW5kIHRoZSByZXNpemUgbGlzdGVuZXJcblx0XHRcdG1vZGFsLmNvbnRlbnQuY29udGVudHMoKS5maW5kKG1vZGFsLnNldHRpbmdzLmlGcmFtZUVsKS5vZmYoJ3Jlc2l6ZScpO1xuXG5cdFx0XHQvLyBEcm9wIHRoZSBtb2RhbFxuXHRcdFx0bW9kYWwud3JhcHBlclxuXHRcdFx0XHQuc3RvcCh0cnVlLCB0cnVlKVxuXHRcdFx0XHQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0J29wYWNpdHknICAgIDogMCxcblx0XHRcdFx0XHQnbWFyZ2luLXRvcCcgOiAnKz0zMCdcblx0XHRcdFx0fSxcblx0XHRcdFx0bW9kYWwuc2V0dGluZ3MudHJhbnNpdGlvblNwZWVkIC8gMixcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdG1vZGFsLndyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdFx0XHRtb2RhbC5vdmVybGF5LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHRcdFx0bW9kYWwuY29udGFpbmVyLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0Ly8gT3BlbiB0aGUgbmV4dCBvdmVybGF5XG5cdFx0XHRcdFx0aWYgKCQoJy5tb2RhbC1vdmVybGF5Lm9wZW4nKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQkKCcubW9kYWwtb3ZlcmxheS5vcGVuJykubGFzdCgpLmZhZGVJbig1MCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRmFkZSBvdXQgYW5kIHJlbW92ZSB0aGUgb3ZlcmxheVxuXHRcdFx0XHRcdG1vZGFsLm92ZXJsYXkuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0XHRcdG1vZGFsLm92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBGaXJlIHRoZSBjbG9zZWQgY2FsbGJhY2tcblx0XHRcdFx0XHRpZiAodHlwZW9mIG1vZGFsLnNldHRpbmdzLmNsb3NlZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0bW9kYWwuc2V0dGluZ3MuY2xvc2VkLmNhbGwobW9kYWwpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE1ha2UgdGhlIGJvZHkgc2Nyb2xsYWJsZSBhZ2FpblxuXHRcdFx0XHRcdGlmICgkKCcubW9kYWwtb3ZlcmxheS5vcGVuJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gUmV0dXJuIG1vZGFsIHRvIG1ha2UgaXQgY2hhaW5hYmxlXG5cdFx0XHRyZXR1cm4gbW9kYWw7XG5cblx0XHR9O1xuXG5cdFx0Ly8gRU5EIE1FVEhPRFNcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0Ly8gQWRkIHRoZSBtb2RhbCB0byB0aGUgbW9kYWxzIGFycmF5XG5cdFx0JChkb2N1bWVudCkuZGF0YSgnbW9kYWxzJykucHVzaChtb2RhbCk7XG5cblx0XHQvLyBSZXR1cm4gdGhlIG1vZGFsIGZvciBmdXJ0aGVyIHVzZVxuXHRcdHJldHVybiBtb2RhbDtcblxuXHR9O1xuXG59KSh3aW5kb3cualF1ZXJ5KTtcbiIsIi8vIGltcG9ydCBjb29raWVzIGZyb20gJ2Jyb3dzZXIvYnJvd3Nlci12MS4wLjAnO1xuaW1wb3J0ICdtb2RhbC9tb2RhbC12Mi4zLjAnO1xuaW1wb3J0ICdicm93c2VyL2Jyb3dzZXItdjEuMC4wJztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHQkKCcubmF2LXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHQkKCcubmF2LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdFx0JCgnbmF2JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGUtc2Nyb2xsJyk7XG5cdH0pO1xufSk7Il19
