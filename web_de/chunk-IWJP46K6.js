import{a as T,d as l}from"./chunk-3EUMSZQR.js";import{a as i,b as a,c as p}from"./chunk-DHKC46AY.js";import{e as r,f as s}from"./chunk-IZOY2GXC.js";var d=a(class extends p{constructor(e){if(super(e),e.type!==i.PROPERTY&&e.type!==i.ATTRIBUTE&&e.type!==i.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!T(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r||t===s)return t;let n=e.element,o=e.name;if(e.type===i.PROPERTY){if(t===n[o])return r}else if(e.type===i.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(o))return r}else if(e.type===i.ATTRIBUTE&&n.getAttribute(o)===t+"")return r;return l(e),t}});export{d as a};
/*! Bundled license information:

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-IWJP46K6.js.map
