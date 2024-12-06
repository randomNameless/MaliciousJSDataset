var iconArray=[];
var icons=[];
var origIconSet=[];
var origArray=[];

var DEBUG_AWIKISTUFF = true;

function betweenString(prefix,suffix,s)
{
    var i = s.indexOf(prefix);
    if (i >= 0) {
        s = s.substring(i + prefix.length);
    }
    else {
        return '';
    }
    if (suffix) {
        i = s.indexOf(suffix);
        if (i >= 0) {
            s = s.substring(0, i);
        }
        else {
            return '';
        }
    }
    return s;
}
function loadArray() {				
    markerNameRequest= new XMLHttpRequest();			
    //markerNameRequest.open("GET", "<?php echo PartuzaConfig::get('web_prefix')?>/js/markerFile.xml", false);
    // sync is deprecated; async is strongly encouraged
    //markerNameRequest.open("GET", webPrefix + "/js/markerFile.xml", false);
    markerNameRequest.open("GET", webPrefix + "/js/markerFile.xml", true);
    markerNameRequest.send(null);
    var markerNameText=markerNameRequest.responseText;
    markerNameText=betweenString("<markers>","</markers>",markerNameText);
    var markerXML=markerNameText.split("\n");

    var iconSetArray=[];
    for(var cnt=2;cnt<markerXML.length-1;cnt++) {
        var mName=betweenString('name="','" value="',markerXML[cnt]);
        var origName=mName;
        iconSetArray[cnt-2]=mName;
        mName=mName.toLowerCase();
        var mPos=betweenString('value="','" />',markerXML[cnt])
            mPos=parseInt(mPos);
        icons[mName]=mPos;
        origArray[mPos]=origName;	
    }
    var iconNameArray=[];
    var cnt=0;
    for(var v in icons) {
        iconNameArray[cnt]=v;
        cnt++;
    }
    iconArray=iconNameArray.sort();
    origIconSet=iconSetArray.sort();
}

loadArray();

function checkIfInArray(orgName, arr){
    var result = null;
    for (var i = 0; i < arr.length; i++){
        var keyWord = new RegExp(arr[i], "i");
        result = keyWord.exec(orgName);
        if (result != null){
            break;
        }
    }
    return result;
}

function getOrgType(orgName) {
    var orgType = 0; // Default is Generic

    // Test for schools
    var result = null;
    var schoolKeyWords = ["school", "college", "university", "institute"];
    var churchKeyWords = ["church", "parish", "temple", "cathedral","chapel"];
    var lodgingKeyWords = ["lodge", "hotel", "motel", "resort", "bed and breakfast", "inn", "suites", "mansion", "condotel", "villa"];
    var bankKeyWords = ["bank", "banco", "banko"];
    var restaurantKeyWords = ["restaurant","cafe","grill","diner"];
    var hospitalKeyWords = ["hospital","medical"];
    var museumKeyWords = ["museum"];
    var summitKeyWords = ["mt.","peak","mount"];
    var cemeteryKeyWords = ["cemetery"];
    var zooKeyWords = ["zoo"];
    var anchorKeyWords = ["yacht","marina"];
    var buildingKeyWords = ["building","tower","plaza","center","place"]; 
    var parkKeyWords = ["park", "garden"];
    var departmentstoreKeyWords = ["SM","Robinsons"];
    var gasstationKeyWords = ["gas","chevron","exxon","caltex","shell","mobil","petron","total"];
    var golfKeyWords = ["golf"];
    var beachKeyWords = ["beach"];
    var airportKeyWords = ["airport"];
    var keyWord = null;

    if(checkIfInArray(orgName, airportKeyWords) != null){
        orgType = 2;
    }else if(checkIfInArray(orgName, beachKeyWords) != null){
        orgType = 8;
    }else if(checkIfInArray(orgName, golfKeyWords) != null){
        orgType = 11;
    }else if(checkIfInArray(orgName, gasstationKeyWords) != null){
        orgType = 10;
    }else if(checkIfInArray(orgName, departmentstoreKeyWords) != null){
        orgType = 4;
    }else if(checkIfInArray(orgName, parkKeyWords) != null){
        orgType = 14;
    }else if(checkIfInArray(orgName, buildingKeyWords) != null){
        orgType = 17;
    }else if(checkIfInArray(orgName, anchorKeyWords) != null){
        orgType = 16;
    }else if(checkIfInArray(orgName, zooKeyWords) != null){
        orgType = 18;
    }else if(checkIfInArray(orgName, cemeteryKeyWords) != null){
        orgType = 9;
    }else if(checkIfInArray(orgName, summitKeyWords) != null){
        orgType = 15;
    }else if(checkIfInArray(orgName, museumKeyWords) != null){
        orgType = 13;
    }else if(checkIfInArray(orgName, hospitalKeyWords) != null){
        orgType = 12;
    }else if(checkIfInArray(orgName, restaurantKeyWords) != null){
        orgType = 6;
    }else if(checkIfInArray(orgName, bankKeyWords) != null){
        orgType = 7;
    }else if(checkIfInArray(orgName, lodgingKeyWords) != null){
        orgType = 5;
    }else if(checkIfInArray(orgName, churchKeyWords) != null){
        orgType = 3;
    }else if(checkIfInArray(orgName, schoolKeyWords) != null){
        orgType = 1;
    }

    return orgType;

} // end getOrgType()

// From JavaScript: The Definitive Guide
function getText(n) {
    var strings = [];
    getStrings(n, strings);
    return strings;

    function getStrings(n, strings) {
        if (n.nodeType == 3 /* Node.TEXT_NODE */)
            strings.push(n.data);
        else
            if (n.nodeType == 1 /* Node.ELEMENT_NODE */)
            {
                for (var m = n.firstChild; m != null;
                        m = m.nextSibling)
                {
                    getStrings(m, strings);
                }
            }
    } // end getStrings()
} // end getText()

// Copyright (c) 2008.  Alumni.NET.  All Rights Reserved.

// Declared async
async function loadMap(lat, lon, coordId) {
    var map = null;

    // Use new Maps JavaScript API
    //const { Map } = await google.maps.importLibrary("maps");

    // Load AdvancedMarkers library
    //const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    if ((lat == 0) && (lon == 0)) {
        coordId = null
            alert('if');
    } else {
        if (coordId != null) {
            var point = new google.maps.LatLng(lat, lon);

            var styles = {
                default: null,
                         hide: [
                         {
                             featureType: 'poi', // points of interest are not displayed.
                             stylers: [ {visibility: 'off'} ]
                         }
                         ]
            };
            mapOpts = {
                center: point,
                zoom: defaultZoomLevel,
                scrollwheel: true,
                mapTypeId: google.maps.MapTypeId.HYBRID,
                styles: styles['hide']
            };

            map = new google.maps.Map(document.getElementById("mappo"), mapOpts);
            //map = new Map(document.getElementById('mappo'), mapOpts);
            centerMarkerOpts = {
                position: point,
                map: map,
                draggable: false,
                title: currentMediaTitle,
            };

            var centerMarker = new google.maps.Marker(centerMarkerOpts);
            //const marker = new AdvancedMarkerElement(centerMarkerOpts);
        } 
    }
    return map;
}  // end loadMap()

// Taken from http://groups.google.com/group/Google-Maps-API/browse_thread/thread/ef5f704c0dd96e96/62a763f959206bb8?lnk=gst&q=auto+zoom#62a763f959206bb8
// Code by Paul Bowler
function resizeMap(map, markers)
{
    // Some of the APIs may have changed in Google Maps v3. -- Albertus [17 Oct 2018]
} // end resizeMap()

function resizeMap2(map, markers, point)
{
    var zoom = defaultZoomLevel;

    map.setCenter(point);
    map.setZoom(defaultZoomLevel);

    if (markers.length <= 5)
    {
        while (zoom >= minZoomLevel)
        {
            zoom--;
            map.setZoom(zoom);
        }
    }

} // end resizeMap2()

function clearNewMarkers()
{
    newMarkers = [];
}

function clearCurrMarkers()
{
    currMarkers = [];
}

function clearMarkers(markers)
{
    for (i = 0; i < markers.length; i++) {
        markers[i].setVisible(false);
    }
}

function clearMarker(marker)
{
    marker.setVisible(false);
}

function updateMap(theMap){

    // wgPageName is defined somewhere somehow

    // var wgPageName = "Asia/Philippines/Metro_Manila/Manila/University_of_Santo_Tomas/";
    var wgPageName = "Category:<?=$group_details['url']?>";  
    var wgPageName2 = "<?=$group_details['url']?>";  
    //alert(wgPageName2);
    var Url = "https://wiki.alumni.net/wiki/" + wgPageName;	
    var Url2 = "https://wiki.alumni.net/wiki/" + wgPageName2;
    //document.write("<font size = \"-2\">" + Url + "</font>\n");


    // Display initial bounds:
    var b = theMap.getBounds();
    // alert(b);
    //document.getElementById("bounds").innerHTML = "Bounds: " + b.toString() ;
    var boundsSW = b.getSouthWest();
    var boundsNE = b.getNorthEast();
    var swLat = boundsSW.lat();
    var swLon = boundsSW.lng();
    var neLat = boundsNE.lat();
    var neLon = boundsNE.lng();

    // Initially get XML file based on query
    //    var xmlSrc = "https://www.alumni.net/maps/";
    //var xmlSrc = "<?php echo PartuzaConfig::get('web_prefix')?>/js/";
    var xmlSrc = "/js/";
    //var xmlSrc = "http://partuza.alumni.net/";
    //xmlSrc += "getXml.php?swLat=" + swLat + "&swLon=" + swLon;
    xmlSrc += "getXml.php?swLat=" + swLat + "&swLon=" + swLon;
    xmlSrc += "&neLat=" + neLat + "&neLon=" + neLon;
    console.info("xmlSrc: ", xmlSrc);	


    var marker = [];


    // Google Maps v3 mods
    $.ajax( {
        url: xmlSrc,
        dataType: "xml",
    })
    .done( function(xml, txtStatus, j) {

        console.info("status: ", txtStatus);
        console.info("XML: ", xml);

        var xmlDoc = $.parseXML(xml);
        var $xml = $(xmlDoc);

        console.info("$xml: ", $xml);

        var points = $("point", xmlDoc);

        console.info("points: ", points);

        var points2 = $("point", $xml);
        console.info("points2: ", points2);

        console.info("$(xml).find('point'): ", $(xml).find('point'));

        var xmlPoints = [];
        var attributes = [];

        var i = 0;
        $(xml).find('point').each(function() {
            xmlPoints[i] = [];
            xmlPoints[i][0] = $(this).attr('id');
            xmlPoints[i][1] = $(this).attr('entity');
            xmlPoints[i][2] = $(this).attr('url').replace(/http\:/g, "https:");
            xmlPoints[i][3] = $(this).attr('latitude');
            xmlPoints[i][4] = $(this).attr('longitude');
            xmlPoints[i][5] = $(this).attr('marker');

            for (j = 0; j < 6; j++) {
                if (j == 0) {
                    if (DEBUG_AWIKISTUFF) {
                        console.info("id: ", xmlPoints[i][0]);
                    }
                }
                else {
                    if (DEBUG_AWIKISTUFF) {
                        console.info("      ", xmlPoints[i][j]);
                    }
                }
            }

            i++; // increment for next point
        });

        if (DEBUG_AWIKISTUFF) {
            console.log("Number of xmlPoints[]: ", xmlPoints.length);
        }

        var point = []; // google.map.Point
        var markerOpts = [];
        var title = [];
        var markerNumber;
        var url = [];
        var urlx = [];
        var theMarker = null;
        var theUrl = null;
        var count = 0;
        var orgType = 0; // Default is generic
        var urlBase = "https://wiki.alumni.net/";

        currMarkers = [];

        for (i = 0; i < xmlPoints.length; i++) {
            point[i] = new google.maps.LatLng(parseFloat(xmlPoints[i][3]), parseFloat(xmlPoints[i][4]));
            title[i] = decodeURI(xmlPoints[i][1]);
            markerNumber = xmlPoints[i][5];

            if (DEBUG_AWIKISTUFF) {
                console.info("title[", i, "]: ", title[i]);
            }

            if (document.URL.match("wikitest.alumni.net"))
            {
                if (url[i].match("wiki.alumni.net"))
                    continue;
            }

            url[i] = xmlPoints[i][2];
            urlx[i] = url[i];

            var res = (urlx[i] == Url);

            if (DEBUG_AWIKISTUFF) {
                console.info("url[", i, "] = ", urlx[i], " Url = ", Url);
                console.info("    res = ", res);
            }

            // markerOpts[i]
            markerOpts[i] = {
                map: null,
                position: point[i],
                title: title[i],
                clickable: true,
            };

            // Create the marker
            marker[i] = new google.maps.Marker(markerOpts[i]);

            // Make sure to put default marker for the org.
            if (res)
            {
                orgType = getOrgType(title[i]);
                marker[i].setIcon({ url: orgIcon[orgType] });
                marker[i].icon.scaledSize = new google.maps.Size(42, 42);
                marker[i].setMap(theMap);
                //marker[i].icon.scaledSize = new google.maps.Size(32, 32);
                if (DEBUG_AWIKISTUFF) {
                    console.info("Display default marker for ", title[i], ".");
                    console.info("   size: ", marker[i].getIcon().scaledSize);
                }
            }
            else  // it's not the marker for this org
            {
                if (DEBUG_AWIKISTUFF) {
                    console.info("i = ", i);
                    console.info("    typeof marker: ", typeof marker);
                    console.info("    typeof marker[", i, "]: ", typeof marker[i]);
                    console.info("    marker[", i, "].title: ", marker[i].title);
                }
                if(markerNumber != 0)
                {

                    var iconTypes = origArray;
                    var oldIcons = ["Generic", "School", "Airport", "Church", "Department_Store", "Lodging", "Restaurant", "Bank", "Beach", "Cemetery", "Gas", "Golfcourse", "Hospital", "Museum", "Park", "Summit", "Anchor", "Building", "Zoo"];
                    var markerSizeType = 1;
                    for(var awikiCnt = 0; awikiCnt < oldIcons.length; awikiCnt++)
                    {
                        if (DEBUG_AWIKISTUFF) {
                            console.info("iconType[", markerNumber, "] = ", iconType[markerNumber]);
                        }
                        //if(iconTypes[markerNumber].toLowerCase() == oldIcons[awikiCnt].toLowerCase())
                        //{
                        markerSizeType=0;
                        //break;

                        //}
                    }

                    // markerOpts was here

                    //whiteIcon = new google.maps.Marker(markerOpts[i]);
                    // replace Marker with google.maps.Marker.
                    //whiteIcon = new google.maps.Marker(markerOpts[i]);
                    //whiteIcon.setIcon({ url: urlBase + "images/icons/" + origArray[markerNumber] + "/icon.png" });
                    //whiteIcon.setMap(theMap);

                    marker[i].setIcon({url: urlBase + "images/icons/" + origArray[markerNumber] + "/icon.png" });
                    //marker[i].setMap(theMap);
                    if (DEBUG_AWIKISTUFF) {
                        console.info("      typeof theMap: ", typeof theMap);
                        console.info("      icon: ", marker[i].getIcon().url);
                        console.info("   size: ", marker[i].getIcon().scaledSize);
                        //console.info("      whiteIcon.url : ", whiteIcon.getIcon().url);
                    }
                    if(markerSizeType == 0)
                    {
                        //whiteIcon.icon.scaledSize = new google.maps.Size(32, 32);
                        marker[i].icon.scaledSize = new google.maps.Size(34, 40);
                    }
                    else
                    {
                        //whiteIcon.icon.scaledSize = new google.maps.Size(18, 30);
                        //whiteIcon.icon.scaledSize = new google.maps.Size(32, 32);
                        marker[i].icon.scaledSize = new google.maps.Size(34, 40);
                        if (DEBUG_AWIKISTUFF) {
                            console.info("      markerSizeType = ", markerSizeType, ", whiteIcon = ", whiteIcon);
                            console.info("   size: ", marker[i].getIcon().scaledSize);
                        }
                    }

                }
                else // markerNumber == 0
                {
                    orgType = getOrgType(title[i]);
                    //whiteIcon.icon.scaledSize = new google.maps.Size(32, 32);
                    //whiteIcon.icon.anchor = new google.maps.Point(7, 29);
                    //marker[i].icon.scaledSize = new google.maps.Size(32, 32);

                    if (orgType == 0)
                    {
                        //if (whiteIcon != null) {
                        //    whiteIcon.setIcon({ url: urlIcon });
                        //    whiteIcon.setMap(theMap);
                        //    console.info("      orgtype = 0, url = ", urlIcon);
                        //}
                        //whiteIcon.icon.scaledSize = new google.maps.Size(16, 28);
                        marker[i].setIcon({ url: urlIcon });
                        //marker[i].setMap(theMap);
                        //marker[i].icon.scaledSize = new google.maps.Size(16, 28);
                        marker[i].icon.scaledSize = new google.maps.Size(34, 40);
                        if (DEBUG_AWIKISTUFF) {
                            console.info("orgType: 0, urlIcon: ", urlIcon);
                            console.info("   size: ", marker[i].getIcon().scaledSize);
                        }
                    }
                    else
                    {
                        //if (whiteIcon != null) {
                        //    whiteIcon.setIcon({ url: orgIcon[orgType] });
                        //    whiteIcon.setMap(theMap);
                        //    console.info("      orgtype = ", orgType, ", url = ", orgIcon[orgType]);
                        //}
                        marker[i].setIcon({ url: orgIcon[orgType] });
                        marker[i].icon.scaledSize = new google.maps.Size(42, 42);
                        //marker[i].setMap(theMap);
                        if (DEBUG_AWIKISTUFF) {
                            console.info("orgType: ", orgType, ", icon: ", orgIcon[orgType]);
                            console.info("   size: ", marker[i].getIcon().scaledSize);
                        }

                    }
                } // end if


                // Display marker on theMap
                marker[i].setMap(theMap);

                //=============================================================

                //if (res)
                //{
                //    //marker[i] = new google.maps.Marker(markerOpts[i]);
                //    //marker[i].setIcon(whiteIcon);
                //    marker[i] = whiteIcon;
                //    marker[i].setMap(theMap);
                //}
                //else
                //{
                //    //marker[i] = new google.maps.Marker(markerOpts[i]);
                //    console.info("Setting marker[", i, "] icon to whiteIcon = ", whiteIcon);
                //    //marker[i].setIcon(whiteIcon);
                //    marker[i] = whiteIcon;
                //    marker[i].setMap(theMap);
                //    console.info("whiteIcon: ", whiteIcon);
                //}
                //marker[i] = whiteIcon;
                //marker[i].setMap(theMap);

                if (DEBUG_AWIKISTUFF) {
                    console.info("      urlx[", i, "] = ", urlx[i]);
                    console.info("      marker[", i, "] = ", marker[i]);
                    console.info("      marker[", i, "].icon.url = ", marker[i].icon.url);
                    console.info("===================================");
                    console.info("marker[", i, "].getTitle(): ", marker[i].getTitle());
                    console.info("urlx[", i, "]: ", urlx[i]);
                    console.info("===================================");
                }

                // A trick from https://www.pluralsight.com/guides/javascript-callbacks-variable-scope-problem
                // using an anonymous function as an inline function.
                // Without this, the callback function only sees the last urlx[] all the time.
                marker[i].addListener("click", (function(e) {
                    var j = i;
                    return function() {
                        window.open(urlx[j], "_self");
                    }
                }) () );

            } // end if res
        } // end for i

    }); // end of $.ajax.done()

    //	document.write(xmlSrc);
//    xmlhttp = new XMLHttpRequest();
//    //    var request = HTTP.newRequest();
//    var data = null;
//
//
//    xmlhttp.overrideMimeType('text/xml');
//    xmlhttp.open("GET", xmlSrc, false);	//to change later
//    //xmlhttp.open("GET", xmlSrc, true); // async 	
//
//
//    xmlhttp.send(null);
//
//    data = xmlhttp.responseText;
//
//    if (data != null) {
//        console.info("data: ", data);
//    }
//    else {
//        console.info("data: null");
//    }
//    // var xml = google.maps.Xml.parse(data);
//
//    
//    var xmlPoints = data.documentElement.getElementsByTagName("point");
//        //	alert(xmlPoints[0].getAttribute("entity"));
//    var point = [];
//    var marker = [];
//    var title = [];
//    var url = [];
//    var theMarker = null;
//    var theUrl = null;
//    var count = 0;
//    var orgType = 0; //Default is generic
//    var markerNumber;
//    currMarkers = [];
//    //clearNewMarkers();
//    
//
//    for (var i = 0; i < xmlPoints.length; i++)
//    {
//        point[i] = new google.maps.LatLng(parseFloat(xmlPoints[i].getAttribute("latitude")), parseFloat(xmlPoints[i].getAttribute("longitude")));
//        title[i] = xmlPoints[i].getAttribute("entity");
//        url[i] = xmlPoints[i].getAttribute("url");
//        markerNumber = parseInt(xmlPoints[i].getAttribute("marker"));
//
//        url[i] = decodeURI(url[i]);
//
//
//
//        if(document.URL.match("wikitest.alumni.net"))
//        {
//            if(url[i].match("wiki.alumni.net"))
//                continue;
//        }
//        var res = (url[i] == Url || url[i] == Url2); 
//
//
//        //	    var res = url[i].match(Url + "$");
//
//        title[i] = decodeURI(title[i]);
//
//        //append here 3/16
//
//        //alert(markerNumber);
//
//        if(markerNumber!=0) {
//
//            var iconTypes = origArray;
//            var oldIcons = ["Generic", "School", "Airport", "Church", "Department_Store", "Lodging", "Restaurant", "Bank", "Beach", "Cemetery", "Gas", "Golfcourse", "Hospital", "Museum", "Park", "Summit", "Anchor", "Building", "Zoo"];
//            var markerSizeType = 1;
//            for(var awikiCount = 0; awikiCount<oldIcons.length;awikiCount++) {
//                if(iconTypes[markerNumber].toLowerCase() == oldIcons[awikiCount].toLowerCase()) {
//                    markerSizeType = 0;
//                    break;
//                }
//            }
//
//            whiteIcon.image="https://wiki.alumni.net/images/icons/" + origArray[markerNumber] + "/icon.png";
//
//            if(markerSizeType==0)
//            {
//                //whiteIcon.image="http://wikitest.alumni.net/images/icons/" + iconTypes[markerNumber] + "/icon.png";
//                whiteIcon.iconSize = new google.maps.Size(32, 32);
//                whiteIcon.shadow="";
//            }
//            else {
//                whiteIcon.iconSize = new google.maps.Size(18, 30);
//                whiteIcon.shadow="";
//            }
//
//        }
//        else
//        {
//            orgType = getOrgType(title[i]);
//            //orgType = 0;
//            whiteIcon.iconSize = new google.maps.Size(32, 32);
//            whiteIcon.shadowSize = new google.maps.Size(32, 32);
//            whiteIcon.iconAnchor = new google.maps.Point(7, 29);
//            whiteIcon.infoWindowAnchor = new google.maps.Point(8, 2);
//
//            if (orgType == 0)
//            {
//                whiteIcon.image = urlIcon;
//                whiteIcon.shadow = urlShadowIcon;
//                whiteIcon.transparent = urlTransIcon;
//                whiteIcon.iconSize = new google.maps.Size(16, 28);
//            }
//            else
//            {
//                whiteIcon.image = orgIcon[orgType];
//                whiteIcon.shadow = orgShadowIcon[orgType];
//                whiteIcon.transparent = urlTransIcon;
//            }
//        }
//
//
//        //alert(currMarkers);
//        // if (res != null)
//        if(res){
//            marker[i] = new google.maps.Marker(point[i], {title : title[i]});
//        }
//        else {
//            marker[i] = new google.maps.Marker(point[i], {title : title[i],
//                icon : whiteIcon });
//        }
//        if (!currMarkers[url[i]])
//        {
//            currMarkers[url[i]] = marker[i];
//            //		document.write(url[i]+"\n");
//            newMarkers[url[i]] = marker[i];
//            theUrl = url[i];
//            theMarker = marker[i];
//            // User addOverlay to place Markers
//            theMap.addOverlay(theMarker);
//
//            // Create a callback function that takes arguments.
//            // Then, use the callback function as a Listener for the
//            // corresponding Marker
//            var f = google.maps.Event.callbackArgs(theMarker, gotoUrl,
//                    theUrl);
//            google.maps.Event.addListener(theMarker, "click", f);
//
//            count++;
//        }
//    } // end for...

} // end updateMap()

function gotoUrl(Url){
    window.location = Url;
}

function countMarkers(markers){

    var count = 0;
    for (var i in markers) {
        count++;
    }
    return count;
}

whiteIcon.image = urlIcon;
whiteIcon.shadow = urlShadowIcon;
whiteIcon.transparent = urlTransIcon;
whiteIcon.iconSize = new google.maps.Size(34, 40);
whiteIcon.shadowSize = new google.maps.Size(40, 28);
whiteIcon.iconAnchor = new google.maps.Point(8, 28);
whiteIcon.infoWindowAnchor = new google.maps.Point(8, 2);

var coordElement = document.getElementsByTagName("coord");

var coordId = null;
var coordLat = 0;
var coordLon = 0;
if (coordElement.length > 0)
{
    coordId = 1;
    coordLat = coordElement[0].getAttribute("latitude");
    coordLon = coordElement[0].getAttribute("longitude");
}  

//alert(coordId + " -- " + coordLat + " -- " +coordLon);

if ((coordId == null) || ((Math.abs(coordLat) <= 1e-3) && (Math.abs(coordLon) <= 1e-3))) {               
    //var style = document.getElementById("mappo");
    //style.setAttribute("class","none");
    var theMap = null;
} else{
    var theMap = loadMap(coordLat, coordLon, coordId);
    updateMap(theMap);
}

var numMarkers = 0;
if (theMap != null) {

    var zoom = theMap.getZoom();

    /*while (zoom >= minZoomLevel) {		
      theMap.zoomOut();
      zoom = theMap.getZoom();	
      updateMap(theMap);
      numMarkers = countMarkers(currMarkers);
      if (numMarkers >= 5) break;
      }*/

    //theMap.zoomOut();
    //theMap.zoomOut();
    theMap.setZoom(zoom - 1);

    var moveendListener = google.maps.event.addListener(theMap, "moveend",
            function() {	        
                updateMap(theMap);
            });

    var zoomChangedListener = theMap.addListener("zoom_changed",
            function()
            {
                updateMap(theMap);
            });

    var idleListener = theMap.addListener("idle",
            function()
            {
                updateMap(theMap);
            });

    var centerChangedListener = theMap.addListener("center_changed",
            function()
            {
                updateMap(theMap);
            });

    var boundsChangedListener = theMap.addListener("bounds_changed",
            function()
            {
                updateMap(theMap);
            });

    var dragEndListener = theMap.addListener("dragend",
            function()
            {
                updateMap(theMap);
            });

    var tilesLoadedListener = theMap.addListener("tilesloaded",
            function()
            {
                updateMap(theMap);
            });
}    

// are we missing a } here?
