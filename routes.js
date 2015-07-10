module.exports = function(app, passport) {

  app.get('/', getHomePage);

  function getHomePage(request, response) {
    response.sendFile(__dirname + '/public_html/index.html');
  }

};
