import{g as R,p as _,x as g,_ as y,j as q,u as m,F as w,C as S,i as b,q as E,a as O,b as L,m as A,r as H,c as I,d as M,o as h,O as k}from"./stylex-DK_e91Ls.js";const F=()=>document.querySelector("cart-drawer"),N=()=>document.querySelector(".order-value-booster-side-cart"),$=()=>{const t=document.querySelectorAll("cart-notification .cart-notification__links");return t[t.length-1]},G=()=>{const t=document.querySelectorAll(".side-cart");return t[t.length-1]},U=()=>document.querySelector('form[action$="/cart"]'),B=()=>N()||$()||G()||U(),f=()=>F()||B(),x=({defaultPlacementSelectors:t})=>{for(const e of t){const r=document.querySelector(e);if(r)return r}return null},Q=({isFallbackActive:t})=>t?R()||document.querySelector("product-info"):null,V=({defaultPlacementSelectors:t,isFallbackActive:e})=>x({defaultPlacementSelectors:t})||Q({isFallbackActive:e}),Y=({setPortalContainer:t,defaultPlacementSelectors:e,isFallbackActive:r})=>{const l=V({defaultPlacementSelectors:e,isFallbackActive:r});return l?(t(l),()=>{t(null)}):null},C=({selectors:t})=>t.map(e=>Array.from(document.querySelectorAll(e))).flat(),P=({appBlockSelectors:t,manualBlockSelectors:e,defaultPlacementSelectors:r,isFallbackActive:l})=>{const[o,n]=_(null),s=g(()=>{const i=f(),c=C({selectors:t});return Array.from(c).some(d=>i?!i.contains(d):!0)?null:Y({setPortalContainer:n,defaultPlacementSelectors:r,isFallbackActive:l})},[t,r,l]),a=g(()=>{const i=f(),u=C({selectors:e}).find(d=>i?!i.contains(d):!1);if(u){n(u);return}return s()},[s,e]);return y(a,[a]),{productPagePortalContainer:o}},z=({funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o})=>{const{productPagePortalContainer:n}=P({appBlockSelectors:["essential-upsell-cross-sell-app-block"],manualBlockSelectors:[".essential-upsell-cross-sell-block",".essential-upsell-block"],defaultPlacementSelectors:[".essential-upsell-cross-sell-default-placement",".essential-upsell-default-placement"],isFallbackActive:!!e});return n?q(m(w,{funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o}),n):null},J=()=>document.querySelector("cart-items.page-width")||document.querySelector("cart-items .page-width")||document.querySelector("cart-items"),v=({funnel:t,element:e,setPortalContainer:r})=>{const l=document.createElement("div");return t.placement.cartPagePositionType===S.TOP_OF_THE_CART?e.prepend(l):t.placement.cartPagePositionType===S.BOTTOM_OF_THE_CART&&e.append(l),r(l),()=>{r(null),l.remove()}},D=({funnel:t,element:e,setPortalContainer:r})=>{if(t.placement.cartPagePositionType===S.TOP_OF_THE_CART){const l=e.querySelector(".essential-upsell-side-cart-top");if(l)return r(l),()=>{r(null)};if(e.querySelector("cart-drawer-items.is-empty")){r(null);return}const o=e.querySelector("cart-drawer-items:not(.is-empty)")||e.querySelector(".drawer__scrollable");if(o){const s=document.createElement("div");return o.append(s),r(s),()=>{r(null),s.remove()}}const n=document.createElement("div");return e.prepend(n),r(n),()=>{r(null),n.remove()}}else if(t.placement.cartPagePositionType===S.BOTTOM_OF_THE_CART){const l=e.querySelector(".essential-upsell-side-cart-bottom");if(l)return r(l),()=>{r(null)};const o=e.querySelector(".drawer__footer");if(o){const s=document.createElement("div");return o.prepend(s),r(s),()=>{r(null),s.remove()}}const n=document.createElement("div");return e.append(n),r(n),()=>{r(null),n.remove()}}},K=()=>{if(!b())return null;const t=document.querySelectorAll('form[action$="/cart"]'),e=t[t.length-1];return e?e.parentNode:null},W=({funnel:t,setPortalContainer:e})=>{const r=J();if(r)return v({funnel:t,element:r,setPortalContainer:e});const l=F();if(l)return D({funnel:t,element:l,setPortalContainer:e});const o=K();if(o)return v({funnel:t,element:o,setPortalContainer:e});const n=B();if(n)return D({funnel:t,element:n,setPortalContainer:e})},X=({funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o})=>{const[n,s]=_(null),a=g(()=>{const c=b()?document:f();return c&&c.querySelector("essential-upsell-cross-sell-app-block")?null:W({funnel:t,setPortalContainer:s})},[t]),i=g(()=>{const c=b()?document:f(),u=c&&(c.querySelector(".essential-upsell-cross-sell-block")||c.querySelector(".essential-upsell-block"));if(u){s(u);return}return a()},[a]);return y(i,[i]),y(()=>{if(!n)return;const c=f();if(!c)return;const u=new MutationObserver(d=>{d.some(T=>Array.from(T.removedNodes).some(p=>p.contains(n)))&&(s(null),n.remove(),i())});return u.observe(c,{childList:!0,subtree:!0}),()=>{u.disconnect()}},[i,n]),y(()=>{if(n)return;const c=F();if(!c)return;const u=new MutationObserver(d=>{d.some(T=>Array.from(T.addedNodes).some(p=>!(p instanceof Element)||!p.querySelector?!1:p.querySelector("cart-drawer-items:not(.is-empty)")))&&a()});return u.observe(c,{childList:!0,subtree:!0}),()=>{u.disconnect()}},[a,n]),n?q(m(w,{funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o}),n):null},Z=({funnels:t,productPageProduct:e,productPageCollectionIds:r,cartItems:l,firstShopProductId:o,shopMoneyFormat:n})=>{const s=E(()=>O({funnels:t,productPageProduct:e,productPageCollectionIds:r}),[t,e,r]),a=E(()=>L({funnels:t,cartItems:l}),[t,l]);return m(A,{children:[s&&m(z,{funnel:s,productPageProduct:e,cartItems:l,firstShopProductId:o,shopMoneyFormat:n}),a&&m(X,{funnel:a,productPageProduct:e,cartItems:l,firstShopProductId:o,shopMoneyFormat:n})]})},ee=({funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o})=>{const{productPagePortalContainer:n}=P({appBlockSelectors:["essential-upsell-frequently-bought-together-app-block"],manualBlockSelectors:[".essential-upsell-frequently-bought-together-block"],defaultPlacementSelectors:[".essential-upsell-frequently-bought-together-default-placement",".essential-upsell-default-placement"],isFallbackActive:!!e});return n?q(m(w,{funnel:t,productPageProduct:e,cartItems:r,firstShopProductId:l,shopMoneyFormat:o}),n):null},te=({funnels:t,productPageProduct:e,productPageCollectionIds:r,cartItems:l,firstShopProductId:o,shopMoneyFormat:n})=>{const s=E(()=>O({funnels:t,productPageProduct:e,productPageCollectionIds:r}),[t,e,r]);return s?m(ee,{funnel:s,productPageProduct:e,cartItems:l,firstShopProductId:o,shopMoneyFormat:n}):null},re=t=>{const{funnels:e,productPageCollectionIds:r,cartItems:l,firstShopProductId:o,productPageProduct:n,shopMoneyFormat:s}=I({liquidProps:t}),{cartItems:a}=M({liquidCartItems:l}),i=E(()=>e.filter(u=>h({funnel:u})===k.FREQUENTLY_BOUGHT_TOGETHER),[e]),c=E(()=>e.filter(u=>h({funnel:u})===k.CROSS_SELL),[e]);return m(A,{children:[m(te,{funnels:i,productPageProduct:n,productPageCollectionIds:r,cartItems:a,firstShopProductId:o,shopMoneyFormat:s}),m(Z,{funnels:c,productPageProduct:n,productPageCollectionIds:r,cartItems:a,firstShopProductId:o,shopMoneyFormat:s})]})};H(re,"essential-upsell-app-embed",["upsellAppData","productPageProduct","productPageCollectionIds","cartItems","firstShopProductId","shopMoneyFormat"]);
