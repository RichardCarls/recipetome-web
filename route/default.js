module.exports = (function() {
    'use strict';
    var router = require('express').Router(),
        path = require('path');

    router.get('*', serveApp);

    function serveApp(request, response) {
      response.sendFile(path.resolve(__dirname, '../public_html/index.html'));
    }

    return router;
})();
