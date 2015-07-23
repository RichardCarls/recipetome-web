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
  function InputMatch() {

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
      // Don't link if nothing specified to match
      if (!scope.inputMatch) { return; }

      /**
       * ngModel Parser/Formatter function.
       * @param  {*} value
       *
       * @return {*} The passed in value (no formatting performed)
       */
      function validateInput(value) {
        if (ngModel.$untouched || ngModel.$pristine) { return; }

        var targetValue = scope.inputMatch.$viewValue;
        var isMatch = Boolean(value === targetValue);

        ngModel.$setValidity('inputMatch', isMatch);

        return value;
      }

      ngModel.$parsers.unshift(validateInput);
      ngModel.$formatters.unshift(validateInput);
    }
  }

})(angular);
