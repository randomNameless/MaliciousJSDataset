!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6e8640ab-bc61-48ed-89a0-c9266bc41bf3",e._sentryDebugIdIdentifier="sentry-dbid-6e8640ab-bc61-48ed-89a0-c9266bc41bf3")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[6750],{33598:(e,t,s)=>{s.d(t,{Ay:()=>u});var o=s(88346),i=/*#__PURE__*/s.n(o),r=s(36665),n=s(3218),l=s(4613),h=s(56139),c=s(26696),a=s(16143),p=s(60397);class d extends c.A{constructor(...e){super(...e),i()(this,"addObjectsToExisting",e=>{let{objects:t}=this.state,{direction:s,getObjectsFromResponse:o}=this.props;return s===n.N6.Top?o(e).concat(t):t.concat(o(e))}),i()(this,"preHandleContentFetch",e=>{let{updateUrlFromCurrentPageLink:t}=this.props;e===n.Ry.Refresh&&t?.()})}render(){let{fetchDistance:e,direction:t,scrollContainer:s,debug:o,loader:i}=this.props,{loadingNextPage:l,nextLink:h}=this.state,c=i&&h?.href&&/*#__PURE__*/(0,r.cloneElement)(i,{style:{...i.props.style,visiblity:`${l?"visible":"hidden"}`}}),d=t===n.N6.Top;return/*#__PURE__*/(0,p.jsxs)(a.A,{debug:o,direction:t,edgeDistance:e,onScrollToEdge:this.fetchNextPage,scrollContainer:s,children:[d&&c,super.render(),!d&&c]})}}i()(d,"defaultProps",{...c._,fetchDistance:400});let g=(0,l.rr)(d);(0,h.r)(g,`Inner${g.name}`);class f extends r.Component{render(){return/*#__PURE__*/(0,p.jsx)(g,{...this.props,ref:this.props.forwardedRef})}}let u=f},26696:(e,t,s)=>{s.d(t,{A:()=>m,_:()=>b});var o=s(88346),i=/*#__PURE__*/s.n(o),r=s(75185),n=s(36665),l=s(3218),h=s(12673),c=s(84208),a=s(75182),p=s(79409),d=s(31122),g=s(74082),f=s(60968),u=s(60397);let b={direction:l.N6.Bottom,lockScrollOnObjectUpdate:!1,getNextLink:e=>e?.response?.links?.next};class m extends n.Component{constructor(...e){super(...e),i()(this,"state",(()=>{let{getInitialPage:e}=this.props,t=e?.(),s=t?.objects,o=t?.nextLink;return{...this.getEmptyInitialState(),hasFetchedInitialPage:!!s,objects:s||[],nextLink:o}})()),i()(this,"getObjectsToRender",(0,r.A)((e,t)=>t?.filter(t=>!e?.(t))||[],{maxSize:1})),i()(this,"scrollToTop",(e="auto")=>{let t=this.getScrollableContainer();t?.scrollTo&&t.scrollTo({behavior:e,top:0,left:0})}),i()(this,"scrollToBottom",(e="auto")=>{let{scrollContainer:t}=this.props,s=this.getScrollableContainer();s?.scrollTo&&s.scrollTo({behavior:e,top:((0,d.s)(t)?t:document.body).scrollHeight,left:0})}),i()(this,"shouldRenderMainLoader",()=>!this.state.hasFetchedInitialPage),i()(this,"fetchNextPage",(e=this.state.nextLink)=>this.canFetchNextPage(e)?(this.props.onFetchNextPage?.(),this.handleContentFetch({fetchPromise:this.getFetchNextPageRequest(e).fetch(),requestType:l.Ry.Pagination,fetchingState:{loadingNextPage:!0},fetchedState:{loadingNextPage:!1},getObjectsFromResponse:this.addObjectsToExisting})):Promise.resolve()),i()(this,"canFetchNextPage",e=>{let{loadingNextPage:t,refreshingPage:s,apiRequestFailed:o}=this.state;return!(o&&Date.now()-o<2e3)&&!t&&!s&&!!e}),i()(this,"refresh",()=>{let{endpointApiRequest:e,direction:t}=this.props;return this.state.refreshingPage?Promise.resolve():(t===l.N6.Bottom&&this.scrollToTop(),e)?this.handleContentFetch({fetchPromise:e.fetch(),requestType:l.Ry.Refresh,fetchingState:{refreshingPage:!0},fetchedState:{refreshingPage:!1,loadingNextPage:!1}}):Promise.resolve()}),i()(this,"endpointApiRequestAvailable",e=>!!e),i()(this,"fetchInitialPage",()=>this.endpointApiRequestAvailable(this.props.endpointApiRequest)?this.handleContentFetch({fetchPromise:this.props.endpointApiRequest.fetch(),requestType:l.Ry.Initial,fetchingState:{objects:[],loadingNextPage:!0},fetchedState:{hasFetchedInitialPage:!0,loadingNextPage:!1}}):Promise.resolve()),i()(this,"transformObjects",e=>{let t=window.scrollY;this.setState(t=>({objects:e(t.objects)}),()=>{this.props.lockScrollOnObjectUpdate&&window.scrollTo({top:t})})}),i()(this,"cancelInProgressFetchIfNecessary",()=>{this.fetchInProgress&&(this.fetchInProgress.cancel(),this.fetchInProgress=null)}),i()(this,"getScrollableContainer",()=>this.props.scrollContainer||window)}componentDidMount(){return this.props.imperativeRefreshReference&&(this.props.imperativeRefreshReference.current=()=>this.refresh()),this.state.hasFetchedInitialPage?Promise.resolve():this.fetchInitialPage()}componentWillUnmount(){this.cancelInProgressFetchIfNecessary()}componentDidUpdate(e){this.didChangeEndpoint(e)&&(this.cancelInProgressFetchIfNecessary(),this.setState(this.getEmptyInitialState(),()=>this.fetchInitialPage()))}render(){let{initialLoader:e,loader:t,scrollContainer:s=(0,a.A)(),emptyView:o,errorView:i,pullToRefresh:r,debug:n,isObjectOmittedFromRender:h,direction:c}=this.props,{objects:d,apiRequestFailed:g}=this.state,b=this.getObjectsToRender(h,d),m=this.props.children,P=c===l.N6.Top,S=this.shouldRenderMainLoader()?e||t:g?i:(0,p.V)(b)&&o;return/*#__PURE__*/(0,u.jsxs)(u.Fragment,{children:[r&&/*#__PURE__*/(0,u.jsx)(f.A,{debug:n,refresh:this.refresh,scrollContainer:s}),P&&S,m?.({objects:b,refresh:this.refresh,transformObjects:this.transformObjects}),!P&&S]})}getEmptyInitialState(){return{objects:[],hasFetchedInitialPage:!1,refreshingPage:!1,loadingNextPage:!1,apiRequestFailed:!1,nextLink:null}}didChangeEndpoint(e){let{endpointApiRequest:t}=this.props;return e.endpointApiRequest?!e.endpointApiRequest.isEqualTo(t):!!t}onPagination(e){this.props.onPagination?.(e)}getFetchNextPageRequest(e){let{endpointApiRequest:t}=this.props;return t?t.create(e?.href):new h._(this.props.appContext.apiFetch,e?.href)}handleContentFetch({fetchPromise:e,requestType:t,fetchingState:s,fetchedState:o,getObjectsFromResponse:i=this.props.getObjectsFromResponse}){this.cancelInProgressFetchIfNecessary(),this.preHandleContentFetch(t);let{getNextLink:r,scrollContainer:n=(0,a.A)(),direction:h,appContext:{getBrowserInfo:p}}=this.props;return new Promise(a=>{this.setState({...s},()=>{this.fetchInProgress=(0,g.A)(e),this.fetchInProgress.then(e=>{let s=(0,c.yg)(p())&&h===l.N6.Top&&t!==l.Ry.Initial&&!!n,g=s&&(0,d.s)(n)&&n.getAttribute("style")||l.Zm;s&&(0,d.s)(n)&&n.setAttribute("style",`${g}; overflow-y: hidden`);let f=i(e),u=r?.(e);this.onPagination({objects:f,nextLink:u,response:e,requestType:t}),this.setState({...o,objects:f,nextLink:u},()=>{this.fetchInProgress=null,s&&(0,d.s)(n)&&n.setAttribute("style",g),a()})}).catch(e=>{let{onPaginationError:s}=this.props;this.setState({...o,apiRequestFailed:Date.now()},()=>{s&&s({error:e,requestType:t}),a()})})})})}}i()(m,"defaultProps",b)},16143:(e,t,s)=>{s.d(t,{A:()=>d});var o=s(88346),i=/*#__PURE__*/s.n(o),r=s(36665),n=s(3218),l=s(20301),h=s(31122),c=s(44553),a=s(87203);let p={distanceFromBottom:0,distanceFromTop:0,distanceFromRight:0};class d extends r.PureComponent{constructor(...e){super(...e),i()(this,"checkContainedScroll",(0,c.A)(()=>{let{scrollContainer:e}=this.props;this._isMounted&&(0,h.s)(e)&&this.checkScroll({distanceFromTop:e.scrollTop,distanceFromBottom:e.scrollHeight-e.clientHeight-e.scrollTop,distanceFromRight:e.scrollWidth-e.scrollLeft-e.clientWidth})},a.G_)),i()(this,"forceCheckScroll",()=>{(0,h.s)(this.props.scrollContainer)?this.checkContainedScroll():this.checkScroll((0,a.jq)()||p)}),i()(this,"forceCheckScrollAfterFlush",(0,l.A)(this.forceCheckScroll)),i()(this,"checkScroll",({distanceFromBottom:e,distanceFromTop:t,distanceFromRight:s})=>{let o;let{direction:i,edgeDistance:r,onScrollToEdge:l}=this.props;switch(i){case n.N6.Top:o=t;break;case n.N6.Bottom:o=e;break;case n.N6.Right:o=s}void 0!==r&&void 0!==o&&r>=o&&l()}),i()(this,"updateScrollTop",e=>{let t=(0,h.s)(this.props.scrollContainer)?this.props.scrollContainer:document.body,{lastScrollHeight:s,lastClientHeight:o,lastScrollTop:i}=e,r=t.scrollTop+t.scrollHeight-s;o!==t.clientHeight&&(r+=o-t.clientHeight);let n=i-t.scrollTop;n&&(r+=n),r!==t.scrollTop&&(t.scrollTop=r)})}componentDidMount(){this._isMounted=!0,this.attachEventListeners(),this.forceCheckScrollAfterFlush()}componentWillUnmount(){this.removeEventListeners(),this.forceCheckScrollAfterFlush.cancel(),this._isMounted=!1}getSnapshotBeforeUpdate(e){let{direction:t}=this.props,{scrollContainer:s}=e;if(t!==n.N6.Top)return null;let o=(0,h.s)(s)?s:document.body;return{lastScrollHeight:o.scrollHeight,lastClientHeight:o.clientHeight,lastScrollTop:o.scrollTop}}componentDidUpdate(e,t,s){(0,h.s)(this.props.scrollContainer)&&e.scrollContainer!==this.props.scrollContainer&&(this.removeEventListeners(e),this.attachEventListeners()),s&&this.updateScrollTop(s),this.forceCheckScrollAfterFlush()}render(){return this.props.children}attachEventListeners(){(0,h.s)(this.props.scrollContainer)?this.props.scrollContainer.addEventListener("scroll",this.checkContainedScroll,!1):(0,a.um)("scroll",this.checkScroll)}removeEventListeners(e=this.props){(0,h.s)(e.scrollContainer)&&e.scrollContainer.removeEventListener("scroll",this.checkContainedScroll,!1),(0,a.yL)("scroll",this.checkScroll)}}},3218:(e,t,s)=>{s.d(t,{N6:()=>i,Ry:()=>o,Zm:()=>r});let o=/*#__PURE__*/function(e){return e[e.Initial=0]="Initial",e[e.Pagination=1]="Pagination",e[e.Refresh=2]="Refresh",e}({}),i=/*#__PURE__*/function(e){return e.Bottom="bottom",e.Top="top",e.Right="right",e}({}),r=""},71429:(e,t,s)=>{s.d(t,{X:()=>o});let o=e=>"disabled"===e.state||!!e.isNsfw}}]);