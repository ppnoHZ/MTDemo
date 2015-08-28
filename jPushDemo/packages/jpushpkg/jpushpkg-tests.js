// Write your tests here!
// Here is an example.


if (Meteor.isServer) {
    Meteor.methods({
            'test/method': function () {
                return true;
            },
            'test/throws': function () {
                throw  new Meteor.Error();
            }
        }
    );
}

if (Meteor.isClient) {
    testAsyncMulti("MeteorTest - TestMethod", [
        function (test, expect) {
            Meteor.call('test/method', expect(function (err, res) {
                test.instanceOf(err, Meteor.Error);
            }));
        },
        function (test, expect) {
            Meteor.call('test/method',expect(function (err, res) {
                test.isTrue(res);
            }))
        }
    ]);


}


/*
Tinytest.add('example', function (test) {
    test.equal(true, true);
});
*/

