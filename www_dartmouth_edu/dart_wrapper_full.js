(function ($) {
  // Declare URLs.
  var styles_url = "https://ws.dartmouth.edu/sites/all/themes/dartmouth_base/css/universal-wrapper.css";
  var header_url = "https://ws.dartmouth.edu/universal-header";
  var footer_url = "https://ws.dartmouth.edu/universal-footer";
  var header_script_url = "https://ws.dartmouth.edu/sites/all/modules/custom/dart_wrapper/embedding/global-header-embed.js";
  var footer_script_url = "https://ws.dartmouth.edu/sites/all/modules/custom/dart_wrapper/embedding/global-footer-embed.js";

  // Embed Stylesheet.
  var styles_embed = '<link rel="stylesheet" href="' + styles_url + '">';
  $('head').append(styles_embed);

  // Embed header HTML and JS.
  $.get(header_url, function(data) {
    $('body').prepend('<section class="site-wrapper" aria-label="College-wide Universal Header Menu">' + data + '</section>');
    $.getScript(header_script_url);
  });

  // Embed footer HTML and JS.
  $.get(footer_url, function(data) {
    $('body').append('<footer class="l-footer" role="contentinfo" aria-label="Page Footer"><section class="block block-dart-wrapper block-dart-wrapper-dart-wrapper-footer" aria-label="College-wide Universal Footer Menu">' + data + '</section></footer>');
    $.getScript(footer_script_url);
  });
})(jQuery);