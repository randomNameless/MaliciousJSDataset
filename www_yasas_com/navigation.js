function toggle() {
var ele = document.getElementById("navigation");
if(ele.style.display == "block") {
	ele.style.display = "none";
}
else {
	ele.style.display = "block";
	}
}

function rolloverMenu(showHide, menu)
{
    var linkObj = document.getElementById('mainLink');
    var menuObj = document.getElementById(menu);
    if (showHide == 0)
    {
        menuObj.style.display = 'none';
        linkObj.setAttribute('class', 'mainNav');
        linkObj.setAttribute('className', 'mainNav');
    }
    else
    {
        menuObj.style.display = 'block';
        linkObj.setAttribute('class', 'selectedRollover');
        linkObj.setAttribute('className', 'selectedRollover');
    }
}