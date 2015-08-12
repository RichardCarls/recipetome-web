/**
 * @name Services
 * @description Defines services required by Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @requires RecipeTome/Services/RecipeService
 * @requires RecipeTome/Services/UserService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.services', [
      'services.auth',
      'services.user',
      'services.recipe',
      'services.upload',
    ]);

})(angular);
