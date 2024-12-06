// Accessibility modification: Set tabindex order
jQuery(document).ready(function() {
    // Set certain links to no-tab i.e. Logos, etc.
    jQuery('.slider a, #wpadminbar a').attr('tabindex', -1);
	jQuery('body').prepend('<a href="#" id="skip_to_content">Skip To Main Content</a>');
	jQuery("#skip_to_content").hide().css({"background":"#CCCCCC", "left":"0", "padding":"10px", "position":"absolute", "top":"0", "z-index":"10001"}).attr('tabindex', -1);
	
	 jQuery('body').live("keyup", function(e) {
		var code = e.keyCode || e.which;
		if (code == '9') {
			jQuery("#skip_to_content").fadeIn();
		}
	 });
	jQuery("#skip_to_content").live('click',function(e) {
		e.preventDefault();
		jQuery('.top-section a, .top-section input, .main-menu a').attr('tabindex', -1);
		jQuery('html, body').animate({
			scrollTop: jQuery(".main-content").offset().top
		}, 500);
		jQuery(this).hide();
	});
	jQuery(document).click( function(){
		jQuery('#skip_to_content').hide();
	});
	/*
    // List tabindex selectors (in order)
    var array =     [
                        "#main-menu-ul > a",
                        ".social-logos a",
                        ".top-menu a",
						".main-content a",
						".main-content input",
						"footer a",
                    ];
 
    var tabindex=1;
 
    // For each value of array, set tab index
    jQuery(array).each(function(index, value) {
        jQuery(value).attr('tabindex', tabindex); tabindex++;
    });
	*/
});


jQuery.fn.accessibleDropDown = function ()
{
	var el = jQuery(this);
	/* Make dropdown menus keyboard accessible */

	el.find("a").focus(function() {
		if(jQuery(this).parent().hasClass('has-dropdown')){
			jQuery(this).parent().find('.dropdown:first').addClass('hover');
		}
		else if((jQuery(this).parent().parent().hasClass('dropdown') === false)){
			jQuery(document).find('.dropdown').removeClass('hover');
		}
	}).keydown(function(e){
		//if tab is pressed but not shift
		if(e.keyCode == 9 && !e.shiftKey){
			//and element is the last child in menu
			if(jQuery(this).parent().is(':last-child')){
				jQuery(this).parent().parent().removeClass('hover');
			}
		}
	});
}

//adds keyboard control to navigation
jQuery('nav').accessibleDropDown();

jQuery(document).click(function(){
	//if someone uses keyboard and switches to mouse close menu if mouse click isn't focused on a navigation element 
	if(jQuery('nav a').is(':focus') === false){
		jQuery('.dropdown').removeClass('hover');
	}
});

(function() {
	'use strict';

var DURATION = 350;

var ringElem = null;
var movingId = 0;
var prevFocused = null;
var keyDownTime = 0;

var win = window;
var doc = document;
var docElem = doc.documentElement;
var body = doc.body;


docElem.addEventListener('keydown', function(event) {
	var code = event.which;
	// Show animation only upon Tab or Arrow keys press.
	if (code === 9 || (code > 36 && code < 41)) {
		keyDownTime = Date.now();
	}
}, false);


docElem.addEventListener('focus', function(event) {
	var target = event.target;
	if (target.id === 'flying-focus') {
		return;
	}

	var isFirstFocus = false;
	if (!ringElem) {
		isFirstFocus = true;
		initialize();
	}

	var offset = offsetOf(target);
	ringElem.style.left = offset.left + 'px';
	ringElem.style.top = offset.top + 'px';
	ringElem.style.width = target.offsetWidth + 'px';
	ringElem.style.height = target.offsetHeight + 'px';

	if (isFirstFocus || !isJustPressed()) {
		return;
	}

	onEnd();
	target.classList.add('flying-focus_target');
	ringElem.classList.add('flying-focus_visible');
	prevFocused = target;
	movingId = setTimeout(onEnd, DURATION);
}, true);


docElem.addEventListener('blur', function() {
	onEnd();
}, true);


function initialize() {
	ringElem = doc.createElement('flying-focus'); // use uniq element name to decrease the chances of a conflict with website styles
	ringElem.id = 'flying-focus';
	ringElem.style.transitionDuration = ringElem.style.WebkitTransitionDuration = DURATION / 1000 + 's';
	body.appendChild(ringElem);
}


function onEnd() {
	if (!movingId) {
		return;
	}
	clearTimeout(movingId);
	movingId = 0;
	ringElem.classList.remove('flying-focus_visible');
	prevFocused.classList.remove('flying-focus_target');
	prevFocused = null;
}


function isJustPressed() {
	return Date.now() - keyDownTime < 42
}


function offsetOf(elem) {
	var rect = elem.getBoundingClientRect();
	var clientLeft = docElem.clientLeft || body.clientLeft;
	var clientTop  = docElem.clientTop  || body.clientTop;
	var scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop;
	var left = rect.left + scrollLeft - clientLeft;
	var top =  rect.top  + scrollTop  - clientTop;
	return {
		top: top || 0,
		left: left || 0
	};
}


	var style = doc.createElement('style');
	style.textContent = "#flying-focus {\
	position: absolute;\
	margin: 0;\
	background: transparent;\
	-webkit-transition-property: left, top, width, height;\
	transition-property: left, top, width, height;\
	-webkit-transition-timing-function: cubic-bezier(0,1,0,1);\
	transition-timing-function: cubic-bezier(0,1,0,1);\
	visibility: hidden;\
	pointer-events: none;\
	box-shadow: 0 0 2px 3px #78aeda, 0 0 2px #78aeda inset; border-radius: 2px;\
}\
#flying-focus.flying-focus_visible {\
	visibility: visible;\
	z-index: 9999;\
}\
.flying-focus_target {\
	outline: none !important; /* Doesn't work in Firefox :( */\
}\
/* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */\
.flying-focus_target::-moz-focus-inner {\
	border: 0 !important;\
}\
/* Replace it with @supports rule when browsers catch up */\
@media screen and (-webkit-min-device-pixel-ratio: 0) {\
	#flying-focus {\
		box-shadow: none;\
		outline: 5px auto -webkit-focus-ring-color;\
		outline-offset: -3px;\
	}\
}\
";
	body.appendChild(style);
})();