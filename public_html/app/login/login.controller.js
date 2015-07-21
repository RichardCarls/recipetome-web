/**
 * Recipe Tome login view controller
 * @namespace RecipeTome/Login/Controller
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  function LoginController($scope, $state, AuthService) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    };

    vm.loginLocal = doLocalLogin;

    function doLocalLogin() {
      AuthService
        .doLocalLogin(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state.go('profile');
        });
    }

  }

})(angular);
