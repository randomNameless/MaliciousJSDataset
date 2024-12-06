function get_cities(country, state){
        	$('#city_subd option').remove();
	q = "?c=" + country;
	if (state!='')
		q = q + "&s="+state;
	q = q +	"&callback=?";
	  	$.getJSON("//www.allaboutjazz.com/includes/ajax_functions/get_subdomain_cities.php"+ q,
	function(data){
		if(data.length>0){
			$('#p_city').css('display', 'block');
			$('#city_subd').append('<option value=""></option>');				
		}
		else{
			$('#p_city').css('display', 'none');
		}
    	$.each(data, function(i, val) {  
   	       var city = val.city;	
		  $('#city_subd').append('<option value="'+val.name+'">'+city.charAt(0).toUpperCase() + city.slice(1)+'</option>');
			});
	});				
}

$(function() {
	
	$("#country_subd").change(function(){
      $('#state_subd option:first').attr('selected', 'yes');
      if ($("#country_subd option:selected").val()=="us"){
	        $('#state_subd').removeAttr("disabled");
	        get_cities($('#country_subd option:selected').val(), $('#state_subd option:selected').val());
	    }   
	  else {
	        $('#state_subd').attr('disabled', 'disabled');
	        get_cities($('#country_subd option:selected').val(), '');
	    } 
			    
	})
    

	$("#state_subd").change(function(){
	  	get_cities($('#country_subd option:selected').val(), $('#state_subd option:selected').val());
	})	
  	
	
});