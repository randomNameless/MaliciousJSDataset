/*! For license information please see common-de239c91.dee9dd5289c3d5fb4dae.js.LICENSE.txt */
"use strict";(self.webpackChunk_vzmi_finance_cosaic=self.webpackChunk_vzmi_finance_cosaic||[]).push([[9503],{1772:(e,t,r)=>{var a=r(4603);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s,l;s="undefined"!=typeof window?window:r.g,(l=void 0!==a.mE?a.mE:s.CIQ).Marker||(l.ChartEngine.helpersToRegister.push((function(e){e.markerHelper={classMap:{},domMarkers:[],visibleCanvasMarkers:[],highlighted:[],placementMap:{},groupMap:{},fieldPanelMap:{}}})),l.ChartEngine.prototype.addToMarkerMapping=function(e){this.removeFromHolder(e);const t=this.panels[e.params.panelName];if(!t)return;e.chart=t.chart;let r=this.markerHelper.classMap[e.className];r||(r=this.markerHelper.classMap[e.className]={}),r[e.params.panelName]||(r[e.params.panelName]=[]),r[e.params.panelName].push(e),this.markerHelper.classMap[e.className]=r;const{label:a}=e.params;this.markers[a]||(this.markers[a]=[]),this.markers[a].push(e)},l.ChartEngine.prototype.addToHolder=function(e){const t=this.panels[e.params.panelName];if(!t)return;let r=e.params,a=e.node,i=e.stxNodeCreator;i&&i.prepareForHolder&&(a=i.prepareForHolder(e)),r.chartContainer?this.container.appendChild(e.node):r.includeAxis?t.holder.appendChild(e.node):t.subholder.appendChild(a),e.chart=t.chart,i&&i.addToHolder&&i.addToHolder(e),i&&i.expand&&(i.node.params.pinnable&&e.makePinnable&&e.makePinnable(),l.Marker.initializeScrollBehavior(i),i.expansionHolder&&l.Marker.initializeScrollBehavior({expand:i.expansionHolder})),"CIQ.Marker.Group"!==e.className&&this.updateGroupMap()},l.ChartEngine.prototype.getMarkerArray=function(e,t){const r=[];for(let a in this.markers)for(let i=0;i<this.markers[a].length;i++){const o=this.markers[a][i];"panelName"==e?o.params.panelName==t&&r.push(o):"label"==e?a==t&&r.push(o):"field"==e?o.params.field===t&&r.push(o):"all"==e&&r.push(o)}return r},l.ChartEngine.prototype.removeFromHolder=function(e){e.node.remove();const t=this.markers[e.params.label];if(!t)return;for(let a=0;a<t.length;a++)if(t[a]===e){t.splice(a,1);break}const r=this.markerHelper.classMap[e.className];r&&Object.entries(r).forEach((([t,a])=>{const i=a.indexOf(e);i>-1&&a.splice(i,1),a.length||delete r[t]})),"CIQ.Marker.Group"!==e.className&&this.updateGroupMap()},l.ChartEngine.prototype.moveMarkers=function(e,t,r){if((r||this.getMarkerArray("panelName",e)).forEach((e=>{e instanceof l.Marker.Group||(e.params.panelName=t,r&&(this.addToMarkerMapping(e),e.stxNodeCreator&&e.stxNodeCreator.isCanvasMarker&&e.stxNodeCreator.deferAttach||(this.addToHolder(e),"PinnedTooltip"==e.stxNodeCreator.nodeType&&e.makePinnable&&e.makePinnable())))})),!r){for(let r in this.markerHelper.classMap){const a=this.markerHelper.classMap[r],i=a[e];i&&(a[t]=i,delete a[e])}this.updateGroupMap()}},l.ChartEngine.prototype.establishMarkerTicks=function(){this.getMarkerArray("all").forEach((e=>this.setMarkerTick(e))),this.updateGroupMap()},l.ChartEngine.prototype.futureTickIfDisplayed=function(e){var t=e.chart;if(!(t.dataSet.length<1)){var r=t.xaxis[t.xaxis.length-1].DT;if(r=new Date(r.getTime()-6e4*this.timeZoneOffset),!(e.params.x>r))for(var a,i,o=t.maxTicks-t.dataSegment.length,n=t.dataSet.length+o,s=new Date(+t.dataSet[t.dataSet.length-1].DT),l=this.standardMarketIterator(s,null,t),p=e.params.x.getTime(),d=t.dataSet.length;d<n;d++){if(a=s.getTime(),(i=(s=l.next()).getTime())==p)return void(e.tick=d);if(i>p&&a<p)return void(e.tick=Math.max(d-1,0))}}},l.ChartEngine.prototype.setMarkerTick=function(e){var t=e.chart||this.chart;if("master"==e.params.xPositioner&&e.params.x)e.tick=Math.floor(e.params.x/this.layout.periodicity);else if("tick"==e.params.xPositioner&&e.params.x)e.tick=e.params.x;else if("date"==e.params.xPositioner&&e.params.x){for(var r,a,i=e.params.x.getTime(),o=0;o<t.dataSet.length;o++){if(r=a=t.dataSet[o].DT.getTime(),o>0&&(r=t.dataSet[o-1].DT.getTime()),a==i)return void(e.tick=o);if(a>i&&r<i)return void(e.tick=Math.max(o-1,0));if(i<a)return void(e.tick=null)}if(t.dataSet.length<1)return;new Date(+t.dataSet[o-1].DT).getTime()<i&&(e.params.future=!0),e.tick=null}},l.ChartEngine.prototype.updateGroupMap=function(){const e=this.getMarkerArray("all"),{groupMap:t}=this.markerHelper;Object.values(t).forEach((e=>{e.groupMarker&&(e.groupMarker.savedMarkers=e.markers),e.markers=[]})),e.forEach((e=>{let{className:r,tick:a}=e,{yPositioner:i,xPositioner:o,panelName:n,x:s,label:p,datum:d,groupable:c,field:h}=e.params;if(!1===c)return;if("CIQ.Marker.Group"==r)return;if("CIQ.Marker.SignalIQ"==r)return;!s&&d&&d.startDate&&(s=d.startDate);const{node:u}=e.stxNodeCreator||{},m=l.Marker.TimeSpanEvent&&e instanceof l.Marker.TimeSpanEvent;if(!u||!u.params||!u.params.type||!this.groupableMarkerTypes.includes(u.params.type)||"trade"==u.params.category&&!m)return;if(!n||!i||!a||!s||e instanceof l.Marker.Group)return;const f=i.includes("_lane")||l.Marker.TimeSpanEvent&&e instanceof l.Marker.TimeSpanEvent,g=i+"|"+n+(f?"-"+p:"")+(h?"-"+h:"")+"-"+a;void 0===t[g]&&(t[g]={yPositioner:i,xPositioner:o,panelName:n,className:r,field:h,x:s,tick:a,groupKey:g,groupMarker:null,markers:[]}),e.groupKey=g,e.hidden=!1,t[g].markers.push(e)}));for(let r in t){let e=t[r];if(e.markers.length>1){if(e.markers.forEach((e=>e.hidden=!0)),e.groupMarker)e.groupMarker.groupKey=r;else{const t={stx:this,panelName:e.panelName,yPositioner:e.yPositioner,xPositioner:e.xPositioner,x:e.x,field:e.field,groupKey:r,displayStem:!0};e.groupMarker="CIQ.Marker.TimeSpanEvent"==e.className?new l.Marker.TimeSpanEvent.Group(o(o({},t),{},{y:e.markers[0].params.datum.spacingModifier,displayStem:!1})):new l.Marker.Group(t)}const{stxNodeCreator:t}=e.groupMarker,a=this.panels[t.panelName]||this.chart;t.node.chartHeight=a.yAxis.height,t.updateVisual()}else{if(e.groupMarker){let{groupMarker:t}=e;t.stxNodeCreator.groupMarker&&(t.stxNodeCreator.groupMarker.remove(),t.stxNodeCreator.groupMarker=null),t.savedMarkers&&(t.savedMarkers.forEach((e=>e.groupExpansionEl=null)),t.savedMarkers=null),t.remove(),t=null}delete t[r]}}this.markerHelper.groupMap=t},l.ChartEngine.prototype.positionMarkers=function(){var e=this,t=this.chart;if(e.markerHelper){this.markerHelper.placementMap={},this.markerHelper.fieldPanelMap={},this.markerDelay||0===this.markerDelay?this.markerTimeout||(this.markerTimeout=setTimeout(l,this.markerDelay)):l();var r=this.getFirstLastDataRecord(t.dataSegment,"tick"),a=this.getFirstLastDataRecord(t.dataSegment,"tick",!0);if(r&&a){var i=this.getMarkerArray("all");this.markerHelper.visibleCanvasMarkers=[];for(var o=0;o<i.length;o++){var n=i[o],s=n.stxNodeCreator;r.tick<=n.tick&&n.tick<=a.tick?(this.markerHelper.visibleCanvasMarkers.push(n),s&&s.drawMarker&&s.drawMarker(n)):(n.highlight=!1,n.params.box=null,n.attached&&s&&s.expand&&!n.params.pinnedPosition&&(s.expand.style.visibility="hidden")),n.node&&(n.node.style.visibility=n.hidden?"hidden":""),n.groupExpansionEl&&n.stxNodeCreator&&n.stxNodeCreator.expand&&(n.stxNodeCreator.expand.style.visibility=n.hidden?"hidden":""),n.chartMarker&&n.hidden&&(n.chartMarker.remove(),n.chartMarker=null)}}}function l(){if(!e.runPrepend("positionMarkers",arguments)){for(var t in e.markerTimeout=null,e.markerHelper.classMap)for(var r in e.markerHelper.classMap[t]){var a=e.markerHelper.classMap[t][r];a=a.filter((e=>!e.hidden));var i=e.panels[r];if(i&&a.length){var o={stx:e,arr:a,panel:i};o.firstTick=i.chart.dataSet.length-i.chart.scroll,o.lastTick=o.firstTick+i.chart.dataSegment.length;var n=a[0].constructor.placementFunction;n?n(o):e.defaultMarkerPlacement(o)}}e.runAppend("positionMarkers",arguments)}}},l.Marker=l.Marker||function(e){const t=this instanceof l.Marker?this:Object.create(l.Marker.prototype),{stx:r}=e;if(r)return t.className||(t.className="CIQ.Marker"),t.params={xPositioner:"date",yPositioner:e.y||0===e.y?"value":"above_candle",permanent:!1,label:"generic",includeAxis:!1},l.extend(t.params,e),t.params.panelName||Object.defineProperty(t.params,"panelName",{enumerable:!0,get:()=>{const{field:e}=t.params;if(!e)return r.chart.panel.name;let a=r.markerHelper.fieldPanelMap[e];if(a||(a=(r.getPanelByField(e)||r.chart.panel).name,r.markerHelper.fieldPanelMap[e]=a),a!==t.params._panelName){let e=r.markerHelper.classMap[t.className];if(e&&(e=e[t.params._panelName],e&&e.includes(t))){const{isConnected:e}=t.node;r.addToMarkerMapping(t),(e||t.attached)&&r.addToHolder(t)}t.params._panelName=a}return a},set:e=>r.markerHelper.fieldPanelMap[t.params.field]=e}),t.params.node||(t.params.node=document.createElement("DIV")),l.derivedFrom(t.params.node,l.Marker.NodeCreator)?(t.stxNodeCreator=t.params.node,t.node=t.stxNodeCreator.node):t.node=t.params.node,r.setMarkerTick(t),r.addToMarkerMapping(t),t.stxNodeCreator&&t.stxNodeCreator.deferAttach||r.addToHolder(t),t.stxNodeCreator&&t.stxNodeCreator.drawMarker&&t.stxNodeCreator.drawMarker(t),t;console.log("Marker created without specifying stx")},l.Marker.prototype.remove=function(){this.params.stx.removeFromHolder(this),this.stxNodeCreator&&this.stxNodeCreator.remove&&this.stxNodeCreator.remove(this)},l.Marker.prototype.click=function(e){if(this.hidden)return;"number"==typeof arguments[0]&&(e={cx:arguments[0],cy:arguments[1],panel:arguments[3]});let{cx:t,cy:r,panel:a}=e;if(this.params.stx){var i=this.params.node;i.click&&i.click({cx:t,cy:r,marker:this,panel:a})}},l.Marker.prototype.doubleClick=function({cx:e,cy:t,panel:r}){return!1},l.Marker.prototype.render=function(){var e=[this],t={stx:this.params.stx,arr:e,panel:this.params.stx.panels[this.params.panelName],showClass:this.showClass};this.constructor.placementFunction(t)},l.Marker.prototype.getMarkerGroup=function(){if(!this.groupKey||!this.params.stx.markerHelper.groupMap)return;let e=this.params.stx.markerHelper.groupMap[this.groupKey];return e?e.groupMarker:void 0},l.Marker.prototype.makeDraggable=function(e){const{stx:t}=this.params,r=t.panels[this.params.panelName];e||!1===e||(e=!0),!0===e&&(e=r.subholder);let a=this.stxNodeCreator?this.stxNodeCreator.expand||this.stxNodeCreator.node:this.node;if(this.groupExpansionEl&&(a=this.groupExpansionEl.querySelector(".stx-marker-expand")),a.draggable=!!e,a.removeEventListener("dragstart",this.dragListener),!e)return t.undoModal(a),void(a.style.cursor="");t.makeModal(a),a.style.cursor="grab";const i=r=>{r.target===a&&(l.Marker.beingDragged={marker:this,offset:{x:r.offsetX,y:r.offsetY},node:r.target,dropzone:e},a.classList.add("being-dragged"),t.draw(),r.dataTransfer.effectAllowed="move")},o=r=>{const{beingDragged:a}=l.Marker;if(!a)return;const{dropzone:i,marker:o,offset:n}=a;if(i!==e)return void(r.dataTransfer.dropEffect="none");r.preventDefault();const s=t.backOutX(r.clientX-n.x),p=t.backOutY(r.clientY-n.y),{dragOrigin:d}=o;o.dragOrigin={x:s,y:p},d&&d.x===s&&d.y===p||t.draw(),r.dataTransfer.dropEffect="move"},n=r=>{const{beingDragged:a}=l.Marker;if(!a)return;const{dropzone:i,marker:o,node:n}=a;i===e&&(n.classList.remove("being-dragged"),delete o.dragOrigin,o.store&&o.store(),l.Marker.beingDragged=null,n.closest(".ciq-expansion-holder")&&o.getMarkerGroup().node.querySelector(".ciq-pinned-holder").appendChild(n.parentNode),t.draw())},s=a=>{const{beingDragged:i}=l.Marker;if(!i)return;const{dropzone:o,marker:n,node:s}=i;if(o!==e)return;const p=n.getMarkerGroup(),{field:d,xPositioner:c,yPositioner:h}=n.params,u=n.params.yAxis||t.getYAxisByField(r,d)||r.yAxis,m=l.elementDimensions(s,{margin:!0,border:!0,padding:!0}),f=t.backOutX(a.clientX)-i.offset.x,g=t.backOutY(a.clientY)-i.offset.y,k={},x=s===n.node||!n.node.parentElement;if("none"===c||!c&&void 0===n.params.x)s.style.left=f-t.chart.left+"px";else{const e=x&&!p?m:l.elementDimensions((p||n).node,{margin:!0,border:!0,padding:!0});k.candleOffset=(f+(x?1:-1)*e.width/2-t.pixelFromTick(n.tick))/t.layout.candleWidth}"none"===h||!h&&void 0===n.params.y?s.style.bottom=u.height-g-m.height+"px":k.y=t.valueFromPixel(g+m.height/2,r,u),n.params.pinnedPosition=k};this.dragListener=i,a.addEventListener("dragstart",i),e.dropzoneForPinnedMarkers||(e.addEventListener("dragover",o),e.addEventListener("dragend",n),e.addEventListener("drop",s),e.dropzoneForPinnedMarkers=!0)},l.Marker.removeByLabel=function(e,t){for(var r=e.getMarkerArray("label",t),a=0;a<r.length;a++){var i=r[a];e.removeFromHolder(i),i.stxNodeCreator&&i.stxNodeCreator.remove&&i.stxNodeCreator.remove(i)}e.draw()},l.Marker.positionContentVerticalAndHorizontal=function(e,t){const r=e.querySelector(".stx-marker-expand"),a=e.querySelector(".ciq-expansion-holder"),i=(e,t)=>{if(!t.parentNode)return;let{offsetHeight:r,style:a}=e;a.bottom=a.top="";let i=getComputedStyle(e),{bottom:o}=i,n=parseInt(o,10),s=t.offsetTop;t.classList.contains("callout")||(s-=n+r-t.offsetHeight);let l=t.parentNode.offsetHeight;t.offsetTop<=l?s>l-r&&(a.top=l-t.offsetTop-r+"px",a.bottom="auto"):a.top=l+"px",t.offsetTop+t.offsetHeight>=0?s<0&&(a.top=-t.offsetTop+"px",a.bottom="auto"):a.bottom="0px"};if(!r||!r.isConnected)return;if(r.style.bottom=r.style.top="",!(e.classList.contains("highlight")&&"hidden"!==r.style.visibility||a&&"hidden"!==a.style.visibility||t))return;i(r,e),a&&(e.chartHeight&&(a.style.maxHeight=e.chartHeight-10+"px"),a.__ps&&a.__ps.update(),i(a,e)),((e,t,r)=>{if(!t.parentNode)return;const a=e.style;a.left=a.right="",r&&(r.style.left=r.style.right="");let i=getComputedStyle(e).left,o=t.offsetLeft+parseInt(i,10),n=t.offsetLeft-parseInt(i,10),s=t.parentNode.offsetWidth;o+e.offsetWidth>s?(a.right=i,a.left="auto",r&&(r.style.right=e.offsetWidth+parseInt(i,10)+"px")):r&&n<r.offsetWidth?(r.style.right="auto",r.style.left=e.offsetWidth+parseInt(i,10)+"px"):r&&(r.style.right=i)})(r,e,a);const o=r?r.closest(".stx-subholder"):null;e.classList.contains("group")&&o&&o.offsetHeight<200&&(r.style.maxHeight=o.offsetHeight-20+"px")},l.Marker.initializeScrollBehavior=function(e){const{expand:t}=e;if(!t||t.scrollInitialized)return;if(!t.querySelector(".marker_content")){const e=document.createElement("div");e.className="marker_content",[...t.children].forEach((t=>e.appendChild(t))),t.appendChild(e)}t.addEventListener(l.wheelEvent,(e=>e.stopPropagation()),{passive:!1}),t.addEventListener("touchmove",(e=>e.stopPropagation()),{passive:!1});const{scrollbarStyling:r}=l.UI||{};r?r.refresh(t):t.style.overflowY="scroll",t.scrollInitialized=!0},l.ChartEngine.prototype.getBarBounds=function(e,t){var r,a,i,o,n=this.layout.aggregationType;return r=t||"pandf"!=n?{high:e.High,low:e.Low}:{high:Math.max(e.pfOpen,e.pfClose),low:Math.min(e.pfOpen,e.pfClose)},e.markerHigh&&(r.high=e.markerHigh),e.markerLow&&(r.low=e.markerLow),void 0===e.Open&&(a=e.Close),void 0===e.High&&(i=Math.max(e.Open||a,e.Close)),void 0===e.Low&&(o=Math.min(e.Open||a,e.Close)),r.high||0===r.high||(r.high=i),r.low||0===r.low||(r.low=o),r},l.ChartEngine.prototype.defaultMarkerPlacement=function(e){var t=e.panel,r=t.chart,a=e.stx,i={};Object.values(a.chart.series).forEach((function(e){i[e.parameters.symbol]=l.Renderer.produce(e.parameters.chartType,{}).highLowBars}));for(var o=0;o<e.arr.length;o++){var n=e.arr[o],s=n.params;if(s.pinnedPosition||!s.box){var p=n.node,d=n.stxNodeCreator?n.stxNodeCreator.expand:p.querySelector(".stx-marker-expand");n.clientWidth||(n.clientWidth=p.clientWidth),n.clientHeight||(n.clientHeight=p.clientHeight);var c=null,h=s.xPositioner,u=s.yPositioner,m=s.pinnedPosition||{},f=d&&s.pinnedPosition||s.expandPosition,g=!d&&m.candleOffset||s.candleOffset,k=s.field,x=s.yAxis||this.getYAxisByField(t,k)||t.yAxis,y=n.tick,M=r.dataSet,v=n.clientWidth,C=k?i[k]:a.chart.highLowBars,b=r.defaultPlotField;if(b&&!C||(b="Close"),"none"!=h){if("bar"==h&&s.x){if(s.x<r.xaxis.length){var N=r.xaxis[s.x];N&&(c=N.data)}l.efficientDOMUpdate(p.style,"left",Math.round(a.pixelFromBar(s.x,r)-v/2)+1+"px")}else{if(!y&&0!==y){if(!(s.future&&r.scroll<r.maxTicks)){p.style.left="-1000px";continue}if(a.futureTickIfDisplayed(n),!(y=n.tick)&&0!==y){p.style.left="-1000px";continue}}y<M.length&&(c=M[y]);var E=Math.round(a.pixelFromTick(y,r)-r.left-v/2);l.efficientDOMUpdate(p.style,"left",E+"px"),n.leftpx=E;var T=E+v,H=50;if(d&&!d.style.visibility&&p.classList.contains("highlight")){var S=d.getBoundingClientRect();if(E=Math.min(E,S.left),T=Math.max(T,S.right),f){var w=(f.candleOffset||0)*this.layout.candleWidth;H=f.candleOffset<0?-w:w}}if(E>r.right+H||T<r.left-50)continue}c||(c=M[M.length-1])}else if(u.indexOf("candle")>-1){var P=getComputedStyle(p).left;if(P){var L=a.barFromPixel(parseInt(P,10),r);L>=0&&((c=r.xaxis[L].data)||(c=M[M.length-1]))}}for(var O=[g,(f||{}).candleOffset],D=0;D<O.length;D++){var F=O[D];(F||0===F)&&l.efficientDOMUpdate((D?d:p).style,"left",(p.isConnected?l.stripPX(getComputedStyle(p)[D?"width":"left"]):a.pixelFromTick(y)-(d||p).offsetWidth/2)+F*this.layout.candleWidth+"px")}l.efficientDOMUpdate(p.style,"top","auto");var G,I=!d&&m.y||s.y,_=n.clientHeight,A=0;if("none"!=u){var j=u.indexOf("_lane")>-1,B=a.markerHelper.placementMap,q=u+"|"+t.name+"|"+k;j&&void 0===B[q]&&(B[q]=2);var z=q+"-"+(j?n.params.label:y),W=s.chartContainer?a.height:x.bottom,K=0;void 0===B[z]&&(B[z]=j?B[q]:0,j&&(B[q]+=_+2)),A=B[z],j||(B[z]+=_);var V=a.pixelFromPrice.bind(a),Y="value"==u&&(I||0===I);if(!Y&&x===a.chart.yAxis&&c.transform&&k in c.transform&&(c=c.transform,V=a.pixelFromTransformedValue.bind(a)),c&&k&&(c=c[k]),"number"==typeof c&&((c={Close:c})[b]=c.Close,C=!1),Y?K=Math.round(W-V(I,t,x)-_/2)+"px":"below_candle"!=u&&"under_candle"!=u||!c?"on_candle"==u&&c?(G=c[b],C&&(G=((G=a.getBarBounds(c,!!k)).high+G.low)/2),K=Math.round(W-V(G,t,x)-_/2-A)+"px"):"top"==u||"top_lane"==u?K=Math.round(W-_-A-t.top)+"px":"bottom"==u||"bottom_lane"==u?K=Math.round(A)+"px":c&&(G=c[b],C&&(G=a.getBarBounds(c,!!k)[x.flipped?"low":"high"]),K=(Math.round(W-V(G,t,x)+A)||0)+"px"):(G=c[b],C&&(G=a.getBarBounds(c,!!k)[x.flipped?"high":"low"]),K=Math.round(W-V(G,t,x)-_-A)+"px"),l.efficientDOMUpdate(p.style,"bottom",K),f&&(f.y||0===f.y)){var U=Math.round(W-a.pixelFromPrice(f.y,t,x)-d.clientHeight/2-(p.isConnected?l.stripPX(p.style.bottom):0))+"px";l.efficientDOMUpdate(d.style,"top","auto"),l.efficientDOMUpdate(d.style,"bottom",U)}else l.Marker.positionContentVerticalAndHorizontal(p)}n.position&&n.position()}}},l.Marker.NodeCreator=function(){},l.Marker.NodeCreator.toNode=function(){return this.node},l.Marker.Simple=function(e){const t=this.node=document.createElement("div");t.params=e,t.className="stx-marker",t.classList.add(e.type),e.category&&t.classList.add(e.category);const r=l.newChild(t,"div","stx-visual");let a;if(l.newChild(t,"div","stx-stem"),l.ensureDefaults(t.params,{pinnable:this.pinnable}),"callout"==e.type){t.params.pinnable=!1,a=document.createElement("div"),a.classList.add("stx-marker-expand"),r.appendChild(a);const i=l.newChild(a,"div","stx-marker-content");l.newChild(i,"h4",null,e.headline);let o=l.newChild(i,"div");o.classList.add("pwrap"),l.newChild(o,"p",null,e.story)}else a=l.newChild(t,"div","stx-marker-expand"),l.newChild(a,"h4",null,e.headline),l.newChild(a,"p",null,e.story),t.params.pinnable||l.safeClickTouch(a,(()=>{this.remove({node:t})}));l.safeClickTouch(r,(()=>this.click({marker:{node:t}}))),this.nodeType="Simple",this.expand=a},l.inheritsFrom(l.Marker.Simple,l.Marker.NodeCreator,!1),l.Marker.Simple.prototype.click=function(e){const{node:t}=e.marker;t.classList.toggle("highlight");let r=0;const a=setInterval((()=>{l.Marker.positionContentVerticalAndHorizontal(t,!0),r++,r>50&&clearInterval(a)}),10);t.addEventListener("transitionend",(()=>{const e=t.querySelector(".ps");e&&l.UI.scrollbarStyling&&l.UI.scrollbarStyling.refresh(e),clearInterval(a)}))},l.Marker.Simple.prototype.remove=function(e){e.node.classList.remove("highlight")},l.Marker.Group=function(e){this.stx=e.stx,this.className="CIQ.Marker.Group",this.groupKey=e.groupKey,l.Marker.call(this,o(o({},e),{},{label:"group",node:this.createNode({stx:this.stx,groupMap:this.stx.markerHelper.groupMap[this.groupKey],type:"circle",category:"group",displayLabel:"#",displayCategory:!1,displayStem:e.displayStem,noInteraction:e.noInteraction,panelName:e.panelName,color:"#003399"})}))},l.inheritsFrom(l.Marker.Group,l.Marker,!1),l.Marker.Group.prototype.getMarkersInGroup=function(){return(this.stx.markerHelper.groupMap[this.groupKey]||{}).markers||[]},l.Marker.Group.prototype.createNode=function(e){return new l.Marker.GroupNode(e)},l.Marker.Group.prototype.remove=function(){this.getMarkersInGroup().forEach((e=>{e.groupExpansionEl=null})),l.Marker.prototype.remove.call(this)},l.Marker.GroupNode=function(e){const t=this.node=document.createElement("div");t.params=e,t.className="stx-marker",t.classList.add(e.type),t.classList.add("group");const r=l.newChild(t,"div","stx-visual");e.displayStem&&l.newChild(t,"div","stx-stem");const a=l.newChild(t,"div","stx-marker-expand");l.newChild(a,"ul","ciq-marker-list"),e.stx.makeModal(t),l.safeClickTouch(a,(function(e){t.classList.toggle("highlight")})),l.safeClickTouch(r,this.handleClick.bind(this)),this.expansionHolder=l.newChild(t,"div","ciq-expansion-holder"),this.pinnedExpansionHolder=l.newChild(t,"div","ciq-pinned-holder"),this.nodeType="Group",this.visual=r,this.expand=a,this.groupMap=e.groupMap,this.noInteraction=e.noInteraction,this.stx=e.stx},l.inheritsFrom(l.Marker.GroupNode,l.Marker.NodeCreator,!1),l.Marker.GroupNode.prototype.handleClick=function(e){if(this.noInteraction)return;const{node:t}=this;this.updateMarkerList(),t.classList.toggle("highlight"),l.Marker.positionContentVerticalAndHorizontal(t,!0)},l.Marker.GroupNode.prototype.updateVisual=function(){const{markers:e}=this.groupMap;let t=this.getGroupMarkerBackgroundColor();this.visual.style.backgroundColor=t,this.visual.style.color=l.chooseForegroundColor(t),this.visual.innerHTML=e.length,this.stx.pinnedMarkers&&this.stx.pinnedMarkers.list&&this.stx.pinnedMarkers.list.forEach((e=>{const{marker:t}=e;t.groupKey===this.groupMap.groupKey&&(t.groupExpansionEl&&!t.groupExpansionEl.isConnected&&(t.groupExpansionEl=null),t.groupExpansionEl||(this.handleMenuClick(t),this.node.classList.remove("highlight")))}))},l.Marker.GroupNode.prototype.getGroupMarkerBackgroundColor=function(){const{stx:e,groupMap:t}=this;let r="",a={};t.markers.sort(this.markerSortFunction).forEach((t=>{let r={};const{type:i,category:o,color:n}=t.stxNodeCreator.node.params;if(t.stxNodeCreator instanceof(l.Marker.Performance||function(){})){const a="stx_marker_"+i+"_"+o;e.styles[a]||l.Marker.Performance.calculateMarkerStyles(e,t,a),r=e.styles[a]}else{let e=t.node.querySelector(".stx-visual");e&&(r=getComputedStyle(e))}let s=n||r.backgroundColor||"#828382";a[s]=++a[s]||1}));const i=Object.values(a),o=Math.max.apply(Math,i);for(let n in a)if(a[n]===o){r=n;break}return r},l.Marker.GroupNode.prototype.markerSortFunction=function(e,t){if(e.params.x instanceof Date&&t.params.x instanceof Date)return t.params.x-e.params.x},l.Marker.GroupNode.prototype.updateMarkerList=function(){const{stx:e}=this,{markers:t}=this.groupMap,r=this.expand.querySelector(".ciq-marker-list");r&&(r.innerHTML="",t.sort(this.markerSortFunction).forEach((t=>{const{datum:a}=t.params,{headline:i,story:o,type:n,category:s,color:p,displayLabel:d}=t.stxNodeCreator.node.params;let c=n||"",h="";d&&(h=e.emojify(d)),a&&a.img&&(h=a.img.outerHTML);let u={};if(t.stxNodeCreator instanceof(l.Marker.Performance||function(){})){const r="stx_marker_"+n+"_"+s;e.styles[r]||l.Marker.Performance.calculateMarkerStyles(e,t,r),u=e.styles[r]}else{let e=t.node.querySelector(".stx-visual");e&&(u=getComputedStyle(e))}let m=p||u.backgroundColor||"#828382";("text"==n||a&&a.img)&&(m="transparent");let f=this.getDateLabel(t);f+=f?"<br>":"";const g=document.createElement("li");o&&o.length&&(g.title=o.length>160?o.slice(0,160)+"...":o),g.innerHTML=`\n\t\t\t\t\t<div class="stx-marker ${c}">\n\t\t\t\t\t\t<div class="stx-visual" style="background-color: ${m};">\n\t\t\t\t\t\t\t${h}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> \n\t\t\t\t\t${f}\n\t\t\t\t\t<span class="ciq-headline">${i}</span>\n\t\t\t\t`,t.groupExpansionEl&&e.uiContext.topNode.contains(t.groupExpansionEl)?g.className="active":t.groupExpansionEl=null,t.groupListEl=g,l.safeClickTouch(g,this.handleMenuClick.bind(this,t)),r.appendChild(g)})))},l.Marker.GroupNode.prototype.getDateLabel=function(e){const{stx:t}=this,{xPositioner:r,x:a}=e.params;if(!a||isNaN(a))return"";let i="tick"==r?t.dateFromTick(a,t.chart,!0):a;return"[object Date]"===Object.prototype.toString.call(i)?l.dateToStr(i,"YYYY/MM/dd hh:mm:ss"):""},l.Marker.GroupNode.prototype.handleMenuClick=function(e,t){if(e.groupExpansionEl)e.dismissClickFn&&e.dismissClickFn.call(e),e.groupExpansionEl.remove(),e.groupExpansionEl=null,this.setExpansionHolderVisibility();else{let t="";const{expand:r,node:a}=e.stxNodeCreator||{};if(r){let e=r.querySelector(".marker_content");t=e?e.innerHTML:r.innerHTML}else a.params&&a.params.story&&(t=`\n\t\t\t\t\t<h4>${a.params.headline}</h4>\n\t\t\t\t\t<p>${a.params.story}</p>\n\t\t\t\t`);if(!t)return;const{pinnedPosition:i}=e.params;let o=i&&void 0!==i.y?this.pinnedExpansionHolder:this.expansionHolder;const n=l.newChild(o,"div","stx-marker "+(a.params.category||""));n.innerHTML=`\n\t\t\t\t<div class="stx-marker-expand">\n\t\t\t\t${t}\n\t\t\t\t</div>\n\t\t\t`,l.safeClickTouch(n,(()=>{e.dismissClickFn&&e.dismissClickFn.call(e),n.remove(),e.groupExpansionEl=null,this.setExpansionHolderVisibility(),this.node.classList.remove("highlight")})),e.groupExpansionEl=n,this.setExpansionHolderVisibility(),e.groupListEl&&e.groupListEl.classList.add("active");const s=l.Marker.TimeSpanEvent&&e instanceof l.Marker.TimeSpanEvent;e.makePinnable&&e.makeDraggable&&!s&&(e.store||e.makePinnable(),e.node.classList.add("highlight"),e.makeDraggable()),l.Marker.initializeScrollBehavior({expand:n.querySelector(".stx-marker-expand")})}this.noInteraction||this.node.classList.toggle("highlight")},l.Marker.GroupNode.prototype.setExpansionHolderVisibility=function(){const{markers:e}=this.groupMap;e.find((e=>!!e.groupExpansionEl))?this.expansionHolder.style.visibility="visible":this.expansionHolder.style.visibility="hidden"})}}]);