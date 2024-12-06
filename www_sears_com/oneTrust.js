(function () {
    //console.log('inside One Trust ');
    let name = "isBot=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    let isBotFlag = false;
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            isBotFlag = c.substring(name.length, c.length);
        }
    }

    //console.log('One Trust - BOT FLAG ', isBotFlag);

    if (!isBotFlag) {
        //console.log('Loading One Trust',window.location.hostname.toLowerCase());

        var currentHost = window.location.hostname.toLowerCase();
        var clients = {
          "sears": "9c8dc05c-bde6-4a24-86cb-d2ed0014413a",
          "searspr": "2c226a49-385a-41de-927a-5963b700dbb4",
          "kmart": "0194741e-9301-4993-99ac-11bea7e5884a",
          "kenmore": "556da980-2d0c-4b08-b9c7-06f2cd6cc75f"
        }
        var clientValue = clients.sears; // default set as sears prod so it will never  set.
        // set client value to correct client if different then sears
        if (/kmart/.test(currentHost)) {
          clientValue = clients.kmart;
        } else if (/searspr/.test(currentHost)) {
            clientValue = clients.searspr;
        } else if (/kenmore/.test(currentHost)) {
          clientValue = clients.kenmore;
        } 
        // ovewrite client value if local, qa and beta
        if (/igs.|localhost|beta-rd./.test(currentHost)){
           clientValue = clientValue + '-test';
        }

        //console.log('Loading One Trust',clientValue);

        document.write(
            '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script='+ clientValue ,'></script>'
        );
        document.write(
            '<script type="text/javascript">function OptanonWrapper() { }</script>'
        );
        
        /*if (
            document.URL.indexOf("igs.sears.com") > -1 ||
            document.URL.indexOf("localhost:4200") > -1 || document.URL.indexOf("beta-rd.sears.com") > -1
        ) {
            document.write(
                '<script async src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="9c8dc05c-bde6-4a24-86cb-d2ed0014413a-test" ></script>'
            );
            document.write(
                '<script async type="text/javascript">function OptanonWrapper() { }</script>'
            );
        } else if (
            document.URL.indexOf("igs.kmart.com") > -1 ||
            document.URL.indexOf("localhost:3000") > -1 || document.URL.indexOf("beta-rd.kmart.com") > -1
        ) {
            document.write(
                '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="0194741e-9301-4993-99ac-11bea7e5884a-test" ></script>'
            );
            document.write(
                '<script type="text/javascript">function OptanonWrapper() { }</script>'
            );

               
        } else if (
            document.URL.indexOf("igs.kenmore.com") > -1 ||
            document.URL.indexOf("localhost:3200") > -1 || document.URL.indexOf("beta-rd.kenmore.com") > -1
        ) {
            document.write('<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="556da980-2d0c-4b08-b9c7-06f2cd6cc75f-test" ><\/script>');
            document.write('<script type="text/javascript">function OptanonWrapper() { }<\/script>') 

        } else if (
            document.URL.indexOf("igs.searspr.com") > -1 ||
            document.URL.indexOf("localhost:5200") > -1 || document.URL.indexOf("beta-rd.searspr.com") > -1
        ) {
            document.write('<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="2c226a49-385a-41de-927a-5963b700dbb4-test" ><\/script>');
            document.write('<script type="text/javascript">function OptanonWrapper() { }<\/script>') 

        }else if (document.URL.indexOf("www.sears.com") > -1 || (document.URL.indexOf("www-rd.sears.com")) > -1 || document.URL.indexOf("int.www.sears.com") > -1 ) {
            document.write(
                '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="9c8dc05c-bde6-4a24-86cb-d2ed0014413a" ></script>'
            );
            document.write(
                '<script type="text/javascript">function OptanonWrapper() { }</script>'
            );
        } else if (
            document.URL.indexOf("www-rd.kmart.com") > -1 ||
            document.URL.indexOf("www.kmart.com") > -1 || document.URL.indexOf("int.www.kmart.com") > -1  
        ) {
            document.write(
                '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="0194741e-9301-4993-99ac-11bea7e5884a" ></script>'
            );
            document.write(
                '<script type="text/javascript">function OptanonWrapper() { }</script>'
            );
        }else if (
            document.URL.indexOf("www-rd.kenmore.com") > -1 ||
            document.URL.indexOf("www.kenmore.com") > -1 ||  document.URL.indexOf("int.www.kenmore.com") > -1 
        ) {
            document.write(
                '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="556da980-2d0c-4b08-b9c7-06f2cd6cc75f" ></script>'
            );
            document.write(
                '<script type="text/javascript">function OptanonWrapper() { }</script>'
            );
        }else if (
            document.URL.indexOf("www-rd.searspr.com") > -1 ||
            document.URL.indexOf("www.searspr.com") > -1 || document.URL.indexOf("www-rd.sears.com.pr") > -1 ||
            document.URL.indexOf("www.sears.com.pr") > -1 || document.URL.indexOf("int.www.searspr.com") > -1  
        ) {
            document.write(
                '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="2c226a49-385a-41de-927a-5963b700dbb4" ></script>'
            );
            document.write(
                '<script type="text/javascript">function OptanonWrapper() { }</script>'
            );
        }*/
    }
})();
