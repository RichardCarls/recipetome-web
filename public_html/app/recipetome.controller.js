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
