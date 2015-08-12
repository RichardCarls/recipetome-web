/**
 * @name Recipes:routes
 * @description Recipe Tome recipes view routes.
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes')
      .config(RecipesRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   * @param {ui.router.$urlRouterProvider} $urlRouterProvider
   */
  function RecipesRoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Recipes list
      .state('recipes', {
        url: '/recipes?category',
        templateUrl: 'app/recipes/list/recipes-list.view.html',
        controller: 'RecipesListController',
        controllerAs: 'vm',
        reloadOnSearch: false,
        params: {
          category: {
            value: '',
            squash: true,
          },
        },
        resolve: {
          recipes: function(RecipeService) {
            return RecipeService.query().$promise;
          },
          categories: function($http, $window) {
            return $http.get('/api/user/categories', {
              headers: {
                'x-access-token': $window.sessionStorage.id_token,
              }
            }).then(function(response) {
              return response.data;
            }).catch(function() {
              return [{ slug: '', label: '', }];
            });
          },
        },
      })
      // Recipes create view
      .state('recipes.edit', {
        url: '/edit/:recipeId?step',
        templateUrl: 'app/recipes/edit/recipes-edit.view.html',
        controller: 'RecipesEditController',
        controllerAs: 'vm',
        params: {
          step: {
            value: '1',
            squash: true,
          },
        },
        resolve: {
          recipe: function($stateParams, RecipeService) {
            if ($stateParams.recipeId) {
              return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
            } else {
              return null;
            }
          },
        },
      })
      // Recipes single view
      .state('recipes.view', {
        url: '/:recipeId',
        templateUrl: 'app/recipes/single/recipes-single.view.html',
        controller: 'RecipesSingleController',
        controllerAs: 'vm',
        resolve: {
          recipe: function($stateParams, RecipeService) {
            return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
          },
        },
      });
  }

})(angular);
