!function(e){function n(a){if(o[a])return o[a].exports;var t=o[a]={exports:{},id:a,loaded:!1};return e[a].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var o={};return n.m=e,n.c=o,n.p="",n(0)}({0:function(e,n,o){"use strict";function a(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n.default=e,n}var t=o(172),r=a(t),s=o(174),i=a(s),c=o(224),l=a(c);!function(){var e=r.BANNER_JS_PROD;if(!i.globals.navigator.cookieEnabled)return void i.globals[r.NOTIFIER_GLOBAL].logs.push("Cookies not enabled.");if(/bot|googlebot|crawler|spider|robot|crawling/i.test(i.globals.navigator.userAgent))return void i.globals[r.NOTIFIER_GLOBAL].logs.push("Crawler detected, notice disabled.");if(l.getNotice()){var n=i.globals.document.getElementsByTagName("head")[0],o=i.globals.document.createElement("script");o.src=e,o.async=!0,n.appendChild(o)}}()},172:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.NOTIFIER_GLOBAL="ShamanNotifier",n.NOTIFIER_CONTAINER_ID="cps-shaman-notifier",n.CBSOPTANON_GLOBAL="cbsoptanon",n.NOTICE_DEFAULT_LANGUAGE="en",n.RELATIVE_TIMEZONE="America/New_York",n.BANNER_JS_DEV="/shamanBanner.js",n.BANNER_JS_PROD="//production-cmp.isgprivacy.cbsi.com/cps/shamanBanner.js",n.BANNER_CLICK_EVENT="CPSBannerActionClicked",n.GEO_LOOKUP_ENDPOINT="//production-cmp.isgprivacy.cbsi.com/whoami/paramountprivacy"},173:function(e,n){e.exports=[{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nickjr.com/legal/ussoge/terms-of-use",domains:["beyondthebackpack.nickjr.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nick.com/legal/ussoge/terms-of-use",domains:["www.nick.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nickatnite.com/legal/o3ccr8/terms-of-use",domains:["www.nickatnite.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nick.com/kids-choice-awards/legal/ussoge/terms-of-use",domains:["www.nickelodeonbirthdayclub.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nick.com/kids-choice-awards/legal/ussoge/terms-of-use",domains:["www.nickelodeonparents.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.nickjr.com/legal/ussoge/terms-of-use",domains:["www.nickjr.com"],excluded_domains:[]},{name:"Terms of Use Change",component:"TermsOfUseChange",start_date:"05/09/2023 09:00:00 AM GMT-0500",end_date:"06/07/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn_tou",force_interaction:!1,classes:"",tou_url:"https://www.noggin.com/terms/",domains:["www.noggin.com(?!(/sign-up|/amazon-sign-up|/channel-promo-sign-up|/EU-799-7-01|/special-noggin-offer|/noggin-special-offer|/njr-60d-ft|/njr-50-off|/tinkergarten|/AVe0Pk7g|/eu-pc-599-0-02|/eu-pc-399-7-01|/lrifsqzy|/anrpmtug|/special-offer-0-99-month|/50-off-annually|/3-49-mo-for-3-months-aff|/25-off-annually-aff|/expired-offer|/30-off-annually|/60-days-free-2022|/.*month-for|/referral-60-days-free-2022|/60-days-free-trial-2022|/99-offer-2mo-2022|/25-off-annually-rokt|/holiday-offer-99-3-months|/influencer-sign-up-annual)).*$"],excluded_domains:[]},{name:"PPC",component:"PrivacyPolicyChange",start_date:"05/04/2023 10:00:00 AM GMT-0500",end_date:"06/05/2023 12:00:00 AM GMT-0500",reprompt_days:"31",cookie_name:"ppn",force_interaction:!1,classes:"",policy_url:"https://privacy.paramount.com/policy",domains:["portadosfundos.com.br"],excluded_domains:[]}]},174:function(e,n,o){(function(e){"use strict";function a(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n.default=e,n}function t(){var e=n.globals.document.getElementsByTagName("body")[0];if(!e)return null;var o=n.globals.document.createElement("div");return o.setAttribute("id",i.NOTIFIER_CONTAINER_ID),e.appendChild(o),o}function r(){var e=n.globals.navigator.userLanguage||n.globals.navigator.language||"en";return e=e.split("-"),{language:e[0].toLowerCase(),country:(e[1]||"").toLowerCase()}}Object.defineProperty(n,"__esModule",{value:!0}),n.globals=void 0,n.createNotifierContainer=t,n.getBrowserLanguage=r;var s=o(172),i=a(s);n.globals=e}).call(n,function(){return this}())},224:function(e,n,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n.default=e,n}function r(){for(var e=null,o=0;o<m.default.length;o++){var a=m.default[o];if(n.validNoticeDateRange(a)&&!n.domainExcluded(a)){e=a;break}}return e}function s(e){var n=new Date,o=new Date(e.start_date),a=new Date(e.end_date);return n>=o&&n<=a}function i(e){var n=(""+l.globals.location.hostname+(l.globals.location.pathname||"/")).replace(/\/$/,"");if(e.domains===f){var o=!1;if(e.excluded_domains)for(var a=0;a<e.excluded_domains.length;a++){var t=new RegExp(e.excluded_domains[a],"i").test(n);if(t){o=!0;break}}return o}if(e.domains instanceof Array){for(var r=!0,s=0;s<e.domains.length;s++){var i=new RegExp(e.domains[s]).test(n);if(i){r=!1;break}}return r}return!0}Object.defineProperty(n,"__esModule",{value:!0}),n.ALL_HOSTS=void 0,n.getNotice=r,n.validNoticeDateRange=s,n.domainExcluded=i;var c=o(174),l=t(c),d=o(172),u=(t(d),o(173)),m=a(u),f=n.ALL_HOSTS="*"}});