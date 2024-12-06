 window.addEventListener('load', function() {
  var buttoncolourelement = document.getElementById('chetty-buttonColour');
  var colourValue = buttoncolourelement.getAttribute('chetty-data-colour');

  var logoColour;

  // Check if the 'logo-colour' attribute exists and its value
  if (buttoncolourelement.hasAttribute('logo-colour') && buttoncolourelement.getAttribute('logo-colour') === 'black') {
      // If the attribute exists and is 'black', set the logoColour to RGBA(0,0,0,1)
      logoColour = 'RGBA(0,0,0,1)';
  } else {
      // If the attribute does not exist, set the logoColour to '#fff'
      logoColour = '#fff';
  }

  var svgData = `
  <svg id="eJ7o9c6Rewa1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 520 500" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="520" height="500">
  <style>
      #eJ7o9c6Rewa6_tr {animation: eJ7o9c6Rewa6_tr__tr 306.7484662576687ms linear 1 normal forwards paused;}
      @keyframes eJ7o9c6Rewa6_tr__tr { 0% {transform: translate(280.178px,449.068px) rotate(0deg)} 60% {transform: translate(280.178px,449.068px) rotate(26.348169deg)} 100% {transform: translate(280.178px,449.068px) rotate(26.348169deg)}}
      
      #eJ7o9c6Rewa6 {animation: eJ7o9c6Rewa6_c_o 306.7484662576687ms linear 1 normal forwards paused;}
      @keyframes eJ7o9c6Rewa6_c_o { 0% {opacity: 1} 60% {opacity: 0} 100% {opacity: 0}}
      
      #eJ7o9c6Rewa18 {animation: eJ7o9c6Rewa18_c_o 306.7484662576687ms linear 1 normal forwards paused;}
      @keyframes eJ7o9c6Rewa18_c_o { 0% {opacity: 0} 40% {opacity: 0} 100% {opacity: 1}}
      
      #eJ7o9c6Rewa19_tr {animation: eJ7o9c6Rewa19_tr__tr 306.7484662576687ms linear 1 normal forwards paused;}
      @keyframes eJ7o9c6Rewa19_tr__tr { 0% {transform: translate(420.945001px,302.638499px) rotate(180deg)} 40% {transform: translate(420.945001px,302.638499px) rotate(180deg)} 100% {transform: translate(420.945001px,302.638499px) rotate(135deg)}}
      
      #eJ7o9c6Rewa20_tr {animation: eJ7o9c6Rewa20_tr__tr 306.7484662576687ms linear 1 normal forwards paused;}
      @keyframes eJ7o9c6Rewa20_tr__tr { 0% {transform: translate(416.971px,302.166838px) rotate(0deg)} 40% {transform: translate(416.971px,302.166838px) rotate(0deg)} 100% {transform: translate(416.971px,302.166838px) rotate(45deg)}}
  </style>
<g transform="translate(-153.472218-55.555643)"><g clip-path="url(#eJ7o9c6Rewa16)"><g><path d="M0,0c0-133.943-108.582-242.525-242.525-242.525s-242.525,108.582-242.525,242.525c0,133.942,108.582,242.524,242.525,242.524C-108.582,242.524,0,133.942,0,0" transform="matrix(1 0 0-1 663.47 302.638)" fill="${colourValue}"/><g id="eJ7o9c6Rewa6_tr" transform="translate(280.178,449.068) rotate(0)"><g id="eJ7o9c6Rewa6" transform="translate(-280.178,-449.068)"><path d="M0,0h-234.174c-13.024,0-23.68,10.655-23.68,23.68v116.569c0,13.023,10.656,23.679,23.68,23.679h234.174c13.023,0,23.68-10.656,23.68-23.679v-116.569C23.68,10.655,13.023,0,0,0" transform="matrix(1 0 0-1 538.032 377.772)" fill="${logoColour}"/><path d="M0,0l-3.717-7.051-79.003-86.408v151.34Z" transform="matrix(1 0 0-1 362.898 355.609)" fill="${logoColour}"/><path d="M0,0c0-14.963-12.13-27.093-27.093-27.093s-27.093,12.13-27.093,27.093s12.13,27.093,27.093,27.093C-12.13,27.093,0,14.963,0,0" transform="matrix(1 0 0-1 448.038 277.637)" fill="${colourValue}"/><path d="M0,0c0-14.963-12.13-27.093-27.093-27.093s-27.093,12.13-27.093,27.093s12.13,27.093,27.093,27.093C-12.13,27.093,0,14.963,0,0" transform="matrix(1 0 0-1 365.447 312.639)" fill="${colourValue}"/><path d="M0,0c0-14.963-12.13-27.093-27.093-27.093s-27.093,12.13-27.093,27.093s12.13,27.093,27.093,27.093C-12.13,27.093,0,14.963,0,0" transform="matrix(1 0 0-1 531.651 311.639)" fill="${colourValue}"/><path d="M0,0l-86.239-41.909-5.862,12.063L-5.863,12.063Z" transform="matrix(1 0 0-1 427.066 277.01)" fill="${colourValue}"/><path d="M0,0l86.238-41.909l5.863,12.063L5.862,12.063Z" transform="matrix(1 0 0-1 416.971 277.01)" fill="${colourValue}"/></g></g><path d="M0,0c-35.52,0-64.417,28.897-64.417,64.417c0,35.519,28.897,64.416,64.417,64.416s64.417-28.897,64.417-64.416C64.417,28.897,35.52,0,0,0" transform="matrix(1 0 0-1 235.342 201.449)" fill="#10f00c"/><path d="M0,0c-42.412,0-76.917-34.505-76.917-76.916c0-42.413,34.505-76.917,76.917-76.917s76.917,34.504,76.917,76.917C76.917,-34.505,42.412,0,0,0m0-25c28.673,0,51.917-23.244,51.917-51.916c0-28.674-23.244-51.917-51.917-51.917s-51.917,23.243-51.917,51.917C-51.917,-48.244,-28.673,-25,0,-25" transform="matrix(1 0 0-1 235.342 60.1152)" fill="${colourValue}"/></g><clipPath id="eJ7o9c6Rewa16"><path d="M0,595.276h841.89L841.89,0L0,0Z" transform="matrix(1 0 0-1 0 595.276)"/></clipPath></g></g><g id="eJ7o9c6Rewa18" transform="translate(-153.472218-55.555642)" opacity="0"><g id="eJ7o9c6Rewa19_tr" transform="translate(420.945001,302.638499) rotate(180)"><line x1="-68.3965" y1="-79.454438" x2="231.6035" y2="-80.788499" transform="translate(-81.6035,80.121469)" fill="${logoColour}" stroke="${logoColour}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/></g><g id="eJ7o9c6Rewa20_tr" transform="translate(416.971,302.166838) rotate(0)"><line x1="-68.3965" y1="-79.454438" x2="231.6035" y2="-80.788499" transform="translate(-81.6035,80.121469)" fill="none" stroke="${logoColour}" stroke-width="20" stroke-linecap="round"/></g></g></svg>

`;

// Create an SVG DOM element
var parser = new DOMParser();
var svgElement = parser.parseFromString(svgData, 'image/svg+xml').documentElement;

// Get the button element
var button = document.getElementById('chetty-chatbot-button');

// Insert the SVG DOM element into the button
button.appendChild(svgElement);
button.style.backgroundImage = 'none';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
setTimeout(function() {
  button.style.display = 'flex';
  button.classList.add('displayed');
}, 1000);


  
  var isForward = true; // flag to check the direction of the animation

  // Create a function to animate the elements
  function animateElements() {
      var elementsToAnimate = ["eJ7o9c6Rewa6_tr", "eJ7o9c6Rewa6", "eJ7o9c6Rewa18", "eJ7o9c6Rewa19_tr", "eJ7o9c6Rewa20_tr"];
      
      elementsToAnimate.forEach(function(id) {
          var element = document.getElementById(id);
          var animationName = window.getComputedStyle(element).animationName;
          
          if (isForward) {
              element.style.animationDirection = "normal";
          } else {
              element.style.animationDirection = "reverse";
          }
          
          // Clone the element and replace the original with the clone to reset the animation
          var clone = element.cloneNode(true);
          element.parentNode.replaceChild(clone, element);

          clone.style.animationPlayState = "running";
      });

      isForward = !isForward; // toggle the direction for the next time the function is called
  }


  var chatbotButton = document.getElementById('chetty-chatbot-button');
  var chatbotIframe = document.getElementById('chetty-chatbot-iframe');
  var link = document.getElementById('chetty-stylesheet-link');
  var iframeLoaded = false;
  var autoOpened = false;
  var homepage = document.getElementById('chetty-homepage'); // Get the div
  var homepageURL = homepage.dataset.homepageUrl; 
  var userHasClicked = false;// Get the data-homepage-url value

  // Set the stylesheet href
  link.href = link.dataset.href; // Getting the href from the data attribute

  // Load the iframe
  chatbotIframe.src = chatbotIframe.dataset.iframeSrc; // Getting the src from the data attribute
  iframeLoaded = true;

  // Start with the button pulsing
  //chatbotButton.classList.add('pulse');

  setTimeout(function() {
    button.classList.remove('displayed');
    button.classList.add('chetty-pulse');
  }, 2000);

  window.addEventListener('message', function(event) {
  //  console.log('Received message:', event.data);
  //  console.log('Message origin:', event.origin);

    // Ensure the message comes from a trusted source
    // Uncomment and modify the following line if you need to check the origin
    // if (event.origin !== 'http://example.com') return;

    if (event.data === 'closeIframe') {
      //  console.log('Closing iframe...');
        // Include animations similar to button click
        if (chatbotIframe) {
          //  console.log('Current display style:', chatbotIframe.style.display);
          //  console.log('Contains class "visible":', chatbotIframe.classList.contains('visible'));
            
            // Animate the iframe closing, similar to a button click
            chatbotIframe.classList.remove('visible');
            setTimeout(function() {
                chatbotIframe.style.display = 'none';
            //    console.log('Iframe closed');
            }, 300); // Set timeout to match your closing animation duration

            // Animate the button as well, possibly triggering SVG animations
            animateElements(); // Assuming this function animates the button
        } else {
            console.log('Error: chatbotIframe is not defined or found.');
        }
        
        // Update button state, adding 'chetty-pulse' if necessary
        if (chatbotButton) {
            // Assuming the button should pulse when iframe closes
            chatbotButton.classList.add('chetty-pulse');
          //  console.log('Button pulse added');
        } else {
            console.log('Error: chatbotButton is not defined or found.');
        }
    } else {
        console.log('Message does not match "closeIframe"');
    }
  });

  // Load the script
  chatbotButton.onclick = function() {
    animateElements();
    userHasClicked = true;
    if (chatbotIframe.classList.contains('visible')) {
      chatbotIframe.style.display = 'block';
      setTimeout(function() {
        chatbotIframe.classList.remove('visible');
      }, 10);
      chatbotButton.classList.add('chetty-pulse');
    } else {
      chatbotIframe.style.display = 'block';
      setTimeout(function() {
        chatbotIframe.classList.add('visible');
      }, 10);
      if(autoOpened){
        chatbotButton.classList.remove('chetty-pulse');
      } else {
        setTimeout(function() {
          chatbotButton.classList.remove('chetty-pulse');
        }, 100);
      }
    }
    autoOpened = false;
  };

  //console.log('Window Origin:', window.location.origin);
  //console.log('Homepage URL:', homepageURL);
  //console.log('Path name:', window.location.pathname);


  let currentPath = window.location.pathname;
  if (currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1);
  }
  
  if (window.location.href === homepageURL || (window.location.origin + currentPath === homepageURL /*&& window.location.search !== ""*/)) {
      setTimeout(function() {
          if (!userHasClicked && window.innerWidth > 768) {
              chatbotButton.click();
              autoOpened = true;
          }
      }, 6000);
  }
});