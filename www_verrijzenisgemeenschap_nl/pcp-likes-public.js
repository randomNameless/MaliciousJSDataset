! function ($) {
	"use strict";
	$(document).on("click", ".pcpl-wrapper .pcpl-button", function () {
		var button = $(this),
			post_id = button.attr("data-post-id"),
			security = button.attr("data-nonce"),
			iscomment = button.attr("data-iscomment"),
			allbuttons, loader = (allbuttons = $("1" === iscomment ? ".pcpl-comment-button-" + post_id : ".pcpl-button-" + post_id)).next("#pcpl-loader");
		return "" !== post_id && $.ajax({
			type: "POST",
			url: simpleLikes.ajaxurl,
			data: {
				action: "process_pcp_like",
				post_id: post_id,
				nonce: security,
				is_comment: iscomment
			},
			beforeSend: function () {
				loader.html('&nbsp;<div class="loader">Loading...</div>')
			},
			error: function (response) {
				console.log(response);
			},
			success: function (response) {
				var icon = response.icon,
					count = response.count;
				if (allbuttons.html(icon + count), "unliked" === response.status) {
					var like_text = simpleLikes.like;
					allbuttons.prop("title", like_text), allbuttons.removeClass("liked")
				} else {
					var unlike_text = simpleLikes.unlike;
					allbuttons.prop("title", unlike_text), allbuttons.addClass("liked")
				}
				loader.empty()
			}
		}), !1
	})
}(jQuery);