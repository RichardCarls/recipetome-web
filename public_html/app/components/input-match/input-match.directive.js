/**
 * @name InputMatch:directive
 * @description Directive recognizes the following attributes:
 * - `inputMatch`: The form model to match against. (required)
 * @see RecipeTome/Components/InputMatch
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/InputMatch
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.inputMatch')
      .directive('inputMatch', InputMatch);

  /**
   * @class
   */
  function InputMatch($parse) {

    // ---
    var directive = {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        inputMatch: '=',
      },
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {angular.ngModel} ngModel
     */
    function link(scope, element, attrs, ngModel) {
      // Register custom validation function
      ngModel.$validators.inputMatch = validator;

      if (angular.isObject(scope.inputMatch) &&
          scope.inputMatch.hasOwnProperty('$viewValue')) {
        // If target is ngModel, add a $viewChangeListener to trigger validation
        scope.inputMatch.$viewChangeListeners.push(function() {
          ngModel.$$parseAndValidate();
        });
      } else {
        // Else, just put a watch on the value
        scope.$watch(scope.inputMatch, function() {
          ngModel.$$parseAndValidate();
        });
      }

      /**
       * Custom input validator function to test matching view values.
       *
       * @param  {*} modelValue ngModel $modelValue of this input
       * @param  {*} viewValue ngModel $viewValue of this input
       * @return {Boolean} `true` if valid, `false` otherwise
       */
      function validator(modelValue, viewValue) {
        if (angular.isObject(scope.inputMatch) &&
            scope.inputMatch.hasOwnProperty('$viewValue')) {
          return Boolean(viewValue === scope.inputMatch.$viewValue);
        } else {
          return Boolean(viewValue === scope.inputMatch);
        }
      }
    }
  }

})(angular);
