/**
 * Recipe Tome user menu component controller
 *
 * @namespace RecipeTome/Components/UserMenu/Controller
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {

  angular
    .module('components.usermenu')
      .controller('UserMenuController', UserMenuController);

  function UserMenuController($state, UserService) {
    var vm = this;

    vm.isLoggedIn = UserService.isLoggedIn;
    vm.logout = logout;

    function logout() {
      UserService.logout();

      // TODO: Show success/error message
      $state.go('welcome');
    }
  }

})(angular);
