//判断是否为正确的电子邮件
function isemail (s) 
{ 
    var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$" 
    var re = new RegExp(regu); 
    if (s.search(re) != -1) { 
    return true; 
    } else {    
    return false; } 
} 
function CheckFeedBack()
{
    if (document.FeedBackForm.f_name.value=="")
    {
        alert("Please enter name");
        return false; 
    }
	
    if (document.FeedBackForm.f_email.value=="")
    {
        alert("Please enter email.");
        return false;            
    }
    if (!isemail(document.FeedBackForm.f_email.value))
    {
        alert("Please enter a valid e-mail address");
        return false;            
    }
    
    return true;
}




jQuery(document).ready(function(){
jQuery("#back-to-top").hide();
jQuery(function () {
jQuery(window).scroll(function(){
			
if (jQuery(window).scrollTop()>100){
jQuery("#back-to-top").fadeIn(500);
}
else
{
jQuery("#back-to-top").fadeOut(500);
}
});
jQuery("#back-to-top").click(function(){
jQuery('body,html').animate({scrollTop:0},100);
return false;
});
});
});

jQuery(document).ready(function(){
    jQuery("#mobi_menu").click(function(){
        jQuery("#access2").slideToggle(500);
		if(jQuery("#mobi_menu").hasClass("mclick")){jQuery("#mobi_menu").removeClass("mclick");}
		else{jQuery("#mobi_menu").addClass("mclick");}
		
    });
});


jQuery(window).resize(function(){
         if(jQuery(window).width()>1160){
          jQuery("#access2").css("display","block");}
		  if(jQuery(window).width()<1160){
          jQuery("#access2").css("display","none");}
});


function AutoResizeImage(maxWidth,maxHeight,objImg){
var img = new Image();
img.src = objImg.src;
var hRatio;
var wRatio;
var Ratio = 1;
var w = img.width;
var h = img.height;
wRatio = maxWidth / w;
hRatio = maxHeight / h;
if (maxWidth ==0 && maxHeight==0){
Ratio = 1;
}else if (maxWidth==0){//
if (hRatio<1) Ratio = hRatio;
}else if (maxHeight==0){
if (wRatio<1) Ratio = wRatio;
}else if (wRatio<1 || hRatio<1){
Ratio = (wRatio<=hRatio?wRatio:hRatio);
}
if (Ratio<1){
w = w * Ratio;
h = h * Ratio;
}
objImg.height = h;
objImg.width = w;
}


jQuery(function() {
	if (jQuery(window).width() > 200) {
		var stat = 1,
			oNav = jQuery('#mheader');
			oNav2 = jQuery('#access');
			oNav3 = jQuery('#access2');
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() >= 30) {
				if (stat == 1) {
					stat = 2;
					oNav.addClass('mini');
					oNav2.addClass('mini');
					oNav3.addClass('mini');
				}
			} else {
				if (stat == 2) {
					stat = 1;
					oNav.removeClass('mini');
					oNav2.removeClass('mini');
					oNav3.removeClass('mini');
				}
			}

		});
	}
});
jQuery(function() {
	if (jQuery(window).width() > 200) {
		var stat = 1,
			oNav = jQuery('#access');
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() >= 30) {
				if (stat == 1) {
					stat = 2;
					oNav.addClass('mini');
				}
			} else {
				if (stat == 2) {
					stat = 1;
					oNav.removeClass('mini');
				}
			}

		});
	}
});


  jQuery(function(){
    jQuery(window).scroll(function() {
    		var windowPageYOffset = window.pageYOffset;    
    		var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
      var sensitivity = 0;
        	var imgOffsetTop = jQuery(".timg").offset().top;
        	if (imgOffsetTop >= windowPageYOffset && imgOffsetTop < windowPageYOffsetAddHeight + sensitivity) {
        jQuery(".timg").css({
    "transform": "translate3d(0, 0, 0)",
    "-ms-transform": "translate3d(0, 0, 0)",
    "-o-transform": "translate3d(0, 0, 0)",
    "-webkit-transform": "translate3d(0, 0, 0)",
    "-moz-transform": "translate3d(0, 0, 0)",
    "opacity": 1
            	});
        	}
			
    })
  })

