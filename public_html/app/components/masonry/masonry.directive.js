/**
 * @name RTMasonry:directive
 * @description Directive recognizes the following attributes:
 * - `rtTag`: A tag to differentiate between multiple masonry layouts (optional)
 * - `rtWatch`: Specifies a model to watch and perform layout on changes. (optional)
 * - `onRemove`: Callback to call when the 'remove' button is clicked. (`form` format only)
 * @see RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTMasonry
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry')
      .directive('rtMasonry', RTMasonry);

  /**
   * @class
   * @param {angular.$timeout} $timeout
   */
  function RTMasonry($timeout) {

    // ---
    var directive = {
      restrict: 'A',
      link: link,
    };

    return directive;
    // ---

    /**
     * Link function
     * @param  {angular.$scope} scope
     * @param  {angular.element} element
     * @param  {Object} attrs
     */
    function link(scope, element, attrs) {

      // FIXME: Items overlap on initial loading

      /**
       * Masonry options
       * @type {Object}
       */
      //var options = {};
      var options = { itemSelector: '[rt-masonry-item]', };

      /**
       * Masonry instance
       */
      var masonry;

      // On next digest cycle, create Masonry instance
      $timeout(onContainerReady);

      /**
       * Creates the Masonry instance, listens for RTMasonry events and watches
       * the specified items collection.
       */
      function onContainerReady() {
        masonry = new Masonry(element[0], options);

        // Listen for RTMasonry events
        scope.$on(attrs.rtTag || 'masonry-item-added', onItemAdded);

        // Watch the items collection
        if (attrs.rtWatch) {
          scope.$watch(attrs.rtWatch + '', reloadItems);
        }
      }

      /**
       * Handles items added to the layout
       *
       * @callback
       * @param  {Object}  event
       * @param  {angular.element}  item
       * @param  {Boolean} isStamp `true` if item is instance of rtStamp directive
       */
      function onItemAdded(event, item, isStamp) {
        if (isStamp) {
          masonry.stamp(item);
        }

        reloadItems();
      }

      /**
       * Reloads items and performs layout.
       */
      function reloadItems() {
        $timeout(function() {
            masonry.reloadItems();
            masonry.layout();
        });
      }
    }
  }

})(angular);
