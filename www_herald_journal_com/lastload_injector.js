jQuery(function lastLoadInjector($) {
	console.log('lastload');
	$(document).ready(function() {
		/*$('.content-wrapper').ready(function() {
			var link = document.createElement("link");
			link.href = "/wp-content/themes/dolores/assets/styles/lastload_stylesheet.css";
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		})*/
		//Memberpress set default country
		$('#mepr-address-country').val('US');
		$('#mepr-address-country').change();
		var windowbig=true
		var flyout = $('.oht-menu-container--flyout')
		adminbar_fixes()
		adminOverlap()
		hamburgerler()
		$( window ).resize(function() {
			hamburgerler()
			adminOverlap() 
		})
		
		function adminOverlap(){
			if($('#wpadminbar').length > 0 &&  $(window).width() < 783){
			    $('#wpadminbar').css('height', '42px')
				$('#wpadminbar').css('margin-top', '-7px')
				if($('.oht-menu--clem').length > 0 || $('.oht-menu--ford').length > 0){ 
					$('#wpadminbar').css('position', 'fixed')
				}
				
			}
			if($('#wpadminbar').length > 0 &&  $(window).width() > 783){
				$('#wpadminbar').css('height', '32px')
				$('#wpadminbar').css('margin-top', '0px')
				
			}
		}
		function hamburgerler (){
			if($(window).width() < 1024) {
				$('.hamburger-text').remove()
				if(windowbig==true){
					adminbar_fixes()
				}
				 windowbig = false
				 
			}
			if($(window).width() > 1024) {
				if(windowbig ==false){
					$('.hamburger-text-anch').before( '<div class="hamburger-text">Menu</div>')
					windowbig=true
				}
			}
		}
		function adminbar_fixes(){
			if($('#wpadminbar').length > 0){
				flyout.css('margin-top','20px')
			}
		}
		
	})
	
})
jQuery(".oht-slider").click(function (event) {
	event.preventDefault();
	event.stopImmediatePropagation();
	if (jQuery(".oht-aa-link:hover").length != 0) {
	  console.log("hit it!");
	  window.location.href = jQuery(".oht-aa-link:hover").attr("href");
	}
  });
  
  jQuery(document).ready(function() {
    // Function to determine if the color is light or dark
    function isLight(color) {
        var r, g, b, hsp;
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*\d+)?\)$/);
            r = parseInt(color[1], 10);
            g = parseInt(color[2], 10);
            b = parseInt(color[3], 10);
        } else {
            // If hex --> Convert it to RGB
            color = +("0x" + color.slice(1).replace( 
            color.length < 5 && /./g, '$&$&'));
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
        // HSP equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
        // Using the HSP value, determine whether the color is light or dark
        return hsp > 127.5;
    }

    // Function to get the computed background color
    function getComputedBackgroundColor(elem) {
        var bgColor = "";
        while (elem) {
            if (elem.tagName === "HTML") {
                // Fallback color if no background color is found
                return "white";
            }
            bgColor = window.getComputedStyle(elem).backgroundColor;
            if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
                break;
            }
            elem = elem.parentElement;
        }
        return bgColor;
    }

    // Iterate over each .footer-container element
    jQuery('.footer-container').each(function() {
        var backgroundColor = getComputedBackgroundColor(this);
        // console.log("Computed Background Color: ", backgroundColor); // Logging the computed color
        // Add 'light' or 'dark' class based on the background color
        if (isLight(backgroundColor)) {
            // console.log('light');
            jQuery(this).addClass('footer-light');
        } else {
            console.log('dark');
            jQuery(this).addClass('footer-dark');
        }
    });
});