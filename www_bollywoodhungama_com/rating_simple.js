(
        function($) {
            $.fn.webwidget_rating_simple = function(p) {
                var p = p || {};
                var b = p && p.rating_star_length ? p.rating_star_length : "10";
                var c = p && p.rating_function_name ? p.rating_function_name : "";
                var e = p && p.rating_initial_value ? p.rating_initial_value : "";
                var k = p && p.rating_extra_args ? p.rating_extra_args : {};
                var f = "";
                var g = $(this);
                b = parseInt(b);
                init();
                g.next("ul").children("li").hover(function() {
                    var a = $(this).parent().children("li").index($(this));
	                var class_postfix = ( a + 1 ) * 5;
	                if( class_postfix < 10 ){
		                class_postfix = '0' + class_postfix;
	                }
	                $(this).closest('.bh-ratings-action').siblings('.current-rating').attr( 'class', 'current-rating hover rating-' + class_postfix );
                }, function() {
                    
                });
                g.next("ul").children("li").click(function() {
                    var a = $(this).parent().children("li").index($(this));
                    f = ( a + 1 ) / 2;
                    g.val(f);
                    if (c != "") {
                        //eval(c + "(" + g.val() + "," + k + ")")
                        c.call({},g.val(), k);
                    }
                });
                g.next("ul").hover(function() {
                }, function() {
	                var class_postfix = f * 10;
                    if( class_postfix < 10 ){
                        class_postfix = '0' + class_postfix;
                    }
	                $(this).closest('.bh-ratings-action').siblings('.current-rating').attr( 'class', 'current-rating rating-' + class_postfix );
                });

                function init() {
                    g.css("float", "left");
                    var a = $("<ul>");
                    a.attr("class", "webwidget_rating_simple");
                    for (var i = 1; i <= b; i++) {
                        a.append('<li ><div class="dashicons dashicons-star-filled"></div></li>')
                    }
                    a.insertAfter(g);
                    if (e != "") {
                        f = e;
                        g.val(e);
                    g.next("ul").children("li").children("div").slice(0, f).removeClass("bh-ratings-star-empty");
                    g.next("ul").children("li").children("div").slice(0, f).addClass("bh-ratings-star-filled");
                    }
                }}
        }
)(jQuery);