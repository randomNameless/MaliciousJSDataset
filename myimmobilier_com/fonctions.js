/********************************************************************
	Auteurs : Olivier et Philippe Brouckaert
	Site de l'auteur : www.i-services.com
	Nous �crire : contact@i-services.net
*********************************************************************/

/* Fonctions jQuery pour les formulaires */

$.fn.insertTagsIntoTextarea = function(openTag, closeTag) {
	var len = this.val().length;
	var start = this[0].selectionStart;
	var end = this[0].selectionEnd;
	var selectedText = this.val().substring(start, end);
	var replacement = openTag + selectedText + closeTag;
	this.val(this.val().substring(0, start) + replacement + this.val().substring(end, len));

	var caret = (replacement.length - closeTag.length) + start;

	setCaretPosition(this[0], caret);
};

$.fn.insertStringIntoTextarea = function(string) {
	var len = this.val().length;
	var start = this[0].selectionStart;
	var end = this[0].selectionEnd;
	var selectedText = this.val().substring(start, end);
	var replacement = selectedText + string;
	this.val(this.val().substring(0, start) + replacement + this.val().substring(end, len));

	var caret = replacement.length + start;

	setCaretPosition(this[0], caret);
};

$.fn.hasAttr = function(name) {
   return this.attr(name) !== undefined;
};

$.fn.preload_img = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$.expr[":"].i_contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

window.closeModalFromIframe = function(iframe){
    $('#' + iframe).modal('hide');
};

$(function() {
	$("#is-page acronym[title]").before('<i class="fa fa-book" aria-hidden="true"></i> ');

	$("a[href=#]").click(function(e) {
		e.preventDefault();
	});

	$("[data-expand]").click(function(e) {
		if($(this).is('a'))
		{
			e.preventDefault();
		}

		$('#derniers_membres').slideToggle();
	});

	$('[data-toggle="popover"]').popover({html: true});

	$('#_checkAll').click(function() {
		var form = $(this).parents('form');

		if($(this).is(":checked"))
		{
			$("input:checkbox[name^=idChecked]:not(:disabled)", form).prop("checked", true);
		}
		else
		{
			$("input:checkbox[name^=idChecked]:not(:disabled)", form).prop("checked", false);
		}
	});

	$('.is-spreadsheet [id^=idChecked_]').click(function() {
		var form = $('#_checkAll').parents('form');

		$('#_checkAll').prop("checked", false);
	});

	$('p.alert button.close').click(function() {
		$(this).parents('p.alert').remove();
	});

	$('a.target-blank:not([href=#])').click(function(e) {
		e.preventDefault();

		window.open($(this).attr('href'));
	});

	$('.jq-open-links-in-new-window a:not([target])').attr('target', 'blank');

	$('a.fetch-anchor').click(function(e) {
        e.preventDefault();
		var anchor = $(this).attr("href");

		if($(anchor).length)
		{
			$('html, body').animate({scrollTop:$(anchor).offset().top}, 'slow');
		}
	});

    if($('.page-header .navbar').length)
	{
		var originOffsetTop = $('.page-header .navbar').offset().top + $('.page-header .navbar').height();

		if($(document).height() > $(window).height() + originOffsetTop + 100)
		{
			var navbarPos = $('.page-header .navbar').hasClass('navbar-top') ? 'top' : 'bottom';

			$(window).scroll(function() {
				if($(this).scrollTop() >= originOffsetTop)
				{
					$('.page-header .navbar:not(.navbar-fixed-top)').removeClass('navbar-top').addClass('navbar-fixed-top navbar-inverse');
				}
				else
				{
					$('.page-header .navbar').removeClass('navbar-fixed-top navbar-inverse');

					if(navbarPos == 'top')
					{
						$('.page-header .navbar').addClass('navbar-top');
					}
				}
			});

			if($(window).scrollTop() >= originOffsetTop)
			{
				$('.page-header .navbar:not(.navbar-fixed-top)').removeClass('navbar-top').addClass('navbar-fixed-top navbar-inverse');
			}
			else
			{
				$('.page-header .navbar').removeClass('navbar-fixed-top navbar-inverse');

				if(navbarPos == 'top')
				{
					$('.page-header .navbar').addClass('navbar-top');
				}
			}
		}
	}

    $(window).scroll(function() {
		if($(this).scrollTop() > 250)
		{
			$('.back-to-top').fadeIn(300);
		}
		else
		{
			$('.back-to-top').fadeOut(300);
		}
	});

	if($(window).scrollTop() > 250)
	{
		$('.back-to-top').show();
	}
	else
	{
		$('.back-to-top').hide();
	}

	$('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

	$('.is-turn-module-off .fa-toggle-on').hover(function() {
		$(this).toggleClass('fa-toggle-off fa-toggle-on');
	});
});