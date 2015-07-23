/**
 * @name UserService
 * @description Provides API for backend user profile endpoint.
 * @see RecipeTome/Services/UserService:service
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services/UserService
 * @memberof RecipeTome/Services
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.user', [
      'services.auth',
    ]);

})(angular);
