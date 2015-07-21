/**
 * Recipe Tome signup view controller
 * @namespace RecipeTome/SignUp/Controller
 * @memberof RecipeTome/SignUp
 */
;(function(angular) {

  angular
    .module('recipetome.signup')
      .controller('SignUpController', SignUpController);

  function SignUpController($state, AuthService) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    };

    vm.registerLocal = doLocalRegistration;

    function doLocalRegistration() {
      AuthService
        .doLocalRegistration(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state.go('profile');
        });
    }

  }

})(angular);
