define(['plugins/http', 'durandal/app', 'knockout','jquery'], function (http, app, ko, $){
    return{
        groups: ko.observableArray([]),

        activate :function(){

          var that = this;

          $.getJSON('app/dataModel/groups.json', function(datalocal){
            var group_suggestion = [];

            // random in range
            function randomRange(min,max)
            {
              return Math.random() * (max-min) + min;
            }

            // get random a number in range of group suggestion in json
            x = Math.round(randomRange(0, datalocal.groups.data.length-2));

            // get the random obj and next of its
            group_suggestion[0] = datalocal.groups.data[x];
            group_suggestion[1] = datalocal.groups.data[x+1];
            
            group_suggestion[0].member_request_count = group_suggestion[0].member_request_count + " Member";
            group_suggestion[1].member_request_count = group_suggestion[1].member_request_count + " Member";

            // set group_suggestion = observableArray groups
            that.groups(group_suggestion);

          }).error(function(jqXhr, textStatus, error) {
              alert("ERROR: " + textStatus + ", " + error);
          });
        }
    }
});
