/**
 * @name AuthService:service
 * @description Service definition for AuthService. Provides methods to interact
 * with backend auth endpoints and facilitate the granting and revoking of api
 * access with JWT id tokens.
 * @see RecipeTome/Services/AuthService
 * @requires angular-jwt {@link https://github.com/auth0/angular-jwt}
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/AuthService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.auth')
      .factory('AuthService', AuthService);

  /**
   * @class
   * @param {angular.$http} $http
   * @param {angular.$window} $window
   * @param {angular-jwt.jwt} jwtHelper
   */
  function AuthService($http, $window, jwtHelper) {

    // TODO: Add verify function

    // ---
    var service = {
      doLocalRegistration: doLocalRegistration,
      doLocalLogin: doLocalLogin,
      revoke: revoke,
    };

    return service;
    // ---

    /**
     * Takes user credentials then attempts to register and authorize a new user.
     *
     * @param  {Object} user
     * @return {Promise} The angular.$http promise.
     */
    function doLocalRegistration(user) {
      return $http
        .post('/auth/local/register', user)
        .then(onAuthSuccess)
        .catch(onAuthError);
    }

    /**
     * Takes user credentials and attempts to authorize an existing user.
     *
     * @param  {Object} user
     * @return {Promise} The angular.$http promise.
     */
    function doLocalLogin(user) {
      return $http
        .post('/auth/local', user)
        .then(onAuthSuccess)
        .catch(onAuthError);
    }

    /**
     * Revokes the user's authentication by deleting the stored JWT id token.
     */
    function revoke() {
      $window
        .sessionStorage
          .removeItem('id_token');
    }

    /**
     * Handle successful authentication.
     *
     * @callback
     * @param  {Object} responseBody Body of the response object
     */
    function onAuthSuccess(response) {
      var id_token = response.data.id_token;

      if (id_token) {
        $window.sessionStorage.id_token = id_token;

        return { success: true, };
      } else {
          return { success: false, message: 'No id token with response.', };
      }
    }

    /**
     * Handle authentication errors.
     *
     * @param  {Object} responseBody Body of the response object
     */
    function onAuthError(response) {
      revoke();

      return { success: false, message: response.data, };
    }
  }

})(angular);
