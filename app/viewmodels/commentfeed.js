define(['plugins/http', 'durandal/app', 'knockout', 'jquery', 'plugins/observable'], function (http, app, ko, $, observable) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.

    return {
        LComment: ko.observableArray(),
        listComment: [],
        lengthCommentFilter: ko.observableArray([]),
        message: ko.observable(),
        activate: function() {
            var that = this;
            $.getJSON("app/dataModel/commentfeed.json", function (cmt) {
                var temp = [];

                that.lengthCommentFilter(cmt.comments.data.length - 4);
                var i, j =0;
                for (i = cmt.comments.data.length - 4; i <+ cmt.comments.data.length; i++) {
                    temp[j] = cmt.comments.data[i];
                    j++;
                }
                listComment = cmt.comments.data;
                that.LComment(temp);
            }).error(function (jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });
        },
        select: function() {
            this.LComment(listComment);
            $("#seemore").hide();
        }
    };
});