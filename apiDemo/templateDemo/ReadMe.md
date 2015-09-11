主要是对Meteor里的Template进行系统的学习。
--------------------------------------
### 事件
- events：模板里的对象事件处理是通过这个来处理的。
    Template.myTemplate.events(eventMap)
    eventMap的写法如下：
    eventName：表示事件的名称，如：点击事件就是 click。
    element：表示要添加事件的元素集合。可以通过选择器去选择要加事件的元素。
    'eventName element':function(e,template){
        //e 代表触发事件的元素。template表示模板对象
        //可以通过如下方式来
        var $tag = $(e.target);
        var userType = $tag.attr('data-userType');
        var group = $tag.attr('data-group');
    }
    例子：
   {
     // 为所有的元素添加点击事件
     'click': function (event) { ... },

     // Fires when any element with the 'accept' class is clicked
     'click .accept': function (event) { ... },

     // Fires when 'accept' is clicked or focused, or a key is pressed
     'click .accept, focus .accept, keypress': function (event) { ... }
   }