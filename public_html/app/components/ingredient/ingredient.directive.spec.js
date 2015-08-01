;(function() {
  'use strict';

  describe('UNIT components.ingredient directive', function() {
    beforeEach(function() {
      module('components.ingredient');
    });

    describe('with inline fomat', function() {
      var directiveTemplate,
          element,
          $scope;

      beforeEach(inject(function($rootScope, $compile, $templateCache) {
        directiveTemplate = $(
          '<rt-ingredient ingredient="ingredient"\n' +
          '               format="inline">\n' +
          '</rt-ingredient>'
        );

        // Inline template stub
        $templateCache.put('app/components/ingredient/ingredient-inline.template.html',
          '<span id="order">{{ingredient.order}}</span>\n' +
          '<span id="qty">{{ingredient.qty}}</span>\n' +
          '<span id="measure">{{ingredient.measure}}</span>\n' +
          '<span id="name">{{ingredient.name}}</span>\n' +
          '<span id="preparation">{{ingredient.preparation}}</span>\n'
        );

        $scope = $rootScope.$new();
        $scope.ingredient = {};

        element = $compile(directiveTemplate)($scope);
        $scope.$digest();
      }));

      it('should display the ingredient data', function() {
        $scope.ingredient.order = 1;
        $scope.ingredient.qty = 1;
        $scope.ingredient.measure = 'cups';
        $scope.ingredient.name = 'flour';
        $scope.ingredient.preparation = 'sifted';

        $scope.$digest();

        expect(element.find('#order').html()).toEqual('1');
        expect(element.find('#qty').html()).toEqual('1');
        expect(element.find('#measure').html()).toEqual('cups');
        expect(element.find('#name').html()).toEqual('flour');
        expect(element.find('#preparation').html()).toEqual('sifted');
      });
    });

    describe('with form fomat', function() {
      var directiveTemplate,
          element,
          $scope;

      beforeEach(inject(function($rootScope, $compile, $templateCache) {
        directiveTemplate = $(
          '<rt-ingredient ingredient="ingredient"\n' +
          '               format="form">\n' +
          '</rt-ingredient>'
        );

        // Inline template stub
        $templateCache.put('app/components/ingredient/ingredient-form.template.html',
          '<form>\n' +
          '  <input id="order" type="number" ng-model="ingredient.order">\n' +
          '  <input id="qty" type="number" ng-model="ingredient.qty">\n' +
          '  <input id="measure" type="text" ng-model="ingredient.measure">\n' +
          '  <input id="name" type="text" ng-model="ingredient.name">\n' +
          '  <input id="preparation" type="text" ng-model="ingredient.preparation">\n' +
          '</form>'
        );

        $scope = $rootScope.$new();
        $scope.ingredient = {};

        element = $compile(directiveTemplate)($scope);
        $scope.$digest();
      }));

      it('should display the ingredient data', function() {
        $scope.ingredient.order = 1;
        $scope.ingredient.qty = 1;
        $scope.ingredient.measure = 'cups';
        $scope.ingredient.name = 'flour';
        $scope.ingredient.preparation = 'sifted';

        $scope.$digest();

        expect(element.find('#order').val()).toEqual('1');
        expect(element.find('#qty').val()).toEqual('1');
        expect(element.find('#measure').val()).toEqual('cups');
        expect(element.find('#name').val()).toEqual('flour');
        expect(element.find('#preparation').val()).toEqual('sifted');
      });
    });

  });
})();
