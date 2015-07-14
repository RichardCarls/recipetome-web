/**
 * Recipe Tome recipes view routes
 *
 * @namespace RecipeTome/Recipes/Routes
 * @memberof RecipeTome/Recipes
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .config(RecipesRoutesConfig);

  function RecipesRoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('recipes', {
        abstract: true,
        templateUrl: 'app/recipes/recipes.view.html',
        controller: 'RecipesController',
      })
      .state('recipes.list', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes-list.view.html',
        controller: 'RecipesListController',
      })
      .state('recipes.add', {
        url: '/recipes/add',
        templateUrl: 'app/recipes/recipes-add.view.html',
        controller: 'RecipesAddController',
      });
  }

})(angular);
