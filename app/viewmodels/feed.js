
define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        feeds: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./app/dataModel/feed.json",function(datajson){
                that.feeds(datajson.feed.data);
            });
            return;
        }/*,
        search: function(){
            //return app.showDialog("Add friend not implement...");
            return app.showMessage("Add friend not implement...");
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }*/
    };
});

