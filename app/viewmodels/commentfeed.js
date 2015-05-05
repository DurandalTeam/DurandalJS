define(['plugins/http', 'durandal/app', 'knockout', 'jquery', 'plugins/observable'], function (http, app, ko, $, observable) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.

     //composition.addBindingHandler('enter',{
     //    init: function(element, valueAccessor, allBindingsAccessor, data) {
     //            //wrap the handler with a check for the enter key
     //            var wrappedHandler = function(data, event) {
     //                if (event.keyCode === 13) {
     //                     valueAccessor().call(this, data, event);
     //                }
     //            };
     //            //call the real event binding for 'keyup' with our wrapped handler
     //            ko.bindingHandlers.event.init(element, function() { return { keyup: wrappedHandler }; }, allBindingsAccessor, data);
     //            }
     //});

    // ko.bindingHandlers.enter = {
    //     init: function(element, valueAccessor, allBindingsAccessor, data) {
    //         //wrap the handler with a check for the enter key
    //         var wrappedHandler = function(data, event) {
    //             if (event.keyCode === 13) {
    //                  valueAccessor().call(this, data, event);
    //             }
    //         };
    //         //call the real event binding for 'keyup' with our wrapped handler
    //         ko.bindingHandlers.event.init(element, function() { return { keyup: wrappedHandler }; }, allBindingsAccessor, data);
    //     }
    // };



    var commentview = {
        LComment: ko.observableArray([]),
        lengthCommentFilter: ko.observable(),
        myPhoto: ko.observable(),
        showAll: 0,
        count : 0,
        activate: function() {
            var that = this;
            $.getJSON("app/dataModel/commentfeed.json", function (cmt) {
                listComment = cmt.feed.data[0].comments.data;
                if(localStorage.getItem('commentfeed') !== null) {
                    obj = JSON.parse(localStorage.getItem('commentfeed'));
                    listLocal = obj;
                    var i;

                    for (i = 0; i < listLocal.length; i++) {
                        listComment.push(listLocal[i]);
                    }
                }
                that.lengthCommentFilter(listComment.length - 4);

                that.LComment(filterComment(4));
            }).error(function (jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });


            $.getJSON("app/dataModel/information.json", function (infor) {
                inforId = infor.id;
                inforName = infor.name;
                inforPhoto = infor.photo;
                that.myPhoto(infor.photo);
            }).error(function (jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });
        },
        select: function() {
            //$("#divlist").empty();
            this.LComment(listComment);
            this.showAll = 1;
            $("#seemore").hide();
        },
        addComment : function(){
            var commentNewList;
            var now = new Date();
            var day = now.getDate();
            var month = now.getMonth();
            var year = now.getFullYear();
            var hour = now.getHours();
            var minutes = now.getMinutes();
            this.count++;
            var textcomment = $("#in").val();
            $("#in").val("");
            var newComment = {
                created_time: day + " Thang " + month + " " + year + " luc " + hour + ":" + minutes,
                from: {
                    id: inforId,
                    name: inforName,
                    photo: inforPhoto
                },
                message: textcomment,
                user_likes: false,
                like_count: 0,
                id: "831559060245792_831559656912399"
            };
            listComment.push(newComment);
            if (localStorage.getItem('commentfeed') === null) {
                commentNewList = [];
            } else {
                commentNewList = JSON.parse(localStorage.getItem('commentfeed'));
            }
            commentNewList.push(newComment);
            localStorage.setItem('commentfeed', JSON.stringify(commentNewList));
            if(this.showAll == 1)
                this.LComment(listComment);
            else
                this.LComment(filterComment(this.count + 4));
        },
        enterInput : function(){
            alert("abc");
        }
    };

    var filterComment = function(num){
        var temp = [];
        var i, j = 0;
        for (i = listComment.length - num; i < listComment.length; i++) {
            temp[j] = listComment[i];
            j++;
        }
        return temp;
    };

    var enter = function(){
        alert("abc");
    }

    return commentview;

});