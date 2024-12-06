"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3005,9445,1462],{23005:function(e,n,a){a.r(n);var t=a(85893),i=a(8682),r=a(31462),s=a(16522);n.default=e=>{let{align:n="left",headerAlignment:a="center",className:l="",...c}=e,d=e.isDark||!1;d=(null==e?void 0:e.sectionBackground)==="dark"||d;let h="text-left";return"center"===n?h="text-center":"right"===n&&(h="text-right"),(0,t.jsx)("div",{className:l,children:(0,t.jsx)(s.Z,{...c,className:"container z-[2]",isDark:d,children:(0,t.jsxs)("div",{className:"".concat(h," ").concat(d?"has-dark-background":""),children:[(0,t.jsx)(r.default,{alignment:e.headerAlignment,preheading:e.preheading,heading:e.heading,sectionDestinationUrl:e.sectionDestinationUrl,isDark:d,children:e.headerContent&&(0,t.jsx)("div",{className:"mb-3 lg:mb-5",children:(0,i.OT)(e.headerContent)})}),(0,t.jsx)("div",{className:"main-content",children:(0,i.OT)(e.content)})]})})})}},16522:function(e,n,a){var t=a(85893),i=a(21028);let{theme:r}=(0,a(96932).t)();n.Z=e=>{let n=["dynamic-section"];if(e.isDark){var a;n.push("is-dark"),n.push((null==r?void 0:null===(a=r.classNames)||void 0===a?void 0:a.darkBackground)||"bg-black")}return e.isSlim&&n.push("dynamic-section--slim"),(0,t.jsx)("section",{className:(0,i.Y)("z-[1]",n.join(" "),e.className),children:e.children})}},39445:function(e,n,a){a.r(n),a.d(n,{highlighter:function(){return l}});var t=a(85893),i=a(21028);let{theme:r}=(0,a(96932).t)(),s=["strong","b","em","i","u"],l=(e,n)=>{var a;let i=/(\[.*?\])/;return"string"!=typeof(e="string"==typeof e?e:"string"==typeof(null==e?void 0:e[0])?e[0]:e)?e:(0,t.jsx)(t.Fragment,{children:null===(a=e.split(i))||void 0===a?void 0:a.map((e,a)=>{if(!e.match(i))return e;let r=e.replace(/\[(.*?)\]/,(e,n)=>n);return(0,t.jsx)("span",{className:n,children:r},a)})})};n.default=e=>{var n;let a="h".concat(e.level),c=e.children;return(c&&c.type&&s.includes(c.type)&&(c=c.props.children),c&&Array.isArray(c)&&c.forEach(e=>{Array.isArray(e)&&e.forEach((n,a)=>{if("object"==typeof n&&(null==n?void 0:n.type)&&s.includes(n.type)){var t;e[a]=null==n?void 0:null===(t=n.props)||void 0===t?void 0:t.children}})}),!c||Array.isArray(c)&&0===c.length)?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(a,{id:e.id,className:(0,i.Y)({uppercase:(null==r?void 0:r.hasUppercaseHeadings)&&!e.forceSentenceCase},null==r?void 0:null===(n=r.classNames)||void 0===n?void 0:n[a],e.className),children:l(c,e.highlightClassName||"text-primary")})}},31462:function(e,n,a){a.r(n);var t=a(85893),i=a(59417),r=a(67814),s=a(21028),l=a(96790),c=a(39445);n.default=e=>{let n="text-left text-pretty";switch(e.alignment){case"center":n="text-center max-w-[850px] mx-auto";break;case"right":n="text-right"}return(0,t.jsx)("div",{className:e.className||"",children:(0,t.jsxs)("div",{className:n,children:[e.preheading&&(0,t.jsx)(l.Z,{href:e.sectionDestinationUrl,className:"hover:underline",children:(0,t.jsxs)("div",{className:"".concat(n," preheading ").concat(e.isDark?"text-preheading-inverse":"text-preheading"),children:[e.preheading,e.sectionDestinationUrl&&(0,t.jsx)(r.G,{icon:i.eFW,className:"ml-1"})]})}),e.heading&&(0,t.jsx)(l.Z,{href:e.sectionDestinationUrl,className:"hover:underline",children:(0,t.jsx)(c.default,{level:2,className:(0,s.Y)(n,{"text-white":e.isDark},"mb-section-header-margin-bottom",e.headingClassName),children:e.heading})}),e.children&&(0,t.jsx)("div",{className:(0,s.Y)("max-w-[600px] leading-spaced text-lg lg:text-md",n,{"text-white":e.isDark,"mx-auto":"center"===e.alignment}),children:e.children})]})})}}}]);