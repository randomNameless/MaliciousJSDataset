(function () {
    'use strict';

    $.view('wishlistView', {
        component: 'Magento_Wishlist/js/view/wishlist',
        wishlist: $.sections.get('wishlist')
    });

    $.widget('wishlist', {
        component: 'wishlist',
        options: {
            dataAttribute: 'item-id',
            nameFormat: 'qty[{0}]',
            qtySelector: '[data-role=qty]'
        },

        /** Initialize plugin */
        create: function () {
            this._on({
                'click [data-role=tocart]': '_beforeAddToCart',
                'click [data-role=all-tocart]': '_addAllWItemsToCart'
            });
        },

        /**
         * Process data before add to cart
         *
         * - update item's qty value.
         *
         * @param {Event} event
         * @private
         */
        _beforeAddToCart: function (event) {
            var elem = $(event.currentTarget),
                itemId = elem.data(this.options.dataAttribute),
                qtyName = this.options.nameFormat.replace('{0}', itemId),
                qtyValue = elem.parents().find('[name="' + qtyName + '"]').val(),
                params = elem.data('post');

            if (params) {
                params.data = $.extend({}, params.data, {
                    'qty': qtyValue
                });
                elem.data('post', params);
            }
        },

        /**
         * Add all wish list items to cart
         * @private
         */
        _addAllWItemsToCart: function () {
            var urlParams = this.options.addAllToCartUrl,
                separator = urlParams.action.indexOf('?') >= 0 ? '&' : '?';

            this.element.find(this.options.qtySelector).each(function (index, element) {
                urlParams.action += separator + $(element).prop('name') + '=' + encodeURIComponent($(element).val());
                separator = '&';
            });

            $.mage.dataPost().postData(urlParams);
        }
    });

    $.widget('addToWishlist', {
        component: 'addToWishlist',
        options: {
            bundleInfo: 'div.control [name^=bundle_option]',
            configurableInfo: '.super-attribute-select',
            groupedInfo: '#super-product-table input',
            downloadableInfo: '#downloadable-links-list input',
            customOptionsInfo: '.product-custom-option',
            qtyInfo: '#qty',
            actionElement: '[data-action="add-to-wishlist"]',
            productListWrapper: '.product-item-info',
            productPageWrapper: '.product-info-main'
        },

        /** @inheritdoc */
        create: function () {
            var options = this.options,
                dataUpdateFunc = '_updateWishlistData',
                events = {};

            if (options.productType) {
                if (typeof options.productType === 'string') {
                    options.productType = [options.productType];
                }
            } else {
                options.productType = [];
            }

            events['change ' + options.customOptionsInfo] = dataUpdateFunc;
            events['change ' + options.qtyInfo] = dataUpdateFunc;

            $(options.productType).each(function (i, type) {
                var key = type + 'Info';

                if (!options[key]) {
                    return;
                }

                events['change ' + options[key]] = dataUpdateFunc;
            });

            this._on(events);
        },

        /**
         * @param {jQuery.Event} event
         * @private
         */
        _updateWishlistData: function (event) {
            var dataToAdd = {},
                isFileUploaded = false,
                handleObjSelector = null,
                self = this;

            if ($(event.target).is(this.options.qtyInfo)) {
                this._updateAddToWishlistButton({}, event);
                event.stopPropagation();

                return;
            }

            handleObjSelector = $(event.currentTarget).closest('form').find(event.handleObj.selector);

            handleObjSelector.each(function (index, element) {
                if ($(element).is('input[type=text]') ||
                    $(element).is('input[type=email]') ||
                    $(element).is('input[type=number]') ||
                    $(element).is('input[type=hidden]') ||
                    $(element).is('input[type=checkbox]:checked') ||
                    $(element).is('input[type=radio]:checked') ||
                    $(element).is('textarea') ||
                    $('#' + element.id + ' option:checked').length
                ) {
                    if ($(element).data('selector') || $(element).attr('name')) {
                        dataToAdd = $.extend({}, dataToAdd, self._getElementData(element));
                    }

                    return;
                }

                if ($(element).is('input[type=file]') && $(element).val()) {
                    isFileUploaded = true;
                }
            });

            if (isFileUploaded) {
                this.bindFormSubmit();
            }
            this._updateAddToWishlistButton(dataToAdd, event);
            event.stopPropagation();
        },

        /**
         * @param {Object} dataToAdd
         * @param {jQuery.Event} event
         * @private
         */
        _updateAddToWishlistButton: function (dataToAdd, event) {
            var self = this,
                buttons = this._getAddToWishlistButton(event);

            buttons.each(function (index, element) {
                var params = $(element).data('post'),
                    currentTarget = event.currentTarget,
                    targetElement,
                    targetValue;

                if (!params) {
                    params = {
                        'data': {}
                    };
                } else if ($(currentTarget).data('selector') || $(currentTarget).attr('name')) {
                    targetElement = self._getElementData(currentTarget);
                    targetValue = Object.keys(targetElement)[0];

                    if (params.data.hasOwnProperty(targetValue) && !dataToAdd.hasOwnProperty(targetValue)) {
                        delete params.data[targetValue];
                    }
                }

                params.data = $.extend({}, params.data, dataToAdd, {
                    'qty': $(self.options.qtyInfo).val()
                });
                $(element).data('post', params);
            });
        },

        /**
         * @param {jQuery.Event} event
         * @private
         */
        _getAddToWishlistButton: function (event) {
            var productListWrapper = $(event.currentTarget).closest(this.options.productListWrapper);

            if (productListWrapper.length) {
                return productListWrapper.find(this.options.actionElement);
            }

            return $(this.options.actionElement);
        },

        /**
         * @param {HTMLElement} element
         * @return {Object}
         * @private
         */
        _getElementData: function (element) {
            var data, elementName, elementValue;

            element = $(element);
            data = {};
            elementName = element.data('selector') ? element.data('selector') : element.attr('name');
            elementValue = element.val();

            if (element.is('select[multiple]') && elementValue !== null) {
                if (elementName.substr(elementName.length - 2) == '[]') { //eslint-disable-line eqeqeq
                    elementName = elementName.substring(0, elementName.length - 2);
                }
                $.each(elementValue, function (key, option) {
                    data[elementName + '[' + option + ']'] = option;
                });
            } else if (elementName.substr(elementName.length - 2) == '[]') { //eslint-disable-line eqeqeq, max-depth
                elementName = elementName.substring(0, elementName.length - 2);

                data[elementName + '[' + elementValue + ']'] = elementValue;
            } else {
                data[elementName] = elementValue;
            }

            return data;
        },

        /**
         * Bind form submit.
         */
        bindFormSubmit: function () {
            var self = this;

            $('[data-action="add-to-wishlist"]').on('click', function (event) {
                var element, params, form, action;

                event.stopPropagation();
                event.preventDefault();

                element = $('input[type=file]' + self.options.customOptionsInfo);
                params = $(event.currentTarget).data('post');
                form = $(element).closest('form');
                action = params.action;

                if (params.data.id) {
                    $('<input>', {
                        type: 'hidden',
                        name: 'id',
                        value: params.data.id
                    }).appendTo(form);
                }

                if (params.data.uenc) {
                    action += 'uenc/' + params.data.uenc;
                }

                $(form).attr('action', action).trigger('submit');
            });
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.view('recentProducts', {
        component: 'Swissup_Breeze/js/components/recent-products',
        options: {
            limit: 5
        },

        /** [create description] */
        create: function () {
            var self = this,
                products = $.storage.ns('product_data_storage');

            this.visible = false;
            this.items = [];

            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            _.each(this.getIds(), function (values) {
                var item = products.get(values.product_id);

                if (item) {
                    self.visible = true;
                    self.items.push(item);
                }
            });
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        },

        /** [getIds description] */
        getIds: function () {
            var ids = $.storage.ns(this.options.storage).get(),
                scope = this.options.productCurrentScope,
                prefix = scope + '-' + $.breeze.getScopeId(scope),
                currentTime = new Date().getTime() / 1000;

            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            ids = _.filter(ids, function (values, key) {
                return key.indexOf(prefix) > -1 && currentTime - values.added_at < 86400;
            });
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

            return _.sortBy(ids, 'added_at').reverse().slice(0, this.options.limit);
        },

        /** [getImageData description] */
        getImageData: function (item) {
            var self = this,
                image = _.find(item.images || [], function (img) {
                    return img.code === self.options.imageCode;
                });

            if (!image && item.images) {
                image = item.images[0];
            }

            return {
                width: image.width,
                height: image.height,
                src: image.url,
                alt: image.label
            };
        },

        /** [getPriceHtml description] */
        getPriceHtml: function (item) {
            var msrp = this.getItemValue(item, 'price_info.extension_attributes.msrp.is_applicable');

            if (msrp) {
                return '';
            }

            return this.getItemValue(item, 'price_info.formatted_prices.final_price');
        },

        /** [getAdditionalContent description] */
        getAdditionalContent: function (item, element) {
            return '';
        },

        /** [getItemValue description] */
        getItemValue: function (item, path) {
            return _.get(item, path.split('.'));
        },

        /** [processorUencPlaceholders description] */
        processorUencPlaceholders: function (string) {
            var uenc = btoa(window.location.href).replace('+/=', '-_,');

            return string.replace('%uenc%', uenc).replace(encodeURI('%uenc%'), uenc);
        },

        /** [getAddToCartPostParams description] */
        getAddToCartPostParams: function (item) {
            return this.processorUencPlaceholders(this.getItemValue(item, 'add_to_cart_button.post_data'));
        },

        /** [getAddToWishlistPostParams description] */
        getAddToWishlistPostParams: function (item) {
            return this.processorUencPlaceholders(this.getItemValue(item, 'extension_attributes.wishlist_button.url'));
        },

        /** [getAddToWishlistPostParams description] */
        getAddToComparePostParams: function (item) {
            var raw = this.getItemValue(item, 'add_to_compare_button.url') ||
                      this.getItemValue(item, 'add_to_compare_button.post_data');

            return this.processorUencPlaceholders(raw);
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    var FormProvider = $.Base.extend({
        defaults: {
            data: {}
        },

        /** [set description] */
        set: function (key, value) {
            this.data[key] = value;
        },

        /**
         * @param {String} path
         * @return {Mixed}
         */
        get: function (path) {
            return _.get(this, path.split('.'));
        },

        /** [save description] */
        save: function () {
            return $.request.post({
                url: this.options.submit_url,
                type: 'form',
                data: this.data
            });
        }
    });

    $(document).on('breeze:mount:Magento_Ui/js/form/provider', function (event, data) {
        $.registry.set(data.settings.__scope, new FormProvider(data.settings));
    });
})();

/* global ko _ */
(function () {
    'use strict';

    $(document).on('breeze:mount:Magento_LoginAsCustomerFrontendUi/js/login', function (event, data) {
        $.sections.reload($.sections.getSectionNames());
        $(document).on('customer-data-reload', function () {
            window.location.href = data.settings.redirectUrl;
        });
    });

    $.view('loginAsCustomer', {
        component: 'Magento_LoginAsCustomerFrontendUi/js/view/loginAsCustomer',
        isVisible: ko.observable(false),
        notificationText: ko.observable(),

        /** [create description] */
        create: function () {
            var customerData = $.sections.get('customer'),
                loggedAsCustomerData = $.sections.get('loggedAsCustomer');

            customerData.subscribe(function (data) {
                this.fullname = data.fullname;
                this.updateBanner();
            }.bind(this));
            loggedAsCustomerData.subscribe(function (data) {
                this.adminUserId = data.adminUserId;
                this.websiteName = data.websiteName;
                this.updateBanner();
            }.bind(this));

            this.fullname = customerData().fullname;
            this.adminUserId = loggedAsCustomerData().adminUserId;
            this.websiteName = loggedAsCustomerData().websiteName;

            this.updateBanner();
        },

        /** Update banner area */
        updateBanner: function () {
            if (this.adminUserId !== undefined) {
                this.isVisible(this.adminUserId);
            }

            if (this.fullname !== undefined && this.websiteName !== undefined) {
                this.notificationText($.__('You are connected as <strong>%1</strong> on %2')
                    .replace('%1', _.escape(this.fullname))
                    .replace('%2', _.escape(this.websiteName)));
            }
        }
    });
})();

(function () {
    'use strict';

    $.widget('captcha', {
        component: 'captcha',
        options: {
            refreshClass: 'refreshing',
            reloadSelector: '.captcha-reload',
            imageSelector: '.captcha-img',
            imageLoader: ''
        },

        /**
         * Method binds click event to reload image
         */
        _create: function () {
            this.element.on('click', this.options.reloadSelector, this.refresh.bind(this));
        },

        /**
         * Method triggers an AJAX request to refresh the CAPTCHA image
         */
        refresh: function () {
            var self = this,
                button = this.element.find(this.options.reloadSelector);

            button.spinner(true, {
                css: {
                    width: 20,
                    height: 20,
                    background: 'none'
                }
            });
            button.find('span').css('opacity', 0);
            this.element.addClass(this.options.refreshClass);

            $.request.post({
                url: this.options.url,
                data: {
                    formId: this.options.type
                },

                /**
                 * @param {Object} data
                 */
                success: function (data) {
                    if (data.imgSrc) {
                        self.element.find(self.options.imageSelector).attr('src', data.imgSrc);
                    }
                },

                /** Complete callback. */
                complete: function () {
                    button.spinner(false);
                    button.find('span').css('opacity', 1);
                    self.element.removeClass(self.options.refreshClass);
                }
            });
        }
    });
})();

(function () {
    'use strict';

    // copy of magefan/module-blog/view/frontend/web/js/magefan-comments.js
    $.widget('magefanBlogComments', {
        component: 'Magefan_Blog/js/magefan-comments',
        create: function () {
            var msgLifetime = 4000;
            var $hd = $('#post-comments');

            var getMessageHtml = function (msg, type) {
                var h = '<div class="message-' + type + ' ' + type + ' message">'
                    + '<div>' + msg + '</div>'
                +'</div>';
                return $(h);
            };

            var processError = function ($form, msg) {
                $form.find('[type=submit]').removeAttr('disabled');
                var $h = getMessageHtml(msg, 'error');
                $h.insertBefore($form);
                setTimeout(function () {
                    $h.remove();
                }, msgLifetime);
            };

            var processSuccess = function ($form, msg) {
                $form.find('[type=submit]').removeAttr('disabled');
                var $h = getMessageHtml(msg, 'success');
                $h.insertBefore($form);
                $form.hide();
                setTimeout(function () {
                    $h.remove();
                }, msgLifetime);
            };

            $hd.find('form').submit(function () {
                var $form = $(this);
                if ($form.validation() && $form.validation('isValid')) {
                    $form.find('[type=submit]').attr('disabled', 'disabled');
                    $.ajax({
                        'method': 'post',
                        'url': $form.attr('action'),
                        'dataType': 'json',
                        'data': $form.serialize(),
                        'success': function (res) {
                            if (res.success) {
                                processSuccess($form, res.message);
                            } else {
                                processError($form, res.message);
                            }
                        },
                        'error': function () {
                            processError($form, 'Unexpected error. Please try again later or contact us.')
                        }
                    })
                }
                return false;
            });

            $hd.find('.more-comments-action').click(function () {
                var id = $(this).data('comment');
                $hd.find('.c-comment-parent-'+id).fadeIn();
                $(this).hide();
                return false;
            });

            $hd.find('form textarea').click(function () {
                $(this).parents('.no-active').removeClass('no-active');
            });

            var $rf = $('#c-replyform-comment');
            $hd.find('.reply-action').click(function () {
                var id = $(this).data('comment');
                $rf.hide();
                $rf.appendTo('.c-post-'+id);
                $rf.find('.refresh-value').val('').html('');
                $rf.find('[name=parent_id]').val(id);
                $rf.find('form').show();
                $rf.fadeIn();
                return false;
            });

            $hd.find('.reply-cancel-action').click(function () {
                $rf.hide();
            });
        }
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

    $.mixin('quickSearch', {
        component: false
    });

    $.widget('ajaxsearch', 'quickSearch', {
        component: 'Swissup_Ajaxsearch/js/ajaxsearch',
        templates: {},
        itemTypes: ['product', 'category', 'page', 'autocomplete', 'popular'],
        options: {
            itemClass: 'tt-suggestion',
            selectClass: 'tt-cursor',
            dropdown: '<div></div>',
            responseFieldElements: '.tt-suggestion'
        },

        /** [create description] */
        create: function () {
            var self = this,
                mql;

            this.options = $.extend(this.options, this.options.options);
            this.options.url = this.options.url.replace('?q=_QUERY', '');
            this.options.dropdownClass = this._option('options/typeahead/options/classNames/dataset');

            this._super();
            this.prepareMarkup();
            this.setActiveState(false);

            this.autoComplete
                .hide()
                .attr('data-id', this.autoComplete.attr('id'))
                .removeAttr('id')
                .removeClass('search-autocomplete')
                .addClass(this._option('options/typeahead/options/classNames/menu'))
                .on('keydown.ajaxsearch', this.options.responseFieldElements, function (event) {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        self.submitSelectedItem();
                    }
                });

            if (false && this.options.categoryFilter) {
                mql = matchMedia(this.options.categoryFilter.matchMedia);
                if (!this.checkAndInitCategoryFilter(mql)) {
                    mql.addListener(this.checkAndInitCategoryFilter.bind(this));
                }
            }
        },

        destroy: function () {
            this.autoComplete.attr('id', this.autoComplete.attr('data-id'));
            this._super();
        },

        checkAndInitCategoryFilter: function (mql) {
            if (mql.matches && !$(this.element).ajaxsearchCategory('instance')) {
                $(this.element).ajaxsearchCategory(this.options.categoryFilter);
            }

            return mql.matches;
        },

        /** [prepareMarkup description] */
        prepareMarkup: function () {
            var block = this.element.closest('.block.block-search');

            block.addClass(this.options.classes.container.replace('.', ''))
                .addClass(this.options.classes.additional);

            this.element.css('position', 'relative')

            if (!this.element.parent().hasClass('input-wrapper')) {
                this.element
                    .wrap('<div class="input-wrapper" style="position: relative">')
                    .after(this.autoComplete); // move autocomplete inside wrapper

                this.searchForm.find('.field.search').children().wrapAll('<div class="origin">');
            }

            $('body').removeClass('swissup-ajaxsearch-loading');
        },

        /** [setActiveState description] */
        setActiveState: function (isActive) {
            this._super(isActive);
            this.element.closest('.control').toggleClass('inactive', !isActive);
        },

        /** [submitSelectedItem description] */
        submitSelectedItem: function () {
            var item = this.dataset[this.responseList.selectedIndex];

            if (!item) {
                return;
            }

            if (item._type === 'popular' && this.element.val() !== item.title) {
                this.element.val(item.title).trigger('input');
            } else if (item.url) {
                window.location.href = item.url;
            } else {
                this.searchForm.submit();
            }
        },

        /** [_selectEl description] */
        _selectEl: function (el, focus) {
            if (!el || el.hasClass('notFound-item-info')) {
                return;
            }

            return this._super(el, focus);
        },

        /** [canUseNavKeys description] */
        canUseNavKeys: function () {
            return this._super() && this.dataset[0] && this.dataset[0]._type !== 'notFound';
        },

        /** [sendRequest description] */
        sendRequest: function () {
            var result = this._super(),
                spinnerTarget = this.searchForm.find('.actions');

            if (!result || !result.finally) {
                return result;
            }

            spinnerTarget.spinner(true);

            return result.finally(function () {
                spinnerTarget.spinner(false);
            });
        },

        /** [prepareResponse description] */
        prepareResponse: function (data) {
            this._super(data);

            if (!this.dataset.length) {
                this.dataset = [{
                    _type: 'notFound',
                    id: Math.random().toString(36).substr(2, 5)
                }];
            }

            this.dataset = _.map(this.dataset, function (item) {
                item._type = item._type || 'popular';

                return item;
            });
        },

        /** [processResponse description] */
        processResponse: function () {
            this._super();
            this.addWrappers();
        },

        /** [showAutocomplete description] */
        showAutocomplete: function (content) {
            var offset = this.element.offset(),
                offsetRight = $(window).width() - offset.left - this.element.outerWidth(true),
                rect = this.element.get(0).getBoundingClientRect(),
                parentRect = this.element.offsetParent().get(0).getBoundingClientRect(),
                css = {
                    left: 'auto',
                    right: 'auto',
                    zIndex: 100
                };

            if (content) {
                content.find('.notFound-item-info').removeClass(this.options.itemClass);
            }

            this._super(content);

            if (offset.left > offsetRight) { // input is closer to the right edge of the screen
                css.left = 'auto';
                css.right = parentRect.right - rect.right;
                this.autoComplete.removeClass('stick-to-start').addClass('stick-to-end');
            } else {
                css.left = rect.left - parentRect.left;
                css.right = 'auto';
                this.autoComplete.removeClass('stick-to-end').addClass('stick-to-start');
            }

            this.autoComplete.css(css);
        },

        /** [render description] */
        renderItem: function (item) {
            return this.getItemTemplate(item)({
                item: item,
                formatPrice: $.catalog.priceUtils.formatPrice,
                priceFormat: this.options.settings.priceFormat
            });
        },

        /** [getTemplate description] */
        getItemTemplate: function (item) {
            if (!this.templates[item._type]) {
                this.templates[item._type] = _.template(
                    $(this.options.templates[item._type]).html()
                );
            }

            return this.templates[item._type];
        },

        /** [addWrappers description] */
        addWrappers: function () {
            var self = this,
                results = $('.block-swissup-ajaxsearch-results');

            this.itemTypes.forEach(function (type) {
                var headerId = '#swissup-ajaxsearch-' + type + '-template-header';

                if (results.find('.' + type + '-item-info').length) {
                    results.find('.' + type + '-item-info')
                        .wrapAll('<div class="' + type + '-item-info-wrapper">');

                    if ($(headerId).length) {
                        $('.block-swissup-ajaxsearch-results .' + type + '-item-info-wrapper')
                            .prepend(_.template($(headerId).html())({
                                $t: $.__,
                                hasGetViewAllUrl: self.options.isProductViewAllEnabled,
                                getViewAllUrl: function () {
                                    return self.searchForm.attr('action') + '?' + self.searchForm.serialize();
                                }
                            }));
                    }
                }
            });

            results.find(
                this.itemTypes
                    .filter(function (type) {
                        return type !== 'product';
                    })
                    .map(function (type) {
                        return '.' + type + '-item-info-wrapper';
                    })
                    .join(',')
            ).wrapAll('<div class="custom-item-info-wrapper">');
        }
    });
})();

/*eslint max-depth: ["error", 4]*/
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'underscore', 'mage/cookies'], factory);
    } else {
        /* global _ */
        $.easybanner = $.easybanner || {};
        $.easybanner.Widget = factory($, _);
    }
}(function ($, _) {
    'use strict';

    var Easybanner = {},
        prototypes = {};

    prototypes.cookie = function (cookieName) {
        var _cookie = {},
            isWritable = false,
            expires = new Date();

        expires.setFullYear(expires.getFullYear() + 1);

        /**
         * Write cookies
         */
        function write() {
            $.mage.cookies.set(
                cookieName,
                JSON.stringify(_cookie),
                {
                    expires: expires
                }
            );
        }

        /**
         * Read cookies
         */
        function read() {
            var jsonString = $.mage.cookies.get(cookieName);

            if (!jsonString) {
                write();
            }

            jsonString = $.mage.cookies.get(cookieName);

            if (jsonString) {
                isWritable = true;
                try {
                    _cookie = JSON.parse(jsonString);
                } catch (e) {}
            }
        }

        read();

        return {
            isWritable: isWritable,

            /**
             * Get banner parameters from cookie
             *
             * @param {Number} bannerId
             * @param {String} key
             * @param {*} defaultValue
             * @returns {*}
             */
            get: function (bannerId, key, defaultValue) {
                defaultValue = defaultValue || 0;

                if (typeof _cookie[bannerId] === 'undefined') {
                    _cookie[bannerId] = {};
                }

                if (key) {
                    if (_cookie[bannerId][key] !== undefined) {
                        return _cookie[bannerId][key];
                    }

                    return defaultValue;
                }

                return _cookie[bannerId];
            },

            /**
             * Set parameter in cookie
             *
             * @param {Number} bannerId
             * @param {String} key
             * @param {*} value
             */
            set: function (bannerId, key, value) {
                _cookie[bannerId][key] = value;
                write();
            }
        };
    };

    prototypes.touch = function () {
        var touchLocks = [],
            touchLocksTracked = 5,

            /**
             * @param {Event} e
             */
            trackTouch = _.throttle(function (e) {
                touchLocks.push(e.type);

                if (touchLocks.length > touchLocksTracked) {
                    touchLocks.shift();
                }
            }, 50);

        $(document).on('touchstart mousemove', trackTouch);

        return {
            /**
             * Check if user is currently touching a screen
             *
             * @returns {bool}
             */
            touching: function () {
                return touchLocks.indexOf('touchstart') !== -1;
            }
        };
    };

    prototypes.exitIntent = function () {
        var _state = false,
            scrollStart = $(window).scrollTop();

        /**
         * Check how much amout has been scrolled
         */
        function checkExitIntentStateByScrollTop() {
            var scrollAmount = scrollStart - $(window).scrollTop();

            scrollStart = $(window).scrollTop();

            if (scrollAmount > 63) {
                _state = true;
            } else {
                _state = false;
            }
        }

        $(document).on('mouseleave', function (e) {
            var from = e.relatedTarget || e.toElement;

            if (!from || from.nodeName === 'HTML') {
                _state = true;
            }
        });

        $(document).on('mouseenter', function () {
            _state = false;
        });

        // Exit intent for mobile
        if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
            $(document).on('scroll', _.debounce(checkExitIntentStateByScrollTop, 200));
        }

        return {
            /**
             * @return {Boolean}
             */
            getState: function () {
                var result = _state;

                _state = false;

                return result;
            }
        };
    };

    prototypes.timer = function () {
        var _frequency = 200, // ms
            _savedValue = parseFloat(localStorage.getItem('easybanner_timer_browsing')),
            _timers    = {
                inactivity: 0,
                activity: 0,
                exitIntent: 0,
                browsing: isNaN(_savedValue) || !isFinite(_savedValue) ? 0 : _savedValue
            },
            _conditions = {
                exitIntent: Easybanner.ExitIntent.getState
            },
            events = ['mousemove', 'click', 'scroll', 'keyup'];

        /**
         * Reset timer
         * @param {String} timer
         */
        function reset(timer) {
            if (!_.isArray(timer)) {
                timer = [timer];
            }

            _.each(timer, function (name) {
                _timers[name] = 0;
            });
        }

        /**
         * Timer's tick
         */
        function tick() {
            _timers = _.mapObject(_timers, function (value, key) {
                if (!_conditions[key] || _conditions[key]()) {
                    value += _frequency / 1000;
                }

                return value;
            });

            if (_timers.inactivity >= 10) {
                reset('activity');
            }
        }

        setInterval(tick.bind(this), _frequency);

        _.each(events, function (eventName) {
            $(document).on(eventName, reset.bind(this, ['inactivity', 'exitIntent']));
        }.bind(this));

        $(document).ready(function () {
            // reset browsing time, if last visit was more that two hours ago
            var lastVisit = localStorage.getItem('easybanner_last_visit'),
                now = new Date();

            localStorage.setItem('easybanner_last_visit', now.toISOString());

            if (!lastVisit) {
                return;
            }

            lastVisit = new Date(lastVisit);

            if (isNaN(lastVisit.getTime())) {
                return;
            }

            if (Math.abs(now - lastVisit) / 1000 / 60 > 120) {
                reset('browsing');
            }
        });

        $(window).on('beforeunload', function () {
            localStorage.setItem('easybanner_timer_browsing', _timers.browsing);
        });

        return {
            /**
             * @returns {Number}
             */
            getInactivityTime: function () {
                return _timers.inactivity;
            },

            /**
             * @returns {Number}
             */
            getActivityTime: function () {
                return _timers.activity;
            },

            /**
             * @returns {Number}
             */
            getBrowsingTime: function () {
                return _timers.browsing;
            },

            /**
             * @return {Number}
             */
            getExitIntentTime: function () {
                return _timers.exitIntent;
            }
        };
    };

    prototypes.rule = function () {
        var _conditions = {},
            _timer      = Easybanner.Timer,
            _cookie     = Easybanner.Cookie,
            _currentId;

        /**
         * Compare conditions
         * @param {*} v1
         * @param {*} v2
         * @param {String} op
         * @returns {Boolean}
         * @private
         */
        function _compareCondition(v1, v2, op) {
            var result = false;

            switch (op) {
                case '>':
                    result = parseFloat(v2) > parseFloat(v1);
                    break;

                case '<':
                    result = parseFloat(v2) < parseFloat(v1);
                    break;
            }

            return result;
        }

        /**
         * @param {Object} filter
         * @return {Number}
         */
        function _getDisplayPerCustomerComparator(filter) {
            var comparator,
                counter = filter.attribute.replace('_per_customer', ''),
                timeCounterCookie = counter + '_time',
                compareDate = new Date(_cookie.get(_currentId, timeCounterCookie)),
                currentDate = new Date();

            switch (counter) {
                case 'display_count_per_day':
                    // compareDate.setSeconds(compareDate.getSeconds() + 5);
                    compareDate.setDate(compareDate.getDate() + 1);
                    break;

                case 'display_count_per_week':
                    compareDate.setDate(compareDate.getDate() + 7);
                    break;

                case 'display_count_per_month':
                    compareDate.setMonth(compareDate.getMonth() + 1);
                    break;
            }

            comparator = _cookie.get(_currentId, counter);

            if (compareDate <= currentDate) {
                _cookie.set(_currentId, counter, 0);
                comparator = 0;
            }

            return comparator;
        }

        /**
         * Validate banner conditions
         * @param {Object} filter
         * @returns {Boolean}
         * @private
         */
        function _validateConditions(filter) {
            var result = true,
                comparator,
                condition,
                i;

            if (filter.aggregator && filter.conditions) {
                for (i = 0; i < filter.conditions.length; i++) {
                    condition = filter.conditions[i];
                    result = _validateConditions(condition, filter.aggregator, filter.value);

                    if (filter.aggregator === 'all' && filter.value == '1' && !result ||    /*eslint eqeqeq: "off"*/
                        filter.aggregator === 'any' && filter.value == '1' && result) {     /*eslint eqeqeq: "off"*/

                        break;
                    } else if (filter.aggregator === 'all' && filter.value == '0' && result ||
                        filter.aggregator === 'any' && filter.value == '0' && !result) {

                        result = !result;
                        break;
                    }
                }
            } else if (filter.attribute) {
                switch (filter.attribute) {
                    case 'browsing_time':
                        comparator = _timer.getBrowsingTime();
                        break;

                    case 'inactivity_time':
                        comparator = _timer.getInactivityTime();
                        break;

                    case 'activity_time':
                        comparator = _timer.getActivityTime();
                        break;

                    case 'exit_intent':
                        comparator = _timer.getExitIntentTime();
                        break;

                    case 'display_count_per_customer':
                        comparator = _cookie.get(_currentId, 'display_count');
                        break;

                    case 'display_count_per_customer_per_day':
                    case 'display_count_per_customer_per_week':
                    case 'display_count_per_customer_per_month':
                        comparator = _getDisplayPerCustomerComparator(filter);
                        break;

                    case 'scroll_offset':
                        comparator = $(window).scrollTop();
                        break;

                    default:
                        return true;
                }

                result = _compareCondition(filter.value, comparator, filter.operator);
            }

            return result;
        }

        return {
            /**
             * Validate condition
             * @param {*} id
             * @returns {Boolean}
             */
            validate: function (id) {
                _currentId = id;

                return _validateConditions(_conditions[id]);
            },

            /**
             * Adds conditions
             * @param {Object} conditions
             */
            addConditions: function (conditions) {
                _.each(conditions, function (value, key) {
                    _conditions[key] = value;
                });
            }
        };
    };

    prototypes.popup = function () {
        var _cookie = Easybanner.Cookie,
            _rule   = Easybanner.Rule,
            _bannerIds = [],
            _lightbox,
            _awesomebar;

        _lightbox = {
            overlayId: 'easybanner-overlay-el',
            id: 'easybanner-lightbox-el',
            markup: [
                '<div id="easybanner-overlay-el" class="easybanner-overlay-el" style="display:none;"></div>',
                '<div id="easybanner-lightbox-el" class="easybanner-lightbox-el" style="display:none;">',
                    '<span class="easybanner-close easybanner-close-icon"></span>',
                    '<div class="easybanner-lightbox-content"></div>',
                '</div>'
            ].join(''),

            /**
             * Add markup to the body
             */
            create: function () {
                $('body').append(this.markup);
                this.overlay = $('#' + this.overlayId);
                this.el      = $('#' + this.id);
            },

            /**
             * Prepare popup observers
             */
            addObservers: function () {
                if (!this._onKeyPressBind) {
                    this._onKeyPressBind = this._onKeyPress.bind(this);
                    this._hideBind = this.hide.bind(this);
                    this._dontShowBind = this.dontShow.bind(this);
                }

                $(this.el).find('.easybanner-close').on('click', this._hideBind);
                $(this.el).find('.easybanner-close-permanent').on('click', this._dontShowBind);

                $(this.el).find('img').each(function () {
                    $(this).onload = this.center.bind(this);
                }.bind(this));

                $(document).off('keyup', this._onKeyPressBind);
                $(document).on('keyup', this._onKeyPressBind);

                if ('addEventListener' in window) {
                    window.addEventListener('resize', this.center.bind(this));
                } else {
                    window.attachEvent('onresize', this.center.bind(this));
                }
            },

            /**
             * Get popup content
             * @returns {*|jQuery}
             */
            getContentEl: function () {
                return $(this.el).children('.easybanner-lightbox-content');
            },

            /**
             * Show html in popup
             * @param {String} html
             */
            show: function (html) {
                if (!html) {
                    return;
                }

                if (!this.el) {
                    this.create();
                }
                this.getContentEl().append(html);

                // update class names to include all names of current banner
                $(this.el)
                    .removeClass()
                    .addClass('easybanner-lightbox-el')
                    .addClass(this.getContentEl().children().first().data('class'));

                this.addObservers();
                $(this.overlay).show();
                $(this.el).show();
                this.center();

                $(this.overlay).addClass('shown');
                $(this.el).addClass('shown');
            },

            /**
             * Hide popup
             */
            dontShow: function (e) {
                var id = this.getContentEl().children().first().attr('id');

                e.preventDefault();

                if (id) {
                    _cookie.set(id, 'dont_show', 1);
                }

                this.hide();
            },

            /**
             * Hide popup
             */
            hide: function () {
                if (this._onKeyPressBind) {
                    $(document).off('keyup', this._onKeyPressBind);
                }
                $('.easybanner-popup-banner').first().append(
                    this.getContentEl().children().first()
                );
                $(this.overlay).hide().removeClass('shown');

                $(this.el)
                    .hide()
                    .removeClass()
                    .addClass('easybanner-lightbox-el');
            },

            /**
             * Reset popup layout
             */
            resetLayout: function () {
                this.getContentEl().css({
                    height: 'auto'
                });
                $(this.el).css({
                    width: 0,
                    height: 0
                });
                $(this.el).css({
                    width: 'auto',
                    height: 'auto',
                    margin: 0,
                    left: 0,
                    top: 0
                });
            },

            /**
             * Align popup window to the center of viewport
             */
            center: function () {
                var viewportSize,
                    width,
                    height,
                    gap = {
                        horizontal: 50,
                        vertical: 50
                    };

                this.resetLayout();

                viewportSize = {
                    'width': $(window).width(),
                    'height': $(window).height()
                };
                width = $(this.el).outerWidth();

                if (viewportSize.width < width + gap.horizontal) {
                    width = viewportSize.width - gap.horizontal;
                }

                $(this.el).css({
                    width: width + 'px',
                    left: '50%',
                    marginLeft: -width / 2 + 'px'
                });

                height = $(this.el).outerHeight();

                if (viewportSize.height < height + gap.vertical) {
                    height = viewportSize.height - gap.vertical;
                }
                this.getContentEl().css({
                    height: height -
                        parseInt($(this.el).css('paddingTop'), 10) -
                        parseInt($(this.el).css('paddingBottom'), 10) + 'px'
                });

                $(this.el).css({
                    top: '50%',
                    marginTop: -height / 2 + 'px'
                });
            },

            /**
             * Key press observer
             * @param {Event} e
             * @private
             */
            _onKeyPress: function (e) {
                if (e.keyCode === 27) {
                    this.hide();
                }
            }
        };

        _awesomebar = {
            id: 'easybanner-awesomebar-el',
            markup: [
                '<div id="easybanner-awesomebar-el" class="easybanner-awesomebar-el" style="display:none;">',
                    '<span class="easybanner-close easybanner-close-icon"></span>',
                    '<div class="easybanner-awesomebar-content"></div>',
                '</div>'
            ].join(''),

            /**
             * Prepare html markup
             */
            create: function () {
                $('body').append(this.markup);
                this.el = $('#' + this.id);
            },

            /**
             * Add event observers
             */
            addObservers: function () {
                if (!this._hideBind) {
                    this._hideBind = this.hide.bind(this);
                    this._dontShowBind = this.dontShow.bind(this);
                }

                $(this.el).find('.easybanner-close').on('click', this._hideBind);
                $(this.el).find('.easybanner-close-permanent').on('click', this._dontShowBind);
            },

            /**
             * @returns {*|jQuery}
             */
            getContentEl: function () {
                return $(this.el).children('.easybanner-awesomebar-content');
            },

            /**
             * @returns {Number}
             */
            getTransitionDuration: function () {
                var duration = $(this.el).css('transition-duration');

                if (duration) {
                    duration = parseFloat(duration) * 1000;
                } else {
                    return 0;
                }

                return duration;
            },

            /**
             * Show content in awesomebar panel
             * @param {String} html
             */
            show: function (html) {
                if (!html) {
                    return;
                }

                if (!this.el) {
                    this.create();
                }

                this.getContentEl().append(html);

                // update class names to include all names of current banner
                $(this.el)
                    .removeClass()
                    .addClass('easybanner-awesomebar-el')
                    .addClass(this.getContentEl().children().first().data('class'));

                this.addObservers();

                $(this.el).show();
                setTimeout(function () {
                    $(this.el).css({
                        top: 0
                    });
                }.bind(this), 10);
            },

            /**
             * Hide popup
             */
            dontShow: function (e) {
                var id = this.getContentEl().children().first().attr('id');

                e.preventDefault();

                if (id) {
                    _cookie.set(id, 'dont_show', 1);
                }

                this.hide();
            },

            /**
             * Hide awesomebar
             */
            hide: function () {
                $(this.el).css({
                    top: -$(this.el).outerHeight() - 30 + 'px'
                });

                // time to hide the bar before move it
                setTimeout(function () {
                    $('.easybanner-popup-banner').append({
                        bottom: this.getContentEl().children().first()
                    });

                    $(this.el)
                        .hide()
                        .removeClass()
                        .addClass('easybanner-awesomebar-el');
                }.bind(this), this.getTransitionDuration());
            }
        };

        return {
            /**
             * Collect all rendered banners and add them into array
             */
            init: function () {
                $('.easybanner-popup-banner .easybanner-banner').each(function () {
                    _bannerIds.push($(this).attr('id'));
                });
                this.initBanners();
            },

            /**
             * 1. Show banner if needed.
             * 2. Call every second for conditional banners
             */
            initBanners: function () {
                var shownIds = [],
                    limit = _bannerIds.length,
                    i;

                if (!Easybanner.Cookie.isWritable) {
                    return;
                }

                for (i = 0; i < limit; ++i) {
                    if (_cookie.get(_bannerIds[i], 'dont_show')) {
                        shownIds.push(_bannerIds[i]);
                    } else if (_rule.validate(_bannerIds[i])) {
                        this.show(_bannerIds[i]);
                        shownIds.push(_bannerIds[i]);
                    }
                }

                for (i = 0; i < shownIds.length; ++i) {
                    _bannerIds.splice(_bannerIds.indexOf(shownIds[i]), 1);
                }

                if (_bannerIds.length) {
                    setTimeout(this.initBanners.bind(this), 220);
                }
            },

            /**
             * Show banner by its ID
             * @param {String} id
             */
            show: function (id) {
                var el = $('#' + id),
                    popupObject,
                    count,
                    counters = [
                        'display_count',
                        'display_count_per_day',
                        'display_count_per_week',
                        'display_count_per_month'
                    ];

                if (!el) {
                    return;
                }

                if ($(el).hasClass('placeholder-lightbox')) {
                    popupObject = _lightbox;
                } else if ($(el).hasClass('placeholder-awesomebar')) {
                    popupObject = _awesomebar;
                } else {
                    return;
                }

                // show only one banner at once
                if (popupObject.el && popupObject.el.is(':visible')) {
                    return;
                }
                popupObject.show(el);

                $.each(counters, function (i, counter) {
                    var timeCounterCookie, currentDate;

                    count = _cookie.get(id, counter);

                    if (!count) {
                        count = 0;
                    }

                    if (counter !== 'display_count') {
                        timeCounterCookie = counter + '_time';
                        currentDate = new Date();
                        _cookie.set(id, timeCounterCookie, currentDate.getTime());
                    }

                    _cookie.set(id, counter, ++count);
                });
            },

            /**
             * Hide banner by its ID
             * @param {String} id
             */
            hide: function (id) {
                var el = $('#' + id),
                    popupObject;

                if (el.up('.easybanner-lightbox-el')) {
                    popupObject = _lightbox;
                } else if (el.up('.easybanner-awesomebar-el')) {
                    popupObject = _awesomebar;
                } else {
                    return;
                }

                popupObject.hide();
            }
        };
    };

    /**
     * @var {Object} settings
     */
    function initialize(settings) {
        Easybanner.Cookie = prototypes.cookie(settings.cookieName || 'easybanner');
        Easybanner.Touch = prototypes.touch();
        Easybanner.ExitIntent = prototypes.exitIntent();
        Easybanner.Timer = prototypes.timer();
        Easybanner.Rule = prototypes.rule();
        Easybanner.Popup = prototypes.popup();

        Easybanner.Rule.addConditions(settings.conditions || settings);
        Easybanner.Popup.init();
    }

    return function (settings) {
        initialize(settings);
    };
}));
(function () {
    'use strict';

    $(document).on('breeze:mount:easybanner', function (event, data) {
        new $.easybanner.Widget(data.settings);
    });
})();

(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'knockout', 'underscore'], factory);
    } else {
        /* global ko _ */
        $.prolabels = $.prolabels || {};
        $.prolabels.ViewModel = factory($, ko, _);
    }
}(function ($, ko, _) {
    'use strict';

    /**
     * [countDecimals description]
     * https://stackoverflow.com/a/17369245
     *
     * @param  {Float} value
     * @return {Number}
     */
    function countDecimals(value) {
        var parts = value.toString().split('.');

        return parts.length < 2 ? 0 : parts[1].length;
    }

    /**
     * Round value using roundValue and roundMethod
     *
     * @param  {float} value
     * @param  {int} roundValue
     * @param  {String} roundMethod
     * @return {float}
     */
    function roundNumber(value, roundValue, roundMethod) {
        var newValue;

        roundValue = roundValue || 1;
        newValue = Math[roundMethod](value / roundValue) * roundValue;

        return newValue.toFixed(countDecimals(roundValue));
    }

    /**
     * Map all properties of object as observable for viewModel
     *
     * @param  {Object} object
     * @param  {Object} viewModel
     * @return void
     */
    function koMapping(object, viewModel) {
        $.each(object, function (key, value) {
            viewModel[key] = ko.observable(value);
        });
    }

    /**
     * Image on load function to add image to label
     *
     * @param  {Event} event
     * @return void
     */
    function imageOnload(event) {
        var koLabel = this,
            img = event.target;

        koLabel.imageCss(
            'background-image: url(' + img.src + '); ' +
            'width: ' + img.width + 'px; ' +
            'height: ' + img.height + 'px; '
        );
    }

    /**
     * Update image css for labels when label image is changed
     *
     * @param  {String} newValue
     * @return void
     */
    function updateImageCss(newValue) {
        var koLabel = this,
            img;

        if (newValue) {
            img = new Image();
            img.onload = $.proxy(imageOnload, koLabel);
            img.src = newValue;
        } else {
            koLabel.imageCss('');
        }
    }

    /**
     * Process label text
     *
     * @return {String}
     */
    function processText() {
        var koLabel = this,
            varValue,
            newValue;

        newValue = koLabel.text ? koLabel.text() : '';
        $.each(koLabel.root.predefinedVars, function (predefinedVar, value) {
            if (newValue.indexOf(predefinedVar) > -1) {
                value = value === null ? '' : value;
                varValue = isNaN(value) || value === '' ?
                    value :
                    roundNumber(
                        value,
                        koLabel['round_value'] ? koLabel['round_value']() : 1,
                        koLabel['round_method'] ? koLabel['round_method']() : 'round'
                    );
                newValue = newValue.replace(new RegExp(predefinedVar, 'g'), varValue);
            }
        });

        return newValue;
    }

    /**
     * Collect all classes into one string.
     *
     * @return {String}
     */
    function prepareCssClasses() {
        var koLabel = this;

        return 'prolabel' +
            (koLabel['css_class'] ? ' ' + koLabel['css_class']() : '');
    }

    /**
     * ko ViewModel for labels.
     *
     * Structure of labelsData parameter
     *
     * [
     *     {
     *         position: 'position1',
     *         items: [label1 (Object), label2 (Object) .. labelN (Object)]
     *     },
     *     {
     *         position: 'position2',
     *         items: [label1 (Object), label2 (Object) .. labelN (Object)]
     *     }
     *     ...
     * ]
     *
     * @param  {Array} labelsData
     * @param  {Object} predefinedVars
     */
    return function (labelsData, predefinedVars) {
        var self = this;

        self.predefinedVars = predefinedVars || {};
        self.labelsData = [];
        $.each(labelsData, function () {
            var data = {};

            data.position = ko.observable(this.position);
            data.items = [];
            $.each(this.items, function () {
                var model = {};

                this.imageCss = '';
                this.image = this.image || '';
                this.custom = this.custom || '';
                koMapping(this, model);

                if (!_.isEmpty(model)) {
                    model.root = self;
                    model.textProcessed = ko.pureComputed(processText, model);
                    model.cssClasses = ko.pureComputed(prepareCssClasses, model);
                    model.image.subscribe(updateImageCss, model);
                    updateImageCss.bind(model)(model.image());
                    data.items.push(model);
                }
            });

            self.labelsData.push(data);
        });
    };
}));
/* global _ ko */
(function () {
    'use strict';

    $.widget('renderLabels', {
        options: {
            template: 'Swissup_ProLabels_labels',
            labelsData: {},
            predefinedVars: {},
            target: '',
            renderMode: 'replaceChildren'
        },

        /** Add ko template bind and apply ko binding to element */
        create: function () {
            var me = this;

            me.viewModel = new $.prolabels.ViewModel(
                me.options.labelsData,
                me.options.predefinedVars
            );

            ko.renderTemplate(
                me.options.template,
                me.viewModel,
                {},
                $(me.options.target || me.element, me.element).get(0),
                me.options.renderMode
            );
        }
    });

    $.widget('prolabels', {
        component: 'Swissup_ProLabels/js/prolabels',
        options: {
            parent: null,
            imageLabelsTarget: '',
            imageLabelsInsertion: 'appendTo',
            imageLabelsWrap: true,
            imageLabelsRenderAsync: false,
            contentLabelsTarget: '',
            contentLabelsInsertion: 'appendTo',
            labelsData: {},
            predefinedVars: {}
        },

        /** [create description] */
        init: function () {
            var baseImageElement,
                contentElement,
                me = this;

            me.containers = {};
            me.renderContext = me.options.parent ?
                me.element.closest(me.options.parent) :
                me.element;

            baseImageElement = me.options.imageLabelsTarget ?
                me.renderContext.find(me.options.imageLabelsTarget) :
                me.renderContext;
            me.renderImageLabels(baseImageElement.get(0));

            contentElement = me.renderContext.find(me.options.contentLabelsTarget);
            me.renderContentLabels(contentElement.get(0));
        },

        destroy: function () {
            if (this.containers.imageLabels) {
                this.containers.imageLabels.remove();
            }

            if (this.containers.contentLabels) {
                this.containers.contentLabels.remove();
            }

            this._super();
        },

        /**
         * Render prolabels for product image.
         *
         * @param  {String} baseImage
         */
        renderImageLabels: function (baseImage) {
            var targetElement,
                insertionMethod,
                options,
                me = this;

            if (me.options.imageLabelsWrap &&
                !$(baseImage).hasClass('prolabels-wrapper')
            ) {
                if ($(baseImage).parent().hasClass('prolabels-wrapper')) {
                    // parent element has wrappr class
                    targetElement = $(baseImage).parent();
                } else {
                    // add prolabels-wrapper
                    targetElement = $(baseImage)
                        .wrap('<div class="prolabels-wrapper"></div>')
                        .parent();
                }
            } else {
                // do not add prolabels-wrapper
                targetElement = $(baseImage);
            }

            options = {
                labelsData: me.getImageLabels(),
                predefinedVars: me.options.predefinedVars
            };

            if (targetElement.length) {
                insertionMethod = me.options.imageLabelsInsertion;
                me.containers.imageLabels = $('<div></div>');
                me.containers.imageLabels[insertionMethod](targetElement);
                me.containers.imageLabels.renderLabels(options);
            }
        },

        /**
         * Render prolabels in product info.
         *
         * @param  {String} outputElement
         */
        renderContentLabels: function (outputElement) {
            var insertionMethod,
                options,
                me = this;

            insertionMethod = me.options.contentLabelsInsertion;
            me.containers.contentLabels = $('<div class="prolabels-content-wrapper"></div>');
            me.containers.contentLabels[insertionMethod]($(outputElement));
            options = {
                labelsData: me.getContentLabels(),
                predefinedVars: me.options.predefinedVars
            };
            me.containers.contentLabels.renderLabels(options);
        },

        /**
         * @return {Object}
         */
        getImageLabels: function () {
            var data = [];

            $.each(this.options.labelsData, function () {
                if (this.position !== 'content') {
                    data.push(this);
                }
            });

            return data;
        },

        /**
         * @return {Object}
         */
        getContentLabels: function () {
            var data = [];

            $.each(this.options.labelsData, function () {
                if (this.position === 'content') {
                    data.push(this);
                }
            });

            return data;
        }
    });

    $.widget('prolabelsConfigurable', {
        component: 'Swissup_ProLabels/js/prolabels-configurable',

        /** [create description] */
        create: function () {
            var self = this;

            this.reinitProlabels(this.options.superProduct);

            // Listen options change when swatches disabled.
            $(this.options.configurableOptions).on('change.prolabels', function () {
                var configurable = $('#product_addtocart_form').data('configurable');

                if (configurable) {
                    self.reinitProlabels(configurable.simpleProduct);
                }
            });

            // Listen options change when swatches enabled.
            $(this.options.swatchOptions).on('change.prolabels', function (event) {
                var swatchRenderer = $(event.currentTarget).data('SwatchRenderer');

                if (swatchRenderer) {
                    self.reinitProlabels(swatchRenderer.getProduct());
                }
            });
        },

        /** [destroy description] */
        destroy: function () {
            $(this.options.configurableOptions).off('change.prolabels');
            $(this.options.swatchOptions).off('change.prolabels');
            this._super();
        },

        /** [reinitProlabels description] */
        reinitProlabels: function (product) {
            var prolabels = this.element.data('prolabels');

            if (prolabels && prolabels.destroy) {
                prolabels.destroy();
            }

            product = product ? product : this.options.superProduct;

            if (this.options.labels[product]) {
                this.element.prolabels(this.options.labels[product]);
            }
        }
    });

    $.mixin('recentProducts', {
        /** [afterGetAdditionalContent description] */
        getAdditionalContent: function (o, item, element) {
            if (item.extension_attributes && item.extension_attributes.swissup_prolabel) {
                $(element).prolabels(JSON.parse(item.extension_attributes.swissup_prolabel));
            }

            return o(item, element);
        }
    });
})();
