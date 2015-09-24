/**
 * Created by ID on 15/8/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
// Used in order to not get browser cross browser origin errors
// Typically you want to get more specific than this
App.accessRule("*");

App.info({
    id: 'com.rsc.rsc365',
    name: '日升昌',
    description: '大宗商品交易',
    author: '斯塔克',
    email: 'contact@example.com',
    website: '192.168.3.104:3000'
});
App.configurePlugin('com.wordsbaking.cordova.wechat', {
    APP_ID: 'wxcfc03beb13d14be5'
});


//App.setPreference('wechatappid', 'wxcfc03beb13d14be5');
