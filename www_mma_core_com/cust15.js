$(function(){var o,n,s,t,h,r,u,f;if(window.$container2!=undefined){$container2.isotope({itemSelector:itmSel2,layoutMode:"fitRows",transitionDuration:0});$(itmSel2+" .img img",$container2).each(function(){var t=$(this),i=$("<img />"),r=$(this).parent().parent(),n=r.width(),u=r.height();i.attr("src",t.attr("src"));i.on("load",function(){var f=this.width,e=this.height;(f<40||i.attr("src")=="")&&t.remove();f<n-n/3?(r.css("float","left").css("margin","0 10px 0 0"),t.css("width","200")):f>n-n/3?t.css("width","100%"):f>n-n/3&&f<n?t.css("width","100%"):f<i.height()&&e>u&&t.css("margin","-"+(u-u/3)+"px 0 0 0")})});$("h3",$container2).each(function(){var n=$(this),i=$(n).css("font-size"),t=Math.floor(parseInt(i.replace("px",""))*1.5),r=n.height()/t;r>3&&(n.css("height",t*3),n.css("overflow","hidden"))});const n=new ResizeObserver(function(){$container2.isotope()});$(itmSel2+" .img",$container2).each(function(t,i){n.observe(i)})}if(window.$container3!=undefined){$container3.isotope({itemSelector:itmSel3,layoutMode:"fitRows",transitionDuration:0});$(itmSel3+" .img img",$container3).each(function(){var t=$(this),i=$("<img />"),r=$(this).parent().parent(),n=r.width(),u=r.height();i.attr("src",t.attr("src"));i.on("load",function(){var f=this.width,e=this.height;(f<40||i.attr("src")=="")&&t.remove();f<n-n/3?(r.css("float","left").css("margin","0 10px 0 0"),t.css("width","200")):f>n-n/3?t.css("width","100%"):f>n-n/3&&f<n?t.css("width","100%"):f<i.height()&&e>u&&t.css("margin","-"+(u-u/3)+"px 0 0 0")})});$("h3",$container3).each(function(){var n=$(this),i=$(n).css("font-size"),t=Math.floor(parseInt(i.replace("px",""))*1.5),r=n.height()/t;r>3&&(n.css("height",t*3),n.css("overflow","hidden"))});const n=new ResizeObserver(function(){$container3.isotope()});$(itmSel3+" .img",$container3).each(function(t,i){n.observe(i)})}if(window.$containerA!=undefined){$containerA.isotope({itemSelector:itmSelA,layoutMode:"fitRows",transitionDuration:0});const n=new ResizeObserver(function(){$containerA.isotope()});$(itmSelA+" .outVidAd",$containerA).each(function(t,i){n.observe(i)});$(itmSelA+" .grec",$containerA).each(function(t,i){n.observe(i)});$(itmSelA+" .pho",$containerA).each(function(t,i){n.observe(i)})}if(window.$containerB!=undefined){$containerB.isotope({itemSelector:itmSelB,layoutMode:"fitRows",transitionDuration:0});$(itmSelB+" .img img",$containerB).each(function(){var t=$(this),i=$("<img />"),r=$(this).parent().parent(),n=r.width(),u=r.height();i.attr("src",t.attr("src"));i.on("load",function(){var f=this.width,e=this.height;(f<40||i.attr("src")=="")&&t.remove();f<n-n/3?(r.css("float","left").css("margin","0 10px 0 0"),t.css("width","200")):f>n-n/3?t.css("width","100%"):f>n-n/3&&f<n?t.css("width","100%"):f<i.height()&&e>u&&t.css("margin","-"+(u-u/3)+"px 0 0 0")})});const n=new ResizeObserver(function(){$containerB.isotope()});$(itmSelB+" .img",$containerB).each(function(t,i){n.observe(i)});$(itmSelB+" .outVidAd",$containerB).each(function(t,i){n.observe(i)});$(itmSelB+" .grec",$containerB).each(function(t,i){n.observe(i)})}var i=document.querySelector("#tlbrd"),n=document.querySelector("#rrec"),t=document.querySelector("#rwsky1"),r=document.querySelector("#rwsky2"),u=document.querySelector("#grec1"),f=document.querySelector("#grec2"),e=new IntersectionObserver((e,o)=>{e.forEach(e=>{if(e.isIntersecting){var s=document.body,h=document.createRange();e.target==i?(setInnerHTML(i,decodeEntities(tlbrdScript)),o.unobserve(e.target)):e.target==n?(setInnerHTML(n,decodeEntities(rrecScript)),o.unobserve(e.target)):e.target==t?(setInnerHTML(t,decodeEntities(rwsky1Script)),o.unobserve(e.target)):e.target==r?(setInnerHTML(r,decodeEntities(rwsky2Script)),o.unobserve(e.target)):e.target==u?(setInnerHTML(u,decodeEntities(grec1Script)),o.unobserve(e.target)):e.target==f&&(setInnerHTML(f,decodeEntities(grec2Script)),o.unobserve(e.target))}})},{threshold:1}),i=document.querySelector("#tlbrd");i!=null&&typeof i!=undefined&&typeof tlbrdScript!="undefined"&&(o=setTimeout(function(){var n=$(".udm-inpage-loaded",i);n.height()==0&&(e.observe(i),clearTimeout(o))},3e4));n=document.querySelector("#rrec");n!=null&&typeof n!=undefined&&typeof rrecScript!="undefined"&&(s=setTimeout(function(){var t=$(".udm-inpage-loaded",n);t.height()==0&&(e.observe(n),clearTimeout(s))},3e4));t=document.querySelector("#rwsky1");t!=null&&typeof t!=undefined&&typeof rwsky1Script!="undefined"&&(h=setTimeout(function(){var n=$(".udm-inpage-loaded",t);n.height()==0&&(e.observe(t),clearTimeout(h))},3e4));r=document.querySelector("#rwsky2");r!=null&&typeof r!=undefined&&typeof rwsky2Script!="undefined"&&e.observe(r);u=document.querySelector("#grec1");u!=null&&typeof u!=undefined&&typeof grec1Script!="undefined"&&e.observe(u);f=document.querySelector("#grec2");f!=null&&typeof f!=undefined&&typeof grec2Script!="undefined"&&e.observe(f)})