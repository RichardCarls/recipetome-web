/**
 * Recipe Tome profile view module
 *
 * This view state represents an authenticated user's profile
 *
 * @namespace RecipeTome/Profile
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.profile', [
      'ui.router',
      'ui.bootstrap',
      'services.user',
      'components.inputMatch',
    ]);

})(angular);
