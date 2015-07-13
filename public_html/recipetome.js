/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', [
      'ui.router',
      'ui.bootstrap',
      'recipetome.services',
      'recipetome.components',
      'recipetome.welcome',
      'recipetome.signup',
      'recipetome.login',
      'recipetome.profile',
    ]);

})(angular);

/**
 * Recipe Tome components module
 *
 * @namespace RecipeTome/Components
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.components', [
      'components.usermenu',
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
      'ui.router',
      'ui.bootstrap',
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
      'ui.router',
      'ui.bootstrap',
      'services.user',
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
      'ui.router',
      'ui.bootstrap',
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
      'ui.router',
      'ui.bootstrap',
    ]);

})(angular);

/**
 * Recipe Tome user menu component module
 *
 * @namespace RecipeTome/Components/UserMenu
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.usermenu', [
      'ui.bootstrap',
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
      'angular-jwt',
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
    .module('services.user', [
      'services.auth',
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

  function RecipeTomeController($scope) {
    $scope.app = {
      techList: [
        { link: 'https://nodejs.org/', name: 'Node.js' },
        { link: 'http://expressjs.com/', name: 'Express.js' },
        { link: 'http://passportjs.org/', name: 'Passport.js' },
        { link: 'https://angularjs.org/', name: 'Angular.js' },
        { link: 'https://www.mongodb.org/', name: 'MongoDB' },
      ],
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

  function LoginController($scope, $state, AuthService) {
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
          $state.go('profile');
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

  function LoginRoutesConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.view.html',
        controller: 'LoginController',
      });
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

  function ProfileController($scope, UserService, user) {
    $scope.profile = {
      user: user,
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

  function ProfileRoutesConfig($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.view.html',
        controller: 'ProfileController',
        resolve: {
          user: function(UserService) {
            return UserService.getCurrentUser();
          }
        }
      });
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

  function SignUpRoutesConfig($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.view.html',
        controller: 'SignUpController',
      });
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

  function WelcomeRoutesConfig($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'app/welcome/welcome.view.html',
        controller: 'WelcomeController',
      });
  }

})(angular);

/**
 * Recipe Tome user menu component controller
 *
 * @namespace RecipeTome/Components/UserMenu/Controller
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {

  angular
    .module('components.usermenu')
      .controller('UserMenuController', UserMenuController);

  function UserMenuController($scope, $state, UserService) {
    UserService
      .getCurrentUser()
      .then(function(user) {
        $scope.user = user;
      });

    $scope.isLoggedIn = function() {
      return UserService.isLoggedIn();
    };
    $scope.logout = function() {
      UserService.logout();
      $state.go('welcome');
    };
  }

})(angular);

/**
 * Recipe Tome user menu component directive
 *
 * @namespace RecipeTome/Components/UserMenu/Directive
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {

  angular
    .module('components.usermenu')
      .directive('userMenu', UserMenu);

  function UserMenu(UserService) {
    var directive = {
      restrict: 'AE',
      controller: 'UserMenuController',
      scope: {},
      templateUrl: 'app/components/usermenu/usermenu.template.html',
    };

    return directive;
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
      .factory('AuthService', AuthService);

  function AuthService($http, $window, $q, jwtHelper) {

    // TODO: Add verify function

    var service = {
      doLocalRegistration: doLocalRegistration,
      doLocalLogin: doLocalLogin,
      revoke: revoke,
    };

    return service;

    function doLocalRegistration(user) {
      return $http
        .post('/auth/local/register', user)
        .success(onAuthSuccess)
        .error(onRegistrationError);
    }

    function doLocalLogin(user) {
      return $http
        .post('/auth/local', user)
        .success(onAuthSuccess)
        .error(onLoginError);
    }

    function revoke() {
      $window.sessionStorage.removeItem('user_id');
      $window.sessionStorage.removeItem('id_token');
    }

    function onAuthSuccess(data) {
      if (data.id_token) {
        $window.sessionStorage.user_id = data.user;
        $window.sessionStorage.id_token = data.id_token;
      }
    }

    function onRegistrationError(data) {
      revoke();

      // TODO: Provide error feedback
    }

    function onLoginError(data) {
      revoke();

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

  function UserService($http, $window, $q, AuthService) {
    var _currentUser = null;

    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      logout: logout,
    };

    return service;

    function isLoggedIn() {
      return _currentUser ? true : false;
    }

    function getCurrentUser() {
      var deferred = $q.defer();

      if (_currentUser) {
        deferred.resolve(_currentUser);
      }

      // TODO: Implement verification in AuthService and call here
      if ($window.sessionStorage.user_id && $window.sessionStorage.id_token) {
        $http.get('http://localhost:3000/api/v1/user/' + $window.sessionStorage.user_id, {
          headers: {
            'x-access-token': $window.sessionStorage.id_token,
          }
        }).success(function(data) {
          _currentUser = data;
          deferred.resolve(_currentUser);
        }).error(function() {
          deferred.reject(null);
        });
      } else {
        deferred.reject(null);
      }

      return deferred.promise;
    }

    function logout() {
      AuthService.revoke();
      _currentUser = null;
      isLoggedIn = false;
    }

  }

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUuanMiLCJzaWdudXAvc2lnbnVwLm1vZHVsZS5qcyIsIndlbGNvbWUvd2VsY29tZS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51Lm1vZHVsZS5qcyIsInNlcnZpY2VzL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJvdXRlcy5qcyIsInByb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwicHJvZmlsZS9wcm9maWxlLnJvdXRlcy5qcyIsInNpZ251cC9zaWdudXAuY29udHJvbGxlci5qcyIsInNpZ251cC9zaWdudXAucm91dGVzLmpzIiwid2VsY29tZS93ZWxjb21lLmNvbnRyb2xsZXIuanMiLCJ3ZWxjb21lL3dlbGNvbWUucm91dGVzLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGguY29uc3RhbnRzLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIG1vZHVsZVxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdyZWNpcGV0b21lLnNlcnZpY2VzJyxcbiAgICAgICdyZWNpcGV0b21lLmNvbXBvbmVudHMnLFxuICAgICAgJ3JlY2lwZXRvbWUud2VsY29tZScsXG4gICAgICAncmVjaXBldG9tZS5zaWdudXAnLFxuICAgICAgJ3JlY2lwZXRvbWUubG9naW4nLFxuICAgICAgJ3JlY2lwZXRvbWUucHJvZmlsZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBjb21wb25lbnRzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5jb21wb25lbnRzJywgW1xuICAgICAgJ2NvbXBvbmVudHMudXNlcm1lbnUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbG9naW4gcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiBhdXRoZW50aWNhdGVkIHVzZXIncyBwcm9maWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2VydmljZXMgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zZXJ2aWNlcycsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBzaWdudXAgcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsYW5kaW5nIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2UgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigkc2NvcGUpIHtcbiAgICAkc2NvcGUuYXBwID0ge1xuICAgICAgdGVjaExpc3Q6IFtcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgICB7IGxpbms6ICdodHRwOi8vZXhwcmVzc2pzLmNvbS8nLCBuYW1lOiAnRXhwcmVzcy5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cDovL3Bhc3Nwb3J0anMub3JnLycsIG5hbWU6ICdQYXNzcG9ydC5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgICB7IGxpbms6ICdodHRwczovL3d3dy5tb25nb2RiLm9yZy8nLCBuYW1lOiAnTW9uZ29EQicgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgICRzY29wZS5sb2dpbiA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgbG9naW5Mb2NhbDogZG9Mb2NhbExvZ2luLFxuICAgICAgYXV0aGVudGljYXRlOiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbExvZ2luKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzdGF0ZS5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24ocHJvdmlkZXIpIHtcbiAgICAgIC8vIFRPRE86IERvIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHJlZ2lzdGVyIGxvY2FsIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHByb2ZpbGVcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29uZmlnKExvZ2luUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBQcm9maWxlQ29udHJvbGxlcigkc2NvcGUsIFVzZXJTZXJ2aWNlLCB1c2VyKSB7XG4gICAgJHNjb3BlLnByb2ZpbGUgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29uZmlnKFByb2ZpbGVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFByb2ZpbGVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdXNlcjogZnVuY3Rpb24oVXNlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29udHJvbGxlcignU2lnblVwQ29udHJvbGxlcicsIFNpZ25VcENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcENvbnRyb2xsZXIoJHNjb3BlLCAkbG9jYXRpb24sIEF1dGhTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLnNpZ251cCA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJMb2NhbDogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGF1dGhlbnRpY2F0ZTogZG9Qcm92aWRlckF1dGhlbnRpY2F0aW9uLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbihwcm92aWRlcikge1xuICAgICAgLy8gVE9ETzogRG8gdXNlciBhdXRoZW50aWNhdGlvbiBhbmQgcmVnaXN0ZXIgbG9jYWwgdXNlciBhbmQgcmVkaXJlY3QgdG8gcHJvZmlsZVxuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnblVwL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29uZmlnKFNpZ25VcFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gU2lnblVwUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnc2lnbnVwJywge1xuICAgICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbnVwL3NpZ251cC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnblVwQ29udHJvbGxlcicsXG4gICAgICB9KTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29udHJvbGxlcignV2VsY29tZUNvbnRyb2xsZXInLCBXZWxjb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gV2VsY29tZUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgJHNjb3BlLndlbGNvbWUgPSB7XG4gICAgICBncmVldGluZzoge1xuICAgICAgICBoZWFkbGluZTogJ1lvdXIgUGVyc29uYWwgUmVjaXBlIERhdGFiYXNlJyxcbiAgICAgICAgbGVhZDogJ1JlY2lwZSBUb21lIGxldFxcJ3MgeW91IGNyZWF0ZSBhbmQgbWFuYWdlIHJlY2lwZXMuJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvV2VsY29tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJylcbiAgICAgIC5jb25maWcoV2VsY29tZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gV2VsY29tZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3dlbGNvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIG1lbnUgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5jb250cm9sbGVyKCdVc2VyTWVudUNvbnRyb2xsZXInLCBVc2VyTWVudUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFVzZXJNZW51Q29udHJvbGxlcigkc2NvcGUsICRzdGF0ZSwgVXNlclNlcnZpY2UpIHtcbiAgICBVc2VyU2VydmljZVxuICAgICAgLmdldEN1cnJlbnRVc2VyKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgJHNjb3BlLnVzZXIgPSB1c2VyO1xuICAgICAgfSk7XG5cbiAgICAkc2NvcGUuaXNMb2dnZWRJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9O1xuICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIFVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgJHN0YXRlLmdvKCd3ZWxjb21lJyk7XG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmRpcmVjdGl2ZSgndXNlck1lbnUnLCBVc2VyTWVudSk7XG5cbiAgZnVuY3Rpb24gVXNlck1lbnUoVXNlclNlcnZpY2UpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnVXNlck1lbnVDb250cm9sbGVyJyxcbiAgICAgIHNjb3BlOiB7fSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUudGVtcGxhdGUuaHRtbCcsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gY29uc3RhbnRzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGgvQ29uc3RhbnRzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJylcbiAgICAgIC5jb25zdGFudCgnQVVUSF9FVkVOVFMnLCBBVVRIX0VWRU5UUyk7XG5cbiAgdmFyIEFVVEhfRVZFTlRTID0ge1xuICAgIGxvZ2luU3VjY2VzczogJ2F1dGgtbG9naW4tc3VjY2VzcycsXG4gICAgbG9naW5GYWlsZWQ6ICdhdXRoLWxvZ2luLWZhaWxlZCcsXG4gICAgbG9nb3V0U3VjY2VzczogJ2F1dGgtbG9nb3V0LXN1Y2Nlc3MnLFxuICAgIHNlc3Npb25UaW1lb3V0OiAnYXV0aC1zZXNzaW9uLXRpbWVvdXQnLFxuICAgIG5vdEF1dGhlbnRpY2F0ZWQ6ICdhdXRoLW5vdC1hdXRoZW50aWNhdGVkJyxcbiAgICBub3RBdXRob3JpemVkOiAnYXV0aC1ub3QtYXV0aG9yaXplZCcsXG4gIH07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aC9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJylcbiAgICAgIC5mYWN0b3J5KCdBdXRoU2VydmljZScsIEF1dGhTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBBdXRoU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIGp3dEhlbHBlcikge1xuXG4gICAgLy8gVE9ETzogQWRkIHZlcmlmeSBmdW5jdGlvblxuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBkb0xvY2FsUmVnaXN0cmF0aW9uOiBkb0xvY2FsUmVnaXN0cmF0aW9uLFxuICAgICAgZG9Mb2NhbExvZ2luOiBkb0xvY2FsTG9naW4sXG4gICAgICByZXZva2U6IHJldm9rZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwvcmVnaXN0ZXInLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25SZWdpc3RyYXRpb25FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwnLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25Mb2dpbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXZva2UoKSB7XG4gICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJfaWQnKTtcbiAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkF1dGhTdWNjZXNzKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmlkX3Rva2VuKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudXNlcl9pZCA9IGRhdGEudXNlcjtcbiAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbiA9IGRhdGEuaWRfdG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWdpc3RyYXRpb25FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9naW5FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlci9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJylcbiAgICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBVc2VyU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIF9jdXJyZW50VXNlciA9IG51bGw7XG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IGlzTG9nZ2VkSW4sXG4gICAgICBnZXRDdXJyZW50VXNlcjogZ2V0Q3VycmVudFVzZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdmVyaWZpY2F0aW9uIGluIEF1dGhTZXJ2aWNlIGFuZCBjYWxsIGhlcmVcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLnVzZXJfaWQgJiYgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdXNlci8nICsgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS51c2VyX2lkLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIF9jdXJyZW50VXNlciA9IGRhdGE7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBBdXRoU2VydmljZS5yZXZva2UoKTtcbiAgICAgIF9jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICBpc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=