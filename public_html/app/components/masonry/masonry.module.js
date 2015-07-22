/**
 * @name RTMasonry
 * @description Set of directives for implementing masonry layout.
 * @example
 * <ul rt-masonry
 * 		 rt-tag="myGrid"
 * 		 rt-watch="myItemsCollection">
 *
 *   <li rt-masonry-stamp
 *   		 rt-tag="myGrid">
 *     <span>This is a stamp element, grid items will layout around me.</span>
 *   </li>
 *
 * 	 <li ng-repeat="item in items | filter: 'order' as myItemsCollection"
 * 	 		 rt-masonry-item
 * 	 		 rt-tag="myGrid">
 * 	 	 <span>These repeated items will have masonry layout</span>
 * 	   {{item.content}}
 * 	 </li>
 * </ul>
 * @requires Masonry v3.x {@link http://masonry.desandro.com/}
 * @see RecipeTome/Components/RTMasonry:Item:directive
 * @see RecipeTome/Components/RTMasonry:Stamp:directive
 * @see RecipeTome/Components/RTMasonry:directive
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/RTMasonry
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.masonry', []);

})(angular);
