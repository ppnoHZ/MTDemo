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
            //Wechat.isInstalled(function (installed) {
            //    alert("Wechat installed: " + (installed ? "Yes" : "No"));
            //}, function (reason) {
            //    alert("Failed: " + reason);
            //});
            /*    Wechat.share({
             text: "This is just a plain string",
             scene: Wechat.Scene.session   // share to Timeline
             }, function () {
             alert("Success");
             }, function (reason) {
             alert("Failed: " + reason);
             });*/
            Session.set('counter', Session.get('counter') + 1);
            console.log('2');
            if (Meteor.isCordova) {
                console.log('2');
                WeChat.share('文本', WeChat.Scene.session, function () {
                        console.log('分享成功~');
                    }, function (reason) {
                        console.log(reason);
                    });
                //console.log(JSON.stringify(cordova.plugins.Wechat));
                //Wechat.isInstalled(function (installed) {
                //
                //    alert("Wechat installed: " + (installed ? "Yes" : "No"));
                //    if (installed) {
                //
                //
                //    }
                //}, function (reason) {
                //    alert("Failed: " + reason);
                //});

            }
            // increment the counter when button is clicked
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
