function showAjax(url,returnPage,querystring){
if(document.getElementById(returnPage)){
document.getElementById(returnPage).classList.remove("dnone");
document.getElementById(returnPage).classList.add("dblock");
var xmlhttp;
if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200){document.getElementById(returnPage).innerHTML=xmlhttp.responseText;}
}
if (querystring==''){xmlhttp.open("GET",url,true);
}else{xmlhttp.open("GET",url + document.getElementById(querystring).value + '&Obj=' + querystring,true);}
xmlhttp.send();
}} 
function shift_grids(){
if(document.getElementById('gridwrapper2')){
player_position=document.getElementById("player_position").value;
if (player_position=="P"){
var content = document.getElementById('gridwrapper2');var parent = content.parentNode;parent.insertBefore(content, parent.firstChild);
}
}}