webpackJsonp([0],{3013:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"VlpTemplate",function(){return X});var s=n(0),u=n.n(s),c=n(11),d=n.n(c),l=n(21),f=n.n(l),p=n(10),v=n(4),m=n.n(v),g=n(1),h=(n.n(g),n(891)),_=n(877),y=n(400),b=n(881),E=n(401),S=n(270),A=n(880),w=n(885),k=n(882),C=n(15),P=n(5),D=n(18),O=n(19),z=n(27),j=n(16),T=n(3016),R=n(45),L=n(49),M=n(8),x=n(41),B=n(24),I=n(54),V=n(3029),F=n.n(V),U=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,a){var i=t&&t.defaultProps,o=arguments.length-3;if(n||0===o||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===o)n.children=a;else if(o>1){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),q=R.h.baseApiUrl,H=R.h.token,N=C.c.addData,Q=C.c.firePageLoadEvent,W=C.c.setVenueData,Z=C.c.formatAnalyticsText,$={accessibility:k.a,benefits:_.a,generic_content:E.a,plan_ahead:A.a,on_sale_soon:P._59,recommended_events:P._60,sponsored_content:b.a,venue_tour:S.a,visual_link_list:w.a},J=function(e){var t=e?"?"+function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")}(e):"";return q+"events"+t},K=function(e){return e?"vulcan":"transparent"},X=function(e){function t(e){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onShowTimesSelect=function(e,t){(0,o.props.setEdpSelectedEventId)(t,e)},o.setTimezone=function(e){var t=n.i(x.k)(e);o.setState({timezone:t})},o.setEventCards=function(e){var t=o.props.setEdpSelectedEventId;(d()(e,function(e){return e.event_grid.events})||[]).filter(function(e){return!e.is_venue_card}).forEach(function(e){var n=e.id;t(n,n)})},o.getTodaysEventsIds=function(e){var t=[];return e.forEach(function(e){return t.push(e.id)}),t.join(", ")},o.addTodaysShowsAnalytics=function(e){var t=o.props,n=t.modules,r=t.modules.venue,a=r.event_engine_id,i=r.name;Q({globalData:{modules:"intercom",banner:"happening-tonight:"+o.getTodaysEventsIds(e),venue:{name:i,id:a},type:"page-load"},venueData:W(n)})},o.getEeResults=function(e){var t=e&&{ids:e.join(),status:"active,postponed"},a=J(t);n.i(L.h)(a,{headers:{authorization:"Bearer "+H}}).then(function(e){return e.results.reduce(function(e,t){return G({},e,r({},t.id,{has_available_suites:t.has_available_suites,has_suites_waitlist:t.has_suites_waitlist,on_sale:t.on_sale,on_sale_date:t.on_sale_date}))},{})}).then(function(e){o.setState({eeEventsDataById:e})}).catch(function(e){return I.a.reportError({message:e})})},o.setTodaysShows=function(){var e=f()().format("MMDDYYYY"),t=f()().hour(),r=o.props,a=r.eventCards,i=r.venue_id,s={start_date:e,end_date:e,venue_id:i,include_series_data:!0,status:"active,postponed,cancelled"},u=J(s);n.i(L.h)(u,{headers:{authorization:"Bearer "+H}}).then(function(e){var r=e.results,a=r.map(function(e){return G({},e,{isToday:!0})});return a.sort(function(e,t){return n.i(x.l)(e.start_time)-n.i(x.l)(t.start_time)}),a.filter(function(e){return n.i(x.l)(e.start_time)+1>t})}).then(function(e){if("KovZpZAE7vdA"===i){var t=e.filter(function(e){return e.name===B.G}).map(function(e){return G({},e,{isRockettesCard:!0})});n.i(M.e)(t)&&o.setState({hasRockettesShows:!0,rockettesShows:t});var r=e.filter(function(e){return e.name!==B.G});n.i(M.e)(r)&&o.setState({todaysEvents:r}),o.setState({filteredCards:a})}else{e.forEach(function(e){var t=e.id;n.i(D.w)(t,t)}),o.setState({todaysEvents:e});var s=[];e.forEach(function(e){return s.push(e.series_id)});var u=a.filter(function(e){return!s.includes(e.series_id)});o.setState({filteredCards:u})}var c=o.props.modules;n.i(M.e)(e)?o.addTodaysShowsAnalytics(e):Q({venueData:W(c)})}).catch(function(e){return I.a.reportError({message:e})})},o.unsetEventCards=function(e){var t=o.props.setEdpSelectedEventId;(d()(e,function(e){return e.event_grid.events})||[]).filter(function(e){return!e.is_venue_card}).forEach(function(e){var n=e.id;t(n,null)}),o.state.todaysEvents.forEach(function(e){var n=e.id;t(n,null)})},o.checkVLPModules=function(e){var t=d()(e,function(e){return e.event_grid.events}),r=d()(e,function(e){return e.header_benefits});r&&!n.i(M.D)(r.benefits)&&n.i(M.g)('VLP template received incomplete data for "header_benefits" module'),Array.isArray(t)&&0===t.length&&n.i(M.g)('VLP template received incomplete data for "event_grid" module'),Array.isArray(e.sections)&&e.sections.length>0&&e.sections.forEach(function(e){var t=d()(e,function(t){return t[e.acf_fc_layout]});n.i(M.D)(t)||n.i(M.g)('VLP template received incomplete data for "'+e.acf_fc_layout+'" module')})},o.wrapperOptions=function(e){var t=e.acf_fc_layout,n={benefits:{size:"default"},sponsored_content:{tag:"aside",size:"adPadding"},generic_content:{size:"default"},venue_tour:{tag:"aside",size:"adPadding"},plan_ahead:{size:"default"},visual_link_list:{size:"default"},accessibility:{size:"default"}};return n[t]?n[t]:{}},o.renderLeaderBoardAd=function(e,t){var n=e.background_color,r=e.leaderboard_ad.ad_id,a=o.props.modules.venue.name,i="ad"+t,s=K(n);return U(P.A,{tag:"aside",size:"adPadding",color:s},i,U(y.a,{id:r,"data-linkmodule":"ad-slot","data-linklocation":"ad-slot",link_type:"ad","data-linkadvertiser":r,"data-venuename":Z(a,"-"),lazy:!0},i))},o.state={eeEventsDataById:{},filteredCards:[],hasRockettesShows:!1,rockettesShows:[],structuredData:{},todaysEvents:[],timezone:""},o}return o(t,e),Y(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.ids,a=t.modules,i=t.modules,o=i.header_benefits,s=i.venue,u=i.venue_tour,c=t.pageMeta,l=t.pageSlug,f=t.venue_id,p=d()(s,function(e){return e.name});this.setTodaysShows(),this.setEventCards(a),this.checkVLPModules(a),this.getEeResults(r),this.setTimezone(f),n.i(L.h)(R.s).then(function(t){var r=t[p];e.setState({structuredData:n.i(T.a)({header_benefits:o,pageMeta:c,pageSlug:l,venue:s,venue_tour:u,vlpSchema:r})})}).catch(function(e){throw Error(e)})}},{key:"componentWillUnmount",value:function(){var e=this.props.modules;this.unsetEventCards(e)}},{key:"UNSAFE_componentWillUpdate",value:function(e){var t=e.modules,n=this.props.modules;n.venue!==t.venue&&(this.unsetEventCards(n),this.checkVLPModules(t),this.setEventCards(t),N({venueData:W(t)}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.isApp,a=t.modules,i=t.partnerLogo,o=t.venue_id,s=this.state,c=s.filteredCards,l=s.hasRockettesShows,f=s.rockettesShows,p=s.timezone,v=s.todaysEvents,m=v.concat(c);l&&m.unshift(f[0]);var g=G({},d()(a,function(e){return e.venue})),y=d()(a,function(e){return e.happening_now})||{},b=y.enabled,E=y.time_delay,S=d()(a,function(e){return e.header_benefits}),A=K(S&&S.background_color),w=d()(a,function(e){return e.sections}),k=Array.isArray(w)&&w.map(function(t,r){var a=t.acf_fc_layout,i=t.background_color,o=$[a],s=d()(t,function(e){return e[a]}),c=K(i);return"recommended_events"===a||"on_sale_soon"===a?u.a.createElement(o,G({key:r,wrapperColor:c},t)):"leaderboard_ad"===a?e.renderLeaderBoardAd(t,r):o&&n.i(M.D)(s)&&u.a.createElement(P.A,G({key:r},e.wrapperOptions(t),{color:c}),u.a.createElement(o,G({},s,{venue:g})))});return U(P.A,{main:!0,className:F.a.root,killTop:r},void 0,U(P._61,{}),U(P._62,{venueName:g.name,venueId:o,isFlagSet:b,intervalTime:E}),Array.isArray(m)&&m.length>1&&U(P.A,{hero:!0},void 0,U(h.a,{cards:m,hasRockettesShows:this.state.hasRockettesShows,onShowTimesSelect:this.onShowTimesSelect,eeEventsDataById:this.state.eeEventsDataById,timezone:p,venue:g})),S&&n.i(M.D)(S.benefits)&&u.a.createElement(P.A,G({},this.wrapperOptions({acf_fc_layout:"benefits"}),{color:A}),u.a.createElement(_.a,G({},S.benefits,{venue:g,renderEyebrowAsH1:!0}))),U(P._63,{partnerLogo:i}),k,U(P._64,{data:this.state.structuredData}))}}]),t}(s.Component);X.defaultProps={pageMeta:{},pageSlug:""};var ee=function(e){var t=[];return e.forEach(function(e){e.event_detail.map(function(e){return t.push(e.id)})}),t},te=function(e){var t=n.i(j.p)(e),r=d()(t,function(e){return e.event_grid.events})||[],a=d()(t,function(e){return e.premier_partner_logo})||"",i=r.filter(function(e){return!e.is_venue_card})||[],o=ee(i)||[],s=n.i(z.u)(e),u=s.isApp,c=d()(t,function(e){return e.venue.event_engine_id});return{eventCards:r.map(function(t){return G({},t,{selectedEvent:n.i(j.f)(e,t.id),selectedEventId:n.i(O.b)(e,t.id)})}).filter(function(e){return!n.i(x.g)(e.start_date)&&!n.i(x.j)(e.start_date)||e.is_venue_card}),ids:o,isApp:u,modules:t,pageMeta:n.i(j.z)(e),pageSlug:n.i(j.c)(e),partnerLogo:a,venue_id:c}},ne={setEdpSelectedEventId:D.w};t.default=m()(F.a)(n.i(p.connect)(te,ne)(X))},3014:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(11),i=n.n(a),o=n(142),s=n.n(o),u=n(50),c=n.n(u),d=n(8),l=n(45),f=n(24),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v={entertainment:"Madison Square Garden Entertainment",sports:"Madison Square Garden Sports"},m={active:"EventScheduled",cancelled:"EventCancelled",postponed:"EventPostponed",rescheduled:"EventRescheduled"},g=function(e){var t=e.eventDetails,a=t.events,o=t.image,u=t.is_sport,g=t.name,h=t.past_event,_=e.pageMeta.description,y=e.pageSlug,b=e.venue;if(!n.i(d.e)(a)||h)return null;var E=i()(b,function(e){return e.name}),S=_||g+" at "+E,A=i()(b,function(e){return e.url.cta_page.url}),w=A&&""+l.r+A.slice(1),k=v[u?"sports":"entertainment"],C=o.url,P=n.i(d.f)(C);return a.map(function(e){var t=e.start_date,r=e.times,a=e.timezone;return n.i(d.e)(r)?r.map(function(e){var n=e.end_date,r=e.id,o=e.on_sale_date,u=e.previous_date_time,d=e.price,v=e.startDateTime,h=e.status,_=""+l.r+s.a.join(y,r).slice(1),A=i()(d,function(e){return e.min}),C=i()(o,function(e){return e.public.startDateTime}),D=h===f.h&&!!u,O=D&&c.a.tz(u,a).format(),z=n?t:c.a.tz(v,a).format(),j=n||c.a.tz(v,a).add(2,"h").format(),T="https://schema.org/"+m[D?"rescheduled":h];return p({"@context":"https://schema.org","@type":"Event",name:g,description:S,image:P,startDate:z,endDate:j},D&&{previousStartDate:O},{eventStatus:T,eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",location:p({name:E,address:{"@type":"PostalAddress",streetAddress:i()(b,function(e){return e.location.street}),addressLocality:i()(b,function(e){return e.location.city}),addressRegion:i()(b,function(e){return e.location.state.value}),postalCode:i()(b,function(e){return e.location.zipcode}),addressCountry:"US"}},w&&{sameAs:w},{"@type":"Place"}),offers:p({"@type":"Offer",url:_},A&&{price:A},{priceCurrency:"USD",availability:"http://schema.org/InStock"},C&&{validFrom:C}),performer:{"@type":"PerformingGroup",name:g},organizer:{"@type":"Organization",name:k,url:l.r}})}):null}).reduce(function(e,t){return[].concat(r(e),r(t))},[])};t.a=g},3015:function(e,t,n){"use strict";var r=n(142),a=n.n(r),i=n(45),o=function(e){var t=e.faqSchema,n=e.pageMeta,r=n.description,o=n.title,s=e.pageSlug,u=a.a.join(i.r,s),c=t.about,d=t.address,l=t.breadcrumb,f=t.contentLocation,p=t.contentReferenceTime,v=t.copyrightYear,m=t.countryOfOrigin,g=t.genre,h=t.headline,_=t.image,y=t.isFamilyFriendly,b=t.keywords,E=t.mainContentOfPage,S=t.mainEntityQuestion,A=t.mainEntityAnswer,w=t.priceRange,k=t.ratingValue,C=t.ratingCount,P=t.reviewedBy,D=t.significantLink;return{"@context":"http://schema.org","@type":"FAQPage",about:c,aggregateRating:{"@type":"AggregateRating",itemReviewed:{"@type":"LocalBusiness",address:d,image:_,name:o,priceRange:w,telephone:t.telephone},ratingCount:C,ratingValue:k},breadcrumb:l,contentLocation:{"@type":"Place",name:f},contentReferenceTime:p,copyrightYear:v,countryOfOrigin:{"@type":"Country",name:m},description:r,genre:g,headline:h,isFamilyFriendly:y,keywords:b,mainContentOfPage:E,mainEntity:{"@type":"Question",name:S,acceptedAnswer:{"@type":"Answer",text:A}},name:o,relatedLink:u,reviewedBy:P,significantLink:D,url:u}};t.a=o},3016:function(e,t,n){"use strict";var r=n(3014),a=n(3017),i=n(3015);n.d(t,"c",function(){return r.a}),n.d(t,"b",function(){return i.a}),n.d(t,"a",function(){return a.a});r.a,a.a},3017:function(e,t,n){"use strict";var r=n(11),a=n.n(r),i=n(142),o=n.n(i),s=n(45),u=n(8),c=function(e){var t=e.header_benefits,r=e.pageMeta.description,i=e.pageSlug,c=e.venue,d=e.venue_tour,l=e.vlpSchema,f=a()(c,function(e){return e.image.url}),p=n.i(u.f)(f),v=a()(c,function(e){return e.name}),m=a()(d,function(e){return e.cta.cta_page.url}),g=m&&o.a.join(s.r,m),h=o.a.join(s.r,i),_=l.areaServed,y=l.brand,b=l.currenciesAccepted,E=l.dissolutionDate,S=l.email,A=l.event,w=l.foundingDate,k=l.latitude,C=l.logo,P=l.longitude,D=l.maximumAttendeeCapacity,O=l.openingHours,z=l.paymentAccepted,j=l.potentialAction,T=l.ratingValue,R=l.sameAs,L=l.smokingAllowed;return{"@context":"http://schema.org","@type":["EventVenue","EntertainmentBusiness"],name:v,aggregateRating:{"@type":"AggregateRating",ratingValue:T},brand:y,contactPoint:{"@type":"ContactPoint",areaServed:_,email:S,telephone:l.telephone},currenciesAccepted:b,description:r,dissolutionDate:E,event:{"@type":"Event",name:A},foundingDate:w,geo:{"@type":"GeoCoordinates",latitude:k,longitude:P},hasMap:a()(c,function(e){return e.location.address_url}),image:p,location:{"@type":"Place",name:v,address:{"@type":"PostalAddress",streetAddress:a()(c,function(e){return e.location.street}),addressLocality:a()(c,function(e){return e.location.city}),addressRegion:a()(c,function(e){return e.location.state.value}),postalCode:a()(c,function(e){return e.location.zipcode}),addressCountry:"US"}},logo:C,maximumAttendeeCapacity:D,openingHours:O,paymentAccepted:z,potentialAction:j,sameAs:R,slogan:a()(t,function(e){return e.benefits.headline}),smokingAllowed:L,tourBookingPage:g,url:h}};t.a=c},3023:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,"._2m8cj{margin-top:55px}@media (min-width:768px){._2m8cj{margin-top:55px}}@media (min-width:1024px){._2m8cj{margin-top:70px}}",""]),t.locals={root:"_2m8cj"}},3029:function(e,t,n){var r=n(3023),a=n(3),i="string"==typeof r?[[e.i,r,""]]:r;t=e.exports=r.locals||{},t._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return a(i,e)}}});