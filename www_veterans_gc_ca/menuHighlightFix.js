$(document).ready(function(){
    setTimeout(doThatThingUdo, 250);
})

function doThatThingUdo(){
    $("#menu-pnl").children().each(function() {
        var item = $(this);
        item.find("a[href='#']").hover(function() {
            $(this).focus();
        })
    })
}