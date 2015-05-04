define(['plugins/http', 'durandal/app', 'knockout','jquery'], function (http, app, ko, $){
  return{
    listFriend: ko.observableArray([]),
    listComment: ko.observableArray([]),
    friend: ko.observable(),
    selected: ko.observable(),
    firstValue: ko.observable(""),

    activate :function(){
      var that = this;
      $.getJSON('app/dataModel/messages.json', function(datalocal){
        var LF = [];
        for(var n = 0; n < datalocal.messages.data.length - 2; n++){
          LF[n]=datalocal.messages.data[n].to.data[1];
          var length = datalocal.messages.data[n].comments.data.length;
          datalocal.messages.data[n].comments.data[length-1].message;
          LF[n].last_message = datalocal.messages.data[n].comments.data[length-1].message;
          localStorage.setItem(datalocal.messages.data[n].to.data[1].id,JSON.stringify(datalocal.messages.data[n].comments.data));
        }

        that.friend(datalocal.messages.data[1].to.data[1].name)
        that.listFriend(LF);
        that.listComment(datalocal.messages.data[1].comments.data);
        // console.log("###1: " + datalocal.messages.data[1].comments.data)
      }).error(function(jqXhr, textStatus, error) {
        alert("ERROR: " + textStatus + ", " + error);
      });
    },
    filterMessage : function() {
          var that = this;
          var message = this.firstValue();
          $.getJSON('app/dataModel/messages.json', function(dataComment){
            var tempcomments=[];
            var temp = 0;
            for(var index =0 ; index < dataComment.messages.data.length ; index ++){
              for (var i = 0; i < dataComment.messages.data[index].comments.data.length ; i++) {
               tempcomments[temp] = dataComment.messages.data[index].comments.data[i];
               temp = temp + 1;
             }
           }
                    // for IE
                    if (!Array.prototype.filter)
                    {
                      Array.prototype.filter = function(fun /*, thisp*/)
                      {
                        var len = this.length;
                        if (typeof fun != "function")
                          throw new TypeError();
                        var res = new Array();
                        var thisp = arguments[1];
                        for (var i = 0; i < len; i++)
                        {
                          if (i in this)
                          {
                                var val = this[i]; // in case fun mutates this
                                if (fun.call(thisp, val, i, this))
                                  res.push(val);
                              }
                            }
                            return res;
                          };
                        }
                        function isBigEnough(element) {
                          return (element.message == message);
                        }
                        var filtered  = tempcomments.filter(isBigEnough);
                        alert(tempcomments.length);
                        alert(filtered.length);
                        that.listComment(filtered);
                      }).error(function(jqXhr, textStatus, error) {
                        alert("ERROR: " + textStatus + ", " + error);
                      });
     },

      select: function(item){
        console.log(item);

        var that = this;
        $.getJSON('app/dataModel/messages.json', function(datalocal){

        // var comment = [];
        for(var n = 0; n < datalocal.messages.data.length - 2; n++)
        {
          if(datalocal.messages.data[n].to.data[1].id == item.id)
          {
            // comment = datalocal.messages.data[n].comments.data;
            // console.log("###2: " + datalocal.messages.data[n].comments.data)
            that.listComment(datalocal.messages.data[n].comments.data);
            break;
          }
        }

        // that.listComment(comment);

      }).error(function(jqXhr, textStatus, error) {
        alert("ERROR: " + textStatus + ", " + error);
      });

      // var chat = localStorage.getItem(item.id);
      // console.log("kausduiaheufbajebfub");
      // console.log(typeof chat);
      // this.listComment(chat);
    }
  }
});