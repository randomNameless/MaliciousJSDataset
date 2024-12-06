(function () {
    var ddOriginalReferrer = document.referrer;
    var ddReferrerHashes = [
        'D013AA612AB2224D03B2318D0F5B19',
        'FD2A67F1C09ED58A5B136A11EDDA8B',
        '77DC0FFBAA0B77570F6B414F8E5BDB',
        '5D768A5D53EF4D2F5899708C392EAC',
        '13C44BAB4C9D728BBD66E2A9F0233C',
        '60D428DD4BC75DF55D205B3DBE4AFF',
        '62DAE82FA38B79FF8E461F5921830E'
    ];
    var ddFpHashes = ['C992DCAFEE25FA95C6492C61EB3328'];
    var popUpAllowedClientKeys = [
        'F45F521D9622089B5E33C18031FB8E',
        '10D43DA6B79A5089E1A7846864D6BD',
        '34C213C44735CBC8D9C08B65110F96',
    ];
    try {
        if (!ddOriginalReferrer && dd.rr) {
            ddOriginalReferrer = decodeURIComponent(dd.rr);
        }
    } catch (_) {
        /* Silent failure if decodeURIComponent throws */
    }

    /**
     * Saves actual referrer to session storage
     * @return {void}
     */
    function saveReferrer() {
        try {
            window.sessionStorage.setItem('ddOriginalReferrer', ddOriginalReferrer);
        } catch (error) {
            // Silently fails
        }
    }
    saveReferrer();

    var noScriptMessageElement = document.getElementById('cmsg');
    var noScriptMessageText = noScriptMessageElement ? noScriptMessageElement.innerText : '';
    var getRefererQueryParamString = function () {
        try {
            var prefix = '&referer=';
            if (window.location !== window.parent.location) {
                // Nested Iframe
                return prefix + encodeURIComponent(window.location.href);
            }
            return prefix + encodeURIComponent(window.parent.location.href);
        } catch (e) {
            return '';
        }
    };

    var isSafari = window.navigator
        ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        : false;
    var stretchHeightRule = isSafari ? 'height: -webkit-fill-available;' : '';

    var getDDCookie = function (value) {
        var r = new RegExp('datadome=([^;]+)');
        var v = r.exec(value);
        if (v != null) {
            try {
                return decodeURIComponent(v[1]);
            } catch (e) {
                return v[1];
            }
        }
        return null;
    };

    function getHostname(url) {
        var scheme = 'https://';

        if (typeof url !== 'string' || url.indexOf(scheme) !== 0) {
            return '';
        }

        return url.replace(scheme, '').split('/')[0];
    }

    // Check if a URL is coming from a DataDome origin.
    function isDatadomeOrigin(url) {
        var ddHosts = ['.datado.me', '.captcha-delivery.com'];
        var hostname = getHostname(url);

        if (!hostname) {
            return false;
        }

        for (var i = 0; i < ddHosts.length; i++) {
            var ddHost = ddHosts[i];
            if (hostname.indexOf(ddHost, hostname.length - ddHost.length) !== -1) {
                return true;
            }
        }

        return false;
    }

    function shouldCheckFpOrigin(hash) {
        return ddFpHashes.indexOf(hash) > -1;
    }

    function isFpOrigin(url) {
        var hostname = getHostname(url);
        var currentHostname = getHostname(window.location.href);

        if (!hostname || !currentHostname) {
            return false;
        }

        var hostnameParts = hostname.split('.').reverse();
        var currentHostnameParts = currentHostname.split('.').reverse();
        var matchCount = 0;

        for (var i = 0; i < currentHostnameParts.length; ++i) {
            if (hostnameParts[i] === currentHostnameParts[i]) {
                ++matchCount;
            } else {
                break;
            }
        }

        return matchCount >= 2 && hostnameParts[matchCount] === 'ddc';
    }

    function isTrustedOrigin(url) {
        return isDatadomeOrigin(url) || (shouldCheckFpOrigin(dd.hsh) && isFpOrigin(url));
    }

    function generateIframe(dd, noScriptMessageText, volatile, stretchHeightRule) {
        var targetOrigin = 'https://' + dd.host.replace(new RegExp('&#x2d;', 'g'), '-');
        if (!isTrustedOrigin(targetOrigin)) {
            console.error(
                '%c Invalid CAPTCHA origin: ' + targetOrigin,
                'background: red; color: #fff'
            );
            return;
        }
        var isIframeLoaded = false;
        var maxTimeoutMs = 5000;

        function iframeOnload() {
            isIframeLoaded = true;
            var noIframeElem = document.getElementById('noiframe');
            if (noIframeElem) {
                noIframeElem.parentNode.removeChild(noIframeElem);
            }
        }

        if (
            typeof navigator.userAgent === 'string' &&
            navigator.userAgent.indexOf('Firefox') > -1
        ) {
            var initialTime = new Date().getTime();
            setTimeout(function () {
                if (!isIframeLoaded && new Date().getTime() - initialTime > maxTimeoutMs) {
                    document.body.innerHTML =
                        '<div id="noiframe">' +
                        noScriptMessageText +
                        '</div>' +
                        document.body.innerHTML;
                }
            }, maxTimeoutMs);
        }

        var iframeSrc =
            'https://' +
            dd.host +
            '/captcha/?initialCid=' +
            encodeURIComponent(dd.cid) +
            '&hash=' +
            encodeURIComponent(dd.hsh) +
            '&cid=' +
            encodeURIComponent(
                volatile ? window.ddcid : dd.cookie || getDDCookie(document.cookie)
            ) +
            '&t=' +
            encodeURIComponent(dd.t) +
            getRefererQueryParamString() +
            '&s=' +
            dd.s +
            '&e=' +
            dd.e +
            '&dm=cd' +
            (dd.cp && dd.cp.name && dd.cp.value
                ? '&' + encodeURIComponent(dd.cp.name) + '=' + encodeURIComponent(dd.cp.value)
                : '');

        var iframeSandbox =
            'allow-scripts allow-same-origin allow-forms' +
            (popUpAllowedClientKeys.indexOf(dd.hsh) > -1 ? ' allow-popups' : '');

        var iframeHTML =
            '<iframe src="' +
            iframeSrc +
            '" sandbox="' +
            iframeSandbox +
            '" width="100%" height="100%" style="height:100vh;' +
            stretchHeightRule +
            '" FRAMEBORDER="0" border="0" scrolling="yes"' +
            '></iframe>';

        return { iframeHTML: iframeHTML, iframeOnload: iframeOnload };
    }
    var volatile = document.cookie === '' && window.ddcid != null;

    var iframeResult = generateIframe(dd, noScriptMessageText, volatile, stretchHeightRule);
    var iframeWrapper = document.createElement('div');
    iframeWrapper.innerHTML = iframeResult.iframeHTML;
    var iframeElem = iframeWrapper.firstChild;

    if (iframeElem) {
        iframeElem.addEventListener('load', iframeResult.iframeOnload);
    }

    document.body.appendChild(iframeElem);

    if (noScriptMessageElement) {
        noScriptMessageElement.parentNode.removeChild(noScriptMessageElement);
    }

    var canGoBack =
        window.history && typeof window.history.back === 'function' && window.history.length > 1;
    // `ddShouldGoBack` is an option that can be set by a code snippet in a customer's page customization.
    var shouldGoBack = (dd.r && dd.r === 'b' && canGoBack) || (window.ddShouldGoBack && canGoBack);

    var viewPortTag = document.createElement('meta');
    viewPortTag.name = 'viewport';
    viewPortTag.content = 'width=device-width, initial-scale=1.0';

    var headTag = document.querySelector('head');
    if (headTag != null) {
        headTag.appendChild(viewPortTag);
    }

    var onMessageCallback = function (event) {
        function addSearchParam(url, name, value) {
            if (typeof window.URL === 'function') {
                var extendedUrl = new URL(url);
                extendedUrl.searchParams.set(name, value);

                return extendedUrl.href;
            }

            return url;
        }

        if (event.isTrusted && isTrustedOrigin(event.origin)) {
            if (typeof event.data !== 'string') {
                return false;
            }

            try {
                var data = JSON.parse(event.data);

                if (data.eventType == 'load') {
                    return false;
                }

                if (data.cookie) {
                    document.cookie = data.cookie;
                }

                if (data.url) {
                    setTimeout(function () {
                        if (shouldGoBack) {
                            if (volatile && document.referrer.length > 0) {
                                window.location = addSearchParam(
                                    document.referrer,
                                    'ddcid',
                                    getDDCookie(data.cookie)
                                );
                            } else {
                                history.back();
                            }
                        } else {
                            if (volatile && typeof window.URL === 'function') {
                                window.location = addSearchParam(
                                    window.location.href,
                                    'ddcid',
                                    getDDCookie(data.cookie)
                                );
                            } else if (ddReferrerHashes.indexOf(dd.hsh) !== -1) {
                                // Due to referrer loss on post challenge resolution,
                                // instead of reloading the page we load the current URL
                                // with the referrer appended as a query parameter.
                                // This change is scoped to customers whose client side keys are found in ddReferrerHashes
                                var currentBaseUrl =
                                    window.location.origin + window.location.pathname;
                                var referrerBaseUrl = document.referrer.split('?')[0].split('#')[0];

                                if (referrerBaseUrl !== currentBaseUrl) {
                                    window.location.href = addSearchParam(
                                        window.location.href,
                                        'dd_referrer',
                                        ddOriginalReferrer
                                    );
                                } else {
                                    window.location.reload();
                                }
                            } else {
                                window.location.reload();
                            }
                        }
                    }, 500);
                }
            } catch (_) {
                /* Silent failure if JSON.parse is used on invalid data */
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('message', onMessageCallback, false);
    } else if (window.attachEvent) {
        window.attachEvent('onmessage', onMessageCallback);
    }
})();
