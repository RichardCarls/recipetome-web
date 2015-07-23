/**
 * @name Recipes:Single:controller
 * @description Controller for the {@linkcode Recipes:Single} view.
 * @see RecipeTome/Recipes
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
      .controller('RecipesViewController', RecipesViewController);

  /**
   * @class
   * @param {Object} recipe
   * @param {String} format
   */
  function RecipesViewController(recipe, format) {
    var vm = this;

    /**
     * Current recipe, resolved from $stateProvider.
     *
     * @type {Object}
     */
    vm.recipe = recipe;

    /**
     * Format to show the recipe.
     *
     * @see {@linkcode RecipeTome/Components/RTRecipe} for possible formats.
     * @type {String}
     */
    vm.format = format;
  }

})(angular);
