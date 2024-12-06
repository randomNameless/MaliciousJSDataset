function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();
// Select all menu items
const menuItems = document.querySelectorAll('.nav__link');

// Add click event listener to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Uncheck the menu toggle checkbox to close the menu
    document.getElementById('menu-toggle').checked = false;
  });
});
// Google Analytics Tracking Code
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XBSDJ7VT9Q');



