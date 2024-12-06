/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));

var Notice_inline=function(){return{id:'',title:'',subtitle:'',defaultSuccessMsg:'Completed successfully',defaultErrorMsg:'An error has occurred',defaultWarningMsg:'Warning',interval:0,timeout:2,callback:null,success:function(title){if(title!=undefined){this.title=title;}else if(isEmpty(this.title)){this.title=this.defaultSuccessMsg;}
this.show('success');},error:function(title){if(title!=undefined){this.title=title;}else if(isEmpty(this.title)){this.title=this.defaultErrorMsg;}
this.show('error');},info:function(title){if(title!=undefined){this.title=title;}else if(isEmpty(this.title)){return;}
this.show('info');},warning:function(title){if(title!=undefined){this.title=title;}else if(isEmpty(this.title)){this.title=this.defaultWarningMsg;}
this.show('warning');},show:function(mode){if(this.id.length==0){return false;}
this.hideNow();var noticeContainer=$('#'+this.id);noticeContainer.addClass('notice-inline-container');var noticeContents='<div class="notice-inline '+mode+'">';noticeContents+='<h5>'+this.title+'</h5>';if(this.subtitle.length>0){noticeContents+='<h6>'+this.subtitle+'</h6>';}
noticeContents+='</div>';noticeContainer.html(noticeContents);noticeContainer.show();},hide:function(timeout){timeout=(timeout==undefined)?this.timeout:timeout;clearTimeout(this.interval);this.interval=0;var milliseconds=timeout*1000;var timeoutString="Notice_inline.hideNow('"+this.id+"');Notice_inline.interval = 0;";this.interval=setTimeout(timeoutString,milliseconds);},hideNow:function(id){if(id){$('#'+id).hide();}else{$('.notice-inline-container').each(function(){$(this).hide();});}
clearTimeout(this.interval);this.interval=0;if(this.callback!==null){eval(this.callback);this.callback=null;}},init:function(){}}}();Notice_inline.init();

var Ad_cycler=function(){return{interval:25000,timers:{},content:{},current:{},startCycler:function(cyclerID){if(Ad_cycler.content[cyclerID].length>1){Ad_cycler.timers[cyclerID]=setInterval('Ad_cycler.swap("'+cyclerID+'")',Ad_cycler.interval);if(typeof Ad_cycler.current[cyclerID]=='undefined'){Ad_cycler.current[cyclerID]=0;}}},stopCycler:function(cyclerID){clearInterval(Ad_cycler.timers[cyclerID]);},swap:function(cyclerID){var max=Ad_cycler.content[cyclerID].length-1;var old=Ad_cycler.current[cyclerID];if(old==max){var current=0;}else{var current=old+1;}
Ad_cycler.current[cyclerID]=current;if($('#defaultCountdown').length>0){$('#defaultCountdown').countdown('destroy');}
var content=Ad_cycler.content[cyclerID][current];$('#'+cyclerID).html(content);if(/^\/net-news(\/archive.*)?$/.test(location.pathname)){$.cookie('netNewsBannerSlot',current,{expires:10*365,path:'/net-news'});}}};}();

var Notice_overlay=function(){return{title:'',subtitle:'',details:'',debug:'',showDebug:false,footer:'',defaultSuccessMsg:'Completed successfully',defaultErrorMsg:'An error has occurred',defaultWarningMsg:'Warning',defaultDebuggingMsg:'Debugging',timer:0,timeout:15,defaultTimeout:15,MODAL_OPTIONS:{opacity:60,overlayId:'notice-overlay',containerId:'notice-overlay-container',position:['30%',null],closeClass:'close'},MODAL_DEBUG_OPTIONS:{opacity:60,overlayId:'notice-overlay',containerId:'notice-overlay-container-debug',position:['5%',null],closeClass:'close'},success:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){this.title=this.defaultSuccessMsg;}
this.show('success');},error:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){this.title=this.defaultErrorMsg;}
this.show('error');},info:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){return;}
this.show('info');},warning:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){this.title=this.defaultWarningMsg;}
this.show('warning');},help:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){return;}
this.show('help');},debugging:function(title){if(title!=undefined){this.title=title;}
else if(isEmpty(this.title)){this.title=this.defaultDebuggingMsg;}
this.show('debug');},show:function(mode){this.hide();$('#notice').attr('class',mode);$('#notice-title').html(this.title);$('#notice-subtitle').html(this.subtitle);if(this.subtitle.length>0){$('#notice-subtitle').show();}
if(this.details.length>0&&typeof(this.details)=='object'){if(this.details.length==1){var details='<p>'+decodeURIComponent(this.details[0])+'</p>';}
else{var details='<ul>';for(detail in this.details){if(this.details[detail]!=''&&this.details[detail]!=undefined){details+='<li>'+decodeURIComponent(this.details[detail])+'</li>';}}
details+='</ul>';}
$('#notice-details').html(details);$('#notice-details').show();}
else if(this.details.length>0){$('#notice-details').html(this.details);$('#notice-details').show();}
if(this.showDebug==true||mode=='debug'){if(this.debug.length>0&&typeof(this.debug)=='object'){var debug='<ul>';for(thisDebug in this.debug){if(!isEmpty(this.debug[thisDebug])){debug+='<li>'+decodeURIComponent(this.debug[thisDebug])+'</li>';}}
debug+='</ul>';$('#notice-debug').html(debug);$('#notice-view-debug-link').show();}
else if(this.debug.length>0){$('#notice-debug').html(this.debug);$('#notice-view-debug-link').show();}
else{$('#notice-debug-container fieldset').hide();$('#notice-view-debug-link').hide();}}
else{$('#notice-debug-container fieldset').hide();$('#notice-view-debug-link').hide();}
if(mode=='debug'){$('#notice-debug-container fieldset').show();$('#notice-view-debug-link').hide();}
$('#notice-footer').html(this.footer);if(this.footer.length>0){$('#notice-footer').show();}
if(mode=='debug'){$('#notice').modal(this.MODAL_DEBUG_OPTIONS);}
else{$('#notice').modal(this.MODAL_OPTIONS);}
if(this.showDebug==false&&mode!='debug'){this.hide(this.timeout);}},hide:function(timeout){clearTimeout(this.timer);this.timer=0;if(timeout!=undefined){this.timer=setTimeout('$.modal.close();Notice_overlay.timer = 0;',timeout*1000);}
else{$.modal.close();}},clear:function(){this.title='';this.subtitle='';this.details='';this.debug='';this.showDebug=false;this.footer='';this.timeout=this.defaultTimeout;$('#notice-title').html('');$('#notice-subtitle').html('');$('#notice-details').html('');$('#notice-debug').html('');$('#notice-subtitle').hide();$('#notice-details').hide();$('#notice-debug-container fieldset').hide();$('#notice-view-debug-link').hide();$('#notice-footer').hide();},init:function(){$('#notice-view-debug-link').click(function(){$('#notice-debug-container fieldset').toggle();});}};}();$(document).ready(Notice_overlay.init);

