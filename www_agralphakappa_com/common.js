
$(function () {
  $(".mnav").click(function () {
    $(".mnav i").toggleClass("fa-remove");
    $(".mnav i").toggleClass("fa-bars");
    $(".nav").slideToggle(0);
    $(".search").slideUp(100);
  });
});
$(function () {
  $(".msearch").click(function () {
    $(".msearch i").toggleClass("fa-remove");
    $(".msearch i").toggleClass("fa-search");
    $(".search").slideToggle(100);
  });
});
$(function () {
  $(".user").click(function () {
    $(".user").toggleClass("active");
    $(".login").slideToggle(100);
  });
});
$(function () {
  var _0x280fx2 = $(document).scrollTop();
  var _0x280fx3 = $(".header").outerHeight();
  $(window).scroll(function () {
    var _0x280fx4 = $(document).scrollTop();
    if (_0x280fx4 > _0x280fx3) {
      $(".header").addClass("gizle");
    } else {
      $(".header").removeClass("gizle");
    }
    ;
    if (_0x280fx4 > _0x280fx2) {
      $(".header").removeClass("sabit");
    } else {
      $(".header").addClass("sabit");
    }
    ;
    _0x280fx2 = $(document).scrollTop();
  });
});
$(window).scroll(function () {
  var _0x280fx5 = $(window).scrollTop();
  var _0x280fx6 = $(window).width() + $(document).scrollLeft();
  var _0x280fx7 = $(window).height() + $(document).scrollTop();
  if (_0x280fx5 > 0) {
    $("#goTop").show();
    $("#goTop").css("right", "30px");
    $("#goTop").css("bottom", "30px");
  } else {
    $("#goTop").hide();
  }
});
$("#goTop").click(function () {
  $("body,html").animate({scrollTop: 0}, 300);
});
$(function () {
  var _0x280fx8 = $("#monavber").attr("data-type");
  $(".navbar>li ").each(function () {
    try {
      var _0x280fx9 = $(this).attr("id");
      if ("index" == _0x280fx8) {
        if (_0x280fx9 == "nvabar-item-index") {
          $("#nvabar-item-index").addClass("active");
        }
      } else {
        if ("category" == _0x280fx8) {
          var _0x280fxa = $("#monavber").attr("data-infoid");
          if (_0x280fxa != null) {
            var _0x280fxb = _0x280fxa.split(" ");
            for (var _0x280fxc = 0; _0x280fxc < _0x280fxb.length; _0x280fxc++) {
              if (_0x280fx9 == "navbar-category-" + _0x280fxb[_0x280fxc]) {
                $("#navbar-category-" + _0x280fxb[_0x280fxc] + "").addClass("active");
              }
            }
          }
        } else {
          if ("article" == _0x280fx8) {
            var _0x280fxa = $("#monavber").attr("data-infoid");
            if (_0x280fxa != null) {
              var _0x280fxb = _0x280fxa.split(" ");
              for (var _0x280fxc = 0; _0x280fxc < _0x280fxb.length; _0x280fxc++) {
                if (_0x280fx9 == "navbar-category-" + _0x280fxb[_0x280fxc]) {
                  $("#navbar-category-" + _0x280fxb[_0x280fxc] + "").addClass("active");
                }
              }
            }
          } else {
            if ("page" == _0x280fx8) {
              var _0x280fxa = $("#monavber").attr("data-infoid");
              if (_0x280fxa != null) {
                if (_0x280fx9 == "navbar-page-" + _0x280fxa) {
                  $("#navbar-page-" + _0x280fxa + "").addClass("active");
                }
              }
            } else {
              if ("tag" == _0x280fx8) {
                var _0x280fxa = $("#monavber").attr("data-infoid");
                if (_0x280fxa != null) {
                  if (_0x280fx9 == "navbar-tag-" + _0x280fxa) {
                    $("#navbar-tag-" + _0x280fxa + "").addClass("active");
                  }
                }
              }
            }
          }
        }
      }
    } catch (E) {}
  });
  $("#monavber").delegate("a", "click", function () {
    $(".navbar>li").each(function () {
      $(this).removeClass("active");
    });
    if ($(this).closest("ul") != null && $(this).closest("ul").length != 0) {
      if ($(this).closest("ul").attr("id") == "munavber") {
        $(this).addClass("active");
      } else {
        $(this).closest("ul").closest("li").addClass("active");
      }
    }
  });
});
function video_ok() {
  $(".article_content embed, .article_content video, .article_content iframe").each(function () {
    var _0x280fxe = $(this).attr("width"), _0x280fxf = $(this).attr("height");
    if (_0x280fxf) {
      $(this).css("height", $(this).width() / (_0x280fxe / _0x280fxf));
    }
  });
}
$(function () {
  $(".article_content").find("img").css({width: "", height: ""});
});
function img_ok() {
  $(".article_content img").each(function () {
    var _0x280fxe = $(this).attr("width"), _0x280fxf = $(this).attr("height");
    if (_0x280fxf) {
      $(this).css("height", $(this).width() / (_0x280fxe / _0x280fxf));
    }
  });
}
$(function () {
  var _0x280fx5 = $(document);
  var _0x280fx11 = $(".widget_tags li");
  _0x280fx11.each(function () {
    var _0x280fx12 = 9;
    var _0x280fx13 = 0;
    var _0x280fx14 = parseInt(Math.random() * (_0x280fx12 - _0x280fx13 + 1) + _0x280fx13);
    $(this).addClass("tagbgc" + _0x280fx14);
  });
});
