/**
 * Recipe Tome profile view controller
 * @namespace RecipeTome/Profile/Controller
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .controller('ProfileController', ProfileController);

  function ProfileController($scope, UserService) {
    $scope.profile = {
      userProfile: UserService.getUserProfile(),
    };
  }

})(angular);
