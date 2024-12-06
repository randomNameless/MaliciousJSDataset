( function($) {
	$(document).ready(function()
	{
		$(document).bind('cbox_closed', function(){
			$.ajax({url: '../../com/user.cfc?method=reviewCancel', type: "POST", dataType: "json"});
		});
		$(document).bind('cbox_complete', function(){
			if($("#login_city").length ){
				$("#login_city").AutocompleteV1({
					serviceUrl:'../../com/location.cfc?method=autocompliteCity', 
					minChars:2, 	
					maxHeight:300, 
					width:302, 
					deferRequestBy: 0, //miliseconds 
					onSelect: function(value, data){ 
					}
				});
			}
		});		
		if($("#login_city").length ){
				$("#login_city").AutocompleteV1({
					serviceUrl:'../../com/location.cfc?method=autocompliteCity', 
					minChars:2, 	
					maxHeight:300, 
					width:302, 
					deferRequestBy: 0, //miliseconds 
					onSelect: function(value, data){ 
					}
				});			
		}
		$("#login").colorbox();
		//$.colorbox({href:"loginform.cfm"});
	});
} ) ( jQuery );

var faceReturn = true;
function openPopup(url, type) {
	if(type == 1) faceReturn = false;	
	window.open(url, "popup_id", "scrollbars,resizable,width=600,height=400");
}

function submitLogin1(id){
	var url = "../../Login/openidauth.cfm?cmd=auth&openid_identity="+id + "&fun=submitedLogin";
	openPopup(url);
}

function submitLoginAfter(id){
	var url = "../../Login/openidauth.cfm?cmd=auth&openid_identity="+id + "&fun=submitedLoginPost";
	openPopup(url);
}

function submitedLoginPost(){
	faceReturn = true;
	$.ajax({
		url: '../../com/user.cfc?method=getCurentUser', type: "POST", dataType: "json",
		success: function (responce) {
				if(responce.RESULT == "success"){
					if(responce.city == "") {
						$.ajax({
							url: '../../login/updateAccountForm.cfm', type: "GET", dataType: "html",
							success: function (responce) {
									$("#sp_profile").html(responce);
									if($("#locationCity").length ){
										$("#locationCity").AutocompleteV1({
											serviceUrl:'../../com/location.cfc?method=autocompliteCity', 
											minChars:2, 	
											maxHeight:300, 
											width:302, 
											deferRequestBy: 0, //miliseconds 
											onSelect: function(value, data){ 
											}
										});			
									}
								},
							error: function(responce){
								var rr = responce;
							}
							});	
					}
					else{$("#frm_st3").submit();}
				} 
			},
		error: function(responce){
			var rr = responce;
		}
		});	
}


function submitedLogin(){
	if($("#frm_reload").length == 0){ window.location.reload(); return;}
	faceReturn = true;
	$.ajax({
		url: '../../com/user.cfc?method=getCurentUser', type: "POST", dataType: "json",
		success: function (responce) {
				if(responce.RESULT == "success" && $("#frm_reload").length > 0){
					$("#frm_reload").submit();
				} 
			},
		error: function(responce){
			var rr = responce;
		}
		});	
}

function submitLogin(id){
	$("#openid_identity").attr("value", id );
	
	$("#frm_login").submit();
}
function authUser(){
	if( !onBlureValidateText($("#login_username").get(0), true, 'img_login_username') ||
		!onBlureValidateText($("#login_pwd").get(0), true, 'img_login_pwd')) {
		$("#sp_login_error").get()[0].innerHTML =  "Email and password should not be empty";
		return;}
	if( !onBlureValidateEmail($("#login_username").get(0), true, 'img_login_username')) {
		$("#sp_login_error").get()[0].innerHTML =  "Email is incorrect";
		return;}
		
	$("#sp_login_error").get()[0].innerHTML = "";	
	$.ajax({
		url: '../../com/user.cfc?method=checkUser', type: "POST", dataType: "json",
		data: { userName: $("#login_username").val(),
				userPwd:  $("#login_pwd").val()},
		success: function (responce) {
				var r = responce;
				if(responce.result){
					$("#sp_login_error").get()[0].innerHTML = responce.error;
					if($("#frm_st1").length > 0 || $("#frm_st2").length > 0){  window.location=document.URL; return;}
					if($("#frm_st3").length > 0)
					{
						$.colorbox.close();
						$("#frm_st3").submit();
						return;
						}
					 if($("#frm_reload").length == 0){ window.location.reload();}
					 //else {$("#frm_reload").submit();}
					 if($("#frm_reload").length > 0){ $("#frm_reload").submit(); return;}
					//return;
				} else 
					$("#sp_login_error").get()[0].innerHTML =  responce.error;
			},
		error: function(responce){
			var rr = responce;
			alert(responce)
		}
		});
}
function loadForm(formlink){
	$.colorbox({href:formlink});
	/*
	$(document).bind('cbox_complete', function(){
		if($("#login_city").length ){
				$("#login_city").autocomplete({
					serviceUrl:'../../com/location.cfc?method=autocompliteCity', 
					minChars:2, 	
					maxHeight:300, 
					width:302, 
					deferRequestBy: 0, //miliseconds 
					onSelect: function(value, data){ 
					}
				});			
		}				
	});	 */
}

function validateConfirm(el, msg){
	var validatResult = onBlureValidateText(el, true, 'img_userconfirmpwd')
	if(validatResult && $("#userconfirmpwd").val() != $("#userpwd").val() ) validatResult = false;
	setImageValidator("img_userconfirmpwd", validatResult, true);
	if(msg) $("#sp_login_error").get()[0].innerHTML = (validatResult)?"":"Password not equal Confirm password";
	return validatResult;
}

function createAccount(){
	var result = true;
	if(!onBlureValidateText($("#fname").get()[0], true, 'img_fname')) result = false;
	if(!onBlureValidateText($("#lname").get()[0], true, 'img_lname')) result = false;
	if(!onBlureValidateText($("#login_city").get()[0], true, 'img_login_city')) result = false;
	if(!onBlureValidateEmail($("#email").get()[0], true, 'img_email')) result = false;
	if(!onBlureValidateTextWithLen($("#userpwd").get()[0], true, 'img_userpwd', 6, 14)) result = false;
	if(!validateConfirm($("#userconfirmpwd").get()[0], false)) result = false;
	if(!result){ $("#sp_login_error").get()[0].innerHTML = "Please correct fields."; return;}
	$("#sp_login_error").get()[0].innerHTML = "";
	$("#acc_loader_frane").css("visibility", "visible");
	$("#acc_loader_body").css("visibility", "visible");
	$.ajax({
		url: '../../com/user.cfc?method=createAccount', type: "POST", dataType: "json",
		data: $('#frm_acc').serialize(), 
		success: function (responce) {
				$("#acc_loader_frane").css("visibility", "hidden");
				$("#acc_loader_body").css("visibility", "hidden");			
				if(responce.result){
					$("#sp_login_error").get()[0].innerHTML = responce.error;
					 setTimeout( "loadForm('../../Login/newAccountThanks.cfm?email="+$("#email").val()+"')",30);
					return;
				} else 
					$("#sp_login_error").get()[0].innerHTML =  responce.error;
					if(responce.type == 'account'){setImageValidator("img_email", false, true);}
					if(responce.type == 'city'){setImageValidator("img_login_city", false, true);}
			},
		error: function(responce){
				$("#acc_loader_frane").css("visibility", "hidden");
				$("#acc_loader_body").css("visibility", "hidden");			
			var rr = responce;
		}
		});
}

function repeatConfirnation(addr){
	if(addr != null && addr != ""){
		$.ajax({
			url: '../../com/user.cfc?method=sendConfirmationEmail', type: "POST", dataType: "json",
			data: { email: addr},
			success: function (responce) {
					var r = responce;
					if(responce.result){
						$("#sp_login_error").get()[0].innerHTML = "Email was sent successfully";
					} 
				},
			error: function(responce){
				var rr = responce;
			}
		});		
	}
}
function reSendCredential(){
	if(onBlureValidateEmail( $("#email_forgot").get()[0], true, 'img_email_forgot')){
	$.ajax({
		url: '../../com/user.cfc?method=sendCredentialEmail', type: "POST", dataType: "json",
		data: { email: $("#email_forgot").val()},
		success: function (responce) {
				var r = responce;
				if(responce.result){
					setTimeout( "loadForm('../../Login/resendCredential.cfm?email="+$("#email_forgot").val()+"')",300);
					return;
				} else {
					$("#sp_login_error").get()[0].innerHTML = responce.error;	
				}
			},
		error: function(responce){
			var rr = responce;
			alert(responce);
		}
	});	
	} else {
		$("#sp_login_error").get()[0].innerHTML = "Please input a valid email.";	
	}
}

function updateAccount(){
	var result = true;
	if($("#locationCity").length && !onBlureValidateText($("#locationCity").get()[0], true, 'img_locationCity')) result = false;
	
	
	if(!onBlureValidateText($("#fname").get()[0], true, 'img_fname') ||
		!onBlureValidateText($("#lname").get()[0], true, 'img_lname') ||			
		!onBlureValidateText($("#phone").get()[0], false, 'img_phome') ||
		!result){
		$("#sp_login_error").get()[0].innerHTML = "Please corect fields";
		return;
	}
	$.colorbox({  href:"../loader.cfm", top:300,  returnFocus: true, onLoad: function(){$('#cboxClose').css("display", "none");}}); 
	$.ajax({
		url: '../../com/user.cfc?method=updateAccount', type: "POST", dataType: "json",
		data: $('#frm_accupdate').serialize(), 
		success: function (responce) {
				$.fn.colorbox.close();
				if(responce.result){
					$("#frm_st3").submit();
				} else {
					$("#sp_login_error").get()[0].innerHTML = responce.error;
				}
			},
		error: function(responce){
			$.fn.colorbox.close();
			}
	});
}

function loadLoginWithRedirection(path, todo){
	$.colorbox({href:'../../Login/loginForm.cfm', data:{redirection:path, todo:todo}});
}
function loadRequiredPage(path, todo){
	$.ajax({
		url: '../../com/user.cfc?method=isUserLogin', type: "POST", dataType: "json",
		success: function (responce) {
			if(responce.result){
				window.location = path;
			} else {
				$.colorbox({href:'../../Login/loginRequest.cfm', data:{redirection:path, todo:todo}});
				  //setTimeout("loadForm('../../Login/loginRequest.cfm?redirection="+path+"&todo="+todo + "')", 300);
			}
		},
		error: function(responce){
			var rr = responce;
		}
	}); 
}
var showSkiny = false;
/***  Tool tip  ***/
function showSkinyTip(el, url, width){
	el.style.cursor = 'pointer'; 
	el.style.cursor = 'hand';
	showSkiny = true;
	$.ajax({
			url: url, type: "POST", dataType: "html",
			success: function (responce) {
				var text1 = responce;
				//return tooltip(text1, '', 'width:'+width+',border:1,fontsize:12,titlefontsize:12,bordercolor:#3d6ca4,textcolor:#ffffff, content_padding:5px');
				if(showSkiny)
					return tooltip(text1, '', 'width:'+width+',border:0,bordercolor:#676767,backcolor:#FFFFFF');
			},
			error: function(responce){
				var rr = responce;
			}
		}); 	
}
function enterUBC(id){
	if($("#"+id+"_txt").val().length > 0)
		$("#"+id).submit();
	else
		alert("Please enter Your Update Business Code");		
}
