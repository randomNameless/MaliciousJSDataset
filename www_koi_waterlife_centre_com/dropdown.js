var timerlen = 5;
var slideAniLen = 250;

var timerID = new Array();
var startTime = new Array();
var obj = new Array();
var endHeight = new Array();
var moving = new Array();
var dir = new Array();
var tmp_var="false";
function slideupdown(objname){
		document.getElementById(objname).style.height=jQuery('#'+objname).height()+"px";
		if(document.getElementById(objname).style.display=="none")
		{
			tmp_var="false";
		}
		else
		{
			tmp_var="true";
		}
		if(tmp_var=="false")
		{
	        if(moving[objname])
	                return;
	        if(document.getElementById(objname).style.display != "none")
	                return; // cannot slide down something that is already visible
	        moving[objname] = true;
	        dir[objname] = "down";
	        startslide(objname);
	        tmp_var="true";
	     }
	     else
	     {
	        if(moving[objname])
	                return;

	        if(document.getElementById(objname).style.display == "none")
	                return; // cannot slide up something that is already hidden

	        moving[objname] = true;
	        dir[objname] = "up";
	        startslide(objname);
	        tmp_var="false";
	     }
}
function startslide(objname){
        obj[objname] = document.getElementById(objname);

        endHeight[objname] = parseInt(obj[objname].style.height);
        startTime[objname] = (new Date()).getTime();

        if(dir[objname] == "down"){
                obj[objname].style.height = "1px";
        }

        obj[objname].style.display = "block";

        timerID[objname] = setInterval('slidetick(\'' + objname + '\');',timerlen);
}

function slidetick(objname){
        var elapsed = (new Date()).getTime() - startTime[objname];

        if (elapsed > slideAniLen)
                endSlide(objname)
        else {
                var d =Math.round(elapsed / slideAniLen * endHeight[objname]);
                if(dir[objname] == "up")
                        d = endHeight[objname] - d;

                obj[objname].style.height = d + "px";
        }

        return;
}

function endSlide(objname){
        clearInterval(timerID[objname]);

        if(dir[objname] == "up")
                obj[objname].style.display = "none";

        obj[objname].style.height = endHeight[objname] + "px";
        delete(moving[objname]);
        delete(timerID[objname]);
        delete(startTime[objname]);
        delete(endHeight[objname]);
        delete(obj[objname]);
        delete(dir[objname]);

        return;
}

