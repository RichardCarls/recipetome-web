/**
 * Recipe Tome application module
 * @namespace RecipeTome
 */
;(function(angular) {

  angular
    .module('recipetome', [
      'ui.bootstrap',
      'recipetome.welcome',
      'recipetome.signup',
    ]);

})(angular);
