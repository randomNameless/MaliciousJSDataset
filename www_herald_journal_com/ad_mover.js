/*
*Remove top ad placement
*All Right Reserved Our-Hometwon Inc
*Author: James Harley
*/
jQuery(function ad_Move($) {
	//OHT-Ads(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||  $('.oht-menu').width() < 600) {
		ads = null
		//Find ads in sidebar
		if($('.oht-sidebar').length > 0){
			if($('.oht-sidebar .oht_ad').length > 0 ){
				ads = $('.oht-sidebar .oht_ad')
				centerAd('.oht-sidebar .oht_ad')
				
				if($('.oht-sidebar .g').length>0){
					ads.push.apply(ads, ($('.oht-sidebar .g')))
					//ads.push($('.oht-sidebar .g'))
					centerAd('.oht-sidebar.g');
				}
				if($('.oht-sidebar .a-single').length>0){
					ads.push.apply(ads, ($('.oht-sidebar .a-single')))
					//ads.push($('.oht-sidebar .a-single'))
					centerAd('.oht-sidebar .a-single');
				}
				
			}else if($('.oht-sidebar .g').length>0){
				//console.log('.g ads found')
				ads = $('.oht-sidebar .g')
				centerAd('.oht-sidebar .g');
				if($('.oht-sidebar .a-single').length>0){
					ads.push.apply(ads, ($('.oht-sidebar .a-single')))
					//ads.push($('.oht-sidebar .a-single'))
					centerAd('.oht-sidebar .a-single');
				}
			}else if($('.oht-sidebar .a-single').length>0){
				//console.log('.g ads found')
				ads = $('.oht-sidebar .a-single')
				centerAd('.oht-sidebar .a-single');
			}
		}
		else if($('.content__sidebar').length > 0){
			if($('.content__sidebar .oht_ad').length > 0 ){
				ads = $('.content__sidebar .oht_ad')
				centerAd('.content__sidebar .oht_ad')
				
				if($('.content__sidebar .g').length>0){
					ads.push.apply(ads, ($('.content__sidebar .g')))
					//ads.push($('.content__sidebar .g'))
					centerAd('.content__sidebar .g');
				}
				if($('.content__sidebar .a-single').length>0){
					ads.push.apply(ads, ($('.content__sidebar .a-single')))
					//ads.push($('.content__sidebar .a-single'))
					centerAd('.content__sidebar .a-single');
				}
				
			}else if($('.content__sidebar .g').length>0){
				//console.log('.g ads found')
				ads = $('.content__sidebar .g')
				centerAd('.content__sidebar .g');
				if($('.content__sidebar .a-single').length>0){
					ads.push.apply(ads, ($('.content__sidebar .a-single')))
					//ads.push($('.oht-sidebar .a-single'))
					centerAd('.oht-sidebar .a-single');
				}
			}else if($('.content__sidebar .a-single').length>0){
				ads = $('.content__sidebar .a-single')
				centerAd('.content__sidebar .a-single');
			}
		}
		
		if(ads !== null){
			//console.log('Ads '+ ads.length)
			if( ads.length > 0) {
				
				pageAnchors = null 
				ad_positions = $('.oht-widget');
				
				article = $('.oht-single-article')
				var index;
				for (index = 0; index < ads.length; ++index) {
					
					//For single article pages
					if(article.length >0){
						page = 'article'
						pageAnchors = $('.entry-content p')
						
					}


					//geodir
					else if($('.geodir-listview').length>0){
						page = 'geo dir'
						pageAnchors = $('.geodir-listview')
					} 
					//Category page
					else if($('.content--archive').length>0){
						page = 'archive';
						if($('.oht-archive__month').length>0){
							pageAnchors = $('.site-main h2')
							//console.log('ARCHAnchors :' + pageAnchors.length )
						}else{
							pageAnchors = $('[id^=post')
						}

					}
					//Listing more than 4 aritcles anywher else use as anchors for ads
					else if($('.oht-article').length>4){
						page = "article listing"
						pageAnchors = $('.oht-article')
					}
					//For areas with anchors
					if(pageAnchors !== null){
						//console.log('Anchors :' + pageAnchors.length )
						split = Math.round(pageAnchors.length / ads.length )
						//console.log('Split :' + split )
						pos = 1
						while (index < ads.length ){
							
							//console.log('PoS:'+pos)
							var tmp = pos
							pos= check_parent(tmp,pageAnchors )
							//console.log('PoS:Aftercheck:'+pos)
							$(ads[index]).prependTo(pageAnchors[pos]);
							index++
							pos = pos + split
							//if Ran out of positions but still more ads
							if( pos > pageAnchors.length){
								pos = 2
							}
						}
					}
					else if($('.oht-page').length>0){
						$(ads[index]).prependTo('.oht-widget--trending');
						index++
					}
					
					//Main page
					else if(ad_positions[index] !== null){
						
						while (index < ads.length ){
							i = 0
							//console.log('main page ' +index)
							$(ads[index]).prependTo(ad_positions[i+1]);
							index++
							i++
							//if more ads start distr
							if(i > ad_positions.length)
								i=0
						}
					}
					

				}
			}
		}
		//Add elements here to prevent them from being injected as page anchor
		function check_parent( postmp, pageAnchors){
			var target = $(pageAnchors[postmp])
			if (target.parent('[id^="attachment"]').length) {
			    //console.log('Attachment')
				postmp ++
				return check_parent( postmp, pageAnchors)
			}
			else if (target.parent('[class^="wide-grid"]').length) {
				//console.log('wide-grid')
				postmp ++
				return check_parent( postmp, pageAnchors)
			}
			else{
				return postmp
			}
		}
		
		function centerAd(target){
			
				$(target).css('display', 'contents');
				$(target).children().children().css('display', 'block');
				$(target).children().children().css('margin-left', 'auto');
				$(target).children().children().css('margin-right', 'auto');
				$(target).children().children().css('margin-top', '20px');
				$(target).children().children().css('margin-bottom', '20px');

		}
	}
 });