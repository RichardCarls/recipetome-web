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
 * Recipe Tome application controller
 * @namespace RecipeTome/Controller
 * @memberof RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome')
      .controller('RecipeTomeController', RecipeTomeController);

  function RecipeTomeController() {
    var vm = this;

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
 * Recipe Tome login view controller
 * @namespace RecipeTome/Login/Controller
 * @memberof RecipeTome/Login
 */
;(function(angular) {

  angular
    .module('recipetome.login')
      .controller('LoginController', LoginController);

  function LoginController($scope, $state, AuthService) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    };

    vm.loginLocal = doLocalLogin;

    function doLocalLogin() {
      AuthService
        .doLocalLogin(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state.go('profile');
        });
    }

  }
  LoginController.$inject = ["$scope", "$state", "AuthService"];

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
 * Recipe Tome profile view controller
 * @namespace RecipeTome/Profile/Controller
 * @memberof RecipeTome/Profile
 */
;(function(angular) {

  angular
    .module('recipetome.profile')
      .controller('ProfileController', ProfileController);

  function ProfileController($state, user, UserService) {
    var vm = this;

    vm.user = user;
    vm.gravatarImage = UserService.getGravatarAvatarUrl();
    vm.credentials = {
      email: '',
      password: '',
      current_password: '',
    };

    vm.updateCredentials = UserService.updateCredentials;
    vm.doUnregister = doUnregister;

    function updateCredentials(credentials) {
      UserService
        .updateCredentials(credentials)
          .then(function() {
            // TODO: Reload profile after submit?
            $state.go('profile');
          });
    }

    function doUnregister() {
      UserService
        .unregister()
        .then(function() {
          // TODO: Show success/error message
          $state.go('welcome');
        });
    }
  }
  ProfileController.$inject = ["$state", "user", "UserService"];

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

    vm.categories = categories;
    vm.categoryFilter = '';

  }
  RecipesListController.$inject = ["recipes", "categories"];

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
 * Recipe Tome signup view controller
 * @namespace RecipeTome/SignUp/Controller
 * @memberof RecipeTome/SignUp
 */
;(function(angular) {

  angular
    .module('recipetome.signup')
      .controller('SignUpController', SignUpController);

  function SignUpController($state, AuthService) {
    var vm = this;

    vm.user = {
      email: '',
      password: '',
    };

    vm.registerLocal = doLocalRegistration;

    function doLocalRegistration() {
      AuthService
        .doLocalRegistration(vm.user)
        .then(function() {
          // TODO: Show success/error message
          $state.go('profile');
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
  WelcomeController.$inject = ["$scope"];

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
  WelcomeRoutesConfig.$inject = ["$stateProvider"];

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

    vm.moveUp = function() {
      vm.ingredient.order -= 1;
    };

    vm.moveDown = function() {
      vm.ingredient.order += 1;
    };
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
    vm.idToken = $window.sessionStorage.id_token;
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

    // TODO: Save form fields in sessionStorage to persist through refresh

    function getThumbnail() {
      if (!vm.recipe || !vm.recipe.thumbnail) {
        return 'asset/img/recipe-image-placeholder-360x240.png';
      }

      return vm.recipe.thumbnail;
    }

    function onPictureUpload(file, message, flow) {
      vm.recipe.thumbnail = JSON.parse(message).photo.url;
    }

    function generateCategorySlug() {
      vm.recipe.category.slug = Slug.slugify(vm.recipe.category.label);
    }

    function addIngredient() {
      vm.recipe.ingredients.push({
        order: vm.recipe.ingredients.length + 1,
      });
    }

    function onIngredientReorder() {
      for (var i = 0, len = vm.recipe.ingredients.length; i < len; i++) {
        vm.recipe.ingredients[i].order = i + 1;
      }
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

    function onStepReorder() {
      for (var i = 0, len = vm.recipe.steps.length; i < len; i++) {
        vm.recipe.steps[i].order = i + 1;
      }
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
        RecipeService
          .update({ recipeId: vm.recipe._id, }, vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state.go('^.view', { recipeId: vm.recipe._id, });
          });
      } else {
        // New recipe, do save
        RecipeService
          .save(vm.recipe, function(recipe) {
            vm.recipe = recipe;

            // TODO: Show success/error message
            $state.go('^.view', { recipeId: vm.recipe._id, });
          });
      }
    }

    function deleteRecipe() {
      RecipeService
        .remove({ recipeId: vm.recipe._id, }, function(response) {
          // TODO: Show success/error message, provide undo action
          $state.go('^.list');
        });
    }
  }
  RTRecipeController.$inject = ["$state", "$window", "RecipeService", "Slug"];

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
      if (attrs.format === FORMAT_FORM && !scope.recipe._id) {
        vm.saveMethod = FORM_METHOD_POST;
        vm.title = 'New Recipe';
      } else {
        vm.saveMethod = FORM_METHOD_PUT;
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
 * Recipe Tome user menu component controller
 *
 * @namespace RecipeTome/Components/UserMenu/Controller
 * @memberof RecipeTome/Components/UserMenu
 */
;(function(angular) {

  angular
    .module('components.usermenu')
      .controller('UserMenuController', UserMenuController);

  function UserMenuController($state, UserService) {
    var vm = this;

    vm.isLoggedIn = UserService.isLoggedIn;
    vm.logout = logout;

    function logout() {
      UserService.logout();

      // TODO: Show success/error message
      $state.go('welcome');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXRvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5qcyIsImxvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInByb2ZpbGUvcHJvZmlsZS5tb2R1bGUuanMiLCJyZWNpcGVzL3JlY2lwZXMubW9kdWxlLmpzIiwic2VydmljZXMvc2VydmljZXMubW9kdWxlLmpzIiwic2lnbnVwL3NpZ251cC5tb2R1bGUuanMiLCJ3ZWxjb21lL3dlbGNvbWUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQubW9kdWxlLmpzIiwiY29tcG9uZW50cy9pbnB1dC1tYXRjaC9pbnB1dC1tYXRjaC5tb2R1bGUuanMiLCJjb21wb25lbnRzL21hc29ucnkvbWFzb25yeS5tb2R1bGUuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUubW9kdWxlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAubW9kdWxlLmpzIiwiY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS5tb2R1bGUuanMiLCJzZXJ2aWNlcy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic2VydmljZXMvcmVjaXBlL3JlY2lwZS5tb2R1bGUuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIubW9kdWxlLmpzIiwicmVjaXBldG9tZS5jb250cm9sbGVyLmpzIiwicmVjaXBldG9tZS5yb3V0ZXMuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucm91dGVzLmpzIiwicHJvZmlsZS9wcm9maWxlLmNvbnRyb2xsZXIuanMiLCJwcm9maWxlL3Byb2ZpbGUucm91dGVzLmpzIiwicmVjaXBlcy9yZWNpcGVzLWxpc3QuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy1zaW5nbGUuY29udHJvbGxlci5qcyIsInJlY2lwZXMvcmVjaXBlcy5yb3V0ZXMuanMiLCJzaWdudXAvc2lnbnVwLmNvbnRyb2xsZXIuanMiLCJzaWdudXAvc2lnbnVwLnJvdXRlcy5qcyIsIndlbGNvbWUvd2VsY29tZS5jb250cm9sbGVyLmpzIiwid2VsY29tZS93ZWxjb21lLnJvdXRlcy5qcyIsImNvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL2luZ3JlZGllbnQvaW5ncmVkaWVudC5kaXJlY3RpdmUuanMiLCJjb21wb25lbnRzL2lucHV0LW1hdGNoL2lucHV0LW1hdGNoLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvbWFzb25yeS9tYXNvbnJ5LWl0ZW0uZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnktc3RhbXAuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9tYXNvbnJ5L21hc29ucnkuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbnRyb2xsZXIuanMiLCJjb21wb25lbnRzL3JlY2lwZS9yZWNpcGUuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9zdGVwL3N0ZXAuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvc3RlcC9zdGVwLmRpcmVjdGl2ZS5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuY29udHJvbGxlci5qcyIsImNvbXBvbmVudHMvdXNlcm1lbnUvdXNlcm1lbnUuZGlyZWN0aXZlLmpzIiwic2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy9yZWNpcGUvcmVjaXBlLnNlcnZpY2UuanMiLCJzZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWNpcGV0b21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWNpcGUgVG9tZSBhcHBsaWNhdGlvbiBtb2R1bGVcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScsIFtcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAncmVjaXBldG9tZS5zZXJ2aWNlcycsXG4gICAgICAncmVjaXBldG9tZS5jb21wb25lbnRzJyxcbiAgICAgICdyZWNpcGV0b21lLndlbGNvbWUnLFxuICAgICAgJ3JlY2lwZXRvbWUuc2lnbnVwJyxcbiAgICAgICdyZWNpcGV0b21lLmxvZ2luJyxcbiAgICAgICdyZWNpcGV0b21lLnByb2ZpbGUnLFxuICAgICAgJ3JlY2lwZXRvbWUucmVjaXBlcycsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBjb21wb25lbnRzIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5jb21wb25lbnRzJywgW1xuICAgICAgJ2NvbXBvbmVudHMudXNlcm1lbnUnLFxuICAgICAgJ2NvbXBvbmVudHMucmVjaXBlJyxcbiAgICAgICdjb21wb25lbnRzLmluZ3JlZGllbnQnLFxuICAgICAgJ2NvbXBvbmVudHMuc3RlcCcsXG4gICAgICAnY29tcG9uZW50cy5pbnB1dE1hdGNoJyxcbiAgICAgICdjb21wb25lbnRzLm1hc29ucnknLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbG9naW4gcGFnZS5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW5cbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLmxvZ2luJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHByb2ZpbGUgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiBhdXRoZW50aWNhdGVkIHVzZXIncyBwcm9maWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnByb2ZpbGUnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ2NvbXBvbmVudHMuaW5wdXRNYXRjaCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnLCBbXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICd1aS5ib290c3RyYXAnLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzZXJ2aWNlcyBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNlcnZpY2VzJywgW1xuICAgICAgJ3NlcnZpY2VzLmF1dGgnLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgICAgJ3NlcnZpY2VzLnJlY2lwZScsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSBzaWdudXAgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgc2lnbnVwIHBhZ2UuXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NpZ251cFxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBtb2R1bGVcbiAqXG4gKiBUaGlzIHZpZXcgc3RhdGUgcmVwcmVzZW50cyBhbiB1bmF1dGhlbnRpY2F0ZWQgdXNlciBvbiB0aGUgbGFuZGluZyBwYWdlLlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9XZWxjb21lXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS53ZWxjb21lJywgW1xuICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmluZ3JlZGllbnQnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbnB1dE1hdGNoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmlucHV0TWF0Y2gnLCBbXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBNYXNvbnJ5IGxheW91dCBjb21wb25lbnQgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvTWFzb25yeVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50c1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5tYXNvbnJ5JywgW10pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMucmVjaXBlJywgW1xuICAgICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgICAndWkucm91dGVyJyxcbiAgICAgICdzbHVnaWZpZXInLFxuICAgICAgJ2Zsb3cnLFxuICAgICAgJ2FuZ3VsYXItc29ydGFibGUtdmlldycsXG4gICAgICAnc2VydmljZXMucmVjaXBlJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBzdGVwIGNvbXBvbmVudCBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnN0ZXAnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgbWVudSBjb21wb25lbnQgbW9kdWxlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHNcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnLCBbXG4gICAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAgICd1aS5yb3V0ZXInLFxuICAgICAgJ3NlcnZpY2VzLnVzZXInLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9BdXRoXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcsIFtcbiAgICAgICdhbmd1bGFyLWp3dCcsXG4gICAgXSk7XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZSBtb2R1bGVcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMucmVjaXBlJywgW1xuICAgICAgJ25nUmVzb3VyY2UnLFxuICAgIF0pO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBzZXJ2aWNlIG1vZHVsZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TZXJ2aWNlc1xuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMudXNlcicsIFtcbiAgICAgICdzZXJ2aWNlcy5hdXRoJyxcbiAgICBdKTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIGFwcGxpY2F0aW9uIGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZScpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlVG9tZUNvbnRyb2xsZXInLCBSZWNpcGVUb21lQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUmVjaXBlVG9tZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnRlY2hMaXN0ID0gW1xuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9ub2RlanMub3JnLycsIG5hbWU6ICdOb2RlLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cDovL2V4cHJlc3Nqcy5jb20vJywgbmFtZTogJ0V4cHJlc3MuanMnIH0sXG4gICAgICB7IGxpbms6ICdodHRwOi8vcGFzc3BvcnRqcy5vcmcvJywgbmFtZTogJ1Bhc3Nwb3J0LmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsIG5hbWU6ICdBbmd1bGFyLmpzJyB9LFxuICAgICAgeyBsaW5rOiAnaHR0cHM6Ly93d3cubW9uZ29kYi5vcmcvJywgbmFtZTogJ01vbmdvREInIH0sXG4gICAgXTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgd2VsY29tZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lJylcbiAgICAgIC5jb25maWcoUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSb3V0ZXNDb25maWcoJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xuICB9XG4gIFJvdXRlc0NvbmZpZy4kaW5qZWN0ID0gW1wiJHVybFJvdXRlclByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvTG9naW5cbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUubG9naW4nKVxuICAgICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKCRzY29wZSwgJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICB2bS5sb2dpbkxvY2FsID0gZG9Mb2NhbExvZ2luO1xuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKCkge1xuICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgLmRvTG9jYWxMb2dpbih2bS51c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICRzdGF0ZS5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBMb2dpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiLCBcIiRzdGF0ZVwiLCBcIkF1dGhTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgbG9naW4gdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvTG9naW4vUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Mb2dpblxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5sb2dpbicpXG4gICAgICAuY29uZmlnKExvZ2luUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBMb2dpblJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgTG9naW5Sb3V0ZXNDb25maWcuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcHJvZmlsZSB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1Byb2ZpbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucHJvZmlsZScpXG4gICAgICAuY29udHJvbGxlcignUHJvZmlsZUNvbnRyb2xsZXInLCBQcm9maWxlQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUHJvZmlsZUNvbnRyb2xsZXIoJHN0YXRlLCB1c2VyLCBVc2VyU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS51c2VyID0gdXNlcjtcbiAgICB2bS5ncmF2YXRhckltYWdlID0gVXNlclNlcnZpY2UuZ2V0R3JhdmF0YXJBdmF0YXJVcmwoKTtcbiAgICB2bS5jcmVkZW50aWFscyA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICB2bS51cGRhdGVDcmVkZW50aWFscyA9IFVzZXJTZXJ2aWNlLnVwZGF0ZUNyZWRlbnRpYWxzO1xuICAgIHZtLmRvVW5yZWdpc3RlciA9IGRvVW5yZWdpc3RlcjtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAudXBkYXRlQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBSZWxvYWQgcHJvZmlsZSBhZnRlciBzdWJtaXQ/XG4gICAgICAgICAgICAkc3RhdGUuZ28oJ3Byb2ZpbGUnKTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb1VucmVnaXN0ZXIoKSB7XG4gICAgICBVc2VyU2VydmljZVxuICAgICAgICAudW5yZWdpc3RlcigpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgJHN0YXRlLmdvKCd3ZWxjb21lJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBQcm9maWxlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwidXNlclwiLCBcIlVzZXJTZXJ2aWNlXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcHJvZmlsZSB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Qcm9maWxlL1JvdXRlc1xuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUHJvZmlsZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgncmVjaXBldG9tZS5wcm9maWxlJylcbiAgICAgIC5jb25maWcoUHJvZmlsZVJvdXRlc0NvbmZpZyk7XG5cbiAgZnVuY3Rpb24gUHJvZmlsZVJvdXRlc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3Byb2ZpbGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9maWxlJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcHJvZmlsZS9wcm9maWxlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQcm9maWxlQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHVzZXI6IFtcIlVzZXJTZXJ2aWNlXCIsIGZ1bmN0aW9uKFVzZXJTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gVXNlclNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBQcm9maWxlUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZXMgYWRkIHZpZXcgY29udHJvbGxlclxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvTGlzdC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzL0xpc3RcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc0xpc3RDb250cm9sbGVyJywgUmVjaXBlc0xpc3RDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzTGlzdENvbnRyb2xsZXIocmVjaXBlcywgY2F0ZWdvcmllcykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yZWNpcGVzID0gcmVjaXBlcztcblxuICAgIHZtLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIHZtLmNhdGVnb3J5RmlsdGVyID0gJyc7XG5cbiAgfVxuICBSZWNpcGVzTGlzdENvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZXNcIiwgXCJjYXRlZ29yaWVzXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlcyBzaW5nbGUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvUmVjaXBlcy9TaW5nbGUvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvUmVjaXBlcy9TaW5nbGVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUucmVjaXBlcycpXG4gICAgICAuY29udHJvbGxlcignUmVjaXBlc1ZpZXdDb250cm9sbGVyJywgUmVjaXBlc1ZpZXdDb250cm9sbGVyKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzVmlld0NvbnRyb2xsZXIocmVjaXBlLCBmb3JtYXQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuICAgIHZtLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuICBSZWNpcGVzVmlld0NvbnRyb2xsZXIuJGluamVjdCA9IFtcInJlY2lwZVwiLCBcImZvcm1hdFwiXTtcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGVzIHZpZXcgcm91dGVzXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1JlY2lwZXMvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9SZWNpcGVzXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnJlY2lwZXMnKVxuICAgICAgLmNvbmZpZyhSZWNpcGVzUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBSZWNpcGVzUm91dGVzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdyZWNpcGVzJywge1xuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XFxuXFx0PG1haW4gdWktdmlldz5cXG5cXHQ8L21haW4+XFxuPC9kaXY+JyxcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3JlY2lwZXMubGlzdCcsIHtcbiAgICAgICAgdXJsOiAnL3JlY2lwZXMnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUmVjaXBlc0xpc3RDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgcmVjaXBlczogW1wiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbihSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5xdWVyeSgpLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBmdW5jdGlvbigkaHR0cCwgJHdpbmRvdykge1xuICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VyL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbeyBzbHVnOiAnJywgbGFiZWw6ICcnLCB9XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy52aWV3Jywge1xuICAgICAgICB1cmw6ICcvcmVjaXBlcy92aWV3LzpyZWNpcGVJZCcsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogW1wiJHN0YXRlUGFyYW1zXCIsIFwiUmVjaXBlU2VydmljZVwiLCBmdW5jdGlvbigkc3RhdGVQYXJhbXMsIFJlY2lwZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWNpcGVTZXJ2aWNlLmdldCh7IHJlY2lwZUlkOiAkc3RhdGVQYXJhbXMucmVjaXBlSWQsIH0pLiRwcm9taXNlO1xuICAgICAgICAgIH1dLFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN0YXRlKCdyZWNpcGVzLmVkaXQnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL3ZpZXcvOnJlY2lwZUlkL2VkaXQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZWNpcGVzL3JlY2lwZXMtc2luZ2xlLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWNpcGVzVmlld0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICByZWNpcGU6IFtcIiRzdGF0ZVBhcmFtc1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgZnVuY3Rpb24oJHN0YXRlUGFyYW1zLCBSZWNpcGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVjaXBlU2VydmljZS5nZXQoeyByZWNpcGVJZDogJHN0YXRlUGFyYW1zLnJlY2lwZUlkLCB9KS4kcHJvbWlzZTtcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICdmb3JtJztcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5zdGF0ZSgncmVjaXBlcy5jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9yZWNpcGVzL2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlY2lwZXMvcmVjaXBlcy1zaW5nbGUudmlldy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ1JlY2lwZXNWaWV3Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIHJlY2lwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpbmdyZWRpZW50czogW10sIHN0ZXBzOiBbXSwgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Zvcm0nO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuICBSZWNpcGVzUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IGNvbnRyb2xsZXJcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvQ29udHJvbGxlclxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2lnblVwXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLnNpZ251cCcpXG4gICAgICAuY29udHJvbGxlcignU2lnblVwQ29udHJvbGxlcicsIFNpZ25VcENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZ25VcENvbnRyb2xsZXIoJHN0YXRlLCBBdXRoU2VydmljZSkge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS51c2VyID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG5cbiAgICB2bS5yZWdpc3RlckxvY2FsID0gZG9Mb2NhbFJlZ2lzdHJhdGlvbjtcblxuICAgIGZ1bmN0aW9uIGRvTG9jYWxSZWdpc3RyYXRpb24oKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAuZG9Mb2NhbFJlZ2lzdHJhdGlvbih2bS51c2VyKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICRzdGF0ZS5nbygncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBTaWduVXBDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJBdXRoU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHNpZ251cCB2aWV3IHJvdXRlc1xuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TaWduVXAvUm91dGVzXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9TaWduVXBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUuc2lnbnVwJylcbiAgICAgIC5jb25maWcoU2lnblVwUm91dGVzQ29uZmlnKTtcblxuICBmdW5jdGlvbiBTaWduVXBSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCdzaWdudXAnLCB7XG4gICAgICAgIHVybDogJy9zaWdudXAnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zaWdudXAvc2lnbnVwLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTaWduVXBDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgfSk7XG4gIH1cbiAgU2lnblVwUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyBjb250cm9sbGVyXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9XZWxjb21lXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdyZWNpcGV0b21lLndlbGNvbWUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1dlbGNvbWVDb250cm9sbGVyJywgV2VsY29tZUNvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVDb250cm9sbGVyKCRzY29wZSkge1xuICAgICRzY29wZS53ZWxjb21lID0ge1xuICAgICAgZ3JlZXRpbmc6IHtcbiAgICAgICAgaGVhZGxpbmU6ICdZb3VyIFBlcnNvbmFsIFJlY2lwZSBEYXRhYmFzZScsXG4gICAgICAgIGxlYWQ6ICdSZWNpcGUgVG9tZSBsZXRcXCdzIHlvdSBjcmVhdGUgYW5kIG1hbmFnZSByZWNpcGVzLicsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgV2VsY29tZUNvbnRyb2xsZXIuJGluamVjdCA9IFtcIiRzY29wZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHdlbGNvbWUgdmlldyByb3V0ZXNcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvV2VsY29tZS9Sb3V0ZXNcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1dlbGNvbWVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3JlY2lwZXRvbWUud2VsY29tZScpXG4gICAgICAuY29uZmlnKFdlbGNvbWVSb3V0ZXNDb25maWcpO1xuXG4gIGZ1bmN0aW9uIFdlbGNvbWVSb3V0ZXNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlKCd3ZWxjb21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvd2VsY29tZS93ZWxjb21lLnZpZXcuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXZWxjb21lQ29udHJvbGxlcicsXG4gICAgICB9KTtcbiAgfVxuICBXZWxjb21lUm91dGVzQ29uZmlnLiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBjb250cm9sbGVyXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5ncmVkaWVudC9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL0luZ3JlZGllbnRcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcpXG4gICAgICAuY29udHJvbGxlcignUlRJbmdyZWRpZW50Q29udHJvbGxlcicsIFJUSW5ncmVkaWVudENvbnRyb2xsZXIpO1xuXG4gIGZ1bmN0aW9uIFJUSW5ncmVkaWVudENvbnRyb2xsZXIoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLm1vdmVVcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdm0uaW5ncmVkaWVudC5vcmRlciAtPSAxO1xuICAgIH07XG5cbiAgICB2bS5tb3ZlRG93biA9IGZ1bmN0aW9uKCkge1xuICAgICAgdm0uaW5ncmVkaWVudC5vcmRlciArPSAxO1xuICAgIH07XG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBpbmdyZWRpZW50IGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgaW5ncmVkaWVudCBkaXJlY3RpdmUgdGhhdCB0YWtlcyBhbiBgaW5ncmVkaWVudGAgb2JqZWN0IGFuZFxuICogICAgICAgZGlzcGxheXMgaXQgaW4gdGhlIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnaW5saW5lJzogT3V0cHV0cyBhbiBpbmxpbmUgZWxlbWVudCBjb250YWluaW5nIHRoZSBmb3JtYXR0ZWQgZGF0YS5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IERpc3BsYXlzIGFuIGh0bWwgZm9ybSBmb3IgZWRpdGluZyBhbiBpbmdyZWRpZW50LlxuICpcbiAqIFx0XHRcdCBXaGVuIHVzZWQgaW5zaWRlIGFuIGBuZ1JlcGVhdGAgZGlyZWN0aXZlLCB5b3UgY2FuIHNldCB0aGUgaW5ncmVkaWVudCdzXG4gKiBcdFx0XHQgb3JkZXIgcHJvcGVydHkgYnkgcGFzc2luZyBhbiBleHByZXNzaW9uIHRvIGBvcmRlcmAuXG4gKlxuICogXHRcdFx0IFRvIHNob3cgYSByZW1vdmUgYnV0dG9uLCBzZXQgdGhlIGBvblJlbW92ZWAgaGFuZGxlci5cbiAqXG4gKiBAZXhhbXBsZSA8bGk+PHJ0LWluZ3JlZGllbnQgaW5ncmVkaWVudD1cImluZ3JlZGllbnRcIiBmb3JtYXQ9XCJpbmxpbmVcIj48L3J0LWluZ3JlZGllbnQ+PC9saT5cbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9JbmdyZWRpZW50XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMuaW5ncmVkaWVudCcpXG4gICAgICAuZGlyZWN0aXZlKCdydEluZ3JlZGllbnQnLCBSVEluZ3JlZGllbnQpO1xuXG4gIGZ1bmN0aW9uIFJUSW5ncmVkaWVudCgpIHtcbiAgICB2YXIgRk9STUFUX0lOTElORSA9ICdpbmxpbmUnLFxuICAgICAgICBGT1JNQVRfRk9STSA9IFwiZm9ybVwiO1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgY29udHJvbGxlcjogJ1JUSW5ncmVkaWVudENvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgaW5ncmVkaWVudDogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgICAgb25SZW1vdmU6ICcmJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuXG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgdm0pIHtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLmluZ3JlZGllbnQgPSBzY29wZS5pbmdyZWRpZW50O1xuICAgICAgdm0ub25SZW1vdmUgPSBzY29wZS5vblJlbW92ZTtcblxuICAgICAgdm0uZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoKHZtLmZvcm1hdCkge1xuICAgICAgICAgIGNhc2UgRk9STUFUX0lOTElORTpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC9pbmdyZWRpZW50LWlubGluZS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9pbmdyZWRpZW50L2luZ3JlZGllbnQtaW5saW5lLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAZGVzYyBhdHRyaWJ1dGUgZGlyZWN0aXZlIGZvciBgPGlucHV0PmAgZWxlbWVudHMgdGhhdCB2YWxpZGF0ZXMgYSBtYXRjaGluZ1xuICogdmFsdWUgdG8gYW5vdGhlciBgPGlucHV0PmAuXG4gKlxuICogQGV4YW1wbGUgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0MlwiIGlucHV0LW1hdGNoPVwiaW5wdXQxXCI+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaC9EaXJlY3RpdmVcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvSW5wdXRNYXRjaFxuICogQHNpbmNlIDAuMS4wXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLmlucHV0TWF0Y2gnKVxuICAgICAgLmRpcmVjdGl2ZSgnaW5wdXRNYXRjaCcsIElucHV0TWF0Y2gpO1xuXG4gIGZ1bmN0aW9uIElucHV0TWF0Y2goKSB7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGlucHV0TWF0Y2g6ICc9JyxcbiAgICAgIH0sXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgIGlmICghc2NvcGUuaW5wdXRNYXRjaCkgeyByZXR1cm47IH1cblxuICAgICAgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dCh2YWx1ZSkge1xuICAgICAgICBpZiAobmdNb2RlbC4kdW50b3VjaGVkIHx8IG5nTW9kZWwuJHByaXN0aW5lKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHZhciB0YXJnZXRWYWx1ZSA9IHNjb3BlLmlucHV0TWF0Y2guJHZpZXdWYWx1ZTtcbiAgICAgICAgdmFyIGlzTWF0Y2ggPSBCb29sZWFuKHZhbHVlID09PSB0YXJnZXRWYWx1ZSk7XG5cbiAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoJ2lucHV0TWF0Y2gnLCBpc01hdGNoKTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIG5nTW9kZWwuJHBhcnNlcnMudW5zaGlmdCh2YWxpZGF0ZUlucHV0KTtcbiAgICAgIG5nTW9kZWwuJGZvcm1hdHRlcnMudW5zaGlmdCh2YWxpZGF0ZUlucHV0KTtcblxuICAgIH1cblxuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnlJdGVtJywgUlRNYXNvbnJ5SXRlbSk7XG5cbiAgZnVuY3Rpb24gUlRNYXNvbnJ5SXRlbSgkdGltZW91dCkge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAuJGVtaXQoYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBSVE1hc29ucnlJdGVtLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnlTdGFtcCcsIFJUTWFzb25yeVN0YW1wKTtcblxuICBmdW5jdGlvbiBSVE1hc29ucnlTdGFtcCgkdGltZW91dCkge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAuJGVtaXQoYXR0cnMucnRUYWcgfHwgJ21hc29ucnktaXRlbS1hZGRlZCcsIGVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG4gIFJUTWFzb25yeVN0YW1wLiRpbmplY3QgPSBbXCIkdGltZW91dFwiXTtcbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5L0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9NYXNvbnJ5XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMubWFzb25yeScpXG4gICAgICAuZGlyZWN0aXZlKCdydE1hc29ucnknLCBSVE1hc29ucnkpO1xuXG4gIGZ1bmN0aW9uIFJUTWFzb25yeSgkdGltZW91dCkge1xuXG4gICAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBpdGVtU2VsZWN0b3I6ICdbcnQtbWFzb25yeS1pdGVtXScsXG4gICAgICB9O1xuICAgICAgdmFyIG1hc29ucnk7XG4gICAgICB2YXIgZGlydHkgPSB0cnVlO1xuXG4gICAgICAkdGltZW91dChvbkNvbnRhaW5lclJlYWR5KTtcblxuICAgICAgZnVuY3Rpb24gb25Db250YWluZXJSZWFkeSgpIHtcbiAgICAgICAgbWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1lbnRbMF0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHNjb3BlLiRvbihhdHRycy5ydFRhZyB8fCAnbWFzb25yeS1pdGVtLWFkZGVkJywgb25JdGVtQWRkZWQpO1xuXG4gICAgICAgIGlmIChhdHRycy5ydFdhdGNoKSB7XG4gICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnJ0V2F0Y2ggKyAnJywgb25JdGVtc0NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uSXRlbUFkZGVkKGV2ZW50LCBpdGVtLCBpc1N0YW1wKSB7XG4gICAgICAgIGlmIChpc1N0YW1wKSB7XG4gICAgICAgICAgbWFzb25yeS5zdGFtcChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgcmVsb2FkSXRlbXMoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25JdGVtc0NoYW5nZWQoaXRlbXMpIHtcbiAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICByZWxvYWRJdGVtcygpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZWxvYWRJdGVtcygpIHtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgICAgICBtYXNvbnJ5LnJlbG9hZEl0ZW1zKCk7XG4gICAgICAgICAgICBtYXNvbnJ5LmxheW91dCgpO1xuXG4gICAgICAgICAgICBkaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuICBSVE1hc29ucnkuJGluamVjdCA9IFtcIiR0aW1lb3V0XCJdO1xufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHJlY2lwZSBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JlY2lwZS9Db250cm9sbGVyXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1JlY2lwZVxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1JUUmVjaXBlQ29udHJvbGxlcicsIFJUUmVjaXBlQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUlRSZWNpcGVDb250cm9sbGVyKCRzdGF0ZSwgJHdpbmRvdywgUmVjaXBlU2VydmljZSwgU2x1Zykge1xuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5yYXRpbmcgPSB7IG1heDogNSwgfTtcblxuICAgIHZtLmdldFRodW1ibmFpbCA9IGdldFRodW1ibmFpbDtcbiAgICB2bS5pZFRva2VuID0gJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbjtcbiAgICB2bS5vblBpY3R1cmVVcGxvYWQgPSBvblBpY3R1cmVVcGxvYWQ7XG4gICAgdm0uZ2VuZXJhdGVDYXRlZ29yeVNsdWcgPSBnZW5lcmF0ZUNhdGVnb3J5U2x1ZztcbiAgICB2bS5hZGRJbmdyZWRpZW50ID0gYWRkSW5ncmVkaWVudDtcbiAgICB2bS5vbkluZ3JlZGllbnRSZW9yZGVyID0gb25JbmdyZWRpZW50UmVvcmRlcjtcbiAgICB2bS5yZW1vdmVJbmdyZWRpZW50ID0gcmVtb3ZlSW5ncmVkaWVudDtcbiAgICB2bS5hZGRTdGVwID0gYWRkU3RlcDtcbiAgICB2bS5vblN0ZXBSZW9yZGVyID0gb25TdGVwUmVvcmRlcjtcbiAgICB2bS5yZW1vdmVTdGVwID0gcmVtb3ZlU3RlcDtcbiAgICB2bS5zYXZlUmVjaXBlID0gc2F2ZVJlY2lwZTtcbiAgICB2bS5kZWxldGVSZWNpcGUgPSBkZWxldGVSZWNpcGU7XG5cbiAgICAvLyBUT0RPOiBTYXZlIGZvcm0gZmllbGRzIGluIHNlc3Npb25TdG9yYWdlIHRvIHBlcnNpc3QgdGhyb3VnaCByZWZyZXNoXG5cbiAgICBmdW5jdGlvbiBnZXRUaHVtYm5haWwoKSB7XG4gICAgICBpZiAoIXZtLnJlY2lwZSB8fCAhdm0ucmVjaXBlLnRodW1ibmFpbCkge1xuICAgICAgICByZXR1cm4gJ2Fzc2V0L2ltZy9yZWNpcGUtaW1hZ2UtcGxhY2Vob2xkZXItMzYweDI0MC5wbmcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdm0ucmVjaXBlLnRodW1ibmFpbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBpY3R1cmVVcGxvYWQoZmlsZSwgbWVzc2FnZSwgZmxvdykge1xuICAgICAgdm0ucmVjaXBlLnRodW1ibmFpbCA9IEpTT04ucGFyc2UobWVzc2FnZSkucGhvdG8udXJsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2F0ZWdvcnlTbHVnKCkge1xuICAgICAgdm0ucmVjaXBlLmNhdGVnb3J5LnNsdWcgPSBTbHVnLnNsdWdpZnkodm0ucmVjaXBlLmNhdGVnb3J5LmxhYmVsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmdyZWRpZW50KCkge1xuICAgICAgdm0ucmVjaXBlLmluZ3JlZGllbnRzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLmluZ3JlZGllbnRzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkluZ3JlZGllbnRSZW9yZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHNbaV0ub3JkZXIgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVJbmdyZWRpZW50KGluZ3JlZGllbnQpIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5pbmdyZWRpZW50cy5pbmRleE9mKGluZ3JlZGllbnQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuaW5ncmVkaWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdGVwKCkge1xuICAgICAgdm0ucmVjaXBlLnN0ZXBzLnB1c2goe1xuICAgICAgICBvcmRlcjogdm0ucmVjaXBlLnN0ZXBzLmxlbmd0aCArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0ZXBSZW9yZGVyKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZtLnJlY2lwZS5zdGVwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHNbaV0ub3JkZXIgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTdGVwKHN0ZXApIHtcbiAgICAgIHZhciBpbmRleCA9IHZtLnJlY2lwZS5zdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2bS5yZWNpcGUuc3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlUmVjaXBlKCkge1xuICAgICAgaWYgKHZtLnJlY2lwZS5faWQpIHtcbiAgICAgICAgLy8gUmVjaXBlIGV4aXN0cyBpbiB0aGUgZGF0YWJhc2UsIHNvIGRvIHVwZGF0ZVxuICAgICAgICBSZWNpcGVTZXJ2aWNlXG4gICAgICAgICAgLnVwZGF0ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCB2bS5yZWNpcGUsIGZ1bmN0aW9uKHJlY2lwZSkge1xuICAgICAgICAgICAgdm0ucmVjaXBlID0gcmVjaXBlO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBTaG93IHN1Y2Nlc3MvZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgJHN0YXRlLmdvKCdeLnZpZXcnLCB7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5ldyByZWNpcGUsIGRvIHNhdmVcbiAgICAgICAgUmVjaXBlU2VydmljZVxuICAgICAgICAgIC5zYXZlKHZtLnJlY2lwZSwgZnVuY3Rpb24ocmVjaXBlKSB7XG4gICAgICAgICAgICB2bS5yZWNpcGUgPSByZWNpcGU7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ14udmlldycsIHsgcmVjaXBlSWQ6IHZtLnJlY2lwZS5faWQsIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVJlY2lwZSgpIHtcbiAgICAgIFJlY2lwZVNlcnZpY2VcbiAgICAgICAgLnJlbW92ZSh7IHJlY2lwZUlkOiB2bS5yZWNpcGUuX2lkLCB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlLCBwcm92aWRlIHVuZG8gYWN0aW9uXG4gICAgICAgICAgJHN0YXRlLmdvKCdeLmxpc3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFJUUmVjaXBlQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHN0YXRlXCIsIFwiJHdpbmRvd1wiLCBcIlJlY2lwZVNlcnZpY2VcIiwgXCJTbHVnXCJdO1xuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAqXG4gKiBAZGVzYyBSZWNpcGUgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgcmVjaXBlYCBvYmplY3QgYW5kIGRpc3BsYXlzIGl0IGluIHRoZVxuICogICAgICAgc3BlY2lmaWVkIGBmb3JtYXRgLiBBdmFpbGFibGUgZm9ybWF0cyBhcmU6XG4gKlxuICogXHRcdFx0XHQtICdjYXJkJzogQSBzbGltIHZpZXcgdGhhdCBpcyBwZXJmZWN0IGZvciBkaXNwbGF5aW5nIGluIGEgbGlzdCBvZiByb3dzXG4gKiBcdFx0XHRcdFx0XHRcdFx0XHRvciB0aWxlcy9jYXJkcy5cbiAqIFx0XHRcdFx0LSAnZnVsbCc6IEZ1bGwgdmlldyBzdWl0YWJsZSBmb3IgZnVsbCBwYWdlIG9yIGRldGFpbCB2aWV3LiBTaG93cyBhbGxcbiAqIFx0XHRcdFx0XHRcdFx0XHRcdGF2YWlsYWJsZSBmaWVsZHMuXG4gKiBcdFx0XHRcdC0gJ2Zvcm0nOiBGdWxsIHZpZXcgd2ViIGZvcm0gZm9yIGVkaXRpbmcgb3IgY3JlYXRpbmcgcmVjaXBlcy5cbiAqXG4gKiBAZXhhbXBsZSA8bGkgY2xhc3M9XCJjb2wtbWQtNFwiPjxydC1yZWNpcGUgcmVjaXBlPVwicmVjaXBlXCIgZm9ybWF0PVwiY2FyZFwiPjwvcnQtcmVjaXBlPjwvbGk+XG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvUmVjaXBlL0RpcmVjdGl2ZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9SZWNpcGVcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5yZWNpcGUnKVxuICAgICAgLmRpcmVjdGl2ZSgncnRSZWNpcGUnLCBSVFJlY2lwZSk7XG5cbiAgZnVuY3Rpb24gUlRSZWNpcGUoKSB7XG4gICAgdmFyIEZPUk1BVF9DQVJEID0gJ2NhcmQnLFxuICAgICAgICBGT1JNQVRfRlVMTCA9ICdmdWxsJyxcbiAgICAgICAgRk9STUFUX0ZPUk0gPSBcImZvcm1cIjtcblxuICAgIHZhciBGT1JNX01FVEhPRF9QT1NUID0gXCJwb3N0XCIsXG4gICAgICAgIEZPUk1fTUVUSE9EX1BVVCA9IFwicHV0XCI7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRSZWNpcGVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIHJlY2lwZTogJz0nLFxuICAgICAgICBmb3JtYXQ6ICdAJyxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgbmctaW5jbHVkZT1cInZtLmdldFRlbXBsYXRlVXJsKClcIj48L2Rpdj4nLFxuICAgICAgbGluazogbGluayxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICAgIGZ1bmN0aW9uIGdldFRlbXBsYXRlVXJsKGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBzd2l0Y2goYXR0cnMuZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgRk9STUFUX0NBUkQ6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZ1bGwudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGNhc2UgRk9STUFUX0ZPUk06XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWNhcmQudGVtcGxhdGUuaHRtbCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICBpZiAoYXR0cnMuZm9ybWF0ID09PSBGT1JNQVRfRk9STSAmJiAhc2NvcGUucmVjaXBlLl9pZCkge1xuICAgICAgICB2bS5zYXZlTWV0aG9kID0gRk9STV9NRVRIT0RfUE9TVDtcbiAgICAgICAgdm0udGl0bGUgPSAnTmV3IFJlY2lwZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bS5zYXZlTWV0aG9kID0gRk9STV9NRVRIT0RfUFVUO1xuICAgICAgICB2bS50aXRsZSA9ICdFZGl0IFJlY2lwZSc7XG4gICAgICB9XG5cbiAgICAgIHZtLnJlY2lwZSA9IHNjb3BlLnJlY2lwZTtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcblxuICAgICAgLy8gR2V0IHRlbXBsYXRlIHVybCBpbiBsaW5rIGZ1bmN0aW9uIHRvIHVzZSByZXNvbHZlZCBhdHRyaWJ1dGVzXG4gICAgICB2bS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2godm0uZm9ybWF0KSB7XG4gICAgICAgICAgY2FzZSBGT1JNQVRfQ0FSRDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICAgIGNhc2UgRk9STUFUX0ZVTEw6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3JlY2lwZS9yZWNpcGUtZnVsbC50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLWZvcm0udGVtcGxhdGUuaHRtbCc7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS1jYXJkLnRlbXBsYXRlLmh0bWwnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuXG5cbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgcmVjaXBlIHN0ZXAgY29tcG9uZW50IGNvbnRyb2xsZXJcbiAqXG4gKiBAbmFtZXNwYWNlIFJlY2lwZVRvbWUvQ29tcG9uZW50cy9TdGVwL0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvU3RlcFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5jb250cm9sbGVyKCdSVFN0ZXBDb250cm9sbGVyJywgUlRTdGVwQ29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gUlRTdGVwQ29udHJvbGxlcigpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICB9XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc3RlcCBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQGRlc2MgUmVjaXBlIHN0ZXAgZGlyZWN0aXZlIHRoYXQgdGFrZXMgYSBgc3RlcGAgb2JqZWN0IGFuZFxuICogICAgICAgZGlzcGxheXMgaXQgaW4gdGhlIHNwZWNpZmllZCBgZm9ybWF0YC4gQXZhaWxhYmxlIGZvcm1hdHMgYXJlOlxuICpcbiAqIFx0XHRcdFx0LSAnaW5saW5lJzogT3V0cHV0cyBhbiBpbmxpbmUgZWxlbWVudCBjb250YWluaW5nIHRoZSBmb3JtYXR0ZWQgZGF0YS5cbiAqIFx0XHRcdFx0LSAnZm9ybSc6IERpc3BsYXlzIGFuIGh0bWwgZm9ybSBmb3IgZWRpdGluZyBhIHN0ZXAuXG4gKlxuICogXHRcdFx0IFdoZW4gdXNlZCBpbnNpZGUgYW4gYG5nUmVwZWF0YCBkaXJlY3RpdmUsIHlvdSBjYW4gc2V0IHRoZSBzdGVwJ3NcbiAqIFx0XHRcdCBvcmRlciBwcm9wZXJ0eSBieSBwYXNzaW5nIGFuIGV4cHJlc3Npb24gdG8gYG9yZGVyYC5cbiAqXG4gKiBcdFx0XHQgVG8gc2hvdyBhIHJlbW92ZSBidXR0b24sIHNldCB0aGUgYG9uUmVtb3ZlYCBoYW5kbGVyLlxuICpcbiAqIEBleGFtcGxlIDxsaT48cnQtc3RlcCBzdGVwPVwic3RlcFwiIGZvcm1hdD1cImlubGluZVwiPjwvcnQtc3RlcD48L2xpPlxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXAvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1N0ZXBcbiAqIEBzaW5jZSAwLjEuMFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnY29tcG9uZW50cy5zdGVwJylcbiAgICAgIC5kaXJlY3RpdmUoJ3J0U3RlcCcsIFJUU3RlcCk7XG5cbiAgZnVuY3Rpb24gUlRTdGVwKCkge1xuICAgIHZhciBGT1JNQVRfSU5MSU5FID0gJ2lubGluZScsXG4gICAgICAgIEZPUk1BVF9GT1JNID0gXCJmb3JtXCI7XG5cbiAgICB2YXIgZGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICBjb250cm9sbGVyOiAnUlRTdGVwQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICBzY29wZToge1xuICAgICAgICBzdGVwOiAnPScsXG4gICAgICAgIGZvcm1hdDogJ0AnLFxuICAgICAgICBvblJlbW92ZTogJyYnLFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBuZy1pbmNsdWRlPVwidm0uZ2V0VGVtcGxhdGVVcmwoKVwiPjwvZGl2PicsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHZtKSB7XG4gICAgICB2bS5zdGVwID0gc2NvcGUuc3RlcDtcbiAgICAgIHZtLmZvcm1hdCA9IHNjb3BlLmZvcm1hdDtcbiAgICAgIHZtLm9uUmVtb3ZlID0gc2NvcGUub25SZW1vdmU7XG5cbiAgICAgIHZtLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCh2bS5mb3JtYXQpIHtcbiAgICAgICAgICBjYXNlIEZPUk1BVF9JTkxJTkU6XG4gICAgICAgICAgICByZXR1cm4gJ2FwcC9jb21wb25lbnRzL3N0ZXAvc3RlcC1ibG9jay50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBjYXNlIEZPUk1BVF9GT1JNOlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtZm9ybS50ZW1wbGF0ZS5odG1sJztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdhcHAvY29tcG9uZW50cy9zdGVwL3N0ZXAtYmxvY2sudGVtcGxhdGUuaHRtbCc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gIH1cblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgbWVudSBjb21wb25lbnQgY29udHJvbGxlclxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51L0NvbnRyb2xsZXJcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnVcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2NvbXBvbmVudHMudXNlcm1lbnUnKVxuICAgICAgLmNvbnRyb2xsZXIoJ1VzZXJNZW51Q29udHJvbGxlcicsIFVzZXJNZW51Q29udHJvbGxlcik7XG5cbiAgZnVuY3Rpb24gVXNlck1lbnVDb250cm9sbGVyKCRzdGF0ZSwgVXNlclNlcnZpY2UpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0uaXNMb2dnZWRJbiA9IFVzZXJTZXJ2aWNlLmlzTG9nZ2VkSW47XG4gICAgdm0ubG9nb3V0ID0gbG9nb3V0O1xuXG4gICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgVXNlclNlcnZpY2UubG9nb3V0KCk7XG5cbiAgICAgIC8vIFRPRE86IFNob3cgc3VjY2Vzcy9lcnJvciBtZXNzYWdlXG4gICAgICAkc3RhdGUuZ28oJ3dlbGNvbWUnKTtcbiAgICB9XG4gIH1cbiAgVXNlck1lbnVDb250cm9sbGVyLiRpbmplY3QgPSBbXCIkc3RhdGVcIiwgXCJVc2VyU2VydmljZVwiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgbWVudSBjb21wb25lbnQgZGlyZWN0aXZlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL0NvbXBvbmVudHMvVXNlck1lbnUvRGlyZWN0aXZlXG4gKiBAbWVtYmVyb2YgUmVjaXBlVG9tZS9Db21wb25lbnRzL1VzZXJNZW51XG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdjb21wb25lbnRzLnVzZXJtZW51JylcbiAgICAgIC5kaXJlY3RpdmUoJ3VzZXJNZW51JywgVXNlck1lbnUpO1xuXG4gIGZ1bmN0aW9uIFVzZXJNZW51KCkge1xuICAgIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdVc2VyTWVudUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy91c2VybWVudS91c2VybWVudS50ZW1wbGF0ZS5odG1sJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgfVxuXG59KShhbmd1bGFyKTtcbiIsIi8qKlxuICogUmVjaXBlIFRvbWUgdXNlciBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gKlxuICogQG5hbWVzcGFjZSBSZWNpcGVUb21lL1NlcnZpY2VzL0F1dGgvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvQXV0aFxuICovXG47KGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc2VydmljZXMuYXV0aCcpXG4gICAgICAuZmFjdG9yeSgnQXV0aFNlcnZpY2UnLCBBdXRoU2VydmljZSk7XG5cbiAgZnVuY3Rpb24gQXV0aFNlcnZpY2UoJGh0dHAsICR3aW5kb3csIGp3dEhlbHBlcikge1xuXG4gICAgLy8gVE9ETzogQWRkIHZlcmlmeSBmdW5jdGlvblxuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBkb0xvY2FsUmVnaXN0cmF0aW9uOiBkb0xvY2FsUmVnaXN0cmF0aW9uLFxuICAgICAgZG9Mb2NhbExvZ2luOiBkb0xvY2FsTG9naW4sXG4gICAgICByZXZva2U6IHJldm9rZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNlcnZpY2U7XG5cbiAgICBmdW5jdGlvbiBkb0xvY2FsUmVnaXN0cmF0aW9uKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwvcmVnaXN0ZXInLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25SZWdpc3RyYXRpb25FcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9Mb2NhbExvZ2luKHVzZXIpIHtcbiAgICAgIHJldHVybiAkaHR0cFxuICAgICAgICAucG9zdCgnL2F1dGgvbG9jYWwnLCB1c2VyKVxuICAgICAgICAuc3VjY2VzcyhvbkF1dGhTdWNjZXNzKVxuICAgICAgICAuZXJyb3Iob25Mb2dpbkVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXZva2UoKSB7XG4gICAgICAkd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25BdXRoU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4gPSByZXNwb25zZS5pZF90b2tlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlZ2lzdHJhdGlvbkVycm9yKHJlc3BvbnNlKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTG9naW5FcnJvcihkYXRhKSB7XG4gICAgICByZXZva2UoKTtcblxuICAgICAgLy8gVE9ETzogUHJvdmlkZSBlcnJvciBmZWVkYmFja1xuICAgIH1cblxuICB9XG4gIEF1dGhTZXJ2aWNlLiRpbmplY3QgPSBbXCIkaHR0cFwiLCBcIiR3aW5kb3dcIiwgXCJqd3RIZWxwZXJcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIiwiLyoqXG4gKiBSZWNpcGUgVG9tZSByZWNpcGUgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9SZWNpcGUvU2VydmljZVxuICogQG1lbWJlcm9mIFJlY2lwZVRvbWUvU2VydmljZXMvUmVjaXBlXG4gKi9cbjsoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdzZXJ2aWNlcy5yZWNpcGUnKVxuICAgICAgLmZhY3RvcnkoJ1JlY2lwZVNlcnZpY2UnLCBSZWNpcGVTZXJ2aWNlKTtcblxuICBmdW5jdGlvbiBSZWNpcGVTZXJ2aWNlKCRyZXNvdXJjZSwgJHdpbmRvdykge1xuICAgIHZhciBfaGVhZGVycyA9IHtcbiAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgfTtcblxuICAgIHZhciBzZXJ2aWNlID0gJHJlc291cmNlKFxuICAgICAgJy9hcGkvdXNlci9yZWNpcGVzLzpyZWNpcGVJZCcsXG4gICAgICB7IHJlY2lwZUlkOiAnQHJlY2lwZUlkJywgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0OiB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICBzYXZlOiB7IG1ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgcXVlcnk6IHsgbWV0aG9kOiAnR0VUJywgaXNBcnJheTogdHJ1ZSwgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICAgIHJlbW92ZTogeyBtZXRob2Q6ICdERUxFVEUnLCBoZWFkZXJzOiBfaGVhZGVycywgfSxcbiAgICAgICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScsIGhlYWRlcnM6IF9oZWFkZXJzLCB9LFxuICAgICAgICB1cGRhdGU6IHsgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogX2hlYWRlcnMsIH0sXG4gICAgICB9KTtcblxuICAgIHJldHVybiBzZXJ2aWNlO1xuXG4gIH1cbiAgUmVjaXBlU2VydmljZS4kaW5qZWN0ID0gW1wiJHJlc291cmNlXCIsIFwiJHdpbmRvd1wiXTtcblxufSkoYW5ndWxhcik7XG4iLCIvKipcbiAqIFJlY2lwZSBUb21lIHVzZXIgc2VydmljZVxuICpcbiAqIEBuYW1lc3BhY2UgUmVjaXBlVG9tZS9TZXJ2aWNlcy9Vc2VyL1NlcnZpY2VcbiAqIEBtZW1iZXJvZiBSZWNpcGVUb21lL1NlcnZpY2VzL1VzZXJcbiAqL1xuOyhmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NlcnZpY2VzLnVzZXInKVxuICAgICAgLmZhY3RvcnkoJ1VzZXJTZXJ2aWNlJywgVXNlclNlcnZpY2UpO1xuXG4gIGZ1bmN0aW9uIFVzZXJTZXJ2aWNlKCRodHRwLCAkd2luZG93LCAkcSwgQXV0aFNlcnZpY2UpIHtcbiAgICB2YXIgR1JBVkFUQVJfQkFTRVVSTCA9ICdodHRwOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJztcblxuICAgIHZhciBfY3VycmVudFVzZXIgPSBudWxsO1xuXG4gICAgdmFyIHNlcnZpY2UgPSB7XG4gICAgICBpc0xvZ2dlZEluOiBpc0xvZ2dlZEluLFxuICAgICAgZ2V0Q3VycmVudFVzZXI6IGdldEN1cnJlbnRVc2VyLFxuICAgICAgZ2V0R3JhdmF0YXJBdmF0YXJVcmw6IGdldEdyYXZhdGFyQXZhdGFyVXJsLFxuICAgICAgdXBkYXRlQ3JlZGVudGlhbHM6IHVwZGF0ZUNyZWRlbnRpYWxzLFxuICAgICAgdW5yZWdpc3RlcjogdW5yZWdpc3RlcixcbiAgICAgIGxvZ291dDogbG9nb3V0LFxuICAgIH07XG5cbiAgICByZXR1cm4gc2VydmljZTtcblxuICAgIGZ1bmN0aW9uIGlzTG9nZ2VkSW4oKSB7XG4gICAgICByZXR1cm4gX2N1cnJlbnRVc2VyID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICAgICAgaWYgKF9jdXJyZW50VXNlcikge1xuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9jdXJyZW50VXNlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IFZlcmlmeSB3aXRoIEF1dGhTZXJ2aWNlIHRvIHJlbW92ZSAkd2luZG93IGRlcGVuZGVuY3lcbiAgICAgIGlmICgkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLmdldCgnL2FwaS91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogJHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5pZF90b2tlbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS50aGVuKG9uR2V0Q3VycmVudFVzZXJTdWNjZXNzKVxuICAgICAgICAgICAgLmNhdGNoKG9uR2V0Q3VycmVudFVzZXJFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXG4gICAgICBmdW5jdGlvbiBvbkdldEN1cnJlbnRVc2VyU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBfY3VycmVudFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoX2N1cnJlbnRVc2VyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25HZXRDdXJyZW50VXNlckVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmF2YXRhckF2YXRhclVybCgpIHtcbiAgICAgIGlmICghX2N1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiAnJzsgLy8gVE9ETzogUmV0dXJuIHBsYWNlaG9sZGVyIGF2YXRhclxuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENShfY3VycmVudFVzZXIuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpLnRvU3RyaW5nKCk7XG5cbiAgICAgIHJldHVybiBHUkFWQVRBUl9CQVNFVVJMICsgaGFzaCArICcuanBnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgLy8gVE9ETzogVmVyaWZ5IHdpdGggQXV0aFNlcnZpY2UgdG8gcmVtb3ZlICR3aW5kb3cgZGVwZW5kZW5jeVxuICAgICAgaWYgKCR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuICRodHRwXG4gICAgICAgICAgLnB1dCgnL2FwaS91c2VyLycsIGNyZWRlbnRpYWxzLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICd4LWFjY2Vzcy10b2tlbic6ICR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuaWRfdG9rZW4sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihvblVwZGF0ZUNyZWRlbnRpYWxzU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaChvblVwZGF0ZUNyZWRlbnRpYWxzRXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblVwZGF0ZUNyZWRlbnRpYWxzU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBfY3VycmVudFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHJldHVybiBBdXRoU2VydmljZVxuICAgICAgICAgIC5kb0xvY2FsTG9naW4oe1xuICAgICAgICAgICAgZW1haWw6IF9jdXJyZW50VXNlci5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25VcGRhdGVDcmVkZW50aWFsc0Vycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIFRPRE86IERpc3BsYXkgZXJyb3IgdG8gdXNlclxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gICAgICByZXR1cm4gJGh0dHBcbiAgICAgICAgLmRlbGV0ZSgnL2FwaS91c2VyLycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiAkd2luZG93LnNlc3Npb25TdG9yYWdlLmlkX3Rva2VuLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4obG9nb3V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICBBdXRoU2VydmljZVxuICAgICAgICAucmV2b2tlKCk7XG5cbiAgICAgIF9jdXJyZW50VXNlciA9IG51bGw7XG4gICAgfVxuXG4gIH1cbiAgVXNlclNlcnZpY2UuJGluamVjdCA9IFtcIiRodHRwXCIsIFwiJHdpbmRvd1wiLCBcIiRxXCIsIFwiQXV0aFNlcnZpY2VcIl07XG5cbn0pKGFuZ3VsYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9