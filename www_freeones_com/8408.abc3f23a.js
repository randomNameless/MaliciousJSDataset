"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8408],{88408:function(t,e){e.Z={setCookie:function(t,e,n){let o="";if(!1!==n){const t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3),o=`expires=${t.toUTCString()}`}document.cookie=`${t}=${e};${o};path=/`},getCookie:function(t){const e=`${t}=`,n=document.cookie.split(";");for(const t of n){const n=t.trim();if(n.startsWith(e))return n.substring(e.length)}return""}}}}]);