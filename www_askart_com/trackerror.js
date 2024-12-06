// Track JS errors
window.onerror = function (msg, url, lineNo, columnNo, error) {
    var fileurl = window.location.href;  
    $.ajax({
        url: '/ErrorReporter.ashx',
        data: { Message: msg, FileURL: fileurl.toString(), URL: url, LineNumber: lineNo, ColumnNumber: columnNo, Error: error },
        success: function (data) { return (data); }
    });
    return false;
};