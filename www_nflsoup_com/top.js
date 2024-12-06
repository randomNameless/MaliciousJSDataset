var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	
	setting: {startline:100, scrollto: 0, scrollduration:800, fadeduration:[600, 800]},
	controlHTML: '<div class="scrolltop"></div>', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:20, offsety:20}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links
	state: {isvisible:false, shouldvisible:false},
	scrollup:function(){
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$jcontrol.css({opacity:0}) //hide control immediately after clicking it
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
		if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
			dest=jQuery('#'+dest).offset().top
		else
			dest=0
		this.$jbody.animate({scrollTop: dest}, this.setting.scrollduration);
	},
	
	keepfixed:function(){
		var $jwindow=jQuery(window)
		var controlx=$jwindow.scrollLeft() + $jwindow.width() - this.$jcontrol.width() - this.controlattrs.offsetx
		var controly=$jwindow.scrollTop() + $jwindow.height() - this.$jcontrol.height() - this.controlattrs.offsety
		this.$jcontrol.css({left:controlx+'px', top:controly+'px'})
	},
	
	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop()
		if (!this.cssfixedsupport)
			this.keepfixed()
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible){
			this.$jcontrol.stop().animate({opacity:1}, this.setting.fadeduration[0])
			this.state.isvisible=true
		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			this.$jcontrol.stop().animate({opacity:0}, this.setting.fadeduration[1])
			this.state.isvisible=false
		}
	},
	
	init:function(){
		var $j = jQuery.noConflict();
		$j(function(){
			var mainobj=scrolltotop
			var iebrws=document.all
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$jbody=(window.opera)? (document.compatMode=="CSS1Compat"? $j('html') : $j('body')) : $j('html,body')
			mainobj.$jcontrol=$j('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
				.attr({title:'Back to Top'})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body')
			if (document.all && !window.XMLHttpRequest && mainobj.$jcontrol.text()!='') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$jcontrol.css({width:mainobj.$jcontrol.width()}) //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol()
			$j('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup()
				return false
			})
			$j(window).bind('scroll resize', function(e){
				mainobj.togglecontrol()
			})
		})
	}
}
scrolltotop.init()