define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    return {
        friends: ko.observableArray([]),

        activate :function(){
            var that = this;

            $.getJSON("./localstorage/friends.json",function(datajson){
                var friends_suggestion=[];
                function randomRange(min,max)
                {
                    return Math.random() * (max-min) + min;
                }

                // get random a number in range of group suggestion in json
                x = Math.round(randomRange(0, datajson.friends.data.length-4));

                // get the random obj and next of its
                friends_suggestion[0] = datajson.friends.data[x];
                friends_suggestion[1] = datajson.friends.data[x+1];
                friends_suggestion[2] = datajson.friends.data[x+2];

                that.friends(friends_suggestion);
            });
            return;
        }
    };
});
