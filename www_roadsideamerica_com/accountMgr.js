// Copyright 2007 . All rights reserved.
var isLoginEnabled = false;
var AccountMgr = function()
{
  var BEENTHERE_COOKIENAME = "been";
  var EXPDATE=10000;

  var _beenThereList="";
  var _loginDialog;
  var _removeArray = {};
  var _arrCnt = 0;
  var _checkall;
  var _isCheckAll = false;
  var _beenThereObjs = [];
  var _beenThereMap = {};
  var _attrAdded="";
  var _attrRemoved="";
  var _isLoggedIn;
  var _attrCookie;
  var _tripCookie;
  var _isDirty = false;

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
    attrNo += ",";
    return value && (value.substr(0,attrNo.length)==attrNo || value.indexOf(","+attrNo) > -1);
  }

  function getArrayFromValue(attrlist)
  {
    return (attrlist && attrlist!="")?attrlist.split(","):new Array();
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

  function updateBeenThereList(attrNo,isAdded)
  {
    if (attrNo!=null && attrNo!="") {
      _isDirty = true;
      if (isAdded) {
        _attrAdded = addToValue(_attrAdded,attrNo);
        _beenThereList = addToValue(_beenThereList,attrNo);
        _attrRemoved = removeAttrNoFromValue(_attrRemoved,attrNo);
      } else {
        _attrRemoved = addToValue(_attrRemoved,attrNo);
        _attrAdded = removeAttrNoFromValue(_attrAdded,attrNo);
        _beenThereList = removeAttrNoFromValue(_beenThereList,attrNo);
      }
    }
    return true;
  }
  
  function getBeenThereArray()
  {
    return _beenThereList?_beenThereList.split(","):[];
  }

  var _urlLogin = "/account/login?ispopup=true";
  var _urlRegister = "/account/register?ispopup=true";
  
  function getLoginDialog(url) {
    if (!_loginDialog) {
      var elem = document.createElement("div");
      elem.id = "loginDialog";
      elem.className = 'popupDialog';
      elem.style.display = "none";
      var html = '<div class="modalBackground"></div><div class="modalContainer"><div class="modal"><iframe class="modal" style="display: none; position:absolute; top:0; left:0;" src="javascript:false;" frameBorder="0" scrolling="no"></iframe><div class="modalTop"><a href="javascript:AccountMgr.hideLoginDialog()">[X]</a></div>';
      html += '<div class="modalBody"><iframe name="popup" class="popupIframe" frameborder="0" src="'+url+'"></iframe></div>';
      html += '</div></div>';
      elem.innerHTML = html;
      _loginDialog = new modalPopup(url, "loginDialog");
    } else {
      _loginDialog.url = url;
      _loginDialog.show(true);
    }
    return _loginDialog;
  }
  
  function showDialog(dialog,widget) {
    dialog.style.display = "block";
    dialog.style.top = document.body.scrollTop;
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

  function hideAttraction(itemNo)
  {
    hideMarkerById(itemNo,ATTR);
  }

  function enableButton(name,condition)
  {
    var elems = document.getElementsByName(name);
    
    for (var i=elems.length; i-- > 0; )
    {
      elems[i].disabled = (condition?"":"disabled");
    }
  }
  
  function BeenThereAttr(attr) {
    this.attr = attr;
    this.yearsVisited = yearsVisited;
    this.info = null;
    this.tags = null;
    this.rating = 0;
  }
  
  function parseCookieValue(cook) {
    var vals = cook.split('|');
    var attrNo = vals[0];
    var obj = new BeenThereAttr(attrNo);
    if (vals.length > 1)
      obj.yearsVisited = vals[1];
    if (vals.length > 2)
      obj.rating = vals[2];
    if (vals.length > 3)
      obj.info = vals[3];
    if (vals.length > 4)
      obj.tags = vals[4];
    _beenThereObjs.push(obj);
    _beenThereMap[attrNo] = obj;
  }

  function loginChallenge(widget) {
    getLoginDialog(_urlLogin).show();
  }
  
  function setHint(html) {
    var loggedIn = $(".loggedIn");
    var loggedOut = $(".loggedOut");
    _isLoggedIn = html.length > 0;
    if (_isLoggedIn) {
      $("#loggedIn").html(html);
      loggedIn.show();
      loggedOut.hide();
    }
    else {
      loggedIn.hide();
      loggedOut.show();
    }
  }

  return {
  
    init: function(attrlist,loadFn) {
      if (!isLoginEnabled || attrlist) {
        _beenThereList = attrlist?attrlist:"";
        if (loadFn)
          loadFn();
      } else {
        var xhReq = xhrFactory("/account/data/getUserState");
        xhReq.onreadystatechange = function(){
          if (xhReq.readyState != 4)  { return; }
          _beenThereList = xhReq.responseText;
          _isLoggedIn = (_beenThereList!="ERROR: not logged in");
          if (!_isLoggedIn) 
            _beenThereList = "";
          else if (loadFn)
            loadFn();
        };
        xhReq.send(null);
      }
    },
    
    updateBeenThere: function(widget, attrNo){
      if (!_isLoggedIn) {
        loginChallenge(widget);
        return false;
      }
      if (!attrNo || attrNo === undefined) 
        attrNo = getAttrNo(widget);
      return updateBeenThereList(attrNo, widget.checked);
    },
    
    saveState: function(){
      if (_isDirty && _isLoggedIn) {
//        var url = "/map/bt/addRemoveBTattracts?add="+_attrAdded+"&remove="+_attrRemoved;
        var url = "/account/data/saveUserState?add="+_attrAdded+"&remove="+_attrRemoved;
        var req = xhrFactory(url,null,"get",false);
        req.send(null);
        var serverResponse = req.responseText;
        return true;
      }
      return false;
    },

    // returns true if passed attraction number is in been there list
    isBeenThereSelected: function(attrNo){
      return listContains(_beenThereList, attrNo);
    },

    hideLoginDialog: function(){
      _loginDialog.hide(true);
    },

    setBeenThereCheckbox: function(attrNo){
      var widget = document.getElementById("bt-attr-" + attrNo);
      if (widget) {
        widget.checked = AccountMgr.isBeenThereSelected(attrNo);
      }
    },

    setBeenThereCheckboxes: function(arr) {
    	if (!arr) arr = getBeenThereArray();
      for (var i=arr.length ; i-- > 0 ; ) {
        AccountMgr.setBeenThereCheckbox(arr[i]);
      }
    },

    removeItems: function (arr) {
      arr = arr || _removeArray;
      for (key in arr) {
        var item = arr[key];
        updateBeenThereList(item.attrNo,false);
      }
      return true;
    },
    
    addItems: function (attrNoArr) {
      for (var i=attrNoArr.length ; i>0 ; ) {
        var attNo = attrNoArr[--i];
        updateBeenThereList(attNo,true);
      }
      return true;
    },

    getAttrList: function() {
      return _beenThereList;
    },

    initBeenThereMap: function(){
      _removeArray = {};
      _arrCnt = 0;
      enableButton(REMOVE_BUTTON,false);
    },

    updateRemoveList: function (widget,attrNo) {
      if (attrNo!=null && attrNo!="") {
        if (widget.checked) {
          _removeArray[attrNo] = {
            attrNo: attrNo,
            widget: widget
          };
          _arrCnt++;
        } else {
          delete _removeArray[attrNo];
          _arrCnt--;
        }
        enableButton(REMOVE_BUTTON,_arrCnt>0);
      }
    },

    checkAll: function(widget)
    {
      _isCheckAll = true;
      MultiSelect.update(widget,null,true);
      _isCheckAll = false;
    },

    fitMapView: function() {
      fitMap();  
    },
    
    login: function() {
      loginChallenge();
    },
    
    logout: function(callback) {
      AccountMgr.saveState();
      var xhReq = xhrFactory("/account/logout?skipRedirect=1");
      xhReq.onreadystatechange = function(){
        if (xhReq.readyState != 4)  { return; }
        _isLoggedIn = false;
        _beenThereList = "";
        if (callback) callback();
      };
      xhReq.send(null);
    },
    
    register: function() {
      getLoginDialog(_urlRegister).show();
    },
    
    updateLoginHint: function() {
      var xhReq = xhrFactory("/account/loginHint");
      xhReq.onreadystatechange = function(){
        if (xhReq.readyState != 4)  { return; }
        setHint(xhReq.responseText);
      };
      xhReq.send(null);  
    },
    
    setLoginHint: function(html) {
      setHint(html);
    },
    
    isLoggedIn: function() {
      return _isLoggedIn;
    },
    
    setDirty: function(isDirty) {
      _isDirty = isDirty;
    }
  };
}();
