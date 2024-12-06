(function (amplify) {
    window.OptanonWrapper = function () {
        amplify.publish('optanon:inited');

        Optanon.OnConsentChanged(function (e) {
            amplify.publish('optanon:consentchanged', e);
        });
    }
})(amplify);