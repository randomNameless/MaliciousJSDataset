'use strict';

//use self instead of this

/**
 * Constructor
 */
var HistoryManager = function () {
    var self = this;

    self.MAX_PRICE = 100;
    self.MAX_BADGE = 10;

    self.storage = null;
    self.history = location.hostname.indexOf('history.') === 0;
    self.domain  = 'history.kakaku.com';
};

/**
 * Establish connection
 * 
 * @param bool force Force connection
 */
HistoryManager.prototype.connect = function(force) {
    var self = this;

    if (self.storage === null) {
        self.storage = new LocalStorageClient();
    }
    if (!self.history) {
        return Promise.reject('Disallow domain');
    }
    var connection = self.storage.onConnect();
    if (force) return connection;
    return connection.then(function () {
        return self.storage.get(StorageConstant.History.Disabled);
    }).then(function (disabled) {
        if (JSON.parse(disabled || 'false')) {
            return Promise.reject('History disabled');
        } else {
            return connection;
        }
    });
};

/**
 * Disable history
 * 
 * @param bool disabled
 */
HistoryManager.prototype.setDisabled = function (disabled) {
    var self = this;

    return self.connect(true).then(function () {
        if (disabled) {
            return self.storage.set(StorageConstant.History.Disabled, true);
        } else {
            return self.storage.del(StorageConstant.History.Disabled);
        }
    })['catch'](function (err) {
    });
};

/**
 * Clear histories
 */
HistoryManager.prototype.clear = function () {
    var self = this;

    return self.connect().then(function () {
        return Promise.all([
            self.storage.del(StorageConstant.History.Price),
            self.storage.del(StorageConstant.History.Badge),
            self.storage.del(StorageConstant.History.Update),
            self.storage.del(StorageConstant.History.Merged)
        ])['catch'](function (err) {
        });
    });
};

/**
 * Get histories
 * 
 * @return array
 */
HistoryManager.prototype.getHistories = function () {
    var self = this;

    return self.connect().then(function () {
        return self.storage.get(StorageConstant.History.Price);
    }).then(function (his_prices) {
        return JSON.parse(his_prices || '[]');
    })['catch'](function (err) {
        return [];
    });
};

/**
 * Get badges
 * 
 * return array
 */
HistoryManager.prototype.getBadges = function () {
    var self = this;

    return self.connect().then(function () {
        return self.storage.get(StorageConstant.History.Badge);
    }).then(function (his_badges) {
        return JSON.parse(his_badges || '[]');
    })['catch'](function (err) {
        return [];
    });
};

/**
 * Get updated
 * 
 * return Date
 */
HistoryManager.prototype.getUpdated = function () {
    var self = this;

    return self.connect().then(function () {
        return self.storage.get(StorageConstant.History.Update);
    }).then(function (his_updated) {
        return new Date(his_updated || null);
    })['catch'](function (err) {
        return null;
    });
};

/**
 * Get merged
 * 
 * return Date
 */
HistoryManager.prototype.getMerged = function () {
    var self = this;

    return self.connect().then(function () {
        return self.storage.get(StorageConstant.History.Merged);
    }).then(function (his_merged) {
        return new Date(his_merged || null);
    })['catch'](function (err) {
        return null;
    });
};

/**
 * Get disabled
 * 
 * return Boolean
 */
HistoryManager.prototype.getDisabled = function () {
    var self = this;

    return self.connect(true).then(function () {
        return self.storage.get(StorageConstant.History.Disabled);
    }).then(function (his_disabled) {
        return !!JSON.parse(his_disabled || 0);
    })['catch'](function (err) {
        return null;
    });
};

/**
 * Get push
 * 
 * return object
 */
HistoryManager.prototype.getPush = function () {
    var self = this;

    return self.connect().then(function () {
        return self.storage.get(StorageConstant.History.Push);
    }).then(function (his_push) {
        var result = JSON.parse(his_push || '{}');
        if (Object.prototype.toString.call(result) !== '[object Object]') result = {}; //single only
        return result;
    })['catch'](function (err) {
        console.log('HistoryManager.getPush', err);
        return {};
    });
};

/**
 * Set history
 * 
 * @param string product
 * @param int? price
 */
HistoryManager.prototype.setHistory = function (product, price) {
    var self = this;

    if (!self.history) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://' + self.domain + '/history/parts.aspx?type=additem&version=v2&value=' + encodeURIComponent(product));
        iframe.setAttribute('width', 1);
        iframe.setAttribute('height', 1);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('noresize', 'noresize');
        iframe.setAttribute('scrolling', 'no');
        document.getElementsByTagName('body')[0].appendChild(iframe);
        return;
    }
    price = isNaN(parseInt(price, 10)) || price == 0 ? null : +price;
    return self.getHistories().then(function (his_prices) {
        var index = _.findIndex(his_prices, function (item) { return item.product === product; });
        if (index === -1) {//INSERT
            var item = {
                product: product,
                price: price,
                init: true,
                view: new Date().getTime()
            };
        } else {//UPDATE
            var item = his_prices[index];
            item.price = price;
            item.init = true;
            item.view = new Date().getTime();
            his_prices.splice(index, 1);
        }
        his_prices.unshift(item);
        return self.storage.set(StorageConstant.History.Price, JSON.stringify(his_prices.slice(0, self.MAX_PRICE)));
    })['catch'](function (err) {
    });
};


HistoryManager.prototype.setHistories = function (his_prices) {
    var self = this;

    return self.storage.set(
        StorageConstant.History.Price,
        JSON.stringify(his_prices.slice(0, self.MAX_PRICE))
    );
}

/**
 * Set badges
 * 
 * @param array
 */
HistoryManager.prototype.setBadges = function (his_badges) {
    var self = this;

    return self.storage.set(
        StorageConstant.History.Badge,
        JSON.stringify(his_badges.slice(0, self.MAX_BADGE))
    );
}

/**
 * Set updated
 * 
 * @param Date date
 */
HistoryManager.prototype.setUpdated = function (date) {
    var self = this;

    return self.connect().then(function () {
        return self.storage.set(StorageConstant.History.Update, date);
    })['catch'](function (err) {
    });
};

/**
 * Set merged
 * 
 * @param Date date
 */
HistoryManager.prototype.setMerged = function (date) {
    var self = this;

    return self.connect().then(function () {
        return self.storage.set(StorageConstant.History.Merged, date);
    })['catch'](function (err) {
    });
};

/**
 * Set push
 * 
 * @param object his_push
 */
HistoryManager.prototype.setPush = function (his_push) {
    var self = this;

     return self.storage.set(
        StorageConstant.History.Push,
        JSON.stringify(his_push)
    );
};

/**
 * Remove history
 * 
 * @param string product
 */
HistoryManager.prototype.removeHistory = function (product) {
    var self = this;

    return self.getHistories().then(function (his_prices) {
        var index = _.findIndex(his_prices, function (item) { return item.product === product; });
        if (index !== -1) {
            his_prices.splice(index, 1);
        }
        return self.storage.set(StorageConstant.History.Price, JSON.stringify(his_prices));
    })['catch'](function (err) {
    });
};

/**
 * Remove badge
 * 
 * @param string product
 */
HistoryManager.prototype.removeBadge = function (product) {
    var self = this;

    return self.getBadges().then(function (his_badges) {
        var index = _.findIndex(his_badges, function (item) { return item.product === product; });
        if (index !== -1) {
            his_badges.splice(index, 1);
        }
        return self.storage.set(StorageConstant.History.Badge, JSON.stringify(his_badges));
    })['catch'](function (err) {
    });
};
var historyManager = new HistoryManager();
