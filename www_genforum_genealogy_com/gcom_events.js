function goToPage(pageNumber, maxPage) {
    pageNumber = parseInt(pageNumber, 10);
    maxPage = parseInt(maxPage, 10);
    if (pageNumber > 0 && pageNumber <= maxPage) {
        var goToUrl = originalUrl = window.location.href;
        if ((goToUrl.search(/\?/)) !== -1) {
            if ((goToUrl.search(/&page=/)) !== -1) {
                goToUrl = goToUrl.substring(0, goToUrl.indexOf("&page="));
            }
            if (pageNumber !== 1) {
                goToUrl = goToUrl + "&page=" + pageNumber;
            }
        } else {
            if ((goToUrl.search(/pg-/)) !== -1) {
                goToUrl = goToUrl.substring(0, goToUrl.indexOf("pg-"));
            }
            if (pageNumber !== 1) {
                goToUrl = goToUrl + "pg-" + pageNumber + "/";
            }
        }
        goToUrl === originalUrl ? $("#pageSkip").val("") : window.location.replace(goToUrl);
    } else {
        $("#pageSkip").val("");
        alert("Please, enter the correct page.");
    }
}

function cleanSortUrl(url) {
    return url.search(/&sort=/) === -1 ? url : url.substring(0, url.indexOf("&sort="));
}

$(document).ready(function () {
    $("#goBtn").on("click", function() {
        var pageNumber = $("#pageSkip").val(),
            maxPage = $(this).parent().find("a").last().text();
            goToPage(pageNumber, maxPage);
    });
    $("#pageSkip").on("keypress", function(e) {
        if (e.keyCode === 13) {
            var pageNumber = $(this).val(),
                maxPage = $(this).parent().find("a").last().text();
                goToPage(pageNumber, maxPage);
        }
    });
    $(".single-dropdown select").on("change", function () {
        var goToUrl = originalUrl = window.location.href;
        $("#forum").length !== 0 ? goToUrl = $(this).find("option:selected").val() : goToUrl = cleanSortUrl(window.location.href) + "&sort=" + $(this).find("option:selected").val();
        goToUrl === originalUrl ? alert("You're on this page") : window.location.replace(goToUrl);
    });
});