(function(){"use strict";var s=(e=>(e.USER_ID="fbUserId",e.SESSION_ID="fbSessionId",e.CHANNEL="fbChannel",e))(s||{}),d=(e=>(e.EXTEND_SESSION_ID="extend-fb-session-id",e))(d||{}),i=(e=>(e.FACEBOOK="f",e.GOOGLE="g",e.TIKTOK="t",e.PINTEREST="p",e.MICROSOFT="b",e.OUTBRAIN="u",e.EMAIL="e",e.ORGANIC="o",e))(i||{});const c=e=>{const n=e+"=",r=document.cookie.split(";");for(let o of r)if(o=o.trim(),o.indexOf(n)===0)return o.substring(n.length,o.length);return""},u=(e,n,r,o)=>{const b=window.location.hostname.split(".").slice(-2).join(".");document.cookie=`${encodeURI(e)}=${encodeURI(n)}; expires=${r}; domain=.${b}; path=/;`},m=e=>{try{return new URL(e).searchParams}catch{return new URLSearchParams}},g=e=>m(e).get("utm_source")||"",S=e=>m(e).get("bid")||"",O=e=>{const n=g(e),r=S(e);return!r&&!n?i.ORGANIC:r?i.EMAIL:n.indexOf("facebook")!==-1?i.FACEBOOK:n.indexOf("google")!==-1?i.GOOGLE:n.indexOf("tiktok")!==-1?i.TIKTOK:n.indexOf("pinterest")!==-1?i.PINTEREST:n.indexOf("microsoft")!==-1?i.MICROSOFT:n.indexOf("outbrain")!==-1?i.OUTBRAIN:i.ORGANIC},p=()=>{const e=c("beaker_last")||window.location.toString();u(s.CHANNEL,O(e),null)},t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function T(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}let a;const R=new Uint8Array(16);function D(){if(!a){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");a=crypto.getRandomValues.bind(crypto)}return a(R)}const l={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function I(e,n,r){if(l.randomUUID&&!n&&!e)return l.randomUUID();e=e||{};const o=e.random||(e.rng||D)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,T(o)}const f=()=>{const e=new Date;return e.setTime(e.getTime()+30*60*1e3),e},h=()=>{var e=new Date;return e.setFullYear(e.getFullYear()+5),e},U=()=>{const e=s.SESSION_ID,n=c(e);let r="";n?r=n:r=I(),u(e,r,f().toUTCString())},E=()=>{c(s.USER_ID)||u(s.USER_ID,I(),h().toUTCString())};U(),E(),p(),window.addEventListener(d.EXTEND_SESSION_ID,function(){U()})})();