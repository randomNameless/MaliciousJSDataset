(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8545],{42422:function(e,t){"use strict";var n,i;(i=n||(n={}))[i.desktopDeployTime=5e3]="desktopDeployTime",i[i.mobileDeployTime=1e4]="mobileDeployTime",i.mobileLabel="_modal_mobile",i.desktopLabel="_exit_intent",i.subscribedCookieKey="patch_email_mobile_modal_sent",i.subscribedPatchAmCookieKey="patcham_email_mobile_subscribed_patches",i.dismissedCookieKey="patch_email_mobile_modal_dismissed",t.Z=n},40145:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var i,r=n(67294),o=n(58675),a=n(42422),c=n(9229),l=n(79608),s=n(27175),u=n(74566),d=n(54117),h=n(9905),_=n(47568),f=n(26042),m=n(70655),p=n(5121),b=n(1604),y=n(68819),v=n.n(y),S=n(81187),g=b.z.object({latitude:b.z.number().nullable(),longitude:b.z.number().nullable(),locationAccuracyRadius:b.z.number().nullable(),resolvedCity:b.z.string().nullable(),resolvedCountry:b.z.string().nullable(),patch:v().nullable()}),Z=(0,S.Z)(),C=Z.FEATURES.GEOLOCATION_REQUEST_ENABLED,k=Z.URLS.PATCH_GEO_LOCATION_API_URL,w=(i=(0,_.Z)(function(){var e,t,n,i;return(0,m.__generator)(this,function(r){switch(r.label){case 0:if(!C)return[2,null];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,p.Z.get("".concat(k,"/ip"),{timeout:1500})];case 2:return e=r.sent().data,n=(t=g.parse(e)).patch?{patch_id_geolocation_resolved:t.patch.id,patch_name_geolocation_resolved:t.patch.name,geolocation_fufilled:!0}:{geolocation_fufilled:!1},window.gtag("event","geo_request_results",(0,f.Z)({location_accuracy_radius:t.locationAccuracyRadius,non_interaction:!0},n)),[2,t];case 3:return i=r.sent(),console.error("geolocation fetch error",i),[2,null];case 4:return[2]}})}),function(){return i.apply(this,arguments)});function A(){var e=(0,c.Z)(),t=(0,r.useRef)(e),n=(0,r.useContext)(o.Z).CONFIG,i=n.SUBSCRIBE_MODAL_POPUP_DELAY_DESKTOP,_=n.SUBSCRIBE_MODAL_POPUP_DELAY_MOBILE;(0,r.useEffect)(function(){t.current=e},[e]);var f=(0,l.Z)(),m=(0,s.Z)().showSubscribeForm,p=function(){if(f||t.current)return!1;var e,n=null===(e=document.querySelectorAll(".modal.show"))||void 0===e?void 0:e.length;return!(0,d.PS)()&&!n};(0,r.useEffect)(function(){if("email"===(0,h.q)("utm_medium")){(0,d.bF)(45);return}p()&&w().then(function(e){(0,u.Z)()?setTimeout(function(){m(a.Z.mobileLabel,null==e?void 0:e.patch)},_):setTimeout(function(){m(a.Z.desktopLabel,null==e?void 0:e.patch)},i)})},[])}},96506:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(10253),r=n(67294),o=n(25414),a=function(e){var t=(0,r.useRef)(),n=(0,r.useCallback)(function(n){if(n){var i=Array.from(n.querySelectorAll("a"));i.length&&i.forEach(function(t){return t.addEventListener("click",function(){var n,i,r=(null==e?void 0:null===(n=e.inContentClickAnalytics)||void 0===n?void 0:n.category)||t.getAttribute("category")||"in_content_click",a=(null==e?void 0:null===(i=e.inContentClickAnalytics)||void 0===i?void 0:i.label)||t.getAttribute("trigger")||t.href;(0,o.Z)("click",r,a)})}),t.current=n}},[]);return[t,n]},c=(0,n(81187).Z)().CONFIG.SCRIPT_LOAD_DELAY,l=function(e){c?setTimeout(e,c):e()},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement("script");n.defer=!0,n.src=e,Object.keys(t).forEach(function(e){n[e]=t[e]}),document.body.appendChild(n)},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l(function(){s(e,t)})},d=function(e){var t=e.dataset.src;t&&(e.removeAttribute("data-src"),e.setAttribute("src",t))},h=function(e){var t=e.dataset,n=t.sizes,i=t.src,r=t.srcset;n&&(e.removeAttribute("data-sizes"),e.setAttribute("sizes",n)),i&&(e.removeAttribute("data-src"),e.setAttribute("src",i)),r&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",r))},_=function(e){var t,n=e.dataset,i=n.playerId,r=n.videoId;u("https://content.jwplatform.com/libraries/".concat(i,".js"),{async:!0,onload:function(){var t=window.jwplayer(e);t.setup({playlist:"https://cdn.jwplayer.com/v2/media/".concat(r),autostart:!1,mute:!1}),t.on("ready",function(){(0,o.Z)("in_article_load","jwplayer","".concat(window.location.href,"?video=").concat(r,"-").concat(i,"&autoplay=false"),!0)})}})};function f(e){var t=(0,i.Z)(a(e),2),n=t[0],o=t[1];return(0,r.useEffect)(function(){if(n&&"IntersectionObserver"in window){var e=n.current.querySelectorAll("img"),t=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var n=e.target;h(n),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)});var i=n.current.querySelectorAll("iframe"),r=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var n=e.target;d(n),t.unobserve(n)}})});i.forEach(function(e){r.observe(e)});var o=n.current.querySelectorAll("[data-jwplayer]"),a=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){var n=e.target;_(n),t.unobserve(n)}})});o.forEach(function(e){a.observe(e)})}},[n]),[o]}},86050:function(e,t,n){"use strict";var i=n(35944),r=n(67294),o=n(84808),a=n(15861),c=n(87357),l=n(69661),s=n(27823),u=n(48362),d=n.n(u),h=n(50594),_=n(2548),f=function(e){var t=e.caption,n=e.credit;return(0,i.BX)("figcaption",{className:d().CardDetail__FeaturedImageCaption,children:[t&&"".concat(t," "),n&&"(".concat(n,")")]})},m=function(e){var t=e.caption,n=e.credit,r=e.onClose;return(0,i.tZ)(o.Z,{sx:{position:"absolute",height:"unset",bottom:0,top:"unset"},onClick:r,open:!0,children:(0,i.BX)(c.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between",width:"100%",minHeight:"100px"},children:[(0,i.tZ)(c.Z,{sx:{mb:"auto",ml:2,mt:2},children:(t||n)&&(0,i.BX)(a.Z,{variant:"caption",color:"common.white",children:[t&&"".concat(t," "),n&&"(".concat(n,")")]})}),(0,i.tZ)(c.Z,{sx:{mb:1,mr:2},children:(0,i.tZ)(h.Z,{onClick:r,sx:{color:"common.white",fontSize:"14"}})})]})})},p=function(e){var t=e.image,n=e.lazy,o=e.title,a=e.responsiveImageType,u=e.hasCaption,h=e.hasCaptionOverImage,p=void 0!==h&&h,b=(0,r.useState)(!1),y=b[0],v=b[1];return(0,i.BX)("figure",{children:[(0,i.BX)(c.Z,{sx:{position:"relative"},children:[(0,i.tZ)(s.Z,{alt:o,className:d().CardDetail__FeaturedImage,lazy:void 0!==n&&n,responsiveImageType:a||"CARD_DETAIL",src:t.url,width:"700",height:"525"}),void 0!==u&&u&&p&&(0,i.tZ)(i.HY,{children:y?(0,i.tZ)(m,{onClose:function(){return v(!1)},caption:t.caption,credit:t.credit}):(0,i.tZ)(l.Z,{sx:{position:"absolute",bottom:0,right:0,mb:1,mr:2,width:24,height:24,backgroundColor:"grey.700"},children:(0,i.tZ)(_.Z,{onClick:function(){return v(!0)},sx:{color:"common.white",fontSize:"14"}})})})]}),(t.caption||t.credit)&&!p&&(0,i.tZ)(f,{caption:t.caption,credit:t.credit})]})};t.Z=p},28464:function(e,t,n){"use strict";var i=n(35944),r=n(41773),o=n.n(r),a=function(e){var t=e.children;return(0,i.tZ)("div",{className:o().CardDetail__Footer,children:t})};t.Z=a},703:function(e,t,n){"use strict";var i=n(35944),r=n(42982),o=n.n(r),a=function(e){var t=e.children;return(0,i.tZ)("div",{className:o().CardDetail__Header,children:t})};t.Z=a},51168:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var i,r,o=n(10253),a=n(35944),c=n(67294),l=n(14677),s=n(62918),u=n(32135);(r=i||(i={})).hidden="hidden",r.idle="idle",r.sticky="sticky";var d=i,h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150,i=(0,c.useState)(d.idle),r=i[0],o=i[1];return(0,c.useEffect)(function(){var i=function(){if((null==e?void 0:e.current)&&(null==t?void 0:t.current)){var i=t.current.getBoundingClientRect().height,r=e.current.getBoundingClientRect(),a=r.height;if(!(i>a)){var c=r.top;c+a-i-n<0?o(d.hidden):n>c?o(d.sticky):o(d.idle)}}};return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}},[]),r},_=n(84187),f=n(26651),m=n.n(f),p=function(e){var t=e.children;return(0,a.tZ)("p",{className:m().Disclaimer,children:t})},b=n(81919),y=function(){return(0,a.BX)(p,{children:["To request removal of your name from an arrest report, submit"," ",(0,a.tZ)(b.Z,{href:"https://patch.com/us/across-america/how-remove-your-information-patch",target:"_blank",children:"these required items"})," ","to"," ",(0,a.tZ)(b.Z,{href:"mailto:arrestreports@patch.com",target:"_blank",children:"arrestreports@patch.com"}),"."]})},v=n(79025),S=n(51456),g=n(26042),Z=n(69396),C=n(99534),k=n(94184),w=n.n(k),A=n(25414),I=n(63987),E=n.n(I),N=function(e){var t=e.gaCategory,n=e.gaLabel,i=e.href,r=e.icon,o=e.label,c=e.type,l=e.onClick,s=(0,C.Z)(e,["gaCategory","gaLabel","href","icon","label","type","onClick"]),u=w()([E().SocialShare__Action,E()["SocialShare__Action--".concat(c)],]),d=(0,a.BX)(a.HY,{children:[(0,a.tZ)("i",{className:w()(["fa",r,E().SocialShare__Icon])}),o&&(0,a.tZ)("strong",{className:E().SocialShare__Label,children:o})]});if(l){var h=function(){(0,A.Z)("click",t,n),l()};return(0,a.tZ)("button",(0,Z.Z)((0,g.Z)({className:u,onClick:h,type:"button"},s),{children:d}))}return(0,a.tZ)(b.Z,(0,Z.Z)((0,g.Z)({className:u,gaCategory:t,gaLabel:n,href:i,target:"_blank"},s),{children:d}))},P=(0,c.forwardRef)(function(e,t){var n=e.description,i=e.status,r=e.titleEmail,o=e.titleSocial,c=e.url,l=(0,S.AK)(c,r,n),s=(0,S.m4)(c),u=(0,S.RS)(c),h=(0,S.t9)(c,o),_=(0,S.L)(c,o);return(0,a.BX)("div",{ref:t,className:"".concat(E().SocialShare," ").concat(i===d.hidden?E()["SocialShare--IsHidden"]:""," ").concat([d.hidden,d.sticky].includes(i)?E()["SocialShare--IsSticky"]:""),children:[(0,a.tZ)(N,{alt:"Share on Facebook",gaCategory:"social",gaLabel:"facebook",icon:"fa-facebook-f",href:s,title:"Share on Facebook",type:"facebook"}),(0,a.tZ)(N,{alt:"Tweet",gaCategory:"social",gaLabel:"twitter",icon:"fa-twitter",href:_,title:"Tweet",type:"twitter"}),(0,a.tZ)(N,{alt:"Post on LinkedIn",gaCategory:"social",gaLabel:"linkedin",icon:"fa-linkedin-in",href:u,title:"Post on LinkedIn",type:"linkedin"}),(0,a.tZ)(N,{alt:"Post on Nextdoor",gaCategory:"social",gaLabel:"nextdoor",icon:"fa-nextdoor",href:h,title:"Post on Nextdoor",type:"nextdoor"}),(0,a.tZ)(N,{alt:"Send email",gaCategory:"social",gaLabel:"email",icon:"fa-envelope",href:l,title:"Send email",type:"email"})]})});P.displayName="SocialShare";var T=function(e){var t=e.roleId,n=e.name;return(0,s.isUGC)(t)?(0,a.tZ)(p,{children:"This post was contributed by a community member. The views expressed here are the author's own."}):(0,s.isBrand)(t)?(0,a.BX)(p,{children:["This post is sponsored and contributed by ",n,", a Patch Brand Partner."]}):null},D=n(9229),x=n(27175),L=function(e){var t=e.isPatchDeals,n=e.roleId,i=e.name,r=(0,D.Z)(),o=(0,x.Z)().showRegistrationForm;if(t)return(0,a.tZ)(p,{children:"All prices and savings listed in this post are as of publication and could change. Patch may earn a commission on some purchased items."});if(n===s.RoleId.NewsPartner)return null;if(n===s.RoleId.BrandPartner)return(0,a.BX)(p,{children:["This post is sponsored and contributed by ",i,", a Patch Brand Partner."]});if(n===s.RoleId.PatchMayor)return(0,a.BX)(p,{children:["Patch Mayors are trusted local users who help moderate the Patch platform by promoting good local stories and flagging unwanted content. To learn more,"," ",(0,a.tZ)(b.Z,{href:"/us/across-america/love-your-town-volunteer-be-patch-mayor",children:"click here."})]});var c=function(){o()},l=r?(0,a.tZ)(b.Z,{href:"/compose",children:"Post now!"}):(0,a.tZ)("button",{className:"btn btn--link",type:"button",onClick:c,children:"Register for a user account."});return(0,a.BX)(p,{children:["The views expressed in this post are the author's own. Want to post on Patch? ",l]})},O=n(68167),U=n.n(O),B=function(e){var t=e.children,n=e.item,i=e.impressionTrackingLocation,r=n.canonicalUrl,d=n.summary,f=n.title,m=n.type,p=n.type===l.ContentType.article?n.titleEmail:f,b=n.type===l.ContentType.article?n.titleSocial:f,S=(0,c.useRef)(null),g=(0,o.Z)((0,_.Z)(n,i),2),Z=g[0],C=g[1],k=h(Z,S),w=n.type===l.ContentType.article&&((0,s.isPatchDealsAccount)(null==n?void 0:n.author.id)||!(0,s.isStaff)(null==n?void 0:n.author.rid)),A=n.type===l.ContentType.article&&n.topic.id===u.ff["police-fire"];return(0,a.BX)("section",{className:U().Section,children:[(0,a.tZ)(v.Z,{children:(0,a.tZ)(P,{description:d,ref:S,status:k,title:f,titleEmail:p,titleSocial:b,type:m,url:r})}),(0,a.tZ)(T,{roleId:null==n?void 0:n.author.rid,name:null==n?void 0:n.author.name}),(0,a.tZ)("article",{ref:C,className:U().Section__card,children:t}),w&&(0,a.tZ)(L,{isPatchDeals:(0,s.isPatchDealsAccount)(n.author.id),roleId:null==n?void 0:n.author.rid,name:null==n?void 0:n.author.name}),A&&(0,a.tZ)(y,{})]})}},52081:function(e,t,n){"use strict";var i=n(31752),r=n(38475),o=n(57428),a=[{type:o.W.ad,items:[{adUnit:r.Q$.desktopSlotOne},{adUnit:r.Q$.mobileSlotOne},]},{type:o.W.ad,items:[{adUnit:r.Q$.desktopSlotTwo},{adUnit:r.Q$.mobileSlotTwo},]},{type:o.W.ad,items:[{adUnit:r.Q$.desktopSlotThree},{adUnit:r.Q$.mobileSlotThree},]},{type:o.W.ad,items:[{adUnit:r.Q$.desktopSlotFour},]},],c=[o.W.latestNewsNearby,o.W.bestOf,],l=[o.W.featuredEvents,o.W.featuredClassifieds,o.W.latestNewsNearby,o.W.bestOf,o.W.realEstate,],s=[o.W.latestNewsNearby],u=[o.W.latestNewsNearby,o.W.bestOf,],d=[o.W.latestNewsNearby,o.W.bestOf,],h=function(e,t,n){var r,o,h,_,f,m,p,b=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0,2,4,6],v=(h=t.type,_=(0,i.isPatchTypeCommunity)(h),f=(0,i.isPatchTypeDeals)(h),m=(0,i.isPatchTypeNational)(h),p=(0,i.isPatchTypeState)(h),e.filter(function(e){var t=e.type,n=e.items;return(!c.includes(t)||!!n.length)&&(_?l.includes(t):f?s.includes(t):m?d.includes(t):!p||u.includes(t))}));return n?(a.map(function(e){var t={type:e.type,items:[]};return(e.items.forEach(function(e){b.includes(e.adUnit)||t.items.push(e)}),t.items.length>0)?t:null}).filter(function(e){return e}).forEach(function(e,t){var n=y[t];v.splice(n,0,e)}),v):v};t.Z=h},29720:function(e,t,n){"use strict";var i=n(35944),r=n(56892),o=n.n(r),a=function(e){var t=e.children;return(0,i.tZ)("div",{className:o().UnpublishedItem,children:(0,i.tZ)("div",{className:o().UnpublishedItem__text,children:t})})};t.Z=a},54117:function(e,t,n){"use strict";n.d(t,{PS:function(){return l},Uf:function(){return s},bF:function(){return c},dr:function(){return u},nG:function(){return a}});var i=n(31955),r=n(42422),o=(0,n(81187).Z)().CONFIG.DEFAULT_COOKIE_DOMAIN;function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;i.Z.set(r.Z.dismissedCookieKey,"true",{expires:e})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:365;i.Z.set(r.Z.subscribedCookieKey,"true",{expires:e})}function l(){return!!i.Z.get(r.Z.subscribedCookieKey)||!!i.Z.get(r.Z.dismissedCookieKey)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=(i.Z.get(r.Z.subscribedPatchAmCookieKey)||"").split(",");n.includes(e.toString())||n.push(e.toString()),i.Z.set(r.Z.subscribedPatchAmCookieKey,n.join(","),{domain:o,sameSite:"strict",expires:t})}function u(e){return(i.Z.get(r.Z.subscribedPatchAmCookieKey)||"").split(",").includes(e.toString())}},48362:function(e){e.exports={CardDetail__FeaturedImage:"styles_CardDetail__FeaturedImage__MlywD",CardDetail__FeaturedImageCaption:"styles_CardDetail__FeaturedImageCaption__Ym_J8"}},41773:function(e){e.exports={CardDetail__Footer:"styles_CardDetail__Footer__6KH1g"}},42982:function(e){e.exports={CardDetail__Header:"styles_CardDetail__Header__GQxrS"}},63987:function(e){e.exports={SocialShare:"styles_SocialShare__lQpUq","SocialShare--IsHidden":"styles_SocialShare--IsHidden__zHSYH","SocialShare--IsSticky":"styles_SocialShare--IsSticky__sq1Nn",SocialShare__Icon:"styles_SocialShare__Icon__dJazc",SocialShare__Label:"styles_SocialShare__Label__kGd36",SocialShare__Action:"styles_SocialShare__Action__r4Xic","SocialShare__Action--facebook":"styles_SocialShare__Action--facebook__argdV","SocialShare__Action--twitter":"styles_SocialShare__Action--twitter__S4rj1","SocialShare__Action--linkedin":"styles_SocialShare__Action--linkedin__l8VPV","SocialShare__Action--nextdoor":"styles_SocialShare__Action--nextdoor__edbQJ","SocialShare__Action--email":"styles_SocialShare__Action--email__graN_","SocialShare__Action--replies":"styles_SocialShare__Action--replies__2Ozys"}},68167:function(e){e.exports={Section:"styles_Section__qMdG9",Section__card:"styles_Section__card__4Uoov"}},26651:function(e){e.exports={Disclaimer:"styles_Disclaimer__ZEDTU"}},56892:function(e){e.exports={UnpublishedItem:"styles_UnpublishedItem__Vrd_h",UnpublishedItem__text:"styles_UnpublishedItem__text__kJN31"}}}]);