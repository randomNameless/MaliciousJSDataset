function subscribeOnBodlEvents(n,e,t,o){window.dataLayer=window.dataLayer||[];var i;window&&void 0!==window.bodlEvents&&(!function(){if(t){var n,e={advertising:!1,analytics:!1,functional:!1};n=i(e),o&&(n.wait_for_update=1e3),c("consent","default",n),void 0!==window.bodlEvents.consent&&("function"==typeof window.bodlEvents.consent.loaded&&window.bodlEvents.consent.loaded((function(n){var t;t=n,Object.keys(e).some((function(n){return e[n]!==t[n]}))&&c("consent","update",i(n))})),"function"==typeof window.bodlEvents.consent.updated&&window.bodlEvents.consent.updated((function(n){c("consent","update",i(n))})))}function i(n){var e={advertising:["ad_storage","ad_user_data","ad_personalization"],analytics:["analytics_storage"],functional:["functionality_storage"]},t={};return Object.keys(n).forEach((function(o){var i=e[o],c=n[o]?"granted":"denied";Array.isArray(i)&&i.forEach((function(n){t[n]=c}))})),t}}(),(i=document.createElement("script")).src="https://www.googletagmanager.com/gtag/js?id="+n,i.async=!0,document.head.appendChild(i),c("js",new Date),c("set","developer_id."+e,!0),c("config",n),d(),function(){if(void 0!==window.bodlEvents.cart){var n="view_cart",e="add_to_cart",t="remove_from_cart";"function"==typeof window.bodlEvents.cart.viewed&&window.bodlEvents.cart.viewed((function(e){c("event",n,o(e))})),"function"==typeof window.bodlEvents.cart.addItem&&window.bodlEvents.cart.addItem((function(n){c("event",e,o(n))})),"function"==typeof window.bodlEvents.cart.removeItem&&window.bodlEvents.cart.removeItem((function(n){c("event",t,o(n))}))}function o(n){var e={currency:n.currency,items:Array.isArray(n.line_items)?n.line_items.map(a):[]};return e.value=n.product_value||n.cart_value||e.items.reduce((function(n,e){return n+e.price*e.quantity}),0),r(e)}}(),u(),s());function c(){dataLayer.push(arguments)}function r(e){return Object.assign({},e,{send_to:n})}function a(n,e){var t=n.discount||0,o=n.coupon_amount||0,i={item_id:n.sku||n.variant_sku||n.product_sku||n.variant_id||n.product_id,item_name:n.product_name,discount:t+o,currency:n.currency,index:void 0!==n.index?n.index:e,item_brand:n.brand_name,item_variant:n.sku||n.variant_sku||n.product_sku||n.product_id,quantity:n.quantity};if(n.category_name)i.item_category=n.category_name;else if(n.category_names&&Array.isArray(n.category_names)){n.category_names.slice(0,5).forEach((function(n,e){i["item_category"+(e?e+1:"")]=n}))}return n.purchase_price?i.price=n.purchase_price:i.price=n.sale_price>0?n.sale_price:n.price,n.coupon&&(i.coupon=n.coupon),i}function d(){var n="begin_checkout",e="purchase",t="add_shipping_info",o="add_payment_info";function i(n){var e=Array.isArray(n.coupon_codes)&&n.coupon_codes.length?n.coupon_codes[0]:n.coupon,t={currency:n.currency,value:n.cart_value,items:n.line_items.map((function(n,t){return e&&(n.coupon=e),a(n,t)}))};return e&&(t.coupon=e),r(t)}void 0!==window.bodlEvents.checkout&&("function"==typeof window.bodlEvents.checkout.checkoutBegin&&window.bodlEvents.checkout.checkoutBegin((function(e){c("event",n,function(n){return r(i(n))}(e))})),"function"==typeof window.bodlEvents.checkout.orderPurchased&&window.bodlEvents.checkout.orderPurchased((function(n){c("event",e,function(n){var e=i(n),t={transaction_id:n.order_id||n.transaction_id,shipping:n.shipping_cost};return n.tax&&(t.tax=n.tax),r(Object.assign(e,t))}(n))})),"function"==typeof window.bodlEvents.checkout.shippingDetailsProvided&&window.bodlEvents.checkout.shippingDetailsProvided((function(n){c("event",t,function(n){var e=i(n),t={shipping_tier:n.shipping_method};return r(Object.assign(e,t))}(n))})),"function"==typeof window.bodlEvents.checkout.paymentDetailsProvided&&window.bodlEvents.checkout.paymentDetailsProvided((function(n){c("event",o,function(n){var e=i(n),t={payment_type:n.payment_type};return r(Object.assign(e,t))}(n))})))}function u(){if(void 0!==window.bodlEvents.product){var n="view_item",e="view_item_list",t="search";"function"==typeof window.bodlEvents.product.pageViewed&&window.bodlEvents.product.pageViewed((function(e){c("event",n,function(n){var e=n.line_items&&n.line_items.map((function(n){var e=a(n);return delete e.quantity,e})),t=e&&e[0]||{};return r({value:t.price,currency:t.currency,items:e})}(e))})),"function"==typeof window.bodlEvents.product.categoryViewed&&window.bodlEvents.product.categoryViewed((function(n){c("event",e,function(n){return r({item_list_id:n.category_id,item_list_name:n.category_name,items:n.line_items&&n.line_items.map((function(n){var e=a(n);return delete e.quantity,e}))})}(n))})),"function"==typeof window.bodlEvents.product.searchPerformed&&window.bodlEvents.product.searchPerformed((function(n){c("event",t,function(n){return r({search_term:n.search_keyword})}(n))}))}}function s(){if(void 0!==window.bodlEvents.banner){var n="view_promotion";"function"==typeof window.bodlEvents.banner.viewed&&window.bodlEvents.banner.viewed((function(e){c("event",n,function(n){return r({promotion_id:"banner_"+n.banner_id,promotion_name:n.banner_name})}(e))}))}}}
//# sourceMappingURL=google_analytics4-1c2b7be4d55eec47587da63febce263d4592b327.js.map