$(function () {
    if (CycleAllbool == true) {
        CycleAll();
    }
    else {
        GetOne();
    }
});

function GetOne() {
    $.ajax({
        type: 'GET',
        async: true,
        url: getServiceUrl('GetOneRandom'),
        dataType: 'json',
        data: {},
        cache: true,
        contentType: "application/json; charset=utf-8",
        dataFilter: function (data) { return data; },
        success: function (data) {

            var message = (data.message).replace(/'/g, "\\'");
            var event = "";
            if (typeof (ga) !== 'undefined') {
                event = "ga('send', 'event', 'Ads', 'Clicked', '" + message + "');";
            }
            else if (typeof (_gaq) !== 'undefined') {
                event = "_gaq.push(['_trackEvent', 'Ads', 'Clicked', '" + message + "']);";
            }
            var items = [];
            items.push('<a href="' + data.messageurl + '" onMouseDown="' + event + '">' + data.message + '</a>');

            $('<span/>', {
                'id': 'InfoBarMessage',
                'class': 'InfoBarMessageList',
                html: items.join('')
            }).appendTo('#InfoBarContent');
        },
        complete: function () {

        },
        error: function (xhr, status, error) {
            AjaxErrorHandler(getServiceUrl('GetOneRandoms'), xhr, error);
        }
    });
}


function CycleAll() {
    $.ajax({
        type: 'GET',
        async: true,
        url: getServiceUrl('GetAll'),
        dataType: 'json',
        data: {},
        cache: true,
        contentType: "application/json; charset=utf-8",
        dataFilter: function (data) { return data; },
        success: function (data) {
            var items = [];
            $.each(data, function (messageId, group) {
                if (group.messageurl == '') {
                    items.push('<div class="InfoBarMessageContainer"><span class="InfoBarMessage">' + group.message + '</span></div>');
                }
                else {
                    items.push('<div class="InfoBarMessageContainer"><span class="InfoBarMessage"><a href="' + group.messageurl + '">' + group.message + '</a><span></div>');
                }
            });

            $('<div/>', {
                'id': 'InfoBarMessage',
                'class': 'cycle-slideshow InfoBarMessageList',
                'data-cycle-slides': '> div',
                html: items.join('')
            }).appendTo('#InfoBarContent');
        },
        complete: function () {
            $('.cycle-slideshow').cycle();
        },
        error: function (xhr, status, error) {
            AjaxErrorHandler(getServiceUrl('GetAll'), xhr, error);
        }
    });
}


function getServiceUrl(endPoint) {
    return InfoBarWebClientServiceRoot + endPoint;
}

function isDevelopmentEnvironment() {
    if (window.location.href.search("localhost") > 0) {
        return true;
    }
    return false;
}

function AjaxErrorHandler(websvc, jqXHR, exception) {
    var Error = {
        "Message": "Web Service: " + websvc + " " + formatErrorMessageUser(jqXHR, exception)
    };

    $.ajax({
        type: 'POST',
        async: true,
        url: getServiceUrl('WebServiceErrorHandler'),
        data: JSON.stringify(Error),
        cache: false,
        dataType: 'json',
        contentType: "application/json",
        dataFilter: function (data) {
            return data;
        },
        success: function (data) {

        },
        complete: function () {

        },
        error: function () {

        }
    });
}

//to be used to return the error message to the user
function formatErrorMessageUser(jqXHR, exception) {

    if (jqXHR.status === 0) {
        return ('Not connected.<br/>Please verify your network connection.');
    } else if (jqXHR.status == 404) {
        return ('The requested page not found. [404]');
    } else if (jqXHR.status == 500) {
        return ('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        return ('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        return ('Time out error.');
    } else if (exception === 'abort') {
        return ('Ajax request aborted.');
    } else {
        return ('Uncaught Error.<br/>' + jqXHR.responseText);
    }
}