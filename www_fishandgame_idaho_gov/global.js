(function($) {
  $(document).ready(function() {
    var cb = new Date().getUTCMilliseconds();
    var url = "https://idfg.idaho.gov/sites/default/files/global.js?cb="+cb;
    $.ajax({
      url: url,
      dataType: "script",
      success: function() {
      }
    });
  });
})(jQuery);
