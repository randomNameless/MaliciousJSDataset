if ((navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 3) || parseInt(navigator.appVersion) >= 4) {
    rollOvers = 1;
} else {
    if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) >= 4) {
        rollOvers = 1;
    } else {
        rollOvers = 0;
    }
}

function getFocus(obj) {
    obj.focus();
    obj.select();
}

function confirmIt(mytext) {
    var agree = confirm(mytext);
    if (agree)
        return true;
    else
        return false;
}

function asteriskExplain(myText) {
    alert(myText);
}

function newWindow(height, width, htmlurl) {
    leftPos = (screen.width - width) / 2;
    topPos = (screen.height - height) / 2;
    myWindow = window.open(htmlurl, 'myWin', 'scrollbars=yes,left=' + leftPos + ', top=' + topPos + ', width=' + width + ', height=' + height)
    myWindow.focus()
}