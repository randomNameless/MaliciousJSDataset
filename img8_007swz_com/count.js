  var hm = document.createElement("script");


  hm.src = "https://hm.baidu.com/hm.js?4b03043c5ff40c03aac8e386dd349da6";

  if(window.location.host.indexOf('news.') !== -1 || window.location.host.indexOf('news') !== -1)hm.src = "//hm.baidu.com/hm.js?7753bc430edf9c61188cb182ffee3dfa";

  if(window.location.href.indexOf('xinxi')  !== -1 || window.location.href.indexOf('product')  !== -1)hm.src = "//hm.baidu.com/hm.js?7753bc430edf9c61188cb182ffee3dfa"; 
  
  

var _hmt = _hmt || [];
(function() {
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})(); 
document.write ('<script type="text/javascript" src="//www.007swz.com/api/countp.php?kc=1&refer='+document.referrer + '&page='+window.location.href+'"></script>');


$(function(){
  if (typeof jQuery != "undefined") {
      // 隐藏
      function hidecover() {
        $("#coverbox_gray").remove();
      }
      $(".btn-xunjia").click(function () { 
        $id = $(this).attr("data-id");
        $userid = $(this).attr("data-userid");
        $type = $(this).attr("data-type");
        if(!$type){
          $type=0;
        }
        $furl ="//www.007swz.com/sell/inquiry.php?itemid=" + $id + "&userid=" + $userid ;
        $("#xunjia").remove();
        $("body").append(
          '<div id="coverbox_gray" style="position: fixed;z-index: 1003;left: 0;top: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.5);"><div id="xunjia" ><span class="btnclose" style="cursor:pointer;background-color: #fe6601;float: right;color: #fff;width: 40px;height: 30px;text-align: center;line-height: 30px;">关闭</span><iframe scrolling="no" frameborder="0" name="myfram"  style="width: 608px; height: 520px;"  src="' +
           $furl +
            '"></iframe></div></div>'
        );
      });
      $("#bottom-ad-shop.close").click(function () {
        $("#bottom-ad-shop").hide();
      });
      $("body").on("click",".btnclose",function(){
      $("#coverbox_gray").remove();
    })
    }

})