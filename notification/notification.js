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
            if (Meteor.isCordova)
            {
                alert("notification");

            }
            if(Meteor.isClient)
            {
                Message.log("通知");
            }
            Message.show();
            //Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
