window.onload = function() {
    var vid = document.getElementById("bgvid");
    var pauseButton = document.getElementById("vidpause");
    var descButton = document.getElementById("viddesc");
    var descText = document.getElementById("vid-text");
                        
    if ( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	// if one of these user agents, don't link to video
    
    } else {
        // Change video data-src to src for video links
        var sources = document.querySelectorAll('video#bgvid source');

        if(sources.length!=0) {
            for(var i = 0; i<sources.length;i++) {
                sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
            }
            vid.classList.add('bgvid--show');
            vid.load(); 
        
            // Buttons
            document.getElementById('vid-buttons').classList.add('vid-buttons--show');
            pauseButton.addEventListener('click', function(evt) {
            
            if (vid.paused) {
                vid.play();
                pauseButton.childNodes[0].innerHTML = "Pause video";
                pauseButton.classList.remove('play-icon');
                pauseButton.classList.add('pause-icon');
            } else {
            vid.pause();
            pauseButton.childNodes[0].innerHTML = "Play, no audio";
            pauseButton.classList.remove('pause-icon');
            pauseButton.classList.add('play-icon');
            }
            evt.preventDefault();
            });
            descButton.addEventListener('click', function(evt) {
            descText.classList.toggle('descfade');
            
            if (descText.classList.contains('descfade')) {
                descButton.childNodes[0].innerHTML = "Close description";
                descButton.classList.remove('desc-icon');
                descButton.classList.add('close-icon');
                } else {
                descButton.childNodes[0].innerHTML = "Video description";
                descButton.classList.remove('close-icon');
                descButton.classList.add('desc-icon');
            }
            evt.preventDefault();
            });
        }
    }
};

$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});