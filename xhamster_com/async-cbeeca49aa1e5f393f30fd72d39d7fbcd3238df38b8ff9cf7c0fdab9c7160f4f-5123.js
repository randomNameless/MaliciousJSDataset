"use strict";(self["xh-async"]=self["xh-async"]||[]).push([[3622],{53622:function(t,e,o){o.r(e),o.d(e,{Pop:function(){return w}});var i=o(75766),n=o(31995),r=o(72162),s=o(59382),a=o(14954),l=o(49071),c=o(27577),h=o(34262),u=o(14806),p=o(9125);let d=["role-pop"],m=t=>t instanceof Object&&"path"in t&&"title"in t&&(0,p.i3)(t.title)&&"href"in t&&(0,p.i3)(t.href);class w{init(){(0,l.rQ)()||(this.pushHistoryData(),r.Fi.then(()=>{let t=(0,u.Oq)(".main-wrap");(0,u.on)(t.length?t:document.body,"click","a",(t,e)=>{let o=e.closest(`[data-block="${n.Vt.Moments}"]`);if((0,c.hb)(this.options.popunderCookieName)||o)return!0;let i=!1;for(let t=0;t<d.length;t++)if((0,u.ct)(e,d[t],5)){i=!0;break}if(!i)return!0;e.setAttribute("target","_blank");let r=e.getAttribute("href");this.setHistoryData(r),this.setCookieInner();let s=document.querySelector('meta[name="keywords"]');s&&(this.url=this.url.replace("&categories=",`&categories=${s.getAttribute("content")}`));let a=this.url;return(0,l.rE)()?(document.location.href=a,window.open(r,"_blank"),!1):window.isIosOperaMini?(window.location.href=r,window.open(a,"_blank"),!1):(setTimeout(()=>{document.location.href=a},500),!0)})}))}setCookieInner(t=!1){let e=`.${document.location.host}`,o=new Date;o.setHours(o.getHours()+1),(0,c.t8)(h.Xx.Seen(this.options.popunderCookieName),!0,t?{}:{expires:o.toUTCString(),domain:e},{acceptedCookies:this.options.acceptedCookies})}setHistoryData(t){try{let e=document.createElement("a");e.href=t,s.Yy.setItem(a.B.popHistory,{path:e.pathname,title:document.title,href:document.location.href})}catch(t){console.error(t)}}pushHistoryData(){try{let t;let e=s.Yy.getItem(a.B.popHistory);if(m(e))e.path===document.location.pathname&&(t=[e.title,e.href]),s.Yy.removeItem(a.B.popHistory);else{let e=encodeURIComponent(document.location.pathname),o=(window.localStorage.getItem(e)||"").split("@@");2===o.length&&(t=[o[0],o[1]]),window.localStorage.removeItem(e)}if(window.onpopstate=t=>{"xh:mustreload"===t.state&&document.location.reload()},void 0===t||2!==t.length)return;let o=document.title,i=window.location.href;window.history.replaceState("xh:mustreload",t[0]||"",t[1]||""),window.history.pushState("xh:mustreload",o,i)}catch(t){console.error(t)}}constructor(t,e){(0,i._)(this,"url",void 0),(0,i._)(this,"options",void 0),this.url=t,this.options=e,this.url=t,this.options=e}}}}]);