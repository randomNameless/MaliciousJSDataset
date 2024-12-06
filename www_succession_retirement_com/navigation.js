// navigation.js - Emerald Connect Navigation Menu Class
// Copyright 2012 Emerald Connect, Inc. All rights reserved.
// written by c wasser - last updated 06/22/2012
var $Menu = function (link) {
  var _Menu = this;
  this.element = link;
  this.id = $Menus.linkCount;
  $Menus.linkCount++;
  this.width = null;
  this.overMenu = false;
  this.overElement = false;
  var eType = link.tagName.toLowerCase() == 'li' ? 'ul' : 'div';
  this.menuSource = this.element.getElementsByTagName(eType)[0];
  if (this.menuSource) {
    // set width for IE
    if ($G.isIE()) {
      this.width = 160;
      var anchors = this.element.getElementsByTagName('a');
      for (var i = 0; i < anchors.length; i++) {
        var W = Number(anchors[i].innerHTML.length * 8);
        this.width = Math.max(this.width, W);
      }
    }
    this.menuElement = $Menus.createMenuElement(_Menu);
    if (this.menuElement) {
      // event handlers
      this.element.onmouseover = function () { if($('body').is('.navON')) { return false }else{ _Menu.over();} };
      this.element.onmouseout = function () { _Menu.out(); };
      this.menuElement.onmouseover = function () { _Menu.over(true); };
      this.menuElement.onmouseout = function () { _Menu.out(true); };
      this.hideMenu = function () {
        if (_Menu.overElement == false && _Menu.overMenu == false) {
          $Menus.fadeMenu(_Menu);
        }
      };
      this.showMenu = function () {
        _Menu.menuElement.style.display = '';
        for (var i = 0; i < $Menus.menuArr.length; i++) {
          var m = $Menus.menuArr[i];
          if (m.menuElement) {
            if (m.menuElement != _Menu.menuElement) {
              m.menuElement.style.display = 'none';
              $S.opacity(m.menuElement, 10);
            }
          }
        }
      };
      this.over = function (isMenu) {
        if (isMenu) {
          _Menu.overMenu = true;
        }
        else {
          _Menu.overElement = true;
          $Menus.reposition(this.menuElement, this.element);
        }
        _Menu.showMenu();
      };
      this.out = function (isMenu) {
        if (isMenu) { _Menu.overMenu = false; }
        else { _Menu.overElement = false; }
        _Menu.hideMenu();
      };
    }
  }
  return this;
};
var $Menus = {
  nav: null,
  menuArr: [],
  linkCount: 0,
  orientation: 'H',
  getMaxHeight: function () {
    var menuTop = $G.offset(this.nav, true)[1] + this.nav.offsetHeight;
    var winHeight = $G.windowHeight();
    var margin = 8;
    var h = (winHeight - menuTop) - margin; // ideal, menu fits without scrolling
    if (menuTop > 300) {
      // big banner equals lower nav start positioning
      // allow user to scroll and see taller menus
      h = h < 300 ? (winHeight - this.nav.offsetHeight) - margin : h;
    }
    h = h < 100 ? 100 : h; // minimum max height
    return h;
  },
  reposition: function (menuElement, linkElement) {
    if ($Menus.orientation == 'V') {
      // vertical nav
      menuElement.style.top = $G.offset(linkElement, true)[1] + 'px';
      menuElement.style.left = Number($G.offset(linkElement, true)[0] + linkElement.offsetWidth) + 'px';
    }
    else {
      // horizontal nav
      menuElement.style.top = Number($G.offset(linkElement, true)[1] + linkElement.offsetHeight) + 'px';
      menuElement.style.left = $G.offset(linkElement, true)[0] + 'px';
    }
  },
  createMenuElement: function (_Menu) {
    var id = _Menu.id;
    var divToCopy = _Menu.menuSource;
    var div = divToCopy.cloneNode(true);
    div.setAttribute('id', String('_menu_' + id));
    $G.body().appendChild(div);
    var legacyClassName = div.tagName.toLowerCase() == 'ul' ? '' : 'alphamenu_content ';
    div.className = legacyClassName + 'menu_content';
    // nav orientation is not defined, 
    // try to determine it from css properties
    if (typeof nav_orientation == 'undefined') {
      nav_orientation = $Menus.orientation;
      var nav = $G.id('navigation');
      if (nav) {
        var float = 'none';
        try {
          if ($G.isIE()) {
            float = nav.currentStyle.cssFloat;
            if (typeof float == 'undefined') {
              float = nav.currentStyle.styleFloat;
            }
          }
          else { float = document.defaultView.getComputedStyle(nav, null).cssFloat; }
          if (float.toLowerCase() == 'left') { nav_orientation = 'V'; }
        }
        catch (error) {
          // do nothing
        }
      }
    }
    $Menus.orientation = nav_orientation == 'V' ? 'V' : 'H';
    this.reposition(div, divToCopy.parentNode);
    div.style.width = _Menu.width ? String(_Menu.width + 'px') : 'auto';
    if (div.offsetHeight > 0) {
      div.style.height = Math.min($Menus.getMaxHeight(), div.offsetHeight) + 'px';
      div.style.overflow = 'auto';
    }
    div.style.display = 'none';
    return div;
  },
  fadeMenu: function (_Menu) {
    var menuElement = _Menu.menuElement;
    var o = 8;
    var setOpacity = function () {
      if (_Menu.overElement == false && _Menu.overMenu == false) {
        setTimeout(function () {
          if (o > 0) {
            // set and re-call
            $S.opacity(menuElement, o);
            o = o - 2;
            setOpacity();
          }
          else {
            // close and re-set
            menuElement.style.display = 'none';
            o = 10;
            $S.opacity(menuElement, o);
          }
        }, 50);
      }
      else {
        // open and re-set
        menuElement.style.display = '';
        o = 10;
        $S.opacity(menuElement, o);
      }
    };
    // initiate
    setOpacity();
  },
  init: function () {
    var getMenus = function (nav, menuArr, eType) {
      var f = nav.getElementsByTagName(eType)[0];
      if (f) {
        if (!$G.hasClass(f, 'first')) { f.className += ' first'; }
        // loop to get top-level items
        var e = f;
        var nxtSib = true;
        while (e && nxtSib) {
          if (typeof e.tagName != 'undefined') {
            // create nav group
            var ne = new $Menu(e);
            menuArr.push(ne);
          }
          if (e.nextSibling) {
            e = e.nextSibling;
          }
          else {
            nxtSib = false;
          }
        }
        if (typeof initGlobalEventHandlers != 'undefined') {
          initGlobalEventHandlers();
        }
      }
    };
    if (this.linkCount < 1) {
      // table-based navigation menus
      this.nav = $G.id('navigation_menu');
      if (this.nav) {
        getMenus(this.nav, this.menuArr, 'td');
      }
      else {
        // ul-based navigation menus
        this.nav = $G.id('navigation');
        if (this.nav) {
          getMenus(this.nav, this.menuArr, 'li');
        }
      }
    }
  }
};
$G.onload(function () {
  if ($G.isIE() && $G.ieVersion() < 8) {
    // for IE7 and IE6, wait for nav positioning
    var tryCount = 0;
    var tryCallInit = function (id) {
      var nav_menu = $G.id(id);
      if (nav_menu) {
        if ($G.offset(nav_menu)[1] > 0) {
          $Menus.init();
          clearInterval(navload_interval);
        }
      }
    };
    var navload_interval = setInterval(function () {
      if (tryCount > 15) {
        $Menus.init();
        clearInterval(navload_interval);
      }
      tryCount++;
      tryCallInit('navigation_menu');
      tryCallInit('navigation');
    }, 100);
  }
  else {
    $Menus.init();
  }
});

