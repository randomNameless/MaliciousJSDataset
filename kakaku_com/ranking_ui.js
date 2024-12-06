jQuery(function ($) {

// FaQトグル sm54
    $('.s-toggleBtn2').click(function() {
        var toggleWrap = $(this).closest('.s-toggleListItem');
        if($(this).hasClass('is-open')) {
            $(this).removeClass('is-open');
            toggleWrap.find('.s-toggleElm').slideUp('fast');
        } else {
            $(this).addClass('is-open');
            toggleWrap.find('.s-toggleElm').slideDown('fast');
            toggleWrap.siblings().find('.s-toggleElm').slideUp('fast');
            toggleWrap.siblings().find('.s-toggleBtn2').removeClass('is-open');
        }
    });
    
});