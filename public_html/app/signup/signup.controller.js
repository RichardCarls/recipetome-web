/**
 * @name Signup:controller
 * @description Controller for the {@linkcode RecipeTome/Signup} view.
 * @see RecipeTome/Signup
 * @since 0.1.0
 *
 * @memberof RecipeTome/Signup
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.signup')
      .controller('SignUpController', SignUpController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {flash.Flash} Flash
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function SignUpController($state, Flash, AuthService) {
    var vm = this;
    
    /**
     * Prototype `User` object for signup form.
     *
     * @type {Object}
     */
    vm.user = {
      email: '',
      password: '',
    };

    // ---
    vm.registerLocal = doLocalRegistration;
    // ---

    /**
     * Initiate request to server for user registration. Calling this method
     * redirects the user to the 'profile' view.
     */
    function doLocalRegistration() {
      AuthService
        .doLocalRegistration(vm.user)
        .then(function(result) {
          if (result.success) {
            Flash
              .create('success', 'Registration successful.');

            $state
              .go('profile');
          } else {
            Flash
              .create('error', result.message);
          }
        });
    }
  }

})(angular);
