function scorriGalleria (id_el, x, id_href, spostamentoMax, inizio) {
	if(!id_el.id) {
		el = document.getElementById(id_el);
		var spostamento = parseInt(el.style.bottom)||0;
		if (inizio == null) {
			var inizio = 0;
		}
		//TORNO ALL'INIZIO DELLA GALLERY
		if (spostamento > spostamentoMax) {
			el.style.bottom = 0;
		}
		else {
			//INCREMENTO GRADUALMENTE
			if (inizio < (x*5)) {
				el.style.bottom = (spostamento+5)+'px';
				inizio = inizio+5;
				setTimeout(function(){scorriGalleria(id_el, x, id_href, spostamentoMax, inizio)},1);
			}
		}
	}
}
function changeScroll(id) {
	var prevent = function(e){ e.preventDefault(); }
	if (document.getElementById(id).style.display == 'block') {
		document.body.ontouchmove = prevent;
		//document.body.removeEventListener('touchmove', function(e){ e.preventDefault(); });
	}
	else {
		document.body.ontouchmove = null;
		//document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
	}
}