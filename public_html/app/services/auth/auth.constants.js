/**
 * Recipe Tome user authentication constants
 *
 * @namespace RecipeTome/Services/Auth/Constants
 * @memberof RecipeTome/Services/Auth
 */
;(function(angular) {

  angular
    .module('services.auth')
      .constant('AUTH_EVENTS', AUTH_EVENTS);

  var AUTH_EVENTS = {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized',
  };

})(angular);
