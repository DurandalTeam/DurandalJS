define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.

    return {
        listComment: ko.observableArray([]),
        listCommentFilter: ko.observableArray([]),
        message: ko.observable(),
        activate: function(){
            var that = this;
            $.getJSON("./jsonfile/commentfeed.json", function(cmt){
                var temp = [];
                //alert(cmt.video.data[0].created_time);
                that.listComment(cmt.comments);
                temp[0]=cmt.comments.data[0];
                temp[1]=cmt.comments.data[1];
                temp[2]=cmt.comments.data[2];
                temp[3]=cmt.comments.data[3];
                that.listCommentFilter = temp;

            }).error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });

            $(document).ready(function () {
                $('.aaf').on("click",function(){
                    var usersid =  $(this).attr("id");
                    alert("click on link")
                })
            });

            $('textarea').keypress(function(e){
                    if (e.keyCode == 13) {
                        alert("keypress enter");
                    }
                });
        }
    };
});
