!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="63c9497f-22ef-4d4e-9e5f-0b8c7ea6963b",e._sentryDebugIdIdentifier="sentry-dbid-63c9497f-22ef-4d4e-9e5f-0b8c7ea6963b")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62290],{90840:function(e,t,r){"use strict";var n=r(66616),o=r.n(n),s=r(89704),a=r(11527);t.Z=e=>{let{width:t,height:r,isBigLogo:n}=e,i=n?{width:144,height:32}:{width:49,height:44};return(0,a.jsx)(o(),{loader:s.XI,src:n?"/images/pledge/pledge-logo.svg":"/images/pledge/pledge-heart.svg",height:r||i.height,width:t||i.width,alt:""})}},99957:function(e,t,r){"use strict";var n=r(19278),o=r(50959),s=r(73193),a=r(80417),i=r(4814),d=r(90840),l=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let u=(0,s.vU)({poweredBy:{id:"pledge.pledgePoweredBy.poweredBy",defaultMessage:"Powered by"}});t.Z=(0,o.memo)(e=>{let{className:t,width:r=100,height:o=23}=e;return(0,l.jsxs)("div",{className:(0,i.Z)("flex items-center justify-center",t),children:[(0,l.jsx)("div",{className:"mr-2 text-xs font-medium",children:(0,l.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},u.poweredBy))}),(0,l.jsx)(d.Z,{isBigLogo:!0,width:r,height:o})]})})},83062:function(e,t,r){"use strict";r.d(t,{Z:function(){return Pledge_PledgeModal}});var n=r(20963),o=r(11527),Pledge_PledgeDonationWidget=e=>{let{partnerKey:t,fundraiserId:r,amount:n}=e;return(0,o.jsx)("div",{className:"plg-donate","data-partner-key":t,"data-item-id":r,"data-amount":n,"data-style-brand-color":"#00798A"})},Pledge_PledgeModal=e=>{let{isOpen:t,onClose:r,partnerKey:s,fundraiserId:a,amount:i}=e;return(0,o.jsx)(n.default,{isOpen:t,onClose:r,dataEventLabel:"Pledge Modal",className:"md:!min-w-[700px]",children:(0,o.jsx)(Pledge_PledgeDonationWidget,{partnerKey:s,fundraiserId:a,amount:i})})}},7027:function(e,t,r){"use strict";var n=r(19278),o=r(59933),s=r.n(o),a=r(50959),i=r(73193),d=r(80417),l=r(4814),u=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c=(0,i.vU)({donationProgressText:{id:"pledge.donationProgress.donationProgressText.v2",defaultMessage:"{totalRaised} of ${goal} raised by {totalDonors} {appeal}"},beTheFirstToDonate:{id:"pledge.donationProgress.beTheFirstToDonate",defaultMessage:"Be the first to donate"},people:{id:"pledge.donationProgress.people",defaultMessage:"people"},person:{id:"pledge.donationProgress.person",defaultMessage:"person"}}),g=(0,a.memo)(e=>{let{goal:t,totalRaised:r,totalDonors:n,className:o,textClassName:i,barClassName:g}=e,p=1===r?c.person:c.people,f=(0,a.useMemo)(()=>Math.ceil(r/t*100),[t,r]);return s()(t)&&s()(r)?(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("div",{className:(0,l.Z)("relative mx-auto mb-2 h-2.5 w-full overflow-hidden rounded-full bg-gray2",g),children:(0,u.jsx)("div",{className:"h-full rounded-full bg-viridianLight",style:{width:`${f}%`}})}),(0,u.jsx)("div",{className:(0,l.Z)(i),children:0===r?(0,u.jsx)(d.Z,_objectSpread({},c.beTheFirstToDonate)):(0,u.jsx)(d.Z,_objectSpread(_objectSpread({},c.donationProgressText),{},{values:{goal:null==t?void 0:t.toLocaleString(),totalDonors:n,totalRaised:(0,u.jsxs)("span",{children:["$",null==r?void 0:r.toLocaleString()]}),appeal:(0,u.jsx)(d.Z,_objectSpread({},p))}}))})]}):null});g.displayName="PledgeDonationProgress",t.Z=g},22889:function(e,t,r){"use strict";r.d(t,{Z:function(){return PledgePreviewDonation_PledgePreview}});var n=r(19278),o=r(10175),s=r(50959),a=r(73193),i=r(36122),d=r(80417),l=r(98396),u=r(72927),c=r(50542),g=r(99957),p=r(4814),f=r(28201),m=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let b=(0,a.vU)({donateNow:{id:"pledgePreview.donateNow",defaultMessage:"Donate now"},other:{id:"pledgePreview.other",defaultMessage:"Other"}});var PledgePreviewDonation_MakeDonation=e=>{let{onOpenModal:t,buttonsContainerClass:r}=e,n=[{label:"$2",value:2,trackingPostfix:"1"},{label:"$5",value:5,trackingPostfix:"2"},{label:"$10",value:10,trackingPostfix:"3"},{label:"$20",value:20,trackingPostfix:"4"},{label:"$50",value:50,trackingPostfix:"5"},{label:(0,m.jsx)(d.Z,_objectSpread({},b.other)),value:0,trackingPostfix:"OTHER"}];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"w-full pb-2 text-left text-sm font-medium md:text-base",children:(0,m.jsx)(d.Z,_objectSpread({},b.donateNow))}),(0,m.jsx)("div",{className:(0,p.Z)("flex w-full justify-between space-x-1.5 md:w-2/3",r),children:n.map(e=>{let{label:r,value:n,trackingPostfix:o}=e;return(0,m.jsx)("button",{onClick:()=>t(n),className:"grow basis-0 cursor-pointer rounded-lg border border-gray2 py-1.5 text-sm hover:bg-viridian hover:text-white","data-event-label":f.Rr[`DONATE_SHORTCUT_${o}`],children:r},n)})})]})},y=r(7027);let h=["onOpenModal","urlname","groupName","makeDonationButtonsContainerClass"];function PledgePreview_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function PledgePreview_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?PledgePreview_ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):PledgePreview_ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let v=(0,a.vU)({groupFund:{id:"pledgePreview.groupFund",defaultMessage:"Group Fund"},helpUs:{id:"pledgePreview.helpUs",defaultMessage:"Help us reach our goal"},stats:{id:"pledgePreview.stats",defaultMessage:"{totalRaised} of {goal} raised by {totalDonors} people"}});var PledgePreviewDonation_PledgePreview=e=>{let{onOpenModal:t,urlname:r,groupName:n,makeDonationButtonsContainerClass:a}=e,p=(0,o.Z)(e,h),{formatMessage:f}=(0,i.Z)(),b=(0,c.ZI7)(r),w=(0,s.useMemo)(()=>{if(!p.description)return f(v.helpUs);{let e=null===l.cF||void 0===l.cF?void 0:l.cF.find(e=>e.trnId===(null==p?void 0:p.description));return e?f(e.label):null==p?void 0:p.description}},[p.description,f]);return(0,m.jsxs)("div",{id:"pledge",className:"rounded-lg border border-gray2 bg-white p-6",children:[(0,m.jsx)("span",{className:"font-semibold md:text-xl",children:n||(0,m.jsx)(d.Z,PledgePreview_objectSpread({},v.groupFund))}),(0,m.jsx)("div",{className:"mb-3 mt-2 text-sm md:text-base",children:w}),(0,m.jsx)(y.Z,PledgePreview_objectSpread(PledgePreview_objectSpread({},p),{},{className:"mb-5",textClassName:"text-sm mb-2.5"})),(0,m.jsx)(PledgePreviewDonation_MakeDonation,{onOpenModal:t,buttonsContainerClass:a}),(0,m.jsxs)("div",{className:"flex flex-col justify-between space-y-2 pt-6 sm:flex-row sm:space-x-3 sm:space-y-0",children:[(0,m.jsx)(u.w,{link:b}),(0,m.jsx)(g.Z,{className:"w-full/2 !justify-end",width:76,height:17})]})]})}},28803:function(e,t,r){"use strict";var n=r(19278),o=r(10175),s=r(50959),a=r(73193),i=r(80417),d=r(4814),l=r(95397),u=r(90840),c=r(7027),g=r(11527);let p=["wrapperClassName"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let f=(0,a.vU)({title:{id:"pledgePreview.pledgePreviewSuccess.titleSuccess",defaultMessage:"Thanks for the donation!"},message:{id:"pledgePreview.pledgePreviewSuccess.message",defaultMessage:"Your generous contribution will go directly to the group organizer. Thank you for supporting community on Meetup."}}),m=(0,s.memo)(e=>{let{wrapperClassName:t}=e,r=(0,o.Z)(e,p);return(0,g.jsxs)("div",{className:(0,d.Z)("rounded-lg border-gray2 bg-white px-6 py-7 text-center",t),children:[(0,g.jsxs)("div",{className:"mb-2 flex flex-col items-center justify-center gap-2 md:flex-row",children:[(0,g.jsxs)("div",{className:"flex items-center gap-2",children:[(0,g.jsx)(u.Z,{width:l._N,height:l.L_}),(0,g.jsx)("h3",{className:"font-medium",children:(0,g.jsx)(i.Z,_objectSpread({},f.title))})]}),(0,g.jsx)("p",{className:"my-2 md:hidden",children:(0,g.jsx)(i.Z,_objectSpread({},f.message))})]}),(0,g.jsx)(c.Z,_objectSpread(_objectSpread({},r),{},{className:"text-center",textClassName:"mb-4",barClassName:"w-3/4"}))]})});m.displayName="PledgePreviewSuccess",t.Z=m},19766:function(e,t,r){"use strict";var n=r(22922),o=r.n(n),s=r(11527);t.Z=e=>{let{baseUrl:t}=e;return(0,s.jsx)(o(),{src:`${t}/assets/widget.js`,id:"plg-widget",async:!0})}},95397:function(e,t,r){"use strict";var n;let o;r.d(t,{L_:function(){return a},Ln:function(){return d},_N:function(){return s},uP:function(){return o},z5:function(){return i}}),(n=o||(o={})).PledgeUserRegistered="pledge_user_registered",n.HidePledgePrompts="hide_pledge_prompts";let s=24,a=22,i="enable_fundraising_pledge_banner_show",d=10},28201:function(e,t,r){"use strict";let n,o,s,a,i;r.d(t,{CC:function(){return s},Rr:function(){return i},S_:function(){return trackPledgeActivateSuccess},ZU:function(){return a},dX:function(){return p},tw:function(){return n},zx:function(){return o}});var d,l,u,c,g=r(47971);(d=n||(n={})).LOGGED_IN_HOME="Logged-in Home",d.FUNDRAISER_SETTINGS="Fundraiser Settings",d.GROUP_SETTINGS="Group Settings",d.EVENT_HOME="Event Home",d.GROUP_CREATING="Group Creating",(o||(o={})).FUNDRAISING="fundraising--group-settings",(l=s||(s={})).ACTIVATE="activate-pledge--home",l.NOT_NOW_ACTIVATE="not-now-activate-pledge--home",l.DISMISS="dismiss-pledge--home",l.LEARN_MORE="learn-more-pledge--home",l.SERVICE_AGREEMENT="service-agreement-pledge--home",l.COMPLETE_PROFILE="complete-profile-pledge--home",l.NOT_NOW_ACCOUNT="not-now-account-pledge--home",l.COMPLETE_PAUSED_PROFILE="complete-paused-profile-pledge--home",l.FUNDRAISER_SETTINGS="fundraiser-settings-pledge--home",l.CLOSE="close-pledge--home",l.TOGGLE_GROUP="toggle-group-pledge--home",l.CONFIRM_TOGGLE_GROUP="confirm-toggle-group-pledge--home",l.CANCEL_TOGGLE_GROUP="cancel-toggle-group-pledge--home",l.SETTINGS_GROUP_SELECTION="settings-group-selection-pledge--home",(u=a||(a={})).ACTIVATE="activate-pledge--fundraiser-settings",u.LEARN_MORE="learn-more-pledge--fundraiser-settings",u.SERVICE_AGREEMENT="service-agreement-pledge--fundraiser-settings",u.COMPLETE_PROFILE_ACCOUNT="complete-profile-account-pledge--fundraiser-settings",u.COMPLETE_PROFILE_BANKING="complete-profile-banking-pledge--fundraiser-settings",u.GO_PLEDGE_COMPLETE="go-pledge-complete--fundraiser-settings",u.GO_PLEDGE_ERROR="go-pledge-error--fundraiser-settings",u.FUNDRAISER_TOGGLE="fundraiser-toggle--fundraiser-settings",u.FUNDRAISER_CATEGORY="fundraiser-category--fundraiser-settings",u.FUNDRAISER_SAVE="fundraiser-save--fundraiser-settings",(c=i||(i={})).DONATE_NOW="donate-now",c.DONATE_SHORTCUT_1="donate-shortcut-1",c.DONATE_SHORTCUT_2="donate-shortcut-2",c.DONATE_SHORTCUT_3="donate-shortcut-3",c.DONATE_SHORTCUT_4="donate-shortcut-4",c.DONATE_SHORTCUT_5="donate-shortcut-5",c.DONATE_SHORTCUT_OTHER="donate-shortcut-other";let p={[n.LOGGED_IN_HOME]:{activate:s.ACTIVATE,decline:s.NOT_NOW_ACTIVATE,learnMore:s.LEARN_MORE,serviceAgreement:s.SERVICE_AGREEMENT},[n.FUNDRAISER_SETTINGS]:{activate:a.ACTIVATE,decline:null,learnMore:a.LEARN_MORE,serviceAgreement:a.SERVICE_AGREEMENT},[n.GROUP_SETTINGS]:{activate:null,decline:null,learnMore:null,serviceAgreement:null},[n.EVENT_HOME]:{activate:null,decline:null,learnMore:null,serviceAgreement:null},[n.GROUP_CREATING]:{activate:null,decline:null,learnMore:null,serviceAgreement:null}},trackPledgeActivateSuccess=(e,t)=>{(0,g.ZP)({event:"pledge_activate_success",eventCategory:"Pledge",eventAction:"success",eventLabel:"Pledge activation success",groupId:e,encId:t})}},72927:function(e,t,r){"use strict";r.d(t,{w:function(){return LinkCopyButton}});var n=r(19278),o=r(50959),s=r(73193),a=r(80417),i=r(52374),d=r(49516),l=r(2931),u=r(52927),c=r(11527);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let g=(0,s.vU)({copyLink:{id:"copyBtn.copyLink",defaultMessage:"Copy link"},linkCopySuccess:{id:"copyBtn.linkCopySuccess",defaultMessage:"Link has been successfully copied"}}),LinkCopyButton=e=>{let{link:t}=e,{sendNotification:r}=(0,d.ZP)(),{0:n,1:s}=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(n){let e=setTimeout(()=>{s(!1)},1500);return()=>clearTimeout(e)}},[n]),(0,c.jsxs)(l.ZP,{className:"flex items-center justify-center",variant:l.c7.SECONDARY,onClick:()=>{navigator.clipboard.writeText(t),u.Sd.pushEvent("click",u.Sd.BTN_COPY_LINK),r((0,c.jsx)(a.Z,_objectSpread({},g.linkCopySuccess)),{autoClose:!0}),s(!0)},children:[(0,c.jsx)("div",{className:"mr-1.5 flex text-white",children:(0,c.jsx)(i.ZP,{icon:n?"check":"copy",outline:!0})}),(0,c.jsx)(a.Z,_objectSpread({},g.copyLink))]})}},98396:function(e,t,r){"use strict";r.d(t,{Qj:function(){return l},T1:function(){return f},cF:function(){return p},g2:function(){return m},pE:function(){return c},pT:function(){return a},s5:function(){return d},uW:function(){return g},vq:function(){return u},xZ:function(){return i}});var n=r(53933),o=r(55423),s=r(22600);let a="/images/home/PledgeBanner_icon.svg",i=110,d=24,l="/images/pledge/fundraising-logo.svg",u=48,c="di7ss6z",g=[{trnId:n.a9.Animals,label:s.Z.animals},{trnId:n.a9.Business,label:s.Z.business},{trnId:n.a9.Community,label:s.Z.community},{trnId:n.a9.Creative,label:s.Z.creative},{trnId:n.a9.Education,label:s.Z.education},{trnId:n.a9.Emergencies,label:s.Z.emergencies},{trnId:n.a9.Environment,label:s.Z.environment},{trnId:n.a9.Faith,label:s.Z.faith},{trnId:n.a9.Family,label:s.Z.family},{trnId:n.a9.Medical,label:s.Z.medical},{trnId:n.a9.Memorials,label:s.Z.memorials},{trnId:n.a9.Science,label:s.Z.science},{trnId:n.a9.Sports,label:s.Z.sports},{trnId:n.a9.Travel,label:s.Z.travel},{trnId:n.a9.Volunteer,label:s.Z.volunteer},{trnId:n.a9.Other,label:s.Z.other}],p=[{trnId:"helpUsReachGoal",label:s.Z.helpUsReachGoal},{trnId:"giveBackToOrganizer",label:s.Z.giveBackToOrganizer},{trnId:"helpCoverCosts",label:s.Z.helpCoverCosts},{trnId:"donateNowToHelp",label:s.Z.donateNowToHelp},{trnId:"giveDonationToOrganizer",label:s.Z.giveDonationToOrganizer},{trnId:"hostingCostMoney",label:s.Z.hostingCostMoney},{trnId:"customMessage",label:s.Z.customMessage}],f=o.Ry().shape({goal:o.Rx().required(s.Z.required),category:o.Ry().required(s.Z.required),message:o.Ry().required(s.Z.required),customMessage:o.Z_().when("message",(e,t)=>{if((null==e?void 0:e.trnId)==="customMessage")return t.required(s.Z.required)})}),m={goal:"3000",hasPledgeActive:!1,category:g[2],message:p[0],customMessage:""};r(52301)},22600:function(e,t,r){"use strict";var n=r(73193);let o=(0,n.vU)({goalInput:{id:"groupSettings.fundraising.goalInput",defaultMessage:"Goal"},goalInputRemark:{id:"groupSettings.fundraising.goalInputRemark",defaultMessage:"You can adjust this at any time."},goalInputImageAlt:{id:"groupSettings.fundraising.goalInputImageAlt",defaultMessage:"goal"},pageTitle:{id:"groupSettings.fundraising.pageTitle",defaultMessage:"Fundraising"},activateFundraisingText:{id:"groupSettings.fundraising.activateFundraisingText",defaultMessage:"Activate fundraising to allow members to donate to your group."},learnMoreLink:{id:"groupSettings.fundraising.learnMoreLink",defaultMessage:"Learn more"},category:{id:"groupSettings.fundraising.category",defaultMessage:"Category"},goToPledge:{id:"groupSettings.fundraising.goToPledge",defaultMessage:"Go to Pledge"},accessYouPladge:{id:"groupSettings.fundraising.accessYouPladge",defaultMessage:"Access your pledge account to edit banking information, track and refund contributions and much more."},required:{id:"groupSettings.fundraising.required",defaultMessage:"Required"},animals:{id:"fundraising.categoryDropdown.animals",defaultMessage:"Animals"},business:{id:"fundraising.categoryDropdown.business",defaultMessage:"Business"},community:{id:"fundraising.categoryDropdown.community",defaultMessage:"Community"},creative:{id:"fundraising.categoryDropdown.creative",defaultMessage:"Creative"},education:{id:"fundraising.categoryDropdown.education",defaultMessage:"Education"},emergencies:{id:"fundraising.categoryDropdown.emergencies",defaultMessage:"Emergencies"},environment:{id:"fundraising.categoryDropdown.environment",defaultMessage:"Environment"},faith:{id:"fundraising.categoryDropdown.faith",defaultMessage:"Faith"},family:{id:"fundraising.categoryDropdown.family",defaultMessage:"Family"},medical:{id:"fundraising.categoryDropdown.medical",defaultMessage:"Medical"},memorials:{id:"fundraising.categoryDropdown.memorials",defaultMessage:"Memorials"},science:{id:"fundraising.categoryDropdown.science",defaultMessage:"Science"},sports:{id:"fundraising.categoryDropdown.sports",defaultMessage:"Sports"},travel:{id:"fundraising.categoryDropdown.travel",defaultMessage:"Travel"},volunteer:{id:"fundraising.categoryDropdown.volunteer",defaultMessage:"Volunteer"},other:{id:"fundraising.categoryDropdown.other",defaultMessage:"Other"},whatIsPledge:{id:"fundraising.FAQ.whatIsPledge",defaultMessage:"What is Pledge?"},whatIsPledgeDescription:{id:"fundraising.FAQ.whatIsPledgeDescription2",defaultMessage:"Pledge is a platform for fundraising. Now that Meetup has partnered with Pledge, you’ll be able to collect donations from your group members. Learn more about { SETTING_UP_ACCOUNT }."},settingUpAccount:{id:"fundraising.FAQ.settingUpAccount",defaultMessage:"setting up your Pledge account"},howDonate:{id:"fundraising.FAQ.howDonate",defaultMessage:"How do members donate?"},howDonateDescription:{id:"fundraising.FAQ.howDonateDescription2",defaultMessage:"Once you’ve activated your Pledge campaign, your members will see a box on your group and event homepages. They’ll be able to select how much they’d like to donate and see how much your group has already raised."},howDiffer:{id:"fundraising.FAQ.howDiffer2",defaultMessage:"How does this differ from member dues?"},howDifferDescription:{id:"fundraising.FAQ.howDifferDescription2",defaultMessage:"Activating a Pledge fundraising campaign allows your members to make an optional donation. If you’d like to require your members to pay dues as part of joining your group, learn more about { SETTING_UP_DUES }."},settingUpDues:{id:"fundraising.FAQ.settingUpDues",defaultMessage:"setting up dues"},howBankAccount:{id:"fundraising.FAQ.howBankAccount",defaultMessage:"How do I set up my bank account and collect funds?"},howBankAccountDescription:{id:"fundraising.FAQ.howBankAccountDescription2",defaultMessage:"Go to the Pledge website to set up your account and make yourself the beneficiary for your group’s donations. You’ll enter your banking information during this process. Once you’ve set up your account, the first payout occurs 7 to 10 business days after the first contribution. Learn more about { PLEDGE_CAMPAIGN } and { RECEIVING_PAYMENTS }."},settingUpCampaign:{id:"fundraising.FAQ.settingUpCampaign",defaultMessage:"setting up your Pledge campaign"},receivingPayments:{id:"fundraising.FAQ.receivingPayments",defaultMessage:"receiving payments"},needMoreInfo:{id:"fundraising.FAQ.needMoreInfo",defaultMessage:"Need more info? Have a look at the FAQs"},fundraiserUpdatedSuccess:{id:"fundraising.notification.successfullyUpdated",defaultMessage:"Fundraiser updated"},fundraiserDisabledSuccessfully:{id:"fundraising.notification.fundraiserDisabledSuccessfully",defaultMessage:"Fundraiser disabled"},fundraiserUpdatedError:{id:"fundraising.notification.updatedWithError",defaultMessage:"Something went wrong"},customMessagePlaceholder:{id:"fundraising.fundraising.customMessagePlaceholder",defaultMessage:"Write your fundraiser message here..."},fundraisingMessage:{id:"fundraising.fundraising.fundraisingMessage",defaultMessage:"Fundraising message"},helpUsReachGoal:{id:"fundraising.purposeDropdown.helpUsReachGoal",defaultMessage:"Help us reach our goal"},giveBackToOrganizer:{id:"fundraising.purposeDropdown.giveBackToOrganizer",defaultMessage:"Give back to your organizer"},helpCoverCosts:{id:"fundraising.purposeDropdown.helpCoverCosts",defaultMessage:"Pitch in to help cover the costs of organizing our group"},donateNowToHelp:{id:"fundraising.purposeDropdown.donateNowToHelp",defaultMessage:"Donate now to help cover the costs of upcoming events"},giveDonationToOrganizer:{id:"fundraising.purposeDropdown.giveDonationToOrganizer",defaultMessage:"It takes a lot of time to organize this group. Give a donation to your organizer!"},hostingCostMoney:{id:"fundraising.purposeDropdown.hostingCostMoney",defaultMessage:"Hosting events costs money. Pitch-in to help cover the costs."},customMessage:{id:"fundraising.purposeDropdown.customMessage",defaultMessage:"Custom message"}});t.Z=o},52301:function(e){e.exports={di7ss6z:"di7ss6z"}}}]);