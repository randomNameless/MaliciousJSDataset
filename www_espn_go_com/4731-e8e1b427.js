(self.webpackChunkfitt=self.webpackChunkfitt||[]).push([[4731],{292908:(e,s,t)=>{var a=t(785893);t(667294);const r=t(450239),i=t(294184),o=t(45697),n=t(822154),l=t(676812),m=r.strlc,c=r.emptyAry,d=n.THEMES,p=d.DARK,_=d.LIGHT,g="right";function u(e,s){let t,r,o=s&&s.theme,d=o===p,u=`#${e&&e.bgColor||"f1f2f3"}`,T=m(u)===m("#FFFFFF"),h=l(u,{theme:o})||c,N={backgroundColor:h[0]},f={backgroundColor:h[1]},v={backgroundColor:u},x=e&&e.direction||g,S=e&&e.id,E=e&&e.alt||"",y=e&&e.logoSrc||`${n.SECURE_HOST}${n.COMBINER_PATH}?img=/i/teamlogos/soccer/500/default-team-logo-500.png&w=100&h=100`,b="sm"===e.size;return r=i(`Logo-Container Logo-Container--${x}`,{"Logo-Container--sm":b}),t=i("LogoEnhanced",{"LogoEnhanced--left":"left"===x,"LogoEnhanced--border":T&&o===_,"LogoEnhanced--right":x===g,"LogoEnhanced--dark":d},e.className),a.jsxs("div",{className:r,children:[a.jsx("div",{className:t,style:v,id:S,children:a.jsx("div",{className:"LogoEnhanced__Wrapper relative w-100 h-100",children:a.jsx("img",{className:"LogoEnhanced__Logo absolute",src:y,alt:E})})}),a.jsx("div",{className:"SkewedLine SkewedLine--1",style:N}),a.jsx("div",{className:"SkewedLine SkewedLine--2",style:f})]})}t(116415),u.contextTypes={theme:o.string},e.exports=u},780530:(e,s,t)=>{"use strict";t.d(s,{W:()=>m}),t(667294);var a=t(45697),r=t.n(a),i=t(450239),o=t(785893);t(710220);const n="",l="TBD-Flex Game";function m(e,s){let t=s?.translate||i.passThru,a=e?.className,r=e?.gameNote||n,m=e?.statusDetail||t(l);return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("span",{children:m}),(0,o.jsx)("span",{children:r})]})}m.propTypes={translate:r().func.isRequired,className:r().string,gameNote:r().string,statusDetail:r().string},m.contextTypes={translate:r().func}},841042:(e,s,t)=>{var a=t(785893),r=(t(667294),t(294184)),i=t(45697),o=t(834248).PropTypes,n=t(822154),l=t(390231),m=t(227361),c=t(359704),d=t(313311),p=t(450239),_=p.cbool,g=p.FALSE,u=p.TRUE,T=p.emptyObj,h=p.emptyAry,N=p.isNum,f="",v=l.LEAGUE_NAMES,x=l.SPORTS,S=x.BASEBALL,E=l.getConstantsByLeague,y=t(694458),b=t(169373).Network,j=t(466274),O=t(780530).W,L=t(257724),w=t(951681),D=t(539566),G=t(514625),A=t(125907).Table,I=t(965986),P=t(242528),k=n.SCORE_SIZES,R=k.XL,B=k.LG,C=k.MD,F=k.SM,z=k.XS,H=k.XXS,$=n.EVENT_STATES,M=n.THEMES.DARK,K=n.RAIN_DELAY_STATUS_TYPE_ID,U=n.STATUS_DELAYED_TYPE_ID,Y="to_be_determined.abbrev";function W(e,s){var t,i,o,n,l,k,W,X,V,q,Z=e||T,J=Z.className,Q=Z.competitor||h,ee=d(Q,{isHome:u})||T,se=d(Q,{isHome:g})||T,te=ee.aggregateScore,ae=se.aggregateScore,re=Z.invertTeams||g,ie=Z.onefeed||g,oe=Z.sportId,ne=Z.leagueId,le=Z.size||B,me=Z.date,ce=Z.dayOfEvent,de=Z.forcePreDate||g,pe=Z.possAvailable||g,_e=Z.isScoreless,ge=Z.isTBDFlex,ue=Z.live||T,Te=Z.metadata,he=Z.networks||h,Ne=Z.odds,fe=Z.gameNote,ve=Z.timeSlot||f,xe=ue.outsText||f,Se=ue.onBase||h,Ee=Z.statusState,ye=Z.statusDetail,be=Z.status,je=be?.id===K,Oe=be?.id===U,Le=Z.time,we=Z.maxPeriods||4,De=0,Ge=Z.seasonType||2,Ae=Z.seasonYear||2020,Ie=Z.playoffSeries,Pe=Z.hideBases,ke=Z.theme,Re=Z.placement,Be=Ee===$.PRE,Ce=Ee===$.IN,Fe=Ee===$.POST,ze=oe===x.FOOTBALL||"football_v4"===oe,He=oe===x.BASKETBALL,$e=oe===x.MMA,Me=oe===x.HOCKEY,Ke=ne===v.NFL,Ue=ne===v.MLB,Ye=oe===S,We=ne===v.CRICKET,Xe=ke===M,Ve=Z.isTimeDefined,qe=_(Z.hideOutsTxt),Ze=Re?`Gamestrip__Time--${Re}`:"",Je=g,Qe=g,es=g,ss=g,ts=f,as=f,rs=f,is=s&&s.translate||p.passThru,os=Z.headerDownAndDistance,ns={},ls=[],ms={},cs=f,ds=1,ps=0,_s=g,gs=0,us=P.isPostseasonRoundRobin(Ae,Ge,Ie);if(o=r({"clr-gray-04":!Xe}),n=r("BulletPoint",{"BulletPoint--rainDelay":je||Oe}),Ve===g&&(Le?me||(me=is(Y)):Le=is(Y)),pe&&(!Ce||le!==F&&le!==z&&le!==H||(Qe=!0)),os&&(!Ce||le!==F&&le!==z&&le!==H||(Je=!0)),!(ze||He||Me)||le!==R&&le!==B&&le!==C||(es=!0),(Be||Ce&&!es)&&(ss=!0),N(te)&&N(ae)&&(ts=`${is("Agg.")} ${re?`${te}-${ae}`:`${ae}-${te}`}`),Ce||Fe){for(Me?we=E(ne).NUMBER_OF_PERIODS||we:Ue&&(we=E(ne).NUMBER_OF_INNINGS||we),ns.firstRow=f,_s=c(Q,(function(e){return k=e&&e.linescores,De=k&&k.length,k&&k.length>we}));ds<=we;ds++)ns["period"+ds]=ds;_s&&(Me?3===Ge&&De-we>1&&!us?ns.periodOT=De-we+is("OT"):De===E(ne).SHOOTOUT_PERIOD?ns.periodOT=is("SO"):ns.periodOT=is("OT"):ns.periodOT=is("OT")),ns.total="T",(ls=Q.map((function(e){let s=e[Z.teamNameKey];for((ms={}).team=Z.showTeamLogo?a.jsxs("div",{className:"Gamestrip__Table__TeamLogo",children:[a.jsx(w,{src:e.logo,size:"xs",alt:e.displayName}),a.jsx("label",{className:"fw-bold",children:s})]}):s,k=e&&e.linescores||[],W=k.length,gs=0,ps=0;ps<W;ps++)cs="period"+ps,l=m(e,["linescores",ps,"displayValue"]||0),ps<we?ms[cs]=p.cstr(l):gs+=parseInt(l,10);if(W<we)for(q=we-W,ps=0;ps<q;ps++)ms[cs="period"+(ps+W)]=" ";return _s&&(ms.periodOT=p.cstr(gs)),ms.total=e.score,ms}))).reverse()}return t=Q.map((function(e,s){let t=e&&e.isHome;return as=t?"arrow__winner_right":"arrow__winner_left",rs=r("Gamestrip__PossessionIcon","justify-center",{pr2:!t,"pl2 order-3":t,"Gamestrip__PossessionIcon--active":e&&e.poss}),a.jsx(G,{className:rs,icon:as},s)})),i=r("Gamestrip__Outs","h9","clr-gray-01","tc",{pl2:ie,"Gamestrip__Outs--dark":Xe}),X=r("ScoreCell__Score Header__DownDistance",{"Header__DownDistance--dark":Xe}),V=r("Gamestrip__Time",Ze,{"Gamestrip__Time--baseball":Ye,"Gamestrip__Time--rainDelay":Ye&&je,"Gamestrip__Time--noOverview":!es&&Ce&&!Ye}),J=r("Gamestrip__Overview","relative","items-center",o,"flex","justify-center","flex-column","n8",J),a.jsxs("div",{className:J,children:[ss&&$e&&a.jsx(b,{className:"Gamestrip__Network--mma",gamestrips:!0,networks:he,size:le,theme:ke}),ge&&fe&&a.jsx(O,{className:"Gamestrip__FlexGame",gameNote:fe,statusDetail:ye}),Be&&(!$e&&!ce&&!ge||de)&&a.jsx(j,{className:"Gamestrip__ScoreDate",date:me,gamestrips:!0,size:le,sport:oe,theme:ke,onefeed:ie,gameNote:fe}),(!$e||$e&&Ce||$e&&Fe)&&!ge&&a.jsx("div",{className:"Gamestrip__Time--wrapper",children:a.jsxs(L,{className:V,onefeed:ie,gamestrips:!0,time:Le,size:le,status:Ee,sport:oe,theme:ke,dayOfEvent:ce,children:[Ye&&Ce&&!qe&&xe&&a.jsxs("div",{className:"wrapperDiv",children:[a.jsx("div",{className:n,children:" • "}),a.jsx("div",{className:i,children:xe})]}),$e&&Fe&&ve]})}),Ye&&Se&&Ce&&!Pe&&a.jsx(I,{borderWidth:4,events:Se,size:le,isDefault:!1,isGameStrip:!0}),os&&Je&&a.jsx("div",{className:X,children:os}),Be&&($e||ce)&&a.jsx(y,{className:"Gamestrip__Odds",gamestrips:!0,odds:Ne,size:le,theme:ke}),Qe&&a.jsxs("div",{className:`Gamestrip__Possession Gamestrip__Possession--overview flex tc relative items-center n10 ttu v-top ${o}`,children:[t,a.jsx("span",{children:"Poss"})]}),ts&&a.jsx("div",{className:"Gamestrip__Aggregate",children:ts}),Ce&&We&&a.jsx("div",{className:"Gamestrip__GamePlay",children:"Rev Target: 000"}),(Ce||Fe)&&es&&!ie&&!_e&&a.jsx(A,{className:"Gamestrip__Table",headings:ns,rows:ls}),Ce&&Ke&&a.jsx(D,{sport:oe,gamestrips:!0,league:ne,size:le,status:be,metadata:Te,theme:ke}),Ce&&Ue&&ie&&!Pe&&a.jsx(I,{borderWidth:4,events:ue,size:le,isDefault:!1})]})}t(225968),W.contextTypes={translate:i.func},W.propTypes={className:i.string,competitor:i.oneOfType([i.array,o.observableArray]),onefeed:i.bool,sportId:i.string,leagueId:i.string,size:i.string,date:i.string,dayOfEvent:i.bool,live:i.object,networks:i.oneOfType([i.array,o.observableArray]),odds:i.object,showTeamLogo:i.bool,status:i.object,statusState:i.string,teamNameKey:i.string,time:i.string,placement:i.string,hideBases:i.bool},W.defaultProps={className:"",competitor:[],onefeed:!1,sportId:"",leagueId:"",size:"",date:"",dayOfEvent:!1,live:{},networks:[],odds:{},showTeamLogo:!1,status:{},statusState:"",teamNameKey:"abbrev",time:""},e.exports=W},125907:(e,s,t)=>{e.exports=t(114857)},116415:(e,s,t)=>{"use strict";t.r(s)},710220:(e,s,t)=>{"use strict";t.r(s)},225968:(e,s,t)=>{"use strict";t.r(s)}}]);