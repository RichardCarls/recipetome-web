/**
 * @name RTRecipe
 * @description Directive for displaying or editing individual recipes.
 * @example
 * // To display select recipe info suitable for a tile or 'card'
 * <ol>
 *   <li>
 *     <rt-recipe recipe="myRecipe" format="card"></rt-recipe>
 *   </li><!-- etc... -->
 * </ol>
 *
 * // Display all recipe data in a full-page view
 * <rt-recipe recipe="recipe"
 * 						format="full">
 * </rt-recipe>
 *
 * // As a full-page form for editing an existing recipe, or creating a new one
 * <rt-recipe recipe="existingRecipe"
 * 						format="form">
 * </rt-recipe>
 * @see RecipeTome/Recipes
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTRecipe
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.recipe', [
      'ui.bootstrap',
      'ui.router',
      'slugifier',
      'flow',
      'angular-sortable-view',
      'services.recipe',
    ]);

})(angular);
