/**
 * Code provided by PubExchange and modified by POPSUGAR to make the module_name a data-item
 */
(function(d, s, id) {
    var js, pjs = d.getElementsByTagName(s)[0];
    var pub_code = document.body.getAttribute('data-sugar-pubexchange-name');

    if (d.getElementById(id) || !pub_code) {
        return;
    }

    js = d.createElement(s);
    js.id = id;
    js.async = true;

    js.src = '//cdn.pubexchange.com/discover/' + pub_code;

    pjs.parentNode.insertBefore(js, pjs);
}(document, 'script', 'pubexchange-jssdk'));
