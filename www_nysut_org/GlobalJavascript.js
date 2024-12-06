

//==========================================================================================
// Verndale.com - GlobalJavascript.js
//==========================================================================================
/* In this file:
[jQuery Extensions] - all custom jQuery.extend functions
[Global Variables] - any variables needed globally
[JavaScript and jQuery Plugins] - all plugins written in javascript or jQuery
[Javascript Functions] - all none jQuery functions
[jQuery functions on load] - all modules / controls of the site
*/
//==========================================================================================
// BEGIN: JavaScript and jQuery Plugins
// END: JavaScript and jQuery Plugins
//==========================================================================================
// BEGIN: Extend jQuery
jQuery.extend({
    isUndefined: function (obj) {
        return typeof (obj) == "undefined" ? true : false;
    },
    exists: function (obj) {
        return jQuery(obj).length != 0 ? true : false;
    },
    browserDetection: function (appendTo, evalBrowser) {
        var userAgent = navigator.userAgent.toLowerCase();
        if (!evalBrowser) {
            var bindToElm = (jQuery.isUndefined(appendTo) ? jQuery("body") : jQuery(appendTo));
            jQuery.browser.chrome = /chrome/.test(userAgent);
            if (jQuery.browser.msie) { // Is this a version of IE?
                bindToElm.addClass("browser-ie");
                bindToElm.addClass("browser-ie" + jQuery.browser.version.substring(0, 1));
            }
            if (jQuery.browser.chrome) { // Is this a version of Chrome?
                bindToElm.addClass("browser-chrome");
                userAgent = userAgent.substring(userAgent.indexOf("chrome/") + 7);
                userAgent = userAgent.substring(0, 1);
                bindToElm.addClass("browser-chrome" + userAgent);
                jQuery.browser.safari = false; // If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
            }
            if (jQuery.browser.safari) { // Is this a version of Safari?
                bindToElm.addClass("browser-safari");
                userAgent = userAgent.substring(userAgent.indexOf("version/") + 8);
                userAgent = userAgent.substring(0, 1);
                bindToElm.addClass("browser-safari" + userAgent);
            }
            if (jQuery.browser.mozilla) { // Is this a version of Mozilla?
                if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) { //Is it Firefox?
                    bindToElm.addClass('browser-firefox');
                    userAgent = userAgent.substring(userAgent.indexOf("firefox/") + 8);
                    userAgent = userAgent.substring(0, 1);
                    bindToElm.addClass("browser-firefox" + userAgent);
                } else { // If not then it must be another Mozilla
                    bindToElm.addClass("browser-mozilla");
                }
            }
        } else {
            var toEval = new RegExp(evalBrowser);
            return toEval.test(userAgent);
        }
    },
    getRootDomain: function () {
        var rootDomain = document.location.hostname;
        if (rootDomain.match(/localhost/gi)) {
            return finalDomain = "localhost";
        } else {
            var split = rootDomain.split('.');
            return "." + split[split.length - 2] + "." + split[split.length - 1];
        }
    },
    getHashValue: function () {
        return window.location.hash;
    },
    vcookie: function (c_name, value, exdays) {
        if (!value) {
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return unescape(y);
                }
            }
        } else if (value == "remove") {
            var c_value = escape(value) + "; expires=Thu, 1 Aug 1983 20:47:11 UTC";
            document.cookie = c_name + "=" + c_value;
        } else {
            var exdate = new Date(exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value;
        }
    },
    elmOverride: function (overrideName, overrideValue, overrideExdays) {
        //Do a relay to set cookie and attach override on target parent
        var c_name = overrideName;
        var value = (overrideValue == null ? null : overrideValue);
        var exdays = (typeof (overrideExdays) == 'undefined' ? '' : overrideExdays)

        jQuery.vcookie(c_name.replace(/[#.]/gi, ''), value, exdays);
        setFormDefaults().setValues(c_name);
    }
});

jQuery.fn.extend({
    trunc: function (count, append) {
        //Used for string truncation
        return (isNaN(count)) ? this : this.each(function () {
            var _this = jQuery(this);
            var curCount = 0;
            var boolCount = true;
            var curChar = "";
            var curString = jQuery.trim(_this.html());
            var tempString = "";
            var truncAppend = append;
            for (var i = 0; i < curString.length; i++) {
                curChar = curString.charAt([i]);
                tempString += curChar;
                switch (curChar) {
                    case "<":
                        boolCount = false;
                        break;
                    case ">":
                        boolCount = true;
                        break;
                    default:
                        if (boolCount) {
                            curCount++;
                        }
                }
                if (curCount == count) {
                    _this.html(tempString + (jQuery.isUndefined(truncAppend) ? "..." : truncAppend));
                    break;
                }
            }
        });
    },
    outerHTML: function (obj) {
        return jQuery("<div>").append(jQuery(this).clone()).html();
    },
    popupWindow: function (name, width, height, spec) {
        jQuery(this).live('click', function (e) {
            e.preventDefault();
            var winName = name.replace(/[ -\/&#]/gi, '');
            var theWidth = (width) ? width : 700;
            var theHeight = (height) ? height : 500;
            var winSpecs = 'width=' + width + ',height=' + height + ',' + (jQuery.isUndefined(spec) ? 'location=0,menuBar=1,resizable=1,scrollbars=1,status=1,toolbar=0,directories=0' : spec);
            window.open(this.href, winName, winSpecs);
        });
    },
    defaultText: function (activeClass, defautlAttr) {
        //Toggle class based on default value
        var _this = jQuery(this);
        _this.val() != _this.attr(defautlAttr) ? _this.removeClass(activeClass) : (_this.hasClass(activeClass) ? "" : _this.addClass(activeClass));
        _this.focus(function () {
            if (_this.val() == _this.attr(defautlAttr)) {
                _this.val('');
                _this.removeClass(activeClass);
            }
        }).blur(function () {
            if (_this.val() == "") {
                _this.val(_this.attr(defautlAttr));
                _this.addClass(activeClass);
            }
        });
    },
    customTransform: function (configValues) {
        var targetObject = jQuery(this);
        jQuery(targetObject).css('display', 'none');
        var myConfig = {
            "bindings": [configValues]
        };
        var _objectType = jQuery(targetObject).get(0).tagName.toLowerCase();
        var _objectAddClassContainer = typeof (myConfig.bindings[0].containerClass) == 'undefined' ? '' : myConfig.bindings[0].containerClass;
        var _objectAddClassLabel = typeof (myConfig.bindings[0].labelClass) == 'undefined' ? '' : myConfig.bindings[0].labelClass;
        var _objectAddClassDrop = typeof (myConfig.bindings[0].dropClass) == 'undefined' ? '' : myConfig.bindings[0].dropClass;
        var _objectDoPostBack = typeof (myConfig.bindings[0].postBack) == 'undefined' ? '' : myConfig.bindings[0].postBack;
        var _objectDoCallback = typeof (myConfig.bindings[0].callBack) == 'undefined' ? '' : myConfig.bindings[0].callBack;

        //More templates can be added to this, just add else + element type to extend.
        if (_objectType == 'select') {
            var selected = jQuery(':selected', targetObject).text();
            jQuery(targetObject).after(
                '<div class=\"uxselect select ' + _objectAddClassContainer + '\">' + '<a class=\"label ' + _objectAddClassLabel + '\" href=\"javascript:void(0);\"><span>' + selected + '</span></a>' + '<div style=\"display:none;\" class=\"dropdown ' + _objectAddClassDrop + '\"><ul></ul></div></div>');

            var currentObj = jQuery('.uxselect.' + _objectAddClassContainer);
            jQuery('option', targetObject).each(function () {
                jQuery(this).attr('data-default') ? "" : jQuery('.dropdown ul', currentObj).append('<li><a data-value=\"' + jQuery(this).val() + '\" href=\"javascript:void(0);\">' + jQuery(this).text() + '</a></li>');
            });

            jQuery('.dropdown a', currentObj).live('click', function (e) {
                e.preventDefault();
                var text = jQuery(this).text();
                var index = jQuery(this).parent('li').index();
                jQuery('.label span', currentObj).html(jQuery(this).text());
                jQuery('option:eq(' + index + ')', jQuery(targetObject)).attr('selected', 'selected');
                jQuery('div.dropdown', currentObj).css('display', 'none');

                //If a postback is needed, get the postback value from the original select box and append to custom box.
                if (_objectDoPostBack != '') {
                    javascript: setTimeout('__doPostBack(\'' + jQuery(targetObject).attr('name') + '\',\'\')', 50);
                }

                //Makes a callback once a new value is selected. Passes original option value & text  
                if (_objectDoCallback != '') {
                    _objectDoCallback(jQuery(this).attr('data-value'), jQuery(this).text());
                }
            });

            jQuery('a.label', currentObj).live('click', function () {
                jQuery(this).next('div.dropdown').css('display', 'block');
                jQuery(this).parents('.uxselect').one('mouseleave', function () {
                    jQuery('.dropdown', this).css('display', 'none');
                });
            });
        }
    }
});
$.fn.NoramlTruncate = function (charLen) {
    //console.log($(this));
    var targetText = $(this);
    var text = targetText.text();
    if (text.length > parseInt(charLen)) {
        return targetText.text(text.substr(0, parseInt(charLen)) + '...');
    }
};

// END: Extend jQuery

//==========================================================================================
// BEGIN: Global Variables

// End: Global Variables

//==========================================================================================
// BEGIN: Functions

/*********************************************************
Begin: IE augmentation script, to add minimal help with older IE verions */

function initIEAugment() {
    jQuery('ul > li:first-child, ol > li:first-child').addClass('first-child');
    jQuery('ul > li:last-child, ol > li:last-child').addClass('last-child');
    jQuery('tr:odd').addClass('odd');
    jQuery('tr:even').addClass('even');
}
/* End: IE augmentation script, to help with older IE verions */


/*********************************************************
Begin: Initializing Tabs */

function iniTabController(source, destination, className) {
    // make first tab-content active on pageload
    jQuery(destination + ':eq(' + jQuery(source + '.' + className).index() + ')').addClass(className);
    // bind click event to tabs
    jQuery(source).on('click', function (e) {
        //e.preventDefault();
        var _this = jQuery(this);
        _this.parent().siblings().removeClass(className);
        _this.parent().addClass(className);
        jQuery(destination).removeClass(className);
        jQuery(destination + ":eq(" + _this.parent().index() + ")").addClass(className);
        return false;
    });
    // trigger initial click on first tab
    jQuery(source + ':eq(0)').click();
}
/* End: Initializing Tabs */


// Active Tab
function activeTab() {
    if (window.location.href.indexOf("tab=past") > -1) {
        $('.tab-navigation li.events').addClass('active');
        $('#events-content.tab-content').addClass('active');
        $('.tab-navigation li.news').removeClass('active');

        $('.tab-navigation li.UpcomingMeetings').removeClass('active');
        $('.tab-navigation li.PastMeetings').addClass('active');
    }
    if (window.location.href.indexOf("tab=upcoming") > -1) {
        $('.tab-navigation li.news').addClass('active');
        $('.tab-navigation li.events').removeClass('active');

        $('.tab-navigation li.UpcomingMeetings').addClass('active');
        $('.tab-navigation li.PastMeetings').removeClass('active');

    }
}

/*********************************************************
Begin: Initializing Blades - Expand / Collapse */

function iniBlades(objTarget, objContent, objParent, isAccordion) {
    // hide all blades by default
    jQuery(objContent).hide();
    // bind blade click functionality
    jQuery(objTarget).on('click', function (e) {
        e.preventDefault();
        var _this = jQuery(this);
        var _parent = _this.parents(objParent + ':first');
        var _content = jQuery(objContent, _parent);

        if (isAccordion) {
            if (_parent.hasClass('active')) {
                jQuery(objContent, '.active').slideUp('fast');
                jQuery(objParent).removeClass('active');
            } else {
                jQuery(objContent, '.active').slideUp('fast');
                jQuery(objParent).removeClass('active');
                _content.slideDown('fast');
                _parent.addClass('active');
            }
        } else {
            _content.slideToggle('fast');
            _parent.toggleClass('active');
        }
    });
}


/* End: Initializing Blades - Expand / Collapse */

// END: Functions

//==========================================================================================
// BEGIN: jQuery functions on load
//jQuery.noConflict();
jQuery(document).ready(function ($) {
    //$.browserDetection('body');
    // if IE8 or less, init IE augmentation script
    if ($('body').hasClass('browser-ie6') || $('body').hasClass('browser-ie7') || $('body').hasClass('browser-ie8')) {
        initIEAugment();
    }

    // If JavaScript is enabled this adds "j_on" to body tag.
    $("body").addClass("j-on");

    // Clean up white space
    $('.section-news-description').each(function () {
        if ($.trim($(this).text()) == "") {
            $(this).remove();
        }
    });

    $('.caption-news').each(function () {
        if ($.trim($(this).text()) == "Caption:") {
            $(this).remove();
        }
    });

    //Active tabs for meetings
    activeTab();

    // MPP Beneficiary Toggle
    beneficiary();


    // ------------------------------------------------------------------------------
    // BEGIN: Default Input Value
    // Give input fields a class 'default-text' to enable clear-text functionality
    $('.default-text').each(function () {
        $(this).defaultText('active', 'title');
    });
    $('.loginName').focus();
    // END: Default Input Value

    // Show Login Menu
    $(".show-login").click(function (e) {
        $(".login-block").fadeToggle("slow", "linear").toggleClass('is-visible');
        $('.loginName').focus();
        e.preventDefault();
    });


    // ------------------------------------------------------------------------------
    // BEGIN: Primary Nav JS Augmentation
    // Add some additional redundancy checks to primary nav to provide ensured hover/active states
    $('li', '.primary-nav').each(function () {
        var _this = $(this);
        _this.on({
            mouseenter: function (e) {
                _this.addClass('hover');
            },
            mouseleave: function (e) {
                _this.removeClass('hover');
            }
        });
    });

    //Social Media Icons Hover state
    $('.social-icons li>a').each(function () {
        var _this = $(this);
        _this.on({

            mouseenter: function (e) {
                _this.find("img").hide();
                _this.find("img").addClass("defaultImage");
                _this.find("img + img").show();
                _this.find("img + img").addClass("hoverImage");

            },
            mouseleave: function (e) {

                _this.find(".defaultImage").show();
                _this.find(".defaultImage").removeClass("defaultImage");
                _this.find(".hoverImage").hide();
                _this.find(".hoverImage").removeClass("defaultImage");

            }
        });


    });
    // END: Default Input Value


    // Updating Profile Forms
    updateProfile();


    //mobile primary navigation
    $('.primary-nav-mob-icon').click(function (e) {
        if (!$(".primary-nav-wrap").hasClass("activeDrop")) {
            $(".primary-nav-wrap").slideDown("slow");
            $(".primary-nav-wrap").addClass("activeDrop");
        } else {
            $(".primary-nav-wrap").slideUp("slow");
            $(".primary-nav-wrap").removeClass("activeDrop");
        }
    });

    //Assigning Equal Height to Li's

    function setEqualHeights(objVal, checkMobileRequired) {
        var __this = $(objVal);
        var windowWidth = $(window).width();
        if (__this.attr("height")) {
            __this.removeAttr("height");
        }
        if (checkMobileRequired) {
            if (windowWidth <= 321) {
                for (i = 0; i < __this.length; i = i + 2) {
                    tallest = $(__this[i + 1]).height() ? $(__this[i + 1]).height() : 0;
                    if ($(__this[i]).height() > tallest) {
                        tallest = $(__this[i]).height();
                    }
                    $(__this[i]).height(tallest + 10);
                    $(__this[i]).css("margin-right", "6%");
                    $(__this[i + 1]).height(tallest + 10);
                }
            } else {
                __this.removeAttr("height");
            }
        } else {
            if (windowWidth >= 655) {
                for (i = 0; i < __this.length; i = i + 2) {
                    tallest = $(__this[i + 1]).height() ? $(__this[i + 1]).height() : 0;
                    if ($(__this[i]).height() > tallest) {
                        tallest = $(__this[i]).height();
                    }
                    $(__this[i]).height(tallest + 10);
                    $(__this[i]).css("margin-right", "6%");
                    $(__this[i + 1]).height(tallest + 10);
                }
            } else {
                __this.removeAttr("height");
            }
        }
    }

    //if ($.exists('.footer-quick-links')) {
    //    setEqualHeights('.footer-quick-links > div > div', true);
    //    $('.footer-quick-links > div').css("margin-right", "0px");
    //}

    /*if ($.exists('.generic-section-footer-links')) {
    setEqualHeights('.generic-section-footer-links > li', false);
    }*/

    if ($.exists('.feature-area')) {
        setEqualHeights('.feature-listing ul > li', false);
    }
    /*if ($.exists('.member-group-listing')) {
    setEqualHeights('.member-group-listing ul > li', false);
    }*/

    //navigation controls
    $(".ddl-section-navigation").change(function () {
        window.location.href = $(this).val();
    });

    jQuery('.search-listing').trunc(330, "...");
    jQuery('.news-listing').trunc(330, "...");
    jQuery('.news-listing-wrapper .teaser-description').trunc(330, "...");
    jQuery('.generic-listing .teaser-text').trunc(330, "...");
    jQuery('.callout .teaser-text').trunc(800, "...");
    jQuery('.thumb_text').trunc(30, "...");

    jQuery('.callout-content').trunc(420, "...");


    if ($.exists('.flickr_badge_image')) {
        $(".flickr_badge_image a").attr("target", "_blank");
    }


    if ($.exists('.more-issues-list')) {
        $('.more-issues-list > li > div').click(function (event) {
            var __thisParent = $(this).parent();
            if (!__thisParent.hasClass("active")) {
                if (__thisParent.is($('.more-issues-list > li:first'))) {
                    __thisParent.attr("style", "border-top:1px solid #cdcdcd");
                }
                __thisParent.addClass("active");
                $(this).next(".more-issues-list-sub-items").slideDown();
            } else {
                if (__thisParent.is($('.more-issues-list > li:first'))) {
                    __thisParent.attr("style", "border-top:0px");
                }
                __thisParent.removeClass("active");
                $(this).next(".more-issues-list-sub-items").slideUp();
            }
        });
    }

    // every three item remove margin in tabber
    if ($.exists('.leadership-landing-details')) {
        $('.leadership-landing-details li:nth-child(2n+2)').css({
            marginRight: '0px'
        });
    }

    //contact form add Required text 
    if ($.exists('.scfForm')) {
        $('.scfIntroBorder').before('<div class="require-txt">&#42; Required</div>');
    }

    // every three item equal height
    if ($.exists('.feature-listing')) {
        $('.feature-listing li:nth-child(2n+2)').css({
            marginRight: '0'
        });
        $('.feature-listing li:nth-child(3n+3)').css({
            clear: 'both'
        });
    }

    //Resources Accordion menu	
    $.fn.togglepanels = function () {
        return this.each(function () {
            $(this).addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
                .find("h6")
                .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
                .hover(function () {
                    $(this).toggleClass("ui-state-hover");
                })
                .prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>')
                .click(function () {
                    $(this)
                        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
                        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
                        .next().slideToggle();
                    return false;
                })
                .next()
                .addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom")
                .hide();
        });
    };

    $(".browse-resource-accordion").togglepanels();

    var screen_width = $(window).innerWidth();

    $(window).bind("load resize", function () {

        function overlay_fix() {

            var img_width = $('.member-group-listing li').find('img').width();
            var img_height = $('.member-group-listing li').find('img').height();
            if (screen_width >= 320) {
                $('.member-group-listing li .overlay').css({
                    "width": img_width,
                    "height": img_height
                });
            } else {
                $('.member-group-listing li .overlay').css({
                    "width": img_width,
                    "height": img_height
                });
            }
        }
        var fb_recom_Width = $('.callout-wrap .callout-head').width();

        function fb_width_adjust() {
            if ($.exists('.fb_iframe_widget')) {
                //console.log(fb_recom_Width);
                $('.fb_iframe_widget>span').attr("style", "width:100%");
                $('.fb_iframe_widget>span img').css("max-width", "100%");
            }
        }

        overlay_fix();
        fb_width_adjust();

    });
    // every three item remove margin in tabber
    if ($.exists('.leadership-landing-details')) {
        $('.leadership-landing-details li:nth-child(2n+2)').css({
            marginRight: '0px'
        });
    }


    // every three item equal height
    if ($.exists('.feature-listing')) {
        $('.feature-listing li:nth-child(2n+2)').css({
            marginRight: '0'
        });
        $('.feature-listing li:nth-child(3n+3)').css({
            clear: 'both'
        });
    }

    if ($.exists('.member-group-listing')) {
        $('.member-group-listing li:nth-child(2n+2)').css({
            marginRight: '0'
        });
        //$('.member-group-listing li:nth-child(3n+3)').css({
        //    clear: 'both'
        //});
    }

    //to show the browse all resource accordion
    if ($.exists('.ui-accordion-content')) {
        var query_object = window.location.href;

        if (query_object.indexOf("resources") > -1 && (query_object.indexOf("topic") > -1 || query_object.indexOf("audience") > -1 || query_object.indexOf("type")) > -1) {
            query_object = query_object.split("?")[1].split("=");
            query_object[0] = query_object[0].toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });

            var __this = jQuery(".browse-resource-accordion li:contains('" + query_object[0] + "')")
            __this.find(".ui-accordion-content").show();
            __this.find("h6").addClass("ui-accordion-header-active ui-state-active").removeClass("ui-state-default");
            __this.find("span").addClass("ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-e");

        }
    }

    //Show more JSON Functionality
    //Onload ajax call

    if ($('.show-more').is(':visible')) {
        // Check if button is needed first time through
        showMoreList();
    }

    if ($.exists('.show-more-latest')) {
        $('.show-more-latest').click(function () {
            $('.latest-listing').attr("style", "height:100%;overflow:auto");
            $(this).attr("style", "display:none;");
        });
    }

    $('.show-more-search').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var strKeyword = getQuerystring("keyword");
        var pageName = "JSON.aspx";
        if ($(this).hasClass("show-more-elt")) { pageName = "eltJSON.aspx" }

        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: successLoadSearchDetail
        }).doAjaxCall("/Utilities/Feeds/" + pageName + "?key=searchlisting&keyword=" + strKeyword + "&page=" + showCounter + "&resultsperpage=10");
    });

    //onlick of show more alerts button - calling ajax
    $('.show-more-alerts').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var strAjaxDataURL = "";
        var strHiddenVal = $('input[id$= hfType]').val();

        if (strHiddenVal == "AlertListing") {
            var strRoleType = $('input[id$= hfRole]').val();
            strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=mynysutalertlisting&page=" + showCounter + "&resultsperpage=10&role=" + strRoleType;
        }
        else if ($.exists($('input[id$= toolkitGuid]'))) {
            var strRoleToolKit = $('input[id$= hfRole]').val();
            var strToolKitValue = $('input[id$= toolkitGuid]').val();
            strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=mynysuttoolkitlisting&page=" + showCounter + "&resultsperpage=10&role=" + strRoleToolKit + "&itemid=" + strToolKitValue;

        }
        //Ajax call
        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: successLoadAlerts
        }).doAjaxCall(strAjaxDataURL);
    });

    $('.past-meetings-btn').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var strRoleType = $('input[id$= hfRole]').val();
        var strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=mynysutpastmeeting&page=" + showCounter + "&resultsperpage=10&role=" + strRoleType;

        //Ajax call
        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: successLoadMeetings
        }).doAjaxCall(strAjaxDataURL, "past");
    });

    $('.up-meetings-btn').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var strRoleType = $('input[id$= hfRole]').val();
        var strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=mynysutupcomingmeeting&page=" + showCounter + "&resultsperpage=10&role=" + strRoleType;

        //Ajax call
        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: successLoadMeetings
        }).doAjaxCall(strAjaxDataURL, "upcoming");
    });

    $('.show-more-cards').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=combonewslisting&page=" + showCounter + "&resultsperpage=12";

        //Ajax call
        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: successLoadNewsCardDetail
        }).doAjaxCall(strAjaxDataURL);
    });

    //onlick of show more button - calling ajax
    $('.show-more-news').click(function () {
        $('.ajax-loader').show();
        showCounter = showCounter + 1;
        var page_url = window.location.href;
        var strAjaxDataURL = "";
        var pageName = "JSON.aspx";
        var callbackFunction = successLoadNewsDetail;
        if ($(this).hasClass("show-more-elt")) {
            pageName = "eltJSON.aspx";
            callbackFunction = successLoadNewsDetail_ELT;
        }

        //for News listing
        if (page_url.indexOf("news") > -1) {
            strAjaxDataURL = "/Utilities/Feeds/" + pageName + "?key=newslisting&page=" + showCounter + "&resultsperpage=10";
        }

        //for Resource listing
        if (page_url.indexOf("resources") > -1) {
            strAjaxDataURL = "/Utilities/Feeds/JSON.aspx?key=resourcelisting&page=" + showCounter + "&resultsperpage=10";
        }

        //Filtered By Audience / Type / Topic
        if (page_url.indexOf("audience") > -1) {
            strAjaxDataURL += "&audience=" + GetParameterValues("audience");
        }
        if (page_url.indexOf("type") > -1) {
            strAjaxDataURL += "&type=" + GetParameterValues("type");
        }
        if (page_url.indexOf("topic") > -1) {
            strAjaxDataURL += "&topic=" + GetParameterValues("topic");
        }

        //Ajax call
        dataRequest({
            showResponse: true,
            narrowToProperty: '',
            successCallback: callbackFunction
        }).doAjaxCall(strAjaxDataURL);
    });

    $("#formHeaderSearch").submit(function (e) {

        e.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            keyword = $form.find("input[name='keyword']").val(),
            searchUrl = $form.attr("action");
        //only alphanumeric dash period comma apostrophe quotes and whitespace allowed
        var regex = /^[a-zA-Z0-9-.,"'\s]*$/;
        keyword = $.trim(keyword);

        if (keyword != "") {
            if (regex.test(keyword) == true) {
                // If searching for "RA", then redirect to RA landing page
                if (keyword.toLowerCase() == "ra") {
                    $(location).attr('href', '/ra');
                    return;
                }
                var servUrl = window.location.host;
                //$(location).attr('href', 'http://' + servUrl + searchUrl + '?keyword=' + keyword);
                $(location).attr('href', searchUrl + '?keyword=' + keyword);
            }
            else {
                alert("Sorry, you're search term included one or more illegal characters!");
            }
        }
    });


    if (window.location.href.indexOf("pledge.nysut.org") > -1) {
        if ($.exists('.show-login')) {
            $(".light-blue, .top-utility-left.top-utility-links.hide-for-small > a").hide();
        }
    }

    $('.birth-datepicker :input').prop('autocomplete', 'foo-bar').datepicker({
        defaultDate: "06/30/1955",
        changeMonth: true,
        changeYear: true,
        yearRange: "1910:2010"
    });

    $('.death-datepicker :input').prop('autocomplete', 'foo-bar').datepicker({
        changeMonth: true,
    });

    if ($.exists('.scfFileUpload')) {
        $(".scfSubmitButton").click(function (e) {
            //check whether browser fully supports all File API
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                //get the file size and file type from file input field
                $("input:file").each(function () {
                    if (this.files.length) {
                        var attachment = this.files[0];
                        var fsize = attachment.size;
                        var fname = attachment.name;
                        var ftype = attachment.type;
                        var toobig = false;
                        var invalidType = false;
                        var message = "";

                        if (fsize > 5242880) //do something if file size more than 5 MB (5,242,880)
                        {
                            toobig = true;
                            message = "<strong>" + fname + "</strong> is " + (fsize / 1048576).toFixed(1) + " MB. Please select a file that is less than 5 MB.";
                        }

                        switch (ftype) {
                            case "image/png":
                            case "image/gif":
                            case "image/jpeg":
                            case "image/tiff":
                            case "application/pdf":
                            case "application/msword":
                            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                                break;
                            default:
                                invalidType = true;
                                if (toobig) {
                                    message += "<br /><br />Also, ";
                                }
                                message += "<strong>" + fname + "</strong> is not a supported file type. Only PDFs, images and Word documents are allowed.";
                        }

                        if (toobig || invalidType) {
                            e.preventDefault();
                            $("#divUploadErrorModal").remove();
                            $("body").append('<div id="divUploadErrorModal" class="small reveal" data-reveal><h2>File Not Uploaded!</h2><a class="close-button" data-close>&#215;</a><p>' + message + '</p></div>');
                            var revealModal = new Foundation.Reveal($("#divUploadErrorModal"));
                            revealModal.open();
                            return false;
                        }
                    }
                });
            }
        });
    }

    if ($.exists('.newsWidget')) {
        var $newsList = $("#news li").hide();
        $("#newsPrev5").hide();
        $("#allRelatedNews").hide();
        $newsList.slice(0, 5).show();
        var size_li = $newsList.length;
        var x = 5
        var start = 0;

        if (size_li == 0) {
            $('.newsWidget').hide();
            return;
        }
        else {

            //Build "See all news" link...
            if ($.exists('a:contains("News and Resources")')) {
                var allNewsUrl = $('a:contains("News and Resources")').attr("href");
                if (allNewsUrl.length > 0) {
                    $("#allRelatedNews").attr("href", allNewsUrl);
                    $("#allRelatedNews").show();
                }
            }

            if ((start + x) < size_li)
                $("#newsCount").empty().append("items " + (start + 1) + " - " + (start + x));
            else {
                $("#newsCount").empty().append("items " + (start + 1) + " - " + size_li);
                $("#newsNext5").hide();
            }

            $('#newsNext5').click(function () {
                if (start + x < size_li) {
                    $("#newsPrev5").show();
                    $("#news").fadeOut(500, function () {
                        $newsList.slice(start, start + x).hide();
                        start += x;
                        $newsList.slice(start, start + x).show();

                        if (start + x < size_li) {
                            $("#newsCount").empty().append("items " + (start + 1) + " - " + (start + x));
                        }
                        else {
                            $("#newsCount").empty().append("items " + (start + 1) + " - " + (size_li));
                            $("#newsNext5").hide();
                        }

                        $("#news").fadeIn(500);
                    });
                }
            });

            $('#newsPrev5').click(function () {

                if (start - x >= 0) {
                    $("#newsNext5").show();
                    $("#news").fadeOut(500, function () {
                        $newsList.slice(start, start + x).hide();
                        start -= x;
                        $newsList.slice(start, start + x).show();
                        if ((start + x) < size_li)
                            $("#newsCount").empty().append("items " + (start + 1) + " - " + (start + x));
                        else
                            $("#newsCount").empty().append("items " + (start + 1) + " - " + size_li);
                        $("#news").fadeIn(500);
                    });
                }
                if (start <= 5) { $("#newsPrev5").hide(); }
            });
        }
    }

    $("#pledgeCheckbox").click(function () {
        $(this).toggleClass('checked');
        var redirectUrl = "http://" + document.domain + '/my-nysut/member/political-action/successful-pledge';
        redirectUrl = redirectUrl.replace("pledge.nysut.org", "www.nysut.org");

        if ($(this).hasClass('checked')) {

            $("#pledgeCheckbox").animate({
                width: "100px",
                height: "100px",
                opacity: 1,
                fontSize: "4em"
            }, 1000);
            $('body').fadeOut(2000, function () {
                setTimeout(function () {
                    location.href = redirectUrl;
                });
            });
        }
    });

    if ($.exists('.clock')) {
        // Grab the current date
        var currentDate = new Date();
        var electionDay = new Date("11/08/2016");

        // Calculate the difference in seconds between the future and current date
        var diff = electionDay.getTime() / 1000 - currentDate.getTime() / 1000;

        // Instantiate a coutdown FlipClock
        clock = $('.clock').FlipClock(diff, {
            clockFace: 'DailyCounter',
            countdown: true
        });
    }

    if ($('#form_60EB9E5FF81742D68F2E183D05286B7E').length) {

        $('.commawards-article .scfSectionContent').not('.commawards-article.last .scfSectionContent').append('<a class="addArticle-button">Add Article</a>');

        $('.addArticle-button').click(function () {
            $('.commawards-article.hidden').first().removeClass("hidden");
            $(this).hide();
        });

        $('.commawards-section fieldset').prepend('<a class="show-commsection">Show</a>');
        $('.commawards-section .scfSectionContent').hide();

        $('.show-commsection').click(function () {
            var $section = $(this).parent().find('.scfSectionContent');
            var linkText = $section.is(':visible') ? 'Show' : 'Hide';
            $(this).text(linkText);
            $section.toggle();
        });

        $('.commawards-writing fieldset').prepend('<a class="show-writing">Show</a>');
        $('.commawards-writing .scfSectionContent').hide();

        $('.show-writing').click(function () {
            var $self = $(this).parent().find('.scfSectionContent');
            var $articles = $('.commawards-article').not('.commawards-article.hidden, .commawards-writing');
            var linkText = $self.is(':visible') ? 'Show' : 'Hide';
            $(this).text(linkText);
            var $all = $articles.add($self);
            $all.toggle();
        });
    }

    if ($('#form_99B44C73BA7240B383F686D5705FEC47').length) {
        $('.first-name input, .last-name input').on('change', function () {
            var $fname = $('.first-name input').val();
            var $lname = $('.last-name input').val();
            var regx = /[^A-z]/g;
            $('.full-name input').val($lname.replace(regx, "") + " " + $fname.replace(regx, ""));
        });
    }


    $('.pubCatToggler').click(function () {
        var toggler = $(this);
        var section = $(this).closest('.pubCategoryListing');
        var sectionItems = section.find('.pubCatItems');

        sectionItems.slideToggle(1000, function () {
            if (sectionItems.css('display') == 'none') {
                toggler.html('&#8681; Expand');
                toggler.attr({ "title": "Show category" });
            } else {
                toggler.html('&#8679; Collapse');
                toggler.attr({ "title": "Hide category" });
            }
        });
    });

    // Execute on load
    SetPubCart();

    $(".pubItemButton").click(function (e) {
        localStorage.setItem("pubCatTop", null);
        if ($(window).width() > 767) {
            var windowTop = $(window).scrollTop();
            localStorage.setItem("pubCatTop", (windowTop));
        }
    });

    $('.pubCartOrderButton, .pubCatIndexLink').click(function (e) {
        //localStorage.setItem("pubCatTop", null);
        localStorage.removeItem('pubCatTop');
    });

    $('#hypCardLink').click(function (e) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'MYNYSUT',
            eventAction: 'View',
            eventLabel: 'Member Card'
        });
    });

    var $actOwl = $('.act-now').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        onInitialized: function () {
            Foundation.reInit('equalizer');
        },
        rewind: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            656: {
                items: 2,
                slideBy: 2
            },
            1024: {
                items: 3,
                slideBy: 3
            }
        }
    });

    var $hpResourcesOwl = $('.resources-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        onInitialized: function () {
            Foundation.reInit('equalizer');
        },
        rewind: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            656: {
                items: 3,
                slideBy: 3
            },
            1024: {
                items: 4,
                slideBy: 4
            }
        }
    });

    $('.owl-carousel-div').each(function () {
        var timeout = parseInt($('input[type="hidden"]', this).val());
        var $cardCarousel = $(this).owlCarousel({
            loop: true,
            margin: 16,
            center: true,
            nav: false,
            dots: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: timeout,
            autoplayHoverPause: true,
            onInitialized: function (e) {
                Foundation.reInit('equalizer');
            },
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                820: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            },
        });
    });



    //add title attribute for carousel dots...
    $('.owl-carousel .owl-dot').each(function (index) {
        $(this).attr('title', 'Show item ' + (index + 1));
    });

    //hide hamburger menu when login dropdown displays...
    //$('.member-icon').click(function()
    //{
    //    if (!($("#login-dropdown").hasClass("is-open")))
    //    {
    //        $('.menu-icon').css('zIndex', -1);
    //    }
    //    else
    //    {
    //        $('.menu-icon').css('zIndex', 10);
    //    }
    //});

    var flipCounter = 0;
    //02/25/19 - Deactivated flip effect for Latest News
    //$(".latest-news-section .latest-news-item.animate").each(function (i, value) {

    //    var item = $(this);
    //    var anims = ["fade-right", "slide-up", "fade-right"];
    //    if (flipCounter == 3)
    //        flipCounter = 0;
    //    $(item).attr('data-aos', anims[flipCounter]);
    //    flipCounter++;
    //});


    $(window).windowResizeEnd({
        onDragEnd: function () {
            SetPubCart();
            if ($('[data-equalizer]').length) {
                Foundation.reInit('equalizer');
            }
        },
        runOnStart: false
    });

    $('#wait').fadeOut(500);

    $('.newsFilter').on('change', function () {
        var url = $(this).val();
        if (url) {
            window.location.href = url;
        }
        return false;
    });

    //This will disable LP roster dues level edits to "Retired" from 6/1 - 7/10 of every year
    if ($('#ddlDuesLevel').length) {
        var currentDate = new Date();
        //month is 0-based so June is 5...
        switch (currentDate.getMonth()) {
            case 5: //June
                $('#ddlDuesLevel option[value="3"]').attr('disabled', 'disabled');
                $('#ddlDuesLevelNote').show();
                break;
            case 6: //July and before the 10th
                if (currentDate.getDate() < 10) {
                    $('#ddlDuesLevel option[value="3"]').attr('disabled', 'disabled');
                    $('#ddlDuesLevelNote').show();
                }
                else {
                    $('#ddlDuesLevelNote').hide();
                }
                break;
            default:
                $('#ddlDuesLevelNote').hide();
        }
    }


    //fix any Foundation accordions that Sitecore editor may break...
    $('ul.mb.accordion').each(function () {

        if ($(this)[0].hasAttribute('data-accordion') === false)
        {
            $(this).attr('data-accordion', '');
        }
        if ($(this)[0].hasAttribute('data-allow-all-closed') === false)
        {
            $(this).attr('data-allow-all-closed', 'true');
        }
        $('li.accordion-item').each(function () {
            if ($(this)[0].hasAttribute('data-accordion-item') === false) {
                $(this).attr('data-accordion-item', '');
            }
        });

        $('div.accordion-content').each(function () {
            if ($(this)[0].hasAttribute('data-tab-content') === false) {
                $(this).attr('data-tab-content', '');
            }
        });

        $(document).foundation();
        $(document).foundation('accordion', 'reflow');
    });

    $('#txtPrimaryPhoneNumber').blur(function () {
        var txtVal = $(this).val();
        if ($('#ckPrimaryIsMobile').is(
            ':checked')) {
            $('#txtMobilePhoneNumber').val(txtVal);
        }
    });

    $('#ckPrimaryIsMobile').change(function () {
        if ($(this).is(":checked")) {
            if ($('#txtPrimaryPhoneNumber').val().length > 0) {
                $('#txtMobilePhoneNumber').val($('#txtPrimaryPhoneNumber').val());
                $('#hdnMobilePhoneId').val($('#hdnPrimaryPhoneId').val());
                $("#txtMobilePhoneNumber").attr("disabled", "disabled");
            }
        }
        else {
            $('#txtMobilePhoneNumber').removeAttr('disabled');
            $('#hdnMobilePhoneId').val('');
            $('#txtMobilePhoneNumber').val('');
        }
    });

    CheckVcStatus();


    //HP VIDEO PLAYER MODAL
    $(document).on('closed.zf.reveal', '#modalHPVideo', function () {
        var vidFrame = $('iframe', $(this)),
            src = vidFrame.prop('src');
        vidFrame.prop('src', '').prop('src', src.replace('&autoplay=1', ''));
    });




    $('#divHPVideoLauncher').click(function (event) {
        var popup = new Foundation.Reveal($('#modalHPVideo'));
        popup.open();
    });

    if ($('#modalHPVideo .close-button').length &&
        $('#modalHPVideo .close-button')[0].hasAttribute('data-close') === false) {
        $('#modalHPVideo .close-button').attr('data-close', '');
    }

    $('.lmsEnrollButton').click(function () {
        //function getQueryStringParameter(name) {
        //    const urlParams = new URLSearchParams(window.location.search);
        //    return urlParams.get(name);
        //}
        //const mValue = getQueryStringParameter('m');
        //const currentHostUrl = window.location.origin;
        //const redirectUrl = currentHostUrl + '/members/lmsstartpage';
        //const finalUrl = mValue ? `${redirectUrl}?m=${encodeURIComponent(mValue)}` : redirectUrl;
        //window.location.href = finalUrl;
        $('#divLmsModal').foundation('open');
        $('#hfModalOpen').val("true");
    });

    
    $('.lmsCloseButton').click(function () {
        var currentUrl = window.location.href;
        window.location.href = currentUrl;
    });

    if ($.exists('#hfModalOpen')) {
        ReOpenModal();
    }


    //END
});
// END: jQuery functions on load

// BEGIN: support partial post-backs

try {
    var prm = Sys.WebForms.PageRequestManager.getInstance();

    if (prm) {
        prm.add_endRequest(function () {
            loadscript();
        });
    }
}
catch (err) {
    console.log("Variable \"prm\" is undefined due to formless layout.")
}


$(document).ready(loadscript);

function loadscript() {
    $('#txtPrimaryPhoneNumber').blur(function () {
        var txtVal = $(this).val();
        if ($('#ckPrimaryIsMobile').is(
            ':checked')) {
            $('#txtMobilePhoneNumber').val(txtVal);
        }
    });

    $('#ckPrimaryIsMobile').change(function () {
        var savedMobileNumber = $('#txtMobilePhoneNumber_Save').val().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        var savedMobilePhoneId = $('#hdnMobilePhoneId_Save').val();
        if ($(this).is(":checked")) {
            if ($('#txtPrimaryPhoneNumber').val().length > 0) {
                $('#txtMobilePhoneNumber').val($('#txtPrimaryPhoneNumber').val()).attr("disabled", "disabled");
                $('#hdnMobilePhoneId').val($('#hdnPrimaryPhoneId').val());
            }
        }
        else {
            savedMobileNumber = (savedMobileNumber === $('#txtPrimaryPhoneNumber').val() ? "" : savedMobileNumber);
            savedMobilePhoneId = (savedMobilePhoneId === $('#hdnPrimaryPhoneId').val() ? "" : savedMobilePhoneId);
            $('#txtMobilePhoneNumber').removeAttr('disabled').val(savedMobileNumber);
            $('#hdnMobilePhoneId').val(savedMobilePhoneId);
        }
    });

    PrimaryPhoneIsMobileCheck();
    $('.phone-number').mask("(000) 000-0000", { clearIfNotMatch: true, placeholder: "(000) 000-0000" });

    maskPostalCode();
}

// END: support partial post-backs

$(window).on("load", function () {

    if ($("body [data-aos]").length) {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-back',
            anchorPlacement: 'center-center',
            offset: 200,
        });
    }

    if ($('.counter-count').length) {
        RunCounter('.counter-count');
    }

});

function ReOpenModal() {
    var modalOpen = $('#hfModalOpen').val();
    if (modalOpen == "true") {
        $('#divLmsModal').foundation('open');
    }
    $('#hfModalOpen').val("true");
}

function PrimaryPhoneIsMobileCheck() {
    if ($("#ckPrimaryIsMobile").is(":checked")) {
        $("#txtMobilePhoneNumber").attr("disabled", "disabled"); 
    }  
}

function getWindowURL() {
    var url = "/";
    var regex = new RegExp("http[s]?://[^\/]*[\/]{0,1}");
    var results = regex.exec(window.location.href);
    var strurl = results[0] + "";
    return strurl;
}

function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return decodeURIComponent(qs[1]);
}

function updateProfile() {
    var blades = $('.update-forms .form-block .form-content').hide();

    $('.update-forms .form-block .update-profile').click(function (e) {

        var selectedItem = $(this).closest('.form-block');
        selectedItem.toggleClass('active');

        $('.form-block').not(selectedItem).each(function () {
            $(this).removeClass('active');
        });

        blades.slideUp();
        $(this).parent().next().stop().slideToggle();
        return false;

        e.preventDefault();
    });

    //http://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
    $('.mask-zip input.scfSingleLineTextBox').addClass("zip-mask");

    $('.phone-number, .scfTelephoneTextBox').each(function (i) {
            if ($(this).val() == "0") {
                $(this).val('');
            }
            $(this).mask("(000) 000-0000", { clearIfNotMatch: true, placeholder: "(000) 000-0000" });
        });

    maskPostalCode();

    $('.cardnumber-mask').mask("0000000000000999");
    $('.cvv-mask').mask("0009", { clearIfNotMatch: true });
    $('.memberID-mask').mask("0000000");
}

function maskPostalCode() {

    $('.zip-mask').mask("00000-0000", { placeholder: "_____-____" });

    $('.zip-mask').blur(function () {
        var firstFive = $(this).val().substr(0, 5);
        var lastFour = $(this).val().substr(6, 4);
        if (firstFive.length != 5) {
            $(this).val("");
            return false;
        }
        if (lastFour != "") {
            if (lastFour.length != 4) {
                $(this).val("");
            }
        }
    });
}

function beneficiary() {
    $('.show-contact').on('click', function (e) {
        $(this).next('.hidden-list').slideToggle();
        if ($(this).text() == "+ Show More") {
            $(this).text("- Show Less");
        } else {
            $(this).text("+ Show More");
        }
        e.preventDefault();
    });
}

function checkMPP() {
    var chk = $("#chkAgreeMpp");
    var btn = $("#btnActivate");
    if (chk.is(':checked')) {
        btn.removeAttr('disabled'); //enable input
    } else {
        btn.attr('disabled', true); //disable input
    }
}

function GetParameterValues(param) {
    var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}

function SetPubCart() {
    var el = document.getElementById('pubCart');
    if (el != null) {
        if ($(window).width() > 767) {
            $('#pubCart').css('position', 'absolute');
            $('#pubCart').css('margin', '0');
            $('#pubCart').css('overflow', 'hidden');

            $(window).scroll(function () {
                var topVal = ($(window).scrollTop() > 50) ? $(window).scrollTop() - 200 : $(window).scrollTop();
                $('#pubCart').css('top', topVal);
            });
        }
        else {

            $('#pubCart').css('position', 'relative');
            $('#pubCart').css('overflow', 'visible');
            $(window).scroll(function () {
                $('#pubCart').css('top', '');
            });
        }
    }
}

function RunCounter(element) {
    $(element).each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString('en'));
            }
        });
    });
}

function IsDate(dtValue) {
    var strArray, year, mon, day, xdate;
    var check = false;
    var date_regex = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);
    if (date_regex.test(dtValue)) {
        strArray = dtValue.split("/");
        mon = parseInt(strArray[0], 10);
        day = parseInt(strArray[1], 10);
        year = parseInt(strArray[2], 10);
        xdate = new Date(Date.UTC(year, mon - 1, day));
        if ((xdate.getUTCFullYear() === year) && (xdate.getUTCMonth() === mon - 1) && (xdate.getUTCDate() === day)) {
            check = true;
        }
    }
    return check;
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}

function IsNysutId(code) {
    var regex = /^[0-9]{7}/;
    return regex.test(code);

}

function CheckVcStatus() {
    var vcCookie = getCookie("vcEligible");
    if (vcCookie != null) {
        var isVc = (vcCookie == "True");
        if (!isVc) {
            $(".secnav-item > .secnav-link:contains('Administer VOTE-COPE')").parent().hide();
            $("#ddlSectionNav > option:contains('Administer VOTE-COPE')").hide();
        }
    }
}




function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}




