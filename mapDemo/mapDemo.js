if (Meteor.isClient) {
    var map;
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });
    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked

            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                //console.log(r);
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    setTimeout(function () {
                        console.log(r);
                        var gpsPoint = new BMap.Point(r.point.lng, r.point.lat);
                        markinMap(gpsPoint, "转换前");
                        /*BMap.Convertor.translate(gpsPoint, 2, translateCallback); */    //真实经纬度转成百度坐标
                    }, 2000);
                } else {
                    alert('failed' + this.getStatus());
                }
            });

        }
    });
    Template.hello.onRendered(function () {

        // 百度地图API功能
        map = new BMap.Map("container");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
            // 靠左上角位置
            anchor: BMAP_ANCHOR_TOP_LEFT,
            // LARGE类型
            type: BMAP_NAVIGATION_CONTROL_LARGE,
            // 启用显示定位
            enableGeolocation: true
        });
        map.addControl(navigationControl);

        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function (e) {
            // 定位成功事件
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError", function (e) {
            // 定位失败事件
            alert(e.message);
        });
        map.addControl(geolocationControl);

        /*map = new BMap.Map("container");
         map.centerAndZoom("北京", 15);
         map.addControl(new BMap.NavigationControl());*/

        /*   setTimeout(function () {
         loc = Geolocation.latLng() || {lat: 0, lng: 0};
         var gpsPoint = new BMap.Point(loc.lng, loc.lat);
         BMap.Convertor.translate(gpsPoint, 0, translateCallback);     //真实经纬度转成百度坐标
         }, 500);*/

    });

    markinMap = function (point, type) {
        if (point.lng != 0) {
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            var label = new BMap.Label(type, {offset: new BMap.Size(20, -10)});
            marker.setLabel(label); //添加百度label
            map.setCenter(point);
        }
    }
}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
