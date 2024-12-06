var jsonDataContainer = "";
var showCounter = 1;
var __ResultsCount = "";
var __ResultsPerPage = "";
var __recordsCount = "";

//Ajax Call
function dataRequest(options) {
    var _showResponse = options["showResponse"];
    var _narrowToProperty = (options["narrowToProperty"] != undefined ? (options["narrowToProperty"] != "" ? options["narrowToProperty"] : '') : '');
    var _successCallback = options["successCallback"];
    var responseSuccess = function (response) {
        jsonDataContainer = eval(response);
    }

    // Public Methods
    return {
        doAjaxCall: function (jsonURL, sourceFrom) {

            jQuery.ajax({
                url: jsonURL,
                dataType: "json",
                success: function (data) {
                    //Callback after response
                    //console.log(data);
                    //responseSuccess(data);
                    jsonDataContainer = eval(data);

                    if (_successCallback) _successCallback();
                },
                error: function (data) {
                    //Turn the response into a string, show in console
                    // console.log(JSON.stringify(data));
                    //alert("Sorry Error Occured. Please retry some time later.");
                }
            });
        }
    };
}

function showMoreList() {
    __ResultsCount = jsonDataContainer.ResultsCount;
    __ResultsPerPage = jsonDataContainer.ResultsPerPage;
    __recordsCount = showCounter * __ResultsPerPage;

    // Check resuts coming back from json feed
    if (__ResultsCount <= 10 || __recordsCount >= __ResultsCount) {
        $('.show-more').attr("style", "display:none !important");
    }
    
    // Also check paging control to see if more results exist
    if (!$.exists('.lastpage')) {
        $('.show-more').attr("style", "display:none !important");
    }
}

function successLoadNewsDetail(sourceFrom) {
    var strHTMLString = "";
    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<article>";
        strHTMLString += "<div class='category-news column row'>";
        if (__this[i].NewsAttributes.Type.Image.Url != null && __this[i].NewsAttributes.Type.Image.Url != "") {
            strHTMLString += " <div class='float-left'><img src='" + __this[i].NewsAttributes.Type.Image.Url + "'  alt='"
                + __this[i].NewsAttributes.Type.Image.Alt + "' title='" + __this[i].NewsAttributes.Type.Image.Title + "'/></div>"
        }
        if (__this[i].NewsAttributes.Topics != null) {
            strHTMLString += "<div class='topic-category'>" + __this[i].NewsAttributes.Topics + "</div>";
        }
        strHTMLString += "</div>";
        strHTMLString += "<div class='date-format-news'>" + __this[i].NewsAttributes.Date + "</div>";
        strHTMLString += "<h2><a href='" + __this[i].Url + "'>" + __this[i].Title + "</a></h2>";

        strHTMLString += "<div class='row'>";
        if (__this[i].NewsAttributes.Author != "") {
            strHTMLString += "<div style='margin-right:1.25em; float:left'>" +
                "<div class='author-news'><span>Author: </span>" + __this[i].NewsAttributes.Author + "</div></div>";
        }
        if (__this[i].NewsAttributes.Source != "") {
            strHTMLString += "<div class='author-news'><span>Source: </span>" + __this[i].NewsAttributes.Source + "</div>";
        }
        strHTMLString += "</div>";
        strHTMLString += "<div class='teaser-description rtf-content news-listing'>";
        /* if(__this[i].Image.Url != "" && __this[i].Image.Url != null){
	        strHTMLString += "<div class='row hide-for-small-only'><a href='" + __this[i].Url + "'>" +
                "<img src='" + __this[i].Image.Url + "'  alt='" + __this[i].Image.Alt + "' alt='" + __this[i].Image.Title + "'/></a></div>"
	    }*/
        strHTMLString += __this[i].Teaser + "</div>";
        strHTMLString += "</article>";
    });

    jQuery('.news-listing-content').append(strHTMLString);
    jQuery('.news-listing').trunc(310, "...");
    $('.ajax-loader').hide();
    showMoreList();
}

function successLoadNewsCardDetail(sourceFrom) {
    var strHTMLString = "";
    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<div class='column'> <div class='latest-news-item animate'> <div class='callout' data-equalizer-watch> <div class='filtered'>";
        if (__this[i].Image.Url != null && __this[i].Image.Url != "") {
            strHTMLString += "<a href='" + __this[i].Url + "'><img src='" + __this[i].Image.Url + "'  alt='"
                + __this[i].Image.Alt + "' title='" + __this[i].Image.Title + "'/></a>"
        }
        strHTMLString += "</div> <div class='teaser-text'> <h1> <a href='" + __this[i].Url + "'>" + __this[i].Title + "</a></h1>";
        strHTMLString += __this[i].Teaser + "</div>"
        strHTMLString += "<div class='row readMore'> <a href='" + __this[i].Url + "'>READ MORE <i class='fas fa-arrow-right'></i></a> </div>"
        strHTMLString += "</div ></div ></div > ";
    });

    $('#divCardWrapper').append(strHTMLString);
    $('.ajax-loader').hide();
    showMoreList();
}

function successLoadNewsDetail_ELT(sourceFrom) {
    var categoryListArray = new Array();
    var strHTMLString = "";
    var topicList = "";
    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<li>";

        if (__this[i].NewsAttributes.Topics != null) {
            strHTMLString += "<div class='news-category'>" + __this[i].NewsAttributes.Topics + "</div>";
        }

        strHTMLString += "<div class='date-format-news'>" + __this[i].NewsAttributes.Date + "</div>";
        strHTMLString += "<div class='news-title'><a href='" + __this[i].Url + "'>" + __this[i].Title + "</a></div>";
        strHTMLString += "<div class='teaser-description'>" + __this[i].Teaser + "</div>";
        strHTMLString += "</li>";
    });
    //console.log(strHTMLString);
    jQuery('.news-listing-wrapper').append(strHTMLString);
    jQuery('.teaser-description').trunc(310, "...");
    $('.ajax-loader').hide();
    showMoreList();
}

function successLoadSearchDetail(sourceFrom) {
    var strHTMLString = "";
    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<li class='search-result'>";
        if (__this[i].NewsAttributes.Date != null) {
            strHTMLString += "<div class='date-format-news'>" + __this[i].NewsAttributes.Date + "</div>";
        }
        //strHTMLString += "<div class='search-breadcrumbs'>" + __this[i].SearchAttributes.BreadCrumbComplete + "</div>";
        strHTMLString += "<h2><a class='searchHeadline' href='" + __this[i].Url + "'>"
        strHTMLString += "<img src=\"../../../../_Images/_Icons/icon-searchresult.gif\" /> " + __this[i].Title + "</a></h2>";
        strHTMLString += "<div class='teaser-description rtf-content search-listing'>" + __this[i].Teaser + "</div>";
        strHTMLString += "</li>";
    });

    jQuery('ul.search-results').append(strHTMLString);
    jQuery('.teaser-description').trunc(310, "...");
    $('.ajax-loader').hide();
    showMoreList();
}


//Alerts Listing - MyNysut
function successLoadAlerts(sourceFrom) {
    var categoryListArray = new Array();
    var strHTMLString = "";
    var topicList = "";

    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<li><article>";

        //Date & role
        strHTMLString += "<div class='date-format-news'>";
        
         if(__this[i].AlertAttributes.Date != "" && __this[i].AlertAttributes.Date != null){
                strHTMLString += "<span>" +__this[i].AlertAttributes.Date + "</span>"
         }
        
         if(__this[i].AlertAttributes.Role != "" && __this[i].AlertAttributes.Role != null){
        strHTMLString += "<span class='delim'> | </span><span class='role'>" + __this[i].AlertAttributes.Role + "</span>";
         }
        
        strHTMLString += "</div>";

        //Title
        strHTMLString += "<h2><a href='" + __this[i].Url + "'>" + __this[i].Title + "</a></h2>";

        //Alert Author & Source
        if(__this[i].AlertAttributes.Author != "" && __this[i].AlertAttributes.Author != null){
            strHTMLString += "<div class='author-news-listing columns large-11 large-offset-1'><span>Author:</span> " + __this[i].AlertAttributes.Author + "</div>";
        }
        
        if (__this[i].AlertAttributes.Source != "" && __this[i].AlertAttributes.Source != null) {
            strHTMLString += "<div class='author-news-listing'><span>Source:</span>" + __this[i].AlertAttributes.Source + "</div>";
        }

        //Teaser
        strHTMLString += "<div class='teaser-description rtf-content alert-teaser'>";
        if (__this[i].AlertAttributes.Type.Image.Url != "" && __this[i].AlertAttributes.Type.Image.Url != null) {
            strHTMLString += "<div class='text-right hide-for-small-only news-image'><img src='" + __this[i].AlertAttributes.Type.Image.Url + "'  alt='" + __this[i].AlertAttributes.Type.Image.Alt + "' alt='" + __this[i].AlertAttributes.Type.Image.Title + "'  /></div>";
        }
         if (__this[i].Teaser != "" && __this[i].Teaser != null) {
                strHTMLString += __this[i].Teaser;
         }
        strHTMLString += "</div>";


        strHTMLString += "</article></li>";
    });
    //console.log(strHTMLString);
    jQuery('.alert-listing-content').append(strHTMLString);
    jQuery('.alert-teaser').trunc(310, "...");
    $('.ajax-loader').hide();
    showMoreList();
}


//Meetings Listing - MyNysut
function successLoadMeetings(sourceFrom) {
    var categoryListArray = new Array();
    var strHTMLString = "";
    var topicList = "";

    var __this = $(jsonDataContainer.Items);
    __this.each(function (i) {
        strHTMLString += "<li><article>";

        //Title
        strHTMLString += "<h2><a href='" + __this[i].Url + "'>" + __this[i].Title + "</a></h2>";
        
        //Date
         if (__this[i].MeetingAttributes.Date != "" && __this[i].MeetingAttributes.Date != null) {
             strHTMLString += "<div class='date-format'>" + __this[i].MeetingAttributes.Date + "</div>";
         }
        
        //Time
         if (__this[i].MeetingAttributes.Time != "" &&__this[i].MeetingAttributes.Time != null) {
            strHTMLString += "<div class='time-format'>" + __this[i].MeetingAttributes.Time + "</div>";
         }
        
        //Location
        if (__this[i].MeetingAttributes.Location != "" && __this[i].MeetingAttributes.Location  != null) {
            strHTMLString += "<div class='location-format'>Location: " + __this[i].MeetingAttributes.Location + "</div>";
        }

        //Teaser
        if (__this[i].Teaser != "" && __this[i].Teaser != null) {
            strHTMLString += "<div class='teaser-description rtf-content meeting-teaser'>";
            strHTMLString += __this[i].Teaser;
            strHTMLString += "</div>";
         }   


        strHTMLString += "</article></li>";
    });
    
   
    var query_object = window.location.href;  
	var strHiddenVal = $('input[id$= hfType]').val(); 
    if (strHiddenVal == "MeetingListing" && query_object.indexOf("tab=upcoming") > -1) {    
        jQuery('.upcoming-meetings-content').append(strHTMLString);
    }else if (strHiddenVal == "MeetingListing" && query_object.indexOf("tab=past") > -1) {  
        jQuery('.past-meetings-content').append(strHTMLString);
    }
    
    jQuery('.meeting-teaser').trunc(310, "...");
    $('.ajax-loader').hide();
    showMoreList();
}