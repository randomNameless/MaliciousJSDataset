!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2ab4e05d-22d3-4989-bf23-15ce84843d42",e._sentryDebugIdIdentifier="sentry-dbid-2ab4e05d-22d3-4989-bf23-15ce84843d42")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@ce094590bd2291e3264b21d2f92bffc273e4a131"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[1914],{7548:(e,t,s)=>{s.d(t,{A:()=>x});var n=s(88346),o=/*#__PURE__*/s.n(n),i=s(74059),a=/*#__PURE__*/s.n(i),r=s(90657),l=s(87308),h=s(86619),u=s(36665),g=s(33672),c=s(89972),d=s(22720),p=s(19869);let f={suggestionsList:"ZdQlM",isRibbon:"bRI1d"};var m=s(60397);let S={[c.$x.Top]:{top:-1*h.Z8},[c.$x.Bottom]:{top:3*h.Z8}};class x extends u.Component{constructor(...e){super(...e),o()(this,"state",{softSelectedIndex:null,isFocused:!1}),o()(this,"getSoftSelectedSuggestion",()=>{let{suggestions:e,popularSuggestions:t}=this.props,{softSelectedIndex:s}=this.state;if(null!==s){if(s<e.length)return e[s];if(s<this.allSuggestionsLength())return t[s-e.length]}return null}),o()(this,"shouldRenderHotkeyComponent",()=>this.props.isShowing&&!!this.allSuggestionsLength()),o()(this,"allSuggestionsLength",()=>{let{suggestions:e,popularSuggestions:t}=this.props;return e.length+t.length}),o()(this,"renderHotkeys",()=>/*#__PURE__*/(0,m.jsx)(l.o.Consumer,{children:({hotkeyWrapper:e})=>e?/*#__PURE__*/(0,m.jsx)(e,{shouldDisableEnterAsSubmit:!0,shouldDisableParentControlOfHotkeys:!0,shouldRenderHotkeyComponent:this.shouldRenderHotkeyComponent(),children:this.renderHotkeyComponent()}):this.renderHotkeyComponent()})),o()(this,"renderHotkeyComponent",()=>/*#__PURE__*/(0,m.jsx)(r.Ay,{disableAllButMyHotkeys:!0,hotkey:this.getHotkeyCommands()})),o()(this,"getHotkeyCommands",()=>{let{searchText:e,getSearchTextFromSuggestion:t,hotkey:s}=this.props,n=[{key:r.qW.Escape,command:this.unfocusAndClose,allowInputs:!0},{key:r.qW.Enter,command:this.selectCurrentSoftSelection,allowInputs:!0},{key:r.qW.Tab,command:this.selectCurrentSoftSelection,allowInputs:!0},{key:r.qW.Up,command:this.softSelectPreviousOption,allowInputs:!0},{key:r.qW.Down,command:this.softSelectNextOption,allowInputs:!0},{key:r.qW.Left,command:this.unfocus,triggersDefault:!0,allowInputs:!0},{key:r.qW.Backspace,command:this.unfocus,triggersDefault:!0,allowInputs:!0},...s||[]];return t(this.getSoftSelectedSuggestion())!==e&&n.push({key:r.qW.Right,command:this.selectIfFocused,triggersDefault:!0,allowInputs:!0}),n}),o()(this,"unfocus",()=>{this.state.isFocused&&(this.setState({isFocused:!1,softSelectedIndex:null}),this.props.onUnfocus&&this.props.onUnfocus())}),o()(this,"unfocusAndClose",()=>{let{onClose:e}=this.props;this.unfocus(),e()}),o()(this,"renderSuggestions",e=>{let{suggestions:t,popularSuggestions:s,popularHeader:n,searchText:o,onSelection:i,renderSuggestion:r,renderEmptySuggestions:l}=this.props,{softSelectedIndex:h,isFocused:u}=this.state;return(!!this.allSuggestionsLength()||l)&&/*#__PURE__*/(0,m.jsx)("div",{contentEditable:!1,children:/*#__PURE__*/(0,m.jsxs)("div",{className:a()(f.suggestionsList,{[f.isRibbon]:e}),children:[t.map((e,t)=>/*#__PURE__*/(0,m.jsx)("span",{onClick:this.clickSuggestion,role:"button",children:r({searchText:o,suggestion:e,onSelection:i,key:t,onSoftSelection:this.onSoftSelection,isSelected:t===h,isFocused:t===h&&u})},t)),s.length>0&&n,s.map((e,s)=>/*#__PURE__*/(0,m.jsx)("span",{onClick:this.clickSuggestion,role:"button",children:r({searchText:o,suggestion:e,onSelection:i,key:s+t.length,onSoftSelection:this.onSoftSelection,isSelected:s+t.length===h,isFocused:!!h&&u&&s===h-t.length})},s+t.length)),!this.allSuggestionsLength()&&l&&l()]})})}),o()(this,"softSelectNothing",()=>{let{noSoftSelectionOnNewSuggestions:e}=this.props;e?this.setState({softSelectedIndex:null}):this.onSoftSelection(null)}),o()(this,"softSelectFirstOption",()=>!this.props.suggestions.length&&this.props.popularSuggestions.length?this.onSoftSelection(this.props.popularSuggestions[0]):this.onSoftSelection(this.props.suggestions[0])),o()(this,"onSoftSelection",e=>{this.setState({softSelectedIndex:this.getIndexFromSuggestion(e)}),this.props.onSoftSelection?.(e)}),o()(this,"getIndexFromSuggestion",e=>{let{suggestions:t,popularSuggestions:s}=this.props;if(null!==e){for(let n=0;n<this.allSuggestionsLength();n+=1)if(t[n]&&(0,d.n)(t[n],e)||s[n-t.length]&&(0,d.n)(s[n-t.length],e))return n}return null}),o()(this,"softSelectPreviousOption",()=>this.modifySoftSelectedIndex(-1)),o()(this,"softSelectNextOption",()=>this.modifySoftSelectedIndex(1)),o()(this,"modifySoftSelectedIndex",e=>{let t=this.state.softSelectedIndex??-1,s=t+e,n=this.allSuggestionsLength();n&&(t+e>=n?s=0:t+e<0&&(s=n-1),this.setState({softSelectedIndex:s,isFocused:!0},()=>{this.props.onSoftSelection?.(this.getSoftSelectedSuggestion())}))}),o()(this,"selectIfFocused",()=>{this.state.isFocused&&this.selectCurrentSoftSelection()}),o()(this,"selectCurrentSoftSelection",()=>{let{allowNullSelection:e}=this.props,t=this.getSoftSelectedSuggestion();(t||e)&&this.props.onSelection(t),this.setState({softSelectedIndex:null})}),o()(this,"clickSuggestion",()=>{this.setState({softSelectedIndex:null,isFocused:!1})}),o()(this,"isRibbon",()=>!!this.props.autocompleteContainerRef&&!!this.props.autocompleteContainerRef.current)}componentDidMount(){let{isShowing:e,noSoftSelectionOnNewSuggestions:t}=this.props;window.addEventListener("mousedown",this.unfocus),window.addEventListener("keypress",this.unfocus),e&&this.allSuggestionsLength()&&!t?this.softSelectFirstOption():this.softSelectNothing()}componentWillUnmount(){window.removeEventListener("mousedown",this.unfocus),window.removeEventListener("keypress",this.unfocus)}componentDidUpdate(e){let{suggestions:t,popularSuggestions:s,isShowing:n,noSoftSelectionOnNewSuggestions:o}=this.props;!n||e.isShowing&&(0,d.n)(e.suggestions,t)&&(0,d.n)(e.popularSuggestions,s)||(this.allSuggestionsLength()&&!o?this.softSelectFirstOption():this.softSelectNothing())}render(){let{autocompleteContainerRef:e,isShowing:t,shouldEscapeParentOverflow:s,positionBasedOffsetModifiers:n,popoverWidth:o,popoverMaxHeight:i,popoverPosition:a,toggle:r}=this.props;return/*#__PURE__*/(0,m.jsxs)(m.Fragment,{children:[this.isRibbon()?t&&e?.current&&/*#__PURE__*/(0,g.createPortal)(this.renderSuggestions(!0),e.current):t&&/*#__PURE__*/(0,m.jsx)(h.Ay,{component:this.renderSuggestions(),height:"auto",isOpen:t,maxHeight:i,noTransitions:!0,position:a||c.$x.BottomStart,positionBasedOffsetModifiers:n||S,targetWrapperDisplayInline:!0,toggle:r||null,usePortals:s,width:o,children:/*#__PURE__*/(0,m.jsx)("a",{tabIndex:-1})}),this.renderHotkeys()]})}}o()(x,"defaultProps",{suggestions:[],popularSuggestions:[],onSoftSelection:p.A})},87308:(e,t,s)=>{s.d(t,{o:()=>n});let n=/*#__PURE__*/(0,s(36665).createContext)({hotkeyWrapper:null,isEnterAsSubmitDisabled:!1})},58897:(e,t,s)=>{s.d(t,{A:()=>h});var n=s(20928),o=s(79393),i=s(60397);let a=(0,n.Kk)("reblog"),r=(0,n.Kk)("reblog-compact"),l=(0,n.Kk)("reblog-rounded"),h=({isCompact:e=!1,isRounded:t=!1,size:s=o.A.desktop.reblogIconSize,...n})=>e?/*#__PURE__*/(0,i.jsx)(r,{size:s,...n}):t?/*#__PURE__*/(0,i.jsx)(l,{size:s,...n}):/*#__PURE__*/(0,i.jsx)(a,{size:s,...n})},64867:(e,t,s)=>{s.d(t,{A:()=>h});var n=s(88346),o=/*#__PURE__*/s.n(n),i=s(12177),a=s(36665),r=s(60397);class l extends a.Component{render(){let{className:e,src:t,title:s,queryParams:n,scrolling:o,frameBorder:a,style:l,onLoad:h,placementId:u,allow:g,allowFullScreen:c}=this.props;return/*#__PURE__*/(0,r.jsx)("iframe",{allow:g,allowFullScreen:c,className:e,frameBorder:a,name:u,onLoad:h,scrolling:o,src:(0,i.A)(t,n),style:l,title:s})}}o()(l,"defaultProps",{className:"",queryParams:{},scrolling:"no",frameBorder:0});let h=l},1258:(e,t,s)=>{s.d(t,{Ay:()=>m});var n=s(77073),o=s(36665),i=s(53986),a=s(55321),r=s(94048),l=s(4613),h=s(25183),u=s(63140),g=s(58217);let c=e=>{let{logEvent:t}=(0,l.Us)(),{pathname:s}=(0,i.zy)(),[n]=(0,a.ok)();(0,o.useEffect)(()=>{"embed"===n.get("source")&&t({pathname:s,eventName:r.R.EmbedPostClick,eventDetails:{...e,refUrl:n.get("refUrl"),action:n.get("action")}})},[])};var d=s(68484);let p="INITIAL_SCREEN_FOR_CAMPAIGN_VIEWED",f="CAMPAIGN_REFERRAL_LAUNCH_LOGGED",m=({page:e,eventDetails:t})=>{let{logEvent:s}=(0,h.Ul)(),{pathname:m}=(0,i.zy)(),[S]=(0,a.ok)(),{name:x}=(0,g.M)(),{isModalShowing:y,isPeeprShowing:T}=(0,u.w)(),C=(0,o.useRef)(y||T),{isLoggedIn:I}=(0,l.Us)(),b=S.get("source"),v=()=>{if(!S.get("utm_campaign")||d.R.getItem(f))return;let e={};for(let t of S.keys())e[t]=S.get(t);let t=(0,n.pT)(e);s({eventName:r.R.ReferralLaunch,eventDetails:t}),d.R.setItem(f,"1")},k=()=>{let o=I?{}:(0,n.pT)(),i=!!o.utm_campaign,a=!1;I||!i||d.R.getItem(p)||(a=!0,d.R.setItem(p,"1")),I&&v(),s({page:e,pathname:m,eventName:r.R.ScreenView,eventDetails:{pathname:m,referrer:document.referrer,color_palette:x,...b&&{source:b},...t,...o,...a&&{is_initial_campaign_screen_view:!0}}})};return(0,o.useEffect)(()=>{k()},[m,e]),(0,o.useEffect)(()=>{!C.current||y||T||k(),C.current=y||T},[C,y,T]),c(),null}},16464:(e,t,s)=>{s.d(t,{Ti:()=>w,Ay:()=>E});var n=s(88346),o=/*#__PURE__*/s.n(n),i=s(74059),a=/*#__PURE__*/s.n(i),r=s(7548),l=s(90657),h=s(36665),u=s(94048),g=s(89972),c=s(66869),d=s(59454),p=s(54934),f=s(74082),m=s(46554),S=s(44553),x=s(35913),y=s(71891);let T={tagsEditor:"s7YOu",editorWrap:"aqWWB",editor:"mbROR",editorHasTags:"zqrdz",plusMarkPlaceholder:"Z0_uD",chips:"fdQ5Z",isTypingTag:"RD9M8",plusMarkWrapper:"GkIaO",popularSeparator:"uN8qr"};var C=s(11100);let I={tagSuggestionWrapper:"aIJXD",selected:"fLsNs",tagSuggestion:"TBq8Z",searchedTextInSuggestion:"l2NHX"};var b=s(60397);let v=({suggestion:e,isSelected:t,isFocused:s,onSelection:n,searchText:o})=>{let i=(0,h.useCallback)(()=>n(e),[n,e]),r=/*#__PURE__*/(0,h.createRef)();(0,h.useEffect)(()=>{s&&r?.current?.focus()});let l=[e],u=e.toLowerCase().indexOf(o.toLowerCase()),g=u+o.length;if(-1!==u){let t=e.substring(0,u),s=e.substring(u,g),n=e.substring(g);l=[t,/*#__PURE__*/(0,b.jsx)("span",{className:I.searchedTextInSuggestion,children:s},"textMatch"),n]}return/*#__PURE__*/(0,b.jsx)(C.A,{className:I.tagSuggestion,forwardedRef:r,label:e,onClick:i,wrapperClassName:a()(I.tagSuggestionWrapper,{[I.selected]:t}),children:l},e)},k={[g.$x.Bottom]:{top:40}},w=140;class R extends h.Component{constructor(...e){super(...e),o()(this,"state",{inputValue:"",editorInputFocused:!1,isShowingSuggestions:!1,listTags:[],blogTags:[],selectedTagIndex:null}),o()(this,"tagSuggestionsFetch",null),o()(this,"initialTagsFetch",null),o()(this,"tagsEditorRef",/*#__PURE__*/(0,h.createRef)()),o()(this,"editorInputRef",/*#__PURE__*/(0,h.createRef)()),o()(this,"autocompleteSuggestionsRef",/*#__PURE__*/(0,h.createRef)()),o()(this,"selectedTagsRef",/*#__PURE__*/(0,h.createRef)()),o()(this,"tagLengthError",(0,S.A)(()=>{let{toastContext:{toggleToast:e},appContext:{_t:t}}=this.props;e(t("Ooops! Tags can only be 140 characters or less!"))},5e3,{trailing:!1})),o()(this,"hotkey",[{key:l.qW.Tab,command:()=>{this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()&&this.autocompleteSuggestionsRef.current?.unfocusAndClose()},allowInputs:!0,triggersDefault:!0},{key:l.qW.Tab,modifiers:{[l.lv.Shift]:!0},command:()=>{this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()&&this.autocompleteSuggestionsRef.current?.unfocusAndClose()},allowInputs:!0,triggersDefault:!0}]),o()(this,"addTagFromInputOrParam",(e,t=!0)=>{let s=e||this.autocompleteSuggestionsRef.current?.getSoftSelectedSuggestion()||this.state.inputValue;return this.addTags((0,m.V)(s)).then(()=>t?this.focusEditorInput():Promise.resolve())}),o()(this,"getChipWidth",()=>{let{tags:e}=this.props,{inputValue:t,editorInputFocused:s,isShowingSuggestions:n,selectedTagIndex:o}=this.state,i=s||n||!!t.length,a=!s&&null===o&&!e.length&&!t.length;if(!i&&!this.shouldUseBasicPlaceholder()&&e.length>1)return"36px";let r=i?(0,x.q_)(t):(0,x.q_)(this.getPlaceholderText(a,e.length));return"auto"===r?r:`${r+32+1}px`}),o()(this,"getPlaceholderText",(e,t)=>{let{appContext:{_c:s}}=this.props;return this.shouldUseBasicPlaceholder()?s("Placeholder text for user to add tags","#add tags"):e?s("Prompt user to insert the first tag","#add tags to help people find your post"):1===t?s("Prompt user to insert second tag","#add another tag"):s("Prompt user to insert more tags","+")}),o()(this,"shouldUseBasicPlaceholder",()=>{let{appContext:{labsSettings:e},postFormContext:{isReblog:t}}=this.props,s=e.communities;return t||s}),o()(this,"handleOutsideFocusEvent",e=>{this.tagsEditorRef.current&&!this.tagsEditorRef.current.contains(e.target)&&(this.selectedTagsRef.current?.unselectAnyTags(),this.setState({isShowingSuggestions:!1}))}),o()(this,"onEditorInputChange",e=>{let t=e.currentTarget.value,s=(0,m.V)(t);this.setState({isShowingSuggestions:!!t}),(0,m.D)(t)?this.addTags(s):s.find(e=>e.length>w)?this.tagLengthError():this.setState({inputValue:t},this.getTags)}),o()(this,"onEditorInputBlur",()=>this.setState({editorInputFocused:!1})),o()(this,"onEditorInputFocus",()=>{this.setState({editorInputFocused:!0,isShowingSuggestions:!0}),this.selectedTagsRef.current?.unselectAnyTags()}),o()(this,"focusEditorInput",()=>{this.editorInputRef.current?.focus(),this.getTags()}),o()(this,"changeSelectedTags",(e,t)=>{let{tags:s,onChange:n}=this.props,o=(0,m.V)(t);n([...s.slice(0,e),...o,...s.slice(e+1,s.length)])}),o()(this,"addTags",(e,t="")=>{let{inputValue:s}=this.state,{tags:n,onChange:o,appContext:{logEvent:i}}=this.props,a=[...new Set([...n,...e])];return o(a),new Promise(e=>{a.slice(n.length).map((e,t)=>{i({eventName:u.R.PFTagAdd,eventDetails:{tag:e,tag_count:n.length+1+t}})}),s!==t?this.setState({inputValue:t},e):e()})}),o()(this,"handleKeyDown",e=>{let{tags:t,postFormContext:{postIt:s,hotkeyModifier:n}}=this.props;if(!e.nativeEvent.isComposing){if(e.key===l.qW.Escape&&this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()){e.nativeEvent.preventDefault(),e.nativeEvent.stopImmediatePropagation(),this.setState({isShowingSuggestions:!1});return}if(e.key===l.qW.Down&&!this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()){e.nativeEvent.preventDefault(),e.nativeEvent.stopImmediatePropagation(),this.setState({isShowingSuggestions:!0});return}if(e.key===l.qW.Enter&&!this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()){if(e[n]){s();return}this.addTagFromInputOrParam(null);return}if(e.key===l.qW.Tab&&!this.autocompleteSuggestionsRef.current?.shouldRenderHotkeyComponent()&&""!==this.state.inputValue){e.nativeEvent.preventDefault(),this.addTagFromInputOrParam(null);return}if(this.inputSelectionAtStart())switch(e.key){case l.qW.Backspace:t.length&&(e.preventDefault(),this.selectedTagsRef.current?.selectLastTag());break;case l.qW.Left:e.nativeEvent.stopImmediatePropagation(),e.preventDefault(),this.selectedTagsRef.current?.selectLastTag()}}}),o()(this,"reorderTags",e=>{let{tags:t,onChange:s}=this.props,{oldIndex:n,newIndex:o}=e,i=[...t],a=i.splice(n,1);i.splice(o,0,a[0]),s(i),this.selectedTagsRef.current?.unselectAnyTags(),this.focusEditorInput()}),o()(this,"removeTagByIndex",(e,t)=>{t?.stopPropagation();let{tags:s,onChange:n,appContext:{logEvent:o}}=this.props,i=[...s];i.splice(e,1),n(i),this.selectedTagsRef.current?.unselectAnyTags(),this.focusEditorInput(),o({eventName:u.R.PFTagRemove,eventDetails:{tag:s[e],tag_count:i.length}})}),o()(this,"inputSelectionAtStart",()=>this.state.editorInputFocused&&this.editorInputRef.current?.selectionEnd===0),o()(this,"getSearchTextFromSuggestion",e=>e),o()(this,"renderSuggestion",e=>/*#__PURE__*/(0,b.jsx)(v,{...e})),o()(this,"getInitialTags",()=>(this.initialTagsFetch?.cancel(),this.props.postFormContext?.selectedBlog?.name&&(this.initialTagsFetch=(0,f.A)((0,c.Ay)(this.props.appContext.apiFetch).getBlogTags(this.props.postFormContext?.selectedBlog?.name).fetch())),this.initialTagsFetch)),o()(this,"getTags",()=>(this.tagSuggestionsFetch?.cancel(),""!==this.state.inputValue?(this.tagSuggestionsFetch=(0,f.A)((0,d.qX)(this.props.appContext.apiFetch,this.state.inputValue,{blog:this.props.postFormContext?.selectedBlog?.url,limit:5}).fetch()),this.tagSuggestionsFetch.then(({response:e})=>{e&&this.setState({blogTags:[...e.blogTags.map(({tag:e})=>e)],listTags:[...e.typeahead.map(({tag:e})=>e),...e.similar.map(({tag:e})=>e)]})})):this.props.initialSuggestedTags?.length?this.setState({blogTags:[...this.props.initialSuggestedTags]}):this.getInitialTags()?.then(({response:e})=>{e&&this.setState({blogTags:[...e.tags]})}),this.tagSuggestionsFetch||this.initialTagsFetch)),o()(this,"onTagFocus",e=>this.setState({selectedTagIndex:e}))}componentDidMount(){return window.addEventListener("focusin",this.handleOutsideFocusEvent),this.props.postFormContext?.selectedBlog?.name?this.getTags():Promise.resolve()}componentWillUnmount(){window.removeEventListener("focusin",this.handleOutsideFocusEvent)}componentDidUpdate(e){return e.postFormContext?.selectedBlog?.name!==this.props.postFormContext?.selectedBlog?.name?this.getTags():Promise.resolve()}render(){let{tags:e,appContext:{_c:t}}=this.props,s=e.map(e=>e.toLowerCase()),n=e=>!s.includes(e.toLowerCase()),{inputValue:o,editorInputFocused:i,listTags:l,blogTags:h,isShowingSuggestions:u,selectedTagIndex:g}=this.state,c=i||u||o.length,d=!i&&!u&&null===g,p=d&&e.length>1&&!c&&!this.shouldUseBasicPlaceholder(),f=d&&!e.length&&!o.length,m=this.getPlaceholderText(f,e.length);return/*#__PURE__*/(0,b.jsxs)("div",{className:T.tagsEditor,ref:this.tagsEditorRef,children:[/*#__PURE__*/(0,b.jsx)(y.A,{onChange:this.changeSelectedTags,onChangeError:this.tagLengthError,onDragEnd:this.reorderTags,onFocus:this.onTagFocus,onUnfocusLastTag:this.focusEditorInput,ref:this.selectedTagsRef,removeTagByIndex:this.removeTagByIndex,tags:e}),/*#__PURE__*/(0,b.jsxs)("span",{className:a()({[T.chips]:d||c,[T.isTypingTag]:c,[T.plusMarkWrapper]:p}),style:{width:this.getChipWidth()},children:[/*#__PURE__*/(0,b.jsx)(r.A,{allowNullSelection:!0,getSearchTextFromSuggestion:this.getSearchTextFromSuggestion,hotkey:this.hotkey,isShowing:this.state.isShowingSuggestions,noSoftSelectionOnNewSuggestions:!0,onClose:()=>this.setState({isShowingSuggestions:!1}),onSelection:this.addTagFromInputOrParam,onUnfocus:this.focusEditorInput,popoverMaxHeight:200,popoverWidth:170,popularHeader:/*#__PURE__*/(0,b.jsx)("div",{className:T.popularSeparator,children:t("popular tags","popular")}),popularSuggestions:l.filter(n),positionBasedOffsetModifiers:k,ref:this.autocompleteSuggestionsRef,renderSuggestion:this.renderSuggestion,searchText:o,suggestions:h?.filter(n).filter(e=>e.toLowerCase().includes(o.toLowerCase())),toggle:()=>{this.state.editorInputFocused||this.setState({isShowingSuggestions:!this.state.isShowingSuggestions})}}),/*#__PURE__*/(0,b.jsx)("span",{className:T.editorWrap,"data-value":o,children:/*#__PURE__*/(0,b.jsx)("textarea",{"aria-label":t("Input to add tags to the post","Tags editor"),className:a()(T.editor,{[T.editorHasTags]:!!e.length,[T.plusMarkPlaceholder]:p}),onBlur:this.onEditorInputBlur,onChange:this.onEditorInputChange,onFocus:this.onEditorInputFocus,onKeyDown:this.handleKeyDown,placeholder:d?m:"",ref:this.editorInputRef,rows:1,value:o})})]})]})}}let E=(0,p.R5)(R,{appContext:!0,postFormContext:!0,toastContext:!0})},71891:(e,t,s)=>{s.d(t,{A:()=>v});var n=s(88346),o=/*#__PURE__*/s.n(n),i=s(52734),a=s(90657),r=s(87308),l=s(93479),h=s(36665),u=s(19869),g=s(74059),c=/*#__PURE__*/s.n(g),d=s(11100),p=s(46466),f=s(16464),m=s(4613),S=s(56040),x=/*#__PURE__*/s.n(S);let y={tagContainer:"sHSSD",tagButton:"akmAa",tag:"aLlJL",editableTag:"unn5w",nonEditableTag:"Zo7Ev",removeTagButton:"nsLCV"};var T=s(60397);let C=({tag:e,selected:t,className:s,index:n,isDragging:o,removeTagByIndex:i,onFocus:r,onChange:l,onChangeError:u,tagRef:g,isNonEditable:S=!1,innerTagClassName:C,removeButtonColor:I})=>{let{_t:b}=(0,m.Us)(),v=(0,h.useCallback)(e=>i(n,e),[n,i]),k=(0,h.useCallback)(()=>r(n),[n,r]),w=(0,h.useCallback)(e=>{e.stopPropagation()},[]),R=(0,h.useCallback)(e=>{let{textContent:t}=e.currentTarget;if(e.key===a.qW.Enter){e.preventDefault(),l(n,t??"");return}let{Left:s,Right:o,Tab:i,Backspace:r,Delete:h}=a.qW;(t??"").length>=f.Ti&&![s,o,i,r,h].includes(e.key)&&(e.preventDefault(),u())},[n,l,u]),E=(0,h.useCallback)(({currentTarget:e})=>{l(n,e.textContent??"")},[n,l]),F=(0,h.useCallback)(({currentTarget:e})=>{e.childElementCount>0&&e.replaceChildren(e.textContent??"")},[]);return e?/*#__PURE__*/(0,T.jsx)("span",{className:c()(y.tagContainer,s,{[y.isDragging]:o,[y.selected]:t}),children:/*#__PURE__*/(0,T.jsx)("span",{className:y.tagButton,role:"button",tabIndex:-1,children:/*#__PURE__*/(0,T.jsxs)("span",{className:c()(y.tag,C),children:[/*#__PURE__*/(0,T.jsx)("span",{ref:g,...S?{className:y.nonEditableTag,role:"cell"}:{className:y.editableTag,contentEditable:!0,onBlur:E,onClick:w,onInputCapture:F,onKeyDown:R,role:"textbox",suppressContentEditableWarning:!0,tabIndex:0},children:e}),/*#__PURE__*/(0,T.jsx)(d.A,{label:b("Remove tag"),onClick:v,onFocus:k,wrapperClassName:y.removeTagButton,children:/*#__PURE__*/(0,T.jsx)(p.A,{colors:{primary:I??x().paletteBlack},size:{height:10,width:10}})})]})})}):null},I={beingDragged:"yCyjX",dragClone:"hx2Dc"};class b extends h.Component{constructor(...e){super(...e),o()(this,"state",{selectedTagIndex:null,activeDrag:!1}),o()(this,"tagRefs",[]),o()(this,"unselectAnyTags",()=>this.updateSelectedTagIndex(null)),o()(this,"selectLastTag",()=>this.props.tags.length&&this.focusTagByIndex(this.props.tags.length-1)),o()(this,"onDragStart",()=>{this.setState({activeDrag:!0})}),o()(this,"onDragEnd",e=>{this.setState({activeDrag:!1}),this.props.onDragEnd(e)}),o()(this,"focusLeft",()=>{let{onUnfocusLastTag:e}=this.props,{selectedTagIndex:t}=this.state;this.hasSelectedTag()&&0!==t?this.focusTagByIndex(t-1):(this.unselectAnyTags(),e())}),o()(this,"focusRight",()=>{let{tags:e,onUnfocusLastTag:t}=this.props,{selectedTagIndex:s}=this.state;s===e.length-1?(this.unselectAnyTags(),t()):this.hasSelectedTag()&&this.focusTagByIndex(s+1)}),o()(this,"focusTagByIndex",e=>{null===e?this.unselectAnyTags():this.placeCaretAtEndOfTheTag(e)}),o()(this,"placeCaretAtEndOfTheTag",e=>{let t=window.getSelection(),s=document.createRange();t?.removeAllRanges(),s.selectNodeContents(this.tagRefs[e]),s.collapse(!1),t?.addRange(s),this.updateSelectedTagIndex(e),this.tagRefs[e].focus()}),o()(this,"updateSelectedTagIndex",e=>{this.props.onFocus(e),this.setState({selectedTagIndex:e})}),o()(this,"hasSelectedTag",()=>null!==this.state.selectedTagIndex)}render(){let{tags:e,removeTagByIndex:t,onChange:s,onChangeError:n,tagIsNonEditable:o=!1,tagClassName:h,innerTagClassName:g,removeButtonColor:c}=this.props;return/*#__PURE__*/(0,T.jsxs)(l.A,{fallback:null,children:[/*#__PURE__*/(0,T.jsx)(r.o.Consumer,{children:({hotkeyWrapper:e})=>e&&/*#__PURE__*/(0,T.jsx)(e,{shouldDisableEnterAsSubmit:!0,shouldDisableParentControlOfHotkeys:!0,shouldRenderHotkeyComponent:this.hasSelectedTag(),children:/*#__PURE__*/(0,T.jsx)(a.Ay,{disableAllButMyHotkeys:!0,hotkey:[{key:a.qW.Left,command:this.focusLeft,allowInputs:!0},{key:a.qW.Right,command:this.focusRight,allowInputs:!0}]})})}),/*#__PURE__*/(0,T.jsx)(i.A,{id:"selected-tags",onChange:u.A,options:{animation:150,onEnd:this.onDragEnd,onStart:this.onDragStart,delayOnTouchOnly:!0,delay:150,ghostClass:I.beingDragged,chosenClass:I.chosen,dragClass:I.dragClone,direction:"horizontal",swapThreshold:.75,dragoverBubble:!0,removeCloneOnHide:!1},children:e.map((e,i)=>/*#__PURE__*/(0,T.jsx)(C,{className:h,index:i,innerTagClassName:g,isDragging:this.state.activeDrag,isNonEditable:o,onChange:s,onChangeError:n,onFocus:this.updateSelectedTagIndex,removeButtonColor:c,removeTagByIndex:t,tag:e,tagRef:e=>this.tagRefs[i]=e},e))})]})}}let v=b},35913:(e,t,s)=>{s.d(t,{F3:()=>i,Hz:()=>g,YE:()=>l,YN:()=>h,kY:()=>a,nY:()=>r,q_:()=>c});var n=s(66910),o=s(72580);let i=e=>[[0],[1],[2],[2,1],[2,2],[2,1,2],[2,2,2],[2,3,2],[3,2,3],[3,3,3],[3,2,3,2],[3,3,3,2],[3,3,3,3],[3,3,3,2,2],[3,3,3,3,2],[3,3,3,3,3],[3,3,3,3,2,2],[3,3,3,3,3,2],[3,3,3,3,3,3],[3,3,3,3,3,2,2],[3,3,3,3,3,3,2],[3,3,3,3,3,3,3],[3,3,3,3,3,3,2,2],[3,3,3,3,3,3,3,2],[3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,2,2],[3,3,3,3,3,3,3,3,2],[3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,2,2],[3,3,3,3,3,3,3,3,3,2],[3,3,3,3,3,3,3,3,3,3]][Math.min(e,30)],a=e=>e.innerBlocks.reduce((e,t)=>"tumblr/image-set-row"===t.name?e+t.innerBlocks.length:e,0),r=e=>void 0!==e?.ctaTextCode&&e?.ctaTextCode!=="",l=(e,t)=>{if(t?.length)return!0;if(!e||!e.content||!e.content.length)return!1;let s=e.content.findIndex(e=>e.type===n._B.Paywall);return -1===s||0!==s&&s!==e.content.length-1},h=e=>["richText","html","markdown"][e]||"richText",u=e=>{for(let t of e){let e=t.content.find(e=>"video"===e.type&&"tumblr"===e.provider);if(e)return e}return null},g=(e,t,s,n)=>{(0,o.K)(t,{postId:e,blogIdentifier:s.name}).fetch().then(({response:o})=>{if("transcoding"!==o.posts[0].state){n();let e=u(o.posts);e&&window.dispatchEvent(new CustomEvent("transcoding",{detail:e}))}else setTimeout(()=>{g(e,t,s,n)},5e3)})},c=e=>{if("undefined"==typeof document)return"auto";let t=document.createElement("canvas").getContext("2d");if(!t)return"auto";t.font='16px "Favorit"';let{width:s,actualBoundingBoxLeft:n,actualBoundingBoxRight:o}=t.measureText(e);return Math.max(s,Math.ceil(Math.abs(n)+Math.abs(o)))}},99152:(e,t,s)=>{s.d(t,{Ay:()=>u,G5:()=>h,Im:()=>l});var n=s(51539),o=s(36665),i=s(84991),a=s(68484);let r="lastSelectedBlog",l=e=>{let t;try{t=JSON.parse(a.A.getItem(r)||"null")}catch(e){}return e?.find(e=>e.uuid===t?.uuid)},h=e=>{a.A.setItem(r,JSON.stringify(e))},u=()=>{let[e,t]=(0,o.useState)(),{data:s}=(0,n.c)();return(0,o.useEffect)(()=>{let e=l(s||[]),n=(0,i.A)(s||[]);t(e||n)},[s]),{selectedBlog:e,onChangeSelectedBlog:e=>{t(e),h(e)}}}},27201:(e,t,s)=>{s.d(t,{A:()=>n});let n=e=>{let t;if(!e)return!1;try{t=new URL(e)}catch(e){return!1}let s=t.hostname;return"safe.txmblr.com"===s||/(?:^tumblr|\.tumblr)\.(?:com|net)$/.test(s)}},28469:(e,t,s)=>{s.d(t,{A:()=>n});function n(e,t=!1){if(!e)return!1;let s="%[0-9a-fA-F]{2}",o=`([a-zA-Z0-9$\\-_.+!*"(),;:&=]|${s})+@`,i="(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])",a=`(${i}(\\.${i}){3})`,r="a-zA-Z0-9\\-\\_\\~",l="\\u00C0-\\u9FFF",h=`([${r}${l}]+\\.)+([a-zA-Z]{2,})`,u=`(${a}|localhost|${h})(:[0-9]+)?`,g=`${r}${l}.:\\[\\]@!$&'()*+,;=`,c=`([${g}]|${s})*`,d=`${c}(\\/${c})*`,p=`\\?([${g}/?]|${s})*`,f=`\\#([${g}/?]|${s})*`;return!0===RegExp(`^${t?"(http|https):\\/\\/":"((http|https):\\/\\/)?"}(${o})?${u}(\\/?(${d})?(${p})?(${f})?)?$`).test(e)}},15652:(e,t,s)=>{s.d(t,{Bo:()=>a,KT:()=>i,_z:()=>l,vv:()=>r});var n=s(87203),o=s(27201);function i(e,t){let s;let i=n=>{let i=function(e){let t;let{origin:s,source:n,data:i}=e;if(!(i&&s&&n)||!(0,o.A)(s))return null;try{t=JSON.parse(i)}catch{return null}if(!t.method)return null;let a=t.method.match(/^([^:]+):(.+)$/);if(!a)return null;let r=a[1],l=a[2],h=t.args[0];return{origin:s,namespace:r,name:l,source:n,cid:t.cid,data:h}}(n);if(i&&i.namespace===e){if("_syn"===i.name){s={namespace:e,source:i.source,origin:i.origin},function(e,t,s,n){let o=JSON.stringify({method:`${s}:_method_callback_responder`,args:[n]});e.postMessage(o,t)}(i.source,i.origin,e,{response:"ack",cid_response:i.cid});return}t[i.name]&&t[i.name](i.data)}};return(0,n.um)("message",i),{handler:i,getChannelInfo:()=>s}}function a(e){(0,n.yL)("message",e)}let r={listen:i,unlisten:a};function l({source:e,target:t,namespace:s},n,o){let i=JSON.stringify({method:`${s}:${n}`,args:[o]});e.postMessage(i,t)}},84896:(e,t,s)=>{s.d(t,{e:()=>o});var n=s(83322);let o=({editablePost:e,isReblog:t,isReblogWithPaywall:s,isInbox:o,isAsk:i,isPrefilledPost:a,isReblogWithPoll:r})=>!!(e?.isBlocksPostFormat||t&&e&&(0,n.bZ)(e)||r||s||i||e?.isAdFreeGiftAsk||e?.isTumblrmartGiftAsk)||!!o&&!e?.isSubmission||!!a},31360:(e,t,s)=>{s.d(t,{AF:()=>a,C1:()=>r,ER:()=>i});var n=s(68484);let o="reblogPostData",i=(e,t)=>{try{let s=n.A.getItem(o);if(s){let{postId:n,placementId:o,isLongPost:i,tabId:a}=JSON.parse(s);if(e!==n)return r(),{placementId:t};return{placementId:o,isLongPost:i,tabId:a}}return{placementId:t}}catch(e){return{placementId:t}}},a=(e,t,s,i)=>{try{n.A.setItem(o,JSON.stringify({postId:e,placementId:t,isLongPost:s,tabId:i}))}catch(e){}},r=()=>{try{n.A.removeItem(o)}catch(e){}}},94117:(e,t,s)=>{s.d(t,{FW:()=>o});var n=s(84896);let o=({isMobile:e,features:{legacyEditorAccess:t},editablePost:s,isReblog:o,isReblogWithPaywall:i,isInbox:a,isAsk:r,isPrefilledPost:l,isReblogWithPoll:h,isPremiumPartner:u,isUsingNewWebEditor:g})=>!(0,n.e)({editablePost:s,isReblog:o,isReblogWithPaywall:i,isAsk:r,isInbox:a,isPrefilledPost:l,isReblogWithPoll:h})&&(!!s?.shouldOpenInLegacy||!e&&!!(t||u)&&!g)}}]);