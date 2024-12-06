/**
 * @file
 * Ontario.ca Language Cookie settings
 */

/* Setting the language cookie. */
const langLink = document.querySelectorAll('.language-link');

langLink.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the link from redirecting

    const lang = link.getAttribute('hreflang');
    const expirationDate = new Date();
    expirationDate.setDate(new Date().getDate() + 400);

    // `path=/` means the cookie will be valid for all pages on the website.
    document.cookie = 'lang=' + lang + '; expires=' + expirationDate.toUTCString() + '; path=/';
    window.location.href = link.href;
  });
});
