"use strict";(self.webpackJsonpRuntime=self.webpackJsonpRuntime||[]).push([[764],{5764:(t,e,i)=>{i.r(e),i.d(e,{init:()=>o,initCustomWidget:()=>r});var n=i(7477);function o(t){const e=t.getAttribute("data-widget-id"),i=t.getAttribute("data-widget-version");document.querySelectorAll(`[data-widget-id="${e}"][data-widget-version="${i}"]`).forEach((t=>{r(t)}))}function r(t,e={}){const i=`${t.getAttribute("data-widget-id")}~${t.getAttribute("data-widget-version")}`,o=window.customWidgetsFunctions&&window.customWidgetsFunctions[i];if(o)try{const i=JSON.parse(decodeURIComponent(escape(atob(t.getAttribute("data-widget-config"))))),r={device:n.AH(),page:n.Uh(),inEditor:n.inEditorMode(),accountId:window.Parameters.AccountUUID,siteId:n.Kg(),widgetId:t.getAttribute("data-widget-id"),widgetVersion:t.getAttribute("data-widget-version"),elementId:t.getAttribute("id"),config:i,refresh:e.refresh};window.Parameters.currentLanguage&&"null"!==window.Parameters.currentLanguage&&(r.locale=window.Parameters.currentLanguage);const d=function(t,e,i){return window.customWidgetsStrings[t]&&window.customWidgetsStrings[t][e]||i}.bind(null,t.getAttribute("data-widget-id"));if(t.getAttribute("data-binding"))try{const e=JSON.parse(decodeURIComponent(escape(atob(t.getAttribute("data-binding"))))),i=[];e.reduce(((t,e)=>{if(e.value&&e.value.includes("site_collection.")){const i=e.value.split("site_collection.")[1];return t.push(i),t}return t}),i),r.collections=i}catch(t){r.collections=[]}const a={localize:d,collections:window.runtime.API.collectionsAPI,scripts:window.runtime.API.scriptsApi},c=()=>{if(t.hasAttribute("data-widget-initialized"))return;let e;try{e=o(t,r,a)}catch(t){console.error("Caught the following error in CustomWidget custom script"),console.error(t)}try{e instanceof Promise?e.then((()=>{requestAnimationFrame((()=>{t.setAttribute("data-widget-initialized","")}))})).catch((t=>{console.error("Promise was rejected:",t)})):t.setAttribute("data-widget-initialized","")}catch(e){console.error("An error occurred:",e),t.setAttribute("data-widget-initialized","")}};window.waitForMobileEditor?window.waitForMobileEditor.then((()=>{window.define&&(window._define=window.define,window.define=null),c()})):c()}catch(t){console.error("Caught the following error in initCustomWidget"),console.error(t)}}}}]);