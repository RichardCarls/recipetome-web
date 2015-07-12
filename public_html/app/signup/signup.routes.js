/**
 * Recipe Tome signup view routes
 *
 * @namespace RecipeTome/SignUp/Routes
 * @memberof RecipeTome/SignUp
 */
;(function(angular) {

  angular
    .module('recipetome.signup')
      .config(SignUpRoutesConfig);

  function SignUpRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/signup/signup.view.html',
        controller: 'SignUpController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);
