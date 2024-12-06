
		var nav_crosspromo = new Object();

		nav_crosspromo.numLinks="4";
		nav_crosspromo.brightButton="Chicky";
		nav_crosspromo.importedImageMouseOver="";
		nav_crosspromo.style="text";
		nav_crosspromo.imageWidth="114";
		nav_crosspromo.importedImage="";
		nav_crosspromo.mouseoverBold="false";
		nav_crosspromo.lineWidth="2";
		nav_crosspromo.mouseoverItalic="false";
		nav_crosspromo.mouseoverEffect="true";
		nav_crosspromo.textFont="Bookman Old Style";
		nav_crosspromo.graphicMouseover="true";
		nav_crosspromo.funButton="Arts_and_Crafts";
		nav_crosspromo.background="";
		nav_crosspromo.mouseoverBgcolor="";
		nav_crosspromo.selectedTextcolor="#B91806";
		nav_crosspromo.italic="false";
		nav_crosspromo.underline="false";
		nav_crosspromo.border="";
		nav_crosspromo.verticalSpacing="10";
		nav_crosspromo.localPreview="false";
		nav_crosspromo.selectedUnderline="false";
		nav_crosspromo.textColor="#9E0704";
		nav_crosspromo.holidayButton="Christmas_Ornaments";
		nav_crosspromo.texturedButton="Brick";
		nav_crosspromo.selectedItalic="false";
		nav_crosspromo.tabCategory="basic";
		nav_crosspromo.justification="center";
		nav_crosspromo.selectedEffect="true";
		nav_crosspromo.accentStyle="Arrow";
		nav_crosspromo.simpleButton="Autumn_Leaves";
		nav_crosspromo.navID="nav_crosspromo";
		nav_crosspromo.dirty="false";
		nav_crosspromo.horizontalSpacing="10";
		nav_crosspromo.graphicSelected="true";
		nav_crosspromo.selectedBgcolor="";
		nav_crosspromo.accentType="";
		nav_crosspromo.textSize="12";
		nav_crosspromo.selectedBold="false";
		nav_crosspromo.importedImageSelected="";
		nav_crosspromo.basicTab="White";
		nav_crosspromo.accentColor="Black";
		nav_crosspromo.basicButton="Gray";
		nav_crosspromo.modernButton="Basic_Black";
		nav_crosspromo.buttonCategory="basic";
		nav_crosspromo.horizontalWrap="5";
		nav_crosspromo.shinyButton="Shiny_Aqua";
		nav_crosspromo.type="Navigation";
		nav_crosspromo.imageHeight="31";
		nav_crosspromo.hasLinks="true";
		nav_crosspromo.squareTab="Camel";
		nav_crosspromo.lineColor="#000000";
		nav_crosspromo.orientation="horizontal";
		nav_crosspromo.bold="false";
		nav_crosspromo.version="5";
		nav_crosspromo.sophisticatedButton="Antique";
		nav_crosspromo.mouseoverTextcolor="#B91806";
		nav_crosspromo.darkButton="Basic_Black";
		nav_crosspromo.mouseoverUnderline="false";
		
		nav_crosspromo.navName = "crosspromo";
		nav_crosspromo.imagePath = "";
		nav_crosspromo.selectedImagePath = "/~media/elements/LayoutClipart/Accent_Arrow_Black_Selected";
		nav_crosspromo.mouseOverImagePath = "/~media/elements/LayoutClipart/Accent_Arrow_Black_Selected";
		nav_crosspromo.imageWidth = "16";
		nav_crosspromo.imageHeight = "16";
		nav_crosspromo.fontClass = "size12 BookmanOldStyle12";
		nav_crosspromo.fontFace = "'Bookman Old Style', 'Times New Roman', Times, serif";

		
		
		var baseHref = '';
		
		if (document.getElementsByTagName)
		{
			
			var base = document.getElementsByTagName('base');
			
			if (base && base.length > 0)
			{
				
				if (base[0].href != undefined)
				{
					
					baseHref = base[0].href;
					
					if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
					{
						baseHref += '/';
					}
				}
			}
		}
		
		nav_crosspromo.links=new Array(4);
	
		
		var nav_crosspromo_Link1 = new Object();
		nav_crosspromo_Link1.type = "url";
		nav_crosspromo_Link1.displayName = "~&nbsp;Author&nbsp;L.Shannon&nbsp;~";
		nav_crosspromo_Link1.linkWindow = "_self";
		nav_crosspromo_Link1.linkValue = "http://lshannon.net";
		nav_crosspromo_Link1.linkIndex = "1";
		nav_crosspromo.links[0] = nav_crosspromo_Link1;

		var nav_crosspromo_Link2 = new Object();
		nav_crosspromo_Link2.type = "url";
		nav_crosspromo_Link2.displayName = "Barrel&nbsp;Valley&nbsp;Cockers&nbsp;~";
		nav_crosspromo_Link2.linkWindow = "_self";
		nav_crosspromo_Link2.linkValue = "http://barrelvalleycockers.homestead.com/";
		nav_crosspromo_Link2.linkIndex = "2";
		nav_crosspromo.links[1] = nav_crosspromo_Link2;

		var nav_crosspromo_Link3 = new Object();
		nav_crosspromo_Link3.type = "url";
		nav_crosspromo_Link3.displayName = "PetKyn&nbsp;Press&nbsp;~";
		nav_crosspromo_Link3.linkWindow = "_self";
		nav_crosspromo_Link3.linkValue = "http://www.pet-kyn.com/";
		nav_crosspromo_Link3.linkIndex = "3";
		nav_crosspromo.links[2] = nav_crosspromo_Link3;

		var nav_crosspromo_Link4 = new Object();
		nav_crosspromo_Link4.type = "url";
		nav_crosspromo_Link4.displayName = "Phoenix&nbsp;Feathers&nbsp;Aviary&nbsp;~";
		nav_crosspromo_Link4.linkWindow = "_self";
		nav_crosspromo_Link4.linkValue = "http://phoenixfeathers.homestead.com/";
		nav_crosspromo_Link4.linkIndex = "4";
		nav_crosspromo.links[3] = nav_crosspromo_Link4;

		




function renderTextHTML(Navigation, strTpGif)
{
	
	var strHTML = '';
		
	
	if(Navigation.border)
	{
		strHTML += '<TABLE CELLSPACING="0" BORDER="0" CELLPADDING="0">';
		strHTML += '<TR HEIGHT="2" BGCOLOR="' + Navigation.border + '"><TD HEIGHT="2" COLSPAN="3"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '<TR><TD WIDTH="2" BGCOLOR="' + Navigation.border + '"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD><TD>';
	}
	var strBGColor = '';
	if(Navigation.background)
	{
		strBGColor = 'BGCOLOR="' + Navigation.background + '"';	
	}
	
	strHTML += '<TABLE CELLSPACING="0" CELLPADDING="0" BORDER="0" ' + strBGColor + '>';

	
	var i;
	for(i = 0; i < Navigation.links.length; i++)
	{
		strHTML += renderTextLink(Navigation, Navigation.links[i], strTpGif);	
	}

	strHTML += '</TABLE>';
		
	if(Navigation.border)
	{
		strHTML += '</TD><TD WIDTH="2" BGCOLOR="' + Navigation.border + '"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '<TR HEIGHT="2" BGCOLOR="'  + Navigation.border + '"><TD HEIGHT="2" COLSPAN="3"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '</TABLE>';
	}
		
	
	return strHTML;
}
 
function backgroundMouseOn(tableCell, newColor) 
{ 
	tableCell.oldBGColor = tableCell.style.backgroundColor;
	tableCell.style.backgroundColor = newColor;
}  
function backgroundMouseOff(tableCell)
{ 
	tableCell.style.backgroundColor = tableCell.oldBGColor;
}

function getTextMouseOverHandler(Navigation, bIsCurrentPage)
{
	
	if (Navigation.mouseoverEffect != 'true') return '';

	var bShowMouseoverBg = !(bIsCurrentPage && 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var bShowMouseoverText = !(bIsCurrentPage && 'true' == Navigation.selectedEffect && Navigation.selectedTextcolor);

	var strMouseOver = '';
	var strMouseOut = '';
			
	if(Navigation.mouseoverBgcolor && bShowMouseoverBg)
	{
		strMouseOver += ' backgroundMouseOn(this, \'' + Navigation.mouseoverBgcolor+ '\');';
		strMouseOut += ' backgroundMouseOff(this);';
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if(bIsCurrentPage && 'true' == Navigation.selectedEffect)
	{
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor : Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	}
	else
	{
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor : Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	strMouseOver += ' textMouseOn(this, \'' + textColor + '\', \'' + bold + '\', \'' + underline + '\', \'' + italic + '\');';
	strMouseOut += ' textMouseOff(this, \'' + baseTextColor + '\', \'' + baseBold + '\', \'' + baseUnderline + '\', \'' + baseItalic + '\');';
	
	return ' onMouseOver="' + strMouseOver + '" onMouseOut="' + strMouseOut + '"';
}

function getTextStyle(strFontColor, bold, italic, underline, bNetscape) 
{
	
	var strStyle = ' style="';

	strStyle += 'cursor: pointer; cursor: hand; '; 
	strStyle += 'color:' + strFontColor + ';';
	
	if(!bNetscape)
	{
		if (bold) strStyle += 'font-weight: bold;';
		if (italic) strStyle += 'font-style: italic;';
		if (underline) strStyle += 'text-decoration: underline;';
	}
	
	
	strStyle += '" ';
	
	return strStyle;
}

function renderTextLink(Navigation, Link, strTpGif)
{
	var strHTML = '';
	
	var bIsCurrentPage = isCurrentPage(Link);
	
	
	var strLinkValue = fixLinkValue(Link);
	
	var strFontColor = Navigation.textColor;	
	var strBGHTML = '';	
	var strGraphicName = 'ID' + Navigation.navName + Link.linkIndex;
	
	var nVerticalSpacing = Navigation.verticalSpacing;
	var nHorizontalSpacing = Navigation.horizontalSpacing;
	
	var nVertPaddingTop = Math.floor(nVerticalSpacing/2);
	var nVertPaddingBottom = Math.round(nVerticalSpacing/2);
	
	var nHorizPaddingLeft = Math.floor(nHorizontalSpacing/2);
	var nHorizPaddingRight = Math.round(nHorizontalSpacing/2);
	var bLastLink = Link.linkIndex == Navigation.numLinks;
	
	var nGeneralPadding = 10;
	var nAccentGraphicPadding = 10;
	var nAccentWidth = Navigation.imageWidth;
	var nAccentHeight = Navigation.imageHeight;

	
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) 
	{
		if(Navigation.selectedTextcolor)
		{
			strFontColor = Navigation.selectedTextcolor;
		}
		if(Navigation.selectedBgcolor)
		{
			strBGHTML += ' BGCOLOR="' + Navigation.selectedBgcolor + '" ';
		}
	} 
	
	var bBackgroundOrBorder = Navigation.border || Navigation.background;
	
	
	var bNetscape = false;
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
						
	if ( (strAppName == 'Netscape') &&
		(appVer >= 4.0 && appVer < 5) ) 
	{  
		bNetscape = true;
	}		
	
	var strOnClick = getOnClick(strLinkValue, Link.linkWindow); 
	var strStyle = getTextStyle(
		strFontColor,
		((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold)),
		((bIsCurrentPage && 'true' == Navigation.selectedEffect)  ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic)),
		((bIsCurrentPage && 'true' == Navigation.selectedEffect)  ? ('true' == Navigation.selectedUnderline) : ('true' == Navigation.underline)),
		bNetscape
	);
	var strMouseOver = getTextMouseOverHandler(Navigation, bIsCurrentPage);
	
	var strAlignment;
	if(Navigation.orientation=='vertical')
	{
		strAlignment = Navigation.justification;	
	}
	else
	{
		strAlignment = 'center';	
	}
	
	var strTextAlignment = 'ALIGN="' + strAlignment + '" ';
		
	
	var strLinkTarget = Link.linkWindow;
	if(strLinkTarget == '_self')
	{
		strLinkTarget = '_parent';
	}

	if(Navigation.orientation=='horizontal')
	{
		if((Link.linkIndex % Navigation.horizontalWrap) == 1) 
		{
			strHTML += '<TR ALIGN="CENTER" VALIGN="MIDDLE">';
			strHTML += '<TD>';
			strHTML += '<TABLE CELLSPACING="0" CELLPADDING="0" BORDER="0">';
			strHTML += '<TR>';
		}	
	}
	else
	{
		strHTML += '<TR ';
		strHTML += strBGHTML;
		
		if(!bNetscape)
		{
			strHTML += strOnClick + strStyle + strMouseOver;
		}
		
		strHTML +='>';

		if(Navigation.accentType == 'left' || Navigation.accentType=='both')
		{
			strHTML += '<TD ALIGN="CENTER" >';
			
			if(bNetscape)
			{
				strHTML += '<A TARGET="' + strLinkTarget + '" HREF="' + strLinkValue + '">';
			}
			
			if(Navigation.border!='' || Navigation.background!='')
			{
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';			
			}
			
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight +'" BORDER="0">';
			
			if(bNetscape)
			{
				strHTML += '</A>';
			}
			
			strHTML += '</TD>';
		}
	}
				
	strHTML += '<TD ' + strTextAlignment + ' VALIGN="MIDDLE" NOWRAP ';	
	
	
	strHTML += ' id="'+Navigation.navName+'_Link'+Link.linkIndex+'"';
	
	if(Navigation.orientation=='horizontal')
	{
		strHTML += strBGHTML;
		if(!bNetscape)
		{
			strHTML += strOnClick + strStyle + strMouseOver;
		}
	}
		
	strHTML += '>';
	
	
	if(bNetscape)
	{
		strHTML += '<A HREF="' + strLinkValue + '" TARGET="' + strLinkTarget + '">'; 
	}		
		
	if(Navigation.orientation=='vertical')
	{
		if(nVertPaddingTop > 0)
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingTop + '" BORDER="0"><BR>';
		}
		
		if(Navigation.accentType=='lines' || ((Navigation.border!='' || Navigation.background!='') && Navigation.accentType!='left' && Navigation.accentType!='both'))
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';
		}
	}
	else
	{
		if(bBackgroundOrBorder && nVertPaddingTop > 0)
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingTop + '" BORDER="0"><BR>';
		}
		
		if( ((Link.linkIndex % Navigation.horizontalWrap) != 1 || bBackgroundOrBorder) && nHorizPaddingLeft > 0) 
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nHorizPaddingLeft + '" HEIGHT="1" BORDER="0">';
		}				

		if(Navigation.accentType=='left' || Navigation.accentType=='both')
		{
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="'+ Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
		}	
	}

	
	var strFormattingStart = ''; 
	var strFormattingEnd = '';
	if (bNetscape)
	{
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic))
		{
			strFormattingStart += '<I>';
			strFormattingEnd = '</I>' + strFormattingEnd;
		}
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold))
		{
			strFormattingStart += '<B>';
			strFormattingEnd = '</B>' + strFormattingEnd;
		}
	}
					
	strHTML += '<FONT';
	strHTML += ' FACE="' + Navigation.fontFace + '" ';
	strHTML += ' CLASS="' + Navigation.fontClass + '" '; 
	
	if(bNetscape)
	{
		strHTML += ' COLOR="' + strFontColor + '"';
	}
	strHTML += '>'; 
	
	strHTML += strFormattingStart + Link.displayName + strFormattingEnd;
	
	strHTML += '</FONT>';
	
	
	if(Navigation.orientation=='vertical')
	{
		if(Navigation.accentType=='lines' || (bBackgroundOrBorder && Navigation.accentType!='both' ))
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';
		}
		
		if (nVertPaddingBottom > 0)
		{
			strHTML += '<BR><IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingBottom + '" BORDER="0">';
		}
	}
	else
	{
		if(Navigation.accentType=='both')
		{
			strHTML += '<IMG SRC="' + strTpGif + '"  WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
		}
		
		if (((Link.linkIndex % Navigation.horizontalWrap != 0 && !bLastLink) || bBackgroundOrBorder) && nHorizPaddingRight > 0 ) 
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nHorizPaddingRight + '" HEIGHT="1" BORDER="0">';
		}
		
		if(bBackgroundOrBorder && nVertPaddingBottom > 0)
		{
			strHTML += '<BR><IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingBottom + '" BORDER="0">';
		}
	}
	
	
	if(bNetscape)
	{
		strHTML += '</A>';
	}	

	
	strHTML += '</TD>';
	
	if(Navigation.orientation=='vertical')
	{
		if(Navigation.accentType=='both')
		{
			strHTML += '<TD ALIGN="CENTER" >';
				
			if(bNetscape)
			{
				strHTML += '<A TARGET="' + Link.linkWindow + '" HREF="' + strLinkValue + '">';
			}
				
			
			if(bBackgroundOrBorder)
			{
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
			}
			
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight +'" BORDER="0">';
			
			if(bNetscape)
			{
				strHTML += '</A>';
			}
			strHTML += '</TD>';
		}
		
		
		strHTML += '</TR>';
		
		if(Navigation.accentType=='lines')
		{
			if(!bLastLink)
			{
				strHTML += '<TR><TD HEIGHT="' + Navigation.lineWidth + '" BGCOLOR="' + Navigation.lineColor + '">';
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + Navigation.lineWidth + '"></TD></TR>';
			}
		}
	}
	else
	{
		
		if(Navigation.accentType == 'lines')
		{		
			if(!bLastLink && ((Link.linkIndex % Navigation.horizontalWrap) != 0)) 
			{ 	
				strHTML += '<TD WIDTH="' +  Navigation.lineWidth +'" BGCOLOR="' + Navigation.lineColor +  '">';
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + Navigation.lineWidth + '"></TD>';
			}
		}
			
		
		if( ((Link.linkIndex % Navigation.horizontalWrap) == 0) || bLastLink )
		{
			strHTML += '</TR>';
			strHTML += '</TABLE>';
			strHTML += '</TD></TR>';
			
			if(!bLastLink && !bBackgroundOrBorder)
			{	
				if (nVerticalSpacing > 0)
				{
					strHTML += '<TR>';
					strHTML += '<TD>';
					strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVerticalSpacing + '" BORDER="0">';
					strHTML += '</TD></TR>';
				}
			}
		}
	}
	return strHTML;
}


		



function renderHTML(Navigation)
{
	if (navigator.userAgent.indexOf('Mozilla/3') != -1)
	{
		return 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';	
	}

	if (Navigation.style == 'text')
	{
		return renderTextHTML(Navigation, '/tp.gif');
	}
	else
	{
		return renderGraphicalHTML(Navigation, '/tp.gif');
	}
}


function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;	
	}
}

function isCurrentPage(Link)  
{
	if(Link.type!='existing')
	{
		return false;
	}		
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);	
} 

function getOnClick(strLinkValue, strLinkTarget)  
{ 
	var strOnClick;
	if(strLinkTarget == '_blank')
	{
		strOnClick = 'onClick="window.open(\'' + strLinkValue + '\');"';
	}
	else
	{  
		strOnClick = 'onClick="document.location = \'' + strLinkValue + '\';"';
	}
	return strOnClick;
}  

function netscapeDivCheck()  
{  
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
	if ( (strAppName == 'Netscape') &&
		(appVer >= 4.0 && appVer < 5) ) {  document.write('</DIV>');
	}
}

function textMouseOn(textObj, newColor, mouseoverBold, mouseoverUnderline, mouseoverItalic)
{ 
	if(newColor)
	{
		textObj.style.color=newColor; 
	}
	if(mouseoverBold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(mouseoverUnderline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(mouseoverItalic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}  

function textMouseOff(textObj, newColor, bold, underline, italic)
{ 
	textObj.style.color=newColor; 
	if(bold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(underline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(italic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}


		
		document.write(renderHTML(nav_crosspromo));

