;/*FB_PKG_DELIM*/

__d("AsyncData",["cr:696703"],(function(a,b,c,d,e,f,g){var h={},i={},j={};function k(a,b){var c=j[a]={result:b,status:"success"};h[a]&&(h[a].forEach(function(a){return a(c.result)}),delete h[a]);delete i[a]}function l(a,b){var c=j[a]={error:b,status:"error"};i[a]&&(i[a].forEach(function(a){return a(c.error)}),delete i[a]);delete h[a]}function a(a,b){k(a,b)}function c(a,b){l(a,b)}function d(a){var b={onLoaded:function(b){return n(a,b)},onError:function(b){return o(a,b)},cleanup:function(){return p(a)},peek:function(){return m(a)}};return b}e=null;function m(a){a=j[a];return a&&a.status==="success"?a.result:null}function n(a,c){var d=m(a);if(d!=null)c(d);else{h[a]=h[a]||[];d=c;if(b("cr:696703")){var e=b("cr:696703").getCallbackScheduler(),f=c;d=function(a){e(function(){return f(a)})}}h[a].push(d)}}function o(a,c){var d=j[a];if(d)d.status==="error"&&c(d.error);else{i[a]=i[a]||[];d=c;if(b("cr:696703")){var e=b("cr:696703").getCallbackScheduler(),f=c;d=function(a){e(function(){return f(a)})}}i[a].push(d)}}function p(a){delete j[a]}g.resolve=k;g.reject=l;g.resolveBlackBox=a;g.rejectBlackBox=c;g.getPreloaderRef_INTERNAL=d;g.__dumpValues=e;g.cleanup=p}),98);
__d("AsyncDataPreloader",["AsyncData","isEmptyObject"],(function(a,b,c,d,e,f,g){var h=new Map();a=function(){function a(a){var b=this;a=a.id;this.$1=a;this.$2=d("AsyncData").getPreloaderRef_INTERNAL(this.$1);this.$2.onLoaded(function(a){c("isEmptyObject")(a)&&h.set(b.getPreloaderName(),!0)});h.set(this.getPreloaderName(),!1)}var b=a.prototype;b.getID=function(){return this.$1};b.peek=function(){return this.$2.peek()};b.onLoaded=function(a){h.set(this.getPreloaderName(),!0);this.$2.onLoaded(a);return this};b.onError=function(a){h.set(this.getPreloaderName(),!0);this.$2.onError(a);return this};b.cleanup=function(){d("AsyncData").cleanup(this.$1)};b.getContextProvider=function(){return null};b.getPreloaderName=function(){return this.$1.replace(/^adp_(.*)_[a-z0-9]+$/,"$1")};a.getUsageMap=function(){return h};return a}();g["default"]=a}),98);