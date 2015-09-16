if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);
    window.addEventListener("receivedLocalNotification", onReceivedLocalNotification, false);
    // code to run on server at startup
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });
/*      id: data.id,
        title: data.title,
        text: data.text,
        data: data.data*/
    Template.hello.events({
        'click button': function () {
            if (Meteor.isCordova) {
/*                //alert("notification");
                var data = {
                    id: Session.get('counter'),
                    title: "系统通知",
                    text: "已发货！",
                    data:'dat:d'
                };
                Message.show(data);*/


                window.localNotification.add(Session.get('counter') + 1, {
                    seconds: 0,
                    message: "This is an example",
                    badge: Session.get('counter') + 1});

            }
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}
function onReceivedLocalNotification(e,b)
{
    console.log(JSON.stringify(e));
    alert(JSON.stringify(e));
}
if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}
