Template.hello.events(
    {
        'click button': function () {
            MeteorCamera.getPicture({}, function (error, data) {
                myColl.insert({time: new Date(), pic: data});
            })

        }
    }
)
Template.hello.helpers({
    pictures: function () {
        return myColl.find({}, {sort: {time: -1}});
    }
})