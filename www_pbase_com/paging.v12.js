var $G = {};

$(function() {
  $(document).focus();

  /* Arrow key begin */
  $(document).keydown(function(e) {
    if( $G.loading || $G.editing ) {
      return;
    }
    if( e.shiftKey || e.ctrlKey || e.altKey || e.metaKey ) {
      return;
    }
    if( $(document).width() > $(window).width() + 22 ) {
      return;
    }
    if( e.keyCode == 37 ) {
      e.preventDefault();
      return clickPrev();
    } else if( e.keyCode == 39 ) {
      e.preventDefault();
      return clickNext();
    }
  });
  /* Arrow key end */

  /* Swipe handling begin */
  $.event.special.swipe.horizontalDistanceThreshold = 90;
  $( document ).on( "mousedown", function(e) {
    $G.mousedown = true;
  }).on( "mouseup", function(e) {
    if( !$G.swipe_event ) {
      return true;
    }
    $G.mousedown = false;
    var selection = window.getSelection().toString();
    if( selection && /\S/.test(selection) ) {
      return true;
    } else {
      swipeHandler( $G.swipe_event );
      $G.swipe_event = null;
    }
    return true;
  })
  $( document ).on( "swipeleft", swipeHandler ).on( "swiperight", swipeHandler );
  /* Swipe handling end */

  $("textarea[name=message]").focus(function() {
    $G.editing = true;
  }).blur(function() {
    $G.editing = false;
  });

  if( $("img.display") ) {
    $G.imgsize = $("img.display").attr('imgsize');
    $G.auto_size = $("a#auto_size").attr('auto_size');
    $G.image_ratio = $("img.display").first().attr('imgx') / $("img.display").first().attr('imgy');
    $("img.display").one("load", function() {
      if( $G.auto_size > 0 ) {
        $("img.display").addClass('auto-size');
      }
      $("div#imgdiv").replaceWith( $("div#imgdiv").html() );
    }).each(function() {
      if(this.complete) {
        $(this).load();
      }
    });

    $(window).resize(handleWindowResize);

    $("div#othersizes a").click( function(e) {
      e.preventDefault();
      clickSize( this );
    });

    handleWindowResize();
  }

});


function lastImage( distance ) {
  $("img.display").css({ "position": "relative"});
  $("img.display").animate({
    left: distance+"px"
  }, 100, function() {
    $("img.display").animate({
      left: "0px"
    }, 400);
  } );
}


function clickNext() {
  if( $(".next_link:first").length == 0 ) {
    lastImage( $(window).width()*-0.1 );
    return;
  }
  $G.loading = true;
  window.location.href = $(".next_link:first").attr("href");
  return true;
}
function clickPrev() {
  if( $(".prev_link:first").length == 0 ) {
    lastImage( $(window).width()*0.1 );
    return;
  }
  $G.loading = true;
  window.location.href = $(".prev_link:first").attr("href");
  return true;
}


function swipeHandler( e ) {
  if( $(document).width() > $(window).width() + 22 ) {
    return true;
  }
  if( $G.mousedown && e.target != $(document) && e.target != $("div#image")[0] && e.target != $("img.display")[0] ) {
    $G.swipe_event = e;
    $G.swipe_timer = setTimeout( function() {
      $G.swipe_event = null;
    }, $.event.special.swipe.durationThreshold );
    return true;
  }
  e.preventDefault();

  if( e.type == "swipeleft" ) {
    clickNext();
  } else if( e.type == "swiperight" ) {
    clickPrev();
  }
  $G.swipe_event = null;
  return true;
}


function handleWindowResize() {
  $G.vp_width = $(window).width();
  $G.vp_height = window.innerHeight 
	- 28 // menu height
	- $("div#localmenu").first().outerHeight() // local nav height
	- $("div#slideshow").first().outerHeight() // prev / next height
	- ( ($("table.imagetable").first().outerHeight() - $("table.imagetable").first().innerHeight()) ) // outer border height
	- ( ($("img.display").first().outerHeight() - $("img.display").first().innerHeight()) ) // inner border height
  ;
  $G.vp_ratio = $G.vp_width / $G.vp_height;
  pickImageSize();
  $G.storeViewportTimer = setTimeout( storeViewport, 1000 );
}


function clickSize( targetImage ) {
  if( $(targetImage).attr('imgsize') == 'auto' ) {
    $("a#auto_size").attr('auto_size', 'Y');
    $("img.display").addClass('auto-size');
    pickImageSize();
  } else {
    $("a#auto_size").attr('auto_size', 'N');
    $("img.display").removeClass('auto-size');
    changeImageSize( targetImage );
    $G.storeViewTimer = setTimeout( storeView, 300 );
  }
}


function pickImageSize() {
  if( $("a#auto_size").attr('auto_size') == 'N' ) {
    return;
  }
  if( ! $("img.display") ) {
    return;
  }

  if ( $G.image_ratio > $G.vp_ratio ) {
    $("img.display").addClass('width').removeClass('height');
  } else {
    $("img.display").addClass('height').removeClass('width');
  }

  $("a#auto_size").attr('auto_size', 'Y');
  var targetImage;
  $("div#othersizes a").each(function() {
    if( ! $(this).attr('imgx') ) {
      return false;
    }
    targetImage = this;
    if ( 
        ( $G.image_ratio > $G.vp_ratio && $(this).attr('imgx') >= $G.vp_width*2 )
        || ( $G.image_ratio <= $G.vp_ratio && $(this).attr('imgy') >= $G.vp_height*2 )
    ) {
      return false;
    }
  });

  if ( 
      ( $G.image_ratio > $G.vp_ratio && $("img.display").attr('imgx') < $G.vp_width*2 )
      || ( $G.image_ratio <= $G.vp_ratio && $("img.display").attr('imgy') < $G.vp_height*2 )
  ) {
    changeImageSize( targetImage );
  }

  $G.storeViewTimer = setTimeout( storeView, 300 );
}


function changeImageSize( targetImage ) {
  $G.currentImage = targetImage;
  $("img.display").attr({
    'src': $(targetImage).attr('imgurl'),
    'imgx': $(targetImage).attr('imgx'),
    'imgy': $(targetImage).attr('imgy'),
    'width': $(targetImage).attr('imgx') + 'px',
    'height': $(targetImage).attr('imgy') + 'px',
    'imgsize': $(targetImage).attr('imgsize')
  });
}


function storeView() {
  if( $G.storeViewTimer ) {
    clearTimeout( $G.storeViewTimer );
    $G.storeViewTimer = false;
  } else {
    return;
  }
  var imgsize = $("img.display").attr('imgsize');
  var auto_size = $("a#auto_size").attr('auto_size');
  if( $G.imgsize == imgsize && ($G.auto_size == auto_size) ) {
    return;
  }

  $G.imgsize = imgsize;
  $G.auto_size = auto_size;
  $.ajax({
    type: "POST",
    url: $("base").attr("href"),
    cache: false,
    data: {
      src: "ajax",
      size: $G.imgsize,
      auto_size: $G.auto_size,
      vp_width: $G.vp_width,
      vp_height: $G.vp_height,
      vp_ratio: $G.vp_ratio,
    },
    dataType: "html"
  });
}


function storeViewport() {
  if( $G.storeViewportTimer ) {
    clearTimeout( $G.storeViewportTimer );
    $G.storeViewportTimer = false;
  } else {
    return;
  }

  $.ajax({
    type: "POST",
    url: $("base").attr("href"),
    cache: false,
    data: {
      src: "ajax",
      vp_width: $G.vp_width,
      vp_height: $G.vp_height,
      vp_ratio: $G.vp_ratio,
    },
    dataType: "html"
  });
}


