

$(document).ready(function() {
	$(".yinz li").mouseover(function() {
		$(this).addClass("cur").siblings('li').removeClass('cur');
	})
});

// 搜索
var key = document.getElementById("key");
	function searchInfo() {
		var base = $('head').data('base');
		if (key.value) {
			location.href = base + "search.php?key=" + key.value;
		} else {
			alert('请输入关键词....');
		}
	}
	key.addEventListener('keypress', function(event) {
		var keycode = event.keycode || event.which;
		if (keycode == "13") {
			searchInfo();
		}
	});

//数字增加动画
    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        })
    };
        function countadd(){
            var count = 0;
            count++;
            $('.ibrand-num li').each(function(){
                dataperc = $(this).attr('data-perc'),
                $(this).find('.num').delay(6000).countTo({
                from: 0,
                to: dataperc,
                speed: 4000,
                refreshInterval: 450
                });
            });
        }
        function scrolltop(){
            var top = $(window).scrollTop();
            var htop = $('.yinz').offset().top - $(window).height()/3;
            if(top>=htop){
                countadd();
                $('.ibrand-num').removeClass('ani');
                
            }
        }
        scrolltop();

        $(window).scroll(function(){
            scrolltop();
    
        });

$(document).ready(function() {
	$(".fang .fang1").mouseover(function() {
		$(this).addClass("cur").siblings('.fang1').removeClass('cur');
	})
});

$(document).ready(function() {
	$(".caset h3").mouseover(function() {
		$(this).addClass("cur").siblings('h3').removeClass('cur');
	})
});

$(".ys").slide({titOnClassName:'cur',titCell: ".yst ul li", mainCell: ".ys1",effect:"fold", autoPlay: true,prevCell:".ys_l",nextCell:".ys_r" });

$(".news").slide({titOnClassName:'cur',titCell: ".newst h3", mainCell: ".news1",effect:"fold", autoPlay: false, });	

$(".about1").slide({ mainCell: ".about2 ul",effect:"leftLoop",vis:1,autoPlay: true,prevCell:'.about_l',nextCell:'.about_r'});


