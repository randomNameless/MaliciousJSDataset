  
$(document).ready(function(){

  $(".ga_itunes").click(function(){
  	ga('send', 'event', 'iTunes', 'click');
  });
  
  $(".bolcom").click(function(){
  	ga('send', 'event', 'Bol.com', 'click');
  });
  
  $(".banner_standaard").click(function(){
  	ga('send', 'event', 'sidebar', 'click', 'banner');
  });
  
  $(".banner_standaard").click(function(){
  	ga('send', 'event', 'sidebar', 'click', 'banner');
  });
  
  $(".stream_youtube").click(function(){
  	ga('send', 'event', 'Streaming', 'click', 'youtube');
  });
  
  $(".stream_deezer").click(function(){
  	ga('send', 'event', 'Streaming', 'click', 'deezer');
  });


  $(".stream_spotify").click(function(){
  	ga('send', 'event', 'Streaming', 'click', 'spotify');
  });


  $("#playall").click(function(){
  	ga('send', 'event', 'Audio', 'play all');
  });
      
   




    
});