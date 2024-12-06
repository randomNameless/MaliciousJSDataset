
$(function(){
	if(PAYSUCCESS == '1')
	{    
		tipsAlert('.header');
	}
	$('.price-table-js tbody .icon-tishi4').popover({
		placement:'auto right',
		trigger:'hover',
		title:'',
		content:'',
		container: 'body'
	});
	$("[data-toggle='tooltip']").tooltip();
	// 按需加载js
	if(isH5()){
		loadJs('/static/js/mobile.js');
	}else if(isWeb()){
		loadJs('/static/js/web.js');
	}

	
	// 判断设备属性
	if($('.other-fileup').length && $('.iphone-fileup').length){
		if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
			$('.other-fileup').hide();
			$('.iphone-fileup').show();
			$('.web-fileup').hide();
			
		} else if(/android|Android/i.test(navigator.userAgent)){
		    $('.other-fileup').show();
			$('.iphone-fileup').hide();
			$('.web-fileup').hide();
		};
	}	
	
	
	$('.nav-stacked li').click(function(){
		if($(this).hasClass('notac')) return;
		$(this).addClass('active').siblings('li').removeClass('active');
	});


	search('#keyword');
	init_search_btn();
	$('#faq').keydown(function(event){
				
		var val = $(this).val();
		if (event.keyCode == 13)
		{
		    location.href='/help/search?q='+val;
		}
	});

	
	
	// 在左侧的优惠吗
	$('.promo-input .btn-apply').click(function(){

		var code = $('#procode').val();
		var price = $('[name="real_price"]').val();
		var type = $('[name="order_type"]').val();
		getURL(DISCOUNT_URL+'?price='+price+'&code='+code+'&type='+type,'discount');
		/*
		*/
	})

	
	$('.order-summary .promo-cont .btn-delete').click(function(){
		$('input[name="discount"]').val(0);
		$('#procode').val('');
		$(this).parents('.promo-cont').fadeOut();
		update_price();
	})

	//	Order summary
	/*$('.order-summary .promo-input .btn-apply').click(function(){
		$(this).parents('.promo-input ').hide().siblings('.promo-cont').fadeIn()
	})
	$('.order-summary .promo-cont .btn-delete').click(function(){
		$(this).parents('.promo-cont').hide().siblings().fadeIn();
	})*/
	
	// Order summary 的 credit 价格
	$('.use_credit').click(function(){
		var real_price = $('[name="real_price"]').val();
		var credit = $('[name="credit"]').val();
		if($(this).prop("checked")){
			$('.credit').removeClass('hide');
			$('[name="use_credit"]').val(1);
			//alert(real_price);
		}else
		{
			$('[name="use_credit"]').val(0);
			$('.credit').addClass('hide');
			// 判断价钱够不够
		}
		update_price();
		
	});

	
	
	// 单选 select-radio
	$('.select-radio .btn').click(function(){
		$(this).parents('.select-radio').find('.btn').removeClass('btn-primary').addClass('btn-line btn-line-primary').html('&nbsp;Select&nbsp;')
		$(this).parents('.select-radio').find('.btn').removeClass('selected-radio-name')
		
		$(this).addClass('selected-radio-name');
		var dataid = $(this).attr('data-id');
		
		if(dataid == '3')
		{
			$('input[name="real_price"]').val(proprice);
			$('.order-summary .user-group-title').text('Pro');
			$('.order-summary .user-group-price').text('$'+proprice);
			$('input[name="product"]').val('Pro account');
		}else
		{
			$('input[name="real_price"]').val(perprice);
			$('.order-summary .user-group-title').text('Premium');
			$('.order-summary .user-group-price').text('$'+perprice);
			$('input[name="product"]').val('Premium account');
		}
		$('input[name="dataid"]').val(dataid);
		update_price();
		$(this).parents('.select-radio').find('.selected-radio-name').addClass('btn-primary').removeClass('btn-line btn-line-primary').text('Selected');
	})
	
	// 分页点击效果
	$('.pagination li').click(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
	})
	
	
	// pay 切换
	$('.payment-details-js input[type="radio"]').click(function(){
		if($(this).prop("checked") && $(this).hasClass('paypal-js')){
			$(this).parents('.payment-details-js').find('.paypal-hide-js').slideUp("slow");
		}else{
			$(this).parents('.payment-details-js').find('.paypal-hide-js').slideDown("slow");
		}
	})
	
	// pay  切换2
	$('.resumeradio-js input[type="radio"]').click(function(){
		if($(this).prop("checked") && $(this).hasClass('resumeradio1')){
			$(this).parents('.resumeradio-js').find('.resumeradio2-1').slideUp();
			$(this).parents('.resumeradio-js').find('.resumeradio1-1').slideDown();
		}else{
			$(this).parents('.resumeradio-js').find('.resumeradio2-1').slideDown();
			$(this).parents('.resumeradio-js').find('.resumeradio1-1').slideUp();
		}
	})
	
	
	//下拉框
	$(".select-inp").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var input = $(this).children("input");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function()
		{
			dt.html($(this).html());
			input.val($(this).attr('value'));
			_hide();
		});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".select-inp").first().is(s) ? _hide():"";});
	});
	
	// 查看密码
	$('.toggle-paswd').click(function(){
		var show = $(this).find('.fa-eye').length;
		if(show){
			$(this).find('.fa').removeClass('fa-eye').addClass('fa-eye-slash');
			$('.paswd').attr('type','password');
		}else{
			$(this).find('.fa').removeClass('fa-eye-slash').addClass('fa-eye');
			$('.paswd').attr('type','text');
		}
	});
	
	// match banner 跳转
	$('.js-scrollTo').click(function(){
		var w = $(window).width() || $('body').width();
		if(w > 992){
			scrollTo(540,300,{queue:true})
		}else if(992 >= w && w >= 768){
			scrollTo(480,300,{queue:true})
		}else{
			scrollTo(820,300,{queue:true})
		}
	})
	
})
function update_price()
{
	var real_price = Number($('[name="real_price"]').val());
	var credit = Number($('[name="credit"]').val());
	var use_credit = $('[name="use_credit"]').val();
	var discount = Number($('input[name="discount"]').val());
	var way = $('input[name="discount_way"]').val();
	price = real_price;
	if(use_credit=='1')
	{
		price -= credit;
		//alert(price);
	}
	if(discount > 0)
	{ 
		if(way=='2')
		{  	
			$('.promo-cont .discount-percent').text(10*discount + "% OFF");
			discount = real_price*0.1*discount;
		}
		discount = discount.toFixed(2);
		price = price-discount;
		console.log(price,discount);
		$('.promo-cont .discount').text('-$'+discount);
		
		$('.order-summary .promo-cont').fadeIn();
	}
	
	price = price.toFixed(2);

	console.log(typeof price,price);
	if(price < 0  || price =='0.00')
	{
		price = 0;
		$('.payless-js').slideUp();
	}else
	{
		$('.payless-js').slideDown();
	}

	$('[name="price"]').val(price);
	$('.credit-order-summary-js').text('$'+price);
}
//菜单展开
//match.pay.vip
$(document).on('click','[data-show]',function(){
	var lock = $(this).attr('data-show') === 'false' ;
	var obj = $(this).siblings('div[data-menu]');
	if(lock) {
		obj.slideDown();
		$(this).attr('data-show','true')
	}else{
		obj.slideUp();
		$(this).attr('data-show','false')
	}
})



//信息留言

$('.message-btn-js').click(function(){
	$(this).siblings('.panel-js').slideToggle();
	$(this).parents('.panel-js').slideToggle();
	if($(this).parents('.messag-wrap-js').hasClass('open')){
		$(this).parents('.messag-wrap-js').removeClass("open");
	}else{
		$(this).parents('.messag-wrap-js').addClass("open");
	}
})
	


// 关闭panel
$(document).on('click','.close',function(){
	$(this).parents('.close-wrap-js').fadeOut();
})


/**
 * 关闭隐藏或删除父级元素
 * data-close=".box1" // 直接隐藏
 * data-close=".box,fade" // 带动画缓动
 * data-close=".box,hide,remove" // 删除
 * data-close=".box,slide,r" // 删除
 */
$(document).on('click','[data-close]',function(){
	var attrVal = $(this).attr('data-close');
	var arr = attrVal.split(',');
	var el = $(this).parents(arr[0]);
	
	if(!el.length){
		console.error('Element does not exist');
		return;
	}else if(arr[1] == '' || arr[1] == 'null' || !arr[1]){
		el.hide(function(){closeRemove()});
	}else if(arr[1] == 'fade'){
		el.fadeOut(function(){closeRemove()});
	}else if(arr[1] == 'slide'){
		el.slideUp(function(){closeRemove()});
	}else if(arr[1] == 'hide'){
		
		el.hide('slow',function(){closeRemove()});
	}
	function closeRemove(){
		if(arr[2] == 'remove'|| arr[2] == 'r'){
			el.remove();
		}
	}
	
	return;
});  

//	Order summary
$(window).scroll(function(){
	;(function(){
		if($('.right-js').length){
			var headerH = 0;
			var correctH = 10;
			var baseH = $('.right-js').outerHeight() + $('.right-js').offset().top;
			headerH = $('.header').outerHeight();
			var scrollTop = $(this).scrollTop() + headerH + correctH;
			
			var footerTop = $('.footer').offset().top;
			var rightH = $('.right-js').outerHeight();
			var dropboxH = $('.dropbox').outerHeight();
		
			if(footerTop - dropboxH -headerH <= scrollTop){
				$('.order-summary .dropbox.panel-buy').css('top',scrollTop-baseH -(scrollTop - (footerTop - dropboxH -headerH)));
				if($('.order-summary .dropbox').hasClass('panel-buy')){
					return false;
				}
			}
			
			if(baseH <= scrollTop){
				$('.order-summary .dropbox').css('top',scrollTop-baseH);
			}else{
				$('.order-summary .dropbox').css('top',0);
			}
			
		}
		
	})();
});




//160 字符限制
function maxSize(obj,maxSize,str){
	str = str || '<a href="javascript:;" class="text-primary">...More</a>';
	var html = '';
	if($(obj).html().length>=maxSize){
		html = $(obj).html().substring(0,maxSize) + str;
		$(obj).html(html)
		console.log($(this))
	}
}

function showHide(that){
	$(that).hide().siblings('.shows').show();
}

/**
 * type: 滚动到的位置或者元素
 * duration： 持续的时间
 * options： 
 */
function scrollTo(type, duration, options){
	if (typeof type == 'object'){
		var type = $(type).offset().top;
	}

	$('html, body').animate({
		scrollTop: type
	}, {
		duration: duration,
		queue: options.queue
	});
}

// 简历预览那切换
$('.resume-template .swiper-slide').click(function(){
	$('.resume-template .swiper-slide').removeClass('active');
	$(this).addClass("active")
});


// 关键字加粗
function strBold(str,keyword){
	var reg=new RegExp('\\'+keyword,'ig');
	str =str.replace(reg,'<strong>' + keyword + '</strong>');
	return str;
}

// 搜索内容
$('.animation-input-js').on('keyup',function(){
	var val = $(this).val();
	var str ='' // 为返回值
	var html = strBold(str,val)
//	console.log(val)
});
// 搜锁弹出右对齐
function searchPosition(position){
	var winW = $('.header-bottom').outerWidth();
	var searchInputW = $('.online-link').width();
	var searchInputOffsetLeft = $('.online-link').position().left;
	// right
	if(position){
		var positionRight = winW - searchInputW - searchInputOffsetLeft;
		$('.search-tips-js').css("right",positionRight);
	}else{
		var positionLeft = searchInputOffsetLeft;
		$('.search-tips-js').css("left",positionLeft);
	}
}

function loading(type,parent){ 
	
	var html = '<div id="aw-loading" class="hide">'+
					'<div id="aw-loading-box"></div>'+
				'</div>';
	var parent = parent || "body"
	
	if (!$('#aw-loading').length){
		$(parent).append(html);
	}
	if (type == 'show'){
		if ($('#aw-loading').hasClass('hide'))
		{
			$('#aw-loading').removeClass('hide');
		}

		$('#aw-loading').fadeIn();
	}else{
		$('#aw-loading').fadeOut();
	}
}

			/*
			loadingToBox('show','.submit-btn')
			disabledlink('.submit-btn')*/
			
			


