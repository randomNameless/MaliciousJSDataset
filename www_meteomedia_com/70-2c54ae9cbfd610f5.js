/*! For license information please see 70-2c54ae9cbfd610f5.js.LICENSE.txt */
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{6035:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});const r=n(51538),i=n(5306)._(n(32735)),o=r._(n(3833)),a=n(45350),s=n(39302),l=n(92265),u=(n(76553),r._(n(65412))),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};new Map;function d(e){return void 0!==e.default}function f(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){const e=.01*Math.min(...t);return{widths:i.filter((t=>t>=r[0]*e)),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>i.find((t=>t>=e))||i[i.length-1])))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map(((e,r)=>s({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u)).join(", "),src:s({config:t,src:n,quality:o,width:l[c]})}}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function p(e){const[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}const g=(0,i.forwardRef)(((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:a,className:s,imgStyle:l,blurStyle:u,isLazy:c,fetchPriority:d,fill:f,placeholder:m,loading:g,srcString:y,config:b,unoptimized:v,loader:_,onLoadRef:w,onLoadingCompleteRef:T,setBlurComplete:x,setShowAltText:M,onLoad:S,onError:C,...O}=e;return g=c?"lazy":g,i.default.createElement("img",{...O,...p(d),loading:g,width:o,height:r,decoding:"async","data-nimg":f?"fill":"1",className:s,style:{...l,...u},...n,ref:(0,i.useCallback)((e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,y,m,w,T,x))}),[y,m,w,T,x,C,v,t]),onLoad:e=>{h(e.currentTarget,y,m,w,T,x)},onError:e=>{M(!0),"blur"===m&&x(!0),C&&C(e)}})})),y=(0,i.forwardRef)(((e,t)=>{let{src:n,sizes:r,unoptimized:h=!1,priority:y=!1,loading:b,className:v,quality:_,width:w,height:T,fill:x,style:M,onLoad:S,onLoadingComplete:C,placeholder:O="empty",blurDataURL:j,fetchPriority:z,layout:E,objectFit:k,objectPosition:D,lazyBoundary:P,lazyRoot:L,...Y}=e;const $=(0,i.useContext)(l.ImageConfigContext),A=(0,i.useMemo)((()=>{const e=c||$||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[$]);let U=Y,R=U.loader||u.default;delete U.loader;const I="__next_img_default"in R;if(I){if("custom"===A.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=R;R=t=>{const{config:n,...r}=t;return e(r)}}if(E){"fill"===E&&(x=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];t&&(M={...M,...t});const n=e[E];n&&!r&&(r=n)}let N,W,H="",F=m(w),G=m(T);if(function(e){return"object"==typeof e&&(d(e)||function(e){return void 0!==e.src}(e))}(n)){const e=d(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(N=e.blurWidth,W=e.blurHeight,j=j||e.blurDataURL,H=e.src,!x)if(F||G){if(F&&!G){const t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){const t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}n="string"==typeof n?n:H;let q=!y&&("lazy"===b||void 0===b);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(h=!0,q=!1),A.unoptimized&&(h=!0),I&&n.endsWith(".svg")&&!A.dangerouslyAllowSVG&&(h=!0),y&&(z="high");const[B,V]=(0,i.useState)(!1),[X,J]=(0,i.useState)(!1),Z=m(_);const Q=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:D}:{},X?{}:{color:"transparent"},M),K="blur"===O&&j&&!B?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:N,blurHeight:W,blurDataURL:j,objectFit:Q.objectFit})+'")'}:{};const ee=f({config:A,src:n,unoptimized:h,width:F,quality:Z,sizes:r,loader:R});let te=n;const ne=(0,i.useRef)(S);(0,i.useEffect)((()=>{ne.current=S}),[S]);const re=(0,i.useRef)(C);(0,i.useEffect)((()=>{re.current=C}),[C]);const ie={isLazy:q,imgAttributes:ee,heightInt:G,widthInt:F,qualityInt:Z,className:v,imgStyle:Q,blurStyle:K,loading:b,config:A,fetchPriority:z,fill:x,unoptimized:h,placeholder:O,loader:R,srcString:te,onLoadRef:ne,onLoadingCompleteRef:re,setBlurComplete:V,setShowAltText:J,...U};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...ie,ref:t}),y?i.default.createElement(o.default,null,i.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:U.crossOrigin,...p(z)})):null)}));("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},15116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return l},default:function(){return u}});const r=n(51538),i=r._(n(32735)),o=r._(n(48928)),a=!1;function s(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){if(delete t.webpack,delete t.modules,!a)return e(t);const n=t.loading;return()=>i.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function u(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};const i=r.loader;return r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr?n({...r,loader:()=>null!=i?i().then(s):Promise.resolve(s((()=>null)))}):(delete r.webpack,delete r.modules,l(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45350:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e;const s=r&&i?"1":"20",l=r||t,u=i||n,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";if(l&&u)return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+s+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E";return"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},65412:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;const r=n},88433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});const r=n(51538)._(n(32735)).default.createContext(null)},48928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});const r=n(51538)._(n(32735)),i=n(88433);const o=[],a=[];let s=!1;function l(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((e=>(n.loading=!1,n.loaded=e,e))).catch((e=>{throw n.loading=!1,n.error=e,e})),n}function u(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function l(){if(!o){const t=new c(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!s){const e=n.webpack?n.webpack():n.modules;e&&a.push((t=>{for(const n of e)if(t.includes(n))return l()}))}function u(e,t){!function(){l();const e=r.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((t=>{e(t)}))}();const a=r.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return r.default.useImperativeHandle(t,(()=>({retry:o.retry})),[]),r.default.useMemo((()=>{return a.loading||a.error?r.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?r.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null;var t}),[e,a])}return u.preload=()=>l(),u.displayName="LoadableComponent",r.default.forwardRef(u)}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),t.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((e=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach((e=>e()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return u(l,e)}function f(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then((()=>{if(e.length)return f(e,t)}))}d.preloadAll=()=>new Promise(((e,t)=>{f(o).then(e,t)})),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise((t=>{const n=()=>(s=!0,t());f(a,e).then(n,n)}))),window.__NEXT_PRELOADREADY=d.preloadReady;const m=d},65218:function(e,t,n){e.exports=n(15116)},38579:function(e,t,n){e.exports=n(6035)},86677:function(e,t,n){e.exports=n(75949)},84102:function(e){e.exports=function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}}}()},91707:function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(e){return e+(1===e?"er":"")}};return n.default.locale(r,null,!0),r}(n(87530))},57664:function(e){e.exports=function(){"use strict";return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),o=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return i.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return i.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return i.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return r.bind(this)(o)}}}()},55477:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,r){var i=n.prototype,o=i.format;r.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,i){var o=i&&i.toUpperCase();return r||n[i]||e[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return o.call(this,r)}}}()},68703:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,o,a,s){for(var l,u,c,d=o.$locale().relativeTime||i,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=f.length,h=0;h<m;h+=1){var p=f[h];p.d&&(l=a?n(t).diff(o,p.d,!0):o.diff(t,p.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,g<=p.r||!p.r){g<=1&&h>0&&(p=f[h-1]);var y=d[p.l];s&&(g=s(""+g)),u="string"==typeof y?y.replace("%d",g):y(g,r,p.l,c);break}}if(r)return u;var b=c?d.future:d.past;return"function"==typeof b?b(u):b.replace("%s",u)},r.to=function(e,t){return o(e,t,this,!0)},r.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(a(this),e)},r.fromNow=function(e){return this.from(a(this),e)}}}()},79014:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,o){var a=i.prototype;o.utc=function(e){return new i({date:e,utc:!0,args:arguments})},a.utc=function(t){var n=o(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var s=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),s.call(this,e)};var l=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=a.utcOffset;a.utcOffset=function(r,i){var o=this.$utils().u;if(o(r))return this.$u?0:o(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],o=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===o?a:-a}(r),null===r))return this;var a=Math.abs(r)<=16?60*r:r,s=this;if(i)return s.$offset=a,s.$u=0===r,s;if(0!==r){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(a+l,e)).$offset=a,s.$x.$localOffset=l}else s=this.utc();return s};var c=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),i=o(e).local();return f.call(r,i,t,n)}}}()},85406:function(e,t,n){"use strict";var r,i,o;i=[t,n(32735),n(60216)],r=function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n),o=a(r);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){if(null==e)return{};var n,r,i=u(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?p(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=1e-4,_=function(e,t){return Math.abs(e-t)<v},w=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return b(p(n=m(this,(e=h(t)).call.apply(e,[this].concat(i)))),"onResize",(function(){n.rafId&&window.cancelAnimationFrame(n.rafId),n.rafId=window.requestAnimationFrame(n.update.bind(p(n)))})),b(p(n),"onToggled",(function(e){"function"==typeof n.props.onToggled&&setTimeout((function(){return n.props.onToggled(e)}),0)})),b(p(n),"onTruncated",(function(){"function"==typeof n.props.onTruncated&&setTimeout((function(){return n.props.onTruncated()}),0)})),b(p(n),"onCalculated",(function(){"function"==typeof n.props.onCalculated&&setTimeout((function(){return n.props.onCalculated()}),0)})),b(p(n),"update",(function(){var e=window.getComputedStyle(n.scope),t=[e["font-weight"],e["font-style"],e["font-size"],e["font-family"],e["letter-spacing"]].join(" ");n.canvas.font=t,n.forceUpdate()})),n}return g(t,e),f(t,[{key:"componentDidMount",value:function(){var e=document.createElement("canvas"),t=document.createDocumentFragment(),n=window.getComputedStyle(this.scope),r=[n["font-weight"],n["font-style"],n["font-size"],n["font-family"]].join(" ");t.appendChild(e),this.canvas=e.getContext("2d"),this.canvas.font=r,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(e){return this.canvas.measureText(e).width}},{key:"getRenderText",value:function(){var e=this.props,t=(e.containerClassName,e.element,e.line),r=(e.onCalculated,e.onTruncated,e.onToggled,e.text),o=e.textElement,a=e.textTruncateChild,s=e.truncateText,u=e.maxCalculateTimes,c=l(e,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),d=this.scope.getBoundingClientRect().width;if(0===d)return null;var f=this.measureWidth(r);if(d>f||_(d,f))return this.onToggled(!1),(0,n.createElement)(o,c,r);var m="";if(a&&"string"==typeof a.type){var h=a.type;(h.indexOf("span")>=0||h.indexOf("a")>=0)&&(m=a.props.children)}for(var p=1,g=r.length,y="",b=0,v=0,w=t,T=0,x=!1,M=!1,S=0,C=-1,O="",j=0;w-- >0;){for(O=w?"":s+(m?" "+m:"");p<=g;){if(y=r.substr(v,p),!((T=this.measureWidth(y+O))<d)){do{if(j++>=u)break;y=r.substr(v,p),w||p--," "===y[y.length-1]&&(y=r.substr(v,p-1)),x&&(C=y.lastIndexOf(" "))>-1?(p=C,w&&p++,y=r.substr(v,p)):(p--,y=r.substr(v,p)),T=this.measureWidth(y+O)}while((T>d||_(T,d))&&y.length>0);v+=p;break}-1===(b=r.indexOf(" ",p+1))?(p+=1,x=!1):(x=!0,p=b)}if(p>=g){v=g;break}x&&!M&&-1===r.substr(S,p).indexOf(" ")&&(M=-1===r.substr(S,p).indexOf(" "),w--),S=p+1}return v===g?(this.onToggled(!1),(0,n.createElement)(o,c,r)):(this.onTruncated(),this.onToggled(!0),i.default.createElement("span",c,(0,n.createElement)(o,c,r.substr(0,v)+s+" "),a))}},{key:"render",value:function(){var e=this,t=this.props,r=t.element,i=t.text,o=t.style,a=void 0===o?{}:o,s=t.containerClassName,u=t.line,c=(t.onCalculated,t.onTruncated,t.onToggled,t.textElement),d=(t.textTruncateChild,t.truncateText,t.maxCalculateTimes,l(t,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"])),f=a.fontWeight,m=a.fontStyle,h=a.fontSize,p=a.fontFamily,g=this.scope&&u?this.getRenderText():(0,n.createElement)(c,d,i),y={ref:function(t){e.scope=t},className:s,style:{overflow:"hidden",fontWeight:f,fontStyle:m,fontSize:h,fontFamily:p}};return this.scope&&this.onCalculated(),(0,n.createElement)(r,y,g)}}]),t}(n.Component);b(w,"propTypes",{containerClassName:o.default.string,element:o.default.string,line:o.default.oneOfType([o.default.number,o.default.bool]),onCalculated:o.default.func,onTruncated:o.default.func,onToggled:o.default.func,text:o.default.string,textElement:o.default.elementType,textTruncateChild:o.default.node,truncateText:o.default.string,maxCalculateTimes:o.default.number}),b(w,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),t.default=w,e.exports=t.default},void 0===(o="function"==typeof r?r.apply(t,i):r)||(e.exports=o)},54319:function(e,t,n){!function(){"use strict";var e={"./src/components/constants.ts":function(e,t){var n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.device=t.constants=t.ScreenSize=t.sizes=void 0,t.sizes={desktopMinSize:1280,tabletMinSize:768},function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(r=t.ScreenSize||(t.ScreenSize={})),t.constants={maxContentWidth:"".concat(t.sizes.desktopMinSize,"px"),primaryYellow:"#f6d906"},t.device=((n={})[r.SMALL]="(max-width: ".concat(t.sizes.tabletMinSize-1,"px)"),n[r.MEDIUM]="(min-width: ".concat(t.sizes.tabletMinSize,"px) and (max-width: ").concat(t.sizes.desktopMinSize-1,"px)"),n[r.LARGE]="(min-width: ".concat(t.sizes.desktopMinSize,"px)"),n)},"./src/components/index.tsx":function(e,t,n){var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UnderlineTextNoAnimation=t.UnderlineText=t.Underline=t.UnderlineStyle=t.TransitionAnimationTime=t.ResponsiveContainer=void 0;var s=n("./src/components/constants.ts"),l=a(n("styled-components"));t.ResponsiveContainer=l.default.div(u||(u=r(["\n    max-width: ",";\n    margin: 0 auto;\n    width: 100%;\n"],["\n    max-width: ",";\n    margin: 0 auto;\n    width: 100%;\n"])),s.constants.maxContentWidth),t.TransitionAnimationTime=(0,l.css)(c||(c=r(["\n    transition: all .45s cubic-bezier(.19,1,.22,1);\n"],["\n    transition: all .45s cubic-bezier(.19,1,.22,1);\n"]))),t.UnderlineStyle=(0,l.css)(d||(d=r(["\n    width: 100%;\n    background-color: ",";\n"],["\n    width: 100%;\n    background-color: ",";\n"])),s.constants.primaryYellow),t.Underline=l.default.div(f||(f=r(["\n    ",";\n"],["\n    ",";\n"])),t.UnderlineStyle);var u,c,d,f,m,h,p,g,y,b=(0,l.css)(m||(m=r(["\n    "," {\n        transform-origin: bottom left;\n        transform: scaleX(0);\n        ",";\n    }\n"],["\n    "," {\n        transform-origin: bottom left;\n        transform: scaleX(0);\n        ",";\n    }\n"])),t.Underline,t.TransitionAnimationTime),v=(0,l.css)(h||(h=r(["\n    "," {\n        background-color: ",";\n        transform: scaleX(1);\n        ","\n    }\n"],["\n    "," {\n        background-color: ",";\n        transform: scaleX(1);\n        ","\n    }\n"])),t.Underline,s.constants.primaryYellow,t.TransitionAnimationTime),_=(0,l.css)(p||(p=r(["\n    @media ",","," {\n        ",";\n        :hover {\n            ","\n        };\n    }\n"],["\n    @media ",","," {\n        ",";\n        :hover {\n            ","\n        };\n    }\n"])),s.device[s.ScreenSize.LARGE],s.device[s.ScreenSize.MEDIUM],b,v);t.UnderlineText=l.default.li(g||(g=r(["\n    position: relative;\n    list-style-type: none;\n    ",";\n"],["\n    position: relative;\n    list-style-type: none;\n    ",";\n"])),_),t.UnderlineTextNoAnimation=l.default.li(y||(y=r(["\n    list-style-type: none;\n"],["\n    list-style-type: none;\n"])))},"styled-components":function(e){e.exports=n(83258)}},r={};function i(t){var n=r[t];if(void 0!==n)return n.exports;var o=r[t]={exports:{}};return e[t].call(o.exports,o,o.exports,i),o.exports}var o={};!function(){var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.TransitionAnimationTime=e.UnderlineStyle=e.UnderlineTextNoAnimation=e.UnderlineText=e.Underline=e.ResponsiveContainer=void 0;var t=i("./src/components/index.tsx");Object.defineProperty(e,"ResponsiveContainer",{enumerable:!0,get:function(){return t.ResponsiveContainer}}),Object.defineProperty(e,"Underline",{enumerable:!0,get:function(){return t.Underline}}),Object.defineProperty(e,"UnderlineText",{enumerable:!0,get:function(){return t.UnderlineText}}),Object.defineProperty(e,"UnderlineTextNoAnimation",{enumerable:!0,get:function(){return t.UnderlineTextNoAnimation}}),Object.defineProperty(e,"UnderlineStyle",{enumerable:!0,get:function(){return t.UnderlineStyle}}),Object.defineProperty(e,"TransitionAnimationTime",{enumerable:!0,get:function(){return t.TransitionAnimationTime}})}();var a=t;for(var s in o)a[s]=o[s];o.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})}()}}]);