var x = 0;
var y = 0;
var isFullscreen = false;

function oFull(){
    isFullscreen = true;
    var screen_ratio = $(window).width() / $(window).height();
    if(x==0){
        x = $('#gameSwfDiv').width();
        y = $('#gameSwfDiv').height();
    }
    var game_ratio = x/y;

    $('#close').css('bottom','4px').css('right','4px')
    $('#close').css('zIndex','30').css('position','fixed')
    $('#close').show();
     
    $('#gameSwfDiv').css({top:'0px',left:'0px',width:'100%',height:'100%'});
    $('#gameSwfDiv').css({position:'fixed',zIndex:20,backgroundColor:'#000'});

    if(game_ratio>screen_ratio){
        $('#game_container').width('100%').height(Math.round($(window).width() / game_ratio)+'px');
    }else{
        $('#game_container').height('100%').width(Math.round($(window).height() * game_ratio)+'px');
    }
    $('#gameSwfDiv div[style^="visib"]').remove();
    $('#gameSwfDiv').show()
}

function cFull(){
    isFullscreen = false;
    $('#close').hide();
    $('#game_container').width('100%').height('100%');
    $('#gameSwfDiv').width(x+'px').height(y+'px').css('position', 'relative');
}

function initFullscreen() {
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            if (isFullscreen) {
                cFull();
            }
        }
    });

    setTimeout(function () {
        $('#fullscreen').bind('click', function () {
            oFull();
        });
    }, 2000);
}