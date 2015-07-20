module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        path = require('path'),
        fs = require('fs'),
        multer = require('multer');

    var storage = multer.diskStorage({
      destination: function (request, file, next) {
        var userDataPath = path.resolve(__dirname, '../public_html/user_data');
        var userUploadPath = userDataPath + '/' + request.user_id;

        fs.mkdir(userUploadPath, function(error) {
            if (error) {
                if (error.code !== 'EEXIST') {
                  // Error
                }
            }

            next(null, userUploadPath);
        });
      },
      filename: function (request, file, next) {
        var ext = file.mimetype.match(/(jpeg|png)/)[0];

        next(null, file.fieldname + '-' + Date.now() + '.' + ext);
      }
    });

    var upload = multer({
      storage: storage,
      fileFilter: fileFilter,
      limits: {
        fields: 50,
        parts: 100,
        fileSize: 10485760,  // 10 MB
        files: 8,
      },
    });

    function fileFilter(request, file, next) {
      if (/image\/(?:jpeg|png)/.test(file.mimetype)) {
        // Only accept jpeg or png
        next(null, true);
      } else {
        // Reject everything else
        next(null, true);
      }
    }

    // Upload recipe photos
    router.post('/', upload.single('photo'), uploadRecipePhoto);

    function uploadRecipePhoto(request, response) {
      return response.json({
        photo: {
          url: '/user_data/' + request.user_id + '/' + request.file.filename,
        }
      });
    }

    return router;
})();
