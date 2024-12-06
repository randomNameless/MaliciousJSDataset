var CookieMgr = function() {

  return {

    /* Sets a Cookie with the given name and value.
     *
     * name       Name of the cookie
     * value      Value of the cookie
     * [days]     # of days cookie lasts (default: end of current session)
     * [path]     Path where the cookie is valid (default: path of calling document)
     * [domain]   Domain where the cookie is valid
     *              (default: domain of calling document)
     * [secure]   Boolean value indicating if the cookie transmission requires a
     *              secure transmission
     */
    setCookie: function(name, value, days, path, domain, secure)
    {
      var expires;
      if (days)
      {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = date.toGMTString();
      }
      document.cookie= name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    },

    /**
     * Gets the value of the specified cookie.
     *
     * name  Name of the desired cookie.
     *
     * Returns a string containing value of specified cookie,
     *   or null if cookie does not exist.
     */
    getCookie: function(name)
    {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1)
      {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      }
      else
      {
        begin += 2;
      }
      var end = document.cookie.indexOf(";", begin);
      if (end == -1)
      {
        end = dc.length;
      }
      return unescape(dc.substring(begin + prefix.length, end));
    },

    /**
     * Deletes the specified cookie.
     *
     * name      name of the cookie
     * [path]    path of the cookie (must be same as path used to create cookie)
     * [domain]  domain of the cookie (must be same as domain used to create cookie)
     */
    deleteCookie: function(name, path, domain)
    {
      if (this.getCookie(name))
      {
        this.setCookie(name,"",-1,path,domain);
      }
    },


    /**
     * saves the array of params to a cookie of the specified name
     *
     * cookiename name of the cookie
     * params     array of parameters
     */
    saveCookieParams: function(cookiename,params,expires,path) {
      var value = "";
      for (name in params)
      {
        value = (value.length>0?value+"&":"") + name + "=" + params[name];
      }
      this.setCookie(cookiename,value,expires,path);
    },


    /**
     * Parses a parameter string into an array of values
     */
    parseParameters: function(query) {
      var params = new Array();
      if (query) {
        var qarray = query.split("&");
        for (var i = 0; i < qarray.length; i++) {
          var keyval = qarray[i].split("=");
          if (keyval.length >= 2) {
            params[keyval[0]] = qarray[i].substring(keyval[0].length+1);
          }
        }
      }
      return params;
    }
  }
}();