(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module==='object'&&module.exports){module.exports=function(root,jQuery){if(jQuery===undefined){if(typeof window!=='undefined'){jQuery=require('jquery');}else{jQuery=require('jquery')(root);}}
factory(jQuery);return jQuery;};}else{factory(jQuery);}})(function($){"use strict";if('undefined'===typeof $){if('console'in window){window.console.info('Too much lightness, Featherlight needs jQuery.');}
return;}
if($.fn.jquery.match(/-ajax/)){if('console'in window){window.console.info('Featherlight needs regular jQuery, not the slim version.');}
return;}
function Featherlight($content,config){if(this instanceof Featherlight){this.id=Featherlight.id++;this.setup($content,config);this.chainCallbacks(Featherlight._callbackChain);}else{var fl=new Featherlight($content,config);fl.open();return fl;}}
var opened=[],pruneOpened=function(remove){opened=$.grep(opened,function(fl){return fl!==remove&&fl.$instance.closest('body').length>0;});return opened;};function slice(obj,set){var r={};for(var key in obj){if(key in set){r[key]=obj[key];delete obj[key];}}
return r;}
var iFrameAttributeSet={allow:1,allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,mozallowfullscreen:1,name:1,referrerpolicy:1,sandbox:1,scrolling:1,src:1,srcdoc:1,style:1,webkitallowfullscreen:1,width:1};function parseAttrs(obj,prefix){var attrs={},regex=new RegExp('^'+prefix+'([A-Z])(.*)');for(var key in obj){var match=key.match(regex);if(match){var dasherized=(match[1]+match[2].replace(/([A-Z])/g,'-$1')).toLowerCase();attrs[dasherized]=obj[key];}}
return attrs;}
var eventMap={keyup:'onKeyUp',resize:'onResize'};var globalEventHandler=function(event){$.each(Featherlight.opened().reverse(),function(){if(!event.isDefaultPrevented()){if(false===this[eventMap[event.type]](event)){event.preventDefault();event.stopPropagation();return false;}}});};var toggleGlobalEvents=function(set){if(set!==Featherlight._globalHandlerInstalled){Featherlight._globalHandlerInstalled=set;var events=$.map(eventMap,function(_,name){return name+'.'+Featherlight.prototype.namespace;}).join(' ');$(window)[set?'on':'off'](events,globalEventHandler);}};Featherlight.prototype={constructor:Featherlight,namespace:'featherlight',targetAttr:'data-featherlight',variant:null,resetCss:false,background:null,openTrigger:'click',closeTrigger:'click',filter:null,root:'body',openSpeed:250,closeSpeed:250,closeOnClick:'anywhere',closeOnEsc:true,closeIcon:'&#10005;',loading:'',persist:false,otherClose:null,beforeOpen:$.noop,beforeContent:$.noop,beforeClose:$.noop,afterOpen:$.noop,afterContent:$.noop,afterClose:$.noop,onKeyUp:$.noop,onResize:$.noop,type:null,contentFilters:['jquery','image','html','ajax','iframe','text'],setup:function(target,config){if(typeof target==='object'&&target instanceof $===false&&!config){config=target;target=undefined;}
var self=$.extend(this,config,{target:target}),css=!self.resetCss?self.namespace:self.namespace+'-reset',$background=$(self.background||['<div class="'+css+'-loading '+css+'">','<div class="'+css+'-content">','<button class="'+css+'-close-icon '+self.namespace+'-close" aria-label="Close">',self.closeIcon,'</button>','<div class="'+self.namespace+'-inner">'+self.loading+'</div>','</div>','</div>'].join('')),closeButtonSelector='.'+self.namespace+'-close'+(self.otherClose?','+self.otherClose:'');self.$instance=$background.clone().addClass(self.variant);self.$instance.on(self.closeTrigger+'.'+self.namespace,function(event){if(event.isDefaultPrevented()){return;}
var $target=$(event.target);if(('background'===self.closeOnClick&&$target.is('.'+self.namespace))||'anywhere'===self.closeOnClick||$target.closest(closeButtonSelector).length){self.close(event);event.preventDefault();}});return this;},getContent:function(){if(this.persist!==false&&this.$content){return this.$content;}
var self=this,filters=this.constructor.contentFilters,readTargetAttr=function(name){return self.$currentTarget&&self.$currentTarget.attr(name);},targetValue=readTargetAttr(self.targetAttr),data=self.target||targetValue||'';var filter=filters[self.type];if(!filter&&data in filters){filter=filters[data];data=self.target&&targetValue;}
data=data||readTargetAttr('href')||'';if(!filter){for(var filterName in filters){if(self[filterName]){filter=filters[filterName];data=self[filterName];}}}
if(!filter){var target=data;data=null;$.each(self.contentFilters,function(){filter=filters[this];if(filter.test){data=filter.test(target);}
if(!data&&filter.regex&&target.match&&target.match(filter.regex)){data=target;}
return!data;});if(!data){if('console'in window){window.console.error('Featherlight: no content filter found '+(target?' for "'+target+'"':' (no target specified)'));}
return false;}}
return filter.process.call(self,data);},setContent:function($content){this.$instance.removeClass(this.namespace+'-loading');this.$instance.toggleClass(this.namespace+'-iframe',$content.is('iframe'));this.$instance.find('.'+this.namespace+'-inner').not($content).slice(1).remove().end().replaceWith($.contains(this.$instance[0],$content[0])?'':$content);this.$content=$content.addClass(this.namespace+'-inner');return this;},open:function(event){var self=this;self.$instance.hide().appendTo(self.root);if((!event||!event.isDefaultPrevented())&&self.beforeOpen(event)!==false){if(event){event.preventDefault();}
var $content=self.getContent();if($content){opened.push(self);toggleGlobalEvents(true);self.$instance.fadeIn(self.openSpeed);self.beforeContent(event);return $.when($content).always(function($openendContent){if($openendContent){self.setContent($openendContent);self.afterContent(event);}}).then(self.$instance.promise()).done(function(){self.afterOpen(event);});}}
self.$instance.detach();return $.Deferred().reject().promise();},close:function(event){var self=this,deferred=$.Deferred();if(self.beforeClose(event)===false){deferred.reject();}else{if(0===pruneOpened(self).length){toggleGlobalEvents(false);}
self.$instance.fadeOut(self.closeSpeed,function(){self.$instance.detach();self.afterClose(event);deferred.resolve();});}
return deferred.promise();},resize:function(w,h){if(w&&h){this.$content.css('width','').css('height','');var ratio=Math.max(w/(this.$content.parent().width()),h/(this.$content.parent().height()));if(ratio>1){ratio=h/Math.floor(h/ratio);this.$content.css('width',''+w/ratio+'px').css('height',''+h/ratio+'px');}}},chainCallbacks:function(chain){for(var name in chain){this[name]=$.proxy(chain[name],this,$.proxy(this[name],this));}}};$.extend(Featherlight,{id:0,autoBind:'[data-featherlight]',defaults:Featherlight.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(elem){return elem instanceof $&&elem;},process:function(elem){return this.persist!==false?$(elem):$(elem).clone(true);}},image:{regex:/\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,process:function(url){var self=this,deferred=$.Deferred(),img=new Image(),$img=$('<img src="'+url+'" alt="" class="'+self.namespace+'-image" />');img.onload=function(){$img.naturalWidth=img.width;$img.naturalHeight=img.height;deferred.resolve($img);};img.onerror=function(){deferred.reject($img);};img.src=url;return deferred.promise();}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(html){return $(html);}},ajax:{regex:/./,process:function(url){var self=this,deferred=$.Deferred();var $container=$('<div></div>').load(url,function(response,status){if(status!=="error"){deferred.resolve($container.contents());}
deferred.reject();});return deferred.promise();}},iframe:{process:function(url){var deferred=new $.Deferred();var $content=$('<iframe/>');var css=parseAttrs(this,'iframe');var attrs=slice(css,iFrameAttributeSet);$content.hide().attr('src',url).attr(attrs).css(css).on('load',function(){deferred.resolve($content.show());}).appendTo(this.$instance.find('.'+this.namespace+'-content'));return deferred.promise();}},text:{process:function(text){return $('<div>',{text:text});}}},functionAttributes:['beforeOpen','afterOpen','beforeContent','afterContent','beforeClose','afterClose'],readElementConfig:function(element,namespace){var Klass=this,regexp=new RegExp('^data-'+namespace+'-(.*)'),config={};if(element&&element.attributes){$.each(element.attributes,function(){var match=this.name.match(regexp);if(match){var val=this.value,name=$.camelCase(match[1]);if($.inArray(name,Klass.functionAttributes)>=0){val=new Function(val);}else{try{val=JSON.parse(val);}
catch(e){}}
config[name]=val;}});}
return config;},extend:function(child,defaults){var Ctor=function(){this.constructor=child;};Ctor.prototype=this.prototype;child.prototype=new Ctor();child.__super__=this.prototype;$.extend(child,this,defaults);child.defaults=child.prototype;return child;},attach:function($source,$content,config){var Klass=this;if(typeof $content==='object'&&$content instanceof $===false&&!config){config=$content;$content=undefined;}
config=$.extend({},config);var namespace=config.namespace||Klass.defaults.namespace,tempConfig=$.extend({},Klass.defaults,Klass.readElementConfig($source[0],namespace),config),sharedPersist;var handler=function(event){var $target=$(event.currentTarget);var elemConfig=$.extend({$source:$source,$currentTarget:$target},Klass.readElementConfig($source[0],tempConfig.namespace),Klass.readElementConfig(event.currentTarget,tempConfig.namespace),config);var fl=sharedPersist||$target.data('featherlight-persisted')||new Klass($content,elemConfig);if(fl.persist==='shared'){sharedPersist=fl;}else if(fl.persist!==false){$target.data('featherlight-persisted',fl);}
if(elemConfig.$currentTarget.blur){elemConfig.$currentTarget.blur();}
fl.open(event);};$source.on(tempConfig.openTrigger+'.'+tempConfig.namespace,tempConfig.filter,handler);return{filter:tempConfig.filter,handler:handler};},current:function(){var all=this.opened();return all[all.length-1]||null;},opened:function(){var klass=this;pruneOpened();return $.grep(opened,function(fl){return fl instanceof klass;});},close:function(event){var cur=this.current();if(cur){return cur.close(event);}},_onReady:function(){var Klass=this;if(Klass.autoBind){var $autobound=$(Klass.autoBind);$autobound.each(function(){Klass.attach($(this));});$(document).on('click',Klass.autoBind,function(evt){if(evt.isDefaultPrevented()){return;}
var $cur=$(evt.currentTarget);var len=$autobound.length;$autobound=$autobound.add($cur);if(len===$autobound.length){return;}
var data=Klass.attach($cur);if(!data.filter||$(evt.target).parentsUntil($cur,data.filter).length>0){data.handler(evt);}});}},_callbackChain:{onKeyUp:function(_super,event){if(27===event.keyCode){if(this.closeOnEsc){$.featherlight.close(event);}
return false;}else{return _super(event);}},beforeOpen:function(_super,event){$(document.documentElement).addClass('with-featherlight');this._previouslyActive=document.activeElement;this._$previouslyTabbable=$("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not('[tabindex]').not(this.$instance.find('button'));this._$previouslyWithTabIndex=$('[tabindex]').not('[tabindex="-1"]');this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(_i,elem){return $(elem).attr('tabindex');});this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr('tabindex',-1);if(document.activeElement.blur){document.activeElement.blur();}
return _super(event);},afterClose:function(_super,event){var r=_super(event);var self=this;this._$previouslyTabbable.removeAttr('tabindex');this._$previouslyWithTabIndex.each(function(i,elem){$(elem).attr('tabindex',self._previousWithTabIndices[i]);});this._previouslyActive.focus();if(Featherlight.opened().length===0){$(document.documentElement).removeClass('with-featherlight');}
return r;},onResize:function(_super,event){this.resize(this.$content.naturalWidth,this.$content.naturalHeight);return _super(event);},afterContent:function(_super,event){var r=_super(event);this.$instance.find('[autofocus]:not([disabled])').focus();this.onResize(event);return r;}}});$.featherlight=Featherlight;$.fn.featherlight=function($content,config){Featherlight.attach(this,$content,config);return this;};$(document).ready(function(){Featherlight._onReady();});});