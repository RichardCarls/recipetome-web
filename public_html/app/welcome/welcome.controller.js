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
