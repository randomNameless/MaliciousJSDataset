jQuery(function(f){f.fn.mnShowFrame=function(){var i=f(this);return i.css({right:f(document).width()}).show().animate({right:0},"fast",function(){f(window).trigger("resize")}),i},f.fn.mnHideFrame=function(){f(this).add(".mobile-nav-frame").css({right:0}).animate({right:f(document).width()},"fast",function(){f(this).hide(),f(window).trigger("resize")}),f("body").animate({"padding-left":0},"fast")};var t=[];f(".so-mobilenav-standard").each(function(){var i=f(this).data("id");if(void 0!==t[i])return!0;t[i]=!0;var c,e=f(this).next();f("#so-mobilenav-mobile-"+i).next();f(document).on("click",'a.mobilenav-main-link[data-id="'+i+'"]',function(i){if(i.preventDefault(),null==c){(c=f('<div class="mobile-nav-frame"><div class="title"><h3>'+mobileNav.text.navigate+'</h3></div><div class="slides"><div class="slides-container"></div></div></div>').appendTo("body")).find(".title").prepend('<a href="#" class="back"><i class="fa fa-long-arrow-left"></i></a><a href="#" class="close">'+mobileNav.mobileMenuClose+"</a>"),mobileNav.search&&f("<form method='get' action='"+mobileNav.search.url+"' class='search'><input type='search' placeholder='"+mobileNav.search.placeholder+"' results='5' name='s' /><input type='submit' class='search-submit' /> </form>").insertAfter(c.find(".title")),c.find(".close").on("click",function(i){i.preventDefault(),c.mnHideFrame()}),f(window).on("resize",function(){c.is(":visible")&&(c.hide(),c.width(f(window).width()),c.show())}),f("body").on("orientationchange",function(){f(window).trigger("resize")}),activeSlide=null,showSlide=function(i){c.find(".slides-container .slide").hide(),activeSlide=c.find(".slides-container .slide").eq(i).show(),0==i?c.find("a.back").hide():c.find("a.back").show(),0!=i?c.find(".title h3").html(activeSlide.data("title")):c.find(".title h3").html(mobileNav.text.navigate)},c.find("a.back").on("click",function(){var i=activeSlide.data("parent-slide");return null!=i&&showSlide(i),!1});var o=function(i){var d,s=f('<div class="slide"><ul class="mobile"></ul></div>').appendTo(c.find(".slides-container"));return i.find("> li").each(function(){var i=f(this),e=i.find("> a").html();if(e){d=i.find("> a");var t=f("<a></a>").html(d.html()).attr("href",d.attr("href")).addClass("link");d.attr("target")&&t.attr({target:d.attr("target"),rel:d.attr("rel")})}else t=i.html();var a=f("<li></li>").append(t).addClass(i.attr("class"));if(e&&(a.find("a").not(".next").on("click",function(i){"undefined"===f(this).attr("href")&&c.mnHideFrame()}),0<i.find("> ul").length)){var n=f('<a href="#" class="next"><i class="fa fa-chevron-right"></i></a>');a.prepend(n);var l=i.find("> ul").eq(0),r=o(l);r.data("parent-slide",s.index()),r.data("title",t.html()),a.find("a.next").on("click",function(){return showSlide(r.index()),!1})}s.find("ul").append(a)}),s};o(e.find("ul").eq(0)),showSlide(0)}return f('.mobile-nav-frame .mobile a[href*="#"].link, .mobile-nav-frame .mobile a:not([href])').on("click",function(){f(this).prev(".next").length?f(this).prev(".next").trigger("click"):c.mnHideFrame()}),f(window).trigger("resize"),c.mnShowFrame(),showSlide(0),!1})})});
;function ISPConfigClass()
{var self=this;this.checkDomain=function(domainName,selector){var deferred=jQuery.post(ajaxurl,{action:'ispconfig_whois','domain':domainName},null,'json');if(selector){deferred.done(function(resp){var msg=jQuery(selector);msg.removeClass('ispconfig-msg-error ispconfig-msg-success');msg.addClass(resp.class);msg.text(resp.text);msg.show();});}
return deferred;};jQuery(function(){console.log("ISPConfigClass -> constructor");jQuery('input[data-ispconfig-checkdomain]').change(function(){var dom=jQuery(this).val();self.checkDomain(dom,'#domainMessage');});});}
window['ISPConfig']=new ISPConfigClass();