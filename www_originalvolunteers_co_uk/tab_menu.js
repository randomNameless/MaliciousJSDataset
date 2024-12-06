// JavaScript Document
jQuery.noConflict();

jQuery(".book_now_month #chosen_month").live('click', function(){
jQuery(this).parent().next(".exclaim_markshow").removeClass("exclaim_markshow").addClass("exclaim_mark");	
});


var scroll_value;
jQuery(function(){

if(jQuery('.moduletable_JQ_bypass').index() != -1)
	{
//jQuery('body').append('<div class="scroll_report">AAAA</div>');
	scroll_value = gettab_cookie(jQuery('#tab_group').attr('class'))

		if(scroll_value != null)
			{
			//alert(scroll_value)
			jQuery(document).scrollTop(scroll_value)
			}
	jQuery('.tab_outer a').click(function()
		{
		scroll_value = jQuery(document).scrollTop()
		settab_cookie( jQuery('#tab_group').attr('class'), scroll_value, 1)
		});
	}
});


jQuery(document).ready(function()
	{
	if(jQuery('#review-list2').index()!= -1 || jQuery('#review-list3').index()!= -1 )
		{

/*jQuery('.review_wrap2 img').hover(function(){
jQuery('.readmore').css({ 'background-color': '#FB7D1E' , 'color': '#ffffff'})}, function(){
jQuery('.readmore').css({ 'background': 'none' , 'color': '#FB7D1E'})	
});

jQuery('.readmore').hover(function(){
jQuery('.review_wrap2 img').css({ 'border': '5px solid #fb7d1e' , 'margin': '0'})}, function(){
jQuery('.review_wrap2 img').css({ 'border': '1px solid #fb7d1e' , 'margin': '4px'})	
}); on hold*/



//alert("boo")
		/*jQuery('.review_link2').append('<img src="">');
		jQuery('.review_link2 img').attr('src', jQuery('.review_link2').attr("href"));
		jQuery('.review_link2 img').remove();*/
		jQuery('.review_link2').live("click",function(event) 
			{
			event.preventDefault();
 			var n = jQuery(this).attr('href').replace('thumb_', '');

  		var t = jQuery(this);
  
	jQuery('body').append('<div class="review_popup_BG"></div>');
 	jQuery('.review_popup_BG').fadeTo('slow', 0.7);
 	//jQuery('body').append('<div id="review_popup_outer"><div class="review_popup_middle"><div class="review_popup_inner"><div class="PU_area"><img id="pic_src" src="'+n+'"><div class="review_close"></div></div></div></div></div>');

	jQuery('body').append('<div id="review_popup_outer"><div class="review_popup_middle"><div class="review_popup_inner"><div class="PU_area"><div class="review_close" title="close"></div></div></div></div></div>');
	jQuery(this).parents('.review_wrap2').children('.review_content').clone().appendTo('.PU_area');
	
jQuery(".PU_area .review_content").hide();

  	jQuery('.PU_area .review_content').stop(true,true).fadeIn('slow').css('visibility', 'visible');
	
		jQuery(".review_close").click(function(){
		jQuery(".slideout").hide().css({'z-index': -1, 'left': -parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))*2+'px' });
         		jQuery('.review_popup_middle').fadeOut('fast', function() 
					{
          			jQuery(this).fadeOut('fast', function() 
						{
                		jQuery(this).remove();
						jQuery(".PU_area .review_content").remove();
						jQuery("#review_popup_outer").remove();
          				});

					jQuery('.review_popup_BG').fadeOut('fast', function() 
						{
                		jQuery(this).remove();
          				});
						jQuery(this).remove();
						
						
        			}); 
  });
  
  
		});
jQuery(".pic_src").remove();





			}
		 
jQuery(".triggerslide").live('click',function(){
var thisslideout = jQuery(this);
if(thisslideout.siblings(".slideout").css('display')=="none")
{

jQuery(this).parents(".PU_area").animate({'left': -(jQuery(this).parents(".PU_area").width())/2}, 'slow', 'linear');

jQuery(".slideout").show().css({ 'top': -parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))+'px','left': -parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))+'px', 'height': jQuery(this).parents(".PU_area").height(), 'width': jQuery(this).parents(".PU_area").width()-parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))});

if(thisslideout.attr("href"))
{
jQuery(this).siblings(".slideout").animate({'left': (jQuery(this).parents(".PU_area").width()) }, 'slow', 'linear', function(){
thisslideout.siblings(".slideout").css({'z-index': 140});
});
}
else
{
jQuery(this).siblings(".slideout").animate({'left': (jQuery(this).parents(".PU_area").width())-parseInt((jQuery(this).parents(".PU_area").css('border-left-width'))+'px') }, 'slow', 'linear', function(){
thisslideout.siblings(".slideout").css({'z-index': 140});
});

}
}
else
{

jQuery(this).parents(".PU_area").animate({'left': 0}, 'slow', 'linear');
jQuery(this).siblings(".slideout").css({'z-index': -1}).animate({'left': -parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))*2+parseInt(jQuery(this).parents(".PU_area").css('border-left-width'))+'px' }, 'slow', 'linear', function(){
thisslideout.siblings(".slideout").hide();
});
}



});


	});











jQuery(document).ready(function()
	{
	if(jQuery('.review_link').index()!= -1)
		{

		jQuery('.review_link').click(function(event) 
			{
		var scrollvalue=document.documentElement.scrollTop;
//alert(scrollvalue)
			event.preventDefault();
 			var n = jQuery(this).attr('href').replace('thumb_', '');
  
  		var t = jQuery(this);
  
	jQuery('body').append('<div class="pic_preview"></div>');
 	jQuery('.pic_preview').fadeTo('slow', 0.7);
 	jQuery('body').append('<div id="v_align"><div class="img_wrap"><img id="pic_src" src="'+n+'"><div class="review_close"></div></div></div>');
jQuery("#pic_src").hide();

jQuery("#pic_src").bind("load", function(){
	jQuery('.img_wrap').css('margin-top', '-'+parseInt((jQuery(".img_wrap").height()/2))+'px');
});
  	
	

  	jQuery('#pic_src').stop(true,true).fadeIn('slow').css('visibility', 'visible');
	
		jQuery(".review_close").click(function(){
		
         		jQuery('.img_wrap').fadeOut('fast', function() 
					{
          			jQuery(this).fadeOut('fast', function() 
						{
                		jQuery(this).remove();
						jQuery("#pic_src").remove();
						jQuery("#v_align").remove();
          				});
          			//jQuery('.pic_preview').fadeTo('fast', 1.0).fadeOut('fast', function() 
					jQuery('.pic_preview').fadeOut('fast', function() 
						{
                		jQuery(this).remove();
          				});
						jQuery(this).remove();
						
						
        			}); 
  });
  
  
		});
jQuery(".pic_src").remove();

			} 
	});




jQuery(document).ready(function(){

if(jQuery("#ov_form").index() != -1)
	{
	jQuery(".round_corner input:text").blur(function()
		{
		var default_value = jQuery(this).attr('defaultValue');
		jQuery(this).css({"color": "#666666"})
		jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_markshow").addClass("exclaim_mark");
		if(jQuery(this).val() == default_value || jQuery(this).val() == "")
			{
			jQuery(this).css({"color": "red"})
			jQuery(this).val(default_value);
			jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
			}
		jQuery(this).parent().removeClass("round_cornerx").addClass("round_corner");
		});

	jQuery(".round_corner input:text").focus(function()
		{
		jQuery(this).css({"color": "#666666"})
		jQuery(this).parent().next("span").removeClass("exclaim_markshow").addClass("exclaim_mark");

		var default_value = jQuery(this).attr('defaultValue');
		if(jQuery(this).val() == default_value)
			{
			jQuery(this).val("");
			}
		jQuery(this).parent().removeClass("round_corner").addClass("round_cornerx");
		});

	jQuery("textarea.required").blur(function()
		{
		var default_value = jQuery(this).attr('defaultValue');
		jQuery(this).css({"color": "#666666"})
		jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_markshow").addClass("exclaim_mark");
		if(jQuery(this).val() == default_value || jQuery(this).val() == "")
			{
			jQuery(this).css({"color": "red"})
			jQuery(this).val(default_value);
			jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
			}
		
		});
	jQuery("textarea.required").focus(function()
		{
		jQuery(this).css({"color": "#666666"})
		jQuery(this).parent().next("span").removeClass("exclaim_markshow").addClass("exclaim_mark");

		var default_value = jQuery(this).attr('defaultValue');
		if(jQuery(this).val() == default_value)
			{
			jQuery(this).val("");
			}
		
		});


	}
});


function validate_ovform()
	{
	var valid=true;
	jQuery("input.required").each(function()
		{
		var default_value = jQuery(this).attr('defaultValue');
		if(jQuery(this).val() == default_value || jQuery(this).val() == "")
		{
		
		jQuery(this).css({"color": "red"})
		jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
		valid=false;
		}
	
		});

	jQuery("textarea.required").each(function()
		{
		var default_value = jQuery(this).attr('defaultValue');
		if(jQuery(this).val() == default_value || jQuery(this).val() == "")
		{
		
		jQuery(this).css({"color": "red"})
		jQuery(this).parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
		valid=false;
		}
	
		});

if(jQuery("#TandC").index()!= -1)
{
if(jQuery("#TandC:checkbox:checked").length > 0 )
{
jQuery("#TandC").val("Yes");
jQuery("#TandC").next("span.cf_text").css({"color": "black"}); 
}
else
{
jQuery("#TandC").val("");
jQuery("#TandC").next("span.cf_text").css({"color": "red"}); 
valid=false;

}
}

if(valid == false)
{
alert("Oops... you forgot something!")	
}
		return valid;
	}




function settab_cookie( name, value, days)
{

var cookie_string = name + "=" + escape ( value );

if (days)
{
var expires = new Date ();
expires.setTime(expires.getTime()+(days*24*60*60*1000));
cookie_string += "; expires=" + expires.toGMTString()+"; path=/";
}

document.cookie = cookie_string;

}

function gettab_cookie(cookie_name)
{
  var results = document.cookie.match( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

jQuery(document).ready(function()
	{
base = "https://www.originalvolunteers.co.uk/";
tabcountryref=jQuery(".tab_outer").eq(0).attr("id");
//tabcountryref = "morocco";
	if(jQuery("#review-list2").index()!= -1)
		{
var templocation = tabcountryref;
if(tabcountryref == "peru_cuzco_health")
{
tabcountryref = "peru";
}
if(tabcountryref == "ghana_conservation" || tabcountryref == "ghana_health_work" || tabcountryref == "ghana_building_work" )
{
tabcountryref = "ghana";
}

	setTimeout("ajax_update('review-list='+tabcountryref, 'review-list2')",3000)	
//ajax_update('review-list='+tabcountryref, 'review-list2');

tabcountryref = templocation;

		}

});




jQuery(document).ready(function()
	{
/*jQuery("#tab_group .tab_outer").click(function() 
			{
if(jQuery("#tab_group").attr('class'))
{
settab_cookie( jQuery("#tab_group").attr('class'), '500', 1)
	
}

});

var tab_scroll_value=gettab_cookie(jQuery("#tab_group").attr('class'));

if(tab_scroll_value != null)
	{
//jQuery("#tabreload").html("this was found to have class at: "+ new Date() +"<br />"+tab_scroll_value;
}*/


//jQuery("#tabreload").html("this is loaded at: "+ new Date() +"<br />"+tabcountryref+"tab1");
	if(jQuery("#tabmenu_wrapper").index()!= -1)
		{

	var tabcount=1;		
	var tabcountryref="";

if(jQuery(".tab_outer").eq(0).attr("id"))
	{

	jQuery(".tab_outer a").each(function()
		{


		tabcountryref=jQuery(".tab_outer").eq(0).attr("id");
		jQuery(this).attr("id", tabcountryref+"tab"+tabcount);
		tabcount++;


		});

	if(jQuery("#review-list").index()!= -1)
{
//if(jQuery(".moduletable_JQ_bypass").index()!= -1)
//{
//tabcountryref = jQuery('#tab_group').attr('class');
//tabcountryref = tabcountryref.replace('scroll', ''); 
//}
		
var templocation = tabcountryref;

if(tabcountryref == "peru_cuzco_health")
{
tabcountryref = "peru";
}
if(tabcountryref == "ghana_conservation" || tabcountryref == "ghana_health_work" || tabcountryref == "ghana_building_work" )
{
tabcountryref = "ghana";
}

		ajax_update('review-list='+tabcountryref, 'review-list');

tabcountryref = templocation;


		}
//jQuery("#tabreload").html("this is loaded at: "+ new Date() +"<br />"+tabcountryref+"tab1");
		
		//below must follow above
		var tab_cookie_value=gettab_cookie(tabcountryref+"tabmenu");
//Below added for new individual pages setup to reset active tab to overview page
//if(jQuery("#tab_group a").eq(0).attr("href") == "#" && jQuery("#tab_group a").eq(1).attr("href") != "#")
//{
	//tab_cookie_value = tabcountryref+"tab1";
//}


		var anchorId=jQuery("#"+tab_cookie_value);
		var anchorIndex=jQuery("#tab_group .tab_outer a").index(anchorId);
		
		jQuery(".tab_content_item").each(function() //retrieved from below as must be placed above below
			{

//xxif(jQuery(".moduletable_JQ_bypass").index()== -1)
//xx{
jQuery(this).not(jQuery(".tab_content_item").eq(0)).hide();	
//xx}
			

			});


		if(tab_cookie_value != null)
			{
			var elem=jQuery("#"+tab_cookie_value).parent(".tab_outer"); 
				
			changetab(elem, anchorIndex)	
			}
			else
			{
			jQuery(".tab_dwn_arwactive").removeClass("tab_dwn_arwactive").addClass("tab_dwn_arw");

			jQuery("#tab_group .tab_outer .tab_leftactive").removeClass("tab_leftactive").addClass("tab_left");
			jQuery("#tab_group .tab_outer .tab_rightactive").removeClass("tab_rightactive").addClass("tab_right");
			
			jQuery("#tab_group .tab_outer").find(".tab_left").eq(0).removeClass("tab_left").addClass("tab_leftactive");
			jQuery("#tab_group .tab_outer").find(".tab_right").eq(0).removeClass("tab_right").addClass("tab_rightactive");
			jQuery("#tab_group .tab_outer").find(".tab_dwn_arw").eq(0).removeClass("tab_dwn_arw").addClass("tab_dwn_arwactive");
			
			}

}


//////////////////////////////////////////////////////////////////////


		jQuery("#tab_group .tab_outer").show();
		jQuery("#tab_group .tab_outer a").each(function()
			{
if(jQuery(this).attr("href")=="#")
{
jQuery(this).attr("href", "javascript:void(0)");	
}

});
	
	
		jQuery("#tab_group .tab_outer").click(function() 
			{
if(jQuery("#tab_group").attr('class'))
{
jQuery("#tabreload").html("this was found to have class at: "+ new Date() +"<br />"+jQuery("#tab_group").attr('class'));	
}

			var curr_tabcountryref=jQuery(this).find(".tab_left").attr("id");
			settab_cookie( tabcountryref+'tabmenu', curr_tabcountryref, 1)
                        changetab(jQuery(this),jQuery(this).index())

			});
	
		} //end if condition
	});


function changetab(elem,indexref)
	{

	jQuery(".tab_dwn_arwactive").removeClass("tab_dwn_arwactive").addClass("tab_dwn_arw");
	jQuery("#tab_group .tab_outer .tab_leftactive").removeClass("tab_leftactive").addClass("tab_left");
	jQuery("#tab_group .tab_outer .tab_rightactive").removeClass("tab_rightactive").addClass("tab_right");


	jQuery(elem).find(".tab_left").removeClass("tab_left").addClass("tab_leftactive");
	jQuery(elem).find(".tab_right").removeClass("tab_right").addClass("tab_rightactive");
	jQuery(elem).find(".tab_dwn_arw").removeClass("tab_dwn_arw").addClass("tab_dwn_arwactive");

if(jQuery(".moduletable_JQ_bypass").index()== -1)// && (jQuery('#tab_group a').eq(0).attr('href')=="javascript:void(0)" && jQuery('#tab_group a').eq(1).attr('href')=="javascript:void(0)"))
{
	jQuery("#tab_content_group div.tab_content_item").hide();
	jQuery("#tab_content_group div.tab_content_item").eq(indexref).show();
} 

}





var current_img_col2=0;
var img_total_col2=0;
var next_img_col2=0
var strWin_col2="";

var start_duration_col2=5;
var normal_duration_col2=5;

var interval_col2 = start_duration_col2;

var SlideTimeOut_col2;

jQuery(document).ready(function()
	{

	if(jQuery("#slide_show_2col").index()!= -1)
	
	{

	if(jQuery(".notimer").index()<0)
	
	{

	jQuery("#slide_show_2col").append("<span></span>");

	jQuery("#slide_show_2col span").css("opacity", "0.5");
}
	
	img_total_col2=jQuery('#slide_show_2col img').length;
	
	var img_count_col2=1;

if(jQuery('#slide_show_2col a').length >1)
{

	jQuery('#slide_show_2col a').each(function()
		{
		if(!jQuery(this).attr("href") || jQuery(this).attr("href")=="#")
			{
			jQuery(this).attr("href", "javascript:void(null);");
			}
			
		jQuery(this).attr("class", "jqslide_col2");

		// OLD appendnav='<a class="slidenav_col2" style="left:'+((img_count_col2*20)-14)+'px;" href="javascript:void(0);"><b>'+img_count_col2+'</b></a>';
appendnav='<a class="slidenav_col2" style="left:'+((img_count_col2*10)-14)+'px;" href="javascript:void(0);"><b>'+img_count_col2+'</b></a>';


		jQuery("#slideshow_nav_wrapper_col2").append(appendnav);
		
		img_count_col2++;

		});
}
		
	jQuery('#slide_show_2col a').mouseover(function(){
		jQuery("#slide_show_2col span").stop().css("width", "0");
		});		
		
		
		
	jQuery("#slideshow_nav_wrapper_col2").css("width", (((img_total_col2+1)*10)+"px"));
		
	//jQuery('#slide_show_2col a').eq(0).attr("id", "jq_active_col2"); mistake i think

	jQuery('#slideshow_nav_wrapper_col2 a').eq(0).attr("id", "jq_active_col2");
		
		
		
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	jQuery('#slide_show_2col a').mouseover(function(){
	
		clearTimeout(SlideTimeOut_col2);
	
		jQuery("#slide_show_2col span").stop().css("width", "0");
		});
	
	jQuery('#slide_show_2col a').mouseout(function(){
		if(strWin_col2 && !strWin_col2.closed)
			{
			clearTimeout(SlideTimeOut_col2);
			jQuery("#slide_show_2col span").stop().css("width", "0");
			}
		else
			{
			jQuery("#slide_show_2col span").stop().css("width", "0");

			jQuery("#slide_show_2col span").stop().animate({"width": jQuery("#slide_show_2col").css("width")}, interval_col2*1000, "linear");
			SlideTimeOut_col2=setTimeout("slidethis_col2()",(interval_col2*1000));
			}

		
		});
		
	jQuery('#slide_show_2col div').mouseover(function(){
		clearTimeout(SlideTimeOut_col2);
		jQuery("#slide_show_2col span").stop().css("width", "0");
		});
	
	jQuery('#slide_show_2col div').mouseout(function(){
		if(strWin_col2 && !strWin_col2.closed)
			{
			clearTimeout(SlideTimeOut_col2);
			jQuery("#slide_show_2col span").stop().css("width", "0");
			}
		else
			{
			clearTimeout(SlideTimeOut_col2);
			jQuery("#slide_show_2col span").stop().css("width", "0");
			jQuery("#slide_show_2col span").stop().animate({"width": jQuery("#slide_show_2col").css("width")}, interval_col2*1000, "linear");
			SlideTimeOut_col2=setTimeout("slidethis_col2()",(interval_col2*1000));
			}

		});
		

	jQuery('a.slidenav_col2').click(function(){
		clearTimeout(SlideTimeOut_col2);

		nav_select=jQuery(this).index('a.slidenav_col2');
		jQuery(".jqslide_col2").not(jQuery('.jqslide_col2').eq(current_img_col2)).hide();
		jQuery('.jqslide_col2').eq(current_img_col2).css({ zIndex: "5"})


		jQuery('a.slidenav_col2').removeAttr("id");
		jQuery(this).attr("id", "jq_active_col2");
		jQuery('.jqslide_col2').eq(nav_select).css({ zIndex: "10"}).fadeIn(1100);
		jQuery("#slide_show_2col div").not("#slideshow_nav_wrapper_col2").hide();
		jQuery("#slide_show_2col div").stop().eq(nav_select).fadeIn("slow");
	
		current_img_col2=nav_select;
		next_img_col2=nav_select+1;
		
		check_img_value_col2() // check if value greater than total images -1 (number start at 0)		

		});	


	
	
	slidethis_col2();
		}
});


function check_img_value_col2()
{
	if(next_img_col2>img_total_col2-1) // check if value greater than total images -1 (number start at 0)
		{
		next_img_col2=0;
		current_img_col2=img_total_col2-1;
		}

}




	function slidethis_col2()
	{
	clearTimeout(SlideTimeOut_col2);
	//reset progress bar
	jQuery("#slide_show_2col span").stop().css("width", "0");
	jQuery("#slide_show_2col").find("div").stop();
	//hide all slideshow a with images
	jQuery(".jqslide_col2").hide();
	
	//set the next img back behind current
	jQuery(".jqslide_col2").eq(next_img_col2).css("z-index", "5");//this
	//set the current img to front
	jQuery(".jqslide_col2").eq(current_img_col2).css("z-index", "10");
	//show image behind current
	jQuery(".jqslide_col2").eq(next_img_col2).show();
	
	//if current img not the same as next (start default) fade out the current image to show next, and set interval period between fading from start to normal duration.
	if(next_img_col2 != current_img_col2)
		{
		jQuery(".jqslide_col2").eq(current_img_col2).stop().show().fadeOut(1000);
		interval_col2 = normal_duration_col2;
		}
	
	jQuery('a.slidenav_col2').removeAttr("id"); //remove active id ref from any nav button that may have it
	jQuery("a.slidenav_col2").eq(next_img_col2).attr("id", "jq_active_col2"); // place the active id ref to next nav buuton

	//increment next and current image values
	next_img_col2++;
	current_img_col2=next_img_col2-1;

	check_img_value_col2() // check if value greater than total images -1 (number start at 0)
				
	jQuery("#slide_show_2col").find("div").not("#slideshow_nav_wrapper_col2").hide(); //hide all description divs except the nav button container div
	jQuery("#slide_show_2col").find("div").stop().eq(current_img_col2).fadeIn("slow"); // fade in the next decription div container
	

	//animate progress bar to width of parent container to duration set by xml file and repeat
jQuery("#slide_show_2col span").stop().animate({"width": parseInt((jQuery("#slide_show_2col").css("width")+30)+"px")}, interval_col2*1000, "linear");


SlideTimeOut_col2=setTimeout("slidethis_col2()",(interval_col2*1000));


	}

function openvid_col2(value)
	{
	if(window.vidopen)
		{
		window.vidopen.focus();
		}
	if(strWin_col2 && !strWin_col2.closed)
		{
		strWin_col2.focus();
		}
	else
		{
		strWin_col2=window.open('https://www.originalvolunteers.co.uk/xml/video_popup.php?vidref='+value,'vidopen','width=526,height=308,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no');
strWin_col2.focus();
		}
	}

jQuery(document).ready(function()
	{
	if(jQuery("#image_viewer").index()!= -1)
		{
if(jQuery("#image_view_all_but").attr("href")=="#")
{
jQuery("#image_view_all_but").attr("href", "javascript:void(0);");	
}
		
var first_img = jQuery("#large_view img").eq(0).attr("src")
var first_img_title = jQuery("#imgv_left img").eq(0).attr("alt");

var telephone_filter = first_img_title;
//telephone_filter = telephone_filter.replace('01603 627 007', '01603 627003');
//telephone_filter = telephone_filter.replace('01603 627003', '<span class="rTapNumber42466">01603 627003</span>');

var preload="";
jQuery("#thumb_nails img").each(function(){

preload=jQuery(this).attr("src");

MM_preloadImages(preload.replace("_thumb",""));



});




jQuery("#large_view img").eq(0).attr('id', 'base_img');


jQuery("#large_view").append('<img id="swap_img" src="'+first_img+'" />');

jQuery("#imgv_left p").html(telephone_filter);
	


		jQuery("#thumb_nails img").click(function()
			{
			var selected_img_src = jQuery(this).attr("src");
			selected_img_src = selected_img_src.replace("_thumb","");
			var selected_img_title = jQuery(this).attr("alt");
			jQuery("#swap_img").attr("src", (jQuery("#base_img").attr("src")));
			jQuery("#base_img").attr("src", selected_img_src);
			jQuery("#swap_img").stop(true, true).show().css("opacity", "1").fadeOut(450, function()
				{																	
				jQuery("#swap_img").attr("src", (jQuery("#large_view img#base_img").attr("src")));													
				});


			jQuery("#large_view img#swap_img").attr("alt", selected_img_title);

			jQuery("#imgv_left p").html(telephone_filter);
runtelecode();
			});



		jQuery("#thumb_nails").mouseleave(function()
			{
		
			jQuery("#swap_img").attr("src", (jQuery("#base_img").attr("src")));
			jQuery("#base_img").attr("src", first_img);
			jQuery("#imgv_left p").html(telephone_filter);
			jQuery("#swap_img").stop(true, true).show().css("opacity", "1").fadeOut(450, function()
				{																	
				jQuery("#swap_img").attr("src", (jQuery("#base_img").attr("src")));													
				});
			runtelecode();
			});


		jQuery("#image_view_all_but").hover(function()
			{
			var slide_height = parseInt(jQuery("#image_all_wrapper").css("height"));
			jQuery(this).stop(true, true).animate({"margin-top": "-"+slide_height+"px"}, 250);
			}, function (){
			jQuery(this).stop(true, true).animate({"margin-top": "0"}, 250);
			})




		jQuery("#image_view_all_but").click(function()
			{
                        if(jQuery(this).attr("href")=="#" || jQuery(this).attr("href")=="javascript:void(0);")
                             {
			var index_ref= jQuery("#tab_group .tab_outer:contains('Images')").index();
			jQuery(".tab_dwn_arwactive").removeClass("tab_dwn_arwactive").addClass("tab_dwn_arw");
			jQuery("#tab_group .tab_outer .tab_leftactive").removeClass("tab_leftactive").addClass("tab_left");
			jQuery("#tab_group .tab_outer .tab_rightactive").removeClass("tab_rightactive").addClass("tab_right");
				
			jQuery("#tab_group .tab_outer").eq(index_ref).find(".tab_left").removeClass("tab_left").addClass("tab_leftactive");
			jQuery("#tab_group .tab_outer").eq(index_ref).find(".tab_right").removeClass("tab_right").addClass("tab_rightactive");
			jQuery("#tab_group .tab_outer").eq(index_ref).find(".tab_dwn_arw").removeClass("tab_dwn_arw").addClass("tab_dwn_arwactive");
			


			jQuery("#tab_content_group div.tab_content_item").hide();
			jQuery("#tab_content_group div.tab_content_item").eq(index_ref).show();

			jQuery(window).scrollTop(455);
                        }
                    else
                        {
	                 settab_cookie( jQuery('#tab_group').attr('class'), 588, 1)
                        }

		});
	
	
		} //end if condition
	});

////////////////////////////////////////////////////////////////////NEW BOOKING MOD CODE //////////////////////////////////

jQuery(document).ready(function()
	{

bookstartdelay=setTimeout("update_booking_selects('_rght_mod01')",1000);

	//update_booking_selects("_rght_mod01");

});



function bookMod_showMonthCheck(partial_id)
{
if(document.getElementById("select"+partial_id).selectedIndex!=0)
	{
	document.getElementById("calendardsDD"+partial_id).disabled=false;
	document.getElementById("countryerror"+partial_id).innerHTML="";
	}
else
	{
	document.getElementById("calendardsDD"+partial_id).disabled=true;
	}
}




function update_booking_selects(partial_id)
	{

	if(jQuery("#ChronoContact_BookProjectForm"+partial_id).index()!= -1)
		{


if(document.getElementById("select"+partial_id).selectedIndex==0)
			{
document.getElementById("calendardsDD"+partial_id).disabled=true;
document.getElementById("selectedoption"+partial_id+"b").style.backgroundColor="#65D0E0";
document.getElementById("selectedoption"+partial_id+"b").style.opacity="0.5";
document.getElementById("selectedoption"+partial_id+"b").style.filter="alpha(opacity=50)";
}
else
{

document.getElementById("calendardsDD"+partial_id).disabled=false;
document.getElementById("selectedoption"+partial_id+"b").style.background="none";
document.getElementById("selectedoption"+partial_id+"b").style.opacity="1";
document.getElementById("selectedoption"+partial_id+"b").style.filter="alpha(opacity=100)";

			}
var x=document.getElementById("select"+partial_id);
var SelecteOption=x.options[x.selectedIndex].text;
document.getElementById("selectedoption"+partial_id+"a").innerHTML=SelecteOption;




var menuparent = document.getElementById("ja-mainnav");
var LI_elements = menuparent.getElementsByTagName("li");
var A_elements = menuparent.getElementsByTagName("a");
var UL_elements = menuparent.getElementsByTagName("ul");
UL_elements[2].id="IE6_select_fix";
for(i=0;i<A_elements.length;i++)
	{
	var arrList = A_elements[i].parentNode.className.split(' ');
	for(j=0;j<arrList.length;j++)
		{
		if ( arrList[j] == "item149")
			{
			A_elements[i].onmouseover=function(){
			document.getElementById("select"+partial_id).style.visibility="hidden";
			document.getElementById("calendardsDD"+partial_id).style.visibility="hidden";};
			A_elements[i].onmouseout=function(){
			document.getElementById("select"+partial_id).style.visibility="visible";
			document.getElementById("calendardsDD"+partial_id).style.visibility="visible";};
			}
		}
	}	
	
		var menuparent2 = document.getElementById("IE6_select_fix");
	var A_elements2 = menuparent2.getElementsByTagName("a");
		for(j=0;j<A_elements2.length;j++)
		{
			A_elements2[j].onmouseover=function(){
			document.getElementById("select"+partial_id).style.visibility="hidden";
			document.getElementById("calendardsDD"+partial_id).style.visibility="hidden";};
			A_elements2[j].onmouseout=function(){
			document.getElementById("select"+partial_id).style.visibility="visible";
			document.getElementById("calendardsDD"+partial_id).style.visibility="visible";};
			
		}


}

}


//////////////////////////////////////////////////////////Blue small destination form validation on submit


function validatedate_BookNowMod(partial_id)
	{
		var newbook04country_value = document.getElementById("select"+partial_id).value;
		settab_cookie("newbook04country", newbook04country_value , 1)

		var newbook04monyear_value = document.getElementById("calendardsDD"+partial_id).value;
		settab_cookie("newbook04monyear", newbook04monyear_value , 1)

	var BookModValid=true;
	if(document.getElementById("calendardsDD"+partial_id).selectedIndex!=0)
		{
		document.getElementById("montherror"+partial_id).innerHTML="";

		}
	else
		{
		document.getElementById("montherror"+partial_id).innerHTML="Selection of placement month is required.";
		BookModValid=false;
		}

	if(document.getElementById("select"+partial_id).selectedIndex!=0)
		{
		document.getElementById("countryerror"+partial_id).innerHTML="";
		}
	else
		{
		document.getElementById("countryerror"+partial_id).innerHTML="Selection of Placement Country is required.";
		BookModValid=false;
		}

	//if(BookModValid == true)
		//{

		//}




	return BookModValid;
	}




var xmlhttp

var current_id_ref="";

function ajax_update_BookNowMod_form(str,id_ref)
{

xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  }



var url=base+"xml/ajax_BookNowMod_form.php";


url=url+"?"+str+"&base="+base;

url=url+"&sid="+Math.random();
xmlhttp.onreadystatechange=stateChanged;
xmlhttp.open("GET",url,true);
xmlhttp.send(null);


current_id_ref=id_ref;
}

function stateChanged()
{

if (xmlhttp.readyState==4)
{

document.getElementById(current_id_ref).innerHTML=xmlhttp.responseText;
}
}

function GetXmlHttpObject()
{
if (window.XMLHttpRequest)
  {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  return new XMLHttpRequest();
  }
if (window.ActiveXObject)
  {
  // code for IE6, IE5
  return new ActiveXObject("Microsoft.XMLHTTP");
  }
return null;
}

///////////////////////////////////////////////////////////////////////// booking apply form04 ////////////////////////////////////////////////////

jQuery(document).ready(function()
	{
if(jQuery(".show").index()!= -1)
{
jQuery("#first_name").val(jQuery("#first_name_hid").val());
jQuery("#last_name").val(jQuery("#last_name_hid").val()); 
jQuery("#H_PhoneNumber").val(jQuery("#H_PhoneNumber_hid").val());
jQuery("#email").val(jQuery("#email_hid").val());
}


	if(jQuery("#BookingFast04").index()!= -1)
		{


			if(jQuery("#destination").val() != "" && jQuery("#destination_month_year").val()!="")
				{
					jQuery("#travel_details").css({"height": "auto"});	
					jQuery("#travel_details").stop(true,true).slideDown(450);
				}
else
{
jQuery("#travel_details").not(jQuery(".show")).css("height", "0");
}




		

		jQuery(".validate-selection").bind('change', function()
			 {

			
if(jQuery("#destination").val() != "")
{
					var pic_name =(jQuery("#destination").val().toLowerCase()).replace(' ','-')
					jQuery("#travel_details img").attr("src", "/images/stories/payment/"+pic_name+".jpg");	
					jQuery("#travel_details .destin_country").html(jQuery("#destination").val()+'<span class="destin_year">'+jQuery("#destination_month_year").val()+'</span>');
}




			if(jQuery(this).val() == "")	
				{
				jQuery(this).css({"color": "red"}).find("option").not(jQuery(this).find("option").eq(0)).css({"color": "black"});

				}
			else
				{
				jQuery(this).css({"color": "black"});	
				}

			if(jQuery("#destination").val() != "" && jQuery("#destination_month_year").val()!="")
				{
				//jQuery(".destin_price_small").removeClass("destin_price_small").addClass("destin_price");


				/*var travel_price = travel_info[jQuery("#destination").val()][1] =="" ? "&pound;"+travel_info[jQuery("#destination").val()][0] : travel_info[jQuery("#destination").val()][1];

				if(travel_info[jQuery("#destination").val()][0] =="Free")
					{
					travel_price = travel_info[jQuery("#destination").val()][0];	
					}

				if(travel_price.length > 19)
					{
					jQuery(".destin_price").removeClass("destin_price").addClass("destin_price_small");
					}


				jQuery("#travel_details .destin_price").html(travel_price);
				jQuery("#travel_details .destin_price_small").html(travel_price);*/

				if(parseInt(jQuery("#travel_details").css("height")) == 0)
					{

					jQuery("#travel_details").css({"height": "auto"});	
					jQuery("#travel_details").stop(true,true).slideDown(450);
					}
				}
else
{

	jQuery("#travel_details").stop(true,true).slideUp(450, function(){
	jQuery("#travel_details").css({"height": "0"});
});	
}

			 });


jQuery(".validate_input").bind('blur', function()
{
var checkdefault = document.getElementById(jQuery(this).attr("id")).defaultValue;

if(jQuery(this).val() == checkdefault || jQuery(this).val() == "")	
{
jQuery(this).val(checkdefault);
jQuery(this).css({"color": "red"});
}
else
{
jQuery(this).css({"color": "black"});	
}

});

jQuery(".validate_input").bind('focus', function()
{
var checkdefault = document.getElementById(jQuery(this).attr("id")).defaultValue;
if(jQuery(this).val()==checkdefault)
var text ="";
jQuery(this).val(text);
jQuery(this).css({"color": "black"});
});






}
});

function validateonsubmit04()
{
var checkdefault;
var valid = true;

if(jQuery("#TandC").index()!= -1)
{
if(jQuery("#TandC:checkbox:checked").length > 0 )
{
jQuery("#TandC").val("Yes");
jQuery("#TandC").next("span.cf_text").css({"color": "black"}); 
}
else
{
jQuery("#TandC").val("");
jQuery("#TandC").next("span.cf_text").css({"color": "red"}); 
valid=false;

}
}





jQuery(".validate_input").each(function()
{
checkdefault = document.getElementById(jQuery(this).attr("id")).defaultValue;

if(jQuery(this).val() == checkdefault || jQuery(this).val() == "")
{
if(jQuery(this).attr("type")!= "checkbox")
{
jQuery(this).css({"color": "red"});	
valid = false;	
}
	
}
	
});

jQuery(".validate-selection").each(function()
{
checkdefault = document.getElementById(jQuery(this).attr("id")).defaultValue;
if(jQuery(this).val() == checkdefault || jQuery(this).val() == "")
{

jQuery(this).css({"color": "red"}).find("option").not(jQuery(this).find("option").eq(0)).css({"color": "black"});
valid = false;	
}
	
});

if(!valid)
{
alert("Oops... you forgot something!")	
}
else
{
var fname_check = jQuery("#first_name").val();
var lname_check = jQuery("#last_name").val();
var current_price_class ="";
jQuery("#fullname").val(fname_check+" "+lname_check);

}

if(jQuery("#news_offers").index()!= -1)
{
	
if(jQuery("#news_offers:checkbox:checked").length > 0 )
{
jQuery("#news_offers").val("Yes");
}


}


return valid;	
}


/////////////////////////////////////////////team members slidedown /////////////////////////////////////

jQuery(document).ready(function(){


if(jQuery(".staff_snap_wrap").index() != -1)
{

jQuery(".staff_snap div").hide();


jQuery(".staff_snap").hover(function(){

jQuery(this).find("div").stop(true,true).slideDown(300); }, function(){

jQuery(this).find("div").stop(true,true).slideUp(300);
});

jQuery(".staff_snap_wrap").mouseover(function(){

jQuery(this).css("height" , "250px");

});

jQuery(".staff_snap_wrap").mouseleave(function(){

jQuery(this).css("height" , "auto");

});

jQuery(".staff_snap").each(function(){

jQuery(this).append('<a href="javascript:void(0);"><span></span></a>');


});


}
});


///////////////////////////////////////////////////////////////////////// GOOGLE MAP //////////////////////////////////////////////////

function ErrorReportValidate()
{
var valid = true;
var EmailInput = document.getElementById("app_email");
var ConfirmEmailInput = document.getElementById("confirm_app_email");
if(jQuery("#app_email").val() != jQuery("#confirm_app_email").val())
{
valid=false;
jQuery("#confirm_app_email").parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
jQuery("#app_email").parent().next("span.exclaim_mark").removeClass("exclaim_mark").addClass("exclaim_markshow");
alert("Oops... Email and Confirmation Email, don't seem to match");
}
return valid;
}
jQuery(document).ready(function(){
if(jQuery("#ChronoContact_website_error_problem2").index() != -1)
	{

	jQuery(".round_corner input:text").focus(function()
		{
if(jQuery(this).attr('id')== "confirm_app_email" || jQuery(this).attr('id')== "app_email")
{
jQuery("#confirm_app_email").parent().next("span").removeClass("exclaim_markshow").addClass("exclaim_mark");
jQuery("#app_email").parent().next("span").removeClass("exclaim_markshow").addClass("exclaim_mark");
}

});

}
});

/////////////////////////////////// Lighter Review List //////////////////////////////////////////////////////////////////


var currentElem;

var scrollvalue;
jQuery(document).ready(function()
	{
	//alert("light")
	if(jQuery('.review_list_light').index()!= -1)
		{
		
		if(jQuery('.triggerslide_light').attr('href') == "#")
		{
		jQuery('.triggerslide_light').attr('href', 'javascript:void(0);');
		}
		
		
		jQuery('.PU_area_light').live('mouseover', function(e){
e.stopPropagation();

});

		jQuery('.review_link_light').live('click', function(e) 
			{
			
			e.preventDefault();
 			//scrollvalue=document.documentElement.scrollTop;

  		var t = jQuery(this);
  
	jQuery('body').append('<div class="review_popup_BG_light"></div>');
 	jQuery('.review_popup_BG_light').fadeTo('slow', 0.7);


	jQuery('body').append('<div id="review_popup_outer_light"><div id="review_popup_closeBG_light"></div><div class="review_popup_middle_light"><div class="review_popup_inner_light"><div class="PU_area_light"><div class="review_close_light" title="close"></div></div></div></div></div>');
	
	
	
		 if(!'.triggerslide_light.attr("rel")')
			 {
	jQuery(this).parents('.review_wrap_light').find('.review_content_light').children('.triggerslide_light').attr('href', jQuery(this).attr("href") );
}


	jQuery(this).parents('.review_wrap_light').find('.review_content_light').clone().appendTo('.PU_area_light');
	jQuery('.PU_area_light .review_content_light').prepend('<img src="" alt="">');
	jQuery('.PU_area_light .review_content_light img').attr('src', jQuery(this).attr("rel"));
	
	
	jQuery('.PU_area_light .slideout_light img').attr('src', jQuery('.PU_area_light .triggerslide_light').attr("rel"));
	

jQuery(".PU_area_light .review_content_light").hide();

  	jQuery('.PU_area_light .review_content_light').stop(true,true).fadeIn('slow').css('visibility', 'visible');
	
	jQuery('.version_light2').parents('.PU_area_light').children('.review_close_light').html('X');
	
		jQuery(".review_close_light").live('click',function()
				{
closereview()
 				});
  
  
		});
jQuery(".pic_src_light").remove();





			}
		 
	jQuery(".triggerslide_light").live('click',function(e)
		{e.stopPropagation();
		
		
		
		var thisslideout = jQuery(this);
		if(thisslideout.siblings(".slideout_light").css('display')=="none")
			{
			
			jQuery(this).parents(".PU_area_light").animate({'left': -(jQuery(this).parents(".PU_area_light").width())/2}, 'slow', 'linear');

			jQuery(".slideout_light").show().css({ 'top': -parseInt(jQuery(this).parents(".PU_area_light").css('border-left-width'))+'px','left': -parseInt(jQuery(this).parents(".PU_area_light").css('border-left-width'))+'px', 'height': jQuery(this).parents(".PU_area_light").height(), 'width': jQuery(this).parents(".PU_area_light").width()-parseInt(jQuery(this).parents(".PU_area_light").css('border-left-width'))});

			if(thisslideout.attr("href"))
				{
				
				jQuery(this).siblings(".slideout_light").animate({'left': (jQuery(this).parents(".PU_area_light").width()) }, 'slow', 'linear', function(){
				thisslideout.siblings(".slideout_light").css({'z-index': 210});
					});
				}
			else
				{
				
				jQuery(this).siblings(".slideout_light").animate({'left': (jQuery(this).parents(".PU_area_light").width())-parseInt((jQuery(this).parents(".PU_area_light").css('border-left-width'))+'px') }, 'slow', 'linear', function(){
thisslideout.siblings(".slideout_light").css({'z-index': 210});
					});

				}
			}
		else
			{
			
			jQuery(this).parents(".PU_area_light").animate({'left': 0}, 'slow', 'linear');
			jQuery(this).siblings(".slideout_light").css({'z-index': -1}).animate({'left': -parseInt(jQuery(this).parents(".PU_area_light").css('border-left-width'))*2+parseInt(jQuery(this).parents(".PU_area_light").css('border-left-width'))+'px' }, 'slow', 'linear', function(){
thisslideout.siblings(".slideout_light").hide();
				});
			}

		});

jQuery("#review_popup_closeBG_light").live('click',function(){

closereview()
});


	});
function closereview()
{

				jQuery(".slideout_light").hide().css({'z-index': -1, 'left': -parseInt(jQuery(".PU_area_light").css('border-left-width'))*2+'px' });
         		jQuery('.review_popup_middle_light').fadeOut('fast', function() 
					{
          			jQuery(this).fadeOut('fast', function() 
						{
                		jQuery(this).remove();
						jQuery(".PU_area_light .review_content_light").remove();
						jQuery("#review_popup_outer_light").remove();
          				});

					jQuery('.review_popup_BG_light').fadeOut('fast', function() 
						{
                		jQuery(this).remove();
          				});
					
					jQuery(this).remove();
        			}); 
//jQuery('html, body').scrollTop(scrollvalue);
}

var current_text_box, text_slide_t, numberOfLi, widthOfLi;
var text_slide_duration = 400;
var text_to_next_duration = 10000;
jQuery(function()
	{
	jQuery('#text_slide_show_wrap li').eq(0).clone().appendTo(jQuery('#text_slide_show_wrap ul'))
	numberOfLi = jQuery('#text_slide_show_wrap li').length;
	widthOfLi = parseInt(jQuery('#text_slide_show_wrap li').css('width'));
	jQuery('#text_slide_show_wrap ul').css({'width': numberOfLi*widthOfLi});
	current_text_box = widthOfLi;
	jQuery('#text_slide_show_wrap ul').delay(text_to_next_duration).animate({'left': -current_text_box}, text_slide_duration, 'linear', function(){
	text_slide_t = setTimeout("nexttext()",text_to_next_duration);

});


});

function nexttext()
	{
	clearTimeout(text_slide_t);
	current_text_box=current_text_box+widthOfLi;
	
	if(current_text_box >=((numberOfLi*widthOfLi) ))
		{
		current_text_box=widthOfLi;
		jQuery('#text_slide_show_wrap ul').css({'left': 0});
		}

	
	jQuery('#text_slide_show_wrap ul').animate({'left': -current_text_box}, text_slide_duration, 'linear', function(){
		
		text_slide_t = setTimeout("nexttext()",text_to_next_duration);
});
	
}

jQuery(document).ready(function() {
//preload_WGO();

		jQuery('.have_peek_image_row a, .adjusting_popup a').live('click', function(e) 
			{
			
			e.preventDefault();
 			//scrollvalue=document.documentElement.scrollTop;
			

  		var t = jQuery(this);
  
	jQuery('body').append('<div class="review_popup_BG_light"></div>');
 	jQuery('.review_popup_BG_light').fadeTo('slow', 0.7);


	jQuery('body').append('<div id="review_popup_outer_light"><div id="review_popup_closeBG_light"></div><div class="review_popup_middle_light"><div class="review_popup_inner_light"><div class="PU_area_light"><div class="review_close_light" title="close">X</div></div></div></div></div>');
		
	jQuery('.PU_area_light').prepend('<div class="review_content_light review_img_light version_light2"><img src="" alt=""></div>');
	//jQuery('.PU_area_light .review_content_light img').attr('src', jQuery(this).find('img').attr("src").replace('_thumb', ''));

if(jQuery(this).parent().hasClass('atol_wrap'))
{
jQuery('.review_content_light').append('<a href="'+jQuery(this).attr('rel')+'" rel="nofollow" class="atol_cert_link">&nbsp;</a>');
}



if(jQuery(this).is('[class^="con_version"]'))
{
var ClassWithRemovedPrefix = this.className.replace('con_', '');
//jQuery(this).addClass(ClassWithRemovedPrefix)
jQuery('.PU_area_light').removeClass(ClassWithRemovedPrefix).addClass(ClassWithRemovedPrefix)
}


jQuery('.PU_area_light .review_content_light img').attr('src', jQuery(this).attr("href").replace('_thumb', ''));
	

});
		jQuery(".review_close_light").live('click',function()
				{
closereview()
 				});
});


var first_img="";
var first_img_title=""

jQuery(document).ready(function()
{
if(jQuery(".image_viewer").index()!= -1)
{

jQuery(".image_view_all_but").attr("href", "javascript:void(0);");

jQuery(".image_viewer").each(function(){

first_img = jQuery(this).find(".large_view img").eq(0).attr("src");
jQuery(this).find(".large_view img").eq(0).attr('rel', jQuery(this).find(".large_view img").eq(0).attr("src"))
first_img_title = jQuery(this).find(".imgv_left img").eq(0).attr("alt");

var telephone_filter = first_img_title
//telephone_filter = telephone_filter.replace('01603 627 007', '01603 627003');
//telephone_filter = telephone_filter.replace('01603 627003', '<span class="rTapNumber42466">01603 627003</span>');

jQuery(this).find(".large_view img").eq(0).attr('class', 'base_img');


jQuery(this).find(".large_view").append('<img class="swap_img" src="'+first_img+'" />');

jQuery(this).find(".imgv_left p").html(telephone_filter);



});



var preload="";
jQuery(".thumb_nails img").each(function(){

preload=jQuery(this).attr("src");

MM_preloadImages(preload.replace("_thumb",""));



});

jQuery(".thumb_nails img").click(function()
{
var selected_img_src = jQuery(this).attr("src");
selected_img_src = selected_img_src.replace("_thumb","");
var selected_img_title = jQuery(this).attr("alt");

var telephone_filter = selected_img_title
//telephone_filter = telephone_filter.replace('01603 627 007', '01603 627003')
//telephone_filter = telephone_filter.replace('01603 627003', '<span class="rTapNumber42466">01603 627003</span>')

jQuery(this).parents(".image_viewer").find(".swap_img").attr("src", (jQuery(this).parents(".image_viewer").find(".base_img").attr("src")));
jQuery(this).parents(".image_viewer").find(".base_img").attr("src", selected_img_src);
jQuery(this).parents(".image_viewer").find(".swap_img").stop(true, true).show().css("opacity", "1").fadeOut(450, function()
{
jQuery(this).parents(".image_viewer").find(".swap_img").attr("src", (jQuery(this).parents(".image_viewer").find(".large_view img.base_img").attr("src")));
});


jQuery(this).parents(".image_viewer").find(".large_view img.swap_img").attr("alt", selected_img_title);
jQuery(this).parents(".image_viewer").find(".imgv_left p").html(telephone_filter);
});



jQuery(".thumb_nails").mouseleave(function()
{
//var ThisThumbNails = jQuery(this);
jQuery(this).parents(".image_viewer").find(".swap_img").attr("src", jQuery(this).parents(".image_viewer").find(".base_img").attr("src"));
jQuery(this).parents(".image_viewer").find(".base_img").attr("src", jQuery(this).parents(".image_viewer").find(".base_img").attr("rel"));
var telephone_filter = jQuery(this).parents(".image_viewer").find(".base_img").attr("alt");
//telephone_filter = telephone_filter.replace('01603 627 007', '01603 627003');
//telephone_filter = telephone_filter.replace('01603 627003', '<span class="rTapNumber42466">01603 627003</span>');
jQuery(this).parents(".image_viewer").find(".imgv_left p").html(telephone_filter);
jQuery(this).parents(".image_viewer").find(".swap_img").stop(true, true).show().css("opacity", "1").fadeOut(450, function()
{
jQuery(this).parents(".image_viewer").find(".swap_img").attr("src", jQuery(this).parents(".image_viewer").find(".base_img").attr("rel"));
});
runtelecode();
});
	
} //end if condition
});

