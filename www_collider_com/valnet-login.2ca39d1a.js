!function(e){var t={};function n(o){var i;return(t[o]||(i=t[o]={i:o,l:!1,exports:{}},e[o].call(i.exports,i,i.exports,n),i.l=!0,i)).exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/build/",n(n.s=19)}({19:function(e,t,n){e.exports=n("Aasj")},Aasj:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,a,s,r=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=a.call(n)).done)&&(r.push(o.value),r.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return r}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?i(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,function(e){return e=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return String(e);if("object"!==n(o=o.call(e,t)))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string"),"symbol"===n(e)?e:String(e)}(i.key),i)}}window.amazonLoginScriptInjected=!1,window.openPassScriptInjected=!1,window.googleRecaptchaScriptInjected=!1,window.openPassClient=null,window.USER_TOKEN="";var s=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");this.onClosePopupCallback=t.onClosePopupCallback||function(){},this.mode=t.mode,this.idParent=t.idParent||null,this.className=t.className,this.triggeredFrom=t.triggeredFrom,this.gaEventCategory=t.gaEventCategory||null,this.showCloseButton=t.showCloseButton||!1,this.email=t.email||null,this.isUserExists=t.isUserExists||!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){window.valnetLoginContent}},{key:"defaultActiveTab",value:function(){return window.openPassClientId&&""!=window.openPassClientId?"openPass":"continue"}},{key:"onClickContinue",value:function(){var e,t=this,n=document.getElementById("continue-email-"+t.mode).value,o=document.getElementById("continue-form-error-msg-"+t.mode);o&&o.classList.add("is-hidden"),n?(n=encodeURIComponent(n),(e=new XMLHttpRequest).open("GET","/check-user-exists/?email="+n+"&subscribe=true",!0),e.setRequestHeader("Content-mode","application/x-www-form-urlencoded"),e.onreadystatechange=function(){var n;4==e.readyState&&200==e.status&&((n=JSON.parse(e.response)).error&&o?(o.textContent=n.error,o.classList.remove("is-hidden")):n.email&&(t.isUserExists=n.userExists,t.email=n.email,(n.userExists?(t.setContainerActiveTab("login",!1),hideDisclaimers):(t.setContainerActiveTab("register",!1),showDisclaimers))()))},e.send()):(o.textContent="Email is required",o.classList.remove("is-hidden"))}},{key:"onClickLogin",value:function(){var e=this,t=document.getElementById("login-email-"+e.mode).value,n=document.getElementById("login-password-"+e.mode).value,i=document.getElementById("login-form-error-msg-"+e.mode);if(i&&i.classList.add("is-hidden"),t&&n){t={email:t,password:n},(ajaxRequest=new XMLHttpRequest).open("POST","/login/",!0),ajaxRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var a=new URLSearchParams,s=0,r=Object.entries(t);s<r.length;s++){var c=(l=o(r[s],2))[0],l=l[1];a.append(c,l)}ajaxRequest.onreadystatechange=function(){var t;4==ajaxRequest.readyState&&((t=JSON.parse(ajaxRequest.response)).error&&i?(i.innerText=t.error,i.classList.remove("is-hidden")):t.user&&(e.handleOnSuccessLogin(t),window.callbackUrl?window.location.href=window.callbackUrl:location.reload()))},ajaxRequest.send(a.toString())}else i.innerText="Email and password are required",i.classList.remove("is-hidden")}},{key:"onClickCreateAccount",value:function(){var e=document.getElementById("register-form-error-msg-"+this.mode),t=document.getElementById("register-email-"+this.mode).value,n=document.getElementById("register-password-"+this.mode).value;e&&e.classList.add("is-hidden"),t&&n?(window.USER_TOKEN=grecaptcha.getResponse(),this.showCloseButton&&(window.USER_TOKEN=grecaptcha.getResponse(window.widgetIdPopUp)),""==window.USER_TOKEN?(e.innerText="Captcha is required",e.classList.remove("is-hidden")):this.verifyRecaptcha()):(e.innerText="Email and password are required",e.classList.remove("is-hidden"))}},{key:"verifyRecaptcha",value:function(){var e,t,n=this;window.USER_TOKEN&&""!=window.USER_TOKEN&&(e=JSON.stringify({token:"".concat(window.USER_TOKEN)}),(t=new XMLHttpRequest).withCredentials=!0,t.open("POST","/verify_google_recaptcha/"),t.setRequestHeader("Content-Type","application/json"),t.addEventListener("readystatechange",(function(){var e;4===this.readyState&&(e=JSON.parse(this.responseText),console.log(e),e.success?n.onClickRegister():((e=document.getElementById("register-form-error-msg-"+n.mode))&&(e.innerText="An error occurs! Try again later",e.classList.remove("is-hidden")),n.resetGoogleRecaptchaWidget()))})),t.send(e))}},{key:"onClickRegister",value:function(){var e,t=this,n=document.getElementById("register-email-"+t.mode).value,o=document.getElementById("register-password-"+t.mode).value;n&&o&&(e="/register/","newsletter"==t.triggeredFrom&&(e="/newsletter-register/"),(ajaxRequest=new XMLHttpRequest).open("POST",e,!0),ajaxRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),(e=new URLSearchParams).append("email",n),e.append("password",o),ajaxRequest.onreadystatechange=function(){var e,n;4==ajaxRequest.readyState&&(e=JSON.parse(ajaxRequest.response),t.resetGoogleRecaptchaWidget(),e.error?(n=document.getElementById("register-form-error-msg-"+t.mode))&&(n.textContent=e.error,n.classList.remove("is-hidden")):t.handleOnSuccessRegister(e))},ajaxRequest.send(e.toString()))}},{key:"handleOnSuccessLogin",value:function(e){this.sendGaEvent(this.gaEventCategory,"login",window.location.pathname)}},{key:"handleOnSuccessRegister",value:function(e){this.sendGaEvent(this.gaEventCategory,"registration",window.location.pathname),"newsletter"==this.triggeredFrom?window.showNewsletterPreferencesPopup(null,!0,this.mode):window.showNewsletterPreferencesPopup(null,null,this.mode)}},{key:"injectLoginForm",value:function(){var e,t=this,n=document.getElementById(this.idParent);document.getElementById("valnet-login-container-"+this.mode)||(e=(e=(e=(e=(e=(e=(e=(e=(e=window.valnetLoginContent.trim("&quot;")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&quot;/g,'"')).replace(/&#39;/g,"'")).replace(/&amp;/g,"&")).replace(/(^"|"$)/g,"")).replaceAll(/id="([^"]*)/g,(function(e,n){return e+"-"+t.mode}))).replaceAll(/class="w-login([^"]*)/g,(function(e,n){return e+"-"+t.className})),n?n.insertAdjacentHTML("afterbegin",e):document.body.insertAdjacentHTML("beforeend",e),this.injectGoogleLoginScript(),this.injectGoogleRecaptchaScript(),this.addEventListeners(),this.addCloseButton(),this.setUpAmazonLogin(),this.setUpOpenPassLogin(),"openPass"==this.defaultActiveTab()&&document.getElementById("goback-button-continue-"+this.mode).classList.remove("is-hidden"),this.setContainerActiveTab(this.defaultActiveTab(),!0))}},{key:"showLoginForm",value:function(){var e;this.injectLoginForm(),window.OPENPASS_IS_ENABLED?window.hideDisclaimers():window.showDisclaimers(),"popup"==this.mode&&(e=this,setTimeout((function(){document.addEventListener("click",(function(t){e.addClosePopupOnDocumentClick.call(e,t)}),!0)}),500)),"newsletter"==this.triggeredFrom&&this.setContainerActiveTab("register",!1),this.saveInSession("loginFormEventCategoryOpening",this.gaEventCategory),document.getElementById("valnet-login-container-"+this.mode).classList.add("is-visible")}},{key:"setContainerActiveTab",value:function(e){var t,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];e&&0<(t=document.querySelectorAll(["#intro-container-"+this.mode,"#openPass-container-"+this.mode,"#login-container-"+this.mode,"#continue-container-"+this.mode,"#register-container-"+this.mode,"#other-options-container-"+this.mode])).length&&(t.forEach((function(t){t.id.includes(e)?t.classList.remove("is-hidden"):t.classList.add("is-hidden")})),this.updateEmailFields(e),this.resetErrorMessages(),"openPass"!=e&&"continue"!=e||document.getElementById("intro-container-"+this.mode).classList.remove("is-hidden"),n&&document.getElementById("other-options-container-"+this.mode).classList.remove("is-hidden"),"continue"==e&&window.showDisclaimers(),"openPass"==e)&&window.hideDisclaimers()}},{key:"updateEmailFields",value:function(e){var t,n=this;e&&0<(t=document.querySelectorAll('[id*="-email-'+this.mode+'"]')).length&&t.forEach((function(t){t.id.includes(e)?t.value=n.email:t.value=""}))}},{key:"resetErrorMessages",value:function(){var e=document.querySelectorAll('[id*="-form-error-msg-'+this.mode+'"]');0<e.length&&e.forEach((function(e){e.classList.add("is-hidden")}))}},{key:"addEventListeners",value:function(){var e;(e=((e=((e=((e=((e=((e=((e=document.getElementById("continue-button-"+this.mode))&&e.addEventListener("click",this.onClickContinue.bind(this)),document.getElementById("login-button-"+this.mode)))&&e.addEventListener("click",this.onClickLogin.bind(this)),document.getElementById("register-button-"+this.mode)))&&e.addEventListener("click",this.onClickCreateAccount.bind(this)),document.getElementById("signin-with-email-button-"+this.mode)))&&e.addEventListener("click",this.setContainerActiveTab.bind(this,"continue",!1)),document.getElementById("goback-button-login-"+this.mode)))&&e.addEventListener("click",this.setContainerActiveTab.bind(this,"continue",!1)),document.getElementById("goback-button-register-"+this.mode)))&&e.addEventListener("click",this.setContainerActiveTab.bind(this,"continue",!1)),document.getElementById("goback-button-continue-"+this.mode)))&&e.addEventListener("click",this.setContainerActiveTab.bind(this,"openPass",!0))}},{key:"addCloseButton",value:function(){var e,t;this.showCloseButton&&(e=this,t=document.getElementById("closeLoginPopupButton-"+e.mode))&&(t.classList.remove("is-hidden"),t.addEventListener("click",(function(t){if(t.preventDefault(),document.getElementById("valnet-login-container-"+e.mode).classList.remove("is-visible"),e.setContainerActiveTab(e.defaultActiveTab(),!0),"undefined"!=typeof grecaptcha&&grecaptcha.reset(),e.onClosePopupCallback)try{e.onClosePopupCallback()}catch(t){console.error(t)}})))}},{key:"addClosePopupOnDocumentClick",value:function(e){var t=document.getElementById("valnet-login-container-"+this.mode),n=document.getElementById("login-form-"+this.mode);if(!n.contains(e.target)&&e.target!==n&&t.classList.contains("is-visible")&&(t.classList.remove("is-visible"),this.setContainerActiveTab(this.defaultActiveTab(),!0),"undefined"!=typeof grecaptcha&&grecaptcha.reset(),t.contains(e.target))&&this.onClosePopupCallback)try{this.onClosePopupCallback()}catch(e){console.error(e)}}},{key:"sendGaEvent",value:function(e,t,n){e&&t&&n&&(ga("send","event",{eventCategory:e,eventAction:t,eventLabel:n}),gtag("event",e,{event_action:t,event_label:n}))}},{key:"resetStickyAdsOnDrawerVisible",value:function(){document.querySelectorAll(".ad-zone-floating").forEach((function(e){return e.remove()})),document.querySelectorAll(".adhesion_wrapper").forEach((function(e){return e.remove()}));var e=document.querySelector(".w-adsninja-video-player.featured-video.js-sticky-featured-video");e&&e.classList.remove("js-sticky-featured-video")}},{key:"injectGoogleRecaptchaScript",value:function(){var e,t=this;window.googleRecaptchaScriptInjected?t.loadGoogleRecaptcha():((e=document.createElement("script")).type="text/javascript",e.async=!0,e.mode="google-recaptcha",e.src="https://www.google.com/recaptcha/api.js?render=explicit&hl=en",document.head.appendChild(e),e.onload=function(){window.googleRecaptchaScriptInjected=!0,t.loadGoogleRecaptcha()})}},{key:"injectGoogleLoginScript",value:function(){var e;window.googleLoginScriptInjected?(window.initGoogleLogin(),document.querySelectorAll(".custom-button--item.affiliate.google").forEach((function(e){e.style.visibility="visible"}))):((e=document.createElement("script")).src="https://accounts.google.com/gsi/client",document.body.append(e),e.onload=function(){window.initGoogleLogin(),document.querySelectorAll(".custom-button--item.affiliate.google").forEach((function(e){e.style.visibility="visible"}))})}},{key:"loadGoogleRecaptcha",value:function(){var e=this,t=document.getElementById("site-captcha-"+this.mode);!window.widgetIdPopUp&&t&&grecaptcha.ready((function(){window.widgetIdPopUp=grecaptcha.render(t,{sitekey:window.recaptchaSiteKey,callback:e.onSubmitGetGoogleCaptchaToken})}))}},{key:"onSubmitGetGoogleCaptchaToken",value:function(e){e&&""!==e&&(window.USER_TOKEN=e)}},{key:"resetGoogleRecaptchaWidget",value:function(){"undefined"!=typeof grecaptcha&&(grecaptcha.reset(),"popup"===this.mode&&grecaptcha.reset(window.widgetIdPopUp),window.USER_TOKEN="")}},{key:"saveInSession",value:function(e,t){e&&t&&sessionStorage.setItem(e,t)}},{key:"getFromSession",value:function(e){if(e)return sessionStorage.getItem(e)}},{key:"setUpAmazonLogin",value:function(){!window.amazonClientId||window.amazonLoginScriptInjected||this.injectAmazonLogin()}},{key:"injectAmazonLogin",value:function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.id="amazon-login-sdk",e.src="https://assets.loginwithamazon.com/sdk/na/login1.js",document.getElementById("amazon-root").appendChild(e),e.onload=function(){window.amazonLoginScriptInjected=!0}}},{key:"setUpOpenPassLogin",value:function(){var e,t;window.openPassClientId&&(e=this,window.openPassScriptInjected?e.injectOpenPassFrame():((t=document.createElement("script")).type="text/javascript",t.async=!0,t.mode="openpass-login-sdk",t.src="https://cdn.myopenpass.com/openpass-js-sdk/v4/openpass-js-sdk.min.js",document.head.appendChild(t),t.onload=function(){window.openPassScriptInjected=!0,window.openPassClient=new openpass.OpenPassClient({clientId:window.openPassClientId}),e.injectOpenPassFrame()}))}},{key:"injectOpenPassFrame",value:function(){var e=this,t="#000000",n=!1,o=(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(n=!0,t="#ffffff"),document.getElementById("openPass-sign-in-"+this.mode));o&&0==o.children.length&&(o={parentContainerElementId:"openPass-sign-in-"+this.mode,authenticationMode:"popup",hideSignInFormApplicationLogo:!0,hideSignInFormHeaderText:!0,signinButtonTextOption:"continue",signinButtonBackgroundColorHex:t,darkModeEnabled:n,signinButtonBorderRadiusInPixels:4,popupSuccessCallback:function(t){e.handleOpenPassLoginResponse(t.idToken.email)},popupFailedCallback:function(e){window.location="/login"}},window.openPassClient.renderInlineSignInForm(o))}},{key:"handleOpenPassLoginResponse",value:function(e){var t;e&&(thisObj=this,(t=new XMLHttpRequest).open("POST","/openpass-login/",!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.onreadystatechange=function(){var e;4==t.readyState&&200==t.status&&(e=JSON.parse(t.response)).success&&(thisObj.sendGaEvent(thisObj.getFromSession("loginFormEventCategoryOpening"),e.isUserExists?"login":"registration",window.location.pathname),e.isUserExists?"/page/newsletter/"==location.pathname?window.location.href="/profile/":location.reload():window.showNewsletterPreferencesPopup(null,null,thisObj.mode))},t.send("email="+encodeURIComponent(e)))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.hideDisclaimers=function(){var e=document.querySelectorAll('[data-disclaimer-location="main"]');0!==e.length&&e.forEach((function(e){return e.style.display="none"}))},window.showDisclaimers=function(){var e=document.querySelectorAll('[data-disclaimer-location="main"]');0!==e.length&&e.forEach((function(e){return e.style.display="block"}))},window.ValnetLogin=s}});