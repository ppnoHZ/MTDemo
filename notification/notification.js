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

            if (Meteor.isCordova) {
                //alert("notification");
                /*    var data={
                 id:Session.get('counter'),
                 title:"系统通知",
                 text:"已发货！"
                 };*/

                cordova.plugins.notification.local.hasPermission(function (granted) {
                    //console.log('[hasPermission] Permission has been granted: ' + granted);
                    /*if(!granted)
                     {
                     cordova.plugins.notification.local.registerPermission(function (granted) {
                     console.log('Permission has been granted: ' + granted);
                     });
                     }*/
                });
                cordova.plugins.notification.local.registerPermission(function (granted) {
                    console.log('[registerPermission] Permission has been granted: ' + granted);
                });
                console.log('[show message]');
                cordova.plugins.notification.local.schedule({
                    title: "Meeting in 15 minutes!",
                    text: "Jour fixe Produktionsbesprechung",
                });
                //Message.show();
            }
            /* if(Meteor.isClient)
             {
             Message.log("通知");
             //alert("notification");
             }*/
            //Session.set('counter', Session.get('counter') + 1);
            //Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
