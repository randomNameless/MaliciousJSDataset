!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="9a2c79a0-c9fe-4a90-82d7-a8a4c830b749",t._sentryDebugIdIdentifier="sentry-dbid-9a2c79a0-c9fe-4a90-82d7-a8a4c830b749")}catch(t){}}();var _sentryModuleMetadataGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack],{"_sentryBundlerPluginAppKey:gemini-web":!0});var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6.77.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4293],{20213:function(t,e,n){n.d(e,{E1:function(){return c},JD:function(){return i},Sn:function(){return d},fs:function(){return o},i_:function(){return s},jG:function(){return p},sy:function(){return a},uT:function(){return r},xc:function(){return u}});const s="sentry.source",a="sentry.sample_rate",r="sentry.op",i="sentry.origin",o="sentry.idle_span_finish_reason",d="sentry.measurement_unit",u="sentry.measurement_value",c="sentry.profile_id",p="sentry.exclusive_time"},87642:function(t,e,n){n.d(e,{Vu:function(){return d},fj:function(){return i},qO:function(){return o}});var s=n(93187),a=n(3673),r=n(8320);function i(t){const e=(0,a.zf)(),n={sid:(0,r.eJ)(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(t){return(0,s.Ce)({sid:`${t.sid}`,init:t.init,started:new Date(1e3*t.started).toISOString(),timestamp:new Date(1e3*t.timestamp).toISOString(),status:t.status,errors:t.errors,did:"number"==typeof t.did||"string"==typeof t.did?`${t.did}`:void 0,duration:t.duration,abnormal_mechanism:t.abnormal_mechanism,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}})}(n)};return t&&o(n,t),n}function o(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),t.did||e.did||(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||(0,a.zf)(),e.abnormal_mechanism&&(t.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=32===e.sid.length?e.sid:(0,r.eJ)()),void 0!==e.init&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),"number"==typeof e.started&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if("number"==typeof e.duration)t.duration=e.duration;else{const e=t.timestamp-t.started;t.duration=e>=0?e:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),"number"==typeof e.errors&&(t.errors=e.errors),e.status&&(t.status=e.status)}function d(t,e){let n={};e?n={status:e}:"ok"===t.status&&(n={status:"exited"}),o(t,n)}},80708:function(t,e,n){n.d(e,{LZ:function(){return p},k1:function(){return m},lF:function(){return l}}),n(89463);var s=n(90959),a=n(69222),r=n(20213),i=n(11304),o=n(93187),d=n(89511),u=n(84365);const c="_frozenDsc";function p(t,e){const n=t;(0,o.my)(n,c,e)}function l(t,e){const n=e.getOptions(),{publicKey:a}=e.getDsn()||{},r=(0,o.Ce)({environment:n.environment||s.U,release:n.release,public_key:a,trace_id:t});return e.emit("createDsc",r),r}function m(t){const e=(0,a.KU)();if(!e)return{};const n=l((0,u.et)(t).trace_id||"",e),s=(0,u.zU)(t),o=s[c];if(o)return o;const p=s.spanContext().traceState,m=p&&p.get("sentry.dsc"),f=m&&(0,i.yD)(m);if(f)return f;const _=(0,u.et)(s),h=_.data||{},g=h[r.sy];null!=g&&(n.sample_rate=`${g}`);const S=h[r.i_],b=_.description;return"url"!==S&&b&&(n.transaction=b),(0,d.w)()&&(n.sampled=String((0,u.pK)(s))),e.emit("createDsc",n,s),n}},50964:function(t,e,n){n.d(e,{s:function(){return c}});var s=n(3556),a=n(9925),r=n(62365),i=n(77164),o=n(84365),d=n(2045);let u=!1;function c(){u||(u=!0,(0,a.L)(p),(0,r.r)(p))}function p(){const t=(0,o.Bk)(),e=t&&(0,o.zU)(t);if(e){const t="internal_error";s.T&&i.vF.log(`[Tracing] Root span: ${t} -> Global error occurred`),e.setStatus({code:d.TJ,message:t})}}p.tag="sentry_tracingErrorCallback"},30509:function(t,e,n){n.d(e,{C:function(){return f},D:function(){return b}}),n(44114),n(33110),n(17333),n(9920),n(41393),n(98992),n(54520),n(3949),n(81454),n(71517),n(11379),n(93777),n(14190),n(12359),n(86097),n(17273),n(27415),n(19929),n(37583),n(55122),n(20230),n(57268),n(79733);var s=n(69222),a=n(3556),r=n(20213),i=n(77164),o=n(3673),d=n(89511),u=n(60831),c=n(84365),p=n(17618),l=n(2045),m=n(26562);const f={idleTimeout:1e3,finalTimeout:3e4,childSpanTimeout:15e3},_="heartbeatFailed",h="idleTimeout",g="finalTimeout",S="externalFinish";function b(t,e={}){const n=new Map;let b,v=!1,y=S,T=!e.disableAutoFinish;const I=[],{idleTimeout:w=f.idleTimeout,finalTimeout:A=f.finalTimeout,childSpanTimeout:D=f.childSpanTimeout,beforeSpanEnd:E}=e,x=(0,s.KU)();if(!x||!(0,d.w)())return new p.w;const k=(0,s.o5)(),M=(0,c.Bk)(),C=function(t){const e=(0,m.Uk)(t);return(0,u.r)((0,s.o5)(),e),a.T&&i.vF.log("[Tracing] Started span is an idle span"),e}(t);function F(){b&&(clearTimeout(b),b=void 0)}function U(t){F(),b=setTimeout((()=>{!v&&0===n.size&&T&&(y=h,C.end(t))}),w)}function $(t){b=setTimeout((()=>{!v&&T&&(y=_,C.end(t))}),D)}function O(t){v=!0,n.clear(),I.forEach((t=>t())),(0,u.r)(k,M);const e=(0,c.et)(C),{start_timestamp:s}=e;if(!s)return;(e.data||{})[r.fs]||C.setAttribute(r.fs,y),i.vF.log(`[Tracing] Idle span "${e.op}" finished`);const o=(0,c.xO)(C).filter((t=>t!==C));let d=0;o.forEach((e=>{e.isRecording()&&(e.setStatus({code:l.TJ,message:"cancelled"}),e.end(t),a.T&&i.vF.log("[Tracing] Cancelling span since span ended early",JSON.stringify(e,void 0,2)));const n=(0,c.et)(e),{timestamp:s=0,start_timestamp:r=0}=n,o=r<=t,u=s-r<=(A+w)/1e3;if(a.T){const t=JSON.stringify(e,void 0,2);o?u||i.vF.log("[Tracing] Discarding span since it finished after idle span final timeout",t):i.vF.log("[Tracing] Discarding span since it happened after idle span was finished",t)}u&&o||((0,c.VS)(C,e),d++)})),d>0&&C.setAttribute("sentry.idle_span_discarded_spans",d)}return C.end=new Proxy(C.end,{apply(t,e,n){E&&E(C);const[s,...a]=n,r=s||(0,o.zf)(),i=(0,c.cI)(r),d=(0,c.xO)(C).filter((t=>t!==C));if(!d.length)return O(i),Reflect.apply(t,e,[i,...a]);const u=d.map((t=>(0,c.et)(t).timestamp)).filter((t=>!!t)),p=u.length?Math.max(...u):void 0,l=(0,c.et)(C).start_timestamp,m=Math.min(l?l+A/1e3:1/0,Math.max(l||-1/0,Math.min(i,p||1/0)));return O(m),Reflect.apply(t,e,[m,...a])}}),I.push(x.on("spanStart",(t=>{var e;v||t===C||(0,c.et)(t).timestamp||(0,c.xO)(C).includes(t)&&(e=t.spanContext().spanId,F(),n.set(e,!0),$((0,o.zf)()+D/1e3))}))),I.push(x.on("spanEnd",(t=>{var e;v||(e=t.spanContext().spanId,n.has(e)&&n.delete(e),0===n.size&&U((0,o.zf)()+w/1e3))}))),I.push(x.on("idleSpanEnableAutoFinish",(t=>{t===C&&(T=!0,U(),n.size&&$())}))),e.disableAutoFinish||U(),setTimeout((()=>{v||(C.setStatus({code:l.TJ,message:"deadline_exceeded"}),y=g,C.end())}),A),C}},18960:function(t,e,n){n.d(e,{U:function(){return o},z:function(){return i}}),n(89463),n(44114);var s=n(3556),a=n(77164),r=n(84365);function i(t){if(!s.T)return;const{description:e="< unknown name >",op:n="< unknown op >",parent_span_id:i}=(0,r.et)(t),{spanId:o}=t.spanContext(),d=(0,r.pK)(t),u=(0,r.zU)(t),c=u===t,p=`[Tracing] Starting ${d?"sampled":"unsampled"} ${c?"root ":""}span`,l=[`op: ${n}`,`name: ${e}`,`ID: ${o}`];if(i&&l.push(`parent ID: ${i}`),!c){const{op:t,description:e}=(0,r.et)(u);l.push(`root ID: ${u.spanContext().spanId}`),t&&l.push(`root op: ${t}`),e&&l.push(`root description: ${e}`)}a.vF.log(`${p}\n  ${l.join("\n  ")}`)}function o(t){if(!s.T)return;const{description:e="< unknown name >",op:n="< unknown op >"}=(0,r.et)(t),{spanId:i}=t.spanContext(),o=`[Tracing] Finishing "${n}" ${(0,r.zU)(t)===t?"root ":""}span "${e}" with ID ${i}`;a.vF.log(o)}},73803:function(t,e,n){n.d(e,{$:function(){return i},X:function(){return r}}),n(9920),n(98992),n(3949);var s=n(20213),a=n(84365);function r(t,e,n,r=(0,a.Bk)()){const i=r&&(0,a.zU)(r);i&&i.addEvent(t,{[s.xc]:e,[s.Sn]:n})}function i(t){if(!t||0===t.length)return;const e={};return t.forEach((t=>{const n=t.attributes||{},a=n[s.Sn],r=n[s.xc];"string"==typeof a&&"number"==typeof r&&(e[t.name]={value:r,unit:a})})),e}},54558:function(t,e,n){n.d(e,{Z:function(){return o}});var s=n(3556),a=n(77164),r=n(89511),i=n(2155);function o(t,e){if(!(0,r.w)(t))return[!1];let n;n="function"==typeof t.tracesSampler?t.tracesSampler(e):void 0!==e.parentSampled?e.parentSampled:void 0!==t.tracesSampleRate?t.tracesSampleRate:1;const o=(0,i.i)(n);return void 0===o?(s.T&&a.vF.warn("[Tracing] Discarding transaction because of invalid sample rate."),[!1]):o?Math.random()<o?[!0,o]:(s.T&&a.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(n)})`),[!1,o]):(s.T&&a.vF.log("[Tracing] Discarding transaction because "+("function"==typeof t.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),[!1,o])}},17618:function(t,e,n){n.d(e,{w:function(){return r}});var s=n(8320),a=n(84365);class r{constructor(t={}){this._traceId=t.traceId||(0,s.eJ)(),this._spanId=t.spanId||(0,s.eJ)().substring(16)}spanContext(){return{spanId:this._spanId,traceId:this._traceId,traceFlags:a.CC}}end(t){}setAttribute(t,e){return this}setAttributes(t){return this}setStatus(t){return this}updateName(t){return this}isRecording(){return!1}addEvent(t,e,n){return this}addLink(t){return this}addLinks(t){return this}recordException(t,e){}}},45552:function(t,e,n){n.d(e,{W:function(){return g}}),n(44114),n(26910),n(33110),n(17333),n(9920),n(41393),n(98992),n(54520),n(3949),n(81454);var s=n(69222),a=n(3556),r=n(89432),i=n(73051),o=n(20213),d=n(77164),u=n(8320),c=n(93187),p=n(3673),l=n(84365),m=n(80708),f=n(18960),_=n(73803),h=n(56934);class g{constructor(t={}){this._traceId=t.traceId||(0,u.eJ)(),this._spanId=t.spanId||(0,u.eJ)().substring(16),this._startTime=t.startTimestamp||(0,p.zf)(),this._attributes={},this.setAttributes({[o.JD]:"manual",[o.uT]:t.op,...t.attributes}),this._name=t.name,t.parentSpanId&&(this._parentSpanId=t.parentSpanId),"sampled"in t&&(this._sampled=t.sampled),t.endTimestamp&&(this._endTime=t.endTimestamp),this._events=[],this._isStandaloneSpan=t.isStandalone,this._endTime&&this._onSpanEnded()}addLink(t){return this}addLinks(t){return this}recordException(t,e){}spanContext(){const{_spanId:t,_traceId:e,_sampled:n}=this;return{spanId:t,traceId:e,traceFlags:n?l.aO:l.CC}}setAttribute(t,e){return void 0===e?delete this._attributes[t]:this._attributes[t]=e,this}setAttributes(t){return Object.keys(t).forEach((e=>this.setAttribute(e,t[e]))),this}updateStartTime(t){this._startTime=(0,l.cI)(t)}setStatus(t){return this._status=t,this}updateName(t){return this._name=t,this.setAttribute(o.i_,"custom"),this}end(t){this._endTime||(this._endTime=(0,l.cI)(t),(0,f.U)(this),this._onSpanEnded())}getSpanJSON(){return(0,c.Ce)({data:this._attributes,description:this._name,op:this._attributes[o.uT],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:(0,l.yW)(this._status),timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[o.JD],_metrics_summary:(0,i.g)(this),profile_id:this._attributes[o.E1],exclusive_time:this._attributes[o.jG],measurements:(0,_.$)(this._events),is_segment:this._isStandaloneSpan&&(0,l.zU)(this)===this||void 0,segment_id:this._isStandaloneSpan?(0,l.zU)(this).spanContext().spanId:void 0})}isRecording(){return!this._endTime&&!!this._sampled}addEvent(t,e,n){a.T&&d.vF.log("[Tracing] Adding an event to span:",t);const s=S(e)?e:n||(0,p.zf)(),r=S(e)?{}:e||{},i={name:t,time:(0,l.cI)(s),attributes:r};return this._events.push(i),this}isStandaloneSpan(){return!!this._isStandaloneSpan}_onSpanEnded(){const t=(0,s.KU)();if(t&&t.emit("spanEnd",this),!this._isStandaloneSpan&&this!==(0,l.zU)(this))return;if(this._isStandaloneSpan)return void(this._sampled?function(t){const e=(0,s.KU)();if(!e)return;const n=t[1];n&&0!==n.length?e.sendEnvelope(t):e.recordDroppedEvent("before_send","span")}((0,r.lu)([this],t)):(a.T&&d.vF.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),t&&t.recordDroppedEvent("sample_rate","span")));const e=this._convertSpanToTransaction();e&&((0,h.L)(this).scope||(0,s.o5)()).captureEvent(e)}_convertSpanToTransaction(){if(!b((0,l.et)(this)))return;this._name||(a.T&&d.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this._name="<unlabeled transaction>");const{scope:t,isolationScope:e}=(0,h.L)(this),n=(t||(0,s.o5)()).getClient()||(0,s.KU)();if(!0!==this._sampled)return a.T&&d.vF.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),void(n&&n.recordDroppedEvent("sample_rate","transaction"));const r=(0,l.xO)(this).filter((t=>t!==this&&!function(t){return t instanceof g&&t.isStandaloneSpan()}(t))).map((t=>(0,l.et)(t))).filter(b),u=this._attributes[o.i_],p={contexts:{trace:(0,l.Ck)(this)},spans:r.length>1e3?r.sort(((t,e)=>t.start_timestamp-e.start_timestamp)).slice(0,1e3):r,start_timestamp:this._startTime,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{capturedSpanScope:t,capturedSpanIsolationScope:e,...(0,c.Ce)({dynamicSamplingContext:(0,m.k1)(this)})},_metrics_summary:(0,i.g)(this),...u&&{transaction_info:{source:u}}},f=(0,_.$)(this._events);return f&&Object.keys(f).length&&(a.T&&d.vF.log("[Measurements] Adding measurements to transaction event",JSON.stringify(f,void 0,2)),p.measurements=f),p}}function S(t){return t&&"number"==typeof t||t instanceof Date||Array.isArray(t)}function b(t){return!!(t.start_timestamp&&t.timestamp&&t.span_id&&t.trace_id)}},2045:function(t,e,n){n.d(e,{F3:function(){return a},N8:function(){return i},TJ:function(){return r},a3:function(){return s}});const s=0,a=1,r=2;function i(t,e){t.setAttribute("http.response.status_code",e);const n=function(t){if(t<400&&t>=100)return{code:a};if(t>=400&&t<500)switch(t){case 401:return{code:r,message:"unauthenticated"};case 403:return{code:r,message:"permission_denied"};case 404:return{code:r,message:"not_found"};case 409:return{code:r,message:"already_exists"};case 413:return{code:r,message:"failed_precondition"};case 429:return{code:r,message:"resource_exhausted"};case 499:return{code:r,message:"cancelled"};default:return{code:r,message:"invalid_argument"}}if(t>=500&&t<600)switch(t){case 501:return{code:r,message:"unimplemented"};case 503:return{code:r,message:"unavailable"};case 504:return{code:r,message:"deadline_exceeded"};default:return{code:r,message:"internal_error"}}return{code:r,message:"unknown_error"}}(e);"unknown_error"!==n.message&&t.setStatus(n)}},26562:function(t,e,n){n.d(e,{Uk:function(){return g},hb:function(){return S}});var s=n(61214),a=n(69222),r=n(48776),i=n(20213),o=n(89511),d=n(60831),u=n(84365),c=n(80708),p=n(18960),l=n(54558),m=n(17618),f=n(45552),_=n(56934);const h="__SENTRY_SUPPRESS_TRACING__";function g(t){const e=b();if(e.startInactiveSpan)return e.startInactiveSpan(t);const n=function(t){const e={isStandalone:(t.experimental||{}).standalone,...t};if(t.startTime){const n={...e};return n.startTimestamp=(0,u.cI)(t.startTime),delete n.startTime,n}return e}(t),{forceTransaction:s,parentSpan:r}=t;return(t.scope?e=>(0,a.v4)(t.scope,e):void 0!==r?t=>S(r,t):t=>t())((()=>{const e=(0,a.o5)(),r=function(t){const e=(0,d.f)(t);if(!e)return;const n=(0,a.KU)();return(n?n.getOptions():{}).parentSpanIsAlwaysRootSpan?(0,u.zU)(e):e}(e);return t.onlyIfParent&&!r?new m.w:function({parentSpan:t,spanArguments:e,forceTransaction:n,scope:s}){if(!(0,o.w)())return new m.w;const r=(0,a.rm)();let i;if(t&&!n)i=function(t,e,n){const{spanId:s,traceId:r}=t.spanContext(),i=!e.getScopeData().sdkProcessingMetadata[h]&&(0,u.pK)(t),o=i?new f.W({...n,parentSpanId:s,traceId:r,sampled:i}):new m.w({traceId:r});(0,u.Hu)(t,o);const d=(0,a.KU)();return d&&(d.emit("spanStart",o),n.endTimestamp&&d.emit("spanEnd",o)),o}(t,s,e),(0,u.Hu)(t,i);else if(t){const n=(0,c.k1)(t),{traceId:a,spanId:r}=t.spanContext(),o=(0,u.pK)(t);i=v({traceId:a,parentSpanId:r,...e},s,o),(0,c.LZ)(i,n)}else{const{traceId:t,dsc:n,parentSpanId:a,sampled:o}={...r.getPropagationContext(),...s.getPropagationContext()};i=v({traceId:t,parentSpanId:a,...e},s,o),n&&(0,c.LZ)(i,n)}return(0,p.z)(i),(0,_.d)(i,s,r),i}({parentSpan:r,spanArguments:n,forceTransaction:s,scope:e})}))}function S(t,e){const n=b();return n.withActiveSpan?n.withActiveSpan(t,e):(0,a.v4)((n=>((0,d.r)(n,t||void 0),e(n))))}function b(){const t=(0,s.E)();return(0,r.h)(t)}function v(t,e,n){const s=(0,a.KU)(),r=s&&s.getOptions()||{},{name:o="",attributes:d}=t,[u,c]=e.getScopeData().sdkProcessingMetadata[h]?[!1]:(0,l.Z)(r,{name:o,parentSampled:n,attributes:d,transactionContext:{name:o,parentSampled:n}}),p=new f.W({...t,attributes:{[i.i_]:"custom",...t.attributes},sampled:u});return void 0!==c&&p.setAttribute(i.sy,c),s&&s.emit("spanStart",p),p}},56934:function(t,e,n){n.d(e,{L:function(){return o},d:function(){return i}});var s=n(93187);const a="_sentryScope",r="_sentryIsolationScope";function i(t,e,n){t&&((0,s.my)(t,r,n),(0,s.my)(t,a,e))}function o(t){return{scope:t[a],isolationScope:t[r]}}}}]);
//# sourceMappingURL=4293.e1dd7881a09d24f5ff0b.js.map