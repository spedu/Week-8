var app = angular.module('logintrest', []);

app.controller('FormController', [function() {
  var fc = this;

  fc.logins = [];

  fc.login = function() {
    console.log("I'm hit!");

    var loginInfo = {
      username: fc.username,
      timestamp: (new Date()).getTime()
    };

    fc.logins.push(loginInfo);

    fc.clearForm();
  };

  fc.clearForm = function() {
    fc.username = '';
    fc.password = '';
  };

  fc.removeLoginEntry = function(index) {
    fc.logins.splice(index, 1);
  };
}]);

