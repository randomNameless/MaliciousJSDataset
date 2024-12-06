$('#navbar ul.primary > li').mouseover(function() {
	if ($('#mobile-navbar').is(':visible')) {
		return;
	}
	$menuLi = $(this);
	if ($menuLi.find('ul').length == 0) {
		var request = $menuLi.attr("class").replace(/\s*active\s*/, '');
		$.ajax({
			url:path.skin + "toolbar-extras.php?request=" + request,
		}).done(function(response, textStatus, jqXHR) {
			if (!$menuLi.hasClass(request)) {
				$menuLi.closest('ul').children('li.' + request);
			}
			if ($menuLi.hasClass(request) && response && response.length > 0 && $menuLi.find('ul').length == 0) {
				$menuLi.append(response);
			}
		});
	}
})

//2018-12-26: Add overlay that will fade out to prevent accidental AdSense clicks
$('#navbar ul.primary').mouseenter(function() {
	if ($('#aa_wrapper_overlay').length == 0) {
		$('#aa_wrapper').before('<div id="aa_wrapper_overlay" style="position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(1, 1, 1, 0.2);display:none;z-index:4"></div>');
	}
	$('#aa_wrapper_overlay').stop(true, true).delay(40).fadeIn();
}).mouseleave(function() {
	$('#aa_wrapper_overlay').stop(true, true).fadeOut();
});

var $q = $("#q");
if ($q.length) {
	$q.attr('autocomplete', 'off');
}
if (window.history.navigationMode) {
	window.history.navigationMode = 'compatible';
}
/*
// Add the Scroll to Top button if it doesn't exist
if ($("#navbar ul li.to-top").length == 0) {
	$("#navbar ul li.more").after('<li class="to-top"><input type="button" class="button" /></li>');
}
// Handle the Scroll to Top button click
$(document).on( "click", "#navbar .to-top input", function(e) {
	$('html, body, document').animate({scrollTop:0}, 400);
});
*/

$(document).ready(function() {
	if ($q.length && $q.val().length > 0) {
		$q.css({backgroundImage: "none"});
	}
	/*
	// Fade In/Out the Jump-to-top button
	var $window = $(window);
	function fadeToUpButton() {
		var pageTop = 0;
		var $toTop = $("nav .to-top input");
		if ($window.scrollTop() > pageTop) {
			if ($toTop.data("status") != "fadeIn") {
				$toTop.data({status: "fadeIn"}).stop().fadeTo(200, 1);
			}
		} else if ($toTop.data("status") != "fadeOut") {
			$toTop.data({status: "fadeOut"}).stop().fadeTo(200, 0.5);
		}
	}
	fadeToUpButton();
	$window.scroll(function () {
		fadeToUpButton();
	});
	*/
	// Mobile Navigation Bar
	//$('#navbar ul.primary li.to-top').clone().appendTo('ul#mobile-navbar');
	$('#mobile-navbar .menu-btn a').click(function() {									// Menu button was touched
		event.preventDefault();
		var $ulPrimary = $('#navbar ul.primary');										// The drop-down menu
		if ($ulPrimary.is(':visible') && $ulPrimary.find('li.search').is(':visible')) { // Menu is visible and search field is visible...
			$ulPrimary.hide();															// ...hide the menu
		}
		$ulPrimary.find('li').show().filter('.search').hide();							// Show all items in the drop down menu except the search
		$ulPrimary.slideToggle();														// Open/close the menu
	});
	$('#mobile-navbar .search-btn a').click(function() {								// Search button was touched
		event.preventDefault();
		var $ulPrimary = $('#navbar ul.primary');										// The drop-down menu
		if ($ulPrimary.is(':visible') && $ulPrimary.find('li.search').is(':hidden')) {	// Menu is visible and search field is hidden...
			$ulPrimary.hide();															// ...hide the menu
		}
		$ulPrimary.find('li').hide().filter('.search').show();							// Hide all items in the drop down menu except the search
		$ulPrimary.slideToggle();														// Open/close the menu
	});
});
