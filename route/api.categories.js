module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        Recipe = require('../model/recipe.js');

    // Get categories
    router.get('/', getCategories);

    function getCategories(request, response) {
      Recipe
        .collection
          .aggregate([
            // Grab just the category fields
            { $project: { _id: 0, slug: '$category.slug', label: '$category.label', }, },
            // Group by slug and add count field
            { $group: { _id: '$slug', slug: { $first: '$slug' }, label: { $first: '$label' }, count: { $sum: 1, }, }, },
            // Drop the _id field
            { $project: { _id: 0, slug: '$slug', label: '$label', count: '$count', }, },
            // Sort by count
            { $sort: { count: -1, }, },
          ], function(error, categories) {
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
