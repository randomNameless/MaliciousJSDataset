(function ($) {

  var connectUrl = '';

    $(document).ready(function () {
        connectUrl = $('#header').attr('data-domain');

        //Error message position
        if ($('.error-message').length) {
            setTimeout(function () {
                var errorDiv = $('.error-message').first();
                var scrollPos = errorDiv.offset().top;
                $(window).scrollTop(scrollPos - 150);
            }, 1000);
        }

        if ($('#authMessage').length) {
            setTimeout(function () {
                var errorAuth = $('#authMessage').first();
                var scrollPos1 = errorAuth.offset().top;
                $(window).scrollTop(scrollPos1 - 150);
            }, 1000);
        }

        //Tab should not change
        if ($('.back-button').length) {
            $('ul#tabs li').each(function () {
                if (!$('this').hasClass('active')) {
                    $(this).css('pointer-events', 'none');
                }
            });
        }

        //Disable past dates in date picker
        $("#UserFormsapiForm #EventInitStartDate, #UserFormsapiForm #EventInitEndDate, #UserFormsapiForm #ArticleInitPublishUp, #UserFormsapiForm #ArticleInitPublishDown").datepicker({ minDate: 0 });

        //Apply margin for error messages
        if ($('#EventStartDateWrap .error-message').length) {
            $('#EventStartDateWrap').css('margin-bottom', '25px');
        }
        if ($('#EventEndDateWrap .error-message').length) {
            $('#EventEndDateWrap').css('margin-bottom', '10px');
            var errorMsg = $('#EventEndDateWrap .error-message').text();
            var errorMsgLength = errorMsg.length;
            var viewportWidth = $(window).width();
            if(errorMsgLength >= 40 && viewportWidth < 600) {
                $('#EventEndDateWrap').css('margin-bottom', '30px');
            }
        }

        //Disable dropdown option to choose month and year
        $("#UserModifyForm #ArticleInitPublishUp, #UserFormsapiForm #ArticleInitPublishDown, #UserModifyForm #EventInitStartDate, #UserModifyForm #EventInitEndDate").datepicker({
            changeMonth: false,
            changeYear: false
        });

        //Disable list button on edit posts page
        if (window.location.href.indexOf("forms/") >= 0) {
            $('.listing-page').css('display', 'none');
        }

        //Adjust space for error message
        if ($('.article-publish .error-message').length) {
            $('.forms-api .article-publish').css('margin-bottom', '20px');
        }

        //Change placeholder of venue field when Location is selected
        $("#EventVenueId").on('change', function () {
            $("#EventLocation").attr('placeholder', 'Enter additional details such as room# or meeting instructions');
        });

        //Forms API
        $("ul#tab li input, ul#tab li select").attr('disabled', 'disabled');
        $("ul#tab li.active input, ul#tab li.active select").removeAttr('disabled');


        $(".forms-api ul#tabs li").on('click', function () {
            var $this = $(this);
            if (!$this.hasClass("active")) {
                var tabNum = $this.index();
                var nthChild = tabNum + 1;
                var dataType = $this.attr('data-type');
                $("ul#tabs li.active").removeClass("active");
                $this.addClass("active");
                $("ul#tab li input, ul#tab li select").attr('disabled', 'disabled');
                $("ul#tab li.active").removeClass("active");
                $("ul#tab li:nth-child(" + nthChild + ")").addClass("active");
                $("ul#tab li:nth-child(" + nthChild + ") input, ul#tab li:nth-child(" + nthChild + ") select").removeAttr('disabled');
                $('#FormType').val(dataType);
                $('#forms-api > .listing-link-wrapper a').each(function () {
                    var $_this = $(this);
                    var currentDType = $_this.attr('data-type');
                    if (currentDType === dataType) {
                        $_this.addClass('active');
                    } else {
                        $_this.removeClass('active');
                    }
                });
            }
        });


        if ($('.forms-api #tab').attr('data-url')) {
            var dataTypeValueTemp = '';
            var typeOfPostT = $('#tab').attr('data-url');
            var tmpCountValue = 0;
            switch (typeOfPostT) {
                case 'org':
                    tmpCountValue = 1;
                    break;
                case 'article':
                    tmpCountValue = 2;
                    break;
                case 'photo':
                    tmpCountValue = 3;
                    break;
            }
            dataTypeValueTemp = $("ul#tabs li:eq(" + tmpCountValue + ")").attr('data-type');
            $('#FormType').val(dataTypeValueTemp);
        }


        $('#hiddenAdditionalFieldCheck').hide().parent().hide();
        $loginInputs = $('.forms-api .login-wrap input');
        $loginWrapper = $('.forms-api .login-wrap');
        $registerWrapper = $('.forms-api .registration-wrap');
        $registerInputs = $('.forms-api .registration-wrap input');

        $('.forms-api #user-preference-login-register input[type="radio"]').on('change', function () {
            var whichAction = $(this).val();
            if (whichAction === 'register') {
                $loginInputs.attr('disabled', 'disabled');
                $('.login-wrap #UserUsername').attr('name', 'data[UserNew][username]');
                $('.registration-wrap #UserNewUsername').attr('name', 'data[User][username]');
                $registerInputs.removeAttr('disabled');
                $loginWrapper.addClass('hidden-wrapper');
                $registerWrapper.removeClass('hidden-wrapper');
            } else if (whichAction === 'login') {
                $registerInputs.attr('disabled', 'disabled');
                $('.registration-wrap #UserNewUsername').attr('name', 'data[UserNew][username]');
                $('.login-wrap #UserUsername').attr('name', 'data[User][username]');
                $loginInputs.removeAttr('disabled');
                $loginWrapper.removeClass('hidden-wrapper');
                $registerWrapper.addClass('hidden-wrapper');
            }
        });

        var $closeMobileElmentMob = $('.forms-api > a.close-popup-button');
        var isClosePopUpBtnPresent = $closeMobileElmentMob.length;
        var stateInfo2Pass = '';
        if(isClosePopUpBtnPresent) {
            var commonCookies4Mob = document.cookie.split(";");
            for (var i = 0; i < commonCookies4Mob.length; i++) {
                var nameOrg = commonCookies4Mob[i].split('=')[0];
                var name = nameOrg.replace(/^\s+|\s+$/g, '');
                var cookieValue = commonCookies4Mob[i].split('=')[1];
                if(name === 'passLoginStatMob' && cookieValue) {
                    stateInfo2Pass = cookieValue;
                    break;
                }
            }
            $closeMobileElmentMob.on('click', function(e) {
                e.preventDefault();
                var expDateTmp = new Date();
                var tTimeFrm = expDateTmp.getTime();
                var urlToRedirectClBtn = $(this).attr('href');
                urlToRedirectClBtn += stateInfo2Pass ? '?loginState=' + stateInfo2Pass : '';
                tTimeFrm = tTimeFrm - (14 * 24 * 60* 60*1000);
                expDateTmp.setTime(tTimeFrm);
                expDateTmp = expDateTmp.toUTCString();
                document.cookie = "siteformat= ;expires=" + expDateTmp + ";path=/";
                document.cookie = "mainATRedirectUrl= ;expires=" + expDateTmp + ";path=/";
                document.cookie = "passLoginStatMob= ;expires=" + expDateTmp + ";path=/";
                location.href = '//' + connectUrl + urlToRedirectClBtn;
            });
        }
        $('.forms-api #user-nav > li > a.log-out').on('click', {type: "org"}, function (e, data) {
            e.preventDefault();
            var url2pass = connectUrl;
            var logOutUrl = $(this).attr('href');
            var tmpNewDate = new Date();
            var mstime = tmpNewDate.getTime();
            var expDate = new Date();
            var expTime =  mstime - (14 * 24 * 60* 60*1000);
            expDate.setTime(expTime);
            expDate = expDate.toUTCString();
            document.cookie = "CakeCookie[Auth]= ;expires=" + expDate + ";path=/";
            $.get(logOutUrl).done(function() {
                if(isClosePopUpBtnPresent) {
                    var tmpClsURL = $closeMobileElmentMob.attr('href');
                    location.href = tmpClsURL; 
                    tmpClsURL += '?userLoggedOut=1'; 
                    document.cookie = "siteformat= ;expires=" + expDate + ";path=/";
                    document.cookie = "mainATRedirectUrl= ;expires=" + expDate + ";path=/";
                    document.cookie = "passLoginStatMob= ;expires=" + expDate + ";path=/";
                    location.href = '//' + url2pass+tmpClsURL; 
                } else {                   
                    if (top.location !== self.location) {
                        var tmp = {fromAPITest:'logoutP', dmnUrl:url2pass};
                        tmp = JSON.stringify(tmp);
                        parent.postMessage(tmp,"//"+url2pass);
                    } else {
                        location.reload();
                    }
                }
            });
        });

        var isformsApiFlag = $('.forms-api').length;

        if (isformsApiFlag) {
            var cookiesOutSide = document.cookie.split(";");
            var $venuesLinkElmnt = $('#UserFormsapiForm #addVenue');
            var flag4SubmitVenue = true;
            $('.forms-api').off('submit', '#VenueAddForm').on('submit', '#VenueAddForm', function (e) {
                e.preventDefault();
                var $sectionVenuesContnr = $('section.venues');
                if(flag4SubmitVenue) {
                    flag4SubmitVenue = false;
                    var ajUrl = $(this).attr('action');
                    var dataSend = $(this).serialize();
                    var $sectionVenuesContnr = $('section.venues');
                    var venuesHeadingElement = $('#main > .venues h2');
                    var $eventPartnerKeyElem = $('#EventPartnerKey');
                    $.post(ajUrl, dataSend, function (data) {
                        var tmpVar = data.split('</pre>').pop();
                        data = $.parseJSON(tmpVar);
                        if (data.status === 'error') {
                            var errolFields = data.data;
                            var frstFlag = true;
                            for (var key in errolFields) {
                                var msg = errolFields[key][0];
                                var tst = '#VenueAddForm input[name="data[Venue][' + key + ']"], #VenueAddForm select[name="data[Venue][' + key + ']"]';
                                if(frstFlag) {
                                    frstFlag = false;
                                    var scrollPos = $(tst).offset().top;
                                    $(window).scrollTop(scrollPos);
                                }

                                if ($(tst).siblings('span.error-message').length) {
                                    $(tst).siblings('span.error-message').text(msg);
                                } else {
                                    $(tst).parent('div').append('<span class="error-message next-line">' + msg + '</span>');
                                }
                                flag4SubmitVenue = true;
                            }
                        } else if (data.status === 'updated') {
                            $('#EventVenuetownid').val("");
                            $('#EventVenuecreatedby').val("");
                            $('#EventVenuecreatedbyalias').val("");
                            $('#EventVenuename').val("");
                            $('#EventVenueaddr').val("");
                            $('#EventVenuetown').val("");
                            $('#EventVenueurl').val("");
                            $('#EventVenuephone').val("");
                            $('#EventVenuegptownid').val("");
                            $('#EventVenuegpplaceid').val("");
                            $('#EventVenuegpplacename').val("");
                            $('#EventVenuegpaddr').val("");
                            $('#EventVenuegpurl').val("");
                            $('#EventVenuegpphone').val("");
                            var venueTitle = $('#VenueName').val();
                            var newlyAddedVenue = data.venue_id;
                            $('#EventVenueId').val(newlyAddedVenue).trigger('change');
                            $('#EventVenue').val(data['vName'] + ', ' + data['vaddr'] + ', ' +data['vCityStateZip']);

                            var userType = document.getElementById("EventUserType").value;
                            var oldTownId = document.getElementById("EventTownId").value;
                            var townData = '';
                            $.ajax({
                                url: '/zippicker.php?town_id=' + data['vTown_id'],
                                type: 'GET',
                                success: function (data) {
                                    townData = JSON.parse(data);
                                    if (oldTownId !== townData[0]['id']) {
                                        $('#EventCityState').val(townData[0]['cityState']);
                                        $('#EventTownId').val(townData[0]['id']);
                                    }
                                    if (userType == 'admin') {
                                        if (oldTownId !== townData[0]['id']) {
                                            $('#EventGroupId option').remove();
                                            $.ajax({
                                                url: '/forms/get_group_list',
                                                data: {
                                                    townId: $('#EventTownId').val()
                                                },
                                                type: 'POST',
                                                success: function (data) {
                                                    $('#EventGroupId').append(data);
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                            if ($('.forms-api #EventUserType').prev('.error').length == 1) {
                                $('.forms-api #EventUserType').prev('.error').text('');
                            }
                            $sectionVenuesContnr.addClass('hidden');
                            venuesHeadingElement.text('Edit Custom Address');
                            $eventPartnerKeyElem.val('atn');
                            $('#forms-api').removeClass('hidden');
                            $venuesLinkElmnt.text('Edit Custom Address');
                            if ($('.forms-api #main > #flashMessage').length) {
                                $('.forms-api #main > #flashMessage').text('Venue \'' + venueTitle + '\' has been saved.');
                            } else {
                                $('.forms-api #main').prepend('<div id="flashMessage" class="message s-message">Venue \'' + venueTitle + '\' has been saved.</div>');
                            }
                            flag4SubmitVenue = true;
                        } else if (data.status === 'success') {
                            $('#EventVenuetownid').val("");
                            $('#EventVenuecreatedby').val("");
                            $('#EventVenuecreatedbyalias').val("");
                            $('#EventVenuename').val("");
                            $('#EventVenueaddr').val("");
                            $('#EventVenuetown').val("");
                            $('#EventVenueurl').val("");
                            $('#EventVenuephone').val("");
                            var venueTitle = $('#EventVenuegpplacename').val();
                            var userType = document.getElementById("EventUserType").value;
                            var oldTownId = document.getElementById("EventTownId").value;
                            var townData = '';
                            $.ajax({
                                url: '/zippicker.php?town_id=' + $('#postal_code').val(),
                                type: 'GET',
                                success: function (data) {
                                    townData = JSON.parse(data);
                                    if (oldTownId !== townData[0]['id']) {
                                        $('#EventCityState').val(townData[0]['cityState']);
                                        $('#EventTownId').val(townData[0]['id']);
                                    }
                                    if (userType == 'admin') {
                                        if (oldTownId !== townData[0]['id']) {
                                            $('#EventGroupId option').remove();
                                            $.ajax({
                                                url: '/forms/get_group_list',
                                                data: {
                                                    townId: $('#EventTownId').val()
                                                },
                                                type: 'POST',
                                                success: function (data) {
                                                    $('#EventGroupId').append(data);
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                            if ($('.forms-api #EventUserType').prev('.error').length == 1) {
                                $('.forms-api #EventUserType').prev('.error').text('');
                            }
                            $sectionVenuesContnr.addClass('hidden');
                            venuesHeadingElement.text('Add or Use Custom Address');
                            $eventPartnerKeyElem.val('gp');
                            flag4SubmitVenue = true;
                        } else if (data.status === 'validated') {
                            $('#EventVenuegptownid').val("");
                            $('#EventVenuegpplaceid').val("");
                            $('#EventVenuegpplacename').val("");
                            $('#EventVenuegpaddr').val("");
                            $('#EventVenuegpurl').val("");
                            $('#EventVenuegpphone').val("");
                            $('#EventVenueId').val("");
                            var venueTownId = $('#VenueTownId').val();
                            var venueCreatedBy = $('#VenueCreatedBy').val();
                            var venueCreatedByAlias = $('#VenueCreatedByAlias').val();
                            var venueTitle = $('#VenueName').val();
                            var venueAddr = $('#VenueAddress').val();
                            var venueTown = $('#VenueCityStateZip').val();
                            var venueUrl = $('#VenueUrl').val();
                            var venuePhone = $('#VenuePhone').val();
                            // var newlyAddedVenue = data.venue_id;
                            // $('#EventVenueId').val(newlyAddedVenue).trigger('change');
                            $('#EventVenuetownid').val(venueTownId);
                            $('#EventVenuecreatedby').val(venueCreatedBy);
                            $('#EventVenuecreatedbyalias').val(venueCreatedByAlias);
                            $('#EventVenuename').val(venueTitle.replace(/^\s+|\s+$/g, ''));
                            $('#EventVenueaddr').val(venueAddr.replace(/^\s+|\s+$/g, ''));
                            $('#EventVenuetown').val(venueTown);
                            $('#EventVenueurl').val(venueUrl);
                            $('#EventVenuephone').val(venuePhone);
                            $('#EventVenue').val($('#EventVenuename').val() + ', ' + $('#EventVenueaddr').val() + ', ' + $('#EventVenuetown').val());

                            var userType = document.getElementById("EventUserType").value;
                            var oldTownId = document.getElementById("EventTownId").value;
                            var townData = '';
                            $.ajax({
                                url: '/zippicker.php?town_id=' + venueTownId,
                                type: 'GET',
                                success: function (data) {
                                    townData = JSON.parse(data);
                                    if (oldTownId !== townData[0]['id']) {
                                        $('#EventCityState').val(townData[0]['cityState']);
                                        $('#EventTownId').val(townData[0]['id']);
                                    }
                                    if (userType == 'admin') {
                                        if (oldTownId !== townData[0]['id']) {
                                            $('#EventGroupId option').remove();
                                            $.ajax({
                                                url: '/forms/get_group_list',
                                                data: {
                                                    townId: $('#EventTownId').val()
                                                },
                                                type: 'POST',
                                                success: function (data) {
                                                    $('#EventGroupId').append(data);
                                                }
                                            });
                                        }
                                    }                                
                                }
                            });
                        if ($('.forms-api #EventUserType').prev('.error').length == 1) {
                            $('.forms-api #EventUserType').prev('.error').text('');
                        }
                        $sectionVenuesContnr.addClass('hidden');
                        venuesHeadingElement.text('Edit Custom Address');
                        $eventPartnerKeyElem.val('atn');
                        $('#forms-api').removeClass('hidden');
                        $venuesLinkElmnt.text('Edit Custom Address');
                        if ($('.forms-api #main > #flashMessage').length) {
                            $('.forms-api #main > #flashMessage').text('Venue \'' + venueTitle + '\' has been saved.');
                        } else {
                            $('.forms-api #main').prepend('<div id="flashMessage" class="message s-message">Venue \'' + venueTitle + '\' has been saved.</div>');
                        }
                        flag4SubmitVenue = true;
                    }
                    });
                }
            });

            function hideErrMasgVenue(event) {
                var evType = event.data.type;
                var flag = false;
                var $_this = $(this);
                if ($_this.siblings('span.error-message').length) {
                    flag = true;
                }
                if (evType === 'inp') {
                    if (flag) {
                        $_this.siblings('span.error-message').text('');
                    }
                } else if (evType === 'select') {
                    if ($_this.val()) {
                        if (flag) {
                            $_this.siblings('span.error-message').text('');
                        }
                    }
                }
            }

            $('.forms-api').on('focus', '#VenueAddForm input[type="text"]', {type: "inp"}, hideErrMasgVenue);
            $('.forms-api').on('change', '#VenueAddForm select', {type: "select"}, hideErrMasgVenue);

            $('input[type="file"]').on('change', function () {
                var $this = $(this);
                var imageValue = $this.val();
                if (imageValue) {
                    var $index = imageValue.lastIndexOf('\\');
                    var $expc = imageValue.substring($index + 1, imageValue.length);
                    imageValue = $expc;
                    $this.siblings('label').addClass('image-selected').text(imageValue);
                } else {
                    imageValue = 'Select Image';
                    $this.siblings('label').removeClass('image-selected').text(imageValue);
                }
            });
            
            var $loginPingElement = $('#generate-hiddenTag-signal');
            if($loginPingElement.length) {
                var url2pass = connectUrl;
                var cValueObj = {state:1,authurl:url2pass};
               var hitAuthCookie = false;
               var authCStrV = '';
               for (i = 0; i < cookiesOutSide.length; i++) {
                   var cArray = cookiesOutSide[i].split('=');
                   var nameOrg = cArray[0];
                   var cValue = cArray[1];
                   nameOrg = nameOrg.replace(/^\s+|\s+$/g, '');
                   if(nameOrg === 'CakeCookie[Auth]' && cValue.replace(/^\s+|\s+$/g, '')) {
                       authCStrV = cValue;
                       hitAuthCookie = true;
                       break;
                   }
               }
               if(hitAuthCookie) {
                   cValueObj['encStr'] = authCStrV;
                   var stringObj = JSON.stringify(cValueObj);
                   var tmpNewDate = new Date();
                   var mstime = tmpNewDate.getTime();
                   var twoWeaksTime = mstime + (14 * 24 * 60* 60*1000);
                   tmpNewDate.setTime(twoWeaksTime);
                   tmpNewDate = tmpNewDate.toUTCString();
                   document.cookie = "userStateInfoAPI=" + stringObj + "; expires=" + tmpNewDate + ";domain=" + connectUrl + ";path=/";
               }
            }
            if($('#removeUserStateCookie').length) {
                var tempObj = {state:0,authurl:connectUrl,encStr:''};
                var mainObjC = JSON.stringify(tempObj);
                var authStr = '';
                var expDate = new Date();
                var expTime = expDate.getTime() - (14 * 24 * 60* 60*1000);
                expDate.setTime(expTime);
                expDate = expDate.toUTCString();
                document.cookie = "userStateInfoAPI=" + mainObjC + ";expires=" + expDate + ";domain="+ connectUrl +";path=/";
            }
        } else {            
            $('#american-towns > a, #nearby-towns-dd ul > li:last > a, .login > h2.sm-american-towns-logo > a').on('click', function(e) {
                e.preventDefault();
                var cookiesTownReset = document.cookie.split(";");
                var resetTownUrl = $(this).attr('href');
                var isCookieDeleted = false;
                var lengthOfCookies = cookiesTownReset.length;
                $.get(resetTownUrl, function () {
                    var counterDc = 0;
                    for (var i = 0; i < lengthOfCookies; i++) {
                        var nameOrg = cookiesTownReset[i].split('=')[0];
                        var name = nameOrg.replace(/^\s+|\s+$/g, '');
                        var newDateT = new Date();
                        var curr = newDateT.getTime();
                        var prev_one_months_date = curr - (1* 30 * 24 * 60* 60*1000);
                        newDateT.setTime(prev_one_months_date);
                        newDateT = newDateT.toUTCString();
                        if (name === 'ctapi') {
                            document.cookie = "ctapi=; expires=" + newDateT + ";domain="+ connectUrl +";path=/";
                            counterDc++;
                        } else if (name === 'btapi') {
                            document.cookie = "btapi= ;expires=" + newDateT + ";domain="+ connectUrl +";path=/";
                            counterDc++;
                        }
                        if (counterDc === 2) {
                            isCookieDeleted = true;
                            break;
                        }
                    }
                    if (isCookieDeleted) {
                        location.href = '//www'+ connectUrl +'/';
                    } else {
                        location.href = resetTownUrl;
                    }
                });
            });

            var commonCookies = document.cookie.split(";");
            var myDate = new Date();
            myDate = myDate.toUTCString();
            for (var i = 0; i < commonCookies.length; i++) {
                var nameOrg = commonCookies[i].split('=')[0];
                var name = nameOrg.replace(/^\s+|\s+$/g, '');
                var cookieValue = commonCookies[i].split('=')[1];
                if(name === 'site_format') {
                    document.cookie = 'site_format4API='+cookieValue+'; expires='+myDate+';path=/;domain='+ connectUrl +';';
                } else if (name === 'userStateInfoAPI' && cookieValue) {
                   var newObj = JSON.parse(cookieValue);
                   if((newObj['authurl'] === connectUrl) && (newObj['state'] === 1)) {
                       var tempObj = {state:0,authurl:connectUrl,encStr:''};
                       var mainObjC = JSON.stringify(tempObj);
                       var authStr = '';
                       var expDate = new Date();
                       var expTime = expDate.getTime() - (14 * 24 * 60* 60*1000);
                       expDate.setTime(expTime);
                       var newDateT = new Date();
                       var curr = newDateT.getTime();
                       var twoWeeksPeriod = curr + (14 * 24 * 60* 60*1000);
                       newDateT.setTime(twoWeeksPeriod);
                       newDateT = newDateT.toUTCString();
                       expDate = expDate.toUTCString();
                       authStr = newObj['encStr'];
                       document.cookie = "CakeCookie[Auth]="+authStr+" ;expires=" + newDateT + ";path=/";
                       document.cookie = "userStateInfoAPI=" + mainObjC + ";expires=" + expDate + ";domain="+ connectUrl +";path=/";
                        $('#user-nav > li.logout').removeClass('hidden-anchor');
                        $('#user-nav > li.my-profile').removeClass('hidden-anchor');
                        $('#user-nav > li.login').addClass('hidden-anchor');
                        $('#user-nav > li.register').addClass('hidden-anchor');
                       parent.postMessage(stringObj,"//"+url2pass);
                       if(isClosePopUpBtnPresent)
                           document.cookie = "passLoginStatMob="+stringObj+" ;expires=" + tmpNewDate + ";path=/";
                       stateInfo2Pass = stringObj;
                   }
               }
            }
        }

        var commonCookies = document.cookie.split(";");
        var myDate = new Date();
        var tmpNewDate = new Date();
        var mstime = tmpNewDate.getTime();
        var twoDaysTime = mstime + (2 * 24 * 60* 60*1000);
        tmpNewDate.setTime(twoDaysTime);
        tmpNewDate = tmpNewDate.toUTCString();
        for (var i = 0; i < commonCookies.length; i++) {
            var nameOrg = commonCookies[i].split('=')[0];
            var name = nameOrg.replace(/^\s+|\s+$/g, '');
            var cookieValue = commonCookies[i].split('=')[1];
            var encValuetown = '';
            if (name === 'ct' && cookieValue && !isformsApiFlag) {
                encValuetown = cookieValue+ '&&&&forms'+connectUrl;
                document.cookie = "ctapi=" + encValuetown + ";expires=" + tmpNewDate + ";domain="+ connectUrl +";path=/";
            } else if (name === 'bt' && cookieValue && !isformsApiFlag) {
                encValuetown = cookieValue+ '&&&&forms'+connectUrl;
                document.cookie = "btapi=" + encValuetown + ";expires=" + tmpNewDate + ";domain="+ connectUrl +";path=/";
            } else if(name === 'userStateInfoAPI' && cookieValue) {
                var newObj = JSON.parse(cookieValue);
                if((newObj['state'] === 2) && (newObj['authurl'] === connectUrl) && !isformsApiFlag) {
                    var tempObj = {state:0,authurl:connectUrl,encStr:''};
                    var mainObjC = JSON.stringify(tempObj);
                    var authStr = '';
                    var expDate = new Date();
                    var expTime = expDate.getTime() - (14 * 24 * 60* 60*1000);
                    expDate.setTime(expTime);
                    expDate = expDate.toUTCString();
                    document.cookie = "CakeCookie[Auth]="+authStr+" ;expires=" + expDate + ";path=/";
                    document.cookie = "userStateInfoAPI=" + mainObjC + ";expires=" + expDate + ";domain="+ connectUrl +";path=/";
                    $.get('/logout').done(function() {location.reload();});
                }
            }
        }
        
        var $venueDropDown = $('#tabs-1 #EventVenueId');
        if($venueDropDown.val()) {
            var VenueId = $venueDropDown.val();
            var AddrUrl = '/ajax/venues/get_address/id:'+VenueId;
            $.get(AddrUrl, function(data) {
                $venueDropDown.siblings('#venueAddress').text(data);
            });
        }

        $('#EventRepeating, #EventNoenddate, #ArticleNoenddate').on('change', function() {
            var $currentElement = $(this);
            var elementsId = $currentElement.attr('id');
            var $repeatWrap = '';
            var reverseAction = false;
            switch (elementsId) {
                case 'EventRepeating': $repeatWrap = $('#RepeatWrap'); break;
                case 'EventNoenddate': $repeatWrap = $('#EventEndDateWrap'); 
                // Check end date when an event is edited
                var currentStartDate = $('#EventInitStartDate').val();
                var currentEndDate = $('#EventInitEndDate').val();
                if (currentEndDate == '') {
                  $('#EventInitEndDate').val(currentStartDate).trigger('change');
                }
                break;
                case 'ArticleNoenddate':
                    $repeatWrap = $('#ArticleInitPublishDownWrap');
                    reverseAction = true;
                    break;
            }
            if($(this).is(':checked')) {
                if(reverseAction) {
                    $repeatWrap.addClass('hidden');
                } else {
                    $repeatWrap.removeClass('hidden');
                }
            } else {
                if(reverseAction) {
                    $repeatWrap.removeClass('hidden');
                } else {
                    $repeatWrap.addClass('hidden');
                }
            }
        });

        // Array with day's shortname
        var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Show day when date is selected using datepicker
        $("#UserFormsapiForm #EventInitStartDate, #UserFormsapiForm #EventInitEndDate").on('change', function() {
           var currentId = $(this).attr('id');
           var myDate = $(this).val();
           var valueDate = new Date(myDate);
           var statFlagSd = false;
           var $dateSelector;
           var eventId = $('#EventId').val();
           if(currentId === 'EventInitStartDate') {
               $dateSelector = $("#start-day");
               statFlagSd = true;
           } else {
               $dateSelector = $("#end-day");
           }            
           var calcDay = weekday[valueDate.getDay()];
           if(myDate) {
               $dateSelector.html(calcDay);
               if(statFlagSd && !eventId) {
                   $("#UserFormsapiForm #EventInitEndDate").datepicker('setDate', valueDate);
                   $("#UserFormsapiForm #EventInitEndDate").datepicker({dateFormat: 'dd/mm/yy'}).trigger('change');
               }
           } else {
               $dateSelector.html('');
           }
        });

        // To display hidden error message
        if ($('#RepeatEndDateWrap').hasClass('error')) {
            $('#RepeatEndDateWrap.error').addClass('hiddenx');
            $('.error-message').css("visibility", "visible");
        }

        // Duplication of events logic
        var editEvent = $('#EventId').val();
        var duplicateWaringContainer = $('.forms-api .duplicate-events-container');
        var connectUrlOfDuplicateEvent = '//'+connectUrl;

        function duplicateEventWarning() {
            var userEnteredLocation = $('#EventLocation').val();
            var userEnteredStartDate = $('#EventInitStartDate').val();
            var userEnteredCity = $('#EventTownId').val();
            var userEnteredVenue = $('#EventVenueId').val();
            var EventVenueName = ($('#EventVenue').val());
            var isRepeatChecked = $('#EventRepeating').is(':checked');
            if(!EventVenueName || !(EventVenueName.replace(/^\s+|\s+$/g, ''))) {
                $('#EventVenueId').val('');
            }
            var userData = {'data[Event][venue_id]':userEnteredVenue ,'data[Event][town_id]':userEnteredCity, 'data[Event][location]':userEnteredLocation, 'data[Event][init_start_date]':userEnteredStartDate};
            if (userEnteredCity && userEnteredStartDate && (userEnteredLocation || userEnteredVenue) && !isRepeatChecked) {
                $('.forms-api .duplicate-events-container .loader-warning-img').removeClass('hidden');
                $.ajax({
                    url: '/checkduplicateevent',
                    data: userData,
                    type: 'POST',
                    success: function (data) {
                        duplicateEventListing(data);
                    }
                });
            } else if(userEnteredCity && userEnteredStartDate && (userEnteredLocation || userEnteredVenue) && isRepeatChecked) {
                repeatingEventFreq();
            } else {
                duplicateWaringContainer.addClass('hidden-div');
            }
        }

        function duplicateEventListing(data) {
            $("#EventDuplicate").prop("checked", false);
            $('.forms-api .duplicate-events-section').html('');
            var data = data.split('</pre>').pop();
            var myData = $.parseJSON(data);
            var eventDetailUrl = connectUrlOfDuplicateEvent;
            var dataObject = Object.keys(myData).length;
            var duplicateEventStrct = '';
            var userEnteredStartDate = $('#EventInitStartDate').val();
            var month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            var tmpDate = new Date(userEnteredStartDate);
            var monthFromDB = month[tmpDate.getMonth()];
            tmpDate = monthFromDB + '/' + ('0' + tmpDate.getDate()).slice(-2) + '/' + tmpDate.getFullYear();
            var flag4RepeatWarning = true;
            var startDivFlag = true;
            var repeatingFlagSet = false;
            if (dataObject) {
                for (var key in myData) {
                    var dupEventTitle = myData[key]['Event']['title'];
                    var dupEventId = myData[key]['Event']['id'];
                    var dupEventStartDate = myData[key]['Event']['start_date'];
                    dupEventStartDate = dupEventStartDate.split(' ')[0];
                    dupEventStartDate = dupEventStartDate.split('-');
                    dupEventStartDate = dupEventStartDate.join('/');
                    var dupEventStartDateT = new Date(dupEventStartDate);
                    var monthEntered = month[dupEventStartDateT.getMonth()];
                    dupEventStartDateT = monthEntered + '/' + ('0' + dupEventStartDateT.getDate()).slice(-2) + '/' + dupEventStartDateT.getFullYear();
                    var dupEventStartTime = myData[key]['Event']['time'];
                    var dupTownSefUrl = myData[key]['Town']['sef_url'];
                    var dupEventSefTail = myData[key]['Event']['sef_tail'];
                    if (dupEventStartTime == null) {
                        dupEventStartTime = '12:00am';
                    }
                    duplicateWaringContainer.removeClass('hidden-div');                    
                    if (editEvent != dupEventId) {
                        if(startDivFlag) {
                            if (dataObject > 1) {
                                if(dupEventStartDateT !== tmpDate) {
                                    duplicateEventStrct += '<div class="same-date">';
                                } else {
                                    duplicateEventStrct += '<div class="same-date"><h4>We have found matching events at the same location/venue and date:</h4>';
                                }
                            } else {
                                if(dupEventStartDateT !== tmpDate) {
                                    duplicateEventStrct += '<div class="same-date">';
                                } else {
                                    duplicateEventStrct += '<div class="same-date"><h4>We have found a matching event at the same location/venue and date:</h4>';
                                }
                                if (editEvent == dupEventId) {
                                    duplicateWaringContainer.addClass('hidden-div');
                                }
                            }
                            startDivFlag = false;
                        }
                        if(dupEventStartDateT !== tmpDate) {
                            if(flag4RepeatWarning) {
                                duplicateEventStrct += '</div><div class="repeat-dates"><h5>We have found a matching event at the same location/venue for one or more of your dates in the repeating series. Please confirm.</h5>';
                                flag4RepeatWarning = false;
                                repeatingFlagSet = true;
                            }
                        }
                        duplicateEventStrct += '<div class="duplicate-events">';
                        duplicateEventStrct += '<span class="duplicate-event-name"> <a href="'+ eventDetailUrl + '/' + dupTownSefUrl + '/events/' + dupEventSefTail +'" target="_blank">' + dupEventTitle + '</a></span>';
                        if (repeatingFlagSet) {
                            duplicateEventStrct += '<span class="duplicate-event-time"> ' + dupEventStartDateT + ' ' + dupEventStartTime + '</span>';
                        } else {
                            duplicateEventStrct += '<span class="duplicate-event-time"> ' + dupEventStartTime + '</span>';                            
                        }
                        duplicateEventStrct += '</div>';
                    } else {
                        if(dataObject === 1) {
                            duplicateWaringContainer.addClass('hidden-div');
                        }
                    }
                }
                duplicateEventStrct += '</div>';                
                $('.forms-api .duplicate-events-container ').removeClass('hidden');
                $('.forms-api .duplicate-events-container .loader-warning-img').addClass('hidden');
                $('.forms-api .duplicate-events-section').append(duplicateEventStrct);          
            } else {
                duplicateWaringContainer.addClass('hidden-div');
            }
        }
  
        $('#EventVenue, #EventCityState, #EventLocation, #EventInitStartDate').on('autocompletechange change', duplicateEventWarning);
        
        if (editEvent) {
            $('#EventInitStartTime').one('click', duplicateEventWarning);
        }

        $('.close-popup').on('click', function() {
            duplicateWaringContainer.addClass('hidden-div');
        });

        // Duplicate event logic for repeating events
        function repeatingEventFreq() {
            var repeatStartDate = $('#EventInitStartDate').val();
            var isRepeatChecked = $('#EventRepeating').is(':checked');
            var $repeatSectionElm = $('.duplicate-events-section > .repeat-dates');
            var repeatingEventCombination = $('#EventRepeatId, #EventVenueId, #EventTownId, #EventLocation, #EventStartDate input, #RepeatWrap select, #RepeatWrap input').serialize();
            if (repeatStartDate && isRepeatChecked) {
                $('.forms-api .duplicate-events-container .loader-warning-img').removeClass('hidden');
                $.ajax({
                    url: '/repeatingcombination',
                    data: repeatingEventCombination,
                    type: 'POST',
                    success: function (data) {
                        isRepeatChecked = $('#EventRepeating').is(':checked');
                        if(isRepeatChecked) {
                            duplicateEventListing(data);
                        }
                    }
                });
            } else if(!isRepeatChecked) {
                if($repeatSectionElm.length) {
                    if($('.duplicate-events-section > .same-date > .duplicate-events').length) {
                        $repeatSectionElm.addClass('hidden');
                    } else {
                        duplicateWaringContainer.addClass('hidden-div');
                    }
                } else if(duplicateWaringContainer.hasClass('hidden-div')) {
                    duplicateEventWarning();
                }
            }
        }

        $('#EventRepeating, #RepeatWrap select, #RepeatWrap input[type="checkbox"], #RepeatWrap input[type="text"]').on('change', repeatingEventFreq);

        //Allow duplicate event logic
        var allowDuplicateEvent = false;
        $(".duplicate-wrap #EventDuplicate").change(function() {
            if(this.checked) {
                allowDuplicateEvent = true;
            }
        });

        // To throw error when specific date is not entered
        $('#UserFormsapiForm').on('submit', function(e) {
            var checkTypeOfForm = $('#FormType').val();
            var duplicateEventLink = false;
            if ($('.duplicate-events a').length) {
                duplicateEventLink = true;
            }
            if (!allowDuplicateEvent && checkTypeOfForm == 'Event' && duplicateEventLink) {
                e.preventDefault();
                duplicateWaringContainer.removeClass('hidden-div');
            } else {
                var checkError = true;
                $('body').css('cursor', 'wait');
                $('button').css('cursor', 'wait');
                $('#EventGroupId, #ArticleGroupId, #PhotoGroupId').removeAttr('disabled'); //for group dropdown while add/edit from selected group of admin this page.
                var eventEndSelection = $("#RepeatInitEnds").val();
                var isRepeatingChecked = $('#EventRepeating').is(':checked');
                if(eventEndSelection == 1 && isRepeatingChecked) {
                    var specificEndDate = $('#RepeatInitEndDate').val();
                    if(specificEndDate == '') {
                        e.preventDefault();
                        checkError = false;
                        $('.error-message').remove();
                        $('#RepeatEndDateWrap').append('<div class="error-message">Please adjust end date to today or later.</div>');
                        $('body').css('cursor', 'default');
                        $('button').css('cursor', 'default');
                    }
                }
            }
            
            // Show popup for mobile site
            if(checkError) {
                $('.mobile-overlay').css('display', 'block');
            }
            if ($('.duplicate-events-container').length) {
                setTimeout(function () {
                    var errorAuth = $('.duplicate-events-container').first();
                    var scrollPosition = errorAuth.offset().top;
                    $(window).scrollTop(scrollPosition - 150);
                });
            }
        });
    });
    
    $(window).on('load', function () {
        var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var startDate = $('#UserFormsapiForm #EventInitStartDate').val();
        var endDate = $('#UserFormsapiForm #EventInitEndDate').val();
        var startDateValue = new Date(startDate);
        var endDateValue = new Date(endDate);
        var calcStartDay = weekday[startDateValue.getDay()];
        var calcEndDay = weekday[endDateValue.getDay()];
        if (startDate) {
            $("#start-day").html(calcStartDay);
        } else {
            $("#start-day").html('');
        }
        if (endDate) {
            $("#end-day").html(calcEndDay);
        } else {
            $("#end-day").html('');
        }
    });

}(jQuery));

$(function() {
    if(jQuery().tinymce)
    $('textarea.tinyMCE').tinymce({
        // General options
        script_url: '/js/tiny_mce/tiny_mce.js',
        mode: "specific_textareas",
        editor_selector: "tinymce",
        theme: "advanced",
        plugins: "table,inlinepopups,autolink,lists,spellchecker,advhr,advimage,advlink,media,imagemanager,autoresize",
        valid_elements: "*[*]",
        extended_valid_elements: "*[*]",
        verify_html: false,
        // Theme options
        theme_advanced_buttons1: "bold,italic,underline,strikethrough,hr,|,bullist,numlist,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,fontselect,fontsizeselect,|,undo,redo,|,forecolor,backcolor,|,link,unlink,anchor,image,media,cleanup,table,removeformat,code",
        theme_advanced_buttons2: "",
        theme_advanced_buttons3: "",
        theme_advanced_buttons4: "",
        theme_advanced_toolbar_location: "top",
        theme_advanced_toolbar_align: "left",
        theme_advanced_resizing: true,
        convert_urls: false,
        relative_urls: false,
        remove_script_host: false,
        // Example content CSS (should be your site CSS)
        content_css: "/css/cats.css"
    });
    
    $('textarea.tinyMCE').each(function() {
       //this.style.height = 0;
        //this.style.height = (this.scrollHeight) + "px";
        this.style.height = "200px";
    });
    
    // global picker
    $('input.picker').each(function() {
        var data = $(this).data('picker');
        var $currentElement = $(this);
        // config
        if (data) {
            switch (data.type) {
                case 'group':
                    data.url = '/grouppicker.php';
                    data.select_event = function (event, ui) {
                        if (!$(data.town_id).val()) {
                            if (data.town_id != 'undefined')
                                $(data.town_id).val(ui.item.town_id);
                            if (data.town_name != 'undefined')
                                $(data.town_name).val(ui.item.city_state);
                        }
                        $(data.update_id).val(ui.item.id);
                    }
                    break;
                case 'tag':
                    data.source_event = function (request, response) {
                        $.getJSON("/tagpicker.php", {term: extractLast(request.term), completeterm: request.term}, response);
                    }
                    data.focus_event = function () {
                        return false;
                    }
                    data.select_event = function (event, ui) {
                        var terms = split(this.value);
                        terms.pop();
                        terms.push(ui.item.value);
                        terms.push("");
                        this.value = terms.join(", ");
                        return false;
                    }
                    break;
                case 'venue':
                    data.url = '/venuepicker.php';
                    data.select_event = function (event, ui) {
                        $(data.update_id).val(ui.item.id);
                        if (data.town_id != 'undefined')
                            $(data.town_id).val(ui.item.town_id);
                        if (data.town_name != 'undefined')
                            $(data.town_name).val(ui.item.city_state);
                    }
                    break;
                case 'venuename':
                    data.url = '/venuenamepicker.php';
                    data.select_event = function (event, ui) {
                        var currentUserID = $('#VenueCurrentUser').val() ? $('#VenueCurrentUser').val() : '' ;
                        if(ui.item.created_by !== currentUserID) {
                            $('#VenueAddForm #VenueAddress, #VenueAddForm #VenueUrl, #VenueAddForm #VenuePhone').attr('readonly', 'readonly').attr('data-from', 'from-picker-view');
                            $('#VenueAddForm #VenueId').val('');
                        } else if(ui.item.created_by === currentUserID) {
                            $('#VenueAddForm #VenueId').val(ui.item.id);
                        }
                        $(data.update_id).val(ui.item.id);
                        if ($(data.update_addr)) {
                            $(data.update_addr).val(ui.item.address);
                            $(data.update_addr).siblings('span.error-message').text('');
                        }
                        if ($(data.update_town)) {
                            $(data.update_town).val(ui.item.city_state_zip);
                            $(data.update_town).siblings('span.error-message').text('');
                        }
                        if ($(data.update_phone)) {
                            $(data.update_phone).val(ui.item.phone);
                            $(data.update_phone).siblings('span.error-message').text('');
                        }
                        if ($(data.update_url)) {
                            $(data.update_url).val(ui.item.url);
                            $(data.update_url).siblings('span.error-message').text('');
                        }
                        if (data.town_id != 'undefined')
                            $(data.town_id).val(ui.item.town_id);
                        if (data.town_name != 'undefined')
                            $(data.town_name).val(ui.item.city_state_zip);
                    };
                    break;
                case 'calendar':
                    data.url = '/calendarpicker.php';
                    break;
                case 'zip':
                    data.type = 'town';
                    data.url = '/zippicker.php';
                    data.auto_focus = true;
                    data.focus_event = function (event, ui) {
                        if ($(data.update_id))
                            $(data.update_id).val(ui.item.id);
                    }
                    break;
                case 'town_admin':
                    data.type = 'town';
                    data.url = '/townpicker_admin.php';
                    if (data.location_type != 'undefined')
                        data.url += '?location_type=' + data.location_type;
                    data.auto_focus = true;
                    data.focus_event = function (event, ui) {
                        if ($(data.update_id))
                            $(data.update_id).val(ui.item.id);
                        if ($(data.update_sef_url))
                            $(data.update_sef_url).val(ui.item.sef_url);
                    }
                    break;
                default :
                    data.type = 'town';
                    data.url = '/townpicker.php';
                    if (data.location_type != 'undefined')
                        data.url += '?location_type=' + data.location_type;
                    data.auto_focus = true;
                    data.focus_event = function (event, ui) {
                        if ($(data.update_id))
                            $(data.update_id).val(ui.item.id);
                        if ($(data.update_sef_url))
                            $(data.update_sef_url).val(ui.item.sef_url);
                    }
            }
        }

        // defaults
        var data = $.extend({'min_length': '3', 'auto_focus': false, 'focus_event': false,
            'select_event': function (event, ui) {
                if ($(data.update_id)) {
                    var locationObj = {lat: Number(ui.item.latitude, 10), lng: Number(ui.item.longitude, 10)};
                    $(data.update_id).val(ui.item.id);
                    $('EventVenueId, #EventVenue, #EventPlaceId').val('');
                    if (typeof  window.updateMapCenter4Venues === "function")
                        window.updateMapCenter4Venues(locationObj);
                }
            },
            'source_event': function (request, response) {
                var tmpAddre = ($('#VenueAddForm #VenueAddress').attr('data-from') === 'from-picker-view') ? true : false;
                var tmpPhone = ($('#VenueAddForm #VenuePhone').attr('data-from') === 'from-picker-view') ? true : false;
                var tmpUrl = ($('#VenueAddForm #VenueUrl').attr('data-from') === 'from-picker-view') ? true : false;
                if(tmpAddre && tmpPhone && tmpUrl) {
                    $('#VenueAddForm #VenueAddress, #VenueAddForm #VenueUrl, #VenueAddForm #VenuePhone').val('').removeAttr('readonly').removeAttr('data-from');
                }
                
                var town_id = (data.town_id) ? $(data.town_id).val() : '';
                $.getJSON(data.url, {term: request.term, town_id: town_id}, function (data) {
                    response(data);
                    if (data.length < 1) {
                        $currentElement.parent('div').next('.error').text('Please enter Your Town or its ZIP correctly');
                    } else {
                        $currentElement.parent('div').next('.error').text('');
                    }
                });
            }
        }, data);

        // autocomplete
        $(this).autocomplete({
            source: data.source_event, minLength: data.min_length, autoFocus: data.auto_focus, focus: data.focus_event, select: data.select_event,
			open: function (result) {
				if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
					$('.ui-autocomplete').off('menufocus hover mouseover');
				}
			}
        }).keydown(function (event) {
            if (event.which != 9 && event.which != 13 && event.which != 16 && event.which != 17 && event.which != 18)
                $(data.update_id).val('');
        });
    });

    function split(val) {
        return val.split(/,\s*/);
    }
    function extractLast(term) {
        return split(term).pop();
    }

    // Script for Event Form
    if(jQuery().datepicker)
    $(".datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: "-0:+3"
    });

    if(jQuery().datepicker)
    $('.csv-datepicker').datepicker();

    $('#EventInitStartTimeHour').change(function () {
        $('#EventInitEndTimeHour').val($('#EventInitStartTimeHour').val());
        $('#EventInitEndTimeMin').val($('#EventInitStartTimeMin').val());
        $('#EventInitEndTimeMeridian').val($('#EventInitStartTimeMeridian').val());
    });

    if(jQuery().timepicker)
    $('.timepicker').timepicker({'step': 15});

    if ($('#EventAllDayEvent').attr("checked") === 'checked') {
        $('.EventInitTimeWrap').addClass('hidden');
        $('#EventEndDateWrap').addClass('hidden');
        $('#EventNoenddateWrap').addClass('hidden');
    } else if ($('#EventNoenddate').attr("checked") === 'checked') {
        //$('#EventAllDayEventWrap').addClass('hidden');
        $('#EventEndDateWrap').removeClass('hidden');
    }

    if ($('#EventRepeating').attr('checked') === 'checked') {
        $('#RepeatWrap').removeClass('hidden');
    }

    $('#EventAllDayEvent').click(function () {
        if($(this).attr('checked') == 'checked') {
            $('.EventInitTimeWrap').addClass('hidden');
            if ($('#EventNoenddate').is(':checked')) {
                $('#EventEndDateWrap').addClass('hidden');
            }
            $('#EventNoenddateWrap').addClass('hidden');
        } else {
            $('.EventInitTimeWrap').removeClass('hidden');
            $('#EventNoenddateWrap').removeClass('hidden');
            if ($('#EventNoenddate').is(':checked')) {
                $('#EventEndDateWrap').removeClass('hidden');
            }
        }
    });

    if(!$('.forms-api').length) {
        $('#EventNoenddate').click(function() {
            //$('#EventAllDayEventWrap').toggleClass('hidden');
            $('#EventEndDateWrap').toggleClass('hidden');
        });
    }

    if($('#RepeatInitDaysStyle').val() === 'numdays') {
        $('#RepeatInitDaysFreqWrap').removeClass('hidden');
    } else if($('#RepeatInitDaysStyle').val() === 'weekdays') {
        $('#RepeatInitDaysFreqWrap').addClass('hidden');
    }

    if($('#RepeatInitEnds').val() === '1') {
        $('#RepeatEndDateWrap').removeClass('hidden');
    } else {
        $('#RepeatEndDateWrap').addClass('hidden');
    }

    if(!$('.forms-api').length) {
        $('#EventRepeating').click(function() {
            $('#RepeatWrap').toggleClass('hidden');
        });
    }

    $('#RepeatInitEnds').change( function() {
        if($(this).val() == 1) {
            $('#RepeatEndDateWrap').removeClass('hidden');
        } else {
            $('#RepeatEndDateWrap').addClass('hidden');
        }
    });

    switch ($('#RepeatInitType').val()) {
        case 'days':
            $('.RepeatTypeWrap').addClass('hidden');
            $('#RepeatDaysWrap').removeClass('hidden');
            break;
        case 'weeks':
            $('.RepeatTypeWrap').addClass('hidden');
            $('#RepeatWeeksWrap').removeClass('hidden');
            break;
        case 'months':
            $('.RepeatTypeWrap').addClass('hidden');
            $('#RepeatMonthsWrap').removeClass('hidden');
            break;
        default:
    }

    if($('#RepeatInitWeeksStyle').val() === 'numweeks') {
        $('#RepeatInitWeeksNthWrap').removeClass('hidden');
        $('#RepeatInitWeeksFreqWrap').addClass('hidden');
    } else if ($('#RepeatInitWeeksStyle').val() === 'nthweek') {
        $('#RepeatInitWeeksNthWrap').addClass('hidden');
        $('#RepeatInitWeeksFreqWrap').removeClass('hidden');
    }

    if($('#RepeatInitMonthsStyle').val() === 'dayofmonth') {
        $('#RepeatInitMonthsNthWrap').removeClass('hidden');
        $('#RepeatInitMonthsFreqDaysWrap').addClass('hidden');
    } else if($('#RepeatInitMonthsStyle').val() === 'dayofweek') {
        $('#RepeatInitMonthsNthWrap').addClass('hidden');
        $('#RepeatInitMonthsFreqDaysWrap').removeClass('hidden');
    }

    $('#RepeatInitType').change( function() {
        $('.RepeatTypeWrap').addClass('hidden');
        switch($(this).val()) {
            case 'days':
                $('#RepeatDaysWrap').removeClass('hidden');
                break;
            case 'weeks':
                $('#RepeatWeeksWrap').removeClass('hidden');
                break;
            case 'months':
                $('#RepeatMonthsWrap').removeClass('hidden');
                break;
            default:
        }
    });

    $('#RepeatInitDaysStyle').change( function() {
        if ($(this).val() == 'numdays') {
            $('#RepeatInitDaysFreqWrap').removeClass('hidden');
        } else if ($(this).val() == 'weekdays') {
            $('#RepeatInitDaysFreqWrap').addClass('hidden');
        }
    });

    $('#RepeatInitWeeksStyle').change( function() {
        if ($(this).val() == 'numweeks') {
            $('#RepeatInitWeeksNthWrap').removeClass('hidden');
            $('#RepeatInitWeeksFreqWrap').addClass('hidden');
        } else if ($(this).val() == 'nthweek') {
            $('#RepeatInitWeeksNthWrap').addClass('hidden');
            $('#RepeatInitWeeksFreqWrap').removeClass('hidden');
        }
    });

    $('#RepeatInitMonthsStyle').change( function() {
        if($(this).val() == 'dayofweek') {
            $('#RepeatInitMonthsFreqDaysWrap').removeClass('hidden');
            $('#RepeatInitMonthsNthWrap').addClass('hidden');
        } else if($(this).val() == 'dayofmonth') {
            $('#RepeatInitMonthsFreqDaysWrap').addClass('hidden');
            $('#RepeatInitMonthsNthWrap').removeClass('hidden');
        }
    });

    $('#saveOnly').click(function() {
        $('#EventRepeating').val('');
        $('#EventEditForm').submit();
    });
    $('#saveAll').click(function() {
        $('#EventEditForm').submit();

    });
    $('#save').click(function(e) {
            if($('#EventRepeating').attr('checked') === 'checked' && $('#EventId').val() && $('#EventRepeatId').val()) {
                    /*$('#dialog').dialog('open');*/
                    e.preventDefault();
            }
    });

    if($('#EventCreateArticle').attr('checked') === 'checked') {
            $('#ArticlePublishWrap').removeClass('hidden');
    } else {
            $('#ArticlePublishWrap').addClass('hidden');
    }
    $('#EventCreateArticle').click(function() {
            $('#ArticlePublishWrap').toggleClass('hidden');
    });

    // script for article form
    if($('#ArticleNoenddate').attr('checked') === 'checked') {
                    $('#ArticleInitPublishDownWrap').addClass('hidden');
            } else {
                    $('#ArticleInitPublishDownWrap').removeClass('hidden');
            }

    if(!$('.forms-api').length) {
              $('#ArticleNoenddate').click(function() {
                    $('#ArticleInitPublishDownWrap').toggleClass('hidden');
            });
    }
    
});
