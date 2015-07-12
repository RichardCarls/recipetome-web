/**
 * Recipe Tome profile view routes
 *
 * @namespace RecipeTome/Profile/Routes
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .config(ProfileRoutesConfig);

  function ProfileRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/profile/profile.view.html',
        controller: 'ProfileController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);
