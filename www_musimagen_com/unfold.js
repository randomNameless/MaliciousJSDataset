function setDate(_page) {
    let index = util.getIndexDate(Unfold.designer.getDates());
    let date = Unfold.designer.getElements().filter(x => x.page == _page && x.type == 'element' && x.date == index)
    let CTA = Unfold.designer.getElements().filter(x => x.page == _page && x.type == 'cta' && x.date == index)
    
    date.forEach(i => util.addImage(i.div, i.file))
    Unfold.designer.getCTA().forEach(i => util.none(i.div))
    CTA.forEach(i => {
        if(i?.div){
            if(document.getElementById(i.div)){
                if(document.getElementById(i.div).buttonIsToggle){
                    gsap.set((document.getElementById(i.div).parentNode.id != 'video' && document.getElementById(i.div).parentNode.id != 'resolve' && document.getElementById(i.div).parentNode.id != 'col_video' && document.getElementById(i.div).parentNode.id != 'col_resolve' && document.getElementById(i.div).parentNode.id != 'exp_video' && document.getElementById(i.div).parentNode.id != 'exp_resolve') ? "#"+document.getElementById(i.div).parentNode.id : "#"+i.div, {width: i?.size?.width, height: i?.size?.height, top: i?.size?.top, bottom: i?.size?.bottom, right: i?.size?.right, left: i?.size?.left})
                    datedButton(i.div, i.file, i.size)
                }else{
                    util.addImage(i.div, i.file, i.size)
                }
                util.block(i.div)
            }
            
        }
    })
}

function settingCTA() {
    Unfold.designer.getCTA().forEach(i => util.button(i.div, i.size, onExit, onRoll, onOut))
    util.tapcomponent('video_exit', onExit);
    util.tapcomponent('resolve_exit', onExit);
    util.replaybutton('resolve_replay',{id:'replay_icon', on:replays.on, off:replays.off, position: replays.position, padding: replays.padding || 4, size: replays.size || 10}, onReplay);
}

function onReplay(e) {
    if(defaultPage == 'video'){
        if(main_player.paused){
            firstTime = false;
            track.counter('replay');
            togglePage(defaultPage, false)
        }else{
            stopMainVideo();
            onReplay()
        }
    }else{
        track.counter('replay')
        togglePage(defaultPage, false)
    }
}

function onExit(e) {
    if (ctaRoll) ctaRoll.pause(0);
    track.exit(e.currentTarget.id, util.getIndexDate(Unfold.designer.getDates(), false));
    //exitHandler(e);
    firstTime = false;
}
var ctaRoll;
function customCTAAnimation(timeline, cta){
    if (!timeline || timeline.target != cta){
        timeline = gsap.timeline();
        timeline.target = cta;
        gsap.set("#"+timeline.target.id, {overflow: "hidden"});
        animatedCTA(timeline, '#'+timeline.target.id)
        customRollOver(timeline);
    }else{
        customRollOver(timeline);
    }
    return timeline;
}

function onRoll(e) {
    if (currentPage == 'resolve')playRollover();
    if (e.currentTarget.buttonIsToggle) ctaRoll = customCTAAnimation(ctaRoll, e.currentTarget);
}

function onOut(e) {
    if (e.currentTarget.buttonIsToggle && ctaRoll) customRollOut(ctaRoll)
}

function loadExtAssets(_page) {
    Unfold.designer.getElements().filter(i => i.type == 'other' && i.page == _page).forEach(i => util.addImage(i.div, i.file))
}