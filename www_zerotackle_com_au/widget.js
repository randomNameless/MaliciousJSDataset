let observer;const dwellInit={visible:!1,transitions:0,time:0,total:0};let dwellStatus;!function(e,t,r){if(window.Pubfeed=window.Pubfeed||{},!window.Pubfeed.init){window.Pubfeed.init=!0,document.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&B()}));var n={};try{n=new Proxy(new URLSearchParams(t.location.search),{get:(e,t)=>e.get(t)})}catch(z){}var i=t[r]&&t[r].url?t[r].url:t.location.href,o={scroll:{threshold:1e5,listeners:{},listenerTargets:{},inViewThreshold:70},widgets:{articles:[],inited:{},loaded:{}},ctx:Object.assign({start:H(),url:i,lbpf_type:n.lbpf_type},t[r]&&t[r].ctx?t[r].ctx:{}),settings:t[r]||{}},l=["lbpf_preview","lbpf_lcid","lbpf_ppid","lbpf_cid","lbpf_country","showAll","lbpf_disclaimer_pos","lbpf_type"],s=e.currentScript&&e.currentScript.src&&e.currentScript.src.toLowerCase(),a=t[r]&&t[r].edgeDomain?t[r].edgeDomain:function(t,r){var n=e.createElement("a");return n.href=t,n&&n.protocol&&n.host?n.protocol+"//"+n.host+r:r}(s,"").replace(".linkby.com","-edge.linkby.com"),c="",d="",u="",f="",p=null,m=!!o.settings.hosted,h=m?"-hosted":"";try{var w=new URL(i);c=w.hostname,d=w.origin,u=w.pathname,f=w.search}catch(G){(w=document.createElement("a")).setAttribute("href",i),c=w.hostname,d=w.protocol+"//"+w.hostname,u=w.pathname,f=w.search}var g=null;function v(e){if(!g&&(g={},window.location.search)){var t=window.location.search.replace("?","").split("&");for(var r of t){var n=r.split("=");Array.isArray(n)&&2===n.length&&(g[n[0]]=decodeURIComponent(n[1]))}}return e?g[e]:g}for(var y in t[r]&&t[r].preview&&(o.ctx.lbpf_preview="1"),l){var x=l[y];v(x)&&(o.ctx[x]=v(x))}var b=o.ctx.lbpf_preview,S=b&&-1!==["1","true"].indexOf(b.toLowerCase());function T(e,t){var r=new XMLHttpRequest;return r.responseType="json",r.addEventListener("error",t),r}function L(e){if(!o.widgets.loaded[e.id]){if(o.widgets.loaded[e.id]=!0,o.settings.preloaded)C(e,o.settings.res);else{!function(e){e.slot.innerHTML='<div style="margin:1em auto;width:32px;"><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="32px" height="32px" viewBox="0 0 128 128" xml:space="preserve"><g><circle cx="16" cy="64" r="16" fill="#000"/><circle cx="16" cy="64" r="16" fill="#555" transform="rotate(45,64,64)"/><circle cx="16" cy="64" r="16" fill="#949494" transform="rotate(90,64,64)"/><circle cx="16" cy="64" r="16" fill="#ccc" transform="rotate(135,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" transform="rotate(180,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" transform="rotate(225,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" transform="rotate(270,64,64)"/><circle cx="16" cy="64" r="16" fill="#e1e1e1" transform="rotate(315,64,64)"/><animateTransform attributeName="transform" type="rotate" values="45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64;0 64 64" calcMode="discrete" dur="880ms" repeatCount="indefinite"></animateTransform></g></svg></div>'}(e);var t=a+"/serve?"+function(e,t){var r=[];for(var n in!Array.isArray(t)&&(t=[]),e)if(-1===t.indexOf(n)){var i=e[n];if(Array.isArray(i)){var o=[];for(var l in i){var s=i[l];o.push(n+"[]="+s)}r.push(o.join("&"))}else r.push(n+"="+encodeURIComponent(i))}return r.join("&")}(Object.assign({},o.ctx,e),["slot"]);!function(e,t,r){var n=T(0,r);n.open("GET",e,!0),n.onload=function(){if(200==this.status){if(S&&!Object.keys(this.response).includes("body")){const e='\n            <div class="no-product-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center"">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="100px"\n              height="100px"\n              viewBox="0 0 24 24"\n            >\n              <path fill="none" d="M0 0h24v24H0V0z" />\n              <path\n                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"\n                fill="#ECECEE"\n              />\n            </svg>\n            <h3 style="color: #c7c7c7">Product card not found</h3>\n          </div>';document.querySelector(".linkby-widget").remove(),document.querySelector(".content").innerHTML=e}if(t({...this.response,...S&&{body:this.response.body.replace(/!important/g,"")}}),S){document.getElementById("campaign-name").innerHTML=this.response.campaignName,document.getElementById("brand-name").innerHTML=this.response.brandName,1===this.response.type?document.getElementById("header-title").innerHTML="Pubfeed Feature Preview":document.getElementById("header-title").innerHTML="Pubfeed Product Card Preview",document.querySelector(".linkby-widget").style.boxShadow="0 2px 10px 0 rgba(0, 0, 0, 0.1)",document.querySelector(".footer").style.opacity="1";const e=Object.keys(Object.fromEntries(new URLSearchParams(window.location.search)));1!==e.length||"lbpf_ppid"!==e[0]&&"lbpf_cid"!==e[0]||(document.querySelector(".lbpf-title").remove(),document.querySelector(".lbpf-prod-name").style.marginTop="-20px")}}else r(this.response)},n.send(null)}(t,(function(t){I(e),C(e,t)}),(function(t){I(e),console.error("Error",t)}))}_(e)}}function E(e,t){o.scroll.listeners[e]=t,o.scroll.listenerTargets[e].addEventListener("scroll",t)}function _(e){o.scroll.listeners[e.id]&&o.scroll.listenerTargets[e.id]&&o.scroll.listenerTargets[e.id].removeEventListener("scroll",o.scroll.listeners[e.id])}var M=!1;function C(e,t){if(t&&t.body){e.slot.innerHTML=t.body,t.script&&function(e,t){var r=(t=t||document).createElement("script");r.text=e,t.head.appendChild(r).parentNode.removeChild(r)}(t.script),m?function(e){(more=e.slot.querySelector(".lbpf-more"))&&more.click()}(e):function(e,t){if(!M&&"function"==typeof lbpf_expand_listicle){var r=lbpf_expand_listicle;window.lbpf_expand_listicle=function(n){r(n),A("expand"+h,e,t)},M=!0}}(e,t),function(e,t){dwellStatus={...dwellInit,cfg:e,res:t},function(){const e=18e5;let t;const r=()=>{clearTimeout(t),t=setTimeout(B,e)};["mousedown","mousemove","keypress","scroll","touchstart"].forEach((function(e){document.addEventListener(e,r,!0)}))}();const r=[];for(let e=0;e<=1;e+=.01)r.push(e);observer=new IntersectionObserver(U,{root:null,rootMargin:"0px",threshold:r}),observer.observe(document.querySelector(".linkby-widget"))}(e,t);var r=function(e,t){return function(){!function(e,t){var r=e.slot.getBoundingClientRect();window.innerHeight-r.top>o.scroll.inViewThreshold&&(A("imp"+h,e,t),_(e))}(e,t)}}(e,t);if(E(e.id,r),r(),t.widget)e.slot.parentNode.insertBefore((n=t.widget,i=document.createElement("template"),n=n.trim(),i.innerHTML=n,i.content.firstChild),e.slot.nextSibling),e.slot.getBoundingClientRect().top<0&&e.slot.scrollIntoView(),N()}var n,i}function O(e){e.slot.getBoundingClientRect().top<=o.scroll.threshold&&!o.widgets.loaded[e.index]&&L(e)}function k(e){return function(){O(e)}}function I(e){e.slot.innerHTML=""}function P(e){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,1):document.addEventListener("DOMContentLoaded",e)}function q(){return void 0!==typeof crypto?([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function A(e,t,r){if(!S){var n=H(),o={context:{locale:navigator.language,page:{path:u,referrer:document.referrer,search:f,title:document.title,url:i,hostname:c,origin:d},platform:{screen:screen.width+"x"+screen.height}},messageId:e+"-"+q(),timestamp:n,type:e};if(p){o.context.pv={id:p.messageId};try{o.context.pv.timediff=new Date(n)-new Date(p.timestamp)}catch(e){}}return(t||r)&&(o.properties={},t&&(o.properties.widget={id:t.id,index:t.index,type:t.type}),r&&r.data&&(o.properties.reqid=r.data.reqid||q(),o.properties.listicle=r.data.listicle,o.properties.delivery=r.data.delivery,o.properties.deliveryFeed=r.data.deliveryFeed,o.properties.publisher={aid:r.data.publisher?r.data.publisher.aid:"",bid:r.data.publisher?r.data.publisher.bid:""},r.totalDuration&&(o.properties.dwell={totalDuration:r.totalDuration,totalTransitions:r.totalTransitions}))),o.sentAt=H(),fetch(a+"/t",{keepalive:!0,method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(o)}),o}}function H(){return(new Date).toISOString()}function N(){var e=document.querySelectorAll(".linkby-widget:not([data-loaded=true])");if(e.length)for(var t in Object.values(e)){var r=e[t];if(r){!r.dataset.id&&(r.dataset.id="_"+Math.random().toString(36).substr(2,9));var n=r.dataset.id;if(r.setAttribute("data-loaded","true"),!o.widgets.inited[n]){o.widgets.inited[n]=!0;var i=Object.assign({},{index:t,slot:r},r.dataset);o.scroll.listenerTargets[n]=(o.settings.container?document.querySelector(o.settings.container):null)||window,E(n,k(i)),O(i)}}}}function D(e){return e.nodeName&&"#text"!==e.nodeName}function j(e){return"a"===e.nodeName.toLowerCase()}function R(e){if(e.classList&&e.classList.contains("linkby-widget")&&"true"!==e.getAttribute("data-loaded"))return!0;for(var t=0,r=e.childNodes.length;t<r;t++)if(D(e.childNodes[t])&&R(e.childNodes[t]))return!0;return!1}function B(){if(!dwellStatus)return;const e=dwellStatus.time?(new Date).getTime()-dwellStatus.time:0,t=dwellStatus.total+e;if(t>0){const e={...dwellStatus.res,totalDuration:t,totalTransitions:dwellStatus.transitions};A("dwell"+h,dwellStatus.cfg,e)}dwellStatus={...dwellStatus||{},...dwellInit}}function U(e){e.forEach((e=>{dwellStatus.visible!==e.isIntersecting&&(dwellStatus.visible=e.isIntersecting,dwellStatus.visible?(dwellStatus.time=(new Date).getTime(),dwellStatus.transitions+=1):(dwellStatus.total+=(new Date).getTime()-dwellStatus.time,dwellStatus.time=void 0))}))}const F="go.linkby.com";function V(e){try{const t=new URL(e.href);-1===t.hostname.indexOf(F)||-1!==t.pathname.indexOf("/redir")||t.searchParams.has("lb_referrer")||(t.searchParams.set("lb_referrer",window.location.href),e.setAttribute("href",t.toString()))}catch(e){}}!m&&(p=A("pv"+h)),P((function(){document.querySelectorAll('a[href*="'+F+'" i]').forEach(V)})),P(N),P((function(){var e=new MutationObserver((function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t];if("childList"===n.type)for(var i=0,o=n.addedNodes.length;i<o;i++){var l=n.addedNodes[i];if(D(l)){R(l)&&N(),j(l)&&V(l);break}}}}));e.observe(document.querySelector("body"),{subtree:!0,childList:!0})}))}}(document,window,"pubfeedSettings");