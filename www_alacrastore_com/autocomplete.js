
(function(alacra,undefined){alacra.autocomplete=function(A,B,C,D,E,F,G){var H="<span style='padding-left:10px;'>Ticker</span><span style='position:absolute; padding-left:55px;'>Name</span>";if(arguments.length>=8){H=arguments[7];}
var resultContainerBufferSize=10;if(arguments.length>=9){resultContainerBufferSize=arguments[8];}
var resultRowHeight=20;if(arguments.length>=10){resultRowHeight=arguments[9];}
var maxResultRowsToShow=14;if(arguments.length>=11){maxResultRowsToShow=arguments[10];}
var autoHeightOff=false;if(arguments.length>=12){autoHeightOff=arguments[11];}
var maxResultsToRetrieve=20;if(arguments.length>=13){maxResultsToRetrieve=arguments[12];}
var containerLeft=470;if(arguments.length>=14){containerLeft=arguments[13];}
var containerTop=64;if(arguments.length>=15){containerTop=arguments[14];}
var P=true;if(arguments.length>=16){P=arguments[15];}
var oDS=new YAHOO.util.XHRDataSource("/asp/autocomplete/autocomplete.asp?");oDS.responseSchema={resultsList:"RESULTS",resultNode:"RESULT",fields:G};oDS.responseType=YAHOO.util.XHRDataSource.TYPE_XML;var oAC=new YAHOO.widget.AutoComplete(A,B,oDS);oAC.autoHighlight=P;oAC.queryDelay=0;oAC.suppressInputUpdate=true;oAC.resultTypeList=false;oAC.maxResultsDisplayed=maxResultsToRetrieve;oAC.generateRequest=function(sQuery){return"request="+F(E)+"&token="+sQuery;};oAC.formatResult=function(oResultData,sQuery){return C(oResultData,sQuery)};if(H.length>0){oAC.setHeader(H);}
oAC.itemSelectEvent.subscribe(function(sType,aArgs){var oData=aArgs[2];if(E&&E>0)
D(oData,E);else
D(oData);});oAC.doBeforeExpandContainer=function(elTxtBox,elContainer,sQuery,aResults){if(!autoHeightOff){var newheight=resultContainerBufferSize;if(aResults.length<=maxResultRowsToShow){newheight+=(aResults.length*resultRowHeight);}else{newheight+=(maxResultRowsToShow*resultRowHeight);}
elContainer.style.height=newheight+"px";elContainer.style.left=containerLeft+"px";elContainer.style.top=containerTop+"px";}
return true;};return{oDS:oDS,oAC:oAC};};}(window.alacra=window.alacra||{}));