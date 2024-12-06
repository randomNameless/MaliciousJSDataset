// JavaScript Document

var xmlhttp

var current_id_ref="";

function ajax_update(str,id_ref)
{
//alert(str)
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  }



var url=base+"xml/"+id_ref+".php";

if(id_ref == "ajax_booking_rght_mod01")
{
url=base+"xml/ajax_booking.php";

}



url=url+"?"+str+"&base="+base;

url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=stateChanged;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);


current_id_ref=id_ref;
}

function stateChanged()
{

if (xmlhttp.readyState==4)
{

document.getElementById(current_id_ref).innerHTML=xmlhttp.responseText;
}
}

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}

function changePaginationTxt(chosenoption, update_id)
{
x = document.getElementById("top_per_page").innerHTML;
y = document.getElementById("bottom_per_page").innerHTML;
var valid = true;

if(chosenoption.options[chosenoption.selectedIndex].text == "Results Per Page" || chosenoption.options[chosenoption.selectedIndex].text == "Results Per Page" && x == "6" ||  chosenoption.options[chosenoption.selectedIndex].text == "Results Per Page" && y == "6")
{
valid = false;
}
else
{
ajax_update('per_page_num='+chosenoption.options[chosenoption.selectedIndex].text, update_id);
}

return valid;
}


function MM_preloadImages() { //v3.0
var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
for(i=0; i<a.length; i++)
if (a[i].indexOf('#')!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}