(function () {
    var domain = 'https://sysmon.kakaku.com';
    var errorTracker = function (error, fileName, lineNumber) {
        var errorInfo = {
            'errorMsg': error.message,
            'fileName': error.filename,
            'lineNumber': error.lineno
        };
        var errSendUrl = (domain + '/err/js/?url=' + encodeURIComponent(location.href) + '&err=' + encodeURIComponent(JSON.stringify(errorInfo, null, 0))).substr(0, 2048);
        new Image().src = errSendUrl;
    };

    if (typeof window.addEventListener === "undefined") {
        window.attachEvent('onerror', errorTracker);
    } else {
        window.addEventListener('error', errorTracker);
    }
})();
