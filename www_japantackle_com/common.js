// JavaScript Document
jQuery(document).ready(function(){
	jQuery("[rel=tooltip]").tooltip();
	jQuery("#back-top").hide();
	// fade in #back-top
	// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		jQuery('.menuBox').click(function() {
		if (jQuery('#menuInnner').is(":hidden"))
		{
		jQuery('#menuInnner').slideDown("fast");
		} else {
		jQuery('#menuInnner').slideUp("fast");
		}
		return false;
		});
	});
	
	
	
	jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		
		
		
(function(jQuery){
	
jQuery(document).ready(function($) {

	$(document).click(function() { $('#main_menu > li.dropdown > ul').slideUp("slow") });

	$('#main_menu > li.dropdown').click(function(ev) {
		var sub = $(this).children('ul');
		if ($(sub).is(':hidden')) {

			ev.stopPropagation();

			$('#main_menu > li.dropdown > ul:visible').slideUp("slow");
		
			$(sub).slideDown("slow");
		}
	});

	$('#main_menu > li.dropdown > a').click(function(ev) { ev.preventDefault() });

});
})(jQuery);