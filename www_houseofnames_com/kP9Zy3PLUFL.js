;/*FB_PKG_DELIM*/

__d("AvailableListConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({ON_AVAILABILITY_CHANGED:"buddylist/availability-changed",ON_UPDATE_ERROR:"buddylist/update-error",ON_UPDATED:"buddylist/updated",ON_CHAT_NOTIFICATION_CHANGED:"chat-notification-changed",OFFLINE:0,IDLE:1,ACTIVE:2,MOBILE:3,WEB_STATUS:"webStatus",FB_APP_STATUS:"fbAppStatus",MESSENGER_STATUS:"messengerStatus",OTHER_STATUS:"otherStatus",STATUS_ACTIVE:"active",STATUS_IDLE:"idle",STATUS_OFFLINE:"offline"});f["default"]=a}),66);
__d("ChannelConstants",[],(function(a,b,c,d,e,f){var g="channel/";a={CHANNEL_MANUAL_RECONNECT_DEFER_MSEC:2e3,MUTE_WARNING_TIME_MSEC:25e3,WARNING_COUNTDOWN_THRESHOLD_MSEC:15e3,ON_SHUTDOWN:g+"shutdown",ON_INVALID_HISTORY:g+"invalid_history",ON_CONFIG:g+"config",ON_ENTER_STATE:g+"enter_state",ON_EXIT_STATE:g+"exit_state",ATTEMPT_RECONNECT:g+"attempt_reconnect",RTI_SESSION:g+"new_rti_address",CONSOLE_LOG:g+"message:console_log",GET_RTI_SESSION_REQUEST:g+"rti_session_request",SKYWALKER:g+"skywalker",CHANNEL_ESTABLISHED:g+"established",OK:"ok",ERROR:"error",ERROR_MAX:"error_max",ERROR_MISSING:"error_missing",ERROR_MSG_TYPE:"error_msg_type",ERROR_SHUTDOWN:"error_shutdown",ERROR_STALE:"error_stale",SYS_OWNER:"sys_owner",SYS_NONOWNER:"sys_nonowner",SYS_ONLINE:"sys_online",SYS_OFFLINE:"sys_offline",SYS_TIMETRAVEL:"sys_timetravel",HINT_AUTH:"shutdown auth",HINT_CONN:"shutdown conn",HINT_DISABLED:"shutdown disabled",HINT_INVALID_STATE:"shutdown invalid state",HINT_MAINT:"shutdown maint",HINT_UNSUPPORTED:"shutdown unsupported",reason_Unknown:0,reason_AsyncError:1,reason_TooLong:2,reason_Refresh:3,reason_RefreshDelay:4,reason_UIRestart:5,reason_NeedSeq:6,reason_PrevFailed:7,reason_IFrameLoadGiveUp:8,reason_IFrameLoadRetry:9,reason_IFrameLoadRetryWorked:10,reason_PageTransitionRetry:11,reason_IFrameLoadMaxSubdomain:12,reason_NoChannelInfo:13,reason_NoChannelHost:14,CAPABILITY_VOIP_INTEROP:8,CAPABILITY_ACTIVE_ON_DESKTOP_APP:16384,CAPABILITY_PLAYING_INSTANT_GAME:2097152,SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe",FAKE_DFF:"fake_dff",THROTTLED:g+"throttled",JUMPSTART:g+"jumpstart",ENTITY_PRESENCE_ACTIVE_PING:"entity_presence/active_ping",ENTITY_PRESENCE_SKIPPED_PING:"entity_presence/skipped_ping",SUBSCRIPTION_STATE:{SUBSCRIBE:"s",MUTATE_CONTEXT:"m",UNSUBSCRIBE:"u"},DEFAULT_MAX_SUBSCRIPTIONS:300,DEFAULT_EVICTION_BATCH_SIZE:20,DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE:300,DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES:3,getArbiterType:function(a){return g+"message:"+a},getRTISkywalkerArbiterType:function(a,b){return g+"skywalker:"+a+":"+b}};e.exports=a}),null);
__d("PresenceUtil",["CurrentUser","randomInt"],(function(a,b,c,d,e,f,g){var h=c("randomInt")(0,4294967295)+1;function a(){return h}function b(){return c("CurrentUser").isLoggedInNow()}g.getSessionID=a;g.hasUserCookie=b}),98);
__d("PresencePrivacy",["Arbiter","ArbiterMixin","AsyncRequest","Bootloader","ChannelConstants","CurrentUser","PresencePrivacyInitialData","PresenceUtil","mixin"],(function(a,b,c,d,e,f,g){var h="/ajax/chat/privacy/settings.php",i="/ajax/chat/privacy/online_policy.php",j="/ajax/chat/privacy/visibility.php",k="friend_visibility",l="visibility",m="online_policy",n=babelHelpers["extends"]({},(b=d("PresencePrivacyInitialData")).privacyData),o=b.visibility,p=babelHelpers["extends"]({},b.privacyData),q=o,r=b.onlinePolicy,s=r,t=[],u=!1;e=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.WHITELISTED=1,c.BLACKLISTED=-1,c.UNLISTED=0,c.ONLINE=1,c.OFFLINE=0,c.ONLINE_TO_WHITELIST=0,c.ONLINE_TO_BLACKLIST=1,b)||babelHelpers.assertThisInitialized(c)}var c=b.prototype;c.init=function(a,b,c){};c.setVisibility=function(a){q=o;z(a);var b={visibility:a},c={type:l,visibility:a};b=H(j,b,c);C(b,c);return a};c.getVisibility=function(){return o};c.setOnlinePolicy=function(a){s=r;A(a);var b={online_policy:a},c={type:m,online_policy:a};b=H(i,b,c);C(b,c);return a};c.getOnlinePolicy=function(){return r};c.getFriendVisibility=function(a){return n[a]||v.UNLISTED};c.getFriendsVisibility=function(){return n};c.isUserOffline=function(){return this.getVisibility()===v.OFFLINE};c.allows=function(a){return this.isUserOffline()?!1:this.allowsIfViewerIsOnline(a)};c.allowsIfViewerIsOnline=function(a){var b=this.getOnlinePolicy();return b===v.ONLINE_TO_WHITELIST?n[a]==v.WHITELISTED:n[a]!=v.BLACKLISTED};c.getOnlinePolicyStr=function(){if(this.isUserOffline())return"offline";var a=this.getOnlinePolicy();if(a===v.ONLINE_TO_WHITELIST)return"online_to_whitelist";return a===v.ONLINE_TO_BLACKLIST?"online_to_blacklist":"unknown"};c.setFriendsVisibility=function(a,b){if(a.length>0){var c={};for(var d=0;d<a.length;d++){var e=a[d];p[e]=n[e];c[e]=b}w(c);e=b;e==v.UNLISTED&&(e=p[a[0]]);d={users:a,setting:b,setting_type:e};a={type:k,settings:c};e=H(h,d,a);C(e,a)}return b};c.setFriendVisibilityMap=function(a,b){for(var c in a)p[c]=n[c];w(a);c={type:k,settings:a};C(G(b,c),c)};c.allow=function(a){if(this.allows(a))throw new Error("allow() should only be called for users that are not already allowed");if(this.getVisibility()===v.OFFLINE)throw new Error("allow() should only be called when the user is already online");var b=this.getOnlinePolicy()===v.ONLINE_TO_WHITELIST?v.WHITELISTED:v.UNLISTED;return this.setFriendsVisibility([a],b)};c.disallow=function(a){if(!this.allows(a))throw new Error("disallow() should only be called for users that are not already disallowed");if(this.getVisibility()===v.OFFLINE)throw new Error("disallow() should only be called when the user is already online");var b=this.getOnlinePolicy()===v.ONLINE_TO_BLACKLIST?v.BLACKLISTED:v.UNLISTED;return this.setFriendsVisibility([a],b)};c.getBlacklist=function(){var a=[];for(var b in n)n[b]===v.BLACKLISTED&&a.push(b);return a};c.getWhitelist=function(){var a=[];for(var b in n)n[b]===v.WHITELISTED&&a.push(b);return a};c.getMapForTest=function(){return n};c.setMapForTest=function(a){n=a};return b}(c("mixin")(c("ArbiterMixin")));var v=new e();function w(a){var b;for(b in a){var d=a[b];if(b==c("CurrentUser").getID())throw new Error("Invalid to set current user's visibility");switch(d){case v.WHITELISTED:case v.BLACKLISTED:case v.UNLISTED:break;default:throw new Error("Invalid state: "+d)}}for(b in a)n[b]=a[b];v.inform("privacy-changed")}function x(a,b){var c={};c[a]=b;w(c)}function y(a){c("Bootloader").loadModules(["MessengerMQTTPresenceReporting"],function(b){b.reportChatVisibility(!!a)},"PresencePrivacy")}function z(a){switch(a){case v.ONLINE:case v.OFFLINE:break;default:throw new Error("Invalid visibility: "+a)}o=a;y(a);v.inform("privacy-changed");v.inform("privacy-user-presence-changed")}function A(a){switch(a){case v.ONLINE_TO_WHITELIST:case v.ONLINE_TO_BLACKLIST:break;default:throw new Error("Invalid default online policy: "+a)}r=a;v.inform("privacy-user-presence-changed");v.inform("privacy-changed")}function B(a,b){u=!0,a.send()}function C(a,b){t.push({request:a,data:b});if(!u){a=t.shift();B(a.request,a.data)}}function D(a,b){b=a.type;if(b===k){v.inform("privacy-availability-changed");for(var c in a.settings)p[c]=a.settings[c]}else b===l?q=a.visibility:b===m&&(s=a.online_policy),v.inform("privacy-user-presence-response")}function E(a,b){o!==q&&z(q),r!==s&&A(s),Object.assign(n,p),v.inform("privacy-changed"),t=[]}function F(a){u=!1;if(t.length>0){a=t.shift();B(a.request,a.data)}}function G(a,b){if(d("PresenceUtil")!=null){var c=a.getData();c.window_id=d("PresenceUtil").getSessionID();a.setData(c)}a.setHandler(function(a){return D(b,a)}).setErrorHandler(function(a){return E(b,a)}).setTransportErrorHandler(function(a){return E(b,a)}).setFinallyHandler(function(a){return F(a)}).setAllowCrossPageTransition(!0);return a}function H(a,b,d){return G(new(c("AsyncRequest"))(a).setData(b),d)}function a(a,b){a=b.obj;if(a.viewer_id!=c("CurrentUser").getID())throw new Error("Viewer got from the channel is not the real viewer");if(a.window_id===d("PresenceUtil").getSessionID())return;var e=a.data;if(a.event=="access_control_entry")e.target_ids.forEach(function(a){x(a,e.setting),p[a]=e.setting});else{if(a.event=="visibility_update"){b=e.visibility?v.ONLINE:v.OFFLINE;z(b);q=b}else a.event=="online_policy_update"&&(A(e.online_policy),s=e.online_policy);v.inform("privacy-user-presence-response")}}v.inform("privacy-changed");v.inform("privacy-user-presence-changed","state");c("Arbiter").subscribe(d("ChannelConstants").getArbiterType("privacy_changed"),a);c("Arbiter").subscribe(d("ChannelConstants").ON_CONFIG,function(a,b){a=b.getConfig("visibility",null);if(a!==null&&typeof a!=="undefined"){b=a?v.ONLINE:v.OFFLINE;z(b)}});f=v;g["default"]=f}),98);
__d("ChatVisibility",["Arbiter","PresencePrivacy"],(function(a,b,c,d,e,f){var g={isOnline:function(){return b("PresencePrivacy").getVisibility()===b("PresencePrivacy").ONLINE},hasBlackbirdEnabled:function(){return this.isVisibleToMostFriends()||this.isVisibleToSomeFriends()},isVisibleToMostFriends:function(){return b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_BLACKLIST&&b("PresencePrivacy").getBlacklist().length>0},isVisibleToSomeFriends:function(){return b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getWhitelist().length>0},goOnline:function(a){b("PresencePrivacy").getVisibility()===b("PresencePrivacy").OFFLINE&&(b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE),b("Arbiter").inform("chat-visibility/go-online")),a&&a()},goOffline:function(a){b("PresencePrivacy").getVisibility()===b("PresencePrivacy").ONLINE&&(b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE),b("Arbiter").inform("chat-visibility/go-offline")),a&&a()},toggleVisibility:function(){g.isOnline()?g.goOffline():g.goOnline()}};e.exports=g}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){a="DesktopHScrollUnit/itemInserted";b="DesktopHScrollUnit/itemShown";c="DesktopHScrollUnit/HideIndividualItem";d="DesktopHScrollUnit/scrollItemBeforeXout";e="DesktopHScrollUnit/unhideIndividualItem";var g="logLastAdXout",h="onXoutIndividualItem";f.HSCROLL_ITEM_INSERTED_EVENT=a;f.HSCROLL_ITEM_SHOWN_EVENT=b;f.HSCROLL_ITEM_HIDE_EVENT=c;f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT=d;f.HSCROLL_ITEM_UNHIDE_EVENT=e;f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN=g;f.HSCROLL_PAGER_ITEM_HIDE_EVENT=h}),66);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g,h){"use strict";var i=new Map();function a(a){var b=j(a.nodeID);if(!b)return;var d=c("DOM").scry(b,"._5v9_"),e=d&&d.length?d:[b];a.actorIDs.forEach(function(a){var b=[].concat(i.get(a)||[]);b.push.apply(b,e);i.set(a,b)})}function b(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){if(a===b)return;d("CSS").hide(a)})}function e(a){var b=j(a.nodeID);(i.get(a.actorID)||[]).forEach(function(a){d("CSS").show(a)});b&&d("Focus").setWithoutOutline(b)}function j(a){a=c("ge")(a);return a?d("EntstreamFeedObject").getRoot(a):null}g.register=a;g.hideAllFromActor=b;g.unhideAllFromActor=e;g.getRoot=j}),98);
__d("FBIDCheck",[],(function(a,b,c,d,e,f){"use strict";var g=/^[1-9]\d*$/;function a(a){a=a;if(a==null||typeof a==="string"&&!g.test(a))return!1;a=parseInt(a,10);return!a?!1:a>0&&a<22e8||a>=1e14&&a<=100099999989999||a>=89e12&&a<=89999999999999||a>=6000001e7&&a<=60000019999999}f.isUser_deprecated=a}),66);
__d("FBStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a="event";b="followee";c="friend";d="group";e="missingStoryData";var g="page",h="self",i="promotion",j="open_media",k="delete_media_attempted",l="attempt_to_send_reply",m="reaction_sticker_interacted",n="open_seen_summary",o="open_story",p="close_story",q="story_tray_load",r="send_story_failed",s="send_story_succeed",t="reply_attempt_completed",u="story_navigation",v="reshared_story_tap",w="reshared_story_view_story_tap",x={CLOSE_STORY:{CLICK_RIGHT:"click_right",CLICK_LEFT:"click_left",AUTO_JUMP:"auto_jump",AUTO_EXIT:"auto_exit",CLICK_EXIT:"click_exit",SWIPE_RIGHT:"swipe_right",SWIPE_LEFT:"swipe_left",SWIPE_EXIT:"swipe_exit",SWIPE_DOWN_EXIT:"swipe_down_exit",CLOSE_BUTTON_EXIT:"close_button_exit",BACK_BUTTON_EXIT:"back_button_exit"}},y="closeFromClickingOnModal",z="closeFromClickingOnModalCloseButton",A="closeFromLastStoryFinishing",B={ARCHIVE:"archive",POST_HEADER:"post_header_actor_photo",STORY_TRAY:"story_tray",IN_FEED:"in_feed",UNKNOWN:"unknown"};f.EVENT_STORY=a;f.FOLLOWEE_STORY=b;f.FRIEND_STORY=c;f.GROUP_STORY=d;f.MISSING_STORY_DATA=e;f.PAGE_STORY=g;f.SELF_STORY=h;f.STORY_PROMOTION=i;f.ACTION_OPEN_MEDIA=j;f.ACTION_DELETE_MEDIA=k;f.ACTION_SEND_REPLY_ATTEMPT=l;f.ACTION_SEND_REACTION_STICKER_INTERACTED=m;f.ACTION_OPEN_SEEN_SUMMARY=n;f.ACTION_OPEN_STORY=o;f.ACTION_CLOSE_STORY=p;f.ACTION_TRAY_LOAD=q;f.ACTION_SEND_STORY_FAILED=r;f.ACTION_SEND_STORY_SUCCEEDED=s;f.ACTION_REPLY_ATTEMPT_COMPLETED=t;f.ACTION_STORY_NAVIGATION=u;f.INTERACTION_TAP_RESHARED_STORY=v;f.INTERACTION_TAP_RESHARED_TOOLTIP=w;f.GESTURES=x;f.SOURCE_CLOSE_FROM_MODAL=y;f.SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON=z;f.SOURCE_CLOSE_FROM_LAST_STORY_FINISHING=A;f.SOURCES=B}),66);
__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h,i){"use strict";a=function(){function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=c("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var b=a.prototype;b.$5=function(){var a=this;c("Arbiter").subscribe("has_story_bucket_been_seen",function(b,e){if(a.$2===e){b=c("DOM").scry(a.$1,"._6_ut");b.length>0&&(d("CSS").removeClass(b[0],"_6_ut"),a.$4=!1)}});c("Arbiter").subscribe("update_next_thread_to_view",function(b,e){b=e.bucketOwnerId;e=e.threadId;if(a.$2===b&&a.$4){b=c("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",e).setBool("auto_open_viewersheet",!1).setString("story_action_source",d("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",b)}})};return a}();g["default"]=a}),98);
__d("LastActiveTimes",["fbt","ServerTime"],(function(a,b,c,d,e,f,g,h){var i={};function j(a){if(!a||a<0)return null;a=d("ServerTime").get()/1e3-a;a=Math.floor(a/60);var b=Math.floor(a/60),c=Math.floor(b/24);if(a<=1)return h._({"*":"{count}m"},[h._param("count",1,[0])]);else if(a<60)return h._({"*":"{count}m"},[h._param("count",a,[0])]);else if(b<24)return h._({"*":"{count}h"},[h._param("count",b,[0])]);else if(c<3)return h._({"*":"{count}d"},[h._param("count",c,[0])]);else return null}function k(a,b){(!(a in i)||i[a]<b)&&(i[a]=b)}function l(a){if(a in i)return i[a];else return 0}function a(a){for(var b in a)k(b,a[b])}function b(a){return j(l(a))}function c(a){return l(a)}function e(){return i}g.update=a;g.getShortDisplay=b;g.get=c;g.getDebugData=e}),226);
__d("PresenceConfig",["PresenceConfigInitialData"],(function(a,b,c,d,e,f,g){var h=babelHelpers["extends"]({},c("PresenceConfigInitialData"));function a(a,b){return a in h?h[a]:b}g.get=a}),98);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=c("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,b);return}i=!1;a.apply(d,l)}else j.reset(),n=c("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,b)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}g["default"]=a}),98);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f,g){function a(a,b,d,e,f){b===void 0&&(b=100);var g=function(a,b,d){return c("setTimeout")(a,b,d,!e)};return c("debounceCore")(a,b,d,g,c("clearTimeout"),f)}g["default"]=a}),98);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f,g){function a(a,b,d){return c("debounce")(a,b,d,!0)}g["default"]=a}),98);
__d("PresenceStatus",["ArbiterMixin","AvailableListConstants","AvailableListInitialData","Bootloader","ChatVisibility","CurrentUser","FBIDCheck","FBLogger","LastActiveTimes","ODS","PresenceConfig","PresencePrivacy","ServerTime","createObjectFrom","debounceAcrossTransitions","gkx"],(function(a,b,c,d,e,f,g){var h;(h||(h=d("ODS"))).setEntitySample("presence",1e-4);var i={},j={},k={},l={},m=babelHelpers["extends"]({},c("ArbiterMixin")),n=c("debounceAcrossTransitions")(function(){return m.inform("change")},0);function o(a){var b,e=parseInt(a.topic.match(/\d+$/),10);a=parseInt(JSON.parse(a.payload).lat,10);var f=Date.now()-a*1e3;f=d("PresenceConfig").get("active_cutoff")*1e3-f;d("LastActiveTimes").update((b={},b[e]=a,b));m.checkPresence(e);m.get(e)===c("AvailableListConstants").ACTIVE&&(window.clearTimeout(l[e].timeout),l[e].timeout=window.setTimeout(function(){m.checkPresence(e)},f))}function p(a){return/^\d+$/.test(a)}Object.assign(m,{resetPresenceData:function(){i={},j={}},reset:function(){m.resetPresenceData(),k={}},get:function(a){!p(a)&&d("PresenceConfig").get("presence_throw_for_malformed_id")&&c("FBLogger")("presence").warn("received malformed id '%s'",a);if(a==c("CurrentUser").getID())return d("ChatVisibility").isOnline()?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE;p(a)&&!d("FBIDCheck").isUser_deprecated(a)&&!l[a]&&((h||(h=d("ODS"))).bumpEntityKey(3303,"presence","page_subscribe"),l[a]={},d("PresenceConfig").get("presence_page_green_dot_sub")&&c("Bootloader").loadModules(["SkywalkerManager"],function(b){return b.subscribe("presence_push/fb/"+a,o)},"PresenceStatus"));var b=c("AvailableListConstants").OFFLINE;a in i&&(b=i[a]);c("PresencePrivacy").allows(a)||(b=c("AvailableListConstants").OFFLINE);return b},getCapabilities:function(a){a=j[a];return a?a:0},isPlayingCanvasGameUser:function(a){return!!k[a]},getGroup:function(a){return a.some(function(a){return a==c("CurrentUser").getID()?!1:m.get(a)===c("AvailableListConstants").ACTIVE})?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE},set:function(a,b,e,f,g,h){if(a==c("CurrentUser").getID())return!1;var k;if(b!=null){b=b==c("AvailableListConstants").ACTIVE?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE;e=m.get(a);k=e!=b;if((k||b==c("AvailableListConstants").ACTIVE)&&d("FBIDCheck").isUser_deprecated(a)){d("LastActiveTimes").update((f={},f[a]=d("ServerTime").get()/1e3,f))}i[a]=b}e=!1;g!=null&&(e=m.getCapabilities(a)!=g,j[a]=g);f=k||e;f&&!h&&n();return f},setPlayingCanvasGameFriends:function(a){if(!c("gkx")("22743"))return;k=c("createObjectFrom")(a)},getOnlineIDs:function(){var a,b=[];for(a in i)m.get(a)===c("AvailableListConstants").ACTIVE&&b.push(a);return b},getAllIDs:function(){return Object.keys(i)},getOnlineCount:function(){return m.getOnlineIDs().length},getPresenceStats:function(){var a=0,b=0,d=0;for(var e in i){a+=1;switch(m.get(e)){case c("AvailableListConstants").OFFLINE:b+=1;break;case c("AvailableListConstants").ACTIVE:d+=1;break;default:break}}return{total:a,offline:b,active:d}},getAllDebugInfo:function(){var a={};for(var b in i)a[b]={p:i[b],vc:j[b]};return a},setMultiFromMQTT:function(a){var b={};Array.isArray(a)&&a.forEach(function(a){a.l&&(b[a.u]=a.l),m.set(a.u,a.p,!1,"mqtt",a.c,!0)});d("LastActiveTimes").update(b);n()},setMultiChatproxy:function(a){var b={};for(var c in a){a[c].lat&&(b[c]=a[c].lat);var e=a[c].p;m.set(c,e,!1,"chatproxy",a[c].vc,!0)}d("LastActiveTimes").update(b);n()},setMultiActive:function(a,b){var d=!1;a.forEach(function(a){m.set(a,c("AvailableListConstants").ACTIVE,!1,b,null,!0)&&(d=!0)});d&&n()},checkPresence:function(a){var b=!1,e=Math.ceil(Date.now()/1e3)-d("LastActiveTimes").get(a);m.set(a,e<d("PresenceConfig").get("active_cutoff")?c("AvailableListConstants").ACTIVE:c("AvailableListConstants").OFFLINE,!1,"pylon",null,!0)&&(b=!0);b&&n()}});c("AvailableListInitialData").activeList&&c("AvailableListInitialData").activeList.length>0&&m.setMultiActive(c("AvailableListInitialData").activeList,"available_list_active");c("AvailableListInitialData").playingNow&&c("AvailableListInitialData").playingNow.length>0&&m.setPlayingCanvasGameFriends(c("AvailableListInitialData").playingNow);c("AvailableListInitialData").lastActiveTimes&&Object.keys(c("AvailableListInitialData").lastActiveTimes).length>0&&d("LastActiveTimes").update(c("AvailableListInitialData").lastActiveTimes);a=m;g["default"]=a}),98);