"use strict";(self.webpackChunk_mailonline_an_ads=self.webpackChunk_mailonline_an_ads||[]).push([[304],{6932:(e,t,n)=>{var r=n(5248),a=n(6024),i=n(1740),s=n(3e3),o=n.n(s),c=n(1180);const d=(0,i.aY)(((e,t,r,a)=>(e=>{let{broker:t,getConfig:r,log:a,pPageMeta:i}=e;return new Promise((async e=>{if(!n.g.permutive){const e=r("plugins.dmp.permutive.projectId","3cc0f30f-e75e-4d3d-868b-1bcd030c1ee4"),s=r("plugins.dmp.permutive.script",`https://5f42864d-a421-4f37-9478-00266f871d68.edge.permutive.app/${e}-web.js`),d=r("plugins.permutive.delayedInitialisation",!1);await(async e=>{let{broker:t,getConfig:r,log:a,pPageMeta:i,delayedInitialisation:s}=e;a("initializing");const d=r("plugins.dmp.permutive.apiKey","c773330e-a104-4730-81bf-7b74452a3f61"),p=r("plugins.dmp.permutive.environment","production"),u=r("plugins.dmp.permutive.eventsCacheLimitBytes",25e5),l=r("plugins.dmp.permutive.publisherUserId","TheDailyMail"),g=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];m.q.push({functionName:e,arguments:n})},m=n.g.permutive={config:{apiKey:d,environment:p,eventsCacheLimitBytes:u,delayedInitialisation:s,consentRequired:!0},q:[],addon:g("addon"),consent:g("consent"),identify:g("identify"),on:g("on"),once:g("once"),query:g("query"),ready:g("ready"),segment:g("segment"),segments:g("segments"),track:g("track"),trigger:g("trigger"),user:g("user"),init:g("init")};m.ready((()=>t.emit("permutive ready")));const f=r("plugins.permutive.dependenciesTimeout",2e3),v=t.invokeAll({message:["dmp","admantx"],timeout:f}).then((e=>{let[t]=e;return{page:{admants:t}}})),b=t.invoke("provide userId").then((e=>({user:{id:e,status:"logged out"}}))),y=await Promise.all([v,b]),{id:h,authors:w,modified:I,published:k,title:C,section:x,context:S,tags:N}=await i;a("pageMeta",h,w,I,k,C,x,S,N);const A=parseInt(I),_=parseInt(k),T=o()({page:{type:S,tags:N,article:{id:h,title:C,categories:x?(0,c.WM)(x):[],publishedAt:Number.isInteger(_)&&new Date(_).toISOString()||void 0,modifiedAt:Number.isInteger(A)&&new Date(A).toISOString()||void 0,authors:w}}},...y);if(a("web context:",T),T.user){const e={id:T.user.id,tag:l};a("identity:",e),n.g.permutive.identify([e])}n.g.permutive.consent({opt_in:!0,token:"CONSENT_CAPTURED"}),n.g.permutive.addon("web",T)})({broker:t,getConfig:r,delayedInitialisation:d,log:a,pPageMeta:i}),await t.invoke("import script",s),d&&n.g.permutive.init()}e()}))})({broker:e,getConfig:t,log:r,pPageMeta:a})));(0,r.C_)("permutive.targeting",{run:function(e){let{broker:t,getConfig:n,log:r}=e;const i=u(r);r("bidder segments",i);const s=(0,a.AP)(2e3,[t.until("app state ready")]).then((e=>e.results?.[0]?.[0]||{})),o=d(t,n,r,s);t.register("provide user bidder segments",(()=>({provider:"permutive",segments:i}))),t.emit("set page level targeting",o.then((()=>({permutive:p()}))))},purposeIds:{gdpr:"N/A"},vendorIds:{gdpr:[361]}});const p=()=>JSON.parse(n.g.localStorage.getItem("_pdfps")||"[]"),u=e=>{let t=[];try{const e=localStorage.getItem("_ppam"),n=localStorage.getItem("_pcrprs"),r=localStorage.getItem("_psegs"),a=r?JSON.parse(r).map(Number).filter((e=>e>=1e6)).map(String):[],i=e?JSON.parse(e):[];t=[...n?JSON.parse(n):[],...i,...a]}catch(t){e.error("unable to parse permutive segments")}return t}},8208:(e,t,n)=>{(0,n(5248).C_)("trackers.admantx",{disableIfNoAdsServable:!0,purposeIds:{gdpr:"N/A"},run:async function(e){let{broker:t,getConfig:i,log:s}=e;if(new RegExp(i("plugins.disable-ias-bsp.domainRegex","^(live-uk|live-us|cc).mol.dmgt.net$")).test(n.g.location.hostname))return void s("Bailout  since domain doesn't match");s("starting");const{request:o,endPoint:c}=i("trackers.admantx",r),{href:d}=window.location;o.body=d.substring(0,d.indexOf("?"))||d;const p=JSON.stringify(o),u=`${c}?request=${p}`,l={"Content-Type":"text/plain","Content-Length":p.length,Connection:"keep-alive"},g=new Promise(((e,t)=>{fetch(u,{method:"GET",headers:l}).then((async n=>{const r=await n.json(),{info:i}=r;if("OK"!==i)t(new Error(`Admantx fetch error: ${i}.`));else{const t=(o.filter.includes("default")?a:o.filter).map((e=>r[e])).filter((e=>e)).reduce(((e,t)=>[...e,...t.map((e=>e.name))]),[]);e(t)}})).catch(t)})).catch((e=>s(e)));t.register("dmp","admantx",(async()=>await g)),t.emit("set page level targeting",g.then((e=>({"ias-bsp":e}))));const m=await g||[];s("targeting:",m),t.emit("admantx loaded"),t.register("call for page analytics",(()=>({admantx:m}))),t.emit("send with rta page unload",{brandSafety:m.includes("ias_safe")?"safe":"unsafe"})},vendorIds:{gdpr:[278]}});const r={endPoint:"https://euasync01.admantx.com/admantx/service",request:{key:"d4d1cdf427f06ebc6ee7e0a3ffbcaecdfbfe517eca18a41d9126f88bdb16e7f0",type:"url",method:"descriptor",mode:"async",decorator:"json",filter:["admants"]}},a=["categories","feelings","entities","admants"]},1603:(e,t,n)=>{var r=n(6024);(0,n(5248).C_)("adNami",{disableIfNoAdsServable:!0,purposeIds:{gdpr:"N/A"},run:async function(e){let{broker:t,getConfig:n}=e;const a=n("plugins.adnami.scriptTimeout",500),i=n("plugins.adnami.scriptURL","https://macro.adnami.io/macro/spec/adsm.macro.4111597d-dc70-4fd8-b25e-7d24d8423e73.js"),s={adNami:"off"},o=(0,r.AP)(a,[new Promise((e=>{window.adsmtag=window.adsmtag||{},window.adsmtag.cmd=window.adsmtag.cmd||[],window.adsmtag.cmd.push((()=>{s.adNami="on",e()}))}))]);t.invoke("import script",i),t.intercept("slot ready for ad",(async(e,t)=>{let[n,r,a]=e;await o,a.push(s),t(n,r,a)}))},vendorIds:{gdpr:[612]}})},1224:(e,t,n)=>{(0,n(5248).C_)("fbWebview",{ccpa:{enabledIfDissent:!0},gdpr:{enabledIfDissent:!0},isAdsFreeSupported:!0,run(e){let{broker:t,getConfig:n,doc:r,win:a}=e;const i=n("fbWebview.useReferrer",!1),s=r.referrer.includes("facebook.com"),o=a.navigator.userAgent;(o.includes("FBAV")||o.includes("FBAN")||i&&s)&&t.emit("set page level targeting",{platform:"FBOS"})}})},3816:(e,t,n)=>{var r=n(5248),a=n(1864),i=n(6024);const s={mediaTrust:"//scripts.webcontentassessor.com/scripts/bc585bfefc95184247617f742a451b7f4f99b8d4f250b51c2fabb00dee8e855d",ticio:"//d2tuygj4en2za2.cloudfront.net/script.js",confiant:"//confiant-integrations.global.ssl.fastly.net/pkity_Tu7korz-AKdcG26RZexkw/gpt_and_prebid/config.js"};(0,r.C_)("scanner",{ccpa:{enabledIfDissent:!0},gdpr:{enabledIfDissent:!0},async init(e){let{broker:t,getConfig:n,log:r}=e;const o=n("plugins.scanner.sync",!1),c=n("plugins.scanner.setupTimeout",2e3),d=n("plugins.scanner.provider"),p=n("plugins.scanner.scriptUrl",s)[d];if(r("config:",{provider:d,sync:o,timeout:c}),!p)return void r.warn("unknown provider:",d);const u=(0,a.o)(p,{async:!o}),l={scanner:{provider:d}};t.register("call for page analytics",(()=>l)),u.then((()=>{r("provider script loaded"),l.scanner.enabled=!0})),await(0,i.Mr)(c,u).catch((()=>{r.warn("provider script did not load fast enough, continue loading ads bundle..."),l.scanner.timeout=!0}))}})},4364:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},7068:e=>{e.exports=function(e){return e[1]}},696:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],p=i[d]||0,u="".concat(d," ").concat(p);i[d]=p+1;var l=n(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(g);else{var m=a(g,r);r.byIndex=o,t.splice(o,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var o=n(i[s]);t[o].references--}for(var c=r(e,a),d=0;d<i.length;d++){var p=n(i[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},4868:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},1236:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3460:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},8428:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4480:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);