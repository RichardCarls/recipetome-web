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
 * @description Provides API for backend auth endpoints in Recipe Tome.
 * @see RecipeTome/Services/AuthService:service
 * @requires angular-jwt {@link https://github.com/auth0/angular-jwt}
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
 * @see RecipeTome/Services/RecipeService:service
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
 * @see RecipeTome/Services/UserService:service
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
 * @name AuthService:service
 * @description Service definition for AuthService. Provides methods to interact
 * with backend auth endpoints and facilitate the granting and revoking of api
 * access with JWT id tokens.
 * @see RecipeTome/Services/AuthService
 * @requires angular-jwt {@link https://github.com/auth0/angular-jwt}
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/AuthService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.auth')
      .factory('AuthService', AuthService);

  /**
   * @class
   * @param {angular.$http} $http
   * @param {angular.$window} $window
   * @param {angular-jwt.jwt} jwtHelper
   */
  function AuthService($http, $window, jwtHelper) {

    // TODO: Add verify function

    // ---
    var service = {
      doLocalRegistration: doLocalRegistration,
      doLocalLogin: doLocalLogin,
      revoke: revoke,
    };

    return service;
    // ---

    /**
     * Takes user credentials then attempts to register and authorize a new user.
     *
     * @param  {Object} user
     * @return {Promise} The angular.$http promise.
     */
    function doLocalRegistration(user) {
      return $http
        .post('/auth/local/register', user)
        .success(onAuthSuccess)
        .error(onRegistrationError);
    }

    /**
     * Takes user credentials and attempts to authorize an existing user.
     *
     * @param  {Object} user
     * @return {Promise} The angular.$http promise.
     */
    function doLocalLogin(user) {
      return $http
        .post('/auth/local', user)
        .success(onAuthSuccess)
        .error(onLoginError);
    }

    /**
     * Revokes the user's authentication by deleting the stored JWT id token.
     */
    function revoke() {
      $window
        .sessionStorage
          .removeItem('id_token');
    }

    /**
     * Handle successful authentication.
     *
     * @callback
     * @param  {Object} responseBody Body of the response object
     */
    function onAuthSuccess(responseBody) {
      if (responseBody.id_token) {
        $window.sessionStorage.id_token = responseBody.id_token;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2lucHV0LW1hdGNoL2lucHV0LW1hdGNoLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LWl0ZW0uZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktc3RhbXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnkuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWNpcGV0b21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbmFtZSBSZWNpcGVUb21lXG4gKiBAZGVzY3JpcHRpb24gQXBwbGljYXRpb24gbW9kdWxlIGZvciBSZWNpcGUgVG9tZSwgYSByZWNpcGUgbWFuYWdlbWVudFxuICogYXBwbGljYXRpb24uXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvY29tcG9uZW50c1xuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Mb2dpblxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQHNlZSBQcm9qZWN0IHJlcG9zaXRvcnkge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9SaWNoYXJkQ2FybHMvcmVjaXBldG9tZS13ZWJ9XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2VydmljZXMnLFxuICAgICAgJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsXG4gICAgICAncmVjaXBldG9tZS53ZWxjb21lJyxcbiAgICAgICdyZWNpcGV0b21lLnNpZ251cCcsXG4gICAgICAncmVjaXBldG9tZS5sb2dpbicsXG4gICAgICAncmVjaXBldG9tZS5wcm9maWxlJyxcbiAgICAgICdyZWNpcGV0b21lLnJlY2lwZXMnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgQ29tcG9uZW50c1xuICogQGRlc2NyaXB0aW9uIERlZmluZXMgY29tcG9uZW50cyByZXF1aXJlZCBieSBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmNvbXBvbmVudHMnLCBbXG4gICAgICAnY29tcG9uZW50cy51c2VybWVudScsXG4gICAgICAnY29tcG9uZW50cy5yZWNpcGUnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsXG4gICAgICAnY29tcG9uZW50cy5zdGVwJyxcbiAgICAgICdjb21wb25lbnRzLmlucHV0TWF0Y2gnLFxuICAgICAgJ2NvbXBvbmVudHMubWFzb25yeScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBMb2dpblxuICogQGRlc2NyaXB0aW9uIExvZ2luIHZpZXcgbW9kdWxlIGZvciBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFByb2ZpbGVcbiAqIEBkZXNjcmlwdGlvbiBQcm9maWxlIHZpZXcgbW9kdWxlIGZvciBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnY29tcG9uZW50cy5pbnB1dE1hdGNoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJlY2lwZXNcbiAqIEBkZXNjcmlwdGlvbiBSZWNpcGVzIHZpZXcgbW9kdWxlIGZvciBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVNlcnZpY2VcbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzOkxpc3Q6Y29udHJvbGxlclxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXM6U2luZ2xlOmNvbnRyb2xsZXJcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2VydmljZXMgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zZXJ2aWNlcycsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgU2lnbnVwXG4gKiBAZGVzY3JpcHRpb24gU2lnbnVwIHZpZXcgbW9kdWxlIGZvciBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgV2VsY29tZVxuICogQGRlc2NyaXB0aW9uIFdlbGNvbWUgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRJbmdyZWRpZW50XG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIG9yIGVkaXRpbmcgaW5kaXZpZHVhbCBgUlRSZWNpcGVgXG4gKiBpbmdyZWRpZW50cy5cbiAqIEBleGFtcGxlXG4gKiAvLyBUbyBkaXNwbGF5IGluZ3JlZGllbnQgZGF0YSBhbGwgaW4gb25lIGxpbmVcbiAqIDxydC1pbmdyZWRpZW50IGluZ3JlZGllbnQ9XCJteVJlY2lwZS5pbmdyZWRpZW50c1swXVwiIGZvcm1hdD1cImlubGluZVwiPjwvcnQtaW5ncmVkaWVudD5cbiAqXG4gKiAvLyBBcyBmb3JtIGZpZWxkc1xuICogPHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cImluZ3JlZGllbnRcIlxuICogXHRcdFx0XHRcdFx0XHRcdGZvcm1hdD1cImZvcm1cIlxuICogXHRcdFx0XHRcdFx0XHRcdG9uLXJlbW92ZT1cIm15Q3RybC5yZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpXCI+XG4gKiA8L3J0LWluZ3JlZGllbnQ+XG4gKiBAc2VlIFJUUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgSW5wdXRNYXRjaFxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSBmb3IgdmFsaWRhdGluZyBhbiBgPGlucHV0PmAgZmllbGQgYnkgcmVxdWlyaW5nIGl0c1xuICogdmFsdWUgdG8gbWF0Y2ggdGhhdCBvZiBhbm90aGVyIGA8aW5wdXQ+YCBmaWVsZC4gVXNlZnVsIGZvciBjb25maXJtaW5nXG4gKiBwYXNzd29yZHMuXG4gKiBAZXhhbXBsZVxuICogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0MVwiIC8+XG4gKlxuICogLy8gVmFsdWUgbXVzdCBtYXRjaCBgaW5wdXQxYCB0byBiZSB2YWxpZCwgcGFzcyB0aGUgYW5ndWxhciBmb3JtIG1vZGVsXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQyXCIgaW5wdXQtbWF0Y2g9XCJmb3JtLmlucHV0MVwiIC8+XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmlucHV0TWF0Y2gnLCBbXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVE1hc29ucnlcbiAqIEBkZXNjcmlwdGlvbiBTZXQgb2YgZGlyZWN0aXZlcyBmb3IgaW1wbGVtZW50aW5nIG1hc29ucnkgbGF5b3V0LlxuICogQGV4YW1wbGVcbiAqIDx1bCBydC1tYXNvbnJ5XG4gKiBcdFx0IHJ0LXRhZz1cIm15R3JpZFwiXG4gKiBcdFx0IHJ0LXdhdGNoPVwibXlJdGVtc0NvbGxlY3Rpb25cIj5cbiAqXG4gKiAgIDxsaSBydC1tYXNvbnJ5LXN0YW1wXG4gKiAgIFx0XHQgcnQtdGFnPVwibXlHcmlkXCI+XG4gKiAgICAgPHNwYW4+VGhpcyBpcyBhIHN0YW1wIGVsZW1lbnQsIGdyaWQgaXRlbXMgd2lsbCBsYXlvdXQgYXJvdW5kIG1lLjwvc3Bhbj5cbiAqICAgPC9saT5cbiAqXG4gKiBcdCA8bGkgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtcyB8IGZpbHRlcjogJ29yZGVyJyBhcyBteUl0ZW1zQ29sbGVjdGlvblwiXG4gKiBcdCBcdFx0IHJ0LW1hc29ucnktaXRlbVxuICogXHQgXHRcdCBydC10YWc9XCJteUdyaWRcIj5cbiAqIFx0IFx0IDxzcGFuPlRoZXNlIHJlcGVhdGVkIGl0ZW1zIHdpbGwgaGF2ZSBtYXNvbnJ5IGxheW91dDwvc3Bhbj5cbiAqIFx0ICAge3tpdGVtLmNvbnRlbnR9fVxuICogXHQgPC9saT5cbiAqIDwvdWw+XG4gKiBAcmVxdWlyZXMgTWFzb25yeSB2My54IHtAbGluayBodHRwOi8vbWFzb25yeS5kZXNhbmRyby5jb20vfVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5Okl0ZW06ZGlyZWN0aXZlXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnk6U3RhbXA6ZGlyZWN0aXZlXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnk6ZGlyZWN0aXZlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScsIFtdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUUmVjaXBlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBkaXNwbGF5aW5nIG9yIGVkaXRpbmcgaW5kaXZpZHVhbCByZWNpcGVzLlxuICogQGV4YW1wbGVcbiAqIC8vIFRvIGRpc3BsYXkgc2VsZWN0IHJlY2lwZSBpbmZvIHN1aXRhYmxlIGZvciBhIHRpbGUgb3IgJ2NhcmQnXG4gKiA8b2w+XG4gKiAgIDxsaT5cbiAqICAgICA8cnQtcmVjaXBlIHJlY2lwZT1cIm15UmVjaXBlXCIgZm9ybWF0PVwiY2FyZFwiPjwvcnQtcmVjaXBlPlxuICogICA8L2xpPjwhLS0gZXRjLi4uIC0tPlxuICogPC9vbD5cbiAqXG4gKiAvLyBEaXNwbGF5IGFsbCByZWNpcGUgZGF0YSBpbiBhIGZ1bGwtcGFnZSB2aWV3XG4gKiA8cnQtcmVjaXBlIHJlY2lwZT1cInJlY2lwZVwiXG4gKiBcdFx0XHRcdFx0XHRmb3JtYXQ9XCJmdWxsXCI+XG4gKiA8L3J0LXJlY2lwZT5cbiAqXG4gKiAvLyBBcyBhIGZ1bGwtcGFnZSBmb3JtIGZvciBlZGl0aW5nIGFuIGV4aXN0aW5nIHJlY2lwZSwgb3IgY3JlYXRpbmcgYSBuZXcgb25lXG4gKiA8cnQtcmVjaXBlIHJlY2lwZT1cImV4aXN0aW5nUmVjaXBlXCJcbiAqIFx0XHRcdFx0XHRcdGZvcm1hdD1cImZvcm1cIj5cbiAqIDwvcnQtcmVjaXBlPlxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAnc2x1Z2lmaWVyJyxcbiAgICAgICdmbG93JyxcbiAgICAgICdhbmd1bGFyLXNvcnRhYmxlLXZpZXcnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFN0ZXBcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgb3IgZWRpdGluZyBpbmRpdmlkdWFsIGBSVFJlY2lwZWBcbiAqIHJlY2lwZSBzdGVwcyAoZGlyZWN0aW9ucykuXG4gKiBAZXhhbXBsZVxuICogLy8gVG8gZGlzcGxheSBzdGVwIGRhdGEgaW4gYSBjb21wYWN0IGJsb2NrXG4gKiA8cnQtc3RlcCBzdGVwPVwibXlSZWNpcGUuc3RlcHNbMF1cIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LXN0ZXA+XG4gKlxuICogLy8gQXMgZm9ybSBmaWVsZHNcbiAqIDxydC1zdGVwIHN0ZXA9XCJzdGVwXCJcbiAqIFx0XHRcdFx0XHRmb3JtYXQ9XCJmb3JtXCJcbiAqIFx0XHRcdFx0XHRvbi1yZW1vdmU9XCJteUN0cmwucmVtb3ZlU3RlcChzdGVwKVwiPlxuICogPC9ydC1zdGVwPlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBVc2VyTWVudVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSBmb3IgZGlzcGxheWluZyBhIHRvcC1sZXZlbCB1c2VyIG1lbnUgcmVmbGVjdGluZyBhdXRoXG4gKiBzdGF0ZS5cbiAqIEBleGFtcGxlIDxuYXYgdXNlci1tZW51PjwvbmF2PlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIEF1dGhTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgQVBJIGZvciBiYWNrZW5kIGF1dGggZW5kcG9pbnRzIGluIFJlY2lwZSBUb21lLlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlOnNlcnZpY2VcbiAqIEByZXF1aXJlcyBhbmd1bGFyLWp3dCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2FuZ3VsYXItand0fVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gQW4gYG5nUmVzb3VyY2VgIFJFU1Qgc2VydmljZSBmb3IgcmVjaXBlIENSVUQgb3BlcmF0aW9ucy5cbiAqIEByZXF1aXJlcyBuZ1Jlc291cmNlXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZTpzZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnJlY2lwZScsIFtcbiAgICAgICduZ1Jlc291cmNlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFVzZXJTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgQVBJIGZvciBiYWNrZW5kIHVzZXIgcHJvZmlsZSBlbmRwb2ludC5cbiAqIEBzZWUgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZTpzZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlVG9tZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZX0gYXBwbGljYXRpb24uXG4gKiBAc2VlIFJlY2lwZVRvbWVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBsaWJyYXJpZXMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gZm9yIGRpc3BsYXkgaW4gdGhlIHNpdGUgZm9vdGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLnRlY2hMaXN0ID0gW1xuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICB7IGxpbms6ICdodHRwOi8vcGFzc3BvcnRqcy5vcmcvJywgbmFtZTogJ1Bhc3Nwb3J0LmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgXTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb25maWcoUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSb3V0ZXNDb25maWcoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9XG4gIFJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgTG9naW46Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIExvZ2lufSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL0xvZ2luXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZX0gQXV0aFNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcigkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZCBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBgVXNlcmAgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS5sb2dpbkxvY2FsID0gZG9Mb2NhbExvZ2luO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdXNlciBsb2cgaW4gd2l0aCBsb2NhbCBjcmVkZW50aWFscyAoZW1haWwgKyBwYXNzd29yZCkuIENhbGxpbmdcbiAgICAgKiB0aGlzIG1ldGhvZCByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlICdwcm9maWxlJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbigpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsTG9naW4odm0udXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgTG9naW5Db250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGxvZ2luIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0xvZ2luL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbmZpZyhMb2dpblJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gTG9naW5Sb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4udmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pO1xuICB9XG4gIExvZ2luUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFByb2ZpbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFByb2ZpbGV9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7UmVjaXBldG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZX0gVXNlclNlcnZpY2VcbiAgICogQHBhcmFtIHtPYmplY3R9IHVzZXJcbiAgICovXG4gIGZ1bmN0aW9uIFByb2ZpbGVDb250cm9sbGVyKCRzdGF0ZSwgVXNlclNlcnZpY2UsIHVzZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvZ2dlZC1pbiB1c2VyLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0gdXNlcjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRvIHRoZSB1c2VyJ3MgZ3JhdmF0YXIgYXZhdGFyIFVSSS5cbiAgICAgKi9cbiAgICB2bS5ncmF2YXRhckltYWdlID0gVXNlclNlcnZpY2UuZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKTtcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZChzKSBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBjcmVkZW50aWFscyBvYmplY3QgZm9yIHByb2ZpbGUgZWRpdCBmb3JtLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5jcmVkZW50aWFscyA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS51cGRhdGVDcmVkZW50aWFscyA9IFVzZXJTZXJ2aWNlLnVwZGF0ZUNyZWRlbnRpYWxzO1xuICAgIHZtLmRvVW5yZWdpc3RlciA9IGRvVW5yZWdpc3RlcjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB1c2VyIGRhdGEuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiByZWZyZXNoZXMgdGhlIHZpZXcsIGxvYWRpbmcgdGhlIG5ldyB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY3JlZGVudGlhbHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ3Byb2ZpbGUnLCB7fSwgeyByZWZyZXNoOiB0cnVlLCB9KTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciB0byBkZWxldGUgdGhlIHVzZXIsIHRoZSB1c2VyJ3MgcmVjaXBlcyBhbmRcbiAgICAgKiB1cGxvYWRzLCBhbmQgcmV2b2tlIGFwaSBhY2Nlc3MuIENhbGxpbmcgdGhpcyBtZXRob2QgcmVkaXJlY3RzIHRoZSB1c2VyXG4gICAgICogdG8gdGhlICd3ZWxjb21lJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvVW5yZWdpc3RlcigpIHtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC51bnJlZ2lzdGVyKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgIC5nbygnd2VsY29tZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUHJvZmlsZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlVzZXJTZXJ2aWNlXCIsIFwidXNlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29uZmlnKFByb2ZpbGVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFByb2ZpbGVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB1c2VyOiBbXCJVc2VyU2VydmljZVwiLCBmdW5jdGlvbihVc2VyU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgUHJvZmlsZVJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVzOkxpc3Q6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6TGlzdH0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsIFJlY2lwZXNMaXN0Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWNpcGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNhdGVnb3JpZXNcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNMaXN0Q29udHJvbGxlcihyZWNpcGVzLCBjYXRlZ29yaWVzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgdXNlcidzIHJlY2lwZXMsIHJlc29sdmVkIGZyb20gJHN0YXRlUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0W119XG4gICAgICovXG4gICAgdm0ucmVjaXBlcyA9IHJlY2lwZXM7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdW5pcXVlIGNhdGVnb3JpZXMgdXNlZCBpbiB1c2VyJ3MgcmVjaXBlcywgcmVzb2x2ZWQgZnJvbVxuICAgICAqICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5IGZpbHRlciwgYnkgdGhlIGBzbHVnYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdm0uY2F0ZWdvcnlGaWx0ZXIgPSAnJztcbiAgfVxuICBSZWNpcGVzTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZXNcIiwgXCJjYXRlZ29yaWVzXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6U2luZ2xlfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc1ZpZXdDb250cm9sbGVyJywgUmVjaXBlc1ZpZXdDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNpcGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlc1ZpZXdDb250cm9sbGVyKHJlY2lwZSwgZm9ybWF0KSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVjaXBlLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdG8gc2hvdyB0aGUgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZX0gZm9yIHBvc3NpYmxlIGZvcm1hdHMuXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB2bS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgUmVjaXBlc1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbXCJyZWNpcGVcIiwgXCJmb3JtYXRcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuXFx0PG1haW4gdWktdmlldz5cXG5cXHQ8L21haW4+XFxuPC9kaXY+JyxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0xpc3RDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlczogW1wiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbihSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5xdWVyeSgpLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbeyBzbHVnOiAnJywgbGFiZWw6ICcnLCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy52aWV3Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogW1wiJHN0YXRlUGFyYW1zXCIsIFwiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkL2VkaXQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbmdyZWRpZW50czogW10sIHN0ZXBzOiBbXSwgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuICBSZWNpcGVzUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFNpZ251cDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9TaWdudXB9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWdudXBcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb250cm9sbGVyKCdTaWduVXBDb250cm9sbGVyJywgU2lnblVwQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2V9IEF1dGhTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBTaWduVXBDb250cm9sbGVyKCRzdGF0ZSwgQXV0aFNlcnZpY2UpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogRW5jcnlwdCBwYXNzd29yZCBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBgVXNlcmAgb2JqZWN0IGZvciBzaWdudXAgZm9ybS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0udXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0ucmVnaXN0ZXJMb2NhbCA9IGRvTG9jYWxSZWdpc3RyYXRpb247XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciBmb3IgdXNlciByZWdpc3RyYXRpb24uIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlICdwcm9maWxlJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24oKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbFJlZ2lzdHJhdGlvbih2bS51c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgLmdvKCdwcm9maWxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBTaWduVXBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWduVXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb25maWcoU2lnblVwUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBTaWduVXBSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdzaWdudXAnLCB7XG4gICAgICAgIHVybDogJy9zaWdudXAnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWdudXAvc2lnbnVwLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduVXBDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgU2lnblVwUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFdlbGNvbWU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvV2VsY29tZX0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBHcmVldGluZyBpbmZvIHRvIGRpc3BsYXkgdG8gYW5vbnltb3VzIHVzZXJzLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5ncmVldGluZyA9IHtcbiAgICAgIGhlYWRsaW5lOiAnWW91ciBQZXJzb25hbCBSZWNpcGUgRGF0YWJhc2UnLFxuICAgICAgbGVhZDogJ1JlY2lwZSBUb21lIGxldFxcJ3MgeW91IGNyZWF0ZSBhbmQgbWFuYWdlIHJlY2lwZXMuJyxcbiAgICB9O1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB3ZWxjb21lIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbmZpZyhXZWxjb21lUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBXZWxjb21lUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnd2VsY29tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dlbGNvbWUvd2VsY29tZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnV2VsY29tZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBXZWxjb21lUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUSW5ncmVkaWVudDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUlRJbmdyZWRpZW50fSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLCBSVEluZ3JlZGllbnRDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVEluZ3JlZGllbnRDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUSW5ncmVkaWVudDpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBpbmdyZWRpZW50YDogQW4gUlRSZWNpcGUgaW5ncmVkaWVudCBvYmplY3QuIChyZXF1aXJlZClcbiAqIC0gYGZvcm1hdGA6IFNwZWNpZmllcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byByZW5kZXIuIFZhbGlkIGZvcm1hdHMgYXJlIGBpbmxpbmVgXG4gKiBcdCBvciBgZm9ybWAuIChvcHRpb25hbCwgZGVmYXVsdDogJ2lubGluZScpXG4gKiAtIGBvblJlbW92ZWA6IENhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgJ3JlbW92ZScgYnV0dG9uIGlzIGNsaWNrZWQuIElmIG5vXG4gKiAgIGNhbGxiYWNrIGlzIHNldCwgdGhlIHJlbW92ZSBidXR0b24gaXMgbm90IHNob3duLiAob3B0aW9uYWwsIGBmb3JtYCBvbmx5KVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRJbmdyZWRpZW50JywgUlRJbmdyZWRpZW50KTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVEluZ3JlZGllbnQoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVEluZ3JlZGllbnRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGluZ3JlZGllbnQ6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqIEBwYXJhbSAge1JlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnQ6Y29udHJvbGxlcn0gdm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcblxuICAgICAgLy8gLS0tXG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICB2bS5pbmdyZWRpZW50ID0gc2NvcGUuaW5ncmVkaWVudDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG4gICAgICAvLyAtLS1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBIVE1MIHRlbXBsYXRlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkICdmb3JtYXQnLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRlbXBsYXRlIGZpbGUgVVJMXG4gICAgICAgKi9cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9DQVJEOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mdWxsLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBJbnB1dE1hdGNoOmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYGlucHV0TWF0Y2hgOiBUaGUgZm9ybSBtb2RlbCB0byBtYXRjaCBhZ2FpbnN0LiAocmVxdWlyZWQpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbnB1dE1hdGNoJylcbiAgICAgIC5kaXJlY3RpdmUoJ2lucHV0TWF0Y2gnLCBJbnB1dE1hdGNoKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBJbnB1dE1hdGNoKCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbnB1dE1hdGNoOiAnPScsXG4gICAgICB9LFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIExpbmsgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLiRzY29wZX0gc2NvcGVcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5uZ01vZGVsfSBuZ01vZGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgIC8vIERvbid0IGxpbmsgaWYgbm90aGluZyBzcGVjaWZpZWQgdG8gbWF0Y2hcbiAgICAgIGlmICghc2NvcGUuaW5wdXRNYXRjaCkgeyByZXR1cm47IH1cblxuICAgICAgLyoqXG4gICAgICAgKiBuZ01vZGVsIFBhcnNlci9Gb3JtYXR0ZXIgZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4geyp9IFRoZSBwYXNzZWQgaW4gdmFsdWUgKG5vIGZvcm1hdHRpbmcgcGVyZm9ybWVkKVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KHZhbHVlKSB7XG4gICAgICAgIGlmIChuZ01vZGVsLiR1bnRvdWNoZWQgfHwgbmdNb2RlbC4kcHJpc3RpbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gc2NvcGUuaW5wdXRNYXRjaC4kdmlld1ZhbHVlO1xuICAgICAgICB2YXIgaXNNYXRjaCA9IEJvb2xlYW4odmFsdWUgPT09IHRhcmdldFZhbHVlKTtcblxuICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eSgnaW5wdXRNYXRjaCcsIGlzTWF0Y2gpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbmdNb2RlbC4kcGFyc2Vycy51bnNoaWZ0KHZhbGlkYXRlSW5wdXQpO1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy51bnNoaWZ0KHZhbGlkYXRlSW5wdXQpO1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRNYXNvbnJ5Okl0ZW06ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgcnRUYWdgOiBBIHRhZyB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbXVsdGlwbGUgbWFzb25yeSBsYXlvdXRzIChvcHRpb25hbClcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeUl0ZW0nLCBSVE1hc29ucnlJdGVtKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7YW5ndWxhci4kdGltZW91dH0gJHRpbWVvdXRcbiAgICovXG4gIGZ1bmN0aW9uIFJUTWFzb25yeUl0ZW0oJHRpbWVvdXQpIHtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIExpbmsgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLiRzY29wZX0gc2NvcGVcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBXYWl0IGZvciBqUUxpdGUgLnJlYWR5KCkgdG8gZW5zdXJlIGltYWdlcyBhcmUgbG9hZGVkXG4gICAgICAgIGVsZW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgICAgIC4kZW1pdChhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBSVE1hc29ucnlJdGVtLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbiAgXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRNYXNvbnJ5OlN0YW1wOmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYHJ0VGFnYDogQSB0YWcgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIG11bHRpcGxlIG1hc29ucnkgbGF5b3V0cyAob3B0aW9uYWwpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnlTdGFtcCcsIFJUTWFzb25yeVN0YW1wKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7YW5ndWxhci4kdGltZW91dH0gJHRpbWVvdXRcbiAgICovXG4gIGZ1bmN0aW9uIFJUTWFzb25yeVN0YW1wKCR0aW1lb3V0KSB7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gV2FpdCBmb3IgalFMaXRlIC5yZWFkeSgpIHRvIGVuc3VyZSBpbWFnZXMgYXJlIGxvYWRlZFxuICAgICAgICBlbGVtZW50LnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAuJGVtaXQoYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIGVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBSVE1hc29ucnlTdGFtcC4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG4gIFxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUTWFzb25yeTpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBydFRhZ2A6IEEgdGFnIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBtdWx0aXBsZSBtYXNvbnJ5IGxheW91dHMgKG9wdGlvbmFsKVxuICogLSBgcnRXYXRjaGA6IFNwZWNpZmllcyBhIG1vZGVsIHRvIHdhdGNoIGFuZCBwZXJmb3JtIGxheW91dCBvbiBjaGFuZ2VzLiAob3B0aW9uYWwpXG4gKiAtIGBvblJlbW92ZWA6IENhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgJ3JlbW92ZScgYnV0dG9uIGlzIGNsaWNrZWQuIChgZm9ybWAgZm9ybWF0IG9ubHkpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnknLCBSVE1hc29ucnkpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHthbmd1bGFyLiR0aW1lb3V0fSAkdGltZW91dFxuICAgKi9cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5KCR0aW1lb3V0KSB7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFzb25yeSBvcHRpb25zXG4gICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICovXG4gICAgICB2YXIgb3B0aW9ucyA9IHsgaXRlbVNlbGVjdG9yOiAnW3J0LW1hc29ucnktaXRlbV0nLCB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIE1hc29ucnkgaW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgdmFyIG1hc29ucnk7XG5cbiAgICAgIC8qKlxuICAgICAgICogS2VlcHMgdHJhY2sgb2YgbWFzb25yeSBpdGVtIGRpcnR5IHN0YXRlLlxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIHZhciBkaXJ0eSA9IHRydWU7XG5cbiAgICAgIC8vIE9uIG5leHQgZGlnZXN0IGN5Y2xlLCBjcmVhdGUgTWFzb25yeSBpbnN0YW5jZVxuICAgICAgJHRpbWVvdXQob25Db250YWluZXJSZWFkeSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyB0aGUgTWFzb25yeSBpbnN0YW5jZSwgbGlzdGVucyBmb3IgUlRNYXNvbnJ5IGV2ZW50cyBhbmQgd2F0Y2hlc1xuICAgICAgICogdGhlIHNwZWNpZmllZCBpdGVtcyBjb2xsZWN0aW9uLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlYWR5KCkge1xuICAgICAgICBtYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbWVudFswXSwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciBSVE1hc29ucnkgZXZlbnRzXG4gICAgICAgIHNjb3BlLiRvbihhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgb25JdGVtQWRkZWQpO1xuXG4gICAgICAgIC8vIFdhdGNoIHRoZSBpdGVtcyBjb2xsZWN0aW9uXG4gICAgICAgIGlmIChhdHRycy5ydFdhdGNoKSB7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnJ0V2F0Y2ggKyAnJywgb25JdGVtc0NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlcyBpdGVtcyBhZGRlZCB0byB0aGUgbGF5b3V0XG4gICAgICAgKlxuICAgICAgICogQGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBldmVudFxuICAgICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSAgaXRlbVxuICAgICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNTdGFtcCBgdHJ1ZWAgaWYgaXRlbSBpcyBpbnN0YW5jZSBvZiBydFN0YW1wIGRpcmVjdGl2ZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkl0ZW1BZGRlZChldmVudCwgaXRlbSwgaXNTdGFtcCkge1xuICAgICAgICBpZiAoaXNTdGFtcCkge1xuICAgICAgICAgIG1hc29ucnkuc3RhbXAoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgIHJlbG9hZEl0ZW1zKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlcyBjaGFuZ2VzIGluIHRoZSBpdGVtcyBjb2xsZWN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fE9iamVjdFtdfSBpdGVtc1xuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkl0ZW1zQ2hhbmdlZChpdGVtcykge1xuICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgIHJlbG9hZEl0ZW1zKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVsb2FkcyBpdGVtcyBhbmQgcGVyZm9ybXMgbGF5b3V0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiByZWxvYWRJdGVtcygpIHtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICBtYXNvbnJ5LnJlbG9hZEl0ZW1zKCk7XG4gICAgICAgICAgICBtYXNvbnJ5LmxheW91dCgpO1xuXG4gICAgICAgICAgICBkaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFJUTWFzb25yeS4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIl07XG4gIFxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUUmVjaXBlOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSVFJlY2lwZX0gZGlyZWN0aXZlLlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFJlY2lwZUNvbnRyb2xsZXInLCBSVFJlY2lwZUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVNlcnZpY2V9IFJlY2lwZVNlcnZpY2VcbiAgICogQHBhcmFtIHtzbHVnaWZpZXJ9IFNsdWdcbiAgICovXG4gIGZ1bmN0aW9uIFJUUmVjaXBlQ29udHJvbGxlcigkc3RhdGUsIFJlY2lwZVNlcnZpY2UsIFNsdWcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlnIGZvciBgcmF0aW5nYCBmb3JtIGNvbnRyb2wuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5yYXRpbmcgPSB7IG1heDogNSwgfTtcblxuICAgIC8vIC0tLVxuICAgIHZtLmdldFRodW1ibmFpbCA9IGdldFRodW1ibmFpbDtcbiAgICB2bS5vblBpY3R1cmVVcGxvYWQgPSBvblBpY3R1cmVVcGxvYWQ7XG4gICAgdm0uZ2VuZXJhdGVDYXRlZ29yeVNsdWcgPSBnZW5lcmF0ZUNhdGVnb3J5U2x1ZztcbiAgICB2bS5hZGRJbmdyZWRpZW50ID0gYWRkSW5ncmVkaWVudDtcbiAgICB2bS5vbkluZ3JlZGllbnRSZW9yZGVyID0gb25JbmdyZWRpZW50UmVvcmRlcjtcbiAgICB2bS5yZW1vdmVJbmdyZWRpZW50ID0gcmVtb3ZlSW5ncmVkaWVudDtcbiAgICB2bS5hZGRTdGVwID0gYWRkU3RlcDtcbiAgICB2bS5vblN0ZXBSZW9yZGVyID0gb25TdGVwUmVvcmRlcjtcbiAgICB2bS5yZW1vdmVTdGVwID0gcmVtb3ZlU3RlcDtcbiAgICB2bS5zYXZlUmVjaXBlID0gc2F2ZVJlY2lwZTtcbiAgICB2bS5kZWxldGVSZWNpcGUgPSBkZWxldGVSZWNpcGU7XG4gICAgLy8gLS0tXG5cbiAgICAvLyBUT0RPOiBTYXZlIGZvcm0gZmllbGRzIGluIHNlc3Npb25TdG9yYWdlIHRvIHBlcnNpc3QgdGhyb3VnaCByZWZyZXNoXG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjaXBlIHRodW1ibmFpbCBVUkkgb3IgZGVmYXVsdCBpbWFnZSBVUkkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlY2lwZSB0aHVtYm5haWwsIG9yIGRlZmF1bHQgaW1hZ2UgVVJJXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0VGh1bWJuYWlsKCkge1xuICAgICAgaWYgKCF2bS5yZWNpcGUgfHwgIXZtLnJlY2lwZS50aHVtYm5haWwpIHtcbiAgICAgICAgcmV0dXJuICdhc3NldC9pbWcvcmVjaXBlLWltYWdlLXBsYWNlaG9sZGVyLTM2MHgyNDAucG5nJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtLnJlY2lwZS50aHVtYm5haWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbmctZmxvdyB1cGxvYWQgc3VjY2VzcyBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge0Zsb3dGaWxlfSBmaWxlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSAge0Zsb3d9IGZsb3dcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblBpY3R1cmVVcGxvYWQoZmlsZSwgcmVzcG9uc2UsIGZsb3cpIHtcbiAgICAgIHZtLnJlY2lwZS50aHVtYm5haWwgPSBKU09OLnBhcnNlKHJlc3BvbnNlKS5waG90by51cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzbHVnaWZpZWQgY2F0ZWdvcnkgbGFiZWwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yeVNsdWcoKSB7XG4gICAgICB2bS5yZWNpcGUuY2F0ZWdvcnkuc2x1ZyA9IFNsdWcuc2x1Z2lmeSh2bS5yZWNpcGUuY2F0ZWdvcnkubGFiZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBpbmdyZWRpZW50IG9iamVjdCB0byB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5ncmVkaWVudCgpIHtcbiAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWduIG5ldyBvcmRlciB2YWx1ZXMgdG8gZXZlcnkgaW5ncmVkaWVudC4gQ2FsbCB3aGVuIGFueSBpbmdyZWRpZW50XG4gICAgICogaXMgcmVvcmRlcmVkLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25JbmdyZWRpZW50UmVvcmRlcigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2bS5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzW2ldLm9yZGVyID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBzcGVjaWZpZWQgaW5ncmVkaWVudCBmcm9tIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gaW5ncmVkaWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUluZ3JlZGllbnQoaW5ncmVkaWVudCkge1xuICAgICAgdmFyIGluZGV4ID0gdm0ucmVjaXBlLmluZ3JlZGllbnRzLmluZGV4T2YoaW5ncmVkaWVudCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBpbmdyZWRpZW50IG9iamVjdCB0byB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkU3RlcCgpIHtcbiAgICAgIHZtLnJlY2lwZS5zdGVwcy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5zdGVwcy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWduIG5ldyBvcmRlciB2YWx1ZXMgdG8gZXZlcnkgcmVjaXBlIHN0ZXAuIENhbGwgd2hlbiBhbnkgc3RlcFxuICAgICAqIGlzIHJlb3JkZXJlZC5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uU3RlcFJlb3JkZXIoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZtLnJlY2lwZS5zdGVwc1tpXS5vcmRlciA9IGkgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgc3BlY2lmaWVkIHJlY2lwZSBzdGVwIGZyb20gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBzdGVwXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RlcChzdGVwKSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLnN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyc2lzdCB0aGUgY3VycmVudCByZWNpcGUgdG8gdGhlIHNlcnZlci4gVGhpcyByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlXG4gICAgICogJ3NpbmdsZScgcmVjaXBlcyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNhdmVSZWNpcGUoKSB7XG4gICAgICBpZiAodm0ucmVjaXBlLl9pZCkge1xuICAgICAgICAvLyBSZWNpcGUgZXhpc3RzIGluIHRoZSBkYXRhYmFzZSwgc28gZG8gdXBkYXRlXG4gICAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgICAudXBkYXRlKHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0sIHZtLnJlY2lwZSwgZnVuY3Rpb24ocmVjaXBlKSB7XG4gICAgICAgICAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgICAgLmdvKCdeLnZpZXcnLCB7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5ldyByZWNpcGUsIGRvIHNhdmVcbiAgICAgICAgUmVjaXBlU2VydmljZVxuICAgICAgICAgIC5zYXZlKHZtLnJlY2lwZSwgZnVuY3Rpb24ocmVjaXBlKSB7XG4gICAgICAgICAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgICAgLmdvKCdeLnZpZXcnLCB7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgcmVjaXBlIGZyb20gdGhlIGRhdGFiYXNlLiBDYWxsaW5nIHRoaXMgcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZVxuICAgICAqICdsaXN0JyByZWNpcGVzIHZpZXdcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZWxldGVSZWNpcGUoKSB7XG4gICAgICBSZWNpcGVTZXJ2aWNlXG4gICAgICAgIC5yZW1vdmUoeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcblxuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgLy8gVE9ETzogU2F2ZSByZWNpcGUgdG8gc2Vzc2lvbiBzdG9yYWdlLCBwcm92aWRlIHVuZG8gb3B0aW9uXG4gICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAuZ28oJ14ubGlzdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUlRSZWNpcGVDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJSZWNpcGVTZXJ2aWNlXCIsIFwiU2x1Z1wiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUUmVjaXBlOmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYHJlY2lwZWA6IEEgcmVjaXBlIG9iamVjdC4gKHJlcXVpcmVkKVxuICogLSBgZm9ybWF0YDogU3BlY2lmaWVzIHRoZSBIVE1MIHRlbXBsYXRlIHRvIHJlbmRlci4gVmFsaWQgZm9ybWF0cyBhcmUgYGNhcmRgXG4gKiBcdCBgZnVsbGAsIG9yIGBmb3JtYC4gKG9wdGlvbmFsLCBkZWZhdWx0OiAnY2FyZCcpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScpXG4gICAgICAuZGlyZWN0aXZlKCdydFJlY2lwZScsIFJUUmVjaXBlKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVFJlY2lwZSgpIHtcbiAgICB2YXIgRk9STUFUX0NBUkQgPSAnY2FyZCcsXG4gICAgICAgIEZPUk1BVF9GVUxMID0gJ2Z1bGwnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUUmVjaXBlQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICByZWNpcGU6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqIEBwYXJhbSAge1JlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZTpjb250cm9sbGVyfSB2bVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB2bSkge1xuXG4gICAgICAvLyAtLS1cbiAgICAgIGlmIChhdHRycy5mb3JtYXQgPT09IEZPUk1BVF9GT1JNICYmICFzY29wZS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIC8vIE5ldyByZWNpcGVcbiAgICAgICAgdm0udGl0bGUgPSAnTmV3IFJlY2lwZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFeGlzdGluZyByZWNpcGVcbiAgICAgICAgdm0udGl0bGUgPSAnRWRpdCBSZWNpcGUnO1xuICAgICAgfVxuXG4gICAgICB2bS5yZWNpcGUgPSBzY29wZS5yZWNpcGU7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICAvLyAtLS1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBIVE1MIHRlbXBsYXRlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkICdmb3JtYXQnLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRlbXBsYXRlIGZpbGUgVVJMXG4gICAgICAgKi9cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9DQVJEOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mdWxsLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFN0ZXA6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUU3RlcH0gZGlyZWN0aXZlLlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFN0ZXBDb250cm9sbGVyJywgUlRTdGVwQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRTdGVwQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFN0ZXA6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgc3RlcGA6IEFuIFJUUmVjaXBlIHJlY2lwZSBzdGVwIG9iamVjdC4gKHJlcXVpcmVkKVxuICogLSBgZm9ybWF0YDogU3BlY2lmaWVzIHRoZSBIVE1MIHRlbXBsYXRlIHRvIHJlbmRlci4gVmFsaWQgZm9ybWF0cyBhcmUgYGlubGluZWBcbiAqIFx0IG9yIGBmb3JtYC4gKG9wdGlvbmFsLCBkZWZhdWx0OiAnaW5saW5lJylcbiAqIC0gYG9uUmVtb3ZlYDogQ2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSAncmVtb3ZlJyBidXR0b24gaXMgY2xpY2tlZC4gSWYgbm9cbiAqICAgY2FsbGJhY2sgaXMgc2V0LCB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBub3Qgc2hvd24uIChvcHRpb25hbCwgYGZvcm1gIG9ubHkpXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcpXG4gICAgICAuZGlyZWN0aXZlKCdydFN0ZXAnLCBSVFN0ZXApO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFJUU3RlcCgpIHtcbiAgICB2YXIgRk9STUFUX0lOTElORSA9ICdpbmxpbmUnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUU3RlcENvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgc3RlcDogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgICAgb25SZW1vdmU6ICcmJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIExpbmsgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLiRzY29wZX0gc2NvcGVcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzXG4gICAgICogQHBhcmFtICB7UmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudDpjb250cm9sbGVyfSB2bVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB2bSkge1xuXG4gICAgICAvLyAtLS1cbiAgICAgIHZtLnN0ZXAgPSBzY29wZS5zdGVwO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcbiAgICAgIC8vIC0tLVxuXG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdGhlIEhUTUwgdGVtcGxhdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgJ2Zvcm1hdCcuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgdGVtcGxhdGUgZmlsZSBVUkxcbiAgICAgICAqL1xuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFVzZXJNZW51OmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBVc2VyTWVudX0gZGlyZWN0aXZlLlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1VzZXJNZW51Q29udHJvbGxlcicsIFVzZXJNZW51Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2V9IFVzZXJTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBVc2VyTWVudUNvbnRyb2xsZXIoJHN0YXRlLCBVc2VyU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvLyAtLS1cbiAgICB2bS5pc0xvZ2dlZEluID0gVXNlclNlcnZpY2UuaXNMb2dnZWRJbjtcbiAgICB2bS5sb2dvdXQgPSBsb2dvdXQ7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSB1c2VyIGxvZyBvdXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLmxvZ291dCgpO1xuXG4gICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgJHN0YXRlXG4gICAgICAgIC5nbygnd2VsY29tZScpO1xuICAgIH1cbiAgfVxuICBVc2VyTWVudUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlVzZXJTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnU6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBVc2VyTWVudSBjb21wb25lbnQuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5kaXJlY3RpdmUoJ3VzZXJNZW51JywgVXNlck1lbnUpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFVzZXJNZW51KCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1VzZXJNZW51Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51LnRlbXBsYXRlLmh0bWwnLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBBdXRoU2VydmljZTpzZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gU2VydmljZSBkZWZpbml0aW9uIGZvciBBdXRoU2VydmljZS4gUHJvdmlkZXMgbWV0aG9kcyB0byBpbnRlcmFjdFxuICogd2l0aCBiYWNrZW5kIGF1dGggZW5kcG9pbnRzIGFuZCBmYWNpbGl0YXRlIHRoZSBncmFudGluZyBhbmQgcmV2b2tpbmcgb2YgYXBpXG4gKiBhY2Nlc3Mgd2l0aCBKV1QgaWQgdG9rZW5zLlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgYW5ndWxhci1qd3Qge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9hbmd1bGFyLWp3dH1cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnKVxuICAgICAgLmZhY3RvcnkoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHthbmd1bGFyLiRodHRwfSAkaHR0cFxuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJHdpbmRvd30gJHdpbmRvd1xuICAgKiBAcGFyYW0ge2FuZ3VsYXItand0Lmp3dH0gand0SGVscGVyXG4gICAqL1xuICBmdW5jdGlvbiBBdXRoU2VydmljZSgkaHR0cCwgJHdpbmRvdywgand0SGVscGVyKSB7XG5cbiAgICAvLyBUT0RPOiBBZGQgdmVyaWZ5IGZ1bmN0aW9uXG5cbiAgICAvLyAtLS1cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGRvTG9jYWxSZWdpc3RyYXRpb246IGRvTG9jYWxSZWdpc3RyYXRpb24sXG4gICAgICBkb0xvY2FsTG9naW46IGRvTG9jYWxMb2dpbixcbiAgICAgIHJldm9rZTogcmV2b2tlLFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIHVzZXIgY3JlZGVudGlhbHMgdGhlbiBhdHRlbXB0cyB0byByZWdpc3RlciBhbmQgYXV0aG9yaXplIGEgbmV3IHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHVzZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgYW5ndWxhci4kaHR0cCBwcm9taXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24odXNlcikge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5wb3N0KCcvYXV0aC9sb2NhbC9yZWdpc3RlcicsIHVzZXIpXG4gICAgICAgIC5zdWNjZXNzKG9uQXV0aFN1Y2Nlc3MpXG4gICAgICAgIC5lcnJvcihvblJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyB1c2VyIGNyZWRlbnRpYWxzIGFuZCBhdHRlbXB0cyB0byBhdXRob3JpemUgYW4gZXhpc3RpbmcgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gdXNlclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFRoZSBhbmd1bGFyLiRodHRwIHByb21pc2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwnLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25Mb2dpbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZva2VzIHRoZSB1c2VyJ3MgYXV0aGVudGljYXRpb24gYnkgZGVsZXRpbmcgdGhlIHN0b3JlZCBKV1QgaWQgdG9rZW4uXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgJHdpbmRvd1xuICAgICAgICAuc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgICAucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VCb2R5IEJvZHkgb2YgdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MocmVzcG9uc2VCb2R5KSB7XG4gICAgICBpZiAocmVzcG9uc2VCb2R5LmlkX3Rva2VuKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4gPSByZXNwb25zZUJvZHkuaWRfdG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWdpc3RyYXRpb25FcnJvcihyZXNwb25zZSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvZ2luRXJyb3IoZGF0YSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgfVxuICBBdXRoU2VydmljZS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkd2luZG93XCIsIFwiand0SGVscGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJylcbiAgICAgIC5mYWN0b3J5KCdSZWNpcGVTZXJ2aWNlJywgUmVjaXBlU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlU2VydmljZSgkcmVzb3VyY2UsICR3aW5kb3cpIHtcbiAgICB2YXIgX2hlYWRlcnMgPSB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgIH07XG5cbiAgICB2YXIgc2VydmljZSA9ICRyZXNvdXJjZShcbiAgICAgICcvYXBpL3VzZXIvcmVjaXBlcy86cmVjaXBlSWQnLFxuICAgICAgeyByZWNpcGVJZDogJ0ByZWNpcGVJZCcsIH0sXG4gICAgICB7XG4gICAgICAgIGdldDogeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IHRydWUsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICByZW1vdmU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgdXBkYXRlOiB7IG1ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICB9XG4gIFJlY2lwZVNlcnZpY2UuJGluamVjdCA9IFtcIiRyZXNvdXJjZVwiLCBcIiR3aW5kb3dcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlci9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJylcbiAgICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBVc2VyU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIEdSQVZBVEFSX0JBU0VVUkwgPSAnaHR0cDovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLyc7XG5cbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIGdldEN1cnJlbnRVc2VyOiBnZXRDdXJyZW50VXNlcixcbiAgICAgIGdldEdyYXZhdGFyQXZhdGFyVXJsOiBnZXRHcmF2YXRhckF2YXRhclVybCxcbiAgICAgIHVwZGF0ZUNyZWRlbnRpYWxzOiB1cGRhdGVDcmVkZW50aWFscyxcbiAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5nZXQoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvbkdldEN1cnJlbnRVc2VyU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvbkdldEN1cnJlbnRVc2VyRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlclN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uR2V0Q3VycmVudFVzZXJFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKSB7XG4gICAgICBpZiAoIV9jdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJyc7IC8vIFRPRE86IFJldHVybiBwbGFjZWhvbGRlciBhdmF0YXJcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoX2N1cnJlbnRVc2VyLmVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS50b1N0cmluZygpO1xuXG4gICAgICByZXR1cm4gR1JBVkFUQVJfQkFTRVVSTCArIGhhc2ggKyAnLmpwZyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAgIC5wdXQoJy9hcGkvdXNlci8nLCBjcmVkZW50aWFscywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ob25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MpXG4gICAgICAgICAgICAuY2F0Y2gob25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2VcbiAgICAgICAgICAuZG9Mb2NhbExvZ2luKHtcbiAgICAgICAgICAgIGVtYWlsOiBfY3VycmVudFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uVXBkYXRlQ3JlZGVudGlhbHNFcnJvcihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIHRvIHVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKCkge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5kZWxldGUoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGxvZ291dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLnJldm9rZSgpO1xuXG4gICAgICBfY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cblxuICB9XG4gIFVzZXJTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCIkcVwiLCBcIkF1dGhTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==