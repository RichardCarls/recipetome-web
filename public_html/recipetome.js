/**
 * @name RecipeTome
 * @description Application module for Recipe Tome, a recipe management
 * application.
 * @requires RecipeTome/Services
 * @requires RecipeTome/components
 * @requires RecipeTome/Welcome
 * @requires RecipeTome/Signup
 * @requires RecipeTome/Login
 * @requires RecipeTome/Profile
 * @requires RecipeTome/Recipes
 * @see Project repository {@link https://github.com/RichardCarls/recipetome-web}
 * @since 0.1.0
 *
 * @namespace RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

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
 * @name Components
 * @description Defines components required by Recipe Tome.
 * @requires RecipeTome/Components/UserMenu
 * @requires RecipeTome/Components/RTRecipe
 * @requires RecipeTome/Components/RTIngredient
 * @requires RecipeTome/Components/RTStep
 * @requires RecipeTome/Components/InputMatch
 * @requires RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

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
 * @name Login
 * @description Login view module for Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Login
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.login', [
      'ui.router',
      'ui.bootstrap',
      'services.auth',
    ]);

})(angular);

/**
 * @name Profile
 * @description Profile view module for Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @requires RecipeTome/Services/UserService
 * @requires RecipeTome/Components/InputMatch
 * @since 0.1.0
 *
 * @namespace RecipeTome/Profile
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

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
 * @name Recipes
 * @description Recipes view module for Recipe Tome.
 * @requires RecipeTome/Services/RecipeService
 * @see RecipeTome/Recipes:List:controller
 * @see RecipeTome/Recipes:Single:controller
 * @since 0.1.0
 *
 * @namespace RecipeTome/Recipes
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.recipes', [
      'ui.router',
      'ui.bootstrap',
      'services.recipe',
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
 * @name Signup
 * @description Signup view module for Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Signup
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.signup', [
      'ui.router',
      'ui.bootstrap',
      'services.auth',
    ]);

})(angular);

/**
 * @name Welcome
 * @description Welcome view module for Recipe Tome.
 * @since 0.1.0
 *
 * @namespace RecipeTome/Welcome
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('recipetome.welcome', [
      'ui.router',
      'ui.bootstrap',
    ]);

})(angular);

/**
 * @name InputMatch
 * @description Directive for validating an `<input>` field by requiring its
 * value to match that of another `<input>` field. Useful for confirming
 * passwords.
 * @example
 * <input type="text" name="input1" />
 *
 * // Value must match `input1` to be valid
 * <input type="text" name="input2" input-match="input1" />
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/InputMatch
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.inputMatch', []);

})(angular);

/**
 * @name RTMasonry
 * @description Set of directives for implementing masonry layout.
 * @example
 * <ul rt-masonry
 * 		 rt-tag="myGrid"
 * 		 rt-watch="myItemsCollection">
 *
 *   <li rt-masonry-stamp
 *   		 rt-tag="myGrid">
 *     <span>This is a stamp element, grid items will layout around me.</span>
 *   </li>
 *
 * 	 <li ng-repeat="item in items | filter: 'order' as myItemsCollection"
 * 	 		 rt-masonry-item
 * 	 		 rt-tag="myGrid">
 * 	 	 <span>These repeated items will have masonry layout</span>
 * 	   {{item.content}}
 * 	 </li>
 * </ul>
 * @requires Masonry v3.x {@link http://masonry.desandro.com/}
 * @see RecipeTome/Components/RTMasonry:Item:directive
 * @see RecipeTome/Components/RTMasonry:Stamp:directive
 * @see RecipeTome/Components/RTMasonry:directive
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTMasonry
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry', []);

})(angular);

/**
 * @name RTRecipe
 * @description Directive for displaying or editing individual recipes.
 * @example
 * // To display select recipe info suitable for a tile or 'card'
 * <ol>
 *   <li>
 *     <rt-recipe recipe="myRecipe" format="card"></rt-recipe>
 *   </li><!-- etc... -->
 * </ol>
 *
 * // Display all recipe data in a full-page view
 * <rt-recipe recipe="recipe"
 * 						format="full">
 * </rt-recipe>
 *
 * // As a full-page form for editing an existing recipe, or creating a new one
 * <rt-recipe recipe="existingRecipe"
 * 						format="form">
 * </rt-recipe>
 * @see RecipeTome/Recipes
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTRecipe
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

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
 * @name RTStep
 * @description Directive for displaying or editing individual `RTRecipe`
 * recipe steps (directions).
 * @example
 * // To display step data in a compact block
 * <rt-step step="myRecipe.steps[0]" format="inline"></rt-step>
 *
 * // As form fields
 * <rt-step step="step"
 * 					format="form"
 * 					on-remove="myCtrl.removeStep(step)">
 * </rt-step>
 * @see RecipeTome/Components/RTRecipe
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTStep
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.step', [
      'ui.bootstrap',
    ]);

})(angular);

/**
 * @name UserMenu
 * @description Directive for displaying a top-level user menu reflecting auth
 * state.
 * @example <nav user-menu></nav>
 * @requires RecipeTome/Services/UserService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/UserMenu
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.usermenu', [
      'ui.bootstrap',
      'ui.router',
      'services.user',
    ]);

})(angular);

/**
 * @name AuthService
 * @description Provides API for backend auth endpoints.
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services/AuthService
 * @memberof RecipeTome/Services
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.auth', [
      'angular-jwt',
    ]);

})(angular);

/**
 * @name RecipeService
 * @description An `ngResource` REST service for recipe CRUD operations.
 * @requires ngResource
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services/RecipeService
 * @memberof RecipeTome/Services
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.recipe', [
      'ngResource',
    ]);

})(angular);

/**
 * @name UserService
 * @description Provides API for backend user profile endpoint.
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services/UserService
 * @memberof RecipeTome/Services
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.user', [
      'services.auth',
    ]);

})(angular);

/**
 * @name RTIngredient
 * @description Directive for displaying or editing individual `RTRecipe`
 * ingredients.
 * @example
 * // To display ingredient data all in one line
 * <rt-ingredient ingredient="myRecipe.ingredients[0]" format="inline"></rt-ingredient>
 *
 * // As form fields
 * <rt-ingredient ingredient="ingredient"
 * 								format="form"
 * 								on-remove="myCtrl.removeIngredient(ingredient)">
 * </rt-ingredient>
 * @see RTRecipe
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTIngredient
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient', [
      'ui.bootstrap',
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
   * @param {RecipeTome/Services/AuthService} AuthService
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
   * @param {Recipetome/Services/UserService} UserService
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
 * @name Recipes:List:controller
 * @description Controller for the {@linkcode Recipes:List} view.
 * @see RecipeTome/Recipes
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
 * @see RecipeTome/Recipes
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
     * @see {@linkcode RecipeTome/Components/RTRecipe} for possible formats.
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
   * @param {RecipeTome/Services/AuthService} AuthService
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
 * @name RTRecipe:controller
 * @description Controller for the {@linkcode RTRecipe} directive.
 * @see RecipeTome/Components/RTRecipe
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
   * @param {RecipeTome/Services/RecipeService} RecipeService
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
 * @name RTStep:controller
 * @description Controller for the {@linkcode RTStep} directive.
 * @see RecipeTome/Components/RTStep
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
 * @see RecipeTome/Components/UserMenu
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
   * @param {RecipeTome/Services/UserService} UserService
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

/**
 * @name RTIngredient:controller
 * @description Controller for the {@linkcode RTIngredient} directive.
 * @see RecipeTome/Components/RTIngredient
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5wdXQtbWF0Y2gvaW5wdXQtbWF0Y2guZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktaXRlbS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS1zdGFtcC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS5qcyIsInNlcnZpY2VzL3JlY2lwZS9yZWNpcGUuc2VydmljZS5qcyIsInNlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBuYW1lIFJlY2lwZVRvbWVcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWNhdGlvbiBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLCBhIHJlY2lwZSBtYW5hZ2VtZW50XG4gKiBhcHBsaWNhdGlvbi5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9jb21wb25lbnRzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TaWdudXBcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0xvZ2luXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2VlIFByb2plY3QgcmVwb3NpdG9yeSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1JpY2hhcmRDYXJscy9yZWNpcGV0b21lLXdlYn1cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAncmVjaXBldG9tZS5zZXJ2aWNlcycsXG4gICAgICAncmVjaXBldG9tZS5jb21wb25lbnRzJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2lnbnVwJyxcbiAgICAgICdyZWNpcGV0b21lLmxvZ2luJyxcbiAgICAgICdyZWNpcGV0b21lLnByb2ZpbGUnLFxuICAgICAgJ3JlY2lwZXRvbWUucmVjaXBlcycsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBDb21wb25lbnRzXG4gKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBjb21wb25lbnRzIHJlcXVpcmVkIGJ5IFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsIFtcbiAgICAgICdjb21wb25lbnRzLnVzZXJtZW51JyxcbiAgICAgICdjb21wb25lbnRzLnJlY2lwZScsXG4gICAgICAnY29tcG9uZW50cy5pbmdyZWRpZW50JyxcbiAgICAgICdjb21wb25lbnRzLnN0ZXAnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsXG4gICAgICAnY29tcG9uZW50cy5tYXNvbnJ5JyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIExvZ2luXG4gKiBAZGVzY3JpcHRpb24gTG9naW4gdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpblxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUHJvZmlsZVxuICogQGRlc2NyaXB0aW9uIFByb2ZpbGUgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICAgICdjb21wb25lbnRzLmlucHV0TWF0Y2gnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlc1xuICogQGRlc2NyaXB0aW9uIFJlY2lwZXMgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXM6TGlzdDpjb250cm9sbGVyXG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzZXJ2aWNlcyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNlcnZpY2VzJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBTaWdudXBcbiAqIEBkZXNjcmlwdGlvbiBTaWdudXAgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWdudXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBXZWxjb21lXG4gKiBAZGVzY3JpcHRpb24gV2VsY29tZSB2aWV3IG1vZHVsZSBmb3IgUmVjaXBlIFRvbWUuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBJbnB1dE1hdGNoXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciB2YWxpZGF0aW5nIGFuIGA8aW5wdXQ+YCBmaWVsZCBieSByZXF1aXJpbmcgaXRzXG4gKiB2YWx1ZSB0byBtYXRjaCB0aGF0IG9mIGFub3RoZXIgYDxpbnB1dD5gIGZpZWxkLiBVc2VmdWwgZm9yIGNvbmZpcm1pbmdcbiAqIHBhc3N3b3Jkcy5cbiAqIEBleGFtcGxlXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQxXCIgLz5cbiAqXG4gKiAvLyBWYWx1ZSBtdXN0IG1hdGNoIGBpbnB1dDFgIHRvIGJlIHZhbGlkXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQyXCIgaW5wdXQtbWF0Y2g9XCJpbnB1dDFcIiAvPlxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbnB1dE1hdGNoJywgW10pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRNYXNvbnJ5XG4gKiBAZGVzY3JpcHRpb24gU2V0IG9mIGRpcmVjdGl2ZXMgZm9yIGltcGxlbWVudGluZyBtYXNvbnJ5IGxheW91dC5cbiAqIEBleGFtcGxlXG4gKiA8dWwgcnQtbWFzb25yeVxuICogXHRcdCBydC10YWc9XCJteUdyaWRcIlxuICogXHRcdCBydC13YXRjaD1cIm15SXRlbXNDb2xsZWN0aW9uXCI+XG4gKlxuICogICA8bGkgcnQtbWFzb25yeS1zdGFtcFxuICogICBcdFx0IHJ0LXRhZz1cIm15R3JpZFwiPlxuICogICAgIDxzcGFuPlRoaXMgaXMgYSBzdGFtcCBlbGVtZW50LCBncmlkIGl0ZW1zIHdpbGwgbGF5b3V0IGFyb3VuZCBtZS48L3NwYW4+XG4gKiAgIDwvbGk+XG4gKlxuICogXHQgPGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXMgfCBmaWx0ZXI6ICdvcmRlcicgYXMgbXlJdGVtc0NvbGxlY3Rpb25cIlxuICogXHQgXHRcdCBydC1tYXNvbnJ5LWl0ZW1cbiAqIFx0IFx0XHQgcnQtdGFnPVwibXlHcmlkXCI+XG4gKiBcdCBcdCA8c3Bhbj5UaGVzZSByZXBlYXRlZCBpdGVtcyB3aWxsIGhhdmUgbWFzb25yeSBsYXlvdXQ8L3NwYW4+XG4gKiBcdCAgIHt7aXRlbS5jb250ZW50fX1cbiAqIFx0IDwvbGk+XG4gKiA8L3VsPlxuICogQHJlcXVpcmVzIE1hc29ucnkgdjMueCB7QGxpbmsgaHR0cDovL21hc29ucnkuZGVzYW5kcm8uY29tL31cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeTpJdGVtOmRpcmVjdGl2ZVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5OlN0YW1wOmRpcmVjdGl2ZVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5OmRpcmVjdGl2ZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknLCBbXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFJlY2lwZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSBmb3IgZGlzcGxheWluZyBvciBlZGl0aW5nIGluZGl2aWR1YWwgcmVjaXBlcy5cbiAqIEBleGFtcGxlXG4gKiAvLyBUbyBkaXNwbGF5IHNlbGVjdCByZWNpcGUgaW5mbyBzdWl0YWJsZSBmb3IgYSB0aWxlIG9yICdjYXJkJ1xuICogPG9sPlxuICogICA8bGk+XG4gKiAgICAgPHJ0LXJlY2lwZSByZWNpcGU9XCJteVJlY2lwZVwiIGZvcm1hdD1cImNhcmRcIj48L3J0LXJlY2lwZT5cbiAqICAgPC9saT48IS0tIGV0Yy4uLiAtLT5cbiAqIDwvb2w+XG4gKlxuICogLy8gRGlzcGxheSBhbGwgcmVjaXBlIGRhdGEgaW4gYSBmdWxsLXBhZ2Ugdmlld1xuICogPHJ0LXJlY2lwZSByZWNpcGU9XCJyZWNpcGVcIlxuICogXHRcdFx0XHRcdFx0Zm9ybWF0PVwiZnVsbFwiPlxuICogPC9ydC1yZWNpcGU+XG4gKlxuICogLy8gQXMgYSBmdWxsLXBhZ2UgZm9ybSBmb3IgZWRpdGluZyBhbiBleGlzdGluZyByZWNpcGUsIG9yIGNyZWF0aW5nIGEgbmV3IG9uZVxuICogPHJ0LXJlY2lwZSByZWNpcGU9XCJleGlzdGluZ1JlY2lwZVwiXG4gKiBcdFx0XHRcdFx0XHRmb3JtYXQ9XCJmb3JtXCI+XG4gKiA8L3J0LXJlY2lwZT5cbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3NsdWdpZmllcicsXG4gICAgICAnZmxvdycsXG4gICAgICAnYW5ndWxhci1zb3J0YWJsZS12aWV3JyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRTdGVwXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIG9yIGVkaXRpbmcgaW5kaXZpZHVhbCBgUlRSZWNpcGVgXG4gKiByZWNpcGUgc3RlcHMgKGRpcmVjdGlvbnMpLlxuICogQGV4YW1wbGVcbiAqIC8vIFRvIGRpc3BsYXkgc3RlcCBkYXRhIGluIGEgY29tcGFjdCBibG9ja1xuICogPHJ0LXN0ZXAgc3RlcD1cIm15UmVjaXBlLnN0ZXBzWzBdXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1zdGVwPlxuICpcbiAqIC8vIEFzIGZvcm0gZmllbGRzXG4gKiA8cnQtc3RlcCBzdGVwPVwic3RlcFwiXG4gKiBcdFx0XHRcdFx0Zm9ybWF0PVwiZm9ybVwiXG4gKiBcdFx0XHRcdFx0b24tcmVtb3ZlPVwibXlDdHJsLnJlbW92ZVN0ZXAoc3RlcClcIj5cbiAqIDwvcnQtc3RlcD5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgYSB0b3AtbGV2ZWwgdXNlciBtZW51IHJlZmxlY3RpbmcgYXV0aFxuICogc3RhdGUuXG4gKiBAZXhhbXBsZSA8bmF2IHVzZXItbWVudT48L25hdj5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBBdXRoU2VydmljZVxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIEFQSSBmb3IgYmFja2VuZCBhdXRoIGVuZHBvaW50cy5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnLCBbXG4gICAgICAnYW5ndWxhci1qd3QnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlU2VydmljZVxuICogQGRlc2NyaXB0aW9uIEFuIGBuZ1Jlc291cmNlYCBSRVNUIHNlcnZpY2UgZm9yIHJlY2lwZSBDUlVEIG9wZXJhdGlvbnMuXG4gKiBAcmVxdWlyZXMgbmdSZXNvdXJjZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVNlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnLCBbXG4gICAgICAnbmdSZXNvdXJjZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBVc2VyU2VydmljZVxuICogQGRlc2NyaXB0aW9uIFByb3ZpZGVzIEFQSSBmb3IgYmFja2VuZCB1c2VyIHByb2ZpbGUgZW5kcG9pbnQuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRJbmdyZWRpZW50XG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIG9yIGVkaXRpbmcgaW5kaXZpZHVhbCBgUlRSZWNpcGVgXG4gKiBpbmdyZWRpZW50cy5cbiAqIEBleGFtcGxlXG4gKiAvLyBUbyBkaXNwbGF5IGluZ3JlZGllbnQgZGF0YSBhbGwgaW4gb25lIGxpbmVcbiAqIDxydC1pbmdyZWRpZW50IGluZ3JlZGllbnQ9XCJteVJlY2lwZS5pbmdyZWRpZW50c1swXVwiIGZvcm1hdD1cImlubGluZVwiPjwvcnQtaW5ncmVkaWVudD5cbiAqXG4gKiAvLyBBcyBmb3JtIGZpZWxkc1xuICogPHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cImluZ3JlZGllbnRcIlxuICogXHRcdFx0XHRcdFx0XHRcdGZvcm1hdD1cImZvcm1cIlxuICogXHRcdFx0XHRcdFx0XHRcdG9uLXJlbW92ZT1cIm15Q3RybC5yZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpXCI+XG4gKiA8L3J0LWluZ3JlZGllbnQ+XG4gKiBAc2VlIFJUUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlVG9tZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZX0gYXBwbGljYXRpb24uXG4gKiBAc2VlIFJlY2lwZVRvbWVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBsaWJyYXJpZXMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gZm9yIGRpc3BsYXkgaW4gdGhlIHNpdGUgZm9vdGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLnRlY2hMaXN0ID0gW1xuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICB7IGxpbms6ICdodHRwOi8vcGFzc3BvcnRqcy5vcmcvJywgbmFtZTogJ1Bhc3Nwb3J0LmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgXTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb25maWcoUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSb3V0ZXNDb25maWcoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9XG4gIFJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgTG9naW46Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIExvZ2lufSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL0xvZ2luXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZX0gQXV0aFNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZCBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBgVXNlcmAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS5sb2dpbkxvY2FsID0gZG9Mb2NhbExvZ2luO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdXNlciBsb2cgaW4gd2l0aCBsb2NhbCBjcmVkZW50aWFscyAoZW1haWwgKyBwYXNzd29yZCkuIENhbGxpbmdcbiAgICAgKiB0aGlzIG1ldGhvZCByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlICdwcm9maWxlJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbigpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsTG9naW4odm0udXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgTG9naW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGxvZ2luIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0xvZ2luL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbmZpZyhMb2dpblJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gTG9naW5Sb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4udmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pO1xuICB9XG4gIExvZ2luUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFByb2ZpbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFByb2ZpbGV9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBldG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZX0gVXNlclNlcnZpY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJcbiAgICovXG4gIGZ1bmN0aW9uIFByb2ZpbGVDb250cm9sbGVyKCRzdGF0ZSwgVXNlclNlcnZpY2UsIHVzZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvZ2dlZC1pbiB1c2VyLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0gdXNlcjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRvIHRoZSB1c2VyJ3MgZ3JhdmF0YXIgYXZhdGFyIFVSSS5cbiAgICAgKi9cbiAgICB2bS5ncmF2YXRhckltYWdlID0gVXNlclNlcnZpY2UuZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKTtcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZChzKSBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBjcmVkZW50aWFscyBvYmplY3QgZm9yIHByb2ZpbGUgZWRpdCBmb3JtLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5jcmVkZW50aWFscyA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS51cGRhdGVDcmVkZW50aWFscyA9IFVzZXJTZXJ2aWNlLnVwZGF0ZUNyZWRlbnRpYWxzO1xuICAgIHZtLmRvVW5yZWdpc3RlciA9IGRvVW5yZWdpc3RlcjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB1c2VyIGRhdGEuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiByZWZyZXNoZXMgdGhlIHZpZXcsIGxvYWRpbmcgdGhlIG5ldyB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY3JlZGVudGlhbHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ3Byb2ZpbGUnLCB7fSwgeyByZWZyZXNoOiB0cnVlLCB9KTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciB0byBkZWxldGUgdGhlIHVzZXIsIHRoZSB1c2VyJ3MgcmVjaXBlcyBhbmRcbiAgICAgKiB1cGxvYWRzLCBhbmQgcmV2b2tlIGFwaSBhY2Nlc3MuIENhbGxpbmcgdGhpcyBtZXRob2QgcmVkaXJlY3RzIHRoZSB1c2VyXG4gICAgICogdG8gdGhlICd3ZWxjb21lJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvVW5yZWdpc3RlcigpIHtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC51bnJlZ2lzdGVyKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygnd2VsY29tZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUHJvZmlsZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlVzZXJTZXJ2aWNlXCIsIFwidXNlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29uZmlnKFByb2ZpbGVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFByb2ZpbGVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB1c2VyOiBbXCJVc2VyU2VydmljZVwiLCBmdW5jdGlvbihVc2VyU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgUHJvZmlsZVJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVzOkxpc3Q6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6TGlzdH0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsIFJlY2lwZXNMaXN0Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWNpcGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNhdGVnb3JpZXNcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNMaXN0Q29udHJvbGxlcihyZWNpcGVzLCBjYXRlZ29yaWVzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgdXNlcidzIHJlY2lwZXMsIHJlc29sdmVkIGZyb20gJHN0YXRlUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0W119XG4gICAgICovXG4gICAgdm0ucmVjaXBlcyA9IHJlY2lwZXM7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdW5pcXVlIGNhdGVnb3JpZXMgdXNlZCBpbiB1c2VyJ3MgcmVjaXBlcywgcmVzb2x2ZWQgZnJvbVxuICAgICAqICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5IGZpbHRlciwgYnkgdGhlIGBzbHVnYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdm0uY2F0ZWdvcnlGaWx0ZXIgPSAnJztcbiAgfVxuICBSZWNpcGVzTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZXNcIiwgXCJjYXRlZ29yaWVzXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6U2luZ2xlfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc1ZpZXdDb250cm9sbGVyJywgUmVjaXBlc1ZpZXdDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNpcGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlc1ZpZXdDb250cm9sbGVyKHJlY2lwZSwgZm9ybWF0KSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVjaXBlLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdG8gc2hvdyB0aGUgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZX0gZm9yIHBvc3NpYmxlIGZvcm1hdHMuXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB2bS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgUmVjaXBlc1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbXCJyZWNpcGVcIiwgXCJmb3JtYXRcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuXFx0PG1haW4gdWktdmlldz5cXG5cXHQ8L21haW4+XFxuPC9kaXY+JyxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0xpc3RDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlczogW1wiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbihSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5xdWVyeSgpLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbeyBzbHVnOiAnJywgbGFiZWw6ICcnLCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy52aWV3Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogW1wiJHN0YXRlUGFyYW1zXCIsIFwiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkL2VkaXQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbmdyZWRpZW50czogW10sIHN0ZXBzOiBbXSwgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuICBSZWNpcGVzUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFNpZ251cDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9TaWdudXB9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWdudXBcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb250cm9sbGVyKCdTaWduVXBDb250cm9sbGVyJywgU2lnblVwQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2V9IEF1dGhTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBTaWduVXBDb250cm9sbGVyKCRzdGF0ZSwgQXV0aFNlcnZpY2UpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogRW5jcnlwdCBwYXNzd29yZCBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBgVXNlcmAgb2JqZWN0IGZvciBzaWdudXAgZm9ybS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0udXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0ucmVnaXN0ZXJMb2NhbCA9IGRvTG9jYWxSZWdpc3RyYXRpb247XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciBmb3IgdXNlciByZWdpc3RyYXRpb24uIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlICdwcm9maWxlJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24oKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbFJlZ2lzdHJhdGlvbih2bS51c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgLmdvKCdwcm9maWxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBTaWduVXBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWduVXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb25maWcoU2lnblVwUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBTaWduVXBSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdzaWdudXAnLCB7XG4gICAgICAgIHVybDogJy9zaWdudXAnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWdudXAvc2lnbnVwLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduVXBDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgU2lnblVwUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFdlbGNvbWU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvV2VsY29tZX0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBHcmVldGluZyBpbmZvIHRvIGRpc3BsYXkgdG8gYW5vbnltb3VzIHVzZXJzLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5ncmVldGluZyA9IHtcbiAgICAgIGhlYWRsaW5lOiAnWW91ciBQZXJzb25hbCBSZWNpcGUgRGF0YWJhc2UnLFxuICAgICAgbGVhZDogJ1JlY2lwZSBUb21lIGxldFxcJ3MgeW91IGNyZWF0ZSBhbmQgbWFuYWdlIHJlY2lwZXMuJyxcbiAgICB9O1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB3ZWxjb21lIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbmZpZyhXZWxjb21lUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBXZWxjb21lUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnd2VsY29tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dlbGNvbWUvd2VsY29tZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnV2VsY29tZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBXZWxjb21lUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBkZXNjIGF0dHJpYnV0ZSBkaXJlY3RpdmUgZm9yIGA8aW5wdXQ+YCBlbGVtZW50cyB0aGF0IHZhbGlkYXRlcyBhIG1hdGNoaW5nXG4gKiB2YWx1ZSB0byBhbm90aGVyIGA8aW5wdXQ+YC5cbiAqXG4gKiBAZXhhbXBsZSA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQyXCIgaW5wdXQtbWF0Y2g9XCJpbnB1dDFcIj5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcpXG4gICAgICAuZGlyZWN0aXZlKCdpbnB1dE1hdGNoJywgSW5wdXRNYXRjaCk7XG5cbiAgZnVuY3Rpb24gSW5wdXRNYXRjaCgpIHtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5wdXRNYXRjaDogJz0nLFxuICAgICAgfSxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgaWYgKCFzY29wZS5pbnB1dE1hdGNoKSB7IHJldHVybjsgfVxuXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KHZhbHVlKSB7XG4gICAgICAgIGlmIChuZ01vZGVsLiR1bnRvdWNoZWQgfHwgbmdNb2RlbC4kcHJpc3RpbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gc2NvcGUuaW5wdXRNYXRjaC4kdmlld1ZhbHVlO1xuICAgICAgICB2YXIgaXNNYXRjaCA9IEJvb2xlYW4odmFsdWUgPT09IHRhcmdldFZhbHVlKTtcblxuICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnaW5wdXRNYXRjaCcsIGlzTWF0Y2gpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbmdNb2RlbC4kcGFyc2Vycy51bnNoaWZ0KHZhbGlkYXRlSW5wdXQpO1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy51bnNoaWZ0KHZhbGlkYXRlSW5wdXQpO1xuXG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnkvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeUl0ZW0nLCBSVE1hc29ucnlJdGVtKTtcblxuICBmdW5jdGlvbiBSVE1hc29ucnlJdGVtKCR0aW1lb3V0KSB7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgICAgIC4kZW1pdChhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIFJUTWFzb25yeUl0ZW0uJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnkvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeVN0YW1wJywgUlRNYXNvbnJ5U3RhbXApO1xuXG4gIGZ1bmN0aW9uIFJUTWFzb25yeVN0YW1wKCR0aW1lb3V0KSB7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgICAgIC4kZW1pdChhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgUlRNYXNvbnJ5U3RhbXAuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnkvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL01hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeScsIFJUTWFzb25yeSk7XG5cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5KCR0aW1lb3V0KSB7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJ1tydC1tYXNvbnJ5LWl0ZW1dJyxcbiAgICAgIH07XG4gICAgICB2YXIgbWFzb25yeTtcbiAgICAgIHZhciBkaXJ0eSA9IHRydWU7XG5cbiAgICAgICR0aW1lb3V0KG9uQ29udGFpbmVyUmVhZHkpO1xuXG4gICAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlYWR5KCkge1xuICAgICAgICBtYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbWVudFswXSwgb3B0aW9ucyk7XG5cbiAgICAgICAgc2NvcGUuJG9uKGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBvbkl0ZW1BZGRlZCk7XG5cbiAgICAgICAgaWYgKGF0dHJzLnJ0V2F0Y2gpIHtcbiAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMucnRXYXRjaCArICcnLCBvbkl0ZW1zQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25JdGVtQWRkZWQoZXZlbnQsIGl0ZW0sIGlzU3RhbXApIHtcbiAgICAgICAgaWYgKGlzU3RhbXApIHtcbiAgICAgICAgICBtYXNvbnJ5LnN0YW1wKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICByZWxvYWRJdGVtcygpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbkl0ZW1zQ2hhbmdlZChpdGVtcykge1xuICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgIHJlbG9hZEl0ZW1zKCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbG9hZEl0ZW1zKCkge1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgIG1hc29ucnkucmVsb2FkSXRlbXMoKTtcbiAgICAgICAgICAgIG1hc29ucnkubGF5b3V0KCk7XG5cbiAgICAgICAgICAgIGRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG4gIFJUTWFzb25yeS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRSZWNpcGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUUmVjaXBlfSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUUmVjaXBlQ29udHJvbGxlcicsIFJUUmVjaXBlQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZX0gUmVjaXBlU2VydmljZVxuICAgKiBAcGFyYW0ge3NsdWdpZmllcn0gU2x1Z1xuICAgKi9cbiAgZnVuY3Rpb24gUlRSZWNpcGVDb250cm9sbGVyKCRzdGF0ZSwgUmVjaXBlU2VydmljZSwgU2x1Zykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBDb25maWcgZm9yIGByYXRpbmdgIGZvcm0gY29udHJvbC5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLnJhdGluZyA9IHsgbWF4OiA1LCB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0uZ2V0VGh1bWJuYWlsID0gZ2V0VGh1bWJuYWlsO1xuICAgIHZtLm9uUGljdHVyZVVwbG9hZCA9IG9uUGljdHVyZVVwbG9hZDtcbiAgICB2bS5nZW5lcmF0ZUNhdGVnb3J5U2x1ZyA9IGdlbmVyYXRlQ2F0ZWdvcnlTbHVnO1xuICAgIHZtLmFkZEluZ3JlZGllbnQgPSBhZGRJbmdyZWRpZW50O1xuICAgIHZtLm9uSW5ncmVkaWVudFJlb3JkZXIgPSBvbkluZ3JlZGllbnRSZW9yZGVyO1xuICAgIHZtLnJlbW92ZUluZ3JlZGllbnQgPSByZW1vdmVJbmdyZWRpZW50O1xuICAgIHZtLmFkZFN0ZXAgPSBhZGRTdGVwO1xuICAgIHZtLm9uU3RlcFJlb3JkZXIgPSBvblN0ZXBSZW9yZGVyO1xuICAgIHZtLnJlbW92ZVN0ZXAgPSByZW1vdmVTdGVwO1xuICAgIHZtLnNhdmVSZWNpcGUgPSBzYXZlUmVjaXBlO1xuICAgIHZtLmRlbGV0ZVJlY2lwZSA9IGRlbGV0ZVJlY2lwZTtcbiAgICAvLyAtLS1cblxuICAgIC8vIFRPRE86IFNhdmUgZm9ybSBmaWVsZHMgaW4gc2Vzc2lvblN0b3JhZ2UgdG8gcGVyc2lzdCB0aHJvdWdoIHJlZnJlc2hcblxuICAgIC8qKlxuICAgICAqIEdldCByZWNpcGUgdGh1bWJuYWlsIFVSSSBvciBkZWZhdWx0IGltYWdlIFVSSS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVjaXBlIHRodW1ibmFpbCwgb3IgZGVmYXVsdCBpbWFnZSBVUklcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRUaHVtYm5haWwoKSB7XG4gICAgICBpZiAoIXZtLnJlY2lwZSB8fCAhdm0ucmVjaXBlLnRodW1ibmFpbCkge1xuICAgICAgICByZXR1cm4gJ2Fzc2V0L2ltZy9yZWNpcGUtaW1hZ2UtcGxhY2Vob2xkZXItMzYweDI0MC5wbmcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm0ucmVjaXBlLnRodW1ibmFpbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBuZy1mbG93IHVwbG9hZCBzdWNjZXNzIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7Rmxvd0ZpbGV9IGZpbGVcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICogQHBhcmFtICB7Rmxvd30gZmxvd1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uUGljdHVyZVVwbG9hZChmaWxlLCByZXNwb25zZSwgZmxvdykge1xuICAgICAgdm0ucmVjaXBlLnRodW1ibmFpbCA9IEpTT04ucGFyc2UocmVzcG9uc2UpLnBob3RvLnVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNsdWdpZmllZCBjYXRlZ29yeSBsYWJlbC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3J5U2x1ZygpIHtcbiAgICAgIHZtLnJlY2lwZS5jYXRlZ29yeS5zbHVnID0gU2x1Zy5zbHVnaWZ5KHZtLnJlY2lwZS5jYXRlZ29yeS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGluZ3JlZGllbnQgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmdyZWRpZW50KCkge1xuICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gbmV3IG9yZGVyIHZhbHVlcyB0byBldmVyeSBpbmdyZWRpZW50LiBDYWxsIHdoZW4gYW55IGluZ3JlZGllbnRcbiAgICAgKiBpcyByZW9yZGVyZWQuXG4gICAgICpcbiAgICAgKiBAY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkluZ3JlZGllbnRSZW9yZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHNbaV0ub3JkZXIgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHNwZWNpZmllZCBpbmdyZWRpZW50IGZyb20gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBpbmdyZWRpZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5ncmVkaWVudChpbmdyZWRpZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuaW5ncmVkaWVudHMuaW5kZXhPZihpbmdyZWRpZW50KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGluZ3JlZGllbnQgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRTdGVwKCkge1xuICAgICAgdm0ucmVjaXBlLnN0ZXBzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gbmV3IG9yZGVyIHZhbHVlcyB0byBldmVyeSByZWNpcGUgc3RlcC4gQ2FsbCB3aGVuIGFueSBzdGVwXG4gICAgICogaXMgcmVvcmRlcmVkLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25TdGVwUmVvcmRlcigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2bS5yZWNpcGUuc3RlcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdm0ucmVjaXBlLnN0ZXBzW2ldLm9yZGVyID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBzcGVjaWZpZWQgcmVjaXBlIHN0ZXAgZnJvbSB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHN0ZXBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVTdGVwKHN0ZXApIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5zdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJzaXN0IHRoZSBjdXJyZW50IHJlY2lwZSB0byB0aGUgc2VydmVyLiBUaGlzIHJlZGlyZWN0cyB0aGUgdXNlciB0byB0aGVcbiAgICAgKiAnc2luZ2xlJyByZWNpcGVzIHZpZXcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2F2ZVJlY2lwZSgpIHtcbiAgICAgIGlmICh2bS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIC8vIFJlY2lwZSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLCBzbyBkbyB1cGRhdGVcbiAgICAgICAgUmVjaXBlU2VydmljZVxuICAgICAgICAgIC51cGRhdGUoeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSwgdm0ucmVjaXBlLCBmdW5jdGlvbihyZWNpcGUpIHtcbiAgICAgICAgICAgIHZtLnJlY2lwZSA9IHJlY2lwZTtcblxuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTmV3IHJlY2lwZSwgZG8gc2F2ZVxuICAgICAgICBSZWNpcGVTZXJ2aWNlXG4gICAgICAgICAgLnNhdmUodm0ucmVjaXBlLCBmdW5jdGlvbihyZWNpcGUpIHtcbiAgICAgICAgICAgIHZtLnJlY2lwZSA9IHJlY2lwZTtcblxuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSByZWNpcGUgZnJvbSB0aGUgZGF0YWJhc2UuIENhbGxpbmcgdGhpcyByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlXG4gICAgICogJ2xpc3QnIHJlY2lwZXMgdmlld1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlY2lwZSgpIHtcbiAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgLnJlbW92ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuXG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAvLyBUT0RPOiBTYXZlIHJlY2lwZSB0byBzZXNzaW9uIHN0b3JhZ2UsIHByb3ZpZGUgdW5kbyBvcHRpb25cbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygnXi5saXN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBSVFJlY2lwZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlJlY2lwZVNlcnZpY2VcIiwgXCJTbHVnXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgcmVjaXBlYCBvYmplY3QgYW5kIGRpc3BsYXlzIGl0IGluIHRoZVxuICogICAgICAgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdjYXJkJzogQSBzbGltIHZpZXcgdGhhdCBpcyBwZXJmZWN0IGZvciBkaXNwbGF5aW5nIGluIGEgbGlzdCBvZiByb3dzXG4gKiBcdFx0XHRcdFx0XHRcdFx0XHRvciB0aWxlcy9jYXJkcy5cbiAqIFx0XHRcdFx0LSAnZnVsbCc6IEZ1bGwgdmlldyBzdWl0YWJsZSBmb3IgZnVsbCBwYWdlIG9yIGRldGFpbCB2aWV3LiBTaG93cyBhbGxcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdGF2YWlsYWJsZSBmaWVsZHMuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBGdWxsIHZpZXcgd2ViIGZvcm0gZm9yIGVkaXRpbmcgb3IgY3JlYXRpbmcgcmVjaXBlcy5cbiAqXG4gKiBAZXhhbXBsZSA8bGkgY2xhc3M9XCJjb2wtbWQtNFwiPjxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCIgZm9ybWF0PVwiY2FyZFwiPjwvcnQtcmVjaXBlPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgZnVuY3Rpb24gUlRSZWNpcGUoKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFJlY2lwZUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgcmVjaXBlOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVVcmwoZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHN3aXRjaChhdHRycy5mb3JtYXQpIHtcbiAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIGlmIChhdHRycy5mb3JtYXQgPT09IEZPUk1BVF9GT1JNICYmICFzY29wZS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIHZtLnRpdGxlID0gJ05ldyBSZWNpcGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm0udGl0bGUgPSAnRWRpdCBSZWNpcGUnO1xuICAgICAgfVxuXG4gICAgICB2bS5yZWNpcGUgPSBzY29wZS5yZWNpcGU7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG5cbiAgICAgIC8vIEdldCB0ZW1wbGF0ZSB1cmwgaW4gbGluayBmdW5jdGlvbiB0byB1c2UgcmVzb2x2ZWQgYXR0cmlidXRlc1xuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0NBUkQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GVUxMOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZ1bGwudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cblxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUU3RlcDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUlRTdGVwfSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUU3RlcENvbnRyb2xsZXInLCBSVFN0ZXBDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVFN0ZXBDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzdGVwIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgc3RlcCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhIGBzdGVwYCBvYmplY3QgYW5kXG4gKiAgICAgICBkaXNwbGF5cyBpdCBpbiB0aGUgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdpbmxpbmUnOiBPdXRwdXRzIGFuIGlubGluZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGZvcm1hdHRlZCBkYXRhLlxuICogXHRcdFx0XHQtICdmb3JtJzogRGlzcGxheXMgYW4gaHRtbCBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcC5cbiAqXG4gKiBcdFx0XHQgV2hlbiB1c2VkIGluc2lkZSBhbiBgbmdSZXBlYXRgIGRpcmVjdGl2ZSwgeW91IGNhbiBzZXQgdGhlIHN0ZXAnc1xuICogXHRcdFx0IG9yZGVyIHByb3BlcnR5IGJ5IHBhc3NpbmcgYW4gZXhwcmVzc2lvbiB0byBgb3JkZXJgLlxuICpcbiAqIFx0XHRcdCBUbyBzaG93IGEgcmVtb3ZlIGJ1dHRvbiwgc2V0IHRoZSBgb25SZW1vdmVgIGhhbmRsZXIuXG4gKlxuICogQGV4YW1wbGUgPGxpPjxydC1zdGVwIHN0ZXA9XCJzdGVwXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1zdGVwPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRTdGVwJywgUlRTdGVwKTtcblxuICBmdW5jdGlvbiBSVFN0ZXAoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFN0ZXBDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHN0ZXA6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLnN0ZXAgPSBzY29wZS5zdGVwO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFVzZXJNZW51fSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScpXG4gICAgICAuY29udHJvbGxlcignVXNlck1lbnVDb250cm9sbGVyJywgVXNlck1lbnVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZX0gVXNlclNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIFVzZXJNZW51Q29udHJvbGxlcigkc3RhdGUsIFVzZXJTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIC0tLVxuICAgIHZtLmlzTG9nZ2VkSW4gPSBVc2VyU2VydmljZS5pc0xvZ2dlZEluO1xuICAgIHZtLmxvZ291dCA9IGxvZ291dDtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHVzZXIgbG9nIG91dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAubG9nb3V0KCk7XG5cbiAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAkc3RhdGVcbiAgICAgICAgLmdvKCd3ZWxjb21lJyk7XG4gICAgfVxuICB9XG4gIFVzZXJNZW51Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiVXNlclNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIG1lbnUgY29tcG9uZW50IGRpcmVjdGl2ZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScpXG4gICAgICAuZGlyZWN0aXZlKCd1c2VyTWVudScsIFVzZXJNZW51KTtcblxuICBmdW5jdGlvbiBVc2VyTWVudSgpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnVXNlck1lbnVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUudGVtcGxhdGUuaHRtbCcsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnKVxuICAgICAgLmZhY3RvcnkoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKCRodHRwLCAkd2luZG93LCBqd3RIZWxwZXIpIHtcblxuICAgIC8vIFRPRE86IEFkZCB2ZXJpZnkgZnVuY3Rpb25cblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgZG9Mb2NhbFJlZ2lzdHJhdGlvbjogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGRvTG9jYWxMb2dpbjogZG9Mb2NhbExvZ2luLFxuICAgICAgcmV2b2tlOiByZXZva2UsXG4gICAgfTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbFJlZ2lzdHJhdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsL3JlZ2lzdGVyJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uUmVnaXN0cmF0aW9uRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uTG9naW5FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuID0gcmVzcG9uc2UuaWRfdG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWdpc3RyYXRpb25FcnJvcihyZXNwb25zZSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvZ2luRXJyb3IoZGF0YSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgfVxuICBBdXRoU2VydmljZS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkd2luZG93XCIsIFwiand0SGVscGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJylcbiAgICAgIC5mYWN0b3J5KCdSZWNpcGVTZXJ2aWNlJywgUmVjaXBlU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlU2VydmljZSgkcmVzb3VyY2UsICR3aW5kb3cpIHtcbiAgICB2YXIgX2hlYWRlcnMgPSB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgIH07XG5cbiAgICB2YXIgc2VydmljZSA9ICRyZXNvdXJjZShcbiAgICAgICcvYXBpL3VzZXIvcmVjaXBlcy86cmVjaXBlSWQnLFxuICAgICAgeyByZWNpcGVJZDogJ0ByZWNpcGVJZCcsIH0sXG4gICAgICB7XG4gICAgICAgIGdldDogeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IHRydWUsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICByZW1vdmU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgdXBkYXRlOiB7IG1ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICB9XG4gIFJlY2lwZVNlcnZpY2UuJGluamVjdCA9IFtcIiRyZXNvdXJjZVwiLCBcIiR3aW5kb3dcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlci9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJylcbiAgICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBVc2VyU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIEdSQVZBVEFSX0JBU0VVUkwgPSAnaHR0cDovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyc7XG5cbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIGdldEN1cnJlbnRVc2VyOiBnZXRDdXJyZW50VXNlcixcbiAgICAgIGdldEdyYXZhdGFyQXZhdGFyVXJsOiBnZXRHcmF2YXRhckF2YXRhclVybCxcbiAgICAgIHVwZGF0ZUNyZWRlbnRpYWxzOiB1cGRhdGVDcmVkZW50aWFscyxcbiAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5nZXQoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvbkdldEN1cnJlbnRVc2VyU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvbkdldEN1cnJlbnRVc2VyRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlclN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uR2V0Q3VycmVudFVzZXJFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKSB7XG4gICAgICBpZiAoIV9jdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJyc7IC8vIFRPRE86IFJldHVybiBwbGFjZWhvbGRlciBhdmF0YXJcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoX2N1cnJlbnRVc2VyLmVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS50b1N0cmluZygpO1xuXG4gICAgICByZXR1cm4gR1JBVkFUQVJfQkFTRVVSTCArIGhhc2ggKyAnLmpwZyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAgIC5wdXQoJy9hcGkvdXNlci8nLCBjcmVkZW50aWFscywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ob25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MpXG4gICAgICAgICAgICAuY2F0Y2gob25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2VcbiAgICAgICAgICAuZG9Mb2NhbExvZ2luKHtcbiAgICAgICAgICAgIGVtYWlsOiBfY3VycmVudFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uVXBkYXRlQ3JlZGVudGlhbHNFcnJvcihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIHRvIHVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5kZWxldGUoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGxvZ291dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLnJldm9rZSgpO1xuXG4gICAgICBfY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cblxuICB9XG4gIFVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCIkcVwiLCBcIkF1dGhTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRJbmdyZWRpZW50OmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSVEluZ3JlZGllbnR9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcpXG4gICAgICAuY29udHJvbGxlcignUlRJbmdyZWRpZW50Q29udHJvbGxlcicsIFJUSW5ncmVkaWVudENvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFJUSW5ncmVkaWVudENvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IGRpcmVjdGl2ZVxuICpcbiAqIEBkZXNjIFJlY2lwZSBpbmdyZWRpZW50IGRpcmVjdGl2ZSB0aGF0IHRha2VzIGFuIGBpbmdyZWRpZW50YCBvYmplY3QgYW5kXG4gKiAgICAgICBkaXNwbGF5cyBpdCBpbiB0aGUgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdpbmxpbmUnOiBPdXRwdXRzIGFuIGlubGluZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGZvcm1hdHRlZCBkYXRhLlxuICogXHRcdFx0XHQtICdmb3JtJzogRGlzcGxheXMgYW4gaHRtbCBmb3JtIGZvciBlZGl0aW5nIGFuIGluZ3JlZGllbnQuXG4gKlxuICogXHRcdFx0IFdoZW4gdXNlZCBpbnNpZGUgYW4gYG5nUmVwZWF0YCBkaXJlY3RpdmUsIHlvdSBjYW4gc2V0IHRoZSBpbmdyZWRpZW50J3NcbiAqIFx0XHRcdCBvcmRlciBwcm9wZXJ0eSBieSBwYXNzaW5nIGFuIGV4cHJlc3Npb24gdG8gYG9yZGVyYC5cbiAqXG4gKiBcdFx0XHQgVG8gc2hvdyBhIHJlbW92ZSBidXR0b24sIHNldCB0aGUgYG9uUmVtb3ZlYCBoYW5kbGVyLlxuICpcbiAqIEBleGFtcGxlIDxsaT48cnQtaW5ncmVkaWVudCBpbmdyZWRpZW50PVwiaW5ncmVkaWVudFwiIGZvcm1hdD1cImlubGluZVwiPjwvcnQtaW5ncmVkaWVudD48L2xpPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnQvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnRcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0SW5ncmVkaWVudCcsIFJUSW5ncmVkaWVudCk7XG5cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50KCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRJbmdyZWRpZW50Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbmdyZWRpZW50OiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG5cblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB2bSkge1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0uaW5ncmVkaWVudCA9IHNjb3BlLmluZ3JlZGllbnQ7XG4gICAgICB2bS5vblJlbW92ZSA9IHNjb3BlLm9uUmVtb3ZlO1xuXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfSU5MSU5FOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtaW5saW5lLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1pbmxpbmUudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=