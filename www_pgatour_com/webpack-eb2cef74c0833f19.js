!function(){"use strict";var e,t,n,r,c,f,a,o,u,i={},d={};function s(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}},r=!0;try{i[e].call(n.exports,n,n.exports,s),r=!1}finally{r&&delete d[e]}return n.loaded=!0,n.exports}s.m=i,s.amdD=function(){throw Error("define cannot be used indirect")},e=[],s.O=function(t,n,r,c){if(n){c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,r,c];return}for(var a=1/0,f=0;f<e.length;f++){for(var n=e[f][0],r=e[f][1],c=e[f][2],o=!0,u=0;u<n.length;u++)a>=c&&Object.keys(s.O).every(function(e){return s.O[e](n[u])})?n.splice(u--,1):(o=!1,c<a&&(a=c));if(o){e.splice(f--,1);var i=r();void 0!==i&&(t=i)}}return t},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var c=Object.create(null);s.r(c);var f={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach(function(t){f[t]=function(){return e[t]}});return f.default=function(){return e},s.d(c,f),c},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,n){return s.f[n](e,t),t},[]))},s.u=function(e){return 2084===e?"static/chunks/2084-614b0cf54364e696.js":1580===e?"static/chunks/1580-29f1884ef24f223e.js":3033===e?"static/chunks/3033-794d93eb7d910349.js":5584===e?"static/chunks/5584-39626a8b0eeffcbe.js":2081===e?"static/chunks/2081-ce06e78b41303916.js":6391===e?"static/chunks/6391-8d3ea107c030491b.js":6879===e?"static/chunks/6879-069b66e336180d4f.js":4164===e?"static/chunks/4164-ddf6c94e97138d03.js":7595===e?"static/chunks/7595-aefb8ed210a7f266.js":3198===e?"static/chunks/3198-8ad1e9149c12ade1.js":7484===e?"static/chunks/7484-c469645bb9916ed4.js":3644===e?"static/chunks/3644-ef5a6a351322782c.js":"static/chunks/"+(({2027:"b07ff2b8",3662:"29107295",4027:"ddc9e94f",8009:"3c0f772d",9245:"089f0acf"})[e]||e)+"."+({249:"a3284a1b79f53a42",339:"df61b0831264bd86",361:"68418cde0761f47b",600:"faf52fc9e9b5c009",673:"ff10873d784f0dfc",744:"cbb9000f9c9642ac",1272:"153417686e93b83d",1502:"7ad59d4c93ba522c",1547:"93464be4645f3445",1603:"0b6a8ef836434ac1",1712:"00db6d63493dd8a2",1721:"686b5b17d602ea48",1942:"cbcf74e1da6b9162",2027:"dff36f9b9c518f28",2749:"145c8a59ad51f8b1",3311:"e63bc99fa323a881",3321:"fb434e3995735e64",3662:"9ec06c1b2a9cf01d",4027:"77c1a4e8c32a283e",4405:"178f5a90bc9fa963",4451:"1ee9bc4e6887acc1",4504:"0ae5302de06dee50",5030:"0785acf1b8555523",5167:"d0bfb9d6de68d0d8",5355:"94df9f162e56a932",5375:"3e8870bdb1d19dd2",5419:"6a4a9982e882e27a",5793:"7fac20c914b4bfd8",5869:"109247f89211e970",5875:"41d10d6c0dbc45d9",6003:"922cbfd603724242",6511:"c873cd8d6fb7b79c",6556:"ff8e10940cf28694",7195:"2b4d0e21996de549",8009:"4fe366c43c65e975",8352:"e27c02824ec56d2d",8565:"725c11d06d10a5e9",8947:"cfe94aa08e3a8160",8986:"a87b2b686ae34416",9116:"55a2cb4fbf6e5f5d",9142:"7dad2afe475ed41c",9245:"1baed8e70a70d068",9263:"aa56b6621e6e3d47",9593:"466550b26b0b46dc",9817:"b1d049d9543b573c",9988:"350775987f136763"})[e]+".js"},s.miniCssF=function(e){return"static/css/"+({2015:"b14199d657dee5a5",2888:"6a231b47af7d496d",9658:"c211fef4c77cfde8"})[e]+".css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},c="_N_E:",s.l=function(e,t,n,f){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var a,o,u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var d=u[i];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==c+n){a=d;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",c+n),a.src=s.tu(e)),r[e]=[t];var b=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var c=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),c&&c.forEach(function(e){return e(n)}),t)return t(n)},l=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),o&&document.head.appendChild(a)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.tt=function(){return void 0===f&&(f={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(f=trustedTypes.createPolicy("nextjs#bundler",f))),f},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="https://www.pgatour.com/_next/",a={2272:0},s.f.j=function(e,t){var n=s.o(a,e)?a[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var c=s.p+s.u(e),f=Error();s.l(c,function(t){if(s.o(a,e)&&(0!==(n=a[e])&&(a[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}},"chunk-"+e,e)}else a[e]=0}},s.O.j=function(e){return 0===a[e]},o=function(e,t){var n,r,c=t[0],f=t[1],o=t[2],u=0;if(c.some(function(e){return 0!==a[e]})){for(n in f)s.o(f,n)&&(s.m[n]=f[n]);if(o)var i=o(s)}for(e&&e(t);u<c.length;u++)r=c[u],s.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return s.O(i)},(u=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(o.bind(null,0)),u.push=o.bind(null,u.push.bind(u)),s.nc=void 0}();