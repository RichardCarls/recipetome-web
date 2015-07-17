/**
 * @desc attribute directive for `<input>` elements that validates a matching
 * value to another `<input>`.
 *
 * @example <input type="text" name="input2" input-match="input1">
 *
 * @namespace RecipeTome/Components/InputMatch/Directive
 * @memberof RecipeTome/Components/InputMatch
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.inputMatch')
      .directive('inputMatch', InputMatch);

  function InputMatch() {

    var directive = {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        inputMatch: '=',
      },
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      if (!scope.inputMatch) { return; }

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
