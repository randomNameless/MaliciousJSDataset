require.config({
	"paths": {
		"ace": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/ace-builds/src-min-noconflict/ace",
		"addthis": "//s7.addthis.com/js/300/addthis_widget.js#async=1",
		"d3": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/d3/d3.min",
		"dlmenu_1.0.1": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/dlmenu/public/js/jquery.dlmenu",
		"nvd3": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/nvd3/nv.d3.min",
		"async": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/async/dist/async.min",
		"extend": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/extend/public/index",
		"flowly": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/flowly/src/index",
		"jquery": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/jquery-2.2.4/dist/jquery.min",
		"jqueryui": "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min",
		"jqueryui_i18n": "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/i18n/jquery-ui-i18n.min",
		"jqueryuit": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/touch-punch/public/jquery.ui.touch-punch.min",
		"foundation": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/foundation-5.2.1/js/foundation.min",
		"foundation_5.2.1": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/foundation-5.2.1/js/foundation.min",
		"foundation_5.5.0": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/foundation-5.5.0/js/foundation.min",
		"lodash": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/lodash/lodash.min",
		"moment": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/moment/min/moment.min",
		"moment-timezone": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/moment-timezone/builds/moment-timezone.min",
		"moment-timezone-with-data": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/moment-timezone/builds/moment-timezone-with-data.min",
		"numeral": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/numeral/min/numeral.min",
		"jsvalidator": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/jsvalidator/dist/index.min",
		"domReady": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/requirejs/public/plugins/domReady",
		"text": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/requirejs/public/plugins/text",
		"select2": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/select2/public/select2.min",
		"ckeditor": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/ckeditor/public/core/ckeditor",
		"ckeditor_teaser": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/ckeditor/public/plugins/teaser/plugin",
		"ckeditor_linklookup": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/ckeditor/public/plugins/linklookup/plugin",
		"ckeditor_link_anchor": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/ckeditor/public/plugins/link_anchor/plugin",
		"ckeditor_custom": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/ckeditor/public/custom",
		"goatee": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/goatee/index",
		"sv_goatee": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/goatee/public/goatee_loader",
		"chai": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/chai/chai",
		"mocha": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/mocha/mocha",
		"cloudinary": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/cloudinaryLib/public/core/jquery.cloudinary",
		"qs": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/qs/dist/qs",
		"he": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/he/he",
		"es6-promise": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/es6-promise/dist/es6-promise.min",
		"entities": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/entities/public/index",
		"assert": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/assert/public/assert",
		"util-browser": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/util-browser/index.min",
		"url-browser-require": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/url-browser-require/index.min",
		"sv_validator": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/validator/public/sv_validator",
		"sv_clientLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/clientLib/public/sv_clientLib",
		"sv_svslider": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/svslider/public/svslider",
		"sv_svtabs": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/svtabs/public/js/svtabs",
		"sv_tabs": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/tabs/public/index",
		"slick": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/slick-carousel-1.3.11/slick/slick.min",
		"slick_1.5.0": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/slick-carousel-1.5.0/slick/slick.min",
		"slick_1.5.8": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/slick-carousel-1.5.8/slick/slick.min",
		"slick_1.8.0": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/slick-carousel-1.8.0/slick/slick.min",
		"geodist": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/geodist/public/geodist",
		"sv_geolocationLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/geolocationLib/public/index",
		"sinon": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/sinon/lib/sinon",
		"typecaster": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/typecaster/index",
		"sv_Pager": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/pager/public/index",
		"sv_googleMapsLoader": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mapLib/public/googleMapsLoader",
		"sv_GoogleMap": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mapLib/public/GoogleMap",
		"sv_devnull": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/devnull/public/devnull",
		"sv_stringLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/stringLib/public/index",
		"sv_wookmark": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/wookmark/public/js/jquery.wookmark",
		"sv_clientMoment": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/siteLib/public/js/clientMoment",
		"sv_crmLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/crmLib/public/index",
		"sv_load": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/siteLib/public/js/load",
		"sv_delay": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/siteLib/public/js/delay",
		"sv_miscLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/miscLib/public/index",
		"sv_mathLib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mathLib/public/index",
		"spectrum": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/spectrum-colorpicker/spectrum",
		"leaflet": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/leaflet/dist/leaflet",
		"vue": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/vue/dist/vue.min",
		"sv_dtnClient": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/@simpleview/dtn-client/dist/index.min",
		"mochalib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/@simpleview/mochalib/index",
		"sv_siteSlick": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/slick-carousel-1.8.0/slick/slick.min",
		"plugins_collections_custom_collection_helper": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_collection_helper",
		"plugins_collections_custom_collection_helper_map": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_collection_helper_map",
		"plugins_collections_custom_faqs": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_faqs",
		"plugins_collections_custom_collection_default_package": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_collection_default_package",
		"plugins_collections_custom_collection_default_slider_package": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_collection_default_slider_package",
		"plugins_collections_custom_hero_preview_slideshow": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/virtuals/js/custom_hero_preview_slideshow",
		"plugins_common_custom_scrollmagic": "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min",
		"plugins_common_custom_magnific": "//cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min",
		"plugins_common_custom_resize_observer": "/includes/public/js/resize_observer",
		"plugins_common_custom_map": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_map",
		"plugins_common_custom_glidejs": "https://unpkg.com/@glidejs/glide@3.4.1/dist/glide.min",
		"plugins_common_custom_layoutjs": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_layoutjs",
		"plugins_common_custom_countdown_clock": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_countdown_clock",
		"plugins_common_custom_detail": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_detail",
		"plugins_common_custom_detail/detail_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_detail/detail_template",
		"plugins_common_custom_detail/media_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_detail/media_template",
		"plugins_common_custom_detail/drawer_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_detail/drawer_template",
		"plugins_common_custom_detail/whats_nearby": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_detail/whats_nearby",
		"plugins_common_custom_detail/whats_nearby_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_detail/whats_nearby_template",
		"plugins_common_custom_detail/vue-add-to-calendar": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_detail/vue-add-to-calendar",
		"plugins_common_custom_li_items": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_li_items",
		"plugins_common_custom_tripbuilder_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_tripbuilder_component",
		"plugins_common_custom_yelp_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_yelp_component",
		"plugins_common_custom_tripadvisor_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_tripadvisor_component",
		"plugins_common_custom_vue_airbnb_style_datepicker": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_vue_airbnb_style_datepicker",
		"plugins_common_custom_yelp_snippet_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_yelp_snippet_template",
		"plugins_common_custom_tripadvisor_snippet_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_tripadvisor_snippet_template",
		"plugins_common_custom_layoutjs/main_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/main_template",
		"plugins_common_custom_layoutjs/item_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/item_template",
		"plugins_common_custom_layoutjs/convention_item_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/convention_item_template",
		"plugins_common_custom_layoutjs/wraplink_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/wraplink_template",
		"plugins_common_custom_layoutjs/map_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/map_template",
		"plugins_common_custom_layoutjs/info_window_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/info_window_template",
		"plugins_common_custom_layoutjs/views_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/views_template",
		"plugins_common_custom_layoutjs/sorts_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/sorts_template",
		"plugins_common_custom_layoutjs/pager_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/pager_template",
		"plugins_common_custom_layoutjs/filter_checkbox_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_checkbox_template",
		"plugins_common_custom_layoutjs/filter_twostage_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_twostage_template",
		"plugins_common_custom_layoutjs/filter_select_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_select_template",
		"plugins_common_custom_layoutjs/filter_keyword_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_keyword_template",
		"plugins_common_custom_layoutjs/filter_text_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_text_template",
		"plugins_common_custom_layoutjs/filter_daterange_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_daterange_template",
		"plugins_common_custom_layoutjs/filter_number_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_number_template",
		"plugins_common_custom_layoutjs/filter_toggle_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_toggle_template",
		"plugins_common_custom_layoutjs/filter_date_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/filter_date_template",
		"plugins_common_custom_layoutjs/product_search_form_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/product_search_form_template",
		"plugins_common_custom_layoutjs/click_to_compare_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_layoutjs/click_to_compare_component",
		"plugins_common_custom_layoutjs/click_to_compare_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/click_to_compare_template",
		"plugins_common_custom_layoutjs/download": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_layoutjs/download",
		"plugins_common_custom_layoutjs/download_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_layoutjs/download_template",
		"plugins_common_custom_tripbuilder_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_tripbuilder_template",
		"plugins_common_custom_daterange": "/includes/public/js/jquery-date-range-picker/dist/jquery.daterangepicker.min",
		"plugins_common_custom_quickview/quickview": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/quickview",
		"plugins_common_custom_quickview/site_quickview": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/site_quickview",
		"plugins_common_custom_quickview/site_quickview_config": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/site_quickview_config",
		"plugins_common_custom_quickview/button": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_quickview/button",
		"plugins_common_custom_quickview/detail_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_quickview/detail_template",
		"plugins_common_custom_quickview/component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/component",
		"plugins_common_custom_quickview/component_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_quickview/component_template",
		"plugins_common_custom_quickview/poi_imagebox_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/poi_imagebox_component",
		"plugins_common_custom_quickview/poi_imagebox_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_quickview/poi_imagebox_template",
		"plugins_common_custom_quickview/poi_side_by_side_component": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_quickview/poi_side_by_side_component",
		"plugins_common_custom_quickview/poi_side_by_side_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_quickview/poi_side_by_side_template",
		"plugins_common_custom_lazyload": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_lazyload",
		"plugins_common_custom_lazyload_map": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_lazyload_map",
		"plugins_common_custom_video_player": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_video_player",
		"plugins_common_custom_hero_video": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_hero_video",
		"plugins_common_custom_image_with_caption": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_image_with_caption",
		"plugins_common_custom_gallery": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_gallery",
		"plugins_common_custom_jumplist": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_jumplist",
		"plugins_common_custom_read_more": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_read_more",
		"plugins_common_custom_ui_watcher": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_ui_watcher",
		"plugins_common_custom_components/threshold360/viewer": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_components/threshold360/viewer",
		"plugins_common_custom_components/threshold360/viewer_template": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/templates/custom_components/threshold360/viewer_template",
		"plugins_common_custom_utils": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_utils",
		"plugins_common_custom_product_search": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_product_search",
		"plugins_common_custom_thematic_map": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_thematic_map",
		"plugins_common_custom_lightbox": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_lightbox",
		"plugins_common_custom_social_share": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/custom_social_share",
		"plugins_events_custom_event_list_item": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/events/virtuals/templates/custom_event_list_item",
		"plugins_listings_custom_listings_lib": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/js/custom_listings_lib",
		"plugins_listings_custom_map": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/js/custom_map",
		"plugins_listings_custom_compare": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/js/custom_compare",
		"plugins_listings_custom_listing_ta_snippet": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/templates/custom_listing_ta_snippet",
		"plugins_listings_custom_listing_detail_meeting_facilities": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/templates/custom_listing_detail_meeting_facilities",
		"plugins_listings_custom_listing_detail_meeting_room": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/virtuals/templates/custom_listing_detail_meeting_room",
		"plugins_nav_custom_nav_helper": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/nav/virtuals/js/custom_nav_helper",
		"plugins_nav_custom_nav_mobile": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/nav/virtuals/js/custom_nav_mobile",
		"plugins_nav_custom_nav_desktop_three_col": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/nav/virtuals/js/custom_nav_desktop_three_col",
		"plugins_offers_custom_offer_list_item": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/offers/virtuals/templates/custom_offer_list_item",
		"site_tripbuilder": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/tripbuilder/virtuals/js/site_tripbuilder",
		"plugins_core_adminbar": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/core/virtuals/templates/adminbar",
		"site_gtm": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/common/virtuals/js/site_gtm",
		"site_gamClient": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/dtn/virtuals/js/site_gamClient"
	},
	"shim": {
		"dlmenu_1.0.1": {
			"deps": [
				"jquery"
			]
		},
		"nvd3": {
			"exports": "nv",
			"deps": [
				"d3"
			]
		},
		"foundation": {
			"deps": [
				"jquery"
			]
		},
		"foundation_5.2.1": {
			"deps": [
				"jquery"
			]
		},
		"foundation_5.5.0": {
			"deps": [
				"jquery"
			]
		},
		"jqueryui": {
			"deps": [
				"jquery"
			]
		},
		"jqueryuit": {
			"deps": [
				"jqueryui"
			]
		},
		"jqueryui_i18n": {
			"deps": [
				"jqueryui"
			]
		},
		"leaflet": {
			"exports": "L"
		},
		"select2": {
			"deps": [
				"jquery"
			]
		},
		"mocha": {
			"exports": "mocha"
		},
		"cloudinary": {
			"deps": [
				"jquery"
			]
		},
		"addthis": {
			"exports": "addthis"
		},
		"spectrum": {
			"deps": [
				"jquery"
			]
		},
		"ace": {
			"exports": "ace"
		},
		"sv_siteSlick": {
			"deps": [
				"jquery"
			]
		},
		"plugins_common_custom_magnific": {
			"deps": [
				"jquery"
			]
		},
		"plugins_common_custom_daterange": {
			"deps": [
				"jquery"
			]
		},
		"plugins_listings_custom_compare": {
			"deps": [
				"jquery",
				"goatee"
			]
		}
	},
	"packages": [
		{
			"name": "sv_site",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/siteLib/public/js"
		},
		{
			"name": "sv_moduleLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/moduleLib/public/js"
		},
		{
			"name": "sv_cloudinaryLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/cloudinaryLib/public"
		},
		{
			"name": "sv_arrayLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/arrayLib/public",
			"main": "index"
		},
		{
			"name": "sv_gtmLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/gtmLib/public",
			"main": "index"
		},
		{
			"name": "sv_videoLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/videoLib/public",
			"main": "index"
		},
		{
			"name": "sv_objectLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/objectLib/public",
			"main": "index"
		},
		{
			"name": "sv_assertLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/assertLib/public",
			"main": "index"
		},
		{
			"name": "sv_mochaLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mochaLib/public",
			"main": "index"
		},
		{
			"name": "sv_urlLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/urlLib/public",
			"main": "index"
		},
		{
			"name": "sv_facebookLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/facebookLib/public",
			"main": "index"
		},
		{
			"name": "sv_mapLib",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mapLib/public",
			"main": "index"
		},
		{
			"name": "sv_mapLibLoader",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/libs/sv/mapLib/public",
			"main": "loader"
		},
		{
			"name": "crypto-js",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/node_modules/crypto-js",
			"main": "crypto-js"
		},
		{
			"name": "plugins_collections",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/collections/public/js"
		},
		{
			"name": "plugins_core",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/core/public/js"
		},
		{
			"name": "plugins_dtn",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/dtn/public/js"
		},
		{
			"name": "plugins_dynamic_content",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/dynamic_content/public/js"
		},
		{
			"name": "plugins_events",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/events/public/js"
		},
		{
			"name": "plugins_listings",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/listings/legacy/public/js"
		},
		{
			"name": "plugins_maps",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/maps/public/js"
		},
		{
			"name": "plugins_nav",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/nav/public/js"
		},
		{
			"name": "plugins_nav_virtual",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/nav/virtuals/js"
		},
		{
			"name": "plugins_offers",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/offers/public/js"
		},
		{
			"name": "plugins_search",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/search/public/js"
		},
		{
			"name": "plugins_tripbuilder",
			"location": "/includes/public/managed/v_df9c14a4_6bd71e2e/core/plugins/tripbuilder/public/js"
		}
	],
	"config": {
		"sv_facebookLib": {
			"sdkVersion": "v2.3"
		},
		"sv_mapLib": {
			"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ",
			"center": {
				"latitude": 61.2180556,
				"longitude": -149.9002778
			},
			"chinaSites": []
		},
		"plugins_tripbuilder/main": {
			"settings": {
				"path": "/tripbuilder/"
			}
		},
		"sv_cloudinaryLib/default": {
			"authPrimary": false,
			"authUrl": "https://auth.simpleviewinc.com/",
			"env": "live",
			"acctId": 1817,
			"site": "primary",
			"locales": [
				{
					"code": "en",
					"label": "English",
					"cmsLabel": "English",
					"countryCode": "en"
				}
			],
			"cmsUrl": "https://kansas.simpleviewcms.com/",
			"headless": {
				"api": false,
				"frontend": false
			},
			"siteConfig": {
				"clientLong": "Kansas Tourism",
				"address1": "1000 SW Jackson, Suite 100",
				"city": "Topeka",
				"state": "Kansas",
				"zip": "66612",
				"phone": "785-296-2009",
				"custom": {
					"dmtTrackingVersion": "3.4.1",
					"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
					"socialShare": {
						"active": true
					},
					"primary": {
						"quickview": {
							"active": true,
							"modules": [
								"listings",
								"events",
								"offers",
								"pois"
							]
						},
						"threshold360": {
							"active": false,
							"settings": {
								"key": ""
							}
						},
						"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
						"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
						"markerIcon": "/includes/public/assets/shared/map-pin.png",
						"markerIconActive": "/includes/public/assets/shared/map-pin.png"
					}
				},
				"gtmId": "GTM-M9H8TF",
				"timezone": "US/Eastern",
				"latitude": 61.2180556,
				"longitude": -149.9002778,
				"maxRangeMiles": 100,
				"distanceFormat": "mi",
				"assetCdnHostname": "assets.simpleviewinc.com",
				"urlNoSlash": "https://www.travelks.com",
				"url": "https://www.travelks.com/",
				"cloudName": "simpleview",
				"gmaps": {
					"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
				},
				"plugins": {
					"translations": {
						"active": true
					},
					"reporting": {
						"active": true
					},
					"assets": {
						"active": true
					},
					"ab_testing": {
						"active": true
					},
					"asset_request": {
						"active": false
					},
					"autoresponder": {
						"active": false
					},
					"blog": {
						"active": true
					},
					"cms": {
						"active": false
					},
					"collections": {
						"active": true
					},
					"common": {
						"active": true
					},
					"core": {
						"active": true
					},
					"crm": {
						"active": true
					},
					"cron": {
						"active": true
					},
					"developer": {
						"active": true
					},
					"disqus": {
						"active": false
					},
					"dtn": {
						"active": true
					},
					"dynamic_content": {
						"active": true
					},
					"events": {
						"active": true
					},
					"googletranslate": {
						"active": true
					},
					"listings": {
						"active": true,
						"dtn": {
							"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
							"limit": 10,
							"sort": "random"
						}
					},
					"mapexplorer": {
						"active": false
					},
					"mappublisher": {
						"active": false
					},
					"maps": {
						"active": true
					},
					"mediagallery": {
						"active": false
					},
					"nav": {
						"active": true
					},
					"offers": {
						"active": true
					},
					"social": {
						"active": false
					},
					"search": {
						"active": true
					},
					"task": {
						"active": false
					},
					"tripbuilder": {
						"active": true
					},
					"visitors": {
						"active": false
					},
					"weather": {
						"active": true
					}
				}
			},
			"siteConfigs": {
				"cms": {
					"clientLong": "Kansas Tourism",
					"address1": "1000 SW Jackson, Suite 100",
					"city": "Topeka",
					"state": "Kansas",
					"zip": "66612",
					"phone": "785-296-2009",
					"custom": {
						"dmtTrackingVersion": "3.4.1",
						"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
						"socialShare": {
							"active": true
						},
						"primary": {
							"quickview": {
								"active": true,
								"modules": [
									"listings",
									"events",
									"offers",
									"pois"
								]
							},
							"threshold360": {
								"active": false,
								"settings": {
									"key": ""
								}
							},
							"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"markerIcon": "/includes/public/assets/shared/map-pin.png",
							"markerIconActive": "/includes/public/assets/shared/map-pin.png"
						}
					},
					"gtmId": "GTM-M9H8TF",
					"timezone": "US/Eastern",
					"latitude": 61.2180556,
					"longitude": -149.9002778,
					"maxRangeMiles": 100,
					"distanceFormat": "mi",
					"assetCdnHostname": "assets.simpleviewinc.com",
					"urlNoSlash": "https://kansas.simpleviewcms.com",
					"url": "https://kansas.simpleviewcms.com/",
					"cloudName": "simpleview",
					"gmaps": {
						"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
					},
					"plugins": {
						"translations": {
							"active": true
						},
						"reporting": {
							"active": true
						},
						"assets": {
							"active": true
						},
						"ab_testing": {
							"active": true
						},
						"asset_request": {
							"active": false
						},
						"autoresponder": {
							"active": false
						},
						"blog": {
							"active": true
						},
						"cms": {
							"active": false
						},
						"collections": {
							"active": true
						},
						"common": {
							"active": true
						},
						"core": {
							"active": true
						},
						"crm": {
							"active": true
						},
						"cron": {
							"active": true
						},
						"developer": {
							"active": true
						},
						"disqus": {
							"active": false
						},
						"dtn": {
							"active": true
						},
						"dynamic_content": {
							"active": true
						},
						"events": {
							"active": true
						},
						"googletranslate": {
							"active": true
						},
						"listings": {
							"active": true,
							"dtn": {
								"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
								"limit": 10,
								"sort": "random"
							}
						},
						"mapexplorer": {
							"active": false
						},
						"mappublisher": {
							"active": false
						},
						"maps": {
							"active": true
						},
						"mediagallery": {
							"active": false
						},
						"nav": {
							"active": true
						},
						"offers": {
							"active": true
						},
						"social": {
							"active": false
						},
						"search": {
							"active": true
						},
						"task": {
							"active": false
						},
						"tripbuilder": {
							"active": true
						},
						"visitors": {
							"active": false
						},
						"weather": {
							"active": true
						}
					}
				},
				"primary": {
					"clientLong": "Kansas Tourism",
					"address1": "1000 SW Jackson, Suite 100",
					"city": "Topeka",
					"state": "Kansas",
					"zip": "66612",
					"phone": "785-296-2009",
					"custom": {
						"dmtTrackingVersion": "3.4.1",
						"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
						"socialShare": {
							"active": true
						},
						"primary": {
							"quickview": {
								"active": true,
								"modules": [
									"listings",
									"events",
									"offers",
									"pois"
								]
							},
							"threshold360": {
								"active": false,
								"settings": {
									"key": ""
								}
							},
							"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"markerIcon": "/includes/public/assets/shared/map-pin.png",
							"markerIconActive": "/includes/public/assets/shared/map-pin.png"
						}
					},
					"gtmId": "GTM-M9H8TF",
					"timezone": "US/Eastern",
					"latitude": 61.2180556,
					"longitude": -149.9002778,
					"maxRangeMiles": 100,
					"distanceFormat": "mi",
					"assetCdnHostname": "assets.simpleviewinc.com",
					"urlNoSlash": "https://www.travelks.com",
					"url": "https://www.travelks.com/",
					"cloudName": "simpleview",
					"gmaps": {
						"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
					},
					"plugins": {
						"translations": {
							"active": true
						},
						"reporting": {
							"active": true
						},
						"assets": {
							"active": true
						},
						"ab_testing": {
							"active": true
						},
						"asset_request": {
							"active": false
						},
						"autoresponder": {
							"active": false
						},
						"blog": {
							"active": true
						},
						"cms": {
							"active": false
						},
						"collections": {
							"active": true
						},
						"common": {
							"active": true
						},
						"core": {
							"active": true
						},
						"crm": {
							"active": true
						},
						"cron": {
							"active": true
						},
						"developer": {
							"active": true
						},
						"disqus": {
							"active": false
						},
						"dtn": {
							"active": true
						},
						"dynamic_content": {
							"active": true
						},
						"events": {
							"active": true
						},
						"googletranslate": {
							"active": true
						},
						"listings": {
							"active": true,
							"dtn": {
								"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
								"limit": 10,
								"sort": "random"
							}
						},
						"mapexplorer": {
							"active": false
						},
						"mappublisher": {
							"active": false
						},
						"maps": {
							"active": true
						},
						"mediagallery": {
							"active": false
						},
						"nav": {
							"active": true
						},
						"offers": {
							"active": true
						},
						"social": {
							"active": false
						},
						"search": {
							"active": true
						},
						"task": {
							"active": false
						},
						"tripbuilder": {
							"active": true
						},
						"visitors": {
							"active": false
						},
						"weather": {
							"active": true
						}
					}
				}
			},
			"version": "88.0.1",
			"revision": "df9c14a4_6bd71e2e"
		},
		"sv_site/main": {
			"authPrimary": false,
			"authUrl": "https://auth.simpleviewinc.com/",
			"env": "live",
			"acctId": 1817,
			"site": "primary",
			"locales": [
				{
					"code": "en",
					"label": "English",
					"cmsLabel": "English",
					"countryCode": "en"
				}
			],
			"cmsUrl": "https://kansas.simpleviewcms.com/",
			"headless": {
				"api": false,
				"frontend": false
			},
			"siteConfig": {
				"clientLong": "Kansas Tourism",
				"address1": "1000 SW Jackson, Suite 100",
				"city": "Topeka",
				"state": "Kansas",
				"zip": "66612",
				"phone": "785-296-2009",
				"custom": {
					"dmtTrackingVersion": "3.4.1",
					"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
					"socialShare": {
						"active": true
					},
					"primary": {
						"quickview": {
							"active": true,
							"modules": [
								"listings",
								"events",
								"offers",
								"pois"
							]
						},
						"threshold360": {
							"active": false,
							"settings": {
								"key": ""
							}
						},
						"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
						"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
						"markerIcon": "/includes/public/assets/shared/map-pin.png",
						"markerIconActive": "/includes/public/assets/shared/map-pin.png"
					}
				},
				"gtmId": "GTM-M9H8TF",
				"timezone": "US/Eastern",
				"latitude": 61.2180556,
				"longitude": -149.9002778,
				"maxRangeMiles": 100,
				"distanceFormat": "mi",
				"assetCdnHostname": "assets.simpleviewinc.com",
				"urlNoSlash": "https://www.travelks.com",
				"url": "https://www.travelks.com/",
				"cloudName": "simpleview",
				"gmaps": {
					"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
				},
				"plugins": {
					"translations": {
						"active": true
					},
					"reporting": {
						"active": true
					},
					"assets": {
						"active": true
					},
					"ab_testing": {
						"active": true
					},
					"asset_request": {
						"active": false
					},
					"autoresponder": {
						"active": false
					},
					"blog": {
						"active": true
					},
					"cms": {
						"active": false
					},
					"collections": {
						"active": true
					},
					"common": {
						"active": true
					},
					"core": {
						"active": true
					},
					"crm": {
						"active": true
					},
					"cron": {
						"active": true
					},
					"developer": {
						"active": true
					},
					"disqus": {
						"active": false
					},
					"dtn": {
						"active": true
					},
					"dynamic_content": {
						"active": true
					},
					"events": {
						"active": true
					},
					"googletranslate": {
						"active": true
					},
					"listings": {
						"active": true,
						"dtn": {
							"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
							"limit": 10,
							"sort": "random"
						}
					},
					"mapexplorer": {
						"active": false
					},
					"mappublisher": {
						"active": false
					},
					"maps": {
						"active": true
					},
					"mediagallery": {
						"active": false
					},
					"nav": {
						"active": true
					},
					"offers": {
						"active": true
					},
					"social": {
						"active": false
					},
					"search": {
						"active": true
					},
					"task": {
						"active": false
					},
					"tripbuilder": {
						"active": true
					},
					"visitors": {
						"active": false
					},
					"weather": {
						"active": true
					}
				}
			},
			"siteConfigs": {
				"cms": {
					"clientLong": "Kansas Tourism",
					"address1": "1000 SW Jackson, Suite 100",
					"city": "Topeka",
					"state": "Kansas",
					"zip": "66612",
					"phone": "785-296-2009",
					"custom": {
						"dmtTrackingVersion": "3.4.1",
						"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
						"socialShare": {
							"active": true
						},
						"primary": {
							"quickview": {
								"active": true,
								"modules": [
									"listings",
									"events",
									"offers",
									"pois"
								]
							},
							"threshold360": {
								"active": false,
								"settings": {
									"key": ""
								}
							},
							"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"markerIcon": "/includes/public/assets/shared/map-pin.png",
							"markerIconActive": "/includes/public/assets/shared/map-pin.png"
						}
					},
					"gtmId": "GTM-M9H8TF",
					"timezone": "US/Eastern",
					"latitude": 61.2180556,
					"longitude": -149.9002778,
					"maxRangeMiles": 100,
					"distanceFormat": "mi",
					"assetCdnHostname": "assets.simpleviewinc.com",
					"urlNoSlash": "https://kansas.simpleviewcms.com",
					"url": "https://kansas.simpleviewcms.com/",
					"cloudName": "simpleview",
					"gmaps": {
						"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
					},
					"plugins": {
						"translations": {
							"active": true
						},
						"reporting": {
							"active": true
						},
						"assets": {
							"active": true
						},
						"ab_testing": {
							"active": true
						},
						"asset_request": {
							"active": false
						},
						"autoresponder": {
							"active": false
						},
						"blog": {
							"active": true
						},
						"cms": {
							"active": false
						},
						"collections": {
							"active": true
						},
						"common": {
							"active": true
						},
						"core": {
							"active": true
						},
						"crm": {
							"active": true
						},
						"cron": {
							"active": true
						},
						"developer": {
							"active": true
						},
						"disqus": {
							"active": false
						},
						"dtn": {
							"active": true
						},
						"dynamic_content": {
							"active": true
						},
						"events": {
							"active": true
						},
						"googletranslate": {
							"active": true
						},
						"listings": {
							"active": true,
							"dtn": {
								"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
								"limit": 10,
								"sort": "random"
							}
						},
						"mapexplorer": {
							"active": false
						},
						"mappublisher": {
							"active": false
						},
						"maps": {
							"active": true
						},
						"mediagallery": {
							"active": false
						},
						"nav": {
							"active": true
						},
						"offers": {
							"active": true
						},
						"social": {
							"active": false
						},
						"search": {
							"active": true
						},
						"task": {
							"active": false
						},
						"tripbuilder": {
							"active": true
						},
						"visitors": {
							"active": false
						},
						"weather": {
							"active": true
						}
					}
				},
				"primary": {
					"clientLong": "Kansas Tourism",
					"address1": "1000 SW Jackson, Suite 100",
					"city": "Topeka",
					"state": "Kansas",
					"zip": "66612",
					"phone": "785-296-2009",
					"custom": {
						"dmtTrackingVersion": "3.4.1",
						"growthbookApiClientKey": "sdk-11sKRYPvsyveMc9p",
						"socialShare": {
							"active": true
						},
						"primary": {
							"quickview": {
								"active": true,
								"modules": [
									"listings",
									"events",
									"offers",
									"pois"
								]
							},
							"threshold360": {
								"active": false,
								"settings": {
									"key": ""
								}
							},
							"defaultImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"placeholderImageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/kansas-redesign/deafault_img_74b51017-a5d5-4eea-8bf9-f921c97fcf0f.jpg",
							"markerIcon": "/includes/public/assets/shared/map-pin.png",
							"markerIconActive": "/includes/public/assets/shared/map-pin.png"
						}
					},
					"gtmId": "GTM-M9H8TF",
					"timezone": "US/Eastern",
					"latitude": 61.2180556,
					"longitude": -149.9002778,
					"maxRangeMiles": 100,
					"distanceFormat": "mi",
					"assetCdnHostname": "assets.simpleviewinc.com",
					"urlNoSlash": "https://www.travelks.com",
					"url": "https://www.travelks.com/",
					"cloudName": "simpleview",
					"gmaps": {
						"apiKey": "AIzaSyAqDnH-lsK1cJUVP6Fpgq_sUz0cMsFBpQQ"
					},
					"plugins": {
						"translations": {
							"active": true
						},
						"reporting": {
							"active": true
						},
						"assets": {
							"active": true
						},
						"ab_testing": {
							"active": true
						},
						"asset_request": {
							"active": false
						},
						"autoresponder": {
							"active": false
						},
						"blog": {
							"active": true
						},
						"cms": {
							"active": false
						},
						"collections": {
							"active": true
						},
						"common": {
							"active": true
						},
						"core": {
							"active": true
						},
						"crm": {
							"active": true
						},
						"cron": {
							"active": true
						},
						"developer": {
							"active": true
						},
						"disqus": {
							"active": false
						},
						"dtn": {
							"active": true
						},
						"dynamic_content": {
							"active": true
						},
						"events": {
							"active": true
						},
						"googletranslate": {
							"active": true
						},
						"listings": {
							"active": true,
							"dtn": {
								"auid": "21812118460/KansasOfficeofTourism-2020Redesign-www.travelks.com/KansasOfficeofTourism-2020Redesign-FL",
								"limit": 10,
								"sort": "random"
							}
						},
						"mapexplorer": {
							"active": false
						},
						"mappublisher": {
							"active": false
						},
						"maps": {
							"active": true
						},
						"mediagallery": {
							"active": false
						},
						"nav": {
							"active": true
						},
						"offers": {
							"active": true
						},
						"social": {
							"active": false
						},
						"search": {
							"active": true
						},
						"task": {
							"active": false
						},
						"tripbuilder": {
							"active": true
						},
						"visitors": {
							"active": false
						},
						"weather": {
							"active": true
						}
					}
				}
			},
			"version": "88.0.1",
			"revision": "df9c14a4_6bd71e2e"
		},
		"plugins_listings": {
			"svacctid": 1817
		},
		"site_gtm": {
			"coreArgs": {
				"addArgs": {
					"tCore": {
						"trackingId": "UA-82747010-2"
					},
					"tCore_pageview": {
						"trackingId": "UA-82747010-2"
					}
				}
			}
		}
	},
	"waitSeconds": 30,
	"map": {
		"*": {
			"mongolayer": "sv_devnull",
			"@sv/asyncLib": "flowly",
			"@sv/arrayLib": "sv_arrayLib",
			"@sv/objectLib": "sv_objectLib",
			"@sv/assertLib": "sv_assertLib",
			"@sv/mochaLib": "sv_mochaLib",
			"@sv/urlLib": "sv_urlLib",
			"@sv/stringLib": "sv_stringLib",
			"@sv/miscLib": "sv_miscLib",
			"@sv/crmLib": "sv_crmLib",
			"@sv/geodist": "geodist",
			"@sv/validator": "jsvalidator",
			"@simpleview/mochalib": "mochalib",
			"sv_asyncLib": "flowly",
			"crypto": "sv_devnull",
			"cheerio": "jquery"
		},
		"cloudinary": {
			"jquery.ui.widget": "sv_devnull",
			"jquery.iframe-transport": "sv_devnull",
			"jquery.fileupload": "sv_devnull"
		},
		"sv_crmLib": {
			"../Synchronizer": "sv_devnull"
		}
	}
})