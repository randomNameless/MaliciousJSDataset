 $(".login-force").click(function(){
       $('.jqmOverlay-1').show();
       $('.login-box').show();
       var r_id_str = $(this).attr("rel");
       var r_id_arr = r_id_str.split("-");    
        
        var file = r_id_arr[0];    
        if(file=='review'){
            $("#r_id").val(r_id);
            var r_id = r_id_arr[1];
            var redirectFile = "rateBook/"+r_id;
        }else if(file=='emailClub'){
            var redirectFile = r_id_arr[1];
        }else if(file=='addpersonal'){
            var redirectFile = "clubBookList/"+r_id_arr[1]+"/addpersonal";
        } else if(file=='add'){
              var redirectFile = "clubBookList/"+r_id_arr[1]+"/add";
        }else if(file=='addpick'){
                var redirectFile ="clubBookList/"+ r_id_arr[1]+"/addpick";
        } 
            if(!redirectFile){
                redirectFile = window.location;
            }
       $("#redirectTo").val(redirectFile);
       
    });
        
    $(".login-box-close").click(function(){
        $("#r_id").val("");
        $("redirectTo").val("");
        $('.jqmOverlay-1').hide();
        $('.login-box').hide();
    });
  
