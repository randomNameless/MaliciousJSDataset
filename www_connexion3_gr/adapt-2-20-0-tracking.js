(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{49:function(t,e,n){"use strict";n.r(e);var o=n(32),i=n(33),a=n(13),r=n(5),s=n(7),c=n(8);const l=t=>{var e,n;const{width:c,height:l}=Object(r.c)(),d=Object(a.c)(c,l),u=Object(a.a)(),p=Object(s.e)(window.ADAPT.ad.layouts),m=Object(o.a)(c,l,p).id,y=Object(i.b)(c,l,p),b=`${null===(e=y)||void 0===e?void 0:e.w}x${null===(n=y)||void 0===n?void 0:n.h}`,f=v({platform:u,orientation:d,layout:m,size:b});return t.map(f)},d=t=>{var e,n;const o=null===(n=null===(e=t.find(t=>"stage"===t.key&&"impression"===t.type))||void 0===e?void 0:e.value[0])||void 0===n?void 0:n.tags;if(!o)return;const i=document.createElement("div");i.style.position="absolute",i.style.visibility="hidden",i.style.pointerEvents="none",i.style.zIndex="-1",i.innerHTML=Object(c.b)(o),u(i)},u=(t,e=document.body)=>{let n;if(p(t)){const e=document.createElement("script");e.async=t.async,e.src=t.src,n=e}else n=t.cloneNode(!1);for(let e=0;e<t.childElementCount;e++)u(t.children[e],n);e.appendChild(n)},p=t=>"script"===t.tagName.toLowerCase(),v=t=>e=>Object.assign(Object.assign({},e),{value:m(t,e.value)}),m=(t,e)=>{const{orientation:n,platform:o,layout:i,size:a}=t,r=y(t),s=e.filter(t=>!(t.platform&&t.platform!==o||t.orientation&&t.orientation!==n||t.layout&&t.layout!==i||t.size&&t.size!==a)).reduce((t,e)=>void 0===t?e:r(t)>=r(e)?t:e,void 0);return s?[s]:[]},y=t=>e=>{const{layout:n,orientation:o,platform:i,size:a}=t;return+(i===e.platform)+ +(o===e.orientation)+ +(n===e.layout)+ +(a===e.size)};n.d(e,"injectImpressionTracking",(function(){return d})),n.d(e,"matchTracking",(function(){return l}))}}]);
//# sourceMappingURL=adapt-2-20-0-tracking.js.map