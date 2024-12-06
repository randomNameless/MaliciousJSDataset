jQuery(function ($) {

	"use strict";

	window.BhRatings = {
		init: function () {
			this.events();
		},
		events: function () {
			$(document).ready(this.init_rating);
		},
		do_rating: function ( rating_value, args ) {

			var data = {
				action : 'bh_ratings_action',
				post_id : args.el.data('post'),
				type : args.el.data('type'),
				nonce : args.el.data('nonce'),
				value : rating_value
			};

			$.post( ajaxurl, data, function( res ){
				res = res.trim();
				$(args.el).closest('.bh-ratings').parent().html( res );
			});
		},
		init_rating: function (e) {
			var ratings_els = jQuery(".bh-ratings-hidden");
			if ( ratings_els.length ) {
				ratings_els.each(function (i) {
					var extra_args = {
						el: jQuery(this),
						type: jQuery(this).data('type')
					};
					jQuery(this).webwidget_rating_simple({
						rating_star_length: '10',
						rating_initial_value: jQuery(this).val(),
						rating_function_name: BhRatings.do_rating, //this is function name for click,
						rating_extra_args: extra_args
					});
				});
			}
		},
		manual_rating : function( rating_value, el ){
			var args = {
				el: jQuery(el),
				type: jQuery(el).data('type')
			};
			this.do_rating( rating_value, args );
		}
	};

	BhRatings.init();

});