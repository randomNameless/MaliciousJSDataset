"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([["Datasource-component"],{"./src/app/core/lib/calendar.ts":(e,s,t)=>{t.d(s,{HA:()=>o,QK:()=>a,QV:()=>n,iT:()=>r});const r=e=>{if(e){const{event_date:s}=e;if(s?.value.length)return s.value[0]?.begin}return null},o=e=>{if(e){const{event_date:s}=e;if(s?.value.length)return s.value[0]?.end}return null},n=e=>{let{venue_name:s}=e;return s?.value??null},a=e=>{let{venue_address:s}=e;return s?.value??null}},"./src/app/core/page-blocks/datasource/Datasource.component.tsx":(e,s,t)=>{t.r(s),t.d(s,{Datasource:()=>x,DatasourceFeedItem:()=>_,default:()=>g});var r=t("../../../node_modules/.pnpm/@loadable+component@5.15.3_react@17.0.2/node_modules/@loadable/component/dist/loadable.esm.js"),o=t("../../../node_modules/.pnpm/mobx-react@7.2.0_mobx@6.3.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/mobx-react/dist/mobxreact.esm.js"),n=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),a=t("../../../packages/renderer/shared/core/src/lib/guards.ts"),c=t("../../../packages/renderer/shared/core/src/lib/ads.ts"),d=t("../../../packages/shared/webapi/src/generated/webapi.g.ts"),l=t("./src/app/core/ui/index.ts"),i=t("./src/app/core/page-blocks/Ad.component.tsx"),u=t("./src/app/core/page-blocks/datasource/NoFeedItemMessage.component.tsx"),m=t("./src/app/core/lib/calendar.ts"),p=t("./src/app/core/lib/content.ts"),h=t("../../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const b=(0,r.ZP)({resolved:{},chunkName:()=>"LeadFeedItem-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("LeadFeedItem-component").then(t.bind(t,"./src/app/core/page-blocks/datasource/LeadFeedItem.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/page-blocks/datasource/LeadFeedItem.component.tsx"}}),v=(0,r.ZP)({resolved:{},chunkName:()=>"ContentFeedItem-component",isReady(e){const s=this.resolve(e);return!0===this.resolved[s]&&!!t.m[s]},importAsync:()=>t.e("ContentFeedItem-component").then(t.bind(t,"./src/app/core/page-blocks/datasource/ContentFeedItem.component.tsx")),requireAsync(e){const s=this.resolve(e);return this.resolved[s]=!1,this.importAsync(e).then((e=>(this.resolved[s]=!0,e)))},requireSync(e){const s=this.resolve(e);return t(s)},resolve(){return"./src/app/core/page-blocks/datasource/ContentFeedItem.component.tsx"}}),_=e=>{let{item:s,index:t,showEyebrow:r,displayHints:o,showDateStamp:n,microsite:c}=e;const{style:l}=o;if(!(0,a.IL)(s))return null;switch(s.type){case d.ASC.Publishing:return(0,a.F8)(s.record)?(0,h.jsx)(v,{item:s.record,index:t,showEyebrow:r,showDateStamp:n,datetime:(0,m.iT)(s.record.payload.fields)??s.record.pub_start,layout:(0,p.G0)(l)}):(0,a.D3)(s.record)?(0,h.jsx)(v,{item:s.record,index:t,showEyebrow:r,showDateStamp:n,datetime:s.record.pub_start,layout:(0,p.G0)(l,c)}):null;case d.ASC.Leads:return(0,a.Dw)(s.record)?(0,h.jsx)(b,{displayHints:o,lead:s.record,index:t}):null;default:return null}},x=(0,o.f3)("store")((0,o.Pi)((e=>{const{title:s,content:t,feedId:r,block:o,displayHints:a,store:d}=e;if(!t?.length)return e.displayHints.hints?.includes("display-hints/message-for-no-results")?(0,h.jsx)(u.k,{}):null;const m=(0,n.useMemo)((()=>e.heading??{level:2}),[e.heading]),p=(0,n.useMemo)((()=>({value:{...o.value}})),[o.value]),{showEyebrow:b,enableLoadMore:v,showDateStamp:x}=a,g=(0,n.useMemo)((()=>o.value.size||10),[o.value.size]),y=(0,n.useMemo)((()=>(0,c.tI)(o.value.position)),[o.value.position]),w=(0,n.useMemo)((()=>s?(0,h.jsx)(l.X6,{...m,children:s}):null),[s,m]),j=(0,n.useMemo)((()=>t.map(((e,s)=>{const o=(0,c.tU)(t.length,g,s,v);return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(_,{item:e,displayHints:a,index:s,showEyebrow:b,showDateStamp:x,microsite:d?.microsite}),y&&o?(0,h.jsx)("div",{className:"load-more-ad",children:(0,h.jsx)(i.AdPosition,{block:p,batchId:`${r}-${Math.ceil(s/g)}`})}):null]},`feed-item-${r}-${e.ref_id}-${s}`)}))),[p,g,t,a,v,r,y,b,x,d?.microsite]);return(0,h.jsxs)(n.Fragment,{children:[w,(0,h.jsx)("div",{className:"feed-cards","data-block-id":o.id,suppressHydrationWarning:!0,children:(0,h.jsx)(l.rj,{columns:a.columns,children:j})})]},o.id)}))),g=x}}]);
//# sourceMappingURL=Datasource-component.1423c7d635806130822c.js.map