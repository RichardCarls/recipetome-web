/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', ['ui.bootstrap']);

})(angular);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIG1vZHVsZVxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJywgWyd1aS5ib290c3RyYXAnXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBhcHBsaWNhdGlvbiBtb2R1bGVcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoJHNjb3BlLCAkc2NlKSB7XG4gICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgIGdyZWV0aW5nOiB7XG4gICAgICAgIGhlYWRsaW5lOiAnWW91ciBQZXJzb25hbCBSZWNpcGUgRGF0YWJhc2UnLFxuICAgICAgICBsZWFkOiAnUmVjaXBlIFRvbWUgbGV0XFwncyB5b3UgY3JlYXRlIGFuZCBtYW5hZ2UgcmVjaXBlcy4nLFxuICAgICAgfSxcbiAgICAgIGlubGluZVRlbXBsYXRlczoge1xuICAgICAgICBjb3B5cmlnaHQ6ICRzY2UudHJ1c3RBc0h0bWwoJ1JlY2lwZSBUb21lIHYwLjEuMCAmbmJzcDt8Jm5ic3A7ICZjb3B5OyAyMDE1IDxhIGhyZWY9XCJodHRwOi8vd3d3LnJpY2hhcmRjYXJscy5jb21cIj5SaWNoYXJkIENhcmxzPC9hPicpLFxuICAgICAgICBsaWNlbnNlOiAkc2NlLnRydXN0QXNIdG1sKCdDb2RlIGxpY2Vuc2VkIHVuZGVyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmljaGFyZENhcmxzL3JlY2lwZXRvbWUtd2ViL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIj5NSVQ8L2E+IExpY2Vuc2UnKSxcbiAgICAgICAgdGVjaExpc3Q6IFtcbiAgICAgICAgICAkc2NlLnRydXN0QXNIdG1sKCc8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL1wiPk5vZGUuanM8L2E+LCAnKSxcbiAgICAgICAgICAkc2NlLnRydXN0QXNIdG1sKCc8YSBocmVmPVwiaHR0cDovL2V4cHJlc3Nqcy5jb20vXCI+RXhwcmVzcy5qczwvYT4sICcpLFxuICAgICAgICAgICRzY2UudHJ1c3RBc0h0bWwoJzxhIGhyZWY9XCJodHRwOi8vcGFzc3BvcnRqcy5vcmcvXCI+UGFzc3BvcnQuanM8L2E+LCAnKSxcbiAgICAgICAgICAkc2NlLnRydXN0QXNIdG1sKCc8YSBocmVmPVwiaHR0cHM6Ly9hbmd1bGFyanMub3JnL1wiPkFuZ3VsYXIuanM8L2E+LCBhbmQgJyksXG4gICAgICAgICAgJHNjZS50cnVzdEFzSHRtbCgnPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1vbmdvZGIub3JnL1wiPk1vbmdvREI8L2E+LicpLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9