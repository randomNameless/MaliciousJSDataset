
function addSubmitAttribToAnchor(atag_element, ref_url) {
  $(atag_element).click(function(){
    var clubAlso = false;
    if($("#AddPossibleClub_"+$(this).attr('alt')).attr('checked') || $("#AddClub_"+$(this).attr('alt')).attr('checked') ){
      if(sessmemid){
        clubAlso = true;
        $("#book-actions-"+$(this).attr('alt')).submit();
      }
    }

    if( $("#AddPersonal_"+$(this).attr('alt')).attr('checked') && clubAlso !== true ) {
      rgid = $(this).attr('alt');
      if(rgid != "" || rgid != 0) {
        if(sessmemid){
          // urll = site_url + "index.php?file=c-clubbooklist_q&readingGuideID=" + rgid;
          var urll = site_url + "clubBookListQ/" + rgid + "/" + ref_url;
          $(".AddBook").attr("href", urll);
        }
      }
    }
  });
}
