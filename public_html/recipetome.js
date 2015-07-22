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
 * @name InputMatch
 * @description Directive for validating an `<input>` field by requiring its
 * value to match that of another `<input>` field. Useful for confirming
 * passwords.
 * @example
 * <input type="text" name="input1" />
 *
 * // Value must match `input1` to be valid, pass the angular form model
 * <input type="text" name="input2" input-match="form.input1" />
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
 * @name RTIngredient:directive
 * @description Directive recognizes the following attributes:
 * - `ingredient`: An RTRecipe ingredient object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `inline`
 * 	 or `form`. (optional, default: 'inline')
 * - `onRemove`: Callback to call when the 'remove' button is clicked. If no
 *   callback is set, the remove button is not shown. (optional, `form` only)
 * @see RecipeTome/Components/RTIngredient
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTIngredient
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.ingredient')
      .directive('rtIngredient', RTIngredient);

  /**
   * @class
   */
  function RTIngredient() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    // ---
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
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {RecipeTome/Components/RTIngredient:controller} vm
     */
    function link(scope, element, attrs, vm) {

      // ---
      vm.format = scope.format;
      vm.ingredient = scope.ingredient;
      vm.onRemove = scope.onRemove;
      // ---

      /**
       * Returns the HTML template associated with the specified 'format'.
       *
       * @return {String} The template file URL
       */
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
 * @name InputMatch:directive
 * @description Directive recognizes the following attributes:
 * - `inputMatch`: The form model to match against. (required)
 * @see RecipeTome/Components/InputMatch
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/InputMatch
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.inputMatch')
      .directive('inputMatch', InputMatch);

  /**
   * @class
   */
  function InputMatch() {

    // ---
    var directive = {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        inputMatch: '=',
      },
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {angular.ngModel} ngModel
     */
    function link(scope, element, attrs, ngModel) {
      // Don't link if nothing specified to match
      if (!scope.inputMatch) { return; }

      /**
       * ngModel Parser/Formatter function.
       * @param  {*} value
       *
       * @return {*} The passed in value (no formatting performed)
       */
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
 * @name RTMasonry:Item:directive
 * @description Directive recognizes the following attributes:
 * - `rtTag`: A tag to differentiate between multiple masonry layouts (optional)
 * @see RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTMasonry
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry')
      .directive('rtMasonryItem', RTMasonryItem);

  /**
   * @class
   * @param {angular.$timeout} $timeout
   */
  function RTMasonryItem($timeout) {

    // ---
    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     */
    function link(scope, element, attrs) {
      $timeout(function() {
        // Wait for jQLite .ready() to ensure images are loaded
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
 * @name RTMasonry:Stamp:directive
 * @description Directive recognizes the following attributes:
 * - `rtTag`: A tag to differentiate between multiple masonry layouts (optional)
 * @see RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTMasonry
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry')
      .directive('rtMasonryStamp', RTMasonryStamp);

  /**
   * @class
   * @param {angular.$timeout} $timeout
   */
  function RTMasonryStamp($timeout) {

    // ---
    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     */
    function link(scope, element, attrs) {
      $timeout(function() {
        // Wait for jQLite .ready() to ensure images are loaded
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
 * @name RTMasonry:directive
 * @description Directive recognizes the following attributes:
 * - `rtTag`: A tag to differentiate between multiple masonry layouts (optional)
 * - `rtWatch`: Specifies a model to watch and perform layout on changes. (optional)
 * - `onRemove`: Callback to call when the 'remove' button is clicked. (`form` format only)
 * @see RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTMasonry
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry')
      .directive('rtMasonry', RTMasonry);

  /**
   * @class
   * @param {angular.$timeout} $timeout
   */
  function RTMasonry($timeout) {

    // ---
    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     */
    function link(scope, element, attrs) {

      /**
       * Masonry options
       * @type {Object}
       */
      var options = { itemSelector: '[rt-masonry-item]', };

      /**
       * Masonry instance
       */
      var masonry;

      /**
       * Keeps track of masonry item dirty state.
       * @type {Boolean}
       */
      var dirty = true;

      // On next digest cycle, create Masonry instance
      $timeout(onContainerReady);

      /**
       * Creates the Masonry instance, listens for RTMasonry events and watches
       * the specified items collection.
       */
      function onContainerReady() {
        masonry = new Masonry(element[0], options);

        // Listen for RTMasonry events
        scope.$on(attrs.rtTag || 'masonry-item-added', onItemAdded);

        // Watch the items collection
        if (attrs.rtWatch) {
          scope.$watch(attrs.rtWatch + '', onItemsChanged);
        }
      }

      /**
       * Handles items added to the layout
       *
       * @callback
       * @param  {Object}  event
       * @param  {angular.element}  item
       * @param  {Boolean} isStamp `true` if item is instance of rtStamp directive
       */
      function onItemAdded(event, item, isStamp) {
        if (isStamp) {
          masonry.stamp(item);
        }

        dirty = true;
        reloadItems();
      }

      /**
       * Handles changes in the items collection.
       *
       * @callback
       * @param  {Object|Object[]} items
       */
      function onItemsChanged(items) {
        dirty = true;
        reloadItems();
      }

      /**
       * Reloads items and performs layout.
       */
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
 * @name RTRecipe:directive
 * @description Directive recognizes the following attributes:
 * - `recipe`: A recipe object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `card`
 * 	 `full`, or `form`. (optional, default: 'card')
 * @see RecipeTome/Components/RTRecipe
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTRecipe
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.recipe')
      .directive('rtRecipe', RTRecipe);

  /**
   * @class
   */
  function RTRecipe() {
    var FORMAT_CARD = 'card',
        FORMAT_FULL = 'full',
        FORMAT_FORM = "form";

    // ---
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
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {RecipeTome/Components/RTRecipe:controller} vm
     */
    function link(scope, element, attrs, vm) {

      // ---
      if (attrs.format === FORMAT_FORM && !scope.recipe._id) {
        // New recipe
        vm.title = 'New Recipe';
      } else {
        // Existing recipe
        vm.title = 'Edit Recipe';
      }

      vm.recipe = scope.recipe;
      vm.format = scope.format;
      // ---

      /**
       * Returns the HTML template associated with the specified 'format'.
       *
       * @return {String} The template file URL
       */
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
 * @name UserMenu:directive
 * @description Directive for UserMenu component.
 * @see RecipeTome/Components/UserMenu
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.usermenu')
      .directive('userMenu', UserMenu);

  /**
   * @class
   */
  function UserMenu() {

    // ---
    var directive = {
      restrict: 'AE',
      controller: 'UserMenuController',
      controllerAs: 'vm',
      templateUrl: 'app/components/usermenu/usermenu.template.html',
    };

    return directive;
    // ---
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
 * @name RTStep:directive
 * @description Directive recognizes the following attributes:
 * - `step`: An RTRecipe recipe step object. (required)
 * - `format`: Specifies the HTML template to render. Valid formats are `inline`
 * 	 or `form`. (optional, default: 'inline')
 * - `onRemove`: Callback to call when the 'remove' button is clicked. If no
 *   callback is set, the remove button is not shown. (optional, `form` only)
 * @see RecipeTome/Components/RTStep
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTStep
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.step')
      .directive('rtStep', RTStep);

  /**
   * @class
   */
  function RTStep() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    // ---
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
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     * @param  {RecipeTome/Components/RTIngredient:controller} vm
     */
    function link(scope, element, attrs, vm) {

      // ---
      vm.step = scope.step;
      vm.format = scope.format;
      vm.onRemove = scope.onRemove;
      // ---

      /**
       * Returns the HTML template associated with the specified 'format'.
       *
       * @return {String} The template file URL
       */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2lucHV0LW1hdGNoL2lucHV0LW1hdGNoLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LWl0ZW0uZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktc3RhbXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnkuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBuYW1lIFJlY2lwZVRvbWVcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWNhdGlvbiBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLCBhIHJlY2lwZSBtYW5hZ2VtZW50XG4gKiBhcHBsaWNhdGlvbi5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9jb21wb25lbnRzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TaWdudXBcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0xvZ2luXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2VlIFByb2plY3QgcmVwb3NpdG9yeSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1JpY2hhcmRDYXJscy9yZWNpcGV0b21lLXdlYn1cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAncmVjaXBldG9tZS5zZXJ2aWNlcycsXG4gICAgICAncmVjaXBldG9tZS5jb21wb25lbnRzJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2lnbnVwJyxcbiAgICAgICdyZWNpcGV0b21lLmxvZ2luJyxcbiAgICAgICdyZWNpcGV0b21lLnByb2ZpbGUnLFxuICAgICAgJ3JlY2lwZXRvbWUucmVjaXBlcycsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBDb21wb25lbnRzXG4gKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBjb21wb25lbnRzIHJlcXVpcmVkIGJ5IFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsIFtcbiAgICAgICdjb21wb25lbnRzLnVzZXJtZW51JyxcbiAgICAgICdjb21wb25lbnRzLnJlY2lwZScsXG4gICAgICAnY29tcG9uZW50cy5pbmdyZWRpZW50JyxcbiAgICAgICdjb21wb25lbnRzLnN0ZXAnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsXG4gICAgICAnY29tcG9uZW50cy5tYXNvbnJ5JyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIExvZ2luXG4gKiBAZGVzY3JpcHRpb24gTG9naW4gdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpblxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUHJvZmlsZVxuICogQGRlc2NyaXB0aW9uIFByb2ZpbGUgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICAgICdjb21wb25lbnRzLmlucHV0TWF0Y2gnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlc1xuICogQGRlc2NyaXB0aW9uIFJlY2lwZXMgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXM6TGlzdDpjb250cm9sbGVyXG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzZXJ2aWNlcyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNlcnZpY2VzJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBTaWdudXBcbiAqIEBkZXNjcmlwdGlvbiBTaWdudXAgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWdudXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBXZWxjb21lXG4gKiBAZGVzY3JpcHRpb24gV2VsY29tZSB2aWV3IG1vZHVsZSBmb3IgUmVjaXBlIFRvbWUuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVEluZ3JlZGllbnRcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgb3IgZWRpdGluZyBpbmRpdmlkdWFsIGBSVFJlY2lwZWBcbiAqIGluZ3JlZGllbnRzLlxuICogQGV4YW1wbGVcbiAqIC8vIFRvIGRpc3BsYXkgaW5ncmVkaWVudCBkYXRhIGFsbCBpbiBvbmUgbGluZVxuICogPHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cIm15UmVjaXBlLmluZ3JlZGllbnRzWzBdXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1pbmdyZWRpZW50PlxuICpcbiAqIC8vIEFzIGZvcm0gZmllbGRzXG4gKiA8cnQtaW5ncmVkaWVudCBpbmdyZWRpZW50PVwiaW5ncmVkaWVudFwiXG4gKiBcdFx0XHRcdFx0XHRcdFx0Zm9ybWF0PVwiZm9ybVwiXG4gKiBcdFx0XHRcdFx0XHRcdFx0b24tcmVtb3ZlPVwibXlDdHJsLnJlbW92ZUluZ3JlZGllbnQoaW5ncmVkaWVudClcIj5cbiAqIDwvcnQtaW5ncmVkaWVudD5cbiAqIEBzZWUgUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBJbnB1dE1hdGNoXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciB2YWxpZGF0aW5nIGFuIGA8aW5wdXQ+YCBmaWVsZCBieSByZXF1aXJpbmcgaXRzXG4gKiB2YWx1ZSB0byBtYXRjaCB0aGF0IG9mIGFub3RoZXIgYDxpbnB1dD5gIGZpZWxkLiBVc2VmdWwgZm9yIGNvbmZpcm1pbmdcbiAqIHBhc3N3b3Jkcy5cbiAqIEBleGFtcGxlXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQxXCIgLz5cbiAqXG4gKiAvLyBWYWx1ZSBtdXN0IG1hdGNoIGBpbnB1dDFgIHRvIGJlIHZhbGlkLCBwYXNzIHRoZSBhbmd1bGFyIGZvcm0gbW9kZWxcbiAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dDJcIiBpbnB1dC1tYXRjaD1cImZvcm0uaW5wdXQxXCIgLz5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsIFtdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUTWFzb25yeVxuICogQGRlc2NyaXB0aW9uIFNldCBvZiBkaXJlY3RpdmVzIGZvciBpbXBsZW1lbnRpbmcgbWFzb25yeSBsYXlvdXQuXG4gKiBAZXhhbXBsZVxuICogPHVsIHJ0LW1hc29ucnlcbiAqIFx0XHQgcnQtdGFnPVwibXlHcmlkXCJcbiAqIFx0XHQgcnQtd2F0Y2g9XCJteUl0ZW1zQ29sbGVjdGlvblwiPlxuICpcbiAqICAgPGxpIHJ0LW1hc29ucnktc3RhbXBcbiAqICAgXHRcdCBydC10YWc9XCJteUdyaWRcIj5cbiAqICAgICA8c3Bhbj5UaGlzIGlzIGEgc3RhbXAgZWxlbWVudCwgZ3JpZCBpdGVtcyB3aWxsIGxheW91dCBhcm91bmQgbWUuPC9zcGFuPlxuICogICA8L2xpPlxuICpcbiAqIFx0IDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zIHwgZmlsdGVyOiAnb3JkZXInIGFzIG15SXRlbXNDb2xsZWN0aW9uXCJcbiAqIFx0IFx0XHQgcnQtbWFzb25yeS1pdGVtXG4gKiBcdCBcdFx0IHJ0LXRhZz1cIm15R3JpZFwiPlxuICogXHQgXHQgPHNwYW4+VGhlc2UgcmVwZWF0ZWQgaXRlbXMgd2lsbCBoYXZlIG1hc29ucnkgbGF5b3V0PC9zcGFuPlxuICogXHQgICB7e2l0ZW0uY29udGVudH19XG4gKiBcdCA8L2xpPlxuICogPC91bD5cbiAqIEByZXF1aXJlcyBNYXNvbnJ5IHYzLngge0BsaW5rIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbS99XG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnk6SXRlbTpkaXJlY3RpdmVcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeTpTdGFtcDpkaXJlY3RpdmVcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeTpkaXJlY3RpdmVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JywgW10pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRSZWNpcGVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgb3IgZWRpdGluZyBpbmRpdmlkdWFsIHJlY2lwZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gVG8gZGlzcGxheSBzZWxlY3QgcmVjaXBlIGluZm8gc3VpdGFibGUgZm9yIGEgdGlsZSBvciAnY2FyZCdcbiAqIDxvbD5cbiAqICAgPGxpPlxuICogICAgIDxydC1yZWNpcGUgcmVjaXBlPVwibXlSZWNpcGVcIiBmb3JtYXQ9XCJjYXJkXCI+PC9ydC1yZWNpcGU+XG4gKiAgIDwvbGk+PCEtLSBldGMuLi4gLS0+XG4gKiA8L29sPlxuICpcbiAqIC8vIERpc3BsYXkgYWxsIHJlY2lwZSBkYXRhIGluIGEgZnVsbC1wYWdlIHZpZXdcbiAqIDxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCJcbiAqIFx0XHRcdFx0XHRcdGZvcm1hdD1cImZ1bGxcIj5cbiAqIDwvcnQtcmVjaXBlPlxuICpcbiAqIC8vIEFzIGEgZnVsbC1wYWdlIGZvcm0gZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgcmVjaXBlLCBvciBjcmVhdGluZyBhIG5ldyBvbmVcbiAqIDxydC1yZWNpcGUgcmVjaXBlPVwiZXhpc3RpbmdSZWNpcGVcIlxuICogXHRcdFx0XHRcdFx0Zm9ybWF0PVwiZm9ybVwiPlxuICogPC9ydC1yZWNpcGU+XG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzbHVnaWZpZXInLFxuICAgICAgJ2Zsb3cnLFxuICAgICAgJ2FuZ3VsYXItc29ydGFibGUtdmlldycsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFVzZXJNZW51XG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIGEgdG9wLWxldmVsIHVzZXIgbWVudSByZWZsZWN0aW5nIGF1dGhcbiAqIHN0YXRlLlxuICogQGV4YW1wbGUgPG5hdiB1c2VyLW1lbnU+PC9uYXY+XG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRTdGVwXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIG9yIGVkaXRpbmcgaW5kaXZpZHVhbCBgUlRSZWNpcGVgXG4gKiByZWNpcGUgc3RlcHMgKGRpcmVjdGlvbnMpLlxuICogQGV4YW1wbGVcbiAqIC8vIFRvIGRpc3BsYXkgc3RlcCBkYXRhIGluIGEgY29tcGFjdCBibG9ja1xuICogPHJ0LXN0ZXAgc3RlcD1cIm15UmVjaXBlLnN0ZXBzWzBdXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1zdGVwPlxuICpcbiAqIC8vIEFzIGZvcm0gZmllbGRzXG4gKiA8cnQtc3RlcCBzdGVwPVwic3RlcFwiXG4gKiBcdFx0XHRcdFx0Zm9ybWF0PVwiZm9ybVwiXG4gKiBcdFx0XHRcdFx0b24tcmVtb3ZlPVwibXlDdHJsLnJlbW92ZVN0ZXAoc3RlcClcIj5cbiAqIDwvcnQtc3RlcD5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgQXV0aFNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyBBUEkgZm9yIGJhY2tlbmQgYXV0aCBlbmRwb2ludHMuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJywgW1xuICAgICAgJ2FuZ3VsYXItand0JyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZVNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvbiBBbiBgbmdSZXNvdXJjZWAgUkVTVCBzZXJ2aWNlIGZvciByZWNpcGUgQ1JVRCBvcGVyYXRpb25zLlxuICogQHJlcXVpcmVzIG5nUmVzb3VyY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGVTZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJywgW1xuICAgICAgJ25nUmVzb3VyY2UnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlclNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlcyBBUEkgZm9yIGJhY2tlbmQgdXNlciBwcm9maWxlIGVuZHBvaW50LlxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZVRvbWU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWV9IGFwcGxpY2F0aW9uLlxuICogQHNlZSBSZWNpcGVUb21lXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgbGlicmFyaWVzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGZvciBkaXNwbGF5IGluIHRoZSBzaXRlIGZvb3Rlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICB2bS50ZWNoTGlzdCA9IFtcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vbm9kZWpzLm9yZy8nLCBuYW1lOiAnTm9kZS5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHA6Ly9leHByZXNzanMuY29tLycsIG5hbWU6ICdFeHByZXNzLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL3Bhc3Nwb3J0anMub3JnLycsIG5hbWU6ICdQYXNzcG9ydC5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLCBuYW1lOiAnQW5ndWxhci5qcycgfSxcbiAgICAgIHsgbGluazogJ2h0dHBzOi8vd3d3Lm1vbmdvZGIub3JnLycsIG5hbWU6ICdNb25nb0RCJyB9LFxuICAgIF07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29uZmlnKFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUm91dGVzQ29uZmlnKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfVxuICBSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIExvZ2luOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBMb2dpbn0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Mb2dpblxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2V9IEF1dGhTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiBFbmNyeXB0IHVzZXIgcGFzc3dvcmQgYmVmb3JlIHNlbmRpbmcgdG8gc2VydmVyXG5cbiAgICAvKipcbiAgICAgKiBQcm90b3R5cGUgYFVzZXJgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0udXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0ubG9naW5Mb2NhbCA9IGRvTG9jYWxMb2dpbjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHVzZXIgbG9nIGluIHdpdGggbG9jYWwgY3JlZGVudGlhbHMgKGVtYWlsICsgcGFzc3dvcmQpLiBDYWxsaW5nXG4gICAgICogdGhpcyBtZXRob2QgcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZSAncHJvZmlsZScgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0xvY2FsTG9naW4oKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbExvZ2luKHZtLnVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAuZ28oJ3Byb2ZpbGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIExvZ2luQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBsb2dpbiB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpbi9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0xvZ2luXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJylcbiAgICAgIC5jb25maWcoTG9naW5Sb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIExvZ2luUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBMb2dpblJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBQcm9maWxlOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBQcm9maWxlfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29udHJvbGxlcignUHJvZmlsZUNvbnRyb2xsZXInLCBQcm9maWxlQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZXRvbWUvU2VydmljZXMvVXNlclNlcnZpY2V9IFVzZXJTZXJ2aWNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyXG4gICAqL1xuICBmdW5jdGlvbiBQcm9maWxlQ29udHJvbGxlcigkc3RhdGUsIFVzZXJTZXJ2aWNlLCB1c2VyKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2dnZWQtaW4gdXNlciwgcmVzb2x2ZWQgZnJvbSAkc3RhdGVQcm92aWRlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0udXNlciA9IHVzZXI7XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0byB0aGUgdXNlcidzIGdyYXZhdGFyIGF2YXRhciBVUkkuXG4gICAgICovXG4gICAgdm0uZ3JhdmF0YXJJbWFnZSA9IFVzZXJTZXJ2aWNlLmdldEdyYXZhdGFyQXZhdGFyVXJsKCk7XG5cbiAgICAvLyBUT0RPOiBFbmNyeXB0IHVzZXIgcGFzc3dvcmQocykgYmVmb3JlIHNlbmRpbmcgdG8gc2VydmVyXG5cbiAgICAvKipcbiAgICAgKiBQcm90b3R5cGUgY3JlZGVudGlhbHMgb2JqZWN0IGZvciBwcm9maWxlIGVkaXQgZm9ybS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0uY3JlZGVudGlhbHMgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjdXJyZW50X3Bhc3N3b3JkOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0udXBkYXRlQ3JlZGVudGlhbHMgPSBVc2VyU2VydmljZS51cGRhdGVDcmVkZW50aWFscztcbiAgICB2bS5kb1VucmVnaXN0ZXIgPSBkb1VucmVnaXN0ZXI7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciB0byB1cGRhdGUgdXNlciBkYXRhLiBDYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogcmVmcmVzaGVzIHRoZSB2aWV3LCBsb2FkaW5nIHRoZSBuZXcgdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGNyZWRlbnRpYWxzXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgICAgLmdvKCdwcm9maWxlJywge30sIHsgcmVmcmVzaDogdHJ1ZSwgfSk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgcmVxdWVzdCB0byBzZXJ2ZXIgdG8gZGVsZXRlIHRoZSB1c2VyLCB0aGUgdXNlcidzIHJlY2lwZXMgYW5kXG4gICAgICogdXBsb2FkcywgYW5kIHJldm9rZSBhcGkgYWNjZXNzLiBDYWxsaW5nIHRoaXMgbWV0aG9kIHJlZGlyZWN0cyB0aGUgdXNlclxuICAgICAqIHRvIHRoZSAnd2VsY29tZScgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb1VucmVnaXN0ZXIoKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAudW5yZWdpc3RlcigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAuZ28oJ3dlbGNvbWUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFByb2ZpbGVDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJVc2VyU2VydmljZVwiLCBcInVzZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnKVxuICAgICAgLmNvbmZpZyhQcm9maWxlUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBQcm9maWxlUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHtcbiAgICAgICAgdXJsOiAnL3Byb2ZpbGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdXNlcjogW1wiVXNlclNlcnZpY2VcIiwgZnVuY3Rpb24oVXNlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIFByb2ZpbGVSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlczpMaXN0OmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSZWNpcGVzOkxpc3R9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlc1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVzTGlzdENvbnRyb2xsZXInLCBSZWNpcGVzTGlzdENvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gcmVjaXBlc1xuICAgKiBAcGFyYW0ge09iamVjdFtdfSBjYXRlZ29yaWVzXG4gICAqL1xuICBmdW5jdGlvbiBSZWNpcGVzTGlzdENvbnRyb2xsZXIocmVjaXBlcywgY2F0ZWdvcmllcykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIHVzZXIncyByZWNpcGVzLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLnJlY2lwZXMgPSByZWNpcGVzO1xuXG4gICAgLyoqXG4gICAgICogQWxsIHVuaXF1ZSBjYXRlZ29yaWVzIHVzZWQgaW4gdXNlcidzIHJlY2lwZXMsIHJlc29sdmVkIGZyb21cbiAgICAgKiAkc3RhdGVQcm92aWRlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICB2bS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnRseSBzZWxlY3RlZCBjYXRlZ29yeSBmaWx0ZXIsIGJ5IHRoZSBgc2x1Z2AgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHZtLmNhdGVnb3J5RmlsdGVyID0gJyc7XG4gIH1cbiAgUmVjaXBlc0xpc3RDb250cm9sbGVyLiRpbmplY3QgPSBbXCJyZWNpcGVzXCIsIFwiY2F0ZWdvcmllc1wiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZXM6U2luZ2xlOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSZWNpcGVzOlNpbmdsZX0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsIFJlY2lwZXNWaWV3Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVjaXBlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXRcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNWaWV3Q29udHJvbGxlcihyZWNpcGUsIGZvcm1hdCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHJlY2lwZSwgcmVzb2x2ZWQgZnJvbSAkc3RhdGVQcm92aWRlci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRvIHNob3cgdGhlIHJlY2lwZS5cbiAgICAgKlxuICAgICAqIEBzZWUge0BsaW5rY29kZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGV9IGZvciBwb3NzaWJsZSBmb3JtYXRzLlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdm0uZm9ybWF0ID0gZm9ybWF0O1xuICB9XG4gIFJlY2lwZXNWaWV3Q29udHJvbGxlci4kaW5qZWN0ID0gW1wicmVjaXBlXCIsIFwiZm9ybWF0XCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb25maWcoUmVjaXBlc1JvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc1JvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncmVjaXBlcycsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxcblxcdDxtYWluIHVpLXZpZXc+XFxuXFx0PC9tYWluPlxcbjwvZGl2PicsXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmxpc3QnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3Qudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZXM6IFtcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UucXVlcnkoKS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgZnVuY3Rpb24oJGh0dHAsICR3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlci9jYXRlZ29yaWVzJywge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW3sgc2x1ZzogJycsIGxhYmVsOiAnJywgfV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMvdmlldy86cmVjaXBlSWQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmdWxsJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5lZGl0Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZC9lZGl0JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBbXCIkc3RhdGVQYXJhbXNcIiwgXCJSZWNpcGVTZXJ2aWNlXCIsIGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UuZ2V0KHsgcmVjaXBlSWQ6ICRzdGF0ZVBhcmFtcy5yZWNpcGVJZCwgfSkuJHByb21pc2U7XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9ybSc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMuY3JlYXRlJywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy9jcmVhdGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaW5ncmVkaWVudHM6IFtdLCBzdGVwczogW10sIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH1cbiAgUmVjaXBlc1JvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBTaWdudXA6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvU2lnbnVwfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1NpZ251cFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnbnVwXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29udHJvbGxlcignU2lnblVwQ29udHJvbGxlcicsIFNpZ25VcENvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlfSBBdXRoU2VydmljZVxuICAgKi9cbiAgZnVuY3Rpb24gU2lnblVwQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgcGFzc3dvcmQgYmVmb3JlIHNlbmRpbmcgdG8gc2VydmVyXG5cbiAgICAvKipcbiAgICAgKiBQcm90b3R5cGUgYFVzZXJgIG9iamVjdCBmb3Igc2lnbnVwIGZvcm0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLnVzZXIgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfTtcblxuICAgIC8vIC0tLVxuICAgIHZtLnJlZ2lzdGVyTG9jYWwgPSBkb0xvY2FsUmVnaXN0cmF0aW9uO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIHVzZXIgcmVnaXN0cmF0aW9uLiBDYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZSAncHJvZmlsZScgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLmRvTG9jYWxSZWdpc3RyYXRpb24odm0udXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgU2lnblVwQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnblVwL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29uZmlnKFNpZ25VcFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gU2lnblVwUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnc2lnbnVwJywge1xuICAgICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbnVwL3NpZ251cC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnblVwQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pO1xuICB9XG4gIFNpZ25VcFJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBXZWxjb21lOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSZWNpcGVUb21lL1dlbGNvbWV9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvV2VsY29tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJylcbiAgICAgIC5jb250cm9sbGVyKCdXZWxjb21lQ29udHJvbGxlcicsIFdlbGNvbWVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBXZWxjb21lQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogR3JlZXRpbmcgaW5mbyB0byBkaXNwbGF5IHRvIGFub255bW91cyB1c2Vycy5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0uZ3JlZXRpbmcgPSB7XG4gICAgICBoZWFkbGluZTogJ1lvdXIgUGVyc29uYWwgUmVjaXBlIERhdGFiYXNlJyxcbiAgICAgIGxlYWQ6ICdSZWNpcGUgVG9tZSBsZXRcXCdzIHlvdSBjcmVhdGUgYW5kIG1hbmFnZSByZWNpcGVzLicsXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvV2VsY29tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJylcbiAgICAgIC5jb25maWcoV2VsY29tZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gV2VsY29tZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3dlbGNvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgV2VsY29tZVJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVEluZ3JlZGllbnQ6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUSW5ncmVkaWVudH0gZGlyZWN0aXZlLlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5jb250cm9sbGVyKCdSVEluZ3JlZGllbnRDb250cm9sbGVyJywgUlRJbmdyZWRpZW50Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50Q29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVEluZ3JlZGllbnQ6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgaW5ncmVkaWVudGA6IEFuIFJUUmVjaXBlIGluZ3JlZGllbnQgb2JqZWN0LiAocmVxdWlyZWQpXG4gKiAtIGBmb3JtYXRgOiBTcGVjaWZpZXMgdGhlIEhUTUwgdGVtcGxhdGUgdG8gcmVuZGVyLiBWYWxpZCBmb3JtYXRzIGFyZSBgaW5saW5lYFxuICogXHQgb3IgYGZvcm1gLiAob3B0aW9uYWwsIGRlZmF1bHQ6ICdpbmxpbmUnKVxuICogLSBgb25SZW1vdmVgOiBDYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlICdyZW1vdmUnIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiBub1xuICogICBjYWxsYmFjayBpcyBzZXQsIHRoZSByZW1vdmUgYnV0dG9uIGlzIG5vdCBzaG93bi4gKG9wdGlvbmFsLCBgZm9ybWAgb25seSlcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0SW5ncmVkaWVudCcsIFJUSW5ncmVkaWVudCk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50KCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRJbmdyZWRpZW50Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbmdyZWRpZW50OiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50OmNvbnRyb2xsZXJ9IHZtXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG5cbiAgICAgIC8vIC0tLVxuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0uaW5ncmVkaWVudCA9IHNjb3BlLmluZ3JlZGllbnQ7XG4gICAgICB2bS5vblJlbW92ZSA9IHNjb3BlLm9uUmVtb3ZlO1xuICAgICAgLy8gLS0tXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCAnZm9ybWF0Jy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZW1wbGF0ZSBmaWxlIFVSTFxuICAgICAgICovXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgSW5wdXRNYXRjaDpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBpbnB1dE1hdGNoYDogVGhlIGZvcm0gbW9kZWwgdG8gbWF0Y2ggYWdhaW5zdC4gKHJlcXVpcmVkKVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcpXG4gICAgICAuZGlyZWN0aXZlKCdpbnB1dE1hdGNoJywgSW5wdXRNYXRjaCk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gSW5wdXRNYXRjaCgpIHtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5wdXRNYXRjaDogJz0nLFxuICAgICAgfSxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIubmdNb2RlbH0gbmdNb2RlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICAvLyBEb24ndCBsaW5rIGlmIG5vdGhpbmcgc3BlY2lmaWVkIHRvIG1hdGNoXG4gICAgICBpZiAoIXNjb3BlLmlucHV0TWF0Y2gpIHsgcmV0dXJuOyB9XG5cbiAgICAgIC8qKlxuICAgICAgICogbmdNb2RlbCBQYXJzZXIvRm9ybWF0dGVyIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtICB7Kn0gdmFsdWVcbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHsqfSBUaGUgcGFzc2VkIGluIHZhbHVlIChubyBmb3JtYXR0aW5nIHBlcmZvcm1lZClcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAobmdNb2RlbC4kdW50b3VjaGVkIHx8IG5nTW9kZWwuJHByaXN0aW5lKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHNjb3BlLmlucHV0TWF0Y2guJHZpZXdWYWx1ZTtcbiAgICAgICAgdmFyIGlzTWF0Y2ggPSBCb29sZWFuKHZhbHVlID09PSB0YXJnZXRWYWx1ZSk7XG5cbiAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ2lucHV0TWF0Y2gnLCBpc01hdGNoKTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIG5nTW9kZWwuJHBhcnNlcnMudW5zaGlmdCh2YWxpZGF0ZUlucHV0KTtcbiAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMudW5zaGlmdCh2YWxpZGF0ZUlucHV0KTtcbiAgICB9XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUTWFzb25yeTpJdGVtOmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYHJ0VGFnYDogQSB0YWcgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIG11bHRpcGxlIG1hc29ucnkgbGF5b3V0cyAob3B0aW9uYWwpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnlJdGVtJywgUlRNYXNvbnJ5SXRlbSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJHRpbWVvdXR9ICR0aW1lb3V0XG4gICAqL1xuICBmdW5jdGlvbiBSVE1hc29ucnlJdGVtKCR0aW1lb3V0KSB7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gV2FpdCBmb3IgalFMaXRlIC5yZWFkeSgpIHRvIGVuc3VyZSBpbWFnZXMgYXJlIGxvYWRlZFxuICAgICAgICBlbGVtZW50LnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAuJGVtaXQoYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUlRNYXNvbnJ5SXRlbS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG4gIFxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUTWFzb25yeTpTdGFtcDpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBydFRhZ2A6IEEgdGFnIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBtdWx0aXBsZSBtYXNvbnJ5IGxheW91dHMgKG9wdGlvbmFsKVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5U3RhbXAnLCBSVE1hc29ucnlTdGFtcCk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJHRpbWVvdXR9ICR0aW1lb3V0XG4gICAqL1xuICBmdW5jdGlvbiBSVE1hc29ucnlTdGFtcCgkdGltZW91dCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGpRTGl0ZSAucmVhZHkoKSB0byBlbnN1cmUgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICAgICAgZWxlbWVudC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZVxuICAgICAgICAgICAgLiRlbWl0KGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUlRNYXNvbnJ5U3RhbXAuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xuICBcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVE1hc29ucnk6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgcnRUYWdgOiBBIHRhZyB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbXVsdGlwbGUgbWFzb25yeSBsYXlvdXRzIChvcHRpb25hbClcbiAqIC0gYHJ0V2F0Y2hgOiBTcGVjaWZpZXMgYSBtb2RlbCB0byB3YXRjaCBhbmQgcGVyZm9ybSBsYXlvdXQgb24gY2hhbmdlcy4gKG9wdGlvbmFsKVxuICogLSBgb25SZW1vdmVgOiBDYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlICdyZW1vdmUnIGJ1dHRvbiBpcyBjbGlja2VkLiAoYGZvcm1gIGZvcm1hdCBvbmx5KVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5JywgUlRNYXNvbnJ5KTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7YW5ndWxhci4kdGltZW91dH0gJHRpbWVvdXRcbiAgICovXG4gIGZ1bmN0aW9uIFJUTWFzb25yeSgkdGltZW91dCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICAvKipcbiAgICAgICAqIE1hc29ucnkgb3B0aW9uc1xuICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAqL1xuICAgICAgdmFyIG9wdGlvbnMgPSB7IGl0ZW1TZWxlY3RvcjogJ1tydC1tYXNvbnJ5LWl0ZW1dJywgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBNYXNvbnJ5IGluc3RhbmNlXG4gICAgICAgKi9cbiAgICAgIHZhciBtYXNvbnJ5O1xuXG4gICAgICAvKipcbiAgICAgICAqIEtlZXBzIHRyYWNrIG9mIG1hc29ucnkgaXRlbSBkaXJ0eSBzdGF0ZS5cbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB2YXIgZGlydHkgPSB0cnVlO1xuXG4gICAgICAvLyBPbiBuZXh0IGRpZ2VzdCBjeWNsZSwgY3JlYXRlIE1hc29ucnkgaW5zdGFuY2VcbiAgICAgICR0aW1lb3V0KG9uQ29udGFpbmVyUmVhZHkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgdGhlIE1hc29ucnkgaW5zdGFuY2UsIGxpc3RlbnMgZm9yIFJUTWFzb25yeSBldmVudHMgYW5kIHdhdGNoZXNcbiAgICAgICAqIHRoZSBzcGVjaWZpZWQgaXRlbXMgY29sbGVjdGlvbi5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25Db250YWluZXJSZWFkeSgpIHtcbiAgICAgICAgbWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1lbnRbMF0sIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgUlRNYXNvbnJ5IGV2ZW50c1xuICAgICAgICBzY29wZS4kb24oYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIG9uSXRlbUFkZGVkKTtcblxuICAgICAgICAvLyBXYXRjaCB0aGUgaXRlbXMgY29sbGVjdGlvblxuICAgICAgICBpZiAoYXR0cnMucnRXYXRjaCkge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5ydFdhdGNoICsgJycsIG9uSXRlbXNDaGFuZ2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgaXRlbXMgYWRkZWQgdG8gdGhlIGxheW91dFxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSAgZXZlbnRcbiAgICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gIGl0ZW1cbiAgICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGlzU3RhbXAgYHRydWVgIGlmIGl0ZW0gaXMgaW5zdGFuY2Ugb2YgcnRTdGFtcCBkaXJlY3RpdmVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25JdGVtQWRkZWQoZXZlbnQsIGl0ZW0sIGlzU3RhbXApIHtcbiAgICAgICAgaWYgKGlzU3RhbXApIHtcbiAgICAgICAgICBtYXNvbnJ5LnN0YW1wKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICByZWxvYWRJdGVtcygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgY2hhbmdlcyBpbiB0aGUgaXRlbXMgY29sbGVjdGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAY2FsbGJhY2tcbiAgICAgICAqIEBwYXJhbSAge09iamVjdHxPYmplY3RbXX0gaXRlbXNcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25JdGVtc0NoYW5nZWQoaXRlbXMpIHtcbiAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICByZWxvYWRJdGVtcygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbG9hZHMgaXRlbXMgYW5kIHBlcmZvcm1zIGxheW91dC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVsb2FkSXRlbXMoKSB7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChkaXJ0eSkge1xuICAgICAgICAgICAgbWFzb25yeS5yZWxvYWRJdGVtcygpO1xuICAgICAgICAgICAgbWFzb25yeS5sYXlvdXQoKTtcblxuICAgICAgICAgICAgZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBSVE1hc29ucnkuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xuICBcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFJlY2lwZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUlRSZWNpcGV9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUUmVjaXBlXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScpXG4gICAgICAuY29udHJvbGxlcignUlRSZWNpcGVDb250cm9sbGVyJywgUlRSZWNpcGVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGVTZXJ2aWNlfSBSZWNpcGVTZXJ2aWNlXG4gICAqIEBwYXJhbSB7c2x1Z2lmaWVyfSBTbHVnXG4gICAqL1xuICBmdW5jdGlvbiBSVFJlY2lwZUNvbnRyb2xsZXIoJHN0YXRlLCBSZWNpcGVTZXJ2aWNlLCBTbHVnKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIENvbmZpZyBmb3IgYHJhdGluZ2AgZm9ybSBjb250cm9sLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0ucmF0aW5nID0geyBtYXg6IDUsIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS5nZXRUaHVtYm5haWwgPSBnZXRUaHVtYm5haWw7XG4gICAgdm0ub25QaWN0dXJlVXBsb2FkID0gb25QaWN0dXJlVXBsb2FkO1xuICAgIHZtLmdlbmVyYXRlQ2F0ZWdvcnlTbHVnID0gZ2VuZXJhdGVDYXRlZ29yeVNsdWc7XG4gICAgdm0uYWRkSW5ncmVkaWVudCA9IGFkZEluZ3JlZGllbnQ7XG4gICAgdm0ub25JbmdyZWRpZW50UmVvcmRlciA9IG9uSW5ncmVkaWVudFJlb3JkZXI7XG4gICAgdm0ucmVtb3ZlSW5ncmVkaWVudCA9IHJlbW92ZUluZ3JlZGllbnQ7XG4gICAgdm0uYWRkU3RlcCA9IGFkZFN0ZXA7XG4gICAgdm0ub25TdGVwUmVvcmRlciA9IG9uU3RlcFJlb3JkZXI7XG4gICAgdm0ucmVtb3ZlU3RlcCA9IHJlbW92ZVN0ZXA7XG4gICAgdm0uc2F2ZVJlY2lwZSA9IHNhdmVSZWNpcGU7XG4gICAgdm0uZGVsZXRlUmVjaXBlID0gZGVsZXRlUmVjaXBlO1xuICAgIC8vIC0tLVxuXG4gICAgLy8gVE9ETzogU2F2ZSBmb3JtIGZpZWxkcyBpbiBzZXNzaW9uU3RvcmFnZSB0byBwZXJzaXN0IHRocm91Z2ggcmVmcmVzaFxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY2lwZSB0aHVtYm5haWwgVVJJIG9yIGRlZmF1bHQgaW1hZ2UgVVJJLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZWNpcGUgdGh1bWJuYWlsLCBvciBkZWZhdWx0IGltYWdlIFVSSVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFRodW1ibmFpbCgpIHtcbiAgICAgIGlmICghdm0ucmVjaXBlIHx8ICF2bS5yZWNpcGUudGh1bWJuYWlsKSB7XG4gICAgICAgIHJldHVybiAnYXNzZXQvaW1nL3JlY2lwZS1pbWFnZS1wbGFjZWhvbGRlci0zNjB4MjQwLnBuZyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2bS5yZWNpcGUudGh1bWJuYWlsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5nLWZsb3cgdXBsb2FkIHN1Y2Nlc3MgY2FsbGJhY2suXG4gICAgICpcbiAgICAgKiBAY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gIHtGbG93RmlsZX0gZmlsZVxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gIHtGbG93fSBmbG93XG4gICAgICovXG4gICAgZnVuY3Rpb24gb25QaWN0dXJlVXBsb2FkKGZpbGUsIHJlc3BvbnNlLCBmbG93KSB7XG4gICAgICB2bS5yZWNpcGUudGh1bWJuYWlsID0gSlNPTi5wYXJzZShyZXNwb25zZSkucGhvdG8udXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2x1Z2lmaWVkIGNhdGVnb3J5IGxhYmVsLlxuICAgICAqXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2F0ZWdvcnlTbHVnKCkge1xuICAgICAgdm0ucmVjaXBlLmNhdGVnb3J5LnNsdWcgPSBTbHVnLnNsdWdpZnkodm0ucmVjaXBlLmNhdGVnb3J5LmxhYmVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaW5ncmVkaWVudCBvYmplY3QgdG8gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZ3JlZGllbnQoKSB7XG4gICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHMucHVzaCh7XG4gICAgICAgIG9yZGVyOiB2bS5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoICsgMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiBuZXcgb3JkZXIgdmFsdWVzIHRvIGV2ZXJ5IGluZ3JlZGllbnQuIENhbGwgd2hlbiBhbnkgaW5ncmVkaWVudFxuICAgICAqIGlzIHJlb3JkZXJlZC5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uSW5ncmVkaWVudFJlb3JkZXIoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdm0ucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5vcmRlciA9IGkgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgc3BlY2lmaWVkIGluZ3JlZGllbnQgZnJvbSB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGluZ3JlZGllbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaW5ncmVkaWVudCBvYmplY3QgdG8gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFN0ZXAoKSB7XG4gICAgICB2bS5yZWNpcGUuc3RlcHMucHVzaCh7XG4gICAgICAgIG9yZGVyOiB2bS5yZWNpcGUuc3RlcHMubGVuZ3RoICsgMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc2lnbiBuZXcgb3JkZXIgdmFsdWVzIHRvIGV2ZXJ5IHJlY2lwZSBzdGVwLiBDYWxsIHdoZW4gYW55IHN0ZXBcbiAgICAgKiBpcyByZW9yZGVyZWQuXG4gICAgICpcbiAgICAgKiBAY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblN0ZXBSZW9yZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZtLnJlY2lwZS5zdGVwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHNbaV0ub3JkZXIgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdGhlIHNwZWNpZmllZCByZWNpcGUgc3RlcCBmcm9tIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gc3RlcFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZVN0ZXAoc3RlcCkge1xuICAgICAgdmFyIGluZGV4ID0gdm0ucmVjaXBlLnN0ZXBzLmluZGV4T2Yoc3RlcCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZtLnJlY2lwZS5zdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBlcnNpc3QgdGhlIGN1cnJlbnQgcmVjaXBlIHRvIHRoZSBzZXJ2ZXIuIFRoaXMgcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZVxuICAgICAqICdzaW5nbGUnIHJlY2lwZXMgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzYXZlUmVjaXBlKCkge1xuICAgICAgaWYgKHZtLnJlY2lwZS5faWQpIHtcbiAgICAgICAgLy8gUmVjaXBlIGV4aXN0cyBpbiB0aGUgZGF0YWJhc2UsIHNvIGRvIHVwZGF0ZVxuICAgICAgICBSZWNpcGVTZXJ2aWNlXG4gICAgICAgICAgLnVwZGF0ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCB2bS5yZWNpcGUsIGZ1bmN0aW9uKHJlY2lwZSkge1xuICAgICAgICAgICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAgIC5nbygnXi52aWV3JywgeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOZXcgcmVjaXBlLCBkbyBzYXZlXG4gICAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgICAuc2F2ZSh2bS5yZWNpcGUsIGZ1bmN0aW9uKHJlY2lwZSkge1xuICAgICAgICAgICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAgIC5nbygnXi52aWV3JywgeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHJlY2lwZSBmcm9tIHRoZSBkYXRhYmFzZS4gQ2FsbGluZyB0aGlzIHJlZGlyZWN0cyB0aGUgdXNlciB0byB0aGVcbiAgICAgKiAnbGlzdCcgcmVjaXBlcyB2aWV3XG4gICAgICovXG4gICAgZnVuY3Rpb24gZGVsZXRlUmVjaXBlKCkge1xuICAgICAgUmVjaXBlU2VydmljZVxuICAgICAgICAucmVtb3ZlKHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgIC8vIFRPRE86IFNhdmUgcmVjaXBlIHRvIHNlc3Npb24gc3RvcmFnZSwgcHJvdmlkZSB1bmRvIG9wdGlvblxuICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgLmdvKCdeLmxpc3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFJUUmVjaXBlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiUmVjaXBlU2VydmljZVwiLCBcIlNsdWdcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFJlY2lwZTpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGByZWNpcGVgOiBBIHJlY2lwZSBvYmplY3QuIChyZXF1aXJlZClcbiAqIC0gYGZvcm1hdGA6IFNwZWNpZmllcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byByZW5kZXIuIFZhbGlkIGZvcm1hdHMgYXJlIGBjYXJkYFxuICogXHQgYGZ1bGxgLCBvciBgZm9ybWAuIChvcHRpb25hbCwgZGVmYXVsdDogJ2NhcmQnKVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRSZWNpcGUoKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFJlY2lwZUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgcmVjaXBlOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGU6Y29udHJvbGxlcn0gdm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcblxuICAgICAgLy8gLS0tXG4gICAgICBpZiAoYXR0cnMuZm9ybWF0ID09PSBGT1JNQVRfRk9STSAmJiAhc2NvcGUucmVjaXBlLl9pZCkge1xuICAgICAgICAvLyBOZXcgcmVjaXBlXG4gICAgICAgIHZtLnRpdGxlID0gJ05ldyBSZWNpcGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhpc3RpbmcgcmVjaXBlXG4gICAgICAgIHZtLnRpdGxlID0gJ0VkaXQgUmVjaXBlJztcbiAgICAgIH1cblxuICAgICAgdm0ucmVjaXBlID0gc2NvcGUucmVjaXBlO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgLy8gLS0tXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCAnZm9ybWF0Jy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZW1wbGF0ZSBmaWxlIFVSTFxuICAgICAgICovXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFVzZXJNZW51fSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScpXG4gICAgICAuY29udHJvbGxlcignVXNlck1lbnVDb250cm9sbGVyJywgVXNlck1lbnVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZX0gVXNlclNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIFVzZXJNZW51Q29udHJvbGxlcigkc3RhdGUsIFVzZXJTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIC0tLVxuICAgIHZtLmlzTG9nZ2VkSW4gPSBVc2VyU2VydmljZS5pc0xvZ2dlZEluO1xuICAgIHZtLmxvZ291dCA9IGxvZ291dDtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHVzZXIgbG9nIG91dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAubG9nb3V0KCk7XG5cbiAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAkc3RhdGVcbiAgICAgICAgLmdvKCd3ZWxjb21lJyk7XG4gICAgfVxuICB9XG4gIFVzZXJNZW51Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiVXNlclNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBVc2VyTWVudTpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIFVzZXJNZW51IGNvbXBvbmVudC5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmRpcmVjdGl2ZSgndXNlck1lbnUnLCBVc2VyTWVudSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gVXNlck1lbnUoKSB7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnVXNlck1lbnVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUudGVtcGxhdGUuaHRtbCcsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUU3RlcDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUlRTdGVwfSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUU3RlcENvbnRyb2xsZXInLCBSVFN0ZXBDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVFN0ZXBDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUU3RlcDpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBzdGVwYDogQW4gUlRSZWNpcGUgcmVjaXBlIHN0ZXAgb2JqZWN0LiAocmVxdWlyZWQpXG4gKiAtIGBmb3JtYXRgOiBTcGVjaWZpZXMgdGhlIEhUTUwgdGVtcGxhdGUgdG8gcmVuZGVyLiBWYWxpZCBmb3JtYXRzIGFyZSBgaW5saW5lYFxuICogXHQgb3IgYGZvcm1gLiAob3B0aW9uYWwsIGRlZmF1bHQ6ICdpbmxpbmUnKVxuICogLSBgb25SZW1vdmVgOiBDYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlICdyZW1vdmUnIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiBub1xuICogICBjYWxsYmFjayBpcyBzZXQsIHRoZSByZW1vdmUgYnV0dG9uIGlzIG5vdCBzaG93bi4gKG9wdGlvbmFsLCBgZm9ybWAgb25seSlcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0U3RlcCcsIFJUU3RlcCk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRTdGVwKCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRTdGVwQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBzdGVwOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50OmNvbnRyb2xsZXJ9IHZtXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG5cbiAgICAgIC8vIC0tLVxuICAgICAgdm0uc3RlcCA9IHNjb3BlLnN0ZXA7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICB2bS5vblJlbW92ZSA9IHNjb3BlLm9uUmVtb3ZlO1xuICAgICAgLy8gLS0tXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCAnZm9ybWF0Jy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZW1wbGF0ZSBmaWxlIFVSTFxuICAgICAgICovXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfSU5MSU5FOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtYmxvY2sudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGgvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcpXG4gICAgICAuZmFjdG9yeSgnQXV0aFNlcnZpY2UnLCBBdXRoU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gQXV0aFNlcnZpY2UoJGh0dHAsICR3aW5kb3csIGp3dEhlbHBlcikge1xuXG4gICAgLy8gVE9ETzogQWRkIHZlcmlmeSBmdW5jdGlvblxuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBkb0xvY2FsUmVnaXN0cmF0aW9uOiBkb0xvY2FsUmVnaXN0cmF0aW9uLFxuICAgICAgZG9Mb2NhbExvZ2luOiBkb0xvY2FsTG9naW4sXG4gICAgICByZXZva2U6IHJldm9rZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwvcmVnaXN0ZXInLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25SZWdpc3RyYXRpb25FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwnLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25Mb2dpbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXZva2UoKSB7XG4gICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BdXRoU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4gPSByZXNwb25zZS5pZF90b2tlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlZ2lzdHJhdGlvbkVycm9yKHJlc3BvbnNlKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9naW5FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICB9XG4gIEF1dGhTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCJqd3RIZWxwZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGUvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnKVxuICAgICAgLmZhY3RvcnkoJ1JlY2lwZVNlcnZpY2UnLCBSZWNpcGVTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBSZWNpcGVTZXJ2aWNlKCRyZXNvdXJjZSwgJHdpbmRvdykge1xuICAgIHZhciBfaGVhZGVycyA9IHtcbiAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgfTtcblxuICAgIHZhciBzZXJ2aWNlID0gJHJlc291cmNlKFxuICAgICAgJy9hcGkvdXNlci9yZWNpcGVzLzpyZWNpcGVJZCcsXG4gICAgICB7IHJlY2lwZUlkOiAnQHJlY2lwZUlkJywgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0OiB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBzYXZlOiB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJywgaXNBcnJheTogdHJ1ZSwgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHJlbW92ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICB1cGRhdGU6IHsgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICB9KTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gIH1cbiAgUmVjaXBlU2VydmljZS4kaW5qZWN0ID0gW1wiJHJlc291cmNlXCIsIFwiJHdpbmRvd1wiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnVzZXInKVxuICAgICAgLmZhY3RvcnkoJ1VzZXJTZXJ2aWNlJywgVXNlclNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIFVzZXJTZXJ2aWNlKCRodHRwLCAkd2luZG93LCAkcSwgQXV0aFNlcnZpY2UpIHtcbiAgICB2YXIgR1JBVkFUQVJfQkFTRVVSTCA9ICdodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJztcblxuICAgIHZhciBfY3VycmVudFVzZXIgPSBudWxsO1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBpc0xvZ2dlZEluOiBpc0xvZ2dlZEluLFxuICAgICAgZ2V0Q3VycmVudFVzZXI6IGdldEN1cnJlbnRVc2VyLFxuICAgICAgZ2V0R3JhdmF0YXJBdmF0YXJVcmw6IGdldEdyYXZhdGFyQXZhdGFyVXJsLFxuICAgICAgdXBkYXRlQ3JlZGVudGlhbHM6IHVwZGF0ZUNyZWRlbnRpYWxzLFxuICAgICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlcixcbiAgICAgIGxvZ291dDogbG9nb3V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICAgIGZ1bmN0aW9uIGlzTG9nZ2VkSW4oKSB7XG4gICAgICByZXR1cm4gX2N1cnJlbnRVc2VyID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgaWYgKF9jdXJyZW50VXNlcikge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLmdldCgnL2FwaS91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS50aGVuKG9uR2V0Q3VycmVudFVzZXJTdWNjZXNzKVxuICAgICAgICAgICAgLmNhdGNoKG9uR2V0Q3VycmVudFVzZXJFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gICAgICBmdW5jdGlvbiBvbkdldEN1cnJlbnRVc2VyU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBfY3VycmVudFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoX2N1cnJlbnRVc2VyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlckVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmF2YXRhckF2YXRhclVybCgpIHtcbiAgICAgIGlmICghX2N1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiAnJzsgLy8gVE9ETzogUmV0dXJuIHBsYWNlaG9sZGVyIGF2YXRhclxuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENShfY3VycmVudFVzZXIuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpLnRvU3RyaW5nKCk7XG5cbiAgICAgIHJldHVybiBHUkFWQVRBUl9CQVNFVVJMICsgaGFzaCArICcuanBnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgLy8gVE9ETzogVmVyaWZ5IHdpdGggQXV0aFNlcnZpY2UgdG8gcmVtb3ZlICR3aW5kb3cgZGVwZW5kZW5jeVxuICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgICAgLnB1dCgnL2FwaS91c2VyLycsIGNyZWRlbnRpYWxzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvblVwZGF0ZUNyZWRlbnRpYWxzU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvblVwZGF0ZUNyZWRlbnRpYWxzRXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblVwZGF0ZUNyZWRlbnRpYWxzU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBfY3VycmVudFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHJldHVybiBBdXRoU2VydmljZVxuICAgICAgICAgIC5kb0xvY2FsTG9naW4oe1xuICAgICAgICAgICAgZW1haWw6IF9jdXJyZW50VXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE86IERpc3BsYXkgZXJyb3IgdG8gdXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLmRlbGV0ZSgnL2FwaS91c2VyLycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4obG9nb3V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAucmV2b2tlKCk7XG5cbiAgICAgIF9jdXJyZW50VXNlciA9IG51bGw7XG4gICAgfVxuXG4gIH1cbiAgVXNlclNlcnZpY2UuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBcIiRxXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9