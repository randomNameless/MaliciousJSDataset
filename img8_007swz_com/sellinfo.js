
$(function(){
	var browser = navigator.userAgent.toLowerCase(); 
	var hostname = window.location.host;
	var path = window.location.pathname;
	var ifmobile;
	var ifwindows;
	if (((browser.indexOf("iphone")!=-1)||(browser.indexOf("android")!=-1)) && (browser.indexOf("ipad")==-1)){ifmobile=true;}
	if ((browser.indexOf("windows")!=-1)){ifwindows=true;}
	addr=hostname+'/'+path;
	console.log(path);
	if(path!='/'){
		return false;
	}
	// 创建<script>元素
	var script = document.createElement('script');

	// 设置属性
	script.id = 'sellinfo_src';
	script.setAttribute('data-web', '2');
	script.src = '//js.11467.com/Public/static/chat/js/sellinfo.js';

	// 将<script>元素添加到文档中
	document.body.appendChild(script);

})
