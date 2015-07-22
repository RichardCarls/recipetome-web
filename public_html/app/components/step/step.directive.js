/**
 * @name RTStep:directive
 * @description Directive recognizes the following attributes:
 * - `step`: An RTRecipe recipe step object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `inline`
 * 	 or `form`. (optional, default: 'inline')
 * - `onRemove`: Callback to call when the 'remove' button is clicked. If no
 *   callback is set, the remove button is not shown. (optional, `form` only)
 * @see RecipeTome/Components/RTStep
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTStep
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.step')
      .directive('rtStep', RTStep);

  /**
   * @class
   */
  function RTStep() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    // ---
    var directive = {
      restrict: 'AE',
      controller: 'RTStepController',
      controllerAs: 'vm',
      scope: {
        step: '=',
        format: '@',
        onRemove: '&',
      },
      template: '<div ng-include="vm.getTemplateUrl()"></div>',
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {RecipeTome/Components/RTIngredient:controller} vm
     */
    function link(scope, element, attrs, vm) {

      // ---
      vm.step = scope.step;
      vm.format = scope.format;
      vm.onRemove = scope.onRemove;
      // ---

      /**
       * Returns the HTML template associated with the specified 'format'.
       *
       * @return {String} The template file URL
       */
      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_INLINE:
            return 'app/components/step/step-block.template.html';
          case FORMAT_FORM:
            return 'app/components/step/step-form.template.html';
          default:
            return 'app/components/step/step-block.template.html';
        }
      };
    }
  }

})(angular);
