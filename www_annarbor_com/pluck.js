window.a2p = (function () {
	var commentCountQueue, getCommentCountsComplete, getMostCommentedArticlesComplete, getFullDayName, getFullMonthName, getTimeString, getRelativeOrAbsoluteDateString;
	commentCountQueue = [];

	getCommentCountsComplete = function (responses) {
		var i, r, articleKey, commentCount, phrase;
		for (i = 0; i < responses.length; i += 1) {
			r = responses[i];
			if (r.Article && r.Article.Comments.NumberOfComments) {
				articleKey = r.Article.ArticleKey.Key;
				commentCount = r.Article.Comments.NumberOfComments;
				phrase = commentCount > 1 ? ' Comments' : ' Comment';
				$('.comment_count_' + articleKey).html(
					'<span>' +
						commentCount +
						'<span class="comments-words">' + phrase + '</span>' +
					'</span>'
				);
			}
		}
	};
    
	getMostCommentedArticlesComplete = function (responses) {
		var content, activeDiscussionsMarkup, i;
		content = responses[0].DiscoveredContent;
		content.sort(function (a, b) {
			return b.Comments.NumberOfComments - a.Comments.NumberOfComments;
		});
		activeDiscussionsMarkup = '';
		for (i = 0; i < content.length; i += 1) {
			activeDiscussionsMarkup +=
				'<div class="article clearfix">' +
					'<div class="count">' + 
						content[i].Comments.NumberOfComments + 
					'</div>' +
					'<div class="headline">'+
						'<a href="' + content[i].Url + '" class="scTrackLink:headline">' +
							content[i].Title + 
						'</a>' +
					'</div>' +
				'</div>';
		}
		$('#active_discussions').html(activeDiscussionsMarkup);
	};
            
    getFullDayName = function (numericalDay) {
        var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfTheWeek[numericalDay - 1];
    };
    
    getFullMonthName = function (numericalMonth) {
        var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return month[numericalMonth - 1];
    };
    
    getTimeString = function (date) {
        var hours, half_of_day, minutes;
        hours = date.getHours();
        half_of_day = hours > 12 ? 'pm' : 'am';
        hours = hours > 12 ? hours - 12 : hours == 0 ? 12 : hours;
        minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        return '' + hours + ':' + minutes + half_of_day;           
    };
    
    getRelativeOrAbsoluteDateString = function (date) {
        var difference_in_days = Date.today().getDayOfYear() - date.getDayOfYear();
        if (difference_in_days <= 1) {
            return (difference_in_days == 0 ? 'Today at ' : 'Yesterday at ') + getTimeString(date);
        }
        return getTimeString(date) + ' on ' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    };

	return {
		addEntryIdToCommentCountQueue: function (entryId) {
			if (entryId != 0) {
				commentCountQueue.push(entryId);
			}
		},
        
		displayCommentCounts: function () {
			var articleRequests, i, entryId;
			articleRequests = [];
			for (i = 0; i < commentCountQueue.length; i += 1) {
				entryId = commentCountQueue[i];
				articleRequests.push(new PluckSDK.ArticleRequest({
					ArticleKey: new PluckSDK.ExternalResourceKey({
						Key: entryId
					})
				}));
			}
			if (articleRequests.length) {
				PluckSDK.SendRequests(articleRequests, getCommentCountsComplete);
			}
		},
        
		displayMostCommentedArticles: function () {
			PluckSDK.SendRequests([
				new PluckSDK.DiscoverContentActionRequest({
					Type: PluckSDK.ContentType.Article,
					Activity: PluckSDK.DiscoveryActivity.Commented,
					MaximumNumberOfDiscoveries: 6,
					Age: 1,
					Sections: [new PluckSDK.DiscoverySection({Name: 'all'})],
					Categories: [new PluckSDK.DiscoveryCategory({Name: 'all'})],
					LimitToContributors: ['All']
				})
			], getMostCommentedArticlesComplete);
		},
        
        getUserComments: function (userId, template) {
            function userCommentsCallback (responses, template) {      
                var buffer, comments, userComments, i, comment, timestamp, article, contents;
                if (!responses || (responses.length <= 0) || (responses[0].ResponseStatus.StatusCode != PluckSDK.ResponseStatusCode.OK)) {
                    return null;
                }
                
                userComments = responses[0].Items;
                if (userComments.length <= 0) {
                    return null; //Add a "blank" comment?
                }
                
                buffer = [];
                comments = $("#comments_stream");
                for (i = 0; i < userComments.length; i++) {      
                    if (userComments[i].Activity.ContentBlockingState == PluckSDK.ContentBlockingEnum.BlockedByAdmin) { continue; }
                    template_data = {
                        timestamp: getRelativeOrAbsoluteDateString(userComments[i].Activity.PostedAtTime),
                        article_url: userComments[i].Url,
                        article_title: userComments[i].Title,
                        comment_body: userComments[i].Activity.Body,
                    }; 

                    $(template(template_data)).appendTo(comments);
                }
                
            }
            var commentsPageRequest, requests;
            commentsPageRequest = new PluckSDK.UserCommentsPageRequest();
            commentsPageRequest.CommentsOnly = true;
            commentsPageRequest.IncludeDeletedComments = false;
            commentsPageRequest.ItemsPerPage = 10;
            commentsPageRequest.OneBasedOnPage = 1;
            commentsPageRequest.SortType = PluckSDK.TimestampSort;
            commentsPageRequest.UserKey = new PluckSDK.UserKey();
            commentsPageRequest.UserKey.Key = userId;
            
            requests = [];	//new array
            requests.push(commentsPageRequest);
            PluckSDK.SendRequests(requests, function(response){ userCommentsCallback(response, template); });
        }
        
    };
}());
