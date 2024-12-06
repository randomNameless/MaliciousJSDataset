var cookie_name="Ranking_productIDs";
var categoryCD="";

function setCookieName(name)
{
	cookie_name = name;
}

function setCategoryCD(cd)
{
	categoryCD = cd;
}

function getProductIDs()
{
	var arr = new Array();
	var cookie = j$.cookie(cookie_name);
	if(cookie==null) return arr;

	var index = cookie.indexOf(categoryCD, 0);
	if(index >= 0)
	{
		arr = cookie.split(",");
	}
	else
		j$.cookie(cookie_name, "", {path: '/'});
	return arr;
}

function setProductID(chkbox)
{
	var msg = "";
	var arr = getProductIDs();
	var isFound = false;
	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i]==chkbox.value)
			isFound = true;
		else
			msg += arr[i] + ",";
	}
	if((!isFound) && chkbox.checked)
		msg += chkbox.value + ",";
	if(msg.slice(-1).indexOf(",",0)>=0){
		msg = msg.slice(0,-1);
	}
	j$.cookie(cookie_name, categoryCD + "," + msg, {path: '/'});
}

function checkProductIDs()
{
	var hc = $("hidden_checkbox");
	var obj = document.getElementsByName("ChkProductID");
	var arr = getProductIDs();
	var msg = "";
	var list = "";
	for(var i = 1; i < arr.length; i++)
		msg += arr[i] + ",";
	for(var i = 0; i < obj.length; i++)
	{
		var val = obj[i].value;
		if(msg.indexOf(val + ",", 0) >= 0)
		{
			obj[i].checked = true;
			list += val + ",";
		}
	}
	msg = "";
	for(var i = 1; i < arr.length; i++)
	{
		if(list.indexOf(arr[i] + ",", 0) >= 0)
		{
			//non output
		}
		else
		{
			msg = msg + '<input type="checkbox" name="ChkProductID" value="' + arr[i].escapeHTML() + '" style="display: none" checked>';
		}
	}
	if(hc != null) hc.innerHTML = msg;
}
