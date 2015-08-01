;(function() {
  'use strict';

  describe('UNIT components.recipe', function() {

    var directiveTemplate,
        cardTemplate,
        $scope,
        element;

    beforeEach(module('components.recipe'));

    beforeEach(inject(function($rootScope, $templateCache, $compile) {
      directiveTemplate = $(
        '<rt-recipe recipe="recipe" format="card">\n' +
        '</rt-recipe>'
      );

      $templateCache.put('app/components/recipe/recipe-card.template.html',
        '<div>\n' +
        '  <span id="title" ng-bind="vm.recipe.title"></span>\n' +
        '  <span id="description" ng-bind="vm.recipe.description"></span>\n' +
        '  <span id="thumbnail" ng-bind="vm.getThumbnail()"></span>\n' +
        '  <span id="category" ng-bind="vm.recipe.category.label"></span>\n' +
        '  <span id="prep_time" ng-bind="vm.recipe.prep_time"></span>\n' +
        '  <span id="cook_time" ng-bind="vm.recipe.cook_time"></span>\n' +
        '  <span id="yield_qty" ng-bind="vm.recipe.yield_qty"></span>\n' +
        '  <ol>\n' +
        '    <li ng-repeat="ingredient in vm.recipe.ingredients"\n' +
        '        ng-bind="ingredient.name"></li>\n' +
        '  </ol>\n' +
        '  <ol>\n' +
        '    <li ng-repeat="step in vm.recipe.steps"\n' +
        '        ng-bind="step.name"></li>\n' +
        '  </ol>\n' +
        '</div>'
      );

      $scope = $rootScope;
      $scope.recipe = { ingredients: [], steps: [], };
      element = $compile(directiveTemplate)($scope);
      $scope.$digest();
    }));

    it('displays recipe data', function() {
      $scope.recipe.title = 'Test Recipe';
      $scope.recipe.description = 'A test recipe';
      $scope.recipe.thumbnail = '/user_data/1/img.jpeg';
      $scope.recipe.category = { slug: 'test', label: 'Test', };
      $scope.recipe.prep_time = 15;
      $scope.recipe.cook_time = 30;
      $scope.recipe.yield_qty = 3;

      $scope.recipe.ingredients.push({ name: 'Ingredient1', });
      $scope.recipe.ingredients.push({ name: 'Ingredient2', });
      $scope.recipe.ingredients.push({ name: 'Ingredient3', });

      $scope.recipe.steps.push({ name: 'Step1', });
      $scope.recipe.steps.push({ name: 'Step2', });
      $scope.recipe.steps.push({ name: 'Step3', });

      $scope.$digest();

      for (var key in $scope.recipe) {
        if ($scope.recipe.hasOwnProperty(key)) {
          if (key === 'category') {
            expect(element.html()).toContain($scope.recipe.category.label);
          } else if (key === 'ingredients' || key === 'steps') {
            expect(element.html()).toContain($scope.recipe[key][0].name);
          } else {
            expect(element.html()).toContain($scope.recipe[key]);
          }
        }
      }
    });
  });
})();
