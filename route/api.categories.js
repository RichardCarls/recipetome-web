module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        Recipe = require('../model/recipe.js');

    // Get categories
    router.get('/', getCategories);

    function getCategories(request, response) {
      Recipe
        .collection
          .distinct("category", function(error, categories) {
            if (error) {
              return response
                .status(500)
                .send({
                  error: error,
                });
            }

            response.json(categories);
          });
    }

    return router;
})();
