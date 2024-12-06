<!--
var transFlag=0;
var lang2='';
var lang='';


function DataQuality()
{win = window.open('/scripts/quality.html','dq','toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=600,height=600')}


function GlossaryWindow(url)
{win = window.open('/scripts/glossary.html','gwin','toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=600,height=400')}


function TranslatePage(pgname)
{
var omnilangFrom='en';  // insert 2-digit code for the source language between the quotes (recommended)
var omnilangDisplayAlways='no';  // set to 'no' to suppress translation when the user language matches the web page
var omnilangStart='no';  // set to 'no' if you don't want a translation to auto-initiate

var type=navigator.appName
if (type=="Netscape") lang = navigator.language;
else lang = navigator.userLanguage;
lang2 = lang.substr(0,2).toLowerCase();

// lang2 = 'fr';

if ( ( lang2.length != 2 ) || ( lang2 != omnilangFrom ) || ( omnilangDisplayAlways == 'yes' ) )
{
transFlag=1;

var lcode = new Array(
"en", "English", "Translate", 
"bg", "Bulgarian", "Translate", 
"cs", "Cesk&aacute;", "De&#154;ifrov&aacute;n&iacute;", 
"we", "Cymraeg", "Chyfieithiad", 
"da", "Dansk", "Gengivelse", 
"de", "Deutsch", "&Uuml;bersetzen", 
"es", "Espa&ntilde;ol", "Traducir", 
"ph", "Filipino", "Translate", 
"fr", "Fran&ccedil;ais", "Traduire", 
"el", "Greek", "Translate", 
"zh", "Hanyu", "Translate", 
"hr", "Hrvatski", "Prijevod", 
"is", "Isl&auml;ndska", "&THORN;&yacute;&eth;ing", 
"it", "Italiano", "Traduci", 
"ko", "Korean", "Translate", 
"hu", "Magyar", "Ford&iacute;t&aacute;s", 
"nl", "Nederlands", "Vertaal", 
"ja", "Nihongo", "Translate", 
"no", "Norsk", "Oversett", 
"pl", "Polski", "T&#142;umaczenie", 
"pt", "Portugu&ecirc;s", "Traduzir", 
"ro", "Romana", "Traducere", 
"ru", "Russkij", "Translate", 
"ls", "Slovensko", "prevod", 
"sr", "Sprski", "Prevod", 
"fi", "Suomi", "K&auml;&auml;nn&ouml;s", 
"se", "Svenska", "&Ouml;vers&auml;ttning", 
"tr", "T&uuml;rk&ccedil;e", "Translate");

document.write('&nbsp;<BR><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0 WIDTH=120><TR>');
document.write('<FORM METHOD="get" ACTION="http://www.omnilang.com/scripts/translateurl.pl" STYLE="margin:0px;" onSubmit="omnilangsubmit3(); return false;"');
document.write('<TD><INPUT TYPE="hidden" ID="defaulturl" NAME="defaulturl" VALUE="">');
document.write('<INPUT TYPE="hidden" ID="defaultfrom" NAME="defaultfrom" VALUE="' + omnilangFrom + '">');
document.write('<INPUT TYPE="hidden" ID="defaultstart" NAME="defaultstart" VALUE="' + omnilangStart + '">');
document.write('<SELECT ID="defaultto" NAME="defaultto" STYLE="font-size:11px;">');

var writtenlang = '';
var translatetext = 'Translate';
for ( var i = 0; i < lcode.length; i = i + 3 )
  {
  if ( lang2 == lcode[i] )
    {
    if ( ( omnilangFrom.length < 2 ) || ( lang2 != omnilangFrom ) )
      {
      document.write('<OPTION SELECTED VALUE="' + lcode[i] + '" STYLE="background: #FFFF00;">' + lcode[i+1] + '</OPTION>');
      writtenlang = lang2;
      translatetext  = lcode[i+2];
      }
    break;
    }
  }

for ( i = 0; i < lcode.length; i = i + 3 )
  {
  if ( writtenlang != lcode[i] )
    { document.write('<OPTION VALUE="' + lcode[i] + '">' + lcode[i+1] + '</OPTION>'); }
  }

document.write('</SELECT>');
document.write('<CENTER><INPUT TYPE="submit" VALUE="' + translatetext + '" STYLE="font-size:11px; background-color:#CCEEFF;">');
document.write('</TD>');
document.write('</FORM>');
document.write('</TR></TABLE></CENTER>');
}
}


function omnilangsubmit3()
  {
  var Netscape4 = ( document.layers );
  var MSIE4 = ( document.all && !document.getElementById );
  if ( Netscape4 )
  	{
	var tempdefaultto = document.layers['defaultto'].value;
	var tempdefaultfrom = document.layers['defaultfrom'].value;
	var tempdefaultstart = document.layers['defaultstart'].value;
	}
  else if ( MSIE4 )
  	{
	var tempdefaultto = document.all['defaultto'].value;
	var tempdefaultfrom = document.all['defaultfrom'].value;
	var tempdefaultstart = document.all['defaultstart'].value;
	}
  else
  	{
	var tempdefaultto = document.getElementById('defaultto').value;
	var tempdefaultfrom = document.getElementById('defaultfrom').value;
	var tempdefaultstart = document.getElementById('defaultstart').value;
	}

  var tempurl = document.location;
  var formurl = 'http://www.omnilang.com/scripts/translateurl.pl?defaulturl=' + tempurl + '&defaultfrom=' + tempdefaultfrom + '&defaultto=' + tempdefaultto + '&defaultstart=' + tempdefaultstart;

  window.open(formurl, 'omnilang', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=600,height=320');
  }


function copyright(rep)
{
if (rep == "A")
{win = window.open('http://www.artcyclopedia.com/copyright-ars.html','cwin','toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=600,height=600')}
if (rep == "V")
{win = window.open('http://www.artcyclopedia.com/copyright-vaga.html','cwin','toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=600,height=600')}
}


function unSet(fieldContents)
{
if (fieldContents.value == fieldContents.defaultValue) { fieldContents.value = "" }
}


function ArtpriceMulti(datatype,artistkey,artistname,artistsex)
{
var type=navigator.appName
if (type=="Netscape") var lang = navigator.language;
else var lang = navigator.userLanguage;

var lang2 = lang.substr(0,2);
if (lang2 == "Fr") var lang2="fr";
if (lang2 == "FR") var lang2="fr";
if (lang2 == "De") var lang2="de";
if (lang2 == "DE") var lang2="de";

var artistname1 = '';
var artistname2 = '';

var artpricelink = '<A HREF="http://www.artcyclopedia.com/scripts/rar.pl?' + artistkey + '">';

if (lang2 == "fr")
	{
	if ( artistname.length > 2 )
		{
		artistname1 = ' pour ' + artistname;
		artistname2 = ' de ' + artistname;
		}
	}
else
if (lang2 == "de")
	{
	if ( artistname.length > 2 )
		{
		artistname1 = ' fuer ' + artistname;
		artistname2 = ' von ' + artistname;
		}
	if ( artistsex == 'F' )
		{
		var pronoun1 = 'ihrer';
		var pronoun2 = 'ihres';
		}
	else
		{
		var pronoun1 = 'seiner';
		var pronoun2 = 'seines';
		}
	}
else
	{
	if ( artistname.length > 2 )
		{
		artistname1 = ' for ' + artistname;
		artistname2 = ' for ' + artistname;
		}
	if ( artistsex == 'F' )
		{ var pronoun = 'her'; }
	else
		{ var pronoun = 'his'; }
	}

if (lang2 == "fr")
	{
	document.write('(<B STYLE="background: #FFFF00;"><I>Aussi en Fran&ccedil;ais!</I></B> Cliquez sur <B>"Inscription gratuite"</B> pour acc&eacute;der aux fonctions avanc&eacute;es.)');
	document.write('<TABLE BORDER=0 CELLPADDING=4 CELLSPACING=0>');
	document.write('<TR VALIGN="top"><TD ROWSPAN=5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TD><TD>&#149;&nbsp;</TD>');
	document.write('<TD>' + artpricelink + '<B>R&eacute;sultats de ventes publiques</B>' + artistname1 + '</A>. Ma&icirc;trisez les vrais prix du march&eacute;.</TD></TR>');
	document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD>');
	document.write('<TD>' + artpricelink + '<B>Prochaines ventes</B></A>. Recherchez vos artistes dans les prochaines ventes.</TD></TR>');
	if ( datatype == 'ab' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biographie</B>' + artistname2 + '</A>.</TD></TR>'); }
	else
	if ( datatype == 'as' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + 'Des exemples de ses <B>signatures/monogrammes</B></A>.</TD></TR>'); }
	else
	if ( datatype == 'abs' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biographie</B>' + artistname2 + ' et des exemples de ses <B>signatures/monogrammes</B></A>.</TD></TR>'); }
	document.write('</TABLE>&nbsp;<BR>');
	}
else
if (lang2 == "de")
	{
	document.write('(<B STYLE="background: #FFFF00;"><I>Auch auf Deutsch!</I></B> Bei <B>"Gratis Expressanmeldung"</B> erhalten Sie Zugang zu allen Attraktionen.)');
	document.write('<TABLE BORDER=0 CELLPADDING=4 CELLSPACING=0>');
	document.write('<TR VALIGN="top"><TD ROWSPAN=5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TD><TD>&#149;&nbsp;</TD>');
	document.write('<TD>' + artpricelink + '<B>Kunstauktionspreise</B>' + artistname1 + '</A>. Aktuelle Aufzeichnung der Werke weltweit an Kunstauktionen verkauft (Zahlung wird angefordert um den tatsaechlichen Verkaufspreis zu besichtigen).</TD></TR>');
	document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD>');
	document.write('<TD>' + artpricelink + '<B>Bleiben Sie ueber Auktionen informiert!</B></A>. Verpassen Sie nie einen Verkauf! Tragen Sie sich gratis ein, damit Sie ueber kommende Auktionen sowie ueber zukuenftige Auktionen durch email informiert werden koennen.</TD></TR>');
	if ( datatype == 'ab' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biographie</B>' + artistname2 + '</A>.</TD></TR>'); }
	else
	if ( datatype == 'as' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + 'Beispiele ' + pronoun1 + ' <B>Signatur</B> oder ' + pronoun2 + ' <B>Monogrammes</B></A>.</TD></TR>'); }
	else
	if ( datatype == 'abs' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biographie</B>' + artistname2 + ' und Beispiele ' + pronoun1 + ' <B>Signatur</B> oder ' + pronoun2 + ' <B>Monogrammes</B></A>.</TD></TR>'); }
	document.write('</TABLE>&nbsp;<BR>');
	}
else
	{
	document.write('<I>Sponsored link</I> (You need to <B>register</B> for access to some research tools. Click <B STYLE="background:#CCCCCC; padding:2px;">"Free express sign up"</B> on the login panel.)</B>');
	document.write('<TABLE BORDER=0 CELLPADDING=4 CELLSPACING=0>');
	document.write('<TR VALIGN="top"><TD ROWSPAN=5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TD><TD>&#149;&nbsp;</TD>');
	document.write('<TD>' + artpricelink + '<B>Art auction prices</B>' + artistname1 + '</A>. Up-to-date record of works sold at art auctions worldwide (payment is required in order to see the actual selling price).</TD></TR>');
	if ( datatype == 'ab' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biography</B>' + artistname2 + '</A>.</TD></TR>'); }
	else
	if ( datatype == 'as' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + 'Examples of ' + pronoun + ' <B>signature/monogram</B></A>.</TD></TR>'); }
	else
	if ( datatype == 'abs' )
		{ document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD><TD>' + artpricelink + '<B>Biography</B>' + artistname2 + ' and examples of ' + pronoun + ' <B>signature/monogram</B></A>.</TD></TR>'); }
	document.write('<TR VALIGN="top"><TD>&#149;&nbsp;</TD>');
	document.write('<TD>Other features: Be informed of <B>upcoming auctions</B> of works by an artist. Detailed <B>art market analysis</B> by artist. Access to images and documentation from <B>270,000 sale catalogues</B>.</TD></TR>');
	document.write('</TABLE>&nbsp;<BR>');
	}
}


function menuTrueSize()
{
document.write('<TR VALIGN="top"><TD>&#149;</TD><TD STYLE="font-size:11px;"><B>');
document.write('<A HREF="http://www.actualsizer.com/index.html" TITLE="View artworks at their actual size">ActualSizer</A>');
document.write('</B></TD></TR>');
}


function menuThisDay()
{
Stamp = new Date();
if (Stamp.getDate() < 10)
	{var dd = '0'+Stamp.getDate();}
else
	{var dd = Stamp.getDate();}

if ( ( transFlag < 1 ) && ( Stamp.getMonth() < 12 ) )
{
var mname = new Array( 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' );
var dirname = new Array( 'art4jan', 'art4feb', 'art4mar', 'art4apr', 'art4may', 'art4jun', 'art4jul', 'art4aug', 'art4sep', 'art4oct', 'art4nov', 'art4dec' );

var mmtemp = Stamp.getMonth() + 1;
if (mmtemp < 10)
	{var mm = '0'+mmtemp;}
else
	{var mm = mmtemp;}

document.write('<TR VALIGN="top"><TD>&#149;</TD><TD STYLE="font-size:11px;"><B>');
document.write('<A HREF="http://' + 'www.safran-arts.com/42day/art/'+dirname[Stamp.getMonth()]+'/art'+mm+dd+'.html" TITLE="This Date in Art History (Art-4-2day)"><B>'+mname[Stamp.getMonth()]+' '+Stamp.getDate()+' in Art&nbsp;History</A></B></TD></TR>');
}
}


function menuGlossaries()
{
document.write('<TR VALIGN="top"><TD>&#149;</TD><TD STYLE="font-size:11px;"><B><A HREF="javascript:GlossaryWindow()" TITLE="Popup List of Fine Art Terms, Saints and Mythological Characters">Glossaries</A></B></TD></TR>');
}


function menuPosters()
{
}


function menuBooks()
{
}


function menuArtprice()
{
}


function maketop()
{
if (top != self)
  {
  if ((location.href.toLowerCase().indexOf("http://www.artcyclopedia.com") == 0) || (location.href.toLowerCase().indexOf("http://artcyclopedia.com") == 0))
    { top.location.replace(self.location.href); }
  }
}


function PostersHead()
{
var langall='';
var langall2='';
var typeall=navigator.appName
if (typeall=="Netscape") langall = navigator.language;
else langall = navigator.userLanguage;
langall2 = langall.substr(0,2).toLowerCase();

if ( langall2 == 'fr' )
{
var htmlall = '<B><A HREF="http://www.artcyclopedia.com/goto/prints" STYLE="font-size:16px;">AllPosters.fr</A><BR>'
+ '<FONT COLOR="red"><I>En&nbsp;fran&ccedil;ais!<BR>'
+ 'La&nbsp;plus&nbsp;grande<BR>boutique&nbsp;d&#39;affiches<BR>et&nbsp;reproductions<BR>du&nbsp;monde&nbsp;entier!</I></FONT></B><BR>';
document.getElementById('allpdiv').innerHTML = htmlall;
}
else if ( langall2 == 'de' )
{
var htmlall = '<B><A HREF="http://www.artcyclopedia.com/goto/prints" STYLE="font-size:16px;">AllPosters.de</A><BR>'
+ '<FONT COLOR="red"><I>Auf&nbsp;Deutsch!<BR>'
+ '<I>Der&nbsp;weltgr&ouml;&szlig;te&nbsp;Poster-<BR>und&nbsp;Print-Store!</I></FONT></B><BR>';
document.getElementById('allpdiv').innerHTML = htmlall;
}
else if ( langall2 == 'es' )
{
var htmlall = '<B><A HREF="http://www.artcyclopedia.com/goto/prints" STYLE="font-size:16px;">AllPosters.es</A><BR>'
+ '<FONT COLOR="red"><I>En&nbsp;espa&ntilde;ol -<BR>'
+ '<I>la&nbsp;tienda&nbsp;de&nbsp;p&oacute;steres<BR>y&nbsp;l&aacute;minas&nbsp;m&aacute;s&nbsp;grande<BR>del&nbsp;mundo</I></FONT></B><BR>';
document.getElementById('allpdiv').innerHTML = htmlall;
}
else if ( langall2 == 'it' )
{
var htmlall = '<B><A HREF="http://www.artcyclopedia.com/goto/prints" STYLE="font-size:16px;">AllPosters.it</A><BR>'
+ '<FONT COLOR="red"><I>En&nbsp;Italiano!<BR>'
+ '<I>Il&nbsp;negozio&nbsp;di&nbsp;poster<BR>e&nbsp;stampe&nbsp;pi&ugrave;&nbsp;grande<BR>del&nbsp;mondo!</I></FONT></B><BR>';
document.getElementById('allpdiv').innerHTML = htmlall;
}
}
//-->
