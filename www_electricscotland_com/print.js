function takeprint(e){
	/*var printContents = document.getElementById('takeprint').innerHTML;
	var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
*/
var originalContents  = document.body.outerHTML;
//console.log(originalContents);
var contents = document.body.innerHTML;
var printContents = String(originalContents).match('<\/td><!--msnavigation-->([^]*)<table id="table1"');
//console.log(printContents[1]);
 document.body.innerHTML = printContents[1];
     document.body.style.margin = "0 auto";
     document.body.style.textAlign = "center";
    console.log(document.body.innerHTML);
    window.print();

     
     document.body.innerHTML = contents;

     e.preventDefault();
     return false;
	//document.open();
    // document.write(content.innerText);
}