var dtCh="/",minYear=1980,maxYear=2020;function textCounter(a,b){if(a.value.length>b)a.value=a.value.substring(0,b)}function OpenComments(b){var a={};a=window.open("blogcomment.asp?blogid="+b,"PopUp","resizable=yes scrollbars=yes toolbar=no width=450 height=450 top=0 left=0");a.focus()}function OpenAd(d,c,b){var a={};a=window.open(d,"PopUp","resizable=yes scrollbars=yes toolbar=yes width="+c+" height="+b+" top=0 left=0");a.focus()}function OpenInfoWindow(d,c,b){var a={};a=window.open(d,"PopUp","resizable=no,scrollbars=no,toolbar=no,width="+c+",height="+b+",top=100,left=100");a.focus()}function ValidateCriteria(){var a=Trim(document.frmSearch.fdate.value),b=Trim(document.frmSearch.tdate.value);if(a!="")if(isDate(a)==false)return false;if(b!="")if(isDate(b)==false)return false;return true}function Trim(a){return RTrim(LTrim(a))}function RTrim(d){var c=new String(" \t\n\r"),a=new String(d);if(c.indexOf(a.charAt(a.length-1))!=-1){var b=a.length-1;while(b>=0&&c.indexOf(a.charAt(b))!=-1)b--;a=a.substring(0,b+1)}return a}function LTrim(e){var c=new String(" \t\n\r"),a=new String(e);if(c.indexOf(a.charAt(0))!=-1){var b=0,d=a.length;while(b<d&&c.indexOf(a.charAt(b))!=-1)b++;a=a.substring(b,d)}return a}function Highlight(b,a){b.className=a}function CheckDate(a){if(isDate(a.value)==false){a.focus();return false}return true}function isInteger(c){for(var a=0;a<c.length;a++){var b=c.charAt(a);if(b<"0"||b>"9")return false}return true}function stripCharsInBag(d,e){for(var b="",a=0;a<d.length;a++){var c=d.charAt(a);if(e.indexOf(c)==-1)b+=c}return b}function daysInFebruary(a){return a%4==0&&(!(a%100==0)||a%400==0)?29:28}function DaysArray(b){for(var a=1;a<=b;a++){this[a]=31;if(a==4||a==6||a==9||a==11)this[a]=30;if(a==2)this[a]=29}return this}function isDate(a){var h=DaysArray(12),d=a.indexOf(dtCh),e=a.indexOf(dtCh,d+1),b=a.substring(0,d),c=a.substring(d+1,e),f=a.substring(e+1);strYr=f;if(c.charAt(0)=="0"&&c.length>1)c=c.substring(1);if(b.charAt(0)=="0"&&b.length>1)b=b.substring(1);for(var g=1;g<=3;g++)if(strYr.charAt(0)=="0"&&strYr.length>1)strYr=strYr.substring(1);month=parseInt(b);day=parseInt(c);year=parseInt(strYr);if(d==-1||e==-1){alert("The date format should be : mm/dd/yyyy");return false}if(b.length<1||month<1||month>12){alert("Please enter a valid month");return false}if(c.length<1||day<1||day>31||month==2&&day>daysInFebruary(year)||day>h[month]){alert("Please enter a valid day");return false}if(f.length!=4||year==0||year<minYear||year>maxYear){alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear);return false}if(a.indexOf(dtCh,e+1)!=-1||isInteger(stripCharsInBag(a,dtCh))==false){alert("Please enter a valid date");return false}return true}function CheckLength(c,d,b,e){var a=true;if(b>0){var f=d.value;if(f.length<b){alert(e);d.focus();a=false}}if(a){c.disabled=true;c.value="searching ..."}return a}function SelectAll(b){for(var a=0;a<b.length;a++){var c=b.elements[a];c.checked=true}}function DeselectAll(b){for(var a=0;a<b.length;a++){var c=b.elements[a];c.checked=false}}function GetCheckedList(d){for(var a="",c=0;c<d.length;c++){var b=d.elements[c];if(b.checked&&b.type=="checkbox")a+=b.id+","}if(a.length>0)a=a.substring(0,a.length-1);return a}function urlencode(a){var c,b;if(typeof a=="string")if(a!=null){b=/(^\s+)|(\s+$)/g;a=a.replace(b,"");for(i=32;i<256;i++)a=a.replace(String.fromCharCode(i),escape(String.fromCharCode(i)))}return a}function ChangeToFocus(a){a.style.color="red";a.style.cursor="hand";a.style.fontsize="14 pt"}function ChangeToNormal(a){a.style.color="white"}function getbrowserwidth(){return navigator.userAgent.indexOf("MSIE")>0?document.body.clientWidth:window.outerWidth}function getbrowserheight(){return navigator.userAgent.indexOf("MSIE")>0?document.body.clientHeight:window.outerHeight}var popup={};function CenterPopup(c,b,a){var d=getbrowserwidth()/2,e=getbrowserheight()/2;popup=window.open(c,"PopUp","resizable=yes scrollbars=yes toolbar=yes width="+b+" height="+a+" top="+(window.screenTop+(e-a/2))+" left="+(window.screenLeft+(d-b/2)));popup.focus()}function ValidateAccountInfoBasic(a){var d="";LastName="";Street1="";EmailAddress="";City="";ZipCode="";var c,b="";d=Trim(a.FirstName.value);LastName=Trim(a.LastName.value);Street1=Trim(a.Street1.value);EmailAddress=Trim(a.EmailAddress.value);City=Trim(a.City.value);ZipCode=Trim(a.ZipCode.value);a.acctsave.disabled=true;a.acctsave.value="Saving Changes ...";c=false;if(EmailAddress.length=="0"){a.EmailAddress.style.background="#FFFF99";b=b+"Email Address, "}if(d.length=="0"){a.FirstName.style.background="#FFFF99";b=b+"Member First Name, "}if(LastName.length=="0"){a.LastName.style.background="#FFFF99";b=b+"Member Last Name, "}if(Street1.length=="0"){a.Street1.style.background="#FFFF99";b=b+"Member Street Address 1, "}if(City.length=="0"){a.City.style.background="#FFFF99";b=b+"City, "}if(ZipCode.length=="0"){a.ZipCode.style.background="#FFFF99";b=b+"Zip Code, "}if(b==""){c=true;a.u.value="1"}else{a.u.value="0";a.acctsave.value="Save Changes";a.acctsave.disabled=false;alert("Please enter a value for "+b.substring(0,b.length-2))}return c}function ValidateAccountInfo(a){var d="";cccustnamevalue="";ccstreetaddrvalue="";cczipcodevalue="";ccsecuritycodevalue="";FirstName="";LastName="";Street1="";EmailAddress="";City="";ZipCode="";Country="";var c,b="";d=Trim(a.CCNumber.value);cccustnamevalue=Trim(a.CCName.value);ccstreetaddrvalue=Trim(a.CCStreetAddress.value);cczipcodevalue=Trim(a.CCZipCode.value);ccsecuritycodevalue=Trim(a.CCSecurityCode.value);FirstName=Trim(a.FirstName.value);LastName=Trim(a.LastName.value);Street1=Trim(a.Street1.value);EmailAddress=Trim(a.EmailAddress.value);City=Trim(a.City.value);ZipCode=Trim(a.ZipCode.value);Country=Trim(a.country.value);a.acctsave.disabled=true;a.acctsave.value="Saving Changes ...";c=false;if(EmailAddress.length=="0"){a.EmailAddress.style.background="#FFFF99";b=b+"Email Address, "}if(FirstName.length=="0"){a.FirstName.style.background="#FFFF99";b=b+"Member First Name, "}if(LastName.length=="0"){a.LastName.style.background="#FFFF99";b=b+"Member Last Name, "}if(Street1.length=="0"){a.Street1.style.background="#FFFF99";b=b+"Member Street Address 1, "}if(City.length=="0"){a.City.value="";a.City.style.background="#FFFF99";b=b+"City, "}if(Country=="US"||Country=="PR"||Country=="MP"||Country=="VI"||Country=="AS"||Country=="GU")if(ZipCode.length=="0"){a.ZipCode.value="";a.ZipCode.style.background="#FFFF99";b=b+"Zip Code, "}else if(isNaN(ZipCode)||ZipCode.length<5){a.ZipCode.style.background="#FFFF99";b=b+"Zip Code (Numeric Five Digits), "}if(d.length=="0"){a.CCNumber.style.background="#FFFF99";b="Credit Card Number, "}if(cccustnamevalue.length=="0"){a.CCName.style.background="#FFFF99";b=b+"Name on Credit Card, "}if(ccsecuritycodevalue.length=="0"){a.CCSecurityCode.style.background="#FFFF99";b=b+"Credit Card Security Code (CVV), "}if(ccstreetaddrvalue.length=="0"){a.CCStreetAddress.style.background="#FFFF99";b=b+"Credit Card Street Address, "}if(cczipcodevalue.length=="0"){a.CCZipCode.style.background="#FFFF99";b=b+"Credit Card Zip Code, "}if(b==""){c=true;a.u.value="1"}else{a.u.value="0";a.acctsave.value="Save Changes";a.acctsave.disabled=false;alert("Please enter a value for "+b.substring(0,b.length-2))}return c}function ValidateAcctSetup(e,h,c){var b,g="",f="",d="",a="";g=Trim(e.value);f=Trim(h.value);d=Trim(c.value);document.forms.frmCreateAccount.acctsubmit.disabled=true;document.forms.frmCreateAccount.acctsubmit.value="Processing ...";b=false;if(g.length=="0"){e.style.background="#FFFF99";a="Email Address, "}if(f.length=="0"){h.style.background="#FFFF99";a=a+"Password, "}if(d.length=="0"){c.style.background="#FFFF99";a=a+"Confirm Password, "}if(a=="")b=true;else{document.forms.frmCreateAccount.acctsubmit.value="Sign Up  >>";document.forms.frmCreateAccount.acctsubmit.disabled=false;alert("Please enter a value for "+a.substring(0,a.length-2))}return b}function ValidateAcctActivate(m,l,j,h,i,c,f,n,d){var k="";cccustnamevalue="";ccsecuritycodevalue="";ccstreetaddrvalue="";cczipcodevalue="";ccagreevalue="";cccountryvalue="";cccityvalue="";var g,a="",b="",e="";if(m.value=="1")return true;else{k=Trim(l.value);cccustnamevalue=Trim(j.value);ccsecuritycodevalue=Trim(h.value);ccstreetaddrvalue=Trim(i.value);cczipcodevalue=Trim(c.value);ccagreevalue=f.checked;cccountryvalue=Trim(n.value);cccityvalue=Trim(d.value);document.forms.frmSelectMembership.ccsubmit.disabled=true;document.forms.frmSelectMembership.ccsubmit.value="processing ...";g=false;if(k.length=="0"){l.style.background="#FFFF99";a="Credit Card Number, "}if(cccustnamevalue.length=="0"){j.style.background="#FFFF99";a=a+"Name on Card, "}if(ccsecuritycodevalue.length=="0"){h.style.background="#FFFF99";a=a+"Card Security Code, "}if(ccstreetaddrvalue.length=="0"){i.style.background="#FFFF99";a=a+"Street Address, "}if(f.checked==false){f.style.background="#FF0000";b="check the Renewal Policy Check Box";f.checked=0}if(cccountryvalue=="US"||cccountryvalue=="PR"||cccountryvalue=="MP"||cccountryvalue=="VI"||cccountryvalue=="AS"||cccountryvalue=="GU"){if(cczipcodevalue.length=="0"){c.value="";d.value="";c.style.background="#FFFF99";a=a+"Zip Code, "}else if(isNaN(cczipcodevalue)||cczipcodevalue.length<5){d.value="";c.style.background="#FFFF99";a=a+"Zip Code (Numeric Five Digits), "}}else if(cccityvalue.length=="0"){d.value="";c.value="";d.style.background="#FFFF99";a=a+"City, "}if(a==""&&b=="")g=true;else{document.forms.frmSelectMembership.ccsubmit.value="submit";document.forms.frmSelectMembership.ccsubmit.disabled=false;if(a!=""){e="Please enter a value for "+a.substring(0,a.length-2);if(b!="")e=e+", and "+b}else if(b!="")e="Please "+b;alert(e)}return g}}function ValidateSignIn(e,f){var b,d="",c="",a="";d=Trim(e.value);c=Trim(f.value);document.forms.frmSignIn.logon.disabled=true;document.forms.frmSignIn.logon.value="Signing In ...";b=false;if(d.length=="0")a="Email Address, ";if(c.length=="0")a=a+"Password, ";if(a=="")b=true;else{document.forms.frmSignIn.logon.value="Sign In";document.forms.frmSignIn.logon.disabled=false;alert("Please enter a value for "+a.substring(0,a.length-2))}return b}function ValidateRetrievePassword(d){var b,c="",a="";c=Trim(d.value);document.forms.frmRetrievePassword.send.disabled=true;document.forms.frmRetrievePassword.send.value="Sending ...";b=false;if(c.length=="0")a="Email Address, ";if(a=="")b=true;else{document.forms.frmRetrievePassword.send.value="Send Password";document.forms.frmRetrievePassword.send.disabled=false;alert("Please enter a value for "+a.substring(0,a.length-2))}return b}function ValidatePasswordChange(g,h,f){var b,d="",e="",c="",a="";d=Trim(g.value);e=Trim(h.value);c=Trim(f.value);document.forms.frmPWChange.submitnew.disabled=true;document.forms.frmPWChange.submitnew.value="Updating ...";b=false;if(d.length=="0")a="Old Password, ";if(e.length=="0")a=a+"New Password, ";if(c.length=="0")a=a+"Confirm New Password, ";if(a=="")b=true;else{document.forms.frmPWChange.submitnew.value="Submit";document.forms.frmPWChange.submitnew.disabled=false;alert("Please enter a value for "+a.substring(0,a.length-2))}return b}