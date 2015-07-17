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
      'components.inputMatch',
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
      'components.inputMatch',
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

  function ProfileController(UserService, $state, user) {
    var vm = this;

    vm.user = user;
    vm.gravatarImage = UserService.getGravatarAvatarUrl();
    vm.credentials = {
      email: '',
      password: '',
      current_password: '',
    };

    vm.updateCredentials = UserService.updateCredentials;

    function updateCredentials(credentials) {
      UserService
        .updateCredentials(credentials)
          .then(function() {
            // TODO: Reload profile after submit?
            $state.go('profile');
          });
    }
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
        controllerAs: 'vm',
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
    var GRAVATAR_BASEURL = 'http://www.gravatar.com/avatar/';

    var _currentUser = null;

    var service = {
      isLoggedIn: isLoggedIn,
      getCurrentUser: getCurrentUser,
      getGravatarAvatarUrl: getGravatarAvatarUrl,
      updateCredentials: updateCredentials,
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

    function logout() {
      AuthService
        .revoke();

      _currentUser = null;
    }

  }

})(angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5jb250cm9sbGVyLmpzIiwicmVjaXBlcy9yZWNpcGVzLnJvdXRlcy5qcyIsInNpZ251cC9zaWdudXAuY29udHJvbGxlci5qcyIsInNpZ251cC9zaWdudXAucm91dGVzLmpzIiwid2VsY29tZS93ZWxjb21lLmNvbnRyb2xsZXIuanMiLCJ3ZWxjb21lL3dlbGNvbWUucm91dGVzLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvaW5wdXQtbWF0Y2gvaW5wdXQtbWF0Y2guZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVjaXBldG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVjaXBlIFRvbWUgYXBwbGljYXRpb24gbW9kdWxlXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ2Zsb3cnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2VydmljZXMnLFxuICAgICAgJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsXG4gICAgICAncmVjaXBldG9tZS53ZWxjb21lJyxcbiAgICAgICdyZWNpcGV0b21lLnNpZ251cCcsXG4gICAgICAncmVjaXBldG9tZS5sb2dpbicsXG4gICAgICAncmVjaXBldG9tZS5wcm9maWxlJyxcbiAgICAgICdyZWNpcGV0b21lLnJlY2lwZXMnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgY29tcG9uZW50cyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuY29tcG9uZW50cycsIFtcbiAgICAgICdjb21wb25lbnRzLnVzZXJtZW51JyxcbiAgICAgICdjb21wb25lbnRzLnJlY2lwZScsXG4gICAgICAnY29tcG9uZW50cy5pbmdyZWRpZW50JyxcbiAgICAgICdjb21wb25lbnRzLnN0ZXAnLFxuICAgICAgJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBsb2dpbiB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsb2dpbiBwYWdlLlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Mb2dpblxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcHJvZmlsZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIGF1dGhlbnRpY2F0ZWQgdXNlcidzIHByb2ZpbGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUHJvZmlsZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnY29tcG9uZW50cy5pbnB1dE1hdGNoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgdmlldyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNlcnZpY2VzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2VydmljZXMnLCBbXG4gICAgICAnc2VydmljZXMuYXV0aCcsXG4gICAgICAnc2VydmljZXMudXNlcicsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBzaWdudXAgcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnbnVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IG1vZHVsZVxuICpcbiAqIFRoaXMgdmlldyBzdGF0ZSByZXByZXNlbnRzIGFuIHVuYXV0aGVudGljYXRlZCB1c2VyIG9uIHRoZSBsYW5kaW5nIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1dlbGNvbWVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnRcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsIFtdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBjb21wb25lbnQgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAnc2x1Z2lmaWVyJyxcbiAgICAgICdmbG93JyxcbiAgICAgICdzZXJ2aWNlcy5yZWNpcGUnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy51c2VybWVudScsIFtcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZSBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJywgW1xuICAgICAgJ25nUmVzb3VyY2UnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgIHRlY2hMaXN0OiBbXG4gICAgICAgIHsgbGluazogJ2h0dHBzOi8vbm9kZWpzLm9yZy8nLCBuYW1lOiAnTm9kZS5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICAgIHsgbGluazogJ2h0dHA6Ly9wYXNzcG9ydGpzLm9yZy8nLCBuYW1lOiAnUGFzc3BvcnQuanMnIH0sXG4gICAgICAgIHsgbGluazogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLCBuYW1lOiAnQW5ndWxhci5qcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29uZmlnKFJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUm91dGVzQ29uZmlnKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgICRzY29wZS5sb2dpbiA9IHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICB9LFxuICAgICAgbG9naW5Mb2NhbDogZG9Mb2NhbExvZ2luLFxuICAgICAgYXV0aGVudGljYXRlOiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxMb2dpbih1c2VyKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbExvZ2luKHVzZXIpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRzdGF0ZS5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24ocHJvdmlkZXIpIHtcbiAgICAgIC8vIFRPRE86IERvIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHJlZ2lzdGVyIGxvY2FsIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHByb2ZpbGVcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29uZmlnKExvZ2luUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFByb2ZpbGVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBQcm9maWxlQ29udHJvbGxlcihVc2VyU2VydmljZSwgJHN0YXRlLCB1c2VyKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnVzZXIgPSB1c2VyO1xuICAgIHZtLmdyYXZhdGFySW1hZ2UgPSBVc2VyU2VydmljZS5nZXRHcmF2YXRhckF2YXRhclVybCgpO1xuICAgIHZtLmNyZWRlbnRpYWxzID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY3VycmVudF9wYXNzd29yZDogJycsXG4gICAgfTtcblxuICAgIHZtLnVwZGF0ZUNyZWRlbnRpYWxzID0gVXNlclNlcnZpY2UudXBkYXRlQ3JlZGVudGlhbHM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gVE9ETzogUmVsb2FkIHByb2ZpbGUgYWZ0ZXIgc3VibWl0P1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdwcm9maWxlJyk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBwcm9maWxlIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGUvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Qcm9maWxlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnKVxuICAgICAgLmNvbmZpZyhQcm9maWxlUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBQcm9maWxlUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHtcbiAgICAgICAgdXJsOiAnL3Byb2ZpbGUnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wcm9maWxlL3Byb2ZpbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdXNlcjogZnVuY3Rpb24oVXNlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyU2VydmljZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgYWRkIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvTGlzdC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzL0xpc3RcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc0xpc3RDb250cm9sbGVyJywgUmVjaXBlc0xpc3RDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzTGlzdENvbnRyb2xsZXIocmVjaXBlcywgY2F0ZWdvcmllcykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yZWNpcGVzID0gcmVjaXBlcztcbiAgICB2bS5maWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICB2bS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcblxuICAgIGZ1bmN0aW9uIGZpbHRlcigpIHtcbiAgICAgIGlmICh2bS5jYXRlZ29yeUZpbHRlcikge1xuICAgICAgICByZXR1cm4geyBjYXRlZ29yeTogeyBzbHVnOiB2bS5jYXRlZ29yeUZpbHRlciwgfSwgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHNpbmdsZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL1NpbmdsZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzL1NpbmdsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb250cm9sbGVyKCdSZWNpcGVzVmlld0NvbnRyb2xsZXInLCBSZWNpcGVzVmlld0NvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJlY2lwZXNWaWV3Q29udHJvbGxlcihyZWNpcGUsIGZvcm1hdCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG4gICAgdm0uZm9ybWF0ID0gZm9ybWF0O1xuICB9XG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1JlY2lwZXNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc0NvbnRyb2xsZXInLCBSZWNpcGVzQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc0NvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9SZWNpcGVzL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5yZWNpcGVzJylcbiAgICAgIC5jb25maWcoUmVjaXBlc1JvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlc1JvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSgncmVjaXBlcycsIHtcbiAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmxpc3QnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3Qudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNMaXN0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZXM6IGZ1bmN0aW9uKFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLnF1ZXJ5KCkuJHByb21pc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbeyBzbHVnOiAnJywgbGFiZWw6ICcnLCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLnZpZXcnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZnVsbCc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMuZWRpdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMvdmlldy86cmVjaXBlSWQvZWRpdCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmNyZWF0ZScsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMvY3JlYXRlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVjaXBlcy9yZWNpcGVzLXNpbmdsZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc1ZpZXdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGluZ3JlZGllbnRzOiBbXSwgc3RlcHM6IFtdLCB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9ybSc7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2lnblVwL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NpZ25VcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1NpZ25VcENvbnRyb2xsZXInLCBTaWduVXBDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBTaWduVXBDb250cm9sbGVyKCRzY29wZSwgJGxvY2F0aW9uLCBBdXRoU2VydmljZSkge1xuICAgICRzY29wZS5zaWdudXAgPSB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyTG9jYWw6IGRvTG9jYWxSZWdpc3RyYXRpb24sXG4gICAgICBhdXRoZW50aWNhdGU6IGRvUHJvdmlkZXJBdXRoZW50aWNhdGlvbixcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbFJlZ2lzdHJhdGlvbih1c2VyKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbFJlZ2lzdHJhdGlvbih1c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1Byb3ZpZGVyQXV0aGVudGljYXRpb24ocHJvdmlkZXIpIHtcbiAgICAgIC8vIFRPRE86IERvIHVzZXIgYXV0aGVudGljYXRpb24gYW5kIHJlZ2lzdGVyIGxvY2FsIHVzZXIgYW5kIHJlZGlyZWN0IHRvIHByb2ZpbGVcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgc2lnbnVwIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ25VcC9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NpZ25VcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5zaWdudXAnKVxuICAgICAgLmNvbmZpZyhTaWduVXBSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcFJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3NpZ251cCcsIHtcbiAgICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ251cC9zaWdudXAudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1NpZ25VcENvbnRyb2xsZXInLFxuICAgICAgfSk7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCRzY29wZSkge1xuICAgICRzY29wZS53ZWxjb21lID0ge1xuICAgICAgZ3JlZXRpbmc6IHtcbiAgICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICAgIGxlYWQ6ICdSZWNpcGUgVG9tZSBsZXRcXCdzIHlvdSBjcmVhdGUgYW5kIG1hbmFnZSByZWNpcGVzLicsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCd3ZWxjb21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd2VsY29tZS93ZWxjb21lLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXZWxjb21lQ29udHJvbGxlcicsXG4gICAgICB9KTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGluZ3JlZGllbnQgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50L0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbmdyZWRpZW50JylcbiAgICAgIC5jb250cm9sbGVyKCdSVEluZ3JlZGllbnRDb250cm9sbGVyJywgUlRJbmdyZWRpZW50Q29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUlRJbmdyZWRpZW50Q29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgaW5ncmVkaWVudCBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQGRlc2MgUmVjaXBlIGluZ3JlZGllbnQgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYW4gYGluZ3JlZGllbnRgIG9iamVjdCBhbmRcbiAqICAgICAgIGRpc3BsYXlzIGl0IGluIHRoZSBzcGVjaWZpZWQgYGZvcm1hdGAuIEF2YWlsYWJsZSBmb3JtYXRzIGFyZTpcbiAqXG4gKiBcdFx0XHRcdC0gJ2lubGluZSc6IE91dHB1dHMgYW4gaW5saW5lIGVsZW1lbnQgY29udGFpbmluZyB0aGUgZm9ybWF0dGVkIGRhdGEuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBEaXNwbGF5cyBhbiBodG1sIGZvcm0gZm9yIGVkaXRpbmcgYW4gaW5ncmVkaWVudC5cbiAqXG4gKiBcdFx0XHQgV2hlbiB1c2VkIGluc2lkZSBhbiBgbmdSZXBlYXRgIGRpcmVjdGl2ZSwgeW91IGNhbiBzZXQgdGhlIGluZ3JlZGllbnQnc1xuICogXHRcdFx0IG9yZGVyIHByb3BlcnR5IGJ5IHBhc3NpbmcgYW4gZXhwcmVzc2lvbiB0byBgb3JkZXJgLlxuICpcbiAqIFx0XHRcdCBUbyBzaG93IGEgcmVtb3ZlIGJ1dHRvbiwgc2V0IHRoZSBgb25SZW1vdmVgIGhhbmRsZXIuXG4gKlxuICogQGV4YW1wbGUgPGxpPjxydC1pbmdyZWRpZW50IGluZ3JlZGllbnQ9XCJpbmdyZWRpZW50XCIgZm9ybWF0PVwiaW5saW5lXCI+PC9ydC1pbmdyZWRpZW50PjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRJbmdyZWRpZW50JywgUlRJbmdyZWRpZW50KTtcblxuICBmdW5jdGlvbiBSVEluZ3JlZGllbnQoKSB7XG4gICAgdmFyIEZPUk1BVF9JTkxJTkUgPSAnaW5saW5lJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVEluZ3JlZGllbnRDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGluZ3JlZGllbnQ6ICc9JyxcbiAgICAgICAgZm9ybWF0OiAnQCcsXG4gICAgICAgIG9yZGVyOiAnPScsXG4gICAgICAgIG9uUmVtb3ZlOiAnJicsXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IG5nLWluY2x1ZGU9XCJ2bS5nZXRUZW1wbGF0ZVVybCgpXCI+PC9kaXY+JyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG5cblxuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICB2bS5pbmdyZWRpZW50ID0gc2NvcGUuaW5ncmVkaWVudDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG5cbiAgICAgIGlmIChzY29wZS5vcmRlcikge1xuICAgICAgICB2bS5pbmdyZWRpZW50Lm9yZGVyID0gc2NvcGUub3JkZXI7XG4gICAgICB9XG5cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9JTkxJTkU6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC1pbmxpbmUudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWlubGluZS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogQGRlc2MgYXR0cmlidXRlIGRpcmVjdGl2ZSBmb3IgYDxpbnB1dD5gIGVsZW1lbnRzIHRoYXQgdmFsaWRhdGVzIGEgbWF0Y2hpbmdcbiAqIHZhbHVlIHRvIGFub3RoZXIgYDxpbnB1dD5gLlxuICpcbiAqIEBleGFtcGxlIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dDJcIiBpbnB1dC1tYXRjaD1cImlucHV0MVwiPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2gvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL0lucHV0TWF0Y2hcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5pbnB1dE1hdGNoJylcbiAgICAgIC5kaXJlY3RpdmUoJ2lucHV0TWF0Y2gnLCBJbnB1dE1hdGNoKTtcblxuICBmdW5jdGlvbiBJbnB1dE1hdGNoKCkge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBpbnB1dE1hdGNoOiAnPScsXG4gICAgICB9LFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBuZ01vZGVsKSB7XG4gICAgICBpZiAoIXNjb3BlLmlucHV0TWF0Y2gpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQodmFsdWUpIHtcbiAgICAgICAgaWYgKG5nTW9kZWwuJHVudG91Y2hlZCB8fCBuZ01vZGVsLiRwcmlzdGluZSkgeyByZXR1cm47IH1cblxuICAgICAgICB2YXIgdGFyZ2V0VmFsdWUgPSBzY29wZS5pbnB1dE1hdGNoLiR2aWV3VmFsdWU7XG4gICAgICAgIHZhciBpc01hdGNoID0gQm9vbGVhbih2YWx1ZSA9PT0gdGFyZ2V0VmFsdWUpO1xuXG4gICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KCdpbnB1dE1hdGNoJywgaXNNYXRjaCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG4gICAgICBuZ01vZGVsLiRmb3JtYXR0ZXJzLnVuc2hpZnQodmFsaWRhdGVJbnB1dCk7XG5cbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBjb250cm9sbGVyXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScpXG4gICAgICAuY29udHJvbGxlcignUlRSZWNpcGVDb250cm9sbGVyJywgUlRSZWNpcGVDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSVFJlY2lwZUNvbnRyb2xsZXIoJHN0YXRlLCAkd2luZG93LCBSZWNpcGVTZXJ2aWNlLCBTbHVnKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnJhdGluZyA9IHsgbWF4OiA1LCB9O1xuXG4gICAgdm0uZ2V0VGh1bWJuYWlsID0gZ2V0VGh1bWJuYWlsO1xuICAgIHZtLm9uUGljdHVyZVVwbG9hZCA9IG9uUGljdHVyZVVwbG9hZDtcbiAgICB2bS5nZW5lcmF0ZUNhdGVnb3J5U2x1ZyA9IGdlbmVyYXRlQ2F0ZWdvcnlTbHVnO1xuICAgIHZtLmFkZEluZ3JlZGllbnQgPSBhZGRJbmdyZWRpZW50O1xuICAgIHZtLnJlbW92ZUluZ3JlZGllbnQgPSByZW1vdmVJbmdyZWRpZW50O1xuICAgIHZtLmFkZFN0ZXAgPSBhZGRTdGVwO1xuICAgIHZtLnJlbW92ZXN0ZXAgPSByZW1vdmVTdGVwO1xuICAgIHZtLnNhdmVSZWNpcGUgPSBzYXZlUmVjaXBlO1xuICAgIHZtLmRlbGV0ZVJlY2lwZSA9IGRlbGV0ZVJlY2lwZTtcblxuICAgIGZ1bmN0aW9uIGdldFRodW1ibmFpbCgpIHtcbiAgICAgIGlmICghdm0ucmVjaXBlIHx8ICF2bS5yZWNpcGUudGh1bWJuYWlsKSB7XG4gICAgICAgIHJldHVybiAnYXNzZXQvaW1nL3JlY2lwZS1pbWFnZS1wbGFjZWhvbGRlci0zNjB4MjQwLnBuZyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2bS5yZWNpcGUudGh1bWJuYWlsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGljdHVyZVVwbG9hZChmaWxlLCBtZXNzYWdlLCBmbG93KSB7XG4gICAgICB2bS5yZWNpcGUudGh1bWJuYWlsID0gSlNPTi5wYXJzZShtZXNzYWdlKS5maWxlc1swXS51cmw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yeVNsdWcoKSB7XG4gICAgICB2bS5yZWNpcGUuY2F0ZWdvcnkuc2x1ZyA9IFNsdWcuc2x1Z2lmeSh2bS5yZWNpcGUuY2F0ZWdvcnkubGFiZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbmdyZWRpZW50KGRpcmVjdGlvbikge1xuICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGZvciAwLjEuMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEluZ3JlZGllbnQoKSB7XG4gICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHMucHVzaCh7XG4gICAgICAgIG9yZGVyOiB2bS5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoICsgMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUluZ3JlZGllbnQoaW5ncmVkaWVudCkge1xuICAgICAgdmFyIGluZGV4ID0gdm0ucmVjaXBlLmluZ3JlZGllbnRzLmluZGV4T2YoaW5ncmVkaWVudCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZtLnJlY2lwZS5pbmdyZWRpZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFN0ZXAoKSB7XG4gICAgICB2bS5yZWNpcGUuc3RlcHMucHVzaCh7XG4gICAgICAgIG9yZGVyOiB2bS5yZWNpcGUuc3RlcHMubGVuZ3RoICsgMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0ZXAoc3RlcCkge1xuICAgICAgdmFyIGluZGV4ID0gdm0ucmVjaXBlLnN0ZXBzLmluZGV4T2Yoc3RlcCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZtLnJlY2lwZS5zdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVSZWNpcGUoKSB7XG4gICAgICBpZiAodm0ucmVjaXBlLl9pZCkge1xuICAgICAgICAvLyBSZWNpcGUgZXhpc3RzIGluIHRoZSBkYXRhYmFzZSwgc28gZG8gdXBkYXRlXG4gICAgICAgIHZtLnJlY2lwZSA9IFJlY2lwZVNlcnZpY2UudXBkYXRlKHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0sIHZtLnJlY2lwZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOZXcgcmVjaXBlLCBkbyBzYXZlXG4gICAgICAgIHZtLnJlY2lwZSA9IFJlY2lwZVNlcnZpY2Uuc2F2ZSh2bS5yZWNpcGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgJHN0YXRlLmdvKCdeLnZpZXcnLCB7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVSZWNpcGUoKSB7XG4gICAgICBSZWNpcGVTZXJ2aWNlLnJlbW92ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9KTtcblxuICAgICAgLy8gVE9ETzogU2hvdyBzdWNjZXNzL2Vycm9yIG1lc3NhZ2UsIHByb3ZpZGUgdW5kbyBhY3Rpb25cbiAgICAgICRzdGF0ZS5nbygnXi5saXN0Jyk7XG4gICAgfVxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgY29tcG9uZW50IGRpcmVjdGl2ZVxuICpcbiAqIEBkZXNjIFJlY2lwZSBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhIGByZWNpcGVgIG9iamVjdCBhbmQgZGlzcGxheXMgaXQgaW4gdGhlXG4gKiAgICAgICBzcGVjaWZpZWQgYGZvcm1hdGAuIEF2YWlsYWJsZSBmb3JtYXRzIGFyZTpcbiAqXG4gKiBcdFx0XHRcdC0gJ2NhcmQnOiBBIHNsaW0gdmlldyB0aGF0IGlzIHBlcmZlY3QgZm9yIGRpc3BsYXlpbmcgaW4gYSBsaXN0IG9mIHJvd3NcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdG9yIHRpbGVzL2NhcmRzLlxuICogXHRcdFx0XHQtICdmdWxsJzogRnVsbCB2aWV3IHN1aXRhYmxlIGZvciBmdWxsIHBhZ2Ugb3IgZGV0YWlsIHZpZXcuIFNob3dzIGFsbFxuICogXHRcdFx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlIGZpZWxkcy5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IEZ1bGwgdmlldyB3ZWIgZm9ybSBmb3IgZWRpdGluZyBvciBjcmVhdGluZyByZWNpcGVzLlxuICpcbiAqIEBleGFtcGxlIDxsaSBjbGFzcz1cImNvbC1tZC00XCI+PHJ0LXJlY2lwZSByZWNpcGU9XCJyZWNpcGVcIiBmb3JtYXQ9XCJjYXJkXCI+PC9ydC1yZWNpcGU+PC9saT5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGUvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JlY2lwZVxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnJlY2lwZScpXG4gICAgICAuZGlyZWN0aXZlKCdydFJlY2lwZScsIFJUUmVjaXBlKTtcblxuICBmdW5jdGlvbiBSVFJlY2lwZSgkaW50ZXJwb2xhdGUpIHtcbiAgICB2YXIgRk9STUFUX0NBUkQgPSAnY2FyZCcsXG4gICAgICAgIEZPUk1BVF9GVUxMID0gJ2Z1bGwnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgdmFyIEZPUk1fTUVUSE9EX1BPU1QgPSBcInBvc3RcIixcbiAgICAgICAgRk9STV9NRVRIT0RfUFVUID0gXCJwdXRcIjtcblxuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdSVFJlY2lwZUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgcmVjaXBlOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcGxhdGVVcmwoZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIHN3aXRjaChhdHRycy5mb3JtYXQpIHtcbiAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRlVMTDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIGlmIChhdHRycy5mb3JtYXQgPT09IEZPUk1BVF9GT1JNICYmICFhdHRycy5yZWNpcGUpIHtcbiAgICAgICAgdm0uc2F2ZU1ldGhvZCA9IEZPUk1fTUVUSE9EX1BPU1Q7XG4gICAgICB9XG5cbiAgICAgIHZtLnNhdmVNZXRob2QgPSBGT1JNX01FVEhPRF9QVVQ7XG4gICAgICB2bS5yZWNpcGUgPSBzY29wZS5yZWNpcGU7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG5cbiAgICAgIC8vIEdldCB0ZW1wbGF0ZSB1cmwgaW4gbGluayBmdW5jdGlvbiB0byB1c2UgcmVzb2x2ZWQgYXR0cmlidXRlc1xuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0NBUkQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GVUxMOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZ1bGwudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1mb3JtLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtY2FyZC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cblxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzdGVwIGNvbXBvbmVudCBjb250cm9sbGVyXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcpXG4gICAgICAuY29udHJvbGxlcignUlRTdGVwQ29udHJvbGxlcicsIFJUU3RlcENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJUU3RlcENvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IGRpcmVjdGl2ZVxuICpcbiAqIEBkZXNjIFJlY2lwZSBzdGVwIGRpcmVjdGl2ZSB0aGF0IHRha2VzIGEgYHN0ZXBgIG9iamVjdCBhbmRcbiAqICAgICAgIGRpc3BsYXlzIGl0IGluIHRoZSBzcGVjaWZpZWQgYGZvcm1hdGAuIEF2YWlsYWJsZSBmb3JtYXRzIGFyZTpcbiAqXG4gKiBcdFx0XHRcdC0gJ2lubGluZSc6IE91dHB1dHMgYW4gaW5saW5lIGVsZW1lbnQgY29udGFpbmluZyB0aGUgZm9ybWF0dGVkIGRhdGEuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBEaXNwbGF5cyBhbiBodG1sIGZvcm0gZm9yIGVkaXRpbmcgYSBzdGVwLlxuICpcbiAqIFx0XHRcdCBXaGVuIHVzZWQgaW5zaWRlIGFuIGBuZ1JlcGVhdGAgZGlyZWN0aXZlLCB5b3UgY2FuIHNldCB0aGUgc3RlcCdzXG4gKiBcdFx0XHQgb3JkZXIgcHJvcGVydHkgYnkgcGFzc2luZyBhbiBleHByZXNzaW9uIHRvIGBvcmRlcmAuXG4gKlxuICogXHRcdFx0IFRvIHNob3cgYSByZW1vdmUgYnV0dG9uLCBzZXQgdGhlIGBvblJlbW92ZWAgaGFuZGxlci5cbiAqXG4gKiBAZXhhbXBsZSA8bGk+PHJ0LXN0ZXAgc3RlcD1cInN0ZXBcIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LXN0ZXA+PC9saT5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwXG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuc3RlcCcpXG4gICAgICAuZGlyZWN0aXZlKCdydFN0ZXAnLCBSVFN0ZXApO1xuXG4gIGZ1bmN0aW9uIFJUU3RlcCgpIHtcbiAgICB2YXIgRk9STUFUX0lOTElORSA9ICdpbmxpbmUnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUU3RlcENvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgc3RlcDogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgICAgb3JkZXI6ICc9JyxcbiAgICAgICAgb25SZW1vdmU6ICcmJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB2bSkge1xuICAgICAgdm0uc3RlcCA9IHNjb3BlLnN0ZXA7XG4gICAgICB2bS5mb3JtYXQgPSBzY29wZS5mb3JtYXQ7XG4gICAgICB2bS5vblJlbW92ZSA9IHNjb3BlLm9uUmVtb3ZlO1xuXG4gICAgICBpZiAoc2NvcGUub3JkZXIpIHtcbiAgICAgICAgdm0uc3RlcC5vcmRlciA9IHNjb3BlLm9yZGVyO1xuICAgICAgfVxuXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfSU5MSU5FOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtYmxvY2sudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfRk9STTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvc3RlcC9zdGVwLWJsb2NrLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSB1c2VyIG1lbnUgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5jb250cm9sbGVyKCdVc2VyTWVudUNvbnRyb2xsZXInLCBVc2VyTWVudUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFVzZXJNZW51Q29udHJvbGxlcigkc2NvcGUsICRzdGF0ZSwgVXNlclNlcnZpY2UpIHtcbiAgICBVc2VyU2VydmljZVxuICAgICAgLmdldEN1cnJlbnRVc2VyKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgJHNjb3BlLnVzZXIgPSB1c2VyO1xuICAgICAgfSk7XG5cbiAgICAkc2NvcGUuaXNMb2dnZWRJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9O1xuICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIFVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgJHN0YXRlLmdvKCd3ZWxjb21lJyk7XG4gICAgfTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBtZW51IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9Vc2VyTWVudS9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmRpcmVjdGl2ZSgndXNlck1lbnUnLCBVc2VyTWVudSk7XG5cbiAgZnVuY3Rpb24gVXNlck1lbnUoVXNlclNlcnZpY2UpIHtcbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnVXNlck1lbnVDb250cm9sbGVyJyxcbiAgICAgIHNjb3BlOiB7fSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUudGVtcGxhdGUuaHRtbCcsXG4gICAgfTtcblxuICAgIHJldHVybiBkaXJlY3RpdmU7XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgYXV0aGVudGljYXRpb24gc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGhcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLmF1dGgnKVxuICAgICAgLmZhY3RvcnkoJ0F1dGhTZXJ2aWNlJywgQXV0aFNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKCRodHRwLCAkd2luZG93LCAkcSwgand0SGVscGVyKSB7XG5cbiAgICAvLyBUT0RPOiBBZGQgdmVyaWZ5IGZ1bmN0aW9uXG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGRvTG9jYWxSZWdpc3RyYXRpb246IGRvTG9jYWxSZWdpc3RyYXRpb24sXG4gICAgICBkb0xvY2FsTG9naW46IGRvTG9jYWxMb2dpbixcbiAgICAgIHJldm9rZTogcmV2b2tlLFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24odXNlcikge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5wb3N0KCcvYXV0aC9sb2NhbC9yZWdpc3RlcicsIHVzZXIpXG4gICAgICAgIC5zdWNjZXNzKG9uQXV0aFN1Y2Nlc3MpXG4gICAgICAgIC5lcnJvcihvblJlZ2lzdHJhdGlvbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsTG9naW4odXNlcikge1xuICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgIC5wb3N0KCcvYXV0aC9sb2NhbCcsIHVzZXIpXG4gICAgICAgIC5zdWNjZXNzKG9uQXV0aFN1Y2Nlc3MpXG4gICAgICAgIC5lcnJvcihvbkxvZ2luRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldm9rZSgpIHtcbiAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkF1dGhTdWNjZXNzKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmlkX3Rva2VuKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4gPSBkYXRhLmlkX3Rva2VuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVnaXN0cmF0aW9uRXJyb3IoZGF0YSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvZ2luRXJyb3IoZGF0YSkge1xuICAgICAgcmV2b2tlKCk7XG5cbiAgICAgIC8vIFRPRE86IFByb3ZpZGUgZXJyb3IgZmVlZGJhY2tcbiAgICB9XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHNlcnZpY2VcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1JlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJylcbiAgICAgIC5mYWN0b3J5KCdSZWNpcGVTZXJ2aWNlJywgUmVjaXBlU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gUmVjaXBlU2VydmljZSgkcmVzb3VyY2UsICR3aW5kb3csIFVzZXJTZXJ2aWNlKSB7XG4gICAgdmFyIF9oZWFkZXJzID0ge1xuICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICB9O1xuXG4gICAgdmFyIHNlcnZpY2UgPSAkcmVzb3VyY2UoXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL3JlY2lwZXMvOnJlY2lwZUlkJyxcbiAgICAgIHsgcmVjaXBlSWQ6ICdAcmVjaXBlSWQnLCB9LFxuICAgICAge1xuICAgICAgICBnZXQ6IHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHNhdmU6IHsgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBxdWVyeTogeyBtZXRob2Q6ICdHRVQnLCBpc0FycmF5OiB0cnVlLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgcmVtb3ZlOiB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBkZWxldGU6IHsgbWV0aG9kOiAnREVMRVRFJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHVwZGF0ZTogeyBtZXRob2Q6ICdQVVQnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXIvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvVXNlclxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicpXG4gICAgICAuZmFjdG9yeSgnVXNlclNlcnZpY2UnLCBVc2VyU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gVXNlclNlcnZpY2UoJGh0dHAsICR3aW5kb3csICRxLCBBdXRoU2VydmljZSkge1xuICAgIHZhciBHUkFWQVRBUl9CQVNFVVJMID0gJ2h0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8nO1xuXG4gICAgdmFyIF9jdXJyZW50VXNlciA9IG51bGw7XG5cbiAgICB2YXIgc2VydmljZSA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IGlzTG9nZ2VkSW4sXG4gICAgICBnZXRDdXJyZW50VXNlcjogZ2V0Q3VycmVudFVzZXIsXG4gICAgICBnZXRHcmF2YXRhckF2YXRhclVybDogZ2V0R3JhdmF0YXJBdmF0YXJVcmwsXG4gICAgICB1cGRhdGVDcmVkZW50aWFsczogdXBkYXRlQ3JlZGVudGlhbHMsXG4gICAgICBsb2dvdXQ6IGxvZ291dCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKCkge1xuICAgICAgcmV0dXJuIF9jdXJyZW50VXNlciA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgICAgIGlmIChfY3VycmVudFVzZXIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShfY3VycmVudFVzZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBWZXJpZnkgd2l0aCBBdXRoU2VydmljZSB0byByZW1vdmUgJHdpbmRvdyBkZXBlbmRlbmN5XG4gICAgICBpZiAoJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5nZXQoJy9hcGkvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvbkdldEN1cnJlbnRVc2VyU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvbkdldEN1cnJlbnRVc2VyRXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlclN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uR2V0Q3VycmVudFVzZXJFcnJvcihyZXNwb25zZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKSB7XG4gICAgICBpZiAoIV9jdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJyc7IC8vIFRPRE86IFJldHVybiBwbGFjZWhvbGRlciBhdmF0YXJcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoX2N1cnJlbnRVc2VyLmVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS50b1N0cmluZygpO1xuXG4gICAgICByZXR1cm4gR1JBVkFUQVJfQkFTRVVSTCArIGhhc2ggKyAnLmpwZyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAgIC5wdXQoJy9hcGkvdXNlci8nLCBjcmVkZW50aWFscywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4ob25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MpXG4gICAgICAgICAgICAuY2F0Y2gob25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc1N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgX2N1cnJlbnRVc2VyID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2VcbiAgICAgICAgICAuZG9Mb2NhbExvZ2luKHtcbiAgICAgICAgICAgIGVtYWlsOiBfY3VycmVudFVzZXIuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uVXBkYXRlQ3JlZGVudGlhbHNFcnJvcihyZXNwb25zZSkge1xuICAgICAgICAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIHRvIHVzZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAucmV2b2tlKCk7XG5cbiAgICAgIF9jdXJyZW50VXNlciA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=