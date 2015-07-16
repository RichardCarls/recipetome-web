/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', [
      'ui.router',
      'ui.bootstrap',
      'flow',
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
      'slugifier',
      'flow',
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

  function RecipesListController(recipes, categories) {
    var vm = this;

    vm.recipes = recipes;
    vm.filter = filter;

    vm.categories = categories;

    function filter() {
      if (vm.categoryFilter) {
        return { category: { slug: vm.categoryFilter, }, };
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
          categories: function($http, $window) {
            return $http.get('/api/user/categories', {
              headers: {
                'x-access-token': $window.sessionStorage.id_token,
              }
            }).then(function(response) {
              return response.data;
            }).catch(function() {
              return [{ slug: '', label: '', }];
            });
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

  function RTRecipeController($state, $window, RecipeService, Slug) {
    var vm = this;

    vm.rating = { max: 5, };

    vm.getThumbnail = getThumbnail;
    vm.onPictureUpload = onPictureUpload;
    vm.generateCategorySlug = generateCategorySlug;
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

    function onPictureUpload(file, message, flow) {
      vm.recipe.thumbnail = JSON.parse(message).files[0].url;
    }

    function generateCategorySlug() {
      vm.recipe.category.slug = Slug.slugify(vm.recipe.category.label);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLm1vZHVsZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUubW9kdWxlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLm1vZHVsZS5qcyIsInNlcnZpY2VzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwic2VydmljZXMvdXNlci91c2VyLm1vZHVsZS5qcyIsInJlY2lwZXRvbWUuY29udHJvbGxlci5qcyIsInJlY2lwZXRvbWUucm91dGVzLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJvdXRlcy5qcyIsInByb2ZpbGUvcHJvZmlsZS5jb250cm9sbGVyLmpzIiwicHJvZmlsZS9wcm9maWxlLnJvdXRlcy5qcyIsInJlY2lwZXMvcmVjaXBlcy1saXN0LmNvbnRyb2xsZXIuanMiLCJyZWNpcGVzL3JlY2lwZXMtc2luZ2xlLmNvbnRyb2xsZXIuanMiLCJyZWNpcGVzL3JlY2lwZXMuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL3N0ZXAvc3RlcC5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5jb250cm9sbGVyLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5kaXJlY3RpdmUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS5qcyIsInNlcnZpY2VzL3JlY2lwZS9yZWNpcGUuc2VydmljZS5qcyIsInNlcnZpY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlY2lwZXRvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIG1vZHVsZVxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdmbG93JyxcbiAgICAgICdyZWNpcGV0b21lLnNlcnZpY2VzJyxcbiAgICAgICdyZWNpcGV0b21lLmNvbXBvbmVudHMnLFxuICAgICAgJ3JlY2lwZXRvbWUud2VsY29tZScsXG4gICAgICAncmVjaXBldG9tZS5zaWdudXAnLFxuICAgICAgJ3JlY2lwZXRvbWUubG9naW4nLFxuICAgICAgJ3JlY2lwZXRvbWUucHJvZmlsZScsXG4gICAgICAncmVjaXBldG9tZS5yZWNpcGVzJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGNvbXBvbmVudHMgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmNvbXBvbmVudHMnLCBbXG4gICAgICAnY29tcG9uZW50cy51c2VybWVudScsXG4gICAgICAnY29tcG9uZW50cy5yZWNpcGUnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsXG4gICAgICAnY29tcG9uZW50cy5zdGVwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGxvZ2luIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gdW5hdXRoZW50aWNhdGVkIHVzZXIgb24gdGhlIGxvZ2luIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0xvZ2luXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgbW9kdWxlXG4gKlxuICogVGhpcyB2aWV3IHN0YXRlIHJlcHJlc2VudHMgYW4gYXV0aGVudGljYXRlZCB1c2VyJ3MgcHJvZmlsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy51c2VyJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgdmlldyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNlcnZpY2VzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2VydmljZXMnLCBbXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBzaWdudXAgcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsYW5kaW5nIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnRcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzbHVnaWZpZXInLFxuICAgICAgJ2Zsb3cnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc3RlcCBjb21wb25lbnQgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIG1lbnUgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2UgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5hdXRoJywgW1xuICAgICAgJ2FuZ3VsYXItand0JyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnLCBbXG4gICAgICAnbmdSZXNvdXJjZScsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2UgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVUb21lQ29udHJvbGxlcicsIFJlY2lwZVRvbWVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVUb21lQ29udHJvbGxlcigkc2NvcGUpIHtcbiAgICAkc2NvcGUuYXBwID0ge1xuICAgICAgdGVjaExpc3Q6IFtcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgICB7IGxpbms6ICdodHRwOi8vZXhwcmVzc2pzLmNvbS8nLCBuYW1lOiAnRXhwcmVzcy5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cDovL3Bhc3Nwb3J0anMub3JnLycsIG5hbWU6ICdQYXNzcG9ydC5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgICB7IGxpbms6ICdodHRwczovL3d3dy5tb25nb2RiLm9yZy8nLCBuYW1lOiAnTW9uZ29EQicgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb25maWcoUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSb3V0ZXNDb25maWcoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBsb2dpbiB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpbi9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoJHNjb3BlLCAkc3RhdGUsIEF1dGhTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLmxvZ2luID0ge1xuICAgICAgdXNlcjoge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIH0sXG4gICAgICBsb2dpbkxvY2FsOiBkb0xvY2FsTG9naW4sXG4gICAgICBhdXRoZW50aWNhdGU6IGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbixcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsTG9naW4odXNlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHN0YXRlLmdvKCdwcm9maWxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbihwcm92aWRlcikge1xuICAgICAgLy8gVE9ETzogRG8gdXNlciBhdXRoZW50aWNhdGlvbiBhbmQgcmVnaXN0ZXIgbG9jYWwgdXNlciBhbmQgcmVkaXJlY3QgdG8gcHJvZmlsZVxuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBsb2dpbiB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpbi9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0xvZ2luXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJylcbiAgICAgIC5jb25maWcoTG9naW5Sb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIExvZ2luUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xvZ2luL2xvZ2luLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDb250cm9sbGVyJywgUHJvZmlsZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFByb2ZpbGVDb250cm9sbGVyKCRzY29wZSwgVXNlclNlcnZpY2UsIHVzZXIpIHtcbiAgICAkc2NvcGUucHJvZmlsZSA9IHtcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcHJvZmlsZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb25maWcoUHJvZmlsZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUHJvZmlsZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3Byb2ZpbGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9maWxlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICB1c2VyOiBmdW5jdGlvbihVc2VyU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyBhZGQgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlcy9MaXN0L0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXMvTGlzdFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVzTGlzdENvbnRyb2xsZXInLCBSZWNpcGVzTGlzdENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJlY2lwZXNMaXN0Q29udHJvbGxlcihyZWNpcGVzLCBjYXRlZ29yaWVzKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnJlY2lwZXMgPSByZWNpcGVzO1xuICAgIHZtLmZpbHRlciA9IGZpbHRlcjtcblxuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuXG4gICAgZnVuY3Rpb24gZmlsdGVyKCkge1xuICAgICAgaWYgKHZtLmNhdGVnb3J5RmlsdGVyKSB7XG4gICAgICAgIHJldHVybiB7IGNhdGVnb3J5OiB7IHNsdWc6IHZtLmNhdGVnb3J5RmlsdGVyLCB9LCB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgc2luZ2xlIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvU2luZ2xlL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXMvU2luZ2xlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsIFJlY2lwZXNWaWV3Q29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc1ZpZXdDb250cm9sbGVyKHJlY2lwZSwgZm9ybWF0KSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnJlY2lwZSA9IHJlY2lwZTtcbiAgICB2bS5mb3JtYXQgPSBmb3JtYXQ7XG4gIH1cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVzQ29udHJvbGxlcicsIFJlY2lwZXNDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0xpc3RDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlczogZnVuY3Rpb24oUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UucXVlcnkoKS4kcHJvbWlzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGZ1bmN0aW9uKCRodHRwLCAkd2luZG93KSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXIvY2F0ZWdvcmllcycsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFt7IHNsdWc6ICcnLCBsYWJlbDogJycsIH1dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMudmlldycsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMvdmlldy86cmVjaXBlSWQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IGZ1bmN0aW9uKCRzdGF0ZVBhcmFtcywgUmVjaXBlU2VydmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlY2lwZVNlcnZpY2UuZ2V0KHsgcmVjaXBlSWQ6ICRzdGF0ZVBhcmFtcy5yZWNpcGVJZCwgfSkuJHByb21pc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmdWxsJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5lZGl0Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZC9lZGl0JyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9ybSc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMuY3JlYXRlJywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy9jcmVhdGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaW5ncmVkaWVudHM6IFtdLCBzdGVwczogW10sIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29udHJvbGxlcignU2lnblVwQ29udHJvbGxlcicsIFNpZ25VcENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcENvbnRyb2xsZXIoJHNjb3BlLCAkbG9jYXRpb24sIEF1dGhTZXJ2aWNlKSB7XG4gICAgJHNjb3BlLnNpZ251cCA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJMb2NhbDogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGF1dGhlbnRpY2F0ZTogZG9Qcm92aWRlckF1dGhlbnRpY2F0aW9uLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgIC5kb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbihwcm92aWRlcikge1xuICAgICAgLy8gVE9ETzogRG8gdXNlciBhdXRoZW50aWNhdGlvbiBhbmQgcmVnaXN0ZXIgbG9jYWwgdXNlciBhbmQgcmVkaXJlY3QgdG8gcHJvZmlsZVxuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnblVwL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29uZmlnKFNpZ25VcFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gU2lnblVwUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgnc2lnbnVwJywge1xuICAgICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbnVwL3NpZ251cC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnU2lnblVwQ29udHJvbGxlcicsXG4gICAgICB9KTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29udHJvbGxlcignV2VsY29tZUNvbnRyb2xsZXInLCBXZWxjb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gV2VsY29tZUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgJHNjb3BlLndlbGNvbWUgPSB7XG4gICAgICBncmVldGluZzoge1xuICAgICAgICBoZWFkbGluZTogJ1lvdXIgUGVyc29uYWwgUmVjaXBlIERhdGFiYXNlJyxcbiAgICAgICAgbGVhZDogJ1JlY2lwZSBUb21lIGxldFxcJ3MgeW91IGNyZWF0ZSBhbmQgbWFuYWdlIHJlY2lwZXMuJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvV2VsY29tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJylcbiAgICAgIC5jb25maWcoV2VsY29tZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gV2VsY29tZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3dlbGNvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC93ZWxjb21lL3dlbGNvbWUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDb250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgaW5ncmVkaWVudCBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnQvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLCBSVEluZ3JlZGllbnRDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSVEluZ3JlZGllbnRDb250cm9sbGVyKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgaW5ncmVkaWVudCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhbiBgaW5ncmVkaWVudGAgb2JqZWN0IGFuZFxuICogICAgICAgZGlzcGxheXMgaXQgaW4gdGhlIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnaW5saW5lJzogT3V0cHV0cyBhbiBpbmxpbmUgZWxlbWVudCBjb250YWluaW5nIHRoZSBmb3JtYXR0ZWQgZGF0YS5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IERpc3BsYXlzIGFuIGh0bWwgZm9ybSBmb3IgZWRpdGluZyBhbiBpbmdyZWRpZW50LlxuICpcbiAqIFx0XHRcdCBXaGVuIHVzZWQgaW5zaWRlIGFuIGBuZ1JlcGVhdGAgZGlyZWN0aXZlLCB5b3UgY2FuIHNldCB0aGUgaW5ncmVkaWVudCdzXG4gKiBcdFx0XHQgb3JkZXIgcHJvcGVydHkgYnkgcGFzc2luZyBhbiBleHByZXNzaW9uIHRvIGBvcmRlcmAuXG4gKlxuICogXHRcdFx0IFRvIHNob3cgYSByZW1vdmUgYnV0dG9uLCBzZXQgdGhlIGBvblJlbW92ZWAgaGFuZGxlci5cbiAqXG4gKiBAZXhhbXBsZSA8bGk+PHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cImluZ3JlZGllbnRcIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LWluZ3JlZGllbnQ+PC9saT5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcpXG4gICAgICAuZGlyZWN0aXZlKCdydEluZ3JlZGllbnQnLCBSVEluZ3JlZGllbnQpO1xuXG4gIGZ1bmN0aW9uIFJUSW5ncmVkaWVudCgpIHtcbiAgICB2YXIgRk9STUFUX0lOTElORSA9ICdpbmxpbmUnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5ncmVkaWVudDogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgICAgb3JkZXI6ICc9JyxcbiAgICAgICAgb25SZW1vdmU6ICcmJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuXG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLmluZ3JlZGllbnQgPSBzY29wZS5pbmdyZWRpZW50O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgaWYgKHNjb3BlLm9yZGVyKSB7XG4gICAgICAgIHZtLmluZ3JlZGllbnQub3JkZXIgPSBzY29wZS5vcmRlcjtcbiAgICAgIH1cblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWlubGluZS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtaW5saW5lLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFJlY2lwZUNvbnRyb2xsZXInLCBSVFJlY2lwZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJUUmVjaXBlQ29udHJvbGxlcigkc3RhdGUsICR3aW5kb3csIFJlY2lwZVNlcnZpY2UsIFNsdWcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ucmF0aW5nID0geyBtYXg6IDUsIH07XG5cbiAgICB2bS5nZXRUaHVtYm5haWwgPSBnZXRUaHVtYm5haWw7XG4gICAgdm0ub25QaWN0dXJlVXBsb2FkID0gb25QaWN0dXJlVXBsb2FkO1xuICAgIHZtLmdlbmVyYXRlQ2F0ZWdvcnlTbHVnID0gZ2VuZXJhdGVDYXRlZ29yeVNsdWc7XG4gICAgdm0uYWRkSW5ncmVkaWVudCA9IGFkZEluZ3JlZGllbnQ7XG4gICAgdm0ucmVtb3ZlSW5ncmVkaWVudCA9IHJlbW92ZUluZ3JlZGllbnQ7XG4gICAgdm0uYWRkU3RlcCA9IGFkZFN0ZXA7XG4gICAgdm0ucmVtb3Zlc3RlcCA9IHJlbW92ZVN0ZXA7XG4gICAgdm0uc2F2ZVJlY2lwZSA9IHNhdmVSZWNpcGU7XG4gICAgdm0uZGVsZXRlUmVjaXBlID0gZGVsZXRlUmVjaXBlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGh1bWJuYWlsKCkge1xuICAgICAgaWYgKCF2bS5yZWNpcGUgfHwgIXZtLnJlY2lwZS50aHVtYm5haWwpIHtcbiAgICAgICAgcmV0dXJuICdhc3NldC9pbWcvcmVjaXBlLWltYWdlLXBsYWNlaG9sZGVyLTM2MHgyNDAucG5nJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZtLnJlY2lwZS50aHVtYm5haWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QaWN0dXJlVXBsb2FkKGZpbGUsIG1lc3NhZ2UsIGZsb3cpIHtcbiAgICAgIHZtLnJlY2lwZS50aHVtYm5haWwgPSBKU09OLnBhcnNlKG1lc3NhZ2UpLmZpbGVzWzBdLnVybDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3J5U2x1ZygpIHtcbiAgICAgIHZtLnJlY2lwZS5jYXRlZ29yeS5zbHVnID0gU2x1Zy5zbHVnaWZ5KHZtLnJlY2lwZS5jYXRlZ29yeS5sYWJlbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUluZ3JlZGllbnQoZGlyZWN0aW9uKSB7XG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZm9yIDAuMS4wXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5ncmVkaWVudCgpIHtcbiAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5ncmVkaWVudChpbmdyZWRpZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuaW5ncmVkaWVudHMuaW5kZXhPZihpbmdyZWRpZW50KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3RlcCgpIHtcbiAgICAgIHZtLnJlY2lwZS5zdGVwcy5wdXNoKHtcbiAgICAgICAgb3JkZXI6IHZtLnJlY2lwZS5zdGVwcy5sZW5ndGggKyAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RlcChzdGVwKSB7XG4gICAgICB2YXIgaW5kZXggPSB2bS5yZWNpcGUuc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdm0ucmVjaXBlLnN0ZXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2F2ZVJlY2lwZSgpIHtcbiAgICAgIGlmICh2bS5yZWNpcGUuX2lkKSB7XG4gICAgICAgIC8vIFJlY2lwZSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLCBzbyBkbyB1cGRhdGVcbiAgICAgICAgdm0ucmVjaXBlID0gUmVjaXBlU2VydmljZS51cGRhdGUoeyByZWNpcGVJZDogdm0ucmVjaXBlLl9pZCwgfSwgdm0ucmVjaXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5ldyByZWNpcGUsIGRvIHNhdmVcbiAgICAgICAgdm0ucmVjaXBlID0gUmVjaXBlU2VydmljZS5zYXZlKHZtLnJlY2lwZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAkc3RhdGUuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlY2lwZSgpIHtcbiAgICAgIFJlY2lwZVNlcnZpY2UucmVtb3ZlKHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuXG4gICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZSwgcHJvdmlkZSB1bmRvIGFjdGlvblxuICAgICAgJHN0YXRlLmdvKCdeLmxpc3QnKTtcbiAgICB9XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQGRlc2MgUmVjaXBlIGRpcmVjdGl2ZSB0aGF0IHRha2VzIGEgYHJlY2lwZWAgb2JqZWN0IGFuZCBkaXNwbGF5cyBpdCBpbiB0aGVcbiAqICAgICAgIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnY2FyZCc6IEEgc2xpbSB2aWV3IHRoYXQgaXMgcGVyZmVjdCBmb3IgZGlzcGxheWluZyBpbiBhIGxpc3Qgb2Ygcm93c1xuICogXHRcdFx0XHRcdFx0XHRcdFx0b3IgdGlsZXMvY2FyZHMuXG4gKiBcdFx0XHRcdC0gJ2Z1bGwnOiBGdWxsIHZpZXcgc3VpdGFibGUgZm9yIGZ1bGwgcGFnZSBvciBkZXRhaWwgdmlldy4gU2hvd3MgYWxsXG4gKiBcdFx0XHRcdFx0XHRcdFx0XHRhdmFpbGFibGUgZmllbGRzLlxuICogXHRcdFx0XHQtICdmb3JtJzogRnVsbCB2aWV3IHdlYiBmb3JtIGZvciBlZGl0aW5nIG9yIGNyZWF0aW5nIHJlY2lwZXMuXG4gKlxuICogQGV4YW1wbGUgPGxpIGNsYXNzPVwiY29sLW1kLTRcIj48cnQtcmVjaXBlIHJlY2lwZT1cInJlY2lwZVwiIGZvcm1hdD1cImNhcmRcIj48L3J0LXJlY2lwZT48L2xpPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JlY2lwZS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlXG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0UmVjaXBlJywgUlRSZWNpcGUpO1xuXG4gIGZ1bmN0aW9uIFJUUmVjaXBlKCRpbnRlcnBvbGF0ZSkge1xuICAgIHZhciBGT1JNQVRfQ0FSRCA9ICdjYXJkJyxcbiAgICAgICAgRk9STUFUX0ZVTEwgPSAnZnVsbCcsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICB2YXIgRk9STV9NRVRIT0RfUE9TVCA9IFwicG9zdFwiLFxuICAgICAgICBGT1JNX01FVEhPRF9QVVQgPSBcInB1dFwiO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUUmVjaXBlQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICByZWNpcGU6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgICBmdW5jdGlvbiBnZXRUZW1wbGF0ZVVybChlbGVtZW50LCBhdHRycykge1xuICAgICAgc3dpdGNoKGF0dHJzLmZvcm1hdCkge1xuICAgICAgICBjYXNlIEZPUk1BVF9DQVJEOlxuICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICBjYXNlIEZPUk1BVF9GVUxMOlxuICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mdWxsLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB2bSkge1xuICAgICAgaWYgKGF0dHJzLmZvcm1hdCA9PT0gRk9STUFUX0ZPUk0gJiYgIWF0dHJzLnJlY2lwZSkge1xuICAgICAgICB2bS5zYXZlTWV0aG9kID0gRk9STV9NRVRIT0RfUE9TVDtcbiAgICAgIH1cblxuICAgICAgdm0uc2F2ZU1ldGhvZCA9IEZPUk1fTUVUSE9EX1BVVDtcbiAgICAgIHZtLnJlY2lwZSA9IHNjb3BlLnJlY2lwZTtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcblxuICAgICAgLy8gR2V0IHRlbXBsYXRlIHVybCBpbiBsaW5rIGZ1bmN0aW9uIHRvIHVzZSByZXNvbHZlZCBhdHRyaWJ1dGVzXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuXG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFN0ZXBDb250cm9sbGVyJywgUlRTdGVwQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUlRTdGVwQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc3RlcCBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQGRlc2MgUmVjaXBlIHN0ZXAgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgc3RlcGAgb2JqZWN0IGFuZFxuICogICAgICAgZGlzcGxheXMgaXQgaW4gdGhlIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnaW5saW5lJzogT3V0cHV0cyBhbiBpbmxpbmUgZWxlbWVudCBjb250YWluaW5nIHRoZSBmb3JtYXR0ZWQgZGF0YS5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IERpc3BsYXlzIGFuIGh0bWwgZm9ybSBmb3IgZWRpdGluZyBhIHN0ZXAuXG4gKlxuICogXHRcdFx0IFdoZW4gdXNlZCBpbnNpZGUgYW4gYG5nUmVwZWF0YCBkaXJlY3RpdmUsIHlvdSBjYW4gc2V0IHRoZSBzdGVwJ3NcbiAqIFx0XHRcdCBvcmRlciBwcm9wZXJ0eSBieSBwYXNzaW5nIGFuIGV4cHJlc3Npb24gdG8gYG9yZGVyYC5cbiAqXG4gKiBcdFx0XHQgVG8gc2hvdyBhIHJlbW92ZSBidXR0b24sIHNldCB0aGUgYG9uUmVtb3ZlYCBoYW5kbGVyLlxuICpcbiAqIEBleGFtcGxlIDxsaT48cnQtc3RlcCBzdGVwPVwic3RlcFwiIGZvcm1hdD1cImlubGluZVwiPjwvcnQtc3RlcD48L2xpPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXAvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0U3RlcCcsIFJUU3RlcCk7XG5cbiAgZnVuY3Rpb24gUlRTdGVwKCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRTdGVwQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBzdGVwOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvcmRlcjogJz0nLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICB2bS5zdGVwID0gc2NvcGUuc3RlcDtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG5cbiAgICAgIGlmIChzY29wZS5vcmRlcikge1xuICAgICAgICB2bS5zdGVwLm9yZGVyID0gc2NvcGUub3JkZXI7XG4gICAgICB9XG5cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9JTkxJTkU6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtYmxvY2sudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgbWVudSBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51L0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1VzZXJNZW51Q29udHJvbGxlcicsIFVzZXJNZW51Q29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gVXNlck1lbnVDb250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCBVc2VyU2VydmljZSkge1xuICAgIFVzZXJTZXJ2aWNlXG4gICAgICAuZ2V0Q3VycmVudFVzZXIoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24odXNlcikge1xuICAgICAgICAkc2NvcGUudXNlciA9IHVzZXI7XG4gICAgICB9KTtcblxuICAgICRzY29wZS5pc0xvZ2dlZEluID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gVXNlclNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH07XG4gICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgVXNlclNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAkc3RhdGUuZ28oJ3dlbGNvbWUnKTtcbiAgICB9O1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIG1lbnUgY29tcG9uZW50IGRpcmVjdGl2ZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScpXG4gICAgICAuZGlyZWN0aXZlKCd1c2VyTWVudScsIFVzZXJNZW51KTtcblxuICBmdW5jdGlvbiBVc2VyTWVudShVc2VyU2VydmljZSkge1xuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdVc2VyTWVudUNvbnRyb2xsZXInLFxuICAgICAgc2NvcGU6IHt9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS50ZW1wbGF0ZS5odG1sJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGgvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcpXG4gICAgICAuZmFjdG9yeSgnQXV0aFNlcnZpY2UnLCBBdXRoU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gQXV0aFNlcnZpY2UoJGh0dHAsICR3aW5kb3csICRxLCBqd3RIZWxwZXIpIHtcblxuICAgIC8vIFRPRE86IEFkZCB2ZXJpZnkgZnVuY3Rpb25cblxuICAgIHZhciBzZXJ2aWNlID0ge1xuICAgICAgZG9Mb2NhbFJlZ2lzdHJhdGlvbjogZG9Mb2NhbFJlZ2lzdHJhdGlvbixcbiAgICAgIGRvTG9jYWxMb2dpbjogZG9Mb2NhbExvZ2luLFxuICAgICAgcmV2b2tlOiByZXZva2UsXG4gICAgfTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbFJlZ2lzdHJhdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsL3JlZ2lzdGVyJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uUmVnaXN0cmF0aW9uRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLnBvc3QoJy9hdXRoL2xvY2FsJywgdXNlcilcbiAgICAgICAgLnN1Y2Nlc3Mob25BdXRoU3VjY2VzcylcbiAgICAgICAgLmVycm9yKG9uTG9naW5FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQXV0aFN1Y2Nlc3MoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaWRfdG9rZW4pIHtcbiAgICAgICAgJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbiA9IGRhdGEuaWRfdG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWdpc3RyYXRpb25FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9naW5FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGUvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnKVxuICAgICAgLmZhY3RvcnkoJ1JlY2lwZVNlcnZpY2UnLCBSZWNpcGVTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBSZWNpcGVTZXJ2aWNlKCRyZXNvdXJjZSwgJHdpbmRvdywgVXNlclNlcnZpY2UpIHtcbiAgICB2YXIgX2hlYWRlcnMgPSB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgIH07XG5cbiAgICB2YXIgc2VydmljZSA9ICRyZXNvdXJjZShcbiAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvcmVjaXBlcy86cmVjaXBlSWQnLFxuICAgICAgeyByZWNpcGVJZDogJ0ByZWNpcGVJZCcsIH0sXG4gICAgICB7XG4gICAgICAgIGdldDogeyBtZXRob2Q6ICdHRVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgc2F2ZTogeyBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcsIGlzQXJyYXk6IHRydWUsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICByZW1vdmU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIGRlbGV0ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgdXBkYXRlOiB7IG1ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlci9TZXJ2aWNlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy51c2VyJylcbiAgICAgIC5mYWN0b3J5KCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBVc2VyU2VydmljZSgkaHR0cCwgJHdpbmRvdywgJHEsIEF1dGhTZXJ2aWNlKSB7XG4gICAgdmFyIF9jdXJyZW50VXNlciA9IG51bGw7XG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IGlzTG9nZ2VkSW4sXG4gICAgICBnZXRDdXJyZW50VXNlcjogZ2V0Q3VycmVudFVzZXIsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgdmVyaWZpY2F0aW9uIGluIEF1dGhTZXJ2aWNlIGFuZCBjYWxsIGhlcmVcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgIH1cbiAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgX2N1cnJlbnRVc2VyID0gZGF0YTtcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgIEF1dGhTZXJ2aWNlLnJldm9rZSgpO1xuICAgICAgX2N1cnJlbnRVc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==