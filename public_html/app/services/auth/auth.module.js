/**
 * @name AuthService
 * @description Provides API for backend auth endpoints in Recipe Tome.
 * @see RecipeTome/Services/AuthService:service
 * @requires angular-jwt {@link https://github.com/auth0/angular-jwt}
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services/AuthService
 * @memberof RecipeTome/Services
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.auth', [
      'angular-jwt',
    ]);

})(angular);
