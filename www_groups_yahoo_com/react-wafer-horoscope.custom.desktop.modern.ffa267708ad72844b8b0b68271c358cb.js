"use strict";window.wafer.ready((function(){window.wafer.on("form:submit",(e=>{const{elem:t={}}=e;if(t.getAttribute("data-test-horoscopeselect")){const e=document.getElementById("horoscope-select");window.rapidInstance&&window.rapidInstance.beaconClick("app-hor",e&&e.value||"",0,{elm:"dropdown",itc:1,pos:e.selectedIndex+1},"")}}))}));