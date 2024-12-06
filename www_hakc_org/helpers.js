// Share Widget JavaScript
function shareToggle() {
	if ($(".social-platforms").hasClass("social-platforms-active")){
		//remove visiblity classes
		$(".social-platforms").removeClass("social-platforms-overflow").removeClass("social-platforms-active");
	} else {
		//make visible
		$(".social-platforms").addClass("social-platforms-active");
		setTimeout(function(){
			$(".social-platforms").addClass("social-platforms-overflow");
		}, 500);
	}
}
/* END OF ~ Share Widget JavaScript */	