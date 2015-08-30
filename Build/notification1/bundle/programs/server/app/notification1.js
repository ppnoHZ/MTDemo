(function(){if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            //if (Meteor.isCordova) {
                //alert("notification");
                var data = {
                    id: Session.get('counter'),
                    title: "系统通知",
                    text: "已发货！",
                    data: {key: "20150101010010"}
                };
                Message.show(data);
            //}
           /* if (Meteor.isClient) {
                Message.log("通知");
                //alert("notification");
            }*/
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}

})();
