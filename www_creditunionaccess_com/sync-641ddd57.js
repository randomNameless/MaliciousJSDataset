(function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const E of t.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&r(E)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const t=function(E){const a={};return E.integrity&&(a.integrity=E.integrity),E.referrerPolicy&&(a.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?a.credentials="include":E.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,t)}})();const N=5e3,u="exco-uid",A="exco-uids",I="exco-user-sync",d="user-sync-done",S="user-ids-updated",R=["ACTIVE_TEXTURE","ALIASED_LINE_WIDTH_RANGE","ALIASED_POINT_SIZE_RANGE","ALPHA_BITS","ARRAY_BUFFER_BINDING","BLEND","BLEND_COLOR","BLEND_DST_ALPHA","BLEND_DST_RGB","BLEND_EQUATION","BLEND_EQUATION_ALPHA","BLEND_EQUATION_RGB","BLEND_SRC_ALPHA","BLEND_SRC_RGB","BLUE_BITS","COLOR_CLEAR_VALUE","COLOR_WRITEMASK","COMPRESSED_TEXTURE_FORMATS","CULL_FACE","CULL_FACE_MODE","CURRENT_PROGRAM","DEPTH_BITS","DEPTH_CLEAR_VALUE","DEPTH_FUNC","DEPTH_RANGE","DEPTH_TEST","DEPTH_WRITEMASK","DITHER","ELEMENT_ARRAY_BUFFER_BINDING","FRAMEBUFFER_BINDING","FRONT_FACE","GENERATE_MIPMAP_HINT","GREEN_BITS","IMPLEMENTATION_COLOR_READ_FORMAT","IMPLEMENTATION_COLOR_READ_TYPE","LINE_WIDTH","MAX_COMBINED_TEXTURE_IMAGE_UNITS","MAX_CUBE_MAP_TEXTURE_SIZE","MAX_FRAGMENT_UNIFORM_VECTORS","MAX_RENDERBUFFER_SIZE","MAX_TEXTURE_IMAGE_UNITS","MAX_TEXTURE_SIZE","MAX_VARYING_VECTORS","MAX_VERTEX_ATTRIBS","MAX_VERTEX_TEXTURE_IMAGE_UNITS","MAX_VERTEX_UNIFORM_VECTORS","MAX_VIEWPORT_DIMS","PACK_ALIGNMENT","POLYGON_OFFSET_FACTOR","POLYGON_OFFSET_FILL","POLYGON_OFFSET_UNITS","RED_BITS","RENDERBUFFER_BINDING","RENDERER","SAMPLE_BUFFERS","SAMPLE_COVERAGE_INVERT","SAMPLE_COVERAGE_VALUE","SAMPLES","SCISSOR_BOX","SCISSOR_TEST","SHADING_LANGUAGE_VERSION","STENCIL_BACK_FAIL","STENCIL_BACK_FUNC","STENCIL_BACK_PASS_DEPTH_FAIL","STENCIL_BACK_PASS_DEPTH_PASS","STENCIL_BACK_REF","STENCIL_BACK_VALUE_MASK","STENCIL_BACK_WRITEMASK","STENCIL_BITS","STENCIL_CLEAR_VALUE","STENCIL_FAIL","STENCIL_FUNC","STENCIL_PASS_DEPTH_FAIL","STENCIL_PASS_DEPTH_PASS","STENCIL_REF","STENCIL_TEST","STENCIL_VALUE_MASK","STENCIL_WRITEMASK","SUBPIXEL_BITS","TEXTURE_BINDING_2D","TEXTURE_BINDING_CUBE_MAP","UNPACK_ALIGNMENT","UNPACK_COLORSPACE_CONVERSION_WEBGL","UNPACK_FLIP_Y_WEBGL","UNPACK_PREMULTIPLY_ALPHA_WEBGL","VENDOR","VERSION","VIEWPORT"];let s;const L=(n,r=0)=>{let e=3735928559^r,t=1103547991^r;for(let E,a=0;a<n.length;a++)E=n.charCodeAt(a),e=Math.imul(e^E,2654435761),t=Math.imul(t^E,1597334677);return e=Math.imul(e^e>>>16,2246822507),e^=Math.imul(t^t>>>13,3266489909),t=Math.imul(t^t>>>16,2246822507),t^=Math.imul(e^e>>>13,3266489909),4294967296*(2097151&t)+(e>>>0)},m=()=>{const n=[];for(let r in navigator)n.push(r);return{platform:navigator.platform||"",deviceMemory:navigator.deviceMemory||"",hardwareConcurrency:navigator.hardwareConcurrency||"",props:n.join("_")}},C=()=>{const n=document.createElement("canvas").getContext("webgl"),r=n.getExtension("WEBGL_debug_renderer_info");return{vendor:n.getParameter(r.UNMASKED_VENDOR_WEBGL),renderer:n.getParameter(r.UNMASKED_RENDERER_WEBGL),glAll:R.reduce((e,t)=>(e[t]=n.getParameter(n[t]),e),{})}},P=()=>new Promise(n=>{if(!navigator.mediaDevices)return n([]);navigator.mediaDevices.enumerateDevices().then(r=>{const e=r.map(t=>`${t.deviceId}_${t.kind}_${t.groupId}_${t.label}`);n(e)}).catch(()=>n([]))}),p=()=>{const n=document.createElement("div");n.style.width="1rem",n.style.display="none",document.body.append(n);const r=window.getComputedStyle(n).getPropertyValue("width").match(/\d+/);if(n.remove(),!r||r.length<1)return null;const e=Number(r[0]);return isNaN(e)?null:e},i={excoCookie:null,syncCookie:null},o={timeout:null,interval:null},c=async n=>{if(!document.cookie){if(n===u){const e=await(async()=>{if(s)return s;try{const t={navigator:m(),fontSize:p(),timeZone:new Date().getTimezoneOffset(),screen:window.screen,rendering:C(),inputDevices:await P()};s=L(JSON.stringify(t))}catch{}return s})();if(e)return document.getElementById("user-id").innerText=e,e}return(e=>{try{const t=window.localStorage.getItem(e);return JSON.parse(t)}catch{}})(A)}const r=document.cookie.split(";").map(e=>e.trim()).map(e=>e.split("="));if(r&&r.length)try{return(e=>{if(!e)return e;let t=e;try{t=JSON.parse(e)}catch{}return t})(Object.fromEntries(r)[n])}catch{}return null},T=async n=>{const r=await c(u),e=await c(A);var t;(i.excoCookie!==r||(E=>{if(!E)return!1;Object.keys(E).some(a=>i.syncCookie&&!i.syncCookie[a])})(e))&&(i.excoCookie=r,i.syncCookie=e?(t=e,Object.keys(t).map(E=>({name:E,uid:t[E].UID}))):null,n(i))},l=(n,r={})=>{(e=>{window.parent.postMessage(e,"*");for(let t=0;t<window.parent.frames.length;t++)window.parent.frames[t].postMessage(e,"*")})({type:I,eventName:n,metadata:r})},g={image:async({url:n})=>new Promise(async r=>{const e=(()=>{const t=new Image;return t.style.display="none",t.style.height="1px",t.style.width="1px",t})();e.addEventListener("load",()=>r()),e.addEventListener("error",()=>r()),e.src=n,document.body.appendChild(e)}),iframe:async({url:n})=>new Promise(async r=>{const e=(()=>{const t=document.createElement("iframe");return t.setAttribute("frameborder",0),t.setAttribute("scrolling","no"),t.setAttribute("marginheight",0),t.setAttribute("marginwidth",0),t.setAttribute("TOPMARGIN",0),t.setAttribute("LEFTMARGIN",0),t.setAttribute("allowtransparency","true"),t.setAttribute("width",0),t.setAttribute("height",0),t})();e.id=`sync_${Date.now()}_${Math.random()}`,e.src=n,e.onload=()=>r(),document.body.appendChild(e)})},O=async({type:n,url:r})=>{const e=g[n];if(!e||!r)return!1;await e({url:r})},M=async()=>{try{const n=await(async({network:r,gdpr:e,gdpr_consent:t,gpp:E,gpp_sid:a})=>{try{const _=new URL("https://sync.ex.co/v1/cookie_sync");return _.searchParams.set("network",r||""),_.searchParams.set("gdpr",e||""),_.searchParams.set("gdpr_consent",t||""),_.searchParams.set("gpp",E||""),_.searchParams.set("gpp_sid",a||""),(await fetch(_,{credentials:"include"})).json()}catch{}return[]})((()=>{try{const r=new URL(window.location);return{network:r.searchParams.get("network"),gdpr:r.searchParams.get("gdpr"),gdpr_consent:r.searchParams.get("gdpr_consent"),gpp:r.searchParams.get("gpp"),gpp_sid:r.searchParams.get("gpp_sid")}}catch{}return{}})());for(let r of n)await O(r)}catch{}};(async()=>{const n=await c(A);var r;await Promise.race([M(),new Promise(e=>setTimeout(()=>e(),n?2e3:5e3))]),r=e=>{l(S,e)},o.timeout&&(clearTimeout(o.timeout),o.timeout=null),o.interval&&(clearInterval(o.interval),o.interval=null),o.timeout=setTimeout(()=>T(r),1e3),o.interval=setInterval(()=>T(r),N),l(d)})();
