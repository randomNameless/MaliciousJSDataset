(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{23686:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let r=i(38754),o=i(61757),n=i(85893),s=o._(i(67294)),l=r._(i(73935)),a=r._(i(6665)),u=i(61908),d=i(94706),c=i(35670);i(61558);let f=i(1973),g=r._(i(43293)),p={deviceSizes:[370,410,640,768,1024,1200,1920],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,r,o,n){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,i]=s.version.split(".",2),r=parseInt(t,10),o=parseInt(i,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:o,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:p,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:S,setShowAltText:_,onLoad:j,onError:x,...C}=e;return(0,n.jsx)("img",{...C,...h(f),loading:p,width:a,height:l,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:o,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,g,w,y,S,v))},[i,g,w,y,S,x,v,t]),onLoad:e=>{m(e.currentTarget,g,w,y,S,v)},onError:e=>{_(!0),"empty"!==g&&S(!0),x&&x(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...h(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=p||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let[w,y]=(0,s.useState)(!1),[S,_]=(0,s.useState)(!1),{props:j,meta:x}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:w,showAltText:S});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,ref:t}),x.priority?(0,n.jsx)(b,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61908:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(61558);let r=i(7386),o=i(94706);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:b,fill:w=!1,style:y,onLoad:S,onLoadingComplete:_,placeholder:j="empty",blurDataURL:x,fetchPriority:C,layout:z,objectFit:P,objectPosition:E,lazyBoundary:O,lazyRoot:I,...R}=e,{imgConf:M,showAltText:k,blurComplete:N,defaultLoader:A}=t,D=M||o.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}let B=R.loader||A;delete R.loader,delete R.srcSet;let G="__next_img_default"in B;if(G){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:i,...r}=t;return e(r)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let L="",F=s(v),W=s(b);if("object"==typeof(i=d)&&(n(i)||void 0!==i.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,L=e.src,!w){if(F||W){if(F&&!W){let t=F/e.width;W=Math.round(e.height*t)}else if(!F&&W){let t=W/e.height;F=Math.round(e.width*t)}}else F=e.width,W=e.height}}let T=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,T=!1),l.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let U=s(h),V=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:E}:{},k?{}:{color:"transparent"},y),q=N||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:W,blurWidth:a,blurHeight:u,blurDataURL:x||"",objectFit:V.objectFit})+'")':'url("'+j+'")',J=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:n,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:i,quality:n,width:a[d]})}}({config:l,src:d,unoptimized:f,width:F,quality:U,sizes:c,loader:B});return{props:{...R,loading:T?"lazy":p,fetchPriority:C,width:F,height:W,decoding:"async",className:m,style:{...V,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},meta:{unoptimized:f,priority:g,placeholder:j,fill:w}}}},7386:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=r?40*r:t,a=o?40*o:i,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},19267:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{getImageProps:function(){return l},default:function(){return a}});let r=i(38754),o=i(61908),n=i(23686),s=r._(i(43293)),l=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[370,410,640,768,1024,1200,1920],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},a=n.Image},43293:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},25675:function(e,t,i){e.exports=i(19267)}}]);