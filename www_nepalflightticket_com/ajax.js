// JavaScript Document
	$(document).ready(function(){
			  $("#room").change(function() {
						$.post("loadtrips.php", $("#roomsearch").serialize(),function(data){
								$("#roomtype").empty().append(data);
							});	
			  });
		});