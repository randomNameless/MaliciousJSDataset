
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous"> </button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next"> </button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().width(100/a.options.slidesPerRow+"%").css({display:"inline-block"})}},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).off("click.slick",b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",b.setPaused.bind(b,!0)).off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.off("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},b.cleanUpEvents(),a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides&&(b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden","true").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.html(b.$slides)),b.cleanUpRows(),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized")},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildRows(),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",b.setPaused.bind(b,!0)).on("mouseleave.slick",b.setPaused.bind(b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&a(document).on(b.visibilityChange,b.visibility.bind(b)),b.$list.on("mouseenter.slick",b.setPaused.bind(b,!0)),b.$list.on("mouseleave.slick",b.setPaused.bind(b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange.bind(b)),a(window).on("resize.slick.slick-"+b.instanceUid,b.resize.bind(b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:1},200)},d.src=c,b.css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!1)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,b.autoPlayClear())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true"),c.$slides.eq(e).addClass("slick-active").attr("aria-hidden","false"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(e).addClass("slick-center")),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;
if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
(function($)
{
$(function()
{
var slickOptsDefault =
{
slidesToShow : 6
, slidesToScroll : 1
, fade : false
, swipe : true
, dots: false
, variableWidth: true
, focusOnSelect : true
, infinite: false
, centerMode : true
, responsive :
[
{
breakpoint : 600
, settings :
{
slidesToShow : 3
, arrows : true
}
}
, {
breakpoint : 480
, settings :
{
slidesToShow : 2
, arrows : true
}
}
]
};
var slickOptsLargeNoSlick = $.extend( true, {}, slickOptsDefault );
slickOptsLargeNoSlick.responsive.unshift(
{
breakpoint : 999999
, settings : 'unslick' // this doesn't disable the slick instance, but _removes_ it entirely!
});
var slickOptsMax4NoSlick = $.extend( true, {}, slickOptsLargeNoSlick );
slickOptsMax4NoSlick.slidesToShow = 4;
$( '.slick:not([class*="slick-opts"])' ).slick( slickOptsDefault );
$( '.slick.slick-opts-lg-noslick' ).slick( slickOptsLargeNoSlick ).find('.item').removeAttr('aria-hidden');
$( '.slick.slick-opts-max-4-noslick' ).slick( slickOptsMax4NoSlick ).find('.item').removeAttr('aria-hidden');
$( '.slick.slick-opts-banner-auto' ).slick(); // reads options from data attribute
$( '.category-nav-item a' ).on( 'shown.bs.tab', function (e)
{
$( '.tab-pane .slick' ).slick('setPosition' );
});
$('.slick-prev,.slick-next,.slick-slide.slick-cloned a').removeAttr('tabindex').attr('tabindex', '-1');
$('.tab-pane .slick .slick-list').unbind('focus');
$(document).on( 'keyup', '.slick-slide', function ()
{
$(this).closest( '.items.slick' ).slick( 'slickGoTo', $(this).data( 'slick-index' ), true );
});
$( '.slick.slick-opts-lg-noslick, .slick.slick-opts-max-4-noslick' ).not('.slick-slider').find('.item').removeAttr('aria-hidden');
$('.slick-opts-banner-auto .slick-dots button').attr( 'tabindex', '-1' );
$(document).on( 'focus', '.banner-overlay', function ()
{
$(this).closest('.slick').slick( 'slickGoTo', $(this).parent().data( 'slick-index' ), true );
});
$(document).on( 'click', '.slick-play-pause', function ()
{
var slickAction = ( $(this).data( 'slick-action' ) === 'slickPlay' )? 'slickPause' : 'slickPlay';
var ariaLabel = $(this).attr( 'aria-label' );
$(this).parent().find( '.slick-opts-banner-auto' ).slick( slickAction );
$(this).attr( 'aria-label', function ()
{
return ( slickAction === 'slickPlay' ) ? ariaLabel.replace( 'Paused', 'Playing' ) : ariaLabel.replace( 'Playing', 'Paused' );
});
$(this).text(function ()
{
return ( slickAction === 'slickPlay' ) ? 'Pause' : 'Play';
});
$(this).data( 'slick-action', slickAction );
});
});
})(jQuery);
(function ($, document, window) {
var
defaults = {
html: false,
photo: false,
iframe: false,
inline: false,
transition: "elastic",
speed: 300,
fadeOut: 300,
width: false,
initialWidth: "600",
innerWidth: false,
maxWidth: false,
height: false,
initialHeight: "450",
innerHeight: false,
maxHeight: false,
scalePhotos: true,
scrolling: true,
opacity: 0.9,
preloading: true,
className: false,
overlayClose: true,
escKey: true,
arrowKey: true,
top: false,
bottom: false,
left: false,
right: false,
fixed: false,
data: undefined,
closeButton: true,
fastIframe: true,
open: false,
reposition: true,
loop: true,
slideshow: false,
slideshowAuto: true,
slideshowSpeed: 2500,
slideshowStart: "start slideshow",
slideshowStop: "stop slideshow",
photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
loadingOverlayTimeout: 100,
retinaImage: false,
retinaUrl: false,
retinaSuffix: '@2x.$1',
current: "image {current} of {total}",
previous: "previous",
next: "next",
close: "close",
xhrError: "This content failed to load.",
imgError: "This image failed to load.",
returnFocus: true,
trapFocus: true,
onOpen: false,
onLoad: false,
onComplete: false,
onCleanup: false,
onClosed: false,
rel: function() {
return this.rel;
},
href: function() {
return $(this).attr('href');
},
title: function() {
return this.title;
},
createImg: function() {
var img = new Image();
var attrs = $(this).data('cbox-img-attrs');
if (typeof attrs === 'object') {
$.each(attrs, function(key, val){
img[key] = val;
});
}
return img;
},
createIframe: function() {
var iframe = document.createElement('iframe');
var attrs = $(this).data('cbox-iframe-attrs');
if (typeof attrs === 'object') {
$.each(attrs, function(key, val){
iframe[key] = val;
});
}
if ('frameBorder' in iframe) {
iframe.frameBorder = 0;
}
if ('allowTransparency' in iframe) {
iframe.allowTransparency = "true";
}
iframe.name = (new Date()).getTime(); // give the iframe a unique name to prevent caching
iframe.allowFullscreen = true;
return iframe;
}
},
colorbox = 'colorbox',
prefix = 'cbox',
boxElement = prefix + 'Element',
event_open = prefix + '_open',
event_load = prefix + '_load',
event_complete = prefix + '_complete',
event_cleanup = prefix + '_cleanup',
event_closed = prefix + '_closed',
event_purge = prefix + '_purge',
$overlay,
$box,
$wrap,
$content,
$topBorder,
$leftBorder,
$rightBorder,
$bottomBorder,
$related,
$window,
$loaded,
$loadingBay,
$loadingOverlay,
$title,
$current,
$slideshow,
$next,
$prev,
$close,
$groupControls,
$events = $('<a/>'), // $({}) would be preferred, but there is an issue with jQuery 1.4.2
settings,
interfaceHeight,
interfaceWidth,
loadedHeight,
loadedWidth,
index,
photo,
open,
active,
closing,
loadingTimer,
publicMethod,
div = "div",
requests = 0,
previousCSS = {},
init;
function $tag(tag, id, css) {
var element = document.createElement(tag);
if (id) {
element.id = prefix + id;
}
if (css) {
element.style.cssText = css;
}
return $(element);
}
function winheight() {
return window.innerHeight ? window.innerHeight : $(window).height();
}
function Settings(element, options) {
if (options !== Object(options)) {
options = {};
}
this.cache = {};
this.el = element;
this.value = function(key) {
var dataAttr;
if (this.cache[key] === undefined) {
dataAttr = $(this.el).attr('data-cbox-'+key);
if (dataAttr !== undefined) {
this.cache[key] = dataAttr;
} else if (options[key] !== undefined) {
this.cache[key] = options[key];
} else if (defaults[key] !== undefined) {
this.cache[key] = defaults[key];
}
}
return this.cache[key];
};
this.get = function(key) {
var value = this.value(key);
return $.isFunction(value) ? value.call(this.el, this) : value;
};
}
function getIndex(increment) {
var
max = $related.length,
newIndex = (index + increment) % max;
return (newIndex < 0) ? max + newIndex : newIndex;
}
function setSize(size, dimension) {
return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
}
function isImage(settings, url) {
return settings.get('photo') || settings.get('photoRegex').test(url);
}
function retinaUrl(settings, url) {
return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
}
function trapFocus(e) {
if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
e.stopPropagation();
$box.focus();
}
}
function setClass(str) {
if (setClass.str !== str) {
$box.add($overlay).removeClass(setClass.str).addClass(str);
setClass.str = str;
}
}
function getRelated(rel) {
index = 0;
if (rel && rel !== false && rel !== 'nofollow') {
$related = $('.' + boxElement).filter(function () {
var options = $.data(this, colorbox);
var settings = new Settings(this, options);
return (settings.get('rel') === rel);
});
index = $related.index(settings.el);
if (index === -1) {
$related = $related.add(settings.el);
index = $related.length - 1;
}
} else {
$related = $(settings.el);
}
}
function trigger(event) {
$(document).trigger(event);
$events.triggerHandler(event);
}
var slideshow = (function(){
var active,
className = prefix + "Slideshow_",
click = "click." + prefix,
timeOut;
function clear () {
clearTimeout(timeOut);
}
function set() {
if (settings.get('loop') || $related[index + 1]) {
clear();
timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
}
}
function start() {
$slideshow
.html(settings.get('slideshowStop'))
.unbind(click)
.one(click, stop);
$events
.bind(event_complete, set)
.bind(event_load, clear);
$box.removeClass(className + "off").addClass(className + "on");
}
function stop() {
clear();
$events
.unbind(event_complete, set)
.unbind(event_load, clear);
$slideshow
.html(settings.get('slideshowStart'))
.unbind(click)
.one(click, function () {
publicMethod.next();
start();
});
$box.removeClass(className + "on").addClass(className + "off");
}
function reset() {
active = false;
$slideshow.hide();
clear();
$events
.unbind(event_complete, set)
.unbind(event_load, clear);
$box.removeClass(className + "off " + className + "on");
}
return function(){
if (active) {
if (!settings.get('slideshow')) {
$events.unbind(event_cleanup, reset);
reset();
}
} else {
if (settings.get('slideshow') && $related[1]) {
active = true;
$events.one(event_cleanup, reset);
if (settings.get('slideshowAuto')) {
start();
} else {
stop();
}
$slideshow.show();
}
}
};
}());
function launch(element) {
var options;
if (!closing) {
options = $(element).data(colorbox);
settings = new Settings(element, options);
getRelated(settings.get('rel'));
if (!open) {
open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
setClass(settings.get('className'));
$box.css({visibility:'hidden', display:'block', opacity:''});
$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
$content.css({width:'', height:''}).append($loaded);
interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
loadedHeight = $loaded.outerHeight(true);
loadedWidth = $loaded.outerWidth(true);
var initialWidth = setSize(settings.get('initialWidth'), 'x');
var initialHeight = setSize(settings.get('initialHeight'), 'y');
var maxWidth = settings.get('maxWidth');
var maxHeight = settings.get('maxHeight');
settings.w = Math.max((maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth, 0);
settings.h = Math.max((maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight, 0);
$loaded.css({width:'', height:settings.h});
publicMethod.position();
trigger(event_open);
settings.get('onOpen');
$groupControls.add($title).hide();
$box.focus();
if (settings.get('trapFocus')) {
if (document.addEventListener) {
document.addEventListener('focus', trapFocus, true);
$events.one(event_closed, function () {
document.removeEventListener('focus', trapFocus, true);
});
}
}
if (settings.get('returnFocus')) {
$events.one(event_closed, function () {
$(settings.el).focus();
});
}
}
var opacity = parseFloat(settings.get('opacity'));
$overlay.css({
opacity: opacity === opacity ? opacity : '',
cursor: settings.get('overlayClose') ? 'pointer' : '',
visibility: 'visible'
}).show();
if (settings.get('closeButton')) {
$close.html(settings.get('close')).appendTo($content);
} else {
$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
}
load();
}
}
function appendHTML() {
if (!$box) {
init = false;
$window = $(window);
$box = $tag(div).attr({
id: colorbox,
'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
role: 'dialog',
tabindex: '-1'
}).hide();
$overlay = $tag(div, "Overlay").hide();
$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
$wrap = $tag(div, "Wrapper");
$content = $tag(div, "Content").append(
$title = $tag(div, "Title"),
$current = $tag(div, "Current"),
$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
$slideshow = $('<button type="button"/>').attr({id:prefix+'Slideshow'}),
$loadingOverlay
);
$close = $('<button type="button"/>').attr({id:prefix+'Close'});
$wrap.append( // The 3x3 Grid that makes up Colorbox
$tag(div).append(
$tag(div, "TopLeft"),
$topBorder = $tag(div, "TopCenter"),
$tag(div, "TopRight")
),
$tag(div, false, 'clear:left').append(
$leftBorder = $tag(div, "MiddleLeft"),
$content,
$rightBorder = $tag(div, "MiddleRight")
),
$tag(div, false, 'clear:left').append(
$tag(div, "BottomLeft"),
$bottomBorder = $tag(div, "BottomCenter"),
$tag(div, "BottomRight")
)
).find('div div').css({'float': 'left'});
$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
$groupControls = $next.add($prev).add($current).add($slideshow);
}
if (document.body && !$box.parent().length) {
$(document.body).append($overlay, $box.append($wrap, $loadingBay));
}
}
function addBindings() {
function clickHandler(e) {
if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
e.preventDefault();
launch(this);
}
}
if ($box) {
if (!init) {
init = true;
$next.click(function () {
publicMethod.next();
});
$prev.click(function () {
publicMethod.prev();
});
$close.click(function () {
publicMethod.close();
});
$overlay.click(function () {
if (settings.get('overlayClose')) {
publicMethod.close();
}
});
$(document).bind('keydown.' + prefix, function (e) {
var key = e.keyCode;
if (open && settings.get('escKey') && key === 27) {
e.preventDefault();
publicMethod.close();
}
if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
if (key === 37) {
e.preventDefault();
$prev.click();
} else if (key === 39) {
e.preventDefault();
$next.click();
}
}
});
if ($.isFunction($.fn.on)) {
$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
} else {
$('.'+boxElement).live('click.'+prefix, clickHandler);
}
}
return true;
}
return false;
}
if ($[colorbox]) {
return;
}
$(appendHTML);
publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
var settings;
var $obj = this;
options = options || {};
if ($.isFunction($obj)) { // assume a call to $.colorbox
$obj = $('<a/>');
options.open = true;
}
if (!$obj[0]) { // colorbox being applied to empty collection
return $obj;
}
appendHTML();
if (addBindings()) {
if (callback) {
options.onComplete = callback;
}
$obj.each(function () {
var old = $.data(this, colorbox) || {};
$.data(this, colorbox, $.extend(old, options));
}).addClass(boxElement);
settings = new Settings($obj[0], options);
if (settings.get('open')) {
launch($obj[0]);
}
}
return $obj;
};
publicMethod.position = function (speed, loadedCallback) {
var
css,
top = 0,
left = 0,
offset = $box.offset(),
scrollTop,
scrollLeft;
$window.unbind('resize.' + prefix);
$box.css({top: -9e4, left: -9e4});
scrollTop = $window.scrollTop();
scrollLeft = $window.scrollLeft();
if (settings.get('fixed')) {
offset.top -= scrollTop;
offset.left -= scrollLeft;
$box.css({position: 'fixed'});
} else {
top = scrollTop;
left = scrollLeft;
$box.css({position: 'absolute'});
}
if (settings.get('right') !== false) {
left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
} else if (settings.get('left') !== false) {
left += setSize(settings.get('left'), 'x');
} else {
left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
}
if (settings.get('bottom') !== false) {
top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
} else if (settings.get('top') !== false) {
top += setSize(settings.get('top'), 'y');
} else {
top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
}
$box.css({top: offset.top, left: offset.left, visibility:'visible'});
$wrap[0].style.width = $wrap[0].style.height = "9999px";
function modalDimensions() {
$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
}
css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};
if (speed) {
var tempSpeed = 0;
$.each(css, function(i){
if (css[i] !== previousCSS[i]) {
tempSpeed = speed;
return;
}
});
speed = tempSpeed;
}
previousCSS = css;
if (!speed) {
$box.css(css);
}
$box.dequeue().animate(css, {
duration: speed || 0,
complete: function () {
modalDimensions();
active = false;
$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
if (settings.get('reposition')) {
setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
$window.bind('resize.' + prefix, publicMethod.position);
}, 1);
}
if ($.isFunction(loadedCallback)) {
loadedCallback();
}
},
step: modalDimensions
});
};
publicMethod.resize = function (options) {
var scrolltop;
if (open) {
options = options || {};
if (options.width) {
settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
}
if (options.innerWidth) {
settings.w = setSize(options.innerWidth, 'x');
}
$loaded.css({width: settings.w});
if (options.height) {
settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
}
if (options.innerHeight) {
settings.h = setSize(options.innerHeight, 'y');
}
if (!options.innerHeight && !options.height) {
scrolltop = $loaded.scrollTop();
$loaded.css({height: "auto"});
settings.h = $loaded.height();
}
$loaded.css({height: settings.h});
if(scrolltop) {
$loaded.scrollTop(scrolltop);
}
publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
}
};
publicMethod.prep = function (object) {
if (!open) {
return;
}
var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');
$loaded.remove();
$loaded = $tag(div, 'LoadedContent').append(object);
function getWidth() {
settings.w = settings.w || $loaded.width();
settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
return settings.w;
}
function getHeight() {
settings.h = settings.h || $loaded.height();
settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
return settings.h;
}
$loaded.hide()
.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
.prependTo($content);
$loadingBay.hide();
$(photo).css({'float': 'none'});
setClass(settings.get('className'));
callback = function () {
var total = $related.length,
iframe,
complete;
if (!open) {
return;
}
function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
if ($.support.opacity === false) {
$box[0].style.removeAttribute('filter');
}
}
complete = function () {
clearTimeout(loadingTimer);
$loadingOverlay.hide();
trigger(event_complete);
settings.get('onComplete');
};
$title.html(settings.get('title')).show();
$loaded.show();
if (total > 1) { // handle grouping
if (typeof settings.get('current') === "string") {
$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
}
$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
slideshow();
if (settings.get('preloading')) {
$.each([getIndex(-1), getIndex(1)], function(){
var img,
i = $related[this],
settings = new Settings(i, $.data(i, colorbox)),
src = settings.get('href');
if (src && isImage(settings, src)) {
src = retinaUrl(settings, src);
img = document.createElement('img');
img.src = src;
}
});
}
} else {
$groupControls.hide();
}
if (settings.get('iframe')) {
iframe = settings.get('createIframe');
if (!settings.get('scrolling')) {
iframe.scrolling = "no";
}
$(iframe)
.attr({
src: settings.get('href'),
'class': prefix + 'Iframe'
})
.one('load', complete)
.appendTo($loaded);
$events.one(event_purge, function () {
iframe.src = "//about:blank";
});
if (settings.get('fastIframe')) {
$(iframe).trigger('load');
}
} else {
complete();
}
if (settings.get('transition') === 'fade') {
$box.fadeTo(speed, 1, removeFilter);
} else {
removeFilter();
}
};
if (settings.get('transition') === 'fade') {
$box.fadeTo(speed, 0, function () {
publicMethod.position(0, callback);
});
} else {
publicMethod.position(speed, callback);
}
};
function load () {
var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
active = true;
photo = false;
trigger(event_purge);
trigger(event_load);
settings.get('onLoad');
settings.h = settings.get('height') ?
setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
settings.w = settings.get('width') ?
setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
settings.mw = settings.w;
settings.mh = settings.h;
if (settings.get('maxWidth')) {
settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
}
if (settings.get('maxHeight')) {
settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
}
href = settings.get('href');
loadingTimer = setTimeout(function () {
$loadingOverlay.show();
}, settings.get('loadingOverlayTimeout'));
if (settings.get('inline')) {
var $target = $(href).eq(0);
$inline = $('<div>').hide().insertBefore($target);
$events.one(event_purge, function () {
$inline.replaceWith($target);
});
prep($target);
} else if (settings.get('iframe')) {
prep(" ");
} else if (settings.get('html')) {
prep(settings.get('html'));
} else if (isImage(settings, href)) {
href = retinaUrl(settings, href);
photo = settings.get('createImg');
$(photo)
.addClass(prefix + 'Photo')
.bind('error.'+prefix,function () {
prep($tag(div, 'Error').html(settings.get('imgError')));
})
.one('load', function () {
if (request !== requests) {
return;
}
setTimeout(function(){
var percent;
if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
photo.height = photo.height / window.devicePixelRatio;
photo.width = photo.width / window.devicePixelRatio;
}
if (settings.get('scalePhotos')) {
setResize = function () {
photo.height -= photo.height * percent;
photo.width -= photo.width * percent;
};
if (settings.mw && photo.width > settings.mw) {
percent = (photo.width - settings.mw) / photo.width;
setResize();
}
if (settings.mh && photo.height > settings.mh) {
percent = (photo.height - settings.mh) / photo.height;
setResize();
}
}
if (settings.h) {
photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
}
if ($related[1] && (settings.get('loop') || $related[index + 1])) {
photo.style.cursor = 'pointer';
$(photo).bind('click.'+prefix, function () {
publicMethod.next();
});
}
photo.style.width = photo.width + 'px';
photo.style.height = photo.height + 'px';
prep(photo);
}, 1);
});
photo.src = href;
} else if (href) {
$loadingBay.load(href, settings.get('data'), function (data, status) {
if (request === requests) {
prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
}
});
}
}
publicMethod.next = function () {
if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
index = getIndex(1);
launch($related[index]);
}
};
publicMethod.prev = function () {
if (!active && $related[1] && (settings.get('loop') || index)) {
index = getIndex(-1);
launch($related[index]);
}
};
publicMethod.close = function () {
if (open && !closing) {
closing = true;
open = false;
trigger(event_cleanup);
settings.get('onCleanup');
$window.unbind('.' + prefix);
$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
$box.hide();
$overlay.hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function () {
closing = false;
trigger(event_closed);
settings.get('onClosed');
}, 1);
});
}
};
publicMethod.remove = function () {
if (!$box) { return; }
$box.stop();
$[colorbox].close();
$box.stop(false, true).remove();
$overlay.remove();
closing = false;
$box = null;
$('.' + boxElement)
.removeData(colorbox)
.removeClass(boxElement);
$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
};
publicMethod.element = function () {
return $(settings.el);
};
publicMethod.settings = defaults;
}(jQuery, document, window));
(function($)
{
$(function()
{
var modalResizeTimer;
var optionsCover =
{
maxWidth:'95%'
, maxHeight:'95%'
, className: 'cb-modal-cover'
};
var optionsExcerpt =
{
inline:true
, width: '95%'
, height: '95%'
, maxWidth:'700px'
, maxHeight:'95%'
, className: 'cb-modal-excerpt'
};
var optionsGallery =
{
maxWidth:'95%'
, maxHeight:'95%'
, className: 'cb-modal-gallery'
, transition: 'fade'
, speed: 200
, loadingOverlayTimeout: 300
, previous: '<div class="arrow"></div>'
, next: '<div class="arrow"></div>'
};
var optionsEmbed =
{
inline:true
, maxWidth:'95%'
, maxHeight:'95%'
, className: 'cb-modal-embed'
, onComplete: function()
{
$(this).colorbox.resize();
}
};
var $modalCover   = $( '.modal-cover' ).colorbox( optionsCover );
var $modalExcerpt = $( '.modal-excerpt' ).colorbox( optionsExcerpt );
var $modalGallery = $( '.modal-gallery' ).colorbox( optionsGallery );
var $modalEmbed   = $( '.modal-embed' ).colorbox( optionsEmbed );
function modalResize()
{
if ( modalResizeTimer )
{
clearTimeout( modalResizeTimer );
}
modalResizeTimer = setTimeout(function()
{
if ( $( '#cboxOverlay.cb-modal-excerpt' ).is( ':visible' ) )
{
$.colorbox.resize(
{
width: window.innerWidth > parseInt( optionsExcerpt.maxWidth )? optionsExcerpt.maxWidth : optionsExcerpt.width
, height: window.innerHeight > parseInt( optionsExcerpt.maxHeight )? optionsExcerpt.maxHeight : optionsExcerpt.height
});
}
}
, 300);
}
$(window).resize( modalResize );
window.addEventListener( 'orientationchange', modalResize, false );
});
})(jQuery);
;(function(factory) { // eslint-disable-line no-extra-semi
'use strict';
if (typeof define === 'function' && define.amd) {
define(['jquery'], factory);
} else if (typeof module !== 'undefined' && module.exports) {
module.exports = factory(require('jquery'));
} else {
factory(jQuery);
}
})(function($) {
var _previousResizeWidth = -1,
_updateTimeout = -1;
var _parse = function(value) {
return parseFloat(value) || 0;
};
var _rows = function(elements) {
var tolerance = 1,
$elements = $(elements),
lastTop = null,
rows = [];
$elements.each(function(){
var $that = $(this),
top = $that.offset().top - _parse($that.css('margin-top')),
lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
if (lastRow === null) {
rows.push($that);
} else {
if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
rows[rows.length - 1] = lastRow.add($that);
} else {
rows.push($that);
}
}
lastTop = top;
});
return rows;
};
var _parseOptions = function(options) {
var opts = {
byRow: true,
property: 'height',
target: null,
remove: false
};
if (typeof options === 'object') {
return $.extend(opts, options);
}
if (typeof options === 'boolean') {
opts.byRow = options;
} else if (options === 'remove') {
opts.remove = true;
}
return opts;
};
var matchHeight = $.fn.matchHeight = function(options) {
var opts = _parseOptions(options);
if (opts.remove) {
var that = this;
this.css(opts.property, '');
$.each(matchHeight._groups, function(key, group) {
group.elements = group.elements.not(that);
});
return this;
}
if (this.length <= 1 && !opts.target) {
return this;
}
matchHeight._groups.push({
elements: this,
options: opts
});
matchHeight._apply(this, opts);
return this;
};
matchHeight.version = '0.7.0';
matchHeight._groups = [];
matchHeight._throttle = 80;
matchHeight._maintainScroll = false;
matchHeight._beforeUpdate = null;
matchHeight._afterUpdate = null;
matchHeight._rows = _rows;
matchHeight._parse = _parse;
matchHeight._parseOptions = _parseOptions;
matchHeight._apply = function(elements, options) {
var opts = _parseOptions(options),
$elements = $(elements),
rows = [$elements];
var scrollTop = $(window).scrollTop(),
htmlHeight = $('html').outerHeight(true);
var $hiddenParents = $elements.parents().filter(':hidden');
$hiddenParents.each(function() {
var $that = $(this);
$that.data('style-cache', $that.attr('style'));
});
$hiddenParents.css('display', 'block');
if (opts.byRow && !opts.target) {
$elements.each(function() {
var $that = $(this),
display = $that.css('display');
if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
display = 'block';
}
$that.data('style-cache', $that.attr('style'));
$that.css({
'display': display,
'padding-top': '0',
'padding-bottom': '0',
'margin-top': '0',
'margin-bottom': '0',
'border-top-width': '0',
'border-bottom-width': '0',
'height': '100px',
'overflow': 'hidden'
});
});
rows = _rows($elements);
$elements.each(function() {
var $that = $(this);
$that.attr('style', $that.data('style-cache') || '');
});
}
$.each(rows, function(key, row) {
var $row = $(row),
targetHeight = 0;
if (!opts.target) {
if (opts.byRow && $row.length <= 1) {
$row.css(opts.property, '');
return;
}
$row.each(function(){
var $that = $(this),
style = $that.attr('style'),
display = $that.css('display');
if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
display = 'block';
}
var css = { 'display': display };
css[opts.property] = '';
$that.css(css);
if ($that.outerHeight(false) > targetHeight) {
targetHeight = $that.outerHeight(false);
}
if (style) {
$that.attr('style', style);
} else {
$that.css('display', '');
}
});
} else {
targetHeight = opts.target.outerHeight(false);
}
$row.each(function(){
var $that = $(this),
verticalPadding = 0;
if (opts.target && $that.is(opts.target)) {
return;
}
if ($that.css('box-sizing') !== 'border-box') {
verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
}
$that.css(opts.property, (targetHeight - verticalPadding) + 'px');
});
});
$hiddenParents.each(function() {
var $that = $(this);
$that.attr('style', $that.data('style-cache') || null);
});
if (matchHeight._maintainScroll) {
$(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
}
return this;
};
matchHeight._applyDataApi = function() {
var groups = {};
$('[data-match-height], [data-mh]').each(function() {
var $this = $(this),
groupId = $this.attr('data-mh') || $this.attr('data-match-height');
if (groupId in groups) {
groups[groupId] = groups[groupId].add($this);
} else {
groups[groupId] = $this;
}
});
$.each(groups, function() {
this.matchHeight(true);
});
};
var _update = function(event) {
if (matchHeight._beforeUpdate) {
matchHeight._beforeUpdate(event, matchHeight._groups);
}
$.each(matchHeight._groups, function() {
matchHeight._apply(this.elements, this.options);
});
if (matchHeight._afterUpdate) {
matchHeight._afterUpdate(event, matchHeight._groups);
}
};
matchHeight._update = function(throttle, event) {
if (event && event.type === 'resize') {
var windowWidth = $(window).width();
if (windowWidth === _previousResizeWidth) {
return;
}
_previousResizeWidth = windowWidth;
}
if (!throttle) {
_update(event);
} else if (_updateTimeout === -1) {
_updateTimeout = setTimeout(function() {
_update(event);
_updateTimeout = -1;
}, matchHeight._throttle);
}
};
$(matchHeight._applyDataApi);
$(window).bind('load', function(event) {
matchHeight._update(false, event);
});
$(window).bind('resize orientationchange', function(event) {
matchHeight._update(true, event);
});
});