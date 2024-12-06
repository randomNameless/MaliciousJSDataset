/*! For license information please see npm.vue-router.df2d9aea.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8074],{22201:function(e,t,n){n.d(t,{PO:function(){return S},p7:function(){return Me},tv:function(){return Ge}});var r=n(55959);const o="undefined"!=typeof window;function c(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function s(e,t){const n={};for(const r in t){const o=t[r];n[r]=l(o)?o.map(e):e(o)}return n}const i=()=>{},l=Array.isArray;const u=/\/$/,f=e=>e.replace(u,"");function p(e,t,n="/"){let r,o={},c="",a="";const s=t.indexOf("#");let i=t.indexOf("?");return s<i&&s>=0&&(i=-1),i>-1&&(r=t.slice(0,i),c=t.slice(i+1,s>-1?s:t.length),o=e(c)),s>-1&&(r=r||t.slice(0,s),a=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;0;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,c,a=n.length-1;for(o=0;o<r.length;o++)if(c=r[o],"."!==c){if(".."!==c)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(c&&"?")+c+a,path:r,query:o,hash:a}}function h(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function d(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function m(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!g(e[n],t[n]))return!1;return!0}function g(e,t){return l(e)?v(e,t):l(t)?v(t,e):e===t}function v(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var y,b;!function(e){e.pop="pop",e.push="push"}(y||(y={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(b||(b={}));function w(e){if(!e)if(o){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const E=/^[^#]+#/;function k(e,t){return e.replace(E,"#")+t}const O=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#");0;const o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function C(e,t){return(history.state?history.state.position-t:-1)+e}const P=new Map;let j=()=>location.protocol+"//"+location.host;function x(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let t=o.includes(e.slice(c))?e.slice(c).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),h(n,"")}return h(n,e)+r+o}function $(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?O():null}}function S(e){const t=function(e){const{history:t,location:n}=window,r={value:x(e,n)},o={value:t.state};function c(r,c,a){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:j()+e+r;try{t[a?"replaceState":"pushState"](c,"",i),o.value=c}catch(e){console.error(e),n[a?"replace":"assign"](i)}}return o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=a({},o.value,t.state,{forward:e,scroll:O()});c(s.current,s,!0),c(e,a({},$(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){c(e,a({},t.state,$(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=w(e)),n=function(e,t,n,r){let o=[],c=[],s=null;const i=({state:c})=>{const a=x(e,location),i=n.value,l=t.value;let u=0;if(c){if(n.value=a,t.value=c,s&&s===i)return void(s=null);u=l?c.position-l.position:0}else r(a);o.forEach((e=>{e(n.value,i,{delta:u,type:y.pop,direction:u?u>0?b.forward:b.back:b.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:O()}),"")}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",l),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return c.push(t),t},destroy:function(){for(const e of c)e();c=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=a({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:k.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function A(e){return"string"==typeof e||"symbol"==typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},L=Symbol("");var M;!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(M||(M={}));function B(e,t){return a(new Error,{type:e,[L]:!0},t)}function G(e,t){return e instanceof Error&&L in e&&(null==t||!!(e.type&t))}const _="[^/]+?",I={sensitive:!1,strict:!1,start:!0,end:!0},D=/[.+*?^${}()[\]/\\]/g;function T(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function U(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=T(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(F(r))return 1;if(F(o))return-1}return o.length-r.length}function F(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const W={type:0,value:""},V=/[a-zA-Z0-9_]/;function z(e,t,n){const r=function(e,t){const n=a({},I,t),r=[];let o=n.start?"^":"";const c=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const a=t[r];let s=40+(n.sensitive?.25:0);if(0===a.type)r||(o+="/"),o+=a.value.replace(D,"\\$&"),s+=40;else if(1===a.type){const{value:e,repeatable:n,optional:i,regexp:l}=a;c.push({name:e,repeatable:n,optional:i});const u=l||_;if(u!==_){s+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=i&&t.length<2?`(?:/${f})`:"/"+f),i&&(f+="?"),o+=f,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:c,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=c[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:c,repeatable:a,optional:s}=e,i=c in t?t[c]:"";if(l(i)&&!a)throw new Error(`Provided param "${c}" is an array but it is not repeatable (* or + modifiers)`);const u=l(i)?i.join("/"):i;if(!u){if(!s)throw new Error(`Missing required param "${c}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[W]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let c;function a(){c&&o.push(c),c=[]}let s,i=0,l="",u="";function f(){l&&(0===n?c.push({type:0,value:l}):1===n||2===n||3===n?(c.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),a()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:V.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),o}(e.path),n);const o=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function K(e,t){const n=[],r=new Map;function o(e,n,r){const l=!r,u=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Q(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);u.aliasOf=r&&r.record;const f=N(t,e),p=[u];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(a({},u,{components:r?r.record.components:u.components,path:e,aliasOf:r?r.record:u}))}let h,d;for(const t of p){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(h=z(t,n,f),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),l&&e.name&&!X(h)&&c(e.name)),u.children){const e=u.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&s(h)}return d?()=>{c(d)}:i}function c(e){if(A(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(e){let t=0;for(;t<n.length&&U(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Z(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!X(e)&&r.set(e.record.name,e)}return t=N({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,c,s,i={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw B(1,{location:e});0,s=o.record.name,i=a(H(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&H(e.params,o.keys.map((e=>e.name)))),c=o.stringify(i)}else if("path"in e)c=e.path,o=n.find((e=>e.re.test(c))),o&&(i=o.parse(c),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw B(1,{location:e,currentLocation:t});s=o.record.name,i=a({},t.params,e.params),c=o.stringify(i)}const l=[];let u=o;for(;u;)l.unshift(u.record),u=u.parent;return{name:s,path:c,params:i,matched:l,meta:Y(l)}},removeRoute:c,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function H(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Q(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function X(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Y(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function N(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Z(e,t){return t.children.some((t=>t===e||Z(e,t)))}const J=/#/g,ee=/&/g,te=/\//g,ne=/=/g,re=/\?/g,oe=/\+/g,ce=/%5B/g,ae=/%5D/g,se=/%5E/g,ie=/%60/g,le=/%7B/g,ue=/%7C/g,fe=/%7D/g,pe=/%20/g;function he(e){return encodeURI(""+e).replace(ue,"|").replace(ce,"[").replace(ae,"]")}function de(e){return he(e).replace(oe,"%2B").replace(pe,"+").replace(J,"%23").replace(ee,"%26").replace(ie,"`").replace(le,"{").replace(fe,"}").replace(se,"^")}function me(e){return null==e?"":function(e){return he(e).replace(J,"%23").replace(re,"%3F")}(e).replace(te,"%2F")}function ge(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ve(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(oe," "),o=r.indexOf("="),c=ge(o<0?r:r.slice(0,o)),a=o<0?null:ge(r.slice(o+1));if(c in t){let e=t[c];l(e)||(e=t[c]=[e]),e.push(a)}else t[c]=a}return t}function ye(e){let t="";for(let n in e){const r=e[n];if(n=de(n).replace(ne,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(l(r)?r.map((e=>e&&de(e))):[r&&de(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function be(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const we=Symbol(""),Ee=Symbol(""),ke=Symbol(""),Oe=Symbol(""),Re=Symbol("");function Ce(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Pe(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,s)=>{const i=e=>{var i;!1===e?s(B(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(B(2,{from:t,to:e})):(c&&r.enterCallbacks[o]===c&&"function"==typeof e&&c.push(e),a())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)))}))}function je(e,t,n,r){const o=[];for(const s of e){0;for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=i)||"displayName"in a||"props"in a||"__vccOpts"in a){const c=(i.__vccOpts||i)[t];c&&o.push(Pe(c,n,r,s,e))}else{let a=i();0,o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=c(o)?o.default:o;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Pe(i,n,r,s,e)()}))))}}}var a;return o}function xe(e){const t=(0,r.inject)(ke),n=(0,r.inject)(Oe),o=(0,r.computed)((()=>t.resolve((0,r.unref)(e.to)))),c=(0,r.computed)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],c=n.matched;if(!r||!c.length)return-1;const a=c.findIndex(d.bind(null,r));if(a>-1)return a;const s=Se(e[t-2]);return t>1&&Se(r)===s&&c[c.length-1].path!==s?c.findIndex(d.bind(null,e[t-2])):a})),a=(0,r.computed)((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,o.value.params))),s=(0,r.computed)((()=>c.value>-1&&c.value===n.matched.length-1&&m(n.params,o.value.params)));return{route:o,href:(0,r.computed)((()=>o.value.href)),isActive:a,isExactActive:s,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[(0,r.unref)(e.replace)?"replace":"push"]((0,r.unref)(e.to)).catch(i):Promise.resolve()}}}const $e=(0,r.defineComponent)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xe,setup(e,{slots:t}){const n=(0,r.reactive)(xe(e)),{options:o}=(0,r.inject)(ke),c=(0,r.computed)((()=>({[Ae(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ae(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},o)}}});function Se(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ae=(e,t,n)=>null!=e?e:null!=t?t:n;function qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Le=(0,r.defineComponent)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.inject)(Re),c=(0,r.computed)((()=>e.route||o.value)),s=(0,r.inject)(Ee,0),i=(0,r.computed)((()=>{let e=(0,r.unref)(s);const{matched:t}=c.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),l=(0,r.computed)((()=>c.value.matched[i.value]));(0,r.provide)(Ee,(0,r.computed)((()=>i.value+1))),(0,r.provide)(we,l),(0,r.provide)(Re,c);const u=(0,r.ref)();return(0,r.watch)((()=>[u.value,l.value,e.name]),(([e,t,n],[r,o,c])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&d(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=c.value,s=e.name,i=l.value,f=i&&i.components[s];if(!f)return qe(n.default,{Component:f,route:o});const p=i.props[s],h=p?!0===p?o.params:"function"==typeof p?p(o):p:null,d=(0,r.h)(f,a({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[s]=null)},ref:u}));return qe(n.default,{Component:d,route:o})||d}}});function Me(e){const t=K(e.routes,e),n=e.parseQuery||ve,c=e.stringifyQuery||ye,u=e.history;const f=Ce(),h=Ce(),g=Ce(),v=(0,r.shallowRef)(q);let b=q;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=s.bind(null,(e=>""+e)),E=s.bind(null,me),k=s.bind(null,ge);function j(e,r){if(r=a({},r||v.value),"string"==typeof e){const o=p(n,e,r.path),c=t.resolve({path:o.path},r),s=u.createHref(o.fullPath);return a(o,c,{params:k(c.params),hash:ge(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in e)o=a({},e,{path:p(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];o=a({},e,{params:E(e.params)}),r.params=E(r.params)}const s=t.resolve(o,r),i=e.hash||"";s.params=w(k(s.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(c,a({},e,{hash:(f=i,he(f).replace(le,"{").replace(fe,"}").replace(se,"^")),path:s.path}));var f;const h=u.createHref(l);return a({fullPath:l,hash:i,query:c===ye?be(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function x(e){return"string"==typeof e?p(n,e,v.value.path):a({},e)}function $(e,t){if(b!==e)return B(8,{from:t,to:e})}function S(e){return M(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function M(e,t){const n=b=j(e),r=v.value,o=e.state,s=e.force,i=!0===e.replace,l=L(n);if(l)return M(a(x(l),{state:"object"==typeof l?a({},o,l.state):o,force:s,replace:i}),t||n);const u=n;let f;return u.redirectedFrom=t,!s&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&d(t.matched[r],n.matched[o])&&m(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(c,r,n)&&(f=B(16,{to:u,from:r}),X(r,r,!0,!1)),(f?Promise.resolve(f):I(u,r)).catch((e=>G(e)?G(e,2)?e:Q(e):H(e,u,r))).then((e=>{if(e){if(G(e,2))return M(a({replace:i},x(e.to),{state:"object"==typeof e.to?a({},o,e.to.state):o,force:s}),t||u)}else e=T(u,r,!0,i,o);return D(u,r,e),e}))}function _(e,t){const n=$(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,c]=function(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let a=0;a<c;a++){const c=t.matched[a];c&&(e.matched.find((e=>d(e,c)))?r.push(c):n.push(c));const s=e.matched[a];s&&(t.matched.find((e=>d(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=je(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Pe(r,e,t))}));const a=_.bind(null,e,t);return n.push(a),Be(n).then((()=>{n=[];for(const r of f.list())n.push(Pe(r,e,t));return n.push(a),Be(n)})).then((()=>{n=je(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Pe(r,e,t))}));return n.push(a),Be(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(Pe(o,e,t));else n.push(Pe(r.beforeEnter,e,t));return n.push(a),Be(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=je(c,"beforeRouteEnter",e,t),n.push(a),Be(n)))).then((()=>{n=[];for(const r of h.list())n.push(Pe(r,e,t));return n.push(a),Be(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function D(e,t,n){for(const r of g.list())r(e,t,n)}function T(e,t,n,r,c){const s=$(e,t);if(s)return s;const i=t===q,l=o?history.state:{};n&&(r||i?u.replace(e.fullPath,a({scroll:i&&l&&l.scroll},c)):u.push(e.fullPath,c)),v.value=e,X(e,t,n,i),Q()}let U;function F(){U||(U=u.listen(((e,t,n)=>{if(!J.listening)return;const r=j(e),c=L(r);if(c)return void M(a(c,{replace:!0}),r).catch(i);b=r;const s=v.value;var l,f;o&&(l=C(s.fullPath,n.delta),f=O(),P.set(l,f)),I(r,s).catch((e=>G(e,12)?e:G(e,2)?(M(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===y.pop&&u.go(-1,!1)})).catch(i),Promise.reject()):(n.delta&&u.go(-n.delta,!1),H(e,r,s)))).then((e=>{(e=e||T(r,s,!1))&&(n.delta&&!G(e,8)?u.go(-n.delta,!1):n.type===y.pop&&G(e,20)&&u.go(-1,!1)),D(r,s,e)})).catch(i)})))}let W,V=Ce(),z=Ce();function H(e,t,n){Q(e);const r=z.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Q(e){return W||(W=!e,F(),V.list().forEach((([t,n])=>e?n(e):t())),V.reset()),e}function X(t,n,c,a){const{scrollBehavior:s}=e;if(!o||!s)return Promise.resolve();const i=!c&&function(e){const t=P.get(e);return P.delete(e),t}(C(t.fullPath,0))||(a||!c)&&history.state&&history.state.scroll||null;return(0,r.nextTick)().then((()=>s(t,n,i))).then((e=>e&&R(e))).catch((e=>H(e,t,n)))}const Y=e=>u.go(e);let N;const Z=new Set,J={currentRoute:v,listening:!0,addRoute:function(e,n){let r,o;return A(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:j,options:e,push:S,replace:function(e){return S(a(x(e),{replace:!0}))},go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:f.add,beforeResolve:h.add,afterEach:g.add,onError:z.add,isReady:function(){return W&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{V.add([e,t])}))},install(e){e.component("RouterLink",$e),e.component("RouterView",Le),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.unref)(v)}),o&&!N&&v.value===q&&(N=!0,S(u.location).catch((e=>{0})));const t={};for(const e in q)t[e]=(0,r.computed)((()=>v.value[e]));e.provide(ke,this),e.provide(Oe,(0,r.reactive)(t)),e.provide(Re,v);const n=e.unmount;Z.add(e),e.unmount=function(){Z.delete(e),Z.size<1&&(b=q,U&&U(),U=null,v.value=q,N=!1,W=!1),n()}}};return J}function Be(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Ge(){return(0,r.inject)(ke)}}}]);