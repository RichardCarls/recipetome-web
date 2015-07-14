/**
 * Recipe Tome recipes add view controller
 * @namespace RecipeTome/Recipes/List/Controller
 * @memberof RecipeTome/Recipes/List
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  function RecipesListController($scope, RecipeService) {
    $scope.categories = [
      { slug: 'beef', label: 'Beef', },
      { slug: 'crap', label: 'Crap', },
    ];

    $scope.recipes = RecipeService.query();
  }

})(angular);
