// JavaScript Document
var img_ch = new Image();
img_ch.src = "/images/icon-check.gif";
var img_unch = new Image();
img_unch.src = "/images/icon-x.gif";
var img_dote = new Image();
img_dote.src = "/images/dote.gif";

function setImageValidator(img_id, validatResult, type){
	if(img_id != "") $("#"+img_id).attr("src", (validatResult)? ((type)?img_ch.src:img_dote.src):img_unch.src);
}

function onBlureValidateTextWithLen(el, required, img_id, lenmin, lenmax){
	var validatResult = validateText(el.value);
	if(jQuery.trim(el.value) != "") required = true;
	if(required && jQuery.trim(el.value) == "" ) validatResult = false;
	if(validatResult){
	 	validatResult = (el.value.length >= lenmin && el.value.length <= lenmax)? true:false;
	}
	setImageValidator(img_id, validatResult, required);
	return validatResult;
}

function onBlureValidateText(el, required, img_id){
	var validatResult = validateText(el.value);
	if(jQuery.trim(el.value) != "") required = true;
	if(required && jQuery.trim(el.value) == "" ) validatResult = false;
	setImageValidator(img_id, validatResult, required);
	return validatResult;
}

function onBlureValidatePhone(el, required, img_id){
	var validatResult = true;
	var r = false;
	if(!required && jQuery.trim(el.value) == "" ) 
		validatResult = true;
	else {
		validatResult = validatePhone(el)
		var r = true;
	}
	setImageValidator(img_id, validatResult, r);
	return validatResult;
}

function onBlureValidateUrlWithPrefix(el, required, img_id, request_prefix){
	var validatResult = true;
	var r = required;
	if(!required && jQuery.trim(el.value) == "" ) 
		validatResult = true;
	else {
		validatResult = validateURL(el.value)
		if(jQuery.trim(el.value).substring(0, 7) != "http://" && 
				jQuery.trim(el.value).substring(0, 8) != "https://" && request_prefix
			)
			validatResult = false;		
		r = true;
	}
	setImageValidator(img_id, validatResult, r);
	return validatResult;
	
}
function onBlureValidateUrl(el, required, img_id){
	return  onBlureValidateUrlWithPrefix(el, required, img_id, true)
}

function onBlureValidateEmail(el, required, img_id){
	var validatResult = true;
	var r = false;
	if(!required && jQuery.trim(el.value) == "" ) 
		validatResult = true;
	else {
		validatResult = validateEmail(el.value)
		r = true;
	}
	
	setImageValidator(img_id, validatResult, r);
	return validatResult;
}
function onBlureValidatePoatalZip(el, required, img_id, country){
	var validatResult = true;
	var r = false;
	if(!required && jQuery.trim(el.value) == "" ) 
		validatResult = true;
	else {
		validatResult = validatePostalZip(el.value, country)
		r = true;
	}
	
	setImageValidator(img_id, validatResult, r);
	return validatResult;
}
function validateText(str){
	if( str.indexOf('</') != -1 || str.indexOf('/>') != -1)
		return false;
	else
		return true;
}

function validatePhone(el){
	//var phonePattern = /^(\d{1})?[- .:]?\(?(\d{3})\)?[- .:]?(\d{3})[- .:]?(\d{4})$/; 
	var filter = /^\(?(\d{3})\)?[- .:]?(\d{3})[- .:]?(\d{4})$/; 
	var result = testExpression(filter, el.value)
	if(result){
		var newVal = filter.exec(el.value);
		var long = (typeof(newVal[1]) != "undefined") ? newVal[1] +"-": "";
		el.value	= long + newVal[2] + "-" + newVal[3]; // + "-" + newVal[4];
	}
	return result;
}
function testExpression(filter, value){
	if(filter.test(value))
		return(true);
	else
		return(false);
}
function validateEmail(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
	return  testExpression(filter, value);
 }

function validateURL(value) {
//	var filter = new RegExp("^(http:\/\/www.|https:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
	var filter = /^(https?:\/\/)?[a-zA-Z0-9\-\.]+\.(([a-zA-Z]{2,3})|(aero|asia|coop|info|jobs|mobi|museum|name|travel))([\/\W]([a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~])*)*$/i
	return  testExpression(filter, value);
}

function validatePostalZip(value, type){
	var filter = {canada : /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i , 
				  usa : /^\d{5}(-\d{4})?$/ }
	return  testExpression((type == "USA")?filter.usa:filter.canada, value);
}

function validateSelect(id, img_id){
	var result = true;
	if($('#'+id).val() == "0" ||$('#'+id).val() == "") result = false;
	if(img_id != "") setImageValidator(img_id, result, true);
	return result;
}

function calculateSymbolsByLen(el, sp, lenTotal){
var color = $("#"+sp).css('color');	
var len = lenTotal - el.value.length;
$("#"+sp).css('color', (len> 0 )?color:"#ff0000");
$("#"+sp).get()[0].innerHTML = (len> 0 )?("Characters: / "+ len):"ATTENTION: You have entered over "+lenTotal+" characters.";
}

function validateLen(str,required, lenTotal){
	var len = lenTotal - str.length;
	var result = (len> 0)? ((required && len == lenTotal )?false:true):false;
	return result;
}