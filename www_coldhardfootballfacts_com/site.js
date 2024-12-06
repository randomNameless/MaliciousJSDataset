$(document).ready(function () {
    initNavbars();
    initToastr();
    initVideoOverlays();
    initValidationIcons();
});

function initNavbars() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });

    cM.activeLi(viewBag.title);
}

function initToastr() {
    //    toastr.options.positionClass = 'toast-bottom-right';
    toastr.options.closeButton = true;


    viewBag.toast.forEach(function (toast) {

//        toastr[toast.function](toast.message, toast.title);

        switch (toast.function) {
            case "success":
                toastr.success(`${toast.title}: ${toast.message}`);

                break;

            case "error":
                toastr.error(`${toast.title}: ${toast.message}`);

                break;

            default:
                toastr.info(`${toast.title}: ${toast.message}`);
                break;
        }
    });
}

function initVideoOverlays() {
    $('video', '.video-container').on('play', function () {
        $('.video-overlay', $(this).parent('.video-container')).remove();
    });

    $('.video-overlay').on('click', function () {
        $('video', $(this).parent('.video-container'))[0].play();
    });
}

function initValidationIcons() {
    var iconHtml = '<i class="fa fa-exclamation-circle text-danger"></i>&nbsp;';

    $('.validation-summary-errors li').prepend(iconHtml);
    $('.field-validation-error').prepend(iconHtml);
}

$.extend({
    postJSON: function (url, data) {
        return $.ajax({
            url: url,
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data),
        });
    },

    // doesn't work..?
    scrollUp: function (pixelDistance, duration, callback) {
        $('html, body').animate({ scrollTop: $(window).scrollTop() - pixelDistance }, duration, callback);
    },

    scrollDown: function (pixelDistance, duration, callback) {
        $('html, body').animate({ scrollTop: $(window).scrollTop() + pixelDistance }, duration, callback);
    }
});

Object.assign(String.prototype, {
    toSlug: function () {
        // this is not as thorough as the equivalent in Domain.StringExtensions however it'll do for now.
        return this.replace(/[^a-zA-Z0-9 ]+/g, '').replace(' ', '-').toLowerCase();
    }
});

function fadeInElement($element, autoScroll, callback) {
    var speed = 'slow';

    var padding = parseInt($element.css('padding').match(/\d+/)[0]);
    var borderWidth = parseInt($element.css('border-width').match(/\d+/)[0]);

    var height = parseInt($element.height()) + (2 * padding);
    var marginTop = parseInt($element.css('margin-top').match(/\d+/)[0]);
    var marginBottom = parseInt($element.css('margin-bottom').match(/\d+/)[0]);

    $element.css({ height: 0, marginTop: 0, marginBottom: 0, padding: 0, opacity: 0 })
        .animate({ height: height, marginTop: marginTop, marginBottom: marginBottom, padding: padding, opacity: 1 }, speed, function () {
            $(this).css('height', 'auto');

            if (callback !== undefined) {
                callback($(this));
            }
        });

    if (autoScroll) {
        $.scrollDown(height + (2 * borderWidth) + marginTop + marginBottom, speed);
    }
}

function fadeOutElement($element, autoScroll, remove, callback) {
    var speed = 'slow';

    var padding = parseInt($element.css('padding').match(/\d+/)[0]);
    var borderWidth = parseInt($element.css('border-width').match(/\d+/)[0]);

    var height = parseInt($element.height()) + (2 * padding);
    var marginTop = parseInt($element.css('margin-top').match(/\d+/)[0]);
    var marginBottom = parseInt($element.css('margin-bottom').match(/\d+/)[0]);

    $element.css({ height: height, marginTop: marginTop, marginBottom: marginBottom, padding: padding, opacity: 1 })
        .animate({ height: 0, marginTop: 0, marginBottom: 0, padding: 0, opacity: 0 }, speed, function () {
            if (remove) {
                $(this).remove();
            }

            callback();
        });

    if (autoScroll) {
        $.scrollUp(height + (2 * borderWidth) + marginTop + marginBottom, speed);
    }
}

function updateStatus($article) {
    var status = $article.attr('data-status');
    var statusDate = $article.attr('data-status-date');

    if (statusDate !== undefined) {
        var statusDateMoment = moment(statusDate).tz(cM.timeZone);

        $('.status-date', $article)
            .html(statusDateMoment.format(cM.formats.date))
            .attr('title', statusDateMoment.from(new Date()));

        if (status === 'Scheduled') {
            $('.status-date', $article).css('font-style', 'italic');
        }
    }
    else {
        $('.status-date', $article)
            .html('Draft')
            .removeAttr('title');
    }
}

var cM = {
    timeZone: "EST5EDT", // possibilities (pick one that's DST aware): https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

    // these values must be either '/something' or just ''; never '/'.
    appRoot: '',
    apiRoot: '/api',
    imagePlaceholder: '/img/placeholder.png',

    formats: {
        date: 'MMMM D, YYYY',
        time: 'hh:mm A',
        dateTime: 'MMMM D, YYYY - hh:mm A'
    },

    urls: {
        areas: {
            dashboard: {
                articles: {
                    index: function () {
                        return [cM.appRoot, 'dashboard', 'articles'].join('/');
                    },

                    edit: function (slug) {
                        return [cM.appRoot, 'dashboard', 'articles', slug, 'edit'].join('/');
                    }
                }
            }
        },

        articles: {
            show: function (slug) {
                return [cM.appRoot, 'articles', slug].join('/');
            }
        },

        categories: {
            show: function (slug) {
                return [cM.appRoot, 'categories', slug].join('/');
            }
        },

        tags: {
            show: function (slug) {
                return [cM.appRoot, 'tags', slug].join('/');
            }
        }
    },

    apiUrls: {
        // some cM API methods which pertain only to authorised activities should be in area.js or [areaname].js

        oembed: {
            twitter: function (tweetId) {
                return 'https://publish.twitter.com/oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F'
                    + tweetId + '&callback=?';
            },

            facebookPost: function (path) {
                return 'https://www.facebook.com/plugins/post/oembed.json/?omitscript=1&url=https%3A%2F%2Fwww.facebook.com'
                    + path.replace('/', '%2F') + '&callback=?';
            },

            facebookVideo: function (path) {
                return 'https://www.facebook.com/plugins/video/oembed.json/?omitscript=1&url=https%3A%2F%2Fwww.facebook.com'
                    + path.replace('/', '%2F') + '&callback=?';
            }
        },

        articles: {
            submit: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'submit'].join('/');
            },

            publish: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'publish'].join('/');
            },

            share: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'share'].join('/');
            },

            setAuthor: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'setAuthor'].join('/');
            },

            addView: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'addView'].join('/');
            },

            getCategories: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'getCategories'].join('/');
            },

            setCategories: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'setCategories'].join('/');
            },

            getTags: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'getTags'].join('/');
            },

            setTags: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'setTags'].join('/');
            },

            getFeeds: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'getFeeds'].join('/');
            },

            setFeeds: function (slug) {
                return [cM.apiRoot, 'articles', slug, 'setFeeds'].join('/');
            },

            search: function (term) {
                return [cM.apiRoot, 'articles', 'search', term].join('/');
            },

            getLatest: function (page) {
                return [cM.apiRoot, 'articles', 'latest?page=' + page].join('/');
            },

            getTrending: function (page) {
                return [cM.apiRoot, 'articles', 'trending?page=' + page].join('/');
            }
        },

        assignments: {
            claim: function (slug) {
                return [cM.apiRoot, 'assignments', slug, 'claim'].join('/');
            },

            relinquish: function (slug) {
                return [cM.apiRoot, 'assignments', slug, 'relinquish'].join('/');
            }
        },

        categories: {
            find: function (slug) {
                return [cM.apiRoot, 'categories', slug].join('/');
            },

            getHierarchy: function (flatten) {
                return [cM.apiRoot, 'categories', 'getHierarchy'].join('/')
                    + '?flatten=' + !!flatten;
            },

            getSiblings: function (slug) {
                return [cM.apiRoot, 'categories', slug, 'getSiblings'].join('/');
            },

            getArticles: function (slug, page) {
                return [cM.apiRoot, 'categories', slug, 'getArticles?page=' + page].join('/');
            }
        },

        facebook: {
            getNonExpiringPageAccessTokens: function (userAccessToken) {
                return [cM.apiRoot, 'facebook', 'getNonExpiringPageAccessTokens?userAccessToken=' + userAccessToken].join('/');
            }
        },

        feeds: {
            list: function (page) {
                return [cM.apiRoot, 'feeds'].join('/');
            }
        },

        getty: {
            search: function (term, page) {
                return [cM.apiRoot, 'getty', 'search', term + '?page=' + page].join('/');
            },

            purchase: function (assetId) {
                return [cM.apiRoot, 'getty', assetId, 'purchase'].join('/');
            }
        },

        images: {
            list: function (page) {
                return [cM.apiRoot, 'images?page=' + page].join('/');
            },

            upload: function () {
                return [cM.apiRoot, 'images'].join('/');
            }
        },

        pollResponses: {
            add: function () {
                return [cM.apiRoot, 'articlePollResponses', 'new'].join('/');
            },

            list: function (questionId) {
                return [cM.apiRoot, 'articlePollResponses?questionId=' + questionId].join('/');
            }
        },

        profiles: {
            getArticles: function (slug, page) {
                return [cM.apiRoot, 'profiles', slug, 'getArticles?page=' + page].join('/');
            }
        },

        stripe: {
            coupon: function (code) {
                return [cM.apiRoot, 'stripe', 'coupon?code=' + code].join('/');
            }
        },

        subscriptions: {
            add: function () {
                return [cM.apiRoot, 'subscriptions', 'new'].join('/');
            },

            remove: function (email) {
                return [cM.apiRoot, 'subscriptions', email, 'delete'].join('/');
            }
        },

        tags: {
            add: function () {
                return [cM.apiRoot, 'tags', 'new'].join('/');
            },

            remove: function (slug) {
                return [cM.apiRoot, 'tags', slug, 'delete'].join('/');
            },

            getArticles: function (slug, page) {
                return [cM.apiRoot, 'tags', slug, 'getArticles?page=' + page].join('/');
            }
        },

        userAssignments: {
            search: function (term) {
                return [cM.apiRoot, 'userAssignments', 'search', term].join('/');
            },

            associate: function () {
                return [cM.apiRoot, 'userAssignments', 'associate'].join('/');
            },

            disassociate: function () {
                return [cM.apiRoot, 'userAssignments', 'disassociate'].join('/');
            }
        },

        users: {
            find: function (slug) {
                return [cM.apiRoot, 'users', slug].join('/');
            },

            search: function (term) {
                return [cM.apiRoot, 'users', 'search', term].join('/');
            },
        }
    },

    oembed: {
        twitter: function (url) {
            var tweetId = url.match(/\d+$/)[0];

            return $.getJSON(cM.apiUrls.oembed.twitter(tweetId));
        },

        facebook: function (url) {
            var path = url.replace('https://www.facebook.com', '');

            return $.getJSON(/\/video(s\/|\.php)/.test(url)
                ? cM.apiUrls.oembed.facebookVideo(path)
                : cM.apiUrls.oembed.facebookPost(path));
        }
    },

    articles: {
        submit: function (slug, submitted) {
            return $.post(cM.apiUrls.articles.submit(slug), {
                submitted: submitted
            });
        },

        publish: function (slug, published) {
            return $.post(cM.apiUrls.articles.publish(slug), {
                published: published
            });
        },

        share: function (slug) {
            return $.get(cM.apiUrls.articles.share(slug));
        },

        setAuthor: function (slug, authorSlug) {
            return $.postJSON(cM.apiUrls.articles.setAuthor(slug), authorSlug);
        },

        addView: function (slug) {
            return $.post(cM.apiUrls.articles.addView(slug));
        },

        getCategories: function (slug) {
            return $.get(cM.apiUrls.articles.getCategories(slug));
        },

        setCategories: function (slug, categorySlugs) {
            return $.postJSON(cM.apiUrls.articles.setCategories(slug), categorySlugs);
        },

        getTags: function (slug) {
            return $.get(cM.apiUrls.articles.getTags(slug));
        },

        setTags: function (slug, slugs) {
            return $.postJSON(cM.apiUrls.articles.setTags(slug), slugs);
        },

        getFeeds: function (slug) {
            return $.get(cM.apiUrls.articles.getFeeds(slug));
        },

        setFeeds: function (slug, slugs) {
            return $.postJSON(cM.apiUrls.articles.setFeeds(slug), slugs);
        },

        search: function (term) {
            return $.get(cM.apiUrls.articles.search(term));
        },

        getLatest: function (page) {
            return $.get(cM.apiUrls.articles.getLatest(page));
        },

        getTrending: function (page) {
            return $.get(cM.apiUrls.articles.getTrending(page));
        }
    },

    assignments: {
        claim: function (slug) {
            return $.post(cM.apiUrls.assignments.claim(slug));
        },

        relinquish: function (slug) {
            return $.post(cM.apiUrls.assignments.relinquish(slug));
        }
    },

    categories: {
        find: function (slug) {
            return $.get(cM.apiUrls.categories.find(slug));
        },

        getHierarchy: function (flatten) {
            return $.get(cM.apiUrls.categories.getHierarchy(flatten));
        },

        getSiblings: function (slug) {
            return $.get(cM.apiUrls.categories.getSiblings(slug));
        },

        getArticles: function (slug, page) {
            return $.get(cM.apiUrls.categories.getArticles(slug, page));
        }
    },

    facebook: {
        getNonExpiringPageAccessTokens: function (userAccessToken) {
            return $.get(cM.apiUrls.facebook.getNonExpiringPageAccessTokens(userAccessToken));
        }
    },

    feeds: {
        list: function () {
            return $.get(cM.apiUrls.feeds.list());
        }
    },

    getty: {
        search: function (term, page) {
            return $.get(cM.apiUrls.getty.search(term, page));
        },

        purchase: function (assetId) {
            return $.get(cM.apiUrls.getty.purchase(assetId));
        }
    },

    images: {
        list: function (page) {
            return $.get(cM.apiUrls.images.list(page));
        },

        upload: function (image) {
            var data = new FormData();

            data.append("file", image);

            return $.ajax({
                type: "POST",
                url: cM.apiUrls.images.upload(),
                data: data,
                contentType: false,
                processData: false
            });
        }
    },

    pollResponses: {
        add: function (questionId, answerId) {
            return $.postJSON(cM.apiUrls.pollResponses.add(), {
                "questionId": questionId,
                "answerId": answerId
            });
        },

        list: function (questionId) {
            return $.get(cM.apiUrls.pollResponses.list(questionId));
        }
    },

    profiles: {
        getArticles: function (slug, page) {
            return $.get(cM.apiUrls.profiles.getArticles(slug, page));
        }
    },

    stripe: {
        coupon: function (code) {
            return $.get(cM.apiUrls.stripe.coupon(code));
        }
    },

    subscriptions: {
        add: function (email) {
            return $.post(cM.apiUrls.subscriptions.add(), {
                email: email
            });
        },

        remove: function (email) {
            return $.ajax({
                type: "DELETE",
                url: cM.apiUrls.subscriptions.remove(email)
            });
        }
    },

    tags: {
        add: function (slug) {
            return $.post(cM.apiUrls.tags.add(), {
                slug: slug
            });
        },

        remove: function (slug) {
            return $.ajax({
                type: "DELETE",
                url: cM.apiUrls.tags.remove(slug)
            });
        },

        getArticles: function (slug, page) {
            return $.get(cM.apiUrls.tags.getArticles(slug, page));
        }
    },

    userAssignments: {
        search: function (term) {
            return $.get(cM.apiUrls.userAssignments.search(term));
        },

        associate: function (articleSlug, assignmentSlug) {
            return $.post(cM.apiUrls.userAssignments.associate(), {
                articleSlug: articleSlug,
                assignmentSlug: assignmentSlug
            });
        },

        disassociate: function (articleSlug, assignmentSlug) {
            return $.post(cM.apiUrls.userAssignments.disassociate(), {
                articleSlug: articleSlug,
                assignmentSlug: assignmentSlug
            });
        }
    },

    users: {
        find: function (slug) {
            return $.get(cM.apiUrls.users.find(slug));
        },

        search: function (term) {
            return $.get(cM.apiUrls.users.search(term));
        },
    },

    templates: {
        add: function (name, src, callback) {
            $.get(src + '?v=' + moment().format('YYYYMMDDhh'), function (html) {
                callback($.templates(name, html));
            });
        },

        render: function (name, data) {
            return $.templates[name].render(data);
        }
    },

    ajaxFail: function (jqXHR, textStatus, errorThrown) {
        toastr.clear();
        toastr.error(jqXHR.responseText || '(No details provided)', 'Error ' + jqXHR.status + ': ' + jqXHR.statusText);
    },

    activeLi: function (forTitle) {
        if (forTitle === undefined) {
            return $('li[class*=active]').data('for-title');
        }

        $('li[data-for-title="' + forTitle + '"]').addClass('active');
    },

    // should probably be String.prototype.slugify
    slugify: function (name, maxLength) {
        maxLength = maxLength || 48;

        var slug = '';

        var words = name.toLowerCase().match(/[\w]+/g);

        do {
            slug += (words.shift() || '') + "-";
        }
        while (slug.length < maxLength);

        if (slug.length > maxLength) {
            slug = slug.substring(0, maxLength);
        }

        return slug.replace(/-+$/, '');
    },

    // should probably be String.prototype.truncate
    truncate: function (name, maxLength) {
        maxLength = maxLength || 50;
        return name.length < maxLength ? name : name.substring(0, maxLength - 3) + '...';
    },

    toastrValidation: function () {
        var errors = $('li', '.validation-summary-errors.use-toastr-instead');

        $.each(errors, function () {
            toastr.error($(this).html());
        });
    }
};

var cHFF = {
    apiUrls: {
        stats: {
            update: function (statName) {
                return [cM.apiRoot, 'stats', statName, 'update'].join('/');
            }
        }
    },

    stats: {
        update: function (statName) {
            return $.get(cHFF.apiUrls.stats.update(statName));
        },

        powerRankings: {
            name: 'Power Rankings',
            slug: 'power-rankings'
        },

        standings: {
            name: 'Standings',
            slug: 'standings'
        },

        scoreabilities: {
            name: 'Scoreabilities',
            slug: 'scoreabilities'
        },

        bendabilities: {
            name: 'Bendabilities',
            slug: 'bendabilities'
        },

        intelligenceIndices: {
            name: 'Intelligence Indices',
            slug: 'intelligence-indices'
        },

        realPassingYardsPerAttempts: {
            name: 'Real Passing Yds./Attempt',
            slug: 'real-passing-yds-per-attempt'
        },

        defensiveRealPassingYardsPerAttempts: {
            name: 'Defensive Real Passing Yds./Attempt',
            slug: 'defensive-real-passing-yds-per-attempt'
        },

        realQuarterbackRatings: {
            name: 'Real Quarterback Ratings',
            slug: 'real-quarterback-ratings'
        },

        defensiveRealQuarterbackRatings: {
            name: 'Defensive Real Quarterback Ratings',
            slug: 'defensive-real-quarterback-ratings'
        },

        realQuarterbackRatingDifferentials: {
            name: 'Real Quarterback Rating Differentials',
            slug: 'real-quarterback-rating-differentials'
        },

        offensivePasserRatings: {
            name: 'Offensive Passer Ratings',
            slug: 'offensive-passer-ratings'
        },

        defensivePasserRatings: {
            name: 'Defensive Passer Ratings',
            slug: 'defensive-passer-ratings'
        },

        passerRatingDifferentials: {
            name: 'Passer Rating Differentials',
            slug: 'passer-rating-differentials'
        },

        offensiveHogIndices: {
            name: 'Offensive Hog Indices',
            slug: 'offensive-hog-indices'
        },

        defensiveHogIndices: {
            name: 'Defensive Hog Indices',
            slug: 'defensive-hog-indices'
        },

        relativityIndices: {
            name: 'Relativity Indices',
            slug: 'relativity-indices'
        },

        teamYardsIndices: {
            name: 'Team Yards Indices',
            slug: 'team-yards-indices'
        },

        teamYardsConcededIndices: {
            name: 'Team Yards Conceded Indices',
            slug: 'team-yards-conceded-indices'
        },

        teamYardsDifferentials: {
            name: 'Team Yards Differentials',
            slug: 'team-yards-differentials'
        },

        offensiveRusherRatings: {
            name: 'Offensive Rusher Ratings',
            slug: 'offensive-rusher-ratings'
        },

        defensiveRusherRatings: {
            name: 'Defensive Rusher Ratings',
            slug: 'defensive-rusher-ratings'
        },

        rusherRatingDifferentials: {
            name: 'Rusher Rating Differentials',
            slug: 'rusher-rating-differentials'
        },

        turnoverSums: {
            name: 'Turnover Sums',
            slug: 'turnover-sums'
        },

        gameAnalyses: {
            name: 'Game Analyses',
            slug: 'game-analyses'
        },

        victoryCorrelation: {
            name: 'Victory Correlation',
            slug: 'victory-correlation'
        },

        victoryPrediction: {
            name: 'Victory Prediction',
            slug: 'victory-prediction'
        }
    }
};