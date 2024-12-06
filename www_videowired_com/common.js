var agt = navigator.userAgent.toLowerCase();
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);
var is_ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie6 = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.") != -1));

function captureEvent() { var elem = document.getElementById("vwHeader_sBox"); if (event.keyCode == 13) { if (elem.focused) { document.getElementById('vwHeader_sbtn').click(); return false; } else { return false; } } }
function FSearch() { var s = document.getElementById("vwHeader_sBox").value; if (s != "") { return true; } else { return false; } }
function doBookmark() {var u = document.location;var t = document.title;window.open("http://www.videowired.com/tools/bookmark/?u="+escape(u)+"&t="+escape(t), "Bookmark", "scrollbars=0,location=0,menubar=0,toolbar=0,width=280,height=220,status=0");return false;}
function doHomepage() {if (window.sidebar){alert("To Set Home Page Goto:\nMenu > Tools > Options > Main\nType \"http://www.videowired.com\" in the Home Page Field.");return false;}else{return false;}}

function nover(id) {document.getElementById(id).style.display='block'};
function nout(id) {document.getElementById(id).style.display='none'};
function goto(url) { window.location.href = url;}
function flagvideo(id) { goto('/company/flagged/?vid=' + id); }

addLoadEvent(function() {
   var elem = document.getElementById("vwHeader_sBox")
   elem.focused = false;
   elem.hasFocus = function() {
      return this.focused;
   };
   elem.onfocus=function() {
      this.focused=true;
   };
   elem.onblur=function() {
      this.focused=false;
   }
});