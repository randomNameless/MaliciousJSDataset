FB.init({
appId  : '162974502702',
status : true, // check login status
cookie : true, // enable cookies to allow the server to access the session
xfbml  : true, // parse XFBML
oauth  : true // enable OAuth 2.0
});
// 
//FB.getLoginStatus(function(response) {
//    if (response.authResponse) {
//        //Si connected, on retire le FBConnect
//        loggedFBUser();
//    } else {
//        notLoggedFBUser();
//    }
//});


//loggedFBUser = function (){
//    //On retire le FBConnect
//    //document.getElementById ('spanFConnect').style.display = 'none';
////    document.getElementById ('imgFacebookAvatar').src = 'http://profile.ak.fbcdn.net/hprofile-ak-snc4/275178_688497714_366673657_q.jpg';
////    FB.api('/me', function(response) {
////    alert('Your name is ' + response.name);
////    });
//}

//notLoggedFBUser = function (){
//    //document.getElementById ('spanFConnect').style.display = 'block';
//}

//FB.Event.subscribe('auth.login', function(response) {
//  alert ('OK je viens de voir le user se logger');
//});


//FB.Event.subscribe('auth.logout', function(response) {
//  alert ('OK je viens de voir le user se logger out');
//});
//    FB.Event.subscribe('auth.authResponseChange', function(response) {
//    alert('changement de status : ' + response.status);
//    
//        __doPostBack('btnFacebookTraitement', 'LesInformations');
//    //Si connected, on retire le FBConnect
//    //    alert ('On post back pour logger le user : ' + response.status);
//    //    alert (response.name);
//    ////    if (response.status == 'connected'){
//    //    }
//    //    else{
//    //        alert (response.status);
//    //    
//    //    }
//    });
