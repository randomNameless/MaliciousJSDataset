var scriptNode=document.createElement("script");scriptNode.type="text/javascript";setTimeout(function(){if(!scriptNode)
return;scriptNode.src=xcart_web_dir+"/adaptive.php?send_browser="+(localIsDOM?"Y":"N")+(localIsStrict?"Y":"N")+(localIsJava?"Y":"N")+"%7C"+localBrowser+"%7C"+localVersion+"%7C"+localPlatform+"%7C"+(localIsCookie?"Y":"N")+"%7C"+screen.width+"%7C"+screen.height+"%7C"+(window.XMLHttpRequest?"Y":"N")+"%7C"+current_area;scriptNode.async=!0;document.getElementsByTagName('head')[0].appendChild(scriptNode)},3000);var _xc_cluetip=function($){$.cluetip={version:'1.0.6'};var $cluetip,$cluetipInner,$cluetipOuter,$cluetipTitle,$cluetipArrows,$cluetipWait,$dropShadow,imgCount;$.fn.cluetip=function(js,options){if(typeof js=='object'){options=js;js=null}
if(js=='destroy'){return this.removeData('thisInfo').off('.cluetip')}
return this.each(function(index){var link=this,$this=$(this);var opts=$.extend(!0,{},$.fn.cluetip.defaults,options||{},$.metadata?$this.metadata():$.meta?$this.data():{});var cluetipContents=!1;var cluezIndex=+opts.cluezIndex;$this.data('thisInfo',{title:link.title,zIndex:cluezIndex});var isActive=!1,closeOnDelay=0;if(!$('#cluetip').length){$(['<div id="cluetip">','<div id="cluetip-outer">','<h3 id="cluetip-title"></h3>','<div id="cluetip-inner"></div>','</div>','<div id="cluetip-extra"></div>','<div id="cluetip-arrows" class="cluetip-arrows"></div>','</div>'].join(''))[insertionType](insertionElement).hide();$cluetip=$('#cluetip').css({position:'absolute'});$cluetipOuter=$('#cluetip-outer').css({position:'relative',zIndex:cluezIndex});$cluetipInner=$('#cluetip-inner');$cluetipTitle=$('#cluetip-title');$cluetipArrows=$('#cluetip-arrows');$cluetipWait=$('<div id="cluetip-waitimage"></div>').css({position:'absolute'}).insertBefore($cluetip).hide()}
var dropShadowSteps=(opts.dropShadow)?+opts.dropShadowSteps:0;if(!$dropShadow){$dropShadow=$([]);for(var i=0;i<dropShadowSteps;i++){$dropShadow=$dropShadow.add($('<div></div>').css({zIndex:cluezIndex-1,opacity:.1,top:1+i,left:1+i}))}
$dropShadow.css({position:'absolute',backgroundColor:'#000'}).prependTo($cluetip)}
var tipAttribute=$this.attr(opts.attribute),ctClass=opts.cluetipClass;if(!tipAttribute&&!opts.splitTitle&&!js){return!0}
if(opts.local&&opts.localPrefix){tipAttribute=opts.localPrefix+tipAttribute}
if(opts.local&&opts.hideLocal){$(tipAttribute+':first').hide()}
var tOffset=parseInt(opts.topOffset,10),lOffset=parseInt(opts.leftOffset,10);var tipHeight,wHeight,defHeight=isNaN(parseInt(opts.height,10))?'auto':(/\D/g).test(opts.height)?opts.height:opts.height+'px';var sTop,linkTop,posY,tipY,mouseY,baseline;var tipInnerWidth=parseInt(opts.width,10)||275,tipWidth=tipInnerWidth+(parseInt($cluetip.css('paddingLeft'),10)||0)+(parseInt($cluetip.css('paddingRight'),10)||0)+dropShadowSteps,linkWidth=this.offsetWidth,linkLeft,posX,tipX,mouseX,winWidth;var tipParts;var tipTitle=(opts.attribute!='title')?$this.attr(opts.titleAttribute):'';if(opts.splitTitle){if(tipTitle==undefined){tipTitle=''}
tipParts=tipTitle.split(opts.splitTitle);tipTitle=tipParts.shift()}
if(opts.escapeTitle){tipTitle=tipTitle.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;')}
var localContent;function returnFalse(){return!1}
var activate=function(event){if(!opts.onActivate($this)){return!1}
isActive=!0;$cluetip.removeClass().css({width:tipInnerWidth});if(tipAttribute==$this.attr('href')){$this.css('cursor',opts.cursor)}
if(opts.hoverClass){$this.addClass(opts.hoverClass)}
linkTop=posY=$this.offset().top;linkLeft=$this.offset().left;mouseX=event.pageX;mouseY=event.pageY;if(link.tagName.toLowerCase()!='area'){sTop=$(document).scrollTop();winWidth=$(window).width()}
if(opts.positionBy=='fixed'){posX=linkWidth+linkLeft+lOffset;$cluetip.css({left:posX})}else{posX=(linkWidth>linkLeft&&linkLeft>tipWidth)||linkLeft+linkWidth+tipWidth+lOffset>winWidth?linkLeft-tipWidth-lOffset:linkWidth+linkLeft+lOffset;if(link.tagName.toLowerCase()=='area'||opts.positionBy=='mouse'||linkWidth+tipWidth>winWidth){if(mouseX+20+tipWidth>winWidth){$cluetip.addClass(' cluetip-'+ctClass);posX=(mouseX-tipWidth-lOffset)>=0?mouseX-tipWidth-lOffset-parseInt($cluetip.css('marginLeft'),10)+parseInt($cluetipInner.css('marginRight'),10):mouseX-(tipWidth/2)}else{posX=mouseX+lOffset}}
var pY=posX<0?event.pageY+tOffset:event.pageY;$cluetip.css({left:(posX>0&&opts.positionBy!='bottomTop')?posX:(mouseX+(tipWidth/2)>winWidth)?winWidth/2-tipWidth/2:Math.max(mouseX-(tipWidth/2),0),zIndex:$this.data('thisInfo').zIndex});$cluetipArrows.css({zIndex:$this.data('thisInfo').zIndex+1})}
wHeight=$(window).height();if(js){if(typeof js=='function'){js=js.call(link)}
$cluetipInner.html(js);cluetipShow(pY)}else if(tipParts){var tpl=tipParts.length;$cluetipInner.html(tpl?tipParts[0]:'');if(tpl>1){for(var i=1;i<tpl;i++){$cluetipInner.append('<div class="split-body">'+tipParts[i]+'</div>')}}
cluetipShow(pY)}else if(!opts.local&&tipAttribute.indexOf('#')!==0){if(/\.(jpe?g|tiff?|gif|png)$/i.test(tipAttribute)){$cluetipInner.html('<img src="'+tipAttribute+'" alt="'+tipTitle+'" />');cluetipShow(pY)}else if(cluetipContents&&opts.ajaxCache){$cluetipInner.html(cluetipContents);cluetipShow(pY)}else{var optionBeforeSend=opts.ajaxSettings.beforeSend,optionError=opts.ajaxSettings.error,optionSuccess=opts.ajaxSettings.success,optionComplete=opts.ajaxSettings.complete;var ajaxSettings={cache:!1,url:tipAttribute,beforeSend:function(xhr){if(optionBeforeSend){optionBeforeSend.call(link,xhr,$cluetip,$cluetipInner)}
$cluetipOuter.children().empty();if(opts.waitImage){$cluetipWait.css({top:mouseY+20,left:mouseX+20,zIndex:$this.data('thisInfo').zIndex-1}).show()}},error:function(xhr,textStatus){if(isActive){if(optionError){optionError.call(link,xhr,textStatus,$cluetip,$cluetipInner)}else{$cluetipInner.html('<i>sorry, the contents could not be loaded</i>')}}},success:function(data,textStatus){cluetipContents=opts.ajaxProcess.call(link,data);if(isActive){if(optionSuccess){optionSuccess.call(link,data,textStatus,$cluetip,$cluetipInner)}
$cluetipInner.html(cluetipContents)}},complete:function(xhr,textStatus){if(optionComplete){optionComplete.call(link,xhr,textStatus,$cluetip,$cluetipInner)}
var imgs=$cluetipInner[0].getElementsByTagName('img');imgCount=imgs.length;for(var i=0,l=imgs.length;i<l;i++){if(imgs[i].complete){imgCount--}}
if(imgCount){$(imgs).on('load error',function(){imgCount--;if(imgCount<1){$cluetipWait.hide();if(isActive){cluetipShow(pY)}}})}else{$cluetipWait.hide();if(isActive){cluetipShow(pY)}}}};var ajaxMergedSettings=$.extend(!0,{},opts.ajaxSettings,ajaxSettings);$.ajax(ajaxMergedSettings)}}else if(opts.local){var $localContent=$(tipAttribute+(/#\S+$/.test(tipAttribute)?'':':eq('+index+')')).clone(!0).show();$cluetipInner.html($localContent);cluetipShow(pY)}};var cluetipShow=function(bpY){$cluetip.addClass('cluetip-'+ctClass);if(opts.truncate){var $truncloaded=$cluetipInner.text().slice(0,opts.truncate)+'...';$cluetipInner.html($truncloaded)}
function doNothing(){};tipTitle?$cluetipTitle.show().html(tipTitle):(opts.showTitle)?$cluetipTitle.show().html('&nbsp;'):$cluetipTitle.hide();if(opts.sticky){var $closeLink=$('<div id="cluetip-close"><a href="#">'+opts.closeText+'</a></div>');(opts.closePosition=='bottom')?$closeLink.appendTo($cluetipInner):(opts.closePosition=='title')?$closeLink.prependTo($cluetipTitle):$closeLink.prependTo($cluetipInner);$closeLink.on('click.cluetip',function(){cluetipClose();return!1});if(opts.mouseOutClose){$cluetip.on('mouseleave.cluetip',function(){cluetipClose()})}else{$cluetip.off('mouseleave.cluetip')}}
var direction='';$cluetipOuter.css({zIndex:$this.data('thisInfo').zIndex,overflow:defHeight=='auto'?'visible':'auto',height:defHeight});tipHeight=defHeight=='auto'?Math.max($cluetip.outerHeight(),$cluetip.height()):parseInt(defHeight,10);tipY=posY;baseline=sTop+wHeight;if(opts.positionBy=='fixed'){tipY=posY-opts.dropShadowSteps+tOffset}else if((posX<mouseX&&Math.max(posX,0)+tipWidth>mouseX)||opts.positionBy=='bottomTop'){if(posY+tipHeight+tOffset>baseline&&mouseY-sTop>tipHeight+tOffset){tipY=mouseY-tipHeight-tOffset;direction='top'}else{tipY=mouseY+tOffset;direction='bottom'}}else if(posY+tipHeight+tOffset>baseline){tipY=(tipHeight>=wHeight)?sTop:baseline-tipHeight-tOffset}else if($this.css('display')=='block'||link.tagName.toLowerCase()=='area'||opts.positionBy=="mouse"){tipY=bpY-tOffset}else{tipY=posY-opts.dropShadowSteps}
if(direction==''){posX<linkLeft?direction='left':direction='right'}
$cluetip.css({top:tipY+'px'}).removeClass().addClass('clue-'+direction+'-'+ctClass).addClass(' cluetip-'+ctClass);if(opts.arrows){var bgY=(posY-tipY-opts.dropShadowSteps);$cluetipArrows.css({top:(/(left|right)/.test(direction)&&posX>=0&&bgY>0)?bgY+'px':/(left|right)/.test(direction)?0:''}).show()}else{$cluetipArrows.hide()}
$dropShadow.hide();$cluetip.hide()[opts.fx.open](opts.fx.openSpeed||0);if(opts.dropShadow){$dropShadow.css({height:tipHeight,width:tipInnerWidth,zIndex:$this.data('thisInfo').zIndex-1}).show()}
if($.fn.bgiframe){$cluetip.bgiframe()}
if(opts.delayedClose>0){closeOnDelay=setTimeout(cluetipClose,opts.delayedClose)}
opts.onShow.call(link,$cluetip,$cluetipInner)};var inactivate=function(event){isActive=!1;$cluetipWait.hide();if(!opts.sticky||(/click|toggle/).test(opts.activation)){cluetipClose();clearTimeout(closeOnDelay)}
if(opts.hoverClass){$this.removeClass(opts.hoverClass)}};var cluetipClose=function(){$cluetipOuter.parent().hide().removeClass();opts.onHide.call(link,$cluetip,$cluetipInner);$this.removeClass('cluetip-clicked');if(tipTitle){$this.attr(opts.titleAttribute,tipTitle)}
$this.css('cursor','');if(opts.arrows){$cluetipArrows.css({top:''})}};$(document).on('hideCluetip',function(e){cluetipClose()});if((/click|toggle/).test(opts.activation)){$this.on('click.cluetip',function(event){if($cluetip.is(':hidden')||!$this.is('.cluetip-clicked')){activate(event);$('.cluetip-clicked').removeClass('cluetip-clicked');$this.addClass('cluetip-clicked')}else{inactivate(event)}
this.blur();return!1})}else if(opts.activation=='focus'){$this.on('focus.cluetip',function(event){activate(event)});$this.on('blur.cluetip',function(event){inactivate(event)})}else{$this[opts.clickThrough?'off':'on']('click',returnFalse);var mouseTracks=function(evt){if(opts.tracking==!0){var trackX=posX-evt.pageX;var trackY=tipY?tipY-evt.pageY:posY-evt.pageY;$this.on('mousemove.cluetip',function(evt){$cluetip.css({left:evt.pageX+trackX,top:evt.pageY+trackY})})}};if($.fn.hoverIntent&&opts.hoverIntent){$this.hoverIntent({sensitivity:opts.hoverIntent.sensitivity,interval:opts.hoverIntent.interval,over:function(event){activate(event);mouseTracks(event)},timeout:opts.hoverIntent.timeout,out:function(event){inactivate(event);$this.off('mousemove.cluetip')}})}else{$this.on('mouseenter.cluetip',function(event){activate(event);mouseTracks(event)}).on('mouseleave.cluetip',function(event){inactivate(event);$this.off('mousemove.cluetip')})}
$this.on('mouseover.cluetip',function(event){$this.attr('title','')}).on('mouseleave.cluetip',function(event){$this.attr('title',$this.data('thisInfo').title)})}})};$.fn.cluetip.defaults={width:275,height:'auto',cluezIndex:999,positionBy:'auto',topOffset:15,leftOffset:15,local:!1,localPrefix:null,hideLocal:!0,attribute:'rel',titleAttribute:'title',splitTitle:'',escapeTitle:!1,showTitle:!0,cluetipClass:'default',hoverClass:'',waitImage:!0,cursor:'help',arrows:!1,dropShadow:!0,dropShadowSteps:6,sticky:!1,mouseOutClose:!1,activation:'hover',clickThrough:!1,tracking:!1,delayedClose:0,closePosition:'top',closeText:'Close',truncate:0,fx:{open:'show',openSpeed:''},hoverIntent:{sensitivity:3,interval:50,timeout:0},onActivate:function(e){return!0},onShow:function(ct,ci){},onHide:function(ct,ci){},ajaxCache:!0,ajaxProcess:function(data){data=data.replace(/<(script|style|title)[^<]+<\/(script|style|title)>/gm,'').replace(/<(link|meta)[^>]+>/g,'');return data},ajaxSettings:{dataType:'html'},debug:!1};var insertionType='appendTo',insertionElement='body';$.cluetip.setup=function(options){if(options&&options.insertionType&&(options.insertionType).match(/appendTo|prependTo|insertBefore|insertAfter/)){insertionType=options.insertionType}
if(options&&options.insertionElement){insertionElement=options.insertionElement}};document.dispatchEvent(new CustomEvent('jquery_cluetip_lib_is_loaded'))};if(typeof jQuery==='function'){_xc_cluetip(jQuery)}else{document.addEventListener('jQuery_lib_is_loaded',function(e){_xc_cluetip(jQuery)})}