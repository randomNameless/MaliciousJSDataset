// iOS cache buster
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $(window).on('pageshow', function(e) {
        if (e.originalEvent.persisted) {
            window.location.reload();
        }
    });
}
// button rollover
$('img.rollover').hover(function(){
    var e = $(this);
    e.data('originalSrc', e.attr('src'));
    e.attr('src', e.attr('data-rollover'));
  }, function(){
    var e = $(this);
    e.attr('src', e.data('originalSrc'));
  });
  
function HideContent(d) {
    document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
    document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
    if (document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
    else { document.getElementById(d).style.display = "none"; }
}

(function () {
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTriggerscholarships'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('touchmove' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchmove', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();

$(document).ready(function () {
    // $('.bwCustomPageAutoListCategories article .rxbodyfield p').unwrap();
    // $('.bwCustomPageAutoListCategories article .pagetitleh4').each(function () {
    //     $(this).html($(this).html() + " ").append($(this).prev('p'));
    // });
    $('.bwCustomNewsAutoListCategories article .rxbodyfield p').unwrap();
    $('.bwCustomNewsAutoListCategories article .pagetitleh4').each(function () {
        $(this).html($(this).html() + " ").append($(this).prev('p'));
    });
});

function checkWidth(init)
{
    if ($(window).width() < 900) {
        $("#leftsidebar").remove().insertBefore($("#content"));
        $(".right-menu-rich-text .rxbodyfield p").contents().appendTo(".cta-buttons p");
        $("#leftsidebarBottom").remove().appendTo("#openRegion");
        $("#leftsidebarInner").css("display", "none");
        $("#sitemapLinksContainer").css("display", "none");
    }
    else {
        if (!init) {
            $("#leftsidebar").remove().insertAfter($("#content"));
            $("#leftsidebarInner").css("display", "block");
            $("#sitemapLinksContainer").css("display", "block");
        }
    }
}
$(document).ready(function() {
    checkWidth(true);
});
/* Alumni Success */
var ctaText = "";
$(document).ready(function() {
	$('.toggle-link').click(function(){
	  link = $(this);
	  if (link.text() != 'Hide ^') {
		ctaText = link.text();
	  }
		content = $(this).closest('.alumni-success').find('.toggle-content');
		$(content).toggle();
		$('.toggle-content').not(content).hide();
			if ($(content).is(':hidden')) {
				 link.text(ctaText);
			} else {
				 link.text('Hide ^');
			}
	});
});