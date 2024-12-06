/* Varibales */
var hoverBtns = new Array();
/* Navigatore */
var agt = navigator.userAgent.toLowerCase();
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);
var is_mobile = false;
var is_ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie6 = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.") != -1));
var is_android = (/android/gi).test(navigator.appVersion);
var is_idevice = (/iphone|ipad/gi).test(navigator.appVersion);
var is_playbook = (/playbook/gi).test(navigator.appVersion);
var is_touchpad = (/hp-tablet/gi).test(navigator.appVersion);
var is_gecko = (agt.indexOf('gecko') != -1);
var is_opera = (agt.indexOf("opera") != -1);
if (is_android || is_idevice || is_playbook || is_touchpad) { is_mobile = true; }

/* Live Chat Functions */

function __livesupport(s) {
    this.session = s;
    this.version = null;
    this.status = null;
}

__livesupport.prototype = {
    online: function () {
        $("#livechat_tn").html('<a href="#" onclick="return startChat_' + this.session + '();"><img src="//www.ticketseating.com/com/img/livechat/live-chat.png" alt="Chat" /></a>');
    },
    offline: function () {
        $("#livechat_tn").html('');
    }
}

/* Default Values Fixes  ------------------------------------------------- */

$(function () {
    $('#TSForm').keydown(function (event) {
        if (event.keyCode == 13) {
            var action = $('#' + focused_elem).data("action");
            if (action != undefined) {
                if (action.btn != undefined)
                    $('#' + action.btn).click()
            }
            return false;
        }
    });
});

var focused_elem = '';
var default_values = new Array();

$(function () {
    $(".default-value").focus(function () {
        if (!default_values[this.id]) { default_values[this.id] = this.value; }
        if (this.value == default_values[this.id]) { this.value = ''; }
        focused_elem = this.id;
        $(this).blur(function () {
            if (this.value == '') { this.value = default_values[this.id]; }
            focused_elem = '';
        });
    });
});


/* Menu Fixes  ------------------------------------------------- */

$(function () {    
    var tsME = document.getElementById("TSMenu").getElementsByTagName("li");     
    for (var i=0; i<tsME.length; i++) {         
        tsME[i].onmouseover=function() {this.className+=" over";}         
        tsME[i].onmouseout=function() {this.className=this.className.replace(new RegExp(" over\\b"), "");}     
    } 
});

$(function () {  
    for(i=0;i<hoverBtns.length;i++){
        var mel = document.getElementById(hoverBtns[i][0]);
        var mfr = document.getElementById(hoverBtns[i][0] + "_fr");
        if(is_ie6){
            mfr.style.height = hoverBtns[i][1];
        }else{
            mfr.style.height = "0px";
        }
        var tsHB = mel.getElementsByTagName("li");     
        for (var i=0; i<tsHB.length; i++) {         
            tsHB[i].onmouseover=function() {this.className+=" over";}         
            tsHB[i].onmouseout=function() {this.className=this.className.replace(new RegExp(" over\\b"), "");}     
        }  
       
   }
});

var swiftscriptelemsqjfuowu44 = document.createElement("script");
swiftscriptelemsqjfuowu44.type = "text/javascript";
var swiftrandom = Math.floor(Math.random() * 1001);
var swiftuniqueid = "sqjfuowu44";
var swifttagurlsqjfuowu44 = "//support.ticketseating.com/visitor/index.php?/LiveChat/HTML/Monitoring/cHJvbXB0dHlwZT1jaGF0JnVuaXF1ZWlkPWdoNTA5Zjc5NG8mdmVyc2lvbj00LjAxLjMyNSZwcm9kdWN0PUZ1c2lvbiZjdXN0b21vbmxpbmU9JmN1c3RvbW9mZmxpbmU9JmN1c3RvbWF3YXk9JmN1c3RvbWJhY2tzaG9ydGx5PQpmMDQwZTczZjk5OGNjMmM5MTFhN2ZjMzVlMjUwNjc5MDJjZWEwZmRm";

$(function () {
    var lcdiv = document.createElement("div");
    lcdiv.innerHTML = '<div id="proactivechatcontainersqjfuowu44"></div><div id="swifttagcontainersqjfuowu44"><div id="swifttagdatacontainersqjfuowu44"></div></div>';
    document.getElementsByTagName('body')[0].appendChild(lcdiv);
    setTimeout("swiftscriptelemsqjfuowu44.src=swifttagurlsqjfuowu44;document.getElementById('swifttagcontainersqjfuowu44').appendChild(swiftscriptelemsqjfuowu44);",1);
});

$(function () {
    var images = ["//www.ticketseating.com/com/css/menu/mdrop-bg.jpg", "//www.ticketseating.com/com/css/menu/mdrop-bgi.jpg"];
    $(images).each(function () { var image = $('<img />').attr('src', this); });
});


/* Add This Social */

addthis_pub = 'ticketseating';
addthis_logo = 'https://www.ticketseating.com/com/img/logo.jpg';
addthis_logo_background = 'FFFFFF';
addthis_logo_color = 'A6A6A6';
addthis_brand = '<div style="padding-top:2px">TicketSeating.com</div>';
addthis_options = 'favorites, digg, delicious, myspace, facebook, google, live, twitter, stumbleupon, reddit, furl, more';
var addthis_offset_top = -12;
var addthis_offset_left = -155;

function writeBookmark(text) {
    document.write('<a href="https://www.addthis.com/bookmark.php" onmouseover="return addthis_open(this, \'\', \'' + document.location.href + '\', \'' + document.title + '\')" onmouseout="addthis_close()" onclick="return addthis_sendto()">' + text + '</a>');
    document.write('<script type="text/javascript" src="//s7.addthis.com/js/152/addthis_widget.js"></script>');
}

function SendFriend() {
    window.location.href = "http://www.ticketseating.com/res/email-page/?title=" + encodeURIComponent(document.title) + "&url=" + encodeURIComponent(document.location.href)
    return false;
}

function geoshow() {
    $("#geo_panel").css("display", "block");
    $("#geo_edit").css("display", "none");
    return false;
}

function set_geozipcode(val) {
    if (val == '') {
        $.cookie("visitor_city", "-", { path: "/", domain: ".ticketseating.com" });
        $.cookie("visitor_zipcode", "-", { path: "/", domain: ".ticketseating.com" });
        window.location.href = window.location.href;
    } else if (val) {
        $.cookie("visitor_city", "", { path: "/", domain: ".ticketseating.com" });
        $.cookie("visitor_zipcode", val, { path: "/", domain: ".ticketseating.com" });
    } else {
        $.cookie("visitor_city", "", { path: "/", domain: ".ticketseating.com" });
        $.cookie("visitor_zipcode", $("#geo_zipcode").val(), { path: "/", domain: ".ticketseating.com" });
        window.location.href = window.location.href;
    }
    return false;
}


function setup_ddslider(slider, name) {
    $('#' + name).css("display", "block");
    $('#' + slider).DDSlider({
        nextSlide: '.slider_arrow_right',
        prevSlide: '.slider_arrow_left',
        selector: '.slider_selector',
        waitTime: 5000
    });
}
