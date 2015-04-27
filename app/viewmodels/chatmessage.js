define(['plugins/http', 'durandal/app', 'knockout','jquery'], function (http, app, ko, $){
  return{
    listFriend: ko.observableArray([]),
    listComment: ko.observableArray([]),
    fiend: ko.observable(),
    

    activate :function(){
      var that = this;
      $.getJSON('app/dataModel/messages.json', function(datalocal){
        var LF = [];
        for(var n = 0; n < datalocal.messages.data.length - 2; n++){
          LF[n]=datalocal.messages.data[n].to.data[1];
          var length = datalocal.messages.data[n].comments.data.length;
          datalocal.messages.data[n].comments.data[length-1].message;
          LF[n].last_message = datalocal.messages.data[n].comments.data[length-1].message;
          // LF[n].last_message = datalocal.messages.data[n].comments.data[datalocal.messages.data[n].comments.data.length-1].message;
          // LF[n].last_message = datalocal.messages.data[n].comments.data[datalocal.messages.data[n].comments.data.length-1].message;
        }

        that.fiend(datalocal.messages.data[1].to.data[0].name)
        that.listFriend(LF);
        that.listComment(datalocal.messages.data[1].comments.data);
          }).error(function(jqXhr, textStatus, error) {
            alert("ERROR: " + textStatus + ", " + error);
          });
        },
    
    select: function(item){
      console.log(item);

      var that = this;
      $.getJSON('app/dataModel/messages.json', function(datalocal){

        var comment = [];
        for(var n = 0; n < datalocal.messages.data.length - 2; n++)
        {
          if(datalocal.messages.data[n].to.data[1].id == item.id)
          {
            comment = datalocal.messages.data[n].comments.data;
            break;
          }
        }

        that.listComment(comment);

      }).error(function(jqXhr, textStatus, error) {
        alert("ERROR: " + textStatus + ", " + error);
      });
    }
  }
});