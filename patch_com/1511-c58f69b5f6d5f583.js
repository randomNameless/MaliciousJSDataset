"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1511],{4920:function(e,n,t){var i,o,a,r;t.d(n,{R:function(){return i},l:function(){return o}}),(a=i||(i={})).AboutPage="AboutPage",a.ArticleCategoryPage="ArticleCategoryPage",a.ArticleDetailPage="ArticleDetailPage",a.ArticlePage="ArticlePage",a.ArticleTopicPage="ArticleTopicPage",a.EvergreenPage="EvergreenPage",a.AdvertiseWithUsPage="AdvertiseWithUsPage",a.BusinessPostDetailPage="BusinessPostDetailPage",a.BusinessPostEditPage="BusinessPostEditPage",a.BusinessPostPromotionPage="BusinessPostPromotionPage",a.BusinessPostTermsConditionsPage="BusinessPostTermsConditionsPage",a.BusinessSolutionsRegisterPage="BusinessSolutionsRegisterPage",a.BusinessSolutionsComposePage="BusinessSolutionsComposePage",a.CalendarPage="CalendarPage",a.ClassifiedDetailPage="ClassifiedDetailPage",a.ClassifiedEditPage="ClassifiedEditPage",a.ClassifiedsPage="ClassifiedsPage",a.ClassifiedPromotionPage="ClassifiedPromotionPage",a.ComposePage="ComposePage",a.ContentItemThread="ContentItemThread",a.DealTownPage="DealTownPage",a.EventDetailPage="EventDetailPage",a.EventEditPage="EventEditPage",a.EventPromotionPage="EventPromotionPage",a.EvergreenTerms="EvergreenTerms",a.LoginPage="LoginPage",a.LocalMarketplace="LocalMarketplace",a.LocalRealEstatePage="LocalRealEstatePage",a.NationalPage="NationalPage",a.NotFoundPage="NotFoundPage",a.PatchPage="PatchPage",a.PatchAm="PatchAm",a.LocalHome="LocalHome",a.TextHomePage="TextHomePage",a.Jobs="Jobs",a.BusinessSolutionsPage="BusinessSolutionsPage",a.PrivacyPolicyPage="PrivacyPolicyPage",a.PostDetailPage="PostDetailPage",a.ProfileEditPage="ProfileEditPage",a.RegisterPage="RegisterPage",a.ServerErrorPage="ServerErrorPage",a.SponsoredPage="SponsoredPage",a.ThumbtackSearchPage="ThumbtackSearchPage",a.ThumbtackCategoriesPage="ThumbtackCategoriesPage",a.NationalSubscribePage="NationalSubscribePage",a.SubscribePage="SubscribePage",a.StateCommunitiesPage="StateCommunitiesPage",a.UserContentPage="UserContentPage",a.VerifyEmailPage="VerifyEmailPage",a.PatchTermsPage="PatchTermsPage",a.CommunityGuidelinesPage="CommunityGuidelinesPage",a.ContactUsPage="ContactUsPage",a.PatchGiveawayRulesPage="PatchGiveawayRulesPage",a.PostingInstructionsPage="PostingInstructionsPage",a.MapPage="MapPage",a.PatchAmSubscribePage="PatchAmSubscribePage",a.InviteFriend="InviteFriend",(r=o||(o={})).articleDetail="article_node",r.classifiedDetail="classified_node",r.eventDetail="event_node",r.postDetail="quickpost_node",r.bizPostDetail="bizpost_node",r.articleRecirc="below_article_recirc",r.classifiedRecirc="classified_recirc",r.eventRecirc="event_recirc",r.postRecirc="quickpost_recirc",r.bizPostRecirc="bizpost_recirc",r.featuredClassifiedsRightRail="featured_classifieds_right_rail",r.featuredEventsRightRail="featured_events_right_rail",r.latestNewsNearby="latest_news_nearby",r.bestOfRightRail="best_of_right_rail",r.nationalNewsRightRail="national_page_news_ticker",r.bizPostRightRail="bizpost_right_rail",r.classifiedFeed="classifieds_feed",r.eventFeed="event_feed",r.homeFeed="patch_home_feed",r.nationalFeed="national_feed",r.notFoundFeed="404_feed",r.userProfileFeed="user_profile_feed",r.topicFeed="topic_feed",r.localJobsFeed="local_jobs",r.businessFeed="business_feed",r.underArticleRecircNews="under_article_news_section",r.underArticleRecircEvents="under_article_events_section",r.underArticleRecircClassifieds="under_article_classifieds_section"},81641:function(e,n,t){t.d(n,{A:function(){return r},N:function(){return s}});var i=t(10253),o=t(67294),a=t(10965);function r(){var e=(0,o.useContext)(a.Z).slotTargeting;return(0,o.useMemo)(function(){return e.patchConfigAdtech},[e])}function s(e){for(var n=0,t=[],o=[],a=0;a<e.length;a++){var r=(0,i.Z)(e[a].split("@"),2),s=r[0],d=r[1];if(t.push({testVariant:s,percent:parseInt(d)}),(n+=parseInt(d))>=100)return console.error("PATCH: patch_config_adtech tests exceed 100%. Not running any test."),"ae0:c0";o.push(n)}var c=Math.floor(100*Math.random()),u=function(e){return e>=c},l=t[o.findIndex(u)];return l?l.testVariant:"ae0:c0"}},62819:function(e,n,t){t.d(n,{ZP:function(){return j}});var i,o,a=t(26042),r=t(69396),s=t(35944),d=t(67294),c=t(63137),u=t.n(c),l=t(62408),g=t(81641),m=t(81187),P=t(11745),v=t(96974),p=t(66015),_=t(73071),f=t(31955),h=t(34018),C=t(24788),T=t(5383),y=t(73142),S=t(74455);function A(){var e,n;return(e=f.Z.get(i.vendorSTCookie))&&(n=e,f.Z.set(i.stCookie,n)),f.Z.get(i.stCookie)}(o=i||(i={})).stCookie="patch_sthid",o.vendorSTCookie="sailthru_hid";var I=t(59498),w=t(14176),b=t.n(w),E={userId:"user_id",authorId:"dimension1",patchId:"dimension2",regionId:"dimension3",topicId:"dimension4",contentId:"dimension5",stateName:"dimension7",patchName:"dimension8",editorName:"dimension9",contentCreatedDate:"dimension16",contentUpdatedDate:"dimension17",timezone:"dimension19",authorRoleId:"dimension23",currentUserId:"dimension24",currentUserRoleId:"dimension25",currentUserPatchId:"dimension26",experiment:"dimension30",contentSource:"dimension31",tags:"dimension32",contentCategory:"dimension33",contentType:"dimension34",pageName:"dimension35",patchConfigAdtech:"dimension36",sailthruCookie:"dimension37",userConsent:"dimension38",oneTrustString:"dimension39",experimentConfigId:"dimension40",evergreen:"dimension41",originalContent:"dimension42",temperature:"dimension43",weatherType:"dimension44",web_amp:"dimension45"},R=function(e){return null!==e.value&&void 0!==e.value},Z=function(e){var n,t=e.user,i=e.author,o=e.patch,a=e.topicId,r=e.contentId,s=e.contentCreatedDate,d=e.contentUpdatedDate,c=e.contentSource,u=e.tags,l=e.contentCategory,g=e.contentType,m=e.pageName,P=e.evergreen,p=e.originalContent,_=e.adtechABTestVariant,f=e.hasConsentedToTargetingCookies,h=e.experimentConfigHelper,C=e.weather;return[{dimension:E.userId,value:null==t?void 0:t.id.toString()},{dimension:E.authorId,value:null==i?void 0:i.id.toString()},{dimension:E.patchId,value:null==o?void 0:o.id.toString()},{dimension:E.regionId,value:null==o?void 0:o.region.id.toString()},{dimension:E.topicId,value:null==a?void 0:a.toString()},{dimension:E.contentId,value:null==r?void 0:r.toString()},{dimension:E.contentCreatedDate,value:s?(0,S.dW)(new Date(s),"t"):null},{dimension:E.contentUpdatedDate,value:s?(0,S.dW)(new Date(d),"t"):null},{dimension:E.timezone,value:null==o?void 0:o.timezone},{dimension:E.authorRoleId,value:null==i?void 0:i.rid.toString()},{dimension:E.currentUserId,value:null==t?void 0:t.id.toString()},{dimension:E.currentUserRoleId,value:null==t?void 0:t.rid.toString()},{dimension:E.currentUserPatchId,value:null==t?void 0:null===(n=t.patch)||void 0===n?void 0:n.id.toString()},{dimension:E.experiment,value:(0,v.iy)().join("|")},{dimension:E.experimentConfigId,value:h.getAnalyticsTrackingId()},{dimension:E.contentSource,value:c},{dimension:E.tags,value:null==u?void 0:u.join(",")},{dimension:E.contentCategory,value:l},{dimension:E.contentType,value:g},{dimension:E.pageName,value:m},{dimension:E.patchConfigAdtech,value:_},{dimension:E.sailthruCookie,value:A()},{dimension:E.userConsent,value:f?"1":"0"},{dimension:E.oneTrustString,value:(0,I.Z)().join("|")},{dimension:E.evergreen,value:P},{dimension:E.originalContent,value:p},{dimension:E.temperature,value:null==C?void 0:C.temperature},{dimension:E.weatherType,value:null==C?void 0:C.icon},{dimension:E.web_amp,value:"main_web"},].filter(R)},k=function(e){var n;return(n=Z(e)).reduce(function(e,n){return e[n.dimension]=n.value.toString(),e},{})},N=function(e){var n=e.user,t=e.author,i=e.patch,o=e.topicId,a=e.contentId,r=e.contentSource,s=e.tags,d=e.contentCategory,c=e.contentType,u=e.pageName,l=e.adtechABTestVariant,g=e.hasConsentedToTargetingCookies,m=e.experimentConfigHelper,P=e.weather,p={user_id:null==n?void 0:n.id.toString(),author_id:null==t?void 0:t.id.toString(),Article_Author:null==t?void 0:t.name,patch_id:null==i?void 0:i.id.toString(),Patch_Name:null==i?void 0:i.name,topic_id:null==o?void 0:o.toString(),content_id:null==a?void 0:a.toString(),author_role_id:null==t?void 0:t.rid.toString(),user_role_id:null==n?void 0:n.rid.toString(),experiment:(0,v.iy)().join("|"),experiment_config_id:m.getAnalyticsTrackingId(),content_source:r,content_tags:null==s?void 0:s.join(","),content_category:d,content_type:c,page_name:u,patch_config_adtech:l,sailthru_hid:A(),targeting_consent:g?"1":"0",onetrust_groups:(0,I.Z)().join("|"),temperature:null==P?void 0:P.temperature,weather_type:null==P?void 0:P.icon,web_amp:"main_web"};return b()(p,function(e){return null==e||""===e})},D=(0,m.Z)().KEYS,U=D.GOOGLE_ANALYTICS_4_MEASUREMENT_ID,x=D.GOOGLE_OPTIMIZE_ID,M=D.GOOGLE_UNIVERSAL_ANALYTICS_PROPERTY_ID,B=new Date().getTime(),G=(0,y.Z)(B,null,"GoogleAnalytics");G("initialized out of sync with main timer");var F=function(){var e=new URLSearchParams(window.location.search);e.delete("email"),e.delete("adtech_debug"),e.delete("pbjs_debug");var n=e.toString();return"".concat(window.location.origin).concat(window.location.pathname).concat(n.length?"?".concat(n):"")},L=function(e,n){G("setupPropertiesForGA UA Params",e),G("setupPropertiesForGA GA4 params",n);var t=F();H(n,t),z(e,t)},H=function(e,n){G("trackPageViewGA4"),U&&(gtag("config",U,(0,a.Z)({page_location:n,link_attribution:!0,optimize_id:x},e)),G("Sending GA4 page_view for",U))},z=function(e,n){G("trackPageViewUA"),M&&(gtag("config",M,(0,a.Z)({page_location:n,link_attribution:!0,optimize_id:x,transport_type:"beacon",custom_map:(0,a.Z)({},u()(E))},e)),G("Sending UA pageview for",M))},j=function(e){var n=e.author,t=void 0===n?null:n,i=e.contentCategory,o=e.contentId,c=e.contentSource,u=e.contentType,m=e.pageName,y=e.patch,S=e.topicId,A=e.canonicalUrl;G("<Component/> render",e);var I=(0,h.Z)(),w=(0,T.Z)(C._.targeting)||"GDPR"!==f.Z.get("region_consent_type"),b=(0,g.A)(),E=(0,P.E)(),R=(0,d.useContext)(p.ZP).weather,Z={version:"1.0.0",config:(0,v.iy)(),experiment:E.getConfig(),patch:void 0===y?null:y,canonicalUrl:A,pageName:m,itemType:void 0===u?null:u,itemId:void 0===o?null:o,authorId:null==t?void 0:t.id,category:i,topicId:void 0===S?null:S,contentSource:void 0===c?null:c};return(0,l.Z)(function(n){var t,i;G("useAuthenticatedEffect, user is",n),G("setupAnalyticsAndSendPageview"),t=k((0,r.Z)((0,a.Z)({},e),{user:n,adtechABTestVariant:b,hasConsentedToTargetingCookies:w,experimentConfigHelper:E,weather:R})),i=N((0,r.Z)((0,a.Z)({},e),{user:n,adtechABTestVariant:b,hasConsentedToTargetingCookies:w,experimentConfigHelper:E,weather:R})),gtag("js",new Date),gtag("set","developer_id.dNzMyY2",!0),gtag("consent","default",{ad_storage:w?"granted":"denied",analytics_storage:I?"granted":"denied"}),L(t,i),G("completed setupPropertiesForGA")},[]),(0,s.tZ)(_.Z,{id:"js-page-metadata-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n        var __patchPageMetadata = ".concat(JSON.stringify(Z),";\n      ").replace(/\n\s*\n/g,"\n\n")}})}},74455:function(e,n,t){t.d(n,{BP:function(){return g},H8:function(){return v},Sy:function(){return P},_O:function(){return _},dW:function(){return m},mr:function(){return p}});var i=t(11699),o=t(69690),a=t(76972),r=t(67803),s=t(29557),d=t(28401),c=t(84696),u=t(70722),l=t(86819),g=function(e){try{return(0,u.utcToZonedTime)(e,l.default["America/New_York"])}catch(n){return e}},m=function(e,n){return(0,u.format)(g(e),n)},P=function(e){var n=new Date;if(60>(0,i.Z)(n,e))return"now";var t=(0,o.Z)(n,e);if(t<60)return"".concat(t,"m");var d=(0,a.Z)(n,e);if(d<24)return"".concat(d,"h");var c=(0,r.Z)(n,e);if(c<7)return"".concat(c,"d");var u=(0,s.Z)(n,e);return m(e,u?"MMM yyyy":"MMM d")};function v(e){var n=(0,u.format)(e,"yyyy-MM-dd'T'HH:mm:ss"),t=(0,u.zonedTimeToUtc)(n,l.default["America/New_York"]);return(0,d.Z)(t)}var p=function(e,n,t){return(0,u.format)((0,u.utcToZonedTime)((0,c.Z)(e),n),t)},_=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.default["America/New_York"];return(0,u.format)((0,u.utcToZonedTime)(e,l.default["America/New_York"]),"yyyy-MM-dd'T'HH:mm:ssxxxxx",{timeZone:n})}}}]);