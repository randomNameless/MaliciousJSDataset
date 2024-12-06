(function($){
	if(!$.PRESTO){
        $.PRESTO = new Object();
    };
    
    $.PRESTO.CookieHandler = function(){
    	var that = {};
    	that.createCookie = function(name, value, days){
    		if (days) {
    			var date = new Date();
    			date.setTime(date.getTime()+(days*24*60*60*1000));
    			var expires = "; expires="+date.toGMTString();
    		}
    		else {
    			var expires = "";
    		}
    		document.cookie = name+"="+value+expires+"; path=/";
    	};
    	
    	that.readCookie = function(name){
    		var nameEQ = name + "=";
    		var ca = document.cookie.split(';');
    		for(var i=0, j=ca.length;i < j;i++) {
    			var c = ca[i];
    			while (c.charAt(0)==' ') c = c.substring(1);
    			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    		}
    		return null;
    	};
    	
    	that.eraseCookie = function(name){
    		that.createCookie(name, "", -1);
    	};
    	
    	return that;
    };
})(jQuery);