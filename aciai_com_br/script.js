(function($) {
  $(document).ready(function() {
    $('.outer .close').click(function (e)
    {
      e.preventDefault();
      $('.outer').fadeOut(400);
      $('#mask').fadeOut(600);
    }); 

    /* AÇÃO AO CLICAR NA TELA ESC */
    $(document).keyup(function (e)
    {
      if (e.keyCode == 27) {
        $('.outer').fadeOut(400);
        $('#mask').fadeOut(600);
      }
    });
    /* FIM || AÇÃO AO CLICAR NA TELA ESC */
    
    /* AÇÃO AO CLICAR NO MASK - FUNDO NEGRO DA TELA */
    /*
    $('#mask').click(function (e)
    {
      e.preventDefault();
      $('.outer').fadeOut(400);
      $('#mask').fadeOut(600);
    }); 
    */
    /* FIM || AÇÃO AO CLICAR NO MASK - FUNDO NEGRO DA TELA */

    var maskHeight = $(document).height();
    var maskWidth = $(document).width();

    $('#mask').css({'width':maskWidth+"px",'height':maskHeight+"px"});
    $('#mask').fadeIn(600);
    $('#mask').css({'opacity':'0.9'});

    $.fn.center=function() {
      return this.each(function() {
        var $this=$(this),
        parent=$this.parent(),
        topMargin,
        leftMargin,
        resizeTimeout;
        if(parent.is("body:not(.root-height-set)"))
        {
          $("html,body").css("height","100%").addClass("root-height-set");
        }
        $this.css({"position":"relative","margin-left":"auto","margin-right":"auto"});
        //$this.css({"top":topPos,"margin-top":topMargin});
      });
    }

    $(".outer").delay(800).fadeIn(600).center();
  });
})(jQuery);