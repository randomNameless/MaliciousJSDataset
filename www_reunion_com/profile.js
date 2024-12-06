// State
let stateProfile = {
    profileState: {
        revieweeEpid: $("#epid").val(),
        revieweeUsernum: $("#usernum").val(),
        reviewId: 1,
        signedOutRevReq: $("#signedOutRevReq").val(),
        hide: false,
    },
    registerState: {
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
        age: "",
        whyReg4: ""
    },
    message: {
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
        age: "",
        simpleMessage: "",
    },
    modal: {
        sendMessage: false,
        review: false,
        lockUnlock: false
    },
    defaultRegisterState: {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: "",
        zip: $("#zip").val(),
        age: $("#age").val(),
    }
}


// !! Scroll events
const navbar = $("#nav");
const {top: navbarOffsetTop} = navbar.offset();
const sections = $(".spy");
const navLink = $(".tab li");
const header = $("#siteheader");
let addTriggerHeight = $(navbar).outerHeight() + $(header).outerHeight();

$(document).ready(function () {
    // Go to section
    $(navLink).click(function () {
        const dataAttr = this.dataset.section
        let offsetPosTop = 0;
        sections.each(function (_, section) {
            const sectionId = section.getAttribute("id")
            if (dataAttr === sectionId) offsetPosTop = $(section).offset().top;
        })
        $(window).scrollTop(offsetPosTop - (addTriggerHeight - 2))
    })

    //Fixed destroy url img
    $("img").each(function () {
        // if image already loaded, we can check it's height now
        if (this.complete) {
            checkImg(this);
        } else {
            // if not loaded yet, then set load and error handlers
            $(this).on('load', function () {
                checkImg(this);
            }).on('error', function () {
                // img did not load correctly
                // set new .src here
                this.src = "/static/img/pp.gif";
            });

        }
    });

    // Open send message modal
    $("#message-btn").click(function () {
        window.location.href = $("#mylifeProfileUrl").val() + "?actionOnload=showSendMessageModal";
        // stateProfile = {
        //     ...stateProfile, modal: {
        //         ...stateProfile.modal, sendMessage: true
        //     }
        // }
        // $("body").append(sendMessageModalContent());
        // inputFieldValidation();
        // sendMessageFormBtnValidation();
    })

//    Close modal
    $("#registrationModal button.close-btn").click(function () {
        $("#registrationModal").removeClass("show-modal");
        stateProfile = {
            ...stateProfile,
            modal: {
                ...stateProfile.modal,
                sendMessage: false
            }
        }
    });

//    Submit registration
    $("#registrationModal button#registerBtn").click(function (e) {
        e.preventDefault();

        let postData = "/json/matchingReg?" +
            "fromPub=Y" +//nocahnge
            "&whyReg=" + stateProfile.registerState.whyReg4 + //get in hidden field
            "&ab_cid=" + //nocahnge
            "&skipToRedirect=N" + //nocahnge
            "&firstName=" + stateProfile.registerState.firstName + //get in field
            "&lastName=" + stateProfile.registerState.lastName + //get in field
            "&age=" + stateProfile.registerState.age + //get in hidden field
            "&email=" + stateProfile.registerState.email + //get in field
            "&gender=" + undefined + //?
            "&birthMonth=1" + //nocahnge
            "&birthDay=1" + //nocahnge
            "&zip=" + stateProfile.registerState.zip + //get in field
            "&birthYear=" + (new Date().getUTCFullYear() - stateProfile.registerState.age) +
            "&message=" + $("#registrationModal input[name='body']").val(); //get in hidden field

        console.log(postData)

        fetch(postData, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (typeof result.usernum != "undefined") {
                    // if (typeof enableVWOOnPublicProfile !== "undefined") {
                    //     let vwoData = _getVWOCampaignData();
                    //     // console.log("vwoData",vwoData,vwoData.length);
                    //     if (vwoData.length !== 0) {
                    //         let objParam = {
                    //             "usernum": result.usernum,
                    //             "bundleId": '',  //bundle id if available
                    //             "mobile": isMobileBrowser(),     //is this a mobile web browser?
                    //             "pageName": "Profile page Registration Modal",  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
                    //             "pageUri": location.toString(), // URI from the browser location bar
                    //             "testName": (typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""),  //test name from VWO
                    //             "testPlatform": "VWO",  //hardcode to VWO for now
                    //             "variationName": (typeof vwoData[0][1].n !== "undefined" && typeof vwoData[0][1].c !== "undefined" ? vwoData[0][1].c + "-" + vwoData[0][1].n : "") // is this Variation or Control
                    //         }
                    //         let callTracking = _trackVWO(objParam);
                    //     }
                    // }
                    // // console.log('result',result.usernum);
                    // document.querySelector("#mini-reg-form input[name=usernum]").value = result.usernum;

                    $("#mini-reg-form input[name='usernum']").val(result.usernum)
                }
                // if (stateProfile.registerState.whyReg4 == "idp_profile_locking") {
                //     window.location = "/idp-match-process.view?bypassMatching=true&redirectURL=/site/prr-purchase.view%3Fwhysub%3D" + stateProfile.registerState.whyReg4;
                // } else if (isItMePMKT) {
                //     window.location = "/"
                // } else if (whyreg == "PS_PMKT" && this.context.registrationData.paidMarketingCookie == "true") {
                //     location.reload();
                // } else if (isItMe) {
                //     window.location = "/site/ob/init/prr.view"
                // } else if (stateProfile.registerState.whyReg4 == "PS_VIEW_PROFILE") {
                //     window.location = "/site/bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                // } else if (stateProfile.registerState.whyReg4 == "IDP_VIEW_PROFILE") {
                //     setTimeout(function () {
                //         window.location = "/site/idp-bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                //     }, 1500);
                // } else {
                //     document.getElementById("mini-reg-form").submit();
                // }
                if (result.retCode == "SUCCESS") {

                    if (stateProfile.registerState.whyReg4 == "idp_profile_locking") {
                        window.location = "/idp-match-process.view?bypassMatching=true&redirectURL=/site/prr-purchase.view%3Fwhysub%3D" + stateProfile.registerState.whyReg4;
                        // } else if (isItMePMKT) {
                        //     window.location = "/"
                        // } else if (stateProfile.registerState.whyReg4 == "PS_PMKT" && this.context.registrationData.paidMarketingCookie == "true") {
                        //     location.reload();
                        // } else if (isItMe) {
                        //     window.location = "/site/ob/init/prr.view"
                    } else if (stateProfile.registerState.whyReg4 == "PS_VIEW_PROFILE") {
                        window.location = "/site/bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                    } else if (stateProfile.registerState.whyReg4 == "IDP_VIEW_PROFILE") {
                        setTimeout(function () {
                            window.location = "/site/idp-bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                        }, 1500);
                    } else {

                        console.log("Submitting form:" + $("#mini-reg-form input[name='usernum']").val());
                        $('form#mini-reg-form').submit();
                    }
                } else if (result.retCode = "DUPLICATE_EMAIL") {
                    // console.log('submitHandler DUPLICATE_EMAIL');

                    let fname = stateProfile.registerState.firstName.substr(0, 1).toUpperCase() + stateProfile.registerState.firstName.substr(1);
                    let url = '/duplicate-account-login.pubview?firstName=' + fname.replace(" ", "+") + "&lastName=" + stateProfile.registerState.lastName.replace(" ", "+") + "&email=" + stateProfile.registerState.email;

                    let newForm = document.createElement('form');
                    newForm.setAttribute("id", "newForm");
                    newForm.setAttribute("action", url);
                    newForm.setAttribute("method", "get");

                    let inputFirstName = document.createElement('input');
                    inputFirstName.setAttribute("name", "firstName");
                    inputFirstName.setAttribute("value", stateProfile.registerState.firstName);

                    let inputLastName = document.createElement('input');
                    inputLastName.setAttribute("name", "lastName");
                    inputLastName.setAttribute("value", stateProfile.registerState.lastName);

                    let inputEmail = document.createElement('input');
                    inputEmail.setAttribute("name", "email");
                    inputEmail.setAttribute("value", stateProfile.registerState.email);

                    newForm.appendChild(inputFirstName);
                    newForm.appendChild(inputLastName);
                    newForm.appendChild(inputEmail);

                    window.document.body.appendChild(newForm);
                    window.document.getElementById("newForm").submit(); // comment this to know the form data

                } else {
                    // console.log('submitHandler ERROR');
                    $("#registerBtn").addClass("primary-btn-disabled");
                }
            })
    })
})

$(window).scroll(() => {
    let currentActiveNav = "";

//    Sticky nav
    scrollY >= (navbarOffsetTop - addTriggerHeight) ? $(navbar).addClass("sticky") : $(navbar).removeClass("sticky");

//    Determine active nav
    sections.each((_, section) => {
        const {top: sectionTop} = $(section).offset();
        if (scrollY >= (sectionTop - addTriggerHeight)) {
            currentActiveNav = section.getAttribute("id")
            if ($(window).width() < 576) document.querySelector(`#nav`).scrollTo(document.querySelector(`#nav li.${section.getAttribute("id")}`).offsetLeft - 5, 0)
        }
        ;
    })

    navLink.each((_, el) => {
        $(el).removeClass("active");
        if (el.classList.contains(currentActiveNav)) $(el).addClass("active")
    })
})


function checkImg(img) {
    if (img.naturalHeight <= 1 && img.naturalWidth <= 1) {
        // undersize image here
        img.src = "/static/img/pp.gif";
    }
}


//Family & Friends Section - if has 1 in (Relatives & Associates, Neighbor, Classmates) change title header to singular
$('.family-friends .card-content:nth-last-child(1) .card').each(function() {
    if ($(this).find('.profile-pic').length < 2) {
        $(".family-friends .card-content:nth-last-child(1) h4").html("<span>1</span> Classmate");
    };

    if($(this).is(':contains("Info Pending")'))  {
        $(".family-friends .card-content:nth-last-child(1) h4").html("Classmates");
    };
});

$('.family-friends .card-content:nth-last-child(2) .card').each(function() {
    if ($(this).find('.profile-pic').length < 2) {
        $(".family-friends .card-content:nth-last-child(2) h4").html("<span>1</span> Neighbor");
    };

    if($(this).is(':contains("Info Pending")'))  {
        $(".family-friends .card-content:nth-last-child(2) h4").html("Neighbors");
    };
});

$('.family-friends .card-content:nth-last-child(3) .card').each(function() {
    if ($(this).find('.profile-pic').length < 2) {
        $(".family-friends .card-content:nth-last-child(3) h4").html("<span>1</span> Relative & Associate");
    };
    if($(this).is(':contains("Info Pending")'))  {
        $(".family-friends .card-content:nth-last-child(3) h4").html("Relatives & Associates");
    };
});

//Family & Friends Section - set to full width if any of the card has less than three profile-pic
for (const container of document.querySelectorAll('.family-friends .card-content .card')) {
    if (container.querySelectorAll('.profile-pic').length < 3) {
        $('.family-friends').attr('style', 'align-items: start;');
        $('.family-friends' ).last().addClass( "full-width" );
    }
}