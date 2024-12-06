/**handles:wp-accessibility-helper**/
(function(b){if(typeof define==="function"&&define.amd){define(b)}else{if(typeof exports==="object"){module.exports=b()}else{var a=window.Cookies;var c=window.Cookies=b();c.noConflict=function(){window.Cookies=a;return c}}}}(function(){function b(){var f=0;var c={};for(;f<arguments.length;f++){var d=arguments[f];for(var e in d){c[e]=d[e]}}return c}function a(d){function c(o,n,k){var r;if(typeof document==="undefined"){return}if(arguments.length>1){k=b({path:"/"},c.defaults,k);if(typeof k.expires==="number"){var h=new Date();h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);k.expires=h}try{r=JSON.stringify(n);if(/^[\{\[]/.test(r)){n=r}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{n=d.write(n,o)}o=encodeURIComponent(String(o));o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);o=o.replace(/[\(\)]/g,escape);return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))}if(!o){r={}}var q=document.cookie?document.cookie.split("; "):[];var p=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<q.length;l++){var j=q[l].split("=");var f=j[0].replace(p,decodeURIComponent);var g=j.slice(1).join("=");if(g.charAt(0)==='"'){g=g.slice(1,-1)}try{g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);if(this.json){try{g=JSON.parse(g)}catch(m){}}if(o===f){r=g;break}if(!o){r[f]=g}}catch(m){}}return r}c.set=c;c.get=function(e){return c(e)};c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))};c.defaults={};c.remove=function(f,e){c(f,"",b(e,{expires:-1}))};c.withConverter=a;return c}return a(function(){})}));jQuery(window).on("load",function(){$body_link=jQuery("body a, body button");jQuery("a.aicon_link").fadeIn(350);setTimeout(function(){if(typeof removeLinkTitles!="undefined"&&removeLinkTitles==1){$body_link.each(function(){if(jQuery(this).attr("title")){jQuery(this).attr("title","");jQuery(this).removeAttr("title")}})}},500);if(typeof roleLink!="undefined"&&roleLink==1){setTimeout(function(){$body_link.each(function(){var a=jQuery(this);if(typeof Foundation!="undefined"&&typeof Foundation.version!="undefined"&&Foundation.version){if(a.attr("role")!="tab"){a.attr("role","link")}}else{a.attr("role","link")}})},500)}check_wah_free_credits()});jQuery(document).ready(function(){var b=jQuery("body");var c=1;var d=100;jQuery("#wp_access_helper_container").prependTo("body");jQuery(".wah-skiplinks-menu").prependTo("body");jQuery(".greyscale").click(function(){jQuery("img").each(function(){jQuery(this).toggleClass("active_greyscale")})});jQuery(".aicon_link").click(function(e){e.preventDefault();jQuery(".accessability_container").addClass("active");jQuery("#access_container button").removeAttr("tabindex");jQuery("#access_container").attr("aria-hidden","false")});jQuery(".close_container, .close-wah-sidebar").click(function(e){e.preventDefault();jQuery(".accessability_container").removeClass("active");jQuery("#access_container button").attr("tabindex","-1");jQuery("#access_container").attr("aria-hidden","true")});if(jQuery("body").hasClass("wah_fstype_rem")){jQuery(".smaller").click(function(e){e.preventDefault();var f=parseInt(jQuery("html").css("font-size"));if(f>12){f=f-1+"px";jQuery("html").css({"font-size":f})}});jQuery(".larger").click(function(e){e.preventDefault();var f=parseInt(jQuery("html").css("font-size"));if(f<24){f=f+1+"px";jQuery("html").css({"font-size":f})}})}else{if(jQuery("body").hasClass("wah_fstype_zoom")){jQuery(".larger").click(function(){var e;if(b.hasClass("gecko")){e=0.05;c+=e;b.css("MozTransform","scale("+c+","+c+")");b.css("transform-origin","50% 50%")}else{e=5;d+=e;b.css("zoom"," "+d+"%")}});jQuery(".smaller").click(function(){var e;if(b.hasClass("gecko")){e=0.05;c-=e;b.css("MozTransform","scale("+c+","+c+")");b.css("transform-origin","50% 50%")}else{e=5;d-=e;b.css("zoom"," "+d+"%")}})}else{var a=jQuery("a,p,span,h1,h2,h3,h4,h5,h6");a.each(function(){jQuery(this).attr("data-wahfont",parseInt(jQuery(this).css("font-size")))});wah_font_resizer()}}jQuery(".wah-call-remove-styles").click(function(e){e.preventDefault();jQuery("link:not(#wpah-front-styles-css)").each(function(f,g){if(jQuery(this).attr("disabled")){jQuery(this).removeAttr("disabled")}else{jQuery(this).attr("disabled","disabled")}})});jQuery(".wah-call-underline-links").click(function(e){e.preventDefault();b.toggleClass("is_underline")});jQuery("#contrast_trigger").click(function(e){e.preventDefault();jQuery(".color_selector").toggleClass("is_visible");jQuery(".color_selector").attr("aria-hidden","false")});jQuery(".convar").click(function(e){e.preventDefault();var g=jQuery(this).data("bgcolor");var f=jQuery(this).data("color");jQuery("body :not(.wahcolor), body").css({"background-color":g,color:f});setContrastCookie(g,f);jQuery(".color_selector").removeClass("is_visible");jQuery(".color_selector").attr("aria-hidden","true")});if(typeof headerElementSelector!="undefined"&&headerElementSelector){b.find(headerElementSelector).attr("role","banner")}if(typeof sidebarElementSelector!="undefined"&&sidebarElementSelector){b.find(sidebarElementSelector).attr("role","complementary")}if(typeof footerElementSelector!="undefined"&&footerElementSelector){b.find(footerElementSelector).attr("role","contentinfo")}if(typeof mainElementSelector!="undefined"&&mainElementSelector){b.find(mainElementSelector).attr("role","main")}if(typeof navElementSelector!="undefined"&&navElementSelector){b.find(navElementSelector).attr("role","navigation")}if(typeof Cookies.get("wahFontColor")!="undefined"&&typeof Cookies.get("wahBgColor")!="undefined"){jQuery("body :not(.wahcolor), body").css({"background-color":Cookies.get("wahBgColor"),color:Cookies.get("wahFontColor")})}if(typeof wah_lights_off_selector!="undefined"&&wah_lights_off_selector){jQuery(".wah-lights-off").click(function(f){f.preventDefault();if(!jQuery("body").hasClass("wah-lights-off")){jQuery("body").append('<div class="wah-dark-overlay"></div>');jQuery("body").addClass("wah-lights-off");jQuery(wah_lights_off_selector).addClass("wah-lights-selector")}else{jQuery("body .wah-dark-overlay").remove();jQuery("body").removeClass("wah-lights-off");jQuery(wah_lights_off_selector).removeClass("wah-lights-selector")}})}jQuery(".wah-call-clear-cookies").click(function(e){e.preventDefault();removeAllCookies()});jQuery(".wah-call-highlight-links").click(function(e){e.preventDefault();b.toggleClass("highlight_links_on")});jQuery(".wah-call-invert").click(function(e){e.preventDefault();b.toggleClass("invert_mode_on")});jQuery(".wah-call-remove-animations").click(function(e){e.preventDefault();b.toggleClass("remove_animations")});jQuery(".wah-action-button").click(function(){jQuery(this).toggleClass("active_button")});jQuery(".readable_fonts .wah-action-button").click(function(e){b.toggleClass("arial_font_on")});jQuery(".wah-call-keyboard-navigation").click(function(){b.toggleClass("wah_keyboard_access")});if(typeof wah_target_src!="undefined"){wah_target_element=jQuery("body").find("img[src='"+wah_target_src+"']");wah_target_element.addClass("wah_scanner_element")}if(typeof wah_target_link!="undefined"){wah_target_element=jQuery('a[href="'+wah_target_link+'"]');wah_target_element.addClass("wah_scanner_link")}});function check_wah_free_credits(){var e=jQuery(".wah-free-credits");var a=jQuery(".wah-free-credits-inner");var c=jQuery(".wah-free-credits-inner > a");var b=[e,a,c];var d=[];setTimeout(function(){jQuery.each(b,function(f,g){if(g.is(":hidden")){d.push({is_hidden:g})}if(!g.length){d.push({not_exists:g})}if(g.css("visibility")==="hidden"){d.push({visibility_hidden:g})}if(g.css("opacity")==="0"){d.push({opacity0:g})}});if(d.length){console.log("wah credits MISSED");jQuery("#access_container").css("display","none").remove();jQuery("#wp_access_helper_container").append('<div style="text-align:center; font-size: 13px !important;">WAH Credits missing.</div>')}},10000)}function setContrastCookie(b,a){Cookies.set("wahFontColor",a,{expires:14});Cookies.set("wahBgColor",b,{expires:14})}function removeAllCookies(){Cookies.remove("wahFontColor");Cookies.remove("wahBgColor");location.reload()}function wah_font_resizer(){var a=jQuery("a,p,span,h1,h2,h3,h4,h5,h6");jQuery(".font_resizer .larger").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));jQuery(this).css("font-size",parseInt(c+1)+"px")})});jQuery(".font_resizer .smaller").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));if(c>12){jQuery(this).css("font-size",parseInt(c-1)+"px")}})});jQuery(".wah-font-reset").click(function(b){b.preventDefault();a.each(function(){var c=parseInt(jQuery(this).css("font-size"));jQuery(this).css("font-size",parseInt(jQuery(this).data("wahfont"))+"px")})})};