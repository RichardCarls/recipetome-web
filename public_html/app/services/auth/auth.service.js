/**
 * Recipe Tome user authentication service
 *
 * @namespace RecipeTome/Services/Auth/Service
 * @memberof RecipeTome/Services/Auth
 */
;(function(angular) {

  angular
    .module('services.auth')
      .service('AuthService', AuthService);

  function AuthService($http, $window, jwtHelper, UserService) {

    this.doLocalRegistration = function(user) {
      return $http
        .post('/auth/local/register', user)
        .success(onAuthSuccess)
        .error(onRegistrationError);
    };

    this.doLocalLogin = function(user) {
      return $http
        .post('/auth/local', user)
        .success(onAuthSuccess)
        .error(onLoginError);
    };

    function onAuthSuccess(data) {
      $window.sessionStorage.token = data.token;

      UserService
        .setCurrentUser(jwtHelper.decodeToken(data.token));
    }

    function onRegistrationError(data) {
      $window.sessionStorage.token = null;
      
      // TODO: Provide error feedback
    }

    function onLoginError(data) {
      $window.sessionStorage.token = null;

      // TODO: Provide error feedback
    }

  }

})(angular);
