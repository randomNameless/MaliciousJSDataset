!function(newrelic){if(newrelic){var measure={errCount:0};newrelic.setErrorHandler(function(err){return measure.errCount++,!0}),espn=window.espn||{},espn.measure=measure}}(window.newrelic),window.Modernizr=function(window,document,undefined){function setCss(str){mStyle.cssText=str}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return"pfx"!=prefixed||prop}return!1}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined)return elem===!1?props[i]:is(item,"function")?item.bind(elem||obj):item}return!1}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed):(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),testDOMProps(props,prefixed,elem))}function webforms(){Modernizr.input=function(props){for(var i=0,len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in inputElem);return attrs.list&&(attrs.list=!(!document.createElement("datalist")||!window.HTMLDataListElement)),attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var featureName,hasOwnProp,version="2.8.3",Modernizr={},enableClasses=!0,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),prefixes=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),tests={},attrs={},classes=[],slice=classes.slice,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))for(;nodes--;)node=document.createElement("div"),node.id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body?div:fakeBody).innerHTML+=style,fakeBody.appendChild(div),body||(fakeBody.style.background="",fakeBody.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(fakeBody)),ret=callback(div,rule),body?div.parentNode.removeChild(div):(fakeBody.parentNode.removeChild(fakeBody),docElement.style.overflow=docOverflow),!!ret},_hasOwnProperty={}.hasOwnProperty;hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),tests.touch=function(){var bool;return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?bool=!0:injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=9===node.offsetTop}),bool},tests.history=function(){return!(!window.history||!history.pushState)},tests.cssanimations=function(){return testPropsAll("animationName")},tests.video=function(){var elem=document.createElement("video"),bool=!1;try{(bool=!!elem.canPlayType)&&(bool=new Boolean(bool),bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return bool},tests.localstorage=function(){try{return localStorage.setItem(mod,mod),localStorage.removeItem(mod),!0}catch(e){return!1}};for(var feature in tests)hasOwnProp(tests,feature)&&(featureName=feature.toLowerCase(),Modernizr[featureName]=tests[feature](),classes.push((Modernizr[featureName]?"":"no-")+featureName));return Modernizr.input||webforms(),Modernizr.addTest=function(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&Modernizr.addTest(key,feature[key]);else{if(feature=feature.toLowerCase(),Modernizr[feature]!==undefined)return Modernizr;test="function"==typeof test?test():test,"undefined"!=typeof enableClasses&&enableClasses&&(docElement.className+=" "+(test?"":"no-")+feature),Modernizr[feature]=test}return Modernizr},setCss(""),modElem=inputElem=null,Modernizr._version=version,Modernizr._prefixes=prefixes,Modernizr._domPrefixes=domPrefixes,Modernizr._cssomPrefixes=cssomPrefixes,Modernizr.testProp=function(prop){return testProps([prop])},Modernizr.testAllProps=testPropsAll,Modernizr.testStyles=injectElementWithStyles,Modernizr.prefixed=function(prop,obj,elem){return obj?testPropsAll(prop,obj,elem):testPropsAll(prop,"pfx")},docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):""),Modernizr}(this,this.document),function(){window.espn_ui=window.espn_ui||{},window.espn_ui.device={},window.espn_ui.device.browser="Others",window.espn_ui.device.OS="Others",navigator.userAgent.match(/Chrome/)?(window.espn_ui.device.isChrome=!0,window.espn_ui.device.browser="Chrome"):navigator.userAgent.match(/Safari/)?(window.espn_ui.device.isSafari=!0,window.espn_ui.device.browser="Safari"):navigator.userAgent.match(/Mozilla/)&&(window.espn_ui.device.isFirefox=!0,window.espn_ui.device.browser="Firefox"),navigator.userAgent.match(/Windows/)?(window.espn_ui.device.isWindows=!0,window.espn_ui.device.OS="Windows"):navigator.userAgent.match(/Android/)?(window.espn_ui.device.isAndroid=!0,window.espn_ui.device.OS="Android"):navigator.userAgent.match(/iP(ad|hone|od)/)?(window.espn_ui.device.isIos=!0,window.espn_ui.device.OS="IOS"):navigator.userAgent.match(/Mac/)&&(window.espn_ui.device.OS="Mac"),navigator.userAgent.match(/Mobi/)?(navigator.userAgent.match(/iPad/)?window.espn_ui.device.isTablet=!0:window.espn_ui.device.isMobile=!0,navigator.userAgent.match(/Android (4|3|2)./)&&navigator.userAgent.indexOf("like Gecko")>-1&&navigator.userAgent.indexOf("Chrome")===-1&&(window.espn_ui.device.ttf=!0),navigator.userAgent.match("CriOS")&&(window.espn_ui.device.isChromeiOS=!0)):navigator.userAgent.match(/Tab/)?window.espn_ui.device.isTablet=!0:navigator.userAgent.match(/Android/)?window.espn_ui.device.isTablet=!0:navigator.userAgent.match(/Touch/)&&navigator.userAgent.match(/IE/)&&(window.espn_ui.device.isTablet=!0),window.espn_ui.device.isTouchscreen=function(){return!!window.Modernizr.touch||"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0}()}(),function(){window.espn_ui.device.isMobile?document.documentElement.className+=" mobile-ua ":document.documentElement.className+=" desktop-ua "}(),function(window,document){function _checkScrollbars(){if(style=html.style.overflowY,html.style.overflowY="scroll",scrollbarWidth=window.innerWidth-html.clientWidth,html.style.overflowY=style,addClass=scrollbarWidth>0,"WebkitAppearance"in html.style){var chromeVersion,chromeRX=/Chrome\/(\d*?\.\d*?\.\d*?\.\d*?)\s/g,chrome=navigator.userAgent.match(chromeRX);chrome?(chrome=chrome[0].replace(chromeRX,"$1"),chromeVersion=chrome.split("."),chromeVersion[0]=parseInt(chromeVersion[0],10),chromeVersion[2]=parseInt(chromeVersion[2],10),chromeVersion[3]=parseInt(chromeVersion[3],10),chromeVersion[0]<=29&&(29===chromeVersion[0]&&chromeVersion[2]<1548&&chromeVersion[3]<57?addClass=!1:chromeVersion[0]<29&&(addClass=!1))):addClass=!1}if(addClass===!0)return html.className=html.className+" scrollbars-"+scrollbarWidth,!0}if(window.espn_ui.device.isMobile)return!1;var scrollbarWidth,style,html=document.documentElement,addClass=!1,check=_checkScrollbars();check!==!0&&document.addEventListener("DOMContentLoaded",function(){_checkScrollbars()})}(this,this.document),function(window){var espn=window.espn||{};espn.loadType="loadEnd"}(this),espn=window.espn||{},espn.nativeBridge=function(){var isAndroid,isWindows,isIFrame,postMessageDomain,debug,holdMessage,messageQueue=[],isProcessing=!1,_q={},VALID_DOMAIN_REGEX=/(\.go\.com|espn|espncricinfo|espnqa|espnsb)(qa\.com|\.co\.uk|\.in|\.cl|\.com(\.(ar|co|mx|ve|au|br))?)/,log=window.console&&window.console.log.bind(window.console);location.search.replace(/([^?=&]+)(=([^&#]*))?/g,function($0,$1,$2,$3){_q[$1]=$3}),isAndroid="android"===_q.platform,isWindows="windows"===_q.platform,isIFrame="iframe"===_q.platform&&"function"==typeof window.postMessage,debug="true"===_q.debug,holdMessage="true"===_q.test,postMessageDomain=function(){var parentDomain=_q.parentDomain?decodeURIComponent(_q.parentDomain):"http://www.espn.com",parentDomainParts=parentDomain.split("//"),parentProtocol=parentDomainParts[0],parentHost=parentDomainParts[1],validParentDomain=VALID_DOMAIN_REGEX.test(parentHost),messageDomain="http://www.espn.com/";return validParentDomain&&(messageDomain=parentProtocol+"//"+parentHost),messageDomain}();var _constructMessage=function(message,params,callback){var JSONMessage={commandName:message,params:params,callBack:callback};return JSONMessage},_processQueue=function(){isProcessing||(isProcessing=!0,setTimeout(_processMessages,0))},_processMessages=function(){var message=messageQueue.shift();message&&(message=_createCallback(message),_transmitMessage(message),messageQueue.length?_processMessages():isProcessing=!1)},_createCallback=function(message){var callback=message.callBack;if(callback&&""!==callback){var callbackName=Math.floor(1e12*Math.random()).toString();window[callbackName]=function(arg){_handleCallback(callback,arg),delete window[callbackName]},message.callBack="window['"+callbackName+"']"}return message},_handleCallback=function(callback,arg){try{"function"==typeof callback?callback(arg):"string"==typeof callback&&window[callback](arg)}catch(e){log("nativeBridge callback error:",e)}},_transmitMessage=function(message){if(debug&&log("espn.nativeBridge",message),"undefined"!=typeof message&&!holdMessage)if(isIFrame)window.parent.postMessage(JSON.stringify(message),postMessageDomain);else if(isAndroid)try{window.linklanguage.sendJSONMessage(JSON.stringify(message))}catch(e){log("nativeBridge send failed",message)}else if(isWindows)try{window.external.notify(JSON.stringify(message))}catch(e){log("nativeBridge send failed",message)}else if("undefined"!=typeof window.webkit)try{window.webkit.messageHandlers.espnWebview.postMessage(message)}catch(e){log("nativeBridge send failed",message)}else window.location=JSON.stringify(message)},_sendMessage=function(message){messageQueue.push(message),_processQueue()};return{getData:function(dataName,callback){var native=espn["native"];"undefined"!=typeof native?("undefined"==typeof native[dataName]||"true"!==native[dataName]&&"false"!==native[dataName]||(native[dataName]="true"===native[dataName]),callback(native[dataName])):espn.nativeBridge.sendMessage(dataName,{},callback)},sendMessage:function(message,params,callback){_sendMessage(_constructMessage(message,params,callback))},loadMinibrowser:function(URL){if(isAndroid)try{debug&&log("espn.nativeBridge","loadMinibrowserWithURL",URL),window.linklanguage.loadMinibrowserWithURL(URL)}catch(e){log("nativeBridge send failed","loadMinibrowserWithURL")}else _sendMessage(_constructMessage("loadMinibrowserWithURL",{url:URL,link:URL}))}}}(),function(){function isFromSCApp(){return"sc"===_qparams.appsrc}function updateMobileRS(acct){var agent,appId=_appMap[_qparams.appsrc]||[],id=appId[0]||null,isRollup="undefined"!=typeof appId[1]&&appId[1],agentName=appId[2]||null,findAgent=function(regexp){return!!regexp.test(navigator.userAgent)};return acct.split(",")[0].replace(/ /g,""),id&&(acct=id,isRollup===!0&&(acct+=isFromSCApp()?",wdgespge":",wdgwespma")),agentName&&(findAgent(/iPad/i)?agent="ipad":findAgent(/iP(?:hone|od)/i)?agent="iphone":findAgent(/Android/i)&&(agent="android"),agent&&(agent=[agentName,agent].join(":"),"undefined"!=typeof window._espntrack?(window._espntrack.push({prop73:agent}),window._espntrack.push({eVar73:agent})):window._espntrack=[{prop73:agent},{eVar73:agent}])),acct}window.espn=window.espn||{};var _qparams={},_appMap=(location.search.replace(/([^?=&]+)(=([^&#]*))?/g,function($0,$1,$2,$3){_qparams[$1]=$3}),{fc:["wdgwespmafcapps",!1,"ma:espn:espnfc"],sc:["wdgespcom",!0,"ma:espn:scorecenter"],cbb:["wdgwespmabbapps",!1,"ma:espn:bracketbound"],cfb:["wdgwespmacollege",!1,"ma:espn:collegefootball"],fba:["wdgwespmafbaapps",!1,"ma:espn:fantasybasketball"],ffl:["wdgwespmafflapps",!1,"ma:espn:ffl"],fhl:["wdgwespmafhlapps",!1,"ma:espn:fantasyhockey"],flb:["wdgwespmaflbapps",!1,"ma:espn:fantasybaseball"],ocho:["wdgespappdesktop",!1,"espn:ocho"],test:["wdgesptest",!1,"ma:espn:test"],scfeedapp:["wdgwespmascfeed",!1,"ma:espn:scfeed"]});window.setReportSuite=function(account){var acct="wdgespcom",addglobal="undefined"==typeof window.addglobalsuite||window.addglobalsuite,gi=/^wdgesp(star|360europe|360prodigymexico|360terrabrazil|360vtrchile|australia|scrum|classiceurope|scorecenter|cricinfo|brazil|nasn|racinglive|fantasy,wdgespwc2010|footytips)$/,gi2=/^wdgespint|wdgesp(deportes|soccernet|australia|india)/,gx=/wdgespge/,g=/wdgesp(deportes|soccernet)|^wdgespfantasy,wdgespwc2010,wdgespinternational|^wdgespindia,wdgespinternational|^wdgespaustralia,wdgespinternational$/,gmx=/wdgwespma|wdgwespsoccernet|^(wdgesp(test|appdesktop)|wdgwesp(mobileweb|espnw|deportes))$/;return checkQaRegExp=/(qa\.|local\.|localhost\.|sb\.|preview\.|dev2\.|useqa=true|enable=qaAPI)/i,locationHref="undefined"!=typeof window.location?window.location.href:"","undefined"!=typeof window.s_omni&&(void 0!==window._espntrack&&void 0!==window._espntrack.account?acct=window._espntrack.account:"undefined"!=typeof window.s_account?acct=window.s_account:account&&account&&(acct=account)),acct=acct.replace(/^\s+|\s+$|\s+/,""),gi.test(acct)||gi2.test(acct)?(acct+=",wdgespinternational",(!gx.test(acct)||addglobal&&g.test(acct))&&(acct+=",wdgespge")):addglobal&&!gmx.test(acct)&&(acct+=",wdgespge"),"undefined"!=typeof _qparams.appsrc&&(acct=updateMobileRS(acct)),checkQaRegExp.test(locationHref)&&(acct="wdgespncomdev"),acct}}(),espn=window.espn||{},espn.geoRedirect=function(){function createCookie(name,value,days){var expires;if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toGMTString()}else expires="";document.cookie=name+"="+value+expires+"; path=/"}function readCookie(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}function getParam(name){return decodeURIComponent((new RegExp("[?|&]"+name+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null}function getUrlParams(){var paramValue,paramHash={src:!1,"country-view":!1,"lang-view":!1,"edition-view":!1,set:!1};return Object.keys(paramHash).forEach(function(name){paramValue=getParam(name),paramValue&&(paramHash[name]=paramValue)}),paramHash}function isDeeplink(paramHash){var deeplink=!1;return window.location.pathname.length>1&&(deeplink=!0,Object.keys(paramHash).forEach(function(name){paramHash[name]&&(deeplink=!1)})),deeplink}function getCountryAndLangPref(paramHash){var countryPref=paramHash["country-view"]||readCookie("country-view"),countrySearch=countryPref?"|"+countryPref+"|":"|"+geoLocation+"|",countryLang=paramHash["lang-view"]||readCookie("lang-view")||espn.i18n.lang,countryLangPref={};return in_regions.indexOf(countrySearch)>-1?(countryPref="in",countryLang="en"):au_regions.indexOf(countrySearch)>-1?(countryPref="au",countryLang="en"):uk_regions.indexOf(countrySearch)>-1?(countryPref="gb",countryLang="en"):za_regions.indexOf(countrySearch)>-1?(countryPref="za",countryLang="en"):ar_regions.indexOf(countrySearch)>-1?(countryLang="es",countryPref="ar"):co_regions.indexOf(countrySearch)>-1?(countryPref="co",countryLang="es"):cl_regions.indexOf(countrySearch)>-1?(countryPref="cl",countryLang="es"):pe_regions.indexOf(countrySearch)>-1?(countryPref="pe",countryLang="es"):gt_regions.indexOf(countrySearch)>-1?(countryPref="gt",countryLang="es"):ec_regions.indexOf(countrySearch)>-1?(countryPref="ec",countryLang="es"):pa_regions.indexOf(countrySearch)>-1?(countryPref="pa",countryLang="es"):do_regions.indexOf(countrySearch)>-1?(countryPref="do",countryLang="es"):uy_regions.indexOf(countrySearch)>-1?(countryPref="uy",countryLang="es"):cr_regions.indexOf(countrySearch)>-1?(countryPref="cr",countryLang="es"):sg_regions.indexOf(countrySearch)>-1?(countryPref="sg",countryLang="en"):mx_regions.indexOf(countrySearch)>-1?(countryPref="mx",countryLang="es"):us_regions.indexOf(countrySearch)>-1?(countryPref="us",countryLang="es"):ve_regions.indexOf(countrySearch)>-1?(countryPref="ve",countryLang="es"):br_regions.indexOf(countrySearch)>-1?(countryPref="br",countryLang="pt"):ph_regions.indexOf(countrySearch)>-1?(countryPref="ph",countryLang="en"):nl_regions.indexOf(countrySearch)>-1&&(countryPref="nl",countryLang="nl"),countryLangPref.langPref=countryLang||null,countryLangPref.countryPref=countryPref||null,countryLangPref}function redirectTo(countryLangPref){for(var redirectUrl,currentEditionCountryLang=espn.i18n.lang+"-"+espn.i18n.country,links=document.querySelectorAll("link[hreflang]"),i=0;i<links.length;i++){var link=links[i],hreflang=link.getAttribute("hreflang"),countryRE=new RegExp(countryLangPref,"i");if(void 0!==hreflang&&hreflang.match(countryRE)){var newLocation=link.getAttribute("href");void 0!==newLocation&&(redirectUrl=newLocation)}}redirectUrl&&currentEditionCountryLang!==countryLangPref&&window.location.href!==redirectUrl&&(window.location.href=redirectUrl)}var in_regions="|bd|bt|in|mv|np|pk|af|lk|",au_regions="|as|au|ck|fj|pf|ki|mh|fm|nu|pw|pg|tk|to|tv|ws|nz|",za_regions="|ao|bj|bw|bf|bi|cm|cv|cf|td|km|cg|cd|ci|dj|gq|er|et|ga|gm|gh|gn|gw|ke|ls|lr|mg|mw|ml|mr|mu|mz|na|ne|ng|re|rw|st|sn|sc|sl|so|za|ss|sd|sz|tz|tg|ug|ye|zm|zw|",uk_regions="|uk|gb|fk|gg|gi|gs|im|io|je|sh|fr|de|",ar_regions="|ar|py|bo|",co_regions="|co|",cl_regions="|cl|",mx_regions="|mx|hn|sv|ni|bz|",pe_regions="|pe|",us_regions="|pr|es|",ve_regions="|ve|",br_regions="|br|",ph_regions="|ph|",sg_regions="|sg|",gt_regions="|gt|",ec_regions="|ec|",pa_regions="|pa|",do_regions="|do|",uy_regions="|uy|",cr_regions="|cr|",nl_regions="|nl|",geoLocation=readCookie("country"),redirectHosts=["local.espn.com","www.espnqa.com","www.espn.com"],hostname=window.location.hostname,isRedirectHost=!1,geoRequiredRedirectMap={"in":in_regions},GLOBAL={domain:"https://global.espn.com",regex:/global\.espn(qa)?\.com/};hrefLangRedirectOverrides={cn:GLOBAL,kh:GLOBAL,id:GLOBAL,jp:GLOBAL,my:GLOBAL,th:GLOBAL,tw:GLOBAL},geoRestrictedRedirect=!1;for(var j=0;j<redirectHosts.length;j++)redirectHosts[j]===hostname&&(isRedirectHost=!0);return{run:function(countryLookup){var paramHash=getUrlParams(),regions="|in|au|za|gb|ar|co|cl|mx|ve|br|ph|sg|gt|ec|nl|uy|cr|do|pe|pa",countryLangPrefObj=getCountryAndLangPref(paramHash),countryPref=countryLookup||countryLangPrefObj.countryPref,countryLangPref=countryLangPrefObj.langPref+"-"+countryPref,userGeoLocation=countryLookup||geoLocation,hrefLangRedirectOverride=hrefLangRedirectOverrides[countryPref];if(Object.keys(geoRequiredRedirectMap).forEach(function(region){geoRequiredRedirectMap[region].indexOf(userGeoLocation)>0&&(geoRestrictedRedirect=region)}),null==countryPref)return void window.addEventListener("load",function(event){espn&&espn.geo&&espn.geo.getLocation().done(function(loc){countryPref=window.espn_util.find(loc||{},["country","isoCodeAlpha2"]),espn.geoRedirect.run(countryPref)})});if(geoRestrictedRedirect)return void redirectTo("en-"+geoRestrictedRedirect);if(!(isDeeplink(paramHash)||paramHash.src||paramHash.set||window.location.href.match(/(https?:\/\/insider.|\/insider|preview.)/))){hrefLangRedirectOverride&&!hrefLangRedirectOverride.regex.test(window.location.host)&&(window.location.href=hrefLangRedirectOverride.domain),paramHash["country-view"]&&paramHash["lang-view"]&&"www.espn.com"===espn.i18n.domain&&(createCookie("country-view",paramHash["country-view"],30),createCookie("lang-view",paramHash["lang-view"],30));var isDeportesRedirect="us"===espn.i18n.country&&"en"===espn.i18n.lang&&"es-us"===countryLangPref;(regions.indexOf(countryPref)>-1||isDeportesRedirect)&&("www.espn.com"===espn.i18n.domain||isRedirectHost)&&redirectTo(countryLangPref)}}}}();