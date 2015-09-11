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
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
    Template.hello.rendered = function () {
        console.log('first rendered');
    };
    Template.hello.onRendered(function () {
        console.log('second OnRendered');
        $('#qrcode').qrcode({
            text: Random.secret(32),
            render: 'canvas',
            width: 128,
            height: 128,
            ecLevel: 'H',
            fill: "#910101",
            background: "#fafafa",
            radius: 0.2,
        });
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
