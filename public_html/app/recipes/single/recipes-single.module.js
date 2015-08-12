/**
 * @name RecipesSingle
 * @description Recipes single view module for Recipe Tome.
 * @requires RecipeTome/Services/RecipeService
 * @see RecipeTome/Recipes
 * @see RecipeTome/Recipes/List
 * @since 0.1.1
 *
 * @namespace RecipeTome/Recipes/Single
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.single', [
      'ui.router',
      'services.recipe',
    ]);

})(angular);
