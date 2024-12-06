window.phoenix&&(window.phoenix.buildInfo||(window.phoenix.buildInfo=[]),-1===window.phoenix.buildInfo.findIndex((t=>"Phoenix-unav"===t.MFE))&&window.phoenix.buildInfo.push({MFE:"Phoenix-unav",VERSION:"rc-phoenix-unav-1.1.7808.1505897031-2cde2570-2-g5e3c706",LASTCOMMITDATETIME:"2024-10-22T20:02:26+00:00"}))
/*!
 * 
 *         ============= BUILD INFO =============
 *         MFE: Phoenix-unav
 *         chunkName: component-clientlibs/utility-cart.v1/utility-cart
 *         VERSION: rc-phoenix-unav-1.1.7808.1505897031-2cde2570-2-g5e3c706
 *         BRANCH: HEAD
 *         COMMITHASH: 5e3c706804bdb77447d7582dd987da25b4b9f8e0
 *         LASTCOMMITDATETIME: 2024-10-22T20:02:26+00:00
 *         ============= If you're reading this, why not come work with us? https://www.t-mobile.com/careers =============
 */,function(){"use strict";const t={appName:"phoenix-unav",className:"utility-cart"},e="tmobglobalshareddata";window.Alpine?.data("unavCart",(()=>({ariaLabelCart:"Cart",getUnavCartCookieName(){const t=this.$el?.querySelector("[data-unav-cart-cookie]");return window.unavConfig?.cartCookie?window.unavConfig.cartCookie:t&&t?.getAttribute("data-unav-cart-cookie")||e},init(){this.updateCart(),window.addEventListener("unavBadgeEvent",(t=>{"cart"===t.detail&&this.updateCart()}))},updateCart(){const e=this.getUnavCartCookieName(),a=this.$el?.querySelector("[data-unav-cart-cookie]"),i=window.Cookies.get(e);if(a&&e&&i&&"string"==typeof i)try{const t=JSON.parse(i),e=parseInt(t.cartCounter||"0",10);e>0?(a.textContent=e.toString(),this.ariaLabelCart=`Cart, ${e} item${1!==e?"s":""} in cart`,a.setAttribute("aria-hidden","false")):a.setAttribute("aria-hidden","true")}catch(e){window.phoenix.log.error("Could not load cart counter",t,{exception:e}),a.setAttribute("aria-hidden","true")}}})))}();