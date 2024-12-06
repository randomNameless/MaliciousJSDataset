document.addEventListener("DOMContentLoaded", function() {
  function extend(a, b){
      for(var key in b)
          if(b.hasOwnProperty(key))
              a[key] = b[key];
      return a;
  }

  var pvData = extend({}, ST.clariceBaseEventParams());

  pvData.path = document.location.pathname;
  pvData.page_type = 'radio-player';

  ST.ClariceHelper.createAndSendEvent('POST', 'pageview', pvData);  // Track pageview event on clarice
});


function tuneinData() {
  var tuneinSnapshot = {
    radio: ST.radio.id,
    stream: ST.radio.stream.id,
    state: playerState,
    plugin: player.techName_,
    stream_format: ST.radio.stream,
    ua: navigator.userAgent,
    language: navigator.language
  };

  if (ST.user.email) {
    tuneinSnapshot.email = ST.user.email;
  }

  if (ST.user.cohort){
    tuneinSnapshot.cohort = ST.user.cohort;
  }

  return tuneinSnapshot;
};