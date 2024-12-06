$(document).ready(function () {
    // sticky-menu

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $(".main-menu").addClass("sticky");
        } else {
            $(".main-menu").removeClass("sticky");
        }
    });

    // mobile-menu-accordion-js
    $(document).ready(function () {
        $(".accordion-click").click(function () {
            if ($(".accordion_body").is(":visible")) {
                $(".accordion_body").slideUp(300);
                $(".plusminus").text("+");
            }
            if ($(this).parent().next(".accordion_body").is(":visible")) {
                $(this).parent().next(".accordion_body").slideUp(300);
                $(this).text("+");
            } else {
                $(this).parent().next(".accordion_body").slideDown(300);
                $(this).text("-");
            }
        });
    });

    // floating-ad-here
    $(".close-btn-left").click(function () {
        $(".floating-ad-left").addClass("close-ad-left");
    });

    $(".close-btn-right").click(function () {
        $(".floating-ad-right").addClass("close-ad-right");
    });
    $(".close-btn-bottom").click(function () {
        $(".floating-ad-bottom").addClass("close-ad-bottom");
    });
    $(".close-btn-scroll").click(function () {
        $(".floating-ad-scroll").addClass("close-ad-scroll");
    });

    // scroll-ad-js
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".floating-ad-scroll").addClass("ad-scroll");
        } else {
            $(".floating-ad-scroll").removeClass("ad-scroll");
        }
    });

    // mega-menu-js-here
    $(".Mmenu-list").click(function () {
        $(".mega-manu").toggleClass("menu-show");
        // $("body").toggleClass("modal-open");
        $(this)
            .find($(".fa-solid"))
            .toggleClass("fa-bars-staggered")
            .toggleClass("fa-xmark");
    });

    // search-top-js
    $(document).ready(function () {
        $(".fa-search").click(function () {
            $(".search-box").toggle();
            $("input[type='text']").focus();
        });
    });

    //BackToTop
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("#back_to_top").fadeIn();
            } else {
                $("#back_to_top").fadeOut();
            }
        });
        // scroll body to 0px on click
        $("#back_to_top").click(function () {
            $("#back-to-top").tooltip("hide");
            $("body,html").animate(
                {
                    scrollTop: 0,
                },
                800
            );
            return false;
        });

        $("#back_to_top").tooltip("show");
    });

    // back-to
    var btn = $("#button");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });

    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
    });

    // menu-search-js
    $(".menu-search-wrapper .search-main").click(function () {
        $(".search-form-main").toggleClass("active-search");
        $(".search-form-main .search-field").focus();
    });

    // LeadTop2ListSlider

    $(document).ready(function () {
        $(".LeadTop2ListSlider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // SpecialCatgoryOne
    $(document).ready(function () {
        $(".SpecialCatgoryOne-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // Photos-area
    $(document).ready(function () {
        $(".PhotosWrapSlider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // common-slider
    $(document).ready(function () {
        $(".CommonSliderWrap").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // PoliticsSlider
    $(document).ready(function () {
        $(".PoliticsSlider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            //     centerMode: true,
            //     variableWidth: true,
            //     centerPadding: '120px',
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    // AboutUsSlideWrap
    $(document).ready(function () {
        $(".AboutUsSlideWrap").slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: false,
            lazyLoad: "ondemand",
            prevArrow:
                '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow:
                '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });

    (function ($) {
        $.fn.loadScroll = function (duration) {
            var $window = $(window),
                images = this,
                inview,
                loaded;
            images.one("loadScroll", function () {
                if (this.getAttribute("data-src")) {
                    this.setAttribute("src", this.getAttribute("data-src"));
                    this.removeAttribute("data-src");
                    if (duration) {
                        $(this)
                            .hide()
                            .fadeIn(duration)
                            .add("img")
                            .removeAttr("style");
                    } else return false;
                }
            });

            $window.scroll(function () {
                inview = images.filter(function () {
                    var a = $window.scrollTop(),
                        b = $window.height(),
                        c = $(this).offset().top,
                        d = $(this).height();
                    return c + d >= a && c <= a + b;
                });

                loaded = inview.trigger("loadScroll");
                images = images.not(loaded);
            });
        };
    })(jQuery);
});
