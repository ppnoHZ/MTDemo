Tasks=new Mongo.Collection('tasks');


if (Meteor.isClient) {
  angular.module('simple-todos',['angular-meteor']);
  angular.module('simple-todos').controller('TodosListCtrl',['$scope','$meteor',function  ($scope,$meteor) {
    // body...
    $scope.tasks=$meteor.collection(function(){
      //return Tasks.find($scope.query,{sort:{createdAt:-1}});
      return Tasks.find($scope.getReactively('query'));
    });

    $scope.addTask=function (newTask) {
      $scope.tasks.push({
        text:newTask,
        createdAt:new Date()
      });
    };
    $scope.$watch('hideCompleted',function(){
      if($scope.hideCompleted)
      {
        $scope.query={checked:{$ne:true}};
      }else
      {
        $scope.query={};
      }
    });
    $scope.incompleteCount=function()
    {
      return Tasks.find({checked:{$ne:true}}).count();
    }
  }]);
}
