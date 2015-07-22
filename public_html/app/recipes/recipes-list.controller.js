/**
 * @name Recipes:List:controller
 * @description Controller for the {@linkcode Recipes:List} view.
 * @see Recipes
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  /**
   * @class
   * @param {Object[]} recipes
   * @param {Object[]} categories
   */
  function RecipesListController(recipes, categories) {
    var vm = this;

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
    vm.categoryFilter = '';
  }

})(angular);
