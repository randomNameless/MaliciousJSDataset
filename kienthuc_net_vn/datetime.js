//function tS() { x = new Date(Date.parse(currentServerDate)); return x;} 
function tS() { x = new Date(); x.setTime(x.getTime()); return x; }
function lZ(x){ return (x>9)?x:'0'+x; }
function tH(x){ ap=(x>11)?'pm':'am'; if(x==0){ x=12; } return (x>12)?x-=12:x; } 
function fY(x){ return (x<500)?x+1900:x; } 
function dT(){ if(fr==0){ fr=1; document.write('<span id="tP">'+eval(oT)+'</span>'); } document.getElementById("tP").innerText=eval(oT); setTimeout('dT()',1000); } 
var dN = new Array('Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'), mN = new Array(' tháng 1', ' tháng 2', ' tháng 3', ' tháng 4', ' tháng 5', ' tháng 6', ' tháng 7', ' tháng 8', ' tháng 9', ' tháng 10', ' tháng 11', ' tháng 12'), ap, fr = 0, oT = "dN[tS().getDay()]+', ngày '+tS().getDate()+mN[tS().getMonth()]+' năm '+fY(tS().getYear())";
function dTFooter(){ { fr=1; document.write('<style="font-size: 8pt; font-family: Tahoma"><span id="tP">'+eval(oT)+'</span></font>'); } document.getElementById("tP").innerText=eval(oT); setTimeout('dT()',1000); } 
//var dN=new Array('Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'),mN=new Array('/1','/2','/3','/4','/5','/6','/7','/8','/9','/10','/11','/12'),ap,fr=0,oT="dN[tS().getDay()]+', '+tS().getDate()+mN[tS().getMonth()]+'/'+fY(tS().getYear())";