!function(e){var t={};function a(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(s,o,function(t){return e[t]}.bind(null,o));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";function s(e,t,a,s,o,r,n){try{var i=e[r](n),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(s,o)}function o(e){return function(){var t=this,a=arguments;return new Promise((function(o,r){var n=e.apply(t,a);function i(e){s(n,o,r,i,c,"next",e)}function c(e){s(n,o,r,i,c,"throw",e)}i(void 0)}))}}function r(e){return n.apply(this,arguments)}function n(){return(n=o((function*(e){var t=new TextEncoder("utf-8").encode(e),a=yield crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(a)).map((function(e){return("00"+e.toString(16)).slice(-2)})).join("")}))).apply(this,arguments)}function i(e,t,a,s,o,r,n){try{var i=e[r](n),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(s,o)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(s,o){var r=e.apply(t,a);function n(e){i(r,s,o,n,c,"next",e)}function c(e){i(r,s,o,n,c,"throw",e)}n(void 0)}))}}a.r(t);var u="https://udr.uol.com.br",l={},p={sync:()=>c((function*(){yield p.syncUOLID(),yield p.loadUDRData(),yield Promise.all([p.syncTailTarget(),p.sendUOLIDToTailTarget(),p.syncXandrDMP(),p.syncPiano(),p.setCustomAudiencesInWindowsDataLayer()])}))(),get:e=>c((function*(){return yield fetch(e,{credentials:"include"})}))(),hasTM(){try{return!!window.UOLPD.TagManager}catch(e){return!1}},hasCX(){try{return!!window.cX}catch(e){return!1}},syncUOLID(){var e=this;return c((function*(){var t=(yield e.getLocalData())||{};e.persist(t),e.refreshSyncData(t)}))()},refreshSyncData(e){var t=this;return c((function*(){var a=t.isFolhaEnvironment()?"?xsrc=folha":"",s=yield t.get("".concat(u+a)),o=yield s.json();Object.assign(e,o),t.persist(e)}))()},isFolhaEnvironment:()=>/folha(\.uol)?\.com\.br/.test(location.origin),getUDRData:()=>l,loadUDRData(){var e=this;return c((function*(){var t=yield e.get("".concat(u,"/?tag=base,custom-audience")),a=yield t.json();l=a}))()},refreshClusterLocalStorage(e){var t=this;return c((function*(){var{data:a}=e,s=a["clusters-conteudo"]&&a["clusters-conteudo"].cluster||"-1",o=JSON.parse(localStorage.getItem("UDR.DATA"))||{data:{}};o.data["clusters-conteudo"]?o.data["clusters-conteudo"].cluster=s:Object.assign(o.data,{"clusters-conteudo":{cluster:s}}),t.persistLocal(JSON.stringify(o))}))()},syncPiano(){var e=this;return c((function*(){if(yield new Promise(e=>setTimeout(e,3e3)),e.hasCX()){var t=e.getUDRData();e.refreshClusterLocalStorage(t);var a=e.formatPianoProfile(t);if(a.length){console.log("piano profile",a);var s="https://api.cxense.com/profile/user/external/update?callback={{callback}}&persisted="+encodeURIComponent("d221a64af0b728fa6a6c3d8a81c50c89340769c7")+"&json="+encodeURIComponent(JSON.stringify({id:t.uolid,type:"tfh",profile:a}));cX.getCookie("T_PIANO")||(cX.jsonpRequest(s,(function(e){e.hasOwnProperty("httpStatus")&&200==e.httpStatus?(console.log("piano result: "),console.log(e)):console.log("No or bad http status")})),cX.setCookie("T_PIANO","t",30/1440))}}}))()},formatPianoProfile(e){var{data:t}=e,a=(arguments.length>1&&void 0!==arguments[1]||new Date,[]),s=t["user-preferences"],o=t.corporate,r=t.inscriptions,n=t["base-assinantes-pd-host-bol-user"],i=t["clusters-conteudo"],c=t.tags,u=t["origem-sessoes"],l=t["tabela-dinamica-clusters-conteudo"];if(n&&(n.description_point_sale&&a.push({group:"tfh-assinante-ponto-venda",item:n.description_point_sale}),n.description_station&&a.push({group:"tfh-assinante-estacao",item:n.description_station}),n.description_product&&a.push({group:"tfh-assinante-produto",item:n.description_product}),n.description_base&&n.description_subscriber_type&&["ASSINANTE","ASSINANTE OUTROS PRODUTOS"].includes(n.description_subscriber_type.toUpperCase())&&("ATIVO"===n.description_base.toUpperCase()?a.push({group:"tfh-assinante-status",item:"assinante"}):"CANCELADO"===n.description_base.toUpperCase()&&a.push({group:"tfh-assinante-status",item:"ex-assinante"})),n.description_base&&a.push({group:"tfh-assinante-base",item:n.description_base}),n.description_subscriber_type&&a.push({group:"tfh-tipo-assinatura",item:n.description_subscriber_type}),n.flg_user_emad_elegivel&&a.push({group:"tfh-flg-user-emad-elegivel",item:n.flg_user_emad_elegivel}),n.description_products_portfolio&&a.push({group:"tfh-desc-products-portfolio",item:n.description_products_portfolio}),!o||n.description_products_portfolio&&n.description_products_portfolio.split("|").map(e=>e.trim().toUpperCase()).includes("CONTEÚDO")||a.push({group:"tfh-assinante-status",item:"Cadastrado"})),s){if(s.newsletter_assinaturas&&s.newsletter_assinaturas.length)for(var p of s.newsletter_assinaturas)a.push({group:"tfh-newsletter-assinaturas",item:p});if(s.preferencias&&Object.keys(s.preferencias).length&&(s.preferencias["bloco-customizado-esporte"]&&a.push({group:"tfh-preferencias-time",item:s.preferencias["bloco-customizado-esporte"]}),s.preferencias["bloco-customizado-mulher"]&&a.push({group:"tfh-preferencias-signo",item:s.preferencias["bloco-customizado-mulher"]})),s.app_navegacao&&Object.keys(s.app_navegacao).length)for(var[d,f]of Object.entries(s.app_navegacao))a.push({group:"tfh-app-navegacao",item:d});if(s.canais_whatsapp&&Object.keys(s.canais_whatsapp).length)for(var h of Object.keys(s.canais_whatsapp))a.push({group:"tfh-canais-whatsapp",item:h});if(s.webalert_origens&&Object.keys(s.webalert_origens).length)for(var[g,y]of Object.entries(s.webalert_origens))a.push({group:"tfh-webalert-origens",item:g});if(s.webalert_aceite_notificacao&&Object.keys(s.webalert_aceite_notificacao).length)for(var[v,m]of Object.entries(s.webalert_aceite_notificacao))a.push({group:"tfh-webalert-aceite-notific",item:v});if(s.colunas_assinaturas_notificacao&&Object.keys(s.colunas_assinaturas_notificacao).length)for(var[_,b]of Object.entries(s.colunas_assinaturas_notificacao))a.push({group:"tfh-colunas-assinatura-notific",item:_})}if(i&&i.flg_upsell_able_heavy_user&&a.push({group:"tfh-flg-upsell-able-heavy-user",item:i.flg_upsell_able_heavy_user}),r&&r.activeProducts&&r.activeProducts.includes(32)){var D=c&&c.tags;for(var[O,w]of Object.entries({80427:"investimentos",81524:"cardapios",82073:"horoscopo"})){var L=D&&D[O];(!L||L<=5)&&a.push({group:"tfh-consumo-produto-assinatura",item:w})}}if(u&&u.origem_sessoes&&u.origem_sessoes.length)for(var S of u.origem_sessoes)a.push({group:"tfh-origem-sessoes",item:S});if(l)for(var[T,A]of Object.entries(l)){var U=T.split("_").join("-");if("string"==typeof A&&a.push({group:"tfh-".concat(U),item:A}),Array.isArray(A))for(var I of A)a.push({group:"tfh-".concat(U),item:I})}return a},persistForAdvertising(e){this.setTargeting(e),this.persistDataLayer(e)},persist(e){var t=JSON.stringify(e);this.persistForAdvertising({UOLID:e.uolid,ppid:e.ppid}),this.persistLocal(t)},setTargeting(e){var{UOLID:t}=e;try{googletag.pubads().setTargeting("UOLID",t)}catch(e){}},persistLocal(e){localStorage.setItem("UDR.DATA",e)},getLocalData:()=>c((function*(){var e=localStorage.getItem("UDR.DATA");return e?JSON.parse(e):null}))(),getDataLayer:()=>c((function*(){var e=localStorage.getItem("uolDataLayer");return e&&"null"!==e&&"undefined"!==e?JSON.parse(e):{}}))(),getWindowDataLayer:()=>(window.UOLPD=window.UOLPD||{},window.UOLPD.dataLayer=window.UOLPD.dataLayer||{},window.UOLPD.dataLayer),persistDataLayer(e){var t=this;return c((function*(){var a=t.getWindowDataLayer();Object.assign(a,e);var s=yield t.getDataLayer();Object.assign(s,e),localStorage.setItem("uolDataLayer",JSON.stringify(s))}))()},syncTailTarget(){var e=this;return c((function*(){var t=yield e.getDataLayer(),a=t&&t.TailtargetTrack;if(a){var s="";for(var o in a)s+="".concat(o,":").concat(a[o],";");var r="".concat(u,"/store?scope=").concat("tt","&data=").concat(s);(yield e.isNewSync(r,"tt"))&&((new Image).src=r,yield e.saveSyncHash(r,"tt"))}}))()},getXandrUid:()=>c((function*(){try{var e=yield fetch("https://ib.adnxs.com/getuidj",{credentials:"include"});return(yield e.json()).uid}catch(e){return console.log("Ops! ocorreu um erro ao obter o XandrUID"),"0"}}))(),syncXandrDMP(){var e=this;return c((function*(){var t=yield e.getXandrUid();"0"!=t&&/^(0x)?[0-9A-Fa-f]+$/.test(t)&&((new Image).src="".concat(u,"/store?scope=xandr&sid=").concat(t))}))()},saveSyncHash(e,t){var a=this;return c((function*(){var s=yield a.getLocalData(),{syncHashMap:o={}}=s,n=yield r(e);o[t]=n,s.syncHashMap=o,a.persistLocal(JSON.stringify(s))}))()},isNewSync(e,t){var a=this;return c((function*(){var s=yield a.getLocalData(),{syncHashMap:o={}}=s,n=yield r(e);return o[t]!=n}))()},sendUOLIDToTailTarget(){var e=this;return c((function*(){var t=yield e.getLocalData(),a="https://m.t.tailtarget.com/sync/TT-10162-1/"+(yield r(t.uolid));document.createElement("img").setAttribute("src",a)}))()},syncWeather(){var e=this;return c((function*(){try{var t=yield e.getLocalData(),a=yield fetch("https://dynad-list.dynad.net/v3/weather?uolid=".concat(t.uolid)),s=yield a.json();e.persistDataLayer({weather:s.main});var o=JSON.parse(localStorage.getItem("UDR.DATA"));Object.assign(o,{weather:s.main}),e.persistLocal(JSON.stringify(o))}catch(e){console.log("Falha ao obter os dados de clima")}}))()},setCustomAudiencesInWindowsDataLayer(){var e=this;return c((function*(){var t=e.getUDRData().data;yield e.evinoLoad(t),yield e.caApostasLoad(t),yield e.caApostasV2Load(t),yield e.caTimUsuariosSeteAcessos(t),yield e.caLookAlikeV1(t),yield e.setBTAssinantes(t),yield e.setBTCheckoutIngresso(t),yield e.UolDmpCustomAudiences(t)}))()},persistInBtDatalayer(e){var t=this.getWindowDataLayer();t.bt=t.bt+","+e},persistInUoldmpca(e){this.getWindowDataLayer().uoldmp_ca=e},evinoLoad(e){var t=this;return c((function*(){try{e["teste-evino"]&&t.persistInBtDatalayer("evino_2023")}catch(e){console.log("Falha ao obter os dados de evino")}}))()},caApostasLoad(e){var t=this;return c((function*(){try{e["ca-apostas-2024"]&&t.persistInBtDatalayer("ca_apostas_2024")}catch(e){console.log("Falha ao obter os dados da custom_audience_apostas")}}))()},caApostasV2Load(e){var t=this;return c((function*(){try{e["ca-apostas-v2-2024"]&&t.persistInBtDatalayer("ca-apostas-v2-2024")}catch(e){console.log("Falha ao obter os dados da custom_audience_apostas-V2")}}))()},caTimUsuariosSeteAcessos(e){var t=this;return c((function*(){try{e["ca-tim-usuarios-sete-acessos"]&&t.persistInBtDatalayer("ca-tim-usuarios-sete-acessos")}catch(e){console.log("Falha ao obter os dados do scopo ca-tim-usuarios-sete-acessos")}}))()},caLookAlikeV1(e){var t=this;return c((function*(){try{e["ca-look-alike-v1"]&&t.persistInBtDatalayer("ca-look-alike-v1")}catch(e){console.log("Falha ao obter os dados do scopo ca-look-alike-v1")}}))()},setBTAssinantes(e){var t=this;return c((function*(){try{var a=e.inscriptions;a&&(a.activeProducts&&a.activeProducts.length>0||a.activeServices&&a.activeServices.length>0)&&t.persistInBtDatalayer("assinante")}catch(e){console.log("Falha ao obter os dados de assinatura")}}))()},UolDmpCustomAudiences(e){var t=this;return c((function*(){try{e["dmp-custom-audiences"]&&t.persistInUoldmpca(e["dmp-custom-audiences"])}catch(e){console.log("Falha ao obter os dados do scopo dmp-custom-audiences")}}))()},setBTCheckoutIngresso(e){var t=this;return c((function*(){try{if(e["checkout-ingresso-segments"]&&e["checkout-ingresso-segments"].segments){var a=e["checkout-ingresso-segments"].segments[0];t.persistInBtDatalayer("checkout_ingresso_".concat(a))}}catch(e){console.log("Falha ao obter os dados do scopo checkout-ingresso-segments")}}))()}};p.sync()}]);