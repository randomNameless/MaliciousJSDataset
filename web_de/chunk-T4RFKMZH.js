import{a as o,b as i}from"./chunk-6CNPBMSA.js";import{a as L,d as j,i as g}from"./chunk-IZOY2GXC.js";import{a as e}from"./chunk-4IBQV6BB.js";import{b as t}from"./chunk-EDKSZH7L.js";var y=L`
  :host {
    --facebook: #316FF6;
    --twitter: #000000;
    --whatsapp: #25d366;
    border-radius: 4px;
    margin-right: 0.6rem;
  }

  .wrapper {
    border-radius: 4px;
    display: inline-block;
    overflow: hidden;
    direction: ltr;
    text-indent: -999rem;
    font-size: 1.4rem;
    line-height: 4rem;
    position: relative;
    box-sizing: border-box;
    height: 3.2rem;
    width: 3.2rem;
  }

  .sb {
    border: 0;
    cursor: pointer;
    background: transparent;
    display: block;
    overflow: hidden;
    direction: ltr;
    text-indent: -999rem;
    font-size: 1.4rem;
    line-height: 4rem;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  :host:focus,
  :host:focus-within,
  .sb:focus,
  .sb:focus-within {
    outline: none;
  }

  .sb .icon-svg-facebook,
  .sb .icon-svg-twitter,
  .sb .icon-svg-mail,
  .sb .icon-svg-whatsapp,
  .sb .icon-svg-share {
    color: var(--white, #fff);
    width: 100%;
    font-size: 2rem;
    line-height: 4rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }

  .sb .icon-svg-facebook:before,
  .sb .icon-svg-twitter:before,
  .sb .icon-svg-mail:before,
  .sb .icon-svg-whatsapp:before
  .sb .icon-svg-share:before {
    position: absolute;
    top: 0;
    left: 0;
    text-indent: 0;
    width: 100%;
    text-align: center;
  }

  :host([type='mail']) {
    background-color: var(--social-background-color);
  }
  :host([type='whatsapp']) {
    background-color: var(--whatsapp);
  }
  :host([type='twitter']) {
    background-color: var(--twitter);
  }
  :host([type='facebook']) {
    background-color: var(--facebook);
  }
  :host([type='share']) {
    background-color: var(--cp-grey-light-2);
    margin-right: 0;
  }

  @media (min-width: ${768}px) {
    :host(:hover) .sb-twitter:hover {
      background-color: var(--twitter);
    }
    :host(:hover) .sb-facebook:hover {
      background-color: var(--facebook);
    }
    :host(:hover) .sb-mail:hover {
      background-color: var(--social-background-color);
    }
    :host(:hover) .sb-whatsapp:hover {
      background-color: var(--whatsapp);
    }
    :host(:hover) .sb-share:hover {
      background-color: var(--cp-grey-light-2);
    }
  }
`;var s=L`
  .icon-svg-facebook {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iRWJlbmVfMSIgZGF0YS1uYW1lPSJFYmVuZSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC4xIDE4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iTG9nbyI+CiAgICA8cGF0aCBpZD0iSW5pdGlhdG9yIiBjbGFzcz0iY2xzLTEiIGQ9Im0yLjI3LDE4bC4wMi03LjYzSDB2LTMuMzloMi4yOXYtMS40NkMyLjI5LDEuNzUsMy45OSwwLDcuNjksMGMuNywwLDEuOTEuMTQsMi40MS4yOHYzLjA3Yy0uMjYtLjAzLS43Mi0uMDQtMS4yOC0uMDQtMS44MiwwLTIuNTIuNjktMi41MiwyLjQ4djEuMmgzLjYybC0uNjIsMy4zOWgtM3Y3LjYxcy00LjA0LjAyLTQuMDQuMDJaIi8+CiAgPC9nPgo8L3N2Zz4=');
    background-repeat: no-repeat;
    background-size: auto 56%;
    background-position: 50% 50%;
  }
  .icon-svg-twitter {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iRWJlbmVfMSIgZGF0YS1uYW1lPSJFYmVuZSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxNi4yNSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTQuMjIsMGgyLjc2bC02LjA2LDYuOSw3LjA4LDkuMzZoLTUuNTVsLTQuMzUtNS42OS00Ljk4LDUuNjlILjM2bDYuNDItNy4zOEwwLDBoNS42OWwzLjkzLDUuMTlMMTQuMjIsMFptLS45NywxNC42NGgxLjUzTDQuODksMS41NmgtMS42NGwxMC4wMSwxMy4wOFoiLz4KPC9zdmc+');
    background-repeat: no-repeat;
    background-size: auto 46%;
    background-position: 50% 50%;
  }
  .icon-svg-mail {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iRWJlbmVfMSIgZGF0YS1uYW1lPSJFYmVuZSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxMy4wOSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibS4wMiwyLjAxcy0uMDIuMS0uMDIuMTV2OC40bDQuNDUtNC40N0wuMDIsMi4wMVptOC45OCw2LjAxYy4xNywwLC4zNC0uMDYuNDYtLjE3TDE3LjQzLjc0Yy0uNDEtLjQ1LTEuMDEtLjc0LTEuNjgtLjc0SDIuMjVDMS41OCwwLC45OC4yOS41Ny43NGw3Ljk3LDcuMTJjLjEyLjExLjI4LjE3LjQ2LjE3Wm0xLjIyLDEuMDdjLS42OC42Mi0xLjc5LjYyLTIuNDcsMGwtMi4yMi0yLjA0TC40NCwxMi4xOWMuNDEuNTQsMS4wNy45LDEuODEuOWgxMy41Yy43NCwwLDEuNC0uMzYsMS44MS0uOWwtNS4xMS01LjE0LTIuMjMsMi4wNVptNy43Ni03LjFsLTQuNDQsNC4wOCw0LjQ2LDQuNDhWMi4xNmMwLS4wNi0uMDEtLjExLS4wMi0uMTZaIi8+Cjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-size: auto 42%;
    background-position: 50% 50%;
  }
  .icon-svg-whatsapp {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iRWJlbmVfMSIgZGF0YS1uYW1lPSJFYmVuZSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNy45MSAxOCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTE1LjMsMi42MkMxMy42Mi45MywxMS4zOCwwLDguOTksMCw0LjA4LDAsLjA4LDQsLjA3LDguOTJjMCwxLjU3LjQxLDMuMTEsMS4xOSw0LjQ2bC0xLjI3LDQuNjIsNC43My0xLjI0YzEuMy43MSwyLjc3LDEuMDksNC4yNiwxLjA5aDBjNC45MiwwLDguOTItNCw4LjkyLTguOTIsMC0yLjM4LS45My00LjYyLTIuNjEtNi4zMWgwWm0tNi4zMSwxMy43MmgwYy0xLjMzLDAtMi42My0uMzYtMy43Ny0xLjAzbC0uMjctLjE2LTIuODEuNzQuNzUtMi43NC0uMTgtLjI4Yy0uNzQtMS4xOC0xLjEzLTIuNTQtMS4xMy0zLjk1LDAtNC4wOSwzLjMzLTcuNDEsNy40Mi03LjQxLDEuOTgsMCwzLjg0Ljc3LDUuMjQsMi4xNywxLjQsMS40LDIuMTcsMy4yNiwyLjE3LDUuMjQsMCw0LjA5LTMuMzMsNy40MS03LjQxLDcuNDFoMFptNC4wNy01LjU1Yy0uMjItLjExLTEuMzItLjY1LTEuNTItLjcyLS4yLS4wNy0uMzUtLjExLS41LjExLS4xNS4yMi0uNTguNzMtLjcxLjg3LS4xMy4xNS0uMjYuMTctLjQ4LjA2LS4yMi0uMTEtLjk0LS4zNS0xLjc5LTEuMTEtLjY2LS41OS0xLjExLTEuMzItMS4yNC0xLjU0LS4xMy0uMjItLjAxLS4zNC4xLS40NS4xLS4xLjIyLS4yNi4zMy0uMzkuMTEtLjEzLjE1LS4yMi4yMi0uMzcuMDctLjE1LjA0LS4yOC0uMDItLjM5LS4wNi0uMTEtLjUtMS4yMS0uNjktMS42NS0uMTgtLjQzLS4zNi0uMzgtLjUtLjM4LS4xMywwLS4yOCwwLS40Mywwcy0uMzkuMDYtLjU5LjI4Yy0uMi4yMi0uNzguNzYtLjc4LDEuODZzLjgsMi4xNi45MSwyLjMxYy4xMS4xNSwxLjU3LDIuNCwzLjgxLDMuMzcuNTMuMjMuOTUuMzcsMS4yNy40Ny41My4xNywxLjAyLjE1LDEuNC4wOS40My0uMDYsMS4zMi0uNTQsMS41LTEuMDYuMTktLjUyLjE5LS45Ny4xMy0xLjA2cy0uMi0uMTUtLjQzLS4yNmgwWiIvPgo8L3N2Zz4=');
    background-repeat: no-repeat;
    background-size: auto 56%;
    background-position: 50% 50%;
  }
  .icon-svg-share {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTUuNzggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEyLjg2IDE4Yy0uODEgMC0xLjUtLjI4LTIuMDctLjg1cy0uODUtMS4yNi0uODUtMi4wN2MwLS4xMyAwLS4yNC4wMy0uMzUuMDEtLjEuMDQtLjIyLjA2LS4zNWwtNS4yMS0zLjE4Yy0uMjQuMjYtLjUzLjQ1LS44Ni41N3MtLjY4LjE3LTEuMDQuMTdjLS44MSAwLTEuNS0uMjgtMi4wNy0uODVzLS44NS0xLjI2LS44NS0yLjA3LjI4LTEuNS44NS0yLjA3IDEuMjYtLjg1IDIuMDctLjg1Yy4zNiAwIC43MS4wNiAxLjAzLjE4cy42Mi4zMS44Ni41NWw1LjIxLTMuMThjLS4wMy0uMTMtLjA1LS4yNC0uMDYtLjM1LS4wMS0uMS0uMDMtLjIyLS4wMy0uMzUgMC0uODEuMjgtMS41Ljg1LTIuMDdzMS4yNy0uOSAyLjA4LS45IDEuNS4yOCAyLjA3Ljg1Ljg1IDEuMjYuODUgMi4wNy0uMjggMS41LS44NSAyLjA3LTEuMjYuODUtMi4wNy44NWMtLjM2IDAtLjcxLS4wNS0xLjA0LS4xN3MtLjYyLS4zLS44Ni0uNTVsLTUuMjEgMy4xNmMuMDMuMTMuMDUuMjQuMDYuMzUuMDEuMS4wMy4yMi4wMy4zNXMwIC4yNC0uMDMuMzVjLS4wMS4xLS4wNC4yMi0uMDYuMzVsNS4yMSAzLjE2Yy4yNC0uMjcuNTMtLjQ2Ljg2LS41Ny4zMy0uMS42OC0uMTUgMS4wNC0uMTUuODEgMCAxLjUuMjggMi4wNy44NXMuODUgMS4yNi44NSAyLjA3LS4yOCAxLjUtLjg1IDIuMDctMS4yNi44NS0yLjA3Ljg1di4wNXptMC0xMy45NmMuMzEgMCAuNTgtLjEuNzgtLjMyLjIxLS4yMS4zMi0uNDguMzItLjc4cy0uMS0uNTgtLjMyLS43OGMtLjIxLS4yMS0uNDgtLjMyLS43OC0uMzJzLS41OC4xLS43OC4zMmMtLjIxLjIxLS4zMi40OC0uMzIuNzhzLjEuNTguMzIuNzhjLjIxLjIxLjQ4LjMyLjc4LjMyem0tOS45MyA2LjA3Yy4zMSAwIC41OC0uMS43OC0uMzIuMjEtLjIxLjMyLS40OC4zMi0uNzhzLS4xLS41OC0uMzItLjc4Yy0uMjEtLjIxLS40OC0uMzItLjc4LS4zMnMtLjU4LjEtLjc4LjMyYy0uMjEuMjEtLjMyLjQ4LS4zMi43OHMuMS41OC4zMi43OGMuMjEuMjEuNDguMzIuNzguMzJ6bTkuOTQgNi4wN2MuMzEgMCAuNTgtLjEuNzgtLjMyLjIxLS4yMS4zMi0uNDguMzItLjc4cy0uMS0uNTgtLjMyLS43OGMtLjIxLS4yMS0uNDgtLjMyLS43OC0uMzJzLS41OC4xLS43OC4zMmMtLjIxLjIxLS4zMi40OC0uMzIuNzhzLjEuNTguMzIuNzhjLjIxLjIxLjQ4LjMyLjc4LjMyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-size: auto 56%;
    background-position: 50% 50%;
  }
`;var M=class extends g{constructor(){super(...arguments);this.account="";this.via="";this.titleMapper={facebook:"Auf Facebook teilen",twitter:"Auf X (ehemals Twitter) teilen",mail:"Per E-Mail versenden",whatsapp:"Auf WhatsApp teilen",share:"Teilen"}}render(){return this.type==="share"&&!e.isShareSupported()?null:j`
      <div class="wrapper">
        <button type="button" tabindex="-1" class="sb sb-${this.type}" @click=${this.clickHandler}>
          <span class="icon-svg-${this.type}" title="${this.title}"></span>
        </button>
      </div>
    `}clickHandler(){let u={type:this.type};this.type==="twitter"&&(u.account=this.account,u.via=this.via),this.dispatchEvent(new CustomEvent("customEventSocialClick",{detail:u}))}get title(){return this.titleMapper[this.type]}};M.styles=[s,y],t([i()],M.prototype,"type",2),t([i({attribute:"twitter-account"})],M.prototype,"account",2),t([i({attribute:"twitter-via"})],M.prototype,"via",2),M=t([o("ui-social-share")],M);export{M as a};
//# sourceMappingURL=chunk-T4RFKMZH.js.map
