"use strict";(self.webpackJsonpEs6=self.webpackJsonpEs6||[]).push([[4066],{56191:(a,e,n)=>{n.r(e),n.d(e,{default:()=>g});var r=n(67294),i=n(45697),s=n.n(i),o=n(32384),t=n(22222),c=n(10722),l=n(59947),p=n(74993);const d=a=>{let{privacyManagerId:e,ccpaPrivacyManagerId:n,usnatPrivacyManagerId:i,isUserCCPACompliant:s,isUserUSNATCompliant:o,isSourcepointMspsEnabled:t}=a;return(0,r.useEffect)((()=>{const a=document.querySelectorAll(".optanon-toggle-display"),r=(a=>{let{isUserCCPACompliant:e,isUserUSNATCompliant:n,ccpaPrivacyManagerId:r,usnatPrivacyManagerId:i,privacyManagerId:s,isSourcepointMspsEnabled:o}=a;return()=>{e||n?o?window._sp_.usnat.loadPrivacyManagerModal(i):window._sp_.ccpa.loadPrivacyManagerModal(r):window._sp_.gdpr.loadPrivacyManagerModal(s)}})({isUserCCPACompliant:s,isUserUSNATCompliant:o,ccpaPrivacyManagerId:n,usnatPrivacyManagerId:i,privacyManagerId:e,isSourcepointMspsEnabled:t});return Array.prototype.forEach.call(a,(a=>{a.addEventListener("click",r)})),()=>{Array.prototype.forEach.call(a,(a=>{a.removeEventListener("click",r)}))}}),[e,n,s,o,t,i]),null};d.defaultProps={privacyManagerId:void 0,ccpaPrivacyManagerId:void 0,usnatPrivacyManagerId:void 0,isUserCCPACompliant:!1,isUserUSNATCompliant:!1,isSourcepointMspsEnabled:!1},d.propTypes={ccpaPrivacyManagerId:s().oneOfType([s().number,s().string]),privacyManagerId:s().oneOfType([s().number,s().string]),usnatPrivacyManagerId:s().oneOfType([s().number,s().string]),isUserCCPACompliant:s().bool,isUserUSNATCompliant:s().bool,isSourcepointMspsEnabled:s().bool};const P=(0,t.zB)({privacyManagerId:c.PJ,ccpaPrivacyManagerId:c.Wz,usnatPrivacyManagerId:c.$N,isUserCCPACompliant:l.cv,isUserUSNATCompliant:l.Zp,isSourcepointMspsEnabled:p.Cg}),g=(0,o.$j)(P)(d)},74993:(a,e,n)=>{n.d(e,{Cg:()=>p,I7:()=>c,MJ:()=>d,Wr:()=>l,a6:()=>P,lt:()=>o,wP:()=>t});var r=n(63422),i=n.n(r),s=n(22222);const o=i()("features"),t=((0,s.P1)(o,i()("digitalPersonalisationDesktop")),(0,s.P1)(o,i()("digitalPersonalisationMobile")),(0,s.P1)(o,i()("oneSignalTagsEnabled"))),c=(0,s.P1)(o,i()("oneSignalNativePromptEnabled")),l=(0,s.P1)(o,i()("schedularYieldEnabled")),p=(0,s.P1)(o,i()("sourcepointMspsEnabled")),d=(0,s.P1)(o,i()("zephrEnabled")),P=(0,s.P1)(o,i()("swipeToZero"))},10722:(a,e,n)=>{n.d(e,{$N:()=>p,PJ:()=>c,Wz:()=>l});var r=n(85299),i=n.n(r),s=n(22222),o=n(50974);const t=(0,s.P1)(o.ZP,(a=>i()(a,"siteContext.sourcepoint",{})));(0,s.P1)(t,(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.siteId}));const c=(0,s.P1)(t,(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.privacyManagerId})),l=(0,s.P1)(t,(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.ccpaPrivacyManagerId})),p=(0,s.P1)(t,(function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.usnatPrivacyManagerId}))}}]);