import{r,h as o}from"./p-515523aa.js";import{C as a}from"./p-3d58cb36.js";import{L as e}from"./p-8a2bf84b.js";import"./p-f8f376f0.js";const d=class{constructor(o){r(this,o),this.host=new a(this),this.localizeController=new e(this.host),this.href="#adbl-main"}connectedCallback(){this.host.hostConnected()}componentWillUpdate(){this.host.hostUpdate()}componentDidUpdate(){this.host.hostUpdated()}disconnectedCallback(){this.host.hostDisconnected()}render(){return o("adbl-button",{href:this.href,variant:"prominent",size:"md"},this.localizeController.getString("skipLinkText"))}};d.style=":host{--border-width:var(--adbl-button-border-width, 2px);--border-radius:var(--adbl-button-border-radius, 9999px);--disabled-opacity:var(--adbl-disabled-opacity, 0.5);border-radius:var(--border-radius);display:inline-block;overflow:hidden}#container{position:relative;box-sizing:border-box;display:flex;width:100%;cursor:pointer;align-items:center;justify-content:center;border-width:0px}#container:disabled{pointer-events:none}#container{border-radius:var(--border-radius)}#container:disabled{opacity:var(--disabled-opacity)}#border{position:absolute;inset:0px;border-style:solid;border-color:var(--adbl-solid);border-color:transparent;border-width:var(--border-width);border-radius:var(--border-radius)}a{text-decoration-line:none}button#container:focus-visible,a#container:focus-visible{border-style:none;outline:2px solid transparent;outline-offset:2px}button#container:focus-visible #border,a#container:focus-visible #border{outline-width:3px;outline-style:solid;--dark-outline:#577cff;--outline:var(--dark) var(--dark-outline);--csstools-light-dark-toggle--0:var(--csstools-color-scheme--dark) var(--dark-outline);outline-color:var(--csstools-light-dark-toggle--0, #ffffff);z-index:100;outline-offset:-3px}@supports (color: light-dark(red, red)){button#container:focus-visible #border,a#container:focus-visible #border{outline-color:light-dark(var(--dark-outline), #ffffff)}}:host([disabled]){pointer-events:none;cursor:default}.primary{--background-default-dark:var(--adbl-accent);--background-default-light:var(--adbl-accent);--background-hover-dark:var(--adbl-accent-hover);--background-hover-light:var(--adbl-accent-hover);--background-pressed-dark:var(--adbl-accent-pressed);--background-pressed-light:var(--adbl-accent-pressed);--foreground-default-dark:var(--adbl-on-accent);--foreground-default-light:var(--adbl-on-accent)}.solid{--background-default-dark:var(--adbl-solid);--background-default-light:var(--adbl-solid);--background-hover-dark:var(--adbl-solid-hover);--background-hover-light:var(--adbl-solid-hover);--background-pressed-dark:var(--adbl-solid-pressed);--background-pressed-light:var(--adbl-solid-pressed);--foreground-default-dark:var(--adbl-primary-fill);--foreground-default-light:var(--adbl-primary-fill)}#container.outline{--background-default-dark:var(--adbl-simple);--background-default-light:var(--adbl-simple);--background-hover-dark:var(--adbl-simple-hover);--background-hover-light:var(--adbl-simple-hover);--background-pressed-dark:var(--adbl-simple-pressed);--background-pressed-light:var(--adbl-simple-pressed);--border-default-dark:var(--adbl-outline);--border-default-light:var(--adbl-outline);--border-hover-dark:var(--adbl-outline-hover);--border-hover-light:var(--adbl-outline-hover);--border-pressed-dark:var(--adbl-outline-pressed);--border-pressed-light:var(--adbl-outline-pressed);--foreground-default-dark:var(--adbl-primary-fill);--foreground-default-light:var(--adbl-primary-fill)}.outline #border{--csstools-light-dark-toggle--1:var(--csstools-color-scheme--dark) var(--border-default-light);border-color:var(--csstools-light-dark-toggle--1, var(--border-default-dark))}@supports (color: light-dark(red, red)){.outline #border{border-color:light-dark(\n    var(--border-default-light),\n    var(--border-default-dark)\n  )}}@media (hover: hover){.outline #border:hover{--csstools-light-dark-toggle--2:var(--csstools-color-scheme--dark) var(--border-hover-light);border-color:var(--csstools-light-dark-toggle--2, var(--border-hover-dark))}@supports (color: light-dark(red, red)){.outline #border:hover{border-color:light-dark(\n      var(--border-hover-light),\n      var(--border-hover-dark)\n    )}}}.outline #border:active{--csstools-light-dark-toggle--3:var(--csstools-color-scheme--dark) var(--border-pressed-light);border-color:var(--csstools-light-dark-toggle--3, var(--border-pressed-dark))}@supports (color: light-dark(red, red)){.outline #border:active{border-color:light-dark(\n    var(--border-pressed-light),\n    var(--border-pressed-dark)\n  )}}.simple{--background-default-dark:var(--adbl-simple);--background-default-light:var(--adbl-simple);--background-hover-dark:var(--adbl-simple-hover);--background-hover-light:var(--adbl-simple-hover);--background-pressed-dark:var(--adbl-simple-pressed);--background-pressed-light:var(--adbl-simple-pressed);--foreground-default-dark:var(--adbl-primary-fill);--foreground-default-light:var(--adbl-primary-fill)}.prominent{--background-default-dark:#f1f7fe;--background-default-light:#102133;--background-hover-dark:#ffffff;--background-hover-light:#304864;--background-pressed-dark:#dae9f9;--background-pressed-light:#010e19;--foreground-default-dark:var(--adbl-inverse-fill);--foreground-default-light:var(--adbl-inverse-fill)}.preorder{--background-default-dark:#b1166e;--background-default-light:#97005f;--background-hover-dark:#cc388c;--background-hover-light:#b1166e;--background-pressed-dark:#97005f;--background-pressed-light:#640035;--foreground-default-dark:#ffffff;--foreground-default-light:#ffffff}.selected{--background-default-dark:#f1f7fe;--background-default-light:#102133;--background-hover-dark:#ffffff;--background-hover-light:#304864;--background-pressed-dark:#dae9f9;--background-pressed-light:#010e19;--foreground-default-dark:var(--adbl-inverse-fill);--foreground-default-light:var(--adbl-inverse-fill)}#container{--csstools-light-dark-toggle--4:var(--csstools-color-scheme--dark) var(--background-default-light);background-color:var(--csstools-light-dark-toggle--4, var(--background-default-dark));--csstools-light-dark-toggle--5:var(--csstools-color-scheme--dark) var(--background-default-light);border-color:var(--csstools-light-dark-toggle--5, var(--background-default-dark))}@supports (color: light-dark(red, red)){#container{background-color:light-dark(\n    var(--background-default-light),\n    var(--background-default-dark)\n  );border-color:light-dark(\n    var(--background-default-light),\n    var(--background-default-dark)\n  )}}#container,#container ::slotted(*){--csstools-light-dark-toggle--6:var(--csstools-color-scheme--dark) var(--foreground-default-light);color:var(--csstools-light-dark-toggle--6, var(--foreground-default-dark))}@supports (color: light-dark(red, red)){#container,#container ::slotted(*){color:light-dark(\n    var(--foreground-default-light),\n    var(--foreground-default-dark)\n  )}}@media (hover: hover){#container:hover{--csstools-light-dark-toggle--7:var(--csstools-color-scheme--dark) var(--background-hover-light);background-color:var(--csstools-light-dark-toggle--7, var(--background-hover-dark))}@supports (color: light-dark(red, red)){#container:hover{background-color:light-dark(\n      var(--background-hover-light),\n      var(--background-hover-dark)\n    )}}}#container:active{--csstools-light-dark-toggle--8:var(--csstools-color-scheme--dark) var(--background-pressed-light);background-color:var(--csstools-light-dark-toggle--8, var(--background-pressed-dark))}@supports (color: light-dark(red, red)){#container:active{background-color:light-dark(\n    var(--background-pressed-light),\n    var(--background-pressed-dark)\n  )}}#container:active,#container:active ::slotted(*){--csstools-light-dark-toggle--9:var(--csstools-color-scheme--dark) var(--foreground-pressed-light, var(--foreground-default-light));color:var(--csstools-light-dark-toggle--9, var(--foreground-pressed-dark, var(--foreground-default-dark)))}@supports (color: light-dark(red, red)){#container:active,#container:active ::slotted(*){color:light-dark(\n    var(--foreground-pressed-light, var(--foreground-default-light)),\n    var(--foreground-pressed-dark, var(--foreground-default-dark))\n  )}}:host{display:inline}adbl-button{position:absolute;top:-80px;left:8px;z-index:10000}adbl-button:focus-within{top:8px}";export{d as adbl_skip_link}