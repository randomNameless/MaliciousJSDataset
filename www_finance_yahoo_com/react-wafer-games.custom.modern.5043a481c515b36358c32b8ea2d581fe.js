const LOCAL_STORAGE_VARIABLE_NAME="ngyRecentlyPlayedGames",MAX_AMOUNT_OF_GAMES_IN_RECENTLY_PLAYED=2,cleanPath=e=>e.replace("/games/play/","").replace(/\/$/,""),idHeyYahoo="hey yahoo",init=()=>{const{wafer:e}=window,{localStorage:t}=e.features;let a=null;function n(t){let a,n,l;t[0]&&(a=t[0].path,l=`${a}`),t[1]&&(n=t[1].path,l=`${a},${n}`),e.state={recentlyPlayedGames:l,recentlyPlayedGamesUpdateTime:Date.now()}}(()=>{if(a=document.getElementsByClassName("react-wafer-games")[0],a){let l,i=!1;if(t&&(window.wafer.utils.bindEvent(a,"click",(e=>{const{target:a}=e,l=a.getAttribute("data-id");let i=a.getAttribute("data-path");if(l&&i){if(l.toLowerCase()===idHeyYahoo)return;i=cleanPath(i);const e={id:l,path:i};!function(e,a){if(!t)return;let l;e?(l=JSON.parse(e),l=l.filter((e=>e.id!==a.id)),l.length>=2&&l.splice(1),l.unshift(a)):l=[a];window.localStorage.setItem("ngyRecentlyPlayedGames",JSON.stringify(l)),n(l)}(window.localStorage.getItem("ngyRecentlyPlayedGames"),e)}}),{passive:!0}),l=window.localStorage.getItem("ngyRecentlyPlayedGames")),l)try{let e=JSON.parse(l);e=e.filter((e=>e.id.toLowerCase()!==idHeyYahoo)),e.length>0&&(n(e.map((e=>(e.path=cleanPath(e.path),e)))),i=!0)}catch(e){i=!1}if(i)return;e.state={recentlyPlayedGames:"nodata",recentlyPlayedGamesUpdateTime:Date.now()}}})()},{wafer:wafer}=window;wafer?wafer.ready((function(){init()})):document.body.addEventListener("wafer:ready",(()=>{init()}));