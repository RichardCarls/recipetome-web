/**
 * @name Components
 * @description Defines components required by Recipe Tome.
 * @requires RecipeTome/Components/UserMenu
 * @requires RecipeTome/Components/RTRecipe
 * @requires RecipeTome/Components/RTIngredient
 * @requires RecipeTome/Components/RTStep
 * @requires RecipeTome/Components/InputMatch
 * @requires RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.components', [
      'components.usermenu',
      'components.recipe',
      'components.ingredient',
      'components.step',
      'components.inputMatch',
      'components.masonry',
    ]);

})(angular);
