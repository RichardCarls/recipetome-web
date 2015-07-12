/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', [
      'ui.bootstrap',
      'recipetome.services',
      'recipetome.welcome',
      'recipetome.signup',
      'recipetome.login',
      'recipetome.profile',
    ]);

})(angular);

/**
 * Recipe Tome login view module
 *
 * This view state represents an unauthenticated user on the login page.
 *
 * @namespace RecipeTome/Login
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.login', [
      'ui.bootstrap',
      'ngRoute',
    ]);

})(angular);

/**
 * Recipe Tome profile view module
 *
 * This view state represents an authenticated user's profile
 *
 * @namespace RecipeTome/Profile
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.profile', [
      'ui.bootstrap',
      'ngRoute',
      'services.user',
    ]);

})(angular);

/**
 * Recipe Tome signup view module
 *
 * This view state represents an unauthenticated user on the signup page.
 *
 * @namespace RecipeTome/Signup
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.signup', [
      'ui.bootstrap',
      'ngRoute',
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
      'ngRoute',
    ]);

})(angular);

/**
 * Recipe Tome services module
 *
 * @namespace RecipeTome/Services
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.services', [
      'services.auth',
      'services.user',
    ]);

})(angular);

/**
 * Recipe Tome user authentication service module
 *
 * @namespace RecipeTome/Services/Auth
 * @memberof RecipeTome/Services
 */
;(function(angular) {

  angular
    .module('services.auth', [
      'ngRoute',
      'angular-jwt',
      'services.user',
    ]);

})(angular);

/**
 * Recipe Tome user service module
 *
 * @namespace RecipeTome/Services/User
 * @memberof RecipeTome/Services
 */
;(function(angular) {

  angular
    .module('services.user', []);

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

  function RecipeTomeController($scope, $sce, AuthService) {
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
 * Recipe Tome login view controller
 * @namespace RecipeTome/Login/Controller
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  function LoginController($scope, $location, AuthService, UserService) {
    $scope.login = {
      user: {
        email: '',
        password: '',
      },
      loginLocal: doLocalLogin,
      authenticate: doProviderAuthentication,
    };

    function doLocalLogin(user) {
      AuthService
        .doLocalLogin(user)
        .then(function() {
          if (UserService.getCurrentUser()) {
            $location.path('/profile');
          }
        });
    }

    function doProviderAuthentication(provider) {
      // TODO: Do user authentication and register local user and redirect to profile
    }

  }

})(angular);

/**
 * Recipe Tome login view routes
 *
 * @namespace RecipeTome/Login/Routes
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .config(LoginRoutesConfig);

  function LoginRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);

/**
 * Recipe Tome profile view controller
 * @namespace RecipeTome/Profile/Controller
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .controller('ProfileController', ProfileController);

  function ProfileController($scope, UserService) {
    $scope.profile = {
      userProfile: UserService.getUserProfile(),
    };
  }

})(angular);

/**
 * Recipe Tome profile view routes
 *
 * @namespace RecipeTome/Profile/Routes
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .config(ProfileRoutesConfig);

  function ProfileRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/profile/profile.view.html',
        controller: 'ProfileController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);

/**
 * Recipe Tome signup view controller
 * @namespace RecipeTome/SignUp/Controller
 * @memberof RecipeTome/SignUp
 */
;(function(angular) {

  angular
    .module('recipetome.signup')
      .controller('SignUpController', SignUpController);

  function SignUpController($scope, $location, AuthService) {
    $scope.signup = {
      user: {
        email: '',
        password: '',
      },
      registerLocal: doLocalRegistration,
      authenticate: doProviderAuthentication,
    };

    function doLocalRegistration(user) {
      AuthService
        .doLocalRegistration(user)
        .then(function() {
          $location.path('/');
        });
    }

    function doProviderAuthentication(provider) {
      // TODO: Do user authentication and register local user and redirect to profile
    }

  }

})(angular);

/**
 * Recipe Tome signup view routes
 *
 * @namespace RecipeTome/SignUp/Routes
 * @memberof RecipeTome/SignUp
 */
;(function(angular) {

  angular
    .module('recipetome.signup')
      .config(SignUpRoutesConfig);

  function SignUpRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'app/signup/signup.view.html',
        controller: 'SignUpController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
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

  function WelcomeRoutesConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/welcome/welcome.view.html',
        controller: 'WelcomeController',
      }).otherwise('/');

    //$locationProvider.html5Mode(true);
  }

})(angular);

/**
 * Recipe Tome user authentication constants
 *
 * @namespace RecipeTome/Services/Auth/Constants
 * @memberof RecipeTome/Services/Auth
 */
;(function(angular) {

  angular
    .module('services.auth')
      .constant('AUTH_EVENTS', AUTH_EVENTS);

  var AUTH_EVENTS = {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized',
  };

})(angular);

/**
 * Recipe Tome user authentication service
 *
 * @namespace RecipeTome/Services/Auth/Service
 * @memberof RecipeTome/Services/Auth
 */
;(function(angular) {

  angular
    .module('services.auth')
      .service('AuthService', AuthService);

  function AuthService($http, $window, jwtHelper, UserService) {

    this.doLocalRegistration = function(user) {
      return $http
        .post('/auth/local/register', user)
        .success(onAuthSuccess)
        .error(onRegistrationError);
    };

    this.doLocalLogin = function(user) {
      return $http
        .post('/auth/local', user)
        .success(onAuthSuccess)
        .error(onLoginError);
    };

    function onAuthSuccess(data) {
      $window.sessionStorage.token = data.token;

      UserService
        .setCurrentUser(jwtHelper.decodeToken(data.token));
    }

    function onRegistrationError(data) {
      $window.sessionStorage.token = null;
      
      // TODO: Provide error feedback
    }

    function onLoginError(data) {
      $window.sessionStorage.token = null;

      // TODO: Provide error feedback
    }

  }

})(angular);

/**
 * Recipe Tome user service
 *
 * @namespace RecipeTome/Services/User/Service
 * @memberof RecipeTome/Services/User
 */
;(function(angular) {

  angular
    .module('services.user')
      .factory('UserService', UserService);

  function UserService($http, $window) {
    var _currentUser = null;

    function getCurrentUser() {
      return _currentUser;
    }

    function setCurrentUser(user) {
      _currentUser = user;
    }

    function getUserProfile() {
      $http.get('http://localhost:3000/api/v1/user/' + _currentUser._id, {
        headers: {
          'x-access-token': $window.sessionStorage.token,
        }
      }).success(function(data) {
        return data;
      });
    }

    return {
      getCurrentUser: getCurrentUser,
      setCurrentUser: setCurrentUser,
      getUserProfile: getUserProfile,
    };
  }

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwibG9naW4vbG9naW4ubW9kdWxlLmpzIiwicHJvZmlsZS9wcm9maWxlLm1vZHVsZS5qcyIsInNpZ251cC9zaWdudXAubW9kdWxlLmpzIiwid2VsY29tZS93ZWxjb21lLm1vZHVsZS5qcyIsInNlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS5qcyIsInNlcnZpY2VzL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJvdXRlcy5qcyIsInByb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwicHJvZmlsZS9wcm9maWxlLnJvdXRlcy5qcyIsInNpZ251cC9zaWdudXAuY29udHJvbGxlci5qcyIsInNpZ251cC9zaWdudXAucm91dGVzLmpzIiwid2VsY29tZS93ZWxjb21lLmNvbnRyb2xsZXIuanMiLCJ3ZWxjb21lL3dlbGNvbWUucm91dGVzLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLmNvbnN0YW50cy5qcyIsInNlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic2VydmljZXMvdXNlci91c2VyLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVjaXBldG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gbW9kdWxlXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdyZWNpcGV0b21lLnNlcnZpY2VzJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2lnbnVwJyxcbiAgICAgICdyZWNpcGV0b21lLmxvZ2luJyxcbiAgICAgICdyZWNpcGV0b21lLnByb2ZpbGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbG9naW4gcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnbmdSb3V0ZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gYXV0aGVudGljYXRlZCB1c2VyJ3MgcHJvZmlsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnbmdSb3V0ZScsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgc2lnbnVwIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ251cFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnbmdSb3V0ZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB3ZWxjb21lIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gdW5hdXRoZW50aWNhdGVkIHVzZXIgb24gdGhlIGxhbmRpbmcgcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ25nUm91dGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2VydmljZXMgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zZXJ2aWNlcycsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gc2VydmljZSBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnLCBbXG4gICAgICAnbmdSb3V0ZScsXG4gICAgICAnYW5ndWxhci1qd3QnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoJHNjb3BlLCAkc2NlLCBBdXRoU2VydmljZSkge1xuICAgICRzY29wZS5hcHAgPSB7XG4gICAgICBpbmxpbmVUZW1wbGF0ZXM6IHtcbiAgICAgICAgY29weXJpZ2h0OiAkc2NlLnRydXN0QXNIdG1sKCdSZWNpcGUgVG9tZSB2MC4xLjAgJm5ic3A7fCZuYnNwOyAmY29weTsgMjAxNSA8YSBocmVmPVwiaHR0cDovL3d3dy5yaWNoYXJkY2FybHMuY29tXCI+UmljaGFyZCBDYXJsczwvYT4nKSxcbiAgICAgICAgbGljZW5zZTogJHNjZS50cnVzdEFzSHRtbCgnQ29kZSBsaWNlbnNlZCB1bmRlciA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JpY2hhcmRDYXJscy9yZWNpcGV0b21lLXdlYi9ibG9iL21hc3Rlci9MSUNFTlNFXCI+TUlUPC9hPiBMaWNlbnNlJyksXG4gICAgICAgIHRlY2hMaXN0OiBbXG4gICAgICAgICAgJHNjZS50cnVzdEFzSHRtbCgnPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9cIj5Ob2RlLmpzPC9hPiwgJyksXG4gICAgICAgICAgJHNjZS50cnVzdEFzSHRtbCgnPGEgaHJlZj1cImh0dHA6Ly9leHByZXNzanMuY29tL1wiPkV4cHJlc3MuanM8L2E+LCAnKSxcbiAgICAgICAgICAkc2NlLnRydXN0QXNIdG1sKCc8YSBocmVmPVwiaHR0cDovL3Bhc3Nwb3J0anMub3JnL1wiPlBhc3Nwb3J0LmpzPC9hPiwgJyksXG4gICAgICAgICAgJHNjZS50cnVzdEFzSHRtbCgnPGEgaHJlZj1cImh0dHBzOi8vYW5ndWxhcmpzLm9yZy9cIj5Bbmd1bGFyLmpzPC9hPiwgYW5kICcpLFxuICAgICAgICAgICRzY2UudHJ1c3RBc0h0bWwoJzxhIGhyZWY9XCJodHRwczovL3d3dy5tb25nb2RiLm9yZy9cIj5Nb25nb0RCPC9hPi4nKSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzY29wZSwgJGxvY2F0aW9uLCBBdXRoU2VydmljZSwgVXNlclNlcnZpY2UpIHtcbiAgICAkc2NvcGUubG9naW4gPSB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfSxcbiAgICAgIGxvZ2luTG9jYWw6IGRvTG9jYWxMb2dpbixcbiAgICAgIGF1dGhlbnRpY2F0ZTogZG9Qcm92aWRlckF1dGhlbnRpY2F0aW9uLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsTG9naW4odXNlcikge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLmRvTG9jYWxMb2dpbih1c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoVXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKSkge1xuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy9wcm9maWxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24ocHJvdmlkZXIpIHtcbiAgICAgIC8vIFRPRE86IERvIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHJlZ2lzdGVyIGxvY2FsIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHByb2ZpbGVcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29uZmlnKExvZ2luUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgLndoZW4oJy9sb2dpbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4udmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICB9KS5vdGhlcndpc2UoJy8nKTtcblxuICAgIC8vJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBQcm9maWxlQ29udHJvbGxlcigkc2NvcGUsIFVzZXJTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLnByb2ZpbGUgPSB7XG4gICAgICB1c2VyUHJvZmlsZTogVXNlclNlcnZpY2UuZ2V0VXNlclByb2ZpbGUoKSxcbiAgICB9O1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnKVxuICAgICAgLmNvbmZpZyhQcm9maWxlUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBQcm9maWxlUm91dGVzQ29uZmlnKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgICAud2hlbignL3Byb2ZpbGUnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgfSkub3RoZXJ3aXNlKCcvJyk7XG5cbiAgICAvLyRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2lnbnVwIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ25VcC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWduVXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb250cm9sbGVyKCdTaWduVXBDb250cm9sbGVyJywgU2lnblVwQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gU2lnblVwQ29udHJvbGxlcigkc2NvcGUsICRsb2NhdGlvbiwgQXV0aFNlcnZpY2UpIHtcbiAgICAkc2NvcGUuc2lnbnVwID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckxvY2FsOiBkb0xvY2FsUmVnaXN0cmF0aW9uLFxuICAgICAgYXV0aGVudGljYXRlOiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24odXNlcikge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLmRvTG9jYWxSZWdpc3RyYXRpb24odXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9Qcm92aWRlckF1dGhlbnRpY2F0aW9uKHByb3ZpZGVyKSB7XG4gICAgICAvLyBUT0RPOiBEbyB1c2VyIGF1dGhlbnRpY2F0aW9uIGFuZCByZWdpc3RlciBsb2NhbCB1c2VyIGFuZCByZWRpcmVjdCB0byBwcm9maWxlXG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWduVXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb25maWcoU2lnblVwUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBTaWduVXBSb3V0ZXNDb25maWcoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvc2lnbnVwJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWdudXAvc2lnbnVwLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduVXBDb250cm9sbGVyJyxcbiAgICAgIH0pLm90aGVyd2lzZSgnLycpO1xuXG4gICAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCRzY29wZSkge1xuICAgICRzY29wZS53ZWxjb21lID0ge1xuICAgICAgZ3JlZXRpbmc6IHtcbiAgICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICAgIGxlYWQ6ICdSZWNpcGUgVG9tZSBsZXRcXCdzIHlvdSBjcmVhdGUgYW5kIG1hbmFnZSByZWNpcGVzLicsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVSb3V0ZXNDb25maWcoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgIC53aGVuKCcvJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgIH0pLm90aGVyd2lzZSgnLycpO1xuXG4gICAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gY29uc3RhbnRzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGgvQ29uc3RhbnRzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJylcbiAgICAgIC5jb25zdGFudCgnQVVUSF9FVkVOVFMnLCBBVVRIX0VWRU5UUyk7XG5cbiAgdmFyIEFVVEhfRVZFTlRTID0ge1xuICAgIGxvZ2luU3VjY2VzczogJ2F1dGgtbG9naW4tc3VjY2VzcycsXG4gICAgbG9naW5GYWlsZWQ6ICdhdXRoLWxvZ2luLWZhaWxlZCcsXG4gICAgbG9nb3V0U3VjY2VzczogJ2F1dGgtbG9nb3V0LXN1Y2Nlc3MnLFxuICAgIHNlc3Npb25UaW1lb3V0OiAnYXV0aC1zZXNzaW9uLXRpbWVvdXQnLFxuICAgIG5vdEF1dGhlbnRpY2F0ZWQ6ICdhdXRoLW5vdC1hdXRoZW50aWNhdGVkJyxcbiAgICBub3RBdXRob3JpemVkOiAnYXV0aC1ub3QtYXV0aG9yaXplZCcsXG4gIH07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aC9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJylcbiAgICAgIC5zZXJ2aWNlKCdBdXRoU2VydmljZScsIEF1dGhTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBBdXRoU2VydmljZSgkaHR0cCwgJHdpbmRvdywgand0SGVscGVyLCBVc2VyU2VydmljZSkge1xuXG4gICAgdGhpcy5kb0xvY2FsUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24odXNlcikge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5wb3N0KCcvYXV0aC9sb2NhbC9yZWdpc3RlcicsIHVzZXIpXG4gICAgICAgIC5zdWNjZXNzKG9uQXV0aFN1Y2Nlc3MpXG4gICAgICAgIC5lcnJvcihvblJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kb0xvY2FsTG9naW4gPSBmdW5jdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uTG9naW5FcnJvcik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MoZGF0YSkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IGRhdGEudG9rZW47XG5cbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC5zZXRDdXJyZW50VXNlcihqd3RIZWxwZXIuZGVjb2RlVG9rZW4oZGF0YS50b2tlbikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVnaXN0cmF0aW9uRXJyb3IoZGF0YSkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IG51bGw7XG4gICAgICBcbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvZ2luRXJyb3IoZGF0YSkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IG51bGw7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXIvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicpXG4gICAgICAuZmFjdG9yeSgnVXNlclNlcnZpY2UnLCBVc2VyU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gVXNlclNlcnZpY2UoJGh0dHAsICR3aW5kb3cpIHtcbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKSB7XG4gICAgICBfY3VycmVudFVzZXIgPSB1c2VyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKCkge1xuICAgICAgJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VzZXIvJyArIF9jdXJyZW50VXNlci5faWQsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4sXG4gICAgICAgIH1cbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VXNlcjogZ2V0Q3VycmVudFVzZXIsXG4gICAgICBzZXRDdXJyZW50VXNlcjogc2V0Q3VycmVudFVzZXIsXG4gICAgICBnZXRVc2VyUHJvZmlsZTogZ2V0VXNlclByb2ZpbGUsXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==