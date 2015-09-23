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
   /*   window.plugins.socialsharing.share('Message only');
      window.plugins.socialsharing.share('Message and subject', 'The subject');
      window.plugins.socialsharing.share('Message and link', null, null, 'http://www.x-services.nl');*/

      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
