jQuery(function($){
	
	jQuery(window).load(function(){
		jQuery(window).resize(function(){
			if(jQuery('.owl-slider-wrapper').length == 0){
				jQuery('.col-move-top').css({'margin-top':'0', 'padding-top':'2em'});
				jQuery('.menu-holder:not(.clone)').css({'position': 'static'}).addClass('color-menu').addClass('menu-holder-no-rad');
			}else{
				if(jQuery('.menu-holder:not(.clone)').css('position') != "static"){
					jQuery('.menu-holder:not(.clone)').css("cssText", "background: transparent !important;").removeClass('menu-holder-no-rad');
				}else{
					jQuery('.menu-holder:not(.clone)').removeAttr('style').addClass('menu-holder-no-rad');	
				}
			}
			var the_height;
			if(jQuery('.owl-slider-wrapper').height()>jQuery('.menu-holder').height()){
				the_height = jQuery('.owl-slider-wrapper').height()-jQuery('.menu-holder').height();
			}else{
				the_height = false;
			}
			if(the_height != false){
				if(jQuery('.menu-holder:not(.clone)').css('position') != "static"){
					jQuery('.slider-limit').css({'width':'100%', 'height':the_height+"px"})
				}else{
					jQuery('.slider-limit').css({'width':'100%', 'height':"auto"})
				}
			}
			
		})
		jQuery(window).trigger('resize');
		
	})
	jQuery(window).resize(function(){
		if(jQuery('.show-for-large-up #main-menu-ul').width() < 530){
			jQuery('.show-for-large-up .menu-wrapper').removeClass('push-top');
		}else{
			jQuery('.show-for-large-up .menu-wrapper').addClass('push-top');
		}
	})
	
	jQuery(document).bind("contextmenu",function(e){
        e.preventDefault();
    });
	jQuery('.wp-polls input.Buttons').addClass('button').attr('value','Submit').removeClass('Buttons').css({'padding':'0.2em 0.5em'});
	jQuery('.wp-polls input.button').parent().css({'text-align':'left'});
	jQuery('.wp-polls-form p').css({'text-align':'left'});
	jQuery('.wp-polls a[href="#ViewPollResults"]').parent().css({'text-align':'right'});
	jQuery('.widget-contact-form').on('invalid', function () {
			var invalid_fields = jQuery(this).find('[data-invalid]');
			//console.log(invalid_fields);
		  }).on('valid', function () {
				
				var obj=jQuery(this);
				obj.find('button').attr('disabled','disabled');
				var data = {
					action: 'contact_email_send',
					name: obj.find('input#name').val(),
					phone: obj.find('input#phone').val(),
					email: obj.find('input#email').val(),
					comment: obj.find('textarea#comment').val(),
					toemail: obj.find('input#toemail').val()
				};
				jQuery.post(adminAjax, data, function(response) {
					jQuery('.widget-contact-form').find("input[type=text], textarea, input[type=number], input[type=email]").val("");
					obj.find('button').removeAttr('disabled');
					obj.parents('.widget-content').find('.alert-box.success').fadeIn(500);
				});
	});
	jQuery('.weather-data a.change-city').live('click', function(e){
		e.preventDefault();
		jQuery('#weatherModal').foundation('reveal', 'open');
	})
	jQuery('.weather-add a.cancel-button').live('click', function(e){
		e.preventDefault();
		jQuery('#weatherModal').foundation('reveal', 'close');
	})
	
	
	jQuery('.main-content').next('iframe').css({'position':'absolute','z-index':'1','left':'-99999px'})
	if(jQuery('iframe').height()==0){
		jQuery('iframe').css({'position':'absolute','z-index':'1','left':'-99999px'})
	}
	
	jQuery("#weatherModal form").live("submit",function(){
		var obj=jQuery(this);
		if(jQuery(this).find("#city").val()!=""){
			var responseField = jQuery('#g-recaptcha-response').val();
			if(jQuery('#weather_c').length > 0){
				responseField = jQuery('#weather_c .g-recaptcha-response').val();
			}
			jQuery.ajax({
			    type: 'POST',
			    url: baseURL+"?action=validate_recaptcha",
			    data: 'g-recaptcha-response='+responseField,
			    async: true
			}).done(function(resp){
			    if(resp === 'success'){
			      	obj.find('button').attr('disabled','disabled');
					var city=obj.find('input#city').val()
					var data = {
						action: 'ajax_weather_data',
						city: obj.find('input#city').val()
					};
					jQuery.post(adminAjax, data, function(response) {
						obj.find("input[type=text], textarea, input[type=number], input[type=email]").val("");
						//console.log(obj);
						obj.find('button').removeAttr('disabled');
						if(response !="-1"){
							jQuery('.weather-data').html(response);
							obj.parents('#weatherModal').find('.alert-box.warning').hide();
							jQuery('#weatherModal').foundation('reveal', 'close');
							jQuery.cookie('WeatherCity', city, { expires: 7, path: '/' });
						}else{
							obj.parents('#weatherModal').find('.alert-box.warning').fadeIn(500);
						}
					});
			    }
			    else{
			      jQuery('#captcha-status').html("The security code you entered did not match. Please try again.");
			      Recaptcha.reload();
			      obj.find(".capt-field .error").show()
			    }
			 });
		}else{
			jQuery(this).find(".city-field .error").show()
			jQuery(this).find(".city-field").addClass('error')
		}
		return false
	})
	
	 jQuery('.question-tooltip').tooltipster({
		offsetY:50
	 });

	 jQuery('#the-events-form').on('valid', function () {
			jQuery.ajax({
			  type: "POST",
			  url: adminAjax+"?action=send_event_email",
			  data: {bss_event_name: jQuery("#bss_event_name").val(),  bss_event_date_from: jQuery("#bss_event_date_from").val(),  bss_event_date_to: jQuery("#bss_event_date_to").val(),  bss_event_description: jQuery("#bss_event_description").val(),  bss_event_uname: jQuery("#bss_event_uname").val(),  bss_event_email: jQuery("#bss_event_email").val(),  bss_event_contactno: jQuery("#bss_event_contactno").val()  }
			}).done(function( msg ) {
			   jQuery('#eventsModal').foundation('reveal', 'close'); 
			});
	 });
	 jQuery('.widget .weather-row:nth-child(2n)').addClass('even');
	 if (jQuery.browser.msie && jQuery.browser.version == '8.0'){
		  jQuery(".top-bar-section li.not-click a").live('click',function(){
			window.location=jQuery(this).attr('href');
		 })
		var frames = jQuery('.video-container iframe')
		for (var i = 0; i < frames.length; i++) {
			frames[i].src += "&wmode=opaque";
		}
		
	 }
	 
	 jQuery({property: 0}).animate({property: 100}, {
        duration: 2000,
        step: function() {
          var _percent = Math.round(this.property);
          jQuery("#progress").css("width",  _percent+"%");
          //console.log(_percent);
          if(_percent == 100) {
            jQuery("#progress").addClass("done");
          }
        },
        complete: function() {
          jQuery('.fade-parent').removeClass('fade-out');
          jQuery('.wp-baner-top').css({'visibility':'visible'});
          jQuery('#wpadminbar').show();
          
          jQuery(window).trigger('resize');
        }
      });
      jQuery(window).load(function(){
	      
	      setTimeout(function(){ 
		      jQuery('#progress').removeClass('waiting');
		      if(!jQuery('#progress').hasClass('done')){
			      jQuery('#progress').addClass('done')
			      jQuery('.fade-parent').removeClass('fade-out');
		          jQuery('.wp-baner-top').css({'visibility':'visible'});
		          jQuery('#wpadminbar').show();
		         
		          jQuery(window).trigger('resize');
		          
		      }
		      initSlider();
		  }, 500);
		  jQuery("#owl-example").owlCarousel({
			  loop:true,
			  items:1,
			  nav:true,
			  dotsData: false,
			  dots : false,
			  navText: ["<img src='"+themeUrl+"img/prev.png'>","<img src='"+themeUrl+"img/next.png'>"]
		  }); 
		  
		  jQuery("#owl-testimonials").owlCarousel({
		  	loop:true,
		    autoHeight: false,
		    autoplay: false,
		    nav:false,
		    dots:false,
		    responsive:{
		        0:{
		            items:1,
		            dots:false
		        },
		        600:{
		            items:1,
		            dots:false
		        },
		        1000:{
		            items:2,
		            dots:true
		        },
		        1024:{
			        items:2,
		            dots:false
		        },
		        1440:{
			         items:2,
		            dots:true
		        }
		    }
		  });
		  
      })
      if(!isIE(8)){
      var header = jQuery(".menu-holder"),
      clone = header.before(header.clone().addClass("clone"));
        
        jQuery(window).on("scroll", function() {
            var fromTop = jQuery(window).scrollTop();
            jQuery("body").toggleClass("down", (fromTop > 400));
            if(jQuery('#wpadminbar').length > 0){
			      jQuery('body.down .menu-holder.clone').addClass('spacer-logged-in');
		      }
        });
       }
      jQuery("#main-menu-ul li").on('mouseenter mouseleave', function (e) {
		
         if(!jQuery('.title-area .name').is(':visible')){
	         swich_menu_sides(this)
	         }
        
    });
	 
	
		  jQuery("#main-menu-ul li").each(function (e) {
		
	        swich_menu_sides(this)
	     });
	
	 function swich_menu_sides(obj){
		 if (jQuery('ul', obj).length) {
	            var elm = jQuery('ul:first', obj);
	            var off = elm.offset();
	            var l = off.left;
	            var w = elm.width();
	            var docH = jQuery(".site-container").height();
	            var docW = jQuery(".site-container").width();
	            var isEntirelyVisible = (l + w <= docW);
	      
	            if (!isEntirelyVisible) {
	               jQuery(obj).addClass('edge');
	            } else {
	               jQuery(obj).removeClass('edge');
	            }
	        }
	 }
	 
	 

	
	
	function doAnimations( elems ) {
		//console.log(elems);
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
  function initSlider() {
	  var loop_slider = true;
	 if(jQuery('.owl-main-slider .item').length == 1){
		 loop_slider = false;
		 jQuery('.slide-progress').hide();
	 }
	 var owl_main = jQuery('.owl-main-slider');
	 
	
	  owl_main.on('initialized.owl.carousel', function(event) {
		//setTimeout(function(){   
	    $firstAnimatingElems =jQuery('.owl-main-slider .owl-item').find("[data-animation ^= 'animated']");
	    doAnimations($firstAnimatingElems);
	   // }, 2000);
	  })
    owl_main.owlCarousel({
      items: 1,
      loop: loop_slider,
      autoplay: true,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar,
      autoplayTimeout:8000
    });
    owl_main.on('translate.owl.carousel', function(event) {
	    var $animatingElems = jQuery('.owl-main-slider .owl-item').find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	    
	})
  }

  function startProgressBar() {
    // apply keyframe animation 
    jQuery('.slide-progress').css({
      'width': '100%',
      'transition': 'width 8000ms'
    });
  }

  function resetProgressBar() {
    jQuery('.slide-progress').css({
      'width': 0,
      'transition': 'width 0s'
    });
  }
  	var loop_testimonials = true;
	if(jQuery('.owl-testimonials .item').length == 1){
		loop_slider = false;
	}
	var owl_slid = jQuery('.owl-testimonials');
	owl_slid.owlCarousel({
	    loop:loop_testimonials,
		items: 1,
		autoplay: true,
		nav:true,
		dots:false,
		callbacks: true
		
	})
	

	jQuery('#ob-widget fieldset label').click(function(){
		var mark = jQuery(this).attr('for');
		jQuery('#ob-widget fieldset label').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.label-content').hide();
		jQuery('.'+mark).show();
	})
	jQuery('.hide-password').click(function(){
		if(jQuery(this).hasClass('hid')){
			
			jQuery(this).removeClass('hid');
			jQuery(this).parent().find('input').attr('type', 'password');
			jQuery(this).text('Show');
		}else{
			jQuery(this).parent().find('input').attr('type', 'text');
			jQuery(this).text('Hide')
			jQuery(this).addClass('hid');
		}
		
	})
	jQuery('.section-spacing-wrapper').each(function(){
		if(jQuery(this).find('div').length == 0 ){
			jQuery(this).hide();
		}
	})
	jQuery('.img-modal').on('click', function(){
		var img = jQuery(this).parent().find('img').attr('src');
		jQuery('#imgModal img').attr('src',img);
	})
	jQuery('.map-interaction a.button, .map-interaction').click(function(e){
		e.preventDefault();
		jQuery('.map-interaction').hide();
	})
	
	jQuery('.section-map').mouseleave(function(){
		jQuery('.map-interaction').show();
	}) 
	if(jQuery('.item-text h2').length == 0 && jQuery('.item-text h3').length == 0 && jQuery('.item-text a.button').length == 0){
		jQuery('.item-text').hide();
	}
	
	
	
	
	
	
	equalheight = function(container){

	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {
	
	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;
	
	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}
	
	$(window).load(function() {
	  equalheight('.row-eq .columns-eq');
	  equalheight('.row-eq1 .columns-eq1');
	  equalheight('.eq-img');
	});
	
	
	$(window).resize(function(){
	  equalheight('.row-eq .columns-eq');
	  equalheight('.row-eq1 .columns-eq1');
	  equalheight('.eq-img');
	  
	});

	jQuery('.top-bar-section .has-dropdown > a[href="#"]').click(function(e){
		e.preventDefault();
		jQuery(this).parent().find('.dropdown').removeClass('hover');
	})
	
	jQuery(window).load(function(){
		jQuery(window).resize(function(){
			var the_height;
			if(jQuery('.owl-slider-wrapper').height()>jQuery('.menu-holder').height()){
				the_height = jQuery('.owl-slider-wrapper').height()-jQuery('.menu-holder').height();
			}else{
				the_height = false;
			}
		})
		jQuery(window).trigger('resize');
		
	})
	
	jQuery('.section4-number.count').each(function(){
		var isnum = /^\d+$/.test(jQuery(this).text());
	
		if(isnum){
			jQuery(this).addClass('lets-count');	
		}
	})
})
function isIE(version, comparison) {
	var cc      = 'IE',
	    b       = document.createElement('B'),
	    docElem = document.documentElement,
	    isIE;
	    
	if(version){
		cc += ' ' + version;
		if(comparison){ cc = comparison + ' ' + cc; }
	}
	
	b.innerHTML = '<!--[if '+ cc +']><b id="iecctest"></b><![endif]-->';
	docElem.appendChild(b);
	isIE = !!document.getElementById('iecctest');
	docElem.removeChild(b);
	return isIE;
}


jQuery(function($) {
  $('.mejs-overlay-loading').closest('.mejs-overlay').addClass('load'); //just a helper class

  var $video = $('div.video video');
  var vidWidth = $video.attr('width');
  var vidHeight = $video.attr('height');

  $(window).resize(function() {
    var targetWidth = $(this).width(); //using window width here will proportion the video to be full screen; adjust as needed
    $('div.video, div.video .mejs-container').css('height', Math.ceil(vidHeight * (targetWidth / vidWidth))-50);
  }).resize();
});
jQuery(function($){
		// Find all YouTube videos
		var $allVideos = $(".videoWrapper iframe"),
		
		    // The element that is fluid width
		    $fluidEl = $("body");


		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
		
		  $(this)
		    .data('aspectRatio', this.height / this.width)
		
		    // and remove the hard coded width/height
		    .removeAttr('height')
		    .removeAttr('width');
		
		});
		
		// When the window is resized
		$(window).resize(function() {
		
		  var newWidth = $fluidEl.width();
		
		  // Resize all videos according to their own aspect ratio
		  $allVideos.each(function() {
		
		    var $el = $(this);
		    $el
		      .width(newWidth)
		      .height(Math.ceil(newWidth * $el.data('aspectRatio'))+1);
		
		  });
		
		// Kick off one resize to fix all videos on page load
		}).resize();
	})
