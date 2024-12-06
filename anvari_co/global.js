$(document).ready(function(){
	// Set font size for h1 if the lenght of the URL does not
	// fit in the designated space
    var h1 = $('h1').eq(0),
        h1pw = h1.parent().width(),
        currSize = 0;


    while(h1.width() > h1pw){
        currSize = parseInt(h1.css("font-size"), 10);
        h1.css({fontSize: currSize - 1});
    }

	/*if (h1len >= 24) {
		h1.css({'font-size':20});
	} else if (h1len >= 18) {
		h1.css({'font-size':40});
	} else if (h1len > 11){
		h1.css({'font-size':60});
	}*/

    /*var mainpromoinner = $("#main-promo-inner"),
        mainpromoinnerTop = mainpromoinner.outerHeight() / 2;

    mainpromoinner.css("margin-top", -mainpromoinnerTop);*/

    $("#domain-search").css("padding-right", $("#domain-search-mask").width() + 6);
	
	// Activate Carousel
	$('#carousel .content').jCarouselLite({
		btnNext: "#carousel .next",
		btnPrev: "#carousel .prev"
	});
	
	// Set external link targets
	$('a[href^="http://"]').attr("target", "_blank");
	
	// Set pass-through URL for search box
	/*
	function domain_search() {
		var passthrough = $('#domain-search').val();
		window.location = ('http://www.opportunity.co/register#') + passthrough;
		return false;
	}
	$('#search-form').submit(domain_search);
	$('#search-btn').click(domain_search);
	*/

	// Info Rollovers
	$('.tooltip').mouseenter(function(e){
		$(this).append("<div id='tooltip'></div>");
		this.width = $(this).width();
		$(this).find('#tooltip').css({left:this.width-45});
		$('#tooltip').fadeIn(400);
	}).mouseout(function(e){
		$('#tooltip').fadeOut(400);
		$('#tooltip').remove();
	}).click(function(e){
		// open modal window
		var curDomain = $(this).find('img').attr('alt');
		var thisTop = ($(this).offset().top)-480;
		if ($('#monitization').length){
			thisTop = ($(this).offset().top) - 675;
		}
		$('#tooltip').fadeOut(100);
		$('#tooltip').remove();
		$('#modal').fadeIn(100);
		$('#modal').css({'top':thisTop, 'z-index':9999});
		setTimeout(function(){
			$('#modal p span').html(curDomain);
			$('#modal .notify input:first').focus();
		}, 200)
	});
	
	// Close modal
	$('.close').click(function(){
		$('#modal').fadeOut(400);
	});
	
	// Notification Submit
	$("#main-submit").click(function() {
		// validate and process form
		var fname = $("input#fname").val();
			if (fname == "" || fname.length < 2) {
			$("label#fname_error").show();
			$("input#fname").focus();
			return false;
		} else{
			$('label#fname_error').hide();
		}
		var lname = $("input#lname").val();
		var email = $("input#email").val();
			if(email == ""){
				$('label#email_error').show();
				$('input#email').focus();
				return false;
			}
		if($('input#updates').is(':checked')){
			var updates = true;
		} else {
			var updates = false;
		}
		var dataString = 'dom=' + $('#dom').val() + '&fname='+ fname + '&lname=' + lname + '&email=' + email + '&updates=' + updates;
		
		$.ajax({
			type: "POST",
			url: "bin/process.php",
			data: dataString,
			cache: false,
			error: function(req) {
				alert(req.responseText);
			},
			success: function(html) {
				if (html==1){
					$('#notification').hide();
					$('#auction .success').fadeIn('fast');
				};
				if (html==0){
					$('#notification').hide();
					$('#auction .fail').fadeIn('slow');
				};
				if (html==2){
					$('#email_error').show();
					$('#email').focus();
				}
			}
		});
	return false;
	});
	
	// Pop-up notification
	// Notification Submit
	$("#pop-submit").click(function() {
		// validate and process form
		var fname = $("input#pop-fname").val();
			if (fname == "" || fname.length < 2) {
			$("label#pop-fname_error").show();
			$("input#pop-fname").focus();
			return false;
		} else{
			$('label#pop-fname_error').hide();
		}
		var lname = $("input#pop-lname").val();
		var email = $("input#pop-email").val();
			if(email == ""){
				$('label#pop-email_error').show();
				$('input#pop-email').focus();
				return false;
			}
		if($('input#pop-updates').is(':checked')){
			var updates = true;
		} else {
			var updates = false;
		}
		var dataString = 'fname='+ fname + '&lname=' + lname + '&email=' + email + '&updates=' + updates;
		//alert (dataString);return false;
		
		$.ajax({
			type: "POST",
			url: "bin/pop-process.php",
			data: dataString,
			cache: false,
			success: function(html) {
				if (html==1){
					$('#modal-form').hide();
					$('#modal .success').fadeIn('fast');
				};
				if (html==0){
					$('#modal-form').hide();
					$('#modal fail').fadeIn('slow');
				};
				if (html==2){
					$('#pop-email_error').show();
					$('#pop-email').focus();
				}
			}
		});
	return false;
	});
	
	// Accordion
	$('#recent-domains h3').click(function() {
		$(this).next().toggle();
		$(this).toggleClass('active');
		return false;
	}).next();

	$('#alt-domains-section a').click(function() {
		var href = $(this).attr('href');
		var i = new Image();
		i.src = 'click.php?d=' + dom_key + '&h=' + encodeURIComponent(href) + '&r=' + Math.random();
		return true;
	});
	
	/*ajax_spinner = function() {
		var d = cur_domain || $('#dom').val();
		$('#more-domains-spinner').html('<img src=_images/loading.gif>');
		$.ajax({
			url: 'spinner.php',
			data: { 'rand':1, 'domain': d, 'register_url': register_url },
			error: function(_a, error, _b) {
				$('#more-domains-spinner').html('Error: ' + error);
			},
			success: function(data) {
				$('#more-domains-spinner').html(data);
			}
		});
		return false;
	}
	setTimeout(ajax_spinner, 100);*/
});
