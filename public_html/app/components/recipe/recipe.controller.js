/**
 * Recipe Tome recipe component controller
 *
 * @namespace RecipeTome/Components/Recipe/Controller
 * @memberof RecipeTome/Components/Recipe
 */
;(function(angular) {

  angular
    .module('components.recipe')
      .controller('RecipeController', RecipeController);

  function RecipeController($scope) {
    $scope.getThumbnail = getThumbnail;

    function getThumbnail() {
      if (!$scope.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return $scope.recipe.thumbnail;
    }
  }

})(angular);
