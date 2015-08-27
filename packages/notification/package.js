Package.describe({
  name: 'zhoudd:notification',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '本地通知',
  // URL to the Git repository containing the source code for this package.
  git: 'git:...',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "de.appplant.cordova.plugin.local-notification": "0.8.1"
});

Package.onUse(function(api) {
  api.use(["reactive-var"]);
  api.export('Message');
  api.versionsFrom('1.1.0.3');
  api.addFiles('notification.js',['client']);//设置之后里面的方法可以在制定的环境中调用
  api.addFiles('web.js', ['client']);//浏览器中调用
  api.addFiles('notification-cordova.js', ['client']);//手机端可以调用
});

/*Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zhoudd:notification');
  api.addFiles('notification-tests.js');
});*/
