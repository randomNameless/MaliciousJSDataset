/**handles:mobmenujs,mobmenujs-pro**/
"use strict";function mobmenuClosePanel(e){jQuery("."+e).toggleClass("show-panel"),jQuery("html").removeClass("show-mobmenu-filter-panel"),jQuery("body").removeClass("show-nav-right"),jQuery("body").removeClass("show-nav-left"),jQuery("html").removeClass("mob-menu-no-scroll")}function mobmenuOpenPanel(e){jQuery(".mobmenu-content").scrollTop(0),jQuery("html").addClass("mob-menu-no-scroll"),jQuery("."+e).hasClass("mobmenu-left-alignment")&&jQuery("body").addClass("show-nav-left"),jQuery("."+e).hasClass("mobmenu-right-alignment")&&jQuery("body").addClass("show-nav-right"),jQuery("."+e).addClass("show-panel")}jQuery(document).ready(function(a){function n(e){var n=a(e).parent().next();a(e).parent().next().hasClass("show-sub-menu")&&(a(e).find(".show-sub-menu").hide(),a(e).toggleClass("show-sub")),!a(e).parents(".show-sub-menu").prev().hasClass("mob-expand-submenu")&&n[0]!==a(".show-sub-menu")[0]&&a(e).parent(".sub-menu").length<=0&&(a(e).parent().find(".show-submenu").first().hide().toggleClass("show-sub-menu"),a(e).toggleClass("show-sub")),a(e).parent().next().hasClass("show-sub-menu")?n.hide():n.fadeIn("slow"),a("body").hasClass("mob-menu-sliding-menus")||(a(e).find(".open-icon").toggleClass("hide"),a(e).find(".close-icon").toggleClass("hide")),n.toggleClass("show-sub-menu")}var e;a("body").find(".mobmenu-push-wrap").length<=0&&a("body").hasClass("mob-menu-slideout")&&(a("body").wrapInner('<div class="mobmenu-push-wrap"></div>'),a(".mobmenu-push-wrap").after(a(".mobmenu-left-alignment").detach()),a(".mobmenu-push-wrap").after(a(".mobmenu-right-alignment").detach()),a(".mobmenu-push-wrap").after(a(".mob-menu-header-holder").detach()),a(".mobmenu-push-wrap").after(a(".mobmenu-footer-menu-holder").detach()),a(".mobmenu-push-wrap").after(a("#wpadminbar").detach()),""!=a(".mob-menu-header-holder").attr("data-detach-el")&&a(".mobmenu-push-wrap").after(a(a(".mob-menu-header-holder").attr("data-detach-el")).detach()),""==(e=jQuery(".mob-menu-header-holder").attr("data-menu-display"))||jQuery("body").hasClass(e)||a("body").addClass(e),a("video").each(function(){"autoplay"===a(this).attr("autoplay")&&a(this)[0].play()}));var o=jQuery(".mob-menu-header-holder").attr("data-open-icon"),s=jQuery(".mob-menu-header-holder").attr("data-close-icon");a(".mobmenu-content .sub-menu").each(function(){a(this).prev().append('<div class="mob-expand-submenu"><i class="mob-icon-'+o+' open-icon"></i><i class="mob-icon-'+s+' close-icon hide"></i></div>'),0<a(this).parents(".mobmenu-parent-link").length&&a(this).prev().prev().attr("href","#")}),a(document).on("click",".mob-expand-submenu",function(e){1!=a(".mob-menu-header-holder").attr("data-autoclose-submenus")||a(this).parent().next().hasClass("show-sub-menu")||0<a(".mob-expand-submenu.show-sub").length&&a(this).parents(".show-sub-menu").length<=0&&n(a(".mob-expand-submenu.show-sub")),n(a(this)),e.preventDefault()}),a(document).on("click",".mobmenu-panel.show-panel .mob-cancel-button, .show-nav-right .mobmenu-overlay, .show-nav-left .mobmenu-overlay",function(e){e.preventDefault(),mobmenuClosePanel("show-panel"),jQuery("body").hasClass("mob-menu-sliding-menus")&&jQuery(".mobmenu-trigger-action .hamburger").toggleClass("is-active")}),a(document).on("click",".mobmenu-trigger-action",function(e){e.preventDefault();var e=a(this).attr("data-panel-target");"mobmenu-filter-panel"!==e&&mobmenuOpenPanel(e)}),a(document).on("click",".hamburger",function(e){var n=a(this).parent().attr("data-panel-target");e.preventDefault(),e.stopPropagation(),a(this).toggleClass("is-active"),setTimeout(function(){a("body").hasClass("show-nav-left")?(jQuery("body").hasClass("mob-menu-sliding-menus")&&jQuery(".mobmenu-trigger-action .hamburger").toggleClass("is-active"),mobmenuClosePanel(n)):mobmenuOpenPanel(n)},400)}),a('.mobmenu a[href*="#"]').not('[href="#"]').not('[href="#0"]').on("click",function(e){var n,n;location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&0<a(this).parents(".mobmenu_content").length&&((n=(n=a(this.hash)).length?n:a("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),e.stopPropagation(),a(".show-nav-left .mobmenu-left-bt").first().click(),a(".show-nav-right .mobmenu-right-bt").first().trigger("click"),a("html").css("overflow",""),a("body").animate({scrollTop:n.offset().top},1e3,function(){var e=a(n);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()})))})});
"use strict";var previousTerm="";jQuery(document).ready(function(m){m(document).on("click",".sliding-back-menu",function(e){jQuery(this).parent().removeClass("show-sub-menu")}),m(".mobmenu-search").toggle(function(){m(".mob-menu-search-form").fadeIn(800),m(".mobmenu-search-holder").slideDown(),m(".mobmenu-search .mob-search-cancel-button").show(),m(".mobmenu-search .mob-search-button").hide(),m(".mob-menu-search-field").focus(),m("html").addClass("show-mob-menu-search")},function(){m(".mob-menu-search-form").fadeOut(),m(".mobmenu-search-holder").slideUp(800),m(".mobmenu-ajax-search-results").slideUp(800),m(".mobmenu-search .mob-search-cancel-button").hide(),m(".mobmenu-search .mob-search-button").show(),m("html").removeClass("show-mob-menu-search")}),m(".header-ajax-search .mob-menu-search-field").on("keyup",function(e){var o=m(this).val();e.preventDefault(),o!=previousTerm&&((previousTerm=o)&&2<o.length?m.ajax({url:ajaxurl,data:{action:"mobile_menu_search",terms:o},type:"POST",success:function(e){m(".mobmenu-ajax-search-results").html(e).show()},error:function(e){console.log(e)}}):m(".mobmenu-ajax-search-results").html("").hide())})}),jQuery(function(m){var s,a,n,s,a,n;m("body").hasClass("mob-menu-autohide-header")&&(a=5,n=s=0,m(window).scroll(function(e){var o=m(this).scrollTop();Math.abs(s-o)<=a||(s<o?(m(".mob-menu-header-holder").addClass("hide-mm-element"),n=0,m("body").hasClass("mob-menu-autohide-footer")&&m(".mobmenu-footer-menu-holder").removeClass("hide-mm-element")):(40<n&&m(".mob-menu-header-holder").removeClass("hide-mm-element"),n+=s-o,m("body").hasClass("mob-menu-autohide-footer")&&m(".mobmenu-footer-menu-holder").addClass("hide-mm-element")),s=o)})),m("body").hasClass("mob-menu-autohide-footer")&&(a=5,n=s=0,m(window).scroll(function(e){var o=m(this).scrollTop();Math.abs(s-o)<=a||(s<o?(m(".mobmenu-footer-menu-holder").addClass("hide-mm-element"),n=0):(40<n&&m(".mobmenu-footer-menu-holder").removeClass("hide-mm-element"),n+=s-o),s=o)}))});