/* global _ */
(function () {
    'use strict';

    $.widget('configurable', {
        component: 'configurable',
        options: {
            superSelector: '.super-attribute-select',
            selectSimpleProduct: '[name="selected_configurable_option"]',
            priceHolderSelector: '.price-box',
            spConfig: {},
            state: {},
            priceFormat: {},
            optionTemplate: '<%- data.label %>' +
            '<% if (typeof data.finalPrice.value !== "undefined") { %>' +
            ' <%- data.finalPrice.formatted %>' +
            '<% } %>',
            mediaGallerySelector: '[data-gallery-role=gallery-placeholder]',
            mediaGalleryInitial: null,
            slyOldPriceSelector: '.sly-old-price',
            normalPriceLabelSelector: '.product-info-main .normal-price .price-label',

            /**
             * Defines the mechanism of how images of a gallery should be
             * updated when user switches between configurations of a product.
             *
             * As for now value of this option can be either 'replace' or 'prepend'.
             *
             * @type {String}
             */
            gallerySwitchStrategy: 'replace',
            tierPriceTemplateSelector: '#tier-prices-template',
            tierPriceBlockSelector: '[data-role="tier-price-block"]',
            tierPriceTemplate: ''
        },

        /**
         * Creates widget
         * @private
         */
        _create: function () {
            if ($(this.options.priceHolderSelector).priceBox('instance')) {
                this._onPriceFormatReady();
            } else {
                $(this.options.priceHolderSelector).on('price-box-initialized', this._onPriceFormatReady.bind(this));
            }
        },

        _onPriceFormatReady: function () {
            // Initial setting of various option values
            this._initializeOptions();

            // Override defaults with URL query parameters and/or inputs values
            this._overrideDefaults();

            // Change events to check select reloads
            this._setupChangeEvents();

            // Fill state
            this._fillState();

            // Setup child and prev/next settings
            this._setChildSettings();

            // Setup/configure values to inputs
            this._configureForValues();

            $(this.element).trigger('configurable.initialized');
        },

        /**
         * Initialize tax configuration, initial settings, and options values.
         * @private
         */
        _initializeOptions: function () {
            var options = this.options,
                gallery = $(options.mediaGallerySelector),
                priceBox = $(this.options.priceHolderSelector).priceBox('instance'),
                priceBoxOptions = null;

            if (priceBox) {
                priceBoxOptions = priceBox.option('priceConfig');
            }

            if (priceBoxOptions && priceBoxOptions.optionTemplate) {
                options.optionTemplate = priceBoxOptions.optionTemplate;
            }

            if (priceBoxOptions && priceBoxOptions.priceFormat) {
                options.priceFormat = priceBoxOptions.priceFormat;
            }
            options.optionTemplate = _.template(options.optionTemplate);
            options.tierPriceTemplate = $(this.options.tierPriceTemplateSelector).html();

            options.settings = options.spConfig.containerId ?
                $('body').find(options.spConfig.containerId).find(options.superSelector) :
                $(options.superSelector);

            options.values = options.spConfig.defaultValues || {};
            options.parentImage = $('[data-role=base-image-container] img').attr('src');

            this.inputSimpleProduct = this.element.find(options.selectSimpleProduct);

            gallery.gallery && gallery.gallery('instance') ?
                this._onGalleryLoaded(gallery) :
                gallery.on('gallery:loaded', this._onGalleryLoaded.bind(this, gallery));

        },

        /**
         * Override default options values settings with either URL query parameters or
         * initialized inputs values.
         * @private
         */
        _overrideDefaults: function () {
            var hashIndex = window.location.href.indexOf('#');

            if (hashIndex !== -1) {
                this._parseQueryParams(window.location.href.substr(hashIndex + 1));
            }

            if (this.options.spConfig.inputsInitialized) {
                this._setValuesByAttribute();
            }

            this._setInitialOptionsLabels();
        },

        /**
         * Parse query parameters from a query string and set options values based on the
         * key value pairs of the parameters.
         * @param {*} queryString - URL query string containing query parameters.
         * @private
         */
        _parseQueryParams: function (queryString) {
            var queryParams = $.parseQuery(queryString);

            $.each(queryParams, function (key, value) {
                if (this.options.spConfig.attributes[key] !== undefined &&
                    _.find(this.options.spConfig.attributes[key].options, function (element) {
                        return element.id === value;
                    })) {
                    this.options.values[key] = value;
                }
            }.bind(this));
        },

        /**
         * Override default options values with values based on each element's attribute
         * identifier.
         * @private
         */
        _setValuesByAttribute: function () {
            this.options.values = {};
            $.each(this.options.settings, function (index, element) {
                var attributeId;

                if (element.value) {
                    attributeId = element.id.replace(/[a-z]*/, '');

                    if (this.options.spConfig.attributes[attributeId] !== undefined &&
                        _.find(this.options.spConfig.attributes[attributeId].options, function (optionElement) {
                            return optionElement.id === element.value;
                        })) {
                        this.options.values[attributeId] = element.value;
                    }
                }
            }.bind(this));
        },

        /**
         * Set additional field with initial label to be used when switching between options with different prices.
         * @private
         */
        _setInitialOptionsLabels: function () {
            $.each(this.options.spConfig.attributes, function (index, element) {
                $.each(element.options, function (optIndex, optElement) {
                    this.options.spConfig.attributes[index].options[optIndex].initialLabel = optElement.label;
                }.bind(this));
            }.bind(this));
        },

        /**
         * Set up .on('change') events for each option element to configure the option.
         * @private
         */
        _setupChangeEvents: function () {
            $.each(this.options.settings, function (index, element) {
                $(element).on('change', this, this._configure);
            }.bind(this));
        },

        /**
         * Iterate through the option settings and set each option's element configuration,
         * attribute identifier. Set the state based on the attribute identifier.
         * @private
         */
        _fillState: function () {
            $.each(this.options.settings, function (index, element) {
                var attributeId = element.id.replace(/[a-z]*/, '');

                if (attributeId && this.options.spConfig.attributes[attributeId]) {
                    element.config = this.options.spConfig.attributes[attributeId];
                    element.attributeId = attributeId;
                    this.options.state[attributeId] = false;
                }
            }.bind(this));
        },

        /**
         * Set each option's child settings, and next/prev option setting. Fill (initialize)
         * an option's list of selections as needed or disable an option's setting.
         * @private
         */
        _setChildSettings: function () {
            var childSettings = [],
                settings = this.options.settings,
                index = settings.length,
                option;

            while (index--) {
                option = settings[index];

                if (index) {
                    option.disabled = true;
                } else {
                    this._fillSelect(option);
                }

                _.extend(option, {
                    childSettings: childSettings.slice(),
                    prevSetting: settings[index - 1],
                    nextSetting: settings[index + 1]
                });

                childSettings.push(option);
            }
        },

        /**
         * Setup for all configurable option settings. Set the value of the option and configure
         * the option, which sets its state, and initializes the option's choices, etc.
         * @private
         */
        _configureForValues: function () {
            if (this.options.values) {
                this.options.settings.each(function (index, element) {
                    var attributeId = element.attributeId;

                    element.value = this.options.values[attributeId] || '';
                    this._configureElement(element);
                }.bind(this));
            }
        },

        /**
         * Event handler for configuring an option.
         * @private
         * @param {Object} event - Event triggered to configure an option.
         */
        _configure: function (event) {
            event.data._configureElement(this);
        },

        /**
         * Configure an option, initializing it's state and enabling related options, which
         * populates the related option's selection and resets child option selections.
         * @private
         * @param {*} element - The element associated with a configurable option.
         */
        _configureElement: function (element) {
            this.simpleProduct = this._getSimpleProductId(element);

            if (element.value) {
                this.options.state[element.config.id] = element.value;

                if (element.nextSetting) {
                    element.nextSetting.disabled = false;
                    this._fillSelect(element.nextSetting);
                    this._resetChildren(element.nextSetting);
                } else {
                    if (!!document.documentMode) { //eslint-disable-line
                        this.inputSimpleProduct.val(element.options[element.selectedIndex].config.allowedProducts[0]);
                    } else {
                        this.inputSimpleProduct.val(element.selectedOptions[0].config.allowedProducts[0]);
                    }
                }
            } else {
                this._resetChildren(element);
            }

            this._reloadPrice();
            this._displayRegularPriceBlock(this.simpleProduct);
            this._displayTierPriceBlock(this.simpleProduct);
            this._displayNormalPriceLabel();
            this._changeProductImage();
        },

        /**
         * Change displayed product image according to chosen options of configurable product
         *
         * @private
         */
        _changeProductImage: function () {
            var images,
                initialImages = this.options.mediaGalleryInitial,
                galleryEl = $(this.options.mediaGallerySelector),
                gallery;

            if (galleryEl.gallery) {
                gallery = galleryEl.gallery('instance');
            }

            if (_.isUndefined(gallery)) {
                galleryEl.on('gallery:loaded', function () {
                    this._changeProductImage();
                }.bind(this));

                return;
            }

            images = this.options.spConfig.images[this.simpleProduct];

            if (images) {
                images = this._sortImages(images);

                if (this.options.gallerySwitchStrategy === 'prepend') {
                    images = images.concat(initialImages);
                }

                images = $.extend(true, [], images);

                gallery.updateData(images);
            } else {
                gallery.updateData(initialImages);
            }
        },

        /**
         * Sorting images array
         *
         * @private
         */
        _sortImages: function (images) {
            return _.sortBy(images, function (image) {
                return image.position;
            });
        },

        /**
         * For a given option element, reset all of its selectable options. Clear any selected
         * index, disable the option choice, and reset the option's state if necessary.
         * @private
         * @param {*} element - The element associated with a configurable option.
         */
        _resetChildren: function (element) {
            if (element.childSettings) {
                _.each(element.childSettings, function (set) {
                    set.selectedIndex = 0;
                    set.disabled = true;
                });

                if (element.config) {
                    this.options.state[element.config.id] = false;
                }
            }
        },

        /**
         * Populates an option's selectable choices.
         * @private
         * @param {*} element - Element associated with a configurable option.
         */
        _fillSelect: function (element) {
            var attributeId = element.id.replace(/[a-z]*/, ''),
                options = this._getAttributeOptions(attributeId),
                prevConfig,
                index = 1,
                allowedProducts,
                allowedProductsByOption,
                allowedProductsAll,
                i,
                j,
                finalPrice = parseFloat(this.options.spConfig.prices.finalPrice.amount),
                optionFinalPrice,
                optionPriceDiff,
                optionPrices = this.options.spConfig.optionPrices,
                allowedOptions = [],
                indexKey,
                allowedProductMinPrice,
                allowedProductsAllMinPrice;

            this._clearSelect(element);
            element.options[0] = new Option('', '');
            element.options[0].innerHTML = this.options.spConfig.chooseText;
            prevConfig = false;

            if (element.prevSetting) {
                prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
            }

            if (options) {
                for (indexKey in this.options.spConfig.index) {
                    /* eslint-disable max-depth */
                    if (this.options.spConfig.index.hasOwnProperty(indexKey)) {
                        allowedOptions = allowedOptions.concat(_.values(this.options.spConfig.index[indexKey]));
                    }
                }

                if (prevConfig) {
                    allowedProductsByOption = {};
                    allowedProductsAll = [];

                    for (i = 0; i < options.length; i++) {
                        /* eslint-disable max-depth */
                        for (j = 0; j < options[i].products.length; j++) {
                            // prevConfig.config can be undefined
                            if (prevConfig.config &&
                                prevConfig.config.allowedProducts &&
                                prevConfig.config.allowedProducts.indexOf(options[i].products[j]) > -1) {
                                if (!allowedProductsByOption[i]) {
                                    allowedProductsByOption[i] = [];
                                }
                                allowedProductsByOption[i].push(options[i].products[j]);
                                allowedProductsAll.push(options[i].products[j]);
                            }
                        }
                    }

                    if (typeof allowedProductsAll[0] !== 'undefined' &&
                        typeof optionPrices[allowedProductsAll[0]] !== 'undefined') {
                        allowedProductsAllMinPrice = this._getAllowedProductWithMinPrice(allowedProductsAll);
                        finalPrice = parseFloat(optionPrices[allowedProductsAllMinPrice].finalPrice.amount);
                    }
                }

                for (i = 0; i < options.length; i++) {
                    if (prevConfig && typeof allowedProductsByOption[i] === 'undefined') {
                        continue; //jscs:ignore disallowKeywords
                    }

                    allowedProducts = prevConfig ? allowedProductsByOption[i] : options[i].products.slice(0);
                    optionPriceDiff = 0;

                    if (typeof allowedProducts[0] !== 'undefined' &&
                        typeof optionPrices[allowedProducts[0]] !== 'undefined') {
                        allowedProductMinPrice = this._getAllowedProductWithMinPrice(allowedProducts);
                        optionFinalPrice = parseFloat(optionPrices[allowedProductMinPrice].finalPrice.amount);
                        optionPriceDiff = optionFinalPrice - finalPrice;
                        options[i].label = options[i].initialLabel;

                        if (optionPriceDiff !== 0) {
                            options[i].label += ' ' + $.catalog.priceUtils.formatPrice(
                                optionPriceDiff,
                                this.options.priceFormat,
                                true
                            );
                        }
                    }

                    if (allowedProducts.length > 0 || _.include(allowedOptions, options[i].id)) {
                        options[i].allowedProducts = allowedProducts;
                        element.options[index] = new Option(this._getOptionLabel(options[i]), options[i].id);

                        if (typeof options[i].price !== 'undefined') {
                            element.options[index].setAttribute('price', options[i].price);
                        }

                        if (allowedProducts.length === 0) {
                            element.options[index].disabled = true;
                        }

                        element.options[index].config = options[i];
                        index++;
                    }

                    /* eslint-enable max-depth */
                }
            }
        },

        /**
         * Generate the label associated with a configurable option. This includes the option's
         * label or value and the option's price.
         * @private
         * @param {*} option - A single choice among a group of choices for a configurable option.
         * @return {String} The option label with option value and price (e.g. Black +1.99)
         */
        _getOptionLabel: function (option) {
            return option.label;
        },

        /**
         * Removes an option's selections.
         * @private
         * @param {*} element - The element associated with a configurable option.
         */
        _clearSelect: function (element) {
            var i;

            for (i = element.options.length - 1; i >= 0; i--) {
                element.remove(i);
            }
        },

        /**
         * Retrieve the attribute options associated with a specific attribute Id.
         * @private
         * @param {Number} attributeId - The id of the attribute whose configurable options are sought.
         * @return {Object} Object containing the attribute options.
         */
        _getAttributeOptions: function (attributeId) {
            if (this.options.spConfig.attributes[attributeId]) {
                return this.options.spConfig.attributes[attributeId].options;
            }
        },

        /**
         * Reload the price of the configurable product incorporating the prices of all of the
         * configurable product's option selections.
         */
        _reloadPrice: function () {
            $(this.options.priceHolderSelector).trigger('updatePrice', this._getPrices());
        },

        /**
         * Get product various prices
         * @returns {{}}
         * @private
         */
        _getPrices: function () {
            var prices = {},
                elements = _.toArray(this.options.settings),
                allowedProduct;

            _.each(elements, function (element) {
                var selected = element.options[element.selectedIndex],
                    config = selected && selected.config,
                    priceValue = {};

                if (config && config.allowedProducts.length === 1) {
                    priceValue = this._calculatePrice(config);
                } else if (element.value) {
                    allowedProduct = this._getAllowedProductWithMinPrice(config.allowedProducts);
                    priceValue = this._calculatePrice({
                        'allowedProducts': [
                            allowedProduct
                        ]
                    });
                }

                if (!_.isEmpty(priceValue)) {
                    prices.prices = priceValue;
                }
            }, this);

            return prices;
        },

        /**
         * Get product with minimum price from selected options.
         *
         * @param {Array} allowedProducts
         * @returns {String}
         * @private
         */
        _getAllowedProductWithMinPrice: function (allowedProducts) {
            var optionPrices = this.options.spConfig.optionPrices,
                product = {},
                optionMinPrice, optionFinalPrice;

            _.each(allowedProducts, function (allowedProduct) {
                optionFinalPrice = parseFloat(optionPrices[allowedProduct].finalPrice.amount);

                if (_.isEmpty(product) || optionFinalPrice < optionMinPrice) {
                    optionMinPrice = optionFinalPrice;
                    product = allowedProduct;
                }
            }, this);

            return product;
        },

        /**
         * Returns prices for configured products
         *
         * @param {*} config - Products configuration
         * @returns {*}
         * @private
         */
        _calculatePrice: function (config) {
            var displayPrices = $(this.options.priceHolderSelector).priceBox('option').prices,
                newPrices = this.options.spConfig.optionPrices[_.first(config.allowedProducts)];

            _.each(displayPrices, function (price, code) {
                if (newPrices[code]) {
                    displayPrices[code].amount = newPrices[code].amount - displayPrices[code].amount;
                }
            });

            return displayPrices;
        },

        /**
         * Returns Simple product Id
         *  depending on current selected option.
         *
         * @private
         * @param {HTMLElement} element
         * @returns {String|undefined}
         */
        _getSimpleProductId: function (element) {
            // TODO: Rewrite algorithm. It should return ID of
            //        simple product based on selected options.
            var allOptions = element.config.options,
                value = element.value,
                config;

            config = _.filter(allOptions, function (option) {
                return option.id === value;
            });
            config = _.first(config);

            return _.isEmpty(config) ?
                undefined :
                _.first(config.allowedProducts);

        },

        /**
         * Show or hide regular price block
         *
         * @param {*} optionId
         * @private
         */
        _displayRegularPriceBlock: function (optionId) {
            var shouldBeShown = true;

            _.each(this.options.settings, function (element) {
                if (element.value === '') {
                    shouldBeShown = false;
                }
            });

            if (shouldBeShown &&
                this.options.spConfig.optionPrices[optionId].oldPrice.amount !==
                this.options.spConfig.optionPrices[optionId].finalPrice.amount
            ) {
                $(this.options.slyOldPriceSelector).show();
            } else {
                $(this.options.slyOldPriceSelector).hide();
            }

            $(document).trigger('updateMsrpPriceBlock',
                [
                    optionId,
                    this.options.spConfig.optionPrices
                ]
            );
        },

        /**
         * Show or hide normal price label
         *
         * @private
         */
        _displayNormalPriceLabel: function () {
            var shouldBeShown = false;

            _.each(this.options.settings, function (element) {
                if (element.value === '') {
                    shouldBeShown = true;
                }
            });

            if (shouldBeShown) {
                $(this.options.normalPriceLabelSelector).show();
            } else {
                $(this.options.normalPriceLabelSelector).hide();
            }
        },

        /**
         * Callback which fired after gallery gets initialized.
         *
         * @param {HTMLElement} element - DOM element associated with gallery.
         */
        _onGalleryLoaded: function (element) {
            this.options.mediaGalleryInitial = element.gallery('instance').returnCurrentImages();
        },

        /**
         * Show or hide tier price block
         *
         * @param {*} optionId
         * @private
         */
        _displayTierPriceBlock: function (optionId) {
            var tierPrices = typeof optionId != 'undefined' && this.options.spConfig.optionPrices[optionId].tierPrices;

            if (_.isArray(tierPrices) && tierPrices.length > 0) {
                if (this.options.tierPriceTemplate) {
                    $(this.options.tierPriceBlockSelector).html(
                        _.template(this.options.tierPriceTemplate)({
                            'tierPrices': tierPrices,
                            '$t': $.__,
                            'currencyFormat': this.options.spConfig.currencyFormat,
                            'priceUtils': $.catalog.priceUtils
                        })
                    ).show();
                }
            } else {
                $(this.options.tierPriceBlockSelector).hide();
            }
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('SwatchRendererTooltip', {
        options: {
            delay: 200,                             //how much ms before tooltip to show
            tooltipClass: 'swatch-option-tooltip'  //configurable, but remember about css
        },

        /** [_init description] */
        _init: function () {
            var $widget = this,
                $this = this.element,
                $element = $('.' + $widget.options.tooltipClass),
                timer,
                type = parseInt($this.data('option-type'), 10),
                label = $this.data('option-label'),
                thumb = $this.data('option-tooltip-thumb'),
                value = $this.data('option-tooltip-value'),
                width = $this.data('thumb-width'),
                height = $this.data('thumb-height'),
                $image,
                $title,
                $corner;

            if (!$element.length) {
                $element = $('<div class="' +
                    $widget.options.tooltipClass +
                    '"><div class="image"></div><div class="title"></div><div class="corner"></div></div>'
                );
                $('body').append($element);
            }

            $image = $element.find('.image');
            $title = $element.find('.title');
            $corner = $element.find('.corner');

            $this.hover(function () {
                if ($this.hasClass('disabled')) {
                    return;
                }

                timer = setTimeout(function () {
                    var leftOpt = null,
                        leftCorner = 0,
                        left,
                        $window;

                    if (type === 2) {
                        // Image
                        $image.css({
                            'background': 'url("' + thumb + '") no-repeat center', //Background case
                            'background-size': 'initial',
                            'width': width + 'px',
                            'height': height + 'px'
                        });
                        $image.show();
                    } else if (type === 1) {
                        // Color
                        $image.css({
                            background: value
                        });
                        $image.show();
                    } else if (type === 0 || type === 3) {
                        // Default
                        $image.hide();
                    }

                    $title.text(label);
                    $element.show();

                    leftOpt = $this.offset().left;
                    left = leftOpt + $this.width() / 2 - $element.width() / 2;
                    $window = $(window);

                    // the numbers (5 and 5) is magick constants for offset from left or right page
                    if (left < 0) {
                        left = 5;
                    } else if (left + $element.width() > $window.width()) {
                        left = $window.width() - $element.width() - 5;
                    }

                    // the numbers (6,  3 and 18) is magick constants for offset tooltip
                    leftCorner = 0;

                    if ($element.width() < $this.width()) {
                        leftCorner = $element.width() / 2 - 3;
                    } else {
                        leftCorner = (leftOpt > left ? leftOpt - left : left - leftOpt) + $this.width() / 2 - 6;
                    }

                    $corner.css({
                        left: leftCorner
                    });
                    $element.css({
                        left: left,
                        top: $this.offset().top - $element.height() - $corner.height() - 18
                    }).show();
                }, $widget.options.delay);
            }, function () {
                $element.hide();
                clearTimeout(timer);
            });

            $(document).on('tap.SwatchRendererTooltip', function () {
                $element.hide();
                clearTimeout(timer);
            });

            $this.on('tap', function (event) {
                event.stopPropagation();
            });
        },

        destroy: function () {
            $(document).off('tap.SwatchRendererTooltip');
            this._super();
        }
    });

    $.widget('SwatchRenderer', {
        component: 'Magento_Swatches/js/swatch-renderer',
        options: {
            classes: {
                attributeClass: 'swatch-attribute',
                attributeLabelClass: 'swatch-attribute-label',
                attributeSelectedOptionLabelClass: 'swatch-attribute-selected-option',
                attributeOptionsWrapper: 'swatch-attribute-options',
                attributeInput: 'swatch-input',
                optionClass: 'swatch-option',
                selectClass: 'swatch-select',
                moreButton: 'swatch-more',
                loader: 'swatch-option-loading'
            },
            // option's json config
            jsonConfig: {},

            // swatch's json config
            jsonSwatchConfig: {},

            // selector of parental block of prices and swatches (need to know where to seek for price block)
            selectorProduct: '.product-info-main',

            // selector of price wrapper (need to know where set price)
            selectorProductPrice: '[data-role=priceBox]',

            //selector of product images gallery wrapper
            mediaGallerySelector: '[data-gallery-role=gallery-placeholder]',

            // selector of category product tile wrapper
            selectorProductTile: '.product-item',

            // number of controls to show (false or zero = show all)
            numberToShow: false,

            // show only swatch controls
            onlySwatches: false,

            // enable label for control
            enableControlLabel: true,

            // control label id
            controlLabelId: '',

            // text for more button
            moreButtonText: $.__('More'),

            // Callback url for media
            mediaCallback: '',

            // Local media cache
            mediaCache: {},

            // Cache for BaseProduct images. Needed when option unset
            mediaGalleryInitial: [{}],

            // Use ajax to get image data
            useAjax: false,

            /**
             * Defines the mechanism of how images of a gallery should be
             * updated when user switches between configurations of a product.
             *
             * As for now value of this option can be either 'replace' or 'prepend'.
             *
             * @type {String}
             */
            gallerySwitchStrategy: 'replace',

            // whether swatches are rendered in product list or on product page
            inProductList: false,

            // sly-old-price block selector
            slyOldPriceSelector: '.sly-old-price',

            // tier prise selectors start
            tierPriceTemplateSelector: '#tier-prices-template',
            tierPriceBlockSelector: '[data-role="tier-price-block"]',
            tierPriceTemplate: '',
            // tier prise selectors end

            // A price label selector
            normalPriceLabelSelector: '.product-info-main .normal-price .price-label'
        },

        /**
         * Get chosen product
         *
         * @returns int|null
         */
        getProduct: function () {
            var products = this._CalcProducts();

            return _.isArray(products) ? products[0] : null;
        },

        /**
         * Get chosen product id
         *
         * @returns int|null
         */
        getProductId: function () {
            var products = this._CalcProducts();

            return _.isArray(products) && products.length === 1 ? products[0] : null;
        },

        /**
         * @private
         */
        _init: function () {
            if ($(this.element).attr('data-rendered')) {
                return;
            }

            this._markup = this.element.html();
            $(this.element).attr('data-rendered', true);

            if (_.isEmpty(this.options.jsonConfig.images)) {
                this.options.useAjax = true;
                this._debouncedLoadProductMedia = _.debounce(this._LoadProductMedia.bind(this), 500);
            }

            this.options.tierPriceTemplate = $(this.options.tierPriceTemplateSelector).html();

            if (this.options.jsonConfig !== '' && this.options.jsonSwatchConfig !== '') {
                this.options.jsonConfig.mappedAttributes = _.clone(this.options.jsonConfig.attributes);
                this._sortAttributes();
                this._RenderControls();
                this._setPreSelectedGallery();
                $(this.element).trigger('swatch.initialized');
            } else {
                console.log('SwatchRenderer: No input data received');
            }
        },

        destroy: function () {
            $(this.element).removeAttr('data-rendered').html(this._markup);
            this._super();
        },

        /**
         * @private
         */
        _sortAttributes: function () {
            this.options.jsonConfig.attributes = _.sortBy(this.options.jsonConfig.attributes, function (attribute) {
                return parseInt(attribute.position, 10);
            });
        },

        /**
         * @private
         */
        _create: function () {
            var options = this.options,
                gallery = $('.column.main').find('[data-gallery-role="gallery-placeholder"]'),
                productData = this._determineProductData(),
                $main = productData.isInProductView ?
                    this.element.parents('.column.main') :
                    this.element.parents('.product-item-info');

            if (productData.isInProductView) {
                gallery.gallery('instance') ?
                    this._onGalleryLoaded(gallery) :
                    gallery.on('gallery:loaded', this._onGalleryLoaded.bind(this, gallery));
            } else {
                options.mediaGalleryInitial = [{
                    'img': $main.find('.product-image-photo').attr('src')
                }];
            }

            this.productForm = this.element.parents(this.options.selectorProductTile).find('form').first('first');
            this.inProductList = this.productForm.length > 0;
        },

        /**
         * Determine product id and related data
         *
         * @returns {{productId: *, isInProductView: bool}}
         * @private
         */
        _determineProductData: function () {
            // Check if product is in a list of products.
            var productId,
                isInProductView = false;

            productId = this.element.parents('.product-item-info')
                    .find('.price-box.price-final_price')
                    .attr('data-product-id');

            if (!productId) {
                // Check individual product.
                productId = $('[name=product]').val();
                isInProductView = productId > 0;
            }

            return {
                productId: productId,
                isInProductView: isInProductView
            };
        },

        /**
         * Render controls
         *
         * @private
         */
        _RenderControls: function () {
            var $widget = this,
                container = this.element,
                classes = this.options.classes,
                chooseText = this.options.jsonConfig.chooseText,
                showTooltip = this.options.showTooltip;

            $widget.optionsMap = {};

            $.each(this.options.jsonConfig.attributes, function () {
                var item = this,
                    controlLabelId = 'option-label-' + item.code + '-' + item.id,
                    options = $widget._RenderSwatchOptions(item, controlLabelId),
                    select = $widget._RenderSwatchSelect(item, chooseText),
                    input = $widget._RenderFormInput(item),
                    listLabel = '',
                    label = '';

                // Show only swatch controls
                if ($widget.options.onlySwatches && !$widget.options.jsonSwatchConfig.hasOwnProperty(item.id)) {
                    return;
                }

                if ($widget.options.enableControlLabel) {
                    label +=
                        '<span id="' + controlLabelId + '" class="' + classes.attributeLabelClass + '">' +
                        $('<i></i>').text(item.label).html() +
                        '</span>' +
                        '<span class="' + classes.attributeSelectedOptionLabelClass + '"></span>';
                }

                if ($widget.inProductList) {
                    $widget.productForm.append(input);
                    input = '';
                    listLabel = 'aria-label="' + $('<i></i>').text(item.label).html() + '"';
                } else {
                    listLabel = 'aria-labelledby="' + controlLabelId + '"';
                }

                // Create new control
                container.append(
                    '<div class="' + classes.attributeClass + ' ' + item.code + '" ' +
                         'data-attribute-code="' + item.code + '" ' +
                         'data-attribute-id="' + item.id + '">' +
                        label +
                        '<div aria-activedescendant="" ' +
                             'aria-invalid="false" ' +
                             'aria-required="true" ' +
                             'role="listbox" ' + listLabel +
                             'class="' + classes.attributeOptionsWrapper + ' clearfix">' +
                            options + select +
                        '</div>' + input +
                    '</div>'
                );

                $widget.optionsMap[item.id] = {};

                // Aggregate options array to hash (key => value)
                $.each(item.options, function () {
                    if (this.products.length > 0) {
                        $widget.optionsMap[item.id][this.id] = {
                            price: parseInt(
                                $widget.options.jsonConfig.optionPrices[this.products[0]].finalPrice.amount,
                                10
                            ),
                            products: this.products
                        };
                    }
                });
            });

            if (showTooltip === 1) {
                // Connect Tooltip
                container
                    .find('[data-option-type="1"], [data-option-type="2"],' +
                        ' [data-option-type="0"], [data-option-type="3"]')
                    .SwatchRendererTooltip();
            }

            // Hide all elements below more button
            $('.' + classes.moreButton).nextAll().hide();

            // Handle events like click or change
            $widget._EventListener();

            // Rewind options
            $widget._Rewind(container);

            // timout is used to wait till price-box widget will be mounted
            setTimeout(function () {
                $widget._EmulateSelected($.parseQuery());
                $widget._EmulateSelected($widget._getSelectedAttributes());
            }, 80);
        },

        /**
         * Render swatch options by part of config
         *
         * @param {Object} config
         * @param {String} controlId
         * @returns {String}
         * @private
         */
        _RenderSwatchOptions: function (config, controlId) {
            var optionConfig = this.options.jsonSwatchConfig[config.id],
                optionClass = this.options.classes.optionClass,
                sizeConfig = this.options.jsonSwatchImageSizeConfig,
                moreLimit = parseInt(this.options.numberToShow, 10),
                moreClass = this.options.classes.moreButton,
                moreText = this.options.moreButtonText,
                countAttributes = 0,
                html = '';

            if (!this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
                return '';
            }

            $.each(config.options, function (index) {
                var id,
                    type,
                    value,
                    thumb,
                    label,
                    width,
                    height,
                    attr,
                    swatchImageWidth,
                    swatchImageHeight;

                if (!optionConfig.hasOwnProperty(this.id)) {
                    return '';
                }

                // Add more button
                if (moreLimit === countAttributes++) {
                    html += '<a href="#" class="' + moreClass + '"><span>' + moreText + '</span></a>';
                }

                id = this.id;
                type = parseInt(optionConfig[id].type, 10);
                value = optionConfig[id].hasOwnProperty('value') ?
                    $('<i></i>').text(optionConfig[id].value).html() : '';
                thumb = optionConfig[id].hasOwnProperty('thumb') ? optionConfig[id].thumb : '';
                width = _.has(sizeConfig, 'swatchThumb') ? sizeConfig.swatchThumb.width : 110;
                height = _.has(sizeConfig, 'swatchThumb') ? sizeConfig.swatchThumb.height : 90;
                label = this.label ? $('<i></i>').text(this.label).html() : '';
                attr =
                    // ' id="' + controlId + '-item-' + id + '"' +
                    ' index="' + index + '"' +
                    ' aria-checked="false"' +
                    ' aria-describedby="' + controlId + '"' +
                    ' tabindex="0"' +
                    ' data-option-type="' + type + '"' +
                    ' data-option-id="' + id + '"' +
                    ' data-option-label="' + label + '"' +
                    ' aria-label="' + label + '"' +
                    ' role="option"' +
                    ' data-thumb-width="' + width + '"' +
                    ' data-thumb-height="' + height + '"';

                attr += thumb !== '' ? ' data-option-tooltip-thumb="' + thumb + '"' : '';
                attr += value !== '' ? ' data-option-tooltip-value="' + value + '"' : '';

                swatchImageWidth = _.has(sizeConfig, 'swatchImage') ? sizeConfig.swatchImage.width : 30;
                swatchImageHeight = _.has(sizeConfig, 'swatchImage') ? sizeConfig.swatchImage.height : 20;

                if (!this.hasOwnProperty('products') || this.products.length <= 0) {
                    attr += ' data-option-empty="true"';
                }

                if (type === 0) {
                    // Text
                    html += '<div class="' + optionClass + ' text" ' + attr + '>' + (value ? value : label) +
                        '</div>';
                } else if (type === 1) {
                    // Color
                    html += '<div class="' + optionClass + ' color" ' + attr +
                        ' style="background: ' + value +
                        ' no-repeat center; background-size: initial;">' + '' +
                        '</div>';
                } else if (type === 2) {
                    // Image
                    html += '<div class="' + optionClass + ' image" ' + attr +
                        ' style="background: url(' + value + ') no-repeat center; background-size: initial;width:' +
                        swatchImageWidth + 'px; height:' + swatchImageHeight + 'px">' + '' +
                        '</div>';
                } else if (type === 3) {
                    // Clear
                    html += '<div class="' + optionClass + '" ' + attr + '></div>';
                } else {
                    // Default
                    html += '<div class="' + optionClass + '" ' + attr + '>' + label + '</div>';
                }
            });

            return html;
        },

        /**
         * Render select by part of config
         *
         * @param {Object} config
         * @param {String} chooseText
         * @returns {String}
         * @private
         */
        _RenderSwatchSelect: function (config, chooseText) {
            var html;

            if (this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
                return '';
            }

            html =
                '<select class="' + this.options.classes.selectClass + ' ' + config.code + '">' +
                '<option value="0" data-option-id="0">' + chooseText + '</option>';

            $.each(config.options, function () {
                var label = this.label,
                    attr = ' value="' + this.id + '" data-option-id="' + this.id + '"';

                if (!this.hasOwnProperty('products') || this.products.length <= 0) {
                    attr += ' data-option-empty="true"';
                }

                html += '<option ' + attr + '>' + label + '</option>';
            });

            html += '</select>';

            return html;
        },

        /**
         * Input for submit form.
         * This control shouldn't have "type=hidden", "display: none" for validation work :(
         *
         * @param {Object} config
         * @private
         */
        _RenderFormInput: function (config) {
            return '<input class="' + this.options.classes.attributeInput + ' super-attribute-select" ' +
                'name="super_attribute[' + config.id + ']" ' +
                'type="text" ' +
                'value="" ' +
                'data-selector="super_attribute[' + config.id + ']" ' +
                'data-validate="{required: true}" ' +
                'aria-required="true" ' +
                'aria-invalid="false">';
        },

        /**
         * Event listener
         *
         * @private
         */
        _EventListener: function () {
            var $widget = this,
                options = this.options.classes,
                target;

            $widget.element.on('click', '.' + options.optionClass, function () {
                return $widget._OnClick($(this), $widget);
            });

            $widget.element.on('change', '.' + options.selectClass, function () {
                return $widget._OnChange($(this), $widget);
            });

            $widget.element.on('click', '.' + options.moreButton, function (e) {
                e.preventDefault();

                return $widget._OnMoreClick($(this));
            });

            $widget.element.on('keydown', function (e) {
                if (e.which === 13) {
                    target = $(e.target);

                    if (target.is('.' + options.optionClass)) {
                        return $widget._OnClick(target, $widget);
                    } else if (target.is('.' + options.selectClass)) {
                        return $widget._OnChange(target, $widget);
                    } else if (target.is('.' + options.moreButton)) {
                        e.preventDefault();

                        return $widget._OnMoreClick(target);
                    }
                }
            });
        },

        /**
         * Load media gallery using ajax or json config.
         *
         * @private
         */
        _loadMedia: function () {
            var $main = this.inProductList ?
                    this.element.parents('.product-item-info') :
                    this.element.parents('.column.main'),
                images;

            if (this.options.useAjax) {
                this._debouncedLoadProductMedia();
            }  else {
                images = this.options.jsonConfig.images[this.getProduct()];

                if (!images) {
                    images = this.options.mediaGalleryInitial;
                }
                this.updateBaseImage(this._sortImages(images), $main, !this.inProductList);
            }
        },

        /**
         * Sorting images array
         *
         * @private
         */
        _sortImages: function (images) {
            return _.sortBy(images, function (image) {
                return parseInt(image.position, 10);
            });
        },

        /**
         * Event for swatch options
         *
         * @param {Object} $this
         * @param {Object} $widget
         * @private
         */
        _OnClick: function ($this, $widget) {
            var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
                $wrapper = $this.parents('.' + $widget.options.classes.attributeOptionsWrapper),
                $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass),
                attributeId = $parent.data('attribute-id'),
                $input = $parent.find('.' + $widget.options.classes.attributeInput),
                checkAdditionalData = JSON.parse(this.options.jsonSwatchConfig[attributeId]['additional_data']),
                $priceBox = $widget._getProductWrapper().find(this.options.selectorProductPrice);

            if ($widget.inProductList) {
                $input = $widget.productForm.find(
                    '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
                );
            }

            if ($this.hasClass('disabled')) {
                return;
            }

            if ($this.hasClass('selected')) {
                $parent.removeAttr('data-option-selected').find('.selected').removeClass('selected');
                $input.val('');
                $label.text('');
                $this.attr('aria-checked', false);
            } else {
                $parent.attr('data-option-selected', $this.data('option-id')).find('.selected').removeClass('selected');
                $label.text($this.data('option-label'));
                $input.val($this.data('option-id'));
                $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
                $this.addClass('selected');
                $widget._toggleCheckedAttributes($this, $wrapper);
            }

            $widget._Rebuild();

            if ($priceBox.priceBox('instance')) {
                $widget._UpdatePrice();
            }

            $(document).trigger('updateMsrpPriceBlock',
                [
                    this._getSelectedOptionPriceIndex(),
                    $widget.options.jsonConfig.optionPrices,
                    $priceBox
                ]);

            if (parseInt(checkAdditionalData['update_product_preview_image'], 10) === 1) {
                $widget._loadMedia();
            }

            $input.trigger('change');
        },

        /**
         * Get selected option price index
         *
         * @return {String|undefined}
         * @private
         */
        _getSelectedOptionPriceIndex: function () {
            var allowedProduct = this._getAllowedProductWithMinPrice(this._CalcProducts());

            if (_.isEmpty(allowedProduct)) {
                return undefined;
            }

            return allowedProduct;
        },

        /**
         * Get human readable attribute code (eg. size, color) by it ID from configuration
         *
         * @param {Number} attributeId
         * @returns {*}
         * @private
         */
        _getAttributeCodeById: function (attributeId) {
            var attribute = this.options.jsonConfig.mappedAttributes[attributeId];

            return attribute ? attribute.code : attributeId;
        },

        /**
         * Toggle accessibility attributes
         *
         * @param {Object} $this
         * @param {Object} $wrapper
         * @private
         */
        _toggleCheckedAttributes: function ($this, $wrapper) {
            $wrapper.attr('aria-activedescendant', $this.attr('id'))
                    .find('.' + this.options.classes.optionClass).attr('aria-checked', false);
            $this.attr('aria-checked', true);
        },

        /**
         * Event for select
         *
         * @param {Object} $this
         * @param {Object} $widget
         * @private
         */
        _OnChange: function ($this, $widget) {
            var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
                attributeId = $parent.data('attribute-id'),
                $input = $parent.find('.' + $widget.options.classes.attributeInput);

            if ($widget.productForm.length > 0) {
                $input = $widget.productForm.find(
                    '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
                );
            }

            if ($this.val() > 0) {
                $parent.attr('data-option-selected', $this.val());
                $input.val($this.val());
            } else {
                $parent.removeAttr('data-option-selected');
                $input.val('');
            }

            $widget._Rebuild();
            $widget._UpdatePrice();
            $widget._loadMedia();
            $input.trigger('change');
        },

        /**
         * Event for more switcher
         *
         * @param {Object} $this
         * @private
         */
        _OnMoreClick: function ($this) {
            $this.nextAll().show();
            $this.blur().remove();
        },

        /**
         * Rewind options for controls
         *
         * @private
         */
        _Rewind: function (controls) {
            controls.find('div[data-option-id], option[data-option-id]').removeClass('disabled').removeAttr('disabled');
            controls.find('div[data-option-empty], option[data-option-empty]')
                .attr('disabled', true)
                .addClass('disabled')
                .attr('tabindex', '-1');
        },

        /**
         * Rebuild container
         *
         * @private
         */
        _Rebuild: function () {
            var $widget = this,
                controls = $widget.element.find('.' + $widget.options.classes.attributeClass + '[data-attribute-id]'),
                selected = controls.filter('[data-option-selected]');

            // Enable all options
            $widget._Rewind(controls);

            // done if nothing selected
            if (selected.length <= 0) {
                return;
            }

            // Disable not available options
            controls.each(function () {
                var $this = $(this),
                    id = $this.data('attribute-id'),
                    products = $widget._CalcProducts(id);

                if (selected.length === 1 && selected.first().data('attribute-id') === id) {
                    return;
                }

                $this.find('[data-option-id]').each(function () {
                    var $element = $(this),
                        option = $element.data('option-id');

                    if (!$widget.optionsMap.hasOwnProperty(id) ||
                        !$widget.optionsMap[id].hasOwnProperty(option) ||
                        $element.hasClass('selected') ||
                        $element.is(':selected')
                    ) {
                        return;
                    }

                    if (_.intersection(products, $widget.optionsMap[id][option].products).length <= 0) {
                        $element.attr('disabled', true).addClass('disabled');
                    }
                });
            });
        },

        /**
         * Get selected product list
         *
         * @returns {Array}
         * @private
         */
        _CalcProducts: function ($skipAttributeId) {
            var $widget = this,
                selectedOptions = '.' + $widget.options.classes.attributeClass + '[data-option-selected]',
                products = [];

            // Generate intersection of products
            $widget.element.find(selectedOptions).each(function () {
                var id = $(this).data('attribute-id'),
                    option = $(this).attr('data-option-selected');

                if ($skipAttributeId !== undefined && $skipAttributeId === id) {
                    return;
                }

                if (!$widget.optionsMap.hasOwnProperty(id) || !$widget.optionsMap[id].hasOwnProperty(option)) {
                    return;
                }

                if (products.length === 0) {
                    products = $widget.optionsMap[id][option].products;
                } else {
                    products = _.intersection(products, $widget.optionsMap[id][option].products);
                }
            });

            return products;
        },

        /**
         * Update total price
         *
         * @private
         */
        _UpdatePrice: function () {
            var $widget = this,
                $product = $widget._getProductWrapper(),
                $productPrice = $product.find(this.options.selectorProductPrice),
                result = $widget._getNewPrices(),
                tierPriceHtml,
                isShow;

            $productPrice.trigger(
                'updatePrice',
                {
                    'prices': $widget._getPrices(result, $productPrice.priceBox('option').prices)
                }
            );

            isShow = typeof result != 'undefined' && result.oldPrice.amount !== result.finalPrice.amount;

            $productPrice.find('span').first().toggleClass('special-price', isShow);

            $product.find(this.options.slyOldPriceSelector)[isShow ? 'show' : 'hide']();

            if (typeof result != 'undefined' && result.tierPrices && result.tierPrices.length) {
                if (this.options.tierPriceTemplate) {
                    tierPriceHtml = _.template(this.options.tierPriceTemplate)({
                        'tierPrices': result.tierPrices,
                        '$t': $.__,
                        'currencyFormat': this.options.jsonConfig.currencyFormat,
                        'priceUtils': $.catalog.priceUtils
                    });
                    $(this.options.tierPriceBlockSelector).html(tierPriceHtml).show();
                }
            } else {
                $(this.options.tierPriceBlockSelector).hide();
            }

            $(this.options.normalPriceLabelSelector).hide();

            _.each($('.' + this.options.classes.attributeOptionsWrapper), function (attribute) {
                if ($(attribute).find('.' + this.options.classes.optionClass + '.selected').length === 0) {
                    if ($(attribute).find('.' + this.options.classes.selectClass).length > 0) {
                        _.each($(attribute).find('.' + this.options.classes.selectClass), function (dropdown) {
                            if ($(dropdown).val() === '0') {
                                $(this.options.normalPriceLabelSelector).show();
                            }
                        }.bind(this));
                    } else {
                        $(this.options.normalPriceLabelSelector).show();
                    }
                }
            }.bind(this));
        },

        /** [_getProductWrapper description] */
        _getProductWrapper: function () {
            var selector = this.options.selectorProduct.replace('.product-item-details', '.product-item-info'),
                wrapper = this.element.closest(selector);

            if (!wrapper.length) {
                wrapper = this.element.closest('.column.main').find(selector);
            }

            return wrapper;
        },

        /**
         * Get new prices for selected options
         *
         * @returns {*}
         * @private
         */
        _getNewPrices: function () {
            var $widget = this,
                newPrices = $widget.options.jsonConfig.prices,
                allowedProduct = this._getAllowedProductWithMinPrice(this._CalcProducts());

            if (!_.isEmpty(allowedProduct)) {
                newPrices = this.options.jsonConfig.optionPrices[allowedProduct];
            }

            return newPrices;
        },

        /**
         * Get prices
         *
         * @param {Object} newPrices
         * @param {Object} displayPrices
         * @returns {*}
         * @private
         */
        _getPrices: function (newPrices, displayPrices) {
            var $widget = this;

            if (_.isEmpty(newPrices)) {
                newPrices = $widget._getNewPrices();
            }
            _.each(displayPrices, function (price, code) {

                if (newPrices[code]) {
                    displayPrices[code].amount = newPrices[code].amount - displayPrices[code].amount;
                }
            });

            return displayPrices;
        },

        /**
         * Get product with minimum price from selected options.
         *
         * @param {Array} allowedProducts
         * @returns {String}
         * @private
         */
        _getAllowedProductWithMinPrice: function (allowedProducts) {
            var optionPrices = this.options.jsonConfig.optionPrices,
                product = {},
                optionFinalPrice, optionMinPrice;

            _.each(allowedProducts, function (allowedProduct) {
                optionFinalPrice = parseFloat(optionPrices[allowedProduct].finalPrice.amount);

                if (_.isEmpty(product) || optionFinalPrice < optionMinPrice) {
                    optionMinPrice = optionFinalPrice;
                    product = allowedProduct;
                }
            }, this);

            return product;
        },

        /**
         * Gets all product media and change current to the needed one
         *
         * @private
         */
        _LoadProductMedia: function () {
            var $widget = this,
                $this = $widget.element,
                productData = this._determineProductData(),
                mediaCallData,
                mediaCacheKey,

                /**
                 * Processes product media data
                 *
                 * @param {Object} data
                 * @returns void
                 */
                mediaSuccessCallback = function (data) {
                    if (!(mediaCacheKey in $widget.options.mediaCache)) {
                        $widget.options.mediaCache[mediaCacheKey] = data;
                    }
                    $widget._ProductMediaCallback($this, data, productData.isInProductView);
                };

            if (!$widget.options.mediaCallback) {
                return;
            }

            mediaCallData = {
                'product_id': this.getProduct()
            };

            mediaCacheKey = JSON.stringify(mediaCallData);

            if (mediaCacheKey in $widget.options.mediaCache) {
                $widget._EnableProductMediaLoader($this);
                mediaSuccessCallback($widget.options.mediaCache[mediaCacheKey]);
            } else {
                mediaCallData.isAjax = true;
                $widget._EnableProductMediaLoader($this);
                $widget.xhr = $.request.get({
                    url: $widget.options.mediaCallback,
                    data: mediaCallData
                }).then(function (response) {
                    mediaSuccessCallback(response.body);
                });
            }
        },

        /**
         * Enable loader
         *
         * @param {Object} element
         * @private
         */
        _EnableProductMediaLoader: function (element) {
            element.parents('.product-item-info')
                .addClass('product-item-info-image-loading')
                .find('.product-image-photo')
                .addClass(this.options.classes.loader);
        },

        /**
         * Disable loader
         *
         * @param {Object} element
         * @private
         */
        _DisableProductMediaLoader: function (element) {
            element.parents('.product-item-info')
                .removeClass('product-item-info-image-loading')
                .find('.product-image-photo')
                .removeClass(this.options.classes.loader);
        },

        /**
         * Callback for product media
         *
         * @param {Object} $this
         * @param {String} response
         * @param {Boolean} isInProductView
         * @private
         */
        _ProductMediaCallback: function ($this, response, isInProductView) {
            var $main = isInProductView ? $this.parents('.column.main') : $this.parents('.product-item-info'),
                $widget = this,
                images = [],

                /**
                 * Check whether object supported or not
                 *
                 * @param {Object} e
                 * @returns {*|Boolean}
                 */
                support = function (e) {
                    return e.hasOwnProperty('large') && e.hasOwnProperty('medium') && e.hasOwnProperty('small');
                };

            if (_.size($widget) < 1 || !support(response)) {
                this.updateBaseImage(this.options.mediaGalleryInitial, $main, isInProductView);

                return;
            }

            images.push({
                full: response.large,
                img: response.medium,
                thumb: response.small,
                srcset: response.srcset,
                isMain: true
            });

            if (response.hasOwnProperty('gallery')) {
                $.each(response.gallery, function () {
                    if (!support(this) || response.large === this.large) {
                        return;
                    }
                    images.push({
                        full: this.large,
                        img: this.medium,
                        thumb: this.small,
                        srcset: this.srcset
                    });
                });
            }

            this.updateBaseImage(images, $main, isInProductView);
        },

        /**
         * Check if images to update are initial and set their type
         * @param {Array} images
         */
        _setImageType: function (images) {
            var initial = this.options.mediaGalleryInitial[0].img;

            if (images[0].img === initial) {
                images = $.extend(true, [], this.options.mediaGalleryInitial);
            } else {
                images.map(function (img) {
                    if (!img.type) {
                        img.type = 'image';
                    }
                });
            }

            return images;
        },

        /**
         * Update [gallery-placeholder] or [product-image-photo]
         * @param {Array} images
         * @param {jQuery} context
         * @param {Boolean} isInProductView
         */
        updateBaseImage: function (images, context, isInProductView) {
            var self = this,
                justAnImage = images[0],
                initialImages = this.options.mediaGalleryInitial,
                imagesToUpdate,
                galleryEl = context.find(this.options.mediaGallerySelector),
                gallery,
                photo = context.find('.product-image-photo'),
                isInitial;

            if (galleryEl.gallery) {
                gallery = galleryEl.gallery('instance');
            }

            if (isInProductView) {
                if (!gallery) {
                    galleryEl.on('gallery:loaded', function () {
                        this.updateBaseImage(images, context, isInProductView);
                    }.bind(this));

                    return;
                }

                imagesToUpdate = images.length ? this._setImageType($.extend(true, [], images)) : [];
                isInitial = _.isEqual(imagesToUpdate, initialImages);

                if (this.options.gallerySwitchStrategy === 'prepend' && !isInitial) {
                    imagesToUpdate = imagesToUpdate.concat(initialImages);
                }

                gallery.updateData(imagesToUpdate);
            } else if (justAnImage && justAnImage.img) {
                photo.on('load', function () {
                    setTimeout(function () {
                        self._DisableProductMediaLoader(self.element);
                    }, 100);
                });

                photo.attr('src', justAnImage.img);

                if (justAnImage.srcset && justAnImage.srcset.medium) {
                    photo.attr('srcset', justAnImage.srcset.medium);

                    // eslint-disable-next-line max-depth
                    if (!photo.attr('sizes')) {
                        photo.attr('sizes', photo.attr('data-sizes'));
                    }
                } else {
                    photo.attr('data-sizes', photo.attr('sizes'));
                    photo.removeAttr('sizes');
                }
            }
        },

        /**
         * Emulate mouse click on all swatches that should be selected
         * @param {Object} [selectedAttributes]
         * @private
         */
        _EmulateSelected: function (selectedAttributes) {
            $.each(selectedAttributes, function (attributeCode, optionId) {
                var elem = this.element.find('.' + this.options.classes.attributeClass +
                    '[data-attribute-code="' + attributeCode + '"] [data-option-id="' + optionId + '"]'),
                    parentInput = elem.parent();

                if (elem.hasClass('selected')) {
                    return;
                }

                if (parentInput.hasClass(this.options.classes.selectClass)) {
                    parentInput.val(optionId);
                    parentInput.trigger('change');
                } else {
                    elem.trigger('click');
                }
            }.bind(this));
        },

        /**
         * Emulate mouse click or selection change on all swatches that should be selected
         * @param {Object} [selectedAttributes]
         * @private
         */
        _EmulateSelectedByAttributeId: function (selectedAttributes) {
            $.each(selectedAttributes, function (attributeId, optionId) {
                var elem = this.element.find('.' + this.options.classes.attributeClass +
                    '[data-attribute-id="' + attributeId + '"] [data-option-id="' + optionId + '"]'),
                    parentInput = elem.parent();

                if (elem.hasClass('selected')) {
                    return;
                }

                if (parentInput.hasClass(this.options.classes.selectClass)) {
                    parentInput.val(optionId);
                    parentInput.trigger('change');
                } else {
                    elem.trigger('click');
                }
            }.bind(this));
        },

        /**
         * Get default options values settings with either URL query parameters
         * @private
         */
        _getSelectedAttributes: function () {
            var hashIndex = window.location.href.indexOf('#'),
                selectedAttributes = {},
                params;

            if (hashIndex !== -1) {
                params = $.parseQuery(window.location.href.substr(hashIndex + 1));

                selectedAttributes = _.invert(_.mapObject(_.invert(params), function (attributeId) {
                    return this.option('jsonConfig.mappedAttributes.' + attributeId, {}).code || attributeId;
                }.bind(this)));
            }

            return selectedAttributes;
        },

        /**
         * Callback which fired after gallery gets initialized.
         *
         * @param {HTMLElement} element - DOM element associated with a gallery.
         */
        _onGalleryLoaded: function (element) {
            this.options.mediaGalleryInitial = element.gallery('instance').returnCurrentImages();
        },

        /**
         * Sets mediaCache for cases when jsonConfig contains preSelectedGallery on layered navigation result pages
         *
         * @private
         */
        _setPreSelectedGallery: function () {
            var mediaCallData;

            if (this.options.jsonConfig.preSelectedGallery) {
                mediaCallData = {
                    'product_id': this.getProduct()
                };

                this.options.mediaCache[JSON.stringify(mediaCallData)] = this.options.jsonConfig.preSelectedGallery;
            }
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('abstractConfigurableUpdater', {
        /** [create description] */
        create: function () {
            this.productOptions = {};

            this.cartSubscription = $.sections.get('cart').subscribe(function (updateCartData) {
                if (this.setProductOptions(updateCartData)) {
                    this.updateOptions();
                }
            }.bind(this));

            $('#product_addtocart_form').on(this.eventName, function () {
                this.setProductOptions($.sections.get('cart')());
                this.updateOptions();
            }.bind(this));
        },

        /** [destroy description] */
        destroy: function () {
            this.cartSubscription.dispose();
            this._super();
        },

        updateOptions: _.noop,

        /** [setProductOptions description] */
        setProductOptions: function (data) {
            var product,
                changedProductOptions,
                productId = $('#product_addtocart_form [name="product"]').val(),
                itemId = $('#product_addtocart_form [name="item"]').val();

            if (!data || !data.items || !data.items.length || !productId || !itemId) {
                return;
            }

            product = _.find(data.items, function (item) {
                return item.item_id === itemId && item.product_id === productId;
            });

            if (!product || !product.options) {
                return;
            }

            changedProductOptions = product.options.reduce(function (obj, val) {
                obj[val.option_id] = val.option_value;

                return obj;
            }, {});

            if (JSON.stringify(this.productOptions || {}) === JSON.stringify(changedProductOptions || {})) {
                return false;
            }

            this.productOptions = changedProductOptions;

            return true;
        }
    });

    $.widget('swatchUpdater', 'abstractConfigurableUpdater', {
        eventName: 'swatch.initialized',

        /** [updateOptions description] */
        updateOptions: function () {
            var swatchWidget = $('.swatch-opt').data('mageSwatchRenderer');

            if (!swatchWidget || !swatchWidget._EmulateSelectedByAttributeId) {
                return;
            }

            // timout is used to wait until price-box widget will be mounted
            setTimeout(function () {
                swatchWidget._EmulateSelectedByAttributeId(this.productOptions);
            }.bind(this), 80);
        }
    });

    $.widget('configurableUpdater', 'abstractConfigurableUpdater', {
        eventName: 'configurable.initialized',

        /** [updateOptions description] */
        updateOptions: function () {
            var configurableWidget = $('#product_addtocart_form').data('mageConfigurable');

            if (!configurableWidget) {
                return;
            }

            configurableWidget.options.values = this.productOptions || {};
            configurableWidget._configureForValues();
        }
    });

    $(document).on('breeze:load', function () {
        if (window.location.href.indexOf('checkout/cart/configure') === -1) {
            return;
        }

        $.fn.swatchUpdater();
        $.fn.configurableUpdater();
    });
})();
