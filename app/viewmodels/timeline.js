define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        feeds: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./app/dataModel/feed.json",function(jsonFeed){
                that.feeds(jsonFeed.feed.data);
            });
            return;
        }
    };
});