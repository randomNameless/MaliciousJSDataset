jQuery(document).ready((function(e){function t(t){var o=t.attr("id"),a=e("#"+o+" iframe"),s=new Vimeo.Player(a);e(document).on("open.zf.reveal","#"+o,(function(){console.log(o),s.play()})),e(document).on("closed.zf.reveal","#"+o,(function(){s.pause()}))}function o(){var t={id:280975331,width:640,loop:!0,byline:!1,color:"c89b00",portrait:!1,title:!0,autoplay:!0},o=new Vimeo.Player("vimeo-demo",t);e(".vimeo-video-playlist li a").on("click",(function(t){t.preventDefault();var a=e(this).data("video-id");o.pause(),e(".video-playlist li a").removeClass("current"),e(this).addClass("current"),o.loadVideo(a).then((function(){o.play()}))}))}function a(){var t=e(".site-header"),o=e("body");jQuery(window).scroll((function(){var a;e(window).scrollTop()>=175?(t.addClass("small-header"),o.addClass("has-fixed")):(t.removeClass("small-header"),o.removeClass("has-fixed"))}))}e(".menu-toggle").click((function(){window.scrollTo(0,0)})),e("#mobile-menu a").on("click",(function(){return e("html, body").animate({scrollTop:e(e.attr(this,"href")).offset().top-150},500),e(".off-canvas").foundation("close"),!1})),e(".video-modal").length&&e(".video-modal").each((function(e){t(jQuery(this))})),e(".vimeo-video-playlist").length&&o(),e(".number-collapse").on("click",(function(){e(this).parent().toggleClass("active")})),e(".search-filter-container .filter-toggle").on("click",(function(){e(this).toggleClass("active"),e(".icon-search").toggleClass("active"),e(".favorites-link").toggleClass("active"),e("form.searchandfilter").toggleClass("active")})),e(".sidebar .course-nav-title").on("click",(function(){e(this).toggleClass("active"),e(".course-nav").toggleClass("active")})),e(".price-toggle button").on("click",(function(){return e(this).parent().hasClass("monthly")?(e(this).parent().removeClass("monthly"),e(this).parent().addClass("yearly"),e("[data-monthly]").each((function(){if(e(this).is("a")){var t=e(this).data("yearly");e(this).attr("href",t)}else{var o=e(this).data("yearly");e(this).text(o)}}))):(e(this).parent().removeClass("yearly"),e(this).parent().addClass("monthly"),e("[data-monthly]").each((function(){if(e(this).is("a")){var t=e(this).data("monthly");e(this).attr("href",t)}else{var o=e(this).data("monthly");e(this).text(o)}}))),!1})),e(".scroll").click((function(){return e("html, body").animate({scrollTop:e(e.attr(this,"href")).offset().top-50},500),!1})),e(window).scroll((function(){e(".animated").each((function(){var t=e(this).offset().top,o=e(this).attr("data-animate"),a;t<e(window).scrollTop()+500&&e(this).addClass(o)}))})),e(document.body).on("click",".lesson-complete-button",(function(t){t.preventDefault();var o=e(this),a=o.data("user-id"),s=o.data("course-id"),n=o.data("lesson-id");o.find("span").addClass("loading"),e.ajax({context:this,type:"POST",url:ss_vars.home_url+"/wp-json/ss-courses/v1/lesson/?user_id="+a+"&course_id="+s+"&lesson_id="+n,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",ss_vars.rest_nonce)}}).done((function(t){o.find("span").removeClass("loading"),"lesson_completed"==t.code?(e("#course-tabs li.lesson-"+n).addClass("complete"),o.find(".button-text").text(t.button_text),o.removeClass("loading outline")):"lesson_uncompleted"==t.code&&(e("#course-tabs li.lesson-"+n).removeClass("complete"),o.find(".button-text").text(t.button_text),o.removeClass("loading").addClass("outline"))})).fail((function(e){o.find("span").removeClass("loading"),console.log(e)}))})),e(".next-lesson-card a").on("click",(function(){var t,o=e(this).attr("href").replace("#","");e("#course-tabs").foundation("selectTab",o)})),e("#course-tabs").on("change.zf.tabs",(function(t,o){var a,s="#"+o.data("lesson"),n;history.pushState?history.pushState(null,null,s):location.hash=s,e("html,body").animate({scrollTop:0},400),l=document.querySelectorAll("iframe, video"),Array.prototype.forEach.call(l,(function(e){if("video"===e.tagName.toLowerCase())e.pause();else{var t=e.src;e.src=t}}));var l}))}));