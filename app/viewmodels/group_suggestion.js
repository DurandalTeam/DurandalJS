define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko){
    return{
        groupName: ko.observable("4html5"),
        avartars: ko.observableArray(["./image/3.jpg","./image/2.jpg","./image/3.jpg","./image/2.jpg"]),
        quantityMembers: ko.observable("12"+" Members")
    }
});