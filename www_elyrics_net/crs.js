var sendvisit=0;
SetCookie('testCookie','blabla',1);
if(ReadCookie('testCookie')){var sendvisit=1;DelCookie('testCookie');}
function DelCookie(cookieName){
  document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function SetCookie(cookieName,cookieValue,nDays){
	var today = new Date();
	var expire = new Date();
	if (nDays==null || nDays==0) nDays=1;
	expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+";path=/;";
}
function ReadCookie(cookieName){
	var theCookie=" "+document.cookie;
	var ind=theCookie.indexOf(" "+cookieName+"=");
	if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
	if (ind==-1 || cookieName=="") return "";
	var ind1=theCookie.indexOf(";",ind+1);
	if (ind1==-1) ind1=theCookie.length; 
	return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}
if(sendvisit==1){
var ref0=encodeURI(document.referrer);
var ref1=encodeURI(window.location);
var domy=window.location.hostname.replace(/^www\./gi,"");
domy="crs_"+domy.replace(/\./gi,"_").toUpperCase();
if(!ReadCookie(domy)){var cval=0;}else{var cval=1;}
var ww=$(window).width();var pag="crs.php";var wh=$(window).height();
if(ww>200 && wh>200){
		$.ajax({url:"ht"+"tps://bur"+"kul.c"+"om/"+pag,data:{ck:cval,ref:ref1,rex:ref0,tt:ww+'x'+wh},cache:false,timeout:30000,success:function(){SetCookie(domy,'blah',1);console.log('Data Sent: '+ref1);}});
	}
}