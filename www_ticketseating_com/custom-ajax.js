function LoadPage(page){    
    try{var st = document.getElementById("rset").offsetTop; window.scrollTo(0, st);}catch(e){}
    doAJAXLoad('rset','loadTD');
    CallPage('p:' + page, '');
}

function SortPage(item){    
    try{var st = document.getElementById("rset").offsetTop; window.scrollTo(0, st);}catch(e){}
    doAJAXLoad('rset','loadTD');
    CallPage('s:' + item, '');
    return false;
}


function ReceivePageData(arg, context){
    $get("rset").innerHTML = arg;
    doAJAXLoad('loadTD','rset');
}