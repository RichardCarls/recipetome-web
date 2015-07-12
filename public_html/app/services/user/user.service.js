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

  function UserService($http, $window) {
    var _currentUser = null;

    function getCurrentUser() {
      return _currentUser;
    }

    function setCurrentUser(user) {
      _currentUser = user;
    }

    function getUserProfile() {
      $http.get('http://localhost:3000/api/v1/user/' + _currentUser._id, {
        headers: {
          'x-access-token': $window.sessionStorage.token,
        }
      }).success(function(data) {
        return data;
      });
    }

    return {
      getCurrentUser: getCurrentUser,
      setCurrentUser: setCurrentUser,
      getUserProfile: getUserProfile,
    };
  }

})(angular);
