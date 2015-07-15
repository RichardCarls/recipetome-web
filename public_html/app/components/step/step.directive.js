/**
 * Recipe Tome recipe step component directive
 *
 * @desc Recipe step directive that takes a `step` object and
 *       displays it in the specified `format`. Available formats are:
 *
 * 				- 'inline': Outputs an inline element containing the formatted data.
 * 				- 'form': Displays an html form for editing a step.
 *
 * 			 When used inside an `ngRepeat` directive, you can set the step's
 * 			 order property by passing an expression to `order`.
 *
 * 			 To show a remove button, set the `onRemove` handler.
 *
 * @example <li><rt-step step="step" format="inline"></rt-step></li>
 *
 * @namespace RecipeTome/Components/Step/Directive
 * @memberof RecipeTome/Components/Step
 * @since 0.1.0
 */
;(function(angular) {

  angular
    .module('components.step')
      .directive('rtStep', RTStep);

  function RTStep() {
    var FORMAT_INLINE = 'inline',
        FORMAT_FORM = "form";

    var directive = {
      restrict: 'AE',
      controller: 'RTStepController',
      controllerAs: 'vm',
      scope: {
        step: '=',
        format: '@',
        order: '=',
        onRemove: '&',
      },
      template: '<div ng-include="vm.getTemplateUrl()"></div>',
      link: link,
    };

    return directive;

    function link(scope, element, attrs, vm) {
      vm.step = scope.step;
      vm.format = scope.format;
      vm.onRemove = scope.onRemove;

      if (scope.order) {
        vm.step.order = scope.order;
      }

      vm.getTemplateUrl = function() {
        switch(vm.format) {
          case FORMAT_INLINE:
            return 'app/components/step/step-block.template.html';
          case FORMAT_FORM:
            return 'app/components/step/step-form.template.html';
          default:
            return 'app/components/step/step-block.template.html';
        }
      };
    }

  }

})(angular);
