/**
 * @name AppendFilter
 * @description Filter for appending a string with a specified string. Takes an
 * optional 2nd parameter `unless` which disables the filter if the supplied
 * expression evaluates to `true`.
 * @example
 * // Appends a comma to each item except the last in an ngRepeat directive
 * <ol>
 * 	<li ng-repeat="item in items" ng-bind="item | append: ', ' :$last"></li>
 * </ol>
 * @since 0.1.1
 *
 * @namespace RecipeTome/Components/AppendFilter
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.appendFilter', []);

})(angular);
