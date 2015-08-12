/**
 * @name RecipesList
 * @description Recipes list view module for Recipe Tome.
 * @requires RecipeTome/Services/RecipeService
 * @see RecipeTome/Recipes
 * @see RecipeTome/Recipes/Single:controller
 * @since 0.1.1
 *
 * @namespace RecipeTome/Recipes/List
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.list', [
      'ui.router',
      'services.recipe',
    ]);

})(angular);
