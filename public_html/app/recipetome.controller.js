/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome')
      .controller('RecipeTomeController', RecipeTomeController);

  function RecipeTomeController($scope, $sce) {
    $scope.app = {
      greeting: {
        headline: 'Your Personal Recipe Database',
        lead: 'Recipe Tome let\'s you create and manage recipes.',
      },
      inlineTemplates: {
        copyright: $sce.trustAsHtml('Recipe Tome v0.1.0 &nbsp;|&nbsp; &copy; 2015 <a href="http://www.richardcarls.com">Richard Carls</a>'),
        license: $sce.trustAsHtml('Code licensed under <a href="https://github.com/RichardCarls/recipetome-web/blob/master/LICENSE">MIT</a> License'),
        techList: [
          $sce.trustAsHtml('<a href="https://nodejs.org/">Node.js</a>, '),
          $sce.trustAsHtml('<a href="http://expressjs.com/">Express.js</a>, '),
          $sce.trustAsHtml('<a href="http://passportjs.org/">Passport.js</a>, '),
          $sce.trustAsHtml('<a href="https://angularjs.org/">Angular.js</a>, and '),
          $sce.trustAsHtml('<a href="https://www.mongodb.org/">MongoDB</a>.'),
        ],
      },
    };
  }

})(angular);
