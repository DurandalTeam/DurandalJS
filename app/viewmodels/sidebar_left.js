define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko){


    return {

        photos: ko.observableArray([]),
        videos: ko.observableArray([]),
        friends: ko.observableArray([]),

        activate :function(){
            var that = this;




            $.getJSON("app/dataModel/information.json", function(infData){

                that.school = infData.education.school.name ;
                that.lives = infData.location.name ;
                that.froms = infData.hometown.name ;
                that.born = infData.birthday ;

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
                that.videos.leng = videoData.videos.data.length ;
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
                that.photos.leng = photoData.photos.data.length ;
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

                that.friends.leng = friendData.friends.data.length ;
                that.friends(friends);

            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });
        }
    };
});