$(document).ready(function() {
    
  // fix ie flickr problem
  if($.browser.msie){
    try {
      document.execCommand("BackgroundImageCache", false, true);
    } catch(err){}
  }
   
  function gup( name ) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if (results == null)
      return "";
    else
      return results[1];
  } 
  
  function showCommentPic() {
    var user_signed_in = $('#user_signed_in_pic');
    if(user_signed_in.length > 0) {
      var src = user_signed_in.attr('src');
      if(src.length > 0) {
        $('#comment_userpic').attr({'src':src})
      }
    }
  }
  
  showCommentPic();
  
  function showByID(id) {
      var el = getByID(id);
      if (el) el.style.display = "block";
  }
  function hideByID(id) {
      var el = getByID(id);
      if (el) el.style.display = "none";
  } 


// Controls drop-down in top nav 
  
  function showNav() {  
    if($("#all_topics_subnav, #all_topics").is(":hidden")) {
      $("#all_topics_subnav, #all_topics").slideDown("fast");
      if($.browser.msie) $('select').css({ 'visibility':'hidden' });
    }
  }
  
  function hideNav() {}

  var config = {    
       sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
       interval: 400, // number = milliseconds for onMouseOver polling interval    
       over: showNav, // function = onMouseOver callback (REQUIRED)    
       timeout: 600, // number = milliseconds delay before onMouseOut    
       out: hideNav // function = onMouseOut callback (REQUIRED)    
  };
    
  $(".section").hoverIntent( config );
  
  var config = {    
       sensitivity: 3,   
       interval: 100,    
       over: showNav, 
       timeout: 100,  
       out: hideNav 
  };
  
  $(".allTopics").hoverIntent( config );  
  
  $(".allTopics").click(function(e){e.preventDefault();});        
  $(".button, #all_topics_subnav, #all_topics").mouseover(function(e){e.stopPropagation();});

  $("#all_topics_subnav, #all_topics").mouseleave(function(){$("#all_topics_subnav, #all_topics").slideUp("fast");}); 

  $("body").mouseover(function(e) {
    $("#all_topics_subnav, #all_topics").slideUp("fast");
    if($.browser.msie) $('select').css({ 'visibility':'visible' });
  }); 


//controls footer tabs
  $("#footer_tab_topics").click(function(){
      $("#tab_content_topics").show();
      $("#tab_content_neighborhoods").hide();
      $(this).addClass("selected");
      $("#footer_tab_neighborhoods").removeClass("selected");
  });
  
  $("#footer_tab_neighborhoods").click(function(){
      $("#tab_content_topics").hide();
      $("#tab_content_neighborhoods").show();
      $(this).addClass("selected");
      $("#footer_tab_topics").removeClass("selected");;
  });

  //controls expanding comment box
  $("#comment_signed_in input.text").focus(function(){
    if($("#comment_form_expanded").is(":hidden")) {                       
      $("#comment_form_expanded").show();
    }
  });
  
  /* controls browse by type list in events */
  $("#view_more_options").click(function(){
    $("#view_more_options").hide();
    $("#browse_2").show();
  });
  
  //event calendar on home page
  $('#more_events').live("click", function(){$("#home_eventsCalendarCategoriesPopup").show();});
  $('#more_events').live("mouseover", function(){$("#home_eventsCalendarCategoriesPopup").show();});
  $("#home_eventsCalendarCategoriesPopup").live("mouseleave", function(){$("#home_eventsCalendarCategoriesPopup").hide();});  
  $("#home_eventsCalendarCategoriesPopup").mouseleave(function(){$("#home_eventsCalendarCategoriesPopup").hide();});  
  
  // EVENT SEARCH FORM 
  $('input.event_search_text').focus(function(){if(this.value.replace(/^\s+|\s+$/g, '') == "Search Upcoming Events") {this.value = "";}});
  $('input.event_search_text').blur(function(){if(this.value.replace(/^\s+|\s+$/g, '') == "") {this.value = "Search Upcoming Events";}});
    
  $('#event_search_submit').click(function(){validateSearch('event_search_form')}); 
  $('#event_search_submit_lr').click(function(){validateSearch('event_search_form_lr')});
  

  function validateSearch(form) {
    var form = document[form];    
    if(form.q.value.replace(/^\s+|\s+$/g, '') == "" || form.q.value.replace(/^\s+|\s+$/g, '') == "Search Upcoming Events") {
      form.q.value = "Search Upcoming Events";
    }else {form.submit();}
  }

  //Event calendar
  $('#previous_3 a.next_month').click(function(){ $("#previous_3").hide();$("#previous_2").show();});
  
  $('#previous_2 a.next_month').click(function(){
    $("#previous_2").hide();
    $("#previous_1").show();
  });
  $('#previous_2 a.previous_month').click(function(){
    $("#previous_2").hide();
    $("#previous_3").show();
  });
  
  $('#previous_1 a.next_month').click(function(){
    $("#previous_1").hide();
    $("#current").show();
  });
  $('#previous_1 a.previous_month').click(function(){
    $("#previous_1").hide();
    $("#previous_2").show();
  });
  
  $('#current .next_month').click(function(){
    $("#current").hide();
    $("#next_1").show();
  });
  $('#current .previous_month').click(function(){$("#current").hide();$("#previous_1").show();});
  $('#next_1 a.next_month').click(function(){$("#next_1").hide();$("#next_2").show();});
  $('#next_1 a.previous_month').click(function(){$("#next_1").hide();$("#current").show();});
  $('#next_2 a.next_month').click(function(){$("#next_2").hide();$("#next_3").show();});
  $('#next_2 a.previous_month').click(function(){$("#next_2").hide();$("#next_1").show();});
  $('#next_3 a.previous_month').click(function(){$("#next_3").hide();$("#next_2").show();});
  
  //Show/hide filtration
  $('#show_more_filters').click(function(){$("#type_attributes").show();$("#show_more_filters").hide();});
  $('#browse_type_link').click(function(){$("#browse_type").show();$("#browse_hood").hide();});
  $('#browse_hood_link').click(function(){$("#browse_hood").show();$("#browse_type").hide();});
  $('#browse_type_link_lr').click(function(){$("#browse_type_lr").show();$("#browse_hood_lr").hide();});
  $('#browse_hood_link_lr').click(function(){$("#browse_hood_lr").show();$("#browse_type_lr").hide();});
  
  //Event detail download to calendar dd
  $('#downloadCalendar').live("click", function(){$("#downloadCalendarDD").toggle();});
  $('#downloadCalendar').live("mouseover", function(){$("#downloadCalendarDD").toggle();});
  $("#downloadCalendarDD").live("mouseleave", function(){$("#downloadCalendarDD").hide();});  
  $("#downloadCalendarDD").mouseleave(function(){$("#downloadCalendarDD").hide();});  
  
  
  // Got News? Functionality
  $('#ugc_cancel_btn').click(function(){
    cancel_box=confirm("Are you sure you wish to leave the submission page?");
    if (cancel_box==true) {history.go(-2);}
    });

  $('#ugc_preview_btn').click(function(){
  
    var iFrame = document.getElementById('entry-body_ifr');     
    var storyText = iFrame.contentWindow.document.body.innerHTML;
    var storyTitle = document.entry_form.title.value;
    //validation
    var isValid = true;
    if(storyTitle.replace(/^\s+|\s+$/g, '') == "") {
      $('#ugc_error').text("Please write a title.");
      isValid = false;
      var noTitle = true;
    }
    
    if(isValid){
      document.getElementById('ugc_story_text').innerHTML =  storyText;     
      document.getElementById('ugc_story_title').innerHTML = storyTitle;              
      $("#story_form").hide();
      $("#story_preview").show();
    } else {$('#ugc_error').show(); }
    
  });
  
  $('.edit_btn').click(function(){
    $("#story_form").show();
    $("#story_preview").hide();   
    });
    
  // Validation for UGC for fields
  $('#story_preview .entry-submit').click(function(){
    var form = document.entry_form.submit();;
  });
  

  //controls  filter dropdown
  function showFilter() {
    if($("#filter_dropdown").is(":hidden")) {
      $("#filter_dropdown").slideDown("fast");
      if($.browser.msie) $('select').css({ 'visibility':'hidden' });
      $("body").hoverIntent(function() {
        $("#filter_dropdown").slideUp("fast");
        if($.browser.msie) $('select').css({ 'visibility':'visible' });
      });
    }
  }

  $("#filter_dd_trigger").hoverIntent({
    over:showFilter,
    out:function() {}
  });
  
  $("#filter_dd_trigger").click(function(e){
    e.preventDefault();
    $("#filter_dropdown").slideDown("fast");
    if($.browser.msie) $('select').css({ 'visibility':'hidden' });
  });
    
  $("#filter_dropdown").mouseover(function(e){
    e.stopPropagation();
  });
    
  $("#filter_dropdown").mouseleave(function(){
    $("#filter_dropdown").slideUp("fast");
  });
  
  //show/hide more results
  
  $('a.viewMore-toggle').click(function() {
    var currentIndex =  $("a.viewMore-toggle").index($(this));
     $('.viewMoreResults').eq(currentIndex).slideToggle('fast');
     return false;
   });
    
    $("a.viewMore-toggle").each(
    function(){
      $(this).click(
        function(){
          $(this).toggleClass("opened");
          $(this).toggleClass("closed");
      });
    });
    
    
  $('a#view_more_options').hover(function() {
    // var currentIndex =   $("a.viewMore-toggle").index($(this));
      $('#browse_2').slideDown('fast');
     return false;
   });
   
  /*
  $(".facebook").mouseover(function() {
    $('.facebook-message').fadeIn("slow");
  });
  $(".facebook").mouseleave(function() {
    $('.facebook-message').fadeOut("fast");
  });
  */
  $(".newsletters").mouseover(function() {
    $('.newsletters-message').fadeIn("slow");
  });
  $(".newsletters").mouseleave(function() {
    $('.newsletters-message').fadeOut("fast");
  });
  
  $(".twt-signup").hide();
  $("li.more_categories a").click(function() {
    $(".twt-signup").fadeToggle("slow");
  });
  
  $('.weather-sticker').click(function() {
  window.location = "/weather/";
  });
  
 });

function php_urlencode(str){var hexStr=function(dec){return'%'+dec.toString(16).toUpperCase()};var ret='',unreserved=/[\w.-]/;str=(str+'').toString();for(var i=0,dl=str.length;i<dl;i++){var ch=str.charAt(i);if(unreserved.test(ch)){ret+=ch}else{var code=str.charCodeAt(i);if(code===32){ret+='+'}else if(code<128){ret+=hexStr(code)}else if(code>=128&&code<2048){ret+=hexStr((code>>6)|0xC0);ret+=hexStr((code&0x3F)|0x80)}else if(code>=2048&&code<65536){ret+=hexStr((code>>12)|0xE0);ret+=hexStr(((code>>6)&0x3F)|0x80);ret+=hexStr((code&0x3F)|0x80)}else if(code>=65536){ret+=hexStr((code>>18)|0xF0);ret+=hexStr(((code>>12)&0x3F)|0x80);ret+=hexStr(((code>>6)&0x3F)|0x80);ret+=hexStr((code&0x3F)|0x80)}}}return ret}

// functions to support polls & bestof

// ======================
// = Scrollto for polls =
// ======================

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


function poll_embed (poll, poll_container) {
    $.ajax({
        url: ["/polls/embed/", poll.toString(), "/?cb=1"].join(''),
        success: function(data){
            $(poll_container).html(data);
        }
    });
}


function load_poll (poll, poll_container) {
    $.ajax({
        url: ["/polls/do_poll/", poll.toString(), "/?cb=1"].join(''),
        success: function(data){
            $(poll_container).html(data);
        }
    });
}


function submit_poll(poll, poll_container) {
    var x = 'poll_' + poll + '_poll_choice_id'
    var y = 'input[name="' + x + '"]:checked'
    var poll_choice = $("'" + y + "'").val()
    $.ajax({
        url: ["/polls/do_poll/", poll.toString(),"/", poll_choice, "/"].join(''),
        type: "POST",
        data: {},
        success: function(data){
            $(poll_container).html(data);
            $('.poll_container_' + poll).scrollTo('.poll_results_' + poll, 250);
            setTimeout("$('p.notice').fadeOut(1500);", 4000);
            $.ajax({
                url: ["/polls/do_poll/", poll.toString(), "/?cb=1"].join(''),
                success: function(data){
                    $('.poll_input_' + poll).html(data);
                }
            });
        }
    });
}


function vote(contest, contestant, tid, poll_container) {
    $.ajax({
        beforeSend: function(){          
            $('#votebutton_' + contestant + ' span.loading').show();
        },
        url: ["/bestof/vote/", contest.toString(), "/", contestant.toString(), "/" , tid, "/"].join(''),
        type: "POST",
        success: function(data){
            $(poll_container).replaceWith(data);
        }
    });
}


function load_poll_results(poll, poll_container) {
    $.ajax({
        url: ["/polls/js_poll_results/", poll.toString(), "/0/?cb=1"].join(''),
        success: function(data){
            $(poll_container).html(data);
            $('.poll_container_' + poll).scrollTo('.poll_results_' + poll, 250);
        }
    }); 
}

function return_poll(poll, poll_container) {
    
    $('.poll_container_' + poll).scrollTo('.poll_input_' + poll, 250);
    
}


function load_random_poll(poll_container) {
    $.ajax({
        url: "/polls/do_poll_random/",
        success: function(data){
            $(poll_container).html(data);
        }
    });
}

jQuery(document).ready(function($) {
	$.ajax({
		url: "/wu-api/7d2cc1538c6b5f3a/geolookup/conditions/alerts/q/MI/Ann_Arbor.json",
		dataType: "json",
		cache: true,
		success: function(parsed_json) {
			var alert_status = parsed_json['alerts'].length;
			var tod_prefix = "";
			var icon_url = parsed_json['current_observation']['icon_url'];
			var temp_f = parsed_json['current_observation']['temp_f'];
			var phrase = "Forecast";
			var image_class = parsed_json['current_observation']['icon'];
			if (icon_url.indexOf("nt_") >= 0) {
				tod_prefix = "nt_";
				image_class = tod_prefix + image_class;
			}
			var message_class = "phrase";
			if (alert_status > 0) {
				var alert_text = parsed_json['alerts'][0]['description'];
				phrase = "Weather Alert";
				message_class = "alert";
			}
			var weather_sticker = '<div class="' + image_class + '"><h4>' + temp_f.toFixed(0) + '&deg;</h4><p class="' + message_class + '"><a href="/weather/">' + phrase + ' &raquo;</a></p></div>';
			$('.weather-sticker').html(weather_sticker);
			// alert("Current temperature in "+location+" is: " + temp_f + " " + image_class);
		}
	});
	

	var social_service = "";
	$('.social .email.message').show();
	$('.social.module ul li a').hover(function() {
		$('.social .message').hide();
		social_service = $(this).text().toLowerCase();
		$('.social .message.' + social_service).slideDown('fast');
		$(this).parent().addClass("active");
	},
		function(){ 
		$('.social .message.' + social_service).hide();
		$(this).parent().removeClass("active");
	});
	
	
	$('.social.module ul').hover(function(){
	$('.social.module .messages').show();
	$('.social.module ul li.email').removeClass('active');
	},
	function() {
	$('.social.module .messages').hide();
	});
});

if(!Modernizr.touch){
$(window).bind('scroll', function(e) {
  var h = $('#navigation');
  if ($(window).scrollTop() > 100) {
     $('body').addClass('stuck');
  } else {
     $('body').removeClass('stuck');
  }
});
}


$(function () {
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  if (!msie6) {
  if ($('body.article .rail .user.module').offset() != null) {
    var top = $('body.article .rail .user.module').offset().top - parseFloat($('body.article .rail .user.module').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
      
      // whether that's below the form
      if (y >= top) {
        // if so, ad the fixed class
        $('body.article .rail .user.module').addClass('fixed');
      } else {
        // otherwise remove it
        $('body.article .rail .user.module').removeClass('fixed');
      }
    });
   }
 }  
});


