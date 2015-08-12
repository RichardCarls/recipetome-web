/**
 * @name UserMenu:directive
 * @description Directive for UserMenu component.
 * @see RecipeTome/Components/UserMenu
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.usermenu')
      .directive('userMenu', UserMenu);

  /**
   * @class
   */
  function UserMenu() {

    // ---
    var directive = {
      restrict: 'AE',
      replace: true,
      controller: 'UserMenuController',
      controllerAs: 'vm',
      templateUrl: 'app/components/usermenu/usermenu.template.html',
    };

    return directive;
    // ---
  }

})(angular);
