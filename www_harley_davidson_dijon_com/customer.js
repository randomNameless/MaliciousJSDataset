$(document).ready(function () {
    var owl = $("#owl-product");
    $('.owl-carousel-welcomeSlider').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 500,
        paginationSpeed : 5000,
        pagination:true,
        paginationNumbers:false,
        scrollPerPage: false,
        transitionStyle : "fade",
        mouseDrag: true,
        touchDrag: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1920, 1],
        itemsDesktopSmall: [1599, 1],
        itemsTablet: [768, 1],
        itemsMobile: [600, 1],
        responsive: true,
        autoPlay: 5000,
        stopOnHover : false,
        autoWidth:true
    });

    var sliderZone = $('.sliderZone');
    var aboutHDD = $('.aboutHDD');
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 200){
            sliderZone.removeClass('sliderZonePositionRelative');
            sliderZone.addClass('sliderZonePositionFixed');
        }
        else{
            sliderZone.removeClass('sliderZonePositionFixed');
            sliderZone.addClass('sliderZonePositionRelative');
        }

        if(scrollTop > 850){
            aboutHDD.removeClass('aboutHDDshow');
            aboutHDD.addClass('aboutHDDhidden');
            sliderZone.addClass('sliderZoneOpacityLow');
            sliderZone.removeClass('sliderZoneOpacityUp');
        }
        else{
            aboutHDD.removeClass('aboutHDDhidden');
            aboutHDD.addClass('aboutHDDshow');
            sliderZone.removeClass('sliderZoneOpacityLow');
            sliderZone.addClass('sliderZoneOpacityUp');
        }
    });
});

$(window).load(function () {
    var owl = $("#owl-product");
    $('.owl-carousel-welcomeSlider').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 500,
        paginationSpeed : 5000,
        pagination:true,
        paginationNumbers:false,
        scrollPerPage: false,
        transitionStyle : "fade",
        mouseDrag: true,
        touchDrag: true,
        autoHeight: true,
        items: 1,
        itemsDesktop: [1920, 1],
        itemsDesktopSmall: [1599, 1],
        itemsTablet: [768, 1],
        itemsMobile: [600, 1],
        responsive: true,
        autoPlay: 5000,
        stopOnHover : false,
        autoWidth:true
    });
});
