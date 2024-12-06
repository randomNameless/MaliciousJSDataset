// https://developer.apple.com/internet/webcontent/xmlhttpreq.html
function createRequestObject() {
	RequestObject = false;
	if(window.XMLHttpRequest) {
		try {
			RequestObject = new XMLHttpRequest();
		} catch(e) {
			RequestObject = false;
		}
	} else if(window.ActiveXObject) {
		try {
			RequestObject = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				RequestObject = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				RequestObject = false;
			}
		}
	}
	return RequestObject;
}