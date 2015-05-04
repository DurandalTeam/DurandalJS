/**
 * Created by dxhao on 4/22/2015.
 */

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        friends: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./localstorage/friends.json",function(datajson){
                var friends_suggestion=[];

                //return Math.random() * (max-min) + min;
                x = Math.round(Math.random() * (datajson.friends.data.length-4));
                // get the random obj and next of its
                friends_suggestion[0] = datajson.friends.data[x];
                friends_suggestion[1] = datajson.friends.data[x+1];
                friends_suggestion[2] = datajson.friends.data[x+2];

                that.friends(friends_suggestion);
            });
            return;
        },
        search: function(){
            //return app.showDialog("Add friend not implement...");
            return app.showMessage("Add friend not implement...");
        }
        /*canDeactivate: function () {
            //the router's activator calls this function to see if it can leave the screen
            return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
        }*/
    };
});
