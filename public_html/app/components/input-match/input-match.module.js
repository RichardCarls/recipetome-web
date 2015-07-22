/**
 * @name InputMatch
 * @description Directive for validating an `<input>` field by requiring its
 * value to match that of another `<input>` field. Useful for confirming
 * passwords.
 * @example
 * <input type="text" name="input1" />
 *
 * // Value must match `input1` to be valid, pass the angular form model
 * <input type="text" name="input2" input-match="form.input1" />
 * @since 0.1.0
 *
 * @namespace RecipeTome/Components/InputMatch
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.inputMatch', []);

})(angular);
