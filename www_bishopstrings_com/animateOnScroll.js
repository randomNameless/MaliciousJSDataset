function getTwitterTimeline(){
    var js, fjs = document.getElementsByTagName("script")[0], load = function(url, id) {
        if (document.getElementById(id)) {return;}
        js = document.createElement("script"); js.src = url; js.id = id;
        fjs.parentNode.insertBefore(js, fjs);
    };

    load('//platform.twitter.com/widgets.js', 'tweetjs');
}


(function($) {
    var win = jQuery(window);
    var twitterTimelineMods = jQuery(".twitterTimeline");
    $.fn.visible = function(partial) {
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);


jQuery(window).scroll(function(event) {
    jQuery(".twitterTimeline").each(function(i, el) {
        var el = jQuery(el);
        if (el.visible(true)) {
            getTwitterTimeline();
            el.removeClass('twitterTimeline');
        }
    });
});


jQuery(document).ready(function(){
    var win = jQuery(window);
    var twitterTimelineMods = jQuery(".twitterTimeline");
    twitterTimelineMods.each(function(i, el) {
        var el = jQuery(el);
        if (el.visible(true)) {
            getTwitterTimeline();
            el.removeClass('twitterTimeline');
        }
    });
});


var win = jQuery(window);
var twitterTimelineMods = jQuery(".twitterTimeline");
win.scroll(function(event) {
    twitterTimelineMods.each(function(i, el) {
        var el = jQuery(el);
        if (el.visible(true)) {
            getTwitterTimeline();
            el.removeClass('twitterTimeline');
        }
    });
});