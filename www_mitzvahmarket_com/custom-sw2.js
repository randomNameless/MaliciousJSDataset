/* Carousel */
/* http://kenwheeler.github.io/slick/ */
$(document).ready(function(){
	$('.regular').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		lazyLoad: 'ondemand',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false
			}
		}
		]
	});
});
/* Carousel */


/* Mega Menu */
document.getElementById( 'mega-menu-icon' ).onclick = function() {
	var mm = document.getElementById('mega-menu');
	var mi = document.getElementById('mega-menu-icon');
	var sb = document.getElementById('mm-search-bar');
	var si = document.getElementById('search-icon');
	var clear = document.getElementById('popup-clear-bg');
	if (mm.style.display === 'none') {
		mm.style.display = 'block';
		mi.style.color = 'white';
		clear.style.display = 'block';
		sb.style.display = 'none';
		si.style.color = '';
	} else {
		mm.style.display = 'none';
		mi.style.color = '';
		clear.style.display = 'none';
	}
}
/* Mega Menu*/


/* Search Bar */
document.getElementById( 'toggle-search' ).onclick = function() {
	var mm = document.getElementById('mega-menu');
	var mi = document.getElementById('mega-menu-icon');
	var sb = document.getElementById('mm-search-bar');
	var si = document.getElementById('search-icon');
	var clear = document.getElementById('popup-clear-bg');
	if (sb.style.display === 'none') {
		sb.style.display = 'block';
		si.style.color = 'white';
		clear.style.display = 'block';
		mm.style.display = 'none';
		mi.style.color = '';
	} else {
		sb.style.display = 'none';
		si.style.color = '';
		clear.style.display = 'none';
	}
}
/* Search Bar */

document.getElementById( 'popup-clear-bg' ).onclick = function() {
	var mm = document.getElementById('mega-menu');
	var mi = document.getElementById('mega-menu-icon');
	var sb = document.getElementById('mm-search-bar');
	var si = document.getElementById('search-icon');
	var clear = document.getElementById('popup-clear-bg');

	if (mm.style.display === 'block') {
		mm.style.display = 'none';
		mi.style.color = '';
		clear.style.display = 'none';
	}
	if (sb.style.display === 'block') {
		sb.style.display = 'none';
		si.style.color = '';
		clear.style.display = 'none';
	}

}



/*form popup */


// Get the modal
var modal = document.getElementById('form-modal');

// Get the button that opens the modal
var btn1 = document.getElementById("btn-modal-1");

// Get the button that opens the modal
var btn2 = document.getElementById("btn-modal-2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
	modal.style.display = "block";
}

btn2.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

/* form popup */






