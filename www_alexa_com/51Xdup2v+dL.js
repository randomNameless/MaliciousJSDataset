"use strict";(self.webpackChunk_amzn_stores_content_rendering_server=self.webpackChunk_amzn_stores_content_rendering_server||[]).push([[8459],{11557:function(e,t,r){r.d(t,{m:function(){return C},Z:function(){return f}});r(20148),r(21442),r(56750),r(42955),r(60277),r(19324),r(43452),r(67237),r(69898),r(17965),r(68064),r(28751),r(63748),r(27268),r(13156);var i=r(8330),n=r(12634),o=r.n(n),a=r(9780),s=r(80412),l=r(84447),u=r(25266);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var i,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(i=r.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var C={PROFILE_IMAGE:"profile image",HOME_PAGE_LOGO:"home page logo",DECORATIVE_IMAGE:"decorative image"},d=function(e){var t,r=e.image,n=void 0===r?"":r,o=e.imageWidth,h=void 0===o?0:o,d=e.imageHeight,f=void 0===d?0:d,g=e.imageOffsetLeft,m=void 0===g?null:g,p=e.imageOffsetTop,v=void 0===p?null:p,w=e.shape,L=void 0===w?"circle":w,x=e.requiredSize,b=void 0===x?null:x,y=e.maxSize,j=void 0===y?1/0:y,O=e.authorName,_=void 0===O?"author":O,k=e.authorImageType,N=void 0===k?C.PROFILE_IMAGE:k,A=Math.min(h,f),T=b||Math.min(j,A),H=(0,s.Xc)(n,f,h,T),S=T/A,Z=function(e){return e>A?(e-A)/2*S:0},M=null==m?Z(h):m,E=null==v?Z(f):v,I=(0,l.$G)("AUTHOR_STORES_profileImage","{0} profile image",[_]).join(""),z=(0,l.$G)("AUTHOR_STORES_VisitAuthorStore","Visit {0} Store on Amazon",[_]).join("");t=N===C.DECORATIVE_IMAGE?"":N===C.HOME_PAGE_LOGO?z:I;var P=c((0,i.useState)(!1),2),R=P[0],W=P[1];return R?(0,u.jsx)(a.Z,{src:"https://m.media-amazon.com/images/G/01/AuthorStores/defaultAuthorImage.png",alt:t,shape:L}):(0,u.jsx)(a.Z,{src:H,alt:t,imageOffsetLeft:M,imageOffsetTop:E,imageWidth:T,imageHeight:T,onError:function(){W(!0)},shape:L})};d.propTypes={image:o().string,shape:o().string,imageOffsetTop:o().number,imageOffsetLeft:o().number,imageWidth:o().number,imageHeight:o().number,requiredSize:o().number,maxSize:o().number,authorName:o().string,authorImageType:o().string};var f=d},9780:function(e,t,r){r.d(t,{Z:function(){return A}});r(8578),r(72281),r(74354),r(42955),r(74181),r(45864),r(21442),r(81892),r(19643),r(27678),r(76308),r(56750),r(60277),r(19324),r(43452),r(67237),r(37192),r(27268),r(13156);var i=r(8330),n=r.n(i),o=r(12634),a=r.n(o),s=r(24536),l=r.n(s),u=r(31823),c=r.n(u),h=r(80412),C=r(1473),d=r(91927),f=r(40502),g=r(25266);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=y(e);if(t){var n=y(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var j=c().bind({cover:"Image__cover__CuIOR",circle:"Image__circle__pUnV6"}),O={src:a().oneOfType([a().string,a().shape({url:a().string,width:a().number,height:a().number,extension:a().string,physicalId:a().string})]).isRequired,alt:a().string,maxWidth:a().number,maxHeight:a().number,autocrop:a().bool,imageOffsetLeft:a().number,imageOffsetTop:a().number,imageWidth:a().number,imageHeight:a().number,sizes:a().string,cover:a().bool,mobileScale:a().number,feature:a().oneOf([f.ho.CRITICAL,f.ho.ABOVE_THE_FOLD]),className:a().string,style:a().shape(),shape:a().string,handleOnLoad:a().func,onError:a().func,eventName:a().string},_={cover:!1,autocrop:!1,mobileScale:1,style:{},alt:"",maxWidth:0,maxHeight:0,imageOffsetLeft:0,imageOffsetTop:0,imageWidth:0,imageHeight:0,sizes:void 0,feature:f.ho.CRITICAL,className:void 0,shape:"",handleOnLoad:function(){},onError:function(){},eventName:""},k={requestContext:C.ci},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(o,e);var t,r,i,n=b(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=n.call(this,e)).onError=function(e){var r=t.props,i=r.onError,n=r.eventName,o=t.getEventImageSrc(e);d.Z.log("Image",n?"".concat(n,":loadError"):"load",d.Z.ERROR,"Failed to load an image: ".concat(o)),i(e)},t.handleImageLoad=function(e){var r=t.props,i=r.eventName,n=r.handleOnLoad;if(i){var o=Date.now()-t.initTime;d.Z.log("Image","".concat(i,":latency"),d.Z.LOG,"".concat(i," latency is ").concat(o),d.Z.LoggerType.LATENCY,o)}n&&n(e)},t.getEventImageSrc=function(e){return e&&e.target&&(e.target.currentSrc||e.target.src)||t.src},t.initTime=Date.now(),t}return t=o,(r=[{key:"classes",get:function(){var e=this.props,t=e.cover,r=e.shape,i=e.className;return l()(i,j({cover:t},r))}},{key:"cropCoordinates",get:function(){var e=this.props,t=e.src,r=e.imageOffsetLeft,i=e.imageOffsetTop,n=e.imageWidth,o=e.imageHeight,a=e.maxWidth,s=e.maxHeight;if(!0===e.cover&&a>0&&s>0&&Math.abs(n/o-a/s)>.01){var l=(0,h.jg)(t),u=l.width,c=l.height;if(u>0&&c>0)return(0,h.qt)({naturalWidth:u,naturalHeight:c,visibleWidth:a,visibleHeight:s})}return n>=0&&o>=0&&i>=0&&r>=0?{imageOffsetLeft:r,imageOffsetTop:i,imageWidth:n,imageHeight:o}:null}},{key:"imageHeight",get:function(){var e=this.props,t=e.imageHeight,r=e.src;return t||(r&&r.height?r.height:null)}},{key:"imageWidth",get:function(){var e=this.props,t=e.imageWidth,r=e.src;return t||(r&&r.width?r.width:null)}},{key:"src",get:function(){var e=this.imageWidth,t=v(v(v({},this.props),{imageWidth:e}),this.cropCoordinates);return(0,h.f)(this.url,t)}},{key:"srcSet",get:function(){var e=this.imageHeight,t=this.imageWidth,r=v(v(v({},this.props),{imageHeight:e,imageWidth:t}),this.cropCoordinates);return(0,h.IB)(this.url,r)}},{key:"sizes",get:function(){var e=this.props,t=e.maxWidth,r=e.sizes,i=this.imageWidth;if(r)return r;if(t){var n=v(v({},this.props),{},{imageWidth:i});return(0,h.FJ)(n)}return null}},{key:"url",get:function(){var e=this.props.src;return"string"==typeof e?e:e&&"string"==typeof e.url?e.url:null}},{key:"render",value:function(){var e=this,t=this.classes,r=this.src,i=this.srcSet,n=this.sizes,o=this.onError,a=this.handleImageLoad,s=this.props,l=s.alt,u=s.feature,c=s.style;return r?(0,g.jsx)("img",{alt:l,className:t,src:r,srcSet:i,sizes:n,style:c,onError:o,onLoad:a,ref:function(t){e.image=t},"data-feature":u,"data-testid":"image"}):null}}])&&L(t.prototype,r),i&&L(t,i),Object.defineProperty(t,"prototype",{writable:!1}),o}(n().Component);N.propTypes=O,N.defaultProps=_,N.contextTypes=k;var A=N},99942:function(e,t,r){r.d(t,{Z:function(){return s}});r(8330);var i=r(12634),n=r.n(i),o=r(25266),a=function(e){var t=e.className,r=void 0===t?"":t,i=e.width,n=void 0===i?10:i,a=e.arrowDown,s=void 0===a||a,l=e.height,u=void 0===l?6:l,c=e.strokeWidth,h=void 0===c?2:c;return(0,o.jsx)("svg",{className:r,width:n,height:u,viewBox:"0 0 10 6",xmlns:"http://www.w3.org/2000/svg","data-testid":s?"Arrow Down":"Arrow Up",children:(0,o.jsx)("path",{d:"M2 2l3 3 3-3",strokeWidth:h,fill:"none",fillRule:"evenodd",strokeLinecap:"square",strokeLinejoin:"bevel"})})};a.propTypes={className:n().string,arrowDown:n().bool,width:n().number,height:n().number,strokeWidth:n().number};var s=a},67586:function(e,t,r){r.d(t,{Z:function(){return n}});var i=r(25266),n=function(e){var t=e.className,r=e.size,n=void 0===r?24:r,o=e.color,a=void 0===o?"#373e3e":o;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:t,width:n,height:n,children:(0,i.jsx)("path",{fill:a,d:"M18,9a4,4,0,1,0-4-4,3.87,3.87,0,0,0,.17,1.08L8.84,9.19a4,4,0,1,0,0,5.62l5.33,3.11A3.87,3.87,0,0,0,14,19a4,4,0,1,0,1.16-2.81L9.83,13.08a3.52,3.52,0,0,0,0-2.16l5.33-3.11A4,4,0,0,0,18,9Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,18,3ZM6,14a2,2,0,1,1,2-2A2,2,0,0,1,6,14Zm12,3a2,2,0,1,1-2,2A2,2,0,0,1,18,17Z"})})}},86784:function(e,t,r){r.d(t,{Z:function(){return n}});var i=r(25266),n=function(e){var t=e.className,r=e.size,n=void 0===r?24:r,o=e.color,a=void 0===o?"#0F1111":o;return(0,i.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:t,width:n,height:n,children:[(0,i.jsx)("path",{d:"M9.71019 6.70994L11.0002 5.40994V13.9999C11.0002 14.2652 11.1055 14.5195 11.2931 14.707C11.4806 14.8946 11.735 14.9999 12.0002 14.9999C12.2654 14.9999 12.5198 14.8946 12.7073 14.707C12.8948 14.5195 13.0002 14.2652 13.0002 13.9999V5.40994L14.2902 6.70994C14.3831 6.80367 14.4937 6.87806 14.6156 6.92883C14.7375 6.9796 14.8682 7.00574 15.0002 7.00574C15.1322 7.00574 15.2629 6.9796 15.3848 6.92883C15.5066 6.87806 15.6172 6.80367 15.7102 6.70994C15.8039 6.61698 15.8783 6.50637 15.9291 6.38452C15.9798 6.26266 16.006 6.13195 16.006 5.99994C16.006 5.86793 15.9798 5.73722 15.9291 5.61536C15.8783 5.4935 15.8039 5.3829 15.7102 5.28994L12.7102 2.28994C12.6172 2.19621 12.5066 2.12182 12.3848 2.07105C12.2629 2.02028 12.1322 1.99414 12.0002 1.99414C11.8682 1.99414 11.7375 2.02028 11.6156 2.07105C11.4937 2.12182 11.3831 2.19621 11.2902 2.28994L8.29019 5.28994C8.10188 5.47824 7.99609 5.73364 7.99609 5.99994C7.99609 6.26624 8.10188 6.52164 8.29019 6.70994C8.47849 6.89824 8.73388 7.00403 9.00019 7.00403C9.26649 7.00403 9.52188 6.89824 9.71019 6.70994Z",fill:a}),(0,i.jsx)("path",{d:"M18 9H15V11H18V20H6V11H9V9H6C5.46957 9 4.96086 9.21071 4.58579 9.58579C4.21071 9.96086 4 10.4696 4 11V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V11C20 10.4696 19.7893 9.96086 19.4142 9.58579C19.0391 9.21071 18.5304 9 18 9Z",fill:a})]})}},75929:function(e,t,r){r.d(t,{K5:function(){return i.Z},Xd:function(){return l},ol:function(){return c},D1:function(){return C},Tt:function(){return z},Wi:function(){return k},XL:function(){return A},Ak:function(){return E},Zd:function(){return O},Yt:function(){return g},Oq:function(){return v},m2:function(){return Z},Zr:function(){return H},aN:function(){return I},b0:function(){return p}});var i=r(99942),n=(r(8330),r(12634)),o=r.n(n),a=r(25266),s=function(e){var t=e.className,r=void 0===t?"":t,i=e.title,n=void 0===i?"Icon/Arrow Left":i,o=e.size,s=void 0===o?12:o,l=e.strokeWidth,u=void 0===l?2:l;return(0,a.jsxs)("svg",{className:r,width:s,height:s,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("polyline",{strokeWidth:u,stroke:"currentColor",points:"15 18 9 12 15 6",fill:"none",fillRule:"evenodd",strokeLinecap:"square",strokeLinejoin:"bevel"})]})};s.propTypes={className:o().string,title:o().string,size:o().number,strokeWidth:o().number};var l=s,u=function(e){var t=e.className,r=void 0===t?"":t,i=e.title,n=void 0===i?"Icon/Arrow Right":i,o=e.size,s=void 0===o?12:o,l=e.strokeWidth,u=void 0===l?2:l;return(0,a.jsxs)("svg",{className:r,width:s,height:s,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("polyline",{strokeWidth:u,stroke:"currentColor",points:"9 18 15 12 9 6",fill:"none",fillRule:"evenodd",strokeLinecap:"square",strokeLinejoin:"bevel"})]})};u.propTypes={className:o().string,title:o().string,size:o().number,strokeWidth:o().number};var c=u,h=function(e){var t=e.size,r=void 0===t?24:t,i=e.color,n=void 0===i?"#0f0000":i;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","data-testid":"back-arrow-svg",children:(0,a.jsx)("path",{d:"M19 12H6M12 5l-7 7 7 7"})})};h.propTypes={size:o().number,color:o().string};var C=h,d=function(e){var t=e.className,r=void 0===t?"":t,i=e.title,n=void 0===i?"Icon/External Link":i,o=e.size,s=void 0===o?16:o,l=e.stroke,u=void 0===l?"#111111":l;return(0,a.jsxs)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"external-link",className:r,width:s,height:s,fill:"none",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("title",{children:n}),(0,a.jsx)("path",{d:"M11 7.92308V9C11 10.1046 10.1046 11 9 11H3C1.89543 11 1 10.1046 1 9V3C1 1.89543 1.89543 1 3 1L4.07692 1",stroke:u,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M7 1L11 1V5",stroke:u,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M5.74735 6.25264L10.0988 1.90121",stroke:u,strokeLinecap:"round"})]})};d.propTypes={className:o().string,title:o().string,size:o().number,stroke:o().string};function f(e){var t=e.color,r=void 0===t?"#0F1111":t;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","data-testid":"magnifying-glass-icon",children:(0,a.jsx)("path",{d:"M20.71 19.29L17.31 15.9C18.4084 14.5032 19.0038 12.7769 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7769 19.0038 14.5032 18.4084 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z",fill:r})})}f.propTypes={color:o().string};var g=f,m=function(e){var t=e.size,r=void 0===t?12:t,i=e.stroke,n=void 0===i?"none":i,o=e.className,s=e.isRio;return void 0!==s&&s?(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,className:o,viewBox:"0 0 24 24",fill:"none",children:(0,a.jsx)("path",{d:"M13.4092 11.9951L21.7044 3.70916C21.8926 3.52094 21.9983 3.26568 21.9983 2.99951C21.9983 2.73334 21.8926 2.47807 21.7044 2.28986C21.5162 2.10165 21.2609 1.99591 20.9948 1.99591C20.7286 1.99591 20.4734 2.10165 20.2852 2.28986L12 10.5858L3.7148 2.28986C3.62162 2.19666 3.51099 2.12274 3.38924 2.0723C3.26749 2.02187 3.137 1.99591 3.00522 1.99591C2.87343 1.99591 2.74294 2.02187 2.62119 2.0723C2.49944 2.12274 2.38881 2.19666 2.29563 2.28986C2.10743 2.47807 2.00171 2.73334 2.00171 2.99951C2.00171 3.26568 2.10743 3.52094 2.29563 3.70916L10.5908 11.9951L2.29563 20.281C2.20195 20.3739 2.1276 20.4844 2.07686 20.6062C2.02612 20.728 2 20.8587 2 20.9906C2 21.1226 2.02612 21.2532 2.07686 21.375C2.1276 21.4968 2.20195 21.6073 2.29563 21.7003C2.38854 21.7939 2.49907 21.8683 2.62086 21.919C2.74265 21.9698 2.87328 21.9959 3.00522 21.9959C3.13715 21.9959 3.26778 21.9698 3.38957 21.919C3.51136 21.8683 3.62189 21.7939 3.7148 21.7003L12 13.4044L20.2852 21.7003C20.3781 21.7939 20.4886 21.8683 20.6104 21.919C20.7322 21.9698 20.8629 21.9959 20.9948 21.9959C21.1267 21.9959 21.2574 21.9698 21.3791 21.919C21.5009 21.8683 21.6115 21.7939 21.7044 21.7003C21.798 21.6073 21.8724 21.4968 21.9231 21.375C21.9739 21.2532 22 21.1226 22 20.9906C22 20.8587 21.9739 20.728 21.9231 20.6062C21.8724 20.4844 21.798 20.3739 21.7044 20.281L13.4092 11.9951Z",fill:"#0F1111"})}):(0,a.jsx)("svg",{width:r,height:r,stroke:n,className:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",children:(0,a.jsx)("path",{d:"M10.33 0L6 4.329 1.67 0 0 1.67 4.33 6 0 10.33 1.67 12 6 7.67 10.33 12 12 10.33 7.671 6 12 1.67z",fill:"#879596",fillRule:"evenodd"})})};m.propTypes={size:o().number,stroke:o().string,className:o().string,isRio:o().bool};var p=m,v=function(e){var t=e.className,r=void 0===t?"":t,i=e.size,n=void 0===i?20:i;return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,className:r,viewBox:"0 0 24 24",fill:"none",children:[(0,a.jsx)("path",{d:"M4 7H20C20.2652 7 20.5196 6.89464 20.7071 6.70711C20.8946 6.51957 21 6.26522 21 6C21 5.73478 20.8946 5.48043 20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H4C3.73478 5 3.48043 5.10536 3.29289 5.29289C3.10536 5.48043 3 5.73478 3 6C3 6.26522 3.10536 6.51957 3.29289 6.70711C3.48043 6.89464 3.73478 7 4 7Z",fill:"#0F1111"}),(0,a.jsx)("path",{d:"M20 11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11Z",fill:"#0F1111"}),(0,a.jsx)("path",{d:"M20 17H4C3.73478 17 3.48043 17.1054 3.29289 17.2929C3.10536 17.4804 3 17.7348 3 18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17Z",fill:"#0F1111"})]})},w=(r(45864),r(21442),r(81892),r(42955),r(19643),r(27678),r(76308),["color","size"]);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var j=function(e){var t=e.color,r=void 0===t?"#BFBFBF":t,i=e.size,n=void 0===i?18:i,o=y(e,w);return(0,a.jsx)("svg",x(x({"aria-hidden":"true","data-prefix":"fas","data-icon":"info-circle",className:"info-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:n,height:n},o),{},{children:(0,a.jsx)("path",{fill:r,d:"M256,9C119,9,8,120.08,8,257S119,505,256,505,504,394,504,257,393,9,256,9Zm0,76.31A47.69,47.69,0,1,1,208.31,133,47.69,47.69,0,0,1,256,85.31Zm38.15,332.38a12.18,12.18,0,0,1-12.21,12H229.67a11.85,11.85,0,0,1-11.82-12V249.92a11.86,11.86,0,0,1,11.82-12h52.27a12.18,12.18,0,0,1,12.21,12Z"})}))};j.propTypes={size:o().number,color:o().string};var O=j,_=function(e){var t=e.className,r=e.backgroundColor,i=e.text;return(0,a.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 24",children:[(0,a.jsx)("path",{d:"M 9.4 0.2 L 32.8 0.2 L 43.6 12 L 32.8 23.8 L 9.4 23.8 Z",fill:r}),(0,a.jsx)("path",{d:"M 0.2 0.2 L 32.8 0.2 L 43.6 12 L 32.8 23.8 L 0.2 23.8 Z",stroke:"#000000",strokeWidth:"0.4",strokeLinejoin:"round",fill:"none"}),(0,a.jsx)("text",{fill:"#ffffff",x:"15",y:"20",fontSize:"22",children:i}),(0,a.jsxs)("g",{fill:"#000000",stroke:"none",transform:"matrix(0.009213, 0, 0, -0.009213, 0.283647, 22.807716)",children:[(0,a.jsx)("path",{d:"M433 2208 c-13 -18 -193 -539 -193 -560 0 -22 38 -32 83 -24 30 6 35 11 53 69 l20 62 106 3 106 3 22 -65 c22 -68 31 -76 85 -76 44 0 65 9 65 28 0 16 -175 524 -191 555 -8 14 -23 17 -78 17 -43 0 -72 -5 -78 -12z m74 -346 c-38 -2 -71 -1 -73 1 -2 2 13 53 33 113 l36 109 37 -110 37 -110 -70 -3z"}),(0,a.jsx)("path",{d:"M412 1417 c-49 -49 -82 -91 -82 -103 0 -49 58 -59 102 -17 l28 27 0 -193 c0 -113 4 -200 10 -212 12 -22 59 -26 78 -7 9 9 12 70 12 212 l0 200 29 -28 c22 -21 36 -27 62 -24 31 3 34 6 37 38 3 33 -4 42 -76 113 -44 42 -88 77 -99 77 -10 0 -55 -37 -101 -83z"}),(0,a.jsx)("path",{d:"M470 771 c-84 -27 -151 -95 -175 -175 -22 -73 -19 -194 6 -260 24 -65 87 -126 147 -144 83 -25 261 -6 283 30 10 15 12 258 3 282 -5 13 -25 16 -115 16 l-109 0 0 -45 0 -45 55 0 56 0 -3 -67 c-3 -63 -5 -68 -29 -77 -36 -12 -93 0 -128 29 -43 37 -62 87 -63 160 -1 165 118 242 269 176 28 -13 57 -20 62 -16 12 7 15 74 3 91 -25 39 -194 68 -262 45z"})]})]})};_.propTypes={className:o().string,backgroundColor:o().string,text:o().string.isRequired},_.defaultProps={className:void 0,backgroundColor:"#DA2128"};var k=_,N=function(e){var t=e.className,r=e.backgroundColor,i=e.text,n=i.charAt(0),o=i.substring(1);return o?(0,a.jsxs)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59 30",className:t,children:[(0,a.jsx)("path",{d:"M 0 0 L 46.9 0 L 58.6 15 L 46.9 30 L 0 30 Z",fill:r}),(0,a.jsx)("text",{x:"6",y:"22",fontSize:"22",fill:"#FFF",children:n}),(0,a.jsx)("text",{x:"22",y:"22",fontSize:"13",fill:"#FFF",children:o})]}):(0,a.jsxs)("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 16",className:t,children:[(0,a.jsx)("path",{d:"M 0 0 L 20 0 L 26 8 L 20 16 L 0 16 Z",fill:r}),(0,a.jsx)("text",{x:"6",y:"14",fontSize:"16",fill:"#FFF",children:n})]})};N.propTypes={className:o().string,backgroundColor:o().string,text:o().string.isRequired},N.defaultProps={className:void 0,backgroundColor:"#DA2128"};var A=N,T=function(e){var t=e.className,r=void 0===t?void 0:t,i=e.backgroundColor,n=void 0===i?"none":i;return(0,a.jsxs)("svg",{className:r,viewBox:"0 0 18 16",fill:n,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M9.00049 4.99994C8.40715 4.99994 7.82713 5.17589 7.33378 5.50553C6.84043 5.83517 6.45591 6.30371 6.22885 6.85189C6.00179 7.40007 5.94238 8.00327 6.05813 8.58521C6.17389 9.16715 6.45961 9.7017 6.87917 10.1213C7.29873 10.5408 7.83328 10.8265 8.41522 10.9423C8.99716 11.0581 9.60036 10.9986 10.1485 10.7716C10.6967 10.5445 11.1653 10.16 11.4949 9.66665C11.8245 9.1733 12.0005 8.59328 12.0005 7.99994C12.0005 7.20429 11.6844 6.44123 11.1218 5.87862C10.5592 5.31601 9.79614 4.99994 9.00049 4.99994ZM9.00049 8.99994C8.80271 8.99994 8.60937 8.94129 8.44492 8.83141C8.28047 8.72153 8.1523 8.56535 8.07661 8.38262C8.00092 8.1999 7.98112 7.99883 8.0197 7.80485C8.05829 7.61087 8.15353 7.43268 8.29338 7.29283C8.43324 7.15298 8.61142 7.05774 8.8054 7.01915C8.99938 6.98057 9.20045 7.00037 9.38317 7.07606C9.5659 7.15175 9.72208 7.27992 9.83196 7.44437C9.94184 7.60882 10.0005 7.80216 10.0005 7.99994C10.0005 8.26516 9.89513 8.51951 9.7076 8.70705C9.52006 8.89458 9.26571 8.99994 9.00049 8.99994Z",fill:"#888C8C"}),(0,a.jsx)("path",{d:"M16.5304 9.40993L15.5304 8.25993V7.99993C15.5304 7.86993 15.5304 7.74993 15.5304 7.61993L16.3804 6.79993C16.671 6.56606 16.8689 6.23635 16.9385 5.86987C17.0082 5.50339 16.945 5.1241 16.7604 4.79993L15.8404 3.18993C15.697 2.93948 15.4904 2.73103 15.2412 2.58538C14.9921 2.43974 14.709 2.362 14.4204 2.35993C14.2572 2.36047 14.0951 2.38749 13.9404 2.43993L12.7204 2.73993C12.4308 2.54371 12.1265 2.36988 11.8104 2.21993L11.5504 1.28993C11.4738 0.921328 11.2711 0.590929 10.9773 0.355515C10.6835 0.120101 10.3169 -0.00562872 9.94043 -6.72469e-05H8.06043C7.68398 -0.00562872 7.31735 0.120101 7.02354 0.355515C6.72973 0.590929 6.52708 0.921328 6.45043 1.28993L6.19043 2.21993C5.86309 2.37436 5.54873 2.55495 5.25043 2.75993L4.25043 2.47993C3.8935 2.33873 3.49851 2.32639 3.13346 2.44503C2.76841 2.56367 2.45615 2.80587 2.25043 3.12993L1.25043 4.69993C1.04802 5.00949 0.962977 5.38123 1.01066 5.748C1.05834 6.11478 1.2356 6.45241 1.51043 6.69993L2.45043 7.69993C2.45043 7.81993 2.45043 7.92993 2.45043 8.03993C2.45043 8.14993 2.45043 8.15993 2.45043 8.21993L1.45043 9.50993C1.18032 9.78035 1.01888 10.1405 0.996757 10.5221C0.974637 10.9037 1.09337 11.2801 1.33043 11.5799L2.45043 12.9999C2.68132 13.2931 3.00427 13.4999 3.36713 13.587C3.73 13.6741 4.11163 13.6364 4.45043 13.4799L5.18043 13.1999C5.49726 13.4175 5.83176 13.6082 6.18043 13.7699L6.44043 14.6999C6.51535 15.0721 6.71858 15.4061 7.01467 15.6437C7.31075 15.8813 7.68088 16.0074 8.06043 15.9999H9.94043C10.3169 16.0055 10.6835 15.8798 10.9773 15.6444C11.2711 15.4089 11.4738 15.0785 11.5504 14.7099L11.8104 13.7799C12.1593 13.6225 12.4939 13.4352 12.8104 13.2199L13.6704 13.5199C13.876 13.6071 14.0972 13.6513 14.3204 13.6499C14.5753 13.6488 14.8267 13.5897 15.0554 13.4771C15.2841 13.3645 15.4841 13.2013 15.6404 12.9999L16.7104 11.4799C16.9378 11.1722 17.045 10.7921 17.0119 10.4109C16.9787 10.0297 16.8075 9.67378 16.5304 9.40993ZM14.1604 11.5799L13.4404 11.3299L12.4404 10.9999L11.6004 11.5799C11.4113 11.7349 11.2108 11.8753 11.0004 11.9999L10.1604 12.3899L9.91043 13.2799L9.70043 14.0399H8.33043L8.12043 13.2799L7.87043 12.3899L7.00043 11.9999C6.75986 11.8896 6.52904 11.7591 6.31043 11.6099L5.46043 10.9999L4.46043 11.3899L3.86043 11.6299L3.10043 10.6299L4.00043 9.41993L4.46043 8.83993V8.08993V7.99993C4.46043 7.91993 4.46043 7.84993 4.46043 7.77993V6.89993L3.90043 6.26993L3.13043 5.47993L3.79043 4.42993L4.71043 4.67993L5.61043 4.92993L6.38043 4.40993C6.57451 4.25513 6.782 4.11792 7.00043 3.99993L7.84043 3.60993L8.09043 2.71993L8.33043 1.99993H9.67043L9.88043 2.75993L10.1304 3.64993L11.0004 3.99993C11.221 4.10284 11.4348 4.21974 11.6404 4.34993L12.3704 4.84993L13.2304 4.63993L14.2804 4.38993L14.8904 5.45993L14.1904 6.12993L13.5104 6.77993L13.5704 7.71993C13.5754 7.79986 13.5754 7.88001 13.5704 7.95993V8.12993V8.91993L14.0904 9.52993L14.9504 10.5299L14.1604 11.5799Z",fill:"#888C8C"})]})};T.propTypes={className:o().string,backgroundColor:o().string};var H=T,S=function(e){var t=e.className,r=void 0===t?void 0:t,i=e.iconColor,n=void 0===i?"#888C8C":i,o=e.backgroundColor,s=void 0===o?"none":o;return(0,a.jsx)("svg",{className:r,viewBox:"0 0 18 16",fill:s,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389951 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.387 0 9 0ZM8 12.63H10C10.653 12.6319 11.2875 12.8467 11.8073 13.242C12.3271 13.6372 12.7037 14.1913 12.88 14.82C11.7307 15.5854 10.3808 15.9937 9 15.9937C7.61922 15.9937 6.26927 15.5854 5.12 14.82C5.29631 14.1913 5.67293 13.6372 6.19271 13.242C6.71248 12.8467 7.34702 12.6319 8 12.63ZM7 8.11C7 7.71444 7.1173 7.32776 7.33706 6.99886C7.55683 6.66996 7.86918 6.41362 8.23464 6.26224C8.60009 6.11087 9.00222 6.07126 9.39018 6.14843C9.77815 6.2256 10.1345 6.41608 10.4142 6.69579C10.6939 6.97549 10.8844 7.33186 10.9616 7.71982C11.0387 8.10778 10.9991 8.50992 10.8478 8.87537C10.6964 9.24082 10.44 9.55318 10.1111 9.77294C9.78225 9.9927 9.39557 10.11 9 10.11C8.46957 10.11 7.96086 9.89929 7.58579 9.52421C7.21072 9.14914 7 8.64043 7 8.11ZM14.45 13.38C13.8839 12.2846 12.933 11.437 11.78 11C12.353 10.4461 12.7475 9.73377 12.9129 8.95421C13.0783 8.17466 13.0071 7.36347 12.7084 6.62465C12.4097 5.88584 11.8971 5.25309 11.2364 4.80755C10.5757 4.362 9.79691 4.12396 9 4.12396C8.20309 4.12396 7.42435 4.362 6.76363 4.80755C6.1029 5.25309 5.59033 5.88584 5.29162 6.62465C4.99292 7.36347 4.92171 8.17466 5.08712 8.95421C5.25253 9.73377 5.64702 10.4461 6.22 11C5.06187 11.4443 4.11025 12.3033 3.55 13.41C2.53893 12.1635 1.99117 10.605 2 9C2 7.14348 2.7375 5.36301 4.05026 4.05025C5.36301 2.7375 7.14349 2 9 2C10.8565 2 12.637 2.7375 13.9498 4.05025C15.2625 5.36301 16 7.14348 16 9C16.0019 10.5947 15.4546 12.1414 14.45 13.38Z",fill:n})})};S.propTypes={className:o().string,iconColor:o().string,backgroundColor:o().string};var Z=S,M=function(e){var t=e.className,r=void 0===t?void 0:t,i=e.backgroundColor,n=void 0===i?"none":i,o=e.iconColor,s=void 0===o?"#888C8C":o;return(0,a.jsxs)("svg",{className:r,viewBox:"0 0 18 16",fill:n,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M14.4 0H1.6C1.17565 0 0.768687 0.168571 0.468629 0.468629C0.168571 0.768687 0 1.17565 0 1.6V11.2C0 11.6243 0.168571 12.0313 0.468629 12.3314C0.768687 12.6314 1.17565 12.8 1.6 12.8H3.2V15.31C3.2 15.5222 3.28429 15.7257 3.43431 15.8757C3.58434 16.0257 3.78783 16.11 4 16.11C4.15409 16.1154 4.30659 16.0773 4.44 16L8 12.8H14.4C14.8243 12.8 15.2313 12.6314 15.5314 12.3314C15.8314 12.0313 16 11.6243 16 11.2V1.6C16 1.17565 15.8314 0.768687 15.5314 0.468629C15.2313 0.168571 14.8243 0 14.4 0ZM14 10.8H7.24L6.67 11.31L5.2 12.62V10.8H2V2H14V10.8Z",fill:s}),(0,a.jsx)("path",{d:"M5 6H11C11.2652 6 11.5196 5.89464 11.7071 5.70711C11.8946 5.51957 12 5.26522 12 5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6Z",fill:s}),(0,a.jsx)("path",{d:"M5 9H11C11.2652 9 11.5196 8.89464 11.7071 8.70711C11.8946 8.51957 12 8.26522 12 8C12 7.73478 11.8946 7.48043 11.7071 7.29289C11.5196 7.10536 11.2652 7 11 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9Z",fill:s})]})};M.propTypes={className:o().string,iconColor:o().string,backgroundColor:o().string};var E=M,I=(r(67586),r(86784),r(8578),function(e){var t=e.className,r=e.size,i=void 0===r?24:r,n=e.backgroundColor,o=void 0===n?"#FFAF38":n,s=e.symbolColor,l=void 0===s?"#0F1111":s;return(0,a.jsxs)("svg",{viewBox:"0 0 ".concat(i," ").concat(i),xmlns:"http://www.w3.org/2000/svg",className:t,width:i,height:i,children:[(0,a.jsx)("path",{d:"M11.4947 3.00002H12.5064C12.7173 2.99872 12.9248 3.05783 13.1075 3.1713C13.2902 3.28477 13.4417 3.44851 13.5463 3.64576L21.8745 19.1334C21.9653 19.3298 22.008 19.5479 21.9988 19.7671C21.9895 19.9863 21.9286 20.1993 21.8217 20.3861C21.7149 20.5728 21.5656 20.7272 21.388 20.8346C21.2104 20.942 21.0103 20.999 20.8066 21H3.19453C2.99115 21.0009 2.79095 20.9456 2.61305 20.8394C2.43515 20.7332 2.2855 20.5797 2.17838 20.3935C2.07126 20.2073 2.01026 19.9946 2.00118 19.7758C1.99211 19.5569 2.03528 19.3392 2.12657 19.1435L10.4642 3.64576C10.568 3.45 10.718 3.28722 10.8989 3.17384C11.0798 3.06046 11.2853 3.0005 11.4947 3.00002Z",fill:o}),(0,a.jsx)("path",{d:"M12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V9C13 8.73478 12.8946 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15Z",fill:l}),(0,a.jsx)("path",{d:"M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z",fill:l})]})}),z=function(e){var t=e.className,r=void 0===t?"":t,i=e.size,n=void 0===i?20:i,o=e.direction,s=void 0===o?"left":o;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:r,width:n,height:n,viewBox:"0 0 24 24",fill:"none",children:(0,a.jsx)("path",{d:{left:"M16.9578 22.0008C16.8201 22.0016 16.6835 21.9763 16.556 21.9266C16.4285 21.8768 16.3125 21.8035 16.2147 21.7108L6 12.0008L16.2147 2.29079C16.4108 2.10454 16.6761 2 16.9526 2C17.2291 2 17.4943 2.10454 17.6904 2.29079C17.7885 2.38376 17.8664 2.49436 17.9195 2.61622C17.9726 2.73808 18 2.86878 18 3.00079C18 3.1328 17.9726 3.26351 17.9195 3.38537C17.8664 3.50723 17.7885 3.61783 17.6904 3.71079L8.96185 12.0008L17.6904 20.2908C17.8374 20.4301 17.9378 20.6078 17.979 20.8017C18.0203 20.9955 18.0004 21.1966 17.922 21.3796C17.8436 21.5627 17.7101 21.7194 17.5385 21.8299C17.3669 21.9405 17.1648 22 16.9578 22.0008Z",right:"M7.0422 22C6.83522 21.9992 6.63313 21.9397 6.46151 21.8291C6.28989 21.7186 6.15643 21.5619 6.07801 21.3789C5.9996 21.1958 5.97974 20.9947 6.02096 20.8009C6.06218 20.6071 6.16263 20.4293 6.30959 20.2901L15.0381 12.0004L6.30959 3.71072C6.21149 3.61776 6.13363 3.50717 6.0805 3.38531C6.02737 3.26346 6.00001 3.13276 6.00001 3.00075C6.00001 2.86875 6.02737 2.73805 6.0805 2.61619C6.13363 2.49434 6.21149 2.38374 6.30959 2.29078C6.50568 2.10454 6.77094 2 7.04744 2C7.32393 2 7.58919 2.10454 7.78528 2.29078L18 12.0004L7.78528 21.71C7.68749 21.8027 7.57151 21.876 7.44399 21.9258C7.31648 21.9755 7.17994 22.0007 7.0422 22Z",up:"M2.00018 16.9899C1.99942 16.8564 2.02465 16.7241 2.07441 16.6005C2.12418 16.4769 2.1975 16.3645 2.29018 16.2697L12.001 6.00008L21.7102 16.2697C21.8964 16.4598 22.001 16.7169 22.001 16.9848C22.001 17.2528 21.8964 17.5099 21.7102 17.7C21.6172 17.795 21.5066 17.8705 21.3848 17.922C21.2629 17.9735 21.1322 18 21.0002 18C20.8682 18 20.7375 17.9735 20.6156 17.922C20.4937 17.8705 20.3831 17.795 20.2902 17.7L12.001 8.87076L3.71018 17.7C3.57091 17.8424 3.39313 17.9398 3.19932 17.9797C3.0055 18.0197 2.80436 18.0004 2.62133 17.9244C2.4383 17.8484 2.28159 17.7191 2.17103 17.5527C2.06047 17.3864 2.00101 17.1905 2.00018 16.9899Z",down:"M22 7.01012C22.0007 7.14362 21.9755 7.27595 21.9258 7.39954C21.876 7.52313 21.8027 7.63554 21.71 7.73032L11.9996 17.9999L2.29078 7.73032C2.10454 7.54027 2 7.28317 2 7.01519C2 6.74721 2.10454 6.49012 2.29078 6.30006C2.38374 6.20498 2.49434 6.12952 2.61619 6.07802C2.73804 6.02652 2.86875 6.00001 3.00075 6.00001C3.13276 6.00001 3.26346 6.02652 3.38531 6.07802C3.50717 6.12952 3.61776 6.20498 3.71072 6.30006L11.9996 15.1293L20.2901 6.30006C20.4293 6.15762 20.6071 6.06027 20.8009 6.02032C20.9947 5.98037 21.1958 5.99961 21.3789 6.07561C21.5619 6.15161 21.7186 6.28096 21.8291 6.4473C21.9397 6.61364 21.9992 6.8095 22 7.01012Z"}[s],fill:"#0F1111"})})}},8916:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});r(8578),r(6635),r(8330);var i=r(31823),n=r.n(i),o=r(12634),a=r.n(o),s=r(91927),l=r(84447),u=r(40549),c=r(34680),h=r(11557),C=r(71368),d=r(25266),f=n().bind({"similar-authors":"SimilarAuthors__similar-authors__u0w9U","similar-authors__title":"SimilarAuthors__similar-authors__title__dHdw1","similar-authors__author-info":"SimilarAuthors__similar-authors__author-info__cegz8","author-card":"SimilarAuthors__author-card__uy2nT","author-card__link":"SimilarAuthors__author-card__link__v2piI","author-card__link-image":"SimilarAuthors__author-card__link-image__lPrjP","author-card__link-name":"SimilarAuthors__author-card__link-name__UjB8Z","author-card__follow-button":"SimilarAuthors__author-card__follow-button__lB3d1"}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.authorId,r=void 0===t?"":t,i=e.image,n=void 0===i?"":i,o=e.authorName,a=void 0===o?"":o,u=e.imageWidth,C=void 0===u?0:u,g=e.imageHeight,m=void 0===g?0:g,p=e.authorPageUrl,v=void 0===p?"":p,w=e.imageOffsetTop,L=void 0===w?0:w,x=e.imageOffsetLeft,b=void 0===x?null:x,y=(0,l.lO)(),j=(0,l.$G)("AUTHOR_STORES_VisitAuthorStore","Visit {0} Store on Amazon",[a]);return(0,d.jsxs)("li",{className:f("author-card"),children:[(0,d.jsxs)("a",{title:j,href:v,className:f("author-card__link"),onClick:function(){return e=y.afid,t=r,s.Z.log("SimilarAuthorCard","ClickToSimilarAuthor",s.Z.LOG,"Navigating from author ".concat(e," to ").concat(t)),!0;var e,t},children:[(0,d.jsx)("div",{className:f("author-card__link-image"),children:(0,d.jsx)(h.Z,{image:n,imageWidth:C,imageHeight:m,imageOffsetTop:L,imageOffsetLeft:b,maxSize:300,authorName:a,authorImageType:h.m.DECORATIVE_IMAGE})}),(0,d.jsx)("div",{className:f("author-card__link-name"),children:a})]}),(0,d.jsx)("div",{className:f("author-card__follow-button"),children:(0,d.jsx)(c.Z,{overwriteAfid:r,overwriteBrandName:a})})]})};g.propTypes={authorId:a().string,image:a().string,authorName:a().string,imageWidth:a().number,imageHeight:a().number,authorPageUrl:a().string,imageOffsetTop:a().number,imageOffsetLeft:a().number};var m=function(e){var t=e.content,r=(t=void 0===t?{}:t).similarAuthors,i=void 0===r?[]:r,n=(0,l.$G)("AUTHOR_STORES_CustomersAlsoBoughtItemsBy","Customers Also Bought Items By");if(null==i||!i.length)return null;var o=[C.Am.DEFAULT_PREFIX,C.Am.OTHER_PAGETYPES.AUTHOR,C.Am.CUSTOMER_ALSO_BOUGHT_ITEMS_BY];return(0,d.jsxs)("div",{className:f("similar-authors"),children:[(0,d.jsx)("h2",{className:f("similar-authors__title"),id:"similar-authors-title",children:n}),(0,d.jsx)("ul",{className:f("similar-authors__author-info"),"aria-labelledby":"similar-authors-title",children:i.map((function(e){return(0,d.jsx)(g,{authorId:e.authorId,image:e.image,authorName:e.authorName,imageWidth:e.imageWidth,imageHeight:e.imageHeight,authorPageUrl:(0,C.a2)(e.authorPageUrl,o),imageOffsetTop:e.imageOffsetTop,imageOffsetLeft:e.imageOffsetLeft},e.authorName)}))})]})};m.propTypes={content:a().shape({similarAuthors:a().arrayOf(a().object)})};var p=(0,u.Z)(m,"similarauthors")}}]);