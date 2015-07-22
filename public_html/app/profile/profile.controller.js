/**
 * @name Profile:controller
 * @description Controller for the {@linkcode Profile} view.
 * @see RecipeTome/Profile
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
      .controller('ProfileController', ProfileController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {Recipetome/Service/UserService} UserService
   * @param {Object} user
   */
  function ProfileController($state, UserService, user) {
    var vm = this;

    /**
     * The logged-in user, resolved from $stateProvider.
     *
     * @type {Object}
     */
    vm.user = user;

    /**
     * Resolves to the user's gravatar avatar URI.
     */
    vm.gravatarImage = UserService.getGravatarAvatarUrl();

    // TODO: Encrypt user password(s) before sending to server

    /**
     * Prototype credentials object for profile edit form.
     *
     * @type {Object}
     */
    vm.credentials = {
      email: '',
      password: '',
      current_password: '',
    };

    // ---
    vm.updateCredentials = UserService.updateCredentials;
    vm.doUnregister = doUnregister;
    // ---

    /**
     * Initiate request to server to update user data. Calling this method
     * refreshes the view, loading the new user data from the server.
     * @param  {Object} credentials
     */
    function updateCredentials(credentials) {
      UserService
        .updateCredentials(credentials)
          .then(function() {
            // TODO: Show success/error message
            $state
              .go('profile', {}, { refresh: true, });
          });
    }

    /**
     * Initiate request to server to delete the user, the user's recipes and
     * uploads, and revoke api access. Calling this method redirects the user
     * to the 'welcome' view.
     */
    function doUnregister() {
      UserService
        .unregister()
        .then(function() {
          // TODO: Show success/error message
          $state
            .go('welcome');
        });
    }
  }

})(angular);
