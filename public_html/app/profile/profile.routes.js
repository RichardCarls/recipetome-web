/**
 * @name Profile:routes
 * @description Recipe Tome profile view routes.
 * @since 0.1.0
 *
 * @memberof RecipeTome/Profile
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.profile')
      .config(ProfileRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   */
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
