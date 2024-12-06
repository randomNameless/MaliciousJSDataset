"use strict";YP.BusinessCard=(function($YPCA){$YPCA(function(){$YPCA('.jsTeaser').click(function(){var ypg_display=$YPCA(this).prev();ypg_display.toggle();if(ypg_display.is(':visible')){$YPCA(this).html($YPCA(this).attr('data-less'));}else{$YPCA(this).html($YPCA(this).attr('data-more'));}
return false;});});})($YPCA);
