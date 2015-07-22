/**
 * @name RTIngredient:directive
 * @description Directive recognizes the following attributes:
 * - `ingredient`: An RTRecipe ingredient object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `inline`
 * 	 or `form`. (optional, default: 'inline')
 * - `onRemove`: Callback to call when the 'remove' button is clicked. If no
 *   callback is set, the remove button is not shown. (optional, `form` only)
 * @see RecipeTome/Components/RTIngredient
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTIngredient
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient')
      .directive('rtIngredient', RTIngredient);

  /**
   * @class
   */
  function RTIngredient() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    // ---
    var directive = {
      restrict: 'AE',
      controller: 'RTIngredientController',
      controllerAs: 'vm',
      scope: {
        ingredient: '=',
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
      vm.format = scope.format;
      vm.ingredient = scope.ingredient;
      vm.onRemove = scope.onRemove;
      // ---

      /**
       * Returns the HTML template associated with the specified 'format'.
       *
       * @return {String} The template file URL
       */
      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_CARD:
            return 'app/components/recipe/recipe-card.template.html';
          case FORMAT_FULL:
            return 'app/components/recipe/recipe-full.template.html';
          case FORMAT_FORM:
            return 'app/components/recipe/recipe-form.template.html';
          default:
            return 'app/components/recipe/recipe-card.template.html';
        }
      };
    }
  }

})(angular);
