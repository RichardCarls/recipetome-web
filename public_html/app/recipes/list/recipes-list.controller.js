/**
 * @name RecipesList:controller
 * @description Controller for the {@linkcode RecipesList} view.
 * @see RecipeTome/Recipes
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes/List
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.list')
      .controller('RecipesListController', RecipesListController);

  /**
   * @class
   * @param {ui.router.$stateParams} $stateParams
   * @param {Object[]} recipes
   * @param {Object[]} categories
   */
  function RecipesListController($location, $state, $stateParams, recipes, categories) {
    var vm = this;

    vm.updateQueryString = updateQueryString;

    /**
     * All the user's recipes, resolved from $stateProvider.
     *
     * @type {Object[]}
     */
    vm.recipes = recipes;

    /**
     * All unique categories used in user's recipes, resolved from
     * $stateProvider.
     *
     * @type {Object[]}
     */
    vm.categories = categories;

    /**
     * Currently selected category filter, by the `slug` property.
     *
     * @type {String}
     */
    vm.categoryFilter = $stateParams.category || '';

    
    function updateQueryString() {
      $location
        .search('category', vm.categoryFilter);
    }
  }

})(angular);
