(function () {
    'use strict';

    $.widget('pageCache', {
        component: 'pageCache',
        options: {
            url: '/',
            patternPlaceholderOpen: /^ BLOCK (.+) $/,
            patternPlaceholderClose: /^ \/BLOCK (.+) $/,
            versionCookieName: 'private_content_version',
            handles: []
        },

        /** Initialize plugin */
        create: function () {
            var placeholders,
                version = $.cookies.get(this.options.versionCookieName);

            if (!version) {
                return;
            }
            placeholders = this._searchPlaceholders(this.getComments());

            if (placeholders && placeholders.length) {
                this._ajax(placeholders, version);
            }
        },

        /** Get all comments */
        getComments: function () {
            var comments = [],
                iterator = document.createNodeIterator(
                    document.body,
                    NodeFilter.SHOW_COMMENT,

                    /** [filterNone description] */
                    function filterNone() {
                        return NodeFilter.FILTER_ACCEPT;
                    },
                    false
                ),
                curNode;

            while ((curNode = iterator.nextNode())) {
                comments.push(curNode);
            }

            return comments;
        },

        /**
         * @param {Array} elements
         * @returns {Array}
         * @private
         */
        _searchPlaceholders: function (elements) {
            var placeholders = [],
                tmp = {},
                ii,
                len,
                el, matches, name;

            if (!(elements && elements.length)) {
                return placeholders;
            }

            for (ii = 0, len = elements.length; ii < len; ii++) {
                el = elements[ii];
                matches = this.options.patternPlaceholderOpen.exec(el.nodeValue);
                name = null;

                if (matches) {
                    name = matches[1];
                    tmp[name] = {
                        name: name,
                        openElement: el
                    };
                } else {
                    matches = this.options.patternPlaceholderClose.exec(el.nodeValue);

                    if (matches) { //eslint-disable-line max-depth
                        name = matches[1];

                        if (tmp[name]) { //eslint-disable-line max-depth
                            tmp[name].closeElement = el;
                            placeholders.push(tmp[name]);
                            delete tmp[name];
                        }
                    }
                }
            }

            return placeholders;
        },

        /**
         * Parse for page and replace placeholders
         * @param {Object} placeholder
         * @param {Object} html
         * @protected
         */
        _replacePlaceholder: function (placeholder, html) {
            var startReplacing = false,
                prevSibling = null,
                parent, contents, yy, len, element;

            if (!placeholder || !html) {
                return;
            }

            parent = $(placeholder.openElement).parent();
            contents = parent.contents();

            for (yy = 0, len = contents.length; yy < len; yy++) {
                element = contents[yy];

                if (element == placeholder.openElement) { //eslint-disable-line eqeqeq
                    startReplacing = true;
                }

                if (startReplacing) {
                    $(element).remove();
                } else if (element.nodeType != 8) { //eslint-disable-line eqeqeq
                    //due to comment tag doesn't have siblings we try to find it manually
                    prevSibling = element;
                }

                if (element == placeholder.closeElement) { //eslint-disable-line eqeqeq
                    break;
                }
            }

            if (prevSibling) {
                $(prevSibling).after(html);
            } else {
                $(parent).prepend(html);
            }

            // trigger event to use mage-data-init attribute
            $(parent).trigger('contentUpdated');
        },

        /**
         * @param {Object} placeholders
         * @param {String} version
         * @private
         */
        _ajax: function (placeholders, version) {
            var self = this,
                data = {
                    blocks: [],
                    handles: this.options.handles,
                    originalRequest: this.options.originalRequest,
                    version: version
                };

            $.each(placeholders, function () {
                data.blocks.push(this.name);
            });

            data.blocks = JSON.stringify(data.blocks.sort());
            data.handles = JSON.stringify(data.handles);
            data.originalRequest = JSON.stringify(data.originalRequest);

            $.request.get({
                url: this.options.url,
                data: data,
                type: 'json'
            }).then(function (response) {
                $.each(placeholders, function () {
                    self._replacePlaceholder(this, response.body[this.name]);
                });
            });
        }
    });
})();

/* global _ ko */
(function () {
    'use strict';

    // Magento_Ui/js/view/messages
    $.view('uiMessages', {
        component: 'Magento_Ui/js/view/messages',
        defaults: {
            template: 'uiMessages'
        },

        create: function () {
            this.errorMessages = ko.observableArray([]);
            this.successMessages = ko.observableArray([]);
            this.messageContainer = this;
        },

        isVisible: function () {
            return this.hasMessages();
        },

        hasMessages: function () {
            return this.errorMessages().length > 0 || this.successMessages().length > 0;
        },

        removeAll: function () {
            this.errorMessages.removeAll();
            this.successMessages.removeAll();
        },

        addErrorMessage: function (message) {
            this.errorMessages.push(message);
        },

        addSuccessMessage: function (message) {
            this.successMessages.push(message);
        },

        getErrorMessages: function () {
            return this.errorMessages();
        },

        getSuccessMessages: function () {
            return this.successMessages();
        }
    });

    // Magento_Theme/js/view/messages
    $.view('messages', {
        component: 'Magento_Theme/js/view/messages',

        /** Init component */
        create: function () {
            var self = this;

            this.cookieMessages = _.unique($.cookies.getJson('mage-messages') || [], 'text');
            this.messages = $.sections.get('messages');

            // cleanup possible duplicates
            this.cookieMessages = _.reject(this.cookieMessages, function (cookieMessage) {
                return _.some(self.messages().messages, function (sectionMessage) {
                    return sectionMessage.text === cookieMessage.text;
                });
            });

            this.removeCookieMessages();
        },

        /** Remove mage-messages cookie */
        removeCookieMessages: function () {
            $.cookies.remove('mage-messages', {
                domain: ''
            });
        },

        /**
         * @param {String} message
         * @return {String}
         */
        prepareMessageForHtml: function (message) {
            return message.replace(/\+/g, ' ');
        },

        /** Hide all messages */
        destroy: function () {
            $('.messages', this.element).remove();
            this.messages([]);
            this._super();
        }
    });

    // Merge cookie messages (ajax compare) with json response messages
    $(document).on('customer-data-reload', function (event, data) {
        var cookieMessages = $.cookies.getJson('mage-messages') || [],
            messages = _.get(data, 'response.messages'.split('.'), {});

        $.view('messages').invoke('removeCookieMessages');

        messages.messages = messages.messages || [];
        messages.messages = messages.messages.concat(cookieMessages);
        $.sections.set('messages', messages);
    });
})();

/* global _ */
(function () {
    'use strict';

    var loader,
        template = [
            '<div data-role="loader" class="loading-mask" style="position: absolute;">',
                '<div class="loader">',
                    '<% if (loaderImageHref) { %>',
                        '<img src="<%= loaderImageHref %>" alt="Loading..." style="position: absolute;">',
                    '<% } %>',
                '</div>',
            '</div>'
        ].join('');

    /**
     * @param {Object} element
     */
    function show(element, settings) {
        var position = element.css('position'),
            spinner = loader.clone();

        settings = settings || {};

        if (position !== 'absolute' && position !== 'fixed') {
            element.addClass('_block-content-loading');
        }

        if (settings.css) {
            spinner.css(settings.css);
        }

        element.append(spinner);
    }

    /**
     * @param {Object} element
     * @param {Object} settings
     */
    function delayedShow(element, settings) {
        settings = settings || {};

        if (!settings.delay) {
            return show(element, settings);
        }

        if (element.data('spinner-timer')) {
            return;
        }

        element.data('spinner-timer', setTimeout(function () {
            element.data('spinner-timer', 0);
            show(element, settings);
        }, settings.delay));
    }

    /**
     * @param {Object} element
     */
    function hide(element) {
        var timerId = element.data('spinner-timer');

        if (timerId) {
            clearTimeout(timerId);
            element.data('spinner-timer', 0);
        }

        if (!element.has('.loading-mask').length) {
            return;
        }
        element.find('.loading-mask').remove();
        element.removeClass('_block-content-loading');
    }

    $.widget('blockLoader', {
        component: 'Magento_Ui/js/block-loader',

        /** [create description] */
        create: function () {
            var href = this.options;

            if (!loader) {
                loader = $(_.template(template)({
                    loaderImageHref: href
                }));
            }
        },
        show: delayedShow, // @todo Promise
        hide: hide  // @todo Promise
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('dataPost', {
        options: {
            formTemplate: '<form action="<%- data.action %>" method="post">' +
            '<% _.each(data.data, function(value, index) { %>' +
            '<input name="<%- index %>" value="<%- value %>">' +
            '<% }) %></form>',
            formKeyInputSelector: 'input[name="form_key"]'
        },

        /** Send post request */
        postData: function (params) {
            var self = this,
                formKey = $(this.options.formKeyInputSelector).val(),
                $form;

            if (formKey) {
                params.data.form_key = formKey;
            }

            $form = $(_.template(this.options.formTemplate)({
                data: params
            }));

            if (params.files) {
                console.error('Send files is not implemented');
                // $form[0].enctype = 'multipart/form-data';
                // $.each(params.files, function (key, files) {
                //     if (files instanceof FileList) {
                //         input = document.createElement('input');
                //         input.type = 'file';
                //         input.name = key;
                //         input.files = files;
                //         $form[0].appendChild(input);
                //     }
                // });
            }

            $form.appendTo('body').hide();
            $form.target = params.target;

            if (!params.data.confirmation) {
                return this.submitForm($form);
            }

            $.confirm({
                content: params.data.confirmationMessage,
                actions: {
                    /** [confirm description] */
                    confirm: function () {
                        self.submitForm($form);
                    }
                }
            });
        },

        /** [submitForm description] */
        submitForm: function (form) {
            form.submit();
            // $.request.post({
            //     form: form,
            //     strict: false
            // });
        }
    });

    $.mage = $.mage || {};
    $.mage.dataPost = $.fn.dataPost;

    $(document).on('click.dataPost', '[data-post], [data-post-remove]', function () {
        var params = $(this).data('post') || $(this).data('post-remove') || {};

        params.target = $(this);

        $.fn.dataPost().postData(params);

        return false;
    });
})();

(function () {
    'use strict';

    $.widget('menu', {
        component: 'menu',
        options: {
            menus: 'ul',
            dropdown: 'ul',
            useInlineDisplay: true,
            responsive: true,
            expanded: false,
            showDelay: 42,
            hideDelay: 300,
            mediaBreakpoint: '(max-width: 767px)'
        },

        /** Init widget */
        create: function () {
            var mql,
                self = this,
                themeBreakpoint = $('body').var('--navigation-media-mobile');

            if (this.options.responsive) {
                mql = window.matchMedia(themeBreakpoint || this.options.mediaBreakpoint);
                mql.addListener(this.toggleMode.bind(this));
                this.toggleMode(mql);
            } else if (this.options.mode === 'mobile') {
                this.toggleMobileMode();
            } else {
                this.toggleDesktopMode();
            }

            this.focusTrap = this.createFocusTrap(this.element.closest('.navigation-wrapper,.nav-sections'));
            this._setActiveMenu(); // varnish fix

            if (this.element.closest('.nav-sections, .page-header, .navigation-wrapper').length) {
                this.addToggleListener();
            }

            $('li.parent > ul', this.element).hide();
            $('li.parent', this.element)
                .children('a')
                .filter(function () {
                    return $(this).children('.ui-icon').length === 0;
                })
                .prepend('<span class="ui-menu-icon ui-icon"></span>');

            $('li.parent', this.element).on('keydown.menu', function (e) {
                var dropdown = $(this).children(self.options.dropdown),
                    visibleDropdowns = $(self.options.dropdown + '.shown');

                if (['Enter', 'Escape', ' '].indexOf(e.key) === -1) {
                    return;
                }

                if (e.key === 'Enter' && dropdown.hasClass('shown')) {
                    return;
                }

                e.stopPropagation();

                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();

                    visibleDropdowns.not(dropdown).each(function () {
                        if (!$(this).has(dropdown.get(0)).length) {
                            self.close($(this));
                        }
                    });

                    if (dropdown.hasClass('shown')) {
                        self.close(dropdown);
                    } else {
                        self.open(dropdown);
                    }
                } else if (e.key === 'Escape' && visibleDropdowns.length) {
                    self.close(visibleDropdowns.last());
                }
            });

            $('a', this.element).on('click.menu', '.ui-icon', function () {
                var dropdown = $(this).closest('a').siblings(self.options.dropdown);

                if (!dropdown.length) {
                    return;
                }

                if (dropdown.hasClass('shown')) {
                    self.close(dropdown);
                } else {
                    self.open(dropdown);
                }

                return false;
            });
        },

        /** Hide expanded menu's, remove event listeneres */
        destroy: function () {
            $.breeze.scrollbar.reset();

            $(this.options.dropdown + '.shown', this.element).each(function (i, dropdown) {
                this.close($(dropdown));
            }.bind(this));
            $('html').removeClass('nav-open').removeClass('nav-before-open');

            if (this.element.closest('.nav-sections, .navigation-wrapper, .page-header').length) {
                $(document).off('click.menu').off('keydown.menu');
            }

            this._super();
        },

        /** [addToggleListener description] */
        addToggleListener: function () {
            $('[data-action="toggle-nav"]').attr('tabindex', 0);

            $(document)
                .on('click.menu', '[data-action="toggle-nav"]', this.toggleNavbar.bind(this))
                .on('keydown.menu', '[data-action="toggle-nav"]', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        this.toggleNavbar();
                    } else if (e.key === 'Escape') {
                        this.closeNavbar();
                    }
                }.bind(this));

            this._on(document, {
                keydown: function (e) {
                    if (e.key === 'Escape' && $('html').hasClass('nav-open')) {
                        this.closeNavbar();
                    }
                }.bind(this)
            });
        },

        /** [toggleNavbar description] */
        toggleNavbar: function (flag) {
            if (flag === false || $('html').hasClass('nav-open')) {
                this.closeNavbar();
            } else {
                this.openNavbar();
            }
        },

        /** Show mobile navbar */
        openNavbar: function () {
            var self = this,
                html = $('html');

            $.breeze.scrollbar.hide();
            self._trigger('navBeforeOpen');
            html.addClass('nav-before-open');
            setTimeout(function () {
                html.addClass('nav-open');
                self._trigger('navAfterOpen');
            }, self.options.showDelay);
            setTimeout(self.focusTrap.activate, 300); // wait till css animation is over
        },

        /** Hide mobile navbar  */
        closeNavbar: function () {
            var self = this,
                html = $('html');

            self._trigger('navBeforeClose');
            self.focusTrap.deactivate();
            html.removeClass('nav-open');
            setTimeout(function () {
                $.breeze.scrollbar.reset();
                html.removeClass('nav-before-open');
                self._trigger('navAfterClose');
            }, self.options.hideDelay);
        },

        /** Toggles between mobile and desktop modes */
        toggleMode: function (event) {
            if (event.matches) {
                this.toggleMobileMode();
            } else {
                this.toggleDesktopMode();
            }
        },

        /** Enable desktop mode */
        toggleDesktopMode: function () {
            var self = this;

            $(self.options.dropdown + '.shown').each(function () {
                self.close($(this));
            });

            $('li.parent', this.element)
                .off('click.menu')
                .on('mouseenter.menu', function () {
                    var dropdown = $(this).children(self.options.dropdown);

                    if (this.breezeTimeout) {
                        clearTimeout(this.breezeTimeout);
                        delete this.breezeTimeout;
                    }

                    self.open(dropdown);
                })
                .on('mouseleave.menu', function () {
                    this.breezeTimeout = setTimeout(function () {
                        self.close($(this).children(self.options.dropdown));
                    }.bind(this), 80);
                });

            this._trigger('afterToggleDesktopMode');
        },

        /** Enable mobile mode */
        toggleMobileMode: function () {
            var self = this;

            $('li.parent', this.element)
                .off('mouseenter.menu mouseleave.menu')
                .on('click.menu', function () {
                    var dropdown = $(this).children(self.options.dropdown);

                    if (!dropdown.length || dropdown.hasClass('shown')) {
                        return;
                    }

                    self.open(dropdown);

                    return false;
                });

            this._trigger('afterToggleMobileMode');
        },

        /** [open description] */
        open: function (dropdown) {
            this._trigger('beforeOpen', {
                dropdown: dropdown
            });

            dropdown.addClass('shown')
                .parent('li')
                .addClass('opened');

            if (this.options.useInlineDisplay) {
                dropdown.show();
            }
        },

        /** [open description] */
        close: function (dropdown) {
            var eventData = {
                dropdown: dropdown,
                preventDefault: false
            };

            this._trigger('beforeClose', eventData);

            if (eventData.preventDefault === true) {
                return;
            }

            dropdown.removeClass('shown')
                .parent('li')
                .removeClass('opened');

            if (this.options.useInlineDisplay) {
                dropdown.hide();
            }

            this._trigger('afterClose', {
                dropdown: dropdown
            });
        },

        /** [_setActiveMenu description] */
        _setActiveMenu: function () {
            var currentUrl = window.location.href.split('?')[0];

            if (!this._setActiveMenuForCategory(currentUrl)) {
                this._setActiveMenuForProduct(currentUrl);
            }
        },

        /** [_setActiveMenuForCategory description] */
        _setActiveMenuForCategory: function (url) {
            var activeCategoryLink = this.element.find('a[href="' + url + '"]'),
                classes,
                classNav;

            if (!activeCategoryLink || !activeCategoryLink.parent().hasClass('category-item')) {
                return false;
            } else if (!activeCategoryLink.parent().hasClass('active')) {
                activeCategoryLink.parent().addClass('active');
                classes = activeCategoryLink.parent().attr('class');
                classNav = classes.match(/(nav\-)[0-9]+(\-[0-9]+)+/gi);

                if (classNav) {
                    this._setActiveParent(classNav[0]);
                }
            }

            return true;
        },

        /** [_setActiveParent description] */
        _setActiveParent: function (childClassName) {
            var parentElement,
                parentClass = childClassName.substr(0, childClassName.lastIndexOf('-'));

            if (parentClass.lastIndexOf('-') !== -1) {
                parentElement = this.element.find('.' + parentClass);

                if (parentElement) {
                    parentElement.addClass('has-active');
                }
                this._setActiveParent(parentClass);
            }
        },

        /** [_setActiveMenuForProduct description] */
        _setActiveMenuForProduct: function (currentUrl) {
            var categoryUrlExtension,
                lastUrlSection,
                possibleCategoryUrl,
                //retrieve first category URL to know what extension is used for category URLs
                firstCategoryUrl = this.element.children('li').find('a').attr('href');

            if (firstCategoryUrl) {
                lastUrlSection = firstCategoryUrl.substr(firstCategoryUrl.lastIndexOf('/'));
                categoryUrlExtension = lastUrlSection.lastIndexOf('.') !== -1 ?
                    lastUrlSection.substr(lastUrlSection.lastIndexOf('.')) : '';

                possibleCategoryUrl = currentUrl.substr(0, currentUrl.lastIndexOf('/')) + categoryUrlExtension;
                this._setActiveMenuForCategory(possibleCategoryUrl);
            }
        }
    });
})();

/* global ko _ */
(function () {
    'use strict';

    $.widget('sidebar', {
        options: {
            minicart: {
                maxItemsVisible: 3
            }
        },
        scrollHeight: 0,
        shoppingCartUrl: window.checkout ? window.checkout.shoppingCartUrl : '',

        /** Create sidebar. */
        create: function () {
            this._addObservers();
            this._calcHeight();
        },

        /** Update sidebar block. */
        update: function () {
            this._calcHeight();
        },

        /** [_addObservers description] */
        _addObservers: function () {
            var self = this;

            this.element.on('click', this.options.button.checkout, function () {
                var cart = $.sections.get('cart'),
                    customer = $.sections.get('customer');

                if (!customer().firstname && cart().isGuestCheckoutAllowed === false) {
                    $.cookies.set('login_redirect', self.options.url.checkout);

                    // if (self.options.url.isRedirectRequired) {
                    $(this).prop('disabled', true);
                    location.href = self.options.url.loginUrl;
                    // } else {
                    //     authenticationPopup.showModal();
                    // }

                    return false;
                }

                $(this).prop('disabled', true);
                location.href = self.options.url.checkout;
            }).on('click', this.options.button.remove, function (event) {
                event.preventDefault();
                event.stopPropagation();

                $.confirm({
                    content: self.options.confirmMessage,
                    actions: {
                        /** @inheritdoc */
                        confirm: function () {
                            self._removeItem($(event.currentTarget));
                        },

                        /** @inheritdoc */
                        always: function (e) {
                            e.stopImmediatePropagation();
                        }
                    }
                });
            }).on('keyup change', this.options.item.qty, function (event) {
                self._showItemButton($(event.target));
            }).on('click', this.options.item.button, function (event) {
                event.stopPropagation();
                self._updateItemQty($(event.currentTarget));
            }).on('focusout', this.options.item.qty, function (event) {
                self._validateQty($(event.currentTarget));
            });
        },

        /**
         * @param {HTMLElement} elem
         */
        _showItemButton: function (elem) {
            var itemId = elem.data('cart-item'),
                itemQty = elem.data('item-qty');

            if (this._isValidQty(itemQty, elem.val())) {
                this.element.find('#update-cart-item-' + itemId).show('fade', 300);
            } else if (elem.val() == 0) { //eslint-disable-line eqeqeq
                this._hideItemButton(elem);
            } else {
                this._hideItemButton(elem);
            }
        },

        /**
         * @param {*} origin - origin qty. 'data-item-qty' attribute.
         * @param {*} changed - new qty.
         * @return {Boolean}
         */
        _isValidQty: function (origin, changed) {
            return origin != changed && //eslint-disable-line eqeqeq
                changed.length > 0 &&
                changed - 0 == changed && //eslint-disable-line eqeqeq
                changed - 0 > 0;
        },

        /**
         * @param {Object} elem
         */
        _validateQty: function (elem) {
            var itemQty = elem.data('item-qty');

            if (!this._isValidQty(itemQty, elem.val())) {
                elem.val(itemQty);
            }
        },

        /**
         * @param {HTMLElement} elem
         */
        _hideItemButton: function (elem) {
            this.element.find('#update-cart-item-' + elem.data('cart-item')).hide();
        },

        /**
         * @param {HTMLElement} elem
         */
        _updateItemQty: function (elem) {
            var itemId = elem.data('cart-item');

            this._ajax(this.options.url.update, {
                'item_id': itemId,
                'item_qty': this.element.find('#cart-item-' + itemId + '-qty').val()
            }, elem, this._updateItemQtyAfter);
        },

        /**
         * Update content after update qty
         *
         * @param {HTMLElement} elem
         */
        _updateItemQtyAfter: function (elem) {
            var productData = this._getProductById(Number(elem.data('cart-item')));

            if (!_.isUndefined(productData)) {
                $(document).trigger('ajax:updateCartItemQty');

                if (window.location.href === this.shoppingCartUrl) {
                    window.location.reload(false);
                }
            }

            this._hideItemButton(elem);
        },

        /**
         * @param {HTMLElement} elem
         */
        _removeItem: function (elem) {
            this._ajax(this.options.url.remove, {
                'item_id': elem.data('cart-item')
            }, elem, this._removeItemAfter);
        },

        /**
         * Update content after item remove
         *
         * @param {Object} elem
         */
        _removeItemAfter: function (elem) {
            var productData = this._getProductById(Number(elem.data('cart-item')));

            if (!_.isUndefined(productData)) {
                $(document).trigger('ajax:removeFromCart', {
                    productIds: [productData.product_id],
                    productInfo: [{
                        'id': productData.product_id
                    }]
                });

                if (window.location.href.indexOf(this.shoppingCartUrl) === 0) {
                    window.location.reload();
                }
            }
        },

        /**
         * Retrieves product data by Id.
         *
         * @param {Number} productId - product Id
         * @return {Object|undefined}
         */
        _getProductById: function (productId) {
            return _.find($.sections.get('cart')().items, function (item) {
                return productId === Number(item.item_id);
            });
        },

        /**
         * @param {String} url - ajax url
         * @param {Object} data - post data for ajax call
         * @param {Object} elem - element that initiated the event
         * @param {Function} callback - callback method to execute after AJAX success
         */
        _ajax: function (url, data, elem, callback) {
            var self = this;

            elem.prop('disabled', true);

            $.request.post({
                url: url,
                data: data,
                type: 'form'
            }).then(function (response) {
                elem.prop('disabled', false);

                if (response.body.success) {
                    callback.call(self, elem, response);
                } else if (response.body.error_message) {
                    $.alert({
                        content: response.body.error_message
                    });
                }
            });
        },

        /**
         * Calculate height of minicart list
         *
         */
        _calcHeight: function () {
            var self = this,
                height = 0,
                counter = this.options.minicart.maxItemsVisible,
                target = this.element.find(this.options.minicart.list),
                outerHeight;

            if (this.options.calcHeight === false) {
                return;
            }

            self.scrollHeight = 0;
            target.children().each(function () {
                if ($(this).find('.options').length > 0) {
                    $(this).collapsible();
                }
                outerHeight = $(this).outerHeight(true);

                if (counter-- > 0) {
                    height += outerHeight;
                }
                self.scrollHeight += outerHeight;
            });

            target.parent().height(height);
        }
    });

    $.view('minicart', {
        component: 'Magento_Checkout/js/view/minicart',
        cart: {},
        shoppingCartUrl: window.checkout ? window.checkout.shoppingCartUrl : '',
        maxItemsToDisplay: window.checkout ? window.checkout.maxItemsToDisplay : '',
        shouldRender: ko.observable(false),
        isLoading: ko.observable(false),
        displaySubtotal: ko.observable(true),
        addToCartCalls: 0,
        minicartSelector: '[data-block="minicart"]',

        /** [create description] */
        create: function () {
            var self = this,
                cartData = $.sections.get('cart');

            this.update(cartData());

            this.cartSubscription = cartData.subscribe(function (updatedCart) {
                self.addToCartCalls--;
                self.isLoading(self.addToCartCalls > 0);
                self.update(updatedCart);
                self.initSidebar();
            });

            this.minicart()
                .one('dropdownDialog:open', function () {
                    self.shouldRender(true);
                })
                .on('dropdownDialog:open', function () {
                    self.initSidebar();
                })
                .on('contentLoading', function () {
                    self.addToCartCalls++;
                    self.isLoading(true);
                });

            if (cartData().website_id !== window.checkout.websiteId && cartData().website_id !== undefined ||
                cartData().storeId !== window.checkout.storeId && cartData().storeId !== undefined
            ) {
                $.sections.reload(['cart'], false);
            }
        },

        /** [destroy description] */
        destroy: function () {
            this.cartSubscription.dispose();
            this._super();
        },

        /** [minicart description] */
        minicart: function () {
            return $(this.minicartSelector);
        },

        /** init sidebar widget */
        initSidebar: function () {
            var minicart = this.minicart(),
                sidebar = minicart.sidebar('instance');

            minicart.trigger('contentUpdated');

            if (sidebar) {
                return sidebar.update();
            }

            if (!$('[data-role=product-item]').length) {
                return false;
            }

            minicart.sidebar(this.getSidebarSettings());
        },

        /** [getSidebarSettings description] */
        getSidebarSettings: function () {
            return {
                url: {
                    checkout: window.checkout.checkoutUrl,
                    update: window.checkout.updateItemQtyUrl,
                    remove: window.checkout.removeItemUrl,
                    loginUrl: window.checkout.customerLoginUrl,
                    isRedirectRequired: window.checkout.isRedirectRequired
                },
                button: {
                    checkout: '.action.checkout',
                    remove: '.action.delete',
                    close: '.action.close'
                },
                showcart: {
                    parent: 'span.counter',
                    qty: 'span.counter-number',
                    label: 'span.counter-label'
                },
                minicart: {
                    list: '.minicart-items',
                    content: '#minicart-content-wrapper',
                    qty: 'div.items-total',
                    subtotal: 'div.subtotal span.price',
                    maxItemsVisible: window.checkout.minicartMaxItemsVisible
                },
                item: {
                    qty: '.cart-item-qty',
                    button: '.update-cart-item'
                },
                confirmMessage: $.__('Are you sure you would like to remove this item from the shopping cart?')
            };
        },

        /** Close mini shopping cart. */
        closeMinicart: function () {
            this.minicart().find('[data-role="dropdownDialog"]').dropdownDialog('close');
        },

        /**
         * @param {Object} item
         * @return {*|String}
         */
        getItemRenderer: function (item) {
            var renderer = this.options.itemRenderer[item.product_type];

            if (renderer && document.getElementById(renderer)) {
                return renderer;
            }

            return 'defaultRenderer';
        },

        /**
         * @param {Object} updatedCart
         */
        update: function (updatedCart) {
            _.each(updatedCart, function (value, key) {
                if (!this.cart.hasOwnProperty(key)) {
                    this.cart[key] = ko.observable();
                }
                this.cart[key](value);
            }, this);
        },

        /**
         * @param {String} name
         * @return {*}
         */
        getCartParamUnsanitizedHtml: function (name) {
            if (!_.isUndefined(name)) {
                if (!this.cart.hasOwnProperty(name)) {
                    this.cart[name] = ko.observable();
                }
            }

            return this.cart[name]();
        },

        /**
         * @param {String} name
         * @return {*}
         */
        getCartParam: function (name) {
            return this.getCartParamUnsanitizedHtml(name);
        },

        /**
         * Returns array of cart items, limited by 'maxItemsToDisplay' setting
         * @return []
         */
        getCartItems: function () {
            var items = this.getCartParamUnsanitizedHtml('items') || [];

            items = items.slice(parseInt(-this.maxItemsToDisplay, 10));

            return items;
        },

        /**
         * @return {Number}
         */
        getCartLineItemsCount: function () {
            var items = this.getCartParamUnsanitizedHtml('items') || [];

            return parseInt(items.length, 10);
        }
    });

    ko.components.register('subtotal.totals', {
        /** Constructor */
        viewModel: function (options) {
            this.cart = $.sections.get('cart');
            this.displaySubtotal = options.$root.displaySubtotal;
            $.extend(
                this,
                options.$root._option('children/subtotal.container/children/subtotal/children/subtotal.totals/config')
            );
        },
        template: {
            element: 'subtotal.totals'
        }
    });
})();

(function () {
    'use strict';

    $.widget('proceedToCheckout', {
        component: 'Magento_Checkout/js/proceed-to-checkout',

        /** [create description] */
        create: function () {
            // var cart = $.sections.get('cart'),
            //     customer = $.sections.get('customer');

            $(this.element).on('click', function (event) {
                event.preventDefault();

                // if (!customer().firstname && cart().isGuestCheckoutAllowed === false) {
                //     authenticationPopup.showModal();

                //     return false;
                // }

                location.href = this.options.checkoutUrl;
            }.bind(this));
        }
    });
})();

(function () {
    'use strict';

    $.widget('catalogAddToCart', {
        component: 'catalogAddToCart',
        options: {
            processStart: null,
            processStop: null,
            bindSubmit: true,
            minicartSelector: '[data-block="minicart"]',
            messagesSelector: '[data-placeholder="messages"]',
            productStatusSelector: '.stock.available',
            addToCartButtonSelector: '.action.tocart',
            addToCartButtonDisabledClass: 'disabled'
        },

        /** Init widget */
        create: function () {
            var self = this,
                element = $(self.element);

            if (self.options.bindSubmit && !element.attr('data-catalog-addtocart-initialized')) {
                element.attr('data-catalog-addtocart-initialized', 1);
            }

            $(self.options.addToCartButtonSelector, element).prop('disabled', false);
        },

        /**
         * @return {Boolean}
         */
        isLoaderEnabled: function () {
            return this.options.processStart && this.options.processStop;
        },

        /**
         * Handler for the form 'submit' event
         *
         * @param {Object} form
         */
        submitForm: function (form) {
            this.ajaxSubmit(form);
        },

        /**
         * @param {Object} form
         */
        ajaxSubmit: function (form) {
            var self = this;

            $(self.options.minicartSelector).trigger('contentLoading');

            self.disableAddToCartButton(form);

            if (self.isLoaderEnabled()) {
                $('body').trigger(self.options.processStart);
            }

            $.request.post({
                form: form,
                dataType: 'json',

                /** A method to run after error or success */
                complete: function () {
                    self.enableAddToCartButton(form);
                },

                /** Success callback */
                success: function (data, response) {
                    data = self.getResponseData(response);

                    $(document).trigger('ajax:addToCart', {
                        'sku': form.data().productSku,
                        'productIds': [form.find('input[name=product]').val()],
                        'form': form,
                        'response': response
                    });

                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStop);
                    }

                    if (data.backUrl) {
                        if (data.backUrl === window.location.href) {
                            window.location.reload();
                        } else {
                            window.location.assign(data.backUrl);
                        }

                        return;
                    }

                    if (data.messages) {
                        $(self.options.messagesSelector).html(data.messages);
                    }

                    if (data.minicart) {
                        $(self.options.minicartSelector).replaceWith(data.minicart);
                        $(self.options.minicartSelector).trigger('contentUpdated');
                    }

                    if (data.product && data.product.statusText) {
                        $(self.options.productStatusSelector)
                            .removeClass('available')
                            .addClass('unavailable')
                            .find('span')
                            .html(data.product.statusText);
                    }
                },

                /** [error description] */
                error: function (response) {
                    $(document).trigger('ajax:addToCart:error', {
                        'sku': form.data().productSku,
                        'productIds': [form.find('input[name=product]').val()],
                        'form': form,
                        'response': response
                    });

                    location.reload();
                }
            });
        },

        /**
         * @param {Object} response
         * @return {Object}
         */
        getResponseData: function (response) {
            return response.body;
        },

        /**
         * @param {String} form
         */
        disableAddToCartButton: function (form) {
            var addToCartButton = $(form).find(this.options.addToCartButtonSelector).not('.noloader');

            addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
            addToCartButton.find('span').css('opacity', 0);
            addToCartButton.spinner(true, {
                css: {
                    width: 20,
                    height: 20,
                    background: 'none'
                }
            });
        },

        /**
         * @param {String} form
         */
        enableAddToCartButton: function (form) {
            var self = this,
                addToCartButton = $(form).find(this.options.addToCartButtonSelector).not('.noloader');

            setTimeout(function () {
                addToCartButton.removeClass(self.options.addToCartButtonDisabledClass);
                addToCartButton.find('span').css('opacity', '');
                addToCartButton.spinner(false);
            }, 200);
        }
    });

    $(document).on('submit', '[data-catalog-addtocart-initialized]', function (event) {
        event.preventDefault();
        $(this).catalogAddToCart('instance').ajaxSubmit($(this));
    });
})();

(function () {
    'use strict';

    $.widget('productListToolbarForm', {
        component: 'productListToolbarForm',
        options: {
            modeControl: '[data-role="mode-switcher"]',
            directionControl: '[data-role="direction-switcher"]',
            orderControl: '[data-role="sorter"]',
            limitControl: '[data-role="limiter"]',
            mode: 'product_list_mode',
            direction: 'product_list_dir',
            order: 'product_list_order',
            limit: 'product_list_limit',
            page: 'p',
            modeDefault: 'grid',
            directionDefault: 'asc',
            orderDefault: 'position',
            limitDefault: '9',
            url: ''
        },

        /** @inheritdoc */
        create: function () {
            var self = this,
                controls = [
                    'mode',
                    'direction',
                    'order',
                    'limit'
                ];

            $.each(controls, function (i, param) {
                self.addEventListener(
                    $(self.options[param + 'Control'], self.element),
                    self.options[param],
                    self.options[param + 'Default']
                );
            });
        },

        /** @inheritdoc */
        addEventListener: function (element, paramName, defaultValue) {
            var self = this;

            if (element.is('select')) {
                element.on('change', function () {
                    self.changeUrl(paramName, element.val(), defaultValue);
                });
            } else {
                element.on('click', function (event) {
                    event.preventDefault();
                    self.changeUrl(paramName, $(event.currentTarget).data('value'), defaultValue);
                });
            }
        },

        /**
         * @private
         */
        getUrlParams: function () {
            var decode = window.decodeURIComponent,
                urlPaths = this.options.url.split('?'),
                urlParams = urlPaths[1] ? urlPaths[1].split('&') : [],
                params = {},
                parameters, i;

            for (i = 0; i < urlParams.length; i++) {
                parameters = urlParams[i].split('=');
                params[decode(parameters[0])] = parameters[1] !== undefined ?
                    decode(parameters[1].replace(/\+/g, '%20')) :
                    '';
            }

            return params;
        },

        /**
         * @returns {String}
         * @private
         */
        getCurrentLimit: function () {
            return this.getUrlParams()[this.options.limit] || this.options.limitDefault;
        },

        /**
         * @returns {String}
         * @private
         */
        getCurrentPage: function () {
            return this.getUrlParams()[this.options.page] || 1;
        },

        /**
         * @param {String} paramName
         * @param {*} paramValue
         * @param {*} defaultValue
         */
        changeUrl: function (paramName, paramValue, defaultValue) {
            var urlPaths = this.options.url.split('?'),
                baseUrl = urlPaths[0],
                paramData = this.getUrlParams(),
                currentPage = this.getCurrentPage(),
                newPage;

            if (currentPage > 1 && paramName === this.options.limit) {
                newPage = Math.floor(this.getCurrentLimit() * (currentPage - 1) / paramValue) + 1;

                if (newPage > 1) {
                    paramData[this.options.page] = newPage;
                } else {
                    delete paramData[this.options.page];
                }
            }

            paramData[paramName] = paramValue;

            if (paramValue == defaultValue) { //eslint-disable-line eqeqeq
                delete paramData[paramName];
            }

            paramData = $.params(paramData);
            $.breeze.visit(baseUrl + (paramData.length ? '?' + paramData : ''));
        }
    });
})();

(function () {
    'use strict';

    $.view('compareProducts', {
        component: 'Magento_Catalog/js/view/compare-products',
        compareProducts: $.sections.get('compare-products')
    });
})();

(function () {
    'use strict';

    $.widget('validator', {
        component: 'validation',

        /** Init widget */
        create: function () {
            var self = this;

            this.validator = $.validator(this.element, this.options);

            // do not use event delegation because this callback should be first
            if (!this.element.attr('data-validator')) {
                this.element.attr('data-validator', true).on('submit', function () {
                    if (!self.validator.isValid()) {
                        return false;
                    }
                });
            }
        },

        /** [destoy description] */
        destroy: function () {
            this.element.removeAttr('data-validator');
            this._super();
        },

        /** Validate form */
        isValid: function (inputs, silent) {
            return this.validator.isValid(inputs, silent);
        },

        /** Validate form */
        validate: function (inputs, silent) {
            return this.validator.validate(inputs, silent);
        },

        /** Reset form */
        reset: function () {
            return this.validator.reset();
        }
    });

    $.fn.validation = $.fn.validator;

    /** [valid description] */
    $.fn.valid = function () {
        $(this).validator();

        return $(this).validator('instance').isValid();
    };

    $(document).on('breeze:mount:Magento_Customer/js/block-submit-on-send', function (event, data) {
        $('#' + data.settings.formId).validator(data.settings);
    });

    $(document).on('breeze:load', function () {
        $('form').attr('novalidate', true).on('submit', function () {
            if ($(this).attr('data-validator')) {
                return;
            }

            $(this).validator();

            if (!$(this).validator('instance').isValid()) {
                return false;
            }
        });
    });
})();

(function () {
    'use strict';

    $.widget('redirectUrl', {
        component: 'redirectUrl',
        options: {
            event: 'click',
            url: undefined
        },

        /**
         * This method constructs a new widget.
         * @private
         */
        _create: function () {
            var handlers = {};

            handlers[this.options.event] = '_onEvent';

            this._on(handlers);
        },

        /**
         * This method set the url for the redirect.
         * @private
         */
        _onEvent: function () {
            $.breeze.visit(this.options.url || this.element.val());
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('quickSearch', {
        component: 'quickSearch',
        options: {
            autocomplete: 'off',
            minSearchLength: 3,
            responseFieldElements: 'ul li',
            dropdown: '<ul role="listbox"></ul>',
            dropdownClass: '',
            itemClass: '',
            selectClass: 'selected',
            template:
                '<li class="<%- data.row_class %>" id="qs-option-<%- data.index %>" role="option">' +
                    '<span class="qs-option-name">' +
                       ' <%- data.title %>' +
                    '</span>' +
                    '<span aria-hidden="true" class="amount">' +
                        '<%- data.num_results %>' +
                    '</span>' +
                '</li>',
            formSelector: '#search_mini_form',
            destinationSelector: '#search_autocomplete',
            submitBtn: 'button[type="submit"]',
            searchLabel: '[data-role=minisearch-label]',
            suggestionDelay: 300,
            mediaBreakpoint: '(max-width: 768px)'
        },

        /** @inheritdoc */
        create: function () {
            var self = this;

            this.responseList = {
                indexList: null,
                selected: null,
                selectedIndex: null
            };
            this.dataset = [];
            this.autoComplete = $(this.options.destinationSelector);
            this.searchForm = $(this.options.formSelector);
            this.submitBtn = this.searchForm.find(this.options.submitBtn);
            this.searchLabel = this.searchForm.find(this.options.searchLabel);
            this.element.attr('autocomplete', this.options.autocomplete);
            this.debouncedRequest = _.debounce(
                this.sendRequest.bind(this),
                this.options.suggestionDelay
            );

            if (this.element.get(0) === document.activeElement) {
                this.setActiveState(true);
            }

            if (!this.element.val()) {
                this.submitBtn.prop('disabled', true);
            }

            this.searchLabel.on('click.quickSearch', function (event) {
                if (self.isActive()) {
                    event.preventDefault();
                } else {
                    // in case if element is hidden
                    self.element.focus();
                    self.setActiveState(true);
                }
            });

            this.element
                .on('keydown.quickSearch', this._onEnterKeyDown.bind(this))
                .on('focus.quickSearch', this.setActiveState.bind(this, true))
                .on('blur.quickSearch', this._onBlur.bind(this))
                .on('input.quickSearch propertychange.quickSearch', this.debouncedRequest);

            this.searchForm
                .on('keydown.quickSearch', this._onKeyDown.bind(this))
                .on('submit.quickSearch', function (event) {
                    self._onSubmit(event);
                    self._updateAriaHasPopup(false);
                });

            this.autoComplete
                .on('click.quickSearch', this.options.responseFieldElements, function () {
                    self._selectEl($(this));
                    self.submitSelectedItem();
                })
                .on('focus.quickSearch', this.options.responseFieldElements, function () {
                    self._selectEl($(this));
                });

            this._on(document, {
                /** [keydown description] */
                keydown: function (e) {
                    if (e.key === 'Escape') {
                        self.hideAutocomplete();
                    }
                }
            });

            $(document).on('click.quickSearch', function (event) {
                if (self.searchLabel.has(event.target).length) {
                    return;
                }

                if (self.element.has(event.target).length ||
                    self.autoComplete.has(event.target).length
                ) {
                    return clearTimeout(self.blurTimeout);
                }

                self.setActiveState(false);
                self.hideAutocomplete();
            });
        },

        destroy: function () {
            $(document).off('click.quickSearch');
            this._super();
        },

        /**
         * @returns {Boolean}
         */
        isActive: function () {
            return this.searchLabel.hasClass('active');
        },

        /**
         * @param {Boolean} isActive
         */
        setActiveState: function (isActive) {
            var el = this.element.get(0);

            this.searchForm.toggleClass('active', isActive);
            this.searchLabel.toggleClass('active', isActive);
            this.element.attr('aria-expanded', isActive);

            if (!isActive) {
                return;
            }

            if (!this.element.isInViewport() || !this.element.isVisible()) {
                setTimeout(function () {
                    el.selectionStart = 10000;
                    el.selectionEnd = 10000;
                }, 13);
            }

            clearTimeout(this.blurTimeout);

            if (this.responseList.indexList) {
                this.showAutocomplete();
            } else if (this.element.val()) {
                this.debouncedRequest();
            }
        },

        /** [submitSelectedItem description] */
        submitSelectedItem: function () {
            this.searchForm.submit();
        },

        /**
         * @return {Element}
         */
        _getFirstVisibleElement: function () {
            return this.responseList.indexList ? this.responseList.indexList.first() : false;
        },

        /**
         * @return {Element}
         */
        _getLastElement: function () {
            return this.responseList.indexList ? this.responseList.indexList.last() : false;
        },

        /**
         * @param {Boolean} show
         */
        _updateAriaHasPopup: function (show) {
            this.element.attr('aria-haspopup', show);
        },

        /**
         * Clears the item selected from the suggestion list and resets the suggestion list.
         * @param {Boolean} all - Controls whether to clear the suggestion list.
         */
        _resetResponseList: function (all) {
            if (this.responseList.selected) {
                this.responseList.selected.removeClass(this.options.selectClass);
            }

            this.responseList.selected = null;
            this.responseList.selectedIndex = null;

            if (all === true) {
                this.responseList.indexList = null;
            }
        },

        /**
         * @param {Event} e
         */
        _onSubmit: function (e) {
            var value = this.element.val(),
                selected = this.dataset[this.responseList.selectedIndex];

            if (typeof value === 'string' && !value) {
                e.preventDefault();
            }

            if (selected && selected.title && this.isVisibleAutocomplete()) {
                this.element.val(selected.title);
            }
        },

        /** [_onBlur description] */
        _onBlur: function () {
            var self = this;

            if (!self.isActive()) {
                return;
            }

            self.blurTimeout = setTimeout(function () {
                if (self.autoComplete.is(':focus-within')) {
                    return;
                }

                self.setActiveState(false);
                self.hideAutocomplete();
            }, 250);
        },

        /** [_selectEl description] */
        _selectEl: function (el, focus) {
            if (!el) {
                return;
            }

            if (this.responseList.selected) {
                this.responseList.selected.removeClass(this.options.selectClass);
            }

            el.addClass(this.options.selectClass);

            if (focus) {
                el.focus();
            }

            this.responseList.selected = el;
            this.responseList.selectedIndex = this.responseList.indexList.index(el);
        },

        /** [_selectNextEl description] */
        _selectNextEl: function (focus) {
            var index = this.responseList.selectedIndex,
                el = this._getFirstVisibleElement();

            if (index !== null && this.responseList.indexList[index + 1]) {
                el = $(this.responseList.indexList[index + 1]);
            }

            this._selectEl(el, focus);
        },

        /** [_selectPrevEl description] */
        _selectPrevEl: function (focus) {
            var index = this.responseList.selectedIndex,
                el = this._getLastElement();

            if (index !== null && this.responseList.indexList[index - 1]) {
                el = $(this.responseList.indexList[index - 1]);
            }

            this._selectEl(el, focus);
        },

        /**
         * @param {Event} e
         */
        _onKeyDown: function (e) {
            var navKeys = ['Home', 'End', 'ArrowDown', 'ArrowUp', 'Tab'],
                selected = this.responseList.selected,
                first = this._getFirstVisibleElement(),
                last = this._getLastElement();

            if (e.ctrlKey || e.altKey || e.shiftKey && e.key !== 'Tab') {
                return;
            }

            // disable focus-trap
            if (e.key === 'Tab') {
                if (e.shiftKey && this.element.is(':focus')) {
                    return;
                }

                if (selected && e.shiftKey && first && selected.has(first.get(0)).length ||
                    selected && !e.shiftKey && last && selected.has(last.get(0)).length
                ) {
                    return;
                }
            }

            if (navKeys.indexOf(e.key) !== -1) {
                if (!this.canUseNavKeys()) {
                    return;
                }

                e.preventDefault(); // prevent page scrolling
            }

            switch (e.key) {
                case 'Home':
                    this._selectEl(first, true);
                    break;

                case 'End':
                    this._selectEl(last, true);
                    break;

                case 'ArrowDown':
                    this._selectNextEl(true);
                    break;

                case 'Tab':
                    if (e.shiftKey) {
                        this._selectPrevEl(true);
                    } else {
                        this._selectNextEl(true);
                    }
                    break;

                case 'ArrowUp':
                    this._selectPrevEl(true);
                    break;

                case 'Escape':
                    if (this.isVisibleAutocomplete()) {
                        this.element.focus();
                        this.hideAutocomplete();
                    } else if (this.element.is(':focus')) {
                        this.element.blur();
                    }
                    break;

                default:
                    this.element.focus();
                    break;
            }
        },

        /** [canUseNavKeys description] */
        canUseNavKeys: function () {
            return this.isVisibleAutocomplete();
        },

        /** [isVisibleAutocomplete description] */
        isVisibleAutocomplete: function () {
            var autocomplete = this.autoComplete.not(':empty').visible();

            return autocomplete.length > 0 && autocomplete.css('visibility') !== 'hidden';
        },

        /** [_onEnterKeyDown description] */
        _onEnterKeyDown: function (e) {
            if (e.key === 'Enter' &&
                this.element.val().length >= this.options.minSearchLength
            ) {
                e.preventDefault();
                this.searchForm.submit();
            }
        },

        /** [sendRequest description] */
        sendRequest: function () {
            var value = this.element.val();

            this.submitBtn.prop('disabled', true);

            if (value.length < this.options.minSearchLength) {
                return this.resetAutocomplete();
            }

            this.submitBtn.prop('disabled', false);

            return $.request.get({
                url: this.options.url,
                type: 'json',
                data: {
                    q: value
                }
            }).then(function (response) {
                this.prepareResponse(response.body);
                this.processResponse();
            }.bind(this));
        },

        /** [prepareResponse description] */
        prepareResponse: function (data) {
            this.dataset = data;
        },

        /** [processResponse description] */
        processResponse: function () {
            var dropdown = $(this.options.dropdown);

            if (this.options.dropdownClass) {
                dropdown.addClass(this.options.dropdownClass);
            }

            if (!this.dataset.length) {
                return this.resetAutocomplete();
            }

            $.each(this.dataset, function (index, item) {
                item.index = index;
                dropdown.append(this.renderItem(item));
            }.bind(this));

            dropdown.children().addClass(this.options.itemClass);

            this._resetResponseList(true);

            this.showAutocomplete(dropdown);

            this.responseList.indexList = this.autoComplete
                .find(this.options.responseFieldElements)
                .visible();

            this.element.removeAttr('aria-activedescendant');

            if (this.responseList.indexList.length) {
                this._updateAriaHasPopup(true);
            } else {
                this._updateAriaHasPopup(false);
            }
        },

        /** [showAutocomplete description] */
        showAutocomplete: function (content) {
            if (!content && this.isVisibleAutocomplete()) {
                return;
            }

            if (content) {
                this.autoComplete.empty().append(content);
            }

            this.autoComplete
                .css({
                    position: 'absolute',
                    minWidth: this.element.outerWidth()
                })
                .show()
                .find(this.options.responseFieldElements)
                .attr('tabIndex', 0);
        },

        /** [showAutocomplete description] */
        hideAutocomplete: function () {
            this.autoComplete
                .hide()
                .find(this.options.responseFieldElements)
                .removeAttr('tabIndex');
        },

        /** [renderItem description] */
        renderItem: function (item) {
            return this.getItemTemplate(item)({
                data: item
            });
        },

        /** [getItemTemplate description] */
        getItemTemplate: function () {
            if (!this.template) {
                this.template = _.template(this.options.template);
            }

            return this.template;
        },

        /** [resetAutocomplete description] */
        resetAutocomplete: function () {
            this._resetResponseList(true);
            this.hideAutocomplete();
            this._updateAriaHasPopup(false);
            this.element.removeAttr('aria-activedescendant');
        }
    });
})();

/* global _ */
(function () {
    'use strict';

    $.widget('addToCart', {
        component: 'addToCart',
        options: {
            origin: '',
            popUpAttr: '[data-role=msrp-popup-template]',
            popupCartButtonId: '#map-popup-button',
            paypalCheckoutButons: '[data-action=checkout-form-submit]',
            msrpLabelId: '#map-popup-msrp',
            priceLabelId: '#map-popup-price',
            popUpOptions: {
                appendTo: 'body',
                dialogContentClass: 'active',
                closeOnMouseLeave: false,
                autoPosition: true,
                dialogClass: 'popup map-popup-wrapper',
                shadowHinter: 'popup popup-pointer',
                position: {}
            }
        },

        /** Init widget */
        create: function () {
            if (this.options.origin === 'msrp') {
                this.initMsrpPopup();
            } else if (this.options.origin === 'info') {
                this.initInfoPopup();
            } else if (this.options.origin === 'tier') {
                this.initTierPopup();
            }
        },

        /** Remove event listeners and dom elements */
        destroy: function () {
            if (this.$popup) {
                this.$popup.remove();
            }
            this._super();
        },

        /** Init msrp popup */
        initMsrpPopup: function () {
            var self = this,
                popupDOM = $(self.options.popUpAttr)[0],
                target = $(self.options.popupId);

            if (!popupDOM) {
                return;
            }

            if (self.options.popupId.indexOf(this.element.attr('id')) > -1) {
                target = this.element; // fix for multiple elements with the same id on the page
            }

            self.$popup = $(popupDOM.innerHTML.trim());
            self.$popup.find(self.options.productIdInput).val(self.options.productId);
            $('body').append(self.$popup);
            self.$popup.trigger('contentUpdated');

            self.$popup.find('button')
                .on('click.msrp', self.handleMsrpAddToCart.bind(self))
                .filter(self.options.popupCartButtonId)
                .text(self.getAddToCartButton().text());

            self.$popup.find(self.options.paypalCheckoutButons)
                .on('click.msrp', self.handleMsrpPaypalCheckout.bind(self));

            target.on('click.msrp', self.updatePopupContent.bind(self));

            self.$popup.dropdownDialog($.extend(self.options.popUpOptions, {
                triggerTarget: target,
                position: {
                    of: target
                }
            }));
        },

        /** Init tier price popup */
        initTierPopup: function () {
            var self = this,
                popupDOM = $(self.options.popUpAttr)[0];

            self.$popup = $(popupDOM.innerHTML.trim());
            self.$popup.find(self.options.productIdInput).val(self.options.productId);
            $('body').append(self.$popup);
            self.$popup.trigger('contentUpdated');

            self.$popup.find('button')
                .on('click.msrp', self.handleTierAddToCart.bind(self))
                .filter(self.options.popupCartButtonId)
                .text(self.getAddToCartButton().text());

            self.$popup.find(self.options.paypalCheckoutButons)
                .on('click.msrp', self.handleTierPaypalCheckout.bind(self));

            self.$popup.dropdownDialog(self.options.popUpOptions);

            $(self.options.attr).on('click.msrp', function (event) {
                var dialog = self.$popup.dropdownDialog('instance');

                event.preventDefault();

                if (dialog.trigger && dialog.trigger.has(event.target).length) {
                    return;
                }

                self.$popup.dropdownDialog({
                    triggerTarget: $(event.target),
                    position: {
                        of: $(event.target)
                    }
                });
                self.$popup.dropdownDialog('open');

                self.tierOptions = $(event.target).data('tier-price');
                self.updatePopupContent();
            });
        },

        /** Init info popup */
        initInfoPopup: function () {
            var infoPopupDOM = $('[data-role=msrp-info-template]')[0];

            this.$popup = $(infoPopupDOM.innerHTML.trim());

            $('body').append(this.$popup);

            this.$popup.dropdownDialog($.extend(this.options.popUpOptions, {
                triggerTarget: $(this.options.helpLinkId),
                position: {
                    of: $(this.options.helpLinkId)
                }
            }));
        },

        /** Fixed not working seletor with :has token */
        getAddToCartButton: function () {
            var productId = this.options.productId,
                button;

            if (this.options.addToCartButton && this.options.addToCartButton.indexOf(':has') !== -1) {
                button = $('form[action*="/"]')
                    .has('input[type="hidden"][name="product"][value="%1"]'.replace('%1', productId))
                    .add('.block.widget .price-box[data-product-id="%1"]+.product-item-actions'.replace('%1', productId))
                    .find('button[type="submit"], button.tocart');
            } else {
                button = $(this.options.addToCartButton);
            }

            return button.first();
        },

        /** Update popup content */
        updatePopupContent: function () {
            var options = this.tierOptions || this.options;

            this.$popup.find(this.options.msrpLabelId).html(options.msrpPrice);
            this.$popup.find(this.options.priceLabelId).html(options.realPrice);

            if (!this.options.isSaleable) {
                this.$popup.find('form').hide();
            }
        },

        /** Close MAP information popup */
        closePopup: function () {
            this.$popup.dropdownDialog('close');
        },

        /**
         * handle 'AddToCart' click on Msrp popup
         * @param {Object} ev
         *
         * @private
         */
        handleMsrpAddToCart: function (ev) {
            ev.preventDefault();

            if (this.options.addToCartButton && this.getAddToCartButton().length) {
                this.getAddToCartButton().click();
                this.getAddToCartButton().get(0).click();
                this.closePopup();
            }
        },

        /**
         * @private
         */
        handleMsrpPaypalCheckout: function () {
            this.closePopup();
        },

        /**
         * handle 'AddToCart' click on Tier popup
         *
         * @param {Object} ev
         * @private
         */
        handleTierAddToCart: function (ev) {
            ev.preventDefault();

            if (this.options.addToCartButton &&
                this.options.inputQty && !isNaN(this.tierOptions.qty)
            ) {
                $(this.options.inputQty).val(this.tierOptions.qty);
                $(this.options.addToCartButton).click();
                this.closePopup();
            }
        },

        /**
         * handle 'paypal checkout buttons' click on Tier popup
         *
         * @private
         */
        handleTierPaypalCheckout: function () {
            if (this.options.inputQty && !isNaN(this.tierOptions.qty)) {
                $(this.options.inputQty).val(this.tierOptions.qty);
                this.closePopup();
            }
        }
    });

    // minicart totals integration
    $(document).one('breeze:mount:Magento_Checkout/js/view/minicart', function () {
        /**
         * @param {Array} cartItems
         * @return {Boolean}
         */
        function isMsrpApplied(cartItems) {
            return _.find(cartItems, function (item) {
                if (_.has(item, 'canApplyMsrp')) {
                    return item.canApplyMsrp;
                }

                return false;
            });
        }

        $.sections.get('cart').subscribe(function (updatedCart) {
            var view = $.registry.get('minicart')[0];

            if (view) {
                view.displaySubtotal(!isMsrpApplied(updatedCart.items));
            }
        }, this);
    });
})();

/* global ga */
(function () {
    'use strict';

    $.widget('googleAnalytics', {
        component: 'Magento_GoogleAnalytics/js/google-analytics',

        /** [create description] */
        create: function () {
            if (!this.isAllowed()) {
                return;
            }

            this.start();
        },

        /** [isAllowed description] */
        isAllowed: function () {
            var cookie;

            if (!this.options.isCookieRestrictionModeEnabled) {
                return true;
            }

            cookie = $.cookies.getJson(this.options.cookieName);

            return cookie && cookie[this.options.currentWebsite] === 1;
        },

        /** [start description] */
        start: function () {
            (function (i, s, o, g, r, a, m) {
                i.GoogleAnalyticsObject = r;
                i[r] = i[r] || function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            // Process page info
            ga('create', this.options.pageTrackingData.accountId, 'auto');

            if (this.options.pageTrackingData.isAnonymizedIpActive) {
                ga('set', 'anonymizeIp', true);
            }

            // Process orders data
            if (this.options.ordersTrackingData.hasOwnProperty('currency')) {
                ga('require', 'ec', 'ec.js');

                ga('set', 'currencyCode', this.options.ordersTrackingData.currency);

                // Collect product data for GA
                if (this.options.ordersTrackingData.products) {
                    $.each(this.options.ordersTrackingData.products, function (index, value) {
                        ga('ec:addProduct', value);
                    });
                }

                // Collect orders data for GA
                if (this.options.ordersTrackingData.orders) {
                    $.each(this.options.ordersTrackingData.orders, function (index, value) {
                        ga('ec:setAction', 'purchase', value);
                    });
                }

                ga('send', 'pageview');
            } else {
                // Process Data if not orders
                ga('send', 'pageview' + this.options.pageTrackingData.optPageUrl);
            }
        }
    });
})();