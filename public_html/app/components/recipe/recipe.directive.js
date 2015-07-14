/**
 * Recipe Tome recipe component directive
 *
 * @namespace RecipeTome/Components/Recipe/Directive
 * @memberof RecipeTome/Components/Recipe
 */
;(function(angular) {

  angular
    .module('components.recipe')
      .directive('recipe', Recipe);

  function Recipe() {
    var directive = {
      restrict: 'AE',
      controller: 'RecipeController',
      scope: {
        recipe: '=',
      },
      templateUrl: 'app/components/recipe/recipe.template.html',
    };

    return directive;

  }

})(angular);
