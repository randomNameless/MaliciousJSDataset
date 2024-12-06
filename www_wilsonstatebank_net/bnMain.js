jQuery(function(){
	//create cokie name for every banner 			
	var cokie_num = 'banner_once'+bn_id;
	var closeCokie = jQuery.cookie(cokie_num+'close');
	// check if is exists
	if(jQuery.cookie(cokie_num) == null && closeCokie == null){			
			//create cokie
			jQuery.cookie(cokie_num, "hid_banner", { expires: 1 });
			//apend to the body
			
			//animation 
			jQuery('.wp-baner-top').fadeIn('slow');
			jQuery('body').css({"padding-top":jQuery('.wp-baner-top').height()+"px"})
			setInterval(function() {
			     jQuery('.wp-baner-top').fadeOut('slow');
				 jQuery('body').css({"padding-top":"0px"})
			}, bn_timeout);
			jQuery('.wp-baner-top div.wp-baner-close a').click(function(){
				jQuery('.wp-baner-top').fadeOut('slow');
				 jQuery('body').css({"padding-top":"0px"})
				jQuery.cookie(cokie_num+'close', "hid_banner_close"+bn_id, { expires: 1 });
			})	
			if(bn_link != ""){
				jQuery('.wp-baner-text').css({"cursor":"pointer"});
				jQuery('.wp-baner-text a').attr('href', '#');	
				jQuery('.wp-baner-text').click(function(){
					window.location = 	bn_link;								   
			    })
			}else{
				jQuery('.wp-baner-text').css({"cursor":"normal"});
				
			}			
		  }
		
		// delete cokie		
		if(bn_once !== 'showOnce'){
			jQuery.cookie(cokie_num, 'hid_banner', { expires: -1 });
		}
		jQuery(window).resize(function(){
			if(jQuery('.wp-baner-top').is(":visible")){
				jQuery('body').css({"padding-top":jQuery('.wp-baner-top').height()+"px"})
			}else{
				 jQuery('body').css({"padding-top":"0px"})
			}
		})
})