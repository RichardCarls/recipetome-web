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
      lead: 'Recipe Tome lets you create and manage recipes.',
    };

    vm.newFeatures = [
      {
        version: 'v0.1.2',
        features: [
          'Major UI redesign',
          'Improved recipe edit form experience',
        ],
      },
      {
        version: 'v0.1.1',
        features: [
          'HTTP over TLS support',
        ],
      },
      {
        version: 'v0.1.0 - First Beta Release',
        features: [
          'User accounts',
          'Sort by category',
          'Photo upload',
        ],
      },
    ];

    vm.todoFeatures = [
      'Login with Google, Facebook, Twitter and Pinterest',
      'Recipe sharing, import and export',
      'Android App',
    ];
  }

})(angular);
