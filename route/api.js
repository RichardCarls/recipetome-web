module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        User = require('../model/user.js'),
        jwt = require('jsonwebtoken'),

        appConfig = require('../config/app.js');

    // Authenticate all api requests
    router.use('/', authenticateUser);

    function authenticateUser(request, response, next) {
      var id_token = request.body.id_token ||
                  request.query.id_token ||
                  request.headers['x-access-token'];

      if(id_token) {
        jwt.verify(id_token, appConfig.credentials.key, function(error, decoded) {
          if (error) {
            return response
              .status(403)
              .send({
                message: 'Authentication failed: Invalid Id token.',
                error: error,
              });
          } else {
            request.id_token = id_token;
            next();
          }
        });
      } else {
        return response
          .status(403)
          .send({
            message: 'Authentication failed: Please send id_token with api requests.',
          });
      }
    }

    router.use('/user', require('./api.users.js'));

    return router;
})();
