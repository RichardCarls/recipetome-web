/**
 * Recipe Tome recipes add view controller
 * @namespace RecipeTome/Recipes/List/Controller
 * @memberof RecipeTome/Recipes/List
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  function RecipesListController(recipes) {
    var vm = this;

    vm.recipes = recipes;
    vm.filter = filter;

    // TODO: Resolve in state routing with RecipeService call
    vm.categories = [
      { slug: 'beef', label: 'Beef', },
      { slug: 'crap', label: 'Crap', },
    ];

    function filter() {
      if (vm.categoryFilter) {
        return { category: vm.categoryFilter, };
      }

      return '';
    }

  }

})(angular);
