
if (document.getElementById("s5_inset")) {
	
var s5_main_height1 = 0;

function s5_set_body_height1() {
	
if ((document.getElementById("s5_main_body").offsetHeight - document.getElementById("s5_right_top_wrap").offsetHeight) > document.getElementById("s5_inset").offsetHeight) {

	s5_main_height1 = document.getElementById("s5_main_body").offsetHeight - document.getElementById("s5_right_top_wrap").offsetHeight;

	document.getElementById("s5_inset").style.height = s5_main_height1 + "px";

	s5_main_height1 = document.getElementById("s5_main_body").offsetHeight - document.getElementById("s5_right_top_wrap").offsetHeight;

}

}

s5_set_body_height1();


function s5_set_body_height_check1() {
	
if (document.getElementById("s5_main_content").offsetHeight > document.getElementById("s5_inset").offsetHeight) {
		
	if (s5_main_height1 != document.getElementById("s5_main_content").offsetHeight) {

	document.getElementById("s5_inset").style.height = "auto";

	s5_set_body_height1();
	}

	}

}

var s5_body_Interval1 = 0;
s5_body_Interval1 = window.setInterval("s5_set_body_height_check1()",100);

}

if (document.getElementById("s5_left")) {

var s5_main_height2 = 0;

function s5_set_body_height2() {

s5_main_height2 = document.getElementById("s5_main_body").offsetHeight;

document.getElementById("s5_left").style.height = s5_main_height2 - 4 + "px";

document.getElementById("s5_left_shadow").style.height = s5_main_height2 - 4 + "px";

s5_main_height2 = document.getElementById("s5_main_body").offsetHeight;

}


s5_set_body_height2();



function s5_set_body_height_check2() {
if (s5_main_height2 != document.getElementById("s5_main_body").offsetHeight) {

document.getElementById("s5_left_shadow").style.height = "auto";

document.getElementById("s5_left").style.height = "auto";

s5_set_body_height2();
}

}

var s5_body_Interval2 = 0;
s5_body_Interval2 = window.setInterval("s5_set_body_height_check2()",200);

}