
// Used for simple text search
function simple_search( query ){
    if (query.trim() == '') {
        document.location = '/reports/latest-reports';
    } else {       
        //find no-of slash in string 
        if(query.replace(/[^\/]/g, "").length >0){
            //replace all "/" with "-slash-"
            if(query.indexOf("/") > -1){ 
                query = query.replace(/\//g, "-slash-");
            }            
        }  
       
        document.location = '/reports/specific_search/' + encodeURI(query.trim());
    }
}
 

/*
adjust scroll position when linking to an anchor (hash)
between pages or within a page
could not fix with CSS alone, quirky behavior seems to be due to the way the sticky header loads or something else in functions.js
*/

function scrollToAnchorLink() {
	var hash = window.location.hash;

	if (hash) {
		var offset = $(hash).offset();

		if (offset) {
			var adjust = 100;
			if ($('body').hasClass('device-sm')) {
				adjust = 60;
			}

			$('html, body').scrollTop(offset.top - adjust);
		}
	}
}

$(window).on('load hashchange', function() {
	setTimeout(scrollToAnchorLink, 25);
});


$(document).ready(function() {
    var screenWidth = window.screen.width;

    if (screenWidth <= 479 && !$('.wrap-header-extras').is(':visible')) {
    	$('#primary-menu').addClass('hidden-header-extras-position-menu');
	}

	/* Carousel */
    // $(function() {
    //     $('.carousel').jcarousel();
    // });

    $('.carousel').slick({
        slidesToShow: 2,
		arrows: false,
        dots: false,
        autoplay: true
	});

    /* Additional email validations */
    $("input#email, input#email_confirm, input#entity_email").on('keyup', function(){
        $(this).val(function(_, v){
            return v.replace(/\s+/g, '').toLowerCase();
        });
    });


    $(document).ready(function() {
        var showChar = 200;
        var charCountWide = showChar + 30;
        var moretext = "Show more";
        var lesstext = "Show less";

        $('.show_more').each(function() {
            var reportPod = $(this);
            var contentPod = reportPod.find('.report_link');
            var content = contentPod.text();
            if(content.length > charCountWide) {
                var shortText = content.substring(0, showChar)+'...';
                reportPod.data('short', shortText);
                reportPod.data('long', content);
                reportPod.data('expanded', false);
                contentPod.html(shortText);
                var cp = contentPod.get(0).outerHTML;
                reportPod.html(cp + '<a class="toggle_expansion" title="Click to expand the title">'+moretext+'</a>');
            }
        });

        $(document).on('click', ".toggle_expansion", function(){
            var reportPod = $(this).parent();
            var contentPod = reportPod.find('.report_link');
            contentPod.html(reportPod.data('short'));
            var cp = contentPod.get(0).outerHTML;
            if (reportPod.data('expanded')) {
                reportPod.html(cp + '<a class="toggle_expansion" title="Click to expand the title">'+moretext+'</a>');
                reportPod.data('expanded', false);
            } else {
                contentPod.html(reportPod.data('long'));
                cp = contentPod.get(0).outerHTML;
                reportPod.html(cp + '<a class="toggle_expansion" title="Click to collapse the title">'+lesstext+'</a>');
                reportPod.data('expanded', true);
                console.log(reportPod.data('expanded'));
            }
            return false;
        });
    });

});