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
      'recipetome.recipes',
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
      'components.recipe',
      'components.ingredient',
      'components.step',
      'components.inputMatch',
      'components.masonry',
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
      'services.auth',
    ]);

})(angular);

/**
 * Recipe Tome recipes view module
 *
 * @namespace RecipeTome/Recipes
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome.recipes', [
      'ui.router',
      'ui.bootstrap',
      'services.recipe',
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
      'services.auth',
      'services.user',
      'components.inputMatch',
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
      'services.recipe',
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
      'services.auth',
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
 * Recipe Tome recipe ingredient component module
 *
 * @namespace RecipeTome/Components/Ingredient
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.ingredient', [
      'ui.bootstrap',
    ]);

})(angular);

/**
 * Recipe Tome recipe ingredient component module
 *
 * @namespace RecipeTome/Components/InputMatch
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.inputMatch', []);

})(angular);

/**
 * Masonry layout component module
 *
 * @namespace RecipeTome/Components/Masonry
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.masonry', []);

})(angular);

/**
 * Recipe Tome recipe step component module
 *
 * @namespace RecipeTome/Components/Step
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.step', [
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
      'ui.router',
      'services.user',
    ]);

})(angular);

/**
 * Recipe Tome recipe component module
 *
 * @namespace RecipeTome/Components/Recipe
 * @memberof RecipeTome/Components
 */
;(function(angular) {

  angular
    .module('components.recipe', [
      'ui.bootstrap',
      'ui.router',
      'slugifier',
      'flow',
      'angular-sortable-view',
      'services.recipe',
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
 * Recipe Tome recipe service module
 *
 * @namespace RecipeTome/Services/Recipe
 * @memberof RecipeTome/Services
 */
;(function(angular) {

  angular
    .module('services.recipe', [
      'ngResource',
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
 * @name RecipeTome:controller
 * @description Controller for the {@linkcode RecipeTome} application.
 * @see RecipeTome
 * @since 0.1.0
 *
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome')
      .controller('RecipeTomeController', RecipeTomeController);

  /**
   * @class
   */
  function RecipeTomeController() {
    var vm = this;

    /**
     * List of libraries used in the application for display in the site footer.
     *
     * @type {Object[]}
     */
    vm.techList = [
      { link: 'https://nodejs.org/', name: 'Node.js' },
      { link: 'http://expressjs.com/', name: 'Express.js' },
      { link: 'http://passportjs.org/', name: 'Passport.js' },
      { link: 'https://angularjs.org/', name: 'Angular.js' },
      { link: 'https://www.mongodb.org/', name: 'MongoDB' },
    ];
  }

})(angular);

/**
 * Recipe Tome welcome view routes
 *
 * @namespace RecipeTome/Routes
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome')
      .config(RoutesConfig);

  function RoutesConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
  RoutesConfig.$inject = ["$urlRouterProvider"];

})(angular);

/**
 * @name Login:controller
 * @description Controller for the {@linkcode Login} view.
 * @see RecipeTome/Login
 * @since 0.1.0
 *
 * @memberof RecipeTome/Login
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {RecipeTome/Service/AuthService} AuthService
   */
  function LoginController($state, AuthService) {
    var vm = this;

    // TODO: Encrypt user password before sending to server

    /**
     * Prototype `User` object.
     *
     * @type {Object}
     */
    vm.user = {
      email: '',
      password: '',
    };

    // ---
    vm.loginLocal = doLocalLogin;
    // ---

    /**
     * Initiate user log in with local credentials (email + password). Calling
     * this method redirects the user to the 'profile' view.
     */
    function doLocalLogin() {
      AuthService
        .doLocalLogin(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state
            .go('profile');
        });
    }
  }
  LoginController.$inject = ["$state", "AuthService"];

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
        controllerAs: 'vm',
      });
  }
  LoginRoutesConfig.$inject = ["$stateProvider"];

})(angular);

/**
 * @name Recipes:List:controller
 * @description Controller for the {@linkcode Recipes:List} view.
 * @see Recipes
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  /**
   * @class
   * @param {Object[]} recipes
   * @param {Object[]} categories
   */
  function RecipesListController(recipes, categories) {
    var vm = this;

    /**
     * All the user's recipes, resolved from $stateProvider.
     *
     * @type {Object[]}
     */
    vm.recipes = recipes;

    /**
     * All unique categories used in user's recipes, resolved from
     * $stateProvider.
     *
     * @type {Object[]}
     */
    vm.categories = categories;

    /**
     * Currently selected category filter, by the `slug` property.
     *
     * @type {String}
     */
    vm.categoryFilter = '';
  }
  RecipesListController.$inject = ["recipes", "categories"];

})(angular);

/**
 * @name Recipes:Single:controller
 * @description Controller for the {@linkcode Recipes:Single} view.
 * @see Recipes
 * @since 0.1.0
 *
 * @memberof RecipeTome/Recipes
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes')
      .controller('RecipesViewController', RecipesViewController);

  /**
   * @class
   * @param {Object} recipe
   * @param {String} format
   */
  function RecipesViewController(recipe, format) {
    var vm = this;

    /**
     * Current recipe, resolved from $stateProvider.
     *
     * @type {Object}
     */
    vm.recipe = recipe;

    /**
     * Format to show the recipe.
     *
     * @see {@linkcode RecipeTome/Component/RTRecipe} for possible formats.
     * @type {String}
     */
    vm.format = format;
  }
  RecipesViewController.$inject = ["recipe", "format"];

})(angular);

/**
 * Recipe Tome recipes view routes
 *
 * @namespace RecipeTome/Recipes/Routes
 * @memberof RecipeTome/Recipes
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .config(RecipesRoutesConfig);

  function RecipesRoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('recipes', {
        abstract: true,
        template: '<div class="container">\n\t<main ui-view>\n\t</main>\n</div>',
      })
      .state('recipes.list', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes-list.view.html',
        controller: 'RecipesListController',
        controllerAs: 'vm',
        resolve: {
          recipes: ["RecipeService", function(RecipeService) {
            return RecipeService.query().$promise;
          }],
          categories: ["$http", "$window", function($http, $window) {
            return $http.get('/api/user/categories', {
              headers: {
                'x-access-token': $window.sessionStorage.id_token,
              }
            }).then(function(response) {
              return response.data;
            }).catch(function() {
              return [{ slug: '', label: '', }];
            });
          }],
        },
      })
      .state('recipes.view', {
        url: '/recipes/view/:recipeId',
        templateUrl: 'app/recipes/recipes-single.view.html',
        controller: 'RecipesViewController',
        controllerAs: 'vm',
        resolve: {
          recipe: ["$stateParams", "RecipeService", function($stateParams, RecipeService) {
            return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
          }],
          format: function() {
            return 'full';
          },
        },
      })
      .state('recipes.edit', {
        url: '/recipes/view/:recipeId/edit',
        templateUrl: 'app/recipes/recipes-single.view.html',
        controller: 'RecipesViewController',
        controllerAs: 'vm',
        resolve: {
          recipe: ["$stateParams", "RecipeService", function($stateParams, RecipeService) {
            return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
          }],
          format: function() {
            return 'form';
          },
        },
      })
      .state('recipes.create', {
        url: '/recipes/create',
        templateUrl: 'app/recipes/recipes-single.view.html',
        controller: 'RecipesViewController',
        controllerAs: 'vm',
        resolve: {
          recipe: function() {
            return { ingredients: [], steps: [], };
          },
          format: function() {
            return 'form';
          },
        },
      });
  }
  RecipesRoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

})(angular);

/**
 * @name Profile:controller
 * @description Controller for the {@linkcode Profile} view.
 * @see RecipeTome/Profile
 * @since 0.1.0
 *
 * @memberof RecipeTome/Profile
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.profile')
      .controller('ProfileController', ProfileController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {Recipetome/Service/UserService} UserService
   * @param {Object} user
   */
  function ProfileController($state, UserService, user) {
    var vm = this;

    /**
     * The logged-in user, resolved from $stateProvider.
     *
     * @type {Object}
     */
    vm.user = user;

    /**
     * Resolves to the user's gravatar avatar URI.
     */
    vm.gravatarImage = UserService.getGravatarAvatarUrl();

    // TODO: Encrypt user password(s) before sending to server

    /**
     * Prototype credentials object for profile edit form.
     *
     * @type {Object}
     */
    vm.credentials = {
      email: '',
      password: '',
      current_password: '',
    };

    // ---
    vm.updateCredentials = UserService.updateCredentials;
    vm.doUnregister = doUnregister;
    // ---

    /**
     * Initiate request to server to update user data. Calling this method
     * refreshes the view, loading the new user data from the server.
     * @param  {Object} credentials
     */
    function updateCredentials(credentials) {
      UserService
        .updateCredentials(credentials)
          .then(function() {
            // TODO: Show success/error message
            $state
              .go('profile', {}, { refresh: true, });
          });
    }

    /**
     * Initiate request to server to delete the user, the user's recipes and
     * uploads, and revoke api access. Calling this method redirects the user
     * to the 'welcome' view.
     */
    function doUnregister() {
      UserService
        .unregister()
        .then(function() {
          // TODO: Show success/error message
          $state
            .go('welcome');
        });
    }
  }
  ProfileController.$inject = ["$state", "UserService", "user"];

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
        controllerAs: 'vm',
        resolve: {
          user: ["UserService", function(UserService) {
            return UserService.getCurrentUser();
          }]
        }
      });
  }
  ProfileRoutesConfig.$inject = ["$stateProvider"];

})(angular);

/**
 * @name Signup:controller
 * @description Controller for the {@linkcode RecipeTome/Signup} view.
 * @see RecipeTome/Signup
 * @since 0.1.0
 *
 * @memberof RecipeTome/Signup
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.signup')
      .controller('SignUpController', SignUpController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {RecipeTome/Service/AuthService} AuthService
   */
  function SignUpController($state, AuthService) {
    var vm = this;

    // TODO: Encrypt password before sending to server

    /**
     * Prototype `User` object for signup form.
     *
     * @type {Object}
     */
    vm.user = {
      email: '',
      password: '',
    };

    // ---
    vm.registerLocal = doLocalRegistration;
    // ---

    /**
     * Initiate request to server for user registration. Calling this method
     * redirects the user to the 'profile' view.
     */
    function doLocalRegistration() {
      AuthService
        .doLocalRegistration(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state
            .go('profile');
        });
    }
  }
  SignUpController.$inject = ["$state", "AuthService"];

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
        controllerAs: 'vm',
      });
  }
  SignUpRoutesConfig.$inject = ["$stateProvider"];

})(angular);

/**
 * @name Welcome:controller
 * @description Controller for the {@linkcode RecipeTome/Welcome} view.
 * @see RecipeTome/Welcome
 * @since 0.1.0
 *
 * @memberof RecipeTome/Welcome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.welcome')
      .controller('WelcomeController', WelcomeController);

  /**
   * @class
   */
  function WelcomeController() {
    var vm = this;

    /**
     * Greeting info to display to anonymous users.
     *
     * @type {Object}
     */
    vm.greeting = {
      headline: 'Your Personal Recipe Database',
      lead: 'Recipe Tome let\'s you create and manage recipes.',
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
        controllerAs: 'vm',
      });
  }
  WelcomeRoutesConfig.$inject = ["$stateProvider"];

})(angular);

/**
 * @name RTIngredient:controller
 * @description Controller for the {@linkcode RTIngredient} directive.
 * @see RTIngredient
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTIngredient
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient')
      .controller('RTIngredientController', RTIngredientController);

  /**
   * @class
   */
  function RTIngredientController() {
    var vm = this;
  }

})(angular);

/**
 * Recipe Tome recipe ingredient component directive
 *
 * @desc Recipe ingredient directive that takes an `ingredient` object and
 *       displays it in the specified `format`. Available formats are:
 *
 * 				- 'inline': Outputs an inline element containing the formatted data.
 * 				- 'form': Displays an html form for editing an ingredient.
 *
 * 			 When used inside an `ngRepeat` directive, you can set the ingredient's
 * 			 order property by passing an expression to `order`.
 *
 * 			 To show a remove button, set the `onRemove` handler.
 *
 * @example <li><rt-ingredient ingredient="ingredient" format="inline"></rt-ingredient></li>
 *
 * @namespace RecipeTome/Components/Ingredient/Directive
 * @memberof RecipeTome/Components/Ingredient
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.ingredient')
      .directive('rtIngredient', RTIngredient);

  function RTIngredient() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    var directive = {
      restrict: 'AE',
      controller: 'RTIngredientController',
      controllerAs: 'vm',
      scope: {
        ingredient: '=',
        format: '@',
        onRemove: '&',
      },
      template: '<div ng-include="vm.getTemplateUrl()"></div>',
      link: link,
    };

    return directive;



    function link(scope, element, attrs, vm) {
      vm.format = scope.format;
      vm.ingredient = scope.ingredient;
      vm.onRemove = scope.onRemove;

      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_INLINE:
            return 'app/components/ingredient/ingredient-inline.template.html';
          case FORMAT_FORM:
            return 'app/components/ingredient/ingredient-form.template.html';
          default:
            return 'app/components/ingredient/ingredient-inline.template.html';
        }
      };
    }

  }

})(angular);

/**
 * @desc attribute directive for `<input>` elements that validates a matching
 * value to another `<input>`.
 *
 * @example <input type="text" name="input2" input-match="input1">
 *
 * @namespace RecipeTome/Components/InputMatch/Directive
 * @memberof RecipeTome/Components/InputMatch
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.inputMatch')
      .directive('inputMatch', InputMatch);

  function InputMatch() {

    var directive = {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        inputMatch: '=',
      },
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      if (!scope.inputMatch) { return; }

      function validateInput(value) {
        if (ngModel.$untouched || ngModel.$pristine) { return; }

        var targetValue = scope.inputMatch.$viewValue;
        var isMatch = Boolean(value === targetValue);

        ngModel.$setValidity('inputMatch', isMatch);

        return value;
      }

      ngModel.$parsers.unshift(validateInput);
      ngModel.$formatters.unshift(validateInput);

    }

  }

})(angular);

/**
 * @namespace RecipeTome/Components/Masonry/Directive
 * @memberof RecipeTome/Components/Masonry
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.masonry')
      .directive('rtMasonryItem', RTMasonryItem);

  function RTMasonryItem($timeout) {

    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      $timeout(function() {
        element.ready(function() {
          scope
            .$emit(attrs.rtTag || 'masonry-item-added', element, false);
        });
      });
    }

  }
  RTMasonryItem.$inject = ["$timeout"];
})(angular);

/**
 * @namespace RecipeTome/Components/Masonry/Directive
 * @memberof RecipeTome/Components/Masonry
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.masonry')
      .directive('rtMasonryStamp', RTMasonryStamp);

  function RTMasonryStamp($timeout) {

    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      $timeout(function() {
        element.ready(function() {
          scope
            .$emit(attrs.rtTag || 'masonry-item-added', element, true);
        });
      });
    }

  }
  RTMasonryStamp.$inject = ["$timeout"];
})(angular);

/**
 * @namespace RecipeTome/Components/Masonry/Directive
 * @memberof RecipeTome/Components/Masonry
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.masonry')
      .directive('rtMasonry', RTMasonry);

  function RTMasonry($timeout) {

    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, ctrl) {
      var options = {
        itemSelector: '[rt-masonry-item]',
      };
      var masonry;
      var dirty = true;

      $timeout(onContainerReady);

      function onContainerReady() {
        masonry = new Masonry(element[0], options);

        scope.$on(attrs.rtTag || 'masonry-item-added', onItemAdded);

        if (attrs.rtWatch) {
          scope.$watch(attrs.rtWatch + '', onItemsChanged);
        }
      }

      function onItemAdded(event, item, isStamp) {
        if (isStamp) {
          masonry.stamp(item);
        }

        dirty = true;
        reloadItems();
      }

      function onItemsChanged(items) {
        dirty = true;
        reloadItems();
      }

      function reloadItems() {
        $timeout(function() {
          if (dirty) {
            masonry.reloadItems();
            masonry.layout();

            dirty = false;
          }
        });
      }

    }

  }
  RTMasonry.$inject = ["$timeout"];
})(angular);

/**
 * @name RTStep:controller
 * @description Controller for the {@linkcode RTStep} directive.
 * @see RTStep
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTStep
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.step')
      .controller('RTStepController', RTStepController);

  /**
   * @class
   */
  function RTStepController() {
    var vm = this;
  }

})(angular);

/**
 * Recipe Tome recipe step component directive
 *
 * @desc Recipe step directive that takes a `step` object and
 *       displays it in the specified `format`. Available formats are:
 *
 * 				- 'inline': Outputs an inline element containing the formatted data.
 * 				- 'form': Displays an html form for editing a step.
 *
 * 			 When used inside an `ngRepeat` directive, you can set the step's
 * 			 order property by passing an expression to `order`.
 *
 * 			 To show a remove button, set the `onRemove` handler.
 *
 * @example <li><rt-step step="step" format="inline"></rt-step></li>
 *
 * @namespace RecipeTome/Components/Step/Directive
 * @memberof RecipeTome/Components/Step
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.step')
      .directive('rtStep', RTStep);

  function RTStep() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    var directive = {
      restrict: 'AE',
      controller: 'RTStepController',
      controllerAs: 'vm',
      scope: {
        step: '=',
        format: '@',
        onRemove: '&',
      },
      template: '<div ng-include="vm.getTemplateUrl()"></div>',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, vm) {
      vm.step = scope.step;
      vm.format = scope.format;
      vm.onRemove = scope.onRemove;

      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_INLINE:
            return 'app/components/step/step-block.template.html';
          case FORMAT_FORM:
            return 'app/components/step/step-form.template.html';
          default:
            return 'app/components/step/step-block.template.html';
        }
      };
    }

  }

})(angular);

/**
 * @name UserMenu:controller
 * @description Controller for the {@linkcode UserMenu} directive.
 * @see UserMenu
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/UserMenu
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.usermenu')
      .controller('UserMenuController', UserMenuController);

  /**
   * @class
   * @param {ui.router.state.$state} $state
   * @param {RecipeTome/Service/UserService} UserService
   */
  function UserMenuController($state, UserService) {
    var vm = this;

    // ---
    vm.isLoggedIn = UserService.isLoggedIn;
    vm.logout = logout;
    // ---

    /**
     * Initiate user log out.
     */
    function logout() {
      UserService
        .logout();

      // TODO: Show success/error message
      $state
        .go('welcome');
    }
  }
  UserMenuController.$inject = ["$state", "UserService"];

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

  function UserMenu() {
    var directive = {
      restrict: 'AE',
      controller: 'UserMenuController',
      controllerAs: 'vm',
      templateUrl: 'app/components/usermenu/usermenu.template.html',
    };

    return directive;
  }

})(angular);

/**
 * @name RTRecipe:controller
 * @description Controller for the {@linkcode RTRecipe} directive.
 * @see RTRecipe
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTRecipe
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.recipe')
      .controller('RTRecipeController', RTRecipeController);

  /**
   * @class
   *
   * @param {ui.router.state.$state} $state
   * @param {RecipeTome/Service/RecipeService} RecipeService
   * @param {slugifier} Slug
   */
  function RTRecipeController($state, RecipeService, Slug) {
    var vm = this;

    /**
     * Config for `rating` form control.
     * @type {Object}
     */
    vm.rating = { max: 5, };

    // ---
    vm.getThumbnail = getThumbnail;
    vm.onPictureUpload = onPictureUpload;
    vm.generateCategorySlug = generateCategorySlug;
    vm.addIngredient = addIngredient;
    vm.onIngredientReorder = onIngredientReorder;
    vm.removeIngredient = removeIngredient;
    vm.addStep = addStep;
    vm.onStepReorder = onStepReorder;
    vm.removeStep = removeStep;
    vm.saveRecipe = saveRecipe;
    vm.deleteRecipe = deleteRecipe;
    // ---

    // TODO: Save form fields in sessionStorage to persist through refresh

    /**
     * Get recipe thumbnail URI or default image URI.
     *
     * @return {String} recipe thumbnail, or default image URI
     */
    function getThumbnail() {
      if (!vm.recipe || !vm.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return vm.recipe.thumbnail;
    }

    /**
     * ng-flow upload success callback.
     *
     * @callback
     * @param  {FlowFile} file
     * @param  {Object} response
     * @param  {Flow} flow
     */
    function onPictureUpload(file, response, flow) {
      vm.recipe.thumbnail = JSON.parse(response).photo.url;
    }

    /**
     * Return the slugified category label.
     *
     * @return {String}
     */
    function generateCategorySlug() {
      vm.recipe.category.slug = Slug.slugify(vm.recipe.category.label);
    }

    /**
     * Add a new ingredient object to the current recipe.
     */
    function addIngredient() {
      vm.recipe.ingredients.push({
        order: vm.recipe.ingredients.length + 1,
      });
    }

    /**
     * Assign new order values to every ingredient. Call when any ingredient
     * is reordered.
     *
     * @callback
     */
    function onIngredientReorder() {
      for (var i = 0, len = vm.recipe.ingredients.length; i < len; i++) {
        vm.recipe.ingredients[i].order = i + 1;
      }
    }

    /**
     * Remove the specified ingredient from the current recipe.
     *
     * @param  {Object} ingredient
     */
    function removeIngredient(ingredient) {
      var index = vm.recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        vm.recipe.ingredients.splice(index, 1);
      }
    }

    /**
     * Add a new ingredient object to the current recipe.
     */
    function addStep() {
      vm.recipe.steps.push({
        order: vm.recipe.steps.length + 1,
      });
    }

    /**
     * Assign new order values to every recipe step. Call when any step
     * is reordered.
     *
     * @callback
     */
    function onStepReorder() {
      for (var i = 0, len = vm.recipe.steps.length; i < len; i++) {
        vm.recipe.steps[i].order = i + 1;
      }
    }

    /**
     * Remove the specified recipe step from the current recipe.
     *
     * @param  {Object} step
     */
    function removeStep(step) {
      var index = vm.recipe.steps.indexOf(step);
      if (index !== -1) {
        vm.recipe.steps.splice(index, 1);
      }
    }

    /**
     * Persist the current recipe to the server. This redirects the user to the
     * 'single' recipes view.
     */
    function saveRecipe() {
      if (vm.recipe._id) {
        // Recipe exists in the database, so do update
        RecipeService
          .update({ recipeId: vm.recipe._id, }, vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state
              .go('^.view', { recipeId: vm.recipe._id, });
          });
      } else {
        // New recipe, do save
        RecipeService
          .save(vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state
              .go('^.view', { recipeId: vm.recipe._id, });
          });
      }
    }

    /**
     * Remove recipe from the database. Calling this redirects the user to the
     * 'list' recipes view
     */
    function deleteRecipe() {
      RecipeService
        .remove({ recipeId: vm.recipe._id, }, function(response) {

          // TODO: Show success/error message
          // TODO: Save recipe to session storage, provide undo option
          $state
            .go('^.list');
        });
    }
  }
  RTRecipeController.$inject = ["$state", "RecipeService", "Slug"];

})(angular);

/**
 * Recipe Tome recipe component directive
 *
 * @desc Recipe directive that takes a `recipe` object and displays it in the
 *       specified `format`. Available formats are:
 *
 * 				- 'card': A slim view that is perfect for displaying in a list of rows
 * 									or tiles/cards.
 * 				- 'full': Full view suitable for full page or detail view. Shows all
 * 									available fields.
 * 				- 'form': Full view web form for editing or creating recipes.
 *
 * @example <li class="col-md-4"><rt-recipe recipe="recipe" format="card"></rt-recipe></li>
 *
 * @namespace RecipeTome/Components/Recipe/Directive
 * @memberof RecipeTome/Components/Recipe
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.recipe')
      .directive('rtRecipe', RTRecipe);

  function RTRecipe() {
    var FORMAT_CARD = 'card',
        FORMAT_FULL = 'full',
        FORMAT_FORM = "form";

    var directive = {
      restrict: 'AE',
      controller: 'RTRecipeController',
      controllerAs: 'vm',
      scope: {
        recipe: '=',
        format: '@',
      },
      template: '<div ng-include="vm.getTemplateUrl()"></div>',
      link: link,
    };

    return directive;

    function getTemplateUrl(element, attrs) {
      switch(attrs.format) {
        case FORMAT_CARD:
          return 'app/components/recipe/recipe-card.template.html';
        case FORMAT_FULL:
          return 'app/components/recipe/recipe-full.template.html';
        case FORMAT_FORM:
          return 'app/components/recipe/recipe-form.template.html';
        default:
          return 'app/components/recipe/recipe-card.template.html';
      }
    }

    function link(scope, element, attrs, vm) {
      if (attrs.format === FORMAT_FORM && !scope.recipe._id) {
        vm.title = 'New Recipe';
      } else {
        vm.title = 'Edit Recipe';
      }

      vm.recipe = scope.recipe;
      vm.format = scope.format;

      // Get template url in link function to use resolved attributes
      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_CARD:
            return 'app/components/recipe/recipe-card.template.html';
          case FORMAT_FULL:
            return 'app/components/recipe/recipe-full.template.html';
          case FORMAT_FORM:
            return 'app/components/recipe/recipe-form.template.html';
          default:
            return 'app/components/recipe/recipe-card.template.html';
        }
      };
    }



  }

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

  function AuthService($http, $window, jwtHelper) {

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
      $window.sessionStorage.removeItem('id_token');
    }

    function onAuthSuccess(response) {
      if (response.id_token) {
        $window.sessionStorage.id_token = response.id_token;
      }
    }

    function onRegistrationError(response) {
      revoke();

      // TODO: Provide error feedback
    }

    function onLoginError(data) {
      revoke();

      // TODO: Provide error feedback
    }

  }
  AuthService.$inject = ["$http", "$window", "jwtHelper"];

})(angular);

/**
 * Recipe Tome recipe service
 *
 * @namespace RecipeTome/Services/Recipe/Service
 * @memberof RecipeTome/Services/Recipe
 */
;(function(angular) {

  angular
    .module('services.recipe')
      .factory('RecipeService', RecipeService);

  function RecipeService($resource, $window) {
    var _headers = {
      'x-access-token': $window.sessionStorage.id_token,
    };

    var service = $resource(
      '/api/user/recipes/:recipeId',
      { recipeId: '@recipeId', },
      {
        get: { method: 'GET', headers: _headers, },
        save: { method: 'POST', headers: _headers, },
        query: { method: 'GET', isArray: true, headers: _headers, },
        remove: { method: 'DELETE', headers: _headers, },
        delete: { method: 'DELETE', headers: _headers, },
        update: { method: 'PUT', headers: _headers, },
      });

    return service;

  }
  RecipeService.$inject = ["$resource", "$window"];

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
    var GRAVATAR_BASEURL = 'http://www.gravatar.com/avatar/';

    var _currentUser = null;

    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      getGravatarAvatarUrl: getGravatarAvatarUrl,
      updateCredentials: updateCredentials,
      unregister: unregister,
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

      // TODO: Verify with AuthService to remove $window dependency
      if ($window.sessionStorage.id_token) {
        $http
          .get('/api/user/', {
            headers: {
              'x-access-token': $window.sessionStorage.id_token,
            }
          }).then(onGetCurrentUserSuccess)
            .catch(onGetCurrentUserError);
      } else {
        deferred.reject(null);
      }

      return deferred.promise;

      function onGetCurrentUserSuccess(response) {
        _currentUser = response.data;

        deferred.resolve(_currentUser);
      }

      function onGetCurrentUserError(response) {
        deferred.reject(null);
      }
    }

    function getGravatarAvatarUrl() {
      if (!_currentUser) {
        return ''; // TODO: Return placeholder avatar
      }

      var hash = CryptoJS.MD5(_currentUser.email.trim().toLowerCase()).toString();

      return GRAVATAR_BASEURL + hash + '.jpg';
    }

    function updateCredentials(credentials) {
      // TODO: Verify with AuthService to remove $window dependency
      if ($window.sessionStorage.id_token) {
        return $http
          .put('/api/user/', credentials, {
            headers: {
              'x-access-token': $window.sessionStorage.id_token,
            }
          }).then(onUpdateCredentialsSuccess)
            .catch(onUpdateCredentialsError);
      }

      function onUpdateCredentialsSuccess(response) {
        _currentUser = response.data;

        return AuthService
          .doLocalLogin({
            email: _currentUser.email,
            password: credentials.password,
          });
      }

      function onUpdateCredentialsError(response) {
        // TODO: Display error to user
      }
    }

    function unregister() {
      return $http
        .delete('/api/user/', {
          headers: {
            'x-access-token': $window.sessionStorage.id_token,
          },
        }).then(logout);
    }

    function logout() {
      AuthService
        .revoke();

      _currentUser = null;
    }

  }
  UserService.$inject = ["$http", "$window", "$q", "AuthService"];

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInJlY2lwZXMvcmVjaXBlcy5tb2R1bGUuanMiLCJwcm9maWxlL3Byb2ZpbGUubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5tb2R1bGUuanMiLCJjb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51Lm1vZHVsZS5qcyIsImNvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJwcm9maWxlL3Byb2ZpbGUuY29udHJvbGxlci5qcyIsInByb2ZpbGUvcHJvZmlsZS5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2lucHV0LW1hdGNoL2lucHV0LW1hdGNoLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LWl0ZW0uZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktc3RhbXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnkuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWNpcGV0b21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWNpcGUgVG9tZSBhcHBsaWNhdGlvbiBtb2R1bGVcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAncmVjaXBldG9tZS5zZXJ2aWNlcycsXG4gICAgICAncmVjaXBldG9tZS5jb21wb25lbnRzJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2lnbnVwJyxcbiAgICAgICdyZWNpcGV0b21lLmxvZ2luJyxcbiAgICAgICdyZWNpcGV0b21lLnByb2ZpbGUnLFxuICAgICAgJ3JlY2lwZXRvbWUucmVjaXBlcycsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBjb21wb25lbnRzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5jb21wb25lbnRzJywgW1xuICAgICAgJ2NvbXBvbmVudHMudXNlcm1lbnUnLFxuICAgICAgJ2NvbXBvbmVudHMucmVjaXBlJyxcbiAgICAgICdjb21wb25lbnRzLmluZ3JlZGllbnQnLFxuICAgICAgJ2NvbXBvbmVudHMuc3RlcCcsXG4gICAgICAnY29tcG9uZW50cy5pbnB1dE1hdGNoJyxcbiAgICAgICdjb21wb25lbnRzLm1hc29ucnknLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbG9naW4gcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgdmlldyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiBhdXRoZW50aWNhdGVkIHVzZXIncyBwcm9maWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzZXJ2aWNlcyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNlcnZpY2VzJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgc2lnbnVwIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ251cFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbGFuZGluZyBwYWdlLlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmlucHV0TWF0Y2gnLCBbXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBNYXNvbnJ5IGxheW91dCBjb21wb25lbnQgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JywgW10pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JlY2lwZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3NsdWdpZmllcicsXG4gICAgICAnZmxvdycsXG4gICAgICAnYW5ndWxhci1zb3J0YWJsZS12aWV3JyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZSBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJywgW1xuICAgICAgJ25nUmVzb3VyY2UnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZVRvbWU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWV9IGFwcGxpY2F0aW9uLlxuICogQHNlZSBSZWNpcGVUb21lXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgbGlicmFyaWVzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGZvciBkaXNwbGF5IGluIHRoZSBzaXRlIGZvb3Rlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICB2bS50ZWNoTGlzdCA9IFtcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vbm9kZWpzLm9yZy8nLCBuYW1lOiAnTm9kZS5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHA6Ly9leHByZXNzanMuY29tLycsIG5hbWU6ICdFeHByZXNzLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL3Bhc3Nwb3J0anMub3JnLycsIG5hbWU6ICdQYXNzcG9ydC5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLCBuYW1lOiAnQW5ndWxhci5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vd3d3Lm1vbmdvZGIub3JnLycsIG5hbWU6ICdNb25nb0RCJyB9LFxuICAgIF07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29uZmlnKFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUm91dGVzQ29uZmlnKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfVxuICBSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIExvZ2luOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBMb2dpbn0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Mb2dpblxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZS9BdXRoU2VydmljZX0gQXV0aFNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZCBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBgVXNlcmAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS5sb2dpbkxvY2FsID0gZG9Mb2NhbExvZ2luO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdXNlciBsb2cgaW4gd2l0aCBsb2NhbCBjcmVkZW50aWFscyAoZW1haWwgKyBwYXNzd29yZCkuIENhbGxpbmdcbiAgICAgKiB0aGlzIG1ldGhvZCByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlICdwcm9maWxlJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbigpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsTG9naW4odm0udXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgTG9naW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGxvZ2luIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0xvZ2luL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbmZpZyhMb2dpblJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gTG9naW5Sb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4udmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pO1xuICB9XG4gIExvZ2luUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZXM6TGlzdDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlczpMaXN0fSB2aWV3LlxuICogQHNlZSBSZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsIFJlY2lwZXNMaXN0Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWNpcGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNhdGVnb3JpZXNcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNMaXN0Q29udHJvbGxlcihyZWNpcGVzLCBjYXRlZ29yaWVzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgdXNlcidzIHJlY2lwZXMsIHJlc29sdmVkIGZyb20gJHN0YXRlUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0W119XG4gICAgICovXG4gICAgdm0ucmVjaXBlcyA9IHJlY2lwZXM7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdW5pcXVlIGNhdGVnb3JpZXMgdXNlZCBpbiB1c2VyJ3MgcmVjaXBlcywgcmVzb2x2ZWQgZnJvbVxuICAgICAqICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5IGZpbHRlciwgYnkgdGhlIGBzbHVnYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdm0uY2F0ZWdvcnlGaWx0ZXIgPSAnJztcbiAgfVxuICBSZWNpcGVzTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZXNcIiwgXCJjYXRlZ29yaWVzXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6U2luZ2xlfSB2aWV3LlxuICogQHNlZSBSZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsIFJlY2lwZXNWaWV3Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjaXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNWaWV3Q29udHJvbGxlcihyZWNpcGUsIGZvcm1hdCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHJlY2lwZSwgcmVzb2x2ZWQgZnJvbSAkc3RhdGVQcm92aWRlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRvIHNob3cgdGhlIHJlY2lwZS5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rY29kZSBSZWNpcGVUb21lL0NvbXBvbmVudC9SVFJlY2lwZX0gZm9yIHBvc3NpYmxlIGZvcm1hdHMuXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB2bS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgUmVjaXBlc1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbXCJyZWNpcGVcIiwgXCJmb3JtYXRcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuXFx0PG1haW4gdWktdmlldz5cXG5cXHQ8L21haW4+XFxuPC9kaXY+JyxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0xpc3RDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlczogW1wiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbihSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5xdWVyeSgpLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbeyBzbHVnOiAnJywgbGFiZWw6ICcnLCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy52aWV3Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogW1wiJHN0YXRlUGFyYW1zXCIsIFwiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkL2VkaXQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbmdyZWRpZW50czogW10sIHN0ZXBzOiBbXSwgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuICBSZWNpcGVzUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFByb2ZpbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFByb2ZpbGV9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBldG9tZS9TZXJ2aWNlL1VzZXJTZXJ2aWNlfSBVc2VyU2VydmljZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlclxuICAgKi9cbiAgZnVuY3Rpb24gUHJvZmlsZUNvbnRyb2xsZXIoJHN0YXRlLCBVc2VyU2VydmljZSwgdXNlcikge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9nZ2VkLWluIHVzZXIsIHJlc29sdmVkIGZyb20gJHN0YXRlUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLnVzZXIgPSB1c2VyO1xuXG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdG8gdGhlIHVzZXIncyBncmF2YXRhciBhdmF0YXIgVVJJLlxuICAgICAqL1xuICAgIHZtLmdyYXZhdGFySW1hZ2UgPSBVc2VyU2VydmljZS5nZXRHcmF2YXRhckF2YXRhclVybCgpO1xuXG4gICAgLy8gVE9ETzogRW5jcnlwdCB1c2VyIHBhc3N3b3JkKHMpIGJlZm9yZSBzZW5kaW5nIHRvIHNlcnZlclxuXG4gICAgLyoqXG4gICAgICogUHJvdG90eXBlIGNyZWRlbnRpYWxzIG9iamVjdCBmb3IgcHJvZmlsZSBlZGl0IGZvcm0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLmNyZWRlbnRpYWxzID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY3VycmVudF9wYXNzd29yZDogJycsXG4gICAgfTtcblxuICAgIC8vIC0tLVxuICAgIHZtLnVwZGF0ZUNyZWRlbnRpYWxzID0gVXNlclNlcnZpY2UudXBkYXRlQ3JlZGVudGlhbHM7XG4gICAgdm0uZG9VbnJlZ2lzdGVyID0gZG9VbnJlZ2lzdGVyO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgcmVxdWVzdCB0byBzZXJ2ZXIgdG8gdXBkYXRlIHVzZXIgZGF0YS4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIHJlZnJlc2hlcyB0aGUgdmlldywgbG9hZGluZyB0aGUgbmV3IHVzZXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjcmVkZW50aWFsc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAudXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAgIC5nbygncHJvZmlsZScsIHt9LCB7IHJlZnJlc2g6IHRydWUsIH0pO1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHJlcXVlc3QgdG8gc2VydmVyIHRvIGRlbGV0ZSB0aGUgdXNlciwgdGhlIHVzZXIncyByZWNpcGVzIGFuZFxuICAgICAqIHVwbG9hZHMsIGFuZCByZXZva2UgYXBpIGFjY2Vzcy4gQ2FsbGluZyB0aGlzIG1ldGhvZCByZWRpcmVjdHMgdGhlIHVzZXJcbiAgICAgKiB0byB0aGUgJ3dlbGNvbWUnIHZpZXcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9VbnJlZ2lzdGVyKCkge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLnVucmVnaXN0ZXIoKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgLmdvKCd3ZWxjb21lJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBQcm9maWxlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiVXNlclNlcnZpY2VcIiwgXCJ1c2VyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcHJvZmlsZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb25maWcoUHJvZmlsZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUHJvZmlsZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3Byb2ZpbGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9maWxlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHVzZXI6IFtcIlVzZXJTZXJ2aWNlXCIsIGZ1bmN0aW9uKFVzZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gVXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBQcm9maWxlUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFNpZ251cDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9TaWdudXB9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWdudXBcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb250cm9sbGVyKCdTaWduVXBDb250cm9sbGVyJywgU2lnblVwQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZS9BdXRoU2VydmljZX0gQXV0aFNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIFNpZ25VcENvbnRyb2xsZXIoJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiBFbmNyeXB0IHBhc3N3b3JkIGJlZm9yZSBzZW5kaW5nIHRvIHNlcnZlclxuXG4gICAgLyoqXG4gICAgICogUHJvdG90eXBlIGBVc2VyYCBvYmplY3QgZm9yIHNpZ251cCBmb3JtLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS5yZWdpc3RlckxvY2FsID0gZG9Mb2NhbFJlZ2lzdHJhdGlvbjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHJlcXVlc3QgdG8gc2VydmVyIGZvciB1c2VyIHJlZ2lzdHJhdGlvbi4gQ2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqIHJlZGlyZWN0cyB0aGUgdXNlciB0byB0aGUgJ3Byb2ZpbGUnIHZpZXcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9Mb2NhbFJlZ2lzdHJhdGlvbigpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsUmVnaXN0cmF0aW9uKHZtLnVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAuZ28oJ3Byb2ZpbGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFNpZ25VcENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIkF1dGhTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2lnbnVwIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ25VcC9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NpZ25VcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnKVxuICAgICAgLmNvbmZpZyhTaWduVXBSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcFJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ251cC9zaWdudXAudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25VcENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBTaWduVXBSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgV2VsY29tZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9XZWxjb21lfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29udHJvbGxlcignV2VsY29tZUNvbnRyb2xsZXInLCBXZWxjb21lQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gV2VsY29tZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEdyZWV0aW5nIGluZm8gdG8gZGlzcGxheSB0byBhbm9ueW1vdXMgdXNlcnMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLmdyZWV0aW5nID0ge1xuICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICBsZWFkOiAnUmVjaXBlIFRvbWUgbGV0XFwncyB5b3UgY3JlYXRlIGFuZCBtYW5hZ2UgcmVjaXBlcy4nLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCd3ZWxjb21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd2VsY29tZS93ZWxjb21lLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXZWxjb21lQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pO1xuICB9XG4gIFdlbGNvbWVSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRJbmdyZWRpZW50OmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSVEluZ3JlZGllbnR9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUlRJbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5jb250cm9sbGVyKCdSVEluZ3JlZGllbnRDb250cm9sbGVyJywgUlRJbmdyZWRpZW50Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50Q29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgaW5ncmVkaWVudCBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQGRlc2MgUmVjaXBlIGluZ3JlZGllbnQgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYW4gYGluZ3JlZGllbnRgIG9iamVjdCBhbmRcbiAqICAgICAgIGRpc3BsYXlzIGl0IGluIHRoZSBzcGVjaWZpZWQgYGZvcm1hdGAuIEF2YWlsYWJsZSBmb3JtYXRzIGFyZTpcbiAqXG4gKiBcdFx0XHRcdC0gJ2lubGluZSc6IE91dHB1dHMgYW4gaW5saW5lIGVsZW1lbnQgY29udGFpbmluZyB0aGUgZm9ybWF0dGVkIGRhdGEuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBEaXNwbGF5cyBhbiBodG1sIGZvcm0gZm9yIGVkaXRpbmcgYW4gaW5ncmVkaWVudC5cbiAqXG4gKiBcdFx0XHQgV2hlbiB1c2VkIGluc2lkZSBhbiBgbmdSZXBlYXRgIGRpcmVjdGl2ZSwgeW91IGNhbiBzZXQgdGhlIGluZ3JlZGllbnQnc1xuICogXHRcdFx0IG9yZGVyIHByb3BlcnR5IGJ5IHBhc3NpbmcgYW4gZXhwcmVzc2lvbiB0byBgb3JkZXJgLlxuICpcbiAqIFx0XHRcdCBUbyBzaG93IGEgcmVtb3ZlIGJ1dHRvbiwgc2V0IHRoZSBgb25SZW1vdmVgIGhhbmRsZXIuXG4gKlxuICogQGV4YW1wbGUgPGxpPjxydC1pbmdyZWRpZW50IGluZ3JlZGllbnQ9XCJpbmdyZWRpZW50XCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1pbmdyZWRpZW50PjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRJbmdyZWRpZW50JywgUlRJbmdyZWRpZW50KTtcblxuICBmdW5jdGlvbiBSVEluZ3JlZGllbnQoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVEluZ3JlZGllbnRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGluZ3JlZGllbnQ6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICB2bS5pbmdyZWRpZW50ID0gc2NvcGUuaW5ncmVkaWVudDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG5cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9JTkxJTkU6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1pbmxpbmUudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWlubGluZS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQGRlc2MgYXR0cmlidXRlIGRpcmVjdGl2ZSBmb3IgYDxpbnB1dD5gIGVsZW1lbnRzIHRoYXQgdmFsaWRhdGVzIGEgbWF0Y2hpbmdcbiAqIHZhbHVlIHRvIGFub3RoZXIgYDxpbnB1dD5gLlxuICpcbiAqIEBleGFtcGxlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dDJcIiBpbnB1dC1tYXRjaD1cImlucHV0MVwiPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2gvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbnB1dE1hdGNoJylcbiAgICAgIC5kaXJlY3RpdmUoJ2lucHV0TWF0Y2gnLCBJbnB1dE1hdGNoKTtcblxuICBmdW5jdGlvbiBJbnB1dE1hdGNoKCkge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbnB1dE1hdGNoOiAnPScsXG4gICAgICB9LFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICBpZiAoIXNjb3BlLmlucHV0TWF0Y2gpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQodmFsdWUpIHtcbiAgICAgICAgaWYgKG5nTW9kZWwuJHVudG91Y2hlZCB8fCBuZ01vZGVsLiRwcmlzdGluZSkgeyByZXR1cm47IH1cblxuICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSBzY29wZS5pbnB1dE1hdGNoLiR2aWV3VmFsdWU7XG4gICAgICAgIHZhciBpc01hdGNoID0gQm9vbGVhbih2YWx1ZSA9PT0gdGFyZ2V0VmFsdWUpO1xuXG4gICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdpbnB1dE1hdGNoJywgaXNNYXRjaCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG4gICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG5cbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5SXRlbScsIFJUTWFzb25yeUl0ZW0pO1xuXG4gIGZ1bmN0aW9uIFJUTWFzb25yeUl0ZW0oJHRpbWVvdXQpIHtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZVxuICAgICAgICAgICAgLiRlbWl0KGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgUlRNYXNvbnJ5SXRlbS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5U3RhbXAnLCBSVE1hc29ucnlTdGFtcCk7XG5cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5U3RhbXAoJHRpbWVvdXQpIHtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZWxlbWVudC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZVxuICAgICAgICAgICAgLiRlbWl0KGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBSVE1hc29ucnlTdGFtcC4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5JywgUlRNYXNvbnJ5KTtcblxuICBmdW5jdGlvbiBSVE1hc29ucnkoJHRpbWVvdXQpIHtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnW3J0LW1hc29ucnktaXRlbV0nLFxuICAgICAgfTtcbiAgICAgIHZhciBtYXNvbnJ5O1xuICAgICAgdmFyIGRpcnR5ID0gdHJ1ZTtcblxuICAgICAgJHRpbWVvdXQob25Db250YWluZXJSZWFkeSk7XG5cbiAgICAgIGZ1bmN0aW9uIG9uQ29udGFpbmVyUmVhZHkoKSB7XG4gICAgICAgIG1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtZW50WzBdLCBvcHRpb25zKTtcblxuICAgICAgICBzY29wZS4kb24oYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIG9uSXRlbUFkZGVkKTtcblxuICAgICAgICBpZiAoYXR0cnMucnRXYXRjaCkge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5ydFdhdGNoICsgJycsIG9uSXRlbXNDaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbkl0ZW1BZGRlZChldmVudCwgaXRlbSwgaXNTdGFtcCkge1xuICAgICAgICBpZiAoaXNTdGFtcCkge1xuICAgICAgICAgIG1hc29ucnkuc3RhbXAoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgIHJlbG9hZEl0ZW1zKCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uSXRlbXNDaGFuZ2VkKGl0ZW1zKSB7XG4gICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgcmVsb2FkSXRlbXMoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVsb2FkSXRlbXMoKSB7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgbWFzb25yeS5yZWxvYWRJdGVtcygpO1xuICAgICAgICAgICAgbWFzb25yeS5sYXlvdXQoKTtcblxuICAgICAgICAgICAgZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbiAgUlRNYXNvbnJ5LiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFN0ZXA6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUU3RlcH0gZGlyZWN0aXZlLlxuICogQHNlZSBSVFN0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUU3RlcENvbnRyb2xsZXInLCBSVFN0ZXBDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVFN0ZXBDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzdGVwIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgc3RlcCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhIGBzdGVwYCBvYmplY3QgYW5kXG4gKiAgICAgICBkaXNwbGF5cyBpdCBpbiB0aGUgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdpbmxpbmUnOiBPdXRwdXRzIGFuIGlubGluZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGZvcm1hdHRlZCBkYXRhLlxuICogXHRcdFx0XHQtICdmb3JtJzogRGlzcGxheXMgYW4gaHRtbCBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcC5cbiAqXG4gKiBcdFx0XHQgV2hlbiB1c2VkIGluc2lkZSBhbiBgbmdSZXBlYXRgIGRpcmVjdGl2ZSwgeW91IGNhbiBzZXQgdGhlIHN0ZXAnc1xuICogXHRcdFx0IG9yZGVyIHByb3BlcnR5IGJ5IHBhc3NpbmcgYW4gZXhwcmVzc2lvbiB0byBgb3JkZXJgLlxuICpcbiAqIFx0XHRcdCBUbyBzaG93IGEgcmVtb3ZlIGJ1dHRvbiwgc2V0IHRoZSBgb25SZW1vdmVgIGhhbmRsZXIuXG4gKlxuICogQGV4YW1wbGUgPGxpPjxydC1zdGVwIHN0ZXA9XCJzdGVwXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1zdGVwPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRTdGVwJywgUlRTdGVwKTtcblxuICBmdW5jdGlvbiBSVFN0ZXAoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFN0ZXBDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHN0ZXA6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLnN0ZXAgPSBzY29wZS5zdGVwO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFVzZXJNZW51fSBkaXJlY3RpdmUuXG4gKiBAc2VlIFVzZXJNZW51XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5jb250cm9sbGVyKCdVc2VyTWVudUNvbnRyb2xsZXInLCBVc2VyTWVudUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2UvVXNlclNlcnZpY2V9IFVzZXJTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBVc2VyTWVudUNvbnRyb2xsZXIoJHN0YXRlLCBVc2VyU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvLyAtLS1cbiAgICB2bS5pc0xvZ2dlZEluID0gVXNlclNlcnZpY2UuaXNMb2dnZWRJbjtcbiAgICB2bS5sb2dvdXQgPSBsb2dvdXQ7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSB1c2VyIGxvZyBvdXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLmxvZ291dCgpO1xuXG4gICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgJHN0YXRlXG4gICAgICAgIC5nbygnd2VsY29tZScpO1xuICAgIH1cbiAgfVxuICBVc2VyTWVudUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlVzZXJTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmRpcmVjdGl2ZSgndXNlck1lbnUnLCBVc2VyTWVudSk7XG5cbiAgZnVuY3Rpb24gVXNlck1lbnUoKSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1VzZXJNZW51Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51LnRlbXBsYXRlLmh0bWwnLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFJlY2lwZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUlRSZWNpcGV9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFJlY2lwZUNvbnRyb2xsZXInLCBSVFJlY2lwZUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2UvUmVjaXBlU2VydmljZX0gUmVjaXBlU2VydmljZVxuICAgKiBAcGFyYW0ge3NsdWdpZmllcn0gU2x1Z1xuICAgKi9cbiAgZnVuY3Rpb24gUlRSZWNpcGVDb250cm9sbGVyKCRzdGF0ZSwgUmVjaXBlU2VydmljZSwgU2x1Zykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWcgZm9yIGByYXRpbmdgIGZvcm0gY29udHJvbC5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLnJhdGluZyA9IHsgbWF4OiA1LCB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0uZ2V0VGh1bWJuYWlsID0gZ2V0VGh1bWJuYWlsO1xuICAgIHZtLm9uUGljdHVyZVVwbG9hZCA9IG9uUGljdHVyZVVwbG9hZDtcbiAgICB2bS5nZW5lcmF0ZUNhdGVnb3J5U2x1ZyA9IGdlbmVyYXRlQ2F0ZWdvcnlTbHVnO1xuICAgIHZtLmFkZEluZ3JlZGllbnQgPSBhZGRJbmdyZWRpZW50O1xuICAgIHZtLm9uSW5ncmVkaWVudFJlb3JkZXIgPSBvbkluZ3JlZGllbnRSZW9yZGVyO1xuICAgIHZtLnJlbW92ZUluZ3JlZGllbnQgPSByZW1vdmVJbmdyZWRpZW50O1xuICAgIHZtLmFkZFN0ZXAgPSBhZGRTdGVwO1xuICAgIHZtLm9uU3RlcFJlb3JkZXIgPSBvblN0ZXBSZW9yZGVyO1xuICAgIHZtLnJlbW92ZVN0ZXAgPSByZW1vdmVTdGVwO1xuICAgIHZtLnNhdmVSZWNpcGUgPSBzYXZlUmVjaXBlO1xuICAgIHZtLmRlbGV0ZVJlY2lwZSA9IGRlbGV0ZVJlY2lwZTtcbiAgICAvLyAtLS1cblxuICAgIC8vIFRPRE86IFNhdmUgZm9ybSBmaWVsZHMgaW4gc2Vzc2lvblN0b3JhZ2UgdG8gcGVyc2lzdCB0aHJvdWdoIHJlZnJlc2hcblxuICAgIC8qKlxuICAgICAqIEdldCByZWNpcGUgdGh1bWJuYWlsIFVSSSBvciBkZWZhdWx0IGltYWdlIFVSSS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVjaXBlIHRodW1ibmFpbCwgb3IgZGVmYXVsdCBpbWFnZSBVUklcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRUaHVtYm5haWwoKSB7XG4gICAgICBpZiAoIXZtLnJlY2lwZSB8fCAhdm0ucmVjaXBlLnRodW1ibmFpbCkge1xuICAgICAgICByZXR1cm4gJ2Fzc2V0L2ltZy9yZWNpcGUtaW1hZ2UtcGxhY2Vob2xkZXItMzYweDI0MC5wbmcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm0ucmVjaXBlLnRodW1ibmFpbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBuZy1mbG93IHVwbG9hZCBzdWNjZXNzIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7Rmxvd0ZpbGV9IGZpbGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHBhcmFtICB7Rmxvd30gZmxvd1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUGljdHVyZVVwbG9hZChmaWxlLCByZXNwb25zZSwgZmxvdykge1xuICAgICAgdm0ucmVjaXBlLnRodW1ibmFpbCA9IEpTT04ucGFyc2UocmVzcG9uc2UpLnBob3RvLnVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNsdWdpZmllZCBjYXRlZ29yeSBsYWJlbC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3J5U2x1ZygpIHtcbiAgICAgIHZtLnJlY2lwZS5jYXRlZ29yeS5zbHVnID0gU2x1Zy5zbHVnaWZ5KHZtLnJlY2lwZS5jYXRlZ29yeS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGluZ3JlZGllbnQgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmdyZWRpZW50KCkge1xuICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gbmV3IG9yZGVyIHZhbHVlcyB0byBldmVyeSBpbmdyZWRpZW50LiBDYWxsIHdoZW4gYW55IGluZ3JlZGllbnRcbiAgICAgKiBpcyByZW9yZGVyZWQuXG4gICAgICpcbiAgICAgKiBAY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkluZ3JlZGllbnRSZW9yZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHNbaV0ub3JkZXIgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHNwZWNpZmllZCBpbmdyZWRpZW50IGZyb20gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBpbmdyZWRpZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5ncmVkaWVudChpbmdyZWRpZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuaW5ncmVkaWVudHMuaW5kZXhPZihpbmdyZWRpZW50KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGluZ3JlZGllbnQgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRTdGVwKCkge1xuICAgICAgdm0ucmVjaXBlLnN0ZXBzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gbmV3IG9yZGVyIHZhbHVlcyB0byBldmVyeSByZWNpcGUgc3RlcC4gQ2FsbCB3aGVuIGFueSBzdGVwXG4gICAgICogaXMgcmVvcmRlcmVkLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25TdGVwUmVvcmRlcigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2bS5yZWNpcGUuc3RlcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdm0ucmVjaXBlLnN0ZXBzW2ldLm9yZGVyID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBzcGVjaWZpZWQgcmVjaXBlIHN0ZXAgZnJvbSB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0ZXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVTdGVwKHN0ZXApIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5zdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJzaXN0IHRoZSBjdXJyZW50IHJlY2lwZSB0byB0aGUgc2VydmVyLiBUaGlzIHJlZGlyZWN0cyB0aGUgdXNlciB0byB0aGVcbiAgICAgKiAnc2luZ2xlJyByZWNpcGVzIHZpZXcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2F2ZVJlY2lwZSgpIHtcbiAgICAgIGlmICh2bS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIC8vIFJlY2lwZSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLCBzbyBkbyB1cGRhdGVcbiAgICAgICAgUmVjaXBlU2VydmljZVxuICAgICAgICAgIC51cGRhdGUoeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSwgdm0ucmVjaXBlLCBmdW5jdGlvbihyZWNpcGUpIHtcbiAgICAgICAgICAgIHZtLnJlY2lwZSA9IHJlY2lwZTtcblxuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTmV3IHJlY2lwZSwgZG8gc2F2ZVxuICAgICAgICBSZWNpcGVTZXJ2aWNlXG4gICAgICAgICAgLnNhdmUodm0ucmVjaXBlLCBmdW5jdGlvbihyZWNpcGUpIHtcbiAgICAgICAgICAgIHZtLnJlY2lwZSA9IHJlY2lwZTtcblxuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSByZWNpcGUgZnJvbSB0aGUgZGF0YWJhc2UuIENhbGxpbmcgdGhpcyByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlXG4gICAgICogJ2xpc3QnIHJlY2lwZXMgdmlld1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlY2lwZSgpIHtcbiAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgLnJlbW92ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAvLyBUT0RPOiBTYXZlIHJlY2lwZSB0byBzZXNzaW9uIHN0b3JhZ2UsIHByb3ZpZGUgdW5kbyBvcHRpb25cbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygnXi5saXN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBSVFJlY2lwZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlJlY2lwZVNlcnZpY2VcIiwgXCJTbHVnXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgcmVjaXBlYCBvYmplY3QgYW5kIGRpc3BsYXlzIGl0IGluIHRoZVxuICogICAgICAgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdjYXJkJzogQSBzbGltIHZpZXcgdGhhdCBpcyBwZXJmZWN0IGZvciBkaXNwbGF5aW5nIGluIGEgbGlzdCBvZiByb3dzXG4gKiBcdFx0XHRcdFx0XHRcdFx0XHRvciB0aWxlcy9jYXJkcy5cbiAqIFx0XHRcdFx0LSAnZnVsbCc6IEZ1bGwgdmlldyBzdWl0YWJsZSBmb3IgZnVsbCBwYWdlIG9yIGRldGFpbCB2aWV3LiBTaG93cyBhbGxcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdGF2YWlsYWJsZSBmaWVsZHMuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBGdWxsIHZpZXcgd2ViIGZvcm0gZm9yIGVkaXRpbmcgb3IgY3JlYXRpbmcgcmVjaXBlcy5cbiAqXG4gKiBAZXhhbXBsZSA8bGkgY2xhc3M9XCJjb2wtbWQtNFwiPjxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCIgZm9ybWF0PVwiY2FyZFwiPjwvcnQtcmVjaXBlPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgZnVuY3Rpb24gUlRSZWNpcGUoKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFJlY2lwZUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgcmVjaXBlOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVVcmwoZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHN3aXRjaChhdHRycy5mb3JtYXQpIHtcbiAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIGlmIChhdHRycy5mb3JtYXQgPT09IEZPUk1BVF9GT1JNICYmICFzY29wZS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIHZtLnRpdGxlID0gJ05ldyBSZWNpcGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm0udGl0bGUgPSAnRWRpdCBSZWNpcGUnO1xuICAgICAgfVxuXG4gICAgICB2bS5yZWNpcGUgPSBzY29wZS5yZWNpcGU7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG5cbiAgICAgIC8vIEdldCB0ZW1wbGF0ZSB1cmwgaW4gbGluayBmdW5jdGlvbiB0byB1c2UgcmVzb2x2ZWQgYXR0cmlidXRlc1xuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0NBUkQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GVUxMOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZ1bGwudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cblxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnKVxuICAgICAgLmZhY3RvcnkoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKCRodHRwLCAkd2luZG93LCBqd3RIZWxwZXIpIHtcblxuICAgIC8vIFRPRE86IEFkZCB2ZXJpZnkgZnVuY3Rpb25cblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgZG9Mb2NhbFJlZ2lzdHJhdGlvbjogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGRvTG9jYWxMb2dpbjogZG9Mb2NhbExvZ2luLFxuICAgICAgcmV2b2tlOiByZXZva2UsXG4gICAgfTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbFJlZ2lzdHJhdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsL3JlZ2lzdGVyJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uUmVnaXN0cmF0aW9uRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uTG9naW5FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuID0gcmVzcG9uc2UuaWRfdG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWdpc3RyYXRpb25FcnJvcihyZXNwb25zZSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvZ2luRXJyb3IoZGF0YSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgfVxuICBBdXRoU2VydmljZS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkd2luZG93XCIsIFwiand0SGVscGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJylcbiAgICAgIC5mYWN0b3J5KCdSZWNpcGVTZXJ2aWNlJywgUmVjaXBlU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlU2VydmljZSgkcmVzb3VyY2UsICR3aW5kb3cpIHtcbiAgICB2YXIgX2hlYWRlcnMgPSB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgIH07XG5cbiAgICB2YXIgc2VydmljZSA9ICRyZXNvdXJjZShcbiAgICAgICcvYXBpL3VzZXIvcmVjaXBlcy86cmVjaXBlSWQnLFxuICAgICAgeyByZWNpcGVJZDogJ0ByZWNpcGVJZCcsIH0sXG4gICAgICB7XG4gICAgICAgIGdldDogeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IHRydWUsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICByZW1vdmU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgdXBkYXRlOiB7IG1ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICB9XG4gIFJlY2lwZVNlcnZpY2UuJGluamVjdCA9IFtcIiRyZXNvdXJjZVwiLCBcIiR3aW5kb3dcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlci9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJylcbiAgICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBVc2VyU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIEdSQVZBVEFSX0JBU0VVUkwgPSAnaHR0cDovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyc7XG5cbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIGdldEN1cnJlbnRVc2VyOiBnZXRDdXJyZW50VXNlcixcbiAgICAgIGdldEdyYXZhdGFyQXZhdGFyVXJsOiBnZXRHcmF2YXRhckF2YXRhclVybCxcbiAgICAgIHVwZGF0ZUNyZWRlbnRpYWxzOiB1cGRhdGVDcmVkZW50aWFscyxcbiAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5nZXQoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvbkdldEN1cnJlbnRVc2VyU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvbkdldEN1cnJlbnRVc2VyRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlclN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uR2V0Q3VycmVudFVzZXJFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKSB7XG4gICAgICBpZiAoIV9jdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJyc7IC8vIFRPRE86IFJldHVybiBwbGFjZWhvbGRlciBhdmF0YXJcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoX2N1cnJlbnRVc2VyLmVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS50b1N0cmluZygpO1xuXG4gICAgICByZXR1cm4gR1JBVkFUQVJfQkFTRVVSTCArIGhhc2ggKyAnLmpwZyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAgIC5wdXQoJy9hcGkvdXNlci8nLCBjcmVkZW50aWFscywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ob25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MpXG4gICAgICAgICAgICAuY2F0Y2gob25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2VcbiAgICAgICAgICAuZG9Mb2NhbExvZ2luKHtcbiAgICAgICAgICAgIGVtYWlsOiBfY3VycmVudFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uVXBkYXRlQ3JlZGVudGlhbHNFcnJvcihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIHRvIHVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5kZWxldGUoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGxvZ291dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLnJldm9rZSgpO1xuXG4gICAgICBfY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cblxuICB9XG4gIFVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCIkcVwiLCBcIkF1dGhTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==