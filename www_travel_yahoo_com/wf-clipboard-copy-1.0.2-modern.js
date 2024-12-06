!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-clipboard-copy",[],t):"object"==typeof exports?exports["wafer-clipboard-copy"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-clipboard-copy"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=window.wafer,p=u.constants,y=u.WaferBaseClass,d=p.ATTR_PREFIX,b=["copy-text"],h=["handleCopy"],w=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.selector;r(this,t);var c=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a},{STATE_ATTRS:b})),i=e.getAttribute(d+"copy-text")||e.innerText;return c._util=f({},c._util,{elem:e,"copy-text":i}),h.forEach(function(e){c[e]=c[e].bind(c)}),e.classList.add("has-copy-click","has-wafer-click"),c}return a(t,e),s(t,[{key:"stateDidUpdate",value:function(){}},{key:"handleCopy",value:function(){}}]),t}(y);w.events={click:[["has-copy-click","handleCopy"]]};var v=w,_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},O=window.wafer.controllers.WaferBaseController,g=!!navigator.clipboard,j=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.root,r=void 0===o?document:o,n=e.selector;c(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:r,selector:n,props:{selector:n},WaferClass:v}));a._state=_({},a._state,{globalTextArea:null});var l=a;return v.prototype.handleCopy=function(){var e=this._util["copy-text"];if(g)return void navigator.clipboard.writeText(e);var t=l._state.globalTextArea;t||(t=document.createElement("textarea"),Object.assign(t.style,{border:"none",boxShadow:"none",display:"none",height:"2em",left:0,outline:"none",padding:0,position:"fixed",top:0,width:"2em"}),document.body.appendChild(t)),t.style.display="block",t.value=e,t.focus(),t.select();try{document.execCommand("copy")}catch(e){}t.style.display="none",l._state.globalTextArea=t},a.sync(),a}return l(t,e),t}(O),x=j;t.default=new x({selector:".wafer-clipboard-copy"})}})});