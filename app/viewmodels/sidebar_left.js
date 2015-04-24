define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko){


    return {

        photos: ko.observableArray([]),
        videos: ko.observableArray([]),
        friends: ko.observableArray([]),
        fleng: ko.observable(),
        pleng: ko.observable(),
        vleng: ko.observable(),
        school: ko.observable(),
        lives: ko.observable(),
        froms: ko.observable(),
        born: ko.observable(),

        activate :function(){
            var that = this;




            $.getJSON("app/dataModel/information.json", function(infData){

                that.school (infData.education.school.name) ;
                that.lives (infData.location.name );
                that.froms (infData.hometown.name );
                that.born (infData.birthday);

            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });




            $.getJSON("app/dataModel/videos.json", function(videoData){
                var videos = [];
                for (var j = 0; j < videoData.videos.data.length; j++) {
                    if (j >= 9) {
                        break;
                    }
                    videos[j] = videoData.videos.data[j];
                }
                that.vleng(videoData.videos.data.length);
                that.videos(videos);

            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });



            $.getJSON("app/dataModel/photos.json", function(photoData){
                var photos = [];
                for (var i = 0; i < photoData.photos.data.length; i++) {
                    if (i >= 9) {
                        break;
                    }
                    photos[i] = photoData.photos.data[i];
                }
                that.pleng(photoData.photos.data.length);
                that.photos(photos);
            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });




            $.getJSON("app/dataModel/friends.json", function(friendData){
                var friends = [];
                for (var k = 0; k < friendData.friends.data.length; k++) {
                    if (k >= 9) {
                        break;
                    }
                    friends[k] = friendData.friends.data[k];
                }
                that.fleng(friendData.friends.data.length);
                that.friends(friends);

            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });
        },
        selectPhoto : function(item) {
            item.viewUrl = 'views/imageDetail';
            app.showDialog(item);
        },
        selectVideo : function(item) {
            item.viewUrl = 'views/videoDetail';
            app.showDialog(item);
        }

    };

});