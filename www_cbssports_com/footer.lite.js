require(["managers/images"],function(r){r.swapLazyImages(100);$(window).scroll(function(){var a=false;var e=100;var n=400;return function(){if(!a){r.swapLazyImages(n);a=true;setTimeout(function(){a=false},e)}}}())});