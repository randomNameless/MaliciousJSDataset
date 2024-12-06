var JQZOOM_OPTIONS = {
	zoomType: 'innerzoom',
	preloadImages: false,
	title: false
};

$(document).ready(function() {
	
	
		 $('#HeaderLower #PagesMenu .First').remove();
	var catHTML = $('#HeaderLower .CategoryList > .BlockContent > ul').html();
	var pageHTML = $('#HeaderLower .PagesMenu > .BlockContent > ul').html();
	$('#HeaderLower #Menu > ul').append(catHTML);
	$('#HeaderLower #Menu > ul').append(pageHTML);
	$('#HeaderLower .CategoryList').remove();
	$('#HeaderLower #PagesMenu').remove();
	
	
	$('#prodAccordion .Block > h2').click(function() {
		$(this).css('outline','none');
		
		if($(this).parent().hasClass('current')) {
			$(this).siblings('div').slideUp('slow',function() {
				$(this).parent().removeClass('current');
			});
		} else {
			$('#prodAccordion .Block .prodAccordionContent').slideUp('slow',function() {
				$(this).parent().removeClass('current');
			});
			$(this).siblings('div').slideToggle('slow',function() {
				$(this).parent().toggleClass('current');
				var vPort = $(this).is(":in-viewport");
				if(vPort == false) {
					topAcc = $(this).offset().top;
					$('html, body').animate({ scrollTop:  topAcc - 50}, 600);
				}

			});
		}
		
		

		return false;
	});

	
	
	//menu
	$('#HeaderLower li').hover(function() {
		$(this).addClass('over');
		return false;
	},
	function() {
		$(this).removeClass('over');
	});
	
	/*
	$('#HeaderLower #Menu > ul > li > ul > li').hover(function() {
		$(this).addClass('subOver');
		return false;
	},
	function() {
		$(this).removeClass('subOver');
	});
	*/
	
	
	
	$("#HeaderLower  li").each(function() { 
		$(this).addClass('parent');
    
    	tallest = 0;
   	 	group =  $(this).find('ul');
    
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	});
	
	$('#HeaderLower li').each(function() {
		if ($(this).children('ul').size() != 0) {
			$(this).children('a').addClass('hasSub').append('<span class="sub-indicator"> </span>');	
		}
	});
	
	var num = $('#HeaderLower  li').size(); 

	$('#HeaderLower  li').each(function(i) {
        $(this).css('z-index', num - i);
  	});
	
	

	//currency display
   var currentCurrency = $('#currencyPrices span').html();
   currentCurrency = currentCurrency.substring(0,currentCurrency.length);
   $('.currency-converter .selCurr').html(currentCurrency);
   
   var currentCurrencyF = $('.CurrencyList').find('.Sel').html();
   $('.selected-currency').html(currentCurrencyF);	
   
	if ($('.ChooseCurrencyBox').size() !=0 ) {
		$('.currency-converter').hover(function() {
			$(this).children("#SideCurrencySelector").stop(true,true).show();
			$(this).addClass('over');
		},function() {
			$(this).removeClass('over');
			$(this).children("#SideCurrencySelector").hide();
			$(this).children("div").children("div").children('.CurrencyList').stop(true,true).hide();
		});
	}
	
	$('.selected-currency').click(function() {
		var curDisplay = $(this).siblings("div").children(".CurrencyList");
		
			curDisplay.slideToggle();
		
	});
	//cartlink
	if($('.SideCart').size() != 0) {
		var cartItem = $('.SideCart .item strong').text();
		var cartTotal = $('.SideCart .total strong').text();
		$('.CartLink .item').text(cartItem);
		$('.CartLink .total').text(cartTotal);
	}
	var selCurr = $('#currencyPrices span').text();

	$('.CartLink .curr').text(selCurr);
	
	// wishlish update 
	//$('.wishLink a').text('WISHLIST ('+$('#SideProductAddToWishList form label').size()+')');
	
	
	
	clearText();
	getActive();
	$('input[type=radio], input[type=checkbox], input[type=file]').not('.productOptionPickListSwatch input[type=radio], .productOptionViewRectangle input[type=radio]').uniform();
	$('select').uniform();
	
	$('.QuickViewBtn').click(function() {
		$('body').addClass('quickView');
	});	
	$('body.quickView .modalClose').click(function() {
		$('body').removeClass('quickView');
	});
	
	
	
});
$(window).load(function() {
	if ($('.WishListButton:visible').size() != 0) {
		
		$('html').click(function() {
			$('#SideProductAddToWishList .BlockContent').slideUp(300);
		 });
		
		
		$('.WishListButton').click(function(event){
			event.stopPropagation();
			x = $('.WishListButton').offset().left;
			y = $('.WishListButton').offset().top;
			$('#SideProductAddToWishList').css('top', y).css('left', x).css('position', 'absolute').show();
			$('#SideProductAddToWishList .BlockContent').slideToggle(300);
		});
		$('#SideProductAddToWishList .BlockContent').click(function(event){
			event.stopPropagation();
		});	
	}
	$('.prodAccordion > div > h2').click(function(){
		$('#SideProductAddToWishList .BlockContent').slideUp(300);
 	});		
	
	
});	


function clearText() {
	$('input[type=text]').not('input[readonly=readonly]').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});
	
	$('textarea').not('textarea[readonly=readonly]').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});
	
}

function getActive() {
	var wLoc = window.location.href.replace(config.ShopPath, '');
	
	
	
	
	$('#HeaderLower a').each(function() {
		if ($(this).attr('href').replace(config.ShopPath, '') ==  wLoc) {
			$(this).closest('.parent').addClass('ActivePage');	
		}
	});
	if ($('.Breadcrumb').size() != 0) {
		$('.Breadcrumb ul').each(function() {
			if($(this).find('li:eq(1) a').size() != 0) {
				var breadLink = $(this).find('li:eq(1) a').attr('href').replace(config.ShopPath, '');
				
				$('#HeaderLower a').each(function() {
					if ($(this).attr('href').replace(config.ShopPath, '') ==  breadLink) {
						$(this).closest('.parent').addClass('ActivePage');	
					}
				});
			}
				
		});
	}	
			
	/*
	
	$('.Left li a').each(function() {
		if ($(this).attr('href').replace(config.ShopPath, '') ==  wLoc) {
			$(this).parent('li').addClass('ActivePage');	
		}
		if ($(this).parent().children('ul').size() != 0) {
			$(this).parent().addClass('hasSub');	
		}
		
		
	});	
	var lvl = $('.Left li.ActivePage').closest('ul').attr('class');
	if (lvl == 'lvl1') {
		if($('.ActivePage').hasClass('hasSub')) {
			$('.Left #SideCategoryList  .lvl1').after($('.ActivePage .lvl2'));
			$('.Left #SideCategoryList  .lvl1').remove();
		} else {
				
		}
		
	}
	if (lvl == 'lvl2') {
		if($('.ActivePage').hasClass('hasSub')) {
			$('.Left #SideCategoryList  .lvl1').after($('.ActivePage .lvl3'));
			$('.Left #SideCategoryList  .lvl1').remove();
		} else {
			$('.Left #SideCategoryList  .lvl1').after($('.Left li.ActivePage').closest('ul'));
			$('.Left #SideCategoryList  .lvl1').remove();	
		}
		
	}
	if (lvl == 'lvl3') {
		$('.Left #SideCategoryList  .lvl1').after($('.Left li.ActivePage').closest('ul'));
		$('.Left #SideCategoryList  .lvl1').remove();
	}	
	*/
	
}


