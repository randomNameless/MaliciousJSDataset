var div;
var fileurl;
var filename;

var handleSuccess = function(o){
	if(o.responseText !== undefined){
		div.innerHTML = o.responseText;
//		alert(o.responseText);
	}
};

var handleFailure = function(o){
//	alert('failed...' + o.responseText);
	if(o.responseText !== undefined){
		div.innerHTML = AJAXConnectionError;
	}
};


var callback =
{
  success:handleSuccess,
  failure:handleFailure,
  timeout: 5000
};


function makeRequest(formname,divname){
    div = document.getElementById(divname);
    var formObject = document.getElementById(formname);
    YAHOO.util.Connect.setForm(formObject);
    var cObj = YAHOO.util.Connect.asyncRequest('POST', thisfile, callback)
}


function makeGetRequest(geturl,divname){
    div = document.getElementById(divname);
    YAHOO.util.Connect.resetFormState();
    var request = YAHOO.util.Connect.asyncRequest('GET', geturl, callback);
}

function makeGetRequest2(geturl,divname){
    div = document.getElementById(divname);
    YAHOO.util.Connect.resetFormState();
    var request = YAHOO.util.Connect.asyncRequest('GET', geturl, callback);
}

$(document).ready(function(){
				$(".fraud").click(function(){
					$("#report").val("fraud");
				});
				
				$(".wrong_cat_loc").click(function(){
					$("#report").val("wrong_cat_loc");
				});

				$(".spam").click(function(){
					$("#report").val("spam");
				});

});


		$(document).ready(function() {
			<!-- Real-time Validation -->

				//$("#b1").click(function(){
				//	$("#result").text($("#hidden1").val());
				//});
				$(".fraud").click(function(){
					var rep = $("#contact_report").val("fraud");
					getreport = rep.attr('value');
				});
				
				$(".wrong").click(function(){
					var rep =  $("#contact_report").val("wrong_cat_loc");
					getreport = rep.attr('value');
				});

				$(".spam").click(function(){
					var rep =  $("#contact_report").val("spam");
					getreport = rep.attr('value');
				}); 

				var email = "";
				var message = "";
				var geturl = "";
				var divname = "";
				//var getreport = "";

				geturl = $('input#contact_url').val();
				//getreport = $('input#contact_report').val();
				divname = $('input#contact_div').val();

				<!--Email must be an email -->
				$('#contact_email').on('input', function() {
					var input=$(this);
					email = $(this).val();
					var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					var is_email=re.test(input.val());
					if(is_email){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
				
				<!--Message can't be blank -->
				$('#contact_message').keyup(function(event) {
					var input=$(this);
					message=$(this).val();
					console.log(message);
					if(message){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}	
				});
		
			<!-- After Form Submitted Validation-->
			$("#contact_submit button").click(function(event){
				var form_data=$("#contact").serializeArray();
				var error_free=true;
				for (var input in form_data){
					
					var element=$("#contact_"+form_data[input]['name']);
					//alert(element.attr('value'));
					if(element.attr('name') != 'url' && element.attr('name') != 'div' && element.attr('name') != 'report'){
						var valid=element.hasClass("valid");
						var error_element=$("span", element.parent());
						if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
						else{error_element.removeClass("error_show").addClass("error");}
					}
				}

				 //alert('error_free=' + error_free);

				if (!error_free){
					event.preventDefault(); 

				}
				else{
					  var dataString = '&email=' + email + '&message=' + message;
					  div = document.getElementById(divname);
					  geturl = geturl + '&report=' + getreport + dataString;
					  //alert('geturl=' + geturl);
					  YAHOO.util.Connect.resetFormState();
					  var request = YAHOO.util.Connect.asyncRequest('GET', geturl, callback);
				}
			});
			
		});

//}

//$('.someLink').click(function(){
//    $('.someHiddenInput').val('new value');
//});

function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#popup').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#popup'));
    return false;
  });

   $('#popup2').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#popup2'));
    return false;
  });

  $('#popup3').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#popup3'));
    return false;
  });
/*
  $('#reportedpopup').on('click',{adid: 'shot'}, function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('##reportedpopup'));
    return false;
  });
*/
});
/*
$(function() {
  $('#popup2').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#popup2'));
    return false;
  });
});
*/
$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};


function showFraud(adid) {
	var popupbox=jQuery("#fraudpopup-"+adid);
	console.log(popupbox);
	if (popupbox.hasClass('selected')) {
		hideFraud(adid);
	} else {
		popupbox.addClass('selected');
		popupbox.slideFadeToggle();
	}

}

function hideFraud(adid) {
	var popupbox=jQuery("#fraudpopup-"+adid);

	if (popupbox.hasClass('selected'))
	{
		popupbox.slideFadeToggle(function() {
			popupbox.removeClass('selected');
		});  
	}
	
}