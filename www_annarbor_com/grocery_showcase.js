/*
	this library is a replacement for awkward showcase jQuery plugin
	for backwards compatibility it expects the same markup as awkward showcase

	Markup example for jQuery('#selector').groceryShowcase();

	<div id="selector">
		<!-- Each child .showcase-slide in #selector represents a slide -->
		<div class="showcase-slide">
			<!-- Put the slide content in a div with the class .showcase-content -->
			<div class="showcase-content">
				<!-- If the slide contains multiple elements you should wrap them in a div with the class .showcase-content-wrapper. -->
				<div class="showcase-content-wrapper">
					Content...
				</div>
			</div>
		</div>
		<div class="showcase-slide">
			<div class="showcase-content">
				<div class="showcase-content-wrapper">
					Content...
				</div>
			</div>
		</div>
	</div>
 */

(function (jQ) {
	jQ.fn.groceryShowcase = function (options) {
		var settings = jQ.extend({
			content_width: 378,
			content_height: 202,
			transition_speed: 500,
			interval: 4500,
			auto: true,
			pauseonover: true,
			keybord_keys: true,
			arrows: true,
			buttons: true
		}, options || {});

		return this.each(function (i, ele) {
			var jQshowcase, jQslides, jQshowcaseContainer, autoCancelled, active, showSlide, intervalRef, jQprev, jQnext, jQbuttonWrapper, jQbuttons, bullet;
			// setup styling, hierarchy and jQuery objects
			jQshowcase = jQ(ele).css({
				width: settings.content_width + 'px'
			});
			jQslides = jQshowcase.
				find('> .showcase-slide > .showcase-content').
				unwrap().
				wrap(jQ('<div>').addClass('showcase-content')).
				parent().
				each(function (i, ele) {
					jQ(ele).
						attr('id', 'showcase-content-' + i).
						css({
							overflow: 'hidden',
							position: 'absolute',
							top: '0px',
							left: i * settings.content_width + 'px',
							width: settings.content_width + 'px',
							height: settings.content_height + 'px'
						});
				});
			jQshowcaseContainer = jQ('<div>').
				addClass('showcase-content-container').
				css({
					overflow: 'hidden',
					position: 'relative',
					height: settings.content_height + 'px'
				}).
				append(jQslides);

			jQshowcase.append(jQshowcaseContainer);

			// utility state
			autoCancelled = !settings.auto;
			active = 0;
			showSlide = function (which) { // which is 'prev', 'next' or slide index
				var show, sign, op;
				if (which === 'prev') {
					show = (active + jQslides.length - 1) % jQslides.length;
					sign = '-';
					op = '+=';
				} else if (which === 'next') {
					show = (active + 1) % jQslides.length;
					sign = '';
					op = '-=';
				} else {
					show = which;
					sign = which < active ? '-' : '';
					op = which < active ? '+=' : '-=';
				}
				if (active !== show) {
					active = show;
					jQbuttons.removeClass('active').eq(active).addClass('active');
					jQshowcaseContainer.
						append(
							jQslides.
								stop().
								eq(active).
								css({left: sign + settings.content_width + 'px'})).
						children().
						animate({left: op + settings.content_width}, settings.transition_speed);
				}
			};

			// implement options
			if (settings.auto && jQslides.length) {
				intervalRef = setInterval(function () {showSlide('next');}, settings.interval);
				if (settings.pauseonover) {
					jQshowcase.one('mouseover', function pauseAuto(e) { // recursive
						if (!autoCancelled) {
							clearInterval(intervalRef);
							jQshowcase.one('mouseleave', function (e) {
								if (!autoCancelled) {
									intervalRef = setInterval(function () {showSlide('next');}, settings.interval);
									jQshowcase.one('mouseenter', pauseAuto);
								}
							});
						}
					});
				}
			}

			if (settings.keybord_keys && jQslides.length) {
				jQuery(document).keydown(function (e) {
					if (e.which === 37 || e.which === 39) {
						if (!autoCancelled) {
							clearInterval(intervalRef);
							autoCancelled = true;
						}
						showSlide(e.which === 37 ? 'prev' : 'next');
					}
				});
			}

			if (settings.arrows && jQslides.length) {
				jQ('<div>').addClass('showcase-arrow-next').data('which', 'next').
					add(
						jQ('<div>').addClass('showcase-arrow-previous').data('which', 'prev')
					).
					prependTo(jQshowcase).
					click(function (e) {
						if (!autoCancelled) {
							clearInterval(intervalRef);
							autoCancelled = true;
						}
						showSlide(jQ(this).data('which'));
						e.preventDefault();
					});
			}


			if (settings.buttons && jQslides.length) {
				bullet = String.fromCharCode(8226);
				jQbuttonWrapper = jQ('<div>').addClass('showcase-button-wrapper').css({clear: 'both'});
				jQbuttons = jQ();
				jQslides.each(function (i) {
					jQbuttons = jQbuttons.add(jQ('<span>').attr('id', 'showcase-navigation-button-' + i).text(bullet));
					if (i === 0) {
						jQbuttons.addClass('active');
					}
				});
				jQshowcase.append(jQbuttonWrapper.append(jQbuttons));

				jQbuttons.click(function (e) {
					if (!autoCancelled) {
						clearInterval(intervalRef);
						autoCancelled = true;
					}
					showSlide(jQbuttons.removeClass('active').index(jQ(this).addClass('active')));
					e.preventDefault();
				});
			}
		});
	};
}(jQuery));
