(function($, CardBanner) {
'use strict';

function AllNewsWidget(options) {
    const $container = $(options.containerSelector);
    if (!$container.length) {
        return;
    }

    const $showMoreButton = $container.find(options.showMoreButtonSelector),
        classContainerCollapsed = options.classCollapsed,
        classShowButtonLess = options.classMoreButtonLess;

    this.cardBanner = new CardBanner({
        bannerSelector: options.cardBannerSelector,
        videoElSelector: options.cardVideoElSelector,
        isPlayingClass: options.cardIsPlayingClass
    });

    let isNewsCollapsed = true;

    $showMoreButton.on('click', toggleCollapsed);

    function toggleCollapsed() {
        isNewsCollapsed = !isNewsCollapsed;

        $container.toggleClass(classContainerCollapsed, isNewsCollapsed);
        $showMoreButton.toggleClass(classShowButtonLess, !isNewsCollapsed);
    }
}

window.AllNewsWidget = AllNewsWidget;

})(jQuery, CardBanner);