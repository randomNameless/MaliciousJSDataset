(function () {
    'use strict';

    $.widget('productValidate', {
        component: 'Magento_Catalog/js/validate-product',

        /** Initialize plugin */
        create: function () {
            this.element.validator();
            this.element.catalogAddToCart(this.options);
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $(document).on('breeze:mount:Magento_Catalog/js/product/view/provider', function (event, data) {
        var products = $.storage.ns('product_data_storage'),
            recentlyViewed = $.storage.ns('recently_viewed_product'),
            scope = data.settings.data.productCurrentScope,
            scopeId = $.breeze.getScopeId(scope);

        _.each(data.settings.data.items, function (item, key) {
            products.set(key, item);
            recentlyViewed.set(scope + '-' + scopeId + '-' + key, {
                'added_at': new Date().getTime() / 1000,
                'product_id': key,
                'scope_id': scopeId
            });
        });
    });
})();

/* global _ */
(function () {
    'use strict';

    var globalPriceFormat = {
        requiredPrecision: 2,
        integerRequired: 1,
        decimalSymbol: ',',
        groupSymbol: ',',
        groupLength: ','
    };

    /**
     * Repeats {string} {times} times
     * @param  {String} string
     * @param  {Number} times
     * @return {String}
     */
    function stringPad(string, times) {
        return (new Array(times + 1)).join(string);
    }

    /**
     * Formatter for price amount
     * @param  {Number}  amount
     * @param  {Object}  format
     * @param  {Boolean} isShowSign
     * @return {String}              Formatted value
     */
    function formatPrice(amount, format, isShowSign) {
        var s = '',
            precision, integerRequired, decimalSymbol, groupSymbol, groupLength, pattern, i, pad, j, re, r, am;

        format = _.extend(globalPriceFormat, format);

        // copied from price-option.js | Could be refactored with varien/js.js

        precision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;
        integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;
        decimalSymbol = format.decimalSymbol === undefined ? ',' : format.decimalSymbol;
        groupSymbol = format.groupSymbol === undefined ? '.' : format.groupSymbol;
        groupLength = format.groupLength === undefined ? 3 : format.groupLength;
        pattern = format.pattern || '%s';

        if (isShowSign === undefined || isShowSign === true) {
            s = amount < 0 ? '-' : isShowSign ? '+' : '';
        } else if (isShowSign === false) {
            s = '';
        }
        pattern = pattern.indexOf('{sign}') < 0 ? s + pattern : pattern.replace('{sign}', s);

        // we're avoiding the usage of to fixed, and using round instead with the e representation to address
        // numbers like 1.005 = 1.01. Using ToFixed to only provide trailing zeroes in case we have a whole number
        i = parseInt(
                amount = Number(Math.round(Math.abs(+amount || 0) + 'e+' + precision) + ('e-' + precision)),
                10
            ) + '';
        pad = i.length < integerRequired ? integerRequired - i.length : 0;

        i = stringPad('0', pad) + i;

        j = i.length > groupLength ? i.length % groupLength : 0;
        re = new RegExp('(\\d{' + groupLength + '})(?=\\d)', 'g');

        // replace(/-/, 0) is only for fixing Safari bug which appears
        // when Math.abs(0).toFixed() executed on '0' number.
        // Result is '0.-0' :(

        am = Number(Math.round(Math.abs(amount - i) + 'e+' + precision) + ('e-' + precision));
        r = (j ? i.substr(0, j) + groupSymbol : '') +
            i.substr(j).replace(re, '$1' + groupSymbol) +
            (precision ? decimalSymbol + am.toFixed(precision).replace(/-/, 0).slice(2) : '');

        return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    /**
     * Deep clone of Object. Doesn't support functions
     * @param {Object} obj
     * @return {Object}
     */
    function objectDeepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Helper to find ID in name attribute
     * @param   {jQuery} element
     * @returns {undefined|String}
     */
    function findOptionId(element) {
        var re, id, name;

        if (!element) {
            return id;
        }
        name = $(element).attr('name');

        if (name.indexOf('[') !== -1) {
            re = /\[([^\]]+)?\]/;
        } else {
            re = /_([^\]]+)?_/; // just to support file-type-option
        }
        id = re.exec(name) && re.exec(name)[1];

        if (id) {
            return id;
        }
    }

    $.catalog = $.catalog || {};
    $.catalog.priceUtils = {
        formatPrice: formatPrice,
        deepClone: objectDeepClone,
        strPad: stringPad,
        findOptionId: findOptionId
    };
    $.breezemap['Magento_Catalog/js/price-utils'] = $.catalog.priceUtils;
})();
/* global _ */
(function () {
    'use strict';

    var globalOptions = {
        productId: null,
        priceConfig: null,
        prices: {},
        priceTemplate: '<span class="price"><%- data.formatted %></span>'
    };

    $.widget('priceBox', {
        component: 'priceBox',
        options: globalOptions,
        qtyInfo: '#qty',

        /**
         * Widget initialisation.
         * Every time when option changed prices also can be changed. So
         * changed options.prices -> changed cached prices -> recalculation -> redraw price box
         */
        _init: function () {
            var box = this.element;

            box.trigger('updatePrice');
            this.cache.displayPrices = $.catalog.priceUtils.deepClone(this.options.prices);
        },

        /**
         * Widget creating.
         */
        _create: function () {
            var box = this.element;

            this.cache = {};
            this._setDefaultsFromPriceConfig();
            this._setDefaultsFromDataSet();

            box.on('reloadPrice', this.reloadPrice.bind(this));
            box.on('updatePrice', this.onUpdatePrice.bind(this));
            $(this.qtyInfo).on('input', this.updateProductTierPrice.bind(this));

            setTimeout(() => {
                box.trigger('price-box-initialized');
            });
        },

        /**
         * Call on event updatePrice. Proxy to updatePrice method.
         * @param {Event} event
         * @param {Object} prices
         */
        onUpdatePrice: function (event, prices) {
            return this.updatePrice(prices);
        },

        /**
         * Updates price via new (or additional values).
         * It expects object like this:
         * -----
         *   "option-hash":
         *      "price-code":
         *         "amount": 999.99999,
         *         ...
         * -----
         * Empty option-hash object or empty price-code object treats as zero amount.
         * @param {Object} newPrices
         */
        updatePrice: function (newPrices) {
            var prices = this.cache.displayPrices,
                additionalPrice = {},
                pricesCode = [],
                priceValue, origin, finalPrice;

            this.cache.additionalPriceObject = this.cache.additionalPriceObject || {};

            if (newPrices) {
                $.extend(this.cache.additionalPriceObject, newPrices);
            }

            if (!_.isEmpty(additionalPrice)) {
                pricesCode = _.keys(additionalPrice);
            } else if (!_.isEmpty(prices)) {
                pricesCode = _.keys(prices);
            }

            _.each(this.cache.additionalPriceObject, function (additional) {
                if (additional && !_.isEmpty(additional)) {
                    pricesCode = _.keys(additional);
                }
                _.each(pricesCode, function (priceCode) {
                    priceValue = additional[priceCode] || {};
                    priceValue.amount = +priceValue.amount || 0;
                    priceValue.adjustments = priceValue.adjustments || {};

                    additionalPrice[priceCode] = additionalPrice[priceCode] || {
                            'amount': 0,
                            'adjustments': {}
                        };
                    additionalPrice[priceCode].amount =  0 + (additionalPrice[priceCode].amount || 0) +
                        priceValue.amount;
                    _.each(priceValue.adjustments, function (adValue, adCode) {
                        additionalPrice[priceCode].adjustments[adCode] = 0 +
                            (additionalPrice[priceCode].adjustments[adCode] || 0) + adValue;
                    });
                });
            });

            if (_.isEmpty(additionalPrice)) {
                this.cache.displayPrices = $.catalog.priceUtils.deepClone(this.options.prices);
            } else {
                _.each(additionalPrice, function (option, priceCode) {
                    origin = this.options.prices[priceCode] || {};
                    finalPrice = prices[priceCode] || {};
                    option.amount = option.amount || 0;
                    origin.amount = origin.amount || 0;
                    origin.adjustments = origin.adjustments || {};
                    finalPrice.adjustments = finalPrice.adjustments || {};

                    finalPrice.amount = 0 + origin.amount + option.amount;
                    _.each(option.adjustments, function (pa, paCode) {
                        finalPrice.adjustments[paCode] = 0 + (origin.adjustments[paCode] || 0) + pa;
                    });
                }, this);
            }

            this.element.trigger('reloadPrice');
        },

        /*eslint-disable no-extra-parens*/
        /** Render price unit block. */
        reloadPrice: function () {
            var priceFormat = (this.options.priceConfig && this.options.priceConfig.priceFormat) || {},
                priceTemplate = _.template(this.options.priceTemplate);

            _.each(this.cache.displayPrices, function (price, priceCode) {
                price.final = _.reduce(price.adjustments, function (memo, amount) {
                    return memo + amount;
                }, price.amount);

                price.formatted = $.catalog.priceUtils.formatPrice(price.final, priceFormat);

                $('[data-price-type="' + priceCode + '"]', this.element).html(priceTemplate({
                    data: price
                }));
            }, this);
        },

        /** [setDefault description] */
        setDefault: function (prices) {
            this.cache.displayPrices = $.catalog.priceUtils.deepClone(prices);
            this.options.prices = $.catalog.priceUtils.deepClone(prices);
        },

        /** setDefaultsFromDataSet */
        _setDefaultsFromDataSet: function () {
            var box = this.element,
                priceHolders = $('[data-price-type]', box),
                prices = this.options.prices;

            this.options.productId = box.data('productId');

            if (_.isEmpty(prices)) {
                priceHolders.each(function (index, element) {
                    var type = $(element).data('priceType'),
                        amount = parseFloat($(element).data('priceAmount'));

                    if (type && !_.isNaN(amount)) {
                        prices[type] = {
                            amount: amount
                        };
                    }
                });
            }
        },

        /**
         * setDefaultsFromPriceConfig
         */
        _setDefaultsFromPriceConfig: function () {
            var config = this.options.priceConfig;

            if (config && config.prices) {
                this.options.prices = config.prices;
            }
        },

        /**
         * Updates product final price according to tier prices
         */
        updateProductTierPrice: function () {
            var productQty = $(this.qtyInfo).val(),
                originalPrice = this.options.prices.finalPrice.amount,
                tierPrice;

            if (!this.options.priceConfig || !this.options.priceConfig.tierPrices) {
                return;
            }

            _.find(this.options.priceConfig.tierPrices, function (rule) {
                if (productQty < rule.qty) {
                    return true;
                }

                tierPrice = rule.price;
            });

            this.updatePrice({
                prices: {
                    finalPrice: {
                        amount: tierPrice - originalPrice
                    }
                }
            });
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    var globalOptions = {
        productId: null,
        priceHolderSelector: '.price-box', //data-role="priceBox"
        optionsSelector: '.product-custom-option',
        optionConfig: {},
        optionHandlers: {},
        optionTemplate: '<%= data.label %>' +
        '<% if (data.finalPrice.value > 0) { %>' +
        ' +<%- data.finalPrice.formatted %>' +
        '<% } else if (data.finalPrice.value < 0) { %>' +
        ' <%- data.finalPrice.formatted %>' +
        '<% } %>',
        controlContainer: 'dd'
    };

    /**
     * Custom option preprocessor
     * @param  {jQuery} element
     * @param  {Object} optionsConfig - part of config
     * @return {Object}
     */
    function defaultGetOptionValue(element, optionsConfig) {
        var changes = {},
            optionValue = element.val(),
            optionId = $.catalog.priceUtils.findOptionId(element[0]),
            optionName = element.prop('name'),
            optionType = element.prop('type'),
            optionConfig = optionsConfig[optionId],
            optionHash = optionName;

        switch (optionType) {
            case 'text':
            case 'textarea':
                changes[optionHash] = optionValue ? optionConfig.prices : {};
                break;

            case 'radio':
                if (element.is(':checked')) {
                    changes[optionHash] = optionConfig[optionValue] && optionConfig[optionValue].prices || {};
                }
                break;

            case 'select-one':
                changes[optionHash] = optionConfig[optionValue] && optionConfig[optionValue].prices || {};
                break;

            case 'select-multiple':
                _.each(optionConfig, function (row, optionValueCode) {
                    optionHash = optionName + '##' + optionValueCode;
                    changes[optionHash] = _.contains(optionValue, optionValueCode) ? row.prices : {};
                });
                break;

            case 'checkbox':
                optionHash = optionName + '##' + optionValue;
                changes[optionHash] = element.is(':checked') ? optionConfig[optionValue].prices : {};
                break;

            case 'file':
                // Checking for 'disable' property equal to checking DOMNode with id*="change-"
                changes[optionHash] = optionValue || element.prop('disabled') ? optionConfig.prices : {};
                break;
        }

        return changes;
    }

    $.widget('priceOptions', {
        component: 'priceOptions',
        options: globalOptions,

        /**
         * @private
         */
        _init: function () {
            // timout is used to wait until price-box widget will be mounted
            setTimeout(function () {
                $(this.options.optionsSelector, this.element).trigger('change');
            }.bind(this), 80);
        },

        /**
         * Widget creating method.
         * Triggered once.
         * @private
         */
        _create: function () {
            var form = this.element,
                options = $(this.options.optionsSelector, form),
                priceBox = $(this.options.priceHolderSelector, $(this.options.optionsSelector).element);

            if (priceBox.priceBox('instance')) {
                this._onPriceFormatReady(priceBox);
            } else {
                priceBox.on('price-box-initialized', function () {
                    this._onPriceFormatReady(priceBox);
                }.bind(this));
            }

            options.on('change', this._onOptionChanged.bind(this));
        },

        _onPriceFormatReady: function (priceBox) {
            var options = $(this.options.optionsSelector, this.element),
                priceConfig = priceBox.priceBox('option').priceConfig;

            if (priceConfig) {
                if (priceConfig.optionTemplate) {
                    this._setOption('optionTemplate', priceConfig.optionTemplate);
                }
                this._setOption('priceFormat', priceConfig.priceFormat);
            }

            this._applyOptionNodeFix(options);
        },

        /**
         * Custom option change-event handler
         * @param {Event} event
         * @private
         */
        _onOptionChanged: function (event) {
            var changes,
                option = $(event.target),
                handler = this.options.optionHandlers[option.data('role')];

            option.data('optionContainer', option.closest(this.options.controlContainer));

            if (handler && handler instanceof Function) {
                changes = handler(option, this.options.optionConfig, this);
            } else {
                changes = defaultGetOptionValue(option, this.options.optionConfig);
            }
            $(this.options.priceHolderSelector).trigger('updatePrice', changes);
        },

        /**
         * Helper to fix issue with option nodes:
         *  - you can't place any html in option ->
         *    so you can't style it via CSS
         * @param {jQuery} options
         * @private
         */
        _applyOptionNodeFix: function (options) {
            var config = this.options,
                format = config.priceFormat,
                template = config.optionTemplate;

            template = _.template(template);
            options.filter('select').each(function (index, element) {
                var $element = $(element),
                    optionId = $.catalog.priceUtils.findOptionId($element),
                    optionConfig = config.optionConfig && config.optionConfig[optionId];

                $element.find('option').each(function (idx, option) {
                    var $option,
                        optionValue,
                        toTemplate,
                        prices;

                    $option = $(option);
                    optionValue = $option.val();

                    if (!optionValue && optionValue !== 0) {
                        return;
                    }

                    toTemplate = {
                        data: {
                            label: optionConfig[optionValue] && optionConfig[optionValue].name
                        }
                    };
                    prices = optionConfig[optionValue] ? optionConfig[optionValue].prices : null;

                    if (prices) {
                        _.each(prices, function (price, type) {
                            var value = +price.amount;

                            value += _.reduce(price.adjustments, function (sum, x) { //eslint-disable-line
                                return sum + x;
                            }, 0);
                            toTemplate.data[type] = {
                                value: value,
                                formatted: $.catalog.priceUtils.formatPrice(value, format)
                            };
                        });

                        $option.text(template(toTemplate));
                    }
                });
            });
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('breadcrumbs', {
        component: 'breadcrumbs',
        options: {
            categoryUrlSuffix: '',
            useCategoryPathInUrl: false,
            product: '',
            categoryItemSelector: '.category-item',
            menuContainer: '[data-action="navigation"] > ul'
        },

        /** Initialize plugin */
        create: function () {
            this.breadcrumbs = [{
                name: 'home',
                label: $.__('Home'),
                title: $.__('Go to Home Page'),
                link: window.BASE_URL || ''
            }];

            this._appendCatalogCrumbs();
            this._decorate(this.breadcrumbs);

            if ($('script#breadcrumbs').length) {
                this.element.html(_.template($('script#breadcrumbs').html())({
                    'breadcrumbs': this.breadcrumbs
                }));
            }
        },

        /**
         * @param {Array} list
         */
        _decorate: function (list) {
            if (list.length) {
                list[0].first = true;
            }

            if (list.length > 1) {
                list[list.length - 1].last = true;
            }
        },

        /** [_appendCatalogCrumbs description] */
        _appendCatalogCrumbs: function () {
            var self = this,
                categoryCrumbs = this._resolveCategoryCrumbs();

            categoryCrumbs.forEach(function (crumbInfo) {
                self.breadcrumbs.push(crumbInfo);
            });

            if (this.options.product) {
                self.breadcrumbs.push(this._getProductCrumb());
            }
        },

        /**
         * @return Array
         */
        _resolveCategoryCrumbs: function () {
            var menuItem = this._resolveCategoryMenuItem(),
                categoryCrumbs = [];

            if (menuItem !== null && menuItem.length) {
                categoryCrumbs.unshift(this._getCategoryCrumb(menuItem));

                while ((menuItem = this._getParentMenuItem(menuItem)) !== null) {
                    categoryCrumbs.unshift(this._getCategoryCrumb(menuItem));
                }
            }

            return categoryCrumbs;
        },

        /**
         * Returns crumb data.
         *
         * @param {Object} menuItem
         * @return {Object}
         */
        _getCategoryCrumb: function (menuItem) {
            return {
                'name': 'category',
                'label': menuItem.text(),
                'link': menuItem.attr('href'),
                'title': ''
            };
        },

        /**
         * Returns product crumb.
         *
         * @return {Object}
         */
        _getProductCrumb: function () {
            return {
                'name': 'product',
                'label': this.options.product,
                'link': '',
                'title': ''
            };
        },

        /**
         * Find parent menu item for current.
         *
         * @param {Object} menuItem
         * @return {Object|null}
         */
        _getParentMenuItem: function (menuItem) {
            var classes,
                classNav,
                parentClass,
                parentMenuItem = null;

            if (!menuItem) {
                return null;
            }

            classes = menuItem.parent().attr('class');
            classNav = classes.match(/(nav\-)[0-9]+(\-[0-9]+)+/gi);

            if (classNav) {
                classNav = classNav[0];
                parentClass = classNav.substr(0, classNav.lastIndexOf('-'));

                if (parentClass.lastIndexOf('-') !== -1) {
                    parentMenuItem = $(this.options.menuContainer).find('.' + parentClass + ' > a');
                    parentMenuItem = parentMenuItem.length ? parentMenuItem : null;
                }
            }

            return parentMenuItem;
        },

        /**
         * Returns category menu item.
         *
         * Tries to resolve category from url or from referrer as fallback and
         * find menu item from navigation menu by category url.
         *
         * @return {Object|null}
         */
        _resolveCategoryMenuItem: function () {
            var categoryUrl = this._resolveCategoryUrl(),
                menu = $(this.options.menuContainer),
                categoryMenuItem = null;

            if (categoryUrl && menu.length) {
                categoryMenuItem = menu.find(
                    this.options.categoryItemSelector +
                    ' > a[href="' + categoryUrl + '"]'
                );
            }

            return categoryMenuItem;
        },

        /**
         * @return {String}
         */
        _resolveCategoryUrl: function () {
            var categoryUrl;

            if (this.options.useCategoryPathInUrl) {
                // In case category path is used in product url - resolve category url from current url.
                categoryUrl = window.location.href.split('?')[0];
                categoryUrl = categoryUrl.substring(0, categoryUrl.lastIndexOf('/')) +
                    this.options.categoryUrlSuffix;
            } else {
                // In other case - try to resolve it from referrer (without parameters).
                categoryUrl = $.breeze.referrer;

                if (categoryUrl.indexOf('?') > 0) {
                    categoryUrl = categoryUrl.substr(0, categoryUrl.indexOf('?'));
                }
            }

            return categoryUrl;
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('gallery', {
        component: 'mage/gallery/gallery',
        options: {
            video: {
                template: '<div class="video-wrapper"><iframe src="<%- src %>"' +
                    ' width="<%- width %>" height="<%- height %>" frameborder="0" allowfullscreen' +
                    ' allow="accelerometer; autoplay; clipboard-write;' +
                    ' encrypted-media; gyroscope; picture-in-picture"></iframe></div>',
                providers: {
                    youtube: {
                        name: 'youtube',
                        regexs: [
                            /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
                            /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
                            /youtu\.be\/([a-zA-Z0-9_-]+)/
                        ],
                        params: {
                            width: 560,
                            height: 315,
                            src: 'https://www.youtube.com/embed/$id'
                        }
                    },
                    vimeo: {
                        name: 'vimeo',
                        regexs: [
                            /vimeo\.com\/(\d+)/
                        ],
                        params: {
                            width: 640,
                            height: 380,
                            src: 'https://player.vimeo.com/video/$id'
                        }
                    }
                }
            }
        },

        /** [create description] */
        create: function () {
            this.options = _.extend(this.options, this.options.options || {});
            this.gallery = this.element.parent();
            this.parent = this.gallery.parent();
            this.thumbsWrapper = this.gallery.find('.thumbnails');
            this.thumbs = this.gallery.find('.thumbnails a');
            this.stage = this.gallery.find('.stage');
            this.image = this.stage.find('.stage img');
            this.activeIndex = this.gallery.find('.thumbnails a.active').index();
            this.focusTrap = this.createFocusTrap(this.gallery);

            if (this.activeIndex === -1) {
                this.activeIndex = 0;
            }

            this.activate(this.activeIndex);
            this.addEventListeners();

            this._trigger('loaded');
        },

        /** [addEventListeners description] */
        addEventListeners: function () {
            var self = this;

            this.image
                .on('load error', function () {
                    self.stage.spinner(false);
                })
                .on('click', function (event) {
                    event.preventDefault();
                });

            this.stage
                .on('swiped-left swiped-right', function (event) {
                    self[event.type === 'swiped-right' ? 'prev' : 'next']();
                })
                .on('click', '.next, .prev', function (event) {
                    event.preventDefault();
                    self[$(this).hasClass('prev') ? 'prev' : 'next']();
                })
                .on('click', '.main-image-wrapper', function () {
                    if (self.options.data[self.activeIndex].videoUrl) {
                        self.play();
                    } else {
                        self.open();
                    }
                });

            this.thumbsWrapper.on('click', 'a', function (event) {
                var index = $(this).index();

                event.preventDefault();

                if (index !== self.activeIndex) {
                    self.activate($(this).index());
                } else {
                    self.open();
                }
            });

            this.gallery
                .on('click', function () {
                    if (self.gallery.is(':focus-within')) {
                        return;
                    }

                    this.focus({
                        preventScroll: true
                    });
                })
                .find('.close').on('click', function (event) {
                    event.preventDefault();
                    self.close();
                });

            $(document).on('keydown.gallery', function (event) {
                if (self.options.keyboard === false) {
                    return;
                }

                if (!self.opened() &&
                    !self.gallery.is(':focus-within')
                ) {
                    return;
                }

                switch (event.key) {
                    case 'Escape':
                        self.close();
                        break;

                    case 'ArrowLeft':
                        event.preventDefault();
                        self.prev();
                        break;

                    case 'ArrowRight':
                        event.preventDefault();
                        self.next();
                        break;
                }
            });
        },

        destroy: function () {
            $(document).off('keydown.gallery');
            this.close();
            this._super();
        },

        /** Activate prev image */
        prev: function () {
            var index = this.activeIndex - 1;

            if (index < 0 || !this.thumbs.eq(index).length) {
                index = this.options.loop !== false ? this.thumbs.length - 1 : 0;
            }

            this.activate(index);
        },

        /** Activate next image */
        next: function () {
            var index = this.activeIndex + 1;

            if (!this.thumbs.eq(index).length) {
                index = this.options.loop !== false ? 0 : this.activeIndex;
            }

            this.activate(index);
        },

        /** Activate image by its index */
        activate: function (index) {
            var data,
                fullscreen = this.opened();

            index = this.options.data[index] ? index : 0;
            data = this.options.data[index];

            if (!data) {
                return;
            }

            this._trigger('beforeActivate');

            this.thumbs.eq(this.activeIndex).removeClass('active');
            this.thumbs.eq(index).addClass('active');
            this.image.siblings('source').remove();

            if (data.srcset) {
                this.image.attr('srcset', data.srcset.medium);

                if (!this.image.attr('sizes')) {
                    this.image.attr('sizes', this.image.attr('data-sizes'));
                    this.image.removeAttr('data-sizes');
                }
            }

            if (fullscreen || !data.srcset) {
                this.image.attr('data-sizes', this.image.attr('sizes'));
                this.image.removeAttr('sizes');
                this.image.removeAttr('srcset');
            }

            this.image.attr('src', fullscreen ? data.full : data.img);
            this.stage.toggleClass('video', data.videoUrl);

            if (this.image.get(0) && !this.image.get(0).complete) {
                this.stage.spinner(true, {
                    delay: 200
                });
            }

            // scroll to hidden thumbnail only if we will not affect page scroll offset
            if (fullscreen || this.thumbsWrapper.isInViewport()) {
                // timeout is used to fix scroll when swipe is used
                setTimeout(function () {
                    this.thumbs.eq(index).focus();
                }.bind(this), 50);
            }

            if (this.activeIndex !== index) {
                this.stage.find('.video-wrapper').remove();
            }

            this.activeIndex = index;

            this._trigger('afterActivate');
        },

        /** Open fullscreen gallery */
        open: function () {
            if (this.opened() || this.options.allowfullscreen === false) {
                return;
            }

            this._trigger('beforeOpen');

            this.image.removeAttr('width').removeAttr('height');

            this.parent.css({
                width: this.parent.width(),
                height: this.parent.height()
            });
            $('body').addClass('_has-modal');
            this.gallery.addClass('opened');
            this.activate(this.activeIndex);
            this.focusTrap.activate();
            $.breeze.scrollbar.hide();

            this._trigger('afterOpen');
        },

        /** Checks if gallery is opened */
        opened: function () {
            return this.gallery.hasClass('opened');
        },

        /** Close fullscreen gallery */
        close: function () {
            this._trigger('beforeClose');

            this.image
                .removeAttr('src')
                .attr('width', this.options.width)
                .attr('height', this.options.height);

            this.gallery.removeClass('opened');
            this.activate(this.activeIndex);
            $('body').removeClass('_has-modal');
            this.focusTrap.deactivate();
            $.breeze.scrollbar.reset();
            this.parent.css({
                width: '',
                height: ''
            });

            this._trigger('afterClose');
        },

        /** Plays active video */
        play: function () {
            this.stage.prepend(
                this.renderVideo(this.options.data[this.activeIndex].videoUrl)
            );
        },

        /** Render video iframe */
        renderVideo: function (url) {
            var params = {};

            _.find(this.options.video.providers, function (item) {
                var id = this.matchVideoId(url, item);

                if (id) {
                    params = _.extend({}, item.params);
                    params.src = params.src.replace('$id', id);

                    return true;
                }
            }.bind(this));

            return _.template(params.template || this.options.video.template)(params);
        },

        matchVideoId: function (url, provider) {
            var id = false;

            if (typeof provider === 'string') {
                provider = this.options.video.providers[provider];
            }

            if (!provider) {
                return id;
            }

            _.find(provider.regexs, function (regex) {
                var match = regex.exec(url);

                if (match) {
                    id = match[1];

                    return true;
                }
            });

            return id;
        },

        /** [updateData description] */
        updateData: function (data) {
            var thumbnails = [],
                activeIndex = this.activeIndex,
                index = 0,
                currentThumb = this.options.data[activeIndex].thumb,
                template = $('#gallery-thumbnail').html();

            this.options.data = data;

            _.each(data, function (picture, i) {
                // keep currently selected image if it's not the first (default) one
                if (activeIndex > 0 && picture.thumb === currentThumb) {
                    index = i;
                }

                if (!template) {
                    return;
                }

                thumbnails.push(_.template(template)($.extend({}, {
                    srcset: '',
                    classes: [
                        'item',
                        picture.videoUrl ? 'video' : ''
                    ].join(' ')
                }, picture)));
            });

            this.thumbsWrapper.html(thumbnails.join(''));

            this.thumbs = this.thumbsWrapper.find('a');

            this.activate(index);
        },

        /**
         * Returns current images list
         *
         * @returns {Array}
         */
        returnCurrentImages: function () {
            var images = [];

            _.each(this.options.data, function (item) {
                images.push(item);
            });

            return images;
        }
    });
})();

/**
* Panzoom for panning and zooming elements using CSS transforms
* Copyright Timmy Willison and other contributors
* https://github.com/timmywil/panzoom/blob/main/MIT-License.txt
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Panzoom=e()}(this,function(){"use strict";var Y=function(){return(Y=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function C(t,e){for(var n=t.length;n--;)if(t[n].pointerId===e.pointerId)return n;return-1}function T(t,e){if(e.touches)for(var n=0,o=0,r=e.touches;o<r.length;o++){var a=r[o];a.pointerId=n++,T(t,a)}else-1<(n=C(t,e))&&t.splice(n,1),t.push(e)}function N(t){for(var e,n=(t=t.slice(0)).pop();e=t.pop();)n={clientX:(e.clientX-n.clientX)/2+n.clientX,clientY:(e.clientY-n.clientY)/2+n.clientY};return n}function L(t){if(t.length<2)return 0;var e=t[0],t=t[1];return Math.sqrt(Math.pow(Math.abs(t.clientX-e.clientX),2)+Math.pow(Math.abs(t.clientY-e.clientY),2))}"undefined"!=typeof window&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}));var V={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};function D(t,e,n,o){V[t].split(" ").forEach(function(t){e.addEventListener(t,n,o)})}function G(t,e,n){V[t].split(" ").forEach(function(t){e.removeEventListener(t,n)})}"undefined"!=typeof window&&("function"==typeof window.PointerEvent?V={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:"function"==typeof window.TouchEvent&&(V={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));var a,i="undefined"!=typeof document&&!!document.documentMode;var c=["webkit","moz","ms"],l={};function I(t){if(l[t])return l[t];var e=a=a||document.createElement("div").style;if(t in e)return l[t]=t;for(var n=t[0].toUpperCase()+t.slice(1),o=c.length;o--;){var r="".concat(c[o]).concat(n);if(r in e)return l[t]=r}}function o(t,e){return parseFloat(e[I(t)])||0}function s(t,e,n){void 0===n&&(n=window.getComputedStyle(t));t="border"===e?"Width":"";return{left:o("".concat(e,"Left").concat(t),n),right:o("".concat(e,"Right").concat(t),n),top:o("".concat(e,"Top").concat(t),n),bottom:o("".concat(e,"Bottom").concat(t),n)}}function W(t,e,n){t.style[I(e)]=n}function Z(t){var e=t.parentNode,n=window.getComputedStyle(t),o=window.getComputedStyle(e),r=t.getBoundingClientRect(),a=e.getBoundingClientRect();return{elem:{style:n,width:r.width,height:r.height,top:r.top,bottom:r.bottom,left:r.left,right:r.right,margin:s(t,"margin",n),border:s(t,"border",n)},parent:{style:o,width:a.width,height:a.height,top:a.top,bottom:a.bottom,left:a.left,right:a.right,padding:s(e,"padding",o),border:s(e,"border",o)}}}var q=/^http:[\w\.\/]+svg$/;var B={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(t){t.preventDefault(),t.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:function(t,e,n){var o=e.x,r=e.y,a=e.scale,e=e.isSVG;W(t,"transform","scale(".concat(a,") translate(").concat(o,"px, ").concat(r,"px)")),e&&i&&(a=window.getComputedStyle(t).getPropertyValue("transform"),t.setAttribute("transform",a))},startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function t(u,f){if(!u)throw new Error("Panzoom requires an element as an argument");if(1!==u.nodeType)throw new Error("Panzoom requires an element with a nodeType of 1");if(e=(t=u).ownerDocument,t=t.parentNode,!(e&&t&&9===e.nodeType&&1===t.nodeType&&e.documentElement.contains(t)))throw new Error("Panzoom should be called on elements that have been attached to the DOM");f=Y(Y({},B),f),e=u;var t,e,l=q.test(e.namespaceURI)&&"svg"!==e.nodeName.toLowerCase(),n=u.parentNode;n.style.overflow=f.overflow,n.style.userSelect="none",n.style.touchAction=f.touchAction,(f.canvas?n:u).style.cursor=f.cursor,u.style.userSelect="none",u.style.touchAction=f.touchAction,W(u,"transformOrigin","string"==typeof f.origin?f.origin:l?"0 0":"50% 50%");var r,a,i,c,s,d,m=0,h=0,v=1,p=!1;function g(t,e,n){n.silent||(n=new CustomEvent(t,{detail:e}),u.dispatchEvent(n))}function y(o,r,t){var a={x:m,y:h,scale:v,isSVG:l,originalEvent:t};return requestAnimationFrame(function(){var t,e,n;"boolean"==typeof r.animate&&(r.animate?(t=u,e=r,n=I("transform"),W(t,"transition","".concat(n," ").concat(e.duration,"ms ").concat(e.easing))):W(u,"transition","none")),r.setTransform(u,a,r),g(o,a,r),g("panzoomchange",a,r)}),a}function w(t,e,n,o){var r,a,i,c,l,s,d,o=Y(Y({},f),o),p={x:m,y:h,opts:o};return!o.force&&(o.disablePan||o.panOnlyWhenZoomed&&v===o.startScale)||(t=parseFloat(t),e=parseFloat(e),o.disableXAxis||(p.x=(o.relative?m:0)+t),o.disableYAxis||(p.y=(o.relative?h:0)+e),o.contain&&(e=((r=(e=(t=Z(u)).elem.width/v)*n)-e)/2,i=((a=(i=t.elem.height/v)*n)-i)/2,"inside"===o.contain?(c=(-t.elem.margin.left-t.parent.padding.left+e)/n,l=(t.parent.width-r-t.parent.padding.left-t.elem.margin.left-t.parent.border.left-t.parent.border.right+e)/n,p.x=Math.max(Math.min(p.x,l),c),s=(-t.elem.margin.top-t.parent.padding.top+i)/n,d=(t.parent.height-a-t.parent.padding.top-t.elem.margin.top-t.parent.border.top-t.parent.border.bottom+i)/n,p.y=Math.max(Math.min(p.y,d),s)):"outside"===o.contain&&(c=(-(r-t.parent.width)-t.parent.padding.left-t.parent.border.left-t.parent.border.right+e)/n,l=(e-t.parent.padding.left)/n,p.x=Math.max(Math.min(p.x,l),c),s=(-(a-t.parent.height)-t.parent.padding.top-t.parent.border.top-t.parent.border.bottom+i)/n,d=(i-t.parent.padding.top)/n,p.y=Math.max(Math.min(p.y,d),s))),o.roundPixels&&(p.x=Math.round(p.x),p.y=Math.round(p.y))),p}function b(t,e){var e=Y(Y({},f),e),n={scale:v,opts:e};if(!e.force&&e.disableZoom)return n;var o,r,a=f.minScale,i=f.maxScale;return e.contain&&(r=(e=Z(u)).elem.width/v,o=e.elem.height/v,1<r&&1<o&&(r=(e.parent.width-e.parent.border.left-e.parent.border.right)/r,e=(e.parent.height-e.parent.border.top-e.parent.border.bottom)/o,"inside"===f.contain?i=Math.min(i,r,e):"outside"===f.contain&&(a=Math.max(a,r,e)))),n.scale=Math.min(Math.max(t,a),i),n}function x(t,e,n,o){t=w(t,e,v,n);return m!==t.x||h!==t.y?(m=t.x,h=t.y,y("panzoompan",t.opts,o)):{x:m,y:h,scale:v,isSVG:l,originalEvent:o}}function E(t,e,n){var o,r,e=b(t,e),a=e.opts;if(a.force||!a.disableZoom)return t=e.scale,e=m,o=h,a.focal&&(e=((r=a.focal).x/t-r.x/v+m*t)/t,o=(r.y/t-r.y/v+h*t)/t),r=w(e,o,t,{relative:!1,force:!0}),m=r.x,h=r.y,v=t,y("panzoomzoom",a,n)}function o(t,e){e=Y(Y(Y({},f),{animate:!0}),e);return E(v*Math.exp((t?1:-1)*e.step),e)}function S(t,e,n,o){var r=Z(u),a=r.parent.width-r.parent.padding.left-r.parent.padding.right-r.parent.border.left-r.parent.border.right,i=r.parent.height-r.parent.padding.top-r.parent.padding.bottom-r.parent.border.top-r.parent.border.bottom,c=e.clientX-r.parent.left-r.parent.padding.left-r.parent.border.left-r.elem.margin.left,e=e.clientY-r.parent.top-r.parent.padding.top-r.parent.border.top-r.elem.margin.top,r=(l||(c-=r.elem.width/v/2,e-=r.elem.height/v/2),{x:c/a*(a*t),y:e/i*(i*t)});return E(t,Y(Y({},n),{animate:!1,focal:r}),o)}E(f.startScale,{animate:!1,force:!0}),setTimeout(function(){x(f.startX,f.startY,{animate:!1,force:!0})});var M=[];function A(t){!function(t,e){for(var n,o,r=t;null!=r;r=r.parentNode)if(n=r,o=e.excludeClass,1===n.nodeType&&-1<" ".concat((n.getAttribute("class")||"").trim()," ").indexOf(" ".concat(o," "))||-1<e.exclude.indexOf(r))return 1}(t.target,f)&&(T(M,t),p=!0,f.handleStartEvent(t),g("panzoomstart",{x:r=m,y:a=h,scale:v,isSVG:l,originalEvent:t},f),t=N(M),i=t.clientX,c=t.clientY,s=v,d=L(M))}function P(t){var e,n,o;p&&void 0!==r&&void 0!==a&&void 0!==i&&void 0!==c&&(T(M,t),e=N(M),n=1<M.length,o=v,n&&(0===d&&(d=L(M)),S(o=b((L(M)-d)*f.step/80+s).scale,e,{animate:!1},t)),n&&!f.pinchAndPan||x(r+(e.clientX-i)/o,a+(e.clientY-c)/o,{animate:!1},t))}function O(t){1===M.length&&g("panzoomend",{x:m,y:h,scale:v,isSVG:l,originalEvent:t},f);var e=M;if(t.touches)for(;e.length;)e.pop();else{t=C(e,t);-1<t&&e.splice(t,1)}p&&(p=!1,r=a=i=c=void 0)}var z=!1;function X(){z||(z=!0,D("down",f.canvas?n:u,A),D("move",document,P,{passive:!0}),D("up",document,O,{passive:!0}))}return f.noBind||X(),{bind:X,destroy:function(){z=!1,G("down",f.canvas?n:u,A),G("move",document,P),G("up",document,O)},eventNames:V,getPan:function(){return{x:m,y:h}},getScale:function(){return v},getOptions:function(){var t,e=f,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},handleDown:A,handleMove:P,handleUp:O,pan:x,reset:function(t){var t=Y(Y(Y({},f),{animate:!0,force:!0}),t),e=(v=b(t.startScale,t).scale,w(t.startX,t.startY,v,t));return m=e.x,h=e.y,y("panzoomreset",t)},resetStyle:function(){n.style.overflow="",n.style.userSelect="",n.style.touchAction="",n.style.cursor="",u.style.cursor="",u.style.userSelect="",u.style.touchAction="",W(u,"transformOrigin","")},setOptions:function(t){for(var e in t=void 0===t?{}:t)t.hasOwnProperty(e)&&(f[e]=t[e]);(t.hasOwnProperty("cursor")||t.hasOwnProperty("canvas"))&&(n.style.cursor=u.style.cursor="",(f.canvas?n:u).style.cursor=f.cursor),t.hasOwnProperty("overflow")&&(n.style.overflow=t.overflow),t.hasOwnProperty("touchAction")&&(n.style.touchAction=t.touchAction,u.style.touchAction=t.touchAction)},setStyle:function(t,e){return W(u,t,e)},zoom:E,zoomIn:function(t){return o(!0,t)},zoomOut:function(t){return o(!1,t)},zoomToPoint:S,zoomWithWheel:function(t,e){var e=Y(Y(Y({},f),e),{animate:!1}),n=0===t.deltaY&&t.deltaX?t.deltaX:t.deltaY;return S(b(v*Math.exp((n<0?1:-1)*e.step/3),e).scale,t,e,t)}}}return t.defaultOptions=B,t});(function () {
    'use strict';

    var panzoom, disableDblClick;

    function create(widget) {
        var options = {
                canvas: true,
                maxScale: 4,
                minScale: 1,
                // contain: 'outside',
                disablePan: true,
                disableZoom: true,
                touchAction: '',
                cursor: false,
                step: 0.5
            },
            el = widget.element.find('.main-image-wrapper').get(0);

        panzoom = Panzoom(el, options);

        el.addEventListener('panzoomzoom', (e) => {
            if (e.detail.scale === 1) {
                if (e.detail.x !== 0 || e.detail.y !== 0) {
                    panzoom.pan(0, 0);
                }
            }

            panzoom.setOptions({
                disablePan: e.detail.scale === 1
            });
        });

        el.addEventListener('wheel', (e) => {
            if (!$(e.currentTarget).is('.opened .stage:not(.video) .main-image-wrapper')) {
                return;
            }

            panzoom.zoomWithWheel(e);
        }, {
            passive: true
        });

        widget.element
            .on('swiped-left swiped-right', (e) => {
                if (panzoom.getScale() > 1) {
                    e.stopImmediatePropagation(); // prevent next/prev
                }
            })
            .on('click', '.zoom', (e) => {
                e.preventDefault();
                panzoom[$(e.currentTarget).hasClass('zoom-out') ? 'zoomOut' : 'zoomIn']();
            })
            .on('dblclick dbltap', '.main-image-wrapper', (e) => {
                if (disableDblClick) {
                    return;
                }

                if (panzoom.getScale() >= options.maxScale) {
                    panzoom.pan(0, 0);
                    panzoom.zoom(1, {
                        animate: true
                    });
                } else {
                    panzoom.zoomToPoint(panzoom.getScale() * Math.exp(options.step), e);
                }
            });
    }

    function disable() {
        panzoom.setOptions({
            disablePan: true,
            disableZoom: true,
            touchAction: ''
        });
    }

    function enable() {
        panzoom.setOptions({
            disablePan: true, // will enable after first zoom
            disableZoom: false,
            touchAction: 'none'
        });
    }

    function reset() {
        panzoom.reset({
            animate: false
        });
    }

    $(document)
        .on('gallery:beforeCreate', (e, data) => {
            create(data.instance);
        })
        .on('gallery:beforeActivate', reset)
        .on('gallery:afterActivate', (e, data) => {
            if (!data.instance.opened()) {
                return;
            }

            if (data.instance.stage.hasClass('video')) {
                disable();
            } else {
                enable();
            }
        })
        .on('gallery:beforeOpen', () => {
            enable();
            reset();

            disableDblClick = true;
            setTimeout(() => {
                disableDblClick = false;
            }, 300);
        })
        .on('gallery:beforeClose', () => {
            disable();
            reset();
        });
})();

(function () {
    'use strict';

    // Review List
    $.widget('ajaxReviews', {
        component: 'Magento_Review/js/process-reviews',

        /** Create widget */
        create: function () {
            var self = this,
                reviewTab = $(this.options.reviewsTabSelector);

            if (!reviewTab.length) {
                this.loadReviews();
            } else if (reviewTab.attr('role') === 'tab' && reviewTab.hasClass('active')) {
                this.loadReviews();
            } else {
                reviewTab.one('collapsible:beforeOpen', function () {
                    self.loadReviews();
                });
            }

            $(document).on('click.ajaxReviews', '[data-role="product-review"] .pages a', function (event) {
                event.preventDefault();
                self.loadReviews(this.href).then(function () {
                    $('#reviews').get(0).scrollIntoView();
                });
            });
        },

        destroy: function () {
            $(document).off('click.ajaxReviews');
            this._super();
        },

        /** [loadReviews description] */
        loadReviews: function (href) {
            return $.request.get({
                url: href || this.options.productReviewUrl,
                type: 'html'
            }).then(function (response) {
                $('#product-review-container').html('').append(response.text).trigger('contentUpdated');
            });
        }
    });

    // Review Form
    $.view('reviewForm', {
        component: 'Magento_Review/js/view/review',

        /** Init component */
        create: function () {
            this.review = $.sections.get('review');
        },

        /** Get nickname for the customer */
        nickname: function () {
            return this.review().nickname || $.sections.get('customer')().firstname;
        }
    });

    $.validator.validators['rating-required'] = [
        function (value) {
            return value !== undefined;
        },
        $.__('Please select one of each of the ratings above.')
    ];

    $(document).on('breeze:mount:Magento_Review/js/validate-review', function (event, data) {
        $(data.el).validator({
            /** Disable button to prevent multiple submits */
            onValid: function () {
                this.form.find('.submit').prop('disabled', true);
            },

            /** Override error placement */
            addErrorNodes: function (el, nodes) {
                var reviewTable = $(el).parents('#product-review-table');

                if (reviewTable.length) {
                    reviewTable.after(nodes);
                } else {
                    this.addErrorNodes(el, nodes);
                }
            },

            /** Override error removal */
            removeErrorNodes: function (el) {
                var reviewTable = $(el).parents('#product-review-table');

                if (reviewTable.length) {
                    reviewTable.siblings('.error-text[generated]').remove();
                } else {
                    this.removeErrorNodes(el);
                }
            }
        });
    });
})();

(function () {
    'use strict';

    /**
     * @param {Cash} elements
     */
    $.breeze.shuffleElements = function (elements) {
        var parent, child, lastSibling;

        if (elements.length) {
            parent = $(elements[0]).parent();
        }

        while (elements.length) {
            child = elements.splice(Math.floor(Math.random() *  elements.length), 1)[0];
            lastSibling = parent.find('[data-shuffle-group="' + $(child).data('shuffle-group') + '"]').last();
            lastSibling.after(child);
        }
    };

    /**
     * @param {Cash} elements
     * @param {Number} limit
     */
    $.breeze.revealElements = function (elements, limit) {
        limit = limit || elements.length;

        // Let's wait for the first feedback about not working `shuffle-group` logic

        return elements.slice(0, limit).show();
    };
})();
(function () {
    'use strict';

    $.widget('upsellProducts', {
        component: 'upsellProducts',
        options: {
            elementsSelector: '.item.product'
        },

        /** Initialize plugin */
        create: function () {
            if (this.element.data('shuffle')) {
                $.breeze.shuffleElements(this.element.find(this.options.elementsSelector));
            }

            $.breeze.revealElements(
                this.element.find(this.options.elementsSelector),
                this.element.data('limit'),
                this.element.data('shuffle-weighted')
            );
        }
    });
})();

(function () {
    'use strict';

    $.widget('relatedProducts', {
        component: 'relatedProducts',
        options: {
            relatedCheckbox: '.related-checkbox', // Class name for a related product's input checkbox.
            relatedProductsCheckFlag: false, // Related products checkboxes are initially unchecked.
            relatedProductsField: '#related-products-field', // Hidden input field that stores related products.
            selectAllMessage: $.__('select all'),
            unselectAllMessage: $.__('unselect all'),
            selectAllLink: '[data-role="select-all"]',
            elementsSelector: '.item.product'
        },

        /** Initialize plugin */
        create: function () {
            $(this.options.selectAllLink, this.element).on('click', this._selectAllRelated.bind(this));
            $(this.options.relatedCheckbox, this.element).on('click', this._addRelatedToProduct.bind(this));

            if (this.element.data('shuffle')) {
                $.breeze.shuffleElements(this.element.find(this.options.elementsSelector));
            }

            $.breeze.revealElements(
                this.element.find(this.options.elementsSelector),
                this.element.data('limit'),
                this.element.data('shuffle-weighted')
            );
        },

        /**
         * @param {Event} event
         */
        _selectAllRelated: function (event) {
            var innerHTML = this.options.relatedProductsCheckFlag ?
                this.options.selectAllMessage : this.options.unselectAllMessage;

            event.preventDefault();

            $(event.target).html(innerHTML);
            $(this.options.relatedCheckbox).prop(
                'checked',
                this.options.relatedProductsCheckFlag = !this.options.relatedProductsCheckFlag
            );
            this._addRelatedToProduct();
        },

        /** Update hidden field value */
        _addRelatedToProduct: function () {
            $(this.options.relatedProductsField).val(
                $(this.options.relatedCheckbox + ':checked').map(function () {
                    return this.value;
                }).get().join(',')
            );
        }
    });
})();

(function () {
    'use strict';

    $.validator.validators['validate-item-quantity'] = [
        function (value, element, settings) {
            var result = false,
                qty = parseFloat(value),
                isMinAllowedValid = typeof settings.minAllowed === 'undefined' ||
                    qty >= parseFloat(settings.minAllowed),
                isMaxAllowedValid = typeof settings.maxAllowed === 'undefined' ||
                    qty <= parseFloat(settings.maxAllowed),
                isQtyIncrementsValid = typeof settings.qtyIncrements === 'undefined' ||
                    qty % parseFloat(settings.qtyIncrements) === 0;

            result = qty > 0;

            if (result === false) {
                this.itemQtyErrorMessage = $.__('Please enter a quantity greater than 0.');//eslint-disable-line max-len

                return result;
            }

            result = isMinAllowedValid;

            if (result === false) {
                this.itemQtyErrorMessage = $.__('The fewest you may purchase is %1.').replace('%1', settings.minAllowed);//eslint-disable-line max-len

                return result;
            }

            result = isMaxAllowedValid;

            if (result === false) {
                this.itemQtyErrorMessage = $.__('The maximum you may purchase is %1.').replace('%1', settings.maxAllowed);//eslint-disable-line max-len

                return result;
            }

            result = isQtyIncrementsValid;

            if (result === false) {
                this.itemQtyErrorMessage = $.__('You can buy this product only in quantities of %1 at a time.').replace('%1', settings.qtyIncrements);//eslint-disable-line max-len

                return result;
            }

            return result;
        },
        function () {
            return this.itemQtyErrorMessage;
        }
    ];
})();

/* global _ */
(function () {
    'use strict';

    $.widget('productConfigure', {
        /** [create description] */
        create: function () {
            this.cartSubscription = $.sections.get('cart').subscribe(function (data) {
                this.syncQuantity(data);
            }.bind(this));

            this.syncQuantity($.sections.get('cart')());
        },

        /** [destroy description] */
        destroy: function () {
            this.cartSubscription.dispose();
            this._super();
        },

        /** [syncQuantity description] */
        syncQuantity: function (data) {
            var product,
                itemId = $('#product_addtocart_form [name="item"]').val(),
                productId = $('#product_addtocart_form [name="product"]').val();

            if (!data || !data.items || !data.items.length || !productId) {
                return;
            }

            product = _.find(data.items, function (item) {
                return item.item_id === itemId && item.product_id === productId;
            });

            $('#product_addtocart_form [name="qty"]').val(product.qty);
        }
    });

    $(document).on('breeze:load', function () {
        if (window.location.href.indexOf('checkout/cart/configure') === -1) {
            return;
        }

        $.fn.productConfigure();
    });
})();
