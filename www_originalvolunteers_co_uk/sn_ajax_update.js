// JavaScript Document

var xmlhttp

var current_id_ref="";

function sn_ajax_update(str,id_ref)
{

current_id_ref=id_ref;

set_cookie("buddy_pagenum","");
//alert(str)
//alert(id_ref)
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  }

//if(id_ref=="ajax_sn")
//{
///var url=base+"xml/sn_listing.php";
//}
//else
//{
var url=base+"xml/"+id_ref+".php";
//}
url=url+"?"+str+"&base="+base;

url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=stateChanged;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);


}

function stateChanged()
{

if (xmlhttp.readyState==4)
{

document.getElementById(current_id_ref).innerHTML=xmlhttp.responseText;


if(document.getElementById("ajax_sn"))
{




presetRead_Close();
}

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


		function collapse_comments()
		{
		jQuery("a.readmore_close").click(function ()
		{
		var maintext_height=jQuery(this).parents(".intro").next("div.sn_fulltext").innerHeight();
		var introtext_height=jQuery(this).parents(".intro").innerHeight();
		var introtext=jQuery(this).parents(".intro").html();
		var maintext = jQuery(this).parents(".intro").next(".sn_fulltext").html();
		
		jQuery(this).parents(".intro").html(maintext).animate({height: "4.8em"}, "medium").next("div.sn_fulltext").html(introtext);

		 expand_comments();
		});
		}
		
		function expand_comments()
		{
jQuery("a.readmore_open").click(function ()
		{
		var maintext_height=jQuery(this).parents(".intro").next("div.sn_fulltext").innerHeight();
		var introtext_height=jQuery(this).parents(".intro").innerHeight();
		jQuery(this).parents(".intro").css("height", "4.8em");
		var introtext=jQuery(this).parents(".intro").html();
		var maintext = jQuery(this).parents(".intro").next(".sn_fulltext").html();
		jQuery(this).parents(".intro").html(maintext).animate({height: maintext_height+"px"}, "medium").next("div.sn_fulltext").html(introtext);
		collapse_comments();
		});
		}

function presetRead_Close()
{
	jQuery("a.readmore_open").show();
	jQuery("span.three_periods").show();
expand_comments();
}

function clear_search_results_buddy()
{
set_cookie("buddy_pagenum", 0);
set_cookie("buddy_country", "");
set_cookie("buddy_month", "");
set_cookie("buddy_year", "");
set_cookie("buddy_cat",  "");
}