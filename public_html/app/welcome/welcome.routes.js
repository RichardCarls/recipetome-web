/**
 * Recipe Tome welcome view routes
 *
 * @namespace RecipeTome/Welcome/Routes
 * @memberof RecipeTome/Welcome
 */
;(function(angular) {

  angular
    .module('recipetome.welcome')
      .config(WelcomeRoutesConfig);

  function WelcomeRoutesConfig($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'app/welcome/welcome.view.html',
        controller: 'WelcomeController',
      });
  }

})(angular);
