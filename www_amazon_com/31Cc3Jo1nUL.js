"use strict";(self.webpackChunk_amzn_stores_content_rendering_server=self.webpackChunk_amzn_stores_content_rendering_server||[]).push([[5346],{58314:function(e,t,i){i.d(t,{Z:function(){return Y}});i(23563),i(81892),i(42955),i(8578),i(6635),i(56090),i(60802),i(45864),i(21442),i(19643),i(27678),i(76308),i(72281),i(74354),i(74181),i(56750),i(60277),i(19324),i(43452),i(67237),i(37192),i(27268),i(13156);var o=i(8330),r=i.n(o),n=i(12634),a=i.n(n),c=i(31823),s=i.n(c),l=i(30064),d=i.n(l),u=i(61291),p=i.n(u),v=i(55563),_=i(91927),f=i(82809),h=i(40502),g=i(82593),m=i(1473),b=i(17362),I=i(15926),y=i(9780),T=i(52409),P=i(91041),E=i(43565),w=i(20233),x=i(21781),O=i(29798),j=i(20911),S=i(11735),C={container:"EditorialTileInteractiveImage__container__eGXS1","area-for-points":"EditorialTileInteractiveImage__area-for-points__ixAQs","product-card-wrapper":"EditorialTileInteractiveImage__product-card-wrapper__tfMEE","area-for-points-hide-mobile":"EditorialTileInteractiveImage__area-for-points-hide-mobile__DKG75","product-card-container":"EditorialTileInteractiveImage__product-card-container__SzTxt","bottom-sheet-product-card":"EditorialTileInteractiveImage__bottom-sheet-product-card__bXWCw","bottom-sheet-override-class":"EditorialTileInteractiveImage__bottom-sheet-override-class__FWjIS","image-wrapper":"EditorialTileInteractiveImage__image-wrapper__c1Yu9",image:"EditorialTileInteractiveImage__image__f9WWf","see-products-button":"EditorialTileInteractiveImage__see-products-button__AGeUM","see-products-button-text":"EditorialTileInteractiveImage__see-products-button-text__g9hpF","bottom-sheet-container":"EditorialTileInteractiveImage__bottom-sheet-container__HL61i","image-with-background":"EditorialTileInteractiveImage__image-with-background__hpilE","area-for-points-active":"EditorialTileInteractiveImage__area-for-points-active__mZi52"},R=i(25266);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function A(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,o=Z(e);if(t){var r=Z(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}(this,i)}}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){B(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function B(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var N=s().bind(H(H({},C),{container:"EditorialTileInteractiveImage__container__eGXS1","see-products-button-text":"EditorialTileInteractiveImage__see-products-button-text__g9hpF","see-products-button":"EditorialTileInteractiveImage__see-products-button__AGeUM","image-wrapper":"EditorialTileInteractiveImage__image-wrapper__c1Yu9",image:"EditorialTileInteractiveImage__image__f9WWf","product-card-container":"EditorialTileInteractiveImage__product-card-container__SzTxt"})),M={croppedImage:a().shape({cropBox:a().shape({left:a().number.isRequired,top:a().number.isRequired,width:a().number.isRequired,height:a().number.isRequired}).isRequired,imageUrl:a().string.isRequired}).isRequired,points:a().arrayOf(a().shape({id:a().string.isRequired,label:a().string,coordinates:a().shape({x:a().number.isRequired,y:a().number.isRequired}).isRequired,products:a().arrayOf(a().object)})).isRequired,content:a().object,title:a().string,id:a().string,size:a().string.isRequired,mobileCopy:a().bool,onPointSelected:a().func,renderTileLayers:a().bool,tileHeight:a().number,tileLayers:a().arrayOf(a().shape({content:a().shape({bondCustomerServiceLink:a().bool,asinList:a().arrayOf(a().string)})})),type:a().string,onAddedToCart:a().func.isRequired,productToCheckout:a().shape(a().object),promptType:a().string,onClose:a().func.isRequired,onTopBarMouseEnter:a().func.isRequired,onTopBarMouseLeave:a().func.isRequired,cartCount:a().number,defaultActivePointId:a().string,tileId:a().string},G={title:void 0,mobileCopy:!1,onPointSelected:function(){},defaultActivePointId:null,id:void 0,tileId:"",renderTileLayers:!1,tileHeight:void 0,tileLayers:[],type:"",content:{},productToCheckout:{},promptType:null,cartCount:0},K={requestContext:m.ci,themeContext:m.iR,pageContext:m.pn,caller:a().string,widgetId:a().string,widgetType:a().string,isMobile:a().bool},W="InteractiveImage",z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(n,e);var t,i,o,r=L(n);function n(e,t){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(i=r.call(this,e,t)).availablePoints=function(e){return i.context.caller===h.Qd.BUILDER?e:e.filter((function(e){return e.products&&e.products.length>0})).sort((function(e,t){return e.coordinates.x-t.coordinates.x}))},i.onPointActivate=function(e,t){var o,r=i.props.onPointSelected;if(t){var n=t.left,a=t.viewportWidth-t.right,c=F(i),s=c.LEFT,l=c.RIGHT;o=a>=c.POPOVER_WIDTH||a>n?l:s}i.setState({activePointId:e,activePointDirection:o}),r(e)},i.onPointDeactivate=function(e){i.state.activePointId===e&&i.setState({activePointId:null})},i.handleClickForImageArea=function(){var e=i.state.activePointId;_.Z.log("InteractiveImage","image-area-click",_.Z.LOG,"click image area"),i.pointsRefs.length>0&&!e?i.pointsRefs[0].activate():e&&i.setState({activePointId:null})},i.handlePositionlessPopoverClose=function(){var e=i.state.activePointId;i.onPointDeactivate(e),_.Z.log("InteractiveImage","popover-close-click",_.Z.LOG,"close popover")},i.handleFocusImageArea=function(e){var t=i.state.isFocused;i.areaForPoints&&i.areaForPoints.contains(e.target)&&!t&&i.setState({isFocused:!0})},i.handleBlurImageArea=function(){i.state.isFocused&&i.setState({isFocused:!1,useKeyboard:!1})},i.handleKeyDownForImageArea=function(){i.setState({useKeyboard:!0})};var o=i.props,a=o.defaultActivePointId,c=o.points,s=void 0===c?[]:c;return i.weblabChecker=new j.ZP(i.context),i.state={activePointId:a,isFocused:!1,useKeyboard:!1,mounted:!1},i.POPOVER_WIDTH=430,i.LEFT="left",i.RIGHT="right",i.pointsRefs=[],i.allProducts=s.reduce((function(e,t){return t.products&&(e=e.concat(t.products)),e}),[]),i}return t=n,(i=[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"tileLayers",get:function(){var e=this.props,t=e.id,i=e.tileHeight,o=e.tileLayers,r=e.renderTileLayers,n=e.size,a=e.type;return r&&o.length>0?o.map((function(e){return(0,R.jsx)(b.Z,{tileId:t,tileType:a,tileHeight:i,tileSize:n,tileLayer:e},e.id)})):null}},{key:"activeAsin",get:function(){var e=this.props.points,t=this.state.activePointId,i=p()((function(e){return e.id===t}))(e);return i&&i.products.length>0?i.products[0].asin:null}},{key:"bottomSheetHeight",get:function(){var e=this.props.croppedImage.cropBox;if(!this.state.mounted)return 0;var t=d()("themeContext.maxShoppableImageBottomSheetHeight")(this.context),i=window.innerWidth/e.width*e.height+240,o=window.innerHeight*t;return i<o?i:o}},{key:"render",value:function(){var e=this,t=this.props,i=t.content,o=t.id,r=this.context.isMobile,a=H(H({},this.props),i),c=this.activeAsin,s=this.allProducts,l=a.points,d=a.croppedImage,u=a.size,_=a.mobileCopy,f=a.onAddedToCart,h=a.productToCheckout,m=a.promptType,b=a.onClose,j=a.onTopBarMouseEnter,k=a.onTopBarMouseLeave,A=a.cartCount,D=a.checkoutHandlerProps,L=this.availablePoints(l),F=this.state,Z=F.activePointId,q=F.activePointDirection,B=F.isFocused,M=F.useKeyboard,G=q===this.LEFT?this.RIGHT:this.LEFT,K=d.cropBox,z=p()((function(e){return e.id===Z}))(l),Y=z&&z.products&&z.products.length>0&&new v.Z(z.products[0],this.context),U={src:d.imageUrl,imageOffsetLeft:K.left,imageOffsetTop:K.top,imageWidth:K.width,imageHeight:K.height,className:N("image",{"image-without-points":0===L.length,"image-with-background":_})};if(0===L.length)return(0,R.jsxs)(O.Z,{style:C,className:C.container,widgetSubType:W,additionalData:{tileId:o},stopPropagation:!0,children:[(0,R.jsx)("div",{className:N("image-wrapper"),children:(0,R.jsx)(y.Z,H({},U))}),this.tileLayers]});var V=(0,R.jsx)("div",{className:N("see-products-button-text"),children:(0,R.jsx)(P.Z,{id:"STORES_WIDGET_SeeProducts",children:"See products"})});return(0,R.jsxs)(O.Z,{style:C,className:C.container,stopPropagation:!0,widgetSubType:W,asin:c,additionalData:{tileId:o},logAsinImpressions:!0,inViewAsinList:[c],productList:s,children:[(0,R.jsxs)("div",{className:N("image-wrapper"),"data-click-type":g.uh.OTHER,children:[(0,R.jsx)(y.Z,H({},U)),(0,R.jsx)("div",{ref:function(t){e.areaForPoints=t},role:"menu",tabIndex:"0",className:N("area-for-points",{"area-for-points-active":Z||B,"area-for-points-hide-mobile":r&&!_}),onKeyDown:this.handleKeyDownForImageArea,onClick:this.handleClickForImageArea,onFocus:this.handleFocusImageArea,onBlur:this.handleBlurImageArea,children:L.map((function(t,i){var n=t.id,a=t.coordinates,s=t.label,l=t.products&&t.products.length>0&&new v.Z(t.products[0],e.context),d=(null==l?void 0:l.title)||"";return(0,R.jsx)(S.Z,{x:a.x,y:a.y,label:s,onActivate:e.onPointActivate,onDeactivate:e.onPointDeactivate,isActive:Z===n,labelSide:"right",overlaySide:q,title:d,pointId:n,size:u,isMobile:r,ref:function(t){e.pointsRefs[i]=t},asin:c,tileId:o,children:l&&!r&&(0,R.jsx)(O.Z,{widgetSubType:W,asin:c,additionalData:{tileId:o},children:(0,R.jsx)(x.Z,{contentClassName:N("product-card-wrapper"),arrowDirection:G,onClose:e.handlePositionlessPopoverClose,focusClose:M,children:(0,R.jsx)("div",{className:N("product-card-container"),"data-testid":"point-product-card",children:(0,R.jsx)(E.Z,H(H({},l.toJSON()),{},{onAddedToCart:f}))})})})},n)}))}),!_&&(0,R.jsx)(T.Z,{tabIndex:r?"0":"-1",className:N("see-products-button"),skin:"sky",text:V,onClick:this.handleClickForImageArea,disableInternalPointerEvents:"true",type:"Other"})]}),!_&&this.tileLayers,r&&!_&&(0,R.jsx)(I.Z,{overlayOpacity:.9,visible:!!z,closeBottomSheet:function(){return e.setState({activePointId:null})},wrapperClasses:[C["bottom-sheet-override-class"]],children:(0,R.jsxs)("div",{className:N("bottom-sheet-container"),style:{height:this.bottomSheetHeight},"data-testid":"bottom-sheet-container",children:[(0,R.jsx)(n,H(H({},a),{},{mobileCopy:!0,onPointSelected:this.onPointActivate,defaultActivePointId:Z,additionalData:{tileId:o}})),z&&(0,R.jsx)("div",{className:C["bottom-sheet-product-card"],children:Y&&(0,R.jsx)(E.Z,H(H({},Y.toJSON()),{},{onAddedToCart:f}))})]})}),!_&&(0,R.jsx)(w.Z,H(H({},h),{},{checkoutHandlerProps:D,visible:"topBar"===m,onCloseClick:b,onTopBarMouseEnter:j,onTopBarMouseLeave:k,cartCount:A}))]})}}])&&A(t.prototype,i),o&&A(t,o),Object.defineProperty(t,"prototype",{writable:!1}),n}(r().Component);z.propTypes=M,z.defaultProps=G,z.contextTypes=K;var Y=(0,f.R)(z)},46515:function(){},89388:function(){},48631:function(){},514:function(e,t){t.Z={"point-area":"EditorialTileInteractiveImage__point-area__E1tuL",dot:"EditorialTileInteractiveImage__dot__M6yvF","point-active":"EditorialTileInteractiveImage__point-active__a1tEq","point-origin":"EditorialTileInteractiveImage__point-origin__rJDub","point-container":"EditorialTileInteractiveImage__point-container__YCKSv","show-label":"EditorialTileInteractiveImage__show-label__Yccs5","label-on-right":"EditorialTileInteractiveImage__label-on-right__VQGKj","label-on-left":"EditorialTileInteractiveImage__label-on-left__Yx1Y7",label:"EditorialTileInteractiveImage__label__DVOad","overlay-position-container":"EditorialTileInteractiveImage__overlay-position-container__gHK5N","overlay-on-right":"EditorialTileInteractiveImage__overlay-on-right__OYYoY","overlay-on-left":"EditorialTileInteractiveImage__overlay-on-left__d46O6","overlay-enter":"EditorialTileInteractiveImage__overlay-enter__vuKRX","overlay-enter-active":"EditorialTileInteractiveImage__overlay-enter-active__o8yeh","overlay-leave":"EditorialTileInteractiveImage__overlay-leave__nlF9a","overlay-leave-active":"EditorialTileInteractiveImage__overlay-leave-active__d4bbJ"}}}]);