webpackJsonpwafer_wafers_wafer_autocomplete([0],{"./src/types recursive ^\\.\\/.*$":function(e,t,r){function a(e){return r(s(e))}function s(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./aol-location":"./src/types/aol-location.js","./aol-location.js":"./src/types/aol-location.js","./aol-markets":"./src/types/aol-markets.js","./aol-markets.js":"./src/types/aol-markets.js","./aol-recipes":"./src/types/aol-recipes.js","./aol-recipes.js":"./src/types/aol-recipes.js","./gossip":"./src/types/gossip.js","./gossip.js":"./src/types/gossip.js","./sports-teams":"./src/types/sports-teams.js","./sports-teams.js":"./src/types/sports-teams.js","./weather":"./src/types/weather.js","./weather.js":"./src/types/weather.js"};a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="./src/types recursive ^\\.\\/.*$"},"./src/types/aol-location.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return a});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments[1],this._util),r=t.idIndex,a=t.listElem,s=document.createDocumentFragment(),i=this._state.savedLocationsUuidMapping,n=void 0===i?{}:i,o=[];for(var l in e)if(e.hasOwnProperty(l)&&"_fetchMeta"!==l){var u=parseInt(l,10);o[u]=e[l]}return o.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.city,a=e.country,i=e.display_name,o=e.full_display_name,l=e.n,u=e.qualifiedName,c=e.statecode,d=e.woeid,p=arguments[1],m=document.createElement("li"),f=o||i||u||l;f||(f=[t,c,a].reduce(function(e,t){return t&&(e=e?e+", "+t:t),e},"")),d+="",m.classList.add("wafer-autocomplete-item","Bg(t)","Pb(0)","Pt(6px)","Px(6px)","Lh(14px)","Fz(12px)","C(aol):h","Tov(e)","Ov(h)","Whs(nw)"),n[d]&&m.classList.add("wafer-autocomplete-saved-item"),m.setAttribute("tabindex",0),m.setAttribute("role","option"),m.setAttribute("data-value",d),m.setAttribute("id","wf-autocomplete-result-"+r+"-"+p),m.innerHTML=f,s.appendChild(m)}),a.innerHTML="",a.setAttribute("class","P(0) M(0) C(white) List(n) Cur(p)"),a.appendChild(s),a}},"./src/types/aol-markets.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return a});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,r=void 0===t?{}:t,a=e.response,s=void 0===a?{}:a,i=arguments[1],n=r.response||s,o=this._util,l=o.idIndex,u=o.listElem,c=n.quotes,d=void 0===c?[]:c,p=document.createDocumentFragment(),m=0;m<d.length;m++){var f=d[m]||{},v=f.exchange,h=f.symbol;if(h.substr(0,i.length).toUpperCase()===i.toUpperCase()){var b=document.createElement("li");b.setAttribute("tabindex",0),b.setAttribute("role","option"),b.setAttribute("id","wf-autocomplete-result-"+l+"-"+m);var g=document.createElement("a");g.classList.add("wafer-autocomplete-item"),g.setAttribute("data-display-value",h),g.setAttribute("href","javascript:void(0);"),g.setAttribute("data-ylk","slk:searchquotes;elm:search;elmt:suggestion;itc:0"),g.innerHTML="<strong>"+h.substr(0,i.length)+"</strong>"+h.substr(i.length)+"<span>"+v+"</span>",b.appendChild(g),p.appendChild(b)}}return u.innerHTML="",u.appendChild(p),u}},"./src/types/aol-recipes.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return s});var a=function(e,t){for(var r=document.createDocumentFragment(),a=e;a.length>0;){var s=new RegExp(t.trim(),"gi"),i=s.exec(a);if(0===s.lastIndex)r.appendChild(document.createTextNode(a)),a="";else{var n=a.slice(0,s.lastIndex-t.trim().length);a=a.slice(s.lastIndex),r.appendChild(document.createTextNode(n)),r.appendChild(document.createElement("mark")).appendChild(document.createTextNode(i[0]))}}return r},s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,r=void 0===t?{}:t,s=arguments[1],i=r,n=this._util,o=n.idIndex,l=n.listElem,u=document.createDocumentFragment(),c=0;c<i.length&&c<5;c++){var d=i[c],p=d.title,m=document.createElement("li");m.setAttribute("tabindex",0),m.setAttribute("role","option"),m.setAttribute("id","wf-autocomplete-result-"+o+"-"+c);var f=document.createElement("a");f.classList.add("wafer-autocomplete-item"),f.setAttribute("data-display-value",p),f.setAttribute("href","javascript:void(0);"),f.setAttribute("data-ylk","sec:releases;subsec:recipes_search;ll2:amp-bon-food;slk:searchrecipes;elm:search;elmt:suggestion;itc:0;"),f.appendChild(a(p,s)),m.appendChild(f),u.appendChild(m)}return l.innerHTML="",l.appendChild(u),l}},"./src/types/gossip.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return a});var a=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.r,r=void 0===t?[]:t,a=arguments[1],s=this._util,i=s.idIndex,n=s.listElem,o=document.createDocumentFragment(),l=0;l<r.length;l++){var u=r[l];if(u.k.substr(0,a.length).toUpperCase()===a.toUpperCase()){var c=document.createElement("li");c.setAttribute("tabindex",0),c.setAttribute("role","option"),c.setAttribute("id","wf-autocomplete-result-"+i+"-"+l),c.innerHTML="\n                    <strong>"+u.k.substr(0,a.length)+"</strong>"+u.k.substr(a.length)+"\n                ",c.classList.add("wafer-autocomplete-item"),c.setAttribute("id","wf-autocomplete-result-"+i+"-"+l),o.appendChild(c)}}return n.innerHTML="",n.appendChild(o),n}},"./src/types/sports-teams.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return n});var a=window.wafer.utils,s=a.getTemplateContent,i=void 0,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.service,r=void 0===t?{}:t,a=(arguments[1],this._util),n=a.idIndex,o=a.listElem,l=document.createDocumentFragment(),u=r.teams,c=void 0===u?{}:u,d=window.wafer.base._state.myteams;if(!i){var p=document.getElementById("wafer-autocomplete-sports-teams-template");i=p&&s(p)}if(i)for(var m in c)if(c.hasOwnProperty(m)){var f=c[m],v=f.full_name,h=f.league,b=f.logo,g=f.team_id,y=document.createElement("li"),w=g.replace(/\./g,"_"),L=d[w];y.classList.add("wafer-autocomplete-item","wafer-autocomplete-sports-teams-item","wafer-bind"),y.setAttribute("data-wf-state-follow-status","[state.myteams."+g.replace(/\./g,"_")+"]"),y.setAttribute("tabindex",0),y.setAttribute("role","option"),y.setAttribute("id","wf-autocomplete-result-"+n+"-"+m),y.setAttribute("data-value",JSON.stringify({id:g,action:"followed"===L?"REMOVE":"ADDED"})),y.setAttribute("data-ylk","cid:"+g+";slk:"+v),y.innerHTML=i.replace("TEAM_LEAGUE_PLACEHOLDER",h).replace("TEAM_LOGO_URL_PLACEHOLDER",b.url).replace("TEAM_NAME_PLACEHOLDER",v),l.appendChild(y)}return o.innerHTML="",o.appendChild(l),o}},"./src/types/weather.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"getListMarkup",function(){return a});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments[1],this._util),r=t.assistData,a=t.currentLocationTemplate,s=t.deteteButtonTemplate,i=t.idIndex,n=t.listElem,o=t.unifiedGeo,l=document.createDocumentFragment(),u=[];for(var c in e)if(e.hasOwnProperty(c)&&"_fetchMeta"!==c){var d=parseInt(c,10);u[d]=e[c]}if(a){var p=document.createElement("li");p.innerHTML=a;var m=p.children[0];m.classList.add("wafer-autocomplete-currentlocaton-item","wafer-autocomplete-item"),m.setAttribute("tabindex",0),m.setAttribute("role","presentation"),l.appendChild(m)}return u.forEach(function(e,t){var a=e.city,n=e.country,u=e.display_name,c=e.full_display_name,d=e.n,p=e.qualifiedName,m=e.statecode,f=document.createElement("li"),v=e.woeid,h=c||u||p||d;h||(h=[a,m,n].reduce(function(e,t){return t&&(e=e?e+", "+t:t),e},"")),e.qualifiedName=h,v+="",f.classList.add("wafer-autocomplete-item"),f.setAttribute("tabindex",0),f.setAttribute("role","option"),f.setAttribute("id","wf-autocomplete-result-"+i+"-"+t),f.setAttribute("data-value",v),f.setAttribute("data-meta",JSON.stringify(e)),f.innerHTML=h,r&&(r.isSavedLocation(v)&&(f.classList.add("wafer-autocomplete-saved-item"),s&&(f.innerHTML+=s.innerHTML)),o&&r.addLocation(e)),l.appendChild(f)}),n.innerHTML="",n.appendChild(l),n}}});