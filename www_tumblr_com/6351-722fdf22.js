!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7362ff73-9133-43a9-b84a-1aca10c7659d",e._sentryDebugIdIdentifier="sentry-dbid-7362ff73-9133-43a9-b84a-1aca10c7659d")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[6351],{71980:(e,t,n)=>{n.d(t,{U:()=>f,w:()=>m});var r=n(49315),i=n(42937),o=n(90789),s=n(4613),a=n(373),u=n(3016);let l=a.z.object({name:a.z.string(),url:a.z.string(),avatarUrl:a.z.string(),isInvited:a.z.boolean(),isMember:a.z.boolean(),bannedAt:a.z.number().optional(),bannedBy:a.z.string().optional(),title:a.z.string().optional(),uuid:a.z.string().optional()}),c=(0,o.h)(a.z.object({blogs:a.z.array(l)})),m=(e,t)=>[...u.T,"invite-typeahead",e,t],f=(e,t)=>{let{apiFetchWithSchema:n}=(0,s.Us)();return(0,r.I)({queryKey:m(e,t),queryFn:async()=>(await n(`/v2/communities/${e}/invite_typeahead/${t}`,c)).response.blogs,placeholderData:i.rX})}},30617:(e,t,n)=>{n.d(t,{DQ:()=>w,Em:()=>k,Mg:()=>p,Qh:()=>b,h6:()=>y,yh:()=>E,zl:()=>g});var r=n(8254),i=n(75170),o=n(73214),s=n(25857),a=n(36665),u=n(90789),l=n(4613),c=n(56281),m=n(373),f=n(82301),d=n(71980),h=n(3016);let g=e=>{let{_c:t,apiFetch:n}=(0,l.Us)(),u=(0,r.jE)(),{handleError:c}=(0,s.K)({fallbackErrorMessage:t("Error message shown when inviting user to community failed","Something went wrong with the invite, please try again later.")}),{refresh:m}=(0,a.useMemo)(()=>(0,o.yU)({communityId:e}),[e]).useData();return(0,i.n)({mutationFn:({recipientBlog:t})=>n(`/v2/communities/${e}/invitations`,{method:"PUT",body:{recipient_blog:t}}),onSuccess:async(t,{currentInviteTypeaheadInputValue:n,onSuccessAndQueryInvalidation:r})=>{m(),await u.invalidateQueries({queryKey:(0,d.w)(e,n)}),r()},onError:e=>{c(e)}})},v=({communityId:e,invalidateFn:t,successMessage:n,errorMessage:r})=>{let{apiFetch:o}=(0,l.Us)(),{toggleToast:s}=(0,c.Y)();return(0,i.n)({mutationFn:({invitedBlog:t})=>o(`/v2/communities/${e}/invitations/${t}`,{method:"DELETE"}),onSuccess:()=>{t(),s(n,"success")},onError:()=>{s(r,"error")}})},p=e=>{let{_c:t}=(0,l.Us)(),n=(0,r.jE)();return v({communityId:e,invalidateFn:()=>{n.invalidateQueries({queryKey:(0,f.XU)(e)})},successMessage:t("Success message after declining invitation to join community","Invitation declined"),errorMessage:t("Error message shown when declining invitation to join community failed","Something went wrong when trying to decline the invitation. Please try again later.")})},w=e=>{let{_c:t}=(0,l.Us)(),n=(0,r.jE)(),{refresh:i}=(0,a.useMemo)(()=>(0,o.yU)({communityId:e}),[e]).useData();return v({communityId:e,invalidateFn:()=>{i(),n.invalidateQueries({queryKey:(0,f.XU)(e)})},successMessage:t("Success message after admin cancels user invitation to a community","Invitation canceled"),errorMessage:t("Error message for canceling a user invitation by an admin","Something went wrong when trying to cancel the invitation. Please try again later.")})},y=e=>{let{_c:t,apiFetch:n}=(0,l.Us)(),{toggleToast:r}=(0,c.Y)();return(0,i.n)({mutationFn:t=>n(`/v2/communities/${e}/members`,{method:"PUT",...t&&{body:{invite_hash:t}}}),onError:()=>{r(t("Error message shown when accepting the invite to community failed","Something went wrong while accepting the invite, please try again later"),"error")}})},b=(e,t)=>{let{_c:n,apiFetch:o}=(0,l.Us)(),a=(0,r.jE)(),{handleError:u}=(0,s.K)({fallbackErrorMessage:n("Error message shown when leaving community failed","Something went wrong when trying to leave the community. Please try again later")});return(0,i.n)({mutationFn:()=>o(`/v2/communities/${e}/members/${t}`,{method:"DELETE"}),onSuccess:()=>{a.invalidateQueries({queryKey:h.T})},onError:e=>{u(e)}})},E=(e,t)=>{let{_c:n,apiFetch:r}=(0,l.Us)(),{toggleToast:o}=(0,c.Y)(),{handleError:a}=(0,s.K)({fallbackErrorMessage:n("Error message shown when removing a community member failed","Something went wrong when trying to remove this member. Please try again later.")}),u=t?.useUpdater();return(0,i.n)({mutationFn:({banUser:t,blogName:n,note:i,reason:o})=>r(`/v2/communities/${e}/members/${n}`,{method:"DELETE",body:{reason:o,note:i,ban_user:t}}),onSuccess:(e,{blogName:t})=>{o(n("Success message after removing a community member","@%1$s has been removed.",[t]),"success"),u?.removeItems(e=>e.name===t)},onError:e=>{a(e)}})},S=(0,u.h)(m.z.object({inviteLink:m.z.string()})),k=e=>{let{_c:t,apiFetchWithSchema:n}=(0,l.Us)(),o=(0,r.jE)(),{handleError:a}=(0,s.K)({fallbackErrorMessage:t("Error message shown when refreshing invite link for failed","Something went wrong when refreshing the link, please try again later.")});return(0,i.n)({mutationFn:async()=>await n(`/v2/communities/${e}/invite_hash`,S,{method:"POST"}),onSuccess:async()=>{await (0,f.tI)(e,o)},onError:e=>{a(e)}})}},73214:(e,t,n)=>{n.d(t,{Pk:()=>l,yU:()=>c});var r=n(81896),i=n(35870),o=n(76793);let s=(e,t)=>{let{before:n}=(0,i.J)(e);if(!n)return t;let r=new URLSearchParams(t);return r.set("before",n),r},a=(e,t)=>({items:e.response.invitations,link:t,nextLink:e.response.links?.next?.href,prevLink:e.response.links?.prev?.href}),u=({communityId:e})=>async({apiFetchWithSchema:t},n)=>a(n?await t(n,o.Fv):await t(`/v2/communities/${e}/invitations`,o.Fv),n),l=e=>`${e.sender.uuid}-${e.recipient.uuid}-${e.sentOn}`,c=({communityId:e})=>(0,r.R)({moduleId:`community-pending-invites-${e}`,getStableIdForItem:l,fetchResults:u({communityId:e}),forcePersistence:!0,getSearchParamsForCurrentPage:s})},47794:(e,t,n)=>{function r(e){return new Promise((t,n)=>{setTimeout(async()=>{try{return await navigator.clipboard.writeText(e),t()}catch(e){n()}})})}function i(e){e.focus(),e.select();let t=!1;try{t=document.execCommand("copy")}catch(e){}return e.blur(),t}n.d(t,{D:()=>r,a:()=>i})},90804:(e,t,n)=>{n.d(t,{Kw:()=>o,n0:()=>a,pR:()=>s});var r=n(54885),i=(0,n(66034).B0)([r.wf],[r.s1]);i.useContext,i.useScopedContext;var o=i.useProviderContext,s=i.ContextProvider,a=i.ScopedContextProvider},10246:(e,t,n)=>{function r(e){return[e.clientX,e.clientY]}function i(e,t){let[n,r]=e,i=!1,o=t.length;for(let e=0,s=o-1;e<o;s=e++){let[a,u]=t[e],[l,c]=t[s],[,m]=t[0===s?o-1:s-1]||[0,0],f=(u-c)*(n-a)-(a-l)*(r-u);if(c<u){if(r>=c&&r<u){if(0===f)return!0;f>0&&(r===c?r>m&&(i=!i):i=!i)}}else if(u<c){if(r>u&&r<=c){if(0===f)return!0;f<0&&(r===c?r<m&&(i=!i):i=!i)}}else if(r===u&&(n>=l&&n<=a||n>=a&&n<=l))return!0}return i}function o(e,t){let n=e.getBoundingClientRect(),{top:r,right:i,bottom:o,left:s}=n,[a,u]=function(e,t){let{top:n,right:r,bottom:i,left:o}=t,[s,a]=e;return[s<o?"left":s>r?"right":null,a<n?"top":a>i?"bottom":null]}(t,n),l=[t];return a?("top"!==u&&l.push(["left"===a?s:i,r]),l.push(["left"===a?i:s,r]),l.push(["left"===a?i:s,o]),"bottom"!==u&&l.push(["left"===a?s:i,o])):"top"===u?(l.push([s,r]),l.push([s,o]),l.push([i,o]),l.push([i,r])):(l.push([s,o]),l.push([s,r]),l.push([i,r]),l.push([i,o])),l}n.d(t,{B:()=>E,a:()=>b});var s=n(13256),a=n(47752),u=n(90804),l=n(66034),c=n(21368),m=n(47766),f=n(61995),d=n(41009),h=n(62990),g=n(96723),v=n(63130),p=n(36665),w=n(60397),y=(0,p.createContext)(null),b=(0,l.ab)(function(e){var{store:t,modal:n=!1,portal:a=!!n,hideOnEscape:l=!0,hideOnHoverOutside:b=!0,disablePointerEventsOnApproach:E=!!b}=e,S=(0,m.YG)(e,["store","modal","portal","hideOnEscape","hideOnHoverOutside","disablePointerEventsOnApproach"]);let k=(0,u.Kw)();t=t||k,(0,g.V1)(t,!1);let P=(0,p.useRef)(null),[U,F]=(0,p.useState)([]),$=(0,p.useRef)(0),_=(0,p.useRef)(null),{portalRef:z,domReady:I}=(0,c.TE)(a,S.portalRef),R=(0,c.P$)(),T=!!b,D=(0,c.O4)(b),O=!!E,x=(0,c.O4)(E),j=t.useState("open"),A=t.useState("mounted");(0,p.useEffect)(()=>{if(!I||!A||!T&&!O)return;let e=P.current;if(e)return(0,g.cy)((0,d.dg)("mousemove",n=>{if(!t||!R())return;let{anchorElement:s,hideTimeout:a,timeout:u}=t.getState(),l=_.current,[c]=n.composedPath();if(function e(t,n,r,i){return!!(0,h.oW)(n)||!!t&&!!((0,f.gR)(n,t)||r&&(0,f.gR)(r,t)||(null==i?void 0:i.some(n=>e(t,n,r))))}(c,e,s,U)){_.current=c&&s&&(0,f.gR)(s,c)?r(n):null,window.clearTimeout($.current),$.current=0;return}if(!$.current){if(l){let t=r(n);if(i(t,o(e,l))){if(_.current=t,!x(n))return;n.preventDefault(),n.stopPropagation();return}}D(n)&&($.current=window.setTimeout(()=>{$.current=0,null==t||t.hide()},null!=a?a:u))}},!0),()=>clearTimeout($.current))},[t,R,I,A,T,O,U,x,D]),(0,p.useEffect)(()=>{if(!I||!A||!O)return;let e=e=>{let t=P.current;if(!t)return;let n=_.current;if(!n)return;let s=o(t,n);if(i(r(e),s)){if(!x(e))return;e.preventDefault(),e.stopPropagation()}};return(0,g.cy)((0,d.dg)("mouseenter",e,!0),(0,d.dg)("mouseover",e,!0),(0,d.dg)("mouseout",e,!0),(0,d.dg)("mouseleave",e,!0))},[I,A,O,x]),(0,p.useEffect)(()=>{I&&(j||null==t||t.setAutoFocusOnShow(!1))},[t,I,j]);let C=(0,c.hX)(j);(0,p.useEffect)(()=>{if(I)return()=>{C.current||null==t||t.setAutoFocusOnShow(!1)}},[t,I]);let K=(0,p.useContext)(y);(0,c.UQ)(()=>{if(n||!a||!A||!I)return;let e=P.current;if(e)return null==K?void 0:K(e)},[n,a,A,I]);let M=(0,p.useCallback)(e=>{F(t=>[...t,e]);let t=null==K?void 0:K(e);return()=>{F(t=>t.filter(t=>t!==e)),null==t||t()}},[K]);S=(0,c.w7)(S,e=>/* @__PURE__ */(0,w.jsx)(u.n0,{value:t,children:/* @__PURE__ */(0,w.jsx)(y.Provider,{value:M,children:e})}),[t,M]),S=(0,m.ko)((0,m.IA)({},S),{ref:(0,c.SV)(P,S.ref)}),S=function(e){var{store:t}=e,n=(0,m.YG)(e,["store"]);let[r,i]=(0,p.useState)(!1),o=t.useState("mounted");(0,p.useEffect)(()=>{o||i(!1)},[o]);let s=n.onFocus,a=(0,c._q)(e=>{null==s||s(e),e.defaultPrevented||i(!0)}),u=(0,p.useRef)(null);return(0,p.useEffect)(()=>(0,v.OH)(t,["anchorElement"],e=>{u.current=e.anchorElement}),[]),n=(0,m.ko)((0,m.IA)({autoFocusOnHide:r,finalFocus:u},n),{onFocus:a})}((0,m.IA)({store:t},S));let q=t.useState(e=>n||e.autoFocusOnShow);return(0,s.f)((0,m.ko)((0,m.IA)({store:t,modal:n,portal:a,autoFocusOnShow:q},S),{portalRef:z,hideOnEscape:e=>!(0,g.zO)(l,e)&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{null==t||t.hide()})}),!0)}))}),E=(0,a.AV)((0,l.Rf)(function(e){let t=b(e);return(0,l.n)("div",t)}),u.Kw)}}]);