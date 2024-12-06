$(function() {
  // set ajax defaults
  $.ajaxSetup({
    type: "POST",
    url: $("base").attr("href"),
    dataType: "json",
    cache: false
  });

  $("#voteContainer a").click(function() {
    var url = $(this).attr("href");
    $.ajax({
      type: "GET",
      url: url + "&src=ajax",
      dataType: "html",
      success: function(html) {
        $("#voteContainer").html(html);
      }
    });
    return false;
  });
});
