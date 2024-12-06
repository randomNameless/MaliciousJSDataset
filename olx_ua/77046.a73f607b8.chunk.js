"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[77046],{477046:(e,t,n)=>{n.d(t,{R:()=>T});var i,r,a,o,s,c,l,d,u=n(371803),f=n(755580),p=n(592169),h=n(529032),b=n(2525),v=n(895225),m=(0,f.default)(b.Vm)(i||(r=["\n    padding: 0;\n    width: 100%;\n"],a||(a=r.slice(0)),i=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}})))),g=e=>{var{notifications:t}=e;return(0,v.jsx)(m,{"data-cy":"notification-hub-list",children:t.length>0&&t.map((e=>(0,v.jsx)(h.Z,{notification:e},e.id)))})},j=n(357310),x=f.default.div(o||(o=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    ",";\n"])),(e=>{var{theme:t}=e;return"\n        align-items: center;\n        height: 100vh;\n        width: 100vw;\n        justify-content: center;\n        display:flex;\n    "})),O=()=>(0,v.jsx)(x,{children:(0,v.jsx)(j.Z,{"data-cy":"notification-hub-loader","data-testid":"notification-hub-loader"})}),w=n(417654),y=n(580702);function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var k,z,C,D=f.default.div(s||(s=P(["\n    align-items: center;\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    margin: auto 0;\n    padding: 0 16px;\n"]))),M=(0,f.default)(w.ul)(c||(c=P(["\n    ",";\n"])),(e=>{var{theme:t}=e;return"\n        padding-top: ".concat(t.sizes[24],";\n        margin-top: ").concat(t.sizes[4],";\n        font-weight: ").concat(t.fontWeights[600],";\n        text-align: center;\n    ")})),_=(0,f.default)(w.FJ)(l||(l=P(["\n    ",";\n"])),(e=>{var{theme:t}=e;return"\n        padding: ".concat(t.sizes[24]," ").concat(t.sizes[12]," 0;\n        font-weight: ").concat(t.fontWeights[400],";\n        text-align: center;\n    ")})),S=f.default.img(d||(d=P(["\n    ",";\n"])),(e=>{var{theme:t}=e;return"\n        margin: ".concat(t.sizes[2]," auto;\n    ")})),I=()=>{var{state:{emptyNotificationValues:e}}=(0,y.m)();return(0,v.jsxs)(D,{children:[(0,v.jsx)(S,{"data-testid":"empty-notifications-page-image",src:e.icon,alt:"Missing notifications"}),(0,v.jsx)(M,{"data-testid":"empty-notifications-page-title",children:e.text}),(0,v.jsx)(_,{"data-testid":"empty-notifications-page-description",children:e.subText})]})},E=(0,f.default)(j.Z)(k||(k=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ",";\n"])),(e=>e.theme.sizes[56])),H=()=>(0,v.jsx)(E,{"data-testid":"next-page-loader",type:"dots",name:"",size:12}),L=n(597999);function U(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var N=f.default.div(z||(z=U(["\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    flex-flow: column;\n    height: 100%;\n"]))),A=f.default.div(C||(C=U(["\n    overflow-y: auto;\n    height: 500px;\n"]))),Z=u.forwardRef(((e,t)=>{var{isWindow:n,children:i}=e;return n?i:(0,v.jsx)(A,{ref:t,children:i})})),T=e=>{var t,{header:n,attachInfiniteScrollToWindow:i=!1}=e,r=(0,u.useRef)(null),{notifications:a,loading:o,loadNextPage:s,error:c}=(0,L.z)(),{showFirstPageLoader:l,showNextPageLoader:d}=(t=a)?o&&t.length>0?{showFirstPageLoader:!1,showNextPageLoader:!0}:{showFirstPageLoader:!1,showNextPageLoader:!1}:{showFirstPageLoader:!0,showNextPageLoader:!1},f=!!a&&0===a.length;return(0,p.M)(s,!f,o,i||null==r?void 0:r.current),(0,v.jsxs)(N,{"data-cy":"notification-hub-wrapper",children:[n,l&&(0,v.jsx)(O,{}),f&&(0,v.jsx)(I,{}),a&&a.length?(0,v.jsxs)(Z,{ref:r,isWindow:i,children:[(0,v.jsx)(g,{notifications:a}),d&&(0,v.jsx)(H,{})]}):null]})}},113359:(e,t,n)=>{var i,r,a,o=n(468570),s=n(301939),c=n(755580),l=n(473606),d=n(339202),u=n(895225),f=(0,c.default)(o.DialogBody)(i||(r=["\n    margin-top: 72px;\n"],a||(a=r.slice(0)),i=Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}}))));t.Z=e=>{var{onClose:t,text:n,date:i,id:r}=e,a=(0,l.Z)(i)?(0,d.Z)(i,"dd.MM.yyyy, HH:mm"):"";return(0,u.jsxs)(o.Dialog,{id:"details-modal-".concat(r),onDialogClose:t,children:[(0,u.jsx)(f,{children:(0,u.jsx)(s.P3,{variant:"bold",children:n})}),(0,u.jsx)(o.DialogFooter,{children:(0,u.jsx)(s.P4,{children:a})})]})}},492804:(e,t,n)=>{n.d(t,{q:()=>ae});var i,r,a=n(755580),o=n(301939),s=n(2525),c=n(727123),l=n(564484),d=n(473606),u=n(470693),f=n(670930),p=n(92460),h=n.n(p),b=n(66421),v=n.n(b),m=n(726960),g=n.n(m),j=n(967192),x=n.n(j),O=n(902293),w=n.n(O),y=n(223701),P=n.n(y),k=n(285399),z=n.n(k),C=n(622706),D=n.n(C),M={pl:h(),pt:g(),ro:v(),bg:x(),uk:w(),ru:z(),kk:D(),oz:P(),uz:P()},_=(e,t,n)=>{var{formatRelativeTime:i,formatDate:r,formatMessage:a}=t,o=new Date;return(0,d.Z)(e)?0===(0,u.Z)(e,o)?a({id:"common.relativeDateTime.justNow",defaultMessage:"Just now"}):(0,f.Z)(e,{locale:M[n],addSuffix:!0}):""},S=n(490845),I=n(251530),E=n(580702),H=n(152776),L=n(652343),U=n(895225);function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var A,Z,T,V,W,R,F,$=(0,a.default)(L.Popover)(i||(i=N(["\n    ","\n"])),(e=>{var{theme:t}=e;return"\n        padding: ".concat(t.space[0],";\n    ")})),q=(0,a.default)(s.Vm)(r||(r=N(["\n    padding: 0;\n    width: 200px;\n    box-shadow: 0 1px 4px 0 #00000029;\n"]))),B=e=>{var{menu:t}=e;return(0,U.jsx)(q,{id:"listContainer",children:t.map((e=>{var{name:t,icon:n,handler:i}=e;return(0,U.jsx)(s.HC,{prefixIcon:()=>n,onClick:e=>{e.stopPropagation(),e.preventDefault(),i()},dataAttributes:{testid:"popup-menu-item",cy:"h-notification-list-item-menu-item"},css:{padding:"0 8px",minHeight:"48px"},children:(0,U.jsx)(o.P3,{css:{padding:0},children:t})},t)}))})},K=e=>{var{popupMenu:t,handleClose:n,children:i,visible:r}=e;return(0,U.jsx)($,{appendTo:"parent",verticalOffset:-10,placement:"bottom-end",hideOnClick:!1,visible:r,dataAttributes:{testid:"popup-menu"},arrowComponent:()=>null,onClickOutside:n,content:()=>(0,U.jsx)(B,{menu:t}),children:i})};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=(0,a.default)(s.HC)(A||(A=Q(["\n    user-select: none; /* disable selection/Copy of UIWebView */\n    -webkit-user-select: none; /* disable selection/Copy of UIWebView */\n    -webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */\n    ","\n"])),(e=>{var{read:t,theme:n}=e;return"\n        transition: background-color 0.2s ".concat(n.transitionTimingFn,";\n        background-color: ").concat(t?n.colors.white:n.colors.$01_teal_bg_light+"80",";\n\n        &:hover {\n            background-color: ").concat(t?n.colors.$03_gray:n.colors.$01_teal_bg_light,"\n        };\n    ")})),ee=a.default.div(Z||(Z=Q(["\n    ",";\n"])),(e=>{var{theme:t}=e;return"\n        padding-left: ".concat(t.sizes[16],";\n    ")})),te=a.default.div(T||(T=Q(["\n    transform: rotate(90deg);\n    border-radius: 50%;\n    ",";\n"])),(e=>{var{theme:t,read:n,isMenuVisible:i}=e;return"\n        transition: background 0.2s ".concat(t.transitionTimingFn,";\n        padding: ").concat(t.sizes[8],";\n        margin-right: ").concat(t.sizes[16],";\n        &:hover {\n            background: ").concat(n?t.colors.$04_gray:t.colors.$02_teal_light,";\n        };\n        ").concat(i&&"background: ".concat(n?t.colors.$04_gray:t.colors.$02_teal_light),";\n    ")})),ne=(0,a.default)(o.P3)(W||(W=Q(["\n    ","\n    ","\n"])),(()=>(0,c.css)(V||(V=Q(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n    -webkit-box-orient: vertical;\n"])))),(e=>{var{theme:t,read:n}=e;return"\n        font-weight: ".concat(n?t.fontWeights[400]:t.fontWeights[800],";\n    ")})),ie=(0,a.default)(o.P5)(R||(R=Q(["\n    ","\n"])),(e=>{var{theme:t}=e;return"\n        font-size: ".concat(t.fontSizes[12],";\n        margin-top: ").concat(t.space[8],";\n    ")})),re=(0,a.default)(l.rU)(F||(F=Q(["\n    text-decoration: none;\n    user-select: none !important;\n    -webkit-touch-callout: none !important;\n    outline-offset: -1px;\n"]))),ae=e=>{var{notification:{id:t,type:n,text:i,date:r,url:a,read:o},onContextMenu:s,onClick:c,popupMenuProps:l}=e,d=(0,S.useIntl)(),{langISOCode:u}=(0,H.MG)(),{state:{notificationsIconMap:f}}=(0,E.m)(),{path:p,redirect:h}=(e=>{var t=window.location.origin;return e.startsWith("/")?{path:e,redirect:!1}:e.startsWith(t)?{path:e.replace(t,""),redirect:!1}:{path:e,redirect:!0}})(a);return(0,U.jsx)(re,{to:p,onClick:c,fullReload:h,children:(0,U.jsxs)(Y,{tabIndex:-1,dataAttributes:{state:o?"read":"unread",testid:"notification-hub-list-item",cy:"notification-hub-message"},read:o,prefixIcon:()=>(0,U.jsx)(ee,{"data-testid":"notification-hub-list-item-icon",children:null==f?void 0:f[n]}),suffixIcon:()=>(0,U.jsx)(K,J(J({},l),{},{children:(0,U.jsx)(te,{isMenuVisible:l.visible,"data-testid":"notification-hub-context-menu-button",read:o,onClick:e=>{e.preventDefault(),e.stopPropagation(),s()},children:(0,U.jsx)(I.default,{})})})),children:[(0,U.jsx)(ne,{read:o,"data-testid":"notification-hub-list-item-title",children:i}),(0,U.jsx)(ie,{"data-testid":"notification-hub-list-item-date",children:_(r,d,u)})]},t)})}},529032:(e,t,n)=>{n.d(t,{Z:()=>M});var i,r=n(371803),a=n(490845),o=n(755580),s=n(914469),c=n(764175),l=n(374224),d=n(424311),u=n(77290),f=n(447271),p=n(677181),h=n(152776),b=n(113359),v=n(492804),m=n(129424),g=n(468570),j=n(580702),x=n(895225);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,r)}var k,z,C=(0,m.ZP)({resolved:{},chunkName:()=>"NotificationDetails",isReady(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(61053).then(n.bind(n,362741)),requireAsync(e){var t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){var t=this.resolve(e);return n(t)},resolve:()=>362741},{resolveComponent:e=>e.NotificationDetails}),D=o.default.div(i||(k=["\n    position: relative;\n    width: 100%;\n"],z||(z=k.slice(0)),i=Object.freeze(Object.defineProperties(k,{raw:{value:Object.freeze(z)}})))),M=e=>{var{notification:t}=e,{actions:{updateState:n}}=(0,j.m)(),{trackEvent:i}=(0,f.rS)(),{formatMessage:o}=(0,a.useIntl)(),m=(0,d.lr)(),[O,y]=(0,r.useState)(t),[k,z]=(0,r.useState)(!1),{closeDialog:M,openDialog:_,isOpen:S}=(0,g.useDialogState)("details-modal-".concat(t.id)),{platform:I}=(0,h.MG)(),E=I===p.t4.DESKTOP;(0,r.useEffect)((()=>{O.id===t.id||y(t)}),[O.id,t]),(0,r.useEffect)((()=>{n((()=>({isDetailsOpen:S})))}),[S,n]);var H=(0,r.useCallback)((()=>{z(!k)}),[k]),L=(0,r.useCallback)((()=>{k&&z(!1)}),[k]),U=function(){var e,t=(e=function*(e){e!==O.read&&(y(w(w({},O),{},{read:e})),(yield m(O.id,e))||y(w(w({},O),{},{read:!e})))},function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){P(a,i,r,o,s,"next",e)}function s(e){P(a,i,r,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),N=(0,r.useMemo)((()=>[{name:o({id:"notificationHub.list.item.show",defaultMessage:"Show details"}),icon:(0,x.jsx)(l.default,{size:20}),handler:()=>{L(),_(),i(u.UO.event.notificationHubItemContextViewDetails),U(!0)}},{name:O.read?o({id:"notificationHub.list.item.markUnread",defaultMessage:"Mark as unread"}):o({id:"notificationHub.list.item.markRead",defaultMessage:"Mark as read"}),icon:(0,x.jsx)(c.default,{size:20}),handler:()=>{L(),i(O.read?u.UO.event.notificationHubItemContextViewMarkRead:u.UO.event.notificationHubItemContextViewMarkUnread),U(!O.read)}}]),[L,m,O.read]);return(0,x.jsxs)(D,{"data-cy":"h-notification-list-item",children:[(0,x.jsx)(v.q,{notification:O,onContextMenu:H,onClick:()=>{i(u.UO.event.notificationHubItemClick,{[u.UO.parameters.notificationsIds]:[t.trackingId]}),f.Xi.sendEvent(u.UO.event.notificationHubItemClick),U(!0)},popupMenuProps:{visible:k,popupMenu:N,handleClose:L}}),E&&S&&(0,x.jsx)(b.Z,{id:O.id,onClose:M,text:O.text,date:O.date}),!E&&(0,x.jsx)(s.O,{isVisible:S,onClose:M,closeButtonText:o({id:"common.close",defaultMessage:"Close"}),"data-testid":"notification-details-sheet","data-cy":"h-notification-sheet",children:(0,x.jsx)(C,{text:O.text,date:O.date})})]})}},564484:(e,t,n)=>{n.d(t,{Ew:()=>r.redirectPath,l_:()=>r.Redirect,rU:()=>i.r,uX:()=>r.redirect});var i=n(422223),r=n(534247)}}]);
//# sourceMappingURL=77046.a73f607b8.chunk.js.map