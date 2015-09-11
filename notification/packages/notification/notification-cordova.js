/**
 * Created by ID on 15/8/21.
 */

Message.show = function () {
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
/*    cordova.plugins.notification.local.on('click', function (notification) {
        alert(notification.id);
        alert(notification.data.key);
        //showToast('id:' + notification.id);

    });*/


};
