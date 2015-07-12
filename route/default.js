module.exports = (function() {
    'use strict';
    var router = require('express').Router();

    router.get('*', serveApp);

    function serveApp(request, response) {
      response.sendFile(__dirname + '/public_html/index.html');
    }

    return router;
})();
