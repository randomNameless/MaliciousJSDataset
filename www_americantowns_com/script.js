/* ============================================
 * on page load functions
 * ============================================ */

$(function() {
	
	if (!Modernizr.objectfit ) {
		$('.articles-row-item .row-image').each(function () {
			var $container = $(this), imgUrl = $container.find('img').prop('src');
			if (imgUrl)
				$container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('compat-object-fit');
		});
	}


	$( ".question-picker" ).autocomplete({
		minLength: 3,
		source: '/ajax/answerbook/question_picker/',
		appendTo: $('.question-picker-container'),
        focus: function(event,ui) {
            //$('#changecitybutton').val(ui.item.sef_url);
        },
		select: function(event,ui) {
            var dataurl = $(this).data("url");
            var texturl = '/';
            if(typeof(dataurl) != "undefined" && dataurl !== null) {
                texturl = dataurl;
            }
			console.log( ui.item.sef_url);
			window.location = ui.item.sef_url;
		},       
		create: function () {
			$(this).data('ui-autocomplete')._renderItem = function (ul, item) {
				var newText = String(item.value).replace(
						new RegExp(this.term, "gi"),
						"<span class='ui-state-highlight'>$&</span>");

				return $("<li></li>")
					.data("item.autocomplete", item)
					.append("<div>" + newText + "</div>")
					.appendTo(ul);
			}
		}
	}).keypress(function(e) {
		// $('.picker-error').html('');
		// if(e.keyCode == 13 || e.which == 13 || e.charCode == 13) {
		// 	if($(this).val()) getTowns();
		// 	return false;
		// }
	});

	/* click-through */
	$('.click-through').each(function(){
		var url = $(this).data('url');
		if(url) $(this).click(function(){
			$.ajax({
				url: url,
				xhrFields: {withCredentials: true},
				success: function(result){
					console.log('[Click Through] ' + url);
					if(result) console.log(result);
			}});
		});
	});

	$('.click-pixel-tracker').each(function(){
		var url = $(this).data('pixel-tracker');
		if(url) $(this).click(function(){
			var img = document.createElement('img');
			img.setAttribute('src', url);
			img.setAttribute('width', '1');
			img.setAttribute('height', '1');
			document.getElementsByTagName('body')[0].appendChild(img);
			console.log('[Pixel Tracker] ' + url);
		});
	});

	/* click-replace */
	$('.click-replace').each(function(){
		var value = $(this).data('value');
		$(this).click(function(){
			$(this).html(value);
		});
	});

	/* at pageTracker */
	$('.click-track').each(function(){
		var value = $(this).data('track');
		$(this).click(function(){
			if(typeof pageTracker._trackPageview === 'function') {
				pageTracker._trackPageview(value);
				console.log('[Page Tracker] pageTracker._trackPageview('+value+');');
			}
		});
	});

	/* yext ecl popup */
	$('.btn-ecl-popup').each(function(){
		var btn = $(this);
		btn.click(function(){
			partner_id = btn.data('id');
			modal_id = btn.data('modalid');
			type = btn.data('type');
			body = btn.parent().find('.modal .modal-body');
			$.ajax({
				url: '/ajax/sp/get_ecl/'+partner_id+'/'+type,
				xhrFields: {withCredentials: true},
			}).done(function( msg ) {
				if(msg) {
					console.log('[ECL POPUP] partner_id: '+partner_id+', type: '+type);
					body.html(msg);
				}
			});
			btn.parent().find('.modal').on('hidden.bs.modal', function () {
			    body.html('');
			})
		});
	});

	/* show more */
	$('.media-wrapper').each(function(){
		var parent = $(this);
		var page = 1;
		parent.find(".show-more").click(function(){
			var btn = $(this);
			var listing = parent.find("div.media-listing");
			btn.html("loading...")
			btn.addClass('loading');
			$.ajax({
				data:{"options":btn.data('options'),"page":page+1},
				url: btn.data('url')
			}).done(function( msg ) {
				if(msg) {
					page++;
					listing.append(msg);
					btn.removeClass('loading');
				} 
				if(!msg || msg.indexOf('no_next_page') > -1)
					btn.hide();
				btn.html("Show More");
                btn.removeClass('loading');
			});
		});
	});

		var dccpage1 = 1;
	$(document.body).on('click', '.search-by-geo .media-wrapper .show-more' ,function(){
		var parent = $(this).parent();
		var btn = $(this);
		var listing = parent.find("div.media-listing");
		btn.html("loading...")
        btn.addClass('loading');
		$.ajax({
			data:{"options":btn.data('options'),"page":dccpage1+1},
			url: btn.data('url')
		}).done(function( msg ) {
			if(msg) {
				dccpage1++;
				listing.append(msg);
			} else
				btn.hide();
			if(listing.find('div.media').length >= btn.data('count'))
				btn.hide();
			btn.html("Show More");
            btn.removeClass('loading');
		});
	});

	/* detail map */
	$('#detail-map').each(function(){
		var el = $(this);
		var title = el.data('title') ? el.data('title') : '' ;
		var lat = el.data('lat');
		var lng = el.data('lng');
		var myLatLng = {lat: lat, lng: lng};
		var zoom = el.data('zoom') ? el.data('zoom') : 14 ;

		var image = basecdn+'/img/pin-blue.png';
		var map = new google.maps.Map(document.getElementById('detail-map'), {
			center: myLatLng,
			scrollwheel: false,
			panControl: true,
			draggable: el.data('draggable'),
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				position: google.maps.ControlPosition.TOP_RIGHT
			},
			zoom: zoom
		});
		var marker = new google.maps.Marker({
			map: map,
			position: myLatLng,
			icon: image,
			label: {text: '*',color: 'white'},
			title: title
		});
	});

	$('.repeated-events').each(function(){
		var buttonmore = $(this).find('.repeated-events-more a');
		var buttonhide = $(this).find('.repeated-events-hide a');
		var buttonspacer = $(this).find('.repeated-events-spacer');
		var list = $(this).find('.repeated-events-list');
		buttonmore.click(function(){
			list.find("li.d-none:lt(20)").removeClass('d-none');
			buttonhide.parent().removeClass('d-none');
			buttonspacer.removeClass('d-none');
			if(list.find("li.d-none").length == 0) {
				buttonmore.parent().addClass('d-none');
				buttonspacer.addClass('d-none');
			}
			return false;
		});
		buttonhide.click(function(){
			list.find("li").addClass('d-none');
			buttonhide.parent().addClass('d-none');
			buttonspacer.addClass('d-none');
			buttonmore.parent().removeClass('d-none');
			return false;
		});
	});

	/* phone toggles */
	$('.toggle_once .first').each(function(){
		$(this).on('click', function(){
			$(this).hide();
			$(this).parent().find('.second').show();
		});
	});
	$('.yp_phone').each(function(){
		$(this).on('click', function(){
			$.ajax({url: $(this).data('url'),async: true});
		});
	});

	/*  Town Picker */
	$( ".city-state" ).autocomplete({
		minLength: 3,
		source: '/ajax/towns/picker/',
		//appendTo: $('.city-state-container'),
        focus: function(event,ui) {
            $('#changecitybutton').val(ui.item.sef_url);
        },
		select: function(event,ui) {
            var dataurl = $(this).data("url");
            var texturl = '/';
            if(typeof(dataurl) != "undefined" && dataurl !== null) {
                texturl = dataurl;
            }
			/*check for guest page redirect*/
			var guest_path = $('.city-state').data('guest') ? '/'+$('.city-state').data('guest')+'/' : '';
			if(guest_path && window.location.pathname.indexOf(guest_path) > -1)
					ui.item.sef_url += "/" +  window.location.href.split(guest_path)[1];
			
			var redirect_uri = $('.city-state').data('redirect_uri') ? $('.city-state').data('redirect_uri') : '';
			if(redirect_uri)
					ui.item.sef_url += redirect_uri;

			window.location = '/'+ui.item.sef_url+texturl;
		}
	}).keypress(function(e) {
		$('.picker-error').html('');
		if(e.keyCode == 13 || e.which == 13 || e.charCode == 13) {
			if($(this).val()) getTowns();
			return false;
		}
	});
    
    $("#changecitybutton").on('click', function() {
        var dataurl = $(this).data("url");
        var texturl = '/';
        if(typeof(dataurl) != "undefined" && dataurl !== null) {
            texturl = dataurl;
        }
        getTowns(texturl);
    });

	$('.town-picker .search').click(function() {
		getTowns();
		return false;
		//event.preventDefault();
	});

	$('.town-picker .use-current-location').on('click', function(event) {
		var el = $(this);
		if (navigator.geolocation) {
			console.log('has navigator.geolocation');
			var latitude = longitude = '';
			navigator.geolocation.getCurrentPosition(
				function(position) {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
					el.html('Fetching location...');
					$.ajax({
						data:{latitude: latitude, longitude: longitude},
						url: '/ajax/towns/locate/',
						dataType: 'json'
					}).done(function( msg ) {
						if(msg.city_state != undefined) {
							el.html('Redirecting to '+msg.city_state);
							window.location = '/'+msg.sef_url+'/';
						} else {
							console.log(msg);
							el.html('Can\'t find your location');
							el.addClass('disabled');
						}
					});
				},
				function() {
					//geolocate.html('Browser Location is Turned Off');
					el.prop('disabled','disabled');
					console.log("Browser location is turned off.");
				}
			);
		} else {
			console.log("navigator.geolocation is not supported by this browser.");
		}
	});

	function getTowns(dataurl) {
		if(typeof(dataurl) != "undefined" && dataurl !== null) 
			dataurl = '/';
		$('.picker-error').html('');
		$.getJSON("/ajax/towns/picker/?term="+$('.city-state').val(), function(result) {
			if(result && result.length > 0) {
				window.location = '/'+result[0].sef_url+dataurl;
			} else {
				$('.picker-error').html("<div>Sorry, but we didn't match the location you entered.</div>"/*+
					"<div>Try one of the following forms:</div>"+
					"<div>- Boston, MA</div>"+
					"<div>- 02116</div>"*/);
			}
		});
	}

	$('.nav-showall').click(function() {
		if($('.secondary-nav').css('height') == '40px') {
			$('.secondary-nav').css('height','auto');
			$(this).addClass('glyphicon-menu-up');
			$(this).removeClass('glyphicon-menu-down');
		} else {
			$('.secondary-nav').css('height','40px');
			$(this).removeClass('glyphicon-menu-up');
			$(this).addClass('glyphicon-menu-down');
		}
	});

	$('.show-more-categories').click(function() {
		$('.more-categories-wrap').toggle();
	});

	var sef_tail = (window.location.pathname[0] == '/') ? window.location.pathname.substring(1) : window.location.pathname;
	$('.secondary-nav li').each(function(){
		if(sef_tail == $(this).find("a").attr('href')) {
			$(this).addClass('active');
		}
	});

	$(window).scroll(function () {
		$('.media-wrapper').each(function(){
			var el = jQuery(this);
			var showmore = el.find('.show-more');
			if(showmore.length && !showmore.hasClass('loading') && showmore.css( "display" ) != 'none' && showmore.data('options')['autoshowmore'] == 'true') {
				if ($(window).scrollTop() >= calculateBottom(el)) {
					showmore.click();
				}
			}
			var hmshowmore = el.find('.gen-show-more');
			if(hmshowmore.length && !hmshowmore.hasClass('loading') && hmshowmore.css( "display" ) != 'none' && hmshowmore.data('options')['autoshowmore'] == 'true') {
				if ($(window).scrollTop() >= calculateBottom(el)) {
					hmshowmore.click();
				}
			}
		});
	});

    /* GENERIC NEXT PAGE */
    $(document.body).on('click', '.show-more-generic' ,function(){
    	var button = $(this);
    	button.html('Loading...');
        button.addClass('loading');
        button.attr("disabled", true);
    	$.ajax({
    		data: button.data('options'),
    		url: button.data('ajax')
    	}).done(function( msg ) {
            $( button.data('lastid') ).after(msg);
            button.remove();
    	});
    });

    /*load historical markers */
    var hmpage = 2;
    $(document.body).on('click', '.hm-show-more', function() {
        console.log('clicked!');
        hmarkexecute = true;
		var button = $(this);
		var listing = button.parent().find('.media-listing');
		button.html('Loading...');
        button.addClass('loading');
		$.ajax({
			type: "GET",
			dataType: 'json',
			data:{"id":button.data('mongo-id'), "page":hmpage },
			url: button.data('script')
		}).done(function( msg ) {
			hmarkers_to_html(msg.hmarkers);
			hmpage++;
			if(!msg.morepages) button.hide();
			else {
                button.html('Show More');
                button.removeClass('loading');
			}
		});
        function hmarkers_to_html(obj) {
			$(obj).each(function(){
				var el = this.Historicalmarkers;
                var shortdesc = el.locationEnglish;
                if (shortdesc == '') {
                    shortdesc = el.description;
                }
                var hmphoto = el.firstphoto;
				var list_item = listing.find('.media').first().clone();
                $(list_item).find('.media-heading a').html(el.title);
                $(list_item).find('p.small').html(shortdesc);
                $(list_item).find('a').attr('href',el.new_sef_tail);
                if (el.firstphoto != '') {
                    $(list_item).find('.media-right').removeClass('hidden');
                    $(list_item).find('.media-right a img').attr('src',el.firstphoto);
                } else {
                    $(list_item).find('.media-right').addClass('hidden');
                }
                listing.append(list_item);
            });
        }

    });

    /*General Show More Button*/
    var genstartpage = 2;
    $('.gen-show-more').on('click', function() {
    	var button = $(this);
    	//genstartpage = genstartpage + 1;
		button.html('Loading...');
        button.addClass('loading');
    	$.ajax({
    		type:"POST",
    		datatype: 'json',
    		data: {
    			"page":genstartpage,
    			"options":button.data('options')
    		},
    		url: button.data('url')
    	}).done(function(msg) {
    		genstartpage++;
    		var divid = button.data('divid');
    		$('#'+divid).append(msg);
    		if (button.data('tpages') <= genstartpage) {
    			button.hide();
    		} else {
                button.html('Show More');
                button.removeClass('loading');
    		}
    		
    	});
    });

	// embed instagram
	$('.embed-ig').each(function(){
		var hidecaption = $(this).data('hidecaption') ? $(this).data('hidecaption') : true;
		var maxwidth = $(this).data('maxwidth') > 320 ? $(this).data('maxwidth') : '';
		if($(this).data('url')){
			$.ajax({
				context: this,
				url: "https://api.instagram.com/oembed/?hidecaption="+hidecaption+"&maxwidth="+maxwidth+"&url="+$(this).data('url'),
				success: function(data) { $(this).html(data.html); }
			});
		}
	});

    
	/* load-module */
	$('.load-module').each(function(){
		var el = $(this);
		var lat = el.data('lat');
		var lng = el.data('lng');
		var module = el.data('module');
		var geosearch = el.data('geo') == 'no' ? false : true;
		if(geosearch) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
				function(position) {
					el.html('loading <i class="fa fa-spinner fa-spin"></i>');
					$.ajax({
						data:{module: module, latitude: position.coords.latitude, longitude: position.coords.longitude, settown:'yes'},
						url: '/ajax/modules/load/'
					}).done(function( msg ) {
						el.html(msg)
					});
				});
			} else {
				console.log("Geolocation is not supported by this browser.");
			}
		} else {
			el.html('loading <i class="fa fa-spinner fa-spin"></i>');
			$.ajax({
				data:{module: module},
				url: '/ajax/modules/load/'
			}).done(function( msg ) {
				el.html(msg)
			});
		}
	});

	/* search by geo */
	$('.search-by-geo').each(function(){
		var container = $(this).find('.search-by-geo-container');
		var picker = $(this).find('.search-by-geo-town-picker');
		var geolocate = $(this).find('.use-current-location');
		var form = $(this).find('#form-geo-search');

		geolocate.on('click', function(event) {
			if (navigator.geolocation) {
				var latitude = longitude = '';
				navigator.geolocation.getCurrentPosition(
					function(position) {
						latitude = position.coords.latitude;
						longitude = position.coords.longitude;
						$.ajax({
							data:{latitude: latitude, longitude: longitude, settown:true},
							url: '/ajax/towns/locate/'
						}).done(function( msg ) {
							var data = JSON.parse(msg);
							console.log("Location found. "+data.sef_url);
							picker.find('.geo-city-state').val(data.city_state);
							var getlocation = false;
							trysearchbygeo(container,getlocation)
						});
					},
					function() {
						console.log("navigator.geolocation.getCurrentPosition is not supported by this browser.");
					}
				);
			} else {
				console.log("navigator.geolocation is not supported by this browser.");
			}
		});

		picker.find('.geo-city-state').autocomplete({
			minLength: 3,
			source: '/ajax/towns/picker/',
			select: function(event,ui) {
				$.ajax({
					data:{sef_url: ui.item.sef_url, settown:true},
					url: '/ajax/towns/locate/'
				}).done(function( msg ) {
					var getlocation = false;
					trysearchbygeo(container,getlocation)
				});
			}
		}).keypress(function(e) {
			$('.picker-error').html('');
			if(e.keyCode == 13 || e.which == 13 || e.charCode == 13) {
				if($(this).val()) {
					getTownsGeo($(this).val());
				}
				return false;
			}
		});

		form.find('.submit').click(function() {
			if(picker.find('.geo-city-state').val())
				getTownsGeo(picker.find('.geo-city-state').val());
			return false;
		});

		function getTownsGeo(search) {
			console.log(search);
			$.getJSON("/ajax/towns/picker/?term="+search, function(result) {
				if(result && result.length > 0) {
					$.ajax({
						data:{sef_url: result[0].sef_url, settown:true},
						url: '/ajax/towns/locate/'
					}).done(function( msg ) {
						var getlocation = false;
						trysearchbygeo(container,getlocation)
					});
				}
			});
		}

		// turned off. now loading state data by default
		// if(getCookie("ct") != "")  {
		// 	var getlocation = false;
		// 	trysearchbygeo(container,getlocation)
		// }

	});

	var touchStartX = null;

	$('.carousel').each(function () {
		var $carousel = $(this);
		$(this).on('touchstart', function (event) {
			var e = event.originalEvent;
			if (e.touches.length == 1) {
				var touch = e.touches[0];
				touchStartX = touch.pageX;
			}
		}).on('touchmove', function (event) {
			var e = event.originalEvent;
			if (touchStartX != null) {
				var touchCurrentX = e.changedTouches[0].pageX;
				if ((touchCurrentX - touchStartX) > 60) {
					touchStartX = null;
					$carousel.carousel('prev');
				} else if ((touchStartX - touchCurrentX) > 60) {
					touchStartX = null;
					$carousel.carousel('next');
				}
			}
		}).on('touchend', function () {
			touchStartX = null;
		});
	});

	$('.list-show-more').each(function(){
		$(this).on( "click", function() {
			$(this).parent().parent().find('.nearby-offers .items').removeClass('d-none');
			$(this).hide();
		});
	});
	
});

/* ============================================
 * header menu resize
 * ============================================ */
 
 	$(window).on('resize', function() {
		header_menu_resize();
	});

	header_menu_resize();
	function header_menu_resize () {
		if(!$('.header-menu.autoresize').length) return;
		if($('.navbar-header').css('display') != 'none'){
			$(".navbar-item a.navbar-link").css('padding', '10px 19px');
			return;
		}
		var navbar = $('.header-menu').find('.navbar-nav');
		var navbar_item = navbar.find(".navbar-item a.navbar-link");
		var navbar_height = parseInt(navbar_item.css('height').replace('px',''));
		var navbar_item_padding = 5;
		navbar_item.css('padding-right',navbar_item_padding+'px');
		navbar_item.css('padding-left',navbar_item_padding+'px');
		while(navbar_item_padding <= 50) {
			navbar_item_padding++;
			navbar_item.css('padding-right',navbar_item_padding+'px');
			navbar_item.css('padding-left',navbar_item_padding+'px');
			if(parseInt(navbar.css('height').replace('px','')) > navbar_height) {
				navbar_item_padding--;
				navbar_item.css('padding-right',navbar_item_padding+'px');
				navbar_item.css('padding-left',navbar_item_padding+'px');
				//console.log(navbar_item_padding + ' break');
				break;
			}
		}
	}


/* ============================================
 * GP Functions
 * ============================================ */

$(function() {

	$('.gp-item').each(function(){
		$(this).find('a').attr('href', $(this).data('link'));
	});

	$('.gp-async').each(function(){
		var listing = $(this).find('.media-listing');
		var showmore = $(this).find('.gp-show-more');
		var params = jQuery.parseJSON($(this).find('#params').html());
		var page = 1;

		jQuery.ajax({type: "GET",data: params,url: "/ajax/gp/update_results/"}).done(function(msg) {
			listing.html(msg);
			listing.find('.gp-item').each(function(){
				$(this).find('a').attr('href', $(this).data('link'));
				});
			if(!msg || msg.indexOf('no_next_page') > -1) 
				showmore.addClass('hidden'); else showmore.removeClass('hidden');
			if(listing.find('.mongo-id').text() != '')
				showmore.data('mongo-id', listing.find('.mongo-id').text())
		});

		showmore.click(function() {
			data = {"id":showmore.data('mongo-id'), "page":++page}
			$.ajax({
				type: "GET",
				data: data,
				url: "/ajax/gp/next_page/"
			}).done(function( msg ) {
				listing.append(msg);
				listing.find('.gp-item').each(function(){
					$(this).find('a').attr('href', $(this).data('link'));
					});
				if(!msg || msg.indexOf('no_next_page') > -1) 
					showmore.addClass('hidden'); else showmore.removeClass('hidden');
			});
		});
	});

});


/* ============================================
 * gp map module
 * ============================================ */

	/* map module gp */
	jQuery('.map-module-gp').each(function(){
		var parent = jQuery(this);

		var gppage = parent.data('gppage')?parent.data('gppage'):'';

		var lat = parent.data('lat');
		var lng = parent.data('lng');
		var showprice = parent.data('showprice');

		var map;
		var pages = [];
		var places = parent.data('places');
		if(places.length) pages[1] = places.slice(0,10);
		if(places.length > 10) pages[2] = places.slice(10,20);
		var markers = [];
		var bounds;

		var last_count = 100;
		var am_list = parent.find("#localmap_locations");
		var am_counter = parent.find(".localmap_counter");
		var am_next = parent.find(".localmap_button_next");
		var am_prev = parent.find(".localmap_button_prev");
		var am_next_arrow = parent.find(".fa.fa-caret-right.arrow");
		var am_prev_arrow = parent.find(".fa.fa-caret-left.arrow");
		var showmore = parent.find("li#showmore_indicator");

		var current_page = 1;
		var limit = Number(parent.data('limit'));
		var morepages = parent.data('morepages');
		var mongo_id = parent.data('id');
		var last_page = morepages ? 99 : 1;
		check_am_nav();

		var infowindow = new google.maps.InfoWindow({
			content: "Loading...",
			maxWidth: 280,
			disableAutoPan: true
		});

		var loading = jQuery('<div align="center">').addClass('loading').append(jQuery('<div>').html('Loading Results'))
			.append(jQuery('<img>').attr('src','https://cdn-p300.americantowns/img/progress-bar.gif'));

		jQuery('.update-results').click(function() {
			jQuery('.more-categories-wrap').hide();
			am_list.html(loading);
			jQuery.ajax({
				type: 'GET',
				dataType: 'json',
				url: '/ajax/gp/restaurant/',
				data: jQuery('#EventRestaurantForm').serialize(),
				success: function(data) {
					if(data.places.length > 0) {
						places = data.places;
						mongo_id = data.mongo_id;
						lat = data.lat;
						lng = data.lng;
						morepages = data.morepages;
						showprice = data.showprice;
						pages = [];
						if(places.length) pages[1] = places.slice(0,10);
						if(places.length > 10) pages[2] = places.slice(10,20);
						current_page = 1;
						last_page = morepages ? 99 : 1;
						am_list.html(populate_am_list_restaurant(pages[1]));
						check_am_nav();
					} else {
						pages = [];
						current_page = 1;
						last_page = 1;
						am_list.html('<section class="loading">There are no results. Please try changing your refine search.</section>');
						check_am_nav();
					}
				}
			});
			return false;
		});

		google.maps.event.addListener(infowindow, 'domready', function(){
			jQuery(".gm-style-iw").next("div").addClass('icon-close');
			jQuery(".gm-style-iw").next("div").css({'font-size':'x-large', 'width':'auto', 'height':'auto'});
		});


		am_next.click(function(){navigate('next');});
		am_prev.click(function(){navigate('back');});

		function navigate(direction){
			direction = direction ? direction : 'next';

			if(direction == 'next') {
				if(current_page == last_page) return;
				am_next.html('Loading...');
				pg = current_page+1;
			} else {
				if(current_page <= 1) return;
				am_prev.html('Loading...');
				pg = current_page-1;
			}
			if(pages[pg]) {
				if(gppage === 'restaurant') am_list.html(populate_am_list_restaurant(pages[pg]));
				else am_list.html(populate_am_list(pages[pg]));
				if(direction == 'next') am_next.html('NEXT'); else am_prev.html('BACK');
				current_page = pg;
				check_am_nav();
			}
			else {
                var theurl = am_next.data('capture');
                if (direction == 'back') {
                    theurl = am_prev.data('capture');
                }
				jQuery.ajax({
					type: "GET",
					dataType: 'json',
					data:{"id":mongo_id,"page":pg,"showprice":showprice},
					url: "/ajax/gp/navigate/"
				}).done(function( msg ) {
					morepages = msg.morepages;
					if(direction == 'next') am_next.html('NEXT'); else am_prev.html('BACK');
					if(msg.places.length) {
						pages[pg] = msg.places.slice(0,10);
						if(gppage === 'restaurant') am_list.html(populate_am_list_restaurant(pages[pg]));
						else am_list.html(populate_am_list(pages[pg]));
						current_page = pg;
						if(msg.places.length > 10){
							pg++;
							pages[pg] = msg.places.slice(10,20);
						}
					}
					if(!morepages) {last_page = pg;}
					check_am_nav();
				});
			}
			
		}

		function check_am_nav() {

			if(parent.find("#localmap_locations").height() >= 560)
			jQuery("#map_canvas").css({"height":parent.find("#localmap_locations").height()});
			//if(gppage === 'restaurant' && parent.find(".map-table-left").height() >= 560)
				//jQuery("#map_canvas").css({"height":parent.find(".map-table-left").height()});
			if(current_page <= 1){
				am_prev.addClass("grey");
				am_prev_arrow.addClass("grey");
			}else{
				am_prev.removeClass("grey");
				am_prev_arrow.removeClass("grey");
			}
			if (current_page == last_page){
				am_next.addClass("grey");
				am_next_arrow.addClass("grey");
			}else {
				am_next.removeClass("grey");
				am_next_arrow.removeClass("grey");
			}
		}

		function populate_am_list_restaurant(data) {
			var list = jQuery('<div></div>');
			var new_places = {};
			jQuery.each(data, function(i,area) {
				var li = jQuery('<li id="list_'+area.key+'"></li>');
				var a = jQuery('<a href="'+area.sef_tail+'"></a>');
				var div = jQuery('<div></div>');
				var rating_class = 'alignright';
				new_places[i] = {'key':area.key,'id':area.id,'name':area.name,'address':area.address,'latitude':area.latitude,'longitude':area.longitude,'sef_tail':area.sef_tail,'price':area.price,'rating':area.rating};
				div.append('<div class="count alignleft"><img src="'+basecdn+'/img/marker_pins/'+area.key+'.png" /></div>');
				str = '<div class="name"><b>'+area.name+'</b></div><div class="location">'+area.address+'</div>';
				if(area.price) rating_class = 'alignright'; str += '<div class="price alignleft"><span class="dollars">'+area.price+'</span></div>';
				str += '<div class="rating '+rating_class+'">'+area.rating+'</div>';
				a.append(div.addClass('clearfix').append('<div class="description alignright clearfix">'+str+'</div>'));
				list.append(li.append(a));
				//if(i==9) list.append('<li id="showmore_indicator">SHOW MORE</li>');
			});
			places = new_places;
			load_places();
			am_list.html(list.html());
		}

		function populate_am_list(data) {
			var list = jQuery('<div></div>');
			var new_places = {};
			am_list.html('');
			jQuery.each(data, function(i,area) {
				var row = '<div class="media" id="list_'+area.key+'">'+
					'<div class="media-left">'+
						'<span class="count"><a href="'+area.sef_tail+'"><img src="'+basecdn+'/img/marker_pins/'+area.key+'.png" /></a></span>'+
					'</div>'+
					'<div class="media-body">'+
						'<h4 class="media-heading"><a href="'+area.sef_tail+'">'+area.name+'</a></h4>'+
						'<div class="location"><a href="'+area.sef_tail+'">'+area.address+'</a></div>'+
						(area.price ? '<div class="price"><span class="dollars">'+area.price+'</span></div>' : '')
					'</div>'+
				'</div>';
				new_places[i] = {'key':area.key,'id':area.id,'name':area.name,'address':area.address,'latitude':area.latitude,'longitude':area.longitude,'sef_tail':area.sef_tail};
				am_list.append(row);
			});
			places = new_places;
			load_places();
		}


		function load_places() {
			setTimeout( function(){ //wait a bit for the listing to fully load before we get the height
				$('.map_canvas').css('height',am_list.height());
				google.maps.event.trigger(map, 'resize');

				bounds = new google.maps.LatLngBounds();
				while (markers.length > 0) {
					var marker = markers.pop();
					marker.setMap(null);
				}
				var first,last;
				for (var i in places) {
					var r = places[i];
					var index = (parseInt(r['key'])).toString();
					if(first==null) first = index;
					last = index;
					if(r.latitude && r.longitude) {
						places[i].latlng = new google.maps.LatLng(places[i].latitude, places[i].longitude);
						set_marker (i);
					}
				}
				bounds.extend(new google.maps.LatLng(parent.data('lat'), parent.data('lng')));
				map.fitBounds(bounds);
			}, 500);
		}


		function set_marker(i) {
			var r = places[i];
			var index = (parseInt(r['key'])).toString();
			var index_str = (index.length < 2) ? '0' + index : index;
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(r.latitude, r.longitude),
				map: map,
				title: r['name'],
				index: index,
					icon: basecdn+'/img/marker_pins/' + index + '.png',
					html: '<div class="marker-pop"><div class="name"><b>'+r['name']+'</b></div>'+
						//'<img class="mini-pin" height="39" src="'+basecdn+'/img/marker_pins/mini.png" />'+
						'<div class="location">'+r['address']+'</div>'+
						'<div class="moreinfo"><i class="fa fa-plus-square"></i> <a href="'+r['sef_tail']+'">more info</a></div></div>'
			});

			am_list.on('mouseenter', 'div#list_'+index, function(){
				infowindow.setContent(marker.html);
				if (infowindow) infowindow.close();
				infowindow.open(map,marker);
				marker.setAnimation(google.maps.Animation.BOUNCE);

				/*var pixel = fromLatLngToPixel(marker.getPosition());
				pixel.x = pixel.x - 130; //pan window to the right by 130px
				var point = fromPixelToLatLng(pixel)
				map.panTo(point);*/
			});
			am_list.on('mouseleave', 'div#list_'+index, function(){
				marker.setAnimation(null);
			});

			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.setContent(this.html);
			  if (infowindow) infowindow.close();
			  infowindow.open(map,this);
			});
			google.maps.event.addListener(marker, "mouseover", function() {
				el = parent.find('div#localmap_locations div#list_'+this.index);
				el.css("background-color","#dee9e9");
			});
			google.maps.event.addListener(marker, "mouseout", function() {
				el = parent.find('div#localmap_locations div#list_'+this.index);
				el.css("background-color","");
			});

			markers.push(marker);
			bounds.extend(new google.maps.LatLng(r.latitude, r.longitude));
			//map.fitBounds(bounds);
		}

		function fromLatLngToPixel (position) {
		  var scale = Math.pow(2, map.getZoom());
		  var proj = map.getProjection();
		  var bounds = map.getBounds();

		  var nw = proj.fromLatLngToPoint(
			new google.maps.LatLng(
			  bounds.getNorthEast().lat(),
			  bounds.getSouthWest().lng()
			));
		  var point = proj.fromLatLngToPoint(position);

		  return new google.maps.Point(
			Math.floor((point.x - nw.x) * scale),
			Math.floor((point.y - nw.y) * scale));
		}

		function fromPixelToLatLng (pixel) {
		  var scale = Math.pow(2, map.getZoom());
		  var proj = map.getProjection();
		  var bounds = map.getBounds();

		  var nw = proj.fromLatLngToPoint(
			new google.maps.LatLng(
			  bounds.getNorthEast().lat(),
			  bounds.getSouthWest().lng()
			));
		  var point = new google.maps.Point();

		  point.x = pixel.x / scale + nw.x;
		  point.y = pixel.y / scale + nw.y;

		  return proj.fromPointToLatLng(point);
		}

		var mapOptions = {
			center: new google.maps.LatLng(places[0]['latitude'], places[0]['longitude'])
		};
		map = new google.maps.Map(parent.find(".map_canvas")[0], mapOptions);
		places = pages[1];
		load_places();

	}); /* map module gp */


/* ============================================
 * places map module
 * ============================================ */

	/* map module places */
	jQuery('.map-module-places').each(function(){
		var parent = jQuery(this);
		
		var lat = parent.data('lat');
		var lng = parent.data('lng');
		
		var map;
		var pages = [];
		var places = parent.data('places');
		//if(places.length) pages[1] = places.slice(0,10);
		//if(places.length > 10) pages[2] = places.slice(10,20);
		pages[1] = places;
		var markers = [];
		var bounds;
		
		var last_count = 100;
		var am_list = parent.find("#localmap_locations");
		var am_counter = parent.find(".localmap_counter");
		var am_next = parent.find(".localmap_button_next");
		var am_prev = parent.find(".localmap_button_prev");
		var am_next_arrow = parent.find(".fa.fa-caret-right.arrow");
		var am_prev_arrow = parent.find(".fa.fa-caret-left.arrow");
		var showmore = parent.find("li#showmore_indicator");
		
		var current_page = 1;
		var limit = Number(parent.data('limit'));
		var morepages = parent.data('morepages');
		var count = parent.data('count');
		var options = parent.data('options');
		var last_page = Math.ceil(count/limit);
		check_am_nav();
		
		var infowindow = new google.maps.InfoWindow({
			content: "Loading...",
			maxWidth: 280,
			disableAutoPan: true
		});
		
		var loading = jQuery('<div align="center">').addClass('loading').append(jQuery('<div>').html('Loading Results'))
			.append(jQuery('<img>').attr('src','https://cdn-p300.americantowns.com/img/progress-bar.gif'));
		
		google.maps.event.addListener(infowindow, 'domready', function(){
			jQuery(".gm-style-iw").next("div").addClass('icon-close');
			jQuery(".gm-style-iw").next("div").css({'font-size':'x-large', 'width':'auto', 'height':'auto'});
		});
   
		
		am_next.click(function(){navigate('next');});
		am_prev.click(function(){navigate('back');});
		
		function navigate(direction){
			direction = direction ? direction : 'next';
		
			if(direction == 'next') {
				if(current_page == last_page) return;
				am_next.html('Loading...');
				pg = current_page+1;
			} else {
				if(current_page <= 1) return;
				am_prev.html('Loading...');
				pg = current_page-1;
			}	
			if(pages[pg]) {
				am_list.html(populate_am_list(pages[pg]));
				if(direction == 'next') am_next.html('NEXT'); else am_prev.html('BACK');
				current_page = pg;
				check_am_nav();	
			} 
			else {	
				jQuery.ajax({
					type: "GET",
					dataType: 'json',
					data:{"page":pg,"options":options},
					url: "/ajax/places/navigate/"
				}).done(function( msg ) {
					morepages = msg;
					if(direction == 'next') am_next.html('NEXT'); else am_prev.html('BACK');
					if(msg.length) {
						pages[pg] = msg;
						am_list.html(populate_am_list(pages[pg]));
						current_page = pg;
					}
					check_am_nav();	
				});
			}
		}
		
		function check_am_nav() {
			
			if(parent.find("#localmap_locations").height() >= 560)
			jQuery("#map_canvas").css({"height":parent.find("#localmap_locations").height()});
			if(current_page <= 1){
				am_prev.addClass("grey");
				am_prev_arrow.addClass("grey");
			}else{
				am_prev.removeClass("grey");
				am_prev_arrow.removeClass("grey");
			}
			if (current_page == last_page){
				am_next.addClass("grey");
				am_next_arrow.addClass("grey");
			}else {
				am_next.removeClass("grey");
				am_next_arrow.removeClass("grey");		
			}
		}
		
		function populate_am_list(data) {
			var list = jQuery('<div></div>');
			var new_places = {};
			am_list.html('');
			jQuery.each(data, function(i,area) {
				var row = '<div class="media" id="list_'+area.key+'">'+
					'<div class="media-left">'+
						'<span class="count"><a href="'+area.sef_tail+'"><img src="'+basecdn+'/img/marker_pins/'+area.key+'.png" /></a></span>'+
					'</div>'+
					'<div class="media-body">'+
						'<h4 class="media-heading"><a href="'+area.sef_tail+'">'+area.name+'</a></h4>'+
						'<div class="location"><a href="'+area.sef_tail+'">'+area.address+'</a></div>'
					'</div>'+
				'</div>';
				new_places[i] = {'key':area.key,'id':area.id,'name':area.name,'address':area.address,'latitude':area.latitude,'longitude':area.longitude,'sef_tail':area.sef_tail};
				am_list.append(row);				
			});
			places = new_places;
			load_places();
		}
		
		function load_places() {
			setTimeout( function(){ //wait a bit for the listing to fully load before we get the height			
				$('.map_canvas').css('height',am_list.height());
				google.maps.event.trigger(map, 'resize');
	
				bounds = new google.maps.LatLngBounds();
				while (markers.length > 0) {
					var marker = markers.pop();
					marker.setMap(null);
				}
				var first,last;
				for (var i in places) {
					var r = places[i];
					var index = (parseInt(r['key'])).toString();
					if(first==null) first = index;
					last = index;
					if(r.latitude && r.longitude) {
						places[i].latlng = new google.maps.LatLng(places[i].latitude, places[i].longitude);
						set_marker (i);
					}
				}
				bounds.extend(new google.maps.LatLng(parent.data('lat'), parent.data('lng')));
				map.fitBounds(bounds);
			}, 500);
		}
		
		
		function set_marker(i) {
			var r = places[i];
			var index = (parseInt(r['key'])).toString();
			var index_str = (index.length < 2) ? '0' + index : index;
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(r.latitude, r.longitude),
				map: map,
				title: r['name'],
				index: index,
					icon: basecdn+'/img/marker_pins/' + index + '.png',
					html: '<div class="marker-pop"><div class="name"><b>'+r['name']+'</b></div>'+
						//'<img class="mini-pin" height="39" src="'+basecdn+'/img/marker_pins/mini.png" />'+
						'<div class="location">'+r['address']+'</div>'+
						'<div class="moreinfo"><i class="fa fa-plus-square"></i> <a href="'+r['sef_tail']+'">more info</a></div></div>'
			});
			
			am_list.on('mouseenter', 'div#list_'+index, function(){
				infowindow.setContent(marker.html);
				if (infowindow) infowindow.close();
				infowindow.open(map,marker);
				marker.setAnimation(google.maps.Animation.BOUNCE);		
			});	
			am_list.on('mouseleave', 'div#list_'+index, function(){
				marker.setAnimation(null);
			});
				
			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.setContent(this.html);
			  if (infowindow) infowindow.close();
			  infowindow.open(map,this);
			});
			google.maps.event.addListener(marker, "mouseover", function() {
				el = parent.find('div#localmap_locations div#list_'+this.index);
				el.css("background-color","#dee9e9");
			});
			google.maps.event.addListener(marker, "mouseout", function() {
				el = parent.find('div#localmap_locations div#list_'+this.index);
				el.css("background-color","");
			});
			
			markers.push(marker);
			bounds.extend(new google.maps.LatLng(r.latitude, r.longitude));
			//map.fitBounds(bounds);
		}
		
		function fromLatLngToPixel (position) {
		  var scale = Math.pow(2, map.getZoom());
		  var proj = map.getProjection();
		  var bounds = map.getBounds();
		
		  var nw = proj.fromLatLngToPoint(
			new google.maps.LatLng(
			  bounds.getNorthEast().lat(),
			  bounds.getSouthWest().lng()
			));
		  var point = proj.fromLatLngToPoint(position);
		
		  return new google.maps.Point(
			Math.floor((point.x - nw.x) * scale),
			Math.floor((point.y - nw.y) * scale));
		}
		
		function fromPixelToLatLng (pixel) {
		  var scale = Math.pow(2, map.getZoom());
		  var proj = map.getProjection();
		  var bounds = map.getBounds();
		
		  var nw = proj.fromLatLngToPoint(
			new google.maps.LatLng(
			  bounds.getNorthEast().lat(),
			  bounds.getSouthWest().lng()
			));
		  var point = new google.maps.Point();
		
		  point.x = pixel.x / scale + nw.x;
		  point.y = pixel.y / scale + nw.y;
		
		  return proj.fromPointToLatLng(point);
		}	
		
		var mapOptions = {
			center: new google.maps.LatLng(places[0]['latitude'], places[0]['longitude'])
		};
		map = new google.maps.Map(parent.find(".map_canvas")[0], mapOptions);
		places = pages[1];
		load_places();
		
	}); /* map module places */

/* ============================================
 * geo search functions
 * ============================================ */

function trysearchbygeo(el,getlocation) {
	
	var model =  el.data('object') ? el.data('object') : 'places';
	// el.data('hostname', getCookie("cs"));
	// el.data('type','geo-search');
	// el.data('page','1');
	// el.data('show-image', el.data('show-image')=='yes' ? 'yes' : 'no');
	// el.data('show-more', el.data('show-more') ? 'yes' : 'no');
	// el.data('object', el.data('object') ? el.data('object') : 'places');
	// el.data('show', el.data('show') ? el.data('show') : 5);
	// el.data('min', el.data('min') ? el.data('min') : 5);
	var searchdata = {data:el.data('options'), url:'/ajax/'+model+'/index/'};

	if(getlocation) {

		if (navigator.geolocation) {
			var latitude = longitude = '';
			navigator.geolocation.getCurrentPosition(
				function(position) {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
					console.log('browser search');
					searchbygeo(latitude,longitude,searchdata,el);
				}
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}

	} else {
		el.html('<div class="white-bg">loading <i class="fa fa-spinner fa-spin"></i></div>');
		$.ajax(searchdata).done(function( msg ) {
			el.html(msg);
			el.find('.town-link').removeClass('hidden');
		});
	}
}

function searchbygeo(latitude,longitude,searchdata,el) {
	$.ajax({
		type: "GET",
		data:{'latitude': latitude, 'longitude': longitude, 'settown':'yes'},
		url: '/ajax/towns/locate/'
	}).done(function( msg ) {
		el.html('<div class="white-bg">loading <i class="fa fa-spinner fa-spin"></i></div>');
		$.ajax(searchdata).done(function( msg ) {
			el.html(msg);
			el.find('.town-link').removeClass('hidden');
		});
	});		
}

function showPosition(position) {
	jQuery.getJSON('/ajax/towns/locate/', {latitude: position.coords.latitude, longitude: position.coords.longitude, settown: 'yes'}, function(data) {
		//window.location = "/" + data.sef_url + "/" + window.location.href.split('/guest/')[1];
	});
}

/* ============================================
 * geo user location
 * ============================================ */

jQuery('.geo-user-location-button').each(function(){
	var el = $(this);
	var redirect = el.data('redirect') ? el.data('redirect') : '';
	var settown = (redirect == 'yes' || redirect == 'true') ? 'no' : 'yes';
	el.click(function(){
		el.html('Locating...');
		if (navigator.geolocation) {
			var latitude = longitude = '';
			navigator.geolocation.getCurrentPosition(
				function(position) {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
					$.ajax({
						data:{latitude: latitude, longitude: longitude, settown:settown},
						url: '/ajax/towns/locate/'
					}).done(function( msg ) {
						console.log("location found.");
						msg = msg ? jQuery.parseJSON(msg) : '';
						if(msg.sef_url && redirect) {
							if(window.location.pathname.indexOf("/guest/") > -1)
								var path = '/'+ msg.sef_url + '/' + window.location.href.split('/guest/')[1];
							else
								var path = '/'+ msg.sef_url + '/';
							console.log("redirecting to "+path+" ...");
							window.location = path;
						}
						else {
							console.log("reloading...");
							location.reload();
						}
					});
				},
				function() {
					console.log("navigator.geolocation.getCurrentPosition is not supported by this browser.");
				}
			);
		} else {
			console.log("navigator.geolocation is not supported by this browser.");
		}
	});

});

/* ============================================
 * lazy loading
 * ============================================ */

$(function() {
	var bLazy = new Blazy();
});


/* ============================================
 * share button functions
 * ============================================ */
 
$(function() {
	var FB_WINDOW_WIDTH=550,FB_WINDOW_HEIGHT=350,shareOnFb={};
	$(".p300-fb-share").on("click",function(e){
		e.preventDefault();var url=$(this).data("url");
		if(url){var sharerUrl="http://www.facebook.com/sharer/sharer.php?u="+url+"&",winTop=window.screen.height/2-FB_WINDOW_HEIGHT/2,winLeft=window.screen.width/2-FB_WINDOW_WIDTH/2,options=["top="+winTop,"left="+winLeft,"width="+FB_WINDOW_WIDTH,"height="+FB_WINDOW_HEIGHT,"toolbar=0,status=0"].join(",");window.open(sharerUrl,"sharer",options)}
	});
	var TWITTER_WINDOW_WIDTH=550,TWITTER_WINDOW_HEIGHT=350,shareOnTwitter={};
	$(".p300-twitter-share").on('click',function(e){
		e.preventDefault();var url=$(this).data("url");
		if(url){var sharerUrl="https://twitter.com/share?via=Project300&url="+url,text=$(this).data("text")||"";text&&($(this).data("prepend-cta")&&(text="More on "+text),sharerUrl=sharerUrl+"&text="+text);
		var hashtags=$(this).data("hashtags-param")||"";sharerUrl+=hashtags;var winTop=window.screen.height/2-TWITTER_WINDOW_HEIGHT/2,winLeft=window.screen.width/2-TWITTER_WINDOW_WIDTH/2,options=["top="+winTop,"left="+winLeft,"width="+TWITTER_WINDOW_WIDTH,"height="+TWITTER_WINDOW_HEIGHT,"toolbar=0,status=0"].join(",");window.open(sharerUrl,"sharer",options)}
	});
});

(function(d){
	/* load pinterest */
	var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
	p.type = 'text/javascript';
	p.async = true;
	p.src = '//assets.pinterest.com/js/pinit.js';
	f.parentNode.insertBefore(p, f);
}(document));


/* ============================================
 * generic functions
 * ============================================ */

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}

function calculateBottom(el) {
     return (el.position().top + el.height()) - $(window).height() + 50;
}
