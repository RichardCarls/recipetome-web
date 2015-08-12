/**
 * @name Recipes
 * @description Recipes view module for Recipe Tome.
 * @requires RecipeTome/Services/RecipeService
 * @see RecipeTome/Recipes:List:controller
 * @see RecipeTome/Recipes:Single:controller
 * @since 0.1.0
 *
 * @namespace RecipeTome/Recipes
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes', [
      'recipes.list',
      'recipes.single',
      'recipes.edit',
    ]);

})(angular);
