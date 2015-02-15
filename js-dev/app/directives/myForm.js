define(
  [
    "angular",
    "../module",
    "text!i18n/form.html!strip"
  ],
  function(angular, module, template)
  {
    "use strict";

    module.directive(
      "myForm",
      function()
      {
        return {
          restrict: 'E',
          scope:
          {
            name: "=",
            address: "=",
            phone: "=",
            email: "=",
            onAction: "&",
          },
          template: template
        };
      });
  });
