/**
 * Recipe Tome login view routes
 *
 * @namespace RecipeTome/Login/Routes
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .config(LoginRoutesConfig);

  function LoginRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);
