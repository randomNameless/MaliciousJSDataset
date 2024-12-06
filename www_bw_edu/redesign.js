$(document).ready(function () {
    $('.hero').flexslider({
        animation: 'slide',
        directionNav: false,
        smoothHeight: true,
        start: function () {
            $('.clone a').attr("tabindex", "-1");
        }
    });

    $('.social-images .flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        smoothHeight: true
    });

    $('.mobile-menu').on('click', function (e) {
        $('header').toggleClass('open');
        if ($('header').hasClass('open')) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });

    $('.search').on('click', function (e) {
        $('.search-menu').toggleClass('open');
        $('.search-menu').parent().height($(document).height());
    });

    $('.search-close').on('click', function (e) {
        $('.search-menu').removeClass('open');
        $('.search-menu').parent().css('height', '');
    });

    $('.play-button').on('click', function (e) {
        var $this = $(this);
        $this.fadeOut(500);
        $this.prev().attr('controls', '');
        setTimeout(function() {
            $this.prev().get(0).play();
        }, 500);
        $this.prev().css('opacity', 1.0);
        $this.prev().prev().css('opacity', 0);
    });

    $('.brand-video video').on('ended', function () {
        $(this).next().fadeIn(1000);
        $(this).removeAttr('controls');
        $(this).prev().css('opacity', 1.0);
        $(this).css('opacity', 0);
        // $(this)[0].load();
    });

    $('.block-image-link-expand').on('click', function (e) {
        $(this).parent().next().children().toggle();
        $(this).toggleClass('open');
    });
});

$(document).mouseup(function (e) {
    var container = $(".search-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('open');
        container.parent().css('height', '');
    }
});

$(window).resize(function () {
    if ($(window).width() > 768) {
        $('header').removeClass('open');
        $('body').removeClass('fixed');
    }

    if ($(window).width() > 640) {
        $('.block-image-link').removeAttr('style');
    }

    if ($(window).width() <= 640 && $('.social-images').length) {
        setTimeout(function () {
            $('.social-images .flexslider').data('flexslider').resize();
        }, 100);
    }
});

// Close search menu on search
$(document).on('submit', '.search-menu form', function() {
    $('.search-menu').removeClass('open');
    $('.search-menu').parent().css('height', '');
});

$(document).on('keydown', function (e) {
    if (e.which == 13 && $('.search-menu').hasClass('open')) {
        $('.search-menu').removeClass('open');
        $('.search-menu').parent().css('height', '');
    }
});