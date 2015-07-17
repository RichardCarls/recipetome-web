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

  function ProfileRoutesConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.view.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        resolve: {
          user: function(UserService) {
            return UserService.getCurrentUser();
          }
        }
      });
  }

})(angular);
