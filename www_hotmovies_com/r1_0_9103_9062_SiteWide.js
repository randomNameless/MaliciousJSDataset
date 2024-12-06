function ClosePlayer()
{
	$.modal.close();
}

function CloseModalWindow()
{
	$.modal.close();
}

function RemoveFavoriteVOD(favID, favType) {
    // Warning, assumes success
    
    $.ajax({
        url: "/Favorites/Toggle",
        dataType: "json",
        data: ({
            'favID': favID,
            'favType': favType,
            'salt': +new Date()
        }),
        success: function (data) {
            $("#item_" + favID).slideUp();
        }
    });

}

function ToggleSaved(el, favID, favType) {
    if (!$(el).hasClass("active")) {
        $(el).addClass("active");
    } else {
        $(el).removeClass("active");
    }

    $.ajax({
        url: "/Favorites/ToggleFlag",
        dataType: "json",
        data: ({
            'favID': favID,
            'favType': favType,
            'flag': 'watch later',
            'salt': +new Date()
        }),
        success: function (data) {
			//alert("success");
			$("#" + favID + "_Item").slideUp();
		}
    });
}   

function AdjustSceneConfidence(scene_id, mod, callbackFunc)
{
    $.getJSON("/SceneIndex/UpdateSceneConfidence", {
        sceneID: scene_id,
        modifier: mod
    }, function (data, status) {
        if (callbackFunc != null) {
            callbackFunc(data, scene_id);
        }
    }
	);
}


function NotifyItem(item, isSexToy, type_id) {

    $.ajax({
        url: "/item/NotifyItem",
        dataType: "json",
        data: ({
            item: item,
            isSexToy: isSexToy

        }),
        success: function (data) {

            if (data != -99) {
               // alert("success");
                //alert(data);
                $("#a_notifyme").html("Remove Notification");
                $("#a_notifyme").attr("onclick", "RemoveNotifyItem(" + item + ", " + type_id + ")");
                // $("#" + itemID + "_wishlist_message").show();
            }
            else {
                //alert("fail");

            }
        }
    });

}

function RemoveNotifyItem(id, typeid, isSexToy) {
    $.ajax({
        url: "/Account/AddRemoveNotifyMe",
        dataType: "json",
        data: ({
            Type_ID: typeid,
            Item_ID: id,
            Function: "2"
        }),
        success: function (data) {
            //alert(data);
            $("#a_notifyme").html("Notify Me");
            //alert(id);
            $("#a_notifyme").attr("onclick", "NotifyItem(" + id + ", '" + isSexToy + "', " + typeid + ")");

        }
    });

}


function ListaddMovieToWishlist(customerID, itemID, userID) {
    
    $.ajax({
        url: "/Account/addToWishlist",
        dataType: "json",
        data: ({
            customerID: customerID,
            itemID: itemID,
            userID: userID,
            isMovieorSexToy: "true"
        }),
        success: function (data) {

            if (data == 1) {
                //alert("success");
                $("#" + itemID + "_a_AddToWishlist").html("Added To Wishlist");
               // $("#" + itemID + "_wishlist_message").show();
            }
            else {
                //alert("fail");

            }
        }
    });

}
//can only remove wishlist items from the wishlist list
function ListremoveFromWishlist(customerID, itemID) {
        $.ajax({
        url: "/Account/RemoveFromWishlist",
        dataType: "json",
        data: ({
            customerID: customerID,
            itemID: itemID,
            isMovieorSexToy: "true"
        }),
        success: function (data) {

            if (data == 1) {
                //alert("success");
                $("#" + itemID + "remove").hide();
                $("#" + itemID + "removedIndicator").show();
                $("#" + itemID + "_Item").slideUp();
            }
            else {
                alert(data);
                alert("fail");

            }
        }
    });

}

function RateVOD(refID, refType, rating) {

	$(".RatePositive").removeClass("active"); 
	$.ajax({
		url: "/Ratings/Rate",
		dataType: "json",
		data: ({
			'refID': refID,
			'refType': refType,
			'rating': rating,
			'salt': +new Date()
		}),
		success: function (data) {
            // Toggle Rating Indicators

        	if (data == -1) {
                $(".RateNegative").addClass("active");
                
                if ($("#voddowncount")) {
                    var newdowncount = parseInt($("#voddowncount").html()) + 1;
                    $("#voddowncount").html(newdowncount);

                    if ($("#vodupcount")) {
                        var newupcount = parseInt($("#vodupcount").html()) - 1;
                        if (newupcount >= 0 && $(".RatePositive").hasClass("active"))
                            $("#vodupcount").html(newupcount);
                    }

                    $(".RatePositive").removeClass("active"); 
                }
            }
            else if (data == 1) {
                $(".RatePositive").addClass("active");
                
                if ($("#vodupcount")) {
                    var newupcount = parseInt($("#vodupcount").html()) + 1;
                    $("#vodupcount").html(newupcount);

                    if ($("#voddowncount")) {
                        var newdowncount = parseInt($("#voddowncount").html()) - 1;
                        if (newdowncount >= 0 && $(".RateNegative").hasClass("active"))
                            $("#voddowncount").html(newdowncount);
                    }
                }

                $(".RateNegative").removeClass("active");

            }
            else {
                $(".RatePositive").removeClass("active");
                $(".RateNegative").removeClass("active");

                if (rating == "1") {
                    if ($("#vodupcount")) {
                        var newupcount = parseInt($("#vodupcount").html()) - 1;
                        $("#vodupcount").html(newupcount);
                    }
                }
                else if (rating == "-1") {
                    if ($("#voddowncount")) {
                        var newdowncount = parseInt($("#voddowncount").html()) - 1;
                        $("#voddowncount").html(newdowncount);
                    }
                }
            }

            if (refType == 2) { UpdateRatingBar("CurrentRating_Item", refID); }
            if (refType == 3) { UpdateRatingBar("CurrentRating_Cast", refID); }
        }
    });


  
}


function UpdateRatingBar(method, id) {
    $.ajax({
        url: "/Ratings/" + method,
        dataType: "json",
        data: ({
            'refID': id,
            'salt': +new Date()
        }),
        success: function(data) {
            // Update Rating Bar
            $(".Rating_Negative").attr("style", "width:" + data.downRatingPct + "%;");
            $(".Rating_Positive").attr("style", "width:" + data.upRatingPct + "%;");
        }
    });
}

// successFunc what to do when ajax succeeds
function AjaxLogin(user,pass,keep,successFunc) {

     var keeploggedin = false;
     if (keep == "checked")
          keeploggedin = true;
    
    
    $.ajax({
        url: $.secureHost + "/Account/Login",        
        async: false,
        dataType: "jsonp",
        data: ({
            userName: user, 
            passWord: pass,
            keepLogged: keeploggedin,
            'salt': +new Date()
        }),
        success: function(data){ successFunc(data); }
    });    
}

function Logout()
{
    $.ajax({
        url: "/Account/Logout",
        dataType: "json",
        data: ({
            'salt': +new Date()
        }),
        success: function (data) {
            window.location.reload(true);
        }
    });
}

function GetValue(theValue, theDefault) { return (theValue != undefined ? theValue : theDefault); }

function CurrencyFormatted(amount)
{
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

//Timespan object. Coverts a time amount into hours, minutes, and seconds.
function TimeSpan(options) {
    var defaults = {
        splitChar: ":",
        startTime: 0,
        showHours: true,
        showMinutes: true,
        showSeconds: true,
        padHours: true,
        padMinutes: true,
        padSeconds: true
    }
    var o = $.extend({}, defaults, options);

    this.currentTime = this.baseTime = o.startTime;

    

    if (isNaN(this.baseTime)) {
        var timeArray = this.baseTime.split(o.splitChar);
        var timeLength = timeArray.length;

        this.seconds = (timeLength > 0) ? (isNaN(timeArray[timeLength - 1]) ? 0 : parseInt(timeArray[timeLength - 1])) : 0;
        this.minutes = (timeLength > 1) ? (isNaN(timeArray[timeLength - 2]) ? 0 : parseInt(timeArray[timeLength - 2])) : 0;
        this.hours = (timeLength > 2) ? (isNaN(timeArray[timeLength - 3]) ? 0 : parseInt(timeArray[timeLength - 3])) : 0;
        this.days = (timeLength > 3) ? (isNaN(timeArray[timeLength - 4]) ? 0 : parseInt(timeArray[timeLength - 4])) : 0;

        this.baseTime = (this.days * 86400) + (this.hours * 3600) + (this.minutes * 60) + (this.seconds);
        this.currentTime = this.baseTime;
    }
    else {
        this.seconds = (this.baseTime % 60);
        this.minutes = ((this.baseTime - this.seconds) % 3600) / 60;
        //this.hours = ((this.baseTime - (this.minutes * 60) - this.seconds) % 86400) / 3600;
        this.hours = ((this.baseTime - (this.minutes * 60) - this.seconds)) / 3600;
       // this.days = ((this.baseTime - (this.hours * 3600) - (this.minutes * 60) - this.seconds)) / 86400;
        this.currentTime = this.baseTime;
    }
    
    this.toString = function() {
		
        return "{0}{1}{2}".format(
			(o.showHours ? ((o.padHours && this.hours < 10 ? "0" : "") + this.hours) : ""),
			(o.showMinutes ? "{0}{1}".format((o.showHours ? ":" : ""),((o.padMinutes && this.minutes < 10 ? "0" : "") + this.minutes)) : ""),
			(o.showSeconds ? "{0}{1}".format((o.showHours || o.showMinutes ? ":" : ""),((o.padSeconds && this.seconds < 10 ? "0" : "") + Math.round(this.seconds))) : "")
		);
    }

    this.toSeconds = function() {
        return (this.hours * 3600) + (this.minutes * 60) + (this.seconds);
    }

    this.subtractSeconds = function(time) {
        var amount = time;

        if ((this.currentTime - amount) < 0) {
            this.days = this.hours = this.minutes = this.seconds = this.currentTime = 0;
            return false;
        }
        else {
            while (amount > 0) {
                if (this.seconds >= amount) {
                    this.seconds -= amount;
                    amount = 0;
                    break;
                }
                else {
                    amount -= this.seconds;
                    this.seconds = 0;

                    if (this.minutes > 0) {
                        this.minutes -= 1;
                        this.seconds = 60;
                    }
                    else if (this.hours > 0) {
                        this.hours -= 1;
                        this.minutes = 59;
                        this.seconds = 60;
                    }
                    else if (this.days > 0) {
                        this.days -= 1;
                        this.hours = 23;
                        this.minutes = 59;
                        this.seconds = 60;
                    }
                    else // Ran out of time
                        break;
                }
            }

            if (amount > 0) {
                this.days = this.hours = this.minutes = this.seconds = this.currentTime = 0;
                return false;
            }
            else {
                this.currentTime -= time;
                return true;
            }
        }
    }
}

(function($) {

String.prototype.format = function() {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern, function(capture) { return args[capture.match(/\d+/)]; });
}

/*
* jQuery plugins for AE
*/

$.log = function(text) { if (typeof console!="undefined" && console.log) { console.log(text); } }
$.secureHost = (location.host.indexOf("localhost") >= 0 || location.host.indexOf("qa.") >= 0 ? "http://" : "https://") + location.host;

/* 
 * Loads a standard <a> tag's href into any element 
 * For example, $(".linkClass").loadInto("#resultBox")
 * will setup all links matched by .linkClass to load 
 * into the element matched by #resultBox
*/
$.fn.loadInto = function(eleContainer) {
	return this.each(function(){
		$(this).click(function(){
			$(eleContainer).load($(this).attr("href"));
			return false;
		});
	});
};

$.fn.timer = function(options) {
    var f = this;
    
    var defaults = {
		splitChar: ":",
		startTime: 0,
		interval: 1,
		warnWhenLow: false,
		warningTime: 60,
		autoStart: true,
		displayFormat: "{0}",
		onLowMinutes: function(){},
		onExpiration: function(){}
	}
    
    var o = $.extend({}, defaults, options);
    var parsedTime = new TimeSpan(o);

    f.html(o.displayFormat.format(parsedTime));

    this.currentlyRunning = false;
    
    this.start = function() {
        this.currentlyRunning = true;
        this.tick();
    }

    this.stop = function() {
        this.currentlyRunning = false;
    }

    this.tick = function() {
        var timeLeft = parsedTime.subtractSeconds(o.interval);
        f.html(o.displayFormat.format(parsedTime));

        if (timeLeft && this.currentlyRunning)
        {
            setTimeout(function() { f.tick(); }, 1000);
            if(o.warnWhenLow && parsedTime.toSeconds() <= o.warningTime) { this.onTimeLow(); }
        }
        else { this.onExpiration();}
    }

    this.onLowMinutes = o.onLowMinutes;
    this.onExpiration = o.onExpiration;
    
    if (o.autoStart) this.start();
    return this;
}


$.fn.MakeVisible = function(switcherIndex) {
    return this.each(function() {
        var $children = $(this).children();
        if ($children.length > 0 && !$children.eq(switcherIndex).is(":visible"))
        {
            var numberOfElements = $children.length;
            $children.fadeOut("fast", function () {
                if (--numberOfElements > 0) return;
                if ($children.eq(switcherIndex).length > 0)
                    $children.eq(switcherIndex).fadeIn();
                else
                    $children.eq(0).fadeIn();
            });
        }   
        return this;
    });
}

$.fn.ajaxFillAccountHome = function(url, options) {
    var t = this;
    if(t.data("Loaded") !== true)
    {
        $.ajax({
            url: url,
            data: options,
            beforeSend: function() {
                t.html("<span class='loading'>Loading....");
            },
            success: function(data){ 
                t.html(data); 
                t.data("Loaded",true);
                options();
            },
            error: function(){
               //try again, but this time no async:
               $.ajax({
                    url: url,
                    data: options,
                    async: false,
                    success: function(data){ 
                        t.html(data); 
                        t.data("Loaded",true);
                        options();
                    },
                    error: function(){
                       t.html("<br/><strong>Currently Unavailable</strong>"); 
                    }
                });
               //-------------
            }
        });
    }
    
    return this;
}

$.fn.clearForm = function() {
    return this.each(function() {
        var type = this.type;
        var tag = this.tagName.toLowerCase();
        if (tag == 'form')
            { return $(':input',this).clearForm(); }
        if (type == 'text' || type == 'password' || tag == 'textarea')
            { this.value = ''; }
        else if (type == 'checkbox' || type == 'radio')
            { this.checked = false; }
        else if (tag == 'select')
            { this.selectedIndex = 0; }
            
        return this;
    });
}
})(jQuery);


/*
* jQuery history plugin
*
* Copyright (c) 2006 Taku Sano (Mikage Sawatari)
* Licensed under the MIT License:
*   http://www.opensource.org/licenses/mit-license.php
*
* Modified by Lincoln Cooper to add Safari support and only call the callback once during initialization
* for msie when no initial hash supplied.
* API rewrite by Lauris Buk?is-Haberkorns
*/

(function($) {

    function History() {
        this._curHash = '';
        this._callback = function(hash) { };
    }

    $.extend(History.prototype, {

        init: function(callback) {
            this._callback = callback;
            this._curHash = location.hash;
            this._chrome = /chrome/.test(navigator.userAgent.toLowerCase());

            if ($.browser.msie && document.documentMode < 8 ) {
                // To stop the callback firing twice during initilization if no hash present
                if (this._curHash === '') {
                    this._curHash = '#';
                }

                // add hidden iframe for IE
                $("body").prepend('<iframe id="jQuery_history" style="display: none;"></iframe>');
                var iframe = $("#jQuery_history")[0].contentWindow.document;
                iframe.open();
                iframe.close();
                iframe.location.hash = this._curHash;
            }
            else if ($.browser.safari) {
                // etablish back/forward stacks
                this._historyBackStack = [];
                this._historyBackStack.length = history.length;
                this._historyForwardStack = [];
                this._isFirst = true;
                this._dontCheck = false;
            }

            this.load(this._curHash.replace(/^#/, ''));
            //this.load('');
        },

        add: function(hash) {
            // This makes the looping function do something
            this._historyBackStack.push(hash);

            this._historyForwardStack.length = 0; // clear forwardStack (true click occured)
            this._isFirst = true;
        },

        _check: function() {
            if ($.browser.msie && document.documentMode < 8) {
                // On IE, check for location.hash of iframe
                var ihistory = $("#jQuery_history")[0];
                var iframe = ihistory.contentDocument || ihistory.contentWindow.document;
                var current_hash = iframe.location.hash;
                if (current_hash != $.history._curHash) {

                    location.hash = current_hash;
                    $.history._curHash = current_hash;
                    $.history._callback(current_hash.replace(/^#/, ''));

                }
            } else if ($.browser.safari) {
                if (!$.history._dontCheck) {
                    var historyDelta = history.length - $.history._historyBackStack.length;

                    if (historyDelta) { // back or forward button has been pushed
                        $.history._isFirst = false;
                        if (historyDelta < 0) { // back button has been pushed
                            // move items to forward stack
                            for (var i = 0; i < Math.abs(historyDelta); i++) { $.history._historyForwardStack.unshift($.history._historyBackStack.pop()); }
                        } else { // forward button has been pushed
                            // move items to back stack
                            for (var j = 0; j < historyDelta; j++) { $.history._historyBackStack.push($.history._historyForwardStack.shift()); }
                        }
                        var cachedHash = $.history._historyBackStack[$.history._historyBackStack.length - 1];
                        if (cachedHash != undefined) {
                            $.history._curHash = location.hash;
                            $.history._callback(cachedHash);
                        }
                    } else if ($.history._historyBackStack[$.history._historyBackStack.length - 1] == undefined && !$.history._isFirst) {
                        // back button has been pushed to beginning and URL already pointed to hash (e.g. a bookmark)
                        // document.URL doesn't change in Safari
                        if (document.URL.indexOf('#') >= 0) {
                            $.history._callback(document.URL.split('#')[1]);
                        } else {
                            $.history._callback('');
                        }
                        $.history._isFirst = true;
                    }
                }
            } else {
                // otherwise, check for location.hash
                var current_hash = location.hash;
                if (current_hash != $.history._curHash) {
                    $.history._curHash = current_hash;
                    $.history._callback(current_hash.replace(/^#/, ''));
                }
            }
        },

        load: function(hash) {
            var newhash;

            if ($.browser.safari && !this._chrome) {
                //if ($.browser.safari) {
                newhash = hash;
            } else {
                newhash = '#' + hash;
                location.hash = newhash;
            }
            this._curHash = newhash;

            if ($.browser.msie && document.documentMode < 8) {
                var ihistory = $("#jQuery_history")[0]; // TODO: need contentDocument?
                var iframe = ihistory.contentWindow.document;
                iframe.open();
                iframe.close();
                iframe.location.hash = newhash;
                this._callback(hash);
            }
            else if (this._chrome) {
                this._callback(hash);
            }
            else if ($.browser.safari) {
                this._dontCheck = true;
                // Manually keep track of the history values for Safari
                this.add(hash);

                // Wait a while before allowing checking so that Safari has time to update the "history" object
                // correctly (otherwise the check loop would detect a false change in hash).
                var fn = function() { $.history._dontCheck = false; };
                window.setTimeout(fn, 200);
                this._callback(hash);
                // N.B. "location.hash=" must be the last line of code for Safari as execution stops afterwards.
                //      By explicitly using the "location.hash" command (instead of using a variable set to "location.hash") the
                //      URL in the browser and the "history" object are both updated correctly.
                location.hash = newhash;
            }
            else {
                this._callback(hash);
            }
        }
    });

    $(document).ready(function() {
        $.history = new History(); // singleton instance
    });

})(jQuery);


/* List Handling */
function InitAjaxLists(callback) {
    $.history.init(callback);
    
    // Wire up links for back/bookmark support
    $('a[rel="history"]').live("click", function() {
        var hash = this.href;
        hash = hash.replace(/^.*#/, '');
        $.history.load(hash);
        window.scrollTo(0, 0)
        return false;
    });
    
    // wire up Go To Page button
    $('#btn_Go').live("click", function() {
        var hash = $('#pageURLMask').val().replace('__targetPage__', $('#targetPage').val());
        hash = hash.replace(/^.*#/, '');
        $.history.load(hash);
        window.scrollTo(0,0)
        return false;
    });
}

function GoToPageNonAjax(urlQuery, targetPage, maxPages) {

    if (targetPage > maxPages) targetPage = maxPages;
    if (targetPage < 1) targetPage = 1;

    var baseURL = window.location.href.split("?")[0];

    if (targetPage != 1)
        window.location = urlQuery.replace('__targetPage__', targetPage);
    else {
        
        if (urlQuery.indexOf("&") != -1)
            window.location = baseURL + urlQuery.replace('page=__targetPage__&', "");
        else
            window.location = baseURL + urlQuery.replace('?page=__targetPage__', "");
    }

    window.scrollTo(0, 0)
    return false;
}


function GoToPage(urlQuery, targetPage, maxPages) {
    if (targetPage > maxPages) targetPage = maxPages;
    if (targetPage < 1) targetPage = 1;
    var hash = urlQuery.replace('__targetPage__', targetPage);
    hash = hash.replace(/^.*#/, '');
    $.history.load(hash);
    window.scrollTo(0, 0)
    return false;
}

function ShowFrameOptions(frameID)
{
    $("#dv_Options" + frameID).show();
}
function HideFrameOptions(frameID)
{
	$("#dv_Options" + frameID).hide();
}

//maybe?
function PublicOrPrivate(id) {
    var checked = 0;

    if ($("#chk_" + id).is(':checked')) {
        //alert("checked");
        checked = 1;
    }

    $.ajax({
        url: "/Account/ChangeClipStatus",
        dataType: "json",
        data: ({
            isPublic: checked,
            clipID: id
        }),
        success: function(data) {
            if (data == 1) {
                //success
            }
            else {
                alert("did not update")
            }
        }
    });
}

//maybe?
function DeleteMyClip(id) {

    $.ajax({
        url: "/Account/DeleteMyClip",
        dataType: "json",
        data: ({
            clipID: id

        }),
        success: function(data) {
            if (data == 1) {
                $("#dv_hid_this_" + id).fadeOut("slow");
            }
            else {
                // did not delete
            }
        }
    });

}

/*
Watermark v3.0.5 (May 9, 2010) plugin for jQuery
http://jquery-watermark.googlecode.com/
Copyright (c) 2009-2010 Todd Northrop
http://www.speednet.biz/
Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(a) { var k = "function", i = "password", c = "maxLength", e = "type", b = true, d = false, s = "watermark", t, m = s, h = "watermarkClass", p = "watermarkFocus", j = "watermarkSubmit", l = "watermarkMaxLength", g = "watermarkPassword", f = "watermarkText", r = ":data(" + m + ")", n = ":text,:password,:search,textarea", o = ["Page_ClientValidate"], q = d; a.extend(a.expr[":"], { search: function(a) { return "search" === a.type }, data: function(f, h, g) { var e, c = /^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(g[3]); if (c) { e = a(f).data(c[1]); if (e !== t) { if (c[2]) { e = "" + e; switch (c[2]) { case "=": return e == c[3]; case "!=": return e != c[3]; case "^=": return e.slice(0, c[3].length) == c[3]; case "$=": return e.slice(-c[3].length) == c[3]; case "*=": return e.indexOf(c[3]) !== -1 } } return b } } return d } }); a.watermark = { version: "3.0.5", options: { className: s, useNative: b }, hide: function(b) { a(b).filter(r).each(function() { a.watermark._hide(a(this)) }) }, _hide: function(a, i) { if (a.val() == a.data(f)) { a.val(""); if (a.data(g)) if (a.attr(e) === "text") { var d = a.data(g), b = a.parent(); b[0].removeChild(a[0]); b[0].appendChild(d[0]); a = d } if (a.data(l)) { a.attr(c, a.data(l)); a.removeData(l) } if (i) { a.attr("autocomplete", "off"); window.setTimeout(function() { a.select() }, 0) } } a.removeClass(a.data(h)) }, show: function(b) { a(b).filter(r).each(function() { a.watermark._show(a(this)) }) }, _show: function(d) { var r = d.val(), j = d.data(f), m = d.attr(e); if ((r.length == 0 || r == j) && !d.data(p)) { q = b; if (d.data(g)) if (m === i) { var o = d.data(g), n = d.parent(); n[0].removeChild(d[0]); n[0].appendChild(o[0]); d = o; d.attr(c, j.length) } if (m === "text" || m === "search") { var k = d.attr(c); if (k > 0 && j.length > k) { d.data(l, k); d.attr(c, j.length) } } d.addClass(d.data(h)); d.val(j) } else a.watermark._hide(d) }, hideAll: function() { if (q) { a.watermark.hide(n); q = d } }, showAll: function() { a.watermark.show(n) } }; a.fn.watermark = function(q, l) { var o = "string", s = typeof q === o, r; if (typeof l === "object") { r = typeof l.className === o; l = a.extend({}, a.watermark.options, l) } else if (typeof l === o) { r = b; l = a.extend({}, a.watermark.options, { className: l }) } else l = a.watermark.options; if (typeof l.useNative !== k) l.useNative = l.useNative ? function() { return b } : function() { return d }; return this.each(function() { var u = "dragleave", t = "dragenter", w = this, d = a(w); if (!d.is(n)) return; if (d.data(m)) { if (s || r) { a.watermark._hide(d); s && d.data(f, q); r && d.data(h, l.className) } } else { if (l.useNative.call(w, d)) if (("" + d.css("-webkit-appearance")).replace("undefined", "") !== "" && d.attr("tagName") !== "TEXTAREA") { s && d.attr("placeholder", q); return } d.data(f, s ? q : ""); d.data(h, l.className); d.data(m, 1); if (d.attr(e) === i) { var x = d.wrap("<span>").parent(), k = a(x.html().replace(/type=["']?password["']?/i, 'type="text"')); k.data(f, d.data(f)); k.data(h, d.data(h)); k.data(m, 1); k.attr(c, q.length); k.focus(function() { a.watermark._hide(k, b) }).bind(t, function() { a.watermark._hide(k) }).bind("dragend", function() { window.setTimeout(function() { k.blur() }, 1) }); d.blur(function() { a.watermark._show(d) }).bind(u, function() { a.watermark._show(d) }); k.data(g, d); d.data(g, k) } else d.focus(function() { d.data(p, 1); a.watermark._hide(d, b) }).blur(function() { d.data(p, 0); a.watermark._show(d) }).bind(t, function() { a.watermark._hide(d) }).bind(u, function() { a.watermark._show(d) }).bind("dragend", function() { window.setTimeout(function() { a.watermark._show(d) }, 1) }).bind("drop", function(b) { var a = b.originalEvent.dataTransfer.getData("Text"); d.val().replace(a, "") === d.data(f) && d.val(a); d.focus() }); if (w.form) { var o = w.form, v = a(o); if (!v.data(j)) { v.submit(a.watermark.hideAll); if (o.submit) { v.data(j, o.submit); o.submit = function(c, b) { return function() { var d = b.data(j); a.watermark.hideAll(); if (d.apply) d.apply(c, Array.prototype.slice.call(arguments)); else d() } } (o, v) } else { v.data(j, 1); o.submit = function(b) { return function() { a.watermark.hideAll(); delete b.submit; b.submit() } } (o) } } } } a.watermark._show(d) }).end() }; o.length && a(function() { for (var b, c, d = o.length - 1; d >= 0; d--) { b = o[d]; c = window[b]; if (typeof c === k) window[b] = function(b) { return function() { a.watermark.hideAll(); return b.apply(null, Array.prototype.slice.call(arguments)) } } (c) } }) })(jQuery);

function SetHDDefault(wantsHD, redirect) {

    if (wantsHD) {
        $("li.HD").addClass("Selected");
        $("li.SD").removeClass("Selected");
    }
    else {
        $("li.SD").addClass("Selected");
        $("li.HD").removeClass("Selected");
    }

    $.ajax({
        url: "/Account/SetDefaults",
        data: { WantsHD: wantsHD },
        success: function (data) {
            if (redirect != undefined) {
                window.location = redirect;
            }
        }
    });
}

function DisplayError(id, msg) {
    $("#" + id).addClass("Error");
    if (msg != "") {
        $("#err_" + id).html(msg).slideDown("slow");
    }
}

//Here is the function for process review 

function ProcessReview() {
    // Clear errors
    $("input.Error").removeClass("Error").html("");
    $("select.Error").removeClass("Error");
    $("span.Error").html("").animate({ width: "0px" }).stop();
    var error = false;

    // error handling
    if (($("#UserName").val() == "")) {
        DisplayError("UserName", "Please enter a name.");
        error = true;
    }

    if (($("#EmailAddress").val() == "")) {
        DisplayError("EmailAddress", "Please enter an Email address.");
        error = true;
    }

    if (($("#CommentTitle").val() == "")) {
        DisplayError("CommentTitle", "Please enter a Comment Title.");
        error = true;
    } else {
        //no html tags in Summary
        if (($("#CommentTitle").val().indexOf("<") != (-1)) || ($("#CommentTitle").val().indexOf(">") != (-1))) {
            DisplayError("CommentTitle", "HTML tags are not allowed, please remove all HTML tags from your Comment Title!");
            error = true;
        }
    }

    if (($("#CommentReview").val() == "")) {
        DisplayError("CommentReview", "Please enter a Comment.");
        error = true;
    } else {
        //no html tags in Comment
        if (($("#CommentReview").val().indexOf("<") != (-1)) || ($("#CommentReview").val().indexOf(">") != (-1))) {
            DisplayError("CommentReview", "HTML tags are not allowed, please remove all HTML tags from your Comment!");
            error = true;
        }
    }

    if (($("#SiteName").val() != "") && (($("#SiteURL").val() == "http://") || ($("#SiteURL").val() == ""))) {
        DisplayError("SiteURL", "Please enter a site url.");
        error = true;
    }

    if (!error) {
        SubmitReview();
    }
} //process review end


function SubmitReview() {
    $.ajax({
        url: "/Review/SubmitMovieReview",    // controller/action
        dataType: "json",
        type: "post",
        data: ({
            itemID: $("#currentitemid").val(),
            summary: $("#CommentTitle").val(),
            comment: $("#CommentReview").val(),
            name: $("#UserName").val(),
            email: $("#EmailAddress").val(),
            sitename: $("#SiteName").val(),
            siteurl: $("#SiteURL").val(),
            film: $("#FilmRating").val(),
            feature: $("#FeaturesRating").val(),
            audio: $("#AudioRating").val(),
            video: $("#VideoRating").val(),
            recaptcha_challenge_field: $("#recaptcha_challenge_field").val(),
            recaptcha_response_field: $("#recaptcha_response_field").val()
        }),
        success: function (data) {
            if (data) {
                $("#CommentForm").slideUp();
                $(".ThankYou").slideDown();
            }
        }
    });
}

function ShowCover(cover) {
    if (cover == "front") {
        $(".LargeBackCover").hide();
        $("#a_Back").removeClass("Selected");

        $(".LargeFrontCover").show();
        $("#a_Front").addClass("Selected");
    } else {
        $(".LargeFrontCover").hide();
        $("#a_Front").removeClass("Selected");

        $(".LargeBackCover").show();
        $("#a_Back").addClass("Selected");
    }
}


function InitHeaderADE() {
//    $("fieldset[id='LogIn'] form").makeLoginForm();

//    $("#LogIn").mouseup(function () {
//        return false;
//    });

//    $(document).mouseup(function (e) {
//        if ($(e.target).parent("#LogIn").length == 0) {
//            $("#LogIn").slideUp();
//        }
//    });
//    /* End Login */

    /* Search Bar */
    $("#btn_Search").click(function () {
       // alert("search");
        DoSearchADE2();
    });

    $("#txt_Search").keypress(function (e) {
        code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { DoSearchADE2(); }
    });

    //$("#MediaSelector").add("#CategorySelector").click(function () {
       // $(this).find(".Options").slideToggle();
    //});

    //$(document).mouseup(function (e) {
        //if ($(e.target).parent("#MediaSelector").length == 0) {
           // $("#MediaOptions").slideUp();
        //}

        //if ($(e.target).parent("#CategorySelector").length == 0 && $(e.target).parent("#CategoryOptions").length == 0) {
           // $("#CategoryOptions").slideUp();
        //}
    //});

    //$("#MediaOptions").find("a").click(function () {
        //$this = $(this);
        //$("#MediaSelector span").text($this.html());
        //$("#MediaSelector").data("search_url", $this.attr("search_url"));
      //  return false;
    //});
    /* End Search Bar */

    //$("#MediaSelector").data("search_url", $("#MediaOptions").find("a").first().attr("search_url"));
}


function DoSearchADE() {
    var searchString = $("#searchtype option:selected").attr("search_url")

    if (searchString.indexOf("gaydvdempire.com") != -1)
        searchString = searchString.replace("http:\/\/www.adultdvdempire.com", "");
    // search must at least 2 characters.
    if ($("#txt_Search").val().length < 2)
    {
        $('#txt_Search').focus(); return false;
    }
    else
        document.location.href = "{0}?q={1}".format(searchString, escape($("#txt_Search").val()));
}

function DoSearchADE2() {
    //This new search function will use the new type selector and not the dropdown box
    var searchString = $("#searchurl").val();

    if (searchString.indexOf("gaydvdempire.com") != -1)
        searchString = searchString.replace("http:\/\/www.adultdvdempire.com", "");
    // search must at least 2 characters.
    if ($("#txt_Search").val().length < 2) {
        $('#txt_Search').focus(); return false;
    }
    else
        document.location.href = "{0}?q={1}".format(searchString, escape($("#txt_Search").val()));
}


function ShowLogIn() {
    if (!($("#loginUser").is(":visible"))) {
        $("#LogIn").slideDown("slow");
        $("#LogIn #username").focus();
    }
}

function ShowDetail() {
    $(this).siblings(".Detail").show();
}

function HideDetail(id) {
    $(this).siblings(".Detail").hide();
}

/*This is garbage. Needs to be fully depricated with better stuff*/
function ShowMore(id) {
    //ajax fill the list

    if ($("#a_" + id + "_More").hasClass("Close"))
        CloseMore(id);
    else {
        $("#a_" + id + "_More").addClass("Close").html("Close");

        $("#More_" + id).animate({
            width: "700px"
        }, 1000);
    }
}
function CloseMore(id) {
    $("#a_" + id + "_More").removeClass("Close").html("more");
    $("#More_" + id).animate({
        width: "0px"
    }, 1000);
}

function addMovieToWishlist(customerID, itemID, userID) {

    addMovieToWishList(customerID, itemID, userID, "0");
}

function addMovieToWishlist(customerID, itemID, userID, isBluray) {

    $.ajax({
        url: "/Account/addToWishlist",
        dataType: "json",
        data: ({
            customerID: customerID,
            itemID: itemID,
            userID: userID,
            isMovieorSexToy: "true"
        }),
        success: function (data) {

            if (data == 1) {
                if (isBluray == "1")
			 {
                    //$("#a_blurayAddToWishlist").html("added to wishlist");
				$("#a_blurayAddToWishlist").addClass("Checked locked");
				$("#a_AddToWishlist").addClass("Checked locked");
			 }
                else 
                {
				//$("#a_AddToWishlist").html("added to wishlist");
				$("#a_AddToWishlist").addClass("Checked locked");
			 }
            }
            else {
                //alert("fail");

            }
        }
    });
}



function UpdateLargeImage(thisElement) {
    $("div.ImageNavigation a").show();

    if (thisElement.attr("src") == $("div.scrollable img:first").attr("src"))
        $("div.ImageNavigation a.Previous").hide();
    else if (thisElement.attr("src") == $("div.scrollable img:last").attr("src"))
        $("div.ImageNavigation a.Next").hide();

    thisElement.addClass("Selected").siblings().removeClass("Selected");
    $("div.ImageContainer img.LargeImage").attr("src", thisElement.attr("lrgSrc"));
}

//This function is essentially a copy of UpdateLargeImage, but using more abstract names so as to not be so specific for novelty items
function UpdateLGImage(thisElement) {
    
    $(".selectedimage .nav a").show();

    if (thisElement.attr("src") == $("div.scrollable img:first").attr("src"))
        $(".selectedimage .nav a.Previous").hide();
    else if (thisElement.attr("src") == $("div.scrollable img:last").attr("src"))
        $(".selectedimage .nav a.Next").hide();

    thisElement.addClass("Selected").siblings().removeClass("Selected");
    $(".selectedimage img.LargeImage").attr("src", thisElement.attr("lrgSrc"));
}

function SubmitComment() {
    //Validate comment
    //If not valid...
    //Show error messages
    //If valid...
    //Submit it
    //Hide form and show thank you message
    //$("#Comment").slideUp();
    $("#CommentForm").slideUp();
    $(".ThankYou").slideDown();
}

/*
function RatingHover(id, value) {
    $("#" + id + "Underlay").removeClass("Worst");
    $("#" + id + "Underlay").removeClass("BelowAverage");
    $("#" + id + "Underlay").removeClass("Average");
    $("#" + id + "Underlay").removeClass("AboveAverage");
    $("#" + id + "Underlay").removeClass("Best");

    if (value == "1") {
        $("#" + id + "TextRating").text("worst");
        $("#" + id + "Underlay").addClass("Worst");
    }
    if (value == "2") {
        $("#" + id + "TextRating").text("below-average");
        $("#" + id + "Underlay").addClass("BelowAverage");
    }
    if (value == "3") {
        $("#" + id + "TextRating").text("average");
        $("#" + id + "Underlay").addClass("Average");
    }
    if (value == "4") {
        $("#" + id + "TextRating").text("above-average");
        $("#" + id + "Underlay").addClass("AboveAverage");
    }
    if (value == "5") {
        $("#" + id + "TextRating").text("best");
        $("#" + id + "Underlay").addClass("Best");
    }
}

function RatingMouseOut(id) {
    var rating = $("#" + id + "Rating").val();
    RatingHover(id, rating);
}
*/
function Rate(id, value) {
    $("#" + id + "Rating").val(value);
}

function UpdateBoxcoverImage(thisElement) {
    $("div.HeaderImageNavigation a").show();

    if (thisElement.attr("src") == $("div.Headerscrollable img:first").attr("src"))
        $("div.HeaderImageNavigation a.previous").fadeOut();
    else if (thisElement.attr("src") == $("div.Headerscrollable img:last").attr("src"))
        $("div.HeaderImageNavigation a.next").fadeOut();

    thisElement.addClass("Selected").siblings().removeClass("Selected");
    $("div.Image img.img_Boxcover").attr("src", thisElement.attr("lrgSrc"));
    $("div.Image img.img_Boxcover").attr("imgID", thisElement.attr("imgID"));
}

function ViewLarge() {


    window.location = "/images" + window.location.pathname.replace('images/', '').replace('reviews/', '') + "?imgid=" + $("div.Image img.img_Boxcover").attr("imgID");
   
   // window.location = "{% urlSexToy Context.CurrentSexToy 'images' %}?imgid=" + $("div.Image img.img_Boxcover").attr("imgID");
}

function SetUpImageTab() {
    $("div.scrollable").data("api", $("div.scrollable").scrollable({ api: true }));
    if ($("div.scrollable img").length == 5) // Fix for next button showing when img count is exactly 5
        $("div.ListNavigation a.right").addClass("disabled");

    $("div.scrollable img").click(function () { UpdateLargeImage($(this)); });

    $("div.ImageNavigation a.Previous").click(function () {
        UpdateLargeImage($("div.scrollable img.Selected").prev("img"));
        //if (!IsCurrentlyVisible($("div.scrollable").data("api"), $("div.ImageContainer img.LargeImage")))
        $("div.scrollable").data("api").prev();
    });

    $("div.ImageNavigation a.Next").click(function () {
        UpdateLargeImage($("div.scrollable img.Selected").next("img"));
        //if (!IsCurrentlyVisible($("div.scrollable").data("api"), $("div.ImageContainer img.LargeImage")))
        $("div.scrollable").data("api").next();
    });

    UpdateLargeImage($("div.scrollable img:first"));
}

function SetUpImgTab() {
    
    $("div.scrollable").data("api", $("div.scrollable").scrollable({ api: true }));
    if ($("div.scrollable img").length == 5) // Fix for next button showing when img count is exactly 5
        $("div.listnav a.right").addClass("disabled");

    $("div.scrollable img").click(function () { UpdateLGImage($(this)); });

    $(".selectedimage .nav a.Previous").click(function () {
        UpdateLGImage($("div.scrollable img.Selected").prev("img"));
        //if (!IsCurrentlyVisible($("div.scrollable").data("api"), $("div.ImageContainer img.LargeImage")))
        $("div.scrollable").data("api").prev();
    });

    $(".selectedimage .nav a.Next").click(function () {
        UpdateLGImage($("div.scrollable img.Selected").next("img"));
        //if (!IsCurrentlyVisible($("div.scrollable").data("api"), $("div.ImageContainer img.LargeImage")))
        $("div.scrollable").data("api").next();
    });

    UpdateLGImage($("div.scrollable img:first"));
}

// VOD item page scripts

function UpdateVideo(el, fullUrl, description) {
    $(el).siblings().removeClass("Selected");
    $(el).addClass("Selected");

    $("#nowPlaying").text(description);
    mediaPlayer.changeURL(fullUrl);
    mediaPlayer.play();
}

function openSampleWindow(windowurl, height, width) {
    height = parseInt(height) + 45;
    width = parseInt(width) + 10;
    var win = window.open(windowurl, 'sampleWindow', 'height=' + height + ',width=' + width + ',scrollbars=no,resizable=yes');
    win.focus();
}

//maybe?
function SaveEditedMyClip(clipID,itemID,startTime,endTime) {

    var isPublic = false;

    if ($("#chk_" + clipID).is(':checked')) {
        isPublic = true;
    }
    
    $.ajax({
        url: "/Account/EditMyClip",
        dataType: "json",
        async: false,
        data: ({
            clipID: clipID,
            clipName: $("#EditTitle_" + clipID).val(),
            itemID: itemID,
            endTime: endTime,
            startTime: startTime,
            description: $("#Edit_Description_" + clipID).val(),
            isPublic: isPublic,
            tags: $("#Edit_Tags_" + clipID).val()
        }),
        success: function (data) {

            if (data) {
                //alert("success - data = " + data);
                location.reload(true);
                //refresh page            
            }
            else {
                alert("fail - data = ");
                //should never fail?
            }
        }
    });
}

//maybe?
function EditMyClip(clipID) {
    $("#EditName_" + clipID).hide();
    $("#EditContainer_" + clipID).show();
}

//maybe?
function CancelMyClipEdit(clipID) {
    $("#EditContainer_" + clipID).hide();
    $("#EditClip_" + clipID).show();
}

function showInterview(id) {
	$("#preview_" + id).hide();
	$("#interview_" + id).slideDown("slow");
}

function hideInterview(id) {
    $("#interview_" + id).hide();
}

function clearForm() {
    //document.newsletter.email.value = "";
    $("#txt_email").val("");
}

function showlargewelcomeimage(imgname) {

    $.modal('<iframe src="/performer/largewelcomeimage?img=' + imgname +'" height="1050" width="700" style="border:0"  frameborder="0" allowtransparency="true">', {
        closeHTML: "",
        overlay: 100,
        overlayCss: { backgroundColor: "#000000" },
        overlayClose: true
    });

}

function addToEmpireFavorties(id, type) {
    if (type == 15) id = String('00000000' + id).slice(-8);
    $.ajax({
        url: "/Account/AddEmpireFavorite",
        dataType: "json",
        data: ({
            fid: id,
            ftype: type
        }),
        success: function (data) {
            //alert(data);
            // Warning, assumes success
            if (data == 1) {
                if (type == 1)
                	$("#performerFavorite").addClass("FavoriteChecked").addClass("active");  
                else {
                	$("#addtofavorites a").addClass("FavoriteChecked").addClass("active");  
                    //$("#addtofavorites").html("<a class='Favorite FavoriteChecked alt'><span></span>Favorite</a>");
                }
            }
        }
    });
	return false;
}

function PrepopulateAlias() {
	//get the alias and set it in the form
	// show the form
	$.ajax({
		url: "/Review/GetAlias",
		dataType: "json",
		type: "post",
		data: ({

		}),
		success: function (data) {
			if (data) {
				$("#UserName").val(data);
				$("#lbl_UserName").html("Your Alias");
				$("#UserName").attr("disabled", "disabled");
				$("#hid_Alias").val(data);
				// set flag that an alias isn't being entered
				//fill in name field and make it uneditable
			}

		}
	});
}

function ShowComment() {
//get the alias and set it in the form
// show the form
$.ajax({
     url: "/Review/GetAlias",
     dataType: "json",
     type: "post",
     data: ({

     }),
     success: function (data) {
          if (data) {
               $("#UserName").val(data);
               $("#lbl_UserName").html("Your Alias");
               $("#UserName").attr("disabled", "disabled");
               $("#hid_Alias").val(data);
               // set flag that an alias isn't being entered
               //fill in name field and make it uneditable
          }

     }
});
$("#UserComment").fadeIn();
}
function CloseComment() {
	$("#UserComment").fadeOut();
}

function ProcessEmpirePornstarReview() {
    // Clear errors
    $("input.Error").removeClass("Error").html("");
    $("select.Error").removeClass("Error");
    $("span.Error").html("").animate({ width: "0px" }).stop();
    var error = false;

    var alias = $("#hid_Alias").val();
    var userName = $("#UserName").val();
    var commentReview = $("#CommentReview").val();
    var rating_sex = $("#SexRating").val(); 
    var rating_beauty = $("#BeautyRating").val(); 
    var rating_body = $("#BodyRating").val(); 
    var rating_personality = $("#PersonalityRating").val();
    var cast_ID = $("#hid_castID").val(); 

    // error handlinh
    if (userName == "") {
        DisplayError("UserName", "Please enter a name.");
        error = true;
    }
    else if (userName != alias) {
        var result = checkAlias(userName);
        if (result == -1) {
            DisplayError("UserName", "Alias already in use, please choose another");
            error = true;
        }
    }

    if (commentReview == "") {
        DisplayError("CommentReview", "Please enter a Comment.");
        error = true;
    } else {
        //no html tags in Comment
        if ((commentReview.indexOf("<") != (-1)) || (commentReview.indexOf(">") != (-1))) {
            DisplayError("CommentReview", "HTML tags are not allowed, please remove all HTML tags from your Comment!");
            error = true;
        }
    }

    if (!error) {
        if (userName != alias)
            UpdateAlias(userName);
         //alert(alias + " " + userName + " " + rating_sex + " " + rating_beauty + " " + rating_body + " " + rating_personality + " " + commentReview + " " + cast_ID);
         $.ajax({
             url: "/Performer/SubmitEmpirePornstarReview",
             dataType: "json",
             type: "post",
             data: ({
                 cast_ID: cast_ID,
                 rating_sex: rating_sex,
                 rating_body: rating_body,
                 rating_beauty: rating_beauty,
                 rating_personality: rating_personality,
                 comment: commentReview,
                 name: userName,
                 type: "C"
             }),
             success: function (data) {
                 //alert(data);
                 if (data) {
                     $("#CommentForm").slideUp();
                     $(".ThankYou").slideDown();
                 }
             }
         });
    }
} //process review end

function ProcessEmpireMovieReview() {
 
    // Clear errors
    $("input.Error").removeClass("Error").html("");
    $("select.Error").removeClass("Error");
    $("span.Error").html("").animate({ width: "0px" }).stop();
    var error = false;

    var alias = $("#hid_Alias").val();
    var userName = $("#UserName").val();
    var commentTitle = $("#CommentTitle").val();
    var commentReview = $("#CommentReview").val();
    var rating_film = $("#FilmRating").val(); // visual appeal on sextoys
    var rating_features = $("#FeaturesRating").val(); // rec value on sextoys
    var rating_audio = $("#AudioRating").val(); // durability on sextoys
    var rating_video = $("#VideoRating").val(); // tactile appeal on sextoys
    var item_ID = $("#hid_itemID").val();
    var emailAddress = $("#EmailAddress").val();
  // alert("before error check-- " + alias + " " + userName + " " + emailAddress + " " + rating_film + " " + rating_features + " " + rating_audio + " " + rating_video + " " + commentTitle + " " + commentReview + " " + item_ID);

    // error handling
    if (userName == "") {
        DisplayError("UserName", "Please enter a name.");
        error = true;
    }
    else if (userName != alias) {
        var result = checkAlias(userName);
        if (result == -1) {
            DisplayError("UserName", "Alias already in use, please choose another");
            error = true;
        }
    }

    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

    if ((emailAddress == "") || (!pattern.test(emailAddress))) {
        DisplayError("EmailAddress", "Please enter a validEmail address.");
        error = true;
    }

    if (commentTitle == "") {
        DisplayError("CommentTitle", "Please enter a Title for your review.");
        error = true;
    } else {
        //no html tags in CommentTitle
        if ((commentTitle.indexOf("<") != (-1)) || (commentTitle.indexOf(">") != (-1))) {
            DisplayError("CommentTitle", "HTML tags are not allowed, please remove all HTML tags from your review title!");
            error = true;
        }
    }

    if (commentReview == "") {
        DisplayError("CommentReview", "Please enter a Comment.");
        error = true;
    } else {
        //no html tags in Comment
        if ((commentReview.indexOf("<") != (-1)) || (commentReview.indexOf(">") != (-1))) {
            DisplayError("CommentReview", "HTML tags are not allowed, please remove all HTML tags from your Review!");
            error = true;
        }
    }
    if (!error) {
        if (userName != alias)
            UpdateAlias(userName);

        //alert(alias + " " + userName + " " + emailAddress + " " + rating_film + " " + rating_features + " " + rating_audio + " " + rating_video + " " + commentTitle + " " + commentReview + " " + item_ID);
        $.ajax({
            url: "/Review/SubmitEmpireReview",
            dataType: "json",
            type: "post",
            data: ({
                itemID: item_ID,
                film: rating_film,
                feature: rating_features,
                audio: rating_audio,
                video: rating_video,
                summary: commentTitle,            
                comment: commentReview,
                email: emailAddress,
                name: userName,
                type: "C"
            }),
            success: function (data) {
                //alert(data);
                if (data) {
                    $("#CommentForm").slideUp();
                    $(".ThankYou").slideDown();
                }
            }
        });
    }
} //process review end

function RatingHover(id, value) {
    $("#" + id + "Underlay").removeClass("Worst");
    $("#" + id + "Underlay").removeClass("BelowAverage");
    $("#" + id + "Underlay").removeClass("Average");
    $("#" + id + "Underlay").removeClass("AboveAverage");
    $("#" + id + "Underlay").removeClass("Best");

    if (value == "1") {
        $("#" + id + "TextRating").text("worst");
        $("#" + id + "Underlay").addClass("Worst");
    }
    if (value == "2") {
        $("#" + id + "TextRating").text("below-average");
        $("#" + id + "Underlay").addClass("BelowAverage");
    }
    if (value == "3") {
        $("#" + id + "TextRating").text("average");
        $("#" + id + "Underlay").addClass("Average");
    }
    if (value == "4") {
        $("#" + id + "TextRating").text("above-average");
        $("#" + id + "Underlay").addClass("AboveAverage");
    }
    if (value == "5") {
        $("#" + id + "TextRating").text("best");
        $("#" + id + "Underlay").addClass("Best");
    }
}
function RatingMouseOut(id) {
    var rating = $("#" + id + "Rating").val();
    RatingHover(id, rating);
}

function Rate(id, value) {
    $("#" + id + "Rating").val(value);
}
function checkAlias(name) {

    var tempResult = 99;
    $.ajax({
        async: false,
        url: "/Account/CheckAlias",
        dataType: "json",
        data: ({
            Alias: name

        }),
        success: function (data) {
            if (data == 0) {
                tempResult = 0;
            }
            else {
                tempResult = -1;
            }
        }
    });
    return (tempResult);
}

function UpdateAlias(name) {
    var tempResult;

    $.ajax({
        url: "/Account/UpdateAlias",
        dataType: "json",
        data: ({
            CustomerAlias: name
        })

    });

}

// ---------------end review stuff-----------


// --- list page preview screenshots --------


function ShowPreview(id) {
	
	$("#PreviewScreens_" + id).modal("show");

	if ($("#div_Preview_" + id).html() == "") {
		var loading = "<span class='loading'>loading...</span>";
		$("#div_Preview_" + id).html("Loading");

		$.ajax({
			url: "/List/PreviewScreenshots",
			dataType: "json",
			data: ({
				item: id
			}),

			success: function (data) {
				//alert(data);
				if (data) {
					$("#div_Preview_" + id).html("");
					$(".screens").html("");
					$("#div_Preview_" + id).html(data);
					//Hook the images up to FancyBox
					InitiateFancyBox(id, false, true);
				}
			}
		});
	}
}

function HidePreview() {
	$(".side-panel").removeClass("active");
	hidemegamask();
}

// --- end list page preview screenshots --------



function showSidePanel(id, size) {
	if (size != "undefined")
		$("#" + id).addClass(size);
	$("#" + id).addClass("active");
	showmegamask();
}
function closeSidePanel() {
	$(".side-panel").removeClass("active");
	hidemegamask();
}

// ---- item page show more screenshots


//Universal Waiting Message
//Note: Target needs to have relative positioning.
function ShowWaiting(target, messagetext) {
    if (messagetext == "")
        messagetext = "Loading...";
    $("#" + target).append("<div class='waiting'><div class='msg'>" + messagetext + "</div><div class='bg'></div></div>");
}
function InitiateFancyBoxSexToy() {

	$("a.fancy").each(function () {
		$(this).attr("data-fancybox", $(this).attr('rel'));
	});

    	$("a.fancy").fancybox({
    		
		loop: true,
		arrows: true,
		toolbar: true,
		infobar: true,
		keyboard: true,
		buttons: [
			'close'
		]
    	});
}

function InitiateFancyBox(url, allowPPM, showThumbs) {
	//we're not showing thumbs and should probably remove this param. - DG

	var watchHREF;

	if (url.toString().indexOf("?stream_type=0") >= 0)
		watchHREF = url.replace("?stream_type=0", "") + "?viewpart=videoplayer&stream_type=0&tc=";
	else
		watchHREF = url + "?viewpart=videoplayer&tc=";
	
	$("a.fancy").each(function () {
		$(this).attr("data-fancybox", $(this).attr('rel'));
	});

	$("a.fancy").fancybox({
		loop: true,
		arrows: true,
		toolbar: true,
		infobar: true,
		keyboard: true,
		buttons: [
			'close'
		],
		caption: function (instance, item) {
			var caption;

			var timeHolder = $(this).attr('time');
			var tempRate = $(this).attr('rated');
			var titleHtml;
			var isContentEditor = $(this).attr('isContentEditor');
			var scene_id = $(this).attr('scene_id');

			if (isContentEditor == "True") {

				if (timeHolder != undefined && $(this).attr('item_id') != undefined) {

					caption = '<a href="Javascript:ScreenshotAddRating(' + $(this).attr('scene_id') + ',' + timeHolder + ')" class="btn btn-primary pull-left m-b-2">Vote as Scene Default</a>';
					caption += '   <a href="Javascript:ScreenshotAddItemRating(' + $(this).attr('item_id') + ',' + timeHolder + ')" class="btn btn-primary pull-right m-b-2">Vote as Item Default</a> &nbsp;&nbsp;';

				}

				return caption;

			}
			else {

				if (timeHolder != undefined && $(this).attr('item_id') != undefined) {
					if (allowPPM && ($(this).attr('minutes') > 0)) {
						titleHtml = '<a href="' + watchHREF + timeHolder + '" class="btn btn-primary pull-right m-b-2"><i class="fa fa-play"></i> Watch Now</a>';
					}
					else if (allowPPM) {
						titleHtml = '<a href="/account/buyminutespage" class="btn btn-primary pull-right m-b-2"><i class="fa fa-play"></i> Watch Now</a>';
					}
				}
				caption = titleHtml;

				return caption;

			}
		}

	});

}

function ScreenshotRatingCallback(item_id, timecode, rate, data) {
    if (rate > 0)
        $("#rate_up_" + timecode).addClass("RateButtonUpSelected");
    else
        $("#rate_down_" + timecode).addClass("RateButtonDownSelected");

    $('a[time="' + timecode + '"]').attr('rated', rate);
}

// thumbs is always false on this more so it doens't need passed, it hardcoded into success
function ShowMoreSSItemPage(id, length, allowPPM, url) {
    //alert("url = " + url);
    ShowWaiting("scene", "Loading Screenshots....");
    $("#more").html("");

    $.ajax({
        url: "/Item/LoadScreenshots",
        dataType: "json",
        data: ({
            item: id,
            length: length
        }),
        success: function (data) {
            //alert(data);
            if (data) {
                $(".waiting").hide("");
                $("#scene").html(data);

                InitiateFancyBox(url, allowPPM, false)
            }
        }
    });
 }

 // we figure out thumbs counts on the fly here, so it doesn't need passed
 function ShowMoreSceneShotsItemPage(id, start, end, sceneID, url, hasPPM) {
     //alert("id = " + id + " start = " + start + " end = " + end + "scene_id = " + sceneID);
    // alert("url = " + url);
     //hack to hide thumbs for large number of scrreenshots
     //needs to be better.
     var numOfScreens = (end - start) / 30;
     var showThumbs = true;

     if (numOfScreens > 25)
         showThumbs = false; 

     var target = "scene" + sceneID;
     ShowWaiting(target, "Loading Screenshots....");

     $("#more" + sceneID).html("");
     $.ajax({
         url: "/Item/LoadSceneScreenshots",
         dataType: "json",
         data: ({
             item: id,
             start: start,
             end: end,
             sceneID: sceneID
         }),
         success: function (data) {
             //alert(data);
             if (data) {
                 $(".waiting").hide("");
                 $("#scene" + sceneID).html("");
                 $("#scene" + sceneID).html(data);
                 
                 InitiateFancyBox(url, hasPPM, showThumbs)
             }
         }
     });
     }


     // thumbs is always false on this more so it doens't need passed, it hardcoded into success
     function ShowMoreMovieScreens(id, length, allowPPM, url) {
     	//alert("url = " + url);

     	$("#PreviewScreens_" + id).addClass("active");
     	showmegamask();

     	if ($("#div_Preview_" + id).html() == "") {
     		var loading = "<span class='loading'>loading...</span>";
     		$("#div_Preview_" + id).html(loading);

     		$.ajax({
     			url: "/Item/LoadScreenshots",
     			dataType: "json",
     			data: ({
     				item: id,
     				length: length
     			}),
     			success: function (data) {
     				//alert(data);
     				if (data) {
     					$("#div_Preview_" + id).html("");
     					$(".screens").html("");
     					$("#div_Preview_" + id).html(data);

     					InitiateFancyBox(url, allowPPM, false)
     				}
     			}
     		});
     	}
     }

     function ShowMoreMovieScreens2017(id, length, allowPPM, url) {
     	//alert("url = " + url);

     	//$("#PreviewScreens_" + id).addClass("active");
     	//showmegamask();

     	if ($("#div_Preview_" + id).html() == "") {
     		var loading = "<span class='loading'>loading...</span>";
     		$("#div_Preview_" + id).html(loading);

     		$.ajax({
     			url: "/Item/LoadScreenshots",
     			//dataType: "json",
     			data: ({
     				item: id,
     				length: length
     			}),
     			success: function (data) {
     				//alert(data);
     				if (data) {
     					$("#div_Preview_" + id).html("");
     					$(".screens").html("");
     					$("#div_Preview_" + id).html(data);

     					InitiateFancyBox(url, allowPPM, false)
     				}
     			}
     		});
     	}
     }

     // we figure out thumbs counts on the fly here, so it doesn't need passed
	// used on item pages when a movie has scenes
     function ShowMoreScreens(id, start, end, sceneID, url, hasPPM) {

		//needs to be better.
     	$("#PreviewScreens_" + sceneID).addClass("active");
     	showmegamask();

     	if ($("#div_Preview_" + sceneID).html() == "") {
     		var loading = "<span class='loading'>loading...</span>";
     		$("#div_Preview_" + id).html(loading);

     		//not used wtf
			//var numOfScreens = (end - start) / 120;
     		
			var showThumbs = false;
     		var target = "scene" + sceneID;


     		$.ajax({
     			url: "/Item/LoadSceneScreenshots",
     			dataType: "json",
     			data: ({
     				item: id,
     				start: start,
     				end: end,
     				sceneID: sceneID
     			}),
     			success: function (data) {
     				//alert(data);
     				if (data) {
     					$("#div_Preview_" + sceneID).html("");
     					$(".screens").html("");
     					$("#div_Preview_" + sceneID).html(data);
     					InitiateFancyBox(url, hasPPM, showThumbs)
     				}
     			}
     		});
     	}
     	else {
     	}
     }


     function ShowMoreScreens2017(id, start, end, sceneID, url, hasPPM) {
     	
     	if ($("#div_Preview_" + sceneID).html() == "") {
     		var loading = "<span class='loading'>loading...</span>";
     		$("#div_Preview_" + id).html(loading);
			
     		var showThumbs = false;
     		var target = "scene" + sceneID;
     		
     		$.ajax({
     			url: "/Item/LoadSceneScreenshots",
     			//dataType: "json",
     			data: ({
     				item: id,
     				start: start,
     				end: end,
     				sceneID: sceneID
     			}),
     			success: function (data) {
     				//alert(data);
     				if (data) {
     					$("#div_Preview_" + sceneID).html("");
     					//$(".screens").html("");
     					$("#div_Preview_" + sceneID).html(data);
     					InitiateFancyBox(url, hasPPM, showThumbs)
     				}
     			}
     		});
     	}
     	else {
     	}
     }
// ----- end item page show more screenshots ----------



function showsplash(url) {
    InitiateFancyBox('', false, false);
    $.fancybox({ href: url,
        'type': 'iframe',
        'height': 700,
        'width': 900,
        'autosize': 'false',
        'padding': 0,
        'modal': 'true',
        'scrolling': 'no'
    });

}

/*Home Page Banner Functions*/
var currentBanner = 1;

//Expandable home page list stuff
function togglelist(id) {
    if ($("#" + id).hasClass("closed")) {
        $("#" + id).removeClass("closed");
        $("#" + id + " ul").slideDown();
        $("#" + id + " ol").slideDown();
    }
    else {
        $("#" + id).addClass("closed");
        $("#" + id + " ul").slideUp();
        $("#" + id + " ol").slideUp();
    }
}

//VOD dashboard PPM Preferences Scripts

function checkErrorPPMPref() {
	var error = false;
    var check = 0;
    //console.debug($("#alias").val());
    //console.debug($("#clips").val());
    // user must choose an alias to share myclips publicly

    var isUnlimitedMember = $("#isUnlimitedMember").val();
	
	if (isUnlimitedMember == "True"){
		var autoPlay = $("input[name='unlimitedAutoPlay']:checked").val() == "on";		
		
		if (autoPlay != null){
			setUnlimitedAutoPlay(autoPlay,false);
		}
    }

    if (($("#alias").val() != "") && ($("#hid_Alias").val() == "")) {
        check = checkAlias($("#alias").val());
    }

    if (check == -1) {
        //alias exists in database
        $("#dv_Duplicate_Alias_Message").slideDown("slow");
        error = true;
    }
    else {
        $("#dv_Duplicate_Alias_Message").slideUp("slow");
    }

    if (($("#alias").val() == "") && ($("input[name='clips']:checked").val() == "1")) {
        $("#dv_No_Alias_Public_Message").slideDown("slow");
        error = true;
    }
    else {
        $("#dv_No_Alias_Public_Message").slideUp("slow");
    }

    // no errors update User Preferences
    if (!error) {
        updatePrefs();
        $(".Notification_Container").fadeIn('slow');
    }

     
}

function setUnlimitedAutoPlay(autoPlay,reload){
	$.ajax({
		url: "/Account/SetDefaults",
		async: false,
		data: { unlimitedAutoPlay: autoPlay},
			success: function(data){
				if (reload){
					window.location.reload();
				}
			}
	});
}

function HideNotification() {
    $(".Notification_Container").fadeOut('slow');
}

function HideNotificationPPM() {
    $(".Notification_ContainerPPM").fadeOut('slow');
}

//exist about. here for reference 5/30/2012: can be erased 6/30/2012 if no issues
//function checkAlias() {
//    var tempResult = 99;
//    $.ajax({
//        async: false,
//        url: "/Account/CheckAlias",
//        dataType: "json",
//        data: ({
//            Alias: $("#alias").val()
//        }),
//        success: function (data) {
//            if (data == 0) {
//                tempResult = 0;
//            }
//            else {
//                tempResult = -1;
//            }
//        }
//    });
//    return (tempResult);
//}

function updatePrefs() {
    $.ajax({
        url: "/Account/UpdatePrefs",
        dataType: "json",
        data: ({
            CustomerID: $("#hid_CustomerID").val(),
            CustomerAlias: $("#alias").val(),
            StreamRate: $("input[name='Stream']:checked").val(),
            WindowSize: $("input[name='Size']:checked").val(),
            Clips: $("input[name='clips']:checked").val(),
            PlayerType: $("input[name='playerType']:checked").val()
        }),
        success: function (data) {
            if (data == 0) {
            }
            else {
            }
        }
    });
}

function UpdateMinutePreference() {
    $(".Notification_ContainerPPM").fadeIn('slow');

    $.ajax({
        url: "/Account/UpdateDefaultPPMPackage",
        dataType: "json",
        data: ({
            PackageID: $("input[name='min']:checked").val()
        }),
        success: function (data) {
            if (data == 0) {

            }
            else {
            }
        }
    });
}
//END PPM dashboard PPM pref scripts.

function ToggleMegaDD(id) {
    if ($("#" + id).hasClass('active')) {
        $("#" + id).removeClass('active');
        $("#" + id).fadeOut();
    }
    else {
        $("#" + id).addClass('active');
        $("#" + id).fadeIn();
    }
}

function ToggleSearchSelector() {
    if ($(".searchtypes").hasClass("active")) {
        $(".searchtypes").removeClass('active');
        $(".searchtypes").slideUp();
        $("#searchselector").removeClass('active');
    }
    else {
        $(".searchtypes").addClass('active');
        $(".searchtypes").slideDown();
        $("#searchselector").addClass('active');
     }
	resetAutoComplete();
}

function SelectSearchType(type, searchurl) {
    $("#selectedsearchtype").html(type);
    $("#searchurl").val(searchurl);
    ToggleSearchSelector();
}

function resetAutoComplete() {
	if ($('#selectedsearchtype').html() == "Gay" || $('#selectedsearchtype').html() == "Rental" || $('#selectedsearchtype').html() == "Used") {
		$("#txt_Search").autocomplete({ disabled: true });
	}
	else {
		$("#txt_Search").autocomplete({ disabled: false });
		InitAutoComplete();
	}
}

function InitAutoComplete() {
	var defaulttype = $.trim($('#selectedsearchtype').html());

	$("#txt_Search").autocomplete({

	    appendTo: $("#txt_Search").next(),
	    source: function (request, response) {
	        $.ajax({
	            url: "/search/SearchAutoComplete_Agg_EmpireDTRank",
	            dataType: "jsonp",
	            data: {
	                //featureClass: "P",
	                //style:"full",
	                rows: "6",
	                name_startsWith: request.term,
	                search_type: defaulttype
	            },
	            success: function (data) {
	                response($.map(data.Results, function (item) {
	                    //alert(item.BasicResponseGroup.id);
	                    return {
	                        label: item.BasicResponseGroup.description,
	                        type: item.BasicResponseGroup.displaytype,
	                        value: item.BasicResponseGroup.description,
	                        url: item.BasicResponseGroup.id,
	                        boxcover: item.BasicResponseGroup.features
	                    }
	                }));
	            }
	        });
	    },
	    minLength: 1,
	    delay: 20,
	    select: function (event, ui) {
	        //add q query string for google analytic search traffic
	        label = ui.item.label;
	        label = label.replace('&', 'and');
	        tempURL = ui.item.url + "?qs=" + label;
	        window.location.href = tempURL;
	    },
	    open: function () {
	        $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
	    },
	    close: function () {
	        $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
	    },
	    focus: function (event, ui) {
	        return false;
	    }


	})

    .data("uiAutocomplete")._renderItem = function (ul, item) {

        //remove quotes from the label
        var label = item.label.replace(/\"/g, "").replace("Category: ", "");

        if (label.length > 45)
            label = label.substr(0, 45) + "...<br/><span class='type'>" + item.type + "</span><span class='clear'></span>";
        else
            label = label + "<br/><span class='type'>" + item.type + "</span><span class='clear'></span>";

        if (item.type == "Category")
            label = "<span class='ico'><img src='http://cdn1a.adultempire.org/res/pm/ico_ade12_list_30x30_adjusted.png' alt='' title='' class='category' /></span>" + label;
        if (item.type == "Studio")
            label = "<span class='ico'><img src='http://cdn1a.adultempire.org/res/pm/ico_ade12_clapper_30x30.png' alt='' title='' class='studio' /></span>" + label;

        return $("<li onclick=\"window.location.href = '" + item.url + "'; return false;\"></li>")
						.data("item.autocomplete", item)
						.append("<a>" + item.boxcover + " " + label + "</a>")
						.appendTo(ul);
    };

   
}


//Listent to see if they clicked outside the selector area, if so, hide options
$(document).mouseup(function (e) {
    if (($(e.target).parent(".searchtypes").length == 0) && ($(".searchtypes").hasClass("active")) && ($(e.target).parent("#searchselector").length == 0)) {
        ToggleSearchSelector();
    }
});

//Refine-slide banner functions
function nextbanner() {
	$('.rs-next').click();
	$('#bannerTimer').polartimer('reset');
	$('#bannerTimer').polartimer('start');
}
function pausetimer() {
	$('#bannerTimer').polartimer('pause');
}
function resumetimer() {
	$('#bannerTimer').polartimer('resume');
}

function toggleupsell(price, media, tax, item) {
	if ($(".aupsell").hasClass("active")) {
        $(".aupsell").removeClass("active");
        $("#hid_US").val("0");
        $("#sp_media").html($("#hid_Media").val());
        $("#dv_price").html($("#hid_Price").val());
        $("#sp_potentialTax").html($("#hid_Tax").val());
	}
	else {
        $(".aupsell").addClass("active");
        $("#hid_US").val("1");
        $("#sp_media").html(media);
        $("#dv_price").html("$" + price);
        $("#sp_potentialTax").html(tax);
        $("#hid_UpSaleMedia").val(media);
        $("#hid_UpSaleItem").val(item);
	}
}


function ScreenshotAddRating(scene_id, timecode) {

	//alert(scene_id);
	//alert(timecode);

	$.ajax({
		url: "/DataEditing/EditDefaultFrameScene",
		dataType: "json",
		data: ({
			scene_id: scene_id,
			default_frame: timecode
		}),
		success: function (data) {
			//alert(data);
			if (data)
				alert("Thank you for choosing the scene default screenshot");
			else
				alert("Removed default screenshot");
		}
	});
}


function ScreenshotAddItemRating(item_id, timecode) {

	//alert(scene_id);
	//alert(timecode);

	$.ajax({
		url: "/DataEditing/EditDefaultFrameItem",
		dataType: "json",
		data: ({
			item_id: item_id,
			default_frame: timecode
		}),
		success: function (data) {
			//alert(data);
			if (data)
				alert("Thank you for choosing the item default screenshot");
			else
				alert("Removed default screenshot");
		}
	});
}



//Crowd Source functions
function SubmitCrowdSceneTitle(sceneID, inputFieldName, callbackFunction) {
    var fieldVal = $("#" + inputFieldName).val();
    $.getJSON("/SceneIndex/AddSceneTitle", {
            scene_id: sceneID,
            title: fieldVal
        },
        createCallbackSceneTitle(sceneID, callbackFunction)
    );
}
function createCallbackSceneTitle(sceneID, callbackFunction){
    return function (data) {
        callbackFunction(sceneID, data);
    };
}
//function ScreenshotAddRating(itemID, frame_time, rate, callbackFunction) {
//    $.getJSON("/CrowdSource/AddScreenshotRating",
//        { item_id: itemID, timecode: frame_time, rating: rate },
//        createCallbackScreenshotRating(itemID, frame_time, rate, callbackFunction)
//    );
//}
//function createCallbackScreenshotRating(item_id, frame_time, rate, callbackFunction) {
//    return function (data) {
//        callbackFunction(item_id, frame_time, rate, data);
//    }
//}
//


function closemodal(id){
	$("#" + id).hide();
}
function showmodal(id){
	$("#" + id).show();
}




//New Hero Carousel stuff

function nextslide() {
	currentslide = currentslide + 1;
	if (currentslide > slidecount)
		currentslide = 1;
	gotoheroslide(0, currentslide);
}

function prevslide() {
	currentslide = currentslide - 1;
	if (currentslide < 1)
		currentslide = slidecount;
	gotoheroslide(0, currentslide);
}

//automation for the slides
var heroslideinterval;
function setheroslideinterval() {
	if (slidecount > 1) //Slidecount set at the instance of the the banner
	{
		$(".neronav").show();
		$(".herobrowse").show();
		if (typeof (currentslide) != 'undefined' && currentslide != null) {
			heroslideinterval = setInterval(function () {
				if ((currentslide + 1) > slidecount) {
					currentslide = 1;
				}
				else {
					currentslide = currentslide + 1
				}
					gotoheroslide(1, currentslide);
			}, 7500);
		}
	}
	else{
		//There is only 1 slide, hide the navigation
		$(".neronav").hide();
		$(".herobrowse").hide();
	}
}

function gotoheroslide(auto, id) {
	if (auto == 0)
		clearInterval(heroslideinterval);

	$(".heronav a").removeClass("active");

	$(".slide.active .text").hide();
	$(".slide.active").fadeOut();
	$(".slide").removeClass("active");


	$("#heronav_" + id).addClass("active");
	$("#slide_" + id + " .text").show();
	$("#slide_" + id).fadeIn();
	$("#slide_" + id).addClass("active");
}

 // false == hide cams
 // true == show cams
 function showCams(showCams) {
 	     	$.ajax({
         		url: "/Account/SetDefaults",
         		data: { showCams: showCams },
         		success: function (data) {
         			window.location.reload();
         		}

         	});
         }

 // false == hide ads
 // true == show ads
 function showAdsDE(showAdsDE) {
         	$.ajax({
         		url: "/Account/SetDefaults",
         		data: { showAdsDE: showAdsDE },
         		success: function (data) {
         			window.location.reload();
         		}
	});
}





//2015 NAVIGATION SCRIPTS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var navhoverconfig = {
	interval: 150,
	sensitivity: 3,
	over: showtertiarynav,
	timeout: 0,
	out: showtertiarynav
};

var currentopenmenu = "";

function killNav(id) {
	
	/*
	$("#nav-" + currentopenmenu).find(".menu-nav").slideUp(300);
	$("#nav-" + currentopenmenu).removeClass("open");
	currentopenmenu = "";

	if ($("#site-search").hasClass("active")) {
		$("#site-search").removeClass("active");
		$("#btn-closesearch").removeClass("active");
		hidemegamask();
	}*/

	if ($("#txt_search2017").hasClass("active")){
		undoAutoComplete2017();
		//hidemegamask();
	}

	if (id == "all") {
		hidemegamask();
		//closeSearch(); //kill this?
		$(".side-panel").removeClass("active");
		$(".expanded-refine-set").removeClass("active");
    }
    killCartAlert();
}

function toggleNav(id) {
	
	if (currentopenmenu == id) {
		killNav(id);
		hidemegamask();
	}
	else {
		if (currentopenmenu != "")
			killNav(id);

		//If the menu has not been loaded, load the menu.
		if ($("#menu-" + id).is(":empty")) {
			//Load the menu before doing animations.
			$("#menu-" + id).load("/navigation/ultramenu_" + id + ".html", function () {
				finishishmenuload(id);

				//Detect if they are using a touch interface
				if (Modernizr.touch) {
					//If they are using touch interface, remove href it's not a flyout(smallest viewport) link
					//Basically, we want the secondary nav to work for tablets.
					$('.secondary-nav a').each(function () {
						if ($(this).hasClass("flyout-link")) {
							//Do nothing
						}
						else {
							$(this).removeAttr("href");
						}
					});
				}

				//initiate hover intent for the secondary navigation
				$('.secondary-nav a').each(function () {
					$(this).hoverIntent(navhoverconfig);
					$(this).removeAttr("onmouseover");
				});

			});
		}
		else
			finishishmenuload(id);

		showmegamask();
		currentopenmenu = id;
	}
}

function finishishmenuload(id){ 
	$("#nav-" + id).find('.secondary-nav li a.active').removeClass("active");
	$("#nav-" + id).find('.tertiary-nav.active').removeClass("active");
	$("#nav-" + id).find(".menu-nav").slideDown(300);
	$("#nav-" + id).addClass("open");
	$("#nav-" + id).find('.secondary-nav li:first a').addClass("active");
	$("#nav-" + id).find('.tertiary-nav:first').addClass("active");
}

function hidemegamask() {
	$("#mega-mask").fadeOut(300);
}
function showmegamask() {
	$("#mega-mask").fadeIn(300);
}

var currenttertiarymenu = "";

function showtertiarynav() {
	if ($(this).prop("id")) {
		var id = $(this).prop("id").replace("nav-", "");
		$(".tertiary-nav.active").removeClass("active");
		$(".secondary-nav a.active").removeClass("active");
		$("#menu-" + id).addClass("active");
		$("#nav-" + id).addClass("active");
		currenttertiarymenu = id;
	}
}

var currentflyoutnav = "";
function toggleflyoutnav(id) {
	if (currentflyoutnav == id) {
		$("#flyout-nav-" + id).slideUp(333);
		$("#flyout-title-" + id).removeClass("active");
		currentflyoutnav = "";
	}
	else {
		if (currentflyoutnav != "") {
			$("#flyout-nav-" + currentflyoutnav).slideUp(333);
			$("#flyout-title-" + currentflyoutnav).removeClass("active");
		}
		$("#flyout-nav-" + id).slideDown(333);
		$("#flyout-title-" + id).addClass("active");
		currentflyoutnav = id;
	}
}

function toggleCollapsedNav(ojecttRef) {
	if ($(ojecttRef).parent().hasClass("open")) {
		$(ojecttRef).parent().find(".menu-nav").slideUp(300);
		$(ojecttRef).parent().removeClass("open");
	}
	else {
		$(ojecttRef).parent().find(".menu-nav").slideDown(300);
		$(ojecttRef).parent().addClass("open");
	}
}

function searchFocus(){
	if ($("#site-search").hasClass("active")){
		//Do Nothing
	}
	else{
		togglesearch();
	}
}

function togglesearch() {
	if (currentopenmenu != "")
		killNav("all");

	if ($("#site-search").hasClass("active")){
		closeSearch();
	}
	else {
		openSearch();
		if (searchlistening == false)
			initiateSearchInputListeners();
	}
}

function openSearch() {
	$("#btn-closesearch").addClass("active");
	$("#txt_search").focus();
	
	//Detect viewport size and do the appropriate animation
	if ($(window).width() >= 768) {
		//Medium viewports and up
		$("#site-search").animate({
			//maxWidth: "100%"
		}, 300, function () {
			$("#site-search").addClass("active");
			$("#site-search-recommendations").slideDown(300);
			showmegamask();
		});
	}
	else {
		//Small Viewports and down
		$("#site-search").animate({
			maxHeight: "5000px"
		}, 300, function () {
			$("#site-search").addClass("active");
			$("#site-search-recommendations").slideDown(300);
			showmegamask();
		});
	}	
}

function closeSearch() {
	$("#btn-closesearch").removeClass("active");
	$("#site-search").removeClass("active");
	killSearchInputListeners();
	
	//Detect viewport size and do the appropriate animation
	if ($(window).width() > 768) {
		//Medium viewports and up
		$("#site-search-recommendations").slideUp("300", function () {
			$("#site-search").animate({
				//maxWidth: "-=100%"
			}, 300);
			$("#site-search").removeClass("active");
			$("#site-search-recommendations").removeClass("active");
			hidemegamask();
			//Reset Search Box
			$('#txt_search').val("");
			//Hide Recommendation Container
			$(".search-recommendations-container").css("height", 0);
			//remove items already showing
			$('#autopopulated_items').html("");
		});
	}
	else {
		//Small Viewports and down
		$("#site-search-recommendations").slideUp("300", function () {
			$("#site-search").animate({
				//maxHeight: "0"
			}, 300);
			$("#site-search").removeClass("active");
			$("#site-search-recommendations").removeClass("active");
			hidemegamask();
			//Reset Search Box
			$('#txt_search').val("");
			//Hide Recommendation Container
			$(".search-recommendations-container").css("height", 0);
			//remove items already showing
			$('#autopopulated_items').html("");
		});
	}
}

//2015 SEARCH SCRIPTS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var o = {
	38: 'up',
	40: 'bottom',
	37: 'prev',
	39: 'next'
}
var currentActive = -1;
var columnCount = 3;
var rowCount = 3;

var autocompleteItemCount = 9;
var totalGridItems = autocompleteItemCount; //this will be updated everytime the autocomplete query is returned. so quite often

var searchstring;

var okayToDoAutoComplete = true;

var timer;
var delay = 300; //delay for keypress
var stilltyping = false;

var keypadActive = false;
var searchlistening = false;

function initiateSearchInputListeners() {
	searchlistening = true;
	//Listen for input in the seach textbox
	$('#txt_search').on('input propertychange paste', function () {
		//check to see if the string is longer than 0 characters before doing anything
		if ($('#txt_search').val().length > 0) {
			stilltyping = true;
			//Delay doing autocomplete while the user potentially continues typing
			window.clearTimeout(timer);
			timer = window.setTimeout(function () {
				stilltyping = false;
				if ($('#txt_search').val().length > 0) //Check to make sure there's actually something in the box
					doAutoComplete();
			}, delay);
		}
		else {
			undoAutoComplete();
		}
	});

	$('#txt_search').keydown(function (e) {
		if (keypadActive) {
			//They're using the keypad.  Reposition the selected grid item.
			if ((e.which == 37) || (e.which == 38) || (e.which == 39) || (e.which == 40)) { //They're using arrows. Highligh items in list
				recalculate(e); //calculate what the active cell should be
				reposition();
			}
			//They hit enter. Do search.
			if (e.which == 13)
				takesearchaction();
		}
		else {
			//They hit down.  Activate the first item in the grid.
			if (e.which == 40) {
				keypadActive = true;
				currentActive = 0;
				reposition();
			}
			//They hit enter and want to go to the selected item
			if (e.which == 13) {
				//Do a search
				takesearchaction();
			}
		}
		//Prevent the caret from moving all over the place
		if ((e.which == 37) || (e.which == 38) || (e.which == 39) || (e.which == 40)) {
			e.preventDefault();
		}

		//escape key
		if (e.which == 27) {
			//reset all and close search
			undoAutoComplete();
			closeSearch();
			$('#txt_search').val("");
		}

	});
}

function killSearchInputListeners() {
	$('#txt_search').on('input propertychange paste', function () {
		//Do Nothing
	});
	$('#txt_search').keydown(function (e) {
		//Do Nothing
	});
}


function currenttimeinseconds() {
	//return seconds + "sec " + secondsSinceEpoch + "milliseconds";
	var dgdebugtimer = new Date();
	return dgdebugtimer.getSeconds() + "s : " + dgdebugtimer.getMilliseconds() + "m";
}

function recalculate(e) {
	//Recalculate position of the selected grid item.

	if (e.keyCode == 37) { //move left or wrap
		currentActive = (currentActive > 0) ? currentActive - 1 : currentActive;
	}
	if (e.keyCode == 38) { // move up
		currentActive = (currentActive - columnCount >= 0) ? currentActive - columnCount : currentActive;
	}
	if (e.keyCode == 39) { // move right or wrap
		if ((currentActive + 1) < totalGridItems)
			currentActive++;
	}
	if (e.keyCode == 40) { // move down
		if (currentActive < 0)
			currentActive = 0;
		else {
			if ((currentActive + columnCount) < totalGridItems)
				currentActive += 3
		}
	}
}

function reposition() {
	//Reposition the indicator for the current selected grid item.

	//Unselect the previous active
	$('a.rec-item.active').removeClass('active');
	//Set the new active
	$('a.rec-item').eq(currentActive).addClass('active');
	//Set the link url for if the user hits enter
	$("#gridlinkurl").val($('a.rec-item').eq(currentActive).attr("href"));
}



function doAutoComplete() {

	//clean the search sting of spaces, invalid characters, script, etc.
	//add more
	var searchstring = $("#txt_search").val().trim();

	var mediatype = $.trim($('#search-media-label').html());

	$.ajax({
		url: "/search/SearchAutoComplete_Agg_EmpireDTRank",
		dataType: "jsonp",
		data: {
			rows: autocompleteItemCount,
			name_startsWith: searchstring,
			search_type: mediatype
		},
		success: function (data) {
			//Check to see if they started typing again in the time it took to query.
			if (stilltyping) {
				//They started typing again. Dont do anything
			}
			else {
				//They didnt start typling again. Okay go ahead and show the autocomplete stuff.
				//Check to see if we've got results back
				if (data.Results.length > 0) {

					//Reset up variables to keypad navigation.

					currentActive = -1;
					totalGridItems = 0;

					//animated out any autopopulated grid
					animateOut("autopopulated");
					//show autopopulated grid if it's not already visible
					$("#autopopulated").show();
					//remove items already showing
					$('#autopopulated_items').html("");

					//Loop through the results
					data.Results.forEach(function (item) {
						//Generate markup for the grid items and append them to the grid
						renderautocompleteitem(item);
						totalGridItems++;
					});
					//Animate in the grid items
					animateIn("autopopulated");
				}
				else {
					//No results.  Hide container.
					undoAutoComplete();
				}
			}

		}
	});

}

function animateIn(id) {

	//Check to see if we are animating to nothing or if we are animating in an element
	if (id == "") {
		//Animate the container to a height of zero.
		$(".search-recommendations-container").css("height", 0);
	}
	else {
		//Animate in the selected element
		var childHeight = $("#" + id).outerHeight(true) + 30;
		$(".search-recommendations-container").css("height", childHeight);

		$("#" + id + " a").animate({
			opacity: 1,
			top: "0px"
		}, 300, function () {
			// Animation complete.
		});
	}

}
function animateOut(id) {

	//Set the container height - For smooth transition
	var childHeight = $("#" + id).outerHeight(true);
	$(".search-recommendations-container").css("height", childHeight);

	var target = "#" + id + " a";
	$(target).animate({
		opacity: 0,
		top: "-30px"
	}, 300, function () {
		// Animation complete.
	});
}

/* Don't think this one is used anymore. - DG 9.28.2023 */
function renderautocompleteitem(item) {

	id = item.BasicResponseGroup.actual_id;
	desc = item.BasicResponseGroup.description;
	displaytype = item.BasicResponseGroup.displaytype;
	url = item.BasicResponseGroup.linkurl;
	boxcover = item.BasicResponseGroup.boxcover;
	sboxcover = item.BasicResponseGroup.sboxcover;
	
	displaystring = "<div class='col-sm-4'>";
	displaystring += "<a href='" + url + "?qs=" + desc.replace('&', 'and') + "' class='rec-item auto' id='recitem_" + id + "'>";
	
	//Detect viewport size and show/hide thumbnail accordingly
	if ($(window).width() > 768) {
		displaystring += "<span class='thumb " + displaytype.toLowerCase() + "'>";
		switch (displaytype.toLowerCase()) {
			case "category":
				displaystring += '<img src="//images.adultempire.com/res/pm/ico_list_dark_66x66.png" alt="" title="" />';
				break;
			case "studio":
				displaystring += '<img src="//images.adultempire.com/res/pm/ico_clapper_dark_66x66.png" alt="" title="" />';
				break;
			default:
				displaystring += sboxcover;
				break;
		}

		displaystring += "</span>";
	}
	displaystring += "<span class='title'>";
	if (desc.length > 40)
		displaystring += desc.substring(0, 40) + "...";
	else
		displaystring += desc;
	displaystring += "</span>";
	displaystring += "<br/><small>" + displaytype + "</small>";
	displaystring += "</a>";
	displaystring += "</div>";

	$('#autopopulated_items').append(displaystring);
}


function undoAutoComplete() {
	currentActive = -1;

	animateOut("autopopulated");
	$("#autopopulated").hide();
	$("#autopopulated_items").html("");

	animateIn("");  //Animate in nothing.  Thus shrinking the thing to a height of zero.

}

function insertFeaturedProduct(string) {
	$("#featuredproduct").html('');
	if ($('#txt_search').val().indexOf("jenna") != -1) {
		$("#featuredproduct").html('<div class="col-sm-4"><a href="/" class="featured" style="display:xnone;"><span class="thumb"><img src="{% imgGeneric "actors/52215h.jpg" %}" alt="" title="" /></span><span class="title">Jenna Haze</span></a></div>');
	}
	if ($('#txt_search').val().indexOf("pirates") != -1) {
		$("#featuredproduct").html('<div class="col-sm-4"><a href="/" class="featured" style="display:xnone;"><span class="thumb"><img src="{% imgGeneric "products/15/700215h.jpg" %}" alt="" title="" /></span><span class="title">Pirates</span></a></div>');
	}

}

function takesearchaction() {
	if (keypadActive) {
		//Go to the selected grid item
		if ($("#gridlinkurl").val() != "")
			document.location.href = $("#gridlinkurl").val();
	}
	else {
		//Do a search
		var searchURL = $("#searchurl").val();
		var searchString = $("#txt_search").val();

		if (searchURL.indexOf("gaydvdempire.com") != -1)
			searchURL = searchURL.replace("http:\/\/www.adultdvdempire.com", "");

		// search must at least 2 characters.
		if (searchString.length < 2)
			$("#txt_search").focus();
		else
			document.location.href = searchURL + "?q=" + searchString;
	}
}

function togglesearchmedia() {
	if ($("#search-media-toggle").hasClass("open"))
		closesearchmedia();
	else
		opensearchmedia();
}

function opensearchmedia() {
	$("#search-media-toggle").addClass("open");
}
function closesearchmedia() {
	$("#search-media-toggle").removeClass("open");
}

function updatesearchmedia(media, searchurl) {
	if (media == "VOD")
		$("#search-media-label").html("On Demand");
	else
		$("#search-media-label").html(media);

	closesearchmedia();
	
	$("#searchurl").val(searchurl);
	$("#txt_search").focus();
}

function toggleaccountmenu() {
	if (currentopenmenu != "")
		killNav("all");

	if ($("#site-nav-account").hasClass("open"))
		$("#site-nav-account").removeClass("open");
	else
		$("#site-nav-account").addClass("open")
}

//Detect window resize and kill the navigation to prevent display bugs
$(window).resize(function () {
    if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
       
      //dont do anything
    } else {
      killNav("all");
    }
  });

//Bind touch event to open search
$("#site-search").bind('touchend',function() {
	searchFocus();
});


function togglerefinemenu(){
	if ($("#refine-menu").hasClass("active"))
		$("#refine-menu").removeClass("active")
	else
		$("#refine-menu").addClass("active")
}

function toggleMoreRefinesMenu(id) {
	if ($("#" + id).hasClass("active")) {
		$("#" + id).removeClass("active");
		hidemegamask();
	}
	else {
		$("#" + id).addClass("active");
		showmegamask();
	}
}

//currently not in use. but will be used when we move to the entity ranking system

// do not remove. dbc 07/18/2015

//function TogglePerformerFavorite(el, favID, favType) {
//	// Warning, assumes success
//	if (!$(el).hasClass("active")) {
//		$(el).addClass("active");
//		if ($("#favcount")) {
//			var newfavcount = parseInt($("#favcount").html()) + 1;
//			$("#favcount").html(newfavcount);
//		}
//	}
//	else {
//		$(el).removeClass("active");
//		if ($("#favcount")) {
//			var newfavcount = parseInt($("#favcount").html()) - 1;
//			$("#favcount").html(newfavcount);
//		}
//	}

//	$.ajax({
//		url: "/Favorites/Toggle",
//		dataType: "json",
//		data: ({
//			'favID': favID,
//			'favType': favType,
//			'salt': +new Date()
//		}),
//		success: function (data) {
//			//assume success
//		}
//	});
//}

// end currently not in use. do not erase


function ShowAddedMessage(id) {
	$("#" + id + "_wishlist").hide();
	$("#" + id + "_wishlist_message").show();

}

function RemoveWishList(itemID) {
	// Warning, assumes success

	$.ajax({
		url: "/WishList/Toggle",
		dataType: "json",
		data: ({
			'itemID': itemID,
			'salt': +new Date()
		}),
		success: function (data) {
			//alert("success");
			$("#" + itemID + "_Item").slideUp();
		}
	});
}

function SlideUp(itemID) {
    $("#" + itemID + "_Item").slideUp();
}


//Nav Scripts 2017///////////////////////////////////////////////////////////////////////////////////////////////////////

//show desktop navigation menu
function showsecondarynav() {
	if ($(this).prop("id")) {
		var navid = $(this).prop("id").replace("nav-", "");
		
		//Load the Banner image ONLY if the user fires the event the first time
		if ((navid == "unlimited") && ($("#nav-" + navid).hasClass("unloaded"))) {
			$("#nav-" + navid).removeClass("unloaded")
			var bgsrc = $("#navhero-" + navid).attr("bg-src");
			$("#navhero-" + navid).css("background-image", "url(" + bgsrc + ")");
		}
		
		//mark it as active
		$("#nav-" + navid).addClass("active");
		//show the menu
		$("#sub-nav-" + navid).slideDown();

		//if search is not active, show the mask
		if (!$("#txt_search2017").hasClass("active")) {
			showmegamask();
		}

	}
}

//hide desktop navigation menu
function hidesecondarynav() {
	if ($(this).prop("id")) {
		var navid = $(this).prop("id").replace("nav-", "");
		
		//mark it inactive
		$("#nav-" + navid).removeClass("active");
		//hide menu
		$("#sub-nav-" + navid).slideUp();

		//if search is show, dont show the mask
		if (!$("#txt_search2017").hasClass("active")) {
			hidemegamask();
		}
	}
}

//small screen main navigation menu toggle
function togglemainnav() {

	if ($("#main-nav-subcontainer").hasClass("active")) {
		$("#main-nav-subcontainer").removeClass("active");
		$("#main-nav-toggle").removeClass("active");
		$("#main-nav-subcontainer").slideUp();
	}
	else {
		$("#main-nav-subcontainer").addClass("active");
		$("#main-nav-toggle").addClass("active");
		$("#main-nav-subcontainer").slideDown();
	}
}

//small screen secondary navigation menu toggle
var currentactivenav = "";
function togglesecondarynav(id) {
	if (currentactivenav != "") {
		if (currentactivenav == id) {
			currentactivenav = "";
			$("#nav-" + id).removeClass("active");
			$("#sub-nav-" + id).slideUp();
		}
		else{
			$("#nav-" + currentactivenav).removeClass("active");
			$("#sub-nav-" + currentactivenav).slideUp();
			currentactivenav = id;
			$("#nav-" + id).addClass("active");
			$("#sub-nav-" + id).slideDown();
		}
	}
	else {
		currentactivenav = id;
		$("#nav-" + id).addClass("active");
		$("#sub-nav-" + id).slideDown();
	}
}

//Killsecondary nav - iPad fallback
function killsecondarynav() {
	$("#nav-" + currentactivenav).removeClass("active");
	$("#sub-nav-" + currentactivenav).slideUp();
}

//Search 2017////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Autocomplete vars
var timer2017;
var delay2017 = 300; //delay for keypress

function initializeSearchControls(){

	$("#txt_search2017").focus(function () {
		//iPad fallback - kill navigation if open
		if (currentactivenav != "") {
			killsecondarynav();
		}
	});

	//Bind change event to search media selector
	$("#selectedsearchtype2017").change(function(){
		$("#searchurl").val($("option:selected", "#selectedsearchtype2017").attr("searchurl"));
	});
	
	//Check to see if they pasted a string
	$('#txt_search2017').on('paste', function () {
		  setTimeout(function () {
			//Add slight delay to get the text in the field
			autocomplete2017();
		  }, 100);
	});
	
	//Bind keydown event to search input box
	$('#txt_search2017').keydown(function (e) {
		//Prevent the caret from moving front and back
		if ((e.which == 38) || (e.which == 40)) {
			e.preventDefault();
		}
	
		//Check to see if they hit the escape key
		if (e.which == 27) {
			//reset search
			undoAutoComplete2017();
		}
		else{
			//Check to see if they're trying to go up/down in the auto-complete
			if ((e.which == 38) || (e.which == 40)) { //They're using arrows. Highligh items in list
				recalculate2017(e); //calculate what the active cell should be
				reposition2017();
			}
			else{
				//Check to see if they didnt press shift, ctrl, alt buttons
				if ((e.which != 16) && (e.which != 17) && (e.which != 18)) {
					//Check to see if they hit enter button
					if (e.which == 13) {
						takesearchaction2017();
					}
					else{
						//check to see if the search field is empty (they hit backspace or delete)
						if ($("#txt_search2017").val().trim() == ""){
							undoAutoComplete2017();
						}
						else{
							//Delay doing autocomplete while the user potentially continues typing
							window.clearTimeout(timer2017);
							timer2017 = window.setTimeout(function () {
								//Fill in auto-complete list
								autocomplete2017();
							}, delay2017);

						}
					}
				}
			}
		}
	
	});

	//Bind click event to search button
	$("#btn-search").click(function(){
		DoSearch2017();
	});
	
}

function DoSearch2017() {
    takesearchaction2017()
	/*var searchString = $("#searchurl").val();

	if (searchString.indexOf("gaydvdempire.com") != -1)
		searchString = searchString.replace("http:\/\/www.adultdvdempire.com", "");

	//Check to see if search string is greater than 2 characters
	if ($("#txt_search2017").val().length < 2) {
		$("#txt_search2017").focus(); 
		return false;
	}
	else{
		//Do a search
        //document.location.href = "/" + searchString + "?q=" + searchString + "&sort=score";
        // var query = "{0}?q={1}".format(searchString, escape($("#txt_search2017").val()));
		// document.location.href = query + "&sort=score";
		//document.location.href = "{0}?q={1}".format(searchString, escape($("#txt_search2017").val())); 
	}*/
}


function autocomplete2017() {
	var searchstring = $("#txt_search2017").val().trim();
	var mediatype = $("#selectedsearchtype2017").val();
	//Check to see if they're doing a gay search on non-gay site. If so, cancel auto complete.
	if ((mediatype == "Gay"))
		return false;

	//do autocomplete
	if (searchstring == ""){
		//search string is empty, undo the search stuffs
		undoAutoComplete2017();
	}
	else{
		
		//show that search is active
		$("#txt_search2017").addClass("active");

		//show the site mask
		showmegamask();

		//do the autocomplete
		$.ajax({
			url: "/search/SearchAutoComplete_Agg_EmpireDTRank",
			dataType: "jsonp",
			data: {
				rows: autocompleteItemCount,
				name_startsWith: searchstring,
				search_type: mediatype
			},
			success: function (data) {
				currentActive = -1;
				totalGridItems = 0;

				//animated out any autopopulated grid
				animateOut("autopopulated");
				//show autopopulated grid if it's not already visible
				$("#autopopulated").show();
				//remove items already showing
				$('#autopopulated_items').html("");

				//Loop through the results
				data.Results.forEach(function (item) {
					//Generate markup for the grid items and append them to the grid
					renderautocompleteitem2017(item);
					totalGridItems++;
				});
				//Animate in the grid items
				animateIn("autopopulated");
			}
		});
	}	
}

function renderautocompleteitem2017(item) {
	
	id = item.BasicResponseGroup.actual_id;
	desc = item.BasicResponseGroup.description;
	displaytype = item.BasicResponseGroup.displaytype;
	url = item.BasicResponseGroup.linkurl;
	boxcover = item.BasicResponseGroup.boxcover;
	sboxcover = item.BasicResponseGroup.sboxcover;
    switch (displaytype.toLowerCase()) {
        case "performer":
            arialabel = desc;
            break;
        case "vod":
            arialabel = "Video On Demand : " + desc;
            break;
        default:
            arialabel = displaytype + " : " + desc;
            break;
    }
    
	displaystring = "<li class='autocomplete-item'>";
    displaystring += "<a href='" + url + "' id='recitem_" + id + "' Category='Main Nav' Label='AutoComplete Link' aria-label='" + arialabel + "'>";

	//Detect viewport size and show/hide thumbnail accordingly
	if ($(window).width() > 768) {
		displaystring += "<span class='thumb " + displaytype.toLowerCase() + "'>";
		switch (displaytype.toLowerCase()) {
			case "category":
				displaystring += '<img src="//images.adultempire.com/res/bn/ico_folder_dark_66x66.png" />';
				break;
			case "studio":
				displaystring += '<img src="//images.adultempire.com/res/bn/ico_clapper_dark_66x66.png" />';
				break;
            case "attribute":
                displaystring += '<img src="//images.adultempire.com/res/bn/ico_folder_dark_66x66.png" />';
                break;
			default:
				displaystring += sboxcover;
				break;
		}
		displaystring += "</span>";
	}
	displaystring += "<span class='title'>";
	if (desc.length > 40)
		displaystring += desc.substring(0, 40) + "...";
	else
		displaystring += desc;
	displaystring += "</span>";
	displaystring += "<small>" + displaytype + "</small>";
	displaystring += "</a>";
	displaystring += "</li>";

	$('#autopopulated_items').append(displaystring);
}

function recalculate2017(e) {
	//Recalculate position of the selected grid item.
	
	if (e.keyCode == 38) { // move up
		if (currentActive != 0){
			currentActive = currentActive - 1;
		}
	}
	if (e.keyCode == 40) { // move down
		if (currentActive < 0)
			currentActive = 0;
		else {
			if (currentActive < totalGridItems - 1)
				currentActive = currentActive + 1;
		}
	}
}

function reposition2017() {
	//Reposition the indicator for the current selected grid item.

	//Unselect the previous active
	$(".autocomplete-item a.active").removeClass("active");
	//Set the new active
	$(".autocomplete-item a").eq(currentActive).addClass("active");
	//Set the link url for if the user hits enter
	$("#gridlinkurl").val($(".autocomplete-item a").eq(currentActive).attr("href"));
}

function takesearchaction2017() {
	//Check to see if the user selected something in the auto-complete list
	if ($("#gridlinkurl").val() != "") {
		//Go to auto-complete item
		document.location.href = $("#gridlinkurl").val();
	}
	else {
		//Do a search
		var searchURL = $("#searchurl").val();
		var searchString = $("#txt_search2017").val();
				 
		if (searchURL.indexOf("gaydvdempire.com") != -1) {
			searchURL = searchURL.replace("http:\/\/www.adultdvdempire.com", "");
		}

		// search must at least 2 characters.
		if (searchString.length < 2) {
			$("#txt_search2017").focus();
		}
		else {
            if(searchURL == "clips/search") {
			    document.location.href = "/" + searchURL + "?q=" + searchString + "&sort=score";
            } else document.location.href = "/" + searchURL + "?q=" + searchString;
		}
	}
}

function undoAutoComplete2017() {
	hidemegamask();
	$("#txt_search2017").removeClass("active");
	$('#txt_search2017').val("");
	$("#gridlinkurl").val("")
	currentActive = -1;
	$("#autopopulated_items").html("");
}

/*Show/Hide Unlimited Message on site logo*/
function showunlimitednavmsg() {
	//$("#tryunlimited").addClass("active");
	$("#beacon-unlimited").addClass("active");
}

function hideunlimitednavmsg() {
	//$("#tryunlimited").removeClass("active");
	$("#beacon-unlimited").removeClass("active");
}

function togglesearch2017() {
	if ($("#nav-search").hasClass("active")) {
		//Hide search controls
		$("#a-searchtoggle").removeClass("active");
		$("#nav-search").removeClass("active");
		$("#nav-search").slideUp();
	}
	else {
		//Show search controls
		$("#a-searchtoggle").addClass("active");
		$("#nav-search").addClass("active");
		$("#nav-search").slideDown();
		$("#txt_search2017").focus();

		//Scroll to search anchor
		$('html, body').animate({
			scrollTop: $("#searchanchor").offset().top
		}, 1000);
	}
}


/*Animated Screenshots 2017*/

// Screenshot animation on hover.
$(".animate").mouseenter(function () {
	$("#" + $(this).attr("id")).attr("style", "background-image:url('" + $("#" + $(this).attr("id")).attr("thumb") + "')");
	startanimatescreens($(this).attr("id"));
});

// Screenshot animation stop.
$(".animate").mouseleave(function () {
	stopanimatescreens($(this).attr("id"));
});

// Screenshot animation stop on click.
$(".animate").click(function (e) {
	clearTimeout(timeout);
	$("#" + $(this).attr("id")).attr("src", $("#" + $(this).attr("id")).attr("thumb"));
	$(this).unbind('mouseenter');
});

// Creates the Array necessary for the screenshot animation.
var imgarray = new Array();
var timeout;
function changescreen(id, index) {
	$("#" + id).attr("src", imgarray[index]);

	if (index == (imgarray.length - 1))
		index = 0;
	else
		index++;
	timeout = setTimeout(function () { changescreen(id, index); }, 1000);
}

// Creates the Array necessary for the screenshot animation.
function startanimatescreens(id) {
	$.ajax({
		url: "/Subscription/GetScreenshots?sceneID=" + id,
		dataType: "json",
		async: false,
		success: function (data) {
			var frames = data;

			if (frames.length > 10) {
				imgarray = frames.split(",");
				changescreen(id, 0);
			}
		}
	});
}

// Stops screenshot animation on mouse out.
function stopanimatescreens(id) {
	$("#" + id).attr("src", $("#" + id).attr("thumb"));
	clearTimeout(timeout);
}

function closeCartAlert(){
    hidemegamask();
    killCartAlert();
    }

function killCartAlert(){
    $("#cartAlert").slideUp();
}

function addToCart2019(id){
    showmegamask();
    $("#cartAlert").slideDown();
}

function activateGridItemCard(){
    $(this).addClass("active");
}
function deactivateGridItemCard(){
    $(this).removeClass("active");
}

//Mobile Clip Refines July 2023 //////////////////////////////////////////////////
function resetClipList(){
    resetFilteredList();
}

function applyClipListFilters(){

    //Get Performers
    var perfCheckboxes = document.querySelectorAll('.checkbox-clipPerformer');
    var perfQueryString = "";
    perfCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            if (perfQueryString.includes(checkbox.value)) {
                //Already in the list. Do nothing. (User likely selected from the featured pool and it happened to be doubled up.)
            }
            else{
                perfQueryString = perfQueryString + "cast=" + checkbox.value + "&";
            }
        }
    });

    //Get Attributes
    var attrCheckboxes = document.querySelectorAll('.checkbox-clipAttribute');
    var attrQueryString = "";
    attrCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            attrQueryString = attrQueryString + "scene_attribute=" + checkbox.value + "&";
        }
    });

    //Get Popular Attributes
    var attrCheckboxes = document.querySelectorAll('.checkbox-clipPopAttribute');
    attrCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            attrQueryString = attrQueryString + "scene_attribute=" + checkbox.value + "&";
        }
    });

    //Get Studio
    var studiosCheckboxes = document.querySelectorAll('.checkbox-studio');
    var studioQueryString = "";
    studiosCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            studioQueryString = studioQueryString + "studio=" + checkbox.value + "&";
        }
    });
    
    // Send user to the page with filters applied.
    window.location.href = '?' + attrQueryString + perfQueryString + studioQueryString;

}

//List Refines March 2024 //////////////////////////////////////////////////////
function resetFilteredList(){
    var container = document.getElementById('refine-menu');
    // Get all checkboxes within the container div
    var checkboxes = container.querySelectorAll('input[type="checkbox"]');

    // Loop through each checkbox
    checkboxes.forEach(function(checkbox) {
      // Uncheck the checkbox
      checkbox.checked = false;
    });
}

function ageConfirmationClicked() {
	$.ajax({
		url: "Account/AgeConfirmation",
		data: ({
			ageConfirmationClicked: true
		}),
		success: function () {
					
			window.location = $(ageConfirmationButton).attr('data-url');
					   
		}
	});
}

/* Trash filter function */
function _applyListFilters() {

    //Get Media
    //Ugh... This part is so ugly, just going to leave it as a link.  For now... - DG 2.22.2024
    // Make these radio buttons like some of the others, you dumb-dumb. - DG 2.28.2024

    //Get the q values
    const qValues = document.querySelectorAll('input[name="q"]');
    const qString = Array.from(qValues)
        .filter(input => input.value)
        .map(input => `&q=${input.value}`)
        .join('&');
    
    //Get the fq values
    const fqValues = document.querySelectorAll('input[name="fq"]');
    const fqString = Array.from(qValues)
        .filter(input => input.value)
        .map(input => `&fq=${input.value}`)
        .join('&');

    //Get the search this list value
    const searchThisListString = document.getElementById('fq')?.value || '';

    // Get Sales Filters
    const saleCheckboxes = document.querySelectorAll('.checkbox-onsale');
    const saleQueryString = Array.from(saleCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => "&fq=on_sale%3atrue")
        .join('&');

    // Get Categories
    const catCheckboxes = document.querySelectorAll('.checkbox-cat');
    const catQueryString = Array.from(catCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `category=${checkbox.value}`)
        .join('&');

    // Get Performers
    const perfCheckboxes = document.querySelectorAll('.checkbox-performer');
    let perfQueryString = '';
    const selectedPerformers = new Set();
    perfCheckboxes.forEach(checkbox => {
        if (checkbox.checked && !selectedPerformers.has(checkbox.value)) {
            perfQueryString += `cast=${checkbox.value}&`;
            selectedPerformers.add(checkbox.value);
        }
    });

    // Get Series
    const seriesCheckboxes = document.querySelectorAll('.checkbox-series');
    const seriesQueryString = Array.from(seriesCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `series=${checkbox.value}`)
        .join('&');

    // Get Studios
    const studiosCheckboxes = document.querySelectorAll('.checkbox-studio');
    const studiosQueryString = Array.from(studiosCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `studio=${checkbox.value}`)
        .join('&');

    // Get Prices
    //THIS NOT WORKING BECAUSE THE CHECKBOXES AREN'T ON THE PAGE WHEN ONE IS SELECTED.  FIX.
    const priceCheckboxes = document.querySelectorAll('.checkbox-price');
    const priceQueryString = Array.from(priceCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `price=${checkbox.value}`)
        .join('&');

    //Get Release Date
    const releaseCheckboxes = document.querySelectorAll('.checkbox-release');
    const releaseQueryString = Array.from(releaseCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `release_date=${checkbox.value}`)
        .join('&');

    //Get Disc Count
    const discsCheckboxes = document.querySelectorAll('.checkbox-discs');
    const discsQueryString = Array.from(discsCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `discs=${checkbox.value}`)
        .join('&');

    //Get Run Time
    const lengthCheckboxes = document.querySelectorAll('.checkbox-length');
    const lengthQueryString = Array.from(lengthCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `length=${checkbox.value}`)
        .join('&');

    // Log the generated query strings
    /*
    console.log(`cats=${catQueryString}`);
    console.log(`cast=${perfQueryString}`);
    console.log(`searchThisListString=${searchThisListString}`);
    console.log(`q=${qString}`);
    console.log(`fq=${fqString}`);
    console.log(`series=${seriesQueryString}`);
    console.log(`studio=${studiosQueryString}`);
    console.log(`price=${priceQueryString}`);
    console.log(`release=${releaseQueryString}`);
    console.log(`discs=${discsQueryString}`);
    console.log(`runtime=${lengthQueryString}`);
    */

    //Build the navigate URL 
    var navigateURL = "?";
    priceQueryString
    if (catQueryString.length > 0){
        navigateURL = navigateURL + "&" + catQueryString;
    }
    if (perfQueryString.length > 0){
        navigateURL = navigateURL + "&" + perfQueryString;
    }
    if (searchThisListString.length > 0){
        navigateURL = navigateURL + "&fq=" + searchThisListString;
    }    
    if (qString.length > 0){
        navigateURL = navigateURL + qString;
    }
    if (fqValues.length > 0){
        navigateURL = navigateURL + fqString;
    }
    if (saleQueryString.length > 0){
        navigateURL = navigateURL + saleQueryString;
    }
    if (seriesQueryString.length > 0){
        navigateURL = navigateURL + "&" + seriesQueryString;
    }
    if (studiosQueryString.length > 0){
        navigateURL = navigateURL + "&" + studiosQueryString;
    }
    if (priceQueryString.length > 0){
        navigateURL = navigateURL + "&" + priceQueryString;
    }
    if (discsQueryString.length > 0){
        navigateURL = navigateURL + "&" + discsQueryString;
    }
    if (lengthQueryString.length > 0){
        navigateURL = navigateURL + "&" + lengthQueryString;
    }
    if (releaseQueryString.length > 0){
        navigateURL = navigateURL + "&" + releaseQueryString;
    }
    
    //Shoot the user over to their destination.
    console.log(`navigateURL=${navigateURL}`);
    window.location.href = navigateURL;

}

function applyListFilters() {
    const queryParams = {};
    const onSaleParam = "fq=on_sale:true"
    const onSaleChecked = Array.from(document.querySelectorAll('.checkbox-onsale')).some(checkbox => checkbox.checked)

    // Get the q values
    queryParams.q = Array.from(document.querySelectorAll('input[name="q"]'))
        .filter(input => input.value)
        .map(input => `q=${input.value}`)
        .join('&');

    // Get the fq values
    queryParams.fq = Array.from(document.querySelectorAll('input[name="fq"]'))
        .filter(input => input.value)
        .map(input => `fq=${input.value}`)
        .join('&');

    // Get Sales Filters
    if(onSaleChecked) {
        queryParams.fq +=  !queryParams.fq.includes(onSaleParam) ? Array.from(document.querySelectorAll('.checkbox-onsale'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => !!queryParams.fq.length ? `&fq=on_sale%3atrue` : 'fq=on_sale%3atrue')
            .join('&') : ''
    } else {
        queryParams.fq = queryParams.fq.split('&').filter(param => param !== onSaleParam).join('&');
    }

    // Get Categories
    queryParams.category = Array.from(document.querySelectorAll('.checkbox-cat'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `category=${checkbox.value}`)
        .join('&');

    // Get Performers
    const selectedPerformers = new Set();
    queryParams.cast = Array.from(document.querySelectorAll('.checkbox-performer'))
        .filter(checkbox => checkbox.checked && !selectedPerformers.has(checkbox.value))
        .map(checkbox => {
            selectedPerformers.add(checkbox.value);
            return `cast=${checkbox.value}`;
        })
        .join('&');

    // Get Series
    queryParams.series = Array.from(document.querySelectorAll('.checkbox-series'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `series=${checkbox.value}`)
        .join('&');

    // Get Studios
    queryParams.studio = Array.from(document.querySelectorAll('.checkbox-studio'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `studio=${checkbox.value}`)
        .join('&');

    // Get Prices
    queryParams.price = Array.from(document.querySelectorAll('.checkbox-price'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `fq=price%3a${encodeURIComponent(checkbox.value)}`)
        .join('&');

    // Get Release Date
    queryParams.release_date = Array.from(document.querySelectorAll('.checkbox-release'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `release_date=${checkbox.value}`)
        .join('&');

    // Get Disc Count
    queryParams.discs = Array.from(document.querySelectorAll('.checkbox-discs'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `fq=discs%3a${checkbox.value}`)
        .join('&');

    // Get Run Time
    queryParams.length = Array.from(document.querySelectorAll('.checkbox-length'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => `fq=length%3a${checkbox.value}`)
        .join('&');

    // Build the navigate URL
    const navigateURL = Object.values(queryParams).filter(param => param.length > 0).join('&');

    // Shoot the user over to their destination.
    console.log(`navigateURL=${navigateURL}`);
    window.location.href = `?${navigateURL}#tabs`;
}

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.single-select-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
});


const slideButton = document.getElementById('remove-button-slide')
  if(slideButton) {
    slideButton.addEventListener('click', () => {
		SlideUp('id');
	  });
  }
      


