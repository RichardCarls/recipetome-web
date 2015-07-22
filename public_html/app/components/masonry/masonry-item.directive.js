/**
 * @name RTMasonry:Item:directive
 * @description Directive recognizes the following attributes:
 * - `rtTag`: A tag to differentiate between multiple masonry layouts (optional)
 * @see RecipeTome/Components/RTMasonry
 * @since 0.1.0
 *
 * @memberof RecipeTome/Components/RTMasonry
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry')
      .directive('rtMasonryItem', RTMasonryItem);

  /**
   * @class
   * @param {angular.$timeout} $timeout
   */
  function RTMasonryItem($timeout) {

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
      $timeout(function() {
        // Wait for jQLite .ready() to ensure images are loaded
        element.ready(function() {
          scope
            .$emit(attrs.rtTag || 'masonry-item-added', element, false);
        });
      });
    }
  }
  
})(angular);
