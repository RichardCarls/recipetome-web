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
