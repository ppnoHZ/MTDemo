Package.describe({
    name: 'stark:jpushpkg',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});
Cordova.depends({
    "com.phonegap.jpushplugin": "1.5.4"
});

Package.onUse(function (api) {
    api.use(["reactive-var"]);
    api.export('Jpush');
    api.versionsFrom('1.1.0.3');
    api.addFiles('jpushpkg.js', ['client']);
    api.addFiles('jpushpkg-cordova.js', ['client']);
});

Package.onTest(function (api) {
    api.use('stark:jpushpkg');
    api.use(['tinytest','test-helpers']);
    api.addFiles('jpushpkg-tests.js');
});


