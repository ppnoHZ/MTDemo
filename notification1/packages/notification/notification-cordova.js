/**
 * Created by ID on 15/8/21.
 */

Message.show = function (data) {
    //console.log(cordova.plugins.notification.local);
    cordova.plugins.notification.local.schedule({
        id: data.id,
        title: data.title,
        text: data.text,
        data: {key: "data.id"}
    });
};

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
        alert(JSON.parse(notification.data).key);
        //showToast('id:' + notification.id);
    });
})

