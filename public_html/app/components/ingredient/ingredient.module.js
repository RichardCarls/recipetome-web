/**
 * @name RTIngredient
 * @description Directive for displaying or editing individual `RTRecipe`
 * ingredients.
 * @example
 * // To display ingredient data all in one line
 * <rt-ingredient ingredient="myRecipe.ingredients[0]" format="inline"></rt-ingredient>
 *
 * // As form fields
 * <rt-ingredient ingredient="ingredient"
 * 								format="form"
 * 								on-remove="myCtrl.removeIngredient(ingredient)">
 * </rt-ingredient>
 * @see RTRecipe
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTIngredient
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient', [
      'ui.bootstrap',
    ]);

})(angular);
