if (Meteor.isClient) {
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
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Meteor.startup(function () {
  cordova.plugins.notification.local.hasPermission(function (granted) {
    console.log('Permission has been granted: ' + granted);
    if(!granted)
    {
      cordova.plugins.notification.local.registerPermission(function (granted) {
        console.log('Permission has been granted: ' + granted);
      });
    }
  });
  cordova.plugins.notification.local.on('click', function (notification) {
    alert(notification.id);
    alert(JSON.stringify(notification));
    //alert(JSON.stringify(notification.data));
    alert(JSON.parse(notification.data));
    //showToast('id:' + notification.id);
  });
})
