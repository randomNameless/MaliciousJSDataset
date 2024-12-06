"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7384],{7384:function(e,t,l){l.d(t,{lr:function(){return j},Li:function(){return R}});var n=l(85893),a=l(40645),i=l.n(a),o=l(67294),s=l(45697),r=l.n(s),c=l(23279),d=l.n(c),u=l(93967),m=l.n(u),h=l(86877),x=l(32659),p=l(24036),f=l(98132),b=l(72054),y=l(6850);function w(e){let{onPrev:t,onNext:l,scrollPosition:a={head:0,tail:null},className:i="",totalItemsCount:s=1,activeItem:r=1,indicators:c=!1}=e,{head:d,tail:u}=a;return(0,o.useEffect)(()=>{},[]),(0,n.jsxs)("div",{className:m()("flex text-black-300",i),children:[(0,n.jsx)("button",{className:m()({"cursor-default opacity-50":0===d,"mr-2":!c}),onClick:t,disabled:0===d,"aria-label":"previous slide",type:"button",children:(0,n.jsx)(b.W,{className:"text-3xl"})}),c&&(0,n.jsxs)("div",{className:"w-24 mx-auto text-center text-sm font-semibold text-black-300",children:[r," / ",s]}),(0,n.jsx)("button",{className:m()({"cursor-default opacity-50":0===u}),onClick:l,disabled:0===u,"aria-label":"next slide",type:"button",children:(0,n.jsx)(y.T,{className:"text-3xl"})})]})}w.propTypes={className:r().string,onPrev:r().func.isRequired,onNext:r().func.isRequired,scrollPosition:r().shape({head:r().number,tail:r().number}),indicators:r().bool,totalItemsCount:r().number,activeItem:r().number};var g=l(21980);function v(e){let{children:t,activeChild:l,scrollPosition:a}=e,i=(null==a?void 0:a.tail)===0,o=Math.floor((t.length-2)/2),s=e=>0===e&&0===l,r=e=>1===e&&l>0&&l<=o,c=e=>2===e&&l>o&&l<t.length-1,d=e=>3===e&&(l===t.length-1||i),u=e=>t.length>4?s(e)||r(e)||c(e)||d(e):l===e;return(0,n.jsx)("div",{className:"mt-4 flex justify-center items-center md:hidden",children:[...Array(Math.min(4,t.length))].map((e,t)=>{let l=u(t);return(0,n.jsx)(g.z,{width:"18",className:m()("mx-0.5",l?"text-black-200":"text-black")},"carousel-indicator-".concat(t))})})}v.propTypes={children:r().arrayOf(r().node).isRequired,activeChild:r().number.isRequired,scrollPosition:r().shape({tail:r().number})},v.defaultProps={scrollPosition:{tail:0}};let N={1:"md:w-full",2:"md:w-1/2",3:"md:w-1/3",4:"md:w-1/4",5:"md:w-1/5"},E={xs:"w-[45%]",sm:"w-2/3",lg:"w-90",full:"w-full"};function j(e){let{activeItem:t=0,className:l="",contained:a=!0,mobileItemSize:s="lg",pageSize:r=3,scrollPadding:c=!0,cardClassNames:u="",listClassNames:b="",tagularPosition:y="CAROUSEL",prevArrowTagularPosition:g="",nextArrowTagularPosition:j="",tagularName:O="",polite:k=!1,showMobileControls:T=!1,showMobileIndicators:L=!1,link:I=null,tagularLocation:R="SECTION",children:S}=e,[C,P]=(0,p.x)(e=>e),A=(0,f.X)(),{offsetWidth:U,scrollLeft:W,scrollWidth:_}=C||{},[M,q]=(0,o.useState)(0),[D,z]=(0,o.useState)(0),[B,X]=(0,o.useState)({pageWidth:0,head:0,tail:null}),K=S.length>parseInt(r,10),V=e=>{let{offsetWidth:t,scrollLeft:l,scrollWidth:n}=e||{};return{pageWidth:t,head:l,tail:n-t-l}},F=e=>{C.scroll({top:0,left:e,behavior:"smooth"})},G=(0,o.useCallback)(()=>{let{head:e,tail:t,pageWidth:l}=V(C);F(t>=l?e+l:e+t),(0,x.yv)("click",{actionOutcome:"SLIDE",outboundUrl:"NULL",webElement:{location:R,elementType:"BUTTON",position:j||y,text:"NEXT ARROW",...O&&{name:O}}})},[C,y,R,O]),H=(0,o.useCallback)(()=>{let{head:e,pageWidth:t}=V(C);F(e>=t?e-t:0),(0,x.yv)("click",{actionOutcome:"SLIDE",outboundUrl:"NULL",webElement:{location:R,elementType:"BUTTON",position:g||y,text:"PREV ARROW",...O&&{name:O}}})},[C,y,R,O]),J=d()(()=>{let e=V(C);X(e),M>0&&z(Math.round(e.head/M))},20,{leading:!0,trailing:!0}),Q=(0,o.useMemo)(()=>d()(()=>{let e=B.head;V(C).head>e&&A&&(0,x.yv)("swipe",{actionOutcome:"SLIDE",webElement:{location:R||"CARDS",elementType:"ARROW",position:y,name:O,text:""}})},600),[A,C]);return(0,o.useEffect)(()=>{X(V(C||{}))},[U,W,_,C]),(0,o.useEffect)(()=>{if(t){let{offsetLeft:e}=C.children[t];F(e)}},[t]),(0,o.useEffect)(()=>{C&&C.children.length>0&&q(C.children[0].offsetWidth)},[C,null==C?void 0:C.children]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:i().dynamic([["e2e9ae58467ec578",[c?"32px":0]]])+" "+(m()({"max-w-full overflow-x-hidden px-4 lg:container":!a},{container:a},l)||""),children:[(0,n.jsx)("ul",{ref:P,onScroll:()=>{J(),Q()},...k?{"aria-live":"polite"}:{},className:i().dynamic([["e2e9ae58467ec578",[c?"32px":0]]])+" "+(m()("carousel flex overflow-x-scroll md:overflow-x-auto overflow-y-hidden -mx-4",b)||""),children:S.map(e=>{let{key:t}=e;return(0,n.jsx)("li",{className:i().dynamic([["e2e9ae58467ec578",[c?"32px":0]]])+" "+(m()("carousel-item flex-shrink-0 px-4 pb-2",E[s],N[r],u)||""),children:e},t)})}),(K||I)&&(0,n.jsxs)("div",{className:i().dynamic([["e2e9ae58467ec578",[c?"32px":0]]])+" "+(m()("md:flex items-center mt-4",T?"flex justify-center":"hidden",K?"md:justify-end":"md:justify-start")||""),children:[I&&(0,n.jsx)(h.z,{type:"button",href:I.href,className:"mr-10 btn",onClick:()=>{(0,x.yv)("click",{actionOutcome:"INTERNALLINK",outboundUrl:"".concat("https://www.lonelyplanet.com").concat(I.href),webElement:{location:"SECTION",text:"VIEWALL",elementType:"LINK",position:y}})},children:I.text}),K&&(0,n.jsx)(w,{onPrev:H,onNext:G,scrollPosition:B,tagularPosition:y,tagularName:O})]}),(0,n.jsx)(i(),{id:"e2e9ae58467ec578",dynamic:[c?"32px":0],children:".carousel.__jsx-style-dynamic-selector{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none;scroll-padding-right:".concat(c?"32px":0,"}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none}.carousel-item.__jsx-style-dynamic-selector{scroll-snap-align:start}")})]}),I&&(0,n.jsx)("div",{className:"mt-10 text-center md:hidden",children:(0,n.jsx)(h.z,{type:"button",href:I.href,className:"btn",onClick:()=>{(0,x.yv)("click",{actionOutcome:"INTERNALLINK",outboundUrl:"".concat("https://www.lonelyplanet.com").concat(I.href),webElement:{location:"SECTION",text:"VIEWALL",elementType:"LINK",position:y}})},children:I.text})}),L&&(0,n.jsx)(v,{activeChild:D,scrollPosition:B,children:S})]})}let O={activeItem:r().number,children:r().oneOfType([r().arrayOf(r().node),r().node]).isRequired,className:r().string,contained:r().bool,mobileItemSize:r().oneOf(["xs","sm","lg","full"]),pageSize:r().number,cardClassNames:r().string,listClassNames:r().string,scrollPadding:r().bool,tagularPosition:r().string,prevArrowTagularPosition:r().string,nextArrowTagularPosition:r().string,tagularName:r().string,polite:r().bool,showMobileControls:r().bool,showMobileIndicators:r().bool,link:r().shape({href:r().string.isRequired,text:r().string.isRequired}),tagularLocation:r().string};j.propTypes=O;var k=l(5152),T=l.n(k),L=l(77071);let I=T()(()=>l.e(8440).then(l.bind(l,18440)).then(e=>e.FullScreenGallery),{loadableGenerated:{webpack:()=>[18440]},ssr:!1});function R(e){var t;let{activeItem:l=0,className:a="",scrollPadding:s=!0,listClassNames:r="",tagularPosition:c="CAROUSEL",prevArrowTagularPosition:u="",nextArrowTagularPosition:b="",tagularName:y="",polite:g=!1,tagularLocation:v="SECTION",children:N,itemMeta:E,expand:j=!1,images:O=[]}=e,[k,T]=(0,p.x)(e=>e),R=(0,f.X)(),{offsetWidth:S,scrollLeft:C,scrollWidth:P}=k||{},[A,U]=(0,o.useState)(0),[W,_]=(0,o.useState)(0),[M,q]=(0,o.useState)(!1),[D,z]=(0,o.useState)({pageWidth:0,head:0,tail:null}),B=e=>{let{offsetWidth:t,scrollLeft:l,scrollWidth:n}=e||{};return{pageWidth:t,head:l,tail:n-t-l}},X=e=>{k.scroll({top:0,left:e,behavior:"smooth"})},K=(0,o.useCallback)(()=>{let{head:e,tail:t,pageWidth:l}=B(k);X(t>=l?e+l:e+t),(0,x.yv)("click",{actionOutcome:"SLIDE",outboundUrl:"NULL",webElement:{location:v,elementType:"BUTTON",position:b||c,text:"NEXT ARROW",...y&&{name:y}}})},[k,c,v,y]),V=(0,o.useCallback)(()=>{let{head:e,pageWidth:t}=B(k);X(e>=t?e-t:0),(0,x.yv)("click",{actionOutcome:"SLIDE",outboundUrl:"NULL",webElement:{location:v,elementType:"BUTTON",position:u||c,text:"PREV ARROW",...y&&{name:y}}})},[k,c,v,y]),F=d()(()=>{let e=B(k);z(e),A>0&&_(Math.round(e.head/A))},20,{leading:!0,trailing:!0}),G=(0,o.useMemo)(()=>d()(()=>{let e=D.head;B(k).head>e&&R&&(0,x.yv)("swipe",{actionOutcome:"SLIDE",webElement:{location:v||"CARDS",elementType:"ARROW",position:c,name:y,text:""}})},600),[R,k]);return(0,o.useEffect)(()=>{z(B(k||{}))},[S,C,P,k]),(0,o.useEffect)(()=>{if(l){let{offsetLeft:e}=k.children[l];X(e)}},[l]),(0,o.useEffect)(()=>{k&&k.children.length>0&&U(k.children[0].offsetWidth)},[k,null==k?void 0:k.children]),(0,n.jsxs)("div",{className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" "+(m()("carousel-container max-w-full overflow-x-hidden space-y-4",a)||""),children:[(0,n.jsx)("ul",{ref:T,onScroll:()=>{F(),G()},...g?{"aria-live":"polite"}:{},className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" "+(m()("carousel flex overflow-x-scroll md:overflow-x-auto overflow-y-hidden -mx-4",r)||""),children:N.map(e=>{let{key:t}=e;return(0,n.jsx)("li",{className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" flex-shrink-0 w-full px-4 carousel-item",children:e},t)})}),(0,n.jsxs)("div",{className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" container flex flex-wrap items-center mx-auto space-y-4 sm:flex-nowrap xl:max-w-6xl sm:space-y-0",children:[(0,n.jsx)("p",{className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" w-full text-xs md:mx-12 grow sm:w-auto h-14 sm:h-auto",children:null===(t=E[W])||void 0===t?void 0:t.figcaption}),(0,n.jsxs)("div",{className:i().dynamic([["bb287a8ea37afb1b",[s?"32px":0]]])+" "+(m()("w-full flex justify-center items-center sm:w-content sm:gap-6 ",j&&"justify-between")||""),children:[(0,n.jsx)(w,{indicators:!0,className:"items-center text-blue",onPrev:V,onNext:K,scrollPosition:D,tagularPosition:c,tagularName:y,totalItemsCount:N.length,activeItem:W+1}),j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(h.z,{onClick:()=>{q(!0),(0,x.yv)("click",{actionOutcome:"open",outboundUrl:"null",webElement:{location:"hero",position:"gallery",text:"show photos",elementType:"button"}})},className:"flex items-center h-10 btn-primary sm:hidden",children:[(0,n.jsx)(L.M,{className:"inline-flex mr-2"})," Expand"]}),M&&(0,n.jsx)(I,{currentImageIndex:W,images:O,handleExit:()=>q(!1)})]})]})]}),(0,n.jsx)(i(),{id:"bb287a8ea37afb1b",dynamic:[s?"32px":0],children:".carousel.__jsx-style-dynamic-selector{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;-ms-overflow-style:none;scrollbar-width:none;scroll-padding-right:".concat(s?"32px":0,"}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none}.carousel-item.__jsx-style-dynamic-selector{scroll-snap-align:start}")})]})}R.propTypes={activeItem:r().number,children:r().oneOfType([r().arrayOf(r().node),r().node]).isRequired,className:r().string,expand:r().bool,images:r().arrayOf(r().shape({src:r().string.isRequired,alt:r().string,width:r().number,height:r().number})),itemMeta:r().arrayOf(r().shape({figcaption:r().string})),listClassNames:r().string,nextArrowTagularPosition:r().string,polite:r().bool,prevArrowTagularPosition:r().string,scrollPadding:r().bool,tagularLocation:r().string,tagularName:r().string,tagularPosition:r().string}},98132:function(e,t,l){l.d(t,{X:function(){return a},O:function(){return i.O}});var n=l(67294);let a=()=>{let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{t(!!(void 0===window.navigator?"":navigator.userAgent).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))},[]),e};var i=l(33183)},33183:function(e,t,l){l.d(t,{O:function(){return i}});var n=l(67294),a=l(75874);let i=()=>{let[e,t]=(0,n.useState)({width:void 0,screen:void 0});return(0,n.useEffect)(()=>{let e=()=>{t({width:window.innerWidth,screen:Object.entries(a.screens).reduce((e,t)=>{let[l,n]=t;return window.matchMedia("(min-width: ".concat(n,")")).matches?l:e},"sm")})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}},24036:function(e,t,l){l.d(t,{x:function(){return a}});var n=l(67294);function a(e){let[t,l]=(0,n.useState)(null);return[t,(0,n.useCallback)(t=>{l(e(t))},[e])]}}}]);
//# sourceMappingURL=7384-92ac91830a8220bc.js.map