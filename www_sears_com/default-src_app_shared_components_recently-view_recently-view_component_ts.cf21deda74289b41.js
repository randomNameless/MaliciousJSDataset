"use strict";(self.webpackChunkfirestorm=self.webpackChunkfirestorm||[]).push([["default-src_app_shared_components_recently-view_recently-view_component_ts"],{6778:(S,_,l)=>{l.d(_,{D:()=>f});var w=l(3225),e=l(3184),x=l(5857),h=l(1949),y=l(8914),a=l(6362),m=l(3763),C=l(5473);function T(i,o){if(1&i&&e._UZ(0,"div",22),2&i){const t=e.oxw(5);e.s9C("title",t.productName),e.Q6J("innerHTML",t.productNameTrim,e.oJD)}}function O(i,o){if(1&i&&e._UZ(0,"div",23),2&i){const t=e.oxw(5);e.Q6J("innerHTML",t.productName,e.oJD)}}function P(i,o){if(1&i&&(e.TgZ(0,"span",24),e.TgZ(1,"span",25),e._uU(2,"\u22c6"),e.qZA(),e._uU(3,"\u22c6 "),e.qZA()),2&i){const t=o.fill;e.ekj("full",100===t),e.xp6(1),e.Udp("width",t,"%")}}function A(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"ngb-rating",26),e.NdJ("rateChange",function(s){return e.CHM(t),e.oxw(5).rate=s}),e.qZA()}if(2&i){e.oxw();const t=e.MAs(8),n=e.oxw(4);e.Q6J("rate",n.rate)("starTemplate",t)("readonly",!0)("max",5)}}function c(i,o){1&i&&(e.TgZ(0,"span",29),e._uU(1,"reviews for this product"),e.qZA())}function d(i,o){if(1&i&&(e.TgZ(0,"span",27),e._uU(1),e.YNc(2,c,2,0,"span",28),e.qZA()),2&i){const t=e.oxw(3).$implicit;e.xp6(1),e.hij("(",null==t?null:t.review_count,")"),e.xp6(1),e.Q6J("ngIf",(null==t?null:t.review_count)>0)}}function M(i,o){if(1&i&&(e.TgZ(0,"div",30),e._uU(1),e.qZA()),2&i){const t=e.oxw(3).$implicit;e.xp6(1),e.hij("Sold by ",null==t?null:t.item_sold_by,"")}}function p(i,o){if(1&i&&(e.TgZ(0,"div"),e.TgZ(1,"div",10),e._UZ(2,"img",11),e.qZA(),e.TgZ(3,"div",12),e.YNc(4,T,1,2,"div",13),e.YNc(5,O,1,1,"div",14),e.qZA(),e.TgZ(6,"div",15),e.YNc(7,P,4,4,"ng-template",null,16,e.W1O),e.YNc(9,A,1,4,"ngb-rating",17),e.TgZ(10,"span",18),e.YNc(11,d,3,2,"span",19),e.qZA(),e.qZA(),e.TgZ(12,"div",20),e.YNc(13,M,2,1,"div",21),e.qZA(),e.qZA()),2&i){const t=e.oxw(2).$implicit,n=e.oxw(2);e.xp6(2),e.s9C("alt",null==t?null:t.title),e.Q6J("src",n.manipulateImageUrl(null==t?null:t.item_image_url),e.LSH),e.xp6(2),e.Q6J("ngIf",n.isProductNameTrim),e.xp6(1),e.Q6J("ngIf",!n.isProductNameTrim),e.xp6(4),e.Q6J("ngIf",n.rate>0),e.xp6(2),e.Q6J("ngIf",(null==t?null:t.review_count)>0),e.xp6(2),e.Q6J("ngIf",null==t?null:t.item_sold_by)}}function g(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit;return e.oxw(2).navigation(s)}),e.YNc(1,p,14,7,"div",1),e.qZA()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.details(t))}}function v(i,o){if(1&i&&(e.ynx(0),e.YNc(1,g,2,1,"ng-template",8),e.BQk()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("id",null==t?null:t.item_id)}}function u(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",2),e.TgZ(2,"div"),e.TgZ(3,"div",3),e._uU(4,"Recently Viewed"),e.qZA(),e.TgZ(5,"owl-carousel-o",4,5),e.NdJ("click",function(){return e.CHM(t),e.MAs(6).stopAutoplay()}),e.ynx(7,6),e.YNc(8,v,2,1,"ng-container",7),e.BQk(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(5),e.Q6J("options",t.recentlyViewOptionsConfig)("ngClass",t.isDesktop&&t.recentlyViewList.length<7?"adjust-carousel-width":""),e.xp6(3),e.Q6J("ngForOf",t.recentlyViewList)}}let f=(()=>{class i{constructor(t,n,s){this.router=t,this.analyticsService=n,this.config=s,this.recentlyViewOptionsConfig=w.Qs,this.analyticsListCount=0,this.recentlyViewList=[]}ngOnInit(){var t;this.recentlyViewList=[],window.innerWidth>991?this.isDesktop=!0:(this.recentlyViewOptionsConfig.loop=!0,this.recentlyViewOptionsConfig.autoplay=!1,this.recentlyViewOptionsConfig.autoplayTimeout=3e3,this.recentlyViewOptionsConfig.autoplayHoverPause=!0,this.recentlyViewOptionsConfig.navSpeed=300),this.recentlyViewList=JSON.parse(localStorage.getItem("recently_viewed_item")),this.isDesktop&&(null===(t=this.recentlyViewList)||void 0===t?void 0:t.length)>6&&(this.recentlyViewOptionsConfig.loop=!0,this.recentlyViewOptionsConfig.autoplay=!1,this.recentlyViewOptionsConfig.autoplayTimeout=3e3,this.recentlyViewOptionsConfig.autoplayHoverPause=!0,this.recentlyViewOptionsConfig.navSpeed=300),this.analyticsSetViewItemList(this.recentlyViewList)}navigation(t){let n={itemId:null!=t.item_id?t.item_id:t.item_ssin,item_part_num:t.item_ssin,item_ssin:"NA",main_item_ssin:"NA",item_type:"product",product_type:"individual",itemName:null==t?void 0:t.item_name,affiliation:"SEARS",coupon:"",currency:"USD",itemDiscount:"NA",index:0,itemBrand:null==t?void 0:t.item_brand,item_list_id:"recently_viewed_item",item_list_name:"recently_viewed_item",itemVariant:void 0,storeId:this.config.getStoreId(),itemPrice:"NA",quantity:1,categoryList:"",item_categories:"",item_sold_by:null==t?void 0:t.item_sold_by,item_price_string:"NA",item_fulfill_by:"NA",brandName:null==t?void 0:t.item_brand};this.analyticsService.setSelectItemEvent(n),this.router.navigateByUrl((null==t?void 0:t.item_url).substr((null==t?void 0:t.item_url).substr(null==t?void 0:t.item_url).indexOf(".com")+4))}details(t){var n;return this.rate=Number(null==t?void 0:t.review_rating),this.productName=null==t?void 0:t.item_name,(null===(n=this.productName)||void 0===n?void 0:n.length)>65?(this.isProductNameTrim=!0,this.productNameTrim=this.productName.substring(0,64)+"..."):this.isProductNameTrim=!1,!0}ngOnChanges(){this.CallAnalytics()}CallAnalytics(){this.recentlyViewList=JSON.parse(localStorage.getItem("recently_viewed_item"))}analyticsSetViewItemList(t){this.itemsList=[],null==t||t.forEach((n,s)=>{let r={item_id:null!=n.item_id?n.item_id:n.item_ssin,item_part_num:n.item_id,item_ssin:n.item_ssin,main_item_ssin:"NA",item_type:"product",product_type:"individual",item_name:n.item_name,affiliation:"SEARS",coupon:"",currency:"USD",discount:"NA",index:this.analyticsListCount++,item_brand:null==n?void 0:n.item_brand,item_category:"NA",item_category2:"NA",item_category3:"NA",item_category4:"NA",item_list_id:"recently_viewed_item",item_list_name:"recently_viewed_item",item_variant:void 0,location_id:this.config.getStoreId(),price:"NA",quantity:1,item_categories:"NA",item_sold_by:null==n?void 0:n.item_sold_by,price_string:"NA",item_fulfill_by:"NA"};this.itemsList.push(r)}),this.analyticsService.setViewItemListEvent(this.itemsList)}manipulateImageUrl(t){return t.includes("?")?t+"&hei=245&wid=245&op_sharpen=1&qlt=85":t+"?hei=245&wid=245&op_sharpen=1&qlt=85"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.F0),e.Y36(h.y),e.Y36(y.E))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recently-view"]],features:[e.TTD],decls:2,vars:1,consts:[[1,"recommendation-border-bottom"],[4,"ngIf"],[1,"recAndTsdiv"],["tabindex","0",1,"recommendedProducts","custom-h5"],[1,"review-slider",3,"options","ngClass","click"],["owlCar",""],[1,"product-slick"],[4,"ngFor","ngForOf"],["carouselSlide","",3,"id"],[1,"recAndTsItem",3,"click"],[1,"image-container"],["tabindex","0","width","245px","height","245px","loading","lazy",1,"img-fluid-product",3,"src","alt"],[1,"recAndTsTitleBlock"],["tabindex","0","class","recAndTsTitle",3,"title","innerHTML",4,"ngIf"],["tabindex","0","class","recAndTsTitle",3,"innerHTML",4,"ngIf"],[1,"product-rating"],["t",""],["aria-label","rating",3,"rate","starTemplate","readonly","max","rateChange",4,"ngIf"],["tabindex","0",1,"product-reviewBlock"],["class","product-review",4,"ngIf"],["tabindex","0",1,"soldByBlock"],["class","soldBy",4,"ngIf"],["tabindex","0",1,"recAndTsTitle",3,"title","innerHTML"],["tabindex","0",1,"recAndTsTitle",3,"innerHTML"],[1,"star"],[1,"half"],["aria-label","rating",3,"rate","starTemplate","readonly","max","rateChange"],[1,"product-review"],["class","sr-only",4,"ngIf"],[1,"sr-only"],[1,"soldBy"]],template:function(t,n){1&t&&(e._UZ(0,"div",0),e.YNc(1,u,9,3,"div",1)),2&t&&(e.xp6(1),e.Q6J("ngIf",n.recentlyViewList))},directives:[a.O5,m.Fy,a.mk,a.sg,m.Mp,C.OC],styles:[".youMayWantToCheckout[_ngcontent-%COMP%]{padding:10px;font-family:Lato!important;font-size:16px}h5[_ngcontent-%COMP%]{color:#001733}.recommendedProducts[_ngcontent-%COMP%], .topSelling[_ngcontent-%COMP%]{margin:0 0 -11px!important;font-weight:600!important;font-family:Lato!important;font-size:1.5rem!important;line-height:2.2rem!important;letter-spacing:normal}.recAndTsdiv[_ngcontent-%COMP%]{padding:10px}.recAndTsTitle[_ngcontent-%COMP%]{min-height:25px;font-size:15px;line-height:22px;color:#001733;margin-top:2px;overflow:hidden;max-width:100%;display:inline-block;font-weight:600px;font-family:Lato!important;height:65px}.recAndTsTitleBlock[_ngcontent-%COMP%]{background-color:#fff!important;margin-bottom:5px}.recAndTsItem[_ngcontent-%COMP%]{padding:10px;margin:10px}.product-rating[_ngcontent-%COMP%]{margin-top:-2px;height:35px;margin-bottom:10px}.star[_ngcontent-%COMP%]{position:relative;display:inline-block;font-size:2rem;color:#d3d3d3}.full[_ngcontent-%COMP%]{color:var(--link-text-color)}.half[_ngcontent-%COMP%]{position:absolute;display:inline-block;overflow:hidden;color:var(--link-text-color)}.product-review[_ngcontent-%COMP%]{margin-top:15px!important;margin-left:5px!important;color:var(--theme-bg-color)}.image-container[_ngcontent-%COMP%]{max-width:-moz-max-content;max-width:max-content;height:140px;background-repeat:no-repeat!important;background-size:200px 200px!important;margin:auto}.img-fluid-product[_ngcontent-%COMP%]{max-width:100%;height:120px}.image-cls[_ngcontent-%COMP%]{width:100%!important}@media (max-width: 991px){.img-fluid-product[_ngcontent-%COMP%]{max-width:100%;height:-webkit-fill-available}.image-container[_ngcontent-%COMP%]{height:200px}}.sale-new-block[_ngcontent-%COMP%]{min-height:30px;background-color:#fff!important}.map-display[_ngcontent-%COMP%]{color:#001733;font-size:14px;line-height:20px;text-align:left;font-weight:600}.price-block[_ngcontent-%COMP%]{min-height:1px;height:50px;background-color:#fff!important}.checkedClass[_ngcontent-%COMP%]{text-decoration:line-through!important}.final-price-display[_ngcontent-%COMP%]{color:#d01833;font-size:20px;font-weight:600}.samePriceClass[_ngcontent-%COMP%]{color:#000}  .recommendation-border-bottom{border-top:1px solid #dddddd;margin:15px 0}.soldBy[_ngcontent-%COMP%]{font-size:13px!important;color:#001733!important;margin-top:.6rem;font-weight:500}.soldByBlock[_ngcontent-%COMP%], .product-reviewBlock[_ngcontent-%COMP%]{background-color:#fff!important}.money[_ngcontent-%COMP%]{color:#737373!important}@media screen and (min-width: 420px){.recAndTsItem[_ngcontent-%COMP%]{padding:10px 3px}}owl-carousel-o.adjust-carousel-width[_ngcontent-%COMP%]     .owl-stage .owl-item{width:189.857px!important}@supports (-webkit-touch-callout: none){.recAndTsTitle[_ngcontent-%COMP%]{margin-top:50px}}"]}),i})()},3225:(S,_,l)=>{l.d(_,{Br:()=>d,L8:()=>f,NE:()=>g,N_:()=>p,Qs:()=>u,c0:()=>i,gw:()=>v,lz:()=>c});let c={items:1,nav:!0,dots:!1,autoplay:!1,slideSpeed:300,loop:!0,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},d={items:5,loop:!0,margin:10,dots:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,nav:!0,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},p={items:1,loop:!0,margin:10,dots:!0},g={loop:!0,dots:!0,items:1,margin:10,navSpeed:300,nav:!0,itemsDesktop:!1,itemsDesktopSmall:!1,itemsTablet:!0,itemsMobile:!0,responsive:{991:{items:1},767:{items:1},420:{items:1},0:{items:1}},navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},v={loop:!0,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,dots:!1,navSpeed:300,responsive:{991:{items:7,slideBy:4},850:{items:5},767:{items:4},420:{items:2},0:{items:1}},nav:!0,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},u={dots:!1,responsive:{991:{items:7,slideBy:3},850:{items:5},767:{items:4},420:{items:2},0:{items:1}},nav:!0,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},f={loop:!1,margin:10,dots:!1,navSpeed:300,responsive:{991:{items:8},850:{items:5},767:{items:4},420:{items:3},370:{items:2},300:{items:2},0:{items:2}},nav:!0,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']},i={loop:!0,margin:10,dots:!0,navSpeed:300,responsive:{991:{items:1},850:{items:1},767:{items:1},420:{items:1},370:{items:1},300:{items:1},0:{items:1}},nav:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']}}}]);