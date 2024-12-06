(function($) {

	$(function() {
		if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
		    var $body = $(document);
		    $body.bind('scroll', function() {
		        // "Disable" the horizontal scroll.
		        if ($body.scrollLeft() !== 0) {
		            $body.scrollLeft(0);
		        }
		    });
		}    

	}); 

	$(function() {
		// if ($(window).width() < 1001) {
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
				$('p > a, h6 > a, [class*="button-"] a, #footer a, .-cselogo a, .-backtotop a').on('touchend', function(e) {
					var el = $(this);
					var link = el.attr('href');
					window.location = link;
				});
			} else {
				// $('a').click(function(e) {
				// 	var el = $(this);
				// 	var link = el.attr('href');
				// 	window.location = link;
				// });
			}	
		// }
	});

	$(function(){
		if ($(window).width() < 1001) {
			if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
				$( '#left h3' ).on('touchstart', function(e){
					$('#left .mod-menu').slideToggle()
				});	
			} else {
				$( '#left h3' ).click(function(e){
					$('#left .mod-menu').slideToggle()
				});	
			}	
		}		
	});

	$(function(){
		if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
			$( '.moduletable.-mobilenav h3' ).on('touchstart', function(e){
				$('.moduletable.-mobilenav h3').css({'z-index': '999'});
				var docHeight = $(document).height();
				$("body").append("<div id='overlay'></div>");
				$('#mainnav .menu-mobile').slideToggle();
				$("#overlay").height(docHeight); 
			   	$('#overlay').toggleClass('show');
				if ($(window).width() < 650) {
					$("div#overlay").removeAttr("id");
				}
				
			});	
		} else {
			$( '.moduletable.-mobilenav h3' ).click( function(e){
				$('.moduletable.-mobilenav h3').css({'z-index': '999'});
				var docHeight = $(document).height();
				$("body").append("<div id='overlay'></div>");
				$('#mainnav .menu-mobile').slideToggle();
				$("#overlay").height(docHeight); 
			   	$('#overlay').toggleClass('show');
			   	if ($(window).width() < 650) {
					$("div#overlay").removeAttr("id");
				}
			});   	
		}		
	});

	$(function(){
		$(window).on('resize', function() {
			if ($(window).width() > 1000) {
				$("#overlay").remove(".show");
				$(".menu-mobile").hide();
			}
		});
	});

	$(function() {
	    $('.-herovideo video').prop('muted', true);
	    $('.-herovideo video').bind('play', function(e) {
	    	$('.-herovideo video').css('opacity', 1);
	    });
	});

	$(function(){
		$('.-student-logo, .-CSE-formal-logo, .-utlogo').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});

	$(function() {
		// if ($(window).width() > 1001) {
			$('#mainnav > .moduletable > ul.mod-menu > li.deeper').mouseenter(function(){
				var navclass = $(this).attr("class");
			  $(this).addClass("showme");
			}).mouseleave(function(){
				var navclass = $(this).attr("class");
			  $(this).removeClass("showme");
			});
		// }	
	});

	$(function() {
		$('ul.mod-menu li ul li.current').parent('ul').addClass('active');
	});

	$(function() {
		var path = window.location.pathname;

		$('#left h3.left-mobile > a').each(function() {
			var href = $(this).attr('href');
			if(path === href) {
				$('#left h3.left-mobile').addClass('active');
			}
		});
	});

	$(function() {
		$('.inputbox').click(function() {
			$(this).val('');
		});
	});

	$(function() {
		if ($('#back-to-top').length) {
			var scrollTrigger = 100,
				backToTop = function() {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#back-to-top').addClass('show');
					} else {
						$('#back-to-top').removeClass('show');
					}
				}
			backToTop();
			$(window).on('scroll', function() {
				backToTop();
			});
			$('#back-to-top').on('click', function(e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});	
		}
	});

	$(function() {
		$('ul.mod-articlescategory li').addClass('resarea');
	});

	$(function() {
		var $item = $('li.resarea'),
		    visible = 1,
		    index = 0,
		    endIndex = ($item.length / visible) - 3,
		    mobileIndex = ($item.length / visible) - 1;

		$('.moduletable.-researchcontrols #controls #forward').click(function() {
			if(index < endIndex) {
				index++;
				$item.animate({'left':'-=325px'});
			}
		});

		$('.moduletable.-researchcontrols #controls #back').click(function() {
			if(index > 0) {
				index--;
				$item.animate({'left':'+=325px'});
			}
		});

		$item.on('swipeleft', function() {
			if ($(window).width() < 769 && index < mobileIndex) {
				index++;
				$item.animate({'left':'-=290px'});
			} 
		});

		$item.on('swiperight', function() {
			if ($(window).width() < 769 && index > 0) {
				index--;
				$item.animate({'left':'+=290px'});
			} 
		});
	});

	$(function() {
		$('#selectDept').change(function() {
			this.form.submit();
		});
	});

	$(function() {
		$('#selectImpact').change(function() {
			this.form.submit();
		});
	});

	$(function() {
		$('#selectResarea').change(function() {
			this.form.submit();
		});
	});

	$(function() {
		var selectedAlpha = $('#alphaindex #mobile')
		selectedAlpha.change(function() {
			window.location = selectedAlpha.val();
		});
	});

	$(function() {
		$(".switch a").click(function(e) { 
			var link = $(this).attr("href");
			$(".switch").parent().css("margin-bottom", "0");
			$(link).slideToggle();
			$(this).toggleClass('active');
			e.preventDefault(); 
		});
	});

	$(function() {
		var url = '?start=';
		var itemsToFetch = 10;
		var cursor = itemsToFetch;
		var newsContainer = 'items-leading';
		var buttonEl = $('#btn-show-more');

		buttonEl.click(function(e) {
			e.preventDefault();
			$.get(url + cursor, function(data) {
				var items = $(data).find('.' + newsContainer);
				if (items.children().length == 0) {
					buttonEl.hide();
				}
				$('.' + newsContainer).append(items.children());
				cursor += itemsToFetch;
			});	
		});
	});

	$(function() {
		var url = '?start=';
		var itemsToFetch = 10;
		var cursor = itemsToFetch;
		var pastContainer = 'items-row-container';
		var buttonEl = $('#btn-show-more-2');

		buttonEl.click(function(e) {
			e.preventDefault();
			$.get(url + cursor, function(data) {
				var items = $(data).find('.' + pastContainer);
				if (items.children().length == 0) {
					buttonEl.hide();
				}
				$('.' + pastContainer).append(items.children());
				cursor += itemsToFetch;
			});	
		});
	});

	$(function(){

		var supportsVideo = !!document.createElement('video').canPlayType;
		if (supportsVideo) {
			var video = document.getElementById('video');
			var videoControls = document.getElementById('button');

			// Hide the default controls
			// video.controls = false;

			// Display the user defined video controls
			// videoControls.style.display = 'block';

			// var playpause = document.getElementById('playpause');

			// playpause.addEventListener('click', function(e) {
			$('#playpause').click(function(e) {	
			   if (video.paused || video.ended) {
			   		video.play(); 
			   		$('#playpause span').html('PAUSE VIDEO');
			   		$('#playpause').toggleClass('paused');
			    } else {
			   		video.pause(); 
			   		$('#playpause span').html('PLAY VIDEO');
			   		$('#playpause').toggleClass('paused');
			   	}
			});
		}
	});

	$(function() {
		// Find all videos
		var $allVideos = $("iframe")

    	// The element that is fluid width
    	if ($("iframe").parent("p.embed-video")) {
    		$fluidEl = $("p.embed-video");
    	} else {
    		$fluidEl = $("div.item-page");
    	}

		// Figure out and save aspect ratio for each video
		if ($fluidEl.find($allVideos).length > 0) {

			$allVideos.each(function() {
	  			$(this)
	    		.data('aspectRatio', this.height / this.width)

	    		// and remove the hard coded width/height
	    		.removeAttr('height')
	    		.removeAttr('width');
			});
		}	

		// When the window is resized
		$(window).resize(function() {
  			var newWidth = $fluidEl.width();

  		// Resize all videos according to their own aspect ratio
  		if ($fluidEl.find($allVideos).length > 0) {
	  		$allVideos.each(function() {
	    		var $el = $(this);
	    		$el
	      			.width(newWidth)
	      			.height(newWidth * $el.data('aspectRatio'));
			});
	  	}
		// Kick off one resize to fix all videos on page load
		}).resize();
	});

	// $(function() {
	// 	var clock = document.getElementById('clock');

	// 	function time() {
	// 	  var d = new Date();
	// 	  // var s = d.getSeconds();
	// 	  var minutes = d.getMinutes();
	// 	  var hours = d.getHours();
	// 	  var ampm = hours >= 12 ? ' pm' : ' am';
		  
	// 	  hours = hours % 12;
  	// 	  hours = hours ? hours : 12; // the hour '0' should be '12'
  	// 	  minutes = ('0'+minutes).slice(-2);
		  
	// 	  clock.textContent = hours + ":" + minutes + ampm;
	// 	}

	// 	setInterval(time, 1000);
	// });

})(jQuery);