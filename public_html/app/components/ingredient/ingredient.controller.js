/**
 * Recipe Tome recipe ingredient component controller
 *
 * @namespace RecipeTome/Components/Ingredient/Controller
 * @memberof RecipeTome/Components/Ingredient
 */
;(function(angular) {

  angular
    .module('components.ingredient')
      .controller('RTIngredientController', RTIngredientController);

  function RTIngredientController() {
    var vm = this;

    vm.moveUp = function() {
      vm.ingredient.order -= 1;
    };

    vm.moveDown = function() {
      vm.ingredient.order += 1;
    };
  }

})(angular);
