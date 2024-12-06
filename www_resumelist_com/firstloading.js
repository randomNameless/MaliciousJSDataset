// 适配小屏手机(iPhone 6 以下)
function initialScale(){
	
	var winW = window.screen.width;
	if(winW < 375){
		var nscale = winW / 375;
		document.querySelector("meta[name=viewport]").setAttribute('content', "width=device-width, initial-scale="+nscale+", maximum-scale=1, user-scalable=no");
	}
}
initialScale();
window.onresize = initialScale;


