
    function multiPSUsearch() {
        var searchstring = window.document.searchengine.search.value;
        if (window.document.searchengine.engine.selectedIndex == "0") {
            window.document.coe_google.q.value = searchstring;
            window.document.coe_google.action = "https://www.google.com/search";
            window.document.coe_google.target = "_blank";
            window.document.coe_google.submit();
        }
        if (window.document.searchengine.engine.selectedIndex == "1") {
            window.document.psugoogle.q.value = searchstring;
            window.document.psugoogle.action = "https://www.google.com/search";
            window.document.psugoogle.target = "_blank";
            window.document.psugoogle.submit();
        }
        if (window.document.searchengine.engine.selectedIndex == "2") {
            str = searchstring.replace(/ /, '*');
            window.document.psupeople.cn.value = str;
            window.document.psupeople.sn.value = str;
            window.document.psupeople.action = "https://www.psu.edu/cgi-bin/ldap/ldap_query.cgi";
            window.document.psupeople.target = "_blank";
            window.document.psupeople.submit()
        }
        if (window.document.searchengine.engine.selectedIndex == "3") {
            str = searchstring.replace(/ /, '*');
            window.document.psudepts.dept_name.value = str;
            window.document.psudepts.action = "https://www.psu.edu/cgi-bin/ldap/dept_query.cgi";
            window.document.psudepts.target = "_blank";
            window.document.psudepts.submit()
        }
        if (window.document.searchengine.engine.selectedIndex == "4") {
            window.document.google.q.value = searchstring;
            window.document.google.action = "https://www.google.com/search";
            window.document.google.ie.value = "UTF-8";
            window.document.google.oe.value = "UTF-8";
            window.document.google.target = "_blank";
            window.document.google.submit()
        }
    }
    // ]]>
