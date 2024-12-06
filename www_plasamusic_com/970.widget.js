"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[970],{6523:(e,t,n)=>{n.d(t,{F4:()=>o,iv:()=>i}),n(6832),n(1317),n(63);var r=n(66);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.O)(t)}var o=function(){var e=i.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},6555:(e,t,n)=>{n.d(t,{ZP:()=>k});var r=n(6832),i=n(5546),o=n(7907);function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}var s=n(9415),c=n(63),l=n.n(c);var u=r.createContext(),f={},h="PENDING",d="REJECTED",p=function(e){return e};function m(e){var t=e.defaultResolveComponent,n=void 0===t?p:t,c=e.render,m=e.onLoad;function v(e,t){void 0===t&&(t={});var p=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):p.resolve?p.resolve(e):"static"}function g(e,r,i){var o=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,s.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return l()(i,o,{preload:!0}),o}var b,w,E=function(e){var t=y(e),n=v[t];return n&&n.status!==d||((n=p.requireAsync(e)).status=h,v[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:p.resolve(e),chunkName:p.chunkName(e),error:t?t.message:t}),n.status=d}))),n},_=function(e){var n,r;function s(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},function(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}(!n.__chunkExtractor||p.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(p.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(p.chunkName(n))),function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)):(!1!==t.ssr&&(p.isReady&&p.isReady(n)||p.chunkName&&f[p.chunkName(n)])&&r.loadSync(),r)}r=e,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,a(n,r),s.getDerivedStateFromProps=function(e,t){var n=y(e);return(0,o.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var l=s.prototype;return l.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===d&&this.setCache(),this.state.loading&&this.loadAsync()},l.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},l.componentWillUnmount=function(){this.mounted=!1},l.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},l.getCacheKey=function(){return y(this.props)},l.getCache=function(){return v[this.getCacheKey()]},l.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},l.triggerOnLoad=function(){var e=this;m&&setTimeout((function(){m(e.state.result,e.props)}))},l.loadSync=function(){if(this.state.loading)try{var e=g(p.requireSync(this.props),this.props,T);this.state.result=e,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:p.resolve(this.props),chunkName:p.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},l.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=g(t,e.props,T);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},l.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,i.Z)(e,["__chunkExtractor","forwardedRef"]));return E(t)},l.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,a=(e.__chunkExtractor,(0,i.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),s=this.state,l=s.error,u=s.loading,f=s.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===h)throw this.loadAsync();if(l)throw l;var d=r||t.fallback||null;return u?d:c({fallback:d,result:f,options:t,props:(0,o.Z)({},a,{ref:n})})},s}(r.Component),k=(w=function(e){return r.createElement(u.Consumer,null,(function(t){return r.createElement(b,Object.assign({__chunkExtractor:t},e))}))},(b=_).displayName&&(w.displayName=b.displayName+"WithChunkExtractor"),w),T=r.forwardRef((function(e,t){return r.createElement(k,Object.assign({forwardedRef:t},e))}));return T.displayName="Loadable",T.preload=function(e){T.load(e)},T.load=function(e){return E(e)},T}return{loadable:v,lazy:function(e,t){return v(e,(0,o.Z)({},t,{suspense:!0}))}}}var v=m({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),y=v.loadable,g=v.lazy,b=m({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),w=b.loadable,E=b.lazy,_=y;_.lib=w,g.lib=E;const k=_},6017:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(6832),i=n(7862),o=n.n(i),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return o.state={},o.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},o.elements={},o.onResize=o.onResize.bind(o),o.onTruncate=o.onTruncate.bind(o),o.calcTargetWidth=o.calcTargetWidth.bind(o),o.measureWidth=o.measureWidth.bind(o),o.getLines=o.getLines.bind(o),o.renderLine=o.renderLine.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var r=t[n],i=document.createElement("div");return i.innerHTML="foo<br/>bar","foo\nbar"!==i[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),r=t[n]),r}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"==typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,r=this.canvasContext,i=this.props.width;if(t){var o=i||Math.floor(t.parentNode.getBoundingClientRect().width);if(!o)return window.requestAnimationFrame((function(){return n(e)}));var a=window.getComputedStyle(t),s=[a["font-weight"],a["font-style"],a["font-size"],a["font-family"]].join(" ");r.font=s,this.setState({targetWidth:o},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,i=t.ellipsis,o=t.trimWhitespace,a=this.state.targetWidth,s=this.innerText,c=this.measureWidth,l=this.onTruncate,u=this.trimRight,f=[],h=s(e.text).split("\n").map((function(e){return e.split(" ")})),d=!0,p=this.ellipsisWidth(this.elements.ellipsis),m=1;m<=n;m++){var v=h[0];if(0!==v.length){var y=v.join(" ");if(c(y)<=a&&1===h.length){d=!1,f.push(y);break}if(m===n){for(var g=v.join(" "),b=0,w=g.length-1;b<=w;){var E=Math.floor((b+w)/2);c(g.slice(0,E+1))+p<=a?b=E+1:w=E-1}var _=g.slice(0,b);if(o)for(_=u(_);!_.length&&f.length;)_=u(f.pop());y=r.createElement("span",null,_,i)}else{for(var k=0,T=v.length-1;k<=T;){var C=Math.floor((k+T)/2);c(v.slice(0,C+1).join(" "))<=a?k=C+1:T=C-1}if(0===k){m=n-1;continue}y=v.slice(0,k).join(" "),h[0].splice(0,k)}f.push(y)}else f.push(),h.shift(),m--}return l(d),f}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return r.createElement("span",{key:t},e);var i=r.createElement("br",{key:t+"br"});return e?[r.createElement("span",{key:t},e),i]:i}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,i=n.children,o=n.ellipsis,s=n.lines,c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["children","ellipsis","lines"]),l=this.state.targetWidth,u=this.getLines,f=this.renderLine,h=this.onTruncate,d=void 0;return"undefined"!=typeof window&&!(!t||!l)&&(s>0?d=u().map(f):(d=i,h(!1))),delete c.onTruncate,delete c.trimWhitespace,r.createElement("span",a({},c,{ref:function(t){e.elements.target=t}}),r.createElement("span",null,d),r.createElement("span",{ref:function(t){e.elements.text=t}},i),r.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},o))}}]),t}(r.Component);c.propTypes={children:o().node,ellipsis:o().node,lines:o().oneOfType([o().oneOf([!1]),o().number]),trimWhitespace:o().bool,width:o().number,onTruncate:o().func},c.defaultProps={children:"",ellipsis:"…",lines:1,trimWhitespace:!1,width:0};const l=c},3417:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(4922),i=n(7247);const o=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,i.Z)(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),(0,r.Z)(e,t,{leading:o,maxWait:t,trailing:a})}}}]);
//# sourceMappingURL=970.widget.js.map