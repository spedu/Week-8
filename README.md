# Week 8: Angular Forms

## Setting up the template
*together*

1. Pull down this repository
2. Check out what it is
3. Add `ng-model` to the username `<input>` field
  * give it a value of "username"
4. Do the same for password

## Test to see if it's working
*on your own*

1. Create a new `<div>` immediately after the `<form>` element
2. Give it classes of `well` and `col-md-6`
  * *aren't well's cool?*
3. Put in a couple of `{{ expressions }}` for `username` and `password`

## Create a Controller
*together*

1. Create a Controller with the name "FormController" in the app.js file
2. Attach the Controller using `ng-controller` to the `<div>` parent of the `<form>`
3. Create an initial value for `username` from within the Controller js code
  * inject the `$scope` service into your controller
  * set `$scope.username = "something";`

## Add a login/submit function
*together*

1. Attach a new function to the `$scope` service called "login"
  * `$scope.login = function(){ ... };`
2. Add a `console.log` in there to let us know it's being hit
3. Create an `ng-submit` on the `<form>` and give it `login()`
4. Try it out

## Now stop using `$scope`
*together*

1. Change what's in the `ng-controller` to: `ng-controller="FormController as vm"`
2. Assign `var vm = this;` in your Controller js
3. Attach each of the variables there to the `vm` object
4. Change all variables in the `FormController` to be values on the `vm` object
  * username
  * password
  * submit()
5. Now don't ever use `$scope` for variables or custom functions again!

## Validate the submit, log it
*on your own*

1. Remove the initialization of `username` in the Controller's js, that's silly
2. Make sure both of the fields are filled in using the `required` attribute
3. Create an array for `logins` on the `vm` object
4. When someone logs in, add the username and current time to the `logins` array
5. `console.log` the `logins` array
6. Clear the values of `username` and `password` when submitted

## Output `logins`
*on your own*

1. Remove the expressions on the right of the form, we don't need them
2. Instead, use `ng-repeat` to output the `logins` array to that `well` ;)

## We have something we can test!
*together*

1. Install `angular-mocks` with `bower`
2. Clear the current specs.js file
3. `describe` the controller
4. `beforeEach` test, register the module
  * `beforeEach(angular.mock.module('logintrest'));`
  * *note: angular-mocks registers `module` on the global scope as well*
5. Try to run a dummy test
6. Fix Karma
  * angular-mocks depends on angular, so angular needs to be loaded first with Karma

## Set up Controller
*together*

1. Add a new var `formController` to the `describe`s scope
2. Add the following `beforeEach` after the other one:
```
beforeEach(angular.mock.inject(function($controller){
  formController = $controller('FormController');
}));
```

## Test to see if the values were cleared
*together*

1. Create a describe for `login()`
2. Create an `it` for "should clear the values of username and password"
  * set the values of `formController.username` and `formController.password`
  * launch the `login()`
  * `expect` them to be blank

## Test that the `username` was added to the `logins` array
*on your own*

1. Figure it out!
