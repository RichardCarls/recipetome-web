/**
 * @name RecipesEdit
 * @description Recipes create/edit view module for Recipe Tome.
 * @requires RecipeTome/Services/RecipeService
 * @see RecipeTome/Recipes
 * @see RecipeTome/Recipes/RecipesEdit:controller
 * @since 0.1.1
 *
 * @namespace RecipeTome/Recipes/RecipesEdit
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.edit', [
      'ui.router',
      'services.recipe',
      'slugifier',
      'angular-sortable-view',
    ]);

})(angular);
