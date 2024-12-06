function addBinding() {

    $(function () {
        $('a.photoZoom').lightBox();
        $('a.pictureZoom').lightBox();
    });

    //$('.flipFlapContent').height(contentHeight);






}
$(document).ready(function () {

    var contentPopup = $(".contentScrollPopUp");
    contentPopup.mCustomScrollbar({
        scrollButtons: {enable: true}
    });

    windowWidth = $(window).width();
    hauteur_fenetre = $(window).outerHeight();
    contentHeight = hauteur_fenetre;
    $('.flipflap .content').height(contentHeight);
    var flipflapContainer = $(".flipflap");

    $('#trigger, .trigger').unbind("click").bind("click", function () {
        var $body = $(this.ie6 ? document.body : document);
        divHeight = $body.height();
        flipflapContainer.removeClass('in');
        flipflapContainer.height(divHeight).addClass('out');
        $(this).css("opacity", 0);
    });
    $('#fastMenuTrigger').unbind("click").bind("click", function () {
        var $body = $(this.ie6 ? document.body : document);
        divHeight = $body.height();
        flipflapContainer.removeClass('in');
        flipflapContainer.height(divHeight).addClass('out');
        $('.mainNav.horizontal').fadeOut(200);
        $('#trigger, .trigger').css("opacity", 0);
    });
    $('#flipflapClose').click(function () {
        flipflapContainer.removeClass('out');
        flipflapContainer.addClass('in');

        $('#trigger, .trigger').css("opacity", 1);
        if (windowWidth > 1024) {
            $('.mainNav.horizontal').fadeIn(200);
        }
    });

    new WOW().init();
    $('.topButton').click(function () {
        $('html,body').stop().animate({scrollTop: 100}, 'fast').animate({scrollTop: 0}, 'slow');
    });
    screenWidth = $(window).width();
    if (screenWidth < 1024) {
        smallDeviceMenuHeight = $(".smallDeviceMenu").outerHeight();
        $(".header.principal").css({"margin-top": smallDeviceMenuHeight});
    }

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $('.topButton').fadeOut(600);
        }
        if (scrollTop >= 300) {
            $('.topButton').fadeIn(600);
        }

        var scrollToTop = $('#scrollToTop');
        scrollToTop.click(function () {
            $('html,body').stop().animate({scrollTop: 0}, 'slow');
        });
        var div = scrollToTop;
        if (scrollTop >= 500) {
            if (div.css('opacity') == 0) {
                div.stop().animate({opacity: 1}, 500);
                scrollToTop.mouseover(function () {
                    div.stop().animate({opacity: 1}, 500);
                }).mouseout(function () {
                    div.stop().animate({opacity: 1}, 500);
                });
            }
        } else {
            if (div.css('opacity') > 0) {
                div.stop().animate({opacity: 0}, 500);
            }
        }
    });

    var fastNav = $('#fastNav');
    fastNav.singlePageNav({
        offset: 70,
        filter: ':not(.external)',
        speed: 2000,
        currentClass: 'current',
        currentThreshold: 250,
        duration: 250,
        easing: 'easeInOutExpo',
        updateHash: false,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });

    $(".mainNavLi").click(
        function () {
            var mainNavLiId = $(this).attr('id');
            if (mainNavLiId != undefined) {
                var contentNro = mainNavLiId.split("mainNavLi");
                var subNavId = "#subNavContainer" + contentNro[1];
                var mainNavLiOn = "#mainNavLi" + contentNro[1];
                var mainNavLi = $('.mainNavLi');
                mainNavLi.removeClass("on");
                $(mainNavLiOn).addClass("on");
                $(subNavId).slideToggle(200, function () {
                    downIconId = "#downIcon" + contentNro[1];
                    downIcon = $(downIconId);

                    upIcon = $("#upIcon" + contentNro[1]);
                    //alert(downIconId);
                    //alert(upIcon);
                    if (upIcon.is(":visible")) {
                        downIcon.show();
                        upIcon.hide();
                        $(mainNavLiOn).removeClass("mainNavOn");
                    }
                    else {
                        upIcon.show();
                        downIcon.hide();
                    }
                });

            }
            // $(".subNav").slideUp(200);


        });
    addBinding();
});
function scrollTop(){
    $('html,body').stop().animate({scrollTop: 0}, 'slow');
}
function appendTxt(txt, recipientDiv) {
    $(recipientDiv).html(txt);
}

function windowsReload() {
    document.location.href = "/";
}

function myAccountRedirect() {
    document.location.href = "/index.php?menu=myAccount";
}

function redirect(redirectUrl){
    document.location.href = redirectUrl;
}

function windowsPopUpOpen() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();

    $("#windowPopUp").css("display", "block").fadeIn(300);
    var flipflapContainer = $(".flipflapContainer");
    flipflapContainer.removeClass('out');
    flipflapContainer.addClass('in');
    $('#trigger, .trigger').fadeIn(300);

    var popUpWindowsPanel = $(".popUpWindowsPanel");
    var popUpWindowsContent = $(".popUpWindowsContent");
    //if (screenWidth < 1025) {
    //    var popUpWindowsContainer = $(".popUpWindowsContainer");
    //    var inputLabel = $(".inputLabel");
    //    var inputFieldContainer = $(".inputFieldContainer");
    //    var inputBoxField = $(".inputBoxField:not(.buttonsContainer)");
    //    var inputBoxLinks = $(".inputBoxLinks");
    //    marge = 80;
    //    popUpWindowsContainer.css("top", "15px");
    //    inputLabel.css("width", "100%").css("text-align", "left");
    //    inputFieldContainer.css("width", "100%").css("margin-left", 0);
    //    inputBoxField.css("margin-top", 0);
    //    inputBoxLinks.css("padding-top", "10px").css("padding-bottom", "10px");
    //    popUpWindowsContent.css({
    //        "width": "90%",
    //        "padding-left": "5%",
    //        "padding-right": "5%",
    //        "padding-top": "10px",
    //        "padding-bottom": "10px"
    //    });
    //
    //}
    //else {
    //    marge = 420;
    //}
    if (popUpWindowsPanel.length > 0) {
        //var popUpHeight = ($(window).innerHeight() - marge) - (popUpWindowsPanel.height());
        //popUpWindowsContent.css("height", popUpHeight);
        var content = $(".contentScrollPopUp");
        //content.css({height: popUpHeight - 30});
        content.mCustomScrollbar({
            scrollButtons: {enable: true},
            alwaysShowScrollbar: 0
        });
    }

    //var nonScrollable = $(window);
    //nonScrollable.disablescroll();
    addBinding();
}
function windowsPopUpClose() {
    $("#windowPopUp").fadeOut(100);
}

function windowsPopUpCloseForScreen() {
    $("#connectFormDisplay").fadeIn(300);
    $("#windowPopUp").fadeOut(100);
    $('#trigger, .trigger').css("opacity", 1);
    //$(window).disablescroll("undo");
}

function hideFlatCookiesMessage() {
    $('.cookiesMessageFlat').delay(2000).fadeOut(1000);
}

$(window).resize(function () {
    var content = $(".contentScroll");
    var flipflapPanelHeight = $("#flipflapPanel").height();

    content.mCustomScrollbar({
        scrollButtons: {enable: true}
    });
    var contentPopup = $(".contentScrollPopUp");
    contentPopup.mCustomScrollbar({
        scrollButtons: {enable: true}
    });
    var marge;
    var popUpWindowsPanel = $(".popUpWindowsPanel");
    if (popUpWindowsPanel.length > 0) {
        if ($(window).width() < 1025) {
            marge = 80;
        } else {
            marge = 420;
        }
        content.css({height: ($(window).innerHeight() - marge) - (popUpWindowsPanel.height())});
    }
    else{
        content.css({height: ($(window).innerHeight() - 80 - flipflapPanelHeight)});
    }
    hauteur_fenetre = $(window).height();
    contentHeight = hauteur_fenetre;
    $('.flipFlapContent').height(contentHeight);
});
$(window).load(function () {
    var content = $(".contentScroll");
    var flipflapPanelHeight = $("#flipflapPanel").height();
    content.mCustomScrollbar({
        scrollButtons: {enable: true}
    });
    $('a.photoZoom').lightBox();
    $('a.pictureZoom').lightBox();
    content.css({height: $(window).outerHeight() - 50 - flipflapPanelHeight});
});
