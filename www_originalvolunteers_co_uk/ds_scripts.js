// JavaScript Document

//New jquery validation of form elements

function jq_validate(elem)
{

jQuery.noConflict();

if(elem.value == elem.defaultValue || elem.value == "")
{
jQuery("#"+elem.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
elem.value=elem.defaultValue;

if(elem.id=="travel_date")
{
jQuery("#"+elem.id).css({"color": "red"});	
}


}
jq_showborder(elem)
}

function jq_showborder(elem)
{
jQuery("#"+elem.id).parent().removeClass("round_cornerx").addClass("round_corner");
}


function jq_hideborder(elem)
{
var current_input=document.getElementById(elem.id);
jQuery("#"+elem.id).css({"color": "#666666"});
jQuery("#"+elem.id).parent().removeClass("round_corner").addClass("round_cornerx");
jQuery("#"+elem.id).parent().next(".exclaim_markshow").removeClass("exclaim_markshow").addClass("exclaim_mark");
if(current_input.value==current_input.defaultValue)
{

current_input.value="";
}
}



function validate_eu_onsubmit()
{

jQuery.noConflict();

var valid = true;

var eu_array = new Array("eu_f_fullname", "mobile", "f_email2", "f_c_email2");

var current_input=document.getElementById("check00")


/*if(!current_input.checked)
{
jQuery("#"+current_input.id).parent().children(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
valid = false;
}*/


	for(i=0;i<eu_array.length;i++)
		{
		current_input=document.getElementById(eu_array[i]);
		if(current_input.value == current_input.defaultValue)
			{
			jQuery("#"+current_input.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
			valid = false;
			}
		if(current_input.id == "f_c_email2" &&  current_input.value != document.getElementById("f_email2").value)
			{
			jQuery("#"+current_input.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
			//jQuery("#f_email2").parent().next().removeClass("exclaim_mark").addClass("exclaim_markshow");
			valid = false;
			}

		}

if(valid == false)
{
alert ("Oops! you forgot someting");
}
return valid;

}


function validate_sn_signup()
{
jQuery.noConflict();

var valid = true;

var sn_comment = document.getElementById("sn_comments");

if(sn_comment.value==sn_comment.defaultValue)
{
			jQuery("#"+sn_comment.id).parent().children(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
			valid = false;

}
if(valid == false)
{
alert ("Oops! you forgot someting");
}
return valid;

}














// case studie and stories cookies

function set_cookie( name, value, days)
{

var cookie_string = name + "=" + escape ( value );

if (days)
{
var expires = new Date ();
expires.setTime(expires.getTime()+(days*24*60*60*1000));
cookie_string += "; expires=" + expires.toGMTString();
}

document.cookie = cookie_string;

}
		

/*function get_cookie(cookie_name)
{
  var results = document.cookie.match( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}*/

function getpagenum(pagenum, pagenum_per)
//function getpagenum(pagenum)
{
set_cookie("cs_pagenum", pagenum, 1);
set_cookie("cs_pagenum_per", pagenum_per, 1);
}

function getpagenum_we(pagenum)
{
set_cookie("we_pagenum", pagenum, 1);
}

function getpagenum_buddy(pagenum) // becoming obsolete
{
set_cookie("buddy_pagenum", pagenum, 1);
}

function sn_buddy_list_pagenum(cookie_ref, pagenum)
{
set_cookie(cookie_ref, pagenum, 1);
}



function getpagenum_search_buddy(pagenum)
{
set_cookie("search_buddy_pagenum", pagenum, 1);
}


// JQ excaimation icon show


function jq_showexclaim(elem)
{

var thiselem = document.getElementById("f_fname")
//alert(thiselem.defaultValue)
dvalue=thiselem.defaultValue

jQuery.noConflict();

jQuery("#"+thiselem.id).parent().next(".exclaim_markshow").attr("title", dvalue);

jQuery("#"+elem.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow") ;
}



// Text limiter

function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
		alert("Oops! you seemed to have maxed out on allowed characters")
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
}

function emptyme(frmele)
{

if(frmele.value==frmele.defaultValue )
{
frmele.value="";
}

}

function checkifempty(frmele)
{
if(frmele.value=="" || frmele.value==frmele.defaultValue)
{
frmele.value=frmele.defaultValue;
}
showbackground(frmele, 0)
}


//end text limiter



function hideExclaim(elem)
{


jQuery.noConflict();

jQuery("#"+elem.id).parent().next(".exclaim_markshow").removeClass("exclaim_markshow").addClass("exclaim_mark") ;

}


function IsNumeric(strString)
   //  check for valid numeric strings	
   {
   var strValidChars = "0123456789.-";
   var strChar;
   var blnResult = true;

   if (strString.length == 0) return false;

   //  test strString consists of valid characters listed above
   for (i = 0; i < strString.length && blnResult == true; i++)
      {
      strChar = strString.charAt(i);
      if (strValidChars.indexOf(strChar) == -1)
         {
         blnResult = false;
         }
      }
   return blnResult;
   }







/*function opensaysme(value)
{

window.open('https://www.originalvolunteers.co.uk/webcam/webcamnew'+value+'.htm','','width=680,height=429,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no');

}*/


	var strWin="";				
function opensaysme(value)
	{
		if(	window.testopen)
		{
				
				window.testopen.focus();
		}
		
		if(strWin && !strWin.closed)
		{
			strWin.focus();
			
		}
		else
		{
		if('\v' == 'v')
			{
			strWin=window.open('https://www.originalvolunteers.co.uk/webcam/webcamnew'+value+'.htm','testopen','width=680,height=444,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no');
			}
		else
		{
strWin=window.open('https://www.originalvolunteers.co.uk/webcam/webcamnew'+value+'.htm','testopen','width=680,height=429,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no');
		}
strWin.focus();
		}
	
	}



	/*var strWin="";				
function opensaysme(value)
	{
		if(strWin && !strWin.closed)
		{
			strWin.focus();
			
		}
		else
		{
strWin=window.open('https://www.originalvolunteers.co.uk/webcam/webcamnew'+value+'.htm','','width=680,height=429,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no');
		}
	
	}*/



function clearupload(elemid)
{
//document.getElementById(elemid).setAttribute('type', 'text'); document.getElementById(elemid).innerHTML='';
//document.getElementById(elemid).setAttribute('type', 'file');

var currentHtml = jQuery("#"+elemid).parent().html();
jQuery("#"+elemid).parent().html(currentHtml);
}



function nofollow()
{
container = document.getElementById("footernav");
anchorlinks = container.getElementsByTagName("a");

for(i=0;i<anchorlinks.length;i++)
{
anchorlinks[i].setAttribute('rel', 'nofollow');
}

}

function setthis()
{
if(document.getElementById("select_0"))
{	
if(document.getElementById("select_0").selectedIndex==0)
{
document.getElementById("calendardsDD").disabled=true;
document.getElementById("selectedoptionapp2").style.backgroundColor="#65D0E0";
document.getElementById("selectedoptionapp2").style.opacity="0.5";
document.getElementById("selectedoptionapp2").style.filter="alpha(opacity=50)";
}
else
{
document.getElementById("calendardsDD").disabled=false;
document.getElementById("selectedoptionapp2").style.background="none";
document.getElementById("selectedoptionapp2").style.opacity="1";
document.getElementById("selectedoptionapp2").style.filter="alpha(opacity=100)";
}
var x=document.getElementById("select_0");
var SelecteOption=x.options[x.selectedIndex].text;
document.getElementById("selectedoptionapp1").innerHTML=SelecteOption;




var menuparent = document.getElementById("ja-mainnav");
var LI_elements = menuparent.getElementsByTagName("li");
var A_elements = menuparent.getElementsByTagName("a");
var UL_elements = menuparent.getElementsByTagName("ul");
UL_elements[2].id="IE6_select_fix";
for(i=0;i<A_elements.length;i++)
	{
	var arrList = A_elements[i].parentNode.className.split(' ');
	for(j=0;j<arrList.length;j++)
		{
		if ( arrList[j] == "item149")
			{
			A_elements[i].onmouseover=function(){
			document.getElementById("select_0").style.visibility="hidden";
			document.getElementById("calendardsDD").style.visibility="hidden";};
			A_elements[i].onmouseout=function(){
			document.getElementById("select_0").style.visibility="visible";
			document.getElementById("calendardsDD").style.visibility="visible";};
			}
		}
	}	
	
		var menuparent2 = document.getElementById("IE6_select_fix");
	var A_elements2 = menuparent2.getElementsByTagName("a");
		for(j=0;j<A_elements2.length;j++)
		{
			A_elements2[j].onmouseover=function(){
			document.getElementById("select_0").style.visibility="hidden";
			document.getElementById("calendardsDD").style.visibility="hidden";};
			A_elements2[j].onmouseout=function(){
			document.getElementById("select_0").style.visibility="visible";
			document.getElementById("calendardsDD").style.visibility="visible";};
			
		}


}
}




function ifvalidshowstartdate()
{
if(document.getElementById("select_0").selectedIndex!=0)
	{
	if(document.getElementById("AO_bg2"))
		{
		countryerr=document.getElementById("countryerror");
		countryerr.className="exclaim_mark";
		document.getElementById("selectedoptionapp1").style.color="black";
		}
		document.getElementById("calendardsDD").disabled=false;
		document.getElementById("countryerror").innerHTML="";
	}
else
	{
	document.getElementById("calendardsDD").disabled=true;
	}
}


function hidemontherroricon()
{
if(document.getElementById("calendardsDD").selectedIndex!=0)
{
document.getElementById("selectedoptionapp2").style.color="black";
montherr=document.getElementById("montherror2");
montherr.className="exclaim_mark";
document.getElementById("AO_txt").style.visibility="visible";

}

}







function validatedate()
{
var returnvalue=true;
if(document.getElementById("calendardsDD").selectedIndex!=0)
{
document.getElementById("montherror").innerHTML="";

}
else
{
document.getElementById("montherror").innerHTML="Selection of placement month is required.";
returnvalue=false;
}

if(document.getElementById("select_0").selectedIndex!=0)
{
document.getElementById("countryerror").innerHTML="";
}
else
{
document.getElementById("countryerror").innerHTML="Selection of Placement Country is required.";
returnvalue=false;
}
return returnvalue;
}


function changetxt(elementid,targetid)
{
var x=document.getElementById(elementid);
var SelecteOption=x.options[x.selectedIndex].text;
document.getElementById(targetid).innerHTML=SelecteOption;

	if(document.getElementById("AO_bg2"))
		{
		hidemontherroricon();
		}
}

function changetxt2()
{
if(document.getElementById("select_0"))
{
var x=document.getElementById("select_0");
var SelecteOption=x.options[x.selectedIndex].text;
document.getElementById("selectedoptionapp1").innerHTML=SelecteOption;
}
}

function initbooking()
{
changetxt2();
setthis();
}

window.onload=initbooking;









// Contact volunteer Javascript





//var requiredfields = new Array("f_fname","f_lname","f_email","f_email2","f_ec_fname","f_ec_lname", "mobile");

var requiredfields = new Array("f_fname","f_lname","f_email","f_email2", "mobile");

var defaultvalues = new Array("don't forget your first name", "don't forget your last name", "don't forget their first name", "don't forget their last name", "don't forget your email", "re-enter email to confirm", "don't forget your phone number", "don't forget your full name", "don't forget your travel date");


var fvname = "don't forget your first name";
var lvname = "don't forget your last name";

var fvname3 = "don't forget your valid first name";
var lvname3 = "don't forget your valid last name";


var fvname2 = "don't forget their first name";
var lvname2 = "don't forget their last name";
var email3 = "don't forget your email";

var fn2 = "don't forget your full name";


var c_email = "re-enter email to confirm";

var mobilevalue ="don't forget your phone number";

var alphaExp = /^[a-zA-Z]+$/;



function hideborder(element)
{
var current_element = document.getElementById(element.id);
element.parentNode.className="round_cornerx";
current_element.className="cf_inputbox";

for(i=0;i<defaultvalues.length;i++)
{
if(current_element.value == defaultvalues[i])
{
current_element.value="";
break;
}
}


current_element.style.color="#666666";

if(current_element.parentNode.nextSibling.className=="exclaim_markshow")
{
current_element.parentNode.nextSibling.className="exclaim_mark";
}

}









function showborder(element)
{
var current_element = document.getElementById(element.id);
element.parentNode.className="round_corner";
}


function clearradiowarning()
{
y=document.getElementById("radio01");

if(y.parentNode.nextSibling.nextSibling)
{

y.parentNode.nextSibling.nextSibling.className="exclaim_mark";
}
else
{
y.parentNode.nextSibling.className="exclaim_mark";

}

}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ

function validateonsubmit(from)
{
var errormessage="";

valid=true;

var y=false;
var z=false;
var u=false;
var v=false;

var repeatcatchfn=0;
var repeatcatchln=0;



if(document.getElementById("oc_country") && document.getElementById("oc_month"))
{

	jQuery.noConflict();
oc_countryelem=	document.getElementById("oc_country");
oc_monthelem= document.getElementById("oc_month");

	if(oc_countryelem.value != ""  && oc_monthelem.value != "")
		{
		document.getElementById("oc_dyn_subject").value = "Online Contact Form C2 "+oc_countryelem.value+" : "+oc_monthelem.value;
		}
	else
		{

		if(oc_countryelem.value == "")
			{
			jQuery("#"+oc_countryelem.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow") ;
			}
		if(oc_monthelem.value == "")
			{
			jQuery("#"+oc_monthelem.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow") ;
			}
valid=false;	
			
		}


}

jQuery(".book_now_month #chosen_month").val()=="" ? (jQuery(".book_now_month #chosen_month").parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow"), valid=false) : jQuery(".book_now_month #chosen_month").parent().next(".exclaim_markshow").removeClass("exclaim_markshow").addClass("exclaim_mark");






if(document.getElementById("make_payment_descrip"))
	{
	var frmele=document.getElementById("make_payment_descrip");
	var ip_fname=document.getElementById("f_fname");
	var ip_lname=document.getElementById("f_lname");
	var paypal_descrip=document.getElementById("item_name");
	if(frmele.value==frmele.defaultValue || frmele.value=="")
		{

		

		if(ip_fname.value != ip_fname.defaultValue && ip_lname.value != ip_fname.defaultValue)
			{
			frmele.value=(document.getElementById("f_fname").value)+" "+(document.getElementById("f_lname").value);
			paypal_descrip.value=frmele.value;
			}
		}
	else
		{
		paypal_descrip.value=frmele.value;
		}

	}




if(document.getElementById("f_ec_email") && document.getElementById("f_c_ec_email"))
{
y=document.getElementById("f_ec_email");
z=document.getElementById("f_c_ec_email");
}


if(document.getElementById("f_fullname"))
{
document.getElementById("f_fullname").value=(document.getElementById("f_fname").value)+" "+(document.getElementById("f_lname").value);
//alert(document.getElementById("f_fullname").value)
}



if(document.getElementById("AO_bg2"))
{

if(document.getElementById("select_0").selectedIndex==0)
{
valid=false;
document.getElementById("selectedoptionapp1").style.color="red";

document.getElementById("countryerror").className="exclaim_markshow";
document.getElementById("countryerror").style.top="62px";
document.getElementById("countryerror").style.left="218px";

errormessage += "Please Select your Destination\n";
document.getElementById("AO_txt").style.visibility="hidden";
document.getElementById("temppara").style.display="none";
}

if(document.getElementById("calendardsDD").selectedIndex==0)
{
valid=false;
montherr=document.getElementById("montherror2");
document.getElementById("selectedoptionapp2").style.color="red";
montherr.className="exclaim_markshow";
montherr.style.top="111px";
montherr.style.left="218px"
document.getElementById("AO_txt").style.visibility="hidden";
document.getElementById("temppara").style.display="none";
errormessage += "Please Select chosen Month/Year\n";
}
}


if(document.getElementById("criminal_radio"))
{

  crime_parent=document.getElementById("criminal_radio");
  crimeradio = crime_parent.getElementsByTagName("input");

  for(i=0;i<crimeradio.length;i++)
    {
    valid=false;
    crimeradio[i].parentNode.nextSibling.nextSibling.className="exclaim_markshow";
    if(crimeradio[i].checked)
      {
      crimeradio[i].parentNode.nextSibling.nextSibling.className="exclaim_mark";
      valid=true;
      break;
      }
    }







/*j=document.getElementById("radio00");
k=document.getElementById("radio01");

if(j.checked==false && k.checked==false && k.parentNode.nextSibling.nextSibling)
{
k.parentNode.nextSibling.nextSibling.className="exclaim_markshow";
valid=false;
}
else
{
k.parentNode.nextSibling.className="exclaim_markshow";
valid=false;

}*/

}


if(document.getElementById("f_fullname2"))
  {
  fn2=document.getElementById("f_fullname2");
  if(fn2.value=="" || fn2.value=="don't forget your full name")
    {
valid=false;
    fn2.style.color="red";
    fn2.parentNode.nextSibling.className="exclaim_markshow";
    }
  }


if(document.getElementById("TshirtType"))
  {
  tst=document.getElementById("TshirtType");
  tstradio = tst.getElementsByTagName("input");

  for(i=0;i<tstradio.length;i++)
    {
    valid=false;
    tstradio[i].parentNode.parentNode.nextSibling.className="exclaim_markshow";
    if(tstradio[i].checked)
      {
      tstradio[i].parentNode.parentNode.nextSibling.className="exclaim_mark";
      valid=true;
      break;
      }
    }
  }

if(document.getElementById("TshirtSize"))
  {
  tss=document.getElementById("TshirtSize");
  tssradio = tss.getElementsByTagName("input");

  for(i=0;i<tssradio.length;i++)
    {
    valid=false;
    tssradio[i].parentNode.parentNode.nextSibling.className="exclaim_markshow";
    if(tssradio[i].checked)
      {
    tssradio[i].parentNode.parentNode.nextSibling.className="exclaim_mark";
      valid=true;
      break;
      }
   }
 }

if(document.getElementById("travel_date"))
{

var x = document.getElementById("travel_date");
if(x.value == x.defaultValue || x.value == "" )	
{
valid=false;
x.value = x.defaultValue;
x.style.color="red";
jQuery("#"+x.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow") ;

}
}




	for(i=0;i<requiredfields.length;i++)
		{
		if(document.getElementById(requiredfields[i]))
			{
			x=document.getElementById(requiredfields[i]);

	if(x.value == "" || x.value == fvname || x.value == lvname  || x.value == fvname2 || x.value == lvname2 || x.value == email3 || x.value == mobilevalue || y.value != "" && z.value != y.value || x.value == fvname3 || x.value == lvname3)
				{
				valid=false;
				//alert("false")

if(x.value == "" && x.id == "f_fname" || x.value == defaultvalues[0] && x.id == "f_fname" || x.value == "don't forget your valid first name" && x.id == "f_fname")
					{
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Please supply your first name\n";

					}
//if(x.value == "" || x.value == defaultvalues[1] && x.id == "f_lname" || x.value == "don't forget your valid last name" && x.id == "f_lname")
if(x.value == "" && x.id == "f_lname" || x.value == defaultvalues[1] && x.id == "f_lname" || x.value == "don't forget your valid last name" && x.id == "f_lname")
					{
x.setAttribute("rel", "sugar"+i);
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Please supply your last name\n";

					}
				

				
				if(x.value == "" || x.value == defaultvalues[6] && x.id == "mobile" || x.value == "don't forget your phone number" && x.id == "mobile")
					{
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Don't forget your phone number\n";
					}


if(x.value == "" || x.value == defaultvalues[4] && x.id == "f_email" || x.value == "" || x.value == defaultvalues[4] && x.id == "f_email2")
					{
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Please supply your email address\n";
					}


/*if(x.value == "" || x.value == defaultvalues[2] && x.id == "f_ec_fname")
					{
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Please supply the emergency contacts first name\n";
					}


if(x.value == "" || x.value == defaultvalues[3] && x.id == "f_ec_lname")
					{
					x.style.color="red";
					x.parentNode.nextSibling.className="exclaim_markshow";
					errormessage += "Please supply the emergency contacts last name\n";
					}*/


				}

			}
		}

if(document.getElementById("TandC"))
{
var tc=document.getElementById("TandC");
if(tc.checked == false)
{ 
errormessage += "Don't forget to tick the terms & conditions";
valid = false;
tc.parentNode.nextSibling.nextSibling ? tc.parentNode.nextSibling.nextSibling.className="exclaim_markshow" :tc.parentNode.nextSibling.className="exclaim_markshow";

jq_showexclaim(tc);


//jQuery.noConflict();

//jQuery("#TandC").parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");


}

}


if(document.getElementById("paypalextra"))
{
var pe=document.getElementById("paypalextra");
var paypalvalue=pe.value;

paypalvalue = paypalvalue.replace(",", "");

pe.value = paypalvalue;

if(paypalvalue == "" || !IsNumeric(paypalvalue))
{ 
errormessage += "Don't forget to enter amount ";



jq_showexclaim(pe);

//jQuery.noConflict();
//jQuery("#"+pe.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");

valid = false;
}

}





if(document.getElementById("flight_plan"))
	{
	if(document.getElementById("flight_plan").value=="")
		{
		document.getElementById("flight_plan").parentNode.nextSibling.className="exclaim_markshow vc_margin";
		valid=false;
		errormessage += "Please Supply Flight Documents\n";
		}

	}

if(document.getElementById("passport_photo"))
	{
	if(document.getElementById("passport_photo").value=="")
		{
		valid=false;
		document.getElementById("passport_photo").parentNode.nextSibling.className="exclaim_markshow vc_margin";
		errormessage += "Please Supply Your Picture\n";
		}

	}
if(document.getElementById("ts_destination"))
{
var tsd=document.getElementById("ts_destination");
if(tsd.selectedIndex==0)
{
tsd.style.color="red";
jQuery("#"+tsd.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow")
valid=false;
}
}



if(y && z)
{
	if(y.value != "" && z.value != y.value)
		{
		errormessage += "Confirmation email does not match\n";
		y.style.color="red";
		z.style.color="red";
		z.parentNode.nextSibling.className="exclaim_markshow";
		}
}
	if(valid == false && from == 1)
		{
		//alert(errormessage)
alert("Oops...you forgot something!")

		}

	return valid;
}





function validate(element)
{

var current_element = document.getElementById(element.id);









//if(current_element.value == "" || current_element.value == fvname || current_element.value == lvname  || current_element.value == fvname2 || current_element.value == lvname2 || current_element.value == email3 || current_element.value == c_email || current_element.value== mobilevalue || current_element.id == "f_fname" && !current_element.value.match(alphaExp) || current_element.id == "f_lname" && !current_element.value.match(alphaExp) )

if(current_element.value == "" || current_element.value == fvname || current_element.value == lvname  || current_element.value == fvname2 || current_element.value == lvname2 || current_element.value == email3 || current_element.value == c_email || current_element.value== mobilevalue || current_element.value==fn2 )
{


if(current_element.value == "" && current_element.id == "f_fullname2")
{
current_element.value = fn2;
}



if(current_element.value == "" && current_element.id == "f_fname")
{
current_element.value = fvname;
}

if(current_element.value == "" && current_element.id == "mobile")
{
current_element.value = mobilevalue;
}



if(current_element.value == "" && current_element.id == "f_lname")
{
current_element.value = lvname;
}


if (current_element.value == "" && current_element.id == "f_email" || current_element.value == "" && current_element.id == "f_email2")
{

current_element.value = email3;
}

if (current_element.value == "" && current_element.id == "f_c_email2")
{
current_element.value = c_email;
}


current_element.style.color="red";
current_element.className="cf_inputbox";


element.parentNode.nextSibling.className="exclaim_markshow";
element.parentNode.className="round_corner";


}
else
{
current_element.style.color="#666666";

if(element.parentNode.nextSibling.className=="exclaim_markshow")
{
element.parentNode.nextSibling.className="exclaim_mark";
}

element.parentNode.className="round_corner";
current_element.className="cf_inputbox";
}
}

function addinputformatting(){

if(document.getElementById("whoelseContactForm"))
{
   parentcontainer = document.getElementById("whoelseContactForm");
   childinputs = parentcontainer.getElementsByTagName("input");

   for(i=0; i<childinputs.length;i++)
     {
     if(childinputs[i].type != "submit" && childinputs[i].type != "radio" && childinputs[i].type != "checkbox" && childinputs[i].id !="text_36" && childinputs[i].id !="text_37" && childinputs[i].id !="text_38"  && childinputs[i].id !="text_39" && childinputs[i].id !="text_40" && childinputs[i].id !="text_41" && childinputs[i].id !="f_fname" && childinputs[i].id !="f_lname" && childinputs[i].id !="f_ec_fname" && childinputs[i].id !="f_ec_lname" && childinputs[i].id !="f_email" && childinputs[i].id !="f_email2"  && childinputs[i].id !="chosen_week" && childinputs[i].id !="mobile" && childinputs[i].id !="amount" && childinputs[i].id !="flight_plan"&& childinputs[i].id !="passport_copy" && childinputs[i].id !="passport_photo" && childinputs[i].id !="upload_doc" && childinputs[i].id !="upload_doc2" && childinputs[i].id !="f_fullname2"  && childinputs[i].id !="travel_date" && childinputs[i].id !="ts-destination")
        {
         childinputs[i].onfocus = function() { hideborder(this)}
childinputs[i].onblur = function() { showborder(this)}
        }
     }
  }
}

//TEXTAREA BACKGROUND and TEXT swap

//var textareaElementText = "Use this space to tell us about any additional projects and preferred dates, friends you may be travelling with or anything else you might want us to know.";

var  textareaArray= new Array("Use this space to tell us about any additional projects and preferred dates, friends you may be travelling with or anything else you might want us to know.", "(ie: Cambridge Regional College/Warwick University)", "(i.e:Music - can play guitar, enjoy painting, and rugby)", "If YES please provide details.", "Describe your condition briefly including how you normally manage this or what you think you would need to do if it occurred during your stay");

function hidebackground(elem, textref)
{

if(elem.value ==textareaArray[textref])
{
elem.value="";
}
elem.style.background="none";
}

function showbackground(elem, textref)
{
elem.style.background="#ffffff url('templates/ja_purity/images/grad-textarea.jpg') repeat-x scroll bottom left";

if(elem.value =="" && elem.id != "sn_comments")
{
elem.value=textareaArray[textref];
}
}

var  textareaArray= new Array("Use this space to tell us about any additional projects and preferred dates, friends you may be travelling with or anything else you might want us to know.", "(ie: Shop assistant/A levels in modern languages/First year BA History)", "(ie: Cambridge Regional College/Warwick University)", "(i.e:Music - can play guitar, enjoy painting, and rugby)", "If YES please provide details.", "Describe your condition briefly including how you normally manage this or what you think you would need to do if it occurred during your stay", "");

function hidebackground2(elem, textref)
{

if(elem.value ==textareaArray[textref])
{
elem.value="";
}
elem.style.background="none";
}

function showbackground2(elem, textref)
{
elem.style.background="#ffffff url('templates/ja_purity/images/grad-textarea.jpg') repeat-x scroll bottom left";
if(elem.value =="")
{
elem.value=textareaArray[textref];
}
}

function validate_travel(elem)
{
jQuery.noConflict();

if(elem.value == elem.defaultValue || elem.value == "" )	
{
elem.value = elem.defaultValue;
elem.style.color="red";
jQuery("#"+elem.id).parent().next(".exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow") ;
//valid=false;
}
else
{
elem.style.color="#666666";
jQuery("#"+elem.id).parent().next(".exclaim_mark").removeClass("exclaim_markshow").addClass("exclaim_mark") ;	
}

}




