window.phoenix&&(window.phoenix.buildInfo||(window.phoenix.buildInfo=[]),-1===window.phoenix.buildInfo.findIndex((n=>"Phoenix-platform"===n.MFE))&&window.phoenix.buildInfo.push({MFE:"Phoenix-platform",VERSION:"75f67d4",LASTCOMMITDATETIME:"2024-10-25T03:13:32+00:00"}))
/*!
 * 
 *         ============= BUILD INFO =============
 *         MFE: Phoenix-platform
 *         chunkName: vendor-clientlibs/uuid/uuid
 *         VERSION: 75f67d4
 *         BRANCH: HEAD
 *         COMMITHASH: 75f67d4e58c8b95c0525176c75ce402fbfc43056
 *         LASTCOMMITDATETIME: 2024-10-25T03:13:32+00:00
 *         ============= If you're reading this, why not come work with us? https://www.t-mobile.com/careers =============
 */,function(){"use strict";var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const t=new Uint8Array(16);function r(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(t)}const i=[];for(let n=0;n<256;++n)i.push((n+256).toString(16).slice(1));function d(n,o=0){return i[n[o+0]]+i[n[o+1]]+i[n[o+2]]+i[n[o+3]]+"-"+i[n[o+4]]+i[n[o+5]]+"-"+i[n[o+6]]+i[n[o+7]]+"-"+i[n[o+8]]+i[n[o+9]]+"-"+i[n[o+10]]+i[n[o+11]]+i[n[o+12]]+i[n[o+13]]+i[n[o+14]]+i[n[o+15]]}var e=function(o,t,i){if(n.randomUUID&&!t&&!o)return n.randomUUID();const e=(o=o||{}).random||(o.rng||r)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,t){i=i||0;for(let n=0;n<16;++n)t[i+n]=e[n];return t}return d(e)};window.uuid=window.uuid||{},window.uuid.v4=e}();