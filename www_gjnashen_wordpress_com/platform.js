(function(){var t=function(e,r,n){if(document.getElementsByClassName){t=function(t,e,r){r=r||document;var n=r.getElementsByClassName(t),a=e?new RegExp("\\b"+e+"\\b","i"):null,i=[],o;for(var l=0,s=n.length;l<s;l+=1){o=n[l];if(!a||a.test(o.nodeName)){i.push(o)}}return i}}else if(document.evaluate){t=function(t,e,r){e=e||"*";r=r||document;var n=t.split(" "),a="",i="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===i?i:null,l=[],s,u;for(var d=0,m=n.length;d<m;d+=1){a+="[contains(concat(' ', @class, ' '), ' "+n[d]+" ')]"}try{s=document.evaluate(".//"+e+a,r,o,0,null)}catch(t){s=document.evaluate(".//"+e+a,r,null,0,null)}while(u=s.iterateNext()){l.push(u)}return l}}else{t=function(t,e,r){e=e||"*";r=r||document;var n=t.split(" "),a=[],i=e==="*"&&r.all?r.all:r.getElementsByTagName(e),o,l=[],s;for(var u=0,d=n.length;u<d;u+=1){a.push(new RegExp("(^|\\s)"+n[u]+"(\\s|$)"))}for(var m=0,b=i.length;m<b;m+=1){o=i[m];s=false;for(var g=0,h=a.length;g<h;g+=1){s=a[g].test(o.className);if(!s){break}}if(s){l.push(o)}}return l}}return t(e,r,n)};!function(t,e){typeof module!="undefined"?module.exports=e():typeof define=="function"&&typeof define.amd=="object"?define(e):this[t]=e()}("domready",function(t){function e(t){g=1;while(t=r.shift())t()}var r=[],n,a=!1,i=document,o=i.documentElement,l=o.doScroll,s="DOMContentLoaded",u="addEventListener",d="onreadystatechange",m="readyState",b=l?/^loaded|^c/:/^loaded|c/,g=b.test(i[m]);return i[u]&&i[u](s,n=function(){i.removeEventListener(s,n,a),e()},a),l&&i.attachEvent(d,n=function(){/^c/.test(i[m])&&(i.detachEvent(d,n),e())}),t=l?function(e){self!=top?g?e():r.push(e):function(){try{o.doScroll("left")}catch(r){return setTimeout(function(){t(e)},50)}e()}()}:function(t){g?t():r.push(t)}});var e=function(){var e;e=t("wordpress-timeline");for(var r=0;r<e.length;r++){var n=e[r];var a=null==n.getAttribute("width")?300:n.getAttribute("width");var i=null==n.getAttribute("height")?500:n.getAttribute("height");var o=n.getAttribute("href");if(o.indexOf("https://")==0)o=o.substring(8);if(o.indexOf("http://")==0)o=o.substring(7);if(o.substr(-1)=="/")o=o.substr(0,o.length-1);var l=document.createElement("iframe");var s="//widgets.wp.com/timeline/index.html";s+="#blog="+o;s+=null==n.getAttribute("lang")?"":"&lang="+n.getAttribute("lang");s+=null==n.getAttribute("data-theme")?"&theme=light":"&theme="+n.getAttribute("data-theme");s+=null==n.getAttribute("data-link-color")?"":"&link_color="+n.getAttribute("data-link-color");s+=null==n.getAttribute("data-show-gravatars")?"":"&show_gravatars="+n.getAttribute("data-show-gravatars");s+="&width="+a;s+="&height="+i;l.setAttribute("src",s);l.setAttribute("width",a);l.setAttribute("height",i);l.setAttribute("frameborder","0");l.setAttribute("scrolling","no");l.setAttribute("title",window.wpcomPlatform?.titles.timelines||"Embeddable Timelines");n.parentNode.replaceChild(l,n)}var u;u=t("wordpress-follow-button");for(var r=0;r<u.length;r++){var d=u[r];var a="100%";var i=20;var o=d.getAttribute("href");if(o.indexOf("https://")==0)o=o.substring(8);if(o.indexOf("http://")==0)o=o.substring(7);if(o.substr(-1)=="/")o=o.substr(0,o.length-1);var l=document.createElement("iframe");var s="//widgets.wp.com/follow/index.html";s+="#href="+o;s+=null==d.getAttribute("data-lang")?"":"&lang="+d.getAttribute("data-lang");s+=null==d.getAttribute("data-blog")?"":"&blog="+encodeURIComponent(d.getAttribute("data-blog"));s+=null==d.getAttribute("data-show-follower-count")?"":"&show_follower_count="+encodeURIComponent(d.getAttribute("data-show-follower-count"));s+=null==d.getAttribute("data-show-blog-name")?"":"&show_blog_name="+encodeURIComponent(d.getAttribute("data-show-blog-name"));l.setAttribute("src",s);l.setAttribute("width",a);l.setAttribute("height",i);l.setAttribute("frameborder","0");l.setAttribute("scrolling","no");l.setAttribute("title",window.wpcomPlatform?.titles.followButton||"Follow Button");d.parentNode.replaceChild(l,d)}var m,b,l,g,h,f,c,p=t("wordpress-wpembed"),w=0;for(r=0;r<p.length;r++){b={};l=document.createElement("iframe");g="https://widgets.wp.com/wpembed/index.html?";f=0;wpembed=p[r];b.gravatars=wpembed.getAttribute("data-show-gravatars")==="false"?false:true;b.language=wpembed.getAttribute("data-lang")||"en";b.theme=wpembed.getAttribute("data-theme")==="dark"?"dark":"light";b.host=wpembed.getAttribute("data-host");if(wpembed.getAttribute("data-comment-id")){b.commentID=parseInt(wpembed.getAttribute("data-comment-id"),10)}else if(wpembed.getAttribute("data-post-id")){b.postID=parseInt(wpembed.getAttribute("data-post-id"),10)}else if(wpembed.getAttribute("data-post-name")){b.postName=wpembed.getAttribute("data-post-name")}if(!b.host||!b.host.length){return}for(m in b){if(b.hasOwnProperty(m)){g+=m+"="+encodeURIComponent(b[m])+"&"}}f=function(){var t=++w+"";return"wpembed-"+t}();l.setAttribute("frameborder",0);l.setAttribute("id",f);l.setAttribute("name",f);l.setAttribute("scrolling","no");l.setAttribute("src",g.slice(0,-1));l.setAttribute("width","100%");l.setAttribute("title",window.wpcomPlatform?.titles.wpEmbeds||"WordPress Embeds");wpembed.parentNode.replaceChild(l,wpembed)}window.addEventListener("message",function(t){if(t.origin!=="https://widgets.wp.com"){return}var e=0,r={}.size=0;try{r=JSON.parse(t.data)}catch(t){}if(r.type!=="wpEmbedMessage"||typeof r.height==="undefined"||typeof r.ID==="undefined"){return}e=parseInt(r.ID.substr("wpembed-".length),10);size=parseInt(r.height,10);if(e<1||size<1){return}document.getElementsByName("wpembed-"+e)[0].setAttribute("height",size+"px")},false)};if("function"==typeof domready){domready(e)}else{e()}})();