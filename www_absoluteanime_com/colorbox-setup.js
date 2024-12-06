var colorBoxOpts = {transition:'elastic', maxHeight:'99%', maxWidth:'99%', title:make_title, href:colorbox_src, current: '{current}/{total}',
	// The following stops the page from scrolling behind the colorbox
	fixed: true,
	onOpen: function() {
		var ycoord = $(window).scrollTop();
		$('#colorbox').data('ycoord',ycoord);
		ycoord = ycoord * -1;
		$('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord + 'px');
	},
	onClosed: function() {
		$('body').css('position','').css('left','auto').css('right','auto').css('top','auto');
		$(window).scrollTop($('#colorbox').data('ycoord'));
	}
};

function strip_size(line) {
	line = line || '';
	return line.replace(/\([0-9]+\xD7[0-9]+\)/, '');
}

function make_title() {
	var el = this;
	var show_xxx = window.show_adult_content || false;
	var img_obj = $(el).find('img').eq(0);
	var img_class = img_obj.attr('class') || '';
	var caption = (el.title || strip_size(img_obj.attr('title')) || strip_size(img_obj.attr('alt')) || $.trim($(el).text()));
	if (!caption) {
		var page_title = $('title').html() || '';
		var page_titles = page_title.split('•');
		caption = page_titles[0].trim() + (page_titles[1] ? ' (' + page_titles[1].trim() + ')' : '');
	}
	if (!show_xxx && img_class.indexOf('warn-') >= 0) caption = '[image hidden]';
	return caption;
}

function colorbox_src() {
	var $obj = $(this);
	var show_xxx = window.show_adult_content || false;
	var $imgObj = $obj.prop('img') ? $obj : $obj.find('img').eq(0);
	var obscuredSrc = $imgObj.data('obscured-src') || '/!bin/hidden.png';
	var src = (!show_xxx && $obj.has('[class*="warn-"]').length) ? obscuredSrc : ($obj.attr('src') || $obj.attr('href'));
	return src;
}

function openImg(obj, w, h)
{
	var rel = $(obj).attr('rel');
	if (!$('#colorbox').length || ((!rel || rel.indexOf('lightbox') < 0) && !$(obj).data('lightbox'))) {
		$(obj).colorbox({open:true, transition:'elastic', maxHeight:'99%', maxWidth:'99%', title:make_title, href:colorbox_src});
	}
	return false;
}

function colorboxRegister($obj) {
	$obj = $obj || $('a[data-lightbox], [href*=".jpg"], [href*=".gif"], [href*=".png"]');
	$('a[rel*="lightbox"]').colorbox(colorBoxOpts);
	$obj.each(function() {
		$(this).colorbox($.extend({}, colorBoxOpts, {rel:$(this).data('lightbox')}));
	});
}
$(document).on('cbox_open', function(){
	$('iframe[src="javascript:\'\'"]').remove();	// so bottom part of screen will be clickable again
	$('#ie_holder').css('position','static'); 		// so IE will vertical center lightbox
	$('#adUnit').remove();
	$('.flash-area,object').each(function() {
		$(this).data('colorbox', $(this).css('visibility'));
		$(this).css('visibility', 'hidden');
	});
});
$(document).on('cbox_closed', function(){
	$('.flash-area,object').each(function() {
		$(this).css('visibility', $(this).data('colorbox'));
	});
});

$(document).ready(function(){
	colorboxRegister();
});
