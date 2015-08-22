/**
 * Created by ID on 15/8/21.
 */

Message.show = function () {
    cordova.plugins.notification.local.hasPermission(function (granted) {
        console.log('Permission has been granted: ' + granted);
    });

    cordova.plugins.notification.local.registerPermission(function (granted) {
        console.log('Permission has been granted: ' + granted);
    });

    //console.log(cordova.plugins.notification.local);
    cordova.plugins.notification.local.schedule({
        id: 1,
        title: "Test,Message",
        text: "测试消息",
        data: {id: "data.id"}
    });
    cordova.plugins.notification.local.on('click', function (notification) {
        alert(notification.id);
        alert(notification.data.id);
        //showToast('id:' + notification.id);

    });


};
