;(function() {
  'use strict';

  describe('UNIT components.masonry', function() {

    var directiveTemplate,
        $scope,
        element;

    beforeEach(module('components.masonry'));

    beforeEach(inject(function($rootScope, $compile) {
      directiveTemplate = $(
        '<ol style="width: 200px;" rt-masonry>\n' +
        '  <li style="width: 100px; height: 100px;"\n' +
        '      ng-repeat="item in items"\n' +
        '      rt-masonry-item>\n' +
        '    <span ng-bind="item.value"></span>\n' +
        '  </li>\n' +
        '</ol>'
      );

      $scope = $rootScope;
      $scope.items = [];
      element = $compile(directiveTemplate)($scope);
      $scope.$digest();
    }));

    it('adds items to the layout', function() {
      $scope.items.push({ value: 'BLOCK', });
      $scope.items.push({ value: 'BLOCK', });
      $scope.items.push({ value: 'BLOCK', });
      $scope.items.push({ value: 'BLOCK', });

      $scope.$digest();

      expect(element.find('li').length).toBe(4);
    });
  });
})();
