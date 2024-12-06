$( window ).resize(function() {
    
    
    //------------------------------------------------------------------------------
    // MOVE HOMEPAGE IMAGES TO THE TOP
    var extramenu = $('.main-header').outerHeight(true);
    $(".s-home .custom_page").css("margin-top", -(extramenu) );




});




//------------------------------------------------------------------------------
// LOAD RESIZE
$(window).on('load resize', function () {

    // --------------------------------------------------------------------------
    // MOVE ELEMENTS IN RELATION OF HEIGHT OF MAIN-HEADER
    var extramenu = $('.main-header').outerHeight(true);
    $('section[id*="banner-top"]').css("margin-top", -(extramenu) );


});







//------------------------------------------------------------------------------
// DOC READY ONLY
$( document ).bind("ready",function() {


    //--------------------------------------------------------------------------
    // MOBILE MENU CLICK TOP-BANNER FIX
    $( "nav.mobile a.menu" ).click(function() {
        var extramenu = $('.main-header').outerHeight(true);
        $(".s-home .custom_page").css("margin-top", -(extramenu) );
    }); 
    
    //--------------------------------------------------------------------------
    // BANNER-TOP    
    $('section[id*="banner-top"] .full-width-banner .slide').each(function() {
        
        // figcaption
        if(!$(this).find('figcaption').length){
            $(this).append('<figcaption></figcaption>');
        }
        $(this).find('figcaption').prepend($('.item-header').contents());
        $(this).find("figcaption").wrapInner('<div class="container"></div>');
        $('.page-header').css({'display':'none'});
        
        
        
        // text colors
        if (($( this ).find('.image-title[style*="color"]').length) && (!$( this ).find('.image-subtitle[style*="color"]').length)) {
            var tempColor = $( this ).find('.image-title').css( "color" );
            $( this ).find('h2, h3, .image-description, a').css({'color':tempColor});
        }
        if ($( this ).find('.image-subtitle[style*="color"]').length) {
            var tempColorSub = $( this ).find('.image-subtitle').css( "color" );
            $( this ).find('h3, .image-description, a').css({'color':tempColorSub});
        }  
        
        // background fader
        $(this).append('<div class="ee-banner-fader"></div>');
        
        
        
    // QUICKLINKS
    // $('.s-artists.detail-page nav.screen-nav.divider.quicklinks.clearfix').insertAfter('.s-artists.detail-page section#banner-top');
    $('.s-artists.detail-page .quicklinks').closest('.container').addClass("ee-quicklinks ee-container-100").appendTo('section#banner-top');
    $('.s-artists.detail-page .page-header').closest('.container').addClass("ee-container-100");
    
    
    $('.s-exhibitions.detail-page .quicklinks').closest('.container').addClass("ee-quicklinks ee-container-100").appendTo('section#banner-top');
    $('.s-exhibitions.detail-page .page-header').closest('.container').addClass("ee-container-100");

    
    
    
    // HIDE EXTRA QUICKLINKS
    $('.quicklinks > span > a.qlink:contains("Content-A")').remove();;
    
    
    
    //--------------------------------------------------------------------------
    // QUICKLINKS LINK DELAY
    $(".qlink").click(function() {
        if ($(window).width() > 1024) {
                // Set main header to sticky height
                $('body').addClass("ee-custom-scroll-on");
                // get URL
                var href = $(this).attr('href');
        
                // Delay setting the location
                setTimeout(function() {
                    // get sticky menu height
                    var extramenu = $('.main-header').outerHeight(true);
                    // go to URL
                    $('html, body').animate({
                        scrollTop: $(href).offset().top-extramenu
                    }, 350);            
                }, 150);
                return false;
        }
    });
    
    
    
    
    
    //--------------------------------------------------------------------------
    // MOBILE MENU CLICK TOP-BANNER FIX
    $( "nav.mobile a.menu" ).click(function() {
        var extramenu = $('.main-header').outerHeight(true);
        $('section[id*="banner-top"]').css("margin-top", -(extramenu) );
    }); 

    
});

});






//------------------------------------------------------------------------------
// CKEDITOR
$( document ).bind("ready ajaxComplete",function() {



    // create gradient for fullscreen if supersized homepage
    if($(".s-home.detail-page #wrapper-banner-full").length > 0){
        $('<div />', { id: 'homefader' }).insertAfter('body');
        $("#homefader").css({
            top: 0, 
            left: 0,
            height: '100%',
            width: '100%',
            zIndex:50,
            position:'absolute'
        });
    }


    //--------------------------------------------------------------------------
    // BIOGRAPHY WORKAROUND
    // $(".s-artists.detail-page section#download .links.in-text").insertAfter(".s-artists.detail-page section[id*='content-a'] .text-one-column-with-image:not(.large-image):not(.banner-image):not(:first-of-type)");



    //--------------------------------------------------------------------------
    // PRESS RELEASE WORKAROUND
    // $(".s-exhibitions.detail-page section#download .links.in-text").insertAfter(".s-exhibitions.detail-page section[id*='content-a'] .text-one-column-with-image:not(.large-image):not(.banner-image):not(:first-of-type)");





    //--------------------------------------------------------------------------
    // REMOVE CKEDITOR FRONTEND INLINE STYLES
    $('[class*=ee-editor]').removeAttr("style");
    



});




//------------------------------------------------------------------------------
// DOC READY ONLY
$( document ).bind("ready",function() {

    //--------------------------------------------------------------------------
    // HOME ALERT BOX
    $('<a class="ee-close">×</a>').appendTo('section#wrapper-alert-box');
    $('.ee-close').on('click', function() {
        $(this).closest('section').remove();
    });


    //--------------------------------------------------------------------------
    // HOME GRID-A, GRID-B - SMALL TITLE WORKAROUND
    $('.s-home section[id^="wrapper-grid"] .entry').each(function() {
        $(this).find('.ee-editor-small').insertBefore( $(this).find('.titles') ).removeClass('ee-editor-small').addClass('ee-custom-detail');
        $(this).find('p:empty').remove();
    });  
    //--------------------------------------------------------------------------
    // HOME GRID REMOVE PDF ATTACHMENT LINKS
    $('.s-home section[id^="wrapper-grid"] .entry a[href*="DownloadableItem"]').contents().unwrap();
    $('.s-home section[id^="wrapper-grid"] .entry .links').remove();
    //--------------------------------------------------------------------------
    // HOME GRID APPLY LINK TO THUMBNAIL IMAGE
    $('.s-home section[id^="wrapper-grid"] .entry').each(function() {
        if ($(this).find('.ee-editor-button a').length) {
            $(this).find('.ee-editor-button a:not([target])').attr('target', '_self');
            var imageURL = $(this).find('.ee-editor-button a').attr('href');
            var imageTarget = $(this).find('.ee-editor-button a').attr('target');
            $(this).find('.placeholder .image').wrap('<a href="'+imageURL+'" target="'+imageTarget+'"></a>');
        }         
    });

    
    //--------------------------------------------------------------------------
    // NEWS DETAIL PAGE WORKAROUND RE-ORDER WITH SWIPER
    $('.s-news.detail-page .page-header-container ~ .container > .image').remove();
    $('.s-news.detail-page section#content-a').prependTo('.contentWrapper');
    $('.s-news.detail-page section#swiper-a').prependTo('.contentWrapper');
    $('.s-news.detail-page .page-header-container').prependTo('.contentWrapper');

    //--------------------------------------------------------------------------
    // TWO-UP CENTER NO-IMAGE SCREEN
    $(".text-image-wrapper.two-up").each(function(){
        if( ($(this).find('.no-image').length) && (!$(this).find('[data-slideshow-view]').length) && (!$(this).find('.ee-custom-screen-align-top').length) ){
            $(this).css({'align-self':'center'});
        }    
    });    
    
    // ------------------------------------------------------------------------
    // HORIZONTAL RULE
    $(".ee-editor-hr").each(function() {
        $(this).replaceWith($('<hr class="ee-hr">'));
    });




    //--------------------------------------------------------------------------
    // FOOTER SOCIAL - APPEND TO FOOTER-COLS
    // $('.footer-social').appendTo( '.footer-cols' );
    
    //--------------------------------------------------------------------------
    // FOOTER SITEINDEX + CREDIT 
    // $('<div id="ee-footer-footer"></div>').appendTo( 'footer .container' );
    // $('footer .ee-editor-block').appendTo('#ee-footer-footer');  
    $('footer .credit').appendTo('.footer-col3'); 
    $('a.footer-siteindex').appendTo('.footer-col3'); 


    
    
});





//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// VIEWING ROOM - EMAILPROTECTED PAGE SIZING
$(window).on('load resize', function () {

    // -------------------------------------------------------------------------
    // SET MARGINS/PADDING/SIZING FOR EMAILPROTECTED LOGIN DIV

    // IF MAIN MENU IS NOT FIXED AND LOGO FLOAT LEFT
    var totalmenutrue = $('.main-header').outerHeight(true);  
    $(".emailProtectedPage").css({'min-height':'calc(100% - '+totalmenutrue+'px'});
    
    // IF MAIN MENU IS FIXED
    // var totalmenu = $('.main-header').outerHeight();  
    // $(".emailProtectedPage").css({'padding-top':totalmenu}); 
    // var totalmenutrue = $('.main-header').outerHeight(true);  
    // $(".emailProtectedPage").css({'margin-bottom':-totalmenutrue});     
    
    
});
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// VIEWING ROOM - WITH CUSTOMIZATION OPTIONS
$(function () {
  emailProtected.run({
    contentWrapperSelector: '.contentWrapper',

    template: null, // you can override default form template

    showNames: true, // include first and last name in form
    isFirstNameRequired: true,
    isLastNameRequired: true,

    // you can bind to any of the following events
    notEmailProtected: function () { 
        
        // NOTE THAT THIS HAPPENS ON BOTH INDEX AND DETAIL PAGES
        $(this.options.contentWrapperSelector).css({display: 'block'});    
        // $(this.options.contentWrapperSelector).css({'visibility': 'visible', 'height':'auto','min-height':'100%','overflow':'auto'});

        
    },
    
    beforeShowContent: function () { /* ... */ },
    
    afterShowContent: function () {
        
        // NOTE THAT THIS HAPPENS ON BOTH INDEX AND DETAIL PAGES
        $(this.options.contentWrapperSelector).css({display: 'block'});
        // $(this.options.contentWrapperSelector).css({'visibility': 'visible', 'height':'auto','min-height':'100%','overflow':'auto'});
        
    },
    
    beforeProtectPage: function () { /* ... */ },
    afterProtectPage: function () { /* ... */ },
    beforeFormSubmit: function () { /* ... */ },
    afterFormSubmit: function () { /* ... */ },
    beforeAjaxSuccess: function () { /* ... */ },
    afterAjaxSuccess: function () { /* ... */ },
    onAjaxFail: function () { /* ... */ },
    beforePrepareCover: function () { /* ... */ },
    afterPrepareCover: function () { /* ... */ },
    beforeInitOptions: function () { /* ... */ },
    afterInitOptions: function () { /* ... */ }
  });
});


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// SCROLLREVEAL
$( document ).bind("ready",function() {
    
    function ee_add_scrollreveal_class() {
        $('.grid-container .entry').addClass('ee-scrollreveal');
        $('.list .entry .thumbnail').addClass('ee-scrollreveal');
        $('.list .entry .info').addClass('ee-scrollreveal');
        $('.squared .thumbnail-container').addClass('ee-scrollreveal');
        $('.footer-cols > div').addClass('ee-scrollreveal');
        $('.text-one-column-with-image .text').addClass('ee-scrollreveal');
        $('.text-one-column-with-image:not(.banner-image):not(.image-uncropped_banner) .image').addClass('ee-scrollreveal');
        $('.text-one-column').addClass('ee-scrollreveal'); 
        $('.text-two-columns .left').addClass('ee-scrollreveal');
        $('.text-two-columns .right').addClass('ee-scrollreveal');
        $('.text-three-columns .column').addClass('ee-scrollreveal');
        $('.news-details .details').addClass('ee-scrollreveal');
        $('.news-details .image').addClass('ee-scrollreveal');
        $('.artists.home .column').addClass('ee-scrollreveal');       
    }    

    function ee_remove_reset_scrollreveal() {
        $('.ee-scrollreveal').css({'opacity':'','transition':'','transform':'','visibility':'visible'});
        ScrollReveal().clean('.ee-scrollreveal');
        ScrollReveal().sync();
    } 

    // add class to items
    ee_add_scrollreveal_class();

    // apply ScrollReveal to class
    var slideUp = {
        distance: '40px',
        duration: 800,
        interval: 80
    };          
    ScrollReveal().reveal('.ee-scrollreveal', slideUp);    

    // reset ScrollReveal when there is a toggle click (swiper, artist list)
    $('.squared .thumbnail-container img, .abs-thumbs a, .view a').click(function() { 
        ee_remove_reset_scrollreveal(); 
    });      

    // reset ScrollReveal when there is a ajax load click (years, child, categories)
    $('.switch a, a.ajax, .child a, .filter-items a').click(function() {
        $( document ).bind("ajaxComplete",function() {
            ee_add_scrollreveal_class();
            ee_remove_reset_scrollreveal();
            // re-apply reset click when there is a toggle (newly added swipers)
            $('.squared .thumbnail-container img, .abs-thumbs a').click(function() { 
                ee_remove_reset_scrollreveal(); 
            });             
        }); 
    }); 
});
// SCROLLREVEAL - PAST EXHIBITIONS SUBMENU CLICK SCROLL TO TOP
$( document ).bind('ready ajaxComplete', function() {
    //--------------------------------------------------------------------------
    // EXHIBITIONS INDEX - this must be here to calculate offset scroll correctly
    $('<div class="container "><header class="section-header divider"><h4>Current</h4></header></div>').prependTo('.s-exhibitions #large');
        
    $('.past .switch a').click(function() {
        if ($(window).width() > 1023) {
            // calculate offset from top - main header height OR hard number
            // var extramenu = $('.main-header').outerHeight(true);
            var extramenu = 40;
            // make past container 100% height so submenu stays at top
            $( document ).bind("ajaxComplete",function() {
                $('.past').css({'min-height':'calc(100vh - '+extramenu+'px)'});          
            }); 
            // scroll to top offset
            $('html, body').animate({
                scrollTop: $(".past").offset().top-extramenu
            }, 350);
        }    
    });
});
// SCROLLREVEAL - LONG content pages are problematic (height calculations render incorrect)
// applying an arbitrary scrollReveal (after full load) will reset calculations
$(window).load(function() {
    ScrollReveal().reveal('footer .divider', { duration: 0 });
})
   