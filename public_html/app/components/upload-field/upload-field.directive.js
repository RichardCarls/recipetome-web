/**
 * @name UploadField:directive
 * @description Directive recognizes the following attributes:
 * - `uploadField`: An optional unique identifier for cases where multiple file
 * upload fields are needed.
 * - `actionLabel`: Text to go inside the appended `<label>` element.
 * - `actionLabelClasses`: Classes for styling the appended `<label>`.
 * - `onFileSelected`: A callback to run when the user selects a file or files.
 * The files array is passed to the callback function.
 * @see RecipeTome/Components/UploadField
 * @since 0.1.1
 *
 * @memberof RecipeTome/Components/InputMatch
 */
;(function(angular) {
  'use strict';

  angular
    .module('components.uploadField')
      .directive('uploadField', UploadField);

  /**
   * @class
   */
  function UploadField($compile) {

    // ---
    var directive = {
      require: '?ngModel',
      restrict: 'A',
      scope: {
        uploadField: '@',
        actionLabel: '@',
        actionLabelClasses: '@',
        onFileSelected: '&',
      },
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
    function link(scope, element, attrs, ngModel) {
      var fileInputId = scope.suiUploadField || 'uploadField';
      var actionLabelClasses = scope.actionLabelClasses || 'ui button';

      // Append action label
      var actionButton = angular.element(
        '<label class="' + actionLabelClasses + '" for="' + fileInputId + '">{{::actionLabel}}</label>'
      );
      $compile(actionButton)(scope);
      element.parent().append(actionButton);

      // Append fileInput
      var fileInput = angular.element(
        '<input style="display: none;" type="file" id="' + fileInputId + '" />'
      );
      $compile(fileInput)(scope);
      element.parent().append(fileInput);

      fileInput.bind('change', onFileSelected);


      /**
       * @callback
       */
      function onFileSelected() {
        if (scope.onFileSelected) {
          scope.onFileSelected({ files: fileInput[0].files });

          // If input has ngModel, set dirty when user selects a file(s)
          if (ngModel) {
            ngModel.$setDirty(true);
          }
        }
      }
    }
  }

})(angular);
