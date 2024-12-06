(function(ko, amplify, ServerTimeSync) {
    'use strict';

    var Countdown = function(startDate, endDate, expiredCallback) {
        var self = this,
            serverTimeSync;

        this.EVENT_STATUSES = {
            PLANNING: 'PLANNING',
            ACTIVE: 'ACTIVE'
        };

        if (!_.isFinite(startDate) || !_.isFinite(endDate)) {
            return;
        }

        serverTimeSync = new ServerTimeSync();

        this.deltaServerTimestamp = ko.observable(serverTimeSync.getDelta());
        this.currentDateTimestamp = ko.observable((new Date()).getTime() + this.deltaServerTimestamp());
        this.isExpired = ko.observable(false);
        this.isInitialCheck = serverTimeSync.isTimestampSynced();

        this.eventStatus = ko.computed(function() {
            if (startDate > this.currentDateTimestamp()) {
                return this.EVENT_STATUSES.PLANNING;
            } else {
                return this.EVENT_STATUSES.ACTIVE;
            }
        }, this);

        this.totalSecondsLeft = ko.computed(function() {
            var secondsLeft,
                currentDateTimeStamp = this.currentDateTimestamp();

            if (startDate > currentDateTimeStamp) {
                secondsLeft = Math.round(startDate - currentDateTimeStamp);
            } else {
                secondsLeft = Math.round(endDate - currentDateTimeStamp);
            }

            secondsLeft = Math.floor(secondsLeft / 1000);

            if (secondsLeft <= 0 && endDate < currentDateTimeStamp) {
                secondsLeft = 0;

                if (this.isInitialCheck) {
                    clearTimeout(this._timeout);
                    this.isExpired(true);
                    if (expiredCallback) {
                        expiredCallback();
                    }
                }
            }

            this.isInitialCheck = false;

            return secondsLeft;
        }, this);

        this.daysLeft = ko.pureComputed(function() {
            return Math.floor(this.totalSecondsLeft() / (24 * 60 * 60));
        }, this);

        this.daysLeftText = ko.pureComputed(function() {
            return window.ngettext('день', 'дней', this.daysLeft());
        }, this);

        this.hoursLeft = ko.pureComputed(function() {
            return Math.floor(this.totalSecondsLeft() / (60 * 60));
        }, this);

        this.hoursLeftText = function() {
            return window.gettext('ч (часов)');
        };

        this.minutesLeft = ko.pureComputed(function() {
            return Math.floor(this.totalSecondsLeft() / 60) % 60;
        }, this);

        this.minutesLeftText = function() {
            return window.gettext('м (минут)');
        };

        this.secondsLeft = ko.pureComputed(function() {
            return Math.floor(this.totalSecondsLeft() % 60);
        }, this);

        this.secondsLeftText = function() {
            return window.gettext('с (секунд)');
        };

        if (!serverTimeSync.isTimestampSynced()) {
            amplify.subscribe('servertimesync:synced', function(data) {
                self.isInitialCheck = true;
                self.deltaServerTimestamp(data);
                self.recalculateTimeLeft();
            });
        }

        this.recalculateTimeLeft = function() {
            var curDateTS = (new Date()).getTime();

            clearTimeout(this._timeout);
            this._timeout = setTimeout(_.bind(this.recalculateTimeLeft, this), 950);
            this.currentDateTimestamp(curDateTS + this.deltaServerTimestamp());
        };

        if (!this.isExpired()) {
            this.recalculateTimeLeft();
        }
    };

    window.Countdown = Countdown;
})(ko, amplify, ServerTimeSync);