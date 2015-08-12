/**
 * @name UploadField
 * @description Directive that decorates an `<input>` field to act as a file
 * upload field. It appends a hidden `type="file"` input and a `<label>`, to be
 * styled and used as an action button addon.
 * @example
 * <input type="text" upload-field action-label="Upload" />
 * @since 0.1.1
 *
 * @namespace RecipeTome/Components/UploadField
 * @memberof RecipeTome/Components
 *
 * @author Richard Carls [richard.j.carls@gmail.com]
 * @copyright 2015 Richard Carls
 * @license MIT
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.uploadField', []);

})(angular);
