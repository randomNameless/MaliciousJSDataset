var calledFrames=new Array();var viewImpIds=new Array();var countedViewImp=new Array();window.addEventListener("message",function(h){if(typeof h.data!="string"){return}var f="";if(h.data instanceof Function){for(var c=0,a=calledFrames.length;c<a;c++){if(h.data(calledFrames[c])){f=c}}}else{for(var c=0,a=calledFrames.length;c<a;c++){if(calledFrames[c]==h.data){f=c}}}if(f==""){f=-1}if(f==-1){calledFrames.push(h.data);iframeId=h.data;if(h.data.match("_vid_")!=null){var b=h.data.split("_vid_");iframeId=b[0]}if(h.data.match("^adroute_ads_")!=null){showCreative(iframeId);var j=document.getElementById(iframeId).contentWindow;j.postMessage(h.data,"*")}if(h.data.match("_vid_")!=null){setViewImpId(iframeId,b[1].split("_"))}if(h.data.match("rtg_uuid=")!=null){var k=h.data.split("=")[1];if(k.length>0){var d=getCookie("adr_id");var g=60*60*24*365*2;if(!d){fetchRandomIdAndExecute(function(e){setCookie("adr_id",e,g)});d=getCookie("adr_id")}else{setCookie("adr_id",d,g)}}}}},false);function setCookie(d,e,c){var b=new Date();b.setTime(b.getTime()+c*1000);var a=b.toUTCString();document.cookie=d+"="+e+";path=/;expires="+a}function getCookie(a){if(!a){return null}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function fetchRandomIdAndExecute(c){var b=new XMLHttpRequest();b.onreadystatechange=function(){if(this.readyState===4&&this.status===200){var d=this.response?this.response.adrouteUuid:null;if(d!==""&&d!==null&&d!==undefined){c(d)}}};b.responseType="json";var a="https://pc-adroute.focas.jp/ads/adr_id.php";b.open("GET",a,true);b.send()}function setAdrId(c){var b=getCookie("adr_id");var a=60*60*24*365*2;if(!b){fetchRandomIdAndExecute(function(d){setCookie("adr_id",d,a);c(d)})}else{setCookie("adr_id",b,a);c(b)}}function setViewImpId(c,a){var b=c+"_"+a[0]+"_"+a[1]+"_"+a[2]+"_"+a[3];viewImpIds[c]=b}function showCreative(a){tmp=a.split("_frame_");divId=tmp[0]+"_"+tmp[1];var b=document.getElementById(divId);b.style.display="block"}(function(){var d="bottom",f=window.innerHeight,e=document.getElementById("adroute_ads_"+window.adroute_ad.block),a=navigator.userAgent;initAd=function(g){e=g;e.style.position="relative";e.style.width="100%"},showAdBlock=function(){e.style.visibility="visible";e.style.display="block";e.style.opacity=1},initViewImpCheck=function(){document.addEventListener("touchmove",checkViewImp,false);checkViewImp()},checkViewImp=function(){var j=0;for(var g in viewImpIds){j++}if(j==0){var h=setInterval(function(){var k=0;for(var i in viewImpIds){k++}if(k!=0){clearInterval(h);checkAllCreative()}},500)}else{checkAllCreative()}},checkAllCreative=function(){for(var g in viewImpIds){if(g.match("adroute_ads_frame")!=null){judgeViewImp(g)}}},judgeViewImp=function(n,h){var i=0;var g=window.innerHeight;var j=document.getElementById(n);var k=j.clientHeight/2;var l=j.getBoundingClientRect().top+k;if(i<=l&&g>=l){if(h==1){if(typeof countedViewImp[n]=="undefined"){sendViewImpCount(n)}}else{var m=n;setTimeout(function(){judgeViewImp(m,1)},1000)}}},sendViewImpCount=function(m){var g=viewImpIds[m];tmp=g.split("_");var l=document.getElementById(m).src;match=l.match(/^(http|https):\/\/(dev|test|stg|)(.|)pc-adroute\.focas\.jp/);var j=match[0];var h=j+"/ads/creative_viewimp.php?aid="+tmp[6]+"&mid="+tmp[7]+"&uid="+tmp[8];dividedFrameId=m.split("_frame_");divId=dividedFrameId[0]+"_"+dividedFrameId[1];var k=document.getElementById(divId);var i=document.createElement("script");i.src=h;k.appendChild(i);countedViewImp[m]=true},getScreen=function(g){return{width:screen.width,height:screen.height}};var c=function(){this.initialize.apply(this,arguments)};c.prototype={initialize:function(g){}};c.Class=function(){return function(){typeof this.initialize=="function"&&this.initialize.apply(this,arguments)}};c.Util={loadScript:function(i){var h=(i[0])?i[0]:null,l=(i[1])?i[1]:"/",m=(i[2])?i[2]:"http",j=(h==null)?l:m+"://"+h+l;try{document.write('<script type="text/javascript" src="'+j+'"><\/script>')}catch(k){var g=document.createElement("script");g.type="text/javascript";g.src=j;document.getElementsByTagName("head")[0].appendChild(g)}},loadStyle:function(h){var g=(h[0])?h[0]:null,l=(h[1])?h[1]:"/",m=(h[2])?h[2]:"http",j=(g==null)?l:m+"://"+g+l;try{document.write('<link rel="stylesheet" type="text/css" href="'+j+'" />')}catch(k){var i=document.createElement("link");i.rel="stylesheet";i.type="text/css";i.href=j;document.getElementsByTagName("head")[0].appendChild(i)}},addRequestQuery:function(h,i,g){if(h&&typeof i!=undefined&&i!=""){g=[g,g.slice(-1)=="?"?"":"&",h,"=",encodeURIComponent(String(i))].join("")}return g},isSupportFlash:function(){if(navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){return 1}}return 0},isPc:function(){if(/i(?:Phone|Pod|OS)/.test(a)){return 0}else{if(/Android /.test(a)){if(/Mobile/.test(a)){return 0}}else{if(/(Windows Phone|Nexus 5|BlackBerry)/.test(a)){return 0}}}return 1},};c.Base=function(){};c.Base.prototype={prefix:"adroute_ads_",closeBtnPrefix:"adroute_overlay_close_",init:function(){if(typeof window.adroute_ad!="undefined"){this.adParams=(typeof window.adroute_ad)?window.adroute_ad:{mediaId:"froute_demo",type:"1",block:"adroute_ad_demo",size:"300x250",};this.userParams={view:(screen)?{width:screen.availWidth,height:screen.availHeight}:{width:300,height:250},screen:(screen)?{width:screen.width,height:screen.height}:{width:300,height:250},depth:screen.colorDepth,url:document.location,inner:{width:window.innerWidth,height:window.innerHeight}};this.currentTime=(new Date).getTime()}},buildHtml:function(i){var g=(i.url)?i.url:null;var h=this.adjustSize(i);if((this.adParams.mediaId==139509&&(this.adParams.type==6))){return this.createHtmlAddedDiv(h,g)}return this.createHtml(h,g)},adjustSize:function(g){size=(g.size)?g.size:null;if(g.size){size=size.split("x");size=new this.Size(parseInt(size[0],10)||300,parseInt(size[1],10)||250)}else{size=new this.Size(300,250)}return size},createHtmlAddedDiv:function(j,i){var g=this.createFrameParams(j,i);g.style+="vertical-align:bottom;bottom:0px;position:fixed;z-index:999999999;left:0px;line-height:30px;right:0px;margin:auto;text-align:center;";var m=this.createTag(g,"iframe");var k=this.createDivBottom();var l=this.createCloseButton(j);var h='<div id="adroute-overlay-geta" style="width:100%;height:'+j.height+'px;position:fixed;vertical-align:bottom;left:0px;line-height:30px;right:0px;bottom:0px;margin:auto;text-align:center;background-color:#d3d3d3;z-index:999999998;"></div>';return k+m+h+l+"</div>"},createHtml:function(h,g){var k=this.createTag(this.createDivParams(h,this.createStyleParams(h)),"div");var j=this.createTag(this.createFrameParams(h,g),"iframe");var i="";return i+k+j+"</div>"},createDivBottom:function(){return""},createCloseButton:function(h){var k=this.closeBtnPrefix+this.adParams.block;var j=30;var g=h.height-5;var i="position: fixed;left: 0px;bottom: "+g+"px;display: block;width: 30px;height: "+j+"px;line-height: 30px;font-size: 1.5rem;text-align: center;color: #000;background: transparent;cursor: pointer;z-index:999999999;";return'<div type="button" id="'+k+'" style="'+i+'">×</div>'},createFrameParams:function(h,g){return{name:this.prefix+"frame_"+this.adParams.block,width:h.width+"px",height:h.height+"px",id:this.prefix+"frame_"+this.adParams.block,src:g,frameborder:0,marginwidth:0,marginheight:0,vspace:0,hspace:0,allowtransparency:"true",scrolling:"no",style:(window.adroute_ad.type=="6")?"":"position:relative;"}},createStyleParams:function(g){var h="width:"+g.width+"px;height:"+g.height+"px;position:relative;left:0px;right:0px;margin:auto;padding:0;overflow:none;text-align:center;";return h},createTag:function(j,i){var g="<"+i;for(var h in j){g+=" "+h+'="'+j[h]+'"'}g+=">";if(i=="iframe"){g+="</iframe>"}return g},createDivParams:function(g,h){return{width:g.width+"px",height:g.height+"px",id:this.prefix+this.adParams.block,style:h}},Size:function(h,g){this.width=h;this.height=g},getAdRequestUrl:function(){var g="https://pc-adroute.focas.jp/ads/show_page.html?";g=c.Util.addRequestQuery("mid",(this.adParams.mediaId)?this.adParams.mediaId:"",g);g=c.Util.addRequestQuery("type","1",g);g=c.Util.addRequestQuery("adr_id",(getCookie("adr_id"))?getCookie("adr_id"):"",g);g=c.Util.addRequestQuery("block",(this.adParams.block)?this.adParams.block:"",g);g=c.Util.addRequestQuery("inner_w",(this.userParams.inner.width)?this.userParams.inner.width:"",g);g=c.Util.addRequestQuery("inner_h",(this.userParams.inner.height)?this.userParams.inner.height:"",g);g=c.Util.addRequestQuery("scr_w",(this.userParams.screen.width)?this.userParams.screen.width:"",g);g=c.Util.addRequestQuery("scr_h",(this.userParams.screen.height)?this.userParams.screen.height:"",g);g=c.Util.addRequestQuery("time",parseInt(Date.now()/1000,10),g);return g},rewriteStyle:function(g){g.style.position="absolute";g.style.left=0-g.offsetLeft+"px"},action:function(){if(c.Util.isPc()!=0){this.init();document.writeln(this.buildHtml({url:this.getAdRequestUrl(),size:this.adParams.size}));if((this.adParams.mediaId==139509&&(this.adParams.type==6))){var k=document.getElementById(this.closeBtnPrefix+this.adParams.block);var h=document.getElementById(this.prefix+"frame_"+this.adParams.block);var j=document.getElementById("adroute-overlay-geta");k.addEventListener("click",function(){k.style.display="none";h.style.display="none";j.style.display="none"})}var i=document.getElementById(this.prefix+this.adParams.block);var g=this;if(i==null){setTimeout(function(){i=document.getElementById(g.prefix+g.adParams.block);console.log("timeout");initBannerAd(i,g)},200,this)}else{this.initBannerAd(i,g)}initViewImpCheck();setAdrId(function(l){})}},initBannerAd:function(i,g){initAd(i);showAdBlock();var h=setInterval(function(){if(document.readyState==="complete"){setTimeout(function(){showAdBlock()},200)}},500)},_t:null};var b=new c.Base;window.addEventListener("load",b.action(),false)})();