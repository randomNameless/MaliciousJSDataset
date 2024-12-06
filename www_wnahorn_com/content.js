$(document).ready(function () {

    // 首页产品中心切换
    $(".cpzx_nav span").click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var that = $(this).index();
        $(".cpzx_box .cpzx_list").removeClass('cur');
        $(".cpzx_box .cpzx_list").eq(that).addClass('cur').show().siblings().hide();
        // $(".cpzx_box .cpzx_list").eq(that).children('li').addClass('animated flipInX');
        return false;
    })

    // 首页系统方案切换
    $(".xtfa_box .left p").hover(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var that = $(this).index();
        $(".xtfa_box .right .xtfa_box_div").eq(that).show().siblings().hide();
        return false;
    })

    // 首页887700线路检测中心切换
    $(".gywm_nav span").click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        var that = $(this).index();
        $(".gywm_box .gywm_div").eq(that).addClass('animated zoomIn').show().siblings().hide();
        return false;
    })

    // 返回顶部
    $(window).scroll(function () {
        var windowheight = $(window).outerHeight(true) - 749;
        if ($(this).scrollTop() > windowheight) {
            $('.totop').fadeIn(500);
        } else {
            $('.totop').fadeOut(500);
        }
    });
    $('.totop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    // 浏览器升级提示
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 8) {
        $(".yy").addClass('cur00');
        $(".yy-box").addClass('cur00');
    } else {
        $(".yy").removeClass('cur00');
        $(".yy-box").removeClass('cur00');
    }

    // 下拉
    menuXia();

    function menuXia() {
        //导航
        var navt1, navt1a, navt2;

        /*
         *19-04-23修改
         *
         * start
         */
        /*1)把a标签的事件改成li标签
         * $(".header_nav li a").hover(function () {
         * var _this = $(this).parent('li');
         */
        $(".header_nav li").hover(function () {
            var _this = $(this);
            var nowindex = _this.index();
            _this.addClass("hover");
            clearTimeout(navt1a);
            // aaa();
            navt1 = setTimeout(aaa, 80);

            function aaa() {
                if (nowindex == 0) {
                    return false;
                }
                $(".header").addClass("Hheader");
                $(".navtworank").find(".headnavtwo").stop(false, true).fadeOut(300);
                $(".navtworank").find(".headnavtwo").eq(nowindex - 1).stop(false, false).fadeIn(300);
            }
        }, function () {
            // var _this = $(this).parent('li');
            var _this = $(this);
            var nowindex = _this.index();
            _this.removeClass("hover");
            clearTimeout(navt1);
            // bbb();
            navt1a = setTimeout(bbb, 80);

            function bbb() {
                $(".navtworank").find(".headnavtwo").fadeOut(300);
            }
        })

        $(".navtworank .headnavtwo").hover(function () {
            var _this = $(this);
            clearTimeout(navt1a);
            navt1 = setTimeout(ccc, 50);

            function ccc() {
                _this.stop(false, true).fadeIn(300)
            }
        }, function () {
            var _this = $(this);
            clearTimeout(navt1);
            //2)
            navt1a = setTimeout(ddd, 200);

            function ddd() {
                _this.stop(false, true).fadeOut(300)
            }
        })
        /* 
         *19-04-23
         *end
         */
        $(".header").mouseleave(function () {
            var _this = $(this);
            clearTimeout(navt1);
            navt2 = setTimeout(eee, 400);

            function eee() {
                _this.removeClass("Hheader")
            }
        })
        $(".header").mouseenter(function () {
            clearTimeout(navt2);
        })
    }

    innavTop();

    function innavTop() {
        var innav = $('.header-stop');

        $(window).scroll(function () {
            //获取滚动条的滑动距
            var scroH = $(this).scrollTop();
            if (scroH) {
                innav.addClass('active');
                $('body').addClass('active');
            } else {
                innav.removeClass('active');
                $('body').removeClass('active');
            }
        });
    }
})