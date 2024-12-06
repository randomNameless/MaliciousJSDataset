window.phoenix&&(window.phoenix.buildInfo||(window.phoenix.buildInfo=[]),-1===window.phoenix.buildInfo.findIndex((s=>"Phoenix-experience"===s.MFE))&&window.phoenix.buildInfo.push({MFE:"Phoenix-experience",VERSION:"release-phoenix-experience-1.1.31950.1533663653-b0500d57-1-gaed31c649",LASTCOMMITDATETIME:"2024-11-12T12:22:49-08:00"}))
/*!
 * 
 *         ============= BUILD INFO =============
 *         MFE: Phoenix-experience
 *         chunkName: component-clientlibs/snackbar.v1/snackbar
 *         VERSION: release-phoenix-experience-1.1.31950.1533663653-b0500d57-1-gaed31c649
 *         BRANCH: release/fix-experience-11-14
 *         COMMITHASH: aed31c649a822b702d08aa45c5a1a9716d07cdc1
 *         LASTCOMMITDATETIME: 2024-11-12T12:22:49-08:00
 *         ============= If you're reading this, why not come work with us? https://www.t-mobile.com/careers =============
 */,function(){"use strict";!function(){const s="(min-width: 1024px)";window.Alpine.data("snackbar",(function(){return{snackbars:[],snackbarID:0,isDesktop:!1,init(){window.phoenix?.experience?.utils?.registerMediaQuerySensor?.({max:s,action:s=>this.isDesktop=s}),window.phoenix?.bus?.subscribe("SNACKBAR","SHOW",(s=>{s&&this.showSnackbar?.(s)}))},constructAnimationCssClass(){return this.isDesktop?"tdds-snackbar--animate-down":"tdds-snackbar--animate-up"},setClassContainer(){return`tdds-snackbar tdds-snackbar--visible ${this.constructAnimationCssClass?.()??""}`},hideSnackbar(s){const i=this.snackbars?.findIndex((i=>i.id===s))??-1;if(i>-1){const s=this.snackbars?.[i];s&&(this.snackbars?.splice(i,1),s.focusElement instanceof HTMLElement&&s.focusElement.focus())}},showSnackbar(s){const i={id:this.snackbarID,type:s.payload?.type??"default",isDismissible:s.payload?.isDismissible??!1,isInverse:s.payload?.isInverse??!1,content:s.payload?.content??"",focusElement:s.payload?.focusElement??void 0};this.snackbars.push(i),i.isDismissible||setTimeout((()=>{this.hideSnackbar?.(i.id)}),6e3),this.snackbarID++}}}))}()}();