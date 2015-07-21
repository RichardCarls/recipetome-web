module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        path = require('path'),
        fs = require('fs'),
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
                error: error,
              });
          }

          response.json(recipes);
        });
    }

    // Add recipe
    router.post('/', addRecipe);

    function addRecipe(request, response) {
      var newRecipe = new Recipe();
      newRecipe.user_id = request.user_id;
      newRecipe.title = request.body.title;
      newRecipe.description = request.body.description;
      if (request.body.thumbnail) {
        newRecipe.thumbnail = request.body.thumbnail;
      }
      if (request.body.category) {
        newRecipe.category = request.body.category;
      }
      newRecipe.rating = request.body.rating;

      if (request.body.cook_time) {
        newRecipe.cook_time = request.body.cook_time;
      }
      if (request.body.prep_time) {
        newRecipe.prep_time = request.body.prep_time;
      }
      if (request.body.yield_qty) {
        newRecipe.yield_qty = request.body.yield_qty;
      }

      newRecipe.ingredients = request.body.ingredients;
      newRecipe.steps = request.body.steps;

      newRecipe.save(function(error) {
        if (error) {
          return response
            .status(500)
            .send({
              error: error,
            });
        }

        // With instance _id
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
                error: error,
              });
          }

          response.json(recipe);
        });
    }

    // Update recipe
    router.put('/:recipeId', updateRecipe);

    function updateRecipe(request, response) {
      var updates = {
        user_id: request.user_id,
        title: request.body.title,
        description: request.body.description,
        thumbnail: request.body.thumbnail,
        category: request.body.category,
        rating: request.body.rating,

        ingredients: request.body.ingredients,
        steps: request.body.steps,
      };

      if (request.body.cook_time) {
        updates.cook_time = request.body.cook_time;
      }
      if (request.body.prep_time) {
        updates.prep_time = request.body.prep_time;
      }
      if (request.body.yield_qty) {
        updates.yield_qty = request.body.yield_qty;
      }


      Recipe
        .findOneAndUpdate(
          { _id: request.params.recipeId, },
          updates,
          function(error, recipe) {
            if (error) {
              return response
                .status(500)
                .send({
                  error: error,
                });
            }

            response.json(recipe);
          }
        );
    }

    // Delete recipe
    router.delete('/:recipeId', deleteRecipe);

    function deleteRecipe(request, response) {
      Recipe
        .findByIdAndRemove(request.params.recipeId, function(error, recipe) {
          if (error) {
            return response
              .status(500)
              .send({
                error: error,
              });
          }

          if (!recipe) {
            return response
              .status(404)
              .send({
                message: 'Recipe with id ' + request.params.recipeId + ' not found.',
              });
          } else {
            var photoPath = path.resolve(__dirname, '../public_html/' + recipe.thumbnail);

            // Remove recipe photo
            fs.unlink(photoPath, function(error) {
              return response
                .status(200)
                .send({
                  message: 'Recipe deleted successfully',
                });
            });
          }
        });
    }

    return router;
})();
