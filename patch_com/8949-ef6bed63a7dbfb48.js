"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8949],{70118:function(e,i,t){var d=t(2043),s=t.n(d),o=t(83454);s().setDefaultLevel(o.env.LOG_LEVEL||s().levels.INFO),i.Z=s()},98949:function(e,i,t){t.d(i,{i:function(){return h}});var d,s,o,a=t(47568),l=t(70655),_=t(95835),n=t(81187),r=t(70118),b=t(14924),c=t(1604),m=t(14677),p=c.z.object((d={},(0,b.Z)(d,m.ContentType.event,c.z.boolean()),(0,b.Z)(d,m.ContentType.article,c.z.boolean()),(0,b.Z)(d,m.ContentType.bizpost,c.z.boolean()),(0,b.Z)(d,m.ContentType.classified,c.z.boolean()),d)).partial(),f=c.z.intersection(p.partial(),c.z.object({reaction:c.z.boolean().or(p).optional(),flag:c.z.boolean().or(p).optional(),compose:c.z.boolean().or(p).optional(),belowArticleRecirc:c.z.boolean().or(p).optional(),advertise:c.z.boolean().optional(),realEstate:c.z.boolean().optional(),localRealEstate:c.z.boolean().optional(),weather:c.z.boolean().optional()})),u=c.z.object({id:c.z.string(),analyticsTrackingId:c.z.string(),patchIds:c.z.number().array(),features:f.optional(),pageLayoutDirectoryName:c.z.string().optional(),config:c.z.object({redirectToNewBusinessUrl:c.z.boolean().optional()}).optional()}),g=(0,n.Z)().URLS.EXPERIMENT_FRAMEWORK_API_URL,T=(s=(0,a.Z)(function(){var e,i;return(0,l.__generator)(this,function(t){switch(t.label){case 0:if(!g)throw Error("`EXPERIMENT_FRAMEWORK_API_URL` env var is not set correctly");return[4,_.Z.instanceWithCaching.get("/experiment",{baseURL:g})];case 1:if(e=t.sent(),!(i=u.array().safeParse(e.data)).success)return r.Z.warn("[fetchAllExperiments - API Response Validation response]:",i),r.Z.warn("[fetchAllExperiments - API Response Validation data]:",e.data),[2,[]];return[2,i.data]}})}),function(){return s.apply(this,arguments)}),h=(o=(0,a.Z)(function(e){var i,t,d;return(0,l.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,T()];case 1:if(i=s.sent(),r.Z.debug("fetchExperimentForPatch - count",i.length),t=i.find(function(i){return i.patchIds.includes(e)}),r.Z.debug("fetchExperimentForPatch - CURRENT",e,t),!t)return[2,null];return[2,t];case 2:return d=s.sent(),r.Z.error("fetchExperimentForPatch - error",d),[2,null];case 3:return[2]}})}),function(e){return o.apply(this,arguments)})},95835:function(e,i,t){t.d(i,{Z:function(){return I}});var d=t(47568),s=t(51438),o=t(26042),a=t(69396),l=t(70655),_=t(5121),n=t(78428),r=t.n(n),b=t(89717),c=t(83011),m=t(99376),p=function(e){return(0,m.v8)(e,{ttl:108e5,cacheTakeover:!1,storage:(0,m.uu)(!1,108e5,!1)})},f=JSON.parse('{"client_ad_dfp_lb":{"bidId":"lb_id","bids":[],"code":"client_ad_dfp_lb","mediaTypes":{"banner":{"sizes":[[728,90],[970,250],[970,90]]}},"slotTarget":"bb","targetDevice":"desktop"},"client_ad_dfp_mobile_lb":{"bidId":"mobile_lb_id","bids":[],"code":"client_ad_dfp_mobile_lb","mediaTypes":{"banner":{"sizes":[[1,1],[300,50],[320,50]]}},"slotTarget":"mbb","targetDevice":"mobile"},"client_ad_dfp_slot_1":{"bidId":"slot1_id","bids":[],"code":"client_ad_dfp_slot_1","mediaTypes":{"banner":{"sizes":[[300,250],[300,600],[300,1050],[160,600]]}},"slotTarget":"1","targetDevice":"desktop"},"client_ad_dfp_slot_2":{"bidId":"slot2_id","bids":[],"code":"client_ad_dfp_slot_2","mediaTypes":{"banner":{"sizes":[[300,250],[300,600],[160,600]]}},"slotTarget":"2","targetDevice":"desktop"},"client_ad_dfp_slot_3":{"bidId":"slot3_id","bids":[],"code":"client_ad_dfp_slot_3","mediaTypes":{"banner":{"sizes":[[300,250],[300,600],[160,600]]}},"slotTarget":"3","targetDevice":"desktop"},"client_ad_dfp_slot_4":{"bidId":"slot4_id","bids":[],"code":"client_ad_dfp_slot_4","mediaTypes":{"banner":{"sizes":[[300,250],[300,600],[160,600]]}},"slotTarget":"4","targetDevice":"desktop"},"client_ad_dfp_mobile_slot_1":{"bidId":"mobile_slot1_id","bids":[],"code":"client_ad_dfp_mobile_slot_1","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m1","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_2":{"bidId":"mobile_slot2_id","bids":[],"code":"client_ad_dfp_mobile_slot_2","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m2","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_3":{"bidId":"mobile_slot3_id","bids":[],"code":"client_ad_dfp_mobile_slot_3","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m3","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_4":{"bidId":"mobile_slot4_id","bids":[],"code":"client_ad_dfp_mobile_slot_4","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m4","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_5":{"bidId":"mobile_slot5_id","bids":[],"code":"client_ad_dfp_mobile_slot_5","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m5","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_6":{"bidId":"mobile_slot6_id","bids":[],"code":"client_ad_dfp_mobile_slot_6","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m6","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_7":{"bidId":"mobile_slot7_id","bids":[],"code":"client_ad_dfp_mobile_slot_7","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m7","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_8":{"bidId":"mobile_slot8_id","bids":[],"code":"client_ad_dfp_mobile_slot_8","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m8","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_9":{"bidId":"mobile_slot9_id","bids":[],"code":"client_ad_dfp_mobile_slot_9","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m9","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_10":{"bidId":"mobile_slot10_id","bids":[],"code":"client_ad_dfp_mobile_slot_10","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m10","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_11":{"bidId":"mobile_slot11_id","bids":[],"code":"client_ad_dfp_mobile_slot_11","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m11","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_12":{"bidId":"mobile_slot12_id","bids":[],"code":"client_ad_dfp_mobile_slot_12","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m12","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_13":{"bidId":"mobile_slot13_id","bids":[],"code":"client_ad_dfp_mobile_slot_13","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m13","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_14":{"bidId":"mobile_slot14_id","bids":[],"code":"client_ad_dfp_mobile_slot_14","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m14","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_15":{"bidId":"mobile_slot15_id","bids":[],"code":"client_ad_dfp_mobile_slot_15","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m15","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_16":{"bidId":"mobile_slot16_id","bids":[],"code":"client_ad_dfp_mobile_slot_16","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m16","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_17":{"bidId":"mobile_slot17_id","bids":[],"code":"client_ad_dfp_mobile_slot_17","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m17","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_18":{"bidId":"mobile_slot18_id","bids":[],"code":"client_ad_dfp_mobile_slot_18","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m18","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_19":{"bidId":"mobile_slot19_id","bids":[],"code":"client_ad_dfp_mobile_slot_19","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m19","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_20":{"bidId":"mobile_slot20_id","bids":[],"code":"client_ad_dfp_mobile_slot_20","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m20","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_21":{"bidId":"mobile_slot21_id","bids":[],"code":"client_ad_dfp_mobile_slot_21","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m21","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_22":{"bidId":"mobile_slot22_id","bids":[],"code":"client_ad_dfp_mobile_slot_22","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m22","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_23":{"bidId":"mobile_slot23_id","bids":[],"code":"client_ad_dfp_mobile_slot_23","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m23","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_24":{"bidId":"mobile_slot24_id","bids":[],"code":"client_ad_dfp_mobile_slot_24","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m24","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_25":{"bidId":"mobile_slot25_id","bids":[],"code":"client_ad_dfp_mobile_slot_25","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m25","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_26":{"bidId":"mobile_slot26_id","bids":[],"code":"client_ad_dfp_mobile_slot_26","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m26","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_27":{"bidId":"mobile_slot27_id","bids":[],"code":"client_ad_dfp_mobile_slot_27","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m27","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_28":{"bidId":"mobile_slot28_id","bids":[],"code":"client_ad_dfp_mobile_slot_28","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m28","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_29":{"bidId":"mobile_slot29_id","bids":[],"code":"client_ad_dfp_mobile_slot_29","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m29","targetDevice":"mobile"},"client_ad_dfp_mobile_slot_30":{"bidId":"mobile_slot30_id","bids":[],"code":"client_ad_dfp_mobile_slot_30","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"m30","targetDevice":"mobile"},"home_1":{"bidId":"home_1_id","bids":[],"code":"home_1","mediaTypes":{"banner":{"sizes":[[696,183],[1,1],["fluid"]]}},"slotTarget":"home_1","targetDevice":"desktop"},"home_m1":{"bidId":"home_m1_id","bids":[],"code":"home_m1","mediaTypes":{"banner":{"sizes":[[310,172],[1,1],["fluid"]]}},"slotTarget":"home_m1","targetDevice":"mobile"},"front_1":{"bidId":"front_1_id","bids":[],"code":"front_1","mediaTypes":{"banner":{"sizes":[[696,183],[1,1],["fluid"]]}},"slotTarget":"front_1","targetDevice":"desktop"},"front_m1":{"bidId":"front_m1_id","bids":[],"code":"front_m1","mediaTypes":{"banner":{"sizes":[[310,172],[1,1],["fluid"]]}},"slotTarget":"front_m1","targetDevice":"mobile"},"relisting_1":{"code":"relisting_1","bidId":"relisting_1_id","mediaTypes":{"banner":{"sizes":[[1,1],["fluid"]]}},"slotTarget":"relisting_1","targetDevice":"desktop"},"relisting_m1":{"code":"relisting_m1","bidId":"relisting_m1_id","mediaTypes":{"banner":{"sizes":[[1,1],["fluid"]]}},"slotTarget":"relisting_m1","targetDevice":"mobile"},"artcl_1":{"bidId":"artcl_1_id","bids":[],"code":"artcl_1","mediaTypes":{"banner":{"sizes":[[600,150],[1,1],["fluid"]]}},"slotTarget":"artcl_1","targetDevice":"desktop"},"artcl_m1":{"bidId":"artcl_m1_id","bids":[],"code":"artcl_m1","mediaTypes":{"banner":{"sizes":[[300,75],[1,1],["fluid"]]}},"slotTarget":"artcl_m1","targetDevice":"mobile"},"postartcl_1":{"bidId":"postartcl_1_id","bids":[],"code":"postartcl_1","mediaTypes":{"banner":{"sizes":[[696,320],[1,1],["fluid"]]}},"slotTarget":"postartcl_1","targetDevice":"desktop"},"postartcl_m1":{"code":"postartcl_m1","bidId":"postartcl_m1_id","mediaTypes":{"banner":{"sizes":[[360,400],[1,1],["fluid"]]}},"slotTarget":"postartcl_m1","targetDevice":"mobile"},"feed_1":{"bidId":"feed_1_id","bids":[],"code":"feed_1","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_1","targetDevice":"desktop"},"feed_2":{"bidId":"feed_2_id","bids":[],"code":"feed_2","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_2","targetDevice":"desktop"},"feed_3":{"bidId":"feed_3_id","bids":[],"code":"feed_3","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_3","targetDevice":"desktop"},"feed_4":{"bidId":"feed_4_id","bids":[],"code":"feed_4","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_4","targetDevice":"desktop"},"feed_5":{"bidId":"feed_5_id","bids":[],"code":"feed_5","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_5","targetDevice":"desktop"},"feed_6":{"bidId":"feed_6_id","bids":[],"code":"feed_6","mediaTypes":{"banner":{"sizes":[[728,90],[600,150],[1,1],["fluid"]]}},"slotTarget":"feed_6","targetDevice":"desktop"},"feed_m1":{"bidId":"feed_m1_id","bids":[],"code":"feed_m1","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m1","targetDevice":"mobile"},"feed_m2":{"bidId":"feed_m2_id","bids":[],"code":"feed_m2","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m2","targetDevice":"mobile"},"feed_m3":{"bidId":"feed_m3_id","bids":[],"code":"feed_m3","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m3","targetDevice":"mobile"},"feed_m4":{"bidId":"feed_m4_id","bids":[],"code":"feed_m4","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m4","targetDevice":"mobile"},"feed_m5":{"bidId":"feed_m5_id","bids":[],"code":"feed_m5","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m5","targetDevice":"mobile"},"feed_m6":{"bidId":"feed_m6_id","bids":[],"code":"feed_m6","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_m6","targetDevice":"mobile"},"feed_rr_1":{"bidId":"feed_rr_1_id","bids":[],"code":"feed_rr_1","mediaTypes":{"banner":{"sizes":[[300,250],[300,600],[160,600]]}},"slotTarget":"feed_rr_1","targetDevice":"desktop"},"feed_rr_m1":{"bidId":"feed_rr_m1_id","bids":[],"code":"feed_rr_m1","mediaTypes":{"banner":{"sizes":[[300,250],[300,75],[300,50],[1,1],["fluid"]]}},"slotTarget":"feed_rr_m1","targetDevice":"mobile"},"interstitial":{"bidId":"interstitial_id","bids":[],"code":"interstitial","mediaTypes":{"banner":{"sizes":[[1,1]]}},"slotTarget":"interstitial","targetDevice":"all"}}'),u={appnexus:"appnexus",criteo:"criteo",ix:"ix",medianet:"medianet",pubmatic:"pubmatic",openx:"openx",rubicon:"rubicon",triplelift:"triplelift",yieldmo:"yieldmo"},g=function(e){var i=e.adConfig,t=e.bidderConfig,d=e.bidders;return Object.keys(f).forEach(function(e){var i=f[e];i.bids=[],d.forEach(function(d){var s=d.bidder,o=d.bids[e];if(o)switch(s){case u.appnexus:i.bids.push({bidder:s,params:{placementId:o}});break;case u.criteo:i.bids.push({bidder:s,params:{networkId:o}});break;case u.ix:i.mediaTypes.banner.sizes.forEach(function(e){e.includes("fluid")||i.bids.push({bidder:s,params:{siteId:o,size:e}})});break;case u.medianet:i.bids.push({bidder:s,params:{cid:t.medianet.clientId,crid:o}});break;case u.openx:i.bids.push({bidder:s,params:{delDomain:t.openx.delDomain,unit:o}});break;case u.pubmatic:i.bids.push({bidder:s,params:{adSlot:o,publisherId:t.pubmatic.publisherId}});break;case u.rubicon:i.bids.push({bidder:s,params:{accountId:t.rubicon.accountId,position:o.position,siteId:t.rubicon.siteId[i.targetDevice],sizes:o.sizes,zoneId:o.zoneId}});break;case u.triplelift:i.bids.push({bidder:s,params:{inventoryCode:o}});break;case u.yieldmo:i.bids.push({bidder:s,params:{placementId:o}})}})}),{adConfig:i,allAdUnits:f}},T=t(81187),h=function(){function e(i,t){(0,s.Z)(this,e),this.frontEndApi=p(_.Z.create((0,a.Z)((0,o.Z)({},this.commonConfig()),{baseURL:"".concat(i,"/api_v1")}))),this.instanceWithCaching=p(_.Z.create(this.commonConfig())),this.patchApi=p(_.Z.create({baseURL:t})),this.patchApiClient=(0,c.buildPatchApiClientWithInstance)(this.patchApi)}var i=e.prototype;return i.commonConfig=function(){return{timeout:15e3,httpsAgent:new(r()).Agent({keepAlive:!0}),headers:{Accept:"application/json","Content-Type":"application/json","Accept-Encoding":"gzip"}}},i.fetchAllPatches=function(){var e=this;return(0,d.Z)(function(){var i,t;return(0,l.__generator)(this,function(d){switch(d.label){case 0:return d.trys.push([0,2,,3]),[4,e.frontEndApi.get("/patches.json")];case 1:return i=d.sent().data,t=(0,b.parsePatchMetadataFullList)(i),i.length!==t.length&&console.log("Received ".concat(i.length," patches, successfully parsed ").concat(t.length,".")),[2,i];case 2:return d.sent(),[2,[]];case 3:return[2]}})})()},i.fetchAdtechConfig=function(){var e=this;return(0,d.Z)(function(){var i;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return[4,e.frontEndApi.get("/adtech.json")];case 1:return[2,g(i.sent().data)]}})})()},i.search=function(e){var i=this;return(0,d.Z)(function(){return(0,l.__generator)(this,function(t){return[2,i.patchApiClient.search(e)]})})()},i.fetchPatchBySlug=function(e){var i=this;return(0,d.Z)(function(){return(0,l.__generator)(this,function(t){return[2,i.patchApiClient.getPatchMetadataFullBySlug(e)]})})()},i.fetchImpressions=function(e){var i=this;return(0,d.Z)(function(){var t,d;return(0,l.__generator)(this,function(t){switch(t.label){case 0:return[4,i.frontEndApi.get("/additional-community-metadata/".concat(e,".json"))];case 1:return[2,t.sent().data.impressionCount]}})})()},i.getAllRegions=function(){var e=this;return(0,d.Z)(function(){return(0,l.__generator)(this,function(i){return[2,e.patchApiClient.getAllRegions()]})})()},e}(),v=(0,T.Z)().URLS,z=v.PATCH_FE_API_URL,y=v.PATCH_METADATA_URL,I=new h(z,y)}}]);