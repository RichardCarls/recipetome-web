/**
 * Recipe Tome profile view controller
 * @namespace RecipeTome/Profile/Controller
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .controller('ProfileController', ProfileController);

  function ProfileController($state, user, UserService) {
    var vm = this;

    vm.user = user;
    vm.gravatarImage = UserService.getGravatarAvatarUrl();
    vm.credentials = {
      email: '',
      password: '',
      current_password: '',
    };

    vm.updateCredentials = UserService.updateCredentials;
    vm.doUnregister = doUnregister;

    function updateCredentials(credentials) {
      UserService
        .updateCredentials(credentials)
          .then(function() {
            // TODO: Reload profile after submit?
            $state.go('profile');
          });
    }

    function doUnregister() {
      UserService
        .unregister()
        .then(function() {
          // TODO: Show success/error message
          $state.go('welcome');
        });
    }
  }

})(angular);
