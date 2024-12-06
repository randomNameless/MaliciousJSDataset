window.jsErrors = [];
window.onerror = function ( errorMessage, url, lineNumber ) {
   var message = "Error: " + errorMessage + ", url: " + url + ", line: " + lineNumber;
   window.jsErrors.push(message);
   return false;
};