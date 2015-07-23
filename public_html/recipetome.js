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
      'flash',
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
      'flash',
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
      'flash',
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
 * @name Services
 * @description Defines services required by Recipe Tome.
 * @requires RecipeTome/Services/AuthService
 * @requires RecipeTome/Services/RecipeService
 * @requires RecipeTome/Services/UserService
 * @since 0.1.0
 *
 * @namespace RecipeTome/Services
 * @memberof RecipeTome
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

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
      'flash',
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
      'flash',
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
 * @name RecipeTome:routes
 * @description Recipe Tome routes definition.
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
      .config(RoutesConfig);

  /**
   * @class
   * @param {ui.router.$urlRouterProvider} $urlRouterProvider
   */
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
   * @param {flash.Flash} Flash
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function LoginController($state, Flash, AuthService) {
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
        .then(function(result) {
          if (result.success) {
            console.log('SUCCESS');
            Flash
              .create('success', 'Login successful.');

            $state
              .go('profile');
          } else {
            console.log('ERROR: ' + result.message);
            Flash
              .create('error', result.message);
          }
        });
    }
  }
  LoginController.$inject = ["$state", "Flash", "AuthService"];

})(angular);

/**
 * @name Login:routes
 * @description Recipe Tome login view routes.
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
      .config(LoginRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   */
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
   * @param {flash.Flash} Flash
   * @param {Recipetome/Services/UserService} UserService
   * @param {Object} user
   */
  function ProfileController($state, Flash, UserService, user) {
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
          .then(function(result) {
            if (result.success) {
              Flash
                .create('success', 'Credentials updated.');

              $state
                .go('profile', {}, { refresh: true, });
            } else {
              Flash
                .create('error', result.message);
            }
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
        .then(function(result) {
          if (result.success) {
            Flash
              .create('success', 'Unregistration successful.');

            $state
              .go('welcome');
          } else {
            Flash
              .create('error', result.message);
          }
        });
    }
  }
  ProfileController.$inject = ["$state", "Flash", "UserService", "user"];

})(angular);

/**
 * @name Profile:routes
 * @description Recipe Tome profile view routes.
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
      .config(ProfileRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   */
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
 * @name Recipes:routes
 * @description Recipe Tome recipes view routes.
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
      .config(RecipesRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   * @param {ui.router.$urlRouterProvider} $urlRouterProvider
   */
  function RecipesRoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Abstract parent state
      .state('recipes', {
        abstract: true,
        template: '<div class="container">\n\t<main ui-view>\n\t</main>\n</div>',
      })
      // Recipes list
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
      // Recipes single view
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
      // Recipes edit view
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
      // Recipes create view
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
   * @param {flash.Flash} Flash
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function SignUpController($state, Flash, AuthService) {
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
        .then(function(result) {
          if (result.success) {
            Flash
              .create('success', 'Registration successful.');

            $state
              .go('profile');
          } else {
            Flash
              .create('error', result.message);
          }
        });
    }
  }
  SignUpController.$inject = ["$state", "Flash", "AuthService"];

})(angular);

/**
 * @name Signup:routes
 * @description Recipe Tome signup view routes.
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
      .config(SignUpRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   */
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
 * @name Welcome:routes
 * @description Recipe Tome welcome view routes.
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
      .config(WelcomeRoutesConfig);

  /**
   * @class
   * @param {ui.router.$stateProvider} $stateProvider
   */
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
   * @param {flash.Flash} Flash
   * @param {RecipeTome/Services/RecipeService} RecipeService
   * @param {slugifier} Slug
   */
  function RTRecipeController($state, Flash, RecipeService, Slug) {
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
          .update(
            { recipeId: vm.recipe._id, },
            vm.recipe,
            onSaveRecipeSuccess,
            onSaveRecipeError
          );
      } else {
        // New recipe, do save
        RecipeService
          .save(vm.recipe, onSaveRecipeSuccess, onSaveRecipeError);
      }

      /**
       * Handles successful recipe update or save.
       *
       * @callback
       * @param  {Object} recipe
       */
      function onSaveRecipeSuccess(recipe) {
        vm.recipe = recipe;

        Flash
          .create('success', 'Recipe saved.');
        $state
          .go('^.view', { recipeId: vm.recipe._id, });
      }

      /**
       * Handles failed recipe update or save.
       *
       * @callback
       * @param  {Object} response
       */
      function onSaveRecipeError(response) {
        Flash
          .create('error', response);
      }
    }

    /**
     * Remove recipe from the database. Calling this redirects the user to the
     * 'list' recipes view
     */
    function deleteRecipe() {
      RecipeService
        .remove(
          { recipeId: vm.recipe._id, },
          onDeleteRecipeSuccess,
          onDeleteRecipeError
        );

      /**
       * Handles successful recipe deletion.
       *
       * @callback
       * @param  {Object} response
       */
      function onDeleteRecipeSuccess(response) {
        // TODO: Save recipe to session storage, provide undo option

        Flash
          .create('success', 'Recipe deleted.');

        $state
          .go('^.list');
      }

      /**
       * Handles failed recipe deletion.
       *
       * @callback
       * @param  {Object} response
       */
      function onDeleteRecipeError(response) {
        Flash
          .create('error', response);
      }
    }
  }
  RTRecipeController.$inject = ["$state", "Flash", "RecipeService", "Slug"];

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
        .then(onAuthSuccess)
        .catch(onAuthError);
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
        .then(onAuthSuccess)
        .catch(onAuthError);
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
    function onAuthSuccess(response) {
      var id_token = response.data.id_token;

      if (id_token) {
        $window.sessionStorage.id_token = id_token;

        return { success: true, };
      } else {
          return { success: false, message: 'No id token with response.', };
      }
    }

    /**
     * Handle authentication errors.
     *
     * @param  {Object} responseBody Body of the response object
     */
    function onAuthError(response) {
      revoke();

      return { success: false, message: response.data, };
    }
  }
  AuthService.$inject = ["$http", "$window", "jwtHelper"];

})(angular);

/**
 * @name RecipeService:service
 * @description Service definition for RecipeService. Provides an `ngResource`
 * instance to perform CRUD operations on a user's recipes collection.
 * @see RecipeTome/Services/RecipeService
 * @requires angular-resource {@link https://github.com/angular/angular.js/tree/master/src/ngResource}
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/RecipeService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.recipe')
      .factory('RecipeService', RecipeService);

  /**
   * @class
   * @param {angular.$window} $window
   * @param {angular.$resource} $resource
   */
  function RecipeService($window, $resource) {

    /**
     * Headers to send with resource requests.
     * @type {Object}
     */
    var _headers = {
      'x-access-token': $window.sessionStorage.id_token,
    };

    // ---
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
    // ---
    
  }
  RecipeService.$inject = ["$window", "$resource"];

})(angular);

/**
 * @name UserService:service
 * @description Service definition for UserService. Provides an interface for
 * user functions like checking auth status, updating credentials and profile
 * info, and logging out.
 * @see RecipeTome/Services/UserService
 * @requires RecipeTome/Services/AuthService
 * @since 0.1.0
 *
 * @memberof RecipeTome/Services/UserService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.user')
      .factory('UserService', UserService);

  /**
   * @class
   * @param {angular.$http} $http
   * @param {angular.$window} $window
   * @param {angular.$q} $q
   * @param {RecipeTome/Services/AuthService} AuthService
   */
  function UserService($http, $window, $q, AuthService) {
    var GRAVATAR_BASEURL = 'http://www.gravatar.com/avatar/';

    /**
     * Cached user object representing the current logged in user.
     *
     * @private
     * @type {Object}
     */
    var _currentUser = null;

    // ---
    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      getGravatarAvatarUrl: getGravatarAvatarUrl,
      updateCredentials: updateCredentials,
      unregister: unregister,
      logout: logout,
    };

    return service;
    // ---

    /**
     * Checks current user's auth status.
     *
     * @return {Boolean} `true` if logged in, `false` otherwise
     */
    function isLoggedIn() {
      return $window.sessionStorage.id_token ? true : false;
    }

    /**
     * Returns the current logged-in user.
     *
     * @return {Promise} [description]
     */
    function getCurrentUser() {
      var deferred = $q.defer();

      if (_currentUser) {
        // Return cached user immediately
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

      /**
       * Handles user retrieval success.
       *
       * @callback
       * @param  {Object} response
       */
      function onGetCurrentUserSuccess(response) {
        _currentUser = response.data;

        deferred.resolve(_currentUser);
      }

      /**
       * Handles user retrieval failure.
       *
       * @callback
       * @param  {Object} response
       */
      function onGetCurrentUserError(response) {
        deferred.reject(null);
      }
    }

    /**
     * Returns the user's Gravatar avatar URL.
     *
     * @return {String} Avatar URL
     */
    function getGravatarAvatarUrl() {
      if (!_currentUser) {
        return ''; // TODO: Return placeholder avatar
      }

      // Hash email to get Gravatar data
      var hash = CryptoJS.MD5(_currentUser.email.trim().toLowerCase()).toString();

      return GRAVATAR_BASEURL + hash + '.jpg';
    }

    /**
     * Attempts to update the user's credentials.
     *
     * @param  {Object} credentials
     * @return {Promise} angular.$http promise
     */
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

      /**
       * updateCredentials Success handler.
       *
       * @callback
       * @param  {Object} response
       * @return {Promise} Promised call to AuthService login
       */
      function onUpdateCredentialsSuccess(response) {
        _currentUser = response.data;

        return AuthService
          .doLocalLogin({
            email: _currentUser.email,
            password: credentials.password,
          });
      }

      /**
       * updateCredentials Error handler.
       *
       * @callback
       * @param  {Object} response
       */
      function onUpdateCredentialsError(response) {
        return { success: false, message: response.data, };
      }
    }

    /**
     * Attempts to remove the user account and revoke authorization.
     *
     * @return {Promise} angualr.$http promise
     */
    function unregister() {
      return $http
        .delete('/api/user/', {
          headers: {
            'x-access-token': $window.sessionStorage.id_token,
          },
        }).then(function(response) {
          logout();

          return { success: true, };
        }).catch(function(response) {
          return { success: false, message: response.data, };
        });
    }

    /**
     * Log the current user out by revoking authorization.
     */
    function logout() {
      AuthService
        .revoke();

      _currentUser = null;
    }
  }
  UserService.$inject = ["$http", "$window", "$q", "AuthService"];

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5wdXQtbWF0Y2gvaW5wdXQtbWF0Y2guZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktaXRlbS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS1zdGFtcC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBuYW1lIFJlY2lwZVRvbWVcbiAqIEBkZXNjcmlwdGlvbiBBcHBsaWNhdGlvbiBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLCBhIHJlY2lwZSBtYW5hZ2VtZW50XG4gKiBhcHBsaWNhdGlvbi5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9jb21wb25lbnRzXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TaWdudXBcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0xvZ2luXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2VlIFByb2plY3QgcmVwb3NpdG9yeSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1JpY2hhcmRDYXJscy9yZWNpcGV0b21lLXdlYn1cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnZmxhc2gnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2VydmljZXMnLFxuICAgICAgJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsXG4gICAgICAncmVjaXBldG9tZS53ZWxjb21lJyxcbiAgICAgICdyZWNpcGV0b21lLnNpZ251cCcsXG4gICAgICAncmVjaXBldG9tZS5sb2dpbicsXG4gICAgICAncmVjaXBldG9tZS5wcm9maWxlJyxcbiAgICAgICdyZWNpcGV0b21lLnJlY2lwZXMnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgQ29tcG9uZW50c1xuICogQGRlc2NyaXB0aW9uIERlZmluZXMgY29tcG9uZW50cyByZXF1aXJlZCBieSBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmNvbXBvbmVudHMnLCBbXG4gICAgICAnY29tcG9uZW50cy51c2VybWVudScsXG4gICAgICAnY29tcG9uZW50cy5yZWNpcGUnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsXG4gICAgICAnY29tcG9uZW50cy5zdGVwJyxcbiAgICAgICdjb21wb25lbnRzLmlucHV0TWF0Y2gnLFxuICAgICAgJ2NvbXBvbmVudHMubWFzb25yeScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBMb2dpblxuICogQGRlc2NyaXB0aW9uIExvZ2luIHZpZXcgbW9kdWxlIGZvciBSZWNpcGUgVG9tZS5cbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdmbGFzaCcsXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBQcm9maWxlXG4gKiBAZGVzY3JpcHRpb24gUHJvZmlsZSB2aWV3IG1vZHVsZSBmb3IgUmVjaXBlIFRvbWUuXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEByZXF1aXJlcyBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ2ZsYXNoJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICAgICdjb21wb25lbnRzLmlucHV0TWF0Y2gnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlc1xuICogQGRlc2NyaXB0aW9uIFJlY2lwZXMgdmlldyBtb2R1bGUgZm9yIFJlY2lwZSBUb21lLlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXM6TGlzdDpjb250cm9sbGVyXG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBTZXJ2aWNlc1xuICogQGRlc2NyaXB0aW9uIERlZmluZXMgc2VydmljZXMgcmVxdWlyZWQgYnkgUmVjaXBlIFRvbWUuXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2VydmljZXMnLCBbXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFNpZ251cFxuICogQGRlc2NyaXB0aW9uIFNpZ251cCB2aWV3IG1vZHVsZSBmb3IgUmVjaXBlIFRvbWUuXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ251cFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdmbGFzaCcsXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBXZWxjb21lXG4gKiBAZGVzY3JpcHRpb24gV2VsY29tZSB2aWV3IG1vZHVsZSBmb3IgUmVjaXBlIFRvbWUuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBJbnB1dE1hdGNoXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciB2YWxpZGF0aW5nIGFuIGA8aW5wdXQ+YCBmaWVsZCBieSByZXF1aXJpbmcgaXRzXG4gKiB2YWx1ZSB0byBtYXRjaCB0aGF0IG9mIGFub3RoZXIgYDxpbnB1dD5gIGZpZWxkLiBVc2VmdWwgZm9yIGNvbmZpcm1pbmdcbiAqIHBhc3N3b3Jkcy5cbiAqIEBleGFtcGxlXG4gKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXQxXCIgLz5cbiAqXG4gKiAvLyBWYWx1ZSBtdXN0IG1hdGNoIGBpbnB1dDFgIHRvIGJlIHZhbGlkLCBwYXNzIHRoZSBhbmd1bGFyIGZvcm0gbW9kZWxcbiAqIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dDJcIiBpbnB1dC1tYXRjaD1cImZvcm0uaW5wdXQxXCIgLz5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsIFtdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUTWFzb25yeVxuICogQGRlc2NyaXB0aW9uIFNldCBvZiBkaXJlY3RpdmVzIGZvciBpbXBsZW1lbnRpbmcgbWFzb25yeSBsYXlvdXQuXG4gKiBAZXhhbXBsZVxuICogPHVsIHJ0LW1hc29ucnlcbiAqIFx0XHQgcnQtdGFnPVwibXlHcmlkXCJcbiAqIFx0XHQgcnQtd2F0Y2g9XCJteUl0ZW1zQ29sbGVjdGlvblwiPlxuICpcbiAqICAgPGxpIHJ0LW1hc29ucnktc3RhbXBcbiAqICAgXHRcdCBydC10YWc9XCJteUdyaWRcIj5cbiAqICAgICA8c3Bhbj5UaGlzIGlzIGEgc3RhbXAgZWxlbWVudCwgZ3JpZCBpdGVtcyB3aWxsIGxheW91dCBhcm91bmQgbWUuPC9zcGFuPlxuICogICA8L2xpPlxuICpcbiAqIFx0IDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zIHwgZmlsdGVyOiAnb3JkZXInIGFzIG15SXRlbXNDb2xsZWN0aW9uXCJcbiAqIFx0IFx0XHQgcnQtbWFzb25yeS1pdGVtXG4gKiBcdCBcdFx0IHJ0LXRhZz1cIm15R3JpZFwiPlxuICogXHQgXHQgPHNwYW4+VGhlc2UgcmVwZWF0ZWQgaXRlbXMgd2lsbCBoYXZlIG1hc29ucnkgbGF5b3V0PC9zcGFuPlxuICogXHQgICB7e2l0ZW0uY29udGVudH19XG4gKiBcdCA8L2xpPlxuICogPC91bD5cbiAqIEByZXF1aXJlcyBNYXNvbnJ5IHYzLngge0BsaW5rIGh0dHA6Ly9tYXNvbnJ5LmRlc2FuZHJvLmNvbS99XG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnk6SXRlbTpkaXJlY3RpdmVcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeTpTdGFtcDpkaXJlY3RpdmVcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeTpkaXJlY3RpdmVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JywgW10pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRSZWNpcGVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgb3IgZWRpdGluZyBpbmRpdmlkdWFsIHJlY2lwZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gVG8gZGlzcGxheSBzZWxlY3QgcmVjaXBlIGluZm8gc3VpdGFibGUgZm9yIGEgdGlsZSBvciAnY2FyZCdcbiAqIDxvbD5cbiAqICAgPGxpPlxuICogICAgIDxydC1yZWNpcGUgcmVjaXBlPVwibXlSZWNpcGVcIiBmb3JtYXQ9XCJjYXJkXCI+PC9ydC1yZWNpcGU+XG4gKiAgIDwvbGk+PCEtLSBldGMuLi4gLS0+XG4gKiA8L29sPlxuICpcbiAqIC8vIERpc3BsYXkgYWxsIHJlY2lwZSBkYXRhIGluIGEgZnVsbC1wYWdlIHZpZXdcbiAqIDxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCJcbiAqIFx0XHRcdFx0XHRcdGZvcm1hdD1cImZ1bGxcIj5cbiAqIDwvcnQtcmVjaXBlPlxuICpcbiAqIC8vIEFzIGEgZnVsbC1wYWdlIGZvcm0gZm9yIGVkaXRpbmcgYW4gZXhpc3RpbmcgcmVjaXBlLCBvciBjcmVhdGluZyBhIG5ldyBvbmVcbiAqIDxydC1yZWNpcGUgcmVjaXBlPVwiZXhpc3RpbmdSZWNpcGVcIlxuICogXHRcdFx0XHRcdFx0Zm9ybWF0PVwiZm9ybVwiPlxuICogPC9ydC1yZWNpcGU+XG4gKiBAc2VlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdmbGFzaCcsXG4gICAgICAnc2x1Z2lmaWVyJyxcbiAgICAgICdmbG93JyxcbiAgICAgICdhbmd1bGFyLXNvcnRhYmxlLXZpZXcnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFN0ZXBcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgZm9yIGRpc3BsYXlpbmcgb3IgZWRpdGluZyBpbmRpdmlkdWFsIGBSVFJlY2lwZWBcbiAqIHJlY2lwZSBzdGVwcyAoZGlyZWN0aW9ucykuXG4gKiBAZXhhbXBsZVxuICogLy8gVG8gZGlzcGxheSBzdGVwIGRhdGEgaW4gYSBjb21wYWN0IGJsb2NrXG4gKiA8cnQtc3RlcCBzdGVwPVwibXlSZWNpcGUuc3RlcHNbMF1cIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LXN0ZXA+XG4gKlxuICogLy8gQXMgZm9ybSBmaWVsZHNcbiAqIDxydC1zdGVwIHN0ZXA9XCJzdGVwXCJcbiAqIFx0XHRcdFx0XHRmb3JtYXQ9XCJmb3JtXCJcbiAqIFx0XHRcdFx0XHRvbi1yZW1vdmU9XCJteUN0cmwucmVtb3ZlU3RlcChzdGVwKVwiPlxuICogPC9ydC1zdGVwPlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBVc2VyTWVudVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSBmb3IgZGlzcGxheWluZyBhIHRvcC1sZXZlbCB1c2VyIG1lbnUgcmVmbGVjdGluZyBhdXRoXG4gKiBzdGF0ZS5cbiAqIEBleGFtcGxlIDxuYXYgdXNlci1tZW51PjwvbmF2PlxuICogQHJlcXVpcmVzIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFJUSW5ncmVkaWVudFxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSBmb3IgZGlzcGxheWluZyBvciBlZGl0aW5nIGluZGl2aWR1YWwgYFJUUmVjaXBlYFxuICogaW5ncmVkaWVudHMuXG4gKiBAZXhhbXBsZVxuICogLy8gVG8gZGlzcGxheSBpbmdyZWRpZW50IGRhdGEgYWxsIGluIG9uZSBsaW5lXG4gKiA8cnQtaW5ncmVkaWVudCBpbmdyZWRpZW50PVwibXlSZWNpcGUuaW5ncmVkaWVudHNbMF1cIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LWluZ3JlZGllbnQ+XG4gKlxuICogLy8gQXMgZm9ybSBmaWVsZHNcbiAqIDxydC1pbmdyZWRpZW50IGluZ3JlZGllbnQ9XCJpbmdyZWRpZW50XCJcbiAqIFx0XHRcdFx0XHRcdFx0XHRmb3JtYXQ9XCJmb3JtXCJcbiAqIFx0XHRcdFx0XHRcdFx0XHRvbi1yZW1vdmU9XCJteUN0cmwucmVtb3ZlSW5ncmVkaWVudChpbmdyZWRpZW50KVwiPlxuICogPC9ydC1pbmdyZWRpZW50PlxuICogQHNlZSBSVFJlY2lwZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIEF1dGhTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgQVBJIGZvciBiYWNrZW5kIGF1dGggZW5kcG9pbnRzIGluIFJlY2lwZSBUb21lLlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlOnNlcnZpY2VcbiAqIEByZXF1aXJlcyBhbmd1bGFyLWp3dCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2FuZ3VsYXItand0fVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gQW4gYG5nUmVzb3VyY2VgIFJFU1Qgc2VydmljZSBmb3IgcmVjaXBlIENSVUQgb3BlcmF0aW9ucy5cbiAqIEByZXF1aXJlcyBuZ1Jlc291cmNlXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZTpzZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnJlY2lwZScsIFtcbiAgICAgICduZ1Jlc291cmNlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFVzZXJTZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgQVBJIGZvciBiYWNrZW5kIHVzZXIgcHJvZmlsZSBlbmRwb2ludC5cbiAqIEBzZWUgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyU2VydmljZTpzZXJ2aWNlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlVG9tZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZX0gYXBwbGljYXRpb24uXG4gKiBAc2VlIFJlY2lwZVRvbWVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBsaWJyYXJpZXMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gZm9yIGRpc3BsYXkgaW4gdGhlIHNpdGUgZm9vdGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLnRlY2hMaXN0ID0gW1xuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICB7IGxpbms6ICdodHRwOi8vcGFzc3BvcnRqcy5vcmcvJywgbmFtZTogJ1Bhc3Nwb3J0LmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgXTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlVG9tZTpyb3V0ZXNcbiAqIEBkZXNjcmlwdGlvbiBSZWNpcGUgVG9tZSByb3V0ZXMgZGVmaW5pdGlvbi5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb25maWcoUm91dGVzQ29uZmlnKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLiR1cmxSb3V0ZXJQcm92aWRlcn0gJHVybFJvdXRlclByb3ZpZGVyXG4gICAqL1xuICBmdW5jdGlvbiBSb3V0ZXNDb25maWcoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9XG4gIFJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgTG9naW46Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIExvZ2lufSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL0xvZ2luXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLnN0YXRlLiRzdGF0ZX0gJHN0YXRlXG4gICAqIEBwYXJhbSB7Zmxhc2guRmxhc2h9IEZsYXNoXG4gICAqIEBwYXJhbSB7UmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZX0gQXV0aFNlcnZpY2VcbiAgICovXG4gIGZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcigkc3RhdGUsIEZsYXNoLCBBdXRoU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiBFbmNyeXB0IHVzZXIgcGFzc3dvcmQgYmVmb3JlIHNlbmRpbmcgdG8gc2VydmVyXG5cbiAgICAvKipcbiAgICAgKiBQcm90b3R5cGUgYFVzZXJgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdm0udXNlciA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdm0ubG9naW5Mb2NhbCA9IGRvTG9jYWxMb2dpbjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHVzZXIgbG9nIGluIHdpdGggbG9jYWwgY3JlZGVudGlhbHMgKGVtYWlsICsgcGFzc3dvcmQpLiBDYWxsaW5nXG4gICAgICogdGhpcyBtZXRob2QgcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZSAncHJvZmlsZScgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0xvY2FsTG9naW4oKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbExvZ2luKHZtLnVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MnKTtcbiAgICAgICAgICAgIEZsYXNoXG4gICAgICAgICAgICAgIC5jcmVhdGUoJ3N1Y2Nlc3MnLCAnTG9naW4gc3VjY2Vzc2Z1bC4nKTtcblxuICAgICAgICAgICAgJHN0YXRlXG4gICAgICAgICAgICAgIC5nbygncHJvZmlsZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcgKyByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICBGbGFzaFxuICAgICAgICAgICAgICAuY3JlYXRlKCdlcnJvcicsIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBMb2dpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIkZsYXNoXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBMb2dpbjpyb3V0ZXNcbiAqIEBkZXNjcmlwdGlvbiBSZWNpcGUgVG9tZSBsb2dpbiB2aWV3IHJvdXRlcy5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0xvZ2luXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJylcbiAgICAgIC5jb25maWcoTG9naW5Sb3V0ZXNDb25maWcpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuJHN0YXRlUHJvdmlkZXJ9ICRzdGF0ZVByb3ZpZGVyXG4gICAqL1xuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgTG9naW5Sb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUHJvZmlsZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUHJvZmlsZX0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDb250cm9sbGVyJywgUHJvZmlsZUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtmbGFzaC5GbGFzaH0gRmxhc2hcbiAgICogQHBhcmFtIHtSZWNpcGV0b21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlfSBVc2VyU2VydmljZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlclxuICAgKi9cbiAgZnVuY3Rpb24gUHJvZmlsZUNvbnRyb2xsZXIoJHN0YXRlLCBGbGFzaCwgVXNlclNlcnZpY2UsIHVzZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvZ2dlZC1pbiB1c2VyLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS51c2VyID0gdXNlcjtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRvIHRoZSB1c2VyJ3MgZ3JhdmF0YXIgYXZhdGFyIFVSSS5cbiAgICAgKi9cbiAgICB2bS5ncmF2YXRhckltYWdlID0gVXNlclNlcnZpY2UuZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKTtcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgdXNlciBwYXNzd29yZChzKSBiZWZvcmUgc2VuZGluZyB0byBzZXJ2ZXJcblxuICAgIC8qKlxuICAgICAqIFByb3RvdHlwZSBjcmVkZW50aWFscyBvYmplY3QgZm9yIHByb2ZpbGUgZWRpdCBmb3JtLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5jcmVkZW50aWFscyA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICAvLyAtLS1cbiAgICB2bS51cGRhdGVDcmVkZW50aWFscyA9IFVzZXJTZXJ2aWNlLnVwZGF0ZUNyZWRlbnRpYWxzO1xuICAgIHZtLmRvVW5yZWdpc3RlciA9IGRvVW5yZWdpc3RlcjtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHJlcXVlc3QgdG8gc2VydmVyIHRvIHVwZGF0ZSB1c2VyIGRhdGEuIENhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKiByZWZyZXNoZXMgdGhlIHZpZXcsIGxvYWRpbmcgdGhlIG5ldyB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY3JlZGVudGlhbHNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIEZsYXNoXG4gICAgICAgICAgICAgICAgLmNyZWF0ZSgnc3VjY2VzcycsICdDcmVkZW50aWFscyB1cGRhdGVkLicpO1xuXG4gICAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAgIC5nbygncHJvZmlsZScsIHt9LCB7IHJlZnJlc2g6IHRydWUsIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgRmxhc2hcbiAgICAgICAgICAgICAgICAuY3JlYXRlKCdlcnJvcicsIHJlc3VsdC5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSByZXF1ZXN0IHRvIHNlcnZlciB0byBkZWxldGUgdGhlIHVzZXIsIHRoZSB1c2VyJ3MgcmVjaXBlcyBhbmRcbiAgICAgKiB1cGxvYWRzLCBhbmQgcmV2b2tlIGFwaSBhY2Nlc3MuIENhbGxpbmcgdGhpcyBtZXRob2QgcmVkaXJlY3RzIHRoZSB1c2VyXG4gICAgICogdG8gdGhlICd3ZWxjb21lJyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvVW5yZWdpc3RlcigpIHtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC51bnJlZ2lzdGVyKClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBGbGFzaFxuICAgICAgICAgICAgICAuY3JlYXRlKCdzdWNjZXNzJywgJ1VucmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwuJyk7XG5cbiAgICAgICAgICAgICRzdGF0ZVxuICAgICAgICAgICAgICAuZ28oJ3dlbGNvbWUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRmxhc2hcbiAgICAgICAgICAgICAgLmNyZWF0ZSgnZXJyb3InLCByZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgUHJvZmlsZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIkZsYXNoXCIsIFwiVXNlclNlcnZpY2VcIiwgXCJ1c2VyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUHJvZmlsZTpyb3V0ZXNcbiAqIEBkZXNjcmlwdGlvbiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgcm91dGVzLlxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb25maWcoUHJvZmlsZVJvdXRlc0NvbmZpZyk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci4kc3RhdGVQcm92aWRlcn0gJHN0YXRlUHJvdmlkZXJcbiAgICovXG4gIGZ1bmN0aW9uIFByb2ZpbGVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB1c2VyOiBbXCJVc2VyU2VydmljZVwiLCBmdW5jdGlvbihVc2VyU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgUHJvZmlsZVJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVzOkxpc3Q6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6TGlzdH0gdmlldy5cbiAqIEBzZWUgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsIFJlY2lwZXNMaXN0Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWNpcGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNhdGVnb3JpZXNcbiAgICovXG4gIGZ1bmN0aW9uIFJlY2lwZXNMaXN0Q29udHJvbGxlcihyZWNpcGVzLCBjYXRlZ29yaWVzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgdXNlcidzIHJlY2lwZXMsIHJlc29sdmVkIGZyb20gJHN0YXRlUHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0W119XG4gICAgICovXG4gICAgdm0ucmVjaXBlcyA9IHJlY2lwZXM7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdW5pcXVlIGNhdGVnb3JpZXMgdXNlZCBpbiB1c2VyJ3MgcmVjaXBlcywgcmVzb2x2ZWQgZnJvbVxuICAgICAqICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdFtdfVxuICAgICAqL1xuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudGx5IHNlbGVjdGVkIGNhdGVnb3J5IGZpbHRlciwgYnkgdGhlIGBzbHVnYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdm0uY2F0ZWdvcnlGaWx0ZXIgPSAnJztcbiAgfVxuICBSZWNpcGVzTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZXNcIiwgXCJjYXRlZ29yaWVzXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUmVjaXBlczpTaW5nbGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJlY2lwZXM6U2luZ2xlfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXNcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc1ZpZXdDb250cm9sbGVyJywgUmVjaXBlc1ZpZXdDb250cm9sbGVyKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWNpcGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdFxuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlc1ZpZXdDb250cm9sbGVyKHJlY2lwZSwgZm9ybWF0KSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgcmVjaXBlLCByZXNvbHZlZCBmcm9tICRzdGF0ZVByb3ZpZGVyLlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdG8gc2hvdyB0aGUgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHNlZSB7QGxpbmtjb2RlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZX0gZm9yIHBvc3NpYmxlIGZvcm1hdHMuXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB2bS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbiAgUmVjaXBlc1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbXCJyZWNpcGVcIiwgXCJmb3JtYXRcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVzOnJvdXRlc1xuICogQGRlc2NyaXB0aW9uIFJlY2lwZSBUb21lIHJlY2lwZXMgdmlldyByb3V0ZXMuXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7dWkucm91dGVyLiRzdGF0ZVByb3ZpZGVyfSAkc3RhdGVQcm92aWRlclxuICAgKiBAcGFyYW0ge3VpLnJvdXRlci4kdXJsUm91dGVyUHJvdmlkZXJ9ICR1cmxSb3V0ZXJQcm92aWRlclxuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlc1JvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC8vIEFic3RyYWN0IHBhcmVudCBzdGF0ZVxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuXFx0PG1haW4gdWktdmlldz5cXG5cXHQ8L21haW4+XFxuPC9kaXY+JyxcbiAgICAgIH0pXG4gICAgICAvLyBSZWNpcGVzIGxpc3RcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5saXN0Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1saXN0LnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzTGlzdENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGVzOiBbXCJSZWNpcGVTZXJ2aWNlXCIsIGZ1bmN0aW9uKFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLnF1ZXJ5KCkuJHByb21pc2U7XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgY2F0ZWdvcmllczogW1wiJGh0dHBcIiwgXCIkd2luZG93XCIsIGZ1bmN0aW9uKCRodHRwLCAkd2luZG93KSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXIvY2F0ZWdvcmllcycsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFt7IHNsdWc6ICcnLCBsYWJlbDogJycsIH1dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLy8gUmVjaXBlcyBzaW5nbGUgdmlld1xuICAgICAgLnN0YXRlKCdyZWNpcGVzLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBbXCIkc3RhdGVQYXJhbXNcIiwgXCJSZWNpcGVTZXJ2aWNlXCIsIGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UuZ2V0KHsgcmVjaXBlSWQ6ICRzdGF0ZVBhcmFtcy5yZWNpcGVJZCwgfSkuJHByb21pc2U7XG4gICAgICAgICAgfV0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZnVsbCc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAvLyBSZWNpcGVzIGVkaXQgdmlld1xuICAgICAgLnN0YXRlKCdyZWNpcGVzLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkL2VkaXQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC8vIFJlY2lwZXMgY3JlYXRlIHZpZXdcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbmdyZWRpZW50czogW10sIHN0ZXBzOiBbXSwgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuICBSZWNpcGVzUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFNpZ251cDpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9TaWdudXB9IHZpZXcuXG4gKiBAc2VlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWdudXBcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb250cm9sbGVyKCdTaWduVXBDb250cm9sbGVyJywgU2lnblVwQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge2ZsYXNoLkZsYXNofSBGbGFzaFxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvQXV0aFNlcnZpY2V9IEF1dGhTZXJ2aWNlXG4gICAqL1xuICBmdW5jdGlvbiBTaWduVXBDb250cm9sbGVyKCRzdGF0ZSwgRmxhc2gsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8vIFRPRE86IEVuY3J5cHQgcGFzc3dvcmQgYmVmb3JlIHNlbmRpbmcgdG8gc2VydmVyXG5cbiAgICAvKipcbiAgICAgKiBQcm90b3R5cGUgYFVzZXJgIG9iamVjdCBmb3Igc2lnbnVwIGZvcm0uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLnVzZXIgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfTtcblxuICAgIC8vIC0tLVxuICAgIHZtLnJlZ2lzdGVyTG9jYWwgPSBkb0xvY2FsUmVnaXN0cmF0aW9uO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgcmVxdWVzdCB0byBzZXJ2ZXIgZm9yIHVzZXIgcmVnaXN0cmF0aW9uLiBDYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAgICogcmVkaXJlY3RzIHRoZSB1c2VyIHRvIHRoZSAncHJvZmlsZScgdmlldy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLmRvTG9jYWxSZWdpc3RyYXRpb24odm0udXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBGbGFzaFxuICAgICAgICAgICAgICAuY3JlYXRlKCdzdWNjZXNzJywgJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLicpO1xuXG4gICAgICAgICAgICAkc3RhdGVcbiAgICAgICAgICAgICAgLmdvKCdwcm9maWxlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEZsYXNoXG4gICAgICAgICAgICAgIC5jcmVhdGUoJ2Vycm9yJywgcmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFNpZ25VcENvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIkZsYXNoXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBTaWdudXA6cm91dGVzXG4gKiBAZGVzY3JpcHRpb24gUmVjaXBlIFRvbWUgc2lnbnVwIHZpZXcgcm91dGVzLlxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnbnVwXG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29uZmlnKFNpZ25VcFJvdXRlc0NvbmZpZyk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge3VpLnJvdXRlci4kc3RhdGVQcm92aWRlcn0gJHN0YXRlUHJvdmlkZXJcbiAgICovXG4gIGZ1bmN0aW9uIFNpZ25VcFJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ251cC9zaWdudXAudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25VcENvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBTaWduVXBSb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgV2VsY29tZTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgUmVjaXBlVG9tZS9XZWxjb21lfSB2aWV3LlxuICogQHNlZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29udHJvbGxlcignV2VsY29tZUNvbnRyb2xsZXInLCBXZWxjb21lQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gV2VsY29tZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEdyZWV0aW5nIGluZm8gdG8gZGlzcGxheSB0byBhbm9ueW1vdXMgdXNlcnMuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZtLmdyZWV0aW5nID0ge1xuICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICBsZWFkOiAnUmVjaXBlIFRvbWUgbGV0XFwncyB5b3UgY3JlYXRlIGFuZCBtYW5hZ2UgcmVjaXBlcy4nLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFdlbGNvbWU6cm91dGVzXG4gKiBAZGVzY3JpcHRpb24gUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlcy5cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuJHN0YXRlUHJvdmlkZXJ9ICRzdGF0ZVByb3ZpZGVyXG4gICAqL1xuICBmdW5jdGlvbiBXZWxjb21lUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnd2VsY29tZScsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dlbGNvbWUvd2VsY29tZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnV2VsY29tZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KTtcbiAgfVxuICBXZWxjb21lUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIElucHV0TWF0Y2g6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgaW5wdXRNYXRjaGA6IFRoZSBmb3JtIG1vZGVsIHRvIG1hdGNoIGFnYWluc3QuIChyZXF1aXJlZClcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmlucHV0TWF0Y2gnKVxuICAgICAgLmRpcmVjdGl2ZSgnaW5wdXRNYXRjaCcsIElucHV0TWF0Y2gpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIElucHV0TWF0Y2goKSB7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGlucHV0TWF0Y2g6ICc9JyxcbiAgICAgIH0sXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLm5nTW9kZWx9IG5nTW9kZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgLy8gRG9uJ3QgbGluayBpZiBub3RoaW5nIHNwZWNpZmllZCB0byBtYXRjaFxuICAgICAgaWYgKCFzY29wZS5pbnB1dE1hdGNoKSB7IHJldHVybjsgfVxuXG4gICAgICAvKipcbiAgICAgICAqIG5nTW9kZWwgUGFyc2VyL0Zvcm1hdHRlciBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gICAgICAgKlxuICAgICAgICogQHJldHVybiB7Kn0gVGhlIHBhc3NlZCBpbiB2YWx1ZSAobm8gZm9ybWF0dGluZyBwZXJmb3JtZWQpXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQodmFsdWUpIHtcbiAgICAgICAgaWYgKG5nTW9kZWwuJHVudG91Y2hlZCB8fCBuZ01vZGVsLiRwcmlzdGluZSkgeyByZXR1cm47IH1cblxuICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSBzY29wZS5pbnB1dE1hdGNoLiR2aWV3VmFsdWU7XG4gICAgICAgIHZhciBpc01hdGNoID0gQm9vbGVhbih2YWx1ZSA9PT0gdGFyZ2V0VmFsdWUpO1xuXG4gICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdpbnB1dE1hdGNoJywgaXNNYXRjaCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG4gICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVE1hc29ucnk6SXRlbTpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGBydFRhZ2A6IEEgdGFnIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBtdWx0aXBsZSBtYXNvbnJ5IGxheW91dHMgKG9wdGlvbmFsKVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRNYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLm1hc29ucnknKVxuICAgICAgLmRpcmVjdGl2ZSgncnRNYXNvbnJ5SXRlbScsIFJUTWFzb25yeUl0ZW0pO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHthbmd1bGFyLiR0aW1lb3V0fSAkdGltZW91dFxuICAgKi9cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5SXRlbSgkdGltZW91dCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGpRTGl0ZSAucmVhZHkoKSB0byBlbnN1cmUgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICAgICAgZWxlbWVudC5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZVxuICAgICAgICAgICAgLiRlbWl0KGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFJUTWFzb25yeUl0ZW0uJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xuICBcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVE1hc29ucnk6U3RhbXA6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgcnRUYWdgOiBBIHRhZyB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbXVsdGlwbGUgbWFzb25yeSBsYXlvdXRzIChvcHRpb25hbClcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeVN0YW1wJywgUlRNYXNvbnJ5U3RhbXApO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHthbmd1bGFyLiR0aW1lb3V0fSAkdGltZW91dFxuICAgKi9cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5U3RhbXAoJHRpbWVvdXQpIHtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIExpbmsgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLiRzY29wZX0gc2NvcGVcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBXYWl0IGZvciBqUUxpdGUgLnJlYWR5KCkgdG8gZW5zdXJlIGltYWdlcyBhcmUgbG9hZGVkXG4gICAgICAgIGVsZW1lbnQucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2NvcGVcbiAgICAgICAgICAgIC4kZW1pdChhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFJUTWFzb25yeVN0YW1wLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbiAgXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRNYXNvbnJ5OmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYHJ0VGFnYDogQSB0YWcgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIG11bHRpcGxlIG1hc29ucnkgbGF5b3V0cyAob3B0aW9uYWwpXG4gKiAtIGBydFdhdGNoYDogU3BlY2lmaWVzIGEgbW9kZWwgdG8gd2F0Y2ggYW5kIHBlcmZvcm0gbGF5b3V0IG9uIGNoYW5nZXMuIChvcHRpb25hbClcbiAqIC0gYG9uUmVtb3ZlYDogQ2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSAncmVtb3ZlJyBidXR0b24gaXMgY2xpY2tlZC4gKGBmb3JtYCBmb3JtYXQgb25seSlcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUTWFzb25yeVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVE1hc29ucnlcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0TWFzb25yeScsIFJUTWFzb25yeSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJHRpbWVvdXR9ICR0aW1lb3V0XG4gICAqL1xuICBmdW5jdGlvbiBSVE1hc29ucnkoJHRpbWVvdXQpIHtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIExpbmsgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLiRzY29wZX0gc2NvcGVcbiAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgICAgLyoqXG4gICAgICAgKiBNYXNvbnJ5IG9wdGlvbnNcbiAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgKi9cbiAgICAgIHZhciBvcHRpb25zID0geyBpdGVtU2VsZWN0b3I6ICdbcnQtbWFzb25yeS1pdGVtXScsIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFzb25yeSBpbnN0YW5jZVxuICAgICAgICovXG4gICAgICB2YXIgbWFzb25yeTtcblxuICAgICAgLyoqXG4gICAgICAgKiBLZWVwcyB0cmFjayBvZiBtYXNvbnJ5IGl0ZW0gZGlydHkgc3RhdGUuXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgdmFyIGRpcnR5ID0gdHJ1ZTtcblxuICAgICAgLy8gT24gbmV4dCBkaWdlc3QgY3ljbGUsIGNyZWF0ZSBNYXNvbnJ5IGluc3RhbmNlXG4gICAgICAkdGltZW91dChvbkNvbnRhaW5lclJlYWR5KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIHRoZSBNYXNvbnJ5IGluc3RhbmNlLCBsaXN0ZW5zIGZvciBSVE1hc29ucnkgZXZlbnRzIGFuZCB3YXRjaGVzXG4gICAgICAgKiB0aGUgc3BlY2lmaWVkIGl0ZW1zIGNvbGxlY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uQ29udGFpbmVyUmVhZHkoKSB7XG4gICAgICAgIG1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtZW50WzBdLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIFJUTWFzb25yeSBldmVudHNcbiAgICAgICAgc2NvcGUuJG9uKGF0dHJzLnJ0VGFnIHx8ICdtYXNvbnJ5LWl0ZW0tYWRkZWQnLCBvbkl0ZW1BZGRlZCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggdGhlIGl0ZW1zIGNvbGxlY3Rpb25cbiAgICAgICAgaWYgKGF0dHJzLnJ0V2F0Y2gpIHtcbiAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMucnRXYXRjaCArICcnLCBvbkl0ZW1zQ2hhbmdlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIGl0ZW1zIGFkZGVkIHRvIHRoZSBsYXlvdXRcbiAgICAgICAqXG4gICAgICAgKiBAY2FsbGJhY2tcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gIGV2ZW50XG4gICAgICAgKiBAcGFyYW0gIHthbmd1bGFyLmVsZW1lbnR9ICBpdGVtXG4gICAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBpc1N0YW1wIGB0cnVlYCBpZiBpdGVtIGlzIGluc3RhbmNlIG9mIHJ0U3RhbXAgZGlyZWN0aXZlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uSXRlbUFkZGVkKGV2ZW50LCBpdGVtLCBpc1N0YW1wKSB7XG4gICAgICAgIGlmIChpc1N0YW1wKSB7XG4gICAgICAgICAgbWFzb25yeS5zdGFtcChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgcmVsb2FkSXRlbXMoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIGNoYW5nZXMgaW4gdGhlIGl0ZW1zIGNvbGxlY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uSXRlbXNDaGFuZ2VkKGl0ZW1zKSB7XG4gICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgcmVsb2FkSXRlbXMoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZWxvYWRzIGl0ZW1zIGFuZCBwZXJmb3JtcyBsYXlvdXQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlbG9hZEl0ZW1zKCkge1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgIG1hc29ucnkucmVsb2FkSXRlbXMoKTtcbiAgICAgICAgICAgIG1hc29ucnkubGF5b3V0KCk7XG5cbiAgICAgICAgICAgIGRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgUlRNYXNvbnJ5LiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbiAgXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRSZWNpcGU6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUUmVjaXBlfSBkaXJlY3RpdmUuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFJlY2lwZVxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUUmVjaXBlQ29udHJvbGxlcicsIFJUUmVjaXBlQ29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge3VpLnJvdXRlci5zdGF0ZS4kc3RhdGV9ICRzdGF0ZVxuICAgKiBAcGFyYW0ge2ZsYXNoLkZsYXNofSBGbGFzaFxuICAgKiBAcGFyYW0ge1JlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZX0gUmVjaXBlU2VydmljZVxuICAgKiBAcGFyYW0ge3NsdWdpZmllcn0gU2x1Z1xuICAgKi9cbiAgZnVuY3Rpb24gUlRSZWNpcGVDb250cm9sbGVyKCRzdGF0ZSwgRmxhc2gsIFJlY2lwZVNlcnZpY2UsIFNsdWcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQ29uZmlnIGZvciBgcmF0aW5nYCBmb3JtIGNvbnRyb2wuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2bS5yYXRpbmcgPSB7IG1heDogNSwgfTtcblxuICAgIC8vIC0tLVxuICAgIHZtLmdldFRodW1ibmFpbCA9IGdldFRodW1ibmFpbDtcbiAgICB2bS5vblBpY3R1cmVVcGxvYWQgPSBvblBpY3R1cmVVcGxvYWQ7XG4gICAgdm0uZ2VuZXJhdGVDYXRlZ29yeVNsdWcgPSBnZW5lcmF0ZUNhdGVnb3J5U2x1ZztcbiAgICB2bS5hZGRJbmdyZWRpZW50ID0gYWRkSW5ncmVkaWVudDtcbiAgICB2bS5vbkluZ3JlZGllbnRSZW9yZGVyID0gb25JbmdyZWRpZW50UmVvcmRlcjtcbiAgICB2bS5yZW1vdmVJbmdyZWRpZW50ID0gcmVtb3ZlSW5ncmVkaWVudDtcbiAgICB2bS5hZGRTdGVwID0gYWRkU3RlcDtcbiAgICB2bS5vblN0ZXBSZW9yZGVyID0gb25TdGVwUmVvcmRlcjtcbiAgICB2bS5yZW1vdmVTdGVwID0gcmVtb3ZlU3RlcDtcbiAgICB2bS5zYXZlUmVjaXBlID0gc2F2ZVJlY2lwZTtcbiAgICB2bS5kZWxldGVSZWNpcGUgPSBkZWxldGVSZWNpcGU7XG4gICAgLy8gLS0tXG5cbiAgICAvLyBUT0RPOiBTYXZlIGZvcm0gZmllbGRzIGluIHNlc3Npb25TdG9yYWdlIHRvIHBlcnNpc3QgdGhyb3VnaCByZWZyZXNoXG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjaXBlIHRodW1ibmFpbCBVUkkgb3IgZGVmYXVsdCBpbWFnZSBVUkkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlY2lwZSB0aHVtYm5haWwsIG9yIGRlZmF1bHQgaW1hZ2UgVVJJXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0VGh1bWJuYWlsKCkge1xuICAgICAgaWYgKCF2bS5yZWNpcGUgfHwgIXZtLnJlY2lwZS50aHVtYm5haWwpIHtcbiAgICAgICAgcmV0dXJuICdhc3NldC9pbWcvcmVjaXBlLWltYWdlLXBsYWNlaG9sZGVyLTM2MHgyNDAucG5nJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtLnJlY2lwZS50aHVtYm5haWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbmctZmxvdyB1cGxvYWQgc3VjY2VzcyBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge0Zsb3dGaWxlfSBmaWxlXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEBwYXJhbSAge0Zsb3d9IGZsb3dcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblBpY3R1cmVVcGxvYWQoZmlsZSwgcmVzcG9uc2UsIGZsb3cpIHtcbiAgICAgIHZtLnJlY2lwZS50aHVtYm5haWwgPSBKU09OLnBhcnNlKHJlc3BvbnNlKS5waG90by51cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzbHVnaWZpZWQgY2F0ZWdvcnkgbGFiZWwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yeVNsdWcoKSB7XG4gICAgICB2bS5yZWNpcGUuY2F0ZWdvcnkuc2x1ZyA9IFNsdWcuc2x1Z2lmeSh2bS5yZWNpcGUuY2F0ZWdvcnkubGFiZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBpbmdyZWRpZW50IG9iamVjdCB0byB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5ncmVkaWVudCgpIHtcbiAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWduIG5ldyBvcmRlciB2YWx1ZXMgdG8gZXZlcnkgaW5ncmVkaWVudC4gQ2FsbCB3aGVuIGFueSBpbmdyZWRpZW50XG4gICAgICogaXMgcmVvcmRlcmVkLlxuICAgICAqXG4gICAgICogQGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25JbmdyZWRpZW50UmVvcmRlcigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2bS5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzW2ldLm9yZGVyID0gaSArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBzcGVjaWZpZWQgaW5ncmVkaWVudCBmcm9tIHRoZSBjdXJyZW50IHJlY2lwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gaW5ncmVkaWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUluZ3JlZGllbnQoaW5ncmVkaWVudCkge1xuICAgICAgdmFyIGluZGV4ID0gdm0ucmVjaXBlLmluZ3JlZGllbnRzLmluZGV4T2YoaW5ncmVkaWVudCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBpbmdyZWRpZW50IG9iamVjdCB0byB0aGUgY3VycmVudCByZWNpcGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkU3RlcCgpIHtcbiAgICAgIHZtLnJlY2lwZS5zdGVwcy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5zdGVwcy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzaWduIG5ldyBvcmRlciB2YWx1ZXMgdG8gZXZlcnkgcmVjaXBlIHN0ZXAuIENhbGwgd2hlbiBhbnkgc3RlcFxuICAgICAqIGlzIHJlb3JkZXJlZC5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uU3RlcFJlb3JkZXIoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZtLnJlY2lwZS5zdGVwc1tpXS5vcmRlciA9IGkgKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0aGUgc3BlY2lmaWVkIHJlY2lwZSBzdGVwIGZyb20gdGhlIGN1cnJlbnQgcmVjaXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBzdGVwXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RlcChzdGVwKSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLnN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyc2lzdCB0aGUgY3VycmVudCByZWNpcGUgdG8gdGhlIHNlcnZlci4gVGhpcyByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlXG4gICAgICogJ3NpbmdsZScgcmVjaXBlcyB2aWV3LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNhdmVSZWNpcGUoKSB7XG4gICAgICBpZiAodm0ucmVjaXBlLl9pZCkge1xuICAgICAgICAvLyBSZWNpcGUgZXhpc3RzIGluIHRoZSBkYXRhYmFzZSwgc28gZG8gdXBkYXRlXG4gICAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgICAudXBkYXRlKFxuICAgICAgICAgICAgeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSxcbiAgICAgICAgICAgIHZtLnJlY2lwZSxcbiAgICAgICAgICAgIG9uU2F2ZVJlY2lwZVN1Y2Nlc3MsXG4gICAgICAgICAgICBvblNhdmVSZWNpcGVFcnJvclxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOZXcgcmVjaXBlLCBkbyBzYXZlXG4gICAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgICAuc2F2ZSh2bS5yZWNpcGUsIG9uU2F2ZVJlY2lwZVN1Y2Nlc3MsIG9uU2F2ZVJlY2lwZUVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIHN1Y2Nlc3NmdWwgcmVjaXBlIHVwZGF0ZSBvciBzYXZlLlxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSByZWNpcGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25TYXZlUmVjaXBlU3VjY2VzcyhyZWNpcGUpIHtcbiAgICAgICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgICAgIEZsYXNoXG4gICAgICAgICAgLmNyZWF0ZSgnc3VjY2VzcycsICdSZWNpcGUgc2F2ZWQuJyk7XG4gICAgICAgICRzdGF0ZVxuICAgICAgICAgIC5nbygnXi52aWV3JywgeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlcyBmYWlsZWQgcmVjaXBlIHVwZGF0ZSBvciBzYXZlLlxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvblNhdmVSZWNpcGVFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBGbGFzaFxuICAgICAgICAgIC5jcmVhdGUoJ2Vycm9yJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSByZWNpcGUgZnJvbSB0aGUgZGF0YWJhc2UuIENhbGxpbmcgdGhpcyByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlXG4gICAgICogJ2xpc3QnIHJlY2lwZXMgdmlld1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlY2lwZSgpIHtcbiAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgLnJlbW92ZShcbiAgICAgICAgICB7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LFxuICAgICAgICAgIG9uRGVsZXRlUmVjaXBlU3VjY2VzcyxcbiAgICAgICAgICBvbkRlbGV0ZVJlY2lwZUVycm9yXG4gICAgICAgICk7XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlcyBzdWNjZXNzZnVsIHJlY2lwZSBkZWxldGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAY2FsbGJhY2tcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25EZWxldGVSZWNpcGVTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE86IFNhdmUgcmVjaXBlIHRvIHNlc3Npb24gc3RvcmFnZSwgcHJvdmlkZSB1bmRvIG9wdGlvblxuXG4gICAgICAgIEZsYXNoXG4gICAgICAgICAgLmNyZWF0ZSgnc3VjY2VzcycsICdSZWNpcGUgZGVsZXRlZC4nKTtcblxuICAgICAgICAkc3RhdGVcbiAgICAgICAgICAuZ28oJ14ubGlzdCcpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgZmFpbGVkIHJlY2lwZSBkZWxldGlvbi5cbiAgICAgICAqXG4gICAgICAgKiBAY2FsbGJhY2tcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25EZWxldGVSZWNpcGVFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBGbGFzaFxuICAgICAgICAgIC5jcmVhdGUoJ2Vycm9yJywgcmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBSVFJlY2lwZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIkZsYXNoXCIsIFwiUmVjaXBlU2VydmljZVwiLCBcIlNsdWdcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVFJlY2lwZTpkaXJlY3RpdmVcbiAqIEBkZXNjcmlwdGlvbiBEaXJlY3RpdmUgcmVjb2duaXplcyB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKiAtIGByZWNpcGVgOiBBIHJlY2lwZSBvYmplY3QuIChyZXF1aXJlZClcbiAqIC0gYGZvcm1hdGA6IFNwZWNpZmllcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byByZW5kZXIuIFZhbGlkIGZvcm1hdHMgYXJlIGBjYXJkYFxuICogXHQgYGZ1bGxgLCBvciBgZm9ybWAuIChvcHRpb25hbCwgZGVmYXVsdDogJ2NhcmQnKVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRSZWNpcGUoKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFJlY2lwZUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgcmVjaXBlOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRSZWNpcGU6Y29udHJvbGxlcn0gdm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcblxuICAgICAgLy8gLS0tXG4gICAgICBpZiAoYXR0cnMuZm9ybWF0ID09PSBGT1JNQVRfRk9STSAmJiAhc2NvcGUucmVjaXBlLl9pZCkge1xuICAgICAgICAvLyBOZXcgcmVjaXBlXG4gICAgICAgIHZtLnRpdGxlID0gJ05ldyBSZWNpcGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhpc3RpbmcgcmVjaXBlXG4gICAgICAgIHZtLnRpdGxlID0gJ0VkaXQgUmVjaXBlJztcbiAgICAgIH1cblxuICAgICAgdm0ucmVjaXBlID0gc2NvcGUucmVjaXBlO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgLy8gLS0tXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCAnZm9ybWF0Jy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZW1wbGF0ZSBmaWxlIFVSTFxuICAgICAgICovXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRTdGVwOmNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBDb250cm9sbGVyIGZvciB0aGUge0BsaW5rY29kZSBSVFN0ZXB9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVFN0ZXBcbiAqXG4gKiBAYXV0aG9yIFJpY2hhcmQgQ2FybHMgW3JpY2hhcmQuai5jYXJsc0BnbWFpbC5jb21dXG4gKiBAY29weXJpZ2h0IDIwMTUgUmljaGFyZCBDYXJsc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcpXG4gICAgICAuY29udHJvbGxlcignUlRTdGVwQ29udHJvbGxlcicsIFJUU3RlcENvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFJUU3RlcENvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgUlRTdGVwOmRpcmVjdGl2ZVxuICogQGRlc2NyaXB0aW9uIERpcmVjdGl2ZSByZWNvZ25pemVzIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqIC0gYHN0ZXBgOiBBbiBSVFJlY2lwZSByZWNpcGUgc3RlcCBvYmplY3QuIChyZXF1aXJlZClcbiAqIC0gYGZvcm1hdGA6IFNwZWNpZmllcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byByZW5kZXIuIFZhbGlkIGZvcm1hdHMgYXJlIGBpbmxpbmVgXG4gKiBcdCBvciBgZm9ybWAuIChvcHRpb25hbCwgZGVmYXVsdDogJ2lubGluZScpXG4gKiAtIGBvblJlbW92ZWA6IENhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgJ3JlbW92ZScgYnV0dG9uIGlzIGNsaWNrZWQuIElmIG5vXG4gKiAgIGNhbGxiYWNrIGlzIHNldCwgdGhlIHJlbW92ZSBidXR0b24gaXMgbm90IHNob3duLiAob3B0aW9uYWwsIGBmb3JtYCBvbmx5KVxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRTdGVwXG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUU3RlcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRTdGVwJywgUlRTdGVwKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuICBmdW5jdGlvbiBSVFN0ZXAoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIC8vIC0tLVxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFN0ZXBDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHN0ZXA6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtICB7YW5ndWxhci4kc2NvcGV9IHNjb3BlXG4gICAgICogQHBhcmFtICB7YW5ndWxhci5lbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRyc1xuICAgICAqIEBwYXJhbSAge1JlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnQ6Y29udHJvbGxlcn0gdm1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcblxuICAgICAgLy8gLS0tXG4gICAgICB2bS5zdGVwID0gc2NvcGUuc3RlcDtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG4gICAgICAvLyAtLS1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSBIVE1MIHRlbXBsYXRlIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkICdmb3JtYXQnLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRlbXBsYXRlIGZpbGUgVVJMXG4gICAgICAgKi9cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9JTkxJTkU6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtYmxvY2sudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBVc2VyTWVudTpjb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gQ29udHJvbGxlciBmb3IgdGhlIHtAbGlua2NvZGUgVXNlck1lbnV9IGRpcmVjdGl2ZS5cbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKlxuICogQGF1dGhvciBSaWNoYXJkIENhcmxzIFtyaWNoYXJkLmouY2FybHNAZ21haWwuY29tXVxuICogQGNvcHlyaWdodCAyMDE1IFJpY2hhcmQgQ2FybHNcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5jb250cm9sbGVyKCdVc2VyTWVudUNvbnRyb2xsZXInLCBVc2VyTWVudUNvbnRyb2xsZXIpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHt1aS5yb3V0ZXIuc3RhdGUuJHN0YXRlfSAkc3RhdGVcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlfSBVc2VyU2VydmljZVxuICAgKi9cbiAgZnVuY3Rpb24gVXNlck1lbnVDb250cm9sbGVyKCRzdGF0ZSwgVXNlclNlcnZpY2UpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLy8gLS0tXG4gICAgdm0uaXNMb2dnZWRJbiA9IFVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XG4gICAgdm0ubG9nb3V0ID0gbG9nb3V0O1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgdXNlciBsb2cgb3V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gICAgICAgIC5sb2dvdXQoKTtcblxuICAgICAgJHN0YXRlXG4gICAgICAgIC5nbygnd2VsY29tZScpO1xuICAgIH1cbiAgfVxuICBVc2VyTWVudUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzdGF0ZVwiLCBcIlVzZXJTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQG5hbWUgVXNlck1lbnU6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIGZvciBVc2VyTWVudSBjb21wb25lbnQuXG4gKiBAc2VlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5kaXJlY3RpdmUoJ3VzZXJNZW51JywgVXNlck1lbnUpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG4gIGZ1bmN0aW9uIFVzZXJNZW51KCkge1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1VzZXJNZW51Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51LnRlbXBsYXRlLmh0bWwnLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVEluZ3JlZGllbnQ6Y29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIENvbnRyb2xsZXIgZm9yIHRoZSB7QGxpbmtjb2RlIFJUSW5ncmVkaWVudH0gZGlyZWN0aXZlLlxuICogQHNlZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICpcbiAqIEBhdXRob3IgUmljaGFyZCBDYXJscyBbcmljaGFyZC5qLmNhcmxzQGdtYWlsLmNvbV1cbiAqIEBjb3B5cmlnaHQgMjAxNSBSaWNoYXJkIENhcmxzXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5jb250cm9sbGVyKCdSVEluZ3JlZGllbnRDb250cm9sbGVyJywgUlRJbmdyZWRpZW50Q29udHJvbGxlcik7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50Q29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSVEluZ3JlZGllbnQ6ZGlyZWN0aXZlXG4gKiBAZGVzY3JpcHRpb24gRGlyZWN0aXZlIHJlY29nbml6ZXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICogLSBgaW5ncmVkaWVudGA6IEFuIFJUUmVjaXBlIGluZ3JlZGllbnQgb2JqZWN0LiAocmVxdWlyZWQpXG4gKiAtIGBmb3JtYXRgOiBTcGVjaWZpZXMgdGhlIEhUTUwgdGVtcGxhdGUgdG8gcmVuZGVyLiBWYWxpZCBmb3JtYXRzIGFyZSBgaW5saW5lYFxuICogXHQgb3IgYGZvcm1gLiAob3B0aW9uYWwsIGRlZmF1bHQ6ICdpbmxpbmUnKVxuICogLSBgb25SZW1vdmVgOiBDYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlICdyZW1vdmUnIGJ1dHRvbiBpcyBjbGlja2VkLiBJZiBub1xuICogICBjYWxsYmFjayBpcyBzZXQsIHRoZSByZW1vdmUgYnV0dG9uIGlzIG5vdCBzaG93bi4gKG9wdGlvbmFsLCBgZm9ybWAgb25seSlcbiAqIEBzZWUgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JUSW5ncmVkaWVudFxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SVEluZ3JlZGllbnRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0SW5ncmVkaWVudCcsIFJUSW5ncmVkaWVudCk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50KCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICAvLyAtLS1cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRJbmdyZWRpZW50Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbmdyZWRpZW50OiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIC8vIC0tLVxuXG4gICAgLyoqXG4gICAgICogTGluayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuJHNjb3BlfSBzY29wZVxuICAgICAqIEBwYXJhbSAge2FuZ3VsYXIuZWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gYXR0cnNcbiAgICAgKiBAcGFyYW0gIHtSZWNpcGVUb21lL0NvbXBvbmVudHMvUlRJbmdyZWRpZW50OmNvbnRyb2xsZXJ9IHZtXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG5cbiAgICAgIC8vIC0tLVxuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0uaW5ncmVkaWVudCA9IHNjb3BlLmluZ3JlZGllbnQ7XG4gICAgICB2bS5vblJlbW92ZSA9IHNjb3BlLm9uUmVtb3ZlO1xuICAgICAgLy8gLS0tXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgSFRNTCB0ZW1wbGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNwZWNpZmllZCAnZm9ybWF0Jy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB0ZW1wbGF0ZSBmaWxlIFVSTFxuICAgICAgICovXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfSU5MSU5FOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtaW5saW5lLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1pbmxpbmUudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBBdXRoU2VydmljZTpzZXJ2aWNlXG4gKiBAZGVzY3JpcHRpb24gU2VydmljZSBkZWZpbml0aW9uIGZvciBBdXRoU2VydmljZS4gUHJvdmlkZXMgbWV0aG9kcyB0byBpbnRlcmFjdFxuICogd2l0aCBiYWNrZW5kIGF1dGggZW5kcG9pbnRzIGFuZCBmYWNpbGl0YXRlIHRoZSBncmFudGluZyBhbmQgcmV2b2tpbmcgb2YgYXBpXG4gKiBhY2Nlc3Mgd2l0aCBKV1QgaWQgdG9rZW5zLlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgYW5ndWxhci1qd3Qge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9hdXRoMC9hbmd1bGFyLWp3dH1cbiAqIEBzaW5jZSAwLjEuMFxuICpcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnKVxuICAgICAgLmZhY3RvcnkoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICogQHBhcmFtIHthbmd1bGFyLiRodHRwfSAkaHR0cFxuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJHdpbmRvd30gJHdpbmRvd1xuICAgKiBAcGFyYW0ge2FuZ3VsYXItand0Lmp3dH0gand0SGVscGVyXG4gICAqL1xuICBmdW5jdGlvbiBBdXRoU2VydmljZSgkaHR0cCwgJHdpbmRvdywgand0SGVscGVyKSB7XG5cbiAgICAvLyBUT0RPOiBBZGQgdmVyaWZ5IGZ1bmN0aW9uXG5cbiAgICAvLyAtLS1cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGRvTG9jYWxSZWdpc3RyYXRpb246IGRvTG9jYWxSZWdpc3RyYXRpb24sXG4gICAgICBkb0xvY2FsTG9naW46IGRvTG9jYWxMb2dpbixcbiAgICAgIHJldm9rZTogcmV2b2tlLFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcbiAgICAvLyAtLS1cblxuICAgIC8qKlxuICAgICAqIFRha2VzIHVzZXIgY3JlZGVudGlhbHMgdGhlbiBhdHRlbXB0cyB0byByZWdpc3RlciBhbmQgYXV0aG9yaXplIGEgbmV3IHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHVzZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgYW5ndWxhci4kaHR0cCBwcm9taXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24odXNlcikge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5wb3N0KCcvYXV0aC9sb2NhbC9yZWdpc3RlcicsIHVzZXIpXG4gICAgICAgIC50aGVuKG9uQXV0aFN1Y2Nlc3MpXG4gICAgICAgIC5jYXRjaChvbkF1dGhFcnJvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZXMgdXNlciBjcmVkZW50aWFscyBhbmQgYXR0ZW1wdHMgdG8gYXV0aG9yaXplIGFuIGV4aXN0aW5nIHVzZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHVzZXJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBUaGUgYW5ndWxhci4kaHR0cCBwcm9taXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsJywgdXNlcilcbiAgICAgICAgLnRoZW4ob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmNhdGNoKG9uQXV0aEVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZva2VzIHRoZSB1c2VyJ3MgYXV0aGVudGljYXRpb24gYnkgZGVsZXRpbmcgdGhlIHN0b3JlZCBKV1QgaWQgdG9rZW4uXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgJHdpbmRvd1xuICAgICAgICAuc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgICAucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBjYWxsYmFja1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VCb2R5IEJvZHkgb2YgdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgIHZhciBpZF90b2tlbiA9IHJlc3BvbnNlLmRhdGEuaWRfdG9rZW47XG5cbiAgICAgIGlmIChpZF90b2tlbikge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuID0gaWRfdG9rZW47XG5cbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdObyBpZCB0b2tlbiB3aXRoIHJlc3BvbnNlLicsIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGF1dGhlbnRpY2F0aW9uIGVycm9ycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VCb2R5IEJvZHkgb2YgdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uQXV0aEVycm9yKHJlc3BvbnNlKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEsIH07XG4gICAgfVxuICB9XG4gIEF1dGhTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCJqd3RIZWxwZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZSBSZWNpcGVTZXJ2aWNlOnNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvbiBTZXJ2aWNlIGRlZmluaXRpb24gZm9yIFJlY2lwZVNlcnZpY2UuIFByb3ZpZGVzIGFuIGBuZ1Jlc291cmNlYFxuICogaW5zdGFuY2UgdG8gcGVyZm9ybSBDUlVEIG9wZXJhdGlvbnMgb24gYSB1c2VyJ3MgcmVjaXBlcyBjb2xsZWN0aW9uLlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVNlcnZpY2VcbiAqIEByZXF1aXJlcyBhbmd1bGFyLXJlc291cmNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3RyZWUvbWFzdGVyL3NyYy9uZ1Jlc291cmNlfVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlU2VydmljZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnKVxuICAgICAgLmZhY3RvcnkoJ1JlY2lwZVNlcnZpY2UnLCBSZWNpcGVTZXJ2aWNlKTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqIEBwYXJhbSB7YW5ndWxhci4kd2luZG93fSAkd2luZG93XG4gICAqIEBwYXJhbSB7YW5ndWxhci4kcmVzb3VyY2V9ICRyZXNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gUmVjaXBlU2VydmljZSgkd2luZG93LCAkcmVzb3VyY2UpIHtcblxuICAgIC8qKlxuICAgICAqIEhlYWRlcnMgdG8gc2VuZCB3aXRoIHJlc291cmNlIHJlcXVlc3RzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9oZWFkZXJzID0ge1xuICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICB9O1xuXG4gICAgLy8gLS0tXG4gICAgdmFyIHNlcnZpY2UgPSAkcmVzb3VyY2UoXG4gICAgICAnL2FwaS91c2VyL3JlY2lwZXMvOnJlY2lwZUlkJyxcbiAgICAgIHsgcmVjaXBlSWQ6ICdAcmVjaXBlSWQnLCB9LFxuICAgICAge1xuICAgICAgICBnZXQ6IHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHNhdmU6IHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBxdWVyeTogeyBtZXRob2Q6ICdHRVQnLCBpc0FycmF5OiB0cnVlLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgcmVtb3ZlOiB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBkZWxldGU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHVwZGF0ZTogeyBtZXRob2Q6ICdQVVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgLy8gLS0tXG4gICAgXG4gIH1cbiAgUmVjaXBlU2VydmljZS4kaW5qZWN0ID0gW1wiJHdpbmRvd1wiLCBcIiRyZXNvdXJjZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIEBuYW1lIFVzZXJTZXJ2aWNlOnNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvbiBTZXJ2aWNlIGRlZmluaXRpb24gZm9yIFVzZXJTZXJ2aWNlLiBQcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yXG4gKiB1c2VyIGZ1bmN0aW9ucyBsaWtlIGNoZWNraW5nIGF1dGggc3RhdHVzLCB1cGRhdGluZyBjcmVkZW50aWFscyBhbmQgcHJvZmlsZVxuICogaW5mbywgYW5kIGxvZ2dpbmcgb3V0LlxuICogQHNlZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJTZXJ2aWNlXG4gKiBAcmVxdWlyZXMgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoU2VydmljZVxuICogQHNpbmNlIDAuMS4wXG4gKlxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclNlcnZpY2VcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicpXG4gICAgICAuZmFjdG9yeSgnVXNlclNlcnZpY2UnLCBVc2VyU2VydmljZSk7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKiBAcGFyYW0ge2FuZ3VsYXIuJGh0dHB9ICRodHRwXG4gICAqIEBwYXJhbSB7YW5ndWxhci4kd2luZG93fSAkd2luZG93XG4gICAqIEBwYXJhbSB7YW5ndWxhci4kcX0gJHFcbiAgICogQHBhcmFtIHtSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhTZXJ2aWNlfSBBdXRoU2VydmljZVxuICAgKi9cbiAgZnVuY3Rpb24gVXNlclNlcnZpY2UoJGh0dHAsICR3aW5kb3csICRxLCBBdXRoU2VydmljZSkge1xuICAgIHZhciBHUkFWQVRBUl9CQVNFVVJMID0gJ2h0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8nO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGVkIHVzZXIgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBsb2dnZWQgaW4gdXNlci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIC8vIC0tLVxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIGdldEN1cnJlbnRVc2VyOiBnZXRDdXJyZW50VXNlcixcbiAgICAgIGdldEdyYXZhdGFyQXZhdGFyVXJsOiBnZXRHcmF2YXRhckF2YXRhclVybCxcbiAgICAgIHVwZGF0ZUNyZWRlbnRpYWxzOiB1cGRhdGVDcmVkZW50aWFscyxcbiAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgLy8gLS0tXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgY3VycmVudCB1c2VyJ3MgYXV0aCBzdGF0dXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgbG9nZ2VkIGluLCBgZmFsc2VgIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTG9nZ2VkSW4oKSB7XG4gICAgICByZXR1cm4gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbiA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvZ2dlZC1pbiB1c2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgaWYgKF9jdXJyZW50VXNlcikge1xuICAgICAgICAvLyBSZXR1cm4gY2FjaGVkIHVzZXIgaW1tZWRpYXRlbHlcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5nZXQoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvbkdldEN1cnJlbnRVc2VyU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvbkdldEN1cnJlbnRVc2VyRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIHVzZXIgcmV0cmlldmFsIHN1Y2Nlc3MuXG4gICAgICAgKlxuICAgICAgICogQGNhbGxiYWNrXG4gICAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlc3BvbnNlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uR2V0Q3VycmVudFVzZXJTdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIF9jdXJyZW50VXNlciA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgdXNlciByZXRyaWV2YWwgZmFpbHVyZS5cbiAgICAgICAqXG4gICAgICAgKiBAY2FsbGJhY2tcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gcmVzcG9uc2VcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlckVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1c2VyJ3MgR3JhdmF0YXIgYXZhdGFyIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gQXZhdGFyIFVSTFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEdyYXZhdGFyQXZhdGFyVXJsKCkge1xuICAgICAgaWYgKCFfY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmV0dXJuICcnOyAvLyBUT0RPOiBSZXR1cm4gcGxhY2Vob2xkZXIgYXZhdGFyXG4gICAgICB9XG5cbiAgICAgIC8vIEhhc2ggZW1haWwgdG8gZ2V0IEdyYXZhdGFyIGRhdGFcbiAgICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuTUQ1KF9jdXJyZW50VXNlci5lbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSkudG9TdHJpbmcoKTtcblxuICAgICAgcmV0dXJuIEdSQVZBVEFSX0JBU0VVUkwgKyBoYXNoICsgJy5qcGcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIHVwZGF0ZSB0aGUgdXNlcidzIGNyZWRlbnRpYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBjcmVkZW50aWFsc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IGFuZ3VsYXIuJGh0dHAgcHJvbWlzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgICAucHV0KCcvYXBpL3VzZXIvJywgY3JlZGVudGlhbHMsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS50aGVuKG9uVXBkYXRlQ3JlZGVudGlhbHNTdWNjZXNzKVxuICAgICAgICAgICAgLmNhdGNoKG9uVXBkYXRlQ3JlZGVudGlhbHNFcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogdXBkYXRlQ3JlZGVudGlhbHMgU3VjY2VzcyBoYW5kbGVyLlxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZWQgY2FsbCB0byBBdXRoU2VydmljZSBsb2dpblxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvblVwZGF0ZUNyZWRlbnRpYWxzU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBfY3VycmVudFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHJldHVybiBBdXRoU2VydmljZVxuICAgICAgICAgIC5kb0xvY2FsTG9naW4oe1xuICAgICAgICAgICAgZW1haWw6IF9jdXJyZW50VXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiB1cGRhdGVDcmVkZW50aWFscyBFcnJvciBoYW5kbGVyLlxuICAgICAgICpcbiAgICAgICAqIEBjYWxsYmFja1xuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSByZXNwb25zZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvblVwZGF0ZUNyZWRlbnRpYWxzRXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEsIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdHMgdG8gcmVtb3ZlIHRoZSB1c2VyIGFjY291bnQgYW5kIHJldm9rZSBhdXRob3JpemF0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gYW5ndWFsci4kaHR0cCBwcm9taXNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcigpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAuZGVsZXRlKCcvYXBpL3VzZXIvJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGxvZ291dCgpO1xuXG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgfTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogcmVzcG9uc2UuZGF0YSwgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIHRoZSBjdXJyZW50IHVzZXIgb3V0IGJ5IHJldm9raW5nIGF1dGhvcml6YXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLnJldm9rZSgpO1xuXG4gICAgICBfY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuICBVc2VyU2VydmljZS4kaW5qZWN0ID0gW1wiJGh0dHBcIiwgXCIkd2luZG93XCIsIFwiJHFcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=