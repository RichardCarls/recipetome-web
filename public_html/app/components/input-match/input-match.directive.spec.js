;(function() {
  'use strict';

  describe('UNIT components.inputMatch', function() {

    var testTemplate,
        form,
        $scope,
        element;

    beforeEach(module('components.inputMatch'));

    beforeEach(inject(function($rootScope, $compile) {
      // Simple 2 field form
      testTemplate = $(
        '<form name="form" ng-init="model = {}">\n' +
        '  <input type="text" name="input1" ng-model="model.value1" />\n' +
        '  <input type="text" name="input2" ng-model="model.value2" input-match="form.input1" />\n' +
        '</form>'
      );

      $scope = $rootScope;
      element = $compile(testTemplate)($scope);
      $scope.$digest();

      form = $scope.form;
    }));

    describe('initially', function() {
      it('should be valid with pristine inputs', function() {
        expect(form.input2.$valid).toBe(true);
      });
    });

    describe('when target input value changes', function() {
      it('should become invalid with pristine input', function() {
        element.find('[name=input1]').val('test1').triggerHandler('input');

        expect(form.input2.$valid).toBe(false);
      });

      it('should become valid if values match', function() {
        $scope.model.value1 = 'test2';
        $scope.$digest();

        element.find('[name=input2]').val('test2').triggerHandler('input');
        expect(form.input2.$valid).toBe(true);
      });
    });

    describe('when current input value changes', function() {
      it('should become invalid when values do not match', function() {
        // Start matched and valid
        $scope.model.value1 = 'test2';
        $scope.model.value2 = 'test2';
        $scope.$digest();

        // Change current value
        element.find('[name=input2]').val('test').triggerHandler('input');
        expect(form.input2.$valid).toBe(false);
      });

      it ('should become valid when values match', function() {
        // Start invalid
        $scope.model.value1 = 'test3';
        $scope.model.value2 = 'test';
        $scope.$digest();

        // Change to matching
        element.find('[name=input2]').val('test3').triggerHandler('input');
        expect(form.input2.$valid).toBe(true);
      });
    });

  });

})();
