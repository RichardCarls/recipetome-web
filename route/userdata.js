module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        path = require('path'),
        fs = require('fs'),
        multiparty = require('multiparty');

    // Get categories
    router.post('/upload', upload);

    function upload(request, response) {
      var form = new multiparty.Form({
        uploadDir: path.resolve(__dirname, '../upload'),
      });

      form.parse(request, function(error, fields, files) {
        if (error) {
          return response
            .status(500)
            .send({
              error: error,
            });
        }

        var responseData = {
          files: [],
        };

        for (var i = 0, len = files.file.length; i < len; i++) {
          var tmpPath = path.resolve(files.file[i].path);
          // TODO: Rename file with guid, prefix with user_id folder
          var targetPath = path.resolve(
            __dirname, '../public_html/user_data/' + files.file[i].originalFilename
          );

          // TODO: Define max image size
          // TODO: Resize uploaded images, save separate thumbnail version

          fs.renameSync(tmpPath, targetPath, onRenameError);

          responseData.files.push({
            fileName: files.file[i].originalFilename,
            url: 'user_data/' + files.file[i].originalFilename,
          });
        }

        return response.json(responseData);
      });
    }

    function onRenameError(error) {
      if (error) {
        return response
          .status(500)
          .send({
            error: error,
          });
      }
    }

    return router;
})();
