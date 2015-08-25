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
      Router.go('test', {}, {
        hash: 'maintainScroll=1'    //加了这个参数之后，跳转的时候会保持原来的位置
      });
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.test.events({
    'click button': function () {
      Router.go('hello', {}, {

      });
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


IronRouterAutoscroll = {
  animationDuration: 5000,
};
