// 1. Build config.
require(
{
  waitSeconds: 3600,

  paths:
  {
    angular: "//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular",
    "angular-ui-bootstrap": "//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0",
  },

  shim:
  {
    angular: { exports: "angular" },
    "angular-ui-bootstrap": ["angular"],
  },

  config:
  {
    "app/config":
    {
      langIDs: ["en", "ru", "he"]
    }
  }
});

define(
  [
    "angular",
    "i18n/resources",
    "app/module",
    "app/application",
    "app/directives/langSelector",
    "app/directives/myForm"
  ],
  function(angular)
  {
    return angular.bootstrap(document, ["app"]);
  });
