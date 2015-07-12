module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        User = require('../model/user.js'),
        jwt = require('jsonwebtoken'),

        appConfig = require('../config/app.js');


    router.use('/', authenticateUser);

    function authenticateUser(request, response, next) {
      var token = request.body.token ||
                  request.query.token ||
                  request.headers['x-access-token'];

      if(token) {
        jwt.verify(token, appConfig.secret, function(error, decoded) {
          if (error) {
            return respose.json({
              success: false,
              message: 'Authentication failed: Failed to authenticate token.',
            });
          } else {
            request.decoded = decoded;
            next();
          }
        });
      } else {
        return response
          .status(403)
          .send({
            success: false,
            message: 'Authentication failed: No token provided.',
          });
      }
    }

    // Get user
    router.get('/:userId', getUser);

    function getUser(request, response) {
      User
        .findById(request.params.userId, function(error, user) {
          if (error) { response.send(error); }

          response.send(user);
        });
    }

    return router;
})();
