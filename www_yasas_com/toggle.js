function toggleMobile(id) {
	var widthMobile = window.innerWidth;
	if (widthMobile < 1001) {
		var ele1 = document.getElementById(id);
		if (ele1.style.display == "block") {
			ele1.style.display = "none";
		}
		else {
			ele1.style.display = "block";
		}
	}
}
function toggle(id) {		
	var ele2 = document.getElementById(id);
	if (ele2.style.display == "block") {
		ele2.style.display = "none";
	}
	else {
		ele2.style.display = "block";
	}	
}