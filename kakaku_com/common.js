// function : resizeImage
// ↓のような形で使用してください。
// <img src="xx.gif" width="xxx" height="yyy" onerror="this.src='zz.gif'" 
//      onload="resizeImage(this,xxx,yyy)" border="0">

function resizeImage(prmImageElement,prmLenLong,prmLenShort){
  var imgobj = new Image();
  imgobj.onload = function() {
    var len_long = prmLenLong;
    var w = imgobj.width;
    var h = imgobj.height;
    if(w == 0 || h == 0) { 
      w = prmLenLong; 
      h = prmLenShort;
    }
    if (w >= h) {
      if(w < len_long){
        prmImageElement.width = w;
        prmImageElement.height = h;
      } else {
        prmImageElement.width = len_long;
        prmImageElement.height = len_long * h / w;
      }
    } else {
      if(h < len_long){
        prmImageElement.width = w;
        prmImageElement.height = h;
      } else {
        prmImageElement.height = len_long;
        prmImageElement.width = len_long * w / h;
      }
    }
  }
  imgobj.src = prmImageElement.src;
}

function resizeImageFix(prmImageElement,prmLenWidth,prmLenHeight){
  var imgobj = new Image();
  imgobj.onload = function() {
    var len_Width = prmLenWidth;
    var len_Height = prmLenHeight;
    var w = imgobj.width;
    var h = imgobj.height;
  
    if(w == 0 || h == 0) { 
      w = prmLenWidth; 
      h = prmLenHeight;
    }
  
    var diffW = w - len_Width
    var diffH = h - len_Height
    var ratioW = len_Width / w 
    var ratioH = len_Height / h 
  
    if (diffW > 0 || diffH > 0) {
      if (ratioW < ratioH) {
        prmImageElement.width = len_Width;
        prmImageElement.height = len_Width * h / w;
      } else {
        prmImageElement.height = len_Height;
        prmImageElement.width = len_Height * w / h;
      }
    } else {
      prmImageElement.width = w;
      prmImageElement.height = h;
    }
  }
  imgobj.src = prmImageElement.src;
}
