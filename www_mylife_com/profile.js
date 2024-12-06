// https://www-stage6.mylife.com/james-henry/e367093984830
// https://www-stage3.mylife.com/william-miller/e76062213426972

const profileSectionItems = $(".profile-tabs");
const colContentTop = $(".content.col-content").offset().top;
const relativesSection = $(".profile-tabs[data-id='relatives']");
const profileTabsWidth = $(".profile-details").width();
const controlContent = document.querySelector(".control-content-2");
const profileReputationCta = document.querySelector(".profile-reputation__cta");
//var onlinePhotosCalled = false;

// mimic logged in masterProfile isLoggedIn property
let masterProfile = { isLoggedIn: false };

let _exitIntent = false;

let dynamicStepsObj = {
    "step1" : {
        "tags": "All Contact & Personal Info - Phone Numbers - Email Addresses - Current & Past Addresses - Education & Work History - Addresses, Phone & Email - Relatives & Neighbors - Friends Associates & Neighbors - Photos & Videos - Relatives"
    },
    "step2" : {
        "tags": "All Contact & Personal Info - Social Profiles & Posts - Photos & Videos - Reviews & Reputation Score - Relatives - Relatives & Neighbors - Friends Associates & Neighbors"

    },
    "step3" : {
        "tags": "All Contact & Personal Info - Phone Numbers - Email Addresses - Current & Past Addresses - Addresses, Phone & Email"
    },
    "step4" : {
        "tags": "All Contact & Personal Info - Relatives & Neighbors - Friends Associates & Neighbors - Photos & Videos - Relatives"
    },
    "step5" : {
        "tags": "Property Ownership - Licenses & Corporate Affiliations"
    },
    "step6" : {
        "tags": "Lawsuits, Liens & Bankruptcies"
    },
    "step7" : {
        "tags": "Sexual Offenses"
    },
    "step8" : {
        "tags": "Court & Arrest Records - Reviews & Reputation Score - Sexual Offenses"
    },
    "step9" : {
        "tags": ""
    }
}

let listCheckbox = [];
let dynamicSteps = {
    step1: true,
    step2: true,
    step3: true,
    step4: true,
    step5: true,
    step6: true,
    step7: true,
    step8: true,
    step9: true
}

let dynamicNumberSteps = 9;

// State
let stateProfile = {
    lockUnlock: {
        COURT_AND_ARREST_RECORDS: false,
        REVIEWS_AND_RATINGS: false,
        CONTACT_INFO: false,
        ABOUT: false,
        FAMILY_AND_FRIENDS: false,
        PHOTOS_AND_SOCIAL_POSTS: false,
    },
    personalDefaultState: {
        beFriends: false,
        smart: false,
        loyal: false,
        honest: false,
        goodListener: false,
        humble: false,
        generous: false,
        fun: false,
        easyGoing: false,
        optimistic: false,
        kind: false,
        notBeFriends: false,
        unintelligent: false,
        disloyal: false,
        dishonest: false,
        undependable: false,
        conceited: false,
        cheap: false,
        dull: false,
        uptight: false,
        pessimistic: false,
        cruel: false,
        boring: false,
        personalComment: ""
    },
    professionalDefaultState: {
        responsible: false,
        hardWorking: false,
        intelligent: false,
        collaborative: false,
        creative: false,
        resourceful: false,
        motivated: false,
        flexible: false,
        ambitious: false,
        articulate: false,
        wouldNotWork: false,
        undependable: false,
        lazy: false,
        "not smart": false,
        "not collaborative": false,
        unimaginative: false,
        passive: false,
        unmotivated: false,
        inflexible: false,
        unambitious: false,
        incoherent: false,
        "needs supervision": false,
        professionalComment: ""
    },
    datingDefaultState: {
        faithful: false,
        respectful: false,
        understanding: false,
        funny: false,
        romantic: false,
        sexy: false,
        smart: false,
        passionate: false,
        goodLooking: false,
        goodListener: false,
        wouldNotDate: false,
        unfaithful: false,
        Disrespectful: false,
        "self-centered": false,
        cold: false,
        boring: false,
        unsexy: false,
        "not smart": false,
        "Bad kisser": false,
        Unattractive: false,
        neglectful: false,
        dishonest: false,
        datingComment: ""
    },
    profileState: {
        revieweeEpid: $("#epid").val(),
        revieweeUsernum: $("#usernum").val(),
        reviewId: 1,
        signedOutRevReq: $("#signedOutRevReq").val(),
        hide: false,
    },
    relationAnonymousState: {
        reviewRelationship: "Friend",
        postAnonymous: false
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
let miniProfileCardExit = false;
let miniOverlayProfileCardExit = false;
let isHover = false;
let isVisible = false;
// Swiper| Slider
let isOnVeryLeft = true;
let isOnVeryRight = false;

//redirect to onboarding after timer reach 20
var timerUserOnPageAfterScroll = 0;
var timerUserCounterOnpageAfetrScrollIsCalled = false;
var intervalWrapper = null;

// var isVariation = false;
// var isVariation = true;
// var testName = 5192023;
// var isTesting = true;

$(document).ready(function () {
    //Back Button
    $("a[rel='nofollow']").on("click", function (e) {
        //console.log("e.target.href:" + (e.target.href.indexOf("pagesection") > 0));
        //console.log("e.target.href:" + e.target.href);
        if (e.target.href.indexOf("pagesection") > 0) {
            //console.log(getCookie('backButton'));
            if (getCookie('backButton') == null) {
                setCookie('backButton', '1', "", "/");
            }

            if (e.target.href.includes("identity")) {
                setCookie('isIdentity', '1', 365, "/");
            }
        }
    })


    // set timer to show modal due to vwo variable pending on load - wait 1 sec to run

    try {
        setTimeout(function () {
            runModalLogic();
            // runVwoLogic();
        }, 2000);
    } catch (err) {
        console.log(err)
    }

    // Original code below for modal logic
    // if (typeof showOnboardingCheckbox !== 'undefined' && showOnboardingCheckbox === true) {
    //     $("body").append(checkBoxOnboardingOverlay());
    //     checkBoxOnboardingEvents();
    // } else if (getCookie('showRegModalExit') === null && document.querySelector('#registrationModal') === null && getCookie('backButton') != null && (getCookie('backButton') == 1 || getCookie('backButton') == "1")) {
    //     // console.log('registrationModalContent', getCookie('backButton'));
    //     // if (getCookie('regFiredOnce') == null) {
    //         //show registrationModal
    //         //setCookie('regFiredOnce', '1', '', window.location.pathname);
    //         deleteCookie('backButton');
    //         setCookie('autoRedirect', '1', "", "/"); // set to true to avoid redirect when modal is open
    //         setTimeout(() => {
    //
    //             // if (getCookie('isIdentity') != null && getCookie('isIdentity') == '1') {
    //             //     console.log('registrationModalContent1');
    //             //     $("body").append(registrationModalContentV2('noBullets'))
    //             //     $(".registration-message").html(backButtonRegOverlay2())
    //
    //                 // $("body").append(registrationModalContentV2("idpBackExit"))
    //                 // $(".registration-message").html(idpExitBackEButtonRegOverlay())
    //
    //                 // Set the whyReg Values
    //                 // stateProfile = {
    //                 //     ...stateProfile,
    //                 //     registerState: {
    //                 //         ...stateProfile.registerState,
    //                 //         firstName: $("#firstName").val(),
    //                 //         lastName: $("#lastName").val(),
    //                 //         zip: $("#zip").val(),
    //                 //         age: $("#age").val(),
    //                 //         whyReg4: "IDP_VIEW_PROFILE"
    //                 //     }
    //                 // }
    //                 // $("#searchForMyselfCheckBoxRegForm").prop("checked", true)
    //
    //                 // $("#registrationModal input[name='firstName']").val(stateProfile.registerState.firstName)
    //                 // $("#registrationModal input[name='lastName']").val(stateProfile.registerState.lastName)
    //                 // $("#registrationModal input[name='age']").val(stateProfile.registerState.age)
    //                 // $("#registrationModal input[name='zip']").val(stateProfile.registerState.zip)
    //             // } else {
    //                 console.log('registrationModalContent2');
    //                 $("body").append(registrationModalContentV2('noBullets'))
    //                 $(".registration-message").html(backButtonRegOverlay2());
    //                 _exitIntent = false;
    //                 InitRenderGoogleOneTap();
    //
    //                 // Set the whyReg Values
    //                 stateProfile = {
    //                     ...stateProfile,
    //                     registerState: {
    //                         ...stateProfile.registerState,
    //                         whyReg4: "PS_VIEW_PROFILE"
    //                     }
    //                 }
    //
    //                 // deleteCookie('isIdentity')
    //             // }
    //
    //             //Add the class to show the modal
    //             $("#registrationModal").addClass("show-modal");
    //
    //             // Initiate the func
    //             thisIsMeProfileV2();
    //
    //             setCookie('showRegModalExit', '1', "", "/")
    //
    //             signUpFieldValidation();
    //
    //             _trackRegModal({ eventName:"showRegModalBackButton" })
    //
    //         }, 500)
    //     // } else {
    //     //     InitGoogleOneTap();
    //     // }
    // } else {
    //     setTimeout(function() {
    //         InitGoogleOneTap();
    //     }, 1500);
    // }

    if (getCookie('doNotUseMarketingRetarget') != null && getCookie('doNotUseMarketingRetarget') == 'false') {
        $('.eula-terms').hide();
    }

    var actionOnLoad = getUrlParameter("actionOnload");
    if (actionOnLoad != false) {
        if ("showSendMessageModal") {
            $(".message-btn").click();
        }
    }
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
                this.src = "/static/websat-profile/global/img/default-avatar.png";
            });

        }
    });

    // disabled vwo tracking using cookie
    // setTimeout(function () {
    //    runVwoLogic();
    // }, 300);

    // Determine if pvcard need hidden class
    if ($("#bio-wrapper p").text().length < 455) {
        $("#bio-wrapper").addClass("default").removeClass("hidden")
    } else {
        $("#bio-wrapper").addClass("hidden")
    }
    if ($(" #faqs-wrapper").text().length <= 455) {
        $(" #faqs-wrapper").removeClass("hidden").addClass("default")
    } else {
        $("#faqs-wrapper").addClass("hidden")
    }

    // Section Tab Accordion
    $(".profile-details-header").on("click", function () {
        const accordionItem = $(this).parent()

        if ($(window).width() < 992) {
            if ($(accordionItem).hasClass("active")) {
                $(accordionItem).removeClass("active");
            } else {
                $(accordionItem).addClass("active")
            }
        }
    })

    // VCard Profile Visibility
    $(".btn-control-profile").on("click", function () {
        if (!$(".control-content-2").hasClass("open")) {
            $(".control-content-2").addClass("open")
        } else {
            $(".control-content-2").removeClass("open")
        }
    })
    redirectedFromCourtPage()

    initProfileGaugeMeter();

    initStarRating();

    // fetchAveragePropertyRent();

    //displayMap();

    //set url to redirect for po page
    try {
        localStorage.setItem('profileViewUrl',window.location.href);
    } catch (err) {
        console.log('err', err);
    }
});

$(document).on("click", ".close", function () {

    // Set all switch back to off
    $(".lock-switch-container").each(function () {
        if (this.classList.contains("private")) {
            $(".lock-switch-container").removeClass("private");
            $(".lock-switch-container").addClass("public");
        }
    });

    // On close set state to lockUnlockState
    lockUnlockResetState();

    _exitIntent = false;

    personalResetDefaultState();
    professionalResetDefaultState();
    datingResetDefaultState();

    stateProfile = {
        ...stateProfile,
        modal: {
            ...stateProfile.modal,
            sendMessage: false
        }
    }

    // This remove the this is me content checkbox
    $(".form-control-checkbox").html("")

    // This remove the ""My" Text
    $("#registerBtn").text("Show Background Report")

    // Remove modal from dom
    $(".modal").remove();

})

$(document).on("click", ".search-again-close", function () {

    // Set all switch back to off
    $(".lock-switch-container").each(function () {
        if (this.classList.contains("private")) {
            $(".lock-switch-container").removeClass("private");
            $(".lock-switch-container").addClass("public");
        }
    });

    // On close set state to lockUnlockState
    lockUnlockResetState();

    _exitIntent = false;

    personalResetDefaultState();
    professionalResetDefaultState();
    datingResetDefaultState();

    stateProfile = {
        ...stateProfile,
        modal: {
            ...stateProfile.modal,
            sendMessage: false
        }
    }

    // This remove the this is me content checkbox
    $(".form-control-checkbox").html("")

    // This remove the ""My" Text
    $("#registerBtn").text("Show Background Report")

    // Remove modal from dom
    $(".modal").remove();

    $("#globalFirstName-mobile-modal").focus();

})

$(document).on("click", ".go-to-search-again-close", function () {

    // try {
    //     if (isTesting) {
    //         let objParam = {
    //             "usernum": "",
    //             "bundleId": "",  //bundle id if available
    //             "mobile": mobileCheck(),     //is this a mobile web browser?
    //             "pageName": "Public Profile Page | Onboarding Modal View | Click Search",  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
    //             "pageUri": location.toString(), // URI from the browser location bar
    //             "testName": testName,  //test name from VWO
    //             "testPlatform": "INTERNAL",  //hardcode to VWO for now
    //             "variationName": (isVariation ? "Variation" : "Control")
    //         }
    //         let objParamStringify = JSON.stringify(objParam);
    //         let callTracking = pageTestData(objParamStringify);
    //     }
    // } catch (e) {
    //     console.log('e',e)
    // }

    window.location.href = '/pub-multisearch.pubview?searchFirstName='+$("#firstName").val()+'&searchLastName='+$("#lastName").val()+'&searchLocation='+$("#pubDataCity4").val()+','+$("#pubDataState4").val()+'&whyReg=peoplesearch&whySub=Member+Profile+Sub&pageType=ps';
});

// Scroll Event
$(window).scroll((e) => {
    stickyContent();

    webStickyNav();

    activeStickyNav();

    // if (onlinePhotosCalled == false) {
    //     fetchGatheredOnlinePhotos();
    //     onlinePhotosCalled = true;
    // }

});

// Resize Event
$(window).resize((e) => {
    if ($(window).width() < 991) {
        $(".profile-reputation").css({
            position: "relative"
        })
        $(".profile-mobile-tabs").css({
            maxWidth: "100%"
        })
    } else {
        // Determine if pvcard need hidden class
        if ($("#bio-wrapper p, #faqs-wrapper").innerHeight() > 350) {
            if (!$("#bio-wrapper, #faqs-wrapper").hasClass("hidden") && $("#more-bio, #more-faqs").text() != "Less") {
                $("#bio-wrapper, #faqs-wrapper").addClass("hidden")
            }
        }
    }

    initProfileGaugeMeter();
});

// Accept Terms
$("#ccpaAcceptBtn").on("click", () => {
    setCookie('doNotUseMarketingRetarget', 'false', 1825, "/")
    $(".eula-terms").hide();
});

// Excellent reputation visibility
$(".this-mean-btn").on("click", () => {
    if ($(".excellent-reputation-box__content--right .badge-text").hasClass("open")) {
        $(".excellent-reputation-box__content--right .badge-text").removeClass("open");
    } else {
        $(".excellent-reputation-box__content--right .badge-text").addClass("open");
    }
});

// Notification alert box visibility
$(".menu-btn").on("click", () => {
    const isOpen = $(".profile-reputation__notif").hasClass("menu-open");

    if (isOpen) {
        $(".profile-reputation__notif").removeClass("menu-open");
    } else {
        $(".profile-reputation__notif").addClass("menu-open");
    }
});

// Dropdown navigation
$("#dropdown-toggler").on("click", function () {
    const dropdownMobile = $(this).parent();

    if (!dropdownMobile.hasClass("open")) {
        dropdownMobile.addClass("open")
    } else {
        dropdownMobile.removeClass("open")
    }
})

// Scroll Into View Web
$(".profile-details__tabs").on("click", function (e) {
    profileSectionItems.each(function (index, section) {
        if (e.target.classList.contains(section.dataset.id)) {
            const sectionTop = $(section).offset().top;
            const navHeight = $(".profile-details__tabs").outerHeight();
            $(window).scrollTop(sectionTop - (navHeight - 2))
        }
    });
})

// Scroll Into View mobile
$(".profile-mobile-tabs").on("click", function (e) {
    profileSectionItems.each(function (index, section) {
        if (e.target.classList.contains(section.dataset.id)) {
            const sectionTop = $(section).offset().top;
            const navHeight = $(".profile-mobile-tabs").outerHeight()
            if ($(".profile-mobile-tabs").hasClass("sticky-nav") == false) {
                $(window).scrollTop(sectionTop - (navHeight * 2 - 2))
            } else {
                $(window).scrollTop(sectionTop - (navHeight - 2))
            }
        }

    });

})

// Scroll Into View mobile
$(".dropdown-toggler-list-item").on("click", function () {
    const goto = $(this).data("goto-section");
    $(".accordion-item").each(function (index, section) {
        const navGoto = $(this).data("nav-section");
        if (goto === navGoto) {
            if (!$(section).hasClass("active")) {
                $(section).addClass("active")
            }

            const {top} = $(section).offset()

            $(window).scrollTop(top - $(".dropdown-mobile-tabs").outerHeight())

            $(".dropdown-mobile-tabs").removeClass("open")
        }
    })
})
// View More Bio vcard
$("#more-bio").click(profileVCardVisibility)

// View More FAQs vcard
$("#more-faqs").click(profileVCardVisibilityFaqs)

// Map Visibility
$("#map-btn").click(mapVisibility)
// Slider
if (isOnVeryLeft) {
    $(".button-prev").addClass("swiper-button-disabled")

} else {
    $(".button-prev").removeClass("swiper-button-disabled")
}

if (isOnVeryRight) {
    $(".button-next").addClass("swiper-button-disabled")
} else {
    $(".button-next").removeClass("swiper-button-disabled")
}
$(".swiper-main-wrapper, .swiper-wrapper").each(function (_, spWrap) {
    let sliderWidth = 0;
    const slides = $(this).find(".swiper-slide");

    slides.each((_, slItem) => sliderWidth += $(slItem).outerWidth());

    if (sliderWidth < profileTabsWidth) $(spWrap).siblings(".button-next").addClass("swiper-button-disabled");

})

$(".button-prev").click(function () {
    const cardWidth = ($(".profile-details").outerWidth() * 25) / 100;
    const btnPrev = $(this).next()

    if ($(this).hasClass("long-slide")) {
        const sliderContainer = $(this).parent().parent().find(".swiper-main-wrapper")


        if ($(sliderContainer).scrollLeft() < 250) {
            //    true itatago
            isOnVeryLeft = true;
        } else {
            //    false ilalabas
            isOnVeryLeft = false;
        }

        $(btnPrev).removeClass("swiper-button-disabled")

        if (isOnVeryLeft) {
            $(this).addClass("swiper-button-disabled")

        } else {
            $(this).removeClass("swiper-button-disabled")
        }

        $(sliderContainer).scrollLeft(sliderContainer.scrollLeft() - cardWidth)
    } else {

        const sliderContainer = $(this).parent().find(".swiper-wrapper");


        if ($(sliderContainer).scrollLeft() < 250) {
            //    true itatago
            isOnVeryLeft = true;
        } else {
            //    false ilalabas
            isOnVeryLeft = false;
        }


        $(btnPrev).removeClass("swiper-button-disabled")

        if (isOnVeryLeft) {
            $(this).addClass("swiper-button-disabled")

        } else {
            $(this).removeClass("swiper-button-disabled")
        }

        $(sliderContainer).scrollLeft(sliderContainer.scrollLeft() - cardWidth - 25)
    }

})
$(".button-next").click(function () {
    const cardWidth = ($(".profile-details").outerWidth() * 25) / 100;
    const btnPrev = $(this).prev()

    if ($(this).hasClass("long-slide")) {
        const sliderContainer = $(this).parent().parent().find(".swiper-main-wrapper")
        const clientWidth = $(sliderContainer).outerWidth()
        const scrollWidth = this.parentElement.parentElement.querySelector(".swiper-main-wrapper").scrollWidth


        if (scrollWidth - ($(sliderContainer).scrollLeft() + clientWidth) < 250) {
            //    true itatago
            isOnVeryRight = true;
        } else {
            //    false ilalabas
            isOnVeryRight = false;
        }

        $(btnPrev).removeClass("swiper-button-disabled")
        if (isOnVeryRight) {
            $(this).addClass("swiper-button-disabled")
        } else {
            $(this).removeClass("swiper-button-disabled")
        }

        $(sliderContainer).scrollLeft(sliderContainer.scrollLeft() + cardWidth)
    } else {
        const sliderContainer = $(this).parent().find(".swiper-wrapper");
        const clientWidth = $(sliderContainer).outerWidth()
        const scrollWidth = this.parentElement.querySelector(".swiper-wrapper").scrollWidth


        if (scrollWidth - ($(sliderContainer).scrollLeft() + clientWidth) < 250) {
            //    true itatago
            isOnVeryRight = true;
        } else {
            //    false ilalabas
            isOnVeryRight = false;
        }

        $(btnPrev).removeClass("swiper-button-disabled")
        if (isOnVeryRight) {
            $(this).addClass("swiper-button-disabled")
        } else {
            $(this).removeClass("swiper-button-disabled")
        }

        $(sliderContainer).scrollLeft(sliderContainer.scrollLeft() + cardWidth + 25)
    }

})

// Lock Profile Event
$(".lock-switch-web, .small-switch").click(function () {
    const isLockPublic = this.classList.contains("public");
    const isLockClass = this.getAttribute("data-switch");


    if (isLockPublic) {
        this.classList.remove("public");
        this.classList.add("private");

        //Lock Profile Request
        lockUnlockModalRequest(isLockClass, true);

        $("body").append(renderProcessLockInfoModal(isLockClass));

        // switch when lock modal is open | after creating modal dynamically
        $(".lock-modal-btn").click(function () {
            const isLockClass = this.dataset.switch;

            if (this.classList.contains("private")) {
                this.classList.remove("private");
                this.classList.add("public");

                lockUnlockModalRequest(isLockClass, false)
            } else {
                this.classList.add("private");
                this.classList.remove("public");

                lockUnlockModalRequest(isLockClass, true)
            }
        })
    } else {
        this.classList.remove("private");
        this.classList.add("public");

    }

    // Set Start point whyReg4
    stateProfile = {
        ...stateProfile,
        registerState: {
            ...stateProfile.registerState,
            whyReg4: "idp_profile_locking",
            simpleMessage: ""
        }
    }
    // registerState = {...registerState, whyReg4: "idp_profile_locking", simpleMessage: ""}

})

$(".btn-review-modal, .review-btn, .btn-rate-person, .btn-give-review, .review-thumb-up, .review-thumb-down").click(function () {
    $("body").append(reviewModalContent());

    try {
        // if (!isVariation) {
        // if (typeof isVwoTest === 'undefined') {
            resetCountUp();
        // }
    } catch (err) {
        console.log('err', err);
    }

    changeReviewTab();
    accordionReviews(this);
    selectDeselectBtnTag(this);
    commentSaveReviewData();
    relationshipSaveReviewData();
    submitReviewsValidation();
})
// Post Message Modal Event
$(".message-btn").on("click", function () {
    $("body").append(sendMessageModalContent());

    //Send Message Validation
    sendMessageKeyupValidation();

    // Onload Send Message Validation
    sendMessageFormValidation()
});

// Hover Action on mini profile card
$(".card").hover(
    function () {
        const card = this
        isHover = true;
        miniProfileCardExit = false;

        setTimeout(function () {
            if (isHover) {
                showMiniProfileCard(card)
            }
        }, 50)
    },
    function () {
        if (isHover) {
            isHover = false;
            miniOverlayProfileCardExit = true
        }
        miniProfileCardExit = true;
        setTimeout(function () {
            if (miniProfileCardExit == true && miniOverlayProfileCardExit == true) {
                $(".mini-vcard-overlay").remove()
                isVisible = false
            }
        }, 0)
    }
)

function runModalLogic() {
    // console.log('showOnboardingCheckbox', typeof showOnboardingCheckbox);

    // let vwoData = getVWOCampaignData();
    // console.log("vwoData",vwoData,vwoData.length);
    // if (vwoData.length !== 0) {
    //     let objParam = {
    //         "usernum": "",
    //         "bundleId": "",  //bundle id if available
    //         "mobile": mobileCheck(),     //is this a mobile web browser?
    //         "pageName": "Public Profile Page",  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
    //         "pageUri": location.toString(), // URI from the browser location bar
    //         "testName": (typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""),  //test name from VWO
    //         "testPlatform": "VWO",  //hardcode to VWO for now
    //         "variationName": (typeof vwoData[0][1].n !== "undefined" ? vwoData[0][1].n : "") // is this Variation or Control
    //     }

        // try {
        //     if (isTesting) {
        //         let objParam = {
        //             "usernum": "",
        //             "bundleId": "",  //bundle id if available
        //             "mobile": mobileCheck(),     //is this a mobile web browser?
        //             "pageName": "Public Profile Page View",  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
        //             "pageUri": location.toString(), // URI from the browser location bar
        //             "testName": testName,  //test name from VWO
        //             "testPlatform": "INTERNAL",  //hardcode to VWO for now
        //             "variationName": (isVariation ? "Variation" : "Control")
        //         }
        //         let objParamStringify = JSON.stringify(objParam);
        //         let callTracking = pageTestData(objParamStringify);
        //     }
        // } catch (e) {
        //     console.log('e',e)
        // }

    // }

    // if (isVariation) {
    // if (typeof isVwoTest !== 'undefined') {
    //     $("body").append(checkBoxOnboardingOverlay());
    //     checkBoxOnboardingEvents();
    //
    // } else if (getCookie('showRegModalExit') === null && document.querySelector('#checkboxOnboardingModal') === null && document.querySelector('#registrationModal') === null && getCookie('backButton') != null && (getCookie('backButton') == 1 || getCookie('backButton') == "1")) {
    if (getCookie('showRegModalExit') === null && document.querySelector('#checkboxOnboardingModal') === null && document.querySelector('#registrationModal') === null && getCookie('backButton') != null && (getCookie('backButton') == 1 || getCookie('backButton') == "1")) {
        deleteCookie('backButton');
        setCookie('autoRedirect', '1', "", "/"); // set to true to avoid redirect when modal is open
        setTimeout(() => {
            $("body").append(registrationModalContentV2('noBullets'))
            $(".registration-message").html(backButtonRegOverlay2());
            _exitIntent = false;
            // InitRenderGoogleOneTap();

            // Set the whyReg Values
            stateProfile = {
                ...stateProfile,
                registerState: {
                    ...stateProfile.registerState,
                    whyReg4: "PS_VIEW_PROFILE"
                }
            }

            //Add the class to show the modal
            $("#registrationModal").addClass("show-modal");

            // Initiate the func
            thisIsMeProfileV2();

            setCookie('showRegModalExit', '1', "", "/")

            signUpFieldValidation();

            _trackRegModal({ eventName:"showRegModalBackButton" })

        }, 500)
    } else {
        if (isMobileBrowser()) {
            //do nothing
        } else {
            $("body").append(checkBoxOnboardingOverlay());
            checkBoxOnboardingEvents();
        }

        // setTimeout(function() {
        //     InitGoogleOneTap();
        // }, 1500);
    }


    window.onscroll = function(){
        try {
            // if (!isVariation) {
            // if (typeof isVwoTest === 'undefined') {
                if(timerUserCounterOnpageAfetrScrollIsCalled == false && getCookie('autoRedirect') == null && (publicProfileAutoRedirectOnboarding == true || publicProfileAutoRedirectOnboarding == 'true')) {
                    timerUserCounterOnpageAfetrScrollIsCalled = true;
                    if(timerUserOnPageAfterScroll < (publicProfileAutoRedirectOnboardingSecs + 1)) {
                        intervalWrapper = setInterval(countUp, 1000);
                    }
                }
            // }

        } catch(err) {
            console.log('err', err);
        }
    };
}

// NOTE: not being use
// Submit registration form
function registrationFormSubmit() {
    console.log("Button Registration is Clicked:")
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

    // console.log(postData)

    fetch(postData, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then(result => {

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
                    setTimeout(function() {
                        window.location = "/site/ob/init/identity-premium.view";
                    }, 1500);
                    // setTimeout(function () {
                    //     window.location = "/site/idp-bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                    // }, 1500);
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
}
function webStickyNav() {
    const isWebSticky = $(".col-content").offset().top;
    const isMobileSticky = $(".profile-reputation").offset().top + $(".profile-reputation").innerHeight();
    const isLastSection = profileSectionItems.last().offset().top

    if (scrollY > isWebSticky && scrollY < isLastSection + 100) {
        $(".profile-details__tabs").addClass("sticky-nav");
        $(".profile-details__tabs.sticky-nav").css({
            top: `0`
        })
    } else if (scrollY > isLastSection + 20) {
        $(".profile-details__tabs.sticky-nav").css({
            top: `-${$(".profile-details__tabs.sticky-nav").outerHeight()}px`
        })
    } else if (scrollY < isWebSticky) {
        $(".profile-details__tabs").removeClass("sticky-nav");
    }

    if (scrollY > isMobileSticky && scrollY < isLastSection) {
        $(".profile-mobile-tabs").addClass("sticky-nav");
        $(".profile-mobile-tabs.sticky-nav").css({
            top: `0`
        })
    } else if (scrollY < isMobileSticky) {
        $(".profile-mobile-tabs").removeClass("sticky-nav");
    }
}

function stickyContent() {
    const isLeftStickyContent = document.querySelector(".col-content").getBoundingClientRect();
    const footerPosition = document.getElementById("wellFooterOS").getBoundingClientRect();

    if ($(window).width() > 992) {
        if (footerPosition.top < $(window).height()) {
            $(".profile-reputation").css({
                position: "absolute",
                bottom: "40px",
                top: "unset",
            }).removeClass("sticky-content")
            return
        } else if (isLeftStickyContent.top < 0) {
            $(".profile-reputation").css({
                position: "fixed",
                top: "0"
            }).addClass("sticky-content")
            return
        } else if (isLeftStickyContent.top > 0) {
            $(".profile-reputation").css({position: "relative", bottom: 0}).removeClass("sticky-content")
            return
        }
        return
    }
}

function activeStickyNav() {
    // Highlights active nav
    profileSectionItems.each(function (index, section) {
        const navHeight = $(window).width() > 992 ? $(".profile-details__tabs").outerHeight() : $(".profile-mobile-tabs").outerHeight()
        const withSectionTop = $(section).offset().top;

        if (scrollY >= withSectionTop - navHeight) {
            if ($(".profile-details__tabs--item.active, .profile-mobile-tabs__item.active") != null) {
                $(".profile-details__tabs--item.active").removeClass("active")
                $(".profile-mobile-tabs__item.active").removeClass("active")
            }

            $(`.profile-details__tabs--item.${section.dataset.id}`).addClass("active");
            $(`.profile-mobile-tabs__item.${section.dataset.id}`).addClass("active");

            document.querySelector(".profile-mobile-tabs").scrollTo(
                document.querySelector(`.profile-mobile-tabs__item.${section.dataset.id}`).offsetLeft - 80, 0
            )
        }

    });


    if ($(".profile-details__tabs").hasClass("sticky-nav") == true) {
        $(".profile-details__tabs").css({"max-width": profileTabsWidth, "width": "100%"})
    } else {
        $(".profile-details__tabs--item.summary").addClass("active");
    }

    if ($(".profile-mobile-tabs").hasClass("sticky-nav") == true) {
        $(".profile-mobile-tabs").css({"max-width": profileTabsWidth, "width": "100%"})
    } else {
        $(".profile-mobile-tabs__item.summary").addClass("active");
    }
}

function redirectedFromCourtPage() {
    const arrPathname = $(location).attr('href').split("#")[1];

    $(".profile-tabs").each((_, section) => {
        if (section.dataset.id === arrPathname) {
            const offsetTop = $(section).offset().top;
            $(window).scrollTop(offsetTop - $(".profile-details__tabs").innerHeight())
        }
    })
}

function profileVCardVisibility() {
    const bioWrapper = $("#bio-wrapper").hasClass("hidden");

    if (bioWrapper) {
        $(this).text("Read Less")
        $("#bio-wrapper").removeClass("hidden")
    } else {
        $(this).text("Read More")
        $("#bio-wrapper").addClass("hidden")
    }
}

function profileVCardVisibilityFaqs() {
    const faqsWrapper = $("#faqs-wrapper").hasClass("hidden");

    if (faqsWrapper) {
        $(this).text("Read Less")
        $("#faqs-wrapper").removeClass("hidden")
    } else {
        $(this).text("Read More")
        $("#faqs-wrapper").addClass("hidden")
    }
}

// Profile Gauge Indicator
function initProfileGaugeMeter() {
    let barWidth = $(".profile-reputation__gauge--bar").outerWidth();
    let repMinScore = parseFloat($(".reputation-min").text());
    let repMaxScore = parseFloat($(".reputation-max").text());
    let minIndicator = Math.round((barWidth / 5.1) * repMinScore)
    let maxIndicator = Math.round((barWidth / 5.1) * repMaxScore)

    $("#low-indicator").css({
        left: minIndicator + "px"
    })
    $("#high-indicator").css({
        left: maxIndicator + "px"
    })

    $(".gauge-indicator").css({
        display: "block"
    })
}

function initStarRating() {
    const totalStar = 5;
    const repMinScore = parseFloat($(".reputation-min").text());
    const repMaxScore = parseFloat($(".reputation-max").text());
    const starRating = (((repMaxScore - repMinScore) / 2) + repMinScore).toFixed(2);
    const star = $(".rating-star");

    const starPercentage = (starRating * 100) / 5;
    const starPercentageRounded = `${Math.round(starPercentage / totalStar) * .50}%`;
    console.log(starPercentage, starRating)
    star.css(({
        width: starPercentage + '%'
    }))

}

// Google Registration Modal begin
function googleRegistrationModalContent() {
    return `
        <div id="googleRegistrationModal" class="modal google-registration-modal modal-template ">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">

                    <div class="modal-header">
                        <button aria-label="close" name="close" type="button" class="close" onclick="googleRegistrationAgeCloseHandler()">
                            <span class="icon icon-android-close" aria-hidden="true"></span>
                        </button>
                        <span class="modal-header-text">Age Verification</span>
                    </div>
    
                    <div class="modal-body padding-20">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12">
                                <span>Please confirm the following:</span>
                            </div>
                            <div class="col-sm-12 col-xs-12">
                                <form>
                                    <div>
                                        <label>Enter Your Age</label>
                                        <div id="ageWrapper" class="age-wrapper">
                                            <input type="text" id="ageInput" maxlength="2" name="age" />
                                        </div>
                                    </div>
                                    <div>
                                        <label>Enter Your Zip Code</label>
                                        <div id="zipcodeWrapper" class="zipcode-wrapper">
                                            <input type="text" id="zipcodeInput" name="zipcode" />
                                        </div>
                                    </div>
                                    <input type="button" id="googleRegisterBtn" value="Submit" class="age-submit-btn" />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
}

$(document).on("click", "#googleRegisterBtn", function(e) {
    e.preventDefault();
    // console.log('click googleRegisterBtn--------------')
    googleRegistrationOnSubmitHandler();
})

let googleOneTapData = {};
let googleOneTapIDP = false;
let googleOneTapPrompt = false;
let googleRegistrationValidation = {
    age: false,
    zipcode: false
}

function GoogleOneTapCB(data) {
    console.log('GoogleOneTapCB');
    googleOneTapData = data;
    googleOneTapPrompt = false;
    if ($("#searchForMyselfCheckBoxRegForm")[0].checked) {
        googleOneTapIDP = true;
    } else {
        googleOneTapIDP = false;
    }
    $(".modal").remove();
    $("body").append(googleRegistrationModalContent());
    $("#googleRegistrationModal").addClass("show-modal");

    let googleObjTracking = {"googleOne_Profile_BackButton_ModalDisplay_AgeZip": true};
    if(_exitIntent) {
        googleObjTracking = {"googleOne_Profile_Exit_ModalDisplay_AgeZip": true};
    }

    let resp = _trackGoogleOneTap(googleObjTracking);
}

function GoogleOneTapCBPrompt(data) {
    console.log('GoogleOneTapCBPrompt');
    googleOneTapData = data;
    googleOneTapIDP = true;
    googleOneTapPrompt = true;
    _exitIntent = false;

    $(".modal").remove();
    $("body").append(googleRegistrationModalContent());
    $("#googleRegistrationModal").addClass("show-modal");

    let googleObjTracking = {"googleOne_Profile_AutoPop_ModalDisplay_AgeZip": true};
    let resp = _trackGoogleOneTap(googleObjTracking);
}

// function googleRegistrationValidateAge() {
//     const reg = new RegExp(/^((\d{1})|(\d{2})|(\d{3}))$/);
//     const elemWrapper = document.getElementById('ageWrapper');
//     const button = document.getElementById('googleRegisterBtn');
//     let targetValue = document.getElementById('ageInput').value;
//     console.log("googleRegistrationValidateAge",targetValue);
//     if (reg.test(targetValue) && parseInt(targetValue) >= 13 || targetValue.length === 0) {
//         googleRegistrationValidation.age = true;
//         elemWrapper.classList.remove('error');
//         if (targetValue.length === 0) {
//             button.setAttribute('disabled', '');
//         } else {
//             if (googleRegistrationValidation.age && googleRegistrationValidation.zipcode) {
//                 button.removeAttribute('disabled');
//             }
//         }
//         return true;
//     } else {
//         googleRegistrationValidation.age = false;
//         elemWrapper.classList.add('error');
//         button.setAttribute('disabled', '');
//         return false;
//     }
// }
//
// function googleRegistrationValidateZipcode() {
//     const reg = new RegExp(/^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/);
//     const elemWrapper = document.getElementById('zipcodeWrapper');
//     const button = document.getElementById('googleRegisterBtn');
//     let targetValue = document.getElementById('zipcodeInput').value;
//     console.log("googleRegistrationValidateZipcode",targetValue);
//     if (reg.test(targetValue) || targetValue.length === 0) {
//         googleRegistrationValidation.zipcode = true;
//         elemWrapper.classList.remove('error');
//         if (targetValue.length.length === 0) {
//             button.setAttribute('disabled', '');
//         } else {
//             if (googleRegistrationValidation.age && googleRegistrationValidation.zipcode) {
//                 button.removeAttribute('disabled');
//             }
//         }
//         return true;
//     } else {
//         googleRegistrationValidation.zipcode = false;
//         elemWrapper.classList.add('error');
//         button.setAttribute('disabled', '');
//         return false;
//     }
// }

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

function googleRegistrationAgeCloseHandler(){
    $(".modal").remove();
    if (typeof googleOneTapData != "undefined") {
        if (typeof googleOneTapData.credential != "undefined") {
            let obj = parseJwt(googleOneTapData.credential);
            RegisterGoogleOneTap(obj,false);
        } else {
            console.log("credential is not defined")
        }
    } else {
        console.log("credential is not defined")
    }

}

function googleRegistrationOnSubmitHandler() {
    console.log('googleRegistrationOnSubmitHandler---------')

    const button = document.getElementById('googleRegisterBtn');
    button.setAttribute('disabled', '');
    button.classList.add('disabled');

    const regZip = new RegExp(/^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/);
    const elemWrapperZip = document.getElementById('zipcodeWrapper');
    let zipcodeValue = document.getElementById('zipcodeInput').value;

    const regAge = new RegExp(/^((\d{1})|(\d{2})|(\d{3}))$/);
    const elemWrapperAge = document.getElementById('ageWrapper');
    let ageValue = document.getElementById('ageInput').value;

    if (regAge.test(ageValue) && parseInt(ageValue) >= 13) {
        elemWrapperAge.classList.remove('error');
    } else {
        elemWrapperAge.classList.add('error');
    }

    if (regZip.test(zipcodeValue)) {
        elemWrapperZip.classList.remove('error');
    } else {
        elemWrapperZip.classList.add('error');
    }

    if (regAge.test(ageValue) && ageValue.length != 0 && parseInt(ageValue) >= 13 && regZip.test(zipcodeValue) && zipcodeValue != 0) {
        if (typeof googleOneTapData != "undefined") {
            if (typeof googleOneTapData.credential != "undefined") {
                let obj = parseJwt(googleOneTapData.credential);
                obj.age = ageValue;
                obj.zipcode = zipcodeValue;
                RegisterGoogleOneTap(obj, true);
            } else {
                $(".modal").remove();
                console.log("credential is not defined")
                // button.removeAttribute('disabled');
                // button.classList.remove('disabled');
            }
        } else {
            $(".modal").remove();
            console.log("credential is not defined")
            // button.removeAttribute('disabled');
            // button.classList.remove('disabled');
        }
    } else {
        button.removeAttribute('disabled');
        button.classList.remove('disabled');
    }
}

function RegisterGoogleOneTap(data,bool) {
    // console.log('RegisterGoogleOneTap',data,bool);
    let acceptAge = bool || false;
    let registerUrl = (acceptAge) ? "/puser.v1/pub/registration" : "/puser.v1/pub/registration/vendorMktRegRetry";
    let payload = {};

    if (acceptAge) {
        let d = new Date();
        let birthdayYear = d.getFullYear() - data.age;
        payload = {
            "firstname": data.given_name,
            "lastname": data.family_name,
            "email": data.email,
            "campaignId": "645",
            "activityTypeString": "",
            "activityTypeObject": "",
            "whyReg": "",
            "birthdayMonth": "1",
            "birthdayDay": "1",
            "birthdayYear" : birthdayYear.toString(),
            "age": data.age,
            "zip": data.zipcode //"99999"
        }
        if(data.picture) {
            payload.pictureURL = data.picture;
        }
    } else {
        payload = {
            "emailAddress": data.email,
            "firstName": data.given_name,
            "lastName": data.family_name,
            "vendor": "Google One",
            "vendorUserID": data.sub
        }
    }

    // console.log('RegisterGoogleOneTap payload',payload);

    fetch(registerUrl, {
        body: JSON.stringify(payload),
        cache: "no-cache",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        let resp = "";

        let googleObjTracking = {"googleOne_Profile_BackButton_ModalDisplay_AgeZip_RegComplete": true};
        let googleObjDeclineTracking = {"googleOne_Profile_BackButton_ModalDisplay_Decline": true};

        if (_exitIntent) {
            googleObjTracking = {"googleOne_Profile_Exit_ModalDisplay_AgeZip_RegComplete": true};
            googleObjDeclineTracking = {"googleOne_Profile_Exit_ModalDisplay_Decline": true};
        }

        if (googleOneTapPrompt) {
            googleObjTracking = {"googleOne_Profile_AutoPop_ModalDisplay_AgeZip_RegComplete": true};
            googleObjDeclineTracking = {"googleOne_Profile_AutoPop_ModalDisplay_Decline": true};
        }

        if (acceptAge) {

            resp = _trackGoogleOneTap(googleObjTracking).then(res => {
                try {
                    setCookie('googleOneRegNew', '1', '', '/');
                    if (googleOneTapIDP) {
                        setTimeout(function() {
                            window.location = "/site/ob/init/identity-premium.view";
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            window.location = "/site/ob/init/ps-bgc.view?epid=" + stateProfile.profileState.revieweeEpid;
                        }, 1500);
                    }

                } catch (err) {
                    console.log(err)
                }
            });
        } else {
            resp = _trackGoogleOneTap(googleObjDeclineTracking);
        }
    }).catch(err => {
        console.log("err",err);
    })
}

function onClickHandlerGoogleOneTap() {
    console.log('onClickHandlerGoogleOneTap');
    return true;
}


function InitRenderGoogleOneTap() {
    console.log("InitRenderGoogleOneTap-------------------------");
    // window.onload = function () {
    try {
        // if (typeof google != 'undefined' && typeof enableGoogleOneTap != 'undefined') {
        if (typeof google != 'undefined') {
            const GoogleOneTapId = '519313631716-hhtj5b9d9duurdgkm5sd57g4tbp9q77f.apps.googleusercontent.com';

            google.accounts.id.initialize({
                client_id: GoogleOneTapId,
                callback: GoogleOneTapCB
            });

            let googleTrackingOpts = {"googleOne_Profile_BackButton_RenderButton":true};

            if (_exitIntent) {
                googleTrackingOpts = {"googleOne_Profile_Exit_RenderButton":true};
            }

            let googleOpts = {
                theme: "filled_blue",
                size: "large",
                width: 400,
                click_listener: onClickHandlerGoogleOneTap
            }

            if (isMobileBrowser()) {
                googleOpts = {
                    theme: "filled_blue",
                    size: "large",
                    click_listener: onClickHandlerGoogleOneTap
                }
            }

            google.accounts.id.renderButton(
                document.getElementById("googleButtonDiv"),
                googleOpts  // customization attributes
            );

            let resp = _trackGoogleOneTap(googleTrackingOpts);
        }
    } catch (error) {
        console.error(error);
    }
}

function InitGoogleOneTap() {
    console.log("InitGoogleOneTap-------------------------");
    // window.onload = function () {
    try {
        // if (typeof google != 'undefined' && typeof enableGoogleOneTap != 'undefined') {
        if (typeof google != 'undefined') {
            const GoogleOneTapId = '519313631716-hhtj5b9d9duurdgkm5sd57g4tbp9q77f.apps.googleusercontent.com';

            google.accounts.id.initialize({
                client_id: GoogleOneTapId,
                callback: GoogleOneTapCBPrompt
            });

            google.accounts.id.prompt(notification => {
                // console.log('notification',notification);
                let resp = "";
                if (notification.isDisplayed()) {
                    // console.log('its display');
                    //call tracking is display
                    resp = _trackGoogleOneTap({ "googleOne_Profile_AutoPop_RenderPrompt": true })
                }

                // if (notification.isDisplayMoment()) {
                //     console.log('its display for moment');
                // }

                if(notification.isNotDisplayed()) {
                    console.log('is not displayed - ', notification.getNotDisplayedReason());
                    resp = _trackGoogleOneTap({ "googleOne_Profile_NotDisplayed_RenderPrompt": true });
                } else if (notification.isSkippedMoment()) {
                    console.log('is skipped  - ', notification.getSkippedReason());
                    resp = _trackGoogleOneTap({ "googleOne_Profile_Skipped_RenderPrompt": true });
                    //call tracking is skipped - click outside
                } else if (notification.isDismissedMoment()) {
                    console.log('is dismissed - ', notification.getDismissedReason());
                    if (notification.getDismissedReason() != "credential_returned") {
                        resp = _trackGoogleOneTap({ "googleOne_Profile_Dismissed_RenderPrompt": true });
                    }
                }
            })

        }
    } catch (error) {
        console.error(error);
    }
}

function _trackGoogleOneTap(objParam) {
    // console.log("_trackGoogleOneTap",objParam);
    let ptrackUrl = "/ptrack.v1/pub/vtrack/1";
    let obj = objParam;
    return fetch(ptrackUrl, {
            body: JSON.stringify(obj),
            cache: "no-cache",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }
    );
}

function _trackRegModal(objParam) {
    // console.log("_trackGoogleOneTap",objParam);
    let ptrackUrl = "/ptrack.v1/pub/vtrack/1";
    let obj = objParam;
    return fetch(ptrackUrl, {
            body: JSON.stringify(obj),
            cache: "no-cache",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }
    );
}

// Google Registration Modal end

// Registration Modal
function registrationModalContent() {
    return `
    <div class="modal register-modal" id="registrationModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-header-text">Lock Your Information</h3>
                    <button type="button" class="close close-btn">
                        <i class="icon-android-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="registration-message">
                    </div>
                    <form class="modal-form" id="mini-reg-form"  action="/update-and-match.pubview" method="post">
                        <input type="hidden" name="pubDataProfileAge" id="pubDataProfileAge4" value="${$("#pubDataProfileAge4").val()}" />
                        <input type="hidden" name="pubDataBirthdayYear" id="pubDataBirthdayYear4" value="${$("#pubDataBirthdayYear4").val()}" />
                        <input type="hidden" name="pubDataFirstName" id="pubDataFirstName4" value="${$("#pubDataFirstName4").val()}">
                        <input type="hidden" name="pubDataLastName" id="pubDataLastName4" value="${$("#pubDataLastName4").val()}">
                        <input type="hidden" name="pubDataState" id="pubDataState4" value="${$("#pubDataState4").val()}">
                        <input type="hidden" name="pubDataCity" id="pubDataCity4" value="${$("#pubDataCity4").val()}">
                        <input type="hidden" name="pubDataZipCode" id="pubDataZipCode4" value="${$("#pubDataZipCode4").val()}">
                        <input type="hidden" name="signedOutRevReq" value="0" id="signedOutRevReq">
                        <input type="hidden" name="pathway" value="identity">
                        <input type="hidden" name="vertical" value="Name Search">
                        <input type="hidden" name="fromPub" value="1">
                        <input type="hidden" name="whyReg" id="whyReg4" value="idp_profile_locking"> <!--send message:identity-take-control lock data;idp_profile_locking-->
                        <input type="hidden" name="whySub" id="whySub4" value="Identity">
                        <input type="hidden" name="ab_cid" value="seoIdentityReg">
                        <input type="hidden" name="skipToRedirect" value="/site/ob/init/prr.view">
                        <input type="hidden" name="regIntent" value="">
                        <input type="hidden" name="publicPageURL" value="">
                        <input type="hidden" name="usernum" value="" id="usernum">
                        <input type="hidden" name="isMessage" value=""> <!-- make the value true if registartion is coming from send message -->
                        <input type="hidden" name="body" value=""> <!-- populate this from form  message -->
                        <input type="hidden" name="subject" value="">
                        <input type="hidden" name="toUserNum" value="${$("#toUserNum").val()}">
                        <input type="hidden" name="toAdl" value="${$("#toAdl").val()}">
                        <input type="hidden" name="pubProfileUrl" value="${$("#pubProfileUrl").val()}">
                        <input type="hidden" name="history" value="Unknown">
                        <input type="hidden" name="addToAddressBook" value="false">
                        <input type="hidden" name="send" value="Send Message">
                        <input type="hidden" name="existingMessage" value="false">
                        <input type="hidden" name="id" value="-1">
                        <input type="hidden" name="facebookReg" value="false">
                        <input type="hidden" name="inAddressBook" value="false">
                        <input type="hidden" name="dating">
                        <input type="hidden" name="emailParameter">
                        <input type="hidden" name="messagetype">
                        <input type="hidden" id="birthdayMonth4" name="birthdayMonth" value="1">
                        <input type="hidden" id="birthdayDay4" name="birthdayDay" value="1">
                        <input type="hidden" id="birthdayYear4" name="birthdayYear" value="">
                        <input type="hidden" name="matchAdl" value="">
    
                        <div class="form-control-div full-name">
                            <input type="text" placeholder="First Name" name="firstName" data-registration="input"/>
                            <input type="text" placeholder="Last Name" name="lastName"  data-registration="input"/>
                        </div>
                        <div class="form-control-div zip-age">
                            <input type="number" min="0" placeholder="Zipcode" name="zip" data-registration="input"/>
                            <input type="number" min="0" placeholder="Age" name="age" data-registration="input"/>
                        </div>
                        <div class="form-control-div domain">
                            <input type="email" placeholder="name@domain.com" name="email"  data-registration="input"/>
                        </div>
                        <div class="form-control-checkbox">
    
                        </div>
                        <button type="submit" id="registerBtn" class="btn secondary-view-btn  primary-btn-disabled submit-btn">Show Reputation Report</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <div class="footer-section">
                        <p class="footer-eula">
                            By clicking on the button above, you agree to MyLife's  <a href="https://www.mylife.com/user-agreement" target="_blank">User Agreement</a> and <a href="https://www.mylife.com/privacy-policy" target="_blank">Privacy Policy</a>.
                        </p>
                    </div>
                    <div class="footer-section">
                        <img class="registration-secure-logos" alt="McAfee and VeriSign"
                             src="/static/websat-profile/global/img/wizard-secure-logos-2.png" loading="lazy"/>
                    </div>
                    <div class="footer-section">
                        <p>We protect your personal information.
                            <br />We'll never share it with anyone without your permission.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

// Registration Modal
function registrationModalContentV2(className) {
    return `
    <div class="modal register-modal ${className}" id="registrationModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-header-text">Lock Your Information</h3>
                    <button type="button" class="close close-btn">
                        <i class="icon-android-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="registration-message">
                    </div>
                    <form class="modal-form" id="mini-reg-form"  action="/update-and-match.pubview" method="post">
                        <input type="hidden" name="pubDataProfileAge" id="pubDataProfileAge4" value="${$("#pubDataProfileAge4").val()}" />
                        <input type="hidden" name="pubDataBirthdayYear" id="pubDataBirthdayYear4" value="${$("#pubDataBirthdayYear4").val()}" />
                        <input type="hidden" name="pubDataFirstName" id="pubDataFirstName4" value="${$("#pubDataFirstName4").val()}">
                        <input type="hidden" name="pubDataLastName" id="pubDataLastName4" value="${$("#pubDataLastName4").val()}">
                        <input type="hidden" name="pubDataState" id="pubDataState4" value="${$("#pubDataState4").val()}">
                        <input type="hidden" name="pubDataCity" id="pubDataCity4" value="${$("#pubDataCity4").val()}">
                        <input type="hidden" name="pubDataZipCode" id="pubDataZipCode4" value="${$("#pubDataZipCode4").val()}">
                        <input type="hidden" name="signedOutRevReq" value="0" id="signedOutRevReq">
                        <input type="hidden" name="pathway" value="identity">
                        <input type="hidden" name="vertical" value="Name Search">
                        <input type="hidden" name="fromPub" value="1">
                        <input type="hidden" name="whyReg" id="whyReg4" value="idp_profile_locking"> <!--send message:identity-take-control lock data;idp_profile_locking-->
                        <input type="hidden" name="whySub" id="whySub4" value="Identity">
                        <input type="hidden" name="ab_cid" value="seoIdentityReg">
                        <input type="hidden" name="skipToRedirect" value="/site/ob/init/prr.view">
                        <input type="hidden" name="regIntent" value="">
                        <input type="hidden" name="publicPageURL" value="">
                        <input type="hidden" name="usernum" value="" id="usernum">
                        <input type="hidden" name="isMessage" value=""> <!-- make the value true if registartion is coming from send message -->
                        <input type="hidden" name="body" value=""> <!-- populate this from form  message -->
                        <input type="hidden" name="subject" value="">
                        <input type="hidden" name="toUserNum" value="${$("#toUserNum").val()}">
                        <input type="hidden" name="toAdl" value="${$("#toAdl").val()}">
                        <input type="hidden" name="pubProfileUrl" value="${$("#pubProfileUrl").val()}">
                        <input type="hidden" name="history" value="Unknown">
                        <input type="hidden" name="addToAddressBook" value="false">
                        <input type="hidden" name="send" value="Send Message">
                        <input type="hidden" name="existingMessage" value="false">
                        <input type="hidden" name="id" value="-1">
                        <input type="hidden" name="facebookReg" value="false">
                        <input type="hidden" name="inAddressBook" value="false">
                        <input type="hidden" name="dating">
                        <input type="hidden" name="emailParameter">
                        <input type="hidden" name="messagetype">
                        <input type="hidden" id="birthdayMonth4" name="birthdayMonth" value="1">
                        <input type="hidden" id="birthdayDay4" name="birthdayDay" value="1">
                        <input type="hidden" id="birthdayYear4" name="birthdayYear" value="">
                        <input type="hidden" name="matchAdl" value="">
    
                        <div class="form-control-div full-name">
                            <input type="text" placeholder="First Name" name="firstName" data-registration="input"/>
                            <input type="text" placeholder="Last Name" name="lastName"  data-registration="input"/>
                        </div>
                        <div class="form-control-div zip-age">
                            <input type="number" min="0" placeholder="Zipcode" name="zip" data-registration="input"/>
                            <input type="number" min="0" placeholder="Age" name="age" data-registration="input"/>
                        </div>
                        <div class="form-control-div domain">
                            <input type="email" placeholder="name@domain.com" name="email"  data-registration="input"/>
                        </div>
                        <div class="form-control-checkbox">
    
                        </div>
                        <button type="submit" id="registerBtn" class="btn secondary-view-btn  primary-btn-disabled submit-btn">Show Reputation Report</button>
                    </form>
                    
                </div>
                <div class="modal-footer">
                    <div class="footer-section">
                        <p class="footer-eula">
                            By clicking on the button above, you agree to MyLife's  <a href="https://www.mylife.com/user-agreement" target="_blank">User Agreement</a> and <a href="https://www.mylife.com/privacy-policy" target="_blank">Privacy Policy</a>.
                        </p>
                    </div>
                    <div class="footer-section">
                        <img class="registration-secure-logos" alt="McAfee and VeriSign"
                             src="/static/websat-profile/global/img/wizard-secure-logos-2.png" loading="lazy"/>
                    </div>
                    <div class="footer-section">
                        <p>We protect your personal information.
                            <br />We'll never share it with anyone without your permission.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

$(document).on("click", "#registerBtn", function(e) {
    e.preventDefault();

    if ($("#searchForMyselfCheckBoxRegForm")[0].checked == true && stateProfile.registerState.whyReg4 == "PS_VIEW_PROFILE") {
        stateProfile.registerState.whyReg4 = "IDP_VIEW_PROFILE";
    }

    if ($("#searchForMyselfCheckBoxRegForm")[0].checked == false && stateProfile.registerState.whyReg4 == "IDP_VIEW_PROFILE") {
        stateProfile.registerState.whyReg4 = "PS_VIEW_PROFILE";
    }

    let postData = "/json/matchingReg?" +
        "fromPub=Y" +//nocahnge
        "&whyReg=" + stateProfile.registerState.whyReg4 + "-profile-modal" +
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

                try {
                    console.log('mini-reg-form track submit');
                    let _whyReg4 = stateProfile.registerState.whyReg4 || "";
                    console.log('_whyReg4', _whyReg4)
                    switch (_whyReg4) {
                        case "IDP_VIEW_PROFILE":
                            if (!_exitIntent) {
                                _trackRegModal({ eventName:"showRegModalBackButtonSubmit" });
                            } else {
                                 _trackRegModal({ eventName:"showRegModalExitSubmit" });
                            }
                            break;
                        case "PS_VIEW_PROFILE":
                            if (!_exitIntent) {
                                _trackRegModal({ eventName:"showRegModalBackButtonSubmit" });
                            } else {
                                _trackRegModal({ eventName:"showRegModalExitSubmit" });
                            }
                            break;
                        case "idp_profile_locking":
                            _trackRegModal({ eventName:"showRegModalIdpProfileLockingSubmit" });
                            break;
                        case "identity-take-control":
                            _trackRegModal({ eventName:"showRegModalSendMessageSubmit" });
                            break;
                        case "":
                            _trackRegModal({ eventName:"showRegModalSubmitReviewSubmit" });
                            break;
                        default:
                    }
                } catch(err) {
                    console.log('err', err);
                }

                if (stateProfile.registerState.whyReg4 == "idp_profile_locking") {
                    window.location = "/idp-match-process.view?bypassMatching=true&redirectURL=/site/prr-purchase.view%3Fwhysub%3D" + stateProfile.registerState.whyReg4;
                    // } else if (isItMePMKT) {
                    //     window.location = "/"
                    // } else if (stateProfile.registerState.whyReg4 == "PS_PMKT" && this.context.registrationData.paidMarketingCookie == "true") {
                    //     location.reload();
                    // } else if (isItMe) {
                    //     window.location = "/site/ob/init/prr.view"
                } else if (stateProfile.registerState.whyReg4 == "PS_VIEW_PROFILE") {
                    // window.location = "/site/bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                    window.location = "/site/ob/init/ps-bgc.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                } else if (stateProfile.registerState.whyReg4 == "IDP_VIEW_PROFILE") {
                    setTimeout(function() {
                        window.location = "/site/ob/init/identity-premium.view";
                    }, 1500);
                    // setTimeout(function () {
                    //     window.location = "/site/idp-bgc-purchase.view?epid=" + stateProfile.profileState.revieweeEpid + "&e=" + stateProfile.registerState.email;
                    // }, 1500);
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
// Lock and Unlock Modal

function lockInfoModalContent(lock) {
    return `
  <div class="modal lock-modal show-modal" id="lockInfoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-header-text text-white">
              Control Your Reputation Score
            </h3>
            <button type="button" class="close close-btn">
              <i class="icon-android-close"></i>
            </button>
          </div>
          <div class="modal-body">
            <h3 class="body-header">Lock Sections & Control Access</h3>
            <p class="body-subheader">
              We recommend keeping your Reputation Score public, so you can take advantage of opportunities when others search for you. But if you need additional control you can lock sections of your Report like you can lock your credit report, requiring others to first request access.
            </p>
            <div class="row">
              <div class="col-1">
                <div class="lock-modal-title">Categories</div>
                <div class="lock-label-container">
                  <div class="lock-label">Bio</div>
                  <div class="lock-sublabel">Birthday, Age, Net Worth</div>
                </div>
                <div class="lock-label-container">
                  <div class="lock-label">Family & Friends</div>
                  <div class="lock-sublabel">
                    Relatives, Neighbors & Classmates
                  </div>
                </div>
                <div class="lock-label-container">
                  <div class="lock-label">Photos</div>
                  <div class="lock-sublabel">Posted by you & others</div>
                </div>
                <div class="lock-label-container">
                  <div class="lock-label">Contact Info</div>
                  <div class="lock-sublabel">Phone, Address & Email</div>
                </div>
                <div class="lock-label-container">
                  <div class="lock-label">Court & Arrest Records</div>
                  <div class="lock-sublabel">
                    Court, Arrest, Lawsuits, Liens, Bankruptcies, and
                    Sex Offender Status
                  </div>
                </div>
                <div class="lock-label-container">
                  <div class="lock-label">Reviews</div>
                  <div class="lock-sublabel">
                    Personal, Professional, and Dating Reviews
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="lock-modal-title">Lock your Information:</div>
                <div class="lock-modal-title mobile">Info Settings:</div>
    
                <div class="lock-switch-container ${lock.isLockCourtDetails} lock-switch-details lock-modal-btn" data-switch="ABOUT">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div>
                <div class="lock-switch-container ${lock.isLockCourtFamily} lock-modal-btn" data-switch="FAMILY_AND_FRIENDS">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div>
                <div class="lock-switch-container ${lock.isLockCourtPhotos} lock-modal-btn" data-switch="PHOTOS_AND_SOCIAL_POSTS">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div>
                <div class="lock-switch-container ${lock.isLockCourtAddressPropertyContact} lock-modal-btn" data-switch="CONTACT_INFO">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div>
                <div class="lock-switch-container ${lock.isLockCourtArrest} lock-modal-btn" data-switch="COURT_AND_ARREST_RECORDS">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div>
                <div class="lock-switch-container ${lock.isLockCourtReviewRating} lock-modal-btn" data-switch="REVIEWS_AND_RATINGS">
                  <div class="lock-switch-tooltip">
                    This section can be locked, requiring permission to view.
                  </div>
                  <span class="public-container">
                    <i class="flaticon-lock"></i>
                    <span>Public</span>
                  </span>
                  <span class="toggle-container lock-info" id="reviewRating">
                    <span class="toggle-btn round"></span>
                  </span>
                  <span class="private-container">
                    <i class="flaticon-lock-1"></i>
                    <span>Private</span>
                  </span>
                </div data-switch="PHOTOS_AND_SOCIAL_POSTS">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="update-setting-btn" id="update-setting-btn">
              Save My Updated Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProcessLockInfoModal(lockClass) {
    switch (lockClass) {
        case "COURT_AND_ARREST_RECORDS":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    COURT_AND_ARREST_RECORDS: !stateProfile.lockUnlock.COURT_AND_ARREST_RECORDS
                }
            }
            break;
        case "REVIEWS_AND_RATINGS":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    REVIEWS_AND_RATINGS: !stateProfile.lockUnlock.REVIEWS_AND_RATINGS
                }
            }
            break;
        case "CONTACT_INFO":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    CONTACT_INFO: !stateProfile.lockUnlock.CONTACT_INFO
                }
            }
            break;
        case "ABOUT":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    ABOUT: !stateProfile.lockUnlock.ABOUT
                }
            }
            break;
        case "FAMILY_AND_FRIENDS":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    FAMILY_AND_FRIENDS: !stateProfile.lockUnlock.FAMILY_AND_FRIENDS
                }
            }
            break;
        case "PHOTOS_AND_SOCIAL_POSTS":
            stateProfile = {
                ...stateProfile,
                lockUnlock: {
                    ...stateProfile.lockUnlock,
                    PHOTOS_AND_SOCIAL_POSTS: !stateProfile.lockUnlock.PHOTOS_AND_SOCIAL_POSTS
                }
            }
            break;
        default:
            break;
    }

    const isLockCourtArrest = stateProfile.lockUnlock.COURT_AND_ARREST_RECORDS ? "private" : "public";
    const isLockCourtReviewRating = stateProfile.lockUnlock.REVIEWS_AND_RATINGS ? "private" : "public";
    const isLockCourtAddressPropertyContact = stateProfile.lockUnlock.CONTACT_INFO
        ? "private"
        : "public";
    const isLockCourtDetails = stateProfile.lockUnlock.ABOUT ? "private" : "public";
    const isLockCourtFamily = stateProfile.lockUnlock.FAMILY_AND_FRIENDS ? "private" : "public";
    const isLockCourtPhotos = stateProfile.lockUnlock.PHOTOS_AND_SOCIAL_POSTS ? "private" : "public";

    const lock = {
        isLockCourtArrest,
        isLockCourtReviewRating,
        isLockCourtAddressPropertyContact,
        isLockCourtDetails,
        isLockCourtFamily,
        isLockCourtPhotos
    }
    return lockInfoModalContent(lock);
}

function lockUnlockModalRequest(paramQuery, switchStatus) {
    const PPROFTEDIT_API_URI = $("#pprofileEditApiUri").val();
    const profileId = $("#epid").val();


    fetch(PPROFTEDIT_API_URI + '/pub/profedit/edits/' + 'CADILLAC' + '/' + profileId + '/PROFILE_LOCKED/' + paramQuery, {
        method: (switchStatus ? 'PUT' : 'DELETE'),
    }).then(response => response.json());
}

$(document).on("click", "#update-setting-btn", function () {
    // Remove Current Open Modal
    $(".modal").remove();
    // Append Registration Modal
    $("body").append(registrationModalContent());

    //populate fields on registration form
    stateProfile = {
        ...stateProfile,
        registerState: {
            ...stateProfile.registerState,
            firstName: stateProfile.defaultRegisterState.firstName,
            lastName: stateProfile.defaultRegisterState.lastName,
            zip: stateProfile.defaultRegisterState.zip,
            age: stateProfile.defaultRegisterState.age,
            email: stateProfile.defaultRegisterState.email,
            simpleMessage: ""
        }
    }

    $("#registrationModal input[name='firstName']").val(stateProfile.registerState.firstName)
    $("#registrationModal input[name='lastName']").val(stateProfile.registerState.lastName)
    $("#registrationModal input[name='age']").val(stateProfile.registerState.age)
    $("#registrationModal input[name='zip']").val(stateProfile.registerState.zip)
    $("#registrationModal input[name='email']").val(stateProfile.registerState.email)

    $("#mini-reg-form input[name='isMessage']").val("");
    $("#mini-reg-form input[name='whyReg']").val("idp_profile_locking");
    //Open Registration modal form through locking profile
    $(".modal-result").html("");

    $("#registrationModal h3.modal-header-text").text("Lock Your Information");
    $(".registration-message").html(lockProfileRegOverlay())
    $("#registrationModal").addClass("show-modal")

    signUpFieldValidation();

    _trackRegModal({ eventName:"showRegModalIdpProfileLocking" })
})

// Reviews Modal
function reviewModalContent() {
    return `
    <div class="modal improve-modal show-modal" id="improveModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-header-text text-black">Review & Rate ${$("#firstName").val()}</h3>
                    <button class="close close-btn">
                        <i class="icon-android-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Share your opinion & let everyone know why they're wonderful, or why they're not. Be thoughtful, considerate, & helpful. And ask others to review you.</p>
                    <div class="review-selection-tab">
                        <div class="select-container">
                            <span>Type of Review</span>
                            <!--<div class="arrow arrow-down"></div>-->
                            <select name="review-type" id="review-type" class="qualities-tab">
                                <!--<option value="personal" data-index="0">Type of Review</option>-->
                                <option value="personal" data-index="0">Personal</option>
                                <option value="professional" data-index="1">Professional</option>
                                <option value="dating" data-index="2">Dating</option>
                            </select>
                        </div>
                    </div>
                    <div class="qualities-tags">
                        <div class="qualities-btn-container personal-tab" data-tab="personal-tab">
                            <div class="btn-positive-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-positive">
                                    <div>
                                        <i class="flaticon-like"></i>
                                        <span>Good Reviews
                                        <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler positive">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags">
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="beFriends" data-key_tag="personal">+ I Would Be Friends</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="smart" data-key_tag="personal">+ Smart</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="loyal" data-key_tag="personal">+ Loyal</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="honest" data-key_tag="personal">+ Honest</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="goodListener" data-key_tag="personal">+ Good Listener</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="humble" data-key_tag="personal">+ Humble</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="generous" data-key_tag="personal">+ Generous</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="fun" data-key_tag="personal">+ Fun</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="easyGoing" data-key_tag="personal">+ Easy Going</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="optimistic" data-key_tag="personal">+ Optimistic</button>
                                    <button class="btn-tag btn-positive-tag btn-personal-tag" data-value_tag="kind" data-key_tag="personal">+ Kind</button>
                                </div>
                            </div>
                            <div class="btn-negative-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-negative">
                                    <div>
                                        <i class="flaticon-thumb-down"></i>
                                        <span>Bad Reviews
                                            <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler negative">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags hidden">
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="unintelligent" data-key_tag="personal">- Unintelligent</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="disloyal" data-key_tag="personal">- Disloyal</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="dishonest" data-key_tag="personal">- Dishonest</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="undependable" data-key_tag="personal">- Undependable</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="conceited" data-key_tag="personal">- conceited</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="cheap" data-key_tag="personal">- Cheap</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="dull" data-key_tag="personal">- Dull</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="uptight" data-key_tag="personal">- Uptight</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="pessimistic" data-key_tag="personal">- Pessimistic</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="cruel" data-key_tag="personal">- Cruel</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="boring" data-key_tag="personal">- Boring</button>
                                    <button class="btn-tag btn-negative-tag btn-personal-tag" data-value_tag="notBeFriends" data-key_tag="personal">- I Would Not Be Friends With <span>${$("#firstName").val()}</span></button>
                                </div>
                            </div>
                            <textarea name="personalComment" class="hidden" id="personal-comment" placeholder="Post your Comment Here"></textarea>
                        </div>
                        <div class="qualities-btn-container professional-tab hidden" data-tab="professional-tab">
                            <div class="btn-positive-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-positive">
                                    <div>
                                        <i class="flaticon-like"></i>
                                        <span>Good Reviews
                                        <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler positive">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags">
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="responsible" data-key_tag="professional">+ Responsible</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="hardWorking" data-key_tag="professional">+ Hardworking</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="intelligent" data-key_tag="professional">+ Intelligent</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="collaborative" data-key_tag="professional">+ Collaborative</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="creative" data-key_tag="professional">+ Creative</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="resourceful" data-key_tag="professional">+ Resourceful</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="motivated" data-key_tag="professional">+ Motivated</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="flexible" data-key_tag="professional">+ Flexible</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="ambitious" data-key_tag="professional">+ Ambitious</button>
                                    <button class="btn-tag btn-positive-tag btn-professional-tag" data-value_tag="articulate" data-key_tag="professional">+ Articulate</button>
                                </div>
                            </div>
                            <div class="btn-negative-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-negative">
                                    <div>
                                        <i class="flaticon-thumb-down"></i>
                                        <span>Bad Reviews
                                            <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler negative">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags hidden">
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="undependable" data-key_tag="professional">- Undependable</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="lazy" data-key_tag="professional">- Lazy</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="not smart" data-key_tag="professional">- Not Smart</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="not collaborative" data-key_tag="professional">- Not Collaborative</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="unimaginative" data-key_tag="professional">- Unimaginative</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="passive" data-key_tag="professional">- Passive</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="unmotivated" data-key_tag="professional">- Unmotivated</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="inflexible" data-key_tag="professional">- Inflexible</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="unambitious" data-key_tag="professional">- Unambitious</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="incoherent" data-key_tag="professional">- Incoherent</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="needs supervision" data-key_tag="professional">- Needs Supervision</button>
                                    <button class="btn-tag btn-negative-tag btn-professional-tag" data-value_tag="wouldNotWork" data-key_tag="professional">- I Would Not Work With <span>${$("#firstName").val()}</span></button>
                                </div>
                            </div>
                            <textarea name="personalComment" class="hidden" id="professional-comment" placeholder="Post your Comment Here"></textarea>
                        </div>
                        <div class="qualities-btn-container dating-tab hidden" data-tab="dating-tab">
                            <div class="btn-positive-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-positive">
                                    <div>
                                        <i class="flaticon-like"></i>
                                        <span>Good Reviews
                                            <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler positive">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags">
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="faithful" data-key_tag="dating">+ Faithful</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="respectful" data-key_tag="dating">+ Respectful</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="understanding" data-key_tag="dating">+ Understanding</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="funny" data-key_tag="dating">+ Funny</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="romantic" data-key_tag="dating">+ Romantic</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="sexy" data-key_tag="dating">+ Sexy</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="smart" data-key_tag="dating">+ Smart</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="passionate" data-key_tag="dating">+ Passionate</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="goodLooking" data-key_tag="dating">+ Good Looking</button>
                                    <button class="btn-tag btn-positive-tag btn-dating-tag" data-value_tag="goodListener" data-key_tag="dating">+ Good Listener</button>
                                </div>
                            </div>
                            <div class="btn-negative-tags btn-tags-wrapper">
                                <div class="tags-header tags-header-negative">
                                    <div>
                                        <i class="flaticon-thumb-down"></i>
                                        <span>Bad Reviews
                                            <span>(Choose qualities that describe them)</span>
                                        </span>
                                    </div>
                                    <div class="tags-header-toggler negative">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="btn-tags hidden">
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="unfaithful" data-key_tag="dating">- unfaithful</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="Disrespectful" data-key_tag="dating">- Disrespectful</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="self-centered" data-key_tag="dating">- Self-Centered</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="cold" data-key_tag="dating">- Cold</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="boring" data-key_tag="dating">- Boring</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="unsexy" data-key_tag="dating">- Unsexy</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="not smart" data-key_tag="dating">- Not Smart</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="Bad kisser" data-key_tag="dating">- Bad Kisser</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="Unattractive" data-key_tag="dating">- Unattractive</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="neglectful" data-key_tag="dating">- Neglectful</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag" data-value_tag="dishonest" data-key_tag="dating">- Dishonest</button>
                                    <button class="btn-tag btn-negative-tag btn-dating-tag trigger-tag" data-value_tag="wouldNotDate" data-key_tag="dating">- I Would Not Date <span>${$("#firstName").val()}</span></button>
                                </div>
                            </div>
                            <textarea name="personalComment" class="hidden" id="dating-comment" placeholder="Post your Comment Here"></textarea>
                        </div>
                    </div>
                    <div class="review-selection-tab-2">
                        <div class="select-container">
                                <span>Relationship to ${$("#firstName").val()}</span>
                                <!--<div class="arrow arrow-down"></div>-->
                                <select class="knownModalSelect" name="knownModalSelect" id="knownModalSelect">
                                    <option value="Friend">Friend</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Dating">Dating</option>
                                    <option value="Family Member">Family Member</option>
                                    <option value="Neighbor">Neighbor</option>
                                    <option value="School">School</option>
                                    <option value="Club or Organization">Club or Organization</option>
                                    <option value="Religious">Religious</option>
                                    <option value="Myself">Myself</option>
                                    <option value="Not Sure">Not Sure</option>
                                    <option value="Don't Know Them">Don't Know Them</option>
                                    <option value="Other">Other</option>
                                </select>
                        </div>
                        <div class="anonymous-content">
                            <div class="checkbox">
                                <input type="checkbox" name="anonymousComment" id="postAnonymous">
                                <label for="postAnonymous"></label>
                            </div>
                            <p>Post Anonymously</p>
                            <div class="tooltip">
                                <span class="icon icon-help-circled"></span>
                                <span class="tooltip-text">If you post anonymously you will not receive alerts when someone comments on your post.</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn primary-view-btn btn-post-review" id="submitReview">Post Review</button>
                </div>
                <div class="modal-footer">
                    <p>You are responsible for your submissions, which must be true, lawful and not violate any person's rights. You agree to our
                        <a href="https://www.mylife.com/user-agreement" rel="nofollow">User Agreement.</a></p>
                </div>
            </div>
        </div>
    </div>
    `
}

function changeReviewTab() {
    $("#review-type").on("change", function (e) {
        const tabTypeIndex = $(this).find(":selected").data("index");

        $(".qualities-btn-container").each(function (index, el) {
            $(this).addClass("hidden");

            if (parseInt(tabTypeIndex) == index) {
                $(this).removeClass("hidden")
            }
        })


    })
}

/* Review accordion here  */
function accordionReviews(btn) {

    if (btn.classList.contains("review-thumb-down")) {
        $(".qualities-btn-container .btn-positive-tags .tags-header-positive .tags-header-toggler").addClass("open")
        $(".qualities-btn-container .btn-positive-tags").addClass("hidden")
        $(".qualities-btn-container .btn-negative-tags .tags-header-negative .tags-header-toggler").removeClass("open")
        $(".qualities-btn-container .btn-negative-tags").removeClass("hidden")
    } else {
        $(".qualities-btn-container .btn-positive-tags .tags-header-positive .tags-header-toggler").removeClass("open")
        $(".qualities-btn-container .btn-positive-tags").removeClass("hidden")
        $(".qualities-btn-container .btn-negative-tags .tags-header-negative .tags-header-toggler").addClass("open")
        $(".qualities-btn-container .btn-negative-tags").addClass("hidden")
    }

    if (btn.classList.contains("review-thumb-up")) {
        $(".qualities-btn-container .btn-positive-tags .tags-header-positive .tags-header-toggler").removeClass("open")
        $(".qualities-btn-container .btn-positive-tags").removeClass("hidden")
        $(".qualities-btn-container .btn-negative-tags .tags-header-negative .tags-header-toggler").addClass("open")
        $(".qualities-btn-container .btn-negative-tags").addClass("hidden")
    }

    $(".tags-header-toggler").click(function () {
        const btnTagWrapper = $(this).parent().parent().parent()

        if ($(this).hasClass("open")) {
            btnTagWrapper.find(".btn-tags-wrapper .tags-header-toggler").addClass("open")
            $(this).removeClass("open")
            btnTagWrapper.find(".btn-tags-wrapper").addClass("hidden")
            $(this).parent().parent().removeClass("hidden")

        } else {
            btnTagWrapper.find(".btn-tags-wrapper .tags-header-toggler").removeClass("open")
            $(this).addClass("open")
            btnTagWrapper.find(".btn-tags-wrapper").removeClass("hidden")
            $(this).parent().parent().addClass("hidden")
        }

    })
}

/* Visibility of comment textarea, active tag button */
function selectDeselectBtnTag(btn) {
    const beFriends = $(".qualities-btn-container.personal-tab .btn-tag").first();
    const notBeFriends = $(".qualities-btn-container.personal-tab .btn-tag").last();
    const notProfessional = $(".qualities-btn-container.professional-tab .btn-tag").last();
    const notDating = $(".qualities-btn-container.dating-tab .btn-tag").last();

    if (btn.classList.contains("review-thumb-up")) {
        $(beFriends).addClass("active")

        $(".qualities-btn-container").find("textarea")[0].classList.remove("hidden")

        btnSaveReviewData("beFriends", "personal");
    } else if (btn.classList.contains("review-thumb-down")) {
        $(notBeFriends).addClass("active")
        /*$(notProfessional).addClass("active")
        $(notDating).addClass("active")*/

        $(".qualities-btn-container").find("textarea").each((_, textarea) => $(textarea).addClass("hidden"));

        btnSaveReviewData("notBeFriends", "personal");
        /* btnSaveReviewData("wouldNotWork", "professional");
         btnSaveReviewData("wouldNotDate", "dating");*/
    }

    $(".btn-tag").each(function (index, tag) {
        $(tag).click(function () {
            const dataTag = $(tag).data("value_tag");
            const dataKeyTag = $(tag).data("key_tag");
            const btnTagsWrapper = $(this).parent()
            const btnsTagsWrapper = $(this).parent().parent().parent();
            // Add or Remove active class
            if ($(this).hasClass("active")) {
                $(this).removeClass("active")
            } else {
                $(this).addClass("active")
            }

            if (btnTagsWrapper.find(".btn-negative-tag").hasClass("active")) {
                btnsTagsWrapper.find(".btn-positive-tag").removeClass("active");
                btnsTagsWrapper.find("textarea").addClass("hidden")
                switch (btnsTagsWrapper.data("tab")) {
                    case "personal-tab":
                        stateProfile = {
                            ...stateProfile,
                            personalDefaultState: {
                                ...stateProfile.personalDefaultState,
                                beFriends: false,
                                smart: false,
                                loyal: false,
                                honest: false,
                                goodListener: false,
                                humble: false,
                                generous: false,
                                fun: false,
                                easyGoing: false,
                                optimistic: false,
                                kind: false,
                                personalComment: ""
                            }
                        }
                        break;
                    case "professional-tab":
                        stateProfile = {
                            ...stateProfile,
                            professionalDefaultState: {
                                ...stateProfile.professionalDefaultState,
                                responsible: false,
                                hardWorking: false,
                                intelligent: false,
                                collaborative: false,
                                creative: false,
                                resourceful: false,
                                motivated: false,
                                flexible: false,
                                ambitious: false,
                                articulate: false,
                                professionalComment: ""
                            }
                        }
                        break;
                    case "dating-tab":
                        stateProfile = {
                            ...stateProfile,
                            datingDefaultState: {
                                ...stateProfile.datingDefaultState,
                                faithful: false,
                                respectful: false,
                                understanding: false,
                                funny: false,
                                romantic: false,
                                sexy: false,
                                smart: false,
                                passionate: false,
                                goodLooking: false,
                                goodListener: false,
                                datingComment: ""
                            }
                        }
                        break;
                    default:
                        return
                }
            } else if (btnTagsWrapper.find(".btn-positive-tag").hasClass("active")) {
                btnsTagsWrapper.find(".btn-negative-tag").removeClass("active");
                btnsTagsWrapper.find("textarea").removeClass("hidden")
                switch (btnsTagsWrapper.data("tab")) {
                    case "personal-tab":
                        stateProfile = {
                            ...stateProfile,
                            personalDefaultState: {
                                ...stateProfile.personalDefaultState,
                                notBeFriends: false,
                                unintelligent: false,
                                disloyal: false,
                                dishonest: false,
                                undependable: false,
                                conceited: false,
                                cheap: false,
                                dull: false,
                                uptight: false,
                                pessimistic: false,
                                cruel: false,
                                boring: false,
                                personalComment: ""
                            }
                        }
                        break;
                    case "professional-tab":
                        stateProfile = {
                            ...stateProfile,
                            professionalDefaultState: {
                                ...stateProfile.professionalDefaultState,
                                wouldNotWork: false,
                                undependable: false,
                                lazy: false,
                                "not smart": false,
                                "not collaborative": false,
                                unimaginative: false,
                                passive: false,
                                unmotivated: false,
                                inflexible: false,
                                unambitious: false,
                                incoherent: false,
                                "needs supervision": false,
                                professionalComment: ""
                            }
                        }
                        break;
                    case "dating-tab":
                        stateProfile = {
                            ...stateProfile,
                            datingDefaultState: {
                                ...stateProfile.datingDefaultState,
                                wouldNotDate: false,
                                unfaithful: false,
                                Disrespectful: false,
                                "self-centered": false,
                                cold: false,
                                boring: false,
                                unsexy: false,
                                "not smart": false,
                                "Bad kisser": false,
                                Unattractive: false,
                                neglectful: false,
                                dishonest: false,
                                datingComment: ""
                            }
                        }
                        break;
                    default:
                        return
                }

            } else {
                btnsTagsWrapper.find("textarea").addClass("hidden")
            }
            btnSaveReviewData(dataTag, dataKeyTag)
            submitReviewsValidation();
        })
    })
}

function btnSaveReviewData(dataTagVal, dataKeyTag) {
    switch (dataKeyTag) {
        case "personal":
            stateProfile = {
                ...stateProfile,
                personalDefaultState: {
                    ...stateProfile.personalDefaultState,
                    [dataTagVal]: !stateProfile.personalDefaultState[dataTagVal]
                }
            }
            break;
        case "professional":
            stateProfile = {
                ...stateProfile,
                professionalDefaultState: {
                    ...stateProfile.professionalDefaultState,
                    [dataTagVal]: !stateProfile.professionalDefaultState[dataTagVal]
                }
            }
            break;
        case "dating":
            stateProfile = {
                ...stateProfile,
                datingDefaultState: {
                    ...stateProfile.datingDefaultState,
                    [dataTagVal]: !stateProfile.datingDefaultState[dataTagVal]
                }
            }
        default:
            break;
    }


}

function commentSaveReviewData() {
    $("#personal-comment").on("keyup", e => stateProfile.personalDefaultState = {
        ...stateProfile.personalDefaultState,
        personalComment: e.target.value
    })
    $("#professional-comment").on("keyup", e => stateProfile.professionalDefaultState = {
        ...stateProfile.professionalDefaultState,
        professionalComment: e.target.value
    })
    $("#dating-comment").on("keyup", e => {
        stateProfile.datingDefaultState = {...stateProfile.datingDefaultState, datingComment: e.target.value}
    })
}

function relationshipSaveReviewData() {
    $("#knownModalSelect").on("change", function () {
        $(this).removeClass("error");

        const relationshipStatus = $(this).find(":selected").val();

        stateProfile.relationAnonymousState = {
            ...stateProfile.relationAnonymousState,
            reviewRelationship: relationshipStatus.toUpperCase()
        }
    })

    $("#postAnonymous").on("change", function () {
        const postStatus = $(this).prop("checked");


        stateProfile.relationAnonymousState = {
            ...stateProfile.relationAnonymousState,
            postAnonymous: postStatus
        }
    })
}

function submitReviewsValidation() {
    $(".btn-tag").hasClass("active") ? $("#submitReview").removeClass("primary-btn-disabled") : $("#submitReview").addClass("primary-btn-disabled")
}

$(document).on("click", "#submitReview", function () {
    if ($(".btn-tag").hasClass("active")) {
        if ($("#knownModalSelect").val() === "") {
            $("#knownModalSelect").addClass("error");
        } else {
            //Remove current open modal
            $(".modal").remove();

            let postData = {
                revieweeEpid: stateProfile.profileState.revieweeEpid,
                revieweeUsernum: stateProfile.profileState.revieweeUsernum,
                reviewId: "", //make this static
                anonymous: stateProfile.relationAnonymousState.postAnonymous === false ? 0 : 1, //make this dynamic 0 or 1 only
                signedOutRevReq: 1,//make this static
                hide: 0,//make this static
                reviewRelationshipType: stateProfile.relationAnonymousState.reviewRelationship, // starting here to down all dynamic
                personalReviewText: stateProfile.personalDefaultState.personalComment,
                professionalReviewText: stateProfile.professionalDefaultState.professionalComment,
                datingReviewText: stateProfile.datingDefaultState.datingComment,
                "Personal-i would be friends": stateProfile.personalDefaultState.beFriends === false ? "" : 1,
                "Personal-smart": stateProfile.personalDefaultState.smart === false ? "" : 1,
                "Personal-loyal": stateProfile.personalDefaultState.loyal === false ? "" : 1,
                "Personal-honest": stateProfile.personalDefaultState.honest === false ? "" : 1,
                "Personal-good listener": stateProfile.personalDefaultState.goodListener === false ? "" : 1,
                "Personal-humble": stateProfile.personalDefaultState.humble === false ? "" : 1,
                "Personal-generous": stateProfile.personalDefaultState.generous === false ? "" : 1,
                "Personal-fun": stateProfile.personalDefaultState.fun === false ? "" : 1,
                "Personal-easy going": stateProfile.personalDefaultState.easyGoing === false ? "" : 1,
                "Personal-optimistic": stateProfile.personalDefaultState.optimistic === false ? "" : 1,
                "Personal-kind": stateProfile.personalDefaultState.kind === false ? "" : 1,
                "Personal-unintelligent": stateProfile.personalDefaultState.unintelligent === false ? "" : 1,
                "Personal-disloyal": stateProfile.personalDefaultState.disloyal === false ? "" : 1,
                "Personal-dishonest": stateProfile.personalDefaultState.dishonest === false ? "" : 1,
                "Personal-undependable": stateProfile.personalDefaultState.undependable === false ? "" : 1,
                "Personal-conceited": stateProfile.personalDefaultState.conceited === false ? "" : 1,
                "Personal-cheap": stateProfile.personalDefaultState.cheap === false ? "" : 1,
                "Personal-dull": stateProfile.personalDefaultState.dull === false ? "" : 1,
                "Personal-uptight": stateProfile.personalDefaultState.uptight === false ? "" : 1,
                "Personal-pessimistic": stateProfile.personalDefaultState.pessimistic === false ? "" : 1,
                "Personal-cruel": stateProfile.personalDefaultState.cruel === false ? "" : 1,
                "Personal-boring": stateProfile.personalDefaultState.boring === false ? "" : 1,
                "Professional-responsible": stateProfile.professionalDefaultState.responsible === false ? "" : 1,
                "Professional-hardworking": stateProfile.professionalDefaultState.hardWorking === false ? "" : 1,
                "Professional-intelligent": stateProfile.professionalDefaultState.intelligent === false ? "" : 1,
                "Professional-collaborative": stateProfile.professionalDefaultState.collaborative === false ? "" : 1,
                "Professional-creative": stateProfile.professionalDefaultState.creative === false ? "" : 1,
                "Professional-resourceful": stateProfile.professionalDefaultState.resourceful === false ? "" : 1,
                "Professional-motivated": stateProfile.professionalDefaultState.motivated === false ? "" : 1,
                "Professional-flexible": stateProfile.professionalDefaultState.flexible === false ? "" : 1,
                "Professional-ambitious": stateProfile.professionalDefaultState.ambitious === false ? "" : 1,
                "Professional-articulate": stateProfile.professionalDefaultState.articulate === false ? "" : 1,
                "Professional-undependable": stateProfile.professionalDefaultState.undependable === false ? "" : 1,
                "Professional-lazy": stateProfile.professionalDefaultState.lazy === false ? "" : 1,
                "Professional-not smart": stateProfile.professionalDefaultState["not smart"] === false ? "" : 1,
                "Professional-not collaborative": stateProfile.professionalDefaultState["not collaborative"] === false ? "" : 1,
                "Professional-unimaginative": stateProfile.professionalDefaultState.unimaginative === false ? "" : 1,
                "Professional-passive": stateProfile.professionalDefaultState.passive === false ? "" : 1,
                "Professional-unmotivated": stateProfile.professionalDefaultState.unmotivated === false ? "" : 1,
                "Professional-inflexible": stateProfile.professionalDefaultState.inflexible === false ? "" : 1,
                "Professional-unambitious": stateProfile.professionalDefaultState.unambitious === false ? "" : 1,
                "Professional-incoherent": stateProfile.professionalDefaultState.incoherent === false ? "" : 1,
                "Professional-needs supervision": stateProfile.professionalDefaultState["needs supervision"] === false ? "" : 1,
                "Dating-faithful": stateProfile.datingDefaultState.faithful === false ? "" : 1,
                "Dating-respectful": stateProfile.datingDefaultState.respectful === false ? "" : 1,
                "Dating-understanding": stateProfile.datingDefaultState.understanding === false ? "" : 1,
                "Dating-funny": stateProfile.datingDefaultState.funny === false ? "" : 1,
                "Dating-romantic": stateProfile.datingDefaultState.romantic === false ? "" : 1,
                "Dating-sexy": stateProfile.datingDefaultState.sexy === false ? "" : 1,
                "Dating-smart": stateProfile.datingDefaultState.smart === false ? "" : 1,
                "Dating-passionate": stateProfile.datingDefaultState.passionate === false ? "" : 1,
                "Dating-good looking": stateProfile.datingDefaultState.goodLooking === false ? "" : 1,
                "Dating-good listener": stateProfile.datingDefaultState.goodListener === false ? "" : 1,
                "Dating-unfaithful": stateProfile.datingDefaultState.unfaithful === false ? "" : 1,
                "Dating-Disrespectful": stateProfile.datingDefaultState.Disrespectful === false ? "" : 1,
                "Dating-self-centered": stateProfile.datingDefaultState["self-centered"] === false ? "" : 1,
                "Dating-cold": stateProfile.datingDefaultState.cold === false ? "" : 1,
                "Dating-boring": stateProfile.datingDefaultState.boring === false ? "" : 1,
                "Dating-unsexy": stateProfile.datingDefaultState.unsexy === false ? "" : 1,
                "Dating-not smart": stateProfile.datingDefaultState["not smart"] === false ? "" : 1,
                "Dating-Bad kisser": stateProfile.datingDefaultState["Bad kisser"] === false ? "" : 1,
                "Dating-Unattractive": stateProfile.datingDefaultState.Unattractive === false ? "" : 1,
                "Dating-neglectful": stateProfile.datingDefaultState.neglectful === false ? "" : 1,
                "Dating-dishonest": stateProfile.datingDefaultState.dishonest === false ? "" : 1,
                "Personal-i would not be friends with": stateProfile.personalDefaultState.notBeFriends === false ? "" : 1,
                "Professional-i would not work with": stateProfile.professionalDefaultState.wouldNotWork === false ? "" : 1,
                "Dating-i would not date": stateProfile.datingDefaultState.wouldNotDate === false ? "" : 1
            };

            let formData = Object.keys(postData)
                .map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(postData[k]);
                })
                .join("&");

            fetch("/json/review/save?debug=true", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: formData
            })
                .then(res => res.json())
                .then(results => {
                    //console.log(results)
                    //if(results.success == 1) {
                    // console.log("fetch results", results);
                    // if (isLoggedIn === true) {
                    //     this.closeModal("reviewModal");
                    //     this.context.showModal("shareModal");
                    // } else {
                    //     this.closeModal("reviewModal");
                    //     this.context.showModal("registrationModal");
                    // }
                    // this.context.updateReviews();

                    // Apppend Registration Form
                    $("body").append(registrationModalContent())

                    //Init field validation and change header text
                    $("#registrationModal h3.modal-header-text").text("Your Review Is Posted");
                    $(".registration-message").html(reviewProfileRegOverlay())
                    $("#registrationModal").addClass("show-modal")

                    signUpFieldValidation();

                    $("div#mini-reg-form .form-control-div input").val("");
                    //Reset States
                    selectAndCheckBoxResetState();
                    personalResetDefaultState()
                    professionalResetDefaultState()
                    datingResetDefaultState()
                    onLoadSignUpFieldValidation();
                    stateProfile = {
                        ...stateProfile,
                        registerState: {
                            firstName: "",
                            lastName: "",
                            email: "",
                            zip: "",
                            age: "",
                            whyReg4: ""
                        }
                    }

                    _trackRegModal({ eventName:"showRegModalSubmitReview" })
                    //Do we need to call another ajax /preview.v1/pub/review/CADILLAC/e780810436056/1/10 (To update the page review data based on last successfull save review)
                    // const profileId = $("#epid").val();
                    // return fetch( $("#previewApiUri").val() + '/pub/review/CADILLAC/' + profileId + '/1/10', {
                    //     method: "GET",
                    //     headers: {
                    //         'Accept': 'application/json'
                    //     }
                    // }).then(function (response) {
                    //     if (response.status >= 200 && response.status < 300) {
                    //         //update data in review sections
                    //     } else {
                    //
                    //         //Do nothing on error
                    //     }
                    // }).then(function (data) {
                    //     //return data.json();
                    // })

                    // }else{
                    //     //Reset States
                    //     selectAndCheckBoxResetState();
                    //     personalResetDefaultState()
                    //     professionalResetDefaultState()
                    //     datingResetDefaultState()
                    //     alert("Error saving review:" + results.message);
                    // }
                });
        }
    }
})

// Message Modal

function sendMessageModalContent() {
    return `
  <div class="modal message-modal show-modal" id="messageModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-header-text">Send a message to ${$("#firstName").val()}</h3>
        <button class="close close-btn">
          <i class="icon-android-close"></i>
        </button>
      </div>
      <div class="modal-body">
        <p class="body-subheader">Registering is FREE!</p>
        <div class="message-form"">
          <div class="form-group">
            <div class="label">
              <label>Name</label>
            </div>
            <div class="form-input">
              <input type="text" name="firstName" placeholder="First" value="${stateProfile.message.firstName}"/>
            </div>
            <div class="form-input">
              <input type="text" name="lastName" placeholder="Last" value="${stateProfile.message.lastName}"/>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label>From</label>
            </div>
            <div class="form-input">
              <input type="email" name="email" placeholder="name@domain.com" value="${stateProfile.message.email}" required/>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label>Message</label>
            </div>
            <div class="form-input">
              <textarea name="simpleMessage" rows="4">${stateProfile.message.simpleMessage}</textarea>
            </div>
          </div>
          <button class="submit-btn" id="sendMessageBtn" disabled>Send your Message</button>
          <p>By clicking on the button above, 
            you agree to our <a href="https://www.mylife.com/user-agreement" target="_blank">User Agreement</a> and our <a href="https://www.mylife.com/privacy-policy" target="_blank">Privacy Policy</a>.</p>
        </form>
      </div>
    </div>
  </div>
</div>
  `;
}

function sendMessageFormValidation() {

    if (
        stateProfile.message.firstName == "" ||
        stateProfile.message.lastName == "" ||
        stateProfile.message.email == "" || isEmail(stateProfile.message.email) == false ||
        stateProfile.message.simpleMessage == ""
    ) {
        $(".message-form").find(".submit-btn").attr("disabled", true);
    } else {
        $(".message-form").find(".submit-btn").removeAttr("disabled");
    }
}

function sendMessageKeyupValidation() {
    $(".message-form")
        .find("input")
        .each((index, input) => {
            $(input).on("focus", (e) => {
                $(input).removeClass("error");
            });

            $(input).on("focusout", (e) => {
                if (input.value == "") {
                    $(input).addClass("error");
                }

                if (e.target.name == "email" && isEmail(input.value) == false) {
                    $(input).addClass("error");
                }

            });

            $(input).on("keyup", (e) => {
                const {name, value} = e.target;

                stateProfile = {
                    ...stateProfile,
                    message: {
                        ...stateProfile.message,
                        [name]: value
                    }
                }

                sendMessageFormValidation();
            });
        });
    $(".message-form").find("textarea").on("keyup", e => {
        const {value, name} = e.target

        stateProfile = {
            ...stateProfile,
            message: {
                ...stateProfile.message,
                [name]: value
            }
        }

        sendMessageFormValidation();
    })
}

$(document).on("click", "#sendMessageBtn", function () {
    // Remove current active modal
    $(".modal").remove();
    $("body").append(registrationModalContent());

    //populate fieds on registration form
    $("#registrationModal input[name='firstName']").val(stateProfile.message.firstName)
    $("#registrationModal input[name='lastName']").val(stateProfile.message.lastName)
    $("#registrationModal input[name='email']").val(stateProfile.message.email)
    $("#registrationModal input[name='body']").val(stateProfile.message.simpleMessage)
    $("#registrationModal input[name='age']").val(stateProfile.message.age)
    $("#registrationModal input[name='zip']").val(stateProfile.message.zip)

    $("#mini-reg-form input[name='isMessage']").val(true)
    $("#mini-reg-form input[name='whyReg']").val("identity-take-control");
    $("#registrationModal input[name='body']").val(stateProfile.message.simpleMessage)

    $(".modal-result").html("");

    $("#registrationModal h3.modal-header-text").text("Message sent!");
    //Append Registration Dynamic Content
    $(".registration-message").html(sendMessageRegOverlay())


    // Copy message state to register state
    stateProfile.registerState = stateProfile.message

    // Set Start point whyReg4 and get simple message on message State
    stateProfile = {
        ...stateProfile,
        registerState: {
            ...stateProfile.registerState,
            // whyReg4: "PS_VIEW_PROFILE",
            whyReg4: "identity-take-control-profile-modal",
            simpleMessage: stateProfile.message.simpleMessage,
            age: $("#registrationModal input[name='age']").val(),
            zip: $("#registrationModal input[name='zip']").val()
        }
    }

    stateProfile.modal = {...stateProfile.modal, sendMessage: true}

    $("#registrationModal").addClass("show-modal")

    signUpFieldValidation();

    // Sign up validation after send message
    onLoadSignUpFieldValidation();

    _trackRegModal({ eventName:"showRegModalSendMessage" });
})

// Mini Profile Card
function contentMiniProfileCard(profile, cardOverlayStyle) {
    const cityState = profile.location.length > 0 ?
        (`<div class="city-state-wrapper">
            <img src="/static/websat-profile/global/img/icon-location-2.png" alt="city-state">
            <span class="city-state">${profile.location}</span>
        </div>`) : ""
    const flagAlert = profile.flagAlert === "0" ? "" : (`
    <span class="court-record-warning">
        <i class="flaticon-alert">ALERT: COURT RECORDS</i>
   </span>
    `)
    return `
    <div class="mini-vcard-overlay" style="${cardOverlayStyle}">
        <div class="card-hover">
            <div class="card-hover__body">
                <div class="upper">
                    <div class="left">
                        <a href="${profile.profileLink}" rel="nofollow" class="name-age text-decoration-none">${profile.nameAge}</a>
                        ${cityState}
                        ${flagAlert}
                    </div>
                    <div class="right">
                        <span>Reputation Score</span>
                        <div class="score-box">
                            <span class="reputation-min ${profile.minRepColor}">${profile.minReputation}</span>
                            <span class="reputation-divider">-</span>
                            <span class="reputation-max ${profile.maxRepColor}">${profile.maxReputation}</span>
                            <span class="reputation-total">/5</span>
                        </div>
                        <a href="" rel="nofollow" class="vscore">View Actual Score</a>
                    </div>
                </div>
                <div class="lower">
                    <div class="profile-other-info mini-profile-other-info">
                        <img src="/static/websat-profile/global/img/icon-aka-2.png" alt="group-people">
                        <span>${profile.alias.toLowerCase()}</span>
                    </div>
                    <div class="profile-other-info mini-profile-other-info">
                        <img src="/static/websat-profile/global/img/icon-work-2.png" alt="work">
                        <span class="text-decoration-none">${profile.work.toLowerCase()}</span>
                    </div>
                    <div class="profile-other-info mini-profile-other-info">
                        <img src="/static/websat-profile/global/img/icon-school-2.png" alt="school">
                        <span class="text-decoration-none">${profile.school.toLowerCase()}</span>
                    </div>
                </div>
            </div>
            <a href="${profile.profileLink}" rel="nofollow" class="btn primary-view-btn">View ${profile.fullname}'s Background Report</a>
            <div class="card-hover__arrow"></div>
        </div>
    </div>
    `
}

function showMiniProfileCard(card) {
    const maxReputation = card.querySelector(".max-reputation").tagName == "SPAN" ? card.querySelector(".max-reputation").textContent : card.querySelector(".max-reputation").value;
    const minReputation = card.querySelector(".min-reputation").tagName == "SPAN" ? card.querySelector(".min-reputation").textContent : card.querySelector(".min-reputation").value;
    const hasLocation = card.querySelector(".location") == null ? "" : card.querySelector(".location").textContent;
    const maxRepColor = determineRepColor(maxReputation);
    const minRepColor = determineRepColor(minReputation);

    const img = card.querySelector(".card-profile").getAttribute("src");
    const age = card.querySelector(".card-age") !== null ? card.querySelector(".card-age").value : "";
    const profileLink = card.querySelector(".name").href;
    const location = hasLocation
    const fullname = card.querySelector(".name").textContent.split(",")[0];
    const wFlagRecord = card.querySelector(".card-wflag").value;
    const nameAge = fullname + age;

    console.log(nameAge)
    var profileAlias = "Info Pending...";
    var profileWork = "Info Pending...";
    var profileSchool = "Info Pending...";
    var profile;

    const {top, left} = $(card).offset()
    const cardWidth = $(card).outerWidth();
    const hoverResultWidth = 440;
    const hoverResultHeight = 320;

    let offsetTop;
    let offsetLeft;

    if ($(window).width() > 768) {
        offsetLeft = left
    }
    if ($(window).width() > 992) {
        offsetLeft = left - (cardWidth / 2) + 42
    }

    let cardOverlayStyle = `
        position: absolute;
        top: ${top - hoverResultHeight}px;
        left: ${offsetLeft}px;
        z-index: 9999;
    `


    if (scrollY > (top - hoverResultHeight)) $(window).scrollTop((top - hoverResultHeight) - 30)

    if (card.querySelector(".epid") != null && card.querySelector(".epid").value != "") {
        const epid = card.querySelector(".epid").value;
        $.ajax({
            type: 'GET',
            url: $("#punifiedApiUri").val() + '/pub/marketinguser/miniEpid/' + $("#epid").val() + '/' + epid,
            success: function (data) {


                if (data.adl != 0) {
                    if (data.hasOwnProperty('aliases')) {
                        profileAlias = "";
                        for (var i = 0; i < data.aliases.length; i++) {
                            if (i != 0) profileAlias = profileAlias + ", "
                            profileAlias = profileAlias + (data.aliases[i].hasOwnProperty('firstname') ? data.aliases[i].firstname : "") + " " + (data.aliases[i].hasOwnProperty('middlename') ? data.aliases[i].middlename : "") + " " + (data.aliases[i].hasOwnProperty('lastname') ? data.aliases[i].lastname : "")
                        }
                    }

                    if (data.hasOwnProperty('aliases')) {
                        profileAlias = "";
                        for (var i = 0; i < data.aliases.length; i++) {
                            if (i != 0) profileAlias = profileAlias + ", "
                            profileAlias = profileAlias + (data.aliases[i].hasOwnProperty('firstname') ? data.aliases[i].firstname : "") + " " + (data.aliases[i].hasOwnProperty('middlename') ? data.aliases[i].middlename : "") + " " + (data.aliases[i].hasOwnProperty('lastname') ? data.aliases[i].lastname : "")
                        }
                    }
                    var highSchool = "";
                    if (checkNested(data, 'education', 'highschool')) {
                        highSchool = data.education.highschool.schoolName;
                    }
                    var colleges = "";
                    if (checkNested(data, 'education', 'colleges')) {
                        for (var i = 0; i < data.education.colleges.length; i++) {
                            if (i == 0 && highSchool != "") colleges = colleges + ", ";
                            if (i != 0) colleges = colleges + " ,";
                            colleges = colleges + data.education.colleges[i].schoolName;
                        }
                    }

                    if (highSchool != "" || colleges != "") {
                        profileSchool = highSchool + colleges;
                    }

                    if (data.hasOwnProperty('jobs')) {
                        profileWork = "";
                        for (var i = 0; i < data.jobs.length; i++) {
                            if (i != 0) profileWork = profileWork + ", ";
                            profileWork = profileWork + data.jobs[i].title + " at " + data.jobs[i].company;
                        }
                    }

                    profile = {
                        fullname: fullname,
                        nameAge: nameAge,
                        location: location,
                        picture: img,
                        profileLink: profileLink,
                        alias: profileAlias,
                        work: profileWork,
                        school: profileSchool,
                        flagAlert: wFlagRecord,
                        maxReputation: maxReputation,
                        minReputation: minReputation,
                        maxRepColor: maxRepColor,
                        minRepColor: minRepColor,
                    };

                    if (isVisible == false) {
                        $("body").append(contentMiniProfileCard(profile, cardOverlayStyle))
                        isVisible = true
                    }
                }
            }
        })

    }
}

$(document).on("mouseleave", ".mini-vcard-overlay", function () {
    miniOverlayProfileCardExit = true;
    setTimeout(function () {
        if (miniProfileCardExit == true && miniOverlayProfileCardExit == true) {
            $(".mini-vcard-overlay").remove()
            isVisible = false
        }
    }, 50)
})

$(document).on("mouseenter", ".mini-vcard-overlay", function () {
    miniOverlayProfileCardExit = false;
})


// Property Rent Average

function fetchAveragePropertyRent() {
    const latitude = $("#latitude").val();
    const longitude = $("#longitude").val();

    const options = {
        method: 'GET',
        headers: {
            //'X-RapidAPI-Key': '5164cbab47msh6be5676baa19098p125f3ejsn867e699d1374', // To be change on subscription
            //'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com', // To be change on subscription
        },
    };

    fetch(`https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?latitude=${latitude}&longitude=${longitude}`, options)
        .then(response => response.json())
        .then(data => {
            const {listings} = data;

            let propertyRent;

            listings.forEach(({city, state, zipcode, bedrooms, price}) => {
                propertyRent += `
                <tr>
                    <td>${city}</td>
                    <td>${state}</td>
                    <td>${zipcode}</td>
                    <td>${bedrooms === undefined ? 'No' : bedrooms} Bedroom</td>
                    <td>$${addComa(price)}</td>
                </tr>
                `

                return propertyRent
            })

            $("#propertyRentTable").html(propertyRent)
        })
        .catch(err => {
            let propertyRentMessage = `
            <tr>
                <td colspan="5">There's a problem on fetching data we'll be back soon.</td>
            </tr>
            `

            $("#propertyRentTable").html(propertyRentMessage)
        });
}

// Google map
function displayMap() {
    const attribution = new ol.control.Attribution({
        collapsible: false,
    });

    const map = new ol.Map({
        controls: ol.control.defaults({attribution: false}).extend([attribution]),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
            }),
        ],
        target: 'map-view',
        view: new ol.View({
            center: ol.proj.fromLonLat([$("#longitude").val(), $("#latitude").val()]),
            zoom: 16,
        }),
    });

    const layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([$("#longitude").val(), $("#latitude").val()])),
                }),
            ],
        }),
    });

    map.addLayer(layer)
}

// function fetchGatheredOnlinePhotos() {
//     const queryFname = $("#firstName").val() === undefined ? "" : $("#firstName").val();
//     const queryLname = $("#lastName").val() === undefined ? "" : $("#lastName").val();
//     const queryMname = $("#middleName").val() === undefined ? "" : $("#middleName").val();
//     const query = encodeURIComponent(`${queryFname} ${queryLname} ${queryMname}`);
//
//     fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBRNWjdPZ7FrKUSxSepCeQUYh-DDnxOpPk&cx=8b47430c8579b7ecc&searchType=IMAGE&num=6&q=${query}`)
//         .then((response) => response.json())
//         .then(data => {
//             const {items} = data;
//
//             let imageElement = "";
//
//             if (items === undefined) {
//                 $("#photos-gathered-online").remove();
//                 $("#photos-online").remove();
//             } else {
//                 items.forEach(({image}) => {
//                     imageElement += `<img src="${image.thumbnailLink}" class="gathered-photos" loading="lazy" alt="${image.contextLink}"/>`
//                     return imageElement
//                 })
//
//                 $("#gathered-photos-container").html(imageElement)
//
//                 // Zoom out image for gathered photos
//                 $("#gathered-photos-container img").each(function () {
//                     this.addEventListener("click", function () {
//                         const imgSrc = this.src;
//
//                         const zoomImgContent = `
//                         <div class="zoom-img-backdrop">
//                             <span class="flaticon-cancel-music"></span>
//                             <div class="zoom-img-content">
//                                 <img src="${imgSrc}" alt="${imgSrc}">
//                             </div>
//                         </div>
//                         `
//
//                         if ($(".zoom-img-backdrop").length === 0) $("body").append(zoomImgContent);
//
//                         $(".zoom-img-backdrop span").on("click", () => $(".zoom-img-backdrop").remove())
//                     })
//                 })
//             }
//         })
//         .catch(err => console.log(err))
// }

// Map Visibility
function mapVisibility() {
    if ($(this).text() === "Hide Map") {
        $(".map-content").hide()
        $(this).text("Show Map")
    } else {
        $(".map-content").show()
        $(this).text("Hide Map")
    }
}

// Field Validation

function signUpFieldValidation() {
    // Validation for lockin lockout profile

    $(".modal-form")
        .find("input")
        .each((index, input) => {
            // Validation on focus
            $(input).on("focus", (e) => {
                $(input).removeClass("error");
            });

            // Validation on focus out
            $(input).on("focusout", (e) => {
                const {value} = e.target;

                if (value == "") {
                    $(input).addClass("error");
                }
                if (e.target.name == "email" && isEmail(input.value) == false) {
                    $(input).addClass("error");
                }
            });

            $(input).on("keyup", (e) => {
                const {value, name} = e.target;

                stateProfile = {
                    ...stateProfile,
                    registerState: {
                        ...stateProfile.registerState,
                        [name]: value
                    }
                }

                if (stateProfile.modal.sendMessage == true) {
                    stateProfile = {
                        ...stateProfile,
                        message: {
                            ...stateProfile.message,
                            [name]: value
                        }
                    }
                }

                onLoadSignUpFieldValidation();
            });
        });
}

function onLoadSignUpFieldValidation() {

    if (
        stateProfile.registerState.firstName == "" ||
        stateProfile.registerState.lastName == "" ||
        stateProfile.registerState.email == "" || isEmail(stateProfile.registerState.email) == false ||
        stateProfile.registerState.zip == "" ||
        stateProfile.registerState.age == ""
    ) {
        $(".modal-form").find(".submit-btn").addClass("primary-btn-disabled");
    } else {
        $(".modal-form")
            .find(".primary-btn-disabled")
            .removeClass("primary-btn-disabled");
    }
}

function thisIsMeProfile() {
    $("#searchForMyselfCheckBoxRegForm").on("click", e => {
        if ($("#searchForMyselfCheckBoxRegForm")[0].checked == true) {
            stateProfile = {
                ...stateProfile,
                registerState: {
                    ...stateProfile.registerState,
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    zip: $("#zip").val(),
                    age: $("#age").val(),
                    whyReg4: "IDP_VIEW_PROFILE-profile-modal"
                }
            }

            $("#registrationModal input[name='firstName']").val(stateProfile.registerState.firstName)
            $("#registrationModal input[name='lastName']").val(stateProfile.registerState.lastName)
            $("#registrationModal input[name='age']").val(stateProfile.registerState.age)
            $("#registrationModal input[name='zip']").val(stateProfile.registerState.zip)

            signUpFieldValidation();
            onLoadSignUpFieldValidation()
            $("#registerBtn").text("Show My Background Report")
        } else {
            stateProfile = {
                ...stateProfile,
                registerState: {
                    ...stateProfile.registerState,
                    firstName: "",
                    lastName: "",
                    zip: "",
                    age: "",
                    email: stateProfile.registerState.email,
                    whyReg4: "PS_VIEW_PROFILE-profile-modal"
                }
            }

            $("#registrationModal input[name='firstName']").val(stateProfile.registerState.firstName)
            $("#registrationModal input[name='lastName']").val(stateProfile.registerState.lastName)
            $("#registrationModal input[name='age']").val(stateProfile.registerState.age)
            $("#registrationModal input[name='zip']").val(stateProfile.registerState.zip)

            signUpFieldValidation();
            onLoadSignUpFieldValidation()
            $("#registerBtn").text("Show Background Report")
        }

    })

}

function thisIsMeProfileV2() {
    $(".link-text").on("click", e => {
        try {
            if (stateProfile.registerState.whyReg4 == "PS_VIEW_PROFILE" || stateProfile.registerState.whyReg4 == "") {
                $(".registration-message").html(idpExitBackEButtonRegOverlay());
                stateProfile = {
                    ...stateProfile,
                    registerState: {
                        ...stateProfile.registerState,
                        firstName: $("#registrationModal input[name=firstName]").val(),
                        lastName: $("#registrationModal input[name=lastName]").val(),
                        zip: $("#registrationModal input[name=zip]").val(),
                        age: $("#registrationModal input[name=age]").val(),
                        email: $("#registrationModal input[name=email]").val(),
                        whyReg4: "IDP_VIEW_PROFILE"
                    }
                }
                $("#searchForMyselfCheckBoxRegForm").prop("checked", true)
            } else {
                $(".registration-message").html(backButtonRegOverlay2());
                stateProfile = {
                    ...stateProfile,
                    registerState: {
                        ...stateProfile.registerState,
                        firstName: $("#registrationModal input[name=firstName]").val(),
                        lastName: $("#registrationModal input[name=lastName]").val(),
                        zip: $("#registrationModal input[name=zip]").val(),
                        age: $("#registrationModal input[name=age]").val(),
                        email: $("#registrationModal input[name=email]").val(),
                        whyReg4: "PS_VIEW_PROFILE"
                    }
                }
                $("#searchForMyselfCheckBoxRegForm").prop("checked", false)
            }

            thisIsMeProfileV2();
            signUpFieldValidation();
            onLoadSignUpFieldValidation();

        } catch(err) {
            console.log('thisIsMeProfileV2', err)
        }
    })
}

// Reset State Function
function lockUnlockResetState() {
    stateProfile = {
        ...stateProfile,
        lockUnlock: {
            COURT_AND_ARREST_RECORDS: false,
            REVIEWS_AND_RATINGS: false,
            CONTACT_INFO: false,
            ABOUT: false,
            FAMILY_AND_FRIENDS: false,
            PHOTOS_AND_SOCIAL_POSTS: false,
        }
    };
}

function selectAndCheckBoxResetState() {
    stateProfile = {
        ...stateProfile,
        relationAnonymousState: {
            reviewRelationship: "Friend",
            postAnonymous: false
        }
    }
}

function personalResetDefaultState() {
    stateProfile = {
        ...stateProfile,
        personalDefaultState: {
            beFriends: false,
            smart: false,
            loyal: false,
            honest: false,
            goodListener: false,
            humble: false,
            generous: false,
            fun: false,
            easyGoing: false,
            optimistic: false,
            kind: false,
            notBeFriends: false,
            unintelligent: false,
            disloyal: false,
            dishonest: false,
            undependable: false,
            conceited: false,
            cheap: false,
            dull: false,
            uptight: false,
            pessimistic: false,
            cruel: false,
            boring: false,
            personalComment: ""
        }
    }
}

function professionalResetDefaultState() {
    stateProfile = {
        ...stateProfile,
        professionalDefaultState: {
            responsible: false,
            hardWorking: false,
            intelligent: false,
            collaborative: false,
            creative: false,
            resourceful: false,
            motivated: false,
            flexible: false,
            ambitious: false,
            articulate: false,
            wouldNotWork: false,
            undependable: false,
            lazy: false,
            "not smart": false,
            "not collaborative": false,
            unimaginative: false,
            passive: false,
            unmotivated: false,
            inflexible: false,
            unambitious: false,
            incoherent: false,
            "needs supervision": false,
            professionalComment: ""
        }
    }
}

function datingResetDefaultState() {
    stateProfile = {
        ...stateProfile,
        datingDefaultState: {
            faithful: false,
            respectful: false,
            understanding: false,
            funny: false,
            romantic: false,
            sexy: false,
            smart: false,
            passionate: false,
            goodLooking: false,
            goodListener: false,
            wouldNotDate: false,
            unfaithful: false,
            Disrespectful: false,
            "self-centered": false,
            cold: false,
            boring: false,
            unsexy: false,
            "not smart": false,
            "Bad kisser": false,
            Unattractive: false,
            neglectful: false,
            dishonest: false,
            datingComment: ""
        }
    }
}

// Modal Registration Dynamic Content For 3 Different Entry point
function sendMessageRegOverlay() {
    return `
    <p class="registration-subheader">Sign-up for FREE. See detailed Reputation Profile & Reputation Score for ${$("#firstName").val()} ${$("#lastName").val()}. Info can include:</p>
    <ul class="registration-list">
        <li>
            <i class="flaticon-contact-list"></i>
            <span>Contact information</span>
        </li>
        <li>
            <i class="flaticon-handcuffs"></i>
            <span>Criminal & Court & Arrest Records</span>
        </li>
        <li>
            <i class="flaticon-image"></i>
            <span>Photos</span>
        </li>
        <li>
            <i class="flaticon-review"></i>
            <span>Personal reviews and more</span>
        </li>
    </ul>
    <p class="registration-subtext">You'll also get alerts when info changes. Search to see your Reputation Profile, too.</p>
    `
}

function lockProfileRegOverlay() {
    return `
    <p class="registration-subheader">Sign-up to protect your Reputation Profile & Reputation Score.</p>
    <ul class="registration-list">
        <li>
            <i class="flaticon-handcuffs"></i>
            <span>Lock Criminal & Civil Court records</span>
        </li>
        <li>
            <i class="flaticon-balance"></i>
            <span>Lock Bankruptcies, Law Suites & Liens</span>
        </li>
        <li>
            <i class="flaticon-gavel"></i>
            <span>Lock Mortgage & Property Records & more</span>
        </li>
    </ul>
    <p class="registration-subtext">Lock your Reputation Profile the same way you lock your credit report.</p>
    `
}

function reviewProfileRegOverlay() {
    return `
    <p class="registration-subheader">Sign-up for FREE. See detailed Reputation Profile & Reputation Score for ${$("#firstName").val()} ${$("#lastName").val()}. Info can include:</p>
    <ul class="registration-list">
        <li>
            <i class="flaticon-contact-list"></i>
            <span>Contact information</span>
        </li>
        <li>
            <i class="flaticon-handcuffs"></i>
            <span>Criminal & Court & Arrest Records</span>
        </li>
        <li>
            <i class="flaticon-image"></i>
            <span>Photos</span>
        </li>
         <li>
            <i class="flaticon-review"></i>
            <span>Personal reviews and more</span>
        </li>
    </ul>
    <p class="registration-subtext">You'll also get alerts when info changes. Search to see your Reputation Profile, too.</p>
    `
}

//old version
function backButtonRegOverlay() {
    let courtRecordWarningClass = "";
    let courtRecordPossibleText = "Possible ";
    let lawsuitWarningClass = "Possible ";
    let lawsuitPossibleText = "Possible ";
    if ($("#withCourtRecordFlag").length > 0) {
        courtRecordWarningClass = "alert"
        courtRecordPossibleText = ""
    }

    if ($("#lawsuitRecordFlag").length > 0) {
        lawsuitWarningClass = "alert"
        lawsuitPossibleText = ""
    }

    const thisProfileIsMineContent = `
     <input type="checkbox" name="searchForMyselfCheckBoxRegForm" id="searchForMyselfCheckBoxRegForm"/>
     <span class="checkbox-test">This profile is mine</span>
    `;

    $("#registrationModal h3.modal-header-text").text(`Learn About ${$("#firstName").val()} ${$("#lastName").val()}`);
    $(".form-control-checkbox").html(thisProfileIsMineContent)

    return `
    <p class="registration-subheader">Sign-up for FREE. See detailed Reputation Profile & Reputation Score for ${$("#firstName").val()} ${$("#lastName").val()}. Info can include:</p>
    <ul class="registration-list">
        <li>
            <i class="flaticon-contact-list"></i>
            <span>Contact information</span>
        </li>
        <li class=${courtRecordWarningClass}>
            <i class="flaticon-handcuffs"></i>
            <span>${courtRecordPossibleText}Court Records Found</span>
        </li>
        <li class=${lawsuitWarningClass}>
            <i class="flaticon-balance"></i>
            <span>${lawsuitPossibleText}Lawsuits, Liens or Bankruptcies Found</span>
        </li>    
        <li>
            <i class="flaticon-image"></i>
            <span>Photos</span>
        </li>
         <li>
            <i class="flaticon-review"></i>
            <span>Personal reviews and more</span>
        </li>
    </ul>
    <p class="registration-subtext">You'll also get alerts when info changes. Search to see your Reputation Profile, too.</p>
    `
}

//new version
function backButtonRegOverlay2() {
    let courtRecordWarningClass = "";
    let courtRecordPossibleText = "Possible ";
    let lawsuitWarningClass = "Possible ";
    let lawsuitPossibleText = "Possible ";
    if ($("#withCourtRecordFlag").length > 0) {
        courtRecordWarningClass = "alert"
        courtRecordPossibleText = ""
    }

    if ($("#lawsuitRecordFlag").length > 0) {
        lawsuitWarningClass = "alert"
        lawsuitPossibleText = ""
    }

    const thisProfileIsMineContent = `
     <input type="checkbox" name="searchForMyselfCheckBoxRegForm" id="searchForMyselfCheckBoxRegForm"/>
     <span class="checkbox-test">This profile is mine</span>
    `;
    $("#registrationModal h3.modal-header-text").text("WAIT! - There's More to See");
    $("#registerBtn").text("Continue >>");

    // $("#registrationModal h3.modal-header-text").text(`Learn About ${$("#firstName").val()} ${$("#lastName").val()}`);
    $(".form-control-checkbox").html(thisProfileIsMineContent)

    return `
    <p class="registration-subheader"><b>View More Details for ${$("#firstName").val()} ${$("#lastName").val()}</b></p>
    <div class="form-control-checkbox link-text-wrapper">
        <span class="checkbox-test link-text">(<b>OR</b> Find My Profile Instead)</span>
    </div>
    <ul class="registration-list">
        <li>
            <span>Contact Info: Address, Email &amp; Phone Number</span>
        </li>
        <li>
            <span>Check Criminal or Court Records</span>
        </li>
        <li>
            <span>Relatives &amp; Associates</span>
        </li>    
        <li>
            <span>Photos &amp; Social Profiles</span>
        </li>
         <li>
            <span>Personal Reviews &amp; More</span>
        </li>
    </ul>
    `
}

//old version
function backButtonControlRegOverlay() {

    const thisProfileIsMineContent = `
     <input type="checkbox" name="searchForMyselfCheckBoxRegForm" id="searchForMyselfCheckBoxRegForm"/>
     <span class="checkbox-test">This profile is mine</span>
    `;

    $("#registrationModal h3.modal-header-text").text("Control Your Reputation Profile")
    $(".form-control-checkbox").html(thisProfileIsMineContent)

    return `
    <p class="registration-subheader">Sign-up for FREE. See & improve your Reputation Profile & Reputation Score.</p>
    <ul class="registration-list">
        <li>
            <i class="flaticon-resume"></i>
            <span>Edit & improve your Reputation Profile</span>
        </li>
        <li>
            <i class="flaticon-user-1"></i>
            <span>Raise & protect your Reputation Score</span>
        </li>
        <li>
            <i class="flaticon-notification"></i>
            <span>Get alerts when someone searches for you and more</span>
        </li>
    </ul>
    <p class="registration-subtext">Controlling your Reputation Score helps you look good & can improve your life personally & professionally.</p>
    `
}

// new vesion idp back button and exit intent
function idpExitBackEButtonRegOverlay() {
    let courtRecordWarningClass = "";
    let courtRecordPossibleText = "Possible ";
    let lawsuitWarningClass = "Possible ";
    let lawsuitPossibleText = "Possible ";
    if ($("#withCourtRecordFlag").length > 0) {
        courtRecordWarningClass = "alert"
        courtRecordPossibleText = ""
    }

    if ($("#lawsuitRecordFlag").length > 0) {
        lawsuitWarningClass = "alert"
        lawsuitPossibleText = ""
    }

    const thisProfileIsMineContent = `
     <input type="checkbox" name="searchForMyselfCheckBoxRegForm" id="searchForMyselfCheckBoxRegForm"/>
     <span class="checkbox-test">This profile is mine</span>
    `;

    // $("#registrationModal h3.modal-header-text").text(`Learn About ${$("#firstName").val()} ${$("#lastName").val()}`);
    $("#registrationModal h3.modal-header-text").text(`Stop - Before You Go!`);

    $("#registerBtn").text("Continue >>");
    // $(".form-control-checkbox").html(thisProfileIsMineContent)

    return `
    <p class="registration-subheader">
        <b>See Who's Searching for You &amp; Looking at Your Public Profile Now!</b>
    </p>
    <div class="form-control-checkbox link-text-wrapper">
        <span class="checkbox-test link-text">(<b>OR</b> View More Details on ${$("#firstName").val()} ${$("#lastName").val()})</span>
    </div>
    <ul class="registration-list">
        <li>
            <span>See Who's Searching for You<sup>&reg;</sup></span>
        </li>
        <li>
            <span>View &amp; Verify Your Public Court Records</span>
        </li>
        <li>
            <span>Read Your Reviews</span>
        </li>    
        <li>
            <span>Check Your Reputation Score</span>
        </li>
    </ul>
    `
}

// checkbox onboarding overlay
function checkBoxOnboardingOverlay() {
    return `
        <div class="modal show-modal"  id="checkboxOnboardingModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="search-again-close close-btn">
                        <i class="icon-android-close"></i>
                    </button>
                    <div class="modal-body">
                        <h2 class="main-header">
                            ${$("#firstName").val()} ${$("#lastName").val()}, ${$("#age").val()}
                            <br />
                            <span>${$("#pubDataCity4").val()}, ${$("#pubDataState4").val()}, ${$("#pubDataZipCode4").val()}</span>
                        </h2>
                        <div class="search-again go-to-search-again-close">See other matches for ${$("#firstName").val()}</div>
                        <h2 class="sub-header">Select Details You'd Like To See:</h2>
                        <div class="componentContent-detail">
                            <div class="negativeInformationItemsWrapper" id="negativeInformationItemsWrapper">
                                <div class="negativeInformationItemWrapper negativeInformationItemsLeftWrapper">
                                    <div class="negativeInformationHeader negativeInformationItem" id="negativeInformationHeader1">
                                        <input type="checkbox" data-box-name="All Background Details" id="negativeInformationItemsCheckBox1" name="negativeInformationItemsCheckBox1">
                                        <label for="negativeInformationItemsCheckBox1">All Background Details</label>
                                    </div>
                                    <div id="negativeInformation1" class="negativeInformationSetionWrapper">
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems0">
                                            <input checked type="checkbox" data-box-name="Court &amp; Arrest Records" id="negativeInformationItemsCheckBoxGroup1_0" name="negativeInformationItemsGroup1_0">
                                            <label for="negativeInformationItemsCheckBoxGroup1_0" class="checked">Court &amp; Arrest Records that We Might Find</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems1">
                                            <input checked type="checkbox" data-box-name="Lawsuits, Liens &amp; Bankruptcies" id="negativeInformationItemsCheckBoxGroup1_1" name="negativeInformationItemsGroup1_1">
                                            <label for="negativeInformationItemsCheckBoxGroup1_1" class="checked"> Lawsuits, Liens &amp; Bankruptcies</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems6">
                                            <input checked type="checkbox" data-box-name="Sexual Offense" id="negativeInformationItemsCheckBoxGroup1_6" name="negativeInformationItemsGroup1_6">
                                            <label for="negativeInformationItemsCheckBoxGroup1_6" class="checked"> Sexual Offense</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems2">
                                            <input type="checkbox" data-box-name="Education &amp; Work History" id="negativeInformationItemsCheckBoxGroup1_2" name="negativeInformationItemsGroup1_2">
                                            <label for="negativeInformationItemsCheckBoxGroup1_2"> Education &amp; Work History</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems3">
                                            <input type="checkbox" data-box-name="Property Ownership" id="negativeInformationItemsCheckBoxGroup1_3" name="negativeInformationItemsGroup1_3">
                                            <label for="negativeInformationItemsCheckBoxGroup1_3"> Property Ownership</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems4">
                                            <input type="checkbox" data-box-name="Licenses &amp; Corporate Affiliations" id="negativeInformationItemsCheckBoxGroup1_4" name="negativeInformationItemsGroup1_4">
                                            <label for="negativeInformationItemsCheckBoxGroup1_4"> Licenses &amp; Corporate Affiliations</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems5">
                                            <input type="checkbox" data-box-name="Reviews &amp; Reputation Score" id="negativeInformationItemsCheckBoxGroup1_5" name="negativeInformationItemsGroup1_5">
                                            <label for="negativeInformationItemsCheckBoxGroup1_5"> Reviews &amp; Reputation Score</label>
                                        </div>
                                    </div>
                                    <div id="showMoreNegativeInformation1" class="showMore">+ Show More Background Details</div>
                                </div>
                                <div class="negativeInformationItemWrapper negativeInformationItemsRightWrapper">
                                    <div class="negativeInformationHeader negativeInformationItem" id="negativeInformationHeader2">
                                        <input type="checkbox" data-box-name="All Contact &amp; Personal Info" id="negativeInformationItemsCheckBox2" name="negativeInformationItemsCheckBox2">
                                        <label for="negativeInformationItemsCheckBox2">All Contact &amp; Personal Info</label>
                                    </div>
                                    <div id="negativeInformation2" class="negativeInformationSetionWrapper">
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems0">
                                            <input type="checkbox" data-box-name="Current &amp; Past Addresses" id="negativeInformationItemsCheckBoxGroup2_0" name="negativeInformationItemsGroup2_0">
                                            <label for="negativeInformationItemsCheckBoxGroup2_0">Current &amp; Past Addresses</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems1">
                                            <input type="checkbox" data-box-name="Phone Numbers" id="negativeInformationItemsCheckBoxGroup2_1" name="negativeInformationItemsGroup2_1">
                                            <label for="negativeInformationItemsCheckBoxGroup2_1"> Phone Numbers</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems2">
                                            <input type="checkbox" data-box-name="Email Addresses" id="negativeInformationItemsCheckBoxGroup2_2" name="negativeInformationItemsGroup2_2">
                                            <label for="negativeInformationItemsCheckBoxGroup2_2"> Email Addresses</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems3">
                                            <input type="checkbox" data-box-name="Photos &amp; Videos" id="negativeInformationItemsCheckBoxGroup2_3" name="negativeInformationItemsGroup2_3">
                                            <label for="negativeInformationItemsCheckBoxGroup2_3"> Photos &amp; Videos</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems4">
                                            <input type="checkbox" data-box-name="Social Profiles &amp; Posts" id="negativeInformationItemsCheckBoxGroup2_4" name="negativeInformationItemsGroup2_4">
                                            <label for="negativeInformationItemsCheckBoxGroup2_4"> Social Profiles &amp; Posts</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems5">
                                            <input type="checkbox" data-box-name="Friends &amp; Associates" id="negativeInformationItemsCheckBoxGroup2_5" name="negativeInformationItemsGroup2_5">
                                            <label for="negativeInformationItemsCheckBoxGroup2_5"> Friends &amp; Associates</label>
                                        </div>
                                        <div class="negativeInformationItem negativeInformationItemOnly" id="negativeInformationItems6">
                                            <input type="checkbox" data-box-name="Relatives &amp; Neighbors" id="negativeInformationItemsCheckBoxGroup2_6" name="negativeInformationItemsGroup2_6">
                                            <label for="negativeInformationItemsCheckBoxGroup2_6"> Relatives &amp; Neighbors</label>
                                        </div>
                                    </div>
                                    <div id="showMoreNegativeInformation2" class="showMore">+ Show More Contact Details</div>
                                </div> 
                            </div>
                        </div>
                        <div class="thisIsMe" id="thisIsMe">
                            <input type="checkbox" id="thisIsMeCheckBox" name="thisIsMeCheckBox">
                            <label for="thisIsMeCheckBox">This is me - Needed to Edit Public Profile</label>
                        </div>
                        <div id="stickyAction" class="sticky">
                            <a id="verification-button" href="/site/ob/init/ps-bgc.pubview?flowId=flow154&forceOBRedir=true&epid=${$("#epid").val()}" class="orangeBtn" tabindex="5">Continue to Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function proceedToNextStep(num) {
    console.log('listCheckbox', listCheckbox, num);
    let hrefStr = $("#verification-button").attr('href');
    try {
        let contactInfoBool = null;
        $.each( listCheckbox, function( key, value ) {
            console.log('value', key, value)
            if (
                value == 'Current & Past Addresses' ||
                value ==  'Phone Numbers' ||
                value == 'Email Addresses' ||
                value == 'All Contact & Personal Info' ||
                value == 'Photos & Videos' ||
                value == 'Social Profiles & Posts' ||
                value == 'Friends & Associates' ||
                value == 'Relatives & Neighbors'
            ){
                if (contactInfoBool === null) {
                    contactInfoBool = true;
                }
            } else {
                contactInfoBool = false;
            }
        })

        if (contactInfoBool == true) {
            // append param for last page and success url for reg redirect
            hrefStr = hrefStr + '&ic=1'
        }

    } catch (err) {
        console.log('listCheckbox', err)
    }

    if (listCheckbox.length !== 0) {
        //set dynamic steps

        dynamicSteps = {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false,
            step6: false,
            step7: false,
            step8: false,
            step9: true
        }

        dynamicNumberSteps = 1;

        $.each( listCheckbox, function( key, value ) {
            console.log("listCheckbox: ", key + " : " + value );
            try {
                if (dynamicStepsObj.step1.tags.indexOf(value) !== -1) {
                    dynamicSteps.step1 = true;
                }
                if (dynamicStepsObj.step2.tags.indexOf(value) !== -1) {
                    dynamicSteps.step2 = true;
                }
                if (dynamicStepsObj.step3.tags.indexOf(value) !== -1) {
                    dynamicSteps.step3 = true;
                }
                if (dynamicStepsObj.step4.tags.indexOf(value) !== -1) {
                    dynamicSteps.step4 = true;
                }
                if (dynamicStepsObj.step5.tags.indexOf(value) !== -1) {
                    dynamicSteps.step5 = true;
                }
                if (dynamicStepsObj.step6.tags.indexOf(value) !== -1) {
                    dynamicSteps.step6 = true;
                }
                if (dynamicStepsObj.step7.tags.indexOf(value) !== -1) {
                    dynamicSteps.step7 = true;
                }
                if (dynamicStepsObj.step8.tags.indexOf(value) !== -1) {
                    dynamicSteps.step8 = true;
                }
            }
            catch(err) {
                console.log('Dynamic Slides Error')
            }

        });

        function updateStepCount() {
            var count = 1;

            if (dynamicSteps.step1) {
                count++;
            }
            if (dynamicSteps.step2) {
                count++;
            }
            if (dynamicSteps.step3) {
                count++;
            }
            if (dynamicSteps.step4) {
                count++;
            }
            if (dynamicSteps.step5) {
                count++;
            }
            if (dynamicSteps.step6) {
                count++;
            }
            if (dynamicSteps.step7) {
                count++;
            }
            if (dynamicSteps.step8) {
                count++;
            }

            return count
        }

        dynamicNumberSteps = updateStepCount();

        //AJAX TRACKING FOR CHECKBOXES
        // var checkBoxJson = JSON.stringify({ onboarding_ps_entry_reason : listCheckbox.join('|') });
        // if($('#thisIsMeCheckBox').prop('checked')) {
        //     checkBoxJson = JSON.stringify({ onboarding_idp_entry_reason : listCheckbox.join('|') });
        // }
        // MakeCall(checkBoxJson);

        setCookie("dynamicSteps", JSON.stringify(dynamicSteps), "", "/");
        setCookie("dynamicNumberSteps", dynamicNumberSteps, "", "/");

        // let vwoData = getVWOCampaignData();
        // if (vwoData.length !== 0) {
            // let objParam = {
            //     "usernum": "",
            //     "bundleId": "",  //bundle id if available
            //     "mobile": mobileCheck(),     //is this a mobile web browser?
            //     "pageName": "Public Profile Page | Onboarding Questions | " + ($('#thisIsMeCheckBox').prop("checked") ? "idp" : "ps") + " | " + listCheckbox.join("|"),  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
            //     "pageUri": location.toString(), // URI from the browser location bar
            //     "testName": (typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""),  //test name from VWO
            //     "testPlatform": "VWO",  //hardcode to VWO for now
            //     "variationName": (typeof vwoData[0][1].n !== "undefined" ? vwoData[0][1].n : "") // is this Variation or Control
            // }
            // try {
            //     if (isTesting) {
            //         let objParam = {
            //             "usernum": "",
            //             "bundleId": "",  //bundle id if available
            //             "mobile": mobileCheck(),     //is this a mobile web browser?
            //             "pageName": "Public Profile Page | Onboarding Questions | " + ($('#thisIsMeCheckBox').prop("checked") ? "idp" : "ps") + " | " + listCheckbox.join("|"),  //page name, something like "IDP PO�? or "PS PO�? or "CROSS-SELL PO�?
            //             "pageUri": location.toString(), // URI from the browser location bar
            //             "testName": testName,  //test name from VWO
            //             "testPlatform": "INTERNAL",  //hardcode to VWO for now
            //             "variationName": (isVariation ? "Variation" : "Control")
            //         }
            //         let objParamStringify = JSON.stringify(objParam);
            //         let callTracking = pageTestData(objParamStringify);
            //     }
            // } catch (e) {
            //     console.log('e',e)
            // }
            window.location.href = hrefStr;
        // } else {
        //     window.location.href = hrefStr;
        // }
    } else {
        window.location.href = hrefStr;
    }
}

function updateListCheckBox() {
    $.each($('.negativeInformationItem input'), function( index, value ) {
        // alert( index + ": " + $(value).prop('checked') );
        if ($(value).prop('checked') === true) {
            listCheckbox.push($(value).attr('data-box-name'))
        }
    })
    proceedToNextStep(1);
}

// function getOnboardingUrl(bool) {
//     try {
//         let vwoData = getVWOCampaignData();
//         if (bool) {
//             if (location.search !== "" && location.search.indexOf('epid') !== -1) {
//                 return `/site/ob/init/identity-premium.pubview${location.search}&skipFirstSlide=true&vwoName=${typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""}&vwoVariationName=${typeof vwoData[0][1].n !== "undefined" ? vwoData[0][1].n : ""}`;
//                 // window.location.href = '/site/ob/init/identity-premium.pubview' + location.search + "&skipFirstSlide=true";
//             } else if ($("#adl").val() != undefined) {
//                 if ($("#adl").val() != "") {
//                     return `/site/ob/init/identity-premium.pubview?adl=${$("#adl").val()}&skipFirstSlide=true&vwoName=${typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""}&vwoVariationName=${typeof vwoData[0][1].n !== "undefined" ? vwoData[0][1].n : ""}`;
//                     // window.location.href = '/site/ob/init/identity-premium.pubview?adl=' + userAdl + "&skipFirstSlide=true";
//                 }
//             }
//         }
//         return `/site/ob/pub_search_bgc_flow154/ps-bgc.pubview?epid=${$("#epid").val()}&vwoName=${typeof vwoData[0][0] !== "undefined" ? vwoData[0][0] : ""}&vwoVariationName=${typeof vwoData[0][1].n !== "undefined" ? vwoData[0][1].n : ""}`;
//     } catch(e) {
//         console.log('getOnboardingUrl error', e);
//         return `/site/ob/pub_search_bgc_flow154/ps-bgc.pubview?epid=${$("#epid").val()}`;
//     }
// }

function getOnboardingUrl(bool) {
    try {
        if (bool) {
            if (location.search !== "" && location.search.indexOf('epid') !== -1) {
                return `/site/ob/init/identity-premium.pubview${location.search}&skipFirstSlide=true`;
                // window.location.href = '/site/ob/init/identity-premium.pubview' + location.search + "&skipFirstSlide=true";
            } else if ($("#adl").val() != undefined) {
                if ($("#adl").val() != "") {
                    return `/site/ob/init/identity-premium.pubview?adl=${$("#adl").val()}&skipFirstSlide=true`;
                    // window.location.href = '/site/ob/init/identity-premium.pubview?adl=' + userAdl + "&skipFirstSlide=true";
                }
            }
        }
        return `/site/ob/init/ps-bgc.pubview?flowId=flow154&forceOBRedir=true&epid=${$("#epid").val()}`;
    } catch(e) {
        console.log('getOnboardingUrl error', e);
        return `/site/ob/init/ps-bgc.pubview?flowId=flow154&forceOBRedir=true&epid=${$("#epid").val()}`;
    }
}

//js events for checkbox onboarding overlay
function checkBoxOnboardingEvents() {
    $("#verification-button").click(function(e){
      try {
          e.preventDefault();
          updateListCheckBox();
      } catch(e) {
          console.log('verification-button', e)
      }
    });

    $("#verification-button").attr('href', getOnboardingUrl(false));
    $("#thisIsMeCheckBox").click(function() {
        if ($(this).is(':checked')) {
            console.log('CHECKED');
            $("#verification-button").attr('href', getOnboardingUrl(true));
        } else {
            console.log('UNCHECKED');
            $("#verification-button").attr('href', getOnboardingUrl(false));
        }
    });

    $('#showMoreNegativeInformation1').click(function () {
        if ($('#negativeInformation1').hasClass("open")) {
            $('#negativeInformation1').removeClass("open");
            $('#showMoreNegativeInformation1').text('+ Show More Background Details');
        } else {
            $('#negativeInformation1').addClass("open");
            $('#showMoreNegativeInformation1').text('- Show Less Background Details');
        }
    })

    $('#showMoreNegativeInformation2').click(function () {
        if ($('#negativeInformation2').hasClass("open")) {
            $('#negativeInformation2').removeClass("open");
            $('#showMoreNegativeInformation2').text('+ Show More Contact Details');
        } else {
            $('#negativeInformation2').addClass("open");
            $('#showMoreNegativeInformation2').text('- Show Less Contact Details');
        }
    })

    $('#negativeInformationHeader1').click(function (event) {
        console.log('change negativeInformationHeader1', $("#negativeInformationItemsCheckBox1").prop('checked'))
        var bool = $("#negativeInformationItemsCheckBox1").prop('checked');
        $('#negativeInformation1 input').prop( "checked", bool);
        if (bool) {
            $('#negativeInformationHeader1 label').addClass("checked");
            $('#negativeInformation1 label').addClass("checked");
        } else {
            $('#negativeInformationHeader1 label').removeClass("checked");
            $('#negativeInformation1 label').removeClass("checked");
        }

    })

    $('#negativeInformationHeader2').click(function (event) {
        console.log('change negativeInformationHeader2', $("#negativeInformationItemsCheckBox2").prop('checked'))
        var bool = $("#negativeInformationItemsCheckBox2").prop('checked');
        $('#negativeInformation2 input').prop( "checked", bool);
        if (bool) {
            $('#negativeInformationHeader2 label').addClass("checked");
            $('#negativeInformation2 label').addClass("checked");
        } else {
            $('#negativeInformationHeader2 label').removeClass("checked");
            $('#negativeInformation2 label').removeClass("checked");
        }
    })

    $('.negativeInformationItemOnly label').click(function (event) {
        var bool = $(event.target).siblings('input').prop('checked');
        // console.log('bool',bool)
        if (!bool) {
            $(event.target).addClass('checked')
        } else {
            $(event.target).removeClass('checked')
        }
    })
}

//Helpers
const determineRepColor = function (rate) {
    if (rate >= "0" && rate < "1.25") return "text-red";
    if (rate >= "1.25" && rate < "2.5") return "text-orange";
    if (rate >= "2.5" && rate < "3.75") return "text-lightGreen";
    if (rate >= "3.75" && rate <= "5") return "text-green";
};

function checkNested(obj) {
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
        if (obj.length !== undefined) {
            if (obj[0] != null) {
                if (!obj || !obj[0].hasOwnProperty(args[i])) {
                    return false;
                }
                obj = obj[0][args[i]];
            } else {
                return false;
            }
        } else {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
    }
    return true;
}

// Email Validation
function isEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email)
}

function runVwoLogic() {
    var vwo = getVwoTests();
    //console.log(vwo);
    if (vwo.length > 0) {
        $.each(vwo, function (index, value) {
            let valueArr = value.split("-");
            //console.log("valueArr:" + valueArr);
            let testName = typeof valueArr[1] !== "undefined" ? valueArr[1] : "";
            let variationDigit = typeof valueArr[2] !== "undefined" ? valueArr[2] : "";
            let uri = location.toString();
            let variationName = "";
            //console.log("uri:" + uri);
            if (variationDigit == "1") {
                variationName = "Control";
                uri = location.toString().split('?')[0];
            } else if (variationDigit == "2") {
                variationName = "Variation1";
            }
            else if (variationDigit == "3") {
                variationName = "Variation2";
             }
            else  {
                 variationName = "Variation";
            }
                    //console.log("uri:" + uri);

            var objVwoData = {
                "usernum": "",
                "bundleId": "",  //bundle id if available
                "mobile": mobileCheck(),     //is this a mobile web browser?
                "pageName": "Public Profile Page",  //page name, something like “IDP PO�? or “PS PO�? or “CROSS-SELL PO�?
                "pageUri": uri, // URI from the browser location bar
                "testName": testName,  //test name from VWO
                "testPlatform": "VWO",  //hardcode to VWO for now
                "variationName": variationName// is this Variation or Control
            };
            //console.log("objVwoData:" + objVwoData)
            var objParam = JSON.stringify(objVwoData);
            vwoTrackPageTest(objParam);

        });
    } else {
        var objVwoData = {
            "usernum": "",
            "bundleId": "",  //bundle id if available
            "mobile": mobileCheck(),     //is this a mobile web browser?
            "pageName": "Public Profile Page",  //page name, something like “IDP PO�? or “PS PO�? or “CROSS-SELL PO�?
            "pageUri": location.toString(), // URI from the browser location bar
            "testName": "0",  //test name from VWO
            "testPlatform": "VWO",  //hardcode to VWO for now
            "variationName": "Control"// is this Variation or Control
        };
        //console.log("objVwoData:" + objVwoData)
        var objParam = JSON.stringify(objVwoData);
        vwoTrackPageTest(objParam);
    }
}

function checkImg(img) {
    if (img.naturalHeight <= 1 && img.naturalWidth <= 1) {
        // undersize image here
        img.src = "/static/websat-profile/global/img/default-avatar.png";
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function vwoTrackPageTest(objData) {
    console.log("in main vwo function ", objData)
    // console.log("in main vwo function ", objData.usernum)

    // var objParam = {
    //     "usernum": objData.usernum,
    //     "bundleId": objData.bundleId,  //bundle id if available
    //     "mobile": objData.isMobile,     //is this a mobile web browser?
    //     "pageName": "Onboarding Registration Page",  //page name, something like “IDP PO�? or “PS PO�? or “CROSS-SELL PO�?
    //     "pageUri": location.toString(), // URI from the browser location bar
    //     "testName": objData.vwoName,  //test name from VWO
    //     "testPlatform": "VWO",  //hardcode to VWO for now
    //     "variationName": objData.vwoVariationName // is this Variation or Control
    // }
    // objParam = JSON.stringify(objParam);
    let test = getVwoTests();
    if (test.length != 0) {
        // console.log('On VWO Test', test);
        $.ajax({
            url: '/puser.v1/pub/pubsub/pageTestData',
            dataType: 'json',
            contentType: 'application/json',
            type: "POST",
            method: "POST",
            data: objData,
            success: function (response) {
                // console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}

function pageTestData(objData) {
    // console.log('On VWO Test', test);
    $.ajax({
        url: '/puser.v1/pub/pubsub/pageTestData',
        dataType: 'json',
        contentType: 'application/json',
        type: "POST",
        method: "POST",
        data: objData,
        success: function (response) {
            // console.log(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getVwoTests() {
    let cs = document.cookie.split(/;\s*/), vwoCookies = [], i;
    for (i = 0; i < cs.length; i++) {
        if (cs[i].match(/^_vis_opt_exp_.*_combi/)) {
            //modify the cookie string to VWO-TESTID-VARIANT and push to array
            vwoCookies.push('vwo-' + cs[i].match(/\d+/g)[0] + '-' + cs[i].slice(-1));
        }
    }
    return vwoCookies;
}

function getVWOCampaignData() {
    var campaignData = [];
    if (typeof _vwo_campaignData !== "undefined") {
        campaignData = Object.entries(_vwo_campaignData);
    }
    return campaignData;
}

function mobileCheck() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function addComa(stringNum) {
    const addedCommas = stringNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return addedCommas
}

// disabled exit reg modal
// try {
//     document.body.addEventListener("mouseleave", function(event){
//         // console.log('onmouseleave', event.clientY);
//         if(event.clientY <= 0){
//             // console.log('leaving', event.clientY);
//             // console.log('getCookie showRegModalExit', getCookie('showRegModalExit'))
//             if (document.querySelector('#checkboxOnboardingModal') === null && document.querySelector('#registrationModal') === null && getCookie('showRegModalExit') === null && document.querySelector('#improveModal') === null && document.querySelector('#messageModal') === null && document.querySelector('#lockInfoModal') === null && document.querySelector('#googleRegistrationModal') === null) {
//                 setCookie('autoRedirect', '1', "", "/"); // set to true to avoid redirect when modal is open
//                 setTimeout(() => {
//
//                     $("body").append(registrationModalContentV2('noBullets'));
//                     $(".registration-message").html(backButtonRegOverlay2());
//                     _exitIntent = true;
//                     // InitRenderGoogleOneTap();
//                     setCookie('showRegModalExit', '1', "", "/")
//                     // Set the whyReg Values
//                     stateProfile = {
//                         ...stateProfile,
//                         registerState: {
//                             ...stateProfile.registerState,
//                             firstName: $("#firstName").val(),
//                             lastName: $("#lastName").val(),
//                             zip: $("#zip").val(),
//                             age: $("#age").val(),
//                             whyReg4: "PS_VIEW_PROFILE"
//                         }
//                     }
//
//                     //Add the class to show the modal
//                     $("#registrationModal").addClass("show-modal");
//
//                     // Initiate the func
//                     thisIsMeProfileV2();
//
//                     signUpFieldValidation();
//
//                     _trackRegModal({ eventName:"showRegModalExit" })
//
//                 }, 500)
//             }
//         }
//     });
// } catch (err) {
//     console.log('err', err)
//
// }

function resetCountUp() {
    // console.log('resetCountUp');
    try {
        if(timerUserCounterOnpageAfetrScrollIsCalled == true && getCookie('autoRedirect') == null && (publicProfileAutoRedirectOnboarding == true || publicProfileAutoRedirectOnboarding == 'true')) {
            // console.log('resetCountUp clearing');
            clearInterval(intervalWrapper);
            timerUserOnPageAfterScroll = 0;
            timerUserCounterOnpageAfetrScrollIsCalled = false;
        }
    } catch(err) {
        console.log('err', err);
    }
}

function countUp() {
    try {
        timerUserOnPageAfterScroll = timerUserOnPageAfterScroll + 1;
        console.log("timerUserOnPageAfterScroll:" + timerUserOnPageAfterScroll);
        if(timerUserOnPageAfterScroll == publicProfileAutoRedirectOnboardingSecs && getCookie('autoRedirect') == null  && (publicProfileAutoRedirectOnboarding == true || publicProfileAutoRedirectOnboarding == 'true')){
            setCookie('backButton', '1', "", "/");
            setCookie('autoRedirect', '1', "", "/");
            // var epId = document.getElementById('epid').value;
            // var onboardingUrl = location.origin + '/site/ob/init/ps-bgc.pubview?flowId=flow153&epid='+ epId +'&forceOBRedir=true';
            // window.open(onboardingUrl,"_self");
            if (isMobileBrowser()) {
                //do nothing
            } else {
                $("body").append(checkBoxOnboardingOverlay());
                checkBoxOnboardingEvents();
            }
            clearInterval(intervalWrapper);
        }
    } catch(err) {
        console.log('err', err);
    }
}

function isMobileBrowser() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i))
    {
        return true;
    } else {
        return false;
    }
}

function MakeCall(myJSON){
    $.ajax({
        url: "/puser.v1/pub/vtrack/OB_QUESTION_V1",
        data: myJSON,
        dataType: "json",
        contentType: "application/json",
        type: "POST",
        method: "POST"
    }, function (result, status, xhr) {

    });
}