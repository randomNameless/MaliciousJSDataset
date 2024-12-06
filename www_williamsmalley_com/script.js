
jQuery(document).ready(function($){

	// Browser Detection
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}

	function allowUpDownScroll(){
		if(is_safari || is_explorer){
			return false
		} else {
			return true
		}
	}

	$("a.thickbox, a.fancybox, a.lightbox").fancybox({ padding: 7 })


	// Button action for fake (customised) Pin It button
	$(document).on("click", ".js-social-pin-it", function(e) {
		e.preventDefault();
		console.log('clicked');
		// Now click the real one
		$('.a2a_button_pinterest_pin').click();
	 });


	//$('.page_left.single_image').imagefill() 

	/*
	$('body.page-template-page-homepage-php div.wrapper:not(.step2)').click(function(event) {

		event.stopPropagation()

		$(this).find('.entry').fadeTo("slow", 1)
		$(this).find('ul#menu-header').fadeTo("slow", 1)
		$(this).parent().addClass('step2')

	})
	*/


	$('div.home_cover').click(function(event) {

		//event.stopPropagation()

		$('.entry').fadeTo("slow", 1)
		$('ul#menu-header').fadeTo("slow", 1)
		$('ul.menu-header-new').fadeTo("slow", 1)
		//$('.addtoany_shortcode').fadeTo("slow", 1)
		
		//$(this).parent().addClass('step2')
		$(this).hide()

	})



	if( $('body.page-id-6').length || $('body.page-template-page-project-php').length) {

		var workmenu = $('ul.menu-header > li#menu-item-520 > ul.sub-menu')

		workmenu.addClass('workmenu hoverscroll')

		$('ul.menu-header > li.menu-item-520.current_page_ancestor').find('ul.workmenu').css({ opacity: 1 })

		$('ul.workmenu ul li a').click(function(event) {

			if(typeof current_project_no !== 'undefined'){

				event.preventDefault()

				var this_page_id = $(this).data("pageid")
				//console.log('workmenu pageid: ' + this_page_id)

				change_project( this_page_id )
			}
		})

		if($(window).width() > 1200){
			var myList = $(workmenu).hoverscroll({
	            vertical:	true,      // Display the list vertically or not
				width:		180,        // Width of the list
				height:		160,         // Height of the list
				arrows:		false,       // Display arrows to the left and top or the top and bottom
				arrowsOpacity:	0.7,    // Maximum opacity of the arrows if fixedArrows
			    fixedArrows: false,     // Fix the displayed arrows to the side of the list
				rtl:		false,		// Set display mode to "Right to Left"
				debug:		false       // Display some debugging information in firebug console
	        })

        } else {
			var myList = $(workmenu).hoverscroll({
	            vertical:	true,      // Display the list vertically or not
				width:		165,        // Width of the list
				height:		160,         // Height of the list
				arrows:		false,       // Display arrows to the left and top or the top and bottom
				arrowsOpacity:	0.7,    // Maximum opacity of the arrows if fixedArrows
			    fixedArrows: false,     // Fix the displayed arrows to the side of the list
				rtl:		false,		// Set display mode to "Right to Left"
				debug:		false       // Display some debugging information in firebug console
	        })
        }

        $('ul.menu-header li#menu-item-520 > ul.sub-menu').css('opacity', '1')

	}

	 /* work menu sub-menu accordinan */
    $('ul.workmenu').css('height','auto')
    $('ul.workmenu  .sub-menu').addClass('ishide');
 
    $('ul.workmenu  .sub-menu').prev().mouseenter(function(){
        $(this).next().stop().addClass('force-show');
    })
 
    $('ul.workmenu  .sub-menu').prev().click(function(){
        $('ul.workmenu  .sub-menu').prev().not(this).next().stop().slideUp();
        $(this).next().stop().slideToggle()
    })

	if( $('body.page-id-253').length || $('body.parent-pageid-253').length ){

		recordmenu = $('ul.menu-header li#menu-item-521 > ul.sub-menu')
		recordmenu.addClass('recordmenu hoverscroll')

		if($(window).width() > 1200){
			var myRecordList = recordmenu.hoverscroll({
	            vertical:	true,      // Display the list vertically or not
				width:		180,        // Width of the list
				height:		160,         // Height of the list
				arrows:		false,       // Display arrows to the left and top or the top and bottom
				arrowsOpacity:	0.7,    // Maximum opacity of the arrows if fixedArrows
			    fixedArrows: false,     // Fix the displayed arrows to the side of the list
				rtl:		false,		// Set display mode to "Right to Left"
				debug:		false       // Display some debugging information in firebug console
	        })
		} else {
			var myRecordList = recordmenu.hoverscroll({
	            vertical:	true,      // Display the list vertically or not
				width:		165,        // Width of the list
				height:		160,         // Height of the list
				arrows:		false,       // Display arrows to the left and top or the top and bottom
				arrowsOpacity:	0.7,    // Maximum opacity of the arrows if fixedArrows
			    fixedArrows: false,     // Fix the displayed arrows to the side of the list
				rtl:		false,		// Set display mode to "Right to Left"
				debug:		false       // Display some debugging information in firebug console
	        })
		}

		$('ul.menu-header li#menu-item-521 > ul.sub-menu').css('opacity', '1')

	}
	


	/* http://dimsemenov.com/plugins/royal-slider/documentation/ */
	$('div.slideshow').royalSlider({
		arrowsNav: true,
		loop: false,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fit',
		arrowsNavAutoHide: false,
		controlNavigation: 'none',
		// autoScaleSlider: true, 
		// autoScaleSliderWidth: 1400,     
		// autoScaleSliderHeight: 1050,
		imageScalePadding: 0,
		slidesSpacing: 16,
		controlNavigation: 'bullets',
		thumbsFitInViewport: false,
		navigateByClick: false,
		startSlideId: 0,
		autoPlay: false,
		transitionType:'move',
		easeInOut: 'easeOutSine',
		transitionSpeed: 700,
		globalCaption: false,
		sliderDrag: false,
		preloader: false,
		deeplinking: {
		  enabled: true,
		  change: false
		},
		/* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
		imgWidth: 1400,
		//imgHeight: 1050,
		imageAlignCenter: true,
		numImagesToPreload: 1,
		usePreloader: false,
		fadeinLoadedSlide: false
	})





	// Change the URL hash

	function hash_change(){

		if(document.location.hash != ""){
			var current_project = document.location.hash.replace("#","")
		} else {
			var current_project = json[0].slug
		}

		return current_project

	}


	// Run once

	function init(){

		var current_project = hash_change()

		// Not using 'var' so the variable is global
		slideshow_margin = $('div.slideshow').css('margin-bottom')
		slideshow_margin = parseInt(slideshow_margin.replace('px',''))


		// And change if the hash is changed in-page

		$(window).bind( 'hashchange', function(e) { 
			hash_change()
		})



		// Add the project text in automatically

		for(var i = 0; i < json.length; i++) {
		    var obj = json[i]

		    if(obj.slug == current_project){
		    	current_project_no = i
		    	//console.log(obj.post_content)
		    	 var t =  '<p class="project__title"><strong>'+obj.title+'</strong></p>';
		    	$('.entry.scroll-pane').html(t+obj.post_content)

		    	  // Pre-Highlight the menu
                $('ul.workmenu li ul.sub-menu li.pageid-'+obj.pageid).addClass('current_page_item')

                // $('ul.workmenu li.menu-item-has-children.pageid-'+obj.pageid).addClass('current_page_item-parent')
			}
		}


		$('ul.workmenu li ul.sub-menu li').each(function( index ) {
		  var offset = $(this).offset()
		  //console.log(offset.top)
		  $(this).data('offset', offset.top)
		  //$(this).attr("data-offset", offset.top)
		})


		// Update the next/prev button HREFs
		if(current_project_no > 0){
			$('ul.project_nav li.prev a').attr('href', '#'+json[current_project_no-1].slug)
		} else {
	    	$('ul.project_nav li.prev a').attr('href', '/')
	    }
		$('ul.project_nav li.next a').attr('href', '#'+json[current_project_no+1].slug)


		// Hide next/prev arrows on first/last slides
		if(current_project_no == 0){
			$('ul.project_nav li.prev a').hide()

		} else if((current_project_no+1) == json.length ){
			$('ul.project_nav li.next a').hide()
		}


		// Set the initial scroll position of the main left pane
		if(current_project_no != 0){
			//var newtop = (current_project_no) * 100
	    	//var newtop_str = '-'+newtop+'%'

	    	var newtop = current_project_no * ($(window).height() + slideshow_margin)
	    	var newtop_str = '-'+newtop+'px'

	    	$('.page_left').css('top', newtop_str)
		}
		
		center_menu('workmenu')

	}


	// Work up/down buttons

	$('body.page-id-6 ul.project_nav li.prev a').click(function(event) {
		event.preventDefault()
	    change_project('prev')
	})

	$('body.page-id-6 ul.project_nav li.next a').click(function(event) {
		event.preventDefault()
	    change_project('next')
	})

	

	function center_menu(menuclass){

		// Centre the menu

		if( $('ul.'+menuclass+' li.current_page_item').length ){
			var offset = $('ul.'+menuclass+' li.current_page_item').offset()
			//console.log(offset.top)

			/*
			if(offset.top > 185){
				myList[0].offsetTo(200)
			}
			*/

			var offset_new = offset.top - 170

			if(menuclass == "workmenu"){
				myList[0].offsetTo(offset_new)

			} else if(menuclass == "recordmenu"){
				myRecordList[0].offsetTo(offset_new)
			}

			
		}

	}



	function animate_menu(){

		 // Centre the menu

        if( $('ul.workmenu li ul li.current_page_item').length ){

            /*
            var offset = $('ul.workmenu li.current_page_item').offset()
            console.log('offset.top: ' + offset.top)
            var offset_new = offset.top
            myList[0].animateToOffset(offset_new + 'px')
            */

            var offset_new = parseInt($('ul.workmenu li ul li.current_page_item').data('offset')) - 170
            myList[0].animateToOffset(offset_new + 'px')
        }
        if( $('ul.workmenu  li.current_page_item-parent').length ){

            /*
            var offset = $('ul.workmenu li.current_page_item').offset()
            console.log('offset.top: ' + offset.top)
            var offset_new = offset.top
            myList[0].animateToOffset(offset_new + 'px')
            */

            var offset_new = parseInt($('ul.workmenu  li.current_page_item-parent').data('offset')) - 170
            myList[0].animateToOffset(offset_new + 'px')
        }

	}


	function resetSliders(){
		// Move all sliders back to the first slide
	    $('.slideshow').each(function() {

	        //  instance of single slider
	        var s = $(this).data('royalSlider')
	        s.st.transitionSpeed = 0
			s.goTo(0)
			setTimeout(function() {
			    s.st.transitionSpeed = 700
			}, 10)
	    })
	}


	function change_project(dir){

		//console.log('dir ' + dir)
		//console.log('current_project_no: ' + current_project_no)

		$('ul.workmenu  .sub-menu').addClass('force-show');

		current_project_no = parseInt(current_project_no)

		var seek = false

		// If dir is a number
		if( !isNaN(dir) ){
			var seek = true
		}

		if( 
			(dir == "prev" && current_project_no > 0)
			||
			(dir == "next" && current_project_no < json.length)
			||
			seek
			){

			for(var i = 0; i < json.length; i++) {
			    var obj = json[i]
			    var tempc = '.pageid-' + obj.pageid;


                if($(tempc).is(':first-child'))
                {
                    $(tempc).addClass('class_name')
                    $(' ul.workmenu .sub-menu.ishide ').css('display', 'none');
                    // $(' ul.workmenu li:first-child .sub-menu.ishide ').css('display', 'none');
                    // $( 'ul.workmenu li.pageid-'+obj.pageid+' .sub-menu.ishide' ).css('display', 'block');
                    $( tempc ).parent('.sub-menu.ishide').css('display', 'block');
                }
			    //console.log('seek: ' + seek + ' dir: ' + dir + ' current_project_no: ' + current_project_no  + ' ' + i)

			    if( (seek && obj.pageid == dir) 
			    	|| (!seek && dir == "prev" && (current_project_no - 1) == i)
			    	|| (!seek && dir == "next" && (current_project_no + 1) == i)
			    	){

			    	//console.log('changing project')

			    	//var current_project = obj.id

			    	if(seek){
			    		var dest_project_no = obj.no
			    	}

			    	 var t =  '<p class="project__title"><strong>'+obj.title+'</strong></p>';
                    change_project_text( t+obj.post_content )

					//var newtop = (current_project_no - 1) * 100

					if( dir == "prev" ){
						var newtop = (current_project_no - 1) * ($(window).height() + slideshow_margin)

					} else if( dir == "next" ){
						var newtop = (current_project_no + 1) * ($(window).height() + slideshow_margin)

					} else if( seek ){
						var newtop = dest_project_no * ($(window).height() + slideshow_margin)

					}


					//var newtop = (current_project_no - 1) * ($(window).height() + 30)
			    	var newtop_str = '-'+newtop+'px'

			    	//$('.page_left').css('top', '0')



			    	if( dir == "prev" || dir == "next"){

			    		if(allowUpDownScroll()){
				    		$('.page_left').animate({top: newtop_str},700, function() {
							    // Animation complete.
							    resetSliders()
							  }
	  						)
		    			} else {
		    				$('.page_left').css('top', newtop_str)
		    				resetSliders()
		    			}

			    	} else{
			    		$('.page_left').css('top', newtop_str)

			    		// Move all sliders back to the first slide
			    		$('.slideshow').each(function() {
							//  instance of single slider
							var s = $(this).data('royalSlider')
				    		s.goTo(0)
				    	})
			 	    }
				   
			 	    // Change the URL anchor
			    	document.location.hash = obj.slug

			    	// Update the next/prev button HREFs
			    	if(i > 0){
				    	$('ul.project_nav li.prev a').attr('href', '#'+json[i-1].slug)
				    } else {
				    	$('ul.project_nav li.prev a').attr('href', '/')
				    }

				    if(i < json.length - 1){
			    		$('ul.project_nav li.next a').attr('href', '#'+json[i+1].slug)
					}


			    	if( dir == "prev" ){
						current_project_no--

					} else if( dir == "next" ){
						current_project_no++

					} else if( seek ){
						current_project_no = parseInt(dest_project_no)
						
					}

					//console.log(current_project_no + " of " + json.length)

					// Hide next/prev arrows on first/last slides
					if(current_project_no == 0){
						$('ul.project_nav li.prev a').hide()
						$('ul.project_nav li.next a').show()

					} else if((current_project_no+1) == json.length ){
						$('ul.project_nav li.prev a').show()
						$('ul.project_nav li.next a').hide()

					} else {
						$('ul.project_nav li.prev a').show()
						$('ul.project_nav li.next a').show()
					}

			    	//move_slideshow(current_project_no)
			    	move_slideshow(obj.pageid)
			    	animate_menu()

			    	//console.log('current_project_no end: ' + current_project_no)

			    	break
				}

			}

		}
		
	}


	function change_project_text(content){

		//alert('changing text')
		
		//$('.jspPane').fadeOut('fast', function() {
		$('.jspPane').css('opacity', 1).fadeTo(300, 0, function() {
		    // Animation complete.

		    $('.scroll-pane-button').hide()

			api.getContentPane().html(content)
		    api.reinitialise()

		    //$('.jspPane').fadeIn('fast')

		    $('.jspPane').css('opacity', 0).fadeTo(300, 1)

		    //$(this).css('opacity', .4).fadeTo(2000, 1.0)
		    
		})
	

		/*
		api.getContentPane().html(content)
	    api.reinitialise()
		*/
		
	}



	function move_slideshow(pageid){

		// console.log('move menu: ' + pageid)

		if( $('ul.workmenu ul li').length ){

			//console.log( $('ul.workmenu ul li').length )

			$('ul.workmenu li ul.sub-menu li.current_page_item').removeClass('current_page_item')
			//console.log('ul.workmenu ul.sub-menu li:nth-of-type('+no+')')
			$('ul.workmenu li ul.sub-menu li.pageid-'+pageid).addClass('current_page_item')
			
			if( $('ul.workmenu li ul.sub-menu li.current_page_item').length ){
			
				var offset = $('ul.workmenu li ul.sub-menu li.current_page_item').offset()

				var offset2 = $('ul.workmenu li ul.sub-menu').offset()

				//console.log(offset.top + ' ' + offset2.top)

				//var offset_new = offset.top - 170
				var offset_new = offset.top

				//myList[0].offsetTo(offset_new)
				//myList[0].offsetTo(0)

			}
			
		}

	}

	if( $('body.page-template-page-work-dynamic-php').length){
		init()
	}

	if( $('body.page-id-253').length || $('body.parent-pageid-253').length ){
		center_menu('recordmenu')
		//console.log('centering recordmenu')
	}



	// ---------------- JSCROLLPANE ------------------ //
	// Need to do this after all the AJAX stuff

	var stopScrollingDown = true,
		stopScrollingUp = true

	api = $('.scroll-pane.jscroll')
		.bind('jsp-initialised', function(event, isScrollable){
			if(isScrollable){
				//console.log('scrollable')
				$('.scroll-pane-button.down').show()
			}
		})
		.bind('jsp-scroll-y', function(event, scrollPositionY, isAtTop, isAtBottom) {

			if(isAtTop){
		    	$('.scroll-pane-button.up').hide()
			} else {
				$('.scroll-pane-button.up').show()
			}

			if(isAtBottom){
		    	$('.scroll-pane-button.down').hide()
			} else {
				$('.scroll-pane-button.down').show()
			}
		})
		.jScrollPane({
			maintainPosition: false
		})
		.data('jsp')	

	/* api.setVerticalScrollBarPolicy(jScrollPane.VERTICAL_SCROLLBAR_NEVER)
    api.setHorizontalScrollBarPolicy(jScrollPane.HORIZONTAL_SCROLLBAR_NEVER) */

	$('#scroll-up').hover(function () {
	    stopScrollingUp = false
	    scrollUp()
	}, function () {
	    stopScrollingUp = true
	})

	$('#scroll-down').hover(function () {
	    stopScrollingDown = false
	    scrollDown()
	}, function () {
	    stopScrollingDown = true
	})

	function scrollUp() {
	    if (!stopScrollingUp) {
	        api.scrollByY(-1)
	        setTimeout(scrollUp, 10)/*the smaller this value (80) is the faster it will move*/
	    }
	}

	function scrollDown() {
	    if (!stopScrollingDown) {
	        api.scrollByY(1)
	        setTimeout(scrollDown, 10)
	    }
	}





 $(document).on('click','.scroll-pane.entry a',function(){
        var url = $(this).attr('href');
        var hash = url.substring(url.indexOf('#')+1);
        if(hash != ''){
            arr = jQuery.grep(json, function( a ) {
                return a.slug == hash;
            });
            if(arr[0]!== undefined){            
                change_project(arr[0].pageid)
            }            
        }

    })
    jQuery(window).load(function(){
        jQuery('ul.menu-header ul.workmenu > li li:first').addClass('first-li');
        jQuery('ul.menu-header ul.workmenu > li li.current_page_item').not('.first-li').parent().addClass('force-show').show();
        animate_menu() 
    })
})

jQuery(document).ready(function($){
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
    if(isMac == true){
        jQuery('body').addClass('isMac')
    }
})