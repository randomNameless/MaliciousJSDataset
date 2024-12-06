					function scrollToAnchor(aid,adjustment){
    				var aTag = $("a[name='"+ aid +"']");
    				$('html,body').animate({scrollTop: aTag.offset().top - adjustment},'slow');
					}
					//rad ad
					dyad = setInterval(radad, 38000);
					//nav for home page
					function newadd(page) {
						var  formData = "page=" + page;
						
							$.ajax({
   							url : "/ajax/recent_additions_home.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
						scrollToAnchor('featbar',46);
						//adtracker();
						//refreshBids();
							if($.isFunction(ga)) {
								ga('send','pageview','/recent_additions_home');
							}
					}
						
					function newfeat(page) {
						var  formData = "page=" + page;
						
							$.ajax({
   							url : "/ajax/features_home.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#top_features').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
						scrollToAnchor('featbar',46);
						//adtracker();
						//refreshBids();
							if($.isFunction(ga)) {
								ga('send','pageview','/features_home');	
							}
					}
					//end nav for home page
					
					//nav for film page
						//nav for all
						function filmall(page,filmid) {
							var  formData = "page=" + page +"&filmid=" + filmid;
						
							$.ajax({
   							url : "/ajax/film_all.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							$("#new_additions_nav").css("display", "");
							//$("#popular_nav").css("display", "none");
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/film_all/'+ filmid +'');	
								}
						}
						
						//nav for popular
						function filmpop(page,filmid) {
							var  formData = "page=" + page +"&filmid=" + filmid;
						
							$.ajax({
   							url : "/ajax/film_popular.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							$("#new_additions_nav").css("display", "none");
							//$("#popular_nav").css("display", "");
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/film_pop/'+ filmid +'');	
								}
						}
						
						//nav for film database
						function dbpage(page,letter,total,bck) {
							hasLoaded = true;
							var  formData = "page=" + page +"&letter=" + letter;
						
							$.ajax({
   							url : "/ajax/filmdatabase.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#featured_c').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							scrollToAnchor('featbar',54);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/thefilms');	
								}
							if(letter == 'alpha') {
								//alert('Trailer Addict Film Database - Special Characters '+ page +'/'+ total);
								var doctitle = 'Trailer Addict Film Database - Special Characters '+ page +'/'+ total;
								document.title = 'Trailer Addict Film Database - Special Characters '+ page +'/'+ total;
							} else {
								//alert('Trailer Addict Film Database - '+ letter.toUpperCase() +' '+ page +'/' + total);
								var doctitle = 'Trailer Addict Film Database - '+ letter.toUpperCase() +' '+ page +'/' + total;
								document.title = 'Trailer Addict Film Database - '+ letter.toUpperCase() +' '+ page +'/' + total;
							}
							var urlPath = '/thefilms/'+ letter +'/'+ page;
							var allvariables = page +" "+ letter +" "+ total;
							if(typeof bck === 'undefined') {
								window.history.pushState({films:allvariables}, doctitle, urlPath);
							} else {
								window.history.replaceState({films:allvariables}, doctitle, urlPath);

							}
							
						}
						
						//nav for coming soon
						function cspage(page) {
							var  formData = "page=" + page;
						
							$.ajax({
   							url : "/ajax/comingsoon.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#featured_c').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							scrollToAnchor('featbar',54);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/comingsoon');	
								}
						}
						
						//nav for out now
						function outpage(page) {
							var  formData = "page=" + page;
						
							$.ajax({
   							url : "/ajax/out.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#featured_c').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							scrollToAnchor('featbar',54);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/outnow');	
								}
						}
						
						//nav for trailers
						function filmtrailers(filmid) {
							var  formData = "filmid=" + filmid;
						
							$.ajax({
   							url : "/ajax/film_trailers.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							$("#new_additions_nav").css("display", "none");
							//$("#popular_nav").css("display", "none");
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/film_browsing');	
								}
						}
						
						//nav for clips
						function filmclips(filmid) {
							var  formData = "filmid=" + filmid;
						
							$.ajax({
   							url : "/ajax/film_clips.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							$("#new_additions_nav").css("display", "none");
							//$("#popular_nav").css("display", "none");
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/film_browsing');	
								}
						}
						
						//nav for featurettes
						function filmfeaturettes(filmid) {
							var  formData = "filmid=" + filmid;
						
							$.ajax({
   							url : "/ajax/film_featurettes.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#new_additions').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							$("#new_additions_nav").css("display", "none");
							//$("#popular_nav").css("display", "none");
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/film_browsing');	
								}
						}
					//end nav for film page
					
					//nav for tag pages
						//nav for top films
						function tagtop() {
							jQuery(".title_bar h2").html("Top Films");
								if( $("#tag_credits").css('display') == 'none') {
									$('#new_additions').fadeOut('fast', function() {
									jQuery('#featured_c').removeClass('main_list');
									$("#top_features").fadeIn('fast');
									})
								} else {
									$('#tag_credits').fadeOut('fast', function() {
									jQuery('#featured_c').removeClass('main_list');
									$("#top_features").fadeIn('fast');
									})
								}
								
								//$("#new_additions").css("display", "none");
								//$("#top_features").css("display", "block").hide().fadeIn('slow');
								$("#new_additions_nav").css("display", "none");
								
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/tags_browsing');	
								}
						}
						//nav for recent additions
						function tagrecent() {
							jQuery(".title_bar h2").html("Recently Added");
								if( $("#tag_credits").css('display') == 'none') {
									$('#top_features').fadeOut('fast', function() {
									jQuery('#featured_c').addClass('main_list');
									$("#new_additions").fadeIn('fast');
									})
								} else {
									$('#tag_credits').fadeOut('fast', function() {
									$("#new_additions").fadeIn('fast');
									})
								}
								
								//$("#new_additions").css("display", "none");
								//$("#top_features").css("display", "block").hide().fadeIn('slow');
								$("#new_additions_nav").css("display", "");
								
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/tags_browsing');	
								}
						}
						//nav for actor credits
						function tagcredits() {
							jQuery(".title_bar h2").html("Film Credits");
								if( $("#new_additions").css('display') == 'none') {
									$('#top_features').fadeOut('fast', function() {
									jQuery('#featured_c').addClass('main_list');
									$("#tag_credits").fadeIn('fast');
									})
								} else {
									$('#new_additions').fadeOut('fast', function() {
									$("#tag_credits").fadeIn('fast');
									})
								}
								//$("#new_additions").css("display", "none");
								//$("#top_features").css("display", "block").hide().fadeIn('slow');
								$("#new_additions_nav").css("display", "none");
								
							scrollToAnchor('featbar',46);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/tags_browsing');	
								}
						}
						
						//nav for tags by actor/actress
						function actorspage(page,letter,sex,maxp,bck) {
							hasLoaded = true;
							newsex = sex.toLowerCase();
							var  formData = "page=" + page +"&letter=" + letter;
							$.ajax({
   							url : "/ajax/"+ newsex +"page.php",
    						type: "POST",
    						data : formData,
    						success: function(data, textStatus, jqXHR)
    						{
							$('#featured_c').fadeOut('fast', function() { $(this).empty(); $(this).append(data).fadeIn('slow'); });
    						},
    						error: function (jqXHR, textStatus, errorThrown)
    						{
 
    						}
							});
							scrollToAnchor('featbar',54);
							//adtracker();
							//refreshBids();
								if($.isFunction(ga)) {
								ga('send','pageview','/tags_browsing');	
								}
								upperletter = letter.toUpperCase();
								if(newsex == "actors") {
									var actwhat = newsex.substring(0, sex.length - 1);
								} else {
									var actwhat = newsex;	
								}
								
									var urlPath = '/tagsby'+ actwhat +'/'+ letter +'/'+ page;
									var doctitle = sex +' Database - '+ upperletter +' ('+ page +'/'+ maxp +') - Trailer Addict';
									document.title = doctitle;
									var allvariables = page +"|"+ letter +"|"+ sex +"|"+ maxp;
									if(typeof bck === 'undefined') {
										window.history.pushState({actors:allvariables}, doctitle, urlPath);
										
									} else {
										$('#pagination a').css('background','');
										$('#pagination a').css('color', '');
										$('#pagination a:contains("'+ page +'")').css('background', '#c6e24f');
										$('#pagination a:contains("'+ page +'")').css('color', '#3c3c3c');
										window.history.replaceState({actors:allvariables}, doctitle, urlPath);
										
									}
									
						}
						
						
					  		
							
							function radad(){
								 /*var s = document.createElement("script");
							    s.type = "text/javascript";
							    s.src = "//pubportal.brkmd.com/tms/dtv4012de2cc4a556d28fcae671c4932097a.js";
							    // Use any selector
							    $("#right_ex_ad").html("");
							    $("#right_ex_ad").append(s);*/
							    //refreshBids();
							    
							    /* removed for instigator
							    if ( $( "#right_ex_ad" ).length ) {
							    	randomcb = Math.floor((Math.random() * 100000) + 1); 
							  		$("#right_ex_ad").html('<iframe style="width:300px; height: 250px; border:none; overflow:hidden; margin-bottom:16px;" src="//www.traileraddict.com/ads/pages/medium-ros2.htm?cg='+ randomcb +'" scrolling="no">');
							  		//$("#right_ex_ad").html('<iframe id="c1d8547f55" name="c1d8547f55" src="//us-ads.openx.net/w/1.0/afr?auid=538401050&cb='+ randomcb +'" frameborder="0" scrolling="no" width="300" height="250" style="margin-bottom:16px;"><a href="//us-ads.openx.net/w/1.0/rc?cs=c1d8547f55&cb='+ randomcb +'" ><img src="//us-ads.openx.net/w/1.0/ai?auid=538401050&cs=c1d8547f55&cb='+ randomcb +'" border="0" alt=""></a></iframe>');
								}
								*/
								
								if ( $( "#chain_ad" ).length ) {
							    	randomcb = Math.floor((Math.random() * 100000) + 1); 
							  		$("#chain_ad").html('<iframe style="width:300px; height: 250px; border:none; overflow:hidden; margin-bottom:16px;" src="//www.traileraddict.com/ads/pages/medium-ros2.htm?cg='+ randomcb +'" scrolling="no">');
							  		//$("#chain_ad").html('<iframe id="c1d8547f55" name="c1d8547f55" src="//us-ads.openx.net/w/1.0/afr?auid=538401050&cb='+ randomcb +'" frameborder="0" scrolling="no" width="300" height="250" style="margin-bottom:16px;"><a href="//us-ads.openx.net/w/1.0/rc?cs=c1d8547f55&cb='+ randomcb +'" ><img src="//us-ads.openx.net/w/1.0/ai?auid=538401050&cs=c1d8547f55&cb='+ randomcb +'" border="0" alt=""></a></iframe>');
								}
								if ( $( "#in_content_ad" ).length ) {
							    	randomcb = Math.floor((Math.random() * 100000) + 1); 
							  		$("#in_content_ad").html('<iframe style="width:300px; height: 250px; border:none; overflow:hidden;margin:4px auto;" src="//www.traileraddict.com/ads/pages/medium-incontent.htm?cg='+ randomcb +'" scrolling="no"></iframe>');
								}
							  console.log('radad');
							}

					  		
										
					jQuery(document).ready(function(){
							/*jQuery('.date_ctrl').hide();*/
							jQuery('#grid').click(function(){
								jQuery("#main_title h1").html("Feature Movie Trailers");
								$(this).addClass('btnactive');
								$('#list').removeClass('btnactive');
									$('#new_additions').fadeOut('fast', function() {
									jQuery('#featured_c').removeClass('main_list');
									$("#top_features").fadeIn('fast');
									})
								
								//$("#new_additions").css("display", "none");
								//$("#top_features").css("display", "block").hide().fadeIn('slow');
								$("#new_additions_nav").css("display", "none");
								$("#top_features_nav").css("display", "");
								
							});
						
							jQuery('#list').click(function(){
								if ( $( "#new_a" ).length ) {} else {
									newadd2(1);
								}
								jQuery("#main_title h1").html("New Additions");
								$(this).addClass('btnactive');
								$('#grid').removeClass('btnactive');
									$('#top_features').fadeOut('fast', function() {
									jQuery('#featured_c').addClass('main_list');
									$("#new_additions").fadeIn('fast');
									})
									
								//$("#top_features").css("display", "none");
								//$("#new_additions").css("display", "block").hide().fadeIn('slow');
								//$("#new_additions_nav").css("visibility", "visible");
								$("#top_features_nav").css("display", "none");
								$("#new_additions_nav").css("display", "block");
								

								
							});
							
					});