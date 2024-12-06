(function ($) {
    'use strict';

    function GAHelper() {}

    GAHelper.prototype.LABEL_OPERATION_SYSTEM = function () {
        var deprecatedPlatform = window.navigator.platform;
        var platform = window.navigator.userAgentData && window.navigator.userAgentData.platform;

        return (platform || deprecatedPlatform);
    };
    GAHelper.prototype.LABEL_AUTH_STATUS = function () {
        return (window.is_auth_user()) ? 1 : 0;
    };
    GAHelper.prototype.LABEL_UVT_STATUS = function () {
        return ($.cookie(VETERAN_COOKIE_NAME)) ? 1 : 0;
    };
    GAHelper.prototype.LABEL_PAGE_URL = function () {
        return window.location.href;
    };

    GAHelper.prototype.combineLabels = function (labels, separator) {
        separator = separator || ' | ';
        var resultLabels = [];

        for (var i = 0; i < labels.length; i++) {
            resultLabels.push(labels[i]());
        }

        return resultLabels.join(separator);
    };

    window.GAHelper = new GAHelper();
})(jQuery);