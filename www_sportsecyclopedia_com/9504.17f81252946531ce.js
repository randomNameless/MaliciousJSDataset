"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9504,1197],{11197:function(e,t,a){a.r(t);var r=a(85893),s=a(41664),c=a.n(s),o=a(21028);t.default=e=>{let{destinationType:t,shadow:a=!0,customColorClassNames:s}=e,{href:h,onClick:n}=e,b=["no-inherit","rounded-button","font-body-bold","uppercase","tracking-widest"];switch(a&&b.push("shadow-button"),e.color){case"cta":b.push("bg-cta text-cta-accent hover:bg-cta-hover");break;case"faded":b.push("bg-box");break;case"outline":b.push("bg-transparent","border border-primary-accent","text-primary-accent","hover:bg-white");break;case"white":b.push("bg-white","hover:bg-button-white-accent","border","border-border","text-black");break;case"outline-white":b.push("bg-transparent","border border-black","text-black","hover:bg-white","hover:text-black");break;case"outline-cta":b.push("bg-white","border border-cta","text-cta","hover:bg-white","hover:text-cta");break;case"primary":b.push("bg-primary hover:bg-primary-accent text-primary-accent hover:text-white");break;case"secondary":b.push("bg-button-secondary text-button-secondary-text hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover");break;case"tertiary":b.push("bg-tertiary hover:bg-tertiary-accent text-white");break;case"hero-accent":b.push("bg-hero-accent hover:bg-hero-accent text-white");break;case"negative":b.push("bg-negative hover:bg-negative-accent text-white");break;default:b.push("bg-button-default hover:bg-button-default-hover text-button-default-text")}switch(e.size){case"custom":break;case"xs":b.push("text-xs px-2 py-[4px]");break;case"sm":case"md":case"default":default:b.push("text-xs px-4 py-2");break;case"lg":b.push("text-sm px-6 py-3")}return(e.disabled&&b.push("opacity-50 cursor-not-allowed"),h)?h.startsWith("/visit/")?(0,r.jsx)("a",{href:h,className:(0,o.Y)(b.join(" "),e.className),rel:e.rel||"",target:e.target||"",children:e.children}):(0,r.jsx)(c(),{href:h,className:(0,o.Y)(b,s,e.className),rel:e.rel||"",target:e.target||"",children:e.children}):(0,r.jsx)("button",{className:(0,o.Y)(b,s,e.className),onClick:n||(()=>{}),type:e.type||"button",disabled:e.disabled,children:e.children})}},79504:function(e,t,a){a.r(t);var r=a(85893),s=a(11197);t.default=e=>{let{items:t,options:a}=e,c="justify-start";return(null==a?void 0:a.alignment)==="center"?c="justify-center":(null==a?void 0:a.alignment)==="right"&&(c="justify-end"),(0,r.jsx)("div",{className:"flex flex-wrap -mb-1 ".concat(c),children:t.map((e,t)=>(0,r.jsx)(s.default,{href:e.urlPathWithAncestry,className:"mr-1 mb-1",size:"sm",color:"faded",shadow:!1,children:e.title},t))})}}}]);