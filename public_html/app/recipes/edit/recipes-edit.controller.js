/**
 * @name RecipesEdit:controller
 * @description Controller for the {@linkcode RecipesEdit} view.
 * @see RecipeTome/Recipes/Create
 * @since 0.1.1
 *
 * @memberof RecipeTome/Recipes/RecipesEdit
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipes.edit')
      .controller('RecipesEditController', RecipesEditController);

  /**
   * @class
   * @param {angular.$scope} $scope
   * @param {angular.$window} $window
   * @param {ui.router.$state} $state
   * @param {ui.router.$stateParams} $stateParams
   * @param {Object} recipe
   */
  function RecipesEditController($scope, $window, $state, $stateParams, toaster, AuthService, RecipeService, UploadService, Slug, recipe) {
    var vm = this;

    /**
     * In-progress recipe or new recipe object
     *
     * @type {Object}
     */
    vm.recipe = getRecipeProgress();

    vm.idToken = AuthService.getIdToken();
    vm.currentWizardStep = $stateParams.step;

    // ---
    vm.onPictureSelected = onPictureSelected;
    vm.generateCategorySlug = generateCategorySlug;
    vm.addIngredient = addIngredient;
    vm.onIngredientReorder = onIngredientReorder;
    vm.removeIngredient = removeIngredient;
    vm.addStep = addStep;
    vm.onStepReorder = onStepReorder;
    vm.removeStep = removeStep;
    vm.saveRecipe = saveRecipe;
    // ---

    $scope.$on('$stateChangeStart', onStateChangeStart);

    function onStateChangeStart(event, toState, toParams, fromState, fromParams) {
      // FIXME: Form templates reloaded $pristine on step change, use `reloadOnSearch: false`?
      // Save wizard form data as recipe in localStorage
      if ($scope.form.$dirty && !$scope.form.$submitted) {
        $window.sessionStorage.recipe = JSON.stringify(vm.recipe);

        // If leaving the form with unsaved data, notify the user
        if (toState.name !== 'recipes.edit') {
          // TODO: Implement rtToast for 'go back' and 'discard' buttons
          toaster.pop(
            'warning', 'You have unsaved work',
            'Unsaved changes will be lost if you edit another recipe or close your browser tab.'
          );
        }
      }
    }

    function getRecipeProgress() {
      if (recipe) {
        if ($window.sessionStorage.recipe) {
          var progress =  JSON.parse($window.sessionStorage.recipe);
          if (progress._id === recipe._id) {
            // Found progress on resolved recipe
            return angular.copy(progress, recipe);
          }
        }

        return recipe;
      }

      if ($window.sessionStorage.recipe) {
        // Found progress on unsaved recipe
        return JSON.parse($window.sessionStorage.recipe);
      }

      return {
        ingredients: [],
        steps: [],
      };
    }


    function onPictureSelected(files) {
      UploadService
        .uploadRecipePhoto(files[0])
        .then(function(response) {
          if (response.success) {
            toaster.pop(
              'success', 'Image uploaded successfully'
            );

            vm.recipe.thumbnail = response.thumbnailUrl;
          } else {
            toaster.pop(
              'error', 'Problem uploading image',
              response.message
            );
          }
        });
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
      var numIngredients = vm.recipe.ingredients.length;

      vm.recipe.ingredients.push({
        order: numIngredients + 1,
      });

      vm.currentIngredient = vm.recipe.ingredients[numIngredients];
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

      vm.currentIngredient = null;
    }


    /**
     * Add a new ingredient object to the current recipe.
     */
    function addStep() {
      var numSteps = vm.recipe.steps.length;

      vm.recipe.steps.push({
        order: numSteps + 1,
      });

      vm.currentStep = vm.recipe.steps[numSteps];
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

      vm.currentStep = null;
    }


    /**
     * Persist the current recipe to the server. This redirects the user to the
     * 'single' recipes view.
     */
    function saveRecipe() {
      if (vm.recipe._id) {
        // Recipe exists in the database, so do update
        RecipeService
          .update(
            { recipeId: vm.recipe._id, },
            vm.recipe,
            onSaveRecipeSuccess,
            onSaveRecipeError
          );
      } else {
        // New recipe, do save
        RecipeService
          .save(vm.recipe, onSaveRecipeSuccess, onSaveRecipeError);
      }

      /**
       * Handles successful recipe update or save.
       *
       * @callback
       * @param  {Object} recipe
       */
      function onSaveRecipeSuccess(recipe) {
        vm.recipe = recipe;

        $window.sessionStorage.removeItem('recipe');

        toaster.pop(
          'success', 'Recipe saved'
        );

        $state
          .go('^.view', { recipeId: vm.recipe._id, });
      }

      /**
       * Handles failed recipe update or save.
       *
       * @callback
       * @param  {Object} response
       */
      function onSaveRecipeError(response) {
        toaster.pop(
          'error', 'Problem saving recipe',
          response.message
        );
      }
    }
  }

})(angular);
