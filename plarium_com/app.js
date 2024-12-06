var PLP=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),a=r(o);window.PLAnalyticsManager=a["default"],"function"==typeof window.plAnalyticAsyncInit&&window.plAnalyticAsyncInit(),document.addEventListener("click",function(e){return a["default"].raiseClickEvent(e)}),window.addEventListener("hashchange",function(e){return a["default"].raiseHashEvent(e)})},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o={},a=function(){function e(){n(this,e)}return r(e,[{key:"init",value:function(e){var t=e.theme;o={theme:t}}},{key:"getHandlers",value:function(){return this.eventHandlers?this.eventHandlers:[]}}],[{key:"getState",value:function(){return o}},{key:"mapThemeNameToGameName",value:function(e){switch(e){case"sparta":return"SP";case"stormfall":return"SF";case"pirates":return"PI";case"soldiers":return"SI";case"nords":return"ND";case"totaldomination":return"TD";case"vikings":return"VKN";case"throne":return"THR";case"terminator":return"TRM"}return"undefined"===e?"common":e}},{key:"mapAuthThemeFromLink",value:function(e){switch(e){case"light":return" - Light Ver";case"mixed":return" - Mixed Ver"}return""}},{key:"mapPositionToPositionName",value:function(e){var t=3,n=parseInt(e,10),r=Math.ceil(n/t),o=void 0,a=n%t,i=void 0;switch(r){case 1:o="Top";break;case 2:o="Bottom"}switch(a){case 1:i="Left";break;case 2:i="Middle";break;case 0:i="Right"}return o+" "+i}},{key:"mapAuthFormType",value:function(e){switch(e){case"multiStepRegisterForm":return"Progressive";case"multiStepRegisterPersonalForm":return"ProgressivePersonal"}return"Standard"}},{key:"getAuthFormType",value:function(){var t=document.getElementById("authFormsTheme");if(!t)return null;var n=t.getAttribute("data-js-optimize");return e.mapAuthFormType(n)}}]),e}();e.exports=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=_["default"].getHandlers(),t=!0,n=!1,r=void 0;try{for(var o,a=Object.entries(e)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=l(o.value,2),u=i[0],c=i[1],s="[data-js-impression-element-id="+u+"]",p=document.querySelector(s);if(p){var m=c(p),d=!0,y=!1,g=void 0;try{for(var h,b=f["default"][Symbol.iterator]();!(d=(h=b.next()).done);d=!0){var v=h.value;v.send(m)}}catch(w){y=!0,g=w}finally{try{!d&&b["return"]&&b["return"]()}finally{if(y)throw g}}}}}catch(w){n=!0,r=w}finally{try{!t&&a["return"]&&a["return"]()}finally{if(n)throw r}}}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(null===e||void 0===e)return null;if("A"===e.tagName||"BUTTON"===e.tagName||"IMG"===e.tagName||"SPAN"===e.tagName){var n=e.getAttribute(y.ID);if(n)return e}return t>=3?null:a(e.parentElement,t+1)}function i(){var e=window.location.hash,t=d[e];if(null!==t&&void 0!==t){var n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value,l=u(),c=!0,s=!1,p=void 0;try{for(var m,_=f["default"][Symbol.iterator]();!(c=(m=_.next()).done);c=!0){var y=m.value;y.send(l)}}catch(g){s=!0,p=g}finally{try{!c&&_["return"]&&_["return"]()}finally{if(s)throw p}}}}catch(g){r=!0,o=g}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw o}}}}function u(e){var t=a(e.target);if(null!==t){var n=t.getAttribute(y.ID);if(null!==n&&void 0!==n){var r=d[n];if(null!==r&&void 0!==r){var o=JSON.parse(t.getAttribute("data-analytics-payload")||"{}"),i=Object.assign({category:t.getAttribute(y.CATEGORY),action:t.getAttribute(y.ACTION),label:t.getAttribute(y.LABEL),position:t.getAttribute(y.POSITION),grid:t.getAttribute(y.GRID),type:t.getAttribute(y.TYPE),theme:t.getAttribute(y.THEME),authTheme:t.getAttribute(y.AUTH_THEME),game:t.getAttribute(y.GAME)},o),u=!0,l=!1,c=void 0;try{for(var s,p=r[Symbol.iterator]();!(u=(s=p.next()).done);u=!0){var m=s.value,_=m(i,t),g=!0,h=!1,b=void 0;try{for(var v,w=f["default"][Symbol.iterator]();!(g=(v=w.next()).done);g=!0){var T=v.value;T.send(_)}}catch(P){h=!0,b=P}finally{try{!g&&w["return"]&&w["return"]()}finally{if(h)throw b}}}}catch(P){l=!0,c=P}finally{try{!u&&p["return"]&&p["return"]()}finally{if(l)throw c}}}}}}var l=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=n(4),f=r(c),s=n(21),p=r(s),m=n(20),_=r(m),d={},y={ID:"data-analytics-id",CATEGORY:"data-analytics-category",ACTION:"data-analytics-action",LABEL:"data-analytics-label",POSITION:"data-analytics-position",GRID:"data-analytics-grid",TYPE:"data-analytics-type",THEME:"data-analytics-theme",AUTH_THEME:"data-analytics-auth-theme",GAME:"data-analytics-game"},g=function(e){var t=e.theme,n=!0,r=!1,a=void 0;try{for(var i,u=p["default"][Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;if(l.init&&l.init({theme:t}),null!==l.getHandlers&&void 0!==l.getHandlers){var c=l.getHandlers();if(null!==c&&void 0!==c)for(var s in c){var m=c[s];null===d[s]||void 0===d[s]?d[s]=[m]:d[s].push(m)}}}}catch(_){r=!0,a=_}finally{try{!n&&u["return"]&&u["return"]()}finally{if(r)throw a}}var y=!0,g=!1,h=void 0;try{for(var b,v=f["default"][Symbol.iterator]();!(y=(b=v.next()).done);y=!0){var w=b.value;w.initialize&&w.initialize()}}catch(_){g=!0,h=_}finally{try{!y&&v["return"]&&v["return"]()}finally{if(g)throw h}}o()};e.exports={initialize:g,raiseClickEvent:u,raiseHashEvent:i,v:"1.0.1"}},function(e,t){"use strict";var n=function(){},r=function(e){if(null!==e&&void 0!==e){var t={event:"GAevent",eventCategory:e.category,eventAction:e.action,eventLabel:e.label};return window.dataLayer?void window.dataLayer.push(t):void(window.dataLayer=[t])}};e.exports={initialize:n,send:r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(3),a=r(o);e.exports=[a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={promo_blog_post:function(e,t){var n=t.lastChild.innerHTML;return{category:"Blog Post",action:"Box position #"+e.position,label:n}},blog_page_play_now:function(e,t){var n=t.parentElement.childNodes[1].innerHTML,r=t.parentElement.parentElement.parentElement.className,o="p-blog-post"===r?"Blog Post":"Blog";return{category:"PLAY NOW",action:o,label:n}},blog_page_more_articles:function(){return{category:"Blog",action:"More Articles",label:""}},blog_page_load_more:function(){var e=document.documentElement.getAttribute("theme");return{category:"Blog",action:"Load More",label:l["default"].mapThemeNameToGameName(e)}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(5),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={leave_game_ok:function(){return{category:"Leave Game Page",action:"Leave Game Page",label:"Leave Game"}},leave_game_cancel:function(){return{category:"Leave Game Page Cancel",action:"Leave Game Page",label:"Cancel"}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(7),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={login_popup_play_now_success:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Log in successful"+t,action:"Log in - Pop Up"+t,label:"PLAY NOW"+t}},register_popup_play_now_success:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme),n=c["default"].mapThemeNameToGameName(e.theme),r=c["default"].getAuthFormType(),o=n?n+" ":"";return{category:"Sign up successful"+t,action:o+"Sign up - Pop Up "+t,label:"PLAY FREE - "+r}},login_popup_play_now_fail:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Log in failed"+t,action:"Log in - Pop Up"+t,label:"PLAY NOW"+t}},register_popup_play_now_fail:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Sign up failed"+t,action:"Sign up - Pop Up"+t,label:"PLAY FREE"+t}},login_popup_switch_to_register:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Sign up intention"+t,action:"Log in - Pop Up"+t,label:"Sign Up"+t}},register_popup_switch_to_login:function(e){var t=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Log in intention"+t,action:"Sign up - Pop Up"+t,label:"Sign In"+t}},login_form_social_auth_login:function(e){var n=e.type,r=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Log in successful"+r,action:"Log in - Pop Up"+r,label:"Log in "+t.mapSocialNetwork(n)+r}},login_form_social_auth_register:function(e){var n=e.type,r=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Log in successful"+r,action:"Log in - Pop Up"+r,label:"Sign up "+t.mapSocialNetwork(n)+r}},register_form_social_auth_login:function(e){var n=e.type,r=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Sign up successful"+r,action:"Sign up - Pop Up"+r,label:"Log in "+t.mapSocialNetwork(n)+r}},register_form_social_auth_register:function(e){var n=e.type,r=c["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Sign up successful"+r,action:"Sign up - Pop Up"+r,label:"Sign up "+t.mapSocialNetwork(n)+r}},register_social_auth_form_username:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Username",label:"First Text Box"}},register_social_auth_form_email:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Email",label:"Second Text Box"}},register_social_auth_form_password:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Password",label:"Third Text Box"}},register_social_auth_form_username_change:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Username (change)",label:"First Text Box"}},register_social_auth_form_email_change:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Email (change)",label:"Second Text Box"}},register_social_auth_form_password_change:function(e){var t=c["default"].mapThemeNameToGameName(e.theme),n=c["default"].getAuthFormType();return{category:t+" "+n+" Registration Form",action:"Password (change)",label:"Third Text Box"}},game_uploaded_successfully:function(e){var t=e.type.charAt(0).toUpperCase()+e.type.slice(1),n=c["default"].getAuthFormType();return{category:"Game uploaded successfully",action:e.action||"Game uploaded successfully",label:t+" - "+n}}},e}return i(t,e),u(t,null,[{key:"mapSocialNetwork",value:function(e){switch(e){case"fb":case"facebook":return"FB";case"gp":case"google":return"G+"}return e}}]),t}(c["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={custom_action:function(e){return{category:e.category||null,action:e.action||null,label:e.label||null}},game_select:function(e){var t=l["default"].mapThemeNameToGameName(e.theme),n=l["default"].getAuthFormType();return{category:"PLAY NOW",action:"Start playing - afterReg",label:t+" - "+n}},games_grid:function(e){var t=e.position,n=e.grid,r=e.type,o=l["default"].mapThemeNameToGameName(e.theme),a=l["default"].getAuthFormType();return{category:"PLAY FREE",action:""+(r?r+" Games ":"")+n+(n?": #":"#")+t,label:o+" "+a}},mobile_grid:function(e){var t=e.position,n=e.grid,r=e.type;return{category:"READ MORE",action:""+(r?r+" Games ":"")+n+(n?": #":"#")+t,label:e.label||l["default"].mapThemeNameToGameName(e.theme)}},game_play_button:function(e){var t=l["default"].mapThemeNameToGameName(e.theme),n=l["default"].getAuthFormType();return{category:"PLAY NOW",action:e.action||"Game Page Top",label:t+" "+n}},bottom_game_play_button:function(e){var t=l["default"].mapThemeNameToGameName(e.theme),n=l["default"].getAuthFormType();return{category:"PLAY NOW",action:e.action||"Game Page Bottom",label:t+" "+n}},latest_news_game_play_button:function(e){var t=l["default"].mapThemeNameToGameName(e.theme),n=l["default"].getAuthFormType();return{category:"PLAY NOW",action:"Latest News",label:t+" "+n}},post_grid_item:function(e){var t=document.documentElement.getAttribute("theme");if("news"===e.type){var n=l["default"].mapThemeNameToGameName(t);return{category:"News",action:n+": Latest News",label:e.label||"Box #: "+e.position}}},desktop_page_app_download_link:function(e){return{category:"Plarium Games App",action:"App Game Page",label:e.label||"Download APP"}},"404_not_found_play_now":function(e){var t=e.game;return{category:"PLAY NOW",action:"404 Page",label:e.label||t}},mobile_download_on_appstore:function(e){return{category:"Mobile Game Page",action:"App Store",label:e.label||l["default"].mapThemeNameToGameName(e.theme)}},mobile_download_on_google_play:function(e){return{category:"Mobile Game Page",action:"Google Play",label:e.label||l["default"].mapThemeNameToGameName(e.theme)}},marketing_cross_sale_banner:function(e){return{category:"Banner",action:"Event Clicks",label:"CrossSell "+e.label}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={auth_login_button:function(e){var t=l["default"].mapAuthThemeFromLink(e.authTheme);return{category:"Header menu"+t,action:"Log in intention"+t,label:"LOG IN"+t}},auth_signup_button:function(e){var t=l["default"].mapAuthThemeFromLink(e.authTheme),n=l["default"].getAuthFormType();return{category:"Header menu"+t,action:"Sign up intention"+t,label:"SIGN UP"+t+" "+n}},language_switcher:function(){},auth_player_user_profile:function(){return{category:"User Profile",action:"Header menu",label:"Player"}},dropdown_menu_player_user_profile:function(){return{category:"Header menu",action:"User Profile",label:"My Profile"}},auth_avatar_user_profile:function(){return{category:"Header menu",action:"User Profile",label:"Avatar"}},auth_friends_user_profile:function(){return{category:"Header menu",action:"User Profile",label:"Friends"}},auth_notifications_user_profile:function(){return{category:"Header menu",action:"User Profile",label:"Notifications"}},header_desktop_download_link:function(){return{category:"Header menu",action:"Header menu Plarium Games app",label:"desktop app page"}},header_profile_dropdown_last_player_game:function(){return{category:"Header menu",action:"User Profile",label:"Last game played"}},header_menu_social:function(e){return{category:"Header menu",action:"Social",label:e.type}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={menu_browser_games_link:function(){return{category:"BROWSER GAMES",action:"Header menu Browser Games",label:"BROWSER GAMES"}},menu_mobile_games_link:function(){return{category:"MOBILE GAMES",action:"Header menu Mobile Games",label:"MOBILE GAMES"}},header_menu_item_community:function(){return{category:"Community",action:"Header menu",label:"Community"}},header_menu_item_forum:function(){return{category:"Community",action:"Header menu",label:"Forum"}},header_menu_item_blog:function(){return{category:"Community",action:"Header menu",label:"Blog"}},header_menu_item_support:function(){return{category:"Community",action:"Header menu",label:"Support"}},header_menu_video_played_percentage:function(e){return{category:"Video",action:e.action,label:e.label}},header_menu_notifications_mark_read_all:function(){return{category:"Header menu",action:"Notifications",label:"Mark all as read"}},header_menu_notifications_see_all:function(){return{category:"Header menu",action:"Notifications",label:"See All"}},header_menu_notifications_notification_click:function(){return{category:"Header menu",action:"Notifications",label:"Notification"}},header_menu_friends_see_all:function(){return{category:"Header menu",action:"Friends",label:"See All "}},header_menu_games_dropdown_browser_games:function(){return{category:"Header menu",action:"Games",label:"BROWSER GAMES"}},header_menu_games_dropdown_mobile_games:function(){return{category:"Header menu",action:"Games",label:"MOBILE GAMES"}},menu_browser_games_game_link:function(e){return{category:"Header menu",action:"Header menu Browser Games",label:e.game}},menu_browser_games_view_all:function(){return{category:"Header menu",action:"Header menu Browser Games",label:"View All Strategy Browser Games"}},menu_mobile_games_view_all:function(){return{category:"Header menu",action:"Header menu Mobile Games",label:"View All Strategy Mobile Games"}},header_menu_plarium_games_app:function(){return{category:"Header menu",action:"Games",label:"Plarium Games app"}},menu_plarium_games_app_download:function(){return{category:"Header menu",action:"Header menu Plarium Games app",label:"desktop app page"}},menu_mobile_games_game_link:function(e){return{category:"Header menu",action:"Header menu Mobile Games",label:e.game}},menu_casual_games_game_link:function(e){return{category:"Header menu",action:"Header menu Casual Games",label:e.game}}},e}return i(t,e),u(t,null,[{key:"getGameName",value:function(){var e=c["default"].getState().theme;return t.mapThemeNameToGame(e)}},{key:"selectEvent",value:function(e,n){var r=c["default"].getState().theme,o=t.mapThemeNameToGame(r),a="common"!==r;return e.label=o,a?e:n}},{key:"mapThemeNameToGame",value:function(e){return"common"===e?"Header menu":c["default"].mapThemeNameToGameName(e)}}]),t}(c["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(11),a=r(o),i=n(12),u=r(i),l=n(14),c=r(l),f=n(9),s=r(f),p=n(10),m=r(p);e.exports=[new a["default"],new u["default"],new c["default"],new s["default"],new m["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={promo_btn_play_now:function(e){var t=l["default"].mapThemeNameToGameName(e.theme),n=l["default"].getAuthFormType();return{category:"PLAY FREE",action:"carrousel:#"+e.position,label:t+" "+n}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={"#/friends":function(){return{category:"User Profile",action:"FRIENDS",label:"Friends"}},"#/friends/requests":function(){return{category:"User Profile",action:"FRIENDS",label:"Friend Requests"}},"#/friends/invite":function(){return{category:"User Profile",action:"FRIENDS",label:"INVITE"}},"#/info/privacy":function(){return{category:"User Profile",action:"PROFILE",label:"PRIVACY SETTING"}},"#/info/sessions":function(){return{category:"User Profile",action:"PROFILE",label:"DEVICE ACTIVITY"}},"#/info/badges":function(){return{category:"User Profile",action:"PROFILE",label:"BADGES"}},"#/achievements":function(){return{category:"User Profile",action:"ACHIEVEMENTS",label:"PORTAL ACHIEVEMENTS"}},"#/achievements/game":function(){return{category:"User Profile",action:"ACHIEVEMENTS",label:"GAME ACHIEVEMENTS"}},"#/timeline":function(){return{category:"User Profile",action:"ToolBar",label:"Timeline"}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(15),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={"home.ctaPlayNow":function(e){return{category:"New HP V.1",action:"Clicked on PLAY NOW",label:e.game+" + Top Cta"}},"home.ctaReadMore":function(e){return{category:"New HP V.1",action:"Clicked on READ MORE",label:e.game+" + Top Cta"}},"home.desktopDownload":function(e){return{category:"New HP V.1",action:"Clicked on DOWNLOAD",label:"DesktopApp + "+e.position}},"home.cardPromoPlay":function(e){return{category:"New HP V.1",action:"Clicked on PLAY NOW",label:e.game+" + "+e.position}},"home.cardPromoVideoPlay":function(e){return{category:"New HP V.1",action:"Clicked on Video",label:e.game+" + "+e.position}},"home.cardBtnPlay":function(e){return{category:"New HP V.1",action:"Clicked on PLAY NOW",label:e.game+" + "+e.position}},"home.cardLinkGameInfo":function(e){return{category:"New HP V.1",action:"Clicked on GAME INFO",label:e.game+" + "+e.position}},"home.cardPreview":function(e){return{category:"New HP V.1",action:"Clicked on PREVIEW",label:e.game+" + "+e.position}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(17),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={social_popup_social_network_impression:function(){return{category:"Social network move",action:"Popup appear",label:"Impression"}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(19),a=r(o);e.exports=new a["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(13),i=r(a),u=n(6),l=r(u),c=n(8),f=r(c),s=n(24),p=r(s),m=n(22),_=r(m),d=n(16),y=r(d),g=n(18),h=r(g);e.exports=[].concat(o(i["default"]),o(l["default"]),o(f["default"]),o(p["default"]),o(_["default"]),o(y["default"]),o(h["default"]))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(23),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={landing_multigame_play:function(e){return"default"===e.action?null:{category:e.game,action:e.action,label:l["default"].mapPositionToPositionName(e.position)}},register_landing_popup_play_now_success:function(){return{category:"Registration Form Standard success",action:"Registration",label:"PLAY FREE"}},register_landing_popup_play_now_fail:function(){return{category:"Registration Form Standard fail",action:"Registration",label:"PLAY FREE"}}},e}return i(t,e),t}(l["default"]);e.exports=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(25),a=r(o);e.exports=[new a["default"]]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,
writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.eventHandlers={profile_logout:function(){return{category:"Log Out",action:"User profile",label:"Log Out"}},profile_logout_ok:function(){return{category:"Log Out",action:"Log out - Pop Up",label:"Log Out"}},profile_logout_cancel:function(){return{category:"Log Out Cancel",action:"Log out - Pop Up",label:"Cancel"}},profile_play_game:function(e){var t="new"===e.type?"PLAY FREE":"PLAY NOW";return{category:t,action:"User profile",label:l["default"].mapThemeNameToGameName(e.theme)}},profile_games_tab:function(){return{category:"User Profile",action:"ToolBar",label:"GAMES"}},profile_friends_tab:function(){return{category:"User Profile",action:"ToolBar",label:"FRIENDS"}},profile_achievements_tab:function(){return{category:"User Profile",action:"ToolBar",label:"ACHIEVEMENTS"}},profile_notifications_tab:function(){return{category:"User Profile",action:"ToolBar",label:"NOTIFICATIONS"}},profile_profile_tab:function(){return{category:"User Profile",action:"ToolBar",label:"PROFILE"}},profile_invite_confirm_email:function(){return{category:"User Profile",action:"INVITE",label:"Confirm Mail"}},profile_invite_email:function(){return{category:"User Profile",action:"INVITE",label:"EMAIL"}},profile_invite_facebook:function(){return{category:"User Profile",action:"INVITE",label:"Facebook"}},profile_invite_google:function(){return{category:"User Profile",action:"INVITE",label:"Google"}},profile_invite_mail_ru:function(){return{category:"User Profile",action:"INVITE",label:"MailRu"}},profile_invite_vkontakte:function(){return{category:"User Profile",action:"INVITE",label:"Vkontakte"}},profile_profile_edit:function(){return{category:"User Profile",action:"PROFILE",label:"Edit"}},profile_achievements_game_server_label:function(e){var t=l["default"].mapThemeNameToGameName(e.theme);return{category:"User Profile",action:"ACHIEVEMENTS",label:t+" carousel #"+e.position}},profile_achievements_hint_for_next_bagde:function(){return{category:"User Profile",action:"ACHIEVEMENTS",label:"Hint for Next Badge"}},profile_badges_badge_link:function(e){return{category:"User Profile",action:"BADGES",label:e.label}},profile_achievements_all_achievements:function(){return{category:"User Profile",action:"Games",label:"ALL ACHIEVEMENTS"}},social_popup_social_network_link:function(){return{category:"Social network Move",action:"Popup click",label:"Social network Move"}},profile_timeline_filter:function(){return{category:"User Profile",action:"Timeline",label:"Filter"}}},e}return i(t,e),t}(l["default"]);e.exports=c}]);