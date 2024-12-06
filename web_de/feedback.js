import{a as C}from"../../chunk-SFD2YNKB.js";import{b as y,c as b,d as O,e as U,f as N}from"../../chunk-3EUMSZQR.js";import{a as S,b as v,c as k}from"../../chunk-6CNPBMSA.js";import{a as A,b as E,c as L}from"../../chunk-DHKC46AY.js";import{a as j,d as h,e as I,i as T}from"../../chunk-IZOY2GXC.js";import{a as w}from"../../chunk-AEEBJP5X.js";import"../../chunk-2QPOFOOR.js";import{b as x}from"../../chunk-2DNXUWM5.js";import{b as g}from"../../chunk-EDKSZH7L.js";var $=(n,p,r)=>{let t=new Map;for(let e=p;e<=r;e++)t.set(n[e],e);return t},Q=E(class extends L{constructor(n){if(super(n),n.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,p,r){let t;r===void 0?r=p:p!==void 0&&(t=p);let e=[],a=[],l=0;for(let u of n)e[l]=t?t(u,l):l,a[l]=r(u,l),l++;return{values:a,keys:e}}render(n,p,r){return this.dt(n,p,r).values}update(n,[p,r,t]){let e=U(n),{values:a,keys:l}=this.dt(p,r,t);if(!Array.isArray(e))return this.ut=l,a;let u=this.ut??=[],m=[],M,D,i=0,s=e.length-1,o=0,d=a.length-1;for(;i<=s&&o<=d;)if(e[i]===null)i++;else if(e[s]===null)s--;else if(u[i]===l[o])m[o]=b(e[i],a[o]),i++,o++;else if(u[s]===l[d])m[d]=b(e[s],a[d]),s--,d--;else if(u[i]===l[d])m[d]=b(e[i],a[d]),y(n,m[d+1],e[i]),i++,d--;else if(u[s]===l[o])m[o]=b(e[s],a[o]),y(n,e[i],e[s]),s--,o++;else if(M===void 0&&(M=$(l,o,d),D=$(u,i,s)),M.has(u[i]))if(M.has(u[s])){let f=D.get(l[o]),_=f!==void 0?e[f]:null;if(_===null){let z=y(n,e[i]);b(z,a[o]),m[o]=z}else m[o]=b(_,a[o]),y(n,e[i],_),e[f]=null;o++}else N(e[s]),s--;else N(e[i]),i++;for(;o<=d;){let f=y(n,m[d+1]);b(f,a[o]),m[o++]=f}for(;i<=s;){let f=e[i++];f!==null&&N(f)}return this.ut=l,O(n,m),I}});var H=j`
  :host {
    --border-radius: 4px;
    display: block;
    padding-bottom: 25px;
  }

  ::selection {
    background: var(--brand);
    color: var(--brand-text);
  }

  a {
    color: var(--system-hyperlink);
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-style: normal;
    -webkit-text-size-adjust: none;
  }

  .dialog__success {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dialog__success .logo {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin-top: 50px;
    background: #cfeac0;
  }

  .dialog__success .logo:before {
    content: "";
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 10px);
    width: 17px;
    height: 32px;
    border-right: 6px solid var(--notification-success);
    border-bottom: 6px solid var(--notification-success);
    transform: rotate(40deg);
  }

  .dialog__success .heading {
    font-family:  var(--font-family-sans-serif);;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 0;
  }

  .dialog__success .sub-heading {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
    text-align: center;
    margin-top: 10px;
    max-width: 560px;
  }

  .dialog__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0 5px;
    gap: 10px;
    margin-bottom: 20px;
  }

  .btn-group input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  .btn-group input[type="radio"]:checked + .btn {
    color: var(--white);
    background: var(--button-secondary-default-background);
  }

  .btn-group + .dialog__error {
    display: none;
    margin-bottom: 20px;
  }

  .btn-group.error {
    margin-bottom: 0;
  }

  .btn-group.error + .dialog__error {
    display: block;
  }

  // Dialog
  .dialog__wrapper {
    position: relative;
    width: 900px;
    padding: 10px;
    border: 1px solid var(--separator-default);
  }

  .dialog__title {
    /* Headline/Headline L */
    font-family: var(--font-family-sans-serif);
    border-bottom: 1px solid var(--separator-default);
    color: var(--text-highVisibility);
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    padding-bottom: 10px;
    margin: 0 0 20px;
  }



  .dialog__description {
    font-family: var(--font-family-sans-serif);
    color: var(--text-lowVisibility);
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
  }

  .dialog__error {
    color: var(--notification-error);
    font-size: 14px;
    line-height: 20px;
  }


  .btn {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 19px;
    border: 1px solid;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px 16px;
    cursor: pointer;
  }

  .secondary {
    color: var(--button-secondary-default-background);
    border-color: var(--button-secondary-default-background);
  }

  .btn.secondary:hover,
  .btn.secondary:focus {
    background: var(--button-secondary-hover-background);
    color: var(--button-secondary-hover-label);
  }

  .primary {
    color: var(--button-primary-default-label);
    background: var(--button-primary-default-background);
    border-color: var(--button-primary-default-background);
  }

  .btn.primary:hover,
  .btn.primary:focus {
    background: var(--button-primary-hover-background);
    border-color: var(--button-primary-hover-background);
  }

  .form-group {
    display: flex;
    flex-wrap: wrap
  }

  .form-group.right {
    justify-content: flex-end;
  }
  .form-group.left {
    justify-content: flex-start;
  }

  .form-group .form-label {
    flex: 1 1 100%;
  }

  .form-group .form-control {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }

  .form-group .dialog__error {
    flex: 1 1 85%;
  }

  .form-group div.word-count {
    text-align: right;
    font-size: 14px;
    line-height: 20px;
    color: var(--text-lowVisibility);
    flex: 1 1 15%;
  }

  .form-group button {
    grid-column: 12;
  }

  .form-group .btn-group {
    flex: 1 1 100%
  }

  .form-label {
    font-family: var(--font-family-sans-serif);
    font-weight: bold;
    font-size: 14px;
    color: var(--text-highVisibility);
    line-height: 16px;
    margin-bottom: 5px;
  }

  .form-control {
    padding: 10px;
    color: var(--text-highVisibility);
    background: var(--form-default-background);
    font-family:  var(--font-family-sans-serif);
    font-size: 1.6rem;
    border: 1px solid var(--form-element-default-border);
    box-sizing: border-box;
    border-radius: 4px;
    line-height: 30px;
    width: 100%;
    margin-bottom: 5px;
  }

  .form-control:focus,
  .form-control:hover {
    border: 1px solid var(--button-secondary-default-background);
  }

  .form-control:focus-visible {
    outline: none;
  }

  .form-control.error {
    margin-bottom: 5px;
  }

  .form-control.error,
  .form-control.error:focus,
  .form-control.error:hover {
    border: 1px solid var(--notification-error);
  }

  input[type="checkbox"].form-control.error {
    border: 1px solid var(--notification-error);
    appearance: none;
  }

  .form-control + .dialog__error,
  .form-control ~ .dialog__error {
    display: none;
  }

  .form-control.error + .dialog__error,
  .form-control.error ~ .dialog__error {
    display: block;
    margin-bottom: 20px;
  }

  .form-group .accept {
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0;
    flex: initial;
  }

  .form-group .dialog__hint {
    flex: 1;
    justify-self: center;
  }

  .dialog__usercontent.dialog__message {
    height: 131px;
    margin-bottom: 5px;
    line-height: 20px;
  }

  .dialog__useremail {
    height: 40px;
  }

  .form-label.dialog__hint {
    margin-left: 10px;
    color: var(--text-lowVisibility);
    line-height: 20px;
    font-weight: normal !important;
  }

  .custom-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid var(--buttonTertiary-default-border);
    cursor: pointer;
  }

  .custom-checkbox:checked:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 20px;
    top: 5px;
    left: 12px;
    transform: rotate(38deg);
    border-right: 5px solid var(--button-secondary-default-background);
    border-bottom: 5px solid var(--button-secondary-default-background);
    transition: all;

    // use --button-secondary because the color mapping exists and already works
  }

  div.word-count.error {
    color: var(--notification-error);
  }

  .required {
    color: var(--text-lowVisibility); // color: #999999;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .responseError {
    padding: 32px 36.4px 32px 33px;
    display: flex;
    margin-top: 25px;
    box-sizing: border-box;
    background: var(--error-bg);
    opacity: 1;
    animation: 0.3s ease-in 0s 1 normal none running showElement;
    font-size: 1.6rem;
    line-height: 2.4rem;
    min-width: 100%;
    align-items: center;
}

.responseError .error-hint {
  margin-left: 33px;
}

@keyframes showElement {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: flex;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.icon-warning {
  width: 20px;
  height: 44px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 20px 44px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCAyMCA3OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi45MjQgNTUuMjU0OUMxMS45NjkzIDU1LjY5ODIgMTAuOTM0NiA1NS45NDMzIDkuODgyNTYgNTUuOTc1M0M4LjgzMjcgNTUuOTM5OSA3LjgwMDg3IDU1LjY5MjMgNi44NDkyNiA1NS4yNDc0QzUuODk3NjUgNTQuODAyNiA1LjA0NTk1IDU0LjE2OTcgNC4zNDU1MSA1My4zODY4QzMuNjQ1MDcgNTIuNjA0IDMuMTEwMzkgNTEuNjg3NCAyLjc3MzY4IDUwLjY5MjRDMi40MzY5NyA0OS42OTczIDIuMzA1MjEgNDguNjQ0NCAyLjM4NjM0IDQ3LjU5NzFMMCA4LjQzMDAxQzAgMy43ODcwMiA1LjIzOTU3IDAgOS44ODI1NiAwQzE0LjUyNTYgMCAyMC4xMDIzIDMuNzM1MTQgMTkuOTk4NiA4LjM3ODEzTDE3LjQwNDcgNDcuNTk3MUMxNy40ODU5IDQ4LjY0NjYgMTcuMzUzMyA0OS43MDE1IDE3LjAxNSA1MC42OTgzQzE2LjY3NjggNTEuNjk1IDE2LjEzOTggNTIuNjEyNyAxNS40MzY2IDUzLjM5NTlDMTQuNzMzNCA1NC4xNzkxIDEzLjg3ODYgNTQuODExNiAxMi45MjQgNTUuMjU0OVpNMTguMjM0OCA2OS41NDExQzE4LjIzNDggNzQuMTEwOSAxNC41MzAyIDc3LjgxNTQgOS45NjAzOCA3Ny44MTU0QzUuMzkwNTcgNzcuODE1NCAxLjY4NjAxIDc0LjExMDkgMS42ODYwMSA2OS41NDExQzEuNjg2MDEgNjQuOTcxMyA1LjM5MDU3IDYxLjI2NjcgOS45NjAzOCA2MS4yNjY3QzE0LjUzMDIgNjEuMjY2NyAxOC4yMzQ4IDY0Ljk3MTMgMTguMjM0OCA2OS41NDExWiIgZmlsbD0iI2Q0MDAwMCIvPgo8L3N2Zz4K");
}
`;var c=class extends T{constructor(){super(...arguments);this.isresponseError=!1;this.isSuccessful=!1;this.currentInputLength=0;this.placeholderText="Schreiben Sie uns.";this.headline="";this.contentId="";this.privacyUrl="";this.actionUrl="";this.informationUrl="#";this.categories=[{id:"0",category:"Lob",text:"Lassen Sie uns gerne wissen, was Ihnen an diesem Beitrag gef\xE4llt.",clickname:"feedbackmail_lob"},{id:"1",category:"Kritik",text:"Lassen Sie uns gerne wissen, was Sie an diesem Beitrag oder unserer Berichterstattung st\xF6rt.",clickname:"feedbackmail_kritik"},{id:"2",category:"Fehlerhinweis",text:"Wir sind dankbar, wenn Sie uns auf Fehler hinweisen.",clickname:"feedbackmail_fehlerhinweis"},{id:"3",category:"Meinung zum Thema",text:"Wir freuen uns, wenn Sie Ihre Meinung zum Thema des Beitrags mit uns teilen.",clickname:"feedbackmail_meinung"},{id:"4",category:"Fragen",text:"Sie haben Fragen an die Redaktion? Treten Sie mit uns in Kontakt.",clickname:"feedbackmail_fragen"}]}get componentPath(){return this.getAttribute("data-component-path")??""}inputRadioHandler(r){r.preventDefault();let t=r.target,e=this.categories.find(a=>a.id===t.id);t.parentElement?.classList.remove("error"),e&&(this.placeholderText=e.text,x.publish("feedback:form",{referrer:"&referrer=undefined",click1:"&click1=undefined",click2:"&click2=undefined",click3:"&click3=undefined",click4:"&click4=undefined",clickname:"&clickname="+e.clickname}),w.callTealiumLink({businessEventType:"userAction",componentPath:`${this.componentPath}.form-group.btn-group.category.${t.id}`,componentLabel:e.category,elementTagName:"input",eventType:"mousedown"}))}validationHandler(r){r.preventDefault();let t=r.target;t.name==="category"?t.parentElement?.classList.add("error"):t.classList.add("error")}inputHandler(r){let t=r.target;t.validity.valid&&t.classList.remove("error"),t.name==="message"&&(this.currentInputLength=t.value.length)}sendFeedbackHandler(){return{handleEvent:r=>{r.preventDefault();let t=r.target,e=new FormData(t),a={};for(let[l,u]of e.entries())a[l]=u;this.onSendFeedback(a)}}}onSendFeedback(r){this.actionUrl&&C.postJSON(this.actionUrl,r).then(()=>{console.log("Sent successfully"),x.publish("track:dialogShow",{referrer:"&referrer=undefined",click1:"&click1="+window.ui.pageinfo.coremid.toString(),click2:"&click2=feedbackmail",click3:"&click3=success",click4:"&click4=1",clickname:"&clickname=feedbackmail_success"}),w.callTealiumLink({businessEventType:"userAction",componentPath:`${this.componentPath}.form-group.btn-group.submit`,componentLabel:"Senden",elementTagName:"button",eventType:"mousedown"}),x.publish("content:successfulFeedbackDialog"),this.isSuccessful=!0,this.currentInputLength=0,this.isresponseError=!1}).catch(()=>{console.log("Server error when posting Feedback. Showing general error message."),this.isresponseError=!0})}back(){x.publish("content:closeFeedbackDialog")}moreInformation(r){let t=r.target,e=t.innerHTML??t.getAttribute("aria-label")??"";x.publish("track:dialogShow",{referrer:"&referrer=undefined",click1:"&click1="+window.ui.pageinfo.coremid.toString(),click2:"&click2=feedbackmail",click3:"&click3=success_informationen",click4:"&click4=1",clickname:"&clickname=feedbackmail_success_informationen"}),w.callTealiumLink({businessEventType:"userAction",componentPath:this.componentPath+".success_informationen",componentLabel:e,elementTagName:"a",eventType:"mousedown"})}render(){return h`
      <div class="dialog__wrapper">
        <div class="dialog__title">Kontakt in die Redaktion</div>
        ${this.isSuccessful?h`
          <div class="dialog__success">
            <div class="logo"></div>
            <h3 class="heading">Vielen Dank für Ihr Feedback!</h3>
            <p class="sub-heading">
              Anregungen und Hinweise unserer Leserinnen und Leser sind sehr
              wertvoll für uns und fließen auf vielen Wegen in unsere
              redaktionelle Arbeit ein. <br />
              <a href="${this.informationUrl}" @click=${this.moreInformation} target="_blank">Mehr Informationen</a>.
            </p>
            <button @click=${this.back} class="btn secondary">
              Zurück zum Beitrag
            </button>
          </div>`:h`
            <div class="dialog__form">
              <form @submit=${this.sendFeedbackHandler()}>
                <label class="form-label">Feedback zum Beitrag</label>
                <div class="dialog__description">${this.headline}</div>
                <div class="form-group">
                  <label class="form-label">Bitte wählen Sie die Art des Feedbacks*</label>
                  <div class="btn-group" role="group">
                    ${Q(this.categories,r=>r.id,(r,t)=>h`
                      <input
                        type="radio"
                        id="${r.id}"
                        name="category"
                        value="${r.category}"
                        tabindex="${t+1}"
                        required
                        @change=${this.inputRadioHandler}
                        @invalid=${this.validationHandler}
                      /><label class="btn secondary" for="${r.id}">${r.category}</label>
                    `)}
                  </div>
                  <div class="dialog__error">
                    Bitte wählen Sie die Art des Feedbacks aus.
                  </div>
                </div>
                <input
                  type="hidden"
                  name="contentId"
                  value="${this.contentId}"
                />
                <div class="form-group">
                  <label class="form-label" for="message">Ihr Feedback*</label>
                  <textarea
                    tabindex="6"
                    name="message"
                    placeholder="${this.placeholderText}"
                    required
                    maxlength="1000"
                    @invalid=${this.validationHandler}
                    @input=${this.inputHandler}
                    @change=${this.inputHandler}
                    class="form-control dialog__usercontent dialog__message"
                  ></textarea>
                  <div class="dialog__error">
                    Bitte geben Sie einen Text ein.
                  </div>
                  <div class="word-count ${this.currentInputLength>999?"error":null}">
                    ${this.currentInputLength}/1000
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="fromEmail">Ihre E-Mail-Adresse*</label>
                  <input
                    type="email"
                    tabindex="7"
                    name="fromEmail"
                    placeholder="E-Mail-Adresse"
                    required
                    @invalid=${this.validationHandler}
                    @input=${this.inputHandler}
                    class="form-control dialog__useremail"
                  />
                  <div class="dialog__error">
                    Bitte geben Sie eine gültige E-Mail-Adresse ein.
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="checkbox"
                    tabindex="8"
                    id="acceptGDPR"
                    name="acceptGDPR"
                    required
                    value="true"
                    @invalid=${this.validationHandler}
                    @input=${this.inputHandler}
                    class="accept form-control custom-checkbox"
                  />

                  <label for="acceptGDPR" class="form-label dialog__hint">
                    <div>
                      Ich stimme zu, dass meine E-Mail-Adresse zur Bearbeitung gespeichert wird. Um Fehlerhinweise schnellstmöglich zu bearbeiten, werden Informationen zu Browser und Betriebssystem ("User-Agent") gespeichert.
                      <br />Weitere Informationen finden Sie in unseren
                      <a href="${this.privacyUrl}" target="_blank">Datenschutzhinweisen</a>*
                    </div>
                  </label>
                  <div class="dialog__error">
                    Bitte stimmen Sie den Datenschutzhinweisen zu.
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="checkbox"
                    tabindex="9"
                    id="publishConsent"
                    name="publishConsent"
                    value="true"
                    class="accept form-control custom-checkbox"
                  />

                  <label for="publishConsent" class="form-label dialog__hint">
                    <div>
                      Ich stimme zu, dass die Redaktion mein Feedback – gegebenenfalls sinnwahrend gekürzt und bearbeitet – veröffentlichen darf. Dabei dürfen mein Vorname, mein Alter und mein Wohnort (falls von mir angegeben) genannt werden. Meine E-Mail-Adresse wird nicht veröffentlicht.
                    </div>
                  </label>
                </div>

                <div class="required">* Pflichtfelder</div>
                <div class="form-group right">
                  <button type="submit" class="btn primary" tabindex="10">
                  Senden <!-- Replace the componentLabel for tracking to same button text anytime you change button text -->
                  </button>
                </div>
                ${this.isresponseError?h`
                  <div class="responseError">
                    <span class="icon-warning"></span>
                    <div class="error-hint">
                      Leider gibt es derzeit ein technisches Problem. Bitte
                      versuchen Sie es in wenigen Minuten wieder.
                    </div>
                  </div>
                `:null}
              </form>
            </div>
        `}
      </div>
    `}};c.styles=H,g([k()],c.prototype,"isresponseError",2),g([k()],c.prototype,"isSuccessful",2),g([k()],c.prototype,"currentInputLength",2),g([k()],c.prototype,"placeholderText",2),g([v()],c.prototype,"headline",2),g([v()],c.prototype,"contentId",2),g([v()],c.prototype,"privacyUrl",2),g([v()],c.prototype,"actionUrl",2),g([v()],c.prototype,"informationUrl",2),c=g([S("ui-feedback")],c);export{c as FeedBack};
/*! Bundled license information:

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=feedback.js.map
