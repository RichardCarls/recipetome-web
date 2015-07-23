/**
 * @name Login:controller
 * @description Controller for the {@linkcode Login} view.
 * @see RecipeTome/Login
 * @since 0.1.0
 *
 * @memberof RecipeTome/Login
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {flash.Flash} Flash
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function LoginController($state, Flash, AuthService) {
    var vm = this;

    // TODO: Encrypt user password before sending to server

    /**
     * Prototype `User` object.
     *
     * @type {Object}
     */
    vm.user = {
      email: '',
      password: '',
    };

    // ---
    vm.loginLocal = doLocalLogin;
    // ---

    /**
     * Initiate user log in with local credentials (email + password). Calling
     * this method redirects the user to the 'profile' view.
     */
    function doLocalLogin() {
      AuthService
        .doLocalLogin(vm.user)
        .then(function(result) {
          if (result.success) {
            console.log('SUCCESS');
            Flash
              .create('success', 'Login successful.');

            $state
              .go('profile');
          } else {
            console.log('ERROR: ' + result.message);
            Flash
              .create('error', result.message);
          }
        });
    }
  }

})(angular);
