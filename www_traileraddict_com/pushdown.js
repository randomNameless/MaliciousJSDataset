// Pushdown Code
(function($) {
if ($('#pushdown').length) {
	var x = 0;
	var intervalID = setInterval(function () {
		try {
			if($('#pushdown iframe').contents().find('.videoad').length) {
				$('#pushdown').css('height', $('#pushdown iframe').contents().find('.videoad').height());
				$('#pushdown iframe').css('height', $('#pushdown iframe').contents().find('.videoad').height());
				$('#pushdown iframe').css('width', '100%');
			} else {
				$('#pushdown iframe').css('width', '100%');
				$('#pushdown iframe').contents().find('img').width('100%');
				$('#pushdown iframe').contents().find('img').height('auto');
				$('#pushdown iframe').contents().find('body').height($('#pushdown iframe').contents().find('img').height());
				$('#pushdown iframe').height($('#pushdown iframe').contents().find('img').height());
			}
			$('#pushdown').height('auto');
		} catch(err) {
		    clearInterval(refreshIntervalId);
		}

	   if (++x === 14) {
	       window.clearInterval(intervalID);
	   }
	}, 500);

	$(window).resize(function(){
		if($('#pushdown iframe').contents().find('img').length) {
			if($('#pushdown iframe').contents().find('.videoad').length) {
				$('#pushdown').css('height', $('#pushdown iframe').contents().find('.videoad').height());
				$('#pushdown iframe').css('height', $('#pushdown iframe').contents().find('.videoad').height());
			} else {
				$('#pushdown iframe').height($('#pushdown iframe').contents().find('img').height());
			}
		}
	});
}
})(jQuery);