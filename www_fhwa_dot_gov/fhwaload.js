<!-- Google Analytics Load -->
var gascript = document.createElement('script');
gascript.setAttribute('type','text/javascript');
gascript.setAttribute('src','https://www.fhwa.dot.gov/js/dot_analytics_2.js');
document.getElementsByTagName('head')[0].appendChild(gascript);

<!-- GSA Analytics Load -->
<!-- We participate in the US government's analytics program. See the data at analytics.usa.gov. -->
var gsascript = document.createElement('script');
gsascript.setAttribute('async', 'true'); 
gsascript.setAttribute('type','text/javascript');
gsascript.setAttribute('src','https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=DOT');
gsascript.setAttribute('id','_fed_an_ua_tag');
document.getElementsByTagName('head')[0].appendChild(gsascript);


<!--BEGIN QUALTRICS WEBSITE FEEDBACK SNIPPET-->
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {	  
	var div = document.createElement('div');
	div.id = 'ZN_8oVpF6JHd62rZrL';
	document.getElementsByTagName('body')[0].appendChild(div);<!--DO NOT REMOVE-CONTENTS PLACED HERE-->
	(function(){var g=function(e,h,f,g){
	this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
	this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
	this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
	this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)}};
	this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
	try{(new g(100,"r","QSI_S_ZN_8oVpF6JHd62rZrL","https://zn8ovpf6jhd62rzrl-dotocio.gov1.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_8oVpF6JHd62rZrL")).start()}catch(i){}})();
    clearInterval(stateCheck);
    // document ready
  }
}, 2000);
/*<div id='ZN_8oVpF6JHd62rZrL'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>*/
<!--END WEBSITE FEEDBACK SNIPPET-->


<!-- ForeSee Survey Load -->
/*var thescript = document.createElement('script');
thescript.setAttribute('type','text/javascript');
thescript.setAttribute('src','/foresee/foresee-trigger.js');
document.getElementsByTagName('head')[0].appendChild(thescript);*/