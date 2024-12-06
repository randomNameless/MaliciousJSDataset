jQuery(function (jQ) {
	var jQGallery = jQ('div.photogallery'),
		jQExpand = jQ('div.photogallery_footer p.expand_contract'),
		adIsRendered = jQ('div.photogallery .photogallery_advertisement').children().length > 1,
		preloadFullsizeImage = function (jQThumbnail) {
			var jQSpanWithUrl,
				id,
				selector = jQThumbnail.data('fullsizeSelector'),
				fullSizedUrl;
			if (selector) { // if selector is present, image has been preloaded
				return selector;
			}
			jQSpanWithUrl = jQThumbnail.children('span.full_sized_url');
			id = jQSpanWithUrl.attr('id') + '_colorbox';
			selector = '#' + id;
			fullSizedUrl = jQSpanWithUrl.text();
			jQThumbnail.data('fullsizeSelector', selector);

			jQ('<div id="' + id + '" class="fullsize_colorbox"></div>').appendTo('#loaded_images');
			jQ('<img src="' + fullSizedUrl + '" alt="" />').appendTo(selector);
			jQThumbnail.children('span.caption_info').clone().appendTo(selector);
			return selector;
		},
		getFullsizeSelector = preloadFullsizeImage, // alias

		getAllThumbnails = (function () {
			var jQThumbnails; // wait to set until first invocation, some elements not create yet
			return function () {
				if (!jQThumbnails) {
					jQThumbnails = jQ('div.gallery_thumbnails li');
				}
				return jQThumbnails;
			};
		}()),

		getVisibleThumbnails = (function () {
			var jQVisibleThumbnails; // wait to set until first invocation, some elements not create yet
			return function () {
				if (!jQVisibleThumbnails) {
					jQVisibleThumbnails = jQ('div.gallery_thumbnails li:visible');
				}
				return jQVisibleThumbnails;
			};
		}()),

		selectNextPhoto = function (offset) {
			var jQThumbnails = getAllThumbnails();
			return function (event) {
				var newIndex = (jQThumbnails.filter('.active:last').index() + offset) % jQThumbnails.length,
					jQThumbnail =  jQThumbnails.eq(newIndex);
				if (rowOfThumbnail(jQThumbnail) > 1 && !jQExpand.hasClass('expanded')) {
					jQExpand.children('a').click();
				}
				updateSelectedPhoto(jQThumbnail);

				return false;
			};
		},

		rowOfThumbnail = function (jQThumbnail) {
			var jQThumbnails = getVisibleThumbnails(),
				index = jQThumbnails.index(jQThumbnail);
			return Math.floor(index / 7) + 1;
		},

		showAdvertisement = function () {
			jQGallery.find('.current_photo > a img, .current_photo .pg_caption, .gallery_thumbnails .active, .photogallery_advertisement, #advertisement_thumbnail').toggleClass('active');
		},

		showFinalSlide = function () {
			jQGallery.find('.final_slide, .gallery_thumbnails li:last').addClass('active');
		},

		updateSelectedPhoto = function (jQThumbnail) {
			var url, fullSizedUrl, jQCaption, jQAnchor = jQThumbnail.children('a');
			if (jQAnchor.hasClass('advertisement_thumbnail')) {
				showAdvertisement(jQAnchor.parents('.photogallery'));
			} else if (jQAnchor.hasClass('more_galleries_thumbnail')) {
				showFinalSlide(jQAnchor.parents('.photogallery'));
			} else {
				url = jQAnchor.attr('href');
				fullSizedUrl = jQAnchor.children('span.full_sized_url').text();
				jQCaption = jQAnchor.children('span.caption_info').clone();
				jQGallery.find('.current_photo > a').attr('href', fullSizedUrl).children('img').attr('src', url).addClass('active');
				jQGallery.find('.pg_caption').addClass('active').children('h5').html(jQCaption);
				jQGallery.find('.photogallery_advertisement, .final_slide').removeClass('active');
				jQThumbnail.addClass('active').siblings('li').removeClass('active');

				preloadFullsizeImage(jQAnchor);
			}
		};

	// create a container for the preloaded fullsize images
	jQ('<div id="loaded_images" />').css({position: 'absolute', left: -10000, height: 0, overflow: 'hidden'}).appendTo('body');

	// create a thumbnail for the advertisement
	if (adIsRendered) {
		jQ('<li id="advertisement_thumbnail" style="display: none"></li>').
			append(jQ('<a class="advertisement_thumbnail"><span class="full_sized_url" /></a>').
			data('fullsizeSelector', 'div.photogallery_advertisement a')).
			insertAfter('div.gallery_thumbnails li:eq(3)');
	}

	// create a thumbnail for the last slide (more galleries)
	jQ('<li style="display: none"></li>').
		append(jQ('<a class="more_galleries_thumbnail"><span class="full_sized_url" /></a>').
		data('fullsizeSelector', 'div.final_slide')).
		appendTo('div.gallery_thumbnails ul');

	// preload the first fullsize image
	preloadFullsizeImage(jQ('.gallery_thumbnails li.active a'));

	// set up colorbox for the fullsize images
	jQ('.full_sized_url').attr('rel', 'colorbox_fullsize').colorbox({
		rel: 'colorbox_fullsize',
		scrolling: false,
		inline: true,
		href: function () {
			// colorbox preloading feature calls the href function
			// so this can hook into colorbox preloading
			// returns the selector of the element to display
			return getFullsizeSelector(jQ(this).parent());
		},
		innerWidth: function () {
			var selector = getFullsizeSelector(jQ(this).parent());
			return jQ(selector).children('img').outerWidth(true);
		},
		current: (function () {
			// these vars are chached with the IIFE
			var adSpan = jQ('a.advertisement_thumbnail span').get(0),
				moreGalleries = jQ('a.more_galleries_thumbnail span').get(0),
				jQColorboxed = jQ('.full_sized_url'),
				total = adIsRendered ? jQColorboxed.length - 2 : jQColorboxed.length - 1;
			return function () {
					var current;
					if (this === adSpan || this === moreGalleries) {
						return '';
					}
					current = jQColorboxed.index(this);
					current = !adIsRendered || current <= 3 ? current + 1 : current;
					return 'Photo ' + current + ' of ' + total;
				};
		}())
	});

	// preload the display images
	(function () {
		var images = [],
			loadNext = function () {
				var url;
				if (images.length) {
					url = images.pop();
					jQ('<img/>').load(loadNext).attr('src', url);
				}
			};
		jQ('div.gallery_thumbnails a').not('.advertisement_thumbnail, .more_galleries_thumbnail').each(function () {
			images.push(jQ(this).attr('href'));
		});
		images.reverse(); // reverse to pop them in the correct order

		// preload 4 at a time (pseudo parallel)
		loadNext();
		loadNext();
		loadNext();
		loadNext();
	}());

	jQ('div.current_photo > a, div.current_photo .full_sized_icon a').click(function (e) {
		// call the click event for the colorbox span to activate colorbox
		var index = jQ('.gallery_thumbnails li.active').index();
		jQ('.full_sized_url').eq(index).click();
		return false;
	});

	jQ('div.gallery_thumbnails a').click(function (e) {
		var jQThumbnail, galleryOffset;
		// colorbox span's click event bubbles up to this anchor's event
		// if it is a colorbox span's click event, can't return false
		// colorbox uses jQuery.live which requires bubbling
		if (jQ(e.target).attr('rel') !== 'colorbox_fullsize') {
			jQThumbnail = jQ(this).parent();
			updateSelectedPhoto(jQThumbnail);
			// if the thumbnail is after the 3rd row, scroll up to the photo
			if (rowOfThumbnail(jQThumbnail) > 3) {
				galleryOffset = jQGallery.offset();
				if (galleryOffset) { 
					jQ('html, body').animate({'scrollTop': galleryOffset.top});
				}
			}
			return false;
		}
		e.preventDefault();
	});

	jQ('ul.pg_controls li.previous a').click(selectNextPhoto(-1));

	jQ('ul.pg_controls li.next a').click(selectNextPhoto(1));

	jQ('p.expand_contract a').click(function (e) {
		var jQVisibleThumbnails = getVisibleThumbnails(),
			height = jQVisibleThumbnails.outerHeight(true), // gets height of first one
			rows = Math.ceil(jQVisibleThumbnails.length / 7);
		if (jQExpand.hasClass('expanded')) {
			jQExpand.removeClass('expanded');
			jQVisibleThumbnails.parent().animate({height: height});
			jQ(this).html('See All Thumbnails');
		} else {
			jQExpand.addClass('expanded');
			jQVisibleThumbnails.parent().animate({height: height * rows});
			jQ(this).html('Close Thumbnails');
		}
		return false;
	});
});
