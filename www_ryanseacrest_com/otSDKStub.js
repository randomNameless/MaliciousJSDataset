(function(z){function A(){var a=this;this.implementThePolyfill=function(){var b=Element.prototype.setAttribute;Element.prototype.setAttribute=function(c,d){if("style"!==c.toLowerCase()&&b.apply(this,[c,d]),"style"!==c.toLowerCase()||d||this.removeAttribute("style"),"style"===c.toLowerCase()&&d){this.removeAttribute("style");var f;c=a.strToObj(d);for(f in c)this.style[f]=c[f]}}}}function k(){var a=this;this.charset=this.crossOrigin=this.iabType=null;this.totalApi=1;this.requestedApiCount=0;this.apiResult=
{domainData:null,preferences:null};this.grpsSynced=[];this.isAmp=this.isGacSyncRequired=this.isIabSyncRequired=!1;this.ampData={};this.isPreview=this.isReset=!1;this.nonce=this.geoFromUrl="";this.userHasProfile=this.prevUserWasAnon=this.forceCreateTrxLocalConsentIsGreater=this.checkLocalConsentForIabPurposes=this.carryOverAnonymousConsent=this.setAttributePolyfillIsActive=!1;this.addBannerSDKScript=function(b){var c=a.getRegionSet(b),d=("IAB2"===c.Type||"IAB2V2"===c.Type?(a.iabType=c.Type,a.intializeIabStub()):
a.removeTcf(),c.IsGPPEnabled?C.init():C.removeGppApi(),e.stubScrEl.cloneNode(!0)),f=e.storageBaseURL+"/scripttemplates/"+b.Version+"/"+e.sdkName;["charset","data-language","data-document-language","data-domain-script","crossorigin"].forEach(function(g){e.stubScrEl.getAttribute(g)&&d.setAttribute(g,e.stubScrEl.getAttribute(g))});a.crossOrigin=e.stubScrEl.getAttribute("crossorigin")||null;a.charset=e.stubScrEl.getAttribute("charset")||null;a.isAmp=!!e.stubScrEl.getAttribute("amp");window.otStubData=
{domainData:b,stubElement:d,bannerBaseDataURL:e.domainBaseUrl,mobileOnlineURL:e.mobileOnlineURL,userLocation:e.userLocation,regionRule:c,crossOrigin:a.crossOrigin,isIabSynced:a.isIabSyncRequired,grpsSynced:a.grpsSynced,isGacSynced:a.isGacSyncRequired,preferences:a.apiResult.preferences,isAmp:a.isAmp,isV2Stub:!0,syncGrpId:e.syncGrpId,consentApi:e.apiUrl,tenantId:e.tenantId,isPreview:a.isPreview,isReset:a.isReset,geoFromUrl:a.geoFromUrl,domainId:e.domainId,urlParams:a.urlParams,otDataLayer:a.otDataLayer,
charset:a.charset,gtmUpdated:a.gtmUpdated,setAttributePolyfillIsActive:a.setAttributePolyfillIsActive,nonce:a.nonce,identifierType:a.identifierType,userHasProfile:a.userHasProfile,prevUserWasAnon:a.prevUserWasAnon,serverLatestDateForCookies:a.serverLatestDateForCookies,checkLocalConsentForIabPurposes:a.checkLocalConsentForIabPurposes,forceCreateTrxLocalConsentIsGreater:a.forceCreateTrxLocalConsentIsGreater};a.jsonp(f,null)};this.intializeIabStub=function(){var b=window;void 0===b.__tcfapi&&(window.__tcfapi=
a.executeTcfApi);a.addIabFrame();b.receiveOTMessage=a.receiveIabMessage;(b.attachEvent||window.addEventListener)("message",b.receiveOTMessage,!1)};this.addIabFrame=function(){var b=window;!b.frames.__tcfapiLocator&&(b.document.body?a.addLocator():setTimeout(a.addIabFrame,5))};this.addLocator=function(){var b=window,c=b.document.createElement("iframe");c.style.cssText="display:none";c.name="__tcfapiLocator";c.setAttribute("title","TCF Locator");b.document.body.appendChild(c)};this.receiveIabMessage=
function(b){var c,d,f,g="string"==typeof b.data,l={};try{l=g?JSON.parse(b.data):b.data}catch(m){}!l.__tcfapiCall||"IAB2"!==a.iabType&&"IAB2V2"!==a.iabType||(c=l.__tcfapiCall.callId,d=l.__tcfapiCall.command,f=l.__tcfapiCall.parameter,l=l.__tcfapiCall.version,a.executeTcfApi(d,f,function(m,q){m={__tcfapiReturn:{returnValue:m,success:q,callId:c,command:d}};b&&b.source&&b.source.postMessage&&b.source.postMessage(g?JSON.stringify(m):m,"*")},l))};this.executeTcfApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=
arguments[c];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];c=b[0];var d=b[1],f=b[2];b=b[3];"function"==typeof f&&c&&("ping"===c?a.getPingRequest(f):a.addToQueue(c,d,f,b))};this.addToQueue=function(b,c,d,f){var g=window;g.__tcfapi.a=g.__tcfapi.a||[];g.__tcfapi.a.push([b,c,d,f])};this.getPingRequest=function(b){b&&b({gdprApplies:e.gdprApplies,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},!0)};
this.initConsentSDK()}var n,v,u,x,y,h,e=new function(){this.optanonCookie="OptanonConsent";this.alertBoxCookie="OptanonAlertBoxClosed";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.vendorsServiceData=[];this.IABCookieValue="";this.Iab2Pub="eupubconsent-v2";this.gacCookie="OTAdditionalConsentString";this.isIabGlobal="isIABGlobal";this.isStubReady=!0;this.geoCookie="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");
this.stubName="otSDKStub";this.domainAttr="data-domain-script";this.sdkName="otBannerSdk.js";this.mobileOnlineURL=[];this.userLocation={country:"",state:""};this.tenantId="3546d798-21cd-434d-b031-f8701f4d2f21";this.syncGrpId="b427c9a9-bcb1-42c9-9423-05885dda532e";this.apiUrl="https://consent-api.onetrust.com/v1/preferences";this.domainGrps=JSON.parse('{"ab64a698-f52b-4f47-a845-3c1ef72149ad":"C0004","9c0d8a6c-1271-4691-9c1f-c062fecd9cf5":"C0005","4984c674-b863-4c79-81fc-abc53fcde603":"C0001","a3291c99-d3a3-4ba4-b908-c556911f83db":"C0002","3c8e667c-3ab9-4884-8469-4a520af35c50":"C0003"}')};
(h=n=n||{})[h.ACTIVE=0]="ACTIVE";h[h.ALWAYS_ACTIVE=1]="ALWAYS_ACTIVE";h[h.EXPIRED=2]="EXPIRED";h[h.NO_CONSENT=3]="NO_CONSENT";h[h.OPT_OUT=4]="OPT_OUT";h[h.PENDING=5]="PENDING";h[h.WITHDRAWN=6]="WITHDRAWN";(h=v=v||{}).ping="ping";h.addEventListener="addEventListener";h.removeEventListener="removeEventListener";h.hasSection="hasSection";h.getSection="getSection";h.getField="getField";h.getGPPData="getGPPData";(h=u=u||{})[h.Days=1]="Days";h[h.Weeks=7]="Weeks";h[h.Months=30]="Months";h[h.Years=365]="Years";
(h=w=w||{}).Name="OTGPPConsent";h[h.ChunkSize=4E3]="ChunkSize";h.ChunkCountParam="GPPCookiesCount";(h=x=x||{}).CPRA="uscav1";h.CCPA="uscav1";h.CDPA="usvav1";h.USNATIONAL="usnatv1";h.COLORADO="uscov1";h.CTDPA="usctv1";h.UCPA="usutv1";h.IAB2V2="tcfeuv2";(h=y=y||{})[h.CPRA=8]="CPRA";h[h.CCPA=8]="CCPA";h[h.CDPA=9]="CDPA";h[h.USNATIONAL=7]="USNATIONAL";h[h.COLORADO=10]="COLORADO";h[h.UCPA=11]="UCPA";h[h.CTDPA=12]="CTDPA";h[h.IAB2V2=2]="IAB2V2";var D=(w.Name,"PRODUCTION"),C=((h={})[u.Days]="PCenterVendorListLifespanDay",
h[u.Weeks]="LfSpnWk",h[u.Months]="PCenterVendorListLifespanMonth",h[u.Years]="LfSpnYr",new function(){var a=this;this.LOCATOR_NAME="__gppLocator";this.win=window;this.customInit="CUSTOMINIT";this.init=function(){a.win.__gpp&&"function"==typeof a.win.__gpp||(a.win.__gpp=a.executeGppApi,window.addEventListener("message",a.messageHandler,!1),a.addFrame(a.LOCATOR_NAME))};this.removeGppApi=function(){delete a.win.__gpp;var b=document.querySelectorAll("iframe[name\x3d"+a.LOCATOR_NAME+"]")[0];b&&b.parentElement.removeChild(b)};
this.executeGppApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];var d=null==(d=a.win)?void 0:d.__gpp;if(d.queue=d.queue||[],d.events=d.events||[],!b.length||1===b.length&&"queue"===b[0])return d.queue;if(1===b.length&&"events"===b[0])return d.events;c=b[0];d=1<b.length?b[1]:null;b=2<b.length?b[2]:null;switch(c){case v.ping:return a.getPingRequest(d);case v.addEventListener:return a.addEventListener(d,b);case v.removeEventListener:return a.removeEventListener(b);default:return void a.addToQueue(c,
d,b)}};this.getPingRequest=function(b){var c,d,f={gppVersion:1.1,cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:(c=[],d={},Object.keys(y).forEach(function(g){var l={};d=g=(l[g]=y[g],Object.assign(l,d))}),Object.keys(x).map(function(g){return{name:g,value:x[g]}}).forEach(function(g){g=d[g.name]+":"+g.value;c.push(g)}),c.filter(function(g,l){return c.indexOf(g)===l})),currentAPI:"",cmpId:Number.parseInt("28"),sectionList:[],applicableSections:[0],gppString:"",parsedSections:{}};
return b&&b(f,!0),f};this.addFrame=function(b){var c,d=a.win.document;a.win.frames[b]||(d.body?((c=d.createElement("iframe")).style.cssText="display:none",c.name=b,c.setAttribute("title","GPP Locator"),d.body.appendChild(c)):setTimeout(function(){a.addFrame(b)},5))};this.addEventListener=function(b,c){var d=a.win.__gpp;return d.events=d.events||[],null!=d&&d.lastId||(d.lastId=0),d.lastId++,d.events.push({id:d.lastId,callback:b,parameter:c}),{eventName:"listenerRegistered",listenerId:d.lastId,data:!0,
pingData:a.getPingRequest()}};this.removeEventListener=function(b){var c=!1,d=a.win.__gpp;return d.events=d.events||[],d.events=d.events.filter(function(f){return f.id.toString()!==b.toString()||!(c=!0)}),{eventName:"listenerRemoved",listenerId:b,data:c,pingData:a.getPingRequest()}};this.addToQueue=function(b,c,d){var f=a.win.__gpp;f.queue=f.queue||[];f.queue.push([b,c,d])};this.messageHandler=function(b){var c,d="string"==typeof b.data;try{var f=d?JSON.parse(b.data):b.data}catch(g){f=null}f&&f.__gppCall&&
(c=f.__gppCall,(0,a.win.__gpp)(c.command,function(g,l){g={__gppReturn:{returnValue:g,success:l,callId:c.callId}};b&&b.source&&b.source.postMessage&&b.source.postMessage(d?JSON.stringify(g):g,b.origin||"*")},c.parameter))};this.customInit||this.init()}),E=(A.prototype.camelize=function(a){return(a=a.replace("--","")).split("-").map(function(b,c){var d=b?b[0].toUpperCase()+b.slice(1):"";return 0===c?b:d}).join("")},A.prototype.strToObj=function(a){var b={};a=a.split(";").map(function(f){return f.trim()});
for(var c=0,d=void 0;c<a.length;++c)if(/:/.test(a[c])){if(!(d=a[c].split(/:(.+)/))[1])return null;b[this.camelize(d[0])]=d[1].trim()}return b},A);k.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.getParam();this.setDomainDataFileURL();this.captureNonce();this.setOTDataLayer();this.fetchSDKDependency()};k.prototype.getApiReqs=function(){var a=[{url:e.domainJsonUrl,storageKey:"domainData"}],b=(e.mobileOnlineURL.push(e.domainJsonUrl),window?window.OneTrust:null);return b&&b.dataSubjectParams&&
b.dataSubjectParams.id&&b.dataSubjectParams.token&&e.tenantId&&e.apiUrl&&(this.totalApi++,a.push({url:e.apiUrl+"?syncgroup\x3d"+e.syncGrpId,headers:{Identifier:b.dataSubjectParams.id,TenantId:e.tenantId,Authorization:b.dataSubjectParams.token},storageKey:"preferences"})),a};k.prototype.fetchSDKDependency=function(){for(var a=this.getApiReqs(),b=Array(a.length),c=this,d=0;d<a.length;d++)!function(f){var g=a[f];if(RegExp("^file://","i").test(g.url))c.otFetchOfflineFile(g.url,g.storageKey,c.apiCallback);
else{if(b[f]=new XMLHttpRequest,b[f].open("GET",g.url),b[f].withCredentials=!1,g.headers)for(var l in g.headers)b[f].setRequestHeader(l,g.headers[l]);b[f].onload=function(){var m=null;200<=b[f].status&&400>b[f].status&&b[f].responseText?m=JSON.parse(b[f].responseText):console.log("OT - Error in fetch URL : "+g.url+" Exception : "+JSON.stringify({message:"Error Loading Data",statusCode:b[f].status}));p.apiCallback(g.storageKey,m)};b[f].send()}}(d)};k.prototype.handleBulkDomainMgmt=function(a,b){a&&
(b.Domain=window.location.hostname)};k.prototype.apiCallback=function(a,b){var c,d,f,g,l;p.apiResult[a]=b;p.requestedApiCount++;p.requestedApiCount===p.totalApi&&(a=this.apiResult.domainData.TenantFeatures,c=this.apiResult.domainData,b=window.location.hostname,d=c.Domain,f=c.BulkDomainCheckUrl,a&&a.CookieV2BulkDomainManagement&&b!==d&&c.ScriptType===D&&(window.sessionStorage&&window.sessionStorage.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt("true"===window.sessionStorage.getItem("bulkDomainMgmtEnabled"),
c):(g=new XMLHttpRequest,l=this.handleBulkDomainMgmt,g.onload=function(){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(JSON.parse(g.response).isValid));l(JSON.parse(g.response).isValid,c)},g.open("GET",f,!1),g.withCredentials=!1,g.setRequestHeader("location",e.storageBaseURL.replace(/^https?:\/\//,"")),g.setRequestHeader("domainId",e.domainId),g.setRequestHeader("url",b),g.send())),p.setVariables(c),p.checkIfPrevUserIsAnon(),p.checkAndClearLocalConsent(p.apiResult.preferences),
p.clearConsentIfDsIdChanged(),p.syncConsentProfile(p.apiResult.preferences),p.getLocation(p.apiResult.domainData))};k.prototype.checkIfPrevUserIsAnon=function(){var a=this.readCookieParam(e.optanonCookie,"consentId"),b=this.readCookieParam(e.optanonCookie,"isAnonUser"),c=this.readCookieParam(e.optanonCookie,"iType"),d=null==(d=window)?void 0:d.OneTrust;(d=d&&d.dataSubjectParams&&d.dataSubjectParams.id)&&d!==a&&(""!==b?this.prevUserWasAnon="1"===b:""!==c&&(this.prevUserWasAnon=!!c))};k.prototype.checkAndClearLocalConsent=
function(a){var b=this.hasAnonUserConsented(),c=this.checkIfConsentIdAreDifferent();b=this.prevUserWasAnon&&b;a=!this.carryOverAnonymousConsent&&0>=(null==(a=null==a?void 0:a.preferences)?void 0:a.length);c&&b&&a&&this.removeCookies()};k.prototype.hasAnonUserConsented=function(){return!!this.readCookieParam(e.optanonCookie,"iType")};k.prototype.setVariables=function(a){this.carryOverAnonymousConsent=a.AuthenticatedConsent};k.prototype.checkIfConsentIdAreDifferent=function(){var a=this.readCookieParam(e.optanonCookie,
"consentId"),b=null==(b=window)?void 0:b.OneTrust;return(b&&b.dataSubjectParams&&b.dataSubjectParams.id)!==a};k.prototype.clearConsentIfDsIdChanged=function(){var a=this.readCookieParam(e.optanonCookie,"consentId"),b=window?window.OneTrust:null;b=b&&b.dataSubjectParams&&b.dataSubjectParams.id;var c=this.readCookieParam(e.optanonCookie,"iType");b===a||c||this.removeCookies()};k.prototype.getConsentValue=function(a){var b=null;switch(a){case n[n.ACTIVE]:case n[n.ALWAYS_ACTIVE]:b="1";break;case n[n.EXPIRED]:case n[n.OPT_OUT]:case n[n.PENDING]:case n[n.WITHDRAWN]:b=
"0"}return b};k.prototype.syncConsentProfile=function(a){if(a){var b=this.readCookieParam(e.optanonCookie,"iType"),c=(this.userHasProfile=0<(null==(c=a.preferences)?void 0:c.length),this.isCarryingOverAnonymousConsent());if(a.preferences.length){for(var d=m=this.getCookie(e.alertBoxCookie),f=!1,g=this.deserialiseStringToArray(this.readCookieParam(e.optanonCookie,"groups")),l=0;l<a.preferences.length;l++){var m,q=a.preferences[l],r=q.status===n[n.NO_CONSENT],t=e.domainGrps[q.id];t&&(this.identifierType=
a.identifierType,this.removeGroupIfNoConsent(r,g,t),m=(r=this.checkAndUpdateLocalConsent(r,m,q,b,f,t,g,d)).alertBoxCookieVal,f=r.syncOnlyDate)}this.grpsSynced.length&&this.writeCookieParam(e.optanonCookie,"groups",g.toString());c||!this.grpsSynced.length&&!f||this.setCookie(e.alertBoxCookie,m)}c?this.checkLocalConsentForIabPurposes=!0:this.syncIabAndGacConsent(a.syncGroups,b)}this.ensureHtmlGroupDataInitialised();p.apiResult.domainData.GCEnable||(this.updateGtmMacros(),this.gtmUpdated=!0)};k.prototype.syncIabAndGacConsent=
function(a,b){a&&a[e.syncGrpId]&&(a[e.syncGrpId].tcStringV2&&this.getCookie(e.Iab2Pub)!==a[e.syncGrpId].tcStringV2&&(this.isIabSyncRequired=!0,this.setCookie(e.Iab2Pub,a[e.syncGrpId].tcStringV2)),a[e.syncGrpId].gacString)&&this.getCookie(e.gacCookie)!==a[e.syncGrpId].gacString&&(this.isGacSyncRequired=!0,this.setCookie(e.gacCookie,a[e.syncGrpId].gacString));(this.isIabSyncRequired||this.isGacSyncRequired||this.grpsSynced.length)&&b&&this.writeCookieParam(e.optanonCookie,"iType","")};k.prototype.removeGroupIfNoConsent=
function(a,b,c){if(a&&b.length){a=-1;for(var d=0;d<b.length;d++)if(b[d].split(":")[0]===c){a=d;break}-1<a&&(b.splice(a,1),this.grpsSynced.push(c))}};k.prototype.checkAndUpdateLocalConsent=function(a,b,c,d,f,g,l,m){var q=new Date(m),r=new Date(c.lastInteractionDate),t=r<q,B=this.isCarryingOverAnonymousConsent();return!a&&(!b||q<r||d)&&(a=!(B&&t),q=this.getConsentValue(c.status),f=!0,b=c.lastInteractionDate,B&&t&&(f=!1,b=m),(!this.serverLatestDateForCookies||r>this.serverLatestDateForCookies)&&(this.serverLatestDateForCookies=
r),this.setGroupsConsentFromServerOrLocal({groupsConsent:l,grpId:g,consentVal:q,changeConsent:a})),this.forceCreateTrxLocalConsentIsGreater=B&&t,{syncOnlyDate:f,alertBoxCookieVal:b}};k.prototype.setGroupsConsentFromServerOrLocal=function(a){var b=a.groupsConsent,c=a.grpId,d=a.consentVal;a=a.changeConsent;for(var f=c+":"+d,g=-1,l=0;l<b.length;l++){var m=b[l].split(":");if(m[0]===c){m[1]!==d&&(a&&(b[l]=f),this.grpsSynced.push(c));g=l;break}}-1===g&&(b.push(f),this.grpsSynced.push(c))};k.prototype.getLocation=
function(a){(a.TenantFeatures&&a.TenantFeatures.CookieV2CSP||a.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new E).implementThePolyfill());var b,c=window;c.OneTrust&&c.OneTrust.geolocationResponse?(c=c.OneTrust.geolocationResponse,this.setGeoLocation(c.countryCode,c.stateCode),this.addBannerSDKScript(a)):(c=this.readCookieParam(e.optanonCookie,e.geoCookie))||a.SkipGeolocation?(b=c.split(";")[0],c=c.split(";")[1],this.setGeoLocation(b,c),this.addBannerSDKScript(a)):this.getGeoLocation(a)};
k.prototype.getGeolocationURL=function(a){return RegExp("^file://","i").test(e.storageBaseURL+"/scripttemplates/"+a.Version)&&a.MobileSDK?"./"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js":a.GeolocationUrl};k.prototype.getGeoLocation=function(a){var b=this,c=(this.apiResult.domainData.TenantFeatures,this.getGeolocationURL(a)),d=new XMLHttpRequest;d.onload=function(f){this&&this.responseText?g=this.responseText:f&&f.target&&(g=f.target.responseText);var g;f=
JSON.parse(g);b.setGeoLocation(f.country,f.state);b.addBannerSDKScript(a)};d.onerror=function(){b.addBannerSDKScript(a)};d.open("GET",c);d.withCredentials=!1;d.setRequestHeader("accept","application/json");d.send()};k.prototype.setOTDataLayer=function(){var a="data-dLayer-ignore",b=e.stubScrEl.hasAttribute(a);a=e.stubScrEl.getAttribute(a);b=b&&"true"===a||b&&""===a;this.otDataLayer={ignore:b,name:b?null:e.stubScrEl.getAttribute("data-dLayer-name")||"dataLayer"}};k.prototype.setGeoLocation=function(a,
b){e.userLocation={country:a,state:void 0===b?"":b}};k.prototype.otFetchOfflineFile=function(a,b,c){var d=(a=a.replace(".json",".js")).split("/"),f=d[d.length-1].split(".js")[0];this.jsonp(a,function(){c(b,window[f])})};k.prototype.jsonp=function(a,b){var c=document.createElement("script");c.setAttribute("src",a);c.async=!0;c.type="text/javascript";this.nonce&&c.setAttribute("nonce",this.nonce);this.crossOrigin&&c.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(c);
RegExp("^file://","i").test(a)||e.mobileOnlineURL.push(a);b&&(c.onload=c.onerror=function(){b()})};k.prototype.getRegionSet=function(a){var b,c=e.userLocation,d=a.RuleSet.filter(function(q){return!0===q.Default});if(!c.country&&!c.state)return d&&0<d.length?d[0]:null;d=c.state.toLowerCase();c=c.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var g=a.RuleSet[f];else{var l=a.RuleSet[f].States;if(l[c]&&0<=l[c].indexOf(d)){var m=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(c)&&
(b=a.RuleSet[f])}return m||b||g};k.prototype.ensureHtmlGroupDataInitialised=function(){"IAB2"!==this.iabType&&"IAB2V2"!==this.iabType||this.initializeIABData();this.initGroups();this.initHosts();this.initGenVen();this.initVendorsService()};k.prototype.initGroups=function(){var a=this.readCookieParam(e.optanonCookie,"groups");a&&(e.optanonHtmlGroupData=this.deserialiseStringToArray(a))};k.prototype.initHosts=function(){var a=this.readCookieParam(e.optanonCookie,"hosts");a&&(e.optanonHostData=this.deserialiseStringToArray(a))};
k.prototype.initGenVen=function(){var a=this.readCookieParam(e.optanonCookie,"genVendors");a&&(e.genVendorsData=this.deserialiseStringToArray(a))};k.prototype.initVendorsService=function(){var a=this.readCookieParam(e.optanonCookie,"vs");a&&(e.vendorsServiceData=this.deserialiseStringToArray(a))};k.prototype.initializeIABData=function(){this.validateGDPRApplies();this.validateIABGlobal()};k.prototype.validateIABGlobal=function(){var a=this.readCookieParam(e.optanonCookie,e.isIabGlobal);a?"true"===
a?(e.hasIABGlobalScope=!0,e.isStubReady=!1):(e.hasIABGlobalScope=!1,e.IABCookieValue=this.getCookie(e.Iab2Pub)):e.isStubReady=!1};k.prototype.validateGDPRApplies=function(){var a=this.readCookieParam(e.optanonCookie,e.geoCookie).split(";")[0];a?e.gdprApplies=0<=e.EUCOUNTRIES.indexOf(a):e.isStubReady=!1};k.prototype.writeCookieParam=function(a,b,c){var d={},f=this.getCookie(a);if(f){f=f.split("\x26");for(var g=0;g<f.length;g+=1){var l=f[g].split("\x3d");d[decodeURIComponent(l[0])]=decodeURIComponent(l[1]).replace(/\+/g,
" ")}}d[b]=c;b=(f=this.apiResult.domainData.TenantFeatures)&&f.CookieV2CookieDateTimeInISO;d.datestamp=b?(new Date).toISOString():(new Date).toString();d.version=this.apiResult.domainData.Version;this.setCookie(a,this.param(d))};k.prototype.param=function(a){var b,c="";for(b in a)a.hasOwnProperty(b)&&(""!==c&&(c+="\x26"),c+=b+"\x3d"+encodeURIComponent(a[b]).replace(/%20/g,"+"));return c};k.prototype.readCookieParam=function(a,b){if(a=this.getCookie(a)){var c={};var d=a.split("\x26");for(a=0;a<d.length;a+=
1){var f=d[a].split("\x3d");c[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g," ")}return b?c[b]||"":c}return""};k.prototype.setCookie=function(a,b,c){void 0===b&&(b="");void 0===c&&(c=!1);this.isAmp&&""!==b&&(this.ampData[a]=b);var d=new Date;d=(d.setTime(d.getTime()+31536E6),";expires\x3d"+d.toUTCString());c=(c&&(d=c?"; expires\x3d"+(new Date(0)).toUTCString():""),this.apiResult.domainData);var f=(c.TenantFeatures,c.CookieSameSiteNoneEnabled?"Samesite\x3dNone; Secure":"Samesite\x3dLax"),
g=c.Domain.split("/"),l=1>=g.length?"":g.slice(1).join("/");b=""+b+d+";path\x3d/";b="TEST"!==c.ScriptType&&"LOCAL_TEST"!==c.ScriptType||this.isPreview?""+b+l+";domain\x3d."+g[0]+";"+f:b+";"+f;document.cookie=a+"\x3d"+b};k.prototype.getCookie=function(a){if(this.isAmp&&(this.ampData=JSON.parse(window.localStorage.getItem(e.domainId))||{},this.ampData))return this.ampData[a]||null;for(var b=a+"\x3d",c=document.cookie.split(";"),d=0;d<c.length;d+=1){for(a=c[d];" "==a.charAt(0);)a=a.substring(1,a.length);
if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null};k.prototype.removeCookies=function(){this.removeAlertBox();this.removeOptanon();this.removeIab2();this.removeAddtlStr()};k.prototype.removeAlertBox=function(){null!==this.getCookie("OptanonAlertBoxClosed")&&this.setCookie("OptanonAlertBoxClosed","",!0)};k.prototype.removeIab2=function(){null!==this.getCookie("eupubconsent-v2")&&this.setCookie("eupubconsent-v2","",!0)};k.prototype.removeAddtlStr=function(){null!==this.getCookie("OTAdditionalConsentString")&&
this.setCookie("OTAdditionalConsentString","",!0)};k.prototype.removeOptanon=function(){null!==this.getCookie("OptanonConsent")&&this.setCookie("OptanonConsent","",!0)};k.prototype.updateGtmMacros=function(){for(var a=[],b=e.optanonHtmlGroupData.length,c=0;c<b;c++)this.endsWith(e.optanonHtmlGroupData[c],":1")&&a.push(e.optanonHtmlGroupData[c].replace(":1",""));b=e.optanonHostData.length;for(c=0;c<b;c++)this.endsWith(e.optanonHostData[c],":1")&&a.push(e.optanonHostData[c].replace(":1",""));b=e.genVendorsData.length;
for(c=0;c<b;c++)this.endsWith(e.genVendorsData[c],":1")&&a.push(e.genVendorsData[c].replace(":1",""));b=e.vendorsServiceData.length;for(c=0;c<b;c++)this.endsWith(e.vendorsServiceData[c],":1")&&a.push(e.vendorsServiceData[c].replace(":1",""));var d;b=window;c=","+this.serialiseArrayToString(a)+",";var f=(b.OnetrustActiveGroups=c,b.OptanonActiveGroups=c,this.otDataLayer.ignore||void 0===b[this.otDataLayer.name]?this.otDataLayer.ignore||(b[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:c},
{event:"OptanonLoaded",OptanonActiveGroups:c}]):b[this.otDataLayer.name].constructor===Array&&(b[this.otDataLayer.name].push({OnetrustActiveGroups:c}),b[this.otDataLayer.name].push({OptanonActiveGroups:c})),new CustomEvent("consent.onetrust",{detail:a}));!this.otDataLayer.ignore&&a.length&&(b[this.otDataLayer.name].constructor===Array&&b[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:c}),d=new CustomEvent("OneTrustGroupsUpdated",{detail:a}));setTimeout(function(){a.length&&
window.dispatchEvent(f);d&&window.dispatchEvent(d)})};k.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]};k.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)};k.prototype.serialiseArrayToString=function(a){return a.toString()};k.prototype.setDomainDataFileURL=function(){e.stubScrEl=document.querySelector("script[src*\x3d'"+e.stubName+"']");e.stubScrEl&&e.stubScrEl.hasAttribute(e.domainAttr)&&(e.domainId=e.stubScrEl.getAttribute(e.domainAttr).trim(),
e.storageBaseURL=e.stubScrEl.getAttribute("src").split("/consent")[0],this.isPreview&&-1===e.domainId.indexOf("test")?e.domainId+="-test":this.isPreview=!1,e.domainBaseUrl=e.storageBaseURL&&e.storageBaseURL+"/consent/"+e.domainId,e.domainJsonUrl=e.domainBaseUrl+"/"+e.domainId+".json")};k.prototype.initCustomEventPolyfill=function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");return d.initCustomEvent(b,c.bubbles,c.cancelable,c.detail),d}"function"!=
typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a)};k.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];a&&a.parentElement.removeChild(a)};k.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}};k.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?
this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview"),c=(this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase(),this.readCookieParam("otpreview","expiry")),d=this.readCookieParam("otpreview","geo");this.isReset=a||c&&new Date(c)<new Date;this.isPreview=!this.isReset&&(b||c&&new Date(c)>new Date);this.setGeoParam(this.geoFromUrl||d)};k.prototype.setGeoParam=function(a){var b;
a&&((b=window).OneTrust||(b.OneTrust={}),a=a.split(","),b.OneTrust.geolocationResponse={countryCode:a[0],stateCode:a[1]})};k.prototype.captureNonce=function(){this.nonce=e.stubScrEl.nonce||e.stubScrEl.getAttribute("nonce")||null};k.prototype.isCarryingOverAnonymousConsent=function(){return this.carryOverAnonymousConsent&&this.prevUserWasAnon&&this.userHasProfile};var w=k,p=new w;return z.OtSDKStub=w,z.otSdkStub=p,z})({});