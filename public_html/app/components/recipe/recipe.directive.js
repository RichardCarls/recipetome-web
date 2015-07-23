/**
 * @name RTRecipe:directive
 * @description Directive recognizes the following attributes:
 * - `recipe`: A recipe object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `card`
 * 	 `full`, or `form`. (optional, default: 'card')
 * @see RecipeTome/Components/RTRecipe
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTRecipe
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.recipe')
      .directive('rtRecipe', RTRecipe);

  /**
   * @class
   */
  function RTRecipe() {
    var FORMAT_CARD = 'card',
        FORMAT_FULL = 'full',
        FORMAT_FORM = "form";

    // ---
    var directive = {
      restrict: 'AE',
      controller: 'RTRecipeController',
      controllerAs: 'vm',
      scope: {
        recipe: '=',
        format: '@',
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
     * @param  {RecipeTome/Components/RTRecipe:controller} vm
     */
    function link(scope, element, attrs, vm) {

      // ---
      if (attrs.format === FORMAT_FORM && !scope.recipe._id) {
        // New recipe
        vm.title = 'New Recipe';
      } else {
        // Existing recipe
        vm.title = 'Edit Recipe';
      }

      vm.recipe = scope.recipe;
      vm.format = scope.format;
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
