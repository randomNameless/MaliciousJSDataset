!function(e){var t={};function n(r){var o;return(t[r]||(o=t[r]={i:r,l:!1,exports:{}},e[r].call(o.exports,o,o.exports,n),o.l=!0,o)).exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/build/",n(n.s=16)}({16:function(e,t,n){e.exports=n("VEWH")},VEWH:function(e,t){function n(e,t){var n,o,l,i,a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return o=!(n=!0),{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){o=!0,l=e},f:function(){try{n||null==a.return||a.return()}finally{if(o)throw l}}};if(Array.isArray(e)||(a=function(e,t){var n;if(e)return"string"==typeof e?r(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}(e))||t&&e&&"number"==typeof e.length)return a&&(e=a),i=0,{s:t=function(){},n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.injectNewsletterPreferencesPopup=function(e){var t=document.getElementById("newsletter-preferences-container"),n=document.getElementById("article-limit-drawer");window.newsletterPreferencesPopupInjected||t||(t=(t=(t=(t=(t=(t=(t=window.newsletterPreferencesPopupContent.trim("&quot;")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&quot;/g,'"')).replace(/&#39;/g,"'")).replace(/&amp;/g,"&")).replace(/(^"|"$)/g,""),n&&"banner"==e?(t=t.replaceAll("w-login-popup"," w-login-banner"),(e=document.createElement("div")).innerHTML=t,e=e.children[0],n.replaceWith(e)):document.body.insertAdjacentHTML("beforeend",t),window.newsletterPreferencesPopupInjected=!0)},window.showNewsletterPreferencesPopup=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,o=(r=(e&&e.preventDefault(),window.injectNewsletterPreferencesPopup(r),document.getElementById("newsletter-preferences-container")),document.getElementById("newsletterPreferencesPopup")),l=document.getElementById("newsletter-preferences-section");r.classList.add("is-visible"),l&&(l.style.display=t?"none":"block"),o.onsubmit=function(e){e.preventDefault();e=new FormData(e.target);var t,r=new URLSearchParams,o=n(e.entries());try{for(o.s();!(t=o.n()).done;){var l=t.value;r.append(l[0],l[1])}}catch(e){o.e(e)}finally{o.f()}var i=new XMLHttpRequest;(e=(i.open("POST","/popup-newsletter-preferences/",!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),document.getElementById("newsletter-preferences-error-msg")))&&e.classList.add("is-hidden"),i.onreadystatechange=function(){var e,t;4==i.readyState&&((e=JSON.parse(i.response)).success&&(window.callbackUrl?window.location.href=window.callbackUrl:(history.pushState({},"",window.location.pathname+window.location.search),location.reload())),e.error)&&(t=document.getElementById("newsletter-preferences-error-msg"))&&(t.innerHTML=e.error,t.classList.remove("is-hidden"))},i.send(r.toString())}}}});