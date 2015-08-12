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
   * @param {flash.Flash} Flash
   * @param {Recipetome/Services/UserService} UserService
   * @param {Object} user
   */
  function ProfileController($state, toaster, UserService, user) {
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

    /**
     * Prototype credentials object for profile edit form.
     *
     * @type {Object}
     */
    vm.credentials = {
      email: user.email,
      password: '',
      current_password: '',
    };

    // ---
    vm.updateCredentials = updateCredentials;
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
          .then(function(result) {
            if (result.success) {
              toaster.pop(
                'success', 'Credentials updated',
                'Successfully updated your profile information.'
              );

              $state
                .go('profile', {}, { reload: true, });
            } else {
              toaster.pop(
                'error', 'Problem updating credentials',
                result.message
              );
            }
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
        .then(function(result) {
          if (result.success) {
            toaster.pop(
              'success', 'Your account has been deleted',
              'Thanks for using Recipe Tome!'
            );

            $state
              .go('welcome');
          } else {
            toaster.pop(
              'error', 'Problem with unregistration',
              result.message
            );
          }
        });
    }
  }

})(angular);
