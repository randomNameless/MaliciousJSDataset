(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5581],{91296:function(e,t,r){var n=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,m=function(){return f.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return n;if(y(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var c=s.test(e);return c||a.test(e)?u(e.slice(2),c?2:8):o.test(e)?n:+e}e.exports=function(e,t,r){var n,i,o,s,a,u,c=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,c=t,s=e.apply(o,r)}function b(e){var r=e-u,n=e-c;return void 0===u||r>=t||r<0||f&&n>=o}function w(){var e,r,n,i=m();if(b(i))return x(i);a=setTimeout(w,(e=i-u,r=i-c,n=t-e,f?h(n,o-r):n))}function x(e){return(a=void 0,p&&n)?g(e):(n=i=void 0,s)}function O(){var e,r=m(),o=b(r);if(n=arguments,i=this,u=r,o){if(void 0===a)return c=e=u,a=setTimeout(w,t),l?g(e):s;if(f)return a=setTimeout(w,t),g(u)}return void 0===a&&(a=setTimeout(w,t)),s}return t=v(t)||0,y(r)&&(l=!!r.leading,o=(f="maxWait"in r)?d(v(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=u=i=a=void 0},O.flush=function(){return void 0===a?s:x(m())},O}},69590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,o){try{return function e(o,s){if(o===s)return!0;if(o&&s&&"object"==typeof o&&"object"==typeof s){var a,u,c,l;if(o.constructor!==s.constructor)return!1;if(Array.isArray(o)){if((a=o.length)!=s.length)return!1;for(u=a;0!=u--;)if(!e(o[u],s[u]))return!1;return!0}if(r&&o instanceof Map&&s instanceof Map){if(o.size!==s.size)return!1;for(l=o.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;for(l=o.entries();!(u=l.next()).done;)if(!e(u.value[1],s.get(u.value[0])))return!1;return!0}if(n&&o instanceof Set&&s instanceof Set){if(o.size!==s.size)return!1;for(l=o.entries();!(u=l.next()).done;)if(!s.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(s)){if((a=o.length)!=s.length)return!1;for(u=a;0!=u--;)if(o[u]!==s[u])return!1;return!0}if(o.constructor===RegExp)return o.source===s.source&&o.flags===s.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===s.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===s.toString();if((a=(c=Object.keys(o)).length)!==Object.keys(s).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(s,c[u]))return!1;if(t&&o instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!o.$$typeof)&&!e(o[c[u]],s[c[u]]))return!1;return!0}return o!=o&&s!=s}(e,o)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},95237:function(e,t,r){"use strict";r.d(t,{D:function(){return ev}});var n,i,o,s,a,u=r(67294),c=r(73935);function l(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){var t=l(e).Element;return e instanceof t||e instanceof Element}function p(e){var t=l(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function d(e){if("undefined"==typeof ShadowRoot)return!1;var t=l(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var h=Math.max,m=Math.min,y=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(v())}function b(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),i=1,o=1;t&&p(e)&&(i=e.offsetWidth>0&&y(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&y(n.height)/e.offsetHeight||1);var s=(f(e)?l(e):window).visualViewport,a=!g()&&r,u=(n.left+(a&&s?s.offsetLeft:0))/i,c=(n.top+(a&&s?s.offsetTop:0))/o,d=n.width/i,h=n.height/o;return{width:d,height:h,top:c,right:u+d,bottom:c+h,left:u,x:u,y:c}}function w(e){var t=l(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function R(e){return b(O(e)).left+w(e).scrollLeft}function E(e){return l(e).getComputedStyle(e)}function S(e){var t=E(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function j(e){var t=b(e),r=e.offsetWidth,n=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-n)&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function D(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||O(e)}function T(e,t){void 0===t&&(t=[]);var r,n=function e(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:p(t)&&S(t)?t:e(D(t))}(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),o=l(n),s=i?[o].concat(o.visualViewport||[],S(n)?n:[]):n,a=t.concat(s);return i?a:a.concat(T(D(s)))}function C(e){return p(e)&&"fixed"!==E(e).position?e.offsetParent:null}function k(e){for(var t=l(e),r=C(e);r&&["table","td","th"].indexOf(x(r))>=0&&"static"===E(r).position;)r=C(r);return r&&("html"===x(r)||"body"===x(r)&&"static"===E(r).position)?t:r||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&p(e)&&"fixed"===E(e).position)return null;var r=D(e);for(d(r)&&(r=r.host);p(r)&&0>["html","body"].indexOf(x(r));){var n=E(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var A="bottom",I="right",Q="left",P="auto",L=["top",A,I,Q],M="start",U="viewport",F="popper",B=L.reduce(function(e,t){return e.concat([t+"-"+M,t+"-end"])},[]),W=[].concat(L,[P]).reduce(function(e,t){return e.concat([t,t+"-"+M,t+"-end"])},[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],q={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var _={passive:!0};function N(e){return e.split("-")[0]}function z(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,r=e.reference,n=e.element,i=e.placement,o=i?N(i):null,s=i?z(i):null,a=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2;switch(o){case"top":t={x:a,y:r.y-n.height};break;case A:t={x:a,y:r.y+r.height};break;case I:t={x:r.x+r.width,y:u};break;case Q:t={x:r.x-n.width,y:u};break;default:t={x:r.x,y:r.y}}var c=o?$(o):null;if(null!=c){var l="y"===c?"height":"width";switch(s){case M:t[c]=t[c]-(r[l]/2-n[l]/2);break;case"end":t[c]=t[c]+(r[l]/2-n[l]/2)}}return t}var X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y(e){var t,r,n,i,o,s,a,u=e.popper,c=e.popperRect,f=e.placement,p=e.variation,d=e.offsets,h=e.position,m=e.gpuAcceleration,v=e.adaptive,g=e.roundOffsets,b=e.isFixed,w=d.x,x=void 0===w?0:w,R=d.y,S=void 0===R?0:R,j="function"==typeof g?g({x:x,y:S}):{x:x,y:S};x=j.x,S=j.y;var D=d.hasOwnProperty("x"),T=d.hasOwnProperty("y"),C=Q,P="top",L=window;if(v){var M=k(u),U="clientHeight",F="clientWidth";M===l(u)&&"static"!==E(M=O(u)).position&&"absolute"===h&&(U="scrollHeight",F="scrollWidth"),("top"===f||(f===Q||f===I)&&"end"===p)&&(P=A,S-=(b&&M===L&&L.visualViewport?L.visualViewport.height:M[U])-c.height,S*=m?1:-1),(f===Q||("top"===f||f===A)&&"end"===p)&&(C=I,x-=(b&&M===L&&L.visualViewport?L.visualViewport.width:M[F])-c.width,x*=m?1:-1)}var B=Object.assign({position:h},v&&X),W=!0===g?(t={x:x,y:S},r=l(u),n=t.x,i=t.y,{x:y(n*(o=r.devicePixelRatio||1))/o||0,y:y(i*o)/o||0}):{x:x,y:S};return(x=W.x,S=W.y,m)?Object.assign({},B,((a={})[P]=T?"0":"",a[C]=D?"0":"",a.transform=1>=(L.devicePixelRatio||1)?"translate("+x+"px, "+S+"px)":"translate3d("+x+"px, "+S+"px, 0)",a)):Object.assign({},B,((s={})[P]=T?S+"px":"",s[C]=D?x+"px":"",s.transform="",s))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,function(e){return Z[e]})}var J={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return J[e]})}function et(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&d(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function er(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function en(e,t,r){var n,i,o,s,a,u,c,p,d,m;return t===U?er(function(e,t){var r=l(e),n=O(e),i=r.visualViewport,o=n.clientWidth,s=n.clientHeight,a=0,u=0;if(i){o=i.width,s=i.height;var c=g();(c||!c&&"fixed"===t)&&(a=i.offsetLeft,u=i.offsetTop)}return{width:o,height:s,x:a+R(e),y:u}}(e,r)):f(t)?((n=b(t,!1,"fixed"===r)).top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n):er((i=O(e),s=O(i),a=w(i),u=null==(o=i.ownerDocument)?void 0:o.body,c=h(s.scrollWidth,s.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),p=h(s.scrollHeight,s.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),d=-a.scrollLeft+R(i),m=-a.scrollTop,"rtl"===E(u||s).direction&&(d+=h(s.clientWidth,u?u.clientWidth:0)-c),{width:c,height:p,x:d,y:m}))}function ei(){return{top:0,right:0,bottom:0,left:0}}function eo(e){return Object.assign({},ei(),e)}function es(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}function ea(e,t){void 0===t&&(t={});var r,n,i,o,s,a,u,c,l=t,d=l.placement,y=void 0===d?e.placement:d,v=l.strategy,g=void 0===v?e.strategy:v,w=l.boundary,R=l.rootBoundary,S=l.elementContext,j=void 0===S?F:S,C=l.altBoundary,Q=l.padding,P=void 0===Q?0:Q,M=eo("number"!=typeof P?P:es(P,L)),B=e.rects.popper,W=e.elements[void 0!==C&&C?j===F?"reference":F:j],V=(r=f(W)?W:W.contextElement||O(e.elements.popper),n=void 0===w?"clippingParents":w,i=void 0===R?U:R,u=(a=[].concat("clippingParents"===n?(o=T(D(r)),f(s=["absolute","fixed"].indexOf(E(r).position)>=0&&p(r)?k(r):r)?o.filter(function(e){return f(e)&&et(e,s)&&"body"!==x(e)}):[]):[].concat(n),[i]))[0],(c=a.reduce(function(e,t){var n=en(r,t,g);return e.top=h(n.top,e.top),e.right=m(n.right,e.right),e.bottom=m(n.bottom,e.bottom),e.left=h(n.left,e.left),e},en(r,u,g))).width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c),q=b(e.elements.reference),H=K({reference:q,element:B,strategy:"absolute",placement:y}),_=er(Object.assign({},B,H)),N=j===F?_:q,z={top:V.top-N.top+M.top,bottom:N.bottom-V.bottom+M.bottom,left:V.left-N.left+M.left,right:N.right-V.right+M.right},$=e.modifiersData.offset;if(j===F&&$){var X=$[y];Object.keys(z).forEach(function(e){var t=[I,A].indexOf(e)>=0?1:-1,r=["top",A].indexOf(e)>=0?"y":"x";z[e]+=X[r]*t})}return z}function eu(e,t,r){return h(e,m(t,r))}function ec(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function el(e){return["top",I,A,Q].some(function(t){return e[t]>=0})}var ef=(o=void 0===(i=(n={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=void 0===i||i,s=n.resize,a=void 0===s||s,u=l(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(e){e.addEventListener("scroll",r.update,_)}),a&&u.addEventListener("resize",r.update,_),function(){o&&c.forEach(function(e){e.removeEventListener("scroll",r.update,_)}),a&&u.removeEventListener("resize",r.update,_)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=r.adaptive,o=r.roundOffsets,s=void 0===o||o,a={placement:N(t.placement),variation:z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===n||n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Y(Object.assign({},a,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===i||i,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Y(Object.assign({},a,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e];p(i)&&x(i)&&(Object.assign(i.style,r),Object.keys(n).forEach(function(e){var t=n[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce(function(e,t){return e[t]="",e},{});p(n)&&x(n)&&(Object.assign(n.style,o),Object.keys(i).forEach(function(e){n.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,i=r.offset,o=void 0===i?[0,0]:i,s=W.reduce(function(e,r){var n,i,s,a,u,c;return e[r]=(n=t.rects,s=[Q,"top"].indexOf(i=N(r))>=0?-1:1,u=(a="function"==typeof o?o(Object.assign({},n,{placement:r})):o)[0],c=a[1],u=u||0,c=(c||0)*s,[Q,I].indexOf(i)>=0?{x:c,y:u}:{x:u,y:c}),e},{}),a=s[t.placement],u=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,o=void 0===i||i,s=r.altAxis,a=void 0===s||s,u=r.fallbackPlacements,c=r.padding,l=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,y=t.options.placement,v=N(y)===y,g=u||(v||!h?[G(y)]:function(e){if(N(e)===P)return[];var t=G(e);return[ee(e),t,ee(t)]}(y)),b=[y].concat(g).reduce(function(e,r){var n,i,o,s,a,u,p,d,y,v,g,b;return e.concat(N(r)===P?(i=(n={placement:r,boundary:l,rootBoundary:f,padding:c,flipVariations:h,allowedAutoPlacements:m}).placement,o=n.boundary,s=n.rootBoundary,a=n.padding,u=n.flipVariations,d=void 0===(p=n.allowedAutoPlacements)?W:p,0===(g=(v=(y=z(i))?u?B:B.filter(function(e){return z(e)===y}):L).filter(function(e){return d.indexOf(e)>=0})).length&&(g=v),Object.keys(b=g.reduce(function(e,r){return e[r]=ea(t,{placement:r,boundary:o,rootBoundary:s,padding:a})[N(r)],e},{})).sort(function(e,t){return b[e]-b[t]})):r)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,E=b[0],S=0;S<b.length;S++){var j=b[S],D=N(j),T=z(j)===M,C=["top",A].indexOf(D)>=0,k=C?"width":"height",U=ea(t,{placement:j,boundary:l,rootBoundary:f,altBoundary:p,padding:c}),F=C?T?I:Q:T?A:"top";w[k]>x[k]&&(F=G(F));var V=G(F),q=[];if(o&&q.push(U[D]<=0),a&&q.push(U[F]<=0,U[V]<=0),q.every(function(e){return e})){E=j,R=!1;break}O.set(j,q)}if(R)for(var H=h?3:1,_=function(e){var t=b.find(function(t){var r=O.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},$=H;$>0&&"break"!==_($);$--);t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,o=r.altAxis,s=r.boundary,a=r.rootBoundary,u=r.altBoundary,c=r.padding,l=r.tether,f=void 0===l||l,p=r.tetherOffset,d=void 0===p?0:p,y=ea(t,{boundary:s,rootBoundary:a,padding:c,altBoundary:u}),v=N(t.placement),g=z(t.placement),b=!g,w=$(v),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,R=t.rects.reference,E=t.rects.popper,S="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,D="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(O){if(void 0===i||i){var P,L="y"===w?"top":Q,U="y"===w?A:I,F="y"===w?"height":"width",B=O[w],W=B+y[L],V=B-y[U],q=f?-E[F]/2:0,H=g===M?R[F]:E[F],_=g===M?-E[F]:-R[F],K=t.elements.arrow,X=f&&K?j(K):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ei(),Z=Y[L],G=Y[U],J=eu(0,R[F],X[F]),ee=b?R[F]/2-q-J-Z-D.mainAxis:H-J-Z-D.mainAxis,et=b?-R[F]/2+q+J+G+D.mainAxis:_+J+G+D.mainAxis,er=t.elements.arrow&&k(t.elements.arrow),en=er?"y"===w?er.clientTop||0:er.clientLeft||0:0,eo=null!=(P=null==T?void 0:T[w])?P:0,es=eu(f?m(W,B+ee-eo-en):W,B,f?h(V,B+et-eo):V);O[w]=es,C[w]=es-B}if(void 0!==o&&o){var ec,el,ef="x"===w?"top":Q,ep="x"===w?A:I,ed=O[x],eh="y"===x?"height":"width",em=ed+y[ef],ey=ed-y[ep],ev=-1!==["top",Q].indexOf(v),eg=null!=(el=null==T?void 0:T[x])?el:0,eb=ev?em:ed-R[eh]-E[eh]-eg+D.altAxis,ew=ev?ed+R[eh]+E[eh]-eg-D.altAxis:ey,ex=f&&ev?(ec=eu(eb,ed,ew))>ew?ew:ec:eu(f?eb:em,ed,f?ew:ey);O[x]=ex,C[x]=ex-ed}t.modifiersData[n]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r,n=e.state,i=e.name,o=e.options,s=n.elements.arrow,a=n.modifiersData.popperOffsets,u=N(n.placement),c=$(u),l=[Q,I].indexOf(u)>=0?"height":"width";if(s&&a){var f=eo("number"!=typeof(t="function"==typeof(t=o.padding)?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:es(t,L)),p=j(s),d="y"===c?"top":Q,h="y"===c?A:I,m=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],y=a[c]-n.rects.reference[c],v=k(s),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,b=f[d],w=g-p[l]-f[h],x=g/2-p[l]/2+(m/2-y/2),O=eu(b,x,w);n.modifiersData[i]=((r={})[c]=O,r.centerOffset=O-x,r)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&et(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ea(t,{elementContext:"reference"}),a=ea(t,{altBoundary:!0}),u=ec(s,n),c=ec(a,i,o),l=el(u),f=el(c);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}}]}).defaultModifiers)?[]:i,a=void 0===(s=n.defaultOptions)?q:s,function(e,t,r){void 0===r&&(r=a);var n,i,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},q,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],c=!1,d={state:s,setOptions:function(r){var n,i,c,l,p,m="function"==typeof r?r(s.options):r;h(),s.options=Object.assign({},a,s.options,m),s.scrollParents={reference:f(e)?T(e):e.contextElement?T(e.contextElement):[],popper:T(t)};var y=(i=Object.keys(n=[].concat(o,s.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return n[e]}),c=new Map,l=new Set,p=[],i.forEach(function(e){c.set(e.name,e)}),i.forEach(function(e){l.has(e.name)||function e(t){l.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!l.has(t)){var r=c.get(t);r&&e(r)}}),p.push(t)}(e)}),V.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return s.orderedModifiers=y.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=e.effect;if("function"==typeof n){var i=n({state:s,name:t,instance:d,options:void 0===r?{}:r});u.push(i||function(){})}}),d.update()},forceUpdate:function(){if(!c){var e,t,r,n,i,o,a,u,f,h,m,v,g=s.elements,E=g.reference,D=g.popper;if(H(E,D)){s.rects={reference:(t=k(D),r="fixed"===s.options.strategy,n=p(t),u=p(t)&&(o=y((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,a=y(i.height)/t.offsetHeight||1,1!==o||1!==a),f=O(t),h=b(E,u,r),m={scrollLeft:0,scrollTop:0},v={x:0,y:0},(n||!n&&!r)&&(("body"!==x(t)||S(f))&&(m=(e=t)!==l(e)&&p(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:w(e)),p(t)?(v=b(t,!0),v.x+=t.clientLeft,v.y+=t.clientTop):f&&(v.x=R(f))),{x:h.left+m.scrollLeft-v.x,y:h.top+m.scrollTop-v.y,width:h.width,height:h.height}),popper:j(D)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var T=0;T<s.orderedModifiers.length;T++){if(!0===s.reset){s.reset=!1,T=-1;continue}var C=s.orderedModifiers[T],A=C.fn,I=C.options,Q=void 0===I?{}:I,P=C.name;"function"==typeof A&&(s=A({state:s,options:Q,name:P,instance:d})||s)}}}},update:(n=function(){return new Promise(function(e){d.forceUpdate(),e(s)})},function(){return i||(i=new Promise(function(e){Promise.resolve().then(function(){i=void 0,e(n())})})),i}),destroy:function(){h(),c=!0}};if(!H(e,t))return d;function h(){u.forEach(function(e){return e()}),u=[]}return d.setOptions(r).then(function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)}),d}),ep=r(69590),ed=r.n(ep),eh=function(e){return e.reduce(function(e,t){var r=t[0],n=t[1];return e[r]=n,e},{})},em="undefined"!=typeof window&&window.document&&window.document.createElement?u.useLayoutEffect:u.useEffect,ey=[],ev=function(e,t,r){void 0===r&&(r={});var n=u.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||ey},o=u.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=o[0],a=o[1],l=u.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c.flushSync(function(){a({styles:eh(r.map(function(e){return[e,t.styles[e]||{}]})),attributes:eh(r.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),f=u.useMemo(function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return ed()(n.current,e)?n.current||e:(n.current=e,e)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),p=u.useRef();return em(function(){p.current&&p.current.setOptions(f)},[f]),em(function(){if(null!=e&&null!=t){var n=(r.createPopper||ef)(e,t,f);return p.current=n,function(){n.destroy(),p.current=null}}},[e,t,r.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}},53250:function(e,t,r){"use strict";var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,a=n.useLayoutEffect,u=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,l=n[1];return a(function(){i.value=r,i.getSnapshot=t,c(i)&&l({inst:i})},[e,r,t]),s(function(){return c(i)&&l({inst:i}),e(function(){c(i)&&l({inst:i})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},61688:function(e,t,r){"use strict";e.exports=r(53250)},67848:function(e,t,r){"use strict";let n;r.d(t,{a:function(){return C}});var i=r(32161),o=r(30081),s=r(15761),a=r(33989),u=r(72379);class c extends a.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),l(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return f(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return f(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,i.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let o=this.hasListeners();o&&p(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),o&&(this.currentQuery!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let s=this.computeRefetchInterval();o&&(this.currentQuery!==n||this.options.enabled!==r.enabled||s!==this.currentRefetchInterval)&&this.updateRefetchInterval(s)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return!e.keepPreviousData&&(void 0!==e.placeholderData?r.isPlaceholderData:this.getCurrentResult()!==r)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(i.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),i.sk||this.currentResult.isStale||!(0,i.PN)(this.options.staleTime))return;let e=(0,i.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!i.sk&&!1!==this.options.enabled&&(0,i.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||s.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let n=this.currentQuery,o=this.options,s=this.currentResult,a=this.currentResultState,c=this.currentResultOptions,f=e!==n,h=f?e.state:this.currentQueryInitialState,m=f?this.currentResult:this.previousQueryResult,{state:y}=e,{dataUpdatedAt:v,error:g,errorUpdatedAt:b,fetchStatus:w,status:x}=y,O=!1,R=!1;if(t._optimisticResults){let r=this.hasListeners(),i=!r&&l(e,t),s=r&&p(e,n,t,o);(i||s)&&(w=(0,u.Kw)(e.options.networkMode)?"fetching":"paused",v||(x="loading")),"isRestoring"===t._optimisticResults&&(w="idle")}if(t.keepPreviousData&&!y.dataUpdatedAt&&null!=m&&m.isSuccess&&"error"!==x)r=m.data,v=m.dataUpdatedAt,x=m.status,O=!0;else if(t.select&&void 0!==y.data){if(s&&y.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(y.data),r=(0,i.oE)(null==s?void 0:s.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=y.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===x){let e;if(null!=s&&s.isPlaceholderData&&t.placeholderData===(null==c?void 0:c.placeholderData))e=s.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(x="success",r=(0,i.oE)(null==s?void 0:s.data,e,t),R=!0)}this.selectError&&(g=this.selectError,r=this.selectResult,b=Date.now(),x="error");let E="fetching"===w,S="loading"===x,j="error"===x;return{status:x,fetchStatus:w,isLoading:S,isSuccess:"success"===x,isError:j,isInitialLoading:S&&E,data:r,dataUpdatedAt:v,error:g,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>h.dataUpdateCount||y.errorUpdateCount>h.errorUpdateCount,isFetching:E,isRefetching:E&&!S,isLoadingError:j&&0===y.dataUpdatedAt,isPaused:"paused"===w,isPlaceholderData:R,isPreviousData:O,isRefetchError:j&&0!==y.dataUpdatedAt,isStale:d(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,i.VS)(r,t))return;this.currentResult=r;let n={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let n=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&n.add("error"),Object.keys(this.currentResult).some(e=>this.currentResult[e]!==t[e]&&n.has(e))})()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,u.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){o.V.batch(()=>{var t,r,n,i,o,s,a,u;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(i=this.options).onSettled)||n.call(i,this.currentResult.data,null)):e.onError&&(null==(o=(s=this.options).onError)||o.call(s,this.currentResult.error),null==(a=(u=this.options).onSettled)||a.call(u,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function l(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&f(e,t,t.refetchOnMount)}function f(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&d(e,t)}return!1}function p(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&d(e,r)}function d(e,t){return e.isStaleByTime(t.staleTime)}var h=r(67294),m=r(464);let y=h.createContext((n=!1,{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n})),v=()=>h.useContext(y);var g=r(85945);let b=h.createContext(!1),w=()=>h.useContext(b);b.Provider;var x=r(24798);let O=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},R=e=>{h.useEffect(()=>{e.clearReset()},[e])},E=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>e.isError&&!t.isReset()&&!e.isFetching&&(0,x.L)(r,[e.error,n]),S=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},j=(e,t)=>e.isLoading&&e.isFetching&&!t,D=(e,t,r)=>(null==e?void 0:e.suspense)&&j(t,r),T=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function C(e,t,r){return function(e,t){let r=(0,g.NL)({context:e.context}),n=w(),i=v(),s=r.defaultQueryOptions(e);s._optimisticResults=n?"isRestoring":"optimistic",s.onError&&(s.onError=o.V.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=o.V.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=o.V.batchCalls(s.onSettled)),S(s),O(s,i),R(i);let[a]=h.useState(()=>new t(r,s)),u=a.getOptimisticResult(s);if((0,m.$)(h.useCallback(e=>{let t=n?()=>void 0:a.subscribe(o.V.batchCalls(e));return a.updateResult(),t},[a,n]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),h.useEffect(()=>{a.setOptions(s,{listeners:!1})},[s,a]),D(s,u,n))throw T(s,a,i);if(E({result:u,errorResetBoundary:i,useErrorBoundary:s.useErrorBoundary,query:a.getCurrentQuery()}))throw u.error;return s.notifyOnChangeProps?u:a.trackResult(u)}((0,i._v)(e,t,r),c)}},464:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});let n=r(61688).useSyncExternalStore},24798:function(e,t,r){"use strict";function n(e,t){return"function"==typeof e?e(...t):!!e}r.d(t,{L:function(){return n}})}}]);
//# sourceMappingURL=5581-c31338dd77890eb2.js.map