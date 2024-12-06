// v1.2e - 4 Oct 2023 - David M. Cheney
var nowdnum = -1.1;
var nowdnumbad = false;
var nowdnumdoc = false;
var yearonly = false;

function calcdnum(y, m, d) {
var n = ( y + (d/365));
if (m > 0) {
   n += (m-1)/12;
   yearonly = false;
} else {
   n += 0.4995;
   yearonly = true;
}
return n;
}

function writeage(y, m, d) {
calcnowdnum();
writednum(nowdnum - calcdnum(y,m,d) - 0.004995);
}

function writednum(n) {
if (n < 0) {
   document.write('-');
} else {
   if (nowdnumdoc == true) {
      n = Math.round(n);
      document.write('*');
   }
   if (yearonly == true) {
      document.write(Math.round(n));
   } else {
      document.write(n.toFixed(2));
   }
}
}

function calcnowdnum() {
var t = new Date();
if (nowdnumbad == false) {
   if (nowdnum < 0) {
      nowdnum=calcdnum(t.getFullYear(),t.getMonth()+1,t.getDate());
      if (nowdnum < 2020) {
         if (Date.parse(document.lastModified) != 0) {
            t.setTime(Date.parse(document.lastModified));
            nowdnum=calcdnum(t.getFullYear(),t.getMonth()+1,t.getDate());
            nowdnumdoc = true;
         }
         if (nowdnum < 2023) {
            nowdnumbad = true;
            nowdnum = -1.1;
         }
      }
   }
}
}
