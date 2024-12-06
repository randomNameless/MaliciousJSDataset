$(window).on('load', function(){
$("img").each(function(){
	var traveling = $(this).attr('data-src');
	if (traveling) $(this).attr('src', traveling) })
$("source").each(function(){
	var vasectomy = $(this).attr('data-srcset');
	if (vasectomy) $(this).attr('srcset', vasectomy) })
})
