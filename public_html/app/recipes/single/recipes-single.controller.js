/**
 * @name RecipesSingle:controller
 * @description Controller for the {@linkcode RecipesSingle} view.
 * @see RecipeTome/Recipes/RecipesSingle
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes/RecipesSingle
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.single')
      .controller('RecipesSingleController', RecipesSingleController);

  /**
   * @class
   * @param {Object} recipe
   */
  function RecipesSingleController($state, RecipeService, recipe) {
    var vm = this;

    /**
     * Current recipe, resolved from $stateProvider.
     *
     * @type {Object}
     */
    vm.recipe = recipe;

    vm.deleteRecipe = deleteRecipe;

    /**
     * Remove recipe from the database. Calling this redirects the user to the
     * 'list' recipes view
     */
    function deleteRecipe() {
      RecipeService
        .remove(
          { recipeId: vm.recipe._id, },
          onDeleteRecipeSuccess,
          onDeleteRecipeError
        );

      /**
       * Handles successful recipe deletion.
       *
       * @callback
       * @param  {Object} response
       */
      function onDeleteRecipeSuccess(response) {
        // TODO: Save recipe to session storage, provide undo option

        toaster.pop(
          'success', 'Recipe deleted'
        );

        $state
          .go('^');
      }

      /**
       * Handles failed recipe deletion.
       *
       * @callback
       * @param  {Object} response
       */
      function onDeleteRecipeError(response) {
        toaster.pop(
          'error', 'Problem deleting recipe',
          response.message
        );
      }
    }
  }

})(angular);
