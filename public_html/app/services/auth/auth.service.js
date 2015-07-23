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
        .success(onAuthSuccess)
        .error(onAuthError);
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
        .success(onAuthSuccess)
        .error(onAuthError);
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
    function onAuthSuccess(responseBody) {
      var id_token = responseBody.id_token;

      if (id_token) {
        $window.sessionStorage.id_token = id_token;
      }
    }

    /**
     * Handle authentication errors.
     *
     * @param  {Object} responseBody Body of the response object
     */
    function onAuthError(responseBody) {
      revoke();

      // TODO: Provide error feedback
    }
  }

})(angular);
