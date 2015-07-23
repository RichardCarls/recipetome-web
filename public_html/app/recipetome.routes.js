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

})(angular);
