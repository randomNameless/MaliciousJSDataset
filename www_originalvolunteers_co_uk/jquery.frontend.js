/**
 * jQuery.browser.mobile (https://detectmobilebrowser.com/)
 * jQuery.browser.mobile will be true if the browser is a mobile device
 **/

jQuery(document).ready(function() {
  jQuery(window).resize();
  jQuery('.main-container > div:not(".preloader")').each(function() {
    jQuery(this).css({ visibility: 'visible' });
  });
  if (jQuery('#btn-open-login-form').length > 0) {
    jQuery('#btn-open-login-form').on('click', function() {
      jQuery('body').toggleClass('open-login-form');

      if (
        jQuery(this)
          .find('i')
          .hasClass('fi-lock')
      ) {
        jQuery(this)
          .find('i')
          .removeClass();
        jQuery(this)
          .find('i')
          .addClass('fi-unlock');
      } else {
        jQuery(this)
          .find('i')
          .removeClass();
        jQuery(this)
          .find('i')
          .addClass('fi-lock');
      }
    });
  }
});

jQuery(window).load(function() {
  jQuery('#content').center();

  jQuery('.main-container > div:not(".preloader")').each(function() {
    jQuery(this).css({ visibility: 'visible' });
  });

  setTimeout(function() {
    jQuery('.main-container > .preloader').fadeOut(300, function() {
      jQuery('.login-form-container').fadeIn(600);
    });
  }, 1000);
});

jQuery(window).resize(function() {
  jQuery('#content').center();
  var window_w = jQuery('.logotype').width();
  jQuery('.logo').css('max-width', window_w + 'px');
  jQuery('.logo-retina').css('max-width', window_w + 'px');
});

jQuery.fn.center = function() {
  var window_h = Math.max(0, (jQuery(window).height() - jQuery(this).outerHeight()) / 2 + jQuery(window).scrollTop());
  var content_h = jQuery('.logotype').height();
  if (window_h > content_h) {
    this.css('position', 'absolute');
    this.css('top', window_h + 'px');
  } else {
    this.css('position', 'relative');
    this.css('top', '0');
  }
  return this;
};
