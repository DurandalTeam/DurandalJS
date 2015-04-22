define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko){
    return{
        groupName: ko.observable("4html5"),
        listImages: ko.observableArray([]),
        quantityMembers: ko.observable()
    }
});