function ra(s,t){if (parseInt(navigator.appVersion) >= 2){document.write("<a rel=\"nofollow\" href=\"",s,"\">",t,"</a>");}}function cdstats(){document.write('<if'+'rame width="1" scrolling="no" height="1" frameborder="0" allowtransparency="true" hspace="0" vspace="0" marginheight="0" marginwidth="0" src="//'+'www.city-data.com/'+'js/stats/tracker.html" name="cd_stats_frame"></iframe>');}
function setCookie(c_name,value,days){document.cookie=c_name+ "=" +escape(value)+";path=/;expires=Thu, 01 Jan 2009 14:17:41 GMT";}
function resizeFrame(f) {
f.style.height = f.contentWindow.document.body.scrollHeight + "px";
}
function readCookie(name) {var nameEQ = name + "=";var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);}return null;}
function fpl_toggle(show){
	// detect iphone
	var agent=navigator.userAgent.toLowerCase();
	var is_iphone = (agent.indexOf('iphone')!=-1);
	c = readCookie('sflv');
	if (show==1 && c=='hide') show = 0;
	f = document.getElementById("lfp_container");
	if (f){
		if (is_iphone) {
			f.innerHTML = '';
			return false;	
		}
		if (show){
			f.innerHTML = '<div id="lfp_ctrls"><span><a href="//www.city-data.com/forum/">See the whole Forum</a> | <a href="#" onclick="fpl_toggle(0);return false;">Hide Forum Preview <img src="//pics3.city-data.com/images/close.png" alt="Hide" /></a></span></div><iframe name="lfp_frame" id="lfp_frame" src="/forum/liveforum.php" frameborder="0"></iframe>';
			if (show==2){
				document.cookie="sflv=show;path=/;expires=Mon, 05 Jan 2032 14:17:41 GMT";
			}
		} else {
			f.innerHTML = '<div id="lfp_showlink"><a href="#" onclick="fpl_toggle(2);return false;">Show Live Forum Preview</a></div>';
			document.cookie="sflv=hide;path=/;expires=Mon, 05 Jan 2032 14:17:41 GMT";
		}
	}
	return false;
}
