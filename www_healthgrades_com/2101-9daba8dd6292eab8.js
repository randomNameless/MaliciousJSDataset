"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2101],{65880:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(25839),i=n.n(r)},35658:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(84732),i=n(45622),o=n(27573),a=i._(n(7653)),l=r._(n(3458)),s=r._(n(64830)),d=n(84163),u=n(68703),f=n(9273);n(81673);let c=n(1917),p=r._(n(43804)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:d,className:u,style:f,fetchPriority:c,placeholder:p,loading:g,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:j,sizesInput:x,onLoad:S,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(c),loading:g,width:s,height:l,decoding:d,"data-nimg":v?"fill":"1",className:u,style:f,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,p,b,_,w,y,x))},[n,p,b,_,w,C,y,x,t]),onLoad:e=>{m(e.currentTarget,p,b,_,w,y,x)},onError:e=>{j(!0),"empty"!==p&&w(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(c.RouterContext),r=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[b,_]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:x,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...x,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68733:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(84732)._(n(7653)).default.createContext({})},89342:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},84163:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(81673);let r=n(31059),i=n(68703);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,d,{src:u,sizes:f,unoptimized:c=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:v,fill:b=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:x,placeholder:S="empty",blurDataURL:C,fetchPriority:P,layout:O,objectFit:z,objectPosition:E,lazyBoundary:M,lazyRoot:I,...k}=e,{imgConf:A,showAltText:R,blurComplete:D,defaultLoader:N}=t,L=A||i.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=k.loader||N;delete k.loader,delete k.srcSet;let U="__next_img_default"in T;if(U){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!f&&(f=t)}let B="",F=a(y),G=a(v);if("object"==typeof(n=u)&&(o(n)||void 0!==n.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,B=e.src,!b){if(F||G){if(F&&!G){let t=F/e.width;G=Math.round(e.height*t)}else if(!F&&G){let t=G/e.height;F=Math.round(e.width*t)}}else F=e.width,G=e.height}}let H=!p&&("lazy"===g||void 0===g);(!(u="string"==typeof u?u:B)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,H=!1),l.unoptimized&&(c=!0),U&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(c=!0),p&&(P="high");let W=a(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},R?{}:{color:"transparent"},_),q=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:G,blurWidth:s,blurHeight:d,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+S+'")',$=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:l({config:t,src:n,quality:o,width:s[u]})}}({config:l,src:u,unoptimized:c,width:F,quality:W,sizes:f,loader:T});return{props:{...k,loading:H?"lazy":g,fetchPriority:P,width:F,height:G,decoding:"async",className:m,style:{...V,...$},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:c,priority:p,placeholder:S,fill:b}}}},64830:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return f}});let r=n(84732),i=n(45622),o=n(27573),a=i._(n(7653)),l=r._(n(39605)),s=n(68733),d=n(50241),u=n(89342);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(81673);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:g,headManager:r,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31059:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},9273:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(84732)._(n(7653)),i=n(68703),o=r.default.createContext(i.imageConfigDefault)},68703:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},25839:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(84732),i=n(84163),o=n(35658),a=r._(n(43804));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},43804:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},39605:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(7653),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},96326:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(24998);n(7653);var i=n(2219);let o=n(50183).c.bind({"logo-heart":"_logo-heart_1a6qr_27"}),a={secondary:"#0202EA",inverse:"#ffffff"},l=({ariaHidden:e=!0,className:t,inverse:n,title:i="Healthgrades",width:l})=>{let s=n?a.inverse:a.secondary;return r.j.jsxs("svg",{className:o({[t]:t,"logo-heart":!0,"logo-heart--standard":!n,"logo-heart--inverse":n}),"aria-hidden":!!e||null,viewBox:"0 0 30 24",width:l,fill:s,children:[r.j.jsx("title",{children:i}),r.j.jsx("path",{d:"M26.175 11.627c-.561-.561-1.429-.561-2.015-.051l-7.552 7.551c-.434.434-1.122.434-1.53 0-.434-.433-.434-1.122 0-1.53l2.704-2.704v-.026l2.806-2.806a1.478 1.478 0 000-2.067 1.478 1.478 0 00-2.066 0l-1.888 1.888c-.434.434-1.097.434-1.531 0s-.434-1.097 0-1.53l6.53-6.531c.562-.562.562-1.506 0-2.067s-1.504-.561-2.065 0l-3.24 3.164a1.48 1.48 0 01-1.021.433c-.357 0-.714-.127-.995-.382l-3.036-3.036a6.605 6.605 0 00-9.337 0A6.562 6.562 0 000 6.6c0 1.761.69 3.42 1.94 4.67l12.246 12.246c0 .013.006.019.013.025s.013.013.013.026c.28.28.663.434 1.046.434s.74-.154 1.046-.434l9.847-9.848a1.486 1.486 0 00.026-2.092z"}),r.j.jsx("path",{d:"M21.43 9.127c.28.28.663.433 1.046.433s.74-.153 1.046-.433l5.255-5.256a1.478 1.478 0 000-2.066 1.478 1.478 0 00-2.066 0L21.455 7.06a1.412 1.412 0 00-.025 2.067zm7.908.433a1.454 1.454 0 10-2.908 0 1.454 1.454 0 002.908 0z"})]})};l.propTypes={ariaHidden:i.p.bool,className:i.p.string,inverse:i.p.bool,title:i.p.string,width:i.p.oneOfType([i.p.string,i.p.number])}}}]);