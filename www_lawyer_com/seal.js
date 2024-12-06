function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') {
        c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
     }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=none; Secure";
}
(function() {
		// Include pubnub 
		var script = document.createElement('script');
		script.src = 'https://cdn.pubnub.com/sdk/javascript/pubnub.7.5.0.min.js';
		document.head.appendChild(script);

		var scriptHandlebars = document.createElement('script');
		scriptHandlebars.src = 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.0/handlebars.min.js';
		document.head.appendChild(scriptHandlebars);
		var jqueryHandlebars = document.createElement('script');
		jqueryHandlebars.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
		document.head.appendChild(jqueryHandlebars);

		function createCORSRequest(method, url) {
		  var xhr = new XMLHttpRequest();
		  if ("withCredentials" in xhr) {

		    // Check if the XMLHttpRequest object has a "withCredentials" property.
		    // "withCredentials" only exists on XMLHTTPRequest2 objects.
		    xhr.open(method, url, true);

		  } else if (typeof XDomainRequest != "undefined") {

		    // Otherwise, check if XDomainRequest.
		    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		    xhr = new XDomainRequest();
		    xhr.open(method, url);

		  } else {

		    // Otherwise, CORS is not supported by the browser.
		    xhr = null;

		  }
		  return xhr;
		}

		function execute_body_scripts(body_el) {
		  // Finds and executes scripts in a newly added element's body.
		  // Needed since innerHTML does not run scripts.
		  //
		  // Argument body_el is an element in the dom.

		  function nodeName(elem, name) {
		    return elem.nodeName && elem.nodeName.toUpperCase() ===
		              name.toUpperCase();
		  };

		  function evalScript(elem) {
		    var data = (elem.text || elem.textContent || elem.innerHTML || "" ),
		        head = document.getElementsByTagName("head")[0] ||
		                  document.documentElement,
		        script = document.createElement("script");

		    script.type = "text/javascript";
		    try {
		      // doesn't work on ie...
		      script.appendChild(document.createTextNode(data));      
		    } catch(e) {
		      // IE has funky script nodes
		      script.text = data;
		    }

		    head.insertBefore(script, head.firstChild);
		    head.removeChild(script);
		  };

		  // main section of function
		  var scripts = [],
		      script,
		      children_nodes = body_el.childNodes,
		      child,
		      i;

		  for (i = 0; children_nodes[i]; i++) {
		    child = children_nodes[i];
		    if (nodeName(child, "script" ) &&
		      (!child.type || child.type.toLowerCase() === "text/javascript")) {
		          scripts.push(child);
		      }
		  }

		  for (i = 0; scripts[i]; i++) {
		    script = scripts[i];
		    console.log(script);
		    if (script.parentNode) {script.parentNode.removeChild(script);}
		    evalScript(scripts[i]);
		  }
		};
		var classPID = '';
		var getChatCode = function() {
			console.log("pid", classPID);
			var serverURL = "www.lawyer.com";
	    	var xhr = createCORSRequest('GET', '//'+serverURL+'/vw/inc/chat1.php?pid=' + classPID);
			if (!xhr) {
			  throw new Error('CORS not supported');
			}

			xhr.onload = function() {
	          var elem = document.createElement('div');
	          elem.id = "fillMe";
	          elem.innerHTML = xhr.responseText;
	          document.body.insertBefore(elem, document.body.firstChild);
	          execute_body_scripts(elem);
			};

			xhr.onerror = function() {
			  console.log('There was an error!');
			};
			xhr.send();
			document.removeEventListener('click', getChatCode);
		}

		var dA = document.getElementsByTagName("div");
		var LcomdA;
		for (var i = 0; i < dA.length; i++){
			if ("Lcom"==dA[i].id){
				LcomdA = 0;
				var linksUrl = "";
				var imgUrl = "";
				var filetype = "";
				var links = dA[i].getElementsByTagName("a");
				for (var j = 0; j < links.length; j++){
					linksUrl = links[j].getAttribute("href")+"";
					linksUrl = linksUrl.replace("..html", ".html");
				}
				var imgs = dA[i].getElementsByTagName("img");
				for (var j = 0; j < imgs.length; j++){
					imgUrl = imgs[j].getAttribute("src");
				}
				if (imgUrl.length>5){
					filetype = imgUrl.substr((imgUrl.length-5)).toLowerCase();

					var imgName = /[^/]*$/.exec(imgUrl)[0];
					imgName = imgName.slice(0, imgName.length - 5);
					console.log(imgName);
					classPID = imgName;
					setCookie("chat_lawyerpid", imgName, 1);

					//linksUrl
					var lawyerInfo = false;
					var secureURL = "https:\/\/www.lawyer.com";
					var xmlhttp = new XMLHttpRequest();
					var isMobile = false;
					console.log("isMobile test: ", isMobile);
					//use pid
					xmlhttp.open("GET", secureURL + "/vw/inc/findchatlawyers.php?lawyerPid="+ imgName, true);
					xmlhttp.send();
					xmlhttp.onreadystatechange = function () {
						if (xmlhttp.readyState != 4 || xmlhttp.status != 200) return;
						let responseText = JSON.parse(xmlhttp.responseText);
						if(responseText[0] && (responseText[0]['chat_status'] == 10 || responseText[0]['chat_status'] == 20)){
							document.getElementById("Lcom").style.display = "none";
						}else if(!window.location.hostname.indexOf("lawyer.com")!=-1 && (responseText[0] && responseText[0]['chat_status'] == 0 && !isMobile || (responseText[0]['mobile_disabled'] == 0 && isMobile))){
							//start chat
							// this hiding may not be necessary, keeping it in just in case
							document.getElementById("Lcom").style.display = "none";
							setTimeout(getChatCode, 2000);
						} else if(responseText[0]['mobile_disabled'] == 1 && isMobile) {
							document.getElementById("Lcom").style.display = "none";
						}
					}
					if (filetype=='i.png' || filetype=='p.png' || filetype=='k.png' || filetype=='f.png'){ 
						dA[i].innerHTML= '<a href="'+linksUrl+'"><div style="width:205px;height:60px;background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;text-align:left;display:inline-block;"><div style="padding-left:171px;padding-top:22px;"><img src="https://www.lawyer.com/seal/animated-check.gif" width="30" height="33" class="'+classPID+'" border="0" style="border: none; box-shadow: none;"></div></div></a>';
					}
				}
			} else if ("Lcomres"==dA[i].id){
				LcomdA = 1;
				var linksUrl = "";
				var imgUrl = "";
				var filetype = "";
				var links = dA[i].getElementsByTagName("a");
				for (var j = 0; j < links.length; j++){
					linksUrl = links[j].getAttribute("href")+"";
					linksUrl = linksUrl.replace("..html", ".html");
				}
				var imgs = dA[i].getElementsByTagName("img");
				for (var j = 0; j < imgs.length; j++){
					imgUrl = imgs[j].getAttribute("src");
				}
				if (imgUrl.length>5){
					filetype = imgUrl.substr((imgUrl.length-5)).toLowerCase();

					if (filetype=='i.png'){
						if(linksUrl.indexOf("jamison-mark")!=-1 && !window.location.hostname.indexOf("lawyer.com")!=-1){
							setTimeout(getChatCode, 2000);
							console.log('here');
							console.log(window.location);
	                        dA[i].innerHTML= '<a href="'+linksUrl+'"><div style="width:15.2vw;height:4.5vw;background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;background-size:contain;"><div style="padding-left:12.4vw;padding-top:1.62vw;"><img src="https://www.lawyer.com/seal/animated-check.gif" border="0" style="border:none;box-shadow:none;width:2.26vw;"></div></div></a>';

	                    }else{
	                        dA[i].innerHTML= '<a href="'+linksUrl+'"><div style="width:15.2vw;height:4.5vw;background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;background-size:contain;"><div style="padding-left:12.4vw;padding-top:1.62vw;"><img src="https://www.lawyer.com/seal/animated-check.gif" border="0" style="border:none;box-shadow:none;width:2.26vw;"></div></div></a>';
	                    }

					}else if(filetype=='p.png'){
						dA[i].innerHTML= '<a href="'+linksUrl+'"><div style="width:140px;height:60px;background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;text-align:left;"><div style="padding-left:1107px;padding-top:20px;"><img src="https://www.lawyer.com/seal/animated-check.gif" width="30" height="33" border="0" style="border: none; box-shadow: none;"></div></div></a>';
					}else if(filetype=='k.png'){
						dA[i].innerHTML= '<a href="'+linksUrl+'"><div style="width:140px;height:60px;background-image:url(\''+imgUrl+'\');background-repeat:no-repeat;text-align:left;"><div style="padding-left:107px;padding-top:20px;"><img src="https://www.lawyer.com/seal/animated-check.gif" width="30" height="33" border="0" style="border: none; box-shadow: none;"></div></div></a>';
					}
				}
			}
		}
		var little = document.createElement("img");
		little.src = "https://www.lawyer.com/seal/track.php?"+encodeURIComponent(document.referrer);
		little.setAttribute("height", "1");
		little.setAttribute("width", "1");
	        little.setAttribute("style", "border: none; box-shadow: none;");
	    if (LcomdA==0){
			document.getElementById("Lcom").appendChild(little);
		} else if (LcomdA==1){
			document.getElementById("Lcomres").appendChild(little);
		}
})();
	
