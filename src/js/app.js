var app = angular.module('logintrest', []);

app.controller('FormController', ['$scope', function($scope){
  var vm = this;
  vm.logins = [];

  vm.login = function(){
    vm.logins.push({username: vm.username, time:new Date()});
    vm.username = '';
    vm.password = '';
  };

  vm.delete = function(index){
    vm.logins.splice(index);
  };

}]);
