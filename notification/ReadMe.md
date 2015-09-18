创建一个包来实现。
Bug：
    1，IOS下有问题。
    2，解决办法修改    localNotificationWithId 方法（https://github.com/katzer/cordova-plugin-local-notifications/commit/92fdf1db30f926466effc6a7e040ea50b542f943）
    替换掉
      if ([[NSString stringWithFormat: @"%@", notification.options.id] isEqualToString:id]) {
      
    相对文件地址：notification/.meteor/local/cordova-build/plugins/de.appplant.cordova.plugin.local-notification/src/ios/UILocalNotification+APPLocalNotification.m
    