module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        jwt = require('jsonwebtoken'),
        User = require('../model/user.js'),
        Recipe = require('../model/recipe.js'),
        rmdir = require('rimraf'),
        path = require('path');

    router.use('/', getUserId);

    function getUserId(request, response, next) {
      // TODO: error handling
      request.user_id = jwt.decode(request.id_token).sub;

      next();
    }

    // Get user
    router.get('/', getUser);

    function getUser(request, response) {
      User
        .findById(request.user_id, function(error, user) {
          if (error) {
            return response
              .status(500)
              .send({
                error: error,
              });
          }

          response.json(user);
        });
    }

    // Update user
    router.put('/', updateUser);

    function updateUser(request, response) {
      User
        .findById(request.user_id, function(error, user) {
          if (error) {
            return response
              .status(500)
              .send({
                error: error,
              });
          }

          if (!user.validPassword(request.body.current_password)) {
            return response
              .status(401)
              .send({
                message: 'Update failed: Invalid password.',
              });
          } else {
            if (request.body.email) {
              user.email = request.body.email;
            }
            if (request.body.password) {
              user.password = user.generateHash(request.body.password);
            }

            user.save(function(error) {
              if (error) {
                return response
                  .status(500)
                  .send({
                    error: error,
                  });
              }

              return response.json(user);

            });
          }
        });
    }

    // Get user
    router.delete('/', deleteUser);

    function deleteUser(request, response) {
      User
        .findByIdAndRemove(request.user_id, function(error, user) {
          if (error) {
            return response
              .status(500)
              .send({
                error: error,
              });
          }

          if (!user) {
            return response
              .status(404)
              .send({
                message: 'User not found.',
              });
          } else {
            // Delete user upload folder
            var photoPath = path.resolve(
              __dirname, '../public_html/user_data' + '/' + request.user_id
            );
            rmdir(photoPath, function(error) {
              if (error) {
                return response
                  .status(500)
                  .send({
                    error: error,
                  });
              }

              Recipe
                .remove({ user_id: request.user_id, }, function(error, recipes) {
                  if (error) {
                    return response
                      .status(500)
                      .send({
                        error: error,
                      });
                  }

                  return response
                    .status(200)
                    .send({
                      message: 'User, uploads, and Recipes deleted successfully',
                    });
                });
            });
          }
        });
    }

    // Recipe resource
    router.use('/upload', require('./api.upload.js'));
    router.use('/categories', require('./api.categories.js'));
    router.use('/recipes', require('./api.recipes.js'));

    return router;
})();
