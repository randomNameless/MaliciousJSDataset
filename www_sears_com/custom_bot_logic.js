var currentHost = window.location.hostname.toLowerCase();

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


if(!(/redemption/.test(currentHost) && !isBotFlag) ){
    document.write('<script src="https://www.youtube.com/iframe_api" defer ><\/script>');
}

if(!(/kenmore|redemption/.test(currentHost) && !isBotFlag)) {
    document.write('<script async src="https://cdn.quadpay.com/v1/quadpay.js?tagname=quadpay-widget" defer ><\/script>');
}
