module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        User = require('../model/user.js'),
        jwt = require('jsonwebtoken'),

        appConfig = require('../config/app.js');

    // local registration endpoint
    router.post('/register', doLocalRegistration);

    // local login endpoint
    router.post('/', doLocalLogin);

    function doLocalRegistration(request, response) {
      User
        .findOne({ email: request.body.email, }, function (error, existingUser) {
          if (error) {
            return response
              .status(500)
              .send({
                error: error,
              });
          }

          if (existingUser) {
            return response
              .status(409)
              .send({
                message: 'Registration failed: User with that email already exists. Did you already register?',
              });
          } else {
            var newUser = new User();

            // TODO: Validate email
            newUser.email = request.body.email;
            newUser.password = newUser.generateHash(request.body.password);

            return newUser.save(function(error) {
              if (error) {
                return response
                  .status(500)
                  .send({
                    error: error,
                  });
              }

              var idToken = createIdToken(newUser);

              return response.json({
                message: 'Registration successfull.',
                id_token: idToken,
              });
            });
          }
        });
    }

    function doLocalLogin(request, response) {
      User
        .findOne({
          email: request.body.email,
        }, function(error, user) {
          if (error) {
            response
              .status(500)
              .send({
                error: error,
              });
          }

          if (!user) {
            response
              .status(404)
              .send({
                message: 'Authentication failed: User with that email not found.',
              });
          } else if (user) {
            if (!user.validPassword(request.body.password)) {
              response
                .status(401)
                .send({
                  message: 'Authentication failed: Found user with email but password invalid.',
                });
            } else {
              // Return an ID token
              var idToken = createIdToken(user);
              response.json({
                user: user.id,
                message: 'Authentication successfull.',
                id_token: idToken,
              });
            }
          }
        });
    }

    function createIdToken(user) {
      var idPayload = {
        email: user.email,
        email_verified: user.email_verified,
      };
      var options = {
        expiresInMinutes: 1440,   // 24 hour expiration
        audience: appConfig.host + ":" + appConfig.port,
        subject: user.id,
        issuer: appConfig.host + ":" + appConfig.port + '/',
      };

      // Return an ID token
      return jwt.sign(idPayload, appConfig.credentials.key, options);
    }

    return router;
})();
