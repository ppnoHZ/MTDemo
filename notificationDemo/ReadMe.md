Bug：
    1，IOS下有问题。
    2，解决办法修改  UILocalNotification+APPLocalNotification.m(188行)  
        localNotificationWithId 方法（https://github.com/katzer/cordova-plugin-local-notifications/commit/92fdf1db30f926466effc6a7e040ea50b542f943）
    为
      if ([[NSString stringWithFormat: @"%@", notification.options.id] isEqualToString:id]) {
      
     相对文件地址1: /Users/ID/Tree/MeteorDemo/notificationTest/.meteor/local/cordova-build/platforms/ios/notificationTest/Plugins/de.appplant.cordova.plugin.local-notification/UIApplication+APPLocalNotification.m
    