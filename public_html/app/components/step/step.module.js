/**
 * @name RTStep
 * @description Directive for displaying or editing individual `RTRecipe`
 * recipe steps (directions).
 * @example
 * // To display step data in a compact block
 * <rt-step step="myRecipe.steps[0]" format="inline"></rt-step>
 *
 * // As form fields
 * <rt-step step="step"
 * 					format="form"
 * 					on-remove="myCtrl.removeStep(step)">
 * </rt-step>
 * @see RecipeTome/Components/RTRecipe
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTStep
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.step', [
      'ui.bootstrap',
    ]);

})(angular);
