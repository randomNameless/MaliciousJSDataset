
jQuery(document).ready(function() {
    var initscroll = true;
    var clickbsc = false;
    jQuery('#menu').click(function () {//.hover(function () {
        jQuery('#drop').toggleClass('open');
        if (initscroll){
            fnScroll();
            initscroll= false;
        }
        return false;
    });

    jQuery('#search').click(function () {//.hover(function () {
        jQuery('#drop2').toggleClass('open');
        jQuery('.header').toggleClass('search-open');
        return false;
    });

    jQuery('#close').click(function () {//.hover(function () {
        jQuery('#drop').removeClass('open');
        return false;
    });
    jQuery('.desplegable').click(function () {//.bind("mouseenter mouseleave",function(){
        jQuery(this).parent().toggleClass('open');
        return false;
    });

    jQuery(".desplegable2").click(function () {//.bind("mouseenter mouseleave",function(){
        jQuery(this).toggleClass("open");
        return false;
    });


    jQuery(".submenu .title-section").click(function () {//.bind("mouseenter mouseleave",function(){
        jQuery(this).parent().toggleClass("open");
    });


    jQuery('.clicker').click(function () {
        jQuery('.bsctext').toggleClass('open');
        jQuery('.brand').toggleClass('open');
        jQuery('#query').focus();
        clickbsc = true;
        return false;
    });

    jQuery(document).click(function(){
        if(clickbsc){
            jQuery('.bsctext').toggleClass('open');
            jQuery('.brand').toggleClass('open');
            clickbsc = false;
        }
    })
    
    jQuery(".bsctext").click(function(e){
        e.stopPropagation();
    });

    fnCarouselNota();
    fnAppearCredit();
    fnTicker();
    fnModal();
    fnCarousel();
    fnCarouselNote();
    fnSelect();
    fnPull();
    fnDetalleNota();
    fnTabs();

});

/*fnScroll*/
var fnScroll = function() {
    //alert("fnsrcol");
    jQuery(".scroll").mCustomScrollbar({
       // theme: "dark"
    });
}
/*fnTabs*/
var fnTabs = function(){
     jQuery('.tabs').on('toggled', function (event, tab) {
         jQuery(document).foundation('equalizer', 'reflow');
     });
}

/*fnArticulos*/
var fnDetalleNota = function() {
    // Mostrar articulos relacionados
    jQuery('#showarticles').click(function() {

        var position = jQuery(this).position().top;
        var offset = jQuery(this).offset().top;


        console.log('offset: '+jQuery(this).offset().top);
        console.log('position: '+jQuery(this).position().top);
        jQuery( "#morearticles").css('top', '66px');
        jQuery( "#morearticles" ).animate({
            // opacity: 0.25,
            //top: position.top,
            right: 0
            //height: "toggle"
        }, 250, function() {
            // Animation complete.



        });
        return false;
    });
    //prova
    // Ocultar articulos relacionados
    jQuery('#hidearticles').click(function() {
        jQuery( "#morearticles" ).animate({
            // opacity: 0.25,
            right:"-100%"
            //height: "toggle"
        }, 250, function() {
            // Animation complete.
        });
        return false;
    });
    // Mostrar comentarios
    jQuery('#showcomments').click(function() {
        jQuery( "#comments").css('top', '66px');
        jQuery( '#comments' ).animate({
            // opacity: 0.25,
            left: 0
            //height: "toggle"
        }, 250, function() {
            // Animation complete.
        });
        return false;
    });
    //Ocultar comentarios
    jQuery('#hidecomments').click(function() {

        jQuery( '#comments' ).animate({
            // opacity: 0.25,
            left: "-100%"
            //height: "toggle"
        }, 250, function() {
            // Animation complete.
        });
        return false;
    });

    //Imprimir nota
    jQuery('#print').click(function() {
        window.print();
        return false;
    });
    //Ampliar cuerpo Letra
    jQuery('#zoomintext').click(function() {
        jQuery(".note-text > *").each(function(){
            var fs = parseInt(jQuery(this).css("font-size").replace("px",""));
            var ls = parseInt(jQuery(this).css("line-height").replace("px",""));
            if (fs<20){
                fs= fs+2;
                ls= ls+2;
                jQuery(this).css("font-size", fs+"px");
                jQuery(this).css("line-height", ls+"px");
            }
        });
        return false;
    });
    //Disminuir cuerpo Letra
    jQuery('#zoomouttext').click(function() {
        jQuery(".note-text > *").each(function(){
            var fs = parseInt(jQuery(this).css("font-size").replace("px",""));
            var ls = parseInt(jQuery(this).css("line-height").replace("px",""));
            if (fs>12){
                fs= fs-2;
                ls= ls-2;
                jQuery(this).css("font-size", fs+"px");
                jQuery(this).css("line-height", ls+"px");
            }
        });
        return false;
    });

}

/*fnAppearCredit*/
var fnAppearCredit = function() {
    jQuery('.icon-information').click(function () {
        jQuery(this).parent().parent().parent().parent().toggleClass('open');
        return false;
    });
    jQuery('.open-share').click(function () {
        jQuery(this).parent().parent().find('.more-share').toggleClass('open');
        return false;
    });
}
/*fnTicker*/
var fnTicker = function() {
   // if (jQuery(".ticker-msg").length > 0) {
        jQuery('.ticker-msg').marquee({
            //speed in milliseconds of the marquee
            duration: 20000,
            //gap in pixels between the tickers
            gap: 50,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true,
            pauseOnHover: true
        });
    //}
}

/*fnCarousel*/
fnCarousel = function() {
    jQuery('.content').find('.carousel').each(function () {
        jQuery(this).flexslider({
            namespace: '',
            animation: "slide",
            selector: ".slides .element",
            //initDelay:3000,
            controlNav: false, // bolitas
            smoothHeight: true,
            prevText: '<i class="icon-arrow-left"></i>',
            nextText: '<i class="icon-arrow-right"></i>'
        });
        var sl = jQuery(this).data('flexslider');
//        sl.resize();
    });
}

/*fnCarousel*/
fnCarouselNote = function() {
    jQuery('.content').find('.eu-carousel').each(function () {
        jQuery(this).flexslider({
            namespace: '',
            animation: "slide",
            selector: ".slides .media",
            //initDelay:3000,
            controlNav: false, // bolitas
            smoothHeight: true,
            prevText: '<i class="icon-arrow-left"></i>',
            nextText: '<i class="icon-arrow-right"></i>'
        });
        var sl = jQuery(this).data('flexslider');
        sl.resize();
    });
}

/*Ventana modal*/
var fnModal = function(){
        jQuery(".open-vm").click(function () {
            //alert('Entra!');
            var src = jQuery(this).attr('href') + ' #vm';
            jQuery("#cache").fadeTo(250, 0.0, function () {
                jQuery("#cache").load(src, function () {
                    jQuery("#cache").fadeTo(250, 1.0);
                });
            });
            //jQuery('html').css('overflow-y','hidden');

            return false;
        });
        jQuery(document).keyup(function (e) {
            if (e.keyCode == 27) {
                jQuery("#cache").css('display', 'none');
                //  jQuery('html').css('overflow-y','auto');
                jQuery('#cache').html('');
                return false;
            }
        });
}

/*fnSelect*/
var fnSelect = function(){
    jQuery(".select").selectOrDie();

}

/*fnPull*/
var fnPull = function() {

    jQuery.each(jQuery(".eu-pull"), function () {
        //alert('s');
        var thumb = jQuery(this).find('.thumb').length > 0;
        var captcha = jQuery(this).find('.captcha').length > 0;
        //alert('Thumb: '+thumb);

        if (thumb) {
            //Do something
            jQuery(this).hover(function () {
                //alert('s');
                jQuery(this).toggleClass('open');
                jQuery(this).find('.icon-arrow-top').toggleClass('icon-arrow-bottom');

            });
        }
        if (captcha) {
            jQuery(this).find(".captcha").click(function () {
                var element = jQuery(this).parent().parent().parent();
                console.log(jQuery(this));
                //alert("captcha");
                jQuery(element).find(".form-captcha").removeClass('hide');
                jQuery(element).find('.icon-arrow-bottom').addClass('hide');
                jQuery(element).find('.answers').addClass('hide');

            });

        }


    });
    // Estil radio/check labels
    jQuery('body').addClass('has-js');
    jQuery('.label-check, .label-radio').click(function(){
        setLabel();
    });
    setLabel();
}


function setLabel() {
    if (jQuery('.label-check input').length) {
        jQuery('.label-check').each(function(){
            jQuery(this).removeClass('c_on');
        });
        jQuery('.label-check input:checked').each(function(){
            jQuery(this).parent('label').addClass('c_on');
        });
    };
    if (jQuery('.label-radio input').length) {
        jQuery('.label-radio').each(function(){
            jQuery(this).removeClass('r_on');
        });
        jQuery('.label-radio input:checked').each(function(){
            jQuery(this).parent('label').addClass('r_on');
        });
    };
};




/*fnCarouselDetalle*/
var fnCarouselNota = function() {
    // The slider being synced must be initialized first
    jQuery('#carousel-foto').flexslider({
        selector: ".slides-thumb > li",
        namespace:"",
        animation: "slide",
        controlNav: false,
        directionNav:true,
        animationLoop: false,
        slideshow: false,
        itemWidth: 140,
        /*nextText:'<i class="icon-arrow-right"></i>',
        prevText:'<i class="icon-arrow-left"></i>',*/
        // itemMargin: 0,
        maxItems:6,
        asNavFor: '#slider-foto',
        useCSS: false,
        start: function(){
            var actual;
            jQuery('.eu-media.carousel .slides-thumb li').click(function(event){
                event.preventDefault();
                actual= jQuery(this).attr("data");
                jQuery('#actual').text(actual);
                console.log("NEXT:"+actual)
            });
        }

    });
    jQuery('#slider-foto').flexslider({
        selector: ".slides .item",
        namespace:"",
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        nextText:'<i class="icon-arrow-right"></i>',
        prevText:'<i class="icon-arrow-left"></i>',
        sync: "#carousel-foto",
        start: function(slider) {

            var numfotos= jQuery(".eu-media.carousel .slides-thumb li").size();
            if(numfotos <= 1){                
                $('.direction-nav').css({visibility:'hidden'});
            }
            var actual= jQuery(".eu-media.carousel .active-slide").attr("data");
            jQuery('#actual').text(actual);
            jQuery('#numfotos').text(numfotos);

            jQuery('#next, .eu-media.carousel .top .direction-nav a.next').click(function(event){
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("next"));
            });
            jQuery('#prev, .eu-media.carousel .top .direction-nav a.next').click(function(event){
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("prev"));
            });

        },
        after: function(){
            var numfotos;
            var actual;
            jQuery('#next, .eu-media.carousel .top .direction-nav a.next').click(function(event){
                event.preventDefault();
                actual= jQuery(".eu-media.carousel .active-slide").attr("data");
                jQuery('#actual').text(actual);
                console.log("NEXT:"+actual)
            });
            jQuery('#prev, .eu-media.carousel .top .direction-nav a.prev').click(function(event){
                event.preventDefault();
                actual= jQuery(".eu-media.carousel .active-slide").attr("data");
                jQuery('#actual').text(actual);
                console.log("PREV:"+actual)
            });



        } //Callback: function(slider) - Fires after each slider animation completes


    });


}