/**
 * @name Signup
 * @description Signup view module for Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Signup
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.signup', [
      'ui.router',
      'ui.bootstrap',
      'flash',
      'services.auth',
    ]);

})(angular);
