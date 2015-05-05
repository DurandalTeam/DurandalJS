
define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        feeds: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./app/dataModel/commentfeed.json",function(datajson){
                that.feeds(datajson.feed.data);
            });

        }
    };
});