function show_ajax_page(url,div,pars)
{
	if(pars)
	{
		pars=pars+'&t='+Math.random();
	}else
	{
		pars='t='+Math.random();
	}
	resetSize("#"+div);

	$("#"+div).load(url,pars,function(){
		$("#"+div).addClass('design-preview-content');
		resetSize("#"+div);
	});
	
	
	
	isWorking=false;
}
function showresume(id,styleid,url)
{
	if(!id) return false;
	
	show_ajax_page(url,'showresume');
	
	$('.swiper-slide').removeClass('active');
	$('.style'+id).addClass('active');

	$('#styleid').html(styleid);
	
}