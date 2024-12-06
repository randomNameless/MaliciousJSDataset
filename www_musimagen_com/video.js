var resolve_bg, resolve_rollover, main_player;
var fallbackTimer;
var is0 = false, is25 = false, is50 = false, is75 = false;

var videoCueRAFID = 0;
var cue = [];
var canRoll = false;
var indexDate = 0;

function persistentoff(){ util.opacityOff('video_date') }
function persistenton(){ util.opacityOn('video_date') }
function persistentandcontrolon(){ 
    util.opacityOn('video_date')
    util.show('video_control', 'video_cta')
}
function persistentandcontroloff(){ 
    util.opacityOff('video_date')
    util.hide('video_control', 'video_cta')
}
function gotoResolve(){
    //stopCue(videoCueRAFID)
    //util.opacityOff('video_date', 'video_persistent_bg')
    //util.hide('video_control', 'video_cta')
    togglePage('resolve')
    if(mainTL) mainTL.play('start')
}

function setupMainVideo() {
    indexDate =  util.getIndexDate(Unfold.designer.getDates(), false)
    preview_url = Array.isArray(preview_url) ? route + preview_url[indexDate] : route + preview_url;
    main_url = Array.isArray(main_url) ? route + main_url[indexDate] : route + main_url;
    //preview_url = dynamicContent.PAR_IF_Kids_300x250_R1_V1_DynContent_Sheet1[0].video_intro.Progressive_Url;
    //main_url = dynamicContent.PAR_IF_Kids_300x250_R1_V1_DynContent_Sheet1[0].video_main.Progressive_Url
    if (!main_player) {
        main_player = util.createVideo('video_player', Enabler.getUrl(preview_url), false, true, false, true);
        main_player.muted = true;

        if (controls.audio) {
            var parameters = {
                wrapper: 'toggleAudio',
                type: 'equalizer',
                mute: 'sound_bar',
                unmute: 'sound_unmute',
                colorOff: controls.off,
                colorOn: controls.on,
                handler: {
                    onclick: function () {
                        if (firstTime) {
                            firstTime = false;
                            // persistentoff();
                            playMain();
                            track.counter('cfa');
                        }
                    }
                }
            }
            var toggleAudio = new ToggleAudio(main_player,parameters);
        }else{
          controls.audio = false;
          util.none('toggleAudio');
        }

        if (controls.media) {
            util.tapcomponent('toggleVideo',
                function(e){
                  if (firstTime) {
                      firstTime = false;
                      playMain();
                  } else {
                      if (main_player.paused){
                          main_player.play();
                      }else{
                          main_player.pause();
                      }
                  }
                },function(e){
                    changeControlColor(controls.colorOn);
                },function(e){
                    changeControlColor(controls.colorOff)
                }                
            )
            function changeControlColor(_color){
                var elements = document.querySelectorAll('.video_control_color');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].setAttribute("fill", _color);
                }      
            }
            changeControlColor(controls.colorOff);
        } else {
            controls.media = false;
            util.none('toggleVideo');
        }

        util.addEvent(main_player, 'playing', onVideoPlaying);
        util.addEvent(main_player, 'pause', onVideoPaused);
        util.addEvent(main_player, 'ended', onVideoEnded);
        util.addEvent(main_player, 'timeupdate', onVideoProgress);
        util.addEvent(main_player, 'volumechange', onVideoVolumeChange);
        if (util.isMobile) {
            fallbackTimer = setTimeout(togglePage, 15000, 'resolve'); // fallback to resolve if cannot play on mobile;
        }
    }
}

function setupMiscVideos() {
    if (!resolve_bg && !progressiveWithResolveCombined) {
        resolve_bg = util.createVideo('resolve_bg', Enabler.getUrl(Array.isArray(resolve_bg_url) ? route + resolve_bg_url[indexDate] : route + resolve_bg_url ), false, true, false, false);
        if (resolve_bg){
            util.addEvent(resolve_bg, 'canplay', onResolveBGCanPlay);
            util.addEvent(resolve_bg, 'playing', onResolveBGPlaying);
            util.addEvent(resolve_bg, 'ended', onResolveBGEnded);
        }
    }
    if (!resolve_rollover) {
        resolve_rollover = util.createVideo('resolve_rollover', '', false, true, false);
        if(resolve_rollover){
            util.addEvent(resolve_rollover, 'playing', onResolveRolloverPlaying);
            util.addEvent(resolve_rollover, 'ended', onResolveRolloverEnded);
            util.addEvent(resolve_rollover, 'timeupdate', onResolveRolloverProgress);            
        }
    }
}

function stopMiscVideos() {
    if (resolve_bg) {
        if (resolve_bg.currentTime != 0 && resolve_bg.currentTime != resolve_bg.duration) resolve_bg.currentTime = 0;
        resolve_bg.pause();
    }
    if (resolve_rollover) {
        if (resolve_rollover.currentTime != 0 && resolve_rollover.currentTime != resolve_rollover.duration) resolve_rollover.currentTime = 0;
        resolve_rollover.pause();
    }
    util.opacityOff('resolve_bg', 'resolve_rollover');
    canRoll = true;
    // if(cueUseRAF) cancelAnimationFrame(videoCueRAFID);
}
function stopMainVideo() {
    if (main_player) {
        if (main_player.currentTime != 0 && main_player.currentTime != main_player.duration) main_player.currentTime = 0;
        if (!main_player.paused) main_player.pause();
    }
    canRoll = true;
    if(cueUseRAF) cancelAnimationFrame(videoCueRAFID);
}
function playMain(){
    cue = firstTime ? previewCue : mainCue;
    cue[0]?.time == 0 ? persistentoff() : persistenton();
    previewResetTrack();    
    if (!firstTime) {
        if (main_player.src != main_url) {
            util.block('video_preloader');
            main_player.src = Enabler.getUrl(main_url);//Enabler.getUrl(Array.isArray(main_url) ? route + main_url[indexDate] : route + main_url );
            util.opacityOn('video_player');
        }
        if(controls.audio){
            main_player.removeAttribute('muted');
            main_player.muted = false;
        }
    }
    
    if (main_player.currentTime != 0 && main_player.currentTime != main_player.duration) main_player.currentTime = 0;
    util.checkPromise(main_player.play(), function(e){
        if (e.name != 'AbortError') {
            console.log('CANT PLAY PREVIEW',e)
            setTimeout(function(){
                togglePage('resolve', true);
                stopTimeline();
            },100);
        }
    }, function(){
        cue = firstTime ? previewCue : mainCue;
        cancelCue(cue);
        if(cueUseRAF) {
            cancelAnimationFrame(videoCueRAFID)
            runVideoCues(main_player, cue)
        }
    });
}
function playRollover() {
    if(rolloverVideo){
        if (resolve_rollover) {
            cancelCue(rollCue)
            if (resolve_rollover.src == '' || resolve_rollover.src == undefined){
                
                resolve_rollover.src = Enabler.getUrl(Array.isArray(resolve_rollover_url) ? route + resolve_rollover_url[indexDate] : route + resolve_rollover_url )
            }
            if (canRoll) {
                if (resolve_rollover.paused) track.counter('rollover');
                util.checkPromise(resolve_rollover.play(), function(e){
                    if (e.name != 'AbortError') {
                        setTimeout(util.opacityOff,10,resolve_rollover.parentNode);
                    }
                });
            }
        }
    }else{
        if(!rolloverTL && !mainTL.isActive()){
            rolloverTL = gsap.timeline({paused:true, force3D:true, defaults:{immidiateRender:false, force3D:true, ease:'none'}});
            rolloverTL.addLabel('start');
            customRolloverAnimation(rolloverTL, util.getIndexDate(Unfold.designer.getDates(), false))
            rolloverTL.addLabel('end');

            rolloverTL.play('start')
        }else{
            if(!rolloverTL.isActive() && !mainTL.isActive()) rolloverTL.play('start')
        }
    }
    
}
/* preview video events */
function previewResetTrack(){
    is0 = is25 = is50 = is75 = false;
}
function onVideoPlaying(e) {
    canRoll = false;
    clearTimeout(fallbackTimer);
    // Hide audio button if this unit is progressive without audio or loaded on older version ipad
    // older version ipad cannot control audio / volume using javascript.
    if (!controls.audio || (util.isIpad && olderDevice)) util.none('toggleAudio');
    else util.block('toggleAudio');

    util.none('video_preloader','preloader');
    util.none('video_play');
    util.block('video_pause');

    track.video(firstTime ? '' : 'mainPlay');
    /*cue = firstTime ? previewCue : mainCue;
    cancelCue(cue);
    if(cueUseRAF) {
        cancelAnimationFrame(videoCueRAFID)
        runVideoCues(main_player, cue)
    }*/
    if(cueUseRAF) runVideoCues(main_player, cue);
}
function onVideoPaused(e){
  util.block('video_play');
  util.none('video_pause');

    track.video(firstTime ? '' : 'mainPause');
}
function onVideoEnded(e) {
    resolveCue(cue)
    canRoll = true;
    track.video(firstTime ? 'previewEnd' : 'mainEnd');
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                togglePage('resolve', true)
            }else{
                if(document.visibilityState == 'hidden') togglePage('resolve', true)
                observer.unobserve(main_player)
            }
        })
    });
    
    if(!progressiveWithResolveCombined){
        togglePage('resolve', olderDevice);
    }else{
        
        if(cueUseRAF || currentPage != 'resolve') {
            //stopCue(videoCueRAFID)
            observer.observe(main_player);
            util.fadeOutTrans('video_player',1.5, function(){
                if(replays.shownAtResolveEnd) gsap.to("#resolve_replay", {autoAlpha: 1, duration: 0.3})
            });
        }
    }
    
    previewResetTrack();
    if(cueUseRAF) cancelAnimationFrame(videoCueRAFID);
}

function onVideoProgress(e) {
    //console.log(e.currentTarget.currentTime);
    var perr = (e.currentTarget.currentTime / e.currentTarget.duration);
    if ( perr >= .01 && !is0) { is0 = true; track.video(firstTime ? 'previewStart' : 'mainStart'); onVideoVolumeChange(e);}
    if ( perr >= .25 && !is25) { is25 = true; track.video(firstTime ? 'preview25' : 'main25')}
    if ( perr >= .50 && !is50) { is50 = true; track.video(firstTime ? 'preview50' : 'main50');}
    if ( perr >= .75 && !is75) { is75 = true; track.video(firstTime ? 'preview75' : 'main75');}
    if(!cueUseRAF) videoCue(e.currentTarget, cue, cueWithFrames)
}
function stopCue(_cue){
    cancelAnimationFrame(_cue);
}
function runVideoCues(_player, _cue){
    videoCue(_player,  _cue, cueWithFrames);
    videoCueRAFID = requestAnimationFrame(function(){
        runVideoCues(_player, _cue);
    });
}
function videoCue(e, cuePoint, _isFrame){
    for (let i=0; i<cuePoint.length; i++){
        if (_isFrame ? util.currentTimeToFrame(e.currentTime, videoFrameRate, Math.round(e.currentTime * videoFrameRate)) > cuePoint[i].time && !cuePoint[i].resolved : e.currentTime > cuePoint[i].time && !cuePoint[i].resolved) {
            cuePoint[i].resolved = true;
            if (cuePoint[i].handler instanceof Function) {
                cuePoint[i].handler();
            }
        }
    }
}

function resolveCue(cuePoint){
    for (let i=0; i<cuePoint.length; i++){
        cuePoint[i].resolved = true;
    }
}

function cancelCue(cuePoint){
    for (let i=0; i<cuePoint.length; i++){
        cuePoint[i].resolved = false;
    }
}
function getCurrentVideoFrame(_video) {
    return Math.floor(_video.currentTime*videoFPS);
}
function onVideoVolumeChange(e) {
    if (e.target.muted) {
        track.video(firstTime ? '' : 'mainMute');
    }else{
        track.video(firstTime ? '' : 'mainUnmute');
    }
}

function onResolveBGCanPlay(e) {}
function onResolveBGPlaying(e) {
    if(replays.shownAtResolveEnd) gsap.set("#resolve_replay", {autoAlpha: 0})
    canRoll = false;
    util.none('preloader', 'video_preloader');
    util.opacityOn('resolve_bg')
    if(mainTL) mainTL.play('start')
}
function onResolveBGEnded(e) {
    canRoll = true;
    e.currentTarget.pause();
    util.fadeOutTrans('resolve_bg', 0.5);
    if(replays.shownAtResolveEnd) {
        if(!progressiveWithResolveCombined) gsap.to("#resolve_replay", {autoAlpha: 1, duration: 0.3})
    }
}
function onResolveRolloverPlaying(e) {
    if(cueUseRAF) runVideoCues(resolve_rollover, rollCue);
    if(replays.hideOnRollover) gsap.to("#resolve_replay", {autoAlpha: 0, duration: 0})
    util.fadeInTrans(resolve_rollover.parentNode.id, 0);
}
function onResolveRolloverProgress(e) {
    if(!cueUseRAF) videoCue(resolve_rollover, rollCue, cueWithFrames)
}
function onResolveRolloverEnded(e) {
    if(cueUseRAF) runVideoCues(resolve_rollover, rollCue);
    if(replays.hideOnRollover) gsap.to("#resolve_replay", {autoAlpha: 1, duration: 0.3})
    util.fadeOutTrans(resolve_rollover.parentNode.id, 0.5);
}
