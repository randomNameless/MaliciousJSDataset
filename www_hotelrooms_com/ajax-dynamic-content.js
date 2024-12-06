/************************************************************************************************************
(C) www.dhtmlgoodies.com, March 2006

This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

Terms of use:
You are free to use this script as long as the copyright message is kept intact. However, you may not
redistribute, sell or repost it without our permission.

Thank you!

www.dhtmlgoodies.com
Alf Magne Kalleland

************************************************************************************************************/

var dynamicContent_ajaxObjects = new Array();

function ajax_showContent(divId,ajaxIndex)
{
	document.getElementById(divId).innerHTML = dynamicContent_ajaxObjects[ajaxIndex].response;
	dynamicContent_ajaxObjects[ajaxIndex] = false;
	
}

function ajax_loadContent(divId,url)
{
	
	var ajaxIndex = dynamicContent_ajaxObjects.length;
	dynamicContent_ajaxObjects[ajaxIndex] = new sack();
	dynamicContent_ajaxObjects[ajaxIndex].requestFile = url;	// Specifying which file to get
	dynamicContent_ajaxObjects[ajaxIndex].onCompletion = function(){ ajax_showContent(divId,ajaxIndex); };	// Specify function that will be executed after file has been found
	dynamicContent_ajaxObjects[ajaxIndex].runAJAX();		// Execute AJAX function	
	
	
}