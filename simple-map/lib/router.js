/**
 * Created by ID on 15/8/20.
 */

Router.configure({

    layoutTemplate:"layout"

})
Router.route("/", {name: "amap"});
Router.route("/baiduMap", {name: "baiduMap"});