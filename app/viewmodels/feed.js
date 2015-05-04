define(['plugins/http', 'durandal/app', 'knockout'], function(http, app, ko) {
    return {
        feeds: ko.observableArray([]),
        cmtNumberShow: 3,
        activate: function() {
            var that = this;
            $.getJSON("app/dataModel/feed.json", function(datajson) {
                var feedContent = datajson.feed.data;
                /*
                 * Calculating view comment
                 * If comments's length is greater than 3, then show 3 comment and hide 1
                 */
                for (var i = 0, l = feedContent.length; i < l; i++) {
                    var cmtContent = feedContent[i].comments;
                    if (typeof cmtContent != "undefined" && cmtContent.data.length > that.cmtNumberShow) {
                        cmtContent['remainCmt'] = cmtContent.data.length - that.cmtNumberShow;
                    }
                }
                that.feeds(feedContent);
                console.debug("FeedData %o", feedContent);
            });
            return;
        }
    };
});