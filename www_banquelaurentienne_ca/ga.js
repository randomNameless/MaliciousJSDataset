window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-1665881-1', 'auto');
ga('send', 'pageview');

/*GA4 TAG*/
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4FK2C9EYJM');

function initLogo(){
	var elm=document.querySelector('#logo a:first-child');
	pg=document.querySelector('html');
	lg=pg.getAttribute('lang');
	try{
		elm.href='/' + lg + '/';
	}catch(error)
	{
		return;
	}
}


window.addEventListener('load', initLogo);