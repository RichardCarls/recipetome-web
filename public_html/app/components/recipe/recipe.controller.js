/**
 * @name RTRecipe:controller
 * @description Controller for the {@linkcode RTRecipe} directive.
 * @see RTRecipe
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTRecipe
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.recipe')
      .controller('RTRecipeController', RTRecipeController);

  /**
   * @class
   *
   * @param {ui.router.state.$state} $state
   * @param {RecipeTome/Service/RecipeService} RecipeService
   * @param {slugifier} Slug
   */
  function RTRecipeController($state, RecipeService, Slug) {
    var vm = this;

    /**
     * Config for `rating` form control.
     * @type {Object}
     */
    vm.rating = { max: 5, };

    // ---
    vm.getThumbnail = getThumbnail;
    vm.onPictureUpload = onPictureUpload;
    vm.generateCategorySlug = generateCategorySlug;
    vm.addIngredient = addIngredient;
    vm.onIngredientReorder = onIngredientReorder;
    vm.removeIngredient = removeIngredient;
    vm.addStep = addStep;
    vm.onStepReorder = onStepReorder;
    vm.removeStep = removeStep;
    vm.saveRecipe = saveRecipe;
    vm.deleteRecipe = deleteRecipe;
    // ---

    // TODO: Save form fields in sessionStorage to persist through refresh

    /**
     * Get recipe thumbnail URI or default image URI.
     *
     * @return {String} recipe thumbnail, or default image URI
     */
    function getThumbnail() {
      if (!vm.recipe || !vm.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return vm.recipe.thumbnail;
    }

    /**
     * ng-flow upload success callback.
     *
     * @callback
     * @param  {FlowFile} file
     * @param  {Object} response
     * @param  {Flow} flow
     */
    function onPictureUpload(file, response, flow) {
      vm.recipe.thumbnail = JSON.parse(response).photo.url;
    }

    /**
     * Return the slugified category label.
     *
     * @return {String}
     */
    function generateCategorySlug() {
      vm.recipe.category.slug = Slug.slugify(vm.recipe.category.label);
    }

    /**
     * Add a new ingredient object to the current recipe.
     */
    function addIngredient() {
      vm.recipe.ingredients.push({
        order: vm.recipe.ingredients.length + 1,
      });
    }

    /**
     * Assign new order values to every ingredient. Call when any ingredient
     * is reordered.
     *
     * @callback
     */
    function onIngredientReorder() {
      for (var i = 0, len = vm.recipe.ingredients.length; i < len; i++) {
        vm.recipe.ingredients[i].order = i + 1;
      }
    }

    /**
     * Remove the specified ingredient from the current recipe.
     *
     * @param  {Object} ingredient
     */
    function removeIngredient(ingredient) {
      var index = vm.recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        vm.recipe.ingredients.splice(index, 1);
      }
    }

    /**
     * Add a new ingredient object to the current recipe.
     */
    function addStep() {
      vm.recipe.steps.push({
        order: vm.recipe.steps.length + 1,
      });
    }

    /**
     * Assign new order values to every recipe step. Call when any step
     * is reordered.
     *
     * @callback
     */
    function onStepReorder() {
      for (var i = 0, len = vm.recipe.steps.length; i < len; i++) {
        vm.recipe.steps[i].order = i + 1;
      }
    }

    /**
     * Remove the specified recipe step from the current recipe.
     *
     * @param  {Object} step
     */
    function removeStep(step) {
      var index = vm.recipe.steps.indexOf(step);
      if (index !== -1) {
        vm.recipe.steps.splice(index, 1);
      }
    }

    /**
     * Persist the current recipe to the server. This redirects the user to the
     * 'single' recipes view.
     */
    function saveRecipe() {
      if (vm.recipe._id) {
        // Recipe exists in the database, so do update
        RecipeService
          .update({ recipeId: vm.recipe._id, }, vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state
              .go('^.view', { recipeId: vm.recipe._id, });
          });
      } else {
        // New recipe, do save
        RecipeService
          .save(vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state
              .go('^.view', { recipeId: vm.recipe._id, });
          });
      }
    }

    /**
     * Remove recipe from the database. Calling this redirects the user to the
     * 'list' recipes view
     */
    function deleteRecipe() {
      RecipeService
        .remove({ recipeId: vm.recipe._id, }, function(response) {

          // TODO: Show success/error message
          // TODO: Save recipe to session storage, provide undo option
          $state
            .go('^.list');
        });
    }
  }

})(angular);
