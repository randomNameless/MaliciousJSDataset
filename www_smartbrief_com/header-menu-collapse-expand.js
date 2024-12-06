/* add on click action for the top right menu icon (tablet and mobile) */
document.getElementsByClassName("header-menu-collapsed")[0].addEventListener('click', function() {
    this.classList.toggle("header-menu-close");
    const dropdown = document.getElementsByClassName("header-menu-dropdown")[0];
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
});

/* add mouseup action for the "advertise" header */
const advertiseToggles = document.getElementsByClassName("advertise-dropdown-wrapper");
Array.prototype.forEach.call(advertiseToggles, function(advertiseToggle) {
    advertiseToggle.addEventListener('mouseup', function() {
        this.classList.toggle("advertise-dropdown-wrapper-active");
        const dropdowns = document.getElementsByClassName("advertise-dropdown");
        Array.prototype.forEach.call(dropdowns, function(dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        });
    });
});