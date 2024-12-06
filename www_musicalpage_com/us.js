var us_base_url = "https://urlstats.com/";
var us_img = "counter/img/pv.gif";
var us_rand = Math.random();

if (typeof us_code == 'undefined') {
	var us_code = 0;
}

var ignore_hosts = new Array (window.location.host);
var us_s_width = screen.width;
var us_s_height = screen.height;

var us_b_width = 0;
var us_b_height = 0;
if( typeof( window.innerHeight ) != 'undefined' && typeof( window.innerWidth ) != 'undefined') {
	//Non-IE
	us_b_width = window.innerWidth;
	us_b_height = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )  ) {
	//IE 6+ in 'standards compliant mode'
	us_b_width = document.documentElement.clientWidth;
	us_b_height = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	//IE 4 compatible
	us_b_width = document.body.clientWidth;
	us_b_height = document.body.clientHeight;
}

var us_referrer = "" + document.referrer;
try {
    us_referrer = "" + parent.document.referrer
} catch (ex) {
    us_referrer = "" + document.referrer
}
us_referrer = us_referrer.substring(0, 500);
us_referrer = escape(us_referrer);

us_title = "" + document.title;
us_title = us_title.substring(0, 255);

us_url = "" + document.location;
us_url = us_url.substring(0, 255);

var custom = "";
var type = "pageview";

document.writeln(
	'<img src="' + us_base_url + us_img + 
		'?code=' + us_code + 
		'&rand=' + us_rand + 
		'&title=' + us_title + 
		'&url=' + us_url + 
		'&referrer=' + us_referrer + 
		'&s_width=' + us_s_width + 
		'&s_height=' + us_s_height + 
		'&b_width=' + us_b_width + 
		'&b_height=' + us_b_height + 
        '&custom=' + custom +
        '&type=' + type +
	'" />'
);
    
if (typeof US_CT == "undefined") {
    US_CT = { counter_set: false }; 
}

US_CT.init_counter = function() {
    
    if (US_CT.counter_set === true) {
        return;
    }
    
    US_CT.counter_set = true;
    
    us_url = us_url.substring(0, 255);
    
    var anchors = document.getElementsByTagName("a");
    var size = anchors.length;

    for (var i = 0; i < size; i++) {
                
        if(US_CT.logable_link(anchors[i].href))  
        {
            US_CT.attach_event(anchors[i]);
        }
    }   
    var url = window.location.href;
    var nohttp = url.split('//')[1];
    var host_port = nohttp.split('/')[0]
    host_port = trim(host_port);    
    var formsArray = document.getElementsByTagName("form");
    
    for (i=0; i < formsArray.length; i++)
    {       
      action_link = formsArray[i].getAttribute('action');            
      if(action_link != null)
      {        
        var action_url = document.createElement('a');
        action_url.setAttribute('href', action_link);
       
       if(US_CT.logable_link(action_url.href))  
       {   
            US_CT.attach_submit_event(formsArray[i]);  
       }
      }
      
    }  
}  
                  
US_CT.attach_submit_event = function(form) {
   form.onmousedown = US_CT.log_click_submit;
}

US_CT.log_click_submit = function() {

   var exit_url = this.getAttribute('action');
   custom = "" + exit_url;
   
   type = 'exit';
           
   var link = us_base_url + us_img + '?code=' + us_code + '&rand=' + us_rand + '&title=' + us_title + '&url=' + us_url + '&referrer=' + us_referrer + '&s_width=' + us_s_width + '&s_height=' + us_s_height + '&b_width=' + us_b_width + '&b_height=' + us_b_height + '&custom=' + custom + '&type=' + type;       
   var countImage = document.createElement("IMG");
   countImage.setAttribute("src", link);
   countImage.style.display = 'none';
   document.body.appendChild(countImage);
         
   return true;
}

US_CT.logable_link = function(s_link) {
    var a_link = s_link.parse_url();
    
    if (typeof a_link['host'] == 'undefined' || a_link['host'] == '') {
        return false;
    }

    if (in_array(a_link['host'], ignore_hosts)) {
        return false;
    }

    return true;
}
 
US_CT.attach_event = function(anchor) {
   anchor.onmousedown = US_CT.log_click;
}

US_CT.log_click = function() {
   var exit_url = escape(this.href);
   custom = "" + exit_url;   
   type = 'exit';
   
   var link = us_base_url + us_img + '?code=' + us_code + '&rand=' + us_rand + '&title=' + us_title + '&url=' + us_url + '&referrer=' + us_referrer + '&s_width=' + us_s_width + '&s_height=' + us_s_height + '&b_width=' + us_b_width + '&b_height=' + us_b_height + '&custom=' + custom + '&type=' + type;       
   var countImage = document.createElement("IMG");
   countImage.setAttribute("src", link);
   countImage.style.display = 'none';
   document.body.appendChild(countImage);

   return true;
}

US_CT.window_onload = function() {
    US_CT.window_loaded = true;
}

// register even listeners for those prior to IE 9
if (window.addEventListener) {
   window.addEventListener("load", US_CT.window_onload, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", US_CT.window_onload);
}
 
String.prototype.parse_url = function(query) {
    var url=this,
        rx=/^((?:ht|f|nn)tps?)\:\/\/(?:([^\:\@]*)(?:\:([^\@]*))?\@)?([^\/]*)([^\?\#]*)(?:\?([^\#]*))?(?:\#(.*))?$/,
        rg=[null,'scheme','user','pass','host','path','query','fragment'],
        r=url.match(rx),i,q,ret={};

    if (r==null) { return ret; }

    for (i=1; i<rg.length; i++) {
        if (r[i]!=undefined) { ret[rg[i]]=r[i]; }
        if (ret.path=='') { ret.path='/'; }
        if (query!=undefined && r[6]!=undefined) {
            var q=r[6];
            ret.query={};
            q=q.split('&');
            for (var i=0; i<q.length; i++) {
                q[i]=q[i].split('=',2);
                ret.query[unescape(q[i][0])]=unescape(q[i][1]);
            }
        }
    }
    return ret;
}

function in_array (needle, haystack, argStrict) {
    var key = '',        strict = !! argStrict;
 
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {                return true;
            }
        }
    } else {
        for (key in haystack) {            if (haystack[key] == needle) {
                return true;
            }
        }
    } 
    return false;
}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}

US_CT.init_counter();