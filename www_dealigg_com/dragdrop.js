var Droppables={drops:[],remove:function(a){this.drops=this.drops.reject(function(c){return c.element==$(a)})},add:function(a,c){a=$(a);var b=Object.extend({greedy:true,hoverclass:null},c||{});if(b.containment){b._containers=[];var d=b.containment;typeof d=="object"&&d.constructor==Array?d.each(function(f){b._containers.push($(f))}):b._containers.push($(d))}if(b.accept)b.accept=[b.accept].flatten();Element.makePositioned(a);b.element=a;this.drops.push(b)},isContained:function(a,c){var b=a.parentNode;
return c._containers.detect(function(d){return b==d})},isAffected:function(a,c,b){return b.element!=c&&(!b._containers||this.isContained(c,b))&&(!b.accept||Element.classNames(c).detect(function(d){return b.accept.include(d)}))&&Position.within(b.element,a[0],a[1])},deactivate:function(a){a.hoverclass&&Element.removeClassName(a.element,a.hoverclass);this.last_active=null},activate:function(a){a.hoverclass&&Element.addClassName(a.element,a.hoverclass);this.last_active=a},show:function(a,c){if(this.drops.length){this.last_active&&
this.deactivate(this.last_active);this.drops.each(function(b){if(Droppables.isAffected(a,c,b)){b.onHover&&b.onHover(c,b.element,Position.overlap(b.overlap,b.element));if(b.greedy){Droppables.activate(b);throw $break;}}})}},fire:function(a,c){if(this.last_active){Position.prepare();this.isAffected([Event.pointerX(a),Event.pointerY(a)],c,this.last_active)&&this.last_active.onDrop&&this.last_active.onDrop(c,this.last_active.element,a)}},reset:function(){this.last_active&&this.deactivate(this.last_active)}},
Draggables={drags:[],observers:[],register:function(a){if(this.drags.length==0){this.eventMouseUp=this.endDrag.bindAsEventListener(this);this.eventMouseMove=this.updateDrag.bindAsEventListener(this);this.eventKeypress=this.keyPress.bindAsEventListener(this);Event.observe(document,"mouseup",this.eventMouseUp);Event.observe(document,"mousemove",this.eventMouseMove);Event.observe(document,"keypress",this.eventKeypress)}this.drags.push(a)},unregister:function(a){this.drags=this.drags.reject(function(c){return c==
a});if(this.drags.length==0){Event.stopObserving(document,"mouseup",this.eventMouseUp);Event.stopObserving(document,"mousemove",this.eventMouseMove);Event.stopObserving(document,"keypress",this.eventKeypress)}},activate:function(a){window.focus();this.activeDraggable=a},deactivate:function(){this.activeDraggable=null},updateDrag:function(a){if(this.activeDraggable){var c=[Event.pointerX(a),Event.pointerY(a)];if(!(this._lastPointer&&this._lastPointer.inspect()==c.inspect())){this._lastPointer=c;this.activeDraggable.updateDrag(a,
c)}}},endDrag:function(a){if(this.activeDraggable){this._lastPointer=null;this.activeDraggable.endDrag(a);this.activeDraggable=null}},keyPress:function(a){this.activeDraggable&&this.activeDraggable.keyPress(a)},addObserver:function(a){this.observers.push(a);this._cacheObserverCallbacks()},removeObserver:function(a){this.observers=this.observers.reject(function(c){return c.element==a});this._cacheObserverCallbacks()},notify:function(a,c,b){this[a+"Count"]>0&&this.observers.each(function(d){d[a]&&d[a](a,
c,b)})},_cacheObserverCallbacks:function(){["onStart","onEnd","onDrag"].each(function(a){Draggables[a+"Count"]=Draggables.observers.select(function(c){return c[a]}).length})}},Draggable=Class.create();
Draggable.prototype={initialize:function(a,c){var b=Object.extend({handle:false,starteffect:function(d){new Effect.Opacity(d,{duration:0.2,from:1,to:0.7})},reverteffect:function(d,f,e){d._revert=new Effect.Move(d,{x:-e,y:-f,duration:Math.sqrt(Math.abs(f^2)+Math.abs(e^2))*0.02})},endeffect:function(d){new Effect.Opacity(d,{duration:0.2,from:0.7,to:1})},zindex:1E3,revert:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,snap:false},c||{});this.element=$(a);if(b.handle&&typeof b.handle=="string")this.handle=
Element.childrenWithClassName(this.element,b.handle)[0];if(!this.handle)this.handle=$(b.handle);if(!this.handle)this.handle=this.element;if(b.scroll)b.scroll=$(b.scroll);Element.makePositioned(this.element);this.delta=this.currentDelta();this.options=b;this.dragging=false;this.eventMouseDown=this.initDrag.bindAsEventListener(this);Event.observe(this.handle,"mousedown",this.eventMouseDown);Draggables.register(this)},destroy:function(){Event.stopObserving(this.handle,"mousedown",this.eventMouseDown);
Draggables.unregister(this)},currentDelta:function(){return[parseInt(Element.getStyle(this.element,"left")||"0"),parseInt(Element.getStyle(this.element,"top")||"0")]},initDrag:function(a){if(Event.isLeftClick(a)){var c=Event.element(a);if(!(c.tagName&&(c.tagName=="INPUT"||c.tagName=="SELECT"||c.tagName=="OPTION"||c.tagName=="BUTTON"||c.tagName=="TEXTAREA"))){if(this.element._revert){this.element._revert.cancel();this.element._revert=null}var b=[Event.pointerX(a),Event.pointerY(a)],d=Position.cumulativeOffset(this.element);
this.offset=[0,1].map(function(f){return b[f]-d[f]});Draggables.activate(this);Event.stop(a)}}},startDrag:function(a){this.dragging=true;if(this.options.zindex){this.originalZ=parseInt(Element.getStyle(this.element,"z-index")||0);this.element.style.zIndex=this.options.zindex}if(this.options.ghosting){this._clone=this.element.cloneNode(true);Position.absolutize(this.element);this.element.parentNode.insertBefore(this._clone,this.element)}if(this.options.scroll){this.originalScrollLeft=this.options.scroll.scrollLeft;
this.originalScrollTop=this.options.scroll.scrollTop}Draggables.notify("onStart",this,a);this.options.starteffect&&this.options.starteffect(this.element)},updateDrag:function(a,c){this.dragging||this.startDrag(a);Position.prepare();Droppables.show(c,this.element);Draggables.notify("onDrag",this,a);this.draw(c);this.options.change&&this.options.change(this);if(this.options.scroll){this.stopScrolling();var b=Position.page(this.options.scroll);b[0]+=this.options.scroll.scrollLeft;b[1]+=this.options.scroll.scrollTop;
b.push(b[0]+this.options.scroll.offsetWidth);b.push(b[1]+this.options.scroll.offsetHeight);var d=[0,0];if(c[0]<b[0]+this.options.scrollSensitivity)d[0]=c[0]-(b[0]+this.options.scrollSensitivity);if(c[1]<b[1]+this.options.scrollSensitivity)d[1]=c[1]-(b[1]+this.options.scrollSensitivity);if(c[0]>b[2]-this.options.scrollSensitivity)d[0]=c[0]-(b[2]-this.options.scrollSensitivity);if(c[1]>b[3]-this.options.scrollSensitivity)d[1]=c[1]-(b[3]-this.options.scrollSensitivity);this.startScrolling(d)}navigator.appVersion.indexOf("AppleWebKit")>
0&&window.scrollBy(0,0);Event.stop(a)},finishDrag:function(a,c){this.dragging=false;if(this.options.ghosting){Position.relativize(this.element);Element.remove(this._clone);this._clone=null}c&&Droppables.fire(a,this.element);Draggables.notify("onEnd",this,a);var b=this.options.revert;if(b&&typeof b=="function")b=b(this.element);var d=this.currentDelta();if(b&&this.options.reverteffect)this.options.reverteffect(this.element,d[1]-this.delta[1],d[0]-this.delta[0]);else this.delta=d;if(this.options.zindex)this.element.style.zIndex=
this.originalZ;this.options.endeffect&&this.options.endeffect(this.element);Draggables.deactivate(this);Droppables.reset()},keyPress:function(a){if(a.keyCode==Event.KEY_ESC){this.finishDrag(a,false);Event.stop(a)}},endDrag:function(a){if(this.dragging){this.stopScrolling();this.finishDrag(a,true);Event.stop(a)}},draw:function(a){var c=Position.cumulativeOffset(this.element),b=this.currentDelta();c[0]-=b[0];c[1]-=b[1];if(this.options.scroll){c[0]-=this.options.scroll.scrollLeft-this.originalScrollLeft;
c[1]-=this.options.scroll.scrollTop-this.originalScrollTop}b=[0,1].map(function(f){return a[f]-c[f]-this.offset[f]}.bind(this));if(this.options.snap)b=typeof this.options.snap=="function"?this.options.snap(b[0],b[1]):this.options.snap instanceof Array?b.map(function(f,e){return Math.round(f/this.options.snap[e])*this.options.snap[e]}.bind(this)):b.map(function(f){return Math.round(f/this.options.snap)*this.options.snap}.bind(this));var d=this.element.style;if(!this.options.constraint||this.options.constraint==
"horizontal")d.left=b[0]+"px";if(!this.options.constraint||this.options.constraint=="vertical")d.top=b[1]+"px";if(d.visibility=="hidden")d.visibility=""},stopScrolling:function(){if(this.scrollInterval){clearInterval(this.scrollInterval);this.scrollInterval=null}},startScrolling:function(a){this.scrollSpeed=[a[0]*this.options.scrollSpeed,a[1]*this.options.scrollSpeed];this.lastScrolled=new Date;this.scrollInterval=setInterval(this.scroll.bind(this),10)},scroll:function(){var a=new Date,c=a-this.lastScrolled;
this.lastScrolled=a;this.options.scroll.scrollLeft+=this.scrollSpeed[0]*c/1E3;this.options.scroll.scrollTop+=this.scrollSpeed[1]*c/1E3;Position.prepare();Droppables.show(Draggables._lastPointer,this.element);Draggables.notify("onDrag",this);this.draw(Draggables._lastPointer);this.options.change&&this.options.change(this)}};var SortableObserver=Class.create();
SortableObserver.prototype={initialize:function(a,c){this.element=$(a);this.observer=c;this.lastValue=Sortable.serialize(this.element)},onStart:function(){this.lastValue=Sortable.serialize(this.element)},onEnd:function(){Sortable.unmark();this.lastValue!=Sortable.serialize(this.element)&&this.observer(this.element)}};
var Sortable={sortables:[],options:function(a){a=$(a);return this.sortables.detect(function(c){return c.element==a})},destroy:function(a){a=$(a);this.sortables.findAll(function(c){return c.element==a}).each(function(c){Draggables.removeObserver(c.element);c.droppables.each(function(b){Droppables.remove(b)});c.draggables.invoke("destroy")});this.sortables=this.sortables.reject(function(c){return c.element==a})},create:function(a,c){a=$(a);var b=Object.extend({element:a,tag:"li",dropOnEmpty:false,tree:false,
overlap:"vertical",constraint:"vertical",containment:a,handle:false,only:false,hoverclass:null,ghosting:false,scroll:false,format:/^[^_]*_(.*)$/,onChange:Prototype.emptyFunction,onUpdate:Prototype.emptyFunction},c||{});this.destroy(a);var d={revert:true,scroll:b.scroll,ghosting:b.ghosting,constraint:b.constraint,handle:b.handle};if(b.starteffect)d.starteffect=b.starteffect;if(b.reverteffect)d.reverteffect=b.reverteffect;else if(b.ghosting)d.reverteffect=function(e){e.style.top=0;e.style.left=0};if(b.endeffect)d.endeffect=
b.endeffect;if(b.zindex)d.zindex=b.zindex;var f={overlap:b.overlap,containment:b.containment,hoverclass:b.hoverclass,onHover:Sortable.onHover,greedy:!b.dropOnEmpty};Element.cleanWhitespace(a);b.draggables=[];b.droppables=[];if(b.dropOnEmpty){Droppables.add(a,{containment:b.containment,onHover:Sortable.onEmptyHover,greedy:false});b.droppables.push(a)}(this.findElements(a,b)||[]).each(function(e){var g=b.handle?Element.childrenWithClassName(e,b.handle)[0]:e;b.draggables.push(new Draggable(e,Object.extend(d,
{handle:g})));Droppables.add(e,f);b.droppables.push(e)});this.sortables.push(b);Draggables.addObserver(new SortableObserver(a,b.onUpdate))},findElements:function(a,c){if(!a.hasChildNodes())return null;var b=[];$A(a.childNodes).each(function(d){if(d.tagName&&d.tagName.toUpperCase()==c.tag.toUpperCase()&&(!c.only||Element.hasClassName(d,c.only)))b.push(d);if(c.tree)(d=this.findElements(d,c))&&b.push(d)});return b.length>0?b.flatten():null},onHover:function(a,c,b){if(b>0.5){Sortable.mark(c,"before");
if(c.previousSibling!=a){b=a.parentNode;a.style.visibility="hidden";c.parentNode.insertBefore(a,c);c.parentNode!=b&&Sortable.options(b).onChange(a);Sortable.options(c.parentNode).onChange(a)}}else{Sortable.mark(c,"after");var d=c.nextSibling||null;if(d!=a){b=a.parentNode;a.style.visibility="hidden";c.parentNode.insertBefore(a,d);c.parentNode!=b&&Sortable.options(b).onChange(a);Sortable.options(c.parentNode).onChange(a)}}},onEmptyHover:function(a,c){if(a.parentNode!=c){var b=a.parentNode;c.appendChild(a);
Sortable.options(b).onChange(a);Sortable.options(c).onChange(a)}},unmark:function(){Sortable._marker&&Element.hide(Sortable._marker)},mark:function(a,c){var b=Sortable.options(a.parentNode);if(!(b&&!b.ghosting)){if(!Sortable._marker){Sortable._marker=$("dropmarker")||document.createElement("DIV");Element.hide(Sortable._marker);Element.addClassName(Sortable._marker,"dropmarker");Sortable._marker.style.position="absolute";document.getElementsByTagName("body").item(0).appendChild(Sortable._marker)}var d=
Position.cumulativeOffset(a);Sortable._marker.style.left=d[0]+"px";Sortable._marker.style.top=d[1]+"px";if(c=="after")if(b.overlap=="horizontal")Sortable._marker.style.left=d[0]+a.clientWidth+"px";else Sortable._marker.style.top=d[1]+a.clientHeight+"px";Element.show(Sortable._marker)}},sequence:function(a,c){a=$(a);var b=Object.extend(this.options(a),c||{});return $(this.findElements(a,b)||[]).map(function(d){return d.id.match(b.format)?d.id.match(b.format)[1]:""})},setSequence:function(a,c,b){a=
$(a);var d=Object.extend(this.options(a),b||{}),f={};this.findElements(a,d).each(function(e){if(e.id.match(d.format))f[e.id.match(d.format)[1]]=[e,e.parentNode];e.parentNode.removeChild(e)});c.each(function(e){var g=f[e];if(g){g[1].appendChild(g[0]);delete f[e]}})},serialize:function(a,c){a=$(a);var b=encodeURIComponent(c&&c.name?c.name:a.id);return Sortable.sequence(a,c).map(function(d){return b+"[]="+encodeURIComponent(d)}).join("&")}};