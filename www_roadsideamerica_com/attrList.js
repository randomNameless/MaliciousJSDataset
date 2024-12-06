// Copyright 2007 . All rights reserved.

var TripPlanner = function()
{
  var ATTRLIST = "attrlist";
  var TRIPS_COOKIENAME = "trips";
  var ROUTES_COOKIENAME = "routes";
  var TRIPLIST_ELEMENTID = "triplist";
  var TRIPLIST_NAMESELECTID = "tripname";
  var TRIPNAME_FIELD = "tripname";
  var TRIPNAME_DIV = "tripnamediv";
  var TRIPLIST_TABLE = "nearattract";
  var TRIPLIST_SHOWMAP = "showtrip";
  var TRIPLIST_SHOWFIT = "fitmap";
  var TRIPLIST_REMOVETRIP = "removetrip";
  var TRIPLIST_REMOVEPLAN = "removeplan";
  var TRIPLIST_ADDTOTRIP = "addtrip";
  var TRIPLIST_BEENTHERE = "beenthere";
  var TRIPNAME_HEADING = "tripnameHeading";
  var TRIPMAP_CAPTION = "mapcaption";
  var TRIPMAP_EMAIL = "emaillink";
  var NEWTRIPNAME_ID = "newtripname";
  var CREATETRIP_ID = "createtrip";
  var MAX_TRIP_SIZE = window.MAX_TRIP_SIZE || 40;
  var MAX_TRIPS_COUNT = window.MAX_TRIPS_COUNT || 5;
  var MAX_FAV_COUNT = window.MAX_FAV_COUNT || 75;
  var EXPDATE=10000;

  var _tripsObj = null;
  var _routesObj = null;
  var _selectedTrip = null;
  var _favsArray = null;
  var _checkall = null;
  var _isCheckAll = false;
  
  function initVars() {
    _tripsObj = getTripCookieContents(CookieMgr.getCookie(TRIPS_COOKIENAME));
    _routesObj = getTripCookieContents(CookieMgr.getCookie(ROUTES_COOKIENAME));
    _selectedTrip = new Trip("","");
  }
  
  function setDirty(isDirty) {
    AccountMgr.setDirty(isDirty);
  }

  function getAttrNo(widget) {
    var attrNo = null;
    var id = widget.id || widget.falseid;
    if (!id || id==="") {
      return "";
    }
    var ids = id.split("-");
    if (ids.length > 1) {
      attrNo = ids[1].replace(/^\s+|\s+$/, '');
    }
    return attrNo;
  }

  function removeAttrNoFromValue(value,attrNo) {
    if (value==null) {
      value = "";
    } else if (value.length > 0) {
      var list = value.split(",");
      value = "";
      for (var i = 0; i < list.length; i++) {
        list[i] = list[i].replace(/^\s+|\s+$/, '');
        if (list[i]!=attrNo && list[i]!="") {
          value += list[i] + ",";
        }
      }
    }
    return value;
  }

  function addToValue(value,attrNo) {
    return listContains(value,attrNo)?value:(value + attrNo + ",");
  }

  function listContains(value,attrNo)
  {
    if (!value || !attrNo) 
      return false;
    attrNo += ",";
    value += ",";
    return (value.substr(0,attrNo.length)==attrNo || value.indexOf(","+attrNo) > -1);
  }

  function buildTripCookie(arr,delim) {
    var value = "";
    for (var key in arr) {
      var elem = arr[key];
      value += (value.length>0?delim:"") + elem.name + delim + elem.attrlist;
    }
    return value;
  }

  function getArrayFromValue(attrlist)
  {
    var arr = (attrlist)?attrlist.split(","):[];
    for (var i=arr.length ; i > 0 ; ) {
      if (!arr[--i]) {
        arr.splice(i,1);
      }
    }
    return arr;
  }

  function getFavListKey(itemNo)
  {
    return "A-"+itemNo;
  }

  // Attraction object
  function Attraction(itemNo,name,longitude,latitude,icon) {
    this.itemNo = itemNo;
    this.longitude = longitude;
    this.latitude = latitude;
    this.icon = icon;
    this.name = name;
    this.key = getFavListKey(itemNo);
  }


  // trip object
  function Trip(name,attrlist) {
    this.name = name;
    this.arr = getArrayFromValue(attrlist);
    this.attrlist = this.arr.join(",");
    this.contains = function(attrNo) { return listContains(this.attrlist,attrNo); };
    this.remove = function(attrNo) { this.attrlist = removeAttrNoFromValue(this.attrlist,attrNo);this.arr=getArrayFromValue(this.attrlist); return this.attrlist; };
    this.add = function(attrNo) { this.attrlist = addToValue(this.attrlist,attrNo); this.arr=getArrayFromValue(this.attrlist); return this.attrlist; };
    this.getCount = function() { return this.arr.length;};
    this.getArray = function() { return this.arr; };
    this.reverse = function() { this.arr.reverse(); this.attrlist = this.arr.join(); return this.arr; };
  }

  function getTripCookieContents(cook)
  {
    var obj = {
      arr: new Array(),
      count: 0
    };
    if (cook)
    {
      var vals = cook.split('|');
      for (var i=0 ; i < vals.length ;)
      {
        var name = vals[i++];
        var attrlist = vals[i++];
        if (name!="")
        {
          obj.arr[name] = new Trip(name,attrlist);
          obj.count++;
        }
      }
    }
    return obj;
  }

  function addToList(attrlist)
  {
    var arr = getArrayFromValue(attrlist);
    for (var key in arr) {
      if (!updateList(arr[key], true)) {
        return false;
      }
    }
    return true;
  }

  function saveTripCookie(tripsarray)
  {
    if (!tripsarray)
      tripsarray = _tripsObj.arr;
    else
      _tripsObj.arr = tripsarray;
    var cook = buildTripCookie(tripsarray,"|");
    setDirty(true);
    CookieMgr.setCookie(TRIPS_COOKIENAME,cook,EXPDATE,"/");
  }

  function getTripCount() {
    return _tripsObj.count;
  }

  function getTrip(name) {
    return _tripsObj.arr[name];
  }

  function addTrip(trip) {
    if (!getTrip(trip.name)) _tripsObj.count++;
    _tripsObj.arr[trip.name] = trip;
  }

  function saveRouteCookie(tripsarray)
  {
    if (!tripsarray)
      tripsarray = _routesObj.arr;
    else
      _routesObj.arr = tripsarray;
    var cook = buildTripCookie(tripsarray,"|");
    CookieMgr.setCookie(ROUTES_COOKIENAME,cook,EXPDATE,"/");
    setDirty(true);
  }

  function getRouteCount() {
    return _routesObj.count;
  }

  function getRoute(name) {
    return _routesObj.arr[name];
  }

  function addRoute(trip) {
    if (!getRoute(trip.name)) _routesObj.count++;
    _routesObj.arr[trip.name] = trip;
  }

  function reset(isSelectedReset)
  {
    if (isSelectedReset)
      _selectedTrip = new Trip("","");
    var tripname = "";
    var value = "";
    var elem = document.getElementById(TRIPLIST_NAMESELECTID);
    if (elem)
    {
      tripname = elem.value;
      var field = document.getElementById(TRIPLIST_ELEMENTID);
      if (elem.value!="")
      {
        var trip = getTrip(elem.value);
        if (trip)
        {
          value = trip.attrlist;
        }
      }
      if (field)
      {
        field.value = value;
      }
      setSelectedTrip(tripname,value);
      setButtonStates();
      checkSelectedAttr();
      updateMapCaption(_selectedTrip);
    }
  }

  function updateMapCaption(theTrip)
  {
    var elem = document.getElementById(TRIPMAP_CAPTION);
    if (elem)
    {
      if (theTrip && theTrip.getCount()>0)
      {
        elem.innerHTML = "Trip '"+ theTrip.name+"' with "+ theTrip.getCount() + " sights";
        elem.style.display = "block";
      }
      else
      {
        elem.innerHTML = "";
        elem.style.display = "none";
      }
    }
  }

  function checkSelectedAttr(list)
  {
    var elem = document.getElementById(TRIPLIST_TABLE);
    if (elem)
    {
      var isAttrSelected = false;
      var arr = elem.getElementsByTagName("input");
      for (var i=0 ; i < arr.length ; i++)
      {
        var e = arr[i];
        if (e.type=="checkbox")
        {
          var attrNo = getAttrNo(e);
          e.checked = _selectedTrip.contains(attrNo);
          showOrHideMarker(e.checked,attrNo);
          if (e.checked)
            isAttrSelected = true;
        }
      }
      if (isAttrSelected)
        fitMap();
    }
  }

  function showOrHideMarker(isChecked,attrNo)
  {
    if (isChecked) {
      showFavAttraction(attrNo);
    } else {
      hideFavAttraction(attrNo);
    }
  }

  function showFavAttraction(itemNo)
  {
    var attr = _favsArray[getFavListKey(itemNo)];
    if (attr)
    {
      addMarkerById(attr.itemNo,ATTR,attr.longitude,attr.latitude,attr.name,attr.icon,createAttrMarker);
    }
  }

  function hideFavAttraction(itemNo)
  {
    hideMarkerById(itemNo,ATTR);
  }

  function enableButton(name,condition)
  {
    var elem = document.getElementById(name);
    if (elem)
    {
      elem.disabled = (condition?"":"disabled");
    }
  }

  function showMapButton()
  {
    enableButton(TRIPLIST_SHOWMAP,(_selectedTrip.getCount()>0));
  }


  function showFitButton()
  {
    enableButton(TRIPLIST_SHOWFIT,(_selectedTrip.getCount()>0));
  }

  function showDeleteButton()
  {
    enableButton(TRIPLIST_REMOVETRIP,(_selectedTrip.name!=""));
  }
  
  function showBeenThereButton()
  {
    var count = _selectedTrip.getCount();
    enableButton(TRIPLIST_BEENTHERE,(count>0 && _selectedTrip.name!=""));
  }

  function showAddButton()
  {
    var count = _selectedTrip.getCount();
    enableButton(TRIPLIST_ADDTOTRIP+"1",(count>0 && _selectedTrip.name!=""));
    enableButton(TRIPLIST_ADDTOTRIP+"2",(count>0 && _selectedTrip.name!=""));
  }

  function showRemoveButton()
  {
    var count = _selectedTrip.getCount();
    enableButton(TRIPLIST_REMOVETRIP+"1",(count>0 && _selectedTrip.name!=""));
    enableButton(TRIPLIST_REMOVETRIP+"2",(count>0 && _selectedTrip.name!=""));
  }


  function showRemovePlannerButton()
  {
    var count = _selectedTrip.getCount();
    enableButton(TRIPLIST_REMOVEPLAN+"1",(count>0));
    enableButton(TRIPLIST_REMOVEPLAN+"2",(count>0));
  }

  function showCreateTripButton(value)
  {
    if (!value)
    {
      value = document.getElementById(NEWTRIPNAME_ID).value;
    }
    enableButton(CREATETRIP_ID,(value!=""));
  }

  function setButtonStates()
  {
    showMapButton();
    showFitButton();
    showDeleteButton();
    showAddButton();
    showRemoveButton();
    showBeenThereButton();
    showRemovePlannerButton();
  }

  function updateTripCookie(name,attrlist)
  {
    if (name && name!="")
    {
      var trip = getTrip(name);
      if (trip) {
        trip.attrlist = attrlist + (attrlist.substring(attrlist.length)!=","?",":"");
        saveTripCookie();
      }
    }
  }

  function updateRouteCookie(name,attrlist)
  {
    if (name && name!="")
    {
      var trip = getRoute(name);
      if (trip) {
        trip.attrlist = attrlist + (attrlist.substring(attrlist.length)!=","?",":"");
      } else {
        addRoute(new Trip(name,attrlist));
      }
      saveRouteCookie();
    }
  }

  function reloadOptions()
  {
    elem = document.getElementById(TRIPLIST_NAMESELECTID);
    addSavedTripOptions(elem);
    return elem;
  }


  function addSavedTripOptions(widget)
  {
    if (widget && widget.type=="select-one")
    {
      var opts = widget.options;
      opts.length = 1;
      var trips = _tripsObj.arr;
      _tripsObj.count = 0;
      for (var key in trips)
      {
        var trip = getTrip(key);
        var name = trip.name;
        if (name!="")
        {
          opts[opts.length] = new Option(name.substr(0,Math.min(40,name.length)),name);
          _tripsObj.count++;
        }
      }
    }
  }


  function displayTripNamesInList()
  {
    var elem = document.getElementById(TRIPLIST_TABLE);
    var rows = elem.getElementsByTagName("TR");
    for (var i=1 ; i < rows.length ; i++)
    {
      var cols = rows[i].getElementsByTagName("TD");
      if (cols.length > 3)
      {
        var inputs = cols[0].getElementsByTagName("INPUT");
        if (inputs.length > 0)
        {
          var attrNo = getAttrNo(inputs[0]);
          var triplist = "";
          if (attrNo && attrNo!="")
          {
            for (var key in _tripsObj.arr)
            {
              var trip = getTrip(key);
              if (trip.contains(attrNo))
              {
                var link = (mapPath?mapPath:"/map/") + "trip/route?triplist=" + encodeURIComponent(trip.attrlist) + "&tripname=" + encodeURIComponent(key);
                link = "<a title=\"Click to show trip\" href=\"" + link + "\">" + key + "</a>";
                triplist += (triplist!=""?", ":"") + link;
              }
            }
            cols[3].innerHTML = "<div class=\"tripnames\">" + triplist + "</div>";
          }
        }
      }
    }
  }

  function removeFromTrips(attrNo) {
    removeFromObj(attrNo,_tripsObj);
  }

  function removeFromRoutes(attrNo) {
    removeFromObj(attrNo,_routesObj);
  }

  function removeFromObj(attrNo,obj)
  {
    var trips = obj.arr;
    for (var key in trips)
    {
      var trip = trips[key];
      trip.remove(attrNo);
    }
  }

  function updateList(attrNo,isAdded)
  {
    if (attrNo!=null && attrNo!="") {
      var cook = removeAttrNoFromValue(CookieMgr.getCookie(ATTRLIST),attrNo);
      if (isAdded) {
        var arr = cook.split(",");
        if (arr.length >= MAX_FAV_COUNT)
        {
          alert("Maximum number of favorites has been reached, remove some first");
          return false;
        }
        cook += attrNo + ",";
      }
      CookieMgr.setCookie(ATTRLIST,cook,EXPDATE,"/");
      if (cook!="")
      {
        cook = CookieMgr.getCookie(ATTRLIST);
        if (!cook || cook=="")
        {
          alert("Cookies are disabled; unable to save favorites");
          return false;
        }
      }
      setDirty(true);
    }
    return true;
  }
  
  function getMysightArray() {
    var cook = CookieMgr.getCookie(ATTRLIST);
    return cook?cook.split(","):[];
  }
  
  function setSelectedTrip(tripname,attrlist)
  {
    _selectedTrip = new Trip(tripname,attrlist);
  }

  function fitMap()
  {
    map.zoomToMarkers(5,2);
  }

  function updateCheckAll()
  {
    if (!_checkall)
      _checkall = document.getElementById("checkall");
    if (_checkall)
    {
      _checkall.disabled = false;
      if (_selectedTrip.getCount()==0)
      {
//        _checkall.disabled = true;
        _checkall.checked = false;
        _checkall.title = "Check All";
      }
      else
      {
        _checkall.title = "Clear All";
        if (!_isCheckAll)
          _checkall.checked = true;
      }
    }
  }

  function updateEmailContent(req)
  {
    // only if req shows "complete"
    var theReq = req?req:req[ATTRINDX];
    if (theReq!=null && theReq.readyState == 4) {
      // only if "OK"
      if (theReq.status == 200) {
        if (theReq.responseText!=null) {
          var link = "mailto:?subject="+tripname+"&body="+encodeURIComponent(theReq.responseText);
          var widget = document.getElementById(TRIPMAP_EMAIL);
//          if (widget)
//            widget.href=link;
          var win = window.open(link,"emailtarget");
//          if (win && win.open &&!win.closed) win.close();
        }
      } else {
         alert("There was a problem retrieving the email content:\n" + theReq.statusText);
      }
    }
  }

  function removeFromKeyedArray(name,arr) {
    var newmap = new Array();
    for (var key in arr)
    {
      if (key!=name)
      {
        newmap[key] = arr[key];
      }
    }
    return newmap;
  }

  return {

    updateAttrList: function (widget,attrNo) {
      if (isLoginEnabled && !AccountMgr.isLoggedIn()) {
        AccountMgr.login();
        if (!AccountMgr.isLoggedIn())
          return false;
      }
      var isAdded = true;
      if (typeof widget=="Object"){
        if (!attrNo || attrNo===undefined)
          attrNo = getAttrNo(widget);
        isAdded = widget.checked;
      }
      return updateList(attrNo,isAdded);
    },

    // returns true if passed attraction number is in favorites list
    isAttrSelected: function(attrNo)
    {
      return (!isLoginEnabled || AccountMgr.isLoggedIn()) && listContains(CookieMgr.getCookie(ATTRLIST),attrNo);
    },

    setMysightCheckbox: function(attrNo) {
      var widget = document.getElementById("attr-" + attrNo);
      if (widget) {
        widget.checked = TripPlanner.isAttrSelected(attrNo);
      }
    },
    
    setMysightCheckboxes: function(arr) {
      if (!arr) arr = getMysightArray();
      for (var i=arr.length ; i-- > 0 ; ) {
        TripPlanner.setMysightCheckbox(arr[i]);
      }
    },

    addToTripList: function (widget,attrNo) {
      if (attrNo!=null && attrNo!="") {
        cursorWait();
        if (widget.checked) {
          if (_selectedTrip.getCount() >= MAX_TRIP_SIZE)
          {
            alert("Maximum number of sights per trip exceeded");
            cursorClear();
            widget.checked = false;
            return false;
          }
          _selectedTrip.add(attrNo);
        } else {
          _selectedTrip.remove(attrNo);
        }
        setTimeout(function(){
          updateCheckAll();
          showOrHideMarker(widget.checked,attrNo);
          var field = document.getElementById(TRIPLIST_ELEMENTID);
          if (field) field.value = _selectedTrip.attrlist;
          setButtonStates();
          displayTripNamesInList();
          updateMapCaption(_selectedTrip);
          },1);
        cursorClear();
      }
    },

    // prep fields before submitting for map
    prepTripField: function () {
      var field = document.getElementById(TRIPLIST_NAMESELECTID);
      var value = field.value;
      field = document.getElementById(TRIPLIST_ELEMENTID);
      if (field) {
        value = field.value;
      }
      if (value=="" || value==",") {
        alert("You must add at least one attraction to the selected trip for a map");
        return false;
      }
      return true;
    },

    removeFromAttrlist: function (list) {
      if (!list)
        list = CookieMgr.getCookie(ATTRLIST);
      var cookArr = list.split(",");
      var count = _selectedTrip.getCount();
      if (count == (cookArr.length-1))
      {
        if (!confirm("You are deleting all the attractions from your list. Sure about that?"))
          return false;
      }
      else if (count>0 && !confirm("Are you sure you want to delete "+count+" attractions?"))
      {
        return false;
      }
      var arr = _selectedTrip.getArray();
      for (var i=0 ; i < arr.length ; i++) {
        var attrNo = (arr[i]!=null?arr[i]:"");
        if (attrNo!="") {
          list = removeAttrNoFromValue(list,attrNo);
          removeFromTrips(attrNo);
          removeFromRoutes(attrNo);
        }
      }
      saveTripCookie();
      saveRouteCookie();
      CookieMgr.setCookie(ATTRLIST,list,EXPDATE,"/");
      return true;
    },

    saveTrip: function (name,attrlist,widget)
    {
      if (attrlist && attrlist != "") {
        if (typeof name == "object")
          name = name.value;
        if (getTrip(name) != null) {
          alert("Trip  (" + name + ") already exists;\n Change trip name and try again");
        }
        else if (getTripCount() < MAX_TRIPS_COUNT) {
          addToList(attrlist);
          addTrip(new Trip(name, attrlist));
          saveTripCookie();
          enableButton(TRIPLIST_REMOVETRIP, getTrip(name) != null);
          if (widget)
            widget.parentNode.innerHTML = "'" + name + "' added to saved trip list";
        }
        else {
          alert("Maximum number of trips (" + MAX_TRIPS_COUNT + ") already saved;\n delete some trips first");
        }
      }
    },

    removeTrip: function(name)
    {
      if (!name)
        name = _selectedTrip.name;
      if (typeof name=="object")
        name = name.value;
      var tripsarray = removeFromKeyedArray(name,_tripsObj.arr);
      saveTripCookie(tripsarray);
      tripsarray = removeFromKeyedArray(name,_routesObj.arr);
      saveRouteCookie(tripsarray);
      reloadOptions();
      displayTripNamesInList();
      this.changeTripName(elem);
    },

    checkAll: function(widget)
    {
      _isCheckAll = true;
      MultiSelect.update(widget,null,true);
      _isCheckAll = false;
    },

    changeTripName: function(widget)
    {
      reset(false);
    },

    addToTrip: function()
    {
      var field = document.getElementById(TRIPLIST_ELEMENTID);
      if (field) {
        arr = _selectedTrip.getArray();
        for (var i=0 ; i < arr.length ; i++)
        {
          var attrNo = _selectedAttrs[i];
          if (attrNo!=null)
          {
            _selectedTrip.add(attrNo);
          }
          if (_selectedTrip.getCount() > MAX_TRIP_SIZE)
            break;
        }
        updateTripCookie(_selectedTrip.name,_selectedTrip.attrlist);
        displayTripNamesInList();
        setButtonStates();
      }
    },

    removeFromTrip: function()
    {
      var field = document.getElementById(TRIPLIST_ELEMENTID);
      if (field) {
        arr = _selectedTrip.getArray();
        for (var i=0 ; i < arr.length ; i++)
        {
          var attrNo = _selectedAttrs[i];
          if (attrNo!=null)
          {
            _selectedTrip.remove(attrNo);
          }
        }
        updateTripCookie(_selectedTrip.name,_selectedTrip.attrlist);
        displayTripNamesInList();
      }
    },
    
    reverseTripOrder: function()
    {
      _selectedTrip.reverse();
      updateTripCookie(_selectedTrip.name,_selectedTrip.attrlist);
    },

    updateTripOrder: function(tripArray)
    {
      var attrlist = tripArray.join(',');
      updateTripCookie(_selectedTrip.name,attrlist);
    },

    init: function()
    {
      initVars();
      addSavedTripOptions(document.getElementById(TRIPLIST_NAMESELECTID));
      displayTripNamesInList();
      reset(true);
    },

    initTripMap: function(tripname,attrlist)
    {
      initVars();
      setSelectedTrip(tripname,attrlist);
      enableButton(TRIPLIST_REMOVETRIP,getTrip(tripname)!=null);
    },

    updateTripMap: function(widget)
    {
      var value = widget.value;
      document.title = value;
      _selectedTrip.name = value;
      tripname = value;
      enableButton(TRIPLIST_REMOVETRIP,getTrip(value)!=null);
      document.getElementById(TRIPNAME_HEADING).innerHTML = value;
    },

    createTrip: function(widget)
    {
      var elem=document.getElementById(NEWTRIPNAME_ID);
      if (elem)
      {
        var name = elem.value;
        if (name && name!="")
        {
          if (getTripCount() >= MAX_TRIPS_COUNT)
          {
            alert("Maximum number of trips is currently 5.  Delete some trips first.");
            return;
          }
          if (getTrip(name)!=null)
          {
            if (!confirm("A trip named '"+name+"' already exists. Do you want to replace it?"))
              return false;
          }
          elem.value = "";
          addTrip(new Trip(name,_selectedTrip.attrlist));
          saveTripCookie();
          elem = reloadOptions();
          for (var i=0 ; i < elem.options.length ; i++)
          {
            if (elem.options[i].value==name)
            {
              elem.options[i].selected = true;
              break;
            }
          }
          displayTripNamesInList();
          this.changeTripName(elem);
          showCreateTripButton("");
        }
      }
    },

    keyUpTripName: function(widget)
    {
      showCreateTripButton(widget.value);
    },

    updateTrip: function()
    {
      updateTripCookie(_selectedTrip.name,_selectedTrip.attrlist);
      displayTripNamesInList();
      setButtonStates();
    },

    setMailToLink: function(widget)
    {
      var params = "?tripname="+encodeURIComponent(_selectedTrip.name) + "&triplist=" + encodeURIComponent(_selectedTrip.attrlist);
      var route = getRoute(_selectedTrip.name);
      if (route) {
        params += "&route="+encodeURIComponent(route.attrlist);
      }
      loadXMLDoc("/map/buildEmail.php"+params,updateEmailContent,ATTRINDX,"get",true);
    },


    initFavList: function()
    {
      _favsArray = new Array();
    },

    addFavAttraction: function(itemNo,name,longitude,latitude,icon)
    {
      var attr = new Attraction(itemNo,name,longitude,latitude,icon);
      _favsArray[getFavListKey(itemNo)] = attr;
    },

    fitMapView: function()
    {
      fitMap();
    },

    updateRoute: function(name,attrlist) {
      updateRouteCookie(name,attrlist);
    },

    getRouteList: function(name) {
      var route = getRoute(name);
      return route?route.attrlist:"";
    },

    getRouteArray: function(name) {
      var route = getRoute(name);
      return route?route.getArray():[];
    },
    
    addTripToBeenThere: function(name) {
      if (!name) {
        var elem = document.getElementById(TRIPLIST_NAMESELECTID);
        name = elem.value;
      }
      var trip = getTrip(name);
      if (trip)
        AccountMgr.addItems(trip.getArray());
    }
    
  };
}();
var btArr = [];
function initBeenThere() { AccountMgr.init(null,function(){TripPlanner.setMysightCheckboxes();AccountMgr.setBeenThereCheckboxes();});}
addLoadEvent(function() {
 initBeenThere();
 window.onbeforeunload=function() { AccountMgr.saveState(); };
 });