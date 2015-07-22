/**
 * @name Profile
 * @description Profile view module for Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @requires RecipeTome/Services/UserService
 * @requires RecipeTome/Components/InputMatch
 * @since 0.1.0
 *
 * @namespace RecipeTome/Profile
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.profile', [
      'ui.router',
      'ui.bootstrap',
      'services.auth',
      'services.user',
      'components.inputMatch',
    ]);

})(angular);
