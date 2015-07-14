/**
 * Recipe Tome recipes add view controller
 * @namespace RecipeTome/Recipes/Add/Controller
 * @memberof RecipeTome/Recipes/Add
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesAddController', RecipesAddController);

  function RecipesAddController($scope, $state, RecipeService) {
    $scope.recipeForm = {
      recipe: {
        thumbnail: '',
        title: '',
        description: '',
        category: '',
        rating: 0,
        prep_time: NaN,
        cook_time: NaN,
        ingredients: [
          {
            order: 1,
            qty: NaN,
            measure: '',
            preparation: '',
          },
        ],
        steps: [
          {
            order: 1,
            summary: '',
            directions: '',
          },
        ],
      },
      rating: {
        max: 5,
      },
      thumbnailPreview: getThumbnailUri,
      addIngredient: addIngredient,
      removeIngredient: removeIngredient,
      addStep: addStep,
      removeStep: removeStep,
      save: saveRecipe,
    };

    function getThumbnailUri(uri) {
      if (!uri) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return uri;
    }

    function addIngredient() {
      $scope.recipeForm.recipe.ingredients.push({
        order: $scope.recipeForm.recipe.ingredients.length + 1,
      });
    }

    function removeIngredient(ingredient) {
      var index = $scope.recipeForm.recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        $scope.recipeForm.recipe.ingredients.splice(index, 1);
      }
    }

    function addStep() {
      $scope.recipeForm.recipe.steps.push({
        order: $scope.recipeForm.recipe.steps.length + 1,
      });
    }

    function removeStep(step) {
      var index = $scope.recipeForm.recipe.steps.indexOf(step);
      if (index !== -1) {
        $scope.recipeForm.recipe.steps.splice(index, 1);
      }
    }

    function saveRecipe(recipe) {
      RecipeService.save(recipe);
      $state.go('^.list');
    }
  }

})(angular);
