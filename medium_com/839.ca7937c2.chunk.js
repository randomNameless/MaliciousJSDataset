"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[839],{68037:(e,n,t)=>{t.d(n,{x:()=>o});var a=t(45458),r=t(59265),l=t(77485),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserInListDialog_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat((0,a.A)(r.v0.definitions),(0,a.A)(l.R.definitions))}},14281:(e,n,t)=>{t.d(n,{B:()=>m});var a=t(96540),r=t(23393),l=t(52290),o=t(86527),c=t(56942),i=t(36557),s=t(56774),u=t(39160),d=t(46879),m=function(e){var n=e.user,t=e.followButton,m=e.badge,p=e.trackingV2,f=(0,u.d4)((function(e){return e.config.authDomain})),v=n.username,g=n.name,h=n.bio,b=void 0===h?"":h,E=(0,s.X)({entity:n,trackingV2:p});return g&&v?a.createElement(l.a,{padding:"12px 0",ref:E},a.createElement(l.a,{display:"flex",alignItems:"flex-start",justifyContent:"space-between"},a.createElement(l.a,{display:"flex",alignItems:"flex-start"},a.createElement(l.a,{marginRight:"20px"},a.createElement(r.H8,{user:n,scale:"S"}),m),a.createElement(l.a,{display:"flex",flexDirection:"column",alignItems:"flex-start"},a.createElement(o.N,{href:(0,d.EpC)(n,f)},a.createElement(c.DZ,{scale:"XS"},g," ")),a.createElement(i.kZ,{scale:"S"},b))),a.createElement(l.a,{marginLeft:"48px"},t))):null}},74346:(e,n,t)=>{t.d(n,{S:()=>h});var a=t(64467),r=t(96540),l=t(37661),o=t(44402),c=t(18642),i=t(15578),s=5,u=360/s,d={position:"absolute",pointerEvents:"none",top:"-2px",left:"0",width:"25px",height:"36px"},m={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1"},"100%":{opacity:"0",transform:"scale(1.5)"}},p={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1",transform:"scale(1.3)"},"100%":{opacity:"0",transform:"scale(1.6)"}},f=function(e){return(0,a.A)({animation:"370ms ease-out 1 ".concat(e),opacity:"0"},(0,i.Oe)("reduce"),{animationDuration:"0.1ms"})},v=function(){return{position:"absolute",top:"".concat(48,"%"),left:"".concat(-5,"px"),transformOrigin:"".concat(18,"px"),width:"".concat(2,"px"),height:"".concat(2,"px"),borderRadius:"50%",backgroundColor:c.nN}},g=function(){return{position:"absolute",top:"".concat(44,"%"),left:"".concat(-9,"px"),transformOrigin:"".concat(22,"px"),width:"0",height:"0",borderTop:"2px solid transparent",borderBottom:"2px solid transparent",borderLeft:"".concat(6,"px solid ").concat(c.vz)}};function h(e){var n=e.offset,t=e.onBurstEnd,a=(0,o.l)(),c=a(d);return r.createElement(l.w,{keyframes:{dotKeyframesName:m,triangleKeyframesName:p}},(function(e){for(var l=e.dotKeyframesName,o=e.triangleKeyframesName,i=[],d=[],m=0;m<s;m++){var p=u*m+n;i.push(r.createElement("div",{key:p,className:a(v()),style:{transform:"rotate(".concat(p,"deg)")}})),d.push(r.createElement("div",{key:p,className:a(g()),style:{transform:"rotate(".concat(p+13,"deg)")}}))}return r.createElement("div",{className:c},r.createElement("div",{className:"".concat(c," ").concat(a(f(l))),onAnimationEnd:function(){return t(n)}},i),r.createElement("div",{className:"".concat(c," ").concat(a(f(o)))},d))}))}},26557:(e,n,t)=>{t.d(n,{g:()=>D});var a,r=t(96540),l=t(5600),o=t(44402);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(null,arguments)}const i=function(e){return r.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},e),a||(a=r.createElement("path",{fillRule:"evenodd",d:"M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z",clipRule:"evenodd"})))};var s;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(null,arguments)}const d=function(e){return r.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:29,height:29},e),s||(s=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"m13.739 1 .761 2.966L15.261 1zM16.815 4.776l1.84-2.551-1.43-.471zM10.378 2.224l1.84 2.551-.408-3.022zM22.382 22.622c-1.04 1.04-2.115 1.507-3.166 1.608q.252-.21.492-.45c2.885-2.886 3.456-5.982 1.69-9.211l-1.101-1.937-.955-2.02c-.315-.676-.235-1.185.245-1.556a.84.84 0 0 1 .66-.16c.342.056.66.28.879.605l2.856 5.023c1.179 1.962 1.379 5.119-1.6 8.098m-13.29-.528-5.02-5.02a1 1 0 0 1 .707-1.701c.255 0 .512.098.707.292l2.607 2.607a.442.442 0 0 0 .624-.624L6.11 15.04l-1.75-1.75a.998.998 0 1 1 1.41-1.413l4.154 4.156a.44.44 0 0 0 .624 0 .44.44 0 0 0 0-.624l-4.152-4.153-1.172-1.171a1 1 0 0 1 0-1.41 1.02 1.02 0 0 1 1.41 0l1.172 1.17 4.153 4.152a.437.437 0 0 0 .624 0 .44.44 0 0 0 0-.624L8.43 9.222a1 1 0 0 1-.291-.705 1 1 0 0 1 .29-.706 1 1 0 0 1 1.412 0l6.992 6.993a.443.443 0 0 0 .71-.501l-1.35-2.856c-.315-.676-.235-1.185.246-1.557a.85.85 0 0 1 .66-.16c.342.056.659.28.879.606L20.628 15c1.573 2.876 1.067 5.545-1.544 8.156-1.396 1.397-3.144 1.966-5.063 1.652-1.713-.286-3.463-1.248-4.928-2.714zM12.99 6.976l2.562 2.562c-.497.607-.563 1.414-.155 2.284l.265.562-4.257-4.257a1 1 0 0 1-.117-.445c0-.267.104-.517.292-.706a1.023 1.023 0 0 1 1.41 0m8.887 2.06c-.375-.557-.902-.916-1.486-1.011a1.74 1.74 0 0 0-1.342.332c-.376.29-.61.656-.712 1.065a2.1 2.1 0 0 0-1.095-.562 1.8 1.8 0 0 0-.992.128l-2.636-2.636a1.883 1.883 0 0 0-2.658 0 1.86 1.86 0 0 0-.478.847 1.886 1.886 0 0 0-2.671-.012 1.87 1.87 0 0 0-.503.909c-.754-.754-1.992-.754-2.703-.044a1.88 1.88 0 0 0 0 2.658c-.288.12-.605.288-.864.547a1.884 1.884 0 0 0 0 2.659l.624.622a1.879 1.879 0 0 0-.91 3.16l5.019 5.02c1.595 1.594 3.515 2.645 5.408 2.959a7 7 0 0 0 1.173.098c1.026 0 1.997-.24 2.892-.7.279.04.555.065.828.065 1.53 0 2.969-.628 4.236-1.894 3.338-3.338 3.083-6.928 1.738-9.166l-2.868-5.043z"}))))};var m;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(null,arguments)}const f=function(e){return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:33,height:33,viewBox:"0 0 33 33"},e),m||(m=r.createElement("path",{fillRule:"evenodd",d:"m28.86 17.342-3.64-6.402c-.292-.433-.712-.729-1.163-.8a1.12 1.12 0 0 0-.889.213c-.63.488-.742 1.181-.33 2.061l1.222 2.587 1.4 2.46c2.234 4.085 1.511 8.007-2.145 11.663-.26.26-.526.49-.797.707 1.42-.084 2.881-.683 4.292-2.094 3.822-3.823 3.565-7.876 2.05-10.395m-6.252 11.075c3.352-3.35 3.998-6.775 1.978-10.469l-3.378-5.945c-.292-.432-.712-.728-1.163-.8a1.12 1.12 0 0 0-.89.213c-.63.49-.742 1.182-.33 2.061l1.72 3.638a.502.502 0 0 1-.806.568l-8.91-8.91a1.335 1.335 0 0 0-1.887 1.886l5.292 5.292a.5.5 0 0 1-.707.707l-5.292-5.292-1.492-1.492c-.503-.503-1.382-.505-1.887 0a1.337 1.337 0 0 0 0 1.886l1.493 1.492 5.292 5.292a.499.499 0 0 1-.353.854.5.5 0 0 1-.354-.147L5.642 13.96a1.34 1.34 0 0 0-1.887 0 1.34 1.34 0 0 0 0 1.887l2.23 2.228 3.322 3.324a.499.499 0 0 1-.353.853.5.5 0 0 1-.354-.146l-3.323-3.324a1.333 1.333 0 0 0-1.886 0 1.33 1.33 0 0 0-.39.943c0 .356.138.691.39.943l6.396 6.397c3.528 3.53 8.86 5.313 12.821 1.353zM12.73 9.26l5.68 5.68-.49-1.037c-.518-1.107-.426-2.13.224-2.89l-3.303-3.304a1.337 1.337 0 0 0-1.886 0 1.33 1.33 0 0 0-.39.944c0 .217.067.42.165.607m14.787 19.184c-1.599 1.6-3.417 2.392-5.353 2.392-.349 0-.7-.03-1.058-.082a7.9 7.9 0 0 1-3.667.887c-3.049 0-6.115-1.626-8.359-3.87l-6.396-6.397A2.32 2.32 0 0 1 2 19.724a2.33 2.33 0 0 1 1.923-2.296l-.875-.875a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.647l-.139-.139c-.91-.91-.91-2.39 0-3.3.884-.884 2.421-.882 3.301 0l.138.14a2.335 2.335 0 0 1 3.948-1.24l.093.092c.091-.423.291-.828.62-1.157a2.336 2.336 0 0 1 3.3 0l3.384 3.386a2.17 2.17 0 0 1 1.271-.173c.534.086 1.03.354 1.441.765.11-.549.415-1.034.911-1.418a2.12 2.12 0 0 1 1.661-.41c.727.117 1.385.565 1.853 1.262l3.652 6.423c1.704 2.832 2.025 7.377-2.205 11.607M13.217.484l-1.917.882 2.37 2.837zm8.487.877-1.928-.86-.44 3.697zM16.5 3.293 15.478-.005h2.044z"})))};var v,g;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(null,arguments)}const b=function(e){return r.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},e),v||(v=r.createElement("path",{fillRule:"evenodd",d:"M11.37.828 12 3.282l.63-2.454zM15.421 1.84l-1.185-.388-.338 2.5zM9.757 1.452l-1.184.389 1.523 2.112zM20.253 11.84 17.75 7.438c-.238-.353-.57-.584-.93-.643a.96.96 0 0 0-.753.183 1.13 1.13 0 0 0-.443.695c.014.019.03.033.044.053l2.352 4.138c1.614 2.95 1.1 5.771-1.525 8.395a7 7 0 0 1-.454.415c.997-.13 1.927-.61 2.773-1.457 2.705-2.704 2.517-5.585 1.438-7.377M12.066 9.01c-.129-.687.08-1.299.573-1.773l-2.062-2.063a1.123 1.123 0 0 0-1.555 0 1.1 1.1 0 0 0-.273.521z",clipRule:"evenodd"})),g||(g=r.createElement("path",{fillRule:"evenodd",d:"M14.741 8.309c-.18-.267-.446-.455-.728-.502a.67.67 0 0 0-.533.127c-.146.113-.59.458-.199 1.296l1.184 2.503a.448.448 0 0 1-.236.755.445.445 0 0 1-.483-.248L7.614 6.106A.816.816 0 1 0 6.459 7.26l3.643 3.644a.446.446 0 1 1-.631.63L5.83 7.896l-1.03-1.03a.82.82 0 0 0-1.395.577.81.81 0 0 0 .24.576l1.027 1.028 3.643 3.643a.444.444 0 0 1-.144.728.44.44 0 0 1-.486-.098l-3.64-3.64a.82.82 0 0 0-1.335.263.81.81 0 0 0 .178.89l1.535 1.534 2.287 2.288a.445.445 0 0 1-.63.63l-2.287-2.288a.813.813 0 0 0-1.393.578c0 .216.086.424.238.577l4.403 4.403c2.79 2.79 5.495 4.119 8.681.931 2.269-2.271 2.708-4.588 1.342-7.086z",clipRule:"evenodd"})))};var E;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},x.apply(null,arguments)}const y=function(e){return r.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:29,height:29},e),E||(E=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"m13.738 1 .762 2.966L15.262 1zM18.634 2.224l-1.432-.47-.408 3.022zM11.79 1.754l-1.431.47 1.84 2.552zM24.472 14.307l-3.023-5.32c-.287-.426-.689-.705-1.123-.776a1.16 1.16 0 0 0-.911.221c-.297.231-.474.515-.535.84.017.022.036.04.053.063l2.843 5.001c1.95 3.564 1.328 6.973-1.843 10.144a9 9 0 0 1-.549.501c1.205-.156 2.328-.737 3.351-1.76 3.268-3.268 3.041-6.749 1.737-8.914M14.58 10.887c-.156-.83.096-1.569.692-2.142L12.78 6.252c-.5-.504-1.378-.504-1.879 0-.178.18-.273.4-.329.63z"}),r.createElement("path",{d:"M17.812 10.04c-.218-.323-.539-.55-.88-.606a.81.81 0 0 0-.644.153c-.176.137-.713.553-.24 1.566l1.43 3.025a.539.539 0 1 1-.868.612L9.2 7.378a.986.986 0 1 0-1.395 1.395l4.401 4.403a.538.538 0 1 1-.762.762L7.046 9.54 5.802 8.295a.99.99 0 0 0-1.396 0 .98.98 0 0 0 0 1.394l1.241 1.241 4.402 4.403a.537.537 0 0 1 0 .761.535.535 0 0 1-.762 0L4.89 11.696a.99.99 0 0 0-1.399-.003.983.983 0 0 0 0 1.395l1.855 1.854 2.763 2.765a.538.538 0 0 1-.76.761l-2.765-2.764a.98.98 0 0 0-1.395 0 .99.99 0 0 0 0 1.395l5.32 5.32c3.371 3.372 6.64 4.977 10.49 1.126C21.74 20.8 22.271 18 20.62 14.982l-2.809-4.942z"}))))};var w;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(null,arguments)}const L=function(e){return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:33,height:33},e),w||(w=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"m29.58 17.1-3.854-6.78c-.365-.543-.876-.899-1.431-.989a1.5 1.5 0 0 0-1.16.281c-.42.327-.65.736-.7 1.207v.001l3.623 6.367c2.46 4.498 1.67 8.802-2.333 12.807-.265.265-.536.505-.81.728 1.973-.222 3.474-1.286 4.45-2.263 4.166-4.165 3.875-8.6 2.215-11.36zm-4.831.82-3.581-6.3c-.296-.439-.725-.742-1.183-.815a1.1 1.1 0 0 0-.89.213c-.647.502-.755 1.188-.33 2.098l1.825 3.858a.6.6 0 0 1-.197.747.596.596 0 0 1-.77-.067L10.178 8.21c-.508-.506-1.393-.506-1.901 0a1.34 1.34 0 0 0-.393.95c0 .36.139.698.393.95v.001l5.61 5.61a.599.599 0 1 1-.848.847l-5.606-5.606q-.002 0-.003-.002L5.848 9.375a1.35 1.35 0 0 0-1.902 0 1.35 1.35 0 0 0 0 1.901l1.582 1.582 5.61 5.61a.6.6 0 0 1-.848.848l-5.61-5.61c-.51-.508-1.393-.508-1.9 0a1.33 1.33 0 0 0-.394.95c0 .36.139.697.393.952l2.363 2.362q.003.002.002.003l3.52 3.52a.6.6 0 0 1-.848.847l-3.522-3.523h-.001a1.34 1.34 0 0 0-.95-.393 1.345 1.345 0 0 0-.949 2.295l6.779 6.78c3.715 3.713 9.327 5.598 13.49 1.434 3.527-3.528 4.21-7.13 2.086-11.015zM11.817 7.727c.06-.328.213-.64.466-.893.64-.64 1.755-.64 2.396 0l3.232 3.232c-.82.783-1.09 1.833-.764 2.992zM13.285.48l-1.916.881 2.37 2.837zM21.719 1.361 19.79.501l-.44 3.697zM16.502 3.298 15.481 0h2.043z"}))))};var C={S:r.createElement(i,{"aria-label":"clap"}),M:r.createElement(d,{"aria-label":"clap"}),L:r.createElement(f,{"aria-label":"clap"})},M={S:r.createElement(b,{"aria-label":"clap"}),M:r.createElement(y,{"aria-label":"clap"}),L:r.createElement(L,{"aria-label":"clap"})},A=t(80296),S=t(67900),R=t(57005),z=t(61333),N=!1,T=function(e){var n=e.isFilled,t=void 0!==n&&n,a=e.isDisabled,l=void 0!==a&&a,c=e.isLoading,i=void 0!==c&&c,s=e.scale,u=void 0===s?"L":s,d=e.onClickAndHold,m=e.buttonColor,p=void 0===m?"DARKER":m,f=e.testId,v=(0,o.l)(),g=function(e){var n=e.scale;return e.filled?M[n]:C[n]}({filled:t||l||i,scale:u}),h=(0,r.useMemo)((function(){return function(e){var n=e.buttonColor,t=e.isDisabled,a=e.isLoading;return function(e){var r=e.baseColor.fill,l="LIGHTER"===n?r.darker:r.lighter,o="LIGHTER"===n?r.lighter:r.normal;return{border:0,cursor:a?"progress":t?"not-allowed":"pointer",fill:o,":focus":{fill:t||a?o:l},":hover":{fill:t||a?o:l},opacity:t||a?.25:void 0,outline:0,padding:0,userSelect:"none","> svg":{pointerEvents:"none"},":active":{borderStyle:"none"},WebkitUserSelect:"none"}}}({buttonColor:p,isDisabled:l,isLoading:i})}),[p,l,i]),b=function(e){var n=e.callback,t=e.ms,a=void 0===t?300:t,l=e.callImmediately,o=void 0===l||l,c=(0,r.useState)(!1),i=(0,A.A)(c,2),s=i[0],u=i[1];(0,S.$)(n,s?a:null);var d=(0,r.useCallback)((function(e){"touchstart"===e.type&&(N=!0),("mousedown"!==e.type||!N&&function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.userAgent;return 0===e.button&&!((0,z.cX)(n)&&e.ctrlKey)}(e))&&(o&&n(),u(!0))}),[n,o]),m=(0,r.useCallback)((function(){u(!1)}),[]);return(0,R.E)((function(){if(s)return document.addEventListener("mouseup",m),function(){return document.removeEventListener("mouseup",m)}}),[s]),{onMouseDown:d,onTouchStart:d,onTouchEnd:m}}({callback:null!=d?d:function(){},ms:200}),E=b.onMouseDown,x=b.onTouchStart,y=b.onTouchEnd;return!d||l||i?r.createElement("div",{className:v(h)},g):r.createElement("button",{className:v(h),onMouseDown:E,onTouchStart:x,onTouchEnd:y,"data-testid":f},g)},D=function(e){var n=e.buttonColor,t=e.disableReason,a=e.isFilled,o=e.isLoading,c=void 0!==o&&o,i=e.onClickAndHold,s=e.scale,u=e.shouldHideClapsText,d=e.testId,m=!!t;return c||!m&&!u?r.createElement(T,{buttonColor:n,isFilled:a,isLoading:c,onClickAndHold:i,scale:s,testId:d}):r.createElement(l.G,{tooltipText:t||"Clap",targetDistance:15},r.createElement(T,{buttonColor:n,isDisabled:m,isFilled:a,isLoading:c,onClickAndHold:i,scale:s,testId:d}))}},22213:(e,n,t)=>{t.d(n,{R:()=>o});var a=t(96540),r=t(52290),l=t(78693),o=function(e){var n=e.verticalClapsText,t=e.children;return a.createElement(r.a,{display:"flex",alignItems:"center",flexDirection:n?"column":"row",zIndex:l.Ay.elevatedLink},t)}},32318:(e,n,t)=>{t.d(n,{q:()=>p});var a=t(55127),r=t.n(a),l=t(96540),o=t(62262),c=t(86527),i=t(36557),s=t(44402),u=t(27715),d={cursor:"progress"},m=function(e){return function(n){return{textAlign:"left",":hover":{color:"LIGHTER"===e?n.colorTokens.foreground.neutral.primary.hover:n.colorTokens.foreground.neutral.secondary.base}}}},p=function(e){var n=e.showVoters,t=e.shouldShowResponsiveLabelText,a=e.shouldHideClapsText,p=e.hasLabel,f=e.clapCount,v=e.showFullNumber,g=e.countColor,h=e.countScale,b=void 0===h?"M":h,E=e.isLoading,x=void 0!==E&&E,y=(0,s.l)(),w=v?(0,u.fw)(f):(0,u.Ct)(f),k=p&&!a?" ".concat(r()("clap",f)):"";return g||(g=t||p||a?"DARKER":"LIGHTER"),l.createElement(i.kZ,{color:g,scale:b},x?l.createElement("span",{className:y(d)},"--"):n?l.createElement(c.N,{onClick:n,rules:m(g)},w,t?l.createElement(o.F,null,k):k):w)}},69650:(e,n,t)=>{t.d(n,{u:()=>v});var a=t(64467),r=t(96540),l=t(37661),o=t(44402),c=t(15578),i={"0%":{transform:"matrix(0.97, 0, 0, 1, 0, 12)",opacity:"0"},"20%":{transform:"matrix(0.99, 0, 0, 1, 0, 2)",opacity:".7"},"40%":{transform:"matrix(1, 0, 0, 1, 0, -1)",opacity:"1"},"70%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"},"100%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"}},s={"0%":{opacity:"1",transform:"translateY(0px)"},"10%":{opacity:"1",transform:"translateY(-3px)"},"100%":{opacity:"0",transform:"translateY(-50px)"}},u="400ms ease-out 500ms",d={"0%":{transform:"scale(1)"},"15%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},m="500ms",p=function(e){return function(n){return(0,a.A)({backgroundColor:n.colorTokens.background.neutral.quaternary.base,bottom:"39px",color:n.backgroundColor,borderRadius:"50%",fontSize:"15px",height:"35px",left:"-4px",lineHeight:"35px",position:"absolute",textAlign:"center",width:"35px",animation:"".concat(e," 400ms ease-out")},(0,c.Oe)("reduce"),{animationDuration:"0.1ms !important"})}},f=function(e,n){e&&(e.style.animation=n,e.scrollTop)};function v(e){var n=e.clappedAt,t=e.count,a=e.onFloatEnd,c=(0,o.l)(),v=(0,r.useRef)(n),g=(0,r.useRef)({enter:"",exit:"",pop:""}),h=(0,r.useRef)(null),b=(0,r.useCallback)((function(e){var n=g.current;e.animationName===n.enter||e.animationName===n.pop?f(h.current,"".concat(n.exit," ").concat(u)):e.animationName===n.exit&&(h.current&&(h.current.style.opacity="0"),a())}),[a]);return(0,r.useEffect)((function(){v.current!==n&&(f(h.current,""),f(h.current,"".concat(g.current.pop," ").concat(m)),v.current=n)}),[n]),r.createElement(l.w,{keyframes:{enter:i,exit:s,pop:d}},(function(e){return g.current=e,r.createElement("div",{ref:h,className:c([p(e.enter)]),onAnimationEnd:b},"+".concat(t))}))}},12600:(e,n,t)=>{t.d(n,{O:()=>l});var a=t(96540),r=t(44402),l=function(e){var n=e.children,t=e.buttonStyle,l=e.hasClaps,o=(0,r.l)(),c=function(e){return"SUBTLE_MARGIN"===e?"0px":"8px"}(t);return a.createElement("div",{className:"pw-multi-vote-icon ".concat(o((function(){return{position:"relative",marginRight:l?"4px":"0px",marginLeft:{xs:c,sm:c,md:void 0,lg:void 0,xl:void 0},WebkitUserSelect:"none"}})))},n)}},72541:(e,n,t)=>{t.d(n,{T:()=>o});var a=t(96540),r=t(80182),l=t(52290),o=function(e){var n=e.children,t=e.buttonStyle,o={marginTop:r.Ve[t]},c={marginRight:"SUBTLE_MARGIN"===t?"0px":"16px",marginTop:"0px"};return a.createElement(l.a,{xs:c,sm:c,md:o,lg:o,xl:o,playwrightClassName:"pw-multi-vote-count"},n)}},11828:(e,n,t)=>{t.d(n,{s:()=>u});var a=t(64467),r=t(96540),l=t(37661),o=t(44402),c=t(15578),i={"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},s=function(e){return(0,a.A)({animation:"".concat(e," 500ms 1")},(0,c.Oe)("reduce"),{animationDuration:"0.1ms"})};function u(e){var n=e.isPopping,t=void 0!==n&&n,a=e.onPopEnd,c=e.children,u=(0,o.l)();return r.createElement(l.w,{keyframes:{popAnimation:i}},(function(e){var n=e.popAnimation;return r.createElement("div",{className:t?u(s(n)):"",onAnimationEnd:a},c)}))}},1037:(e,n,t)=>{t.d(n,{X:()=>d});var a=t(55127),r=t.n(a),l=t(96540),o=t(3005),c=t(52290),i=t(99731),s=t(56942),u=function(e){var n=e.isVisible,t=e.hide,a=e.users,r=e.fetchMore,u=e.title,d=e.showMoreLabel,m=e.loading;return l.createElement(o.l,{isVisible:n,hide:t,withAnimation:!0},l.createElement(c.a,{maxWidth:"550px",sm:{paddingTop:"0"},paddingTop:"88px"},l.createElement(c.a,{display:"flex",flexDirection:"column",marginBottom:"24px",textAlign:"center"},l.createElement(s.DZ,{scale:"S"},u)),a,r&&l.createElement(c.a,{display:"flex",flexDirection:"column",margin:"24px",alignItems:"center"},l.createElement(i.$n,{buttonStyle:"SOCIAL",size:"SMALL",onClick:r,disabled:m},d))))},d=function(e){var n=e.isVisible,t=e.hide,a=e.voters,o=e.fetchMore,c=e.voterCount,i=e.title,s=e.clapCount,d=e.loading;return l.createElement(u,{isVisible:n,hide:t,fetchMore:o,users:a,title:"".concat(s," ").concat(r()("clap",s)," from ").concat(c," ").concat(1===c?"person":"people",' for "\n  ').concat(i,'"'),showMoreLabel:"Show more claps",loading:d})}},22541:(e,n,t)=>{t.d(n,{_:()=>m});var a,r=t(96540),l=t(26061),o=t(39);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(null,arguments)}const i=function(e){return r.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:15,height:15},e),a||(a=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M7.944.996h-.89L7.5 2.914zM10.09 1.33l-.836-.304-.238 1.955zM5.729 1.038l-.835.305 1.074 1.65zM5.632 11.572 4.025 9.964c-1.688-1.688-2.76-2.463-2.262-2.96.248-.25.618-.305.924 0 .458.459 1.545 1.642 1.545 1.642a.7.7 0 0 0 .335.205c.169.043.365-.064.51-.205.132-.129.058-.47-.07-.601-.006-.006-1.779-1.765-2.065-2.053-.288-.287-.39-.782-.083-1.088.294-.293.639-.147.898.113.303.302 2.107 2.158 2.107 2.158a.33.33 0 0 0 .238.101.42.42 0 0 0 .256-.122c.132-.128.198-.362.07-.493 0 0-1.043-1.093-1.42-1.471-.558-.558-.606-.953-.358-1.201.346-.347.82-.234 1.449.486l2.8 2.942-.586-1.453s-.368-.976 0-1.172c.367-.197.74.326 1.005.72l1.365 2.619c.786 1.284.535 2.96-.572 4.051-1.22 1.222-3.183.685-4.48-.61z"}),r.createElement("path",{d:"M11.374 4.727c-.265-.394-.7-.402-.98-.183-.189.145-.163.473-.151.7l1.179 2.066c.91 1.487 1.225 2.707.186 4.102.314-.143.408-.274.583-.492.645-.801 1.05-2.473.385-3.878l-.027-.056z"}))))};var s=function(e){return{position:"relative",bottom:"12px",borderRadius:"10px",color:e.backgroundColor,fill:e.backgroundColor,background:e.colorTokens.background.accent.primary.base,textAlign:"center"}},u={left:"20px",padding:"0 6px"},d={left:"24px",padding:"0 2px"},m=function(e){var n=e.clapCount,t=(0,o.Z)({name:"detail",color:"DARKER",scale:"S"}),a=n?[t,s,u]:[s,d];return r.createElement(l.A,null,(function(e){return r.createElement("span",{className:e(a)},n?"+".concat(n):r.createElement(i,null))}))}},80182:(e,n,t)=>{t.d(n,{Ve:()=>o,et:()=>r,gr:()=>a,vP:()=>c});var a=500,r=50,l={SUBTLE:"S",SUBTLE_MARGIN:"S",SUBTLE_PADDED:"M"},o={SUBTLE:"5px",SUBTLE_MARGIN:"0px",SUBTLE_PADDED:"0px"},c=function(e,n){return{alwaysShowClapsLabel:n,hasClapsLabel:n,buttonScale:l[e]}}},80074:(e,n,t)=>{t.d(n,{s:()=>c});var a=t(45458),r=t(80296),l=t(96540),o=t(80182),c=function(e){var n=e.onIncrementClaps,t=e.onSubmitClapsAccumulated,c=(0,l.useRef)(),i=(0,l.useState)(0),s=(0,r.A)(i,2),u=s[0],d=s[1],m=(0,l.useState)([]),p=(0,r.A)(m,2),f=p[0],v=p[1],g=(0,l.useState)(!1),h=(0,r.A)(g,2),b=h[0],E=h[1],x=(0,l.useState)(!1),y=(0,r.A)(x,2),w=y[0],k=y[1],L=(0,l.useState)(0),C=(0,r.A)(L,2),M=C[0],A=C[1],S=(0,l.useCallback)((function(){n()||d((function(e){return e+1}))}),[n]),R=(0,l.useCallback)((function(){v((function(e){for(var n=360*Math.random();-1!==e.indexOf(n);)n+=360;return[].concat((0,a.A)(e),[n])})),A(Date.now()),E(!0),k(!0),S()}),[S]),z=(0,l.useCallback)((function(){E(!1)}),[]),N=(0,l.useCallback)((function(){k(!1)}),[]),T=(0,l.useCallback)((function(e){v((function(n){return n.filter((function(n){return n!==e}))}))}),[]),D=(0,l.useCallback)((function(){var e=c.current;e&&clearTimeout(e)}),[]),O=(0,l.useCallback)((function(e){D(),c.current=0!==e?setTimeout((function(){t(e),d(0)}),o.gr):void 0}),[t]);return(0,l.useEffect)((function(){O(u)}),[u]),(0,l.useEffect)((function(){return function(){D()}}),[]),{isShowingViewerClapCount:b,isPopping:w,clappedAt:M,burstOffsets:f,clap:R,onFloatEnd:z,onPopEnd:N,removeBurst:T}}},62262:(e,n,t)=>{t.d(n,{F:()=>s,U:()=>u});var a=t(58168),r=t(80045),l=t(96540),o=t(52290),c=["xs","sm","children"],i=["xs","sm","children"],s=function(e){var n=e.xs,t=e.sm,i=e.children,s=(0,r.A)(e,c);return l.createElement(o.a,(0,a.A)({xs:{display:"none"},sm:{display:n?"inline-block":"none"},md:{display:n||t?"inline-block":"none"},lg:{display:"inline-block"},xl:{display:"inline-block"},tag:"span"},s),i)},u=function(e){var n=e.xs,t=e.sm,c=e.children,s=(0,r.A)(e,i);return l.createElement(o.a,(0,a.A)({xs:{display:"inline-block"},sm:{display:n?"none":"inline-block"},md:{display:n||t?"none":"inline-block"},lg:{display:"none"},xl:{display:"none"},tag:"span"},s),c)}},67900:(e,n,t)=>{t.d(n,{$:()=>r});var a=t(96540);function r(e,n){var t=a.useRef(e);function r(){t.current&&t.current()}a.useEffect((function(){t.current=e}),[e]),a.useEffect((function(){if(null!==n){var e=setInterval(r,n);return function(){clearInterval(e)}}}),[n])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/839.ca7937c2.chunk.js.map