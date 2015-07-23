/**
 * @name RecipeService:service
 * @description Service definition for RecipeService. Provides an `ngResource`
 * instance to perform CRUD operations on a user's recipes collection.
 * @see RecipeTome/Services/RecipeService
 * @requires angular-resource {@link https://github.com/angular/angular.js/tree/master/src/ngResource}
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/RecipeService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.recipe')
      .factory('RecipeService', RecipeService);

  /**
   * @class
   * @param {angular.$window} $window
   * @param {angular.$resource} $resource
   */
  function RecipeService($window, $resource) {

    /**
     * Headers to send with resource requests.
     * @type {Object}
     */
    var _headers = {
      'x-access-token': $window.sessionStorage.id_token,
    };

    // ---
    var service = $resource(
      '/api/user/recipes/:recipeId',
      { recipeId: '@recipeId', },
      {
        get: { method: 'GET', headers: _headers, },
        save: { method: 'POST', headers: _headers, },
        query: { method: 'GET', isArray: true, headers: _headers, },
        remove: { method: 'DELETE', headers: _headers, },
        delete: { method: 'DELETE', headers: _headers, },
        update: { method: 'PUT', headers: _headers, },
      });

    return service;
    // ---
    
  }

})(angular);
