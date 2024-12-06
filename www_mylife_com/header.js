$(document).ready(function () {

    $("#open-menu").on("click", function (e) {

        if (!e.target.classList.contains("open")) {
            $(".burger-menu-dropdown").addClass("open");
        }
    })

    $("#close-menu, #img-close-menu").on("click", function (e) {

        if (!e.target.classList.contains("open")) {
            $(".burger-menu-dropdown").removeClass("open");
        }
    })

    $("#globalNameLocation-mobile, #globalNameLocation-mobile-modal").keydown(function (e) {
        console.log("keydown", e.target.value);
        if (e.target.value && e.target.value !== "") {

            $.ajax({
                type: 'GET',
                url: "/json/typeahead/location/10/?term=" + e.target.value,
                success: function (data) {
                    // console.log("typeahead1", data);
                    if (data && data.length !== 0) {
                        $("#location-1").empty();
                        $("#location-2").empty();
                        var listElem = null;
                        var textElem = '';
                        $(data).each(function( index, item ) {
                            // console.log('index', index);
                            // console.log('item', item);
                            $("#location-1").append('<div class="search-location-dropdown-list-item" onclick="setLocationValue(\'' + item.value.replaceAll("'","&lsquo;") + '\')">' + item.value + '</div>');
                            $("#location-2").append('<div class="search-location-dropdown-list-item" onclick="setLocationValue(\'' + item.value.replaceAll("'","&lsquo;") + '\')">' + item.value + '</div>');
                        });
                    }

                }
            })
        }

    })

    $("#mobile-icon-search, #search-other-people").on("click", function (e) {
        $("body").css({
            overflowY: "hidden"
        });
        $('#modalSearchForm').addClass('show');
    });

    // $(".header-content--search-bar,#mobile-icon-search, #search-other-people").on("click", function (e) {
    //     $("body").css({
    //         overflowY: "hidden"
    //     })
    //     if (typeof clientAlgolia === 'undefined') {
    //         // variable is undefined
    //         $.getScript("https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js").done(function () {
    //
    //             $.getScript("/static/websat-profile/alive/js/overlay-algolia-search.js").done(function () {
    //
    //                 printDefaultOverlay("open");
    //                 scrollYEvent();
    //
    //                 try {
    //                     resetCountUp();
    //                 } catch (err) {
    //                     console.log('err', err);
    //                 }
    //
    //             }).fail(function () {
    //
    //             })
    //         }).fail(function () {
    //
    //         })
    //     } else {
    //         printDefaultOverlay("open");
    //         scrollYEvent();
    //
    //         try {
    //             resetCountUp();
    //         } catch (err) {
    //             console.log('err', err);
    //         }
    //     }
    // });

    // $("#mobile-icon-search, #search-other-people").on("click", function (e) {
    //     $("body").css({
    //         overflowY: "hidden"
    //     })
    //     if (typeof clientAlgolia === 'undefined') {
    //         // variable is undefined
    //         $.getScript("https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js").done(function () {
    //
    //             $.getScript("/static/websat-profile/alive/js/overlay-algolia-search.js").done(function () {
    //
    //                 printDefaultOverlay("open");
    //                 scrollYEvent();
    //
    //                 try {
    //                     resetCountUp();
    //                 } catch (err) {
    //                     console.log('err', err);
    //                 }
    //
    //             }).fail(function () {
    //
    //             })
    //         }).fail(function () {
    //
    //         })
    //     } else {
    //         printDefaultOverlay("open");
    //         scrollYEvent();
    //
    //         try {
    //             resetCountUp();
    //         } catch (err) {
    //             console.log('err', err);
    //         }
    //     }
    // });

});

function setLocationValue(data) {
    console.log('setLocationValue', data);
    try {
        $('#globalNameLocation-mobile').val(data);
        $('#globalNameLocation-mobile-modal').val(data);
        $("#location-1").empty();
        $("#location-2").empty();
    } catch (e) {
      console.log('err setLocationValue')
    }

}

function closeModalSearchForm() {
    $("body").css({
        overflowY: "auto"
    });
    $('#modalSearchForm').removeClass('show');
}
