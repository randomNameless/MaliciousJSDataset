function changePage(widget,total,page,maxResultCount,linkPage,nextString)
{
  if (widget.value > 0 && widget.value <= total)
  {
    var offset = maxResultCount * (widget.value - 1);
    var newloc = linkPage + "?offset=" + offset + nextString;
    window.location.replace(newloc);
  }
  else
  {
    alert("Page number must be between 1 and "+total);
    widget.value=page;
  }
}

function checkEnter(e,widget)
{
  var keynum;
  if(window.event) // IE
  {
    keynum = e.keyCode;
    if (keynum==13 && widget.onchange)
    {
      widget.onchange();
    }
  }
  else if(e.which) // Netscape/Firefox/Opera
  {
    keynum = e.which;
  }
  return true;
}

function modalPopup(urlOrElem,popupId,cls) {
  this.url = typeof(urlOrElem)=="string"?urlOrElem:null;
  this.content = typeof(urlOrElem)=="object"?urlOrElem:null;
  this.popupId = popupId;
  this.contentName = popupId + "Content";
  {
    var _elem = document.createElement("div");
    _elem.id = popupId;
    _elem.className = 'popupDialog'+(cls?(' '+cls):'');
    _elem.style.display = "none";
    _elem.innerHTML = '<div class="modalBackground"></div>';
    var _child = makeShim('modalBackground');
    _child.style.top = 0;
    _child.style.left = 0;
    _elem.appendChild(_child);
    _child = document.createElement("div");
    _child.className = "modalContainer";
    _elem.appendChild(_child);
    _child = _child.appendChild(document.createElement("div"));
    _child.className = "modal";
    var _titleId = popupId + 'Title';
    var _closeId = popupId + 'Close';
    var _html = '<div class="modalTop" style="z-index:1010"><span id="'+_titleId+'"></span><a id="'+_closeId+'" href="#">[X]</a></div>';
    _html += '<div class="modalBody" style="z-index:1010">';
    if (this.url)
      _html += '<iframe name="'+this.contentName+'" class="popupIframe" frameborder="0" src="'+this.url+'"></iframe>';
    else 
      _html += '<div id="'+this.contentName+'"></div>';
    _html += '</div>';
    _child.innerHTML = _html;
    this.popup = document.body.appendChild(_elem);
    if (this.content) {
      _elem = document.getElementById(this.contentName);
      if (_elem) {
        _elem.appendChild(this.content);
      }
    }
    this.titleElem = document.getElementById(_titleId);
    _elem = document.getElementById(_closeId);
    if (_elem) {
      var _this = this;
      _elem.onclick = function() {
        _this.hide(this.url!=null);
        return false;
      };
    }
  }
  
  this.show = function(isUrlReset) {
    if (isUrlReset) {
      var win = window.frames[this.contentName];
      if (win && win.location.href!=this.url)
        win.location.href = this.url;
    }
    this.popup.style.display = "block";
    this.popup.style.top = document.body.scrollTop;
  };
  
  this.hide = function(isUrlReset) {
    this.popup.style.display = "none";
    if (isUrlReset) {
      var win = window.frames[this.contentName];
      if (win)
        win.location.href = "about:blank";
    }
  };
  this.setTitle = function(title) {
    if (this.titleElem)
      this.titleElem.innerHTML = title;
  };
}

function makeShim(cls) {
  var i = document.createElement('iframe');
  i.className = cls;
  i.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
  i.style.position='absolute';
  i.setAttribute('frameborder', '0');
  i.setAttribute('src', 'javascript:void(0);');
  return i;
}

function xhrFactory(url,theParseFunction,method,async,isForceUnique)
{
  // make sure we don't get cached data
  var req;
  var d = (isForceUnique)?(new Date()).getTime().toString():Date.parse((new Date()).toDateString());
  url = url + (url.indexOf('?')==-1?"?":"&") + "unique=" + d;
  if (async===undefined)
    async = true;
  // branch for native XMLHttpRequest object
  req =  (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  req.open(method || "get", url, async);
  if (theParseFunction) {
    req.onreadystatechange = theParseFunction;
    req.send(null);
  }

  return req;
}

function addLoadEvent(func) { 
  if(typeof jQuery!="undefined") {
    jQuery(document).ready(func);
  }
  else if (typeof window.onload != 'function') { 
    window.onload = func; 
  } else { 
    var oldonload = window.onload; 
    window.onload = function() { 
      if (oldonload) { 
        oldonload(); 
      } 
      func(); 
    };
  } 
} 

function loadLoginHint() {
  var xhReq = xhrFactory("/account/loginHint");
  xhReq.onreadystatechange = function(){
    if (xhReq.readyState != 4)  { return; }
    var elem = document.getElementById("loginStats");
    elem.innerHTML = xhReq.responseText;
  };
  xhReq.send(null);  
}
function addMouseupHandler(popup,closeFn) {
  $(document).mouseup(function (e)
  {
    if (!popup.is(':hidden') && ! popup.is(e.target) && popup.has(e.target).length === 0)
    {
      closeFn();
    }
  });

}
function showRegisterPopup(event) {
  var sessionStart = sessionStorage.sessionStart;
  var popup = document.getElementById("register-popup");
  if (popup) {
    var isTimeExpired = ((new Date()).getTime() - sessionStart) > 20000;
    var isSelectNotUsed = event.relatedTarget == null && event.target.nodeName.toLowerCase() !== 'select';

    if (isTimeExpired && isSelectNotUsed) {
      document.removeEventListener("mouseout", showRegisterPopup);
      var dialog = new modalPopup(popup,"register-popup-container");
      popup.style.display = "block";
      dialog.show();
      localStorage.setItem("skip-register","yes")
    }
  }
}
/*
addLoadEvent(function() {
  var isRegistered = localStorage.getItem("skip-register");
  if (!isRegistered) {
    var sessionStart = sessionStorage.sessionStart;
    if (!sessionStart) {
      sessionStorage.sessionStart = sessionStart = (new Date()).getTime();
    }
    document.addEventListener("mouseout", showRegisterPopup);
  }

});
*/
