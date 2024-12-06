(function($) {
'use strict';

function CardBanner(options) {
    this.options = $.extend(true, {}, this.defaults, options);
    this.init();
}
CardBanner.prototype.init = function() {
    if (!this.options.bannerSelector || !this.options.videoElSelector) {
        return;
    }

    this.$banner = $(this.options.bannerSelector);
    this.$video = this.$banner.find(this.options.videoElSelector);
    if (!this.$banner.length || !this.$video.length) {
        return;
    }

    this.video = this.$video[0];
    this.isPlaying = false;
    this.playPromise = null;
    this.videoShouldPauseAfterPlaying = false;
    
    this.addEventListeners();
    if (this.options.isAlwaysVideoPreload || this.$banner.css('display') !== 'none') {
        this.video.load();
    }
}
CardBanner.prototype.addEventListeners = function() {
    this.onMouseEnter = this.onMouseenterHandler.bind(this);
    this.onMouseLeave = this.onMouseleaveHandler.bind(this);
    this.onClick = this.onClickHandler.bind(this);
    this.onPlay = this.onPlayHandler.bind(this);

    this.$banner.on('mouseenter', this.onMouseEnter);
    this.$banner.on('mouseleave', this.onMouseLeave);
    this.$banner.on('click', this.onClick);
    this.$video.on('playing', this.onPlay);
}
CardBanner.prototype.playPauseVideo = function(playState) {
    if (playState) {
        this.playPromise = this.video.play();
        if (this.playPromise !== undefined) {
            this.playPromise.then(function() {
                if (this.videoShouldPauseAfterPlaying) {
                    this.videoShouldPauseAfterPlaying = false;
                    this.setIsPlayingState(false);
                    this.video.pause();
                }
                this.playPromise = null;
            }.bind(this))
        }
    } else {
        if (this.isPlaying) {
            this.setIsPlayingState(false);
            this.video.pause();
        } else {
            this.videoShouldPauseAfterPlaying = true;
        }
    }
}
CardBanner.prototype.setIsPlayingState = function(state) {
    this.isPlaying = state;
    this.$banner.toggleClass(this.options.isPlayingClass, this.isPlaying);
}
CardBanner.prototype.onMouseenterHandler = function() {
    this.playPauseVideo(true);
}
CardBanner.prototype.onMouseleaveHandler = function() {
    this.playPauseVideo(false);
}
CardBanner.prototype.onClickHandler = function() {
    this.playPauseVideo(false);
}
CardBanner.prototype.onPlayHandler = function() {
    this.setIsPlayingState(true);
}
CardBanner.prototype.removeEventListeners = function() {
    this.$banner.off('mouseenter', this.onMouseEnter);
    this.$banner.off('mouseleave', this.onMouseLeave);
    this.$banner.off('click', this.onClick);
    this.$video.off('playing', this.onPlay);
}
CardBanner.prototype.destroy = function() {
    this.removeEventListeners();
}

CardBanner.prototype.defaults = {
    isPlayingClass: '',
    isAlwaysVideoPreload: false
}

window.CardBanner = CardBanner;
})(jQuery);