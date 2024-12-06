j$(function(){
	
	//レフトナビ検索窓
	j$("#menuSearchKeyword").addClass("focusOn");
	j$("#menuSearchKeyword").val("製品名、メーカーなど");	
	j$("#menuSearchKeyword").focus(function(){
          if(this.value == "製品名、メーカーなど"){
               j$(this).val("");
			   j$(this).removeClass("focusOn");
          }
	});
	j$("#menuSearchKeyword").blur(function(){
          if(this.value == ""){
			  j$(this).addClass("focusOn");
              j$(this).val("製品名、メーカーなど");
          }
	});

	// 一括追加
	j$("#searchAll").click(function(){
		j$("#facetModal").submit();
	});

});

function leftMenu_FacetKeyword(){
	if (document.getElementById('menuSearchKeyword').value == "製品名、メーカーなど") {
		document.getElementById('menuSearchKeyword').value = "";
	}
}

function leftMenu_FacetLocation(){
	var url = document.getElementById('leftMenu_facetUrl').value;
	var lid = document.getElementById('leftMenu_facetLid').value;
	lid = EscapeSJIS(lid);
	url += '?lid=';
	url += lid;
	location.href = url;
	return false;
}
