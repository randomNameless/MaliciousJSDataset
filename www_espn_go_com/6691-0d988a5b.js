(self.webpackChunkfitt=self.webpackChunkfitt||[]).push([[6691],{496500:(e,t,n)=>{var a,s=n(450239),r=n(421800),i=s.FALSE,o=s.keys,u=s.forEach,l=s.first,p=s.mix,d=s.strlc,g=s.cnum,f=s.cstr,c=s.idxOf,h=s.isAry,y=s.isFunc,m=s.emptyObj,v=s.emptyAry,b=s.passThru,S=s.strReplace,C=n(575065),D=n(390231),w=D.LEAGUE_NAMES,E=D.getSeasonLabelBySeasonType,k=D.getSportWordBySlug,N=n(923992),T=n(313311),O=n(218721),$=n(435161),B=n(252628),L=n(763105),R=n(354061),x=n(838169),M=n(227361),A=n(998601),G=n(822154),F=N.format,I=G.LANGUAGE.EN,P="YYYY",V="param",U=/~g:\d*/,Y=G.SEASONTYPE_ABBREVIATIONS[2];function K(e){return $(e,(function(e){return{team:{displayName:e.team,id:e.id,uid:e.uid,links:[{href:e.link,rel:["desktop","clubhouse"]}]},stats:e.stats}}))}function j(e){var t=e&&e.entries;return{id:e&&e.id,name:e&&e.header,entries:t&&K(t),href:e&&e.href}}function H(e,t,n,a){let s=a||m,r=s.displayName,i=q(s.startDate),o=q(s.endDate);return t===w.SOCCER&&"fifa.olympics"!==d(n)&&i!==o?function(e,t){return`${e}-${f(parseInt(t,10)).slice(-2)}`}(i,o):t!==w.SOCCER&&r?r:e}function q(e){return e&&F(e,P)}function _(e,t,n,a,s,r){let i=t||m,o=i.season,u=f(i.seasontype),l=T(e,(function(e){return f((e||m).year)===f(o)}))||m,p=T(l.types,(function(e){return f((e||m).id)===f(u)}))||m,d=T(n,[V,a])||m,g=T(s,[V,r])||m;return{groupType:g.text,groupKey:g.key,seasonType:p.name,seasonTypeId:p.id,standingType:d.text,standingKey:d.key,year:l.displayName}}function z(){C.apply(this,arguments)}a={buildMapKey:function(e){let t=e.type;return"clincher"===t?t+e.displayValue:t},buildStatMap:function(e,t){let n=e&&e.standings,a=n&&n.entries,s=t&&o(t).length||0,r=this;return u(a,(e=>{let n=e&&e.stats;u(n,(e=>{let n=r.buildMapKey(e);t[n]||(t[n]={t:e.type,d:e.description,a:e.shortDisplayName||e.abbreviation,i:s++})}))})),t},getGroups:function(e,t){var n=this,a=[],r=t||{};function i(e){return e&&e.standings}return h(e)?a=$(e,(function e(t){var a,s;return i(t)?(n.buildStatMap(t,r),n.parseGroup(t,r)):(t&&t.children&&(s=t.children,a=$(s,e)),T(a,(e=>null!==e))?{name:t.name,children:a}:null)})):s.isObj(e)&&i(e)&&(n.buildStatMap(e,r),a.push(n.parseGroup(e,r))),{headers:r,groups:a}},getMetadata:function(e,t,n,a,s){let r=e&&e.name,i=s&&s.year||t&&t.season;return{nm:r,ssn:i&&this.getSeasonDisplayValue(i,n,a,s),vw:this.getRoutingParam("view")}},getRequestDates:function(e){const t=function e(t){return h(t)&&t.length&&(t=T(t,(function(e){var t=(e||m).standings||m;return t.season&&t.seasonType}))||l(t)),t&&t.standings?t.standings:t&&t.children?e(t.children[0]):void 0}(e);return{season:t&&t.season,seasontype:t&&t.seasonType}},getSeasonDisplayValue:H,getFooterCaption:function(e,t,n){let a=this.translate||b,s=(e||m).groups||v,r=(l(s)||m).notes||"";return t===w.SOCCER&&r?r:a(n||"Standings are updated with the completion of each game.")},parse:function e(t,n,a,s){var r=this,i=r.super(e)(t,n,a,s),o=r.state&&r.state.routing,l=o&&o.params,d=t&&t.news,g=d&&d.length&&d[0],c=g&&g.data,y=c&&r.parseNews(c),v=i&&i.leagues,b=i&&i.standings,C=b&&b.length&&b[0],E=C&&C.id,k=S(C&&C.uid,U,""),N=C&&C.children,T=N&&N.length?N:C,O=T&&r.getGroups(T),B=O&&O.headers||{},G=T&&r.getRequestDates(T),F=G&&G.season,P=C&&C.seasons,V=C&&C.rules,Y=P&&r.parseCurrentSeason(P),K=r.state&&r.state.app,j=K&&K.edition,H=j&&j.country,q=j&&j.language,z="us"===H&&q===I,W=l&&l.sport,J=W===w.SOCCER,Q=j&&j.config,X=Q&&Q.sportConfigs,Z=X&&X[W],ee=Z&&Z.defaultLeague,te=void 0===typeof ee&&J?z?"eng.1":"esp.1":ee,ne=i&&r.parseLeagues(v),ae=V&&r.parseRules(V),se=r.getRoutingParam("league"),re=P&&r.parseSeasons(P,W,se),ie=r.getLeagueUIConfig(r.config,l,Y,G,B,re)||m,oe=ie&&ie.filters,ue=ie&&ie.pageHeadingOverride,le=ie&&ie.footerCaptionOverride,pe=ie&&ie.hideGroupTitle,de=oe&&oe.data,ge=oe&&oe.defaultSelected,fe=l&&l.view||ge&&ge.view||"",ce=l&&l.group||ge&&ge.group||"",he=de&&de.groups,ye=x(r.translateBy,r,"key"),me=he&&he.length&&$(he,ye),ve=de&&de.views||[],be=ve&&ve.length?ve&&ve.length&&$(ve,x(r.translateTabName,r)):[],Se=de&&de.seasontypes,Ce=Se&&Se.length&&$(Se,ye),De=P&&F&&function(e){return h(e)&&e.length&&R(e,((e,t)=>{let n=t&&t.types||[],a=f(t&&t.year),s=L(n,(e=>!(!e||!e.hasStandings)));return a&&(e[a]=$(s,(e=>{var t=e&&e.name||"";return{param:e&&e.id||"",key:t,text:t}}))),e}),{})}(P)[F],we=P&&F&&r.getSeasonByYear(P,F)||Y,Ee=C&&r.getMetadata(C,G,W,se,we||te),ke=Ee&&Ee.nm,Ne=D.isCollegeByLabel(se),Te={leagueUid:k,leagueId:E,news:y,groups:O,requestedDates:G,seasons:re,leagues:ne,md:Ee,rules:ae,currentSeason:Y,pageHeading:!Ne&&r.getPageHeading(C,se,G,fe,ve,re,W,ke,ue,we),footerOptions:{caption:r.getFooterCaption(O,W,le),glossaryTitle:r.translate("Glossary"),nbaTourneyCaption:r.translate("nba.standings.footerCaption")},metadata:_(P,G,be,fe,me,ce),leagueNameApi:M(i,"standings[0].name"),div:se===w.nba||se===w.wnba},Oe=p(Te,[{filters:{data:{groups:me,views:be,seasontypes:Ne||"standings"!==fe?null:Ce||De},active:{group:ce,view:fe}}},ie],{noOvr:2});return pe&&u(M(Te,"groups.groups"),(function(e){A(e,"name"),A(e,"abbreviation")})),Oe},parseAltFormat:function(e,t){var n,a,s,r=e&&e.groups||[],o=e&&e.fullViewLink||{},p=o.href,d=o.text,g=this,f=[],c=l(r),h=M(c,"standings.entries",v),y=M(c,"groups[0].standings.entries",v),m=M(c,"divisions[0].standings.entries",v),b=h.length||m.length||y.length;if(u(t,(function(e){f.push(e.id)})),b)return $(r,(function(e){return n=function(e,t,n,a){var s=e.standings,r=e.divisions||e.groups;return r?{divisions:$(r,(function(e){return j(e.standings||{})}))}:j(s)}(e),a=g.parseStandingsFeed(n),s={dspNm:e&&e.header,feed:a,tmFeat:f},g?.state?.app?.flags?.exLnks!==i&&(s.lnk=p,s.lnkTxt=d),s}))},parseCurrentSeason:function(e){var t,n,a=l(e),s=a&&a.startDate,r=a&&a.endDate,i=a&&a.year,o=a&&a.types,u=q(r),p=q(s),d=null;return a&&(N.isBetween(new Date,s,r)&&(n=T(o,(e=>N.isBetween(new Date,e.startDate,e.endDate)))),t=T(o,{abbreviation:Y}),n||(n=o[o.length-1]),d={year:i,seasonType:n.id,name:this.translate(n.name),abbreviation:n.abbreviation,startDate:p,endDate:u,displayName:a.displayName,regularSeasonData:{startDate:t?.startDate}}),d},getSeasonByYear:function(e,t){return T(e,{year:t})},parseDivisions:function(e){var t=this;return $(e.divisions,(function(e){let n={};return t.buildStatMap({standings:e},n),{id:e.id,name:e.name,entries:t.parseEntries(e.entries,n),statMap:n}}))},parseEntries:function(e,t,n){return e?$(e,(e=>this.parseEntry(e,t,n))):null},parseEntry:function(e,t,n){let a=e&&e.team,s=e&&e.stats,r=e&&e.note;return{team:this.parseTeam(a),stats:this.parseStats(s,t,n),note:r}},parseGroup:function(e,t){var n=e&&e.standings,a=n&&n.entries,s=this.parseEntries(a,t,e),r=this.parseNotes(a);return n&&{name:e.name,abbreviation:e.abbreviation,standings:s,notes:r}},parseLeagues:function(e){var t=e&&e.length&&e[0],n=t&&t.leagues,a=[];return u(n,(function(e){if(e&&s.cbool(e.hasStandings)){var t=e&&e.midsizeName;a.push({id:d(t)||e&&e.id,name:e&&e.name,abbreviation:e&&e.abbreviation,season:e&&e.season})}})),a},parseRules:function(e){return e&&e.Story||""},parseSeason:function(e,t,n){var a=e||m,s=a.types,r=f(a.year),i={};return h(s,!0)&&(i=function(e){let t={};return u(e,(e=>{let n=e&&e.abbreviation,a=e&&e.id,s=!!e&&!!e.hasStandings;n&&a&&(t[n]=t[a]=s)})),t}(s)),{year:g(r),label:this.getSeasonDisplayValue(r,t,n,a),standingsByType:i,hasStandings:-1!==c(B(i),!0)}},parseSeasons:function(e,t,n){return h(e)&&e.length&&$(e,(e=>this.parseSeason(e,t,n)))},parseStandingsFeed:function(e){let t,n=this,a={};return O(e,"entries")?(n.buildStatMap({standings:e},a),t=[{entries:n.parseEntries(e.entries,a),statMap:a}]):O(e,"divisions")&&(t=n.parseDivisions(e)),t},parseStats:function(e,t,n){let a=[],s=this;return h(e)&&e.length&&u(e,(e=>{let r=s.buildMapKey(e),i=t&&t[r]&&t[r].i;a[i]=this.transformValue(e,n)})),a},parseResourceOptions:function(e,t){var n=e||m;return{label:this.translate(n.label),url:n.url||"",hidden:n.hidden,value:n.hidden?void 0:t}},parseNotes:function(e){let t,n=this,a={},s=[];return e&&(t=L(e,(e=>e.note)),u(t,(e=>{let t=e.note,n=t.description,s=t.rank;a[n]?a[n].push(s):a[n]=[s]})),s=$(a,((e,t)=>{let a=1!==e.length?"Positions":"Position";return`${n.translate(a)} ${e.join(", ")}: ${n.translate(t)}`}))),s},translateBy:function(e,t){var n=e||"key";return p({},[t,{text:t&&t[n]&&this.translate(t[n])||""}])},getPageHeading:function(e,t,n,a,r,i,o,u,l,p){var d,f,c,h,y=this,b=r||v,S=n?g(n.season):void 0,C=n?g(n.seasontype):void 0,D=p||m,N=o===w.SOCCER,O=D.displayName,$=O?` ${O}`:` ${S}`;return f=1===C||0===b.length?`${d=t===w.wnba&&2===C?"":E(C,t)} Standings`:(d=T(b,{param:a}))&&d.key||"",f=l||s.trim(f),"f1"===t?(c=`Formula One ${f}`,h=`${y.translate(c)}${$}`):N?(c={key:"soccer.standings.title",league:u},S=S&&H(S,o,t,p),h=`${y.translate(c)} ${S}`):(c=`${k(t)} ${f}`,h=`${y.translate(c)}${$}`),h},getLeagueUIConfig:function(e,t,n,a,s,r){var i=e||m;if(y(i.getUIConfigByLeague))return i.getUIConfigByLeague(t,n,a,s,r)},transformValue:function(e){let t=e&&e.displayValue;if(t&&c(t," PTS")>=0){let e=t.split(",");t=e&&e[0]}return t},translateTabName:function(e){var t=e?.translationKey||e?.param;return r({},e,{text:this.translate(t)})}},z.prototype=a,C.inherits(z,C),e.exports=z},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},218721:(e,t,n)=>{var a=n(78565),s=n(900222);e.exports=function(e,t){return null!=e&&s(e,t,a)}}}]);