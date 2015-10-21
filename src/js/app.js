var app = angular.module('logintrest', []);

app.controller('FormController', ['$scope', function($scope){
  $scope.submitForm = function(){
    console.log($scope.loginForm);
    
  };
}]);
