/**
 * @name AppendFilter:filter
 * @description
 * @see RecipeTome/Components/AppendFilter
 * @since 0.1.1
 *
 * @memberof RecipeTome/Components/AppendFilter
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.appendFilter')
      .filter('append', function() { return appendFilter; });

  /**
   * Filter function to append specified string to input conditional on an
   * optional `unless` parameter.
   *
   * @param  {String} input  the filter input
   * @param  {String} append the string to append
   * @param  {Boolean} unless if `true`, disables the filter
   * @return {String} the filtered string
   */
  function appendFilter(input, append, unless){
    var out;

    // Convert null, NaN and undefined input values to empty string and return
    if (!input && input !== 0 && input !== false) {
      return '';
    }

    // Convert null, NaN and undefined append values to empty string and return
    if (!append && append !== 0 && append !== false) {
      append = '';
    }

    input = String(input) || '';
    append = String(append) || '';

    out = input;

    if (!unless) {
      out += append;
    }

    return out;
  }

})(angular);
