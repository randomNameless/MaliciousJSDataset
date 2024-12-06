function addbookmark(pageurl,pagetitle)
{
	if (window.sidebar) 
	{ 	// Mozilla Firefox Bookmark		
		window.sidebar.addPanel(pagetitle,pageurl,'');	
	}
	if (document.all)
		window.external.AddFavorite(pageurl,pagetitle);
}

function show()
{
	var e = document.getElementById("videoObject");
	e.style.display= "block";
	var e = document.getElementById("videoImage");
	e.style.display= "none";
}