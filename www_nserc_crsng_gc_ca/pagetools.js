function StripHTML(value)
{
	oString = new String(value)
	var reTag=/<(?:.|\s)*?>/g;
	return oString.replace(reTag,"");
}
function GetPageTitle()
{
  var sPageTitle=document.getElementById("PageTitle")
//  alert (sPageTitle.innerHTML);
}
function SetPageTitle()
{
	var sPageTitle=document.getElementById("PageTitle")
  	var oForm=document.getElementById("Form");
	oForm.elements['EmailPageTitle'].value=StripHTML(sPageTitle.innerHTML);
}
function EmailPage()
{
  var sPageTitle=document.getElementById("PageTitle")
	
  location.href='/_incs/emailpage_eng.asp';
}
function bookmark(url,title,lang)
{
  if ( navigator.appName == "Microsoft Internet Explorer" ) 
  {
	
		window.external.AddFavorite(url,title);
  } 
  else if (navigator.appName == "Netscape") 
  {
		window.sidebar.addPanel(title,url,"");
  } else 
  {
	if(lang='EN')
	  {
		alert("Press CTRL-D (Netscape) or CTRL-T (Opera) pour signet");
	  } else {
		alert("Press CTRL-D (Netscape) or CTRL-T (Opera) to bookmark");
	  }
  }
}
function set_cookie(name,value,days) 
{
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
function get_cookie(name) {
    var name_eq = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(name_eq) == 0) return c.substring(name_eq.length,c.length);
    }
    return null;
}
function resizeText(multiplier) 
{
	if ( document.body.style.fontSize == "") 
	{
		document.body.style.fontSize = ".8em";
	}
	document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}
/*
$("plustext").addEvent("click", function() {alert('h');resizeText(1);});
$("minustext").addEvent("click", function() {resizeText(-1);});
*/
if(get_cookie("NSERC-Text-Size") != null)
{   
	document.body.style.fontSize=get_cookie("NSERC-Text-Size");
}
else
{
	document.body.style.fontSize='0.8em';
}
