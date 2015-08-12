/**
 * @name UserMenu
 * @description Directive for displaying a top-level user menu reflecting auth
 * state.
 * @example <nav user-menu></nav>
 * @requires RecipeTome/Services/UserService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/UserMenu
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.usermenu', [
      'ui.router',
      'services.user',
    ]);

})(angular);
