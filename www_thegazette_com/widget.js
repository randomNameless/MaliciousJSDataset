// LEGACY WIDGET
window.TicketSauceWidget = { fetchEvents:function(){

    // Localize jQuery variable
    var jQuery;

    var ts_args = arguments[0];

    var currentPage = 1;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.5.1') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    ts_scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = ts_scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        ts_main();
    }


    /******** Called once jQuery has loaded ******/
    function ts_scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        ts_main();
    }

    /******** Our main function ********/
    function ts_main() {
        jQuery(document).ready(function($) {
            if (typeof ts_args.loc === 'undefined'){
                var location = 'events';
            } else {
                var location = ts_args.loc;
            }
            /******* Load CSS *******/
            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://" + location + ".ticketsauce.com/css/events/widget.css"
            });
            css_link.appendTo('head');

            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://" + location + ".ticketsauce.com/fullcalendar-5.3.0/main.css"
            });
            css_link.appendTo('head');

            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            });
            css_link.appendTo('head');

            var meta_link = $("<meta>", {
                name: "viewport",
                content: "height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0",
            });
            meta_link.appendTo('head');

            /******* build the URL *******/
            var jsonp_url = "https://" + location + ".ticketsauce.com/events/events_by_organization/" + ts_args.pid;
            if (typeof ts_args.oid !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.oid;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.start !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.start;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.end !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.end;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.type !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.type;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.topic !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.topic;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.inclcal !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.inclcal;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            if (typeof ts_args.incltype !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incltype;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            if (typeof ts_args.incltopic !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incltopic;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            if (typeof ts_args.incldateless !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incldateless;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            if (typeof ts_args.inclThumbnail !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.inclThumbnail;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            // console.log(jsonp_url);

            /******* Get The Data *******/
            $.getJSON(jsonp_url, function(data) {

                /******* Custom Options *******/
                if (typeof ts_args.accntcolor !== 'undefined'){
                    var newCss = '.ts-accntcolor{background-color:' + ts_args.accntcolor + '!important;}';
                    newCss += '.ts-accntcolortext{color:' + ts_args.accntcolor + '!important;}';
                    newCss += '#ts-events-listing-container .pagination-links .selected{ background-color:' + ts_args.accntcolor + '!important; color:white;}'
                    $("<style></style>").appendTo("head").html(newCss);
                }
                /******* Remove Previous Data *******/
                $('#ts-events-listing-container').empty();

                /******* Write Returned HTML *******/
                $('#ts-events-listing-container').append(data.html);

                var listingCount = 0;
                var clearDiv = '<div style="clear:both;"></div>';
                var pageNumber = 1;
                var first = true;

                /******* Process and write the data *******/
                data['data'].forEach(function (item, index) {
                    var devAddition = '';
                    var inputData = '';
                    var pagingEnd = '';


                    if (typeof ts_args.limitlistings !== 'undefined' && $.isNumeric(ts_args.limitlistings)){
                        if (typeof ts_args.inclpaging !== 'undefined' && ts_args.inclpaging == true){
                            /******* If is paging, and is the first row *******/
                            if(ts_args.limitlistings == listingCount){
                                listingCount = 0;
                                pageNumber++;
                            }
                        } else {

                            if(ts_args.limitlistings <= listingCount){
                                // skips the listing
                                return true;
                            }
                        }
                        listingCount++;
                    }

                    inputData += '<div class="event-paging event-paging-' + pageNumber + '" data-page="' + pageNumber + '">';

                    if (typeof ts_args.incldatebox === 'undefined' || ts_args.incldatebox == true){
                        if(item['Event']['start_month']){
                            inputData += '<div class="date-box"><div class="month ts-accntcolor">' + item['Event']['start_month'] + '</div><div class="day">' + item['Event']['start_day'] + '</div></div>';
                        }
                    }

                    if (typeof ts_args.inclThumbnail === 'undefined' || ts_args.inclThumbnail == true){
                        if(item['Event']['thumb_url'] !== false){
                            inputData += '<div class="imageContainer" ><img src="' + item['Event']['thumb_url'] + '"></div>';
                        } else {
                            inputData += '<div class="imageContainer"><img src="https://res.cloudinary.com/eventservice/image/upload/saas/base/calendar-graphic.png"></div>';
                        }
                    }
                    inputData += '<div class="event-type">';
                    if(ts_args.isdev){
                        devAddition = ' page:' + pageNumber;
                    }
                    inputData += '<h1><a href="' + item['Event']['url'] + '" target="_blank" class="ts-accntcolortext">' + item['Event']['name'] + devAddition + '</a></h1>';
                    if(item['Event']['formatted_date_summary'] != false){
                        inputData += '<div class="dateTimeSummary">' + item['Event']['formatted_date_summary'] + '</div>';
                    }
                    if(item['Event']['location'] != ''){
                        inputData += '<div class="locationSummary"><i class="material-icons ts-accntcolortext" style="font-size:13px;">place</i> ' + item['Event']['location'] + ', ' + item['Event']['city'] + ', ' + item['Event']['state'] + '</div>';
                    }
                    if(item['Event']['details'] != ''){
                        if (typeof ts_args.hideDetails === 'undefined' || ts_args.hideDetails == true){
                            var displayDetails = 'none';
                            var displayDetailsButton = 'block';
                        } else {
                            var displayDetails = 'block';
                            var displayDetailsButton = 'none';
                        }
                        inputData += '<div class="event-details" id="details-' + item['Event']['id'] + '" style="display:' + displayDetails + ';">' + item['Event']['summary'] + '</div>';
                        inputData += '<a class="event-details-button ts-accntcolortext" data-id="' + item['Event']['id'] + '" style="display:' + displayDetailsButton + ';">More Details</a>';
                    }

                    if (typeof ts_args.inclcta === 'undefined' || ts_args.inclcta == true){
                        inputData += '<div class="far-right">' + '<a href="' + item['Event']['url'] + '" class="getTicketsButton pull-right ts-accntcolor" target="_blank">Get Your ' + item['Event']['productNamePlural'] + '!</a>' + '</div>';
                    }

                    inputData += clearDiv + '<div class="button-bottom"><a href="' + item['Event']['url'] + '" class="getTicketsButton" target="_blank">Get Your ' + item['Event']['productNamePlural'] + '!</a></div>';
                    inputData += '<span class="ts-type-topic">' + item['EventType']['name'] + ' - ' + item['EventTopic']['name'] + '</span>';
                    inputData += clearDiv + '</div>' + clearDiv + '</div>';

                    /******* Write Event Listings *******/
                    $('#ts-events-listing-container').append(inputData);
                });

                /******* Paging Grouping *******/
                if(pageNumber > 1){
                    if (typeof ts_args.inclpaging !== 'undefined' && ts_args.inclpaging == true){
                        $(".event-paging").hide();
                        $(".event-paging-1").show();

                        var first = true;
                        var selected = '';

                        var inputData = '<ul class="pagination-links">';
                        inputData += '<li id="firstPage" class="nav-selections disabled"><i class="material-icons" style="font-size:1.0em;">first_page</i></li>';
                        inputData += '<li id="pageDown" class="nav-selections disabled"><i class="material-icons" style="font-size:1.0em;">navigate_before</i></li>';

                        for(i=1;i<pageNumber+1;i++){
                            if(first){
                                selected = ' selected';
                                first = false;
                            } else {
                                selected = '';
                            }
                            inputData += '<li id="pagingButton' + i + '" class="page-selections page-numbers' + selected + '" data-page="' + i + '">' + i + '</li>';
                        }

                        inputData += '<li id="pageUp" class="nav-selections"><i class="material-icons" style="font-size:1.0em;">navigate_next</i></li>';
                        inputData += '<li id="lastPage" class="nav-selections"><i class="material-icons" style="font-size:1.0em;">last_page</i></li>';
                        inputData += '</ul><div style="clear:both;"></div>';
                        $('#ts-events-listing-container').append(inputData);
                    }
                }

                /******* Load and Write Calendar *******/
                if(ts_args.inclcal != false){
                    $.getScript("https://" + location + ".ticketsauce.com/fullcalendar-5.3.0/main.js")
                        .done(function(script, textStatus) {

                        var calendarEl = document.getElementById('ts-calendar');
                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            initialView: 'dayGridMonth',
                            selectLongPressDelay: 0,
                            selectable: true,
                            headerToolbar: {
                                left: 'prev',
                                center: 'title',
                                right: 'next'
                            },
                            select: function(info) {
                                var type = $('#eventType').children("option:selected").val();
                                var topic = $('#eventTopic').children("option:selected").val();
                                TicketSauceWidget.fetchEvents({
                                    loc: ts_args.loc,
                                    pid: ts_args.pid,
                                    oid: ts_args.oid,
                                    type: type,
                                    topic: topic,
                                    start: info.startStr,
                                    end: info.endStr,
                                    inclcal: ts_args.inclcal,
                                    incltype: ts_args.incltype,
                                    incltopic: ts_args.incltopic,
                                    incldatebox: ts_args.incldatebox,
                                    inclcta: ts_args.inclcta,
                                    accntcolor: ts_args.accntcolor,
                                    hideDetails: ts_args.hideDetails,
                                    typetopictandem: ts_args.typetopictandem,
                                    limitlistings: ts_args.limitlistings,
                                    incldateless: ts_args.incldateless,
                                    inclpaging: ts_args.inclpaging,
                                    inclThumbnail: ts_args.inclThumbnail,
                                    isDev: ts_args.isDev,
                                });
                                $('#ts-dateFieldButton').trigger("click");
                            }
                        });
                        calendar.render();
                        $('#ts-calendar').hide();

                        calendar.on('dateClick', function(info) {
                          //console.log('clicked on ' + info.dateStr);
                        });
                    })
                        .fail(function( jqxhr, settings, exception ) {
                        //console.log('this failed');
                    });
                }

                $('#ts-dateFieldLink').on('click', function(){
                    $('#ts-calendar').slideToggle();
                    if($('#ts-dateFieldLink').html() == 'Select A Date Range'){
                        $('#ts-dateFieldLink').html('Hide Calendar');
                    } else {
                        $('#ts-dateFieldLink').html('Select A Date Range');
                    }
                });
                $('#ts-clearFilter').on('click', function(){
                    TicketSauceWidget.fetchEvents({
                        loc: ts_args.loc,
                        pid: ts_args.pid,
                        oid: ts_args.oid,
                        inclcal: ts_args.inclcal,
                        incltype: ts_args.incltype,
                        incltopic: ts_args.incltopic,
                        incldatebox: ts_args.incldatebox,
                        inclcta: ts_args.inclcta,
                        accntcolor: ts_args.accntcolor,
                        hideDetails: ts_args.hideDetails,
                        typetopictandem: ts_args.typetopictandem,
                        limitlistings: ts_args.limitlistings,
                        incldateless: ts_args.incldateless,
                        inclpaging: ts_args.inclpaging,
                        inclThumbnail: ts_args.inclThumbnail,
                        isDev: ts_args.isDev,
                    });
                });
                $('#eventType').on('change', function(){
                    var type = $(this).children("option:selected").val();
                    if (typeof ts_args.typetopictandem !== 'undefined' && ts_args.typetopictandem == true){
                        var topic = $('#eventTopic').children("option:selected").val();
                    } else {
                        var topic = 0;
                    }
                    TicketSauceWidget.fetchEvents({
                        loc: ts_args.loc,
                        pid: ts_args.pid,
                        oid: ts_args.oid,
                        type: type,
                        topic: topic,
                        inclcal: ts_args.inclcal,
                        incltype: ts_args.incltype,
                        incltopic: ts_args.incltopic,
                        incldatebox: ts_args.incldatebox,
                        inclcta: ts_args.inclcta,
                        accntcolor: ts_args.accntcolor,
                        hideDetails: ts_args.hideDetails,
                        typetopictandem: ts_args.typetopictandem,
                        limitlistings: ts_args.limitlistings,
                        incldateless: ts_args.incldateless,
                        inclpaging: ts_args.inclpaging,
                        inclThumbnail: ts_args.inclThumbnail,
                        isDev: ts_args.isDev,
                    });
                });
                $('#eventTopic').on('change', function(){
                    var topic = $(this).children("option:selected").val();
                    if (typeof ts_args.typetopictandem !== 'undefined' && ts_args.typetopictandem == true){
                        var type = $('#eventType').children("option:selected").val();
                    } else {
                        var type = 0;
                    }
                    TicketSauceWidget.fetchEvents({
                        loc: ts_args.loc,
                        pid: ts_args.pid,
                        oid: ts_args.oid,
                        type: type,
                        topic: topic,
                        inclcal: ts_args.inclcal,
                        incltype: ts_args.incltype,
                        incltopic: ts_args.incltopic,
                        incldatebox: ts_args.incldatebox,
                        inclcta: ts_args.inclcta,
                        accntcolor: ts_args.accntcolor,
                        hideDetails: ts_args.hideDetails,
                        typetopictandem: ts_args.typetopictandem,
                        limitlistings: ts_args.limitlistings,
                        incldateless: ts_args.incldateless,
                        inclpaging: ts_args.inclpaging,
                        inclThumbnail: ts_args.inclThumbnail,
                        isDev: ts_args.isDev,
                    });
                });
                $('.event-details-button').on('click', function(){
                    var thisId = $(this).attr('data-id');
                    $('#details-' + thisId).slideToggle();
                    if($(this).html() == 'More Details'){
                        $(this).html('Hide Details');
                    } else {
                        $(this).html('More Details');
                    }
                });

                /******* Paging Processes *******/
                $('.page-numbers').on('click', function(){
                    $('#pagingButton' + currentPage).removeClass('selected');
                    var thisPage = $(this).attr('data-page');
                    currentPage = thisPage;
                    controlPagingNavigation(currentPage);
                });
                $('#pageDown').on('click', function(){
                    $('#pagingButton' + currentPage).removeClass('selected');
                    currentPage -= 1;
                    if(currentPage < 1){
                        currentPage = 1;
                    }
                    controlPagingNavigation(currentPage);
                });
                $('#pageUp').on('click', function(){
                    $('#pagingButton' + currentPage).removeClass('selected');
                    currentPage += 1;
                    if(currentPage > pageNumber){
                        currentPage = pageNumber;
                    }
                    controlPagingNavigation(currentPage);
                });
                $('#firstPage').on('click', function(){
                    $('#pagingButton' + currentPage).removeClass('selected');
                    currentPage = 1;
                    controlPagingNavigation(currentPage);
                });
                $('#lastPage').on('click', function(){
                    $('#pagingButton' + currentPage).removeClass('selected');
                    currentPage = pageNumber;
                    controlPagingNavigation(currentPage);
                });

                /******* changes that need to be made for pagination *******/
                function controlPagingNavigation(currentPage){
                    if(currentPage == 1){
                        $('#pageDown').addClass('disabled');
                        $('#firstPage').addClass('disabled');
                    } else {
                        $('#pageDown').removeClass('disabled');
                        $('#firstPage').removeClass('disabled');
                    }

                    if(currentPage == pageNumber){
                        $('#pageUp').addClass('disabled');
                        $('#lastPage').addClass('disabled');;
                    } else {
                        $('#pageUp').removeClass('disabled');
                        $('#lastPage').removeClass('disabled');
                    }

                    $(".event-paging").hide();
                    $(".event-paging-" + currentPage).show();
                    $('#pagingButton' + currentPage).addClass('selected');

                }
            });
        });
    }
}};

// NEW WIDGETS WITH LAYOUT OPTIONS
window.TsEventWidget = { fetchEvents:function(){

    // Localize jQuery variable
    var jQuery;
    var ts_args = arguments[0];
    var currentPage = 1;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.5.1') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    ts_scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = ts_scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        ts_main();
    }

    /******** Called once jQuery has loaded ******/
    function ts_scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        ts_main();
    }

    /******** Our main function ********/
    function ts_main() {
        jQuery(document).ready(function($) {
            if (typeof ts_args.loc === 'undefined') {
                var location = 'events';
            } else {
                var location = ts_args.loc;
            }
            /******* Load CSS *******/
            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://" + location + ".ticketsauce.com/css/events/widget.css"
            });
            css_link.appendTo('head');

            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://" + location + ".ticketsauce.com/fullcalendar-5.3.0/main.css"
            });
            css_link.appendTo('head');

            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            });
            css_link.appendTo('head');

            var meta_link = $("<meta>", {
                name: "viewport",
                content: "height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0",
            });
            meta_link.appendTo('head');

            /******* build the URL *******/
            var jsonp_url = "https://" + location + ".ticketsauce.com/events/events_by_organization/" + ts_args.pid;
            if (typeof ts_args.oid !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.oid;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.start !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.start;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.end !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.end;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.type !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.type;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.topic !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.topic;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            if (typeof ts_args.inclcal !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.inclcal;
            } else {
                jsonp_url = jsonp_url + "/false";
            }

            if (typeof ts_args.incltype !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incltype;
            } else {
                jsonp_url = jsonp_url + "/false";
            }

            if (typeof ts_args.incltopic !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incltopic;
            } else {
                jsonp_url = jsonp_url + "/false";
            }

            if (typeof ts_args.incldateless !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.incldateless;
            } else {
                jsonp_url = jsonp_url + "/true";
            }

            if (typeof ts_args.inclThumbnail !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.inclThumbnail;
            } else {
                jsonp_url = jsonp_url + "/true";
            }
            if (typeof ts_args.promoterId !== 'undefined'){
                jsonp_url = jsonp_url + "/" + ts_args.promoterId;
            } else {
                jsonp_url = jsonp_url + "/0";
            }

            /******* Get The Data *******/
            $.getJSON(jsonp_url, function(data) {

                /******* Custom Options *******/
                $accntColor = (typeof ts_args.accntcolor !== 'undefined') ? ts_args.accntcolor : "#4d4d4d";
                $btnTextColor = (typeof ts_args.btntext !== 'undefined') ? ts_args.btntext : "#ffffff";
                var newCss = '.ts-accntcolor{background-color:' + $accntColor + '!important;}';
                newCss += '.ts-accntcolortext{color:' + $accntColor + '!important;}';
                newCss += '#ts-events-listing-container .pagination-links .selected{ background-color:' + $accntColor + '!important; color:white;}';
                newCss += '#ts-events-listing-container.grid .event-paging .event-details-container .eventName:hover{color: ' + $accntColor + '!important;}';
                newCss += '#ts-events-listing-container.list .getTicketsButton{color: ' + $btnTextColor + '!important;}';
                newCss += '#ts-events-listing-container.calendar #ts-calendar .fc-daygrid-day.fc-day-today{background-color: '+ $accntColor + '25!important;}';
                newCss += '#ts-events-listing-container.calendar #ts-calendar .fc-button{color: ' + $accntColor + '!important;}';
                newCss += '#ts-events-listing-container.calendar #ts-calendar .fc-list-event-title .fc-event-get-tickets-button{background-color: ' + $accntColor + '!important;}';
                newCss += '#ts-events-listing-container.calendar #ts-calendar .fc-list-event-title .fc-event-get-tickets-button a{color: ' + $btnTextColor + '!important;}';

                $("<style></style>").appendTo("head").html(newCss);

                /******* Remove Previous Data *******/
                $('#ts-events-listing-container').empty();

                /******* Write Returned HTML *******/
                $('#ts-events-listing-container').append(data.html);

                /******* Apply Layout Class *******/
                $embedLayout = (typeof ts_args.layout !== 'undefined') ? ts_args.layout : 'list';
                $('#ts-events-listing-container').addClass($embedLayout);

                /******* Specify Default Variables *******/
                var pageNumber = 1;
                var eventCalList = [];
                var promoter = data['promoter']['Promoter'];

                /******* Process and write the data *******/
                data['data'].forEach(function (item, index) {
                    var devAddition = '';
                    var inputData = '';
                    var aff = '';
                    var eventURL = '';

                    // console.log("item: " + JSON.stringify(item));

                    /******* Build Tickets URL *******/
                    if (typeof ts_args.inclcta === 'undefined' || ts_args.inclcta == true){

                        // eventURL = item['Event']['url'] + '/tickets' + aff; //default url, edge cases below
                        eventURL = item['Event']['url'] + '/tickets'; //default url, edge cases below

                        if (item['Event']['tickets_url'] !== "" && item['Event']['tickets_url'] !== null) { //alternative ticket url
                            eventURL = item["Event"]["tickets_url"];
                        } else if(item['Event']['shopping_cart'] == true || item['Event']['session_parent'] == true){ //shopping cart & sessions
                            eventURL = item['Event']['url'];
                        }

                        //Check to see if there's any additional URL extensions to add ? to the url first before adding other params
                        if (typeof ts_args.affiliate !== 'undefined' || typeof ts_args.promoterId !== 'undefined' || typeof ts_args.params !== 'undefined'){
                            eventURL += '?';
                        }

                        //builds tickets URL with default, affiliate link, or promoter UTM
                        if (typeof ts_args.affiliate !== 'undefined'){
                            aff = "aff=" + ts_args.affiliate + "&";
                        }
                        if (typeof ts_args.promoterId !== 'undefined'){
                            aff = "utm_source=promoter&utm_id=" + data['promoter']['AffiliateCode'][0]['code'] + "&";
                        }

                        //Read additional params and add to URL
                        var params = '';
                        if(typeof ts_args.params !== 'undefined'){
                            Object.entries(ts_args.params).forEach(([key, value]) => {
                                params += `${key}=${value}&`;
                            });
                        }
                        eventURL += aff + params; //add the affiliate link and/or extra params to the tickets URL
                    }
                    /******* Generate Main Content for List & Grid View *******/
                    if($embedLayout === 'list' || $embedLayout === 'grid'){
                        inputData += '<div class="event-paging event-paging-' + pageNumber + '" data-page="' + pageNumber + '">';
                        inputData += '<div class="event-details-container"><a href="' + eventURL + '" target="_blank">';
                        if(ts_args.isdev){
                            devAddition = ' page:' + pageNumber;
                        }
                        inputData += '<div class="eventName">' + item['Event']['name'] + devAddition + '</div>';
                        if(item['Event']['formatted_date_summary'] != false){
                            inputData += '<div class="dateTimeSummary">' + item['Event']['formatted_date_summary'] + '</div>';
                        }
                        inputData += '<div class="locationSummary">';
                        if(item['Event']['location'] != ''){
                            inputData += item['Event']['location'] + '<br>';
                        }
                        if(item['Event']['city'] != '' && item['Event']['state'] != ''){
                            inputData += item['Event']['city'] + ", " + item['Event']['state'];;
                        }
                        inputData += '</a></div>';
                        if (typeof ts_args.inclcta === 'undefined' || ts_args.inclcta == true){
                            inputData += '<div class="event-cta-button"><a href="' + eventURL + '" class="getTicketsButton ts-accntcolor btn" target="_blank">Get ' + item['Event']['productNamePlural'] + '</a></div>';
                        }
                        inputData += '</div>';
                        if (typeof ts_args.inclThumbnail === 'undefined' || ts_args.inclThumbnail == true){
                            if(item['Event']['thumb_url'] !== false){
                                inputData += '<div class="imgContainer" ><a href="' + eventURL + '" target="_blank"><img src="' + item['Event']['thumb_url'] + '"></a></div>';
                            } else if ($embedLayout === 'grid') {
                                inputData += '<div class="imgContainer"><a href="' + eventURL + '" target="_blank"><img src="https://res.cloudinary.com/eventservice/image/upload/saas/base/no-event-image-01.jpg"></a></div>';
                            }
                        }
                    }
                    else if ($embedLayout === 'calendar'){
                        //Generate array of event data for the calendar
                        eventObj = {
                            title : item['Event']['name'],
                            start : item['Event']['start'],
                            image_url : item['Event']['thumb_url'],
                            url : eventURL,
                            product_name : item['Event']['productNamePlural'],
                            formatted_date_summary : item['Event']['formatted_date_summary']
                        };
                        eventCalList.push(eventObj);
                    }

                    /******* Write Event Listings *******/
                    $('#ts-events-listing-container').append(inputData);
                });

                /***** Test Data for Local Testing *****/
                var testEvents = [
                    {
                      title  : 'Party Favor at Lot 500 Doors at 4pm 9.24.21',
                      start  : '2021-09-02',
                      image_url : 'https://nightout.s3.amazonaws.com/media/posters/75296/medium-94b6aa1434edc7fd.png?1626994538',
                      url: 'https://www.google.com',
                      product_name : "Tickets",
                      formatted_date_summary : 'Sep 9 from 6:00pm - 8:00pm'
                    },
                    {
                        title  : 'Party Favor at Lot 500 Doors at 4pm 9.24.21',
                        start  : '2021-09-05',
                        image_url : 'https://nightout.s3.amazonaws.com/media/posters/75296/medium-94b6aa1434edc7fd.png?1626994538',
                        url: 'https://www.google.com',
                        product_name : "Tickets",
                        formatted_date_summary : 'Sep 9 from 6:00pm - 8:00pm'
                    },
                    {
                        title  : 'Party Favor at Lot 500 Doors at 4pm 9.24.21',
                        start  : '2021-09-09',
                        image_url : 'https://nightout.s3.amazonaws.com/media/posters/75296/medium-94b6aa1434edc7fd.png?1626994538',
                        url: 'https://www.google.com',
                        product_name : "Tickets",
                        formatted_date_summary : 'Sep 9 from 6:00pm - 8:00pm'
                    },
                        {
                        title  : 'Party Favor at Lot 500 Doors at 4pm 9.24.21',
                        start  : '2021-09-20',
                        image_url : 'https://nightout.s3.amazonaws.com/media/posters/75296/medium-94b6aa1434edc7fd.png?1626994538',
                        url: 'https://www.google.com',
                        product_name : "Tickets",
                        formatted_date_summary : 'Sep 9 from 6:00pm - 8:00pm'
                    }

                  ];

                /******* Load and Write Calendar *******/
                if($embedLayout === 'calendar'){
                    $('#ts-events-listing-container').append('<div id="ts-calendar"></div>');

                    $.getScript("https://" + location + ".ticketsauce.com/fullcalendar-5.3.0/main.js")
                        .done(function(script, textStatus) {

                        var calendarEl = document.getElementById('ts-calendar');
                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            initialView: $(window).width() < 765 ? 'listMonth':'dayGridMonth',
                            eventBackgroundColor: 'transparent',
                            eventBorderColor: 'transparent',
                            eventTextColor: $accntColor,
                            eventDisplay : 'block',
                            displayEventTime: false,
                            // events: testEvents, //for easy local testing
                            events: eventCalList,
                            height: "auto",
                            titleFormat: {
                                month: 'long',
                                year: 'numeric'
                            },
                            headerToolbar: {
                                left:   'title',
                                center: '',
                                right:  'prev,today,next'
                            },
                            buttonText:{
                                today: 'Today'
                            },
                            eventContent: function(arg) {
                              let arrayOfDomNodes = []

                              // title event
                              let titleEvent = document.createElement('div');
                              if(arg.event._def.title) {
                                titleEvent.innerHTML = arg.event._def.title;
                                titleEvent.classList = "fc-event-title fc-sticky";
                              }

                              // image event
                              let imgEventWrap = document.createElement('div');
                              if(arg.event.extendedProps.image_url) {
                                let imgEvent = '<img src="'+arg.event.extendedProps.image_url+'" style="width:100%;">';
                                imgEventWrap.classList = "fc-event-img";
                                imgEventWrap.innerHTML = imgEvent;
                              }

                              // event time on mobile
                              let eventTimeDiv = document.createElement('div');
                              if(arg.event.extendedProps.formatted_date_summary) {
                                let eventTime = arg.event.extendedProps.formatted_date_summary;
                                eventTimeDiv.classList = "fc-event-time";
                                eventTimeDiv.innerHTML = eventTime;
                              }

                              // get ticket button on mobile
                              let getTicketsButton = document.createElement('div');
                              if(arg.event._def.url) {
                                let ticketsLink = '<a href="'+arg.event._def.url+'">Get '+ arg.event.extendedProps.product_name+'</a>';
                                getTicketsButton.classList = "fc-event-get-tickets-button";
                                getTicketsButton.innerHTML = ticketsLink;
                              }

                              arrayOfDomNodes = [ titleEvent,imgEventWrap,eventTimeDiv,getTicketsButton]
                              return { domNodes: arrayOfDomNodes }
                            },
                            eventClick: function(info){
                                info.jsEvent.preventDefault(); // don't let the browser navigate
                                if (info.event.url) {
                                  window.open(info.event.url);
                                }
                            }
                          });
                        calendar.render();
                    })
                }


            });
        });
    }
}};

