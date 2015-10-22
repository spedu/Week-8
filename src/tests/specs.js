describe('FormController', function() {
  var formController;

  beforeEach(module('logintrest'));
  beforeEach(inject(function($controller) {
    formController = $controller('FormController');
  }));

  describe('#login', function() {
    beforeEach(function() {
      formController.username = 'John Harvard';
      formController.password = '5uP3r_53CR3t!';
    });

    it('should clear the values of username and password', function() {
      formController.login();
      expect(formController.username).toBe('');
      expect(formController.password).toBe('');
    });

    it('should add the username and time to the logins array', function() {
      var baseTime = new Date();
      jasmine.clock().mockDate(baseTime);
      formController.login();
      expect(formController.logins.length).toBe(1);
      expect(formController.logins[0]).toEqual({username: 'John Harvard', timestamp: baseTime.getTime() });
    });
  });

  describe('#removeLoginEntry', function() {
    it('should remove a login entry', function() {
      formController.logins = [
        { username: 'John Harvard', timestamp: (new Date()).getTime() },
        { username: 'Test Testington', timestamp: (new Date()).getTime() },
        { username: 'Tester Jr.', timestamp: (new Date()).getTime() }
      ];

      expect(formController.logins.length).toBe(3);

      formController.removeLoginEntry(1);

      expect(formController.logins.length).toBe(2);

      var usernames = [];
      formController.logins.forEach(function(login) {
        usernames.push(login.username);
      });

      expect(usernames).not.toContain('Test Testington');
    });
  });
});
