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
        .findOne({
          email: request.body.email,
        }, function(error, user) {
          if (error) { throw error; }

          if (user) {
            response.json({
              success: false,
              message: 'Registration failed: User with that email already exists. Did you already register?',
            });
          } else {
            var newUser = new User();

            // TODO: Validate email
            newUser.email = request.body.email;
            newUser.password = newUser.generateHash(request.body.password);

            newUser.save(function(error) {
              if (error) { throw error; }

              var token = jwt.sign(newUser, appConfig.secret, { expiresInMinutes: 1440, });
              response.json({
                success: true,
                message: 'Registration successfull.',
                token: token,
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
          if (error) { throw error; }

          if (!user) {
            response.json({
              success: false,
              message: 'Authentication failed: User not found.',
            });
          } else if (user) {
            if (!user.validPassword(request.body.password)) {
              response.json({
                success: false,
                message: 'Authentication failed: Wrong password.',
              });
            } else {
              var token = jwt.sign(user, appConfig.secret, { expiresInMinutes: 1440, });
              response.json({
                success: true,
                message: 'Authentication successfull.',
                token: token,
              });
            }
          }
        });
    }

    return router;
})();
