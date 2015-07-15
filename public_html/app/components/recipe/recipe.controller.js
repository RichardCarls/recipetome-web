/**
 * Recipe Tome recipe component controller
 *
 * @namespace RecipeTome/Components/Recipe/Controller
 * @memberof RecipeTome/Components/Recipe
 */
;(function(angular) {

  angular
    .module('components.recipe')
      .controller('RTRecipeController', RTRecipeController);

  function RTRecipeController($state, RecipeService) {
    var vm = this;

    vm.rating = { max: 5, };

    vm.getThumbnail = getThumbnail;
    vm.uploadPicture = uploadPicture;
    vm.addIngredient = addIngredient;
    vm.removeIngredient = removeIngredient;
    vm.addStep = addStep;
    vm.removestep = removeStep;
    vm.saveRecipe = saveRecipe;
    vm.deleteRecipe = deleteRecipe;

    function getThumbnail() {
      if (!vm.recipe || !vm.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return vm.recipe.thumbnail;
    }

    function uploadPicture() {
      // TODO: Implement for 0.1.0
    }

    function moveIngredient(direction) {
      // TODO: Implement for 0.1.0
    }

    function addIngredient() {
      vm.recipe.ingredients.push({
        order: vm.recipe.ingredients.length + 1,
      });
    }

    function removeIngredient(ingredient) {
      var index = vm.recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        vm.recipe.ingredients.splice(index, 1);
      }
    }

    function addStep() {
      vm.recipe.steps.push({
        order: vm.recipe.steps.length + 1,
      });
    }

    function removeStep(step) {
      var index = vm.recipe.steps.indexOf(step);
      if (index !== -1) {
        vm.recipe.steps.splice(index, 1);
      }
    }

    function saveRecipe() {
      if (vm.recipe._id) {
        // Recipe exists in the database, so do update
        vm.recipe = RecipeService.update({ recipeId: vm.recipe._id, }, vm.recipe);
      } else {
        // New recipe, do save
        vm.recipe = RecipeService.save(vm.recipe);
      }

      // TODO: Show success/error message
      $state.go('^.view', { recipeId: vm.recipe._id, });
    }

    function deleteRecipe() {
      RecipeService.remove({ recipeId: vm.recipe._id, });

      // TODO: Show success/error message, provide undo action
      $state.go('^.list');
    }
  }

})(angular);
