var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//DD Tab Menu- Script rewritten April 27th, 07: http://www.dynamicdrive.com
//**Updated Feb 23rd, 08): Adds ability for menu to revert back to default selected tab when mouse moves out of menu

//Only 2 configuration variables below:

var ftabmenu={
	disabletablinks: false, //Disable hyperlinks in 1st level tabs with sub contents (true or false)?
	snap2original: [true, 300], //Should tab revert back to default selected when mouse moves out of menu? ([true/false, delay_millisec]

	currentpageurl: window.location.href.replace("http://"+window.location.hostname, "").replace(/^\//, ""), //get current page url (minus hostname, ie: http://www.dynamicdrive.com/)

definemenu:function(tabid, dselected){
	this[tabid+"-menuitems"]=null
	this[tabid+"-dselected"]=-1
	this.addEvent(window, function(){ftabmenu.init(tabid, dselected)}, "load")
},

showsubmenu:function(tabid, targetitem){
	var menuitems=this[tabid+"-menuitems"]
	this.clearrevert2default(tabid)
 for (i=0; i<menuitems.length; i++){
		menuitems[i].className=""
		if (typeof menuitems[i].hasSubContent!="undefined")
			document.getElementById(menuitems[i].getAttribute("rel")).style.display="none"
	}
	targetitem.className="current"
	if (typeof targetitem.hasSubContent!="undefined")
		document.getElementById(targetitem.getAttribute("rel")).style.display="block"
},

isSelected:function(menuurl){
	var menuurl=menuurl.replace("http://"+menuurl.hostname, "").replace(/^\//, "")
	return (ftabmenu.currentpageurl==menuurl)
},

isContained:function(m, e){
	var e=window.event || e
	var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
	while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
	if (c==m)
		return true
	else
		return false
},

revert2default:function(outobj, tabid, e){
	if (!ftabmenu.isContained(outobj, tabid, e)){
		window["hidetimer_"+tabid]=setTimeout(function(){
			ftabmenu.showsubmenu(tabid, ftabmenu[tabid+"-dselected"])
		}, ftabmenu.snap2original[1])
	}
},

clearrevert2default:function(tabid){
 if (typeof window["hidetimer_"+tabid]!="undefined")
		clearTimeout(window["hidetimer_"+tabid])
},

addEvent:function(target, functionref, tasktype){ //assign a function to execute to an event handler (ie: onunload)
	var tasktype=(window.addEventListener)? tasktype : "on"+tasktype
	if (target.addEventListener)
		target.addEventListener(tasktype, functionref, false)
	else if (target.attachEvent)
		target.attachEvent(tasktype, functionref)
},

init:function(tabid, dselected){
	var menuitems=document.getElementById(tabid).getElementsByTagName("a")
	this[tabid+"-menuitems"]=menuitems
	for (var x=0; x<menuitems.length; x++){
		if (menuitems[x].getAttribute("rel")){
			this[tabid+"-menuitems"][x].hasSubContent=true
			if (ftabmenu.disabletablinks)
				menuitems[x].onclick=function(){return false}
			if (ftabmenu.snap2original[0]==true){
				var submenu=document.getElementById(menuitems[x].getAttribute("rel"))
				menuitems[x].onmouseout=function(e){ftabmenu.revert2default(submenu, tabid, e)}
				submenu.onmouseover=function(){ftabmenu.clearrevert2default(tabid)}
				submenu.onmouseout=function(e){ftabmenu.revert2default(this, tabid, e)}
			}
		}
		else //for items without a submenu, add onMouseout effect
			menuitems[x].onmouseout=function(e){this.className=""; if (ftabmenu.snap2original[0]==true) ftabmenu.revert2default(this, tabid, e)}
		menuitems[x].onmouseover=function(){ftabmenu.showsubmenu(tabid, this)}
		if (dselected=="auto" && typeof setalready=="undefined" && this.isSelected(menuitems[x].href)){
			ftabmenu.showsubmenu(tabid, menuitems[x])
			this[tabid+"-dselected"]=menuitems[x]
			var setalready=true
		}
		else if (parseInt(dselected)==x){
			ftabmenu.showsubmenu(tabid, menuitems[x])
			this[tabid+"-dselected"]=menuitems[x]
		}
	}
}
}

}
/*
     FILE ARCHIVED ON 15:56:12 Jan 25, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:06:07 Mar 10, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 401.789
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.094
  RedisCDXSource: 2.064
  esindex: 0.01
  LoadShardBlock: 367.672 (3)
  PetaboxLoader3.datanode: 345.111 (4)
  CDXLines.iter: 24.758 (3)
  load_resource: 181.658
  PetaboxLoader3.resolve: 165.084
*/