if (Meteor.isClient) {


  var initiateUI = function(){

    try{
      window.plugins.jPushPlugin.init();
      window.plugins.jPushPlugin.getRegistrationID(onGetRegistradionID);

      if(device.platform != "Android"){
        window.plugins.jPushPlugin.setDebugModeFromIos();
        window.plugins.jPushPlugin.setApplicationIconBadgeNumber(0);
      }else{
        window.plugins.jPushPlugin.setDebugMode(true);
      }
    }
    catch(exception){
      console.log(exception);
    }
  }
  var onDeviceReady   = function(){
    console.log("JPushPlugin:Device ready!")
    initiateUI();
  }
  onDeviceReady();
  var onGetRegistradionID = function(data) {
    try{
      console.log("JPushPlugin:registrationID is "+data)

      $("#registrationid").html(data);
    }
    catch(exception){
      console.log(exception);
    }
  }

  var onTagsWithAlias = function(event){
    try{
      console.log("onTagsWithAlias");
      var result="result code:"+event.resultCode+" ";
      result+="tags:"+event.tags+" ";
      result+="alias:"+event.alias+" ";
      $("#tagAliasResult").html(result);
    }
    catch(exception){
      console.log(exception)
    }
  }
  var onOpenNotification = function(event){
    try{
      var alertContent
      if(device.platform == "Android"){
        alertContent=window.plugins.jPushPlugin.openNotification.alert;
      }else{
        alertContent   = event.aps.alert;
      }
      alert("open Notificaiton:"+alertContent);

    }
    catch(exception){
      console.log("JPushPlugin:onOpenNotification"+exception);
    }
  }
  var onReceiveNotification = function(event){
    try{
      var alert
      if(device.platform == "Android"){
        alert = window.plugins.jPushPlugin.receiveNotification.alert;
      }else{
        alert   = event.aps.alert;
      }
      $("#notificationResult").html(alert);

    }
    catch(exeption){
      console.log(exception)
    }
  }
  var onReceiveMessage = function(event){
    try{

      var message
      if(device.platform == "Android"){
        message = window.plugins.jPushPlugin.receiveMessage.message;
      }else{
        message   = event.content;
      }
      //var extras = window.plugins.jPushPlugin.extras

      $("#messageResult").html(message);

    }
    catch(exception){
      console.log("JPushPlugin:onReceiveMessage-->"+exception);
    }
  }




  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {

      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'click #setTagWithAliasButton': function () {
      try{
        window.plugins.jPushPlugin.addLocalNotification('334',
            {},
            '通知',
            1,
            0,
            []);

        /*var tag1 = $("#tagText1").attr("value");
        var tag2 = $("#tagText2").attr("value");
        var tag3 = $("#tagText3").attr("value");
        var alias = $("#aliasText").attr("value");
        var dd = [];

        if(tag1==""&&tag2==""&&tag3==""){
        }
        else{
          if(tag1 != ""){
            dd.push(tag1);
          }
          if(tag2 != ""){
            dd.push(tag2);
          }
          if(tag3 != ""){
            dd.push(tag3);
          }
        }
        window.plugins.jPushPlugin.setTagsWithAlias(dd,alias);*/

      }
      catch(exception){
        console.log(exception);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
