$(function () {
    var activate, baseUrl, components, i, idx, j, path, ref;
    baseUrl = $("meta[name='baseUrl']").attr("content");
    idx = window.location.href.search(baseUrl);
    if (idx) {
        path = window.location.href.substr(idx + baseUrl.length);
    } else {
        path = window.location.pathname;
    }
    activate = function (currentPage) {
        if (currentPage) {
            return $(".navbar-nav a[href$='" + currentPage + "/']")
                .parent()
                .addClass("active");
        }
    };
    components = path.match(/([^\/]+)/g);
    if (components != null) {
        for (
            i = j = 1, ref = components.length;
            1 <= ref ? j <= ref : j >= ref;
            i = 1 <= ref ? ++j : --j
        ) {
            activate(components.slice(0, i).join("/"));
        }
    }

    $(".navbar-toggle").on("click", function(){
        $("#navbar-top-collapse-1").toggleClass("show");
    });

    $("#BibTeX-cite").on("focus, click", function () {
        return this.select();
    });
    return $("#cite-link").on("click", function () {
        return $("#cite-box").toggle();
    });
});
