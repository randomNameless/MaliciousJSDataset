window.initGradientEffect = function () {

}

document.addEventListener('DOMContentLoaded', function () {
    
    const extendedTableZoomElements = document.querySelectorAll('.extended-table-zoom');
    if (extendedTableZoomElements && extendedTableZoomElements.length > 0) {

        if (!window.Stickyfill) {
            setTimeout(() => {
                window.Stickyfill.add(extendedTableZoomElements);
            }, 500);
        }
        else {
            window.Stickyfill.add(extendedTableZoomElements);
        }
    }

    const socialMediaSideBarContainerElement = document.querySelectorAll('.social-media-side-bar-container');
    if (socialMediaSideBarContainerElement && socialMediaSideBarContainerElement.length > 0) {
        if (!window.Stickyfill) {
            setTimeout(() => {
                window.Stickyfill.add(socialMediaSideBarContainerElement);
            }, 500);
        }
        else {
            window.Stickyfill.add(socialMediaSideBarContainerElement);
        }
    }
}, false);

window.addEventListener("load", (event) => {

    var selectedLanguage = pnrApplicationSettings.SelectedLocale ?? 'en-US';
    selectedLanguage = selectedLanguage.split('-')[0] ?? 'en';
    
    if (window.Optanon) {
        window.Optanon.changeLanguage(selectedLanguage);
    } else {
        setTimeout(() => {
            window.Optanon?.changeLanguage(selectedLanguage);
        },100)
    }
});