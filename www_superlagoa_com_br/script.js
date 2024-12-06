var Mapa = function(elem, lat, longi, img) {
	var latitude, longitude, imagem, selector, map, bounds, my_lat_lng;
	var construct = function() {
		latitude = lat;
		longitude = longi;
		imagem = img;
		selector = elem;
		google.maps.event.addDomListener(window, 'load', iniciar);
	}
	var iniciar = function() {
		var directionsDisplay = new google.maps.DirectionsRenderer();
		my_lat_lng = new google.maps.LatLng(latitude, longitude);
		bounds = new google.maps.LatLngBounds();
		var mapOptions = {
			center: my_lat_lng,
			zoom: 16
		};
		map = new google.maps.Map($(selector)[0], mapOptions);
		directionsDisplay.setMap(map);
		var marker = new google.maps.Marker({
			position: my_lat_lng,
			map: map,
			icon: {
				url: imagem.url,
				size: new google.maps.Size(imagem.width, imagem.height),
				scaledSize: new google.maps.Size(imagem.width, imagem.height)
			}
		});
	}
	this.center = function() {
		map.setCenter(my_lat_lng);
	}
	construct(elem, lat, longi, img);
};
$('.fancybox').fancybox();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	console.log('true');
}
var animScroll = function(elem, config) {
	if (elem.length == 0) return false;
	var top = elem.offset().top;
	var start = top + config.delay;
	if (config.base !== 'top') start -= $(window).height();
	var end = start + config.duration;
	var setCSS = function(value) {
		elem.css(config.property, value + config.unit);
	}
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if (scrollTop < start) setCSS(config.start);
		else if (scrollTop > end) setCSS(config.end);
		else {
			var percent = (scrollTop - start) / config.duration;
			var value = config.start + (percent * (config.end - config.start));
			setCSS(value);
		}
	});
	$(window).trigger('scroll');
}
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
window.onload = function() {
	if (!isMobile.any()) {}
		animScroll($('#inicio').find('#wrap-itens'), {
			delay: 0,
			property: 'top',
			unit: 'px',
			duration: $(window).height(),
			start: 0,
			end: 300,
			base: 'top'
		});
}

function EnviaMail(){
	$('.formulario').submit(function(){
		$.ajax({
			method: "POST",
			url: "fale-conosco-envia.php",
			cache: false,
			data: $('.formulario').serialize()
		})
		.done(function(msg) {
			$(".formulario")[0].reset();
			alert("Obrigado! em breve, entraremos em contato com você.");
		});
		return false;
	});
}

function EnviaEvangeliza(){
	$('.evangelizar-form').submit(function(){
		$.ajax({
			method: "POST",
			url: "evangelizar-envia.php",
			cache: false,
			data: $('.evangelizar-form').serialize()
		})
		.done(function(msg) {
			$(".evangelizar-form")[0].reset();
			alert("Obrigado! em breve, entraremos em contato com você.");
		});
		return false;
	});
}

$(document).ready(function(){
    
    window.cookieconsent.privacyToolsShowCookieNotice();
    
    $(window).load(function(){
        if($('.b_dhtml_zone').size()>0){
            $('.overlay').fadeIn('normal',function(){
                $('.overlay-full').fadeIn();
                setTimeout(function(){
                    bDHTMLClose()
                },7000);
            });
        }
    });
    function bDHTMLClose(){
        $('.overlay').fadeOut();
        $('.overlay-full').fadeOut();
    }
    $('#b_dhtml_close').click(function(e){
        e.preventDefault();
        bDHTMLClose();
    });
});


$(".telefone").mask("(00) 0000-00009");