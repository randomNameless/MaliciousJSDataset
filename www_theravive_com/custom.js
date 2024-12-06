// Scroll To Top
$(document).ready(function() {
	$( ".sidebar .linkbox").each(function() {	
	   var h = 0;
	   var $box = $(this);
	   var 	minimumHeight = 0; 
	   for (i = 0; i < 6; i++) { 
	   		 h  += $(this).find('li').eq(i).height();
	   }
	   $(this).height(h);
	   minimumHeight = h;

	  $(this).next().click(function(){
	  	

			$(this).parent();
			  
			 currentHeight = $box.height(); 	
			 autoHeight = $box.css('height', 'auto').height();
			 $box.css('height', currentHeight).animate({
		        height: (currentHeight == autoHeight ? minimumHeight : autoHeight)
		    });
			 var name =  $(this).find('span').text();
			 var hasName = (name === 'More') ? 'Less' :'More';
			  $(this).find('span').text(hasName);
			 return false;
		});
	  	var m = 0;
		$(window).resize(function() {
			m = 0;
		  for (i = 0; i < 6; i++) { 
	   		 m  += $box.find('li').eq(i).height();
	   		}
	   		var name =  $box.next().find('span').text();
			if(name == "More") $box.height(m);	   		
	   		minimumHeight = m;
		});

	});

$('.state-search a.more').click(function()
{
   $('.state-search').toggleClass('selecionado').delay(5000)
});


$( ".accordion_in .acc_head" ).click(function() {
  $(this).next( ".acc_content" ).slideToggle( "slow", function() {
  });
});


});
//==========================================

