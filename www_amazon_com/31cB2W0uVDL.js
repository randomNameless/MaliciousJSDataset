"use strict";(self.webpackChunk_amzn_stores_content_rendering_server=self.webpackChunk_amzn_stores_content_rendering_server||[]).push([[9280],{71235:function(e,o,t){t.d(o,{Z:function(){return D}});t(8578),t(51494),t(45864),t(21442),t(81892),t(42955),t(19643),t(27678),t(76308),t(56750),t(60277),t(19324),t(43452),t(67237),t(69898),t(17965),t(68064),t(28751),t(63748),t(27268),t(13156);var r=t(8330),n=t(31823),i=t.n(n),a=t(12634),c=t.n(a),l=t(40502),s=t(91927),u=t(82593),d=t(1473),p=t(62918),_=t(67250),m=t(36416),g=t(31824),b=t(84447),v=t(42114),f=t(98126),h=t(55008),y=t(97864),k=t(58324),P=t(94792),O=t(1446),w=t(49835),C=t(25266);function A(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,n,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!o||i.length!==o);a=!0);}catch(e){c=!0,n=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw n}}return i}(e,o)||function(e,o){if(!e)return;if("string"==typeof e)return T(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,o)}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,r=new Array(o);t<o;t++)r[t]=e[t];return r}function S(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?S(Object(t),!0).forEach((function(o){I(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function I(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var q=i().bind({"product-outer":"Product__product-outer__KB0Lj","product-outer__improved":"Product__product-outer__improved__oAXHl","product-outer-disable-shadow":"Product__product-outer-disable-shadow__G5__U","improved-large-container":"Product__improved-large-container__AkHo5",item:"Product__item__XJQNz",item__contents:"Product__item__contents__vztAc","product__image-container":"Product__product__image-container__qwHq9","item__contents--image-on-top":"Product__item__contents--image-on-top__LfQ0r","item__contents--image-on-top-narrow":"Product__item__contents--image-on-top-narrow__Wim1f","item__contents--side-image":"Product__item__contents--side-image___ERoz","product__image-container-improved-mobile":"Product__product__image-container-improved-mobile__G15Cl","best-seller-container":"Product__best-seller-container__Mqqqu","quick-look":"Product__quick-look__MX8vI",visible:"Product__visible__UaJ3K","quick-look--image-on-top":"Product__quick-look--image-on-top__PHh35","quick-look--image-on-top-narrow":"Product__quick-look--image-on-top-narrow__jELj9","quick-look-icon":"Product__quick-look-icon__OsYIl","quick-look-content":"Product__quick-look-content__QPON3","product-outer--side-image":"Product__product-outer--side-image__d_LOC","quick-look--bottom-large":"Product__quick-look--bottom-large__KcwLk"}),x=function(e,o,t){var r="Product-".concat(e);s.Z.log(r,t,s.Z.LOG,"Product click ".concat(e," ").concat(o))},N=j(j({asin:c().string.isRequired,backgroundColor:d.$1,dealsExist:c().bool,gridType:c().string,hasVariations:c().bool,isASINShowcaseOpen:c().bool,isDealsAndCouponsPlaceholder:c().bool,logClick:c().func,onOpenShowcase:c().func,parentOverlayVisible:c().bool,productType:c().string,promotionsUnifiedPrimePromotionStyles:c().shape({style:c().string.isRequired,text:c().string.isRequired}),showAddToCart:c().bool,shouldASINShowcaseCloseFocus:c().bool,showRating:c().bool,strategy:c().oneOf(Object.values(l.rb)),productCategory:c().string,widgetSubType:c().string,onAddedToCart:c().func,metricsFields:c().shape({experimentModelId:c().string,experimentWeblabId:c().string,referrerType:c().string,referrerValue:c().string,numContent:c().number,seasModelTimestamp:c().number,contentPosition:c().number})},d.dw),{},{productInfoAlign:c().oneOf(["left","right","center"])}),M=function(e){var o=e.asin,t=e.availabilityStatus,n=e.availabilityPrimaryMessage,i=e.backgroundColor,a=e.bestSellers,c=e.className,s=void 0===c?"":c,d=e.hasVariations,f=e.href,T=e.image,S=e.isASINShowcaseOpen,I=e.isAuthorStore,N=void 0!==I&&I,M=e.onOpenShowcase,D=e.parentOverlayVisible,B=void 0!==D&&D,L=e.productType,Z=void 0===L?"default":L,E=e.title,R=e.showAddToCart,G=void 0===R||R,H=e.showRating,U=void 0===H||H,V=e.strategy,z=e.metricsFields,K=void 0===z?{}:z,Q=e.productCategory,W=e.accoladesBadge,$=e.onAddedToCart,F=e.productInfoAlign,X=e.lucidItemProps,J=e.popoverContent,Y=e.isCPLImprovementEnabled,ee=(0,b.KR)(),oe=ee.themeContext,te=ee.configOverride,re=ee.widgetType,ne=A((0,r.useState)(!1),2),ie=ne[0],ae=ne[1],ce=(0,b.XA)(),le=A((0,h.ux)(j(j({},e),{},{onAddedToCart:$})),3),se=le[0],ue=le[1],de=le[2],pe=K.referrerType,_e=void 0===pe?"":pe,me=K.referrerValue,ge=void 0===me?"":me,be=K.numContent,ve=void 0===be?null:be,fe=K.seasModelTimestamp,he=void 0===fe?null:fe,ye=K.contentPosition,ke=void 0===ye?null:ye,Pe=K.experimentModelId,Oe=void 0===Pe?"":Pe,we=K.experimentWeblabId,Ce=void 0===we?"":we,Ae={asin:o,widgetSubType:"Product",tileId:"Product-".concat(o),seasModelId:Oe,weblabId:Ce,referrerType:_e,referrerValue:ge,numContent:ve,seasModelTimestamp:he,contentPosition:ke},Te=(0,v.p_)(j({product:e},Ae)),Se=(0,v.D$)(j(j({},Ae),{},{clickType:u.uh.DETAILPAGE})),je=(0,v.D$)(j(j({},Ae),{},{clickType:u.uh.ADDTOCART})),Ie=(0,v.D$)(j(j({},Ae),{},{clickType:u.uh.QUICKLOOK}));if("default"===Z||"product-grid-item"===Z)return(0,C.jsx)(g.Z,j({index:0},e));var qe=oe.caller,xe=oe.productGridType,Ne=void 0===xe?l.U4.STANDARD:xe,Me=oe.showBestSellerBadge,De=oe.showDealsAndCoupons,Be=oe.grids[Ne],Le=Be.productGridImageMobileScale,Ze=Be.productTileOverlayOpacity,Ee=Be.productTileOverlayOpacityIncreaseOnHover,Re=Be.productTileOverlayBGColor,Ge=(0,y.ZP)(V,Q,ee),He=null!=te&&te.productOverride?(0,y.pz)(te.productOverride,Ge):Ge,Ue=He.useQuickLook,Ve=He.showDeals,ze=He.showPrimeBenefitMessage,Ke=He.disableShadow,Qe=He.showBestSellerBadge,We=He.imageContainerClassName,$e=void 0===We?"":We,Fe=He.productInfoClassName,Xe=void 0===Fe?"":Fe,Je=He.productContentClassName,Ye=void 0===Je?"":Je,eo=He.productOuterClassName,oo=void 0===eo?"":eo,to=Qe&&Me,ro="".concat(Z,"-").concat(re),no=(0,m.NY)({asin:o,href:f},d,qe),io=1.1*oe.productGridMaxImageWidth,ao=1.1*oe.productGridMaxImageHeight;return(0,C.jsxs)("li",j(j({className:q(Y?"product-outer__improved":"product-outer","product-outer--".concat(Z),s,oo,{"product-outer-disable-shadow":Ke||Y,"improved-large-container":Y}),onClick:function(e){if((null==e?void 0:e.target.getAttribute("data-click-type"))===u.uh.ADDTOCART)je();else x(ro,o,"click-product"),Se()},onMouseOver:function(){return ae(!0)},onMouseOut:function(){return ae(!1)},onFocus:function(){return ae(!0)},onBlur:function(){return ae(!1)},title:E,ref:Te},X),{},{children:[!B&&(0,C.jsx)(p.Z,{className:q("product__overlay"),id:o,backgroundColor:Re||i,opacity:Ze,opacityIncreaseOnHover:Ee,hovered:ie,title:E,ariaLabel:"view product",role:"link",href:no}),de,to&&(0,C.jsx)("div",{className:q("best-seller-container"),children:(0,C.jsx)(_.Z,{className:q({"author-store-badge":N}),needPlaceholder:!0,bestSellers:a,accoladesBadge:W,availability:{status:t,message:n,url:no},squareBadgeStyleEnabled:Y})}),(0,C.jsxs)("div",{className:q("item__contents","item__contents--".concat(Z),Ye),children:[(0,C.jsxs)("div",{className:q("product__image-container",{"product__image-container-improved-mobile":Y&&ce},$e),children:[(0,C.jsx)(O.Z,{hovered:ie,detailPageUrl:no,imageSrc:T,imageMaxWidth:io,imageMaxHeight:ao,imageMobileScale:Le,title:E,bestSellerBadge:!Y||to&&!0===(null==a?void 0:a.hasBadge),isCPLImprovementEnabled:Y}),Ue&&(0,C.jsx)("div",{className:q("quick-look","quick-look--".concat(Z),{visible:ie||ce,"quick-look--bottom-large":Y}),children:(0,C.jsx)(k.Z,{mobile:ce,onClick:function(e){e.stopPropagation(),x(ro,o,"open-quicklook"),Ie(),M&&M(o)},isASINShowcaseOpen:S,productTitle:E,icon:Y?(0,C.jsx)(P.Z,{className:q("quick-look-icon")}):void 0,className:Y?q("quick-look-content"):void 0})})]}),(0,C.jsx)(w.Z,{availabilityStatus:t,availabilityPrimaryMessage:n,configuration:He,strategy:V,showAddToCart:G,showDeals:De&&Ve,productType:Z,clickProps:{onClick:function(){return!0},href:no},overlayHref:no,productProps:j(j({},e),{},{onAddToCartLoading:se,onAddToCartResponse:ue,flash:de}),showRating:U,showPrimeBenefitMessage:ze,className:q(Xe),productInfoAlign:F,popoverContent:J,isCPLImprovementEnabled:Y})]})]}))};M.propTypes=N,M.defaultProps={onAddedToCart:function(){return null}};var D=(0,f.o)(M)},2883:function(e,o,t){t.d(o,{Z:function(){return r.Z}});var r=t(71235)}}]);