const e="promotion-offer";let t;let n;let s;let l=false;let o=false;let i=false;let c=false;let f=false;const r=e=>{const t=new URL(e,Ae.t);return t.origin!==De.location.origin?t.href:t.pathname};const u=(e,t="")=>{{return()=>{}}};const a=(e,t)=>{{return()=>{}}};const d="{visibility:hidden}.hydrated{visibility:inherit}";const p="http://www.w3.org/1999/xlink";const h={};const y="http://www.w3.org/2000/svg";const m="http://www.w3.org/1999/xhtml";const b=e=>e!=null;const $=e=>{e=typeof e;return e==="object"||e==="function"};function w(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const v=(e,t,...n)=>{let s=null;let l=null;let o=null;let i=false;let c=false;const f=[];const r=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(i=typeof e!=="function"&&!$(s)){s=String(s)}if(i&&c){f[f.length-1].l+=s}else{f.push(i?g(null,s):s)}c=i}}};r(n);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,f,j)}const u=g(e,null);u.o=t;if(f.length>0){u.i=f}{u.u=l}{u.p=o}return u};const g=(e,t)=>{const n={h:0,m:e,l:t,$:null,i:null};{n.o=null}{n.u=null}{n.p=null}return n};const k={};const S=e=>e&&e.m===k;const j={forEach:(e,t)=>e.map(O).forEach(t),map:(e,t)=>e.map(O).map(t).map(C)};const O=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.p,vtag:e.m,vtext:e.l});const C=e=>{if(typeof e.vtag==="function"){const t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return v(e.vtag,t,...e.vchildren||[])}const t=g(e.vtag,e.vtext);t.o=e.vattrs;t.i=e.vchildren;t.u=e.vkey;t.p=e.vname;return t};const M=(e,t)=>{if(e!=null&&!$(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const x=e=>Re(e).v;const R=(e,t,n)=>{const s=x(e);return{emit:e=>U(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const U=(e,t,n)=>{const s=Ae.ce(t,n);e.dispatchEvent(s);return s};const P=new WeakMap;const L=(e,t,n)=>{let s=We.get(e);if(qe&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}We.set(e,s)};const T=(e,t,n)=>{var s;const l=N(t);const o=We.get(l);e=e.nodeType===11?e:Fe;if(o){if(typeof o==="string"){e=e.head||e;let t=P.get(e);let n;if(!t){P.set(e,t=new Set)}if(!t.has(l)){{n=Fe.createElement("style");n.innerHTML=o;const t=(s=Ae.g)!==null&&s!==void 0?s:w(Fe);if(t!=null){n.setAttribute("nonce",t)}e.insertBefore(n,e.querySelector("link"))}if(t){t.add(l)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]}}return l};const E=e=>{const t=e.k;const n=e.v;const s=t.h;const l=u("attachStyles",t.S);const o=T(n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h");if(s&2){n.classList.add(o+"-s")}}l()};const N=(e,t)=>"sc-"+e.S;const W=(e,t,n,s,l,o)=>{if(n!==s){let i=Le(e,t);let c=t.toLowerCase();if(t==="class"){const t=e.classList;const l=F(n);const o=F(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!i&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Le(De,c)){t=c.slice(2)}else{t=c[2]+t.slice(3)}if(n){Ae.rel(e,t,n,false)}if(s){Ae.ael(e,t,s,false)}}else{const f=$(s);if((i||f&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){i=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}let r=false;{if(c!==(c=c.replace(/^xlink\:?/,""))){t=c;r=true}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){if(r){e.removeAttributeNS(p,t)}else{e.removeAttribute(t)}}}else if((!i||o&4||l)&&!f){s=s===true?"":s;if(r){e.setAttributeNS(p,t,s)}else{e.setAttribute(t,s)}}}}};const D=/\s/;const F=e=>!e?[]:e.split(D);const A=(e,t,n,s)=>{const l=t.$.nodeType===11&&t.$.host?t.$.host:t.$;const o=e&&e.o||h;const i=t.o||h;{for(s in o){if(!(s in i)){W(l,s,o[s],undefined,n,t.h)}}}for(s in i){W(l,s,o[s],i[s],n,t.h)}};const H=(e,o,f,r)=>{const u=o.i[f];let a=0;let d;let p;let h;if(!l){i=true;if(u.m==="slot"){if(t){r.classList.add(t+"-s")}u.h|=u.i?2:1}}if(u.l!==null){d=u.$=Fe.createTextNode(u.l)}else if(u.h&1){d=u.$=Fe.createTextNode("")}else{if(!c){c=u.m==="svg"}d=u.$=Fe.createElementNS(c?y:m,u.h&2?"slot-fb":u.m);if(c&&u.m==="foreignObject"){c=false}{A(null,u,c)}if(b(t)&&d["s-si"]!==t){d.classList.add(d["s-si"]=t)}if(u.i){for(a=0;a<u.i.length;++a){p=H(e,u,a,d);if(p){d.appendChild(p)}}}{if(u.m==="svg"){c=false}else if(d.tagName==="foreignObject"){c=true}}}{d["s-hn"]=s;if(u.h&(2|1)){d["s-sr"]=true;d["s-cr"]=n;d["s-sn"]=u.p||"";h=e&&e.i&&e.i[f];if(h&&h.m===u.m&&e.$){q(e.$,false)}}}return d};const q=(e,t)=>{Ae.h|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const l=n[e];if(l["s-hn"]!==s&&l["s-ol"]){G(l).insertBefore(l,B(l));l["s-ol"].remove();l["s-ol"]=undefined;i=true}if(t){q(l,t)}}Ae.h&=~1};const I=(e,t,n,s,l,o)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e;let c;for(;l<=o;++l){if(s[l]){c=H(null,n,l,e);if(c){s[l].$=c;i.insertBefore(c,B(t))}}}};const V=(e,t,n)=>{for(let s=t;s<=n;++s){const t=e[s];if(t){const e=t.$;Z(t);if(e){{o=true;if(e["s-ol"]){e["s-ol"].remove()}else{q(e,true)}}e.remove()}}}};const _=(e,t,n,s)=>{let l=0;let o=0;let i=0;let c=0;let f=t.length-1;let r=t[0];let u=t[f];let a=s.length-1;let d=s[0];let p=s[a];let h;let y;while(l<=f&&o<=a){if(r==null){r=t[++l]}else if(u==null){u=t[--f]}else if(d==null){d=s[++o]}else if(p==null){p=s[--a]}else if(z(r,d)){J(r,d);r=t[++l];d=s[++o]}else if(z(u,p)){J(u,p);u=t[--f];p=s[--a]}else if(z(r,p)){if(r.m==="slot"||p.m==="slot"){q(r.$.parentNode,false)}J(r,p);e.insertBefore(r.$,u.$.nextSibling);r=t[++l];p=s[--a]}else if(z(u,d)){if(r.m==="slot"||p.m==="slot"){q(u.$.parentNode,false)}J(u,d);e.insertBefore(u.$,r.$);u=t[--f];d=s[++o]}else{i=-1;{for(c=l;c<=f;++c){if(t[c]&&t[c].u!==null&&t[c].u===d.u){i=c;break}}}if(i>=0){y=t[i];if(y.m!==d.m){h=H(t&&t[o],n,i,e)}else{J(y,d);t[i]=undefined;h=y.$}d=s[++o]}else{h=H(t&&t[o],n,o,e);d=s[++o]}if(h){{G(r.$).insertBefore(h,B(r.$))}}}}if(l>f){I(e,s[a+1]==null?null:s[a+1].$,n,s,o,a)}else if(o>a){V(t,l,f)}};const z=(e,t)=>{if(e.m===t.m){if(e.m==="slot"){return e.p===t.p}{return e.u===t.u}}return false};const B=e=>e&&e["s-ol"]||e;const G=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const J=(e,t)=>{const n=t.$=e.$;const s=e.i;const l=t.i;const o=t.m;const i=t.l;let f;if(i===null){{c=o==="svg"?true:o==="foreignObject"?false:c}{if(o==="slot");else{A(e,t,c)}}if(s!==null&&l!==null){_(n,s,t,l)}else if(l!==null){if(e.l!==null){n.textContent=""}I(n,null,t,l,0,l.length-1)}else if(s!==null){V(s,0,s.length-1)}if(c&&o==="svg"){c=false}}else if(f=n["s-cr"]){f.parentNode.textContent=i}else if(e.l!==i){n.data=i}};const K=e=>{const t=e.childNodes;let n;let s;let l;let o;let i;let c;for(s=0,l=t.length;s<l;s++){n=t[s];if(n.nodeType===1){if(n["s-sr"]){i=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){c=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||i!==""){if(c===1&&i===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(c===1||c===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}K(n)}}};const Q=[];const X=e=>{let t;let n;let s;let l;let i;let c;let f=0;const r=e.childNodes;const u=r.length;for(;f<u;f++){t=r[f];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=t["s-sn"];for(c=s.length-1;c>=0;c--){n=s[c];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(Y(n,l)){i=Q.find((e=>e.j===n));o=true;n["s-sn"]=n["s-sn"]||l;if(i){i.O=t}else{Q.push({O:t,j:n})}if(n["s-sr"]){Q.map((e=>{if(Y(e.j,n["s-sn"])){i=Q.find((e=>e.j===n));if(i&&!e.O){e.O=i.O}}}))}}else if(!Q.some((e=>e.j===n))){Q.push({j:n})}}}}if(t.nodeType===1){X(t)}}};const Y=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const Z=e=>{{e.o&&e.o.ref&&e.o.ref(null);e.i&&e.i.map(Z)}};const ee=(e,c,f=false)=>{const r=e.v;const u=e.k;const a=e.C||g(null,null);const d=S(c)?c:v(null,null,c);s=r.tagName;if(f&&d.o){for(const e of Object.keys(d.o)){if(r.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){d.o[e]=r[e]}}}d.m=null;d.h|=4;e.C=d;d.$=a.$=r;{t=r["s-sc"]}{n=r["s-cr"];l=(u.h&1)!==0;o=false}J(a,d);{Ae.h|=1;if(i){X(d.$);let e;let t;let n;let s;let l;let o;let i=0;for(;i<Q.length;i++){e=Q[i];t=e.j;if(!t["s-ol"]){n=Fe.createTextNode("");n["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=n,t)}}for(i=0;i<Q.length;i++){e=Q[i];t=e.j;if(e.O){s=e.O.parentNode;l=e.O.nextSibling;n=t["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}s.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(o){K(d.$)}Ae.h&=~1;Q.length=0}};const te=(e,t)=>{if(t&&!e.M&&t["s-p"]){t["s-p"].push(new Promise((t=>e.M=t)))}};const ne=(e,t)=>{{e.h|=16}if(e.h&4){e.h|=512;return}te(e,e.R);const n=()=>se(e,t);return Je(n)};const se=(e,t)=>{const n=u("scheduleUpdate",e.k.S);const s=e.U;let l;if(t){{e.h|=256;if(e.P){e.P.map((([e,t])=>ue(s,e,t)));e.P=undefined}}{l=ue(s,"componentWillLoad")}}else{{l=ue(s,"componentWillUpdate")}}n();return le(l,(()=>ie(e,s,t)))};const le=(e,t)=>oe(e)?e.then(t):t();const oe=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";const ie=async(e,t,n)=>{var s;const l=e.v;const o=u("update",e.k.S);const i=l["s-rc"];if(n){E(e)}const c=u("render",e.k.S);{ce(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=undefined}c();o();{const t=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>fe(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.h|=4;t.length=0}}};const ce=(e,t,n,s)=>{try{t=t.render();{e.h&=~16}{e.h|=2}{{{ee(e,t,s)}}}}catch(t){Te(t,e.v)}return null};const fe=e=>{const t=e.k.S;const n=e.v;const s=u("postUpdate",t);const l=e.U;const o=e.R;{ue(l,"componentDidRender")}if(!(e.h&64)){e.h|=64;{ae(n)}{ue(l,"componentDidLoad")}s();{e.L(n);if(!o){re()}}}else{{ue(l,"componentDidUpdate")}s()}{e.T(n)}{if(e.M){e.M();e.M=undefined}if(e.h&512){Ge((()=>ne(e,false)))}e.h&=~(4|512)}};const re=t=>{{ae(Fe.documentElement)}Ge((()=>U(De,"appload",{detail:{namespace:e}})))};const ue=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){Te(e)}}return undefined};const ae=e=>e.classList.add("hydrated");const de=(e,t)=>Re(e).N.get(t);const pe=(e,t,n,s)=>{const l=Re(e);const o=l.N.get(t);const i=l.h;const c=l.U;n=M(n,s.W[t][0]);const f=Number.isNaN(o)&&Number.isNaN(n);const r=n!==o&&!f;if((!(i&8)||o===undefined)&&r){l.N.set(t,n);if(c){if((i&(2|16))===2){ne(l,false)}}}};const he=(e,t,n)=>{if(t.W){const s=Object.entries(t.W);const l=e.prototype;s.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,e,{get(){return de(this,e)},set(n){pe(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,e,{value(...t){const n=Re(this);return n.D.then((()=>n.U[e](...t)))}})}}));if(n&1){const t=new Map;l.attributeChangedCallback=function(e,n,s){Ae.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n)){s=this[n];delete this[n]}else if(l.hasOwnProperty(n)&&typeof this[n]==="number"&&this[n]==s){return}this[n]=s===null&&typeof this[n]==="boolean"?false:s}))};e.observedAttributes=s.filter((([e,t])=>t[0]&15)).map((([e,n])=>{const s=n[1]||e;t.set(s,e);return s}))}}return e};const ye=async(e,t,n,s,l)=>{if((t.h&32)===0){t.h|=32;{l=Ne(n);if(l.then){const e=a();l=await l;e()}if(!l.isProxied){he(l,n,2);l.isProxied=true}const e=u("createInstance",n.S);{t.h|=8}try{new l(t)}catch(e){Te(e)}{t.h&=~8}e();me(t.U)}if(l.style){let e=l.style;const t=N(n);if(!We.has(t)){const s=u("registerStyles",n.S);L(t,e,!!(n.h&1));s()}}}const o=t.R;const i=()=>ne(t,true);if(o&&o["s-rc"]){o["s-rc"].push(i)}else{i()}};const me=e=>{{ue(e,"connectedCallback")}};const be=e=>{if((Ae.h&1)===0){const t=Re(e);const n=t.k;const s=u("connectedCallback",n.S);if(!(t.h&1)){t.h|=1;{if(n.h&(4|8)){$e(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){te(t,t.R=n);break}}}if(n.W){Object.entries(n.W).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{ye(e,t,n)}}else{Se(e,t,n.F);if(t===null||t===void 0?void 0:t.U){me(t.U)}else if(t===null||t===void 0?void 0:t.A){t.A.then((()=>me(t.U)))}}s()}};const $e=e=>{const t=e["s-cr"]=Fe.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const we=e=>{{ue(e,"disconnectedCallback")}};const ve=async e=>{if((Ae.h&1)===0){const t=Re(e);{if(t.H){t.H.map((e=>e()));t.H=undefined}}if(t===null||t===void 0?void 0:t.U){we(t.U)}else if(t===null||t===void 0?void 0:t.A){t.A.then((()=>we(t.U)))}}};const ge=(e,t={})=>{var n;const s=u();const l=[];const o=t.exclude||[];const i=De.customElements;const c=Fe.head;const f=c.querySelector("meta[charset]");const r=Fe.createElement("style");const a=[];let p;let h=true;Object.assign(Ae,t);Ae.t=new URL(t.resourcesUrl||"./",Fe.baseURI).href;e.map((e=>{e[1].map((t=>{const n={h:t[0],S:t[1],W:t[2],F:t[3]};{n.W=t[2]}{n.F=t[3]}const s=n.S;const c=class extends HTMLElement{constructor(e){super(e);e=this;Pe(e,n)}connectedCallback(){if(p){clearTimeout(p);p=null}if(h){a.push(this)}else{Ae.jmp((()=>be(this)))}}disconnectedCallback(){Ae.jmp((()=>ve(this)))}componentOnReady(){return Re(this).A}};n.q=e[0];if(!o.includes(s)&&!i.get(s)){l.push(s);i.define(s,he(c,n,1))}}))}));{r.innerHTML=l+d;r.setAttribute("data-styles","");const e=(n=Ae.g)!==null&&n!==void 0?n:w(Fe);if(e!=null){r.setAttribute("nonce",e)}c.insertBefore(r,f?f.nextSibling:c.firstChild)}h=false;if(a.length){a.map((e=>e.connectedCallback()))}else{{Ae.jmp((()=>p=setTimeout(re,30)))}}s()};const ke=(e,t)=>t;const Se=(e,t,n,s)=>{if(n){n.map((([n,s,l])=>{const o=Oe(e,n);const i=je(t,l);const c=Ce(n);Ae.ael(o,s,i,c);(t.H=t.H||[]).push((()=>Ae.rel(o,s,i,c)))}))}};const je=(e,t)=>n=>{try{{if(e.h&256){e.U[t](n)}else{(e.P=e.P||[]).push([t,n])}}}catch(e){Te(e)}};const Oe=(e,t)=>{if(t&8)return De;return e};const Ce=e=>(e&2)!==0;const Me=e=>Ae.g=e;const xe=new WeakMap;const Re=e=>xe.get(e);const Ue=(e,t)=>xe.set(t.U=e,t);const Pe=(e,t)=>{const n={h:0,v:e,k:t,N:new Map};{n.D=new Promise((e=>n.T=e))}{n.A=new Promise((e=>n.L=e));e["s-p"]=[];e["s-rc"]=[]}Se(e,n,t.F);return xe.set(e,n)};const Le=(e,t)=>t in e;const Te=(e,t)=>(0,console.error)(e,t);const Ee=new Map;const Ne=(e,t,n)=>{const s=e.S.replace(/-/g,"_");const l=e.q;const o=Ee.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{Ee.set(l,e)}return e[s]}),Te)};const We=new Map;const De=typeof window!=="undefined"?window:{};const Fe=De.document||{head:{}};const Ae={h:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const He=e=>Promise.resolve(e);const qe=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const Ie=[];const Ve=[];const _e=(e,t)=>n=>{e.push(n);if(!f){f=true;if(t&&Ae.h&4){Ge(Be)}else{Ae.raf(Be)}}};const ze=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){Te(e)}}e.length=0};const Be=()=>{ze(Ie);{ze(Ve);if(f=Ie.length>0){Ae.raf(Be)}}};const Ge=e=>He().then(e);const Je=_e(Ve,true);export{ke as F,k as H,r as a,ge as b,R as c,x as g,v as h,He as p,Ue as r,Me as s};
//# sourceMappingURL=p-4164988b.js.map