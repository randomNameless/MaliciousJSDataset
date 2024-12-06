/*________________________________________________________________________

	La classe Ticker permet d'afficher une banni�re d�filante d'annonces
	en haut de la page 
________________________________________________________________________*/
var Ticker = {
	remove : function(){
		switch ( this.direction ) {
			case 'left' :
				$('#fa_ticker > .fa_ticker_content:first').insertAfter('#fa_ticker > .fa_ticker_content:last').css('left', Math.max($('#fa_ticker').innerWidth(), this.innerWidth));
			break;

			case 'right' :
				$('#fa_ticker > .fa_ticker_content:last').insertBefore('#fa_ticker > .fa_ticker_content:first').css('left', Math.min(0, this.left)-this.innerWidth);
			break;

			case 'top' :
				$('#fa_ticker > .fa_ticker_content:first').insertAfter('#fa_ticker > .fa_ticker_content:last').css('top', this.innerHeight);
			break;

			case 'bottom' :
				$('#fa_ticker > .fa_ticker_content:last').insertBefore('#fa_ticker > .fa_ticker_content:first').css('top', (-2)*this.innerHeight);
			break;
		}
		
		this.index = ( this.direction == 'left' || this.direction == 'top' ) ? 0 : ( this.direction == 'right' ? $('#fa_ticker > .fa_ticker_content > div').length-1 : $('#fa_ticker > .fa_ticker_content:gt(0)').find(' > div').length );

		this.move();
	},

	sleep : function(){
		var space = 1;
		switch ( this.direction ) {
			case 'left' :
				space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('left'));
			break;

			case 'right' :
				space = $('#fa_ticker').innerWidth()-(parseInt($('#fa_ticker > .fa_ticker_content:first').css('left')) + this.innerWidth);
			break;

			case 'top' :
				space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('top'));
			break;

			case 'bottom' :
				space = (-1)*parseInt($('#fa_ticker > .fa_ticker_content:eq(1)').css('top'));
			break;
		}

		var self = this;
		this.timer = setTimeout(space < 1 ? function(){ Ticker.remove(); } : function(){ Ticker.move(); }, this.pause);
	},

	move : function() {
		if ( this.pause > 0 ) {
			this.index += ( this.direction == 'left' || this.direction == 'top' ) ? 1 : -1;
			var el = $('#fa_ticker > .fa_ticker_content > div:eq('+this.index+')');

			switch ( this.direction ) {
				case 'left' :
					var space = parseInt(el.parent().css('left'))+parseInt(el.css('left'));
					//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '-='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '-='+space+'px'}, ms, 'linear', function(){Ticker.sleep();});
				break;

				case 'right' :
					var space = $('#fa_ticker').width()-(parseInt(el.parent().css('left'))+parseInt(el.css('left'))+el.width());
					//var ms = (space/$('#fa_ticker').innerWidth())*(1000000/speed);
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '+='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '+='+space+'px'}, ms, 'linear', function(){Ticker.sleep();});
				break;

				case 'top' :
					var space = parseInt(el.parent().css('top'))+parseInt(el.css('top'));				
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'top' : '-='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'top' : '-='+space+'px'}, ms, 'linear', function(){Ticker.sleep();});
				break;

				case 'bottom' :
					var space = (-1)*(parseInt(el.parent().css('top'))+parseInt(el.css('top')));				
					var ms = space / this.speed * 1000;
					$('.fa_ticker_content:gt(0)').animate({'top' : '+='+space+'px'}, ms, 'linear');
					$('.fa_ticker_content:first').animate({'top' : '+='+space+'px'}, ms, 'linear', function(){Ticker.sleep();});
				break;
			}
		}
		else {
			switch ( this.direction ) {
				case 'left' :
					var space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('left'));				
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '-='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '-='+space+'px'}, ms, 'linear', function(){Ticker.remove();});
				break;

				case 'right' :
					var space = $('#fa_ticker').innerWidth()-(parseInt($('#fa_ticker > .fa_ticker_content:first').css('left')) + this.innerWidth);
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'left' : '+='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'left' : '+='+space+'px'}, ms, 'linear', function(){Ticker.remove();});
				break;

				case 'top' :
					var space = parseInt($('#fa_ticker > .fa_ticker_content:last').css('top'));				
					var ms = space / this.speed * 1000;
					$('#fa_ticker > .fa_ticker_content:first').animate({'top' : '-='+space+'px'}, ms, 'linear');
					$('#fa_ticker > .fa_ticker_content:last').animate({'top' : '-='+space+'px'}, ms, 'linear', function(){Ticker.remove();});
				break;

				case 'bottom' :
					var space = (-1)*parseInt($('#fa_ticker > .fa_ticker_content:eq(1)').css('top'));				
					var ms = space / this.speed * 1000;
					$('.fa_ticker_content:gt(0)').animate({'top' : '+='+space+'px'}, ms, 'linear');
					$('.fa_ticker_content:first').animate({'top' : '+='+space+'px'}, ms, 'linear', function(){Ticker.remove();});
				break;
			}
		}
	},

	start : function(data){
		for(var i in data)
			this[i] = data[i];

		var cssDirectionalRules={'position' : 'absolute', 'white-space' : 'nowrap'};

		var max_height = this.max_height;

		$('#fa_ticker_block').show();
		if(!max_height){
			max_height = this.height;
			$('#fa_ticker > .fa_ticker_content > div').css(cssDirectionalRules).each(function(){
				max_height = Math.max(max_height, $(this).height());
			});
		}else{

			if(this.direction=='left' || this.direction=='right'){
				cssDirectionalRules={'position' : 'absolute', 'white-space' : 'nowrap'};
			}else{
				cssDirectionalRules={'position' : 'absolute', 'max-width' : '100%'};
			}

			$('#fa_ticker > .fa_ticker_content > div').css(cssDirectionalRules);

			if(this.direction=='left' || this.direction=='right'){
				$('#fa_ticker > .fa_ticker_content img').css({'max-height' : max_height + 'px'});
			}else{
				$('#fa_ticker > .fa_ticker_content img').css({'max-height' : max_height + 'px', 'max-width' : '100%'});
			}
		}

		$('#fa_ticker_container').find('#fa_ticker').andSelf().height(max_height);

		switch ( this.direction ) {
			case 'left' :
				this.innerWidth = 0;
				$('#fa_ticker > .fa_ticker_content > div').each(function(){
					$(this).css('left', Ticker.innerWidth);
					Ticker.innerWidth += Ticker.spacing + $(this).width();
				});
				$('#fa_ticker > .fa_ticker_content').css('left', 0).clone().appendTo($('#fa_ticker')).css('left', Math.max($('#fa_ticker').innerWidth(), this.innerWidth));
			break;

			case 'right' :
				$('#fa_ticker > .fa_ticker_content > div').each(function(){
					$(this).prependTo($('#fa_ticker > .fa_ticker_content'));
				});
				this.innerWidth = 0;
				$('#fa_ticker > .fa_ticker_content > div').each(function(){
					$(this).css('left', Ticker.innerWidth);
					Ticker.innerWidth += $(this).width() + Ticker.spacing;
				});
				this.left = $('#fa_ticker').width()-this.innerWidth;
				$('#fa_ticker > .fa_ticker_content').css('left', this.left).clone().prependTo($('#fa_ticker')).css('left', Math.min(0, this.left)-this.innerWidth);
			break;

			case 'top' :
				this.innerHeight = 0;
				$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'}).each(function(){
					$(this).css('top', Ticker.innerHeight);
					Ticker.innerHeight += max_height + Ticker.spacing;
				});
				$('#fa_ticker > .fa_ticker_content').css('top', 0).clone().appendTo($('#fa_ticker')).css('top', this.innerHeight);
			break;

			case 'bottom' :
				$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'}).each(function(){
					$(this).prependTo($('#fa_ticker > .fa_ticker_content'));
				});
				this.innerHeight = 0;
				$('#fa_ticker > .fa_ticker_content > div').each(function(){
					$(this).css('top', Ticker.innerHeight);
					Ticker.innerHeight += max_height + Ticker.spacing;
				});
				$('#fa_ticker > .fa_ticker_content').css('top', (-2) * this.innerHeight + max_height).clone().appendTo($('#fa_ticker')).css('top',  (-1)* this.innerHeight + max_height).clone().appendTo($('#fa_ticker')).css('top', max_height);
			break;

			case 'none' :
				$('#fa_ticker > .fa_ticker_content').width('100%').find(' > div').css({'width':'100%', 'text-align':'center'});
			break;
		}

		if ( this.direction != 'none' ) {
			this.index = ( this.direction == 'left' || this.direction == 'top' ) ? 0 : ( this.direction == 'right' ? $('#fa_ticker > .fa_ticker_content > div').length : $('#fa_ticker > .fa_ticker_content:gt(0)').find(' > div').length );
			
			$('#fa_ticker').hover(function(){
				$('#fa_ticker > .fa_ticker_content').stop();
				
				clearTimeout(Ticker.timer);
				Ticker.index += ( Ticker.direction == 'left' || Ticker.direction == 'top' ) ? -1 : 1;
				
			}, function(){
				Ticker.move();
			});
			

			this.move();
		}
	}
};

function ticker_start(h, s, e, d, st){
	try{
		Ticker.start({
			height : h,
			spacing : s,
			speed : e,
			direction : d,
			pause : st
		});
	}
	catch(e){}
}
