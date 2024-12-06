!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d83d149c-f432-4aa6-a360-471008a64ba4",e._sentryDebugIdIdentifier="sentry-dbid-d83d149c-f432-4aa6-a360-471008a64ba4")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87365],{88849:function(e,t,n){"use strict";n.d(t,{Cw:function(){return PledgeProvider}});var r=n(50959),o=n(61547),i=n(11527);let a=(0,r.createContext)({crowdfundStatus:null,donationInfo:null,partner:null,fundraiserId:null,isDonationSuccessful:!1,isFundraisingEnabled:!1,loading:!1}),PledgeProvider=e=>{var t,n,s,l,d,u,c;let{children:p,groupId:g,isLoggedIn:v=!1}=e,{loading:E,data:f,refetch:_}=(0,o.HJ)({fetchPolicy:"no-cache",variables:{groupId:g},skip:!g||!v}),{0:y,1:b}=(0,r.useState)(!1);(0,r.useEffect)(()=>{let handlePostMessage=e=>{try{let t="string"==typeof e.data?JSON.parse(null==e?void 0:e.data):null==e?void 0:e.data;"DonateCompleted"===t.message&&(b(!0),_())}catch(e){}};return window.addEventListener("message",handlePostMessage),()=>{window.removeEventListener("message",handlePostMessage)}},[_]);let m=null==f?void 0:null===(t=f.group)||void 0===t?void 0:t.fundraising,N={donationInfo:m?{goal:parseInt(null===(n=m.fundraiser)||void 0===n?void 0:n.goal),totalDonors:parseInt(null===(s=m.fundraiser)||void 0===s?void 0:s.totalDonors),totalRaised:parseInt(null===(l=m.fundraiser)||void 0===l?void 0:l.totalRaised),description:null===(d=m.fundraiser)||void 0===d?void 0:d.description}:null,isDonationSuccessful:y,crowdfundStatus:null==m?void 0:null===(u=m.fundraiser)||void 0===u?void 0:u.crowdfundStatus,partner:null==m?void 0:m.partner,fundraiserId:null==m?void 0:null===(c=m.fundraiser)||void 0===c?void 0:c.id,isFundraisingEnabled:!E&&(null==m?void 0:m.enabled),loading:E};return(0,i.jsx)(a.Provider,{value:N,children:p})};t.ZP=()=>(0,r.useContext)(a)},61547:function(e,t,n){"use strict";n.d(t,{HJ:function(){return useGetFundraiserForGroupQuery}});var r=n(19278),o=n(76185),i=n(74596);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let a={},s=i.Ps`
  query getFundraiserForGroup($groupId: ID!) {
    group(id: $groupId) {
      id
      fundraising {
        enabled
        setupComplete
        partner {
          url
          key
        }
        fundraiser {
          id
          goal
          totalDonors
          totalRaised
          beneficiary {
            category
            purpose
          }
          description
          crowdfundStatus {
            bank
            payments
          }
        }
      }
    }
  }
`;function useGetFundraiserForGroupQuery(e){let t=_objectSpread(_objectSpread({},a),e);return o.a(s,t)}},63994:function(e,t,n){"use strict";var r=n(50959),o=n(18230);t.Z=function(e){let{parentRef:t,isOpen:n,placement:i="bottom",strategy:a="absolute",updateHash:s,popperModifiers:l}=e,d=(0,r.useRef)(),{0:u,1:c}=(0,r.useState)(!1),{styles:p,attributes:g,forceUpdate:v}=(0,o.D)(t,null==d?void 0:d.current,{placement:i,strategy:a,modifiers:l});return(0,r.useEffect)(()=>{n&&null!=d&&d.current&&c(!0),n||c(!1)},[d,n,c]),(0,r.useEffect)(()=>{v&&n&&(u||void 0!==s)&&v()},[u,v,n,s]),{styles:p,attributes:g,popupRef:d,isElementReady:u}}},52927:function(e,t,n){"use strict";n.d(t,{En:function(){return o},Sd:function(){return i},aE:function(){return sendInit}});var r=n(47971);let o="GroupHome",pushEvent=e=>(t,n)=>{(0,r.ZP)({event:"gaEvent",eventCategory:e,eventAction:`${t}`,eventLabel:`${n}`})},i={MEETUP_TRACKING:o,GTM_TRACKING:o,GTM_BANNER_TRACKING:"group_home_event_create_banner_view",PRO_MEMBERS_NUDGE:"organizerUpgradeGroupHome",MODAL_DIALOG:"dialog",MODAL_EVENT_DELETED:"event-deleted-modal",CANCEL_EVENT_RADIO:"cancel-event-radio",SIMILAR_EVENT_CARD:"similar-events-card",MODAL_SPONSORS:"sponsors-modal",BTN_REMOVE_ADS:"removeAds-groupHome-about",BTN_REMOVE_MOBILE_ADS:"removeAds-groupHome-about-mobile",BTN_CLOSE_MODAL_SPONSORS:"sponsors-modal-close",BTN_CLOSE_MODAL_EVENT_DELETED:"event-deleted-modal-close",BTN_READ_MORE_DESCRIPTION:"read-more-link",BTN_SEE_ALL_MEMBERS:"see-all-members-button",BTN_SEE_ALL_EVENTS:"see-all-upcoming-events-button",BTN_SEE_ALL_PAST_EVENTS:"see-all-past-events-button",BTN_SEE_ALL_SPONSORS:"sponsor-see-all-group-home-button",BTN_SEE_ALL_PHOTOS:"see-all-photos-button",BTN_SEE_ALL_SIMILAR_EVENTS:"see-all-similar-events-button",BTN_ORGANIZER_AVATAR:"organizer-photo",BTN_ORGANIZER:"organizer-name",BTN_SPONSOR_CARD:"sponsor-group-home-button",BTN_MESSAGE_ORG:"message-organizer-link",BTN_MEMBER_AVATARS:"member-photo-icons",BTN_ATTEND_EVENT:"attend-event-btn",BTN_EVENT_CARD:"event-card",BTN_PAST_EVENT_CARD:"past-event-card",BTN_FEATURED_EVENT_CARD:"featured-event-card",BTN_TOPIC_LINK:"topic-link",BTN_COPY_LINK:"group-share-copy-link",BTN_START_A_DISCUSSION_LINK:"start-discussion-link",BTN_NO_UPCOMING_EVENTS_NUDGE_BANNER:"banner-CreateEvent",BTN_NO_UPCOMING_EVENTS_NUDGE:"CreateEvent_btn_no_upcoming_event",BTN_AI_SCHEDULE_NUDGE:"nudge-ai-generate-button",PRO_BANNER_LINK:"group-home--multi-group-org-core-to-pro-nudge--banner",EMAIL_ANNOUNCEMENT_BANNER:"group-home--email-announcement--banner",FUNDRAISING_LINK:"complete-fundraising-link",FIRST_EVENT_SOCIAL_MEDIA_PAGE_LINK:"group-first-event-social-media-page-link",PHOTO_ITEM:"photo",LINK_PHOTO_ITEM:"select-photo",getSocialLink:e=>`group-${e}-button`.toLowerCase(),pushEvent:pushEvent(o),pushSuccess:e=>pushEvent(o)(e,"success"),pushError:e=>pushEvent(o)(e,"error"),PAGE_TYPE:o},sendInit=(e,t)=>(0,r.ZP)({"meetup.group.name":e,"page.type":"GroupHome","ga.customDimension.meetup.category":t})},85491:function(e,t,n){"use strict";n.d(t,{tP:function(){return FindCityPage},ce:function(){return getFindCityPageUrl}});var r=n(50959),o=n(69930),i=n(57705),a=n(80341),s=n(92652),l=n(64911),d=n(91114),u=n(50542),c=n(52644),p=n(61400),g=n(97248),v=n(11527),city_FindCitySeoHead=e=>{let{city:t,isIndexed:n}=e,{asPath:r}=(0,p.useRouter)(),[o]=r.split("?");return(0,v.jsx)(g.ZP,{title:`Events in ${t} | Meetup`,description:`Find events in ${t} to connect with people who share your interests. Whatever your interest, Meetup helps you connect with like-minded people.`,robots:n?"index, follow":"noindex, follow",path:o})},E=n(23716);let f="view-city-page",getSeeAllClickId=e=>`city-page-${e}-see-all-click`,getEventCardClickId=e=>`city-page-${e}-event-card-click`;function FindCityPage(e){let{eventsInLocation:t,todayEvents:n,thisWeekendEvents:p,topicalEvents:g,popularGroups:_,locale:y,cityData:b,isNextWeekend:m,isIndexed:N}=e,S=(0,o.N)(y),{key:O,image:h,location:T,locationQueryParam:C}=b,{timeZone:I}=T,P=(0,l.H)(T,c.a),A=T.city,$=(0,r.useMemo)(()=>({userLocation:b.locationQueryParam}),[b.locationQueryParam]);return(0,v.jsx)(i.UI,{searchFilters:$,children:(0,v.jsxs)(s.Z,{noConstraint:!0,pageTrackingId:`${f}_${b.key}`,gtmPageName:`${f}_${b.key}`,headerProps:{className:"xs:mb-0",isSticky:!1,location:T,locationName:b.location.name_string},footerProps:{className:"mt-0"},className:"z-10",children:[(0,v.jsx)(city_FindCitySeoHead,{city:P,isIndexed:N}),(0,v.jsxs)("main",{id:a.Om,children:[(0,v.jsx)("header",{className:"bg-ds-neutral50",children:(0,v.jsx)(E.TB,{className:"py-12 lg:py-20",image:h,longCityName:P,shortCityName:A})}),(0,v.jsx)("article",{children:(0,v.jsx)(E.zW,{className:"py-10 lg:py-16",timeZone:I,events:t,locale:y,title:`Events in ${A}`,subtitle:`Browse the most popular activities in ${A}`,seeAllLink:(0,u.Re3)({queryString:{location:C}}),seeAllEventLabel:getSeeAllClickId(O),cardEventLabel:getEventCardClickId(O),eventOrigin:"city_most_popular_event"})}),N&&(0,v.jsx)("article",{children:(0,v.jsx)(E.tv,{className:"py-10 lg:py-16",title:"What brings you to Meetup today?",pages:c.o.map(e=>({name:e.name,url:`/find/${C}/${e.slug}/`,thumbnail:e.image}))})}),(0,v.jsx)("article",{children:(0,v.jsx)(E.zW,{className:"py-10 lg:py-16",timeZone:I,events:n,locale:y,title:`Events in ${A} today`,subtitle:`Check out the best activities in ${A} today`,seeAllLink:(0,u.Re3)({queryString:{location:C,dateRange:"today"}}),seeAllEventLabel:getSeeAllClickId(O),cardEventLabel:getEventCardClickId(O),eventOrigin:"city_events_today"})}),(0,v.jsx)("article",{children:(0,v.jsx)(E.zW,{className:"py-10 lg:py-16",timeZone:I,events:p,locale:y,title:`Events in ${A} this weekend`,subtitle:`Browse the most interesting activities of the weekend in ${A}`,seeAllLink:(0,u.Re3)({queryString:{location:C,dateRange:m?d.T3.nextWeekend:d.T3.thisWeekend}}),seeAllEventLabel:getSeeAllClickId(O),cardEventLabel:getEventCardClickId(O),eventOrigin:"city_events_this_weekend"})}),(0,v.jsx)("article",{children:(0,v.jsx)(E.Fl,{className:"py-12 lg:py-16",groups:_,title:`Most popular groups in ${A}`,subtitle:"And if you don't find the right group for you, you can always start your own!",seeAllLink:(0,u.Re3)({queryString:{location:C,source:"GROUPS"}}),seeAllEventLabel:"city-popularGroupsList-seeAll",eventOrigin:"city_popular_groups"})}),(0,v.jsx)("article",{className:"bg-ds-neutral50",children:(0,v.jsx)(E.DG,{className:"py-12",city:P,ctaHref:S,ctaEventLabel:"city-start-a-group-button"})}),(0,v.jsx)("article",{children:(0,v.jsx)(E.zW,{className:"py-10 lg:py-16",timeZone:I,events:g,locale:y,title:`Live music events in ${A}`,subtitle:`Find the best activities for music lovers in ${A}`,seeAllLink:(0,u.Re3)({queryString:{location:C,categoryId:395}}),seeAllEventLabel:getSeeAllClickId(O),cardEventLabel:getEventCardClickId(O),eventOrigin:"city_live_music_events"})})]})]})})}n(53933),n(95774),n(61056),n(92618),n(11024),n(9953),n(33986),n(87373),n(12075),n(83824),n(50895),n(42571),n(93086),n(4267),n(12923);var _=n(83506),y=n(74596),b=n(62551);y.Ps`
  query getNewCityPageData(
    $lat: Float!
    $lon: Float!
    $firstEventsInLocation: Int!
    $firstTodayEvents: Int!
    $firstThisWeekendEvents: Int!
    $firstTopicalEvents: Int!
    $topicalTopicCategory: ID
    $startDateRange: String
    $todayEnd: String
    $thisWeekendStart: String
    $thisWeekendEnd: String
    $sortField: RecommendedEventsSortField
    $popularGroupsFirst: Int!
    $groupSearchRadius: Int!
    $dataConfiguration: String
  ) {
    eventsInLocation: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $startDateRange
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstEventsInLocation
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    todayEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $startDateRange
        endDateRange: $todayEnd
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstTodayEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    thisWeekendEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        startDateRange: $thisWeekendStart
        endDateRange: $thisWeekendEnd
        eventType: PHYSICAL
        doConsolidateEvents: true
      }
      first: $firstThisWeekendEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
    popularGroups: recommendedGroups(
      filter: { lat: $lat, lon: $lon, radius: $groupSearchRadius }
      first: $popularGroupsFirst
      ignoreNewGroups: true
    ) {
      edges {
        node {
          ...PopularGroupSearch
          keyGroupPhoto {
            id
            baseUrl
          }
          city
          state
          country
        }
      }
    }
    topicalEvents: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        eventType: PHYSICAL
        startDateRange: $startDateRange
        topicCategoryId: $topicalTopicCategory
        doConsolidateEvents: true
      }
      first: $firstTopicalEvents
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      edges {
        node {
          ...EventForGuestCard
        }
      }
    }
  }
  ${b.Jp}
  ${b.pK}
`;var m=n(39570);let getFindCityPageUrl=e=>{let{location:t,locale:n=m.ZW}=e;return(0,u.Re3)({term:(0,_.u$)(t,{borough:!1,neighborhood:!1}),locale:n})}},10975:function(e,t,n){"use strict";var r=n(19278),o=n(10175),i=n(50959),a=n(63994),s=n(4814),l=n(76729),d=n(48178),u=n(90465),c=n.n(u),p=n(11527);let g=["isOpen","children","parentRef","placement","updateHash","onClose"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let v=(0,s.Z)("p-4 rounded-sm text-white absolute text-left bg-tooltipDark z-tooltip inline-block","t1tqlh7s");t.Z=e=>{let{isOpen:t,children:n,parentRef:r,placement:u="auto",updateHash:E,onClose:f}=e,_=(0,o.Z)(e,g),y=(0,i.useRef)(),{styles:b,attributes:m,popupRef:N,isElementReady:S}=(0,a.Z)({parentRef:r,isOpen:t,placement:u,updateHash:E,popperModifiers:[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{padding:8,element:null==y?void 0:y.current}}]});if((0,d.Z)(N,f),(0,i.useEffect)(()=>{let e;return t&&f&&(e=(0,l.Z)(window,{Escape:f})),()=>{var t;null===(t=e)||void 0===t||t()}},[t,f]),!t)return null;let O=(0,s.Z)(_.className,c().tooltip,v,!S&&"hidden");return(0,p.jsxs)("div",_objectSpread(_objectSpread(_objectSpread({ref:N},_),{},{style:b.popper},m.popper),{},{className:O,children:[(0,p.jsx)("div",{ref:y,style:b.arrow,className:c().tip,"data-popper-arrow":!0}),n]}))},n(61451)},83824:function(e,t,n){"use strict";n.d(t,{d:function(){return commonServersidePropsMiddleware}});var r=n(42571),o=n(39570);let getMemberLocale=e=>{var t,n;let i=null==e?void 0:e.locale;if(i&&i!==o.ZW)return i;let a=(0,r._c)(null==e?void 0:null===(t=e.req)||void 0===t?void 0:t.cookies),s=(0,r.Cz)(null==e?void 0:null===(n=e.req)||void 0===n?void 0:n.cookies,a?r.nK:r.fY);return s||(null==e?void 0:e.defaultLocale)};var i=n(69886);function commonServersidePropsMiddleware(e){let t=getMemberLocale(e),{headers:n,cookies:o}=e.req;return{isMobile:(0,i.tq)(n["user-agent"]??""),showMobileBanner:(0,r.Z8)(o),memberLocale:t,localeMessages:{}}}},50895:function(e,t,n){"use strict";var r=n(19278),o=n(92618),i=n(61217);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.Z=(e,t,n)=>e.query(_objectSpread(_objectSpread({},n),{},{query:i.yv,context:{uri:o.M}}))},61451:function(e){e.exports={t1tqlh7s:"t1tqlh7s"}},90465:function(e){e.exports={tooltip:"Tooltip_tooltip__8WuWP",tip:"Tooltip_tip__fIlXQ"}}}]);