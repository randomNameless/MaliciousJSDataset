var NO_JQUERY={};(function(e,a,r){if(!("console"in e)){var t=e.console={};t.log=t.warn=t.error=t.debug=function(){}}if(a===NO_JQUERY){a={fn:{},extend:function(){var e=arguments[0];for(var a=1,r=arguments.length;a<r;a++){var t=arguments[a];for(var s in t){e[s]=t[s]}}return e}}}a.fn.pm=function(){console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])");return this};a.pm=e.pm=function(e){s.send(e)};a.pm.bind=e.pm.bind=function(e,a,r,t,n){s.bind(e,a,r,t,n===true)};a.pm.unbind=e.pm.unbind=function(e,a){s.unbind(e,a)};a.pm.origin=e.pm.origin=null;a.pm.poll=e.pm.poll=200;var s={send:function(e){var r=a.extend({},s.defaults,e),t=r.target;if(!r.target){console.warn("postmessage target window required");return}if(!r.type){console.warn("postmessage type required");return}var n={data:r.data,type:r.type};if(r.success){n.callback=s._callback(r.success)}if(r.error){n.errback=s._callback(r.error)}if("postMessage"in t&&!r.hash){s._bind();t.postMessage(JSON.stringify(n),r.origin||"*")}else{s.hash._bind();s.hash.send(r,n)}},bind:function(e,a,r,t,n){s._replyBind(e,a,r,t,n)},_replyBind:function(r,t,n,i,o){if("postMessage"in e&&!i){s._bind()}else{s.hash._bind()}var l=s.data("listeners.postmessage");if(!l){l={};s.data("listeners.postmessage",l)}var c=l[r];if(!c){c=[];l[r]=c}c.push({fn:t,callback:o,origin:n||a.pm.origin})},unbind:function(e,a){var r=s.data("listeners.postmessage");if(r){if(e){if(a){var t=r[e];if(t){var n=[];for(var i=0,o=t.length;i<o;i++){var l=t[i];if(l.fn!==a){n.push(l)}}r[e]=n}}else{delete r[e]}}else{for(var i in r){delete r[i]}}}},data:function(e,a){if(a===r){return s._data[e]}s._data[e]=a;return a},_data:{},_CHARS:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),_random:function(){var e=[];for(var a=0;a<32;a++){e[a]=s._CHARS[0|Math.random()*32]};return e.join("")},_callback:function(e){var a=s.data("callbacks.postmessage");if(!a){a={};s.data("callbacks.postmessage",a)}var r=s._random();a[r]=e;return r},_bind:function(){if(!s.data("listening.postmessage")){if(e.addEventListener){e.addEventListener("message",s._dispatch,false)}else if(e.attachEvent){e.attachEvent("onmessage",s._dispatch)}s.data("listening.postmessage",1)}},_dispatch:function(e){try{var a=JSON.parse(e.data)}catch(e){return}if(!a.type){return}var r=s.data("callbacks.postmessage")||{},t=r[a.type];if(t){t(a.data)}else{var n=s.data("listeners.postmessage")||{};var i=n[a.type]||[];for(var o=0,l=i.length;o<l;o++){var c=i[o];if(c.origin&&c.origin!=="*"&&e.origin!==c.origin){console.warn("postmessage message origin mismatch",e.origin,c.origin);if(a.errback){var u={message:"postmessage origin mismatch",origin:[e.origin,c.origin]};s.send({target:e.source,data:u,type:a.errback})}continue}function d(r){if(a.callback){s.send({target:e.source,data:r,type:a.callback})}}try{if(c.callback){c.fn(a.data,d,e)}else{d(c.fn(a.data,e))}}catch(r){if(a.errback){s.send({target:e.source,data:r,type:a.errback})}else{throw r}}};}}};s.hash={send:function(a,r){var t=a.target,n=a.url;if(!n){console.warn("postmessage target window url is required");return}n=s.hash._url(n);var i,o=s.hash._url(e.location.href);if(e==t.parent){i="parent"}else{try{for(var l=0,c=parent.frames.length;l<c;l++){var u=parent.frames[l];if(u==e){i=l;break}};}catch(a){i=e.name}}if(i==null){console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");return}var d={"x-requested-with":"postmessage",source:{name:i,url:o},postmessage:r};var g="#x-postmessage-id="+s._random();t.location=n+g+encodeURIComponent(JSON.stringify(d))},_regex:/^\#x\-postmessage\-id\=(\w{32})/,_regex_len:"#x-postmessage-id=".length+32,_bind:function(){if(!s.data("polling.postmessage")){setInterval(function(){var a=""+e.location.hash,r=s.hash._regex.exec(a);if(r){var t=r[1];if(s.hash._last!==t){s.hash._last=t;s.hash._dispatch(a.substring(s.hash._regex_len))}}},a.pm.poll||200);s.data("polling.postmessage",1)}},_dispatch:function(a){if(!a){return}try{a=JSON.parse(decodeURIComponent(a));if(!(a["x-requested-with"]==="postmessage"&&a.source&&a.source.name!=null&&a.source.url&&a.postmessage)){return}}catch(e){return}var r=a.postmessage,t=s.data("callbacks.postmessage")||{},n=t[r.type];if(n){n(r.data)}else{var i;if(a.source.name==="parent"){i=e.parent}else{i=e.frames[a.source.name]}var o=s.data("listeners.postmessage")||{};var l=o[r.type]||[];for(var c=0,u=l.length;c<u;c++){var d=l[c];if(d.origin){var g=/https?\:\/\/[^\/]*/.exec(a.source.url)[0];if(d.origin!=="*"&&g!==d.origin){console.warn("postmessage message origin mismatch",g,d.origin);if(r.errback){var f={message:"postmessage origin mismatch",origin:[g,d.origin]};s.send({target:i,data:f,type:r.errback,hash:true,url:a.source.url})}continue}}function p(e){if(r.callback){s.send({target:i,data:e,type:r.callback,hash:true,url:a.source.url})}}try{if(d.callback){d.fn(r.data,p)}else{p(d.fn(r.data))}}catch(e){if(r.errback){s.send({target:i,data:e,type:r.errback,hash:true,url:a.source.url})}else{throw e}}};}},_url:function(e){return(""+e).replace(/#.*$/,"")}};a.extend(s,{defaults:{target:null,url:null,type:null,data:null,success:null,error:null,origin:"*",hash:false}})})(this,typeof jQuery==="undefined"?NO_JQUERY:jQuery);