angular.module('myApp', [ ]).controller('myController',function($scope, $http) {
  $scope.myName = "storebrand";

  //dont query in the controller, create a service instead
  $scope.queryServer = function() {
    var query = $http.get('http://echo.jsontest.com/key/value/one/two');

    query.success(function(result) {
      $scope.resultFromServer = result;
    });

    query.error(function(errors) {
      throw new Error(errors);
    });
  };
});
