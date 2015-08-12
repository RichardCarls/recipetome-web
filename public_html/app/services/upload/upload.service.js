/**
 * @name UploadService:service
 * @description Service definition for UploadService. Provides methods to interact
 * with backend user upload endpoints for things like recipe photos and recipe
 * import.
 * @see RecipeTome/Services/UploadService
 * @since 0.1.1
 *
 * @memberof RecipeTome/Services/UploadService
 */
;(function(angular) {
  'use strict';

  angular
    .module('services.upload')
      .factory('UploadService', UploadService);

  /**
   * @class
   * @param {angular.$http} $http
   */
  function UploadService($http, AuthService) {

    var RECIPE_PHOTO_URI = '/api/user/upload/';

    // ---
    var service = {
      uploadRecipePhoto: uploadRecipePhoto,
    };

    return service;
    // ---

    function uploadRecipePhoto(photo) {
      // TODO: Detect FormData existence and fallback for <= IE9
      var formData = new FormData();
      formData.append('photo', photo);

      return $http
        .post(
          RECIPE_PHOTO_URI,
          formData,
          {
            transformRequest: angular.identity,
            headers: {
              'Content-Type': undefined,
              'x-access-token': AuthService.getIdToken(),
            }
          }
        ).then(onUploadSuccess)
        .catch(onUploadError);

      function onUploadSuccess(response) {
        return {
          success: true,
          thumbnailUrl: response.data.photo.url,
        };
      }

      function onUploadError(response) {
        return {
          success: false,
          message: response.data,
        };
      }
    }

  }
})(angular);
