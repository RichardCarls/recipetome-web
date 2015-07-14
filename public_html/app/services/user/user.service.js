/**
 * Recipe Tome user service
 *
 * @namespace RecipeTome/Services/User/Service
 * @memberof RecipeTome/Services/User
 */
;(function(angular) {

  angular
    .module('services.user')
      .factory('UserService', UserService);

  function UserService($http, $window, $q, AuthService) {
    var _currentUser = null;

    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      logout: logout,
    };

    return service;

    function isLoggedIn() {
      return _currentUser ? true : false;
    }

    function getCurrentUser() {
      var deferred = $q.defer();

      if (_currentUser) {
        deferred.resolve(_currentUser);
      }

      // TODO: Implement verification in AuthService and call here
      if ($window.sessionStorage.id_token) {
        $http.get('/api/user/', {
          headers: {
            'x-access-token': $window.sessionStorage.id_token,
          }
        }).success(function(data) {
          _currentUser = data;
          deferred.resolve(_currentUser);
        }).error(function() {
          deferred.reject(null);
        });
      } else {
        deferred.reject(null);
      }

      return deferred.promise;
    }

    function logout() {
      AuthService.revoke();
      _currentUser = null;
    }

  }

})(angular);
