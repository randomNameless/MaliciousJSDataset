/**
 * If browser back button was used, flush cache
 * This ensures that user will always see an accurate, up-to-date view based on their state
 * https://stackoverflow.com/questions/8788802/prevent-safari-loading-from-cache-when-back-button-is-clicked
 */
 (function () {
    window.onpageshow = function (event) {
        if (event.persisted) {
            // window.location.reload();
            _OXF_.onBackButton();
        }
    };
})();

var _OXF_ = (function ($) {
    // namespace utils
    var _OXF_ = {};

    $(function () {
        _OXF_.initNav();
        _OXF_.initVideoModal();
        _OXF_.initListeners();
        _OXF_.initContactMap();
        _OXF_.initCaseStudies();
        _OXF_.initCaseMap();
    });

    var mapStyles = [
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ hue: "#ff0000" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f8fa" }],
        },
        {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [{ visibility: "off" }, { color: "#ff0000" }],
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#f7f8fa" }],
        },
        {
            featureType: "landscape.man_made",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [{ visibility: "simplified" }, { hue: "#0055ff" }],
        },
        {
            featureType: "poi.attraction",
            elementType: "all",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.attraction",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.attraction",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "poi.attraction",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [{ color: "#d8e5fe" }],
        },
        {
            featureType: "poi.business",
            elementType: "geometry.stroke",
            stylers: [{ color: "#7a90a2" }],
        },
        {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "labels.text",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.business",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.government",
            elementType: "all",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.government",
            elementType: "geometry.stroke",
            stylers: [{ color: "#dd3838" }],
        },
        {
            featureType: "poi.government",
            elementType: "labels.text",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.school",
            elementType: "all",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.sports_complex",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{ color: "#35495a" }],
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ hue: "#ffc600" }, { visibility: "off" }],
        },
        {
            featureType: "transit.line",
            elementType: "all",
            stylers: [{ visibility: "on" }],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#7596b2" }],
        },
    ];

    _OXF_.initNav = function () {
        navbarClass();
        $(window).scroll(navbarClass);
    };
    function navbarClass() {
        var $nav = $("#nav");
        if (window.pageYOffset > $nav.data("nav-offset")) {
            if (!$nav.hasClass("bg-white")) {
                $nav.addClass("bg-white");
            }
        } else {
            if ($nav.hasClass("bg-white")) {
                $nav.removeClass("bg-white");
            }
        }
    }

    $(".pageReload").on("click", function (e) {
       
       // setTimeout(function (params) {
           // location.reload();
       // }, 100);


    });

    // dropdowns
    // ===================
    // https://stackoverflow.com/questions/42183672/how-to-implement-a-navbar-dropdown-hover-in-bootstrap-v4
    // https://www.a11ywithlindsey.com/blog/create-accessible-dropdown-navigation
    // https://www.geeksforgeeks.org/how-to-detect-escape-key-press-using-jquery/#:~:text=To%20detect%20escape%20key%20press%2C%20keyup%20or%20keydown%20event%20handler,is%20released%20from%20the%20keyboard.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

    _OXF_.toggleDropdown = function (e) {
        // _OXF_.closeAllDropdowns();
        $(".dropdown-menu").removeClass("show");
        var _t = $(e.target),
            _d = _t.closest(".dropdown"),
            _m = $(".dropdown-menu", _d);

        var shouldOpen = e.type !== "click" && (_d.is(":hover") || _t.is(":focus"));
        _m.toggleClass("show", shouldOpen);
        _d.toggleClass("show", shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
    };

    _OXF_.closeAllDropdowns = function () {
        $(".dropdown-menu").removeClass("show");
    };
    _OXF_.handleEscKey = function (e) {
        // console.log("====");
        // console.log("esc key", e.key);
        // console.log("====");
        if (e.key === "Escape") {
            _OXF_.closeAllDropdowns();
        }
    };

    _OXF_.initListeners = function () {
        $("body").on("focus", ".nav-link", _OXF_.closeAllDropdowns).on(
            "mouseenter mouseleave focus",
            // ".nav-link",
            ".dropdown",
            _OXF_.toggleDropdown
        );

        $(".js-sidenav-close a").click(function () {
            $("#sideNavMobile").collapse("hide");
        });


        $(".js-browser-back").click(function (e) {

            if (document.referrer.indexOf("complex") > -1) {
                
                e.preventDefault();
                history.back();

            } 
          
           
        });

        $("body").keydown(_OXF_.handleEscKey);
        // .on("click", ".dropdown-menu a", toggleDropdown);
        _OXF_.initSmoothScroll();
        _OXF_.loadVideo();
        _OXF_.accordionEvents();
        // fallback for ie11 and position sticky https://github.com/yowainwright/stickybits
        // not necessary if ie11 doesn't work
        // $(".sticky-top").stickybits({ noStyles: true });

        // $(".js-sidenav-close a").click(function () {
        //   $("#sideNavMobile").collapse("hide");
        // });
    };

    _OXF_.onBackButton = function () {
        // reset mobile menu for iPhone
        $("#mobileNav").removeClass("show").collapse("hide");
    };

    _OXF_.loadVideo = function () {
        // $("[data-play-delay]").on("loadeddata", function () {
        //   var $vid = $(this),
        //     _delay = $vid.attr("data-play-delay") || 0;
        //   console.log("====");
        //   console.log("v loaded - delay:", _delay);
        //   console.log("====");
        //   setTimeout(function () {
        //     $vid.fadeIn(500, function () {
        //       $vid.get(0).play();
        //     });
        //   }, _delay * 1000);
        // });
        var vid = document.querySelector(".hero__video");
        if (vid) {
            vid.playbackRate = vid.getAttribute("data-video-speed") || 1;

            // stop video after 10 minutes
            setTimeout(function (params) {
                $("[data-play-stop]").get(0).pause();
            }, 60 * 1000 * (vid.getAttribute("data-video-stop") || 10));
        }
    };

    _OXF_.accordionEvents = function () {
        $(".js-accordion-scroll").on("shown.bs.collapse", function (e) {
            // do something...
            // console.log("show", e);
            $("html, body").animate(
                {
                    scrollTop: $(e.target).offset().top - 200,
                },
                300
            );
        });
    };


    /*mail to*/

    //Dynamically renders information to modal popup based on property element
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var $clone = $("#tilejs").clone();
        var element = $(event.relatedTarget); 
        var dynamic_text = element.find('.card-title').text();
        var infoText = element.find('.propEmail').text();

        var modal = $(this);
        $("#propModal").html(dynamic_text);
        $("#propModalText").html('For more information, please contact ' + '<strong>'+ infoText.replace("mailto:", "")+ '</strong>');
    });




    /*--------------------------------------------------------------
  ANIMATE scroll
  --------------------------------------------------------------*/
    _OXF_.initSmoothScroll = function () {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            // .not('[href="#singleLeaseGallery"]')
            .click(function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to

                    if (location.pathname === "/our-impact") {
                        let fixedHash = new URL(this.href).hash;

                        var $this = $(fixedHash),
                            filter = $this.attr("data-filter");
                        $("#caseFilters").collapse("hide");
            
                        $("#caseFilters").one("hidden.bs.collapse", function () {
                            // scroll top
                            $("html, body").animate(
                                {
                                    scrollTop: $(".js-scroll-hook").offset().top - 80,
                                },
                                300
                            );
                        });
            
                        // select current filter
                        $("[data-filter]").removeClass("underline");
                        $this.addClass("underline");
                        $(".js-filter-active").text(filter);
            
                        // show tiles
                        $(".js-case").hide();
                        $(".js-case" + "." + filter).each(function (i, el) {
                            setTimeout(function () {
                                $(el).fadeIn(300);
                            }, 300 * i);
                        });
                    }
                    else {
                        var hash = this.hash,
                            target = $(this.hash),
                            offset = 180;
                        console.log("====");
                        console.log(hash);
                        console.log("====");

                        // add optional offset
                        if (target.attr("data-hook-offset")) {
                            // if offset set in section, overwrite value
                            offset = target.attr("data-hook-offset");
                        }
                        target = target.length ? target : $("[name=" + hash.slice(1) + "]");
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault();
                            //setup delay to get the correct scroll area
                            setTimeout(function () {
                            $("html, body").animate(
                                {
                                    scrollTop: target.offset().top - parseInt(offset)
                                },
                                600,
                                function () {
                                    // Callback after animation
                                    // update deeplink
                                    // setTimeout(() => {
                                    //   location.hash = hash;
                                    // }, 600);
                                    // Must change focus!
                                    var $target = $(target);
                                    $target.focus();
                                    if ($target.is(":focus")) {
                                        // Checking if the target was focused
                                        return false;
                                    } else {
                                        // this causes scroll snap bug
                                        // $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable

                                        $target.focus(); // Set focus again
                                    }
                                }
                            );
                            }, 600);
                        }
                    }
                }
            });
    };

    _OXF_.initCaseMap = function () {
        /* case study PAGE MAP */
        if ($("#case-map").length > 0) {
            var initialMapCenter = _OXF_coords;

            var casemap = new google.maps.Map(document.getElementById("case-map"), {
                zoom:14,
                center: initialMapCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false,
                panControl: true,
                fullScreenControl: false,
                styles: mapStyles,
            });

           
           
            var latlng = new google.maps.LatLng(_OXF_coords.lat, _OXF_coords.lng);
            
           
         
            var icon = {
                url: "../img/map-marker.png",
                scaledSize: new google.maps.Size(24, 32), // scaled size
                //origin: new google.maps.Point(0,0), // origin
                //anchor: new google.maps.Point(72, 64) // anchor
            };
          
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                var marker = new google.maps.Marker({
                    position: { lat: building[1], lng: building[2] },
                    map: casemap,
                    icon: icon,
                    title: building[0],
                    zIndex: building[3]
                });
            }

           
        }
    };
    _OXF_.initContactMap = function () {
        /* CONTACT PAGE MAP */
        if ($("#contact-map").length > 0) {
            latitude = 43.6497729;
            longitude = -79.3846516;

            var initialMapCenter = { lat: latitude, lng: longitude };

            contactmap = new google.maps.Map(document.getElementById("contact-map"), {
                zoom: 14,
                center: initialMapCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false,
                panControl: true,
                fullScreenControl: false,
                styles: mapStyles,
            });
            var latlng = new google.maps.LatLng(latitude, longitude);
            var icon = {
                url: "img/map-marker.png",
                scaledSize: new google.maps.Size(24, 32), // scaled size
                //origin: new google.maps.Point(0,0), // origin
                //anchor: new google.maps.Point(72, 64) // anchor
            };
            var marker = new google.maps.Marker({
                map: contactmap,
                position: latlng,
                icon: icon,
            });
        }
    };

    _OXF_.initVideoModal = function () {
        var $videoSrc;
        $(".play-button").click(function () {
            $videoSrc = $(this).data("src");
            // console.log("====");
            // console.log($videoSrc.replace("autoplay=0", "autoplay=1"));
            // console.log("====");
        });

        // when the modal is opened autoplay it
        $("#videoModal").on("shown.bs.modal", function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr(
                "src",

                $videoSrc.replace("autoplay=0", "autoplay=1") //+ ""
                // "?controls=0&amp;autoplay=1&amp;loop=0&amp;modestbranding=1&amp;autohide=1&amp;iv_load_policy=3&amp;showinfo=0&amp;rel=0"
            );
            //&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwww.oxfordproperties.com
        });

        // stop playing the youtube video when I close the modal
        $("#videoModal").on("hide.bs.modal", function (e) {
            $("#video").attr("src", $videoSrc);
        });
    };

    _OXF_.initCaseStudies = function () {
        var $initialSet = $(".js-case");
        $("[data-filter]").click(function (e) {
            e.preventDefault();
            var $this = $(this),
                filter = $this.attr("data-filter");
            // console.log("====");
            // console.log(filter);
            // console.log("====");
            // hide filters
            $("#caseFilters").collapse("hide");

            //$("#caseFilters").one("hidden.bs.collapse", function () {
                // scroll top
                $("html, body").animate(
                    {
                        scrollTop: $(".js-scroll-hook").offset().top - 80,
                    },
                    300
                );
            //});

            // select current filter
            $("[data-filter]").removeClass("underline");
            $this.addClass("underline");
            $(".js-filter-active").text(filter);

            // show tiles
            $(".js-case").hide();
            $(".js-case" + "." + filter).each(function (i, el) {
                setTimeout(function () {
                    $(el).fadeIn(300);
                }, 300 * i);
            });
        });

        // fake load more
        $(".js-case-load").click(function (e) {
            $initialSet.parent().append($initialSet.clone());
        });
    };

    // expose only what's needed outside
    return {
        onBackButton: _OXF_.onBackButton,
    };
    // expose utils api
    // return _OXF_
})($);