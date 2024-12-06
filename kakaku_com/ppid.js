(function () {
    var allowDomain = "kakaku.com"
    var apiDomain = "kakaku.com"

    if (document.domain.indexOf(allowDomain) === -1) {
        return;
    }

    var hasAdManagerPPID = function() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var kv = cookie.split("=");
            if (kv.length !== 2) {
                continue;
            }

            if (kv[0] === "gam_ppid") {
                return true;
            }
        }

        return false;
    }

    var hasCriteoOptout = function() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var kv = cookie.split("=");
            if (kv.length !== 2) {
                continue;
            }

            if (kv[0] === "criteo_rmp_optout") {
                return true;
            }
        }

        return false;
    }

    var initializePPID = function() {
        var xhr = new XMLHttpRequest();
        var url = "https://" + apiDomain + "/ad/adadmin/ppid/";
        xhr.open("POST", url, true);
        
        // ドメインを跨いだajaxリクエストでcookieを発行させるための設定
        xhr.withCredentials = true;

        xhr.onerror = function () {
            console.error("[ppid.js] ppid set error");
        }
        xhr.send();
    }

    if (!hasAdManagerPPID() || hasCriteoOptout()) {
        initializePPID();
    }
})();