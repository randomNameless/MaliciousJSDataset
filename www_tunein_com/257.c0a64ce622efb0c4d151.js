!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="af3d002b-2ba5-45da-941f-af4d0960e245",t._sentryDebugIdIdentifier="sentry-dbid-af3d002b-2ba5-45da-941f-af4d0960e245")}catch(t){}}();var _sentryModuleMetadataGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_sentryModuleMetadataGlobal._sentryModuleMetadata=_sentryModuleMetadataGlobal._sentryModuleMetadata||{},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack]=Object.assign({},_sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack],{"_sentryBundlerPluginAppKey:gemini-web":!0});var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6.77.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[257],{9942:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(93187);const o="7";function r(t,e,n){return e||`${function(t){return`${function(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){return(0,s.u4)({sentry_key:t.publicKey,sentry_version:o,...e&&{sentry_client:`${e.name}/${e.version}`}})}(t,n)}`}},48776:function(t,e,n){n.d(e,{h:function(){return r}});var s=n(61214),o=n(76573);function r(t){const e=(0,s.S)(t);return e.acs?e.acs:(0,o.z)()}},76573:function(t,e,n){n.d(e,{z:function(){return l}}),n(44114);var s=n(54590),o=n(83294),r=n(85616),i=n(61214);class c{constructor(t,e){let n,s;n=t||new o.H,s=e||new o.H,this._stack=[{scope:n}],this._isolationScope=s}withScope(t){const e=this._pushScope();let n;try{n=t(e)}catch(t){throw this._popScope(),t}return(0,r.Qg)(n)?n.then((t=>(this._popScope(),t)),(t=>{throw this._popScope(),t})):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return!(this._stack.length<=1||!this._stack.pop())}}function a(){const t=(0,i.E)(),e=(0,i.S)(t);return e.stack=e.stack||new c((0,s.r)(),(0,s.q)())}function u(t){return a().withScope(t)}function d(t,e){const n=a();return n.withScope((()=>(n.getStackTop().scope=t,e(t))))}function p(t){return a().withScope((()=>t(a().getIsolationScope())))}function l(){return{withIsolationScope:p,withScope:u,withSetScope:d,withSetIsolationScope:(t,e)=>p(e),getCurrentScope:()=>a().getScope(),getIsolationScope:()=>a().getIsolationScope()}}},5978:function(t,e,n){n.d(e,{V:function(){return w}}),n(44114),n(9920),n(41393),n(8159),n(98992),n(3949),n(81454),n(37550);var s=n(9942),o=n(69222),r=n(3556),i=n(89432),c=n(99796),a=n(87642),u=n(80708),d=n(68829),p=n(63815),l=n(53032),h=n(69628),f=n(85616),_=n(77164),g=n(8320),v=n(93187),S=n(57914),m=n(2155),E=n(90827);const b="Not capturing exception because it's already been captured.";class w{constructor(t){if(this._options=t,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=(0,p.AD)(t.dsn):r.T&&_.vF.warn("No DSN provided, client will not send events."),this._dsn){const e=(0,s.Z)(this._dsn,t.tunnel,t._metadata?t._metadata.sdk:void 0);this._transport=t.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:e})}}captureException(t,e,n){const s=(0,g.eJ)();if((0,g.GR)(t))return r.T&&_.vF.log(b),s;const o={event_id:s,...e};return this._process(this.eventFromException(t,o).then((t=>this._captureEvent(t,o,n)))),o.event_id}captureMessage(t,e,n,s){const o={event_id:(0,g.eJ)(),...n},r=(0,f.NF)(t)?t:String(t),i=(0,f.sO)(t)?this.eventFromMessage(r,e,o):this.eventFromException(t,o);return this._process(i.then((t=>this._captureEvent(t,o,s)))),o.event_id}captureEvent(t,e,n){const s=(0,g.eJ)();if(e&&e.originalException&&(0,g.GR)(e.originalException))return r.T&&_.vF.log(b),s;const o={event_id:s,...e},i=(t.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(t,o,i||n)),o.event_id}captureSession(t){"string"!=typeof t.release?r.T&&_.vF.warn("Discarded session because of missing or non-string release"):(this.sendSession(t),(0,a.qO)(t,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const e=this._transport;return e?(this.emit("flush"),this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n&&t))))):(0,S.XW)(!0)}close(t){return this.flush(t).then((t=>(this.getOptions().enabled=!1,this.emit("close"),t)))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}init(){(this._isEnabled()||this._options.integrations.some((({name:t})=>t.startsWith("Spotlight"))))&&this._setupIntegrations()}getIntegrationByName(t){return this._integrations[t]}addIntegration(t){const e=this._integrations[t.name];(0,c.qm)(this,t,this._integrations),e||(0,c.lc)(this,[t])}sendEvent(t,e={}){this.emit("beforeSendEvent",t,e);let n=(0,i.V7)(t,this._dsn,this._options._metadata,this._options.tunnel);for(const t of e.attachments||[])n=(0,l.W3)(n,(0,l.bm)(t));const s=this.sendEnvelope(n);s&&s.then((e=>this.emit("afterSendEvent",t,e)),null)}sendSession(t){const e=(0,i.LE)(t,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(e)}recordDroppedEvent(t,e,n){if(this._options.sendClientReports){const s="number"==typeof n?n:1,o=`${t}:${e}`;r.T&&_.vF.log(`Recording outcome: "${o}"${s>1?` (${s} times)`:""}`),this._outcomes[o]=(this._outcomes[o]||0)+s}}on(t,e){const n=this._hooks[t]=this._hooks[t]||[];return n.push(e),()=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)}}emit(t,...e){const n=this._hooks[t];n&&n.forEach((t=>t(...e)))}sendEnvelope(t){return this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport?this._transport.send(t).then(null,(t=>(r.T&&_.vF.error("Error while sending envelope:",t),t))):(r.T&&_.vF.error("Transport disabled"),(0,S.XW)({}))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=(0,c.P$)(this,t),(0,c.lc)(this,t)}_updateSessionFromEvent(t,e){let n=!1,s=!1;const o=e.exception&&e.exception.values;if(o){s=!0;for(const t of o){const e=t.mechanism;if(e&&!1===e.handled){n=!0;break}}}const r="ok"===t.status;(r&&0===t.errors||r&&n)&&((0,a.qO)(t,{...n&&{status:"crashed"},errors:t.errors||Number(s||n)}),this.captureSession(t))}_isClientDoneProcessing(t){return new S.T2((e=>{let n=0;const s=setInterval((()=>{0==this._numProcessing?(clearInterval(s),e(!0)):(n+=1,t&&n>=t&&(clearInterval(s),e(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(t,e,n,s=(0,o.rm)()){const r=this.getOptions(),i=Object.keys(this._integrations);return!e.integrations&&i.length>0&&(e.integrations=i),this.emit("preprocessEvent",t,e),t.type||s.setLastEventId(t.event_id||e.event_id),(0,E.mG)(r,t,e,n,this,s).then((t=>{if(null===t)return t;const e={...s.getPropagationContext(),...n?n.getPropagationContext():void 0};if((!t.contexts||!t.contexts.trace)&&e){const{traceId:n,spanId:s,parentSpanId:o,dsc:r}=e;t.contexts={trace:(0,v.Ce)({trace_id:n,span_id:s,parent_span_id:o}),...t.contexts};const i=r||(0,u.lF)(n,this);t.sdkProcessingMetadata={dynamicSamplingContext:i,...t.sdkProcessingMetadata}}return t}))}_captureEvent(t,e={},n){return this._processEvent(t,e,n).then((t=>t.event_id),(t=>{if(r.T){const e=t;"log"===e.logLevel?_.vF.log(e.message):_.vF.warn(e)}}))}_processEvent(t,e,n){const s=this.getOptions(),{sampleRate:o}=s,r=k(t),i=y(t),c=t.type||"error",a=`before send for type \`${c}\``,u=void 0===o?void 0:(0,m.i)(o);if(i&&"number"==typeof u&&Math.random()>u)return this.recordDroppedEvent("sample_rate","error",t),(0,S.xg)(new h.U(`Discarding event because it's not included in the random sample (sampling rate = ${o})`,"log"));const d="replay_event"===c?"replay":c,p=(t.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(t,e,n,p).then((n=>{if(null===n)throw this.recordDroppedEvent("event_processor",d,t),new h.U("An event processor returned `null`, will not send event.","log");if(e.data&&!0===e.data.__sentry__)return n;const o=function(t,e,n,s){const{beforeSend:o,beforeSendTransaction:r,beforeSendSpan:i}=e;if(y(n)&&o)return o(n,s);if(k(n)){if(n.spans&&i){const e=[];for(const s of n.spans){const n=i(s);n?e.push(n):t.recordDroppedEvent("before_send","span")}n.spans=e}if(r){if(n.spans){const t=n.spans.length;n.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:t}}return r(n,s)}}return n}(this,s,n,e);return function(t,e){const n=`${e} must return \`null\` or a valid event.`;if((0,f.Qg)(t))return t.then((t=>{if(!(0,f.Qd)(t)&&null!==t)throw new h.U(n);return t}),(t=>{throw new h.U(`${e} rejected with ${t}`)}));if(!(0,f.Qd)(t)&&null!==t)throw new h.U(n);return t}(o,a)})).then((s=>{if(null===s){if(this.recordDroppedEvent("before_send",d,t),r){const e=1+(t.spans||[]).length;this.recordDroppedEvent("before_send","span",e)}throw new h.U(`${a} returned \`null\`, will not send event.`,"log")}const o=n&&n.getSession();if(!r&&o&&this._updateSessionFromEvent(o,s),r){const t=(s.sdkProcessingMetadata&&s.sdkProcessingMetadata.spanCountBeforeProcessing||0)-(s.spans?s.spans.length:0);t>0&&this.recordDroppedEvent("before_send","span",t)}const i=s.transaction_info;if(r&&i&&s.transaction!==t.transaction){const t="custom";s.transaction_info={...i,source:t}}return this.sendEvent(s,e),s})).then(null,(t=>{if(t instanceof h.U)throw t;throw this.captureException(t,{data:{__sentry__:!0},originalException:t}),new h.U(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)}))}_process(t){this._numProcessing++,t.then((t=>(this._numProcessing--,t)),(t=>(this._numProcessing--,t)))}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.entries(t).map((([t,e])=>{const[n,s]=t.split(":");return{reason:n,category:s,quantity:e}}))}_flushOutcomes(){r.T&&_.vF.log("Flushing outcomes...");const t=this._clearOutcomes();if(0===t.length)return void(r.T&&_.vF.log("No outcomes to send"));if(!this._dsn)return void(r.T&&_.vF.log("No dsn provided, will not send outcomes"));r.T&&_.vF.log("Sending outcomes:",t);const e=(0,d.m)(t,this._options.tunnel&&(0,p.SB)(this._dsn));this.sendEnvelope(e)}}function y(t){return void 0===t.type}function k(t){return"transaction"===t.type}},11368:function(t,e,n){n.d(e,{Z:function(){return c}});var s=n(69222),o=n(77164),r=n(3673);const i=100;function c(t,e){const n=(0,s.KU)(),c=(0,s.rm)();if(!n)return;const{beforeBreadcrumb:a=null,maxBreadcrumbs:u=i}=n.getOptions();if(u<=0)return;const d={timestamp:(0,r.lu)(),...t},p=a?(0,o.pq)((()=>a(d,e))):d;null!==p&&(n.emit&&n.emit("beforeAddBreadcrumb",p,e),c.addBreadcrumb(p,u))}},61214:function(t,e,n){n.d(e,{E:function(){return r},S:function(){return i}});var s=n(3258),o=n(79549);function r(){return i(o.O),o.O}function i(t){const e=t.__SENTRY__=t.__SENTRY__||{};return e.version=e.version||s.M,e[s.M]=e[s.M]||{}}},90959:function(t,e,n){n.d(e,{U:function(){return s}});const s="production"},69222:function(t,e,n){n.d(e,{KU:function(){return p},m6:function(){return u},o5:function(){return c},rm:function(){return a},v4:function(){return d}});var s=n(48776),o=n(61214),r=n(83294),i=n(79549);function c(){const t=(0,o.E)();return(0,s.h)(t).getCurrentScope()}function a(){const t=(0,o.E)();return(0,s.h)(t).getIsolationScope()}function u(){return(0,i.B)("globalScope",(()=>new r.H))}function d(...t){const e=(0,o.E)(),n=(0,s.h)(e);if(2===t.length){const[e,s]=t;return e?n.withSetScope(e,s):n.withScope(s)}return n.withScope(t[0])}function p(){return c().getClient()}},3556:function(t,e,n){n.d(e,{T:function(){return s}});const s=!1},54590:function(t,e,n){n.d(e,{q:function(){return i},r:function(){return r}});var s=n(83294),o=n(79549);function r(){return(0,o.B)("defaultCurrentScope",(()=>new s.H))}function i(){return(0,o.B)("defaultIsolationScope",(()=>new s.H))}},89432:function(t,e,n){n.d(e,{LE:function(){return c},V7:function(){return a},lu:function(){return u}}),n(44114);var s=n(80708),o=n(63815),r=n(53032),i=n(84365);function c(t,e,n,s){const i=(0,r.Cj)(n),c={sent_at:(new Date).toISOString(),...i&&{sdk:i},...!!s&&e&&{dsn:(0,o.SB)(e)}},a="aggregates"in t?[{type:"sessions"},t]:[{type:"session"},t.toJSON()];return(0,r.h4)(c,[a])}function a(t,e,n,s){const o=(0,r.Cj)(n),i=t.type&&"replay_event"!==t.type?t.type:"event";!function(t,e){e&&(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||e.name,t.sdk.version=t.sdk.version||e.version,t.sdk.integrations=[...t.sdk.integrations||[],...e.integrations||[]],t.sdk.packages=[...t.sdk.packages||[],...e.packages||[]])}(t,n&&n.sdk);const c=(0,r.n2)(t,o,s,e);delete t.sdkProcessingMetadata;const a=[{type:i},t];return(0,r.h4)(c,[a])}function u(t,e){const n=(0,s.k1)(t[0]),c=e&&e.getDsn(),a=e&&e.getOptions().tunnel,u={sent_at:(new Date).toISOString(),...function(t){return!!t.trace_id&&!!t.public_key}(n)&&{trace:n},...!!a&&c&&{dsn:(0,o.SB)(c)}},d=e&&e.getOptions().beforeSendSpan,p=d?t=>d((0,i.et)(t)):t=>(0,i.et)(t),l=[];for(const e of t){const t=p(e);t&&l.push((0,r.y5)(t))}return(0,r.h4)(u,l)}},31691:function(t,e,n){n.d(e,{j:function(){return c}});var s=n(3556),o=n(85616),r=n(77164),i=n(57914);function c(t,e,n,a=0){return new i.T2(((i,u)=>{const d=t[a];if(null===e||"function"!=typeof d)i(e);else{const p=d({...e},n);s.T&&d.id&&null===p&&r.vF.log(`Event processor "${d.id}" dropped event`),(0,o.Qg)(p)?p.then((e=>c(t,e,n,a+1).then(i))).then(null,u):c(t,p,n,a+1).then(i).then(null,u)}}))}},62965:function(t,e,n){n.d(e,{Cp:function(){return a},J0:function(){return d},J5:function(){return h},r:function(){return u}});var s=n(90959),o=n(69222),r=n(87642),i=n(79549),c=n(90827);function a(t,e){return(0,o.o5)().captureException(t,(0,c.li)(e))}function u(t,e){return(0,o.o5)().captureEvent(t,e)}function d(t){const e=(0,o.KU)(),n=(0,o.rm)(),c=(0,o.o5)(),{release:a,environment:u=s.U}=e&&e.getOptions()||{},{userAgent:d}=i.O.navigator||{},l=(0,r.fj)({release:a,environment:u,user:c.getUser()||n.getUser(),...d&&{userAgent:d},...t}),h=n.getSession();return h&&"ok"===h.status&&(0,r.qO)(h,{status:"exited"}),p(),n.setSession(l),c.setSession(l),l}function p(){const t=(0,o.rm)(),e=(0,o.o5)(),n=e.getSession()||t.getSession();n&&(0,r.Vu)(n),l(),t.setSession(),e.setSession()}function l(){const t=(0,o.rm)(),e=(0,o.o5)(),n=(0,o.KU)(),s=e.getSession()||t.getSession();s&&n&&n.captureSession(s)}function h(t=!1){t?p():l()}}}]);
//# sourceMappingURL=257.c0a64ce622efb0c4d151.js.map