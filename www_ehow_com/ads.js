/*  Attempt to place a div on the document.
    if adblock is enabled, ads.js shouldnt be called
    and this div will NOT be added.
    derived from https://www.detectadblock.com/
*/

function attachDiv() {
    var e = document.createElement('div');
    e.id = 'detect-adblock-div';
    e.style.display = 'none';
    document.body.appendChild(e);
}

if(document.readyState!='loading') {
    attachDiv()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', attachDiv)
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState!='loading') {
        attachDiv()
      }
    })
  }
