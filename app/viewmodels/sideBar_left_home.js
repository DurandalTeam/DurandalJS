define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko){


    return {

        myGroup: ko.observableArray([]),
        myApps: ko.observableArray([]),
        myname: ko.observable(),
        picture: ko.observable(),

        activate :function(){
            var that = this;

            $.getJSON("app/dataModel/information.json", function(infData){

                that.myname (infData.name) ;
                that.picture (infData.photo );
            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });



            $.getJSON("app/dataModel/my-group.json", function(grData){

                that.myGroup (grData.groups.data) ;
            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });

            $.getJSON("app/dataModel/myApps.json", function(appData){

                that.myApps (appData.myApps.data) ;
            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });

        }
    };

});