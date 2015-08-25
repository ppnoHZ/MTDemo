var map;

Template.baiduMap.created = function () {
    //console.log(this);
    //console.log("--------created---------");
};

Template.baiduMap.onCreated = function () {
    //console.log(this);
    //console.log("--------onCreated---------");
};
locationSuccess = function (position) {
    alert(position);
};
locationError = function (error) {
    alert(error);
};

function getLocation() {
    if (navigator.geolocation) {
        console.log("定位");
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
        });
    } else {
        alert("浏览器不支持！！！");
    }
}
var loc = {lat: 0, lng: 0};
/*
 *
 *
 *
 *
 * */
Template.baiduMap.helpers({
        loc: function () {
            //使用HTML5的api定位
            loc = Geolocation.latLng() || {lat: 0, lng: 0};
            return loc;
        },
        title: function () {
            return "Map";
        },
        mapUrl: function () {
            return "http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=我的位置&content=百度奎科大厦&output=html";
        },
        error: function () {
            if (Geolocation.error) {
                //alert("erroe");
                /*console.log("错误");
                 console.log(Geolocation.error);*/
                return Geolocation.error;
            }
        }
    }
)
;

Template.baiduMap.events({
    "click button": function () {
        //getLocation();
        //百度地图定位
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            //console.log(r);
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                setTimeout(function () {
                    console.log(r);
                    var gpsPoint = new BMap.Point(r.point.lng, r.point.lat);
                    markinMap(gpsPoint,"转换前");

                    /*BMap.Convertor.translate(gpsPoint, 2, translateCallback); */    //真实经纬度转成百度坐标
                }, 2000);
            } else {
                alert('failed' + this.getStatus());
            }
        });


      /*  //浏览器定位
        loc = Geolocation.latLng() || {lat: 0, lng: 0};
        //console.log(loc);
        if (loc.lat !== 0) {
            setTimeout(function () {
                loc = Geolocation.latLng() || {lat: 0, lng: 0};
                var gpsPoint = new BMap.Point(loc.lng, loc.lat);
                markinMap(gpsPoint, "转换前坐标");
                //0：代表GPS，也可以是2：google坐标
                BMap.Convertor.translate(gpsPoint, 0, translateCallback);               //真实经纬度转成百度坐标
            }, 2000);
        }*/

        //alert(Geolocation.latLng());
    }
});

//模板在第一次添加到DMO中是触发，已经生产了DMO元素，可以操作元素。
Template.baiduMap.onRendered(function () {
    //console.log("---------onRendered-----------");
    //var position = new AMap.LngLat(116.397428, 39.90923);


    /*map = new AMap.Map("container", {
     //resizeEnable: true,
     //rotateEnable: true,
     //dragEnable: true,
     //zoomEnable: true,
     //设置可缩放的级别
     //zooms: [3,18],
     //传入2D视图，设置中心点和缩放级别
     view: new AMap.View2D({
     //center: position,
     zoom: 14,
     rotation: 0
     }),
     lang: "zh_cn"//设置语言类型，中文简体
     });
     //添加地图工具栏 begin
     map.plugin(['AMap.ToolBar'], function () {
     //设置地位标记为自定义标记
     var toolBar = new AMap.ToolBar();
     map.addControl(toolBar);
     //获取当前视图中所属的城市省份信息。end
     AMap.event.addListener(toolBar, 'location', function callback(e) {
     console.log(e.lnglat);
     });
     });
     //添加地图工具栏 end

     //获取当前视图中所属的城市省份信息。begin
     AMap.event.addListener(map, 'moveend', getCity);

     function getCity() {
     map.getCity(function (data) {
     if (data['province'] && typeof data['province'] === 'string') {
     console.log(data);
     console.log('当前城市:' + (data['province'] + '-' + data['city']));
     }
     })
     };
     */

    /* //高德定位
     var mapObj = new AMap.Map('iCenter');
     mapObj.plugin('AMap.Geolocation', function () {
     var geolocation = new AMap.Geolocation({
     enableHighAccuracy: true,//是否使用高精度定位，默认:true
     timeout: 10000,          //超过10秒后停止定位，默认：无穷大
     maximumAge: 0,           //定位结果缓存0毫秒，默认：0
     convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
     showButton: true,        //显示定位按钮，默认：true
     buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
     buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
     showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
     showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
     panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
     zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
     });
     mapObj.addControl(geolocation);
     AMap.event.addListener(geolocation, 'complete', function (point) {
     console.log(point);
     });//返回定位信息
     AMap.event.addListener(geolocation, 'error', function(error){
     console.log(error);
     });      //返回定位出错信息
     });
     */


    map = new BMap.Map("container");
    map.centerAndZoom("北京", 15);
    map.addControl(new BMap.NavigationControl());

 /*   setTimeout(function () {
        loc = Geolocation.latLng() || {lat: 0, lng: 0};
        var gpsPoint = new BMap.Point(loc.lng, loc.lat);
        BMap.Convertor.translate(gpsPoint, 0, translateCallback);     //真实经纬度转成百度坐标
    }, 500);*/

});
translateCallback = function (point) {
/*    console.log("转换后的:");
    console.log(point);*/
    if (point.lng != 0) {
        alert(point);
        markinMap(point, "转换后坐标");
        /*alert(point.lat + " ," + point.lng);
         var marker = new BMap.Marker(point);
         map.addOverlay(marker);
         var label = new BMap.Label("转换后坐标", {offset: new BMap.Size(20, -10)});
         marker.setLabel(label); //添加百度label*/
        map.setCenter(point);
    }
//alert(point.lng + "," + point.lat);
};
markinMap = function (point, type) {
    if (point.lng != 0) {
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        var label = new BMap.Label(type, {offset: new BMap.Size(20, -10)});
        marker.setLabel(label); //添加百度label
        map.setCenter(point);
    }
}
