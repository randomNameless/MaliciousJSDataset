//tealium universal tag - utag.sync ut4.0.202411211050, Copyright 2024 Tealium.com Inc. All Rights Reserved.
const hostURL=window.location.hostname;let optimizelyURL;if(!localStorage.getItem('Optimizelyid')){const generateUniqueId=()=>{const id=`${navigator.userAgent}${Date.now()}${Math.random()}`.toUpperCase().replace(/\s|\D/g,'');return id;};localStorage.setItem('Optimizelyid',generateUniqueId());}
const domainOptimizelyMap={"usa.review.visa.com,usa.visa.com,rvcom-uat.visa.com":"https://cdn.optimizely.com/js/10654255723.js","ca.review.visa.com,visa.ca,ca.rvcom-uat.visa.com":"https://cdn.optimizely.com/js/20283570581.js",};for(let domains in domainOptimizelyMap){const domainArray=domains.split(',');if(domainArray.some(domain=>hostURL.includes(domain))){window.optimizely=window.optimizely||[];window.optimizely.push({type:"holdEvents"});optimizelyURL=domainOptimizelyMap[domains];break;}}
const scr=document.createElement('script');scr.src=optimizelyURL||"";document.getElementsByTagName('head')[0].appendChild(scr);