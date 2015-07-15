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
      'services.recipe',
    ]);

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
 * Recipe Tome recipe service module
 *
 * @namespace RecipeTome/Services/Recipe
 * @memberof RecipeTome/Services
 */
;(function(angular) {

  angular
    .module('services.recipe', [
      'ngResource',
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
 * Recipe Tome recipes add view controller
 * @namespace RecipeTome/Recipes/List/Controller
 * @memberof RecipeTome/Recipes/List
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesListController', RecipesListController);

  function RecipesListController(recipes) {
    var vm = this;

    vm.recipes = recipes;
    vm.filter = filter;

    // TODO: Resolve in state routing with RecipeService call
    vm.categories = [
      { slug: 'beef', label: 'Beef', },
      { slug: 'crap', label: 'Crap', },
    ];

    function filter() {
      if (vm.categoryFilter) {
        return { category: vm.categoryFilter, };
      }

      return '';
    }

  }

})(angular);

/**
 * Recipe Tome recipes single view controller
 * @namespace RecipeTome/Recipes/Single/Controller
 * @memberof RecipeTome/Recipes/Single
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesViewController', RecipesViewController);

  function RecipesViewController(recipe, format) {
    var vm = this;

    vm.recipe = recipe;
    vm.format = format;
  }
})(angular);

/**
 * Recipe Tome recipes view controller
 * @namespace RecipeTome/Recipes/Controller
 * @memberof RecipeTome/Recipes
 */
;(function(angular) {

  angular
    .module('recipetome.recipes')
      .controller('RecipesController', RecipesController);

  function RecipesController() {
    var vm = this;
  }

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
        templateUrl: 'app/recipes/recipes.view.html',
        controller: 'RecipesController',
        controllerAs: 'vm',
      })
      .state('recipes.list', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes-list.view.html',
        controller: 'RecipesListController',
        controllerAs: 'vm',
        resolve: {
          recipes: function(RecipeService) {
            return RecipeService.query().$promise;
          },
        },
      })
      .state('recipes.view', {
        url: '/recipes/view/:recipeId',
        templateUrl: 'app/recipes/recipes-single.view.html',
        controller: 'RecipesViewController',
        controllerAs: 'vm',
        resolve: {
          recipe: function($stateParams, RecipeService) {
            return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
          },
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
          recipe: function($stateParams, RecipeService) {
            return RecipeService.get({ recipeId: $stateParams.recipeId, }).$promise;
          },
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
 * Recipe Tome recipe ingredient component controller
 *
 * @namespace RecipeTome/Components/Ingredient/Controller
 * @memberof RecipeTome/Components/Ingredient
 */
;(function(angular) {

  angular
    .module('components.ingredient')
      .controller('RTIngredientController', RTIngredientController);

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
        order: '=',
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

      if (scope.order) {
        vm.ingredient.order = scope.order;
      }

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
 * Recipe Tome recipe component controller
 *
 * @namespace RecipeTome/Components/Recipe/Controller
 * @memberof RecipeTome/Components/Recipe
 */
;(function(angular) {

  angular
    .module('components.recipe')
      .controller('RTRecipeController', RTRecipeController);

  function RTRecipeController($state, RecipeService) {
    var vm = this;

    vm.rating = { max: 5, };

    vm.getThumbnail = getThumbnail;
    vm.uploadPicture = uploadPicture;
    vm.addIngredient = addIngredient;
    vm.removeIngredient = removeIngredient;
    vm.addStep = addStep;
    vm.removestep = removeStep;
    vm.saveRecipe = saveRecipe;
    vm.deleteRecipe = deleteRecipe;

    function getThumbnail() {
      if (!vm.recipe || !vm.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return vm.recipe.thumbnail;
    }

    function uploadPicture() {
      // TODO: Implement for 0.1.0
    }

    function moveIngredient(direction) {
      // TODO: Implement for 0.1.0
    }

    function addIngredient() {
      vm.recipe.ingredients.push({
        order: vm.recipe.ingredients.length + 1,
      });
    }

    function removeIngredient(ingredient) {
      var index = vm.recipe.ingredients.indexOf(ingredient);
      if (index !== -1) {
        vm.recipe.ingredients.splice(index, 1);
      }
    }

    function addStep() {
      vm.recipe.steps.push({
        order: vm.recipe.steps.length + 1,
      });
    }

    function removeStep(step) {
      var index = vm.recipe.steps.indexOf(step);
      if (index !== -1) {
        vm.recipe.steps.splice(index, 1);
      }
    }

    function saveRecipe() {
      if (vm.recipe._id) {
        // Recipe exists in the database, so do update
        vm.recipe = RecipeService.update({ recipeId: vm.recipe._id, }, vm.recipe);
      } else {
        // New recipe, do save
        vm.recipe = RecipeService.save(vm.recipe);
      }

      // TODO: Show success/error message
      $state.go('^.view', { recipeId: vm.recipe._id, });
    }

    function deleteRecipe() {
      RecipeService.remove({ recipeId: vm.recipe._id, });

      // TODO: Show success/error message, provide undo action
      $state.go('^.list');
    }
  }

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

  function RTRecipe($interpolate) {
    var FORMAT_CARD = 'card',
        FORMAT_FULL = 'full',
        FORMAT_FORM = "form";

    var FORM_METHOD_POST = "post",
        FORM_METHOD_PUT = "put";

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
      if (attrs.format === FORMAT_FORM && !attrs.recipe) {
        vm.saveMethod = FORM_METHOD_POST;
      }

      vm.saveMethod = FORM_METHOD_PUT;
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
 * Recipe Tome recipe step component controller
 *
 * @namespace RecipeTome/Components/Step/Controller
 * @memberof RecipeTome/Components/Step
 */
;(function(angular) {

  angular
    .module('components.step')
      .controller('RTStepController', RTStepController);

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
        order: '=',
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

      if (scope.order) {
        vm.step.order = scope.order;
      }

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
      $window.sessionStorage.removeItem('id_token');
    }

    function onAuthSuccess(data) {
      if (data.id_token) {
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
 * Recipe Tome recipe service
 *
 * @namespace RecipeTome/Services/Recipe/Service
 * @memberof RecipeTome/Services/Recipe
 */
;(function(angular) {

  angular
    .module('services.recipe')
      .factory('RecipeService', RecipeService);

  function RecipeService($resource, $window, UserService) {
    var _headers = {
      'x-access-token': $window.sessionStorage.id_token,
    };

    var service = $resource(
      'http://localhost:3000/api/user/recipes/:recipeId',
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
      if ($window.sessionStorage.id_token) {
        $http.get('/api/user/', {
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
    }

  }

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUubW9kdWxlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLm1vZHVsZS5qcyIsInNlcnZpY2VzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwic2VydmljZXMvdXNlci91c2VyLm1vZHVsZS5qcyIsInJlY2lwZXRvbWUuY29udHJvbGxlci5qcyIsInJlY2lwZXRvbWUucm91dGVzLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJvdXRlcy5qcyIsInByb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwicHJvZmlsZS9wcm9maWxlLnJvdXRlcy5qcyIsInJlY2lwZXMvcmVjaXBlcy1saXN0LmNvbnRyb2xsZXIuanMiLCJyZWNpcGVzL3JlY2lwZXMtc2luZ2xlLmNvbnRyb2xsZXIuanMiLCJyZWNpcGVzL3JlY2lwZXMuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS5qcyIsInNlcnZpY2VzL3JlY2lwZS9yZWNpcGUuc2VydmljZS5qcyIsInNlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIG1vZHVsZVxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdyZWNpcGV0b21lLnNlcnZpY2VzJyxcbiAgICAgICdyZWNpcGV0b21lLmNvbXBvbmVudHMnLFxuICAgICAgJ3JlY2lwZXRvbWUud2VsY29tZScsXG4gICAgICAncmVjaXBldG9tZS5zaWdudXAnLFxuICAgICAgJ3JlY2lwZXRvbWUubG9naW4nLFxuICAgICAgJ3JlY2lwZXRvbWUucHJvZmlsZScsXG4gICAgICAncmVjaXBldG9tZS5yZWNpcGVzJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGNvbXBvbmVudHMgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmNvbXBvbmVudHMnLCBbXG4gICAgICAnY29tcG9uZW50cy51c2VybWVudScsXG4gICAgICAnY29tcG9uZW50cy5yZWNpcGUnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsXG4gICAgICAnY29tcG9uZW50cy5zdGVwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGxvZ2luIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gdW5hdXRoZW50aWNhdGVkIHVzZXIgb24gdGhlIGxvZ2luIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0xvZ2luXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gYXV0aGVudGljYXRlZCB1c2VyJ3MgcHJvZmlsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgdmlldyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNlcnZpY2VzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2VydmljZXMnLCBbXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBzaWdudXAgcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsYW5kaW5nIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnRcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZSBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJywgW1xuICAgICAgJ25nUmVzb3VyY2UnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgIHRlY2hMaXN0OiBbXG4gICAgICAgIHsgbGluazogJ2h0dHBzOi8vbm9kZWpzLm9yZy8nLCBuYW1lOiAnTm9kZS5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICAgIHsgbGluazogJ2h0dHA6Ly9wYXNzcG9ydGpzLm9yZy8nLCBuYW1lOiAnUGFzc3BvcnQuanMnIH0sXG4gICAgICAgIHsgbGluazogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLCBuYW1lOiAnQW5ndWxhci5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29uZmlnKFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUm91dGVzQ29uZmlnKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgICRzY29wZS5sb2dpbiA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgbG9naW5Mb2NhbDogZG9Mb2NhbExvZ2luLFxuICAgICAgYXV0aGVudGljYXRlOiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbExvZ2luKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzdGF0ZS5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24ocHJvdmlkZXIpIHtcbiAgICAgIC8vIFRPRE86IERvIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHJlZ2lzdGVyIGxvY2FsIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHByb2ZpbGVcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29uZmlnKExvZ2luUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBQcm9maWxlQ29udHJvbGxlcigkc2NvcGUsIFVzZXJTZXJ2aWNlLCB1c2VyKSB7XG4gICAgJHNjb3BlLnByb2ZpbGUgPSB7XG4gICAgICB1c2VyOiB1c2VyLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29uZmlnKFByb2ZpbGVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFByb2ZpbGVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdwcm9maWxlJywge1xuICAgICAgICB1cmw6ICcvcHJvZmlsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3Byb2ZpbGUvcHJvZmlsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdXNlcjogZnVuY3Rpb24oVXNlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgYWRkIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvTGlzdC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzL0xpc3RcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc0xpc3RDb250cm9sbGVyJywgUmVjaXBlc0xpc3RDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzTGlzdENvbnRyb2xsZXIocmVjaXBlcykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yZWNpcGVzID0gcmVjaXBlcztcbiAgICB2bS5maWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICAvLyBUT0RPOiBSZXNvbHZlIGluIHN0YXRlIHJvdXRpbmcgd2l0aCBSZWNpcGVTZXJ2aWNlIGNhbGxcbiAgICB2bS5jYXRlZ29yaWVzID0gW1xuICAgICAgeyBzbHVnOiAnYmVlZicsIGxhYmVsOiAnQmVlZicsIH0sXG4gICAgICB7IHNsdWc6ICdjcmFwJywgbGFiZWw6ICdDcmFwJywgfSxcbiAgICBdO1xuXG4gICAgZnVuY3Rpb24gZmlsdGVyKCkge1xuICAgICAgaWYgKHZtLmNhdGVnb3J5RmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB7IGNhdGVnb3J5OiB2bS5jYXRlZ29yeUZpbHRlciwgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHNpbmdsZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL1NpbmdsZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzL1NpbmdsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVzVmlld0NvbnRyb2xsZXInLCBSZWNpcGVzVmlld0NvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJlY2lwZXNWaWV3Q29udHJvbGxlcihyZWNpcGUsIGZvcm1hdCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG4gICAgdm0uZm9ybWF0ID0gZm9ybWF0O1xuICB9XG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc0NvbnRyb2xsZXInLCBSZWNpcGVzQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc0NvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb25maWcoUmVjaXBlc1JvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc1JvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncmVjaXBlcycsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmxpc3QnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3Qudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZXM6IGZ1bmN0aW9uKFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLnF1ZXJ5KCkuJHByb21pc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMvdmlldy86cmVjaXBlSWQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UuZ2V0KHsgcmVjaXBlSWQ6ICRzdGF0ZVBhcmFtcy5yZWNpcGVJZCwgfSkuJHByb21pc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmdWxsJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5lZGl0Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZC9lZGl0JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9ybSc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMuY3JlYXRlJywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy9jcmVhdGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaW5ncmVkaWVudHM6IFtdLCBzdGVwczogW10sIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29udHJvbGxlcignU2lnblVwQ29udHJvbGxlcicsIFNpZ25VcENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcENvbnRyb2xsZXIoJHNjb3BlLCAkbG9jYXRpb24sIEF1dGhTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLnNpZ251cCA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJMb2NhbDogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGF1dGhlbnRpY2F0ZTogZG9Qcm92aWRlckF1dGhlbnRpY2F0aW9uLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbihwcm92aWRlcikge1xuICAgICAgLy8gVE9ETzogRG8gdXNlciBhdXRoZW50aWNhdGlvbiBhbmQgcmVnaXN0ZXIgbG9jYWwgdXNlciBhbmQgcmVkaXJlY3QgdG8gcHJvZmlsZVxuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnblVwL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29uZmlnKFNpZ25VcFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gU2lnblVwUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnc2lnbnVwJywge1xuICAgICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbnVwL3NpZ251cC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnblVwQ29udHJvbGxlcicsXG4gICAgICB9KTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29udHJvbGxlcignV2VsY29tZUNvbnRyb2xsZXInLCBXZWxjb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gV2VsY29tZUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgJHNjb3BlLndlbGNvbWUgPSB7XG4gICAgICBncmVldGluZzoge1xuICAgICAgICBoZWFkbGluZTogJ1lvdXIgUGVyc29uYWwgUmVjaXBlIERhdGFiYXNlJyxcbiAgICAgICAgbGVhZDogJ1JlY2lwZSBUb21lIGxldFxcJ3MgeW91IGNyZWF0ZSBhbmQgbWFuYWdlIHJlY2lwZXMuJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvV2VsY29tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJylcbiAgICAgIC5jb25maWcoV2VsY29tZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gV2VsY29tZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3dlbGNvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgaW5ncmVkaWVudCBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnQvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLCBSVEluZ3JlZGllbnRDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSVEluZ3JlZGllbnRDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgaW5ncmVkaWVudCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhbiBgaW5ncmVkaWVudGAgb2JqZWN0IGFuZFxuICogICAgICAgZGlzcGxheXMgaXQgaW4gdGhlIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnaW5saW5lJzogT3V0cHV0cyBhbiBpbmxpbmUgZWxlbWVudCBjb250YWluaW5nIHRoZSBmb3JtYXR0ZWQgZGF0YS5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IERpc3BsYXlzIGFuIGh0bWwgZm9ybSBmb3IgZWRpdGluZyBhbiBpbmdyZWRpZW50LlxuICpcbiAqIFx0XHRcdCBXaGVuIHVzZWQgaW5zaWRlIGFuIGBuZ1JlcGVhdGAgZGlyZWN0aXZlLCB5b3UgY2FuIHNldCB0aGUgaW5ncmVkaWVudCdzXG4gKiBcdFx0XHQgb3JkZXIgcHJvcGVydHkgYnkgcGFzc2luZyBhbiBleHByZXNzaW9uIHRvIGBvcmRlcmAuXG4gKlxuICogXHRcdFx0IFRvIHNob3cgYSByZW1vdmUgYnV0dG9uLCBzZXQgdGhlIGBvblJlbW92ZWAgaGFuZGxlci5cbiAqXG4gKiBAZXhhbXBsZSA8bGk+PHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cImluZ3JlZGllbnRcIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LWluZ3JlZGllbnQ+PC9saT5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcpXG4gICAgICAuZGlyZWN0aXZlKCdydEluZ3JlZGllbnQnLCBSVEluZ3JlZGllbnQpO1xuXG4gIGZ1bmN0aW9uIFJUSW5ncmVkaWVudCgpIHtcbiAgICB2YXIgRk9STUFUX0lOTElORSA9ICdpbmxpbmUnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5ncmVkaWVudDogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgICAgb3JkZXI6ICc9JyxcbiAgICAgICAgb25SZW1vdmU6ICcmJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuXG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLmluZ3JlZGllbnQgPSBzY29wZS5pbmdyZWRpZW50O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgaWYgKHNjb3BlLm9yZGVyKSB7XG4gICAgICAgIHZtLmluZ3JlZGllbnQub3JkZXIgPSBzY29wZS5vcmRlcjtcbiAgICAgIH1cblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWlubGluZS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtaW5saW5lLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFJlY2lwZUNvbnRyb2xsZXInLCBSVFJlY2lwZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJUUmVjaXBlQ29udHJvbGxlcigkc3RhdGUsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ucmF0aW5nID0geyBtYXg6IDUsIH07XG5cbiAgICB2bS5nZXRUaHVtYm5haWwgPSBnZXRUaHVtYm5haWw7XG4gICAgdm0udXBsb2FkUGljdHVyZSA9IHVwbG9hZFBpY3R1cmU7XG4gICAgdm0uYWRkSW5ncmVkaWVudCA9IGFkZEluZ3JlZGllbnQ7XG4gICAgdm0ucmVtb3ZlSW5ncmVkaWVudCA9IHJlbW92ZUluZ3JlZGllbnQ7XG4gICAgdm0uYWRkU3RlcCA9IGFkZFN0ZXA7XG4gICAgdm0ucmVtb3Zlc3RlcCA9IHJlbW92ZVN0ZXA7XG4gICAgdm0uc2F2ZVJlY2lwZSA9IHNhdmVSZWNpcGU7XG4gICAgdm0uZGVsZXRlUmVjaXBlID0gZGVsZXRlUmVjaXBlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGh1bWJuYWlsKCkge1xuICAgICAgaWYgKCF2bS5yZWNpcGUgfHwgIXZtLnJlY2lwZS50aHVtYm5haWwpIHtcbiAgICAgICAgcmV0dXJuICdhc3NldC9pbWcvcmVjaXBlLWltYWdlLXBsYWNlaG9sZGVyLTM2MHgyNDAucG5nJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtLnJlY2lwZS50aHVtYm5haWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBsb2FkUGljdHVyZSgpIHtcbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCBmb3IgMC4xLjBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlSW5ncmVkaWVudChkaXJlY3Rpb24pIHtcbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCBmb3IgMC4xLjBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmdyZWRpZW50KCkge1xuICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdGVwKCkge1xuICAgICAgdm0ucmVjaXBlLnN0ZXBzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTdGVwKHN0ZXApIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5zdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlUmVjaXBlKCkge1xuICAgICAgaWYgKHZtLnJlY2lwZS5faWQpIHtcbiAgICAgICAgLy8gUmVjaXBlIGV4aXN0cyBpbiB0aGUgZGF0YWJhc2UsIHNvIGRvIHVwZGF0ZVxuICAgICAgICB2bS5yZWNpcGUgPSBSZWNpcGVTZXJ2aWNlLnVwZGF0ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCB2bS5yZWNpcGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTmV3IHJlY2lwZSwgZG8gc2F2ZVxuICAgICAgICB2bS5yZWNpcGUgPSBSZWNpcGVTZXJ2aWNlLnNhdmUodm0ucmVjaXBlKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2VcbiAgICAgICRzdGF0ZS5nbygnXi52aWV3JywgeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlUmVjaXBlKCkge1xuICAgICAgUmVjaXBlU2VydmljZS5yZW1vdmUoeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSk7XG5cbiAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlLCBwcm92aWRlIHVuZG8gYWN0aW9uXG4gICAgICAkc3RhdGUuZ28oJ14ubGlzdCcpO1xuICAgIH1cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgcmVjaXBlYCBvYmplY3QgYW5kIGRpc3BsYXlzIGl0IGluIHRoZVxuICogICAgICAgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdjYXJkJzogQSBzbGltIHZpZXcgdGhhdCBpcyBwZXJmZWN0IGZvciBkaXNwbGF5aW5nIGluIGEgbGlzdCBvZiByb3dzXG4gKiBcdFx0XHRcdFx0XHRcdFx0XHRvciB0aWxlcy9jYXJkcy5cbiAqIFx0XHRcdFx0LSAnZnVsbCc6IEZ1bGwgdmlldyBzdWl0YWJsZSBmb3IgZnVsbCBwYWdlIG9yIGRldGFpbCB2aWV3LiBTaG93cyBhbGxcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdGF2YWlsYWJsZSBmaWVsZHMuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBGdWxsIHZpZXcgd2ViIGZvcm0gZm9yIGVkaXRpbmcgb3IgY3JlYXRpbmcgcmVjaXBlcy5cbiAqXG4gKiBAZXhhbXBsZSA8bGkgY2xhc3M9XCJjb2wtbWQtNFwiPjxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCIgZm9ybWF0PVwiY2FyZFwiPjwvcnQtcmVjaXBlPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgZnVuY3Rpb24gUlRSZWNpcGUoJGludGVycG9sYXRlKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBGT1JNX01FVEhPRF9QT1NUID0gXCJwb3N0XCIsXG4gICAgICAgIEZPUk1fTUVUSE9EX1BVVCA9IFwicHV0XCI7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRSZWNpcGVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHJlY2lwZTogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGdldFRlbXBsYXRlVXJsKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzd2l0Y2goYXR0cnMuZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgRk9STUFUX0NBUkQ6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZ1bGwudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICBpZiAoYXR0cnMuZm9ybWF0ID09PSBGT1JNQVRfRk9STSAmJiAhYXR0cnMucmVjaXBlKSB7XG4gICAgICAgIHZtLnNhdmVNZXRob2QgPSBGT1JNX01FVEhPRF9QT1NUO1xuICAgICAgfVxuXG4gICAgICB2bS5zYXZlTWV0aG9kID0gRk9STV9NRVRIT0RfUFVUO1xuICAgICAgdm0ucmVjaXBlID0gc2NvcGUucmVjaXBlO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuXG4gICAgICAvLyBHZXQgdGVtcGxhdGUgdXJsIGluIGxpbmsgZnVuY3Rpb24gdG8gdXNlIHJlc29sdmVkIGF0dHJpYnV0ZXNcbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9DQVJEOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mdWxsLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG5cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc3RlcCBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXAvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUU3RlcENvbnRyb2xsZXInLCBSVFN0ZXBDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSVFN0ZXBDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzdGVwIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgc3RlcCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhIGBzdGVwYCBvYmplY3QgYW5kXG4gKiAgICAgICBkaXNwbGF5cyBpdCBpbiB0aGUgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdpbmxpbmUnOiBPdXRwdXRzIGFuIGlubGluZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGZvcm1hdHRlZCBkYXRhLlxuICogXHRcdFx0XHQtICdmb3JtJzogRGlzcGxheXMgYW4gaHRtbCBmb3JtIGZvciBlZGl0aW5nIGEgc3RlcC5cbiAqXG4gKiBcdFx0XHQgV2hlbiB1c2VkIGluc2lkZSBhbiBgbmdSZXBlYXRgIGRpcmVjdGl2ZSwgeW91IGNhbiBzZXQgdGhlIHN0ZXAnc1xuICogXHRcdFx0IG9yZGVyIHByb3BlcnR5IGJ5IHBhc3NpbmcgYW4gZXhwcmVzc2lvbiB0byBgb3JkZXJgLlxuICpcbiAqIFx0XHRcdCBUbyBzaG93IGEgcmVtb3ZlIGJ1dHRvbiwgc2V0IHRoZSBgb25SZW1vdmVgIGhhbmRsZXIuXG4gKlxuICogQGV4YW1wbGUgPGxpPjxydC1zdGVwIHN0ZXA9XCJzdGVwXCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1zdGVwPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRTdGVwJywgUlRTdGVwKTtcblxuICBmdW5jdGlvbiBSVFN0ZXAoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFN0ZXBDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHN0ZXA6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9yZGVyOiAnPScsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLnN0ZXAgPSBzY29wZS5zdGVwO1xuICAgICAgdm0uZm9ybWF0ID0gc2NvcGUuZm9ybWF0O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgaWYgKHNjb3BlLm9yZGVyKSB7XG4gICAgICAgIHZtLnN0ZXAub3JkZXIgPSBzY29wZS5vcmRlcjtcbiAgICAgIH1cblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBjb250cm9sbGVyXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScpXG4gICAgICAuY29udHJvbGxlcignVXNlck1lbnVDb250cm9sbGVyJywgVXNlck1lbnVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBVc2VyTWVudUNvbnRyb2xsZXIoJHNjb3BlLCAkc3RhdGUsIFVzZXJTZXJ2aWNlKSB7XG4gICAgVXNlclNlcnZpY2VcbiAgICAgIC5nZXRDdXJyZW50VXNlcigpXG4gICAgICAudGhlbihmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICRzY29wZS51c2VyID0gdXNlcjtcbiAgICAgIH0pO1xuXG4gICAgJHNjb3BlLmlzTG9nZ2VkSW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBVc2VyU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfTtcbiAgICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBVc2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICRzdGF0ZS5nbygnd2VsY29tZScpO1xuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgbWVudSBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnUvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5kaXJlY3RpdmUoJ3VzZXJNZW51JywgVXNlck1lbnUpO1xuXG4gIGZ1bmN0aW9uIFVzZXJNZW51KFVzZXJTZXJ2aWNlKSB7XG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1VzZXJNZW51Q29udHJvbGxlcicsXG4gICAgICBzY29wZToge30sXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3VzZXJtZW51L3VzZXJtZW51LnRlbXBsYXRlLmh0bWwnLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aC9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJylcbiAgICAgIC5mYWN0b3J5KCdBdXRoU2VydmljZScsIEF1dGhTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBBdXRoU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIGp3dEhlbHBlcikge1xuXG4gICAgLy8gVE9ETzogQWRkIHZlcmlmeSBmdW5jdGlvblxuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBkb0xvY2FsUmVnaXN0cmF0aW9uOiBkb0xvY2FsUmVnaXN0cmF0aW9uLFxuICAgICAgZG9Mb2NhbExvZ2luOiBkb0xvY2FsTG9naW4sXG4gICAgICByZXZva2U6IHJldm9rZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwvcmVnaXN0ZXInLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25SZWdpc3RyYXRpb25FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwnLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25Mb2dpbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXZva2UoKSB7XG4gICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BdXRoU3VjY2VzcyhkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5pZF90b2tlbikge1xuICAgICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuID0gZGF0YS5pZF90b2tlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlZ2lzdHJhdGlvbkVycm9yKGRhdGEpIHtcbiAgICAgIHJldm9rZSgpO1xuXG4gICAgICAvLyBUT0RPOiBQcm92aWRlIGVycm9yIGZlZWRiYWNrXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Mb2dpbkVycm9yKGRhdGEpIHtcbiAgICAgIHJldm9rZSgpO1xuXG4gICAgICAvLyBUT0RPOiBQcm92aWRlIGVycm9yIGZlZWRiYWNrXG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZS9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnJlY2lwZScpXG4gICAgICAuZmFjdG9yeSgnUmVjaXBlU2VydmljZScsIFJlY2lwZVNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIFJlY2lwZVNlcnZpY2UoJHJlc291cmNlLCAkd2luZG93LCBVc2VyU2VydmljZSkge1xuICAgIHZhciBfaGVhZGVycyA9IHtcbiAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgfTtcblxuICAgIHZhciBzZXJ2aWNlID0gJHJlc291cmNlKFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci9yZWNpcGVzLzpyZWNpcGVJZCcsXG4gICAgICB7IHJlY2lwZUlkOiAnQHJlY2lwZUlkJywgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0OiB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBzYXZlOiB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJywgaXNBcnJheTogdHJ1ZSwgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHJlbW92ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICB1cGRhdGU6IHsgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICB9KTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnVzZXInKVxuICAgICAgLmZhY3RvcnkoJ1VzZXJTZXJ2aWNlJywgVXNlclNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIFVzZXJTZXJ2aWNlKCRodHRwLCAkd2luZG93LCAkcSwgQXV0aFNlcnZpY2UpIHtcbiAgICB2YXIgX2N1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgaXNMb2dnZWRJbjogaXNMb2dnZWRJbixcbiAgICAgIGdldEN1cnJlbnRVc2VyOiBnZXRDdXJyZW50VXNlcixcbiAgICAgIGxvZ291dDogbG9nb3V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICAgIGZ1bmN0aW9uIGlzTG9nZ2VkSW4oKSB7XG4gICAgICByZXR1cm4gX2N1cnJlbnRVc2VyID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgaWYgKF9jdXJyZW50VXNlcikge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCB2ZXJpZmljYXRpb24gaW4gQXV0aFNlcnZpY2UgYW5kIGNhbGwgaGVyZVxuICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4pIHtcbiAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3VzZXIvJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgfVxuICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBfY3VycmVudFVzZXIgPSBkYXRhO1xuICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoX2N1cnJlbnRVc2VyKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgQXV0aFNlcnZpY2UucmV2b2tlKCk7XG4gICAgICBfY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9