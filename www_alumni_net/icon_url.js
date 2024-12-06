var theMap = null;
var thePoint = null;
var defaultZoomLevel = 18;
var minZoomLevel = 12;

//var whiteIcon = new google.maps.Icon();
//var urlIcon = "http://maps.alumni.net/media/marker_white.png";
var urlIcon = "https://wiki.alumni.net/images/icons/Generic/icon.png";
var urlShadowIcon = "https://maps.alumni.net/media/pin_shadow.png";
var urlTransIcon = "https://maps.alumni.net/media/marker_white_trans.png";

var urlIconPics = "/images/marker_yellow.png";
var urlIconPicsMine = "/images/marker_pink.png";
// Icons depending on type of organization
//  0 - for generic
//  1 - for school
//  2 - for airport
//  3 - for church
//  4 - for department store
//  5 - for lodging
//  6 - for restaurant
//  7 - for bank
//  8 - for beach
//  9 - for cemetery
// 10 - for gas
// 11 - for golf course
// 12 - for hospital
// 13 - for museum
// 14 - for park
// 15 - for summit
var iconType = ["Generic", "School", "Airport", "Church", "Department_Store", "Lodging", "Restaurant", "Bank", "Beach", "Cemetery", "Gas", "Golfcourse", "Hospital", "Museum", "Park", "Summit", "Anchor", "Building", "Zoo"];
var iconBaseURL = "https://wiki.alumni.net/images/icons";

var orgIcon = [];
var orgShadowIcon = [];
var orgTransIcon = [];
var orgType = 0; // defaults to generic

//var whiteIcon = new google.maps.Marker(
//    {
//        icon: urlIcon,
//    });

// Request needed libs.
//const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

var whiteIcon = new google.maps.Marker();
//var whiteIcon = new AdvancedMarkerElement({map});

// Get the icon URLs.
for (var i = 0; i < iconType.length; i++)
{
    orgIcon[i] = iconBaseURL + "/" + iconType[i] + "/icon.png";
    orgShadowIcon[i] = iconBaseURL + "/" + iconType[i] + "/shadow.png";
    //document.write("" + i + ". " + iconArray[i] + ", " + iconShadowArray[i]
    //    + "<br />\n");
}

   
var gmManager = null;
var currMarkers = [];
var newMarkers = [];