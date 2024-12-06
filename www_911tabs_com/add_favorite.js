$(document).ready(function() {
	var $favBtn = $('.add-to-fav');

	$favBtn.click(function() {
		var band = $favBtn.data('band');

		$favBtn.fadeOut(0);

		$.ajax({
			url: '/ajax/add_to_favorites.php?'+band,
			dataType: 'json',
			success: function(l) {
				if ((l.status == 'success') || (l.status == 'already'))	{
					$favBtn.removeClass('add-to-fav').addClass('added-to-fav').html('<span></span>Added to favorites');

				} else if (l.status == 'signin') {
					$('#signin').click();
				}
			},
			complete: function() {
				$favBtn.fadeIn(0);
			}
		});
	});
});