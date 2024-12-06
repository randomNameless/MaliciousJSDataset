window.phoenix&&(window.phoenix.buildInfo||(window.phoenix.buildInfo=[]),-1===window.phoenix.buildInfo.findIndex((e=>"Phoenix-experience"===e.MFE))&&window.phoenix.buildInfo.push({MFE:"Phoenix-experience",VERSION:"release-phoenix-experience-1.1.31950.1533663653-b0500d57-1-gaed31c649",LASTCOMMITDATETIME:"2024-11-12T12:22:49-08:00"}))
/*!
 * 
 *         ============= BUILD INFO =============
 *         MFE: Phoenix-experience
 *         chunkName: clientlib-utils/index
 *         VERSION: release-phoenix-experience-1.1.31950.1533663653-b0500d57-1-gaed31c649
 *         BRANCH: release/fix-experience-11-14
 *         COMMITHASH: aed31c649a822b702d08aa45c5a1a9716d07cdc1
 *         LASTCOMMITDATETIME: 2024-11-12T12:22:49-08:00
 *         ============= If you're reading this, why not come work with us? https://www.t-mobile.com/careers =============
 */,function(){"use strict";const e={appName:"phoenix-experience",className:"getErrorMessage"};const t={AMEX:"amex",DATA_ATTRIBUTE_CC_TYPE:"data-cc-type",BLOCKS_CVV_AMEX:[4],BLOCKS_CVV_DEFAULT:[3],EXPECTED_LENGTH_CVV_AMEX:4,EXPECTED_LENGTH_CVV_DEFAULT:3,EXPECTED_LENGTH_CC_AMEX:15,EXPECTED_LENGTH_CC_DEFAULT:16},r={appName:"phoenix-experience",className:"FormValidation"},i=()=>({numericOnly:!0,blocks:t.BLOCKS_CVV_AMEX,onValueChanged:function(){const e=this.element?.getAttribute("data-xpr-field-iodine");if(e)try{const r=JSON.parse(e)?.find((e=>e.includes("tmoCreditCardCvv")))?.split(":")[1],i=document.querySelector(`input[name="${r}"]`),a=i?.getAttribute(t.DATA_ATTRIBUTE_CC_TYPE),n=a===t.AMEX;this.properties.blocks=n?t.BLOCKS_CVV_AMEX:t.BLOCKS_CVV_DEFAULT}catch(e){window.phoenix.log.error("Missing Credit Card input: Credit Card input with cc data type is required for this to work",r)}}});function a(e){if(null==e||""===e)return!1;const t=e.replace(/ /g,"");if(t.startsWith("*"))return!0;let r=t.split("").map(Number);const i=r.pop();r=r.reverse().map(((e,t)=>(t%2==0&&(e*=2)>9&&(e-=9),e)));return 9*r.reduce(((e,t)=>e+t),0)%10===i}function n(e){return e===t.AMEX}function o(e,r){return(r?t.EXPECTED_LENGTH_CC_AMEX:t.EXPECTED_LENGTH_CC_DEFAULT)===e.length}function s(e){const r=e.value.replace(/ /g,""),i=n(e.getAttribute(t.DATA_ATTRIBUTE_CC_TYPE)),s=o(r,i),d=!!s&&a(r);return{isValidLength:s,cardNumberNoSpaces:r,isAmexCardType:i,validLuhnCheck:d,isValid:s&&d}}const d=e=>({creditCard:!0,onValueChanged:function(r){const i=r?.target?.rawValue,a=e[r.target.name],o=a.node.closest("[data-xpr-form-input]"),d=o?.querySelector("[data-cleave-type-aria]"),l=this.properties.creditCardType,u=this?.properties?.maxLength;o?.setAttribute(t.DATA_ATTRIBUTE_CC_TYPE,l),a.node.setAttribute(t.DATA_ATTRIBUTE_CC_TYPE,l),"unknown"==l?d?.removeAttribute("aria-label"):d?.setAttribute("aria-label",l),(e=>{if(null===e.getAttribute("data-cc-mask")){let t;e.setAttribute("data-cc-mask","true"),e.addEventListener("blur",(()=>{const{cardNumberNoSpaces:r,isAmexCardType:i,isValid:a}=s(e);a&&(t=e.value,e.value=function(e,t){const r=e.replace(/ /g,"").slice(-4);return t?`**** ****** *${r}`:`**** **** **** ${r}`}(r,i))})),e.addEventListener("focusin",(()=>{const{isValid:r}=s(e);r&&(e.value=t)}))}})(a.node),window.phoenix.bus.publish("CLEAVE","CREDIT_CARD",{payload:{cardType:l,value:i,isAmex:n(l),cardMaxLength:u}})}}),l=e=>({numericOnly:!0,blocks:[0,3,3,4],delimiters:["(",") ","-"],onValueChanged:function(t){const r=t?.target?.rawValue;e[t.target.name].cleave.rawValue=r;const i=e[t.target.name].node;14===i?.value?.length?(this.properties.blocks=[0,3,3,4],this.properties.delimiters=["(",") ","-"]):i.value=i.value.replace(/\D/g,"")}}),u=e=>{e?.value?.length&&(e.value="$"+e.value)},c=e=>({numeral:!0,numeralPositiveOnly:!0,onValueChanged:t=>{const r=e[t.target.name];var i;r.cleave.rawValue=t.target.rawValue,i=r.node,i?.getAttribute("data-xpr-price-mask")||(i?.setAttribute("data-xpr-price-mask","true"),i?.addEventListener("input",u.bind(null,i)),u(i))}}),p=e=>({blocks:[11],onValueChanged:function(t){const r=t?.target?.rawValue;e[t.target.name].cleave.rawValue=r}});function m(e){return e&&e.length>=7&&e.length<=17}const h=e=>({numericOnly:!0,blocks:[17],onValueChanged:function(t){const r=t?.target?.rawValue;(e=>{if(null===e.getAttribute("data-account-mask")){let t;e.setAttribute("data-account-mask","true"),e.addEventListener("focusout",(()=>{m(e.value)&&(t=e.value,e.value=function(e){return e.value?.slice(-4).padStart(e.value.length,"*")}(e))})),e.addEventListener("focusin",(()=>{m(e.value)&&(e.value=t)}))}})(e[t.target.name].node),window.phoenix.bus.publish("CLEAVE","ACCOUNT_NUMBER",{payload:{value:r}})}});function b(e,t){t.forEach((t=>{const r=t.hasAttribute("data-xpr-field-cleave"),a=t.getAttribute("data-xpr-field-cleave"),n=(e=>({date:{date:!0,delimiter:"/",datePattern:["m","d","Y"]},numeral:{numeral:!0,delimiter:"",numeralDecimalScale:0},phone:{numericOnly:!0,blocks:[0,3,3,4],delimiters:["(",") ","-"],onValueChanged:function(t){const r=t?.target,i=r?.rawValue;e[r?.name].cleave.rawValue=i}},"tmo-phone-pin":{numericOnly:!0,blocks:[6],delimiters:[""],onValueChanged:function(t){const r=t?.target,i=r?.rawValue;e[r?.name].cleave.rawValue=i}},ssn:p(e),"cc-number":{creditCard:!0},"cc-expiration":{date:!0,datePattern:["m","y"]},"cc-cvv":{numericOnly:!0,blocks:[4]},"tmo-zip-code":{numericOnly:!0,blocks:[5]},"tmo-cc-number":d(e),"tmo-cc-cvv":i(),"tmo-phone-ban":l(e),"tmo-billing-account-number":{numericOnly:!0,blocks:[9],delimiters:[""],onValueChanged:function(t){const r=t?.target,i=r?.rawValue;e[r?.name].cleave.rawValue=i}},"tmo-account-number":h(e),"tmo-price":c(e)}))(e)[a],o=function(e){try{e=JSON.parse(e)}catch(e){return!1}return"object"==typeof e&&null!==e}(a);if(r)if(n)new window.Cleave(t,n);else{if(!o)return;new window.Cleave(t,JSON.parse(a))}}))}const g={appName:"phoenix-experience",className:"FormValidation"};class f{standalone;userAgent;safari;ios;constructor(){this.standalone=window.navigator?.standalone??!1,this.userAgent=window.navigator.userAgent.toLowerCase(),this.safari=/safari/.test(this.userAgent),this.ios=/iphone|ipod|ipad/.test(this.userAgent),this.ios?this.standalone||this.safari||this.hideElements():this.userAgent.includes("wv")&&this.hideElements()}hideElements(){document.querySelectorAll("[data-xpr-web-view-hidden]").forEach((e=>{e.hidden=!0}))}}document.addEventListener("DOMContentLoaded",(()=>new f));var A={remove:function(e){if(e){const t=e.querySelector("[data-skeleton-type]"),r="true"===e.getAttribute("data-skeleton"),i="true"===e.getAttribute("aria-busy");e?.setAttribute("data-skeleton",String(!r)),e?.setAttribute("aria-busy",String(!i)),t&&t.remove()}}};window.phoenix=window.phoenix||{},window.phoenix.experience=window.phoenix.experience||{},window.phoenix.experience.utils=window.phoenix.experience.utils||{},window.phoenix.experience.utils.registerMediaQuerySensor=function(e){let t;if(void 0!==e.min&&void 0!==e.max?t=window.matchMedia(`${e.min} and ${e.max}`):void 0!==e.min?t=window.matchMedia(`${e.min}`):void 0!==e.max&&(t=window.matchMedia(`${e.max}`)),e.action){const r=()=>t?.matches?e.action(!0):e.action(!1);r(),t?.addEventListener("change",r)}},window.phoenix.experience.utils.FormValidation=class{inputElements;inputs;isFormStarted;isFormClean;isFormValid;isFormComplete;componentIdSymbol;form;constructor(e,t){this.inputElements=e,this.inputs={},this.isFormStarted=!1,this.isFormClean=!1,this.isFormComplete=!1,this.isFormValid=!1,this.form=t,this.initValidationService()}initValidationService(){[...this.inputElements].forEach((e=>{this.inputs[e.name]={blurred:!1,disabled:!("true"!=e.getAttribute("aria-disabled")&&!e.getAttribute("disabled")),errorMessage:"",node:e,nodeContainer:e.closest("[data-xpr-form-input]"),nodeTrack:e.closest("[data-xpr-form-track]"),nodeError:e.closest("[data-xpr-form-input]")?.querySelector("[data-xpr-field-feedback-error]"),nodeErrorText:e.closest("[data-xpr-form-input]")?.querySelector("[data-xpr-field-feedback-error] span"),nodeErrorId:e.closest("[data-xpr-form-input]")?.querySelector("[data-xpr-field-feedback-error]")?.id,ariaDescribedByIds:e.closest("[data-xpr-form-input]")?.querySelector("[data-xpr-field]")?.getAttribute("data-xpr-field-aria-describedby")?.toString(),cleave:{rawValue:""},messages:{required:e.dataset?.xprFieldErrorRequired??"",requiredChoice:e.dataset?.xprFieldErrorRequired??"",minLength:e.dataset?.xprFieldErrorLengthmin??"",maxLength:e.dataset?.xprFieldErrorLengthmax??"",regexMatch:e.dataset?.xprFieldErrorRegex??""},returnRawValue:!!e.hasAttribute("data-xpr-field-rawvalue")}})),this.validate(),this.setInitialInputStates(),b(this.inputs,this.inputElements)}setInitialInputStates(){[...this.inputElements].forEach((e=>{const t=this.inputs[e.name],r=e.getAttribute("data-xpr-field-value")||"";t?.nodeTrack?.setAttribute("data-complete",e?.value?.length>=1||r.length>=1?"true":"false"),t?.nodeTrack?.setAttribute("data-disabled","true"==e?.getAttribute("aria-disabled")||e?.getAttribute("disabled")?"true":"false")}))}validate(){return this.isFormClean=!0,[...this.inputElements].forEach((t=>{const r=this.inputs[t.name],i="radio"===t.type,a=i?t:r.node;r.errorMessage=function(t,r){let i;try{i=window.Iodine.is(t.value,JSON.parse(t.getAttribute("data-xpr-field-iodine")??"{}"))}catch(i){return void window.phoenix.log.debug(`${String.fromCodePoint(128683)} form initialization error: "${t.name}" input could not be initialized. Please verify your Iodine configuration is valid.`,e)}const a=r[t.name]?.blurred,n=("string"==typeof i&&r[t.name]?.messages[i?.split(":")[0]])??"";if("checkbox"===t.type&&(t.closest('[role="group"]')||t.closest("fieldset"))&&"true"===t.getAttribute("aria-required")){const e=t.closest('[role="group"]')||t.closest("fieldset"),r=e?.querySelectorAll('input[type="checkbox"]:checked');if(r?.length)return t.required=!1,"";t.required=!0}if("radio"===t.type&&t.closest('fieldset[role="radiogroup"]')){const e=t.closest('fieldset[role="radiogroup"]'),r=e?.hasAttribute("aria-required"),i=e?.querySelectorAll('input[type="radio"]:checked');if(!r)return"";if(i?.length)return t.removeAttribute("required"),"";t.required=!0}return!0!==i&&a&&n?n:!0!==i&&a&&"string"==typeof i?window.Iodine.getErrorMessage(i):""}(t,this.inputs)??"",t.checkValidity()&&!r.errorMessage||(this.isFormClean=!1),r.nodeErrorText&&(r.nodeErrorText.textContent=r.errorMessage),r.errorMessage?(a?.setAttribute("aria-invalid","true"),r.nodeError?.removeAttribute("aria-hidden")):(a?.removeAttribute("aria-invalid"),r.nodeError?.setAttribute("aria-hidden","true")),i&&(r.errorMessage?r.nodeContainer?.setAttribute("aria-describedby",`${r.nodeErrorId}`):r.errorMessage||r.nodeContainer?.removeAttribute("aria-describedby")),i||(r.errorMessage&&r.ariaDescribedByIds?r.node?.setAttribute("aria-describedby",`${r.ariaDescribedByIds} ${r.nodeErrorId}`):!r.errorMessage&&r.ariaDescribedByIds?r.node?.setAttribute("aria-describedby",`${r.ariaDescribedByIds}`):r.errorMessage&&!r.ariaDescribedByIds?r.node?.setAttribute("aria-describedby",`${r.nodeErrorId}`):r.errorMessage||r.ariaDescribedByIds||r.node?.removeAttribute("aria-describedby"))})),this.isFormClean}getFormData(){if(this.form)return function(e,t){const r=new FormData(e),i={};return r.forEach(((e,r)=>{Reflect.has(i,r)?(Array.isArray(i[r])||(i[r]=[i[r]]),i[r].push(e)):""!==t[r]?.cleave?.rawValue?i[r]=t[r]?.cleave?.rawValue:i[r]=e})),i}(this.form,this.inputs);window.phoenix.log.error("Missing Argument: Service must be passed a form to use getFormData()",g)}registerForm(e){this.componentIdSymbol=e,window.phoenix.bus.publish("FORM","REGISTER",{id:this.componentIdSymbol})}unregisterForm(){window.phoenix.bus.publish("FORM","UNREGISTER",{id:this.componentIdSymbol})}handleFormChange(e,t){const r=t??!1,i=e.target,a=this.inputs[i?.name];if(this.analyticsFormStart(),a?.nodeTrack?.setAttribute("data-complete",i?.value?.length>=1?"true":"false"),(r||"focusout"===e.type)&&((i?.value?.length>1||"focusout"===e.type)&&(a.blurred=!0),this.isFormValid=this.validate(),this.isFormValid&&!this.isFormComplete)){if(this.form){const e=this.form.cloneNode(!0);e.querySelector('input[type="checkbox"]')?.remove(),this.form.hasAttribute("data-xpr-lead-gen")||this.form.hasAttribute("data-analytics-form-defer")||window.phoenix.bus.publish("FORM","COMPLETE",{payload:{form:{$el:e}}})}this.isFormComplete=!0}}publishFormValidity(e){const t=this.isFormValid?"VALID":"INVALID";window.phoenix.bus.publish("FORM",t,{payload:e,id:this.componentIdSymbol})}resetFormValidation(){this.isFormStarted=!1,this.isFormClean=!1,this.isFormComplete=!1,this.isFormValid=!1,[...this.inputElements].forEach((e=>{const t=this.inputs[e.name];t.blurred=!1,t.errorMessage="",t.cleave.rawValue="",t.nodeError?.setAttribute("aria-hidden","true"),t.node?.removeAttribute("aria-invalid"),t.nodeTrack?.setAttribute("data-complete","false")}))}analyticsFormStart(){!this.isFormStarted&&this.form&&this.form?.hasAttribute("data-analytics-enable-tracking")&&(window.phoenix.bus.publish("FORM","START",{payload:{form:{$el:this.form}}}),this.isFormStarted=!0)}},window.phoenix.experience.utils.scrollToTarget=function(e){e.offset=e.offset||0;const t=parseInt(document.documentElement.style.getPropertyValue("--js--header-height-overall")||"0px"),r=function(e){const t=e?.getBoundingClientRect(),r=document.body,i=document.documentElement,a=window.pageYOffset||i.scrollTop||r.scrollTop,n=i.clientTop||r.clientTop||0,o=t?.top+a-n;return Math.round(o)}(e.scrollToElement)-t-e.offset;window.scrollTo({top:r,behavior:"smooth"})},window.phoenix.experience.utils.FormAutofill=class{constructor(){this.init()}init(){document.addEventListener("animationstart",this.onAnimationStart.bind(this),!0),document.addEventListener("input",this.onInput.bind(this),!0)}onAnimationStart(e){""===e.target?.value?this.cancelAutocomplete(e.target):"onautofillstart"===e.animationName&&this.autocomplete(e.target)}onInput(e){""===e.target?.value?this.cancelAutocomplete(e.target):"insertReplacementText"!==e.inputType&&"data"in e||this.autocomplete(e.target)}autocomplete(e){e.hasAttribute("autocompleted")||e.setAttribute("autocompleted",""),window.phoenix.bus?.publish("FORM_AUTOFILL","COMPLETE",{type:"autofill",target:e})}cancelAutocomplete(e){e&&e.hasAttribute("autocompleted")&&e.removeAttribute("autocompleted")}},window.phoenix.experience.utils.idFromString=function(e){return e.match(/[0-9]+[^0-9]+/g)?e:(e===e.toUpperCase()&&(e=e.toLowerCase().replace(/[^a-z0-9]+(.)/g,((e,t)=>t.toUpperCase()))),e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]\+/g)?.map((e=>e.toLowerCase()))?.join("-")||"")},window.phoenix.experience.utils.skeleton=A}();