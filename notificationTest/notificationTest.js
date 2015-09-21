if (Meteor.isClient) {
    Meteor.startup(function () {
        // code to run on server at startup
        if (Meteor.isCordova) {
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
            cordova.plugins.notification.local.on('click', function (notification) {
                alert(notification.id);
                alert(JSON.stringify(notification));
                //alert(JSON.stringify(notification.data));
                //alert(JSON.parse(notification.data));
                //showToast('id:' + notification.id);
            });

        }
    });

    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {

            if (Meteor.isCordova) {
                //alert("notification");
                /*    var data={
                 id:Session.get('counter'),
                 title:"系统通知",
                 text:"已发货！"
                 };*/
                console.log('[show message]');
                cordova.plugins.notification.local.schedule({
                    id: Session.get('counter'),
                    title: "系统通知",
                    text: "已发货！",
                    data: {key: "20150101010010"}
                });
                //Message.show();
            }
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
