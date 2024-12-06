/*
* Handles redirections to BookMovement app or landing page
*/

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function isExclusivePage(ref) {
  // for some exclusive pages, we won't redirect to landing
  if (!ref) ref = window.location.pathname;

  exclusivePages = [
    "/our-book-club-bookshelf/",
    "/bookDetailView/",
    "/clubSelectionMeeting/",
    "/mobile-sign-",
    "/iurl/",
    "/unsubscribe/",
  ];

  for ( var i = 0; i < exclusivePages.length; i++ ) {
    if( ref.indexOf(exclusivePages[i]) > -1 ) {
      return true;
    }
  }
  
  return false;
}

