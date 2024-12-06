let config = `{       
    "clickElements":[".vs-btn",".btn-xs",".vs-link-cta",".vs-link-cta-ga4",".link-cta",".new-window-link",".modal__show",".slide-cta-button",".vs-share-anchor",".vs-nav-logo",".vs-ct-image",".vs-social-anchor",".vs-sct",".vs-d-inline",".visa-icon-close",".vs-video-play-button",".vs-share-modal-btn",".overflower-item selected",".vs-sticky-button","div.vs-chat-box-element div",".vs-circle-icon",".visa-document-button",".vs-prev",".vs-next",".vs-minimize-icon",".vs-bot-response a",".end-chat-history a"],
    "filterElements":[".vs-filter-tracker",".vs-tab-filter-btn"],
    "selectFilterElements":[".vs-grid-sort-select"],
    "shadowRootRef":[],
    "hoverElements":[],
    "selectElements":[],
    "eventObject":{
        "clickText":"getClickText(this)",
            "clickUrl":"this.attributes?.href?.value ? this.attributes?.href?.value : (this.firstChild?.attributes?.href?.value ? this.firstChild?.attributes?.href?.value : this.parentElement?.attributes?.href?.value)",
        "eventAction":"getClickTrack(this)",
        "componentType":{
            "selectors":{
                "'Header'":"$(this).closest('header')",
                "'Footer'":"$(this).closest('footer')",
                "'Button'":"$(this).closest('button').length > 0 ? $(this).closest('button') : $(this).closest('.vs-btn').length > 0 ? $(this).closest('.vs-btn') : $(this).closest('div[role=button]').length > 0 ? $(this).closest('div[role=button]') : $(this).closest('.vs-sticky-button').length>0 ? $(this).closest('.vs-sticky-button') : $(this).closest('.vs-video-play-button')",
                "'Link'":"$(this).closest('.vs-link-cta').length > 0 ? $(this).closest('.vs-link-cta') : $(this).closest('.vs-link-cta-ga4').length > 0 ? $(this).closest('.vs-link-cta-ga4') : $(this).closest('.link-cta').length > 0 ? $(this).closest('.link-cta') : $(this).closest('.new-window-link')",
                "'Offers'":"$(this).closest('vs-offers')",
                "'Rich text'":"$(this).closest('.rich-text-content')",
                "'Model'":"$(this).closest('.vs-modal-parent')",
               	"'Image'":"$(this).closest('.vs-sct')",
                "'Dropdown'":"$(this).closest('select')",
                "'Text'":"$(this).closest('body')"
            }
        },
            "siteSection":"window.location.pathname === '/' ? 'home' :'others'",
        "imageLabel":"$(this).find('img').length > 0 ? $(this).find('img')[0].getAttribute('alt'): 'NAA'",
        "component":{
            "selectors":{
                "'Hero Marquee'":"$(this).closest('.heromarquee-item')",
                "'Fullbleed Marquee'":"$(this).closest('visa-marquee')",
                "'Sub Marquee'":"$(this).closest('visa-submarquee')",
                "'Fullbleed Marquee Slide'":"$(this).closest('.slide visa-marquee')",
                "'Sub Marquee Slide'":"$(this).closest('.slide visa-submarquee')",
                "'Marquee Legacy'":"$(this).closest('.visa-marquee')",
                "'Marquee Slide Legacy'":"$(this).closest('.visa-marquee-slide')",
                "'Tile Container'":"$(this).closest('tile-container')",
                "'Filmstrip'":"$(this).closest('vs-filmstrip')",
                "'Interrupter Container'":"$(this).closest('.ContainerInterrupter')",
                "'Accordion Container'":"$(this).closest('.containerAccordion').length > 0 ? $(this).closest('.containerAccordion') : ($(this).closest('.containerAccordionNew').length > 0 ? $(this).closest('.containerAccordionNew') :$(this).closest('.drawercomponent'))",
                "'Brand Blade Container'":"$(this).closest('.brand-blade-container')",
                "'Card Stack'":"$(this).closest('.cardStack')",
                "'Content Card'":"$(this).closest('.contentCard-Medium')",
                "'Content Bundle'":"$(this).closest('vs-content-bundle')",
                "'Anchor Navigation'":"$(this).closest('.navanchor .vs-anchor-base')",
                "'Secondary Navigation'":"$(this).closest('.vs-ribbon-nav .vs-ribbon-nav-list')",
                "'Audience Navigation'":"$(this).closest('.visa-horizontal-nav-audience')",
                "'Grid'":"$(this).closest('vs-grid')",
                "'Navigation'":"$(this).closest('nav')",
                "'Quotes'":"$(this).closest('.vs-quote-section')",
                "'Related Link'":"$(this).closest('.vs-related-links')",
                "'Social Share'":"$(this).closest('vs-social-share-container')",
                "'Rich Text Editor'":"$(this).closest('.rich-text-content') || $(this).closest('.vs-link-submenu')",
                "'Offers+Perks'":"$(this).closest('vs-global-offers')",
                "'Exchange Rate Calculator'": "$(this).closest('.vs-calculator')",
                "'Carousel'": "$(this).closest('.vs-carousel-content')",
                "'Button'":"$(this).closest('.buttonComp')",
                "'Model Text'":"$(this).closest('.vs-modal-parent')",
                "'Table'":"$(this).closest('vs-table')",
                "'Chat Assistant'":"$(this).closest('.vs-chat-main-container')",
                "'Feature Container'":"$(this).closest('.vs-featured-container')",

                "$(this).closest('.section')?.classList? $(this).closest('.section')?.classList[0] : ''":"$(this).closest('.section')"
            }
        },
        "clickCategory1":{
            "selectors":{
                "$($(this).closest('vs-content-bundle').find('.vs-content-bundle-header')[0]).text()":"$($(this).closest('vs-content-bundle').find('.vs-content-bundle-header')[0]).text()",
                "$($(this).closest('vs-table').find('caption')).text()":"$($(this).closest('vs-table').find('caption')).text()",
                "$($(this).closest('.vs-submenu')).siblings('.vs-mainmenu-item')[0]?.text" : "$($(this).closest('.vs-submenu')).siblings('.vs-mainmenu-item')[0]?.text",
                "$(this.parentNode)?.find('.vs-lead').text().trim()":"$(this.parentNode)?.find('.vs-lead').text().trim()",
                "$(this.parentElement?.parentNode)?.find('.vs-lead').text().trim()":"$(this.parentElement?.parentNode)?.find('.vs-lead').text().trim()",
                "$(this.parentElement?.parentElement?.parentNode)?.find('.vs-lead').text().trim()":"$(this.parentElement?.parentElement?.parentNode)?.find('.vs-lead').text().trim()",
                "$(this.parentElement?.parentElement?.parentNode)?.find('.vs-interrupter-title').text().trim()":"$(this.parentElement?.parentElement?.parentNode)?.find('.vs-interrupter-title').text().trim()",
                "$(this).closest('.vs-bot-response').find('p').text().trim()":"$(this).closest('.vs-bot-response').find('p').text().trim()",
                "getClickCategoryModel(this)":"getClickCategoryModel(this)"
            }
        },
        "clickCategory2":{
            "selectors":{
             "$($(this).closest('vs-content-bundle').find('.vs-content-bundle-body')[0]).text()":"$($(this).closest('vs-content-bundle').find('.vs-content-bundle-body')[0]).text()",
              "$(this.parentElement?.parentElement?.parentNode)?.find('.vs-lead-submenu').text().trim()" : "$(this.parentElement?.parentElement?.parentNode)?.find('.vs-lead-submenu').text().trim()"
            }
        }
    }
    
}`;
let clickElements = JSON.parse(config)?.clickElements;
let shadowRoots = JSON.parse(config)?.shadowRootRef;

// START GENAI@GHCOPILOT
let filterElements = JSON.parse(config)?.filterElements;
let selectFilterElements = JSON.parse(config)?.selectFilterElements;

filterElements?.forEach((elem) => {
    $(document).on('click', elem, function (event) {
        let eventObj = JSON.parse(config)?.eventObject;
        iterate.call(this, eventObj);
        simplify.call(this, eventObj);
        let filter_event = new CustomEvent('filters_tracking', {
            detail: {
                ...eventObj,
                eventAction: getFilterType(this),
                filterDetails: getFilterInfo(this),
            },
        });
        document.dispatchEvent(filter_event);
    });
});

// START GENAI@CHATGPT4
//let eventObj = JSON.parse(config)?.eventObject;
selectFilterElements?.forEach((elem) => {
    $(document).on('change', elem, function (event) {
        let eventObj = JSON.parse(config)?.eventObject;
        iterate.call(this, eventObj);
        simplify.call(this, eventObj);
        let filter_event = new CustomEvent('filters_tracking', {
            detail: {
                ...eventObj,
                eventAction: getFilterType(this),
                filterDetails: getFilterInfo(this),
            },
        });
        document.dispatchEvent(filter_event);
    });
});
// END GENAI@CHATGPT4


const getFilterInfo = (element) => {
    let filterInfo = 'sortBy: text';
    if ($(element).hasClass('vs-col-header')) {
        filterInfo = $(element).data('sort-info');
    } else if ($(element).hasClass('vs-grid-sort-select') || $(element).hasClass('vs-tab-filter-selected')) {
        filterInfo = 'sortBy:' + element.value;
    }
    return filterInfo;
};

const getFilterType = (element) => {
    let filterType = 'dropdown_selected';
    if ($(element).hasClass('vs-col-header')) {
        filterType = 'table_sorted';
    } else if ($(element).hasClass('vs-grid-sort-select') || $(element).hasClass('vs-tab-filter-selected')) {
        filterType = 'filter_selected';
    }
    return filterType;
};

// END GENAI@GHCOPILOT

function getClickTrack(element) {
    var clickType = 'NAA';
    if ($(element).hasClass('vs-accordion-button')) {
        let expanded = $(element).attr('aria-expanded');
        if (expanded === 'true') {
            clickType = 'expand';
        } else {
            clickType = 'collapse';
        }
    } else if ($(element).hasClass('vs-link-open')) {
        clickType = 'expand';
    } else if ($(element).hasClass('vs-link-close')) {
        clickType = 'collapse';
    } else if (
        $(element).hasClass('modal__show') ||
        $(element).hasClass('vs-video-play-button') ||
        $(element).hasClass('vs-share-modal-btn')
    ) {
        clickType = 'modal open';
    } else if ($(element).hasClass('visa-icon-close')) {
        clickType = 'modal close';
    } else if ($(element).hasClass('vs-sticky-button')) {
        clickType = 'start chat';
    } else if ($(element).hasClass('line')) {
        clickType = 'chat preconfigured options';
    }
    else if ($(element).hasClass('visa-document-button')) {
        clickType = 'chat suggested help questions';
    }
    else if ($(element).hasClass('vs-minimize-icon') && $(element).closest('.vs-chat-box-element').length > 0) {
        clickType = 'minimize chat';
    }
    else if ($(element).closest('.vs-bot-response').length > 0) {
        clickType = 'chat link clicks';
    }
    else if ($(element).hasClass('vs-prev') || $(element).hasClass('vs-next')) {
        clickType = 'carousel navigation';
    }
    else if (
        $(element).hasClass('vs-btn') ||
        $(element).hasClass('vs-link-cta') ||
        $(element).hasClass('vs-sct') ||
        $(element).hasClass('vs-share-anchor') ||
        $(element).hasClass('slide-cta-button') ||
        $(element).hasClass('btn-xs') ||
        $(element).hasClass('link-cta') ||
        $(element).hasClass('vs-d-inline') ||
        $(element).hasClass('overflower-item selected') ||
        $(element).hasClass('vs-link-cta-ga4')
    ) {
        clickType = 'link_click';
    }

    return clickType;
}

function getClickCategoryModel(element) {
    var clickType = '';
    if ($(element).hasClass('visa-icon-close')) {
        var vsmodel = $(element)
            .closest('.vs-modal-parent')
            .find('div[data-gtm-component-title]');
        var vsmodelVideo = $(element)
            .closest('.vs-modal-container')
            .find('.vs-modal-header');
        if (vsmodel && vsmodel.length > 0) {
            clickType = $(vsmodel[0]).attr('data-gtm-component-title');
        } else if (vsmodelVideo && vsmodelVideo.length > 0) {
            clickType = vsmodelVideo.text().trim();
        }
    }
    return clickType;
}

function getClickText(elem) {
    let clickText = '';

    if (elem.nodeName === 'SELECT') {
        clickText = elem.value;
    } else if (elem.textContent?.length > 0) {
        clickText = elem.textContent?.trim();
    } else if (elem.ariaLabel?.length > 0) {
        clickText = elem.ariaLabel?.trim();
    } else if ($(elem).hasClass('visa-icon-thumbs-up-reverse')) {
        clickText = 'like';
    } else if ($(elem).hasClass('visa-icon-thumbs-down-reverse')) {
        clickText = 'dislike';
    }
    
    if (clickText.toLocaleLowerCase().startsWith("ongoing chat")) {
        clickText = 'ongoing chat';
    }
    
    return clickText;
}

clickElements.forEach((elem) => {
    $(document).on('click', elem, function (event) {
        let eventObj = JSON.parse(config)?.eventObject;
        iterate.call(this, eventObj);
        simplify.call(this, eventObj);
        let click_event = new CustomEvent('click_tracking', { detail: eventObj });
        if (eventObj.component === 'Chat Assistant' && elem != ".vs-link-cta") {
            click_event = new CustomEvent('chat_tracking', { detail: eventObj });
        }
        if(!$(event.target).hasClass("chat-end-btn")){
            document.dispatchEvent(click_event);
        }
    });
});

shadowRoots.forEach((shadowRoot) => {
    clickElements.forEach((elem) => {
        $(shadowRoot)[0]
            ?.shadowRoot.querySelectorAll(elem)
            .forEach((item) => {
                item.addEventListener('click', function (item) {
                    let eventObj = JSON.parse(config)?.eventObject;
                    iterate.call(this, eventObj);
                    simplify.call(this, eventObj);
                    let click_event = new CustomEvent('click_tracking', {
                        detail: eventObj,
                    });
                    document.dispatchEvent(click_event);
                });
            });
    });
});

document.addEventListener("chat_tracking_internal", (e) => {
    document.dispatchEvent(new CustomEvent("chat_tracking", { detail: e.detail }));
});

iterate = function (obj) {
    Object.keys(obj).forEach((key) => {
        if (eval(obj[key])?.length <= 0) {
            delete obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate.call(this, obj[key]);
        } else {
            obj[key] = eval(obj[key]);
        }
    });
};
simplify = function (obj) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] && obj[key]['selectors']) {
            let firstKey = Object.keys(obj[key]['selectors'])[0];
            let objectKeyValue = eval(firstKey);
            if (objectKeyValue) {
                obj[key] = objectKeyValue;
            } else if (Object.keys(obj[key]['selectors'])[1]) {
                let secondkey = Object.keys(obj[key]['selectors'])[1];
                let objectSecondKeyValue = eval(secondkey);
                if (objectSecondKeyValue) {
                    obj[key] = objectSecondKeyValue;
                }
            } else {
                obj[key] = '';
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            simplify(this, obj[key]);
        } else if (typeof obj[key] === 'undefined' || obj[key] === 'NAA') {
            obj[key] = '';
        }
    });
};
