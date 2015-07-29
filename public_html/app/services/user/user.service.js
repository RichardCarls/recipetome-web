/**
 * @name UserService:service
 * @description Service definition for UserService. Provides an interface for
 * user functions like checking auth status, updating credentials and profile
 * info, and logging out.
 * @see RecipeTome/Services/UserService
 * @requires RecipeTome/Services/AuthService
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/UserService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.user')
      .factory('UserService', UserService);

  /**
   * @class
   * @param {angular.$http} $http
   * @param {angular.$window} $window
   * @param {angular.$q} $q
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function UserService($http, $window, $q, AuthService) {
    var GRAVATAR_BASEURL = 'https://secure.gravatar.com/avatar/';

    /**
     * Cached user object representing the current logged in user.
     *
     * @private
     * @type {Object}
     */
    var _currentUser = null;

    // ---
    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      getGravatarAvatarUrl: getGravatarAvatarUrl,
      updateCredentials: updateCredentials,
      unregister: unregister,
      logout: logout,
    };

    return service;
    // ---

    /**
     * Checks current user's auth status.
     *
     * @return {Boolean} `true` if logged in, `false` otherwise
     */
    function isLoggedIn() {
      return AuthService
        .verify();
    }

    /**
     * Returns the current logged-in user.
     *
     * @return {Promise} [description]
     */
    function getCurrentUser() {
      var deferred = $q.defer();

      if (_currentUser) {
        // Return cached user immediately
        deferred.resolve(_currentUser);
      }

      if (AuthService.verify()) {
        $http
          .get('/api/user/', {
            headers: {
              'x-access-token': AuthService.getIdToken(),
            }
          }).then(onGetCurrentUserSuccess)
            .catch(onGetCurrentUserError);
      } else {
        deferred.reject(null);
      }

      return deferred.promise;

      /**
       * Handles user retrieval success.
       *
       * @callback
       * @param  {Object} response
       */
      function onGetCurrentUserSuccess(response) {
        _currentUser = response.data;

        deferred.resolve(_currentUser);
      }

      /**
       * Handles user retrieval failure.
       *
       * @callback
       * @param  {Object} response
       */
      function onGetCurrentUserError(response) {
        deferred.reject(null);
      }
    }

    /**
     * Returns the user's Gravatar avatar URL.
     *
     * @return {String} Avatar URL
     */
    function getGravatarAvatarUrl() {
      if (!_currentUser) {
        return ''; // TODO: Return placeholder avatar
      }

      // Hash email to get Gravatar data
      var hash = CryptoJS.MD5(_currentUser.email.trim().toLowerCase()).toString();

      return GRAVATAR_BASEURL + hash + '.jpg';
    }

    /**
     * Attempts to update the user's credentials.
     *
     * @param  {Object} credentials
     * @return {Promise} angular.$http promise
     */
    function updateCredentials(credentials) {
      if (AuthService.verify()) {
        return $http
          .put('/api/user/', credentials, {
            headers: {
              'x-access-token': AuthService.getIdToken(),
            }
          }).then(onUpdateCredentialsSuccess)
            .catch(onUpdateCredentialsError);
      }

      /**
       * updateCredentials Success handler.
       *
       * @callback
       * @param  {Object} response
       * @return {Promise} Promised call to AuthService login
       */
      function onUpdateCredentialsSuccess(response) {
        _currentUser = response.data;

        return AuthService
          .doLocalLogin({
            email: _currentUser.email,
            password: credentials.password,
          });
      }

      /**
       * updateCredentials Error handler.
       *
       * @callback
       * @param  {Object} response
       */
      function onUpdateCredentialsError(response) {
        return { success: false, message: response.data, };
      }
    }

    /**
     * Attempts to remove the user account and revoke authorization.
     *
     * @return {Promise} angualr.$http promise
     */
    function unregister() {
      return $http
        .delete('/api/user/', {
          headers: {
            'x-access-token': AuthService.getIdToken(),
          },
        }).then(function(response) {
          logout();

          return { success: true, };
        }).catch(function(response) {
          return { success: false, message: response.data, };
        });
    }

    /**
     * Log the current user out by revoking authorization.
     */
    function logout() {
      AuthService
        .revoke();

      _currentUser = null;
    }
  }

})(angular);
