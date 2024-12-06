$(document).ready(function(){

//only needed for the demo page
	

//activate the lightbox
jQuery('a[href$=jpg], a[href$=png], a[href$=gif], a[href$=jpeg]').prettyPhoto({theme: "light_square"});


// here you can see the slide options I used in the demo page. depending on the id of the slider a different setup gets activated
$('#frontpage-slider').aviaSlider({
slides:".featured",
transition: 'fade',
display: 'all',
betweenBlockDelay:10,
animationSpeed: 1200,
switchMovement: true,
showText: false
});





					
																									
});
