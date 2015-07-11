/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', [
      'ui.bootstrap',
      'recipetome.welcome',
    ]);

})(angular);

/**
 * Recipe Tome welcome view module
 *
 * This view state represents an unauthenticated user on the landing page.
 *
 * @namespace RecipeTome/Welcome
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.welcome', [
      'ui.bootstrap',
      'ui.router',
    ]);

})(angular);

/**
 * Recipe Tome application controller
 * @namespace RecipeTome/Controller
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome')
      .controller('RecipeTomeController', RecipeTomeController);

  function RecipeTomeController($scope, $sce) {
    $scope.app = {
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

/**
 * Recipe Tome welcome view controller
 * @namespace RecipeTome/Welcome/Controller
 * @memberof RecipeTome/Welcome
 */
;(function(angular) {

  angular
    .module('recipetome.welcome')
      .controller('WelcomeController', WelcomeController);

  function WelcomeController($scope) {
    $scope.welcome = {
      greeting: {
        headline: 'Your Personal Recipe Database',
        lead: 'Recipe Tome let\'s you create and manage recipes.',
      },
    };
  }

})(angular);

/**
 * Recipe Tome welcome view routes
 *
 * @namespace RecipeTome/Welcome/Routes
 * @memberof RecipeTome/Welcome
 */
;(function(angular) {

  angular
    .module('recipetome.welcome')
      .config(WelcomeRoutesConfig);

  function WelcomeRoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'app/welcome/welcome.view.html',
        controller: 'WelcomeController',
      });
  }

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwid2VsY29tZS93ZWxjb21lLm1vZHVsZS5qcyIsInJlY2lwZXRvbWUuY29udHJvbGxlci5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVjaXBldG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gbW9kdWxlXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsYW5kaW5nIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigkc2NvcGUsICRzY2UpIHtcbiAgICAkc2NvcGUuYXBwID0ge1xuICAgICAgaW5saW5lVGVtcGxhdGVzOiB7XG4gICAgICAgIGNvcHlyaWdodDogJHNjZS50cnVzdEFzSHRtbCgnUmVjaXBlIFRvbWUgdjAuMS4wICZuYnNwO3wmbmJzcDsgJmNvcHk7IDIwMTUgPGEgaHJlZj1cImh0dHA6Ly93d3cucmljaGFyZGNhcmxzLmNvbVwiPlJpY2hhcmQgQ2FybHM8L2E+JyksXG4gICAgICAgIGxpY2Vuc2U6ICRzY2UudHJ1c3RBc0h0bWwoJ0NvZGUgbGljZW5zZWQgdW5kZXIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SaWNoYXJkQ2FybHMvcmVjaXBldG9tZS13ZWIvYmxvYi9tYXN0ZXIvTElDRU5TRVwiPk1JVDwvYT4gTGljZW5zZScpLFxuICAgICAgICB0ZWNoTGlzdDogW1xuICAgICAgICAgICRzY2UudHJ1c3RBc0h0bWwoJzxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvXCI+Tm9kZS5qczwvYT4sICcpLFxuICAgICAgICAgICRzY2UudHJ1c3RBc0h0bWwoJzxhIGhyZWY9XCJodHRwOi8vZXhwcmVzc2pzLmNvbS9cIj5FeHByZXNzLmpzPC9hPiwgJyksXG4gICAgICAgICAgJHNjZS50cnVzdEFzSHRtbCgnPGEgaHJlZj1cImh0dHA6Ly9wYXNzcG9ydGpzLm9yZy9cIj5QYXNzcG9ydC5qczwvYT4sICcpLFxuICAgICAgICAgICRzY2UudHJ1c3RBc0h0bWwoJzxhIGhyZWY9XCJodHRwczovL2FuZ3VsYXJqcy5vcmcvXCI+QW5ndWxhci5qczwvYT4sIGFuZCAnKSxcbiAgICAgICAgICAkc2NlLnRydXN0QXNIdG1sKCc8YSBocmVmPVwiaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvXCI+TW9uZ29EQjwvYT4uJyksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCRzY29wZSkge1xuICAgICRzY29wZS53ZWxjb21lID0ge1xuICAgICAgZ3JlZXRpbmc6IHtcbiAgICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICAgIGxlYWQ6ICdSZWNpcGUgVG9tZSBsZXRcXCdzIHlvdSBjcmVhdGUgYW5kIG1hbmFnZSByZWNpcGVzLicsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3dlbGNvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9