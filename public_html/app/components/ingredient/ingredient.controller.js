/**
 * @name RTIngredient:controller
 * @description Controller for the {@linkcode RTIngredient} directive.
 * @see RecipeTome/Components/RTIngredient
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTIngredient
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient')
      .controller('RTIngredientController', RTIngredientController);

  /**
   * @class
   */
  function RTIngredientController() {
    var vm = this;
  }

})(angular);
