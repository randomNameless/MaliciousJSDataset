"use strict";

var J = jQuery;
var ANN = ANN || {};

ANN.lang = document.documentElement.lang;
J.window = J(window);
J.document = J(document);

////////////////////////////////////////////////////////////////////////////////

(function(load){
  load(ANN);
})(function(self){
  
  ANN.Const = {};
  function define(k,v){ ANN.Const[k] = v; }


define('ANN_DOMAIN', 'animenewsnetwork.com');

define('ANN_BLUE', '#2d50a7');

define('DESKTOP_LAYOUT_MIN_WIDTH', 652);

define('AD_IFRAME_ATTRIBUTES',  ' scrolling="no" style="border:0; display:block; width:100%" ');
define('AD_SANDBOX_ATTRIBUTES', ' scrolling="no" style="border:0; display:block; width:100%" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" ');

define('GRID_MAX_COLUMNS', 5);
define('GRID_BOX_PADDING', 8);
define('GRID_BOX_MINWIDTH', 300);
define('GRID_BOX_MAXWIDTH', 400);
define('GRID_BOX_HEIGHT', 200);

define('MAINFEED_FILTER_TYPES', 'News, Interest, Reviews, Columns');
define('MAINFEED_FILTER_TOPICS', 'Anime, Manga, Novels, Games, Music, Merch, Events, Industry, People, Live-Action, Korean');

define('EDITIONS_JSON', '{"en-W":{"timezone":"UTC","countries":"ES,NL,IS,DK,FI,NO,SE","name":"World","locale":"en-W","lang":"en","cc":"w","countries_names":{"ES":"Spain","NL":"Netherlands","IS":"Iceland","DK":"Denmark","FI":"Finland","NO":"Norway","SE":"Sweden"},"audience":["*"],"geo":["ES","NL","IS","DK","FI","NO","SE","*"]},"en-US":{"timezone":"EST5EDT","countries":"US,CA","name":"USA & Canada","locale":"en-US","lang":"en","cc":"us","countries_names":{"US":"USA","CA":"Canada"},"audience":["~US","CA"],"geo":["US","CA","PR","GU"]},"en-UK":{"timezone":"Europe/London","countries":"GB,IE","name":"[UK & Ireland]","locale":"en-UK","lang":"en","cc":"uk","countries_names":{"GB":"United Kingdom","IE":"Ireland"},"audience":["~US","GB","IE"]},"en-AU":{"timezone":"Australia/Sydney","countries":"AU,NZ","name":"Australia & New-Zealand","locale":"en-AU","lang":"en","cc":"au","countries_names":{"AU":"Australia","NZ":"New Zealand"},"audience":["~US","AU","NZ"],"geo":["AU","NZ","CC","CX","NF","CK"]},"en-IN":{"timezone":"Asia/Kolkata","countries":"IN","name":"India","locale":"en-IN","lang":"en","cc":"in","countries_names":{"IN":"India"},"audience":["~US","IN"],"geo":["IN"]},"en-SEA":{"timezone":"Asia/Manila","countries":"ID,PH,TH,MY,VN,SG,HK","name":"Southeast Asia","locale":"en-SEA","lang":"en","cc":"sea","countries_names":{"ID":"Indonesia","PH":"Philippines","TH":"Thailand","MY":"Malaysia","VN":"Vietnam","SG":"Singapore","HK":"Hong Kong"},"audience":["~US","ID","PH","TH","MY","VN","SG","HK"],"geo":["ID","PH","TH","MY","VN","SG","HK","BN","KH","TL","LA","MM","CC","CX"]},"zh-S":{"timezone":"Asia/Shanghai","countries":"CN","name":"[Chinese / 中文 (简化字)]","locale":"zh-S","lang":"zh","cc":"s","countries_names":{"CN":"China"},"audience":["~US","CN"]},"zh-T":{"timezone":"Asia/Taipei","countries":"TW","name":"[Chinese / 中文 (繁體字)]","locale":"zh-T","lang":"zh","cc":"t","countries_names":{"TW":"Taiwan"},"audience":["~US","TW"]},"fr-FR":{"timezone":"Europe/Paris","countries":"FR","name":"Français","locale":"fr-FR","lang":"fr","cc":"fr","countries_names":{"FR":"France"},"audience":["~US","FR","CA"],"geo":["FR"]}}');

define('USERPREFS_JSON', '{"sidebar_images":{"type":"boolean","default":true},"sidebar_minimize":{"type":"boolean","default":false},"mainfeed_viewmode":{"type":"string","default":"grid-thumb"},"grid_filters":{"type":"array","default":["*"]},"easyread_text_width":{"type":"number","default":100,"server_level":1},"infinite_scroll":{"type":"boolean","default":true},"infinite_scroll_mix_news_and_interest":{"type":"boolean","default":true},"no_sexy_ad_skins":{"type":"boolean","default":false,"default_profile":"all","server_level":1},"hide_report_a_problem":{"type":"boolean","default":false},"data_grid":{"type":"object","default":null},"i_am_18":{"type":"boolean","default":null},"no_top_feed":{"type":"boolean","default":false,"server_level":2,"user_level":1},"no_infolinks":{"type":"boolean","default":true,"default_profile":"all","server_level":2,"user_level":1},"no_network_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":2,"user_level":2},"no_banner_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"no_rectangle_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"no_button_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"no_skin_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"no_around_the_web_ads":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"no_advertorials":{"type":"boolean","default":true,"default_profile":"all","server_level":2,"user_level":2},"blocked_advertisers":{"type":"array","default":[],"default_profile":"all","server_level":2,"user_level":2},"redirect_to_fast":{"type":"boolean","default":true,"default_profile":"all","server_level":1,"user_level":2},"encyc_image_format":{"type":"string","default":"fit200x200","server_level":2,"user_level":2},"encyc_hide_sidebar":{"type":"boolean","default":false,"server_level":2,"user_level":2},"no_marquee":{"type":"boolean","default":false,"server_level":2,"user_level":2},"no_forum_flood_control":{"type":"boolean","default":true,"default_profile":"all","user_level":2},"request_site_feature":{"type":"boolean","default":true,"default_profile":"all","user_level":2},"request_review":{"type":"boolean","default":true,"default_profile":"all","user_level":2},"request_column":{"type":"boolean","default":true,"default_profile":"all","user_level":2},"request_editorial":{"type":"boolean","default":true,"default_profile":"all","user_level":2},"early_access_articles":{"type":"boolean","default":true,"default_profile":"all","user_level":2}}');

  
  self.doc_ready =
    function(){
      if (ANN.is_ready) return;
      ANN.is_ready = true;
      ANN.debug.event('doc_ready');
      ANN.performance.start('ANNinit');
      ANN.notifications.init();
     try{
      ANN.logev.reporter.init();
      ANN.mega_nav.init();
      ANN.user_preferences.init();
      ANN.custom_attr.init();
      ANN.sidebar.init(); //before layout (because may remove sidebar)
      ANN.grid.init();
      ANN.marquee.init();
      ANN.layout.init();
      ANN.ads.init(); //after grid (because of insert_mainfeed_placeholders)
      ANN.searchbox.init();
      ANN.images.init();
      ANN.lazyload.init();
      ANN.infinite_scroll.init();
      ANN.tabs.init();
      ANN.debug.init();
      ANN.performance.end('ANNinit');
     }
     catch(e){ ANN.notifications.js_error(e); }
    };
  
});

(function(load){
  load();
})(function(){
  
  if (!Array.prototype.includes)
    Array.prototype.includes =
    function(value){
      return this.indexOf(value) >= 0;
    };
  
  if (!Array.prototype.forEach)
    Array.prototype.forEach =
    function(fn){
      var array = this;
      J.each(array, function(index, value){
        fn.call(this, value, index, array);
      });
    };
  
  if (!Function.prototype.bind)
    Function.prototype.bind =
    function(){
      var args = Array.prototype.slice.call(arguments);
      var context = args.shift();
      var fn = this;
      return function(){
        return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
      };
    };
  
});

(function(load){
  load(ANN);
})(function(self){
  
  /*
  the original escape() is kinda useless
    U+002B  "+" => "+" (risk decoding as " ")
    U+00E9  "é" => "%E9" (not utf-8)
    U+3042  "あ" => "%u3042" (hiragana 'a', not utf-8)
    U+1F600 "😀" => "%uD83D%uDE00"  (grinning face, not utf-8)
  and sometimes uselessly strict
    U+0021  "!" => "%21"
    U+0027  "'" => "%27"
    U+0028  "(" => "%28"
    U+0029  ")" => "%29"
    U+007E  "~" => "%7E"
  but encodeURIComponent is a bit strict:
    U+002F  "/" => "%2F" (only useful in path, not query string)
    U+0040  "@" => "%40" (only useful in user, not query string)
  so we redefine escape to be more useful
  */
  window._escape = window.escape;
  window.escape = function(str){
    return encodeURIComponent(str).replace(/%2F/g,'/').replace(/%40/g,'@');
  };
  window._unescape = window.unescape;
  window.unescape = function(str){
    if (typeof str != "string") str += '';
    str = str.replace(/\+/g, '%20');
    str = str.replace(/(%u[0-9a-f]{4})/ig, function(c){ return _unescape(c); });
    return decodeURIComponent(str);
  };
  
  // tell us if element is checked (and if it *can* be checked on/off)
  J.prototype.checked = function(){
    if (this.is(':checked')) return true;
    if (this.is(':checkbox, :radio')) return false;
    return null;
  };
  
  function isObj(v){
    return (v instanceof Object) && Object.getPrototypeOf(v) === Object.prototype;
  }
  Object.isObject = isObj;
  
  function deepMerge(target, source){
    if (isObj(source)){
      for (var k in source){
        var t = target[k], s = source[k];
        if (isObj(s)){
          s = deepMerge(isObj(t) ? t : {}, s);
        }
        target[k] = s;
      }
    }
    return target;
  }
  Object.deepMerge = deepMerge;
  
  //prevent spam ads from requesting notifications
  self.Notification = window.Notification;
  window.Notification = null;
  
  self.set_edition_cookie =
    function(value){
      ANN.set_cookie('preferred_locale@', value, 365*86400);
    };
  
  self.set_edition =
    function(value){
      self.set_edition_cookie(value);
      var url = J.extend({}, document.location);
      if (url.search.match(/(.*[?&])ann-edition=[^&]*(.*)/)) {
        url.search = (RegExp.$1 + RegExp.$2).replace(/[?&]$/, '');
        url.modified = true;
      }
      if (url.pathname.match(/^\/(fr)(\/.*)/)) {
        url.pathname = RegExp.$2;
        url.modified = true;
      }
      if (url.modified)
        document.location = url.pathname + url.search + url.hash;
      else
        document.location.reload(true);
    };
  
  self.sum =
    function(){
      var n, total=0;
      for (var i=0; i<arguments.length; i++){
        n = arguments[i];
        if (n instanceof Array)
          for (var j=0; i<n.length; j++) total += ANN.sum(n[j]);
        else if (n = parseInt(n))
          total += n;
      }
      return total;
    };
  
  self.sum2 =
    function(list){
      if (!(arguments.length == 1 && list instanceof Array)) {
        list = Array.prototype.slice.call(arguments);
      }
      var n, total=0;
      for (var i=0; i<list.length; i++) {
        n = list[i];
        if (n instanceof Array) n = ANN.sum(n);
        if (n = parseFloat(n)) total += n; //check if float is ok in layout.js
      }
      return total;
    };
  
  self.round =
    function(n, precision){
      var i = 1.0 / precision; //to avoid 51 * 0.1 => 5.1000000000000005
      return Math.round(n * i) / i;
    };
  
  self.Hammer =
    function(obj){
      // Hammer adds user-select:none to elements, so adding it to J.body in order
      // to catch "swipe on page" results in text being unselectable on desktop.
      // So we only instanciate a Hammer object if touch events are supported.
      if ('ontouchstart' in document.documentElement){
        // Additionally, Hammer throws an exception if for some reason the
        // expected target obj doesn't exist, which caused 4nn.cx/f/p=5106120
        // (although it should have been impossible)
        if (obj instanceof jQuery) obj = obj[0];
        if (obj) return new Hammer(obj);
      }
      // In all other cases we return an empty jQuery object which allows 'on'
      // handlers to be attached but with no effect.
      return J();
    };
  
  self.toggle =
    function(elem){
      var scrollTop = J.window.scrollTop();
      elem = J(elem.target||elem);
      if (!elem.hasClass('on') && !elem.hasClass('off')){
        elem.addClass(elem.is(':visible') ? 'on' : 'off');
      }
      elem.toggleClass('on').toggleClass('off');
      
      if (elem.hasClass('on')){
        if (elem.css('position').match(/absolute|fixed/))
          elem.css('z-index', self.toggle.z_index++);
        else
          ANN.layout.recompute_optimal();
      }
      
      //if page jumped around, return it to its original position
      J('.bottom.gutter').css('padding-top', '');
      var jump = ANN.viewport.height() - (J.body.height() - scrollTop);
      if (jump > 0) J('.bottom.gutter').css('padding-top', '+='+jump+'px');
      if (jump) J.window.scrollTop(scrollTop);
      
      return elem.hasClass('on');
    };
  self.toggle.z_index = 1000;
  
  self.safe_parse_json =
    function(str){
      self.safe_parse_json.error = null;
      if (typeof str == 'string'){
        try{
          var reviver = str.match(/json_class/) ? self.safe_parse_json.reviver : null;
          return JSON.parse(str, reviver);
        }
        catch(e){
          self.safe_parse_json.error = e;
        }
      }
      return undefined;
    };
  
  self.safe_parse_json.reviver =
    function(k,v){
      if (isObj(v) && v.json_class) {
        if (v.json_class == "Time" && v.s){
          var ms = v.s * 1000 + v.n / 1000000;
          return new Date(ms);
        }
      }
      return v;
    };
  
  self.modal =
    function(url_or_element, data, on_close, on_open){
      var modal_window = J('<div class="modal-window"><div class="t"><div class="c"><div class="b"><div class="mc">');
      self.modal.container = modal_window.find('div').last();
      modal_window[0].onModalClose = on_close;
      modal_window[0].data = data;
      modal_window.appendTo(document.body);
      ANN.toggle(modal_window);
      var method_name = typeof url_or_element === 'string' ? 'remote_modal' : 'local_modal';
      self[method_name](modal_window, url_or_element, data, on_open);
    };
  self.remote_modal =
    function(modal_window, url, data, on_open){
      J.ajax(url, {
        error: function(){ modal_window.remove(); },
        success: function(data, textStatus, jqXHR){
          //load contents
          try{
            self.modal.container.css({position:'absolute', visibility:'hidden'});
            self.modal.container.append(data);
          }
          catch(e){
            console.error(e);
            return modal_window.remove();
          }
          //init
          self.modal.resize_container();
          J.document.on('keydown', self.modal.close_via_keydown);
          J.window.on('resize', self.modal.resize_container);
          if (on_open) on_open(modal_window);
        }
      });
    };
  self.local_modal =
    function(modal_window, element, data, on_open){
      try{
        self.modal.container.css({position:'absolute', visibility:'hidden'});
        self.modal.container.append(element);
        //init
        self.modal.resize_container();
        J.document.on('keydown', self.modal.close_via_keydown);
        J.window.on('resize', self.modal.resize_container);
        if (on_open) on_open(modal_window);
      }
      catch(e){
        console.error(e);
        modal_window.remove();
      }
    };
  
  self.modal.close =
    function(elem){
      J.document.off('keydown', self.modal.close_via_keydown);
      J.window.off('resize', self.modal.resize_container);
      
      var modalwindow = J(elem.target||elem).closest('.modal-window');
      var callback = modalwindow[0].onModalClose;
      modalwindow.remove();
      ANN.layout.set_scrollable();
      delete self.modal.container;
      if (callback) callback();
    };
  
  self.modal.close_via_keydown =
    function(e){
      if (e.which === 27){ self.modal.close(self.modal.container); }
    };
  
  self.modal.resize_container =
    function(){
      var mc = self.modal.container;
      if (!mc) return;
      
      //reset overflow-y so we can calculate widths properly
      J.body.removeClass('unscrollable');
      mc.closest('.modal-window').css('overflow-y', '');
      
      //reflow container to optimal size according to contents
      mc.css({position:'absolute', left:0 ,visibility:''});
      mc.css({width:'auto', height:'auto', maxWidth:ANN.viewport.width()-2+'px'});
      
      //fix size of container, taking into account that real width may have
      //decimals, so +1 to ensure the container is not smaller than real width
      mc.width(mc.width() + 1);
      mc.height(mc.height());
      //then revert to static position so that the contents do not overflow from
      //mc.parent during animation
      mc.css({position:'', left:'', visibility:''});
      
      //allow overflow when content has longer height than browser window
      if (ANN.viewport.outerHeight() < mc.height()){
        mc.closest('.modal-window').css('overflow-y', 'auto');
      }
      ANN.layout.set_scrollable();
      
      //animate
      mc.parent().width(mc.width());
      mc.parent().height(mc.height());
    };
  
  self.POST =
    function(url, params){
      var str = '<form action="'+(url||'')+'" method="POST" class="-hidden">';
      for (var k in params||{}){
        var v = (''+(params[k]||'')).replace(/"/g, '&quot;');
        str += '<input type="hidden" name="'+k+'" value="'+v+'">';
      }
      str += '</form>';
      J(str).appendTo(J.body).submit();
    };
  
  RegExp.escape = RegExp.escape ||
    function(str){ return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); }
  
  self.ignore_param =
    function(param){
      var rx = RegExp('(.*?)([?&])' + RegExp.escape(param) + '(&|$)(.*)');
      var loc = document.location;
      var m = loc.search.match(rx);
      if (m){
        var query = m[1] + (m[3] === '' ? m[3] : m[2]) + m[4];
        history.replaceState(null, null, loc.pathname + query + loc.hash);
      }
    };
    
  self.get_cookie =
    function(name){
      var namesuffix = name.match(/@$/) ? '[^=]*' : '';
      var rx = new RegExp('(^|;) *(' + RegExp.escape(name) + namesuffix + ')=([^;]*)');
      var m = document.cookie.match(rx);
      return m && m[3] !== "-" ? unescape(m[3]) : null;
    };
  
  self.set_cookie =
    function(name, value, max_age){
      var cookie = name+'='+escape(value)+'; Path=/';
      if (name.match(/@$/)){
        var domain, path;
        var rx = new RegExp('(^|;) *' + RegExp.escape(name) + '([^/=]+)(/[^=]*)');
        if (document.cookie.match(rx)){
          domain = RegExp.$2;
          path = RegExp.$3;
        }
        else{
          if (max_age < 0) return; //no point in deleting cookie that doesn't exist
          domain = document.location.host.replace(/^.*?\./,"");
          path = '/';
        }
        cookie = name+domain+path+'='+escape(value)+'; Path='+path+'; Domain=.'+domain;
      }
      if (max_age){
        cookie += '; Max-Age='+max_age;
      }
      if (document.location.protocol == "https:") cookie += '; Secure';
      cookie += '; SameSite=Lax';
      document.cookie = cookie;
    };
  
  self.delete_cookie =
    function(name){
      self.set_cookie(name, '-', -1);
    };
  
  self.tmp_cookie =
    function(name, value, path, ttl){
      ttl = ttl || 5;
      document.cookie = name+'='+value+'; Max-Age='+ttl+'; Path='+path+'; SameSite=Lax';
      setTimeout(function(){
        //this two-pass delete is required to delete the cookie from DevTools
        document.cookie = name+'=1; Max-Age=1; Path='+path+'; SameSite=Lax';
        document.cookie = name+'=0; Max-Age=-1; Path='+path+'; SameSite=Lax';
      }, ttl*1000);
    };
  
  self.show_login =
    function(){
      if (ANN.layout.mode.mobile)
        ANN.layout.header.toggle_user_menu.on();
      else{
        var menu = J('#mega .login.menu')
        ANN.mega_nav.pin(menu);
        ANN.viewport.scroll_until(menu);
      }
    };
  
  self.hide_url =
    function(url, ttl){
      var sha1 = '';
      while (sha1.length < 40)
        sha1 += Math.random().toString(16).replace('0.','');
      sha1 = sha1.slice(0,40);
      var ext = ['.css', '.js', '.png', '.jpg'];
      var asset = '/assets/' + sha1 + ext[Math.floor(Math.random()*ext.length)];
      
      var hash = '';
      if (url.match(/^([^#]+)(#.*)/)){
        url = RegExp.$1;
        hash = RegExp.$2;
      }
      
      while (url.match(/([\u0000-\u0020]+)/))
        url = url.replace(RegExp.$1, encodeURI(RegExp.$1));
      
      while (url.match(/([\u007f-\uffff]+)/))
        url = url.replace(RegExp.$1, encodeURI(RegExp.$1));
      
      url = url.replace(/;/g, '#');
      
      ANN.tmp_cookie('fwdurl', sha1.slice(0,8)+url, asset, ttl);
      
      ANN.debug.msg('hide_url', url+' -> '+sha1.slice(0,8));
      return asset + hash;
    };
  
  self.show_feedback =
    function($target, status, text, color){
      switch (status){
        case 0:     text = text || "No change";  color = color || "#aaa"; break;
        case null:  text = text || "Saving…";    color = color || "#666"; break;
        case true:  text = text || "Saved";      color = color || "#191"; break;
        case false: text = text || "Not saved!"; color = color || "#d22"; break;
      }
      var $notif = J('<span class="feedback" style="color: ' + color + ';"> ' + text + '</span>');
      
      $target.next(".feedback").remove();
      $target.after($notif.show());
      if (status !== null) $notif.fadeOut(2000, function(){ $notif.remove(); });
    };
  
});


(function(load){
  load(ANN.storage = {});
})(function(self){
  
  var polyfill = !window.localStorage;
  var myStorage = window.localStorage || {};
  
  self.get =
    function(key){
      var res = ANN.safe_parse_json(self.getStr(key));
      self.json_error = ANN.safe_parse_json.error;
      return res;
    };
  
  self.set =
    function(key, value){
      return self.setStr(key, JSON.stringify(value));
    }
  
  self.getStr =
    function(key){
      return myStorage[key];
    };
  
  self.setStr =
    function(key, str, no_retry){
      try{
        self.set_error = null;
        myStorage[key] = str;
        return true;
      }
      catch(e){
        self.set_error = e;
        if (e.name == "QuotaExceededError" && !no_retry){
          ANN.logev.reduce_history();
          return self.setStr(key, str, true);
        }
        return false;
      }
    };
  
  self.remove =
    function(key){
      delete myStorage[key];
    };
  
});


(function(load){
  load(ANN.debug = {});
})(function(self){
  
  var system_alert = window.alert;
  window.alert = function(msg){
    system_alert.invocations = system_alert.invocations+1 || 0;
    if (system_alert.invocations < 10)
      system_alert(msg);
    else if (!confirm(msg))
      window.alert = console.log;
  }
  
  self.init =
    function(){
      if (self.ON) {
        J('a img').each(check_img_with_clickable_margin);
      }
    };
  
  // if an img with display:block is hyperlinked, the margins are also clickable!
  // https://stackoverflow.com/questions/53565689
  function check_img_with_clickable_margin(){
    var img = J(this);
    if (img.css('display') == 'block' && !img.css('float').match(/left|right/)) {
      var a = img.closest('a'), c = a;
      while (c.css('display') == 'inline') c = c.parent();
      if (c.width() > img.outerWidth()) {
        console.warn('image has clickable margin', c.width(), img.outerWidth());
        a.css('display', 'block').css('background-color', '#FFE5B4');
        img.css('border-left', '3px solid #FFA500').css('border-right', '3px solid #FFA500');
      }
    }
  }
  
  self.inspect =
    function(o,i){
      if (typeof i=='undefined') i = '';
      if (i.length > 50) return '[MAX ITERATIONS]';
      var r = [];
      for (var p in o){
        var v=o[p], t=typeof v;
        r.push(i+'"'+p+'" => ');
        switch (t){
          case "boolean":
          case "number":
          case "string":
            r.push(JSON.stringify(v)); break;
          case "undefined":
            r.push('undefined'); break;
          case "function":
            r.push(v+''); break;
          case "object":
            var props = self.inspect(v,i+'   ');
            r.push(Array.isArray(v) ? '[' : '{');
            r.push(props.length ? '\n'+props+i : ' ');
            r.push(Array.isArray(v) ? ']' : '}');
            break;
          default:
            r.push('('+t+'?) '+v);
        }
        r.push('\n');
      }
      return r.join('');
    };
  
  self.msg =
    function(k, v){
      if (self.ON){
        //copy object so that future modifications will not change the log output
        if (Object.isObject(v)) v = J.extend(true, {}, v);
        console.log(k+':', v);
      }
    };
  
  self.alert =
    function(msg, info){
      if (self.ON){
        if (info) self.msg(msg, info);
        console.trace(msg);
        ANN.notifications.alert(msg+' (see console)');
      }
    };
  
  self.popup =
    function(msg, info){
      if (self.ON){
        if (info) self.msg(msg, info);
        console.trace(msg);
        window.alert(msg+'\n(see console)');
      }
    };
  
  self.event0 = new Date();
  self.events = {};
  self.event =
    function(str){
      var t1 = new Date() - self.event0;
      if (self.events[t1])
        self.events[t1] += '+' + str;
      else
        self.events[t1] = str;
      console.log('@' + t1 + ': ' + str);
    };
  
  //usage: eval(ANN.debug.localvars(current_function))
  //to get hash of local variables and their values in the current function
  self.localvars =
    function(fn){
      var vars = fn.toString().match(/\bvar\b[^;]*;/g).join("\n")
        .replace(/=[\s\S]*?(,\s*\w+(?=\s*[=,;])|;)/g,'$1')
        .replace(/\bvar\b|\W/g,' ').trim().replace(/\s+/g,', ');
      return '({'+vars.replace(/(\w+)/g,'$1:$1')+'})';
    }
  
});


(function(load){
  load(ANN.performance = {});
})(function(self){
  
  var times = [];
  var t_start = {};
  
  self.render_time = parseFloat(J(document.documentElement).attr('render_time')) || null;
  
  self.log = [];
  
  self.start =
    function(name){
      t_start[name] = (new Date).getTime();
    };
  
  self.end =
    function(name){
      times.push([name, t_start[name], (new Date).getTime()]);
    };
  
  J.window.on('load', function(){
    var wpt = window.performance.timing;
    var nav0 = Math.min(wpt.navigationStart, wpt.fetchStart) || 0;
    
    var ptimes = [];
    function t1(n){ ptimes.push([n, wpt[n], null]); }
    function t12(n){ ptimes.push([n, wpt[n+'Start'], wpt[n+'End']]); }
    //order in which they occur during the navigation process (theoretically)
    t12('unloadEvent');
    t12('redirect');
    t12('fetch');
    t12('domainLookup');
    t12('connect');
    t12('secureConnection');
    t12('request');
    t12('response');
    t1('domLoading');
    t1('domInteractive');
    t12('domContentLoadedEvent');
    t1('domComplete');
    t12('loadEvent');
    times = ptimes.concat(times);
    
    self.log.push(self.render_time ? 'render=~'+Math.round(self.render_time) : '');
    
    for (var i=0; i<times.length; i++){
      var name = times[i][0], t1 = times[i][1], t2 = times[i][2];
      if (typeof t1 != "number" || !t1)
        self.log.push('');
      else if (!t2 || t2 === t1 || t2 === t1+1)
        self.log.push(name+'='+(t1-nav0));
      else
        self.log.push(name+'='+(t1-nav0)+'-'+(t2-nav0));
    }
    self.log.push('nav0='+nav0);
    
    ANN.logev.server_log("performance", self.log.join("&"));
  });
  
});


(function(load){
  load(ANN.viewport = {});
})(function(self){
  
  /*
  document.body.offsetWidth == document.documentElement.offsetWidth - body margins
  document.body.clientWidth == document.documentElement.clientWidth - body margins - body borders
  box model: https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively/21064102#21064102
             but doesn't apply to documentElement
  
  viewport is size of window minus scrollbars; i.e. the visible area
  viewport size is complicated....
  
  DESKTOP:
    J.body has width = viewportW but height = contentH
    J.document has width >= contentW and height >= contentH
    documentElement offsetWidth = viewportW but offsetHeight = contentH
    
    window.outerWidth includes docked devtools
    window.innerWidth = V-scrollbar + documentElement.clientWidth
                                      documentElement.offsetWidth
                                      J(window).width()
                                      J(document.body).width()
    if Hscroll: documentElement.client/offsetWidth < documentElement.scrollWidth
    else:       documentElement.client/offsetWidth == documentElement.scrollWidth
    
    window.outerHeight includes tabs, urlbar, etc.
    window.innerHeight = H-scrollbar + documentElement.clientHeight
                                       J(window).height()
    if Vscroll: documentElement.clientHeight < documentElement.offsetHeight
    else:       documentElement.clientHeight >= documentElement.scrollWidth
    documentElement.scrollHeight = max(offsetHeight, scrollHeight)
    
    [600x600 div]            NOscroll Hscroll  Vscroll  HVscroll
    window.inner             700×700  500×700  700×500  500×500 <= viewport+scrollbars
    .documentElement.scroll  700×700  600×685  685×600  600×600
    .documentElement.offset  700×600  500×600  685×600  485×600
    .documentElement.client  700×700  500×685  685×500  485×485 <= viewport
    J(window).               700×700  500×685  685×500  485×485 <= viewport
    J(document).             700×700  600×685  685×600  600×600
    J(document.body).        700×600  500×600  685×600  485×600
    
    [600x600 window]         NOscroll Hscroll  Vscroll  HVscroll
    div                      500×500  700×500  500×700  700×700
    window.inner             600×600  600×600  600×600  600×600 <= viewport+scrollbars
    .documentElement.scroll  600×600  700×585  585×700  700×700
    .documentElement.offset  600×500  600×500  585×700  585×700
    .documentElement.client  600×600  600×585  585×600  585×585 <= viewport
    J(window).               600×600  600×585  585×600  585×585 <= viewport
    J(document).             600×600  700×585  585×700  700×700
    J(document.body).        600×500  600×500  585×700  585×700
  
  MOBILE:
    if content is wider than device width, viewportW is automatically enlarged
    and viewportH is enlarged by same factor as viewportW
    
    [mobile window]          NOscroll Hscale   HVscroll   Vscroll  VscrollB
    div                      300×400  500×400  2000x600   300×900  300×900
    window.outer             360×512  360×512  360x512    360×512  360×568 <= physical viewport
    window.inner             360×512  500×711  1440x2048  360×512  360×568 <= layout viewport
    .documentElement.scroll  360×512  500×711  2000x2048  360×900  360×900
    .documentElement.offset  360×400  360×400  360x600    360×900  360×900
    .documentElement.client  360×512  360×512  360x512    360×512  360×512 <= physical viewport, wrong if urlbar hidden
    J(window).               360×512  360×512  360x512    360×512  360×512 <= (same)
    J(document).             360×512  500×711  2000x2048  360×900  360×900
    J(document.body).        360×400  360×400  1440x2048  360×900  360×900
    
    Hscale: viewport was scaled but there's no horizontal scrolling
    HVscroll: viewport was scaled AND there's still horizontal scrolling
    Vscroll: vertical scrolling
    VscrollB: vertical scrolling; url bar hidden
  
  CONCLUSION:
    window.innerWidth/Height is perfect on mobile but doesn't work on desktop
     because it includes scrollbars
    documentElement.clientWidth/Height is perfect on desktop but doesn't work
     on mobile because it's the size of physical rather than logical viewport.
     So a div with that width might not actually fill the viewport. In addtion,
     clientHeight is incorrect (on Chrome/Android) when urlbar is hidden.
  */
  
  var div, cached;
  
  self.size =
    function(){
      var windowW = window.innerWidth,
          windowH = window.innerHeight,
          clientW = document.documentElement.clientWidth,
          clientH = document.documentElement.clientHeight,
          key = windowW+'/'+windowH+'/'+clientW+'/'+clientH;
      
      if (cached && cached.key === key) return cached;
      cached = compute_size(windowW, windowH, clientW, clientH);
      ANN.debug.event('viewport width='+cached.width);
      cached.key = key;
      return cached;
    };
  
  function compute_size(windowW, windowH, clientW, clientH){
    if (windowW == clientW && windowH == clientH) {
      //either desktop with no scrollbars, or mobile with no scaling
      return {width: windowW, height: windowH};
    }
    
    if (!div) J.body.append(div = J('<div style="position:fixed; left:0; top:0; right:0; bottom:0; visibility:hidden; -webkit-backface-visibility:hidden;">'));
    
    var a = desktop_scrollbar_A(windowW, windowH, clientW, clientH),
        b = desktop_scrollbar_B(windowW, windowH, clientW, clientH),
        c = desktop_scrollbar_C(windowW, windowH, clientW, clientH),
        w = div.width(),
        h = div.height();
    
    var desktop = {
      width: h ? w : clientW, height: h ? h : clientH,
      Vscroll: windowW-clientW, Hscroll: windowH-clientH,
    };
    var mobile = {
      //because initial-scale=1, we can use the physical width/height
      width: h ? w : window.outerWidth, height: h ? h : window.outerHeight,
      layoutWidth: windowW, layoutHeight: windowH,
    };
    
    if (a && b && c && Math.abs(w-clientW)<=1 && Math.abs(h-clientH)<=1)
      return desktop; //all methods agree we are on desktop
    
    if (!a && !b && !c && Math.abs(w-windowW)<=1 && Math.abs(h-windowH)<=1)
      return mobile; //all methods agree we are on mobile
    
    //the methods don't agree; log that, and fallback
    console.log('ANN.viewport.size methods do not agree:', [a,b,c,w,h]);
    ANN.debug.msg('ANN.viewport.size methods do not agree', [a,b,c,w,windowW , h,windowH]);
    //J.ajax('/logger.performance');
    return a ? desktop : mobile;
  }
  
  function vertical_scrolling(viewportH){
    var scrollH = document.documentElement.scrollHeight;
    if (scrollH > viewportH) return true;
    if (scrollH == viewportH && J.body.css('overflowY') == 'scroll') return true;
    return false;
  }
  
  function horizontal_scrolling(viewportW){
    var scrollW = document.documentElement.scrollWidth;
    if (scrollW > viewportW) return true;
    if (scrollW == viewportW && J.body.css('overflowX') == 'scroll') return true;
    return false;
  }
  
  //on desktop the difference between windowW/H and clientW/H is the size of
  //the scrollbars; if the values for scrollW/H are consistent we can confirm
  //the difference is indeed due to scrollbars and not scaling on mobile.
  function desktop_scrollbar_A(windowW, windowH, clientW, clientH){
    var scrollW = document.documentElement.scrollWidth,
        scrollH = document.documentElement.scrollHeight,
        dW = windowW - clientW,
        dH = windowH - clientH;
    
    if (dW > 0 && dH == 0) { //possibly vertical scrolling
      if (scrollW == clientW && vertical_scrolling(clientH)) {
        //yes, desktop with vertical scrollbar only
        return true;
      }
      //else ????????????
    }
    if (dW == 0 && dH > 0) { //possibly horizontal scrolling
      if (scrollH == clientH && horizontal_scrolling(clientW)) {
        //yes, desktop with horizontal scrollbar only
        return true;
      }
      //else: mobile with no scaling and urlbar hidden
    }
    if (dW > 0 && dH > 0) { //possibly horizontal+vertical scrolling
      if (dW == dH && horizontal_scrolling(clientW) && vertical_scrolling(clientH)) {
        //yes, desktop with horizontal+vertical scrollbars
        return true;
      }
      //else: mobile with viewport scaling
    }
    //mobile
    return false;
  };
  
  //if documentElement is only slightly smaller than window we assume it's
  //because of scrollbars and therefore desktop, otherwise mobile
  function desktop_scrollbar_B(windowW, windowH, clientW, clientH){
    var x = windowW - clientW;
    var y = windowH - clientH;
    return (x >= 0 && x < 20 && y >= 0 && y < 20);
  }
  
  //on desktop, window.outer includes the urlbar and browser chrome so it's
  //always bigger than window.inner.
  //on mobile, window.outer is the physical viewport and always <= window.inner
  //which is the layout viewport (on Chrome
  function desktop_scrollbar_C(windowW, windowH, clientW, clientH){
    //outerWidth/Height might be funky?
    //https://www.quirksmode.org/blog/archives/2012/03/windowouterwidt.html
    return (window.outerWidth > windowW || window.outerHeight > windowH);
  }
  
  self.width =
    function(){
      return document.documentElement.clientWidth;
      //return self.size().width;NOCOMMIT
    };
  
  self.height =
    function(){
      return document.documentElement.clientHeight;
      //return self.size().height;NOCOMMIT
    };
  
  self.outerWidth = //including scrollbar
    function(){
      return window.innerWidth;
    };
  
  self.outerHeight = //including scrollbar
    function(){
      return window.innerHeight;
    };
  
  self.scroll_until =
    function(elem, duration){
      var rect = elem[0].getBoundingClientRect();
      var visible = rect.top||rect.left||rect.bottom||rect.right;
      if (!visible) return null;
      if (rect.top < 0)
        self.scroll_to(elem, duration);
      else if (rect.bottom > self.height()){
        self.scroll_to(elem, duration, rect.height - self.height() + 4);
      }
    };
  
  self.scroll_to =
    function(elem, duration, offset){
      if (offset === undefined) offset = -2;
      J('html, body').animate({scrollTop: elem.offset().top + offset}, duration||500);
    };
  
  self.resize =
    function(w,h){
      if (w <= 768) w += self.scrollbar_width();
      if (self.resize.overhead) w += self.resize.overhead;
      window.resizeTo(w, h);
      self.resize.overhead = w - self.width() - self.scrollbar_width();
    };
  
  //where is the element vertically relative to the viewport
  //  0 if in the viewport
  // -N if N pixels above
  //  N if N pixels below
  // null if element is not visible
  self.offset =
    function(el){
      var rect = el.getBoundingClientRect();
      var visible = rect.top||rect.left||rect.bottom||rect.right;
      if (!visible) return null;
      var above = rect.bottom - 1;
      if (above < 0) return above;
      var below = rect.top - self.outerHeight() + 1;
      if (below > 0) return below;
      return 0;
    };
  
});


(function(load){
  load(ANN.date = {});
})(function(self){
  
  self.time_elem =
    function(d, elem){
      var d_str = self.strftime('%Y-%b-%d %T %Z', d).replace(":00 "," ");
      if (elem.is('[ago]'))
        elem.html(self.time_ago(d));
      else if (elem.is('[rel]'))
        elem.html(self.time_diff(d));
      else
        d_str += ' (' + self.time_diff(d) + ')';
      elem.attr('title', d_str);
    };
  
  function diffstr(n, unit, limit){
    if (n >= limit)
      n = Math.round(n);
    else if (n != Math.floor(n)){
      n = Math.round(n * 10) / 10;
      if (n % 1 == 0) n += '.0';
    }
    if (n >= 2) unit += 's';
    return n+' '+unit;
  };
  
  self.time_diff =
    function(d, ref){
      if (!ref) ref = new Date();
      var diff = Math.abs(d - ref),
          suffix = d < ref ? ' ago' : ' from now';
      if (diff == 0) return 'now';
      diff /= 1000;  if (diff < 30.0) return 'seconds'+suffix;
      diff /= 60;    if (diff < 59.5) return Math.round(diff)+' min.'+suffix;      // 1 to 59 min. ago
      diff /= 60;    if (diff < 24.5) return diffstr(diff, 'hour', 9.95)+suffix;   // 1.0 to 9.9 to 24 hours ago
      diff /= 24;    if (diff < 31.5) return diffstr(diff, 'day', 9.95)+suffix;    // 1.0 to 9.9 to 31 days ago
      diff /= 365/12;if (diff < 12.5) return diffstr(diff, 'month', 3.95)+suffix;  // 1.0 to 3.9 to 12 months ago
      diff /= 12;                     return diffstr(diff, 'year', 9.95)+suffix;   // 1.0 to 9.9 to 9999 years ago
    };
  
  self.time_ago =
    function(d){
      var now = new Date();
      if (d > now) return 'seconds ago';
      return self.time_diff(d, now);
    };
  
  self.month_names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  self.strftime =
    function(str, dt){
      if (str == 'MDTZ') str = '(%b %e, %T <abbr title="UTC%z">%Z</abbr>)';
      function n2(n){ return (n<10 ? "0" : "") + n; }
      var dtstr = dt.toString(),
          weekday = dtstr.match(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/) ? RegExp.$1 : '',
          month_name = self.month_names[dt.getMonth()],
          zone_num = dtstr.match(/GMT([+-]\d{4})/) ? RegExp.$1 : null,
          zone_name = dtstr.match(/\b(?!GMT)([A-Z]{3,})\b/) ? RegExp.$1 : null,
          y=n2(dt.getFullYear()), m=n2(dt.getMonth()+1), d=n2(dt.getDate()),
          H=n2(dt.getHours()), M=n2(dt.getMinutes()), S=n2(dt.getSeconds());
      return (
        str
        .replace(/%%/g, '&#x25;')
        .replace(/%Y/g, y) //Year with century
        .replace(/%m/g, m)
        .replace(/%d/g, d)
        .replace(/%e/g, dt.getDate())
        .replace(/%H/g, H)
        .replace(/%M/g, M)
        .replace(/%S/g, S)
        .replace(/%a/g, weekday)
        .replace(/%b/g, month_name)
        .replace(/%z/g, zone_num||zone_name||'')
        .replace(/%Z/g, zone_name||zone_num||'')
        .replace(/%F/g, y+'-'+m+'-'+d)//ISO 8601 date
        .replace(/%T/g, H+':'+M+':'+S)//24-hour time
      );
    };
  
  self.strftime.diff_MDTZ =
    function(date,now){
      return ' ' + self.time_diff(date,now) + ' ' + self.strftime('MDTZ',date);
    };
  
  self.validate_nb_days =
    function(){
      var str = this.value+' ', d = 0;
      str = str.replace(/(\d+\.\d*|\.\d+|\d+)s|$/,""); d += parseFloat(RegExp.$1) || 0;
      str = str.replace(/(\d+\.\d*|\.\d+|\d+)m|$/,""); d += parseFloat(RegExp.$1)*60 || 0;
      str = str.replace(/(\d+\.\d*|\.\d+|\d+)h|$/,""); d += parseFloat(RegExp.$1)*3600 || 0;
      str = str.replace(/^\s*(\d+\.\d*|\.\d+|\d+)d?|$/,""); d += parseFloat(RegExp.$1)*86400 || 0;
      if (this.title0 === undefined) this.title0 = this.title || '';
      if (str.match(/\w/)){
        this.invalid_number = true;
        this.nb_seconds = null;
        J(this).addClass('alert').attr('title', 'must be a number (with optional d/h/m/s suffix)');
      }
      else{
        this.invalid_number = false;
        this.nb_seconds = Math.round(d);
        if (this.value){
          this.value = Math.round(d) / 86400;
          if (this.value.indexOf(".") < 0) this.value += ".0";
        }
        var s=this.nb_seconds, m=s/60, h=m/60, msg='';
        if (s > 0){
          if (s < 60)
            msg = diffstr(s, 'second', 99);
          else if (m < 60)
            msg = diffstr(m, 'minute', 99);
          else if (h < 24)
            msg = diffstr(h, 'hour', 99);
        }
        msg = (msg+'\n' +this.title0).trim();
        J(this).removeClass('alert').attr('title', msg);
      }
    };
  
});


(function(load){
  load(ANN.custom_attr = {});
})(function(self){
  
  self.init =
    function(){
      J('time').each(function(){
        var elem = J(this);
        var d = elem.attr('datetime');
        if (/[T:]/.test(d)){
          if (d = Date.parse(d)){
            ANN.date.time_elem(new Date(d), elem);
          }
        }
      });
      J('.button.dropdown').not('.readonly').on('click', function(){
        J(this).toggleClass('active');
      });
      J('a[untracked-href]')
        .each(function(){
          var tracked = this.href;
          if (tracked.match(/((click\.php\/\d+\/\d+\/\d+\/\d+\/)(\d+))/)) {
            tracked = tracked.replace(RegExp.$1, RegExp.$2 + (8 | parseInt(RegExp.$3)));
          }
          this.tracked_href = tracked;
          this.href = this.untracked_href = J(this).attr('untracked-href');
        })
        .on('mousedown', function(){ this.href = this.tracked_href; })
        .on('click', function(){ this.href = this.tracked_href; })
        .on('mouseout', function(){ this.href = this.untracked_href; });
      J('textarea, input[type="text"]')
        .on('keydown', self.macron_keydown)
        .on('keypress', self.macron_keypress);
      J('img.animated-gif')
        .each(self.setup_animated_gif_toggle);
      J('wrf')
        .each(self.setup_word_replacement_filter);
      J('.age_gate')
        .each(self.setup_age_gate);
      J('a[href^="http"]')
        .each(self.setup_external_link);
      self.setup_copyright_overflow(J('figcaption.credit.copyright .text'));
    };
  
  self.macron_keydown =
    function(event){
      if (event.altKey &&
           (event.which == 189 || //hyphen in Chrome
            event.which == 173 || //hyphen in Firefox
            event.which == 109)   //minus on numeric keypad
           ){
        this.macronize = true;
        event.preventDefault();
      }
    };
  
  self.macron_keypress =
    function(event){
      if (event.which == 175 && !this.macronize){
        this.macronize = true;
        event.preventDefault();
      }
      else if (this.macronize){
        var macronChar;
        switch (event.which){
          case 65:  macronChar = 'Ā'; break;
          case 69:  macronChar = 'Ē'; break;
          case 73:  macronChar = 'Ī'; break;
          case 79:  macronChar = 'Ō'; break;
          case 85:  macronChar = 'Ū'; break;
          case 97:  macronChar = 'ā'; break;
          case 101: macronChar = 'ē'; break;
          case 105: macronChar = 'ī'; break;
          case 111: macronChar = 'ō'; break;
          case 117: macronChar = 'ū'; break;
        }
        if (macronChar){
          document.execCommand('insertText', false, macronChar);
          event.preventDefault();
        }
        this.macronize = false;
      }
    };
  
  self.setup_animated_gif_toggle =
    function(){
      var img = J(this);
      if (img.parent('a').length) return; //cannot toggle if img is a link
      var span = img.wrap('<span class="animated-gif"></span>').parent();
      span.addClass(img.hasClass('stop') ? 'stop' : 'play');
      span.prepend('<div class="play"></div><div class="stop"></div>');
      img.add(span.find('div')).on('click', function(){
        if (span.hasClass('stop')){
          span.removeClass('stop').addClass('play');
          img.attr('src', img.attr('gif_play'));
        }
        else{
          span.removeClass('play').addClass('stop');
          img.attr('src', img.attr('gif_stop'));
        }
      });
    };
  
  self.setup_word_replacement_filter =
    function(){
      var span = J(this);
      //make it a little apparent like
      //span.color('#666'); //minor color change ?
      //span.append('﹡'); //or a small asterisk
      //span.append('ꜝ'); //or something similar to an asterisk that is less apparrent and people aren't likely to use
      span.attr('title', 'click to show why this term was replaced');
      span.on('click', function(){ window.open('/faq', '_blank'); });
    };
  
  self.setup_age_gate =
    function(){
      var content = J(this);
      if (ANN.user_preferences.get('i_am_18')) {
        return content.removeClass('age_gate');
      }
      var age_gate =
        J('<div class="obscure-background">'
        +   '<div class="message">'
        +  (ANN.lang == 'fr'
            ? "Vous êtes sur le point d'accéder à une page avec du contenu réservé aux adultes.<br>"
            + "Merci de confirmer que vous avez 18 ans ou plus.<br><br>"
            + "<button>J'ai plus de 18 ans</button> &nbsp; <button>Je suis mineur</button>"
            : "The page you are about to visit contains references to mature content.<br>"
            + "Please confirm that you are 18 years or over.<br><br>"
            + '<button>I am 18 or over</button> &nbsp; <button>I am not</button>')
        +   '</div>'
        + '</div>');
      content.prepend(age_gate);
      age_gate.find('button').first().on('click', function(){
        ANN.user_preferences.set('i_am_18', true);
        age_gate.fadeOut(400, function(){
          content.removeClass('age_gate');
          age_gate.remove();
        });
      });
      age_gate.find('button').last().on('click', function(){
        age_gate.find('.message').html(
          ANN.lang == 'fr'
          ? 'Ok, reviens quand tu seras plus vieux 😉'
          + '<br><a href="javascript:history.back()">retour</a>'
          + ' • <a href="/">accueil</a>'
          : "Ok, come back when you're older 😉"
          + '<br><a href="javascript:history.back()">go back</a>'
          + ' • <a href="/">home</a>');
      });
    };
  
  var RX_ANN_DOMAIN = new RegExp('^https?://[^/]*\\b' + RegExp.escape(location.host.replace(/[^.]+/,'')) + '/.*');
  
  self.setup_external_link =
    function(){
      if (!this.href.match(RX_ANN_DOMAIN)) {
        if (!this.target) this.target = '_blank';
      }
    };
  
  self.setup_copyright_overflow =
    function(list){
      if (list.length) {
        function check_copyright_overflow(){
          var t = this, p = t.parentNode;
          if (!t.wordbreaks && p.scrollHeight > p.clientHeight+2) {
            t.wordbreaks = true; //breaking more often may avoid overflow
            t.textContent = t.textContent.match(/[A-Za-zÀ-ž]+|\d+|./gs).join('\u200b');
          }
          p.dataset.overflow = p.scrollHeight > p.clientHeight+2;
        }
        function check_copyrights_for_overflow(){
          list.each(check_copyright_overflow);
        }
        requestAnimationFrame(check_copyrights_for_overflow);
        J.window.on('resize', function(){
          requestAnimationFrame(check_copyrights_for_overflow);
        });
      }
    };
  
});


(function(load){
  load(ANN.sidebar = {});
})(function(self){
  
  self.force_minimize = null;
  
  var j = self.j = {};
  
  self.init =
    function(){
      if (self.disable) J('#sidebar').remove();
      j.sidebar = J('#sidebar');
      j.sidebar_div = J('#sidebar>div');
      j.main_div = J('#main>div');
      if (j.sidebar.length == 0) return;
      self.current_mode = 'static';
      self.user_minimized = ANN.user_preferences.get('sidebar_minimize');
      self.text_view = !ANN.user_preferences.get('sidebar_images');
      if (self.text_view)
        J('#sidebar').removeClass('thumb-view').addClass('text-view');
      self.box_width = J('#sidebar .box').outerWidth();
      ANN.debug.msg('sidebar.box_width', self.box_width);
      J('#sidebar>div').imagesLoaded(function(){
        ANN.debug.event('sidebar.imagesLoaded');
        self.container = this;
        self.scroll();
        J.window.on('scroll', self.scroll);
      });
    };
  
  self.check_columns =
    function(toggle){
      var w = J('#sidebar').width();
      if (w != self.width){
        self.width = w;
        self.reflow();
      }
    };
  
  self.reflow =
    function(){
      if (self.container){
        self.scroll();
      }
    };
  
  self.find_mode =
    function(){
      var maindiv_height = j.main_div.outerHeight();
      var sidediv_height = j.sidebar_div.outerHeight();
      var sidebar_height = j.sidebar.height();
      
      var sidebar_top = j.sidebar.offset().top;
      var sidebar_bottom = sidebar_top + sidebar_height;
      
      var sidediv_top = j.sidebar_div.offset().top;
      var sidediv_bottom = sidediv_top + sidediv_height;
      
      var prev_viewport_top = j.viewport_top||0;
      var viewport_top = j.viewport_top = J.window.scrollTop();
      var viewport_bottom = viewport_top + ANN.viewport.height();
      var scrolldown = viewport_top - prev_viewport_top;
      
      //sidediv does not need special handling because...
      if (ANN.layout.mode.sidebar == 0) return 'static'; //sidebar is minimized, under main area
      if (sidediv_height >= maindiv_height) return 'static'; //larger than main
      if (sidediv_height >= sidebar_height) return 'static'; //fills sidebar
      if (sidebar_top > viewport_top) return 'static'; //top of sidebar is visible
      
      //sidediv fits entirely in viewport
      if (sidediv_height < Math.min(viewport_bottom,sidebar_bottom) - viewport_top) return 'sticky-top';
      
      //bottom of sidebar is above fold
      if (sidebar_bottom < viewport_bottom && ANN.infinite_scroll.status !== 'running') return 'scrolled-to-bottom';
      
      //scrolling down...
      if (scrolldown > 0){
        if (sidediv_bottom < viewport_bottom)
          return 'sticky-bottom';
        if (self.current_mode == 'sticky-top')
          return 'hanging '+j.sidebar_div.css('top', sidediv_top - sidebar_top - scrolldown);
      }
      //scrolling up...
      else{
        if (self.current_mode == 'hanging' && sidediv_top > viewport_top)
          return 'sticky-top';
        if (self.current_mode == 'sticky-top')
          return 'sticky-top';
        if (self.current_mode == 'sticky-bottom')
          return 'hanging '+j.sidebar_div.css('top', sidediv_top - sidebar_top - scrolldown);
        if (self.current_mode == 'scrolled-to-bottom')
          return 'hanging '+j.sidebar_div.css('top', sidediv_top - sidebar_top);
      }
      return self.current_mode;
    };
  
  self.scroll =
    function(){
      var mode = self.find_mode(),
          sidebar = self.j.sidebar;
      
      if (mode != self.current_mode){
        if (mode.match(/hanging/))
          mode = 'hanging';
        else
          self.j.sidebar_div.css('top', '');
        
        self.current_mode = mode;
        sidebar
        .toggleClass('hanging', mode=='hanging')
        .toggleClass('sticky-top', mode=='sticky-top')
        .toggleClass('sticky-bottom', mode=='sticky-bottom')
        .toggleClass('scrolled-to-bottom', mode=='scrolled-to-bottom');
      }
    };
  
  self.at_bottom =
    function(){
      return j.sidebar.is(':visible') && ANN.layout.mode.sidebar == 0;
    };
  
  self.minimize =
    function(on, do_not_set){
      if (!do_not_set){ ANN.user_preferences.set('sidebar_minimize', !!on); }
      self.user_minimized = on;
      ANN.layout.reflow();
    };
  
  self.mode_if_minimized =
    function(mode){
      var icons = J('#sidebar .options-menu .icon').filter('.minimize-on, .minimize-off');
      if (self.force_minimize === null){
        //obey user_minimized preference
        icons.removeClass('-hidden');
        icons.css('color', mode==0 ? '#888' : '');
        if (self.user_minimized) mode = 0;
      }
      else{
        //this particular layout has minimize forced to on/off
        icons.addClass('-hidden');
        if (self.force_minimize) mode = 0;
      }
      return mode;
    };
  
  self.images =
    function(on, do_not_set){
      if (!do_not_set){ ANN.user_preferences.set('sidebar_images', !!on); }
      self.text_view = !on;
      if (on)
        J('#sidebar').addClass('thumb-view').removeClass('text-view');
      else
        J('#sidebar').removeClass('thumb-view').addClass('text-view');
      ANN.lazyload.renew();
    };
  
});


(function(load){
  load(ANN.notifications = {});
})(function(self){
  
  self.CLOSE_BUTTON = '<del onclick="J(this.parentNode).hide()">×</del>';
  
  self.init =
    function(){
      J('#notifications .box:not(.reminder)').prepend(self.CLOSE_BUTTON);
      self.init_reminders();
    };
  
  self.js_error =
    function(err){
      console.error(err);
      ANN.logev.log_error(err);
      self.alert('An unexpected javascript error occured. '+
        'Please report it via <a class="-clickable" data-report-button=1 >Report a Problem</a>');
    };
  
  function display_message(type, msg){
    msg = J('<div class="'+type+' box">'+self.CLOSE_BUTTON+msg+'</div>');
    J('#notifications').append(msg);
    if (ANN.viewport.offset(msg[0]) < 0) ANN.viewport.scroll_to(msg);
  }
  
  self.alert = J.proxy(display_message, self, 'alert');
  self.warning = J.proxy(display_message, self, 'warning');
  self.notice = J.proxy(display_message, self, 'notice');
  self.info = J.proxy(display_message, self, 'info');
  
  self.init_reminders =
    function(){
      if (!self.will_attach_reminder_behaviours) return;
      
      //remove notifications marked as "don't remind yet"
      self.reminders_storage.pending().map(function(record){
        J( '#reminder-' + record.herald_id).remove();
      });
      
      //continue if any reminder notifications are present
      var reminders = J('#notifications .reminder').removeClass('-hidden');
      if (reminders.length == 0) return;
      
      //on desktop, hover on [x] displays the choices on top
      //on mobile, click on [x] displays the choices; click anywhere to close
      J.window.on('click', function(){
        J('.reminder-close-options').removeClass('active');
      });
      reminders.find('del').on('click', function(e){
        e.stopPropagation();
        J(this).next('.reminder-close-options').addClass('active');
      });
      //setup the close menu for each reminder
      reminders.each(function(){
        var reminder = J(this);
        var id = parseInt(reminder.prop('id').match(/\d+/)[0]);
        reminder.find('.reminder-close-options li').each(function(){
          var list_item = J(this);
          list_item.on('click', function(){
            self.set_reminder(id, list_item.data('value'));
            reminder.hide();
          });
        });
      });
    };
  
  self.set_reminder =
    function(id, days){
      var remind_at = new Date();
      remind_at.setDate(remind_at.getDate() + days);
      self.reminders_storage.create({ herald_id: id, remind_at: remind_at });
    };
  
  self.will_attach_reminder_behaviours =  
    !document.location.host.match(/^admin/);
  
  self.reminders_storage = {
    all: function(){
      var records = ANN.storage.get('herald_notifications') || [];
      return records.map(function(record){
        record.remind_at = new Date(record.remind_at);
        return record;
      });
    },
    pending: function(){
      var now = this.now;
      var all = this.all();
      var records = all.filter(function(record){ return record.remind_at >= now; });
      if (records.length != all.length) ANN.storage.set('herald_notifications', records);
      return records;
    },
    create: function(record){
      var records = this.all();
      records.push(record);
      ANN.storage.set('herald_notifications', records);
      return record;
    },
    now: new Date()
  };
  
  self.generic_error_handler =
    function(jqXHR, textStatus, errorThrown){
      var json = jqXHR.responseJSON, text = jqXHR.responseText;
      ANN.debug.msg('ajax.fail', jqXHR);
      if (Object.isObject(json)) {
        var err = json.errors;
        if (Array.isArray(err)) err = err.join('\n');
        if (Object.isObject(err)) err = err.to_s;
        if (typeof err === 'string' && err.match(/\S/))
          return ANN.notifications.alert(err);
      }
      else {
        if (text.match(/\S/) && !text.match(/</))
          return ANN.notifications.alert(text);
      }
      ANN.notifications.alert('An error prevented this action from being completed.');
    };

});


(function(load){
  load(ANN.mega_nav = {});
})(function(self){
  
  self.init =
    function(){
      var nav = self.container = J('nav#mega');
      self.spans = nav.find('>div>span');
      var video = nav.find('.video.menu');
      if (video.find('ul.colspan2of3 li').length == 1){
        video.find('ul.colspan2of3').hide().next().addClass('colspan1of1');
      }
      
      self.spans.click(
        function(){
          var div = J(this).parent();
          if (div.hasClass('on')){
            self.pin(null);
          }
          else{
            self.pin(div);
          }
        }
      );
    };
  
  self.pin =
    function(div){
      var on = self.container.find('.menu.on');
      on.removeClass('on');
      on.children('div').css('height', '').css('visibility', '')
        .removeClass('overflow-ok').find('.qn-menu').removeClass('on').addClass('off');
      if (div && div.length) div.addClass('on');
      self.adjust_height();
    };
  
  self.adjust_height =
    function(div){
      var on = self.container.find('.menu.on');
      var h = 0;
      if (on.length){
        h = on.find('nav').outerHeight();
        on.children('div').css('height', h).css('visibility', 'visible');
      }
      self.container.parent().css('margin-bottom', h);
    };
  
  self.set_font_size =
    function(){
      var $mega = J('nav#mega');
      if ($mega.length === 0) return;
      
      var nav_width = $mega.width();
      var f = 16, n;
      if (ANN.layout.mode.mobile == 0 && self.size_at(f) >= nav_width){
        f = 13;
        while ((n=f+1.0) <= 16 && self.size_at(n) < nav_width) f = n;
        while ((n=f+0.3) <= 16 && self.size_at(n) < nav_width) f = n;
        while ((n=f+0.1) <= 16 && self.size_at(n) < nav_width) f = n;
      }
      self.container.css('font-size', f+'px');
      var p = self.spans.parent();
      var offset = Math.round((p.last().position().top - p.position().top) / p.outerHeight()) + 1;
      self.container.toggleClass('offset2', offset==2)
                    .toggleClass('offset3', offset==3)
                    .toggleClass('offset4', offset==4);
      self.adjust_height();
    };
  
  self.size_cache = [];
  self.size_at =
    function(i){
      var n = self;
      if (!n.size_cache[i]){
        n.container.css('font-size', i+'px');
        // If we try to sum the width of the spans, we accumulate a precision/rounding
        // error such that the calculated width is not equal to the actual width.
        // So instead we use leftPos+width of the last left-floated menu.
        var menu0 = n.spans.first().parent(),
            menu8 = n.spans.slice(-2,-1).parent(),
            menu9 = n.spans.last().parent();
        if (menu8.position().top != menu0.position().top) return 99999;
        n.size_cache[i] = menu8.position().left + menu8.outerWidth() + menu9.outerWidth() + 1;
      }
      return n.size_cache[i];
    };
  
});


(function(load){
  load(ANN.layout = {});
})(function(self){
  
  (function(){
    // set the modes on the html element instead of body
    // that way we can use html.mobile-mode-0 in worker scss
    // (because body.mobile-mode-0 is converted to .worker-css.mobile-mode-1)
    var e = document.documentElement;
    var $html = J(e);
    var c = e.className = e.className.replace("js-off", "js-on");
    function get(rx, as_str){
      if (!c.match(rx)) return console.error('no match for '+rx), null;
      return as_str ? RegExp.$1 : parseInt(RegExp.$1);
    }
    self.mode = {
      device:  get(/(\w+)-device/, true),
      touch:   get(/touch-mode-(\d+)/),
      skin:    get(/skin-mode-(\d+)/),
      mobile:  get(/mobile-mode-(\d+)/),
      gutter:  get(/gutter-mode-(\d+)/),
      sidebar: get(/sidebar-mode-(\d+)/),
      menu:    get(/menu-mode-(\d+)/),
      grid:    get(/grid-mode-(\d+)/),
    };
    
    self.mode.set =
      function(type, newvalue){
        var modename = type+'-mode-', oldvalue = this[type];
        if (newvalue != oldvalue){
          $html.removeClass(modename+oldvalue).addClass(modename+newvalue);
          this[type] = newvalue;
          if (type == 'grid') $html.toggleClass('grid-mode-not-1', newvalue!=1);
          return true;
        }
      };
    
    var is_touch = (
      ('ontouchstart' in window) ||
      (window.DocumentTouch && document instanceof DocumentTouch) ||
      (window.matchMedia && window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches)
    );
    self.mode.set('touch', is_touch ? 1 : 0);
    
  })();
  
  self.header_minimum = ANN.Const.DESKTOP_LAYOUT_MIN_WIDTH;
  
  self.body_start =
    function(){
      if (document.body){
        self.body_start = function(){};
        J.body = J(document.body);
        
        //At this point no content has loaded yet so we know there is no
        //scrolling due to overflow. But the body element is styled with
        //overflow-Y:scroll so we can compute the scrollbar width.
        var viewport_width = document.documentElement.clientWidth;
        ANN.viewport.scrollbar_width = window.innerWidth - viewport_width;
        
        /*
        var msg = ANN.viewport.width()+" / "+ANN.viewport.outerWidth();
        console.log(msg);
        J(function(){ ANN.notifications.info(msg); });
        if we know the scrollbar width at this point.....
        it's possible to set a class on the body like 'scrollbar-15'
        so then we can use media-queries that take the scrollbar size into account
        */
        
        var mob = viewport_width < self.header_minimum;
        self.mode.set('mobile',  mob ? 1 : 0);
        self.mode.set('gutter',  mob ? 0 : 2);
        self.mode.set('sidebar', mob ? 0 : 1);
        self.mode.set('menu',    mob ? 2 : 0);
        self.mode.set('grid',    mob ? 1 : 3);
      }
    };
  
  self.init =
    function(){
      var r = self;
      ANN.debug.event('init');
      r.top_gutter = J('.top.gutter');
      r.left_gutter = J('.left.gutter');
      r.canvas = J('#canvas');
      r.main = J('#main');
      r.sidebar = J('#sidebar');
      r.right_gutter = J('.right.gutter');
      r.bottom_gutter = J('.bottom.gutter');
      
      r.init_gutters();
      r.sidebar.single_width = r.sidebar.outerWidth();
      r.sidebar.double_width = r.sidebar.single_width + r.sidebar.find('>div').width();
      r.main.div = J('#main>div').get(0);
      r.main.hasOverflow = function(){ return Math.max(r.main.div.scrollWidth - r.main.div.clientWidth, 0); };
      
      r.reset();
      J.window.on('load', function(){self.reset_if_image_changed()});
      J.window.on('resize', function(){self.reflow()});
      
      var mylist = J('.mylist-css #mylist-content-inner table');
      if (mylist.length){
        var cpt = 0;
        var check = function(){
          if (mylist.find('tbody tr').length)
            r.reset();
          else if (cpt++ < 200)
            setTimeout(check,100);
        };
        setTimeout(check,100);
      }
      self.header.init();
      self.mobile_menu.init();
      
      J.window.on('resize', self.set_scrollable);
    };
  
  self.init_gutters =
    function(){
      J.each([self.top_gutter, self.left_gutter, self.right_gutter, self.bottom_gutter], function(i,g){
        g.link = g.find('a');
        g.link.width('');
        g.fixed = g.link.css('position') == 'fixed';
        g.min_width = ANN.sum(g.css('min-width'));
        g.max_width = ANN.sum(g.link.css('max-width'));
      });
      self.side_gutters_min_width = self.left_gutter.min_width || self.right_gutter.min_width;
    };
  
  self.reset_if_image_changed =
    function(){
      var different;
      J('#main img').each(function(){
          different = this.clientWidthMemo != this.clientWidth;
          if (different) return false;
      });
      if (different) self.reset();
    };
  
  self.reset =
    function(){
      ANN.debug.event('reset');
      J('#main img').each(function(){
          this.clientWidthMemo = this.clientWidth;
      });
      if (self.mode.skin) self.mode.set('skin', J('.top.gutter').height() ? 1 : 2);
      self.state = {};
      self.reflow();
    };
  
  self.reflow =
    function(){
      self.set_mobile_mode();
      
      self.detect_minimal_width();
      self.choose_layout_mode();
      
      if (self.detect_minimal_width()){
        self.choose_layout_mode();
      }
      
      if (!self.mode.mobile)
        self.verify_overflow();
      
      ANN.sidebar.reflow();
      for (var i = 0; i < self.reflow.registry.length; i++)
        self.reflow.registry[i]();
    };
  self.reflow.registry = [];
  
  self.set_mobile_mode =
    function(){
      if (self.mode.set('mobile', ANN.viewport.width() < self.header_minimum ? 1 : 0)) {
        self.state.width = null;
        ANN.lazyload.renew();
      }
      
      var key = 'main_size.mobile-'+self.mode.mobile;
      if (!self.state[key]){
        var c = self.state[key] = {};
        c.minimal = '';
        c.padding = self.main.outerWidth() - self.main.width();
        c.fair = self.sidebar.single_width
               ? 1024-20-self.sidebar.single_width //fair+sidebar = 1024-scrollbar
               : 728+c.padding; //enough space for leaderboard
        c.optimal = self.compute_optimal(c);
      }
      self.main.current = self.state[key];
      
      if (!self.state.width){
        self.main.css({ 'min-width': self.main.current.minimal });
      }
    };
    
  self.compute_optimal =
    function(c){
      if (self.mode.mobile) return null;
      var optimal;
      if (ANN.grid.mainfeed)
        optimal = ANN.grid.BOX.MaxWidthPadded * ANN.grid.BOX.MaxCols + c.padding;
      else{
        if (self.optimal_computed) J('.same-width-as-main').css('width', '');
        var cw = self.canvas.width(),
            mw = self.main.outerWidth(),
            sw = self.mode.sidebar ? self.sidebar.outerWidth() : 0;
        if (mw >= cw - sw){
          J('#content').addClass('test-optimal');
          mw = self.main.outerWidth();
          if (self.main.hasOverflow()) ANN.debug.alert('#main has overflow even when test-optimal!');
          J('#content').removeClass('test-optimal');
        }
        optimal = Math.max(mw, c.fair, c.optimal||0);
      }
      J('.same-width-as-main').css('width', 'auto');
      self.optimal_computed = true;
      return optimal;
    };
  
  self.recompute_optimal =
    function(){
      var c = self.main.current;
      var old = c.optimal;
      c.optimal = self.compute_optimal(c);
      if (c.optimal != old) self.reflow();
    };
  
  self.verify_overflow =
    function(){
      var o = self.main.hasOverflow();
      if (o && ANN.debug.ON){
        ANN.debug.alert('#main overflow='+o+' even though min-width='+self.main.css('min-width'));
        J('#main').css('background-color','red');
        var x = J('#main *').css('background-color','white');
        x = jQuery.makeArray(x);
        while (x.length){
          var elem = x.pop();
          if (!elem.tagName.match(/^(wbr)$/i))
            elem.style.display = 'none';
          if (o != self.main.hasOverflow()){
            elem.className += " overflow-changed";
            ANN.debug.alert('problem element @ '+elem.tagName+'.overflow-changed');
            break;
          }
        }
        self.main.div.style.overflow = 'visible';
        self.set_mobile_mode = null;
        self.bugout();
      }
      return o;
    };
  
  self.detect_minimal_width =
    function(){
      var c = self.main.current;
      if (!c.minimal){
        var o = self.main.hasOverflow();
        if (o){
          c.minimal = self.main.outerWidth() + o;
          self.main.css('min-width', c.minimal);
          //ANN.debug.alert('minimal = '+c.minimal);
          if (c.optimal && c.minimal > c.optimal) //may happen if child element misbehaves; like width=100% with padding>0
            c.minimal = c.optimal;
          return true;
        }
      } 
    };
  
  self.choose_layout_mode =
    function(){
      var available = ANN.viewport.width(),
          left = self.left_gutter.min_width,
          minimal = self.main.current.minimal || 0,
          minimal_fair = Math.max(minimal,self.main.current.fair-100),
          optimal = self.main.current.optimal,
          sidebar = self.sidebar.single_width,
          sidebar2 = self.sidebar.double_width,
          right = self.right_gutter.min_width;
      
      if (available >= self.header_minimum && !self.side_gutters_min_width){
        // side gutters min-width may be hidden by media query, so recompute once when window is large enough
        self.side_gutters_min_width = true;
        left = self.left_gutter.min_width = ANN.sum(self.left_gutter.css('min-width'));
        right = self.right_gutter.min_width = ANN.sum(self.right_gutter.css('min-width'));
      }
      
      if (self.mode.mobile)
        return self.set_mode(0,0);
      if (self.allow_double_sidebar && available >= left + optimal + sidebar2 + right)
        return self.set_mode(2,2);
      if (available >= left + optimal + sidebar + right)
        return self.set_mode(2,1);
      
      //not quite enough space for everything; decide what gets the axe
      
      if (left || right) //skin
      {
        if (self.drop_sidebar_early)
        { //drop sidebar if it would cause content to be less than optimal width
          if (available >= left + optimal + right)
            return self.set_mode(2,0);
          if (available >= left + minimal_fair + right && available > 1200)
            return self.set_mode(2,0);
          if (available >= left + minimal_fair)
            return self.set_mode(1,0);
        }
        else
        {
          if (available > 1200){
            if (available >= left + minimal_fair + sidebar + right)
              return self.set_mode(2,1);
            if (available >= left + minimal_fair + right)
              return self.set_mode(2,0);
          }
          if (available >= left + minimal_fair + sidebar)
            return self.set_mode(1,1);
          if (available >= left + optimal + right)
            return self.set_mode(2,0);
          if (available >= left + minimal_fair)
            return self.set_mode(1,0);
        }
        return self.set_mode(0,0);
      }
      else //no skin
      {
        if (self.drop_sidebar_early)
          return self.set_mode(2,0);
        if (available >= minimal_fair + sidebar)
          return self.set_mode(2,1);
        
        return self.set_mode(2,0);
      }
    };
  
  self.set_mode =
    function(gutter, sidebar){
      if (!self.sidebar.length) sidebar = 0;
      if (gutter==1 && self.right_gutter.min_width==0) gutter = 2;
      sidebar = ANN.sidebar.mode_if_minimized(sidebar);
      
      if (self.mode.gutter != gutter || self.mode.sidebar != sidebar || !self.state.width){
        self.mode.set('gutter', gutter);
        self.mode.set('sidebar', sidebar);
        self.state.width = {
          left_gutter:  ANN.sum(J('.left.gutter:visible' ).css('min-width')),
          right_gutter: ANN.sum(J('.right.gutter:visible').css('min-width')),
          sidebar: sidebar ? self.sidebar.outerWidth() : 0
        }
      }
      self.choose_menu_mode();
      
      //after all modes have been set and layout reflowed, we can use the computed dimensions
      self.set_mode_widths();
      ANN.marquee.set_ratio();
    };
  
  self.set_mode_widths =
    function(){
      var w = self.state.width;
      
      w.body = ANN.viewport.width();
      w.main_max = w.body - w.left_gutter - w.sidebar - w.right_gutter;
      if (w.main_max < self.main.current.minimal) w.main_max = self.main.current.minimal;
      ANN.grid.set_mainfeed_width();//this may modify w.main_max
      
      var m = Math.min(w.main_max, self.main.current.optimal || w.body);
      if (self.mode.sidebar==0 && self.mode.mobile==0) m = Math.max(m, 728+self.main.current.padding);
      self.main.css({   'width': m,             'max-width': w.main_max             });
      self.canvas.css({ 'width': m + w.sidebar, 'max-width': w.main_max + w.sidebar });
      J('#page').css('width', '100%'); //set here instead of css, to prevent FOUC
      
      var l = self.left_gutter, lw = l.width(),
          t = self.top_gutter, tw = t.width(),
          b = self.bottom_gutter, bw = b.width(),
          r = self.right_gutter, rw = r.width();
      if (l.fixed) l.link.width(lw);
      if (r.fixed) r.link.width(rw);
      l.toggleClass('full-image', lw <= l.max_width);
      t.toggleClass('full-image', tw == t.link.width());
      b.toggleClass('full-image', bw == b.link.width());
      r.toggleClass('full-image', rw <= r.max_width);
      
      ANN.grid.set_grid_mode();
      ANN.sidebar.check_columns();
      ANN.mega_nav.set_font_size();
    };
  
  self.choose_menu_mode =
    function(){
      var menu = 0;
      if (self.mode.mobile === 1 || self.mode.device === 'mobile'){
        // below 605px, the logo is a bit too small with mode-1
        // also it ensures that
        // only 1.90% of mobiles get mode-1 when portrait (like 1080x1920)
        // only 0.45% of mobiles get mode-2 when landscape (like 320x568)
        menu = ANN.viewport.width() < 605 ? 2 : 1;
      }
      self.mode.set('menu', menu);
    };
  
  self.set_scrollable =
    function(){
      var $header = ANN.layout.header.j.header;
      var user_menu = ANN.layout.mode.menu > 0 && self.header.j.user_btn.hasClass('active');
      var modal = !!ANN.modal.container && J('.modal-window').css('overflow-y') === 'auto';
      var mobile_menu = ANN.layout.mode.menu > 0 && J.body.hasClass('mobile-menu-open');
      var unscrollable = user_menu || modal || mobile_menu;
      J.body.toggleClass('unscrollable', unscrollable);
      
      $header.css('padding-right', '');
      if (ANN.viewport.height() <= J.body.outerHeight() && unscrollable){
        var initial = parseInt($header.css('padding-right'));
        var scrollbar = ANN.viewport.scrollbar_width;
        $header.css('padding-right', initial + scrollbar);
      }
    };
  
});


(function(load){
  load(ANN.layout.header = {});
})(function(self){

  var j = self.j = {}

  self.init =
    function(){
      j.header = J('#header');
      j.header_left = j.header.find('.left.half');
      j.user_btn = j.header.find('.header-button.user');
      j.user_menu = j.user_btn.find('.user_menu');
      j.user_menu.content = j.user_menu.find('> .content');
      j.user_menu.is_login = j.user_menu.find('.login.block').length;
      J.window.on('resize scroll', toggle_classes);
      j.header.find('.actionable.hamburger .icon').on('click', ANN.layout.mobile_menu.toggle);
      j.header.find('.header-button.report .icon').attr('data-report-button', '');
      j.header.find('.header-button.search .icon').on('click', toggle_user_menu.off)
                                                  .on('click', ANN.searchbox.turn_on_search_mode);
      j.user_btn.find('.icon').on('click', toggle_user_menu);
    };
  
  function toggle_classes(){
    var direction = scroll_delta();
    if (ANN.layout.mode.menu === 0) return J.body.removeClass('visible-header');
    
    // by chronology:
    if (current_scroll_top > j.header.outerHeight() * 2.5){
      // 1) prepare to show header
      j.header.addClass('fixed');
      // 2) enable transition AFTER header is prepared
      //    otherwise we see the header flash up when scrolling down
      if (direction > 0) j.header.addClass('transition-enabled');
      // 3) show/hide header WITH transitions
      var visible = direction >= 0 || ANN.searchbox.on;
      J.body.toggleClass('visible-header', visible);
    }
    else if (current_scroll_top <= (ANN.layout.mode.menu === 2 ? j.header_left.outerHeight() : 0)){
      // 4) reset header state, then start again with (1)
      J.body.removeClass('visible-header');
      j.header.removeClass('fixed transition-enabled');
    }
    // 5) readjust user menu size if active
    if (j.user_btn.is('.active')) toggle_user_menu.on();
  }
  
  function toggle_user_menu(){
    toggle_user_menu[j.user_btn.is('.active') ? 'off' : 'on']();
  }
  self.toggle_user_menu = toggle_user_menu;
  toggle_user_menu.on = function(){
    var height = j.user_menu.content.outerHeight();
    var max_height = ANN.viewport.outerHeight() - j.header.outerHeight();
    if (j.user_menu.is_login)
      height = Math.max(height, max_height);
    else
      max_height = Math.min(height, max_height);
    
    ANN.searchbox.turn_off_search_mode();
    J.body.addClass('visible-header');
    j.user_btn.addClass('active');
    j.user_menu.css('overflow-y', max_height < height ? '' : 'hidden');
    j.user_menu.css('height', height);
    j.user_menu.css('max-height', max_height);
    ANN.layout.set_scrollable();
  };
  toggle_user_menu.off = function(){
    j.header.css('padding-right', '');
    j.user_btn.removeClass('active');
    j.user_menu.css('height', '');
    ANN.layout.set_scrollable();
  };
  
  var current_scroll_top = 0;
  function scroll_delta(){
    var last_scroll_top = current_scroll_top;
    current_scroll_top = J.window.scrollTop();
    return last_scroll_top - current_scroll_top;
  }

});


(function(load){
  load(ANN.layout.mobile_menu = {});
})(function(self){
  
  var j = self.j = {};
  
  self.init =
    function(){
      j.menu = J('#mobile-menu');
      j.overlay = J('#mobile-menu-overlay');
      j.menu.find('.subsections-wrapper').before('<button class="subsections-toggle" type="button">&blacktriangledown;</button>');
      
      j.menu.find('.close').on('click', toggle_off);
      j.overlay.on('click', toggle_off);
      j.menu.find('.subsections-toggle').on('click', toggle_section);
      
      ANN.Hammer(j.menu).on('swipeleft', toggle_off);
      ANN.Hammer(j.overlay).on('swipeleft', toggle_off);
      ANN.Hammer(j.overlay).on('swiperight', toggle_on);
      
      // indicate non-link headings
      j.menu.find('.sections li > .heading').each(function(){
        var $this = J(this)
        if (!$this.children().length) $this.html($this.html() + ' &#11022;');
      });
      
      // open initial section
      var section = ANN.ads.pageinfo.section;
      var hd = j.menu.find('.sections > li.'+section+' > .subsections-toggle')[0];
      if (hd) toggle_section.apply(hd);
    };
  
  self.toggle =
    function(){
      J.body.toggleClass('mobile-menu-open');
      if (J.body.hasClass('mobile-menu-open')) reset_open_sections_height();
      ANN.layout.set_scrollable();
    };
  
  function toggle_on(){
    if (!J.body.hasClass('mobile-menu-open')) self.toggle();
  }
  
  function toggle_off(){
    if (J.body.hasClass('mobile-menu-open')) self.toggle();
  }
  
  function toggle_section(){
    var $this = J(this);
    var $section = $this.parent();
    var $wrapper = $this.next();
    
    var height = $wrapper.children('.subsections').height();
    if ($section.hasClass('open')){
      $section.removeClass('open');
      $wrapper.height('');
      $wrapper.parentsUntil('.sections', '.subsections-wrapper').each(function(){
        var $w = J(this);
        $w.height($w.children('.subsections').height() - height);
      });
    }
    else{
      $section.addClass('open');
      $wrapper.height(height);
      $wrapper.parentsUntil('.sections', '.subsections-wrapper').each(function(){
        var $w = J(this);
        $w.height($w.children('.subsections').height() + height);
      });
    }
  }
  
  function reset_open_sections_height(){
    var $section = j.menu.find('.section.open');
    $section.each(function(){
      var $this = J(this);
      var $wrapper = $this.find('.subsections-wrapper');
      $wrapper.height($section.find('.subsections').height());
    });
  }
  
});


(function(load){
  load(ANN.layout.easyread = {});
})(function(self){
  
  var r0, r1;
  
  self.init =
    function(){
      self.style_sheet = J('style.easyread-style-sheet')[0].sheet;
      r0 = self.style_sheet.rules[0].style;
      r1 = self.style_sheet.rules[1].style;
      self.forum_offset = parseFloat(r1.width) - parseFloat(r0.maxWidth);
    };
  
  self.update =
    function(){
      if (!self.style_sheet) self.init();
      
      var n = ANN.user_preferences.get('easyread_text_width');
      n *= 0.5;
      
      r0.maxWidth = n + 'em';
      r1.width = (n + self.forum_offset) + 'em';
      
      ANN.layout.reset();
    };
  
});


(function(load){
  load(ANN.searchbox = {});
})(function(self){
  
  var j = self.j = {};
  
  self.init =
    function(){
      j.searchbox = J('#searchbox');
      j.form = J('#searchbox form');
      j.input = J('#searchbox input');
      J('#searchbox input')
        .on('focus', self.events.input_focus)
        .on('keyup', self.events.input_keyup)
        .on('keydown', self.events.input_keydown)
        .on('blur', self.events.input_blur);
      J('#searchbox .search-suggest li')
        .on('mouseenter', self.events.suggest_hover_in)
        .on('mouseleave', self.events.suggest_hover_out)
        .on('click', self.events.suggest_click);
      J('#searchbox .close')
        .on('click', self.turn_off_search_mode);
    };
  
  self.set_search_type =
    function(elem){
      elem.addClass('selected').siblings().removeClass('selected');
      j.form.attr('action', elem.attr('data-action'));
      j.input.attr('name', elem.attr('data-param'));
    };
  
  self.events =
    {
      input_focus: function(){
        j.form.toggleClass('active', j.input.val() !== '');
      },
      input_keyup: function(event){
        j.form.toggleClass('active', j.input.val() !== '')
        var shy = '­'; //insert &shy; in long words
        var hyphenized = this.value
          .replace(/(\w{4}[aeéèêiou]{1,2}n?)(?=\w{5})/g, '$1'+shy)
          .replace(/(\w{9)(?=\w{5})/g, '$1'+shy);
        J('#searchbox .search-suggest span').text(hyphenized);
      },
      input_keydown: function(event){
        var li = J('#searchbox .search-suggest li');
        var current = li.filter(".selected");
        switch (event.keyCode) {
          case 38: //arrow up
            var prev = current.prev();
            if (prev.length == 0) prev = li.last();
            self.set_search_type(prev);
            event.preventDefault();
            break;
          case 40: //arrow down
            var next = current.next();
            if (next.length == 0) next = li.first();
            self.set_search_type(next);
            event.preventDefault();
            break;
          case 27: //escape
            j.input.blur();
        }
      },
      input_blur: function(){
        if (J('#searchbox li.hovering').length == 0){
          j.form.removeClass('active');
          j.form.css('left', '0px');
        }
      },
      suggest_hover_in: function(){
        J(this).addClass('hovering');
        self.set_search_type(J(this));
      },
      suggest_hover_out: function(){
        J(this).removeClass('hovering');
      },
      suggest_click: function(){
        if (j.input.val().match(/\S/)){
          j.form.submit();
        }
        j.form.removeClass('active');
      }
    };
  
  self.on = false;
  
  self.turn_on_search_mode =
    function(){
      self.on = true;
      j.input.focus();
      j.searchbox.addClass('search-mode');
    };
  
  self.turn_off_search_mode =
    function(){
      self.on = false;
      j.form[0].reset();
      j.input.keyup();
      j.searchbox.removeClass('search-mode');
    };
  
});


(function(load){
  load(ANN.grid = {});
})(function(self){
  
  self.view_mode = 'grid-thumb';
  var BOX = self.BOX = {
    MaxCols: ANN.Const.GRID_MAX_COLUMNS,
    Padding: ANN.Const.GRID_BOX_PADDING,
    MinWidth: ANN.Const.GRID_BOX_MINWIDTH,
    MaxWidth: ANN.Const.GRID_BOX_MAXWIDTH,
    Height: ANN.Const.GRID_BOX_HEIGHT,
  };
  BOX.MinWidthPadded = BOX.MinWidth + BOX.Padding * 2;
  BOX.MaxWidthPadded = BOX.MaxWidth + BOX.Padding * 2;
  
  const TOPFEED_MAX_ROWS = 2;
  
  self.init =
    function(){
      J('.herald a[data-track]').on('mouseup', function(ev){
        if (ev.which == 1 || ev.which == 2){
          ANN.logev.server_log("herald", J(this).attr('data-track'));
        }
      });
      J.document.on('click', '.herald a[data-track][href=""]', function(e){
        e.preventDefault();
      });
      var remember_layout = !window.location.host.match(/^admin/);
      self.filterable_boxes = J('.herald-boxes:not(.never-filter) .box');
      self.mainfeed = J('#mainfeed');
      self.filters = J('#mainfeed .filters');
      self.filters.topics = self.filters.find('.topics');
      self.filters.toggles = self.filters.find('[data-filter]');
      self.days = self.mainfeed.find('.mainfeed-day');
      self.days.each(init_streaming_now);
      self.aside = J('#aside');
      if (self.mainfeed.length == 0)
        self.mainfeed = null;
      else{
        self.view_modes_tried = [];
        self.track_id = (Math.random()+'').replace(/0\./,'');
        self.mainfeed.find('.view-mode div:not(.open-preferences)').on('click', function(){
          var was_grid = /grid/.test(self.view_mode);
          var mode = self.set_view_mode(this.className);
          var is_grid = /grid/.test(self.view_mode);
          //when going from grid->list reinit ads in order to properly set 'fright'
          if (was_grid && !is_grid) ANN.ads.insert_mainfeed_placeholders();
          if (remember_layout) self.track(mode);
        });
        var mode = ANN.user_preferences.get('mainfeed_viewmode');
        if (!remember_layout) mode = null;
        self.initial_mode = self.set_view_mode(mode || 'grid-thumb', true);
        
        self.filters.toggles.on('click', self.toggle_filter);
        if (remember_layout) self.toggle_filters(ANN.user_preferences.get('grid_filters'));
      }
    };
  
  function init_streaming_now(_, day){
    var first, msg1=[], msg2=[];
    J(day).find('.snippet a.streaming-now').each(function(i, link){
      if (link.href.match(/#ep(\d+-.+)/)) {
        var ani_ep = RegExp.$1;
        var intro = J(link).closest('.hook');
        if (ANN.ratings.anime_was_rated_recently(ani_ep)) {
          if (msg1.length == 0) first = intro;
          msg1.push(intro.html());
        }
        else {
          if (!first) first = intro;
          msg2.push(intro.html());
        }
      }
    }).closest('.herald').addClass('-hidden');
    if (!first) return;
    
    first.closest('.herald').removeClass('-hidden');
    first.html((msg1.length ? msg1 : msg2).join('<br>'));
    first.next('.full')
      .html(msg1.length && msg2.length ? '<br>― Also: '+msg2.join(', ') : '')
      .find('span').remove();
  }
  
  self.track =
    function(mode){
      if (!self.mainfeed){ return; }
      self.view_modes_tried.push(mode);
      J.ajax('/cms/ann5/track_viewmode?i='+self.track_id+'&modes=('+self.initial_mode+')/'+self.view_modes_tried.join('/'));
    };
  
  self.set_view_mode =
    function(mode, do_not_set){
      if (!self.mainfeed) return;
      if (mode.match(/compact-list-text/)) mode = 'compact-list-text';
      else if (mode.match(/list-text/)) mode = 'list-text';
      else if (mode.match(/list-thumb/)) mode = 'list-thumb';
      else if (mode.match(/grid-text/)) mode = 'grid-text';
      else mode = 'grid-thumb';
      
      self.view_mode = mode;
      self.mainfeed.find('.view-mode .'+mode).addClass('selected').siblings().removeClass('selected');
      self.mainfeed.removeClass().addClass(mode.replace(/-/g,'-view ')+'-view');
      if (!do_not_set){ ANN.user_preferences.set('mainfeed_viewmode', mode); }
      self.layout_was_modified();
      
      return mode;
    };
  
  self.toggle_filter =
    function(){
      var list;
      var value = J(this).toggleClass('selected').data('filter');
      
      if (value == '*' || value == 'local'){
        list = [value];
      }
      else{
        list = self.filters.toggles.filter('.selected');
        list = J.map(list, function(e){ return J(e).data('filter'); });
        while (list[0] == '*' || list[0] == 'local') list.shift();
        if (list.length == 0) list.push('*');
      }
      
      ANN.user_preferences.set('grid_filters', list);
      self.toggle_filters(list);
    };
  
  self.toggle_filters =
    function(list){
      var str = list.join(',').replace(/([^,]+)/g, '[data-filter="$1"]');
      self.filters.toggles.removeClass('selected').filter(str).addClass('selected');
      var nb_groups = self.filters.find('.group').has('.selected').length;
      self.filters.topics.prev('b').toggleClass('selected', nb_groups == 2);
      self.filters.find('.open-preferences').toggleClass('selected', list[0] != '*');
      
      self.apply_filters();
      //if some boxes were hidden reinit ads to ensure no more than one ad every 10 boxes
      var previous = self.toggle_filters.previous;
      if (previous && previous.join(',') != list.join(',')){
        ANN.ads.insert_mainfeed_placeholders();
      }
      self.toggle_filters.previous = list;
    };
  
  self.apply_filters =
    function(){
      var li = self.filters.toggles.filter('.selected');
      if (li.attr('data-filter') == '*'){
        J('#load-more span').text('');
        self.filterable_boxes.removeClass('is-filtered');
      }
      else{
        J('#load-more span').text('('+li.map(function(){return this.innerText;}).get().join(', ')+')');
        var types=[], tags=J.map(li, function(x){return J(x).attr('data-filter')});
        while (tags.length && tags[0].match(/news|interest|reviews|column/)) types.push(tags.shift());
        types = new RegExp(types.length ? types.join("|")+"|sponsor" : ".");
        tags = new RegExp(tags.length ? tags.join("|")+"|sponsor" : ".");
        self.filterable_boxes.each(function(){
          var box = J(this);
          var topics = box.attr('data-topics') || "";
          var on = topics.match(types) && topics.match(tags);
          box.toggleClass('is-filtered', !on);
        });
      }
      
      self.days.each(function(){
        var div = J(this), h2 = div.find('h2.section-title');
        if (div.find('.mainfeed-section .box:visible').length > 0)
          h2.show();
        else
          h2.hide();
      });
      self.layout_was_modified();
      self.load_more(true);
    };
  
  self.set_mainfeed_width =
    function(){
      if (!self.mainfeed) return;
      var l = ANN.layout;
      var w = l.state.width;
      w.main_max = self.mainfeed_max_width(w.body, w.main_max, l.main.current.padding);
    };
  
  self.mainfeed_max_width =
    function(viewport, main_max, main_padding){
      viewport = viewport || ANN.viewport.width();
      main_max = main_max || viewport;
      main_padding = main_padding || parseInt(J('#main').css('padding-left')) * 2
      
      var l = ANN.layout;
      var with_ad = 728 + main_padding;
      
      if (l.mode.mobile==0 && l.mode.gutter==2 && main_max > with_ad){
        main_max = Math.min(viewport * 0.84, main_max);
        main_max = Math.max(with_ad, main_max);
      }
      main_max = Math.min(main_max, BOX.MaxWidthPadded * BOX.MaxCols + main_padding);
      return main_max;
    };
  
  self.set_grid_mode =
    function(){
      var w = ANN.layout.state.width;
      
      var grid = Math.floor(ANN.layout.main.width() / BOX.MinWidthPadded);
      if (grid < 1) grid = 1;
      if (grid > BOX.MaxCols) grid = BOX.MaxCols;
      ANN.layout.mode.set('grid',grid);
      
      optimize_filters_linewrap();
      self.layout_was_modified();
    };
    
  var filters_nobr_width = 0;
  function optimize_filters_linewrap(){
    if (ANN.layout.mode.mobile) return;
    var container = self.filters;
    var t = self.filters.topics;
    if (t.length){
      if (container.width() <= filters_nobr_width){
        t.removeClass('nobr');
      }
      else{
        t.addClass('nobr');
        if (t.height() > t.children().height()){
          filters_nobr_width = container.width() + 1;
          t.removeClass('nobr');
        }
      }
    }
  }
  
  self.layout_was_modified =
    function(){
      if (!self.mainfeed) return;
      // Unhide boxes that are hidden due to row limit
      // to allow clear_box_under_aside to perform relayout
      J('#topfeed .after-limit').removeClass('after-limit');
      self.clear_box_under_aside();
      self.limit_topfeed_rows();
      ANN.lazyload.renew();
    };
  
  self.limit_topfeed_rows =
    function(){
      const boxes = J('#topfeed .herald.box');
      let row = 0, last_offset = Number.NEGATIVE_INFINITY;
      boxes.each((_, box) => {
        if (box.offsetTop > last_offset) {
          row++;
          last_offset = box.offsetTop;
        }
        if (row > TOPFEED_MAX_ROWS) box.classList.toggle('after-limit', true);
      });
    };
  
  self.clear_box_under_aside =
    function(){
      var boxes = J('.mainfeed-section .box:visible').not('.iab');
      var col=1, nbcol=ANN.layout.mode.grid;
      J('.aside_overlap').removeClass('aside_overlap');
      if (self.view_mode.match(/list/)) return;
      if (nbcol == 1) return;
      if (self.mainfeed.height() < self.aside.height())
        J('#load-more').addClass('aside_overlap');
      for (var i=1; i<boxes.length; i++){
        if (boxes[i].offsetLeft <= boxes[i-1].offsetLeft)
          col = 1;
        else{
          col++;
          if (boxes[i].offsetTop > boxes[i-1].offsetTop){
            var b = J(boxes[i]);
            if (b.find('~ .box:visible').length > 0) b.addClass('aside_overlap');
            col = 1;
          }
        }
      }
    };
  
  var load_more_retry = 0;
  
  self.load_more =
    function(auto, reentrant){
      var more = J('#load-more');
      if (more.length==0) return;
      if (more.hasClass('busy') && !reentrant) return;
      
      if (auto && self.mainfeed.height() > screen.height*2) return more.removeClass('busy');
      if (auto && self.days.length >= 14) return more.removeClass('busy');
      
      var prevday = self.days.last().attr('data-prevday');
      if (prevday == '' && !auto) alert('nothing to load');
      if (prevday == '') return more.removeClass('busy');
      
      var nb_visible_boxes_before = self.filterable_boxes.not('.is-filtered').length;
      more.addClass('busy');
      J.ajax('/herald/hp_more?d='+prevday, {
        success: function(data, textStatus, jqXHR){
          self.mainfeed.append(data);
          self.days = self.mainfeed.find('.mainfeed-day');
          self.filterable_boxes = J('.herald-boxes:not(.never-filter) .box');
          self.days.last().each(init_streaming_now);
          self.apply_filters();
          //boxes have been appended to mainfeed, so append ads as well
          ANN.ads.insert_mainfeed_placeholders(true);
          if (auto)
            self.load_more(auto, true);
          else{
            more.find('em').html(self.filterable_boxes.not('.aside').length+' articles;');
            more.removeClass('busy');
            
            if (self.filterable_boxes.not('.is-filtered').length == nb_visible_boxes_before) {
              load_more_retry++;
              if (load_more_retry <= 10) self.load_more(auto, true);
            }
            else{
              load_more_retry = 0;
              ANN.viewport.scroll_to(self.days.last());
            }
          }
        },
        error: function(){
          more.removeClass('busy');
        }
      });
    };
  
});


(function(load){
  load(ANN.ratings = {});
}(function(self){
  
  //ratings marked with todo have 'score' data
  //(like SurveyHelper#rating_widget)
  self.init_todo =
    function(){
      J('.star_rating.todo').each(function(){
        var box = J(this);
        box.removeClass('todo');
        init_widget(box);
      });
    };
  
  //for ratings with 'ani_ep' data we must fetch user's score via ajax
  self.init_episodes =
    function(flags){
      var todo = {}, box, ani_ep;
      J('.star_rating[data-ani_ep]').each(function(){
        box = J(this);
        ani_ep = box.data('ani_ep');
        box.attr('data-ani_ep', null);
        box.flags = flags;
        todo[ani_ep] = box;
      });
      if (box) fetch_scores_and_init(todo);
    };
  
  function fetch_scores_and_init(todo){
    if (ANN.storage.get('has_episode_ratings') === false) {
      //not worth an ajax request since we previously found this user has no ratings at all
      set_score_then_init(todo, {});
    }
    else {
      J.ajax('/my/rating/anime/get', {
        type: "POST",
        data: {
          list: Object.keys(todo),
          check_if_any: ANN.storage.get('has_episode_ratings') === undefined,
          recent_since: self.recent().prior_to_id,
        },
        dataType: "json",
        success: function(res){
          ANN.storage.set('has_episode_ratings', res.other !== false);
          self.set_recent(res.recent);
          set_score_then_init(todo, res.scores);
        },
      });
    }
  };
  
  self.recent =
    function(){
      if (self.recent.value === undefined) {
        self.recent.value = ANN.storage.get('recent_episode_ratings') || {eps: {}};
      }
      return self.recent.value;
    };
  
  self.set_recent =
    function(r){
      ANN.debug.msg('set_recent', r);
      r = J.extend(true, self.recent(), r);
      for (var k in r.eps)
        if (r.eps[k] < r.min_date)
          delete r.eps[k];
      ANN.debug.msg('recent_episode_ratings', r);
      ANN.storage.set('recent_episode_ratings', r);
    };
  
  function set_score_then_init(todo, personal_scores){
    for (var ani_ep in todo) {
      var box = todo[ani_ep];
      var score = personal_scores[ani_ep];
      box.data('score', score === undefined ? null : score);
      init_widget(box, ani_ep, box.hasClass('require-login') && !self.anime_was_rated_recently(ani_ep));
    }
  }
  
  var server_time;
  
  function init_widget(box, ani_ep, require_login){
    var bar = box.find('.bar');
    var stars = box.find('.stars');
    var input = box.find('input[type="hidden"]');
    var score = box.data('score');
    var half_star = box.height() / 2;
    var loaded_time = new Date;
    var prev_scores = [];
    
    if (ANN.user_preferences.user_is_signed_in) require_login = false;
    if (!require_login) box.removeClass('require-login');
    score === null ? show_score(score) : set_score(score);
    
    function show_score(value){
      box.toggleClass('no-rating', value === null);
      bar.width(value * half_star);
      bar.toggleClass('not-saved', value !== score)
    }
    
    function set_score(value){
      show_score(score=value);
      box.attr('title', 'current rating: '+(score === null ? 'none' : score*0.5));
      box.next('var').html(score === null ? '-' : score*0.5);
      ANN.storage.set('has_episode_ratings', true);
    }
    
    function save_score(new_score, rollback){
      ANN.debug.msg('new_score', new_score);
      set_score(new_score);
      display_undo();
      input.val(score);
      if (!ani_ep) return;
      save_score.in_flight = true;
      var ajax;
      J.ajax('/my/rating/anime/set', ajax = {
        type: "POST",
        data: {
          ani_ep: ani_ep,
          score: score === null ? 'delete' : score,
          server_time: server_time,
          ttv: (new Date - loaded_time) / 1000,
          flags: box.flags || null,
        },
        dataType: "json",
        success: function(res){
          self.set_recent(res.recent || res);
          check_server_time(ajax, res);
          check_forgotten_ep(ani_ep);
        },
        error: function(){
          set_score(rollback());
        },
        complete: function(){
          display_undo();
          save_score.in_flight = false;
        },
      });
    }
    
    function display_undo(){
      ANN.debug.msg('undo', prev_scores);
      var btn = display_undo.btn;
      if (!btn) {
        btn = display_undo.btn = btn = J('<div class="undo">[undo]</div>')
        btn.on('click', function(){
          if (save_score.in_flight) return;
          if (prev_scores.length) {
            var curr = score, prev = prev_scores.pop();
            save_score(prev, function(){ rollback.push(prev); return curr; });
          }
          else {
            prev_scores.push(score);
            save_score(null, function(){ return rollback.pop(); });
          }
        });
        box.append(btn);
      }
      btn.text(prev_scores.length ? '[undo]' : score === null ? '' : '[delete]');
    }
    
    stars.on('mousemove', function(event){
      var x = event.pageX - box.offset().left;
      show_score(Math.round(x/half_star));
    });
    stars.on('click', function(event){
      if (require_login) {
        if (confirm('Please login/register in order to vote')) ANN.show_login();
        return;
      }
      prev_scores.push(score);
      var x = event.pageX - box.offset().left;
      save_score(Math.round(x/half_star), function(){ return prev_scores.pop(); });
    });
    stars.on('mouseout', function(event){
      show_score(score);
    });
  }
  
  function check_server_time(ajax, res){
    ANN.debug.msg('server_time', [server_time, res.server_time]);
    if (!server_time) {
      server_time = res.server_time;
    }
    else if (server_time != res.server_time) {
      ajax.data.server_time = server_time;
      ajax.success = null; //request has already succeeded, so ignore
      ajax.error = null;   //success/error callbacks on 2nd request
      J.ajax('/my/rating/anime/set', ajax);
    }
  }
  
  function check_forgotten_ep(ani_ep){
    if (ani_ep.match(/^(\d+)-(\d+)$/)) {
      var a = RegExp.$1 + '-';
      var n = parseInt(RegExp.$2);
      if (n >= 2) {
        if (!self.recent().eps[a+(n-1)] && self.recent().eps[a+(n-2)]) {
          alert('It looks like you rated episodes '+(n-2)+' and '+n+
            ', but not episode '+(n-1)+'.\n'+
            'Just letting you know in case you forgot.');
        }
      }
    }
  }
  
  self.anime_was_rated_recently =
    function(ani_ep){
      if (ani_ep.match(/^(\d+)-(\d+)$/)) {
        var a = RegExp.$1 + '-';
        var n = parseInt(RegExp.$2);
        if (self.recent().eps[a+(n-0)]) return true;
        if (self.recent().eps[a+(n-1)]) return true;
        if (self.recent().eps[a+(n-2)]) return true;
      }
      return false;
    };
  
}));

(function(load){
  load(ANN.marquee = {});
})(function(self){
  
  self.init =
    function(){
      var m = J('#marquee');
      if (m.length == 0) return;
      self.ratio = 'medium';
      self.items = m.find('.marquee-item');
      self.overlay_width = m.find('.overlay:visible').outerWidth();
      setTimeout(function(){ self.slide(); }, 1); //need 1ms delay otherwise css transitions don't work in Chrome
      setInterval(function(){ if (!self.paused && document.hasFocus()) self.slide(); }, 5000);
      
      m.children().hover(
        function(){ self.paused = true; },
        function(){ self.paused = false; }
      );
    };
  
  self.slide =
    function(prev){
      var m = J('#marquee');
      var c = m.find('.current.marquee-item');
      var n = prev ? c.prev('.marquee-item') : c.next('.marquee-item');
      if (n.length == 0) n = prev ? self.items.last() : self.items.first();
      c.removeClass('current');
      if (c.hasClass('from-bottom')) c.addClass('at-bottom');
      if (c.hasClass('from-top')) c.addClass('at-top');
      n.addClass('current');
      if (n.hasClass('from-bottom')) n.removeClass('at-bottom');
      if (n.hasClass('from-top')) n.removeClass('at-top');
    };
  
  self.ratio = 'normal';
  self.set_ratio =
    function(){
      if (!self.items) return;
      var c = self.items.filter(':visible');
      var total_height = c.height();
      var total_width = c.width();
      var free_width = total_width - self.overlay_width;
      var ratio;
      if (total_width < 840)
        ratio = 'narrow';
      else if (free_width < 900)
        ratio = 'medium';
      else
        ratio = 'wide';
      
      self.items.removeClass(self.ratio).addClass(ratio);
      self.items.find('div.cover-image').each(function(){
        J(this).find('.shading').toggle(parseInt(this.style.maxWidth) < total_width);
      });
      if (self.ratio != ratio) ANN.lazyload.renew();
      self.ratio = ratio;
    };
  
});


(function(load){
  load(ANN.ads = {});
})(function(self){
  
  //Google Analytics
  window.dataLayer = [];
  window.gtag = function(){ dataLayer.push(arguments); };
  
  self.pageinfo = {};
  var displayed_ads = self.displayed_ads = {};
  self.adblocked = true;
  self.can_adblock_nag = true;
  
  self.init =
    function(){
      self.adblocked = self.adblocked || !J("#footer").children().last().is(':visible');
      self.log_adblock_nag_status();
      self.log_subscription_conversion_status();
      
      var top = J('.iab.top:visible').first();
      var side = J('.iab.side:visible').first();
      var disabled_ads = self.pageinfo.disable_ads;
      disabled_ads = (disabled_ads ? (disabled_ads == 'all' ? 'BRE' : 'BR') : '');
      
      self.top_testing = self.testing = '';
      if (document.location.search.match(/now_testing_banner_id=([\d-.]+)/))
        self.top_testing = self.testing = '&now_testing_banner_id='+RegExp.$1;
      if (document.location.search.match(/now_testing_rect_id=([\d-.]+)/))
        self.testing = '&now_testing_banner_id='+RegExp.$1;
      
      self.pageinfo.limitheight = ANN.layout.mode.mobile;
      self.pageinfo.url = document.location.href;
      self.pageinfo.maxW = top.width();
      if (self.adblocked) self.pageinfo.adblocked = true;
      if (ANN.layout.mode.skin) self.pageinfo.skin = true;
      if (ANN.user_preferences.get('no_banner_ads')) self.pageinfo.no_banner_ads = true;
      if (ANN.user_preferences.get('no_rectangle_ads')) self.pageinfo.no_rectangle_ads = true;
      if (ANN.user_preferences.get('i_am_18')) self.pageinfo['18+'] = true;
      
      //banner
      if (disabled_ads.match(/B/) && !self.top_testing)
        top.remove();
      else
        display_leaderboard(top);
      
      //rectangle
      if (disabled_ads.match(/R/) && !self.testing)
        side.remove();
      else if (ANN.grid.mainfeed){
        if (side.length) {
          //insert rectangle ads dynamically
          side.remove();
          self.insert_mainfeed_placeholders();
          J.window.on('scroll', self.load_mainfeed_ads);
        }
        else {
          //not our ads in mainfeed
          self.insert_mainfeed_placeholders = function(){ };
        }
      }
      else
        display_rectangle(side);
      
      //embed ads
      if (!disabled_ads.match(/E/)) {
        while (pending_embeds.length) pending_embeds.shift().apply();
        pending_embeds = null;
      }
      
      //owl ads
      if (ANN.layout.mode.mobile)
        J('.owl').remove();
      else if (J('.owl').length > 0) {
        ANN.logev.log('ads:render', { sponsor_name: 'owl' });
        J('.owl.sidebar').append('<iframe src="'+owlurl('ea2fb4e1c41c6b16a37b5ef5ffd0a1d46ce178fb')+'" width="300" height="250" '+ANN.Const.AD_SANDBOX_ATTRIBUTES+'></iframe>');
        var owl = J('.owl.content');
        owl.append('<iframe src="'+owlurl('6fda10e070153d3dc5c9d2570e87e7d683479b8a')+'" width="300" height="250" '+ANN.Const.AD_SANDBOX_ATTRIBUTES+'></iframe>');
        if (owl.width() >= 610)
          owl.append('<iframe src="'+owlurl('429b6b9588cc55af77b1eb1304aca15ea6f99c1b')+'" width="300" height="250" '+ANN.Const.AD_SANDBOX_ATTRIBUTES+'></iframe>');
      }
      
      J.window.on('message', function(ev){
        var m;
        ev = ev.originalEvent;
        if (ev.data === null || typeof ev.data !== 'object') return;
        if (ev.origin == document.location.origin){
          if (m=ev.data.ad_finished_loading) self.ad_finished_loading(get_ad(m,ev));
          if (m=ev.data.displaying_ad) self.displaying_ad(get_ad(m,ev));
        }
        if (m=ev.data.ad_fallback_for) self.ad_fallback_for(get_ad(m,ev));
      });
      
      self.display_adblock_nag();
    };
  function display_leaderboard(top){
    if (ANN.layout.mode.mobile) //put 'side' rectangle ads at top
      if (ANN.layout.mode.skin || ANN.grid.mainfeed)
        top.remove(); //but not on the HP or when a skin is running
      else
        self.create_iframe(top.removeClass('top').addClass('side'), '/show.aframe?t=R&w=L'+self.testing);
    else
      self.create_iframe(top, '/show.aframe?t=B&w=L'+self.top_testing);
  }
  function display_rectangle(side){
    if (ANN.layout.mode.mobile)
      side.remove();
    else
      self.create_iframe(side, '/show.aframe?t=R&w=S'+self.testing);
  }
  function owlurl(hash){
    return ANN.hide_url('/assets/' + hash + '.gif.html') + '#' + escape(document.location.href);
  }
  
  self.create_embed =
    function(campaign_id, css){
      var script = document.currentScript || document.scripts[document.scripts.length-1];
      var container = J('<div style="'+css+'"><div style="width:300px"></div></div>').insertBefore(script);
      if (pending_embeds)
        pending_embeds.push(J.proxy(display_embed, this, container, campaign_id));
      else
        display_embed(container, campaign_id);
    };
  var pending_embeds = [];
  function display_embed(container, campaign_id){
    self.create_iframe(container, '/embed.aframe?c='+campaign_id);
  }
  
  self.display_in_infinite_scroll =
    function(is, parent_log){
      if (is.length === 0){ return; }
      self.pageinfo.maxW = is.width();
      
      if (is.closest('.infinite-scroll-item').width() >= 728){
        self.pageinfo.limitheight = false;
        self.create_iframe(is.addClass('top'), '/show.aframe?t=B&w=IS', parent_log);
      }
      else{
        self.pageinfo.limitheight = true;
        self.create_iframe(is.addClass('side'), '/show.aframe?t=R&w=IS', parent_log);
      }
    };
  
  var mainfeed_ad_placeholders = [];
  var mainfeed_ads = [];
  var ad_insertion_point = 1;
  
  self.insert_mainfeed_placeholders =
    function(append){
      var boxes = J('.mainfeed-section .herald.box:visible');
      var box, container;
      if (!append) {
        while (box = mainfeed_ad_placeholders.pop()||mainfeed_ads.pop()) box.remove();
        ad_insertion_point = 1;
      }
      while (box=boxes.get(ad_insertion_point)) {
        container = J('<div class="box iab side"><div></div></div>');
        container.insertAfter(box);
        mainfeed_ad_placeholders.push(container);
        ad_insertion_point += ANN.layout.mode.grid<=2 ? 10 : 15;
      }
      ANN.grid.layout_was_modified();
      self.load_mainfeed_ads();
    };
  
  self.load_mainfeed_ads =
    function(){
      var i=0, container;
      while (container=mainfeed_ad_placeholders[i]) {
        var ofs = ANN.viewport.offset(container[0]);
        if (ofs < 0 || ofs === null)
          i++;
        else if (ofs > 500)
          break;
        else {
          mainfeed_ad_placeholders.splice(i,1);
          mainfeed_ads.push(container);
          if (container.prev().width() > 650) container.css('float', 'right');
          self.create_iframe(container, '/show.aframe?t=R&w=M'+self.testing);
        }
      }
    };
  
  self.create_iframe =
    function(container, src, parent_log){
      var div = container.find('div').first();
      if (container.length === 0) return;
      if (div.length === 0) return ANN.debug.msg('no div in container', container);
      if (self.adblocked && self.testing) div.html('adblock detected');
      if (self.adblocked && container.is('.iab')) return console.warn('adblocked'); //don't load ad that will be hidden by adblocker
      for (var i=0; i<42; i++){ //retry in case of ad_spot conflict, but not forever
        var ad_spot = Math.random().toString(16).slice(2, 7);
        if (ad_spot in displayed_ads) continue;
        src += '&p='+ad_spot;
        displayed_ads[ad_spot] = { width: null, height: null, container: container, parent_log: parent_log };
        src = ANN.hide_url(src);
        ANN.tmp_cookie('pageinfo@', escape(JSON.stringify(self.pageinfo)), src);
        div.html('<iframe src="'+src+'" '+ANN.Const.AD_IFRAME_ATTRIBUTES+'></iframe>');
        displayed_ads[ad_spot].iframe = container.find('iframe')[0];
        container.css({overflow: 'hidden'}); //when setting height to zero
        div.css({margin: '0 auto'}); //center
        return;
      }
    };
  
  self.displaying_ad =
    function(ad){
      ANN.debug.msg('displaying_ad', ad);
      
      if (typeof ad.id === 'number' && typeof ad.ad_spot === 'string')
        ANN.logev.log('ads:render', ad.last_update||ad, ad.parent_log);
      
      if (ad.loading_fallback) return ANN.debug.alert('displaying_ad while loading_fallback');
      if (ad.container) {
        self.set_sponsor(ad);
      }
    };
  
  self.set_sponsor =
    function(ad){
      var container=ad.container, ad_type=ad.ad_type, name=ad.sponsor_name, sponsor_id=ad.sponsor_id,  w=ad.width, h=ad.height, ad_id=ad.id;
      if (!ad_id){
        if (ad_type == 'BANNER'){
          //if on load the page is scrolled to a certain point (e.g. /faq#story_idea)
          //we must not hide the banner because that would change window.scrollTop
          var ct = container.offset().top, wt = J.window.scrollTop();
          if (ct < wt) return;
        }
        container.css('height',0);
        container.css('width',0);
      }
      else if (w && h){
        var div = container.find('div');
        div.css('width', w);
        container.find('iframe').css('height', h);
        var small = div.find('small.ad_by');
        if (!small.length) small = div.append('<small class="ad_by"></small>').find('small');
        small.html('Ad by '+name);
        small.append(' • <span>report</span>');
        small.find('span:eq(0)').on('click', function(){ self.report(name, sponsor_id, ad_id, ad_type, ad); });
        small.append(' • <span>hide</span>');
        if (ANN.user_preferences.available('blocked_advertisers')){
          small.find('span:eq(1)').on('click', function(){ self.block(name, sponsor_id); });
        }
        else {
          small.find('span:eq(1)').on('click', function(){
            window.open('/subscription/?redirected_by=ad_hide', '_blank');
          });
        }
        if (h > 0) {
          //sometimes iframe height returns 0 (!?!)
          //delaying with requestAnimationFrame or setTimeout doesn't always fix it
          //so we need to compute the container height instead of just using div.outerHeight(true)
          h += div.outerHeight(true) - div.height(); //padding
          h += small.height();
          container.css('height', h);
        }
      }
      else ANN.debug.popup('ad with no w/h', ad);
      
      if (ad_type == "RECT")
        setTimeout(ANN.grid.layout_was_modified, 500);
    };
  
  self.ad_finished_loading =
    function(ad){
      ANN.debug.msg('ad_finished_loading', ad);
      if (ad.container) {
        self.set_sponsor(ad);
      }
    };
  
  function get_ad(obj, ev){
    var ad = obj.ad_spot ? displayed_ads[obj.ad_spot] : detect_ad_fallback(ev);
    if (!ad) return obj;
    if (ad.id && obj.id && ad.id != obj.id) return obj; //mismatch
    ad.last_update = {};
    for (var k in obj)
      if (obj[k] !== ad[k])
        ad[k] = ad.last_update[k] = obj[k];
    return ad;
  }
  
  function detect_ad_fallback(ev){
    //find the window for the event
    var w = ev.source;
    while (w.parent !== window && w !== w.parent) w = w.parent;
    //find the iframe for the window
    var ad, ad_spot;
    for (ad_spot in displayed_ads){
      ad = displayed_ads[ad_spot];
      if (ad.iframe.contentWindow === w) return ad;
    }
    return null;
  }
  
  self.ad_fallback_for =
    function(ad){
      ANN.debug.msg('ad_fallback_for', ad);
      if (!ad.container || ad.loading_fallback) return; //fallback is already loading
      if (self.testing) return ad.container.css('height','auto').append('<center>^ '+(ad.empty ? 'detected' : 'invoked')+' fallback ^</center>'); //no fallback when testing
      //load a fallback
      ad.loading_fallback = true;
      self.create_iframe(ad.container, '/fallback.aframe?b='+ad.id+'-'+ad.campaign_id+'-'+ad.time);
      ad.container = null; //previous ad_spot no longer controls this container
    };
  
  self.report =
    function(sponsor_name, sponsor_id, ad_id, ad_type, ad){
      if (ad.reported) return alert('You already reported this ad.');
      var html = ad.html_contents || '',
          msg =
            'ANN does not allow ads that...\n'+
            '• contain sexually explicit or otherwise "not safe for work" images\n'+
            '• open pop-ups, pop-unders, overlays, play sound on load or hover, etc.\n'+
            '• advertise bootlegs, fansubs, unauthorized streaming sites or other forms of piracy\n'+
            '\n';
      msg += 'To file a complaint about this ad from '+sponsor_name+', please leave a message below.';
      if (html.match(/cannot access contents of \w+:/))
        msg += '\nIn particular, tell us what text and urls are written in the ad.';
      var complaint = prompt(msg, '');
      if (complaint != null){
        J.ajax('/ad/complaint/new!', {
          data: {message: complaint, sponsor_id: sponsor_id, banner_id: ad_id, html: html},
          type: "POST",
          dataType: "html",
          error: ANN.notifications.generic_error_handler,
          success: function(data, textStatus, jqXHR){
            ANN.notifications.notice(data);
            ad.reported = true;
          }
        });
      }
    };
  
  self.block =
    function(sponsor_name, sponsor_id){
      if (!ANN.user_preferences.available('blocked_advertisers')) return;
      if (!confirm('Block all ads from ' + sponsor_name + '?')) return;
      
      var blocked_advertisers = ANN.user_preferences.get('blocked_advertisers');
      if (!blocked_advertisers.includes(sponsor_id)){
        blocked_advertisers.push(sponsor_id);
        ANN.user_preferences.set('blocked_advertisers', blocked_advertisers);
      }
      
      for (var ad_spot in displayed_ads){
        var ad = displayed_ads[ad_spot];
        if (parseInt(ad.sponsor_id) !== sponsor_id || !ad.container) continue;
        
        var div = ad.container.find('div').first();
        var message = J(
          '<div class="advertiser-blocked">'+
            '<div>Ads will no longer be displayed for '+sponsor_name+'.</div> '+
            'You can re-enable them in your <a href="/my/subscription/">subscription settings</a>'+
          '</div>'
        );
        div.empty().append(message);
        if (div.width() < 300) div.width(''); //tower ads are too narrow
        if (message.height() != parseInt(message.css('line-height')) * 2){
          message.find('>div').css('display', 'inline');
        }
        ad.container.css('height', div.outerHeight(true));
      }
    };
  
  self.shuffle_attr =
    function(list){
      if (typeof list == 'string') list = list.match(/\S.*?;/g) || [];
      var attr = '';
      while (list.length){
        var idx = Math.floor(Math.random()*list.length);
        var str = list.splice(idx,1)[0];
        while (Math.random() < 0.618) str = str.replace(/: /,':  ');
        while (Math.random() < 0.618) str = ' '+str;
        attr += str;
      }
      return attr;
    };
  
  
  var adblock_nag_template =
    '<div style="position: absolute; bottom: 0; left: 0; right: 0; min-height: 50%; '
  +       'background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.7) 50px); '
  +       '-webkit-mask: linear-gradient(to bottom, transparent, black 50px);'
  +       'backdrop-filter: blur(5px);">'
  +   '<div class="adblock_nag">'
  +     '<div class="actions">'
  +       '<a class="action subscribe" href="/subscription/">Subscribe</a> '
  +       '<button class="action dismiss" type="button">Maybe later</button>'
  +       '<div class="anytime">At any time you can subscribe from the "My ANN" menu</div>'
  +     '</div>'
  +     '<div class="login">'
  +       '<span>Already a subscriber?</span> <a href="/account/login">Login</a>'
  +     '</div>'
  +   '</div>'
  + '</div>';
  
  self.display_adblock_nag =
    function(){
      if (!self.should_adblock_nag()) return;
      
      var $maincontent = J("#maincontent");
      if ($maincontent.length){
        $maincontent.css("position", "relative");
        var $nag = J(adblock_nag_template);
        J.get(ANN.hide_url("/static/adblock_nag_msg/" + ANN.edition + ".html")).done(function(html){
          var m;
          while (m=html.match(/^(\.[^\n=]+)=(.*)/m)) {
            $nag.find(m[1]).html(m[2]);
            html = html.replace(m[0], '');
          }
          $nag.children(".adblock_nag").prepend(html);
        });
        $maincontent.append($nag);
        $nag.find(".subscribe").on('click', function(){ self.log_subscription_click(); });
        $nag.find(".dismiss").on('click', function(){ self.dismiss_adblock_nag($nag); });
        ANN.set_cookie("adblock_nag_displayed", true);
        ANN.logev.server_log("adblock_nag", "displayed");
      }
    };
  
  self.dismiss_adblock_nag =
    function($nag){
      var $maincontent = $nag.closest("#maincontent");
      if ($maincontent.length){
        $nag.fadeOut(400, function(){
          $maincontent.css("position", "");
          $nag.remove();
        });
        ANN.set_cookie("adblock_nag_dismissed", true, 86400);
        ANN.logev.server_log("adblock_nag", "dismissed");
      }
    };
  
  self.should_adblock_nag =
    function(){
      return !ANN.get_cookie("adblock_nag_dismissed") && self.adblocked && self.can_adblock_nag && self.adblock_naggable;
    };
  
  self.log_adblock_nag_status =
    function(){
      if (!self.adblocked && ANN.get_cookie("adblock_nag_displayed")){
        ANN.delete_cookie("adblock_nag_displayed");
        ANN.logev.server_log("adblock_nag", "unblocked");
      }
    };
  
  self.log_subscription_click =
    function(){
      if (!ANN.get_cookie("adblock_nag_subscribing")) {
        ANN.logev.server_log("adblock_nag", "subscribing");
      }
      ANN.set_cookie("adblock_nag_subscribing", true, 3*3600);
    };
  
  self.log_subscription_conversion_status =
    function(){
      var subscriber = ANN.user_preferences.available_schema.includes("no_network_ads");
      if (subscriber && ANN.get_cookie("adblock_nag_subscribing")) {
        ANN.logev.server_log("adblock_nag", "subscribed");
        ANN.delete_cookie("adblock_nag_subscribing");
      }
    };
  
  self.playwire_init =
    function(){
      var ev = ANN.logev.log("ads:render", { sponsor_name: "Playwire" });
      
      //Once Playwire has loaded, setup where the container div should be
      //placed and instanciate a video ad.
      ramp.onReady = function(){
        var div = J('<div id="playwire-video-undock"></div>');
        var side;
        if (ANN.layout.mode.sidebar) side = J('#sidebar')[0];
        if (ANN.layout.mode.grid > 1 && !side) side = J('#aside')[0];
        if (side) {
          ev.log('ramp.onReady', 'desktop:side');
          div.addClass('pw-side');
          div.prependTo(side);
          ramp.onPlayerReady = setup_close_button_for_desktop;
        }
        else {
          div.insertBefore('#page');
          var de = document.documentElement;
          var maxheight = Math.min(250, de.clientHeight * 0.5);
          var maxwidth = maxheight / 0.5625;
          if (de.clientWidth <= maxwidth || ANN.layout.mode.menu == 2) {
            ev.log('ramp.onReady', 'mobile:top');
            div.addClass('pw-top');
            ramp.mobile_layout = true;
          }
          else {
            ev.log('ramp.onReady', 'desktop:top-right');
            div.addClass('pw-topright');
            div.css('width', Math.min(maxwidth, de.clientWidth - 60))
               .css('margin', '1px 20px 0 auto');
            ramp.onPlayerReady = setup_close_button_for_desktop;
          }
        }
        
        ramp.isMobile = !!ramp.mobile_layout;
        ramp.settings.isMobile = ramp.isMobile;
        ramp.settings.device = ramp.isMobile ? 'mobile' : 'desktop';
        
        ramp.destroyUnits('all');
        ramp.addUnits([ { type: 'trendi_video' } ])
            .then(function(){ ramp.displayUnits() })
            .catch(function(e){ console.log('ramp.displayUnits error: ', e); });
      };
      
      //Once a desktop video ad has appeared, setup the close button
      function setup_close_button_for_desktop(){
        var button = J('<div id="trendi-close"></div>');
        button.on('click', function(){
          if (!button.countdown) {
            window.ramp.destroyUnits('trendi_video');
            button.remove();
            button = null;
          }
        });
        button.appendTo('#tyche_trendi_video_container');
        
        function render_button(){
          if (button.countdown) {
            button.html(button.countdown);
            button.countdown -= 1;
          }
          else {
            button.html('<svg width="32" height="32"> <line x1="11" y1="11" x2="21" y2="21" style="stroke:rgb(255,255,255);stroke-width:3"></line>   <line x1="21" y1="11" x2="11" y2="21" style="stroke:rgb(255,255,255);stroke-width:3"></line> </svg>');
            clearInterval(button.countdown_timer);
          }
        }
        
        Bolt.on('tyche_trendi_video', Bolt.BOLT_AD_STARTED, function(){
          button.countdown = 5;
          render_button();
          button.countdown_timer = setInterval(render_button, 1000);
        });
        
        Bolt.on('tyche_trendi_video', Bolt.BOLT_CONTENT_STARTED, function(){
          button.countdown = 0;
          render_button();
        });
      };
    
    };
  
});


(function(load){
  load(ANN.quicknav = {});
})(function(self){
  
  self.popup =
    function(span){
      span = J(span);
      var li = span.parent().parent(),
          ul = li.parent(),
          above = li.prev().length,
          below = li.nextAll().find('h4').length,
          nothing = (li.attr('data-quicknav') == '0'),
          only = (!above && !below && ul.hasClass('colspan2of3')),
          has_links = li.next().find('a').length > 0,
          menu = span.next();
          
      if (menu.length == 0){
        menu=span.after(
          '<div class="qn-menu off">'+
            (nothing ? 'Customize the ANN menu with the links you want; commonly<br>accessed pages, or useful pages not found in the menu, etc.<br><br>' : '')+
            '<div>add current page</div>'+
            '<div>edit links</div>'+
            '<div>rename this category</div>'+
            '<div>delete this category</div>'+
            '<div>add a category</div>'+
            (only ? '' : 'move<span>←</span><span>↑</span><span>↓</span><span>→</span>')+
          '</div>'
        ).next();
        menu.find('div:eq(0)').on('click', self.event(self.add_link));
        menu.find('div:eq(1)').on('click', self.event(self.edit_links));
        menu.find('div:eq(2)').on('click', self.event(self.rename));
        menu.find('div:eq(3)').on('click', self.event(self.delete_nav));
        menu.find('div:eq(4)').on('click', self.event(self.add_category));
        menu.find('span:eq(0)').on('click', self.event(self.move,"left"));
        menu.find('span:eq(1)').on('click', self.event(self.move,"up"));
        menu.find('span:eq(2)').on('click', self.event(self.move,"down"));
        menu.find('span:eq(3)').on('click', self.event(self.move,"right"));
      }
      
      menu.find('div:eq(1)').toggleClass('inactive', !has_links);
      menu.find('div:eq(3)').toggleClass('inactive', has_links || nothing);
      
      menu.find('span:eq(0)').toggleClass('inactive', ul.prev().length==0);
      menu.find('span:eq(1)').toggleClass('inactive', !above);
      menu.find('span:eq(2)').toggleClass('inactive', !below);
      menu.find('span:eq(3)').toggleClass('inactive', !(ul.next().next().length||above||below));
      
      ANN.toggle(menu);
      span.closest('div.menu').find('>div').addClass('overflow-ok');
    };
  
  self.event =
    function(fn, param){
      return function(){
        if (J(this).hasClass('inactive')) return;
        var li = J(this).parents('.quicknav').first();
        var c = li.find('h4').length;
        fn(li, c ? "category" : "link", param);
        if (c) ANN.toggle(this.parentNode);
      };
    };
  
  self.add_link =
    function(li){
      var txt = J('title').text().split(/( - )?Anime News Network/)[0];
      txt = prompt('Add the current page to your quicknav as:', txt);
      if (txt && txt.match(/\S/)){
        self.post('new!', {
          category: li.attr('data-quicknav'),
          name: txt,
          url: document.location.href
        })
      }
    };
  
  self.edit_links =
    function(category){
      var next_category = category.nextAll().find('h4').parent();
      var links = category.nextUntil('.category');
      links.each(function(){
        if (J(this).find('.qn-menu').length==0) J(this)
          .append('<div class="qn-menu on"><span>rename</span><span>delete</span><span>↑</span><span>↓</span></div>')
          .find('.qn-menu span')
          .first().on('click', self.event(self.rename))
          .next().on('click', self.event(self.delete_nav))
          .next().on('click', self.event(self.move,"up"))
          .next().on('click', self.event(self.move,"down"));
      });
      links.toggleClass('editing');
      links.find('span').removeClass('inactive');
      links.first().find('.qn-menu span:eq(2)').addClass('inactive');
      links.last().find('.qn-menu span:eq(3)').addClass('inactive');
    };
  
  self.rename =
    function(li, type){
      var txt = prompt('Rename this quicknav '+type+':', li.find('span,a').first().text());
      if (txt && txt.match(/\S/)){
        self.post('edit!', { name: txt, id: li.attr('data-quicknav') });
      }
    };
  
  self.delete_nav =
    function(li, type){
      if (confirm('delete this quicknav '+type+'?')){
        self.post('delete!', { id: li.attr('data-quicknav') });
      }
    };
  
  self.add_category =
    function(li){
      var txt = prompt('Add a quicknav category:');
      if (txt && txt.match(/\S/)){
        self.post('new!', { name: txt });
      }
    };
  
  self.move =
    function(li, type, dir){
      self.post('move!', { id: li.attr('data-quicknav'), dir:dir });
    };
  
  self.post =
    function(url, data){
      J.ajax('/account/quicknav/'+url, {
        data: data,
        type: "POST",
        dataType: "html",
        success: function(data, textStatus, jqXHR){
          var nav = J('#mega .user.menu nav');
          nav.children().not('.system').remove();
          nav.prepend(data);
          ANN.mega_nav.adjust_height();
        },
        error: ANN.notifications.generic_error_handler
      });
    };

});


(function(load){
  load(ANN.images = {});
})(function(self){
  
  self.init =
    function(){
      J('.image-list div[data-properties]').each(function(){
        self.init_image(J(this), JSON.parse(J(this).attr('data-properties')));
      });
      J('.image-list ins input[type="file"]')
        .on('change', self.upload)
        .closest('ins')
        .wrap('<form/>');
    };
  
  self.init_image =
    function(div, file){
      if (!file.width){
        //in case the image size is not yet stored in the DB, get it from the
        //image itself (this used to be the case for youtube)
        var img = div.hide().append('<img>').find('img');
        ANN.debug.popup('no width for '+file.path);
        if (!file.id) file.id = file.path;
        img.attr('src', file.path).imagesLoaded(function(){
          if (!img[0].naturalWidth) return;
          file.width = img[0].naturalWidth;
          file.height = img[0].naturalHeight;
          file.focal_position = 'center';
          img.remove();
          div.show();
          self.init_image(div, file);
        });
        return;
      }
      var imageprefix = div.closest('.image-list').find('[name="imageprefix"]');
      var thumb = file.path.replace(/images/,'thumbnails/cover140x80');
      div[0].file_properties = file;
      div.attr('data-path', file.path);
      div.css('background', 'url('+thumb+') no-repeat '+file.focal_position);
      div.css('background-size', 'cover');
      //in Safari it's necessary to create this imgElement in advance and give
      //it time to load in order to get the natural{Width,Height}
      div.imgElement = J('<img src="'+thumb+'">');
      div.on('click', function(){ self.choose_file(div, file); });
      var details = '<span>'+file.basename+'</span>';
      details += '<br><span>('+file.width+'x'+file.height+')</span>';
      J(details).appendTo(div);
      if (imageprefix.length){
        J('<del>&#x2718;</del>')
          .appendTo(div)
          .on('click', function(ev){ ev.stopPropagation(); self.delete_file(file,imageprefix.val()); });
      }
    };
  
  self.upload =
    function(){
      self.upload_file(this);
    };
  
  self.upload_file =
    function(input, options){
      var mime = input.files[0].type;
      var form = input.form;
      var url = input.dataset.url;
      if (!mime.match(/image\/(jpeg|webp|gif|png)/)) {
        form.reset();
        return alert('Uploaded file must be a jpeg/webp/gif/png image, not '+mime);
      }
      var progress = J('<progress></progress>').appendTo(form);
      var formData = new FormData(form);
      J.ajax(J.extend({
        url: url || '/image/upload!',
        type: 'POST',
        dataType: 'json',
        xhr: function(){  // Custom XMLHttpRequest for progress bar
          var myXhr = J.ajaxSettings.xhr();
          if (myXhr.upload) {
            myXhr.upload.addEventListener('progress', function(e){
              if (e.lengthComputable) {
                progress.prop({value: e.loaded, max: e.total});
              }
            });
          }
          return myXhr;
        },
        // Ajax events
        success: function(data){ self.add_file(data, input); },
        error: function(){ alert('upload error'); },
        complete: function(){ form.reset(); progress.remove(); },
        // Form data
        data: formData,
        contentType: false,
        processData: false
      },options));
    };
  
  self.add_file =
    function(file, input){
      var imagelist = input.closest('.image-list');
      var removed = J('.image-list').find('div[data-path="'+file.path+'"]').remove();
      var div = J('<div/>').appendTo(imagelist);
      self.init_image(div, file);
      self.choose_file(div, file);
    };
  
  self.choose_file =
    function(div, file){
      function callback(){
        self.choose_file.dblclick = null;
        if (self.onSelect)
          if (self.onSelect(div, file) === false)
            return;
        J('.image-list .selected').removeClass('selected');
        div.addClass('selected');
      }
      if (self.choose_file.dblclick || file.focal_position.match(/center/)){
        clearTimeout(self.choose_file.dblclick);
        ANN.modal("/image/focal_area?id="+file.id, file, callback, self.onOpen);
      }
      else
        self.choose_file.dblclick = setTimeout(callback, 300);
    };
  
  self.delete_file =
    function(file, imageprefix){
      if (confirm('Delete '+file.path+' ?')){
        J.ajax({
          type: 'POST',
          url: '/image/delete!',
          data: { id:file.id, imageprefix:imageprefix },
          success: function(data){
            J('.image-list').find('div[data-path="'+file.path+'"]').remove();
          },
          error: function(){ alert('cannot delete'); }
        });
      }
    };
  
  self.focal_area = {};
  
  self.focal_area.init =
    function(){
      J('.init.focal_area').each(function(){
        var new_area = {};
        var focal_area = J(this).removeClass('init');
        var file = focal_area.closest('.modal-window')[0].data;
        focal_area.find('button')
          .last()
            .on('click', ANN.modal.close)
          .end()
          .first()
            .prop("disabled", true)
            .on('click', function(){
              self.focal_area.save(focal_area, file, new_area);
            });
        
        var img = focal_area.find('img').first();
        var opt = {
          instance: true,
          imageWidth: file.width,
          imageHeight: file.height,
          onSelectEnd: function(img,area){
            if (area.width == 0){
              var xP = area.x1 / file.width;
              area.width = Math.min(file.width, file.height) * 0.6;
              area.x1 = xP * (file.width - area.width);
              area.x2 = area.x1 + area.width;
            }
            if (area.height == 0){
              var yP = area.y1 / file.height;
              area.height = Math.min(file.width, file.height) * 0.6;
              area.y1 = yP * (file.height - area.height)
              area.y2 = area.y1 + area.height;
            }
            if (xP || yP){
              self.focal_area.api.setSelection(area.x1, area.y1, area.x2, area.y2);
              self.focal_area.api.setOptions({ show: true });
              self.focal_area.api.update();
            }
            J.extend(new_area, area);
            self.focal_area.set(focal_area, file, new_area);
          },
          handles: true,
          parent: focal_area
        };
        if (file.width >= 900 && file.height >= 350 && file.width > file.height){
          opt.maxHeight = file.width * 350 / 900;
        }
        if (file.focal_area) {
          J.extend(opt, file.focal_area);
          J.extend(new_area, file.focal_area);
          new_area.width = new_area.x2 - new_area.x1;
          new_area.height = new_area.y2 - new_area.y1;
          self.focal_area.set(focal_area, file, new_area);
        }
        self.focal_area.api = img.imgAreaSelect(opt);
      });
    };
  
  self.focal_area.set =
    function(focal_area, file, area){
      function PCT(n){ return Math.round(1000*n)/10+'%'; }
      var xP = area.x1 / (file.width - area.width) * 100;
      var yP = area.y1 / (file.height - area.height) * 100;
      focal_area.find('button').first().prop("disabled", isNaN(xP)||isNaN(yP));
      if (isNaN(xP)) xP = 50;
      if (isNaN(yP)) yP = 50;
      focal_area.find('.example div').css('background-position', xP+'% '+yP+'%');
      var e = focal_area.find('.example.wide-marquee').first();
      if (e.length){
        //limit width so that scaled focal area never grows beyond 350px height
        var div = e.find('div'),
            span = e.find('span'),
            scale = parseInt(div.css('height')) / 350,
            w = span[0].w = span[0].w || parseInt(span.text()),
            w_ratio = file.width / w,
            h_ratio = (area.y2 - area.y1) / (350 * w_ratio),
            msg = '';
        if (h_ratio > 1){
          if (w_ratio > 1) msg = "Even after the picture is scaled to "+PCT(1/w_ratio)+" ("+span[0].w+"px width), the focal area is still "+Math.round(area.height/w_ratio)+"px tall; at that scale it won't fit in the 350px height of the marquee, ";
          else msg = "The focal area is "+area.height+"px tall; at full scale it won't fit in the 350px height of the marquee, ";
          w = Math.round(w / h_ratio);
          if (w >= 900)  msg += "so the image will be limited to "+PCT(w/file.width)+" scale to ensure the entire focal area is visible.";
          else msg += "but at "+PCT(w/file.width)+" scale the width would be smaller than 900px. So the image will be limited to "+PCT((w=900)/file.width)+" scale to ensure marquee width while maximizing how much of the focal area is visible.";
        }
        span.css('color', msg=='' ? '' : 'red').attr('title', msg);
        div.css('width', Math.floor(w*scale)+'px');
        span.text(w);
        var h = focal_area.outerHeight();
        focal_area.parent().height(h).parent().height(h);
      }
    };
  
  self.focal_area.save =
    function(focal_area, file, new_area){
      J.ajax({
        type: 'POST',
        url: '/image/focal_area!',
        data: { id:file.id, focal_area:new_area },
        success: function(data){
          J.extend(file, data);
          J('.image-list [data-path="'+file.path+'"]')
            .css('background-position', file.focal_position)
            .css('background-size', 'cover');
          ANN.modal.close(focal_area);
        },
        error: function(){ alert('cannot save'); }
      });
    };
  
});


(function(load){
  load(ANN.lazyload = {});
})(function(self){
  
  var sidebar, mainfeed, other;
  
  self.init =
    function(){
      self.renew = renew;
      J.window.on("load scroll resize", self.load_in_view);
      setTimeout(self.load_in_view, 1000);
      self.renew();
    };
  
  function pick(selector, init){
    var elements = J(selector).get();
    var result = [];
    init = !!init;
    for (var i=0; i<elements.length; i++){
      if (elements[i].pickme) result.push(elements[i]);
      elements[i].pickme = init;
    }
    return result;
  }
  
  self.renew = function(){ }; //no-op until init
    function renew(){
      pick('.lazyload:visible', true);
      pick('.text-view .lazyload');
      if (ANN.grid.mainfeed){
        sidebar = pick('#aside .lazyload');
        mainfeed = pick('.mainfeed-day .lazyload');
      }
      else{
        sidebar = pick('#sidebar .lazyload');
        mainfeed = [];
      }
      other = pick('.lazyload');
      self.load_in_view();
    };
  
  self.load_in_view =
    function(){
      while (self.load_image(mainfeed[0])) mainfeed.shift();
      while (self.load_image(sidebar[0])) sidebar.shift();
      while (self.load_image(other[0])) other.shift();
    };
  
  function cdn(src){
    if (src.match(/^\/\w/))
      return window.location.origin.replace(/\/\/\w+\./,'//cdn.') + src;
    else
      return src;
  }
  
  var scale_thumb, scale_ratio = window.devicePixelRatio;
  /*
  if (ratio > 1) {
    scale_thumb = function(str, elem){
      var m, w, h;
      if (m = str.match(/(thumbnails\/[a-z]+)(\d+)x(\d+|H)/)) {
        w = m[2];
        h = m[3];
        if (w / scale_ratio >= elem.width()) {
          if (h == 'H' || h / scale_ratio >= elem.height()) return str;
        }
        w = Math.round(w * scale_ratio);
        if (w >= 2000) return str;
        if (h != 'H') {
          h = Math.round(h * scale_ratio);
          if (h >= 2000) return str;
        }
        return str.replace(m[0], m[1] + w + 'x' + h);
      }
      return str;
    };
  }
  */
  
  self.load_image =
    function(elem){
      if (!elem) return false; //no image
      if (!elem.className.match(/lazyload/)) return true; //already loaded
      if (ANN.viewport.offset(elem) > 200) return false; //200px below the fold
      elem = J(elem);
      
      var src = cdn(elem.data("src")),
          srcset = elem.data("srcset");
      
      if (scale_thumb) {
        src = scale_thumb(src, elem);
      }
      if (elem.is('img')) {
        if (srcset) elem.prop("srcset", srcset);
        if (src) elem.prop("src", src);
      }
      else {
        if (src) elem.css("background-image", "url(" + src + ")");
      }
      
      elem.removeClass('lazyload');
      return true;
    };
  
});


(function(load){
  load(ANN.infinite_scroll = {});
})(function(self){
  
  var j = self.j = {};
  
  self.articles = {
    inserted_count: 0,
    _all: [],
    requesting: true,
    init: function(){
      var $metadata = get_last_metadata();
      var article = $metadata.data('article');
      article.title = $metadata.data('page_title');
      article.get_end = get_end_function($metadata);
      this._all.push(this.first = article);
      this.process_metadata();
    },
    all: function(){
      return this._all.sort(function(record_a, record_b){
        return record_a.date_posted - record_b.date_posted;
      });
    },
    displayed: function(){
      var records = this.all().filter(function(record){
        return !record.is_skipped && record.get_end;
      });
      records.splice(records.indexOf(this.first), 1);
      records.push(this.first);
      return records;
    },
    enqueued: function(){
      return this.all().filter(function(record){
        return !record.is_skipped && !record.get_end;
      });
    },
    find: function(id){
      return this._all.find(function(record){ return record.id === id; });
    },
    current: function(){
      var window_end = ANN.viewport.height() + J.window.scrollTop();
      var articles = this.displayed();
      var start = 0;
      
      while (articles.length > 0){
        var is_last = articles.length === 1;
        var article = articles.pop();
        var end = article.get_end();
        if (window_end >= start && (is_last || window_end <= end)){
          return article;
        }
        else{ start = end; }
      }
    },
    next_to_display: function(){
      var article = this.enqueued().pop();
      if (!article) return null;
      article.is_skipped = (
        /main-feed/.test(self.url) &&
        article.is_news !== self.articles.first.is_news &&
        !ANN.user_preferences.get('infinite_scroll_mix_news_and_interest')
      )
      return article;
    },
    display_next: function(){
      if (
        ANN.ads.should_adblock_nag() ||
        !ANN.user_preferences.get('infinite_scroll') ||
        !this.requesting ||
        ANN.viewport.offset(j.outlet[0]) > 200 ||
        ANN.sidebar.at_bottom()
      ){ return; }
      
      this.requesting = false;
      j.outlet.height(ANN.viewport.height());
      
      var article = self.articles.next_to_display();
      while (article && article.is_skipped)
        article = self.articles.next_to_display();
        
      // NOTE: if enqueued.empty?, display_next is permanently disabled
      if (!article){ self.status = 'stopped'; return; }
      
      var request_url = self.url + '/' + article.id;
      if (self.articles.inserted_count === 0)
        request_url += '?is_first_request=true';
      //request_url += (request_url.match(/?/) ? '&' : '?') + 'cb=9';
      
      J.get(request_url).done(function(html){
        self.articles.inserted_count++;
        html = J(html).addClass('infinite-scroll-item');
        try{
          var rlog = log('render', { pathname: article.url });
          j.outlet.before(html);
          ANN.ads.display_in_infinite_scroll(html.find('.iab.is:visible'), rlog);
        }
        catch (e){
          console.error(e);
        }
        
        // NOTE: workaround for css transitions. since it takes a while before an
        //  element goes live after being added to the dom, css transitions do not
        //  work. delaying the addClass should allow transitions to work
        html.delay(1).queue(function(){
          html.addClass('infinite-scroll-item--inserted').dequeue();
        });
        
        article.get_end = get_end_function(get_last_metadata());
        self.articles.process_metadata();
        ANN.lazyload.renew();
        j.outlet.height(0);
        self.update_page_history();
        self.articles.reenable_and_reattempt_to_display_next();
      }).fail(function(){
        setTimeout(self.articles.reenable_and_reattempt_to_display_next, 5000);
      });
    },
    reenable_and_reattempt_to_display_next: function(){
      self.articles.requesting = true;
      self.articles.display_next();
    },
    process_metadata: function(){
      var $metadata = get_last_metadata();
      var article = $metadata.data('article');
      var articles = $metadata.data('articles');
      this.find(article.id).title = $metadata.data('page_title');
      if (articles[0] === 'off'){
        self.articles.enqueued().forEach(function(a){ a.is_skipped = true; });
        return;
      }
      while (articles.length > 0){
        var article = articles.pop();
        if (!this.find(article.id)){ this._all.push(article); }
      }
    }
  };
  
  self.init =
    function(){
      var $metadata = get_last_metadata();
      if ($metadata.length === 0){ return; }
      
      self.url = $metadata.data('url');
      j.outlet = J('#infinite-scroll-outlet');
      
      self.articles.init();
      
      // connect event handlers
      J.window.on('scroll resize', self.observe_and_update_page);
      
      log.start_entry = ANN.logev.log('infinite_scroll:start');
      self.articles.previous = self.articles.current();
      self.observe_and_update_page();
      self.status = 'running';
    };
  
  self.observe_and_update_page =
    function(){
      self.update_page_history();
      self.articles.display_next();
    };
  
  self.update_page_history =
    function(){
      var current = self.articles.current();
      var pathname = current.url + window.location.search + window.location.hash;
      
      if (self.articles.previous && self.articles.previous.id === current.id)
        return;
      
      log('update-history', { pathname: pathname });
      history.replaceState({}, current.title, pathname);
      document.title = current.title;
      self.articles.previous = current;
    };
  
  function get_last_metadata(){ return J('.infinite-scroll-metadata:last'); }
  
  function get_end_function($metadata){
    return function(){
      var window_start = J.window.scrollTop();
      var distance_from_viewport_top_to_metadata =
        $metadata[0].getBoundingClientRect().top;
      var allowance = 0.5 * ANN.viewport.height();
      return window_start + distance_from_viewport_top_to_metadata + allowance;
    };
  }
  
  function log(name, info, parent){
    parent = parent || log.start_entry;
    
    var l = ANN.logev.log('infinite_scroll:' + name, info, parent);
    
    if (info && info.pathname){
      ANN.logev.entry.summary.last_url = location.origin + info.pathname;
      ANN.logev.entry.summary.last_url_timestamp = l.timestamp;
      ANN.logev.save();
    }
    
    return l;
  }
  
});


(function(load){
  load(ANN.user_preferences = {});
})(function(self){
  
  self.setup =
    function(){
      self.schema = ANN.safe_parse_json(ANN.Const.USERPREFS_JSON);
      self.user_is_signed_in = self.namespace !== "";
      self.changes = {};
      load_client_list();
    }
  
  self.init =
    function(){
      self.ui.init();
    };
  
  // function that returns profile THAT WAS INITIALLY SET ON PAGE LOAD
  self.get_profile =
    function(){
      if (!self.user_is_signed_in) return 'per_device';
      return self.profile_and_name[0];
    };
  
  // function that returns profile THAT IS CURRENTLY USED ON ALL PAGES
  self.get_current_profile =
    function(){
      if (!self.user_is_signed_in) return 'per_device';
      var profile = ANN.get_cookie(self.namespace + 'user_preferences_profile@');
      profile = profile || ANN.layout.mode.device;
      return profile;
    };
  
  // function that returns data_grid_profile THAT WAS INITIALLY SET ON PAGE LOAD
  self.get_data_grid_profile =
    function(){
      if (!self.user_is_signed_in) return 'per_device';
      var p = self.profile_and_name[0];
      if (p == 'desktop' || p == 'tablet' || p == 'mobile') return p;
      return ANN.layout.mode.device;
    };
  
  // return true if the param is available to the current user
  self.available =
    function(param){
      var base_param = param.split('.')[0];
      return self.available_schema.includes(base_param);
    };
  
  // functions that return: {type, default, default_profile, server_level, user_level}
  self.descriptor =
    function(param){
      var base_param = param.split('.')[0];
      return self.schema[base_param] || {};
    };
  
  // functions that return: {profile, value}
  self.pref =
    function(param){
      if (!self.available(param)) return {};
      
      // per_device
      var value = self.client_list[param];
      if (value !== undefined){
        if (is_valid_change(param, value)){ //ensure local value has expected type
          return { profile: 'per_device', value: value };
        }
      }
      
      // all OR current profile OR default OR schema default
      return J.extend({}, self.server_list[param] || pref_default(param)); // return clone instead
    };
  
  self.change =
    function(param, profile, value){
      if (!self.available(param) || !is_valid_change(param, value)){ return; }
      
      return self.changes[param] = { profile: profile, value: value };
    };
  
  // function that persists values
  self.save =
    function(){
      //persist to localStorage
      for (var param in self.changes){
        persist_change_in_client(param, self.changes[param]);
        clear_change_if_local(param);
      }
      if (Object.keys(self.changes).length === 0){
        return J.Deferred().resolve();
      }
      //sanity check
      if (!self.user_is_signed_in){
        ANN.debug.alert('non-local changes for anonymous user!?');
        self.clear_changes();
        return J.Deferred().reject();
      }
      //persist to server
      return persist_changes_in_server();
    };
  
  // function that clear queued changesets
  self.clear_changes =
    function(){
      self.changes = {};
    };
  
  // functions that return: value
  self.get =
    function(param){
      var value = self.pref(param).value
      if (value instanceof Array) return value.slice(0);
      return value;
    };
  
  self.set =
    function(param, value){
      if (is_valid_change(param, value)){
        self.clear_changes();
        self.change(param, self.effective_profile(param), value);
        self.save();
      }
      return value;
    };
  
  // helpers
  self.effective_profile =
    function(param){
      if (!self.user_is_signed_in) return 'per_device';
      
      var profile = self.pref(param).profile;
      if (profile && profile !== 'default') return profile;
      
      var base_param = param.split('.')[0];
      if (base_param === 'data_grid') return self.get_data_grid_profile();
      
      profile = self.descriptor(base_param).default_profile;
      return profile ? profile : self.get_profile();
    };
  
  // -- sub-functions of self.save
  function persist_change_in_client(param, pref){
    var profile = pref.profile;
    var value = pref.value;
    
    // NOT per_device
    if (profile !== 'per_device'){
      // remove per_device
      remove_per_device(param);
      
      // persist to server_list
      self.server_list[param] = pref;
      return;
    }
    // per_device: local only
    self.client_list[param] = value;
    save_client_list();
    // per_device: local and server
    if (self.descriptor(param).server_level)
      ANN.set_cookie(self.namespace + param + '@', JSON.stringify(value));
    else
      ANN.delete_cookie(self.namespace + param + '@');
  }
  
  function remove_per_device(param){
    // remove per_device: local only
    if (self.client_list.hasOwnProperty(param)){
      delete self.client_list[param];
      save_client_list();
    }
    // remove per_device: local and server
    ANN.delete_cookie(self.namespace + param + '@');
  }
  
  function clear_change_if_local(param){
    if (self.changes[param].profile === 'per_device'){ delete self.changes[param]; }
  }
  
  function persist_changes_in_server(){
    var data = { list: JSON.stringify(self.changes) };
    var pending = self.changes;
    self.clear_changes();
    
    return J.ajax({
      type: 'POST',
      url: '/account/preferences!',
      data: data,
      dataType: 'json'
    }).fail(function(){
      self.changes = J.extend(pending, self.changes);
    });
  }
  
  // -- functions that save or load the client list
  function save_client_list(){
    ANN.storage.set(self.namespace + 'user_preferences', self.client_list);
  }
  
  function load_client_list(){
    self.client_list = ANN.storage.get(self.namespace + 'user_preferences') || {};
    prune_unused_params_in_client_list();
    update_locality_of_params();
  }
  
  // -- function that removes params that were removed from the previous schema
  function prune_unused_params_in_client_list(){
    for (var param in self.client_list){
      if (self.descriptor(param).length === 0){
        remove_per_device(param);
      }
    }
  }
  
  // -- function that prunes the values of params in cookies ONLY
  // --   - a param value is pruned in cookies if server_level == null
  function update_locality_of_params(){
    var svalue;
    for (var param in self.schema){
      var should_be_local_and_server = self.schema[param].server_level;
      if (self.client_list.hasOwnProperty(param)){
        if (should_be_local_and_server) // if should_be_local_and_server and in_local, then reset_cookie
          ANN.set_cookie(self.namespace + param + '@', JSON.stringify(self.client_list[param]));
      }
      else if (svalue = ANN.get_cookie(self.namespace + param + '@')) // else if not_in_local and in_server, then reset_local
        self.client_list[param] = ANN.safe_parse_json(svalue);
      
      if (!should_be_local_and_server) // if local_only, then remove_cookie
        ANN.delete_cookie(self.namespace + param + '@');
    }
    save_client_list();
  }
  
  // -- function that checks presence and type-validity of the value in self.change
  function is_valid_change(param, value){
    var type = self.descriptor(param).type;
    if (type !== undefined){
      if (type === 'array' && value instanceof Array){ return true; }
      if (typeof value === type){ return true; }
      
      console.error('ANN.user_preferences: expected "' + type + '" for "' + param + '" param. Got:', value);
      return false;
    }
    else{
      console.error('ANN.user_preferences: "' + param + '" is not a known param');
      return false;
    }
  }
  
  // -- function that returns default value for param
  function pref_default(param){
    return { profile: null, value: self.descriptor(param).default };
  }
  
});


(function(load){
  load(ANN.user_preferences.ui = {});
})(function(self){
  
  var up = ANN.user_preferences;
  var jp = {};
  var j = self.j = { p: jp };
  
  var config = {
    profile_name: {
      after_save: function(){
        var $value = jp.profile_name.$value;
        if (!$value) return;
        
        var name = $value.val();
        J('.profile-picker .profile.active > a').text(name);
        J('.user-preference .profile > .dynamicoption').text(name);
      },
    },
    sidebar_images: {
      after_save: function(){
        ANN.sidebar.images(up.get('sidebar_images'), true);
      },
    },
    sidebar_minimize: {
      after_save: function(){
        ANN.sidebar.minimize(up.get('sidebar_minimize'), true);
      },
    },
    mainfeed_viewmode: {
      after_init: function(){
        var $param = jp.mainfeed_viewmode;
        var $option = $param.$option = $param.find('.view-mode > div');
        $option.on('click', config.mainfeed_viewmode.option_handler);
        $option.filter('.' + up.get('mainfeed_viewmode')).trigger('click');
      },
      after_save: function(){
        ANN.grid.set_view_mode(up.get('mainfeed_viewmode'), true);
        ANN.grid.track(up.get('mainfeed_viewmode'));
      },
      option_handler: function(){
        jp.mainfeed_viewmode.$option.removeClass('selected');
        jp.mainfeed_viewmode.$value.val(this.className);
        J(this).addClass('selected');
      },
    },
    grid_filters: {
      after_init: function(){
        var $param = jp.grid_filters;
        var $filter = $param.$filter = $param.find('.filter-list .filter > input[type=checkbox]');
        var value = up.get('grid_filters');
        var selector = [];
        for (var i = 0; i < value.length; i++){ selector.push('[value="' + value[i] + '"]'); }
        selector = selector.join(', ');
        
        $filter.filter(selector).prop('checked', true);
        $filter.on('click', config.grid_filters.filter_handler);
      },
      change: function(){
        return J.makeArray(jp.grid_filters.$filter.filter(':checked').map(function(){ return this.value; }));
      },
      after_save: function(){
        ANN.grid.toggle_filters(up.get('grid_filters'));
      },
      filter_handler: function(){
        var $filter = jp.grid_filters.$filter;
        var $checked = $filter.filter(':checked');
        var $coverage = $checked.filter('[value="*"], [value=local]');
        if (!$checked.length)
          $filter.prop('checked', false).filter('[value="*"]').prop('checked', true);
        else if (this.checked && $coverage.length)
          $filter.not('[value="' + this.value + '"]').prop('checked', false);
      },
    },
    easyread_text_width: {
      after_init: function(){
        var $param = jp.easyread_text_width;
        var $value = $param.$value;
        var $selector = $param.$selector = $param.find('.param-selector');
        var $custom_option = $param.$custom_option = $selector.find('option[value=custom]');
        var text_template = $custom_option.text_template = $custom_option.text();
        var value = up.get('easyread_text_width');
        
        $selector.on('change', config.easyread_text_width.selector_handler);
        
        $value.val(value);
        $selector.val(value);
        if ($value.val() === $selector.val())
          $custom_option.addClass('-hidden');
        else{
          var text = text_template.replace('{{length}}', value);
          $custom_option.prop('value', value).text(text);
          $selector.val(value);
        }
      },
      after_save: ANN.layout.easyread.update,
      selector_handler: function(){
        var $value = jp.easyread_text_width.$value;
        var $selector = jp.easyread_text_width.$selector;
        var value = $selector.val();
        
        if (value)
          $value.val(value);
        else{
          var question = 'Number of characters per line: (natural=100)';
          var error_message = '"Characters per line" must be an integer. Please input an integer value.\n\n';
          
          value = prompt(question);
          while (!(value === null || parseInt(value) > 0))
            value = prompt(error_message + question);
          
          if (parseInt(value) > 0){
            if ($selector.val(value).val() !== value){
              var text = jp.easyread_text_width.$custom_option.text_template.replace('{{length}}', value);
              jp.easyread_text_width.$custom_option.removeClass('-hidden').prop('value', value).text(text);
              $selector.val(value);
            }
            $value.val(value);
          }
          else
            $selector.val($value.val());
        }
      },
    },
    infinite_scroll: {
      after_init: function(){
        jp.infinite_scroll
          .on('change', config.infinite_scroll.value_handler)
          .trigger('change');
      },
      value_handler: function(){
        var value = jp.infinite_scroll.$value.prop('checked');
        j.form.find('[data-user-preference=infinite_scroll_mix_news_and_interest]')
          .toggleClass('-hidden', !value);
        ANN.modal.resize_container();
      },
    },
    hide_report_a_problem: {
      after_init: toggle_report_button,
      after_save: toggle_report_button,
    },
    no_top_feed: {
      after_save: function(){
        J('#topfeed').toggleClass('-hidden', up.get('no_top_feed'));
        ANN.grid.layout_was_modified();
      },
    },
    no_skin_ads: {
      after_init: function(){
        if (!jp.no_sexy_ad_skins) return;
        jp.no_sexy_ad_skins.prepend('&nbsp;&nbsp;&nbsp; ');
        jp.no_skin_ads.checkbox = jp.no_skin_ads.find('input[type="checkbox"]');
        function set_color(){
          jp.no_sexy_ad_skins.css('color', jp.no_skin_ads.checkbox.is(':checked') ? '#888' : '');
        }
        set_color();
        jp.no_skin_ads.checkbox.on('click', set_color);
      },
    },
    blocked_advertisers: {
      after_init: function(){
        var $value = jp.blocked_advertisers.$value;
        if (!$value.length) return;
        
        var options = $value.prop('options');
        if (options.length === 0) return;
        
        var values = up.get('blocked_advertisers');
        for (var i = 0; i < options.length; i++){
          var option = options[i];
          var value = parseInt(option.value);
          option.selected = !isNaN(value) && values.includes(value);
        }
      },
      change: function(){
        var $value = jp.blocked_advertisers.$value;
        if (!$value.length) return up.get('blocked_advertisers');
        
        var options = $value.prop('selectedOptions');
        var values = [];
        
        for (var i = 0; i < options.length; i++){
          var option = options[i];
          var value = parseInt(option.value);
          if (!isNaN(value) && !values.includes(value)) values.push(value);
        }
        
        return values;
      },
    },
  };
  
  self.init =
    function(){
      j.form = J('form.user-preferences');
      j.submit_btn = j.form.find('[type="submit"]');
      if (j.form.length){
        J('.open-preferences').addClass('-hidden');
        init_params();
      }
      else
        J.document.on('click', '[data-user-preferences-action-open]', self.open);
    };
  
  // initialization methods ////////////////////////////////////////////////////
  function init_params($mwindow){
    self.is_modal = $mwindow;
    j.form = $mwindow ? $mwindow.find('.user-preferences') : J('.user-preferences');
    if (!j.form.length) return;
    
    // template for profile selector
    j.profile = J(
      '<select class="param-profile">'+
        '<option value="per_device">This Device Only</option>'+
        '<option class="dynamicoption"></option>'+
        '<option value="all">All Devices</option>'+
      '</select>'
    );
    j.profile.find('.dynamicoption').val(up.profile_and_name[0])
                                   .text(up.profile_and_name[1]);
    
    // attach event handlers
    j.form.on('submit', self.save);
    
    // init each params
    init_profile_name();
    for (var base_param in up.schema) init_param(base_param);
    
    if (self.is_modal) ANN.modal.resize_container();
  }
  
  function init_profile_name(){
    var $param = j.form.find('[data-user-preference="profile_name"]');
    if (!$param.length) return $param.remove();
    jp['profile_name'] = $param;
    $param.addClass('user-preference');
    $param.$value = $param.find('.param-value');
    $param.oldvalue = $param.$value.val();
  }
  
  function init_param(param){
    var $param = jp[param] = j.form.find('[data-user-preference="' + param + '"]');
    
    if (!up.available(param) || !$param.length){
      $param.remove();
      delete jp[param];
      return;
    }
    
    // render template
    $param.closest('.group').removeClass('-hidden');
    $param.addClass('user-preference');
    
    var opts = ($param.data('user-preference-action-render') || '').trim().split(/\s+/);
    var $label = $param.find('label').first();
    if (!opts.includes('manual')){
      if ($label.length == 0){
        $label = J('<label>' + $param.html().trim() + '</label>');
        $param.html($label);
      }
      if (!opts.includes('no-value')){
        switch (up.schema[param].type){
          case 'string': $label.append('<input class="param-value" type="text">'); break;
          case 'number': $label.append('<input class="param-value" type="number">'); break;
          case 'boolean': $label.append('<input class="param-value" type="checkbox">'); break;
          default: $label.append('<input class="param-value" type="hidden">'); break;
        }
      }
    }
    $label.after(j.profile.clone());
    $param.append($param.next('dfn'));
    
    // dom vars
    var $profile = $param.$profile = $param.find('.param-profile');
    var $value = $param.$value = $param.find('.param-value');
    
    // val vars
    var profile = up.effective_profile(param);
    var value = up.get(param);
    
    // dom+val profile
    if ($profile.length){
      if (!up.user_is_signed_in) $profile.on('change', alert_to_register);
      $profile.val(profile);
    }
    
    // dom+val value
    if ($value.length){
      switch (up.schema[param].type){
        case 'string':
        case 'number': $value.val(value); break;
        case 'boolean': $value.prop('checked', value); break;
      }
    }
    
    // after_init
    var after_init = (config[param] || {}).after_init;
    if (after_init) after_init();
  }
  
  // save/change methods ///////////////////////////////////////////////////////
  self.check_all_group =
    function(e){
      var elem = e.feedback_target = J(e.target);
      elem.closest('.group').find('input[type="checkbox"]:not(:checked)').click();
      self.save(e);
    };
  
  self.save =
    function(e){
      e.preventDefault();
      
      if (change_profile_name() === false) return;
      
      function feedback(status){
        ANN.show_feedback(e.feedback_target || j.submit_btn, status);
      }
      
      for (var i = 0; i < up.available_schema.length; i++)
        change_param(up.available_schema[i]);
      
      var changed_params = Object.keys(up.changes);
      
      if (changed_params.length === 0)
        feedback(0); //no change
      else{
        feedback(null); //saving...
        up.save()
          .done(J.proxy(feedback, this, true)) //saved
          .fail(J.proxy(feedback, this, false)); //not saved
      }
      
      for (var i = 0; i < changed_params.length; i++){
        var param = changed_params[i]; var after_save;
        if (after_save = (config[param] || {}).after_save) after_save();
      }
      
      if (self.is_modal)
        ANN.modal.close(j.form);
    };
  
  function change_profile_name(){
    if (jp.profile_name){
      var blank = /^\s*$/.test(jp.profile_name.$value.val());
      jp.profile_name.toggleClass('error', blank);
      if (blank){
        ANN.viewport.scroll_until(jp.profile_name);
        return false;
      }
      var nvalue = jp.profile_name.$value.val();
      if (!eql(jp.profile_name.oldvalue, nvalue)){
        up.changes['profile_name'] = { profile: up.get_profile(), value: nvalue };
      }
    }
  }
  
  function change_param(param){
    if (!jp.hasOwnProperty(param)) return;
    
    // callback
    var change = (config[param] || {}).change;
    
    // dom vars
    var $param = jp[param];
    var $profile = $param.$profile;
    var $value = $param.$value;
    
    // pval vars
    var profile = up.effective_profile(param);
    var value = up.get(param);
    
    // nval vars
    var nprofile = $profile.length ? $profile.val() : profile;
    var nvalue;
    if (change)
      nvalue = change();
    else if (!$value.length)
      nvalue = value;
    else{
      switch ($value.prop('type')){
        case 'radio':
        case 'checkbox': nvalue = $value.prop('checked'); break;
        case 'number': nvalue = parseFloat($value.val()); break;
        default: nvalue = $value.val(); break;
      }
    }
    
    if (profile === nprofile && eql(value, nvalue)) return;
    up.change(param, nprofile, nvalue);
  }
  function eql(a, b){
    if (!(a instanceof Array) || !(b instanceof Array)) return a === b;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++){ if (a[i] !== b[i]){ return false; } }
    return true;
  }
  
  // modal-related methods /////////////////////////////////////////////////////
  self.open =
    function(){
      var groups = J(this).data('user-preferences-action-open') || '';
      
      //if there is a sidebar preferences in the page but it has been minimized
      //show the sidebar preferences as well in this modal dialog
      if (!/\bsidebar\b/.test(groups)){
        var sidebar_prefs = J('[data-user-preferences-action-open=sidebar]');
        if (sidebar_prefs.is(':visible') && up.get('sidebar_minimize')) groups += ' sidebar';
      }
        
      if (groups !== '') groups = '?groups=' + groups.replace(/\s/g, '%20');
      ANN.modal('/account/preferences' + groups, null, null, init_params);
    };
  
  // callback methods //////////////////////////////////////////////////////////
  function toggle_report_button(){
    J('.report_button').toggleClass('-hidden', up.get('hide_report_a_problem'));
  }
  
  // event handler methods /////////////////////////////////////////////////////
  function alert_to_register(){
    var $select = J(this);
    var name = $select.find('option:checked').text();
    $select.val('per_device');
    alert('"' + name + '" profile is only available for registered users.');
  }
  
});

(function(load){
  load(ANN.logev = {});
})(function(self){
  
  self.setup =
    function(){
      // init_browser_id
      self.browser_id = ANN.storage.get('logev_browser_id');
      if (!self.browser_id){
        ANN.storage.set('logev_browser_id', self.browser_id = Date.now());
      }
      
      // init_id
      self.id = Date.now();
      
      // remove excess entries
      var i, ids = self.get_ids();
      while ((i = ids.shift()) < self.start_id() || ids.length > 99) {
        ANN.storage.remove('logev_' + i);
        ANN.storage.remove('logev_start_id'); //NOCOMMIT
        ANN.storage.remove('logev_end_id'); //NOCOMMIT
      }
      
      //Entry - a single page visit. It is the top-level event. All events have
      //a timestamp (including entry), which is why it is not in "info".
      self.entry = {
        id: self.id,
        //Info - information specific to a particular event. An "entry" has it,
        //and so do sub-events. You can put arbitrary data here but it should be
        //immutable; it describes things that are true on page load.
        info: {
          url: location.href,
        },
        //Summary - only the top-level event (entry) has this property. It it
        //meant to be mutable and describe the current page state; things that
        //can or did change while the user has the page open. Ex: infinite-scroll
        //changes the last_url and window resize changes the window size.
        summary: {
          //remove?
          last_url: location.href,
          last_url_timestamp: ANN.debug.event0.getTime(),
          screen_width: window.screen.width,
          screen_height: window.screen.height,
          window_width: ANN.viewport.outerWidth(),
          window_height: ANN.viewport.outerHeight()
        },
        timestamp: ANN.debug.event0.getTime()
      };
      self.save();
      
      J.window.on('resize', summarize_window_dimensions);
      J.window.on('error', self.log_error.handler);
    };
  
  self.start_id =
    function(){
      return Date.now() - 7*86400*1000;
    };
  
  var LogEvent =
    function(name, info){
      this.name = name;
      this.info = info;
      this.timestamp = Date.now();
    };
  
  LogEvent.prototype.log =
    function(name, info){
      self.log(name, info, this);
    };
  
  LogEvent.prototype.log_error =
    function(err, name){
      self.log_error(err, name, this);
    };
  
  self.log =
    function(name, info, parent){
      parent = parent || self.entry;
      var subevent = new LogEvent(name, info);
      
      parent.subevents = parent.subevents || [];
      parent.subevents.push(subevent);
      self.save();
      
      return subevent;
    };
  
  self.log_error =
    function(err, name, parent){
      name = name || 'js_error';
      var stack = '';
      try{ stack = err.stack.trim(); }catch(e){ }
      stack = stack.split(/ *\n */);
      if (stack[0] === err.name+': '+err.message) stack.shift();
      self.log(name, {
        message: err.message,
        type: err.name,
        stack: stack,
      }, parent);
    };
  
  self.log_error.handler =
    function(event){
      event = event.originalEvent || event;
      if (event.error)
        self.log_error(event.error);
      else{
        self.log('js_error', {
          message: event.message,
          type: event.type,
          source: event.filename+':'+event.lineno+':'+event.colno,
        });
      }
    };
  
  function numeric_sort(a, b){ return a - b; }
  
  self.get_ids =
    function(){
      var ids = [];
      for (var k in localStorage) {
        if (k.match(/^logev_(\d+)$/)) {
          ids.push(parseInt(RegExp.$1));
        }
      }
      ids.sort(numeric_sort);
      return ids;
    };
  
  self.get_history =
    function(){
      var history = [];
      var i, ids = self.get_ids();
      while ((i = ids.shift()) < self.id) {
        var entry = ANN.storage.get('logev_' + i);
        history.push(entry);
      }
      history.push(self.entry);
      return history;
    };
  
  self.save =
    function(){
      if (self.id >= self.start_id()){
        ANN.storage.set('logev_' + self.id, self.entry);
      }
    };
  
  self.reduce_history =
    function(){
      var to_remove = 0, start = self.start_id(), history_size = {};
      var i, ids = self.get_ids();
      while ((i = ids.shift()) <= self.id) {
        var k = 'logev_' + i;
        var v = ANN.storage.getStr(k) || '';
        to_remove += history_size[i] = k.length + v.length;
      }
      to_remove -= 100000; //exclude the most recent 100K
      to_remove *= 0.30; //remove 30% of the rest
      for (i in history_size) {
        if (to_remove <= 0) break;
ANN.debug.msg('remove logev_'+i, history_size[i]);//NOCOMMIT
        to_remove -= history_size[i];
        ANN.storage.remove('logev_' + i);
      }
    };
  
  function summarize_window_dimensions(){
    self.entry.summary.window_width = ANN.viewport.outerWidth();
    self.entry.summary.window_height = ANN.viewport.outerHeight();
    self.save();
  }
  
  // info can be hash or string
  self.server_log =
    function(name, info){
      var params = "";
      if (typeof info === "string"){
        if (info) params = "?" + info;
      }
      else{
        info = info || {};
        params = [];
        for (var param in info){
          var value = (info[param] || "").toString();
          params.push(param + "=" + encodeURIComponent(value));
        }
        params = params.join("&");
        if (params) params = "?" + params;
      }
      
      return J.ajax(ANN.hide_url("/logger." + name + params));
    };
  
});


(function(load){
  load(ANN.logev.reporter = {});
})(function(self){
  
  var j = self.j = {};
  
  self.init =
    function(){
      var button = J('button.report_button');
      var n = button.find('span').width()+1; //find size based on text
      button.css({right: -n, width: 36+n});
      
      J.body.on('click', '[data-report-button]', function(e){
        e.preventDefault();
        ANN.modal('/logev/reporter/', document.documentElement.outerHTML, null, self.modal_on_open);
      });
    };
  
  self.modal_on_open =
    function(modal_window){
      self.logs = ANN.logev.get_history();
      
      j.form = J('.logev_reporter');
      j.page = j.form.find('.page.current');
      j.page4 = j.form.find('.page4');
      j.categories = j.form.find('[name="report[categories][]"]');
      j.description = j.form.find('textarea[name="report[description]"]');
      j.email_address = j.form.find('[name="report[email_address]"]');
      j.urladder_list = j.form.find('.urladder_list');
      j.location = j.form.find('[name="report[location]"]');
      j.location_details = j.form.find('[name="report[location_details][]"]');
      j.back_btn = j.form.find('.back.btn');
      j.next_btn = j.form.find('.next.btn');
      
      j.form.on('submit', form_handler);
      j.categories.on('click', categories_handler);
      j.description.on('input', description_handler);
      j.location.on('click', location_handler);
      j.back_btn.on('click', btn_handler);
      j.next_btn.on('click', btn_handler);
      j.form.find('.add.btn').on('click', add_handler);
      
      j.rcategories = j.form.find('#review-categories');
      j.rdescription = j.form.find('#review-description');
      j.remail_address = j.form.find('#review-email-address');
      j.rproblem_pages = j.form.find('#review-problem-pages');
      
      self.page_handlers[1]();
      
      j.form.find('[name="report[browser_id]"]').val(ANN.logev.browser_id);
      j.form.find('[name="report[source_code]"]').val(modal_window[0].data);
      j.form.find('[name="report[logs_json]"]').val(JSON.stringify(self.logs));
      j.form.find('.currenturl a').prop('href', window.location.href).text(window.location.href);
      populate_urllist();
    };
  
  // handlers should return true if exection of parent function must continue
  self.page_handlers = [];
  self.page_handlers[0] = close_modal;
  self.page_handlers[1] =
    function(){
      j.back_btn.text('Close'); // initial text
      categories_handler();
      j.next_btn.text('Next');
      return true;
    };
  self.page_handlers[2] =
    function(){
      j.back_btn.text('Back');
      description_handler();
      j.next_btn.text('Next');
      return true;
    };
  self.page_handlers[3] =
    function(){
      j.back_btn.text('Back');
      j.next_btn.text('Next').prop('disabled', true);
      j.location.filter(':checked').trigger('click');
      return true;
    };
  self.page_handlers[4] =
    function(){
      j.back_btn.text('Back');
      j.next_btn.prop('disabled', true).text('Next');
      location_details_handler();
      return true;
    };
  self.page_handlers[5] =
    function(){
      var s;
      j.next_btn.prop('disabled', false).text('Submit');
      
      s = j.categories.filter(':checkbox:checked').map(function(){
        return '<li>' + J(this).closest('.checkbox').text().trim() + '</li>';
      }).get().join('');
      j.rcategories.html(s);
      
      s = J.map(j.description.val().split(/\n+/), function(l){
        if (/^\s*$/.test(l)){ return ''; }
        return '<div>' + l + '</div>';
      }).join('');
      j.rdescription.html(s);
      
      s = j.email_address.val();
      if (/^\s*$/.test(s)){ s = 'none'; }
      j.remail_address.text(s);
      
      var location = j.location.filter(':checked').val();
      if (location === 'unspecified'){
        s = '<li>unspecified</li>';
      }
      else if (location === 'other'){
        s = j.form.find('[name="report[location_details][]"]:enabled').map(function(){
          return '<li><a target="_blank" href="' + this.value + '">' + this.value + '</a></li>';
        }).get().join('');
      }
      else{
        s = '';
        if (location === 'current'){ s = '<li>current — <a target="_blank" href="' + window.location.href + '">' + window.location.href + '</a></li>'; }
        s += j.form.find('[name="report[location_details][]"]:enabled:checked:checkbox').map(function(){
          var $item = J(this).closest('.checkbox').clone();
          $item.find('input').remove();
          return '<li>' + $item.html() + '</li>';
        }).get().join('');
      }
      j.rproblem_pages.html(s);
      
      return true;
    };
  self.page_handlers[6] =
    function(){
      j.back_btn.hide();
      j.next_btn.prop('disabled', false).text('Close');
      return true;
    };
  self.page_handlers[7] = close_modal;
  
  function populate_urllist(){
    var $urllist = j.page4.find('.urllist');
    var $template = j.form.find('.template.for-checkbox').children().first();
    var entry_date = new Date(ANN.logev.entry.summary.last_url_timestamp);
    
    for (var i = self.logs.length - 2; i >= 0; i--){
      var $checkbox = $template.clone();
      var url = self.logs[i].summary.last_url;
      var date = new Date(self.logs[i].summary.last_url_timestamp);
      var diff_in_days = Math.floor((entry_date.getTime() - date.getTime()) / (1000 * 3600 * 24));
      var date_string = format_date(new Date(self.logs[i].summary.last_url_timestamp));
      $checkbox.find('input').prop('disabled', false).val(self.logs[i].id).on('click', location_details_handler);
      $checkbox.find('span').text(date_string);
      $checkbox.find('a').text(url).prop('href', url);
      $urllist.append($checkbox);
    }
  }
  function format_date(date){
    var edate = new Date(ANN.logev.entry.summary.last_url_timestamp);
    var diff_in_days = Math.floor((edate.getTime() - date.getTime()) / (1000 * 3600 * 24));
    return diff_in_days === 0 ? date.toLocaleTimeString() : date.toLocaleString();
  }
  
  function form_handler(e){
    e.preventDefault();
    
    J.ajax({
      url: j.form.prop('action'),
      type: j.form.prop('method'),
      data: j.form.serialize(),
      dataType: 'json'
    }).done(function(){
      self.page_handlers[6]();
      set_page(6);
    }).fail(function(){
      alert('Report Submission failed. Please report the issue to https://www.animenewsnetwork.com/bbs/phpBB2/viewforum.php?f=6 instead.');
    }).always(function(){
      j.next_btn.prop('disabled', false);
    });
  }
  
  function add_handler(){
    var $template = j.form.find('.template.for-item').children().first();
    var $item = $template.clone();
    var $url = j.form.find('.urladder > label > input');
    var url = $url.val();
    if (/^\s*$/.test(url)){ return; }
    $url.val('');
    $item.find('input').prop('disabled', false).val(url);
    $item.find('a').text(url).prop('href', url);
    j.urladder_list.append($item).find('.empty').hide();
    j.next_btn.prop('disabled', false);
    ANN.modal.resize_container();
    $item.find('i').on('click', remove_handler);
  }
  
  function remove_handler(){
    J(this).parent().remove();
    location_details_handler();
    ANN.modal.resize_container();
  }
  
  function categories_handler(){
    j.next_btn.prop('disabled', !j.categories.is(':checked'));
  }
  
  function description_handler(){
    var blank = /^\s*$/.test(j.description.val());
    j.next_btn.prop('disabled', blank);
  }
  
  function location_handler(){
    var value = j.location.filter(':checked').val();
    
    j.page4.find('input').prop('disabled', true);
    j.next_btn.prop('disabled', false);
    j.page4.removeClass('current')
      .filter('[data-choice=' + value + ']')
      .addClass('current')
      .find('input')
      .prop('disabled', false);
  }
  
  function location_details_handler(){
    var $page4 = j.page4.filter('.current');
    var location = $page4.data('choice');
    if (location === 'current')
      j.next_btn.prop('disabled', false);
    else if (location === 'previous_pages')
      j.next_btn.prop('disabled', $page4.find('.urllist input:checked').length === 0);
    else if (location === 'other'){
      if (j.urladder_list.find('.item').length > 0)
        j.next_btn.prop('disabled', false);
      else {
        j.urladder_list.find('.empty').show();
        j.next_btn.prop('disabled', true);
      }
    }
  }
  
  function btn_handler(){
    var increment = J(this).data('increment');
    var cpage = j.page.data('page');
    
    if (cpage === 5 && increment === 1){
      submit_btn_handler.call(this);
    }
    else{
      var location = j.location.filter(':checked').val();
      if (location === 'unspecified'){
        if (cpage === 3 && increment === 1)
          increment = 2;
        else if (cpage === 5 && increment === -1)
          increment = -2;
      }
      var page = cpage + increment;
      if (self.page_handlers[page]()){ set_page(page); }
    }
  }
  
  function submit_btn_handler(){
    j.next_btn.prop('disabled', true);
    j.form.submit();
  }
  
  function set_page(page){
    if (j.page){ j.page.removeClass('current'); };
    j.page =
      j.form.find('.page[data-page=' + page + ']').addClass('current');
    ANN.modal.resize_container();
    return j.page;
  }
  
  function close_modal(){
    ANN.modal.close(j.form);
  }
  
});


////////////////////////////////////////////////////////////////////////////////
// imagesLoaded Plugin
// http://github.com/desandro/imagesloaded
// MIT License. by Paul Irish et al.

// $('#my-container').imagesLoaded(myFunction)
// or
// $('img').imagesLoaded(myFunction)

// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  `this` is the container

(function($){
  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        loaded = [];
    
    function triggerCallback() {
      callback.call( $this, $images );
    }
    
    function imgLoaded( event ) {
      var img = event.target;
      if ( img.src !== blank && $.inArray( img, loaded ) === -1 ){
        loaded.push( img );
        if ( --len <= 0 ){
          setTimeout( triggerCallback );
          $images.unbind( '.imagesLoaded', imgLoaded );
        }
      }
    }
    
    // if no images, trigger immediately
    if ( !len ) {
      triggerCallback();
    }
    
    $images.bind( 'load.imagesLoaded error.imagesLoaded',  imgLoaded ).each( function() {
      // cached images don't fire load sometimes, so we reset src.
      var src = this.src;
      // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
      // data uri bypasses webkit log warning (thx doug jones)
      this.src = blank;
      this.src = src;
    });
    
    return $this;
  };
})(jQuery);


(function(load){
  load(ANN.data_grid = {});
}(function(self){
  
  self.user_configs_are_loaded = false;
  
  self.load_user_config =
    function(key, pref){
        ANN.user_preferences.server_list[key] = pref;
    };
  
  self.create =
    function(element, options){
      var config_name = options.columns.name;
      //basic structure
      var c = {columns: {cols: {}}};
      //name, profile, language, configuration_endpoint, cols, fallbacks, profile_source, language_source
      Object.deepMerge(c, options);
      var cols = c.columns.cols;
      options = c;
      options.element = J(element).first();
      
      //make this customizable via template
      // make column from 'actions' template if it exists
      var actions = element.find('template.actions').remove().html();
      if (actions){
        cols._actions = cols._actions || {
          key: '_actions',
          order: 99,
          editable: false,
        };
        cols._actions.template = actions;
      }
      
      // extend default config with user config
      var param = 'data_grid.' + options.columns.language + '.' + config_name;
      var user_config = ANN.user_preferences.get(param);
      if (user_config)
        for (var n in cols)
          Object.deepMerge(cols[n], user_config.cols[n]);
      
      // extend user config with changes
      options.columns.on_change = function(changes){
        user_config = user_config || {};
        Object.deepMerge(user_config, {cols: changes});
        ANN.user_preferences.set(param, user_config);
      };
      
      var grid = Opal.DataGrid.Frontend.Grid.$from_config(Opal.Hash.$new(options));
      options.element.find('thead.dg').addClass('top_sticky');
      if (options.create) options.create(grid);
    };
  
  // user configs, if uncached, are loaded via dynamic url. Since this can take
  // much longer than a static file and it's not even needed on most pages, we
  // load it async. But that means we have to wait for this async loading to
  // finish before initializing any datagrid. Thus we need this async_load
  // mechanism.
  
  var queue = [];
  
  self.async_load =
    function(element, options, more_options){
      Object.deepMerge(options, more_options);
      queue.push([element, options]);
      self.load_if_ready();
    };
  
  self.load_if_ready =
    function(){
      if (self.user_configs_are_loaded === false) return;
      if (typeof Opal === 'undefined') return;
      if (typeof Opal.DataGrid === 'undefined') return;
      
      while (queue.length) {
        var args = queue.shift();
        self.create.apply(null, args);
      }
    };
  
}));

(function(load){
  load(ANN.tabs = {});
}(function(self){
  
  self.init =
    function(){
      J('.tabs_container[data-target] > .tabs > .tab')
        .find("> button, > .linky")
        .on("click", select);
    };
  
  self.select =
    function(tab){
      var $tab = J(tab).first().closest(".tab");
      var $tabs = $tab.closest(".tabs");
      var $tabs_container = $tabs.closest(".tabs_container");
      if (!$tabs_container.length) return;
      
      $tabs.children(".tab").removeClass("active");
      $tab.addClass("active");
      
      var $contents = J($tabs_container.data("target"));
      if (!$contents.length) return;
      
      $contents
        .children(".content").removeClass("active")
        .eq($tab.index()).addClass("active");
    };
  
  function select(event){
    event.preventDefault();
    self.select(this);
  }
  
}));

//AJAX NOCOMMIT

(function(self){
  self.absolute_url =
    function(url, attr){
      var a = self.absolute_url.a || (self.absolute_url.a = document.createElement('a'));
      a.href = url;
      if (attr == 'fullpath') return a.pathname + a.search;
      return a[attr || 'href'];
    };
})(ANN);


//do not append ?_=1527625639 to requests
J.ajaxSetup({cache:true});//NOCOMMIT


(function(){
  //Mac OS X / Safari has some bug where Ajax requests with relative urls are
  //*sometimes* sent to the current page instead, as if the relative url was ''.
  //So we setup jQuery and Prototype ajax methods to convert the url to absolute
  //first (overriding XMLHttpRequest.open does not work in all user-agents).
  //Also we add some debugging info for the backend.
  
  function fix_ajax(url, opts, p){
    var optscopy = J.extend({}, opts);
    delete optscopy.data; //don't duplicate POST data in headers
    var optstr = JSON.stringify(optscopy);
    var headers = p ? (opts.requestHeaders = opts.requestHeaders || {}) : (opts.headers = opts.headers || {});
    if (!('crossDomain' in opts)) opts.crossDomain = (/^(https?:)?\/\/([^\/]+)/.test(url) && RegExp.$2 != document.location.host);
    var url = ANN.absolute_url(url);
    //must send X-Requested-With *before* Ajax-Opts, because if Ajax-Opts is too
    //big then all subsequent headers will not be sent.
    if (!opts.crossDomain) headers['X-Requested-With'] = 'XMLHttpRequest';
    headers['Ajax-URL'] = url;
    headers['Ajax-FW'] = p ? 'P' : 'J'
    if (url == document.location.href)
      if (url.indexOf("/myann/lists/import") < 0)
        headers['Ajax-re-request'] = 'true';
    headers['Ajax-Opts'] = optstr;
//  if (!opts.crossDomain) headers['Ajax-Stack-Trace'] = JSON.stringify((new Error()).stack); //NOCOMMIT
//  console.log('AJAX: '+url); console.log(opts);
    return url;
  }
  
  window.Prototype_setup_ajax = function(){
    Ajax.Responders.register({
      onCreate: function(ajax) {
        ajax.url = fix_ajax(ajax.url, ajax.options, true);
      }
    });
  };
  
  var original_ajax = J.ajax;
  
  J.ajax =
    function(url, opts){
      if (typeof url === 'object'){
        opts = url;
        url = opts.url;
      }
      opts = opts || {};
      opts.type = opts.type || (url.match(/!$/) ? 'POST' : 'GET');
      url = fix_ajax(url, opts);
      
      //expose a reference to the native xhr object
      var jqXHR, xhr;
      var xhr_factory = opts.xhr || J.ajaxSettings.xhr;
      opts.xhr = function(){
        xhr = xhr_factory();
        xhr.joptions = this;
        if (jqXHR) jqXHR._options1 = xhr.joptions;
        if (jqXHR) jqXHR._xhr = xhr;
        return opts._xhr = xhr;
      };
      jqXHR = original_ajax(url, opts);
      jqXHR._options0 = opts;
      if (xhr) jqXHR._options1 = xhr.joptions;
      if (xhr) jqXHR._xhr = xhr;
//      console.log(jqXHR);
      return jqXHR;
    };
  
})();




////////////////////////////////////////////////////////////////////////////////

try{
  document.domain = document.domain; //prevent ads from injecting nastiness in top window
  if (window.parent != window && window.parent.ANN){
    window.frameElement.style.display = 'none';
    throw new Error("ANN iframed in ANN");
  }
}
catch(e){
  //if this page was loaded in an iframe by error, stop everything
  if (e.message.match(/Assignment is forbidden for sandboxed iframes|ANN iframed in ANN/)){
    document.write('<plaintext style="display:none">');
    throw new Error("Page that should be in top window is running in iframe");
  }
}

////////////////////////////////////////////////////////////////////////////////

ANN.logev.setup();

J.document.ready(ANN.doc_ready);
