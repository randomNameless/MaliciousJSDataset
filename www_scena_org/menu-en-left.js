function Buster()
{
if (top.frames.length!=0)
     top.location=self.document.location;
}

document.write("<div>")
mdom = (document.getElementById) ? true : false;
mie = (navigator.appVersion.indexOf("MSIE") != -1)  ? true : false;
mns6 = (navigator.vendor == ("Netscape6") != -1) ? true : false;
NS = (document.layers) ? true : false;
mopera = (navigator.userAgent.indexOf("Opera") != -1)  ? true : false;
//mopera = true;

font = "Verdana,Helvetica,Arial,Tahuma"; 
fontweight = "bold"; 
fontsize = 10; 
menubgcolor = "990000";
menufgcolor = "ffffff"; 
menuonbgcolor = "003366"; 
menuonfgcolor = "ffffcc"; 
bordercolor = "ffffff"; 
keepselected = true;
timegap = 500; 
mpadding=4;

arraycorrect = 10; 
timer=0; 

selmenu = "";
selitem = "";
closestr = "";
openmenus = new Array();

// Syntax
//menus[MENU NUMBER] = new Array(
//"TOP", "LEFT", "HEIGHT", "WIDTH", "BORDER WIDTH","MENU TITLE","NULL","NULL","NULL","NULL"
//"MENU TITLE", "URL".......
//);

menu1 = new Array(
"295","165","30","150","0","Home","","","","",
"Version Fran&ccedil;aise", "http://www.scena.org/index-fr.asp",0,
"English Version", "http://www.scena.org/index-en.asp",0
);

menu2 = new Array(
"295","225","30","135","0","Content","","","","",
"ClassicalMusicNews.org", "http://www.scena.org/webnews/WebNews.asp?lan=2",0,
"Canadian Calendar", "http://www.scena.org/calendar/cal.asp?lan=2",0,
"LSM Newswire", "http://www.scena.org/Newswire.asp",0,
"Contest", "http://www.scena.org/cdcontest.asp?lan=2",0,
"Webcasts", "http://www.scena.org/webcast/webcast.asp?lan=2",0,
"Radio&amp;Tv", "http://www.scena.org/calendar/webtv.asp?lan=1&flag=2",0,
"Montreal", "http://www.scena.org/calendar/mtl.asp?lan=2",0,
"e-Card", "http://www.scena.org/icard/icard.asp?lan=2",0,
"PDF Files", "http://www.scena.org/pdf-files/listcontent.asp?lan=2",0,
"Links", "http://www.scena.org/links/link.asp?lan=2",0,
"Audio / Video", "http://www.scena.org/audio/audio.htm",0,
"MIDI", "http://www.scena.org/midi/midi.htm",0,
"Affiliates", "http://www.scena.org/affiliate.asp",0,
"Community - Message Board", "http://www.scena.org/msgtest/default.asp",0,
"Past Quiz Results", "http://www.scena.org/quiz/quizresults.html",0,
"Festival schedule", "http://www.scena.org/calendar/festival.asp",0
);

menu3 = new Array(
"295","300","30","150","0","Article","","","","",
"On the Aisle by Philip Anson", "http://www.scena.org/columns/anson.asp",0,
"The Lebrecht Weekly", "http://www.scena.org/columns/lebrecht.htm",0,
"LSM Reviews", "http://www.scena.org/columns/lsmreviews.htm",0,
"Updates", "http://www.scena.org/Updates.asp?Lan=2",0,
"Back Issues", "http://www.scena.org/lsm/back_issues-en.asp",0,
"Throat Doctor", "http://www.scena.org/indexdoctor.htm",0,
"Interviews", "http://www.scena.org/interviews.htm",0,
"Concert Reviews", "http://www.scena.org/reviews/index.htm",0
);

menu4 = new Array(
"295","380","30","160","0","LSM","","","","",
"About LSM", "http://www.scena.org/aboutLSM.htm",0,
"Subscription", "http://www.scena.org/freesample.asp?lan=2",0,
"LSM News", "http://www.scena.org/LSMnews/index.htm",0,
"Distribution", "http://www.scena.org/distribution.htm",0,
"Advertising", "http://www.scena.org/advertising.htm",0,
"Guest Book", "http://www.scena.org/guestbook.htm",0,
"Contact Us", "http://www.scena.org/emails.htm",0,
"Join the Team of Volunteers & Staff", "http://www.scena.org/Jobs/helpwanted.htm",0,
"Make LSM your home page", "http://scena.org/lsmnews/lsmyourhomepage.html",0

);

menu5 = new Array(
"295","530","30","160","0","Search","","","","",
"Web News", "http://www.scena.org/webnews/webnewssearch.asp?lan=2",0,
"CD Reviews", "http://www.scena.org/cdsearch1.asp?lan=2",0,
"Calendar", "http://www.scena.org/calendar/search1.asp?lan=2",0,
"Webcast","http://www.scena.org/webcast/webcastsearch.asp?lan=2",0,
"Web", "http://www.scena.org/websearch/searchjeeves.htm",0,
"Site", "http://www.scena.org/searchlight.htm",0
);
menu6 = new Array(
"295","600","201","160","0","aaa","","","",""
);


/*BETA - Databasewatch menu system version 0.8
* written by Andy Woolley
* Copyright 2001 Andy Woolley. All Rights Reserved.
*
* Please feel free to use this code on your own website free of charge.
* You can also distribute and modify this source code as long as this 
* Copyright notice remains intact and you send me notice that you 
* intend to use this code on your website. I can only support this product
* if you let me know.
* dbmenu@milonic.com
*/

function getmenuobj(menutext)
{
if (document.getElementById) {menui = document.getElementById(menutext).style;} else if (document.all) {menui = document.all[menutext].style;} else if (document.layers) {menui = document.layers.eval(menutext);}
return menui;
}

function closeallmenus()
{
	for (a=0; a < openmenus.length; a++)
	{
		menutexta = openmenus[a];
		menitema = getmenuobj(menutexta);
		menitema.visibility = 'hidden';
	}
}
	
function closemenu()
{
	timer = setTimeout("closeallmenus()",timegap)
}


function popup(menunum)
{
	clearTimeout(timer);   	
	menutext = 'menu' + menunum;
	menitem = getmenuobj(menutext);
	closeallmenus();
	delete(openmenus);
	openmenus = new Array();	
	openmenus[openmenus.length] = menutext;
	menitem.visibility = 'visible';	
}

function showel(lyr, el, show, menuname, menustr)
{	
	clearTimeout(timer);
	menutext = 'el' + el;
	if (document.getElementById) {menitem = document.getElementById(menutext).style;} else if (document.all) {menitem = document.all[menutext].style;} else if (NS) {menitem = document.layers[lyr -1].document.layers[el - 1].document.layers[0];}
	
	if (show) 
	{
		menitem.visibility="visible";
		popup(lyr);
	}
	else
	{
		menitem.visibility="hidden";
		closemenu();
	}
}

function dc()
{
	location.href=window.status;
}

menus = 1;
mentext = "";
menarr = "";
while(eval("window.menu" + menus)) 
{
	menarr += "menu" + menus + ",";
	submenus = 1;
	while(eval("window.menu" + menus + "_" + submenus))
	{
		menarr += "menu" + menus + "_" + submenus + ",";
		submenus++;
	}
	tmenu = eval("menu" + menus);	
	menus++;
}

menuarray = menarr.split("\,");
menus = menuarray.length;
elcount=0;

stxt = "<style type=\"text/css\"> ";
stxt += "DIV.minimenu{padding-left:" + mpadding + ";padding-right:" + (mpadding) + ";padding-top:" + mpadding + ";padding-bottom:" + mpadding + ";font-weight:" + fontweight + ";font-family:" + font + ";font-size:" + fontsize + "px;color:#" + menufgcolor + ";background-color:#" + menubgcolor + "}";
stxt += "TD.minimenu {font-family:" + font + ";font-size:" + fontsize + "px; font-weight:" + fontweight + ";}";
stxt += "A.minimenu  {font-family:" + font + ";font-size:" + fontsize + "px; font-weight:" + fontweight + ";color:#" + menuonfgcolor + ";text-decoration:none;}"
stxt += "</style>";
document.write(stxt);

//alert(mdom);
//alert(mie);
lh = mpadding + fontsize;
for (a=1; a < menus; a++)
{
	mentext = "";
	menu = eval(menuarray[a - 1]);	
	if (NS)	
	{mentext += "<layer visibility=hidden bgcolor=#" + bordercolor + " name=\"" + menuarray[a - 1] + "\" left=\"" + menu[1] + "\" top=\"" + menu[0] + "\" width=\"" + menu[3] + "\">";}
	else
	{mentext += "<div width=" + menu[3] + " id=\"" + menuarray[a - 1] + "\" style=\"z-index:99;background-color:#" + bordercolor + ";visibility:hidden; position:absolute;top:" + menu[0] + "px;left:" + menu[1] + "px\">";}
	mentext += "<table bgcolor=#" + bordercolor + " width=" + menu[3] + " cellpadding=0 cellspacing=" + menu[4] + " border=0>\n";
	
	acount = 0;
	divwidth="";
	if (mie) 
	{divwidth = " style='width:100%;' ";}
	else if (mdom)
	{
		divwidth = "style='width:" + (menu[3] - (mpadding * 2)) + ";'";
	}
	
	atop = parseInt(menu[4]);
	for (b=arraycorrect; b < menu.length ; b++)
	{		
		b = b + 2;
		borderwidth = parseInt(menu[4]);
		bw = borderwidth * 2;
		
		elcount++;
		acount++;
		
		
		if (NS)
		{			
			mentext += "<tr><td width=" + menu[3] + ">";
			mentext += "<layer bgcolor=#" + menubgcolor + " width=" + (menu[3] - bw) + " name=mel" + elcount + " top=" + (atop) + " left=" + borderwidth + " onMouseOver=\"showel(" + a + ", " + acount + ",1, '" + menu[b - 1] + "', '" + menuarray[a - 1] + "')\" onMouseOut=\"showel(" + a + "," + acount + ",0, '" + menu[b - 1] + "', '" + menuarray[a - 1] + "')\">\n";
			mentext += "<layer onmouseover=\"window.status='" + menu[b - 1] + "'; this.captureEvents(Event.CLICK); this.onclick=dc\" onmouseout=\"window.status=''\" width=" + (menu[3] - bw) + " name=el" + elcount + "  visibility=hidden bgcolor=#" + menuonbgcolor + ">";
			mentext += "<table><tr><td height=" + lh + " class=minimenu bgcolor=#" + menuonbgcolor + " valign=middle>";
			mentext += "<a class=minimenu href='" + menu[b - 1] + "' style='color:#" + menuonfgcolor + ";text-decoration:none;'>" + menu[b - 2] + "</a>";
			mentext += "</td></tr></table>";
			mentext += "</layer>";			
			mentext += "<table><tr><td height=" + lh + " class=minimenu bgcolor=#" + menubgcolor + " valign=middle><font color=#" + menufgcolor + ">" + menu[b - 2] + "</font></td></tr></table>";
			mentext += "</layer>";
		}
		else if (mopera)
		{		
			mentext += "<tr><td style=\"color:#" + menufgcolor + ";background-color:#" + menubgcolor + ";\" class=minimenu onMouseOver=\"showel(" + a + ", " + acount + ",1, '" + menu[b - 1] + "', '" + menuarray[a - 1] + "')\" onMouseOut=\"showel(" + a + "," + acount + ",0, '" + menu[b - 1] + "', '" + menuarray[a - 1] + "')\">";
			mentext += "<a href=1.htm style=\"top:" + ((acount -1) * 20) + ";left:" + borderwidth + ";position:absolute;width:100%;text-decoration:none\">";
			mentext += "<div class=minimenu name=el" + elcount + " id=el" + elcount + " style=\"color:#" + menuonfgcolor + ";background-color:#" + menuonbgcolor + ";visibility:hidden\">" + menu[b - 2] + "</div>";
			mentext += "</a><div class=minimenu>" + menu[b - 2] + "</div>";		
		}
		else
		{
			mentext += "<tr><td width=" + menu[3] + ">";
			mentext += "<a href='" + menu[b - 1] + "' style='text-decoration:none;'>";			
			mentext += "<div class=minimenu " + divwidth;
			mentext += " onMouseOver=\"popup(" + a +",1);this.style.cursor='hand';this.style.backgroundColor='#" + menuonbgcolor + "';this.style.color='#" + menuonfgcolor + "';\" ";
			mentext += " onMouseOut=\"closemenu(" + a +");this.style.backgroundColor='#" + menubgcolor + "'; this.style.color='#" + menufgcolor + "';\">";
			mentext += menu[b - 2] + "</div></a>";
		}
		
		mentext += "</td></tr>\n\n";
		document.write(mentext);		
		mentext = "";
		

		
		if (NS)
		{
			mt = document.layers[a - 1].document.layers[acount - 1].document.layers[0];
			atop += mt.clip.height + parseInt(menu[4]);
		}
	}		
	if (NS) {mentext += "<tr><td><layer top=" + (atop) + "></layer></td></tr>"}
	mentext += "</table>";
	if (NS) {mentext += "</layer>"} else {mentext += "</div>"}
	document.write(mentext);
}
if (NS) {document.write("</layer>")} else {document.write("</div>")}


