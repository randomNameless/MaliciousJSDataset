
var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;


var mt = new TimelineMax({paused:true, repeat:1, repeatDelay:4}),
    tl1 = new TimelineMax();

  
// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})
   .set(".hover", {autoAlpha:0}) 
	 .add(function(){ctaAnimation = false;})

	// Frame1 animation
	.addLabel("f1")      
  .from(".bg", 6.5, {scale:.9, rotation:0.6, ease: Linear.easeNone}, "f1")
	.staggerFrom(".txt1, .txt2", .5, {alpha:0, y:15, rotation:0.02, ease: Sine.easeOut}, 0.15, "f1")
	.staggerTo(".txt1", .5, {alpha:0, y:-15, rotation:0.02, ease: Sine.easeIn}, 0.15, "f1+=3")      
	.from(".txt3", .5, {alpha:0, y:40, rotation:0.02, ease: Sine.easeOut}, "f1+=3.5")
	.from(".blue_bg", .5, {width:0, rotation:0.02, ease: Expo.easeInOut}, "f1+=3.75")
	.from(".txt4", .5, {alpha:0, rotation:0.02, ease: Sine.easeOut, onComplete:hoverInOut}, "f1+=4.25")
	.from(".logo", .5, {alpha:0, rotation:0.02, ease: Sine.easeOut}, "f1+=4.75")
;


//----- Add timeline ------
mt.add([tl1]);


//----- Window Onload ------
window.onload = function() { 
  mt.play();
};


var currentDuration = mt.totalDuration();
// console.log(currentDuration);




/*-------------------------------------
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

clicktag.addEventListener("mouseover", function(){
  if(ctaAnimation){
   TweenMax.to(".hover", .4, {autoAlpha:1, rotation:0.02, ease: Sine.easeOut});
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){
   TweenMax.to(".hover", .4, {autoAlpha:0, rotation:0.02, ease: Sine.easeOut});
  }
})