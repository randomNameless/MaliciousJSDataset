(function(a){function b(c,d){if(!c){return
}if(d==="_blank"){window.open(c,d)
}else{window.location=c
}}a(document).ready(function(){var c=a(".prodList");
c.on("click",".rd2",function(h){var g=a(h.target),d=g.closest("a"),f=g.closest(".prod"),j=f.data("rd"),i=d.attr("target");
if(d.hasClass("modalPopup")){return
}h.preventDefault();
b(j,i)
})
})
})(jQuery);