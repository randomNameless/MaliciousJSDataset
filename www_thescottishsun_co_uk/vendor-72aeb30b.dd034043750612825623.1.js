(self.webpackJsonpEs6=self.webpackJsonpEs6||[]).push([[2654],{16118:(o,r)=>{(()=>{"use strict";var o={1163:(o,r)=>{var e;Object.defineProperty(r,"__esModule",{value:!0}),r.consentPassed=void 0,function(o){o.SELECT_PERSONALISED_CONTENT="Select personalised content",o.CREATE_PERSONALISED_CONTENT_PROFILE="Create a personalised content profile",o.MEASURE_CONTENT_PERFORMANCE="Measure content performance",o.DEVELOP_IMPROVE_PRODUCTS="Develop and improve products",o.STORE_ACCESS_INFORMATION_DEVICE="Store and/or access information on a device"}(e||(e={}));const n={6:e.SELECT_PERSONALISED_CONTENT,5:e.CREATE_PERSONALISED_CONTENT_PROFILE,8:e.MEASURE_CONTENT_PERFORMANCE,10:e.DEVELOP_IMPROVE_PRODUCTS,1:e.STORE_ACCESS_INFORMATION_DEVICE},i={[e.STORE_ACCESS_INFORMATION_DEVICE]:!0,[e.SELECT_PERSONALISED_CONTENT]:!0,[e.CREATE_PERSONALISED_CONTENT_PROFILE]:!0,[e.MEASURE_CONTENT_PERFORMANCE]:!0,[e.DEVELOP_IMPROVE_PRODUCTS]:!0};r.consentPassed=o=>{if(!o.gdprApplies)return!0;var r;const e=(r=o.purpose.consents,Object.keys(r).reduce(((o,e)=>r[e]&&n[e]?[...o,{name:n[e]}]:o),[])).filter((o=>i[o.name])),t=Object.keys(i).length;return e.length===t}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var t=e[r]={exports:{}};return o[r](t,t.exports,n),t.exports}var i={};(()=>{var o=i;Object.defineProperty(o,"__esModule",{value:!0}),o.consentPassed=void 0;var r=n(1163);Object.defineProperty(o,"consentPassed",{enumerable:!0,get:function(){return r.consentPassed}})})();var t=r;for(var a in i)t[a]=i[a];i.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})()},49036:(o,r)=>{(()=>{"use strict";var o={9187:(o,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=()=>{const o={};return{getCount:r=>void 0===o[r]?0:o[r],incrementCount:(r,e=1)=>(void 0===o[r]&&(o[r]=0),o[r]+=e,o[r])}}},9418:function(o,r,e){var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e(9187);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n(i).default}})}},e={},n=function r(n){var i=e[n];if(void 0!==i)return i.exports;var t=e[n]={exports:{}};return o[n].call(t.exports,t,t.exports,r),t.exports}(9418),i=r;for(var t in n)i[t]=n[t];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})()},35491:(o,r)=>{(()=>{"use strict";var o={9187:(o,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=()=>{const o={};return{getCount:r=>void 0===o[r]?0:o[r],incrementCount:(r,e=1)=>(void 0===o[r]&&(o[r]=0),o[r]+=e,o[r])}}},9418:function(o,r,e){var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e(9187);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n(i).default}})},2203:function(o,r,e){var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0});const i=n(e(9418)),t={teaser:1,recircArticleContainer:1,readMoreContainer:2},a=["teaser","layout3Small","layout14LargeMpuTwo","layout14LargeMpuTwoV2","layout16ThreeMediumV2","layout16ThreeMediumV3","layout17MediumSmall","layout17MediumSmallV2","layout20SmallSingle"],s=({node:o,articles:r,counterContext:e})=>{const n=t[o.componentRef]&&Array.isArray(r)?r.slice(e.getCount("articles"),e.incrementCount("articles",t[o.componentRef])):void 0;return Array.isArray(n)&&n.length>1?{articles:n}:Array.isArray(n)&&1===n.length?Object.assign({},n[0]):void 0};r.default=({index:o,isAmp:r,articles:e,feedbackId:n,widgetId:l,counterContext:c=(0,i.default)()})=>i=>{var d;if(!(Array.isArray(e)&&a.includes(i.componentRef)&&c.getCount("articles")>=e.length||Array.isArray(e)&&"number"==typeof(null===(d=i.props)||void 0===d?void 0:d.minArticles)&&e.length-c.getCount("articles")<i.props.minArticles))return l&&c.incrementCount(`${l}-articles`,t[i.componentRef]||0),Object.assign(Object.assign({},i),{index:c.incrementCount("index"),props:Object.assign(Object.assign(Object.assign({},i.props),s({node:i,articles:e,counterContext:c})),{count:c.incrementCount(i.componentRef),isAmp:r,index:o,feedbackId:n})})}},2306:function(o,r,e){var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e(2203);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n(i).default}})}},e={},n=function r(n){var i=e[n];if(void 0!==i)return i.exports;var t=e[n]={exports:{}};return o[n].call(t.exports,t,t.exports,r),t.exports}(2306),i=r;for(var t in n)i[t]=n[t];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})()},12624:(o,r,e)=>{(()=>{var o={5044:(o,r,e)=>{var n=e(5096).Symbol;o.exports=n},3777:(o,r,e)=>{var n=e(5044),i=e(6824),t=e(8687),a=n?n.toStringTag:void 0;o.exports=function(o){return null==o?void 0===o?"[object Undefined]":"[object Null]":a&&a in Object(o)?i(o):t(o)}},1948:o=>{var r=Math.ceil,e=Math.max;o.exports=function(o,n,i,t){for(var a=-1,s=e(r((n-o)/(i||1)),0),l=Array(s);s--;)l[t?s:++a]=o,o+=i;return l}},8565:(o,r,e)=>{var n=e(3455),i=/^\s+/;o.exports=function(o){return o?o.slice(0,n(o)+1).replace(i,""):o}},5683:(o,r,e)=>{var n=e(1948),i=e(7169),t=e(7623);o.exports=function(o){return function(r,e,a){return a&&"number"!=typeof a&&i(r,e,a)&&(e=a=void 0),r=t(r),void 0===e?(e=r,r=0):e=t(e),a=void 0===a?r<e?1:-1:t(a),n(r,e,a,o)}}},321:o=>{var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;o.exports=r},6824:(o,r,e)=>{var n=e(5044),i=Object.prototype,t=i.hasOwnProperty,a=i.toString,s=n?n.toStringTag:void 0;o.exports=function(o){var r=t.call(o,s),e=o[s];try{o[s]=void 0;var n=!0}catch(o){}var i=a.call(o);return n&&(r?o[s]=e:delete o[s]),i}},9514:o=>{var r=/^(?:0|[1-9]\d*)$/;o.exports=function(o,e){var n=typeof o;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(o))&&o>-1&&o%1==0&&o<e}},7169:(o,r,e)=>{var n=e(3819),i=e(9787),t=e(9514),a=e(7006);o.exports=function(o,r,e){if(!a(e))return!1;var s=typeof r;return!!("number"==s?i(e)&&t(r,e.length):"string"==s&&r in e)&&n(e[r],o)}},8687:o=>{var r=Object.prototype.toString;o.exports=function(o){return r.call(o)}},5096:(o,r,e)=>{var n=e(321),i="object"==typeof self&&self&&self.Object===Object&&self,t=n||i||Function("return this")();o.exports=t},3455:o=>{var r=/\s/;o.exports=function(o){for(var e=o.length;e--&&r.test(o.charAt(e)););return e}},3819:o=>{o.exports=function(o,r){return o===r||o!=o&&r!=r}},9787:(o,r,e)=>{var n=e(3901),i=e(2845);o.exports=function(o){return null!=o&&i(o.length)&&!n(o)}},3901:(o,r,e)=>{var n=e(3777),i=e(7006);o.exports=function(o){if(!i(o))return!1;var r=n(o);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},2845:o=>{o.exports=function(o){return"number"==typeof o&&o>-1&&o%1==0&&o<=9007199254740991}},7006:o=>{o.exports=function(o){var r=typeof o;return null!=o&&("object"==r||"function"==r)}},8761:o=>{o.exports=function(o){return null!=o&&"object"==typeof o}},161:(o,r,e)=>{var n=e(3777),i=e(8761);o.exports=function(o){return"symbol"==typeof o||i(o)&&"[object Symbol]"==n(o)}},5148:(o,r,e)=>{var n=e(5683)();o.exports=n},7623:(o,r,e)=>{var n=e(1121);o.exports=function(o){return o?1/0===(o=n(o))||o===-1/0?17976931348623157e292*(o<0?-1:1):o==o?o:0:0===o?o:0}},1121:(o,r,e)=>{var n=e(8565),i=e(7006),t=e(161),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;o.exports=function(o){if("number"==typeof o)return o;if(t(o))return NaN;if(i(o)){var r="function"==typeof o.valueOf?o.valueOf():o;o=i(r)?r+"":r}if("string"!=typeof o)return 0===o?o:+o;o=n(o);var e=s.test(o);return e||l.test(o)?c(o.slice(2),e?2:8):a.test(o)?NaN:+o}},1688:function(o,r,e){"use strict";var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0});const i=n(e(5148)),t=o=>Array.isArray(o.children),a=(o,r)=>{const e=r(o);if(void 0!==e)return"string"==typeof e?e:Object.assign(Object.assign({},e),{children:t(e)?(0,i.default)(e.repeat||1).flatMap((()=>e.children.map((o=>a(o,r))).filter((o=>Boolean(o))))):void 0})};r.default=a},1219:function(o,r,e){"use strict";var n=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=e(1688);Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n(i).default}})}},n={},i=function r(e){var i=n[e];if(void 0!==i)return i.exports;var t=n[e]={exports:{}};return o[e].call(t.exports,t,t.exports,r),t.exports}(1219),t=r;for(var a in i)t[a]=i[a];i.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})})()},53392:(o,r,e)=>{"use strict";e.d(r,{z:()=>Z});var n,i,t,a,s=e(97582),l=e(67294),c=e(21952),d=e(37337),u=e(6014),v=e(20725),b=(0,d.Z)(c.M)(n||(n=(0,s.cy)(["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ",";\n  ",";\n\n  svg {\n    ",";\n    ",";\n  }\n\n  cursor: ",";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ","\n"],["\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ",";\n  ",";\n\n  svg {\n    ",";\n    ",";\n  }\n\n  cursor: ",";\n\n  // Button related styles\n  overflow: hidden;\n  border: none;\n  appearance: none;\n  // End of button related styles\n\n  ","\n"])),(function(o){return(0,u.FZ)((function(r){return o.overrides&&o.overrides.height?{minHeight:"auto"}:{minHeight:r}}),"","","minHeight")(o)}),(function(o){return(0,u.FZ)((function(r){return o.overrides&&o.overrides.width?{minWidth:"auto"}:{minWidth:r}}),"","","minWidth")(o)}),(0,u.FZ)("width","","","iconSize"),(0,u.FZ)("height","","","iconSize"),(function(o){return o.$disabled?"not-allowed":"default"}),(function(o){var r=o.$disabled,e=o.$loading;return(0,v.JK)("","",{isDisabled:r,isLoading:e})})),f=e(2605),g=e(29138),p=e(96597),C=e(78682),k=e(94127),m=e(35746),y=d.Z.p(i||(i=(0,s.cy)(["\n  margin: 0;\n  ",";\n  ",";\n  ",";\n  ","\n"],["\n  margin: 0;\n  ",";\n  ",";\n  ",";\n  ","\n"])),(function(o){var r=o.stylePreset;return r&&(0,v.z4)(r)}),(function(o){var r=o.typographyPreset,e=o.noCrop;return r&&(0,C.LY)(r,void 0,{withCrop:!e})}),(function(o){var r=o.as,e=o.noCrop;return r&&!e&&(0,k.k)(r)?"display: inline-block;":""}),(0,m.k7)()),h=l.forwardRef((function(o,r){var e=(0,s._T)(o,[]);return l.createElement(y,(0,s.pi)({},e,{ref:r}))})),P=e(94512),S=l.forwardRef((function(o,r){var e=o.children,n=o.overrides,i=o.loading,t=o.disabled,a=o.as,c=(0,s._T)(o,["children","overrides","loading","disabled","as"]),d=(0,f.Fg)();return l.createElement(b,(0,s.pi)({},c,{$loading:i,$disabled:t,disabled:"a"!==a&&t,overrides:n,ref:r,as:a,justifyContent:"center",alignContent:"center",alignItems:"center",justifyItems:"center",columnGap:(0,g.L)({theme:d,overrides:n},"","","spaceInline"),columns:"repeat(".concat(l.Children.toArray(e).length,", auto)"),inline:!0}),l.Children.map(e,(function(o){return["string","number"].includes(typeof o)?l.createElement(h,{as:"span",typographyPreset:n&&n.typographyPreset},o):o})))})),I=l.forwardRef((function(o,r){var e=o.overrides,n=void 0===e?{}:e,i=(0,s._T)(o,["overrides"]),t=(0,f.Fg)(),a=i.size,c=void 0===a?"medium":a;return l.createElement(S,(0,s.pi)({"data-testid":"flag"},i,{loading:!1,ref:r,overrides:(0,s.pi)((0,s.pi)({},t.componentDefaults.flag[c]),(0,p.so)(n))}))})),E=((0,P.z)(I)({defaults:{flag:{small:{typographyPreset:"utilityLabel010",stylePreset:"flagSolidPrimary",paddingInline:"space020",paddingBlock:"space010",minHeight:"sizing050",iconSize:"iconSize010",spaceInline:"space010"},medium:{typographyPreset:"utilityLabel020",stylePreset:"flagSolidPrimary",paddingInline:"space030",paddingBlock:"space020",minHeight:"sizing060",iconSize:"iconSize010",spaceInline:"space010"},large:{typographyPreset:"utilityLabel030",stylePreset:"flagSolidPrimary",paddingInline:"space030",paddingBlock:"space020",minHeight:"sizing070",iconSize:"iconSize010",spaceInline:"space010"}}},stylePresets:{flagSolidPrimary:{base:{backgroundColor:"{{colors.interfaceBrand010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidPositive:{base:{backgroundColor:"{{colors.interfacePositive010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidNegative:{base:{backgroundColor:"{{colors.interfaceNegative010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidNotice:{base:{backgroundColor:"{{colors.interfaceNotice010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidInformative:{base:{backgroundColor:"{{colors.interfaceInformative010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidNeutral:{base:{backgroundColor:"{{colors.interfaceNeutral010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}},flagSolidInverse:{base:{backgroundColor:"{{colors.interface010}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkContrast}}",iconColor:"{{colors.inkContrast}}"}},flagMinimalPrimary:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkBrand010}}",iconColor:"{{colors.inkBrand010}}"}},flagMinimalPositive:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkPositive}}",iconColor:"{{colors.inkPositive}}"}},flagMinimalNegative:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkNegative}}",iconColor:"{{colors.inkNegative}}"}},flagMinimalNotice:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkNotice}}",iconColor:"{{colors.inkNotice}}"}},flagMinimalInformative:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInformative}}",iconColor:"{{colors.inkInformative}}"}},flagMinimalNeutral:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkBase}}",iconColor:"{{colors.inkBase}}"}},flagMinimalInverse:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusSharp}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"}}}}),e(98)),R=(0,d.Z)(S)(t||(t=(0,s.cy)(["\n  ","\n  ","\n"],["\n  ","\n  ","\n"])),(function(o){var r=o.size;return(0,E.y)("button.".concat(r),"")}),(function(o){var r=o.loading;return o.disabled?null:{cursor:r?"progress":"pointer"}})),N=e(28622),_={decorative:{"aria-hidden":!0},standalone:{role:"img"}},O=e(99812),x=e(92960),j=(0,d.Z)((function(o){var r=o.children,e=o.title,n=(0,s._T)(o,["children","title"]),i=(n.overrides,(0,s._T)(n,["overrides"]));return l.createElement("svg",(0,s.pi)({},i,_[e?"standalone":"decorative"],{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}),e&&l.createElement("title",null,e),r)}))(a||(a=(0,s.cy)(["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ",";\n  ",";\n  stroke: ",";\n\n  circle {\n    r: ",";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"],["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ",";\n  ",";\n  stroke: ",";\n\n  circle {\n    r: ",";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"])),(0,u.FZ)("width","indeterminateProgressIndicator","","size"),(0,u.FZ)("height","indeterminateProgressIndicator","","size"),(function(o){return(0,v.JK)("indeterminateProgressIndicator","",{isSvg:!0})(o).fill}),"calc(50% - 2px)"),M=function(o){return l.createElement(j,(0,s.pi)({},o,{viewBox:"0 0 64 64"}),l.createElement("circle",{cx:"50%",cy:"50%"}))},w=(0,P.z)((0,f.Zz)((function(o){var r=o.theme.icons.IndeterminateProgressIndicator||M;return l.createElement(r,(0,s.pi)({},o))})))({defaults:O.Z,stylePresets:x.Z});w.displayName="IndeterminateProgressIndicator";var D=e(35550),T=l.createContext({context:{},fireEvent:function(){}}),z=e(7626),A=e(31506),B=e(11169);const F={buttonSolidPrimary:{base:{backgroundColor:"{{colors.interactivePrimary030}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactivePrimary040}}"},active:{backgroundColor:"{{colors.interactivePrimary050}}"},disabled:{backgroundColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePrimary020}}",color:"{{colors.inkBrand010}}",iconColor:"{{colors.inkBrand010}}"},"focus-visible":A.e},buttonSolidSecondary:{base:{backgroundColor:"{{colors.interactiveSecondary030}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactiveSecondary040}}"},active:{backgroundColor:"{{colors.interactiveSecondary050}}"},disabled:{backgroundColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveSecondary020}}",color:"{{colors.inkBase}}",iconColor:"{{colors.inkBase}}"},"focus-visible":A.e},buttonSolidNegative:{base:{backgroundColor:"{{colors.interactiveNegative030}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactiveNegative040}}"},active:{backgroundColor:"{{colors.interactiveNegative050}}"},disabled:{backgroundColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveNegative020}}",color:"{{colors.inkNegative}}",iconColor:"{{colors.inkNegative}}"},"focus-visible":A.e},buttonSolidPositive:{base:{backgroundColor:"{{colors.interactivePositive030}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactivePositive040}}"},active:{backgroundColor:"{{colors.interactivePositive050}}"},disabled:{backgroundColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePositive020}}",color:"{{colors.inkPositive}}",iconColor:"{{colors.inkPositive}}"},"focus-visible":A.e},buttonSolidInverse:{base:{backgroundColor:"{{colors.interactiveInverse030}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkContrast}}",iconColor:"{{colors.inkContrast}}"},hover:{backgroundColor:"{{colors.interactiveInverse040}}"},active:{backgroundColor:"{{colors.interactiveInverse050}}"},disabled:{backgroundColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveInverse020}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},"focus-visible":B.A},buttonOutlinedPrimary:{base:{backgroundColor:"{{colors.transparent}}",borderStyle:"solid",borderColor:"{{colors.interactivePrimary030}}",borderWidth:"{{borders.borderWidth010}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkBrand010}}",iconColor:"{{colors.inkBrand010}}"},hover:{backgroundColor:"{{colors.interactivePrimary010}}",borderColor:"{{colors.interactivePrimary040}}"},active:{backgroundColor:"{{colors.interactivePrimary020}}",borderColor:"{{colors.interactivePrimary050}}"},disabled:{borderColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePrimary020}}",borderStyle:"none"},"focus-visible":A.e},buttonOutlinedSecondary:{base:{backgroundColor:"{{colors.transparent}}",borderStyle:"solid",borderColor:"{{colors.interactiveSecondary030}}",borderWidth:"{{borders.borderWidth010}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkBase}}",iconColor:"{{colors.inkBase}}"},hover:{backgroundColor:"{{colors.interactiveSecondary010}}",borderColor:"{{colors.interactiveSecondary040}}"},active:{backgroundColor:"{{colors.interactiveSecondary020}}",borderColor:"{{colors.interactiveSecondary050}}"},disabled:{borderColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveSecondary020}}",borderStyle:"none"},"focus-visible":A.e},buttonOutlinedNegative:{base:{backgroundColor:"{{colors.transparent}}",borderStyle:"solid",borderColor:"{{colors.interactiveNegative030}}",borderWidth:"{{borders.borderWidth010}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkNegative}}",iconColor:"{{colors.inkNegative}}"},hover:{backgroundColor:"{{colors.interactiveNegative010}}",borderColor:"{{colors.interactiveNegative040}}"},active:{backgroundColor:"{{colors.interactiveNegative020}}",borderColor:"{{colors.interactiveNegative050}}"},disabled:{borderColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveNegative020}}",borderStyle:"none"},"focus-visible":A.e},buttonOutlinedPositive:{base:{backgroundColor:"{{colors.transparent}}",borderStyle:"solid",borderColor:"{{colors.interactivePositive030}}",borderWidth:"{{borders.borderWidth010}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkPositive}}",iconColor:"{{colors.inkPositive}}"},hover:{backgroundColor:"{{colors.interactivePositive010}}",borderColor:"{{colors.interactivePositive040}}"},active:{backgroundColor:"{{colors.interactivePositive020}}",borderColor:"{{colors.interactivePositive050}}"},disabled:{borderColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePositive020}}",borderStyle:"none"},"focus-visible":A.e},buttonOutlinedInverse:{base:{backgroundColor:"{{colors.transparent}}",borderStyle:"solid",borderColor:"{{colors.interactiveInverse030}}",borderWidth:"{{borders.borderWidth010}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactiveInverse010}}",borderColor:"{{colors.interactiveInverse040}}"},active:{backgroundColor:"{{colors.interactiveInverse020}}",borderColor:"{{colors.interactiveInverse050}}"},disabled:{borderColor:"{{colors.interactiveDisabled010}}",color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveInverse020}}",borderStyle:"none"},"focus-visible":B.A},buttonMinimalPrimary:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkBrand010}}",iconColor:"{{colors.inkBrand010}}"},hover:{backgroundColor:"{{colors.interactivePrimary010}}"},active:{backgroundColor:"{{colors.interactivePrimary020}}"},disabled:{color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePrimary020}}"},"focus-visible":A.e},buttonMinimalSecondary:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkBase}}",iconColor:"{{colors.inkBase}}"},hover:{backgroundColor:"{{colors.interactiveSecondary010}}"},active:{backgroundColor:"{{colors.interactiveSecondary020}}"},disabled:{color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveSecondary020}}"},"focus-visible":A.e},buttonMinimalNegative:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkNegative}}",iconColor:"{{colors.inkNegative}}"},hover:{backgroundColor:"{{colors.interactiveNegative010}}"},active:{backgroundColor:"{{colors.interactiveNegative020}}"},disabled:{color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveNegative020}}"},"focus-visible":A.e},buttonMinimalPositive:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkPositive}}",iconColor:"{{colors.inkPositive}}"},hover:{backgroundColor:"{{colors.interactivePositive010}}"},active:{backgroundColor:"{{colors.interactivePositive020}}"},disabled:{color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactivePositive020}}"},"focus-visible":A.e},buttonMinimalInverse:{base:{backgroundColor:"{{colors.transparent}}",borderRadius:"{{borders.borderRadiusDefault}}",color:"{{colors.inkInverse}}",iconColor:"{{colors.inkInverse}}"},hover:{backgroundColor:"{{colors.interactiveInverse010}}"},active:{backgroundColor:"{{colors.interactiveInverse020}}"},disabled:{color:"{{colors.inkNonEssential}}",iconColor:"{{colors.inkNonEssential}}"},loading:{backgroundColor:"{{colors.interactiveInverse020}}"},"focus-visible":B.A}};var L=l.forwardRef((function(o,r){var e=(0,f.Fg)(),n=function(){var o=(0,l.useContext)(T),r=o.fireEvent,e=o.context;return(0,l.useCallback)((function(o){return r((0,D.h)(e,o))}),[e,r])}(),i=o.children,t=o.overrides,a=void 0===t?{}:t,c=o.size,d=void 0===c?"medium":c,u=o.loading,v=(0,s.pi)((0,s.pi)({},e.componentDefaults.button[d]),(0,p.so)(a)),b=v.loadingIndicator&&v.loadingIndicator.stylePreset;return l.createElement(R,(0,s.pi)({},function(o){var r=o,e=r.disabled,i=r.eventContext,t=r.eventOriginator,a=(0,s._T)(r,["disabled","eventContext","eventOriginator"]),l=function(o){return void 0!==o.href}(o);return(0,s.pi)((0,s.pi)({},l?(0,s.pi)((0,s.pi)((0,s.pi)((0,s.pi)({"data-testid":"buttonLink"},(0,N.as)("a")),a),{disabled:e}),e&&{href:void 0,role:"link","aria-disabled":"true"}):(0,s.pi)((0,s.pi)((0,s.pi)((0,s.pi)({type:"button","data-testid":"button"},(0,N.as)("button")),a),{disabled:e}),u&&{"aria-busy":"true","aria-live":"polite"})),{onClick:function(r){n({originator:t||(l?"link":"button"),trigger:z.u.Click,context:(0,s.pi)({},i)}),o.onClick&&o.onClick(r)},overrides:v})}(o),{ref:r}),u?l.createElement(w,{overrides:{size:v.iconSize,stylePreset:b}}):i)})),Z=(0,P.z)(L)({defaults:{button:{small:{typographyPreset:"utilityButton010",stylePreset:"buttonSolidPrimary",paddingInline:"space030",paddingBlock:"space020",minWidth:"sizing090",minHeight:"sizing060",iconSize:"iconSize010",spaceInline:"space020",transitionPreset:"backgroundColorChange",loadingIndicator:{stylePreset:"indeterminateProgressIndicatorPrimary"}},medium:{typographyPreset:"utilityButton020",stylePreset:"buttonSolidPrimary",paddingInline:"space040",paddingBlock:"space030",minWidth:"sizing100",minHeight:"sizing080",iconSize:"iconSize020",spaceInline:"space020",transitionPreset:"backgroundColorChange",loadingIndicator:{stylePreset:"indeterminateProgressIndicatorPrimary"}},large:{typographyPreset:"utilityButton030",stylePreset:"buttonSolidPrimary",paddingInline:"space050",paddingBlock:"space040",minWidth:"sizing110",minHeight:"sizing090",iconSize:"iconSize030",spaceInline:"space020",transitionPreset:"backgroundColorChange",loadingIndicator:{stylePreset:"indeterminateProgressIndicatorPrimary"}}}},stylePresets:F})},21952:(o,r,e)=>{"use strict";e.d(r,{M:()=>z});var n,i,t,a=e(97582),s=e(67294),l=e(35746),c=e(37337),d=e(20725),u=e(78682),v=e(98),b=c.Z.div(n||(n=(0,a.cy)(["\n  ","\n  ","\n  ","\n  ","\n  ",";\n"],["\n  ","\n  ","\n  ","\n  ","\n  ",";\n"])),(function(o){var r=o.stylePreset;return r&&(0,d.z4)(r)}),(function(o){var r=o.spaceInline;return r&&(0,u.E2)(r,void 0,"marginRight")}),(function(o){var r=o.spaceStack;return r&&(0,u.E2)(r,void 0,"marginBottom")}),(0,l.k7)(),(function(o){var r=o.transitionPreset;return r&&(0,v.M)(r)})),f=s.forwardRef((function(o,r){var e=(0,a._T)(o,[]);return s.createElement(b,(0,a.pi)({},e,{ref:r}))})),g=e(6014),p=void 0,C=void 0,k=void 0,m=void 0,y=void 0,h=void 0,P=void 0,S=void 0,I=void 0,E=!1,R=void 0,N=void 0,_=void 0,O=function(o,r){return null==r?void 0:r.split(" ").map((function(r){return o.sizing[r]||r})).join(" ")},x=c.Z.div(i||(i=(0,a.cy)(["\n  margin: 0;\n  padding: 0;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"],["\n  margin: 0;\n  padding: 0;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ","\n"])),(0,u.$7)({inline:E},(function(o){return{display:o.inline?"inline-grid":"grid"}})),(0,u.$7)({rowGap:p},(function(o,r){var e=o.rowGap,n=r.theme;return{rowGap:e&&(n.spacePresets[e]||e)}})),(0,u.$7)({columnGap:C},(function(o,r){var e=o.columnGap,n=r.theme;return{columnGap:e&&(n.spacePresets[e]||e)}})),(0,u.$7)({columns:k},(function(o,r){var e=o.columns,n=r.theme;return{gridTemplateColumns:O(n,e)}})),(0,u.$7)({rows:m},(function(o,r){var e=o.rows,n=r.theme;return{gridTemplateRows:O(n,e)}})),(0,u.$7)({areas:I},(function(o){return{gridTemplateAreas:o.areas}})),(0,u.$7)({autoFlow:R},(function(o){return{gridAutoFlow:o.autoFlow}})),(0,u.$7)({autoRows:N},(function(o,r){var e=o.autoRows,n=r.theme;return{gridAutoRows:O(n,e)}})),(0,u.$7)({autoColumns:_},(function(o,r){var e=o.autoColumns,n=r.theme;return{gridAutoColumns:O(n,e)}})),(0,u.$7)({justifyContent:y},(function(o){return{justifyContent:o.justifyContent}})),(0,u.$7)({alignContent:h},(function(o){return{alignContent:o.alignContent}})),(0,u.$7)({justifyItems:P},(function(o){return{justifyItems:o.justifyItems}})),(0,u.$7)({alignItems:S},(function(o){return{alignItems:o.alignItems}})),(0,g.FZ)("width","gridLayout","","width"),(0,g.FZ)("minWidth","gridLayout","","minWidth"),(0,g.FZ)("maxWidth","gridLayout","","maxWidth"),(0,g.FZ)("height","gridLayout","","height"),(0,g.FZ)("minHeight","gridLayout","","minHeight"),(0,g.FZ)("maxHeight","gridLayout","","maxHeight"),(0,l.k7)("gridLayout")),j=e(78388),M=function(o){return o.replace(/\n/g," ").replace(/"/g,"").replace(/  +/g," ").trim().split(" ")},w=function(o){return"."!==o&&Boolean(o)},D=function(o){return null==o?void 0:o.split("\n").map((function(o){return o.split(/\s+/).filter((function(o){return!!o})).join(" ")})).filter((function(o){return o.length})).map((function(o){return o.includes('"')?o:'"'.concat(o,'"')})).join("\n")},T=(0,c.Z)(f)(t||(t=(0,a.cy)(["\n  grid-area: ",";\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  grid-area: ",";\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),(function(o){return o.area}),(0,u.$7)({order:void 0},(function(o){return{order:o.order}})),(0,u.$7)({justifySelf:void 0},(function(o){return{justifySelf:o.justifySelf}})),(0,u.$7)({alignSelf:void 0},(function(o){return{alignSelf:o.alignSelf}})),(0,u.$7)({column:void 0},(function(o){return{gridColumn:o.column}})),(0,u.$7)({row:void 0},(function(o){return{gridRow:o.row}}))),z=s.forwardRef((function(o,r){var e,n=o.children,i=(0,a._T)(o,["children"]),t=i.areas,l=function(o){if("string"==typeof o)return(0,j.j)(M(o));var r=Object.values(o).reduce((function(o,r){var e=M(r);return(0,a.ev)((0,a.ev)([],o,!0),e,!0)}),[]);return(0,j.j)(r).filter(w)}(t||""),c={},d=function(o,r){return"function"==typeof o&&!!r.length}(n,l);return d&&l.forEach((function(o){var r=o.replace(/^./,(function(o){return o.toUpperCase()}));c[r]=function(r){return s.createElement(T,(0,a.pi)({area:o},r))}})),"object"==typeof t?(e={},Object.entries(t).forEach((function(o){var r=o[0],n=o[1];e[r]=D(n)}))):e=D(t),s.createElement(x,(0,a.pi)({ref:r},i,{areas:e}),d?n(c):n)}))},99812:(o,r,e)=>{"use strict";e.d(r,{Z:()=>n});const n={icons:{stylePreset:"iconDefault"},indeterminateProgressIndicator:{stylePreset:"iconDefault",size:"iconSize020"}}},92960:(o,r,e)=>{"use strict";e.d(r,{Z:()=>n});const n={iconPositive:{base:{iconColor:"{{colors.inkPositive}}"}},iconNegative:{base:{iconColor:"{{colors.inkNegative}}"}},iconSocialTwitter:{base:{iconColor:"{{colors.socialTwitter}}"}},iconSocialGitHub:{base:{iconColor:"{{colors.socialGithub}}"}},iconSocialFacebook:{base:{iconColor:"{{colors.socialFacebook}}"}},iconSocialInstagram:{base:{iconColor:"{{colors.socialInstagram}}"}},iconSocialYoutube:{base:{iconColor:"{{colors.socialYoutube}}"}},iconSocialWhatsApp:{base:{iconColor:"{{colors.socialWhatsapp}}"}},iconSocialReddit:{base:{iconColor:"{{colors.socialReddit}}"}},iconDefault:{base:{iconColor:"{{colors.inkBase}}"}},indeterminateProgressIndicatorPrimary:{base:{iconColor:"{{colors.inkBrand010}}"}},indeterminateProgressIndicatorSecondary:{base:{iconColor:"{{colors.inkBase}}"}},indeterminateProgressIndicatorNegative:{base:{iconColor:"{{colors.inkNegative}}"}},indeterminateProgressIndicatorPositive:{base:{iconColor:"{{colors.inkPositive}}"}},indeterminateProgressIndicatorInverse:{base:{iconColor:"{{colors.inkInverse}}"}}}},15092:(o,r,e)=>{"use strict";e.d(r,{v:()=>C});var n=e(97582),i=e(67294);if(2139==e.j)var t=e(2605);var a=e(20725),s=e(37337),l=e(78682),c=e(98);if(2139==e.j)var d=e(99812);if(2139==e.j)var u=e(92960);if(2139==e.j)var v=e(94512);var b,f=e(35746),g=function(o){return function(r){if(!o||r.overrides&&r.overrides.stylePreset){var e=(0,a.JK)("icons","",{isSvg:!0})(r),i=(0,c.M)("iconColorChange")(r);return(0,n.pi)((0,n.pi)({},e),i)}return{}}},p=s.Z.svg(b||(b=(0,n.cy)(["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ","\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ","\n    ","\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ","\n  }\n\n  ","\n"],["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ","\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ","\n    ","\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ","\n  }\n\n  ","\n"])),g(!1),(function(o){var r;return(null===(r=o.overrides)||void 0===r?void 0:r.size)&&(0,l.kj)("width",o.overrides.size)}),(function(o){var r;return(null===(r=o.overrides)||void 0===r?void 0:r.size)&&(0,l.kj)("height",o.overrides.size)}),g(!0),(0,f.k7)()),C=function(o){return(0,v.z)((0,t.Zz)(i.memo((function(r){var e=o.displayName;if(r.theme.icons["".concat(e)]){var t=r.theme.icons["".concat(e)];return i.createElement(t,(0,n.pi)({title:r.title},r))}return i.createElement(p,(0,n.pi)({title:r.title},r,{as:o}))}))))({defaults:d.Z,stylePresets:u.Z})}},35550:(o,r,e)=>{"use strict";if(e.d(r,{h:()=>t}),2139==e.j)var n=e(97582);var i=e(7626),t=function(o,r){return(0,n.pi)((0,n.pi)({},r),{context:(0,n.pi)((0,n.pi)({},o),r.context)})};Object.values(i.u)},7626:(o,r,e)=>{"use strict";var n;e.d(r,{u:()=>n}),function(o){o.Click="click",o.Swipe="swipe",o.Load="load",o.Start="start",o.Stop="stop",o.End="end",o.Pulse="pulse",o.Focus="focus",o.Change="change",o.Scroll="scroll"}(n||(n={}))},96336:(o,r,e)=>{"use strict";e.d(r,{s:()=>t});var n=e(67294),i=n.createContext({initialized:!1,themeOptions:{}}),t=function(){return n.useContext(i)}}}]);