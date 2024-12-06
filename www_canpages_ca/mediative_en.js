
function addJavascript(jsname,pos){var th=document.getElementsByTagName(pos)[0];var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src',jsname);s.async=true;th.appendChild(s);}
var M_TILE=M_TILE||0;var googletag=googletag||{};googletag.cmd=googletag.cmd||[];function MUTAG(){this.mseg=[];this.network_id="3772206";this.pagename="";this.sitename="canpages";this.language="en";this.randoms=Math.round(Math.random()*100000000);this.keywords=[];this.channel="";this.keyvalues={};this.thirds=false;this.level={l1:"",l2:"",l3:"",l4:"",l5:""};this.desktop=function(){return this;};this.adtechname="canpages";this.backup_id={"300x250_atf":"2791308","3x1_btf":"2381724","728x90_atf":"2360968"};this.dmp=true;this.initDFPP=function(){var gads=document.createElement("script");gads.async=true;gads.type="text/javascript";var useSSL="https:"==document.location.protocol;gads.src=(useSSL?"https:":"http:")+"//securepubads.g.doubleclick.net/tag/js/gpt.js";var node=document.getElementsByTagName("script")[0];node.parentNode.insertBefore(gads,node);}
this.initDMP=function(){var mlot=document.createElement("script");mlot.async=true;mlot.type="text/javascript";var useSSL="https:"==document.location.protocol;mlot.src=(useSSL?"https:":"http:")+"//tags.crwdcntrl.net/c/2740/cc.js?ns=_cc2740";mlot.id="LOTCC_2740";var node=document.getElementsByTagName("script")[0];node.parentNode.insertBefore(mlot,node);}
this.internalKW=function(a){for(var i=0;i<a.length;i++){this.keywords.push(a[i]);}}
this.setLang=function(a){this.language=a;return this;}
this.setSection=function(a){this.setPage(a);return this;}
this.internalKV=function(a){for(var i in a){this.keyvalues[i]=a[i];}}
this.setPage=function(a,b,c){if(a){if(typeof(a)=="string"){this.pagename=a;this.level.l3=a;}else{for(var i=0;i<a.length;i++){this.level["l"+String(3+i)]=a[i];}}
if(b){this.level.l4=b;if(c){this.level.l5=c;}}}
return this;}
this.structure=(function(id){var _struct="";_struct+=""+this.network_id+"/";_struct+=(this.level.l1!="")?this.level.l1:"";_struct+=(this.level.l2!="")?"/"+this.level.l2:"";_struct+=(this.level.l3!="")?"/"+this.level.l3:"";_struct+=(this.level.l4!="")?"/"+this.level.l4:"";_struct+=(this.level.l5!="")?"/"+this.level.l5:"";return _struct;});this.setSite=function(a){this.sitename=a;return this;}
this.setLng=function(a){this.language=a;return this;}
this.getKeywords=function(a){if(a!=undefined){try{for(var i=0;i<a.length;i++){this.keywords.push(a[i]);}}catch(e){}}
return this;}
this.getKeyValues=function(a){if(a!=undefined){try{for(var i in a){this.keyvalues[i]=a[i];}}catch(e){}}
return this;}
this.bob={click_wallpaper:function(o){var mediative_one=document;mediative_one.onclick=MEDIATIVE_;mediative_one.onmouseover=_MEDIATIVE_;function MEDIATIVE_(e){var b=e?e:event;if(!b)return;var fb=b.target?b.target:b.srcElement;if(fb.tagName=="BODY"){window.open(o['click']);}}
function _MEDIATIVE_(e){var b=e?e:event;if(!b)return;var fb=b.target?b.target:b.srcElement;if(fb.tagName=="BODY"){document.body.style.cursor="pointer";}else{document.body.style.cursor="auto";}}},collapse:function(o){document.getElementById(o).style.display="none";},collapseByClass:function(o){var m=document.getElementsByClassName(o)[0];m.style.display="none";},seeByClass:function(o){var m=document.getElementsByClassName(o)[0];m.style.display="block";},wallpaper:function(f){document.body.style.backgroundImage="url("+f['src']+")";document.body.style.backgroundRepeat="no-repeat";document.body.style.backgroundColor=f['bgc'];document.body.style.backgroundPosition="top center";this.click_wallpaper({click:f['clk']});return this;},bannerRezise:function(o){if(o['height']!=undefined){document.getElementById(o['div']).style.height="auto";var heights=document.getElementById(o['div']);heights.getElementsByTagName('iframe')[0].style.height=String(o['height'])+"px";}
if(o['width']!=undefined){document.getElementById(o['div']).style.width="auto";var widths=document.getElementById(o['div']);widths.getElementsByTagName('iframe')[0].style.width=String(o['width'])+"px";}
return this;},bannerResize:function(o){if(o['height']!=undefined){document.getElementById(o['div']).style.height="auto";var heights=document.getElementById(o['div']);heights.getElementsByTagName('iframe')[0].style.height=String(o['height'])+"px";}
if(o['width']!=undefined){document.getElementById(o['div']).style.width="auto";var widths=document.getElementById(o['div']);widths.getElementsByTagName('iframe')[0].style.width=String(o['width'])+"px";}
return this;}};this.kws_cleaner=function(w){var MKEY={"è":"e","à":"a","é":"e","É":"E","È":"E","À":"A","Ç":"C","ç":"c"};for(var i in MKEY){do{w=w.replace(i,MKEY[i]);}while(w.indexOf(i)!=-1);}
return w;}
this.addseg=function(k,v){if(window.MUTAG_RANDOM==undefined){window.MUTAG_RANDOM=Math.round(Math.random()*100000000);}
var mseg={};mseg[k]=v;MUNIVERSAL.mseg.push(mseg);return this;}
this.MLoadEvent=function(){try{MUNIVERSAL.addseg("seg","language="+this.language);}catch(e){}
try{window.addEventListener('load',MUNIVERSAL.MLoadEvent,false);}catch(e){window.attachEvent('onload',MUNIVERSAL.MLoadEvent);}};this.populate=function(){for(i=0;i<MUNIVERSAL.mseg.length;i++){for(k in MUNIVERSAL.mseg[i]){if(String(k)!="genp"){_cc2740.add("seg",String(k)+"="+String(MUNIVERSAL.mseg[i][k]));}else{_cc2740.add(String(k),String(MUNIVERSAL.mseg[i][k]));}}}
_cc2740.bcp();return this;}
this.spot=function(a){if(a['target']==undefined){a['target']=this.sitename+"_"+String(a['width'])+"x"+String(a['height'])+"_"+String(M_TILE);document.write("<div id=\""+this.sitename+"_"+String(a['width'])+"x"+String(a['height'])+"_"+String(M_TILE)+"\"><\/div>")}
if(M_TILE==0){if(MUNIVERSAL==MUNIVERSAL.getKeywords()){}else{if(this.getKeywords()!=undefined){for(var i=0;i<this.getKeywords().length;i++){this.keywords.push(this.getKeywords()[i]);}}}
if(MUNIVERSAL==MUNIVERSAL.getKeyValues()){}else{if(this.getKeyValues()!=undefined){for(var i in this.getKeyValues()){this.keyvalues[i]=this.getKeyValues()[i];}}}}
this.level.l1=this.language;this.level.l2=this.sitename;this.level.l3=this.pagename;var s=this.structure();googletag.cmd.push(function(){googletag.defineSlot(s,[a['width'],a['height']],a['target']).addService(googletag.pubads()).setTargeting('save',[a['target']]).setTargeting('site',[MUNIVERSAL.adtechname]).setTargeting('pos',[(a['position'].match(/atf/))?"above":"below"]);for(var b in MUNIVERSAL.keyvalues){googletag.pubads().setTargeting(b,[MUNIVERSAL.keyvalues[b]]);}
googletag.pubads().setTargeting("kw",[MUNIVERSAL.keywords]);googletag.pubads().setTargeting("channel",MUNIVERSAL.channel);googletag.enableServices();});googletag.cmd.push(function(){googletag.display(a['target'])});M_TILE++;}}
var MUNIVERSAL=new MUTAG();MUNIVERSAL.setSite("canpages");MUNIVERSAL.setSite=function(){return this;}
MUNIVERSAL.initDFPP();if(MUNIVERSAL.dmp){MUNIVERSAL.initDMP();window.onload=function(){MUNIVERSAL.populate();};}
if(typeof(MUNIVERSAL_SITE)!="undefined"){MUNIVERSAL.setPage((MUNIVERSAL_SECTION!=undefined)?MUNIVERSAL_SECTION:"ros");try{MUNIVERSAL.getKeywords(MUNIVERSAL_KWORD);}catch(e){}
MUNIVERSAL.spot((MUNIVERSAL_COLLECTION!=undefined)?MUNIVERSAL_COLLECTION:null);};
