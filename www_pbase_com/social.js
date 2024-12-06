var $G = {};
$("#share").click( function() {
  if( $("#socialSharingButtons").attr("switch") == "off" ) {
    $("#socialSharingButtons").attr("style", "margin-left: 5px; margin-top: -2px; position: absolute;").attr("switch", "on");
    if( $("#socialSharingButtons").html() == "" ) {
      $G.url = $(this).attr("url");
      add_facebook();
// googleplus died
//      add_googleplus();
      $G.buttonLoaderTimeout = setTimeout("buttonLoaderLoop()", 10);
    }
  } else {
    $("#socialSharingButtons").attr("style", "display: none;").attr("switch", "off");
  }
  return false;
});

function buttonLoaderLoop() {
  $G.loop_time = $G.loop_time + 10 || 0;
  var html = $("#___plusone_0").html();
  if( html ) {
  } else if( $G.loop_time < 50 ) {
    $G.buttonLoaderTimeout = setTimeout("buttonLoaderLoop()", 10);
  } else {
//    var content = "<iframe src=\"https://www.pbase.com/googleplus.html?url=" + $G.url + "\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow: hidden; width:80px; height: 20px;\" allowTransparency=\"true\"></iframe>";
 //   $("#gpo").html(content);
  }
}


function add_facebook() {
  var content = "<iframe src=\"https://www.facebook.com/plugins/like.php?app_id=268878506465467&amp;href=" + $G.url + "&amp;send=false&amp;layout=button_count&amp;width=90&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=20\" scrolling=\"no\" frameborder=\"0\" style=\"float:left; background:none; border:none; overflow:hidden; width:90px; height:20px;\" allowTransparency=\"true\"></iframe>";
  $("#socialSharingButtons").append(content);
}


function add_googleplus() {
  var content = "<div id=\"gpo\" style=\"float:left; margin:0px; padding:0px;\"><g:plusone href=\"" + $G.url + "\" size=\"medium\"></g:plusone></div>";
  content += "<script src=\"https://apis.google.com/js/plusone.js\" type=\"text/javascript\"></script>";
  $("#socialSharingButtons").append(content);
}

