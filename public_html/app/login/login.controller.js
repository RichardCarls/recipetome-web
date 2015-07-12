/**
 * Recipe Tome login view controller
 * @namespace RecipeTome/Login/Controller
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  function LoginController($scope, $location, AuthService, UserService) {
    $scope.login = {
      user: {
        email: '',
        password: '',
      },
      loginLocal: doLocalLogin,
      authenticate: doProviderAuthentication,
    };

    function doLocalLogin(user) {
      AuthService
        .doLocalLogin(user)
        .then(function() {
          if (UserService.getCurrentUser()) {
            $location.path('/profile');
          }
        });
    }

    function doProviderAuthentication(provider) {
      // TODO: Do user authentication and register local user and redirect to profile
    }

  }

})(angular);
