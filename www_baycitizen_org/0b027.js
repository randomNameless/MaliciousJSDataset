!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,function(){"use strict";function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,a=t&&"classList"in document.createElement("p"),r=t&&window.devicePixelRatio>1,o={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function t(e){return n({},o,e)},l=function n(t,e){var i,a="LazyLoad::Initialized",r=new t(e);try{i=new CustomEvent(a,{detail:{instance:r}})}catch(o){(i=document.createEvent("CustomEvent")).initCustomEvent(a,!1,!1,{instance:r})}window.dispatchEvent(i)},s="srcset",u="sizes",f="poster",d="llOriginalAttrs",v="data",g="loading",b="loaded",p="applied",h="error",m="native",E="data-",I="ll-status",y=function n(t,e){return t.getAttribute(E+e)},k=function n(t,e,i){var a=E+e;if(null===i){t.removeAttribute(a);return}t.setAttribute(a,i)},A=function n(t){return y(t,I)},L=function n(t,e){return k(t,I,e)},O=function n(t){return L(t,null)},x=function n(t){return null===A(t)},C=function n(t){return A(t)===m},_=[g,b,p,h],N=function n(t,e,i,a){if(t){if(void 0!==a){t(e,i,a);return}if(void 0!==i){t(e,i);return}t(e)}},$=function n(t,e){if(a){t.classList.add(e);return}t.className+=(t.className?" ":"")+e},M=function n(t,e){if(a){t.classList.remove(e);return}t.className=t.className.replace(RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function n(t){t.llTempImage=document.createElement("IMG")},R=function n(t){delete t.llTempImage},T=function n(t){return t.llTempImage},w=function n(t,e){if(e){var i=e._observer;i&&i.unobserve(t)}},G=function n(t){t.disconnect()},D=function n(t,e,i){e.unobserve_entered&&w(t,i)},V=function n(t,e){t&&(t.loadingCount+=e)},F=function n(t){t&&(t.toLoadCount-=1)},H=function n(t,e){t&&(t.toLoadCount=e)},P=function n(t){for(var e,i=[],a=0;e=t.children[a];a+=1)"SOURCE"===e.tagName&&i.push(e);return i},j=function n(t,e){var i=t.parentNode;i&&"PICTURE"===i.tagName&&P(i).forEach(e)},B=function n(t,e){P(t).forEach(e)},J=["src"],S=["src",f],U=["src",s,u],q=[v],K=function n(t){return!!t[d]},Q=function n(t){return t[d]},W=function n(t){return delete t[d]},X=function n(t,e){if(!K(t)){var i={};e.forEach(function(n){i[n]=t.getAttribute(n)}),t[d]=i}},Y=function n(t){!K(t)&&(t[d]={backgroundImage:t.style.backgroundImage})},Z=function n(t,e,i){if(!i){t.removeAttribute(e);return}t.setAttribute(e,i)},nn=function n(t,e){if(K(t)){var i=Q(t);e.forEach(function(n){Z(t,n,i[n])})}},nt=function n(t){if(K(t)){var e=Q(t);t.style.backgroundImage=e.backgroundImage}},ne=function n(t,e,i){$(t,e.class_applied),L(t,p),i&&(e.unobserve_completed&&w(t,e),N(e.callback_applied,t,i))},ni=function n(t,e,i){$(t,e.class_loading),L(t,g),i&&(V(i,1),N(e.callback_loading,t,i))},na=function n(t,e,i){i&&t.setAttribute(e,i)},nr=function n(t,e){na(t,u,y(t,e.data_sizes)),na(t,s,y(t,e.data_srcset)),na(t,"src",y(t,e.data_src))},no=function n(t,e,i){var a=y(t,e.data_bg),o=y(t,e.data_bg_hidpi),c=r&&o?o:a;if(c){var l=y(t,"bg-var");l?t.style.setProperty(l,'url("'.concat(c,'")')):t.style.backgroundImage='url("'.concat(c,'")'),T(t).setAttribute("src",c),ni(t,e,i)}},nc=function n(t,e,i){var a=y(t,e.data_bg_multi),o=y(t,e.data_bg_multi_hidpi),c=r&&o?o:a;c&&(t.style.backgroundImage=c,ne(t,e,i))},nl=function n(t,e,i){var a=y(t,e.data_bg_set);if(a){var r=a.split("|"),o=r.map(function(n){return"image-set(".concat(n,")")});t.style.backgroundImage=o.join(),""===t.style.backgroundImage&&(o=r.map(function(n){return"-webkit-image-set(".concat(n,")")}),t.style.backgroundImage=o.join()),ne(t,e,i)}},ns={IMG:function n(t,e){j(t,function(n){X(n,U),nr(n,e)}),X(t,U),nr(t,e)},IFRAME:function n(t,e){X(t,J),na(t,"src",y(t,e.data_src))},VIDEO:function n(t,e){B(t,function(n){X(n,J),na(n,"src",y(n,e.data_src))}),X(t,S),na(t,f,y(t,e.data_poster)),na(t,"src",y(t,e.data_src)),t.load()},OBJECT:function n(t,e){X(t,q),na(t,v,y(t,e.data_src))}},nu=function n(t,e){var i=ns[t.tagName];i&&i(t,e)},nf=function n(t,e,i){var a=ns[t.tagName];a&&(a(t,e),ni(t,e,i))},nd=["IMG","IFRAME","VIDEO","OBJECT"],n8=function n(t,e){var i,a;e&&!((i=e).loadingCount>0)&&!((a=e).toLoadCount>0)&&N(t.callback_finish,e)},nv=function n(t,e,i){t.addEventListener(e,i),t.llEvLisnrs[e]=i},ng=function n(t,e,i){t.removeEventListener(e,i)},nb=function n(t){return!!t.llEvLisnrs},np=function n(t,e,i){nb(t)||(t.llEvLisnrs={});var a="VIDEO"===t.tagName?"loadeddata":"load";nv(t,a,e),nv(t,"error",i)},nh=function n(t){if(nb(t)){var e=t.llEvLisnrs;for(var i in e){var a=e[i];ng(t,i,a)}delete t.llEvLisnrs}},nm=function n(t,e,i){R(t),V(i,-1),F(i),M(t,e.class_loading),e.unobserve_completed&&w(t,i)},nE=function n(t,e,i,a){var r=C(e);nm(e,i,a),$(e,i.class_loaded),L(e,b),N(i.callback_loaded,e,a),r||n8(i,a)},nI=function n(t,e,i,a){var r=C(e);nm(e,i,a),$(e,i.class_error),L(e,h),N(i.callback_error,e,a),i.restore_on_error&&nn(e,U),r||n8(i,a)},ny=function n(t,e,i){var a=T(t)||t;if(!nb(a)){var r=function n(r){nE(r,t,e,i),nh(a)},o=function n(r){nI(r,t,e,i),nh(a)};np(a,r,o)}},nk=function n(t,e,i){z(t),ny(t,e,i),Y(t),no(t,e,i),nc(t,e,i),nl(t,e,i)},nA=function n(t,e,i){ny(t,e,i),nf(t,e,i)},nL=function n(t,e,i){var a;(a=t,nd.indexOf(a.tagName)>-1)?nA(t,e,i):nk(t,e,i)},nO=function n(t,e,i){t.setAttribute("loading","lazy"),ny(t,e,i),nu(t,e),L(t,m)},nx=function n(t){t.removeAttribute("src"),t.removeAttribute(s),t.removeAttribute(u)},nC=function n(t){j(t,function(n){nx(n)}),nx(t)},n_=function n(t){j(t,function(n){nn(n,U)}),nn(t,U)},nN={IMG:n_,IFRAME:function n(t){nn(t,J)},VIDEO:function n(t){B(t,function(n){nn(n,J)}),nn(t,S),t.load()},OBJECT:function n(t){nn(t,q)}},n$=function n(t){var e=nN[t.tagName];if(!e){nt(t);return}e(t)},nM=function n(t,e){!(x(t)||C(t))&&(M(t,e.class_entered),M(t,e.class_exited),M(t,e.class_applied),M(t,e.class_loading),M(t,e.class_loaded),M(t,e.class_error))},nz=function n(t,e){n$(t),nM(t,e),O(t),W(t)},nR=function n(t,e,i,a){var r;if(i.cancel_on_exit)A(r=t)===g&&"IMG"===t.tagName&&(nh(t),nC(t),n_(t),M(t,i.class_loading),V(a,-1),O(t),N(i.callback_cancel,t,e,a))},nT=function n(t,e,i,a){var r,o=(r=t,_.indexOf(A(r))>=0);L(t,"entered"),$(t,i.class_entered),M(t,i.class_exited),D(t,i,a),N(i.callback_enter,t,e,a),o||nL(t,i,a)},nw=function n(t,e,i,a){x(t)||($(t,i.class_exited),nR(t,e,i,a),N(i.callback_exit,t,e,a))},nG=["IMG","IFRAME","VIDEO"],nD=function n(t){return t.use_native&&"loading"in HTMLImageElement.prototype},nV=function n(t,e,i){t.forEach(function(n){-1!==nG.indexOf(n.tagName)&&nO(n,e,i)}),H(i,0)},nF=function n(t,e,i){t.forEach(function(n){var t;return(t=n).isIntersecting||t.intersectionRatio>0?nT(n.target,n,e,i):nw(n.target,n,e,i)})},nH=function n(t,e){e.forEach(function(n){t.observe(n)})},nP=function n(t,e){G(t),nH(t,e)},nj=function n(t,e){var a;!(!i||nD(t))&&(e._observer=new IntersectionObserver(function(n){nF(n,t,e)},{root:(a=t).container===document?null:a.container,rootMargin:a.thresholds||a.threshold+"px"}))},nB=function n(t){return Array.prototype.slice.call(t)},nJ=function n(t){return t.container.querySelectorAll(t.elements_selector)},nS=function n(t){var e;return A(e=t)===h},nU=function n(t,e){var i;return i=t||nJ(e),nB(i).filter(x)},n9=function n(t,e){var i;(i=nJ(t),nB(i).filter(nS)).forEach(function(n){M(n,t.class_error),O(n)}),e.update()},nq=function n(e,i){t&&(i._onlineHandler=function(){n9(e,i)},window.addEventListener("online",i._onlineHandler))},n1=function n(e){t&&window.removeEventListener("online",e._onlineHandler)},nK=function n(t,e){var i=c(t);this._settings=i,this.loadingCount=0,nj(i,this),nq(i,this),this.update(e)};return nK.prototype={update:function n(t){var a=this._settings,r=nU(t,a);if(H(this,r.length),e||!i){this.loadAll(r);return}if(nD(a)){nV(r,a,this);return}nP(this._observer,r)},destroy:function n(){this._observer&&this._observer.disconnect(),n1(this),nJ(this._settings).forEach(function(n){W(n)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function n(t){var e=this,i=this._settings;nU(t,i).forEach(function(n){w(n,e),nL(n,i,e)})},restoreAll:function n(){var t=this._settings;nJ(t).forEach(function(n){nz(n,t)})}},nK.load=function(n,t){var e=c(t);nL(n,e)},nK.resetStatus=function(n){O(n)},t&&function n(t,e){if(e){if(e.length)for(var i,a=0;i=e[a];a+=1)l(t,i);else l(t,e)}}(nK,window.lazyLoadOptions),nK});
;function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,r=t&&"classList"in document.createElement("p"),o={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,r=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var r="data-"+e;null!==n?t.setAttribute(r,n):t.removeAttribute(r)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},f=function(t,e){t&&t(e)},d=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&f(t._settings.callback_finish)},_=function(t){for(var e,n=[],r=0;e=t.children[r];r+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"src",i(t,e.data_src)),t.load()}},g=function(t,e){var n,r,o=e._settings,a=t.tagName,s=m[a];if(s)return s(t,o),d(e,1),void(e._elements=(n=e._elements,r=t,n.filter(function(t){return t!==r})));!function(t,e){var n=i(t,e.data_src),r=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),r&&(t.style.backgroundImage=r)}(t,o)},y=function(t,e){r?t.classList.add(e):t.className+=(t.className?" ":"")+e},h=function(t,e){r?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},p=function(t,e,n){t.addEventListener(e,n)},E=function(t,e,n){t.removeEventListener(e,n)},w=function(t,e,n){E(t,"load",e),E(t,"loadeddata",e),E(t,"error",n)},A=function(t,e,n){var r=n._settings,o=e?r.class_loaded:r.class_error,a=e?r.callback_loaded:r.callback_error,i=t.target;h(i,r.class_loading),y(i,o),f(a,i),d(n,-1)},I=function(t,e){var n=function n(o){A(o,!0,e),w(t,n,r)},r=function r(o){A(o,!1,e),w(t,n,r)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,r)},k=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;S(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},O=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,r=u(t);r||(r=setTimeout(function(){L(t,e),O(t)},n),l(t,r))},S=function(t,e,n){var r=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),y(t,r.class_loading)),g(t,e),function(t){s(t,"was-processed","true")}(t),f(r.callback_reveal,t),f(r.callback_set,t))},z=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;f(n.callback_enter,t),n.load_delay?x(t,e):L(t,e)}(e.target,t):function(t,e){var n=e._settings;f(n.callback_exit,t),n.load_delay&&O(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},C=["IMG","IFRAME"],N=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t){var e=t._settings;_toConsumableArray(e.container.querySelectorAll("."+e.class_error)).forEach(function(t){h(t,e.class_error),function(t){s(t,"was-processed",null)}(t)}),t.update()},R=function(e,n){var r;this._settings=function(t){return _extends({},o,t)}(e),this._loadingCount=0,z(this),this.update(n),r=this,t&&window.addEventListener("online",function(t){M(r)})};return R.prototype={update:function(t){var n,r=this,o=this._settings;(this._elements=N(t,o),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(o)&&((n=this)._elements.forEach(function(t){-1!==C.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),S(t,n))}),this._elements=N(t,o)),this._elements.forEach(function(t){r._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){S(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,r=0;n=e[r];r+=1)a(t,n);else a(t,e)}(R,window.lazyLoadOptions),R});
