/**
 * Created by dxhao on 4/22/2015.
 */

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        friends: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./localstorage/friends.json",function(datajson){
                that.friends(datajson.friends.data);
            });
            return;
        },
        search: function(){
            //return app.showDialog("Add friend not implement...");
            return app.showMessage("Add friend not implement...");
        },
        canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }
    };
});