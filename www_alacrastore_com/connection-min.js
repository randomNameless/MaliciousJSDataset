YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(a){this._msxml_progid.unshift(a)},setDefaultPostHeader:function(a){if(typeof a=="string"){this._default_post_header=a}else{if(typeof a=="boolean"){this._use_default_post_header=a}}},setDefaultXhrHeader:function(a){if(typeof a=="string"){this._default_xhr_header=a}else{this._use_default_xhr_header=a}},setPollingInterval:function(a){if(typeof a=="number"&&isFinite(a)){this._polling_interval=a}},createXhrObject:function(f){var d,a,b;try{a=new XMLHttpRequest();d={conn:a,tId:f,xhr:true}}catch(c){for(b=0;b<this._msxml_progid.length;++b){try{a=new ActiveXObject(this._msxml_progid[b]);d={conn:a,tId:f,xhr:true};break}catch(e){}}}finally{return d}},getConnectionObject:function(a){var c,d=this._transaction_id;try{if(!a){c=this.createXhrObject(d)}else{c={tId:d};if(a==="xdr"){c.conn=this._transport;c.xdr=true}else{if(a==="upload"){c.upload=true}}}if(c){this._transaction_id++}}catch(b){}return c},asyncRequest:function(a,e,g,b){var f,d,c=(g&&g.argument)?g.argument:null;if(this._isFileUpload){d="upload"}else{if(g.xdr){d="xdr"}}f=this.getConnectionObject(d);if(!f){return null}else{if(g&&g.customevents){this.initCustomEvents(f,g)}if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(f,g,e,b);return f}if(a.toUpperCase()=="GET"){if(this._sFormData.length!==0){e+=((e.indexOf("?")==-1)?"?":"&")+this._sFormData}}else{if(a.toUpperCase()=="POST"){b=b?this._sFormData+"&"+b:this._sFormData}}}if(a.toUpperCase()=="GET"&&(g&&g.cache===false)){e+=((e.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString()}if(this._use_default_xhr_header){if(!this._default_headers["X-Requested-With"]){this.initHeader("X-Requested-With",this._default_xhr_header,true)}}if((a.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){this.initHeader("Content-Type",this._default_post_header)}if(f.xdr){this.xdr(f,a,e,g,b);return f}f.conn.open(a,e,true);if(this._has_default_headers||this._has_http_headers){this.setHeader(f)}this.handleReadyState(f,g);f.conn.send(b||"");if(this._isFormSubmit===true){this.resetFormState()}this.startEvent.fire(f,c);if(f.startEvent){f.startEvent.fire(f,c)}return f}},initCustomEvents:function(a,c){var b;for(b in c.customevents){if(this._customEvents[b][0]){a[this._customEvents[b][0]]=new YAHOO.util.CustomEvent(this._customEvents[b][1],(c.scope)?c.scope:null);a[this._customEvents[b][0]].subscribe(c.customevents[b])}}},handleReadyState:function(c,d){var b=this,a=(d&&d.argument)?d.argument:null;if(d&&d.timeout){this._timeOut[c.tId]=window.setTimeout(function(){b.abort(c,d,true)},d.timeout)}this._poll[c.tId]=window.setInterval(function(){if(c.conn&&c.conn.readyState===4){window.clearInterval(b._poll[c.tId]);delete b._poll[c.tId];if(d&&d.timeout){window.clearTimeout(b._timeOut[c.tId]);delete b._timeOut[c.tId]}b.completeEvent.fire(c,a);if(c.completeEvent){c.completeEvent.fire(c,a)}b.handleTransactionResponse(c,d)}},this._polling_interval)},handleTransactionResponse:function(a,h,c){var d,j,f=(h&&h.argument)?h.argument:null,b=(a.r&&a.r.statusText==="xdr:success")?true:false,g=(a.r&&a.r.statusText==="xdr:failure")?true:false,i=c;try{if((a.conn.status!==undefined&&a.conn.status!==0)||b){d=a.conn.status}else{if(g&&!i){d=0}else{d=13030}}}catch(e){d=13030}if((d>=200&&d<300)||d===1223||b){j=a.xdr?a.r:this.createResponseObject(a,f);if(h&&h.success){if(!h.scope){h.success(j)}else{h.success.apply(h.scope,[j])}}this.successEvent.fire(j);if(a.successEvent){a.successEvent.fire(j)}}else{switch(d){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:j=this.createExceptionObject(a.tId,f,(c?c:false));if(h&&h.failure){if(!h.scope){h.failure(j)}else{h.failure.apply(h.scope,[j])}}break;default:j=(a.xdr)?a.response:this.createResponseObject(a,f);if(h&&h.failure){if(!h.scope){h.failure(j)}else{h.failure.apply(h.scope,[j])}}}this.failureEvent.fire(j);if(a.failureEvent){a.failureEvent.fire(j)}}this.releaseObject(a);j=null},createResponseObject:function(i,f){var c={},h={},d,b,e,a;try{b=i.conn.getAllResponseHeaders();e=b.split("\n");for(d=0;d<e.length;d++){a=e[d].indexOf(":");if(a!=-1){h[e[d].substring(0,a)]=YAHOO.lang.trim(e[d].substring(a+2))}}}catch(g){}c.tId=i.tId;c.status=(i.conn.status==1223)?204:i.conn.status;c.statusText=(i.conn.status==1223)?"No Content":i.conn.statusText;c.getResponseHeader=h;c.getAllResponseHeaders=b;c.responseText=i.conn.responseText;c.responseXML=i.conn.responseXML;if(f){c.argument=f}return c},createExceptionObject:function(g,c,h){var e=0,f="communication failure",b=-1,a="transaction aborted",d={};d.tId=g;if(h){d.status=b;d.statusText=a}else{d.status=e;d.statusText=f}if(c){d.argument=c}return d},initHeader:function(a,d,c){var b=(c)?this._default_headers:this._http_headers;b[a]=d;if(c){this._has_default_headers=true}else{this._has_http_headers=true}},setHeader:function(a){var b;if(this._has_default_headers){for(b in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,b)){a.conn.setRequestHeader(b,this._default_headers[b])}}}if(this._has_http_headers){for(b in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,b)){a.conn.setRequestHeader(b,this._http_headers[b])}}this._http_headers={};this._has_http_headers=false}},resetDefaultHeaders:function(){this._default_headers={};this._has_default_headers=false},abort:function(f,a,b){var e,c=(a&&a.argument)?a.argument:null;f=f||{};if(f.conn){if(f.xhr){if(this.isCallInProgress(f)){f.conn.abort();window.clearInterval(this._poll[f.tId]);delete this._poll[f.tId];if(b){window.clearTimeout(this._timeOut[f.tId]);delete this._timeOut[f.tId]}e=true}}else{if(f.xdr){f.conn.abort(f.tId);e=true}}}else{if(f.upload){var d="yuiIO"+f.tId;var g=document.getElementById(d);if(g){YAHOO.util.Event.removeListener(g,"load");document.body.removeChild(g);if(b){window.clearTimeout(this._timeOut[f.tId]);delete this._timeOut[f.tId]}e=true}}else{e=false}}if(e===true){this.abortEvent.fire(f,c);if(f.abortEvent){f.abortEvent.fire(f,c)}this.handleTransactionResponse(f,a,true)}return e},isCallInProgress:function(a){a=a||{};if(a.xhr&&a.conn){return a.conn.readyState!==4&&a.conn.readyState!==0}else{if(a.xdr&&a.conn){return a.conn.isCallInProgress(a.tId)}else{if(a.upload===true){return document.getElementById("yuiIO"+a.tId)?true:false}else{return false}}}},releaseObject:function(a){if(a&&a.conn){a.conn=null;a=null}}};(function(){var f=YAHOO.util.Connect,g={};function c(i){var j='<object id="YUIConnectionSwf" type="application/x-shockwave-flash" data="'+i+'" width="0" height="0"><param name="movie" value="'+i+'"><param name="allowScriptAccess" value="always"></object>',k=document.createElement("div");document.body.appendChild(k);k.innerHTML=j}function a(i,k,l,j,m){g[parseInt(i.tId)]={o:i,c:j};if(m){j.method=k;j.data=m}i.conn.send(l,j,i.tId)}function d(i){c(i);f._transport=document.getElementById("YUIConnectionSwf")}function b(){f.xdrReadyEvent.fire()}function h(j,i){if(j){f.startEvent.fire(j,i.argument);if(j.startEvent){j.startEvent.fire(j,i.argument)}}}function e(j){var k=g[j.tId].o,i=g[j.tId].c;if(j.statusText==="xdr:start"){h(k,i);return}j.responseText=decodeURI(j.responseText);k.r=j;if(i.argument){k.r.argument=i.argument}this.handleTransactionResponse(k,i,j.statusText==="xdr:abort"?true:false);delete g[j.tId]}f.xdr=a;f.swf=c;f.transport=d;f.xdrReadyEvent=new YAHOO.util.CustomEvent("xdrReady");f.xdrReady=b;f.handleXdrResponse=e})();(function(){var e=YAHOO.util.Connect,g=YAHOO.util.Event;e._isFormSubmit=false;e._isFileUpload=false;e._formNode=null;e._sFormData=null;e._submitElementValue=null;e.uploadEvent=new YAHOO.util.CustomEvent("upload"),e._hasSubmitListener=function(){if(g){g.addListener(document,"click",function(j){var i=g.getTarget(j),h=i.nodeName.toLowerCase();if((h==="input"||h==="button")&&(i.type&&i.type.toLowerCase()=="submit")){e._submitElementValue=encodeURIComponent(i.name)+"="+encodeURIComponent(i.value)}});return true}return false}();function a(l,w,r){var k,q,j,h,o,i=false,u=[],n=0,t,v,s,m,p;this.resetFormState();if(typeof l=="string"){k=(document.getElementById(l)||document.forms[l])}else{if(typeof l=="object"){k=l}else{return}}if(w){this.createFrame(r?r:null);this._isFormSubmit=true;this._isFileUpload=true;this._formNode=k;return}for(t=0,v=k.elements.length;t<v;++t){q=k.elements[t];o=q.disabled;j=q.name;if(!o&&j){j=encodeURIComponent(j)+"=";h=encodeURIComponent(q.value);switch(q.type){case"select-one":if(q.selectedIndex>-1){p=q.options[q.selectedIndex];u[n++]=j+encodeURIComponent((p.attributes.value&&p.attributes.value.specified)?p.value:p.text)}break;case"select-multiple":if(q.selectedIndex>-1){for(s=q.selectedIndex,m=q.options.length;s<m;++s){p=q.options[s];if(p.selected){u[n++]=j+encodeURIComponent((p.attributes.value&&p.attributes.value.specified)?p.value:p.text)}}}break;case"radio":case"checkbox":if(q.checked){u[n++]=j+h}break;case"file":case undefined:case"reset":case"button":break;case"submit":if(i===false){if(this._hasSubmitListener&&this._submitElementValue){u[n++]=this._submitElementValue}i=true}break;default:u[n++]=j+h}}}this._isFormSubmit=true;this._sFormData=u.join("&");this.initHeader("Content-Type",this._default_form_header);return this._sFormData}function d(){this._isFormSubmit=false;this._isFileUpload=false;this._formNode=null;this._sFormData=""}function c(h){var i="yuiIO"+this._transaction_id,j;if(YAHOO.env.ua.ie){j=document.createElement('<iframe id="'+i+'" name="'+i+'" />');if(typeof h=="boolean"){j.src="javascript:false"}}else{j=document.createElement("iframe");j.id=i;j.name=i}j.style.position="absolute";j.style.top="-1000px";j.style.left="-1000px";document.body.appendChild(j)}function f(i){var l=[],j=i.split("&"),k,h;for(k=0;k<j.length;k++){h=j[k].indexOf("=");if(h!=-1){l[k]=document.createElement("input");l[k].type="hidden";l[k].name=decodeURIComponent(j[k].substring(0,h));l[k].value=decodeURIComponent(j[k].substring(h+1));this._formNode.appendChild(l[k])}}return l}function b(s,n,t,r){var i="yuiIO"+s.tId,j="multipart/form-data",l=document.getElementById(i),u=(document.documentMode&&document.documentMode===8)?true:false,o=this,k=(n&&n.argument)?n.argument:null,m,h,q,w,p,v;p={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};this._formNode.setAttribute("action",t);this._formNode.setAttribute("method","POST");this._formNode.setAttribute("target",i);if(YAHOO.env.ua.ie&&!u){this._formNode.setAttribute("encoding",j)}else{this._formNode.setAttribute("enctype",j)}if(r){m=this.appendPostData(r)}this._formNode.submit();this.startEvent.fire(s,k);if(s.startEvent){s.startEvent.fire(s,k)}if(n&&n.timeout){this._timeOut[s.tId]=window.setTimeout(function(){o.abort(s,n,true)},n.timeout)}if(m&&m.length>0){for(h=0;h<m.length;h++){this._formNode.removeChild(m[h])}}for(q in p){if(YAHOO.lang.hasOwnProperty(p,q)){if(p[q]){this._formNode.setAttribute(q,p[q])}else{this._formNode.removeAttribute(q)}}}this.resetFormState();v=function(){if(n&&n.timeout){window.clearTimeout(o._timeOut[s.tId]);delete o._timeOut[s.tId]}o.completeEvent.fire(s,k);if(s.completeEvent){s.completeEvent.fire(s,k)}w={tId:s.tId,argument:n.argument};try{w.responseText=l.contentWindow.document.body?l.contentWindow.document.body.innerHTML:l.contentWindow.document.documentElement.textContent;w.responseXML=l.contentWindow.document.XMLDocument?l.contentWindow.document.XMLDocument:l.contentWindow.document}catch(x){}if(n&&n.upload){if(!n.scope){n.upload(w)}else{n.upload.apply(n.scope,[w])}}o.uploadEvent.fire(w);if(s.uploadEvent){s.uploadEvent.fire(w)}g.removeListener(l,"load",v);setTimeout(function(){document.body.removeChild(l);o.releaseObject(s)},100)};g.addListener(l,"load",v)}e.setForm=a;e.resetFormState=d;e.createFrame=c;e.appendPostData=f;e.uploadFile=b})();YAHOO.register("connection",YAHOO.util.Connect,{version:"2.8.0r4",build:"2449"});