var app = angular.module('basic-app', []);

app.controller("BasicController", function($scope, $http) {

  $scope.callws = function(method, url) {
    $http({method: method, url: url}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
      }).
      error(function(data, status) {
        $scope.status = status;
        $scope.data = data;
    });
  };
});
