var _statcounter=function(B){var L=!1;function de(y,D){for(var I=0;I<D.length;I++)if(D[I]==y)return!0;return!1}function we(y){return de(y,[12225189,11548023,11878871,12214659,981359,9560334,6709687,9879613,4124138,204609,10776808,11601825,10011918])}function Ue(y){return!1}function Pe(y){return!1}function me(y){return!1;if(Q){var D;if(D.indexOf("counter_test_uncompressed.js")!==-1||D.indexOf("counter_test.js")!==-1)return!0}}try{var y=function(e,t){D()?document.writeln(e):$.insertAdjacentHTML("afterend",e)},D=function(e){return e==="invisible"?!1:$===!1||!$.insertAdjacentHTML},I=function(e){return de(e,[4344864,4124138,204609])||e>Wt},pt=function(e){return de(e,[10011918,4124138])},It=function(e){var t=!0;try{if(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage"in window&&"withCredentials"in new XMLHttpRequest||(t=!1),E("sc_project_config_"+e)===1&&E("sc_project_time_difference_"+e)!==null&&(t=!1),E("sc_block_project_config_"+e)!==null&&(t=!1),t){var r=N("sc_project_config_"+e,-1);r?xe="good":xe="bad";var n=E("sc_project_config_"+e);t=n===-1,xe+=n}}catch(i){t=!1}return t},We=function(){var e=""+g.referrer;return typeof sc_referer_scr08!="undefined"&&(e=sc_referer_scr08),e},Ne=function(){var e=""+g.title;return e=e.substring(0,300),encodeURIComponent?e=encodeURIComponent(e):e=escape(e),e},q=function(){var e=""+g.location;return e=="about:srcdoc"&&(e=""+document.baseURI),e=e.substring(0,300),e=escape(e),e},xt=function(){return p.screen.width},St=function(){return p.screen.height},Oe=function(e){if(vt==0){var t="",r="",n="";try{if(typeof performance!="undefined"){var i=Math.round(performance.now());t="&sc_rum_e_s="+ye+"&sc_rum_e_e="+i;var a=i-ye;r=Et(e,a)}}catch(l){t="",r=""}try{if(typeof performance!="undefined")for(var f=performance.getEntriesByType("resource"),s=0;s<f.length;s++){var u=f[s];if(u.name.includes("statcounter.com/counter/counter.js")||u.name.includes("statcounter.com/counter/counter_xhtml.js")||u.name.includes("statcounter.com/counter/frames.js")||u.name.includes("statcounter.com/counter/counter_test.js")){n="&sc_rum_f_s="+Math.round(u.requestStart)+"&sc_rum_f_e="+Math.round(u.responseEnd);break}}}catch(l){n=""}return t+r+n}return""},Et=function(e,t){var r="";if(pt(e)&&typeof performance!="undefined"){var n=document.getElementById("sc-ttfb-bd"),i="-1";n&&(i=n.textContent);var a=performance.timing.responseStart-performance.timing.connectStart,f=document.getElementById("sc-perf-wh"),s=0;f&&(s=f.textContent);var u=document.getElementById("sc-perf-pn"),l=0;u&&(l=u.textContent);var v=document.getElementById("sc-perf-db"),c=0;v&&(c=v.textContent),r="&sc_ev_scperf_js_exec="+t+"&sc_ev_scperf_ttfb_frontend="+a+"&sc_ev_scperf_ttfb_backend="+i+"&sc_ev_scperf_ws="+s+"&sc_ev_scperf_pn="+l+"&sc_ev_scperf_db="+c}return r},Tt=function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var r=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,n=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(n,"").replace(r,function(i,a){return t.indexOf("<"+a.toLowerCase()+">")>-1?i:""})},Mt=function(e){for(var t=0;t<e.length;t++)e[t]=(""+e[t]).trim();return e},Lt=function(e){var t=10,r=1,n=300,i=[];if(e.length%2!=0)i.push("Every tag must have a name and value.");else{e.length/2>t&&i.push("No more than "+t+" tags can be passed - "+e.length/2+" passed.");for(var a=0;a<e.length;a++){var f=(""+e[a]).length;(f<r||f>n)&&i.push("Tag names and values must be between "+r+" and "+n+" characters in length ('"+e[a]+"' is "+e[a].length+" characters long).")}for(var a=0;a<e.length;a++)Tt(""+e[a])!=""+e[a]&&i.push("Tag names and values may not contain HTML tags.")}if(i.length!=0){for(var a=0;a<i.length;a++);return!1}return!0},Nt=function(e){function t(f,s){var u=f.__proto__||f.constructor.prototype;return s in f&&(!(s in u)||u[s]!==f[s])}if(Object.prototype.hasOwnProperty)var t=function(s,u){return s.hasOwnProperty(u)};var r={};if(t(e,"tags")&&typeof e.tags=="object"){var n=[];for(var i in e.tags)n[n.length]=i,n[n.length]=e.tags[i];if(Lt(n)){n=Mt(n);for(var a=0;a<n.length;a=a+2)r["sc_ev_"+encodeURIComponent(n[a])]=encodeURIComponent(n[a+1])}}return r},Ot=function(e){var t,r=e.length,n=this,i=0,a=n.i=n.j=0,f=n.S=[];for(r||(e=[r++]);i<z;)f[i]=i++;for(i=0;i<z;i++)f[i]=f[a=k&a+e[i%r]+(t=f[i])],f[a]=t;(n.g=function(s){for(var u,l=0,v=n.i,c=n.j,h=n.S;s--;)u=h[v=k&v+1],l=l*z+h[k&(h[v]=h[c=k&c+u])+(h[c]=u)];return n.i=v,n.j=c,l})(z)},ke=function(e,t){var r=[],n=(typeof e)[0],i;if(t&&n=="o")for(i in e)try{r.push(ke(e[i],t-1))}catch(a){}return r.length?r:n=="s"?e:e+"\0"},Ae=function(e,t){for(var r=e+"",n,i=0;i<r.length;)t[k&i]=k&(n^=t[k&i]*19)+r.charCodeAt(i++);return j(t)},At=function(e){try{return window.crypto.getRandomValues(e=new Uint8Array(z)),j(e)}catch(t){return[+new Date,window,window.navigator.plugins,window.screen,j(Se)]}},j=function(e){return String.fromCharCode.apply(0,e)},fe=function(e){var t=!1;e===void 0&&(e=32,t&&(e=36));try{var r=crypto.randomUUID().toUpperCase();if(t||(r=r.replace(/-/g,"")),r.length<=e)return r.substring(0,e)}catch(c){}var n=new Date,i=Math.round(n.getTime()/1e3)+n.getMilliseconds(),a=(navigator.userAgent||"")+(navigator.platform||"")+n.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+i;Kt(a);for(var f="0123456789ABCDEF".split(""),s=new Array(e),u=0,l,v=0;v<e;v++)t&&(v==8||v==13||v==18||v==23)?s[v]="-":v==12&&!t||v==14&&t?s[v]="4":v==13&&!t||v==15&&t?s[v]="F":(u<=2&&(u=33554432+ct()*16777216|0),l=u&15,u=u>>4,s[v]=f[v==19?l&3|8:l]);return s.join("")},Ce=function(){var e=!1;if("localStorage"in window)try{e=window.localStorage!==null}catch(t){if(t.name&&t.name.toLowerCase()==="securityerror"&&window!==window.top)return!1;if((!t.name||t.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!t.number||parseInt(t.number,10)!==-2147024891))throw t}return e},Be=function(e,t,r){if(Ce()){try{e==="is_visitor_unique"?localStorage.setItem("statcounter.com/localstorage/",t):localStorage.setItem("statcounter_"+e,t)}catch(n){if((!n.name||n.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!n.number||parseInt(n.number,10)!==-2147024891))throw n;return!1}return!0}return!1},Ye=function(e,t,r,n,i,a){typeof t=="string"&&(t=[t]),n===void 0&&(n=""),i===void 0&&(i=30);var f=!1;if(K=="localStorage")f=Be(e,n+t.join("-"),r),f?oe(e)!==null&&qe(e,r):f=Ze(e,n+t.join("-"),r,void 0,a);else{var s=t.slice(0,i).join("-");f=Ze(e,n+s,r,void 0,a),f?t.length>i?Be(e,"mx"+t.slice(i).join("-"),r):Ke(e):f=Be(e,n+t.join("-"),r)}return f},Qe=function(e,t){var r=null;if(Ce()&&(e==="is_visitor_unique"?r=localStorage.getItem("statcounter.com/localstorage/"):r=localStorage.getItem("statcounter_"+e)),K=="localStorage"&&r!==null&&r.substring(0,2)=="rx")return r;var n=oe(e,t);if(r!==null){if(n===null&&r.substring(0,2)=="rx")return r;n!==null&&r.substring(0,2)=="mx"&&(n+="-"+r.substring(2))}return n},Ke=function(e){Ce()&&(e==="is_visitor_unique"&&localStorage.removeItem("statcounter.com/localstorage/"),localStorage.removeItem("statcounter_"+e))},Ct=function(e,t){Ke(e),oe(e)&&qe(e,t)},oe=function(e,t){var r="sc_"+e+"=",n=null;if(g.cookie)for(var i=g.cookie.split(";"),a=0;a<i.length;a++){for(var f=i[a];f.charAt(0)==" ";)f=f.substring(1,f.length);if(f.indexOf(r)==0){var s=f.substring(r.length,f.length);n&&t!==void 0&&n.includes(""+t+".")&&!s.includes(""+t+".")||(n=s)}}return n},Ze=function(e,t,r,n,i){var a=!1;n===void 0?a=1e3*60*60*24*365*2:n!=="session"&&(a=1e3*n);var f="";if(a!==!1){var s=new Date;s.setTime(s.getTime()+a),f="; expires="+s.toGMTString()}var u=3050;t.length>u-50&&t.substring(0,u).includes("-")&&(t=t.substring(0,t.substring(0,u).lastIndexOf("-")));var l="; SameSite=Lax";g.cookie="sc_"+e+"="+t+f+"; domain="+r+"; path=/"+l;var v=oe(e,i);return v!==null&&v===t},qe=function(e,t){g.location.host=="www"+t&&(g.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+t+"; path=/; SameSite=Lax"),g.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+t+"; path=/; SameSite=Lax"},je=function(){var e={};try{sessionStorage.getItem("statcounter_config")!==null&&(e=JSON.parse(sessionStorage.getItem("statcounter_config")))}catch(t){e={}}return e},E=function(e){if(!("sessionStorage"in window))return null;var t=je();if(t[e]!==void 0)return t[e];var r=null;try{r=sessionStorage.getItem(e)}catch(n){return null}return r!==null?(N(e,r),sessionStorage.removeItem(e),r):null},N=function(e,t){if(!("sessionStorage"in window))return console.log("returning false"),!1;var r=je();try{return r[e]=t,sessionStorage.setItem("statcounter_config",JSON.stringify(r)),!0}catch(n){return!1}},Bt=function(e,t,r){var n="t.php",i=W;if(Ue(e)&&(n="t_static.php"),Pe(e)&&(n="counter_test.php"),me(e)&&(i="https://1fctest.statcounter.com/"),t.substring(0,1)=="?")var a=i+n+t;else var a=t;a=a+"&xhr_request=true",De(a,r)},De=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var i=JSON.parse(this.responseText);t(i)}},r!==void 0&&n.addEventListener("error",r),n.withCredentials=!0,n.open("GET",e,!0),n.send()},_e=function(e,t){N("sc_project_config_"+e,1);var r=N("sc_project_time_difference_"+e,parseInt(t.time_difference));if(r?He="true":He="false",Ie=t.time_difference,t.visitor_recording>2&&(t.visitor_recording%2==0?N("heatmap_"+e,"test"):N("heatmap_"+e,"on")),t.visitor_recording===1||t.visitor_recording===3)o.record(e);else if(t.visitor_recording===2||t.visitor_recording===4)o.record(e,"test");else if(t.visitor_recording===5||t.visitor_recording===6)o.record(e,"off");else{var n=E("record_"+e);n&&n.includes("dev")&&Ee(e)}t.visitor_recording_unmask!==void 0&&N("sc_unmask_"+e,t.visitor_recording_unmask)},se=function(e,t,r){o.get_config(t,function(n){_e(e,n),typeof r!="undefined"&&r(n)})},le=function(e){e==11601825&&q().includes("statcounter-vs-google-analytics")&&_e(e,{time_difference:1800,visitor_recording:3})},Dt=function(e,t){var r=e.split("."),n=t.split("."),i=Math.min(r.length,n.length),a=2;r.length>1&&(r[r.length-2].length<=3&&r[r.length-1]in{at:1,au:1,br:1,es:1,hu:1,il:1,nz:1,tr:1,uk:1,us:1,za:1}||r[r.length-1]=="kr"||r[r.length-1]=="ru"||r[r.length-1]=="au"&&r[r.length-2]in{csiro:1}||r[r.length-1]=="at"&&r[r.length-2]in{priv:1}||r[r.length-1]=="fr"&&r[r.length-2]in{avocat:1,aeroport:1,veterinaire:1}||r[r.length-1]=="hu"&&r[r.length-2]in{film:1,lakas:1,ingatlan:1,sport:1,hotel:1}||r[r.length-1]=="nz"&&r[r.length-2]in{geek:1,kiwi:1,maori:1,school:1,govt:1,health:1,parliament:1}||r[r.length-1]=="il"&&r[r.length-2]in{muni:1}||r[r.length-1]=="za"&&r[r.length-2]in{school:1}||r[r.length-1]=="tr"&&r[r.length-2]in{name:1}||r[r.length-1]=="uk"&&r[r.length-2]in{police:1})&&(a=3);for(var f=1;f<=i;f++){if(r[r.length-f]!=n[n.length-f])return!1;if(f>=a)return!0}return r.length==n.length},et=function(e,t){if(t=="")return"d";var r=t.split("/")[2].replace(/^www\./,""),n=g.location.host.replace(/^www\./,"");if(I(e)&&(n==r||Dt(r,n)))return"internal";if(t.search(/\bgoogle\..*\?.*adurl=http/)!==-1)return"p";for(var i=["utm_source=bing","?gclid=","&gclid=","?msclkid=","&msclkid=","utm_medium=cpc","utm_medium=paid","utm_medium=ppc"],a=0;a<i.length;a++)if(g.location.search.includes(i[a]))return"p";for(var f=["utm_medium=email"],a=0;a<f.length;a++)if(g.location.search.includes(f[a]))return"e";if(!I(e)&&n==r)return"internal";for(var s in ae)if(r.replace(s,"#").split(".").includes("#")){if(ae[s]===null)return s;for(var a=0;a<ae[s].length;a++){var u=ae[s][a];if(t.includes("?"+u+"=")||t.includes("&"+u+"="))return s}}for(var l in Te)for(var a=0;a<Te[l].length;a++){var s=Te[l][a];if(r.replace(s,"#").split(".").includes("#"))return l}return r},ue=function(e){return e=="d"||e=="p"||e=="e"||e=="internal"?e:e in ae?"o":e in Te?"s":"r"},Je=function(e){if(window.sc_counter_width&&window.sc_counter_height)var t=' width="'+sc_counter_width+'" height="'+sc_counter_height+'"';var r="StatCounter - Free Web Tracker and Counter";return window.sc_remove_alt&&(r=""),'<img src="'+e+'" alt="'+r+'" border="0"'+t+">"},_=function(e,t,r){var n={};n.u1="za";var i=It(e);try{Re=Date.now()}catch(A){}if(ie[e]=new Date().getTime(),window!==p)if(p.sc_top_reg===void 0&&(p.sc_top_reg={}),p.sc_top_reg[e]===void 0)p.sc_top_reg[e]=1;else{Ee(e);return}var a={};if(!I(e)){var f=et(e,Me),s=ue(f);f!="internal"&&(a.rcat=s,a.rdom=f)}var u=Math.round(new Date().getTime()/1e3);if(K!="disabled"){if(I(e)){var f=et(e,Me),s=ue(f);f!="internal"&&(a.rcat=s,a.rdom=f)}try{var l=JSON.parse(localStorage.getItem("sc_medium_source"));l==null&&(l={});var v=null,c=null,h=null,x=0;for(var d in l){(v===null||l[d]>l[v])&&(v=d);var T=ue(d);s==T&&(c===null||l[d]>l[c])&&(c=d),T=="r"&&(h===null||l[d]<l[h])&&(h=d),x+=1}x>30&&h!==null&&delete l[h],sessionStorage.getItem("statcounter_bounce")&&(sessionStorage.removeItem("statcounter_bounce"),a.bb=0);var O=30;if(I(e)||(O=15),f=="d"&&v!==null&&v!="d"&&u-l[v]<60*O&&(f="internal"),I(e)&&(sessionStorage.getItem("statcounter_session")&&u-parseInt(sessionStorage.getItem("statcounter_session"),10)<60*30&&(f="internal"),sessionStorage.setItem("statcounter_session",u)),I(e)||s=="r"&&sessionStorage.getItem("statcounter_exit_domain")==f&&(f="internal"),f=="internal")v!==null&&(a.rcat=ue(v),a.rdom!==void 0&&delete a.rdom,a.rdomo=v,a.rdomg=u-l[v],l[v]=u);else{var w=!1;f in l?(f==v&&a.rdom!==void 0&&(a.rdomo=a.rdom,delete a.rdom),a.rdomg=u-l[f],u-l[f]<60*30&&(w=!0)):a.rdomg="new",a.bb===void 0&&!w&&(sessionStorage.setItem("statcounter_bounce","1"),a.bb=1),c!==null&&(!(f in l)||f!=c)&&(a.rcatg=u-l[c]),l[f]=u}try{localStorage.setItem("sc_medium_source",JSON.stringify(l))}catch(A){I(e)&&(a={})}}catch(A){I(e)&&(a={})}for(var S in a)r[S]=a[S];if(a.rdom!==void 0)var b=!0;else var b=!1;var M=o.update_cookie(e,u,b);if(M.session_incremented){var X=E("record_"+e);X&&!X.match(/(^test$|wsdev$|^dev[0-9]*)/)&&(i=!0,N("sc_project_time_difference_"+e,!1))}o._session_increment_calculated[e]=!0,r.jg=M.jg,r.rr=M.rr,M.u1!==void 0&&(n.u1=M.u1)}if(Object.prototype.toString.call(o._pending_tags)==="[object Array]"){var P=o._pending_tags.length;if(P>=1){var ee=Nt(o._pending_tags[0]);for(var S in ee)r[S]=ee[S]}}o._pending_tags={},tt(e,t,i,n,r),Me=q(),Ee(e)},tt=function(e,t,r,n,i){n.java=1,n.security=o._security_codes[e],n.sc_snum=R,n.sess=o.version();var a=W;if(t=="text")a+="text.php?";else{var f="t.php";Ue(e)&&(f="t_static.php"),Pe(e)&&(f="counter_test.php"),me(e)&&(a="https://1fctest.statcounter.com/"),a+=f+"?"}e!==999?a+="sc_project="+e:window.usr&&(a+="usr="+window.usr);for(var s in n)a+="&"+s+"="+n[s];i.resolution=xt(),i.h=St(),i.camefrom=Me.substring(0,600),i.u=q(),i.t=Ne(),t=="invisible"?i.invisible="1":t=="text"&&(i.text=window.sc_text);var u="";for(var s in i)u+="&"+s+"="+i[s];if(t=="invisible"){var l=!1;m!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage"in window&&(l=!0);var v=!1;if(l)try{var c=sessionStorage.getItem("statcounter_pending");if(c)try{var h=JSON.parse(c)}catch(J){var h={}}else var h={};h[e]===void 0&&(h[e]={});var x=new Date().getTime();for(h[e][x]=u;;){if(c=JSON.stringify(h),c=="{}"){sessionStorage.removeItem("statcounter_pending");break}var d=c.split(/:.{20}/).length-1;if(d<20){var T=!0;try{sessionStorage.setItem("statcounter_pending",c)}catch(J){if(!J.name||J.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")throw J;T=!1}if(T)break}var O=!1,w=!1,S=!1;for(var b in h)for(var M in h[b]){var X=/jg=(\d+)/.exec(h[b][M]);if(X!==null)var P=parseInt(X[1]);else var P=!1;(O===!1||P!==!1&&P<O)&&(P!==!1&&(O=P),w=b,S=M)}if(S===!1)break;delete h[w][S],JSON.stringify(h[w])=="{}"&&delete h[w]}for(var ee in h[e])(function(J,C){var he=h[C][J];function ot(){h[C]!==void 0&&(delete h[C][J],JSON.stringify(h[C])=="{}"&&delete h[C]);var st=JSON.stringify(h);st=="{}"?sessionStorage.removeItem("statcounter_pending"):sessionStorage.setItem("statcounter_pending",st)}var ce=a+he;if(J!=x?ce+="&pg="+Math.round((x-J)/1e3):(v=!0,ce+=Oe(e)),r)se(e,ce,function(st){ot(),le(e)});else if(navigator.sendBeacon)navigator.sendBeacon(ce,""),ot();else{var Gt=new Image;Gt.onload=ot,Gt.src=ce+"&sc_random="+Math.random()}le(e)})(parseInt(ee,10),e)}catch(J){}if(!l||!v){var A=a+Oe(e)+u;if(r)se(e,A,function(J){le(e)});else if(navigator.sendBeacon)navigator.sendBeacon(A,"");else{var _t=new Image;_t.src=A+"&sc_random="+Math.random()}le(e)}}else{var A=a+Oe(e)+u,F="sc_counter_"+e;if(R!=1&&(F+="_"+R),t=="text"){var Xt=function(C){if(C.text)document.getElementById(F).innerHTML=C.text;else if(C.counter_image){var he=Je(C.counter_image);document.getElementById(F).innerHTML=he}};r?(y('<span class="statcounter" id="'+F+'"></span>',e),se(e,A,Xt)):(y('<span class="statcounter" id="'+F+'"></span>',e),Bt(e,A,Xt))}else{if(window.sc_remove_link)var Ft=' id="'+F+'"',it="",ft="";else var Ft="",it='<a id="'+F+'" class="statcounter" href="https://www.'+lt+'/" target="_blank">',ft="</a>";r?(y('<span class="statcounter"'+Ft+">"+it+"Statcounter"+ft+"</span>",e),se(e,A,function(C){var he=Je(C.counter_image);document.getElementById(F).innerHTML=he})):(A+="&sc_random="+Math.random(),y('<span class="statcounter">'+it+Je(A.replace(/&/g,"&amp;"))+ft+"</span>",e))}}vt++},ve=function(e){var t=function(){for(var r in o._security_codes)nt(parseInt(r,10),this);return!0};e.addEventListener?e.addEventListener("mousedown",t):e.attachEvent&&e.attachEvent("onmousedown",t)},Jt=function(){},rt=function(){if(window.sc_click_stat)var e=window.sc_click_stat;else var e=0;for(var t=new Date,r=t.getTime()+e;t.getTime()<r;)var t=new Date},nt=function(e,t,r){var n="https?|ftp|telnet|ssh|ssl|mailto|spotify|zoommtg|zoomus|slack|skype|callto|bitcoin|gtalk|tel",i="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com",a=new RegExp("\\.("+ut+")$","i"),f=new RegExp("^("+n+"):","i"),s=new RegExp("^("+i+")$","i"),u=location.host.replace(/^www\./i,""),l=u.split("."),v=l.pop(),c=l.pop();s.test(c)&&(v=c+"."+v,c=l.pop()),v=c+"."+v;var h="^https?://(.*)("+v+"|webcache.googleusercontent.com)",x=new RegExp(h,"i");if(t){var d=0;if(f.test(t)?x.test(t)?a.test(t)?d=1:($e!==!1&&$e.test(t)||re==2)&&(d=2):d=2:r===!0&&(d=2),d!=0){var T=escape(t);if(T.length>0){if(!I(e)&&d==2&&K!="disabled"&&f.test(t))try{sessionStorage.setItem("statcounter_exit_domain",T.split("/")[2].replace(/^www\./,""))}catch(X){}var O=W;me(e)&&(O="https://1fctest.statcounter.com/");var w=O+"click.gif?sc_project="+e+"&security="+o._security_codes[e]+"&c="+T+"&m="+d+"&u="+q()+"&t="+Ne()+"&sess="+o.version()+"&rand="+Math.random(),S=Math.round(new Date().getTime()/1e3),b=o.update_cookie(e,S);b.u1!==void 0&&(w+="&u1="+b.u1),w+="&jg="+b.jg,w+="&rr="+b.rr;var M=new Image;M.onload=Jt,M.src=w,o._add_recording_event&&o._add_recording_event(d==1?"download":d==2?"exit":"unknown",{link:unescape(T)}),rt()}}}},ge=function(e,t){if(t.src.match(Ve))var r=escape(t.src);else var r=escape("Google Adsense "+t.width+"x"+t.height);var n=W+"click.gif?sc_project="+e+"&security="+o._security_codes[e]+"&c="+r+"&m=2&u="+q()+"&t="+Ne()+"&sess="+o.version()+"&rand="+Math.random(),i=Math.round(new Date().getTime()/1e3),a=o.update_cookie(e,i);if(a.u1!==void 0&&(n+="&u1="+a.u1),n+="&jg="+a.jg,n+="&rr="+a.rr,navigator.sendBeacon)navigator.sendBeacon(n,"");else{var f=new Image;f.src=n,rt()}o._add_recording_event&&o._add_recording_event("adsense",{link:unescape(r)})},Ut=function(e){var t=e.defaultView,r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,n=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(r||n)for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)i[a].id.substring(0,6)=="aswift"&&i[a].addEventListener("mouseenter",function(s){for(var u in o._security_codes)ge(parseInt(u,10),this)});else if(e.all&&typeof window.opera=="undefined")for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)(i[a].src.match(Ve)||i[a].id.match(dt))&&(i[a].onfocus=function(){for(var l in o._security_codes)ge(parseInt(l,10),this)});else if(typeof window.addEventListener!="undefined"){var f="unload";f="beforeunload",t&&(t.focus(),t.addEventListener("blur",function(){var s=e.activeElement;Le=s,wt=new Date().getTime()}),t.addEventListener(f,Ht,!1),t.addEventListener("mousemove",zt,!0))}},Pt=function(){var e=navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return 10>=parseInt(e.substring(t+5,e.indexOf(".",t)),10);var r=e.indexOf("Trident/");if(r>0){var n=e.indexOf("rv:");return 11>=parseInt(e.substring(n+3,e.indexOf(".",n)),10)}return!1},zt=function(e){typeof e.pageX=="number"?(Y=e.pageX,Z=e.pageY):typeof e.clientX=="number"&&(Y=e.clientX,Z=e.clientY,g.body&&(g.body.scrollLeft||g.body.scrollTop)?(Y+=g.body.scrollLeft,Z+=g.body.scrollTop):g.documentElement&&(g.documentElement.scrollLeft||g.documentElement.scrollTop)&&(Y+=g.documentElement.scrollLeft,Z+=g.documentElement.scrollTop))},Rt=function(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t},$t=function(e){for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;return t},Ht=function(e){var t=g.getElementsByTagName("iframe");if(typeof Y!="undefined")for(var r=0;r<t.length;r++){var n=$t(t[r]),i=Rt(t[r]),a=parseInt(n,10)+parseInt(t[r].width,10)+15,f=parseInt(i,10)+parseInt(t[r].height,10)+10,s=Y>n-10&&Y<a,u=Z>i-10&&Z<f;if(u&&s&&(t[r].src.match(Ve)||t[r].id.match(dt)))for(var l in o._security_codes)ge(parseInt(l,10),t[r])}if(typeof Le!="undefined"&&Le.id.substring(0,6)=="aswift"){var v=new Date().getTime()-wt;if(v<300)for(var l in o._security_codes)ge(parseInt(l,10),Le)}},Vt=function(e){var t=!1;for(var r in o._security_codes){var n=parseInt(r,10);(we(n)||n==12718861||n==12537497)&&(t=!0)}if(t)try{var i=function(f){try{if(f.nodeType!==1)return;(f.tagName.toLowerCase()=="a"||f.tagName.toLowerCase()=="area"&&typeof f.hasAttribute=="function"&&f.hasAttribute("href"))&&ve(f),f.hasChildNodes()&&f.childNodes.forEach(i)}catch(s){}},a=new MutationObserver(function(f){try{f.forEach(function(s){return s.addedNodes.forEach(i)})}catch(s){}});a.observe(e.body,{subtree:!0,childList:!0})}catch(f){}},at=function(e){for(var t=e.defaultView,r=function(){Ut(e)},n=e.getElementsByTagName("a"),i=e.getElementsByTagName("area"),a=0;a<n.length;a++){var f=n[a];ve(f)}for(var a=0;a<i.length;a++){var f=i[a];typeof f.hasAttribute=="function"&&f.hasAttribute("href")&&ve(f)}if(Vt(e),typeof window.addEventListener!="undefined")t.addEventListener("load",r,!1);else if(typeof e.addEventListener!="undefined")e.addEventListener("load",r,!1);else if(typeof window.attachEvent!="undefined")t.attachEvent("onload",r);else if(typeof window.onload=="function"){var s=onload;t.onload=function(){s(),r()}}else t.onload=r},pr=y,hr=D,yr=I,Hr=pt,Ar=It,nr=We,Dr=Ne,Gr=q,Wr=xt,rn=St,ar=Oe,vr=Et,Cr=Tt,br=Mt,Lr=Lt,Jr=Nt,Zr=Ot,gr=ke,ir=Ae,or=At,dr=j,Mr=fe,qr=Ce,wr=Be,Ir=Ye,rr=Qe,nn=Ke,xr=Ct,kr=oe,Pr=Ze,Nr=qe,Or=je,Vr=E,Xr=N,jr=Bt,Fr=De,fr=_e,sr=se,zr=le,Ur=Dt,Sr=et,Rr=ue,_r=Je,$r=_,er=tt,Yr=ve,Qr=Jt,lr=rt,Kr=nt,Br=ge,en=Ut,tr=Pt,tn=zt,Er=Rt,mr=$t,cr=Ht,ur=Vt,Tr=at,o,R=1,te=!1,ze,G={};try{G=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}}),G._heatmap&&G._heatmap.match("^(dev[^.]+.)?statcounter$")&&(te=!0,ze="https://"+G._heatmap+".com")}catch(e){}if(typeof B!="undefined"&&B.record_pageview?(o=B,R=o._get_script_num()+1):(typeof B=="undefined"?(o=function(){},o._pending_tags={}):(B.start_recording?(o=B,B._pageview_tags_in&&(B=B._pageview_tags_in)):o=function(){},Object.prototype.toString.call(B)==="[object Array]"?o._pending_tags=B:o._pending_tags={}),o._session_increment_calculated={},o._returning_values={},o._security_codes={}),te&&R!==1)return o.record_pageview||(o.record_pageview=function(){}),o;o.push=function(e){o._pending_tags=[e]};var ye=!1;if(typeof performance!="undefined")try{ye=Math.round(performance.now())}catch(e){ye=!1}var $=!1,Q=!1;if(document.currentScript&&document.currentScript.src){try{$=document.currentScript}catch(e){var be=document.getElementsByTagName("script");if(be.length){for(var pe=be.length-1;pe>=0;pe--)if(be[pe].src.includes("/counter")){$=be[pe];break}}}if($)try{new URL($.src).host.replace(/www\.|dev.[0-9]+\./,"")==="statcounter.com"&&(Q=$.src)}catch(e){}}var re=-1,W="",lt="statcounter.com",m="",K="cookie",Re=!1,ut="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";typeof window.sc_download_type=="string"&&(ut=window.sc_download_type);var $e=!1;typeof window.sc_exit_link_detect=="string"&&($e=new RegExp(sc_exit_link_detect,"i")),window.sc_client_storage&&(K=window.sc_client_storage),typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"&&(K="disabled"),window.sc_click_stat&&(re=window.sc_click_stat),window.sc_local?W=sc_local:(re==-1&&(re=1),W="https://c."+lt+"/"),window.sc_project&&(L=parseInt(window.sc_project,10),window.sc_security?o._security_codes[L]=sc_security:o._security_codes[L]===void 0&&(o._security_codes[L]=""));var Wt=9e6,H=[30,60,120,180,360,720,1440,2880,10080],Ie="ntd",He="ntd",xe="ntd";o.get_top_window=function(){for(var e=window;e.parent&&e.parent!==e;)try{var t=e.parent.document;e=e.parent}catch(r){break}return e};var p=o.get_top_window(),g=p.document;o.get_referrer=We;var vt=0;if(o.inject_script=function(e,t){if(!(e===void 0||!e.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/))){var r=document.createElement("script");r.type="text/javascript",r.async=!0;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(r,n),t&&(r.onload=t,r.onreadystatechange=function(){this.readyState=="complete"&&t()}),r.src=e}},te){var ne=document.createElement("script");G._heatmap.startsWith("dev")||!G.hev?(ne.setAttribute("src",ze+"/js/heatmap-embedded.module.js"),ne.setAttribute("type","module")):ne.setAttribute("src",ze+"/js/packed/heatmap-embedded-"+G.hev+".js"),ne.sc=!0,document.head.appendChild(ne)}var Se=[],z=256,gt=6,kt=52,Yt=Math.pow(z,gt),ht=Math.pow(2,kt),Qt=ht*2,k=z-1,ct,Kt=function(e,t){var r=[],n=Ae(ke(t?[e,j(Se)]:0 in arguments?e:At(),3),r),i=new Ot(r);return Ae(j(i.S),Se),ct=function(){for(var a=i.g(gt),f=Yt,s=0;a<ht;)a=(a+s)*z,f*=z,s=i.g(1);for(;a>=Qt;)a/=2,f/=2,s>>>=1;return(a+s)/f},n};Ae(Math.random(),Se);var V;typeof window.sc_cookie_domain=="undefined"?V=g.location.host.replace(/^www\./,""):V=window.sc_cookie_domain,V.substring(0,1)!="."&&(V="."+V),o.getSessionConfig=E,o._recording_initiated===void 0&&(o._recording_initiated={});var Ee=function(e){if(!te&&!o._recording_initiated[e]){var t=E("record_"+e);if(!(!t||!t.match(/(^on$|off|test$|test_[a-z]{12}$|wsdev$|^dev[0-9]*)/))){try{if(g.location.pathname.startsWith("/wp-admin/"))return}catch(i){}if(!Pt()&&!!o._session_increment_calculated[e]&&!!E("sc_project_time_difference_"+e)){if(window!==p){if(p.sc_top_reg===void 0&&(p.sc_top_reg={}),p.sc_top_reg[e]===2)return;p.sc_top_reg[e]=2}var r=E("heatmap_"+e)||"off";if(o.start_recording)o.start_recording(e,t,Re,r);else{var n="https://www.statcounter.com/counter/recorder.js";Q&&(n=Q.replace(/\/(counter|frames)([^\/])/,"/recorder$2").replace("_xhtml",""),n=n.replace(/^http:\/\//,"https://")),(t.includes("test")||r.includes("test"))&&(n=n.replace(/\/recorder(.[^t])/,"/recorder_test$1")),t.includes("_")&&(n=n.replace(/\.js/,"_"+t.split("_")[1]+".js")),t.substring(0,3)=="dev"&&t!=="dev"?n=n.replace(/\/\/(www\.|secure\.)?/,"//"+t.split("_")[0].replace(/\//g,"").replace("test","").replace("off","").replace("wsdev","")+"."):n=n.replace(/\/\/(secure\.)?statcounter\./,"//www.statcounter."),o.inject_script(n,function(){_statcounter.start_recording(e,t,Re,r)})}o._recording_initiated[e]=!0}}}};o.get_config=function(e,t){var r=!1;e.match(/sc_project=[0-9]+/)&&(r=parseInt(e.match(/sc_project=([0-9]+)/)[1],10));var n="t.php",i=W;if(Ue(r)&&(n="t_static.php"),Pe(r)&&(n="counter_test.php"),me(r)&&(i="https://1fctest.statcounter.com/"),e.substring(0,1)=="?")var a=i+n+e;else var a=e;a=a+"&get_config=true",r!==!1?De(a,t,function(f){N("sc_block_project_config_"+r,1)}):De(a,t)};var ae={google:null,bing:["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,baidu:["wd","word"],yandex:["text"],"ya.ru":["text"],haosou:["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],aol:["query","q"],duckduckgo:null,"ask.com":["q","QUERYT"],"mail.ru":["words"],sogou:["q","query"]},Te={fb:["facebook.com","fb.me"],pi:["pinterest.com"],tw:["twitter.com","t.co"],ln:["linkedin.com"],in:["instagram.com"],rd:["reddit.com"],tb:["tumblr.com"],st:["stumbleupon.com"],yt:["youtube.com"],gp:["plus.google.com","plus.url.google.com"]},Me=escape(We());o.record_pageview=function(e,t){if(!te){var r="invisible";if(typeof e=="undefined"){if(L===!1)if(window.usr)e=999;else{console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments"),y("Statcounter code invalid. Insert a fresh copy.",e);return}else e=L;window.sc_invisible&&window.sc_invisible==1?r="invisible":window.sc_text?r="text":r="image"}else if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_pageview with your statcounter project id");return}else if(typeof t=="string")o._security_codes[e]=t;else if(o._security_codes[e]===void 0){console.error("Please include the security code for project "+e+" as the second argument to record_pageview");return}o._security_codes[e]===void 0&&(o._security_codes[e]="");var n=0;(e==4135125||e==6169619||e==6222332||e==5106510||e==6311399||e==6320092||e==5291656||e==7324465||e==6640020||e==4629288||e==1480088||e==2447031)&&Math.floor(Math.random()*6)!=1&&(n=1);var i=!1,a=/Chrome/.test(navigator.userAgent),f=!1;try{if(navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&navigator.userAgentData.platform&&!D(r)&&(navigator.userAgentData.platform==="Windows"||a)){i="[pending]";var s=["platformVersion"];a&&s.push("model"),navigator.userAgentData.getHighEntropyValues(s).then(function(l){i=parseInt(l.platformVersion.split(".")[0]),a&&(f=l.model)}).catch(function(l){if(we(e))throw l})}}catch(l){if(we(e))throw l}if(n!=1)if(g.webkitVisibilityState=="prerender"){if(R==1){var l=function(){if(g.webkitVisibilityState!="prerender"){for(var v in o._security_codes)a&&f?_(parseInt(v,10),"invisible",{p:2,pv:i,dm:f}):_(parseInt(v,10),"invisible",{p:2,pv:i});g.removeEventListener("webkitvisibilitychange",l,!1)}},u=l;g.addEventListener("webkitvisibilitychange",l,!1)}tt(e,r,!1,{},{p:1})}else i=="[pending]"?setTimeout(function(){a&&f?_(e,r,{p:0,pv:i,dm:f}):_(e,r,{p:0,pv:i})},1):_(e,r,{p:0})}};var ie={};o.record_click=function(e,t){if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_click with your statcounter project id");return}else if(o._security_codes[e]===void 0){console.error("Please set up security codes (e.g. by calling record_pageview) prior to record_click");return}nt(e,t,!0)};var Ve="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net",dt="^aswift_[0-9]+$",Y,Z,Le,wt;if(o.update_cookie=function(e,t,r){t===void 0&&(t=Math.round(new Date().getTime()/1e3));var n=E("sc_project_time_difference_"+e),i={},a="1.1.1.1.1.1.1.1.1",f="is_visitor_unique";try{var s=Qe(f,e)}catch(P){var s=!1;m=".ex"}var u=[],l=[];if(s&&s.substring(0,2)=="rx"){Ct(f,V);var v=s.substring(2);u=v.split("-");for(var c=!1,h=!1,x=0;x<u.length;x++){var d=u[x].split(".");if(parseInt(d[0],10)==e){c=!0;var T=parseInt(d[1],10);o._returning_values[e]=[];var O=2;d[2].length==32?(m="."+d[2],O=3):m=h;for(var w=0;w<H.length;w++){var S=parseInt(d[w+O],10);isNaN(S)&&(S=1),o._returning_values[e].push(S)}i.jg=t-T;for(var w=0;w<H.length;w++)r?o._returning_values[e][w]++:t>T+60*H[w]&&(H[w]*60===n&&(i.session_incremented=!0),o._returning_values[e][w]++);i.rr=o._returning_values[e].join("."),l.push(""+e+"."+t+m+"."+o._returning_values[e].join("."))}else l.push(u[x]),x==0&&d[2].length==32&&m==""&&(m="."+d[2]);x==0&&(h=m)}c||(l.length==0&&m==""&&(m="."+fe()),l.push(""+e+"."+t+m+"."+a),o._returning_values[e]=a.split("."),i.jg="new",i.rr=a),l.sort(function(P,ee){return parseInt(ee.split(".")[1],10)-parseInt(P.split(".")[1],10)});for(var b=1;b<l.length;b++)l[b]=l[b].replace("."+l[0].split(".")[2]+".",".");var M=Ye(f,l,V,"rx",3,e)}else if(m!=".ex"){m="."+fe(),l=[""+e+"."+t+m+"."+a];var X=Ye(f,l,V,"rx",3,e);X?(o._returning_values[e]=a.split("."),i.jg="new",i.rr=a):m=".na"}return m!=""&&(i.u1=m.substring(1)),i},o.get_visitor_id=function(){if(m.length>1)return m.substring(1);var e=!1;try{e=Qe("is_visitor_unique")}catch(t){}return e&&e.substring(0,2)=="rx"&&e.split(".").length>2&&e.split(".")[2].length==32?e.split(".")[2]:"x-no-visitor"},o.get_session_num=function(e){var t=E("sc_project_time_difference_"+e),r=!1;if(!t&&Ie!=="ntd"?r=Ie:r=t,r!=!1&&o._session_increment_calculated[e]&&o._returning_values[e]!==void 0&&o._returning_values[e].length==H.length){for(var n=0;n<H.length;n++)if(H[n]*60==parseInt(r))return o._returning_values[e][n]}var i="-"+Ie+"-"+e+"-"+He+"-"+xe;if(t===null)return"x-no-session-num-99"+Math.round(1e3*Math.random())+i;if(o._session_increment_calculated[e]){if(o._returning_values[e].length!==H.length)return"x-no-session-num-97"+Math.round(1e3*Math.random())+i;if(t==!1)return"x-no-session-num-96"+Math.round(1e3*Math.random())+i}else return"x-no-session-num-98"+Math.round(1e3*Math.random())+i;return"x-no-session-num-95"+t+i},o.version=function(){return"7810d0"},o.get_tab_session=function(){var e=!1;try{if(e=sessionStorage.getItem("statcounter_tab_session"),!e){e=fe(8);try{sessionStorage.setItem("statcounter_tab_session",e)}catch(t){e=!1}}}catch(t){e=!1}if(e===!1)session_tab_id="x-no-session-storage-"+Math.round(1e5*Math.random());else return e},o.record=function(e,t){if(t===void 0&&(t="on"),e===void 0||e==="on"||e==="dev")if(L!==!1)console.log("Turning on session recording for p"+L),e=L;else return;else if(parseInt(e,10)+""==e)e=parseInt(e,10);else return;N("record_"+e,t),E("sc_project_time_difference_"+e)||N("sc_project_time_difference_"+e,1800),Ee(e)},o._get_script_num=function(){return R},R==1){if(re>0){var U=[];for(U.push.apply(U,g.getElementsByTagName("frame")),U.push.apply(U,g.getElementsByTagName("iframe"));U.length;){var Zt=U.pop(0);try{var Xe=Zt.contentDocument;at(Xe),U.push.apply(U,Xe.getElementsByTagName("frame")),U.push.apply(U,Xe.getElementsByTagName("iframe"))}catch(e){}}at(g)}try{var mt=g.getElementsByTagName("title");if(mt.length){var yt=g.title,Fe=g.location.href.split("#")[0],qt=new MutationObserver(function(){var e=g.location.href.split("#")[0];if(g.title!=yt&&e!=Fe){for(var t in o._security_codes){var r=parseInt(t,10);(ie[r]===void 0||new Date().getTime()-ie[r]>1e3)&&setTimeout(function(n){(ie[n]===void 0||new Date().getTime()-ie[n]>1e3)&&(p.sc_top_reg!==void 0&&(p.sc_top_reg[n]=void 0),o.record_pageview(n))},200,r)}o._add_recording_event&&o._add_recording_event("history-pageload",{referrer:Fe,href:e}),yt=g.title,Fe=e}});qt.observe(mt[0],{childList:!0,attributes:!1,subtree:!1})}}catch(e){}}return o._generate_uuid=fe,o}catch(y){if(L!=!1&&we(L)){typeof encodeURIComponent!="function"&&(encodeURIComponent=function(D){return escape(D)});var Ge="";for(var bt in y)Ge+="property: "+bt+" value: ["+y[bt]+"]\n";Ge+="toString():  value: ["+y.toString()+"]\n";var jt=new Image;jt.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(g.location.protocol+"//"+g.location.host+g.location.pathname+g.location.search+g.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+L+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(Ge)}}}(_statcounter);_statcounter.record_pageview();