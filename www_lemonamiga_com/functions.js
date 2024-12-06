function setCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/; secure; samesite=lax;";}
function getCookie(c_name){if(document.cookie.length>0){c_start=document.cookie.indexOf(c_name+"=")
if(c_start!=-1){c_start=c_start+c_name.length+1
c_end=document.cookie.indexOf(";",c_start)
if(c_end==-1){c_end=document.cookie.length;}
return unescape(document.cookie.substring(c_start,c_end));}}
return "";}
if(getCookie('landscape')==''){setCookie('landscape','forest',365);}
function landscape(theme){setCookie('landscape',theme,365);$(".top-navigation").load(location.href+" .top-navigation");$(".landscape-selector").load(location.href+" .landscape-selector > *");$("#landscape-css").remove();$("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='/images/navigation/landscapes/"+theme+"/style.css' type='text/css' id='landscape-css'>");}
function toggleBubbles(theme){if(getCookie('bubbles')==0){setCookie('bubbles',theme,365);location.reload();}else{setCookie('bubbles',theme,365);location.reload();}}
function toggleStickyNavigation(toggle){setCookie('sticky_navigation',toggle,365);$(".top-navigation").toggleClass("sticky-top");$(".landscape-selector").load(location.href+" .landscape-selector > *");}
function login(){$('#loginModal').modal();}
function gamesDisplay(toggle){setCookie('games_display',toggle,365);document.location.href=this.document.location;}
function votesNeeded(){setCookie('votes_needed',document.votes_needed.votes_needed_select.value,365);document.votes_needed.submit();}
function votesNeededWorst(){setCookie('votes_needed_worst',document.votes_needed.votes_needed_select.value,365);document.votes_needed.submit();}
function votesModel(){setCookie('votes_model',document.votes_model.votes_model_select.value,365);document.votes_model.submit();}
function toggleScanlines(toggle){if(getCookie('scanlines')==1){setCookie('scanlines',0,365);}else{setCookie('scanlines',1,365);}
$(".screenshot-gallery").toggleClass("scanlines");}
$(document).ready(function(){$('.quick-search input[type="text"]').on("keyup input",function(){$(".live-search-result").show();var inputVal=$(this).val();var resultDropdown=$(this).siblings(".live-search-result");if(inputVal.length>2){$.get("/inc/live_search_backend.php",{term:inputVal}).done(function(data){resultDropdown.html(data);});}else{resultDropdown.empty();}});$(document).on("click",".live-search-result p",function(){$(this).parents(".quick-search").find('input[type="text"]').val($(this).text());$(this).parent(".live-search-result").empty();});$(document).on('click',function(e){if($(e.target).closest(".quick-search").length===0){$(".live-search-result").hide();}});});(function(){"use strict";var cookieAlert=document.querySelector(".cookiealert");var acceptCookies=document.querySelector(".acceptcookies");if(!cookieAlert){return;}
cookieAlert.offsetHeight;if(!getCookie("acceptCookies")){cookieAlert.classList.add("show");}
acceptCookies.addEventListener("click",function(){setCookie("acceptCookies",true,365);cookieAlert.classList.remove("show");window.dispatchEvent(new Event("cookieAlertAccept"))});})();