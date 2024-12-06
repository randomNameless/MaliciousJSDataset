$(document).ready(function () {

    $('#headerSearch').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);

        if (keycode == '13') headerSearchInput();
    });


    $("#header-go-search").on("click", () => headerSearchInput())

//    CCPA | EULA Terms
    if (getCookie("doNotUseMarketingRetarget") === null) $(".eula-terms").append(policyContent())

    $("#accept-btn").click(function () {
        if (getCookie("doNotUseMarketingRetarget") === null) {
            setCookie("doNotUseMarketingRetarget", "false", 365, window.location.pathname)
            $(".p-policy-container").remove();
        }
    })
})


function headerSearchInput() {
    window.location.href = "/s/search?q=" + $('#headerSearch').val();
    //Clear input field
    $("#headerSearch").val("");
}


function policyContent() {
    return `
    <div class="p-policy-container">
        <div class="p-policy-content">
                <p>We use cookies to personalize & enhance your experience. Learn more in our <a
                        href="https://www.mylife.com/privacy-policy"
                        rel="nofollow">Privacy
                    Policy</a>. By using our site, you agree to our use of cookies.</p>
                <button type="button" id="accept-btn">Accept</button>
            </div>
    </div>
`
}