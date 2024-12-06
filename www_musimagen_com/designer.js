var defaultPage = 'video';
var dates = [
    '01 Jan 2024', // In Theaters December 6 / Watch Trailer
    '22 Nov 2024', // In Theaters December 6 / Get Tickets
    '01 Dec 2024', // In Theaters Friday / Get Tickets
    '05 Dec 2024', // Now in Theaters / Get Tickets
];
var preloaders = '#c9bcaf';
var borders = '#000';
var controls = { off: '#c9bcaf ', on: '#755e43', audio: true, media: false };
var replays = { off: '#c9bcaf', on: '#755e43', hideOnRollover: false, position: {bottom:12, right:0}, padding: 4, size: 10, shownAtResolveEnd: false };
var progressiveWithResolveCombined = true;

var cueUseRAF = true;
var cueWithFrames = true;
var videoFrameRate = 24;
var previewCue = [
    // { time: 0, handler:persistentoff},
    // { time: 15, handler:persistenton},

    // { time: 101, handler:persistentoff},
    // { time: 131, handler:persistenton},

    // { time: 211, handler:persistentoff},
    // { time: 244, handler:persistenton},

    { time: 317, handler: persistentandcontroloff },
    { time: 331, handler: gotoResolve },
];
//var mainCue = [];
var mainCue = previewCue;
var rollCue = [];

var rolloverVideo = true;

var route = '';
var preview_url = 'video_intro.mp4';
var main_url = 'video_intro.mp4';
var resolve_bg_url = 'resolve.mp4';
var resolve_rollover_url = 'rollover.mp4';

Unfold.designer.setDates(dates);

Unfold.designer.setDatedElement('video', dates[0], 'video_date', 'video_date_1.png');
Unfold.designer.setDatedElement('video', dates[1], 'video_date', 'video_date_1.png');
Unfold.designer.setDatedElement('video', dates[2], 'video_date', 'video_date_2.png');
Unfold.designer.setDatedElement('video', dates[3], 'video_date', 'video_date_3.png');

Unfold.designer.setDatedElement('resolve', dates[0], 'resolve_date', 'resolve_date_1.png');
Unfold.designer.setDatedElement('resolve', dates[1], 'resolve_date', 'resolve_date_1.png');
Unfold.designer.setDatedElement('resolve', dates[2], 'resolve_date', 'resolve_date_2.png');
Unfold.designer.setDatedElement('resolve', dates[3], 'resolve_date', 'resolve_date_3.png');

Unfold.designer.setDatedCTA('resolve', dates[0], 'resolve_cta_1', 'resolve_cta_1.png', { width: 215, height: 49, left: 680, top: 174 });
Unfold.designer.setDatedCTA('resolve', dates[1], 'resolve_cta_2', 'resolve_cta_2.png', { width: 215, height: 49, left: 680, top: 174 });
Unfold.designer.setDatedCTA('resolve', dates[2], 'resolve_cta_2', 'resolve_cta_2.png', { width: 215, height: 49, left: 680, top: 174 });
Unfold.designer.setDatedCTA('resolve', dates[3], 'resolve_cta_2', 'resolve_cta_2.png', { width: 215, height: 49, left: 680, top: 174 });

Unfold.designer.setCTA('resolve_cta_1');
Unfold.designer.setCTA('resolve_cta_2');

if (borders == '') Unfold.designer.setExtAssets(defaultPage == 'resolve' ? 'resolve' : 'video', 'border_1px', 'border.png');

//Unfold.designer.setExtAssets('video', 'video_persistent_bg', 'video_persistent.png');

// Unfold.designer.setExtAssets('resolve', 'resolve_tagline', 'resolve_tagline.png');
// Unfold.designer.setExtAssets('resolve', 'resolve_pedigree', 'resolve_pedigree.png');
// Unfold.designer.setExtAssets('resolve', 'resolve_legal', 'resolve_legal.png');
Unfold.designer.setExtAssets('resolve', 'resolve_quote_1', 'resolve_quote_1.png');
Unfold.designer.setExtAssets('resolve', 'resolve_quote_2', 'resolve_quote_2.png');
Unfold.designer.setExtAssets('resolve', 'resolve_rating', 'resolve_rating.png');
Unfold.designer.setExtAssets('resolve', 'resolve_bg_static', 'resolve_bg.jpg');

function customAnimation(_tl, _index) {
    gsap.set('#resolve_cta', { overflow: 'hidden' })
    _tl.from([['#resolve_date','#resolve_cta'], ['#resolve_quote_1','#resolve_quote_2']], { duration: 1.2, stagger:0.1, filter:'blur(3px)', ease: 'power2.inOut' },  'start');
    _tl.from([['#resolve_date'], ['#resolve_quote_1','#resolve_quote_2']], { duration: 1, stagger:0.1, opacity:0, ease: 'none' }, '<');
    _tl.from(['#resolve_cta'], { duration: 1, autoAlpha:0, ease: 'none' },  '<');
    _tl.from('#resolve_rating', { duration: 0.5, opacity: 0, ease: 'sine.out' }, '<');
    if (!replays.shownAtResolveEnd) _tl.from('#resolve_replay', { autoAlpha: 0, duration: 0.3 }, '>')
}

function customRolloverAnimation(_tl, _index) { }

function datedButton(_id, _file, _size) {
    // .replace(/_[0-9]/g, '')
    util.addImage(_id + '_off', String(_file).replace(/_[0-9]/g, '').replace('.', '_bg_off.'));
    util.addImage(_id + '_on', String(_file).replace(/_[0-9]/g, '').replace('.', '_bg_on.'));
    util.addImage(_id + '_txt_off', String(_file).replace('.', '_txt_off.'));
    util.addImage(_id + '_txt_on', String(_file).replace('.', '_txt_on.'));
}

function animatedCTA(_tl, target) {
    gsap.set([target+'_txt_off',target+'_txt_on'], {transformOrigin:'8px 19px'});
    _tl.to(target+'_on', {opacity:1, duration:0.5},'start');
    _tl.fromTo(target+'_txt_on', {opacity:0, y:'-100%'},{opacity:1, y:'0%', duration:0.5},'<');
    
    _tl.to(target+'_txt_off', {opacity:0, y:'100%', duration:0.5},'<');
    _tl.to(target+'_off', {opacity:0, duration:0.1},'>');

    _tl.addLabel('end');
}

function customRollOver(_tl) {
    _tl.play();
}

function customRollOut(_tl) {
    // _tl.reverse();
    _tl.pause(0);
}