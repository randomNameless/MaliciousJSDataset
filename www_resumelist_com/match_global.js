
$(function(){
	if(/android|Android|iphone|ipad|ipod/i.test(navigator.userAgent)){
		$('[data-toggle="tooltip"]').removeAttr('data-toggle title data-original-title data-container data-placement');
	}
	
})
		
$(document).on('click mouseenter','[data-toggle="tooltip"]',function(){
	if(/android|Android|iphone|ipad|ipod/i.test(navigator.userAgent)){
		$('[data-toggle="tooltip"]').removeAttr('data-toggle title data-original-title data-container data-placement');
	}
})
