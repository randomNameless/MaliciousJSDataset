
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'block':(v=='hide')?'none':v; }
    obj.display=v; }
}
function MM_setTextOfTextfield(objName,x,newText) { //v3.0
  var obj = MM_findObj(objName); if (obj) obj.value = newText;
}

function toggleLayer(whichLayer)
{
if (document.getElementById)
{
// this is the way the standards work
var style2 = document.getElementById(whichLayer).style;
style2.display = style2.display? "":"block";
}
else if (document.all)
{
// this is the way old msie versions work
var style2 = document.all[whichLayer].style;
style2.display = style2.display? "":"block";
}
else if (document.layers)
{
// this is the way nn4 works
var style2 = document.layers[whichLayer].style;
style2.display = style2.display? "":"block";
}
}

function OpenWindow1 (c) {
    window.open(c,
                    'Window1',
                    'width=300,height=400,scrollbars=yes,resize=yes,status=yes,screenX=20,screenY=20,top=20,left=20');
}

function OpenWindow2 (c) {
    window.open(c,
                    'Window1',
                    'width=450,height=250,scrollbars=no,resize=yes,status=no,screenX=20,screenY=20,top=20,left=20');
}

function OpenWindow3 (c) {
    window.open(c,
                    'Window1',
                    'width=750,height=220,scrollbars=no,resize=np,status=no,screenX=20,screenY=20,top=20,left=20');
}

