(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2429],{16101:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/torontoist",function(){return n(64842)}])},64842:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i=n(85893);n(67294);var a=n(42104),o=n.n(a),r=n(41664),c=n.n(r),l=n(62056),s=n(42830),p=n(61206);function d(){return(0,i.jsxs)("main",{className:o().container,children:[(0,i.jsx)(p.Z,{title:"Daily Hive | Torontoist",description:"The Torontoist was sold to Daily Hive"}),(0,i.jsx)("h1",{className:o().title,children:"The Torontoist was sold to"}),(0,i.jsx)(s.Z,{channel:"dailyhive",white:!0,color:!0,className:o().logo}),(0,i.jsx)("p",{className:o().body,children:"If you want to stay up-to-date with what’s going on in your city, check out DailyHive Toronto"}),(0,i.jsx)(c(),{href:"/",className:o().button,children:(0,i.jsx)(l.D,{palette:"aqua",children:"START BROWSING DAILY HIVE"})})]})}},42830:function(t,e,n){"use strict";var i=n(85893);n(67294);var a=n(45697),o=n.n(a),r=n(11752);let{publicRuntimeConfig:c}=n.n(r)()(),{ASSETS_FOLDER:l}=c,s=t=>{let{white:e,color:n,channel:a,className:o}=t,r="".concat(l,"/static/svg/logos"),c=["logo-image",a];o&&c.push(o);let s="".concat(a,"-logo");return n&&e?s="".concat(a,"-color-white"):n?s="".concat(a,"-color"):e&&(s="".concat(a,"-logo-white")),(0,i.jsx)("img",{"data-testid":"".concat(a,"-logo-icon"),className:c.join(" "),src:"".concat(r,"/").concat(s,".svg"),alt:"".concat(a," logo")})};e.Z=s,s.propTypes={white:o().bool,color:o().bool,channel:o().string,className:o().string}},61206:function(t,e,n){"use strict";var i=n(85893);n(67294);var a=n(9008),o=n.n(a),r=n(45697),c=n.n(r),l=n(11163),s=n(11752);let{publicRuntimeConfig:p}=n.n(s)()(),{SITE_URL:d,ASSETS_FOLDER:u}=p,h=t=>{var e,n,a,r,c,s,p,h,m,x;let g=(0,l.useRouter)(),v=t.title||"Daily Hive |",f=t.description||"Daily Hive",_=(null==t?void 0:null===(e=t.article)||void 0===e?void 0:e.meta_description)||t.excerpt||f,j=t.url||"".concat(d).concat(g.asPath)||"";j&&-1===j.indexOf(d)&&(j="".concat(d).concat(j));let b=t.image||"",w=t.canonical||"".concat(d).concat(g.asPath)||"",y=(null==t?void 0:null===(n=t.article)||void 0===n?void 0:n.fb_meta_title)?"".concat(t.article.fb_meta_title," | ").concat((null==t?void 0:null===(a=t.article)||void 0===a?void 0:a.getChannelName)||""):v,k=(null==t?void 0:null===(r=t.article)||void 0===r?void 0:r.tw_meta_title)?"".concat(t.article.tw_meta_title," | ").concat((null==t?void 0:null===(c=t.article)||void 0===c?void 0:c.getChannelName)||""):y,N=(null==t?void 0:null===(s=t.article)||void 0===s?void 0:s.fb_meta_description)||_,T=(null==t?void 0:null===(p=t.article)||void 0===p?void 0:p.tw_meta_description)||N,q=(null==t?void 0:null===(h=t.article)||void 0===h?void 0:h.categories)||[],D=(null==t?void 0:null===(m=t.article)||void 0===m?void 0:m.locations)||[],S=D.length&&D.filter(t=>j.includes(t.slug))[0],A=!!q.find(t=>t&&"opinions"===t.slug),B=(null==t?void 0:null===(x=t.article)||void 0===x?void 0:x.getFacebookNewsTagCategories)||[];return(0,i.jsxs)(o(),{children:[(0,i.jsx)("meta",{charSet:"UTF-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"}),(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:large"}),(0,i.jsx)("link",{rel:"icon",sizes:"192x192",href:"".concat(u,"/static/icons/android-chrome-192x192.png")}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"".concat(u,"/static/icons/apple-touch-icon.png")}),(0,i.jsx)("link",{rel:"mask-icon",href:"".concat(u,"/static/icons/safari-pinned-tab.svg"),color:"#031831"}),(0,i.jsx)("link",{rel:"icon",href:"".concat(u,"/static/icons/favicon-16x16.png")}),(0,i.jsx)("title",{children:t.title||v}),(0,i.jsx)("meta",{property:"og:title",content:y}),(0,i.jsx)("meta",{name:"twitter:title",content:k}),(0,i.jsx)("meta",{property:"fb:app_id",content:"628988490846386"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:standard"}),S&&S.slug&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"article:location",content:"city:".concat(S.slug)}),(0,i.jsx)("meta",{property:"article:location",content:"region:".concat("seattle"===S.slug||"portland"===S.slug?"usa":"can")})]}),B.length&&B.map((t,e)=>(0,i.jsx)("meta",{property:"article:tag",content:t},e)),t.article&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("meta",{property:"article:opinion",content:A})}),j&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:j}),(0,i.jsx)("meta",{name:"twitter:site",content:j})]}),_&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:_}),(0,i.jsx)("meta",{property:"og:description",content:N}),(0,i.jsx)("meta",{name:"twitter:description",content:T})]}),b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:image",content:b}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{name:"twitter:image",content:b})]}),w&&(0,i.jsx)("link",{rel:"canonical",href:w},"viewport"),(0,i.jsx)("meta",{name:"theme-color",content:"#031831"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",href:"/apple-launch-1242x2688.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-828x1792.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",href:"/apple-launch-1125x2436.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",href:"/apple-launch-1242x2208.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-750x1334.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-2048x2732.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-1668x2388.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-1668x2224.png"}),(0,i.jsx)("link",{rel:"apple-touch-startup-image",media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",href:"/apple-launch-1536x2048.png"}),t.children]})};h.propTypes={title:c().string,description:c().string,url:c().string,image:c().string,canonical:c().string,excerpt:c().string,article:c().object,children:c().any},e.Z=h},92720:function(t,e,n){"use strict";n.d(e,{Y:function(){return u}});var i=n(85893),a=n(63719),o=n(45697),r=n.n(o),c=n(67294),l=n(93967),s=n.n(l),p=n(57069),d=n.n(p);function u(t){let e=(0,c.useRef)(),{buttonProps:n}=(0,a.U)(t,e),{children:o}=t;return(0,i.jsx)("button",{...n,ref:e,className:s()(t.className,d().baseButton),children:o})}u.propTypes={className:r().string,children:r().node}},62056:function(t,e,n){"use strict";n.d(e,{D:function(){return d}});var i=n(85893);n(67294);var a=n(45697),o=n.n(a),r=n(93967),c=n.n(r),l=n(92720),s=n(57069),p=n.n(s);function d(t){let{children:e}=t,n=t.palette||"default";return(0,i.jsx)(l.Y,{...t,className:c()(p().dhButton,t.className,p()[n],{[p().disabled]:t.isDisabled}),children:e})}d.propTypes={children:o().node.isRequired,className:o().string,palette:o().oneOf(["default","listed","aqua","reverseAqua"])}},57069:function(t){t.exports={baseButton:"button_baseButton__WsvJ5",dhButton:"button_dhButton__Aqj_d",default:"button_default__9_ko8",listed:"button_listed__SEgu3",aqua:"button_aqua__a5CWU",reverseAqua:"button_reverseAqua__HjXt_",disabled:"button_disabled__7kIoG"}},42104:function(t){t.exports={container:"torontoist_container__rfEfy",title:"torontoist_title__H6XiB",logo:"torontoist_logo__7R_Yl",body:"torontoist_body__QQgFl",button:"torontoist_button__z7qpn"}},9008:function(t,e,n){t.exports=n(6665)},93967:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=o(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)i.call(t,n)&&t[n]&&(e=o(e,n));return e}(n)))}return t}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(a.default=a,t.exports=a):void 0!==(n=(function(){return a}).apply(e,[]))&&(t.exports=n)}()}},function(t){t.O(0,[3719,2888,9774,179],function(){return t(t.s=16101)}),_N_E=t.O()}]);