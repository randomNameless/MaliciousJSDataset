var _sz=_sz||[];_sz&&_sz.core&&_sz.core._isloaded!=null?_sz.core.warn&&_sz.core.warn("Script requested to load and execute again, this is not desirable and will be blocked"):(_sz.push(["accountid",6285227]),_sz.push(["region","r2"]),_sz.push(["endpoint","global.r2"]),_sz.push(["heatmap",{matches:{permanent:["https://wsdot.wa.gov/construction-planning","https://wsdot.wa.gov/engineering-standards/design-topics/utilities-railroad-agreements/dig-once-broadband-utilities","https://wsdot.wa.gov/travel/commercial-vehicles/maps-tools-commercial-vehicles"],include:[],exclude:[]}}]),_sz=_sz||[],function(w,d,sz,undefined){function process(args){var name=args[0];core.actions[name]===undefined?core.action("set",args):core.action(name,args.slice(1))}var core={curr:window.location.href,ref:d.referrer,esc:function(str){return encodeURIComponent(new String(str).replace(/(\r?\n)+/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/,""))},empty:function(e){return e==undefined||e==null||e==""},isarray:function(arr){return arr==undefined||arr==null?!1:Array&&typeof Array.isArray=="function"?Array.isArray(arr):Object.prototype.toString.call(arr)==="[object Array]"},tag:function(str){return d.getElementsByTagName?d.getElementsByTagName(str):[]},id:function(str){return d.getElementById?d.getElementById(str):!1},clone:function(o){var n={};for(var i in o)o.hasOwnProperty(i)&&(n[i]=o[i]);return n},rnd:function(){return Math.floor(Math.random()*1e5)},txt:function(o){return o.textContent?o.textContent:o.innerText},trim:function(str){return!str||typeof str!="string"?str:typeof str.trim=="function"?str.trim():str.replace(/^\s+|\s+$/gi,"")},uuid:function(){var S4=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()},navtime:function(){var perf=w.performance||w.webkitPerformance||w.mozPerformance||w.msPerformance;return!perf||!perf.timing||perf.timing.navigationStart<1?null:(new Date).getTime()-perf.timing.navigationStart},_isready:!1,_readyhandlers:[],register:function(n,f){f.base=this.actions[n];this.actions[n]=f},actions:{},action:function(n,a){this.actions[n].apply(this.actions,a)},data:[],ready:function(f){if(f===undefined)return this._isready||core.done();this.when(this.ready,f)},queueready:function(f){this._isready&&core.done()?f():this._readyhandlers.push(f)},done:function(){return this._isloaded&&d&&d.body!=null&&(d.readyState=="interactive"||d.readyState=="complete")},_isloaded:!1,_whenTimer:null,when:function(cond,what){var id=this.uuid();cond()?what():setTimeout(function(){core.when(cond,what)},50)},fmt:function(){for(var reg,_a=Array.prototype.slice.call(arguments),s=_a[0],a=_a.slice(1),i=0;i<a.length;i++)reg=new RegExp("\\{"+i+"\\}","gm"),s=s.replace(reg,a[i]);return s},listen:function(e,h){e.addEventListener?e.addEventListener("mousedown",h,!1):e.attachEvent&&e.attachEvent("onmousedown",h)},load:function(src){var szfb=d.createElement("script"),s;szfb.type="text/javascript";szfb.async=!0;szfb.src=src;s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(szfb,s)},global:function(n){return w[n]!==undefined&&w[n]!==null?w[n]:null},_images:[],_idx:0,requesturl:function(p,o){var params=[],val,seenValues,a,paramValue,i,url;o.rnd=sz.core.rnd();for(i in o)if(val=o[i],!this.empty(val))if(this.isarray(val))for(seenValues={},a=0;a<val.length;a++)this.empty(val[a])||(paramValue=this.esc(val[a]),seenValues[paramValue]==null&&(params.push(i+"="+paramValue),seenValues[paramValue]=!0));else params.push(i+"="+this.esc(val));return i=this._idx++,url=p+"?"+params.join("&"),url},request:function(p,o){var url=this.requesturl(p,o);this._images[i]=new Image;this._images[i].src="https://"+url;this.log("Requesting {0}",url)},_logqueue:[],_logshown:!1,log:function(){this._logqueue.push({type:"msg",msg:Array.prototype.slice.call(arguments)});this._logshown&&this.showlog()},warn:function(){this._logqueue.push({type:"warn",msg:Array.prototype.slice.call(arguments)});this._logshown&&this.showlog()},showlog:function(){var dw,s,i,o,_e,_c;for(this._logshown=!0,dw=d.getElementById("szdebugarea"),dw&&dw.parentNode.removeChild(dw),s="",i=0;i<this._logqueue.length;i++)o=this._logqueue[i],s+='<p style="padding:8px;margin:0;margin-bottom:8px;background:#'+(o.type=="msg"?"FFF7C9":"ca0000;color:white")+';">'+(o.type=="warn"?"<b>Warning:<\/b> ":"")+decodeURIComponent(new String(this.fmt.apply(this,o.msg)).replace(/(&[a-z_]+=|\?)/g,"<br />&nbsp;&nbsp;&nbsp;$1"))+"<\/p>";_c=d.createElement("a");_c.href="#";_c.innerHTML="× Close";_c.style.cssText="display:block;float:right;color:black;text-decoration:none;";_c.onclick=function(){return _e.parentNode.removeChild(_e),core._logshown=!1,!1};_e=d.createElement("div");_e.style.cssText="position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999";_e.innerHTML=s;_e.id="szdebugarea";_e.appendChild(_c);d.body.appendChild(_e)},cookie:function(n,v,o){var expires,date,cookiev,cookies,i,cookie;if(typeof v!="undefined"){o=o||{path:"/"};v===null&&(v="",o.expires=-1);expires="";o.expires&&(typeof o.expires=="number"||o.expires.toUTCString)&&(typeof o.expires=="number"?(date=new Date,date.setTime(date.getTime()+o.expires*864e5)):date=o.expires,expires="; expires="+date.toUTCString());var path=o.path?"; path="+o.path:"; path=/",domain=o.domain?"; domain="+o.domain:"",secure=o.secure?"; secure":"",sameSite=o.sameSite?"; samesite="+o.sameSite:"; samesite=lax";d.cookie=[n,"=",encodeURIComponent(v),expires,path,domain,secure,sameSite,].join("")}else{if(cookiev=null,d.cookie&&d.cookie!=="")for(cookies=d.cookie.split(";"),i=0;i<cookies.length;i++)if(cookie=cookies[i].replace(/^\s+|\s+$/g,""),cookie.substring(0,n.length+1)==n+"="){cookiev=decodeURIComponent(cookie.substring(n.length+1));break}return cookiev}}},data,orig,i;for(core.register("set",function(name,val){for(var parts=name.split("."),prop=sz,key;parts.length>0;){if(key=parts.shift(),prop[key]===undefined){prop=0;break}if(parts.length==0)break;prop=prop[key]}prop&&key?prop[key]=val:core.warn("No property named {0}",name)}),core.register("register",function(args){core.register(args[0],args[1])}),core.register("custom",function(f,name){var msg="Running custom function";name&&name!=""&&(msg+=": <strong>"+name+"<\/strong>");core.log(msg);try{f()}catch(e){core.warn("Custom function failed! "+e.message)}}),core.register("setcurr",function(v){core.curr=v}),core.register("setref",function(v){core.ref=v}),core.register("loaded",function(){core._isloaded=!0}),core.register("showlog",function(){core.showlog()}),data=[],orig=[],i=0;i<sz.length;i++)data.push(sz[i]),orig.push(sz[i]);core.data=data;core.ready(function(){for(var i=0;i<orig.length;i++)process(orig[i]);while(core._readyhandlers.length>0)core._readyhandlers.shift().call();core._isready=!0});sz.push=function(args){core.data.push(args);core.ready()?process(args):core._readyhandlers.push(function(){process(args)})};sz.core=core}(window,document,_sz),function(w,d,sz,undefined){function request(path,o,callback){sz.analytics.getsessid(function(sessId){if(typeof sessId=="object")for(var key in sessId)sessId.hasOwnProperty(key)&&(o[key]=sessId[key]);else o.prev=sessId;o.rt=o.rt!==null?sz.core.navtime():null;sz.core.request(path,o);callback&&typeof callback=="function"&&callback()})}function registeronclick(except){if(sz.analytics.config.cantrack&&!sz.analytics.state.onclickattached&&sz.analytics.config.noonclick!==!0){var exclude=function(l){try{if(l.href==null||l.href==""||l[sz.analytics.config.onClickKey]===!0||l.href.toLowerCase().indexOf("javascript:")==0||l.href.indexOf("#")==0||l.href.charAt(l.href.length-1)=="#"||l.href==w.location.href||l.href.indexOf(w.location.href+"#")==0)return!0;if(sz.core.isarray(except)!==!0)return!1;for(var i=0;i<except.length;i++)if(l.href.indexOf(except[i])!==-1)return!0;return!1}catch(err){return!0}},anchors=sz.core.tag("a"),areas=sz.core.tag("area"),attachonclick=function(links){for(var l,i=0;i<links.length;i++)(l=links[i],exclude(l))||function(link){sz.core.listen(link,function(){request(sz.analytics.endpoint.fullpath(),{accountid:opts.accountid,ourl:link.href,ref:w.location.href,autoonclick:1,ckl:opts.ckl,rt:null})});l[sz.analytics.config.onClickKey]=!0}(l)};sz.core.log("Attaching onclick handlers");attachonclick(anchors);attachonclick(areas);sz.analytics.state.onclickattached=!0}}function eventparams(category,action,label){return{aid:opts.accountid,url:opts.url,luid:opts.luid,c:category,a:action,l:label,cid:opts.cid,addcid:opts.addcid,ckl:opts.ckl,o:++eventorder,d:Math.round((new Date-sz.analytics.state.requestTime)/1e3)}}function searchparams(searchTerm,results){var searchOpts={aid:opts.accountid,url:opts.url,luid:opts.luid,search_term:searchTerm,cid:opts.cid,addcid:opts.addcid,ckl:opts.ckl,o:++searchorder,d:Math.round((new Date-sz.analytics.state.requestTime)/1e3)};return results!=null&&(searchOpts.results=results),searchOpts}function feedbackparams(feedbackId,feedbackUid,rating,comment){var feedbackOpts={aid:opts.accountid,url:opts.url,title:opts.title,luid:opts.luid,feedback_id:feedbackId,sluid:feedbackUid,cid:opts.cid,addcid:opts.addcid,ckl:opts.ckl,o:++feedbackorder,d:Math.round((new Date-sz.analytics.state.requestTime)/1e3)};return rating!=null&&typeof rating=="number"&&(feedbackOpts.rating=rating),comment&&(feedbackOpts.comment=comment),feedbackOpts}function hasdonottrack(){var dnt=window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack;return dnt=="yes"||dnt=="1"||window.external&&window.external.msTrackingProtectionEnabled&&window.external.msTrackingProtectionEnabled()}function whenTracked(callback){sz.core.when(function(){return sz.analytics.state.tracked},callback)}var registry={afterPageviewTracked:"after_pageview_tracked",attachOnClick:"attachonclick",breadcrumbs:"breadcrumbs",dump:"dump",endpoint:"endpoint",event:"event",feedbackResponse:"feedback_response",feedbackView:"feedback_view",groupSelector:"groupselector",invokeTracking:"invoketracking",kvp:"kvp",metaGroupName:"metagroupname",noOnClick:"noonclick",noTrack:"notrack",param:"param",path:"path",region:"region",request:"request",search:"search",set:"set",trackDynamic:"trackdynamic",trackPageview:"trackpageview"},opts={url:w.location.href,ref:d.referrer,title:d.title,res:w.screen.width+"x"+w.screen.height,accountid:"{ACCOUNT_ID}",groups:null,path:null,hits:null,sw:null,cid:null,rt:sz.core.navtime(),prev:null,ourl:null,luid:sz.core.uuid(),feedbackid:null,addcid:null,dnt:null,ckl:null},internalOpts={grk:null,kvps:null},defaultTracker=function(){sz.push([registry.invokeTracking])},tracker=defaultTracker,getRootDomain=function(){var result=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(location.hostname);return(result&&result.length==1?result[0]:location.hostname).replace(/^www\./i,"")},internalEventTypes={afterPageviewTracked:"after_pageview_tracked"},internalEventHandlers={notify:function(eventType,...args){var eventTypeConfiguration=internalEventHandlers[eventType],listeners,i;if(eventTypeConfiguration&&typeof eventTypeConfiguration=="object"&&(listeners=eventTypeConfiguration.listeners,listeners&&listeners.length&&!(listeners.length<1)))for(i=0;i<listeners.length;i++)try{listeners[i].apply(null,args)}catch(e){sz.core.warn("Failed to notify listener {0} for event type {1} due to: {2}",i,eventType,e)}},[internalEventTypes.afterPageviewTracked]:{listeners:[],notify:function(trackOpts){internalEventHandlers.notify(internalEventTypes.afterPageviewTracked,trackOpts)}}},eventorder,searchorder,feedbackorder,getKvpValues;sz.analytics={config:{cantrack:!0,noonclick:!1,ready:!0,onClickKey:"szaocHandled"+sz.core.rnd()},cookie:{name:"nmstat",domain:getRootDomain(),expires:1e3,secure:!1,sameSite:null},endpoint:{configured:!1,host:"{ACCOUNT_ID}.global",domain:"siteimproveanalytics.io",path:"image.aspx",fullpath:function(host,path){return sz.analytics.endpoint.configure(),path||(path=host,host=this.host),(host||this.host)+"."+this.domain+"/"+(path||this.path)},configure:function(){sz.analytics.endpoint.configured||(sz.analytics.endpoint.host=sz.analytics.endpoint.host.replace("{ACCOUNT_ID}",opts.accountid||"shared"),sz.core.log("Configured host: {0}.{1}",sz.analytics.endpoint.host,sz.analytics.endpoint.domain),sz.analytics.endpoint.configured=!0)}},state:{requested:!1,requestTime:new Date,tracked:!1,onclickattached:!1},region:"",getRootDomain:getRootDomain,replaceTracker:function(newTracker){tracker=typeof newTracker=="function"?newTracker:defaultTracker},opts:function(k){return opts[k]},getsessid:function(valueHandler){var cookieValue,cookieOptions,storedValue;sz.analytics.config.cantrack?(cookieValue=sz.core.cookie(sz.analytics.cookie.name),cookieValue||(cookieValue=sz.core.uuid(),cookieOptions={expires:sz.analytics.cookie.expires,domain:sz.analytics.cookie.domain,secure:sz.analytics.cookie.secure,sameSite:sz.analytics.cookie.sameSite},sz.core.cookie(sz.analytics.cookie.name,cookieValue,cookieOptions),storedValue=sz.core.cookie(sz.analytics.cookie.name),storedValue||(sz.core.log("Failed to set cookie at domain '{0}', using fallback domain '{1}' instead",sz.analytics.cookie.domain,location.hostname),cookieOptions.domain=location.hostname,sz.core.cookie(sz.analytics.cookie.name,cookieValue,cookieOptions))),valueHandler&&typeof valueHandler=="function"&&valueHandler(cookieValue)):valueHandler&&typeof valueHandler=="function"&&valueHandler("")},eventHandlers:function(){return{afterPageviewTracked:[].concat(internalEventHandlers[internalEventTypes.afterPageviewTracked].listeners)}}};sz.analytics.request=function(path,o,callback){request(path,o,callback)};sz.core.register(registry.attachOnClick,function(){registeronclick(sz.analytics.config.noonclick)});eventorder=0;searchorder=0;feedbackorder=0;sz.core.register(registry.endpoint,function(endpointHost){endpointHost?(sz.analytics.endpoint.host=endpointHost.indexOf("{ACCOUNT_ID}")<0?"{ACCOUNT_ID}."+endpointHost:endpointHost,sz.analytics.endpoint.configured=!1,sz.analytics.endpoint.configure()):sz.core.warn("Could not reconfigure endpoint host.")});sz.core.register(registry.region,function(region){region?(sz.core.log("Setting analytics region to: {0}",region),sz.analytics.region=region):sz.core.warn("Could not configure analytics region.")});sz.core.register(registry.event,function(category,action,label){if(category&&action){if(!sz.analytics.config.cantrack)return}else{sz.core.warn("Category and action must be provided for event.");return}whenTracked(function(){request(sz.analytics.endpoint.fullpath("event.aspx"),eventparams(category,action,label))})});sz.core.register(registry.search,function(searchTerm,results){if(searchTerm){if(!sz.analytics.config.cantrack)return}else{sz.core.warn("Search term must be provided for searches.");return}whenTracked(function(){request(sz.analytics.endpoint.fullpath("search.aspx"),searchparams(searchTerm,results))})});sz.core.register(registry.feedbackView,function(feedbackId,feedbackUid){if(sz.analytics.config.cantrack){if(!feedbackId){sz.core.warn("Feedback id must be provided for feedback views.");return}if(!feedbackUid){sz.core.warn("Feedback log id must be provided for feedback views.");return}whenTracked(function(){request(sz.analytics.endpoint.fullpath("surveyview.aspx"),feedbackparams(feedbackId,feedbackUid))})}});sz.core.register(registry.feedbackResponse,function(feedbackId,feedbackUid,rating,comment){if(sz.analytics.config.cantrack){if(!feedbackId){sz.core.warn("Feedback id must be provided for feedback responses.");return}if(!feedbackUid){sz.core.warn("Feedback log id must be provided for feedback responses.");return}if((rating==null||rating<1)&&!comment){sz.core.warn("Feedback responses must provide either a rating or a comment.");return}whenTracked(function(){request(sz.analytics.endpoint.fullpath("surveyresponse.aspx"),feedbackparams(feedbackId,feedbackUid,rating,comment))})}});sz.core.register(registry.dump,function(){console.debug(sz.analytics);console.debug(opts);console.debug(internalOpts)});sz.core.register(registry.noOnClick,function(v){sz.analytics.config.noonclick=v});sz.core.register(registry.afterPageviewTracked,function(handler){typeof handler=="function"?internalEventHandlers[internalEventTypes.afterPageviewTracked].listeners.push(handler):sz.core.warn("Invalid argument provided to after pageview tracked, was expecting function, but got {0}",typeof handler)});sz.core.register(registry.set,function(name,value){opts.hasOwnProperty(name)?opts[name]=value:this.set.base(name,value)});sz.core.register(registry.breadcrumbs,function(selector){var bc,extractedPath;selector&&d.querySelector&&(bc=d.querySelector(selector),bc&&(extractedPath=sz.core.trim(sz.core.txt(bc)),sz.core.empty(extractedPath)||sz.push([registry.path,extractedPath])))});sz.core.register(registry.path,function(newPath){sz.core.empty(newPath)||(opts.path=newPath,sz.push([registry.kvp,"path",newPath]),sz.core.log("Path set: {0}",newPath))});sz.core.register(registry.groupSelector,function(selector){var res,groups,i,t,values,j;if(selector&&d.querySelectorAll){for(res=d.querySelectorAll(selector),groups=[],sz.core.empty(opts.groups)||(groups=opts.groups.split(",")),i=0;i<res.length;i++)if(t=sz.core.trim(sz.core.txt(res[i])),!sz.core.empty(t))for(values=t.split(","),j=0;j<values.length;j++)groups.push(values[j]);groups.length>0&&(opts.groups=groups.join(","),sz.push([registry.kvp,"szGroupName",groups]),sz.core.log("Groups set: {0}",groups.join(", ")))}});sz.core.register(registry.metaGroupName,function(name){var me=sz.core.tag("meta"),gc=[],i,metaValue,values,j;for(sz.core.empty(opts.groups)||(gc=opts.groups.split(",")),i=0;i<me.length;i++)if(me[i].name==name&&(metaValue=sz.core.trim(me[i].content),!sz.core.empty(metaValue)))for(sz.core.log("Metagroup pushing group for meta name {0}: {0}",me[i].name,me[i].content),values=metaValue.split(","),j=0;j<values.length;j++)gc.push(values[j]);gc.length>0&&(opts.groups=gc.join(","),sz.push([registry.kvp,"szGroupName",gc]),sz.core.log("Metagroup set: {0}",gc.join(", ")))});sz.core.register(registry.param,function(n,v){if(typeof n=="object")for(i in n)n.hasOwnProperty(i)&&sz.push([registry.param,i,n[i]]);else sz.core.log("Param {0} = {1}",n,v),internalOpts.grk==null&&(internalOpts.grk={}),internalOpts.grk[n]=v});getKvpValues=function(input){var values=[];if(sz.core.isarray(input))for(i=0;i<input.length;i++)sz.core.empty(input[i])||values.push(input[i]);else sz.core.empty(input)||values.push(input);return values};sz.analytics.addKvpValues=function(n,v,replace){var values,j;if(typeof n=="object")for(i in n)n.hasOwnProperty(i)&&sz.analytics.addKvpValues(i,n[i],replace);else{if(values=getKvpValues(v),internalOpts.kvps==null&&(internalOpts.kvps={}),replace===!0)internalOpts.kvps[n]=values;else for(internalOpts.kvps[n]=internalOpts.kvps[n]||[],j=0;j<values.length;j++)internalOpts.kvps[n].push(values[j]);sz.core.log("Kvp {0} = {1}",n,JSON.stringify(internalOpts.kvps[n]))}};sz.core.register(registry.kvp,function(n,v,replace){sz.analytics.addKvpValues(n,v,replace)});sz.core.register(registry.request,function(data){data.accountid===undefined&&(data.accountid=opts.accountid);request(sz.analytics.endpoint.fullpath(),data)});sz.core.register(registry.trackPageview,function(){var c=sz.analytics,trackOpts,grkKey,kvpKey;if(!c.state.tracked&&c.config.cantrack&&c.config.ready){if(trackOpts=sz.core.clone(opts),internalOpts.grk!=null)for(grkKey in internalOpts.grk)internalOpts.grk.hasOwnProperty(grkKey)&&(trackOpts["grk_"+grkKey]=internalOpts.grk[grkKey]);if(internalOpts.kvps!=null)for(kvpKey in internalOpts.kvps)internalOpts.kvps.hasOwnProperty(kvpKey)&&(trackOpts["kvp_"+kvpKey]=internalOpts.kvps[kvpKey]);request(c.endpoint.fullpath(),trackOpts,function(){c.state.tracked=!0;c.state.requestTime=new Date;trackOpts.sw&&sz.push([registry.search,trackOpts.sw,trackOpts.hits])});try{internalEventHandlers[internalEventTypes.afterPageviewTracked].notify(trackOpts)}catch(e){sz.core.warn("Failed to notify after pageview tracked listeners")}}else c.state.tracked&&sz.core.log("Already tracked...")});sz.core.register(registry.noTrack,function(v){v===undefined&&(v=!0);v?sz.core.cookie("sz_notrack","true",{expires:1825}):sz.core.cookie("sz_notrack",null);sz.analytics.config.cantrack=!v});sz.tracking=function(){return sz.analytics.config.cantrack};sz.donottrack=function(){return opts.dnt===!0&&!!hasdonottrack()};sz.core.register(registry.trackDynamic,function(params){var curUrl=opts.url,i;if(opts.url=w.location.href,opts.ref=curUrl,opts.title=d.title,opts.luid=sz.core.uuid(),opts.rt=null,opts.ourl=null,opts.groups=null,opts.path=null,opts.hits=null,opts.sw=null,internalOpts.grk=null,internalOpts.kvps=null,sz.analytics.state.tracked=!1,sz.analytics.state.onclickattached=!1,params)if(typeof params!="object"||params instanceof Array){if(params.length>0)for(i=0;i<params.length;i++)sz.push(params[i])}else for(k in params)params.hasOwnProperty(k)&&sz.push([k,params[k]]);opts.ourl||(opts.ourl=opts.url);sz.push([registry.invokeTracking])});sz.core.register(registry.invokeTracking,function(){if(!!sz.analytics.config.cantrack&&sz.donottrack()&&(sz.core.log("Do not track enabled"),sz.analytics.config.cantrack=!1),!sz.analytics.config.cantrack){sz.core.log("Tracking not enabled, skipping invocation");return}sz.push([registry.trackPageview])});sz.core.ready(function(){sz.core.log("Running ready at {0}",(new Date).getTime());sz.core.cookie("sz_notrack")!==null&&sz.push([registry.noTrack]);sz.push([registry.afterPageviewTracked,function(){sz.analytics.state.onclickattached=!1;registeronclick(sz.analytics.config.noonclick)}]);tracker()})}(window,document,_sz),function(w,d,sz,undefined){function initializeListeners(){var elmTagName,elms,i;if(state.supportQuerySelector){sz.core.log("Attaching behaviour map mousedown handlers");helpers.on(d,"mousedown",listeners.click);for(elmTagName in consts.boundingElements)if(consts.boundingElements.hasOwnProperty(elmTagName)&&consts.boundingElements[elmTagName]==!0){elms=sz.core.tag(elmTagName);for(i in elms)helpers.on(elms[i],"mousedown",listeners.click)}}sz.core.log("Attaching behaviour map scroll + resize handlers");helpers.on(w,"scroll",listeners.scroll);helpers.on(w,"resize",listeners.resize)}function dispatch(e){var payload,params;if(e){switch(e.type){case"click":payload="c|"+e.point.x+"|"+e.point.y+"|"+e.path;break;case"scroll":payload="s|"+e.pos.l+"|"+e.pos.t;break;default:return}params=payloadparams(payload);sz.analytics.request(sz.analytics.endpoint.fullpath("heat.aspx"),params)}}function payloadparams(chunk){var ws=helpers.viewPort();return{aid:sz.analytics.opts("accountid"),url:sz.analytics.opts("url"),luid:sz.analytics.opts("luid"),p:chunk,ww:ws.w,wh:ws.h,cid:sz.analytics.opts("cid"),ckl:sz.analytics.opts("ckl"),addcid:sz.analytics.opts("addcid"),o:++hmOrder,d:Math.round((new Date-sz.analytics.state.requestTime)/1e3)}}var config={scrollDelay:350,resizeDelay:350},state={running:!1,initViewPort:null,supportQuerySelector:!0,clickCount:0,scrollHandle:null,lastViewPort:{l:0,t:0},scrollCount:0},hmOrder,matcher;sz.analytics.heatmap={config:config,state:state};var consts={hostnameRx:/^([\w@:.-]+)$/i,pathnameRx:/((?:\/\w+)*\/[-\w.]+[^#&?\s]*)$/i,maxSrcLen:50,boundingElements:{A:!0,AREA:!0,ARTICLE:!1,BODY:!1,BUTTON:!0,DIV:!1,FOOTER:!1,FRAME:!1,IFRAME:!1,H1:!1,H2:!1,H3:!1,H4:!1,H5:!1,H6:!1,HEADER:!1,HTML:!1,IMG:!0,INPUT:!0,LABEL:!1,LI:!1,MAIN:!1,SECTION:!1,SELECT:!0,SPAN:!1,TABLE:!1,TD:!1,TH:!1,TEXTAREA:!0}},helpers={on:function(el,events,callback){for(var $events=events.split(" "),i=$events.length;i--;)el.addEventListener?el.addEventListener($events[i],callback,!1):el.attachEvent&&el.attachEvent("on"+$events[i],callback)},off:function(el,events,callback){for(var $events=events.split(" "),i=$events.length;i--;)el.removeEventListener?el.removeEventListener($events[i],callback,!1):el.detachEvent&&el.detachEvent("on"+$events[i],callback)},stop:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble!=null&&(e.cancelBubble=!0)},sourceElement:function(e){return e.srcElement||e.target},map:function(arr,f){for(var res=[],i=0;i<arr.length;i++)res.push(f(arr[i],i));return res},cssEscape:function(str){var firstChar=str.charAt(0),result="";return/^-+$/.test(str)?"\\-"+str.slice(1):(/\d/.test(firstChar)&&(result="\\3"+firstChar+" ",str=str.slice(1)),result+helpers.map(str.split(""),function(chr){return/[\t\n\v\f]/.test(chr)?"\\"+chr.charCodeAt().toString(16)+" ":(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^_`{|}~]/.test(chr)?"\\":"")+chr}).join(""))},isUniqueSelector:function(str,el){if(!state.supportQuerySelector||!str)return!1;var matches=d.querySelectorAll(str);return matches.length===1&&matches[0]===el},trim:function(str){return String.prototype.trim?str.trim():str.replace(/^\s+|\s+$/g,"")},pathFromSrc:function(src){var a=d.createElement("a"),pathName;return a.href=src,pathName=a.pathname,a=null,pathName||""},parent:function(el){var parent=el.parentNode;return parent.nodeType==1&&!/\b(html|body|head)\b/i.test(parent.tagName)?parent:null},childSelector:function(el,tagName){var i,sibling;if(!el.parentNode)return null;var siblings=el.parentNode.children,siblingsLength=siblings.length,index=0,theOnlyType=!0;for(i=0;i<siblingsLength;i++)if(sibling=siblings[i],sibling===el)index=i+1;else if(sibling.tagName.toLowerCase()==tagName&&(theOnlyType=!1,index!==0))break;return theOnlyType?null:index===1?":first-child":index===siblingsLength?":last-child":":nth-child("+index+")"},pathSelector:function(el){var tagName=el.tagName.toLowerCase(),parent=helpers.parent(el),childSelector=helpers.childSelector(el,tagName);return(parent?helpers.pathSelector(parent)+">":"")+tagName+(childSelector||"")},cssSelector:function(el){var orgEl=el,selector="",s="",filename="",pathname="",tagName,uniqueClass,uniqueClassCount,i,l,cl,count,hash,hostname,name,labelFor,pseudoChild;do{if(!el.tagName)return"";if(tagName=el.tagName.toLowerCase(),/\b(html|body|head)\b/i.test(tagName))return tagName+selector;var id=el.id,className=helpers.trim(el.className),classList=el.classList||className.split(/\s+/);if(typeof id!="string"&&(id=null),id&&((id=helpers.cssEscape(id),s="#"+id+selector,helpers.isUniqueSelector(s,orgEl))||(s=tagName+"[id='"+id.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl))))return s;if(uniqueClass="",className&&d.getElementsByClassName){for(uniqueClassCount=Infinity,i=0,l=classList.length;i<l;i++)cl=classList[i],count=d.getElementsByClassName(cl).length,count<uniqueClassCount&&(uniqueClassCount=count,uniqueClass=helpers.cssEscape(cl));if((s=tagName+"."+uniqueClass+selector,helpers.isUniqueSelector(s,orgEl))||id&&(s=tagName+"[id='"+id.replace("'","\\'")+"']."+uniqueClass+selector,helpers.isUniqueSelector(s,orgEl)))return s}switch(tagName){case"a":if((hash=el.hash,hash&&(s=tagName+"[href='"+hash.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl)))||(pathname=((el.pathname||"").match(consts.pathnameRx)||["",""])[1],pathname&&pathname.length<=consts.maxSrcLen&&(s=tagName+"[href*='"+pathname.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl)))||(hostname=((el.hostname||"").match(consts.hostnameRx)||["",""])[1],hostname&&hostname.length<=consts.maxSrcLen&&(s=tagName+"[href*='"+hostname.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl))))return s;break;case"img":if(pathname=helpers.pathFromSrc(el.src),filename=(pathname.match(consts.pathnameRx)||["","",])[1],filename&&pathname.length<=consts.maxSrcLen&&(s=tagName+"[src*='"+filename.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl)))return s;break;case"input":case"button":case"select":case"textarea":if(name=el.getAttribute("name"),name&&(s=tagName+"[name='"+name.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl)))return s;break;case"label":if(labelFor=el.getAttribute("for"),labelFor&&(s=tagName+"[for='"+labelFor.replace("'","\\'")+"']"+selector,helpers.isUniqueSelector(s,orgEl)))return s}if(pseudoChild=helpers.childSelector(el,tagName),pseudoChild){if(selector=tagName+pseudoChild+selector,helpers.isUniqueSelector(selector,orgEl))return selector}else if(id)selector=tagName+"[id='"+id.replace("'","\\'")+"']"+selector;else if(uniqueClass)selector=tagName+"."+uniqueClass+selector;else if(selector=tagName+selector,helpers.isUniqueSelector(selector,orgEl))return selector}while((el=el.parentNode)&&(selector=">"+selector));return selector},viewPort:function(){return{l:Math.round((w.pageXOffset||d.documentElement.scrollLeft)-(d.documentElement.clientLeft||0)),t:Math.round((w.pageYOffset||d.documentElement.scrollTop)-(d.documentElement.clientTop||0)),w:Math.round(w.innerWidth||d.documentElement.clientWidth||w.screen.width),h:Math.round(w.innerHeight||d.documentElement.clientHeight||w.screen.height)}},elementPoint:function(e,boundingElement){e=e||w.event;var pagePoint=helpers.pagePoint(e),rect=boundingElement.getBoundingClientRect(),scrollTop=d.documentElement.scrollTop?d.documentElement.scrollTop:d.body.scrollTop,scrollLeft=d.documentElement.scrollLeft?d.documentElement.scrollLeft:d.body.scrollLeft;return{x:Math.round(pagePoint.x-(rect.left+scrollLeft)),y:Math.round(pagePoint.y-(rect.top+scrollTop))}},pagePoint:function(e){e=e||w.event;var pageX=e.pageX,pageY=e.pageY;return pageX===undefined&&(pageX=e.clientX+d.body.scrollLeft+d.documentElement.scrollLeft,pageY=e.clientY+d.body.scrollTop+d.documentElement.scrollTop),{x:pageX,y:pageY}},preEventHandler:function(){state.scrollCount<1&&state.clickCount<1&&dispatch({pos:state.initViewPort,type:"scroll"})}},listeners={click:function(e){var srcElement,boundingElement,path,entry;if(e.szbHandled!==!0){for(helpers.preEventHandler(e),state.clickCount++,srcElement=helpers.sourceElement(e),boundingElement=srcElement;boundingElement!=null&&consts.boundingElements[boundingElement.tagName]==null;)boundingElement=boundingElement.parentNode;boundingElement!=null&&(path=helpers.cssSelector(boundingElement),path&&path!="html")&&(entry={path:path,point:helpers.elementPoint(e,boundingElement),type:"click"},dispatch(entry),e.szbHandled=!0)}},scroll:function(e){state.scrollHandle!=null&&clearTimeout(state.scrollHandle);state.scrollHandle=setTimeout(function(){helpers.preEventHandler(e);state.scrollCount++;var view=helpers.viewPort();(view.t!=state.lastViewPort.t||view.h!=state.lastViewPort.h)&&(dispatch({pos:view,type:"scroll"}),state.lastViewPort=view)},config.scrollDelay)},resize:function(){var cur=helpers.viewPort();state.scrollCount&&cur.h==state.lastViewPort.h||listeners.scroll()}};hmOrder=0;matcher={keys:Object.keys?Object.keys:function(o){var k,p;if(o!==Object(o))throw new TypeError("Object.keys called on a non-object");k=[];for(p in o)Object.prototype.hasOwnProperty.call(o,p)&&k.push(p);return k},extract:function(arr){for(var kv,k,v,obj={},ix=0;ix<arr.length;ix++)kv=arr[ix].split("="),kv.length>1&&(k=kv.shift(),v=kv.join("="),v.length>0&&(obj[k]=v));return obj},decompose:function(url){url=encodeURI(decodeURI(helpers.trim(url||"").replace(/^.*?:\/\//g,"").split("#")[0]));var parts=url.split("?"),base=parts.shift().replace(/^www\./,"").replace(/\/+$/,""),params=this.extract(parts.join("?").split("&"));return{resource:base,params:params}},check_url:function(current,match){var keys,ix,k;if(current.resource===match.resource){for(keys=this.keys(match.params),ix=0;ix<keys.length;ix++)if(k=keys[ix],current.params[k]==undefined||current.params[k]!==match.params[k])return!1;return!0}return!1},check_list:function(current,list,callback){list=list||[];for(var i=0;i<list.length;i++)if(list[i]!=undefined&&this.check_url(current,this.decompose(list[i].toLowerCase())))return callback&&callback(list[i]),!0;return!1},enable:function(){var current=this.decompose(this.cur_url()),includeMatch,excludeMatch,result=current.resource&&this.check_list(current,this.matches.permanent.concat(this.matches.include),function(x){includeMatch=x})&&!this.check_list(current,this.matches.exclude,function(x){excludeMatch=x});return sz.core.log('Behaviour map tracking match:<br/>include = "{0}"<br/>exclude = "{1}"',encodeURI(includeMatch||""),encodeURI(excludeMatch||"")),result},matches:{permanent:[],include:[],exclude:[]},add_matches:function(m){m!=null&&(this.is_array(m.permanent)&&(this.matches.permanent=this.matches.permanent.concat(m.permanent)),this.is_array(m.include)&&(this.matches.include=this.matches.include.concat(m.include)),this.is_array(m.exclude)&&(this.matches.exclude=this.matches.exclude.concat(m.exclude)))},replacements:[],add_replacement:function(r){this.is_function(r)&&this.replacements.push(r)},is_function:function(x){return x!=null&&typeof x=="function"&&x instanceof Function},is_array:function(x){return x!=null&&x instanceof Array&&x.concat!=undefined&&x.length!=undefined},cur_url:function(){var u=((sz.analytics&&sz.analytics.opts?sz.analytics.opts("url"):"")||sz.core.curr).toLowerCase(),k;if(this.replacements&&this.replacements.length>0)for(k=0;k<this.replacements.length;k++)u=this.replacements[k](u);return u}};sz.core.register("heatmapreplacement",function(replacement){matcher.add_replacement(replacement)});sz.core.register("heatmap",function(config){matcher.add_matches(config.matches)});sz.core.register("heatmapinit",function(){if(sz.analytics.config.cantrack&&!sz.donottrack()){if(state.running){sz.core.log("Behaviour map tracking already running");return}try{if(!matcher.enable()){sz.core.log("Skipping behaviour map tracking");return}}catch(e){sz.core.log("Skipping behaviour map tracking due to: {0}",e);return}try{state.supportQuerySelector=!!d.querySelectorAll&&d.querySelectorAll("body > *:nth-child(1)").length===1}catch(e){state.supportQuerySelector=!1}sz.core.log("Enabling behaviour map tracking");state.running=!0;state.lastViewPort=helpers.viewPort();state.initViewPort=helpers.viewPort();initializeListeners()}});sz.core.ready(function(){sz.core.log("Running behaviour map ready at {0}",(new Date).getTime());sz.push(["heatmapinit"])})}(window,document,_sz),_sz.core._isloaded=!0);