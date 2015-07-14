module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        Recipe = require('../model/recipe.js');

    // Query recipes
    router.get('/', queryRecipes);

    function queryRecipes(request, response) {
      var queryArgs = {
        user_id: request.user_id,
      };

      if (request.query.category) {
        queryArgs.category = request.query.category;
      }

      Recipe
        .find(queryArgs, function(error, recipes) {
          if (error) {
            return response
              .status(500)
              .send({
                message: 'Database error.',
              });
          }

          response.send(recipes);
        });
    }

    // Add recipe
    router.post('/', addRecipe);

    function addRecipe(request, response) {
      var newRecipe = new Recipe();
      newRecipe.user_id = request.user_id;
      newRecipe.title = request.body.title;
      newRecipe.description = request.body.description;
      newRecipe.thumbnail = request.body.thumbnail;
      newRecipe.category = request.body.category;

      newRecipe.ingredients = request.body.ingredients;
      newRecipe.steps = request.body.steps;

      newRecipe.save(function(error) {
        if (error) {
          return response
            .status(500)
            .send({
              message: 'Database error.',
            });
        }

        response.json(newRecipe);
      });
    }

    // Get single recipe
    router.get('/:recipeId', getRecipe);

    function getRecipe(request, response) {
      Recipe
        .findById(request.params.recipeId, function(error, recipe) {
          if (error) {
            return response
              .status(500)
              .send({
                message: 'Database error.',
              });
          }

          response.send(recipe);
        });
    }

    // Update recipe
    router.put('/:recipeId', updateRecipe);

    function updateRecipe(request, response) {
      Recipe
        .findById(request.params.recipeId, function(error, recipe) {
          if (error) {
            return response
              .status(500)
              .send({
                message: 'Database error.',
              });
          }

          recipe.title = request.body.title;
          recipe.decription = request.body.decription;
          recipe.thumbnail = request.body.thumbnail;
          recipe.category = request.body.category;

          recipe.ingredients = request.body.ingredients;
          recipe.steps = request.body.steps;

          recipe.save(function(error) {
            if (error) {
              return response
                .status(500)
                .send({
                  message: 'Database error.',
                });
            }

            response.json(recipe);
          });
        });
    }

    // Delete recipe
    router.delete('/:recipeId', deleteRecipe);

    function deleteRecipe(request, response) {
      Recipe
        .remove({ _id: request.params.recipeId }, function(error, recipe) {
          if (error) {
            return response
              .status(500)
              .send({
                message: 'Database error.',
              });
          }
        });
    }

    return router;
})();
