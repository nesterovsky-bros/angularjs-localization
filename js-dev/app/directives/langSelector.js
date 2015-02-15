define(
  [
    "angular",
    "../module",
    "text!i18n/langSelector.html!strip"
  ],
  function(angular, module, template)
  {
    "use strict";

    module.directive(
      "langSelector",
      function()
      {
        return {
          restrict: 'A',
          scope:
          {
            langId: "=",
            langIds: "="
          },
          template: template
        };
      });
  });
