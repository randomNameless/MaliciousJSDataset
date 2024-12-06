function PrettyImageTree(ul) {
    ns$(".cat-nav ul").each(function () {
        if (ns$(ns$(ns$(ns$(this)[0])[0].firstChild)[0].firstChild).children("img").length > 0) {
            ns$(this).css("margin-top", "2px");
        }
    })
}

MC.addLoadEvent(PrettyImageTree);