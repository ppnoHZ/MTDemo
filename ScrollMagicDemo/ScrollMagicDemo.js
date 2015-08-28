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
  Template.hello.onRendered(function () {
    // init controller
    var controller = new ScrollMagic.Controller({vertical: false});

    // build tween
    var tween = TweenMax.to("#target", 0.5, {backgroundColor: "green", width: "+=400"});

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
